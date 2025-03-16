AOS.init({
  duration: 200,
  easing: "slide",
  once: false,
});

jQuery(document).ready(function ($) {
  "use strict";

  window.addEventListener("resize", refreshOwl);

  var sle = 1000;

  function refreshOwl() {
    var slidesPerPage = 1;
    if ($(window).width() > sle) {
      slidesPerPage = 2;
    }

    var options = $(".slide-three-item").data("owl.carousel").options;
    options.items = slidesPerPage;
    $(".slide-three-item").trigger("refresh.owl.carousel");
  }

  var siteCarousel = function () {
    if ($(".nonloop-block-13").length > 0) {
      $(".nonloop-block-13").owlCarousel({
        center: false,
        items: 1,
        loop: true,
        stagePadding: 0,
        margin: 0,
        autoplay: true,
        nav: true,
        navText: [
          '<span class="icon-arrow_back">',
          '<span class="icon-arrow_forward">',
        ],
        responsive: {
          600: {
            margin: 0,
            nav: true,
            items: 2,
          },
          1000: {
            margin: 0,
            stagePadding: 0,
            nav: true,
            items: 3,
          },
          1200: {
            margin: 0,
            stagePadding: 0,
            nav: true,
            items: 4,
          },
        },
      });
    }

    if ($(window).width() > sle) {
      $(".slide-three-item").owlCarousel({
        center: true,
        items: 2,
        loop: true,
        stagePadding: 0,
        margin: 50,
        smartSpeed: 1000,
        autoplay: true,
        pauseOnHover: true,
        autoHeight: true,
        nav: false,
        navText: [
          '<span class="icon-keyboard_arrow_left">',
          '<span class="icon-keyboard_arrow_right">',
        ],
      });
    } else {
      $(".slide-three-item").owlCarousel({
        center: true,
        items: 1,
        loop: true,
        stagePadding: 0,
        margin: 50,
        smartSpeed: 1000,
        autoplay: true,
        pauseOnHover: true,
        autoHeight: true,
        nav: false,
        navText: [
          '<span class="icon-keyboard_arrow_left">',
          '<span class="icon-keyboard_arrow_right">',
        ],
      });
    }
  };
  siteCarousel();

  document.getElementById("copyright").innerHTML = "Copyright " + '\u00A9' + " " + new Date().getFullYear() +  " All Rights Reserved";

});
