"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[33663],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>m});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),b=n,m=d["".concat(s,".").concat(b)]||d[b]||p[b]||o;return a?r.createElement(m,l(l({ref:t},u),{},{components:a})):r.createElement(m,l({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},10463:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});a(96540);var r=a(15680);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const i={title:"v0.2.8",slug:"/managed-datahub/release-notes/v_0_2_8",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/release-notes/v_0_2_8.md"},s="v0.2.8",c={unversionedId:"docs/managed-datahub/release-notes/v_0_2_8",id:"docs/managed-datahub/release-notes/v_0_2_8",title:"v0.2.8",description:"---",source:"@site/genDocs/docs/managed-datahub/release-notes/v_0_2_8.md",sourceDirName:"docs/managed-datahub/release-notes",slug:"/managed-datahub/release-notes/v_0_2_8",permalink:"/docs/managed-datahub/release-notes/v_0_2_8",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/release-notes/v_0_2_8.md",tags:[],version:"current",frontMatter:{title:"v0.2.8",slug:"/managed-datahub/release-notes/v_0_2_8",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/release-notes/v_0_2_8.md"},sidebar:"overviewSidebar",previous:{title:"v0.2.9",permalink:"/docs/managed-datahub/release-notes/v_0_2_9"},next:{title:"v0.2.7",permalink:"/docs/managed-datahub/release-notes/v_0_2_7"}},u={},d=[{value:"Release Availability Date",id:"release-availability-date",level:2},{value:"Recommended CLI",id:"recommended-cli",level:2},{value:"Release Changelog",id:"release-changelog",level:2},{value:"Some notable features&#39;s documentation in this SaaS release",id:"some-notable-featuress-documentation-in-this-saas-release",level:2}],p={toc:d},b="wrapper";function m(e){var{components:t}=e,a=l(e,["components"]);return(0,r.yg)(b,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){n(e,t,a[t])}))}return e}({},p,a),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"v028"},"v0.2.8"),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"release-availability-date"},"Release Availability Date"),(0,r.yg)("p",null,"07-June-2023"),(0,r.yg)("h2",{id:"recommended-cli"},"Recommended CLI"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"v0.10.3.1")," with release notes at ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/acryldata/datahub/releases/tag/v0.10.3.1"},"https://github.com/acryldata/datahub/releases/tag/v0.10.3.1"))),(0,r.yg)("h2",{id:"release-changelog"},"Release Changelog"),(0,r.yg)("hr",null),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Since ",(0,r.yg)("inlineCode",{parentName:"li"},"v0.2.7")," these changes from OSS DataHub ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/compare/a68833769e1fe1b27c22269971a51c63cc285c18...e7d1b900ec09cefca4e6ca979f391d3a17b473c9"},"https://github.com/datahub-project/datahub/compare/a68833769e1fe1b27c22269971a51c63cc285c18...e7d1b900ec09cefca4e6ca979f391d3a17b473c9")," have been pulled in."),(0,r.yg)("li",{parentName:"ul"},"feat(assertions): Extending Assertions READ GraphQL APIs for Observability"),(0,r.yg)("li",{parentName:"ul"},"fix(embed): styling updates for chrome extension"),(0,r.yg)("li",{parentName:"ul"},"feat: slack integrations service"),(0,r.yg)("li",{parentName:"ul"},"feat(assertions): Extending Assertions WRITE GraphQL APIs for Observability"),(0,r.yg)("li",{parentName:"ul"},"feat(contracts): Adding models for Data Contracts"),(0,r.yg)("li",{parentName:"ul"},"feat(tests): prevent reprocessing of test sourced events"),(0,r.yg)("li",{parentName:"ul"},"feat(tests): add parallelization for workloads on metadata tests"),(0,r.yg)("li",{parentName:"ul"},"feat(observability): Monitor Models for Observability"),(0,r.yg)("li",{parentName:"ul"},"fix(datahub-upgrade) fix while loop predicates for scrolling"),(0,r.yg)("li",{parentName:"ul"},"fix(usage): Add resource spec for authenticated access where possible"),(0,r.yg)("li",{parentName:"ul"},"feat(observability): Assertions-Based Anomalies Generator Hook"),(0,r.yg)("li",{parentName:"ul"},"feat(observability): Adding the GraphQL Implementation for Monitor Entity"),(0,r.yg)("li",{parentName:"ul"},"fix(restli): update base client retry logic")),(0,r.yg)("h2",{id:"some-notable-featuress-documentation-in-this-saas-release"},"Some notable features's documentation in this SaaS release"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/ownership/ownership-types"},"Custom Ownership types")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/managed-datahub/chrome-extension"},"Chrome extension")," supports Tableau"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/dataproducts"},"Data Products"))))}m.isMDXComponent=!0}}]);