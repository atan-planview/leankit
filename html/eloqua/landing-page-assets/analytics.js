// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-37062816-1', 'auto');
ga('send', 'pageview');

// Eloqua
var _elqQ = _elqQ || [];
_elqQ.push(['elqSetSiteId', '1828329459']);
_elqQ.push(['elqTrackPageView']);

(function () {
    function async_load() {
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true;
        s.src = '//img03.en25.com/i/elqCfg.min.js';
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    }
    if (window.addEventListener) window.addEventListener('DOMContentLoaded', async_load, false);
    else if (window.attachEvent) window.attachEvent('onload', async_load); 
})();

// Clicktale
window.ClickTaleSettings = { XHRWrapper: { Enable: true, MaxResponseSize: 1000000} };
document.write(unescape("%3Cscript%20src='" +
  (document.location.protocol == 'https:' ?
    'https://clicktalecdn.sslcs.cdngc.net/www/' :
    'http://cdn.clicktale.net/www/') +
    "XHRWrapper.js'%20type='text/javascript'%3E%3C/script%3E"));

// Adroll
adroll_adv_id = "ACPRT4GN6RHBHDDUETXACC";
adroll_pix_id = "UVID2O2LSBGJ3H2I6UCQIR";
(function () {
var oldonload = window.onload;
window.onload = function(){
  __adroll_loaded=true;
  var scr = document.createElement("script");
  var host = (("https:" == document.location.protocol) ? "https://s.adroll.com" : "http://a.adroll.com");
  scr.setAttribute('async', 'true');
  scr.type = "text/javascript";
  scr.src = host + "/j/roundtrip.js";
  ((document.getElementsByTagName('head') || [null])[0] ||
   document.getElementsByTagName('script')[0].parentNode).appendChild(scr);
  if(oldonload){oldonload()}};
}());    

// Hubspot
(function(d,s,i,r) {
  if (d.getElementById(i)){return;}
  var n=d.createElement(s),e=d.getElementsByTagName(s)[0];
  n.id=i;n.src='//js.hubspot.com/analytics/'+(Math.ceil(new Date()/r)*r)+'/112688.js';
  e.parentNode.insertBefore(n, e);
})(document,"script","hs-analytics",300000);
