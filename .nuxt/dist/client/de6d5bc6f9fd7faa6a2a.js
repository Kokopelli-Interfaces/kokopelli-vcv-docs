(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{226:function(t,e,l){var content=l(243);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(7).default)("7c69cbb8",content,!0,{sourceMap:!1})},227:function(t,e,l){var content=l(249);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(7).default)("32a981e8",content,!0,{sourceMap:!1})},240:function(t){t.exports={}},242:function(t,e,l){"use strict";var r=l(226);l.n(r).a},243:function(t,e,l){(t.exports=l(6)(!1)).push([t.i,".module-list .title[data-v-48264476]{margin-bottom:20px}.module-list ul[data-v-48264476]{margin-top:0;margin-bottom:0;padding-left:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));grid-gap:20px 60px}@media screen and (max-width:767px){.module-list ul[data-v-48264476]{grid-gap:20px 40px}}.module-list ul li[data-v-48264476]{list-style:none;font-size:14px}.module-list ul li .module-link[data-v-48264476]{display:flex;align-items:center;height:100%}.module-list ul li .module-link[data-v-48264476]:hover{text-decoration:underline}.module-list ul li .module-link .name-section[data-v-48264476]{margin-right:auto;padding-right:10px;display:flex;flex-direction:column;justify-content:center}.module-list ul li .module-link .name-section .module-name[data-v-48264476]{font-family:Montserrat;font-weight:600;font-size:15px}.module-list ul li .module-link .name-section .module-function[data-v-48264476]{opacity:.6;margin-top:4px}.module-list ul li .module-link .price-section[data-v-48264476]{display:flex;align-items:center;margin-right:30px}.module-list ul li .module-link .price-section .label[data-v-48264476]{margin-right:20px}.module-list ul li .module-link .arrow[data-v-48264476]{flex-shrink:0}",""])},248:function(t,e,l){"use strict";var r=l(227);l.n(r).a},249:function(t,e,l){(t.exports=l(6)(!1)).push([t.i,".article-layout[data-v-46b60de6]{display:flex;flex-wrap:wrap;margin-bottom:60px}@media screen and (max-width:767px){.article-layout[data-v-46b60de6]{margin-top:40px}}@media screen and (min-width:768px){.article-layout[data-v-46b60de6]{margin-top:50px;margin-left:-30px;margin-right:-30px}.article-layout>*[data-v-46b60de6]{padding-left:30px;padding-right:30px}}.article-layout .article[data-v-46b60de6]{flex-basis:700px;flex-grow:100000;flex-shrink:1}.article-layout .aside[data-v-46b60de6]{flex-basis:420px;flex-grow:1}",""])},264:function(t,e,l){"use strict";var r=l(266),n=l(37),o=(l(240),l(232)),d=l(241),c=l(224),m={props:{modules:{type:Array,default:function(){return[]}},title:{type:String,default:""}},components:{Arrow:o.a,PriceLabel:d.a,Ttl:c.a}},f=(l(242),l(2)),x=Object(f.a)(m,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"module-list"},[t.title?l("ttl",{staticClass:"title",attrs:{level:2}},[t._v(t._s(t.title))]):t._e(),l("ul",t._l(t.modules,function(e){return l("li",[l("nuxt-link",{staticClass:"module-link",attrs:{to:{name:"categorySlug-moduleSlug",params:{categorySlug:e.category.slug,moduleSlug:e.slug}}}},[l("div",{staticClass:"name-section"},[l("div",{staticClass:"module-name"},[t._v(t._s(e.name))]),l("div",{staticClass:"module-function"},[t._v(t._s(e.function))])]),l("div",{staticClass:"price-section"},[l("price-label",{staticClass:"label"}),t._v(t._s(e.price?"$"+e.price:t.$t("free")))],1),l("arrow",{staticClass:"arrow"})],1)],1)}),0)],1)},[],!1,null,"48264476",null).exports,v=l(265),h=l(231),y=new(l(247).a),w={components:{ArticleContent:r.a,Container:n.a,ModuleList:x,Rack:v.a,Subttl:h.a,Ttl:c.a},props:{crumbs:{type:Array,default:function(){return[]}},modules:{type:Array,default:function(){return[]}},relatedModules:{type:Array,default:function(){return[]}},markdown:{type:String,required:!0}},computed:{structure:function(){return y.parse(this.markdown)}}},k=(l(248),Object(f.a)(w,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"article-page"},[e("rack",{attrs:{crumbs:this.crumbs,modules:this.modules}}),e("container",[e("div",{staticClass:"article-layout"},[e("article",{staticClass:"article"},[e("article-content",{staticClass:"content",attrs:{struct:this.structure}})],1),e("aside",{staticClass:"aside"},[e("module-list",{attrs:{title:this.$t("relatedModules"),modules:this.relatedModules}})],1)])])],1)},[],!1,null,"46b60de6",null));e.a=k.exports},322:function(t,e,l){"use strict";l.r(e);l(64);var r=l(9),n=l(264),o=l(229),d={components:{ArticlePage:n.a},asyncData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var l,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l=e.$axios,e.app,e.params,"/markdown/index.md",t.next=4,l.$get("/markdown/index.md");case 4:return r=t.sent,t.abrupt("return",{markdown:r});case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),data:function(){return{modules:o.a}}},c=l(2),component=Object(c.a)(d,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index-page"},[e("article-page",{attrs:{markdown:this.markdown,crumbs:[],modules:this.modules,relatedModules:this.modules}})],1)},[],!1,null,null,null);e.default=component.exports}}]);