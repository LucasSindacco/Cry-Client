$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 10) {
        $("#navbar-fixed").addClass("active");
    } else {
        $("#navbar-fixed").removeClass("active");
    }
});