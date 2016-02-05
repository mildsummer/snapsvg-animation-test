import Util from './Util';

class AnimatedPath {
  constructor(paths, paper, baseIndex) {
    this.baseIndex = (typeof baseIndex === 'number' && baseIndex < polygons.length && baseIndex > -1) ? window.parseInt(baseIndex) : 0;
    this.paths = paths;

    // 実際に描画される要素を追加
    this._snapElement = paths[this.baseIndex].clone();
    paper.append(this._snapElement);
  }

  animate(index, duration, easing) {
    this._snapElement.animate({ d: this.paths[index].attr('d') }, duration, easing);
    return this;
  }
}

export default AnimatedPath;