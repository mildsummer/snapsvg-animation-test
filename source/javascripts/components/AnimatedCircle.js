import Util from './Util';

class AnimatedCircle {
  constructor(circles, paper, baseIndex) {
    this.baseIndex = (typeof baseIndex === 'number' && baseIndex < polygons.length && baseIndex > -1) ? window.parseInt(baseIndex) : 0;
    this.circles = circles;

    // 実際に描画される要素を追加
    this._snapElement = circles[this.baseIndex].clone();
    paper.append(this._snapElement);
  }

  animate(index, duration, easing) {
    let target = this.circles[index];
    this._snapElement.animate({ cx: target.attr('cx'), cy: target.attr('cy'), r: target.attr('r') }, duration, easing);
    return this;
  }
}

export default AnimatedCircle;