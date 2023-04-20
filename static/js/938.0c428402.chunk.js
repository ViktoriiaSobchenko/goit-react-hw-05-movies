"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[938],{639:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(643),a="Loader_loader__+lRPl",c=r(184);var s=function(){return(0,c.jsx)(n.p2,{height:"200",width:"200",color:"#2db2ff",ariaLabel:"circles-loading",wrapperClass:a,visible:!0})}},155:function(e,t,r){r.d(t,{O:function(){return u}});var n=r(689),a=r(87),c=r(71),s={list:"MoviesList_list__0Owr9",item:"MoviesList_item__eePYv",link:"MoviesList_link__8rTGX",title:"MoviesList_title__PB2c8",icon:"MoviesList_icon__A8S+S"},i=r(184),u=function(e){var t=e.movies,r=(0,n.TH)();return(0,i.jsx)("ul",{className:s.list,children:t.map((function(e){return(0,i.jsx)("li",{className:s.item,children:(0,i.jsxs)(a.rU,{to:"/movies/".concat(e.id),state:{from:r},className:s.link,children:[e.poster_path?(0,i.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(e.poster_path),alt:e.title,className:s.img}):(0,i.jsx)(c.tpQ,{className:s.icon}),(0,i.jsx)("h3",{className:s.title,children:e.title})]})},e.id)}))})}},938:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var n=r(861),a=r(439),c=r(757),s=r.n(c),i=r(791),u=r(87),o=r(390),p=r(155),l=r(639),f="Muvies_form__S6lHv",h="Muvies_button__HC6-7",m="Muvies_input__M9P5J",v=r(184),d=function(){var e,t=(0,i.useState)([]),r=(0,a.Z)(t,2),c=r[0],d=r[1],_=(0,i.useState)("idle"),x=(0,a.Z)(_,2),y=x[0],g=x[1],w=(0,u.lr)(),k=(0,a.Z)(w,2),b=k[0],j=k[1],Z=null!==(e=b.get("query"))&&void 0!==e?e:"";return(0,i.useEffect)((function(){function e(){return(e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g("pending"),e.prev=1,e.next=4,(0,o.Wf)(Z);case 4:if(0!==(t=e.sent).results.length){e.next=8;break}return g("rejected"),e.abrupt("return");case 8:d(t.results),g("resolved"),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0.message),g("rejected");case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}Z&&function(){e.apply(this,arguments)}()}),[Z]),(0,v.jsxs)("main",{children:[(0,v.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements.searchQuery.value.trim();if(""===t)return alert("Please enter word to search");j({query:t}),e.currentTarget.reset()},className:f,children:[(0,v.jsx)("input",{type:"text",name:"searchQuery",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",className:m}),(0,v.jsx)("button",{type:"submit",className:h,children:"Search"})]}),"pending"===y&&(0,v.jsx)(l.Z,{}),"rejected"===y&&(0,v.jsx)("h1",{children:"Sorry something went wrong. We don't have any movie for this query. Try again."}),(0,v.jsx)(p.O,{movies:c})]})}},390:function(e,t,r){r.d(t,{M1:function(){return v},TP:function(){return h},Wf:function(){return l},rj:function(){return o},tx:function(){return _}});var n=r(861),a=r(757),c=r.n(a),s=r(243),i="https://api.themoviedb.org/3",u="527e0abd6c1939f1ffcc5ad4666908d5";function o(){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"/trending/movie/day?api_key=").concat(u));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"/search/movie?query=").concat(t,"&api_key=").concat(u));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"/movie/").concat(t,"?api_key=").concat(u));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(u));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(u));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=938.0c428402.chunk.js.map