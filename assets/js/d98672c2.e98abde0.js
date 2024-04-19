"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[69276],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>f});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),g=a,f=p["".concat(l,".").concat(g)]||p[g]||d[g]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},16696:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>p});n(96540);var r=n(15680);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={title:"Sinks",slug:"/metadata-ingestion/sink_overview",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/sink_overview.md"},l="Sinks",c={unversionedId:"metadata-ingestion/sink_overview",id:"metadata-ingestion/sink_overview",title:"Sinks",description:"Sinks are destinations for metadata.",source:"@site/genDocs/metadata-ingestion/sink_overview.md",sourceDirName:"metadata-ingestion",slug:"/metadata-ingestion/sink_overview",permalink:"/docs/metadata-ingestion/sink_overview",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/sink_overview.md",tags:[],version:"current",frontMatter:{title:"Sinks",slug:"/metadata-ingestion/sink_overview",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/sink_overview.md"},sidebar:"overviewSidebar",previous:{title:"Recipes",permalink:"/docs/metadata-ingestion/recipe_overview"},next:{title:"Console",permalink:"/docs/metadata-ingestion/sink_docs/console"}},u={},p=[{value:"Types of Sinks",id:"types-of-sinks",level:2},{value:"Default Sink",id:"default-sink",level:2}],d={toc:p},g="wrapper";function f(e){var{components:t}=e,n=o(e,["components"]);return(0,r.yg)(g,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"sinks"},"Sinks"),(0,r.yg)("p",null,"Sinks are ",(0,r.yg)("strong",{parentName:"p"},"destinations for metadata"),"."),(0,r.yg)("p",{align:"center"},(0,r.yg)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/sources-sinks.png"})),(0,r.yg)("p",null,"In general, the sink will be defined in the ",(0,r.yg)("a",{parentName:"p",href:"/docs/metadata-ingestion/recipe_overview"},"recipe")," after the ",(0,r.yg)("a",{parentName:"p",href:"/docs/metadata-ingestion/source-docs-template"},"source")," like below."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"source: ...\n\nsink:\n  type: <sink_type>\n  config: ...\n")),(0,r.yg)("h2",{id:"types-of-sinks"},"Types of Sinks"),(0,r.yg)("p",null,"When configuring ingestion for DataHub, you're likely to be sending the metadata to DataHub over either one of the following."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/metadata-ingestion/sink_docs/datahub#datahub-rest"},"REST (datahub-rest)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/metadata-ingestion/sink_docs/datahub#datahub-kafka"},"Kafka (datahub-kafka)"))),(0,r.yg)("p",null,"For debugging purposes or troubleshooting, the following sinks can be useful:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/metadata-ingestion/sink_docs/file"},"File")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/metadata-ingestion/sink_docs/console"},"Console"))),(0,r.yg)("h2",{id:"default-sink"},"Default Sink"),(0,r.yg)("p",null,"Since ",(0,r.yg)("inlineCode",{parentName:"p"},"acryl-datahub")," version ",(0,r.yg)("inlineCode",{parentName:"p"},">=0.8.33.2"),", the default sink is assumed to be a ",(0,r.yg)("inlineCode",{parentName:"p"},"datahub-rest")," endpoint."))}f.isMDXComponent=!0}}]);