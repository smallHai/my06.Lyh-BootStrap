
$(function(){

    //轮播图自动播放
    $("#myCarousel").carousel({
        interval: 3000,
    });

    //设置内容区文字居中
    $(".text").eq(0).css("margin-top",($(".auto").eq(0).height()-$(".text").eq(0).height())/2+"px");
    $(window).resize(function(){
        $(".text").eq(0).css("margin-top",($(".auto").eq(0).height()-$(".text").eq(0).height())/2+"px");
    });

    $(".text").eq(1).css("margin-top",($(".auto").eq(1).height()-$(".text").eq(1).height())/2+"px");
    $(window).resize(function(){
        $(".text").eq(1).css("margin-top",($(".auto").eq(1).height()-$(".text").eq(1).height())/2+"px");
    });


});