// 图片上传
$(document).ready(function () {
    $.ajax({
        url: 'http://www.ccsc58.cc/weixinnew/Suggestions/php-sdk-7.2.3/getToken.php',
        type: 'POST',
        dataType: 'JSONP',
        jsonp: 'callback',
        jsonpCallback: 'data',
        success: function (res) {
            $('input[name=token]').val(res.list);
        }
    })
});
//点击
var clickImg = function (obj) {
    $(obj).parent().find('.upload_input').click();

}
//删除
var deleteImg = function (obj) {
    // var formData = new FormData();
    //  formData.append('file', $(obj).parent().find('input')[0].files[0]);
    // formData.append('token', $('input[name=token]').val());
    // $.ajax({
    //     url: "http://rs.qiniu.com/delete/",
    //     type: 'POST',
    //     data:formData,
    //     cache: false,
    //     processData: false,
    //     async: false,
    //     contentType: false,
    //     success:function(){

    //     }
    // })
    $(obj).parent().find('input').val('');
    $(obj).parent().find('img.preview').attr("src", "");
    //IE9以下
    $(obj).parent().find('img.preview').css("filter", "");
    $(obj).hide();
    $(obj).parent().find('.addImg').show();
}
//选择图片
function change(file) {
    //预览
    var pic = $(file).parent().find(".preview");
    //添加按钮
    var addImg = $(file).parent().find(".addImg");
    //删除按钮
    var deleteImg = $(file).parent().find(".delete");

    var ext = file.value.substring(file.value.lastIndexOf(".") + 1).toLowerCase();

    // gif在IE浏览器暂时无法显示
    if (ext != 'png' && ext != 'jpg' && ext != 'jpeg' && ext != 'doc' && ext != 'docx') {
        if (ext != '') {
            alert("图片的格式必须为png或者jpg或者jpeg格式！");
        }
        return;
    }
    html5Reader(file, pic, addImg, deleteImg);

}
//H5渲染
function html5Reader(file, pic, addImg, deleteImg) {
    var formData = new FormData();
    formData.append('file', file.files[0]);
    formData.append('token', $('input[name=token]').val());
    $.ajax({
        url: 'http://up-z1.qiniup.com',
        type: 'POST',
        cache: false,
        data: formData,
        processData: false,
        async: false,
        contentType: false,
        success: function (res) {
             pic.attr("src", 'http://ov0v30wya.bkt.clouddn.com/' + res.key);
        }
    })

    addImg.hide();
    deleteImg.show();
}