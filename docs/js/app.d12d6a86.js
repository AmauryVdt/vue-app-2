(function(e){function t(t){for(var n,o,i=t[0],c=t[1],u=t[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==a[i]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={app:0},a={app:0},s=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"8ab333db"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={about:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"0e433876"}[e]+".css",a=c.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],l=u.getAttribute("data-href");if(l===n||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete o[e],d.parentNode.removeChild(d),r(s)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",f.name="ChunkLoadError",f.type=n,f.request=o,r[1](f)}a[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue-app-2/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"21bb":function(e,t,r){"use strict";r("2dad")},"2d39":function(e,t,r){"use strict";r("646c")},"2dad":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("Background"),r("router-link",{attrs:{to:"/"}},[e._v("WW Home")]),e._v(" | "),r("router-link",{attrs:{to:"/test"}},[e._v("Test")])],1),r("router-view")],1)},a=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"letters"},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 500",preserveAspectRatio:"xMidYMax slice"}},[r("g",{attrs:{fill:"#000000","fill-opacity":".6"}},[r("g",{attrs:{id:"letters-bottom-layer"}},e._l(500,(function(t){return r("text",{key:t+"bottom",attrs:{x:e.randomNumber(-60,1020),y:e.randomNumber(6,1459),"font-size":"6"}},[e._v(e._s(e.letters[Math.floor(Math.random()*e.letters.length)]))])})),0)]),r("g",{attrs:{fill:"#000000","fill-opacity":".6",transform:"translate(65 63)"}},[r("g",{attrs:{id:"letters-top-layer"}},e._l(300,(function(t){return r("text",{key:t+"top",attrs:{x:e.randomNumber(-60,1020),y:e.randomNumber(8,1305),"font-size":"8"}},[e._v(e._s(e.letters[Math.floor(Math.random()*e.letters.length)]))])})),0)])])])},i=[],c={name:"Background",data:function(){return{letters:["M","T","W","A","P","R","T","Ï","Ý","ß","ñ","ę","Ď","Ķ","Ō","Ƒ","ƍ","Ʃ","Ʊ","Ǣ","ϴ","传","会","字","旧","医","Ƴ","Δ","Ϣ","Ȕ","Ç","ŕ","Ɯ"]}},methods:{randomNumber:function(e,t){return Math.random()*(t-e)+e}}},u=c,l=(r("671c"),r("2877")),f=Object(l["a"])(u,s,i,!1,null,"3fc975ce",null),d=f.exports,p={components:{Background:d}},m=p,g=(r("5c0b"),Object(l["a"])(m,o,a,!1,null,null,null)),h=g.exports,b=r("9483");Object(b["a"])("".concat("/vue-app-2/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("d3b7"),r("3ca3"),r("ddb0");var v=r("8c4f"),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:r("c01b")}}),n("br"),n("br"),n("br"),n("HelloWorld",{attrs:{msg:"Welcome to the WikiWars's Home page!"}}),n("h4",{staticClass:"click_to_start"},[e._v("Click on the button to play at this amazing game !")]),e._m(0)],1)},_=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{attrs:{action:"https://google.com"}},[r("button",{staticClass:"button_wikiwars rainbow",attrs:{type:"submit"}},[e._v("W I K I W A R S")])])}],w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))])])},k=[],x={name:"HelloWorld",props:{msg:String}},j=x,O=(r("2d39"),Object(l["a"])(j,w,k,!1,null,"24addfd9",null)),E=O.exports,C={name:"Home",components:{HelloWorld:E}},N=C,A=(r("21bb"),Object(l["a"])(N,y,_,!1,null,null,null)),M=A.exports;n["a"].use(v["a"]);var S=[{path:"/",name:"Home",component:M},{path:"/test",name:"Test",component:function(){return r.e("about").then(r.bind(null,"78c1"))}}],T=new v["a"]({routes:S}),P=T;n["a"].config.productionTip=!1,new n["a"]({router:P,render:function(e){return e(h)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"646c":function(e,t,r){},"671c":function(e,t,r){"use strict";r("c30e")},"9c0c":function(e,t,r){},c01b:function(e,t,r){e.exports=r.p+"img/wikiwars_logo.a4b95650.png"},c30e:function(e,t,r){}});
//# sourceMappingURL=app.d12d6a86.js.map