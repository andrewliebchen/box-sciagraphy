// jQuery's probably not necessary

'use strict';

$(document).ready(function(){
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
      shadow = shadow + ' ' + xPosition + 'px ' + yPosition + 'px ' + spread + ' ' + color;

      if(n < iterations) {
        shadow = shadow + ', ';
      }

      n++;
    }
    return shadow;
  }

  $('.box').each(function(){
    var $box   = $(this);
    var time   = $box.data('sciagraphy-time') || Date.now();
    var lat    = $box.data('sciagraphy-lat');
    var lng    = $box.data('sciagraphy-lng');
    var height = $box.data('sciagraphy-height');
    var shadowColor  = $box.data('sciagraphy-color') || 'gray';
    var shadowSpread = $box.data('sciagraphy-spread') || 0;

    var sunPosition = SunCalc.getPosition(time, lat, lng);
    var azimuth     = 180 - sunPosition.azimuth * RAD;
    var altitude    = 180 - sunPosition.altitude * RAD;

    var shadowLength = Math.round(Math.tan(altitude) * height);
    var boxShadow = boxSciagraphy(azimuth, shadowLength, shadowColor, shadowSpread);

    $box.css({
      'box-shadow': boxShadow
    });
  });
});
