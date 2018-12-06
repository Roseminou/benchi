// 给导航设置导航伸缩动画
$(window).scroll( function () {
  $('.nav')
    .addClass('active');
  $('.nav-left .icon-logo')
    .addClass('active');

  if($(this).scrollTop() === 0) {
    $('.nav')
    .removeClass('active');
    $('.nav-left .icon-logo')
    .removeClass('active');
  }

  if($(this).scrollTop() > 600) {
    $('.backTop').show(500);
  } else {
    $('.backTop').hide(500);
  }
});

// 点击按钮返回头部
$('.backTop').click(function () {
  $('html, body').animate({
    scrollTop: 0,
  })
})
// 给导航添加电梯导航动画效果
$('.nav-right').on('click', 'a', function (e) {
  // 方法一： 通过获取a链接href的属性获得对应楼层的类名或者id名
  // $($(this).attr('href')).offset().top;
  // 方法二： 通过获取a标签的文本内容转化小写，来获取对应楼层的类名
  var text = '.' + $(this).text().toLocaleLowerCase();
  $('html, body').animate({
    scrollTop: $(text).stop().offset().top,
  }, 500, 'swing');
  e.preventDefault();
})

// 页面滚动导航添加样式，文字变色
$(window).scroll(function () {
  var top = $(window).scrollTop();
  function tagClass(index) {
    $('.nav-right a')
    .eq(index)
    .addClass('active')
    .parent()
    .siblings()
    .children()
    .removeClass('active')
  }
  if(top >= $('#contact').offset().top) {
    tagClass(6);
  } else if(top >= $('#blog').offset().top) {
    tagClass(5);
  } else if(top >= $('#stats').offset().top) {
    tagClass(4);
  } else if(top >= $('#gallery').offset().top) {
    tagClass(3);
  } else if(top >= $('#features').offset().top) {
    tagClass(2);
  } else if(top >= $('#about').offset().top) {
    tagClass(1);
  } else if(top >= $('#home').offset().top) {
    tagClass(0);
  } else {
    $('.elevator_nav li')
      .removeClass('active')
  }
})

// 按钮添加动画
$(".box").mouseenter(function() {
  $(document).mouseover(function(e) {
      if(e.target.className == 'box') {       
          var a = e.offsetX;
          var b = e.offsetY;
          var $item = $(".box").siblings("span");
          if (a < 100) {
            $item.css("left", -50);
            $item.removeAttr('right');
          }
          if (b < 25) {
            $item.css("top", -25);
            $item.removeAttr('bottom');
          }
          if (a > 100) {
            $item.css("right", -50);
            $item.removeAttr('left');
          }
          if (b > 25) {
            $item.css("bottom", -25);
            $item.removeAttr('top');
          }
      }
  });
  $(".box")
  .siblings("span")
  .addClass("active");
});

$(".box").mouseleave(function() {
    console.log(1);
    $(".box")
      .siblings("span")
      .removeClass("active")
      .removeAttr('position');
});

// 调用倒计时定时器
var oDiv = document.querySelectorAll(".countDownBox div"); 

// Feature下部淡入淡出动画
$('.gallery-box').on('mouseenter', '.gallery-car', function(e) {
  $(this)
    .children('.gallery-img')
    .fadeOut(300)
    .siblings('.gallery-cover')
    .fadeIn(300)
    e.preventDefault();
})
$('.gallery-box').on('mouseleave', '.gallery-car', function(e) {
  $(this)
    .children('.gallery-img')
    .fadeIn(300)
    .siblings('.gallery-cover')
    .fadeOut(300)
    e.preventDefault();
})

// 导航部分箭头动画
var flag = true;
$('.nav-control').on('click', 'i', function () {
  $(this)
  .hide(500)
  .siblings()
  .show(500)
  if(flag) {
    $('.nav-right')
      .addClass('active')
      console.log(1);
    flag = false;
  } else {
    $('.nav-right')
      .removeClass('active')
    flag = true;
  }
})