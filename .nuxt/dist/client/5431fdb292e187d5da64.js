(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{226:function(t,e,r){var content=r(243);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(7).default)("7c69cbb8",content,!0,{sourceMap:!1})},227:function(t,e,r){var content=r(249);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(7).default)("32a981e8",content,!0,{sourceMap:!1})},230:function(t,e,r){"use strict";var n=r(11),l=r(250)(5),o=!0;"find"in[]&&Array(1).find(function(){o=!1}),n(n.P+n.F*o,"Array",{find:function(t){return l(this,t,arguments.length>1?arguments[1]:void 0)}}),r(83)("find")},240:function(t){t.exports={}},242:function(t,e,r){"use strict";var n=r(226);r.n(n).a},243:function(t,e,r){(t.exports=r(6)(!1)).push([t.i,".module-list .title[data-v-48264476]{margin-bottom:20px}.module-list ul[data-v-48264476]{margin-top:0;margin-bottom:0;padding-left:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));grid-gap:20px 60px}@media screen and (max-width:767px){.module-list ul[data-v-48264476]{grid-gap:20px 40px}}.module-list ul li[data-v-48264476]{list-style:none;font-size:14px}.module-list ul li .module-link[data-v-48264476]{display:flex;align-items:center;height:100%}.module-list ul li .module-link[data-v-48264476]:hover{text-decoration:underline}.module-list ul li .module-link .name-section[data-v-48264476]{margin-right:auto;padding-right:10px;display:flex;flex-direction:column;justify-content:center}.module-list ul li .module-link .name-section .module-name[data-v-48264476]{font-family:Montserrat;font-weight:600;font-size:15px}.module-list ul li .module-link .name-section .module-function[data-v-48264476]{opacity:.6;margin-top:4px}.module-list ul li .module-link .price-section[data-v-48264476]{display:flex;align-items:center;margin-right:30px}.module-list ul li .module-link .price-section .label[data-v-48264476]{margin-right:20px}.module-list ul li .module-link .arrow[data-v-48264476]{flex-shrink:0}",""])},248:function(t,e,r){"use strict";var n=r(227);r.n(n).a},249:function(t,e,r){(t.exports=r(6)(!1)).push([t.i,".article-layout[data-v-46b60de6]{display:flex;flex-wrap:wrap;margin-bottom:60px}@media screen and (max-width:767px){.article-layout[data-v-46b60de6]{margin-top:40px}}@media screen and (min-width:768px){.article-layout[data-v-46b60de6]{margin-top:50px;margin-left:-30px;margin-right:-30px}.article-layout>*[data-v-46b60de6]{padding-left:30px;padding-right:30px}}.article-layout .article[data-v-46b60de6]{flex-basis:700px;flex-grow:100000;flex-shrink:1}.article-layout .aside[data-v-46b60de6]{flex-basis:420px;flex-grow:1}",""])},250:function(t,e,r){var n=r(28),l=r(82),o=r(38),c=r(21),d=r(251);t.exports=function(t,e){var r=1==t,m=2==t,f=3==t,v=4==t,x=6==t,y=5==t||x,h=e||d;return function(e,d,w){for(var k,C,_=o(e),A=l(_),S=n(d,w,3),$=c(A.length),M=0,j=r?h(e,$):m?h(e,0):void 0;$>M;M++)if((y||M in A)&&(C=S(k=A[M],M,_),t))if(r)j[M]=C;else if(C)switch(t){case 3:return!0;case 5:return k;case 6:return M;case 2:j.push(k)}else if(v)return!1;return x?-1:f||v?v:j}}},251:function(t,e,r){var n=r(252);t.exports=function(t,e){return new(n(t))(e)}},252:function(t,e,r){var n=r(13),l=r(119),o=r(3)("species");t.exports=function(t){var e;return l(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!l(e.prototype)||(e=void 0),n(e)&&null===(e=e[o])&&(e=void 0)),void 0===e?Array:e}},264:function(t,e,r){"use strict";var n=r(266),l=r(37),o=(r(240),r(232)),c=r(241),d=r(224),m={props:{modules:{type:Array,default:function(){return[]}},title:{type:String,default:""}},components:{Arrow:o.a,PriceLabel:c.a,Ttl:d.a}},f=(r(242),r(2)),v=Object(f.a)(m,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"module-list"},[t.title?r("ttl",{staticClass:"title",attrs:{level:2}},[t._v(t._s(t.title))]):t._e(),r("ul",t._l(t.modules,function(e){return r("li",[r("nuxt-link",{staticClass:"module-link",attrs:{to:{name:"categorySlug-moduleSlug",params:{categorySlug:e.category.slug,moduleSlug:e.slug}}}},[r("div",{staticClass:"name-section"},[r("div",{staticClass:"module-name"},[t._v(t._s(e.name))]),r("div",{staticClass:"module-function"},[t._v(t._s(e.function))])]),r("div",{staticClass:"price-section"},[r("price-label",{staticClass:"label"}),t._v(t._s(e.price?"$"+e.price:t.$t("free")))],1),r("arrow",{staticClass:"arrow"})],1)],1)}),0)],1)},[],!1,null,"48264476",null).exports,x=r(265),y=r(231),h=new(r(247).a),w={components:{ArticleContent:n.a,Container:l.a,ModuleList:v,Rack:x.a,Subttl:y.a,Ttl:d.a},props:{crumbs:{type:Array,default:function(){return[]}},modules:{type:Array,default:function(){return[]}},relatedModules:{type:Array,default:function(){return[]}},markdown:{type:String,required:!0}},computed:{structure:function(){return h.parse(this.markdown)}}},k=(r(248),Object(f.a)(w,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"article-page"},[e("rack",{attrs:{crumbs:this.crumbs,modules:this.modules}}),e("container",[e("div",{staticClass:"article-layout"},[e("article",{staticClass:"article"},[e("article-content",{staticClass:"content",attrs:{struct:this.structure}})],1),e("aside",{staticClass:"aside"},[e("module-list",{attrs:{title:this.$t("relatedModules"),modules:this.relatedModules}})],1)])])],1)},[],!1,null,"46b60de6",null));e.a=k.exports},323:function(t,e,r){"use strict";r.r(e);r(230),r(27),r(64);var n=r(9),l=(r(65),r(84),r(264)),o=r(90),c=r(229),d=function(t,e){return["free","paid"].includes(e)?t.filter(function(t){return t.price>0==("paid"===e)}):t.filter(function(t){return t.category.slug===e})},m={components:{ArticlePage:l.a},asyncData:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var r,n,path,l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$axios,e.app,n=e.params,path="/markdown/".concat(n.categorySlug,".md"),t.next=4,r.$get(path);case 4:return l=t.sent,t.abrupt("return",{markdown:l,modules:d(c.a,n.categorySlug)});case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),head:function(){return{title:"Kokopelli | ".concat(this.category.name)}},computed:{category:function(){var t=this;return o.a.find(function(e){return e.slug===t.$route.params.categorySlug})},crumbs:function(){return[{url:this.$route,title:this.category.name}]}}},f=r(2),component=Object(f.a)(m,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"category-page"},[e("article-page",{attrs:{markdown:this.markdown,crumbs:this.crumbs,modules:this.modules,relatedModules:this.modules}})],1)},[],!1,null,null,null);e.default=component.exports}}]);