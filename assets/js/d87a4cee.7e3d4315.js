(window.webpackJsonp=window.webpackJsonp||[]).push([[132,7,31,54,67,73,81,95,138],{127:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(225)),l={},c={unversionedId:"examples/detect_dirty_controller.html",id:"examples/detect_dirty_controller.html",isDocsHomePage:!1,title:"detect_dirty_controller.html",description:"`html",source:"@site/docs/examples/detect_dirty_controller.html.mdx",slug:"/examples/detect_dirty_controller.html",permalink:"/stimulus-library/docs/examples/detect_dirty_controller.html",version:"current"},i=[],s={toc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<input type="text" data-controller="dirty"/>\n')))}u.isMDXComponent=!0},142:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(225)),l={},c={unversionedId:"examples/detect_dirty_controller_js.js",id:"examples/detect_dirty_controller_js.js",isDocsHomePage:!1,title:"detect_dirty_controller_js.js",description:"`js",source:"@site/docs/examples/detect_dirty_controller_js.js.mdx",slug:"/examples/detect_dirty_controller_js.js",permalink:"/stimulus-library/docs/examples/detect_dirty_controller_js.js",version:"current"},i=[],s={toc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'import {isDirty} from "../shared/detect_dirty_controller";\n\nif (isDirty(element)) {\n  console.log("Keep your hands off");\n  element.controller.restore();\n}\n')))}u.isMDXComponent=!0},154:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(225)),l={},c={unversionedId:"examples/detect_dirty_controller_css.css",id:"examples/detect_dirty_controller_css.css",isDocsHomePage:!1,title:"detect_dirty_controller_css.css",description:"`css",source:"@site/docs/examples/detect_dirty_controller_css.css.mdx",slug:"/examples/detect_dirty_controller_css.css",permalink:"/stimulus-library/docs/examples/detect_dirty_controller_css.css",version:"current"},i=[],s={toc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-css"},"input[data-dirty], textarea[data-dirty], select[data-dirty] {\n  border-color: red;\n}\n")))}u.isMDXComponent=!0},214:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return m})),r.d(t,"metadata",(function(){return j})),r.d(t,"toc",(function(){return O})),r.d(t,"default",(function(){return y}));var n=r(3),a=r(7),o=(r(0),r(225)),l=r(59),c=r(58),i=r(62),s=r(60),u=r(127),d=r(96),b=r(154),p=r(142),m={id:"DetectDirtyController",title:"DetectDirtyController"},j={unversionedId:"controllers/DetectDirtyController",id:"controllers/DetectDirtyController",isDocsHomePage:!1,title:"DetectDirtyController",description:"Purpose",source:"@site/docs/controllers/detect_dirty_controller.mdx",slug:"/controllers/DetectDirtyController",permalink:"/stimulus-library/docs/controllers/DetectDirtyController",version:"current",sidebar:"someSidebar",previous:{title:"ConfirmNavigationController",permalink:"/stimulus-library/docs/controllers/ConfirmNavigationController"},next:{title:"DetectDirtyFormController",permalink:"/stimulus-library/docs/controllers/DetectDirtyFormController"}},O=[{value:"Purpose",id:"purpose",children:[]},{value:"Actions",id:"actions",children:[]},{value:"Targets",id:"targets",children:[]},{value:"Classes",id:"classes",children:[]},{value:"Values",id:"values",children:[]},{value:"Events",id:"events",children:[]},{value:"Side Effects",id:"side-effects",children:[{value:"Tracking dirty inputs",id:"tracking-dirty-inputs",children:[]}]},{value:"HTML",id:"html",children:[]},{value:"HAML",id:"haml",children:[{value:"Build behaviours / style around dirty attributes",id:"build-behaviours--style-around-dirty-attributes",children:[]}]}],f={toc:O};function y(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},f,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"purpose"},"Purpose"),Object(o.b)("p",null,"Track whether an ",Object(o.b)("inlineCode",{parentName:"p"},"<input>"),", ",Object(o.b)("inlineCode",{parentName:"p"},"<textarea>")," or ",Object(o.b)("inlineCode",{parentName:"p"},"<select>")," has changed their value from the value they loaded with."),Object(o.b)("p",null,"Adds ",Object(o.b)("inlineCode",{parentName:"p"},"data-dirty")," to the input being watched if it changes value, and removes it if it returns to its initial value."),Object(o.b)("h2",{id:"actions"},Object(o.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/actions"},"Actions")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Action"),Object(o.b)("th",{parentName:"tr",align:null},"Purpose"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"restore")),Object(o.b)("td",{parentName:"tr",align:null},"Return the input to its original value")))),Object(o.b)("h2",{id:"targets"},Object(o.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/targets"},"Targets")),Object(o.b)(l.default,{mdxType:"NoTargets"}),Object(o.b)("h2",{id:"classes"},Object(o.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/classes"},"Classes")),Object(o.b)(c.default,{mdxType:"NoClasses"}),Object(o.b)("h2",{id:"values"},Object(o.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/values"},"Values")),Object(o.b)(i.default,{mdxType:"NoValues"}),Object(o.b)("h2",{id:"events"},"Events"),Object(o.b)(s.default,{mdxType:"NoEvents"}),Object(o.b)("h2",{id:"side-effects"},"Side Effects"),Object(o.b)("p",null,"Adds ",Object(o.b)("inlineCode",{parentName:"p"},"input")," and ",Object(o.b)("inlineCode",{parentName:"p"},"change")," event listeners to the attached input."),Object(o.b)("h1",{id:"how-to-use"},"How to Use"),Object(o.b)("h3",{id:"tracking-dirty-inputs"},"Tracking dirty inputs"),Object(o.b)("h2",{id:"html"},"HTML"),Object(o.b)(u.default,{mdxType:"DetectDirtyControllerHtml"}),Object(o.b)("h2",{id:"haml"},"HAML"),Object(o.b)(d.default,{mdxType:"DetectDirtyControllerHaml"}),Object(o.b)("h3",{id:"build-behaviours--style-around-dirty-attributes"},"Build behaviours / style around dirty attributes"),Object(o.b)("h4",{id:"css"},"CSS"),Object(o.b)(b.default,{mdxType:"DetectDirtyControllerCss"}),Object(o.b)("h4",{id:"js"},"JS"),Object(o.b)(p.default,{mdxType:"DetectDirtyControllerJs"}))}y.isMDXComponent=!0},225:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),p=n,m=d["".concat(l,".").concat(p)]||d[p]||b[p]||o;return r?a.a.createElement(m,c(c({ref:t},s),{},{components:r})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},58:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(225)),l={},c={unversionedId:"_partials/no-classes",id:"_partials/no-classes",isDocsHomePage:!1,title:"no-classes",description:"| Class | Purpose |",source:"@site/docs/_partials/no-classes.md",slug:"/_partials/no-classes",permalink:"/stimulus-library/docs/_partials/no-classes",version:"current"},i=[],s={toc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Class"),Object(o.b)("th",{parentName:"tr",align:null},"Purpose"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"-")),Object(o.b)("td",{parentName:"tr",align:null},"-")))))}u.isMDXComponent=!0},59:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(225)),l={},c={unversionedId:"_partials/no-targets",id:"_partials/no-targets",isDocsHomePage:!1,title:"no-targets",description:"| Target | Purpose | Default |",source:"@site/docs/_partials/no-targets.md",slug:"/_partials/no-targets",permalink:"/stimulus-library/docs/_partials/no-targets",version:"current"},i=[],s={toc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Target"),Object(o.b)("th",{parentName:"tr",align:null},"Purpose"),Object(o.b)("th",{parentName:"tr",align:null},"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"-")),Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"-")))))}u.isMDXComponent=!0},60:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(225)),l={},c={unversionedId:"_partials/no-events",id:"_partials/no-events",isDocsHomePage:!1,title:"no-events",description:"| Event | When | Dispatched on | event.detail |",source:"@site/docs/_partials/no-events.md",slug:"/_partials/no-events",permalink:"/stimulus-library/docs/_partials/no-events",version:"current"},i=[],s={toc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Event"),Object(o.b)("th",{parentName:"tr",align:null},"When"),Object(o.b)("th",{parentName:"tr",align:null},"Dispatched on"),Object(o.b)("th",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"th"},"event.detail")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"-")),Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"-")))))}u.isMDXComponent=!0},62:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(225)),l={},c={unversionedId:"_partials/no-values",id:"_partials/no-values",isDocsHomePage:!1,title:"no-values",description:"| Value | Type | Description | Default |",source:"@site/docs/_partials/no-values.md",slug:"/_partials/no-values",permalink:"/stimulus-library/docs/_partials/no-values",version:"current"},i=[],s={toc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Value"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"),Object(o.b)("th",{parentName:"tr",align:null},"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"-")),Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"-")))))}u.isMDXComponent=!0},96:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(225)),l={},c={unversionedId:"examples/detect_dirty_controller.haml",id:"examples/detect_dirty_controller.haml",isDocsHomePage:!1,title:"detect_dirty_controller.haml",description:"`haml",source:"@site/docs/examples/detect_dirty_controller.haml.mdx",slug:"/examples/detect_dirty_controller.haml",permalink:"/stimulus-library/docs/examples/detect_dirty_controller.haml",version:"current"},i=[],s={toc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-haml"},'%input{"data-controller" => "dirty", type: "text"}/\n')))}u.isMDXComponent=!0}}]);