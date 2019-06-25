<!--<html>
<head>
    <meta charset="UTF-8">
</head>
<body>

<p>dsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
</body>
</html>-->



<?php

header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
header("Cache-Control: no-cache");
header("Pragma: no-cache");
//用户可能会设置一些选项来更改浏览器的默认缓存设置。通过发送上面的报头，您可以覆盖任何这些设置，强制浏览器不进行缓存！

header("Access-Control-Allow-Origin:http://wangwuyang2016.com");
//星号表示所有的域都可以接受
//header("Access-Control-Allow-Methods:GET,POST");*/
 //允许跨域

$SCNR = $_GET["SCNR"];//获取需要更改的内容
//处理送过来的数据

//setcookie('cookie','啊啊啊');

$XianShi = "var ShuZu = ".$SCNR;//需要显示的内容
$WenJian1 = fopen("../WeiXinHao.js","w");//or die("打开失败");//修改a.txt文件。采用先清除 再写新内容的方式
fwrite($WenJian1,$XianShi);
$ShuChu = file_get_contents("../WeiXinHao.js");//获取文件内容 (还是长度？)
fclose($WenJian1);//关闭文件
echo $ShuChu;//输出显示内容
?>