"use strict";

// const hexDif = 0.8660254;

$(document).ready(function () {
  $("body").autoPadding({
    source: $(".js-header"),
  });

  var a = 0;
  $(window).scroll(function() {

    var oTop = $('#counter').offset().top - window.innerHeight;
    // console.log(a);
    // console.log(oTop);
    // console.log($(window).scrollTop());
    if (a === 0 && $(window).scrollTop() > oTop) {
      // console.log("Counting!");
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
              //alert('finished');
            }

          });
      });
      a = 1;
    }
  });

  console.log("Ready!");
});

$(window).on("load", function () {
  const navHeight = parseInt($("nav").css("height"));
  const sectionMarginTop = parseInt($("section").css("margin-top"));
  const navMarginTop = parseInt($("nav").css("margin-top"));
  // $('.preloader').addClass('preloader-deactivate');
  $(".wrapper").removeClass("invisible");
  setTimeout(function () {
    $(".preloader").remove();
  }, 500);
  const titleMarginTop =
    parseInt($("#hero2 h1").css("margin-bottom")) +
    parseInt($("#hero2 button").css("height"));
  $("#hero2 h1").css({ "margin-top": titleMarginTop });
  const mainTop = 0 - navHeight - navMarginTop - sectionMarginTop;
  $("main").css({ 'top': mainTop, 'margin-top': 0 - sectionMarginTop });

  console.log("Loaded!");

  // function resize() {
  //   console.log("height: ", window.innerHeight, "px");
  //   console.log("width: ", window.innerWidth, "px");
  // }
  
  // window.onresize = resize;
  const onResize = () => {
    $('.col-hex').each(function() {
      console.log($(this).css("width"));
      $(this).find(".hex").css({ "width": `${parseInt($(this).css("height")) * 0.8660254}` });
    });
  }

  onResize();

  $(window).resize(function() {
    onResize();
    // $('.hex').each(function() {
    //   console.log($(this).css("width"));
    //   $(this).css({ "height": `${parseInt($(this).css("width")) / 0.8660254}` });
    // });
  });
});
