// $("#syx").on("click",function(){
//    console.log("ok");
//    $("#xx").css("display","block");
//    $("#lf").css("display","block");
// })
// $("#x1").change(function(){
//     if($("#x1").val()=="1"){
//        console.log("l")
//        $("#x2").css("visibility","visible");
//        $("#s2").css("visibility","visible");
//        $("#pt").css("visibility","visible");
//    }else{
//     $("#x2").css("visibility","hidden");
//     $("#s2").css("visibility","hidden");
//     $("#pt").css("visibility","hidden");
//    }
// })
//网页上所用到的点击切换
$(".check").on("click", function () {
    console.log($(this).attr("data-index"));
    console.log($(".spte").eq(parseInt($(this).attr("data-index"))));
    console.log($(".spte"));
    if ($(".spte").eq(parseInt($(this).attr("data-index"))).attr("data-wih") == "off") {
        $(".spte").eq(parseInt($(this).attr("data-index"))).attr("data-wih", "ok");
        $(".spte").eq(parseInt($(this).attr("data-index"))).slideDown("show");
    } else {
        $(".spte").eq(parseInt($(this).attr("data-index"))).attr("data-wih", "off");
        $(".spte").eq(parseInt($(this).attr("data-index"))).slideUp("hide");
    }
})
$(".lpDivHeadD").on("click", function () {
    $(".mT12").slideUp("hide");
    $(".mT13").css("visibility", "visible");
})

// for (i = 0; i < $(".cnm").length; i++) {
//     $(".cnm").eq(i).attr("data-swith", "off");
//     console.log($(".cnm").eq(i).attr("data-swith"));
//     $(".cnm").eq(i).on("click", function () {
//         if ($(this).attr("data-swith") == "off") {
//             $(this).next().slideDown("show");
//             $(this).parent().next().children().eq(0).slideDown("show");
//             $(this).attr("data-swith","on");
//             console.log($(this).attr("data-swith"));
//         }
//         if($(this).attr("data-swith") == "on"){
//             $(this).next().slideUp("hide");
//             $(this).parent().next().children().eq(0).slideUp("hide");
//             $(this).attr("data-swith","off");
//         }
//     })
// }
$(".cnm").change(function(){
    var check = $(this).children(".dui").is(":checked");
    console.log(check);
    if (check == true) {
        $(this).next().slideDown("show");
        $(this).parent().next().children().eq(0).slideDown("show");
        $("#botton").slideDown("show");
    }else{
        $(this).next().slideUp("hide");
        $(this).parent().next().children().eq(0).slideUp("hide"); 
        $("#botton").slideUp("hide");
    }
})

