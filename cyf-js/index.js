window.onload = function () {
    js1();
    js2();
}
function js1() {
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
    // 封印电脑默认事件

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
    // 封印电脑默认事件
    box.onmouseover = function () {
        $(".gundongtiao").css("display", "block");
        $(document).bind('mousewheel', function (event, delta) { return false; });
    }
    // 解封电脑默认事件
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
    var arr = []; // 数据存放的数组
    // 页签对号出现与消失
    for (var i = 0; i < $(".zhedang_lis").length; i++) {
        $(".zhedang_lis").eq(i).on("click", function () {
            if ($(this).attr("data-lis") == "on") {
                $(this).addClass("lis").attr("data-lis", "off");
            } else {
                $(this).removeClass("lis").attr("data-lis", "on");
            }
        })
    }
    // 创建点击事件(创建页面出现)
    $(".yin_divs .cuang").on("click", function () {
        cuangxian();
    })
    // 创建点击事件(创建页面消失)
    $(".zhedang_yeqian_h span").on("click", function () {
        cuangxiao();
    })
    $(".zhedang_yeqian .zhedang_btn .xiao").on("click", function () {
        cuangxiao();
    })
    var chuangHeight = 0; // 创建页面高度
    var guanHeight = 0; // 管理页面高度
    // 封装创建页面出现封装
    function cuangxian() {
        $("#zhedang_name").val("");
        $(".zhedang").css("display", "block");
        var time = setInterval(function () {
            chuangHeight += 25;
            if (chuangHeight >= 520) {
                clearInterval(time);
                chuangHeight = 520;
            }
            $(".zhedang_yeqian").css("height", chuangHeight);
        }, 10)
    }
    // 封装创建页面消失封装
    function cuangxiao() {
        cun = true;
        $(".zhedang").css("display", "none");
        var time = setInterval(function () {
            chuangHeight -= 25;
            if (chuangHeight <= 0) {
                clearInterval(time);
                chuangHeight = 0;
            }
            $(".zhedang_yeqian").css("height", chuangHeight);
        }, 10)
    }
    // 封装管理页面出现封装
    function guanxian() {
        if (arr.length != 0) {
            $(".yeqian_guanli").addClass("yeqian_guanlis");
            var time = setInterval(function () {
                guanHeight += 25;
                if (guanHeight >= 330) {
                    clearInterval(time);
                    guanHeight = 330;
                }
                $(".yeqian_guanli").css("height", guanHeight + (($(".zhedang_yeqian_lis").length - 1) * 40));
            }, 10)
        } else {
            $(".yeqian_guanli").removeClass("yeqian_guanlis");
            var time = setInterval(function () {
                guanHeight += 25;
                if (guanHeight >= 330) {
                    clearInterval(time);
                    guanHeight = 330;
                }
                $(".yeqian_guanli").css("height", guanHeight);
            }, 10)
        }
        $(".zhedang").css("display", "block");
    }
    // 封装管理页面消失封装
    function guanxiao() {
        $(".zhedang").css("display", "none");
        var time = setInterval(function () {
            guanHeight -= 25;
            if (guanHeight <= 0) {
                clearInterval(time);
                guanHeight = 0;
            }
            $(".yeqian_guanli").css("height", guanHeight);
        }, 10)
    }
    // 页签添加事件封装
    function yeqian() {
        $(".nav_left_box").html("");
        $(".zhedang_yeqian_box").html("");
        for (var i = 0; i < arr.length; i++) {
            var $ps = $("<p class='yin_pss' data-index=" + i + ">" + arr[i] + "</p>");
            $(".nav_left_box").append($ps);
            var $lis = $("<li class='zhedang_yeqian_lis' data-index=" + i + "><span>" + arr[i] + "</span><span>页签</span><span class='zhedang_yeqian_xiu'></span><span class='zhedang_yeqian_shan'></span></li>");
            $(".zhedang_yeqian_box").append($lis);
        }
        // 页签组管理页面修改事件
        $(".zhedang_yeqian_xiu").on("click", function () {
            var text = $(this).prev().prev().html();
            var index = $(this).parent().data("index");
            cun = false;
            guanxiao();
            setTimeout(function () {
                cuangxian();
                $("#zhedang_name").val(text);
            }, 300);
            $(".zhedang_btn .cun").on("click", function () {
                if (!cun) {
                    cun = true;
                    if ($("#zhedang_name").val() == "") {
                        alert("输入框内容不能为空");
                    } else {
                        arr[index] = $("#zhedang_name").val();
                        yeqian();
                        cuangxiao();
                        console.log(arr[index]);
                        setTimeout(function () {
                            guanxian();
                        }, 300);
                    }
                }
            })
        })
        // 删除页签组数据
        $(".zhedang_yeqian_shan").on("click", function () {
            var r = confirm("确定删除");
            if (r) {
                var index = $(this).parent().data("index");
                arr.splice(index, 1);
                yeqian();
            }
            if (arr.length == 0) {
                $(".yeqian_guanli").removeClass("yeqian_guanlis");
            } else {
                $(".yeqian_guanli").addClass("yeqian_guanlis");
            }
        })
    }
    var cun = true; // 保存此时是保存还是修改字符串
    // 保存事件添加
    $(".zhedang_btn .cun").on("click", function () {
        if (cun) {
            if ($("#zhedang_name").val() == "") {
                alert("输入框内容不能为空");
            } else {
                baocun();
                cuangxiao();
            }
        }
    })
    // 管理页面出现
    $(".yin_divs .guan").on("click", function () {
        guanxian();
    })
    // 管理页面消失
    $(".yeqian_guanli .zhedang_yeqian_h span").on("click", function () {
        guanxiao();
    })
    // 创建页签组按钮点击
    $(".yeqian_guanli .zhedang_yeqian_bth").on("click", function () {
        guanxiao();
        setTimeout(function () {
            cuangxian();
        }, 300);
    })
    // 保存事件(保存)
    function baocun() {
        arr.push($("#zhedang_name").val());
        yeqian();
    }
}