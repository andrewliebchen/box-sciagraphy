# What is box-sciagraphy?

Box-sciagraphy is a jQuery plugin that draws a long CSS `box-shadow` for an element to simulate a shadow cast by the sun if that element were viewed from above at a particular place and time. This plugin is in part inspired by Google Map's [incorrect cast shadows](http://littlebigdetails.com/post/102531877124/google-maps-building-shadows-display-accurately) and [FourShadows.js](https://github.com/Gigacore/four-shadows).

Sciagraphy, if you're interested, is the use of shading and the projection of shadows to show perspective in architectural or technical drawing. Architects sometimes use sciagraphic studies to determine how much sunlight will strike a building, in addition to creating convincing rendering of a building.

## Using box-sciagraphy in your project

Box-sciagraphy can be included in your project with NPM or Bower, or by downloading [`dist/box-sciagraphy.js`](https://raw.githubusercontent.com/andrewliebchen/box-sciagraphy/master/dist/box-sciagraphy.js) directly.

Install from NPM:
```
$ npm install box-sciagraphy
```

Install from Bower:
```
$ bower install box-sciagraphy
```

Box-sciagraphy depends on jQuery and [Suncalc](https://github.com/mourner/suncalc). You'll need to include them both in your project:

```
<script src="path/to/jquery.js"></script>
<script src="path/to/suncalc.js"></script>
<script src="path/to/box-sciagraphy.js"></script>
```

You'll need to define what elements should recieve box-sciagraphy shadows:

```
$('.element').boxSciagraphy();
```

On individual elements, you'll need to define an UNIX timestamp, latitude, and longitude. For an element "placed" at 9:00am on December 21, 2014 (Winter Solstice):

```
<div class="element"
  data-sciagraphy-height="100"
  data-sciagraphy-time="1419184800"
  data-sciagraphy-lat="37.386052"
  data-sciagraphy-lng="-122.083851"></div>
```

Boom, shadows. Cool huh? There're some good tools out there to help you get the information you'll need:
* [Latitude/Longitude Finder](http://mynasadata.larc.nasa.gov/latitudelongitude-finder/)
* [UNIX Timestap](http://www.unixtimestamp.com/)
* [WolframAlpha](http://www.wolframalpha.com/)

## Why is this useful?

Box-sciagraphy's usefulness is dubious at best. But, if you can think of a compelling use, I'd love to hear about it!

## Contributing

Box-sciagraphy is under tested...I'm pretty sure the math is correct and that it works for all appropriate times and locations. Please submit issues for any problems you may encounter. If you'd like to contribute, feel free to open an issue or pull request. Also, I'd love to hear from you if you use Reacticons in your project!
