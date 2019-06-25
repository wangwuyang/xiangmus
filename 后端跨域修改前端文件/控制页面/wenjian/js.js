function WeiXinJianHua(){
    //输入区
    var ShuRu = document.getElementById("ShuRu"),
        ChuLi = document.getElementById("ChuLi"),//处理内容按钮
        QingKong = document.getElementById("B2"),     //清空内容按钮
        ShuChu = document.getElementById("ShuChu"),     //输出区
        B3 = document.getElementById("B3"),    //复制按钮
        TanChu1_WK = document.getElementsByClassName("TanChu1_WaiKe")[0], //弹出功能
        ChuLiHouNR = null;//自动处理完成后的的值储存到这个变量中
    //弹出提示部分
    function TanChuBF () {
        //声明运算变量
        var TCBF_1 = 50, TCBF_2 = 0, TCBF_3 = null;

        var TCBF_DH = setInterval(function () {
            //写运算方式
            TCBF_3 = Math.ceil((TCBF_1 - TCBF_2)/20);
            TCBF_2 += TCBF_3;
            //将运算方式融入动画之中
            TanChu1_WK.style.top = TCBF_2 +"px";
            //结束动画
            if (TCBF_2 === TCBF_1){
                clearInterval(TCBF_DH);
                setTimeout(function () {
                    TanChu1_WK.style.top ="-100px";
                },2000)
            }
        },10);
    }
    //运算部分
    ChuLi.onclick = function(){
        var d2 = ShuRu.value.match(/\w+\d{2,6}/g);
        //alert(d2 +"    d2[1]:"+ d2[1]);

        for(var i = 0;i<d2.length;i++){
            d2[i] = "\'"+d2[i]+"\'";
        }
        // alert(typeof d2);/*为什么这里是对象?*/
        ChuLiHouNR = "[" + d2 + "]" + ";";//为毛webscrom里d3会警告呢？？？//为毛webStorm2017.2里连var都黄框警告呢
        //alert(typeof d3); 这里就成了字符串呢？ why？？难道说是因为字符串+对象 进而导致d3的性质变成了字符串么？
        ShuChu.value = ChuLiHouNR;

        //复制内容到剪贴板
        if(ShuChu.value !== "") {
            //var B3_A = ShuChu.value;
            //  window.clipboardData.setData("Text","aa");
            //  TanChuBF();
            ShuChu.select();
            document.execCommand("Copy");
        }else{//有待检查
            alert("输出区无内容")
        }

        //弹出提示
        TanChuBF();
    };
    QingKong.onclick = function(){
        ShuRu.value = "";
        ShuChu.value = "";
    };
    ShuRu.onclick = function(){
        if(this.value == this.defaultValue){
            this.value ="";
            this.style.color ="black";
        }
    };
    ShuRu.onblur = function(){
        if (this.value == ""){
            this.value = this.defaultValue;
            this.style.color ="rgba(120,120,120,.6)";
        }
    };





    //修改其他页面内容部分
    function XiuGaiYeMian() {
        var XiaLa1 = document.getElementById("XiaLa1");
        var YuanChengXiuGai_B = document.getElementById("YuanChengXiuGai_B"); //远程修改部分的按键
        YuanChengXiuGai_B.onclick = function () {
            if (XiaLa1.value !=="空"){   //先验证下 避免为空
                var XGYM_a = "/wenjian/ChuLi.php";
                var XGYM_b = "?SCNR="+ChuLiHouNR; //“?SCNR=（变量ChuLiHouNR的值）”
                var XGYM_Wei = XiaLa1.value + XGYM_a + XGYM_b;
               // alert(XGYM_Wei);
                Ajax("GET",XGYM_Wei);
            }
            else{   //提示用户选择更改链接
                alert("请选择需要更改的链接");
            }

            //Ajax部分
            function Ajax(FangShi,PHPLJ) {
                var BL1 = null;
                if(window.XMLHttpRequest){BL1 = new XMLHttpRequest;}//兼容
                else {BL1 = new ActiveXObject("Microsoft.XMLHTTP");}

                BL1.onreadystatechange = function () {
                    if (BL1.readyState == 4 && BL1.status ==200) {
                        //  alert("连接成功"+"\n"+"PHP取得值为"+ BL1.responseText);
                        document.getElementById("FanHui").innerHTML = BL1.responseText;
                    }
                };//异步可以放前面 同步要放后面

                BL1.open(FangShi,PHPLJ,true);
                //BL1.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                BL1.send();
            }
        };
    }
    XiuGaiYeMian();
}
WeiXinJianHua();
/*
 缺点：
 1、微信号数字小于等于2位数的话会被忽略
 （例：ZhaoXX56 会被此程序忽略，需要自行添加，而ZhaoXX567则会正常显示）
 2、除了微信号，不可出现其他大于等于3的数字
 （例：f666 会出现在处理完的文本里，需要手动删除  而f66、—55、66等小于2位的则会被程序删除）
 3、暂未发现其它问题
 */
