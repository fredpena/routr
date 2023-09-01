"use strict";(self.webpackChunkroutr_docs=self.webpackChunkroutr_docs||[]).push([[8229],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=i(n),g=a,d=u["".concat(s,".").concat(g)]||u[g]||m[g]||o;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=g;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:a,l[1]=p;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9523:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={},l="getAgent",p={unversionedId:"api/agents/get",id:"version-1.x.x/api/agents/get",title:"getAgent",description:"This method returns an Agent resource.",source:"@site/versioned_docs/version-1.x.x/api/agents/get.md",sourceDirName:"api/agents",slug:"/api/agents/get",permalink:"/docs/api/agents/get",draft:!1,editUrl:"https://github.com/fonoster/routr-website/edit/main/versioned_docs/version-1.x.x/api/agents/get.md",tags:[],version:"1.x.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"deleteAgent",permalink:"/docs/api/agents/delete"},next:{title:"listAgents",permalink:"/docs/api/agents/list"}},s={},i=[],c={toc:i},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getagent"},"getAgent"),(0,a.kt)("p",null,"This method returns an Agent resource."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/agents/{ref}")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Value"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ref"),(0,a.kt)("td",{parentName:"tr",align:"left"},"path"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Resource reference")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Request body")),(0,a.kt)("p",null,"Do not supply a request body with this method."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Response")),(0,a.kt)("p",null,"If successful this method returns an Agent resource."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Sample Call")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'GET /api/{apiversion}/agents/ag3f77f6\n{\n\n}\n\nHTTP/1.1 200 OK\n{\n  "status": "200",\n  "message": "Successful request",\n  "data" : {\n    "apiVersion": "v1beta1",\n    "kind": "Agent",\n    "metadata": {\n        "name": "John Doe",\n      "ref": "ag3f77f6"\n    },\n    "spec": {\n        "credentials": {\n            "username": "1001",\n            "secret": "1234"\n        },\n        "domains": [\n            "sip.local"\n        ]\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);