function play(a,b){var c,d,e;$.isEmptyObject(hls)||hls.destroy(),m3u8=urls[a][b],c=document.getElementById("video"),Hls.isSupported()&&-1==m3u8.indexOf(".mp4")?(d=new p2pml.hlsjs.Engine,d.loader.settings.cachedSegmentsCount=2e3,d.loader.settings.cachedSegmentExpiration=2e7,d.loader.settings.requiredSegmentsPriority=100,d.loader.settings.simultaneousHttpDownloads=10,d.loader.settings.httpUseRanges=!0,d.loader.settings.httpFailedSegmentTimeout=1e3,d.loader.settings.p2pSegmentDownloadTimeout=1e3,d.loader.settings.httpDownloadInitialTimeout=1e3,d.loader.settings.httpDownloadInitialTimeoutPerSegment=1e3,d.loader.settings.trackerAnnounce=["wss://tracker.openwebtorrent.com","wss://tracker.btorrent.xyz","wss://tracker.fastcast.nz","wss://tracker.novage.com.ua"],e={maxBufferLength:9999999999999,maxBufferSize:9999999999999,maxMaxBufferLength:9999999999999,fragLoadingTimeOut:1e3,manifestLoadingTimeOut:1e3,levelLoadingTimeOut:1e3,levelLoadingMaxRetry:30,levelLoadingMaxRetryTimeout:1e3,fragLoadingMaxRetry:30,fragLoadingMaxRetryTimeout:1e3,manifestLoadingMaxRetry:30,manifestLoadingRetryDelay:1e3,liveSyncDurationCount:10,loader:d.createLoaderClass()},hls=new Hls(e),p2pml.hlsjs.initHlsJsPlayer(hls),hls.loadSource(m3u8),hls.attachMedia(c),hls.on(Hls.Events.MANIFEST_PARSED,function(){c.play()}),hls.once(Hls.Events.ERROR,function(c,d){switch(d.details){case"manifestLoadError":errorcount++,30>errorcount&&play(a,b),30==errorcount&&($.post("/e/enews/index.php",{enews:"AddError",id:infoid,classid:classid,cid:1,errortext:"m3u8加载失败 "+m3u8}),hls.destroy());break;case"keyLoadError":errorcount++,play(a,b),30==errorcount&&($.post("/e/enews/index.php",{enews:"AddError",id:infoid,classid:classid,cid:1,errortext:"key加载失败 "+m3u8}),hls.destroy());break;case"manifestParsingError":$.post("/e/enews/index.php",{enews:"AddError",id:infoid,classid:classid,cid:1,errortext:"m3u8清单错误 "+m3u8}),hls.destroy()}})):(c.canPlayType("application/vnd.apple.mpegurl")||-1!=m3u8.indexOf(".mp4"))&&(c.src=m3u8,c.addEventListener("loadedmetadata",function(){c.play()}))}function so(){var a=$(".sinput").val();a=a.replace(/^\s+|\s+$/g,""),$.post("/res/so.php",{keyboard:a}),a=$.t2s(a),$(".searchform").attr("action","/so/"+a+"-"+a+"--onclick.html"),$(".searchform").submit()}function imgError(a){$.post("/e/enews/index.php",{enews:"AddError",id:infoid,classid:classid,cid:2,errortext:"图片无法加载 "+a})}function gtag(){dataLayer.push(arguments)}var CryptoJSAesJson,errorcount,hls,isChinaPattern,imgid,pcads,pcad,dbs,db,xtbs,xtb,CryptoJS=CryptoJS||function(a,b){var m,c={},d=c.lib={},e=function(){},f=d.Base={extend:function(a){e.prototype=this;var b=new e;return a&&b.mixIn(a),b.hasOwnProperty("init")||(b.init=function(){b.$super.init.apply(this,arguments)}),b.init.prototype=b,b.$super=this,b},create:function(){var a=this.extend();return a.init.apply(a,arguments),a},init:function(){},mixIn:function(a){for(var b in a)a.hasOwnProperty(b)&&(this[b]=a[b]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},g=d.WordArray=f.extend({init:function(a,c){a=this.words=a||[],this.sigBytes=c!=b?c:4*a.length},toString:function(a){return(a||i).stringify(this)},concat:function(a){var e,b=this.words,c=a.words,d=this.sigBytes;if(a=a.sigBytes,this.clamp(),d%4)for(e=0;a>e;e++)b[d+e>>>2]|=(255&c[e>>>2]>>>24-8*(e%4))<<24-8*((d+e)%4);else if(65535<c.length)for(e=0;a>e;e+=4)b[d+e>>>2]=c[e>>>2];else b.push.apply(b,c);return this.sigBytes+=a,this},clamp:function(){var b=this.words,c=this.sigBytes;b[c>>>2]&=4294967295<<32-8*(c%4),b.length=a.ceil(c/4)},clone:function(){var a=f.clone.call(this);return a.words=this.words.slice(0),a},random:function(b){for(var c=[],d=0;b>d;d+=4)c.push(0|4294967296*a.random());return new g.init(c,b)}}),h=c.enc={},i=h.Hex={stringify:function(a){var c,d,e,b=a.words;for(a=a.sigBytes,c=[],d=0;a>d;d++)e=255&b[d>>>2]>>>24-8*(d%4),c.push((e>>>4).toString(16)),c.push((15&e).toString(16));return c.join("")},parse:function(a){for(var b=a.length,c=[],d=0;b>d;d+=2)c[d>>>3]|=parseInt(a.substr(d,2),16)<<24-4*(d%8);return new g.init(c,b/2)}},j=h.Latin1={stringify:function(a){var c,d,b=a.words;for(a=a.sigBytes,c=[],d=0;a>d;d++)c.push(String.fromCharCode(255&b[d>>>2]>>>24-8*(d%4)));return c.join("")},parse:function(a){for(var b=a.length,c=[],d=0;b>d;d++)c[d>>>2]|=(255&a.charCodeAt(d))<<24-8*(d%4);return new g.init(c,b)}},k=h.Utf8={stringify:function(a){try{return decodeURIComponent(escape(j.stringify(a)))}catch(b){throw Error("Malformed UTF-8 data")}},parse:function(a){return j.parse(unescape(encodeURIComponent(a)))}},l=d.BufferedBlockAlgorithm=f.extend({reset:function(){this._data=new g.init,this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=k.parse(a)),this._data.concat(a),this._nDataBytes+=a.sigBytes},_process:function(b){var i,c=this._data,d=c.words,e=c.sigBytes,f=this.blockSize,h=e/(4*f);if(h=b?a.ceil(h):a.max((0|h)-this._minBufferSize,0),b=h*f,e=a.min(4*b,e),b){for(i=0;b>i;i+=f)this._doProcessBlock(d,i);i=d.splice(0,b),c.sigBytes-=e}return new g.init(i,e)},clone:function(){var a=f.clone.call(this);return a._data=this._data.clone(),a},_minBufferSize:0});return d.Hasher=l.extend({cfg:f.extend(),init:function(a){this.cfg=this.cfg.extend(a),this.reset()},reset:function(){l.reset.call(this),this._doReset()},update:function(a){return this._append(a),this._process(),this},finalize:function(a){return a&&this._append(a),this._doFinalize()},blockSize:16,_createHelper:function(a){return function(b,c){return new a.init(c).finalize(b)}},_createHmacHelper:function(a){return function(b,c){return new m.HMAC.init(a,c).finalize(b)}}}),m=c.algo={},c}(Math);!function(){var a=CryptoJS,b=a.lib.WordArray;a.enc.Base64={stringify:function(a){var e,f,g,b=a.words,c=a.sigBytes,d=this._map;for(a.clamp(),a=[],e=0;c>e;e+=3)for(f=(255&b[e>>>2]>>>24-8*(e%4))<<16|(255&b[e+1>>>2]>>>24-8*((e+1)%4))<<8|255&b[e+2>>>2]>>>24-8*((e+2)%4),g=0;4>g&&c>e+.75*g;g++)a.push(d.charAt(63&f>>>6*(3-g)));if(b=d.charAt(64))for(;a.length%4;)a.push(b);return a.join("")},parse:function(a){var f,g,h,i,c=a.length,d=this._map,e=d.charAt(64);for(e&&(e=a.indexOf(e),-1!=e&&(c=e)),e=[],f=0,g=0;c>g;g++)g%4&&(h=d.indexOf(a.charAt(g-1))<<2*(g%4),i=d.indexOf(a.charAt(g))>>>6-2*(g%4),e[f>>>2]|=(h|i)<<24-8*(f%4),f++);return b.create(e,f)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),function(a){function b(a,b,c,d,e,f,g){return a=a+(b&c|~b&d)+e+g,(a<<f|a>>>32-f)+b}function c(a,b,c,d,e,f,g){return a=a+(b&d|c&~d)+e+g,(a<<f|a>>>32-f)+b}function d(a,b,c,d,e,f,g){return a=a+(b^c^d)+e+g,(a<<f|a>>>32-f)+b}function e(a,b,c,d,e,f,g){return a=a+(c^(b|~d))+e+g,(a<<f|a>>>32-f)+b}for(var f=CryptoJS,g=f.lib,h=g.WordArray,i=g.Hasher,g=f.algo,j=[],k=0;64>k;k++)j[k]=0|4294967296*a.abs(a.sin(k+1));g=g.MD5=i.extend({_doReset:function(){this._hash=new h.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(a,f){var g,h,i,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B;for(g=0;16>g;g++)h=f+g,i=a[h],a[h]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8);g=this._hash.words,h=a[f+0],i=a[f+1],k=a[f+2],l=a[f+3],m=a[f+4],n=a[f+5],o=a[f+6],p=a[f+7],q=a[f+8],r=a[f+9],s=a[f+10],t=a[f+11],u=a[f+12],v=a[f+13],w=a[f+14],x=a[f+15],y=g[0],z=g[1],A=g[2],B=g[3],y=b(y,z,A,B,h,7,j[0]),B=b(B,y,z,A,i,12,j[1]),A=b(A,B,y,z,k,17,j[2]),z=b(z,A,B,y,l,22,j[3]),y=b(y,z,A,B,m,7,j[4]),B=b(B,y,z,A,n,12,j[5]),A=b(A,B,y,z,o,17,j[6]),z=b(z,A,B,y,p,22,j[7]),y=b(y,z,A,B,q,7,j[8]),B=b(B,y,z,A,r,12,j[9]),A=b(A,B,y,z,s,17,j[10]),z=b(z,A,B,y,t,22,j[11]),y=b(y,z,A,B,u,7,j[12]),B=b(B,y,z,A,v,12,j[13]),A=b(A,B,y,z,w,17,j[14]),z=b(z,A,B,y,x,22,j[15]),y=c(y,z,A,B,i,5,j[16]),B=c(B,y,z,A,o,9,j[17]),A=c(A,B,y,z,t,14,j[18]),z=c(z,A,B,y,h,20,j[19]),y=c(y,z,A,B,n,5,j[20]),B=c(B,y,z,A,s,9,j[21]),A=c(A,B,y,z,x,14,j[22]),z=c(z,A,B,y,m,20,j[23]),y=c(y,z,A,B,r,5,j[24]),B=c(B,y,z,A,w,9,j[25]),A=c(A,B,y,z,l,14,j[26]),z=c(z,A,B,y,q,20,j[27]),y=c(y,z,A,B,v,5,j[28]),B=c(B,y,z,A,k,9,j[29]),A=c(A,B,y,z,p,14,j[30]),z=c(z,A,B,y,u,20,j[31]),y=d(y,z,A,B,n,4,j[32]),B=d(B,y,z,A,q,11,j[33]),A=d(A,B,y,z,t,16,j[34]),z=d(z,A,B,y,w,23,j[35]),y=d(y,z,A,B,i,4,j[36]),B=d(B,y,z,A,m,11,j[37]),A=d(A,B,y,z,p,16,j[38]),z=d(z,A,B,y,s,23,j[39]),y=d(y,z,A,B,v,4,j[40]),B=d(B,y,z,A,h,11,j[41]),A=d(A,B,y,z,l,16,j[42]),z=d(z,A,B,y,o,23,j[43]),y=d(y,z,A,B,r,4,j[44]),B=d(B,y,z,A,u,11,j[45]),A=d(A,B,y,z,x,16,j[46]),z=d(z,A,B,y,k,23,j[47]),y=e(y,z,A,B,h,6,j[48]),B=e(B,y,z,A,p,10,j[49]),A=e(A,B,y,z,w,15,j[50]),z=e(z,A,B,y,n,21,j[51]),y=e(y,z,A,B,u,6,j[52]),B=e(B,y,z,A,l,10,j[53]),A=e(A,B,y,z,s,15,j[54]),z=e(z,A,B,y,i,21,j[55]),y=e(y,z,A,B,q,6,j[56]),B=e(B,y,z,A,x,10,j[57]),A=e(A,B,y,z,o,15,j[58]),z=e(z,A,B,y,v,21,j[59]),y=e(y,z,A,B,m,6,j[60]),B=e(B,y,z,A,t,10,j[61]),A=e(A,B,y,z,k,15,j[62]),z=e(z,A,B,y,r,21,j[63]),g[0]=0|g[0]+y,g[1]=0|g[1]+z,g[2]=0|g[2]+A,g[3]=0|g[3]+B},_doFinalize:function(){var f,b=this._data,c=b.words,d=8*this._nDataBytes,e=8*b.sigBytes;for(c[e>>>5]|=128<<24-e%32,f=a.floor(d/4294967296),c[(e+64>>>9<<4)+15]=16711935&(f<<8|f>>>24)|4278255360&(f<<24|f>>>8),c[(e+64>>>9<<4)+14]=16711935&(d<<8|d>>>24)|4278255360&(d<<24|d>>>8),b.sigBytes=4*(c.length+1),this._process(),b=this._hash,c=b.words,d=0;4>d;d++)e=c[d],c[d]=16711935&(e<<8|e>>>24)|4278255360&(e<<24|e>>>8);return b},clone:function(){var a=i.clone.call(this);return a._hash=this._hash.clone(),a}}),f.MD5=i._createHelper(g),f.HmacMD5=i._createHmacHelper(g)}(Math),function(){var a=CryptoJS,b=a.lib,c=b.Base,d=b.WordArray,b=a.algo,e=b.EvpKDF=c.extend({cfg:c.extend({keySize:4,hasher:b.MD5,iterations:1}),init:function(a){this.cfg=this.cfg.extend(a)},compute:function(a,b){var c,e,f,g,h,i,j;for(c=this.cfg,e=c.hasher.create(),f=d.create(),g=f.words,h=c.keySize,c=c.iterations;g.length<h;){for(i&&e.update(i),i=e.update(a).finalize(b),e.reset(),j=1;c>j;j++)i=e.finalize(i),e.reset();f.concat(i)}return f.sigBytes=4*h,f}});a.EvpKDF=function(a,b,c){return e.create(c).compute(a,b)}}(),CryptoJS.lib.Cipher||function(a){var j,k,l,m,n,o,b=CryptoJS,c=b.lib,d=c.Base,e=c.WordArray,f=c.BufferedBlockAlgorithm,g=b.enc.Base64,h=b.algo.EvpKDF,i=c.Cipher=f.extend({cfg:d.extend(),createEncryptor:function(a,b){return this.create(this._ENC_XFORM_MODE,a,b)},createDecryptor:function(a,b){return this.create(this._DEC_XFORM_MODE,a,b)},init:function(a,b,c){this.cfg=this.cfg.extend(c),this._xformMode=a,this._key=b,this.reset()},reset:function(){f.reset.call(this),this._doReset()},process:function(a){return this._append(a),this._process()},finalize:function(a){return a&&this._append(a),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(a){return{encrypt:function(b,c,d){return("string"==typeof c?o:n).encrypt(a,b,c,d)},decrypt:function(b,c,d){return("string"==typeof c?o:n).decrypt(a,b,c,d)}}}});c.StreamCipher=i.extend({_doFinalize:function(){return this._process(!0)},blockSize:1}),j=b.mode={},k=function(b,c,d){var f,e=this._iv;for(e?this._iv=a:e=this._prevBlock,f=0;d>f;f++)b[c+f]^=e[f]},l=(c.BlockCipherMode=d.extend({createEncryptor:function(a,b){return this.Encryptor.create(a,b)},createDecryptor:function(a,b){return this.Decryptor.create(a,b)},init:function(a,b){this._cipher=a,this._iv=b}})).extend(),l.Encryptor=l.extend({processBlock:function(a,b){var c=this._cipher,d=c.blockSize;k.call(this,a,b,d),c.encryptBlock(a,b),this._prevBlock=a.slice(b,b+d)}}),l.Decryptor=l.extend({processBlock:function(a,b){var c=this._cipher,d=c.blockSize,e=a.slice(b,b+d);c.decryptBlock(a,b),k.call(this,a,b,d),this._prevBlock=e}}),j=j.CBC=l,l=(b.pad={}).Pkcs7={pad:function(a,b){for(var c=4*b,c=c-a.sigBytes%c,d=c<<24|c<<16|c<<8|c,f=[],g=0;c>g;g+=4)f.push(d);c=e.create(f,c),a.concat(c)},unpad:function(a){a.sigBytes-=255&a.words[a.sigBytes-1>>>2]}},c.BlockCipher=i.extend({cfg:i.cfg.extend({mode:j,padding:l}),reset:function(){var a,b,c;i.reset.call(this),a=this.cfg,b=a.iv,a=a.mode,this._xformMode==this._ENC_XFORM_MODE?c=a.createEncryptor:(c=a.createDecryptor,this._minBufferSize=1),this._mode=c.call(a,this,b&&b.words)},_doProcessBlock:function(a,b){this._mode.processBlock(a,b)},_doFinalize:function(){var b,a=this.cfg.padding;return this._xformMode==this._ENC_XFORM_MODE?(a.pad(this._data,this.blockSize),b=this._process(!0)):(b=this._process(!0),a.unpad(b)),b},blockSize:4}),m=c.CipherParams=d.extend({init:function(a){this.mixIn(a)},toString:function(a){return(a||this.formatter).stringify(this)}}),j=(b.format={}).OpenSSL={stringify:function(a){var b=a.ciphertext;return a=a.salt,(a?e.create([1398893684,1701076831]).concat(a).concat(b):b).toString(g)},parse:function(a){var b,c;return a=g.parse(a),b=a.words,1398893684==b[0]&&1701076831==b[1]&&(c=e.create(b.slice(2,4)),b.splice(0,4),a.sigBytes-=16),m.create({ciphertext:a,salt:c})}},n=c.SerializableCipher=d.extend({cfg:d.extend({format:j}),encrypt:function(a,b,c,d){d=this.cfg.extend(d);var e=a.createEncryptor(c,d);return b=e.finalize(b),e=e.cfg,m.create({ciphertext:b,key:c,iv:e.iv,algorithm:a,mode:e.mode,padding:e.padding,blockSize:a.blockSize,formatter:d.format})},decrypt:function(a,b,c,d){return d=this.cfg.extend(d),b=this._parse(b,d.format),a.createDecryptor(c,d).finalize(b.ciphertext)},_parse:function(a,b){return"string"==typeof a?b.parse(a,this):a}}),b=(b.kdf={}).OpenSSL={execute:function(a,b,c,d){return d||(d=e.random(8)),a=h.create({keySize:b+c}).compute(a,d),c=e.create(a.words.slice(b),4*c),a.sigBytes=4*b,m.create({key:a,iv:c,salt:d})}},o=c.PasswordBasedCipher=n.extend({cfg:n.cfg.extend({kdf:b}),encrypt:function(a,b,c,d){return d=this.cfg.extend(d),c=d.kdf.execute(c,a.keySize,a.ivSize),d.iv=c.iv,a=n.encrypt.call(this,a,b,c.key,d),a.mixIn(c),a},decrypt:function(a,b,c,d){return d=this.cfg.extend(d),b=this._parse(b,d.format),c=d.kdf.execute(c,a.keySize,a.ivSize,b.salt),d.iv=c.iv,n.decrypt.call(this,a,b,c.key,d)}})}(),function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;for(a=CryptoJS,b=a.lib.BlockCipher,c=a.algo,d=[],e=[],f=[],g=[],h=[],i=[],j=[],k=[],l=[],m=[],n=[],o=0;256>o;o++)n[o]=128>o?o<<1:283^o<<1;for(p=0,q=0,o=0;256>o;o++)r=q^q<<1^q<<2^q<<3^q<<4,r=99^(r>>>8^255&r),d[p]=r,e[r]=p,s=n[p],t=n[s],u=n[t],v=257*n[r]^16843008*r,f[p]=v<<24|v>>>8,g[p]=v<<16|v>>>16,h[p]=v<<8|v>>>24,i[p]=v,v=16843009*u^65537*t^257*s^16843008*p,j[r]=v<<24|v>>>8,k[r]=v<<16|v>>>16,l[r]=v<<8|v>>>24,m[r]=v,p?(p=s^n[n[n[u^s]]],q^=n[n[q]]):p=q=1;w=[0,1,2,4,8,16,32,64,128,27,54],c=c.AES=b.extend({_doReset:function(){var a,b,c,e,f,g;for(a=this._key,b=a.words,c=a.sigBytes/4,a=4*((this._nRounds=c+6)+1),e=this._keySchedule=[],f=0;a>f;f++)c>f?e[f]=b[f]:(g=e[f-1],f%c?c>6&&4==f%c&&(g=d[g>>>24]<<24|d[255&g>>>16]<<16|d[255&g>>>8]<<8|d[255&g]):(g=g<<8|g>>>24,g=d[g>>>24]<<24|d[255&g>>>16]<<16|d[255&g>>>8]<<8|d[255&g],g^=w[0|f/c]<<24),e[f]=e[f-c]^g);for(b=this._invKeySchedule=[],c=0;a>c;c++)f=a-c,g=c%4?e[f]:e[f-4],b[c]=4>c||4>=f?g:j[d[g>>>24]]^k[d[255&g>>>16]]^l[d[255&g>>>8]]^m[d[255&g]]},encryptBlock:function(a,b){this._doCryptBlock(a,b,this._keySchedule,f,g,h,i,d)},decryptBlock:function(a,b){var c=a[b+1];a[b+1]=a[b+3],a[b+3]=c,this._doCryptBlock(a,b,this._invKeySchedule,j,k,l,m,e),c=a[b+1],a[b+1]=a[b+3],a[b+3]=c},_doCryptBlock:function(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;for(i=this._nRounds,j=a[b]^c[0],k=a[b+1]^c[1],l=a[b+2]^c[2],m=a[b+3]^c[3],n=4,o=1;i>o;o++)p=d[j>>>24]^e[255&k>>>16]^f[255&l>>>8]^g[255&m]^c[n++],q=d[k>>>24]^e[255&l>>>16]^f[255&m>>>8]^g[255&j]^c[n++],r=d[l>>>24]^e[255&m>>>16]^f[255&j>>>8]^g[255&k]^c[n++],m=d[m>>>24]^e[255&j>>>16]^f[255&k>>>8]^g[255&l]^c[n++],j=p,k=q,l=r;p=(h[j>>>24]<<24|h[255&k>>>16]<<16|h[255&l>>>8]<<8|h[255&m])^c[n++],q=(h[k>>>24]<<24|h[255&l>>>16]<<16|h[255&m>>>8]<<8|h[255&j])^c[n++],r=(h[l>>>24]<<24|h[255&m>>>16]<<16|h[255&j>>>8]<<8|h[255&k])^c[n++],m=(h[m>>>24]<<24|h[255&j>>>16]<<16|h[255&k>>>8]<<8|h[255&l])^c[n++],a[b]=p,a[b+1]=q,a[b+2]=r,a[b+3]=m},keySize:8}),a.AES=b._createHelper(c)}(),CryptoJSAesJson={stringify:function(a){var b={ct:a.ciphertext.toString(CryptoJS.enc.Base64)};return a.iv&&(b.iv=a.iv.toString()),a.salt&&(b.s=a.salt.toString()),JSON.stringify(b).replace(/\s/g,"")},parse:function(a){var b=JSON.parse(a),c=CryptoJS.lib.CipherParams.create({ciphertext:CryptoJS.enc.Base64.parse(b.ct)});return b.iv&&(c.iv=CryptoJS.enc.Hex.parse(b.iv)),b.s&&(c.salt=CryptoJS.enc.Hex.parse(b.s)),c}},$(document).ready(function(){function r(a){function c(a){var d,e;return b[g("0x96","f%Pm")](typeof a,b[g("0x97","m)Jm")])?(d=function(){var a={NaRQt:function(a,b){return a===b},yWXat:g("0x98","($D0"),MvpIt:function(a,b){return a(b)}};if(a[g("0x99","WCqI")](a[g("0x9a","5AFK")],a[g("0x9b","7pmO")]))for(;;);else a[g("0x9c",")4Wd")](result,"0")},b[g("0x9d","V^3I")](d)):b[g("0x9e","($D0")](b[g("0x9f","OYIm")],b[g("0xa0","^51O")])?(e=function(){for(;;);},b[g("0xa1","aYZG")](e)):(b[g("0xa2","f%Pm")](b[g("0xa3","DsmM")]("",b[g("0xa4","7pmO")](a,a))[b[g("0xa5","^)Qt")]],1)||b[g("0xa6","^51O")](b[g("0xa7","F]ty")](a,20),0),b[g("0xa8","oQ4#")](c,++a),void 0)}var b={EjAUo:function(a,b){return a===b},voVPM:g("0x8f","^)Qt"),iyFzd:function(a){return a()},rtLfC:function(a,b){return a!==b},OJmki:g("0x90","HNtT"),pYgwA:function(a,b){return a!==b},UvNdi:function(a,b){return a+b},qvPKV:function(a,b){return a/b},dxatY:g("0x91","Aq$a"),eVzsj:function(a,b){return a===b},nOhCY:function(a,b){return a%b},KRpAi:function(a,b){return a(b)},hXpzJ:g("0x92","3FDp"),oneYV:g("0x93","jX1k"),eQsMZ:function(a,b){return a!==b},lvQku:g("0x94","3(&V"),oOEGf:g("0x95","^)Qt")};try{if(a){if(!b[g("0xa9","WCqI")](b[g("0xaa","RT(X")],b[g("0xab","gr&I")]))return c;console[g("0xb","vZ*L")](_8366)}else b[g("0xac","@A#%")](b[g("0xad","R8*@")],b[g("0xae","@A#%")])&&b[g("0xaf","HNtT")](c,0)}catch(d){}}var a,b,c,d,f,g,h,l,m,n,o,p;if(window.movie=window.movie||{},movie.bd=$("body"),movie.shareimage=$('meta[property="og:image"]').attr("content"),movie.click="click",a=window.location.host,"www.dandanzan.com"!=a&&($("body").html('<a href="https://www.dandanzan.com" style="display: flex;justify-content: center;font-size: 20pt;">点击进入蛋蛋赞影院</a>'),top.location.href="https://www.dandanzan.com"),$(".nav-on").on(movie.click,function(){movie.bd.toggleClass("nav-active")}),$(".nav-mask").on(movie.click,function(){movie.bd.removeClass("nav-active")}),$(".searchstart-on").on(movie.click,function(){movie.bd.addClass("searchform-active"),$(".sinput").focus()}),$(".searchstart-off").on(movie.click,function(){movie.bd.removeClass("searchform-active")}),$('[etap="all_lists"]').on(movie.click,function(){$(this).parent().next("ul").slideToggle(400)}),movie.bd.append('<div class="rollbar"><div class="rollbar-item rollbar-item-top" etap="to_top" title="回顶部"><i class="fa">&#xe606;</i></div></div>'),b=$(".rollbar-item-top"),$(window).scroll(function(){var a=document.documentElement.scrollTop+document.body.scrollTop;a>200?b.fadeIn():b.fadeOut()}),$('[etap="to_top"]').on(movie.click,function(){$("html,body").animate({scrollTop:0},300)}),c={url:document.URL,pic:movie.shareimage,title:document.title||"",desc:$('meta[name="description"]').length?$('meta[name="description"]').attr("content"):""},$(".share-weixin").each(function(){$(this).find(".share-popover").length||($(this).append('<span class="share-popover"><span class="share-popover-inner" id="weixin-qrcode"></span></span>'),$("#weixin-qrcode").qrcode({width:80,height:80,text:c.url}))}),$('[etap="share"]').on(movie.click,function(){var a=$(this),b=a.data("share"),d="";switch(b){case"qq":d="http://connect.qq.com/widget/shareqq/index.html?url="+c.url+"&desc="+c.desc+"&summary="+c.title+"&site=zeshlife&pics="+c.pic;break;case"weibo":d="http://service.weibo.com/share/share.php?title="+c.title+"&url="+c.url+"&source=bookmark&pic="+c.pic;break;case"douban":d="http://www.douban.com/share/service?image="+c.pic+"&href="+c.url+"&name="+c.title+"&text="+c.desc;break;case"qzone":d="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+c.url+"&title="+c.title+"&desc="+c.desc+"&pics="+c.pic;break;case"tqq":d="http://share.v.t.qq.com/index.php?c=share&a=index&url="+c.url+"&title="+c.title;break;case"facebook":d="https://www.facebook.com/share.php?u="+c.url+"&t="+c.title;break;case"twitter":d="https://twitter.com/intent/tweet?text="+c.title+c.url;break;case"linkedin":d="https://www.linkedin.com/shareArticle?mini=true&ro=true&armin=armin&url="+c.url+"&title="+c.title+"&summary="+c.desc}a.attr("href")||a.attr("target")||a.attr("href",d).attr("target","_blank")}),$("#video").length>0){$(function(){$(".playlist ul li").click(function(){$(".playlist ul li").removeClass("on"),$(this).addClass("on")})}),d="sojson.v5",f=["IcOswo0=","wrIQPGHCoA==","w7HCm1/ChsK1","w4bCmCrClRU=","Ewx5wpLDoQ==","YCXDuRco","McO/woXCucKu","w4/CosO9wrbCvw==","wpt0w5TDhMOH","wrwrwrrCuww=","w4jCpkPCqMKo","EEolwr0q","w47CuSLCvzc=","w5c5DzzDpg==","wrFow4PDnMOE","w57Dt8OwZAg=","KcObKsO7Xw==","wpknFEPCvg==","w6siEzgM","w67CpcOqw4rCow==","w4lDJlxF","cMOowqYdw4M=","w4NdEFZ5","YQnCoMO+QA==","OMKQHmQ8RMOWTnw=","JcKAG8KRQA==","w5LCoBHDmg8Kw7w4wpcNECVwOsKxEcOA","JSRYUUA=","w7zCpAXCsyk=","w6zCo2rChsKow4I=","MWDDpcKkWg==","IlLCjgYCwojCtA==","FMO/IhM=","TjrCsGbDgMK0","wqvDucKBRSNX","w4fDk8Ko","w77CixPCvyc=","dUBcwqVxwrtBESYuwrTDg8KCNV0=","w67CuWnChMK1w4U0wqk6wofDqsOWdVpjwqM=","CsObK8OTFMKVPFxlwrtlQiEywqDCp2zDrsOmw7R9CMK0w6DCj8KUw5DColfDq1Blwo7DkcOGC0bDocKjAHc0A0bCi8KEw5vCgsOCGFxUw4PCh8KBw4AiwrHCqBFWFA==","VDHCuGA=","wpRWLsKcAA==","YsKCWm14","KxRtwr7DswLDoMK/LA==","w6E2BsKEwqp+","QMOew7YBHMKwwobCtg==","w6AALQ==","wrrCvsOV","aT8jaTdtQUjCunISw4PDlQ==","JkDDhQ==","wrFKLQ==","w4lgIQ==","w4XCsATDqRnCr8K4Z1k=","54qF5p2s5Y2w776BwofCouS+nOWspOadmuW8tuerm++/mei/vuitm+aUg+aNjuaLheS7juebh+W1ruS+sg==","5YiS6ZiQ54uL5p665YyG77+TIjzkvLTlrq3mnrnlvZLnqLU=","Gilnwr7DsQ==","EcO5NsOTQg==","eDnCoXzDuQ==","wqrDvsKbcgE=","WMK0W21K","LBZlfEU=","wr12w53DucO9","HTBDwrnDmA==","wogVw5bDncKf","w77Co2l8w6c=","KsO6wobCscKU","B3nDqsKDQg==","w688A8KYwp4=","D8OndcKPFw==","bnTChyFv","w7XDjcOKYxg=","LsOdI8O/Uw==","O8OlGTlu","w67DhcK6D8KZ","w4zCqwjDqiU=","wpwtw4/DlcKh","ZW/CiRNO","w7Q5JMOXbQ==","w6LCr8OMUT8=","w7rCiMOL","5Ymy6ZiI54qy5pyL5Y6c776lacO75L6r5a+Y5pyO5b6t56ic","wp7Dk8Ktbwg=","w6DDrcKjPsKt","FhJ6dE0=","cQXCnnbDoQ==","wq0Rwq/Cli4=","w6EsHsODaA==","WRPClHHDkA==","WCt/w7zCvA==","wpnCsMOIw53Dng==","dU/CqCdB","w6nDiMKjJcKw","w7seLMOJQg==","wp/CkMOzw7bDkBrCoA==","MQPClFQEw4Vm","bgY9wqfCphfCv8KmcMOdBsKlI8OCwovCm1g=","dwzCuFnDrg==","w7LCu8Ojw7rCgQ==","w7PChXhiw4g=","NXHDu8Kj","w68VBA==","wrFMw4vDgMOc","Zl/CvS9SIHTDo8O1","w7omDcKCwqw=","w5/CsQjDtQ==","J8Kxw4w7dA==","wrZbw7DDgcO9","IcOPMsO7Zw==","w6/CqFXCqcKj","PcO0AjVG","wobCksOkw4PDrg==","DMOgYMKiDA==","w5vCkErCrMKGw6Y3","w7wBw6vCmcOX","QgcwFC/DgV8=","w6XCkMOzwrjCpkzDrMKXwp0=","wp7DsMOMSyt/Jw==","Jh7Cm0QO","aMKDRGtjVMKB","w6oUBS0=","YEjCsDlNOHg=","PgPCnQ==","wrrDt8KBUiNWYQ==","NMOqwrvCsQ==","M1jClhAfwpfCtA==","NFLCmhYX","w6HCp3TCn8K7","w7vCom3Ck8KC","V2LCpxlG","woXDq8OydAI=","w7YKE8Ovaw==","YcKnfnFW","wojDmMOYUQU=","UMOaw40oPA==","dMO0wrgCw4c=","w4nCl0HCpcKt","w6LChmLCjMKj","IMK3w5IRVA==","AU3CsAUR","w6ELCMOBaw==","w7XCrsO8w6c=","aCrCl8OSXg==","w7c3Kg8p","wqBbw4rDmw==","D8OFaMKtKg==","w7DCnMOiwpTCjw==","w5DCscOHw7XClA==","ciQpw5V4","w4AZNxsP","wq0rGVTCgw==","KcOHecKzAg==","wpEjwrnChzk=","w6YEBcKlwqg=","PxJmwqLDgg==","w5HChcOYwoXCmg==","B8OICD5h","w5bChxbCojI=","BV3Ckjs4","wr/Cs8OZw6zDtg==","YB/DjAYE","aQbCsA==","w4UiGA==","w4zCtSrDqgw=","aH7CiAZv","VcOwwrknw7E=","w6nCvHfCi8K4","MUfCiA8J","w4A1HCHDkSQ=","fw3Cqg==","SsOOw7YFHMKx","bEHCjg==","TMK1Rg==","F1HClw==","w4k3PA==","w73ClWXCisKG","CMO/HS1q"],function(a,b){var c=function(b){for(;--b;)a["push"](a["shift"]())},d=function(){var e,f,a={data:{key:"cookie",value:"timeout"},setCookie:function(a,b,c,d){var e,f,g,h,i;for(d=d||{},e=b+"="+c,f=0,f=0,g=a["length"];g>f;f++)h=a[f],e+="; "+h,i=a[h],a["push"](i),g=a["length"],i!==!0&&(e+="="+i);d["cookie"]=e},removeCookie:function(){return"dev"},getCookie:function(a,d){var e,f;return a=a||function(a){return a},e=a(new RegExp("(?:^|; )"+d["replace"](/([.$?*|{}()[]\/+^])/g,"$1")+"=([^;]*)")),f=function(a,b){a(++b)},f(c,b),e?decodeURIComponent(e[1]):void 0}},d=function(){var b=new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}");return b["test"](a["removeCookie"]["toString"]())};a["updateCookie"]=d,e="",f=a["updateCookie"](),f?f?e=a["getCookie"](null,"counter"):a["removeCookie"]():a["setCookie"](["*"],"counter",1)};d()}(f,200),g=function(a,b){var c,d,e,h;return a-=0,c=f[a],void 0===g["initialized"]&&(function(){var a="undefined"!=typeof window?window:"object"==typeof process&&"function"==typeof require&&"object"==typeof global?global:this,b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";a["atob"]||(a["atob"]=function(a){var e,f,d,g,h,c=String(a)["replace"](/=+$/,"");for(d=0,g=0,h="";f=c["charAt"](g++);~f&&(e=d%4?64*e+f:f,d++%4)?h+=String["fromCharCode"](255&e>>(6&-2*d)):0)f=b["indexOf"](f);return h})}(),d=function(a,b){var e,h,i,j,k,c=[],d=0,f="",g="";for(a=atob(a),h=0,i=a["length"];i>h;h++)g+="%"+("00"+a["charCodeAt"](h)["toString"](16))["slice"](-2);for(a=decodeURIComponent(g),j=0;256>j;j++)c[j]=j;for(j=0;256>j;j++)d=(d+c[j]+b["charCodeAt"](j%b["length"]))%256,e=c[j],c[j]=c[d],c[d]=e;for(j=0,d=0,k=0;k<a["length"];k++)j=(j+1)%256,d=(d+c[j])%256,e=c[j],c[j]=c[d],c[d]=e,f+=String["fromCharCode"](a["charCodeAt"](k)^c[(c[j]+c[d])%256]);return f},g["rc4"]=d,g["data"]={},g["initialized"]=!0),e=g["data"][a],void 0===e?(void 0===g["once"]&&(h=function(a){this["rc4Bytes"]=a,this["states"]=[1,0,0],this["newState"]=function(){return"newState"},this["firstState"]="\\w+ *\\(\\) *{\\w+ *",this["secondState"]="['|\"].+['|\"];? *}"},h["prototype"]["checkState"]=function(){var a=new RegExp(this["firstState"]+this["secondState"]);return this["runState"](a["test"](this["newState"]["toString"]())?--this["states"][1]:--this["states"][0])},h["prototype"]["runState"]=function(a){return Boolean(~a)?this["getState"](this["rc4Bytes"]):a},h["prototype"]["getState"]=function(a){for(var b=0,c=this["states"]["length"];c>b;b++)this["states"]["push"](Math["round"](Math["random"]())),c=this["states"]["length"];return a(this["states"][0])},new h(g)["checkState"](),g["once"]=!0),c=g["rc4"](c,b),g["data"][a]=c):c=e,c};try{for(h=g("0x0","jX1k")[g("0x1","OP2J")]("|"),l=0;;){switch(h[l++]){case"0":m=function(a){return a[o[1]]("")[o[2]]()[o[3]]("")};continue;case"1":if(!n(p,g("0x2","7pmO")))for(;o[7];)location[o[5]]=location[o[5]]+"?"+Math[o[6]]();continue;case"2":n=function(a,b){var c={xgNDA:function(a,b){return a===b},CkwGH:function(a,b){return a(b)}};return c[g("0x3","kip%")](c[g("0x4","7pmO")](m,a)[o[4]](b),0)};continue;case"3":o=[g("0x5","5AFK"),g("0x6","XLJu"),g("0x7","3(&V"),g("0x8","m)Jm"),g("0x9","PU!K"),"href",g("0xa","T&cE"),!0];continue;case"4":p=document[o[0]];continue}break}}catch(q){console[g("0xb","vZ*L")](q)}for(setInterval(function(){var a={ADaKF:function(a){return a()}};a[g("0xc","7pmO")](r)},4e3),k=2*((9998^infoid)+68437),function(a,b,c){for(var i,j,l,m,e={DSned:g("0xd","DsmM"),EfphZ:g("0xe","5AFK"),sftSM:g("0xf","OP2J"),SXquF:function(a,b){return a(b)},qUsiD:g("0x10","PU!K"),iHdVS:function(a,b){return a+b},CJJbM:g("0x11","ON)h"),EUQPr:g("0x12","jX1k"),iCskH:function(a){return a()},iqOny:function(a,b,c){return a(b,c)},EicNl:function(a,b){return a!==b},ahoyW:g("0x13",")4Wd"),pwyDo:function(a,b){return a===b},mSYkM:g("0x14","^l#A"),EuRDI:function(a,b){return a===b},LTyEe:g("0x15","Aq$a"),EyuPx:g("0x16","RT(X"),ztfpS:g("0x17","00Sw"),QmHXL:function(a,b){return a===b},fHWYl:function(a,b){return a(b)},wtMQG:g("0x18","kip%"),CcTYI:function(a,b){return a!==b},QZwdW:g("0x19","XLJu"),VWuxz:g("0x1a","ON)h"),DqEFQ:g("0x1b","@A#%"),hPiDa:function(a,b){return a!==b},yXCCF:g("0x1c","4cN)"),UjjXH:g("0x1d","9Iq0"),CLDiI:g("0x1e","t1TM")},f=e[g("0x1f",")4Wd")][g("0x20","oQ4#")]("|"),h=0;;){switch(f[h++]){case"0":i={iksxz:e[g("0x21","PU!K")],snjtC:e[g("0x22","T&cE")],TEySd:function(a,b){return e[g("0x23","jX1k")](a,b)},xtPLF:e[g("0x24","kip%")],uGziA:function(a,b){return e[g("0x25","^51O")](a,b)},jKTiZ:e[g("0x26",")4Wd")],vqUJT:e[g("0x27","9Iq0")],hjOtq:function(a){return e[g("0x28","lAqD")](a)},qhezD:function(a,b,c){return e[g("0x29","($D0")](a,b,c)},xCSWF:function(a,b){return e[g("0x2a","XLJu")](a,b)},bawEB:e[g("0x2b","^l#A")],dLEes:function(a,b){return e[g("0x2c","3&gs")](a,b)},xSEOh:e[g("0x2d","3FDp")],eOUXa:function(a,b){return e[g("0x2e","F]ty")](a,b)},vhvmc:e[g("0x2f","oQ4#")],BtlzQ:function(a,b){return e[g("0x30","m)Jm")](a,b)},beInS:e[g("0x31","vZ*L")],CFhAQ:e[g("0x32","4cN)")],gdRNb:function(a,b){return e[g("0x33","9Iq0")](a,b)},CdIHa:function(a,b){return e[g("0x34","3FDp")](a,b)},zmyFQ:e[g("0x35","a9!o")]};continue;case"1":j=e[g("0x36","b^)Z")](l,this,function(){var e,f,b=function(){var b={GKBND:function(a,b){return a!==b},KQlaL:g("0x37","b^)Z"),LZObB:g("0x38","Kvrm")};b[g("0x39","T&cE")](b[g("0x3a","vZ*L")],b[g("0x3b","kip%")])&&a[c](b[g("0x3c","PU!K")])},d=i[g("0x3d","aYZG")](typeof window,i[g("0x3e","a9!o")])?window:i[g("0x3f","PU!K")](typeof process,i[g("0x40","AC0*")])&&i[g("0x41","00Sw")](typeof require,i[g("0x42","3FDp")])&&i[g("0x43","vZ*L")](typeof global,i[g("0x44","a9!o")])?global:this;if(d[g("0x45","00Sw")]){if(i[g("0x51","nzd9")](i[g("0x52","^51O")],i[g("0x53","oQ4#")]))return i[g("0x54","5AFK")](i[g("0x55","m)Jm")](__6470,__8005)[_7956[4]](__3898),0);for(e=i[g("0x56","00Sw")][g("0x57","3&gs")]("|"),f=0;;){switch(e[f++]){case"0":d[g("0x58","f%Pm")][g("0x59","Z2RN")]=b;continue;case"1":d[g("0x5a","a&u3")][g("0x5b","OYIm")]=b;continue;case"2":d[g("0x5c","Bx^W")][g("0x5d","Kvrm")]=b;continue;case"3":d[g("0x5e","jX1k")][g("0x5f","RT(X")]=b;continue;case"4":d[g("0x60","3FDp")][g("0x61","Kvrm")]=b;continue;case"5":d[g("0x62","T&cE")][g("0x63","($D0")]=b;continue;case"6":d[g("0x64","3(&V")][g("0x65","3(&V")]=b;continue}break}}else d[g("0x46","Kvrm")]=function(a){for(var e,b={JSiMM:g("0x47",")4Wd")},c=b[g("0x48","PU!K")][g("0x49","gr&I")]("|"),d=0;;){switch(c[d++]){case"0":e={};continue;case"1":e[g("0x4a","lAqD")]=a;continue;case"2":return e;case"3":e[g("0x4b","XLJu")]=a;continue;case"4":e[g("0x4c","RT(X")]=a;continue;case"5":e[g("0x4d","^51O")]=a;continue;case"6":e[g("0x4e","3FDp")]=a;continue;case"7":e[g("0x4f","^l#A")]=a;continue;case"8":e[g("0x50","4cN)")]=a;continue}break}}(b)});continue;case"2":!function(){var a={jJekb:i[g("0x66","5AFK")],ErrPq:i[g("0x67","5AFK")],QzHfa:function(a,b){return i[g("0x68","3FDp")](a,b)},bFaGA:i[g("0x69","Bx^W")],BqGmw:function(a,b){return i[g("0x6a","a9!o")](a,b)},tMIMo:i[g("0x6b","jX1k")],pUdfR:function(a,b){return i[g("0x6c","Bx^W")](a,b)},ptrIY:i[g("0x6d","Aq$a")],osNMO:function(a){return i[g("0x6e","R8*@")](a)}};i[g("0x6f","f%Pm")](m,this,function(){var b=new RegExp(a[g("0x70","5AFK")]),c=new RegExp(a[g("0x71","nzd9")],"i"),d=a[g("0x72","3(&V")](r,a[g("0x73","a9!o")]);b[g("0x74","gr&I")](a[g("0x75","HNtT")](d,a[g("0x76","RT(X")]))&&c[g("0x77","^51O")](a[g("0x78","3&gs")](d,a[g("0x79","OYIm")]))?a[g("0x7b","az!!")](r):a[g("0x7a","gr&I")](d,"0")})()}();continue;case"3":try{e[g("0x7c","RT(X")](e[g("0x7d","WCqI")],e[g("0x7e","3&gs")])&&(c+=e[g("0x7f","aYZG")],b=d,e[g("0x80","^l#A")](typeof b,e[g("0x81",")4Wd")])&&e[g("0x82","OYIm")](b,e[g("0x83","m)Jm")])||a[c](e[g("0x84","7pmO")]("删除",e[g("0x85","3(&V")])))}catch(k){a[c](e[g("0x86","00Sw")])}continue;case"4":c="al";continue;case"5":e[g("0x87","V^3I")](j);continue;case"6":l=function(){var b,a={zjDpz:function(a,b){return a===b},kYVLM:g("0x88","PU!K"),InNQG:g("0x89","a9!o")};return a[g("0x8a","4cN)")](a[g("0x8b","3FDp")],a[g("0x8c","R8*@")])?void 0:(b=!0,function(a,c){var d=b?function(){if(c){var b=c[g("0x8d","5AFK")](a,arguments);return c=null,b}}:function(){};return b=!1,d})}();continue;case"7":m=function(){var a=!0;return function(b,c){var d=a?function(){if(c){var a=c[g("0x8e","3(&V")](b,arguments);return c=null,a}}:function(){};return a=!1,d}}();continue}break}}(window),d="sojson.v5",line=JSON.parse(CryptoJS.AES.decrypt(links,window.location.host+k,{format:CryptoJSAesJson}).toString(CryptoJS.enc.Utf8)).split("@@@"),urls=new Array,videolist="",titlelist="",len=line.length-1,i=0;len>i;i++){for(zy=line[i].split("!!!"),zytitle=zy[0],zyurl=zy[1].split("|"),zylen=zyurl.length-1,urls[i]=new Array,zylist="",j=0;zylen>j;j++)url=zyurl[j].split("$"),urls[i][j]=url[1],zylist+="<li><a href='javascript:;' onclick='play("+i+","+j+");'>"+url[0]+"</a></li>";
titlelist+="<dt>"+zytitle+"</dt>",videolist+="<div class='playlist clearfix'><ul>"+zylist+"</ul></div>"}$(".playlists header dl").html(titlelist),$(".playlists .bd").html(videolist),TouchSlide({slideCell:"#slider",titCell:"header dt",mainCell:".bd",effect:"leftLoop"}),0!=id&&1!=id&&2!=id&&3!=id&&1==rating&&$.ajax({url:"https://api.douban.com/v2/movie/subject/"+id+"?apikey=0b2bdeda43b5688921839c8ecb20399b",type:"GET",dataType:"jsonp",jsonp:"callback",jsonpCallback:"handleResponse",success:function(a){var b=$('meta[property="og:video:score"]').attr("content");$('meta[property="og:title"]').attr("content"),$('meta[property="og:video:alias"]').attr("content"),$('meta[property="og:video:otitle"]').attr("content"),b!=a.rating.average&&$.post("/res/douban.php",{rating:a.rating.average,stars:a.rating.stars,ratings_count:a.ratings_count,id:id})}})}}),errorcount=0,null==localStorage.ischina&&(isChinaPattern=new RegExp("[A-Za-z]+"),$.getScript("https://pv.sohu.com/cityjson?ie=utf-8",function(){localStorage.ischina=isChinaPattern.test(returnCitySN["cname"])?0:1})),isMobile.spider||(imgid=Math.floor(7*Math.random())+1,isMobile.any?$("body").hasClass("info")?(dbs=new Array,0==localStorage.ischina&&"zh-CN"!=navigator.language?(dbs[0]="https://inpagepush.com/400/3043744",dbs[1]="https://badskies.com/1c/67/0b/1c670bc8f7272bb370eb7e0f61b46f21.js"):(dbs[0]="https://m.169bj.cn/c/4EE3BFE3-4615-401A-9E04-B66DB0BBFFCB.panda",dbs[1]="https://k.jjhaolin.com/d.php?pid=8028",dbs[2]="https://kl.mieyisi.com/dp.php?m=VlViT0JVczg3aTkxRg%3D%3D",dbs[3]="https://fb.5a8p12.cn/Frist/9C034F6F-36D8-4BC4-B3DC-E0558B240696.js"),db=Math.floor(Math.random()*dbs.length),-1!=dbs[db].indexOf("<")?document.write(dbs[db]):$.getScript(dbs[db])):(xtbs=new Array,xtbs[0]="https://m.169bj.cn/c/B25EA802-F469-4C55-A839-67808FD83B81.panda",xtbs[1]="https://kl.mieyisi.com/xtb.php?m=b1o4bVZyd001ei1iZA%3D%3D",xtbs[2]="https://fb.5a8p12.cn/Frist/DE71E83A-250F-46E3-ABF8-BEC315F54C79.js",xtbs[3]="https://k.jjhaolin.com/x.php?pid=8028",xtb=Math.floor(Math.random()*xtbs.length),-1!=xtbs[xtb].indexOf("<")?document.write(xtbs[xtb]):$.getScript(xtbs[xtb])):($.getScript("https://pushsar.com/pfe/current/tag.min.js?z=2647965"),$("body").hasClass("info")&&(pcads=new Array,pcads[0]="https://inpagepush.com/400/3043744",pcads[1]="https://badskies.com/1c/67/0b/1c670bc8f7272bb370eb7e0f61b46f21.js",pcad=Math.floor(Math.random()*pcads.length),-1!=pcads[pcad].indexOf("<")?document.write(pcads[pcad]):$.getScript(pcads[pcad])))),window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","UA-76290221-6"),$.getScript("https://www.googletagmanager.com/gtag/js?id=UA-76290221-6");