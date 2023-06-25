"use strict";

$(document).ready(function() {
  $('body').autoPadding({
    source: $('.js-header'),
  });
    //removeIf(production)
    console.log("document ready");
    //endRemoveIf(production)
});


$(window).on('load', function() {
  //for use in production please remove this setTimeOut
  setTimeout(function(){ 
      $('.preloader').remove();
  }, 3000);
  //uncomment this line for use this snippet in production
  //	$('.preloader').addClass('preloader-deactivate');
});
