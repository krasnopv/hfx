"use strict";

$(document).ready(function () {
  console.log('Loading...');
  $("body").autoPadding({
    source: $(".js-header")
  });
  var a = 0;
  $(window).scroll(function () {
    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a === 0 && $(window).scrollTop() > oTop) {
      $('.counter-value').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        }, {
          duration: 3000,
          easing: 'swing',
          step: function step() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function complete() {
            $this.text(this.countNum);
          }
        });
      });
      a = 1;
    }
  });
  console.log("Ready!");
});
$(window).on("load", function () {
  console.log('loading...');
  var navHeight = parseInt($("nav").css("height"));
  var sectionMarginTop = parseInt($("section").css("margin-top"));
  var navMarginTop = parseInt($("nav").css("margin-top"));
  $(".wrapper").removeClass("invisible");
  setTimeout(function () {
    $(".preloader").remove();
    console.log('Preloader removed!');
  }, 500);
  var titleMarginTop = parseInt($("#hero2 h1").css("margin-bottom")) + parseInt($("#hero2 button").css("height"));
  $("#hero2 h1").css({
    "margin-top": titleMarginTop
  });
  var mainTop = 0 - navHeight - navMarginTop - sectionMarginTop;
  $("main").css({
    'top': mainTop,
    'margin-top': 0 - sectionMarginTop
  });
  console.log("Loaded!");
  var onResize = function onResize() {
    $('.col-hex').each(function () {
      $(this).find(".hex").css({
        "width": "" + (parseInt($(this).css("height")) * 0.8660254 + $(this).find(".hex").css('margin-top'))
      });
    });
  };
  onResize();
  $(window).resize(function () {
    onResize();
  });
});