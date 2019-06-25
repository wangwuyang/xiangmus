



//头部导航栏的滚动条部分
function Tou_fixed() {
    var DaoHang = document.getElementById("DaoHang");
    //var Tou = document.getElementById("Tou");
    //Tou.style.height = DaoHang.offsetHeight;//js设置高度值与导航高度值一样 以免fixed后塌缩
    var GunDongTiao = document.documentElement.scrollTop || document.body.scrollTop;//获取滚动条的值
    if (0 < GunDongTiao && GunDongTiao <300){
        //  console.log(GunDongTiao+"b");
        DaoHang.style.position ="fixed";
        DaoHang.style.top = "0";
        DaoHang.style.fontSize = "1.6rem";
    }
    else if(GunDongTiao === 0){
     //   console.log(GunDongTiao+"c");
        DaoHang.style.position ="relative";
        DaoHang.style.fontSize = "1.8rem";
    }
}


//头部导航栏的右边悬浮显示部分
function DaoHang_You() {
    var DaoHang_You = document.getElementById("DaoHang_You");
    var Daohang_You_ps = DaoHang_You.getElementsByTagName("p");

    var DaoHang_fixed = document.getElementById("DaoHang_fixed");
    var DaoHang_fixed_ps = DaoHang_fixed.getElementsByTagName("p");

    for(var i = 0;i<Daohang_You_ps.length;i++){
        Daohang_You_ps[i].ShuXing = i;
        Daohang_You_ps[i].onmouseenter = function () {
            for(var n = 0; n<DaoHang_fixed_ps.length;n++){
                DaoHang_fixed_ps[n].style.display = "none";
                DaoHang_fixed_ps[this.ShuXing].style.display = "block";
            }
        };
        Daohang_You_ps[i].onmouseleave = function () {
            for(var n = 0; n<DaoHang_fixed_ps.length;n++){
                DaoHang_fixed_ps[n].style.display = "none";
            }
        }
    }
}
DaoHang_You();

//淡入淡出部分
/*function DanRuDanChu() {
    var ZT_NR1 = document.getElementById("ZT_NR1");
    var ZT_NR1_div = ZT_NR1.getElementsByTagName("div");

    //设置淡入淡出公式
    function JiSuan1() {
        for(var i = 0;i<ZT_NR1_div.length;i++){
            ZT_NR1_div[i].ShuXing1 = i;

        }
        var a = 1;
        var b = 0;
        var c = null;
        var DRDC_DongHua1 = setInterval(function () {
            if(a < 0){
                clearInterval(DRDC_DongHua1);
            }
            else{
                c = (b-a)/20;
                a = a + c;
                ZT_NR1_div[0].style.opacity = c;
            }
        },20)
    }

}*/

//轮流出现部分
function LunLiu() {
    var ZT_NR2 = document.getElementById("ZT_NR2");
    var ZT_NR2_div = ZT_NR2.getElementsByTagName("div");
    var ZT_NR2_p = ZT_NR2.getElementsByTagName("p");
    //动画函数
    function  YunDong(CanShu1) {
        var Gao = CanShu1.offsetHeight;
        //alert(ZT_NR2_div_Hight);
        var QiDian = Gao;
        var ZhongDian = 0;
        var He = null;
        var YunDong_DongHua1 = setInterval(function () {
            if(QiDian <= ZhongDian){
                clearInterval(YunDong_DongHua1);
            }
            else{
                He = (ZhongDian - QiDian)/10;
                QiDian += He;
                //  console.log(CanShu1.style.bottom);
                // console.log(b);
                CanShu1.style.top = QiDian + "px";
                // console.log(CanShu1.style.bottom);
            }
        },20)
    }

    //应该有更方便的写法
    var YunDong_Timeout1 = setTimeout(function () {
        YunDong(ZT_NR2_p[0]);
        clearTimeout(YunDong_Timeout1);
    },400);
    var YunDong_Timeout2 = setTimeout(function () {
        YunDong(ZT_NR2_p[1]);
        clearTimeout(YunDong_Timeout2);
    },300);
    var YunDong_Timeout3 = setTimeout(function () {
        YunDong(ZT_NR2_p[2]);
        clearTimeout(YunDong_Timeout3);
    },200);
    var YunDong_Timeout4 = setTimeout(function () {
        YunDong(ZT_NR2_p[3]);
        clearTimeout(YunDong_Timeout4);
    },100);
    var YunDong_Timeout5 = setTimeout(function () {
        YunDong(ZT_NR2_p[4]);
        clearTimeout(YunDong_Timeout5);
    },1);

}

//进度条部分
function JinDuTiao() {
    var ShengYu = document.getElementById("ShengYu"),
        ShengYuTiao = document.getElementById("ShengYuTiao"),
        JinXing = document.getElementById("JinXing"),
        JinXingTiao = document.getElementById("JinXingTiao");

  //  ShuZhiJiSuan(b,1000);
   // ShuZhiJiSuan(c,1000);
 //   ShuZhiJiSuan(d,1000);
    function ShuZhiJiSuan(CanShu1,CanShu2,BianHuaJianGe) {
        var JinDuZhi = parseInt(CanShu1.innerHTML),
            JinDuTiao = parseInt(CanShu2.style.left);
        var JinDuZhi2 = parseInt(CanShu1.innerHTML),
            JinDuTiao2 = parseInt(CanShu2.style.left);
        var JinDuTiao_DongHua1 = setInterval(function () {
            //如果是从100开始减的
           // if(JinDuZhi >= 0){
                if(JinDuZhi <= 0 || JinDuTiao >=100){
                    clearInterval(JinDuTiao_DongHua1);
                }
                else{
                    JinDuZhi--;
                    JinDuTiao++;
                    CanShu1.innerHTML = JinDuZhi;
                    CanShu2.style.left = JinDuTiao+"%";
                }
        },BianHuaJianGe);


        var JinDuTiao_DongHua2 = setInterval(function () {
            //如果是从0开始加的
          //  if(JinDuZhi <= 0){
                if(JinDuZhi2 >= 100 || JinDuTiao2 >=100){
                    clearInterval(JinDuTiao_DongHua2);
                }
                else{
                    JinDuZhi2++;
                    JinDuTiao2++;
                    CanShu1.innerHTML = JinDuZhi2;
                    CanShu2.style.left = JinDuTiao2+"%";
                }
        },BianHuaJianGe)
    }
    ShuZhiJiSuan(ShengYu,ShengYuTiao,1000);
    ShuZhiJiSuan(JinXing,JinXingTiao,1000);
}

LunLiu();
JinDuTiao();
//DanRuDanChu();
gongxiangonscroll(Tou_fixed);
gongxiangonload(Tou_fixed);//页面载入后即使不进行任何操作也可有效






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

