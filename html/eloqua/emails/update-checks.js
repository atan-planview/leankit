var _elqQ = _elqQ || [];
_elqQ.push(['elqSetSiteId', '1828329459']);
_elqQ.push(['elqTrackPageView']);

(function() {
    function async_load() {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = '//img.en25.com/i/elqCfg.min.js';
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
    }

    if (window.addEventListener)
        window.addEventListener('DOMContentLoaded', async_load, false);
    else if (window.attachEvent)
        window.attachEvent('onload', async_load);
})();

var SubLookupRunning = true;
var g1 = '1903ff7b-34ce-4b77-b107-97e01d3f0b3c';
var g2 = '1e511703-8ea1-45f3-b743-0cb8da712b34';
var g3 = 'd7cf69de-0377-4745-854c-6a23e6bfc45a';
var g4 = '44d6c38b-a47d-4278-b400-420af5a40483';
var g5 = '87e02986-58c0-416e-93da-f7d4f1667c12';
var g6 = '6f16e0ea-a5b3-41c5-a368-547119785929';
var g7 = '938060d8-8aed-48d8-8ab1-adcdc2038f2a';

var g1box = 11;
var g2box = 2;
var g3box = 15;
var g4box = 3;
var g5box = 14;
var g6box = 12;
var g7box = 17;

var g1Status;
var g2Status;
var g3Status;
var g4Status;
var g5Status;
var g6Status;
var g7Status;

function SetElqContent() {
    g1Status = GetElqGroupMembershipStatus(g1);
    g2Status = GetElqGroupMembershipStatus(g2);
    g3Status = GetElqGroupMembershipStatus(g3);
    g4Status = GetElqGroupMembershipStatus(g4);
    g5Status = GetElqGroupMembershipStatus(g5);
    g6Status = GetElqGroupMembershipStatus(g6);
    g7Status = GetElqGroupMembershipStatus(g7);
    
 SetupForm;
}

function GetEmailAddress() {
    _elqQ.push(['elqDataLookup', escape('f3f20f7f-ba1d-4e7a-a3b7-584a8b0f759b'), '<C_EmailAddress>' + document.getElementsByName("EmailAddress")[0].value + '</C_EmailAddress>']);
}

SetupForm = window.setTimeout(setInputBoxes, 500);
window.onload = GetEmailAddress();

function setInputBoxes() {
  if ($('input[name="Unsubscribe"]').is(":checked")) {
    document.getElementsByName(g1box)[0].checked = false;
    document.getElementsByName(g2box)[0].checked = false;
    document.getElementsByName(g3box)[0].checked = false;
    document.getElementsByName(g4box)[0].checked = false;
    document.getElementsByName(g5box)[0].checked = false;
    document.getElementsByName(g6box)[0].checked = false;
    document.getElementsByName(g7box)[0].checked = false;
  } else {
    if (!g1Status) {
      document.getElementsByName(g1box)[0].checked = true;
    }
    if (!g2Status) {
        document.getElementsByName(g2box)[0].checked = true;
    }
    if (!g3Status) {
      document.getElementsByName(g3box)[0].checked = true;
    }
    if (!g4Status) {
      document.getElementsByName(g4box)[0].checked = true;
    }
    if (!g5Status) {
      document.getElementsByName(g5box)[0].checked = true;
    }
    if (!g6Status) {
      document.getElementsByName(g6box)[0].checked = true;
    }
    if (!g7Status) {
      document.getElementsByName(g7box)[0].checked = true;
    }
  }
}