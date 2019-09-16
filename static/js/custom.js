/*========================================================================
EXCLUSIVE ON themeforest.net
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Template Name   : RedBell
Author          : mital_04
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Copyright (c) 2018 - mital_04
========================================================================*/
  

(function($){
    "use strict"
    var RED = {};

    /*--------------------
      * Pre Load
    ----------------------*/
    RED.WebLoad = function(){
      document.getElementById("loading").style.display = "none"; 
    }

    /*--------------------
        * Header Class
    ----------------------*/
    RED.HeaderSticky = function(){
        $(".navbar-toggler").on("click", function(a) {
            a.preventDefault(), $(".navbar").addClass("fixed-header")
        });
    }

    /*--------------------
        * Menu Close
    ----------------------*/
    RED.MenuClose = function(){
      $('.navbar-nav .nav-link').on('click', function() {
       var toggle = $('.navbar-toggler').is(':visible');
       if (toggle) {
         $('.navbar-collapse').collapse('hide');
       }
      });
    }

    /*--------------------
        * Header height
    ----------------------*/

    RED.HeaderHeight = function(){
    var HHeight = $('.header-height .fixed-header-bar').height()
      $('header').height(HHeight);  
    }

    /*--------------------
        * Smooth Scroll
    ----------------------*/
    RED.HeaderScroll = function(){
        $('header a[href*="#"]:not([href="#"])').on('click', function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
              var target = $(this.hash);
                  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                  if (target.length) {
                    $('html,body').animate({
                      scrollTop: target.offset().top - 65,
                      }, 1000);
                      return false;
                  }
            }
        });
    }

    /*--------------------
        * Header Fixed
    ----------------------*/
    RED.HeaderFixed = function(){
        if ($(window).scrollTop() >= 60) {
           $('.navbar').addClass('fixed-header');
           $('header').addClass('fixed-header-top');
        }
        else {
           $('.navbar').removeClass('fixed-header');
           $('header').removeClass('fixed-header-top');
        }
    }    

    /*--------------------
    * Counter JS
    ----------------------*/
    var a = 0;
    RED.Counter = function(){
      var oTop = $('.counter-box').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          $('.count').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
          a = 1;
        }
    }


    /*--------------------
    * owl Slider
    ----------------------*/
    RED.BlogSlider = function(){
      var testimonials_slider = $('#ss-slider-single');
        testimonials_slider.owlCarousel({
            loop: true,
            margin: 0,
            nav:true,
            navText:["<i class='ti-arrow-left'></i>","<i class='ti-arrow-right'></i>"],
            dots:false,
            responsive: {
              0: {
                items: 1
              },
              768: {
                items: 2
              },
              991: {
                items: 3
              },
              1140: {
                items: 6
              }
            }
        });
    }

    RED.SSSlider = function(){
      var testimonials_slider = $('#ss-slider-single-01');
        testimonials_slider.owlCarousel({
            loop: true,
            margin: 30,
            nav:true,
            navText:["<i class='ti-arrow-left'></i>","<i class='ti-arrow-right'></i>"],
            dots:false,
            center:true,
            responsive: {
              0: {
                items: 1
              },
              768: {
                items: 2
              },
              991: {
                items: 3
              },
              1140: {
                items: 4
              }
            }
        });
    }

    RED.ClientSlider = function(){
      var testimonials_slider = $('#client-slider-single');
        testimonials_slider.owlCarousel({
            loop: true,
            margin: 0,
            nav:false,
            dots:false,
            responsive: {
              0: {
                items: 1
              },
              600: {
                items: 1
              },
              768: {
                items: 2
              },
              991: {
                items: 3
              },
              1140: {
                items: 3
              }
            }
        });
    }
    
    // Window on Load
    $(window).on("load", function(){
      RED.HeaderHeight(),
      RED.WebLoad();
    });

    $(document).on("ready", function(){
        RED.HeaderHeight(),
        RED.ClientSlider(),
        RED.MenuClose(),
        RED.BlogSlider(),
        RED.SSSlider(),
        RED.Counter(),
        RED.HeaderScroll(),
        RED.HeaderSticky();
    });

    $(window).on("scroll", function(){
        RED.Counter(),
        RED.HeaderFixed();
    });
    // Window on Resize
    $(window).on("resize", function(){
      RED.HeaderHeight();
    });

})(jQuery);


