"use strict";(self.webpackChunkroutr_docs=self.webpackChunkroutr_docs||[]).push([[9027],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>c});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=d(a),k=r,c=u["".concat(p,".").concat(k)]||u[k]||m[k]||l;return a?n.createElement(c,i(i({ref:e},s),{},{components:a})):n.createElement(c,i({ref:e},s))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},1284:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={},i="General",o={unversionedId:"configuration/general",id:"version-1.x.x/configuration/general",title:"General",description:"The general configuration affects your entire Routr instance. The general configuration",source:"@site/versioned_docs/version-1.x.x/configuration/general.md",sourceDirName:"configuration",slug:"/configuration/general",permalink:"/docs/configuration/general",draft:!1,editUrl:"https://github.com/fonoster/routr/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.x.x/configuration/general.md",tags:[],version:"1.x.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Gateways",permalink:"/docs/configuration/gateways"},next:{title:"Numbers",permalink:"/docs/configuration/numbers"}},p={},d=[{value:"General Configuration Parameters",id:"general-configuration-parameters",level:2},{value:"Transport Configuration",id:"transport-configuration",level:2},{value:"Datasource Providers",id:"datasource-providers",level:2},{value:"Redis Data Provider",id:"redis-data-provider",level:3},{value:"Files Data Provider",id:"files-data-provider",level:3},{value:"Configuring the server behind a NAT",id:"configuring-the-server-behind-a-nat",level:2},{value:"Access Control List",id:"access-control-list",level:2},{value:"Basic Example",id:"basic-example",level:2}],s={toc:d},u="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"general"},"General"),(0,r.kt)("p",null,"The general configuration affects your entire Routr instance. The general configuration\ncan be provided using the file ",(0,r.kt)("inlineCode",{parentName:"p"},"config/config.yml")," located at the root of your Routr installation."),(0,r.kt)("h2",{id:"general-configuration-parameters"},"General Configuration Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"apiVersion"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates the version of the resource (Not yet implemented)"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metadata.userAgent"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets sip header ",(0,r.kt)("inlineCode",{parentName:"td"},"User-Agent")," to the desired value"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.dataSource.provider"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines data provider. Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"files_data_provider")),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.dataSource.parameters"),(0,r.kt)("td",{parentName:"tr",align:null},"Data Source Parameters. Ex.: 'host=localhost,port=6379'"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.bindAddr"),(0,r.kt)("td",{parentName:"tr",align:null},"Default stack IP address"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.externAddr"),(0,r.kt)("td",{parentName:"tr",align:null},"IP address to advertise"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.localnets"),(0,r.kt)("td",{parentName:"tr",align:null},"Local networks. Use in combination with spec.externAddr"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.recordRoute"),(0,r.kt)("td",{parentName:"tr",align:null},"Stay within the signaling path"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.transport.","[*]",".bindAddr"),(0,r.kt)("td",{parentName:"tr",align:null},"Overwrites ",(0,r.kt)("inlineCode",{parentName:"td"},"spec.bindAddr")," for transport entry"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.transport.","[*]",".port"),(0,r.kt)("td",{parentName:"tr",align:null},"Transport port"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.transport.","[*]",".protocol"),(0,r.kt)("td",{parentName:"tr",align:null},"Valid values are: ",(0,r.kt)("inlineCode",{parentName:"td"},"tcp"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"udp"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"tls"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"sctp"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ws"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"wss")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.registrarIntf"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Internal"),' causes the server to use the IP and port it "sees"(received & rport) from a device attempting to register. Defaults to ',(0,r.kt)("inlineCode",{parentName:"td"},"External")),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.accessControlList.deny.","[*]"),(0,r.kt)("td",{parentName:"tr",align:null},"Deny incoming traffic from network list"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.accessControlList.allow.","[*]"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow incoming traffic from network list"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.restService.bindAddr"),(0,r.kt)("td",{parentName:"tr",align:null},"Restful service listening address"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.restService.port"),(0,r.kt)("td",{parentName:"tr",align:null},"Restful service port. Defaults to 4567"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.restService.minThreads"),(0,r.kt)("td",{parentName:"tr",align:null},"Minimum thread allocation. Defaults to 8"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.restService.maxThreads"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum thread allocation. Defaults to 200"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.restService.timeOutMillis"),(0,r.kt)("td",{parentName:"tr",align:null},"Will reject requests that last more than this value. Defaults to 5000(5 seconds)"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.restService.unsecured"),(0,r.kt)("td",{parentName:"tr",align:null},"Disabled https for restful calls. Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.restService.keyStore"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to keyStore"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.restService.trueStore"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to trueStore"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.restService.keyStorePassword"),(0,r.kt)("td",{parentName:"tr",align:null},"Password for keyStore"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.restService.trueStorePassword"),(0,r.kt)("td",{parentName:"tr",align:null},"Password for trueStore"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.securityContext.keyStore"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to keyStore"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.securityContext.trustStore"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to trueStore"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.securityContext.keyStorePassword"),(0,r.kt)("td",{parentName:"tr",align:null},"Password for keyStore"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.securityContext.keyStoreType"),(0,r.kt)("td",{parentName:"tr",align:null},"KeyStore type"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.securityContext.client.authType"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of client authentication. Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"DisabledAll"),". See ",(0,r.kt)("a",{parentName:"td",href:"https://goo.gl/1vKbXW"},"https://goo.gl/1vKbXW")," for more options"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.securityContext.client.protocols.","[*]"),(0,r.kt)("td",{parentName:"tr",align:null},"Accepted TLS protocols. Defaults to ","[",(0,r.kt)("inlineCode",{parentName:"td"},"TLSv1.2"),"]"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.securityContext.debugging"),(0,r.kt)("td",{parentName:"tr",align:null},"Turns ON or OFF ssl debugging. Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.ex_rtpEngine.enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"If enabled, it will send all media thru the RTPEngine. Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.ex_rtpEngine.proto"),(0,r.kt)("td",{parentName:"tr",align:null},"Reserved to allow for NG commands via ",(0,r.kt)("inlineCode",{parentName:"td"},"http"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"https"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"udp"),". Currently only ",(0,r.kt)("inlineCode",{parentName:"td"},"http")," is supported"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.ex_rtpEngine.host"),(0,r.kt)("td",{parentName:"tr",align:null},"Address for RTPEngine"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.ex_rtpEngine.port"),(0,r.kt)("td",{parentName:"tr",align:null},"Port for RTPEngine"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.ex_convertTelToE164"),(0,r.kt)("td",{parentName:"tr",align:null},"If enabled, it will convert the number on ingress calls to ",(0,r.kt)("inlineCode",{parentName:"td"},"E164")," format before routing the call. Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spec.ex_uniqueGatewayPerHostPort"),(0,r.kt)("td",{parentName:"tr",align:null},"If enabled, it will yield an error if a Gateway with the same host and port combination already exists. Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Variables prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"ex_")," are experimental features and may be removed or renamed in the future.")),(0,r.kt)("h2",{id:"transport-configuration"},"Transport Configuration"),(0,r.kt)("p",null,"Routr supports ",(0,r.kt)("inlineCode",{parentName:"p"},"tcp"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"udp"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"tls"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sctp"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ws"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"wss")," as transport protocols."),(0,r.kt)("p",null,"The server requires at least one transport protocol.\nTo bind a transport protocol to a specific IP address, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.transport.bindAddr")," or more generally ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.bindAddr"),"."),(0,r.kt)("h2",{id:"datasource-providers"},"Datasource Providers"),(0,r.kt)("p",null,"Routr currently implements two data providers: ",(0,r.kt)("inlineCode",{parentName:"p"},"redis_data_provider")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"files_data_provider"),". The default data provider is the ",(0,r.kt)("inlineCode",{parentName:"p"},"files_data_provider"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The docker distribution of the server uses ",(0,r.kt)("inlineCode",{parentName:"p"},"redis_data_provider")," by default")),(0,r.kt)("h3",{id:"redis-data-provider"},"Redis Data Provider"),(0,r.kt)("p",null,"The parameters for ",(0,r.kt)("inlineCode",{parentName:"p"},"redis_data_provider")," are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"host"),(0,r.kt)("td",{parentName:"tr",align:null},"Redis host. Defaults to 'localhost'"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"port"),(0,r.kt)("td",{parentName:"tr",align:null},"Redis port. The default port is 6379"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"secret"),(0,r.kt)("td",{parentName:"tr",align:null},"Password to access database"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("h3",{id:"files-data-provider"},"Files Data Provider"),(0,r.kt)("p",null,"The parameters for ",(0,r.kt)("inlineCode",{parentName:"p"},"files_data_provider")," are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to configuration files. Defaults to the ",(0,r.kt)("inlineCode",{parentName:"td"},"config")," folder"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("p",null,"This implementation has the limitation that writes operations have to be performed manually on the files."),(0,r.kt)("h2",{id:"configuring-the-server-behind-a-nat"},"Configuring the server behind a NAT"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.externAddr")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.localnets")," parameters help Routr identify the\ncorrect path for any given traffic. The ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.externAddr")," is typically the Internet\nfacing IP address. The ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.localnets")," is an array with valid CIDR, IP/Mask, or single IP values.\nHere is quick example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  externAddr: 172.220.231.23\n  localnets: [172.17.0.2/16]\n")),(0,r.kt)("h2",{id:"access-control-list"},"Access Control List"),(0,r.kt)("p",null,"The Access Control List(ACL) provides with a security mechanism to disable network\naccess from unwanted sources. ACL rules exist at general or Domain level. Here is an example,\nblocking all traffic except from IP address ",(0,r.kt)("inlineCode",{parentName:"p"},"192.168.0.1"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  accessControlList:\n    deny: [0.0.0.0/1]        # Deny all\n    allow: [192.168.0.1/31]\n")),(0,r.kt)("h2",{id:"basic-example"},"Basic Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1beta1\nspec:\n  transport:\n    - protocol: tcp\n      port: 5060\n    - protocol: udp\n      port: 5060\n")))}m.isMDXComponent=!0}}]);