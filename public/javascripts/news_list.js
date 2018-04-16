/**
 * Created by Lucky on 2016/5/11.
 */
/*自定义新闻列表数据*/
var news_json=[
    {imgSrc:"../images/news_list/news_pic1.png",news_title:"成都妇幼保健院",news_introduce:"为您提供更专业、更可靠的医生问诊服务",news_content:"为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务为您提供更专业、更可靠的医生问诊服务为您提供更专业、更可靠的医生问诊服务为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务，为您提供更专业......"},
    {imgSrc:"../images/news_list/news_pic2.png",news_title:"成都妇幼保健院",news_introduce:"为您提供更专业、更可靠的医生问诊服务",news_content:"为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务，为您提供更专业......"},
    {imgSrc:"../images/news_list/news_pic3.png",news_title:"成都妇幼保健院",news_introduce:"为您提供更专业、更可靠的医生问诊服务",news_content:"为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务，为您提供更专业......"},
    {imgSrc:"../images/news_list/news_pic4.png",news_title:"成都妇幼保健院",news_introduce:"为您提供更专业、更可靠的医生问诊服务",news_content:"为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务，为您提供更专业......"},
    {imgSrc:"../images/news_list/news_pic5.png",news_title:"成都妇幼保健院",news_introduce:"为您提供更专业、更可靠的医生问诊服务",news_content:"为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务，为您提供更专业......"},
    {imgSrc:"../images/news_list/news_pic6.png",news_title:"成都妇幼保健院",news_introduce:"为您提供更专业、更可靠的医生问诊服务",news_content:"为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务，为您提供更专业......"}
    ];

/*新闻列表模板*/
var news_Model=function(){
    /*清除盒子中的内容*/
    var news_content_box=document.getElementById("news_content_box");
    news_content_box.innerHTML="";
    function news_list(imgSrc,news_title,news_introduce,news_content){
            var div1=document.createElement("div");
            div1.setAttribute("class","news_list");
            var img=document.createElement("img");
            img.setAttribute("src",""+imgSrc+"");
            var p1=document.createElement("p");
            p1.setAttribute("class","news_list_title");
            p1.innerHTML=""+news_title+"";
            var p2=document.createElement("p");
            p2.setAttribute("class","news_list_introduce");
            p2.innerHTML=""+news_introduce+"";
            var p3=document.createElement("p");
            p3.setAttribute("class","news_list_content");
            p3.innerHTML=""+news_content+"";
            var input=document.createElement("a");
            input.setAttribute("href","./../article_Content.html");
            input.innerText="查看更多";
            input.setAttribute("target","_blank");
            news_content_box.appendChild(div1);
            div1.appendChild(img);
            div1.appendChild(p1);
            div1.appendChild(p2);
            div1.appendChild(p3);
            div1.appendChild(input);
            div1.style.webkitAnimation="jianbian 10s forwards";
            div1.style.animation="jianbian 10s forwards";
        }
    function run(imgSrc,news_title,news_introduce,news_content){
         news_list(imgSrc,news_title,news_introduce,news_content);
    }
    return {a: run};
}();
/*显示新闻内容列表*/

for(var i=0;i<news_json.length;i++){
    news_Model.a(news_json[i].imgSrc,news_json[i].news_title,news_json[i].news_introduce,news_json[i].news_content);
    $(".news_list").animate({
        opacity: '1'
    });
}

/*为公司新闻按钮和行业新闻按钮绑定加载数据事件*/
$("#Comp_news").bind("click",function(){
    $("#Ind_news").css("background-color","#eee").css("color","#666");
    $("#Comp_news").css("background-color","#b0c625").css("color","#white");
    $("#page_location").text("当前位置：首页 / 新闻动态 / 公司新闻 / 新闻列表");
    var news_content_box=document.getElementById("news_content_box");
    news_content_box.innerHTML="";
    document.getElementById("Compeny").innerText="公司新闻 / ";
    document.getElementById("english_com").innerText="Company news";
    for(var i=0;i<news_json.length;i++){
        news_Model.a(news_json[i].imgSrc,news_json[i].news_title,news_json[i].news_introduce,news_json[i].news_content);
    }
    $(".news_list").animate({
        opacity: '1'
    }, "3000");
});

$("#Ind_news").bind("click",function(){
    $("#Comp_news").css("background-color","#eee").css("color","#666");
    $("#Ind_news").css("background-color","#b0c625").css("color","#white");
    $("#page_location").text("当前位置：首页 / 新闻动态 / 公司新闻 / 行业新闻");
    var news_content_box=document.getElementById("news_content_box");
    news_content_box.innerHTML="";
    document.getElementById("Compeny").innerText="行业新闻 / ";
    document.getElementById("english_com").innerText="Industry news";
    for(var i=5;i>=0;i--){
        news_Model.a(news_json[i].imgSrc,news_json[i].news_title,news_json[i].news_introduce,news_json[i].news_content);
    }
    $(".news_list").animate({
        opacity: '1'
    }, "3000");
});
//
//
//function location_href(){
//    location.href="./../pages/article_Content.html";
//}





