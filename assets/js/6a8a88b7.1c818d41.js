"use strict";(self.webpackChunkroutr_docs=self.webpackChunkroutr_docs||[]).push([[6083],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(o),m=n,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return o?r.createElement(h,a(a({ref:t},u),{},{components:o})):r.createElement(h,a({ref:t},u))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},7753:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=o(7462),n=(o(7294),o(3905));const i={},a="Introduction",l={unversionedId:"development/introduction",id:"development/introduction",title:"Introduction",description:"Developers and implementors looking to customize Routr for their specific use cases should refer to this section. Here, you'll learn about the core components, their interactions, and the steps to create custom Processors and Middleware.",source:"@site/docs/development/introduction.md",sourceDirName:"development",slug:"/development/introduction",permalink:"/docs/2.0.0/development/introduction",draft:!1,editUrl:"https://github.com/fonoster/routr-website/edit/main/docs/development/introduction.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deploy with Docker",permalink:"/docs/2.0.0/overview/deploy-with-docker"},next:{title:"Quick Start",permalink:"/docs/2.0.0/development/quick-start"}},s={},c=[{value:"How to read this section",id:"how-to-read-this-section",level:2},{value:"Tooling and dependencies",id:"tooling-and-dependencies",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Developers and implementors looking to customize Routr for their specific use cases should refer to this section. Here, you'll learn about the core components, their interactions, and the steps to create custom Processors and Middleware."),(0,n.kt)("p",null,"Additionally, we'll cover how to use tools such as Docker, Docker Compose, Helm, and Kubernetes for orchestrating the components. You'll also discover how to extend the APIServer for your needs and build plugins for the Command-line Tool."),(0,n.kt)("h2",{id:"how-to-read-this-section"},"How to read this section"),(0,n.kt)("p",null,"The concepts in this section build on top of each other. Therefore, we recommend reading the information sequence. However, if you are already familiar with the concepts, you can jump to the page that interests you the most."),(0,n.kt)("h2",{id:"tooling-and-dependencies"},"Tooling and dependencies"),(0,n.kt)("p",null,"The only requirements to build and run Routr are Java and NodeJS. However, we recommend considering the following tools to make the development process easier:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker"),": We use Docker to build and run individual components"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/"},"Docker Compose"),": We use Docker Compose to orchestrate the components"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://helm.sh/"},"Helm"),": Helm helps us to deploy Routr in Kubernetes"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://kubernetes.io/"},"Kubernetes"),": Kubernetes is the platform where we deploy Routr for large scale deployments"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"Kubectl"),": Kubectl is the command-line tool for Kubernetes"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"link"},"sngrep"),": A tool for monitoring SIP traffic (You could use Wireshark as well)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"link"},"grpcurl"),": A command-line tool for interacting with gRPC servers")),(0,n.kt)("p",null,"If you don't have a Kubernetes cluster, you can use ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-minikube/"},"Minikube")," or Docker Desktop with Kubernetes enabled."))}d.isMDXComponent=!0}}]);