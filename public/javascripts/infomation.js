/**
 * Created by Lucky on 2016/5/17.
 */
/*加载页头和页尾*/

/*自定义新闻列表数据*/
var news_json=[
    {imgSrc:"../images/infomation/info_1.png",news_title:"早上健康运动应注意事项",news_introduce:"为您提供更专业、更可靠的医生问诊服务",news_content:"为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务为您提供更专业、更可靠的医生问诊服务为您提供更专业、更可靠的医生问诊服务为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务，为您提供更专业......"},
    {imgSrc:"../images/infomation/info_2.png",news_title:"健康早餐很重要",news_introduce:"为您提供更专业、更可靠的医生问诊服务",news_content:"为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务，为您提供更专业......"},
    {imgSrc:"../images/infomation/info_3.png",news_title:"早上健康运动应注意事项",news_introduce:"为您提供更专业、更可靠的医生问诊服务",news_content:"为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务，为您提供更专业......"},
    {imgSrc:"../images/infomation/info_4.png",news_title:"早上健康运动应注意事项",news_introduce:"为您提供更专业、更可靠的医生问诊服务",news_content:"为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务，为您提供更专业......"},
    {imgSrc:"../images/infomation/info_5.png",news_title:"早上健康运动应注意事项",news_introduce:"为您提供更专业、更可靠的医生问诊服务",news_content:"为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务，为您提供更专业......"},
    {imgSrc:"../images/news_list/news_pic6.png",news_title:"早上健康运动应注意事项",news_introduce:"为您提供更专业、更可靠的医生问诊服务",news_content:"为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务、为您提供更专业、更可靠的医生问诊服务，为您提供更专业......"}
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
        /*设置当前页面打开的路径*/
        input.setAttribute("href","./../pages/article_display.html");
        input.innerText="查看更多";
        input.setAttribute("target","_blank");
        news_content_box.appendChild(div1);
        div1.appendChild(img);
        div1.appendChild(p1);
        div1.appendChild(p2);
        div1.appendChild(p3);
        div1.appendChild(input);
    }
    function run(imgSrc,news_title,news_introduce,news_content){
        news_list(imgSrc,news_title,news_introduce,news_content);
    }
    return {a: run};
}();
/*显示新闻内容列表*/
for(var i=0;i<news_json.length;i++){
    news_Model.a(news_json[i].imgSrc,news_json[i].news_title,news_json[i].news_introduce,news_json[i].news_content);
}