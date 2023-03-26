function scrollToElement(el, offset){
    if(typeof(offset)==='undefined'){
        offset=0;
    }
    if(el.length>0){
        if($(window).scrollTop()<=el.offset().top-100 || $(window).scrollTop()>=el.offset().top+100){
            $('body,html').stop().animate({
                scrollTop:el.offset().top-offset
            }, 2000);
        }
    }
}

$(window).on('load', function () {
    if (window.location.hash != '') {
        var el = $(window.location.hash);
        window.setTimeout(function () {
            scrollToElement(el);
        }, 250);
    }
    // scrollspy
    $('.container').each(function (i) {
        var el = $(this);
        el.scrollspy({
            min: function () {
                return el.position().top-300 ;
            },
            max: function () {
                return el.position().top + el.height() ;
            },
            onEnter: function (element, position) {
                $('.nav ul li').removeClass('active');
                $(".nav ul li a[href='#" + $(element).attr("id") + "']").parent().addClass('active');

            },
            onLeave: function (element, position) {
                $(".nav ul li a[href='#" + $(element).attr("id") + "']").parent().removeClass('active');
            }
        });
    });
    $('.gdbb').each(function (i) {
        var el = $(this);
        el.scrollspy({
            min: function () {
                return el.position().top-1300 ;
            },
            max: function () {
                return el.position().top + el.height() ;
            },
            onEnter: function (element, position) {
                $('.nav ul li').removeClass('active');
                $(".nav ul li a[href='#" + $(element).attr("id") + "']").parent().addClass('active');

            },
            onLeave: function (element, position) {
                $(".nav ul li a[href='#" + $(element).attr("id") + "']").parent().removeClass('active');
            }
        });
    });

});

// 导航条置顶
$(function(){
    var scTop=0;//初始化垂直滚动的距离
    $(document).scroll(function(){
        scTop=$(this).scrollTop();//获取到滚动条拉动的距离
        if(scTop>=512){
            //核心部分：当滚动条拉动的距离大于等于导航栏距离顶部的距离时，添加指定的样式
            $(".nav").addClass("fixDiv");
        }else{
            $(".nav").removeClass("fixDiv");
        }

    })
});

$(function () {
    $(".nav ul li").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
    var obj = window.location.href;
    var index=obj.lastIndexOf("\#");
    obj=obj.substring(index,obj.length);
    $(".aside ul li a").each(function (index) {
        var d=$(this).attr("href");
        if(d==obj){
            var e=$(this).parent();
            e.addClass("active").siblings().removeClass("active");
        }
    });
});
