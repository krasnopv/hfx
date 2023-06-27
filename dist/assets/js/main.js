"use strict";

$(document).ready(function () {
  $("body").autoPadding({
    source: $(".js-header")
  });
  console.log("Ready!");
});
$(window).on("load", function () {
  var navHeight = parseInt($("nav").css("height"));
  var sectionMarginTop = parseInt($("section").css("margin-top"));
  var navMarginTop = parseInt($("nav").css("margin-top"));
  // $('.preloader').addClass('preloader-deactivate');
  $(".wrapper").removeClass("invisible");
  setTimeout(function () {
    $(".preloader").remove();
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
});