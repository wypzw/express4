/**
 * Created by Lucky on 2016/5/18.
 */
/*appdownload二维码*/
$(function(){
    var r =(1920-document.body.offsetWidth)/2;
    var h=440-r;
    var btn_android=$("#app_download");
    btn_android.css("left",""+h+"px");
});
$(window).resize(function() {
    var r =(1920-document.body.offsetWidth)/2;
    var h=440-r;
    var btn_android=$("#app_download");
    btn_android.css("left",""+h+"px");
});