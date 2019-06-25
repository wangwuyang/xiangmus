


/*
online  监听设备连接到网络的事件，字符串类型
pause  应用进入后台事件，字符串类型
resume  应用从后台回到前台事件，字符串类型
longpress  Window 或者 Frame 的页面全局长按事件，字符串类型。










* */

//创建存方法的全局变量（类似JQ的$）
var FF = {};//挂载方法
FF.YZ={};






//类似jqurey的获取ID与class——HuoQu("#A")
function HuoQu(name) {
    var a = name.charAt(0);//获取字符串的第一个内容
    var b = name.slice(1); //获取字符串的第一个内容 之外的内容;
    if(a === "#"){return document.getElementById(b);}
    if(a ==="."){return document.getElementsByClassName(b);}
    else{console.log("获取"+name+"的"+"ID或class失败，请检查是否存在")}
}

////输出本地存储的所有数据
// function ShuChuBenDiCunChu() {
//     for(var BenDi=0; BenDi<localStorage.length;BenDi++){
//         console.log('localStorage里存储的第'+BenDi+'条数据的名字为：'+localStorage.key(BenDi)+',值为：'+localStorage.getItem(localStorage.key(BenDi)));
//     }
// }

//根据数组的值获取数组下标
function HuoQuXiaBiao(ShuZu,Zhi){
    var ShuZu_length = ShuZu.length;
    for (var i = 0; i < ShuZu_length; i++) {
        if (ShuZu[i] === Zhi)
            return i
    }
}

//更改html内容
// function GengGaiHTML(ID,NR) {ID.innerHTML = NR;}

//国标s与类型s的数据预加载
function LeiXingsAndGuoBiaos() {
  var LeiXings = {LeiBie:"类型",Url: urlA+"/equipmentTypePhone/getList"+urlB, ShuZi : [], HanZi:[]};
  var GuoBiaos = {LeiBie:"国标",Url: urlA+"/simplecodePhone/getListByKey"+urlB, ShuZi : [], HanZi:[]};
  LeiXingAndGuoBiaoHS(LeiXings);LeiXingAndGuoBiaoHS(GuoBiaos);
  //请求数据并缓存到本地（H5有个能够接收服务器更新的功能）
  function LeiXingAndGuoBiaoHS(ShuJu) {
    mui.ajax(ShuJu.Url, {
      data:{},
      dataType: "json", async: true, crossDomain: true, type: 'post', timeout: 10000,
      headers: {'Content-Type': 'application/json'},
      success: function (data) {
        if(ShuJu.LeiBie ==="类型"){LeiXingsHS(data.dataList);}
        if(ShuJu.LeiBie ==="国标"){GuoBiaosHS(data.dataList);}
      },
      error: function (xhr, type, errorThrown) {console.log("类型与国标的数据请求失败");}
    });
    //对类型和国标对象进行赋值
    function LeiXingsHS(NR) {
      var i = 0;var NR_length = NR.length;//循环优化
      for(;i<NR_length;i++){LeiXings.ShuZi.push(NR[i].typeCode);LeiXings.HanZi.push(NR[i].typeName);}
      localStorage.SBXQ_LeiXings = JSON.stringify({NUMBER:LeiXings.ShuZi,HANZI:LeiXings.HanZi});   //将类型的值进行本地存储操作
    }
    function GuoBiaosHS(NR) {
      var i = 0;var NR_length = NR.length;//循环优化
      for(;i<NR_length;i++){GuoBiaos.ShuZi.push(NR[i].simplecodeCode);GuoBiaos.HanZi.push(NR[i].simplecodeValue);}//遍历赋值
      localStorage.SBXQ_GuoBiaos = JSON.stringify({NUMBER:GuoBiaos.ShuZi,HANZI:GuoBiaos.HanZi}); //将类型的值进行本地存储操作
    }
  }
}



