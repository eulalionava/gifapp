(this["webpackJsonpgif-app"]=this["webpackJsonpgif-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(7),a=n.n(c),i=n(2),s=n(9),u=n(0),o=function(t){var e=t.setCategories,n=Object(r.useState)(""),c=Object(i.a)(n,2),a=c[0],o=c[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),a.trim().length>2&&(e((function(t){return[a].concat(Object(s.a)(t))})),o(""))},children:Object(u.jsx)("input",{type:"text",value:a,onChange:function(t){o(t.target.value)}})})},j=n(10),d=function(t){var e=t.title,n=t.url;return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("img",{src:n,alt:e}),Object(u.jsx)("p",{children:e})]})},l=n(6),b=n.n(l),f=n(8),p=function(){var t=Object(f.a)(b.a.mark((function t(e){var n,r,c,a,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=12&api_key=SSSRKWLdyDKeacJI9Rxq8G8YSNnuV82X"),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return c=t.sent,a=c.data,i=a.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=n(1),O=h.useState,x=h.useEffect,g=function(t){var e=t.category,n=function(t){var e=O({data:[],loading:!0}),n=Object(i.a)(e,2),r=n[0],c=n[1];return x((function(){p(t).then((function(t){setTimeout((function(){c({data:t,loading:!1})}),3e3)}))}),[t]),r}(e),r=n.data,c=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h3",{children:[" ",e]}),c&&Object(u.jsx)("p",{children:"Loading"}),Object(u.jsx)("div",{className:"card-grid",children:r.map((function(t){return Object(u.jsx)(d,Object(j.a)({},t),t.id)}))})]})},m=function(){var t=Object(r.useState)(["Hombre ara\xf1a"]),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"Gif expert app"}),Object(u.jsx)(o,{setCategories:c}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(t){return Object(u.jsx)(g,{category:t},t)}))})]})};n(17);a.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.d312c496.chunk.js.map