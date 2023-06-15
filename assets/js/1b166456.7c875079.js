"use strict";(self.webpackChunkroutr_docs=self.webpackChunkroutr_docs||[]).push([[8643],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(n),m=o,d=c["".concat(p,".").concat(m)]||c[m]||f[m]||a;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={},s="getServerInfo",i={unversionedId:"api/sys/info",id:"version-1.x.x/api/sys/info",title:"getServerInfo",description:"This method returns information about the server.",source:"@site/versioned_docs/version-1.x.x/api/sys/info.md",sourceDirName:"api/sys",slug:"/api/sys/info",permalink:"/docs/api/sys/info",draft:!1,editUrl:"https://github.com/fonoster/routr/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.x.x/api/sys/info.md",tags:[],version:"1.x.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"restartServer",permalink:"/docs/api/status/update"},next:{title:"getServerLogs",permalink:"/docs/api/sys/logs"}},p={},l=[],u={toc:l},c="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getserverinfo"},"getServerInfo"),(0,o.kt)("p",null,"This method returns information about the server."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"URL")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"/system/info")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Method")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GET")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("p",null,"This method does not receive any parameters."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Request body")),(0,o.kt)("p",null,"Do not supply a request body with this method."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response")),(0,o.kt)("p",null,"If successful this method returns relevant information about the server."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Sample Call")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'GET /api/{apiversion}/system/info\n{\n\n}\n\nHTTP/1.1 200 OK\n{\n  "status":200,\n  "message":"Successful request",\n  "data":{\n    "version":"v1.0",\n    "apiVersion":"v1beta1",\n    "apiPath":"/api/v1beta1",\n    "env":[\n       {\n         "var":"EXTERN_ADDR",\n         "value":"172.220.246.46"\n       },\n       {\n         "var":"LOCALNETS",\n         "value": "192.168.1.149/31"\n       },\n       {\n         "var":"REGISTRAR_INTF",\n         "value": "External"\n       }\n    ]\n  }\n}\n')))}f.isMDXComponent=!0}}]);