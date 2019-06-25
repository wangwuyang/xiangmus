
/*头部的 点击切换选项卡 函数*/
function xuanXiangKa() {
    var a = document.getElementById("souSuo1");
    var b = a.getElementsByTagName("li");  //找出ul下的li
    var c= document.getElementById("souSuo2-1");
    var d = document.getElementById("souSuo2-2");
    var e = document.getElementById("souSuo2");
    var f = e.getElementsByTagName("ul");

    for (var i = 0;i<b.length; i++) {
        b[i].index = i;
        b[i].onclick=function(){                 //注册一个点击事件，当点击的时候所有标签都恢复最初状态
            for(var n = 0;n<b.length;n++){
                if(this.className == "souSuoLiang"){  //当处于当前li时 点击无效
                    return;
                }
                b[n].className = "";
                b[n].style.backgroundColor = "";  //此处是为了解决和hover样式会覆盖souSuoLiang的问题 但原理不明
                f[n].style.display = "none";                //搜索下面的一堆li
            }
            this.className ="souSuoLiang";                 //对点击事件添加相应的属性
            this.style.backgroundColor = "red";         ////此处是为了解决和hover样式会覆盖souSuoLiang的问题 但原理不明
            f[this.index].style.display = "inline-block";   //“搜索”部分 之下的一堆文字
            if (this.index == 1){
              //  f[1].style.display = "inline-block";
                b[1].style.backgroundColor = "green";
                c.style.backgroundColor = "green";
                d.style.backgroundColor = "green";
            }
            else {
                b[1].style.backgroundColor = "";
                c.style.backgroundColor = "";
                d.style.backgroundColor = "";
            }
            }
        }
    }
xuanXiangKa();

/*手机淘宝二维码部分 点击X关闭*/
function guanbi(){
    var a = document.getElementById("shoujitaobao-guanbi");
    var b = document.getElementById("shoujitaobao");
    a.onclick = function(){
        b.style.display="none";
    }
}
guanbi();

/*zhuti1中第一个轮播图*/
function lunBoTu1(){
    var lunBoTu1ID       = document.getElementById("lunBoTu1");
    var huaBu          = document.getElementById("lunBoTu1-huaBu");
    var zuo            = document.getElementById("lunBoTu1-zuo");
    var you            = document.getElementById("lunBoTu1-you");
    var yuanDian       = document.getElementById("lunBoTu1-yuanDianDiv").getElementsByTagName("span");
    var index1 = 1;
    var dongHuaZT = false;
    var timer = 0;
    function zuoYou(juli){
        dongHuaZT = true;
        var a = parseInt(huaBu.style.left);
        var b = parseInt(huaBu.style.left) + juli;
        var time = 240;
        var jianGe = 10;
        var meiCiYunDong = Math.ceil(juli/(time/jianGe));
       function go(){
            if((meiCiYunDong < 0 && parseInt(huaBu.style.left)> b) || (meiCiYunDong > 0 && parseInt(huaBu.style.left) <b )){
                huaBu.style.left = parseInt(huaBu.style.left) + meiCiYunDong + "px";
                setTimeout(go,jianGe);
            }
            else{
                dongHuaZT = false;
                huaBu.style.left = b+"px";
                if (b < -2096){
                    huaBu.style.left = 0 + "px";
                }
                if (b > 0){
                    huaBu.style.left = -2096 + "px";
                }
            }
        }
        go();
    }
    zuo.onclick = function(){
        if(!dongHuaZT) {
            if (index1 == 1) {
                index1 = 5;
            }
            else {
                index1 -= 1;
            }
            yd();
            zuoYou(524);
        }

    };
    you.onclick = function(){
        if(!dongHuaZT){
            if (index1 == 5){
                index1 = 1;
            }
            else{
                index1 += 1;
            }
            yd();
            zuoYou(-524);
            }
    };
    for (var i = 0;i<yuanDian.length;i++){
        yuanDian[i].onclick = function(){
            if (!dongHuaZT){
                if (this.className == "liang"){
                    return;
                }
                var a = parseInt(this.getAttribute("index"));//获取当前图片的index值
                var b = -524*(a - index1);//求用当前图片的index减去声明的index1的值
                index1 = a;//将当前图片的index值赋给声明的index1
                yd();
                zuoYou(b);
            }
        }
    }
    function yd(){
        for(var i = 0;i<yuanDian.length;i++){
            if(yuanDian[i].className == "liang"){
                yuanDian[i].className = "";
                break;//为什么加不加都能实现效果？
                /*上海-小秦 因为你的 yuanDian 里只有一个 有 liang 的样式, 所以你加不加 结果都一样.
                在不加的情况下,会继续往后找,在加的情况下, 在找到 liang之后就不再往后找了.*/
            }
        }
        yuanDian[index1 - 1].className = "liang";
    }
    //自动播放部分
    function kaiShi(){
        tingZhi();//如此自动播放便不会偶尔失效了 但是原理是什么呢？？
        timer = setInterval(function(){
            you.onclick();
        },3000);
    }
    function tingZhi(){
        clearInterval(timer);
    }
    lunBoTu1ID.onmouseout = kaiShi;
    lunBoTu1ID.onmouseover = tingZhi;
    kaiShi();
}