// FF.YZ 验证相关的方法
//
// //验证.首尾空格删除
// FF.YZ.Trim = function (ID) {
//   var ID_Value = ID.value;
//   var ZhengZe = /(^\s*)|(\s*$)/g;
//   if(ZhengZe.test(ID_Value)){
//     ID.value = ID_Value.replace(ZhengZe,"");
//   }
// };
// //新版弹窗不冲突式验证
// //验证.账号     //正则匹配——大小写字母开头,后面跟除_外的数字或字母 共计6-15位的长度 (待深入测试)
// FF.YZ.ZhangHao = function (ID,TiShi) {
//     FF.YZ.KongBai(ID);
//     //  var ZhengZe = /^[0-9a-zA-Z]{5,16}$/;//[0-9a-zA-Z_]等价于\w 这里不需要下划线，所以不用\w
//     var ZhengZe = /^([a-z]|[A-Z])([a-z]|[0-9]|[A-Z]){2,20}$/;//大小写字母开头,后面跟除_外的\w 共计3-21位的长度
//     if (ZhengZe.test(ID.value)) {
//         return true;
//     }
//     else {
//         if(FF.TanChuang_ZT === false){
//             FF.TanChuang_ZT = true;
//             TanChuang(TiShi);
//         }
//         return false
//     }
// };
//
//
// //验证.验证码  //正则匹配——由4位数字组成
// FF.YZ.YanZhengMa = function (ID,TiShi) {
//     FF.YZ.KongBai(ID);
//     var ZhengZe = /^\d{4}$/;// [纯数字]4位
//     if (ZhengZe.test(ID.value)) {
//         return true
//     }
//     else {
//         if(FF.TanChuang_ZT === false){
//             FF.TanChuang_ZT = true;
//             TanChuang(TiShi);
//         }
//         return false;
//     }
// };
//
// //验证.数字
// FF.YZ.ShuZi = function(ID,TiShi){
//     const Zhi = ID.value;
//     const ZhengZe = /^[0-9]+$/;
//     if(ZhengZe.test(Zhi)){
//         return true;
//     }
//     else {
//         if(FF.TanChuang_ZT === false){
//             FF.TanChuang_ZT = true;
//             TanChuang(TiShi);
//         }
//         return false;
//     }
// };
//
// //验证.特定字符串对比检测
// FF.YZ.ZiFuChuan = function (ID,DuiBiZhi,TiShi) {
//     var Zhi = ID.innerHTML;
//     if(Zhi !== DuiBiZhi && Zhi.length !== 0 && Zhi && Zhi !== "undefined"){
//         return true;
//     }
//     else {
//         if(FF.TanChuang_ZT === false){
//             FF.TanChuang_ZT = true;
//             TanChuang(TiShi);
//         }
//         return false;
//     }
// };
//
// //选填项，备注之类的
// FF.YZ.XuanTian = function (ID,TiShi) {
//   FF.YZ.Trim(ID);
//   FF.YZ.TeShu1(ID);
//   var ID_value = ID.value;
//   return true;
// };
// //验证.图片
// FF.YZ.TuPian = function (ID,TiShi) {
//     if(ID.value !=="" && ID.value!=="undefined"){
//         return true
//     }
//     else {
//         if(FF.TanChuang_ZT === false){
//             FF.TanChuang_ZT = true;
//             TanChuang(TiShi);
//         }
//         return false;
//     }
// };

// //验证.数字+小数三位检测

// FF.YZ.XiaoShu = function (ID,TiShi) {
//     const Zhi = ID.value;
//     const reg = /^\d+(\.\d+)?$/;
//     if(reg.test(Zhi)){
//         return true;
//     }
//     else{
//         TanChuang(TiShi);
//         return false;
//     }
// };
//base64



FF.projectName = 'Mes_Web'; //项目名称

var URLs = {
  tianyu: "http://192.168.0.172:8080/Mes/rest",
  F188:"http://192.168.0.188:8091/Mes/rest",
  ceshi:"https://www.easy-mock.com/mock/5cb69f4470161855e1f1731b/example_HBApp"
};

