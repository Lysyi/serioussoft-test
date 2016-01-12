$(document).ready(function() {

  'use strict';

  $('.tabs-nav li').click(function(){
    var tabId = $(this).attr('data-tab');
    $('.tabs-nav li').removeClass('current');
    $('.tab-content').removeClass('current');
    $(this).addClass('current');
    $('#' + tabId).addClass('current');
  });

  $('.select').chosen({width: '100%'});

});

