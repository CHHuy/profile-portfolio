/*!--------------------------------------------------------------------------------

 Theme Name: Frontend Seed 4
 Author:     trungnghia112 <trungnghia112@gmail.com>

 -----------------------------------------------------------------------------------*/

if (Modernizr.touch === true && $(window).width() <= 767) {
  //alert('Touch Screen');
} else {

}

(function ($) {
  'use strict';


  /* ==================================================
  # Get scroll bar width
  ===================================================*/
  function getBarwidth() {
    // Create the measurement node
    let scrollDiv = document.createElement('div');
    scrollDiv.className = 'scrollbar-measure';
    document.body.appendChild(scrollDiv);

    // Get the scrollbar width
    let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    //console.warn(scrollbarWidth); // Mac:  15

    // Delete the DIV
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  }

  /* ==================================================
  # Smooth Scroll
  ===================================================*/
  function scrollToAnchor() {
    $('.js-scroll-to').on('click', function (event) {
      let $anchor = $(this);
      let headerH = '0';
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr('href')).offset().top - headerH + 'px'
          },
          1000
        );
      event.preventDefault();
    });
  }
  function scrollToTop() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 50) {
        $('#back-to-top').fadeIn()
      } else {
        $('#back-to-top').fadeOut()
      }
    })
    // scroll body to 0px on click
    $('#back-to-top').click(function() {
      $('body,html').animate({
        scrollTop: 0
      }, 400)
      return false
    })
  }
  function slickSlider() {
    $('.js-slick-responsive').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1140,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 920,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  }
  function init() {
    scrollToAnchor();
    getBarwidth();
    scrollToTop();
    slickSlider();
  }

  $(document).ready(function () {
    init();
  }); // end document ready function

  $(window).on('scroll', function () {
  });


})(jQuery); // End jQuery
