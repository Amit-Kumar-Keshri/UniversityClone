jQuery(document).ready(function () {
  jQuery(".flexslider").flexslider({
    animation: "slide",
  });
  mobile_menu_init();
});

jQuery(document).on("click", ".ham_burg_menu", function () {
  if(!jQuery(this).hasClass('active')){
    jQuery(this).addClass('active');
    jQuery(".menu").slideDown();
  }else {
    jQuery(this).removeClass("active");
    jQuery(".menu").slideUp();
  }
});

jQuery(window).resize(function () {
  mobile_menu_init();
});

function mobile_menu_init() {
  if (window.matchMedia("(max-width: 600px)").matches) {
    jQuery(".menu").hide();

    if (!jQuery(".ham_burg_menu").length) {
      jQuery(".menu").before(
        '<button class="ham_burg_menu"><img src="img/hamburger_opened.png"/></button>'
      );
    }
  } else {
    jQuery(".menu").show();
    jQuery(".ham_burg_menu").remove();
  }
}
