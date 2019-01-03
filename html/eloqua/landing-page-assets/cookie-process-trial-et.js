/**
 * Builds the account setup URL and perform any third-party tracking that needs to be done. Runs on any form that'll set up a trial. Main signup (http://info.leankit.com/get-leankit/), lite edition signup, any PPC landing page that has a trial signup form.
 */

(function() {
  var userIsTracked = false;

  // Build Account Setup URL
  function accountSetupUrl() {
    var base = 'https://signup.leankit.com/accountsignup/begintrial?';
    // Get form field values
    var fn = $('input[name=firstName]').val(),
        ln = $('input[name=lastName]').val(),
        cm = $('input[name=company]').val(),
        em = $('input[name=emailAddress]').val(),
        tt = $('input[name=trialtype]').val();
  
    if (!((fn == "") || (ln == "") || (cm == "") || (em == "") || (tt == ""))) {
      fn = 'firstName=' + encodeURIComponent($.trim(fn));
      ln = '&lastName=' + encodeURIComponent($.trim(ln));
      cm = '&company=' + encodeURIComponent($.trim(cm));
      em = '&emailAddress=' + encodeURIComponent($.trim(em));
      tt = '&trialType=' + encodeURIComponent(tt);
  
      var url = base + fn + ln + cm + em + tt,
          field = $('input[name=accountsetupURL]');
          
      field.val(url);
    }
  }
  
  function trackUser() {
      $("body").trigger("3rdPartyTrackerSignup", {
        firstName: $('input[name=firstName]').val(),
        lastName: $('input[name=lastName]').val(),
        company: $('input[name=company]').val(),
        emailAddress: $('input[name=emailAddress]').val()
      });

      $('input[name="easyTigerActionLocation"]').val(window.location.href);
      $('div[elqtype="UserForm"] form').submit();

      userIsTracked = true; //Good to go
  }
  
  function collectCookieValues() {
    var leadInfo = {
  	  source:   ["utm_source", "leadsource"],
  	  medium:   ["utm_medium", "leadmedium"],
  	  campaign: ["utm_campaign", "leadcampaign"],
  	  term:     ["utm_term", "leadkeyword"],
  	  content:  ["utm_content", "leadcontent"],
  	  ref:      ["docref", "leadref"],
  	  entry:    ["entryURL", "leadentryurl"]
  	};

    $.each(leadInfo, function( index, value ) {
      var ckog = $.cookie('lk_' + value[0] + '_og');
      var ckmr = $.cookie('lk_' + value[0] + '_mr');
      if (ckog) {
        $('input[name=' + value[1] + 'original]').val(ckog);
      }
      if (ckmr) {
        $('input[name=' + value[1] + 'mostrecent]').val(ckmr);
      }
    });
  
    if($.cookie('lk_video')) {
     $('input[name=videoActions]').val($.cookie('lk_video'));
    }
  }
  
  $('div[elqtype="UserForm"] form').on('submit', function(event) {
    $('input[name=company]').val($('input[name=company]').val().replace(/['"<>/]/g, "")); // Remove Invalid Characters from Company Field
    collectCookieValues();
    accountSetupUrl();
    if ($('.LV_invalid_field').length === 0) {
      if (userIsTracked === false) {
        trackUser();
        event.preventDefault;
        return false;
      }      
    }
  });

  $( "input[name=company]" ).blur(function() {
    $('input[name=company]').val($('input[name=company]').val().replace(/['"<>/]/g, "")); // Remove Invalid Characters from Company Field
  });

  //Supplement LiveValidation :: UI/UX
  $('p').on('click', '.LV_validation_message', function() {
    var input = $(this).siblings('.LV_invalid_field');
    input.focus();
  })

  //Trim form field values on input blur
  $( "input[type=text]" ).blur(function() {
    var id = $(this).attr('id');
    $('#'+id).val($.trim($('#'+id).val()));
  });
})();