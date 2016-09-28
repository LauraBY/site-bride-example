$(document).ready(function() {
    var stickyMenu = $(".sticky-menu");

    $(window).scroll(function() {
        if ($(this).scrollTop() > 60) {
            stickyMenu.addClass("fixed");
        } else {
          stickyMenu.removeClass("fixed");
        }
    });
});
