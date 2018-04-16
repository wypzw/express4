/**
 * Created by Lucky on 2016/5/18.
 */
/*加载页头和页尾*/
$(document).ready(function(){
    $("#art_header").load("header.html",function(){
        return false;
    });
    $("#art_footer").load("footer.html",function(){
        return false;
    });
});

//点赞与评论按钮切换
$("#art_talk").bind("click",function(){
    $("#art_click").css("color","#666666");
    $("#art_talk").css("color","#308e6f");
    $("#talk_click_box").html("");
    $("#talk_click_box").html("<div class='art_talk_box'>"
        +"<div class='art_first'>"
        +"<span class='pinglun_color'><i class='iconfont'>&#xe615;</i></span>"
        +"<span class='pinglun_color'><i class='iconfont'>&#xe615;</i></span>"
        +"<span class='pinglun_color'><i class='iconfont'>&#xe615;</i></span>"
        +"<span class='pinglun_color'><i class='iconfont'>&#xe615;</i></span>"
        +"<span class='pinglun_color'><i class='iconfont'>&#xe615;</i></span>"
        +"<p class='art_time'>2016-5-16&nbsp;&nbsp;&nbsp;&nbsp;09:24</p>"
        +"</div>"
        +"<div class='art_send_content'>"
        +"<p>谢谢分享！感觉健康资讯内容非常实用，可以留用！谢谢分享！感觉健康资讯内容非常实用，可以留用！谢谢分享！感觉健康资讯内容非常实用，可以留用！谢谢分享！感觉健康资讯内容非常实用，可以留用！谢谢分享！感觉健康资讯内容非常实用，可以留用！谢谢分享！感觉健康资讯内容非常实用，可以留用！</p>"
        +"</div>"
        +"<div class='user_info'>"
        +"<div class='tourist_png'></div>"
        +"<span>账户信息</span>"
        +"<p class='user_name'>(游客登录)</p>"
        +"<p class='user_equipment'>来自手机登录</p>"
        +"</div>"
        +"</div>");
});
$("#art_click").bind("click",function(){
    $("#art_talk").css("color","#666666");
    $("#art_click").css("color","#308e6f");
    $("#talk_click_box").html("");
    $("#talk_click_box").html("<div class='art_talk_box'>"
        + "<div class='art_first'>"
        +"<span class='click_color'><i class='iconfont'>&#xe602;</i></span><span class='click_num'>+1</span>"
        +"<p class='art_time'>2016-5-16&nbsp;&nbsp;&nbsp;&nbsp;09:24</p>"
        +"</div>"
        +"<div class='user_info_click'>"
        +"<div class='tourist_png'></div>"
        +"<span>账户信息</span>"
        +"<p class='user_name'>(游客登录)</p>"
        +"<p class='user_equipment'>来自手机登录</p>"
        +"</div>"
        +"</div>")
});