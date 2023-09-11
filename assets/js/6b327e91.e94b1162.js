"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[900],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(a),u=r,h=p["".concat(c,".").concat(u)]||p[u]||m[u]||o;return a?n.createElement(h,i(i({ref:t},l),{},{components:a})):n.createElement(h,i({ref:t},l))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},24415:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={title:"Components",sidebar_label:"Components",slug:"/components",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/components.md"},i="DataHub Components Overview",s={unversionedId:"docs/components",id:"version-0.10.5/docs/components",title:"Components",description:"The DataHub platform consists of the components shown in the following diagram.",source:"@site/versioned_docs/version-0.10.5/docs/components.md",sourceDirName:"docs",slug:"/components",permalink:"/docs/0.10.5/components",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/components.md",tags:[],version:"0.10.5",frontMatter:{title:"Components",sidebar_label:"Components",slug:"/components",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/components.md"},sidebar:"overviewSidebar",previous:{title:"Overview",permalink:"/docs/0.10.5/architecture/architecture"},next:{title:"Ingestion Framework",permalink:"/docs/0.10.5/architecture/metadata-ingestion"}},c={},d=[{value:"Metadata Store",id:"metadata-store",level:2},{value:"Metadata Models",id:"metadata-models",level:2},{value:"Ingestion Framework",id:"ingestion-framework",level:2},{value:"GraphQL API",id:"graphql-api",level:2},{value:"User Interface",id:"user-interface",level:2},{value:"Learn More",id:"learn-more",level:2},{value:"Feedback / Questions / Concerns",id:"feedback--questions--concerns",level:2}],l={toc:d},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"datahub-components-overview"},"DataHub Components Overview"),(0,r.kt)("p",null,"The DataHub platform consists of the components shown in the following diagram. "),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/datahub-components.png"})),(0,r.kt)("h2",{id:"metadata-store"},"Metadata Store"),(0,r.kt)("p",null,"The Metadata Store is responsible for storing the ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-modeling/metadata-model/"},"Entities & Aspects")," comprising the Metadata Graph. This includes\nexposing an API for ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-service#ingesting-entities"},"ingesting metadata"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-service#retrieving-entities"},"fetching Metadata by primary key"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-service#search-an-entity"},"searching entities"),", and ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-service#get-relationships-edges"},"fetching Relationships")," between\nentities. It consists of a Spring Java Service hosting a set of ",(0,r.kt)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/"},"Rest.li")," API endpoints, along with\nMySQL, Elasticsearch, & Kafka for primary storage & indexing. "),(0,r.kt)("p",null,"Get started with the Metadata Store by following the ",(0,r.kt)("a",{parentName:"p",href:"/docs/quickstart/"},"Quickstart Guide"),". "),(0,r.kt)("h2",{id:"metadata-models"},"Metadata Models"),(0,r.kt)("p",null,"Metadata Models are schemas defining the shape of the Entities & Aspects comprising the Metadata Graph, along with the relationships between them. They are defined\nusing ",(0,r.kt)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/pdl_schema"},"PDL"),", a modeling language quite similar in form to Protobuf while serializes to JSON. Entities represent a specific class of Metadata\nAsset such as a Dataset, a Dashboard, a Data Pipeline, and beyond. Each ",(0,r.kt)("em",{parentName:"p"},"instance")," of an Entity is identified by a unique identifier called an ",(0,r.kt)("inlineCode",{parentName:"p"},"urn"),". Aspects represent related bundles of data attached\nto an instance of an Entity such as its descriptions, tags, and more. View the current set of Entities supported ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-modeling/metadata-model#exploring-datahubs-metadata-model"},"here"),". "),(0,r.kt)("p",null,"Learn more about DataHub models Metadata ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-modeling/metadata-model/"},"here"),". "),(0,r.kt)("h2",{id:"ingestion-framework"},"Ingestion Framework"),(0,r.kt)("p",null,"The Ingestion Framework is a modular, extensible Python library for extracting Metadata from external source systems (e.g.\nSnowflake, Looker, MySQL, Kafka), transforming it into DataHub's ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-modeling/metadata-model/"},"Metadata Model"),", and writing it into DataHub via\neither Kafka or using the Metadata Store Rest APIs directly. DataHub supports an ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/#installing-plugins"},"extensive list of Source connectors")," to choose from, along with\na host of capabilities including schema extraction, table & column profiling, usage information extraction, and more.  "),(0,r.kt)("p",null,"Getting started with the Ingestion Framework is as simple: just define a YAML file and execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub ingest")," command.",(0,r.kt)("br",{parentName:"p"}),"\n","Learn more by heading over the the ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/"},"Metadata Ingestion")," guide. "),(0,r.kt)("h2",{id:"graphql-api"},"GraphQL API"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://graphql.org/"},"GraphQL")," API provides a strongly-typed, entity-oriented API that makes interacting with the Entities comprising the Metadata\nGraph simple, including APIs for adding and removing tags, owners, links & more to Metadata Entities! Most notably, this API is consumed by the User Interface (discussed below) for enabling Search & Discovery, Governance, Observability\nand more. "),(0,r.kt)("p",null,"To get started using the GraphQL API, check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/graphql/getting-started"},"Getting Started with GraphQL")," guide. "),(0,r.kt)("h2",{id:"user-interface"},"User Interface"),(0,r.kt)("p",null,"DataHub comes with a React UI including an ever-evolving set of features to make Discovering, Governing, & Debugging your Data Assets easy & delightful.\nFor a full overview of the capabilities currently supported, take a look at the ",(0,r.kt)("a",{parentName:"p",href:"/docs/features/"},"Features")," overview. For a look at what's coming next,\nhead over to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/roadmap/"},"Roadmap"),". "),(0,r.kt)("h2",{id:"learn-more"},"Learn More"),(0,r.kt)("p",null,"Learn more about the specifics of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.10.5/architecture/architecture"},"DataHub Architecture")," in the Architecture Overview. Learn about using & developing the components\nof the Platform by visiting the Module READMEs. "),(0,r.kt)("h2",{id:"feedback--questions--concerns"},"Feedback / Questions / Concerns"),(0,r.kt)("p",null,"We want to hear from you! For any inquiries, including Feedback, Questions, or Concerns, reach out on ",(0,r.kt)("a",{parentName:"p",href:"https://datahubspace.slack.com/join/shared_invite/zt-nx7i0dj7-I3IJYC551vpnvvjIaNRRGw#/shared-invite/email"},"Slack"),"!"))}m.isMDXComponent=!0}}]);