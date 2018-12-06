// 鼠标进入图片尺寸改变
$('.world > .pic > .pic-list > div > a > img').mouseover(function() {
    // stop(clearQueue, jumpToEnd)
    $('.pic').stop();
    // $('.world > .pic > div > a > img').stop();
    $(this).animate({
        'width': 300,
        'height': 350
    }, 1000);
});
// 鼠标移出图片尺寸改变
$('.world > .pic > .pic-list > div > a > img').mouseout(function() {
    $('.pic').stop();
    $(this).animate({
        'width': 280,
        'height': 330
    }, 1000);
});

// 点击圆圈
// $('.world > .cricle > a').click(function() {
//     $(this).css('background', 'grey').siblings().css('background', 'white');
// });
// $('.two').click(function() {
//     $(this).parent().parent('.pic>.pic-list').addClass('mo');
// });
// 鼠标进入，背景颜色为黄色 橙色 蓝色
$('.weixin > a > img').mouseover(function() {
    $(this).css('background-color', 'yellowgreen');
});
$('.weibo > a > img').mouseover(function() {
    $(this).css('background-color', 'orange');
});
$('.youku > a > img').mouseover(function() {
    $(this).css('background-color', 'skyblue');
});
// 鼠标离开，背景颜色恢复为白色
$('.pic img').mouseout(function() {
    $(this).css('background-color', '');
});

// 点击返回按钮， 以动画的方式， 回到顶部
$('.toTop').click(function() {
    $('html,body').animate({
        scrollTop: 0
    }, 500);
});