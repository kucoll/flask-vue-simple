(function(t){function e(e){for(var r,u,i=e[0],c=e[1],l=e[2],s=0,d=[];s<i.length;s++)u=i[s],o[u]&&d.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function u(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"3bc21d8b"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,r){n=o[t]=[e,r]});e.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=u(t),a=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,u=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");u.type=r,u.request=a,n[1](u)}o[t]=void 0}};var l=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n    "),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("router-view")],1)},a=[],u=(n("034f"),n("2877")),i={},c=Object(u["a"])(i,o,a,!1,null,null,null),l=c.exports,s=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("hello-world"),n("p",[t._v("Random number from backend: "+t._s(t.randomNumber))]),n("button",{on:{click:t.getRandom}},[t._v("New random number")])],1)},d=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))])])},m=[],v={name:"HelloWorld",props:{msg:String}},h=v,b=(n("5d06"),Object(u["a"])(h,p,m,!1,null,"43f48a4c",null)),_=b.exports,g={name:"home",data:function(){return{randomNumber:0}},components:{HelloWorld:_},methods:{getRandom:function(){this.randomNumber=this.get_random_from_back()},get_random_from_back:function(){var t=this,e="/api/random";this.$http.get(e).then(function(e){t.randomNumber=e.data.randomNumber}).catch(function(t){console.log(t)})}},created:function(){this.getRandom()}},y=g,w=Object(u["a"])(y,f,d,!1,null,null,null),j=w.exports,O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("404 - Not Found")])])}],x={},P=Object(u["a"])(x,O,k,!1,null,null,null),E=P.exports;r["a"].use(s["a"]);var N=new s["a"]({routes:[{path:"/",name:"home",component:j},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"*",name:"notfound",component:E}],mode:"history"}),S=n("2f62");r["a"].use(S["a"]);var $=new S["a"].Store({state:{},mutations:{},actions:{}}),T=n("7f43"),M=n.n(T),R=n("d4d8"),H=n.n(R);r["a"].use(H.a,M.a),r["a"].config.productionTip=!1,new r["a"]({router:N,store:$,render:function(t){return t(l)}}).$mount("#app")},"5d06":function(t,e,n){"use strict";var r=n("c671"),o=n.n(r);o.a},"64a9":function(t,e,n){},c671:function(t,e,n){}});
//# sourceMappingURL=app.3945caf6.js.map