$(function(){
    //客户口碑、产品价值、公司简介页面跳转
    var arr = ['repute.html','system.html?index=1','profile.html'];//'?index=1'用于传递参数给system.html
    $('.selection li').each(function(index){
        $(this).tap(function(){
            window.location.href = arr[index];
        });
    });
});