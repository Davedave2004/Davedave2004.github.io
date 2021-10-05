(this["webpackJsonpdavedave2004.github.io"]=this["webpackJsonpdavedave2004.github.io"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(6),r=c.n(s),a=(c(14),c(2)),l=c.p+"static/media/logo.e850297e.png",o=(c(15),c(16),c(0));function j(){var e=Object(n.useRef)(null);return Object(o.jsxs)("div",{className:"side-nav closed",ref:e,children:[Object(o.jsx)("div",{className:"close-nav",onClick:function(){e.current&&e.current.classList.add("closed")},children:Object(o.jsx)("i",{className:"fas fa-times"})}),Object(o.jsx)("nav",{children:Object(o.jsx)("ul",{children:[{label:"Top",href:"#top"},{label:"Components",href:"#components"},{label:"Card",href:"#card"},{label:"To Do",href:"#todo"}].map((function(e,t){return Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"navItem",href:e.href,children:e.label})},t)}))})})]})}function d(){var e=document.querySelector(".side-nav.closed");e&&e.classList.remove("closed")}function b(e){var t={src:l,label:"MyPage",href:"#top"},c=Object(n.useState)(t.label),i=Object(a.a)(c,1)[0];return Object(o.jsxs)("header",{children:[Object(o.jsx)("a",{className:"logo-link",href:t.href,children:Object(o.jsx)("img",{src:t.src,alt:"header logo"})}),Object(o.jsx)("label",{children:i}),Object(o.jsx)("div",{onClick:d,children:Object(o.jsx)("i",{className:"fas fa-bars"})})]})}var h=c(8),u=c(9),x=["regexType","regExp"];function p(e){var t=Object(n.useState)(""),c=Object(a.a)(t,2),i=c[0],s=c[1],r=Object(n.useState)(/.?/),l=Object(a.a)(r,2),j=l[0],d=l[1];Object(n.useEffect)((function(){var t={number:/^\d*$/};e.regExp?(console.log(e.regExp),d(e.regExp)):e.regexType&&e.regexType in t&&d(t[e.regexType])}),[e.regexType,e.regExp]);e.regexType,e.regExp;var b=Object(u.a)(e,x);return Object(o.jsx)("input",Object(h.a)({type:"text",value:i,onChange:function(e){e.preventDefault();var t=e.target.value;j.test(t)&&s(t)}},b))}c(18);function m(e){return Object(o.jsxs)("div",{className:"react-card",children:[Object(o.jsxs)("section",{className:"header",children:[Object(o.jsx)("img",{src:e.logoSrc,className:"logo",alt:"card logo"}),Object(o.jsx)("p",{className:"title",children:e.title})]}),Object(o.jsxs)("section",{className:"content",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{className:"id-picture",src:e.idSrc,alt:"profile"}),Object(o.jsx)("p",{className:"id-number",children:"ID Number: 02020001"})]}),Object(o.jsx)("p",{className:"name",children:e.name})]})]})}var O=c(7);function g(e){return Object(o.jsx)("ul",{className:"edit-list",children:e.items.map((function(t){return Object(o.jsxs)("li",{children:[t.content,Object(o.jsx)("button",{onClick:function(){e.handleDelete(t.id)},className:"btn btn--delete","aria-label":"Delete list item",children:"X"})]},t.id)}))})}c(19);function f(){var e=Object(n.useState)(""),t=Object(a.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)([]),r=Object(a.a)(s,2),l=r[0],j=r[1];return Object(o.jsxs)("div",{className:"todo-list",children:[Object(o.jsx)("section",{className:"input-container",children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j((function(e){return[].concat(Object(O.a)(e),[{content:c,id:(new Date).toString()}])})),i("")},children:[Object(o.jsx)("input",{value:c,type:"text",placeholder:"what to do?",onChange:function(e){i(e.target.value)},autoComplete:"off",tabIndex:0}),Object(o.jsx)("button",{className:"btn btn--confirm",title:"Add new item","aria-label":"Add a new item to the list",tabIndex:0,children:"+"})]})}),Object(o.jsx)("section",{className:"list-container",children:Object(o.jsx)(g,{items:l,handleUpdate:function(e,t){var c=l.findIndex((function(t){return e===t.id}));j((function(e){return e[c].content=t,e}))},handleDelete:function(e){j((function(t){return t.filter((function(t){return t.id!==e}))}))}})})]})}c(20);var v=c.p+"static/media/rem.891bcb90.png";var C=function(){var e=Object(n.useState)(/.?/),t=Object(a.a)(e,2),c=t[0],i=t[1];function s(e){var t=document.getElementById("price"),c=document.getElementById("weight"),n=document.getElementById("total_price"),i=parseInt(t.value),s=parseInt(c.value);if(i&&s){var r=i/2,a=1.2*s,l=.18*(r+a);n&&(n.textContent=(r+a+l).toString())}}return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("div",{id:"top",style:{paddingTop:"10vh"}}),Object(o.jsx)(b,{}),Object(o.jsx)(j,{}),Object(o.jsxs)("section",{className:"main-section",children:[Object(o.jsx)("h1",{children:"About this page"}),Object(o.jsxs)("article",{children:[Object(o.jsx)("p",{children:"This page is just me trying to make something out of React / TypeScript."}),Object(o.jsx)("p",{children:"Currently, I tried making different components like this header, a todo list, and some random elements like a regex-controlled input"})]})]}),Object(o.jsxs)("section",{children:[Object(o.jsx)("h1",{children:"MochaBricks Pasabuy Price Calculator"}),Object(o.jsxs)("p",{children:["Current calculation is done by: ",Object(o.jsx)("br",{}),"Price is converted to peso (price in yen / 2) ",Object(o.jsx)("br",{}),"Shipping Fee is weight multiplied by 1.2 ",Object(o.jsx)("br",{}),"Tax is equal to price (in peso) plus shipping fee multiplied by 0.18 ",Object(o.jsx)("br",{}),"Total Price = (Price/2) + (Weight*1.2) + ((Price/2) + (Weight*1.2) * 0.18)"]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"price",children:"Price (in Yen): "}),Object(o.jsx)("input",{onChange:s,type:"number",id:"price",placeholder:"price in Yen"}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{htmlFor:"weight",children:"Price (in grams): "}),Object(o.jsx)("input",{onChange:s,type:"number",id:"weight",placeholder:"weight in grams"}),Object(o.jsx)("br",{})]}),Object(o.jsxs)("p",{children:["Total Price: ",Object(o.jsx)("span",{id:"total_price"})]})]}),Object(o.jsx)("hr",{}),Object(o.jsxs)("section",{className:"main-section",id:"components",children:[Object(o.jsx)("h1",{children:"Components"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:"Custom Input"}),Object(o.jsx)("p",{children:"These inputs are controlled via regex (regular expressions) and will only allow values that will pass the given expression"}),Object(o.jsx)("hr",{}),Object(o.jsxs)("p",{children:["Passed a prop of regexType 'number'",Object(o.jsx)(p,{regexType:"number",placeholder:"numbers only"})]}),Object(o.jsxs)("p",{children:["Passed a prop of  regExp ",Object(o.jsx)("code",{children:"/^\\d{0,11}$/"}),Object(o.jsx)(p,{regExp:/^\d{0,11}$/,placeholder:"only passing values here"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h4",{children:"You can try it using your custom regex here:"}),Object(o.jsx)("input",{onChange:function(e){var t=e.target.value;try{new RegExp(t),i(new RegExp(t))}catch(e){}},placeholder:"regex value"})]}),Object(o.jsx)(p,{regExp:c,placeholder:"only passing values here"})]})]}),Object(o.jsxs)("section",{className:"main-section",id:"card",children:[Object(o.jsx)("h1",{children:"ID Card"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:"Like an ID but using react"}),Object(o.jsx)(m,{logoSrc:"data:image/png;base64,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",idSrc:v,name:"Rem",title:"Github Vocational School"})]}),Object(o.jsxs)("div",{className:"id-maker",children:[Object(o.jsx)("p",{children:"Try making your own ID here!"}),Object(o.jsxs)("form",{children:[Object(o.jsxs)("label",{htmlFor:"id-maker-title",children:["Header: ",Object(o.jsx)("input",{id:"id-maker-title",type:"text",placeholder:"Github Vocational School"})]}),Object(o.jsxs)("label",{htmlFor:"id-maker-logo",children:["Logo: ",Object(o.jsx)("input",{id:"id-maker-logo",type:"file"})]}),Object(o.jsxs)("label",{htmlFor:"id-maker-name",children:["Name: ",Object(o.jsx)("input",{id:"id-maker-name",type:"text",placeholder:"Rem"})]}),Object(o.jsxs)("label",{htmlFor:"id-maker-picture",children:["ID Picture: ",Object(o.jsx)("input",{id:"id-maker-picture",type:"file"})]}),Object(o.jsx)("button",{type:"submit",children:"Generate"})]}),Object(o.jsx)("hr",{})]})]}),Object(o.jsxs)("section",{id:"todo",className:"main-section last-section",children:[Object(o.jsx)("h1",{children:"React To-Do List"}),Object(o.jsx)(f,{})]})]})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,22)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),i(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(C,{})}),document.getElementById("root")),A()}],[[21,1,2]]]);
//# sourceMappingURL=main.6b0ee4ff.chunk.js.map