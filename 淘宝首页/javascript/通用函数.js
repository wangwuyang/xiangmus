/**
 * Created by ASUS-PC on 2016/5/11.
 */


//目标移动函数
/*
function mubiaoyidonghanshu(ID,mubiaox,mubiaoy,jiangeshijian){           //函数通用化   输入ID 目标x 目标y 间隔时间 移动目标到目的地
    if(!document.getElementById){return false;} //平稳退化
    if(!document.getElementById(ID)){return false;}//检查存不存在这个ID 不存在则退出
    var a = document.getElementById(ID);
    var x = parseInt(a.style.left);
    var y = parseInt(a.style.top);
    var dist = 0;
    if (a.shuxing){            //如果存在a.shuxing，则清除队列中的其它命令
        clearTimeout(a.shuxing);
    }
    if (x == mubiaox && y == mubiaoy){return true;}     //如果到达目标地点则返回true  结束循环
    if(x<mubiaox){
        dist = Math.ceil((mubiaox - x)/10);                   //每次移动大减小再除以10的距离 且每次最小也会移动1
        x = x + dist;
    }
    if(x>mubiaox){
        dist = Math.ceil((x - mubiaox)/10);
        x = x - dist;
    }
    if(y <mubiaoy){
        dist = Math.ceil((mubiaoy - y)/10);
        y = y + dist;
    }
    if(y>mubiaoy){
        dist = Math.ceil((y - mubiaoy)/10);
        y = y - dist;
    }
    a.style.left = x+"px";
    a.style.top = y+"px";
    var taichang = "mubiaoyidonghanshu('"+ID+"',"+mubiaox+","+mubiaoy+","+jiangeshijian+")";        //双加号是什么意思？？
    a.shuxing = setTimeout(taichang,jiangeshijian);    //
}
*/

//addLoadEvent(gongxiangonload)函数——共享onload
/*
function gongxiangonload(func){
    var laohanshu=window.onload;
    if(typeof window.onload !='function'){
        window.onload = func;
    }
    else{
        window.onload = function(){
            laohanshu();
            func();
        }
    }
}
*/

//共享onscroll函数
/* function gongxiangonscroll(func){
    var laohanshu=window.onscroll;
    if(typeof window.onscroll !='function'){
        window.onscroll = func;
    }
    else{
        window.onscroll = function(){
            laohanshu();
            func();
        }
    }
} */

//创建一个可以在某元素后面添加元素的函数insertAfter
/*
function insertAfter(xinyuansu,mubiaoyuansu){      //两个参数 一个前面的是新元素，后面的是目标元素
    var a = mubiaoyuansu.parentNode;                    //创建a存储目标元素的父元素
    if(a.lastChild == mubiaoyuansu){
        a.appendChild(xinyuansu);
    }
    else{
        a.insertBefore(xinyuansu,mubiaoyuansu.nextSibling);
    }
}
*/

//获取元素相对于浏览器的的纵横坐标
/*
 获取元素的纵坐标
 function huoQuHeight(e){
    var offset=e.offsetTop;
    if(e.offsetParent!=null){
        offset+=getTop(e.offsetParent);
    }
    return offset;
 }
 //获取元素的横坐标
 function huoQuLeft(e){
    var offset=e.offsetLeft;
    if(e.offsetParent!=null) {
        offset+=getLeft(e.offsetParent);
    }
     return offset;
 }*/