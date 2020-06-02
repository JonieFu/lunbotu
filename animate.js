function animate(obj, target, callback) {
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
    var step = (target - obj.offsetLeft) / 10;
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    if (obj.offsetLeft == target) {
      clearTimeout(obj.timer);
      // 回调函数位置
      if (callback) {
        callback();
      }
    }
    obj.style.left = obj.offsetLeft + step + "px";
  }, 15);
}
