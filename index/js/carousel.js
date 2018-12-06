// 给banner添加滚动动画
// 点击下部按钮
// 定义一个全局变量num接收当前i的索引值，定义在外面，提高性能，节省内存
var index = 0;
// 点右键
  function moveUl() {
    if (index === 0) {
      $(".banner-img ul").css("left", 0);
    }
    index++;
    $(".banner-img ul").animate({
        left: index * -1160
      }, 200);
    if (index === 3) {
      index = 0;
    }
    togClass(index);
  };  

var num = 0;
  $(".banner-radius").on("click", 'i' ,function() {
      num = $(this).index(".banner-radius i");
      togClass(num);
      $(".banner-img ul").animate({
          left: num * -1160
      }, 200);
  });

// 封装下部按钮添加删除类过程
  function togClass(num) {
    $(".banner-radius i")
      .eq(num)
      .addClass("active")
      .siblings()
      .removeClass("active");
      index = num;
  }
// 鼠标移到图片上，停止定时器
  var a;
    // 设置一个定时器函数
  function setInt(num) {
    a = setInterval(function() {
        moveUl(num);
    }, 3000);
  }
  setInt(num);
  $(".banner-img").hover(
    function() {
      clearInterval(a);
    },
    function() {
      setInt(num);
    }
  );