var URL_PATH = {
  resetPhone:"/userInfo/updatephone",  //更改手机号
  verificationCode:"/verificationCodePhone/sendCode",  //登录模块/获取验证码接口
  //项目列表
 // projects:"/equipmentModule/projects",             //设备模块/项目们 //暂时不用写：环保、水源、电力等项目 至少传回参数：项目名称、已录入企业数量、
  //地图接口
  EnterprisesInfo:"/userInfo/getListEnter",//获取企业信息们
  lists:"/equipment/getPageList",                  //设备模块/列表们
  kinds:"/equipmentType/selectList",//大类为两位字符长度（01） 小类为四位长度（0101）
  kinds_childs:"/equipmentTypePhone/getListByCode", ////设备模块/类型的小类型们（根据typeCode）
  criterions:"/simplecode/getListByKey",   //设备模块/排放标准们
  getListByTypeStandard:"/equipment/getListByTypeStandard",//根据国标和种类更新列表
  details:"/equipment/getList",         //设备详情信息
  sendDetails:"/equipment/update",//发送详情页的审核数据
  getImages:"/ftpRestFul/download",
  //已正常
  login:"/userRegis/userlogin",    //登录接口
  resetPassword:"/userRegis/updatePassword", //通过登录名重置密码
  //getCode: "/verificationCode/sendCodeCheck", //获取验证码

};
var URLA = URLs["F188"];//此处值得思考 a.b  与a[b]的区别 经测试 都能实现效果 （对象数组 本为一体的原因？）


//验证.账号
FF.YZ.isLoginName = function (data) {
  var reg = /^([a-z]|[A-Z])\w{2,19}$/; //大小写字母开头,后面跟\w 共计3-20位的长度
  return reg.test(data);
};
//验证.手机号
FF.YZ.isPhone = function (data) {
  var reg = /^1[3|4|5|7|8][0-9]\d{8}$/; //头三位特殊检验，后面跟八位任意数字（并非最严谨的那种）
  return reg.test(data);
};
//验证.密码
FF.YZ.isPassWord = function (data) {
  var reg = /^([0-9]|[a-z]|[A-Z]){6,25}$/; //6-25位的数字||大小写||字母组成
  return reg.test(data);
};
//验证.密码(必须有一位字母+数字版)
FF.YZ.isPassWordB = function (data) {
  //var reg = /^([0-9]|[a-z]|[A-Z]){6,25}$/; //6-25位的数字||大小写||字母组成
  var reg = /^.*(?=.{6,25})(?=.*\d)(?=.*[a-z]).*$/; //6-25 必须由至少一位的数字、大小写字母组成
  return reg.test(data);
};

//值的变化 删除空格和特殊字符
FF.YZ.isValueDelete = function (value) {
  var ID_value = value;
  ID_value = FF.YZ.isKongBai(ID_value);
  ID_value = FF.YZ.isTeShu1(ID_value);
  return ID_value
};

//值的变化 删除首尾的空格和特殊字符
FF.YZ.isDelKongAndTS = function (value) {
  var ID_value = value;
  ID_value = FF.YZ.isTrim(ID_value);
  ID_value = FF.YZ.isTeShu1(ID_value);
  return ID_value
};

//删除首尾空格
FF.YZ.isTrim = function () {
  var ID_value = value;
  var reg = /(^\s*)|(\s*$)/g;
  if(reg.test(ID_value)){
    return (ID_value.replace(reg,""));
  }

};
//删除空白字符 ////正则匹配——删除任何空白字符，包括空格、制表符、换页符等等
FF.YZ.isKongBai = function (value) {
  var ID_value = value;
  var reg = /\s/g;
  if(reg.test(ID_value)){
    return (ID_value.replace(reg,""));
  }
  return ID_value
};
//删除特殊字符
FF.YZ.isTeShu1 = function (value) {
  var ID_value = value;
  var reg = /[%*^&￥$]/g;
  if(reg.test(ID_value)){
    return (ID_value.replace(reg,""));
  }
  return ID_value
};


