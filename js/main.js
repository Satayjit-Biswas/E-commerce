(function ($) {
    "use strict";

    // scroll bar width
    var swidth=(window.innerWidth - $(window).width());

    $(window).on('load', function(){
        //===== Prealoder
        $('.proloader').delay(500).fadeOut(500);

        setTimeout(function() { 
            $('#autocookies').addClass('open');
            $('.overlay').addClass('open');
            $('body').addClass('overflow').css('padding-right', swidth + 'px');
        }, 10000);
    });

    $(window).on('load', function(){
        if (window.matchMedia('(max-width: 767px)').matches){
            $('.tab_item, .tab_menu li a').removeClass('active');
        }
    });

    $(document).ready(function () {
        // Hamburger-menu
        $('.hamburger-menu, .menu_close, .menu_overlay').on('click', function () {
            $('.menu_header, .menu_overlay').toggleClass('open');
        });            

        $('.menu_title').on('click', function () {
            $(this).parent().removeClass('active');
        });        

        $('.dropdown_toggler').on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('active');
            $(this).next().toggleClass('active');
        });        

        $('.back_btn').on('click', function (e) {
            e.preventDefault();
            $(this).parent().parent().parent().parent().removeClass('active');
        });

        $('.heart, .heart_wrap').on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('active');
        });        

        // mobile search form
        $('.search_toggle').on('click', function (e) {
            e.preventDefault();
            $('.search_form').toggleClass('open');
        });        

        // tab
        $('.tab_menu li a, .tab_menus li a').on('click', function (e) {
            e.preventDefault();
            var tab_active = $(this).attr('href');

            $('.tab_menu li a, .tab_menus li a').removeClass('active');
            $(this).addClass('active');

            $('.tab_item, .tab_items').removeClass('active');
            $(tab_active).addClass('active');
        });        

        // product details tab
        $('.tab_img a').on('click', function (e) {
            e.preventDefault();
            var active = $(this).attr('href');

            $('.tab_img a').removeClass('active');
            $(this).addClass('active');

            $('.changing_img img').removeClass('show');
            $(active).addClass('show');
        });

        // accordion
        $(function() {
          var title = $(".title");
            title.on("click", function() {
              var ThisIt = $(this);
              $(".title").not(ThisIt).removeClass("active");
              $(this).toggleClass("active");
              $(".text").not(ThisIt.next(".text")).slideUp(400);
              ThisIt.next(".text").slideToggle(400);
            })
            .eq(1)
            .click().next(".text").slideDown(400);
        });

        // payment accordion
        $(function() {
          var titles = $(".title .links");
            titles.on("click", function() {
              var ThisIts = $(this);

              $(".title .links").not(ThisIts).removeClass("active");
              $(this).toggleClass("active");

              $(".collapse_content").not(ThisIts.parent().next(".collapse_content")).slideUp(400);
              ThisIts.parent().next(".collapse_content").slideToggle(400);
            })
            .eq(1)
            .click().parent().next(".collapse_content").slideDown(400);
        });

        // order accordion
        $('.toggle_btn').on('click', function(){
            $(this).toggleClass('active');
            $('.top_textarea').toggleClass('active');
            $(this).parent().parent().parent().parent().find('.collapse_pane').toggleClass('active');
            $(this).parent().parent().parent().parent().find('.collapsible_content').slideToggle();
        });


        // filter
        $('.filter_btn').on('click', function (e) {
            e.preventDefault();
            var item = $(this).attr('href');
            $(this).toggleClass('active');
            $(item).slideToggle();
        });        

        $('[data-toggle="modal"]').on('click', function (e) {
            e.preventDefault();
            var modal = $(this).attr('href');
            $('.modal').removeClass('open');
            $(modal).addClass('open');
            $('.overlay').addClass('open');
            $('body').addClass('overflow').css('padding-right', swidth + 'px');
        });         

        $('.cart').on('click', function (e) {
            e.preventDefault();

            $('.overlay').addClass('open');
            $('.cart_wrapper').addClass('open');
            $('body').addClass('overflow').css('padding-right', swidth + 'px');
        });                         

        $('.overlay.v2').on('click', function (e) {
            e.preventDefault();

            $('.overlay').removeClass('open');
            $('.cart_wrapper').removeClass('open');
            $('body').removeClass('overflow').css('padding-right', 0 + 'px');
        });        

        $('.close, [data-dimiss="modal"]').on('click', function (e) {
            e.preventDefault();
            $('.modal, .overlay').removeClass('open');
            $('body').removeClass('overflow').css('padding-right', 0 + 'px');
        });

        $(document).mouseup(function (e) {
            if ($(e.target).closest(".modal_content, .cart_wrapper").length === 0) {
                $(".modal, .overlay").removeClass('open');
                $('body').removeClass('overflow').css('padding-right', 0 + 'px');
            }
        });

        $(document).mouseup(function (e) {
            if ($(e.target).closest(".dropdown_toggler.active, .mega_menu").length === 0) {
                $(".dropdown_toggler, .mega_menu").removeClass('active');
            }
        });


        //hero Slider
        $('.owl-carousel.hero_slider').owlCarousel({
            dots: false,
            nav: true,
            navText: ['<i class="fal fa-angle-left">','<i class="fal fa-angle-right">'],
            loop: true,
            items: 1,
            margin: 0,
            responsive: {
                0: {
                    dots: true,
                },
                768: {
                    dots: false,
                },
            }
        });        

        //hero Slider
        $('.owl-carousel.product_slider').owlCarousel({
            dots: false,
            nav: false,
            loop: true,
            responsive: {
                0: {
                    items: 1,
                    margin: 20,
                    stagePadding: 35,
                },
                576: {
                    items: 1,
                    margin: 20,
                    stagePadding: 60,
                },
                768: {
                    items: 2,
                    margin: 35,
                    stagePadding: 50,
                },
                992: {
                    items: 4,
                    margin: 38
                },
                1200: {
                    items: 4,
                    margin: 52
                }
            }
        });

        //hero Slider
        $('.owl-carousel.slider').owlCarousel({
            dots: false,
            nav: false,
            loop: true,
            margin: 25,
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 65,
                },
                576: {
                    items: 2,
                },
                768: {
                    items: 3,
                },
                992: {
                    items: 6,
                },
                1200: {
                    items: 6,
                }
            }
        });        

        //partner Slider
        $('.owl-carousel.partner_slider').owlCarousel({
            dots: false,
            nav: true,
            navText: ['<i class="fal fa-angle-left">','<i class="fal fa-angle-right">'],
            loop: true,
            responsive: {
                0: {
                    dots: true,
                    items: 1,
                },
                576:{
                    dots: true,
                    items: 2,
                    margin: 30
                },
                768: {
                    margin: 100,
                    autoWidth: true,
                },
                992: {
                    margin: 100,
                    autoWidth: true,
                },
            }
        });

        // nice number
        $('.nice_number').niceNumber();

        // nice select
        $('.nice_select').niceSelect();


    });

})(jQuery);