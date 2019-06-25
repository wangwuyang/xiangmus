/**
 * Created by jing on 2017/4/7 0007.
 */


//微信号随机显示函数
//为了方便他们修改 移到了html文件里
//正所谓是 性能最佳的不一定是业务最需要的

//懒加载   //找个时间弄成function(a,b,c){}的模式 一能方便以后用 二能给别人参考  三能方便面试装逼
function LanJiaZai(){
    /*data_LJZLuJing:自定义属性之——图片要变成的路径*/
    var a = document.getElementsByClassName("LanJiaZai");//获取所有需要懒加载的img的class//  缺点：空class 纯粹为了获取节点
    var a_length = a.length;//获取需要懒加载的img的长度
    var b = document.documentElement.scrollTop||document.body.scrollTop;//      监听滚动条
    var c = [];//创建个空数组
    var z =0;//存储加载到的位置 避免每次都从第一张开始遍历，减少循环次数，可以提升性能
    var KeJianheight = document.documentElement.clientHeight;//可见区域的大小
    for(var i =z; i<a_length; i++){
        c[i] = a[i].offsetTop;//把每个图片距离顶部的距离存储到c[]里
        a[i].data_LJZLuJing = a[i].getAttribute("data_LJZLuJing");//把每个图片的data_LJZLuJing自定义属性的值 存储到a[i]的同名属性里
        if(b + KeJianheight > c[i] -200 ){//如果滚动条大小+可视距离 大于 图片距顶部的距离-200 //麻蛋 这是老夫写的么 啥原理来着？ 算了 能忘记的事肯定不是重要的事情o_o!
            a[i].setAttribute("src",a[i].data_LJZLuJing);//如果在if的允许范围内 则把图片替换成自定义属性里的路径  也就是显示正常图片   //这个自定义属性总感觉不太好 因为webscrom总给我标黄  图片少的话用个数组也可以
        }
        z = i+ 1;//上面说的那样 存储加载到的位置
    }
}
LanJiaZai();//定义完了 得调用下




//监听滚动条——允许同时有多个监听事件 此页面只有一个 所以没啥乱用
//但是！取消了懒加载就没用了 所以 我的理解有问题 不知道是哪儿出了问题 所以就先加上吧

function gongxiangonscroll(func){
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
}
  gongxiangonscroll(LanJiaZai);

//原声js版点击关注弹出窗口  尚未完美实现layer的效果
/*
function Tou_GuanZhu(){
    var GuanZhu = document.getElementById("Tou_1_GuanZhu");//关注按钮
    var GuanBi =  document.getElementById("Tou_Fixed_GuanBi");//关闭按钮
    var fixed = document.getElementById("Tou_Fixed");   //悬浮部分的内容
    var ZheGai = document.getElementById("TouMing_ZheGai");//罩子
    var ChaKanPingLun = document.getElementById("ChaKanPingLun");//查看所有评论
    var fixed2 = document.getElementById("Tou_fixed2");//关闭后底部弹出的那句话部分
    var fixed_NR = document.getElementById("Tou_Fixed_NR");
    var fixed_NR_width = fixed_NR.offsetWidth;  //获取宽度 然而display:none 获取的是0  如果display:none，获取到的是0  那内容是不是也没有加载呢？只加载了DOM？
    var fixed1_DongHua1 =null;      //伪全局变量 方便关闭动画

    GuanZhu.onclick = XianShi;
    ChaKanPingLun.onclick = XianShi;
    GuanBi.onclick = YinCang;

    function XianShi(){     //显示函数
        fixed.style.display = "block";
        ZheGai.style.display = "block";
       YunSuan(500,0);          //如何使其自适应呢？
    }

    function YunSuan(A,B){
        var MuBiaoJuLi =parseInt(A);
        var ShuZhi2 = parseInt(B);
        var ShuZhi3 =null;
        fixed1_DongHua1 = setInterval(function(){
            if(MuBiaoJuLi == ShuZhi2){
                clearInterval(fixed1_DongHua1);
                return true;
            }
            if(MuBiaoJuLi > ShuZhi2){
            ShuZhi3 = Math.ceil((MuBiaoJuLi - ShuZhi2) / 10);
            ShuZhi2 = ShuZhi2 + ShuZhi3;
            }
            if(MuBiaoJuLi < ShuZhi2) {
                ShuZhi3 = Math.floor((MuBiaoJuLi - ShuZhi2) / 10);
                ShuZhi2 = ShuZhi2 + ShuZhi3;
            }
            fixed_NR.style.width = ShuZhi2+"px";
        },10);
    }

    function YinCang(){     //隐藏函数
        clearInterval(fixed1_DongHua1);
        fixed.style.display = "none";
        ZheGai.style.display = "none";
        setTimeout(function(){
            //Tou_fixed2.style.bottom = "100px";
            fixed2_YiDong();
        },200)
    }
    function fixed2_YiDong(){      //点击隐藏之后发生的事件————移动函数
        var XianZaiJuLi =parseInt(fixed2.style.bottom);//tou_fixed2的现在距底部的距离
        var MuBiaoJuLi  = 200;//Tou_fixed2要达到的距离
        var JieGuo = null;
        var fixed2_YiDong_time1 = setInterval(function(){
            JieGuo = Math.ceil((MuBiaoJuLi - XianZaiJuLi)/8);
            XianZaiJuLi = XianZaiJuLi + JieGuo;
            fixed2.style.bottom = XianZaiJuLi + "px";
            if(MuBiaoJuLi == XianZaiJuLi){
                clearInterval(fixed2_YiDong_time1);
            }
        },1);

        setTimeout(function(){  //2000毫秒后隐藏
            fixed2.style.bottom = "-50px";
        },1500)
    }
}*/
//Tou_GuanZhu();
