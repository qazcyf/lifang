<?php
    //1.登录连接数据库
    $conn=mysqli_connect("localhost","root","");
    if($conn){
        // echo "连接成功";
    }else{
        // die("连接失败".mysqli_connect_error());
    }
    //2、选择要操作的数据库
    mysqli_select_db($conn,"ZohoFour");
    //设置读取数据库的编码，不然有可能乱码
    mysqli_query($conn,"set names utf8");
    $responseArr = array(
        "code"=>200,
        "data"=>null,
        "msg"=>"数据获取成功",
        // "count"=>0 //总记录数
    );
        $sql = "select * from Frailty";
        $result = mysqli_query($conn,$sql);
        if( mysqli_num_rows($result)>0 ){
            $Frailtylist = array();
            while( $row = mysqli_fetch_assoc($result) ){
                $Frailtylist[]= $row;
            }
            //var_dump($stdentlist);
            $responseArr["data"] = $Frailtylist;
        }else{
            $responseArr["code"] = 207;
            $responseArr["msg"] = "暂无记录";
        }
        die( json_encode($responseArr) );
?>