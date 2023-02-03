// nav Background change on scroll
$(function() {
  $(window).on("scroll", function() {
      if($(window).scrollTop() > 120) {
          $("nav").addClass("active");
      } else {
          $("nav").removeClass("active");
      }
  });
});


$(window).scroll(function() {
    $(".banner-info").css("opacity", 1 - $(window).scrollTop() / 55);
  });