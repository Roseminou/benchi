
// 缓冲运动：10 9  8  7  4  3  1
/*
  功能：动画
  参数：
    element 要运动的元素  元素对象
    targetValue 目标值    数字
    speed 速度（步长）    数字
*/
function move(element, targetValue) {
  // 3.1 清除旧的定时器
  clearInterval(element.num);
  // 4. 时间控制：产生一个定时器
  element.num = setInterval(function () {
    // 4.1 获取div原有的left值
    var v = element.offsetLeft;
    // 4.1.1 判断是否到达目标
    if (v == targetValue) {
      // 4.1.2 清除定时器
      clearInterval(element.num);
      // 4.1.2 结束本次函数的执行
      return;
    }
    // 4.2 在原有基础上+speed或-speed
    // 缓冲运动的公式：(目标值-原有值)/基数
    // (100 - 0) / 10       10
    // (100- 10) / 10       9
    // (100 - 19) / 10      8.1
    // .....

    // 缓冲的公式
    var speed = (targetValue - v) / 10;
    // 检测方向
    if (targetValue > v) {
      speed = Math.ceil(speed);
    } else {
      speed = Math.floor(speed);
    }
    //设置物体的位置
    element.style.left = v + speed + 'px';


  }, 10);
};