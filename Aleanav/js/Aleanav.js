// 获取所有的li元素并且给他们注册上鼠标滑动事件
// 获取li的父元素注册事件委托
// tab切换公用函数

/* 
  封装函数参数：
    list：事件元素的父盒子，注册事件委托
    lis：事件元素
    lismain：内容的父盒子
    lisbox：内容承载盒子
*/
function setTab(list, lis, lismain, lisbox) {
  $(list).on("mouseover", lis, function() {
    // 鼠标滑上，给a标签添加active类名
    $(this)
     .children('a')
     .addClass('active')
     .end()
     .siblings(lis)
     .children('a')
     .removeClass('active');
  
    $(lismain).show();
  
    var index = $(this).index(lis);
    $(lisbox)
     .eq(index)
     .show()
     .siblings()
     .hide();
  });
}

// 导航一级li
setTab('.rowlist', '.row', '.row_content', '.row_box');
// 导航二级li
setTab('.collist', '.col', '.col_content', '.nav_content');
// 导航三级li
setTab('.brandlist', '.brand_li', '.col_content', '.brand_content img');

$("#nav").on('mouseleave' ,function() {
  // 鼠标滑出，给a标签移除active类名
  $('.row')
   .children('a')
   .removeClass('active');
  $('.row_content').hide();
});