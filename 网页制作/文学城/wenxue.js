// JavaScript Document
var curIndex=0;
var timeInterval=2500;
var arr =new Array();
arr[0]="tupian/ddd.jpg"
arr[1]="tupian/aaa.jpg"
arr[2]="tupian/bbb.jpg"
arr[3]="tupian/ccc.jpg"
arr[4]="tupian/tushu9.jpg"
setInterval(changeImg, timeInterval);
function changeImg()
 {
	 var zwh=document.getElementById("zwh");
	 if(curIndex==arr.length-1)
	 {curIndex=0;}
	 {curIndex+=1;}
	 zwh.src=arr[curIndex];
	 }
function f1(){
	alert("您已将此页面设为主页！")}
function change(myid,mode){
	document.getElementById(myid).style.display=mode;
	if(mode == 'block'){//显示下拉菜单
		//设置下拉菜单所在div的边框
		document.getElementById(myid).style.border="1px solid #eee";
		document.getElementById(myid).style.borderTop="none";
	}
	else{
		//当不显示下拉列表时，鼠标划过的li的边框及背景颜色
		document.getElementById(myid).parentNode.style.backgroundColor="";
		document.getElementById(myid).parentNode.style.border="";
	}		
}

	

	

