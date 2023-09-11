"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[88969],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),d=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return a?r.createElement(h,s(s({ref:t},l),{},{components:a})):r.createElement(h,s({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var d=2;d<o;d++)s[d]=a[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},36224:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const o={title:"What is Generalized Metadata Service (GMS)?",slug:"/what/gms",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/what/gms.md"},s="What is Generalized Metadata Service (GMS)?",i={unversionedId:"docs/what/gms",id:"version-0.10.5/docs/what/gms",title:"What is Generalized Metadata Service (GMS)?",description:"Metadata for entities onboarded to GMA is served through microservices known as Generalized Metadata Service (GMS). GMS typically provides a Rest.li API and must access the metadata using GMA DAOs.",source:"@site/versioned_docs/version-0.10.5/docs/what/gms.md",sourceDirName:"docs/what",slug:"/what/gms",permalink:"/docs/0.10.5/what/gms",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/what/gms.md",tags:[],version:"0.10.5",frontMatter:{title:"What is Generalized Metadata Service (GMS)?",slug:"/what/gms",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/what/gms.md"}},c={},d=[],l={toc:d},p="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"what-is-generalized-metadata-service-gms"},"What is Generalized Metadata Service (GMS)?"),(0,n.kt)("p",null,"Metadata for ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.10.5/what/entity"},"entities")," ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.10.5/metadata-modeling/metadata-model"},"onboarded")," to ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.10.5/what/gma"},"GMA")," is served through microservices known as Generalized Metadata Service (GMS). GMS typically provides a ",(0,n.kt)("a",{parentName:"p",href:"http://rest.li"},"Rest.li")," API and must access the metadata using ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.10.5/architecture/metadata-serving"},"GMA DAOs"),". "),(0,n.kt)("p",null,"While a GMS is completely free to define its public APIs, we do provide a list of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub-gma/tree/master/restli-resources/src/main/java/com/linkedin/metadata/restli"},"resource base classes")," to leverage for common patterns."),(0,n.kt)("p",null,"GMA is designed to support a distributed fleet of GMS, each serving a subset of the ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.10.5/what/graph"},"GMA graph"),". However, for simplicity we include a single centralized GMS (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/gms"},"datahub-gms"),") that serves all entities."))}u.isMDXComponent=!0}}]);