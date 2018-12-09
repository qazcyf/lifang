<?php
//连接数据库
//1.登录连接数据库
$conn = mysqli_connect("localhost","root","");
//2、选择要操作的数据库
mysqli_select_db($conn,"ZohoFour");
//设置读取数据库的编码，不然有可能乱码
mysqli_query($conn,"set names utf8");

//定义返回数据的json
$responseArr = array(
    "code"=>200,
    "data"=>null
);
$sql = "select * from renwu_kehu";
$result = mysqli_query($conn,$sql);

if(mysqli_num_rows($result)>0){
    $uploadlist = array();
    //将记录集使用mysqli_fech_assoc（）转换成数组；需要先定义一个全局变量空数组
    while($row = mysqli_fetch_assoc($result)){
        //将哪一天记录转换成数组，放到$[]数组中
        $uploadlist[] = $row;
        //转换之后的$uploadlist是一个=二维数组
        // $uploadlist = array(){
        //     0 => array(
        //         "图片名称" =>"20181202134214image.png",
        //         "图片类型" =>"image/png",
        //         "图片大小" =>"284390"
        //     )
        // }
    }
    $responseArr["data"] = $uploadlist;
}else{
    $responseArr["code"] = 207;
}
mysqli_close($conn);
die(json_encode($responseArr));
?>