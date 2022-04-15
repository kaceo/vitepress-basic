import{g as Ne,r as Pe,h as Z,i as $e,o as C,c as T,b as U,t as g,F as ee,j as te,e as re,a as pe,d as ne,w as Ue,k as Be,f as De}from"./app.2ed069e6.js";var J={exports:{}},me=function(e,r){return function(){for(var n=new Array(arguments.length),a=0;a<n.length;a++)n[a]=arguments[a];return e.apply(r,n)}},ke=me,w=Object.prototype.toString;function z(t){return Array.isArray(t)}function H(t){return typeof t=="undefined"}function je(t){return t!==null&&!H(t)&&t.constructor!==null&&!H(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}function ve(t){return w.call(t)==="[object ArrayBuffer]"}function Le(t){return w.call(t)==="[object FormData]"}function qe(t){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&ve(t.buffer),e}function Fe(t){return typeof t=="string"}function Ie(t){return typeof t=="number"}function be(t){return t!==null&&typeof t=="object"}function P(t){if(w.call(t)!=="[object Object]")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}function Me(t){return w.call(t)==="[object Date]"}function He(t){return w.call(t)==="[object File]"}function Ve(t){return w.call(t)==="[object Blob]"}function ye(t){return w.call(t)==="[object Function]"}function Je(t){return be(t)&&ye(t.pipe)}function ze(t){return w.call(t)==="[object URLSearchParams]"}function We(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function Ge(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function W(t,e){if(!(t===null||typeof t=="undefined"))if(typeof t!="object"&&(t=[t]),z(t))for(var r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.call(null,t[n],n,t)}function V(){var t={};function e(n,a){P(t[a])&&P(n)?t[a]=V(t[a],n):P(n)?t[a]=V({},n):z(n)?t[a]=n.slice():t[a]=n}for(var r=0,s=arguments.length;r<s;r++)W(arguments[r],e);return t}function Xe(t,e,r){return W(e,function(n,a){r&&typeof n=="function"?t[a]=ke(n,r):t[a]=n}),t}function Ke(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}var h={isArray:z,isArrayBuffer:ve,isBuffer:je,isFormData:Le,isArrayBufferView:qe,isString:Fe,isNumber:Ie,isObject:be,isPlainObject:P,isUndefined:H,isDate:Me,isFile:He,isBlob:Ve,isFunction:ye,isStream:Je,isURLSearchParams:ze,isStandardBrowserEnv:Ge,forEach:W,merge:V,extend:Xe,trim:We,stripBOM:Ke},S=h;function se(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var we=function(e,r,s){if(!r)return e;var n;if(s)n=s(r);else if(S.isURLSearchParams(r))n=r.toString();else{var a=[];S.forEach(r,function(l,m){l===null||typeof l=="undefined"||(S.isArray(l)?m=m+"[]":l=[l],S.forEach(l,function(c){S.isDate(c)?c=c.toISOString():S.isObject(c)&&(c=JSON.stringify(c)),a.push(se(m)+"="+se(c))}))}),n=a.join("&")}if(n){var u=e.indexOf("#");u!==-1&&(e=e.slice(0,u)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},Qe=h;function B(){this.handlers=[]}B.prototype.use=function(e,r,s){return this.handlers.push({fulfilled:e,rejected:r,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1};B.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};B.prototype.forEach=function(e){Qe.forEach(this.handlers,function(s){s!==null&&e(s)})};var Ye=B,Ze=h,et=function(e,r){Ze.forEach(e,function(n,a){a!==r&&a.toUpperCase()===r.toUpperCase()&&(e[r]=n,delete e[a])})},Ee=function(e,r,s,n,a){return e.config=r,s&&(e.code=s),e.request=n,e.response=a,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},_e={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},tt=Ee,Se=function(e,r,s,n,a){var u=new Error(e);return tt(u,r,s,n,a)},rt=Se,nt=function(e,r,s){var n=s.config.validateStatus;!s.status||!n||n(s.status)?e(s):r(rt("Request failed with status code "+s.status,s.config,null,s.request,s))},O=h,st=O.isStandardBrowserEnv()?function(){return{write:function(r,s,n,a,u,o){var l=[];l.push(r+"="+encodeURIComponent(s)),O.isNumber(n)&&l.push("expires="+new Date(n).toGMTString()),O.isString(a)&&l.push("path="+a),O.isString(u)&&l.push("domain="+u),o===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(r){var s=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return s?decodeURIComponent(s[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),at=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},it=function(e,r){return r?e.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):e},ot=at,ut=it,lt=function(e,r){return e&&!ot(r)?ut(e,r):r},q=h,ct=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],ft=function(e){var r={},s,n,a;return e&&q.forEach(e.split(`
`),function(o){if(a=o.indexOf(":"),s=q.trim(o.substr(0,a)).toLowerCase(),n=q.trim(o.substr(a+1)),s){if(r[s]&&ct.indexOf(s)>=0)return;s==="set-cookie"?r[s]=(r[s]?r[s]:[]).concat([n]):r[s]=r[s]?r[s]+", "+n:n}}),r},ae=h,dt=ae.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),s;function n(a){var u=a;return e&&(r.setAttribute("href",u),u=r.href),r.setAttribute("href",u),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return s=n(window.location.href),function(u){var o=ae.isString(u)?n(u):u;return o.protocol===s.protocol&&o.host===s.host}}():function(){return function(){return!0}}();function G(t){this.message=t}G.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};G.prototype.__CANCEL__=!0;var D=G,N=h,ht=nt,pt=st,mt=we,vt=lt,bt=ft,yt=dt,F=Se,wt=_e,Et=D,ie=function(e){return new Promise(function(s,n){var a=e.data,u=e.headers,o=e.responseType,l;function m(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}N.isFormData(a)&&delete u["Content-Type"];var i=new XMLHttpRequest;if(e.auth){var c=e.auth.username||"",b=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";u.Authorization="Basic "+btoa(c+":"+b)}var d=vt(e.baseURL,e.url);i.open(e.method.toUpperCase(),mt(d,e.params,e.paramsSerializer),!0),i.timeout=e.timeout;function Q(){if(!!i){var v="getAllResponseHeaders"in i?bt(i.getAllResponseHeaders()):null,_=!o||o==="text"||o==="json"?i.responseText:i.response,E={data:_,status:i.status,statusText:i.statusText,headers:v,config:e,request:i};ht(function(L){s(L),m()},function(L){n(L),m()},E),i=null}}if("onloadend"in i?i.onloadend=Q:i.onreadystatechange=function(){!i||i.readyState!==4||i.status===0&&!(i.responseURL&&i.responseURL.indexOf("file:")===0)||setTimeout(Q)},i.onabort=function(){!i||(n(F("Request aborted",e,"ECONNABORTED",i)),i=null)},i.onerror=function(){n(F("Network Error",e,null,i)),i=null},i.ontimeout=function(){var _=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",E=e.transitional||wt;e.timeoutErrorMessage&&(_=e.timeoutErrorMessage),n(F(_,e,E.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",i)),i=null},N.isStandardBrowserEnv()){var Y=(e.withCredentials||yt(d))&&e.xsrfCookieName?pt.read(e.xsrfCookieName):void 0;Y&&(u[e.xsrfHeaderName]=Y)}"setRequestHeader"in i&&N.forEach(u,function(_,E){typeof a=="undefined"&&E.toLowerCase()==="content-type"?delete u[E]:i.setRequestHeader(E,_)}),N.isUndefined(e.withCredentials)||(i.withCredentials=!!e.withCredentials),o&&o!=="json"&&(i.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&i.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&i.upload&&i.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(l=function(v){!i||(n(!v||v&&v.type?new Et("canceled"):v),i.abort(),i=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l))),a||(a=null),i.send(a)})},f=h,oe=et,_t=Ee,St=_e,At={"Content-Type":"application/x-www-form-urlencoded"};function ue(t,e){!f.isUndefined(t)&&f.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function Ct(){var t;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(t=ie),t}function Tt(t,e,r){if(f.isString(t))try{return(e||JSON.parse)(t),f.trim(t)}catch(s){if(s.name!=="SyntaxError")throw s}return(r||JSON.stringify)(t)}var k={transitional:St,adapter:Ct(),transformRequest:[function(e,r){return oe(r,"Accept"),oe(r,"Content-Type"),f.isFormData(e)||f.isArrayBuffer(e)||f.isBuffer(e)||f.isStream(e)||f.isFile(e)||f.isBlob(e)?e:f.isArrayBufferView(e)?e.buffer:f.isURLSearchParams(e)?(ue(r,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):f.isObject(e)||r&&r["Content-Type"]==="application/json"?(ue(r,"application/json"),Tt(e)):e}],transformResponse:[function(e){var r=this.transitional||k.transitional,s=r&&r.silentJSONParsing,n=r&&r.forcedJSONParsing,a=!s&&this.responseType==="json";if(a||n&&f.isString(e)&&e.length)try{return JSON.parse(e)}catch(u){if(a)throw u.name==="SyntaxError"?_t(u,this,"E_JSON_PARSE"):u}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};f.forEach(["delete","get","head"],function(e){k.headers[e]={}});f.forEach(["post","put","patch"],function(e){k.headers[e]=f.merge(At)});var X=k,xt=h,gt=X,Rt=function(e,r,s){var n=this||gt;return xt.forEach(s,function(u){e=u.call(n,e,r)}),e},Ae=function(e){return!!(e&&e.__CANCEL__)},le=h,I=Rt,Ot=Ae,Nt=X,Pt=D;function M(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Pt("canceled")}var $t=function(e){M(e),e.headers=e.headers||{},e.data=I.call(e,e.data,e.headers,e.transformRequest),e.headers=le.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),le.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var r=e.adapter||Nt.adapter;return r(e).then(function(n){return M(e),n.data=I.call(e,n.data,n.headers,e.transformResponse),n},function(n){return Ot(n)||(M(e),n&&n.response&&(n.response.data=I.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},p=h,Ce=function(e,r){r=r||{};var s={};function n(i,c){return p.isPlainObject(i)&&p.isPlainObject(c)?p.merge(i,c):p.isPlainObject(c)?p.merge({},c):p.isArray(c)?c.slice():c}function a(i){if(p.isUndefined(r[i])){if(!p.isUndefined(e[i]))return n(void 0,e[i])}else return n(e[i],r[i])}function u(i){if(!p.isUndefined(r[i]))return n(void 0,r[i])}function o(i){if(p.isUndefined(r[i])){if(!p.isUndefined(e[i]))return n(void 0,e[i])}else return n(void 0,r[i])}function l(i){if(i in r)return n(e[i],r[i]);if(i in e)return n(void 0,e[i])}var m={url:u,method:u,data:u,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l};return p.forEach(Object.keys(e).concat(Object.keys(r)),function(c){var b=m[c]||a,d=b(c);p.isUndefined(d)&&b!==l||(s[c]=d)}),s},Te={version:"0.26.1"},Ut=Te.version,K={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){K[t]=function(s){return typeof s===t||"a"+(e<1?"n ":" ")+t}});var ce={};K.transitional=function(e,r,s){function n(a,u){return"[Axios v"+Ut+"] Transitional option '"+a+"'"+u+(s?". "+s:"")}return function(a,u,o){if(e===!1)throw new Error(n(u," has been removed"+(r?" in "+r:"")));return r&&!ce[u]&&(ce[u]=!0,console.warn(n(u," has been deprecated since v"+r+" and will be removed in the near future"))),e?e(a,u,o):!0}};function Bt(t,e,r){if(typeof t!="object")throw new TypeError("options must be an object");for(var s=Object.keys(t),n=s.length;n-- >0;){var a=s[n],u=e[a];if(u){var o=t[a],l=o===void 0||u(o,a,t);if(l!==!0)throw new TypeError("option "+a+" must be "+l);continue}if(r!==!0)throw Error("Unknown option "+a)}}var Dt={assertOptions:Bt,validators:K},xe=h,kt=we,fe=Ye,de=$t,j=Ce,ge=Dt,A=ge.validators;function R(t){this.defaults=t,this.interceptors={request:new fe,response:new fe}}R.prototype.request=function(e,r){typeof e=="string"?(r=r||{},r.url=e):r=e||{},r=j(this.defaults,r),r.method?r.method=r.method.toLowerCase():this.defaults.method?r.method=this.defaults.method.toLowerCase():r.method="get";var s=r.transitional;s!==void 0&&ge.assertOptions(s,{silentJSONParsing:A.transitional(A.boolean),forcedJSONParsing:A.transitional(A.boolean),clarifyTimeoutError:A.transitional(A.boolean)},!1);var n=[],a=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(r)===!1||(a=a&&d.synchronous,n.unshift(d.fulfilled,d.rejected))});var u=[];this.interceptors.response.forEach(function(d){u.push(d.fulfilled,d.rejected)});var o;if(!a){var l=[de,void 0];for(Array.prototype.unshift.apply(l,n),l=l.concat(u),o=Promise.resolve(r);l.length;)o=o.then(l.shift(),l.shift());return o}for(var m=r;n.length;){var i=n.shift(),c=n.shift();try{m=i(m)}catch(b){c(b);break}}try{o=de(m)}catch(b){return Promise.reject(b)}for(;u.length;)o=o.then(u.shift(),u.shift());return o};R.prototype.getUri=function(e){return e=j(this.defaults,e),kt(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};xe.forEach(["delete","get","head","options"],function(e){R.prototype[e]=function(r,s){return this.request(j(s||{},{method:e,url:r,data:(s||{}).data}))}});xe.forEach(["post","put","patch"],function(e){R.prototype[e]=function(r,s,n){return this.request(j(n||{},{method:e,url:r,data:s}))}});var jt=R,Lt=D;function x(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var r=this;this.promise.then(function(s){if(!!r._listeners){var n,a=r._listeners.length;for(n=0;n<a;n++)r._listeners[n](s);r._listeners=null}}),this.promise.then=function(s){var n,a=new Promise(function(u){r.subscribe(u),n=u}).then(s);return a.cancel=function(){r.unsubscribe(n)},a},t(function(n){r.reason||(r.reason=new Lt(n),e(r.reason))})}x.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};x.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};x.prototype.unsubscribe=function(e){if(!!this._listeners){var r=this._listeners.indexOf(e);r!==-1&&this._listeners.splice(r,1)}};x.source=function(){var e,r=new x(function(n){e=n});return{token:r,cancel:e}};var qt=x,Ft=function(e){return function(s){return e.apply(null,s)}},It=h,Mt=function(e){return It.isObject(e)&&e.isAxiosError===!0},he=h,Ht=me,$=jt,Vt=Ce,Jt=X;function Re(t){var e=new $(t),r=Ht($.prototype.request,e);return he.extend(r,$.prototype,e),he.extend(r,e),r.create=function(n){return Re(Vt(t,n))},r}var y=Re(Jt);y.Axios=$;y.Cancel=D;y.CancelToken=qt;y.isCancel=Ae;y.VERSION=Te.version;y.all=function(e){return Promise.all(e)};y.spread=Ft;y.isAxiosError=Mt;J.exports=y;J.exports.default=y;var zt=J.exports;const Wt="https://jsonplaceholder.typicode.com/users",Gt=Ne({id:"post",state:()=>({posts:[]}),getters:{getPosts(t){return t.posts}},actions:{async fetchPosts(){console.log("Try to Fetch");try{const t=await zt.get(Wt);this.posts=t.data,console.log("Fetched",this.posts)}catch(t){alert(t),console.log(t)}}}}),Xt={class:"block"},Kt={class:"rev"},Qt=U("i",null,"Getters",-1),Yt=U("hr",null,null,-1),Zt=U("i",null,"Actions",-1),er=pe('<hr><div class="avatar"><div class="w-24 rounded-full"><img src="https://api.lorem.space/image/face?hash=92310"></div></div><hr><div class="mockup-phone border-primary"><div class="camera"></div><div class="display"><div class="artboard artboard-demo phone-1">Hi.</div></div></div>',4),tr={setup(t){const e=Gt(),r=Pe("Welcome to state manager"),s=Z(()=>e.posts),n=Z(()=>e.getPosts);return $e(()=>{e.fetchPosts()}),(a,u)=>(C(),T("div",Xt,[U("div",Kt,"DATA "+g(r.value),1),Qt,(C(!0),T(ee,null,te(re(n),o=>(C(),T("div",{key:o.id},g(o.id)+" "+g(o.name),1))),128)),Yt,Zt,(C(!0),T(ee,null,te(re(s),o=>(C(),T("div",{key:o.id},g(o.id)+" "+g(o.name),1))),128)),er]))}},rr=pe('<h1 id="music-markdown-it-plugin" tabindex="-1">Music Markdown-it plugin?</h1><div class="tabs"><a class="tab tab-lifted">Tab 1</a><a class="tab tab-lifted tab-active">Tab 2</a><a class="tab tab-lifted">Tab 3</a></div><p>c1: Am l1: All the leaves are brown</p><p>c1: Am G F G Esus4 E l1: All the leaves are brown and the sky is gray</p><p>c1: F C E Am F Esus4 E l1: I&#39;ve been for a walk on a winter&#39;s day</p><p>c1: Dm Am G l2: They don&#39;t know how long it takes l1: They don&#39;t know how long it takes</p><hr><p>youTubeId: acvIVA9-FMQ</p><hr><hr><p>chords: Gdim: - o3 b1,4,3 n2,4 n3,5 m5 m6</p><hr><p>:::abc C D E F G A B c :::</p><p>:::vextab options space=20</p><p>tabstave notation=true key=A time=4/4</p><p>notes :q =|: (5/2.5/3.7/4) :8 7-5h6/3 ^3^ 5h6-7/5 ^3^ :q 7V/4 | notes :8 t12p7/4 s5s3/4 :8 3s:16:5-7/5 :h p5/4 text :w, |#segno, ,|, :hd, , #tr :::</p><hr><h1 class="special" id="hello-vitepress" tabindex="-1">Hello Vitepress</h1>',18),nr=De("The rain in Spain stays *mainly* in the Plains!"),ir='{"title":"Music Markdown-it plugin?","description":"","frontmatter":{},"headers":[],"relativePath":"pages/music.md"}',sr={},or=Object.assign(sr,{setup(t){return(e,r)=>(C(),T("div",null,[rr,ne(tr),ne(Be,{title:"Hello Mr Big",src:"https://api.lorem.space/image/shoes?w=400&h=225",actiontext:"Sell Now"},{default:Ue(()=>[nr]),_:1})]))}});export{ir as __pageData,or as default};
