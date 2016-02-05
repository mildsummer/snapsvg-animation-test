class Util {
  PointListToArray(PointList) {
    let array = [];
    for (var i = 0, len = PointList.length; i < len; i++) {
      array.push(PointList[i].x);
      array.push(PointList[i].y);
    }
    return array;
  }
}

export default new Util();