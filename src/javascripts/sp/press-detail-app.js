import BasicApp from './basic-app.js';
import Util from '../components/util.js';
import config from '../components/config.js';

/**
 * SP PRESS DETAIL
 */
class PressDetailApp extends BasicApp {
  constructor() {
    super();
    return this.initFadeIn()
      .setExhibitionImageSize();
  }

  /**
   * フェード表示
   */
  initFadeIn() {
    var _this = this;
    $('.fadeIn').each(function() {
      _this.bindInviewEventListener(config.inviewOffset, $(this), function() {
        $(this).addClass('is-visible');
      });
    });
    return this;
  }

  /**
   * エキシビジョン画像のトリミング
   */
  setExhibitionImageSize() {
    $('.pressEntry__exhibition__img__wrap').each(function() {
      var $image = $(this).find('img');
      if(Util.isOblong($image, $(this))) {
        $image.width('auto').height('100%');
      } else {
        $image.width('100%').height('auto');
      }
    });
    return this;
  }

}

export default PressDetailApp;