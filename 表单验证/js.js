/**
 * Created by ASUS-PC on 2017/7/6.
 */
function BiaoDan1(){
    var BiaoDan1_Div = document.getElementById("BiaoDan1_Div");//获取ID（比获取class性能好）
    var inputs   = BiaoDan1_Div.getElementsByTagName("input");//获取ID下所有input元素  //按理说 应该和class性能差不多吧？  不过。可能class更高些？？ 反正差不太多 用Tag省的再加class破坏html的美感了


    //通过单独添加ID 获取各个input 代码臃肿度变高 维护性增加
    var XingMing_input = document.getElementById("XingMing_input");
    var ShouJiHao_input = document.getElementById("ShouJiHao_input");
    var YouXiang_input = document.getElementById("YouXiang_input");
    var XingBie_input = document.getElementById("XingBie_input");
    var NianLing_input = document.getElementById("NianLing_input");

    //通过单独添加ID 获取各个span 代码臃肿度变高 维护性增加
    var XingMing_span =  document.getElementById("XingMing_span");
    var ShouJiHao_span = document.getElementById("ShouJiHao_span");
    var YouXiang_span =  document.getElementById("YouXiang_span");
    var XingBie_span  =  document.getElementById("XingBie_span");
    var NianLing_span =  document.getElementById("NianLing_span");

    //设置输入状态  做最后的判定用 最后如果存在false 即输入错误的input，就阻止提交
    XingMing_span.ZhuangTai = false;
    ShouJiHao_span.ZhuangTai = false;
    YouXiang_span.ZhuangTai = false;
    XingBie_span.ZhuangTai = false;
    NianLing_span.ZhuangTai = false;




    /*BiaoDan1_A函数，负责处理表单获取、失去焦点事件*/
    function BiaoDan1_A(){
        var i_DaiTi = inputs.length;//避免每次循环计算长度 优化性能
        for(var i = 0;i<i_DaiTi;i++){
            // inputs[i].value_MoRen = inputs[i].getAttribute("value");这个更改好像和其他的不一样
            //  console.log(inputs[i].value);         //果然比alert好用多了

            inputs[i].onfocus = function(){
                if(this.value == this.defaultValue){
                    this.value ="";
                    this.className = "BiaoDan1_YS_Hei";
                }
                ShuJuYanZheng();
            };
            inputs[i].onblur = function(){//为了减少代码量可合并两个事件
                if (this.value == ""){
                    this.value = this.defaultValue;
                    this.className = "";
                }
                ShuJuYanZheng();
            }

        }
    }
    BiaoDan1_A();


    function ShuJuYanZheng(){//获取、失去焦点判定一次  页面准备就绪时也得判定 加个onload共享函数

        /*姓名部分正则表达式*/
        var XMZZ_1 = /[\u4e00-\u9fa5]+/;     //
        var XMZZ_2 = /[\u4e00-\u9fa5]{2,4}/;//




        //姓名部分输入判定  //并排着感觉不太好 怎么整合一下呢？
        // 逻辑上不好 每次都会检查所有 回头改进下每次事件只判断对应的值的变化
        if(XingMing_input.value != XingMing_input.defaultValue){
            //正则表达式 一层四位字符 一层纯汉字
            var XM1 = XingMing_input.value.match(XMZZ_1);
            var XM2 = XingMing_input.value.match(XMZZ_2);

            if(XingMing_input.value != XM1){
                XingMing_span.innerHTML = "请仅输入汉字";
            }
            else if(XingMing_input.value != XM2){
                XingMing_span.innerHTML = "请输入2—4位的汉字";
            }
            else if(XingMing_input.value == XM2){
                XingMing_span.innerHTML = "✔";
                XingMing_span.ZhuangTai = true;
            }
            else{
                //用什么方法可以输出可能产生的错误的同时不让用户看到呢
            }
        }
        /* if(XingMing_input.value == XingMing_input.defaultValue ){XingMing_span.innerHTML = "不能为空!";}*/
        /* if(XingMing_input.value == null )                       {XingMing_span.innerHTML = "不能为空!";}*/
        //手机号部分输入判定
        if(ShouJiHao_input.value != ShouJiHao_input.defaultValue){
            //正则表达式 一层11位  一层纯数字
            /*手机号部分正则表达式*/
            var SJHZZ_1 = /[0-9]+/;     //将表示 所有汉字的       正则表达式 赋给变量HanZi1
            var SJHZZ_2 = /[0-9]{11,11}/;//将表示 2位到4位汉字的   正则表达式 赋给变量HanZi2
            var SJH1 = ShouJiHao_input.value.match(SJHZZ_1);
            var SJH2 = ShouJiHao_input.value.match(SJHZZ_2);
            if(ShouJiHao_input.value != SJH1){
                ShouJiHao_span.innerHTML = "请输入纯数字";
            }
            else if(ShouJiHao_input.value != SJH2){
                ShouJiHao_span.innerHTML = "手机号由11位数字组成";
            }
            else if(ShouJiHao_input.value == SJH2){
                ShouJiHao_span.innerHTML = "✔";
                ShouJiHao_span.ZhuangTai = true;
            }
        }
        //邮箱部分输入判定  （不好弄）
       if(YouXiang_input.value != YouXiang_input.defaultValue){
            //正则表达式 一层格式  一层。。。要不这个用H5自带的吧。。。
        }
        //性别部分输入判定  （未完成）
        if(XingBie_input.value != XingBie_input.defaultValue){
            //正则表达式 一层一位字符  一层男女 一层纯汉字 //单选的话体验不太好
            var XBZZ_1 = /[\u4e00-\u9fa5]+/;
            var XBZZ_2 = /[\u4e00-\u9fa5]/;
            var XB1 = XingBie_input.value.match(XBZZ_1);
            var XB2 = XingBie_input.value.match(XBZZ_2);
            if(XingBie_input.value != XB1){
                XingBie_span.innerHTML = "请输入汉字";
            }
        }
    }

    /*BiaoDan1_B 负责处理提醒函数*/
    /* function BiaoDan1_B(){
     var  AjaxDX = new XMLHttpRequest();
     AjaxDX.open("GET","Ajax.html");
     AjaxDX.setRequestHeader("Content-Type","text/plain");
     AjaxDX.send(null);//GET绝对没有主体 所以应该传递null或者省略    //顺序问题：照顾API？？

     }*/
    //  BiaoDan1_B();

}
function aabb(){
    var XMZZ_1 = /[0-9]+/;     //
    var XMZZ_2 = /[0-9]{11,11}/;//
    var aaaa = "1167865411111111114……1111222222222222222的啊54&*（%&*（……";
    var aabb = "1aab123543";


}
aabb();
BiaoDan1();