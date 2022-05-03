import{h as He,r as Ve,i as ue,j as Je,o as C,c as x,b as j,t as $,F as le,k as fe,u as ce,a as Oe,d as de,w as We,l as ze,e as Ge}from"./app.ff3dcfcd.js";var Y={exports:{}},Se=function(e,r){return function(){for(var n=new Array(arguments.length),a=0;a<n.length;a++)n[a]=arguments[a];return e.apply(r,n)}},Xe=Se,Z=Object.prototype.toString,ee=function(t){return function(e){var r=Z.call(e);return t[r]||(t[r]=r.slice(8,-1).toLowerCase())}}(Object.create(null));function A(t){return t=t.toLowerCase(),function(r){return ee(r)===t}}function te(t){return Array.isArray(t)}function k(t){return typeof t=="undefined"}function Qe(t){return t!==null&&!k(t)&&t.constructor!==null&&!k(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}var Te=A("ArrayBuffer");function Ke(t){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Te(t.buffer),e}function Ye(t){return typeof t=="string"}function Ze(t){return typeof t=="number"}function Ce(t){return t!==null&&typeof t=="object"}function F(t){if(ee(t)!=="object")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}var et=A("Date"),tt=A("File"),rt=A("Blob"),nt=A("FileList");function re(t){return Z.call(t)==="[object Function]"}function st(t){return Ce(t)&&re(t.pipe)}function at(t){var e="[object FormData]";return t&&(typeof FormData=="function"&&t instanceof FormData||Z.call(t)===e||re(t.toString)&&t.toString()===e)}var it=A("URLSearchParams");function ot(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function ut(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function ne(t,e){if(!(t===null||typeof t=="undefined"))if(typeof t!="object"&&(t=[t]),te(t))for(var r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.call(null,t[n],n,t)}function Q(){var t={};function e(n,a){F(t[a])&&F(n)?t[a]=Q(t[a],n):F(n)?t[a]=Q({},n):te(n)?t[a]=n.slice():t[a]=n}for(var r=0,s=arguments.length;r<s;r++)ne(arguments[r],e);return t}function lt(t,e,r){return ne(e,function(n,a){r&&typeof n=="function"?t[a]=Xe(n,r):t[a]=n}),t}function ft(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}function ct(t,e,r,s){t.prototype=Object.create(e.prototype,s),t.prototype.constructor=t,r&&Object.assign(t.prototype,r)}function dt(t,e,r){var s,n,a,i={};e=e||{};do{for(s=Object.getOwnPropertyNames(t),n=s.length;n-- >0;)a=s[n],i[a]||(e[a]=t[a],i[a]=!0);t=Object.getPrototypeOf(t)}while(t&&(!r||r(t,e))&&t!==Object.prototype);return e}function ht(t,e,r){t=String(t),(r===void 0||r>t.length)&&(r=t.length),r-=e.length;var s=t.indexOf(e,r);return s!==-1&&s===r}function pt(t){if(!t)return null;var e=t.length;if(k(e))return null;for(var r=new Array(e);e-- >0;)r[e]=t[e];return r}var mt=function(t){return function(e){return t&&e instanceof t}}(typeof Uint8Array!="undefined"&&Object.getPrototypeOf(Uint8Array)),h={isArray:te,isArrayBuffer:Te,isBuffer:Qe,isFormData:at,isArrayBufferView:Ke,isString:Ye,isNumber:Ze,isObject:Ce,isPlainObject:F,isUndefined:k,isDate:et,isFile:tt,isBlob:rt,isFunction:re,isStream:st,isURLSearchParams:it,isStandardBrowserEnv:ut,forEach:ne,merge:Q,extend:lt,trim:ot,stripBOM:ft,inherits:ct,toFlatObject:dt,kindOf:ee,kindOfTest:A,endsWith:ht,toArray:pt,isTypedArray:mt,isFileList:nt},S=h;function he(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var xe=function(e,r,s){if(!r)return e;var n;if(s)n=s(r);else if(S.isURLSearchParams(r))n=r.toString();else{var a=[];S.forEach(r,function(l,d){l===null||typeof l=="undefined"||(S.isArray(l)?d=d+"[]":l=[l],S.forEach(l,function(f){S.isDate(f)?f=f.toISOString():S.isObject(f)&&(f=JSON.stringify(f)),a.push(he(d)+"="+he(f))}))}),n=a.join("&")}if(n){var i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},vt=h;function I(){this.handlers=[]}I.prototype.use=function(e,r,s){return this.handlers.push({fulfilled:e,rejected:r,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1};I.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};I.prototype.forEach=function(e){vt.forEach(this.handlers,function(s){s!==null&&e(s)})};var Et=I,yt=h,bt=function(e,r){yt.forEach(e,function(n,a){a!==r&&a.toUpperCase()===r.toUpperCase()&&(e[r]=n,delete e[a])})},Pe=h;function P(t,e,r,s,n){Error.call(this),this.message=t,this.name="AxiosError",e&&(this.code=e),r&&(this.config=r),s&&(this.request=s),n&&(this.response=n)}Pe.inherits(P,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Ne=P.prototype,ge={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(t){ge[t]={value:t}});Object.defineProperties(P,ge);Object.defineProperty(Ne,"isAxiosError",{value:!0});P.from=function(t,e,r,s,n,a){var i=Object.create(Ne);return Pe.toFlatObject(t,i,function(l){return l!==Error.prototype}),P.call(i,t.message,e,r,s,n),i.name=t.name,a&&Object.assign(i,a),i};var D=P,De={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},b=h;function _t(t,e){e=e||new FormData;var r=[];function s(a){return a===null?"":b.isDate(a)?a.toISOString():b.isArrayBuffer(a)||b.isTypedArray(a)?typeof Blob=="function"?new Blob([a]):Buffer.from(a):a}function n(a,i){if(b.isPlainObject(a)||b.isArray(a)){if(r.indexOf(a)!==-1)throw Error("Circular reference detected in "+i);r.push(a),b.forEach(a,function(l,d){if(!b.isUndefined(l)){var o=i?i+"."+d:d,f;if(l&&!i&&typeof l=="object"){if(b.endsWith(d,"{}"))l=JSON.stringify(l);else if(b.endsWith(d,"[]")&&(f=b.toArray(l))){f.forEach(function(v){!b.isUndefined(v)&&e.append(o,s(v))});return}}n(l,o)}}),r.pop()}else e.append(i,s(a))}return n(t),e}var $e=_t,W=D,wt=function(e,r,s){var n=s.config.validateStatus;!s.status||!n||n(s.status)?e(s):r(new W("Request failed with status code "+s.status,[W.ERR_BAD_REQUEST,W.ERR_BAD_RESPONSE][Math.floor(s.status/100)-4],s.config,s.request,s))},U=h,Rt=U.isStandardBrowserEnv()?function(){return{write:function(r,s,n,a,i,u){var l=[];l.push(r+"="+encodeURIComponent(s)),U.isNumber(n)&&l.push("expires="+new Date(n).toGMTString()),U.isString(a)&&l.push("path="+a),U.isString(i)&&l.push("domain="+i),u===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(r){var s=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return s?decodeURIComponent(s[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),At=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},Ot=function(e,r){return r?e.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):e},St=At,Tt=Ot,Be=function(e,r){return e&&!St(r)?Tt(e,r):r},z=h,Ct=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],xt=function(e){var r={},s,n,a;return e&&z.forEach(e.split(`
`),function(u){if(a=u.indexOf(":"),s=z.trim(u.substr(0,a)).toLowerCase(),n=z.trim(u.substr(a+1)),s){if(r[s]&&Ct.indexOf(s)>=0)return;s==="set-cookie"?r[s]=(r[s]?r[s]:[]).concat([n]):r[s]=r[s]?r[s]+", "+n:n}}),r},pe=h,Pt=pe.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),s;function n(a){var i=a;return e&&(r.setAttribute("href",i),i=r.href),r.setAttribute("href",i),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return s=n(window.location.href),function(i){var u=pe.isString(i)?n(i):i;return u.protocol===s.protocol&&u.host===s.host}}():function(){return function(){return!0}}(),K=D,Nt=h;function Ue(t){K.call(this,t==null?"canceled":t,K.ERR_CANCELED),this.name="CanceledError"}Nt.inherits(Ue,K,{__CANCEL__:!0});var q=Ue,gt=function(e){var r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return r&&r[1]||""},B=h,Dt=wt,$t=Rt,Bt=xe,Ut=Be,Ft=xt,Lt=Pt,kt=De,_=D,jt=q,It=gt,me=function(e){return new Promise(function(s,n){var a=e.data,i=e.headers,u=e.responseType,l;function d(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}B.isFormData(a)&&B.isStandardBrowserEnv()&&delete i["Content-Type"];var o=new XMLHttpRequest;if(e.auth){var f=e.auth.username||"",v=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.Authorization="Basic "+btoa(f+":"+v)}var p=Ut(e.baseURL,e.url);o.open(e.method.toUpperCase(),Bt(p,e.params,e.paramsSerializer),!0),o.timeout=e.timeout;function ie(){if(!!o){var y="getAllResponseHeaders"in o?Ft(o.getAllResponseHeaders()):null,O=!u||u==="text"||u==="json"?o.responseText:o.response,R={data:O,status:o.status,statusText:o.statusText,headers:y,config:e,request:o};Dt(function(J){s(J),d()},function(J){n(J),d()},R),o=null}}if("onloadend"in o?o.onloadend=ie:o.onreadystatechange=function(){!o||o.readyState!==4||o.status===0&&!(o.responseURL&&o.responseURL.indexOf("file:")===0)||setTimeout(ie)},o.onabort=function(){!o||(n(new _("Request aborted",_.ECONNABORTED,e,o)),o=null)},o.onerror=function(){n(new _("Network Error",_.ERR_NETWORK,e,o,o)),o=null},o.ontimeout=function(){var O=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",R=e.transitional||kt;e.timeoutErrorMessage&&(O=e.timeoutErrorMessage),n(new _(O,R.clarifyTimeoutError?_.ETIMEDOUT:_.ECONNABORTED,e,o)),o=null},B.isStandardBrowserEnv()){var oe=(e.withCredentials||Lt(p))&&e.xsrfCookieName?$t.read(e.xsrfCookieName):void 0;oe&&(i[e.xsrfHeaderName]=oe)}"setRequestHeader"in o&&B.forEach(i,function(O,R){typeof a=="undefined"&&R.toLowerCase()==="content-type"?delete i[R]:o.setRequestHeader(R,O)}),B.isUndefined(e.withCredentials)||(o.withCredentials=!!e.withCredentials),u&&u!=="json"&&(o.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&o.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&o.upload&&o.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(l=function(y){!o||(n(!y||y&&y.type?new jt:y),o.abort(),o=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l))),a||(a=null);var V=It(p);if(V&&["http","https","file"].indexOf(V)===-1){n(new _("Unsupported protocol "+V+":",_.ERR_BAD_REQUEST,e));return}o.send(a)})},qt=null,c=h,ve=bt,Ee=D,Mt=De,Ht=$e,Vt={"Content-Type":"application/x-www-form-urlencoded"};function ye(t,e){!c.isUndefined(t)&&c.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function Jt(){var t;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(t=me),t}function Wt(t,e,r){if(c.isString(t))try{return(e||JSON.parse)(t),c.trim(t)}catch(s){if(s.name!=="SyntaxError")throw s}return(r||JSON.stringify)(t)}var M={transitional:Mt,adapter:Jt(),transformRequest:[function(e,r){if(ve(r,"Accept"),ve(r,"Content-Type"),c.isFormData(e)||c.isArrayBuffer(e)||c.isBuffer(e)||c.isStream(e)||c.isFile(e)||c.isBlob(e))return e;if(c.isArrayBufferView(e))return e.buffer;if(c.isURLSearchParams(e))return ye(r,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var s=c.isObject(e),n=r&&r["Content-Type"],a;if((a=c.isFileList(e))||s&&n==="multipart/form-data"){var i=this.env&&this.env.FormData;return Ht(a?{"files[]":e}:e,i&&new i)}else if(s||n==="application/json")return ye(r,"application/json"),Wt(e);return e}],transformResponse:[function(e){var r=this.transitional||M.transitional,s=r&&r.silentJSONParsing,n=r&&r.forcedJSONParsing,a=!s&&this.responseType==="json";if(a||n&&c.isString(e)&&e.length)try{return JSON.parse(e)}catch(i){if(a)throw i.name==="SyntaxError"?Ee.from(i,Ee.ERR_BAD_RESPONSE,this,null,this.response):i}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:qt},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};c.forEach(["delete","get","head"],function(e){M.headers[e]={}});c.forEach(["post","put","patch"],function(e){M.headers[e]=c.merge(Vt)});var se=M,zt=h,Gt=se,Xt=function(e,r,s){var n=this||Gt;return zt.forEach(s,function(i){e=i.call(n,e,r)}),e},Fe=function(e){return!!(e&&e.__CANCEL__)},be=h,G=Xt,Qt=Fe,Kt=se,Yt=q;function X(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Yt}var Zt=function(e){X(e),e.headers=e.headers||{},e.data=G.call(e,e.data,e.headers,e.transformRequest),e.headers=be.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),be.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var r=e.adapter||Kt.adapter;return r(e).then(function(n){return X(e),n.data=G.call(e,n.data,n.headers,e.transformResponse),n},function(n){return Qt(n)||(X(e),n&&n.response&&(n.response.data=G.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},E=h,Le=function(e,r){r=r||{};var s={};function n(o,f){return E.isPlainObject(o)&&E.isPlainObject(f)?E.merge(o,f):E.isPlainObject(f)?E.merge({},f):E.isArray(f)?f.slice():f}function a(o){if(E.isUndefined(r[o])){if(!E.isUndefined(e[o]))return n(void 0,e[o])}else return n(e[o],r[o])}function i(o){if(!E.isUndefined(r[o]))return n(void 0,r[o])}function u(o){if(E.isUndefined(r[o])){if(!E.isUndefined(e[o]))return n(void 0,e[o])}else return n(void 0,r[o])}function l(o){if(o in r)return n(e[o],r[o]);if(o in e)return n(void 0,e[o])}var d={url:i,method:i,data:i,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:l};return E.forEach(Object.keys(e).concat(Object.keys(r)),function(f){var v=d[f]||a,p=v(f);E.isUndefined(p)&&v!==l||(s[f]=p)}),s},ke={version:"0.27.2"},er=ke.version,w=D,ae={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){ae[t]=function(s){return typeof s===t||"a"+(e<1?"n ":" ")+t}});var _e={};ae.transitional=function(e,r,s){function n(a,i){return"[Axios v"+er+"] Transitional option '"+a+"'"+i+(s?". "+s:"")}return function(a,i,u){if(e===!1)throw new w(n(i," has been removed"+(r?" in "+r:"")),w.ERR_DEPRECATED);return r&&!_e[i]&&(_e[i]=!0,console.warn(n(i," has been deprecated since v"+r+" and will be removed in the near future"))),e?e(a,i,u):!0}};function tr(t,e,r){if(typeof t!="object")throw new w("options must be an object",w.ERR_BAD_OPTION_VALUE);for(var s=Object.keys(t),n=s.length;n-- >0;){var a=s[n],i=e[a];if(i){var u=t[a],l=u===void 0||i(u,a,t);if(l!==!0)throw new w("option "+a+" must be "+l,w.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new w("Unknown option "+a,w.ERR_BAD_OPTION)}}var rr={assertOptions:tr,validators:ae},je=h,nr=xe,we=Et,Re=Zt,H=Le,sr=Be,Ie=rr,T=Ie.validators;function N(t){this.defaults=t,this.interceptors={request:new we,response:new we}}N.prototype.request=function(e,r){typeof e=="string"?(r=r||{},r.url=e):r=e||{},r=H(this.defaults,r),r.method?r.method=r.method.toLowerCase():this.defaults.method?r.method=this.defaults.method.toLowerCase():r.method="get";var s=r.transitional;s!==void 0&&Ie.assertOptions(s,{silentJSONParsing:T.transitional(T.boolean),forcedJSONParsing:T.transitional(T.boolean),clarifyTimeoutError:T.transitional(T.boolean)},!1);var n=[],a=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(r)===!1||(a=a&&p.synchronous,n.unshift(p.fulfilled,p.rejected))});var i=[];this.interceptors.response.forEach(function(p){i.push(p.fulfilled,p.rejected)});var u;if(!a){var l=[Re,void 0];for(Array.prototype.unshift.apply(l,n),l=l.concat(i),u=Promise.resolve(r);l.length;)u=u.then(l.shift(),l.shift());return u}for(var d=r;n.length;){var o=n.shift(),f=n.shift();try{d=o(d)}catch(v){f(v);break}}try{u=Re(d)}catch(v){return Promise.reject(v)}for(;i.length;)u=u.then(i.shift(),i.shift());return u};N.prototype.getUri=function(e){e=H(this.defaults,e);var r=sr(e.baseURL,e.url);return nr(r,e.params,e.paramsSerializer)};je.forEach(["delete","get","head","options"],function(e){N.prototype[e]=function(r,s){return this.request(H(s||{},{method:e,url:r,data:(s||{}).data}))}});je.forEach(["post","put","patch"],function(e){function r(s){return function(a,i,u){return this.request(H(u||{},{method:e,headers:s?{"Content-Type":"multipart/form-data"}:{},url:a,data:i}))}}N.prototype[e]=r(),N.prototype[e+"Form"]=r(!0)});var ar=N,ir=q;function g(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var r=this;this.promise.then(function(s){if(!!r._listeners){var n,a=r._listeners.length;for(n=0;n<a;n++)r._listeners[n](s);r._listeners=null}}),this.promise.then=function(s){var n,a=new Promise(function(i){r.subscribe(i),n=i}).then(s);return a.cancel=function(){r.unsubscribe(n)},a},t(function(n){r.reason||(r.reason=new ir(n),e(r.reason))})}g.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};g.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};g.prototype.unsubscribe=function(e){if(!!this._listeners){var r=this._listeners.indexOf(e);r!==-1&&this._listeners.splice(r,1)}};g.source=function(){var e,r=new g(function(n){e=n});return{token:r,cancel:e}};var or=g,ur=function(e){return function(s){return e.apply(null,s)}},lr=h,fr=function(e){return lr.isObject(e)&&e.isAxiosError===!0},Ae=h,cr=Se,L=ar,dr=Le,hr=se;function qe(t){var e=new L(t),r=cr(L.prototype.request,e);return Ae.extend(r,L.prototype,e),Ae.extend(r,e),r.create=function(n){return qe(dr(t,n))},r}var m=qe(hr);m.Axios=L;m.CanceledError=q;m.CancelToken=or;m.isCancel=Fe;m.VERSION=ke.version;m.toFormData=$e;m.AxiosError=D;m.Cancel=m.CanceledError;m.all=function(e){return Promise.all(e)};m.spread=ur;m.isAxiosError=fr;Y.exports=m;Y.exports.default=m;var pr=Y.exports;const mr="https://jsonplaceholder.typicode.com/users",vr=He({id:"post",state:()=>({posts:[]}),getters:{getPosts(t){return t.posts}},actions:{async fetchPosts(){console.log("Try to Fetch");try{const t=await pr.get(mr);this.posts=t.data,console.log("Fetched",this.posts)}catch(t){alert(t),console.log(t)}}}}),Er={class:"block"},yr={class:"rev"},br=j("i",null,"Getters",-1),_r=j("hr",null,null,-1),wr=j("i",null,"Actions",-1),Rr=Oe('<hr><div class="avatar"><div class="w-24 rounded-full"><img src="https://api.lorem.space/image/face?hash=92310"></div></div><hr><div class="mockup-phone border-primary"><div class="camera"></div><div class="display"><div class="artboard artboard-demo phone-1">Hi.</div></div></div>',4),Ar={setup(t){const e=vr(),r=Ve("Welcome to state manager"),s=ue(()=>e.posts),n=ue(()=>e.getPosts);return Je(()=>{e.fetchPosts()}),(a,i)=>(C(),x("div",Er,[j("div",yr,"DATA "+$(r.value),1),br,(C(!0),x(le,null,fe(ce(n),u=>(C(),x("div",{key:u.id},$(u.id)+" "+$(u.name),1))),128)),_r,wr,(C(!0),x(le,null,fe(ce(s),u=>(C(),x("div",{key:u.id},$(u.id)+" "+$(u.name),1))),128)),Rr]))}},Or=Oe('<h1 id="music-markdown-it-plugin" tabindex="-1">Music Markdown-it plugin?</h1><div class="tabs"><a class="tab tab-lifted">Tab 1</a><a class="tab tab-lifted tab-active">Tab 2</a><a class="tab tab-lifted">Tab 3</a></div><p>c1: Am l1: All the leaves are brown</p><p>c1: Am G F G Esus4 E l1: All the leaves are brown and the sky is gray</p><p>c1: F C E Am F Esus4 E l1: I&#39;ve been for a walk on a winter&#39;s day</p><p>c1: Dm Am G l2: They don&#39;t know how long it takes l1: They don&#39;t know how long it takes</p><hr><p>youTubeId: acvIVA9-FMQ</p><hr><hr><p>chords: Gdim: - o3 b1,4,3 n2,4 n3,5 m5 m6</p><hr><p>:::abc C D E F G A B c :::</p><p>:::vextab options space=20</p><p>tabstave notation=true key=A time=4/4</p><p>notes :q =|: (5/2.5/3.7/4) :8 7-5h6/3 ^3^ 5h6-7/5 ^3^ :q 7V/4 | notes :8 t12p7/4 s5s3/4 :8 3s:16:5-7/5 :h p5/4 text :w, |#segno, ,|, :hd, , #tr :::</p><hr><h1 class="special" id="hello-vitepress" tabindex="-1">Hello Vitepress</h1>',18),Sr=Ge("The rain in Spain stays *mainly* in the Plains!"),xr='{"title":"Music Markdown-it plugin?","description":"","frontmatter":{},"headers":[],"relativePath":"pages/music.md"}',Tr={},Pr=Object.assign(Tr,{setup(t){return(e,r)=>(C(),x("div",null,[Or,de(Ar),de(ze,{title:"Hello Mr Big",src:"https://api.lorem.space/image/shoes?w=400&h=225",actiontext:"Sell Now"},{default:We(()=>[Sr]),_:1})]))}});export{xr as __pageData,Pr as default};