$(document).ready(function() {
    // DOCUMENT READY START
    
    // MOBILE MENU
    function toggle_mobile_menu() {
        $("#mobile-menu-items").stop(true, true).fadeToggle(200);
        $("#mobile-menu-overlay").stop(true, true).fadeToggle(200);
    }
    $(".mobile-menu-icon").click(function() {
        toggle_mobile_menu();
    });
    $("#mobile-menu-overlay").click(function() {
        toggle_mobile_menu();
    });
    
    // SMOOTHSCROLL
    $("a.scroller").smoothScroll({
        //afterScroll: function() {location.hash = this.hash;}
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 160) {
            $('#scroll-top').fadeIn();
            $('#main').addClass('scrolled');
        } else {
            $('#scroll-top').fadeOut();
            $('#main').removeClass('scrolled');
        }
    });
    
});