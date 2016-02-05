import Util from './Util';

class AnimatedRect {
  constructor(rects, paper, baseIndex) {
    this.baseIndex = (typeof baseIndex === 'number' && baseIndex < polygons.length && baseIndex > -1) ? window.parseInt(baseIndex) : 0;
    this.rects = rects;

    // 実際に描画される要素を追加
    this._snapElement = rects[this.baseIndex].clone();
    paper.append(this._snapElement);
  }

  animate(index, duration, easing) {
    let target = this.rects[index];
    this._snapElement.animate({ x: target.attr('x'), y: target.attr('y'), width: target.attr('width'), height: target.attr('height') }, duration, easing);
    return this;
  }
}

export default AnimatedRect;