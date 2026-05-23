/*! For license information please see 47660.ac78089c.js.LICENSE.txt */
!function(e,n){"object"==typeof module&&"object"==typeof module.exports?n():"function"==typeof define&&define.amd?define([],n):(e="undefined"!=typeof globalThis?globalThis:e||self)&&n()}(this,function(){"use strict";"object"==typeof window&&(window.openRedirect={version:"1.2.17",webpackPluginVersion:"3.4.19",reportOnly:!1})}),!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).xss={})}(this,function(e){"use strict";var n=function(){return(n=Object.assign||function(e){for(var n,o=1,a=arguments.length;o<a;o++)for(var t in n=arguments[o])Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e}).apply(this,arguments)};function o(e,n,o){if(o||2==arguments.length)for(var a,t=0,r=n.length;t<r;t++)!a&&t in n||(a||(a=Array.prototype.slice.call(n,0,t)),a[t]=n[t]);return e.concat(a||Array.prototype.slice.call(n))}var a=/[^a-zA-Z0-9\\_:.-]/gim,t=/</g,r=/>/g,i=/&#([a-zA-Z0-9]*);?/gim,d=/&quot;/g,s=/&colon;?/gim,R=/&newline;?/gim,l=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi,c=/u\s*r\s*l\s*\(.*/gi,u=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,h=/"/g,p=function(e){return e.replace(t,"&lt;").replace(r,"&gt;")},f={indexOf:function(e,n){var o,a;for(o=0,a=e.length;o<a;o++)if(e[o]===n)return o;return -1},forEach:function(e,n,o){var a,t;for(a=0,t=e.length;a<t;a++)n.call(o,e[a],a,e)},some:function(e,n,o){var a,t;for(a=0,t=e.length;a<t;a++)if(n.call(o,e[a],a,e))return!0;return!1},trim:function(e){return e.replace(/(^\s*)|(\s*$)/g,"")},includes:function(e,n){if("string"==typeof e)return -1!==e.indexOf(n);for(var o=0;o<e.length;o++)if(e[o]===n)return!0;return!1},spaceIndex:function(e){var n=/\s|\n|\t/.exec(e);return n?n.index:-1},uniq:function(e){for(var n={},o=[],a=0;a<e.length;a++)n[e[a]]||(o.push(e[a]),n[e[a]]=!0);return o},from:function(e){for(var n=[],o=0;o<e.length;o++)n.push(e[o]);return n},keys:function(e){var n=[];for(var o in e)n.push(o);return n}};function M(e){return null==e}function D(e){var n;return'"'===(n=e)[0]&&'"'===n[n.length-1]||"'"===n[0]&&"'"===n[n.length-1]?e.substr(1,e.length-2):e}function g(e){var n,o,a,t,r,i,d,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",R="",l=0;for(e=function(e){e=e.replace(/rn/g,"n");for(var n="",o=0;o<e.length;o++){var a=e.charCodeAt(o);a<128?n+=String.fromCharCode(a):a>127&&a<2048?n+=String.fromCharCode(a>>6|192)+String.fromCharCode(63&a|128):n+=String.fromCharCode(a>>12|224)+String.fromCharCode(a>>6&63|128)+String.fromCharCode(63&a|128)}return n}(e);l<e.length;)t=(n=e.charCodeAt(l++))>>2,r=(3&n)<<4|(o=e.charCodeAt(l++))>>4,i=(15&o)<<2|(a=e.charCodeAt(l++))>>6,d=63&a,isNaN(o)?i=d=64:isNaN(a)&&(d=64),R=R+s.charAt(t)+s.charAt(r)+s.charAt(i)+s.charAt(d);return R}function H(e){var n,o,a,t,r,i,d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",s="",R=0;for(e=e.replace(/[^A-Za-z0-9+/=]/g,"");R<e.length;)n=d.indexOf(e.charAt(R++))<<2|(t=d.indexOf(e.charAt(R++)))>>4,o=(15&t)<<4|(r=d.indexOf(e.charAt(R++)))>>2,a=(3&r)<<6|(i=d.indexOf(e.charAt(R++))),s+=String.fromCharCode(n),64!==r&&(s+=String.fromCharCode(o)),64!==i&&(s+=String.fromCharCode(a));return function(e){for(var n="",o=0,a=0,t=0,r=0;o<e.length;)(a=e.charCodeAt(o))<128?(n+=String.fromCharCode(a),o++):a>191&&a<224?(n+=String.fromCharCode((31&a)<<6|63&(r=e.charCodeAt(o+1))),o+=2):(r=e.charCodeAt(o+1),n+=String.fromCharCode((15&a)<<12|(63&r)<<6|63&(t=e.charCodeAt(o+2))),o+=3);return n}(s)}function m(e,n,o){var a="",t=0,r=!1,i=!1,d=0,s=e.length,R="",l="";e:for(d=0;d<s;d++){var c=e.charAt(d);if(!1===r){if("<"===c){r=d;continue}}else if(!1===i){if("<"===c){a+=o(e.slice(t,d)),r=d,t=d;continue}if(">"===c||d===s-1){a+=o(e.slice(t,r)),R=function(e){var n,o=f.spaceIndex(e);return n=-1===o?e.slice(1,-1):e.slice(1,o+1),"/"===(n=f.trim(n).toLowerCase()).slice(0,1)&&(n=n.slice(1)),"/"===n.slice(-1)&&(n=n.slice(0,-1)),n}(l=e.slice(r,d+1)),a+=n(r,a.length,R,l,"</"===l.slice(0,2)),t=d+1,r=!1;continue}if('"'===c||"'"===c)for(var u=1,h=e.charAt(d-u);""===h.trim()||"="===h;){if("="===h){i=c;continue e}h=e.charAt(d-++u)}}else if(c===i){i=!1;continue}}return t<s&&(a+=o(e.substr(t))),a}function y(e,n){var o=0,t=0,r=[],i=!1,d=e.length;function s(e,o){if(!((e=(e=f.trim(e)).replace(a,"").toLowerCase()).length<1)){var t=n(e,o||"");t&&r.push(t)}}for(var R=0;R<d;R++){var l=e.charAt(R),c=void 0;if(!1!==i||"="!==l){if(!1===i||R!==t){if(/\s|\n|\t/.test(l)){if(e=e.replace(/\s|\n|\t/g," "),!1===i){if(-1===(c=function(e,n){for(;n<e.length;n++){var o=e[n];if(" "!==o)return"="===o?n:-1}return -1}(e,R))){s(f.trim(e.slice(o,R))),i=!1,o=R+1;continue}R=c-1;continue}if(-1===(c=function(e,n){for(;n>0;n--){var o=e[n];if(" "!==o)return"="===o?n:-1}return -1}(e,R-1))){s(i,D(f.trim(e.slice(o,R)))),i=!1,o=R+1;continue}}}else{if(-1===(c=e.indexOf(l,R+1)))break;s(i,f.trim(e.slice(t+1,c))),i=!1,o=(R=c)+1}}else i=e.slice(o,R),o=R+1,t='"'===e.charAt(o)||"'"===e.charAt(o)?o:function(e,n){for(;n<e.length;n++){var o=e[n];if(" "!==o)return"'"===o||'"'===o?n:-1}return -1}(e,R+1)}return o<e.length&&(!1===i?s(e.slice(o)):s(i,D(f.trim(e.slice(o))))),f.trim(r.join(" "))}function X(e,n,o){if(o=function(e){return e=function(e){for(var n="",o=0,a=e.length;o<a;o++)n+=32>e.charCodeAt(o)?" ":e.charAt(o);return f.trim(n)}(e=(e=(e=e.replace(d,'"')).replace(i,function(e,n){return"x"===n[0]||"X"===n[0]?String.fromCharCode(parseInt(n.substr(1),16)):String.fromCharCode(parseInt(n,10))})).replace(s,":").replace(R," "))}(o),"href"===n||"src"===n){if("#"===(o=f.trim(o)))return"#";if("http://"!==o.substr(0,7)&&"https://"!==o.substr(0,8)&&"mailto:"!==o.substr(0,7)&&"tel:"!==o.substr(0,4)&&"data:image/"!==o.substr(0,11)&&"ftp://"!==o.substr(0,6)&&"./"!==o.substr(0,2)&&"../"!==o.substr(0,3)&&"#"!==o[0]&&"/"!==o[0])return""}else if("background"===n){if(l.lastIndex=0,l.test(o))return""}else if("style"===n&&(u.lastIndex=0,u.test(o)||(c.lastIndex=0,c.test(o)&&(l.lastIndex=0,l.test(o)))))return"";return o=function(e){return e=p(e=e.replace(h,"&quot;"))}(o)}var v=function(e){return"string"==typeof e?e.replace(/'/g,'"').replace('=""',"").replace(/\s+/g,"").toLowerCase():""},S=function(){function e(e){var n=function(e){var n={};for(var o in e)n[o]=e[o];return n}(e||{});n.stripIgnoreTag&&(n.onIgnoreTag,n.onIgnoreTag=function(){return""}),n.whiteList={},n.onTag=function(){},n.onTagAttr=function(){},n.onIgnoreTag=function(){},n.onIgnoreTagAttr=function(){},n.safeAttrValue=X,n.escapeHtml=p,this.options=Object.assign(n,e)}return e.prototype.process=function(e){if(!(e=(e=e||"").toString()))return"";var n,o,a,t,r,i,d=this.options,s=d.whiteList,R=d.onTag,l=d.onIgnoreTag,c=d.onTagAttr,u=d.onIgnoreTagAttr,h=d.safeAttrValue,p=d.escapeHtml;d.stripBlankChar&&(e=(n=(n=e.split("")).filter(function(e){var n=e.charCodeAt(0);return!(127===n||n<=31&&10!==n&&13!==n)})).join("")),d.allowCommentTag||(e=function(e){for(var n="",o=0;o<e.length;){var a=e.indexOf("\x3c!--",o);if(-1===a){n+=e.slice(o);break}n+=e.slice(o,a);var t=e.indexOf("--\x3e",a);if(-1===t)break;o=t+3}return n}(e));var M=!1;d.stripIgnoreTagBody&&(o=d.stripIgnoreTagBody,"function"!=typeof(a=l)&&(a=function(){}),t=!Array.isArray(o),r=[],i=!1,l=(M={onIgnoreTag:function(e,n,d){var s;if(s=e,t||-1!==f.indexOf(o,s)){if(d.isClosing){var R="[/removed]",l=d.position+R.length;return r.push([!1!==i?i:d.position,l]),i=!1,R}return i||(i=d.position),"[removed]"}return a(e,n,d)},remove:function(e){var n="",o=0;return f.forEach(r,function(a){n+=e.slice(o,a[0]),o=a[1]}),n+=e.slice(o)}}).onIgnoreTag);var D=m(e,function(e,n,o,a,t){var r={sourcePosition:e,position:n,isClosing:t,isWhite:Object.prototype.hasOwnProperty.call(s,o)},i=R(o,a,r);if(null!=i)return i;if(r.isWhite){if(r.isClosing)return"</".concat(o,">");var d=function(e){var n=f.spaceIndex(e);if(-1===n)return{html:"",closing:"/"===e[e.length-2]};var o="/"===(e=f.trim(e.slice(n+1,-1)))[e.length-1];return o&&(e=f.trim(e.slice(0,-1))),{html:e,closing:o}}(a),M=s[o],D=y(d.html,function(e,n){var a=-1!==f.indexOf(M,e),t=c(o,e,n,a);return null==t?a?(n=h(o,e,n,null))?"".concat(e,'="').concat(n,'"'):e:null==(t=u(o,e,n,a))?void 0:t:t});return a="<".concat(o),D&&(a+=" ".concat(D)),d.closing&&(a+=" /"),a+=">"}return null==(i=l(o,a,r))?p(a):i},p);return M&&(D=M.remove(D)),D},e}(),P=Function("\nvar _checkXSS = function (it) {\n  return it && it.Math == Math && it;\n};\nreturn _checkXSS(typeof globalThis === 'object' && globalThis) ||\n_checkXSS(typeof window === 'object' && window) ||\n_checkXSS(typeof self === 'object' && self) ||\n_checkXSS(typeof global === 'object' && global) ||\nFunction('return this')();\n")(),T=new(function(){function e(){var e=this;this.batchData=[],this.uniqKeys=new Set,this.timeout=2e3,this.lock=!1,this.getSlardarBid=function(){var n,o,a="douyin_web";if(!f.includes(a,"bid"))return a;if(e.config&&e.config.bid)return e.config.bid;if(P&&P._xssBid)return P._xssBid;if(P&&P.slardar&&"function"==typeof P.slardar.config){var t=(P.slardar.config()||{}).bid;if(t)return t}if(P&&P.Slardar&&"function"==typeof P.Slardar.config){var r=(P.Slardar.config()||{}).bid;if(r)return r}return(null===(o=null===(n=null==P?void 0:P.Slardar)||void 0===n?void 0:n._baseParams)||void 0===o?void 0:o.bid)||"argus"},this.getConfigRegion=function(){var n;return f.includes("cn","region")?e.config&&e.config.region?e.config.region:((null===(n=null==P?void 0:P.gfdatav1)||void 0===n?void 0:n.region)||"cn").toLowerCase():"cn"},this.gerReportUrl=function(){var n={cn:H("aHR0cHM6Ly9tb24uemlqaWVhcGkuY29tL21vbml0b3JfYnJvd3Nlci9jb2xsZWN0L2JhdGNoL3NlY3VyaXR5Lz9iaWQ9"),boe:H("aHR0cHM6Ly9tb24uemlqaWVhcGkuY29tL21vbml0b3JfYnJvd3Nlci9jb2xsZWN0L2JhdGNoL3NlY3VyaXR5Lz9iaWQ9"),ttp:H("aHR0cHM6Ly9tb24udXMudGlrdG9rdi5jb20vbW9uaXRvcl9icm93c2VyL2NvbGxlY3QvYmF0Y2gvc2VjdXJpdHkvP2JpZD0="),va:H("aHR0cHM6Ly9tb24tdmEuYnl0ZW92ZXJzZWEuY29tL21vbml0b3JfYnJvd3Nlci9jb2xsZWN0L2JhdGNoL3NlY3VyaXR5Lz9iaWQ9"),maliva:H("aHR0cHM6Ly9tb24tdmEuYnl0ZW92ZXJzZWEuY29tL21vbml0b3JfYnJvd3Nlci9jb2xsZWN0L2JhdGNoL3NlY3VyaXR5Lz9iaWQ9"),sg:H("aHR0cHM6Ly9tb24tdmEuYnl0ZW92ZXJzZWEuY29tL21vbml0b3JfYnJvd3Nlci9jb2xsZWN0L2JhdGNoL3NlY3VyaXR5Lz9iaWQ9"),boei18n:H("aHR0cHM6Ly9tb24tdmEuYnl0ZW92ZXJzZWEuY29tL21vbml0b3JfYnJvd3Nlci9jb2xsZWN0L2JhdGNoL3NlY3VyaXR5Lz9iaWQ9")}[e.getConfigRegion()];if(n)return n+e.getSlardarBid()}}return e.prototype.setConfig=function(e){this.config=e},e.prototype.upload=function(){var e=this,n=this.gerReportUrl();!this.lock&&n&&0!==this.batchData.length&&(this.lock=!0,setTimeout(function(){var o=e.batchData.slice(0,100);e.batchData=e.batchData.slice(100),P.fetch(n,{method:"post",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}}).catch(function(e){}),e.lock=!1,e.upload()},this.timeout))},e.prototype.generateKey=function(e){return e.collectKey?[e.collectMode,e.collectKey].join("___"):""},e.prototype.push=function(e){this.batchData.push(e),this.upload()},e.prototype.report=function(e){var n=this.generateKey(e);if(P.fetch&&e.collectKey){var o="object"==typeof window?window.location.href:"SSR";e.documentUrl=o;var a={age:Math.floor(Date.now()),type:"xss",url:o,body:e,"user-agent":""};"enforce"===e.disposition&&"SSR"!==o||(a.url=n),"SSR"===o&&(a.url="SSR___".concat(a.url),a.body.ssr=!0),this.push(a)}},e}()),b=function(e){for(var n=0,o=function(o){Array.isArray(e[o])?0===e[o].length?delete e[o]:(e[o]=f.from(f.uniq(e[o])),n+=e[o].length):0===f.keys(e[o]).length?delete e[o]:f.keys(e[o]).forEach(function(a){e[o][a]=f.from(f.uniq(e[o][a])),n+=e[o][a].length})},a=0,t=f.keys(e);a<t.length;a++)o(t[a]);return{count:n,ret:e}};function G(e,n){return T.setConfig(n),new S(n).process(e)}function w(e){var n,o=(n=/\s|\n|\t/.exec(e))?n.index:-1;if(-1===o)return{html:"",closing:"/"===e[e.length-2]};var a="/"===(e=e.slice(o+1,-1).trim())[e.length-1];return a&&(e=e.slice(0,-1).trim()),{html:e,closing:a}}var _=function(e){return -1===(e=(e=(e=(e=e.replace(/&colon;/gi,":")).replace(/&tab;/gi,"")).replace(/&newline;/gi,"")).replace(/(\t|\n|\r)/g,"")).indexOf("&#")?e.trim().toLowerCase():e.trim().replace(/&#(?:(x)([0-9a-f]+)|([0-9]+));?/gi,function(e,n,o,a){return String.fromCharCode(n?parseInt(o,16):parseInt(a))}).replace(/(\t|\n|\r)/g,"").toLowerCase()};function A(e,n){if(void 0===e&&(e=""),"string"!=typeof e)return!0;if(e=_(e),f.includes(e,"base64")&&!function(e){if(""===e||""===e.trim())return!0;try{return!f.includes(e,"data:text/html;base64")}catch(e){return!0}}(e))return n&&n("data:text/html;base64"),!1;var o=["expression(","behavior:","view-source:"];if(f.some(o,function(n){return -1!==e.indexOf(n)}))return f.forEach(o,function(o){-1!==e.indexOf(o)&&n&&n(o)}),!1;var a=["data:application","data:javascript","data:text/html","data:texthtml"];if(f.some(a,function(n){return -1!==e.indexOf(n)}))return f.forEach(a,function(o){-1!==e.indexOf(o)&&n&&n(o)}),!1;if(e.indexOf("javascript:")>0)return n&&n("javascript:"),!1;if(/^javascript:/i.test(e)){var t=e.slice(11).replace(/\s/g,"").trim();return!!f.some(["void","void(0)","void0","false","undefined",";"],function(e){return e===t})||(n&&n("javascript:"),!1)}return!0}var E=function(e,n){var o,a,t="<%= isSaveValidUrl =>";if("string"!=typeof e||(a=Number("<%= urlLimit =>"),void 0!==o&&(a=o),"NaN"!==e.toString()&&-1!==a&&e.length>=a)||A(e,n))return e;try{if(!0===(t=JSON.parse(t))||"true"===t){var r=new URL(e);return r.origin+r.pathname}}catch(e){}return"#"};function V(e,n,a){if(void 0===e&&(e=""),void 0===n&&(n=[]),"string"!=typeof e)return!0;if(!A(e=_(e)))return!1;var t,r={url:(t=e.match(/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/)||[])[0],scheme:t[1],slash:t[2],host:t[3],port:t[4],path:t[5],query:t[6],hash:t[7]},i=r.scheme,d=r.host;return a?!!a(e):!(!i||!d)&&(!f.includes(["http","https","file"],i)||("object"==typeof window&&window&&(n=o(o([],n,!0),[location.host],!1)),f.some(n,function(e){return!!(e instanceof RegExp&&e.test(d))||e===d})))}var L={a:["target","title","spellcheck","rel"],canvas:[],abbr:["title"],address:[],area:["shape","coords","alt"],article:[],aside:[],audio:["autoplay","controls","loop","preload"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:["dir"],dl:[],dt:[],em:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["alt","title","width","height","decoding"],ins:["datetime"],li:[],mark:[],nav:[],ol:["start"],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],sup:[],delete:[],form:[],strong:[],mask:["maskunits","x","y","width","height","fill"],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],wbr:[],video:["autoplay","controls","loop","preload","height","width"],svg:["viewBox","version","xmlns","fill","width","height","stroke","stroke-width","style"],path:["d","fill","opacity","stroke","p-id","fill-rule","clip-rule","stroke-width","stroke-linecap","stroke-linejoin","fill-opacity","mask"],rect:["x","y","width","height","fill","stroke","rx"],g:[]},x={collect:null,initCollect:function(){this.collect={whiteList:{},filterProtocol:[]}},removeCollect:function(){var e=b(this.collect),n=e.count,o=e.ret;return this.collect=null,{collectKey:0===n?null:JSON.stringify(o),collectMode:"white"}},onIgnoreTagAttr:function(e,n,a){return e&&f.indexOf(["href","src"],n)>-1?x.domainWhiteList&&Array.isArray(x.domainWhiteList)&&x.domainWhiteList.length>0&&!V(a,o([],x.domainWhiteList,!0))?"":"".concat(n,'="').concat(E(a,function(e){var n;null===(n=x.collect)||void 0===n||n.filterProtocol.push(e)}),'"'):e&&(f.indexOf(["style","class","id"],n)>-1||n.indexOf("data-")>-1)?"".concat(n,'="').concat(a,'"'):(x.collect.whiteList[e]=x.collect.whiteList[e]||[],void x.collect.whiteList[e].push(n))},onIgnoreTag:function(e,n){if("style"===e)return n;m(n,function(e,n,o,a){y(w(a).html.replace("/",""),function(e){x.collect.whiteList[o]=x.collect.whiteList[o]||[],x.collect.whiteList[o].push(e)})},p)},whiteList:L,mergeWhiteList:function(e){for(var n,o={},a=0,t=f.keys(L);a<t.length;a++)o[n=t[a]]=f.from(L[n]);for(var r=0,i=f.keys(e);r<i.length;r++)o[n=i[r]]=n in L?L[n].concat(e[n]):f.from(e[n]);return o},setWhiteList:function(e){for(var n=0,o=f.keys(e);n<o.length;n++){var a=o[n];this.whiteList[a]=a in L?L[a].concat(e[a]):f.from(e[a])}}};try{var F={},k="merge";f.includes(k,"override")&&(x.whiteList=F.whiteList),f.includes(k,"merge")&&x.setWhiteList(F.whiteList)}catch(e){}var C=function(e,n){for(var o={},a=0,t=f.keys(e);a<t.length;a++){var r=t[a];Array.isArray(e[r])?o[r]=f.from(e[r]):o[r]=C({},e[r])}for(var i=0,d=f.keys(n);i<d.length;i++)(r=d[i])in e?Array.isArray(e[r])?o[r]=e[r].concat(n[r]):o[r]=C(e[r],n[r]):Array.isArray(n[r])?o[r]=f.from(n[r]):o[r]=C({},n[r]);return o},O={blackList:{a:["folder"],meta:["content"],iframe:["srcdoc"],input:["pattern"],vmlframe:["xmlns"]},blackTags:["script","xml","embed","isindex","object","base","set","handler","animate","payload","import"],blackAttrs:["charset","ns","namespace","formaction","xlink:href","xmlns:xlink","handler","repeat","repeat-start","repeat-end"],blackAttrRegExps:[/^on/],filterList:{param:["value"],video:["poster"],form:["action"]},filterAttrs:["href","src","background","style","dynsrc","lowsrc","content"]};try{var W={};W.blackAttrRegExps&&(W.blackAttrRegExps=W.blackAttrRegExps.map(function(e){return new RegExp(e.toString().slice(1,e.toString().length-1))}));var j="merge";f.includes(j,"override")&&(O=W),f.includes(j,"merge")&&(O=C(O,W))}catch(e){}var I={mode:"black",whiteList:{},blackConfig:O,collect:null,initCollect:function(){I.collect={blackList:{},blackTags:[],blackAttrs:[],blackAttrRegExps:[],filterAttrs:[],filterList:{},filterProtocol:[]}},removeCollect:function(){var e=b(I.collect),n=e.count,o=e.ret;return I.collect=null,{collectKey:0===n?null:JSON.stringify(o),collectMode:"black"}},onIgnoreTag:function(e,n){var o;if(!f.includes(O.blackTags,e))return m(n,function(e,n,o,a,t){if(-1!==o.indexOf("/"))return p(a);if(t)return"</".concat(o,">");var r=w(a),i=y(r.html,function(e,n){var a,t=0;if(O.blackList[o]&&f.includes(O.blackList[o],e)&&(I.collect.blackList[o]=I.collect.blackList[o]||[],I.collect.blackList[o].push(e),t++),O.blackAttrRegExps.length&&O.blackAttrRegExps.some(function(n){return n.test(e)})&&f.forEach(O.blackAttrRegExps,function(n){n.test(e)&&(I.collect.blackAttrRegExps.push("".concat(n.toString(),"->").concat(e)),t++)}),O.blackAttrs.length&&f.includes(O.blackAttrs,e)&&(O.blackAttrs.push(e),t++),!t){if(O.filterList&&O.filterList[o]&&f.includes(O.filterList[o],e)){var r=E(n,function(e){var n;null===(n=I.collect)||void 0===n||n.filterProtocol.push(e)});return r!==n&&(I.collect.filterList[o]=I.collect.filterList[o]||[],I.collect.filterList[o].push(e)),n?"".concat(e,"='").concat(r,"'"):e}return O.filterAttrs&&f.includes(O.filterAttrs,e)?((r=E(n,function(e){var n;null===(n=I.collect)||void 0===n||n.filterProtocol.push(e)}))!==n&&(null===(a=I.collect)||void 0===a||a.filterAttrs.push(e)),n?"".concat(e,"='").concat(r,"'"):e):n?"".concat(e,"='").concat(n,"'"):e}});return a="<".concat(o),i&&(a+=" ".concat(i)),r.closing&&(a+=" /"),a+=">"},p);null===(o=I.collect)||void 0===o||o.blackTags.push(e)}},N=function(e){var n=e.reportOnly,o=void 0===n||n,a=e.block;return o&&"all"===o?"report":("string"==typeof o&&("true"===o&&(o=!0),"false"===o&&(o=!1)),a?"enforce":o?"report":"enforce")},U=function(e){return function(o,a,t){if(!o||"string"!=typeof o)return o;var r=a;e===G&&(r=x).initCollect();var i=e(o,r);if(v(i)===v(o))return o;if(!t)return i;var d=t.logType,s=N(t),R=r.removeCollect();return T.report(n(n({type:d,disposition:s},R),{sourceText:g(o),filterText:g(i)})),"enforce"===s?i:o}},B=U(function(e,n){return void 0===n&&(n={}),n&&n.whiteList||(n.whiteList={a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","crossorigin","loop","muted","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],figcaption:[],figure:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],summary:[],sup:[],strong:[],strike:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","crossorigin","loop","muted","playsinline","poster","preload","src","height","width"]}),new S(n).process(e)}),Z=U(G),K=function(e,n,o){var a=[],t=E(e,function(e){a.push(e)});if(t===e)return e;a=f.from(f.uniq(a));var r=n||o||{};if(!r)return t;var i=r.logType,d=N(o);return T.report({type:i,disposition:d,collectKey:a.join("___"),collectData:JSON.stringify(a),collectMode:"black",sourceText:g(e),filterText:g(t)}),"enforce"===d?t:e},z=P._xssProject||{},$=P.xssNamespace||{},Y="3.0.26",J={FilterXSS:S,version:Y,webpackPluginVersion:"<%= webpackPluginVersion =>",reportOnly:"<%= reportOnly =>",filterXSS:B,_filterXSS:Z,filterUrl:K,Config:x,BlackConfig:I,project:z,setProjectName:function(e){z[e]=this,P._xssProjectName=e}};$.douyin_web=J,P.xssNamespace=$,P.Math&&!P.Math.xssNamespace&&(P.Math.xssNamespace=$),z[Y]=J,P.globalThis=P,P.getFilterXss=function(){return void 0!==this._xssProjectName?this._xssProject[this._xssProjectName]:J},P.xss=J,P.isSafeUrl=V,P.isSafeDomain=V,P.isSafeProtocol=A,P._xssProject=z,P._xssProjectName&&(z[P._xssProjectName]=J);var q=J.setProjectName.bind(J);e.BlackConfig=I,e.Config=x,e.FilterXSS=S,e._filterXSS=Z,e.filterUrl=K,e.filterXSS=B,e.isSafeDomain=V,e.isSafeProtocol=A,e.isSafeUrl=V,e.project=z,e.setProjectName=q,e.setXssNamespace=function(e){var n=e.appId,o=e.bid,a=e.region;$[n]=J;x.bid=o,x.region=a,x.enabled=!0},e.xssNamespace=$,Object.defineProperty(e,"__esModule",{value:!0})}),(self.webpackChunkdouyin_web=self.webpackChunkdouyin_web||[]).push([["47660"],{318e3:function(e,n,o){"use strict";var a=o(88648),t=o(492071);let r=(0,t.A)(function(e){return a.createElement("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:!1,"aria-hidden":!0},e),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.28 4.24a1.5 1.5 0 0 1 0 2.12l-5.66 5.66 5.66 5.65a1.5 1.5 0 1 1-2.12 2.13l-6.72-6.72a1.5 1.5 0 0 1 0-2.12l6.72-6.72a1.5 1.5 0 0 1 2.12 0Z",fill:"currentColor"}))},"chevron_left");n.Z=r},540818:function(e,n,o){"use strict";var a=o(88648),t=o(492071);let r=(0,t.A)(function(e){return a.createElement("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:!1,"aria-hidden":!0},e),a.createElement("path",{d:"M4.5 4.75a2.75 2.75 0 0 1 5.5 0v14.5a2.75 2.75 0 1 1-5.5 0V4.75Z",fill:"currentColor"}),a.createElement("path",{d:"M14 4.75a2.75 2.75 0 1 1 5.5 0v14.5a2.75 2.75 0 1 1-5.5 0V4.75Z",fill:"currentColor"}))},"pause");n.Z=r},154337:function(e,n,o){"use strict";var a=o(88648),t=o(492071);let r=(0,t.A)(function(e){return a.createElement("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:!1,"aria-hidden":!0},e),a.createElement("path",{d:"m20.56 9.66-7.8 8.97a1 1 0 0 1-1.51 0L3.44 9.66A1 1 0 0 1 4.19 8h15.62a1 1 0 0 1 .75 1.66Z",fill:"currentColor"}))},"tree_triangle_down");n.Z=r},529962:function(e,n,o){"use strict";o.r(n)},522030:function(e,n,o){"use strict";o.r(n)},130289:function(e,n,o){"use strict";o.r(n)},685581:function(e,n,o){"use strict";o.d(n,{Z:function(){return M}}),o(429532),o(250440);var a=o(633364),t=o.n(a),r=o(88648),i=o(713097),d=o.n(i),s=o(201845),R=o.n(s),l=o(968410);o(703205);var c=o(601472),u=function(e,n){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>n.indexOf(a)&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)0>n.indexOf(a[t])&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(o[a[t]]=e[a[t]]);return o};let h=l.j2.sizes,{htmlTypes:p,btnTypes:f}=l.j2;class M extends r.PureComponent{render(){let e=this.props,{children:n,block:o,htmlType:a,loading:i,circle:s,className:R,style:l,disabled:c,size:h,theme:p,type:f,prefixCls:M,iconPosition:D}=e,g=u(e,["children","block","htmlType","loading","circle","className","style","disabled","size","theme","type","prefixCls","iconPosition"]),H=Object.assign(Object.assign({disabled:c},t()(g,["x-semi-children-alias"])),{className:d()(M,{[`${M}-${f}`]:!c&&f,[`${M}-disabled`]:c,[`${M}-size-large`]:"large"===h,[`${M}-size-small`]:"small"===h,[`${M}-light`]:"light"===p,[`${M}-block`]:o,[`${M}-circle`]:s,[`${M}-borderless`]:"borderless"===p,[`${M}-outline`]:"outline"===p,[`${M}-${f}-disabled`]:c&&f},R),type:a,"aria-disabled":c}),m={};return!(R&&R.includes("-with-icon"))&&(m["x-semi-prop"]=this.props["x-semi-children-alias"]||"children"),r.createElement("button",Object.assign({},H,{onClick:this.props.onClick,onMouseDown:this.props.onMouseDown,style:l}),r.createElement("span",Object.assign({className:d()(`${M}-content`,this.props.contentClassName),onClick:e=>c&&e.stopPropagation()},m),n))}}M.defaultProps={disabled:!1,size:"default",type:"primary",theme:"light",block:!1,htmlType:"button",onMouseDown:c.Z,onClick:c.Z,onMouseEnter:c.Z,onMouseLeave:c.Z,prefixCls:l.UX.PREFIX},M.propTypes={children:R().node,disabled:R().bool,prefixCls:R().string,style:R().object,size:R().oneOf(h),type:R().oneOf(f),block:R().bool,onClick:R().func,onMouseDown:R().func,circle:R().bool,loading:R().bool,htmlType:R().oneOf(p),theme:R().oneOf(l.j2.themes),className:R().string,onMouseEnter:R().func,onMouseLeave:R().func,"aria-label":R().string,contentClassName:R().string}},598925:function(e,n,o){"use strict";o(429532),o(413806),o(826893);var a=o(88648),t=o(713097),r=o.n(t),i=o(139689),d=o(888555),s=o(738452),R=o(293851);let{PREFIX_CHAT_BOX:l}=d.U,{MESSAGE_STATUS:c,MODE:u,ROLE:h}=d.j;n.Z=e=>{let{message:n={},customRenderFunc:o,role:t,customMarkDownComponents:d,mode:p,markdownRenderProps:f}=e,{content:M,role:D,status:g}=n,H=(0,a.useMemo)(()=>Object.assign({code:R.Z,SemiFile:s.QC,img:s.sp},d),[d]),m=(0,a.useMemo)(()=>{let e=D===h.USER,n=p===u.BUBBLE,o=p===u.USER_BUBBLE&&e;return r()(`${l}-content`,{[`${l}-content-${p}`]:n||o,[`${l}-content-user`]:n&&e||o,[`${l}-content-error`]:g===c.ERROR&&(n||o)})},[D,g,p]),y=(0,a.useMemo)(()=>{if(g===c.LOADING)return a.createElement("span",{className:`${l}-content-loading`},a.createElement("span",{className:`${l}-content-loading-item`}));{let e;return"string"==typeof M?e=a.createElement(i.Z,Object.assign({format:"md",raw:M,components:H},f)):Array.isArray(M)&&(e=M.map((e,n)=>{var o;if("text"===e.type)return a.createElement(i.Z,Object.assign({key:"index",format:"md",raw:e.text,components:H},f));if("image_url"===e.type)return a.createElement(s.sp,{key:"index",src:e.image_url.url});if("file_url"===e.type){let{name:n,size:t,url:r,type:i}=e.file_url,d=null!==(o=n.split(".").pop())&&void 0!==o?o:null==i?void 0:i.split("/").pop();return a.createElement(s.QC,{key:"index",url:r,name:n,size:t,type:d})}return null})),a.createElement(a.Fragment,null,e)}},[g,M]);return o?o({message:n,role:t,defaultContent:y,className:m}):a.createElement("div",{className:m},y)}},325623:function(e,n,o){"use strict";o(429532),o(250440);var a=o(88648),t=o(705514),r=o(713097),i=o.n(r),d=o(201845),s=o.n(d),R=o(919541);o(448846);var l=o(200142),c=o(75378),u=o(877903),h=o(502588),p=o(98573),f=o(888555),M=o(237813),D=o(657794),g=o(384445);let H=f.U.PREFIX,{CHAT_ALIGN:m,MODE:y,SEND_HOT_KEY:X,MESSAGE_STATUS:v}=f.j;class S extends t.Z{get adapter(){return Object.assign(Object.assign({},super.adapter),{getContainerRef:()=>{var e;return null===(e=this.containerRef)||void 0===e?void 0:e.current},setWheelScroll:e=>{this.setState({wheelScroll:e})},notifyChatsChange:e=>{let{onChatsChange:n}=this.props;n&&n(e)},notifyLikeMessage:e=>{let{onMessageGoodFeedback:n}=this.props;n&&n(e)},notifyDislikeMessage:e=>{let{onMessageBadFeedback:n}=this.props;n&&n(e)},notifyCopyMessage:e=>{let{onMessageCopy:n}=this.props;n&&n(e)},notifyClearContext:()=>{let{onClear:e}=this.props;e&&e()},notifyMessageSend:(e,n)=>{let{onMessageSend:o}=this.props;o&&o(e,n)},notifyInputChange:e=>{let{onInputChange:n}=this.props;n&&n(e)},setBackBottomVisible:e=>{this.setState(n=>n.backBottomVisible!==e?{backBottomVisible:e}:null)},registerWheelEvent:()=>{this.adapter.unRegisterWheelEvent();let e=this.containerRef.current;if(!!e)this.wheelEventHandler=e=>{var n;if((null===(n=this.scrollTargetRef)||void 0===n?void 0:n.current)===e.currentTarget)this.adapter.setWheelScroll(!0),this.adapter.unRegisterWheelEvent()},e.addEventListener("wheel",this.wheelEventHandler)},unRegisterWheelEvent:()=>{if(this.wheelEventHandler){let e=this.containerRef.current;if(!!e){e.removeEventListener("wheel",this.wheelEventHandler);this.wheelEventHandler=null}}},notifyStopGenerate:e=>{let{onStopGenerator:n}=this.props;n&&n(e)},notifyHintClick:e=>{let{onHintClick:n}=this.props;n&&n(e)},setUploadAreaVisible:e=>{this.setState({uploadAreaVisible:e})},manualUpload:e=>{let n=this.uploadRef.current;n&&n.insert(e)},getDropAreaElement:()=>{var e;return null===(e=this.dropAreaRef)||void 0===e?void 0:e.current},getDragStatus:()=>this.dragStatus,setDragStatus:e=>{this.dragStatus=e}})}static getDerivedStateFromProps(e,n){let{chats:o,hints:a}=e,t={};return(o!==n.chats&&(t.chats=null!=o?o:[]),a!==n.cacheHints&&(t.cacheHints=a),Object.keys(t).length)?t:null}componentDidMount(){this.foundation.init()}componentDidUpdate(e,n,o){let{chats:a,hints:t}=this.props,{chats:r,cacheHints:i}=n,{wheelScroll:d}=this.state,s=!1;if(a!==r&&Array.isArray(a)&&Array.isArray(r)){let e=a[a.length-1],n=r[r.length-1];a.length>r.length?(0===r.length||e.id!==n.id)&&(s=!0):a.length===r.length&&a.length&&("complete"!==e.status||e.status!==n.status)&&(s=!0)}t!==i&&t.length>i.length&&(s=!0),!d&&s&&this.foundation.scrollToBottomImmediately()}componentWillUnmount(){this.foundation.destroy()}render(){let{topSlot:e,bottomSlot:n,roleConfig:o,hints:t,onChatsChange:r,onMessageCopy:d,renderInputArea:s,chatBoxRenderConfig:p,align:f,renderHintBox:M,style:m,className:y,showStopGenerate:X,customMarkDownComponents:S,mode:P,showClearContext:T,placeholder:b,inputBoxCls:G,inputBoxStyle:w,hintStyle:_,hintCls:A,uploadProps:E,uploadTipProps:V,sendHotKey:L,renderDivider:x,markdownRenderProps:F,enableUpload:k}=this.props,{backBottomVisible:C,chats:O,wheelScroll:W,uploadAreaVisible:j}=this.state,I=!1,N=O.length>0&&O[O.length-1],U=!1;if(N&&X){let e=(null==N?void 0:N.status)&&[v.LOADING,v.INCOMPLETE].includes(null==N?void 0:N.status);U=e,X&&(I=e)}let{dragUpload:B,clickUpload:Z,pasteUpload:K}=this.foundation.getUploadProps(k),z=B?{onDragOver:this.foundation.handleDragOver,onDragStart:this.foundation.handleDragStart,onDragEnd:this.foundation.handleDragEnd}:{};return a.createElement("div",Object.assign({className:i()(`${H}`,y),style:m},z),B&&j&&a.createElement("div",{ref:this.dropAreaRef,className:`${H}-dropArea`,onDragOver:this.foundation.handleContainerDragOver,onDrop:this.foundation.handleContainerDrop,onDragLeave:this.foundation.handleContainerDragLeave},a.createElement("span",{className:`${H}-dropArea-text`},a.createElement(D.Z,{componentName:"Chat"},e=>e.dropAreaText))),a.createElement("div",{className:`${H}-inner`},e,a.createElement("div",{className:`${H}-content`},a.createElement("div",{className:i()(`${H}-container`,{"semi-chat-container-scroll-hidden":!W}),onScroll:this.containerScroll,ref:this.containerRef},a.createElement(h.Z,{align:f,mode:P,chats:O,roleConfig:o,customMarkDownComponents:S,onMessageDelete:this.foundation.deleteMessage,onChatsChange:r,onMessageBadFeedback:this.foundation.dislikeMessage,onMessageGoodFeedback:this.foundation.likeMessage,onMessageReset:this.foundation.resetMessage,onMessageCopy:d,chatBoxRenderConfig:p,renderDivider:x,markdownRenderProps:F}),!!(null==t?void 0:t.length)&&a.createElement(l.Z,{className:A,style:_,value:t,onHintClick:this.foundation.onHintClick,renderHintBox:M}))),C&&!I&&a.createElement("span",{className:`${H}-action`},a.createElement(g.Button,{className:`${H}-action-content ${H}-action-backBottom`,icon:a.createElement(c.Z,{size:"extra-large"}),type:"tertiary",onClick:this.foundation.scrollToBottomWithAnimation})),I&&a.createElement("span",{className:`${H}-action`},a.createElement(g.Button,{className:`${H}-action-content ${H}-action-stop`,icon:a.createElement(u.Z,{size:"extra-large"}),type:"tertiary",onClick:this.foundation.stopGenerate},a.createElement(D.Z,{componentName:"Chat"},e=>e.stop))),a.createElement(R.Z,{showClearContext:T,uploadRef:this.uploadRef,manualUpload:this.adapter.manualUpload,style:w,className:G,placeholder:b,disableSend:U,onClearContext:this.foundation.clearContext,onSend:this.foundation.onMessageSend,onInputChange:this.foundation.onInputChange,renderInputArea:s,uploadProps:E,uploadTipProps:V,sendHotKey:L,clickUpload:Z,pasteUpload:K}),n))}constructor(e){super(e),this.dragStatus=!1,this.resetMessage=()=>{this.foundation.resetMessage(null)},this.clearContext=()=>{this.foundation.clearContext(null)},this.scrollToBottom=e=>{e?this.foundation.scrollToBottomWithAnimation():this.foundation.scrollToBottomImmediately()},this.sendMessage=(e,n)=>{this.foundation.onMessageSend(e,n)},this.containerScroll=e=>{if(this.scrollTargetRef.current=e.target,e.target===e.currentTarget)this.foundation.containerScroll(e)},this.containerRef=a.createRef(),this.uploadRef=a.createRef(),this.dropAreaRef=a.createRef(),this.wheelEventHandler=null,this.foundation=new M.Z(this.adapter),this.scrollTargetRef=a.createRef(),this.state={backBottomVisible:!1,chats:[],cacheHints:[],wheelScroll:!1,uploadAreaVisible:!1}}}S.__SemiComponentName__="Chat",S.propTypes={className:s().string,style:s().object,roleConfig:s().object,chats:s().array,hints:s().array,renderHintBox:s().func,onChatsChange:s().func,align:s().string,chatBoxRenderConfig:s().object,customMarkDownComponents:s().object,onClear:s().func,onMessageDelete:s().func,onMessageReset:s().func,onMessageCopy:s().func,onMessageGoodFeedback:s().func,onMessageBadFeedback:s().func,inputContentConvert:s().func,onMessageSend:s().func,InputBoxStyle:s().object,inputBoxCls:s().string,renderFullInputBox:s().func,placeholder:s().string,topSlot:s().node||s().array,bottomSlot:s().node||s().array,showStopGenerate:s().bool,showClearContext:s().bool,hintStyle:s().object,hintCls:s().string,uploadProps:s().object,uploadTipProps:s().object,mode:s().string,markdownRenderProps:s().object},S.defaultProps=(0,p.GW)(S.__SemiComponentName__,{align:m.LEFT_RIGHT,showStopGenerate:!1,mode:y.BUBBLE,showClearContext:!1,sendHotKey:X.ENTER}),n.Z=S},260854:function(e,n,o){"use strict";let a=o(88648).createContext(null);n.Z=a},203949:function(e,n,o){"use strict";o(429532);var a=o(88648),t=function(e,n){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>n.indexOf(a)&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)0>n.indexOf(a[t])&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(o[a[t]]=e[a[t]]);return o};n.Z=e=>{let{className:n,style:o}=e,r=t(e,["className","style"]);return a.createElement("svg",Object.assign({"aria-hidden":!0,className:n,style:o},r,{width:"24",height:"7",viewBox:"0 0 24 7",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}),a.createElement("path",{d:"M24 0V1C20 1 18.5 2 16.5 4C14.5 6 14 7 12 7C10 7 9.5 6 7.5 4C5.5 2 4 1 0 1V0H24Z"}))}},845001:function(e,n,o){"use strict";o(675373),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,142581)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,522573)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,286479)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,126138)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,621401)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,893933)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,26604)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,530266)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,915669)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,138440)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,571508)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,619619)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,526317)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,180388)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,766903)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,310443)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,671195)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,415134)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,945173)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,524491)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,66425)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,364759)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,586441)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,869275)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,24913)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,695755)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,595980)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,787831)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,983190)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,304495)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,140939)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,631214)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,105345)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,631056)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,588386)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,497409)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,522030)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,865525)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,593870)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,315659)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,51600)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,93458)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,130289)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,225479)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,327984)),Promise.all([o.e("74792"),o.e("28119"),o.e("95763"),o.e("40331"),o.e("51163")]).then(o.bind(o,487935))},927054:function(e,n,o){"use strict";o.d(n,{U:function(){return t},j:function(){return r}});var a=o(818749);let t={PREFIX:`${a.T}-banner`},r={TYPE:["info","success","danger","warning"]}},281513:function(e,n,o){"use strict";o.d(n,{Z:function(){return d}}),o(429532),o(954372),o(826893),o(927234),o(413806),o(250440);var a=o(883520),t=o(444192),r=o(540605),i=o(68089);class d extends a.Z{init(){this._checkCurrentValue(),this._dragOffset=0}_checkCurrentValue(){let e;let{currentValue:n,min:o,max:a}=this.getStates();Array.isArray(n)?((e=[])[0]=this._checkValidity(n[0],o,a),e[1]=this._checkValidity(n[1],o,a)):e=this._checkValidity(n,o,a),this._adapter.updateCurrentValue(e)}destroy(){this._adapter.unSubscribeEventListener()}_getHandleCenterPosition(e,n){let o=n.getBoundingClientRect(),{x:a,y:t}=this.handleMousePos(o.left+.5*o.width,o.top+.5*o.height);return e?t:a}constructor(e){var n;super(Object.assign(Object.assign({},d.defaultAdapter),e)),n=this,this.getMinAndMaxPercent=e=>{let{range:n,min:o,max:a}=this._adapter.getProps(),t=n?(e[0]-o)/(a-o):(e-o)/(a-o),r=n?(e[1]-o)/(a-o):1;return{min:this._checkValidity(t),max:this._checkValidity(r)}},this._checkValidity=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return e>o?o:e<n?n:e},this.computeHandleVisibleVal=(e,n,o)=>{let a;let{focusPos:t,currentValue:r}=this._adapter.getStates(),i={min:!1,max:!1};return a=n?{min:n(o?this.outPutValue(r[0]):this.outPutValue(r)),max:o?n(this.outPutValue(r[1])):null}:{min:o?this.outPutValue(r[0]):this.outPutValue(r),max:o?this.outPutValue(r[1]):null},e?(i.min=!0,i.max=!0):void 0===e&&n&&("min"===t?i.min=!0:"max"===t&&(i.max=!0)),{tipVisible:i,tipChildren:a}},this.valueFormatIsCorrect=e=>Array.isArray(e)?"number"==typeof e[0]&&"number"==typeof e[0]:"number"==typeof e,this.handleMousePos=(e,n)=>{let o=this._adapter.getParentRect(),a=this._adapter.getScrollParentVal(),t=o?o.left:0,r=o?o.top:0;return{x:e-t+a.scrollLeft,y:n-r+a.scrollTop}},this.getScrollParent=e=>{let n=/(auto|scroll)/,o=(e,n)=>window.getComputedStyle(e,null).getPropertyValue(n),a=e=>n.test(o(e,"overflow")+o(e,"overflow-y")+o(e,"overflow-x")),t=e=>e&&e!==document.body&&e instanceof Element?a(e)?e:t(e.parentNode):document.body;return t(e)},this.checkMeetMinMax=e=>{let n,o;let{vertical:a,verticalReverse:t,range:r}=this._adapter.getProps(),i=this._adapter.getState("currentValue");this.transValueToPos(i);let{sliderX:d,sliderY:s,sliderWidth:R,sliderHeight:l}=this._adapter.getSliderLengths(),{chooseMovePos:c,isDrag:u}=this._adapter.getStates();return n=a&&t?s+(a?l:R):a?s:d,o=a&&t?s:a?s+l:d+R,a&&t?e>=n?e=n:e<=o&&(e=o):e<=n?e=n:e>=o&&(e=o),e},this.transPosToValue=(e,n)=>{let o,a;let t=this.checkMeetMinMax(e),{min:r,max:i,currentValue:d}=this._adapter.getStates(),{range:s,vertical:R,step:l,verticalReverse:c}=this._adapter.getProps(),{sliderX:u,sliderY:h,sliderWidth:p,sliderHeight:f}=this._adapter.getSliderLengths(),M=R?h:u,D=R?f:p;return(o=R&&c?(M+D-t)/D*(i-r)+r:(t-M)/D*(i-r)+r,a=s?n?d[0]:d[1]:d,1!==l&&(o=Math.round(o/l)*l),s&&o!==a)?n?[o,d[1]]:[d[0],o]:!s&&o!==a&&o},this.transValueToPos=e=>{let{min:n,max:o}=this._adapter.getStates(),{vertical:a,range:t,verticalReverse:r}=this._adapter.getProps(),{sliderX:i,sliderY:d,sliderWidth:s,sliderHeight:R}=this._adapter.getSliderLengths(),l=a?d:i,c=a?R:s;return t?[(e[0]-n)*c/(o-n)+l,(e[1]-n)*c/(o-n)+l]:(e-n)*c/(o-n)+l},this.isMarkActive=e=>{let{min:n,max:o,range:a,included:t}=this._adapter.getProps(),r=this._adapter.getState("currentValue");return"number"==typeof(e/1)&&!!(e>=n)&&!!(e<=o)&&(a?(e>r[1]||e<r[0])&&t?"unActive":"active":e<=r&&t?"active":"unActive")},this.outPutValue=e=>{let n=e=>{var n,o;return/^\d+(\.\d+)?$/.test(String(e))?null!==(o=null===(n=e.toString().split(".")[1])||void 0===n?void 0:n.length)&&void 0!==o?o:0:0},o=this._adapter.getProp("step"),a=(()=>{let e=Math.pow(10,n(o));return n=>Math.round(n*e)/e})();if(!Array.isArray(e))return a(e);{let n=a(e[0]),o=a(e[1]);return n>o?"min"===this.getState("focusPos")?[o,o]:[n,n]:[n,o]}},this.handleDisabledChange=e=>{this._adapter.updateDisabled(e)},this.checkAndUpdateIsInRenderTreeState=()=>this._adapter.checkAndUpdateIsInRenderTreeState(),this.calculateOutputValue=(e,n)=>{let o=this.transPosToValue(e,n);if(!1!==o)return this.outPutValue(o)},this.handleValueChange=(e,n)=>{let{min:o,max:a}=this._adapter.getStates(),t=null,r={};this.valueFormatIsCorrect(n)?(Array.isArray(e)&&Array.isArray(n)&&(t=Object.assign(r,{currentValue:n=[n[0]<o?o:n[0],n[1]>a?a:n[1]]})),"number"==typeof e&&"number"==typeof n&&(t=Object.assign(r,{currentValue:n=n>a?a:n<o?o:n}))):t=r,t&&this._adapter.transNewPropsToState(t)},this.onHandleDown=(e,n)=>{this._adapter.onHandleDown(e);let o=this._adapter.getState("disabled"),{vertical:a}=this._adapter.getProps(),{dragging:t}=this._adapter.getOverallVars();if(o)return!1;this._adapter.setStateVal("isDrag",!0),this._adapter.setStateVal("chooseMovePos",n),"min"===n?this._adapter.setDragging([!0,t[1]]):this._adapter.setDragging([t[0],!0]);let r=this.handleMousePos(e.clientX,e.clientY),i=a?r.y:r.x;if(this._adapter.isEventFromHandle(e)){let n=this._getHandleCenterPosition(a,e.target);this._dragOffset=i-n,i=n}else this._dragOffset=0;return!0},this.onHandleMove=e=>{this._adapter.setEventDefault(e);let{disabled:n,chooseMovePos:o}=this._adapter.getStates(),{vertical:a}=this._adapter.getProps(),{dragging:t}=this._adapter.getOverallVars();if(n)return!1;this.onHandleEnter(o);let r=this.handleMousePos(e.clientX,e.clientY),i=a?r.y:r.x;if(i-=this._dragOffset,"min"===o&&t[0]||"max"===o&&t[1]){let e=this.calculateOutputValue(i,"min"===o);if(void 0===e)return!1;this._adapter.notifyChange(e),this._adapter.onHandleMove(i,"min"===o,void 0,!1,e)}return!0},this.onHandleTouchStart=(e,n)=>{let o=this._adapter.getMinHandleEl(),a=this._adapter.getMaxHandleEl();if(e.target===o||e.target===a){(0,i.Jt)(e);let o=(0,t.Z)(e.touches[0],e);this.onHandleDown(o,n)}},this.onHandleTouchMove=e=>{let n=this._adapter.getMinHandleEl(),o=this._adapter.getMaxHandleEl();if(e.target===n||e.target===o){let n=(0,t.Z)(e.touches[0],e);this.onHandleMove(n)}},this.onHandleEnter=e=>{let{disabled:n,focusPos:o}=this._adapter.getStates();!n&&!o&&e!==o&&this._adapter.onHandleEnter(e)},this.onHandleLeave=()=>{let e=this._adapter.getState("disabled"),n=this._adapter.getState("isDrag");!e&&!n&&this._adapter.onHandleLeave()},this.onHandleUp=e=>{this._adapter.onHandleUpBefore(e);let{disabled:n,chooseMovePos:o}=this._adapter.getStates(),{dragging:a}=this._adapter.getOverallVars();return!n&&("min"===o?this._adapter.setDragging([!1,a[1]]):this._adapter.setDragging([a[0],!1]),this._adapter.setStateVal("isDrag",!1),this._adapter.onHandleLeave(),this._adapter.onHandleUpAfter(),!0)},this._handleValueDecreaseWithKeyBoard=(e,n)=>{let{min:o,currentValue:a}=this.getStates(),{range:t}=this.getProps();if("min"===n){if(t){let n=a[0]-e;return[n=n<o?o:n,a[1]]}{let n=a-e;return n=n<o?o:n}}{let n=a[1]-e;return n=n<a[0]?a[0]:n,[a[0],n]}},this._handleValueIncreaseWithKeyBoard=(e,n)=>{let{max:o,currentValue:a}=this.getStates(),{range:t}=this.getProps();if("min"===n){if(t){let n=a[0]+e;return[n=n>a[1]?a[1]:n,a[1]]}{let n=a+e;return n=n>o?o:n}}{let n=a[1]+e;return n=n>o?o:n,[a[0],n]}},this._handleHomeKey=e=>{let{min:n,currentValue:o}=this.getStates(),{range:a}=this.getProps();return"min"!==e?[o[0],o[0]]:a?[n,o[1]]:n},this._handleEndKey=e=>{let{max:n,currentValue:o}=this.getStates(),{range:a}=this.getProps();return"min"!==e?[o[0],n]:a?[o[1],o[1]]:n},this.handleKeyDown=(e,n)=>{let o;let{min:a,max:t,currentValue:r}=this.getStates(),{step:d,range:s}=this.getProps();switch(e.key){case"ArrowLeft":case"ArrowDown":o=this._handleValueDecreaseWithKeyBoard(d,n);break;case"ArrowRight":case"ArrowUp":o=this._handleValueIncreaseWithKeyBoard(d,n);break;case"PageUp":o=this._handleValueIncreaseWithKeyBoard(10*d,n);break;case"PageDown":o=this._handleValueDecreaseWithKeyBoard(10*d,n);break;case"Home":o=this._handleHomeKey(n);break;case"End":o=this._handleEndKey(n)}if(["ArrowLeft","ArrowDown","ArrowRight","ArrowUp","PageUp","PageDown","Home","End"].includes(e.key)){let n=!0;(n=Array.isArray(r)?!(r[0]===o[0]&&r[1]===o[1]):r!==o)&&(this._adapter.updateCurrentValue(o),this._adapter.notifyChange(o)),(0,i.Jt)(e)}},this._noTooltip=()=>{let{tipFormatter:e,tooltipVisible:n}=this.getProps();return null===e||!1===n},this.onFocus=(e,n)=>{if(this._noTooltip())return;(0,i.Jt)(e);let{target:o}=e;try{o.matches(":focus-visible")&&("min"===n?this._adapter.setStateVal("firstDotFocusVisible",!0):this._adapter.setStateVal("secondDotFocusVisible",!0))}catch(e){(0,r.Z)(!0,"Warning: [Semi Slider] The current browser does not support the focus-visible")}},this.onBlur=(e,n)=>{if(this._noTooltip())return;let{firstDotFocusVisible:o,secondDotFocusVisible:a}=this.getStates();"min"===n?o&&this._adapter.setStateVal("firstDotFocusVisible",!1):a&&this._adapter.setStateVal("secondDotFocusVisible",!1)},this.handleWrapClick=e=>{let{disabled:n,isDrag:o}=this._adapter.getStates();if(o||n||this._adapter.isEventFromHandle(e))return;let{vertical:a}=this.getProps(),t=this.handleMousePos(e.clientX,e.clientY),r=a?t.y:t.x,i=this.checkWhichHandle(r),d=this.calculateOutputValue(r,i);if(void 0===d)return;if(this._adapter.notifyChange(d),!this._isControlledComponent())this.setHandlePos(r,i,!0,d)},this.setHandlePos=function(e,o){let a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],t=arguments.length>3?arguments[3]:void 0;n._adapter.onHandleMove(e,o,()=>n._adapter.onHandleUpAfter(),a,t)},this.checkWhichHandle=e=>{let{vertical:n,verticalReverse:o}=this.getProps(),{currentValue:a}=this._adapter.getStates(),t=this.transValueToPos(a),r=!0;return Array.isArray(t)&&(e>t[1]||Math.abs(e-t[0])>Math.abs(e-t[1]))&&(r=!1),n&&o&&(r=!r),r},this.handleWrapperEnter=()=>{this._adapter.setStateVal("showBoundary",!0)},this.handleWrapperLeave=()=>{this._adapter.setStateVal("showBoundary",!1)}}}},45501:function(e,n,o){"use strict";o.d(n,{Z:function(){return R}}),o(874386),o(250440),o(268917),o(429532);var a=o(633364),t=o.n(a),r=o(883520),i=o(511900),d=o(366690),s=o(228858);class R extends r.Z{_generateGroupedData(e){return(0,d.E3)(e)}_generateTreeData(e){return(0,d.Tn)(e)}_generatePath(e){let{path:n=[]}=e;return n.map(e=>e.label).join(" > ")}handleInputChange(e,n){let{data:o}=this.getStates(),{filter:a,type:t}=this.getProps();if(t===i.j2.TYPE_TREE_TO_LIST){let a=new Set(o.map(e=>e.key));this._adapter.searchTree(e),n&&this._adapter.notifySearch(e),this._adapter.updateInput(e),this._adapter.updateSearchResult(a);return}let r="function"==typeof a?n=>a(e,n):n=>"string"==typeof n.label&&n.label.includes(e),d=new Set(o.filter(r).map(e=>e.key));n&&this._adapter.notifySearch(e),this._adapter.updateInput(e),this._adapter.updateSearchResult(d)}handleAll(e){let{disabled:n,type:o}=this.getProps(),{selectedItems:a,data:t,searchResult:r,inputValue:d}=this.getStates();if(n)return;let s=[];s=""!==d?t.filter(e=>r.has(e.key)):t,s=o===i.j2.TYPE_TREE_TO_LIST?t:s;let R=new Map;switch(!0){case!e:R=new Map(a),s.forEach(e=>{!e.disabled&&R.delete(e.key)});break;case e:R=new Map(a),s.forEach(e=>{if(e.disabled){a.has(e.key)&&R.set(e.key,e);return}R.set(e.key,e)})}!this._isControlledComponent()&&this._adapter.updateSelected(R),this._notifyChange(R)}handleClear(){let{disabled:e}=this.getProps(),{selectedItems:n,data:o}=this.getStates();if(e)return;let a=new Map(n);o.forEach(e=>{!e.disabled&&a.delete(e.key)}),!this._isControlledComponent()&&this._adapter.updateSelected(a),this._notifyChange(a)}handleSelectOrRemove(e){let{disabled:n}=this.getProps(),o=this._adapter.getSelected();if(!n&&!e.disabled)o.has(e.key)?(o.delete(e.key),this._adapter.notifyDeselect(e)):(o.set(e.key,e),this._adapter.notifySelect(e)),!this._isControlledComponent()&&this._adapter.updateSelected(o),this._notifyChange(o)}handleSelect(e){let{disabled:n}=this.getProps(),o=this._adapter.getSelected(),{data:a}=this.getStates(),t=new Map(a.map(e=>[e.value,e])),r=new Map;if(!n)e.forEach(e=>{let n=t.get(e);if(o.has(n.key)){r.set(n.key,n);return}if(!n.disabled)r.set(n.key,n)}),!this._isControlledComponent()&&this._adapter.updateSelected(r),this._notifyChange(r)}getValuesAndItemsFromMap(e){let{type:n}=this.getProps(),o=[],a=[];for(let r of e){let e=n===i.j2.TYPE_GROUP_LIST?t()(r[1],"_parent"):r[1];o.push(e),a.push(e.value)}return{items:o,values:a}}_notifyChange(e){let{items:n,values:o}=this.getValuesAndItemsFromMap(e);this._adapter.notifyChange(o,n)}handleSortEnd(e){let{oldIndex:n,newIndex:o}=e,a=[...this._adapter.getSelected().values()];a=(0,s.Z)(a,n,o);let t=new Map;a.forEach(e=>{t=t.set(e.key,e)}),this._adapter.updateSelected(t),this._notifyChange(t)}constructor(e){super(Object.assign({},e))}}},490913:function(e,n,o){"use strict";o(429532);var a=o(88648);function t(){return(t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e}).apply(this,arguments)}let r=a.forwardRef(function(e,n){return a.createElement("svg",t({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:!1,ref:n},e),a.createElement("path",{d:"M9.75 10.5001H11.25V12.0001H9.75V10.5001Z",fill:"currentColor"}),a.createElement("path",{d:"M13.4999 10.5003H14.9999V12.0003H13.4999V10.5003Z",fill:"currentColor"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.3751 4.5C8.44033 4.5 5.25069 7.68926 5.25008 11.6239L5.25008 11.625H6.00008L5.25008 11.6239C5.24846 12.6998 5.49149 13.7608 5.95925 14.727L5.01221 18.9879L9.27309 18.0408C10.2391 18.5085 11.2999 18.7515 12.3756 18.75C16.3105 18.7497 19.5001 15.5599 19.5001 11.625C19.5001 7.68987 16.3102 4.5 12.3751 4.5ZM6.75008 11.625C6.75008 8.5183 9.26838 6 12.3751 6C15.4818 6 18.0001 8.5183 18.0001 11.625C18.0001 14.7317 15.4818 17.25 12.3751 17.25H12.3739C11.4505 17.2514 10.5411 17.0243 9.7267 16.5889L9.48163 16.4579L6.98795 17.0121L7.5422 14.5184L7.41119 14.2734C6.97581 13.459 6.74869 12.5496 6.75008 11.6261L6.75008 11.625Z",fill:"currentColor"}))});r.elementType="Icon",n.Z=r},112672:function(e,n,o){"use strict";o.d(n,{C:function(){return R}});var a=o(134761);o(874386),o(950331),o(268917),o(455663),o(777180);var t=o(960569),r=o(927418),i=o(728584),d=Object.defineProperty,s=Object.getOwnPropertyDescriptor;class R extends t.Sy{afterPlayerInit(){if(!this._inited)this._inited=!0,this.seekStep=this._config.seekStep||10,this._mergekeyCodeMap(),this._root.addEventListener("keydown",this._onKeydown),document.addEventListener("keydown",this._onBodyKeyDown)}configDidUpdate(e,n){this._mergekeyCodeMap()}_mergekeyCodeMap(){let e=this._config.keyCodeMap;if(!!e)for(let[n,o]of Object.entries(e)){if(!(n in this.keyCodeMap)){this.keyCodeMap[n]=o;continue}for(let e of["action","disable","disablePress","isBodyTarget","pressAction"])o[e]&&(this.keyCodeMap[n][e]=o[e])}}_checkKeyBoardEventKey(e,n){let o=Object.keys(this.keyCodeMap).find(n=>{var o;return(null===(o=this.keyCodeMap[n])||void 0===o?void 0:o.keyCode)===e.keyCode}),a=o?this.keyCodeMap[o]:this.keyCodeMap[e.key];return(!!(null==a?void 0:a.allowModifierKey)||!e.metaKey&&!e.altKey&&!e.ctrlKey)&&!!a&&!a.disable&&(!n||!a.noBodyTarget)}_handleKeyDown(e){e.preventDefault();let{_keyState:n}=this;if(e.repeat){n.isPress=!0;let e=Date.now();if(e-n.tt<200)return;n.tt=e}this._handleKeyAction(e)}_handleKeyAction(e){let{_keyState:n}=this,o=Object.keys(this.keyCodeMap).find(n=>{var o;return(null===(o=this.keyCodeMap[n])||void 0===o?void 0:o.keyCode)===e.keyCode}),a=o?this.keyCodeMap[o]:this.keyCodeMap[e.key];if(!a||a.disable||n.isPress&&a.disablePress)return;let t=n.isPress&&a.pressAction||a.action;"function"==typeof t?t(e,this._player,n.isPress):"function"==typeof this._keyboardEventHandlers[t]&&this._keyboardEventHandlers[t](e,this._player,n.isPress),this._player.emit("shortcut",{key:e.key,target:e.target,isPress:n.isPress})}_checkIsVisible(){if(!this._config.checkVisible)return!0;let{height:e,top:n,bottom:o}=this._root.getBoundingClientRect(),a=window.innerHeight;return(!(n<0)||!(n<0-.9*e))&&(!(o>0)||!(o-a>.9*e))&&!0}beforeDestroy(){this._root.removeEventListener("keydown",this._onKeydown),document.removeEventListener("keydown",this._onBodyKeyDown)}constructor(...e){super(...e),(0,a._)(this,"keyCodeMap",{" ":{action:"playPause"},ArrowUp:{action:"upVolume",noBodyTarget:!0},ArrowDown:{action:"downVolume",noBodyTarget:!0},ArrowLeft:{action:"seekBack"},ArrowRight:{action:"seek",pressAction:"changePlaybackRate"},Escape:{action:"exitFullscreen",disablePress:!0,disable:!1},P:{action:"saveLog",allowModifierKey:!0}}),(0,a._)(this,"_keyState",{isPress:!1,tt:0,playbackRate:0}),(0,a._)(this,"_keyboardEventHandlers",{saveLog:async e=>{if(e.ctrlKey&&e.shiftKey){let e=[],n=this._player.instManager,o="-".repeat(30);await n.iterate(async n=>{let a=`${o} ${n.playerId} ${n.isUserActive?"active":n.isInstNext?"next":"other"} ${o}`,t=await n.getLog()+"\n\n\n";n.isUserActive?(e.unshift(t),e.unshift(a)):(e.push(a),e.push(t))}),(0,i.p)(`logger_${new Date().getTime()}.txt`,e.join("\n"))}},downVolume:e=>{let{_player:n}=this;if(n.volume<=0)return;let o=parseFloat((n.volume-.1).toFixed(1));o=o>=0?o:0;let a={prop:"volume",from:n.volume,to:o};this.emitUserAction(e,"change_volume",{props:a}),n.volume=o},playPause:e=>{this.emitUserAction(e,"switch_play_pause");let{_player:n}=this;n.paused?n.play():n.pause()},upVolume:e=>{let{_player:n}=this;if(n.volume>=1)return;let o=parseFloat((n.volume+.1).toFixed(1));o=o<=1?o:1;let a={prop:"volume",from:n.volume,to:o};this.emitUserAction(e,"change_volume",{props:a}),n.volume=o},seek:e=>{let{_player:n}=this,{duration:o,currentTime:a}=n,t=e.repeat&&this.seekStep>=4?this.seekStep/2|0:this.seekStep,r=a+t<=o?a+t:o;this.emitUserAction(e,"seek",{props:{prop:"currentTime",from:a,to:r}}),n.currentTime=r},seekBack:e=>{let{_player:n}=this,{currentTime:o}=n,a=e.repeat&&this.seekStep>=4?this.seekStep/2|0:this.seekStep,t=o-a>=0?o-a:0;this.emitUserAction(e,"seek",{props:{prop:"currentTime",from:o,to:t}}),n.currentTime=t},exitFullscreen:e=>{let{_player:n}=this;n.fullscreen&&(this.emitUserAction("keyup","switch_fullscreen",{props:{prop:"fullscreen",from:!0,to:!1}}),n.exitFullscreen())}}),(0,a._)(this,"_onKeydown",e=>{if(!this._config.disableRootTrigger&&!!this._checkKeyBoardEventKey(e)){if(!e.repeat){if(!this._config.isIgnoreUserActive&&!this._player.isUserActive)return;this._root.addEventListener("keyup",this._handleKeyUp,{once:!0})}this._handleKeyDown(e)}}),(0,a._)(this,"_handleKeyUp",e=>{let{_keyState:n}=this;n.playbackRate>0&&(this._player.playbackRate=n.playbackRate,n.playbackRate=0),n.isPress=!1,n.tt=0}),(0,a._)(this,"_onBodyKeyDown",e=>{let{disableBodyTrigger:n,isIgnoreUserActive:o}=this._config;if(!(n||!this._checkKeyBoardEventKey(e,!0)||!o&&!this._player.isUserActive||function(e){let n=e.tagName;return"INPUT"===n||"TEXTAREA"===n||e.isContentEditable}(e.target))&&!!this._checkIsVisible())!e.repeat&&document.addEventListener("keyup",this._handleKeyUp,{once:!0}),this._handleKeyDown(e)})}}(0,a._)(R,"pluginName","keyboard"),((e,n,o,a)=>{for(var t=a>1?void 0:a?s(n,o):n,r,i=e.length-1;i>=0;i--)(r=e[i])&&(t=(a?r(n,o,t):r(t))||t);return a&&t&&d(n,o,t)})([(0,r.I)(["pluginsConfig.keyboard"])],R.prototype,"configDidUpdate",1)},334524:function(e,n,o){"use strict";o.d(n,{nZ:function(){return l}});var a=o(86499);function t(e,n,o){return(t=R()?Reflect.construct:function(e,n,o){var a=[null];a.push.apply(a,n);var t=new(Function.bind.apply(e,a));return o&&d(t,o.prototype),t}).apply(null,arguments)}function r(e,n){for(var o=0;o<n.length;o++){var a=n[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,n){return(d=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function s(e){var n="function"==typeof Map?new Map:void 0;return(s=function(e){var o;if(null===e||(o=e,-1===Function.toString.call(o).indexOf("[native code]")))return e;if("function"!=typeof e)throw TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,a)}function a(){return t(e,arguments,i(this).constructor)}return a.prototype=Object.create(e.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),d(a,e)})(e)}function R(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var l=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&d(e,n)}(u,e);var n,o,t,s,l,c=(n=u,o=R(),function(){var e,a,t,r=i(n);return t=o?Reflect.construct(r,arguments,i(this).constructor):r.apply(this,arguments),e=this,(a=t)&&("object"===function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}(a)||"function"==typeof a)?a:function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)});function u(e){var n;if(!function(e,n){if(!(e instanceof n))throw TypeError("Cannot call a class as a function")}(this,u),(n=c.call(this,e)).protocol=n.protocol.slice(0,-1),![a.vF,a.gt,a.To,a.Yx,a.nU].includes(n.path))throw Error("path: [".concat(n.path," is not supported yet]"));return n}return t=u,s=[{key:"path",get:function(){return this.hostname||this.pathname.slice(2)}},{key:"getQueryByKey",value:function(e){return this.searchParams.get(e)}},{key:"getParsedQueryByKey",value:function(e){var n=this.searchParams.get(e);return n?JSON.parse(n):null}}],r(t.prototype,s),u}(s(URL))},78539:function(e,n,o){"use strict";o.d(n,{Z:function(){return t}});let a=`
Radeon RX 7900 XT|2202
Radeon RX 7900 XT|1968
RX 6800 XT|1957
Radeon RX 6900 XT (XTXH)|1930
Radeon RX 6900XT|1925
Radeon PRO W6900X|1889
RX 6900 XT|1852
Radeon RX 6900|1814
Radeon RX 7900 XTX|1773
RX6800|1695
FreddyVGA|1603
Radeon PRO W6800|1564
Radeon RX 7900 XTX|1437
Radeon RX 6950 XT|1376
Radeon RX 6800 XT|1358
Radeon RX 6750 XT|1310
Radeon(TM) RX 6850M XT|1294
Radeon RX 6700|1285
Radeon RX 6900 XT|1269
Sapphire Nitro+ RX 6800|1262
Radeon PRO W6800X|1255
Radeon PRO W6800X Duo|1218
Radeon RX 6700|1214
Radeon RX 6800 XT|1183
Sapphire Nitro Radeon RX6650XT|1180
Radeon(TM) RX 6750 XT|1166
Radeon RX 6800|1163
Radeon RX 6900 XT|1162
ASRock RX 6650 XT Phantom Gaming|1161
Radeon Navi23|1139
Radeon RX 6650 XT|1132
Radeon RX 6950 XT|1130
Radeon 6800|1121
Radeon RX 6700 XT|1110
Radeon Pro W6600X|1101
Radeon RX 6700M|1081
Radeon RX 6800M|1078
Radeon RX 5700 XT PJM|1060
Radeon RX 6800|1054
Radeon RX 6600 XT|1037
Radeon RX 6600 XT|1031
ASUS RX 6600XT macOS Edition|1021
Radeon RX 6800M|1016
Radeon Pro Vega II Duo|1015
Radeon RX 5700 Series|961
Radeon RX 6800/6800 XT / 6900 XT|961
Radeon RX 6600 XT|958
Radeon Pro Vega II|956
Radeon RX 6650 XT|951
Navi 10 5700 XT|947
Radeon Pro Vega II|947
Radeon RX 5700 Series|946
Radeon Pro W5700X|934
Radeon RX 6600|929
ASUS Radeon RX 5700 XT|926
Radeon Pro W5700X|917
Radeon Pro 5700 XT|917
Radeon RX 6900 XT|915
Radeon RX 5700 XT|911
Radeon Pro W5700|895
Radeon RX 6600/6600 XT/6600M|889
Radeon RX 6750 XT|883
Radeon RX 6600|874
Radeon RX 5700|855
Radeon RX 5700 XT 50th Anniversary|854
Radeon VII|851
Radeon RX 5700 XT 50th Anniversary|845
Radeon PRO W6800|837
Radeon Pro Vega 64|824
Radeon Navi10|822
Radeon RX 5600 XT|816
Radeon RX 6600M|803
Radeon RX 6800S|791
Radeon Pro 5700 XT|781
Radeon RX Vega 64 8GB|775
Radeon Pro 5700|768
Radeon Vega Frontier Edition|767
Radeon RX Vega|766
Radeon RX Vega 56/64|765
Radeon(TM) RX Vega|756
Radeon Pro Vega 64X|745
Radeon RX 5600 XT|744
Radeon PRO W6600|744
Radeon Vega 64 LC|735
Radeon RX Vega 64.1|732
Radeon RX 6600M|728
Radeon Pro 5700|714
Radeon Vega Frontier Edition|707
Radeon Vega Frontier|704
Radeon Vega FE|701
Radeon RX 5700 XT|691
Radeon Pro Vega 64|673
Radeon Vega 64|667
Radeon VII|663
Radeon Pro WX9100|656
Sapphire Radeon RX Vega 64 8GB|654
Radeon(TM) PRO W6600M|654
Radeon RX 5700 XT 50th Anniversary|652
Radeon RX 5700|640
Radeon Pro W5700|640
Radeon(TM) Pro WX 9100|635
Radeon RX Vega 56|628
Radeon RX Vega 56|623
Radeon Pro 5500 XT|622
Radeon RX 5600 OEM/5600 XT / 5700/5700 XT|621
Radeon RX 5500|618
Radeon RX 5500 XT|617
Radeon Vega Frontier Edition|617
Radeon RX 5500M Series|613
RX xxx|613
Radeon Pro Vega 64X|611
Radeon RX Vega 64|610
Radeon RX 5600 XT|610
Radeon Pro Vega 64|605
Radeon RX 6500 XT|603
Radeon Vega|602
Radeon Pro W5500|601
Radeon RX 5600M|600
Radeon Pro Vega 56|598
Radeon Pro Vega 64|594
Radeon Pro 5600M|593
Radeon Pro Vega 48|592
Radeon Pro Vega II Duo|590
Radeon RX 590 Series|589
Radeon RX Vega 56 8GB|589
Radeon Pro 5600M|589
Radeon Pro WX 9100|588
Radeon Pro 5300|584
Radeon(TM) R9 Fury Series|579
Radeon RX 6800 XT 16GB|567
Radeon Pro 5600M|567
Radeon Pro W5500X|564
Radeon(TM) RX 5500M|559
Radeon HD 7870|556
Radeon Pro W5500|554
Radeon RX 5500M|550
Radeon R9 290X Series|549
66AF:F0|548
Radeon Pro 5500 XT|547
Radeon RX 580 Series|547
Radeon RX 5500XT|547
Radeon(TM) RX 580X|546
Radeon Pro 5500 XT|545
Radeon(TM) Pro W5500M|544
Radeon Pro W5500X|544
Radeon Pro W5500|541
RadeonT RX 5300|537
Radeon(TM) RX 570 Graphics|524
Radeon Pro 5300|522
Radeon(TM) RX 6500M|521
Radeon RX Vega M GL|520
ASUS Radeon RX 570 Series|519
ASUS Radeon RX 580 Series|518
Radeon(TM) RX 580|518
Radeon(TM) Pro V7350x2|518
Radeon(TM) RX 480 Graphics|516
Radeon(TM) RX 570 Graphics|515
Radeon RX 6400|513
Radeon Pro 580X|513
Radeon(TM) R9 390 Series|503
Radeon Pro 5300|500
Radeon RX 580 2048SP|500
Radeon PRO W6400|500
Radeon RX 570 Series|499
Radeon PRO W6800X Duo|497
Radeon Pro 580|494
Radeon RX 5500 XT|493
Radeon RX 6400|487
Radeon Pro 580|485
Radeon(TM) Pro WX 7100 Graphics|485
Radeon(TM) R9 290X|478
Sapphire Radeon RX 580 Pulse|477
Radeon RX 6700/6700 XT / 6800M|476
Radeon(TM) RX 580|475
Radeon RX 6700S|475
Radeon R9 290X|470
Radeon(TM) RX 470 Graphics|469
Radeon R9 FURY / NANO Series|468
Radeon Embedded E9560|467
Kamen Rider Black RX|466
Radeon(TM) E9550|464
Radeon(TM) RX 580 Graphics|463
Radeon RX Vega 56/64|463
Radeon(TM) RX 480|462
Radeon RX 6800 XT|462
Radeon RX 470 Series|461
Radeon RX480|456
66AF:F1|455
Radeon Pro 480/575|455
Radeon Embedded E9560|450
Radeon FURY|450
Radeon RX 5600 OEM/5600 XT / 5700/5700 XT|447
Radeon RX 6600 XT|446
Radeon HD 6800 Series|445
Radeon Pro 570X|444
Radeon(TM) RX 470 Graphics|443
Radeon Pro 575X|443
Radeon RX 470/480/570/570X/580/580X/590|443
Radeon RX 6600|443
Radeon RX Vega M GH Graphics|441
RX 580|440
Radeon RX 570|440
Radeon Pro 570|440
Radeon RX 590|437
Radeon(TM) RX 470 Series|435
Radeon RX 6900 XT|435
Radeon FURY X|434
RX 590|431
Radeon Pro 5500M|430
???|430
Radeon(TM) RX 570|430
Radeon RX 580|429
Radeon HD 8xxx|426
Radeon R9 290|425
Radeon Pro 5500M|420
Radeon Pro 580X|420
Radeon RX 6700 XT|420
Radeon RX 480|419
Radeon R9 290/390|418
Radeon Pro 580X|416
Radeon(TM) Pro Duo|414
Ellesmere Radeon RX 570|411
Radeon R9-290X|411
Radeon Pro 580|411
Radeon R9 200 Series|406
Radeon RX 570|406
Radeon Pro 470/570|404
Radeon RX 6800M|404
Radeon RX 5300M|400
Radeon RX 580 Series (POLARIS10, DRM 3.40.0, 5.11.9-141-tkg-pds, LLVM 11.1.0)|399
Radeon Pro 5300M|399
Radeon R9 285|398
Radeon RX 470|393
Radeon Pro 575|392
Radeon Pro 575X|391
Radeon Pro WX 7100|387
Radeon RX 6700M|386
Radeon RX 470/480/570/570X/580/580X/590|382
Radeon PRO W6600|376
Radeon Polaris|374
Radeon RX 6500 XT|374
Radeon Pro Vega 20|371
Radeon HD 7970|370
Radeon Pro Vega 16|370
Radeon RX 6800|369
Radeon Pro Vega 64 OpenGL Engine|369
Radeon(TM) R9 380 Series|367
Radeon RX 5700XT|366
FirePro W8100|366
Radeon Pro Vega 64|365
Radeon Pro 570|365
Radeon Pro 570X|363
Radeon Pro Vega 64 OpenGL Engine|362
Radeon R9 280x|362
Radeon R9 380|362
Radeon R9 280x|361
Radeon R9 280x|360
Radeon Pro Vega 56|360
R9 280X Dual-X|359
Radeon Pro Vega 56 OpenGL Engine|356
Radeon HD 7970|355
Radeon HD 7970X/8970/R9 280X|354
Radeon R9 285|353
Radeon R9 380X|352
Radeon RX 480|352
Radeon RX 5700 XT Series|350
ASUS Radeon RX 470 Series|350
Radeon Pro Vega 64|349
Radeon R9 200 / HD 7900 Series|346
ASUS Radeon RX 470 Series|346
Radeon Vega 56|346
Radeon RX 580 Series (AMD POLARIS10 / DRM 3.15.0 / 4.12.0-1-amd64, LLVM 4.0.1)|343
Radeon Pro Vega 20|343
R9 380|341
Radeon HD 7970|338
Radeon RX 5700 XT|336
Radeon D700|336
Asus Radeon R9 280|334
Radeon R9 285|334
Radeon R9 M395X|332
Radeon RX 5600 XT|332
PowerColor Radeon R9 280|330
Radeon R9 280|329
FirePro W7100 Graphics Adapter|328
Radeon R9 M295X Mac Edition|327
ASUS Radeon RX 5700|327
Radeon R9 380|326
Radeon Pro Vega 16|325
Radeon R9 290X|325
Radeon RX5600|324
ASUS Radeon RX 5500 XT|323
Radeon R9 280|323
Radeon HD 7950/8950 / R9 280|321
Radeon R9 M395|319
Radeon RX 6800/6800 XT / 6900 XT|318
FirePro D700 (FireGL V)|318
Radeon RX 5500/5500M / Pro 5500M|318
MSI Radeon RX 6600 XT Gaming X|318
FirePro W8000|315
Radeon HD 7950|315
Radeon Pro W5700|315
FirePro W7170M|314
Radeon PRO W6800|314
Radeon RX 5500|313
Radeon RX 580 Special Edition|312
RadeonT RX 5500M|311
Radeon R9 M395 (Bootcamp XG edition by bootcampdrivers.com)|311
Radeon R9 360|309
Radeon Pro WX 7100|307
Radeon Pro WX 7100 Mobile|307
Radeon RX 5700 XT 50th Anniversary|307
R9 xxx|303
Radeon RX 5700XT|302
Radeon PRO W6400|301
Radeon(TM) R9 370 Series|301
Radeon RX 470/480/570/570X/580/580X/590|300
Radeon(TM) PRO W6600M|298
Radeon HD 8950|298
Radeon R9 M395X|297
Radeon R9 M395X|296
RX Vega 64|296
Radeon RX Vega 11 Graphics|295
Radeon Pro 270X|294
Radeon RX 580 2048SP|290
Radeon HD 7950|290
Video Controller (VGA Compatible)|290
Radeon(TM) R7 370 Series Graphics|290
Radeon HD 7950|290
Asus Radeon R9 270X|289
Radeon RX 580X Series|288
Radeon(TM) RX 5500M|285
Radeon R9 270X|285
RX xxx|285
ASUS R7 265 Series|281
Radeon(TM) R9 270|280
731F:C1|280
Radeon R9 M395X|279
Radeon(TM) R7 370 Series|279
Radeon Pro V520 MxGPU|278
Radeon R9 M395|277
FirePro D700|277
Radeon R9 270X|277
Radeon(TM) R9 200 Series|276
Radeon RX 5700|275
Radeong 0.4 on AMD POLARIS10 (DRM 3.8.0 / 4.9.11-1-ARCH, LLVM 3.9.1)|274
Radeon HD 7870 XT|274
Radeon R9 390X|272
Radeon(TM) RX 570 Graphics|272
Radeon HD 7870 GHz Edition|271
Radeon R9 390|270
FirePro D700|269
Radeon R9 M395|268
Radeon R9 270|268
Radeon RX 5700 / 5700 XT|267
ASUS R7 370 Series|267
FirePro W7000|266
Radeon(TM) Pro V7350x2|266
Radeon(TM) RX 470 Series|266
Radeon RX Vega 64 OpenGL Engine|266
Radeon RX 5500M|265
Radeon HD 7950/8950 OEM / R9 280|265
Radeon Vega Frontier Edition OpenGL Engine|265
Radeon 7950 x2|263
Radeon R9 270|263
Radeon VII|263
Radeon HD 7xxx|262
Video Controller (VGA Compatible)|262
Radeon(TM) RX 570|261
Radeon RX 5500 XT|261
Radeon R9 M295X|261
FirePro W7000 (FireGL V) Graphics Adapter|260
Radeon R9 M390|260
Radeon HD 7870 GHz Edition|260
Radeon R9 M390 (Bootcamp edition by bootcampdrivers.com)|260
Radeon R9 370|259
Metal|259
Radeon HD 7870|259
Radeon RX 470/570|258
Radeon(TM) R9 370|257
Radeon(TM) RX 460|257
Radeon RX 560 Series|256
Radeon R9 290|255
Radeon(TM) RX 560 Series|255
Radeon RX 5300M|254
FirePro W7000|254
Radeon R9 290X|253
67EF:E7|253
Radeon HD 7850|253
Radeon(TM) RX 460 Graphics|253
MSI Radeon RX 580|251
Radeon R9 290/390|250
FirePro W8100 (FireGL V)|249
Radeon Pro WX 9100 OpenGL Engine|248
Radeon(TM) RX 560|247
Radeon(TM) RX 560 Series|247
Radeon Pro Vega II Duo|247
Radeon HD 7970M|246
Radeon R9 290|245
Radeon RX 5600M|245
FirePro D300|245
Radeon(TM) RX 5600M Series|244
Radeon RX 590 Series|244
Radeon R7 370 Series|244
Radeon(TM) RX 560|243
FirePro D300|243
Radeon R9 390|243
Radeon RX 470/480/570/570X/580/580X|243
FirePro D300|243
Radeon(TM) R7 370 Series|242
Radeon R9 M390|241
Radeon RX 560X Series|241
FirePro D300|241
Radeon RX 560|240
Radeon R9 M290X|240
Gigabyte Vega 64 macOS Edition|239
Radeon Pro 580|238
Radeon Pro WX 4100|236
Radeon Pro WX 7100 OpenGL Engine|236
Radeon HD - FirePro D300|235
FirePro D500|234
Radeon Pro 580 OpenGL Engine|234
Radeon(TM) E9260|234
Radeon Pro WX 2100|233
FirePro D500|232
FirePro D500|232
Radeon(TM) RX 6500 XT|232
Radeon Pro 580X|231
Radeon HD 7850|231
Radeon Pro 575|231
Radeon Pro Vega 64X|231
ASUS R9 270 Series|230
Radeon Pro 450|230
Radeon(TM) RX 560 Graphics|230
Radeon R9 M290|229
Radeon Pro 560X|228
Radeon Pro 480/575|228
Pitcairn PRO Radeon HD 7850|228
ASUS Radeon RX 5700 XT|227
Radeon HD 7870|227
Radeon(TM) Pro WX 5100 Graphics|226
Radeon R9 370X|225
Radeon(TM) RX 480|224
Radeon HD7970M|224
FirePro S9000 (FireGL V)|223
Radeon RX 550 640SP / RX 560/560X|222
MSI / AMD RX 560 4G|222
Radeon RX 570 OpenGL Engine|222
MSI RX650|222
RX 480|221
MSI / AMD RX 560|221
Baffin AMD Radeon RX 560|221
MSI Baffin RX650|220
Radeon Pro 5700 XT|220
Radeon Pro 570|220
Radeon Pro 575 OpenGL Engine|219
Asus Radeon R9 270X|219
Radeon RX RX 560|218
Radeon RX 560 [Baffin]|218
RX 460|218
Radeon R9 370X|218
Radeon(TM) Pro WX 4100|217
ASUS R9 390 Series|217
Radeon Pro 5600M|217
R9 xxx|217
Radeon HD 7870 Series|217
Radeon Pro RX 560|216
R9 280X Dual-X|215
Radeon Pro 570 OpenGL Engine|214
RX 560|213
Radeon Pro WX 5100|213
FirePro D700|213
Radeon(TM) R9 390 Series|213
Radeon RX 480|212
Radeon RX 560|212
Radeon RX 5500/5500M / Pro 5500M|212
Radeon RX 550 640SP / RX 560/560X|211
Radeon R9 FURY / NANO Series|211
Sapphire Radeon RX 560|211
Radeon RX 460|210
Radeon RX550/550 Series|210
inc. Radeon RX 480|209
Radeon(TM) RX 550|208
Radeon R9 M290X|206
Radeon Pro 560 (Bootcamp XG edition by bootcampdrivers.com)|206
Radeon RX460|206
Radeon RX 550 Series|205
Custom GPU 0405|204
Radeon(TM) RX 460|204
ASUS AMD Radeon R9-990X|204
Radeon Pro 555X|203
Radeon RX 460/560|203
Radeon HD 7970X/8970/R9 280X|202
ASUS Radeon RX 550 Series|201
Radeon HD 8950|201
FirePro D500 (FireGL V)|201
RX 5700XT|200
Radeon 550 Series|200
Radeon HD 8470 + 7660D Dual Graphics|200
Radeon HD 7990|200
Radeon RX 560X|199
Radeon RX Vega|199
Radeon HD 7950 Series|198
Radeon(TM) RX 540|197
Radeon HD 6970|197
Radeon HD 7970/8970 / R9 280X|197
Radeon Navi14|197
Radeon Pro 560|197
Radeon RX 550|197
Radeon R9 285|196
Radeon Pro W5500|195
Radeon Pro Vega 56|195
Radeon Pro 460|195
Radeon RX 470/480|194
Radeon PRO Graphics|194
Radeon(TM) RX550|194
Radeon Pro 560X|193
Radeon Pro 570X|192
66AF:F1|192
Radeon RX Vega M GH|190
Radeon R9 M280X|190
Radeon RX 460/560D / Pro 450/455/460/555/555X/560/560X|189
Radeon R9 280,|188
Custom GPU 0405|188
Radeon HD 7790|187
Radeon(TM) RX 480 Graphics|187
Radeon Pro 455|186
Radeon R9 260|186
Radeon RX 580 Series|186
Radeon HD 7950/8950 OEM / R9 280|186
Radeon R9 290X|185
Radeon R9 M290X|184
Radeon(TM) R9 370 Series|184
Radeon Pro 555|184
Radeon R7 260X|184
Radeon HD 6950|183
FirePro W5000|183
Radeon(TM) R9 390X|182
R9 270X Devil|182
Radeon(TM) RX 470 Graphics (AMD POLARIS10 / DRM 3.23.0 / 4.15.0-1-MANJARO, LLVM 5.0.0)|182
Radeon R9 380|182
Radeon(TM) Pro WX 9100|182
Radeon(TM) R7 360 Series|181
Radeon RX 570 Series|181
Radeon(TM) R9 M470X|181
Radeon(TM) R7 360 Series|181
Radeon RX480|180
Radeon R7 200 Series|180
Radeon Pro WX 4150|180
Radeon Pro WX 4100|179
Radeon HD 8xxx|179
ASUS R9 295X2 Series|179
Radeon R9 390X|178
Radeon HD 5870|176
Radeon Pro 560|176
Radeon RX 580 OpenGL Engine|175
Radeon HD 8950|175
FirePro V(FireGL V) Graphics Adapter|175
ASUS Radeon RX 580 Series|174
Radeon Pro WX 4100|174
Radeon Pro 460|173
Radeon HD 2600 XT|173
Radeon Pro WX 4100|172
Radeon HD 8280|172
Radeon Pro 575|171
Radeon Pro 555X|171
Radeon Pro WX 4130/4150|170
Radeon RX Vega M GH Graphics|170
FirePro W5100|170
Radeon(TM) PRO WX 8200|169
Radeon Vega Frontier Edition|169
Radeon Pro 555X|168
FirePro D700|168
Radeon HD 6990|167
Radeon RX 470 OpenGL Engine|167
Radeon HD 7870 XT|167
Radeon RX 580|167
Radeon Polaris|167
FirePro V8800 (FireGL V)|166
Radeon RX 550|165
Radeon HD 6900 Series|165
FirePro W9100 (FireGL V)|164
RX 580|163
Radeon(TM) RX 580X|163
Radeon RX 550|163
Radeon HD 6870|163
Radeon R9 M395X OpenGL Engine|163
Radeon(TM) R9 360|163
Radeon(TM) HD 8490|162
Radeon R9 M295X|162
Radeon HD 7970M|162
Radeon R9 M380|161
FirePro W5100 (FireGL V) Graphics Adapter|161
ASUS HD7850 Series|161
FirePro M6100 FireGL V|161
Radeon Pro 455|160
Radeon RX 460/560D / Pro 450/455/460/555/555X/560/560X|160
Radeon R9 M395X|159
Radeon RX 560X|159
Radeon Pro 555|158
RadeonT RX 560X|158
Radeon Pro Vega 48|158
ASUS Radeon RX Vega|158
Radeon Pro WX 9100|158
Radeon Pro Vega 64|157
Powered By QiongB A9999999999|157
Radeon(TM) Pro Duo|157
FirePro D700|157
Radeon Pro WX 7100|156
Radeon RX 460|156
Radeon HD - FirePro D700 OpenGL Engine|156
Radeon R9 M290X|156
Radeon R9 M395 OpenGL Engine|155
Radeon Pro SSG|155
FirePro D300|155
ASUS R9 380 Series|155
Radeon(TM) R9 Series|153
Radeon RX 470/480/570/580|153
FirePro W8000|153
Cezanne|153
Radeon(TM) Graphics|153
FirePro D300|153
Radeon(TM) R9 Fury Series|153
Radeon R9 M395|152
Radeon RX 570|152
Radeon R9 270X Series|152
Radeon Pro 5300M|152
R9 xxx|152
Radeon Pro 555|152
FirePro D500|151
Radeon HD 5850|151
FirePro D300|150
Radeon(TM) R9 290X|150
66AF:F0|149
Radeon(TM) RX 560|149
Radeon R9 M290|148
Radeon Instinct MI25 MxGPU|148
FirePro V7800 (FireGL) Graphics Adapter|148
Radeon(TM) R9 M470|147
Advanced Micro Devices, Inc. [AMD/ATI] Fiji [Radeon R9 FURY / NANO Series]|147
Radeon HD 5870 Series|147
Radeon(TM) E9550|147
Radeon HD 7850|147
Radeon HD 7770|147
Radeon Pro Vega 20|146
Radeon R9 290/390|146
Radeon Pro 450|146
Radeon RX 560X Series|146
Radeon HD 6850|146
Radeon R9 270 1024SP|145
ASUS R9 280X Series|145
Radeon Pro 450|145
Radeon(TM) R9 390 Series|145
FirePro V7900 (FireGL V)|145
Radeon R9 370X|145
Radeon(TM) RX 560 Series|144
ASUS R7 250X|144
Radeon RX 480 OpenGL Engine|144
Radeon R9 290X|144
Radeon RX 550X|144
Radeon(TM) RX 580|144
ASUS Radeon(TM) RX 470 Series|143
Baffin Radeon RX 560|143
Radeon R9 M295X (Bootcamp edition by bootcampdrivers.com)|143
Radeon R9 M295X Mac Edition|143
Radeon R7 Series / HD 9000 Series|142
Advanced Micro Devices [AMD] nee ATI Device|142
Radeon(TM) Pro WX 7100 Graphics|142
Radeon RX 640|142
FirePro D500|141
Radeon HD 7900 Series|141
Radeon R9 290|141
Radeon R7 250X|141
Radeon(TM) RX Vega|140
Radeon 630 Series|140
FirePro W8100 Graphic Adapter|140
Radeon R9 FURY / NANO Series|140
Radeon R9 M390|140
Radeon Pro WX 3100|140
Radeon R9 290|140
Radeon(TM) R9 370|140
FirePro V7900|139
Radeon HD 7970|139
Radeon HD - FirePro D500 OpenGL Engine|139
Radeon HD - FirePro D300 OpenGL Engine|139
Radeon Pro 580|139
Radeon HD 7770|139
Radeon HD - FirePro D500 OpenGL Engine|139
Radeon 540/540X/550/550X / RX 540X/550/550X|138
FirePro S9050|138
Radeon(TM) RX 480 Graphics|138
Radeon(TM) R9 M390X|137
Radeon Vega 64|137
Radeon(TM) Graphics|137
Tonga PRO GL [FirePro W7100]|136
HD7950 Martin Ver.|136
Radeon HD 7990|135
Radeon R9 280x|135
Radeon RX550/550 Series|135
HD7950 MARTIN REV.|134
Radeon RX560|134
Radeon R7 250X Series|134
Radeon R9 M390 OpenGL Engine|134
ASUS R7 250X|134
Radeon HD6870|134
Radeon R9 270X|134
Radeon Pro 5500 XT|134
Radeon(TM) RX 480|133
Radeon R9 270|133
ASUS HD7970 Series|133
Radeon RX 540|133
Radeon 500 Series|132
Radeon HD 5970|132
Radeon HD 7770 GHz Edition|132
Radeon HD 5870|132
Radeon 540X Series|132
Radeon HD 6870 Series|132
Radeon(TM) RX 470 Graphics|132
Radeon HD - FirePro D300 OpenGL Engine|132
Radeon HD 7xxx|131
Radeon HD 5970|131
RadeonT 540X|131
Radeon R7 Graphics + R7 350 Dual Graphics|131
Radeon R9 M295X Mac Edition / R9 380X|131
Firepro M5100|131
Radeon(TM) R9 M375X|131
Radeon R9 280x|130
Radeon(TM) RX 560X|130
Radeon HD 6990|130
Radeon Pro 5500M|130
Radeon Pro WX 5100 OpenGL Engine|129
Radeon R9 M395X (Bootcamp edition by bootcampdrivers.com)|129
Radeon R9 M380|128
FirePro W5170M|128
Radeon R9 280|128
FirePro W5000 (FireGL V)|128
Radeon(TM) RX 5600M Series|128
Radeon RX 560D|128
FirePro D500 (FireGL V)|128
Radeon(TM) Pro WX 5100 Graphics|128
Radeon(TM) RX Vega 11 Graphics|128
Radeon HD 7970|127
Radeon R9 370|127
Radeon HD 7770|127
Radeon R9 M395X|126
Radeon HD 7660D|126
Radeon HD 8970|126
Radeon R9 200 Series|126
Radeon Pro WX 3200 Series|126
Radeon HD 7800 Series|125
Radeon R9 285/380|125
Radeon R9 270X|124
FirePro W2100|124
FirePro W7170M|124
Radeon HD 7870 GHz Edition|123
Radeong 0.4 on AMD TONGA (DRM 3.1.0, LLVM 3.9.0)|123
Radeon RX 460|123
Radeon HD 5970 Series|123
Radeon R9 M380|122
Radeon R9 M395|122
Asus Radeon R9 280|122
Radeon HD 6850 Series|122
Radeon(TM) RX 540|122
Radeon HD 6900 Series|122
Device|122
67DF:C4|121
Radeon HD 6950|121
FirePro D300 (FireGL V)|121
Radeon RX 570|121
Radeon HD 5850 Series|121
Radeon HD 7870 XT|121
Radeon HD 7950|121
FirePro V7800 (FireGL) Graphics Adapter|121
Radeon HD 6850|121
Radeon HD 7950|120
Radeon HD 7870 GHz Edition|120
Radeon R7 370 / R9 270X/370X|120
Radeon HD 6870|120
Radeon Pro V340|120
ASUS Radeon RX 570 Series|119
Radeon(TM) R7 370 Series Graphics|119
Radeon(TM) RX 580 Graphics|119
Radeon(TM) RX 470 Graphics|119
Radeon HD 5870|119
Radeon HD 7950/8950 / R9 280|119
Radeon HD 6790|119
Radeon(TM) RX580|119
ASUS ARES2|119
Radeon(TM) R9 380 Series|118
Radeon HD 7750|118
Radeon Pro 560X|118
Radeon R7 250E|118
Radeon 550 Series|118
Radeon RX 560|118
Radeon Pro WX 5100|117
Radeon R7 370 / R9 270X/370|117
Radeon HD 7800 Series|117
FirePro W5000 (FireGL V) Graphics Adapter|117
Radeon HD 7750 Series|116
Radeon HD 5870|116
Radeon R7 450|115
FirePro R5000|115
Radeon R7 370 Series|115
FirePro W9100|114
Radeon R7 370 / R9 270/370|114
Radeon(TM) 540 Graphics|114
Radeon HD 6510 Series|114
Radeon(TM) R7 370 Series|113
Sapphire Radeon HD6870|113
Firepro M5100|113
Radeon(TM) RX 550|113
Radeon(TM) Pro Duo|113
Radeon 540/540X/550/550X / RX 540X/550/550X|113
Radeon Pro 570|112
Radeon R9 280|112
FirePro D700 (FireGL V)|112
(ATI) FirePro M6000 (FireGL V) Mobility Pro Graphics|112
Renoir|112
Radeon 540X Series (POLARIS12, DRM 3.40.0, 5.10.56-1-MANJARO, LLVM 12.0.1)|112
Radeon HD 6970|112
Radeon HD 8770|112
Radeon Pro WX3200 Graphics|112
Radeon(TM) R9 270|111
Radeon R9 270X|111
Radeon R9 285|111
Radeon HD 7800M Series|111
Radeon(TM) R7 370 Series|111
Radeon HD 7870M Series|111
Radeon Pro 450/550|110
Radeon HD 7000 series|110
Radeon HD 7870|110
Radeon Pro 555X|110
Radeon RX590 GME|109
FirePro S10000|109
Radeon HD 7870M|109
Radeon HD 5800 Series|109
Radeon HD 6970M|108
ASUS HD7770 Series|108
Radeon(TM) R9 M360|108
Radeon(TM) RX 550X|107
Radeon R9 285|107
Radeon HD 6900M Series|107
Radeon HD 7870 GHz Edition|107
FirePro S7000|107
Radeon R9 M370X|106
Radeon Pro WX 4100|106
Radeon HD 6800 Series|106
Radeon HD 7750|106
Radeon Pro 455 OpenGL Engine|106
ASUS R7 370 Series|106
Radeon Pro 560|105
Radeon HD 6870|105
FirePro D300 (FireGL V)|105
Radeon HD 6970M|105
Radeon HD 7850|105
Radeon(TM) R9 200 Series|104
ASUS HD7750 Series|104
Radeon HD 6970M OpenGL Engine|104
Asus Radeon R7 250|104
Radeon R7 370 / R9 270X/370|104
Radeon R9 M395X (Bootcamp XG edition by bootcampdrivers.com)|103
Radeon(TM) RX 560|103
Radeon RX Vega|103
Radeon(TM) Pro W5500M|103
Radeon R9 270|103
Radeon Pro 560X|103
Radeon HD 5850|103
FirePro S7150|103
Radeon(TM) RX 580|103
Radeon(TM) R9 370 Series|103
ASUS Radeon(TM) RX 480 Series|102
Radeon Graphics Processor|102
Radeon R9 M370X|102
FirePro W7100|102
Radeon R9 M370X|101
Radeon Pro 460 OpenGL Engine|101
Radeon RX 580 Series|101
Radeon 500 Series|100
Radeon Pro 555|100
Radeon(TM) Pro WX 4100|100
Asus Radeon R7 260X|100
Radeon(TM) RX Vega 10 Graphics|100
Radeon HD 7790|99
Radeon Pro 450 OpenGL Engine|99
Radeon HD 7790/8770 / R7 360 / R9 260/360|99
FirePro M4000 Mobility Pro Graphics|99
Radeon HD 7970M|99
Radeon R9 M270X|99
Radeon RX 550|98
Radeon HD 6850|98
Radeon(TM) RX 460|98
Radeon(TM) RX Vega11 Graphics|98
Radeon(TM) RX 460 Graphics|98
Radeon Pro 460|97
Radeon HD 7800 Series|97
Matrox C680 PCIe x16|97
Radeon(TM) RX 550|97
Radeon HD 5770|96
Radeon HD 8670D + 7700 Dual Graphics|96
Radeon HD 7790|96
Radeon 630 Series|96
Radeon RX 560 Series|96
Firepro M6100|95
Radeon HD 6700 Series|95
67EF:E7|95
Radeon(TM) Vega 10 Graphics|95
Radeon HD 6900M Series|94
Radeon Pro 455|94
FirePro M4000|94
Radeon R9 260|94
FirePro W7000|94
Radeon Instinct MI25|93
Radeon HD 8870M|93
Radeon(TM) Vega 11 Graphics|93
Radeon Pro 450|93
FirePro W5000|92
Radeon HD 6770|92
Radeon(TM) RX560|92
Radeon(TM) Graphics|91
ASUS Radeon(TM) RX 460 Series|91
Radeon(TM) Vega 8 Graphics|91
Radeon(TM) Graphics|91
FirePro W5100 Graphics Adapter|90
Radeon(TM) Pro WX Series|90
Renoir|90
STRATO XT (6646)|89
Radeon(TM) Pro WX 4150 Graphics|89
Radeon E8870MXM|89
Radeon HD 8970M|89
FirePro M6100 FireGL V|89
Radeon HD 7770|89
FirePro W5100 (FireGL V) Graphics Adapter|89
Radeon HD 6970M|89
Radeon Pro 460|88
Radeon RX Vega 8 Graphics|88
Radeon HD 7700 Series|88
Radeon(TM) R9 M360|88
ASUS R7 265 Series|88
Radeon RX Vega M GL Graphics|88
ASUS Radeon RX 550 Series|88
Radeon R7 360 / R9 360|88
Radeon HD 6950|86
Radeon HD 6790|86
Radeon Pro WX 2100|86
ASUS Radeon RX 560 Series|86
Radeon HD 5750|86
Radeon(TM) RX 640|86
Radeon HD 8870M|85
Radeon R7 260X|85
Radeon Pro WX 7100|85
Radeon(TM) R7 360 Series|85
Radeon Infoshock\u2122 RX 460 Graphics|85
FirePro W5170M|85
Radeon R9 M295X|85
FirePro W8100|85
Radeon HD 6750|85
FirePro W5170M|85
FirePro V5800 (FireGL) Graphics Adapter|84
ASUS R7 250X|84
67E8:00|84
Radeon(TM) RX 550X|84
Radeon(TM) R7 350|84
Radeon(TM) E9260|84
Radeon Sky 500|84
Radeon R9 M270X|83
Radeon(TM) R9 350|83
Radeon(TM) RX Vega 11 Graphics|83
Firepro M6100|83
Radeon R9 360|82
FirePro V7900|82
FirePro V5800 (FireGL V)|82
Radeon HD 8830M|82
Radeon Pro 450|82
Radeon HD 8950|82
6980:00|82
FirePro W5100 (FireGL V)|81
Radeon E8870|81
Radeon HD 7750 Series|81
Radeon HD 7850 / R7 265 / R9 270 1024SP|81
FirePro\u2122 W4190M|80
Radeon HD 5770|80
Radeon(TM) R7 360 Series|80
FirePro M5100 FireGL V|80
Radeon RX 470/480/580|80
Radeon(TM) RX 460 Graphics|79
Radeon HD 6700 Series|79
Mobility Radeon HD 5870|79
Radeon R9 255|79
Radeon 535 Series|79
Radeon R9 M380 OpenGL Engine|78
Radeon(TM) RX 550|78
Radeon R9 M380|78
Radeon R7 250X|78
Saphire Radeon RX 580|78
Radeong 0.4 on AMD BONAIRE (DRM 2.43.0, LLVM 3.8.0)|78
Radeon HD 5000|78
Radeon HD 5770|77
Radeon RX 460|77
FirePro W4300|77
Radeon 530 Series|77
Radeon(TM) 540X|77
Radeon R9 M370X OpenGL Engine|77
FirePro V5900 (FireGL V)|77
Radeon Pro WX 4100|77
SAPPHIRE HD 5770|77
Radeon Pro WX 3100|76
FirePro W5100|76
Radeon(TM) Pro Graphics|76
Radeon Pro WX 3100|76
67FF:C8|76
Radeon(TM) HD8970M|76
Firepro M5100|76
Radeon(TM) R9 M375X|75
Radeon 550X Series|75
Radeon R9 M390|75
Radeon(TM) Vega 9 Graphics|75
FirePro V5900 (FireGL V) Graphics Adapter|74
Radeon HD 8570|74
Radeon(TM) RX 475M|74
Radeon HD 6770|74
Radeon RX 550 Series|74
Radeon RX 550|74
FirePro M4000|74
Radeon RX 460/560D / Pro 450/455/460/560|74
Radeon Pro 560|74
Radeon Vega Series / Radeon Vega Mobile Series|74
Radeon Pro 455|74
Radeon HD 7870M Series|74
Radeon(TM) R7 430|74
Radeon 620 Series|73
Radeon HD 7770 GHz Edition|73
Radeon HD 7770|73
Radeon(TM) R9 360 Series|73
Radeon HD 7770/8760 / R7 250X|73
Radeon(TM) 530|73
15DD Graphics|73
Radeon RX Vega M GL Graphics|73
Radeon(TM) R9 380|72
Radeon(TM) 530 series|72
Radeon R7 200 Series|72
Embedded Radeon E9171|72
Radeon Pro WX3200 Graphics|71
Radeon HD 8800M Series|71
Radeon R9 M375|70
Radeon HD 5770|70
Radeon Pro 555|70
Radeon R7 250E|70
Radeon HD 7750|70
Radeon Pro 555X|70
Radeon(TM) Vega 8 Mobile Graphics|70
Radeon(TM) R9 M380|69
Radeon R7 260X/360|69
Barco MXRT 7600 (WDDM)|69
Radeon(TM) Vega 10 Graphics|69
Radeon HD 7750|69
Radeon R9 M370X|69
Radeon(TM) R2E Graphics|69
Radeon R9\u2122 M370X|68
FirePro V4900 (FireGL V)|68
Radeon(TM) RX Vega11 Graphics|68
Radeon HD 5770|68
Radeon(TM) Renoir Graphics D1|68
Radeon HD 7600 Series|67
Radeon R5 340|67
Radeon(TM) Vega 9 Graphics|67
FirePro W4100 (FireGL V) Graphics Adapter|67
694E:C0|67
694C:C0|67
Radeon R7 250|66
Radeon HD 6750|66
RAVEN (DRM 3.36.0, 5.6.5-AMD, LLVM 9.0.1)|66
FirePro W600|66
Radeon R9 255|66
Radeon RX 470|66
Radeon(TM) R7 250|66
FirePro V5900|65
Radeon(TM) 530|65
Radeon Pro WX Vega M GL Graphics|65
Radeon RX 470/480|65
Radeon HD 5750|65
Radeon R7 260X|65
FirePro V5900 (FireGL V) Graphics Adapter|65
FirePro W4100 Graphics Adapter|65
Radeon HD 6700 Green Edition|65
Radeon R9 M370X|65
Radeon(TM) R7 350X|64
Radeon(TM) R7 350X|64
Radeon HD 7670|64
Radeon R9 M200X Series|64
Radeon R9 M370X|64
Radeon HD 6670|63
Radeon(TM) HD 8350|63
Radeon 530X Series|63
Radeon(TM) R9 360|63
Radeon(TM) Pro WX 4150 Graphics|63
67EF:C5|63
Radeon R7 Graphics + R5 340 Dual Graphics|62
Radeon HD 5670|62
Radeon RX 470/570|62
Radeon 530 Series|62
Radeon R7 250 Series|62
Radeon R7 430|62
Radeon HD 6750 Graphics|62
Radeon(TM) R9 M385X|62
Radeon(TM) Vega 10 Mobile Graphics|62
FirePro V5900 (FireGL V)|61
FirePro V5800 (FireGL V)|61
Radeon(TM) Vega 8 Graphics|61
FirePro V4800 (FireGL V)|61
Radeon HD 7600 Series|61
Radeon(TM) Vega 6 Graphics|61
Radeon(TM) R9 200 Series|61
Radeon HD 8850M|61
Radeon RX460|61
Radeon R7 M460|61
Radeon RX 640 Series|60
Radeon 530|60
Radeon HD 5600/5700|60
Radeon HD 5750 Series|60
Radeon R7 Graphics + R7 200 Dual Graphics|60
Radeon R7 450|60
FirePro V4900|60
Firepro W6150M|60
ASUS R7 250 Series|60
Radeon(TM) RX 560 Graphics|60
Radeon(TM) R7 M370|59
FirePro M4000 Mobility Pro Graphics|59
Radeon R5 430|59
Radeon R9 M275X|59
FirePro V5800 (FireGL) Graphics Adapter|59
Mobility Radeon HD 5870|59
Radeon(TM) R9 M385X|58
Radeon HD 7750M|58
Radeon HD 5670|58
Radeon HD 8850M|58
Radeon HD 7700M Series|58
Radeon HD 8670D + R7 200 Dual Graphics|58
Radeon R7 Series / HD 9000 Series|57
Radeon HD 6730M/6770M|57
Radeon(TM) 625|57
Radeon(TM) R9 M385|57
Radeon HD 5870M|56
Radeon 610 Series|56
FirePro W4100|56
FirePro M6000 Mobility Pro Graphics|56
Radeon RX 540 Series|56
Radeon R7 240|56
Radeon HD 7560D + HD 7700 Dual Graphics|56
Radeon R9 M370X (Bootcamp XG edition by bootcampdrivers.com)|56
FirePro V4900 (ATI FireGL)|55
Radeon(TM) R7 M350|55
FirePro M6000 Mobility Pro Graphics|55
67FF:08|55
Radeon HD 5750|55
Radeon HD 7570|55
Radeon(TM) Vega 11 Graphics|55
Radeon R7 M460|55
Radeon HD 5750 OpenGL Engine|55
Radeon(TM) R7 M370|55
Radeon HD 6730M/6770M/7690M XT|55
Radeon E8860|55
Radeon HD 8790M|54
Radeon HD 6770M|54
Radeon R7 M440|54
Radeon(TM) R7 350|54
Radeon(TM) R7 350X|54
Radeon HD 7870 XT|54
Radeon HD 7800M Series|54
Radeon 520|54
Radeon R7 M370|53
FirePro W4150M FireGL V|53
(ATI) FirePro M4000 (FireGL V) Mobility Pro Graphics|53
Radeon R9 M200X Series|53
Radeon HD 6700M/7700M/7900M Series|53
Radeon(TM) 620|53
Picasso|53
Radeon(TM) RX Vega 10 Graphics|53
67EF:CF|53
Radeon(TM) Vega 3 Graphics|53
Radeon R7 250|53
FirePro W4190M|53
Radeon(TM) Vega 8 Graphics|53
694C:C0|52
Radeon HD 5670 Series|52
Radeon(TM) RX Vega 11 Graphics|52
Radeon HD 6770M OpenGL Engine|52
Radeon(TM) M535DX|52
FirePro V4800 (FireGL V)|52
Radeon R7 350 Series|52
Barco MXRT 5600 (WDDM)|51
Radeon 630|51
FirePro V4900 (FireGL V)|51
FirePro V4900 (FireGL V) Graphics Adapter|51
Radeon(TM) Vega 3 Mobile Graphics|51
Radeon 535 Series|51
Radeon R7 Graphics|51
Radeon HD 5670|51
FirePro W4170M|50
Radeon HD 8700M Series|50
Radeon HD 8670 / R7 250/350|50
Picasso|50
FirePro V4800 (FireGL) Graphics Adapter|50
Mobility Radeon HD 5850|49
OPAL XT/GL (6604)|49
Radeon R5 M335|49
Matrox C900 PCIe x16|49
Radeon HD 7670|49
Radeon HD 6750M|49
Radeon(TM) 535|49
Radeon 540X Series|49
Radeon R9 M275|49
Radeon(TM) RX 640|49
Radeon HD 5700 Series|48
Radeon R5 M230 Series|48
Firepro M6100|48
Radeon(TM) R9 M375|48
Radeon R5 430|48
Radeon(TM) R7 250|47
Radeon R9 M265X|47
Radeon HD 6730M/6770M|47
Radeon HD 8670D|47
Radeon R5 340|47
Radeon 520|47
Radeon(TM) 520|47
FirePro V (FireGL V) Graphics Adapter|47
FirePro M5100 FireGL V|46
Radeon HD 6670|46
Radeon R7 M260X|46
Radeon HD 8550|46
FirePro M4150|46
Radeon HD 6670|46
Radeon HD 7700 Series|46
FirePro M4170|46
Radeon HD 7570|46
Radeon HD 8670D + HD 6670 Dual Graphics|45
699F:C1|45
Radeon R7 Graphics|45
Radeon(TM) R7 M340|45
FirePro W4170M (FireGL V)|45
Radeon(TM) HD 8500M/8700M|45
Radeon R7 M340|44
FirePro M5950|44
Radeon HD 8570D + R7 240 Dual Graphics|44
Radeon HD 6770M|44
Radeon HD 7730M|44
Radeon HD 8790M|44
Radeon HD 7750|44
Radeon HD 8690A|44
Mobility Radeon HD 5730 / 6570M|44
Radeon R9 A375|44
Radeon(TM) R8 M445DX|43
FirePro V (FireGL V) Graphics Adapter|43
Radeon HD 7750/8740 / R7 250E|43
FirePro V3900|43
Radeon HD 7600A Series|43
Radeon(TM) R7 200 Series Graphics|43
Radeon R7 Graphics|43
Radeon HD 6770M|43
Radeon R7 M260 Series|43
Radeon R7 M360|43
Radeon HD 8970M|43
Radeon(TM) Vega 6 Graphics|43
Radeon HD 8570|42
Radeon R7 M440|42
Radeon HD 8670A/8670M/8750M|42
Mobility Radeon HD 5850|42
Radeon HD 8750M|42
Embedded Radeon E9173|42
Radeon(TM) R7 M440|42
Radeon HD 8730M|42
Radeon R7 240 + HD 8570D Dual Graphics|42
FirePro V3900|42
Radeon(TM) 535DX|42
Radeon(TM) 520|42
Radeon(TM) Vega 8 Mobile Graphics|42
Radeon(TM) Vega 8 Graphics|42
Radeon(TM) Vega 2 Graphics|42
Radeon(TM) R9 M375|42
Radeon(TM) R8 M445DX|41
Radeon HD 6750M|41
RadeonT 540X|41
Radeon(TM) 530|41
Radeon HD 7560D + HD 6670 Dual Graphics|41
Radeon R7 240|41
Radeon(TM) R7 M360|41
Radeon R9 M280X|41
Radeon HD 7520G + HD 7600M Dual Graphics|41
Radeon(TM) R7 M445|41
Radeon Vega 8 Mobile|40
Radeon(TM) R9 255|40
Radeon R7 M260X|40
Radeon R8 M535DX|40
Radeon R7 240/340|40
Radeon(TM) R9 M375|40
Radeon(TM) R7 Graphics|40
Radeon(TM) R5 M420|40
Radeon HD 6750M|40
Radeon R9 M265X|40
Radeon R7 M340|40
Radeon HD 6570|40
Radeon HD 7500/7600 Series|39
Radeon R7 430|39
FirePro W2100|39
Radeon HD 7730M|39
Radeon HD 8670D|39
Radeon R5 M255|39
Radeon HD 7560D + HD 6570 Dual Graphics|39
Radeon RX Vega|39
Radeon R7 240 Series|39
Radeon(TM) R7 M445|39
Radeon HD 6800M Series|39
Radeon HD 8690M|39
Radeon HD 7660D + HD 6570 Dual Graphics|39
Radeon R7 M370|39
Radeon(TM) HD 6650M|38
Radeon R5 M435|38
Radeon HD 6500 Series|38
Radeon R7 Graphics|38
FirePro M7820|38
Radeon(TM) R8 M445DX Graphics|38
Radeon HD 5570|38
Radeon HD 8650G + 8750M Dual Graphics|38
Radeon HD 8670A/8670M/8750M|38
Radeon HD 6650M|38
Radeon R7 M260 Series|38
Radeon HD 7660G + 7600M Dual Graphics|38
Radeon HD 7600M Series|38
Radeon HD 7670M|37
Radeon. HD 7670M|37
Radeon(TM) R7 M265|37
Mobility Radeon HD 5000|37
Radeon HD 7500M/7600M Series|37
Radeon R5/R6/R7 Graphics|37
Radeon R7 M270|37
Radeon HD 8650G + HD 7600M Dual Graphics|37
Firepro M5100|37
Radeon HD 7730M|37
Radeon HD 8570D|37
Radeon(TM) HD 7650A Graphics|37
Radeon R7 Graphics|37
Radeon(TM) RX Vega 10 Graphics|37
Radeon HD 7600A Series|36
Radeon R7 M270|36
Radeon HD 7660D + HD 6670 Dual Graphics|36
Radeon HD 7570M/HD 7670M Graphics|36
Radeon 6600M and 6700M Series|36
Radeon R7 Graphics + R7 200 Dual Graphics|36
Radeon HD 7570 Series|36
Radeon HD 8750M|36
Radeon HD 6550D|36
FirePro M5950|36
Radeon HD 7660G + 7600M Dual Graphics|36
Radeon HD 6550D|36
Radeon HD 7600M/7700M Series|36
Radeon(TM) Vega 3 Graphics|36
Radeon(TM) 625|36
Mobility Radeon HD 5570|36
Radeon HD8730|36
Radeon(TM) R9 M380|36
Radeon(TM) R5 240|36
Radeon HD 7650M|35
Radeon HD 7560D|35
Radeon HD 8690M|35
Radeon HD 8650G + 8750M Dual Graphics|35
Radeon HD 8650G + HD 8750M Dual Graphics|35
Radeon HD 8650G + HD 8570M Dual Graphics|35
Radeon HD 6570|35
Radeon HD 7650M|35
Radeon HD 6630M/6650M/6750M/7670M/7690M|35
Radeon HD 6500 Series|35
Radeon(TM) 520|35
Radeon HD 8570D|35
Radeon HD 7600M Series|35
Radeon R7 Graphics|35
Radeon HD 7660G + 8670M Dual Graphics|35
Radeon R7 200 Series|35
Radeon HD 6630M/6650M/6750M/7670M/7690M|35
Radeon R7 M265|35
Radeon HD 8650G + HD 8750M Dual Graphics|35
Radeon HD 8650G + 8670M Dual Graphics|35
Radeon R7 Graphics|34
Radeon HD 6630M Series|34
Radeon(TM) 520|34
Radeon HD 7660D|34
ASUS R7 240 Series|34
Radeon R9 M280X|34
Radeon(TM) R5 340|34
Radeon HD 8550G + 8600/8700M Dual Graphics|34
Radeon R7 Graphics|34
Radeon(TM) HD 8500M/8700M|34
Radeon HD 7660G + HD 7600M Dual Graphics|34
Radeon HD 7670M|34
Radeon(TM) R5 M430|34
Radeon HD 8650G + 8500M Dual Graphics|34
Radeon(TM) R5 340X|34
Radeon(TM) R5 230 series|34
Radeon HD 8550|34
FirePro W2100 (FireGL V)|34
Firepro M4100 FireGL V|34
Radeon HD 6550D|34
Radeon HD 6630M|34
Radeon(TM) R9 M375|34
Radeon HD 5670 OpenGL Engine|33
Radeon HD 5670|33
Radeon R7 Graphics|33
Radeon HD 7660G|33
Radeon HD 5570|33
Radeon HD 7550M/7650M Graphics|33
Radeon HD 7660D|33
Radeon HD 7560D|33
Radeon HD 7560D|33
Radeon R5 M445 Series|33
Radeon R5 M315|33
Radeon HD 8570D|33
Radeon R7 M265|33
Radeon HD 7640G + HD 7500/7600 Dual Graphics|33
Radeon R7 Graphics|33
Radeon HD 8500M Series|33
Mobility Radeon HD 5000|33
Radeon(TM) R7 M360|33
Firepro M4100|33
Radeon(TM) Vega 10 Graphics|32
Radeon HD 7500M/7600M Series|32
Radeon HD 8550G + HD 8600/8700M Dual Graphics|32
Radeon HD 7660G|32
Radeon HD 7350|32
Radeon HD 8470D + HD 6450 Dual Graphics|32
Radeon R7 Graphics|32
Radeon HD 8730M|32
Radeon HD 7640G + HD 7400M Dual Graphics|32
Radeon HD 8690A|32
Radeon HD 8650G + 8600/8700M Dual Graphics|32
Radeon R7|32
Radeon(TM) Vega 11 Graphics|32
Radeon(TM) Vega 8 Graphics|32
Radeon R5 M200 Series|32
Radeon(TM) R5 M335|32
Radeon(TM) R5 M430|32
Radeon HD 8550G + HD 8570M Dual Graphics|32
Radeon HD 7650M Series|32
Radeon R7 250 Series|32
Radeon(TM) R7 M460|32
Radeon HD 6550D|32
Radeon HD 7660G + HD 7600M Dual Graphics|32
Radeon(TM) Vega 3 Graphics|32
Radeon HD 8470D|32
Radeon R8 M365DX|31
Madison [Mobility Radeon HD 5650/5750 / 6530M/6550M]|31
Radeon HD 6630M/6650M/6750M/7670M/7690M|31
Radeon R7 Graphics|31
Radeon E6760|31
Radeon R7 Graphics|31
Radeon(TM) Vega 8 Graphics|31
Radeon(TM) R5 M330|31
Radeon HD 8670A/8670M/8690M|31
Radeon R7 A360|31
Radeon HD 8650G + HD 8600M Dual Graphics|31
Radeon R5 M200 / HD 8500M Series|31
Radeon(TM) R8 M435DX|30
Radeon HD 7640G + HD 7670M Dual Graphics|30
Radeon(TM) Vega 10 Mobile Graphics|30
Radeon R7 Graphics|30
Radeon Pro 450/550|30
Radeon HD 8800M Series|30
Radeon HD 8470D|30
Radeon HD 7660D|30
Radeon HD 8610G + HD 8600M Dual Graphics|30
Radeon HD 7660G + 7670M Dual Graphics|30
Radeon(TM) Vega 8 Mobile Graphics|30
Radeon 610 Series|30
Radeon(TM) R5 M330|30
Radeon HD 7660G|30
Radeon HD 7640G|30
Radeon R8 M365DX|30
Radeon HD 8550G|29
Radeon HD 7540D|29
Radeon HD 7640G|29
Radeon HD 8650G|29
Radeon(TM) R7 Graphics|29
Radeon(TM) RX Vega 11 Graphics|29
Radeon HD 6650M|29
Radeon HD 7660G|29
Radeon 6600M and 6700M Series|29
Radeon HD 7640G + HD 7400M Dual Graphics|29
Radeon(TM) R5 340X|29
Radeon R5 435|29
Radeon HD 6500M/5600/5700 Series|29
Firepro M4100 FireGL V|29
Radeon R7 Graphics|29
Radeon(TM) 535|29
Radeon R7 240 Series|29
Radeon(TM) R7|29
Radeon HD 8550G + 8500M Dual Graphics|28
Radeon(TM) 530|28
Radeon HD 5650 Series|28
Radeon HD 7570M|28
Radeon HD 7570M|28
ASUS R7 240 Series|28
Radeon HD 6570|28
Radeon(TM) Vega 8 Graphics|28
Radeon E8860|28
Radeon(TM) 530 series|28
Radeon(TM) R5 M315|28
Radeon HD 5500 Series|28
Radeon HD 8610G + HD 8670M Dual Graphics|28
Radeon(TM) R6|28
Radeon R9 M275X|28
Radeon HD 8550G + R5 M230 Dual Graphics|28
Radeon HD 8470D|28
Radeon HD 8670D|28
Radeon HD 7620G|28
Radeon(TM) R8 M350DX|28
Radeon HD 8470D|27
Radeon(TM) R8 M445DX|27
Radeon(TM) R7 Graphics|27
Radeon(TM) R5 Graphics|27
Radeon(TM) R7 M340|27
Radeon(TM) R6 Graphics|27
Radeon R6 Graphics|27
Radeon R5 M230 Series|27
Radeon HD 8650G|27
Radeon HD 7480D|27
Radeon(TM) R8 M445DX Graphics|27
Radeon(TM) R6 Graphics|27
Radeon R7 Graphics|27
Radeon R6|27
Radeon R5 M255|27
Radeon(TM) Vega 3 Graphics|27
Radeon 550X|27
Radeon(TM) Vega 3 Graphics|27
Radeon HD 7500/7600 Series|27
Radeon HD 8650G|27
Radeon HD 5500 Series|27
Radeon HD 7610M|27
Radeon Instinct MI25 MxGPU|27
Radeon(TM) HD8530M|27
Radeon R7 M260|27
Radeon(TM) R8 M445DX|27
Radeon R7 Graphics|26
Radeon HD 8500M|26
Radeon(TM) R7 M260DX|26
Radeon HD 8410G|26
Radeon HD 8670A/8670M/8690M|26
Radeon(TM) R7 M360|26
Radeon(TM) R7 M360|26
Radeon HD 8670D|26
Radeon R9 M275|26
Radeon HD 7640G|26
Radeon(TM) R7 Graphics|26
MxGPU|26
Radeon HD 8370D|26
Radeon HD 6620G|25
Radeon HD 7560D|25
Radeon HD 8570 / R5 430 / R7 240/340 / Radeon 520|25
Radeon R4 Graphics|25
Radeon R6 Graphics|25
Radeon R7 Graphics|25
Radeon(TM) 535DX|25
Radeon(TM) 540 Graphics|25
Radeon(TM) R5 M330|25
Radeon HD 6530D|25
Radeon R6 Graphics|25
Radeon HD 8510G|25
Radeon HD 6620G|25
Radeon R7 M360|24
Radeon(TM) R6 Graphics|24
Radeon R7 M260|24
Radeon HD 8610G + HD 8600M Dual Graphics|24
Radeon(TM) R6 Graphics|24
Radeon R5 M200 / HD 8500M Series|24
Radeon R7 Graphics|24
Radeon HD 7600G|24
Radeon R7 Graphics|24
Radeon HD 6620G|24
Radeon R5 M330|24
Radeon(TM) R5 240|24
Radeon(TM) HD 6620G|24
FirePro V3800 (FireGL V)|24
Radeon HD 6520G|24
Radeon R7 Graphics|24
Radeon HD 7520G|24
Radeon(TM) R6 Graphics|24
Radeon(TM) R7 M260|24
Radeon RX 540 Series|24
Radeon(TM) R5 M320|24
Radeon HD 8500M|23
Radeon R5 M230|23
Radeon HD 8670M|23
Radeon HD 8550G + HD 8750M Dual Graphics|23
Radeon HD 8600M Series (HAINAN, DRM 3.40.0, 5.11.13-arch1-1, LLVM 11.1.0)|23
Radeon HD 8550G|23
Radeon R5 M240|23
Radeon R5 M240 Series|23
Radeon HD 7540D|23
Radeon(TM) R5 M430|23
Radeon R5 Graphics|23
Radeon(TM) R5 M430|23
Radeon R6 Graphics|23
Radeon HD 7520G|23
Radeon R7 Graphics|23
Radeon HD 8610G|22
FirePro 3800 (FireGL) Graphics Adapter|22
Radeon HD 7570M/HD 7670M Graphics|22
Radeon HD 7480D|22
Radeon(TM) R7 Graphics|22
Radeon HD 8650G + HD 8600M Dual Graphics|22
Radeon(TM) Vega 6 Graphics|22
Radeon R7 Graphics|22
Radeon R5 Graphics|22
Radeon HD 7660G + HD 8600M Dual Graphics|22
FirePro M2000|22
Radeon R7 Graphics|22
Radeon HD 7870M|22
Radeon R5 M335|22
Radeon R5|22
Radeon HD 8500M Series|22
Radeon(TM) HD 8490|22
Radeon HD 8670M|22
Radeon HD 7660G + HD 7670M Dual Graphics|22
Radeon 7500M/7600M Series|22
Radeon R5 Graphics|21
Radeon(TM) R4 Graphics|21
Radeon HD 8490|21
Radeon HD 8490|21
Radeon R7 Graphics|21
Radeon HD 8570M|21
Radeon(TM) R5 M320|21
Radeon R2|21
Radeon HD 6530D|21
Radeon(TM) HD 6470M|21
MxGPU|21
Radeon HD 7000 series|21
Radeon HD 7470|21
Radeon(TM) R8 M350DX|21
Radeon R7 Graphics|21
Radeon HD 7520G + HD 7400M Dual Graphics|21
Radeon(TM) R5 M335|21
Radeon HD 7400G|21
Radeon HD 7640G + HD 8500M Dual Graphics|21
Radeon HD 7000 series|21
Radeon(TM) R5 Graphics|20
Radeon(TM) R7 M520 (R17M-M1-30)|20
Radeon HD 8470|20
Radeon HD 7480D|20
Radeon HD 6400M/7400M Series|20
Radeon(TM) R3 Graphics|20
Radeon R6 M255DX|20
Radeon HD 8370D|20
Radeon R5 Graphics|20
Radeon R7 Graphics|20
Radeon HD 6410D|20
Radeon(TM) R5 Graphics|20
Radeon R5 M330|20
Radeon R7 M260DX|20
Radeon(TM) R5 Graphics|20
Radeon HD 7480D|20
Radeon HD 6470M|20
Radeon Hybrid (Blocked)|20
Radeon(TM) R7 Graphics|20
Radeon(TM) R6 M340DX|20
Radeon R5 235|20
Radeon HD 7520G|19
Radeon(TM) R6 M255DX|19
Radeon R5 M240|19
Radeon(TM) R3 Graphics|19
Radeon R7E Graphics|19
Radeon R5 M200 Series|19
Radeon HD 7470|19
Radeon HD 7640G + 8500M Dual Graphics|19
Radeon(TM) R5 M330|19
Radeon HD 6470M|19
Radeon R3 Graphics|19
Radeon HD 8400E|19
Radeon HD 7640G + HD 8570M Dual Graphics|19
Radeon HD 8400|19
Radeon HD 8400 / R3 Series|19
Radeon R5 Graphics|19
Radeon(TM) R7 M265|19
Radeon R5 M230|19
Radeon R5 Graphics|19
Radeon HD 7620G|19
Radeon R5 Graphics|19
Radeon(TM) HD 6470M|19
Radeon HD 7480D|18
Radeon R7 Graphics|18
Radeon(TM) R5 Graphics|18
Radeon HD 8550G|18
Radeon HD 8370D|18
Radeon R5 Graphics|18
Radeon(TM) HD 7450|18
Radeon HD 6530D|18
Radeon HD 8570M|18
Radeon R6 Graphics|18
Radeon HD 7650A|18
Radeon HD 8450G|18
Radeon HD 8550G + R5 M230 Dual Graphics|18
Radeon HD 7640G + 7470M Dual Graphics|18
Radeon HD 8370D|18
Radeon HD 7400M Series|18
Radeon HD 8670D + R5 200 Dual Graphics|17
Radeon HD 7500G|17
Radeon HD 7790|17
Radeon HD 7450M|17
Radeon(TM) HD 7450A Graphics|17
Radeon(TM) R5 Graphics|17
Radeon(TM) R6 Graphics|17
Radeon(TM) R4 Graphics|17
Radeon HD 8650G + HD 8500M Dual Graphics|17
Radeon HD 7400M Series|17
Radeon HD 8450G|17
Radeon HD 6520G|17
Radeon HD 8470D|17
Radeon(TM) R5 Graphics|17
Radeon(TM) R4E Graphics|17
Radeon HD 8330|17
Radeon HD 8400|17
Radeon(TM) HD 8510G|17
Radeon(TM) R5 Graphics|17
Radeon HD 8650G|17
Radeon HD 6490M|17
Radeon R7 Graphics|16
Radeon HD 6400 Series|16
Radeon HD 8510G|16
Radeon HD 7400 Series|16
Radeon HD 7400 Series|16
Radeon(TM) HD 8510G|16
Radeon HD 6370D|16
Radeon HD 7420G|16
Radeon HD 7520G + HD 7600M Dual Graphics|16
Radeon R9 260|16
Radeon HD 7640G + 7600M Dual Graphics|16
Radeon HD 7470M|16
Radeon(TM) R2 Graphics|16
RADEON HD 6450|16
Radeon(TM) R1E Graphics|16
Radeon R5 Graphics|16
Radeon HD 7420G|16
Radeon(TM) R4 Graphics|16
Radeon(TM) R4 Graphics|16
Radeon(TM) R4 Graphics|16
Radeon HD 7480D|16
Radeon HD 6490M|15
RADEON HD 6450|15
Radeon(TM) HD 8610G|15
Radeon(TM) HD 8610G|15
Radeon HD 8610G + 8600M Dual Graphics|15
Radeon HD 7350|15
Radeon(TM) HD 6480G|15
Radeon HD 8650G + 8600M Dual Graphics|15
Radeon HD 8570D|15
Radeon HD 6370M|15
Mobility Radeon HD 5000 Series|15
Radeon R2 Graphics|15
Radeon HD 8240 / R3 Series|15
Radeon HD 8650G + R5 M200 Dual Graphics|15
Radeon HD 8400E|15
Radeon(TM) R4 Graphics|15
Radeon R5 Graphics|15
Radeon HD 8610G|15
Radeon HD 8650G + HD 8500M Dual Graphics|15
Radeon(TM) R7 M260|15
ASUS EAH6450 Series|15
Radeon R3 Graphics|15
Radeon(TM) R6 M340DX|15
Radeon R6E Graphics|15
Radeon R5 Graphics|15
Radeon R2 Series|14
Radeon HD 6450/7450/8450/R5 230|14
Radeon HD 8200 / R3 Series|14
Radeon(TM) R3 Graphics|14
Radeon R5 230|14
Radeon(TM) HD 8510G|14
Radeon(TM) R4 Graphics|14
Radeon R5 M435|14
Radeon HD 8240|14
ASUS R5 230 Series|14
FirePro M2000|14
Radeon HD 7500G|14
Radeon HD 7450|14
RADEON HD 6450|14
Radeon HD 8400E|14
RADEON HD 6350|14
Radeon HD 6480G|14
Radeon(TM) R5E Graphics|14
CARRIZO 9874|14
Mobility Radeon HD 5000 Series|14
Radeon HD 6630M|14
Radeon HD 6370M|14
Radeon HD 8400 / R3 Series|14
Radeon(TM) R2 Graphics|14
ASUS EAH6450 Series|14
Radeon HD 7470M|13
Mobility Radeon HD 5470|13
Mobility Radeon HD 5400 Series|13
Radeon(TM) R5E Graphics|13
Radeon(TM) R2 Graphics|13
Radeon HD 6540|13
Radeon HD 7450|13
Radeon HD 5450|13
Radeon HD 8600M Series|13
Radeon HD 8400 / R3 Series|13
Kaveri|13
Radeon(TM) HD 6480G|13
Radeon HD 5400 Series|13
Radeon HD 8330|13
RADEON HD 6350|13
Radeon R4/R5 Graphics|13
Radeon HD 7600G +\u2122 HD Dual Graphics|13
Radeon R3 Graphics|13
ASUS R5 230 Series|13
Radeon(TM) R7 Graphics|13
Radeon HD 7620G|13
Radeon HD 8250|13
Radeon(TM) R7 Graphics|12
Radeon HD 6450/7450/8450 / R5 230|12
Radeon HD 6480G|12
Radeon(TM) R7 Graphics|12
Radeon HD 5450 Series|12
Radeon HD 8400 / R3 Series|12
Radeon(TM) HD 6400 Series|12
Radeon(TM) R4 Graphics|12
RADEON HD5450|12
Radeon R5 Graphics|12
Radeon R5 Graphics|12
Radeon(TM) R6 Graphics|12
Radeon(TM) R4 Graphics|12
Radeon(TM) R2 Graphics|12
Radeon HD 8210|12
Radeon R5 230|12
Radeon R3 Graphics|12
FirePro 2270|12
Radeon(TM) R2E Graphics|12
Radeon HD 8400 / R3 Series|12
Radeon HD 8350G|12
Radeon HD 8400|12
Radeon R2 Graphics|12
Radeon HD 8210 Graphics|12
Radeon E6460|12
Radeon(TM) HD 8280E|12
Radeon R2 Graphics|11
Radeon HD 8450G + HD 8750M Dual Graphics|11
Radeon HD 8330|11
Radeon HD 5470|11
Radeon HD 7600G + 7500M/7600M Dual Graphics|11
Radeon R5 220|11
Radeon HD 8200 / R3 Series|11
Radeon HD 8240|11
Radeon HD 8400 / R3 Series|11
Radeon HD 8200 / R3 Series|11
Radeon HD 5450|11
Radeon(TM) 620|11
Radeon(TM) Vega 8 Mobile Graphics|11
Radeon HD 6530D|11
Radeon(TM) HD 6520G|11
Radeon HD 6300M Series|11
ASUS EAH5450|11
Radeon R5 220|11
Radeon HD 8250|11
Radeon HD 7340|11
Radeon HD 7340M|11
Radeon HD 8210|11
Radeon HD 7700 Series|10
Radeon HD 6380G|10
Radeon HD 5400 Series|10
Radeon HD 8240|10
Radeon HD 7640G + 7670M Dual Graphics|10
Radeon(TM) R6 Graphics|10
ASUS EAH5450 Series|10
Radeon HD 6320|10
Radeon HD 7340G|10
Radeon HD 6410D|10
Radeon HD 7340|10
Radeon HD 6320|10
Radeon(TM) R2 Graphics|10
Radeon HD 8180|9
Mobility Radeon HD 5430|9
Radeon R2 Graphics|9
Radeon R2 Series|9
Radeon HD 8210|9
FirePro 2270|9
Radeon R2E Graphics|9
Radeon HD 7340|9
Radeon HD 6320|9
Radeon HD 7310|9
Radeon HD 6310|9
Radeon R7 Graphics|9
Radeon HD 7310|8
Radeon HD 8250|8
Radeon HD 8180|8
Radeon HD 6630M|8
Radeon HD 6230|8
Radeon HD 6320|8
Radeon HD 6400M Series|8
Radeon HD 7290 Graphics|7
Radeon HD 6290|7
Radeon HD 6310|7
Radeon HD 8180|7
ASUS EAH5450 Series|7
Radeon(TM) R2 Graphics|6
Radeon HD 6310|6
Radeon HD 7500G|6
Radeon HD 8240 / R3 Series|6
Radeon HD 6250|6
Radeon HD 6380G|6
Radeon HD 6300M Series|5
Radeon HD 7310|5
Radeon R3 Graphics|5
Radeon(TM) R6 Graphics|5
Radeon HD 6250|5
Radeon HD 6290|5
Radeon HD 6250|5
Radeon HD 7290 Graphics|4
Radeon HD 5000/6000/7350/8350 Series|3
Radeon RX Vega 56 OpenGL Engine|-1
FirePro V4800 (FireGL) Graphics Adapter|-1
Radeon HD 7670M|-1
Radeon HD 8570D|-1
7340:C5|-1
Radeon HD 8550G|-1
Radeon R5 Graphics|-1
ASUS R7 360 Series|-1
Bonaire [FirePro W5100]|-1
Radeon HD 6380G|-1
Radeon R7 Graphics|-1
FireGL V8650|-1
FirePro S7150|-1
FirePro V3900 (FireGL V)|-1
FirePro V7800 (FireGL V)|-1
FirePro W4100 Graphics Adapter|-1
FirePro W4170M (FireGL V)|-1
Gigabyte Radeon RX 580|-1
Mobility FireGL V5700|-1
Mobility Radeon 4100|-1
Mobility Radeon HD 2400|-1
Mobility Radeon HD 2400 XT|-1
Mobility Radeon HD 2600|-1
Mobility Radeon HD 2600 XT|-1
Mobility Radeon HD 3200|-1
Mobility Radeon HD 3400 Series|-1
Mobility Radeon HD 3430|-1
Mobility Radeon HD 3470|-1
Mobility Radeon HD 3650|-1
Mobility Radeon HD 4200 Series|-1
Mobility Radeon HD 4250|-1
Mobility Radeon HD 4300 Series|-1
Mobility Radeon HD 4500 Series|-1
Mobility Radeon HD 4500/5100 Series|-1
Mobility Radeon HD 4650|-1
Mobility Radeon HD 4670|-1
Mobility Radeon HD 4850|-1
R9 270X Devil|-1
RX 560X|-1
Radeon|-1
Radeon(TM) HD8530M|-1
Radeon 3000|-1
Radeon 3100 Graphics|-1
Radeon HD 2400 PRO|-1
Radeon HD 2400 XT|-1
Radeon HD 2600 Pro|-1
Radeon HD 2600 XT|-1
Radeon HD 2900 GT|-1
Radeon HD 3200 Graphics|-1
Radeon HD 3300|-1
Radeon HD 3450|-1
Radeon HD 3470|-1
Radeon HD 3600 Series|-1
Radeon HD 3650|-1
Radeon HD 3850|-1
Radeon HD 3870|-1
Radeon HD 3870 X2|-1
Radeon HD 4200|-1
Radeon HD 4250|-1
Radeon HD 4290|-1
Radeon HD 4300/4500 Series|-1
Radeon HD 4550|-1
Radeon HD 4600 Series|-1
Radeon HD 4650|-1
Radeon HD 4670|-1
Radeon HD 4830|-1
Radeon HD 4850|-1
Radeon HD 4870|-1
Radeon HD 4890|-1
Radeon HD 5670 640SP Edition|-1
Radeon HD 5800 Series|-1
Radeon HD 5850|-1
Radeon HD 6490M|-1
Radeon HD 6730M/6770M|-1
Radeon HD 6750|-1
Radeon HD 6800M Series|-1
Radeon HD 7540D + HD 6670 Dual Graphics|-1
Radeon HD 7700M Series|-1
Radeon HD 7800 Series|-1
Radeon HD 8350|-1
Radeon HD 8370D|-1
Radeon HD 8600/8700M|-1
Radeon Pro WX Vega M GL Graphics|-1
Radeon R5 200 Series|-1
Radeon R7 A370|-1
Radeon R9 200 Series|-1
Radeon R9 290X/390X|-1
Radeon R9 380X|-1
Radeon RX 480|-1
Radeon RX 550X|-1
Radeon RX 6650M|-1
Radeon RX6600XT|-1
Radeon(TM) R8 M435DX|-1
Radeon(TM) R9 290X|-1
Radeon(TM) RX540|-1
inc. Radeon HD 7970|-1
Radeong 0.4 on AMD CAPE VERDE (DRM 2.43.0, LLVM 3.7.0)|-1
Radeong 0.4 on AMD CAPE VERDE (DRM 3.9.0 / 4.9.0-rc1+, LLVM 4.0.0)|-1
Radeong 0.4 on AMD FIJI (DRM 3.2.0 / 4.7.0-rc5+, LLVM 4.0.0)|-1
Radeong 0.4 on AMD TAHITI (DRM 2.43.0, LLVM 3.9.0)|-1
`;function t(){return a}},696452:function(e,n,o){"use strict";var a,t,r,i,d,s,R,l=o(263318),c=o(177767),u=Function.prototype.apply,h=Function.prototype.call,p=Object.create,f=Object.defineProperty,M=Object.defineProperties,D=Object.prototype.hasOwnProperty,g={configurable:!0,enumerable:!1,writable:!0};a=function(e,n){var o;return c(n),D.call(this,"__ee__")?o=this.__ee__:(o=g.value=p(null),f(this,"__ee__",g),g.value=null),o[e]?"object"==typeof o[e]?o[e].push(n):o[e]=[o[e],n]:o[e]=n,this},t=function(e,n){var o,t;return c(n),t=this,a.call(this,e,o=function(){r.call(t,e,o),u.call(n,this,arguments)}),o.__eeOnceListener__=n,this},d={on:a,once:t,off:r=function(e,n){var o,a,t,r;if(c(n),!D.call(this,"__ee__")||!(o=this.__ee__)[e])return this;if("object"==typeof(a=o[e]))for(r=0;t=a[r];++r)(t===n||t.__eeOnceListener__===n)&&(2===a.length?o[e]=a[r?0:1]:a.splice(r,1));else(a===n||a.__eeOnceListener__===n)&&delete o[e];return this},emit:i=function(e){var n,o,a,t,r;if(!!D.call(this,"__ee__")){if(t=this.__ee__[e]){if("object"==typeof t){for(n=1,o=arguments.length,r=Array(o-1);n<o;++n)r[n-1]=arguments[n];for(n=0,t=t.slice();a=t[n];++n)u.call(a,this,r)}else switch(arguments.length){case 1:h.call(t,this);break;case 2:h.call(t,this,arguments[1]);break;case 3:h.call(t,this,arguments[1],arguments[2]);break;default:for(n=1,o=arguments.length,r=Array(o-1);n<o;++n)r[n-1]=arguments[n];u.call(t,this,r)}}}}},R=M({},s={on:l(a),once:l(t),off:l(r),emit:l(i)}),e.exports=n=function(e){return null==e?p(R):M(Object(e),s)},n.methods=d},419936:function(e){var n=Array.isArray;e.exports=n},760284:function(e,n,o){var a=o(938083);e.exports=function(e){var n=a(e),o=n%1;return n==n?o?n-o:n:0}},54066:function(){!function(){if("undefined"!=typeof Prism&&"undefined"!=typeof document){var e="line-numbers",n=/\n(?!$)/g,o=Prism.plugins.lineNumbers={getLine:function(n,o){if("PRE"===n.tagName&&n.classList.contains(e)){var a=n.querySelector(".line-numbers-rows");if(a){var t=parseInt(n.getAttribute("data-start"),10)||1,r=t+(a.children.length-1);o<t&&(o=t),o>r&&(o=r);var i=o-t;return a.children[i]}}},resize:function(e){t([e])},assumeViewportIndependence:!0},a=void 0;window.addEventListener("resize",function(){o.assumeViewportIndependence&&a===window.innerWidth||(a=window.innerWidth,t(Array.prototype.slice.call(document.querySelectorAll("pre.line-numbers"))))}),Prism.hooks.add("complete",function(o){if(o.code){var a=o.element,r=a.parentNode;if(r&&/pre/i.test(r.nodeName)&&!a.querySelector(".line-numbers-rows")&&Prism.util.isActive(a,e)){a.classList.remove(e),r.classList.add(e);var i,d=o.code.match(n),s=Array((d?d.length+1:1)+1).join("<span></span>");(i=document.createElement("span")).setAttribute("aria-hidden","true"),i.className="line-numbers-rows",i.innerHTML=s,r.hasAttribute("data-start")&&(r.style.counterReset="linenumber "+(parseInt(r.getAttribute("data-start"),10)-1)),o.element.appendChild(i),t([r]),Prism.hooks.run("line-numbers",o)}}}),Prism.hooks.add("line-numbers",function(e){e.plugins=e.plugins||{},e.plugins.lineNumbers=!0})}function t(e){if(0!=(e=e.filter(function(e){var n=(e?window.getComputedStyle?getComputedStyle(e):e.currentStyle||null:null)["white-space"];return"pre-wrap"===n||"pre-line"===n})).length){var o=e.map(function(e){var o=e.querySelector("code"),a=e.querySelector(".line-numbers-rows");if(o&&a){var t=e.querySelector(".line-numbers-sizer"),r=o.textContent.split(n);t||((t=document.createElement("span")).className="line-numbers-sizer",o.appendChild(t)),t.innerHTML="0",t.style.display="block";var i=t.getBoundingClientRect().height;return t.innerHTML="",{element:e,lines:r,lineHeights:[],oneLinerHeight:i,sizer:t}}}).filter(Boolean);o.forEach(function(e){var n=e.sizer,o=e.lines,a=e.lineHeights,t=e.oneLinerHeight;a[o.length-1]=void 0,o.forEach(function(e,o){if(e&&e.length>1){var r=n.appendChild(document.createElement("span"));r.style.display="block",r.textContent=e}else a[o]=t})}),o.forEach(function(e){for(var n=e.sizer,o=e.lineHeights,a=0,t=0;t<o.length;t++)void 0===o[t]&&(o[t]=n.children[a++].getBoundingClientRect().height)}),o.forEach(function(e){var n=e.sizer,o=e.element.querySelector(".line-numbers-rows");n.style.display="none",n.innerHTML="",e.lineHeights.forEach(function(e,n){o.children[n].style.height=e+"px"})})}}}()},859338:function(e,n,o){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function t(){t=function(){return e};var e={},n=Object.prototype,o=n.hasOwnProperty,r=Object.defineProperty||function(e,n,o){e[n]=o.value},i="function"==typeof Symbol?Symbol:{},d=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",R=i.toStringTag||"@@toStringTag";function l(e,n,o){return Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}),e[n]}try{l({},"")}catch(e){l=function(e,n,o){return e[n]=o}}function c(e,n,o,a){var t=Object.create((n&&n.prototype instanceof p?n:p).prototype);return r(t,"_invoke",{value:function(e,n,o){var a="suspendedStart";return function(t,r){if("executing"===a)throw Error("Generator is already running");if("completed"===a){if("throw"===t)throw r;return b()}for(o.method=t,o.arg=r;;){var i=o.delegate;if(i){var d=function e(n,o){var a=o.method,t=n.iterator[a];if(void 0===t)return o.delegate=null,"throw"===a&&n.iterator.return&&(o.method="return",o.arg=void 0,e(n,o),"throw"===o.method)||"return"!==a&&(o.method="throw",o.arg=TypeError("The iterator does not provide a '"+a+"' method")),h;var r=u(t,n.iterator,o.arg);if("throw"===r.type)return o.method="throw",o.arg=r.arg,o.delegate=null,h;var i=r.arg;return i?i.done?(o[n.resultName]=i.value,o.next=n.nextLoc,"return"!==o.method&&(o.method="next",o.arg=void 0),o.delegate=null,h):i:(o.method="throw",o.arg=TypeError("iterator result is not an object"),o.delegate=null,h)}(i,o);if(d){if(d===h)continue;return d}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if("suspendedStart"===a)throw a="completed",o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);a="executing";var s=u(e,n,o);if("normal"===s.type){if(a=o.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:o.done}}"throw"===s.type&&(a="completed",o.method="throw",o.arg=s.arg)}}}(e,o,new P(a||[]))}),t}function u(e,n,o){try{return{type:"normal",arg:e.call(n,o)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var h={};function p(){}function f(){}function M(){}var D={};l(D,d,function(){return this});var g=Object.getPrototypeOf,H=g&&g(g(T([])));H&&H!==n&&o.call(H,d)&&(D=H);var m=M.prototype=p.prototype=Object.create(D);function y(e){["next","throw","return"].forEach(function(n){l(e,n,function(e){return this._invoke(n,e)})})}function X(e,n){var t;r(this,"_invoke",{value:function(r,i){function d(){return new n(function(t,d){!function t(r,i,d,s){var R=u(e[r],e,i);if("throw"!==R.type){var l=R.arg,c=l.value;return c&&"object"==a(c)&&o.call(c,"__await")?n.resolve(c.__await).then(function(e){t("next",e,d,s)},function(e){t("throw",e,d,s)}):n.resolve(c).then(function(e){l.value=e,d(l)},function(e){return t("throw",e,d,s)})}s(R.arg)}(r,i,t,d)})}return t=t?t.then(d,d):d()}})}function v(e){var n={tryLoc:e[0]};1 in e&&(n.catchLoc=e[1]),2 in e&&(n.finallyLoc=e[2],n.afterLoc=e[3]),this.tryEntries.push(n)}function S(e){var n=e.completion||{};n.type="normal",delete n.arg,e.completion=n}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(v,this),this.reset(!0)}function T(e){if(e){var n=e[d];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,t=function n(){for(;++a<e.length;)if(o.call(e,a))return n.value=e[a],n.done=!1,n;return n.value=void 0,n.done=!0,n};return t.next=t}}return{next:b}}function b(){return{value:void 0,done:!0}}return f.prototype=M,r(m,"constructor",{value:M,configurable:!0}),r(M,"constructor",{value:f,configurable:!0}),f.displayName=l(M,R,"GeneratorFunction"),e.isGeneratorFunction=function(e){var n="function"==typeof e&&e.constructor;return!!n&&(n===f||"GeneratorFunction"===(n.displayName||n.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,M):(e.__proto__=M,l(e,R,"GeneratorFunction")),e.prototype=Object.create(m),e},e.awrap=function(e){return{__await:e}},y(X.prototype),l(X.prototype,s,function(){return this}),e.AsyncIterator=X,e.async=function(n,o,a,t,r){void 0===r&&(r=Promise);var i=new X(c(n,o,a,t),r);return e.isGeneratorFunction(o)?i:i.next().then(function(e){return e.done?e.value:i.next()})},y(m),l(m,R,"Generator"),l(m,d,function(){return this}),l(m,"toString",function(){return"[object Generator]"}),e.keys=function(e){var n=Object(e),o=[];for(var a in n)o.push(a);return o.reverse(),function e(){for(;o.length;){var a=o.pop();if(a in n)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=T,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function a(o,a){return i.type="throw",i.arg=e,n.next=o,a&&(n.method="next",n.arg=void 0),!!a}for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t],i=r.completion;if("root"===r.tryLoc)return a("end");if(r.tryLoc<=this.prev){var d=o.call(r,"catchLoc"),s=o.call(r,"finallyLoc");if(d&&s){if(this.prev<r.catchLoc)return a(r.catchLoc,!0);if(this.prev<r.finallyLoc)return a(r.finallyLoc)}else if(d){if(this.prev<r.catchLoc)return a(r.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return a(r.finallyLoc)}}}},abrupt:function(e,n){for(var a=this.tryEntries.length-1;a>=0;--a){var t=this.tryEntries[a];if(t.tryLoc<=this.prev&&o.call(t,"finallyLoc")&&this.prev<t.finallyLoc){var r=t;break}}r&&("break"===e||"continue"===e)&&r.tryLoc<=n&&n<=r.finallyLoc&&(r=null);var i=r?r.completion:{};return i.type=e,i.arg=n,r?(this.method="next",this.next=r.finallyLoc,h):this.complete(i)},complete:function(e,n){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&n&&(this.next=n),h},finish:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.finallyLoc===e)return this.complete(o.completion,o.afterLoc),S(o),h}},catch:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc===e){var a=o.completion;if("throw"===a.type){var t=a.arg;S(o)}return t}}throw Error("illegal catch attempt")},delegateYield:function(e,n,o){return this.delegate={iterator:T(e),resultName:n,nextLoc:o},"next"===this.method&&(this.arg=void 0),h}},e}function r(e,n,o,a,t,r,i){try{var d=e[r](i),s=d.value}catch(e){o(e);return}d.done?n(s):Promise.resolve(s).then(a,t)}o.d(n,{T:function(){return l}});function i(e,n){for(var o=0;o<n.length;o++){var a=n[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,s(a.key),a)}}function d(e,n,o){return(n=s(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function s(e){var n=function(e,n){if("object"!==a(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var t=o.call(e,n||"default");if("object"!==a(t))return t;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===a(n)?n:String(n)}function R(e,n){(null==n||n>e.length)&&(n=e.length);for(var o=0,a=Array(n);o<n;o++)a[o]=e[o];return a}var l=new(function(){var e,n,o;function a(){var e=this;!function(e,n){if(!(e instanceof n))throw TypeError("Cannot call a class as a function")}(this,a),d(this,"_onLeave",function(){var n,o;e.detachEl(),e.detachPlayer(),null===(n=e.currentOptions_)||void 0===n||null===(o=n.onLeave)||void 0===o||o.call(n),e.currentOptions_=null,e.window=null,e._isStandaloneWindow=!1}),d(this,"_onBodyKeyDown",function(n){var o,a,t,r,i=null===(o=e.currentOptions_)||void 0===o?void 0:o.player;null==i||null===(a=i.plugins)||void 0===a||null===(t=a.keyboard)||void 0===t||null===(r=t.onBodyKeyDown)||void 0===r||r.call(t,n)}),this.currentOptions_=null,this.currentElement_=null,this._window=null,this._isStandaloneWindow=!1}return e=a,n=[{key:"window",get:function(){return this._window},set:function(e){var n=this._window;if(!n||n!==e)n&&(n.removeEventListener("pagehide",this._onLeave),n.document.removeEventListener("keydown",this._onBodyKeyDown)),e&&(e.addEventListener("pagehide",this._onLeave),e.document.addEventListener("keydown",this._onBodyKeyDown)),this._window=e||null}},{key:"isStandaloneWindow",get:function(){return this._isStandaloneWindow}},{key:"isSupported",value:function(){var e=/(metasr)/i.test(navigator.userAgent);return"documentPictureInPicture"in window&&/^(https|file)/.test(location.protocol)&&!e}},{key:"contains",value:function(e){var n;return!!(null!==(n=this.window)&&void 0!==n&&n.document.body.contains(e))}},{key:"requestWindow",value:function(e){var n,o,a=this,i=e.config,d=e.window,s=e.onEnter,l=e.onLeave,c=e.player;this.currentOptions_=e,this._isStandaloneWindow=!!i.alwaysKeepDocumentWindow;var u=new Promise(function(e){if(d)e(d);else{var n={};if(i.width&&i.height)n.width=i.width,n.height=i.height;else if(c){var o=c.root.getBoundingClientRect();n.width=o.width,n.height=o.height}"boolean"==typeof i.disallowReturnToOpener&&(n.disallowReturnToOpener=i.disallowReturnToOpener),"boolean"==typeof i.preferInitialWindowPlacement&&(n.preferInitialWindowPlacement=i.preferInitialWindowPlacement),i.docPiPTargetWindow?e(i.docPiPTargetWindow):documentPictureInPicture.requestWindow(n).then(function(n){e(n)})}});return u.then((o=(n=t().mark(function e(n){var o,r,d,u,h,p;return t().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o=i.docPiPNode,r=i.docPiPStyle,d=o||(null==c?void 0:c.root)){e.next=4;break}return e.abrupt("return");case 4:return a.window=n,e.next=7,function(e){return new Promise(function(n){var o=document.createDocumentFragment(),a=[],t=[],r=0,i,d=function(e,n){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=function(e,n){if(e){if("string"==typeof e)return R(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);if("Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return R(e,n)}}(e))){o&&(e=o);var a=0,t=function(){};return{s:t,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:t}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i=!0,d=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return i=e.done,e},e:function(e){d=!0,r=e},f:function(){try{!i&&null!=o.return&&o.return()}finally{if(d)throw r}}}}(document.styleSheets);try{for(d.s();!(i=d.n()).done;)!function(){var e=i.value;try{var o=Array.from(e.cssRules);o.length>0&&a.push(o.map(function(e){return e.cssText}).join(""))}catch(o){if(e.href){var d=document.createElement("link");d.rel="stylesheet",d.type=e.type||"text/css",d.media=e.media.mediaText||"all",d.href=e.href,d.onload=function(){r--,0===r&&n()},d.onerror=function(){r--,0===r&&n()},t.push(d),r++}}}()}catch(e){d.e(e)}finally{d.f()}if(t.forEach(function(e){return o.appendChild(e)}),a.length>0){var s=document.createElement("style");s.textContent=a.join("\n"),o.appendChild(s)}e.document.head.appendChild(o),0===r&&n()})}(n);case 7:u=document.createElement("style"),h=["body{padding:0; margin:0;}"],r?(p="","string"==typeof r?p=r:"function"==typeof r&&(p=r.call(i)),p&&h.push(p)):d===(null==c?void 0:c.root)&&h.push(".xgplayer{width: 100%!important; height: 100%!important;}"),u.textContent=h.join("\n"),n.document.head.append(u),a.attachPlayer(c,{element:d,window:n,onEnter:s,onLeave:l}),null==s||s({documentPictureInPictureWindow:n});case 14:case"end":return e.stop()}},e)}),function(){var e=this,o=arguments;return new Promise(function(a,t){var i=n.apply(e,o);function d(e){r(i,a,t,d,s,"next",e)}function s(e){r(i,a,t,d,s,"throw",e)}d(void 0)})}),function(e){return o.apply(this,arguments)})),u}},{key:"exit",value:function(){var e,n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];null===(e=this.window)||void 0===e||e.close(),n&&this._onLeave()}},{key:"attachEl",value:function(e){if(!!e&&!!this.window){var n=e.parentElement,o=e.nextSibling;this.window.document.body.append(e),this.currentElement_={element:e,parentNode:n,nextSibling:o}}}},{key:"detachEl",value:function(e){var n,o=this;if(!!this.currentElement_&&(!e||e===(null===(n=this.currentElement_)||void 0===n?void 0:n.element))){var a=this.currentElement_,t=a.element,r=a.parentNode,i=a.nextSibling;return r&&(r.isConnected?r.insertBefore(t,i):t.remove?t.remove():t.parentNode.removeChild(t)),Object.keys(this.currentElement_).forEach(function(e){o.currentElement_[e]=null}),this.currentElement_=null,t}}},{key:"attachPlayer",value:function(e,n){var o,a=n.element,t=n.window,r=n.onEnter,i=n.onLeave;if(!this.window||t===this.window)t&&(this.window=t),this.currentOptions_&&(r&&(this.currentOptions_.onEnter=r),i&&(this.currentOptions_.onLeave=i),e&&(this.currentOptions_.player=e)),a&&a!==(null===(o=this.currentElement_)||void 0===o?void 0:o.element)&&(this.detachEl(),this.attachEl(a))}},{key:"detachPlayer",value:function(e){if(!!e){(null===(n=this.currentOptions_)||void 0===n?void 0:n.player)===e&&(this.currentOptions_.player=null);var n,o,a=null===(o=this.currentElement_)||void 0===o?void 0:o.element;a&&(a===e.root||a.contains(e.root))&&this.detachEl()}}}],i(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}())},888243:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=JSON.parse('"3.0.0-alpha.174-0"');n.default=o},782121:function(e,n,o){"use strict";o.d(n,{D:function(){return c}}),o(874386);var a=o(563097),t=o(88648),r=o(377426),i=o(327984),d=o(606193),s=o(369035),R=o(985672);let l="undefined"!=typeof IntersectionObserver,c=e=>{let n=(0,t.useRef)(),[o,c]=(0,t.useState)([]);return(0,t.useEffect)(()=>{{let e=e=>{try{var n,o,a,r,i;let l=e.target,u=null!==(a=null==l?void 0:null===(n=l.tagName)||void 0===n?void 0:n.toLowerCase())&&void 0!==a?a:"",h=null==l?void 0:null===(o=l.dataset)||void 0===o?void 0:o[d.YC];if("a"===u&&h){let e=(null==l?void 0:null===(r=l.dataset)||void 0===r?void 0:r[d.HA])===d.mZ,n=(null==l?void 0:null===(i=l.dataset)||void 0===i?void 0:i[d.uK])===d.mZ;c(o=>(0,s.u)(o.concat([{url:h,preload:n,prefetch:e}]),"url")),(0,R.d)(()=>{(0,t.startTransition)(()=>{c(o=>(0,s.u)(o.concat([{url:h,preload:n,prefetch:e}]),"url"))})},100)}}catch(e){}};return window.document.addEventListener("mouseenter",e,!0),()=>window.document.removeEventListener("mouseenter",e,!0)}},[]),(0,t.useEffect)(()=>{if(!!l){n.current=new IntersectionObserver(e=>{let n=e.map(e=>{var n,o;return{url:e.target.getAttribute("href"),prefetch:!!(null===(n=e.target.dataset)||void 0===n?void 0:n[d.HA]),preload:!!(null===(o=e.target.dataset)||void 0===o?void 0:o[d.uK])}}).filter(e=>!!e.url);(0,t.startTransition)(()=>{c(n)})},{rootMargin:"0px",threshold:1});let e=()=>{(0,r.K)(()=>{n.current&&n.current.disconnect(),document.querySelectorAll(`[${d.dH}="${d.gq}"],[${d.ZS}="${d.gq}"]`).forEach(e=>{var o;null===(o=n.current)||void 0===o||o.observe(e)})})};return"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e,!1):e(),()=>{var o;document.removeEventListener("DOMContentLoaded",e),null===(o=n.current)||void 0===o||o.disconnect()}}},[]),(0,a.jsxs)(a.Fragment,{children:[o.filter(e=>e.preload).map(e=>(0,a.jsx)(i.Preloads,{to:e.url},e.url)),o.filter(e=>e.prefetch).map(e=>(0,a.jsx)(i.Prefetch,{to:e.url},e.url)),e.children]})}},811796:function(e,n,o){"use strict";o.d(n,{d:function(){return a}});let a=()=>null},423255:function(e,n,o){"use strict";function a(e){let n=e.options.bulletOrdered||".";if("."!==n&&")"!==n)throw Error("Cannot serialize items with `"+n+"` for `options.bulletOrdered`, expected `.` or `)`");return n}o.d(n,{l:function(){return a}})},480340:function(e,n,o){"use strict";o.d(n,{C:function(){return i}});var a=o(849199),t=o(355831),r=o(754251);function i(e,n,o){let i={_bufferIndex:-1,_index:0,line:o&&o.line||1,column:o&&o.column||1,offset:o&&o.offset||0},d={},s=[],R=[],l=[],c={attempt:g(function(e,n){H(e,n.from)}),check:g(D),consume:function(e){(0,a.Ch)(e)?(i.line++,i.column=1,i.offset+=-3===e?2:1,m()):-1!==e&&(i.column++,i.offset++),i._bufferIndex<0?i._index++:(i._bufferIndex++,i._bufferIndex===R[i._index].length&&(i._bufferIndex=-1,i._index++)),u.previous=e},enter:function(e,n){let o=n||{};return o.type=e,o.start=f(),u.events.push(["enter",o,u]),l.push(o),o},exit:function(e){let n=l.pop();return n.end=f(),u.events.push(["exit",n,u]),n},interrupt:g(D,{interrupt:!0})},u={code:null,containerState:{},defineSkip:function(e){d[e.line]=e.column,m()},events:[],now:f,parser:e,previous:null,sliceSerialize:function(e,n){return function(e,n){let o,a=-1,t=[];for(;++a<e.length;){let r;let i=e[a];if("string"==typeof i)r=i;else switch(i){case -5:r="\r";break;case -4:r="\n";break;case -3:r="\r\n";break;case -2:r=n?" ":"	";break;case -1:if(!n&&o)continue;r=" ";break;default:r=String.fromCharCode(i)}o=-2===i,t.push(r)}return t.join("")}(p(e),n)},sliceStream:p,write:function(e){return(R=(0,t.V)(R,e),function(){let e;for(;i._index<R.length;){let n=R[i._index];if("string"==typeof n)for(e=i._index,i._bufferIndex<0&&(i._bufferIndex=0);i._index===e&&i._bufferIndex<n.length;)(function(e){h=h(e)})(n.charCodeAt(i._bufferIndex));else(function(e){h=h(e)})(n)}}(),null!==R[R.length-1])?[]:(H(n,0),u.events=(0,r.C)(s,u.events,u),u.events)}},h=n.tokenize.call(u,c);return n.resolveAll&&s.push(n),u;function p(e){return function(e,n){let o;let a=n.start._index,t=n.start._bufferIndex,r=n.end._index,i=n.end._bufferIndex;if(a===r)o=[e[a].slice(t,i)];else{if(o=e.slice(a,r),t>-1){let e=o[0];"string"==typeof e?o[0]=e.slice(t):o.shift()}i>0&&o.push(e[r].slice(0,i))}return o}(R,e)}function f(){let{_bufferIndex:e,_index:n,line:o,column:a,offset:t}=i;return{_bufferIndex:e,_index:n,line:o,column:a,offset:t}}function M(e){h=h(e)}function D(e,n){n.restore()}function g(e,n){return function(o,a,t){let r,d,s,R;return Array.isArray(o)?h(o):"tokenize"in o?h([o]):function(e){return function(n){let o=null!==n&&e[n],a=null!==n&&e.null;return h([...Array.isArray(o)?o:o?[o]:[],...Array.isArray(a)?a:a?[a]:[]])(n)}}(o);function h(e){return(r=e,d=0,0===e.length)?t:p(e[d])}function p(e){return function(o){return(R=function(){let e=f(),n=u.previous,o=u.currentConstruct,a=u.events.length,t=Array.from(l);return{from:a,restore:function(){i=e,u.previous=n,u.currentConstruct=o,u.events.length=a,l=t,m()}}}(),s=e,!e.partial&&(u.currentConstruct=e),e.name&&u.parser.constructs.disable.null.includes(e.name))?D(o):e.tokenize.call(n?Object.assign(Object.create(u),n):u,c,M,D)(o)}}function M(n){return e(s,R),a}function D(e){return(R.restore(),++d<r.length)?p(r[d]):t}}}function H(e,n){e.resolveAll&&!s.includes(e)&&s.push(e),e.resolve&&(0,t.d)(u.events,n,u.events.length-n,e.resolve(u.events.slice(n),u)),e.resolveTo&&(u.events=e.resolveTo(u.events,u))}function m(){i.line in d&&i.column<2&&(i.column=d[i.line],i.offset+=d[i.line]-1)}}}}]);