/*zhuti1中第二个轮播图*/
function lunBoTu2(){
    var lunBoTu2ID = document.getElementById("lunBoTu2");
    var huaBu      = document.getElementById("lunBoTu2HuaBu");
    var div        = huaBu.getElementsByTagName("div");
    var zuo        = document.getElementById("lunBoTu2Zuo");
    var you        = document.getElementById("lunBoTu2You");
    var yuanDian   = document.getElementById("lunBoTu2YuanDianDiv").getElementsByTagName("span");
    var a1 = 1;
    var ZT = false;
    function zuoYou(shuZhi){
        ZT = true;
        var a  = parseInt(huaBu.style.left);
      //  alert(a);
        var b  = parseInt(huaBu.style.left) + shuZhi;
        var dist = 0;
        huaBu.shuxing2 = setInterval(function(){
            if(a == b){
                ZT = false;
                if(huaBu.shuxing2){
                    clearInterval(huaBu.shuxing2);// 关闭定时器 否则 唔。。 初步推测 会爽死吧？  前两天某个页面写过定时器 似乎没关，不知道那个页面活的咋样
                }
                return true;
            }
            if(a > b ){
                dist = Math.ceil((a - b)/15);
                a = a - dist;
            }
            if(a < b){
                dist = Math.ceil((b - a)/15); //每次移动大减小再除以10的距离 且每次最小也会移动1
                a = a + dist;
            }
            huaBu.style.left = a +"px";
        },10);
    }
    you.onclick = function(){
       if(!ZT) {
           if (a1 == 6) {
               zuoYou(2650);//传入正数2650已使其向左以zuoYou()函数的方式移动到第一张的位置 即huaBu.style.left = 0 + "px";
               a1 = 1;
           }
           else {
               a1++;
               zuoYou(-530);
           }
           yD();
       }
    };
    zuo.onclick = function(){
        if(!ZT) {
            if (a1 == 1) {
                // huaBu.style.left = -2650+"px";
                zuoYou(-2650);
                a1 = 6;
            }
            else {
                a1--;
                zuoYou(530);
            }
            yD();
        }
    };
    function yD(){
        for(var i =0;i<yuanDian.length;i++){
            if(yuanDian[i].className =="lunBoTu2Liang"){
                yuanDian[i].className = "";
                break;
            }
        }
        yuanDian[a1-1].className = "lunBoTu2Liang";
    }
    for (var i = 0;i<yuanDian.length;i++){
            yuanDian[i].onclick = function(){
                if(this.className == "lunBoTu2Liang"){//如果处于当前yuanDian，则点击当前yuanDian无效
                    return;
                }
                if(!ZT){
                    var a = parseInt(this.getAttribute("index"));
                    var b = -530*(a - a1);
                    a1 = a;
                    zuoYou(b);
                    yD();
                }
            }
        }
    function lunBoTu2KaiShi(){
        timer2 = setInterval(function(){
           you.onclick();
        },3000)
    }
    function  lunBoTu2ZanTing(){
        clearInterval(timer2);
    }
    lunBoTu2ID.onmouseout = lunBoTu2KaiShi;
    lunBoTu2ID.onmouseover = lunBoTu2ZanTing;
    lunBoTu2KaiShi();
}

