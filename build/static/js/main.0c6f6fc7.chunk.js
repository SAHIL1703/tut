(this["webpackJsonpusing-pre-built-react-components-completed"]=this["webpackJsonpusing-pre-built-react-components-completed"]||[]).push([[0],{34:function(e,t,n){e.exports=n(43)},43:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(5),c=n.n(r),o=n(30),u=n(16),i=n(26),m=n.n(i);var s=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,l.a.createElement(m.a,null),"NOTE-MAKER"))};var E=function(){var e=(new Date).getFullYear();return l.a.createElement("footer",null,l.a.createElement("p",null,"madeby @sahil ",e))},d=n(28),f=n.n(d);var b=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},l.a.createElement(f.a,null)))},p=n(19),v=n(24),h=n(29),O=n.n(h),j=n(58),g=n(59);var k=function(e){var t=Object(a.useState)(!1),n=Object(u.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)({title:"",content:""}),i=Object(u.a)(o,2),m=i[0],s=i[1];function E(e){var t=e.target,n=t.name,a=t.value;s((function(e){return Object(v.a)(Object(v.a)({},e),{},Object(p.a)({},n,a))}))}return l.a.createElement("div",null,l.a.createElement("form",{className:"create-note"},r&&l.a.createElement("input",{name:"title",onChange:E,value:m.title,placeholder:"Title"}),l.a.createElement("textarea",{name:"content",onClick:function(){c(!0)},onChange:E,value:m.content,placeholder:"Take a note...",rows:r?3:1}),l.a.createElement(g.a,{in:r},l.a.createElement(j.a,{onClick:function(t){e.onAdd(m),s({title:"",content:""}),t.preventDefault()}},l.a.createElement(O.a,null)))))};var w=function(){return l.a.createElement("div",{className:"alert alert-warning alert-dismissible fade show",role:"alert"},"This site is underprogess...",l.a.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"}))};var C=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1];function c(e){r((function(t){return t.filter((function(t,n){return n!==e}))}))}return l.a.createElement("div",null,l.a.createElement(s,null),l.a.createElement(w,null),l.a.createElement(k,{onAdd:function(e){r((function(t){return[].concat(Object(o.a)(t),[e])}))}}),n.map((function(e,t){return l.a.createElement(b,{key:t,id:t,title:e.title,content:e.content,onDelete:c})})),l.a.createElement(E,null))};c.a.render(l.a.createElement(C,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.0c6f6fc7.chunk.js.map