"use strict";

$(document).ready(function () {
  console.log('Loading...');
  $("body").autoPadding({
    source: $(".js-header"),
  });

  var a = 0;
  $(window).scroll(function() {

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a === 0 && $(window).scrollTop() > oTop) {
      $('.counter-value').each(function() {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
            countNum: countTo
          },

          {
            duration: 3000,
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
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
  const navHeight = parseInt($("nav").css("height"));
  const sectionMarginTop = parseInt($("section").css("margin-top"));
  const navMarginTop = parseInt($("nav").css("margin-top"));

  $(".wrapper").removeClass("invisible");
  setTimeout(function () {
    $(".preloader").remove();
    console.log('Preloader removed!');
  }, 500);

  const titleMarginTop =
    parseInt($("#hero2 h1").css("margin-bottom")) +
    parseInt($("#hero2 button").css("height"));
  $("#hero2 h1").css({ "margin-top": titleMarginTop });
  const mainTop = 0 - navHeight - navMarginTop - sectionMarginTop;
  $("main").css({ 'top': mainTop, 'margin-top': 0 - sectionMarginTop });

  console.log("Loaded!");

  const onResize = () => {
    $('.col-hex').each(function() {
      $(this).find(".hex").css({
        "width": `${parseInt($(this).css("height")) * 0.8660254 + $(this).find(".hex").css('margin-top')}`
      });
    });
  }

  onResize();

  $(window).resize(function() {
    onResize();
  });
});
