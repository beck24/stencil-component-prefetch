var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){function a(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function s(e){try{l(n.next(e))}catch(t){i(t)}}function o(e){try{l(n["throw"](e))}catch(t){i(t)}}function l(e){e.done?r(e.value):a(e.value).then(s,o)}l((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(t){return l([e,t])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;a=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){r.label=s[1];break}if(s[0]===6&&r.label<i[1]){r.label=i[1];i=s;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(s);break}if(i[2])r.ops.pop();r.trys.pop();continue}s=t.call(e,r)}catch(o){s=[6,o];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),a=0,t=0;t<r;t++)for(var i=arguments[t],s=0,o=i.length;s<o;s++,a++)n[a]=i[s];return n};System.register([],(function(e,t){"use strict";return{execute:function(){var r=this;var n="stencil-component-prefetch";var a=0;var i=false;var s;var o;var l=false;var u=window;var c=document;var f={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)}};var $=function(){return!!c.documentElement.attachShadow}();var v=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var h=new WeakMap;var d=function(e){return h.get(e)};var p=e("r",(function(e,t){return h.set(t.$lazyInstance$=e,t)}));var m=function(e){var t={$flags$:0,$hostElement$:e,$instanceValues$:new Map};{t.$onInstancePromise$=new Promise((function(e){return t.$onInstanceResolve$=e}))}{t.$onReadyPromise$=new Promise((function(e){return t.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return h.set(e,t)};var g=function(e,t){return t in e};var y=function(e){return console.error(e)};var w=new Map;var b=function(e,r,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var s=w.get(i);if(s){return s[a]}return t.import("./"+i+".entry.js"+"").then((function(e){{w.set(i,e)}return e[a]}),y)};var _=new Map;var S=[];var R=[];var j=[];var x=function(e,t){return function(r){e.push(r);if(!i){i=true;if(t&&f.$flags$&4){L(C)}else{f.raf(C)}}}};var N=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(r){y(r)}}e.length=0};var E=function(e,t){var r=0;var n=0;while(r<e.length&&(n=performance.now())<t){try{e[r++](n)}catch(a){y(a)}}if(r===e.length){e.length=0}else if(r!==0){e.splice(0,r)}};var C=function(){a++;N(S);var e=(f.$flags$&6)===2?performance.now()+10*Math.ceil(a*(1/22)):Infinity;E(R,e);E(j,e);if(R.length>0){j.push.apply(j,R);R.length=0}if(i=S.length+R.length+j.length>0){f.raf(C)}else{a=0}};var L=function(e){return Promise.resolve().then(e)};var P=x(R,true);var U={};var A=function(e){return e!=null};var O=function(e){e=typeof e;return e==="object"||e==="function"};var k=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var I=function(e,t){if(t===void 0){t=""}{return function(){return}}};var M=function(e,t){{return function(){return}}};var T=e("a",(function(){if(!(u.CSS&&u.CSS.supports&&u.CSS.supports("color","var(--c)"))){return t.import("./p-a614138e.system.js").then((function(){f.$cssShim$=u.__stencil_cssshim;if(f.$cssShim$){return f.$cssShim$.initShim()}}))}return Promise.resolve()}));var B=e("p",(function(){return __awaiter(r,void 0,void 0,(function(){var e,r,a,i,s;return __generator(this,(function(o){switch(o.label){case 0:{f.$cssShim$=u.__stencil_cssshim}e=t.meta.url;r=new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)");a=Array.from(c.querySelectorAll("script")).find((function(e){return r.test(e.src)||e.getAttribute("data-stencil-namespace")===n}));i=a["data-opts"];if(!(e!==""))return[3,1];return[2,Object.assign(Object.assign({},i),{resourcesUrl:new URL(".",e).href})];case 1:s=new URL(".",new URL(a.getAttribute("data-resources-url")||a.src,u.location.href));H(s.href);if(!!window.customElements)return[3,3];return[4,t.import("./p-5b416380.system.js")];case 2:o.sent();o.label=3;case 3:return[2,Object.assign(Object.assign({},i),{resourcesUrl:s.href})]}}))}))}));var H=function(e){var t=k(n);try{u[t]=new Function("w","return import(w);//"+Math.random())}catch(a){var r=new Map;u[t]=function(n){var a=new URL(n,e).href;var i=r.get(a);if(!i){var s=c.createElement("script");s.type="module";s.src=URL.createObjectURL(new Blob(["import * as m from '"+a+"'; window."+t+".m = m;"],{type:"application/javascript"}));i=new Promise((function(e){s.onload=function(){e(u[t].m);s.remove()}}));r.set(a,i);c.head.appendChild(s)}return i}}};var z="hydrated";var q=new WeakMap;var F=function(e,t,r){var n=_.get(e);if(v&&r){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}_.set(e,n)};var W=function(e,t,r,n){var a=Q(t.$tagName$);var i=_.get(a);e=e.nodeType===11?e:c;if(i){if(typeof i==="string"){e=e.head||e;var s=q.get(e);var o=void 0;if(!s){q.set(e,s=new Set)}if(!s.has(a)){{if(f.$cssShim$){o=f.$cssShim$.createHostStyle(n,a,i,!!(t.$flags$&10));var l=o["s-sc"];if(l){a=l;s=null}}else{o=c.createElement("style");o.innerHTML=i}e.insertBefore(o,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var G=function(e,t,r){var n=I("attachStyles",t.$tagName$);var a=W($&&e.shadowRoot?e.shadowRoot:e.getRootNode(),t,r,e);if(t.$flags$&10){e["s-sc"]=a;e.classList.add(a+"-h")}n()};var Q=function(e,t){return"sc-"+e};var V=e("h",(function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=false;var s=false;var o=[];var l=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){l(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!O(a)){a=String(a)}if(i&&s){o[o.length-1].$text$+=a}else{o.push(i?D(null,a):a)}s=i}}};l(r);if(t){{var u=t.className||t.class;if(u){t.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}var c=D(e,null);c.$attrs$=t;if(o.length>0){c.$children$=o}return c}));var D=function(e,t){var r={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};{r.$attrs$=null}return r};var J={};var K=function(e){return e&&e.$tag$===J};var X=function(e,t,r,n,a,i){if(r===n){return}var s=g(e,t);var o=t.toLowerCase();if(t==="class"){var l=e.classList;var u=Z(r);var c=Z(n);l.remove.apply(l,u.filter((function(e){return e&&!c.includes(e)})));l.add.apply(l,c.filter((function(e){return e&&!u.includes(e)})))}else{var f=O(n);if((s||f&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var $=n==null?"":n;if(t==="list"){s=false}else if(r==null||e[t]!=$){e[t]=$}}else{e[t]=n}}catch(v){}}if(n==null||n===false){{e.removeAttribute(t)}}else if((!s||i&4||a)&&!f){n=n===true?"":n;{e.setAttribute(t,n)}}}};var Y=/\s/;var Z=function(e){return!e?[]:e.split(Y)};var ee=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||U;var s=t.$attrs$||U;for(n in s){X(a,n,i[n],s[n],r,t.$flags$)}};var te=function(e,t,r,n){var a=t.$children$[r];var i=0;var o;var u;if(a.$text$!==null){o=a.$elm$=c.createTextNode(a.$text$)}else{o=a.$elm$=c.createElement(a.$tag$);{ee(null,a,l)}if(A(s)&&o["s-si"]!==s){o.classList.add(o["s-si"]=s)}if(a.$children$){for(i=0;i<a.$children$.length;++i){u=te(e,a,i);if(u){o.appendChild(u)}}}}return o};var re=function(e,t,r,n,a,i){var s=e;var l;if(s.shadowRoot&&s.tagName===o){s=s.shadowRoot}for(;a<=i;++a){if(n[a]){l=te(null,r,a);if(l){n[a].$elm$=l;s.insertBefore(l,t)}}}};var ne=function(e,t){var r=t.$elm$=e.$elm$;var n=t.$children$;if(t.$text$===null){{{ee(e,t,l)}}if(n!==null){re(r,null,t,n,0,n.length-1)}}else if(e.$text$!==t.$text$){r.data=t.$text$}};var ae=function(e,t,r,n){o=e.tagName;var a=t.$vnode$||D(null,null);var i=K(n)?n:V(null,null,n);i.$tag$=null;i.$flags$|=4;t.$vnode$=i;i.$elm$=a.$elm$=e.shadowRoot||e;{s=e["s-sc"]}ne(a,i)};var ie=function(e,t){if(t&&!e.$onRenderResolve$){t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))}};var se=function(e,t,r,n){if(t.$flags$&4){t.$flags$|=512;return}var a=I("scheduleUpdate",r.$tagName$);var i=t.$ancestorComponent$;var s=t.$lazyInstance$;var o=function(){return oe(e,t,r,s,n)};ie(t,i);var l;a();return ce(l,(function(){return P(o)}))};var oe=function(e,t,r,n,a){var i=I("update",r.$tagName$);var s=e["s-rc"];if(a){G(e,r,t.$modeName$)}var o=I("render",r.$tagName$);{{try{ae(e,t,r,n.render())}catch(c){y(c)}}}if(f.$cssShim$){f.$cssShim$.updateHost(e)}{t.$flags$|=2}if(s){s.forEach((function(e){return e()}));e["s-rc"]=undefined}o();i();{var l=e["s-p"];var u=function(){return le(e,t,r)};if(l.length===0){u()}else{Promise.all(l).then(u);t.$flags$|=4;l.length=0}}};var le=function(e,t,r){var n=I("postUpdate",r.$tagName$);var a=t.$ancestorComponent$;if(!(t.$flags$&64)){t.$flags$|=64;{e.classList.add(z)}n();{t.$onReadyResolve$(e);if(!a){ue()}}}else{n()}{t.$onInstanceResolve$(e)}{if(t.$onRenderResolve$){t.$onRenderResolve$();t.$onRenderResolve$=undefined}if(t.$flags$&512){L((function(){return se(e,t,r,false)}))}t.$flags$&=~(4|512)}};var ue=function(e){{c.documentElement.classList.add(z)}{f.$flags$|=2}};var ce=function(e,t){return e&&e.then?e.then(t):t()};var fe=function(e,t,r){if(t.$members$){var n=Object.entries(t.$members$);var a=e.prototype;n.forEach((function(e){var t=e[0],n=e[1][0];if(r&1&&n&64){Object.defineProperty(a,t,{value:function(){var e=[];for(var r=0;r<arguments.length;r++){e[r]=arguments[r]}var n=d(this);return n.$onInstancePromise$.then((function(){var r;return(r=n.$lazyInstance$)[t].apply(r,e)}))}})}}))}return e};var $e=function(e,n,a,i,s){return __awaiter(r,void 0,void 0,(function(){var r,i,o,l,u,c,f;return __generator(this,(function($){switch($.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;s=b(a);if(!s.then)return[3,2];r=M();return[4,s];case 1:s=$.sent();r();$.label=2;case 2:if(!s.isProxied){fe(s,a,2);s.isProxied=true}i=I("createInstance",a.$tagName$);{n.$flags$|=8}try{new s(n)}catch(v){y(v)}{n.$flags$&=~8}i();o=Q(a.$tagName$);if(!(!_.has(o)&&s.style))return[3,5];l=I("registerStyles",a.$tagName$);u=s.style;if(!(a.$flags$&8))return[3,4];return[4,t.import("./p-ed968002.system.js").then((function(e){return e.scopeCss(u,o,false)}))];case 3:u=$.sent();$.label=4;case 4:F(o,u,!!(a.$flags$&1));l();$.label=5;case 5:c=n.$ancestorComponent$;f=function(){return se(e,n,a,true)};if(c&&c["s-rc"]){c["s-rc"].push(f)}else{f()}return[2]}}))}))};var ve=function(e,t){if((f.$flags$&1)===0){var r=I("connectedCallback",t.$tagName$);var n=d(e);if(!(n.$flags$&1)){n.$flags$|=1;{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){ie(n,n.$ancestorComponent$=a);break}}}{L((function(){return $e(e,n,t)}))}}r()}};var he=function(e){if((f.$flags$&1)===0){var t=d(e);if(f.$cssShim$){f.$cssShim$.removeHost(e)}}};var de=e("b",(function(e,t){if(t===void 0){t={}}var r=I();var n=[];var a=t.exclude||[];var i=c.head;var s=u.customElements;var o=i.querySelector("meta[charset]");var l=c.createElement("style");var v=[];var h;var p=true;Object.assign(f,t);f.$resourcesUrl$=new URL(t.resourcesUrl||"./",c.baseURI).href;if(t.syncQueue){f.$flags$|=4}e.forEach((function(e){return e[1].forEach((function(t){var r={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{r.$members$=t[2]}if(!$&&r.$flags$&1){r.$flags$|=8}var i=r.$tagName$;var o=function(e){__extends(t,e);function t(t){var n=e.call(this,t)||this;t=n;m(t);if(r.$flags$&1){if($){t.attachShadow({mode:"open"})}else if(!("shadowRoot"in t)){t.shadowRoot=t}}return n}t.prototype.connectedCallback=function(){var e=this;if(h){clearTimeout(h);h=null}if(p){v.push(this)}else{f.jmp((function(){return ve(e,r)}))}};t.prototype.disconnectedCallback=function(){var e=this;f.jmp((function(){return he(e)}))};t.prototype["s-hmr"]=function(e){};t.prototype.forceUpdate=function(){};t.prototype.componentOnReady=function(){return d(this).$onReadyPromise$};return t}(HTMLElement);r.$lazyBundleIds$=e[0];if(!a.includes(i)&&!s.get(i)){n.push(i);s.define(i,fe(o,r,1))}}))}));l.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}";l.setAttribute("data-styles","");i.insertBefore(l,o?o.nextSibling:i.firstChild);p=false;if(v.length>0){v.forEach((function(e){return e.connectedCallback()}))}else{f.jmp((function(){return h=setTimeout(ue,30,"timeout")}))}r()}));var pe=e("g",(function(e){return d(e).$hostElement$}))}}}));