(function(){var n={7130:function(n,o,t){"use strict";t.d(o,{o:function(){return b()}});var e=t(9242),r=t(3396);const i=["src"];function u(n,o,t,e,u,c){return(0,r.wg)(),(0,r.iD)("div",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(u.audios,((n,o)=>((0,r.wg)(),(0,r.iD)("audio",{key:o,src:n,controls:""},null,8,i)))),128))])}var c=t(9584);function f(n){function o(o){console.log(o),n.post("/test/receive",JSON.stringify(o)).then((n=>console.log(n)))}c.onTTFB((n=>o(n))),c.onFCP((n=>o(n))),c.onLCP((n=>o(n)))}const a=t(6853),s=a.keys().map(a);var l={data(){return{audios:s}},mounted(){f(b())},name:"AudioPage",props:{msg:String}},p=t(89);const d=(0,p.Z)(l,[["render",u]]);var v=d,g=t(6265),b=t.n(g);const h=(0,e.ri)(v);h.config.globalProperties.$WebVitals=c,h.config.globalProperties.$axios=b(),b().defaults.baseURL="http://localhost:8000",b().defaults.headers.post["Content-Type"]="application/json";h.config.globalProperties;h.mount("#app")},6853:function(n,o,t){var e={"./Cry for the moon.mp3":3220,"./You.mp3":7445};function r(n){var o=i(n);return t(o)}function i(n){if(!t.o(e,n)){var o=new Error("Cannot find module '"+n+"'");throw o.code="MODULE_NOT_FOUND",o}return e[n]}r.keys=function(){return Object.keys(e)},r.resolve=i,n.exports=r,r.id=6853},3220:function(n,o,t){"use strict";n.exports=t.p+"media/Cry for the moon.a3f85797.mp3"},7445:function(n,o,t){"use strict";n.exports=t.p+"media/You.f9a45933.mp3"}},o={};function t(e){var r=o[e];if(void 0!==r)return r.exports;var i=o[e]={exports:{}};return n[e](i,i.exports,t),i.exports}t.m=n,function(){var n=[];t.O=function(o,e,r,i){if(!e){var u=1/0;for(s=0;s<n.length;s++){e=n[s][0],r=n[s][1],i=n[s][2];for(var c=!0,f=0;f<e.length;f++)(!1&i||u>=i)&&Object.keys(t.O).every((function(n){return t.O[n](e[f])}))?e.splice(f--,1):(c=!1,i<u&&(u=i));if(c){n.splice(s--,1);var a=r();void 0!==a&&(o=a)}}return o}i=i||0;for(var s=n.length;s>0&&n[s-1][2]>i;s--)n[s]=n[s-1];n[s]=[e,r,i]}}(),function(){t.n=function(n){var o=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(o,{a:o}),o}}(),function(){t.d=function(n,o){for(var e in o)t.o(o,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:o[e]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,o){return Object.prototype.hasOwnProperty.call(n,o)}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){t.p=""}(),function(){var n={805:0};t.O.j=function(o){return 0===n[o]};var o=function(o,e){var r,i,u=e[0],c=e[1],f=e[2],a=0;if(u.some((function(o){return 0!==n[o]}))){for(r in c)t.o(c,r)&&(t.m[r]=c[r]);if(f)var s=f(t)}for(o&&o(e);a<u.length;a++)i=u[a],t.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return t.O(s)},e=self["webpackChunkwebsite"]=self["webpackChunkwebsite"]||[];e.forEach(o.bind(null,0)),e.push=o.bind(null,e.push.bind(e))}();var e=t.O(void 0,[998],(function(){return t(7130)}));e=t.O(e)})();
//# sourceMappingURL=audio.bfc2de9f.js.map