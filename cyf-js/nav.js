function js2() {
    var dian_suo = true; // 判断三点是否被点击
    $(".nav_left_dian").on("click", function () {
        if (dian_suo) {
            $(".nav_yin").css("display", "block");
            dian_suo = false;
        } else {
            $(".nav_yin").css("display", "none");
            dian_suo = true;
        }
    })
    $(".yangshi2_dian").on("click", function () {
        $(this).parents("li").attr("class", "yangshi1");
    })
    $(".yangshi1_dian").on("click", function () {
        $(this).parents("li").attr("class", "yangshi2");
    })
    var jia_suo = true; // 判断加号隐藏
    $(".jia_xian").on("click", function () {
        if (jia_suo) {
            $(".jia_yin").css("display", "block");
            jia_suo = false;
        } else {
            $(".jia_yin").css("display", "none");
            jia_suo = true;
        }
    })
    var ren_suo = true; // 判断人头像隐藏
    $(".ren_suos").on("click", function () {
        if (ren_suo) {
            $(".renwu_yin").css("display", "block");
            ren_suo = false;
        } else {
            $(".renwu_yin").css("display", "none");
            ren_suo = true;
        }
    })
    var zhuyesuo = true;  // 对对对的主页隐藏的锁
    var zhuyeheiht = 0;  // 对对对的主页隐藏部分高度
    $(".name_div_zhuye").on("click", function () {
        if (zhuyesuo) {
            var timer = setInterval(function () {
                zhuyeheiht += 25;
                console.log(zhuyeheiht);
                if (zhuyeheiht >= 90) {
                    clearInterval(timer);
                    zhuyeheiht = 90;
                }
                $(".name_div_zhuye_yin").css({ "height": zhuyeheiht + "px", "display": "block" });
                zhuyesuo = false;
            }, 20)
        } else {
            zhuyeheiht = 0;
            $(".name_div_zhuye_yin").css({ "height": zhuyeheiht + "px", "display": "none" });
            zhuyesuo = true;
        }

    })
    var zhuyesuo = true;  // 对对对的三点隐藏的锁
    $(".name_div_pai").on("click", function () {
        if (zhuyesuo) {
            $(".name_div_pai_yin").css("display", "block");
            zhuyesuo = false;
        } else {
            $(".name_div_pai_yin").css("display", "none");
            zhuyesuo = true;
        }
    })
    var shiko_suo = true; // 视口的锁
    var shiko_suo2 = true; // 视口的锁
    $(".shiko_ul_liao").on("click", function () {
        if (shiko_suo) {
            $(".shiko_ul_yin").css("display", "block");
            shiko_suo = false;
        } else {
            $(".shiko_ul_yin").css("display", "none");
            shiko_suo = true;
            shiko_suo2 = true;
        }
        $(".shiko_ul_yin_botton").removeClass("shiko_ul_yin_bottons");
        $(".shiko_ul").css("border-top", "1px solid gray");
    })
    $(".shiko_ul_ren").on("click", function () {
        if (shiko_suo2) {
            $(".shiko_ul_yin").css("display", "block");
            shiko_suo2 = false;
        } else {
            $(".shiko_ul_yin").css("display", "none");
            shiko_suo2 = true;
            shiko_suo = true;
        }
        $(".shiko_ul_yin_botton").addClass("shiko_ul_yin_bottons");
        $(".shiko_ul").css("border-top", "1px solid gray");
    })
    $(".shiko_ul_yin_guan").on("click", function () {
        $(".shiko_ul_yin").css("display", "none");
        shiko_suo = true;
        shiko_suo2 = true;
    })
    // 聊天框
    $(".shiko_liaotian").on("click", function () {
        $(".shiko_liaotian_yin").css("display", "block");
        $(".zhedang").css({ "display": "block", "background-color": "black" });
    })
    $(".shiko_liaotian_yin_cuo").on("click", function () {
        $(".shiko_liaotian_yin").css("display", "none");
        $(".zhedang").css({ "display": "none", "background-color": "white" });
    })
}