﻿function play(a){var b,c;m3u8=urls[a],b=document.getElementById("video"),Hls.isSupported()?(c=new Hls,c.loadSource(m3u8),c.attachMedia(b),c.on(Hls.Events.MANIFEST_PARSED,function(){b.play()})):b.canPlayType("application/vnd.apple.mpegurl")&&(b.src=m3u8,b.addEventListener("loadedmetadata",function(){b.play()}))}function so(){var a=$(".sinput").val();a=a.replace(/^\s+|\s+$/g,""),$.post("/res/so.php",{keyboard:a}),a=$.t2s(a),$(".searchform").attr("action","/so/"+a+"-"+a+"--.html"),$(".searchform").submit()}!function(a){var b=/iPhone/i,c=/iPod/i,d=/iPad/i,e=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,f=/Android/i,g=/(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,h=/(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,i=/Windows Phone/i,j=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,k=/BlackBerry/i,l=/BB10/i,m=/Opera Mini/i,n=/(CriOS|Chrome)(?=.*\bMobile\b)/i,o=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,p=/UCWEB/i,q=/spider/i,r=/bot/i,s=/Windows; U;/i,t=new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),u=function(a,b){return a.test(b)},v=function(a){var v=a||navigator.userAgent,w=v.split("[FBAN");return"undefined"!=typeof w[1]&&(v=w[0]),w=v.split("Twitter"),"undefined"!=typeof w[1]&&(v=w[0]),this.apple={phone:u(b,v),ipod:u(c,v),tablet:!u(b,v)&&u(d,v),device:u(b,v)||u(c,v)||u(d,v)},this.amazon={phone:u(g,v),tablet:!u(g,v)&&u(h,v),device:u(g,v)||u(h,v)},this.android={phone:u(g,v)||u(e,v),tablet:!u(g,v)&&!u(e,v)&&(u(h,v)||u(f,v)),device:u(g,v)||u(h,v)||u(e,v)||u(f,v)},this.windows={phone:u(i,v),tablet:u(j,v),device:u(i,v)||u(j,v)},this.other={blackberry:u(k,v),blackberry10:u(l,v),opera:u(m,v),firefox:u(o,v),chrome:u(n,v),ucweb:u(p,v),device:u(k,v)||u(l,v)||u(m,v)||u(o,v)||u(n,v)||u(p,v)},this.spiders={spider:u(q,v),bot:u(r,v),u:u(s,v),device:u(q,v)||u(r,v)||u(s,v)},this.seven_inch=u(t,v),this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch,this.phone=this.apple.phone||this.android.phone||this.windows.phone,this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet,this.spider=this.spiders.device,"undefined"==typeof window?this:void 0},w=function(){var a=new v;return a.Class=v,a};"undefined"!=typeof module&&module.exports&&"undefined"==typeof window?module.exports=v:"undefined"!=typeof module&&module.exports&&"undefined"!=typeof window?module.exports=w():"function"==typeof define&&define.amd?define("isMobile",[],a.isMobile=w()):a.isMobile=w()}(this),$(document).ready(function(){var a,b;if(window.movie=window.movie||{},movie.bd=$("body"),movie.shareimage=$('meta[property="og:image"]').attr("content"),movie.click="click",$(".nav-on").on(movie.click,function(){movie.bd.toggleClass("nav-active")}),$(".nav-mask").on(movie.click,function(){movie.bd.removeClass("nav-active")}),$(".searchstart-on").on(movie.click,function(){movie.bd.addClass("searchform-active"),$(".sinput").focus()}),$(".searchstart-off").on(movie.click,function(){movie.bd.removeClass("searchform-active")}),$('[etap="all_lists"]').on(movie.click,function(){$(this).parent().next("ul").slideToggle(400)}),movie.bd.append('<div class="rollbar"><div class="rollbar-item rollbar-item-top" etap="to_top" title="回顶部"><i class="fa">&#xe606;</i></div></div>'),a=$(".rollbar-item-top"),$(window).scroll(function(){var b=document.documentElement.scrollTop+document.body.scrollTop;b>200?a.fadeIn():a.fadeOut()}),$('[etap="to_top"]').on(movie.click,function(){$("html,body").animate({scrollTop:0},300)}),b={url:document.URL,pic:movie.shareimage,title:document.title||"",desc:$('meta[name="description"]').length?$('meta[name="description"]').attr("content"):""},$(".share-weixin").each(function(){$(this).find(".share-popover").length||($(this).append('<span class="share-popover"><span class="share-popover-inner" id="weixin-qrcode"></span></span>'),$("#weixin-qrcode").qrcode({width:80,height:80,text:b.url}))}),$('[etap="share"]').on(movie.click,function(){var a=$(this),c=a.data("share"),d="";switch(c){case"qq":d="http://connect.qq.com/widget/shareqq/index.html?url="+b.url+"&desc="+b.desc+"&summary="+b.title+"&site=zeshlife&pics="+b.pic;break;case"weibo":d="http://service.weibo.com/share/share.php?title="+b.title+"&url="+b.url+"&source=bookmark&pic="+b.pic;break;case"douban":d="http://www.douban.com/share/service?image="+b.pic+"&href="+b.url+"&name="+b.title+"&text="+b.desc;break;case"qzone":d="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+b.url+"&title="+b.title+"&desc="+b.desc+"&pics="+b.pic;break;case"tqq":d="http://share.v.t.qq.com/index.php?c=share&a=index&url="+b.url+"&title="+b.title;break;case"facebook":d="https://www.facebook.com/share.php?u="+b.url+"&t="+b.title;break;case"twitter":d="https://twitter.com/intent/tweet?text="+b.title+b.url;break;case"linkedin":d="https://www.linkedin.com/shareArticle?mini=true&ro=true&armin=armin&url="+b.url+"&title="+b.title+"&summary="+b.desc}a.attr("href")||a.attr("target")||a.attr("href",d).attr("target","_blank")}),$("#video").length>0){for($(function(){$(".playlist ul li").click(function(){$(".playlist ul li").eq($(this).index()).addClass("on").siblings().removeClass("on")})}),line=links.split("|"),urls=new Array,videolist="",len=line.length-1,css="",i=0;len>i;i++)url=line[i].split("$"),urls[i]=url[1],i==len-1&&(css=" class='on'"),videolist+="<li"+css+"><a href='javascript:;' onclick='play("+i+");'>"+url[0]+"</a></li>";$(".playlist ul").html(videolist),play(len-1),0!=id&&1!=id&&2!=id&&1==rating&&$.ajax({url:"https://api.douban.com/v2/movie/subject/"+id,type:"GET",dataType:"jsonp",jsonp:"callback",jsonpCallback:"handleResponse",success:function(a){$.post("/res/douban.php",{rating:a.rating.average,stars:a.rating.stars,ratings_count:a.ratings_count,id:id})}})}});var _hmt=_hmt||[];!function(){var b,a=document.createElement("script");a.src="https://hm.baidu.com/hm.js?9c2ce2628402215a484287d2d9192405",b=document.getElementsByTagName("script")[0],b.parentNode.insertBefore(a,b)}(),function(){var c,a=document.createElement("script");window.location.protocol.split(":")[0],a.src="https://zz.bdstatic.com/linksubmit/push.js",c=document.getElementsByTagName("script")[0],c.parentNode.insertBefore(a,c)}(),function(){var b,a=document.createElement("script");a.src="https://w.cnzz.com/c.php?id=1274972172&async=1",b=document.getElementsByTagName("script")[0],b.parentNode.insertBefore(a,b)}();