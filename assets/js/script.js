//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// ## Count Down
$(function() {
    $("#countdown").countdown("2021/09/06 8:00:00", {elapse: true}).on('update.countdown', function(event) {
        if (event.elapsed && event.strftime('%H') === "06") {
            $(this).text(event.strftime('CarpentryConnect South Africa 2021 has ended, See you again next year!.'));
        } else if (event.elapsed) {
            $(this).text(event.strftime('CarpentryConnect South Africa 2021 is currently underway.'));
        } else {
            $(this).text(event.strftime('We are %D days, %H hours and %M minutes away from CarpentryConnect South Africa 2021.'));
        }
    });

});

// Eventbrite function
$(function(){

  var eventbriteCheckout = function() {
      console.log('Order complete!');
  };

  window.EBWidgets.createWidget({
      // Required
      widgetType: 'checkout',
      eventId: '159159960727',
      iframeContainerId: 'eventbrite-widget-container-159159960727',

      // Optional
      iframeContainerHeight: 425,  // Widget height in pixels. Defaults to a minimum of 425px if not provided
      onOrderComplete: eventbriteCheckout  // Method called when an order has successfully completed
  });

});