/*zhutiYou部分的内容2*/
function neiRong2(){
    var NR2 = document.getElementById("zhuTiYouNR2");
    var li = NR2.getElementsByTagName("li");
    var div = NR2.getElementsByTagName("div");
        for(var i = 0;i< li.length;i++){
            li[i].index = i;
            li[i].onmouseover = function(){
                for(var n = 0;n<li.length;n++){
                    li[n].style.fontWeight = "100";
                    li[n].style.borderBottom = "solid 2px white";
                    div[n].style.display = "none";
                }
                this.style.fontWeight = "700";
                this.style.borderBottom = "solid 2px red";
                div[this.index].style.display = "block";
            }
        }
}
neiRong2();

/*zhutiYou部分的内容3*/
function  NR3() {
    var ul1 = document.getElementsByClassName("NR3ul1")[0];
    var ul1li = ul1.getElementsByTagName("li");
    var ul1lia =ul1.getElementsByTagName("a");
    var div1 = document.getElementById("NR3DIV1");
    var NR3ErJi = div1.getElementsByClassName("NR3ErJi");
    var NR3GB = document.getElementById("NR3GB");

    //当鼠标移动到一级栏（充话费、游戏、等等）时的变化
    for (var i = 0; i < 4; i++) {
        ul1li[i].index = i;
        ul1li[i].onmouseover = function () {  //当鼠标移动到一级导航栏时
            for (var i1 = 0; i1 < 4; i1++) {
                ul1li[i1].style.borderColor = "";            //所有ul1li的边框恢复原样
                ul1li[i1].style.borderBottomColor = "red";  //所有ul1li的底部边框变为红色
                ul1lia[i1].style.color = "";    //所有a的颜色恢复原样
                NR3ErJi[i1].style.display = "none"; //NR3div1 》 所有二级栏的样式变为不显示
            }
            ul1li[this.index].style.borderColor = "red"; //此处ul1li的便边框颜色变为红色
            ul1li[this.index].style.borderBottomColor = "white";    //此处ul1li的底部边框颜色变为白色

            ul1lia[this.index].style.color = "red";             //此处ul1lia的颜色变为红色
            div1.style.display = "block";                       //此处NR3div1的样式变为显示
            div1.style.borderColor = "red";                     //此处NR3Div1的边框颜色变为红色
            NR3ErJi[this.index].style.display = "block";       //NR3div1 》 此处二级栏变为显示
        };
    }

    //当点击x的时候关闭二级栏（详细部分）
    NR3GB.onclick = function(){
        div1.style.display = "none";
        for (var i = 0; i < 4; i++) {
            ul1li[i].style.borderColor = "";
            ul1lia[i].style.color = "";    //所有a的颜色恢复原样
        }
    };

//  轮播图部分
    var huaBu      = document.getElementById("NR3SJ1");
    var lieBiao   = document.getElementById("NR3EJul").getElementsByTagName("li");
    var lieBiaoA  = document.getElementById("NR3EJul").getElementsByTagName("a");
    //第2个轮播 理论上应该可以弄到一个for循环里才对
    var huaBu2     = document.getElementById("NR3SJ2");
    var lieBiao2   = document.getElementById("NR3EJ2ul").getElementsByTagName("li");
    var lieBiao2A  = document.getElementById("NR3EJ2ul").getElementsByTagName("a");
    //第3个轮播 理论上应该可以弄到一个for循环里才对
    var huaBu3      = document.getElementById("NR3SJ3");
    var lieBiao3   = document.getElementById("NR3EJ3ul").getElementsByTagName("li");
    var lieBiao3A  = document.getElementById("NR3EJ3ul").getElementsByTagName("a");
    //第4个轮播 理论上应该可以弄到一个for循环里才对
    var huaBu4      = document.getElementById("NR3SJ4");
    var lieBiao4   = document.getElementById("NR3EJ4ul").getElementsByTagName("li");
    var lieBiao4A  = document.getElementById("NR3EJ4ul").getElementsByTagName("a");
    var a1 = 1;
    var a2 = 1;
    var a3 = 1;
    var a4 = 1;
    var ZT = false;
    function zuoYouYiDong(shuZhi,LunBoHuaBuID,juli,shijianjiange){
        ZT = true;
        var a  = parseInt(LunBoHuaBuID.style.left);
        var b  = parseInt(LunBoHuaBuID.style.left) + shuZhi;
        var dist = 0;
        LunBoHuaBuID.tingzhi = setInterval(function(){
            if(a == b){
                ZT = false;
                if(LunBoHuaBuID.tingzhi){
                    clearInterval(LunBoHuaBuID.tingzhi);
                }
                return true;
            }
            if(a > b ){
                dist = Math.ceil((a - b)/juli);
                a = a - dist;
            }
            if(a < b){
                dist = Math.ceil((b - a)/juli); //每次移动大减小再除以10的距离 且每次最小也会移动1
                a = a + dist;
            }
            LunBoHuaBuID.style.left = a +"px";
        },shijianjiange);
    }
    for (var n = 0;n<lieBiao.length;n++){
        lieBiao[n].onmouseover = function(){
            if(!ZT){
                var a = parseInt(this.getAttribute("index"));
                var b = -290*(a - a1);
                a1 = a;
                zuoYouYiDong(b,huaBu,6,10);
                yanSe(lieBiaoA,a1);
            }
        }
    }
    //移动时变换颜色，css的hover亦可实现
    function yanSe(biaoqianA,a1234){
        for(var a = 0;a<biaoqianA.length;a++){
            biaoqianA[a].style.color = "";
        }
        biaoqianA[a1234-1].style.color = "red";
    }
    //第2个轮播 理论上应该可以弄到一个for循环里才对
    for (var n2 = 0;n2<lieBiao2.length;n2++){
        lieBiao2[n2].onmouseover = function(){
            if(!ZT){
                var a = parseInt(this.getAttribute("index"));
                var b = -290*(a - a2);
                a2 = a;
                zuoYouYiDong(b,huaBu2,6,10);
                yanSe(lieBiao2A,a2);
            }
        }
    }
//第3个轮播 理论上应该可以弄到一个for循环里才对
    for (var n3 = 0;n3<lieBiao3.length;n3++){
        lieBiao3[n3].onmouseover = function(){
            if(!ZT){
                var a = parseInt(this.getAttribute("index"));
                var b = -290*(a - a3);
                a3 = a;
                zuoYouYiDong(b,huaBu3,6,10);
                yanSe(lieBiao3A,a3);
            }
        }
    }
//第4个轮播 理论上应该可以弄到一个for循环里才对
    for (var n4 = 0;n4<lieBiao4.length;n4++){
        lieBiao4[n4].onmouseover = function(){
            if(!ZT){
                var a = parseInt(this.getAttribute("index"));
                var b = -290*(a - a4);
                a4 = a;
                zuoYouYiDong(b,huaBu4,6,10);
                yanSe(lieBiao4A,a4);
            }
        }
    }




    var NR3I12 = document.getElementsByClassName("NR3SJI12");

    var NR3SanJi = document.getElementsByClassName("NR3SanJi");
    //var NR3I12Ula = NR3SanJi[0].getElementsByTagName("ul"); //数组应该可以包含数组 那么？
    var NR3I12Ul = div1.getElementsByClassName("NR3SJul");

  //  for (var m = 0;m<NR3SanJi.length;m++){
        for(var ma = 0;ma<NR3I12.length;ma++){
            NR3I12[ma].shuzhi = ma;
            NR3I12[ma].onclick = function(){
                for(var m1 = 0;m1<NR3I12Ul.length;m1++){
                    NR3I12Ul[m1].style.display = "none";
                }
                NR3I12Ul[this.shuzhi].style.display = "block";
            }
        }
 //   }


  /*  //当移动到二级栏上半部分时
    var NR3EJ1 = document.getElementById("NR3EJ1");
    //上半部分的變化所需要的聲明
    var NR3EJ1ul = NR3EJ1.getElementsByTagName("ul")[0];
    var NR3EJ1li = NR3EJ1ul.getElementsByTagName("li");
    var NR3EJ1a = NR3EJ1ul.getElementsByTagName("a");
    //下半部分的變化所需要的聲明
    var NR3SJ1 =document.getElementById("NR3SJ1");
    var a1 = 1;
    function zuoYou(canShu){
        var a = parseInt(NR3SJ1.style.left);
        var b = parseInt(NR3SJ1.style.left+ canShu);
        var c = 0;
        //  alert("參數:"+parseInt(NR3HuaBu.style.left));

        NR3SJ1.shuxing = setInterval(function(){
            if(a == b){
                if(NR3SJ1.shuxing){
                    clearInterval(NR3SJ1.shuxing);
                }
                return true;
            }
            if(a > b ){
                c = Math.ceil((a - b)/15);
                a = a - c;
            }
            if(a < b){
                c = Math.ceil((b - a)/15);
                a = a + c;
            }
            NR3SJ1.style.left = a +"px";
        },10);
    }
    you.onclick = function(){
        if (a1 == 5) {
            zuoYou(1500);//传入正数2650已使其向左以zuoYou()函数的方式移动到第一张的位置 即huaBu.style.left = 0 + "px";
            a1 = 1;
        }
        else {
            a1++;
            zuoYou(-292);
        }
    };*/
    /*for(var j = 0;j<NR3EJ1li.length; j++){
        NR3EJ1li[j].index = j;
        NR3EJ1li[j].onmouseover = function(){
            for(var j1 = 0; j1<NR3EJ1li.length; j1++){
                NR3EJ1a[j1].style.color = "";
            }
            //上半部分的變化
            NR3EJ1a[this.index].style.color = "red";
            //下半部分的變化
                var a = parseInt(this.getAttribute("index"));
                var b = -200*(a - a1);
                a1= a;
                zuoYou(b);
        }
    }*/

}
NR3();

