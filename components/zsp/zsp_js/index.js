window.onload = function () {
    var a = true; // 判断页签组是否点击
    $(".nav_left_heng").on("click", function () {
        if (a) {
            $(this).children().css("display", "block");
            a = false;
        } else {
            $(this).children().css("display", "none");
            a = true;
        }
    })
    // 页签组创建的管理事件
    var yeqian_height = 0;// 页签的高度
    $(".nav .nav_left .nav_left_heng .yin .yin_divs .cuang").on("click", function () {
        $(".zhedang").css("display", "block");
        var timer = setInterval(function () {
            yeqian_height += 25;
            if (yeqian_height >= 525) {
                clearInterval(timer);
                yeqian_height = 525;
            }
            $(".zhedang_yeqian").css("height", yeqian_height);
        }, 10)
    })
    $(".zhedang_yeqian .zhedang_btn .xiao").on("click", function () {
        yeqianXiao();
    })
    $(".zhedang_yeqian .zhedang_yeqian_h span").on("click", function () {
        yeqianXiao();
    })
    // 鼠标指针放上去是显示
    $(".zhedang_yeqian_bianji .top input").on("mouseover", function () {
        $(".zhedang_yeqian_bianji .top span").css("display", "block");
    })
    // 鼠标指针获得焦点时改变样式
    $(".zhedang_yeqian_bianji .top input").on("focus", function () {
        $(".zhedang_yeqian_bianji .top span").addClass("color");
    })
    // 鼠标指针失去焦点时失去样式
    $(".zhedang_yeqian_bianji .top input").on("blur", function () {
        $(".zhedang_yeqian_bianji .top span").removeClass("color").css("display", "none");
    })
    // 页签组保存事件
    $(".zhedang_btn .cun").on("click", function () {
        var input_val = $(".zhedang_yeqian_bianji input").val();
        console.log(input_val);
        if (input_val.length <= 0) {
            alert("请填写名称");
        } else {
            var span_top = 50; // 导航栏方块的位置
            $ps = $("<p class='yin_pss'>" + input_val + "</p>");
            $(".nav_left_heng .yin h2").after($ps);
            yeqianXiao();
            $(".zhedang_yeqian_bianji input").val("");
        }
    })
    // 页签组对号出现消失事件
    for (var i = 0; i < $(".zhedang_lis").length; i++) {
        $(".zhedang_lis").eq(i).on("click", function () {
            if ($(this).attr("data-lis") == "on") {
                $(this).addClass("lis");
                $(this).attr("data-lis", "off");
            } else {
                $(this).removeClass("lis");
                $(this).attr("data-lis", "on");
            }
        })
    }
    // 页签组消失事件封装
    function yeqianXiao() {
        var timers = setInterval(function () {
            yeqian_height -= 25;
            if (yeqian_height <= 0) {
                clearInterval(timers);
                $(".zhedang").css("display", "none");
                yeqian_height = 0;
            }
            $(".zhedang_yeqian").css("height", yeqian_height);
        }, 10)
    }
    var box = document.getElementById('zhedang_box');
    box.addEventListener("mousewheel", fn1);
    box.addEventListener("DOMMouseScroll", fn1);
    var tops = 0; // 滚动的距离
    var topss = 0; // 滚动的距离
    box.onmouseover = function () {
        $(".gundongtiao").css("display", "block");
        $(document).bind('mousewheel', function (event, delta) { return false; });
    }
    box.onmouseout = function () {
        $(".gundongtiao").css("display", "none");
        $(document).unbind('mousewheel');
    }
    function fn1(ev) {
        var event = ev || window.event;
        var point = true; //true向下，false向上
        //写一段浏览器兼容性的程序，实现不管什么浏览器，向下滚动 修改point为true，向上滚动为false
        if (event.wheelDelta) {
            point = event.wheelDelta > 0 ? false : true;

        } else {
            point = event.detail > 0 ? true : false;
        }
        //如果是空字符串，0，undefined，null，NaN返回false
        //如果是 有内容的字符串，对象，非0数字，函数返回true
        if (event.preventDefault) {
            //现代浏览器
            event.preventDefault;
        } else {
            //IE6/7/8浏览器
            event.returnValue = false;
        }
        if (point) {
            tops += 3;
            topss += 1.5;
        } else {
            tops -= 3;
            topss -= 1.5;
        }
        if (tops <= 0) {
            tops = 0;
        }
        if (tops >= 300) {
            tops = 300;
        }
        if (topss <= 0) {
            topss = 0;
        }
        if (topss >= 160) {
            topss = 160;
        }
        $("#zhedang_ul").css("top", -tops + "px");
        $(".gundongtiao").css("top", topss + "px");
        // console.log( point );
        // console.log( event.detail );
    }
}