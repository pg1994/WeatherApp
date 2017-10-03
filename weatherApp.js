function addLoadEvent(func){  
        var oldonLoad = window.onload;  
        if(typeof window.onload!='function'){  
                window.onload = func;  
        }  
        else{  
            window.onload = function(){  
                oldonload();  
                func();  
            }  
        }  
}  

var btn = document.getElementById("button");
var content = document.getElementById("content");
var footer1 = document.getElementById("footer1");
var textInput = document.getElementById("textInput");
var maintain = document.getElementById("maintain");
var footer = document.getElementById("footer2");
var txt;
var text;
var content1;
var content11;
var content12;
var content13;
var p1;

    function isnull(val) {

        var str = val.replace(/(^\s*)|(\s*$)/g, '');//去除空格;

        if (str == '' || str == undefined || str == null) {
            //return true;
            textInput.placeholder= "输入城市名为空";
        } else {
     content.style.display='none';
     footer1.style.display='none'; 
        }
    }
      
    btn.onclick = function () {

        isnull( textInput.value );
        content1  = document.createElement("div");
        var parent  = footer.parentNode;
        parent.insertBefore(content1,footer);
        content1.setAttribute("class","cont");
        var xmlhttp;
  
        if(window.XMLHttpRequest){
            xmlhttp = new XMLHttpRequest();
        }
        else{
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xmlhttp.onreadystatechange = function(){
            if( xmlhttp.readyState == 4 && xmlhttp.status ==200){
                 text = eval("("+xmlhttp.responseText+")");
                 txt = JSON.stringify(text);
                 alert(txt);
                         show();
            }
        }
        xmlhttp.open("GET","http://wthrcdn.etouch.cn/weather_mini?city="+textInput.value,true);
        xmlhttp.send();
        
    }


    function show(){
        var doc = document;
        content11 = doc.createElement("div");
        var img = doc.createElement("img");
        img.setAttribute("src","image/dw.png");
        img.setAttribute("class","tubiao");        
        var p1 = doc.createElement("p");
        p1.setAttribute("class","styleP1");

        var p2div = doc.createElement("div");
        var weatherimg = doc.createElement("img");
        var p2 = doc.createElement("div");       
        p2.setAttribute("class","styleP2");
        p2div.appendChild(weatherimg);
        p2div.appendChild(p2);

        var p3 = doc.createElement("p");
        p3.setAttribute("class","styleP3");
        var p4 = doc.createElement("p");
        p4.setAttribute("class","styleP3");
        var p5 = doc.createElement("p");
        p5.setAttribute("class","styleP3");
        var p6 = doc.createElement("p");
        p6.setAttribute("class","styleP3");
        var bigimg = doc.createElement("img");
 
        content11.appendChild(img);
        content11.appendChild(p1);
        content11.appendChild(p2div);

        content11.appendChild(p3);
        content11.appendChild(p4);
        content11.appendChild(p5);
        content11.appendChild(p6);
        content11.setAttribute("class","cont1");
        content12 = doc.createElement("div");
        content12.appendChild(bigimg);
        content12.setAttribute("class","cont2");
        bigimg.setAttribute("src",getPic(text.data.city));
        bigimg.setAttribute("class","bigimg");
        content1.appendChild(content11);
        content1.appendChild(content12);
        weatherimg.setAttribute("class","weatherimg");
        weatherimg.setAttribute("src",getWeatherimg(text.data.forecast[0].type));
        p1.innerHTML = "中国  ·"+"  "+text.data.city;      
        p2.innerHTML = text.data.wendu+"°";
        p3.innerHTML = text.data.forecast[0].date.substr(3)+" "+getNowFormatDate();
        p4.innerHTML = "今日 ："+text.data.forecast[0].low.substr(2)+" ~ "+text.data.forecast[0].high.substr(2)+
            "</br>"+"  现温度"+text.data.wendu+"°"+" "+text.data.forecast[0].type;
        p5.innerHTML = "风向 ："+text.data.forecast[0].fengxiang;
        p6.innerHTML = "提醒 ："+text.data.ganmao;


    }


function getPic(a){
    switch(a){
        case "长沙": return "image/changs.jpg";
        case "广州": return "image/wuh.jpg";
        case "北京": return "image/beijing.jpg";
        case "厦门": return "image/xiamen.jpg";
        case "西安": return "image/xian.jpg";
        case "呼尔浩特" :return "image/huerhaote.jpg";
        case "广西" :return "image/guangxi.jpg";
        case "上海" :return "image/shanghai.jpg";
        case "丽江" :return "image/lijiang.jpg";
        case "福州" :return "image/fuzhou.jpg";

    }

}

function getWeatherimg(a){
    switch(a){
        case "晴":return "image/sunday.png";

        case "多云":return "image/cloudy.png";
        case"阴": return "image/ying.png";
        case"暴雪": return "image/baoxue.png";
        case "暴雨" : return "image/baoyu.png";
        case "大暴雨": return "image/dabaoyu.png";
        case "大雪": return "image/daxue.png";
        case "大雨" :return "image/dayu.png";
        case "冻雨" :return "image/dongyu.png";
        case "浮尘" : return "image/fuchen.png";
        case "雷阵雨": return "image/leizhenyu.png";
        // case "雷阵雨伴有冰雹" return "image/leizhenyubingbao.png";
        case "霾" :return "image/mai.png";
        case "强沙尘暴" :return "image/qiangshachenbao.png";
        case "沙尘暴" :return "image/shachenbao.png";
        case "雾": return "image/wu.png";
        case "小雪" :return "image/xiaoxue.png";
        case "小雨" :return "image/xiaoyu.png";
        case "扬沙" :return "image/yangsha.png";
        case "雨夹雪" :return "image/yujiaxue.png";
        case "阵雪" :return "image/zhenxue.png";
        case "阵雨" :return "image/zhenyu.png";
        case "中雨" :return "image/zhongyu.png";
        case "中雪" :return "image/zhongxue.png";
    }
}

function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
    return currentdate;
} 



// var search = document.getElementById("search");

// btn.onclick= function(){
//     if(search.textInput.value=""){
//         alert("输入城市名为空");
//     }
//   //   else{
//   //  content.style.display='none';
//   // footer1.style.display='none';       
//   //   }

// }

//     function insertAfter(newElement,targetElement)
// {
//     var parent = targetElement.parentNode;
//     if(parent.lastChild == targetElement)
//     {
//         parent.appendChild(newElement);
//     }
//     else{
//         parent.insertBefore(newElement,targetElement.nextSibling);
//     }

// }