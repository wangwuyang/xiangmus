var Ajax1 = 0;
function AjaxHanShu(LuJing) {
    var xmlhttp = null;
    xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState===4 && xmlhttp.status===200)
        {
              Ajax1 = xmlhttp.responseText;
        }
    };
    xmlhttp.open("GET",LuJing,true);
    xmlhttp.send();
}

var phpLuJing1 = "http://wangwuyang2016.com/wenjian/xiangmu/vuejs1/wenjian/php.php";
AjaxHanShu(phpLuJing1);
var Ajax1_ChuLi =eval('(' + Ajax1 + ')');
console.log(Ajax1);

var vue1 = new Vue({
    el:"#vue1",
    data:{
        // 通过php获取
        /**/
        LieBiao:[
            {
                id:1,
                MingCheng:"iPhone 7",
                JiaGe:6188,
                ShuLiang:1
            },
            {
                id:2,
                MingCheng:"华为",
                JiaGe:4099,
                ShuLiang:1
            },
            {
                id:3,
                MingCheng:"小米",
                JiaGe:2199,
                ShuLiang:1
            }
        ]
    },
    computed:{
        ZongJia:function () {
            var ZongJia1 = 0;
            var i =0,  n = this.LieBiao.length;//for循环的优化 能提升0.000001%的性能 不确定能否避免变量i的重复声明，但可以确定能够避免重复计算长度
            for(i;i<n;i++){
                    var a = this.LieBiao[i].JiaGe;
                    var b = this.LieBiao[i].ShuLiang;
                    ZongJia1 += a * b;
            }
            return ZongJia1.toString().replace(/\B(?=(\d{3})+$)/g,',');
        }
    },
    methods:{
        ShiYan1:function () {
            var ZongJia2 = 0;
            var XuanZes = document.getElementsByClassName("XuanZe");
            var DangQianJiaGeBF = document.getElementById("DangQianJiaGeBF");
            for (var i1 = 0; i1 < XuanZes.length; i1++) {
                if (XuanZes[i1].checked === true) {//如果处于被选中状态
                    var i1_a = this.LieBiao[i1].JiaGe;
                    var i1_b = this.LieBiao[i1].ShuLiang;
                    ZongJia2 += i1_a * i1_b;
                }
                else{
                    ZongJia2+=0;
                }
            }
           // console.log(ZongJia2);
           // console.log("成功执行ShiYan1函数");
            var aaa = ZongJia2.toString().replace(/\B(?=(\d{3})+$)/g,',');
            DangQianJiaGeBF.innerHTML = aaa;

        },
        QuanXuan:function () {
            var QuanXuan = document.getElementById("QuanXuan");
            var XuanZes = document.getElementsByClassName("XuanZe");
            for (var ia = 0; ia < XuanZes.length; ia++) {
                if (QuanXuan.checked === true) {
                    XuanZes[ia].checked = true;
                }
                else if(QuanXuan.checked === false) {
                    XuanZes[ia].checked = false;
                }
                //其他功能1：点击单个后把全选按钮变为非选择状态
                XuanZes[ia].onclick = function () {
                    QuanXuan.checked = false;
                };
                //其他功能2：如果所有单项都被选中 则全选按钮变为选择状态
               /*if(XuanZes[ia] !== false){
                   QuanXuan.checked = true;//问题1：不知会不会造成极端时间内单个选项选择状态的快速变化？
               }*/
            }
        },
        //全选按钮 在html里触发两个函数
        ShuangHanShu1:function () {
         //   QuanXuan();
          //  ShiYan1();
            this.QuanXuan();
            this.ShiYan1();
        },
        Jian:function (index) {
            if(this.LieBiao[index].ShuLiang >= 1){
                this.LieBiao[index].ShuLiang--;
            }
            this.ShiYan1();
        },
        Jia:function (index) {
            this.LieBiao[index].ShuLiang++;
            this.ShiYan1();
        },
        YiChu:function (index) {
            this.LieBiao[index].ShuLiang = 0;
            this.ShiYan1();
            this.LieBiao.splice(index,1);
        }
    }
});