/*
全局ajax方法，参数param：
config_method.ajax_post({
  'pathName':'selectVideoInfoAll',   //路径
  "authentication": true,    //ture开启身份验证，false关闭身份验证
  'ajaxData':{
              'pageNum':1,
              'pageSize':5,
            },                       //ajax传入参数
  'callBack':function(ret){}  //执行方法
})
*/
FF.ajaxPost = function (param) {
  //身份验证
  if (param.authentication) {
    var userInfo = $api.getStorage("userInfo");
    if (userInfo) {
      param.authentication = "?regisCode=" + userInfo.userRegisCode + "&userId=" + userInfo.userId
    }
    else{console.log("用户信息为空 无法开启身份验证")}
  }
  else {
    param.authentication = "";
  }
console.log(URLA + param.pathName + param.authentication);
  //发送数据
  api.ajax({
    url: URLA + param.pathName + param.authentication,
    method: 'post',
    headers: {'Content-Type': 'application/json;charset=utf-8'},
    // dataType: 'json', //返回类型
    returnAll: false, //是否全部返回（包括请求头）
    //传递参数，body如果传json类型，header中必须加上传参类型'Content-Type': "application/json"
    data: {body: param.ajaxData}
  },
    //回调函数f
    function (res, err) {
    if (res) {
      if (param.callBack) {
        //  console.log("有回调方法");
        param.callBack(res); //调用方法
        return;
      }
      console.log("无回调方法");
    } else {
      console.log('失败' + JSON.stringify(err));
      // $log.print('失败' + err)
      //if (err.statusCode == 404) {
        // api.toast({ //错误提示信息
        //     msg: err.msg, //错误信息
        //     duration: 2000, //显示时间长度
        //     location: 'bottom' //显示位置
        // });
        // api.alert({
        //   title: '提示',
        //   msg: err.msg
        // }, function (ret, err) {
        //   // $app.openWin('login')
        //   api.openWin({
        //     name: 'login',
        //     url: 'widget://html/login.html',
        //     bounces: false,
        //   });
        // });
       // $api.rmStorage('userInfo'); //清除本地用户信息
     //   api.clearCache(); //清除缓存
     //  } else if (err.statusCode == 0) {
     //    $app.toast('服务器未开启')
     //  } else {
     //    $app.toast(err.msg)
    // }
    //   return;
    }
  });
};


/**
 config_method.ajax_get({
        'pathName': 'selectVideoInfoAll', //请求路径
        'callBack': function (ret) {
            console.log(JSON.stringify(ret))
        } //调用函数
    });
 */

// config_method.ajax_get = function (param) {
//   api.ajax({
//     url: param.pathName,
//     method: 'get',
//     timeout: 30,
//     dataType: 'json', //返回类型
//     returnAll: false, //是否全部返回（包括请求头）
//   }, function (ret, err) {
//     if (ret) {
//       if (param.callBack) {
//         // console.log("有回调方法");
//         param.callBack(ret); //调用方法
//         return;
//       }
//       console.log("无回调方法");
//     } else {
//       // console.log('失败' + JSON.stringify(err));
//       $logger.print('失败' + err)
//       $app.toast(err.msg)
//       return;
//     }
//   });
// }
/**
 * config_method.navigationBar({
        'name': val.name,               //url路径名
        'url': val.url,                 //url路径
        'title': val.title,             //导航标题
        'rightText': val.rightText,     //右侧按钮文字
        'rightIconPath': val.rightIconPath  //右侧按钮图片地址
        'data': {                       //页面pageParam传参
              businessId: v.businessId
            }
    })
 */

// FF.openTabLayout({
//   name: "main",
//   url: "widget://html/main.html",
//   title: "找回密码",
//   rightText: "",
//   iconPath: "",
//   pageParam:""
// });


//openTabLayout方法打开窗口
FF.openTabLayout = function (param) {
  api.openTabLayout({
    name: param.name,
    url: param.url,
    title: param.title,
    hideNavigationBar: false,
    navigationBar: {
      background: '#5082c2',
      color: '#fff',
      rightButtons: [{
        text: param.rightText || "",
        color: '#fff',
        iconPath: param.rightIconPath || ""
      }]
    },
    pageParam: param.data || ""
  });
};

//openWin方法打开窗口
FF.openWin = function(winName,pageData) {
  var param = {
    name: winName,
    url: 'widget://html/' + winName + '.html',
    hScrollBarEnabled: false, //是否显示水平滚动条
    slidBackEnabled: false, //是否支持滑动返回
    slidBackType: 'edge', //支持滑动返回时，设置手指在页面右滑的有效作用区域
    allowEdit: true, //是否允许长按页面时弹出选择菜单
   // overScrollMode: 'scrolls', //设置页面滚动到头部或尾部时,显示回弹阴影效果的模式(仅安卓有效)
    softInputMode: 'resize', //当键盘弹出时，输入框被盖住时，页面自动上移（IOS）安卓需在配置文件中设置
   // bounces:true,//是否弹动
    //reload:true//是否允许 页面已经打开时 重新加载页面
  //  softInputDismissMode:["tap","drag"],//
    pageParam: pageData
  };
  api.openWin(param);
};

