// function getDiff(start, end) {
//   var times = end - start;
//   var hours = parseInt(times / 1000 / 60 / 60);
//   hours = hours < 10 ? "0" + hours : hours;
//   var minutes = parseInt((times / 1000 / 60) % 60);
//   minutes = minutes < 10 ? "0" + minutes : minutes;
//   var seconds = parseInt((times / 1000) % 60);
//   seconds = seconds < 10 ? "0" + seconds : seconds;
//   return { hour: hours, minute: minutes, second: seconds };
// }

// var s = new Date();
// var e = new Date("2018/9/20 20:00:00");
// var oDiv = document.querySelectorAll("div");
// var obj = getDiff(s, e);
// oDiv[0].innerText = obj.hour;
// oDiv[1].innerText = obj.minute;
// oDiv[2].innerText = obj.second;

// function _time() {
//   var s = new Date();
//   var e = new Date("2018/9/20 10:26:00");
//   var obj = getDiff(s, e);
//   oDiv[0].innerText = obj.hour;
//   oDiv[1].innerText = obj.minute;
//   oDiv[2].innerText = obj.second;
//   if(obj.hour == '00' && obj.minute == '00' && obj.second == '00') {
//     clearInterval(num);
//   }
// }

// var num = setInterval(_time, 1000);

// 2.实验--------------------------------------------
function getDiff(start, end, oDiv) {
    var times = end - start;
    var days = parseInt(times / 1000 / 60 / 60 / 24);
    var days = days < 10 ? "0" + days : days;
    var hours = parseInt(times / 1000 / 60 / 60 % 24);
    hours = hours < 10 ? "0" + hours : hours;
    var minutes = parseInt((times / 1000 / 60) % 60);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var seconds = parseInt((times / 1000) % 60);
    seconds = seconds < 10 ? "0" + seconds : seconds;
    oDiv[0].innerText = days;
    oDiv[1].innerText = hours;
    oDiv[2].innerText = minutes;
    oDiv[3].innerText = seconds;
}
// var oDiv = document.querySelectorAll("div"); 
function _time() {
    var s = new Date();
    var e = new Date("2019/6/30 20:00:00");
    getDiff(s, e, oDiv);
}
setInterval(_time, 1000);