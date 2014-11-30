// jQuery's probably not necessary

'use strict';

$(document).ready(function(){
  var $box = $('.box');
  var time = $box.data('sciagraphy-time') || Date.now();
  var lat  = $box.data('sciagraphy-lat');
  var lng  = $box.data('sciagraphy-lng');
  var height = $box.data('sciagraphy-height');

  var PI  = Math.PI;
  var rad = 180/PI;

  var sunPosition = SunCalc.getPosition(time, lat, lng);
  var azimuth     = sunPosition.azimuth * rad - 270;
  var altitude    = 180 - sunPosition.altitude * rad;

  var shadowLength = Math.round(Math.tan(altitude) * height);

  function boxSciagraphy(deg, iterations, color, spread) {
    // Defaults
    color = color || 'gray';
    spread = spread || 0;

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

  var boxShadow = boxSciagraphy(azimuth, shadowLength);

  $box.css({
    'box-shadow': boxShadow
  });
});
