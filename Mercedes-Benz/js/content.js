// 给全部车型里面的li添加鼠标滑过事件
$('.car-type-banner li').hover(function() {
    // 设置遮盖层
    $(this)
        .find('.cover')
        .show();
    // 改变span的位置  .end()只用看标签元素
    $(this)
        .find('span')
        .css('top', 200);
    // 改变i的样式
    $(this)
        .find('i')
        .css({
            'background': 'white',
            'color': "black",
        });
}, function() {
    // 遮盖层隐藏
    $(this)
        .find('.cover')
        .hide();
    // span回到原来位置
    $(this)
        .find('span')
        .css('top', 250);
    // 改变i的样式
    $(this)
        .find('i')
        .css({
            'background': 'none',
            'color': 'white',
        });
});


// 给发现更多里面的背景图设置
$('.find-more-bg').on('mouseover', 'li', function() {
    // 显示遮盖层
    $(this)
        .find('.cover')
        .show();
    // 显示i
    $(this)
        .find('i')
        .show();
    // 初始化i的样式
    $(this)
        .find('i')
        .css('display', 'inline-block');
});
$('.find-more-bg').on('mouseout', 'li', function() {
    // 隐藏遮盖层
    $(this)
        .find('.cover')
        .hide();
    // 隐藏i
    $(this)
        .find('i')
        .hide();
})


// 改变底部图标
$lis = $('.guanzhu .list li');
$('.guanzhu .list li').mouseover(function() {
    $(this)
        .find('.first')
        .hide()
        .siblings()
        .show();
});
$('.guanzhu .list').mouseout(function() {
    $(this)
        .find('.second')
        .hide()
        .siblings()
        .show();
});