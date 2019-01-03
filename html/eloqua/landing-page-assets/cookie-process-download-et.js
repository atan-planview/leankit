/**
 * Perform any third-party tracking that needs to be done. Runs on any content download page like Scaling Kanban, LBR (http://info.leankit.com/lean-business-report).
 */

(function() {
  var userIsTracked = false;
  
  function trackUser() {  
      $("body").trigger("3rdPartyTrackerContent", {
        firstName: $('input[name=firstName]').val(),
        lastName: $('input[name=lastName]').val(),
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
    collectCookieValues();
    if ($('.LV_invalid_field').length === 0) {
      if (userIsTracked === false) {
        trackUser();
        event.preventDefault;
        return false;
      }      
    }
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