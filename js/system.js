$(function(){
    var arg = location.search;//获取页面地址中?后面的内容(index=1)
    function show(index){
        $('.item li').removeClass('current1').eq(index).addClass('current1');
        $('.item em').removeClass('current2').eq(index).addClass('current2');
        $('.part').removeClass('current3').eq(index).addClass('current3');
    }
    //判断是否接收到参数
    arg === '?index=1' && show(arg.slice(-1));
    //功能概览点击事件
    $('.button li').each(function(index){
        $(this).tap(function(){
            $('.button li').removeClass('active1').eq(index).addClass('active1');
            $('.button em').removeClass('active2').eq(index).addClass('active2');
            $('.content li').removeClass('show').eq(index).addClass('show');
        });
    });
})