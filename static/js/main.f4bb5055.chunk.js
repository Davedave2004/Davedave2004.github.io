(this["webpackJsonpdavedave2004.github.io"]=this["webpackJsonpdavedave2004.github.io"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(4),j=n.n(a),s=(n(11),n(2)),u=(n(12),n(5)),b=n(6),x=n(0),i=["regexType","regExp"];function o(e){var t=Object(r.useState)(""),n=Object(s.a)(t,2),c=n[0],a=n[1],j=Object(r.useState)(/.?/),o=Object(s.a)(j,2),g=o[0],l=o[1],p=Object(r.useRef)(null);Object(r.useEffect)((function(){var t={number:/^\d*$/};e.regExp?(l(e.regExp),p.current&&(p.current.textContent="I am using your regex ".concat(e.regExp.toString()))):e.regexType&&e.regexType in t&&(l(t[e.regexType]),p.current&&(p.current.textContent="I am using type ".concat(e.regexType)))}),[e.regexType,e.regExp]);e.regexType,e.regExp;var O=Object(b.a)(e,i);return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{ref:p,children:"I am currently using the default"}),Object(x.jsx)("input",Object(u.a)({type:"text",value:c,onChange:function(e){e.preventDefault();var t=e.target.value;g.test(t)&&a(t)}},O))]})}var g=n.p+"static/media/logo.e850297e.png";function l(e){var t={src:g,label:"MyPage",href:"#top"},n=Object(r.useState)(t.label),c=Object(s.a)(n,2),a=c[0];c[1];return Object(x.jsxs)("header",{children:[Object(x.jsxs)("a",{href:t.href,children:[Object(x.jsx)("img",{src:t.src,alt:"header logo"}),Object(x.jsx)("label",{children:a})]}),Object(x.jsx)("nav",{children:[{label:"Top",href:"#top"},{label:"Components",href:"#components"}].map((function(e){return Object(x.jsx)("a",{className:"navItem",href:e.href,children:e.label})}))})]})}var p=function(){var e=Object(r.useState)(/.?/),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(r.useRef)(null);return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("a",{id:"top"}),Object(x.jsx)(l,{}),Object(x.jsxs)("section",{id:"components",children:[Object(x.jsx)(o,{regexType:"number"}),Object(x.jsx)("br",{}),Object(x.jsx)(o,{regExp:/^\d{0,11}$/}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("h1",{children:"Set your custom regex here:"}),Object(x.jsx)("input",{onChange:function(e){var t=e.target.value;try{new RegExp(t),c(new RegExp(t)),a.current&&(a.current.textContent="")}catch(e){a.current&&(a.current.textContent="That's not a valid regex!")}}}),Object(x.jsx)(o,{regExp:n}),Object(x.jsx)("h2",{ref:a})]})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,j=t.getTTFB;n(e),r(e),c(e),a(e),j(e)}))};j.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(p,{})}),document.getElementById("root")),O()}},[[14,1,2]]]);
//# sourceMappingURL=main.f4bb5055.chunk.js.map