"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[20259],{15680:(e,t,a)=>{a.d(t,{xA:()=>l,yg:()=>g});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(a),h=n,g=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return a?r.createElement(g,i(i({ref:t},l),{},{components:a})):r.createElement(g,i({ref:t},l))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:n,i[1]=c;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},38359:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>u});a(96540);var r=a(15680);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const c={title:"Serving Tier",sidebar_label:"Serving Tier",slug:"/architecture/metadata-serving",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/architecture/metadata-serving.md"},s="DataHub Serving Architecture",d={unversionedId:"docs/architecture/metadata-serving",id:"version-0.13.1/docs/architecture/metadata-serving",title:"Serving Tier",description:"The figure below shows the high-level system diagram for DataHub's Serving Tier.",source:"@site/versioned_docs/version-0.13.1/docs/architecture/metadata-serving.md",sourceDirName:"docs/architecture",slug:"/architecture/metadata-serving",permalink:"/docs/0.13.1/architecture/metadata-serving",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/architecture/metadata-serving.md",tags:[],version:"0.13.1",frontMatter:{title:"Serving Tier",sidebar_label:"Serving Tier",slug:"/architecture/metadata-serving",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/architecture/metadata-serving.md"},sidebar:"overviewSidebar",previous:{title:"Ingestion Framework",permalink:"/docs/0.13.1/architecture/metadata-ingestion"},next:{title:"Docker Container Architecture",permalink:"/docs/0.13.1/architecture/docker-containers"}},l={},u=[{value:"DataHub Serving Tier Components",id:"datahub-serving-tier-components",level:2},{value:"Metadata Storage",id:"metadata-storage",level:3},{value:"Metadata Change Log Stream (MCL)",id:"metadata-change-log-stream-mcl",level:3},{value:"Metadata Index Applier (mae-consumer-job)",id:"metadata-index-applier-mae-consumer-job",level:3},{value:"Metadata Query Serving",id:"metadata-query-serving",level:3}],p={toc:u},h="wrapper";function g(e){var{components:t}=e,a=i(e,["components"]);return(0,r.yg)(h,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){n(e,t,a[t])}))}return e}({},p,a),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"datahub-serving-architecture"},"DataHub Serving Architecture"),(0,r.yg)("p",null,"The figure below shows the high-level system diagram for DataHub's Serving Tier. "),(0,r.yg)("p",{align:"center"},(0,r.yg)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/datahub-serving.png"})),(0,r.yg)("p",null,"The primary component is called ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-service"},"the Metadata Service")," and exposes a REST API and a GraphQL API for performing CRUD operations on metadata. The service also exposes search and graph query API-s to support secondary-index style queries, full-text search queries as well as relationship queries like lineage. In addition, the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/datahub-frontend"},"datahub-frontend")," service expose a GraphQL API on top of the metadata graph. "),(0,r.yg)("h2",{id:"datahub-serving-tier-components"},"DataHub Serving Tier Components"),(0,r.yg)("h3",{id:"metadata-storage"},"Metadata Storage"),(0,r.yg)("p",null,"The DataHub Metadata Service persists metadata in a document store (an RDBMS like MySQL, Postgres, or Cassandra, etc.). "),(0,r.yg)("h3",{id:"metadata-change-log-stream-mcl"},"Metadata Change Log Stream (MCL)"),(0,r.yg)("p",null,"The DataHub Service Tier also emits a commit event ",(0,r.yg)("a",{parentName:"p",href:"/docs/0.13.1/what/mxe#metadata-change-log-mcl"},"Metadata Change Log")," when a metadata change has been successfully committed to persistent storage. This event is sent over Kafka. "),(0,r.yg)("p",null,"The MCL stream is a public API and can be subscribed to by external systems (for example, the Actions Framework) providing an extremely powerful way to react in real-time to changes happening in metadata. For example, you could build an access control enforcer that reacts to change in metadata (e.g. a previously world-readable dataset now has a pii field) to immediately lock down the dataset in question.\nNote that not all MCP-s will result in an MCL, because the DataHub serving tier will ignore any duplicate changes to metadata."),(0,r.yg)("h3",{id:"metadata-index-applier-mae-consumer-job"},"Metadata Index Applier (mae-consumer-job)"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs/0.13.1/what/mxe#metadata-change-log-mcl"},"Metadata Change Log"),"s are consumed by another Spring job, ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-jobs/mae-consumer-job"},"mae-consumer-job"),", which applies the changes to the ",(0,r.yg)("a",{parentName:"p",href:"/docs/0.13.1/what/graph"},"graph")," and ",(0,r.yg)("a",{parentName:"p",href:"/docs/0.13.1/what/search-index"},"search index")," accordingly.\nThe job is entity-agnostic and will execute corresponding graph & search index builders, which will be invoked by the job when a specific metadata aspect is changed.\nThe builder should instruct the job how to update the graph and search index based on the metadata change."),(0,r.yg)("p",null,"To ensure that metadata changes are processed in the correct chronological order, MCLs are keyed by the entity ",(0,r.yg)("a",{parentName:"p",href:"/docs/0.13.1/what/urn"},"URN")," \u2014 meaning all MAEs for a particular entity will be processed sequentially by a single thread."),(0,r.yg)("h3",{id:"metadata-query-serving"},"Metadata Query Serving"),(0,r.yg)("p",null,"Primary-key based reads (e.g. getting schema metadata for a dataset based on the ",(0,r.yg)("inlineCode",{parentName:"p"},"dataset-urn"),") on metadata are routed to the document store. Secondary index based reads on metadata are routed to the search index (or alternately can use the strongly consistent secondary index support described ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/docs/architecture/"},"here"),"). Full-text and advanced search queries are routed to the search index. Complex graph queries such as lineage are routed to the graph index."))}g.isMDXComponent=!0}}]);