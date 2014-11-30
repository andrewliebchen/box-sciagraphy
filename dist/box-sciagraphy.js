'use strict';

(function($, window, document, undefined) {
  var $window = $(window);

  $.fn.boxSciagraphy = function(options) {
    var $elements = this;

    var settings = {
      shadowColor:  "gray",
      shadowSpread: 0
    };

    options ? $.extend(settings, options) : null;

    var PI  = Math.PI;
    var RAD = 180 / PI;

    function boxSciagraphy(deg, iterations, color, spread) {
      var n = 0;
      var shadow = '';
      var radius = 0;
      var start  = 180;
      deg        = deg - 180;

      while(n <= iterations) {
        radius++;
        var xPosition = radius * Math.cos(deg * (PI / start));
        var yPosition = radius * Math.sin(deg * (PI / start));
        shadow = shadow + ' ' + xPosition + 'px ' + yPosition + 'px ' + spread + 'px ' + color;

        if(n < iterations) {
          shadow = shadow + ', ';
        }

        n++;
      }
      return shadow;
    };

    $elements.each(function(){
      var $element = $(this);
      var time     = $element.data('sciagraphy-time') || Date.now();
      var lat      = $element.data('sciagraphy-lat');
      var lng      = $element.data('sciagraphy-lng');
      var height   = $element.data('sciagraphy-height');

      var sunPosition = SunCalc.getPosition(time, lat, lng);
      var azimuth     = 180 - sunPosition.azimuth * RAD;
      var altitude    = 180 - sunPosition.altitude * RAD;

      var shadowLength = Math.round(Math.tan(altitude) * height);
      var boxShadow = boxSciagraphy(azimuth, shadowLength, settings.shadowColor, settings.shadowSpread);

      $element.css({
        'box-shadow': boxShadow
      });
    });
  };
})(jQuery, window, document);
