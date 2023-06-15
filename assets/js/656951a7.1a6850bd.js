"use strict";(self.webpackChunkroutr_docs=self.webpackChunkroutr_docs||[]).push([[3804],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(n),d=o,f=c["".concat(i,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:o,s[1]=p;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6127:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={},s=void 0,p={unversionedId:"api/token",id:"version-1.x.x/api/token",title:"token",description:"This method gets a token for subsequent API calls.",source:"@site/versioned_docs/version-1.x.x/api/token.md",sourceDirName:"api",slug:"/api/token",permalink:"/docs/api/token",draft:!1,editUrl:"https://github.com/fonoster/routr/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.x.x/api/token.md",tags:[],version:"1.x.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"getServerLogs",permalink:"/docs/api/sys/logs"}},i={},l=[],u={toc:l},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This method gets a token for subsequent API calls."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"URL")),(0,o.kt)("p",null,"  ",(0,o.kt)("inlineCode",{parentName:"p"},"/token")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Method")),(0,o.kt)("p",null,"  ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("p",null,"  This method does not receive any parameters."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Request body")),(0,o.kt)("p",null,"  Do not supply a request body with this method."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response")),(0,o.kt)("p",null,"  If successful, this method returns a string with a token."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Sample Call")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'GET /api/{apiversion}/token\n{\n\n}\n\nHTTP/1.1 200 OK\n{\n  "status": 200,\n  "message": "Successful request",\n  "data": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiJ9.TZZ4kp5xIdYzs5RRt6_qVxJcOiLdk1IEHFMBSZ7SRENx6kyVhwfAlm-oeM4L2XFIr4evlTCxKEIKc0fZKwPcjw"\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Notes")),(0,o.kt)("p",null,"You must send a basic authentication header with this request."))}m.isMDXComponent=!0}}]);