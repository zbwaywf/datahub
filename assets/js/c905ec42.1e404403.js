"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[93394],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(a),m=r,h=l["".concat(c,".").concat(m)]||l[m]||d[m]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},12723:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"Ingestion Framework",sidebar_label:"Ingestion Framework",slug:"/architecture/metadata-ingestion",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/architecture/metadata-ingestion.md"},i="Metadata Ingestion Architecture",s={unversionedId:"docs/architecture/metadata-ingestion",id:"version-0.10.5/docs/architecture/metadata-ingestion",title:"Ingestion Framework",description:"DataHub supports an extremely flexible ingestion architecture that can support push, pull, asynchronous and synchronous models.",source:"@site/versioned_docs/version-0.10.5/docs/architecture/metadata-ingestion.md",sourceDirName:"docs/architecture",slug:"/architecture/metadata-ingestion",permalink:"/docs/0.10.5/architecture/metadata-ingestion",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/architecture/metadata-ingestion.md",tags:[],version:"0.10.5",frontMatter:{title:"Ingestion Framework",sidebar_label:"Ingestion Framework",slug:"/architecture/metadata-ingestion",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/architecture/metadata-ingestion.md"},sidebar:"overviewSidebar",previous:{title:"Components",permalink:"/docs/0.10.5/components"},next:{title:"Serving Tier",permalink:"/docs/0.10.5/architecture/metadata-serving"}},c={},p=[{value:"Metadata Change Proposal: The Center Piece",id:"metadata-change-proposal-the-center-piece",level:2},{value:"Pull-based Integration",id:"pull-based-integration",level:2},{value:"Push-based Integration",id:"push-based-integration",level:2},{value:"Internal Components",id:"internal-components",level:2},{value:"Applying Metadata Change Proposals to DataHub Metadata Service (mce-consumer-job)",id:"applying-metadata-change-proposals-to-datahub-metadata-service-mce-consumer-job",level:3}],u={toc:p},l="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(l,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"metadata-ingestion-architecture"},"Metadata Ingestion Architecture"),(0,r.kt)("p",null,"DataHub supports an extremely flexible ingestion architecture that can support push, pull, asynchronous and synchronous models.\nThe figure below describes all the options possible for connecting your favorite system to DataHub. "),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/ingestion-architecture.png"})),(0,r.kt)("h2",{id:"metadata-change-proposal-the-center-piece"},"Metadata Change Proposal: The Center Piece"),(0,r.kt)("p",null,"The center piece for ingestion are ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.10.5/what/mxe#metadata-change-proposal-mcp"},"Metadata Change Proposal"),"s which represent requests to make a metadata change to an organization's Metadata Graph.\nMetadata Change Proposals can be sent over Kafka, for highly scalable async publishing from source systems. They can also be sent directly to the HTTP endpoint exposed by the DataHub service tier to get synchronous success / failure responses. "),(0,r.kt)("h2",{id:"pull-based-integration"},"Pull-based Integration"),(0,r.kt)("p",null,"DataHub ships with a Python based ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.10.5/metadata-ingestion"},"metadata-ingestion system")," that can connect to different sources to pull metadata from them. This metadata is then pushed via Kafka or HTTP to the DataHub storage tier. Metadata ingestion pipelines can be ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.10.5/metadata-ingestion#lineage-with-airflow"},"integrated with Airflow")," to set up scheduled ingestion or capture lineage. If you don't find a source already supported, it is very easy to ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.10.5/metadata-ingestion#contributing"},"write your own"),"."),(0,r.kt)("h2",{id:"push-based-integration"},"Push-based Integration"),(0,r.kt)("p",null,"As long as you can emit a ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.10.5/what/mxe#metadata-change-proposal-mcp"},"Metadata Change Proposal (MCP)")," event to Kafka or make a REST call over HTTP, you can integrate any system with DataHub. For convenience, DataHub also provides simple ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.10.5/metadata-ingestion#using-as-a-library"},"Python emitters")," for you to integrate into your systems to emit metadata changes (MCP-s) at the point of origin."),(0,r.kt)("h2",{id:"internal-components"},"Internal Components"),(0,r.kt)("h3",{id:"applying-metadata-change-proposals-to-datahub-metadata-service-mce-consumer-job"},"Applying Metadata Change Proposals to DataHub Metadata Service (mce-consumer-job)"),(0,r.kt)("p",null,"DataHub comes with a Spring job, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-jobs/mce-consumer-job"},"mce-consumer-job"),", which consumes the Metadata Change Proposals and writes them into the DataHub Metadata Service (datahub-gms) using the ",(0,r.kt)("inlineCode",{parentName:"p"},"/ingest")," endpoint. "))}d.isMDXComponent=!0}}]);