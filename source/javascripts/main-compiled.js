import $ from 'jquery';

import AnimatedPolygon from './components/AnimatedPolygon';
import AnimatedRect from './components/AnimatedRect';
import AnimatedPath from './components/AnimatedPath';
import AnimatedCircle from './components/AnimatedCircle';

var elasticOut = require('eases/elastic-out');

$(function () {

  let snap = Snap(500, 500);
  $('.svg').append(snap.node);

  // SVGファイルの読み込み
  let loadSvg = function (url) {
    return new Promise(function (resolve, reject) {
      Snap.load(url, function (svg) {
        if (svg) {
          resolve(svg);
        } else {
          reject(svg);
          return;
        }
      });
    });
  };

  // すべて読み込んで、最初のものを描画
  let files = ['./materials/house.svg', './materials/house2.svg', './materials/house3.svg'];
  Promise.all(files.map(loadSvg)).then(function (svgs) {
    let polygons = svgs.map(function (svg) {
      return svg.select('#outline');
    });
    let rects = svgs.map(function (svg) {
      return svg.select('#part');
    });
    let paths = svgs.map(function (svg) {
      return svg.select('#bed');
    });
    let paths2 = svgs.map(function (svg) {
      return svg.select('#path');
    });
    let circles = svgs.map(function (svg) {
      return svg.select('#circle');
    });
    let animatedPolygon = new AnimatedPath(polygons, snap);
    let animatedRect = new AnimatedRect(rects, snap);
    let animatedPath = new AnimatedPath(paths, snap);
    let animatedPath2 = new AnimatedPath(paths2, snap);
    let animatedCircle = new AnimatedCircle(circles, snap);
    files.map(function (file, index) {
      $('body').append($('<button>').text(index).click(function () {
        animatedPolygon.animate(index, 1000, elasticOut);
        animatedRect.animate(index, 1000, elasticOut);
        animatedPath.animate(index, 1000, elasticOut);
        animatedPath2.animate(index, 1000, elasticOut);
        animatedCircle.animate(index, 1000, elasticOut);
      }));
    });
  });
  //.catch(function(err) {
  //  console.error(err);
  //});
});

//# sourceMappingURL=main-compiled.js.map