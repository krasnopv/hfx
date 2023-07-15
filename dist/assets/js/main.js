"use strict";

$(document).ready(function () {
  console.log('Loading...');
  $("body").autoPadding({
    source: $(".js-header")
  });
  var a = 0;
  var navbarCollapse = $('.navbar-collapse');
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
  $('.close-nav').on("click", function () {
    navbarCollapse.css({
      'right': 0 - navbarCollapse.width() - 50
    });
    navbarCollapse.removeClass('show');
  });
  console.log("Ready!");
  var onResize = function onResize() {
    var main = $('#hero');
    var video = $('video');
    var windowRatio = window.innerWidth / window.innerHeight;
    var mainRatio = main.width() / main.height();
    var videoRatio = video.width() / video.height();
    navbarCollapse.css({
      'right': 0 - navbarCollapse.width() - 50
    });
    $('.col-hex').each(function () {
      $(this).find(".hex").css({
        "width": "" + (parseInt($(this).css("height")) * 0.8660254 + $(this).find(".hex").css('margin-top'))
      });
    });
    console.log(windowRatio);
    console.log(videoRatio);
    console.log('------------------------------------');
    if (windowRatio >= videoRatio) {
      video.css({
        'width': '100%',
        'heigh': 'auto'
      });
      console.log('windowRatio >= videoRatio');
    } else {
      console.log('windowRatio < videoRatio');
      video.css({
        'width': 'auto',
        'heigh': '100vh',
        'top': '50%',
        'left': '50%',
        'transform': 'translate(-50%, -50%)'
      });
    }
  };
  onResize();
  $(window).resize(function () {
    onResize();
  });
});
$(window).on("load", function () {
  console.log('loading...');
  $(function () {
    $('.datepicker').datepicker({
      language: "es",
      autoclose: true,
      format: "dd/mm/yyyy"
    });
  });
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
    var main = $('#hero');
    var video = $('video');
    var windowRatio = window.innerWidth / window.innerHeight;
    var mainRatio = main.width() / main.height();
    var videoRatio = video.width() / video.height();
    $('.col-hex').each(function () {
      $(this).find(".hex").css({
        "width": "" + (parseInt($(this).css("height")) * 0.8660254 + $(this).find(".hex").css('margin-top'))
      });
    });
    console.log(windowRatio);
    console.log(videoRatio);
    console.log('------------------------------------');
    if (windowRatio >= videoRatio) {
      video.css({
        'width': '100%',
        'heigh': 'auto'
      });
      console.log('windowRatio >= videoRatio');
    } else {
      console.log('windowRatio < videoRatio');
      video.css({
        'width': 'auto',
        'heigh': '100vh',
        'top': '50%',
        'left': '50%',
        'transform': 'translate(-50%, -50%)'
      });
    }
  };
  onResize();
  $(window).resize(function () {
    onResize();
  });
});