//如果没传位置则为bottom  如果没传时间 则为2000ms
FF.toast = function(msg, location, time){
  location = location || 'bottom';
  time = time ? time : 2000;
  api.toast({
    msg: msg,
    duration: time,
    location: location
  });
};

//原生JS版生成验证码
FF.randomCode = function (el) {
  //offsetWidth在弹出层失效(vant.js、vue.js、元素自身，谁的原因？)
  var Canvas1 = new GouZaoHanShu(el);
  //构造函数：参数分别为canvas 元素， 绘制区域宽高， 验证字符个数 ,干扰线数量，干扰点数量
  function GouZaoHanShu(el, len, width, height, lines, dots) {
    var a = document.querySelector("#canvas");
    //  console.log(a);
    this.Id = document.querySelector(el);
    this.width = width || this.Id.width;
    this.height = height || this.Id.height;
    this.len = len || Math.floor(this.Id.width / 30);
    this.lines = lines || 6;
    this.dots = dots || 60;
    this.code = '';
  }
  Canvas1.draw = function () {
    var width = Canvas1.width;
    var height = Canvas1.height;
    //开始绘制
    var ctx = Canvas1.Id.getContext('2d');
    //填充背景色
    ctx.fillStyle = Canvas1.makeColor(150, 240);
    ctx.fillRect(0, 0, width, height);

    //填充字符
    var chars = Canvas1.makeCode();
    for (var i = 0; i < Canvas1.len; i++) {
      ctx.save();
      ctx.font = chars[i].fontSize + 'px Simhei';
      ctx.fillStyle = Canvas1.makeColor(80, 120);
      ctx.translate(25 * i + 25, 25);
      ctx.rotate(chars[i].deg * Math.PI / 180);
      ctx.fillText(chars[i].str, -10, 8);
      ctx.restore();
    }
    //生成干扰线
    Canvas1.makeLine(ctx, Canvas1.lines);
    //生成干扰点
    Canvas1.makeDot(ctx, Canvas1.dots);
  };
  Canvas1.makeCode = function () {
    //生成验证码
    var strs = [];
    Canvas1.code = '';
    var pool = "ABCDEFGHIJKLIMNOPQRSTUVWSYZabcdefghijklmnopqrstuvwxyz1234567890";
    for (var i = 0; i < Canvas1.len; i++) {
      var str = pool[Canvas1.makeNum(0, pool.length - 1)];
      Canvas1.code += str;
      var fontSize = Canvas1.makeNum(20, 40);
      var deg = Canvas1.makeNum(-35, 35);
      strs.push({
        str: str,
        fontSize: fontSize,
        deg: deg
      });
    }
    return strs
  };
  Canvas1.makeLine = function (ctx, lines) {
    var makeNum = Canvas1.makeNum;
    var width = Canvas1.width;
    var height = Canvas1.height;
    //添加干扰线
    for (var i = 0; i < lines; i++) {
      ctx.beginPath();
      ctx.moveTo(makeNum(0, width), makeNum(0, height));
      ctx.lineTo(makeNum(0, width), makeNum(0, height));
      ctx.strokeStyle = Canvas1.makeColor(140, 230);
      ctx.closePath();
      ctx.stroke();
    }
  };
  Canvas1.makeDot = function (ctx, dots) {
    var makeNum = Canvas1.makeNum;
    var width = Canvas1.width;
    var height = Canvas1.height;
    //添加干扰点
    for (var i = 0; i < dots; i++) {
      ctx.beginPath();
      ctx.arc(makeNum(0, width), makeNum(0, height), makeNum(1, 2), 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fillStyle = Canvas1.makeColor(150, 200);
      ctx.fill();
    }
  };
  Canvas1.makeNum = function (min, max) {
    return Math.ceil(Math.random() * (max - min + 1) + min - 1)
  };
  Canvas1.makeColor = function (min, max) {
    var makeNum = this.makeNum;
    return 'rgb(' + makeNum(min, max) + ', ' + makeNum(min, max) + ', ' + makeNum(min, max) + ')';
  };
  Canvas1.draw();
  return (Canvas1.code.toLowerCase());
};


