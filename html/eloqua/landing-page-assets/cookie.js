var domain = 'leankit.com';

// Getting Key->Val from query strings
function getQueryStrings() { 
  var assoc  = {};
  var decode = function (s) { return decodeURIComponent(s.replace(/\+/g, " ")); };
  var queryString = location.search.substring(1); 
  var keyValues = queryString.split('&'); 

  for(var i in keyValues) { 
    var key = keyValues[i].split('=');
    if (key.length > 1) {
      assoc[decode(key[0])] = decode(key[1]);
    }
  } 
  return assoc; 
}

function getVars(v) {
  var param = v;
  if (qs[param]) {
    return qs[param];
  } 
}

function lastVisitExpired() {
  var visitDate =(new Date()).getTime();
  var lastVisit = $.cookie('lk_visit');
  var timeSince = visitDate - lastVisit;
  var mrEntry = $.cookie('lk_entryURL_mr');
  $.cookie('lk_visit', visitDate, { expires: 365, path: '/', domain: 'leankit.com' });
  if ((timeSince > 86400000) || (!(lastVisit)) || (!(mrEntry))) {return true;}
}

var qs = getQueryStrings();

$(function(){
  var fields = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "docref", "entryURL"];
  $.each(fields, function( index, value ) {
    var check = $.cookie('lk_' + value + '_og'); //check if there is an og
    if ((check) || ((qs[value] == undefined) && (value !== "docref") && (value !== "entryURL"))) {}
    else {
      if (value == "docref") {        
        if (document.referrer == "") {
          $.cookie('lk_' + value + '_og', 'No Referrer/Direct', { expires: 365, path: '/', domain: domain });
        } else {
          $.cookie('lk_' + value + '_og', document.referrer, { expires: 365, path: '/', domain: domain });             
        }
      }
      
      else if (value == "entryURL") {
        $.cookie('lk_' + value + '_og', window.location, { expires: 365, path: '/', domain: domain });
      }
      else {
        $.cookie('lk_' + value + '_og', getVars(value), { expires: 365, path: '/', domain: domain });
      }
    }

    if ((qs[value] == undefined) && (value !== "docref") && (value !== "entryURL")) {} 
    else {
      if (value == "docref") {
         if (lastVisitExpired()) {
           if (document.referrer == "") {
             $.cookie('lk_' + value + '_mr', "No Referrer/Direct", { expires: 365, path: '/', domain: domain });
           } else {
             $.cookie('lk_' + value + '_mr', document.referrer, { expires: 365, path: '/', domain: domain });
           } 
        }
      }
      else if (value == "entryURL") {
        if (lastVisitExpired()) {  
            $.cookie('lk_' + value + '_mr', window.location, { expires: 365, path: '/', domain: domain });
        }
      }
      else {
        $.cookie('lk_' + value + '_mr', getVars(value), { expires: 365, path: '/', domain: domain });
      }
    }
  });
});