// jQuery's probably not necessary

$(document).ready(function(){
  var currentTime = 1415959200; // Make dynamic

  var PI  = Math.PI;
  var rad = 180/PI;

  var sunPosition = SunCalc.getPosition(currentTime, 37.386052, 122.083851);
  var azimuth     = sunPosition.azimuth * rad;
  var altitude    = sunPosition.altitude * rad;

  console.log(altitude + ' deg');
  console.log(azimuth + ' deg');

  $('.box').attr('data-azimuth', azimuth).attr('data-altitude', altitude);
});
