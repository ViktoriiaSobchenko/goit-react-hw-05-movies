"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[959],{639:function(t,e,n){n.d(e,{Z:function(){return u}});var r=n(643),a="Loader_loader__+lRPl",c=n(184);var u=function(){return(0,c.jsx)(r.p2,{height:"200",width:"200",color:"#2db2ff",ariaLabel:"circles-loading",wrapperClass:a,visible:!0})}},959:function(t,e,n){n.r(e),n.d(e,{default:function(){return l}});var r=n(861),a=n(439),c=n(757),u=n.n(c),i=n(791),s=n(689),o=n(390),p=n(639),f="Rewiews_list__QCu85",h=n(184),l=function(){var t=(0,i.useState)([]),e=(0,a.Z)(t,2),n=e[0],c=e[1],l=(0,s.UO)().movieId,d=(0,i.useState)("idle"),v=(0,a.Z)(d,2),w=v[0],x=v[1];return(0,i.useEffect)((function(){function t(){return(t=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return x("pending"),t.prev=1,t.next=4,(0,o.tx)(l);case 4:e=t.sent,c(e),x("resolved"),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0.message),x("rejected");case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[l]),(0,h.jsxs)(h.Fragment,{children:["pending"===w&&(0,h.jsx)(p.Z,{}),"rejected"===w&&(0,h.jsx)("h1",{children:" Sorry something went wrong"}),n&&n.length>0?(0,h.jsx)("ul",{className:f,children:n.map((function(t){return(0,h.jsxs)("li",{children:[(0,h.jsxs)("h3",{children:["Author: ",t.author]}),(0,h.jsxs)("p",{children:["Character: ",t.content]})]},t.id)}))}):(0,h.jsx)("h3",{children:"We don't have any reviews for this movie."})]})}},390:function(t,e,n){n.d(e,{M1:function(){return v},TP:function(){return l},Wf:function(){return f},rj:function(){return o},tx:function(){return x}});var r=n(861),a=n(757),c=n.n(a),u=n(243),i="https://api.themoviedb.org/3",s="527e0abd6c1939f1ffcc5ad4666908d5";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/trending/movie/day?api_key=").concat(s));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/search/movie?query=").concat(e,"&api_key=").concat(s));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/movie/").concat(e,"?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=959.c2fc1871.chunk.js.map