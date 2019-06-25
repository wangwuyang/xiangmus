function  LunBoTu(GeShu,SJJG){
    /*使用须知：
    * 1、建议直接复制附带的html部分
    /*
     */
    /*参数说明：
    GeShu:轮播图需要轮播的图片个数；   SJJG 时间间隔：多少毫秒轮播一次 */
    var LunBoTu = document.getElementById("LunBoTu"), //.....获取轮播图框架的ID
        HuaBu = document.getElementById("HuaBu"),//..........获取轮播图画布的ID
        FX_Zuo = document.getElementById("FX_Zuo"),//........获取左边的按钮
        FX_You = document.getElementById("FX_You"),//........获取右边的按钮
        YuanDianFu = document.getElementById("YuanDianFu"),//..获取圆点们的父级元素
        YuanDians = YuanDianFu.getElementsByTagName("span"),//...获取圆点们
        MuQianWeiZhi = 0,//...........................................创建一个变量，用来表示现在图片在画布中的位置
        LBDT_KuanDu= LunBoTu.offsetWidth,//运行轮播图函数时获取轮播图部分的宽度
        KuanDu = -(LunBoTu.offsetWidth),   //js获取轮播图可视区域的宽度 由于画布基于left为负设置 所以再给个负值
        ZDLB = 0,//............................................自动轮播部分的全局变量
        YuanDianYanSe = "white";   //圆点选中状态下呈现的颜色
    LunBoTu.style.height = Math.ceil(LunBoTu.offsetWidth/5*3)+"px";//根据屏幕大小获取宽度 然后在根据宽度给高度 跟响应式有关

    //检查变量是否存在
    /*
    //function 检查变量(参数1，参数2){}
    //检查变量(A ,B);
    if(Boolean(LunBoTu)!==  true) {alert("缺少变量LunBoTu")}
    if(Boolean(HuaBu)!== true) {alert("缺少变量HuaBu")}
    else{
      //  alert("缺少必要变量 无法实现完整功能 请检查html是否有丢失标签或class");
    }*/
    /*移动处理函数*/
    function LBT_YiDong(YDDW){
        //参数1：移动单位——每张图片的大小为一个移动单位 正负值代表方向
        var QiDian = parseInt(HuaBu.style.left);//left现在所在的地方
        var ZhongDian = YDDW * KuanDu;     //left要移动到的最终目标(第 * 张乘以每张的宽度)
        var sum = 0;          //存储运算值
        HuaBu.DongHua = setInterval(function(){//存到方法里也能运行？？？
            if(QiDian === ZhongDian){
                clearInterval(HuaBu.DongHua);//如果到达目的地，关闭动画
            }
            if (ZhongDian > QiDian) {   //从右边往左边 比如：QiDian=-3000 ZhongDian=-2000 则 终点left 大于起点left
                sum = Math.ceil((ZhongDian - QiDian) /15);// -2000 - -3000 = 1000
                QiDian += sum;
            }
            if (QiDian > ZhongDian) {   //从左边往右边
                sum = Math.floor((ZhongDian - QiDian) / 15); //-3000 - -2000 =-1000
                QiDian += sum;
            }
            HuaBu.style.left = QiDian + "px";
        },10);
    }

    /*点击左、右按钮后*/
    FX_You.onclick = function(){
        clearInterval(HuaBu.DongHua);
        if (MuQianWeiZhi === GeShu -1){ //如果画布目前在最后一张的位置
            MuQianWeiZhi = 0;           //将位置改为在第一张
        }
        else{
            MuQianWeiZhi += 1;      //否则就将位置+1;
        }
        LBT_YiDong(MuQianWeiZhi);//调用轮播图_移动函数，传入刚才得到的位置
        YDBianHua();//调用圆点变化函数 使圆点颜色产生相应变化
    };
    FX_Zuo.onclick = function(){
        clearInterval(HuaBu.DongHua);
        if(MuQianWeiZhi === 0){
            MuQianWeiZhi = GeShu - 1;
        }
        else {
            MuQianWeiZhi -= 1;
        }
        LBT_YiDong(MuQianWeiZhi);
        YDBianHua();
    };

    //圆点随轮播而变色
    function YDBianHua(){//清除所有圆点的js附加颜色 再将目前所在图片对应的圆点变为白色 可配合css动画使用 不过这种方式感觉有瑕疵 不美观
        for(var i = 0; i< YuanDians.length;i++){
            YuanDians[i].style.backgroundColor = "";
        }
        YuanDians[MuQianWeiZhi].style.backgroundColor = YuanDianYanSe;
    }

    //点击圆点后的行为
    for(var i=0;i<YuanDians.length;i++){
        YuanDians[i].ideshuzhi = i;//把 i 的值弄下来 方便在后面使用
        YuanDians[i].onclick = function(){
            clearInterval(HuaBu.DongHua);
            //YuanDian_YiDong();
            //  var YD_indexZhi = parseInt(this.getAttribute("data_index"));//圆点的自定义属性index值 也就是 点击的圆点是第几个 （没有跟css分离开 回头改改）
            var YD_indexZhi = this.ideshuzhi;//点击的地方的i 的值 也就是图片顺序
            var YD_CS = 0;          //存储要传给LBT_YiDong(参数1)的值
            LBT_YiDong(YD_indexZhi);
            MuQianWeiZhi = YD_indexZhi;
            YDBianHua();
        }
    }
    //点击圆点时的移动方式  //无法将移动方式剥离出来 闭包应该可以做到
    function YuanDian_YiDong(){}



    /*自动轮播部分*/

    function ZiDongLunBo(){
        ZDLB = setInterval(function(){
            FX_You.onclick();
        },SJJG);
    }
    function TingZhiLunBo(){
        clearInterval(ZDLB);
    }
    LunBoTu.onmouseover = TingZhiLunBo;//鼠标移入LunBoTu范围
    LunBoTu.onmouseout = ZiDongLunBo;  //鼠标移出LunBoTu范围
    ZiDongLunBo();        //开始自动播放
}
LunBoTu(5,3000);//调用函数，同时传入参数:（一共几张图片）（时隔几秒运动一次）