import Util from './Util';

class AnimatedPolygon {
  constructor(polygons, paper, baseIndex) {
    this.baseIndex = (typeof baseIndex === 'number' && baseIndex < polygons.length && baseIndex > -1) ? window.parseInt(baseIndex) : 0;
    this.pointArrays = [];
    polygons.forEach((polygon) => {
      this.pointArrays.push(Util.PointListToArray(polygon.node.points));
    });

    // 実際に描画される要素を追加
    this._snapElement = polygons[this.baseIndex]
      .clone()
      .attr({
        points: this.pointArrays[this.baseIndex]
      });
    paper.append(this._snapElement);
  }

  animate(index, duration, easing) {
    this._snapElement.animate({ points: this.pointArrays[index] }, duration, easing);
    return this;
  }
}

export default AnimatedPolygon;