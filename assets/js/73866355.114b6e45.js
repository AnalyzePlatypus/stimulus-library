(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{135:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return l})),r.d(n,"toc",(function(){return i})),r.d(n,"default",(function(){return p}));var t=r(3),o=r(7),a=(r(0),r(220)),c={},l={unversionedId:"examples/form_rc_controller.html",id:"examples/form_rc_controller.html",isDocsHomePage:!1,title:"form_rc_controller.html",description:"`html",source:"@site/docs/examples/form_rc_controller.html.mdx",slug:"/examples/form_rc_controller.html",permalink:"/stimulus-library/docs/examples/form_rc_controller.html",version:"current"},i=[],u={toc:i};function p(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},u,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-html"},'<div data-controller="form-rc">\n\n  <form id="test-form" data-form-rc-target="form">\n    <div>\n      <label>\n        Name\n        <input type="text" name="name"/>\n      </label>\n    </div>\n    <div>\n      <label>\n        Age\n        <input type="number" name="age"/>\n      </label>\n    </div>\n    <div>\n      <label>\n        Quest\n        <textarea name="quest"/>\n      </label>\n    </div>\n\n    <div>\n      <label>\n        Do you like cake?\n        <input type="checkbox" name="gorilla"/>\n      </label>\n    </div>\n  </form>\n\n  <p>Outside the form</p>\n  <div>\n    <a href="" data-action="form-rc#reset">Reset</a>\n  </div>\n  <div>\n    <a href="" data-action="form-rc#submit">Submit</a>\n  </div>\n</div>\n')))}p.isMDXComponent=!0},220:function(e,n,r){"use strict";r.d(n,"a",(function(){return m})),r.d(n,"b",(function(){return d}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var n=o.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},m=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},s=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),s=t,d=m["".concat(c,".").concat(s)]||m[s]||f[s]||a;return r?o.a.createElement(d,l(l({ref:n},u),{},{components:r})):o.a.createElement(d,l({ref:n},u))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,c=new Array(a);c[0]=s;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:t,c[1]=l;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);