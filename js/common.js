$(function(){
    //根据屏幕设定html字号
    var deviceWidth = document.documentElement.clientWidth || document.body.clientWidth;
    $('html').css('font-size',deviceWidth / 375 * 10);
    //左侧菜单选项跳转
    var arr = ['index','profile','','system','charge','service','repute','team'];
    $('.menu li').each(function(index){
        $(this).tap(function(){
            var filename = location.href.split('/').slice(-1)[0];
            if(index !== 2 && filename !== arr[index] + '.html'){
                window.location.href = arr[index] + '.html';
            }
            //服务器
            /* if(index === 0 && filename !== ''){
                window.location.href = '/';
            }else if(index !== 0 && index !== 2 && filename !== arr[index] + '.html'){
                window.location.href = arr[index] + '.html';
            } */
        });
    });
    //点击显示隐藏菜单
    var menuWidth = $('.menu').width();
    function showMenu(){
        $('.cover').css('display','block');
        $('.cover').animate({opacity:0.2},200);
        $('.menu').animate({left:0},200);
    }
    function hideMenu(){
        $('.cover').animate({opacity:0},200,function(){
            $('.cover').css('display','none');
        }); 
        $('.menu').animate({left:-menuWidth},200,function(){
            $('.folded').css('display','none');
            $('.spread em').css('background-position-x',0);
        });
    }
    $('header div').tap(function(){
        showMenu();
    });
    $('.cover, .menu div, .menu p').tap(function(){
        hideMenu();
    });
    $('.spread').tap(function(){
        $('.folded').css('display',$('.folded').css('display')==='block'?'none':'block');
        $('.spread em').css('background-position-x',$('.folded').css('display')==='block'? -$('.spread em').width():0);
    });
    //拖动显示隐藏菜单
    var touchX, touchY, moveX, menuLeft, judge = true, admit = drag = false;
    $('.menu, .cover').on('touchstart',function(event){
        touchX = event.touches[0].clientX;
        touchY = event.touches[0].clientY;
        menuLeft = parseInt($('.menu').css('left'));
    }); 
    $('.menu, .cover').on('touchmove',function(event){
        if(judge){//当横向拖动距离大于等于纵向拖动，设置admit值为true
            Math.abs(event.touches[0].clientX - touchX) >= Math.abs(event.touches[0].clientY - touchY) && (admit = true);
            judge = false;//终止if判断
        }
        if(admit){//更偏向横向拖动的操作才会生效
            drag = true;//拖动时为true，默认为false
            moveX = (event.touches[0].clientX - touchX) * 2 + menuLeft;//2倍移速
            moveX > 0 && (moveX = 0);
            moveX < -menuWidth && (moveX = -menuWidth);
            $('.menu').css('left', moveX);
            event.preventDefault();//禁用浏览器自带的纵向滑动
        }
    });
    $('.menu, .cover').on('touchend',function(){
        judge = true;//恢复judge默认值
        if(!drag) return;//未拖动时返回
        admit = drag = false;//拖动完毕后，恢复drag默认值
        moveX >= -menuWidth / 2? showMenu() : hideMenu();
    });
    //选项列表悬浮
    if($('div').hasClass('item')){
        var itemTop = $('.item').offset().top;
        $(window).scroll(function(){
            var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            scrollTop > itemTop? $('.item').addClass('fixed') : $('.item').removeClass('fixed');
        });
    }
    //列表选项点击事件
    $('.item li').each(function(index){
        $(this).tap(function(){
            $('.item li').removeClass('current1').eq(index).addClass('current1');
            $('.item em').removeClass('current2').eq(index).addClass('current2');
            $('.part').removeClass('current3').eq(index).addClass('current3');
        });
    });
    //'我们的客户'与'部分用户名录'拖动事件
    var touchX2, touchY2, moveX2, marginLeft2, index2 = 0, judge2 = finish2 = true, admit2 = drag2 = flag2 = false;
    $('.logo').on('touchstart',function(event){
        touchX2 = event.touches[0].clientX;
        touchY2 = event.touches[0].clientY;
        marginLeft2 = parseFloat($('.logo').css('margin-left'));
        flag2 = finish2? true : false;//点击时判断动画是否结束(根据finish2)，如果未结束需再次点击并判定为结束才能使touchmove事件生效
    })
    $('.logo').on('touchmove',function(event){
        if(!flag2) return;//动画未结束时返回
        if(judge2){
            Math.abs(event.touches[0].clientX - touchX2) >= Math.abs(event.touches[0].clientY - touchY2) && (admit2 = true);
            judge2 = false;
        }
        if(admit2){
            drag2 = true;
            moveX2 = (event.touches[0].clientX - touchX2) * 3 + marginLeft2;
            moveX2 > 0 && (moveX2 = 0);
            moveX2 < -2 * deviceWidth && (moveX2 = -2 * deviceWidth);
            $('.logo').css('margin-left', moveX2);
            event.preventDefault();
        }
    });
    $('.logo').on('touchend',function(){
        judge2 = true;
        if(!drag2 || !flag2) return;//动画未结束时返回
        admit2 = drag2 = finish2 = false;//恢复admit默认值，动画结束前finish2值为false
        if(moveX2 - marginLeft2 > deviceWidth / 2){
            $('.logo').animate({marginLeft:0},200,function(){
                $(this).css('margin-left',-deviceWidth).prepend($('.logo li').eq(-1).clone());//Zepto.js不支持$('selector:eq(-1)')语法
                $('.logo li').eq(-1).remove();
                index2 > 0? index2-- : index2 = 2;
                $('.location li').removeClass('active').eq(index2).addClass('active');
                finish2 = true;//动画结束
            });
        }else if(moveX2 - marginLeft2 < -deviceWidth / 2){
            $('.logo').animate({marginLeft:-deviceWidth * 2},200,function(){
                $(this).css('margin-left',-deviceWidth).append($('.logo li:eq(0)').clone());
                $('.logo li:eq(0)').remove();
                index2 < 2? index2++ : index2 = 0;
                $('.location li').removeClass('active').eq(index2).addClass('active');
                finish2 = true;
            });
        }else{
            $('.logo').animate({marginLeft:marginLeft2},200,function(){
                finish2 = true;
            });
        }
    });
    //'客户口碑'与'用户案例'拖动事件
    var touchX3, touchY3, moveX3, marginLeft3, index3 = 0, judge3 = true, admit3 = drag3 = false, ulWidth = $('.firm').width(),
        liWidth = $('.firm li').eq(1).width(), paddingLeft = parseFloat($('.firm li').css('padding-left')), 
        paddingRight = parseFloat($('.firm li').css('padding-right'));
    $('.firm').on('touchstart',function(event){
        touchX3 = event.touches[0].clientX;
        touchY3 = event.touches[0].clientY;
        marginLeft3 = parseFloat($('.firm').css('margin-left'));
    });
    $('.firm').on('touchmove',function(event){
        if(judge3){
            Math.abs(event.touches[0].clientX - touchX3) >= Math.abs(event.touches[0].clientY - touchY3) && (admit3 = true);
            judge3 = false;
        }
        if(admit3){
            drag3 = true;
            moveX3 = (event.touches[0].clientX - touchX3) * 3 + marginLeft3;
            moveX3 > paddingLeft && (moveX3 = paddingLeft);
            moveX3 < deviceWidth - ulWidth - paddingLeft  && (moveX3 = deviceWidth - ulWidth - paddingLeft);
            $('.firm').css('margin-left', moveX3);
            event.preventDefault();
        }
    });
    $('.firm').on('touchend',function(){
        judge3 = true;
        if(!drag3) return;
        admit3 = drag3 = false;
        marginLeft3 = parseFloat($('.firm').css('margin-left'));
        for(var i = 0; i < 5; i++){
            marginLeft3 <= (deviceWidth + paddingRight) / 2 - paddingLeft - liWidth * (i + 1) && (index3 = i + 1);
        }
        if(index3 !== 0){
            $('.firm').animate({marginLeft:(deviceWidth + paddingRight - liWidth) / 2 - paddingLeft - liWidth * index3},200,function(){
                index3 = 0;
            });
            $('.firm li').hasClass('current') && $('.firm li').animate({opacity:0.4,transform:'scale(1)'}).eq(index3).animate({opacity:1,transform: 'scale(1.14351852)'});
        }else{
            $('.firm').animate({marginLeft:(deviceWidth + paddingRight - liWidth) / 2 - paddingLeft},200);
            $('.firm li').hasClass('current') && $('.firm li').animate({opacity:0.4,transform:'scale(1)'}).eq(0).animate({opacity:1,transform: 'scale(1.14351852)'});     
        }
    });
});
