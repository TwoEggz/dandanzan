﻿function play(a){var c,d,e,b=window.location.host;"www.dandanzan.com"!=b&&(top.location.href="https://www.dandanzan.com"),m3u8=urls[a],c=document.getElementById("video"),Hls.isSupported()?(d={maxBufferSize:0,maxBufferLength:600,fragLoadingMaxRetry:10},e=new Hls(d),e.loadSource(m3u8),e.attachMedia(c),e.on(Hls.Events.MANIFEST_PARSED,function(){c.play()}),e.once(Hls.Events.ERROR,function(a,b){switch(b.details){case"manifestLoadError":$.post("/e/enews/index.php",{enews:"AddError",id:infoid,classid:classid,cid:1,errortext:"m3u8加载失败 "+m3u8});break;case"keyLoadError":$.post("/e/enews/index.php",{enews:"AddError",id:infoid,classid:classid,cid:1,errortext:"key加载失败 "+m3u8});break;case"manifestParsingError":$.post("/e/enews/index.php",{enews:"AddError",id:infoid,classid:classid,cid:1,errortext:"m3u8清单错误 "+m3u8})}})):c.canPlayType("application/vnd.apple.mpegurl")&&(c.src=m3u8,c.addEventListener("loadedmetadata",function(){c.play()}))}function so(){var a=$(".sinput").val();a=a.replace(/^\s+|\s+$/g,""),$.post("/res/so.php",{keyboard:a}),a=$.t2s(a),$(".searchform").attr("action","/so/"+a+"-"+a+"--onclick.html"),$(".searchform").submit()}function imgError(a){$.post("/e/enews/index.php",{enews:"AddError",id:infoid,classid:classid,cid:2,errortext:"图片无法加载 "+a})}$(document).ready(function(){var a,b;if(window.movie=window.movie||{},movie.bd=$("body"),movie.shareimage=$('meta[property="og:image"]').attr("content"),movie.click="click",$(".nav-on").on(movie.click,function(){movie.bd.toggleClass("nav-active")}),$(".nav-mask").on(movie.click,function(){movie.bd.removeClass("nav-active")}),$(".searchstart-on").on(movie.click,function(){movie.bd.addClass("searchform-active"),$(".sinput").focus()}),$(".searchstart-off").on(movie.click,function(){movie.bd.removeClass("searchform-active")}),$('[etap="all_lists"]').on(movie.click,function(){$(this).parent().next("ul").slideToggle(400)}),movie.bd.append('<div class="rollbar"><div class="rollbar-item rollbar-item-top" etap="to_top" title="回顶部"><i class="fa">&#xe606;</i></div></div>'),a=$(".rollbar-item-top"),$(window).scroll(function(){var b=document.documentElement.scrollTop+document.body.scrollTop;b>200?a.fadeIn():a.fadeOut()}),$('[etap="to_top"]').on(movie.click,function(){$("html,body").animate({scrollTop:0},300)}),b={url:document.URL,pic:movie.shareimage,title:document.title||"",desc:$('meta[name="description"]').length?$('meta[name="description"]').attr("content"):""},$(".share-weixin").each(function(){$(this).find(".share-popover").length||($(this).append('<span class="share-popover"><span class="share-popover-inner" id="weixin-qrcode"></span></span>'),$("#weixin-qrcode").qrcode({width:80,height:80,text:b.url}))}),$('[etap="share"]').on(movie.click,function(){var a=$(this),c=a.data("share"),d="";switch(c){case"qq":d="http://connect.qq.com/widget/shareqq/index.html?url="+b.url+"&desc="+b.desc+"&summary="+b.title+"&site=zeshlife&pics="+b.pic;break;case"weibo":d="http://service.weibo.com/share/share.php?title="+b.title+"&url="+b.url+"&source=bookmark&pic="+b.pic;break;case"douban":d="http://www.douban.com/share/service?image="+b.pic+"&href="+b.url+"&name="+b.title+"&text="+b.desc;break;case"qzone":d="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+b.url+"&title="+b.title+"&desc="+b.desc+"&pics="+b.pic;break;case"tqq":d="http://share.v.t.qq.com/index.php?c=share&a=index&url="+b.url+"&title="+b.title;break;case"facebook":d="https://www.facebook.com/share.php?u="+b.url+"&t="+b.title;break;case"twitter":d="https://twitter.com/intent/tweet?text="+b.title+b.url;break;case"linkedin":d="https://www.linkedin.com/shareArticle?mini=true&ro=true&armin=armin&url="+b.url+"&title="+b.title+"&summary="+b.desc}a.attr("href")||a.attr("target")||a.attr("href",d).attr("target","_blank")}),$("#video").length>0){for($(function(){$(".playlist ul li").click(function(){$(".playlist ul li").eq($(this).index()).addClass("on").siblings().removeClass("on")})}),line=links.split("|"),urls=new Array,videolist="",len=line.length-1,css="",i=0;len>i;i++)url=line[i].split("$"),urls[i]=url[1],i==len-1&&(css=" class='on'"),videolist+="<li"+css+"><a href='javascript:;' onclick='play("+i+");'>"+url[0]+"</a></li>";$(".playlist ul").html(videolist),play(len-1),0!=id&&1!=id&&2!=id&&1==rating&&$.ajax({url:"https://api.douban.com/v2/movie/subject/"+id+"?apikey=0b2bdeda43b5688921839c8ecb20399b",type:"GET",dataType:"jsonp",jsonp:"callback",jsonpCallback:"handleResponse",success:function(a){var b=$('meta[property="og:video:score"]').attr("content");b!=a.rating.average&&$.post("/res/douban.php",{rating:a.rating.average,stars:a.rating.stars,ratings_count:a.ratings_count,id:id})}})}});var _hmt=_hmt||[];!function(){var b,a=document.createElement("script");a.src="https://hm.baidu.com/hm.js?9c2ce2628402215a484287d2d9192405",b=document.getElementsByTagName("script")[0],b.parentNode.insertBefore(a,b)}(),function(){var c,a=document.createElement("script");window.location.protocol.split(":")[0],a.src="https://zz.bdstatic.com/linksubmit/push.js",c=document.getElementsByTagName("script")[0],c.parentNode.insertBefore(a,c)}(),function(){var b,a=document.createElement("script");a.src="https://w.cnzz.com/c.php?id=1274972172&async=1",b=document.getElementsByTagName("script")[0],b.parentNode.insertBefore(a,b)}();