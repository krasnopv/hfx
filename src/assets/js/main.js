"use strict";

$(document).ready(function () {
  console.log('Loading...');
  $("body").autoPadding({
    source: $(".js-header"),
  });

  var a = 0;
  const navbarCollapse = $('.navbar-collapse');

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

  $('.close-nav, .navbar a').on( "click", () => {
    navbarCollapse.css({'right': 0 - navbarCollapse.width() - 50});
    navbarCollapse.removeClass('show');
  })

  console.log("Ready!");

  const onResize = () => {
    const main = $('#hero');
    const video = $('video');
    const windowRatio = window.innerWidth / window.innerHeight;
    const mainRatio = main.width() / main.height();
    const videoRatio = video.width() / video.height();
  
    navbarCollapse.css({'right': 0 - navbarCollapse.width() - 50});

    $('.col-hex').each(function() {
      $(this).find(".hex").css({
        "width": `${parseInt($(this).css("height")) * 0.8660254 + $(this).find(".hex").css('margin-top')}`
      });
    });

    if (windowRatio >= videoRatio) {
      video.css({'width': '100%', 'heigh': 'auto'});
    } else {
      video.css({'width': 'auto', 'heigh': '100vh', 'top': '50%', 'left': '50%', 'transform': 'translate(-50%, -50%)'});
    }
  }

  onResize();

  $(window).resize(function() {
    onResize();
  });

});

$(window).on("load", function () {
  const hexProportion = 0.8660254;
  const hexHeightSmall = 550;
  const hexWidthSmall = hexHeightSmall * hexProportion;
  const hexHeightMid = 776;
  const hexWidthMid = hexHeightMid * hexProportion;
  const hexPadding = 10;

  console.log('loading...');

  $(function () {
    $('.datepicker').datepicker({
      language: "es",
      autoclose: true,
      format: "dd/mm/yyyy"
    });
  });
  
  const calcTopMargin = (prevWidth, curWidth, curHeight) => {
    return ((((window.innerWidth - curWidth - prevWidth) / 2 - 10 ) > 0) ?
      0 :
      0 - ((window.innerWidth - curWidth - prevWidth) / 2 - 10 )) - (curHeight / 4 - hexPadding);
  };

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
    const main = $('#hero');
    const video = $('video');
    const windowRatio = window.innerWidth / window.innerHeight;
    const mainRatio = main.width() / main.height();
    const videoRatio = video.width() / video.height();
  
    // $('#about-copy').css({
    //   "margin-top": calcTopMargin(hexWidthSmall, hexWidthMid, hexHeightMid)
    // });

    console.log(
      calcTopMargin(hexWidthSmall, hexWidthMid, hexHeightMid)
      // ((((window.innerWidth - hexWidthMid - hexWidthSmall) / 2 - 10 ) > 0) ? 0 : 0 - ((window.innerWidth - hexWidthMid - hexWidthSmall) / 2 - 10 )) - (hexHeightMid / 4 - hexPadding)
    );
    
    $('.col-hex').each(function() {
      $(this).find(".hex").css({
        "width": `${parseInt($(this).css("height")) * 0.8660254}`
      });
    });

    if (windowRatio >= videoRatio) {
      video.css({'width': '100%', 'heigh': 'auto'});
    } else {
      video.css({'width': 'auto', 'heigh': '100vh', 'top': '50%', 'left': '50%', 'transform': 'translate(-50%, -50%)'});
    }
  }

  onResize();

  $(window).resize(function() {
    onResize();
  });
});

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});