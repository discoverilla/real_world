"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[206],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9568:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(4996),l=["components"],s={sidebar_position:1},c="Introduction",p={unversionedId:"intro",id:"intro",title:"Introduction",description:"See how the exact same Medium.com clone (called Conduit) is built using different frontends and backends. Yes, you can mix and match them, because they all adhere to the same API spec \ud83d\ude2e\ud83d\ude0e",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/gothinkster/realworld/tree/main/docs/docs/docs/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Introduction",permalink:"/docs/implementation-creation/introduction"}},u={},d=[{value:"Implementations",id:"implementations",level:2},{value:"Create a new implementation",id:"create-a-new-implementation",level:2},{value:"Learn more",id:"learn-more",level:2}],m={toc:d};function h(e){var t=e.components,s=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("a",{href:"https://demo.realworld.io/"},(0,o.kt)("img",{src:(0,i.Z)("/img/conduit_l.png"),align:"right",width:"250px"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"See how ",(0,o.kt)("em",{parentName:"p"},"the exact same")," Medium.com clone (called ",(0,o.kt)("a",{parentName:"p",href:"https://demo.realworld.io"},"Conduit"),") is built using different ",(0,o.kt)("a",{parentName:"p",href:"https://codebase.show/projects/realworld?category=frontend"},"frontends")," and ",(0,o.kt)("a",{parentName:"p",href:"https://codebase.show/projects/realworld?category=backend"},"backends"),". Yes, you can mix and match them, because ",(0,o.kt)("strong",{parentName:"p"},"they all adhere to the same ",(0,o.kt)("a",{parentName:"strong",href:"specs/backend-specs/introduction"},"API spec"))," \ud83d\ude2e\ud83d\ude0e")),(0,o.kt)("p",null,"While most \"todo\" demos provide an excellent cursory glance at a framework's capabilities, they typically don't convey the knowledge & perspective required to actually build ",(0,o.kt)("em",{parentName:"p"},"real")," applications with it."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"RealWorld")," solves this by allowing you to choose any frontend (React, Angular, & more) and any backend (Node, Django, & more) and see how they power a real world, beautifully designed fullstack app called ",(0,o.kt)("a",{parentName:"p",href:"https://demo.realworld.io"},(0,o.kt)("strong",{parentName:"a"},"Conduit")),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Read the ",(0,o.kt)("a",{parentName:"em",href:"https://medium.com/@ericsimons/introducing-realworld-6016654d36b5"},"full blog post announcing RealWorld on Medium."))),(0,o.kt)("p",null,"Join us on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gothinkster/realworld/discussions"},"GitHub Discussions!")," \ud83c\udf89"),(0,o.kt)("h2",{id:"implementations"},"Implementations"),(0,o.kt)("p",null,"Over 100 implementations have been created using various languages, libraries, and frameworks."),(0,o.kt)("p",null,"Explore them on ",(0,o.kt)("a",{parentName:"p",href:"https://codebase.show/projects/realworld"},(0,o.kt)("strong",{parentName:"a"},"CodebaseShow"))),(0,o.kt)("h2",{id:"create-a-new-implementation"},"Create a new implementation"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"implementation-creation/introduction"},(0,o.kt)("strong",{parentName:"a"},"Create a new implementation >>>"))),(0,o.kt)("p",null,"Or you can ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gothinkster/realworld/discussions/categories/wip-implementations"},"view upcoming implementations (WIPs)"),"."),(0,o.kt)("h2",{id:"learn-more"},"Learn more"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/@ericsimons/introducing-realworld-6016654d36b5"},'"Introducing RealWorld \ud83d\ude4c"')," by Eric Simons"),(0,o.kt)("li",{parentName:"ul"},"Every tutorial is built against the same ",(0,o.kt)("a",{parentName:"li",href:"specs/backend-specs/introduction"},"API spec")," to ensure modularity of every frontend & backend"),(0,o.kt)("li",{parentName:"ul"},"Every frontend utilizes the same hand crafted ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/gothinkster/conduit-bootstrap-template"},"Bootstrap 4 theme")," for identical UI/UX"),(0,o.kt)("li",{parentName:"ul"},"There is a ",(0,o.kt)("a",{parentName:"li",href:"https://realworld-docs.netlify.app/docs/specs/frontend-specs/api#demo-api"},"hosted version")," of the backend API available for public usage, no API keys are required"),(0,o.kt)("li",{parentName:"ul"},"Interested in creating a new RealWorld stack? View our ",(0,o.kt)("a",{parentName:"li",href:"implementation-creation/introduction"},"starter guide & spec"))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://thinkster.io"},(0,o.kt)("img",{alt:"Brought to you by Thinkster",src:n(1341).Z,width:"1568",height:"466"}))))}h.isMDXComponent=!0},1341:function(e,t,n){t.Z=n.p+"assets/images/end-eb4086a6a065b1b9290505f1c85a0e1c.png"}}]);