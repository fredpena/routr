"use strict";(self.webpackChunkroutr_docs=self.webpackChunkroutr_docs||[]).push([[4058],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={},i="WebRTC support",c={unversionedId:"connect/webrtc-support",id:"connect/webrtc-support",title:"WebRTC support",description:"The Connect Processor supports interoperability with WebRTC clients. This means that you can use any SIP client that also supports WebRTC to make and receive calls, such as with the JavaScript libraries SIP.js and JsSIP for example. However, because WebRTC mandates the use of specific codecs, transport protocols, and a certain version of RTP that might differ from those used by legacy SIP clients, you will need to make additional configuration changes to your server.",source:"@site/docs/connect/webrtc-support.md",sourceDirName:"connect",slug:"/connect/webrtc-support",permalink:"/docs/next/connect/webrtc-support",draft:!1,editUrl:"https://github.com/fonoster/routr-website/edit/main/docs/connect/webrtc-support.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SDK",permalink:"/docs/next/connect/nodesdk/sdk"},next:{title:"Community",permalink:"/docs/next/community"}},s={},l=[],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"webrtc-support"},"WebRTC support"),(0,o.kt)("p",null,"The Connect Processor supports interoperability with WebRTC clients. This means that you can use any SIP client that also supports WebRTC to make and receive calls, such as with the JavaScript libraries SIP.js and JsSIP for example. However, because WebRTC mandates the use of specific codecs, transport protocols, and a certain version of RTP that might differ from those used by legacy SIP clients, you will need to make additional configuration changes to your server."),(0,o.kt)("p",null,"Let\u2019s say you want to use SIP.js to make and receive calls. In that case, you will need to add a RTPRelay component to your setup. The RTPRelay component is a Routr middleware that takes control of an RTPengine instance for media relay between WebRTC and legacy SIP clients."),(0,o.kt)("p",null,"Note that this is only needed if you are using a mix of WebRTC and legacy SIP clients. If you are exclusively using WebRTC clients, then you can skip this step."),(0,o.kt)("p",null,"To enable WebRTC interoperability, you will need to update your docker-compose.yml file to include the ",(0,o.kt)("inlineCode",{parentName:"p"},"RTPENGINE_HOST")," environment variable. Here is an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\n\nservices:\n\n  routr:\n    image: fonoster/routr-one:latest\n    environment:\n      EXTERNAL_ADDRS: ${DOCKER_HOST_ADDRESS}\n      RTPENGINE_HOST: ${RTPE_HOST} \n    ports:\n      - 51908:51908\n      - 5060:5060/udp\n\n-- snip --\n')),(0,o.kt)("p",null,"If using Helm, you will need to add the following configuration to your ",(0,o.kt)("inlineCode",{parentName:"p"},"values.yaml")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"rtprelay:\n  enabled: true\n  rtpeHost: /* rtpengine */ \n  rtpPort: 22222\n")),(0,o.kt)("p",null,"Keep in mind that this configuration will only work if you have an instance of RTPengine running somewhere."))}d.isMDXComponent=!0}}]);