/*zhutiYou部分的内容5*/
function NR5(){
    var LB = document.getElementById("NR5LB");
    var HuaBu = document.getElementById("NR5LBHuaBu");
    var a1 = 1;
    function ShangXia(shuZhi){
        var a = parseInt(HuaBu.style.top);      //原本的高度
        var b = parseInt(HuaBu.style.top)+shuZhi;      //加上输入值后的高度
        var jieguo = 0;   //储存运算后结果的变量
        HuaBu.shuxing3 = setInterval(function(){     //HuaBu的shuxing属性用来存储动画
            if (a == b){
                if(HuaBu.shuxing3){                  //？？如果画布的属性为真 即正在运行？？
                    clearInterval(HuaBu.shuxing3);   //停止运行
                }
                return true;                         //返回true
            }
            if(a > b){                              //如果shuzhi是负数
                jieguo = Math.ceil((a -b)/15);          //运算结果：（a-b）/15再四舍五入    (a-b = +shuzhi)
                a = a - jieguo;                      //a-=结果             //HuaBu向下移动
            }
            if(a < b){                           //如果shuzhi是正数
                jieguo = Math.ceil((b - a)/15);         //运算结果：（b-a）/15再四舍五入    (a-b = -shuzhi)
                a = a + jieguo;                     //a+=结果             //HuaBu向上移动
            }
            HuaBu.style.top = a+"px";       //HuaBu的top值 = apx
        },10);              //10毫秒运行一次
    }
    function yidong(){
        if (a1 == 3) {
            ShangXia(120);//传入正数180已使其向上以zuoYou()函数的方式移动到第一张的位置 即huaBu.style.left = 0 + "px";
            a1 = 1;
        }
        else {
            a1++;
            ShangXia(-60);    //传入负数-60已使其向下以zuoYou()函数的方式移动60px;
        }
    }
    function NR5LBKaiShi(){
        timer3 = setInterval(function(){
            yidong();
        },3000);
    }
    function  NR5LBZanTing(){
        clearInterval(timer3);
    }
    LB.onmouseout = NR5LBKaiShi;
    LB.onmouseover = NR5LBZanTing;
    NR5LBKaiShi();
}
NR5();
/*zhuti外上面的漂浮1内容以及zhuti外右边的的漂浮2内容*/
function  fixed1(){
    var gundongtiao = document.documentElement.scrollTop || document.body.scrollTop;//获取滚动条的值
    var ZTWID = document.getElementById("ZTWSFixed");   //zhutiwai上面的fixed
    //b——ZTWSFixed的相关设定
    if (gundongtiao >= 100) {
        ZTWID.style.display = "block";
    }
    if (gundongtiao <= 100) {
        ZTWID.style.display = "none";
    }


    var inputID = document.getElementById("ZTWSFinput1");
    //input获得焦点后
    inputID.onfocus = function() {                  //input的placeholder 属性可极其简单的实现此功能 但部分浏览器不兼容
        if (this.value == this.defaultValue) {  //如果value的值为初始内容
            this.value = "";                        //value的值变为“”
            this.style.color = "black";            //字的颜色为黑色
        }
       /* else{
            this.value = this.defaultValue;
            this.style.color = "rgb(135,135,135)";    //字的颜色为灰色
        }*/
    };
    //input失去焦点后
    inputID.onblur = function() {
        if (this.value == "") {                 //如果value为“”
            this.value = this.defaultValue;         //  value的值为初始内容//defaultValue 属性设置或返回文本框的初始内容。
            this.style.color = "rgb(135,135,135)";    //字的颜色为灰色
        }
     /*   else {
            this.value = "";
            this.style.color = "black";            //字的颜色为黑色
        }*/
    };
    //ZTWSfixed1的选项卡点击之后：
    var a = document.getElementById("ZTWSFD2D1D1");
    var b = a.getElementsByTagName("span");
    var c = document.getElementById("ZTWSFinput1");
    var d = ["结婚礼物点这里","亏本甩卖二手核弹","的"];
    //var e = document.getElementsByClassName("ZTWSFDiv2")[0];//颜色部分
    for(var i = 0;i< b.length;i++){
        b[i].shuxing = i;     //使b【i】的ideshuzhi属性等于i,方便匿名函数使用i
        b[i].onclick = function(){  //点击b【i】后....
            b.linshidezhi = b[0].innerHTML;     // 让三个b[i]轮流出现在第一位
            b[0].innerHTML = b[this.shuxing].innerHTML;
            b[this.shuxing].innerHTML = b.linshidezhi;

            c.setAttribute("value",d[this.shuxing]); //改变value的值//setAttribute不支持ie8及以往版本
            d.linshidezhi = d[0];                       //让三个value的值与b[i]一致 轮流交换
            d[0] = d[this.shuxing];
            d[this.shuxing] = d.linshidezhi;
            //改变 button搜索功能的链接  略
            //改变颜色 没琢磨出来
        }
    }
}
function  fixed2(){
    var gundongtiao = document.documentElement.scrollTop || document.body.scrollTop;//获取滚动条的值
    //主体外右边漂浮部分的相关设定
    var a = document.getElementById("ZTWYFixed");     //zhutiwai右面的fixed
    var ZTWYFLi = a.getElementsByTagName("li");//获取所有的li
    var Fu = document.getElementById("FU");
    var ZT = false;
    /*达到特定位置时：*/
    if(gundongtiao >=450){
        a.style.position = "fixed";
        a.style.top = "55px";
        a.style.right = "0";
        //  b.style.transition = ".3s";
    }
    if(gundongtiao <=450){
        a.style.position = "absolute";
        a.style.top = "300px";
        a.style.right = "-30px";
    }

     function YiDong(heng,juli){
         var a  = document.documentElement.scrollTop || document.body.scrollTop;//获取滚动条的值
         var b  = juli;
         var dist = 0;
         ZT = true;
         Fu.shuxing = setInterval(function(){
             if(a == b){
                 ZT = false;
                 if(Fu.shuxing = true){
                     clearInterval(Fu.shuxing);
                 }
                 return;
             }
             if(a > b){
                 dist = Math.ceil((a - b)/10);
                 a = a -dist;
             }
             if(a < b){
                 dist = Math.ceil((b - a)/10); //每次移动大减小再除以10的距离 且每次最小也会移动1
                 a = a + dist;
             }
             window.scrollTo(0,a);
         },10);
     }//逐渐移动函数
    for(var i = 0;i<ZTWYFLi.length;i++){
        ZTWYFLi[0].onclick = function(){
                    //clearInterval(Fu.shuxing); 如何使点击后立即执行而不是执行完上一条再执行点击的内容呢？
            YiDong(0,760);//点击后将需要移动的距离传入逐渐移动函数——YiDong
        };
        ZTWYFLi[1].onclick = function(){
            YiDong(0,1650);
        };
        ZTWYFLi[2].onclick = function(){
            YiDong(0,1960);
        };
        ZTWYFLi[3].onclick = function(){
            YiDong(0,2540);
        };
        ZTWYFLi[4].onclick = function(){
            YiDong(0,3120);
        };
        ZTWYFLi[5].onclick = function(){
            YiDong(0,4230);
        };
        ZTWYFLi[6].onclick = function(){
            YiDong(0,0);
        }
    }//点击后将需要移动的距离传入逐渐移动函数——YiDong
}
/*zhuti外上面的漂浮1内容*/

/*zhuti1左边的部分*/
function zhuTi1Zuo(){
    var ZT1ZUl1 = document.getElementById("ZT1ZUL1");
    var ZT1ZUL1Li = ZT1ZUl1.getElementsByTagName("li");
    var ZT1ZXX = document.getElementById("ZT1ZXX");
    var ZT1ZXXY = ZT1ZXX.getElementsByClassName("zhuTi1ZuoXiaoYe");
    for(var i = 0;i<ZT1ZUL1Li.length;i++){
        ZT1ZUL1Li[i].shuxing1 = i;
        ZT1ZUL1Li[i].onmouseover = function(){
            for(var n = 0;n<ZT1ZXXY.length;n++){
                ZT1ZXXY[n].style.display = "none";
            }
            ZT1ZXXY[this.shuxing1].style.display = "block";
        }
    }
}
zhuTi1Zuo();





//共享onscroll函数
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
gongxiangonscroll(fixed1);
gongxiangonscroll(fixed2);


//共享onload函数
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
gongxiangonload(lunBoTu1);
gongxiangonload(lunBoTu2);
gongxiangonload(fixed2); //使fixed2载入时执行  进而在页面载入后即使不进行任何操作也可有效