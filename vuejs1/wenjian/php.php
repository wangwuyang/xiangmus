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

header("Access-Control-Allow-Origin:*");
//header("Access-Control-Allow-Origin:http://www.wangwuyang2016.com");
//星号表示所有的域都可以接受
//header("Access-Control-Allow-Methods:GET,POST");
 //允许跨域

$a = 		'{
				[
	                {
	                    "id":1,
	                    "MingCheng":"iPhone 7",
	                    "JiaGe":6188,
	                    "ShuLiang":1
	                },
	                {
	                    "id":2,
	                    "MingCheng":"华为",
	                    "JiaGe":4099,
	                    "ShuLiang":1
	                },
	                {
	                    "id":3,
	                    "MingCheng":"小米",
	                    "JiaGe":2199,
	                    "ShuLiang":1
	                }
            	]
            }'



echo $a;//输出显示内容
?>