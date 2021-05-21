(window.webpackJsonp=window.webpackJsonp||[]).push([[95,6,45,51],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),l=(n(0),n(169)),o=n(59),c=n(58),b=n(60),i={id:"ScrollContainerController",title:"ScrollContainerController"},s={unversionedId:"controllers/ScrollContainerController",id:"controllers/ScrollContainerController",isDocsHomePage:!1,title:"ScrollContainerController",description:"Purpose",source:"@site/docs/controllers/scroll_container_controller.mdx",sourceDirName:"controllers",slug:"/controllers/ScrollContainerController",permalink:"/stimulus-library/docs/controllers/ScrollContainerController",version:"current",frontMatter:{id:"ScrollContainerController",title:"ScrollContainerController"},sidebar:"someSidebar",previous:{title:"MediaPlayerController",permalink:"/stimulus-library/docs/controllers/MediaPlayerController"},next:{title:"ScrollIntoFocusController",permalink:"/stimulus-library/docs/controllers/ScrollIntoFocusController"}},p=[{value:"Purpose",id:"purpose",children:[]},{value:"Actions",id:"actions",children:[]},{value:"Targets",id:"targets",children:[]},{value:"Classes",id:"classes",children:[]},{value:"Values",id:"values",children:[]},{value:"Events",id:"events",children:[]},{value:"Side Effects",id:"side-effects",children:[]},{value:"How to Use",id:"how-to-use",children:[]},{value:"See Also",id:"see-also",children:[]}],d={toc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"purpose"},"Purpose"),Object(l.b)("p",null,"Controller to be used on a scrollable container element, to enable control over the scroll height of the container."),Object(l.b)("h2",{id:"actions"},Object(l.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/actions"},"Actions")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Action"),Object(l.b)("th",{parentName:"tr",align:null},"Purpose"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"scrollTop")),Object(l.b)("td",{parentName:"tr",align:null},"Scroll to the very top of the element")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"scrollBottom")),Object(l.b)("td",{parentName:"tr",align:null},"Scroll to the very bottom of the element")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"scrollLeft")),Object(l.b)("td",{parentName:"tr",align:null},"Scroll to the very left of the element")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"scrollRight")),Object(l.b)("td",{parentName:"tr",align:null},"Scroll to the very right of the element")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"up")),Object(l.b)("td",{parentName:"tr",align:null},"Scroll up by ",Object(l.b)("inlineCode",{parentName:"td"},"incrementAmount")," in 'px'")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"down")),Object(l.b)("td",{parentName:"tr",align:null},"Scroll down by ",Object(l.b)("inlineCode",{parentName:"td"},"incrementAmount")," in 'px'")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"left")),Object(l.b)("td",{parentName:"tr",align:null},"Scroll left by ",Object(l.b)("inlineCode",{parentName:"td"},"incrementAmount")," in 'px'")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"right")),Object(l.b)("td",{parentName:"tr",align:null},"Scroll right by ",Object(l.b)("inlineCode",{parentName:"td"},"incrementAmount")," in 'px'")))),Object(l.b)("h2",{id:"targets"},Object(l.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/targets"},"Targets")),Object(l.b)(o.default,{mdxType:"NoTargets"}),Object(l.b)("h2",{id:"classes"},Object(l.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/classes"},"Classes")),Object(l.b)(c.default,{mdxType:"NoClasses"}),Object(l.b)("h2",{id:"values"},Object(l.b)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/values"},"Values")),Object(l.b)("p",null,"See ",Object(l.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions"},"ScrollToOptions documentation")," for possible values for ",Object(l.b)("inlineCode",{parentName:"p"},"behaviour")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Value"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"behaviour")),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"One of ",Object(l.b)("inlineCode",{parentName:"td"},"auto"),", ",Object(l.b)("inlineCode",{parentName:"td"},"smooth"),". ",Object(l.b)("strong",{parentName:"td"},"Note"),": If the user's browser does not support smooth scrolling, the browser will ignore these values and scroll using the browser default."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"auto"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"increment")),Object(l.b)("td",{parentName:"tr",align:null},"Number"),Object(l.b)("td",{parentName:"tr",align:null},"The amount to scroll by when using ",Object(l.b)("inlineCode",{parentName:"td"},"up"),", ",Object(l.b)("inlineCode",{parentName:"td"},"down"),", ",Object(l.b)("inlineCode",{parentName:"td"},"left"),", ",Object(l.b)("inlineCode",{parentName:"td"},"right")," actions"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"50"))))),Object(l.b)("h2",{id:"events"},"Events"),Object(l.b)(b.default,{mdxType:"NoEvents"}),Object(l.b)("h2",{id:"side-effects"},"Side Effects"),Object(l.b)("p",null,"None"),Object(l.b)("h2",{id:"how-to-use"},"How to Use"),Object(l.b)("iframe",{src:"https://codesandbox.io/embed/scrollcontainer-e3bu5?fontsize=14&hidenavigation=1&theme=dark",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),Object(l.b)("h2",{id:"see-also"},"See Also"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"./ScrollToController"},"Scroll To Controller"),"\n",Object(l.b)("a",{parentName:"p",href:"./ScrollToTopController"},"Scroll To Top Controller"),"\n",Object(l.b)("a",{parentName:"p",href:"./ScrollToBottomController"},"Scroll To Bottom Controller"),"\n",Object(l.b)("a",{parentName:"p",href:"./ScrollIntoFocusController"},"Scroll Into Focus Controller")))}u.isMDXComponent=!0},169:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),s=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||l;return n?a.a.createElement(m,c(c({ref:t},i),{},{components:n})):a.a.createElement(m,c({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var i=2;i<l;i++)o[i]=n[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),l=(n(0),n(169)),o={},c={unversionedId:"_partials/no-classes",id:"_partials/no-classes",isDocsHomePage:!1,title:"no-classes",description:"| Class | Purpose |",source:"@site/docs/_partials/no-classes.md",sourceDirName:"_partials",slug:"/_partials/no-classes",permalink:"/stimulus-library/docs/_partials/no-classes",version:"current",frontMatter:{}},b=[],i={toc:b};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Class"),Object(l.b)("th",{parentName:"tr",align:null},"Purpose"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"-")),Object(l.b)("td",{parentName:"tr",align:null},"-")))))}s.isMDXComponent=!0},59:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),l=(n(0),n(169)),o={},c={unversionedId:"_partials/no-targets",id:"_partials/no-targets",isDocsHomePage:!1,title:"no-targets",description:"| Target | Purpose | Default |",source:"@site/docs/_partials/no-targets.md",sourceDirName:"_partials",slug:"/_partials/no-targets",permalink:"/stimulus-library/docs/_partials/no-targets",version:"current",frontMatter:{}},b=[],i={toc:b};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Target"),Object(l.b)("th",{parentName:"tr",align:null},"Purpose"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"-")),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"-")))))}s.isMDXComponent=!0},60:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),l=(n(0),n(169)),o={},c={unversionedId:"_partials/no-events",id:"_partials/no-events",isDocsHomePage:!1,title:"no-events",description:"| Event | When | Dispatched on | event.detail |",source:"@site/docs/_partials/no-events.md",sourceDirName:"_partials",slug:"/_partials/no-events",permalink:"/stimulus-library/docs/_partials/no-events",version:"current",frontMatter:{}},b=[],i={toc:b};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Event"),Object(l.b)("th",{parentName:"tr",align:null},"When"),Object(l.b)("th",{parentName:"tr",align:null},"Dispatched on"),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"th"},"event.detail")))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"-")),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"-")))))}s.isMDXComponent=!0}}]);