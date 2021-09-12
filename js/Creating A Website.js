$(function () {
  $("body").niceScroll({
    cursorcolor: "aquamarine",
  });
  var win = $(window);
  $(".navbar .navbar-links ul li a").click(function () {
    $(this).parent().addClass("active").siblings().removeClass("active");
  });

  $(".slider-section").height(win.height()).width(win.width());

  $(".bxslider").each(function () {
    $(this).css(
      "padding-top",
      ($(window).height() - $(".bxslider .page").height()) / 2
    );
  });

  win.resize(function () {
    $(".slider-section").height(win.height()).width(win.width());
    $(".bxslider").each(function () {
      $(this).css(
        "padding-top",
        ($(window).height() - $(".bxslider .page").height()) / 2
      );
    });
  });

  $(".navbar-links li a").click(function () {
    $("html , body").animate(
      {
        scrollTop: $("#" + $(this).data("value")).offset().top,
      },
      1000
    );
  });

  $(".bxslider").bxSlider({
    mode: "fade",
    captions: true,
    pager: false,
  });

  (function autoSlider() {
    $(".slider .active").each(function () {
      if (!$(this).is(":last-child")) {
        $(this)
          .delay(3000)
          .fadeOut(1000, function () {
            $(this)
              .removeClass("active")
              .next()
              .addClass("active")
              .fadeIn(1000);
            autoSlider();
          });
      } else {
        $(this)
          .delay(3000)
          .fadeOut(1000, function () {
            $(this).removeClass("active");
            $(".slider .slider-content").eq(0).addClass("active").fadeIn(1000);
            autoSlider();
          });
      }
    });
  })();

  $(".gallery-section ul li").click(function () {
    $(this).addClass("selected").siblings().removeClass("selected");
  });
});
