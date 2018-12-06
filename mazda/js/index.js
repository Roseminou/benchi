// 固定导航栏
$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 0) {
        $('#top_nav')
            .addClass('fixed');
        $('#nav_top')
            .addClass('active')
            .slideUp();

        $('#to-top').show();
    } else {
        $('#top_nav')
            .removeClass('fixed');
        $('#nav_top')
            .removeClass('active')
            .slideDown();
        $('#to-top').hide();
    }
});

$('#to-top').click(function () {
    $('html,body').animate({
        scrollTop: 0
    }, 200);
});




// 轮播图
var index = 0;
var maxIndex = $('.banner li').length - 1;
$('.arrow-right').click(function () {
    $('.banner li')
        .eq(index)
        .fadeOut();

    $('.circle p')
        .eq(index)
        .removeClass('active');

    if (index < maxIndex) {
        index++;
    } else {
        index = 0;
    }

    $('.banner li')
        .eq(index)
        .fadeIn();

    $('.circle p')
        .eq(index)
        .addClass('active');
});

$('.arrow-left').click(function () {
    $('.banner li')
        .eq(index)
        .fadeOut();

    $('.circle p')
        .eq(index)
        .removeClass('active');

    if (index > 0) {
        index--;
    } else {
        index = maxIndex;
    }

    $('.banner li')
        .eq(index)
        .fadeIn();

    $('.circle p')
        .eq(index)
        .addClass('active');
});

$('.circle p').click(function () {
    var x = $(this).index();
    $('.banner li')
        .eq(x)
        .fadeIn();

    $(this).addClass('active')
        .siblings()
        .removeClass('active');

    $('.banner li')
        .eq(index)
        .fadeOut();

    index = x;
});

setInterval(function () {
    $('.arrow-right').click();
}, 4000);

// 遮蔽层
$('.a1').mouseenter(function () {
    $('.a4').addClass('active');
});

$('.a1').mouseleave(function () {
    $('.a4').removeClass('active');
});

$('.a2').mouseenter(function () {
    $('.a3').addClass('active');
});

$('.a2').mouseleave(function () {
    $('.a3').removeClass('active');
});

$('.a3').mouseenter(function () {
    $('.a2').addClass('active');
});

$('.a3').mouseleave(function () {
    $('.a2').removeClass('active');
});

$('.a4').mouseenter(function () {
    $('.a1').addClass('active');
});

$('.a4').mouseleave(function () {
    $('.a1').removeClass('active');
});

// 获取ul
var list = document.querySelector('.mdzda');
// 获取li
var lis = document.querySelectorAll('.mdzda>li');
// 获取左右按钮
var btn1 = document.querySelector('.btn1');
var btn2 = document.querySelector('.btn2');
// 定义一个变量，index，标识当前显示哪个轮播项，默认为0
var index = 0;

// 给右侧按钮注册点击事件
btn2.onclick = function () {
    index++;
    if (index > 2) {
        index = 2;
    }
    var v = index * -300;
    move(list, v);
};

btn1.onclick = function () {
    index--;
    if (index < 0) {
        index = 0;
    }

    var v = index * -300;
    move(list, v);

}