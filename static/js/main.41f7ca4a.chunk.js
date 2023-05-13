(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),o=a.n(l),c=(a(13),a(1));a(14);var s=function(e){return e.alert&&r.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},r.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type))," : ",e.alert.msg)};function m(e){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#"},e.aboutText))),r.a.createElement("div",{className:"color-palette mx-2",onClick:function(){return e.changeDarkModeColor("#042743","blue")},style:{backgroundColor:"#042743"}}),r.a.createElement("div",{className:"color-palette mx-2",onClick:function(){return e.changeDarkModeColor("#062925","#2a4242")},style:{backgroundColor:"#062925"}}),r.a.createElement("div",{className:"color-palette mx-2",onClick:function(){return e.changeDarkModeColor("black","#BB86FC")},style:{backgroundColor:"black"}}),r.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},r.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox","aria-checked":"true",role:"switch",id:"flexSwitchCheckDefault"}),r.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable Dark Mode")))))}function i(e){var t=Object(n.useState)("Enter text here"),a=Object(c.a)(t,2),l=a[0],o=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"}},r.a.createElement("h1",null,e.heading),r.a.createElement("div",{className:"mb-3"},r.a.createElement("textarea",{className:"form-control",style:{background:"dark"===e.mode?"#160c14":"white",color:"dark"===e.mode?"white":"black"},id:"myBox",value:l,rows:"8",onChange:function(e){o(e.target.value)}})),r.a.createElement("button",{className:"btn btn-primary ",onClick:function(){var t=l.toUpperCase();o(t),e.showAlert("Converted to uppercase!","success")}},"Convert to uppercase"),r.a.createElement("button",{className:"btn btn-primary mx-2  my-2",onClick:function(){var t=l.toLowerCase();o(t),e.showAlert("Converted to lowercase!","success")}},"Convert to Lowercase"),r.a.createElement("button",{className:"btn btn-primary mx-2  my-2",onClick:function(){o(""),e.showAlert("Text cleared!","success")}},"Clear"),r.a.createElement("button",{className:"btn btn-primary mx-2  my-2",onClick:function(){o(l.replace(/\s(?!\w)/g,"")),e.showAlert("Extra spaces removed!","success")}},"Remove Extra Spaces"),r.a.createElement("button",{className:"btn btn-primary mx-2  my-2",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Copied to clipboard!","success")}},"Copy Text")),r.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"}},r.a.createElement("h2",null,"Your text summary"),r.a.createElement("p",null,0===l.length?0:" "===l[0]?o(""):l.split(/\s(?=\w)/).length," words and"," ",l.length," characters"),r.a.createElement("p",null,0===l.length?0:.008*l.split(/\s(?=\w)/).length," ","Minutes read"),r.a.createElement("h2",null,"Preview"),r.a.createElement("p",null,l.length>0?l:"Enter something in the text box above to preview it here")))}var u=function(){var e=Object(n.useState)("light"),t=Object(c.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(null),u=Object(c.a)(o,2),d=u[0],b=u[1],g=Object(n.useState)(null),h=Object(c.a)(g,2),E=h[0],p=h[1],f=function(e,t){b({msg:e,type:t}),clearTimeout(E);var a=setTimeout(function(){b(null)},1500);p(a)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{title:"TextUtils",aboutText:"About TextUtils",mode:a,toggleMode:function(){var e=document.getElementsByClassName("color-palette"),t=document.getElementsByTagName("button");"light"===a?(l("dark"),document.body.style.backgroundColor="#042743",Array.from(e).forEach(function(e){return e.style.display="block"}),f("Dark mode has been enable","success"),document.title="TextUtils - Dark Mode"):(l("light"),document.body.style.backgroundColor="white",Array.from(e).forEach(function(e){return e.style.display="none"}),Array.from(t).forEach(function(e){e.style.backgroundColor="#0d6efd",e.style.borderColor="#0d6efd"}),f("Light mode has been enable","success"),document.title="TextUtils - Light Mode")},changeDarkModeColor:function(e,t){document.body.style.backgroundColor=e;var a=document.getElementsByTagName("button"),n=document.getElementsByClassName("container");Array.from(a).forEach(function(e){e.style.backgroundColor=t,e.style.borderColor=t}),Array.from(n).forEach(function(e){return e.style.color="white"})}}),r.a.createElement(s,{alert:d}),r.a.createElement("div",{className:"container my-3"},r.a.createElement(i,{showAlert:f,heading:"Enter The text to analyze below",mode:a})))},d=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),l(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null))),d()},4:function(e,t,a){e.exports=a(15)}},[[4,1,2]]]);
//# sourceMappingURL=main.41f7ca4a.chunk.js.map