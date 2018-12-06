$('.carstyle_list_head li').click(function () {
    var index = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('.carstyle_list_body_div').eq(index).show().siblings('.carstyle_list_body_div').hide();

});

$('.logo').click(function () {
    $('.carstyle').hide();
    $('.carstyle_list_head li').removeClass('active');
});

function first_Show(n) {
    $('.carstyle_list_body:eq(' + n + ') > li:eq(0) .Sedan_number  ul li').parent().children().eq(0).children().eq(0).show().siblings().hide();
    $('.carstyle_list_body:eq(' + n + ')> li:eq(1) .Sedan_number  ul li').parent().children().eq(0).children().eq(0).show().siblings().hide();
    $('.carstyle_list_body:eq(' + n + ') > li:eq(2) .Sedan_number  ul li').parent().children().eq(0).children().eq(0).show().siblings().hide();
    $('.carstyle_list_body:eq(' + n + ')> li:eq(3) .Sedan_number  ul li').parent().children().eq(0).children().eq(0).show().siblings().hide();

};
// $('.nav_list li)
$('.nav_list li:eq(0)').click(function () {

    $('.carstyle').show();
    var index = $(this).index();
    $('.carstyle_list_head li').eq(index).addClass('active').siblings().removeClass('active');
    $('.carstyle_list_body_div').eq(index).show().siblings('.carstyle_list_body_div').hide();
    first_Show(0);
    first_Show(1);
    first_Show(2);
    first_Show(3);

});
$('.car_all_link').mouseover(function () {
    // var color=$(this).css('color');
    $(this).children().css('color', '#00adef');
}).mouseout(function () {
    var color = $(this).css('color');
    $(this).children().css('color', color);
});
var length = $('.Sedan_number').length;

function m(n) {

    $('.carstyle_list_body:eq(' + n + ') > li:eq(0) .Sedan_number  ul li').mouseenter(function () {
        var index = $(this).index() - 2;
        $(this).parent().children().eq(0).children().eq(index).show().siblings().hide();
    });
    $('.carstyle_list_body:eq(' + n + ') > li:eq(1) .Sedan_number  ul li').mouseenter(function () {
        var index = $(this).index() - 2;
        $(this).parent().children().eq(0).children().eq(index).show().siblings().hide();
    });
    $('.carstyle_list_body:eq(' + n + ') > li:eq(2) .Sedan_number  ul li').mouseenter(function () {
        var index = $(this).index() - 2;
        $(this).parent().children().eq(0).children().eq(index).show().siblings().hide();
    });
    $('.carstyle_list_body:eq(' + n + ') > li:eq(3) .Sedan_number  ul li').mouseenter(function () {
        var index = $(this).index() - 2;
        $(this).parent().children().eq(0).children().eq(index).show().siblings().hide();
    });
};

m(0);
m(1);
m(2);
m(3);

$('.nav_list li:eq(1)').click(function () {
    $('.main-body').children().eq(2).show().siblings().hide();
    $('.main-body').children().eq(0).show();
});
$('.nav_list li:eq(2)').click(function () {
    $('.main-body').children().eq(3).show().siblings().hide();
    $('.main-body').children().eq(0).show();
});
$('.nav_list li:eq(3)').click(function () {
    $('.main-body').children().eq(4).show().siblings().hide();
    $('.main-body').children().eq(0).show();
});
$('.nav_list li:eq(4)').click(function () {
    $('.main-body').children().eq(5).show().siblings().hide();
    $('.main-body').children().eq(0).show();
    // console.log(1);

});
$('.icon-sousuo').click(function () {
    $('.nav_head_search_body').show();

});

// 记录当前图片的索引，默认 0
var index = 0;
// 找到最大的图片的索引
var maxIndex = $('.slider .slider_img li').length - 1;

function animate_img() {
    // 当前图图片
    $('.slider  .slider_img li')
        .eq(index)
        .fadeOut();
    // 找到下一张图片，把索引记录
    if (index < maxIndex) {
        index++;
    } else {
        index = 0;
    }
    $('.slider .slider_img li')
        .eq(index)
        .fadeIn();
    $('.circle li').eq(index).addClass('active').siblings().removeClass('active');
}
// 下一张 
$('.arrow-right').click(function () {
    // 找到当前图片，让当前图片fadeOut  找到下一张图片，fadeIn
    animate_img();
});
// 上一张
$('.arrow-left').click(function () {
    // 找到当前图片，让当前图片fadeOut  找到上一张图片，fadeIn
    $('.slider  .slider_img li')
        .eq(index)
        .fadeOut();
    // 找到上一张图片
    if (index > 0) {
        index--;
    } else {
        // 当前已经是第一张图片，要获取最后一张图片的索引
        index = maxIndex;
    }
    $('.slider .slider_img li')
        .eq(index)
        .fadeIn();
    $('.circle li').eq(index).addClass('active').siblings().removeClass('active');


});
var t = setInterval(function () {
    animate_img();

}, 4000);


$('.slider').hover(function () {
    clearInterval(t);

}, function () {

    t = setInterval(function () {
        animate_img();

    }, 4000);
});
$('.circle >ul> li ').mouseenter(function () {
    var index = $(this).index();
    $('.slider > ul > li').eq(index).fadeIn().siblings().fadeOut();
    $(this).addClass('active').siblings().removeClass('active');
    $(this).children().addClass('active').siblings().removeClass('active');
    $(this).children().css('background-size','20px 4px');
    $(this).stop(true, true).animate({
            "backgroundColor": '#00FFFF'
        }, 1000)
        .siblings().animate({
            "backgroundColor": '#fff'
        }, 100);


});

var arrs = ['GLA SUV', 'GLA SUV', 'GLC SUV', 'GLC 跑车 SUV', '奔驰是我的', '奔驰真是我的', '真是我的奔驰',
    '是我的真奔驰', '奔驰是真的', '梅赛德斯是奔驰', '跑车是我的', '是我的跑车', '跑车是真的', 'S级跑车',
    'S级超级跑车', 'GLS', 'GLS', 'GLE', 'Glee'
];
var input = document.querySelector('#search_carstyle');
var ul = document.querySelector('.search-nav-auto--onmouseover');
input.oninput = function () {
    ul.innerHTML = '';
    var v = this.value;
    if (v == '') {
        return;
    }
    // console.log(typeof v);
    // console.log(v);
    for (var i = 0; i < arrs.length; i++) {
        if (arrs[i].indexOf(v) != -1) {

            var li = document.createElement('li');
            li.className = 'get';
            li.innerText = arrs[i];
            ul.appendChild(li);
            //    console.log(li);
        }
    }
}
$('.search-nav-auto--onmouseover').on('mouseenter', '.get', function () {
    $(this).css('color', '#00adef').siblings().css('color', '#333');

});
$('.nav_head .nav_head_search_body :nth-child(3)').click(function () {
    $('.search-nav-auto--onmouseover').hide();
});

$('.buycar_help .buy_help_list li img').mouseenter(function(){
    $(this).addClass('active').parent().siblings().children().removeClass('active');
}).mouseout(function(){
    $(this).removeClass('active');
});
