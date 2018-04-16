/**
 * Created by zw on 2016/5/4.
 */

/*侧边导航栏显示隐藏效果
* author zw
* time 2016/5/4
* */
$(".sidebar_list").bind("mouseover",function(){
    $(this).find("div").css('display','block');
}).bind("mouseout",function(){
    $(".sidebar_list>div").css('display','none');
});

///*显示绿色
// *author zw
// *time 2016/5/4
//* */
//function showGreen(){
//    $("#sidebar").css("background-color","#b8cf27");
//    $("#sidebar_content").css("background-color","#b8cf27");
//    $(".sidebar_list").css("background-color","#b8cf27");
//    $(".sidebar_list>div").css("color","#b8cf27");
//    $(".sidebar_list").hover(function(){
//        $(this).css("-moz-box-shadow","-2px 0 5px  #b8cf27,0 -2px 5px  #b8cf27,0 2px 5px  #b8cf27,2px 0 5px #b8cf27");
//        $(this).css("-webkit-box-shadow","-2px 0 5px  #b8cf27,0 -2px 5px  #b8cf27,0 2px 5px  #b8cf27,2px 0 5px #b8cf27");
//        $(this).css("box-shadow","-2px 0 5px  #b8cf27,0 -2px 5px  #b8cf27,0 2px 5px  #b8cf27,2px 0 5px #b8cf27");
//    },function(){
//        $(this).css("-moz-box-shadow","none");
//        $(this).css("-webkit-box-shadow","none");
//        $(this).css("box-shadow","none");
//    })
//}
///*
// *显示白色
// * author zw
// * time 2016/5/4
// * */
//function showWhite(){
//    $("#sidebar").css("background-color","white");
//    $("#sidebar_content").css("background-color","white");
//    $(".sidebar_list").css("background-color","white");
//    $(".sidebar_list>div").css("color","white");
//    $(".sidebar_list").hover(function(){
//        $(this).css("-moz-box-shadow","-2px 0 5px  white,0 -2px 5px  white,0 2px 5px  white,2px 0 5px white");
//        $(this).css("-webkit-box-shadow","-2px 0 5px  white,0 -2px 5px  white,0 2px 5px  white,2px 0 5px white");
//        $(this).css("box-shadow","-2px 0 5px  white,0 -2px 5px  white,0 2px 5px  white,2px 0 5px white");
//    },function(){
//        $(this).css("-moz-box-shadow","none");
//        $(this).css("-webkit-box-shadow","none");
//        $(this).css("box-shadow","none");
//    })
//}
///*侧边栏不同模块颜色显示
//* author zw
//* time 2016/5/4
//* */
//$(window).scroll(function(){
//    //scrollTop���������������topλ�ã�
//    var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
//    if(scrollTop>680){
//        showWhite();
//    }
//    if(scrollTop<680){
//        showGreen();
//    }
//
//});
/*服务栏移入移出效果*/
    $("#item1").bind("mouseover",function(){
        $("#item1").find("img").attr("src",'./../images/index/up1.png');
    }).bind("mouseout",function(){
        $("#item1").find("img").attr("src",'./../images/index/1.png');
    });
    $("#item2").bind("mouseover",function(){
        $("#item2").find("img").attr("src",'./../images/index/up2.png');
    }).bind("mouseout",function(){
        $("#item2").find("img").attr("src",'./../images/index/2.png');
    });
    $("#item3").bind("mouseover",function(){
        $("#item3").find("img").attr("src",'./../images/index/up3.png');
    }).bind("mouseout",function(){
        $("#item3").find("img").attr("src",'./../images/index/3.png');
    });
    $("#item4").bind("mouseover",function(){
        $("#item4").find("img").attr("src",'./../images/index/up4.png');
    }).bind("mouseout",function(){
        $("#item4").find("img").attr("src",'./../images/index/4.png');
    });
    $("#item5").bind("mouseover",function(){
        $("#item5").find("img").attr("src",'./../images/index/up5.png');
    }).bind("mouseout",function(){
        $("#item5").find("img").attr("src",'./../images/index/5.png');
    });

/*侧边栏瞄点效果*/
    $("#sidebar_list1").click(function(){
        $("html,body").animate({scrollTop:$("#status_bar_bg").offset().top},500);
    });
    $("#sidebar_list2").click(function(){
        $("html,body").animate({scrollTop:$("#health").offset().top},500);
    });
    $("#sidebar_list3").click(function(){
        $("html,body").animate({scrollTop:$("#News").offset().top},500);
    });
    $("#sidebar_list4").click(function(){
        $("html,body").animate({scrollTop:$("#health_zixun").offset().top},500);
    });
    $("#sidebar_list5").click(function(){
        $("html,body").animate({scrollTop:$("#contact_us").offset().top},500);
    });
    $("#sidebar_list6").click(function(){
        $("html,body").animate({scrollTop:$("#getApp").offset().top},500);
    });
/*轮播效果*/
//获取banner
var banner=document.getElementsByClassName("banner");
//获取按钮
var banner_button=document.getElementsByClassName("banner_button");

var myanniu=document.getElementById("myanniu");
var jishu=0;
var i=1;
var inter;
window.onload=function(){
    yiDong(1);
}
function ciShu(){
    if(i==0){
        i=1;return
    }else if(i==1){
        i=0;return
    }
}
inter=setInterval(function(){
    ciShu();yiDong(i);
},4000)
function daDua(n){
    clearInterval(inter);
}
function yiDong(number){
    if(jishu!=number){
        banner[number].style.webkitAnimation="jinRu 1s forwards";
        banner[number].style.animation="jinRu 1s forwards";
        banner[number].style.mozAnimation="jinRu 1s forwards";
        banner[number].style.oAnimation="jinRu 1s forwards";
        banner[number].style.zIndex="8";

        banner[jishu].style.webkitAnimation="goAway 1.5s forwards";
        banner[number].style.Animation="goAway 1s forwards";
        banner[number].style.mozAnimation="goAway 1s forwards";
        banner[number].style.oAnimation="goAway 1s forwards";
        banner[jishu].style.zIndex="9";

        banner_button[jishu].style.backgroundColor="";
        banner_button[number].style.backgroundColor="#89CF64";
        jishu =number;
    }

}
/*查看更多按钮交互效果*/
function buttonXiao(obj){
    obj.style.border="none";
    obj.style.background="-webkit-linear-gradient(right,#89CF64 0%,#2AA9A8 100%)";
    obj.style.background="-o-linear-gradient(right,#89CF64 0%,#2AA9A8 100%)";
    obj.style.background="-ms-linear-gradient(right,#89CF64 0%,#2AA9A8 100%)";
    obj.style.background="-moz-linear-gradient(right,#89CF64 0%,#2AA9A8 100%)";
    obj.style.background="linear-gradient(right,#89CF64 0%,#2AA9A8 100%)";
    obj.style.color="#ffffff";
    obj.style.transition="all 1s";
}
function buttonOut(obj){
    obj.style.border="2px solid #b0c625";
    obj.style.background="none";
    obj.style.color="#b0c625";
    obj.style.transition="all 1s";
}

//控制banner按钮左边距
$(function(){
    var r =(1920-document.body.offsetWidth)/2;
    var h=565-r;
    var btn_android=$("#btn_android");
    btn_android.css("margin-left",""+h+"px");
});
$(window).resize(function() {
    var r =(1920-document.body.offsetWidth)/2;
    var h=565-r;
    var btn_android=$("#btn_android");
    btn_android.css("margin-left",""+h+"px");
});
function location_href(){
    location.href="../pages/article_Content.html";
}


