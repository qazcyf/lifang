<?php
$conn = mysqli_connect("localhost","root","");
// if($conn){
//     echo "链接成功";
// }else{
//     die("连接失败！".mysqli_connec_eror());
// };
mysqli_select_db($conn,"file");
mysqli_query($conn,"set names utf8");
$action = empty($_REQUEST['action'])?"null":$_REQUEST['action'];

$responseArr = array(
	"code"=>200,
	"data"=>null,
	"msg"=>"数据获取成功"
);
switch ($action) {
	case $action:
		$sql = "select * from ".$action;
		$result = mysqli_query($conn,$sql);
		if( mysqli_num_rows($result)>0 ){
			$stdentlist = array();
			while( $row = mysqli_fetch_assoc($result) ){
				$stdentlist[]= $row;
			}
			//var_dump($stdentlist);
			$responseArr["data"] = $stdentlist;
		}else{
			$responseArr["code"] = 207;
			$responseArr["msg"] = "暂无记录";
		}
		die( json_encode($responseArr) );
		break;
	default:
		echo "请指定正确的参数";
		break;
}
?>