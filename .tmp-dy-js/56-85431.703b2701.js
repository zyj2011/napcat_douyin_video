/*! For license information please see 85431.703b2701.js.LICENSE.txt */
!function(e,t){"object"==typeof module&&"object"==typeof module.exports?t():"function"==typeof define&&define.amd?define([],t):(e="undefined"!=typeof globalThis?globalThis:e||self)&&t()}(this,function(){"use strict";"object"==typeof window&&(window.openRedirect={version:"1.2.17",webpackPluginVersion:"3.4.19",reportOnly:!1})}),!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).xss={})}(this,function(e){"use strict";var t=function(){return(t=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function r(e,t,r){if(r||2==arguments.length)for(var o,i=0,n=t.length;i<n;i++)!o&&i in t||(o||(o=Array.prototype.slice.call(t,0,i)),o[i]=t[i]);return e.concat(o||Array.prototype.slice.call(t))}var o=/[^a-zA-Z0-9\\_:.-]/gim,i=/</g,n=/>/g,a=/&#([a-zA-Z0-9]*);?/gim,c=/&quot;/g,s=/&colon;?/gim,l=/&newline;?/gim,G=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi,u=/u\s*r\s*l\s*\(.*/gi,d=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,T=/"/g,h=function(e){return e.replace(i,"&lt;").replace(n,"&gt;")},p={indexOf:function(e,t){var r,o;for(r=0,o=e.length;r<o;r++)if(e[r]===t)return r;return -1},forEach:function(e,t,r){var o,i;for(o=0,i=e.length;o<i;o++)t.call(r,e[o],o,e)},some:function(e,t,r){var o,i;for(o=0,i=e.length;o<i;o++)if(t.call(r,e[o],o,e))return!0;return!1},trim:function(e){return e.replace(/(^\s*)|(\s*$)/g,"")},includes:function(e,t){if("string"==typeof e)return -1!==e.indexOf(t);for(var r=0;r<e.length;r++)if(e[r]===t)return!0;return!1},spaceIndex:function(e){var t=/\s|\n|\t/.exec(e);return t?t.index:-1},uniq:function(e){for(var t={},r=[],o=0;o<e.length;o++)t[e[o]]||(r.push(e[o]),t[e[o]]=!0);return r},from:function(e){for(var t=[],r=0;r<e.length;r++)t.push(e[r]);return t},keys:function(e){var t=[];for(var r in e)t.push(r);return t}};function F(e){return null==e}function f(e){var t;return'"'===(t=e)[0]&&'"'===t[t.length-1]||"'"===t[0]&&"'"===t[t.length-1]?e.substr(1,e.length-2):e}function g(e){var t,r,o,i,n,a,c,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",l="",G=0;for(e=function(e){e=e.replace(/rn/g,"n");for(var t="",r=0;r<e.length;r++){var o=e.charCodeAt(r);o<128?t+=String.fromCharCode(o):o>127&&o<2048?t+=String.fromCharCode(o>>6|192)+String.fromCharCode(63&o|128):t+=String.fromCharCode(o>>12|224)+String.fromCharCode(o>>6&63|128)+String.fromCharCode(63&o|128)}return t}(e);G<e.length;)i=(t=e.charCodeAt(G++))>>2,n=(3&t)<<4|(r=e.charCodeAt(G++))>>4,a=(15&r)<<2|(o=e.charCodeAt(G++))>>6,c=63&o,isNaN(r)?a=c=64:isNaN(o)&&(c=64),l=l+s.charAt(i)+s.charAt(n)+s.charAt(a)+s.charAt(c);return l}function X(e){var t,r,o,i,n,a,c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",s="",l=0;for(e=e.replace(/[^A-Za-z0-9+/=]/g,"");l<e.length;)t=c.indexOf(e.charAt(l++))<<2|(i=c.indexOf(e.charAt(l++)))>>4,r=(15&i)<<4|(n=c.indexOf(e.charAt(l++)))>>2,o=(3&n)<<6|(a=c.indexOf(e.charAt(l++))),s+=String.fromCharCode(t),64!==n&&(s+=String.fromCharCode(r)),64!==a&&(s+=String.fromCharCode(o));return function(e){for(var t="",r=0,o=0,i=0,n=0;r<e.length;)(o=e.charCodeAt(r))<128?(t+=String.fromCharCode(o),r++):o>191&&o<224?(t+=String.fromCharCode((31&o)<<6|63&(n=e.charCodeAt(r+1))),r+=2):(n=e.charCodeAt(r+1),t+=String.fromCharCode((15&o)<<12|(63&n)<<6|63&(i=e.charCodeAt(r+2))),r+=3);return t}(s)}function M(e,t,r){var o="",i=0,n=!1,a=!1,c=0,s=e.length,l="",G="";e:for(c=0;c<s;c++){var u=e.charAt(c);if(!1===n){if("<"===u){n=c;continue}}else if(!1===a){if("<"===u){o+=r(e.slice(i,c)),n=c,i=c;continue}if(">"===u||c===s-1){o+=r(e.slice(i,n)),l=function(e){var t,r=p.spaceIndex(e);return t=-1===r?e.slice(1,-1):e.slice(1,r+1),"/"===(t=p.trim(t).toLowerCase()).slice(0,1)&&(t=t.slice(1)),"/"===t.slice(-1)&&(t=t.slice(0,-1)),t}(G=e.slice(n,c+1)),o+=t(n,o.length,l,G,"</"===G.slice(0,2)),i=c+1,n=!1;continue}if('"'===u||"'"===u)for(var d=1,T=e.charAt(c-d);""===T.trim()||"="===T;){if("="===T){a=u;continue e}T=e.charAt(c-++d)}}else if(u===a){a=!1;continue}}return i<s&&(o+=r(e.substr(i))),o}function m(e,t){var r=0,i=0,n=[],a=!1,c=e.length;function s(e,r){if(!((e=(e=p.trim(e)).replace(o,"").toLowerCase()).length<1)){var i=t(e,r||"");i&&n.push(i)}}for(var l=0;l<c;l++){var G=e.charAt(l),u=void 0;if(!1!==a||"="!==G){if(!1===a||l!==i){if(/\s|\n|\t/.test(G)){if(e=e.replace(/\s|\n|\t/g," "),!1===a){if(-1===(u=function(e,t){for(;t<e.length;t++){var r=e[t];if(" "!==r)return"="===r?t:-1}return -1}(e,l))){s(p.trim(e.slice(r,l))),a=!1,r=l+1;continue}l=u-1;continue}if(-1===(u=function(e,t){for(;t>0;t--){var r=e[t];if(" "!==r)return"="===r?t:-1}return -1}(e,l-1))){s(a,f(p.trim(e.slice(r,l)))),a=!1,r=l+1;continue}}}else{if(-1===(u=e.indexOf(G,l+1)))break;s(a,p.trim(e.slice(i+1,u))),a=!1,r=(l=u)+1}}else a=e.slice(r,l),r=l+1,i='"'===e.charAt(r)||"'"===e.charAt(r)?r:function(e,t){for(;t<e.length;t++){var r=e[t];if(" "!==r)return"'"===r||'"'===r?t:-1}return -1}(e,l+1)}return r<e.length&&(!1===a?s(e.slice(r)):s(a,f(p.trim(e.slice(r))))),p.trim(n.join(" "))}function y(e,t,r){if(r=function(e){return e=function(e){for(var t="",r=0,o=e.length;r<o;r++)t+=32>e.charCodeAt(r)?" ":e.charAt(r);return p.trim(t)}(e=(e=(e=e.replace(c,'"')).replace(a,function(e,t){return"x"===t[0]||"X"===t[0]?String.fromCharCode(parseInt(t.substr(1),16)):String.fromCharCode(parseInt(t,10))})).replace(s,":").replace(l," "))}(r),"href"===t||"src"===t){if("#"===(r=p.trim(r)))return"#";if("http://"!==r.substr(0,7)&&"https://"!==r.substr(0,8)&&"mailto:"!==r.substr(0,7)&&"tel:"!==r.substr(0,4)&&"data:image/"!==r.substr(0,11)&&"ftp://"!==r.substr(0,6)&&"./"!==r.substr(0,2)&&"../"!==r.substr(0,3)&&"#"!==r[0]&&"/"!==r[0])return""}else if("background"===t){if(G.lastIndex=0,G.test(r))return""}else if("style"===t&&(d.lastIndex=0,d.test(r)||(u.lastIndex=0,u.test(r)&&(G.lastIndex=0,G.test(r)))))return"";return r=function(e){return e=h(e=e.replace(T,"&quot;"))}(r)}var v=function(e){return"string"==typeof e?e.replace(/'/g,'"').replace('=""',"").replace(/\s+/g,"").toLowerCase():""},b=function(){function e(e){var t=function(e){var t={};for(var r in e)t[r]=e[r];return t}(e||{});t.stripIgnoreTag&&(t.onIgnoreTag,t.onIgnoreTag=function(){return""}),t.whiteList={},t.onTag=function(){},t.onTagAttr=function(){},t.onIgnoreTag=function(){},t.onIgnoreTagAttr=function(){},t.safeAttrValue=y,t.escapeHtml=h,this.options=Object.assign(t,e)}return e.prototype.process=function(e){if(!(e=(e=e||"").toString()))return"";var t,r,o,i,n,a,c=this.options,s=c.whiteList,l=c.onTag,G=c.onIgnoreTag,u=c.onTagAttr,d=c.onIgnoreTagAttr,T=c.safeAttrValue,h=c.escapeHtml;c.stripBlankChar&&(e=(t=(t=e.split("")).filter(function(e){var t=e.charCodeAt(0);return!(127===t||t<=31&&10!==t&&13!==t)})).join("")),c.allowCommentTag||(e=function(e){for(var t="",r=0;r<e.length;){var o=e.indexOf("\x3c!--",r);if(-1===o){t+=e.slice(r);break}t+=e.slice(r,o);var i=e.indexOf("--\x3e",o);if(-1===i)break;r=i+3}return t}(e));var F=!1;c.stripIgnoreTagBody&&(r=c.stripIgnoreTagBody,"function"!=typeof(o=G)&&(o=function(){}),i=!Array.isArray(r),n=[],a=!1,G=(F={onIgnoreTag:function(e,t,c){var s;if(s=e,i||-1!==p.indexOf(r,s)){if(c.isClosing){var l="[/removed]",G=c.position+l.length;return n.push([!1!==a?a:c.position,G]),a=!1,l}return a||(a=c.position),"[removed]"}return o(e,t,c)},remove:function(e){var t="",r=0;return p.forEach(n,function(o){t+=e.slice(r,o[0]),r=o[1]}),t+=e.slice(r)}}).onIgnoreTag);var f=M(e,function(e,t,r,o,i){var n={sourcePosition:e,position:t,isClosing:i,isWhite:Object.prototype.hasOwnProperty.call(s,r)},a=l(r,o,n);if(null!=a)return a;if(n.isWhite){if(n.isClosing)return"</".concat(r,">");var c=function(e){var t=p.spaceIndex(e);if(-1===t)return{html:"",closing:"/"===e[e.length-2]};var r="/"===(e=p.trim(e.slice(t+1,-1)))[e.length-1];return r&&(e=p.trim(e.slice(0,-1))),{html:e,closing:r}}(o),F=s[r],f=m(c.html,function(e,t){var o=-1!==p.indexOf(F,e),i=u(r,e,t,o);return null==i?o?(t=T(r,e,t,null))?"".concat(e,'="').concat(t,'"'):e:null==(i=d(r,e,t,o))?void 0:i:i});return o="<".concat(r),f&&(o+=" ".concat(f)),c.closing&&(o+=" /"),o+=">"}return null==(a=G(r,o,n))?h(o):a},h);return F&&(f=F.remove(f)),f},e}(),_=Function("\nvar _checkXSS = function (it) {\n  return it && it.Math == Math && it;\n};\nreturn _checkXSS(typeof globalThis === 'object' && globalThis) ||\n_checkXSS(typeof window === 'object' && window) ||\n_checkXSS(typeof self === 'object' && self) ||\n_checkXSS(typeof global === 'object' && global) ||\nFunction('return this')();\n")(),P=new(function(){function e(){var e=this;this.batchData=[],this.uniqKeys=new Set,this.timeout=2e3,this.lock=!1,this.getSlardarBid=function(){var t,r,o="douyin_web";if(!p.includes(o,"bid"))return o;if(e.config&&e.config.bid)return e.config.bid;if(_&&_._xssBid)return _._xssBid;if(_&&_.slardar&&"function"==typeof _.slardar.config){var i=(_.slardar.config()||{}).bid;if(i)return i}if(_&&_.Slardar&&"function"==typeof _.Slardar.config){var n=(_.Slardar.config()||{}).bid;if(n)return n}return(null===(r=null===(t=null==_?void 0:_.Slardar)||void 0===t?void 0:t._baseParams)||void 0===r?void 0:r.bid)||"argus"},this.getConfigRegion=function(){var t;return p.includes("cn","region")?e.config&&e.config.region?e.config.region:((null===(t=null==_?void 0:_.gfdatav1)||void 0===t?void 0:t.region)||"cn").toLowerCase():"cn"},this.gerReportUrl=function(){var t={cn:X("aHR0cHM6Ly9tb24uemlqaWVhcGkuY29tL21vbml0b3JfYnJvd3Nlci9jb2xsZWN0L2JhdGNoL3NlY3VyaXR5Lz9iaWQ9"),boe:X("aHR0cHM6Ly9tb24uemlqaWVhcGkuY29tL21vbml0b3JfYnJvd3Nlci9jb2xsZWN0L2JhdGNoL3NlY3VyaXR5Lz9iaWQ9"),ttp:X("aHR0cHM6Ly9tb24udXMudGlrdG9rdi5jb20vbW9uaXRvcl9icm93c2VyL2NvbGxlY3QvYmF0Y2gvc2VjdXJpdHkvP2JpZD0="),va:X("aHR0cHM6Ly9tb24tdmEuYnl0ZW92ZXJzZWEuY29tL21vbml0b3JfYnJvd3Nlci9jb2xsZWN0L2JhdGNoL3NlY3VyaXR5Lz9iaWQ9"),maliva:X("aHR0cHM6Ly9tb24tdmEuYnl0ZW92ZXJzZWEuY29tL21vbml0b3JfYnJvd3Nlci9jb2xsZWN0L2JhdGNoL3NlY3VyaXR5Lz9iaWQ9"),sg:X("aHR0cHM6Ly9tb24tdmEuYnl0ZW92ZXJzZWEuY29tL21vbml0b3JfYnJvd3Nlci9jb2xsZWN0L2JhdGNoL3NlY3VyaXR5Lz9iaWQ9"),boei18n:X("aHR0cHM6Ly9tb24tdmEuYnl0ZW92ZXJzZWEuY29tL21vbml0b3JfYnJvd3Nlci9jb2xsZWN0L2JhdGNoL3NlY3VyaXR5Lz9iaWQ9")}[e.getConfigRegion()];if(t)return t+e.getSlardarBid()}}return e.prototype.setConfig=function(e){this.config=e},e.prototype.upload=function(){var e=this,t=this.gerReportUrl();!this.lock&&t&&0!==this.batchData.length&&(this.lock=!0,setTimeout(function(){var r=e.batchData.slice(0,100);e.batchData=e.batchData.slice(100),_.fetch(t,{method:"post",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}}).catch(function(e){}),e.lock=!1,e.upload()},this.timeout))},e.prototype.generateKey=function(e){return e.collectKey?[e.collectMode,e.collectKey].join("___"):""},e.prototype.push=function(e){this.batchData.push(e),this.upload()},e.prototype.report=function(e){var t=this.generateKey(e);if(_.fetch&&e.collectKey){var r="object"==typeof window?window.location.href:"SSR";e.documentUrl=r;var o={age:Math.floor(Date.now()),type:"xss",url:r,body:e,"user-agent":""};"enforce"===e.disposition&&"SSR"!==r||(o.url=t),"SSR"===r&&(o.url="SSR___".concat(o.url),o.body.ssr=!0),this.push(o)}},e}()),E=function(e){for(var t=0,r=function(r){Array.isArray(e[r])?0===e[r].length?delete e[r]:(e[r]=p.from(p.uniq(e[r])),t+=e[r].length):0===p.keys(e[r]).length?delete e[r]:p.keys(e[r]).forEach(function(o){e[r][o]=p.from(p.uniq(e[r][o])),t+=e[r][o].length})},o=0,i=p.keys(e);o<i.length;o++)r(i[o]);return{count:t,ret:e}};function R(e,t){return P.setConfig(t),new b(t).process(e)}function Q(e){var t,r=(t=/\s|\n|\t/.exec(e))?t.index:-1;if(-1===r)return{html:"",closing:"/"===e[e.length-2]};var o="/"===(e=e.slice(r+1,-1).trim())[e.length-1];return o&&(e=e.slice(0,-1).trim()),{html:e,closing:o}}var S=function(e){return -1===(e=(e=(e=(e=e.replace(/&colon;/gi,":")).replace(/&tab;/gi,"")).replace(/&newline;/gi,"")).replace(/(\t|\n|\r)/g,"")).indexOf("&#")?e.trim().toLowerCase():e.trim().replace(/&#(?:(x)([0-9a-f]+)|([0-9]+));?/gi,function(e,t,r,o){return String.fromCharCode(t?parseInt(r,16):parseInt(o))}).replace(/(\t|\n|\r)/g,"").toLowerCase()};function A(e,t){if(void 0===e&&(e=""),"string"!=typeof e)return!0;if(e=S(e),p.includes(e,"base64")&&!function(e){if(""===e||""===e.trim())return!0;try{return!p.includes(e,"data:text/html;base64")}catch(e){return!0}}(e))return t&&t("data:text/html;base64"),!1;var r=["expression(","behavior:","view-source:"];if(p.some(r,function(t){return -1!==e.indexOf(t)}))return p.forEach(r,function(r){-1!==e.indexOf(r)&&t&&t(r)}),!1;var o=["data:application","data:javascript","data:text/html","data:texthtml"];if(p.some(o,function(t){return -1!==e.indexOf(t)}))return p.forEach(o,function(r){-1!==e.indexOf(r)&&t&&t(r)}),!1;if(e.indexOf("javascript:")>0)return t&&t("javascript:"),!1;if(/^javascript:/i.test(e)){var i=e.slice(11).replace(/\s/g,"").trim();return!!p.some(["void","void(0)","void0","false","undefined",";"],function(e){return e===i})||(t&&t("javascript:"),!1)}return!0}var L=function(e,t){var r,o,i="<%= isSaveValidUrl =>";if("string"!=typeof e||(o=Number("<%= urlLimit =>"),void 0!==r&&(o=r),"NaN"!==e.toString()&&-1!==o&&e.length>=o)||A(e,t))return e;try{if(!0===(i=JSON.parse(i))||"true"===i){var n=new URL(e);return n.origin+n.pathname}}catch(e){}return"#"};function w(e,t,o){if(void 0===e&&(e=""),void 0===t&&(t=[]),"string"!=typeof e)return!0;if(!A(e=S(e)))return!1;var i,n={url:(i=e.match(/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/)||[])[0],scheme:i[1],slash:i[2],host:i[3],port:i[4],path:i[5],query:i[6],hash:i[7]},a=n.scheme,c=n.host;return o?!!o(e):!(!a||!c)&&(!p.includes(["http","https","file"],a)||("object"==typeof window&&window&&(t=r(r([],t,!0),[location.host],!1)),p.some(t,function(e){return!!(e instanceof RegExp&&e.test(c))||e===c})))}var x={a:["target","title","spellcheck","rel"],canvas:[],abbr:["title"],address:[],area:["shape","coords","alt"],article:[],aside:[],audio:["autoplay","controls","loop","preload"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:["dir"],dl:[],dt:[],em:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["alt","title","width","height","decoding"],ins:["datetime"],li:[],mark:[],nav:[],ol:["start"],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],sup:[],delete:[],form:[],strong:[],mask:["maskunits","x","y","width","height","fill"],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],wbr:[],video:["autoplay","controls","loop","preload","height","width"],svg:["viewBox","version","xmlns","fill","width","height","stroke","stroke-width","style"],path:["d","fill","opacity","stroke","p-id","fill-rule","clip-rule","stroke-width","stroke-linecap","stroke-linejoin","fill-opacity","mask"],rect:["x","y","width","height","fill","stroke","rx"],g:[]},O={collect:null,initCollect:function(){this.collect={whiteList:{},filterProtocol:[]}},removeCollect:function(){var e=E(this.collect),t=e.count,r=e.ret;return this.collect=null,{collectKey:0===t?null:JSON.stringify(r),collectMode:"white"}},onIgnoreTagAttr:function(e,t,o){return e&&p.indexOf(["href","src"],t)>-1?O.domainWhiteList&&Array.isArray(O.domainWhiteList)&&O.domainWhiteList.length>0&&!w(o,r([],O.domainWhiteList,!0))?"":"".concat(t,'="').concat(L(o,function(e){var t;null===(t=O.collect)||void 0===t||t.filterProtocol.push(e)}),'"'):e&&(p.indexOf(["style","class","id"],t)>-1||t.indexOf("data-")>-1)?"".concat(t,'="').concat(o,'"'):(O.collect.whiteList[e]=O.collect.whiteList[e]||[],void O.collect.whiteList[e].push(t))},onIgnoreTag:function(e,t){if("style"===e)return t;M(t,function(e,t,r,o){m(Q(o).html.replace("/",""),function(e){O.collect.whiteList[r]=O.collect.whiteList[r]||[],O.collect.whiteList[r].push(e)})},h)},whiteList:x,mergeWhiteList:function(e){for(var t,r={},o=0,i=p.keys(x);o<i.length;o++)r[t=i[o]]=p.from(x[t]);for(var n=0,a=p.keys(e);n<a.length;n++)r[t=a[n]]=t in x?x[t].concat(e[t]):p.from(e[t]);return r},setWhiteList:function(e){for(var t=0,r=p.keys(e);t<r.length;t++){var o=r[t];this.whiteList[o]=o in x?x[o].concat(e[o]):p.from(e[o])}}};try{var I={},D="merge";p.includes(D,"override")&&(O.whiteList=I.whiteList),p.includes(D,"merge")&&O.setWhiteList(I.whiteList)}catch(e){}var N=function(e,t){for(var r={},o=0,i=p.keys(e);o<i.length;o++){var n=i[o];Array.isArray(e[n])?r[n]=p.from(e[n]):r[n]=N({},e[n])}for(var a=0,c=p.keys(t);a<c.length;a++)(n=c[a])in e?Array.isArray(e[n])?r[n]=e[n].concat(t[n]):r[n]=N(e[n],t[n]):Array.isArray(t[n])?r[n]=p.from(t[n]):r[n]=N({},t[n]);return r},k={blackList:{a:["folder"],meta:["content"],iframe:["srcdoc"],input:["pattern"],vmlframe:["xmlns"]},blackTags:["script","xml","embed","isindex","object","base","set","handler","animate","payload","import"],blackAttrs:["charset","ns","namespace","formaction","xlink:href","xmlns:xlink","handler","repeat","repeat-start","repeat-end"],blackAttrRegExps:[/^on/],filterList:{param:["value"],video:["poster"],form:["action"]},filterAttrs:["href","src","background","style","dynsrc","lowsrc","content"]};try{var C={};C.blackAttrRegExps&&(C.blackAttrRegExps=C.blackAttrRegExps.map(function(e){return new RegExp(e.toString().slice(1,e.toString().length-1))}));var K="merge";p.includes(K,"override")&&(k=C),p.includes(K,"merge")&&(k=N(k,C))}catch(e){}var j={mode:"black",whiteList:{},blackConfig:k,collect:null,initCollect:function(){j.collect={blackList:{},blackTags:[],blackAttrs:[],blackAttrRegExps:[],filterAttrs:[],filterList:{},filterProtocol:[]}},removeCollect:function(){var e=E(j.collect),t=e.count,r=e.ret;return j.collect=null,{collectKey:0===t?null:JSON.stringify(r),collectMode:"black"}},onIgnoreTag:function(e,t){var r;if(!p.includes(k.blackTags,e))return M(t,function(e,t,r,o,i){if(-1!==r.indexOf("/"))return h(o);if(i)return"</".concat(r,">");var n=Q(o),a=m(n.html,function(e,t){var o,i=0;if(k.blackList[r]&&p.includes(k.blackList[r],e)&&(j.collect.blackList[r]=j.collect.blackList[r]||[],j.collect.blackList[r].push(e),i++),k.blackAttrRegExps.length&&k.blackAttrRegExps.some(function(t){return t.test(e)})&&p.forEach(k.blackAttrRegExps,function(t){t.test(e)&&(j.collect.blackAttrRegExps.push("".concat(t.toString(),"->").concat(e)),i++)}),k.blackAttrs.length&&p.includes(k.blackAttrs,e)&&(k.blackAttrs.push(e),i++),!i){if(k.filterList&&k.filterList[r]&&p.includes(k.filterList[r],e)){var n=L(t,function(e){var t;null===(t=j.collect)||void 0===t||t.filterProtocol.push(e)});return n!==t&&(j.collect.filterList[r]=j.collect.filterList[r]||[],j.collect.filterList[r].push(e)),t?"".concat(e,"='").concat(n,"'"):e}return k.filterAttrs&&p.includes(k.filterAttrs,e)?((n=L(t,function(e){var t;null===(t=j.collect)||void 0===t||t.filterProtocol.push(e)}))!==t&&(null===(o=j.collect)||void 0===o||o.filterAttrs.push(e)),t?"".concat(e,"='").concat(n,"'"):e):t?"".concat(e,"='").concat(t,"'"):e}});return o="<".concat(r),a&&(o+=" ".concat(a)),n.closing&&(o+=" /"),o+=">"},h);null===(r=j.collect)||void 0===r||r.blackTags.push(e)}},V=function(e){var t=e.reportOnly,r=void 0===t||t,o=e.block;return r&&"all"===r?"report":("string"==typeof r&&("true"===r&&(r=!0),"false"===r&&(r=!1)),o?"enforce":r?"report":"enforce")},B=function(e){return function(r,o,i){if(!r||"string"!=typeof r)return r;var n=o;e===R&&(n=O).initCollect();var a=e(r,n);if(v(a)===v(r))return r;if(!i)return a;var c=i.logType,s=V(i),l=n.removeCollect();return P.report(t(t({type:c,disposition:s},l),{sourceText:g(r),filterText:g(a)})),"enforce"===s?a:r}},U=B(function(e,t){return void 0===t&&(t={}),t&&t.whiteList||(t.whiteList={a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","crossorigin","loop","muted","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],figcaption:[],figure:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],summary:[],sup:[],strong:[],strike:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","crossorigin","loop","muted","playsinline","poster","preload","src","height","width"]}),new b(t).process(e)}),Z=B(R),H=function(e,t,r){var o=[],i=L(e,function(e){o.push(e)});if(i===e)return e;o=p.from(p.uniq(o));var n=t||r||{};if(!n)return i;var a=n.logType,c=V(r);return P.report({type:a,disposition:c,collectKey:o.join("___"),collectData:JSON.stringify(o),collectMode:"black",sourceText:g(e),filterText:g(i)}),"enforce"===c?i:e},W=_._xssProject||{},Y=_.xssNamespace||{},z="3.0.26",J={FilterXSS:b,version:z,webpackPluginVersion:"<%= webpackPluginVersion =>",reportOnly:"<%= reportOnly =>",filterXSS:U,_filterXSS:Z,filterUrl:H,Config:O,BlackConfig:j,project:W,setProjectName:function(e){W[e]=this,_._xssProjectName=e}};Y.douyin_web=J,_.xssNamespace=Y,_.Math&&!_.Math.xssNamespace&&(_.Math.xssNamespace=Y),W[z]=J,_.globalThis=_,_.getFilterXss=function(){return void 0!==this._xssProjectName?this._xssProject[this._xssProjectName]:J},_.xss=J,_.isSafeUrl=w,_.isSafeDomain=w,_.isSafeProtocol=A,_._xssProject=W,_._xssProjectName&&(W[_._xssProjectName]=J);var $=J.setProjectName.bind(J);e.BlackConfig=j,e.Config=O,e.FilterXSS=b,e._filterXSS=Z,e.filterUrl=H,e.filterXSS=U,e.isSafeDomain=w,e.isSafeProtocol=A,e.isSafeUrl=w,e.project=W,e.setProjectName=$,e.setXssNamespace=function(e){var t=e.appId,r=e.bid,o=e.region;Y[t]=J;O.bid=r,O.region=o,O.enabled=!0},e.xssNamespace=Y,Object.defineProperty(e,"__esModule",{value:!0})}),(self.webpackChunkdouyin_web=self.webpackChunkdouyin_web||[]).push([["85431"],{208872:function(e,t,r){"use strict";var o=r(88648),i=r(492071);let n=(0,i.A)(function(e){return o.createElement("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:!1,"aria-hidden":!0},e),o.createElement("path",{d:"M10.75 1.9c.4-1.2 2.1-1.2 2.5 0l1.99 6.12h6.45a1.3 1.3 0 0 1 .77 2.37l-5.22 3.78 2 6.11c.39 1.2-1 2.2-2.02 1.46L12 17.96l-5.22 3.78c-1.02.75-2.4-.25-2.01-1.46l1.99-6.11-5.22-3.78a1.3 1.3 0 0 1 .77-2.37h6.45l2-6.12Z",fill:"currentColor"}))},"star");t.Z=n},499966:function(e,t,r){"use strict";r.r(t),t.default={wrapper:"Ic4qfmSH",img:"_sM4z_OV"}},903331:function(e,t,r){"use strict";r.r(t)},487389:function(e,t,r){"use strict";r.r(t)},730746:function(e,t,r){"use strict";r.r(t)},535074:function(e,t,r){"use strict";r.r(t)},619619:function(e,t,r){"use strict";r.r(t)},516743:function(e,t,r){"use strict";r.r(t)},459903:function(e,t,r){"use strict";r.r(t)},605471:function(e,t,r){"use strict";r.d(t,{_:function(){return o}});let o=r(88648).createContext({})},90913:function(e,t,r){"use strict";r(429532),r(779788);var o=r(88648),i=r(213470),n=r(616722),a=r(713097),c=r.n(a),s=r(965777),l=r(705514),G=r(484019);class u extends l.Z{get adapter(){return Object.assign(Object.assign({},super.adapter),{getColorPickerFoundation:()=>this.props.foundation,handleMouseDown:e=>{this.setState({isHandleGrabbing:!0}),this.ref.current.addEventListener("mousemove",this.foundation.setHandlePositionByMousePosition),window.addEventListener("mouseup",this.foundation.handleMouseUp)},handleMouseUp:()=>{this.ref.current.removeEventListener("mousemove",this.foundation.setHandlePositionByMousePosition),window.removeEventListener("mouseup",this.foundation.handleMouseUp),this.setState({isHandleGrabbing:!1})},getDOM:()=>this.ref.current,notifyChange:e=>this.props.onChange(e)})}componentDidUpdate(e,t,r){JSON.stringify(e.hsva)!==JSON.stringify(this.props.hsva)&&this.setState({handlePosition:this.foundation.getHandlePositionByHSVA()})}render(){let e=(0,i.ZI)({h:this.props.hsva.h,s:100,v:100,a:1}),t=(0,i.MA)(this.props.hsva);return o.createElement("div",{className:c()(`${n.U.PREFIX}-colorChooseArea`,this.props.className),style:Object.assign({backgroundColor:e,width:this.props.width,height:this.props.height,cursor:this.state.isHandleGrabbing?"grabbing":"pointer"},this.props.style),ref:this.ref,"aria-label":"Color",onMouseDown:this.handleClick,"aria-valuetext":`Saturation ${(0,G.N)(this.props.hsva.s)}%, Brightness ${(0,G.N)(this.props.hsva.v)}%`},o.createElement("div",{className:`${n.U.PREFIX}-handle`,style:{width:this.props.handleSize,height:this.props.handleSize,left:this.state.handlePosition.x,top:this.state.handlePosition.y,backgroundColor:`rgba(${t.r},${t.g},${t.b},${t.a})`},onMouseDown:e=>this.foundation.handleMouseDown(e)}))}constructor(e){super(e),this.handleClick=e=>{this.foundation.setHandlePositionByMousePosition(e),this.foundation.handleMouseDown(e)},this.foundation=new s.Z(this.adapter),this.state={handlePosition:this.foundation.getHandlePositionByHSVA(),isHandleGrabbing:!1},this.ref=o.createRef()}}t.Z=u},11246:function(e,t,r){"use strict";r.d(t,{Z:function(){return F}});var o=r(96008),i=r.n(o),n=r(88648),a=r(201845),c=r.n(a),s=r(313561),l=r(518593),G=r(786462),u=r(901003),d=r(318e3),T=r(61820),h=r(394216);let p=G.UX.NAVIGATION;class F extends n.PureComponent{render(){let{forwardRef:e,monthText:t,onMonthClick:r,onNextMonth:o,onPrevMonth:i,onPrevYear:a,onNextYear:c,density:F,shouldBimonthSwitch:f,panelType:g}=this.props,X="borderless",M="compact"===F?"default":"large",m="compact"===F?"small":"default",y=g===G.j2.PANEL_TYPE_LEFT,v=g===G.j2.PANEL_TYPE_RIGHT,b={},_={};f&&v&&(b.visibility="hidden"),f&&y&&(_.visibility="hidden");let P=e||this.navRef;return n.createElement("div",{className:p,ref:P},n.createElement(s.Z,{key:"double-chevron-left","aria-label":"Previous year",icon:n.createElement(u.Z,{"aria-hidden":!0,size:M}),size:m,theme:X,noHorizontalPadding:!0,onClick:a,style:b}),n.createElement(s.Z,{key:"chevron-left","aria-label":"Previous month",icon:n.createElement(d.Z,{"aria-hidden":!0,size:M}),size:m,onClick:i,theme:X,noHorizontalPadding:!0,style:b}),n.createElement("div",{className:`${p}-month`},n.createElement(l.Z,{onClick:r,theme:X,size:m},n.createElement("span",null,t))),n.createElement(s.Z,{key:"chevron-right","aria-label":"Next month",icon:n.createElement(T.Z,{"aria-hidden":!0,size:M}),size:m,onClick:o,theme:X,noHorizontalPadding:!0,style:_}),n.createElement(s.Z,{key:"double-chevron-right","aria-label":"Next year",icon:n.createElement(h.Z,{"aria-hidden":!0,size:M}),size:m,theme:X,noHorizontalPadding:!0,onClick:c,style:_}))}constructor(e){super(e),this.navRef=n.createRef()}}F.propTypes={monthText:c().string,density:c().string,onMonthClick:c().func,onNextMonth:c().func,onPrevMonth:c().func,onNextYear:c().func,onPrevYear:c().func,navPrev:c().node,navNext:c().node,shouldBimonthSwitch:c().bool,panelType:c().oneOf([G.j2.PANEL_TYPE_LEFT,G.j2.PANEL_TYPE_RIGHT])},F.defaultProps={monthText:"",onMonthClick:i(),onNextMonth:i(),onPrevMonth:i(),onNextYear:i(),onPrevYear:i()}},4884:function(e,t,r){"use strict";r(429532);var o=r(645260),i=r.n(o),n=r(88648),a=r(201845),c=r.n(a),s=r(713097),l=r.n(s),G=r(274220),u=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,o=Object.getOwnPropertySymbols(e);i<o.length;i++)0>t.indexOf(o[i])&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(r[o[i]]=e[o[i]]);return r};let d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{position:t="",className:r,arrowStyle:o,popStyle:a}=e,c=u(e,["position","className","arrowStyle","popStyle"]),s=0===t.indexOf("top")||0===t.indexOf("bottom"),d=l()(r,G.UX.ARROW),T=i()(o,"borderOpacity"),h=i()(o,"backgroundColor",i()(a,"backgroundColor")),p=i()(o,"borderColor",i()(a,"borderColor")),F=Object.assign(Object.assign({},c),{width:G.KT.ARROW_BOUNDING.width,height:G.KT.ARROW_BOUNDING.height,xmlns:"http://www.w3.org/2000/svg",className:d});return s?n.createElement("svg",Object.assign({},F),n.createElement("path",{d:"M0 0.5L0 1.5C4 1.5, 5.5 3, 7.5 5S10,8 12,8S14.5 7, 16.5 5S20,1.5 24,1.5L24 0.5L0 0.5z",style:{fill:p,opacity:T}}),n.createElement("path",{d:"M0 0L0 1C4 1, 5.5 2, 7.5 4S10,7 12,7S14.5  6, 16.5 4S20,1 24,1L24 0L0 0z",style:{fill:h}})):n.createElement("svg",Object.assign({},F),n.createElement("path",{d:"M0.5 0L1.5 0C1.5 4, 3 5.5, 5 7.5S8,10 8,12S7 14.5, 5 16.5S1.5,20 1.5,24L0.5 24L0.5 0z",style:{fill:p,opacity:T}}),n.createElement("path",{d:"M0 0L1 0C1 4, 2 5.5, 4 7.5S7,10 7,12S6 14.5, 4 16.5S1,20 1,24L0 24L0 0z",style:{fill:h}}))};d.propTypes={position:c().string,className:c().string,arrowStyle:c().object,popStyle:c().object},t.Z=d},687351:function(e,t,r){"use strict";r(429532);var o=r(88648),i=r(713097),n=r.n(i),a=r(201845),c=r.n(a),s=r(308429),l=r(345918),G=r(705514),u=r(348278),d=r(541367);let T=l.U.PREFIX;class h extends G.Z{componentDidMount(){this.foundation.init(),-1===this.handlerIndex&&(this.handlerIndex=this.context.registerHandler(this.handlerRef))}componentDidUpdate(e){}componentWillUnmount(){this.foundation.destroy()}get adapter(){return Object.assign(Object.assign({},super.adapter),{registerEvents:()=>{this.handlerRef.current.addEventListener("mousedown",this.onMouseDown),this.handlerRef.current.addEventListener("touchstart",this.onTouchStart)},unregisterEvents:()=>{this.handlerRef.current.removeEventListener("mousedown",this.onMouseDown),this.handlerRef.current.removeEventListener("touchstart",this.onTouchStart)}})}render(){let{style:e,className:t,children:r}=this.props,{direction:i}=this.context;return o.createElement("div",{className:n()(t,T+"-handler",T+"-handler-"+i),style:e,ref:this.handlerRef},null!=r?r:o.createElement(d.Z,{size:"inherit",style:{rotate:"horizontal"===this.context.direction?"0deg":"90deg"}}))}constructor(e){super(e),this.onMouseDown=e=>{let{notifyResizeStart:t}=this.context;t(this.handlerIndex,e,"mouse")},this.onTouchStart=e=>{let{notifyResizeStart:t}=this.context;t(this.handlerIndex,e.targetTouches[0],"touch")},this.getHandler=()=>this.handlerRef.current,this.state={},this.handlerRef=(0,o.createRef)(),this.foundation=new s.TQ(this.adapter),this.handlerIndex=-1}}h.propTypes={children:c().node,direction:c().string,onResizeStart:c().func,className:c().string,disabled:c().bool,style:c().object},h.defaultProps={},h.contextType=u.M,t.Z=h},701920:function(e,t,r){"use strict";var o=r(88648),i=r(393868);t.Z=e=>{let{children:t,anyColumnFixed:r,flattenedColumns:n,tableWidth:a,headWidths:c,setHeadWidths:s,getHeadWidths:l,getCellWidths:G,handleRowExpanded:u,renderExpandIcon:d,renderSelection:T,getVirtualizedListRef:h,setBodyHasScrollbar:p,direction:F}=e,f=(0,o.useMemo)(()=>({anyColumnFixed:r,flattenedColumns:n,renderExpandIcon:d,renderSelection:T,setHeadWidths:s,getHeadWidths:l,getCellWidths:G,headWidths:c,tableWidth:a,handleRowExpanded:u,getVirtualizedListRef:h,setBodyHasScrollbar:p,direction:F}),[r,n,d,T,s,l,G,c,a,u,h,p,F]);return o.createElement(i.Z.Provider,{value:f},t)}},149188:function(e,t,r){"use strict";r(675373),r.e("16787").then(r.bind(r,597147))},85554:function(e,t,r){"use strict";r(675373),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,92737)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,522573)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,286479)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,126138)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,621401)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,893933)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,26604)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,530266)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,915669)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,138440)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,571508)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,619619)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,526317)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,180388)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,766903)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,310443)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,671195)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,415134)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,945173)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,524491)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,66425)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,364759)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,586441)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,869275)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,24913)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,695755)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,595980)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,787831)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,983190)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,304495)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,140939)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,631214)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,105345)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,631056)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,588386)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,497409)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,522030)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,865525)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,593870)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,315659)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,51600)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,93458)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,130289)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,225479)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,327984)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("93012")]).then(r.bind(r,487935))},551150:function(e,t,r){"use strict";r(675373),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,522573)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,286479)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,126138)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,621401)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,893933)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,26604)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,530266)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,915669)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,138440)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,571508)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,619619)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,526317)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,180388)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,766903)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,310443)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,671195)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,415134)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,945173)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,524491)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,66425)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,364759)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,586441)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,869275)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,24913)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,695755)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,595980)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,787831)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,983190)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,304495)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,140939)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,631214)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,105345)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,631056)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,588386)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,497409)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,522030)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,865525)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,593870)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,315659)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,51600)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,93458)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,130289)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,225479)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,327984)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,487935)),Promise.all([r.e("74792"),r.e("28119"),r.e("95763"),r.e("40331"),r.e("95803")]).then(r.bind(r,86005))},858388:function(e,t,r){"use strict";r(675373),Promise.all([r.e("75032"),r.e("19833"),r.e("89730")]).then(r.bind(r,339704))},343706:function(e,t,r){"use strict";r(675373),Promise.all([r.e("27319"),r.e("39271"),r.e("2434")]).then(r.bind(r,329715))},393283:function(e,t,r){"use strict";r.d(t,{R:function(){return i}});var o=r(520739);function i(e){let t=(0,o._)({retryCount:3,retryDelay:1e3,disconnectRetryCount:0,loadTimeout:1e4,maxReaderInterval:5e3,preloadTime:5,defaultVodLoadSize:1e7,isLive:!0,softDecode:!1,bufferBehind:10,maxJumpDistance:3,analyzeDuration:2e4,keepStatusAfterSwitch:!0,onlyVideo:!1,onlyAudio:!1,preferMMS:!1,mseLowLatency:!0,durationForMSELowLatencyOff:6,chunkCountForSpeed:50,skipChunkSize:1e3,longtimeNoReceived:3e3,enableStartGapJump:!0},e);return t.isLive&&t.preloadTime&&(!t.maxLatency&&(t.maxLatency=2*t.preloadTime),!t.targetLatency&&(t.targetLatency=t.preloadTime),(null===t.disconnectTime||void 0===t.disconnectTime)&&(t.disconnectTime=t.maxLatency)),t}},39078:function(e,t,r){"use strict";r(209955),r(112587),r(17322),r(560401),r(779566),r(69896),r(416555),r(404948)},50572:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var o=r(134761);r(429532);class i{beforePlayerInit(e){}afterPlayerInit(e){}configDidUpdate(e,t){}beforeDestroy(){}emit(e,t){let r=`PLUGIN_${this.constructor.pluginName}_${e}`;this._player.emit(r,t)}constructor(e){var t,r;(0,o._)(this,"_config",void 0),(0,o._)(this,"_player",void 0),this._player=e,this._config=Object.assign({},this.constructor.defaultConfig,null!==(r=null===(t=this._player.config.pluginsConfig)||void 0===t?void 0:t[this.constructor.pluginName])&&void 0!==r?r:{})}}(0,o._)(i,"pluginName",void 0),(0,o._)(i,"defaultConfig",void 0)},326206:function(e,t,r){"use strict";async function o(e){let t={},r=await e;return t.timestamp=Date.now(),null==r||r.forEach(e=>{"inbound-rtp"===e.type?(t.packetsLost=e.packetsLost,t.packetsReceived=e.packetsReceived,t.bytesReceived=e.bytesReceived):"candidate-pair"===e.type?(t.rtt=1e3*e.currentRoundTripTime,t.total_rtt=1e3*e.totalRoundTripTime):"track"===e.type&&void 0!==e.audioLevel||e.type}),t}function i(e,t){let r=c(e,t,"timestamp"),o=c(e,t,"packetsLost"),i=c(e,t,"packetsReceived");return{bytesReceived:t.bytesReceived||0,audioLossRate:+(o/(i+o)).toFixed(2)||0,receivedKBitrate:+(8*c(e,t,"bytesReceived")/r).toFixed(2)||0,statsInterval:r,rtt:t.rtt||0,packetsReceived:i}}async function n(e){let t={},r=await e;return t.timestamp=Date.now(),null==r||r.forEach(e=>{"inbound-rtp"===e.type?(t.packetsLost=e.packetsLost,t.packetsReceived=e.packetsReceived,t.bytesReceived=e.bytesReceived,t.firCount=e.firCount,t.nackCount=e.nackCount,t.pliCount=e.pliCount):"candidate-pair"===e.type&&(t.rtt=1e3*e.currentRoundTripTime,t.totalRtt=1e3*e.totalRoundTripTime)}),t}function a(e,t){let r=c(e,t,"timestamp"),o=c(e,t,"packetsLost"),i=c(e,t,"nackCount"),n=c(e,t,"packetsReceived");return{statsInterval:r,bytesReceived:t.bytesReceived||0,videoLossRate:+(o/(c(e,t,"packetsReceived")+o)).toFixed(2)||0,receivedKBitrate:+(8*c(e,t,"bytesReceived")/r).toFixed(2)||0,rtt:t.rtt||0,totalRtt:Math.round(t.totalRtt||0),packetsReceived:n,firCount:c(e,t,"firCount"),nackCount:i,pliCount:c(e,t,"pliCount"),retransmittedRate:+(i/(n+o)).toFixed(2)}}function c(e,t,r){let o=Number.isFinite(e[r])?+e[r]:0;return Math.max(0,(Number.isFinite(t[r])?+t[r]:0)-o)}r.d(t,{At:function(){return n},IE:function(){return a},cX:function(){return o},xt:function(){return i}}),r(675373),r(777180)},888555:function(e,t,r){"use strict";r.d(t,{U:function(){return i},j:function(){return n}});var o=r(818749);let i={PREFIX:`${o.T}-chat`,PREFIX_DIVIDER:`${o.T}-chat-divider`,PREFIX_CHAT_BOX:`${o.T}-chat-chatBox`,PREFIX_CHAT_BOX_ACTION:`${o.T}-chat-chatBox-action`,PREFIX_INPUT_BOX:`${o.T}-chat-inputBox`,PREFIX_ATTACHMENT:`${o.T}-chat-attachment`,PREFIX_HINT:`${o.T}-chat-hint`},n={ROLE:{USER:"user",ASSISTANT:"assistant",SYSTEM:"system",DIVIDER:"divider"},CHAT_ALIGN:{LEFT_RIGHT:"leftRight",LEFT_ALIGN:"leftAlign"},MESSAGE_STATUS:{LOADING:"loading",INCOMPLETE:"incomplete",COMPLETE:"complete",ERROR:"error"},PIC_SUFFIX_ARRAY:["png","jpg","jpeg","gif","bmp","webp"],PIC_PREFIX:"image/",SCROLL_ANIMATION_TIME:300,SHOW_SCROLL_GAP:100,MODE:{BUBBLE:"bubble",NO_BUBBLE:"noBubble",USER_BUBBLE:"userBubble"},SEND_HOT_KEY:{ENTER:"enter",SHIFT_PLUS_ENTER:"shift+enter"}}},395075:function(e,t,r){"use strict";r.d(t,{UX:function(){return i},j2:function(){return n}});var o=r(818749);let i={PREFIX:`${o.T}-form`},n={LAYOUT:["horizontal","vertical"],LABEL_POS:["left","top","inset"],LABEL_ALIGN:["left","right"],EXTRA_POS:["middle","bottom"],DEFAULT_TRIGGER:"change"}},912898:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}}),r(874386);var o=r(883520);class i extends o.Z{constructor(){super(...arguments),this.handleVisibleChange=e=>{let{visible:t,onVisibleChange:r}=this.getProps();!(t in this.getProps())&&this.setState({visible:e}),r&&r(e)},this.handleCurrentIndexChange=e=>{let{currentIndex:t,onChange:r}=this.getProps();!(t in this.getProps())&&this.setState({currentIndex:e}),r&&r(e)}}}},375069:function(e,t,r){"use strict";r(429532);var o=r(883520),i=r(354159),n=r.n(i);class a extends o.Z{init(e){var t,r;super.init(e),this.animation=n().loadAnimation(this._adapter.getLoadParams()),null===(t=this.getProp("getAnimationInstance"))||void 0===t||t(this.animation),null===(r=this.getProp("getLottie"))||void 0===r||r(a.getLottie())}destroy(){super.destroy(),this.animation.destroy()}constructor(e){super(Object.assign(Object.assign({},a.defaultAdapter),e)),this.animation=null,this.handleParamsUpdate=()=>{var e;this.animation.destroy(),this.animation=n().loadAnimation(this._adapter.getLoadParams()),null===(e=this.getProp("getAnimationInstance"))||void 0===e||e(this.animation)}}}a.getLottie=()=>n(),t.Z=a},139357:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}}),r(429532);var o=r(645260),i=r.n(o),n=r(883520),a=r(794158);class c extends n.Z{init(){this._timer=null,this._mounted=!0}destroy(){this._mounted=!1}isValidKey(e){return null!=e&&("string"==typeof e||"number"==typeof e)}handleClick(e){let{isSubNav:t,itemKey:r,text:o,disabled:i}=this.getProps();if(i)return;!t&&this.isValidKey(r)&&!this._adapter.getSelectedKeysIsControlled()&&!this._adapter.getSelected()&&this._adapter.updateSelected(!0);let n=[r];if(!t){if(!this._adapter.getSelected()){let t=[this._adapter.cloneDeep(this.getProps())];this._adapter.notifyGlobalOnSelect({itemKey:r,selectedKeys:n,selectedItems:t,domEvent:e})}this._adapter.notifyGlobalOnClick({itemKey:r,text:o,domEvent:e})}this._adapter.notifyClick({itemKey:r,text:o,domEvent:e})}handleKeyPress(e){if((0,a.Z)(e)){let{link:t,linkOptions:r}=this.getProps(),o=i()(r,"target","_self");this.handleClick(e),"string"==typeof t&&("_blank"===o?window.open(t):window.location.href=t)}}constructor(e){super(Object.assign({},e))}}},345918:function(e,t,r){"use strict";r.d(t,{U:function(){return i}});var o=r(818749);let i={PREFIX:`${o.T}-resizable`}},375550:function(e,t,r){"use strict";r.d(t,{KT:function(){return s},UX:function(){return a},j2:function(){return c}});var o=r(818749),i=r(120534),n=r(221912);let a={PREFIX:`${o.T}-select`,PREFIX_OPTION:`${o.T}-select-option`,PREFIX_GROUP:`${o.T}-select-group`},c={SIZE_SET:["small","large","default"],POSITION_SET:n.j2.POSITION_SET,MODE_SELECT:"select",MODE_AUTOCOMPLETE:"autoComplete",STATUS:i.L,SEARCH_POSITION_TRIGGER:"trigger",SEARCH_POSITION_DROPDOWN:"dropdown"},s={LIST_HEIGHT:270}},428297:function(e,t,r){"use strict";function o(e){try{return e instanceof HTMLElement}catch(t){return"object"==typeof e&&1===e.nodeType&&"object"==typeof e.style&&"object"==typeof e.ownerDocument}}r.d(t,{Z:function(){return o}})},535187:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var o=r(134761),i=r(520739),n=r(878389);r(268917),r(429532);var a=r(113704),c=r(15479),s=r(135958),l=r(879851);let G=e=>{let{TTCommon:t}=window;return t?(G=e=>{if(!e)return 0;try{let{alg_type:r,sharp_level:o,scale_type:i,sr_enable:n,sr_local_error:a,proc_avg:c,render_from:s}=JSON.parse(t.executeWithElement(e,"getSrCurrentInfo",""))||{};return{is_super_resolution:3===n&&0===a||!a&&c>0?1:0,sr_alg_type:r,sr_sharp_level:o,sr_scale_type:i,sr_enable:n,sr_local_error:a,sr_render_from:s}}catch(e){return{}}})(e):(G=()=>{},{})};class u{init(){this.initLog(),this.initEvt()}initLog(){let e=(0,c.Kj)(this.options);this.log=(0,c.Px)(this.options),this.tea=new l.Z(this.options,e)}initEvt(){var e,t,r;let o=this._player;o&&(this._player.on(a.le.SEI,this.handleSEIParsed),this._player.on(a.le.FLVERROR,this.handleError),this._player.on(a.le.TTFB,this.handleTTFB),this._player.on(a.le.RESPONSEHEADERS,this.setCdnIp),this._player.on(a.le.METADATA,this.handleMetaDataLoaded),this._player.on(a.le.PROP_SPEED,this.handleSpeedUpdate),this._player.on("rtm_timing",this.handleRTCTiming),this._player.on(a.le.RTM_WEBTS_TIMING,this.handleRTMWebTsTiming),this._player.on("pause",this.handlePause),this._player.once(a.le.KEYFRAME,this.handleKeyframe),this._player.on(a.le.PROP_ENDEDSTATUS,this.handleEndStatus),this._player.on(a.le.RTM_NETWORK,this.handleRTMNetwork),null===(e=this._player._core)||void 0===e||e.on("srstate_change",this.handleSRStateChange),null===(t=this._player._core)||void 0===t||t.on("workerinit",this.handleWorkerInit),null===(r=this._player._core)||void 0===r||r.on("unsync",this.handleAVUnsync),o.addEventListener("loadstart",this.reportStartPlay),o.addEventListener("loadeddata",this.reportFirstframe),o.addEventListener("canplay",this.handleCanplay),o.addEventListener("waiting",this.handleWaiting),o.addEventListener("playing",this.handleOncePlaying),o.addEventListener("playing",this.handlePlaying),o.addEventListener("timeupdate",this.handleTimeupdate),o.addEventListener("ended",this.handleEnd),o.addEventListener("error",this.handleError),o.addEventListener("degrade",this.handleDegrade),this.initWindowListener())}offEvt(){var e,t,r;let o=this._player;o&&(this._player.off(a.le.SEI,this.handleSEIParsed),this._player.off(a.le.FLVERROR,this.handleError),this._player.off(a.le.TTFB,this.handleTTFB),this._player.off(a.le.RESPONSEHEADERS,this.setCdnIp),this._player.off(a.le.METADATA,this.handleMetaDataLoaded),this._player.off(a.le.PROP_SPEED,this.handleSpeedUpdate),this._player.off("rtm_timing",this.handleRTCTiming),this._player.off(a.le.RTM_WEBTS_TIMING,this.handleRTMWebTsTiming),this._player.off("pause",this.handlePause),this._player.off(a.le.KEYFRAME,this.handleKeyframe),this._player.off(a.le.PROP_ENDEDSTATUS,this.handleEndStatus),this._player.off(a.le.RTM_NETWORK,this.handleRTMNetwork),null===(e=this._player._core)||void 0===e||e.off("srstate_change",this.handleSRStateChange),null===(t=this._player._core)||void 0===t||t.off("workerinit",this.handleWorkerInit),null===(r=this._player._core)||void 0===r||r.off("unsync",this.handleAVUnsync),o.removeEventListener("loadstart",this.reportStartPlay),o.removeEventListener("loadeddata",this.reportFirstframe),o.removeEventListener("canplay",this.handleCanplay),o.removeEventListener("waiting",this.handleWaiting),o.removeEventListener("playing",this.handleOncePlaying),o.removeEventListener("playing",this.handlePlaying),o.removeEventListener("timeupdate",this.handleTimeupdate),o.removeEventListener("ended",this.handleEnd),o.removeEventListener("error",this.handleError),o.removeEventListener("degrade",this.handleDegrade),this.removeWindowListener())}initWindowListener(){window.addEventListener("beforeunload",this.destroyFunc)}removeWindowListener(){window.removeEventListener("beforeunload",this.destroyFunc)}stallEnd(){let e=(0,s.Xn)();if(this.inWaitingStart){let t=e-this.inWaitingStart;t>200&&(this.log.play_stop.stall_count++,this.log.play_stop.stall_time+=t,this.log.playing.stall_time+=e-Math.max(this.inWaitingStart,this.log.playing.timestamp),this.log.stall.stall_end=e,this.log.playing.stall_count++,this.tea.push(this.log.stall))}this.inWaitingStart=0}reportPause(){this.log.pause.timestamp=(0,s.Xn)(),this.tea.push(this.log.pause)}handleUserLeave(){if(!this.destroyed&&!!this.started)this.updatePlayStopParams(),this.reportPlayStop(),this.clearPlayingInterval()}reportPlayStop(){this.tea.push(this.log.play_stop)}updatePlayStopParams(){let e=(0,s.Xn)(),t=e-this.log.start_play.start_play_time,{play_stop:r}=this.log;if(this.inWaitingStart&&e-this.inWaitingStart>200&&(r.stall_time+=e-this.inWaitingStart),this.inWaitingStart=0,Object.assign(r,{stall_time_per_100sec:r.stall_time/t*100,stall_count_per_100sec:1e3*r.stall_count/t*100}),0===this.log.play_stop.stall_count_per_100sec&&(this.log.play_stop.stall_time_per_100sec=0),!(this.log.play_stop.stall_time_per_100sec>100)&&!(this.log.play_stop.stall_time_per_100sec<0))this.log.playing.index?(Object.assign(this.log.playing,{is_last:1}),this.reportPlaying(!1)):(this.log.play_stop.error_code=this.log.play_error.code,this.log.play_stop.error_info=this.log.play_error.msg),Object.assign(r,{duration:t/1e3,play_time:t})}reportPlaying(e){this.log.playing.index++;let t=this.log.playing.timestamp,r=0,o=(0,s.Xn)();this.inWaitingStart&&this.inWaitingStart<o&&(r=Math.min(this.log.playing.play_time,o-Math.max(this.inWaitingStart,t))),this.getPlayerQuality(),this.getPlayerBuffer(),this.updateSpeedAndFPS();let a=o-t;a<0&&(a=1e4),r>200&&(this.log.playing.stall_time+=r,this.log.playing.stall_count++),Object.assign(this.log.playing,{duration:e?0:a/1e3,stall_time_per_100sec:e?0:this.log.playing.stall_time/a*100,stall_count_per_100sec:e?0:1e3*this.log.playing.stall_count/a*100,first_frame_view:this.log.first_frame.first_frame_view}),this.log.playing.video_render_stall_time_per_100sec=this.log.playing.stall_time_per_100sec,this.log.playing.video_render_stall_count_per_100sec=this.log.playing.stall_count_per_100sec,this.log.playing.timestamp=o,this.tea.push(Object.assign((0,n._)((0,i._)({},G(this._player._video)),{time_hour:new Date(o).getHours()}),this.log.playing)),this.log.playing.stall_time=0,this.log.playing.stall_count=0,this.log.playing.rtm_network=[]}setPlayResultTimer(){this.clearPlayResultTimer(),this.log.play_result.start=(0,s.Xn)(),this.playResultTimer=setTimeout(()=>{if(!(this.log.play_result.timestamp>=this.log.play_result.start))this.log.play_result.elapsed=(0,s.Xn)()-this.log.play_result.start,this.log.play_result.is_shorter=+(this.log.play_result.elapsed<this.log.play_result.threshold),!this.log.play_result.is_shorter&&(this.log.play_result.is_threshold=1,this.tea.push(this.log.play_result))},this.log.play_result.threshold)}clearPlayResultTimer(){clearTimeout(this.playResultTimer)}clearPlayingInterval(){clearInterval(this.intervalId)}getPlayerBuffer(){let e=this._player,t=e.buffered;if(t){let r=Math.max(0,t.length-1);try{let o=(t.end(r)-e.currentTime)*1e3;return this.log.playing.audio_buffer_time=this.log.playing.video_buffer_time=o,o}catch(e){}}return 0}getBuffered(){let e=[];try{for(let t=0;t<this._player.buffered.length;t++)e.push([this._player.buffered.start(t),this._player.buffered.end(t)])}catch(e){}return e}getPlayerQuality(){let e=this._player;try{let t=e.getVideoPlaybackQuality();this.log.playing.drop_count=t.droppedVideoFrames-this.tempDroppedFrameCount,this.log.playing.drop_percent=this.log.playing.drop_count/(t.totalVideoFrames-this.tempTotalFrameCount),this.log.play_stop.drop_percent=t.droppedVideoFrames/t.totalVideoFrames,this.tempDroppedFrameCount=t.droppedVideoFrames,this.tempTotalFrameCount=t.totalVideoFrames,this.log.stall.drop_count=this.log.playing.drop_count,this.log.stall.drop_percent=this.log.playing.drop_percent}catch(e){}}updateSpeedAndFPS(){if(this.speedInfo){let{totalByteSize:e,recentSpeed:t,renderFrames:r,demuxFrames:o,decodeFrames:i,decodedFrames:n}=this.speedInfo,a=(0,s.Xn)(),c=a-this.playingSpeedInfoCache.timestamp;if(this.playingSpeedInfoCache.timestamp){if(e>=this.playingSpeedInfoCache.totalByteSize){let r=e-this.playingSpeedInfoCache.totalByteSize;this.log.playing.downloaded_size=r,this.log.playing.download_speed=8*r/c,this.log.playing.current_speed=t/8e3}else this.log.playing.downloaded_size=e,this.log.playing.download_speed=t/1e3,this.log.playing.current_speed=t/8e3;let a=r-this.playingSpeedInfoCache.renderFrames;this.log.playing.render_fps=a/c*1e3,Object.assign(this.log.playing,{demux_frames:o-this.playingSpeedInfoCache.demuxFrames,decode_frames:i-this.playingSpeedInfoCache.decodeFrames,decoded_frames:n-this.playingSpeedInfoCache.decodedFrames,render_frames:a})}else this.log.playing.downloaded_size=e,this.log.playing.current_speed=t/8e3;this.playingSpeedInfoCache={totalByteSize:e,demuxFrames:o,decodeFrames:i,decodedFrames:n,renderFrames:r,timestamp:a}}}constructor(e){var t=this;(0,o._)(this,"options",void 0),(0,o._)(this,"_player",void 0),(0,o._)(this,"log",{}),(0,o._)(this,"tea",void 0),(0,o._)(this,"inWaitingStart",0),(0,o._)(this,"tempDroppedFrameCount",0),(0,o._)(this,"tempTotalFrameCount",0),(0,o._)(this,"started",!1),(0,o._)(this,"firstFrameViewed",!1),(0,o._)(this,"destroyed",!1),(0,o._)(this,"speedInfo",void 0),(0,o._)(this,"playingSpeedInfoCache",{renderFrames:0,demuxFrames:0,decodeFrames:0,decodedFrames:0,totalByteSize:0,timestamp:0}),(0,o._)(this,"playResultTimer",void 0),(0,o._)(this,"intervalId",void 0),(0,o._)(this,"reportUrlChange",e=>{this.tea.push(Object.assign(this.log.play_url_change,{url:e}))}),(0,o._)(this,"updateExt",e=>{var t;null===(t=this.tea)||void 0===t||t.updateCommonParams(e)}),(0,o._)(this,"reportStartPlay",()=>{this.log.start_play.start_play_time=(0,s.Xn)(),!this.started&&this.tea.push(this.log.start_play),this.started=!0,this.setPlayResultTimer()}),(0,o._)(this,"handleTTFB",e=>{let{responseUrl:t,url:r,elapsed:o}=e;this.log.first_frame.ttfb=o||-1,this.log.first_frame.is_redirect=+(t!==r)}),(0,o._)(this,"setCdnIp",e=>{var t;let{headers:r,elapsed:o}=e;o&&(this.log.first_frame.sdp_elapse=o||-1),r&&(null===(t=this.tea)||void 0===t||t.updateCommonParams({cdn_ip:r["x-server-ip"]||r["X-Server-Ip"]||r["X-SERVER-IP"]}))}),(0,o._)(this,"handleMetaDataLoaded",e=>{let{trackType:t,codec:r}=e;this.log.play_metadata_loaded.meta=e,this.log.play_metadata_loaded.codec=r,this.log.play_metadata_loaded.mediaType=t,"video"===t&&this.tea.updateCommonParams({codec_type:r}),this.tea.push(this.log.play_metadata_loaded)}),(0,o._)(this,"handleSpeedUpdate",e=>{if(this.speedInfo=e,this.speedInfo){let{recentSpeed:e,renderFrames:t}=this.speedInfo;this.log.stall.current_speed=e/8e3,this.log.stall.render_fps=t}}),(0,o._)(this,"handleRTCTiming",e=>{if(e&&"object"==typeof e){let t=e.play_start_time,r=e.dtls_connected_time,o=e.report_start_time;Object.assign(this.log.first_frame,e),t&&o&&r&&(this.log.first_frame.rtm_report_start_time=o,this.log.first_frame.rtm_first_time=t,this.log.first_frame.dtls_connected_time=r)}}),(0,o._)(this,"handleRTMWebTsTiming",e=>{"object"==typeof e&&Object.assign(this.log.first_frame,e)}),(0,o._)(this,"handleKeyframe",e=>{this.log.play_stop.is_firstframe_received=1,this.log.play_stop.firstframe_pts=e.pts}),(0,o._)(this,"handleEndStatus",()=>{this.stallEnd()}),(0,o._)(this,"handleRTMNetwork",e=>{this.log.playing.rtm_network.push(e)}),(0,o._)(this,"handleSRStateChange",function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.running?t.log.playing.is_super_resolution=1:(t.log.playing.is_super_resolution=0,t.log.playing.sr_code=e.code,t.log.playing.sr_message=e.message)}),(0,o._)(this,"handleWorkerInit",e=>{let{costtime:t,workerReadyTime:r,workerinitStartTime:o}=e.detail||e,a=r>this.log.start_play.start_play_time?r-o:0;this.log.play_stop.worker_init_cost=this.log.first_frame.worker_init_cost=a,this.tea.push((0,n._)((0,i._)({},this.log.worker_message),{cost_time:t,worker_init_cost:a}))}),(0,o._)(this,"handleAVUnsync",e=>{let{currentTime:t,gap:r}=e.detail||e;this.tea.push((0,n._)((0,i._)({},this.log.play_av_unsync),{currentTime:t,duration:r}))}),(0,o._)(this,"handleWaiting",()=>{!this.inWaitingStart&&this.firstFrameViewed&&(this.inWaitingStart=this.log.stall.stall_start=(0,s.Xn)(),this.log.stall.play_current_time=this._player.currentTime,this.log.stall.buffered=this.getBuffered(),this.log.stall.start_diff=this.inWaitingStart-this.log.first_frame.timestamp,this.log.stall.audio_buffer_time=this.getPlayerBuffer())}),(0,o._)(this,"handleCanplay",()=>{this.stallEnd(),this.reportFirstframe()}),(0,o._)(this,"handleOncePlaying",()=>{if(this._player.removeEventListener("playing",this.handleOncePlaying),this._player.paused){this.handlePause();return}this.playingSpeedInfoCache={totalByteSize:0,demuxFrames:0,decodeFrames:0,decodedFrames:0,renderFrames:0,timestamp:0},this.reportPlaying(!0),this.clearPlayingInterval();this.intervalId=setInterval(()=>{(100>Math.abs((0,s.Xn)()-this.log.playing.timestamp-1e4)||(0,s.Xn)()-this.log.playing.timestamp>=1e4)&&(this._player?this._player.paused?this.handlePause():this.reportPlaying(!1):this.destroyFunc())},1e3)}),(0,o._)(this,"handlePlaying",()=>{this.stallEnd()}),(0,o._)(this,"handleTimeupdate",()=>{this.stallEnd()}),(0,o._)(this,"handleSEIParsed",e=>{if(100===e.code){let t;let{log:{playing:r,first_frame:o,play_result:i}}=this;try{t=new TextDecoder("utf-8").decode(e.content)}catch(r){t=(0,s.j2)(e.content)}t=t.slice(t.indexOf("{"),t.lastIndexOf("}")+1);try{let e=JSON.parse(t),n=e.ts||e.heart_beat&&e.heart_beat.ts;if(Object.assign(o,e.loudness),Object.assign(i,e.loudness),!n){r.sei_string=t;return}r.sei_delay=(0,s.Xn)()-n,o.first_sei_delay=r.sei_delay,r.sei_source=e.source,r.ntp_sync=0,o.ntp_sync=0}catch(e){r.sei_string=t}r.sei_delay?r.sei_string=void 0:r.sei_string=t}}),(0,o._)(this,"handlePause",()=>{this.stallEnd(),this.clearPlayingInterval(),this.reportPlaying(!1),this._player.addEventListener("playing",this.handleOncePlaying),this.reportPause()}),(0,o._)(this,"handleEnd",()=>{this.stallEnd(),this.clearPlayingInterval(),this.log.playing.is_last=1,this.reportPlaying(!1),this.tea.push(this.log.play_stop)}),(0,o._)(this,"handleError",e=>{var t,r,o,n;e=e.detail||e;let a=this._player.error||{},c=(null==e?void 0:e.snapshot_play_url)||(null===(t=this._player)||void 0===t?void 0:t.snapshotPlayUrl)||this._player.src||"",l=(null==e?void 0:e.snapshot_play_protocol)||(null===(r=this._player)||void 0===r?void 0:r.snapshotPlayProtocol)||(null===(n=this._player.config)||void 0===n?void 0:null===(o=n.baseConfig)||void 0===o?void 0:o.protocol)||"",G=(0,s.l6)(c,l),u={snapshot_play_url:c,snapshot_play_format:G};Object.assign(this.log.play_error,{code:e.httpCode||e.code||a.code,info:e.message||a.message}),this.tea.push((0,i._)({},this.log.play_error,u)),!this.destroyed&&(!this.firstFrameViewed&&(Object.assign(this.log.first_frame_failed,{code:this.log.play_error.code,msg:e.message||a.message}),void 0!==this.log.first_frame_failed.timestamp&&(this.log.first_frame_failed.timestamp=(0,s.Xn)()),this.tea.push((0,i._)({},this.log.first_frame_failed,u)),!this.log.play_result.is_threshold&&(this.clearPlayResultTimer(),this.log.play_result.reason=e.message||a.message,this.log.play_result.code=this.log.play_error.code,this.tea.push((0,i._)({},this.log.play_result,u)))),this.log.play_stop.snapshot_play_url=c,this.log.play_stop.snapshot_play_format=G,this.handleUserLeave(),delete this.log.play_stop.snapshot_play_url,delete this.log.play_stop.snapshot_play_format)}),(0,o._)(this,"handleDegrade",e=>{Object.assign(this.log.degrade,{message:e.message}),this.tea.push(this.log.degrade)}),(0,o._)(this,"reportFirstframe",()=>{if(this.firstFrameViewed)return;this.firstFrameViewed=!0;let e=(0,s.Xn)();if(Object.assign(this.log.first_frame,{first_frame_view:e-this.log.start_play.start_play_time,buffered:this.getPlayerBuffer()}),this.log.first_frame.rtm_first_time){let e=performance.now()-this.log.first_frame.rtm_report_start_time;Object.assign(this.log.first_frame,{play_to_frist_frame:e-this.log.first_frame.rtm_first_time,waiting_first_frame:e-this.log.first_frame.dtls_connected_time})}this.tea.push(this.log.first_frame),this.clearPlayResultTimer(),this.log.play_result.result=1,this.tea.push(this.log.play_result),this.log.play_stop.is_stream_received=1}),(0,o._)(this,"destroyFunc",()=>{!this.destroyed&&(this.handleUserLeave(),this.destroyed=!0,this.offEvt(),this.clearPlayingInterval(),this.clearPlayResultTimer())}),this.options=(0,c.FW)(e),this._player=this.options.player,this.init()}}},86499:function(e,t,r){"use strict";r.d(t,{RA:function(){return d},To:function(){return n},UP:function(){return G},Yx:function(){return c},bA:function(){return p},bZ:function(){return l},gj:function(){return s},gt:function(){return i},nU:function(){return a},oT:function(){return h},qX:function(){return T},rG:function(){return u},vF:function(){return o}});var o="webview",i="webview_popup",n="lynxview",a="webcast_lynxview",c="lynxview_popup",s={WIDTH:"width",HEIGHT:"height",GLOBAL_PROPS:"global_props",INITIAL_PROPS:"initial_data",URL:"url",SURL:"surl"},l="https://lf-normal-gr-sourcecdn.bytegecko.com/obj/byte-gurd-source-gr/webcast/mono/h5/react_lynx_web3_douyin/index.html",G="@annie/web/jsb_call",u="@annie/web/jsb_callback",d="@annie/web/jsb_update_data",T="@annie/web/jsb_error",h=new Map,p="$$"},549415:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var o=r(88648),i=function(e,t){var r=(0,o.useRef)(!1);(0,o.useEffect)(function(){return r.current?e():(r.current=!0,function(){})},t)}},811265:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});let o=`
GeForce RTX 4090|1950
GeForce RTX 4090 Laptop GPU|1791
GeForce RTX 4070 Ti|1517
GeForce RTX 3090 Ti|1465
GeForce RTX 4080|1426
GeForce RTX 4060 Laptop GPU|1408
GeForce RTX 3080 Ti Laptop GPU|1394
GeForce RTX 3080|1325
GeForce RTX 3080 Ti|1298
RTX A5500 Laptop GPU|1242
GeForce RTX 3090|1235
GeForce RTX 3070 Ti|1229
GeForce RTX 3070|1228
GeForce RTX 3060 Ti|1166
GeForce RTX 3080 Laptop GPU|1139
RTX A4000 Laptop GPU|1126
GeForce RTX 2080 Ti|1120
GeForce RTX 3070 Laptop GPU|1077
TITAN V|1070
GeForce RTX 2080 SUPER|1063
Quadro RTX 8000|1054
RTX A6000|1046
TITAN RTX|1046
GeForce RTX 3070 Ti Laptop GPU|1033
RTX A5000 Laptop GPU|1027
GeForce RTX 4090 Laptop GPU|1024
GeForce RTX 3060|1015
TITAN X (Pascal)|1008
TITAN Xp|995
GeForce GTX 1080 Ti|992
GeForce RTX 4070 Laptop GPU|989
GeForce RTX 4090|982
GeForce RTX 2070 SUPER|981
GeForce RTX 4080|975
GeForce RTX 3060|970
GeForce RTX 2080|970
GeForce RTX 4080 Laptop GPU|968
GeForce RTX 3060 Laptop GPU|913
GeForce RTX 2060 SUPER|890
GeForce RTX 4060 Laptop GPU|882
GeForce RTX 2070|879
GeForce RTX 2080 Super with Max-Q Design|868
GeForce RTX 2080 with Max-Q Design|868
Quadro RTX 5000|867
GeForce RTX 3080 Ti Laptop GPU|861
Quadro RTX 5000 with Max-Q Design|843
Asus GeForce GTX 1080|841
GeForce GTX 1080|841
GeForce RTX 2070 Super with Max-Q Design|837
RTX A3000 Laptop GPU|835
Quadro RTX 4000 with Max-Q Design|833
GeForce RTX 3070 Ti Laptop GPU|827
Quadro RTX 4000|817
RTX A6000|814
GeForce GTX 1070 Ti|785
GeForce RTX 4070 Ti|784
GeForce RTX 4050 Laptop GPU|784
RTX A5500 Laptop GPU|783
TITAN Xp COLLECTORS EDITION|771
GeForce RTX 2070 with Max-Q Design|765
GeForce RTX 3050|760
GeForce RTX 2060|757
GeForce GTX 980 Ti|755
Quadro P6000|753
GeForce GTX 1080|747
Quadro RTX 6000|744
GeForce GTX 1070|742
RTX A4000|739
GeForce RTX 3090|737
GeForce RTX 3080 Ti|733
GeForce GTX 1080 Ti|729
Quadro P4200|711
GeForce GTX 1080 with Max-Q Design|707
GeForce RTX 3060 Lite Hash Rate|705
EIZO MED-XN83|704
GeForce RTX 3080 Ti|701
GeForce GTX 1660 SUPER|701
TITAN Xp|700
EVGA GeForce GTX 1070|698
GeForce RTX 3090 Ti|696
Quadro GV100|695
Quadro P4000|695
GeForce GTX 1660 Ti|694
GeForce RTX 3070 Ti|690
RTX 6000 Ada Generation|687
GeForce RTX 3070|687
Quadro RTX 8000|685
RTX A2000 12GB|683
GeForce RTX 2080|679
GeForce GTX TITAN X|679
Quadro M6000 24GB|676
GeForce GTX 1660 SUPER|674
TITAN V|673
Quadro RTX 3000|672
Graphics Device|672
RTX A5000|669
GeForce RTX 3090|669
TITAN Xp COLLECTORS EDITION|669
GeForce GTX 1070 A17|668
GeForce RTX 3080 Laptop GPU|667
RTX A4500 Embedded GPU|663
RTX A5000 Laptop GPU|663
GeForce RTX 3080|658
GeForce RTX 3050 Ti Laptop GPU|657
GeForce GTX 1070 with Max-Q Design|656
GeForce RTX 3060 Ti|656
Quadro P4200 with Max-Q Design|651
GeForce RTX 3080|651
GeForce RTX 2080 SUPER|650
GeForce GTX 1070 Ti|648
GeForce GTX 1070 with MaxQ Design|642
RTX A3000 Laptop GPU|641
GeForce RTX 3070 Laptop GPU|641
GeForce GTX 1070|640
GA104GL [RTX A4000]|639
GeForce GTX 980 Ti|637
GeForce RTX 2070 Mobile / Max-Q Refresh|637
RTX A4000 Laptop GPU|634
GeForce RTX 3060|633
Microsoft Virtual Render Driver|633
GeForce RTX 3050 Laptop GPU|631
RTX A2000|629
GeForce RTX 2070 Mobile / Max-Q|626
GeForce RTX 3070|625
Quadro P5000|625
Quadro P4000|621
GeForce RTX 3060 Laptop GPU|621
GeForce RTX 2060 with Max-Q Design|618
GV102|614
GeForce RTX 2070 SUPER|612
GeForce GTX 1660|606
GeForce RTX 2070|604
GeForce GTX 1660 Ti with Max-Q Design|601
GeForce GTX TITAN X|598
RTX A2000 8GB Laptop GPU|598
GeForce GTX TITAN Xp|595
GeForce GTX 980|593
GeForce RTX 2080 SUPER|591
GTX 1060 HL|589
Tesla T4|589
GRID P4-1Q|585
RTX A4000|581
GeForce RTX 2080 Ti|577
GeForce RTX 2080 Super with Max-Q Design|576
Quadro RTX 4000 Mobile / Max-Q|576
TU102 [TITAN RTX]|574
GeForce GTX 1060 with Max-Q Design|571
GeForce RTX 2070 SUPER|570
GeForce GTX 1060 6GB|570
GeForce RTX 2080 Mobile|568
GeForce RTX 2060|568
Quadro P3200|565
P106-100|564
GRID V100DX-1Q|564
RTX A2000|562
GeForce RTX 2080 Ti Rev. A|561
GeForce RTX 2080 Rev. A|559
GV100 [TITAN V]|557
GeForce RTX 2080|556
GeForce GTX 1650 SUPER|554
P106-100 Custom|553
GeForce RTX 2070 Super with Max-Q Design|553
GV100|553
GeForce RTX 2070 Mobile|550
GP102 [TITAN X]|548
RTX A2000 12GB|546
GeForce GTX 1060 5GB|542
MSI GeForce GTX 1060|542
GeForce RTX 2060 SUPER|542
GRID T4-1Q|539
Quadro RTX 5000 Mobile / Max-Q|538
GeForce RTX 3050|538
GeForce GTX 1060 3GB|538
Quadro RTX 5000 with Max-Q Design|537
Quadro M6000|536
RTX A2000 Laptop GPU|536
GeForce GTX 1660 SUPER|533
A10-2B|530
TITAN X (Pascal)|530
Quadro P5000|527
GeForce RTX 2070|526
GeForce GTX 1080|525
GeForce RTX 2060 Mobile|524
PNY GeForce GTX 980|524
GeForce GTX 1080 Mobile|523
GeForce RTX 2060 SUPER|520
GeForce GTX 780 Ti|518
RTX A4500|516
GeForce RTX 2060 Rev. A|515
MSI GeForce GTX 980|515
Quadro P3200 with Max-Q Design|513
GeForce RTX 2070 with Max-Q Design|513
GeForce RTX 3050 Ti Laptop GPU|510
Quadro RTX 3000 Mobile / Max-Q|509
GeForce GTX 1660 SUPER|508
Quadro RTX 4000|508
GeForce GTX 1060|506
GeForce RTX 2080 with Max-Q Design|505
GeForce GTX 1080 Ti|505
GeForce GTX 1660 Ti Rev. A|504
GeForce GTX 1660 Ti Mobile|504
GeForce RTX 3050 Laptop GPU|503
GeForce RTX 2060|503
Quadro RTX 4000 with Max-Q Design|500
EIZO MED-XN83|499
GeForce GTX 970|499
GeForce GTX 1080|495
GeForce GTX 1070 Ti|492
GeForce GTX 980|491
A100-PCIE-40GB|489
GeForce GTX 1070|487
GeForce GTX 1660 Ti|487
Quadro P2200|485
GeForce GTX TITAN Black|484
TITAN Xp COLLECTORS EDITION|483
TITAN RTX|482
Quadro P5200|482
GeForce GTX 1060 with Max-Q Design|480
RTX A1000 Laptop GPU|479
GeForce GTX 1060 6GB|479
Quadro RTX 5000|475
TITAN V|475
GRID P100-4Q|474
EVGA GeForce GTX 970|472
GeForce GTX 1650 SUPER|471
GeForce GTX 1650 Ti|470
Quadro RTX 3000|470
Quadro M5000|469
Quadro RTX 3000 with Max-Q Design|468
GeForce GTX 980 Ti|467
GeForce GTX TITAN|467
Quadro P4200|466
GeForce GTX 1070 with Max-Q Design|466
Quadro M5000|466
GeForce GTX 1080 Ti|466
Tesla M60|462
GeForce GTX 1660|457
GeForce GTX 1660|455
GeForce RTX 2050|453
GeForce GTX 1060|453
GeForce RTX 2060 with Max-Q Design|453
Quadro P3200 with Max-Q Design|452
Quadro P4000|450
GeForce GTX 1060 3GB|449
GeForce GTX 1070|448
GeForce GTX 1060 6GB Rev. 2|447
Gigabyte GeForce GTX 780 Ti|447
TITAN Xp|444
GeForce GTX 980M|440
A10-4Q|439
GeForce GTX 1080 with Max-Q Design|437
GeForce GTX 1650 SUPER|435
Quadro P5000|435
Quadro P3000|434
RTX A6000|434
GeForce GTX 1060 3GB|433
GeForce GTX 1070 Ti|432
GeForce GTX 780|432
GeForce GTX 1060 Mobile|432
Gigabyte GeForce GTX 970|431
GeForce GTX TITAN Z|431
Quadro K6000|429
GeForce GTX 1650|425
GeForce GTX 970|421
Tesla K20m|420
Quadro GV100|419
Quadro P4000|419
Quadro P3200|417
GTX 1060 HL|415
RTX A2000 Laptop GPU|415
GeForce GTX 780 by St3Phl3|414
P102-100|412
T1200 Laptop GPU|412
GeForce GTX 780 Ti|411
GeForce GTX 1060 6GB|408
GeForce GTX 1650 Ti with Max-Q Design|407
Quadro T2000 with Max-Q Design|407
Quadro P2000|406
Quadro P2200|406
GeForce RTX 2060 Max-Q|405
GeForce GTX 1650 Ti Mobile|403
GeForce GTX 1060 Mobile 6GB|403
GeForce GTX 1060 with Max-Q Design|401
GeForce GTX 980|398
GeForce RTX 2070 Rev. A|397
GeForce GTX TITAN X|397
Tesla T4|395
Quadro P6000|394
GeForce GTX 1060 3GB|394
Quadro M5000|393
GeForce GTX 1060 with Max-Q Design|392
PNY GeForce GTX 970|392
Quadro T2000|391
Quadro T1000 with Max-Q Design|391
GRID P40-8Q|390
GeForce GTX 780 Rev. 2|389
Quadro GP100|387
GeForce GTX 980|387
P104-100|387
GeForce GTX 1650 Ti|386
GRID P40-4Q|384
GeForce GTX 780 Ti|383
Device|383
TU117M|381
Quadro P2000|380
Quadro RTX 6000|379
GeForce GTX 1070 Mobile|378
Quadro T1000|377
GeForce RTX 3070 Mobile / Max-Q|376
GeForce GTX 1060|376
GRID V100-1Q|375
GeForce GTX 780 Rev. 2|372
GeForce RTX 2050|370
GeForce GTX 770|370
GeForce GTX 970|368
GeForce GTX 1650 Ti|368
GRID T4-2B4|368
Asus GeForce GTX 780|366
P106-100|365
Quadro RTX 8000|365
GeForce GTX TITAN Black|365
GRID RTX6000-2Q|365
GeForce GTX TITAN Black|363
Quadro M4000|363
GeForce GTX 1060 6GB|362
Quadro P5000|361
GeForce GTX 1650|361
Quadro M5500|361
GeForce GTX 780|360
GeForce GTX 780|360
GeForce GTX 980M|358
GeForce GTX 1650|358
GeForce GTX 1050 Ti|357
Quadro P3200 Mobile|357
GeForce GTX 1650 with Max-Q Design|356
Tesla T4|356
Quadro P2000|356
GeForce GTX TITAN|355
GeForce GTX 970|355
GeForce GTX 980 Ti|354
GeForce GTX 1660 Ti with Max-Q Design|354
GeForce GTX 780 Rev. 2|352
GRID P4-4Q|351
GeForce GTX TITAN X|351
T1200 Laptop GPU|350
GRID T4-8Q|350
GeForce GTX 1060|349
GeForce GTX 1050 Ti with Max-Q Design|348
GeForce GTX 970M|346
T1000 8GB|346
GeForce RTX 3080 Mobile / Max-Q 8GB/16GB|346
GeForce GTX 780 Ti|346
GeForce GTX 680|346
GeForce GTX 1660 Ti|345
GeForce GTX 780|345
Quadro M6000|344
GRID T4-16Q|344
GeForce RTX 2080 Ti|344
GRID T4-1B|343
Quadro K5200|342
Quadro P2200|341
T1000 8GB|341
Tesla K80|341
Quadro T2000 Mobile / Max-Q|338
TU107|337
GeForce GTX 780 Mac|336
GeForce GTX TITAN|336
GeForce GTX 980M|335
GRID P40-2Q|335
EVGA GeForce GTX 780|334
GeForce GTX TITAN Z|334
TITAN X (Pascal)|332
GeForce GTX 960|331
Tesla P40|331
GeForce GTX 1650 Ti with Max-Q Design|330
Tesla P40|330
GeForce GTX 1060se 3GB|329
GeForce GTX 1650 Mobile / Max-Q|329
Quadro T2000 with Max-Q Design|328
T1000|327
RTX A5500|326
A40-8Q|326
GeForce RTX 3060 Mobile / Max-Q|326
GeForce GTX 690|326
Tesla V100-SXM2-16GB|326
Quadro M5000|325
A16-2B|323
GeForce GTX 1050 Ti with Max-Q Design|321
GeForce GTX 1050 Ti Mobile|321
GeForce GTX 980M|319
Quadro M3000M|318
GeForce GTX 1650 with Max-Q Design|318
GeForce GTX 670|316
Quadro P3000|316
T600 Laptop GPU|315
Quadro T1000 with Max-Q Design|313
Tesla K80|312
Tesla K20m|311
GeForce GTX 770|311
Tesla P100-PCIE-16GB|311
Quadro M5000M|311
Tesla K80|309
EVGA GeForce GTX 1070|309
Quadro T1000|309
GeForce GTX 1050 Ti|309
GeForce GTX TITAN Z|308
Quadro T2000|308
Quadro M6000 24GB|308
GeForce GTX 760 Ti|308
GeForce RTX 2080 SUPER Mobile / Max-Q|308
GeForce GTX 1050 Ti|307
Quadro P2000|304
Quadro P6000|304
GeForce GTX 770 Mac Edition|303
MSi GeForce GTX 1050 Ti|303
A40|303
T600|303
P106-090|302
P106-090|301
Quadro K5200|300
GeForce GTX 770|299
GeForce GTX 680|299
GeForce GTX TITAN|299
GeForce GTX 680|297
GRID M60-4Q|296
Quadro M4000|296
GRID M60-2Q|295
GeForce GTX 760|294
GRID V100DX-16Q|293
Quadro RTX 6000/8000|293
GeForce GTX 770|293
GP104|292
GeForce GTX 780 Rev. 2|290
GeForce GTX 1050 Ti|288
GeForce GTX 950|288
EVGA GeForce GTX 1050 Ti|288
GeForce GTX 1650 with Max-Q Design|286
GeForce GTX 880M|285
%NVIDIA_DEV.13D7.0580.1028%|283
GP104GL|283
Gigabyte GeForce GTX 960|282
Quadro K5200|281
GeForce GTX 660 Ti|281
GeForce GTX 670|281
Quadro M4000|280
GeForce GTX 580|280
MSi GeForce GTX 960|280
Tesla M6|278
PNY GeForce GTX 680|278
T500|277
GeForce GTX 1050|276
GeForce GTX 1050 Ti with Max-Q Design|276
GeForce GTX 690|276
GeForce GTX 680|276
GeForce GTX 670|275
GeForce GTX 760 Ti|274
GeForce GTX 1050 3GB|272
GeForce GTX 880M|272
Tesla M60|272
Asus GeForce GTX 960|271
Quadro M4000|269
T600|268
Tesla K20m|268
GeForce GTX 760|268
GP102 [TITAN Xp]|267
GeForce GTX 960|267
GeForce GTX 670|265
Quadro T1000 Mobile|265
GeForce GTX 1050|264
Tesla M60|264
EVGA GeForce GTX 1080 Ti|263
GeForce GTX 970M|263
GeForce GTX 780M|262
GeForce GTX 690|262
Asus GeForce GTX 770|261
GeForce GTX 1070 with MaxQ Design|261
EVGA GeForce GTX 960|261
GeForce GTX 960|260
GRID T4-2Q|259
GeForce GTX 970M|259
GeForce GTX 960|259
Quadro M3000M|258
GeForce GTX 1060se 3GB|257
Tesla K10|257
Quadro M3000M|257
Quadro M2200|256
GeForce GTX 690|255
GeForce GTX 760|254
GeForce GTX 880M|254
Quadro K4200|253
Quadro P2000 with Max-Q Design|253
T550 Laptop GPU|253
Quadro K5200|252
MSI GeForce GTX 760|250
GeForce GTX 580|249
GeForce GTX 780M Mac Edition|249
GeForce GTX 570|249
Tesla V100-PCIE-16GB|248
GeForce GTX880M|248
GeForce GTX 760|247
GeForce GTX 570 Rev. 2|247
Asus GeForce GTX 670|246
GeForce GTX 580|246
GeForce GTX 1050|245
Tesla P4|244
GeForce GTX 680MX|244
GeForce GTX 480|242
GeForce GTX 1050|242
Quadro 7000|241
Quadro M4000M|241
GeForce GTX 1050 Mobile|240
GeForce GTX 660|240
GeForce GTX 760 (192-bit)|239
Quadro K5000|239
GeForce GTX 760 OEM|238
GeForce GTX 660 Ti|238
GeForce GTX 775M Mac Edition|238
GeForce GTX 965M|237
GeForce GTX 870M|236
GeForce GTX 950|236
GeForce GTX 560 Ti 448 Cores|236
GeForce GTX 780M|236
Quadro P2000 with Max-Q Design|234
MSI GeForce GTX 980 TI|234
GRID K2|233
GeForce GTX 1060 6GB OpenGL Engine|233
PNY GeForce GTX 1060|233
EVGA GeForce GTX 980|232
GRID RTX6000P-6Q|232
GeForce GTX 950|232
GeForce GTX 950|232
GeForce GTX 590|231
GeForce GTX 1070 OpenGL Engine|231
TITAN X (Pascal)|229
GeForce GTX 1050 with Max-Q Design|229
GeForce GTX TITAN Black|228
Quadro K4200|227
GeForce GTX 660 OEM|227
GeForce MX450|225
GeForce GTX 1050 with Max-Q Design|225
Quadro P1000|225
Graphics Device|225
Quadro M2000|222
GeForce GTX 1630|222
Quadro M4000M|221
Quadro K5100M|221
EVGA GeForce GTX 760|221
GeForce GTX 1070 Ti|221
GeForce GTX 660 Ti|220
GeForce GTX 570|220
GeForce GTX 660 Ti|219
Quadro K6000|219
GeForce GTX 570 Rev. 2|219
GeForce GTX 1050 with Max-Q Design|219
Tesla M40|218
GeForce GTX 680M|217
GeForce GTX 780M by Nick[D]vB|217
Asus GeForce GTX 980 TI|217
GeForce GTX 1060 3GB|217
Graphics Device|217
GeForce GTX 570 Rev. 2|216
GeForce GTX 1060 3GB OpenGL Engine|216
GeForce GTX 660|215
Point of View GeForce GTX 660 Ti|214
Gigabyte GeForce GTX 980|214
Quadro K5000|213
Quadro P1000|213
GeForce GTX 480|213
GeForce MX450|212
Quadro K4200|211
GRID K280Q|211
Asus GeForce GTX 760|210
Quadro P1000|210
GeForce GTX 680MX|209
GeForce GTX 1060 6GB|209
GeForce GTX 660|209
GeForce GTX 750 Ti|208
GeForce GTX 780M Mac Edition|208
GeForce GTX 775M Mac Edition|208
GRID K520|208
Quadro M2200|207
GRID M60-8Q|207
GRID K2|207
GeForce GTX 775M Mac Edition|206
GeForce GTX 560 Ti 448 Cores|205
GeForce GTX 760 (192-bit)|205
Quadro K5000|205
Gigabyte GeForce GTX 980 TI|204
GeForce GTX 780M Mac Edition|204
Asus GeForce GTX 660|204
GRID M60-1B|202
GeForce GTX 650 Ti BOOST|202
GeForce GTX 480|202
GeForce GTX 960M|201
GeForce GTX 660 OEM|201
GeForce GTX 780 Ti|201
Quadro K5000|201
GeForce GTX 780M Mac Edition|201
GeForce GTX 870M|200
GeForce GTX 680MX|200
GeForce GTX 680MX|199
Quadro P1000|198
Tesla P100 PCIe 16GB|198
Quadro K5100M|198
GeForce GTX 470|198
Quadro P620|197
Asus GeForce GTX 780|197
Quadro 6000|196
Quadro M1200|195
Quadro K2200|195
GeForce GTX 590|195
Quadro M2000M|194
Quadro M4000 OpenGL Engine|194
GeForce GTX 870M|194
GeForce GTX 1070|194
EVGA GeForce GTX 750 Ti|194
Zotac GeForce GTX 680|193
Quadro RTX 3000 with Max-Q Design|193
T400|193
Quadro M2200|193
Quadro K4100M by nikey22|192
GRID K2|192
GTX 865M by iMacGFX|191
Quadro M2000|191
GeForce GTX 980M|190
GeForce GTX 560 Ti|190
Palit GeForce GTX 660|190
GRID K260Q|189
GRID M10-2Q|189
GeForce GTX 660|189
GeForce GTX 965M|189
GeForce GTX 650 Ti BOOST|188
GeForce GTX 675MX Mac Edition|188
Quadro K5100M by nikey22|187
GeForce GTX 680M|187
Zotac GeForce GTX 660|186
GeForce GTX 650 Ti BOOST|186
GeForce GTX 760 (192-bit)|185
GRID M60-1Q|184
Gigabyte GeForce GTX 960|184
Quadro M2000M Special Edition|184
GeForce GTX 560 Ti|184
Inno3D GeForce GTX660|183
GeForce GTX 1060|183
GeForce GTX 675MX Mac Edition|182
Quadro P600|181
GeForce GTX 1080|181
GeForce GTX 675MX Mac Edition|181
Quadro P620|180
GK104 Board - 20530501|180
Ashley|180
Quadro M2000|179
GeForce GTX 860M|179
MSi GeForce GTX 1050 Ti|179
Asus GeForce GTX 750 Ti|178
GeForce GTX 750 Ti|178
GeForce GTX 750 Ti|177
EVGA GeForce GTX 980 TI|177
Asus GeForce GTX 770|177
GeForce GTX 760 OEM|176
GeForce GTX 750|176
Quadro P2000 Mobile|176
Quadro K4100M|175
T400 4GB|174
GeForce GTX 1080 Ti OpenGL Engine|174
Quadro K5000M|173
GeForce GTX 960A|173
GeForce GTX 560 Ti|172
Tesla M10|172
GeForce GTX 1080 Ti|172
GRID RTX6000P-6|172
GK104 Board - 2051b502|172
GeForce GTX 770M|172
GeForce GTX 960M|172
GeForce GTX 970|172
GRID M10-2Q|171
GeForce GTX 560 Ti OEM|171
MSi GeForce GTX 970|171
GK104GL [GRID K2]|171
GeForce GTX 470|170
GeForce GTX 560 Ti|170
TITAN Xp|170
GeForce GTX 870M|170
GeForce MX350|169
MSi GeForce GTX 580|169
GeForce GTX 960M|169
EVGA GeForce GTX 760|169
Quadro K4000M|169
T400|169
GeForce MX350|168
GeForce GTX 470|168
GeForce GTX 560|167
Quadro 6000|167
GeForce GTX 1050 Ti OpenGL Engine|167
Quadro M1200|167
Gigabyte GeForce GTX 970|166
GeForce GT 1030|166
GeForce GTX780M by nikey22|166
GeForce GTX870M by nikey22|166
Tesla V100-PCIE-32GB|165
Quadro K2200|165
Quadro M1000M|165
Quadro K2200|165
Asus GeForce GTX 970|164
GeForce GTX 750 Ti|164
Quadro M2000M|164
GeForce GTX 1050|164
GeForce GTX 1050 Ti|163
Quadro K5000|163
Graphics Device|162
GeForce MX250|162
T500|161
EVGA GeForce GTX 570|161
Quadro M2000M|161
Quadro K1200|159
GeForce GTX 860M|159
GeForce GTX 770M|159
Quadro M1200|158
GeForce GTX 675MX|158
GeForce MX330|158
Quadro K2200M|157
Quadro K4000|157
GeForce GTX 690|157
GeForce GTX 860M|157
MSi GeForce GTX 670|156
Quadro K2200|156
Quadro K4100M|156
GeForce GTX 770M by Nick[D]vB|155
Tesla V100-SXM2-32GB|155
GeForce GTX 1080 OpenGL Engine|155
Gigabyte GeForce GTX 670|155
EVGA GeForce GTX 960|155
GeForce GTX 750|155
GeForce Pre-Release TITAN X (Pascal) OpenGL Engine|154
GeForce GTX TITAN Xp|154
Asus GeForce GTX 950|154
Quadro K4100M|153
GeForce GTX 960|153
GeForce GTX 770M|153
GeForce MX330|153
Quadro M2200 Mobile|153
GeForce MX250|153
GeForce Pre-Release TITAN Xp OpenGL Engine|153
Quadro P600|153
Quadro M620|152
GeForce GTX 1070 Ti OpenGL Engine|152
GeForce GTX 770|152
GeForce GT 1030|152
Tesla C2070|152
GeForce GTX 650 Ti|152
GRID K240Q|151
GeForce GTX 480 OpenGL Engine|151
GeForce GTX 750|151
GeForce GTX TITAN|151
GeForce GTX 760 (192-bit)|151
GeForce GTX 560|151
GeForce GT 1030|151
Quadro K5000M|151
Quadro P1000 Mobile|151
Zotac GeForce GTX 660|151
GeForce GTX 460 v2|150
GRID GTX P40-6|150
MSi GeForce GTX 660|149
GeForce GTX 780M|149
MSI GeForce GTX 760|149
P106-090|149
GeForce GTX 950A|149
GeForce MX150|149
Asus GeForce GTX 1060|149
Unknown|149
GeForce GTX 980 Ti|148
GRID T4-4Q|148
GeForce GTX 465|147
Colorful GeForce GTX 960|147
Gigabyte GeForce GTX 750|147
Quadro M1000M|147
GeForce GTX 780 Mac|147
GeForce GTX 460|146
MSi GeForce GTX 960|146
GeForce GTX 560|146
Quadro K4000|145
GeForce GTX 970M|145
Quadro M1000M|145
Unknown|145
GeForce GTX 980|144
GeForce GTX 950|144
GeForce GTX 675M|144
Zotac GeForce GTX 960|144
GeForce Pre-Release Graphics Device|144
GeForce GTX 670 OpenGL Engine|143
Quadro K4000|143
EVGA GeForce GTX 580|143
GeForce GTX 950M|143
GeForce GTX TITAN Black OpenGL Engine|142
GeForce GTX 760|142
Quadro 5000|142
MSI GeForce GTX 570 HD|142
GeForce Pre-Release TITAN Xp COLLECTORS EDITION OpenGL E|142
GeForce GTX 1050 OpenGL Engine|142
GeForce GTX TITAN X|142
GeForce GTX 880M|141
GV-N660OC-2GD|141
GeForce GTX 750|141
Quadro M5000M|140
GeForce GTX 970 OpenGL Engine|140
GeForce GTX 675MX|140
Asus GeForce GTX 760|140
Quadro P5000 OpenGL Engine|139
GeForce GTX 580|139
GeForce GTX 675MX|139
Zotac GeForce GTX 750|139
Quadro K1200|139
GeForce MX150|139
GeForce GTX 650 Ti|139
Quadro K1200|139
GeForce GTX 980 Ti OpenGL Engine|139
GeForce GTX 580M|138
Asus GeForce GTX 580|138
GeForce GTX 770 OpenGL Engine|138
GeForce GT 1010|138
GeForce GTX 780 Rev. 2|138
Quadro P2000 OpenGL Engine|138
GeForce MX250|138
Quadro K4000|137
GeForce GTX 460 v2|137
GeForce GTX 770M|137
Gigabyte GeForce GTX 570 HD|136
GeForce GTX 465|136
GeForce GTX 460 v2|136
GeForce GTX 670|136
GeForce GTX 590 OpenGL Engine|136
GeForce GTX 780|135
GeForce GTX TITAN Black|135
GeForce GTX 660 Ti|135
Zotac GeForce GTX 560 Ti|134
GeForce GTX 880M OpenGL Engine|134
GeForce GTX 650 Ti|134
GeForce GTX 760 OpenGL Engine|134
null Graphics Device|134
Quadro M620|133
GeForce GTX 780M Mac Edition|133
GeForce MX150|132
Asus GeForce GTX 570 HD|132
GeForce GTX 775M OpenGL Engine|132
GeForce GTX 850M|132
Asus GeForce GTX 570|132
Quadro K6000 OpenGL Engine|131
GeForce GTX 850M|131
GeForce GTX 460|131
GeForce GTX 950A|130
GeForce GTX 780M OpenGL Engine|130
Point of View GeForce GTX 660 Ti|130
GeForce GTX 775M Mac Edition|130
EVGA GeForce GTX 650 Ti|130
EVGA GeForce GTX 750 Ti|129
GeForce GTX 460|129
Quadro P520|129
Gainward GeForce GTX 570|129
Asus GeForce GTX 750 Ti|129
Quadro K3100M|128
Quadro K2200|128
Asus GeForce GTX 560 Ti|127
GeForce GTX 680|127
GeForce GTX 680 OpenGL Engine|127
GeForce GTX 950M|127
GRID V100-2B|127
Gigabyte GeForce GTX 660 Ti|127
N15E-GT|126
Quadro K1200|126
GeForce GTX 650 Ti|126
Gigabyte GeForce GTX 770|126
GeForce GTX 660|126
Quadro 5000|125
GeForce GT 1030|125
GeForce GTX 950M|125
GeForce GTX 765M|125
Quadro M5000|125
Gigabyte GeForce GTX 560 Ti|125
GeForce GTX 580M|125
Quadro M2000|124
GeForce GTX 850M|124
GeForce GTX 570 OpenGL Engine|123
Gainward GeForce GTX 750 Ti|123
Quadro K2200M|123
GeForce GTX 780M Mac Edition|123
GeForce GTX 680MX OpenGL Engine|123
Quadro K4200|123
GeForce GTX 460 OEM|122
GeForce GTX 670MX|122
MSi GeForce GTX 560 Ti|122
GeForce GTX 460 SE|122
Quadro M4000|122
GeForce GTX880M OpenGL Engine|122
Quadro P620|121
GeForce GTX 560 SE|121
GeForce GTX880M by nikey22|121
GeForce GTX 555|121
GeForce GTX 965M OpenGL Engine|121
GeForce GTX 850A|121
Quadro K5000 OpenGL Engine|120
GeForce GTX 580 OpenGL Engine|120
Quadro K3100M|120
GeForce GTX 650 Ti BOOST|119
GeForce GTX 570M|119
GeForce GTX 675MX OpenGL Engine|119
GeForce GTX 775M Mac Edition|119
Zotac GeForce GTX 1050 Ti|118
GeForce GTX 965M|117
Quadro M600M|117
GeForce GTX 780M by Nick[D]vB|117
GeForce GTX 460 SE|117
GeForce GTX 555|116
GeForce GTX 670M|116
Quadro K3000M|116
GeForce GTX 780 Ti OpenGL Engine|116
Quadro K4000M|115
GeForce GTX 860M|115
Asus GeForce GTX 660|115
Tesla C2075|114
GeForce GTX 675MX Mac Edition|114
Zotac GeForce GTX 770|114
Gigabyte GeForce GTX 750 Ti|114
GeForce MX330|114
GeForce GT 1030|113
GeForce GTX TITAN OpenGL Engine|113
GeForce GTX 590|113
Quadro K620|113
GeForce GTX 780M|112
GeForce GTX 560 Ti|112
Quadro 6000|112
EVGA GeForce GTX 560 Ti|112
Asus GeForce GTX 960|112
Quadro K5000|112
Point of View GeForce GTX 470|111
PNY GeForce GTX 580|111
GeForce GTX 770M|111
GeForce GT 120|111
MSi GeForce GTX 660|111
Gigabyte GeForce GTX 560|111
GeForce GTX 680MX|110
GeForce 945M|110
GeForce GTX 765M|110
GeForce GTX 950 OpenGL Engine|110
GeForce Pre-Release Tesla C2075 OpenGL Engine|109
GeForce GTX 550 Ti|109
GeForce GTX 765M|108
PNY GeForce GTX 750|108
GeForce GTX 560 Ti 448 Cores|108
Quadro P500|108
GeForce GTX 670MX|108
GeForce GTX 680MX|107
GeForce GTX 460 SE|107
GeForce GTX 675MX Mac Edition|107
GeForce GTX 770M OpenGL Engine|107
GeForce 945M|107
GeForce GTX 675MX|107
PNY GeForce GTX 570 HD|106
GeForce GTX 745|106
GeForce MX230|106
GeForce GTX 670MX|106
GeForce 845M|106
Quadro K3100M OpenGL Engine|105
Quadro P2000|105
GeForce MX570 A|105
GeForce GTX 750 Ti|104
GeForce GTX 660 OEM|104
Quadro M600M|104
GeForce GTX 750|104
GeForce GTX 645|104
GP108|104
Quadro P520|104
Zotac GeForce GTX 460|103
Chip Model|103
GeForce GTX 670M|103
Quadro T1000|103
GeForce GTX 670M|103
GeForce GTX 650|103
Zotac GeForce GTX 750|102
GeForce GTX 460 OpenGL Engine|102
GeForce GTX 860M OpenGL Engine|102
Quadro 4000|102
Asus GeForce GTX 480|102
Zotac GeForce GTX 650 Ti|102
GeForce GT 755M|101
GF100 Board - 10220000|101
GeForce GTX 470M|101
GeForce GTX 570 Rev. 2|101
GeForce GTX 775M by iDopt Mac|101
GeForce GTX 765M by Nick[D]vB|101
GeForce GTX 570|101
GeForce GTX 645|101
GeForce GTX 550 Ti|100
GeForce GTX 760M|100
GeForce GT 1030 OpenGL Engine|100
GeForce GTX 650|100
Quadro P400|100
GeForce GTX 480|99
EVGA GeForce GTX 650|99
EVGA GeForce GTX 560|99
GeForce MX130|99
GeForce MX130|98
Asus GeForce GTX 460|98
Elitegroup GeForce GTX 460|98
Tesla V100-SXM2-32GB|98
GeForce GT 755M|98
GeForce GTX 760 Ti OpenGL Engine|98
Quadro P520|97
GeForce GT 755M Mac Edition|97
GeForce GTX 1060 5GB|97
Palit GeForce GTX 650 Ti|97
MSi GeForce GTX 460|96
GeForce GTX 650|96
Gigabyte GeForce GTX 580|96
Gigabyte GeForce GTX 460|96
GeForce GTX 745|96
EVGA GeForce GTX 550 Ti|96
GeForce GTX 465|96
GeForce GTX 460 SE|96
GeForce GTX 765M|96
GeForce GT 755M Mac Edition|96
Quadro M520|95
Quadro K620|95
T1000|95
GeForce GTX 745|95
Quadro K620|95
GeForce GT 755M|94
GeForce GTX 660 Ti OpenGL Engine|94
Quadro K3000M|94
Quadro K4000|94
Quadro K4000 OpenGL Engine|94
GeForce GTX 560|94
GeForce GTX 650 Ti OpenGL Engine|94
Zotac GeForce GTX 560|94
Asus GeForce GTX 560|93
GeForce GTX 650 Ti|93
GeForce GPU|92
GeForce GTX 460|92
MSi GeForce GTX 650 Ti|92
GeForce GTX 645|92
Gigabyte GeForce GTX 760|92
GeForce GTX 660M|92
GeForce GTS 450|92
GeForce GTX 765M|92
Quadro K2000D|92
Quadro K2000|91
GeForce GT 740|91
GeForce GTX 650|91
GRID M6-0B|91
HP Quadro K620|91
GeForce MX130|91
Quadro K3000M by ST3PHL3|91
Quadro 4000|90
GeForce MX230|90
Quadro K620|90
Quadro K2100M by Nick[D]vB|90
Quadro K3000M by nikey22|89
GeForce GT 650M OpenGL Engine|89
Quadro 4000|89
Quadro K3000M|88
GeForce GTX 660M|88
Quadro K6000|87
GeForce GT 755M Mac Edition|87
Palit GeForce GTX 650|87
Quadro P500|87
GeForce GTX 570M|86
Gainward GeForce GTX 460|86
GeForce GTX 950M|86
Quadro K2000D|86
GeForce GTX 650 Ti BOOST|86
Quadro K2100M|86
GeForce GTX 470|85
Quadro K2000|85
Quadro K2000|85
GeForce GT 750M Mac Edition|85
GeForce GTX 745|85
GRID K220Q|85
GeForce GTX 750 OpenGL Engine|85
Quadro 5000M|84
Quadro P400|84
GeForce GTS 450|84
GeForce GT 640 Rev. 2|84
GeForce GTX 660M Mac Edition|84
Quadro P400|84
Asus GeForce GTX 560 SE|84
PNY GeForce GTX 460|83
GeForce GT 640 Rev. 2|83
GeForce GTS 450 Rev. 2|83
GeForce GTS 450|83
GeForce GTS 450 Rev. 2|83
GeForce GTX 645|82
GeForce GPU|82
GeForce GTX 560M|82
Quadro K3000M|82
Quadro K2100M by nikey22|82
Gigabyte GeForce GTX 750|82
GeForce GT 740|82
GeForce GT 750M Mac Edition|82
GeForce GTX 765M OpenGL Engine|82
GeForce GTX 645 OpenGL Engine|82
Quadro K620|81
GeForce GTX 550 Ti OpenGL Engine|81
Quadro 4000M|81
PNY GeForce GTX 550 Ti|81
GeForce MX110|80
GeForce GTX 760M|80
MSi GeForce GTX 745|80
Quadro K2100M OpenGL Engine|80
Quadro K2000|80
Quadro 5000|80
Quadro K620 OpenGL Engine|80
MSi GeForce GTX 745|80
GeForce GT 755M OpenGL Engine|80
GeForce GTX 660M|79
Gigabyte GeForce GTX 550 Ti|79
MSi GeForce GTX 650|79
GeForce GTX 560M|79
Quadro P400|78
Quadro K2100M|78
Quadro K2100M|78
Zotac GeForce GTX 1050 Ti|78
Quadro 3000M|77
GeForce 940A|77
GeForce GTX 460M|77
GeForce GTX 550 Ti|77
GeForce GT 545|77
GeForce GT 650M Mac Edition|77
GeForce 940MX|76
GeForce GTX 650 OEM|76
GeForce GTX 550 Ti|76
GeForce GT 755M Mac Edition|76
GeForce GT 740 OpenGL Engine|75
Gainward GeForce GTX 550 Ti|75
Quadro K1200|75
GeForce GT 650M Mac Edition|75
EVGA GeForce GTX 650|75
GeForce GT 750M Mac Edition|74
GeForce GTX 745|73
GeForce GTX 555|73
GeForce GTX 650|73
Gainward GeForce GTS 450|73
GeForce GT 650M|73
GeForce GT 755M Mac Edition|73
GeForce GTX 460M|72
GeForce 930A|72
GeForce 930MX|72
GeForce 940MX|72
GeForce MX110|72
GeForce GT 750M Mac Edition|72
Quadro 2000|72
GeForce 845M|71
Quadro 2000D|71
GeForce GT 640 Rev. 2|71
GeForce MX110|71
GeForce GT 1010|71
GeForce GT 545|71
Quadro K1200 OpenGL Engine|71
GeForce 940MX|71
GeForce GTX 650 OpenGL Engine|71
EVGA GeForce GTX 650 Ti BOOST|71
Quadro K2100M|70
GeForce GT 1010|70
Quadro M500M|70
GeForce GT 650M Mac Edition|70
GeForce GT 640 OEM|70
Quadro K2000D|70
Quadro K2000 OpenGL Engine|70
GeForce GT 750M Mac Edition|70
GeForce GT 650M|69
Quadro K1100M by Nick[D]vB|69
GeForce GT 650M|69
GeForce 940M|69
GeForce GT 650M|69
Quadro 4000|69
GeForce GT 650M Mac Edition|69
GeForce GT 745M|69
Gainward GeForce GTX 560 Ti|68
GeForce 920MX|68
Quadro M520|68
GeForce GT 640|68
GeForce 840M|68
GeForce 9800 GTX / 9800 GTX+|68
GeForce GTX 770M by Nick[D]vB|67
Zotac GeForce GTX 650|67
Asus GeForce GTX 550 Ti|67
GeForce GT 750M|67
Quadro K3100M by nikey22|67
GeForce GT 750M|67
GeForce GTX 760 (192-bit) OpenGL Engine|67
HP Quadro 4000|67
Quadro K2000|67
GeForce GTS 450 Rev. 2|67
GeForce 930MX|67
GeForce GTX 660M Mac Edition|66
GeForce GTX 570|66
GeForce GT 750M|66
GeForce GT 650M Mac Edition|66
GeForce GT 650M OpenGL Engine|65
GeForce GTX 660M OpenGL Engine|65
GeForce 930M|65
Palit GeForce GTX 650|65
GeForce GTX 760M|65
GeForce GT 650M Mac Edition|65
GeForce 940M|65
GeForce GT 750M Mac Edition|64
GeForce 940M|64
GeForce GT 740|63
GeForce 930MX|63
Quadro 3000M|63
GeForce GT 730|63
Quadro K1100M|63
GeForce GT 750M|63
GeForce 840M|63
GeForce GT 640 OEM|63
GeForce 840M|63
GeForce GT 640 Rev. 2|62
GeForce GTS 450|62
Quadro 2000|62
GeForce GT 745M|62
GeForce GT 740|62
GeForce GT 640|62
Quadro 2000|62
GeForce GTX 660M Mac Edition|62
Quadro K1100M OpenGL Engine|62
Quadro K2000M|62
GeForce GTX 680MX OpenGL Engine|61
EVGA GeForce GT 730|61
Quadro 2000D|61
GeForce 840A|61
MSi GeForce GTX 660 Ti|61
Quadro K1100M|61
GeForce GT 645M|61
GeForce GTX 780M OpenGL Engine|61
HP GeForce GT 730|61
Quadro K5000M OpenGL Engine|61
EVGA GeForce GT 640|61
GeForce 920MX|60
Quadro M500M|60
Quadro K620M|60
GeForce 930M|60
GeForce 930A|60
GeForce GT 640 OEM|60
GeForce GT 640|60
Quadro 2000M|60
GeForce GT 640|60
GeForce GT 640M Mac Edition|60
GeForce GT 640M Mac Edition|60
GeForce GT 640M Mac Edition|59
GeForce GT 645M|59
GeForce 930M|59
Gigabyte GeForce GTX 650 Ti|59
GeForce GT 640 OEM|59
GeForce 830M|59
Asus GeForce GT 640|58
MSI GeForce GTX 1070|58
GeForce GT 555M|58
Quadro K2000M|58
Quadro K1100M|57
GeForce GT 650M Mac Edition|57
Quadro K2000M by Nick[D]vB|57
EVGA GeForce GTX 650 Ti|57
GeForce GT 640M|56
GeForce GT 650M Mac Edition|56
GeForce GT 445M|56
GeForce 830A|56
GeForce 9800 GT|56
Asus GeForce GTS 450|55
GeForce 830M|55
GeForce 920MX|55
Quadro 2000|55
EVGA GeForce GT 545|54
Quadro K2000M|54
GeForce GT 650M Mac Edition|54
GeForce GTX 280|54
GeForce GT 640|53
Quadro FX 2800M|53
Quadro 3000M OpenGL Engine|53
GeForce GT 740|53
null GeForce 920A|53
GeForce GT 640M Mac Edition|52
GeForce GT 635|52
Graphics Device|52
GeForce GT 640M|52
GeForce GTX 660M Mac Edition|52
Quadro 2000M|52
Quadro 5010M|52
GeForce GTS 250|52
GeForce GT 445M|51
GeForce GT 640M OpenGL Engine|51
GeForce GT 640M|50
EVGA GeForce GT 740|50
GeForce GT 640M Mac Edition|50
GeForce 730A|50
GeForce 920M|49
HP Quadro 2000|49
GeForce GT 730M|49
null GeForce 920A|49
GeForce GT 555M|49
GeForce GT 640M LE|49
GeForce GT 730M|49
GeForce GT 730M|48
GeForce GT 640M Mac Edition|48
Quadro K2000M OpenGL Engine|48
GeForce GT 640M LE|48
GeForce GT 740M|47
GeForce GTX 460M|47
GeForce GT 440|47
GeForce GT 440|46
GeForce GT 640M Mac Edition|46
Quadro P400|46
GeForce GT 730|46
Dell Quadro 2000M|45
GeForce GT 740M|45
GeForce GT 740M|45
GeForce GTS 450 Rev. 2|45
GeForce 920M|45
GeForce 920M|45
GeForce 910M|44
GeForce GTX 680M|44
GeForce GT 730|44
Quadro 2000M|44
GeForce GT 635|43
GeForce GT 720 OpenGL Engine|43
GeForce GT 635|43
Quadro K5200 OpenGL Engine|43
Zotac GeForce GTX 650|43
GeForce GT 440|43
GeForce GT 435M|42
GeForce GT 735M|42
Gainward GeForce GT 630|42
Quadro 1000M|42
GeForce 820M|41
GeForce GTX 680M OpenGL Engine|41
MSI GeForce GT 635|41
GeForce 820A|41
Tesla M10|41
Asus GeForce GT 440|40
Asus GeForce GT 630|40
GeForce GT 820M|40
GeForce 910M|40
GeForce GT 820M|40
GeForce GT 730|40
GeForce GT 550M|40
GeForce GT 430|40
GeForce GT 540M|39
Asus GeForce GT 720|39
GeForce GT 630|39
GeForce GT 530|39
GeForce GT 635M|39
GeForce GT 620M/630M/635M/640M LE|39
NVS 5400M|39
Quadro K600|39
Quadro K610M|39
Asus GeForce GT 730|39
GeForce GT 630|39
GeForce GT 440|39
GeForce GT 630M|38
GeForce 820M|38
Quadro K420|38
Quadro K610M|38
GeForce GT 625M|38
Quadro K1000M|38
NVS 5200M|38
GRID K1|38
Quadro K600|38
Quadro K420|38
GeForce GT 630|38
Quadro K600|37
Quadro 600|37
HP Quadro 600|37
Quadro K1000M|37
Quadro K610M|37
GRID K180Q|37
GRID K160Q|37
GeForce GT 635M|37
Gigabyte GeForce GT 440|37
GeForce 820M|37
GeForce GT 530|37
GeForce GT 540M|37
GeForce GT 630 OEM|37
Quadro K610M by Nick[D]vB|37
NVS 510|37
GeForce GT 630M|37
Quadro 1000M|37
GeForce GT 540M|37
GeForce GT 530|37
Quadro K1100M|37
Quadro K620M|37
Quadro 1000M|36
GeForce GT 730|36
GeForce 820M|36
GeForce GT 430|36
GRID K1|36
GeForce GT 525M|36
NVS 5200M|36
NVS 510|36
Zotac GeForce GT 430|36
Quadro K600|36
Asus GeForce GT 730|36
HP Quadro K4000|35
GeForce GT 755M Mac Edition|35
GeForce GT 630|35
NVS 5400M|35
NVS 5400M|35
GeForce GT 640 OpenGL Engine|35
GeForce GT 625M|35
GeForce GT 630|35
GeForce GT 430|35
Quadro K600 OpenGL Engine|35
Quadro K1000M|35
Zotac GeForce GT 630|35
Gigabyte GeForce GT 630|35
GRID K140Q vGPU|35
GeForce GT 710M|35
GeForce GT 620M|35
GeForce GT 720M|34
GeForce 710M|34
Quadro 1000M,|34
Quadro K510M|34
GeForce 9400 GT|34
Quadro K1000M|34
GeForce GT 635M|34
Quadro K420|34
GRID K180Q|34
Asus GeForce GT 430|34
Quadro K4100M|34
Gigabyte GeForce GT 730|34
GeForce GT 620M|34
GeForce GT 525M|34
Quadro K420|34
Dell NVS 5200M|34
GeForce 710A|34
GeForce GT 425M|33
GeForce GT 710B|33
GeForce GT 525M|33
Quadro 600|33
GeForce GT 620M|33
Quadro K600|33
Quadro 600|33
GeForce 610M/710M/810M/820M / GT 620M/625M/630M/720M|33
MSI GeForce GT 730|33
GeForce GT 710|33
GeForce GT 435M|33
NVS 510|33
Asus GeForce GT 710|33
NVS 510|32
GeForce 710M|32
GeForce GT 720M|32
GeForce GT 730A|32
GeForce GT 710M|32
GIGABYTE GeForce GTX 660|31
EVGA GeForce GT 710|31
GeForce GT 710|31
GeForce GT 710|31
GeForce GT 425M|31
GeForce GT 720|31
EVGA GeForce GT 710|31
Quadro K1000M by Nick[D]vB|31
Asus GeForce GT 710|31
GeForce GT 720|31
GeForce GT 420M|30
GeForce GT 710|30
null Graphics Device|30
GeForce GT 240|30
GeForce 810M|29
GeForce GT 720M|29
GeForce GT 710|29
Quadro 600|29
GeForce 810M|29
GeForce GT 420M|28
Quadro 410|28
GeForce GTX 660M|28
MSI GeForce GT 710|28
GeForce GT 720|28
GeForce GT 735M|27
GeForce GT 720|27
GeForce GT 720|27
GeForce GT 630 OpenGL Engine|27
Quadro 410|27
GeForce GT 330M|26
GeForce GT 420M|26
GeForce GT 430|26
GeForce 615|25
GeForce GTX 760A|25
Toshiba GeForce GT 525M|25
GeForce GT 520MX|25
GeForce GT 620|25
GeForce GT 625|25
GeForce GT 710|24
Quadro NVS 4200M|24
GeForce 840A|24
GeForce 610M|24
GeForce 800M|24
GeForce GT 420|24
GeForce 705M|23
GeForce GT 705|23
GeForce 800M|23
GeForce 610M|23
GeForce GT 620 OEM|23
GeForce GT 625|23
GeForce GT 420|23
Quadro NVS 4200M|23
GeForce GT 520M|22
NVS 4200M|22
GeForce GT 620 OEM|22
NVS 5200M|22
GeForce GT 620 OEM|22
GeForce GT 620|22
GeForce GT 705|21
GeForce GT 620|21
GeForce GT 630 Rev. 2|21
Quadro NVS 4200M|21
GeForce GT 520M|20
GTX 980M SLI|20
GeForce GT 620|20
GeForce GT 520M|20
GeForce GT 520|19
GeForce 410M|19
GeForce 730A|19
GeForce GT 520|19
GeForce GT 610|19
Asus GeForce GT 610|19
NVS 310|18
GeForce 410M|18
NVS 315|18
GeForce 605|18
GeForce GT 610|18
GeForce GT 520|17
GeForce MX550|17
NVS 4200M|17
NVS 315|17
NVS 310|17
GeForce 410M|17
Palit GeForce GTX 660|17
GeForce 605|17
NVS 310|17
GeForce GT 415M|17
Zotac GeForce GT 610|17
GeForce GTX 675M|17
GeForce GT 610|16
Quadro 4000M|16
PNY GeForce GT 610|16
GeForce GT 610|16
GeForce 510|15
MSi GeForce GT 610|15
GeForce GT 735M|15
GeForce GT 520|15
GeForce 510|15
GeForce GT 320M|14
GeForce 9600M GT|14
GeForce GTX 570M|14
Corporation D3D12 (NVIDIA GeForce RTX 3080 Ti)|13
GeForce 510|13
Quadro FX 1800M|12
Asus GeForce GT 520|12
GeForce GT 705|12
MSi GeForce GT 630|11
Quadro 3000M|10
Gigabyte GeForce GT 610|10
Pegatron GeForce GT 420|9
GeForce 210|8
GeForce 9300 / nForce 730i|7
NVS 3100M|7
GeForce 8600 GT|5
GeForce 8400 GS Rev. 3|4
GeForce 8400 GS|3
GeForce 9600 GT|2
GeForce GT 550M|-1
GeForce 8600 GTS|-1
GeForce GT 520MX|-1
EVGA GeForce GTX 460|-1
EVGA GeForce GTX 970|-1
GP106|-1
GRID P4-2B|-1
Gainward GeForce GTX 650|-1
GeForce 210|-1
GeForce 310|-1
GeForce 310M|-1
GeForce 315|-1
GeForce 315M|-1
GeForce 320M|-1
GeForce 405|-1
GeForce 610M|-1
GeForce 820A|-1
GeForce 8300 GS|-1
GeForce 8400 GS|-1
GeForce 8400 GS Rev. 2|-1
GeForce 8400 GS Rev. 3|-1
GeForce 8400M GS|-1
GeForce 8400M GT|-1
GeForce 8500 GT|-1
GeForce 8600 GT|-1
GeForce 8600M GS|-1
GeForce 8600M GT|-1
GeForce 8700M GT|-1
GeForce 8800 GT|-1
GeForce 8800 GTS|-1
GeForce 8800 GTS 512|-1
GeForce 8800 GTX|-1
GeForce 8800M GTX|-1
GeForce 9200M GE|-1
GeForce 9200M GS|-1
GeForce 9300 / nForce 730i|-1
GeForce 9300 GE|-1
GeForce 9300 GS|-1
GeForce 9300M GS|-1
GeForce 9400|-1
GeForce 9400M|-1
GeForce 9500 GT|-1
GeForce 9500M GS|-1
GeForce 9600 GS|-1
GeForce 9600 GSO|-1
GeForce 9600 GSO 512|-1
GeForce 9600 GT|-1
GeForce 9600M GS|-1
GeForce 9600M GT|-1
GeForce 9600M GT / GeForce GT 220M|-1
GeForce 9800 GT|-1
GeForce 9800 GTX+|-1
GeForce 9800 GTX/9800 GTX+|-1
GeForce 9800M GTS|-1
GeForce G 103M|-1
GeForce G 105M|-1
GeForce G105M|-1
GeForce G205M|-1
GeForce G210|-1
GeForce G210M|-1
GeForce GT 120|-1
GeForce GT 120M|-1
GeForce GT 130|-1
GeForce GT 130M|-1
GeForce GT 220|-1
GeForce GT 220M|-1
GeForce GT 230|-1
GeForce GT 230M|-1
GeForce GT 240|-1
GeForce GT 240M|-1
GeForce GT 240M|-1
GeForce GT 320|-1
GeForce GT 320M|-1
GeForce GT 325M|-1
GeForce GT 330|-1
GeForce GT 330M|-1
GeForce GT 335M|-1
GeForce GT 435M|-1
GeForce GT 520M|-1
GeForce GT 525M|-1
GeForce GT 555M/635M|-1
GeForce GTS 240|-1
GeForce GTS 250|-1
GeForce GTS 360M|-1
GeForce GTX 1180|-1
GeForce GTX 260|-1
GeForce GTX 260M|-1
GeForce GTX 275|-1
GeForce GTX 280|-1
GeForce GTX 285|-1
GeForce GTX 295|-1
GeForce GTX 560 SE|-1
GeForce GTX 750 v2|-1
GeForce RTX T10-16|-1
GeForce RTX T10-8|-1
Gigabyte GeForce GTX 1050 Ti|-1
ION|-1
MSI GeForce GT 710|-1
NVS 300|-1
NVS 3100M|-1
NVS 4200M|-1
NVS 5100M|-1
Palit GTX 680 JetStream|-1
Quadro FX 1700|-1
Quadro FX 1700M|-1
Quadro FX 1800|-1
Quadro FX 1800M|-1
Quadro FX 2700M|-1
Quadro FX 2800M|-1
Quadro FX 3600M|-1
Quadro FX 360M|-1
Quadro FX 370|-1
Quadro FX 3700|-1
Quadro FX 3700M|-1
Quadro FX 380 LP|-1
Quadro FX 3800|-1
Quadro FX 3800M|-1
Quadro FX 4600|-1
Quadro FX 4800|-1
Quadro FX 4800|-1
Quadro FX 5600|-1
Quadro FX 570M|-1
Quadro FX 580|-1
Quadro FX 770M|-1
Quadro FX 880M|-1
Quadro K1100M by Nick[D]vB|-1
Quadro K2000D|-1
Quadro K2000M|-1
Quadro K2100M by Nick[D]vB|-1
Quadro NVS 135M|-1
Quadro NVS 140M|-1
Quadro NVS 160M|-1
Quadro NVS 290|-1
Quadro NVS 295|-1
Quadro NVS 4200M|-1
Quadro P4000 OpenGL Engine|-1
Sony GeForce 410M|-1
Zotac GeForce GTX 780|-1
`;function i(){return o}},227508:function(e,t,r){"use strict";var o=r(88648);function i(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=Array(t);r<t;r++)o[r]=e[r];return o}t.Z=function(e,t){var r=!(arguments.length>2)||void 0===arguments[2]||arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=n.deps,c=void 0===a?[]:a,s=(0,o.useRef)(),l=(0,o.useRef)(e),G=(0,o.useCallback)(function(){u();s.current=window.setInterval(function(){l.current()},t)},[t].concat(i(c))),u=(0,o.useCallback)(function(){clearInterval(s.current)},[]);return(0,o.useEffect)(function(){return l.current=e,r&&G(),function(){return u()}},[l,t,r].concat(i(c))),{run:G,cancel:u}}},112907:function(e,t){"use strict";t.Z={default:{tension:170,friction:26},gentle:{tension:120,friction:14},wobbly:{tension:180,friction:12},stiff:{tension:210,friction:20},slow:{tension:280,friction:60},molasses:{tension:280,friction:120}}},948923:function(e,t,r){"use strict";r.d(t,{K:function(){return o}});let o=()=>({device_platform:"web",cookie_enabled:window.navigator.cookieEnabled,screen_width:window.screen.width,screen_height:window.screen.height,browser_language:window.navigator.language,browser_platform:window.navigator.platform,browser_name:window.navigator.appCodeName,browser_version:window.navigator.appVersion,browser_online:window.navigator.onLine,tz_name:Intl.DateTimeFormat().resolvedOptions().timeZone})},300752:function(e,t,r){"use strict";r.d(t,{C:function(){return l},i:function(){return s}});var o=Object.defineProperty,i=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))n.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))a.call(t,r)&&c(e,r,t[r]);return e},l=(e,t,r)=>new Promise((o,i)=>{var n=e=>{try{c(r.next(e))}catch(e){i(e)}},a=e=>{try{c(r.throw(e))}catch(e){i(e)}},c=e=>e.done?o(e.value):Promise.resolve(e.value).then(n,a);c((r=r.apply(e,t)).next())})},508417:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var o=r(401425),i=r(699975),n=r(692124);function a(e,t){(0,i.Z)(2,arguments);var r=(0,n.Z)(t);r%7==0&&(r-=7);var a=(0,o.Z)(e),c=a.getUTCDay(),s=r%7,l=((s+7)%7<1?7:0)+r-c;return a.setUTCDate(a.getUTCDate()+l),a}},843541:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var o=r(767674),i=r(886969),n=r(699975);function a(e){(0,n.Z)(1,arguments);var t=(0,o.Z)(e),r=new Date(0);return r.setUTCFullYear(t,0,4),r.setUTCHours(0,0,0,0),(0,i.Z)(r)}},749103:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var o=r(401425),i=r(699975);function n(e){(0,i.Z)(1,arguments);var t=(0,o.Z)(e),r=t.getFullYear(),n=t.getMonth(),a=new Date(0);return a.setFullYear(r,n+1,0),a.setHours(0,0,0,0),a.getDate()}},607453:function(e,t,r){"use strict";r.d(t,{x:function(){return u}});var o=r(874838),i=r(758698),n=r(569395),a=r(812523),c=r(669263),s=r(344137),l=r(46595),G=r(279658),u=function(e){(0,a.Z)(r,e);var t=(0,c.Z)(r);function r(){var e;(0,o.Z)(this,r);for(var i=arguments.length,a=Array(i),c=0;c<i;c++)a[c]=arguments[c];return e=t.call.apply(t,[this].concat(a)),(0,s.Z)((0,n.Z)(e),"priority",130),(0,s.Z)((0,n.Z)(e),"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"]),e}return(0,i.Z)(r,[{key:"parse",value:function(e,t){return"u"===t?(0,G.Db)(4,e):(0,G.Db)(t.length,e)}},{key:"set",value:function(e,t,r){return e.setUTCFullYear(r,0,1),e.setUTCHours(0,0,0,0),e}}]),r}(l._)},114837:function(e,t,r){var o=r(898865);e.exports=function(e){return function(t){return o(t,e)}}},680162:function(e,t,r){var o=r(237164),i=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;return o?void 0!==t[e]:i.call(t,e)}},19275:function(e){var t=/^(?:0|[1-9]\d*)$/;e.exports=function(e,r){var o=typeof e;return!!(r=null==r?9007199254740991:r)&&("number"==o||"symbol"!=o&&t.test(e))&&e>-1&&e%1==0&&e<r}},907027:function(e,t,r){e=r.nmd(e);var o=r(363751),i=t&&!t.nodeType&&t,n=i&&e&&!e.nodeType&&e,a=n&&n.exports===i&&o.process,c=function(){try{var e=n&&n.require&&n.require("util").types;if(e)return e;return a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=c},257675:function(e,t,r){var o=r(866674),i=r(437949);e.exports=function(e){return null!=e&&i(e.length)&&!o(e)}},248281:function(e,t,r){var o=r(564498),i=r(271277),n=r(907027),a=n&&n.isSet,c=a?i(a):o;e.exports=c},493288:function(e,t,r){var o=r(54850);function i(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw TypeError("Expected a function");var r=function(){var o=arguments,i=t?t.apply(this,o):o[0],n=r.cache;if(n.has(i))return n.get(i);var a=e.apply(this,o);return r.cache=n.set(i,a)||n,a};return r.cache=new(i.Cache||o),r}i.Cache=o,e.exports=i},738343:function(e,t,r){var o=r(486526),i=r(372264),n=r(371318),a=r(74690),c=r(681662),s=r(667005),l=r(986448);e.exports=function(e,t,r){return(r&&"number"!=typeof r&&a(e,t,r)&&(t=r=void 0),r=void 0===r?4294967295:r>>>0)?(e=l(e))&&("string"==typeof t||null!=t&&!c(t))&&!(t=o(t))&&n(e)?i(s(e),0,r):e.split(t,r):[]}},877639:function(e,t,r){var o=r(128231),i=r(960734);e.exports=function(e,t,r){var n=!0,a=!0;if("function"!=typeof e)throw TypeError("Expected a function");return i(r)&&(n="leading"in r?!!r.leading:n,a="trailing"in r?!!r.trailing:a),o(e,t,{leading:n,maxWait:t,trailing:a})}},173414:function(e,t){"use strict";var r=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function o(e,t){if(e.length!==t.length)return!1;for(var o,i,n=0;n<e.length;n++){;if(o=e[n],!(o===(i=t[n])||r(o)&&r(i)))return!1}return!0}t.Z=function(e,t){void 0===t&&(t=o);var r,i,n=[],a=!1;return function(){for(var o=[],c=0;c<arguments.length;c++)o[c]=arguments[c];return a&&r===this&&t(o,n)?i:(i=e.apply(this,o),a=!0,r=this,n=o,i)}}},51597:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DraggableCore",{enumerable:!0,get:function(){return G.default}}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=T(t);if(r&&r.has(e))return r.get(e);var o={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var a=i?Object.getOwnPropertyDescriptor(e,n):null;a&&(a.get||a.set)?Object.defineProperty(o,n,a):o[n]=e[n]}return o.default=e,r&&r.set(e,o),o}(r(88648)),i=d(r(201845)),n=d(r(309931)),a=d(r(135729)),c=r(704993),s=r(959107),l=r(671494),G=d(r(864837)),u=d(r(595361));function d(e){return e&&e.__esModule?e:{default:e}}function T(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(T=function(e){return e?r:t})(e)}function h(){return(h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function p(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class F extends o.Component{static getDerivedStateFromProps(e,t){let{position:r}=e,{prevPropsPosition:o}=t;return r&&(!o||r.x!==o.x||r.y!==o.y)?((0,u.default)("Draggable: getDerivedStateFromProps %j",{position:r,prevPropsPosition:o}),{x:r.x,y:r.y,prevPropsPosition:{...r}}):null}constructor(e){super(e),p(this,"onDragStart",(e,t)=>{if((0,u.default)("Draggable: onDragStart: %j",t),!1===this.props.onStart(e,(0,s.createDraggableData)(this,t)))return!1;this.setState({dragging:!0,dragged:!0})}),p(this,"onDrag",(e,t)=>{if(!this.state.dragging)return!1;(0,u.default)("Draggable: onDrag: %j",t);let r=(0,s.createDraggableData)(this,t),o={x:r.x,y:r.y,slackX:0,slackY:0};if(this.props.bounds){let{x:e,y:t}=o;o.x+=this.state.slackX,o.y+=this.state.slackY;let[i,n]=(0,s.getBoundPosition)(this,o.x,o.y);o.x=i,o.y=n,o.slackX=this.state.slackX+(e-o.x),o.slackY=this.state.slackY+(t-o.y),r.x=o.x,r.y=o.y,r.deltaX=o.x-this.state.x,r.deltaY=o.y-this.state.y}if(!1===this.props.onDrag(e,r))return!1;this.setState(o)}),p(this,"onDragStop",(e,t)=>{if(!this.state.dragging||!1===this.props.onStop(e,(0,s.createDraggableData)(this,t)))return!1;(0,u.default)("Draggable: onDragStop: %j",t);let r={dragging:!1,slackX:0,slackY:0};if(this.props.position){let{x:e,y:t}=this.props.position;r.x=e,r.y=t}this.setState(r)}),this.state={dragging:!1,dragged:!1,x:e.position?e.position.x:e.defaultPosition.x,y:e.position?e.position.y:e.defaultPosition.y,prevPropsPosition:{...e.position},slackX:0,slackY:0,isElementSVG:!1},e.position&&(e.onDrag||e.onStop)}componentDidMount(){void 0!==window.SVGElement&&this.findDOMNode() instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.setState({dragging:!1})}findDOMNode(){var e,t;return null!==(e=null===(t=this.props)||void 0===t||null===(t=t.nodeRef)||void 0===t?void 0:t.current)&&void 0!==e?e:n.default.findDOMNode(this)}render(){let{axis:e,bounds:t,children:r,defaultPosition:i,defaultClassName:n,defaultClassNameDragging:l,defaultClassNameDragged:u,position:d,positionOffset:T,scale:p,...F}=this.props,f={},g=null,X=!d||this.state.dragging,M=d||i,m={x:(0,s.canDragX)(this)&&X?this.state.x:M.x,y:(0,s.canDragY)(this)&&X?this.state.y:M.y};this.state.isElementSVG?g=(0,c.createSVGTransform)(m,T):f=(0,c.createCSSTransform)(m,T);let y=(0,a.default)(r.props.className||"",n,{[l]:this.state.dragging,[u]:this.state.dragged});return o.createElement(G.default,h({},F,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),o.cloneElement(o.Children.only(r),{className:y,style:{...r.props.style,...f},transform:g}))}}t.default=F,p(F,"displayName","Draggable"),p(F,"propTypes",{...G.default.propTypes,axis:i.default.oneOf(["both","x","y","none"]),bounds:i.default.oneOfType([i.default.shape({left:i.default.number,right:i.default.number,top:i.default.number,bottom:i.default.number}),i.default.string,i.default.oneOf([!1])]),defaultClassName:i.default.string,defaultClassNameDragging:i.default.string,defaultClassNameDragged:i.default.string,defaultPosition:i.default.shape({x:i.default.number,y:i.default.number}),positionOffset:i.default.shape({x:i.default.oneOfType([i.default.number,i.default.string]),y:i.default.oneOfType([i.default.number,i.default.string])}),position:i.default.shape({x:i.default.number,y:i.default.number}),className:l.dontSetMe,style:l.dontSetMe,transform:l.dontSetMe}),p(F,"defaultProps",{...G.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})},467145:function(e,t,r){var o=r(156628),i=/%[sdv%]/g,n=function(e){var t=1,r=arguments,o=r.length;return e.replace(i,function(e){if(t>=o)return e;var i=r[t];switch(t+=1,e){case"%%":return"%";case"%s":return String(i);case"%d":return Number(i);case"%v":return""}})},a=function(e,t,r){var o=[e+"="+(t.format instanceof Function?t.format(t.push?r:r[t.name]):t.format)];if(t.names)for(var i=0;i<t.names.length;i+=1){var a=t.names[i];t.name?o.push(r[t.name][a]):o.push(r[t.names[i]])}else o.push(r[t.name]);return n.apply(null,o)},c=["v","o","s","i","u","e","p","c","b","t","r","z","a"],s=["i","c","b","a"];e.exports=function(e,t){t=t||{},null==e.version&&(e.version=0),null==e.name&&(e.name=" "),e.media.forEach(function(e){null==e.payloads&&(e.payloads="")});var r=t.outerOrder||c,i=t.innerOrder||s,n=[];return r.forEach(function(t){o[t].forEach(function(r){r.name in e&&null!=e[r.name]?n.push(a(t,r,e)):r.push in e&&null!=e[r.push]&&e[r.push].forEach(function(e){n.push(a(t,r,e))})})}),e.media.forEach(function(e){n.push(a("m",o.m[0],e)),i.forEach(function(t){o[t].forEach(function(r){r.name in e&&null!=e[r.name]?n.push(a(t,r,e)):r.push in e&&null!=e[r.push]&&e[r.push].forEach(function(e){n.push(a(t,r,e))})})})}),n.join("\r\n")+"\r\n"}},173211:function(e,t,r){"use strict";var o=r(703921);e.exports=function(e){if(!o(e))return!1;try{if(!e.constructor)return!1;return e.constructor.prototype===e}catch(e){return!1}}},248795:function(e,t,r){"use strict";r.d(t,{Qs:function(){return d},ZP:function(){return u},bR:function(){return l},g2:function(){return G},rl:function(){return T},v8:function(){return s},xn:function(){return a},z3:function(){return n}});function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=Array(t);r<t;r++)o[r]=e[r];return o}function i(e,t,r){for(var o=arguments.length,i=Array(o>3?o-3:0),n=3;n<o;n++)i[n-3]=arguments[n];var a=t.call.apply(t,[e].concat(i));if(!!r&&"function"==typeof r)a&&a.then?a.then(function(){for(var t=arguments.length,o=Array(t),i=0;i<t;i++)o[i]=arguments[i];r.call.apply(r,[e].concat(o))}):r.call.apply(r,[e].concat(i))}function n(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{pre:null,next:null};return!this.__hooks&&(this.__hooks={}),this.__hooks[e]||(this.__hooks[e]=null),(function(){var n=arguments,a=this;if(r.pre)try{(c=r.pre).call.apply(c,[this].concat(Array.prototype.slice.call(arguments)))}catch(t){throw t.message="[pluginName: ".concat(this.pluginName,":").concat(e,":pre error] >> ").concat(t.message),t}if(this.__hooks&&this.__hooks[e])try{var c,s,l=(s=this.__hooks[e]).call.apply(s,[this,this].concat(Array.prototype.slice.call(arguments)));l?l.then?l.then(function(e){if(!1!==e){var c;i.apply(void 0,[a,t,r.next].concat((c=n,function(e){if(Array.isArray(e))return o(e)}(c)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(c)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}}(c)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())))}}).catch(function(e){throw e}):i.apply(void 0,[this,t,r.next].concat(Array.prototype.slice.call(arguments))):void 0===l&&i.apply(void 0,[this,t,r.next].concat(Array.prototype.slice.call(arguments)))}catch(t){throw t.message="[pluginName: ".concat(this.pluginName,":").concat(e,"] >> ").concat(t.message),t}else i.apply(void 0,[this,t,r.next].concat(Array.prototype.slice.call(arguments)))}).bind(this)}function a(e,t){var r=this.__hooks;return r?!!r.hasOwnProperty(e)&&(r&&(r[e]=t),!0):void 0}function c(e,t){var r=this.__hooks;if(!r||!Array.isArray(r[e]))return -1;for(var o=r[e],i=0;i<o.length;i++)if(o[i]===t)return i;return -1}function s(e,t){var r=this.__hooks;if(!!r)if(Array.isArray(r[e])){var o=r[e],i=c.call(this,e,t);-1!==i&&o.splice(i,1)}else r[e]&&(r[e]=null)}function l(e){if(!!this.plugins&&!!this.plugins[e.toLowerCase()]){for(var t=this.plugins[e.toLowerCase()],r=arguments.length,o=Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return t.useHooks&&t.useHooks.apply(t,o)}}function G(e){if(!!this.plugins&&!!this.plugins[e.toLowerCase()]){var t=this.plugins[e.toLowerCase()];if(t){for(var r=arguments.length,o=Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return t.removeHooks&&t.removeHooks.apply(t,o)}}}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];e.__hooks={},t&&t.map(function(t){e.__hooks[t]=null}),Object.defineProperty(e,"hooks",{get:function(){return e.__hooks&&Object.keys(e.__hooks).map(function(t){if(e.__hooks[t])return t})}})}function d(e){e.__hooks=null}function T(e,t,r){for(var o=arguments.length,i=Array(o>3?o-3:0),n=3;n<o;n++)i[n-3]=arguments[n];if(!e.__hooks||!e.__hooks[t])return r.call.apply(r,[e,e].concat(i));var a,c=(a=e.__hooks[t]).call.apply(a,[e,e].concat(i));if(c&&c.then)c.then(function(t){return!1===t?null:r.call.apply(r,[e,e].concat(i))}).catch(function(e){});else if(!1!==c)return r.call.apply(r,[e,e].concat(i))}},769274:function(e,t,r){"use strict";r.r(t),r.d(t,{useCacheRoute:function(){return s}});var o=r(520739),i=r(878389);r(268917);var n=r(88648),a=r(381185);r(563097);let c=(e,t)=>{if(!e)return!0;for(let r=0;r<e.matchPatterns.length;r++)if(e.matchPatterns[r]!==t.matchPatterns[r])return!0;return!1},s=e=>{let{beforeRouteUpdate:t,renderRoutes:r,store:s}=(0,a.useRouteCacheManager)(),l=(0,n.useRef)(null),G=c(l.current,e),{element:u}=e;if(t&&s){let n;G&&t({from:l.current,to:e,store:s});let a=[],c=!1;s.forEach(t=>{let r=(0,i._)((0,o._)({},t),{isActive:!1});a.push(r),e.as===t.as&&(r.isActive=!0,r.element=e.element,n=r,c=!0)}),!c&&(n=(0,i._)((0,o._)({},e),{cacheKey:e.as,key:e.as,isActive:!0}),a.push(n)),"function"==typeof r&&(u=r(a,n))}return G&&(l.current=e),u}},793884:function(e,t,r){"use strict";r.d(t,{U:function(){return a}}),r(954372),r(826893),r(268917),r(874386);var o=r(798435),i=r(162984),n=r(336669);function a(){return function(e){(0,n.Vn)(e,function(e,t,r){let n=-1,a=!0,c=!1;if(r&&"number"==typeof t&&"paragraph"===e.type){let i=e.children;for(;++n<i.length;){let e=i[n];if("mdxJsxTextElement"===e.type||"mdxTextExpression"===e.type)c=!0;else if("text"===e.type&&""===(0,o.g)(e.value,{style:"html",trim:!0}));else{a=!1;break}}if(a&&c){n=-1;let e=[];for(;++n<i.length;){let t=i[n];"mdxJsxTextElement"===t.type&&(t.type="mdxJsxFlowElement"),"mdxTextExpression"===t.type&&(t.type="mdxFlowExpression"),"text"===t.type&&/^[\t\r\n ]+$/.test(String(t.value))||e.push(t)}return r.children.splice(t,1,...e),t}}("mdxJsxFlowElement"===e.type||"mdxJsxTextElement"===e.type)&&((e.data||(e.data={}))._mdxExplicitJsx=!0),("mdxFlowExpression"===e.type||"mdxTextExpression"===e.type||"mdxjsEsm"===e.type)&&e.data&&e.data.estree&&(0,i._)(e.data.estree,{enter(e){"JSXElement"===e.type&&((e.data||(e.data={}))._mdxExplicitJsx=!0)}})})}}},126757:function(e,t,r){"use strict";r.d(t,{n:function(){return i}});var o=r(827257);function i(e,t){let r;let i=e.data&&e.data.estree,n=i&&i.comments||[];i&&(t.comments.push(...n),(0,o.S)(i,i.comments),r=i.body[0]&&"ExpressionStatement"===i.body[0].type&&i.body[0].expression||void 0),!r&&(r={type:"JSXEmptyExpression"},t.patch(e,r));let a={type:"JSXExpressionContainer",expression:r};return t.inherit(e,a),a}},551155:function(e,t,r){"use strict";function o(e,t){let r=t.value?t.value+"\n":"",o={};t.lang&&(o.className=["language-"+t.lang]);let i={type:"element",tagName:"code",properties:o,children:[{type:"text",value:r}]};return t.meta&&(i.data={meta:t.meta}),e.patch(t,i),i={type:"element",tagName:"pre",properties:{},children:[i=e.applyData(t,i)]},e.patch(t,i),i}r.d(t,{T:function(){return o}})},139533:function(e,t,r){"use strict";r.d(t,{o:function(){return i}});var o=r(288417);function i(e,t){let r=(0,o.B)(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&1===e.children.length&&"text"===e.children[0].type&&(r===e.url||"mailto:"+r===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}},801001:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var o=r("686594"),i=r("455456"),n=r("724810"),a=r("980588");let c={};function s(e){var t;let r=e||c,s=this.data(),l=s.micromarkExtensions||(s.micromarkExtensions=[]),G=s.fromMarkdownExtensions||(s.fromMarkdownExtensions=[]),u=s.toMarkdownExtensions||(s.toMarkdownExtensions=[]);l.push((0,a.H)(r)),G.push([(0,o.T)(),(0,i.X)(),(0,n.V)()]),u.push((t=r,{extensions:[(0,o.n)(),(0,i.q)(t),(0,n.U)()]}))}},606358:function(e,t,r){"use strict";r.d(t,{a:function(){return o}});let o=function(e){let t=this.constructor.prototype,r=t[e],o=function(){return r.apply(o,arguments)};return Object.setPrototypeOf(o,t),o}},399563:function(e,t,r){"use strict";function o(e,t){if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[r,o]of e)if(!Object.is(o,t.get(r)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let r of e)if(!t.has(r))return!1;return!0}let r=Object.keys(e);if(r.length!==Object.keys(t).length)return!1;for(let o=0;o<r.length;o++)if(!Object.prototype.hasOwnProperty.call(t,r[o])||!Object.is(e[r[o]],t[r[o]]))return!1;return!0}r.d(t,{Z:function(){return o}})}}]);