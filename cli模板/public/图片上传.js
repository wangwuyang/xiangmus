//图片上传部分


ShangChuanBF();
function ShangChuanBF() {
  //判断浏览器是否支持FileReader接口
  if(typeof FileReader === 'undefined'){
    console.log("浏览器不支持FileReader接口，无法上传图片'");
    return;
  }
  var zheng = {
    File:IDs.ImgZhengInput,
    ID:IDs.Img_ZhengBF,
    ZT:"Zheng",
    ImgName:"Img_Zheng"
  };
  var zuo = {
    File:IDs.ImgZuoInput,
    ID:IDs.Img_ZuoBF,
    ZT:"Zuo",
    ImgName:"Img_Zuo"
  };
  var you = {
    File:IDs.ImgYouInput,
    ID:IDs.Img_YouBF,
    ZT:"You",
    ImgName:"Img_You"
  };
  zheng.File.onchange = function () {
    readAsDataURLHS(zheng);
  };
  zuo.File.onchange = function () {
    readAsDataURLHS(zuo);
  };
  you.File.onchange = function () {
    readAsDataURLHS(you);
  };

  //性能损耗：每次点击input后，重置内容为+号 对应状态为false 如果点击确定则重置内容为图片（每次都会进行innerHTML重置 损耗了性能）
  function readAsDataURLHS(NR) {
    //点击任意选项后变为false——value里首先要有值才行
    if(NR.ImgName === "Img_Zheng"){ZT.Img_ZhengBF = false;}
    if(NR.ImgName === "Img_Zuo"){ZT.Img_ZuoBF  = false;}
    if(NR.ImgName === "Img_You"){ZT.Img_YouBF  = false;}
    NR.ID.innerHTML='<span class="mui-icon mui-icon-plusempty"></span>';
    var BL_1 = NR.File.files[0];
    console.log(BL_1);
    if(!/image\/\w+/.test(BL_1.type)){
      TanChuang("*只可上传图片");
      NR.File.value = "";
      return false;
    }
    else if(BL_1.size > 5000000){
      TanChuang("*图片不能大于5M");
      NR.File.value = "";
      return false;
    }
    else if(BL_1.type === "image/gif"){
      TanChuang("*不可上传gif动图图片");
      NR.File.value = "";
      return false;
    }
    //将图片处理为各种数据
    TuPianChuLi(NR.ID,NR.File,NR.ImgName);
    //将图片处理为各种数据
    function TuPianChuLi(FuID,valueID,ImgName) {
      var BL_1 = valueID.files[0];
      var BL_2 = new FileReader();
      //将文件以Data URL形式读入页面
      BL_2.readAsDataURL(BL_1);
      BL_2.onload =function(){
        var TuPian = this.result;
        var b = TuPian.indexOf(",");
        var TuPian64 = TuPian.substring(b+1);
        FuID.innerHTML='<img src="' + TuPian +'" alt="" class="" />';
        var aa = {
          photonameJudge:ImgName,
          photoname:Base64.encode(BL_1.name),
          phototype:BL_1.type,
          photopath:TuPian64
        };
        if(ImgName === "Img_Zheng"){ZT.Img_ZhengBF = true;sendData.photoEntities[0] = aa;}
        if(ImgName === "Img_Zuo"){ZT.Img_ZuoBF  = true;sendData.photoEntities[1] = aa;}
        if(ImgName === "Img_You"){ZT.Img_YouBF  = true;sendData.photoEntities[2] = aa;}
        console.log(VueName.sendData);
      };
    }
  }
}