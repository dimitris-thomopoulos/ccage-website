$(document).ready(function() {
    //************************************************************* DOCUMENT READY START
    
    /******************************************************** google maps */
    if (document.getElementById('gmap')) {initialize();}
    
    /************************************************************* SMOOTHSCROLL */
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
    
    /************************************************************* TOOLTIPS */
    $('.tp').tooltip({
    track: true,
    delay: 0,
    showURL: false,
    extraClass: "descriptions-class",
    fade: 300
    });
    
    //***************************************************************** mobile menu
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
    
    
    //***************************************************************** show/hide
    $(".show-hide-head").click(function(){
        var slideTime=600;
        var parent = $(this).parent(".show-hide");
        var content = $(".show-hide-content",parent);
        var head = $(".show-hide-head",parent);
        if(content.hasClass("current")){
            content.removeClass("current");
            head.removeClass("current");
            content.slideUp(slideTime);
        }else{
            if($(".show-hide-content").hasClass("current")){
                if(content.hasClass("hidea-color")){
                    $(".show-hide-content.hidea.hidea-color").removeClass("current");
                    $(".show-hide-head.hidea.hidea-color").removeClass("current");
                    $(".show-hide-content.hidea.hidea-color").slideUp(slideTime);
                } else if(content.hasClass("hidea-print")){
                    $(".show-hide-content.hidea.hidea-print").removeClass("current");
                    $(".show-hide-head.hidea.hidea-print").removeClass("current");
                    $(".show-hide-content.hidea.hidea-print").slideUp(slideTime);
                } else {
                    $(".show-hide-content").removeClass("current");
                    $(".show-hide-head").removeClass("current");
                    $(".show-hide-content").slideUp(slideTime);
                }
            }
            content.addClass("current");
            head.addClass("current");
            content.slideDown(slideTime);
        }
    });
    
    $(".show-hide-all").click(function(){
        if($(".show-hide-all").hasClass("open")){
            $(".show-hide-all").removeClass("open");
            $(".show-hide-content").removeClass("current");
            $(".show-hide-head").removeClass("current");
            $(".show-hide-content").slideUp(600);
        }else{
            $(".show-hide-all").addClass("open");
            $(".show-hide-content").addClass("current");
            $(".show-hide-head").addClass("current");
            $(".show-hide-content").slideDown(600);
        }
    });
    
    
    var burgerMenu = document.querySelector('#burger-menu');
    var line1 = document.querySelector('#burger-menu .line:nth-of-type(1)');
    var line2 = document.querySelector('#burger-menu .line:nth-of-type(2)');
    var line3 = document.querySelector('#burger-menu .line:nth-of-type(3)');
    
    var mobileNavbar = document.getElementById("mobile-menu");
    
    burgerMenu.addEventListener('click', () => {
    
        line1.classList.toggle('inactive');
        line1.classList.toggle('active');
    
        line2.classList.toggle('inactive');
        line2.classList.toggle('active');
    
        line3.classList.toggle('inactive');
        line3.classList.toggle('active');
    
        mobileNavbar.classList.toggle('active');
        mobileNavbar.classList.toggle('inactive');
    })
    
    
    var navbar = document.getElementById("menu");
    var scrollToTop = document.getElementById("scroll-top");
    var sticky = navbar.offsetTop;
    var navbarLinks = [...document.querySelectorAll('nav ul li a')];
    window.onscroll = function() {sticky_top(navbar,mobileNavbar,scrollToTop)};
    
    
    //************************************************************* DOCUMENT READY END
    });
    
    function sticky_top(navbar,mobileNavbar,scrollToTop) {
      if (window.pageYOffset >= 80) {
        navbar.classList.add("sticky");
        navbar.classList.remove("position-absolute");
    
        mobileNavbar.classList.add("sticky");
        mobileNavbar.classList.remove("position-absolute");
    
        scrollToTop.classList.remove("inactive");
    
      } else {
        navbar.classList.remove("sticky");
        navbar.classList.add("position-absolute");
    
        mobileNavbar.classList.remove("sticky");
        mobileNavbar.classList.add("position-absolute");
    
        scrollToTop.classList.add("inactive");
        scrollToTop.classList.remove("active");
      }
    }