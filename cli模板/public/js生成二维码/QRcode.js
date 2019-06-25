


var ID = document.getElementById("qrcode");
var ZiShiYing = Math.ceil(ID.offsetWidth);//设置宽高
if(ZiShiYing >640){
  ZiShiYing = 640
}

var QRCODE = "http://192.168.0.188:8081/browse.html" + document.location.search;//域名（public.js里赋值）+ url里设备信息的ID（查询用）
console.log(QRCODE);

// 设置参数方式
var qrcode = new QRCode('qrcode', {
  text:QRCODE,
  width:ZiShiYing,
  height:ZiShiYing,
  colorDark : '#000000',
  colorLight : '#ffffff',
  correctLevel : QRCode.CorrectLevel.H//容错率（黑点数 L低 H高）
});