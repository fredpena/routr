"use strict";(self.webpackChunkroutr_docs=self.webpackChunkroutr_docs||[]).push([[257],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>f});var t=r(7294);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,s=function(e,n){if(null==e)return{};var r,t,s={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),u=s,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return r?t.createElement(f,o(o({ref:n},p),{},{components:r})):t.createElement(f,o({ref:n},p))}));function f(e,n){var r=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[m]="string"==typeof e?e:s,o[1]=i;for(var c=2;c<a;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3986:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var t=r(7462),s=(r(7294),r(3905));const a={},o="Building a Processor",i={unversionedId:"development/building-a-processor",id:"development/building-a-processor",title:"Building a Processor",description:"Processors are how we extend the signaling functionality of Routr. Processors are where we can add new SIP headers, modify existing ones, add endpoints to the Location Service, etc. Processors are implemented as gRPC services and use the Alterations API to modify SIP messages. A Processor is the last stop for a SIP message before it is sent out to the network.",source:"@site/docs/development/building-a-processor.md",sourceDirName:"development",slug:"/development/building-a-processor",permalink:"/docs/2.0.0/development/building-a-processor",draft:!1,editUrl:"https://github.com/fonoster/routr-website/edit/main/docs/development/building-a-processor.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Alteration Methods",permalink:"/docs/2.0.0/development/alterations/methods"},next:{title:"Building a Middleware",permalink:"/docs/2.0.0/development/building-a-middleware"}},l={},c=[{value:"Processor Contract",id:"processor-contract",level:2},{value:"Building a Processor from a Template",id:"building-a-processor-from-a-template",level:2}],p={toc:c},m="wrapper";function d(e){let{components:n,...r}=e;return(0,s.kt)(m,(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"building-a-processor"},"Building a Processor"),(0,s.kt)("p",null,"Processors are how we extend the signaling functionality of Routr. Processors are where we can add new SIP headers, modify existing ones, add endpoints to the Location Service, etc. Processors are implemented as gRPC services and use the ",(0,s.kt)("a",{parentName:"p",href:"/docs/overview/concepts#alterations"},"Alterations API")," to modify SIP messages. A Processor is the last stop for a SIP message before it is sent out to the network."),(0,s.kt)("p",null,"Here is a non-exhaustive list of things you can do with a Processor:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Build an instant messaging application"),(0,s.kt)("li",{parentName:"ul"},"Create a custom logic for a SCAIP system"),(0,s.kt)("li",{parentName:"ul"},"Build a SIP Recorder when combined with RTPEngine"),(0,s.kt)("li",{parentName:"ul"},"Doorbell Camera System integration"),(0,s.kt)("li",{parentName:"ul"},"Custom logic for a SIP IoT system")),(0,s.kt)("h2",{id:"processor-contract"},"Processor Contract"),(0,s.kt)("p",null,"A Processor is a gRPC service that implements the ",(0,s.kt)("inlineCode",{parentName:"p"},"Processor")," interface. The interface is defined in the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/fonoster/routr/blob/main/mods/common/src/protos/processor.proto"},"processor.proto")," file. "),(0,s.kt)("p",null,"Here is the definition of the Processor interface:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\npackage fonoster.routr.processor.v2beta1;\n\nimport "common.proto";\nimport "sipmessage.proto";\n\n// Processor service\nservice Processor {\n  // Process Message Request\n  rpc ProcessMessage (MessageRequest) returns (MessageResponse) {}\n}\n\nenum Method {\n  UNKNOWN = 0;\n  // Communicates user location (hostname, IP)\n  REGISTER = 1;\n  // Establishes a session\n  INVITE = 2;\n  // Transports Instant Messages\n  MESSAGE = 3;\n  // Publishes an event to the Server\n  PUBLISH = 4;\n  // Notifies the subscriber of a new event\n  NOTIFY = 5;\n  // Subscribes for Notification from the notifier\n  SUBSCRIBE = 6;\n  // Confirms an INVITE request\n  ACK = 7;\n  // Terminates a session\n  BYE = 8;\n  // Cancels establishing of a session\n  CANCEL = 9;\n  // Communicates information about the capabilities of the calling and receiving SIP phones\n  OPTIONS = 10;\n  // Provisional Acknowledgement\n  PRACK = 11;\n  // Sends mid session information\n  INFO = 12;\n  // Asks the recipient to issue call transfer\n  REFER = 13;\n  // Modifies the state of a session\n  UPDATE = 14;\n}\n\nmessage NetInterface {\n  string host = 1;\n  int32 port = 2;\n  fonoster.routr.common.v2beta1.Transport transport = 3;\n}\n\nmessage MessageRequest {\n  // Same as the Call-Id header \n  string ref = 1;\n  string edge_port_ref = 2;\n  Method method = 3;\n  NetInterface sender = 4;\n  repeated NetInterface listening_points = 5;\n  repeated string external_addrs = 6;\n  repeated string localnets = 7;\n  fonoster.routr.sipmessage.v2beta1.SIPMessage message = 8;\n  map<string, string> metadata = 9;\n}\n\nmessage MessageResponse {\n  NetInterface sender = 1;\n  fonoster.routr.sipmessage.v2beta1.SIPMessage message = 2;\n  map<string, string> metadata = 3;\n}\n')),(0,s.kt)("p",null,"As you can see in the protobuf, the message contains the SIP message and metadata about the message. It includes things like the sender, the method, the listening points, etc. This metadata is necessary because it is how Routr processes messages statelessly."),(0,s.kt)("p",null,"You can write processors in any language that supports gRPC. However, at the moment, we provide better support for NodeJS."),(0,s.kt)("p",null,"One feature of using NodeJS is receiving the JSON representation of the gRPC message. That makes it easier to work with the message in JavaScript."),(0,s.kt)("p",null,"As an example, here is the JSON representation of a SIP REGISTER message:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ref": "AynhXaFtbdXwHrUEzt_rUQ..",\n  "edgePortRef": "edgeport-01",\n  "method": "REGISTER",\n  "externalAddrs": ["200.22.21.42"],\n  "localnets": ["127.0.0.1/8", "10.100.42.127/24", "10.100.43.128/31"],\n  "listeningPoints": [\n    {\n      "host": "0.0.0.0",\n      "port": 5060,\n      "transport": "TCP"\n    },\n    {\n      "host": "0.0.0.0",\n      "port": 5060,\n      "transport": "UDP"\n    }\n  ],\n  "sender": {\n    "host": "127.0.0.1",\n    "port": 36214,\n    "transport": "TCP"\n  },\n  "message": {\n    "via": [\n      {\n        "host": "proxy",\n        "port": 5060,\n        "branch": "z9hG4bK-524287-1---7315a24d84546819",\n        "transport": "TCP"\n      },\n      {\n        "host": "127.0.0.1",\n        "port": 36214,\n        "branch": "z9hG4bK-524287-1---7315a24d84546819",\n        "transport": "TCP"\n      }\n    ],\n    "extensions": [\n      {\n        "name": "CSeq",\n        "value": "14 REGISTER"\n      },\n      {\n        "name": "Allow",\n        "value": "INVITE"\n      },\n      {\n        "name": "User-Agent",\n        "value": "Z 5.4.12 v2.10.13.2"\n      },\n      {\n        "name": "Allow-Events",\n        "value": "presence"\n      }\n    ],\n    "from": {\n      "address": {\n        "uri": {\n          "user": "1001",\n          "userPassword": "",\n          "host": "sip.local",\n          "transportParam": "UDP",\n          "mAddrParam": "",\n          "methodParam": "",\n          "userParam": "",\n          "ttlParam": -1,\n          "port": 5060,\n          "lrParam": false,\n          "secure": false\n        },\n        "displayName": "John Doe",\n        "wildcard": false\n      },\n      "tag": "9041462a"\n    },\n    "to": {\n      "address": {\n        "uri": {\n          "user": "1001",\n          "userPassword": "",\n          "host": "sip.local",\n          "transportParam": "TCP",\n          "mAddrParam": "",\n          "methodParam": "",\n          "userParam": "",\n          "ttlParam": -1,\n          "port": 5060,\n          "lrParam": false,\n          "secure": false\n        },\n        "displayName": "",\n        "wildcard": false\n      },\n      "tag": ""\n    },\n    "contact": {\n      "address": {\n        "uri": {\n          "user": "1001",\n          "userPassword": "",\n          "host": "127.0.0.1",\n          "transportParam": "TCP",\n          "mAddrParam": "",\n          "methodParam": "",\n          "userParam": "",\n          "ttlParam": -1,\n          "port": 36214,\n          "lrParam": false,\n          "secure": false\n        },\n        "displayName": "",\n        "wildcard": false\n      },\n      "expires": -1,\n      "qValue": -1\n    },\n    "callId": {\n      "callId": "AynhXaFtbdXwHrUEzt_rUQ.."\n    },\n    "contentLength": {\n      "contentLength": 0\n    },\n    "maxForwards": {\n      "maxForwards": 70\n    },\n    "expires": {\n      "expires": 60\n    },\n    "recordRoute": [\n      {\n        "parameters": {\n          "a": "1",\n          "b": "2"\n        },\n        "address": {\n          "uri": {\n            "user": "",\n            "userPassword": "",\n            "host": "sip.local",\n            "transportParam": "TCP",\n            "mAddrParam": "",\n            "methodParam": "",\n            "userParam": "",\n            "ttlParam": -1,\n            "port": 5060,\n            "lrParam": false,\n            "secure": false\n          },\n          "displayName": "",\n          "wildcard": false\n        }\n      }\n    ],\n    "route": [\n      {\n        "parameters": null,\n        "address": {\n          "uri": {\n            "user": "",\n            "userPassword": "",\n            "host": "10.100.42.127",\n            "transportParam": "TCP",\n            "mAddrParam": "",\n            "methodParam": "",\n            "userParam": "",\n            "ttlParam": -1,\n            "port": 5060,\n            "lrParam": false,\n            "secure": false\n          },\n          "displayName": "",\n          "wildcard": false\n        }\n      },\n      {\n        "parameters": null,\n        "address": {\n          "uri": {\n            "user": "",\n            "userPassword": "",\n            "host": "10.100.42.128",\n            "transportParam": "TCP",\n            "mAddrParam": "",\n            "methodParam": "",\n            "userParam": "",\n            "ttlParam": -1,\n            "port": 5060,\n            "lrParam": false,\n            "secure": false\n          },\n          "displayName": "",\n          "wildcard": false\n        }\n      }\n    ],\n    "authorization": {\n      "realm": "sip.local",\n      "scheme": "Digest",\n      "cNonce": "acbcc60094edde23f49b01e18bafd34e",\n      "nonce": "b8fe2321cf489ac475c80c6e5cfa1c22",\n      "algorithm": "MD5",\n      "qop": "",\n      "opaque": "",\n      "response": "227fe247ff0b9fa4fcf2706b587bf995",\n      "username": "1001",\n      "uri": "sip:sip.local;transport=TCP",\n      "nonceCount": 13\n    },\n    "requestUri": {\n      "user": "",\n      "userPassword": "",\n      "host": "sip.local",\n      "transportParam": "TCP",\n      "mAddrParam": "",\n      "methodParam": "",\n      "userParam": "",\n      "ttlParam": -1,\n      "port": 5060,\n      "lrParam": false,\n      "secure": false\n    },\n    "messageType": "REQUEST"\n  }\n}\n')),(0,s.kt)("h2",{id:"building-a-processor-from-a-template"},"Building a Processor from a Template"),(0,s.kt)("p",null,"To make it easier to build processors, we provide a template you can use to get started. The template is available in the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/fonoster/nodejs-processor"},"routr-processor-template.")),(0,s.kt)("p",null,"To use the template, you must have ",(0,s.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"NodeJS")," installed in your system. Once you have NodeJS installed, you can use the following command to create a new processor:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx degit fonoster/nodejs-processor my-processor\n")),(0,s.kt)("p",null,"The previous command will create a new folder called ",(0,s.kt)("inlineCode",{parentName:"p"},"my-processor")," with the following structure:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 CONTRIBUTING.md\n\u251c\u2500\u2500 Dockerfile\n\u251c\u2500\u2500 LICENSE\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 commitlint.config.js\n\u251c\u2500\u2500 docker-compose.yml\n\u251c\u2500\u2500 package-lock.json\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 envs.ts\n\u2502   \u251c\u2500\u2500 handlers.ts\n\u2502   \u2514\u2500\u2500 index.ts\n\u251c\u2500\u2500 test\n\u2502   \u2514\u2500\u2500 unit.test.ts\n\u2514\u2500\u2500 tsconfig.json\n")),(0,s.kt)("p",null,"The most important file is the ",(0,s.kt)("inlineCode",{parentName:"p"},"handlers.ts")," file. This file is where you will write your processor logic. Feel free to review the file, as it contains an example of how to write an instant messaging processor."),(0,s.kt)("p",null,"From there, you can install the dependencies and start the processor:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-processor\nnpm install\nnpm start\n")),(0,s.kt)("p",null,"You may now start sending SIP messages to your processor from EdgePort or Dispatcher."))}d.isMDXComponent=!0}}]);