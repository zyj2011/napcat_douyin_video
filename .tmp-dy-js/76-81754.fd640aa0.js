/*! For license information please see 81754.fd640aa0.js.LICENSE.txt */
!function(e,r){"object"==typeof module&&"object"==typeof module.exports?r():"function"==typeof define&&define.amd?define([],r):(e="undefined"!=typeof globalThis?globalThis:e||self)&&r()}(this,function(){"use strict";"object"==typeof window&&(window.openRedirect={version:"1.2.17",webpackPluginVersion:"3.4.19",reportOnly:!1})}),!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).xss={})}(this,function(e){"use strict";var r=function(){return(r=Object.assign||function(e){for(var r,t=1,i=arguments.length;t<i;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)};function t(e,r,t){if(t||2==arguments.length)for(var i,n=0,a=r.length;n<a;n++)!i&&n in r||(i||(i=Array.prototype.slice.call(r,0,n)),i[n]=r[n]);return e.concat(i||Array.prototype.slice.call(r))}var i=/[^a-zA-Z0-9\\_:.-]/gim,n=/</g,a=/>/g,s=/&#([a-zA-Z0-9]*);?/gim,o=/&quot;/g,c=/&colon;?/gim,l=/&newline;?/gim,p=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi,u=/u\s*r\s*l\s*\(.*/gi,h=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,d=/"/g,f=function(e){return e.replace(n,"&lt;").replace(a,"&gt;")},g={indexOf:function(e,r){var t,i;for(t=0,i=e.length;t<i;t++)if(e[t]===r)return t;return -1},forEach:function(e,r,t){var i,n;for(i=0,n=e.length;i<n;i++)r.call(t,e[i],i,e)},some:function(e,r,t){var i,n;for(i=0,n=e.length;i<n;i++)if(r.call(t,e[i],i,e))return!0;return!1},trim:function(e){return e.replace(/(^\s*)|(\s*$)/g,"")},includes:function(e,r){if("string"==typeof e)return -1!==e.indexOf(r);for(var t=0;t<e.length;t++)if(e[t]===r)return!0;return!1},spaceIndex:function(e){var r=/\s|\n|\t/.exec(e);return r?r.index:-1},uniq:function(e){for(var r={},t=[],i=0;i<e.length;i++)r[e[i]]||(t.push(e[i]),r[e[i]]=!0);return t},from:function(e){for(var r=[],t=0;t<e.length;t++)r.push(e[t]);return r},keys:function(e){var r=[];for(var t in e)r.push(t);return r}};function G(e){return null==e}function m(e){var r;return'"'===(r=e)[0]&&'"'===r[r.length-1]||"'"===r[0]&&"'"===r[r.length-1]?e.substr(1,e.length-2):e}function v(e){var r,t,i,n,a,s,o,c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",l="",p=0;for(e=function(e){e=e.replace(/rn/g,"n");for(var r="",t=0;t<e.length;t++){var i=e.charCodeAt(t);i<128?r+=String.fromCharCode(i):i>127&&i<2048?r+=String.fromCharCode(i>>6|192)+String.fromCharCode(63&i|128):r+=String.fromCharCode(i>>12|224)+String.fromCharCode(i>>6&63|128)+String.fromCharCode(63&i|128)}return r}(e);p<e.length;)n=(r=e.charCodeAt(p++))>>2,a=(3&r)<<4|(t=e.charCodeAt(p++))>>4,s=(15&t)<<2|(i=e.charCodeAt(p++))>>6,o=63&i,isNaN(t)?s=o=64:isNaN(i)&&(o=64),l=l+c.charAt(n)+c.charAt(a)+c.charAt(s)+c.charAt(o);return l}function D(e){var r,t,i,n,a,s,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",c="",l=0;for(e=e.replace(/[^A-Za-z0-9+/=]/g,"");l<e.length;)r=o.indexOf(e.charAt(l++))<<2|(n=o.indexOf(e.charAt(l++)))>>4,t=(15&n)<<4|(a=o.indexOf(e.charAt(l++)))>>2,i=(3&a)<<6|(s=o.indexOf(e.charAt(l++))),c+=String.fromCharCode(r),64!==a&&(c+=String.fromCharCode(t)),64!==s&&(c+=String.fromCharCode(i));return function(e){for(var r="",t=0,i=0,n=0,a=0;t<e.length;)(i=e.charCodeAt(t))<128?(r+=String.fromCharCode(i),t++):i>191&&i<224?(r+=String.fromCharCode((31&i)<<6|63&(a=e.charCodeAt(t+1))),t+=2):(a=e.charCodeAt(t+1),r+=String.fromCharCode((15&i)<<12|(63&a)<<6|63&(n=e.charCodeAt(t+2))),t+=3);return r}(c)}function y(e,r,t){var i="",n=0,a=!1,s=!1,o=0,c=e.length,l="",p="";e:for(o=0;o<c;o++){var u=e.charAt(o);if(!1===a){if("<"===u){a=o;continue}}else if(!1===s){if("<"===u){i+=t(e.slice(n,o)),a=o,n=o;continue}if(">"===u||o===c-1){i+=t(e.slice(n,a)),l=function(e){var r,t=g.spaceIndex(e);return r=-1===t?e.slice(1,-1):e.slice(1,t+1),"/"===(r=g.trim(r).toLowerCase()).slice(0,1)&&(r=r.slice(1)),"/"===r.slice(-1)&&(r=r.slice(0,-1)),r}(p=e.slice(a,o+1)),i+=r(a,i.length,l,p,"</"===p.slice(0,2)),n=o+1,a=!1;continue}if('"'===u||"'"===u)for(var h=1,d=e.charAt(o-h);""===d.trim()||"="===d;){if("="===d){s=u;continue e}d=e.charAt(o-++h)}}else if(u===s){s=!1;continue}}return n<c&&(i+=t(e.substr(n))),i}function b(e,r){var t=0,n=0,a=[],s=!1,o=e.length;function c(e,t){if(!((e=(e=g.trim(e)).replace(i,"").toLowerCase()).length<1)){var n=r(e,t||"");n&&a.push(n)}}for(var l=0;l<o;l++){var p=e.charAt(l),u=void 0;if(!1!==s||"="!==p){if(!1===s||l!==n){if(/\s|\n|\t/.test(p)){if(e=e.replace(/\s|\n|\t/g," "),!1===s){if(-1===(u=function(e,r){for(;r<e.length;r++){var t=e[r];if(" "!==t)return"="===t?r:-1}return -1}(e,l))){c(g.trim(e.slice(t,l))),s=!1,t=l+1;continue}l=u-1;continue}if(-1===(u=function(e,r){for(;r>0;r--){var t=e[r];if(" "!==t)return"="===t?r:-1}return -1}(e,l-1))){c(s,m(g.trim(e.slice(t,l)))),s=!1,t=l+1;continue}}}else{if(-1===(u=e.indexOf(p,l+1)))break;c(s,g.trim(e.slice(n+1,u))),s=!1,t=(l=u)+1}}else s=e.slice(t,l),t=l+1,n='"'===e.charAt(t)||"'"===e.charAt(t)?t:function(e,r){for(;r<e.length;r++){var t=e[r];if(" "!==t)return"'"===t||'"'===t?r:-1}return -1}(e,l+1)}return t<e.length&&(!1===s?c(e.slice(t)):c(s,m(g.trim(e.slice(t))))),g.trim(a.join(" "))}function H(e,r,t){if(t=function(e){return e=function(e){for(var r="",t=0,i=e.length;t<i;t++)r+=32>e.charCodeAt(t)?" ":e.charAt(t);return g.trim(r)}(e=(e=(e=e.replace(o,'"')).replace(s,function(e,r){return"x"===r[0]||"X"===r[0]?String.fromCharCode(parseInt(r.substr(1),16)):String.fromCharCode(parseInt(r,10))})).replace(c,":").replace(l," "))}(t),"href"===r||"src"===r){if("#"===(t=g.trim(t)))return"#";if("http://"!==t.substr(0,7)&&"https://"!==t.substr(0,8)&&"mailto:"!==t.substr(0,7)&&"tel:"!==t.substr(0,4)&&"data:image/"!==t.substr(0,11)&&"ftp://"!==t.substr(0,6)&&"./"!==t.substr(0,2)&&"../"!==t.substr(0,3)&&"#"!==t[0]&&"/"!==t[0])return""}else if("background"===r){if(p.lastIndex=0,p.test(t))return""}else if("style"===r&&(h.lastIndex=0,h.test(t)||(u.lastIndex=0,u.test(t)&&(p.lastIndex=0,p.test(t)))))return"";return t=function(e){return e=f(e=e.replace(d,"&quot;"))}(t)}var I=function(e){return"string"==typeof e?e.replace(/'/g,'"').replace('=""',"").replace(/\s+/g,"").toLowerCase():""},C=function(){function e(e){var r=function(e){var r={};for(var t in e)r[t]=e[t];return r}(e||{});r.stripIgnoreTag&&(r.onIgnoreTag,r.onIgnoreTag=function(){return""}),r.whiteList={},r.onTag=function(){},r.onTagAttr=function(){},r.onIgnoreTag=function(){},r.onIgnoreTagAttr=function(){},r.safeAttrValue=H,r.escapeHtml=f,this.options=Object.assign(r,e)}return e.prototype.process=function(e){if(!(e=(e=e||"").toString()))return"";var r,t,i,n,a,s,o=this.options,c=o.whiteList,l=o.onTag,p=o.onIgnoreTag,u=o.onTagAttr,h=o.onIgnoreTagAttr,d=o.safeAttrValue,f=o.escapeHtml;o.stripBlankChar&&(e=(r=(r=e.split("")).filter(function(e){var r=e.charCodeAt(0);return!(127===r||r<=31&&10!==r&&13!==r)})).join("")),o.allowCommentTag||(e=function(e){for(var r="",t=0;t<e.length;){var i=e.indexOf("\x3c!--",t);if(-1===i){r+=e.slice(t);break}r+=e.slice(t,i);var n=e.indexOf("--\x3e",i);if(-1===n)break;t=n+3}return r}(e));var G=!1;o.stripIgnoreTagBody&&(t=o.stripIgnoreTagBody,"function"!=typeof(i=p)&&(i=function(){}),n=!Array.isArray(t),a=[],s=!1,p=(G={onIgnoreTag:function(e,r,o){var c;if(c=e,n||-1!==g.indexOf(t,c)){if(o.isClosing){var l="[/removed]",p=o.position+l.length;return a.push([!1!==s?s:o.position,p]),s=!1,l}return s||(s=o.position),"[removed]"}return i(e,r,o)},remove:function(e){var r="",t=0;return g.forEach(a,function(i){r+=e.slice(t,i[0]),t=i[1]}),r+=e.slice(t)}}).onIgnoreTag);var m=y(e,function(e,r,t,i,n){var a={sourcePosition:e,position:r,isClosing:n,isWhite:Object.prototype.hasOwnProperty.call(c,t)},s=l(t,i,a);if(null!=s)return s;if(a.isWhite){if(a.isClosing)return"</".concat(t,">");var o=function(e){var r=g.spaceIndex(e);if(-1===r)return{html:"",closing:"/"===e[e.length-2]};var t="/"===(e=g.trim(e.slice(r+1,-1)))[e.length-1];return t&&(e=g.trim(e.slice(0,-1))),{html:e,closing:t}}(i),G=c[t],m=b(o.html,function(e,r){var i=-1!==g.indexOf(G,e),n=u(t,e,r,i);return null==n?i?(r=d(t,e,r,null))?"".concat(e,'="').concat(r,'"'):e:null==(n=h(t,e,r,i))?void 0:n:n});return i="<".concat(t),m&&(i+=" ".concat(m)),o.closing&&(i+=" /"),i+=">"}return null==(s=p(t,i,a))?f(i):s},f);return G&&(m=G.remove(m)),m},e}(),E=Function("\nvar _checkXSS = function (it) {\n  return it && it.Math == Math && it;\n};\nreturn _checkXSS(typeof globalThis === 'object' && globalThis) ||\n_checkXSS(typeof window === 'object' && window) ||\n_checkXSS(typeof self === 'object' && self) ||\n_checkXSS(typeof global === 'object' && global) ||\nFunction('return this')();\n")(),P=new(function(){function e(){var e=this;this.batchData=[],this.uniqKeys=new Set,this.timeout=2e3,this.lock=!1,this.getSlardarBid=function(){var r,t,i="douyin_web";if(!g.includes(i,"bid"))return i;if(e.config&&e.config.bid)return e.config.bid;if(E&&E._xssBid)return E._xssBid;if(E&&E.slardar&&"function"==typeof E.slardar.config){var n=(E.slardar.config()||{}).bid;if(n)return n}if(E&&E.Slardar&&"function"==typeof E.Slardar.config){var a=(E.Slardar.config()||{}).bid;if(a)return a}return(null===(t=null===(r=null==E?void 0:E.Slardar)||void 0===r?void 0:r._baseParams)||void 0===t?void 0:t.bid)||"argus"},this.getConfigRegion=function(){var r;return g.includes("cn","region")?e.config&&e.config.region?e.config.region:((null===(r=null==E?void 0:E.gfdatav1)||void 0===r?void 0:r.region)||"cn").toLowerCase():"cn"},this.gerReportUrl=function(){var r={cn:D("aHR0cHM6Ly9tb24uemlqaWVhcGkuY29tL21vbml0b3JfYnJvd3Nlci9jb2xsZWN0L2JhdGNoL3NlY3VyaXR5Lz9iaWQ9"),boe:D("aHR0cHM6Ly9tb24uemlqaWVhcGkuY29tL21vbml0b3JfYnJvd3Nlci9jb2xsZWN0L2JhdGNoL3NlY3VyaXR5Lz9iaWQ9"),ttp:D("aHR0cHM6Ly9tb24udXMudGlrdG9rdi5jb20vbW9uaXRvcl9icm93c2VyL2NvbGxlY3QvYmF0Y2gvc2VjdXJpdHkvP2JpZD0="),va:D("aHR0cHM6Ly9tb24tdmEuYnl0ZW92ZXJzZWEuY29tL21vbml0b3JfYnJvd3Nlci9jb2xsZWN0L2JhdGNoL3NlY3VyaXR5Lz9iaWQ9"),maliva:D("aHR0cHM6Ly9tb24tdmEuYnl0ZW92ZXJzZWEuY29tL21vbml0b3JfYnJvd3Nlci9jb2xsZWN0L2JhdGNoL3NlY3VyaXR5Lz9iaWQ9"),sg:D("aHR0cHM6Ly9tb24tdmEuYnl0ZW92ZXJzZWEuY29tL21vbml0b3JfYnJvd3Nlci9jb2xsZWN0L2JhdGNoL3NlY3VyaXR5Lz9iaWQ9"),boei18n:D("aHR0cHM6Ly9tb24tdmEuYnl0ZW92ZXJzZWEuY29tL21vbml0b3JfYnJvd3Nlci9jb2xsZWN0L2JhdGNoL3NlY3VyaXR5Lz9iaWQ9")}[e.getConfigRegion()];if(r)return r+e.getSlardarBid()}}return e.prototype.setConfig=function(e){this.config=e},e.prototype.upload=function(){var e=this,r=this.gerReportUrl();!this.lock&&r&&0!==this.batchData.length&&(this.lock=!0,setTimeout(function(){var t=e.batchData.slice(0,100);e.batchData=e.batchData.slice(100),E.fetch(r,{method:"post",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).catch(function(e){}),e.lock=!1,e.upload()},this.timeout))},e.prototype.generateKey=function(e){return e.collectKey?[e.collectMode,e.collectKey].join("___"):""},e.prototype.push=function(e){this.batchData.push(e),this.upload()},e.prototype.report=function(e){var r=this.generateKey(e);if(E.fetch&&e.collectKey){var t="object"==typeof window?window.location.href:"SSR";e.documentUrl=t;var i={age:Math.floor(Date.now()),type:"xss",url:t,body:e,"user-agent":""};"enforce"===e.disposition&&"SSR"!==t||(i.url=r),"SSR"===t&&(i.url="SSR___".concat(i.url),i.body.ssr=!0),this.push(i)}},e}()),T=function(e){for(var r=0,t=function(t){Array.isArray(e[t])?0===e[t].length?delete e[t]:(e[t]=g.from(g.uniq(e[t])),r+=e[t].length):0===g.keys(e[t]).length?delete e[t]:g.keys(e[t]).forEach(function(i){e[t][i]=g.from(g.uniq(e[t][i])),r+=e[t][i].length})},i=0,n=g.keys(e);i<n.length;i++)t(n[i]);return{count:r,ret:e}};function k(e,r){return P.setConfig(r),new C(r).process(e)}function x(e){var r,t=(r=/\s|\n|\t/.exec(e))?r.index:-1;if(-1===t)return{html:"",closing:"/"===e[e.length-2]};var i="/"===(e=e.slice(t+1,-1).trim())[e.length-1];return i&&(e=e.slice(0,-1).trim()),{html:e,closing:i}}var w=function(e){return -1===(e=(e=(e=(e=e.replace(/&colon;/gi,":")).replace(/&tab;/gi,"")).replace(/&newline;/gi,"")).replace(/(\t|\n|\r)/g,"")).indexOf("&#")?e.trim().toLowerCase():e.trim().replace(/&#(?:(x)([0-9a-f]+)|([0-9]+));?/gi,function(e,r,t,i){return String.fromCharCode(r?parseInt(t,16):parseInt(i))}).replace(/(\t|\n|\r)/g,"").toLowerCase()};function _(e,r){if(void 0===e&&(e=""),"string"!=typeof e)return!0;if(e=w(e),g.includes(e,"base64")&&!function(e){if(""===e||""===e.trim())return!0;try{return!g.includes(e,"data:text/html;base64")}catch(e){return!0}}(e))return r&&r("data:text/html;base64"),!1;var t=["expression(","behavior:","view-source:"];if(g.some(t,function(r){return -1!==e.indexOf(r)}))return g.forEach(t,function(t){-1!==e.indexOf(t)&&r&&r(t)}),!1;var i=["data:application","data:javascript","data:text/html","data:texthtml"];if(g.some(i,function(r){return -1!==e.indexOf(r)}))return g.forEach(i,function(t){-1!==e.indexOf(t)&&r&&r(t)}),!1;if(e.indexOf("javascript:")>0)return r&&r("javascript:"),!1;if(/^javascript:/i.test(e)){var n=e.slice(11).replace(/\s/g,"").trim();return!!g.some(["void","void(0)","void0","false","undefined",";"],function(e){return e===n})||(r&&r("javascript:"),!1)}return!0}var S=function(e,r){var t,i,n="<%= isSaveValidUrl =>";if("string"!=typeof e||(i=Number("<%= urlLimit =>"),void 0!==t&&(i=t),"NaN"!==e.toString()&&-1!==i&&e.length>=i)||_(e,r))return e;try{if(!0===(n=JSON.parse(n))||"true"===n){var a=new URL(e);return a.origin+a.pathname}}catch(e){}return"#"};function A(e,r,i){if(void 0===e&&(e=""),void 0===r&&(r=[]),"string"!=typeof e)return!0;if(!_(e=w(e)))return!1;var n,a={url:(n=e.match(/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/)||[])[0],scheme:n[1],slash:n[2],host:n[3],port:n[4],path:n[5],query:n[6],hash:n[7]},s=a.scheme,o=a.host;return i?!!i(e):!(!s||!o)&&(!g.includes(["http","https","file"],s)||("object"==typeof window&&window&&(r=t(t([],r,!0),[location.host],!1)),g.some(r,function(e){return!!(e instanceof RegExp&&e.test(o))||e===o})))}var R={a:["target","title","spellcheck","rel"],canvas:[],abbr:["title"],address:[],area:["shape","coords","alt"],article:[],aside:[],audio:["autoplay","controls","loop","preload"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:["dir"],dl:[],dt:[],em:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["alt","title","width","height","decoding"],ins:["datetime"],li:[],mark:[],nav:[],ol:["start"],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],sup:[],delete:[],form:[],strong:[],mask:["maskunits","x","y","width","height","fill"],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],wbr:[],video:["autoplay","controls","loop","preload","height","width"],svg:["viewBox","version","xmlns","fill","width","height","stroke","stroke-width","style"],path:["d","fill","opacity","stroke","p-id","fill-rule","clip-rule","stroke-width","stroke-linecap","stroke-linejoin","fill-opacity","mask"],rect:["x","y","width","height","fill","stroke","rx"],g:[]},M={collect:null,initCollect:function(){this.collect={whiteList:{},filterProtocol:[]}},removeCollect:function(){var e=T(this.collect),r=e.count,t=e.ret;return this.collect=null,{collectKey:0===r?null:JSON.stringify(t),collectMode:"white"}},onIgnoreTagAttr:function(e,r,i){return e&&g.indexOf(["href","src"],r)>-1?M.domainWhiteList&&Array.isArray(M.domainWhiteList)&&M.domainWhiteList.length>0&&!A(i,t([],M.domainWhiteList,!0))?"":"".concat(r,'="').concat(S(i,function(e){var r;null===(r=M.collect)||void 0===r||r.filterProtocol.push(e)}),'"'):e&&(g.indexOf(["style","class","id"],r)>-1||r.indexOf("data-")>-1)?"".concat(r,'="').concat(i,'"'):(M.collect.whiteList[e]=M.collect.whiteList[e]||[],void M.collect.whiteList[e].push(r))},onIgnoreTag:function(e,r){if("style"===e)return r;y(r,function(e,r,t,i){b(x(i).html.replace("/",""),function(e){M.collect.whiteList[t]=M.collect.whiteList[t]||[],M.collect.whiteList[t].push(e)})},f)},whiteList:R,mergeWhiteList:function(e){for(var r,t={},i=0,n=g.keys(R);i<n.length;i++)t[r=n[i]]=g.from(R[r]);for(var a=0,s=g.keys(e);a<s.length;a++)t[r=s[a]]=r in R?R[r].concat(e[r]):g.from(e[r]);return t},setWhiteList:function(e){for(var r=0,t=g.keys(e);r<t.length;r++){var i=t[r];this.whiteList[i]=i in R?R[i].concat(e[i]):g.from(e[i])}}};try{var O={},U="merge";g.includes(U,"override")&&(M.whiteList=O.whiteList),g.includes(U,"merge")&&M.setWhiteList(O.whiteList)}catch(e){}var L=function(e,r){for(var t={},i=0,n=g.keys(e);i<n.length;i++){var a=n[i];Array.isArray(e[a])?t[a]=g.from(e[a]):t[a]=L({},e[a])}for(var s=0,o=g.keys(r);s<o.length;s++)(a=o[s])in e?Array.isArray(e[a])?t[a]=e[a].concat(r[a]):t[a]=L(e[a],r[a]):Array.isArray(r[a])?t[a]=g.from(r[a]):t[a]=L({},r[a]);return t},N={blackList:{a:["folder"],meta:["content"],iframe:["srcdoc"],input:["pattern"],vmlframe:["xmlns"]},blackTags:["script","xml","embed","isindex","object","base","set","handler","animate","payload","import"],blackAttrs:["charset","ns","namespace","formaction","xlink:href","xmlns:xlink","handler","repeat","repeat-start","repeat-end"],blackAttrRegExps:[/^on/],filterList:{param:["value"],video:["poster"],form:["action"]},filterAttrs:["href","src","background","style","dynsrc","lowsrc","content"]};try{var j={};j.blackAttrRegExps&&(j.blackAttrRegExps=j.blackAttrRegExps.map(function(e){return new RegExp(e.toString().slice(1,e.toString().length-1))}));var F="merge";g.includes(F,"override")&&(N=j),g.includes(F,"merge")&&(N=L(N,j))}catch(e){}var W={mode:"black",whiteList:{},blackConfig:N,collect:null,initCollect:function(){W.collect={blackList:{},blackTags:[],blackAttrs:[],blackAttrRegExps:[],filterAttrs:[],filterList:{},filterProtocol:[]}},removeCollect:function(){var e=T(W.collect),r=e.count,t=e.ret;return W.collect=null,{collectKey:0===r?null:JSON.stringify(t),collectMode:"black"}},onIgnoreTag:function(e,r){var t;if(!g.includes(N.blackTags,e))return y(r,function(e,r,t,i,n){if(-1!==t.indexOf("/"))return f(i);if(n)return"</".concat(t,">");var a=x(i),s=b(a.html,function(e,r){var i,n=0;if(N.blackList[t]&&g.includes(N.blackList[t],e)&&(W.collect.blackList[t]=W.collect.blackList[t]||[],W.collect.blackList[t].push(e),n++),N.blackAttrRegExps.length&&N.blackAttrRegExps.some(function(r){return r.test(e)})&&g.forEach(N.blackAttrRegExps,function(r){r.test(e)&&(W.collect.blackAttrRegExps.push("".concat(r.toString(),"->").concat(e)),n++)}),N.blackAttrs.length&&g.includes(N.blackAttrs,e)&&(N.blackAttrs.push(e),n++),!n){if(N.filterList&&N.filterList[t]&&g.includes(N.filterList[t],e)){var a=S(r,function(e){var r;null===(r=W.collect)||void 0===r||r.filterProtocol.push(e)});return a!==r&&(W.collect.filterList[t]=W.collect.filterList[t]||[],W.collect.filterList[t].push(e)),r?"".concat(e,"='").concat(a,"'"):e}return N.filterAttrs&&g.includes(N.filterAttrs,e)?((a=S(r,function(e){var r;null===(r=W.collect)||void 0===r||r.filterProtocol.push(e)}))!==r&&(null===(i=W.collect)||void 0===i||i.filterAttrs.push(e)),r?"".concat(e,"='").concat(a,"'"):e):r?"".concat(e,"='").concat(r,"'"):e}});return i="<".concat(t),s&&(i+=" ".concat(s)),a.closing&&(i+=" /"),i+=">"},f);null===(t=W.collect)||void 0===t||t.blackTags.push(e)}},V=function(e){var r=e.reportOnly,t=void 0===r||r,i=e.block;return t&&"all"===t?"report":("string"==typeof t&&("true"===t&&(t=!0),"false"===t&&(t=!1)),i?"enforce":t?"report":"enforce")},X=function(e){return function(t,i,n){if(!t||"string"!=typeof t)return t;var a=i;e===k&&(a=M).initCollect();var s=e(t,a);if(I(s)===I(t))return t;if(!n)return s;var o=n.logType,c=V(n),l=a.removeCollect();return P.report(r(r({type:o,disposition:c},l),{sourceText:v(t),filterText:v(s)})),"enforce"===c?s:t}},B=X(function(e,r){return void 0===r&&(r={}),r&&r.whiteList||(r.whiteList={a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","crossorigin","loop","muted","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],figcaption:[],figure:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],summary:[],sup:[],strong:[],strike:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","crossorigin","loop","muted","playsinline","poster","preload","src","height","width"]}),new C(r).process(e)}),$=X(k),Z=function(e,r,t){var i=[],n=S(e,function(e){i.push(e)});if(n===e)return e;i=g.from(g.uniq(i));var a=r||t||{};if(!a)return n;var s=a.logType,o=V(t);return P.report({type:s,disposition:o,collectKey:i.join("___"),collectData:JSON.stringify(i),collectMode:"black",sourceText:v(e),filterText:v(n)}),"enforce"===o?n:e},z=E._xssProject||{},K=E.xssNamespace||{},Y="3.0.26",J={FilterXSS:C,version:Y,webpackPluginVersion:"<%= webpackPluginVersion =>",reportOnly:"<%= reportOnly =>",filterXSS:B,_filterXSS:$,filterUrl:Z,Config:M,BlackConfig:W,project:z,setProjectName:function(e){z[e]=this,E._xssProjectName=e}};K.douyin_web=J,E.xssNamespace=K,E.Math&&!E.Math.xssNamespace&&(E.Math.xssNamespace=K),z[Y]=J,E.globalThis=E,E.getFilterXss=function(){return void 0!==this._xssProjectName?this._xssProject[this._xssProjectName]:J},E.xss=J,E.isSafeUrl=A,E.isSafeDomain=A,E.isSafeProtocol=_,E._xssProject=z,E._xssProjectName&&(z[E._xssProjectName]=J);var q=J.setProjectName.bind(J);e.BlackConfig=W,e.Config=M,e.FilterXSS=C,e._filterXSS=$,e.filterUrl=Z,e.filterXSS=B,e.isSafeDomain=A,e.isSafeProtocol=_,e.isSafeUrl=A,e.project=z,e.setProjectName=q,e.setXssNamespace=function(e){var r=e.appId,t=e.bid,i=e.region;K[r]=J;M.bid=t,M.region=i,M.enabled=!0},e.xssNamespace=K,Object.defineProperty(e,"__esModule",{value:!0})}),(self.webpackChunkdouyin_web=self.webpackChunkdouyin_web||[]).push([["81754"],{766410:function(e,r,t){"use strict";t.r(r)},20072:function(e,r,t){"use strict";t.r(r)},832526:function(e,r,t){"use strict";t.r(r)},619835:function(e,r,t){"use strict";t(429532),t(250440);var i=t(96008),n=t.n(i),a=t(590098),s=t.n(a),o=t(300277),c=t.n(o),l=t(88648),p=t(201845),u=t.n(p),h=t(713097),d=t.n(h),f=t(869239),g=t(4540),G=t(116617),m=t(705514);t(487389);var v=t(605471),D=t(74066);class y extends m.Z{get adapter(){return Object.assign(Object.assign({},super.adapter),{setNativeControlChecked:e=>{this.setState({checked:e})},notifyChange:e=>{let{onChange:r}=this.props;r&&r(e)},generateEvent:(e,r)=>{let{props:t}=this;return{target:Object.assign(Object.assign({},t),{checked:e}),stopPropagation:()=>{r.stopPropagation()},preventDefault:()=>{r.preventDefault()},nativeEvent:{stopImmediatePropagation:()=>{r.nativeEvent&&"function"==typeof r.nativeEvent.stopImmediatePropagation&&r.nativeEvent.stopImmediatePropagation()}}}},getIsInGroup:()=>this.isInGroup(),getGroupValue:()=>this.context&&this.context.checkboxGroup.value||[],notifyGroupChange:e=>{this.context.checkboxGroup.onChange(e)},getGroupDisabled:()=>this.context&&this.context.checkboxGroup.disabled,setAddonId:()=>{this.setState({addonId:(0,D.Ms)({prefix:"addon"})})},setExtraId:()=>{this.setState({extraId:(0,D.Ms)({prefix:"extra"})})},setFocusVisible:e=>{this.setState({focusVisible:e})},focusCheckboxEntity:()=>{this.focus()}})}componentDidUpdate(e){this.props.checked!==e.checked&&(c()(this.props.checked)?this.foundation.setChecked(!1):s()(this.props.checked)&&this.foundation.setChecked(this.props.checked))}isInGroup(){return!!(this.context&&this.context.checkboxGroup&&"value"in this.props)}focus(){this.checkboxEntity&&this.checkboxEntity.focus()}blur(){this.checkboxEntity&&this.checkboxEntity.blur()}render(){let{disabled:e,style:r,prefixCls:t,className:i,indeterminate:n,children:a,onMouseEnter:s,onMouseLeave:o,extra:c,value:p,role:u,tabIndex:h,id:g,type:m}=this.props,{checked:v,addonId:D,extraId:y,focusVisible:b}=this.state,H={checked:v,disabled:e},I=this.isInGroup();if(I){if(this.context.checkboxGroup.value){let e=(this.context.checkboxGroup.value||[]).includes(p);H.checked=e}this.context.checkboxGroup.disabled&&(H.disabled=this.context.checkboxGroup.disabled||this.props.disabled);let{isCardType:e,isPureCardType:r}=this.context.checkboxGroup;H.isCardType=e,H.isPureCardType=r,H.name=this.context.checkboxGroup.name}else H.isPureCardType=m===f.j2.TYPE_PURECARD,H.isCardType=m===f.j2.TYPE_CARD||H.isPureCardType;let C=t||f.gX.PREFIX,E=H.isCardType||H.isPureCardType,P=d()(C,{[`${C}-disabled`]:H.disabled,[`${C}-indeterminate`]:n,[`${C}-checked`]:H.checked,[`${C}-unChecked`]:!H.checked,[`${C}-cardType`]:H.isCardType,[`${C}-cardType_disabled`]:H.disabled&&H.isCardType,[`${C}-cardType_enable`]:!(H.disabled&&H.isCardType),[`${C}-cardType_checked`]:H.isCardType&&H.checked&&!H.disabled,[`${C}-cardType_checked_disabled`]:H.isCardType&&H.checked&&H.disabled,[i]:!!i,[`${C}-focus`]:b&&E}),T=d()(`${C}-extra`,{[`${C}-cardType_extra_noChildren`]:H.isCardType&&!a});I&&this.context.checkboxGroup.name;let k=this.props["x-semi-children-alias"]||"children";return l.createElement("span",Object.assign({role:u,tabIndex:h,style:r,className:P,id:g,onMouseEnter:s,onMouseLeave:o,onClick:this.handleChange,onKeyPress:this.handleEnterPress,"aria-labelledby":this.props["aria-labelledby"]},this.getDataAttr(this.props)),l.createElement(G.Z,Object.assign({},this.props,H,{addonId:a&&D,extraId:c&&y,isPureCardType:H.isPureCardType,ref:e=>{this.checkboxEntity=e},focusInner:b&&!E,onInputFocus:this.handleFocusVisible,onInputBlur:this.handleBlur})),a||c?l.createElement("div",{className:`${C}-content`},a?l.createElement("span",{id:D,className:`${C}-addon`,"x-semi-prop":k},a):null,c?l.createElement("div",{id:y,className:T,"x-semi-prop":"extra"},c):null):null)}constructor(e){super(e),this.handleChange=e=>this.foundation.handleChange(e),this.handleEnterPress=e=>this.foundation.handleEnterPress(e),this.handleFocusVisible=e=>{this.foundation.handleFocusVisible(e)},this.handleBlur=e=>{this.foundation.handleBlur()};this.state={checked:e.checked||e.defaultChecked||!1,addonId:e.addonId,extraId:e.extraId,focusVisible:!1},this.checkboxEntity=null,this.foundation=new g.Z(this.adapter)}}y.contextType=v._,y.propTypes={"aria-describedby":u().string,"aria-errormessage":u().string,"aria-invalid":u().bool,"aria-labelledby":u().string,"aria-required":u().bool,checked:u().bool,defaultChecked:u().bool,disabled:u().bool,indeterminate:u().bool,onChange:u().func,value:u().any,style:u().object,className:u().string,prefixCls:u().string,onMouseEnter:u().func,onMouseLeave:u().func,extra:u().node,index:u().number,"aria-label":u().string,tabIndex:u().number,preventScroll:u().bool,type:u().string},y.defaultProps={defaultChecked:!1,indeterminate:!1,onChange:n(),onMouseEnter:n(),onMouseLeave:n(),type:"default"},y.elementType="Checkbox",r.Z=y},973409:function(e,r,t){"use strict";t(429532);var i=t(88648),n=t(636625),a=t(616722),s=t(713097),o=t.n(s),c=t(137959),l=t(705514);class p extends l.Z{get adapter(){return Object.assign(Object.assign({},super.adapter),{handleMouseDown:e=>{this.setState({isHandleGrabbing:!0}),window.addEventListener("mousemove",this.foundation.setHandlePositionByMousePosition),window.addEventListener("mouseup",this.foundation.handleMouseUp)},handleMouseUp:e=>{this.setState({isHandleGrabbing:!1}),window.removeEventListener("mousemove",this.foundation.setHandlePositionByMousePosition),window.removeEventListener("mouseup",this.foundation.handleMouseUp)},getColorPickerFoundation:()=>this.props.foundation,getDOM:()=>this.ref.current})}componentDidUpdate(e,r,t){e.hue!==this.props.hue&&this.setState({handlePosition:this.props.hue/360*this.props.width-this.props.handleSize/2})}render(){return i.createElement("div",{className:o()(`${a.U.PREFIX}-colorSlider`,this.props.className),ref:this.ref,onMouseDown:this.handleClick,style:Object.assign({width:this.props.width,height:this.props.height},this.props.style)},i.createElement("div",{className:`${a.U.PREFIX}-handle`,style:{width:this.props.handleSize,height:this.props.handleSize,left:this.state.handlePosition,top:"50%",transform:"translateY(-50%)",backgroundColor:n.Z.hsvaToHslString({h:this.props.hue,s:100,v:100,a:1})},onMouseDown:e=>this.foundation.handleMouseDown(e)}))}constructor(e){super(e),this.handleClick=e=>{this.foundation.setHandlePositionByMousePosition(e),this.foundation.handleMouseDown(e)},this.foundation=new c.Z(this.adapter),this.state={handlePosition:e.hue/360*e.width-e.handleSize/2,isHandleGrabbing:!1},this.ref=i.createRef()}}r.Z=p},826898:function(e,r,t){"use strict";let i=t(88648).createContext({});r.Z=i},392842:function(e,r,t){"use strict";t.d(r,{Z:function(){return m}}),t(429532),t(874386);var i=t(96008),n=t.n(i),a=t(88648),s=t(201845),o=t.n(s),c=t(713097),l=t.n(c),p=t(420338),u=t(313561),h=t(597773),d=t(437749),f=function(e,r){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>r.indexOf(i)&&(t[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,i=Object.getOwnPropertySymbols(e);n<i.length;n++)0>r.indexOf(i[n])&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(t[i[n]]=e[i[n]]);return t};let g=0,G=p.U.PREFIX;class m extends a.PureComponent{componentDidMount(){this.sideSheetId=`sidesheet-${g++}`}componentWillUnmount(){clearTimeout(this.timeoutId)}getMaskElement(){var e;let{mask:r,maskStyle:t,maskClosable:i}=this.props;return r?a.createElement("div",Object.assign({"aria-hidden":!0,key:"mask",className:l()(`${G}-mask`,null!==(e=this.props.maskClassName)&&void 0!==e?e:""),style:t,onClick:i?this.onMaskClick:null},this.props.maskExtraProps)):null}renderHeader(){let e,r;let{title:t,closable:i,headerStyle:n,closeIcon:s}=this.props;if(t&&(e=a.createElement("div",{className:`${G}-title`,"x-semi-prop":"title"},this.props.title)),i){let e=s||a.createElement(h.Z,null);r=a.createElement(u.Z,{className:`${G}-close`,key:"close-btn",onClick:this.close,type:"tertiary",icon:e,theme:"borderless",size:"small"})}return a.createElement("div",{className:`${G}-header`,role:"heading","aria-level":1,style:Object.assign({},n)},e,r)}getDialogElement(){var e;let r=f(this.props,[]),t={};r.width&&(t.width=r.width,!r.mask&&(t.width="100%")),r.height&&(t.height=r.height);let i=this.renderHeader();return a.createElement("div",Object.assign({key:"dialog-element",role:"dialog",tabIndex:-1,className:l()(`${G}-inner`,`${G}-inner-wrap`,null!==(e=this.props.dialogClassName)&&void 0!==e?e:"",`${G}-size-${r.size}`),style:Object.assign(Object.assign({},r.style),t)},this.props.wrapperExtraProps),a.createElement("div",{className:`${G}-content`},i,a.createElement("div",{className:`${G}-body`,style:r.bodyStyle,"x-semi-prop":"children"},r.children),r.footer?a.createElement("div",{className:`${G}-footer`,"x-semi-prop":"footer"},r.footer):null))}render(){let e=this.props,{mask:r,className:t,width:i,onClose:n,maskStyle:s,maskClosable:o,maskClassName:c,title:p,closable:u,headerStyle:h,height:g,style:m,size:v,bodyStyle:D,dialogClassName:y,children:b,footer:H,maskExtraProps:I,wrapperExtraProps:C}=e,E=f(e,["mask","className","width","onClose","maskStyle","maskClosable","maskClassName","title","closable","headerStyle","height","style","size","bodyStyle","dialogClassName","children","footer","maskExtraProps","wrapperExtraProps"]),P=l()(t,{[`${G}-fixed`]:!r,[`${G}-size-${this.props.size}`]:!r}),T={};!r&&i&&(T.width=i);let k=(0,d.Z)(E);return a.createElement("div",Object.assign({className:P,style:T},k),this.getMaskElement(),this.getDialogElement())}constructor(){super(...arguments),this.onMaskClick=e=>{e.target===e.currentTarget&&this.close(e)},this.close=e=>{let{onClose:r}=this.props;r&&r(e)}}}m.propTypes={onClose:o().func,closeIcon:o().node},m.defaultProps={onClose:n()}},457227:function(e,r,t){"use strict";t.d(r,{Z:function(){return m}}),t(874386),t(250440),t(268917),t(429532);var i=t(595814),n=t.n(i),a=t(96008),s=t.n(a),o=t(207813),c=t.n(o),l=t(88648),p=t(713097),u=t.n(p),h=t(627813),d=t(764548),f=t(143690),g=t(723402),G=t(619835);function m(){let e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{prefixCls:t=d.UX.PREFIX,filteredValue:i,filterIcon:a="filter",filterDropdownProps:o,onSelect:p,filterDropdownVisible:m,renderFilterDropdown:v,onFilterDropdownVisibleChange:D}=r,{filterDropdown:y=null}=r,b=void 0!==m,H=!b&&"function"==typeof v,[I,C]=(0,l.useState)(i),E=!H&&m,[P,T]=(0,l.useState)(E);(0,l.useEffect)(()=>{void 0!==m&&T(m)},[m]),(0,l.useEffect)(()=>{C(i)},[i]);let k=u()(`${t}-column-filter`,{on:Array.isArray(i)&&i.length});e="function"==typeof a?a(Array.isArray(i)&&i.length>0):(0,l.isValidElement)(a)?a:l.createElement("div",{className:k},"​",l.createElement(h.Z,{role:"button","aria-label":"Filter data with this column","aria-haspopup":"listbox",tabIndex:-1,size:"default"}));let x=Object.assign(Object.assign(Object.assign(Object.assign({},r),o),{tempFilteredValue:I,setTempFilteredValue:C,confirm:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=(null==e?void 0:e.filteredValue)||I;!c()(r,i)&&p({filteredValue:r}),e.closeDropdown&&T(!1)},clear:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};C([]),p({filteredValue:[]}),e.closeDropdown&&T(!1)},close:()=>{T(!1)}}),{filterDropdownVisible:b?m:P,onFilterDropdownVisibleChange:e=>{H&&T(e),D(e)}});return y=l.isValidElement(y)?y:function e(r){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,{filterMultiple:a=!0,filters:o=[],filteredValue:c=[],filterDropdownVisible:p,onSelect:u=s(),onFilterDropdownVisibleChange:h=s(),trigger:m="click",position:v="bottom",renderFilterDropdown:D,renderFilterDropdownItem:y}=null!=r?r:{},b=n()(r,["tempFilteredValue","setTempFilteredValue","confirm","clear","close","filters"]),H="function"==typeof D?D(b):l.createElement(f.Z.Menu,null,Array.isArray(o)&&o.map((t,n)=>{let s=e=>{let r=e&&e.nativeEvent;r&&(r.stopImmediatePropagation(),r.stopPropagation(),r.preventDefault());let i=[...c],n=i.includes(t.value),s=i.indexOf(t.value);return s>-1?i.splice(s,1):a?i.push(t.value):i=[t.value],u({value:t.value,filteredValue:i,included:!n,domEvent:r})},o=c.includes(t.value),{text:p}=t,{value:h}=t,d=`${i}_${n}`,m="function"==typeof y?y({onChange:s,filterMultiple:a,value:h,text:p,checked:o,filteredValue:c,level:i}):null,v=m&&l.isValidElement(m)?l.cloneElement(m,{key:d}):l.createElement(f.Z.Item,{key:d,onClick:s},a?l.createElement(G.Z,{checked:o},p):l.createElement(g.Z,{checked:o},p));if(Array.isArray(t.children)&&t.children.length){let n=Object.assign(Object.assign({},r),{filters:t.children,trigger:"hover",position:"right"});delete n.filterDropdownVisible,v=e(n,v,i+1)}return v})),I=Object.assign(Object.assign({},r),{onVisibleChange:e=>h(e),trigger:m,position:v,render:H});return null!=p&&(I.visible=p),l.createElement(f.Z,Object.assign({},I,{key:`Dropdown_level_${i}`,className:`${d.UX.PREFIX}-column-filter-dropdown`}),t)}(x,e)}},544627:function(e,r,t){"use strict";t.d(r,{Z:function(){return _}}),t(429532),t(413806),t(826893);var i=t(23902),n=t.n(i),a=t(645260),s=t.n(a),o=t(43715),c=t.n(o),l=t(866674),p=t.n(l),u=t(128231),h=t.n(u),d=t(88648),f=t(713097),g=t.n(f),G=t(201845),m=t.n(G),v=t(944490),D=t(794158),y=t(154337),b=t(839020),H=t(404237),I=t(61035),C=t(619835),E=t(103093),P=t(904542),T=t(458504),k=t(704898),x=function(e,r){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>r.indexOf(i)&&(t[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,i=Object.getOwnPropertySymbols(e);n<i.length;n++)0>r.indexOf(i[n])&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(t[i[n]]=e[i[n]]);return t};let w=v.UX.PREFIX_OPTION;class _ extends d.PureComponent{renderArrow(){var e,r;let t=!this.isLeaf(),{loading:i,expanded:n,showLine:a,expandIcon:s}=this.props;if(i)return d.createElement(P.Z,{wrapperClassName:`${w}-spin-icon`});if(t){if(s){if("function"==typeof s)return s({onClick:this.onExpand,className:`${w}-expand-icon`,expanded:n});if(!d.isValidElement(s))return s;else{let t=g()(`${w}-expand-icon`,{[null===(e=null==s?void 0:s.props)||void 0===e?void 0:e.className]:null===(r=null==s?void 0:s.props)||void 0===r?void 0:r.className});return d.cloneElement(s,{onClick:this.onExpand,className:t})}}return d.createElement(y.Z,{role:"button","aria-label":`${n?"Expand":"Collapse"} the tree item`,className:`${w}-expand-icon`,size:"small",onClick:this.onExpand})}return a?this.renderSwitcher():d.createElement("span",{className:`${w}-empty-icon`})}renderCheckbox(){let{checked:e,halfChecked:r,eventKey:t}=this.props,i=this.isDisabled();return d.createElement("div",{role:"none",onClick:this.onCheck,onKeyPress:this.handleCheckEnterPress},d.createElement(C.Z,{"aria-label":"Toggle the checked state of checkbox",value:t,indeterminate:r,checked:e,disabled:!!i}))}renderIcon(){let{directory:e,treeIcon:r}=this.context,{expanded:t,icon:i,data:n}=this.props;if(i)return i;if(r)return"function"==typeof r?r(this.props):r;if(e)return this.isLeaf()?d.createElement(b.Z,{className:`${w}-item-icon`}):t?d.createElement(H.Z,{className:`${w}-item-icon`}):d.createElement(I.Z,{className:`${w}-item-icon`});return null}renderEmptyNode(){let{emptyContent:e}=this.props,r=g()(w,{[`${w}-empty`]:!0});return d.createElement("ul",{className:r},d.createElement("li",{className:`${w}-label ${w}-label-empty`,"x-semi-prop":"emptyContent"},e))}render(){let e=this.props,{eventKey:r,expanded:t,selected:i,checked:a,halfChecked:o,loading:l,active:p,level:u,empty:h,filtered:f,treeNodeFilterProp:G,display:m,style:v,isEnd:D,showLine:y}=e,b=x(e,["eventKey","expanded","selected","checked","halfChecked","loading","active","level","empty","filtered","treeNodeFilterProp","display","style","isEnd","showLine"]);if(h)return this.renderEmptyNode();let{multiple:H,draggable:I,renderFullLabel:C,dragOverNodeKey:E,dropPosition:P,labelEllipsis:T}=this.context,_=D[D.length-1],S=this.isDisabled(),A=E===r&&-1===P,R=E===r&&1===P,M=g()(w,{[`${w}-level-${u+1}`]:!0,[`${w}-fullLabel-level-${u+1}`]:C,[`${w}-collapsed`]:!t,[`${w}-disabled`]:!!S,[`${w}-selected`]:i,[`${w}-active`]:!H&&p,[`${w}-ellipsis`]:T,[`${w}-drag-over`]:!S&&E===r&&0===P,[`${w}-draggable`]:!S&&I&&!C,[`${w}-fullLabel-draggable`]:!S&&I&&C,[`${w}-fullLabel-drag-over-gap-top`]:!S&&A&&C,[`${w}-fullLabel-drag-over-gap-bottom`]:!S&&R&&C,[`${w}-tree-node-last-leaf`]:_}),O={onClick:this.onClick,onContextMenu:this.onContextMenu,onDoubleClick:this.onDoubleClick,className:M,onExpand:this.onExpand,data:b.data,level:u,onCheck:this.onCheck,style:v,expandIcon:this.renderArrow(),checkStatus:{checked:a,halfChecked:o},expandStatus:{expanded:t,loading:l},filtered:f,searchWord:b.keyword},U={onDoubleClick:this.onDoubleClick,onDragStart:I?this.onDragStart:void 0,onDragEnter:I?this.onDragEnter:void 0,onDragOver:I?this.onDragOver:void 0,onDragLeave:I?this.onDragLeave:void 0,onDrop:I?this.onDrop:void 0,onDragEnd:I?this.onDragEnd:void 0,draggable:!S&&I||void 0};if(C){let e=C(Object.assign({},O));return I?d.cloneElement(e,Object.assign({ref:this.setRef},U)):n()(v)?e:d.cloneElement(e,{style:Object.assign(Object.assign({},s()(e,["props","style"])),v)})}let L=g()(`${w}-label`,{[`${w}-drag-over-gap-top`]:!S&&A,[`${w}-drag-over-gap-bottom`]:!S&&R}),N=s()(b,["data","children","length"]),j=c()(b.pos)?Number(b.pos.split("-")[u+1])+1:1;return d.createElement("li",Object.assign({className:M,role:"treeitem","aria-disabled":S,"aria-checked":a,"aria-selected":i,"aria-setsize":N,"aria-posinset":j,"aria-expanded":t,"aria-level":u+1,"data-key":r,onClick:this.onClick,onKeyPress:this.handleliEnterPress,onContextMenu:this.onContextMenu,onDoubleClick:this.onDoubleClick,ref:this.setRef,style:v},U),d.createElement(k.Z,{showLine:y,prefixcls:w,level:u,isEnd:D}),this.renderArrow(),d.createElement("span",{className:L},H?this.renderCheckbox():null,this.renderIcon(),d.createElement("span",{className:`${w}-label-text`},this.renderRealLabel())))}constructor(e){super(e),this.onSelect=e=>{let{onNodeSelect:r}=this.context;r(e,this.props)},this.onExpand=e=>{let{onNodeExpand:r}=this.context;e&&e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),r(e,this.props)},this.onCheck=e=>{var r,t;if(this.isDisabled())return;let{onNodeCheck:i}=this.context;e.stopPropagation(),null===(t=null===(r=e.nativeEvent)||void 0===r?void 0:r.stopImmediatePropagation)||void 0===t||t.call(r),i(e,this.props)},this.handleCheckEnterPress=e=>{(0,D.Z)(e)&&this.onCheck(e)},this.onContextMenu=e=>{let{onNodeRightClick:r}=this.context;r(e,this.props)},this.onClick=e=>{let{expandAction:r}=this.context;if("doubleClick"===r){this.debounceSelect(e);return}this.onSelect(e),"click"===r&&this.onExpand(e)},this.handleliEnterPress=e=>{(0,D.Z)(e)&&this.onClick(e)},this.onDoubleClick=e=>{let{expandAction:r,onNodeDoubleClick:t}=this.context;e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),p()(t)&&t(e,this.props),"doubleClick"===r&&this.onExpand(e)},this.onDragStart=e=>{let{onNodeDragStart:r}=this.context;e.stopPropagation(),r(e,Object.assign(Object.assign({},this.props),{nodeInstance:this.refNode}));try{e.dataTransfer.setData("text/plain","")}catch(e){}},this.onDragEnter=e=>{let{onNodeDragEnter:r}=this.context;e.preventDefault(),e.stopPropagation(),r(e,Object.assign(Object.assign({},this.props),{nodeInstance:this.refNode}))},this.onDragOver=e=>{let{onNodeDragOver:r}=this.context;e.preventDefault(),e.stopPropagation(),r(e,Object.assign(Object.assign({},this.props),{nodeInstance:this.refNode}))},this.onDragLeave=e=>{let{onNodeDragLeave:r}=this.context;e.stopPropagation(),r(e,Object.assign(Object.assign({},this.props),{nodeInstance:this.refNode}))},this.onDragEnd=e=>{let{onNodeDragEnd:r}=this.context;e.stopPropagation(),r(e,Object.assign(Object.assign({},this.props),{nodeInstance:this.refNode}))},this.onDrop=e=>{let{onNodeDrop:r}=this.context;e.preventDefault(),e.stopPropagation(),r(e,Object.assign(Object.assign({},this.props),{nodeInstance:this.refNode}))},this.getNodeChildren=()=>{let{children:e}=this.props;return e||[]},this.isLeaf=()=>{let{isLeaf:e,loaded:r}=this.props,{loadData:t}=this.context,i=0!==this.getNodeChildren().length;return!1!==e&&(e||!t&&!i||t&&r&&!i)},this.isDisabled=()=>{let{disabled:e}=this.props,{treeDisabled:r}=this.context;return!1!==e&&!!(r||e)},this.renderSwitcher=()=>this.isLeaf()?d.createElement("span",{className:g()(`${w}-switcher`)},d.createElement("span",{className:`${w}-switcher-leaf-line`})):null,this.renderRealLabel=()=>{let{renderLabel:e}=this.context,{label:r,keyword:t,data:i,filtered:n,treeNodeFilterProp:a}=this.props;return p()(e)?e(r,i,t):c()(r)&&n&&t?d.createElement(T.Z,{highlightClassName:`${w}-highlight`,component:"span",sourceString:r,searchWords:[t]}):r},this.setRef=e=>{this.refNode=e},this.state={},this.debounceSelect=h()(this.onSelect,500,{leading:!0,trailing:!1})}}_.contextType=E.Z,_.propTypes={expanded:m().bool,selected:m().bool,checked:m().bool,halfChecked:m().bool,active:m().bool,disabled:m().bool,loaded:m().bool,loading:m().bool,isLeaf:m().bool,pos:m().string,children:m().oneOfType([m().array,m().object]),icon:m().node,directory:m().bool,keyword:m().string,treeNodeFilterProp:m().string,selectedKey:m().string,motionKey:m().oneOfType([m().string,m().arrayOf(m().string)]),isEnd:m().arrayOf(m().bool),showLine:m().bool,expandIcon:m().oneOfType([m().node,m().func])},_.defaultProps={selectedKey:"",motionKey:""}},316953:function(e,r,t){"use strict";t(675373),t.e("86373").then(t.bind(t,523048))},970567:function(e,r,t){"use strict";t(675373),t.e("29259").then(t.bind(t,636652))},759918:function(e,r,t){"use strict";t.d(r,{Q:function(){return s}}),t(250440),t(209955);var i=t(667963),n=t(298874),a=t(799925);class s{static parse(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0;if(!e.includes("#EXTM3U"))throw Error("Invalid m3u8 file");let o=(0,a.UM)(e);return s.isMediaPlaylist(e)?(0,n.$)(o,r,t):(0,i.Z)(o,r)}static isMediaPlaylist(e){return e.includes("#EXTINF:")||e.includes("#EXT-X-TARGETDURATION:")}}},227985:function(e,r,t){"use strict";function i(e){let r=new XMLHttpRequest;r.open("get",e,!1);let t=null;return r.onload=()=>{let e=r.responseText;t={},Function("exports","module","define",e)(t)},r.onerror=()=>{},r.send(),t}t.d(r,{j:function(){return i}}),t(70372)},481713:function(e,r,t){"use strict";t(675373),t(429532),t(338172),t(954372),t(826893);var i=t(883520),n=t(636625),a=t(445289);class s extends i.Z{constructor(e){super(Object.assign({},e)),this.getInputValue=()=>{let{currentColor:e}=this._adapter.getProps(),{format:r}=this._adapter.getStates(),t=e.rgba,i=e.hsva,n=e.hex;return"rgba"===r?`${t.r},${t.g},${t.b}`:"hsva"===r?`${i.h},${i.s},${i.v}`:n.slice(0,7)},this.getValueByInputValue=e=>{let{format:r}=this.getStates();if("rgba"===r){let t=(0,a.Z)(e,r);if(t)return t}else if("hsva"===r){let t=(0,a.Z)(e,r);if(t)return t}else if("hex"===r&&(!e.startsWith("#")&&(e="#"+e),/#[\d\w]{6,8}/.test(e)))return e;return!1},this.handlePickValueWithStraw=()=>{var e,r,t,i;return e=this,r=void 0,t=void 0,i=function*(){let e=this._adapter.getColorPickerFoundation();if(!window.EyeDropper)return;let r=new EyeDropper;try{let t=(yield r.open()).sRGBHex;if(t.startsWith("#"))e.handleChange(t,"hex");else if(t.startsWith("rgba")){let r=n.Z.rgbaStringToRgba(t);r.a=1,e.handleChange(r,"rgba")}}catch(e){}},new(t||(t=Promise))(function(n,a){function s(e){try{c(i.next(e))}catch(e){a(e)}}function o(e){try{c(i.throw(e))}catch(e){a(e)}}function c(e){var r;e.done?n(e.value):((r=e.value)instanceof t?r:new t(function(e){e(r)})).then(s,o)}c((i=i.apply(e,r||[])).next())})},this.handleInputValueChange=e=>{this._adapter.setState({inputValue:e})},this.handleFormatChange=e=>{this._adapter.setState({format:e})}}}r.Z=s},415317:function(e,r,t){"use strict";t.d(r,{U:function(){return n},j:function(){return a}});var i=t(818749);let n={PREFIX:`${i.T}-tag`},a={TAG_SIZE:["default","small","large"],TAG_COLOR:["grey","red","pink","purple","violet","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","white"],TAG_TYPE:["light","solid","ghost"],AVATAR_SHAPE:["square","circle"]}},220006:function(e,r,t){"use strict";t(413806),t(826893),t(268917);var i=t(251526),n=t.n(i),a=t(419936),s=t.n(a),o=t(43715),c=t.n(o);r.Z=(e,r)=>{let t=[];if(c()(r)||n()(r))t=e.split(r);else if(s()(r)){let i=r[0];t=e;for(let e=1;e<r.length;e++)t=t.split(r[e]).join(i);t=t.split(i)}else t.push(e);return t}},459164:function(e,r,t){"use strict";t.d(r,{KT:function(){return h},UX:function(){return c},j2:function(){return u}});var i=t(818749),n=t(120534);let a=`${i.T}-upload`,s="picture",o="list",c={PREFIX:a,LIST:`${a}-list`},l="auto",p="custom",u={FILE_STATUS_UPLOADING:"uploading",FILE_STATUS_SUCCESS:"success",FILE_STATUS_UPLOAD_FAIL:"uploadFail",FILE_STATUS_VALIDATING:"validating",FILE_STATUS_VALID_FAIL:"validateFail",FILE_STATUS_WAIT_UPLOAD:"wait",FILE_LIST_PIC:s,FILE_LIST_DEFAULT:o,LIST_TYPE:[s,o],imageTypes:["image","webp","png","svg","gif","jpg","jpeg","bmp","dpg"],DRAG_AREA_DEFAULT:"default",DRAG_AREA_LEGAL:"legal",DRAG_AREA_ILLEGAL:"illegal",TRIGGER_AUTO:l,TRIGGER_CUSTOM:p,UPLOAD_TRIGGER:[l,p],VALIDATE_STATUS:n.L,PROMPT_POSITION:["left","right","bottom"]},h={PROGRESS_COEFFICIENT:.95}},638060:function(e,r,t){"use strict";t.d(r,{H:function(){return l}});var i=t(520739);t(874386);var n=t(563097),a=t(142650),s=t(398811),o=t(610867),c=t(88648);let l=(0,o.n)(e=>{let[r,t]=(0,c.useState)({}),{playerRef:o}=(0,c.useContext)(a.E);return(0,c.useEffect)(()=>(o.current.plugins.dynamicBg={updateConfig:t},()=>{var e;null===(e=o.current)||void 0===e||delete e.plugins.dynamicBg})),(0,n.jsx)(s.i,(0,i._)({},e,r))})},546345:function(e,r,t){"use strict";t.d(r,{d:function(){return u}});var i=t(520739),n=t(878389),a=t(368200);t(874386);var s=t(563097),o=t(142650),c=t(421386),l=t(610867),p=t(88648);let u=(0,l.n)(e=>{var{props:r}=e,t=(0,a._)(e,["props"]);let l=(0,p.useRef)(null),[u,h]=(0,p.useState)(),{playerRef:d}=(0,p.useContext)(o.E),[f,g]=(0,p.useState)(!0);return(0,p.useEffect)(()=>(d.current.plugins.volume={blur(){var e;null===(e=l.current)||void 0===e||e.blur()},focus(){var e;null===(e=l.current)||void 0===e||e.focus()},updateConfig(e){h(r=>(0,i._)({},r,e))},hide(){g(!1)},show(){g(!0)}},()=>{var e;null===(e=d.current)||void 0===e||delete e.plugins.volume}),[]),f&&(0,s.jsx)(c.g,(0,n._)((0,i._)({},t),{props:(0,i._)({},r,u),ref:l}))})},272254:function(e,r,t){"use strict";t.d(r,{Cm:function(){return i.Cm},Gz:function(){return i.Gz},Mf:function(){return s.M},Zh:function(){return i.Zh},ar:function(){return i.ar},hj:function(){return i.hj},kN:function(){return i.kN},l1:function(){return i.l1},nl:function(){return n.n},o:function(){return i.o},rW:function(){return n.r},xQ:function(){return i.xQ},xr:function(){return a.x}});var i=t(801890);t(657877),t(925437),t(398811),t(421744),t(67582);var n=t(610867);t(132316);var a=t(837324);t(432420),t(835527),t(278674),t(137564);var s=t(625533);t(421386)},227725:function(e,r,t){"use strict";t.d(r,{M:function(){return i}}),t(268917);let i=(e,r)=>{if(!e)return[];let t=[];for(let i=0;i<r.length;i++)t.push({start:100*r.start(i)/e|0,end:100*r.end(i)/e|0});return t}},783774:function(e,r,t){"use strict";t.d(r,{F:function(){return s}});var i=t(520739),n=t(878389),a=t(535105);let s=(0,n._)((0,i._)({},a.ce,a.oU),{FULLSCREEN_CHANGE:"fullscreenchange",DESTROY:"destroy",USER_ACTION:"user_action",USER_ACTIVE_CHANGE:"user_active_change",NEXT_INST_CHANGE:"next_inst_change",BLUR:"blur",FOCUS:"focus",VIDEO_RESIZE:"video_resize",REPLAY:"replay",ROTATE:"rotate",MINI_STATE_CHANGE:"mini_state_change",DEFINITION_CHANGE:"definition_change"})},887721:function(e,r,t){"use strict";t.d(r,{P:function(){return n}});var i,n=((i=n||{})[i.CONTROL_LEFT=0]="CONTROL_LEFT",i[i.CONTROL_RIGHT=1]="CONTROL_RIGHT",i)},124522:function(e,r,t){"use strict";t.d(r,{c:function(){return o}});var i=t(134761),n=t(520739);t(874386),t(268917);var a=t(960569),s=t(535105);class o extends a.Sy{beforePlayerInit(){if(!this._inited)for(let[e,r]of(this._inited=!0,Object.entries(this._properties)))this._player.defineProperty(e,(0,n._)({configurable:!0},r))}beforeDestroy(){for(let e of Object.keys(this._properties))this._player.removeProperty(e)}constructor(...e){var r;super(...e),r=this,(0,i._)(this,"_plugins",{}),(0,i._)(this,"_properties",{playerId:{value:`douyin-player-${Date.now()}`},plugins:{value:new Proxy({},{get:(e,r)=>this._player.getPlugin(r.toLowerCase()),set:(e,r,t)=>(this._plugins[r.toLowerCase()]=t,!0),deleteProperty:(e,r)=>(delete this._plugins[r.toLowerCase()],!0)})},root:{get:()=>this._player.config.baseConfig.el},video:{get:()=>this._player._video},bufferedPoint:{get:()=>{let e={start:0,end:0};if(!this._player)return e;let r=this._player.buffered;if(!r||0===r.length)return e;for(let e=0;e<r.length;e++)if((r.start(e)<=this._player.currentTime||.1>r.start(e))&&r.end(e)>=this._player.currentTime)return{start:r.start(e),end:r.end(e)};return e}},topBar:{get:()=>this._root.querySelector("douyin-player-top-bar")},addClass:{value:e=>{this._root.classList.add(e)}},getFullscreen:{value:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return r._player.requestFullscreen(...t)}},getPlugin:{value:e=>{if((e=e.toLowerCase())in this._plugins)return this._plugins[e];for(let r of this._player._plugins)if(r.constructor.pluginName.toLowerCase()===e)return r}},hasClass:{value:e=>this._root.classList.contains(e)},playNext:{value:e=>{let r;let{baseConfig:t,preset:i}=e,n=this._player.config.baseConfig,a=this._player.coreType;(null==t?void 0:t.protocol)===s.b$.MP3?r="media":"media"===a&&(r="mediastream"),t&&(r&&(t.coreType=r),!t.el&&(null==n?void 0:n.el)&&(t.el=n.el)),this._player.configManager.reset(e),this._player.startPlay({plugins:null==i?void 0:i.plugins,resetCore:!0,isPlayNext:!0}),this._player.emit("playnext")}},registerPlugin:{value:(e,r)=>{let t=[...this._player._plugins.map(e=>e.constructor),e];this._player.updateConfig({preset:{plugins:t,pluginsConfig:{[e.pluginName]:r}}})}},retry:{value:()=>{this._player.refresh()}},removeClass:{value:e=>{this._root.classList.remove(e)}},seek:{value:e=>{this._player.currentTime=e}},unRegisterPlugin:{value:e=>{let r=[];for(let t of this._player._plugins)t.constructor.pluginName!==e&&r.push(t.constructor);this._player.updateConfig({preset:{plugins:r}})}}})}}(0,i._)(o,"pluginName","compatibility")},755609:function(e,r,t){"use strict";function i(e,r,t,i,n,a,s){try{var o=e[a](s),c=o.value}catch(e){t(e);return}o.done?r(c):Promise.resolve(c).then(i,n)}t.d(r,{p:function(){return l}});function n(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},i=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.forEach(function(r){var i,n,a;i=e,n=r,a=t[r],n in i?Object.defineProperty(i,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):i[n]=a})}return e}function a(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):(function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t.push.apply(t,i)}return t})(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}),e}var s=function(){};function o(e){return c.apply(this,arguments)}function c(){var e;return e=function(e){var r,t,i,n,a,o,c,l,p,u,h,d,f,g,G,m,v;return function(e,r){var t,i,n,a,s={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function o(a){return function(o){return function(a){if(t)throw TypeError("Generator is already executing.");for(;s;)try{if(t=1,i&&(n=2&a[0]?i.return:a[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,a[1])).done)return n;switch(i=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,i=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(n=(n=s.trys).length>0&&n[n.length-1])&&(6===a[0]||2===a[0])){s=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){s.label=a[1];break}if(6===a[0]&&s.label<n[1]){s.label=n[1],n=a;break}if(n&&s.label<n[2]){s.label=n[2],s.ops.push(a);break}n[2]&&s.ops.pop(),s.trys.pop();continue}a=r.call(e,s)}catch(e){a=[6,e],i=0}finally{t=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,o])}}}(this,function(D){switch(D.label){case 0:r=e.url,t=e.method,i=e.data,a=void 0===(n=e.success)?s:n,c=void 0===(o=e.fail)?s:o,p=void 0!==(l=e.withCredentials)&&l,h=void 0===(u=e.getResponseText)?s:u,d={method:t,headers:{"Content-Type":"application/json"},credentials:p?"include":"omit"},"POST"===t&&i&&(d.body=i),D.label=1;case 1:return D.trys.push([1,4,,5]),[4,fetch(r,d)];case 2:return[4,(f=D.sent()).text()];case 3:if(g=D.sent(),h(g),f.status>=400)throw Error(g||f.statusText);return G=g.trim()?JSON.parse(g):{},a(G),[3,5];case 4:var y,b;return y=m=D.sent(),v=(null!=(b=Error)&&"undefined"!=typeof Symbol&&b[Symbol.hasInstance]?!!b[Symbol.hasInstance](y):y instanceof b)?m:Error("Network request failed"),c(v),[3,5];case 5:return[2]}})},(c=function(){var r=this,t=arguments;return new Promise(function(n,a){var s=e.apply(r,t);function o(e){i(s,n,a,o,c,"next",e)}function c(e){i(s,n,a,o,c,"throw",e)}o(void 0)})}).apply(this,arguments)}var l=function(){return window.fetch?{get:function(e){o(a(n({},e),{method:"GET"})).catch(s)},post:function(e){o(a(n({},e),{method:"POST"})).catch(s)}}:{get:s,post:s}}},167961:function(e){var r,t;r=0,t=function(){"use strict";function e(e,r){if(!(e instanceof r))throw TypeError("Cannot call a class as a function")}function r(e,r){for(var t=0;t<r.length;t++){var i=r[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(e,t,i){return t&&r(e.prototype,t),i&&r(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function i(e,r){if(e){if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}}function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,i=Array(r);t<r;t++)i[t]=e[t];return i}var a,s,o=function(){return"undefined"==typeof window},c=function(e,r,t){var i=function(e,r){for(var t=0;t<e.length||t<r.length;++t){var i=0,n=0;if(t<e.length&&(i=parseInt(e[t],10)),t<r.length&&(n=parseInt(r[t],10)),i>n)return 1;if(i<n)return -1}return 0}(e.split("."),t.split("."));return"=="===r&&0===i||">"===r&&i>0||">="===r&&i>=0||"<"===r&&i<0||"<="===r&&i<=0},l=new(function(){function r(){e(this,r),this._prefix="[PC抖音客户端 SDK Monitor]:  "}return t(r,[{key:"log",value:function(e){}},{key:"info",value:function(e){}},{key:"warn",value:function(e){}},{key:"error",value:function(e){}}]),r}());(a=s||(s={}))[a.Success=0]="Success",a[a.Failure=-1]="Failure",a[a.EnvError=-2]="EnvError",a[a.RuleError=-3]="RuleError",a[a.Unauthorized=-4]="Unauthorized",a[a.SDKInnerError=-5]="SDKInnerError",a[a.Unknown=-9]="Unknown";var p=new(function(){function r(){e(this,r),this._methodRuleMap={}}return t(r,[{key:"registerMethodRules",value:function(e){var r=e.map,t=void 0===r?"":r,i=e.target;t?this._methodRuleMap[t]=void 0===i?[]:i:l.error("register method rules error")}},{key:"getRuntimeOS",value:function(){return function(){if(o())return"ssr";var e="Win32"===(null==navigator?void 0:navigator.platform)||"Windows"===(null==navigator?void 0:navigator.platform),r="Mac68K"===(null==navigator?void 0:navigator.platform)||"MacPPC"===(null==navigator?void 0:navigator.platform)||"Macintosh"===(null==navigator?void 0:navigator.platform)||"MacIntel"===(null==navigator?void 0:navigator.platform),t="X11"===(null==navigator?void 0:navigator.platform)&&!e&&!r,i=String(null==navigator?void 0:navigator.platform).indexOf("Linux")>-1;return r?"mac":t?"unix":i?"linux":e?"windows":"unknown"}()}},{key:"getRuntimeVersion",value:function(){var e,r,t;return o()?(l.error("can't get client version in ssr"),""):(null===(t=null===(r=null===(e=null==window?void 0:window.TTE_ENV)||void 0===e?void 0:e.initPageStore)||void 0===r?void 0:r.page)||void 0===t?void 0:t.version)||""}},{key:"checkOS",value:function(e){return!e||"*"===e||this.getRuntimeOS()===e}},{key:"checkMethodAvailable",value:function(e){var r,t,i;return!!this.checkInClient()&&void 0!==(null===(i=null===(t=null===(r=null==window?void 0:window.TTE_ENV)||void 0===r?void 0:r.bridge)||void 0===t?void 0:t.EVENTS)||void 0===i?void 0:i.TO_MAIN_EVENT_TYPES[e])}},{key:"canIUse",value:function(e){var r=this.checkMethodAvailable(e);return{code:s.Success,data:{isAvailable:r}}}},{key:"checkVersion",value:function(e){var r,t,n,a,s,o,l,p;return!e||(r=this.getRuntimeVersion(),o=void 0===(s=(a=(t=e.split("-"),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var i,n,a=[],s=!0,o=!1;try{for(t=t.call(e);!(s=(i=t.next()).done)&&(a.push(i.value),!r||a.length!==r);s=!0);}catch(e){o=!0,n=e}finally{try{s||null==t.return||t.return()}finally{if(o)throw n}}return a}}(t,2)||i(t,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()))[0])?"":s,p=void 0===(l=a[1])?"":l,!o&&!p||(o?p?c(r,">=",o)&&c(r,"<=",p):c(r,">=",o):c(r,"<=",p)))}},{key:"checkDetail",value:function(e){if(!e||0===e.length)return!0;var r,t=!1,n=function(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=i(e))){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return o=e.done,e},e:function(e){c=!0,s=e},f:function(){try{o||null==t.return||t.return()}finally{if(c)throw s}}}}(e);try{for(n.s();!(r=n.n()).done;){var a=r.value.os;if(t=this.checkOS(a))break}}catch(e){n.e(e)}finally{n.f()}return t}},{key:"checkRule",value:function(e){var r=e.target;return!e||!!this.checkDetail(void 0===r?[]:r)}},{key:"on",value:function(e,r){return this.checkInClient()?window.TTE_ENV.bridge.on(e,r):(l.warn("turn on listening to ".concat(e," failed, env is not in client.")),!1)}},{key:"off",value:function(e,r){return this.checkInClient()?window.TTE_ENV.bridge.off(e,r):(l.warn("turn off listening to ".concat(e," failed, env is not in client.")),!1)}},{key:"checkInClient",value:function(){var e;return!o()&&void 0!==(null===(e=null==window?void 0:window.TTE_ENV)||void 0===e?void 0:e.bridge)}},{key:"call",value:function(e){var r=this,t=e.params,i=void 0===t?{}:t,n=e.method,a=e.rule,o=e.transParameters,c=void 0!==o&&o;return new Promise(function(e){var t={code:s.Unknown,data:null,msg:"Something went wrong. maybe polyfill."};try{if(!r.checkInClient()){var o="WARN:[".concat(n,"]The current environment is not inside the client.");return t.code=s.EnvError,t.msg=o,l.warn(o),void e(t)}if(!r.checkMethodAvailable(n)){var p="WARN: [".concat(n,"]The current system doesn't support this method.");return t.code=s.RuleError,t.msg=p,l.warn(p),void e(t)}if(!r.checkRule(a)){var u="WARN: [".concat(n,"]The method invocation environment does not meet the rules.");return t.code=s.RuleError,t.msg=u,l.warn(u),void e(t)}}catch(r){var h="Bridge SDK Inner Error: ".concat(n,"-{").concat(JSON.stringify(i),"}. ").concat(r.message," | ").concat(r.stack);return l.error(h),t.msg=h,t.code=s.SDKInnerError,void e(t)}window.TTE_ENV.bridge.invoke(n,c?i:{data:i}).then(function(r){var i,n,a;void 0!==(null==r?void 0:r._to_sdk)?(t.code=null!==(i=r._to_sdk.code)&&void 0!==i?i:t.code,t.data=null!==(n=r.data)&&void 0!==n?n:null,t.msg=null!==(a=r._to_sdk.msg)&&void 0!==a?a:"success"):(t.code=s.Success,t.data=r,t.msg="success"),e(t)}).catch(function(r){var a="Bridge SDK Execute Failed: ".concat(n,"-{").concat(JSON.stringify(i),"}}. ").concat(r.message," | ").concat(r.stack);t.code=s.Failure,t.msg=r.message,l.error(a),e(t)})})}}]),r}());function u(e){Object.keys(e).forEach(function(r){var t,i=(null===(t=e[r])||void 0===t?void 0:t.rule)||{};p.registerMethodRules(i)})}var h={target:[{os:"*"}],map:"app.getVersion"};function d(){return p.call({rule:h,method:"GET_VERSION"})}d.rule=h;var f={target:[{os:"*"}],map:"app.setAlwaysOnTop"};function g(e){return p.call({rule:f,method:"SET_ALWAYS_ON_TOP",params:e,transParameters:!0})}g.rule=f;var G={target:[{os:"*"}],map:"app.changeToOriginalMode"};function m(){return p.call({rule:G,method:"CHANGE_TO_ORIGINAL_MODE"})}m.rule=G;var v={target:[{os:"*"}],map:"app.changeToSmallMode"};function D(){return p.call({rule:v,method:"CHANGE_TO_SMALL_MODE"})}D.rule=v;var y={target:[{os:"*"}],map:"app.isAlwaysOnTop"};function b(){return p.call({rule:y,method:"IS_ALWAYS_ON_TOP"})}b.rule=y;var H={target:[{os:"*"}],map:"app.mainWindowMoveTop"};function I(){return p.call({rule:H,method:"MAIN_WINDOW_MOVE_TOP"})}I.rule=H;var C={target:[{os:"*"}],map:"app.minimize"};function E(){return p.call({rule:C,method:"WINDOW_MIN"})}E.rule=C;var P={target:[{os:"*"}],map:"app.handlePageReady"};function T(){return p.call({rule:P,method:"PAGE_READY"})}T.rule=P;var k={target:[{os:"*"}],map:"app.maximize"};function x(){return p.call({rule:k,method:"WINDOW_MAX"})}x.rule=k;var w={target:[{os:"*"}],map:"app.canGoBack"};function _(){return p.call({rule:w,method:"CAN_GO_BACK"})}_.rule=w;var S={target:[{os:"*"}],map:"app.clearCookie"};function A(){return p.call({rule:S,method:"CLEAR_COOKIE"})}A.rule=S;var R={target:[{os:"*"}],map:"app.getWid"};function M(){return p.call({rule:R,method:"GET_WID"})}M.rule=R;var O={target:[{os:"*"}],map:"app.closeParent"};function U(){return p.call({rule:O,method:"CLOSE_PARENT"})}U.rule=O;var L={target:[{os:"*"}],map:"app.closeWindow"};function N(){return p.call({rule:L,method:"WINDOW_CLOSE"})}N.rule=L;var j={target:[{os:"*"}],map:"app.getAllClientLog"};function F(){return p.call({rule:j,method:"GET_ALL_CLIENT_LOG"})}F.rule=j;var W={target:[{os:"*"}],map:"app.getAppConfigItem"};function V(e){return p.call({rule:W,method:"GET_APP_CONFIG_ITEM",params:e})}V.rule=W;var X={target:[{os:"*"}],map:"app.goBack"};function B(){return p.call({rule:X,method:"GO_BACK"})}B.rule=X;var $={target:[{os:"*"}],map:"app.getPageStore"};function Z(){return p.call({rule:$,method:"GET_PAGE_STORE"})}Z.rule=$;var z={target:[{os:"*"}],map:"app.getSettings"};function K(){return p.call({rule:z,method:"GET_SETTINGS"})}K.rule=z;var Y={target:[{os:"*"}],map:"app.isFull"};function J(){return p.call({rule:Y,method:"WINDOW_IS_FULL"})}J.rule=Y;var q={target:[{os:"*"}],map:"app.openWallpaperWindow"};function Q(){return p.call({rule:q,method:"OPEN_WALLPAPER_WINDOW"})}Q.rule=q;var ee={target:[{os:"*"}],map:"app.getChannelId"};function er(){return p.call({rule:ee,method:"GET_CHANNEL_ID"})}er.rule=ee;var et={target:[{os:"*"}],map:"app.reload"};function ei(){return p.call({rule:et,method:"RELOAD"})}ei.rule=et;var en={target:[{os:"mac"}],map:"app.setFullScreenable"};function ea(e){return p.call({rule:en,method:"SET_FULL_SCREENABLE",params:e,transParameters:!0})}ea.rule=en;var es={target:[{os:"*"}],map:"app.getAllWindowData"};function eo(){return p.call({rule:es,method:"GET_ALL_WINDOW_DATA"})}eo.rule=es;var ec={target:[{os:"*"}],map:"app.reloadWindowFromId"};function el(){return p.call({rule:ec,method:"RELOAD_FROM_ID"})}el.rule=ec;var ep={target:[{os:"*"}],map:"app.reportStat"};function eu(e){return p.call({rule:ep,method:"REPORT_STAT",params:e,transParameters:!0})}eu.rule=ep;var eh={target:[{os:"*"}],map:"app.setAppConfigItem"};function ed(e){return p.call({rule:eh,method:"SET_APP_CONFIG_ITEM",params:e})}ed.rule=eh;var ef={target:[{os:"*"}],map:"app.setAutoStart"};function eg(e){return p.call({rule:ef,method:"SET_AUTO_START",params:e})}eg.rule=ef;var eG={target:[{os:"*"}],map:"app.setCloseToTray"};function em(e){return p.call({rule:eG,method:"SET_CLOSE_TO_TRAY",params:e})}em.rule=eG;var ev={target:[{os:"*"}],map:"app.setMiniMizeToTray"};function eD(e){return p.call({rule:ev,method:"SET_MINIMIZE_TO_TRAY",params:e})}eD.rule=ev;var ey={target:[{os:"*"}],map:"app.showAbout"};function eb(e){return p.call({rule:ey,method:"WINDOW_SHOW_ABOUT",params:e,transParameters:!0})}eb.rule=ey;var eH={target:[{os:"*"}],map:"app.syncLoginState"};function eI(e){return p.call({rule:eH,method:"SYNC_LOGIN_STATE",params:e,transParameters:!0})}eI.rule=eH;var eC={target:[{os:"*"}],map:"app.themeChange"};function eE(e){return p.call({rule:eC,method:"THEME_CHANGE",params:e})}eE.rule=eC;var eP={target:[{os:"*"}],map:"app.getAllDisplays"};function eT(){return p.call({rule:eP,method:"GET_ALL_DISPLAYS"})}eT.rule=eP;var ek={target:[{os:"*"}],map:"app.getPrimaryDisplay"};function ex(){return p.call({rule:ek,method:"GET_PRIMARY_DISPLAY"})}ex.rule=ek;var ew={target:[{os:"*"}],map:"app.navigationGoBack"};function e_(){return p.call({rule:ew,method:"NAVIGATION_GO_BACK"})}e_.rule=ew;var eS={target:[{os:"windows"}],map:"app.getAutoStart"};function eA(){return p.call({rule:eS,method:"GET_AUTO_START"})}eA.rule=eS;var eR={target:[{os:"*"}],map:"app.showUpdateModal"};function eM(){return p.call({rule:eR,method:"SHOW_UPDATE_MODAL"})}eM.rule=eR;var eO={target:[{os:"*"}],map:"app.getIsUpdatePackageReady"};function eU(){return p.call({rule:eO,method:"GET_IS_UPDATE_PACKAGE_READY"})}eU.rule=eO;var eL={target:[{os:"*"}],map:"app.getClientUpdateInfo"};function eN(){return p.call({rule:eL,method:"GET_CLIENT_UPDATE_INFO"})}eN.rule=eL;var ej={target:[{os:"*"}],map:"app.quitUpdateTip"};function eF(){return p.call({rule:ej,method:"QUIT_UPDATE_TIP"})}eF.rule=ej;var eW={target:[{os:"mac"}],map:"app.getMediaAccessStatus"};function eV(e){return p.call({rule:eW,method:"GET_MEDIA_ACCESS_STATUS",params:e,transParameters:!0})}eV.rule=eW;var eX={target:[{os:"mac"}],map:"app.askForMediaAccess"};function eB(e){return p.call({rule:eX,method:"ASK_FOR_MEDIA_ACCESS",params:e,transParameters:!0})}eB.rule=eX;var e$={target:[{os:"mac"}],map:"app.getIsMas"};function eZ(){return p.call({rule:e$,method:"GET_IS_MAS"})}eZ.rule=e$;var ez={target:[{os:"*"}],map:"app.getIsFrontShow"};function eK(){return p.call({rule:ez,method:"GET_IS_FRONT_SHOW"})}eK.rule=ez;var eY={target:[{os:"*"}],map:"app.downloadWallpaper"};function eJ(e){return p.call({rule:eY,method:"DOWNLOAD_WALLPAPER",params:e,transParameters:!0})}eJ.rule=eY;var eq={target:[{os:"*"}],map:"app.getStoreItem"};function eQ(e){return p.call({rule:eq,method:"GET_STORE_ITEM",params:e,transParameters:!0})}eQ.rule=eq;var e0={target:[{os:"*"}],map:"app.setStoreItem"};function e1(e){return p.call({rule:e0,method:"SET_STORE_ITEM",params:e,transParameters:!0})}e1.rule=e0;var e6={target:[{os:"*"}],map:"app.getMetrics"};function e3(){return p.call({rule:e6,method:"GET_METRICS"})}e3.rule=e6;var e5={target:[{os:"*"}],map:"app.printFirstFeedShow"};function e2(e){return p.call({rule:e5,method:"printFirstFeedShow",params:e,transParameters:!0})}e2.rule=e5;var e4={target:[{os:"windows"}],map:"app.getHardwareDecodeState"};function e7(){return p.call({rule:e4,method:"getHardwareDecodeState"})}e7.rule=e4;var e8={target:[{os:"*"}],map:"app.isTopWebview"};function e9(){return p.call({rule:e8,method:"isTopWebview"})}e9.rule=e8;var re={target:[{os:"*"}],map:"app.getVolumeInfo"};function rr(){return p.call({rule:re,method:"getVolumeInfo"})}rr.rule=re;var rt={target:[{os:"*"}],map:"app.openInternalBrowser"};function ri(e){return p.call({rule:rt,method:"openInternalBrowser",params:e,transParameters:!0})}ri.rule=rt;var rn={target:[{os:"*"}],map:"app.mainWindowShowView"};function ra(){return p.call({rule:rn,method:"mainWindowShowView"})}ra.rule=rn;var rs={target:[{os:"*"}],map:"app.showErrorPage"};function ro(){return p.call({rule:rs,method:"showErrorPage"})}ro.rule=rs;var rc={target:[{os:"*"}],map:"app.getMonitorInfo"};function rl(){return p.call({rule:rc,method:"getMonitorInfo"})}rl.rule=rc;var rp={target:[{os:"*"}],map:"app.openDriverCheckWindow"};function ru(){return p.call({rule:rp,method:"openDriverCheckWindow"})}ru.rule=rp;var rh={target:[{os:"*"}],map:"app.checkDriver"};function rd(){return p.call({rule:rh,method:"checkDriver"})}rd.rule=rh;var rf={getVersion:d,setAlwaysOnTop:g,changeToOriginalMode:m,changeToSmallMode:D,isAlwaysOnTop:b,mainWindowMoveTop:I,minimize:E,handlePageReady:T,maximize:x,canGoBack:_,clearCookie:A,getWid:M,closeParent:U,closeWindow:N,getAllClientLog:F,getAppConfigItem:V,goBack:B,getPageStore:Z,getSettings:K,isFull:J,openWallpaperWindow:Q,getChannelId:er,reload:ei,setFullScreenable:ea,getAllWindowData:eo,reloadWindowFromId:el,reportStat:eu,setAppConfigItem:ed,setAutoStart:eg,setCloseToTray:em,setMiniMizeToTray:eD,showAbout:eb,syncLoginState:eI,themeChange:eE,getAllDisplays:eT,getPrimaryDisplay:ex,navigationGoBack:e_,getAutoStart:eA,showUpdateModal:eM,getIsUpdatePackageReady:eU,getClientUpdateInfo:eN,quitUpdateTip:eF,getMediaAccessStatus:eV,askForMediaAccess:eB,getIsMas:eZ,getIsFrontShow:eK,downloadWallpaper:eJ,getStoreItem:eQ,setStoreItem:e1,getMetrics:e3,printFirstFeedShow:e2,getHardwareDecodeState:e7,isTopWebview:e9,getVolumeInfo:rr,openInternalBrowser:ri,mainWindowShowView:ra,showErrorPage:ro,getMonitorInfo:rl,openDriverCheckWindow:ru,checkDriver:rd};u(rf);var rg={target:[{os:"*"}],map:"user.getUserUniqueId"};function rG(){return p.call({rule:rg,method:"GET_USER_UNIQUE_ID"})}rG.rule=rg;var rm={target:[{os:"*"}],map:"user.getCsrInitialData"};function rv(){return p.call({rule:rm,method:"getCsrInitialData"})}rv.rule=rm;var rD={getUserUniqueId:rG,getCsrInitialData:rv};return u(rD),{app:rf,user:rD,util:{canIUse:p.canIUse.bind(p),isClient:p.checkInClient,sdkVersion:"0.1.10"},on:p.on.bind(p),off:p.off.bind(p)}},e.exports=t()},673035:function(e,r,t){"use strict";t.d(r,{Z:function(){return n}});let i=`Arc(TM) A770M Graphics|995
Arc(TM) A770 Graphics|983
Arc(TM) A770 Graphics|969
Arc(TM) A580 Graphics|944
Arc(TM) A730M Graphics|822
Arc(TM) A750 Graphics|768
Arc(TM) A750 Graphics|768
Arc(TM) A550M Graphics|660
Arc(TM) A550M Graphics|634
Xe Graphics ReleaseInternal|561
Arc(TM) A770M Graphics|498
Arc(TM) A380 Graphics|473
Arc(TM) A380 Graphics|468
Arc(TM) A370M Graphics|342
Arc(TM) A370M Graphics|341
Xe Graphics|319
HD Graphics 630 GT2|309
Arc(TM) A350M Graphics|284
Iris(R) Xe MAX Graphics|214
Iris(R) Xe Graphics RI|205
Iris(R) Xe Graphics ReleaseInternal|181
Iris(R) Xe Graphics|180
Gen12 Desktop Graphics Controller|179
Iris(R) Xe Graphics|178
Iris(R) Xe MAX Graphics|168
Corporation Iris Xe Graphics|167
Corporation TigerLake-LP GT2 [Iris Xe Graphics]|162
Xe Graphics|158
Arc(TM) A350M Graphics|156
Corporation TigerLake GT2 [Iris Xe Graphics]|149
UHD Graphics 770|138
UHD Graphics ReleaseInternal|137
Iris(R) Pro Graphics P580|137
Iris(R) Plus Graphics|132
Iris Plus Graphics|127
Iris(R) Pro Graphics 580|126
UHD Graphics 770|125
UHD Graphics 750|125
Radeong 0.4 on AMD TONGA (DRM 3.1.0, LLVM 3.9.0)|123
Corporation Iris Plus Graphics G7|123
Iris(R) Plus Graphics|122
Iris(R) Plus Graphics 940|121
Iris(R) Plus Graphics 650|121
Iris(R) Plus Graphics 655|121
Iris(R) Plus Graphics 655|121
HD Graphics P4600|120
Iris(TM) Pro Graphics 6200|120
Iris(R) Plus Graphics|118
Iris(R) Plus Graphics 650|116
Iris(R) Plus Graphics 655|115
Iris(R) Pro Graphics 580|114
Corporation Iris Pro Graphics 580|114
Iris(R) Plus Graphics 645|113
Iris(TM) Pro Graphics 6200|113
Iris(TM) Pro Graphics P580|113
Corporation Iris Plus Graphics 655|112
Arc(TM) Graphics RI|111
Iris(R) Plus Graphics 655|111
Iris(R) Plus Graphics 655|110
Iris(R) Plus Graphics|110
UHD Graphics|110
Iris Plus Graphics 655|108
Iris(R) Plus Graphics 650|108
Iris(R) Plus Graphics 650|108
Iris(TM) Pro Graphics 580|108
Iris(TM) Pro Graphics 6200|107
Iris Graphics 6100|107
Iris(TM) Pro Graphics 6200|107
Iris(R) Plus Graphics 645|106
UHD Graphics 730|106
Iris(TM) Pro Graphics 6200|103
Iris Pro Graphics 580|102
Corporation Iris Pro Graphics 6200|102
Iris(R) Plus Graphics gfx-driver-user-comp_media-21486 DC ReleaseInternal|101
Iris(R) Pro Graphics 580|101
Iris Plus Graphics 645|101
UHD Graphics 750|100
Iris(TM) Pro Graphics 580|99
Iris(TM) Graphics 550|99
Iris(TM) Pro Graphics P6300|99
Iris(R) Plus Graphics 650|99
Iris(TM) Pro Graphics 5200|98
Iris(R) Graphics 550|97
Iris(R) Plus Graphics|97
Iris(R) Plus Graphics 650|96
Iris(R) Plus Graphics 655|96
Iris(R) Graphics 550|96
Iris(R) Plus Graphics 645|95
Iris Plus Graphics 650|95
Iris(R) Graphics 550|95
Iris Graphics 550|93
Iris(R) Plus Graphics 650|93
Iris(R) Pro Graphics 580|93
Iris(TM) Plus Graphics 650|91
Iris(TM) Graphics 550|91
Iris(R) Plus Graphics 640|89
Iris(TM) Plus Graphics 650|88
Iris(TM) Pro Graphics P6300|88
Iris(TM) Plus Graphics 650|88
Iris(TM) Graphics 550|87
UHD Graphics 730|87
Corporation Iris Plus Graphics 650|87
Iris(TM) Pro Graphics 5200|86
Corporation CometLake-H GT2 [UHD Graphics]|86
Iris(R) Graphics 540|86
UHD Graphics P630|86
UHD Graphics 630|85
Iris(TM) Graphics 540|85
Iris(TM) Plus Graphics 640|84
Iris(TM) Graphics 540|84
UHD Graphics 630|84
UHD Graphics 630|83
UHD Graphics P630|83
Iris(TM) Plus Graphics 640|83
UHD Graphics 630|83
UHD Graphics 630|83
Iris Plus Graphics 640|83
Iris(TM) Graphics 540|82
UHD Graphics 630|82
UHD Graphics 630|82
Iris(TM) Pro Graphics 5200|81
UHD Graphics 630|81
HD Graphics 630|81
UHD Graphics 630|81
UHD Graphics 630|81
UHD Graphics 630|80
UHD Graphics 630|80
UHD Graphics 630|80
Iris Pro Graphics 6200|80
UHD Graphics 630|80
Iris Graphics 540|80
HD Graphics 630|80
Iris(TM) Graphics 540|80
Iris(TM) Pro Graphics 5200|79
UHD Graphics 630|79
UHD Graphics 630|79
UHD Graphics 630|79
Iris Graphics 540|79
UHD Graphics 630|79
UHD Graphics|78
Corporation Sky Lake Integrated Graphics|78
Iris(TM) Pro Graphics 6200|78
Corporation WhiskeyLake-U GT2 [UHD Graphics 620]|78
Radeong 0.4 on AMD BONAIRE (DRM 2.43.0, LLVM 3.8.0)|78
UHD Graphics 710|78
UHD Graphics 630|78
UHD Graphics P630|77
UHD Graphics 630|77
UHD Graphics 630 (Desktop 9 Series)|77
UHD Graphics 630|77
Coffee Lake UHD Graphics|77
Iris(TM) Pro Graphics 5200|77
UHD Graphics 630|76
Iris(R) Plus Graphics 640|76
Iris(TM) Pro Graphics 5200|76
UHD Graphics 630|76
UHD Graphics|76
UHD Graphics 630|76
Iris(TM) Pro Graphics 5200|75
UHD Graphics 630|75
UHD Graphics P630|75
HD Graphics P530|75
HD Graphics 630|75
Iris(TM) Pro Graphics 5200|75
UHD Graphics 630|75
Iris(TM) Pro Graphics 5200|75
HD Graphics 620|74
UHD Graphics 630|74
HD Graphics 630|74
HD Graphics 630|74
Coffee Lake HD Graphics|74
UHD Graphics 630|74
Iris(TM) Graphics 540|74
UHD 630|74
Iris(R) Graphics 540|73
UHD Graphics 620|73
Iris Graphics 6200|73
Corporation CoffeeLake-H GT2 [UHD Graphics 630]|73
UHD Graphics 630 (Desktop)|73
HD Graphics ICL RVP|73
UHD Graphics 630|73
HD Graphics 630|72
Iris Pro|72
KBL Unknown|72
UHD Graphics 630|72
Iris(TM) Pro Graphics 5200|72
HD Graphics 530|72
Corporation UHD Graphics 630 (Desktop 9 Series)|72
Radeon Pro Vega 16|72
Iris(TM) Graphics 540|72
Iris(R) Graphics 540|72
UHD Graphics 630|71
HD Graphics 630|71
Iris(TM) Pro Graphics 5200|71
UHD Graphics 630|71
Iris Pro|71
CometLake UHD Graphics 630|71
HD Graphics 630|71
UHD Graphics|71
Iris(TM) Plus Graphics 640|71
UHD Graphics|71
Corporation UHD Graphics|70
Iris Pro Graphics 6200|70
Iris(R) Graphics 540|70
Graphics|70
UHD Graphics 630|70
HD Graphics ICL RVP BigSur|70
UHD Graphics ReleaseInternal|70
HD Graphics 530|70
UHD Graphics 630|70
UHD Graphics|70
UHD Graphics gfx-driver-user-comp_core-23599|70
UHD Graphics 630|69
UHD Graphics|69
Iris(TM) Pro Graphics 5200|69
Corporation Iris Plus Graphics G1 (Ice Lake)|69
HD Graphics 630|69
HD Graphics 630|69
Iris(R) Plus Graphics|69
Iris(TM) Pro Graphics 5200|69
UHD Graphics 620|69
UHD Graphics|69
Iris(R) Plus Graphics 640|69
Iris Pro Graphics 6200|69
HD Graphics 630|69
UHD Graphics 630 (Mobile)|68
Iris(TM) Pro Graphics 5200|68
Corporation UHD Graphics 630 (Desktop)|68
HD Graphics 630|68
UHD Graphics 630|68
UHD Graphics 620|68
UHD Graphics 630|68
Iris(TM) Plus Graphics 640|68
UHD Graphics|67
Iris Pro Graphics 580|67
Iris(TM) Graphics 540|67
UHD Graphics 620|67
Iris(TM) Pro Graphics 5200|67
UHD Graphics|66
HD Graphics P530|66
Corporation UHD Graphics 630 (Mobile)|66
Iris(R) Plus Graphics 640|66
UHD Graphics 630|66
Iris(R) Plus Graphics 640|65
HD Graphics 630|65
HD 530|65
UHD Graphics 620|65
SKL Unknown|65
HD Graphics 630|64
Iris(TM) Graphics 540|64
Mesa DRI Intel(R) UHD Graphics 620 (Kabylake GT2)|64
UHD Graphics 630|64
HD Graphics 530|63
HD Graphics 530|63
HD Graphics 530|63
Mesa Intel(R) HD Graphics 530 (SKL GT2)|63
UHD Graphics|63
HD Graphics 530|63
Iris Graphics 550|63
HD Graphics 530|63
Iris Plus Graphics 655|63
HD Graphics 630|63
UHD Graphics, Gen11 LP|63
Corporation 8th Gen Core Processor Gaussian Mixture Model|63
UHD Graphics 630|63
Iris(TM) Graphics 650|63
Iris(R) Plus Graphics 640|62
HD Graphics 530|62
Mesa DRI Intel(R) Iris Graphics 540 (Skylake GT3e)|62
Iris(R) Plus Graphics|61
Iris(TM) Pro Graphics 5200|61
Iris Pro|61
HD Graphics 620|61
UHD Graphics 620|61
UHD Graphics 630|61
UHD Graphics|61
HD Graphics 530|60
Iris Plus Graphics G1|60
Iris(TM) Pro Graphics 5200|60
Iris Plus Graphics 650|60
UHD Graphics|60
HD Graphics 620|60
UHD Graphics 620|60
UHD Graphics 630|60
Mesa DRI Intel(R) HD Graphics 630 (Kaby Lake GT2)|60
UHD Graphics 620|60
HD Graphics 630|60
HD Graphics 630|59
Iris Graphics 540|59
Iris Plus Graphics 640|59
CoffeeLake-H GT2 [UHD Graphics 630]|59
HD Graphics 630|59
UHD Graphics|59
HD Graphics 620|59
UHD Graphics 620|59
HD Graphics 630|59
Corporation UHD Graphics 620 (Whiskey Lake)|59
Iris(R) Plus Graphics 650|59
UHD Graphics 620|59
Mesa Intel(R) HD Graphics 520 (SKL GT2)|58
HD Graphics 630|58
HD Graphics P530|58
Iris(TM) Plus Graphics 640|58
Corporation HD Graphics 630|58
UHD Graphics 620|58
UHD Graphics 630|58
HD Graphics P630|58
Mesa DRI Intel(R) UHD Graphics 630 (Coffeelake 3x8 GT2)|58
Corporation CometLake-S GT2 [UHD Graphics 630]|58
HD Graphics 530|58
Iris Graphics 540|58
HD Graphics 530|58
Corporation Device|58
HD Graphics CFL CRB|57
HD Graphics 620 macOS Edition|57
HD Graphics 530|57
Mesa DRI Intel(R) HD Graphics 520 (SKL GT2)|57
Iris Pro Graphics|56
Iris(TM) Pro Graphics 5200|56
Iris(R) Plus Graphics 655|56
Coffee Lake UHD Graphics|56
Iris(TM) Graphics 640|55
Iris Pro|55
UHD Graphics 630|55
UHD Graphics 620|55
HD Graphics 530|55
HD Graphics 520|54
HD Graphics 530|54
UHD Graphics 620|54
HD Graphics 530|54
Corporation UHD Graphics 620|54
UHD Graphics|54
Iris Plus Graphics G7|54
Corporation Skylake GT2 [HD Graphics 520]|53
UHD Graphics 630|53
HD Graphics 630|53
Corporation HD Graphics 530|53
UHD Graphics 617|53
HD Graphics 520|52
HD Graphics 620|52
HD Graphics 620|52
HD Graphics 620|52
HD Graphics 620|52
HD Graphics 630|52
HD Graphics 630|52
HD Graphics 5600|51
HD Graphics 530|51
HD Graphics 630|51
UHD Graphics 615|51
Mesa DRI Intel(R) HD Graphics 520 (Skylake GT2)|51
HD Graphics 630|50
HD Graphics 620|50
UHD Graphics|50
HD Graphics P4600/P4700|50
HD Graphics 520|50
HD Graphics 530|50
HD Graphics 620|50
HD Graphics 530|50
Corporation HD Graphics 620|50
HD Graphics 530|50
UHD Graphics 620|49
UHD Graphics 620|49
HD Graphics 530|49
Iris(TM) Graphics 6100|49
HD Graphics 4600|49
HD Graphics 630|49
UHD Graphics 617|49
UHD Graphics RI|48
HD Graphics 520|48
UHD Graphics 617|48
HD Graphics 5600|48
HD Graphics 620|48
UHD Graphics, Gen11 LP|47
UHD Graphics 617|47
Mesa DRI Intel(R) HD Graphics 620 (Kaby Lake GT2)|47
HD Graphics 615|47
UHD Graphics RI|47
HD Graphics 630|47
HD Graphics 4600|46
HD Graphics 520|46
Corporation Skylake GT2 [HD Graphics 520]|46
HD Graphics 520|46
Corporation Device|46
HD Graphics 4600|46
HD Graphics 615|45
HD Graphics 4600|45
Iris(TM) Graphics 6100|45
HD Graphics 615|45
UHD Graphics 615|45
HD Graphics 630 GT2|45
HD Graphics 4600|45
HD Graphics 630|45
Iris(TM) Graphics 6100|45
HD Graphics 4600|45
HD Graphics 620|45
Iris(TM) Graphics 6100|45
HD Graphics 520|45
HD Graphics 4600|45
Iris(TM) Graphics 540|44
HD Graphics 530|44
HD Graphics 4600|44
Iris(TM) Graphics 5100|44
Kabylake HD Graphics ULT GT2|44
Iris Graphics 6100|44
UHD Graphics 630|44
HD Graphics 520|44
HD Graphics KBL CRB|44
HD Graphics 530 (Skylake GT2)|44
Corporation HD Graphics 620|44
HD Graphics 515|44
UHD Graphics|44
UHD Graphics 620|44
Iris(TM) Pro Graphics P580|43
UHD Graphics 615|43
HD Graphics 4600|43
HD Graphics 4600|43
Corporation Skylake Integrated Graphics|43
HD Graphics 530|43
UHD Graphics 615|43
UHD Graphics 630|43
HD Graphics 615|42
HD Graphics 620|42
HD Graphics 4600|42
HD Graphics 615|42
HD Graphics 4600|42
HD Graphics 4600|42
Mesa DRI Intel(R) Kabylake GT2|42
HD Graphics 620|42
Corporation HD Graphics 6000|42
UHD Graphics 615|42
HD Graphics 4600|41
Corporation HD Graphics 520|41
HD Graphics P4600/P4700|41
Corporation, Series Chipset Iris Plus Graphics 655|41
HD Graphics 4600|41
Mesa DRI Intel(R) HD Graphics 530 (Skylake GT2)|41
HD Graphics 4600|41
Iris(TM) Graphics 640|41
HD Graphics 4600|41
HD Graphics 630|40
Iris(TM) Graphics 5100|40
Iris(TM) Graphics 6100|40
UHD Graphics 610|40
HD Graphics 4600|40
HD Graphics 4600|40
UHD Graphics 615|40
UHD Graphics 610|40
HD Graphics 530|40
UHD Graphics 605|40
HD Graphics 615|40
HD Graphics 4600|40
UHD Graphics 615|40
HD Graphics 505|39
PHDGD Ivy 4|39
Unknown|39
Iris(TM) Graphics 5100|39
Iris|39
Corporation Iris Graphics 6100|39
HD Graphics 6000|39
Iris(TM) Graphics 5100|39
HD Graphics 615|39
HD Graphics 5500|39
Skylake GT2 [HD Graphics 520]|39
Corporation Broadwell-U Integrated Graphics|38
HD Graphics 615|38
HD Graphics 5500|38
HD Graphics 4600|38
Mesa DRI Intel(R) HD Graphics P4000 (IVB GT2)|38
HD Graphics 4600|38
HD Graphics 615|38
Corporation HD Graphics 610|38
HD Graphics 4600|38
HD Graphics 4600|38
Iris(TM) Graphics 5100|38
Iris Graphics 6100|38
HD Graphics 515|38
HD Graphics 6000|38
UHD Graphics, Gen11 LP|38
Iris(TM) Graphics 5100|38
HD Graphics 4600|37
HD Graphics 610|37
HD Graphics 4600|37
HD Graphics 515|37
HD Graphics 4600|37
HD Graphics 4600|37
Iris Graphics P580|37
Iris(TM) Pro Graphics P6300|37
HD Graphics 5500|37
HD Graphics 4600|37
Iris Graphics 6100|37
UHD Graphics 610|37
HD Graphics 4600|37
HD Graphics 4600|37
UHD Graphics 610|37
HD Graphics 530|37
HD Graphics 5500|37
HD Graphics 515|36
HD Graphics P4600/P4700|36
HD Graphics 515|36
HD Graphics 4600|36
UHD Graphics 615|36
Iris Graphics 6100|36
HD Graphics 4600|36
HD Graphics 4600|36
HD Graphics 4600|36
HD Graphics 520|36
HD Graphics 520|36
HD Graphics 5500|36
Corporation HD Graphics 5500|35
Iris|35
HD5500 Graphics PG7|35
HD Graphics 515|35
Iris|35
Graphics gfx-driver-user-feature_dg1_poweron-27723 DCH ReleaseInternal|35
HD Graphics 615|35
HD Graphics P630|35
HD Graphics 510|35
HD Graphics 6000|35
HD Graphics 5000|35
Corporation HD Graphics 5300|35
HD Graphics 6000|35
HD Graphics 4600|35
HD5500 Broadwell PG7|35
Graphics HD 4600|35
HD Graphics 6000|35
HD Graphics 510|34
HD Graphics 610|34
HD Graphics 4600|34
HD Graphics Family (PHDGD Skylake v2.9)|34
Corporation Device|34
HD Graphics 610|34
UHD Graphics 610|34
HD Graphics 5300|34
HD Graphics 5000|34
HD Graphics 4600|34
UHD Graphics 610|33
HD Graphics 4600|33
UHD Graphics 620|33
Corporation UHD Graphics 615|33
HD Graphics 5000|33
Kabylake HD Graphics ULX GT2|33
HD Graphics 620|33
UHD Graphics 615|33
HD Graphics 4600|33
HD Graphics 5500|33
HD Graphics 515|33
UHD Graphics|33
HD Graphics 4600|33
HD Graphics 520|33
HD Graphics 6000|33
HD Graphics 615|33
HD Graphics KBL CRB|33
HD Graphics 4600|33
UHD Graphics 610|33
Iris Graphics 6100|33
HD Graphics 515|33
Iris|32
Iris|32
HD Graphics 5000|32
Iris|32
HD Graphics 5000|32
Iris(TM) Graphics 5100|32
HD Graphics 4600|32
HD Graphics 4600|32
Corporation Xeon E3-1200 v3/4th Gen Core Processor Integrated Graphics Controller|32
HD Graphics 5500 (PHDGD Skylake v2.9)|32
HD Graphics 610|32
HD Graphics 6000|31
HD Graphics 5500|31
Iris|31
HD Graphics 6000|31
UHD Graphics 610|31
HD Graphics 510|31
HD Graphics|31
HD Graphics 6000|31
HD Graphics 4400|31
HD Graphics 5000|31
HD Graphics 4600|30
HD Graphics 515|30
HD Graphics 5600|30
HD Graphics 4600|30
HD Graphics 4400|30
HD Graphics 530|30
GeForce GTX 960|30
UHD Graphics 610|30
GeForce GTX 960|30
HD Graphics 510|30
HD Graphics 6000|30
Corporation HD Graphics 515|30
HD Graphics 610|29
HD Graphics 510|29
HD Graphics 5000|29
HD Graphics 4600|29
Iris(TM) Pro Graphics 6200|29
HD Graphics 510|29
HD Graphics 5000|29
HD Graphics 6000|29
Iris|29
HD Graphics 4400|29
HD Graphics 4400|29
HD Graphics 4000|29
HD Graphics 510|29
HD Graphics 5000|29
HD Graphics 4400|28
HD Graphics 610|28
HD Graphics 5300|28
HD Graphics 510|28
HD Graphics|28
HD Graphics 610|28
HD Graphics 4400|28
HD Graphics 610|28
HD Graphics 4600|28
HD Graphics 4600|28
HD Graphics 5000|28
HD Graphics 4400|28
HD Graphics 4400|28
Corporation Xeon E3-1200 v3/4th Gen Core Processor Integrated Graphics Controller|28
HD Graphics 4400|28
HD Graphics 5300|28
HD Graphics 5000|28
UHD Graphics 605|28
HD Graphics 4400|28
HD Graphics 5500|28
HD Graphics 4000|28
HD Graphics 4400|27
HD Graphics 615|27
HD Graphics Family(PHDGD Skylake v2.0)|27
HD Graphics 4400|27
HD Graphics 4400|27
HD Graphics 610|27
Corporation HD Graphics 510|27
Iris|27
HD Graphics 520|27
HD Graphics 5000|27
HD Graphics 5300|27
HD Graphics 6000|27
HD Graphics 4000|27
HD Graphics 610|27
HD Graphics 5000|27
HD Graphics 4600|27
Mesa DRI Intel(R) HD Graphics 505 (Broxton)|27
HD Graphics 5500|27
HD Graphics|27
HD Graphics 5000|26
UHD Graphics 600|26
HD Graphics 4600|26
Mesa DRI Intel(R) Haswell Mobile|26
HD Graphics 4000|26
HD Graphics 5300|26
Iris(TM) Graphics 540|26
HD Graphics 4000|26
HD Graphics 4600|26
HD Graphics|26
HD Graphics 4400|26
HD Graphics 4600|26
HD Graphics 6000|26
Corporation Celeron N3350/Pentium N4200/Atom E3900 Series Integrated Graphics Controller|26
HD Graphics 530|26
HD Graphics 5500|25
Broxton-P HD Graphics|25
Corporation Xeon E3-1200 v3/4th Gen Core Processor Integrated Graphics Controller|25
HD 4000|25
HD Graphics 4400|25
HD Graphics 4600|25
HD Graphics 5500|25
HD 4000|25
Corporation Xeon E3-1200 v3/4th Gen Core Processor Integrated Graphics Controller|25
Corporation HD Graphics|25
HD Graphics 4400|25
Mesa DRI Intel(R) HD Graphics 5500 (Broadwell GT2)|25
HD Graphics 4400|25
HD Graphics|25
UHD Graphics 600|24
Arc(TM) Graphics|24
HD Graphics 4600|24
HD Graphics 5300|24
HD Graphics 4400|24
HD Graphics 4400|24
HD Graphics 4400|24
HD Graphics 4000|24
UHD Graphics 605|24
HD Graphics 5000|23
Corporation Xeon E3-1200 v2/3rd Gen Core processor Graphics Controller|23
UHD Graphics, LKF|23
UHD Graphics 605|23
HD Graphics 4400|23
HD Graphics 4400|23
HD Graphics 4000|23
HD Graphics 4400|23
Mesa DRI Intel(R) Ivybridge Desktop|23
0x496e74656c2048442047726170686963000732034343|23
HD Graphics 5300|22
HD Graphics 615|22
Kabylake HD Graphics ULX GT2|22
HD Graphics 5300|22
HD Graphics|22
HD Graphics|22
HD Graphics 4000|22
HD Graphics|22
HD Graphics 515|22
HD Graphics|22
HD Graphics 5300|22
Corporation Xeon E3-1200 v3/4th Gen Core Processor Integrated Graphics Controller|22
HD Graphics 5300|22
Corporation Xeon E3-1200 v3/4th Gen Core Processor Integrated Graphics Controller|22
HD Graphics 4000|21
UHD Graphics 605|21
Corporation Xeon E3-1200 v3/4th Gen Core Processor Integrated Graphics Controller|21
HD Graphics 4400|21
HD Graphics|21
HD Graphics 4400|21
Corporation Xeon E3-1200 v3/4th Gen Core Processor Integrated Graphics Controller|21
HD Graphics|21
HD Graphics 5300|21
HD Graphics 4400|21
HD Graphics 5300|21
HD Graphics P4600/P4700|21
HD Graphics|21
Corporation Xeon E3-1200 v3/4th Gen Core Processor Integrated Graphics Controller|21
Corporation UHD Graphics 605|20
UHD Graphics 600|20
HD Graphics 4000|20
HD Graphics|20
UHD Graphics 600 Universal|20
HD Graphics 4600|20
HD Graphics 500|20
UHD Graphics 600|20
HD Graphics|20
HD Graphics 5000|20
HD Graphics 4400|20
HD Graphics 5300|19
HD Graphics 4000|19
Mesa DRI Intel(R) Sandybridge Mobile|19
HD Graphics 505|19
HD Graphics 4000|19
HD Graphics 4400|19
UHD Graphics 600|19
HD Graphics 3000|19
HD Graphics 615|19
HD Graphics|19
Corporation Atom/Celeron/Pentium Processor N4200/N3350/E3900 Series Integrated Graphics Controller|19
HD Graphics 4000|19
HD Graphics|19
UHD Graphics 600|19
HD Graphics|19
Corporation Haswell-ULT Integrated Graphics Controller|19
HD Graphics 4400|19
Corporation GeminiLake [UHD Graphics 600]|19
HD Graphics 4000|18
HD Graphics|18
HD Graphics|18
HD Graphics 500|18
HD Graphics 4000|18
CherryView HD Graphics|17
Corporation Xeon E3-1200 v2/3rd Gen Core processor Graphics Controller|17
Xeon E3-1200 v3/4th Gen Core Processor Integrated Graphics Controller|17
Corporation Xeon E3-1200 v3/4th Gen Core Processor Integrated Graphics Controller|17
UHD Graphics 600|17
UHD Graphics 600|17
Corporation Xeon E3-1200 v2/3rd Gen Core processor Graphics Controller|16
HD Graphics|16
UHD Graphics 600|16
HD Graphics|16
HD Graphics 5000 (Android)|16
HD Graphics|16
UHD Graphics 600|16
HD Graphics|16
HD Graphics, Gen10|16
HD Graphics (PHDGD IvyDrive 3.0)|16
HD Graphics|15
UHD Graphics 600|15
Corporation Atom/Celeron/Pentium Processor x5-E8000/J3xxx/N3xxx Integrated Graphics Controller|15
HD Graphics 500|15
HD Graphics 505|15
HD Graphics|15
Corporation 3rd Gen Core processor Graphics Controller|15
HD Graphics 4400|15
HD Graphics|14
HD Graphics|14
HD Graphics|14
HD Graphics 505|14
HD Graphics|14
HD Graphics|14
HD Graphics|14
HD Graphics|13
HD Graphics 530|13
HD Graphics 500|13
Corporation 3rd Gen Core processor Graphics Controller|13
HD Graphics 4400|12
HD Graphics 5500|12
HD Graphics|12
HD Graphics|12
Corporation HD Graphics 500|12
HD Graphics 500|12
3rd Gen Core processor Graphics Controller|12
HD Graphics|11
Corporation Atom/Celeron/Pentium Processor x5-E8000/J3xxx/N3xxx Series PCI Configuration Registers|11
Corporation 2nd Gen Core Processor Family Integrated Graphics Controller|11
HD Graphics 510|11
HD Graphics 4600 (PHDGD Skylake v2.9)|9
Corporation Atom Processor Z36xxx/Z37xxx Series Graphics & Display|8
Corporation Atom Processor Z36xxx/Z37xxx Series Graphics & Display|8
Mesa DRI Intel(R) Bay Trail|8
UHD Graphics, Gen12 LP ReleaseInternal|5
Corporation D3D12 (Intel(R) UHD Graphics 630)|3
HD Graphics 3000|2
(PE64) Intel(R) 4th Generation Haswell HD Graphics Family|-1
4 Series Internal Chipset|-1
7 Series/C216 Chipset Family MEI Controller #1|-1
B43 Express Chipset|-1
CometLake-S GT2 [UHD Graphics 630]|-1
HD Graphics 5500|-1
HD Graphics 620|-1
G35 Express Chipset Family|-1
G41 Express Chipset|-1
G45/G43 Express Chipset|-1
Graphics Media Accelerator HD|-1
HD Graphics (PHDGD Omega 5.0)|-1
HD Graphics 4400|-1
HD Graphics P3000|-1
HD Graphics P3000 (PHDGD Omega 5.0)|-1
IncrediblE HD Graphics 3000|-1
Iris Pro Graphics 5200|-1
Mesa DRI Intel(R) HD Graphics (CHV)|-1
Mesa DRI Intel(R) Ivybridge Mobile|-1
Mobile Intel(R) 4 Series Express Chipset Family|-1
Mobile Intel(R) 965 Express Chipset Family|-1
Mobile Intel(R) HD Graphics|-1
PHDGD Quantic C3|-1
Q45/Q43 Express Chipset|-1
Radeong 0.4 on AMD CAPE VERDE (DRM 2.43.0, LLVM 3.7.0)|-1
Radeong 0.4 on AMD CAPE VERDE (DRM 3.9.0 / 4.9.0-rc1+, LLVM 4.0.0)|-1
Radeong 0.4 on AMD FIJI (DRM 3.2.0 / 4.7.0-rc5+, LLVM 4.0.0)|-1
UHD Graphics, Gen12 LP ReleaseInternal|-1`;function n(){return i}},205464:function(e,r,t){"use strict";t(303677)},211284:function(e,r,t){"use strict";t.d(r,{Fo:function(){return d},U2:function(){return c},is:function(){return I},nB:function(){return y},qw:function(){return p}});var i=t(88648),n=t(209021),a=t(190087);function s(e,r,t){let i=e.slice();return i.splice(t<0?i.length+t:t,0,i.splice(r,1)[0]),i}function o(e){return null!==e&&e>=0}let c=e=>{let{rects:r,activeIndex:t,overIndex:i,index:n}=e,a=s(r,i,t),o=r[n],c=a[n];return c&&o?{x:c.left-o.left,y:c.top-o.top,scaleX:c.width/o.width,scaleY:c.height/o.height}:null},l={scaleX:1,scaleY:1},p=e=>{var r;let{activeIndex:t,activeNodeRect:i,index:n,rects:a,overIndex:s}=e,o=null!=(r=a[t])?r:i;if(!o)return null;if(n===t){let e=a[s];return e?{x:0,y:t<s?e.top+e.height-(o.top+o.height):e.top-o.top,...l}:null}let c=function(e,r,t){let i=e[r],n=e[r-1],a=e[r+1];return i?t<r?n?i.top-(n.top+n.height):a?a.top-(i.top+i.height):0:a?a.top-(i.top+i.height):n?i.top-(n.top+n.height):0:0}(a,n,t);return n>t&&n<=s?{x:0,y:-o.height-c,...l}:n<t&&n>=s?{x:0,y:o.height+c,...l}:{x:0,y:0,...l}},u="Sortable",h=i.createContext({activeIndex:-1,containerId:u,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:c,disabled:{draggable:!1,droppable:!1}});function d(e){var r;let{children:t,id:s,items:o,strategy:l=c,disabled:p=!1}=e,{active:d,dragOverlay:f,droppableRects:g,over:G,measureDroppableContainers:m}=(0,n.Cj)(),v=(0,a.Ld)(u,s),D=null!==f.rect,y=(0,i.useMemo)(()=>o.map(e=>"object"==typeof e&&"id"in e?e.id:e),[o]),b=null!=d,H=d?y.indexOf(d.id):-1,I=G?y.indexOf(G.id):-1,C=(0,i.useRef)(y),E=!function(e,r){if(e===r)return!0;if(e.length!==r.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==r[t])return!1;return!0}(y,C.current),P=-1!==I&&-1===H||E;let T="boolean"==typeof(r=p)?{draggable:r,droppable:r}:r;(0,a.LI)(()=>{E&&b&&m(y)},[E,y,b,m]),(0,i.useEffect)(()=>{C.current=y},[y]);let k=(0,i.useMemo)(()=>{var e,r;return{activeIndex:H,containerId:v,disabled:T,disableTransforms:P,items:y,overIndex:I,useDragOverlay:D,sortedRects:(e=y,r=g,e.reduce((e,t,i)=>{let n=r.get(t);return n&&(e[i]=n),e},Array(e.length))),strategy:l}},[H,v,T.draggable,T.droppable,P,y,I,g,D,l]);return i.createElement(h.Provider,{value:k},t)}let f=e=>{let{id:r,items:t,activeIndex:i,overIndex:n}=e;return s(t,i,n).indexOf(r)},g=e=>{let{containerId:r,isSorting:t,wasDragging:i,index:n,items:a,newIndex:s,previousItems:o,previousContainerId:c,transition:l}=e;return!!l&&!!i&&(o===a||n!==s)&&(!!t||s!==n&&r===c)},G={duration:200,easing:"ease"},m="transform",v=a.ux.Transition.toString({property:m,duration:0,easing:"linear"}),D={roleDescription:"sortable"};function y(e){let{animateLayoutChanges:r=g,attributes:t,disabled:s,data:c,getNewIndex:l=f,id:p,strategy:u,resizeObserverConfig:d,transition:y=G}=e,{items:b,containerId:H,activeIndex:I,disabled:C,disableTransforms:E,sortedRects:P,overIndex:T,useDragOverlay:k,strategy:x}=(0,i.useContext)(h),w=function(e,r){var t,i;return"boolean"==typeof e?{draggable:e,droppable:!1}:{draggable:null!=(t=null==e?void 0:e.draggable)?t:r.draggable,droppable:null!=(i=null==e?void 0:e.droppable)?i:r.droppable}}(s,C),_=b.indexOf(p),S=(0,i.useMemo)(()=>({sortable:{containerId:H,index:_,items:b},...c}),[H,c,_,b]),A=(0,i.useMemo)(()=>b.slice(b.indexOf(p)),[b,p]),{rect:R,node:M,isOver:O,setNodeRef:U}=(0,n.Zj)({id:p,data:S,disabled:w.droppable,resizeObserverConfig:{updateMeasurementsFor:A,...d}}),{active:L,activatorEvent:N,activeNodeRect:j,attributes:F,setNodeRef:W,listeners:V,isDragging:X,over:B,setActivatorNodeRef:$,transform:Z}=(0,n.O1)({id:p,data:S,attributes:{...D,...t},disabled:w.draggable}),z=(0,a.HB)(U,W),K=!!L,Y=K&&!E&&o(I)&&o(T),J=!k&&X,q=J&&Y?Z:null,Q=Y?null!=q?q:(null!=u?u:x)({rects:P,activeNodeRect:j,activeIndex:I,overIndex:T,index:_}):null,ee=o(I)&&o(T)?l({id:p,items:b,activeIndex:I,overIndex:T}):_,er=null==L?void 0:L.id,et=(0,i.useRef)({activeId:er,items:b,newIndex:ee,containerId:H}),ei=b!==et.current.items,en=r({active:L,containerId:H,isDragging:X,isSorting:K,id:p,index:_,items:b,newIndex:et.current.newIndex,previousItems:et.current.items,previousContainerId:et.current.containerId,transition:y,wasDragging:null!=et.current.activeId}),ea=function(e){let{disabled:r,index:t,node:s,rect:o}=e,[c,l]=(0,i.useState)(null),p=(0,i.useRef)(t);return(0,a.LI)(()=>{if(!r&&t!==p.current&&s.current){let e=o.current;if(e){let r=(0,n.VK)(s.current,{ignoreTransform:!0}),t={x:e.left-r.left,y:e.top-r.top,scaleX:e.width/r.width,scaleY:e.height/r.height};(t.x||t.y)&&l(t)}}t!==p.current&&(p.current=t)},[r,t,s,o]),(0,i.useEffect)(()=>{c&&l(null)},[c]),c}({disabled:!en,index:_,node:M,rect:R});return(0,i.useEffect)(()=>{K&&et.current.newIndex!==ee&&(et.current.newIndex=ee),H!==et.current.containerId&&(et.current.containerId=H),b!==et.current.items&&(et.current.items=b)},[K,ee,H,b]),(0,i.useEffect)(()=>{if(er===et.current.activeId)return;if(er&&!et.current.activeId){et.current.activeId=er;return}let e=setTimeout(()=>{et.current.activeId=er},50);return()=>clearTimeout(e)},[er]),{active:L,activeIndex:I,attributes:F,data:S,rect:R,index:_,newIndex:ee,items:b,isOver:O,isSorting:K,isDragging:X,listeners:V,node:M,overIndex:T,over:B,setNodeRef:z,setActivatorNodeRef:$,setDroppableNodeRef:U,setDraggableNodeRef:W,transform:null!=ea?ea:Q,transition:function(){return ea||ei&&et.current.newIndex===_?v:(!J||(0,a.vd)(N))&&y?K||en?a.ux.Transition.toString({...y,property:m}):void 0:void 0}()}}function b(e){if(!e)return!1;let r=e.data.current;return!!r&&"sortable"in r&&"object"==typeof r.sortable&&"containerId"in r.sortable&&"items"in r.sortable&&"index"in r.sortable||!1}let H=[n.g4.Down,n.g4.Right,n.g4.Up,n.g4.Left],I=(e,r)=>{let{context:{active:t,collisionRect:i,droppableRects:s,droppableContainers:o,over:c,scrollableAncestors:l}}=r;if(H.includes(e.code)){if(e.preventDefault(),!t||!i)return;let r=[];o.getEnabled().forEach(t=>{if(!t||null!=t&&t.disabled)return;let a=s.get(t.id);if(!!a)switch(e.code){case n.g4.Down:i.top<a.top&&r.push(t);break;case n.g4.Up:i.top>a.top&&r.push(t);break;case n.g4.Left:i.left>a.left&&r.push(t);break;case n.g4.Right:i.left<a.left&&r.push(t)}});let p=(0,n.ey)({active:t,collisionRect:i,droppableRects:s,droppableContainers:r,pointerCoordinates:null}),u=(0,n._8)(p,"id");if(u===(null==c?void 0:c.id)&&p.length>1&&(u=p[1].id),null!=u){let e=o.get(t.id),r=o.get(u),c=r?s.get(r.id):null,p=null==r?void 0:r.node.current;if(p&&c&&e&&r){let t=(0,n.hI)(p).some((e,r)=>l[r]!==e),s=C(e,r),o=function(e,r){return!!(b(e)&&b(r)&&C(e,r))&&e.data.current.sortable.index<r.data.current.sortable.index}(e,r),u=t||!s?{x:0,y:0}:{x:o?i.width-c.width:0,y:o?i.height-c.height:0},h={x:c.left,y:c.top};return u.x&&u.y?h:(0,a.$X)(h,u)}}}};function C(e,r){return!!(b(e)&&b(r))&&e.data.current.sortable.containerId===r.data.current.sortable.containerId}},590123:function(e,r,t){"use strict";t.d(r,{j:function(){return a}});var i=t(949496),n=t.n(i);let a=(e,r=[])=>{var t,i,a;let s="";for(let{param_name:i}of r)s+=`,${i}=${null!=(t=e[i])?t:""}`;let o=n()(s.substring(1)),c={};return window.byted_acrawler&&(c=null==(i=null==window?void 0:window.byted_acrawler)?void 0:i.frontierSign({"X-MS-STUB":o})),{signature:null!=(a=c["X-Bogus"])?a:""}}},521276:function(e,r,t){var i,n,a;i=0,n=function(e){var r,t,i,n,a,s,o,c,l,p,u,h,d,f,g,G,m,v;e.lib.Cipher||(i=(t=e.lib).Base,n=t.WordArray,a=t.BufferedBlockAlgorithm,(s=e.enc).Utf8,o=s.Base64,c=e.algo.EvpKDF,l=t.Cipher=a.extend({cfg:i.extend(),createEncryptor:function(e,r){return this.create(this._ENC_XFORM_MODE,e,r)},createDecryptor:function(e,r){return this.create(this._DEC_XFORM_MODE,e,r)},init:function(e,r,t){this.cfg=this.cfg.extend(t),this._xformMode=e,this._key=r,this.reset()},reset:function(){a.reset.call(this),this._doReset()},process:function(e){return this._append(e),this._process()},finalize:function(e){return e&&this._append(e),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function e(e){return"string"==typeof e?v:G}return function(r){return{encrypt:function(t,i,n){return e(i).encrypt(r,t,i,n)},decrypt:function(t,i,n){return e(i).decrypt(r,t,i,n)}}}}()}),t.StreamCipher=l.extend({_doFinalize:function(){return this._process(!0)},blockSize:1}),p=e.mode={},u=t.BlockCipherMode=i.extend({createEncryptor:function(e,r){return this.Encryptor.create(e,r)},createDecryptor:function(e,r){return this.Decryptor.create(e,r)},init:function(e,r){this._cipher=e,this._iv=r}}),h=p.CBC=function(){var e=u.extend();function r(e,r,t){var i,n=this._iv;n?(i=n,this._iv=void 0):i=this._prevBlock;for(var a=0;a<t;a++)e[r+a]^=i[a]}return e.Encryptor=e.extend({processBlock:function(e,t){var i=this._cipher,n=i.blockSize;r.call(this,e,t,n),i.encryptBlock(e,t),this._prevBlock=e.slice(t,t+n)}}),e.Decryptor=e.extend({processBlock:function(e,t){var i=this._cipher,n=i.blockSize,a=e.slice(t,t+n);i.decryptBlock(e,t),r.call(this,e,t,n),this._prevBlock=a}}),e}(),d=(e.pad={}).Pkcs7={pad:function(e,r){for(var t=4*r,i=t-e.sigBytes%t,a=i<<24|i<<16|i<<8|i,s=[],o=0;o<i;o+=4)s.push(a);var c=n.create(s,i);e.concat(c)},unpad:function(e){var r=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=r}},t.BlockCipher=l.extend({cfg:l.cfg.extend({mode:h,padding:d}),reset:function(){l.reset.call(this);var e,r=this.cfg,t=r.iv,i=r.mode;this._xformMode==this._ENC_XFORM_MODE?e=i.createEncryptor:(e=i.createDecryptor,this._minBufferSize=1),this._mode&&this._mode.__creator==e?this._mode.init(this,t&&t.words):(this._mode=e.call(i,this,t&&t.words),this._mode.__creator=e)},_doProcessBlock:function(e,r){this._mode.processBlock(e,r)},_doFinalize:function(){var e,r=this.cfg.padding;return this._xformMode==this._ENC_XFORM_MODE?(r.pad(this._data,this.blockSize),e=this._process(!0)):(e=this._process(!0),r.unpad(e)),e},blockSize:4}),f=t.CipherParams=i.extend({init:function(e){this.mixIn(e)},toString:function(e){return(e||this.formatter).stringify(this)}}),g=(e.format={}).OpenSSL={stringify:function(e){var r,t=e.ciphertext,i=e.salt;return(r=i?n.create([1398893684,1701076831]).concat(i).concat(t):t).toString(o)},parse:function(e){var r,t=o.parse(e),i=t.words;return 1398893684==i[0]&&1701076831==i[1]&&(r=n.create(i.slice(2,4)),i.splice(0,4),t.sigBytes-=16),f.create({ciphertext:t,salt:r})}},G=t.SerializableCipher=i.extend({cfg:i.extend({format:g}),encrypt:function(e,r,t,i){i=this.cfg.extend(i);var n=e.createEncryptor(t,i),a=n.finalize(r),s=n.cfg;return f.create({ciphertext:a,key:t,iv:s.iv,algorithm:e,mode:s.mode,padding:s.padding,blockSize:e.blockSize,formatter:i.format})},decrypt:function(e,r,t,i){return i=this.cfg.extend(i),r=this._parse(r,i.format),e.createDecryptor(t,i).finalize(r.ciphertext)},_parse:function(e,r){return"string"==typeof e?r.parse(e,this):e}}),m=(e.kdf={}).OpenSSL={execute:function(e,r,t,i,a){if(!i&&(i=n.random(8)),a)var s=c.create({keySize:r+t,hasher:a}).compute(e,i);else var s=c.create({keySize:r+t}).compute(e,i);var o=n.create(s.words.slice(r),4*t);return s.sigBytes=4*r,f.create({key:s,iv:o,salt:i})}},v=t.PasswordBasedCipher=G.extend({cfg:G.cfg.extend({kdf:m}),encrypt:function(e,r,t,i){var n=(i=this.cfg.extend(i)).kdf.execute(t,e.keySize,e.ivSize,i.salt,i.hasher);i.iv=n.iv;var a=G.encrypt.call(this,e,r,n.key,i);return a.mixIn(n),a},decrypt:function(e,r,t,i){i=this.cfg.extend(i),r=this._parse(r,i.format);var n=i.kdf.execute(t,e.keySize,e.ivSize,r.salt,i.hasher);return i.iv=n.iv,G.decrypt.call(this,e,r,n.key,i)}}))},e.exports=n(t(616131),t(51890))},426271:function(e,r,t){"use strict";function i(e,r){for(var t=Math.abs(e).toString();t.length<r;)t="0"+t;return(e<0?"-":"")+t}t.d(r,{Z:function(){return i}})},810727:function(e,r,t){"use strict";t(529716),t(491199)},57025:function(e,r,t){var i=t(720832),n=t(96008),a=t(481611),s=i&&1/a(new i([,-0]))[1]==1/0?function(e){return new i(e)}:n;e.exports=s},806363:function(e,r,t){var i=t(967529),n=t(859104),a=t(605521),s=t(842454),o=t(603233),c=t(481611),l=i?i.prototype:void 0,p=l?l.valueOf:void 0;e.exports=function(e,r,t,i,l,u,h){switch(t){case"[object DataView]":if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)break;e=e.buffer,r=r.buffer;case"[object ArrayBuffer]":if(e.byteLength!=r.byteLength||!u(new n(e),new n(r)))break;return!0;case"[object Boolean]":case"[object Date]":case"[object Number]":return a(+e,+r);case"[object Error]":return e.name==r.name&&e.message==r.message;case"[object RegExp]":case"[object String]":return e==r+"";case"[object Map]":var d=o;case"[object Set]":var f=1&i;if(d||(d=c),e.size!=r.size&&!f)break;var g=h.get(e);if(g)return g==r;i|=2,h.set(e,r);var G=s(d(e),d(r),i,l,u,h);return h.delete(e),G;case"[object Symbol]":if(p)return p.call(e)==p.call(r)}return!1}},82068:function(e){var r=Object.prototype.hasOwnProperty;e.exports=function(e){var t=e.length,i=new e.constructor(t);return t&&"string"==typeof e[0]&&r.call(e,"index")&&(i.index=e.index,i.input=e.input),i}},46e3:function(e,r,t){var i=t(694451),n=t(922080),a=t(193800);e.exports=function(){this.size=0,this.__data__={hash:new i,map:new(a||n),string:new i}}},641193:function(e,r,t){var i=t(663875),n=t(420669),a=t(760284),s=Math.max,o=Math.min;e.exports=function(e,r,t){var c=null==e?0:e.length;if(!c)return -1;var l=c-1;return void 0!==t&&(l=a(t),l=t<0?s(c+l,0):o(l,c-1)),i(e,n(r,3),l,!0)}},300277:function(e){e.exports=function(e){return void 0===e}},692983:function(e,r,t){var i=t(167807),n=t(760284);e.exports=function(e,r){return e&&e.length?i(e,n(r)):void 0}},688269:function(e,r,t){var i=t(893585)(function(e,r,t){return e+(t?"_":"")+r.toLowerCase()});e.exports=i},748845:function(e,r,t){var i=t(29093),n=t(730865),a=t(563e3),s=n(function(e,r){return a(e)?i(e,r):[]});e.exports=s},612361:function(e){"use strict";var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=!function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;var i=Object.getOwnPropertyNames(r).map(function(e){return r[e]});if("0123456789"!==i.join(""))return!1;var n={};if("abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"!==Object.keys(Object.assign({},n)).join(""))return!1;return!0}catch(e){return!1}}()?function(e,n){for(var a,s,o=function(e){if(null==e)throw TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in a=Object(arguments[c]),a)t.call(a,l)&&(o[l]=a[l]);if(r){s=r(a);for(var p=0;p<s.length;p++)i.call(a,s[p])&&(o[s[p]]=a[s[p]])}}return o}:Object.assign},634230:function(e,r,t){"use strict";var i=t(88648),n=t(266955),a="function"==typeof Object.is?Object.is:function(e,r){return e===r&&(0!==e||1/e==1/r)||e!=e&&r!=r},s=n.useSyncExternalStore,o=i.useRef,c=i.useEffect,l=i.useMemo,p=i.useDebugValue;r.useSyncExternalStoreWithSelector=function(e,r,t,i,n){var u=o(null);if(null===u.current){var h={hasValue:!1,value:null};u.current=h}else h=u.current;var d=s(e,(u=l(function(){function e(e){if(!c){if(c=!0,s=e,e=i(e),void 0!==n&&h.hasValue){var r=h.value;if(n(r,e))return o=r}return o=e}if(r=o,a(s,e))return r;var t=i(e);return void 0!==n&&n(r,t)?r:(s=e,o=t)}var s,o,c=!1,l=void 0===t?null:t;return[function(){return e(r())},null===l?void 0:function(){return e(l())}]},[r,t,i,n]))[0],u[1]);return c(function(){h.hasValue=!0,h.value=d},[d]),p(d),d}},50324:function(e,r,t){"use strict";t.d(r,{E7:function(){return s},FU:function(){return D},GS:function(){return S},HW:function(){return A},HX:function(){return m},Hr:function(){return M},Kn:function(){return T},Ku:function(){return a},MH:function(){return p},NH:function(){return i},NW:function(){return $},Pl:function(){return I},Qw:function(){return g},RG:function(){return v},RS:function(){return X},Rc:function(){return b},SV:function(){return x},VF:function(){return R},W5:function(){return L},Z$:function(){return y},aH:function(){return d},ad:function(){return G},c3:function(){return f},hL:function(){return c},hs:function(){return u},ij:function(){return k},kL:function(){return l},km:function(){return U},lB:function(){return C},ly:function(){return E},mL:function(){return w},mW:function(){return j},ml:function(){return _},nc:function(){return H},o8:function(){return O},oi:function(){return n},ov:function(){return B},pg:function(){return F},pn:function(){return o},rQ:function(){return h},t6:function(){return P},td:function(){return V},xO:function(){return N},xf:function(){return W}});var i="play",n="playing",a="ended",s="pause",o="error",c="seeking",l="seeked",p="timeupdate",u="waiting",h="canplay",d="durationchange",f="loadeddata",g="loadedmetadata",G="progress",m="loadstart",v="emptied",D="focus",y="blur",b="ready",H="urlNull",I="autoplay_started",C="autoplay_was_prevented",E="complete",P="replay",T="destroy",k="urlchange",x="buffer_control",w="AbortError",_="fullscreen_request",S="fullscreen_change",A="cssFullscreen_change",R="mini_state_change",M="definition_change",O="after_definition_change",U="video_resize",L="pip_change",N="screenShot",j="playnext",F="xglog",W="user_action",V="reset",X="source_error",B="source_success",$=["play","playing","ended","pause","error","seeking","seeked","timeupdate","waiting","canplay","canplaythrough","durationchange","volumechange","loadeddata","loadedmetadata","ratechange","progress","loadstart","emptied","stalled","suspend","abort","lowdecode","mseAttaching","mseAttached","mseDetaching","mseDetached"]},372817:function(e,r,t){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(r,"__esModule",{value:!0}),r.default=r.ErrorTypes=r.ERROR_TYPE_MAP=void 0;var n,a,s,o=l(t(888243)),c=l(t(256848));function l(e){return e&&e.__esModule?e:{default:e}}function p(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,function(e){var r=function(e,r){if("object"!==i(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!==i(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"===i(r)?r:String(r)}(n.key),n)}}r.ERROR_TYPE_MAP={1:"network",2:"network",3:"decoder",4:"format"};r.ErrorTypes={network:{code:1},mse:{code:2},parse:{code:3},format:{code:4},decoder:{code:5},runtime:{code:6},timeout:{code:7},other:{code:8}};var u=(n=function e(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{errorType:"",errorCode:0,errorMessage:"",originError:"",ext:{},mediaError:null,src:null};!function(e,r){if(!(e instanceof r))throw TypeError("Cannot call a class as a function")}(this,e);var i=r&&r.i18n?r.i18n.ERROR_TYPES:null;if(null!=r&&r.video){var n=t.mediaError?t.mediaError:r.video.error||{},a=r.duration,s=r.currentTime,l=r.ended,p=r.src,u=r.currentSrc,h=r.video,d=h.readyState,f=h.networkState,g={playerVersion:o.default,domain:document.domain,currentTime:s,duration:a,ended:l,readyState:d,networkState:f,src:t.src||p||u,errorType:t.errorType,errorCode:t.errorCode||n.code,message:t.errorMessage||n.message,mediaError:n,originError:t.originError?t.originError.stack:"",host:c.default.getHostFromUrl(p||u)};return t.ext&&Object.keys(t.ext).map(function(e){g[e]=t.ext[e]}),g}if(arguments.length>1){for(var G={playerVersion:o.default,domain:document.domain},m=["errorType","currentTime","duration","networkState","readyState","src","currentSrc","ended","errd","errorCode","mediaError"],v=0;v<arguments.length;v++)G[m[v]]=arguments[v];return G.ex=i?(i[arguments[0]]||{}).msg:"",G}},Object.defineProperty(n,"prototype",{writable:!1}),n);r.default=u},468311:function(e,r,t){"use strict";function i(e){return new Promise(function(r,t,i){(i=new XMLHttpRequest).open("GET",e,i.withCredentials=!0),i.onload=function(){200===i.status?r():t()},i.send()})}t.d(r,{f:function(){return p},s:function(){return l}}),t(675373),t(874386),t(209955),t(954372),t(826893),t(882732),t(544943),t(927234);var n,a="undefined"!=typeof document&&(n=document.createElement("link")).relList&&n.relList.supports&&n.relList.supports("prefetch")?function(e){return new Promise(function(r,t,i){(i=document.createElement("link")).rel="prefetch",i.href=e,i.onload=r,i.onerror=t,document.head.appendChild(i)})}:i,s=new Set,o=new Set;function c(e){if(e){if(e.saveData)return Error("Save-Data is enabled");if(/2g/.test(e.effectiveType))return Error("network conditions are poor")}return!0}function l(e,r,t){var n=c(navigator.connection);return n instanceof Error?Promise.reject(Error("Cannot prefetch, "+n.message)):(o.size,Promise.all([].concat(e).map(function(e){if(!s.has(e))return s.add(e),(r?function(e){return window.fetch?fetch(e,{credentials:"include"}):i(e)}:a)(new URL(e,location.href).toString())})))}function p(e,r){var t=c(navigator.connection);if(t instanceof Error)return Promise.reject(Error("Cannot prerender, "+t.message));if(!HTMLScriptElement.supports("speculationrules"))return l(e),Promise.reject(Error("This browser does not support the speculation rules API. Falling back to prefetch."));for(var i=0,n=[].concat(e);i<n.length;i+=1){var a=n[i];if(window.location.origin!==new URL(a,window.location.href).origin)return Promise.reject(Error("Only same origin URLs are allowed: "+a));o.add(a)}s.size;var p=function(e){var r=document.createElement("script");r.type="speculationrules",r.text='{"prerender":[{"source": "list","urls": ["'+Array.from(e).join('","')+'"]}]}';try{document.head.appendChild(r)}catch(e){return e}return!0}(o);return!0===p?Promise.resolve():Promise.reject(p)}},344137:function(e,r,t){"use strict";t.d(r,{Z:function(){return n}});var i=t(778633);function n(e,r,t){return(r=(0,i.Z)(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}},378407:function(e,r,t){"use strict";function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var i in t)({}).hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(null,arguments)}t.d(r,{Z:function(){return i}})},196764:function(e,r,t){"use strict";t.d(r,{Z:function(){return n}});var i=t(541378);function n(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,(0,i.Z)(e,r)}},901737:function(e,r,t){"use strict";function i(e){try{return -1!==Function.toString.call(e).indexOf("[native code]")}catch(r){return"function"==typeof e}}t.d(r,{Z:function(){return i}})},845568:function(e,r,t){"use strict";function i(e){if(e)throw e}t.d(r,{N:function(){return i}})},751682:function(e,r,t){"use strict";t.d(r,{M:function(){return n}});var i=t(71016);class n extends i.T8{}n.Encryptor=class extends n{processBlock(e,r){let t=this._cipher,{blockSize:i}=t,n=this._iv,a=this._counter;n&&(this._counter=n.slice(0),a=this._counter,this._iv=void 0);let s=a.slice(0);t.encryptBlock(s,0),a[i-1]=a[i-1]+1|0;for(let t=0;t<i;t+=1)e[r+t]^=s[t]}},n.Decryptor=n.Encryptor},101606:function(e,r,t){"use strict";t.d(r,{q:function(){return E}});var i=t("748066"),n=t("551155"),a=t("308435"),s=t("200324"),o=t("691127"),c=t("464512"),l=t("198632"),p=t("756689"),u=t("786179"),h=t("997512"),d=t("909217"),f=t("273227"),g=t("729025"),G=t("556991"),m=t("245874"),v=t("995289"),D=t("282249"),y=t("561074"),b=t("804033"),H=t("61746"),I=t("151807"),C=t("904976");let E={blockquote:function(e,r){let t={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(r),!0)};return e.patch(r,t),e.applyData(r,t)},break:i.l,code:n.T,delete:a.J,emphasis:s.g,footnoteReference:o.N,heading:c.n,html:l.d,imageReference:p.p,image:u.B,inlineCode:h.Y,linkReference:d.N,link:f.p,listItem:g.q,list:G.p,paragraph:m.A,root:v.J,strong:D.f,table:y.K,tableCell:H.K,tableRow:b.R,text:I.f,thematicBreak:C.C,toml:P,yaml:P,definition:P,footnoteDefinition:P};function P(){}},175686:function(e,r,t){"use strict";t.d(r,{r:function(){return i}});class i{constructor(){this.map=[]}add(e,r,t){(function(e,r,t,i){let n=0;if(0!==t||0!==i.length){for(;n<e.map.length;){if(e.map[n][0]===r){e.map[n][1]+=t,e.map[n][2].push(...i);return}n+=1}e.map.push([r,t,i])}})(this,e,r,t)}consume(e){if(this.map.sort(function(e,r){return e[0]-r[0]}),0===this.map.length)return;let r=this.map.length,t=[];for(;r>0;)r-=1,t.push(e.slice(this.map[r][0]+this.map[r][1]),this.map[r][2]),e.length=this.map[r][0];t.push(e.slice()),e.length=0;let i=t.pop();for(;i;){for(let r of i)e.push(r);i=t.pop()}this.map.length=0}}},896043:function(e,r,t){"use strict";t.d(r,{j:function(){return i}});function i(e){let r=String(e),t=/\r?\n|\r/g,i=t.exec(r),a=0,s=[];for(;i;)s.push(n(r.slice(a,i.index),a>0,!0),i[0]),a=i.index+i[0].length,i=t.exec(r);return s.push(n(r.slice(a),a>0,!1)),s.join("")}function n(e,r,t){let i=0,n=e.length;if(r){let r=e.codePointAt(i);for(;9===r||32===r;)i++,r=e.codePointAt(i)}if(t){let r=e.codePointAt(n-1);for(;9===r||32===r;)n--,r=e.codePointAt(n-1)}return n>i?e.slice(i,n):""}}}]);