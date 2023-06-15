"use strict";(self.webpackChunkroutr_docs=self.webpackChunkroutr_docs||[]).push([[7468],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6982:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={},s="Users",o={unversionedId:"configuration/users",id:"version-1.x.x/configuration/users",title:"Users",description:"Users exist in Routr to perform administrative actions on a Routr instance.",source:"@site/versioned_docs/version-1.x.x/configuration/users.md",sourceDirName:"configuration",slug:"/configuration/users",permalink:"/docs/configuration/users",draft:!1,editUrl:"https://github.com/fonoster/routr/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.x.x/configuration/users.md",tags:[],version:"1.x.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Peers",permalink:"/docs/configuration/peers"},next:{title:"Basic Setup",permalink:"/docs/guides/basic-setup"}},l={},c=[{value:"User Resource",id:"user-resource",level:2},{value:"Example",id:"example",level:2},{value:"Changing the password? (Redis)",id:"changing-the-password-redis",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"users"},"Users"),(0,a.kt)("p",null,"Users exist in Routr to perform administrative actions on a Routr instance.\nThe Users configuration can be provided using the file ",(0,a.kt)("inlineCode",{parentName:"p"},"config/users.yml")," located at the root of your Routr installation."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If using Redis this configuration gets stored in the database.")),(0,a.kt)("h2",{id:"user-resource"},"User Resource"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"apiVersion"),(0,a.kt)("td",{parentName:"tr",align:null},"Indicates the version of the resource (Not yet implemented)"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"kind"),(0,a.kt)("td",{parentName:"tr",align:null},"Defines the type of resource"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"metadata.name"),(0,a.kt)("td",{parentName:"tr",align:null},"Friendly name for the User device"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"spec.credentials.username"),(0,a.kt)("td",{parentName:"tr",align:null},"User's credential username"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"spec.credentials.secret"),(0,a.kt)("td",{parentName:"tr",align:null},"User's credential secret"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- apiVersion: v1beta1\n  kind: User\n  metadata:\n    name: Administrator\n  spec:\n    credentials:\n      username: admin\n      secret: changeit\n")),(0,a.kt)("h2",{id:"changing-the-password-redis"},"Changing the password? (Redis)"),(0,a.kt)("p",null,"First, run the command ",(0,a.kt)("inlineCode",{parentName:"p"},"redis-cli smembers users")," to obtain the reference to the user. Here is an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ redis-cli smembers users\n1) "5aa69ead8fd6861d92385bac"\n')),(0,a.kt)("p",null,"Then, retrieve the document for reference running ",(0,a.kt)("inlineCode",{parentName:"p"},"redis-cli get {REF}"),". For example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ redis-cli get 5aa69ead8fd6861d92385bac\n"{\\"apiVersion\\":\\"v1beta1\\",\\"kind\\":\\"User\\",\\"metadata\\":{\\"name\\":\\"Ctl\\",\\"ref\\":\\"5aa69ead8fd6861d92385bac\\"},\\"spec\\":{\\"credentials\\":{\\"username\\":\\"admin\\",\\"secret\\":\\"oldpass\\"}}}"\n')),(0,a.kt)("p",null,"Finally, search and change the old password and update your document using ",(0,a.kt)("inlineCode",{parentName:"p"},"redis-cli set {REF} {DOCUMENT}"),". Like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ redis-cli set 5aa69ead8fd6861d92385bac\n"{\\"apiVersion\\":\\"v1beta1\\",\\"kind\\":\\"User\\",\\"metadata\\":{\\"name\\":\\"Ctl\\",\\"ref\\":\\"5aa69ead8fd6861d92385bac\\"},\\"spec\\":{\\"credentials\\":{\\"username\\":\\"admin\\",\\"secret\\":\\"newpass\\"}}}"\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A new token is issued after your next login with ",(0,a.kt)("inlineCode",{parentName:"p"},"rctl"))))}p.isMDXComponent=!0}}]);