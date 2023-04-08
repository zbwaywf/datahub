"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4305],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(a),g=r,m=c["".concat(d,".").concat(g)]||c[g]||p[g]||i;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},80551:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(83117),r=(a(67294),a(3905));const i={title:"Adding Lineage",slug:"/api/tutorials/adding-lineage",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/adding-lineage.md"},o="Adding Lineage",l={unversionedId:"docs/api/tutorials/adding-lineage",id:"docs/api/tutorials/adding-lineage",title:"Adding Lineage",description:"Why Would You Add Lineage?",source:"@site/genDocs/docs/api/tutorials/adding-lineage.md",sourceDirName:"docs/api/tutorials",slug:"/api/tutorials/adding-lineage",permalink:"/docs/api/tutorials/adding-lineage",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/adding-lineage.md",tags:[],version:"current",frontMatter:{title:"Adding Lineage",slug:"/api/tutorials/adding-lineage",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/adding-lineage.md"},sidebar:"overviewSidebar",previous:{title:"Adding Description on Columns",permalink:"/docs/api/tutorials/adding-column-description"},next:{title:"Update Deprecation",permalink:"/docs/api/tutorials/update-deprecation"}},d={},s=[{value:"Why Would You Add Lineage?",id:"why-would-you-add-lineage",level:2},{value:"Goal Of This Guide",id:"goal-of-this-guide",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Add Lineage With GraphQL",id:"add-lineage-with-graphql",level:2},{value:"GraphQL Explorer",id:"graphql-explorer",level:3},{value:"CURL",id:"curl",level:3},{value:"Add Lineage With Python SDK",id:"add-lineage-with-python-sdk",level:2},{value:"Expected Outcomes",id:"expected-outcomes",level:2}],u={toc:s};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"adding-lineage"},"Adding Lineage"),(0,r.kt)("h2",{id:"why-would-you-add-lineage"},"Why Would You Add Lineage?"),(0,r.kt)("p",null,"Lineage is used to capture data dependencies within an organization. It allows you to track the inputs from which a data asset is derived, along with the data assets that depend on it downstream.\nFor more information about lineage, refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/lineage/lineage-feature-guide"},"About DataHub Lineage"),"."),(0,r.kt)("h3",{id:"goal-of-this-guide"},"Goal Of This Guide"),(0,r.kt)("p",null,"This guide will show you how to add lineage between two hive datasets named ",(0,r.kt)("inlineCode",{parentName:"p"},"fct_users_deleted")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"logging_events"),"."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"For this tutorial, you need to deploy DataHub Quickstart and ingest sample data.\nFor detailed steps, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/quickstart"},"Datahub Quickstart Guide"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Before adding lineage, you need to ensure the targeted dataset is already present in your datahub.\nIf you attempt to manipulate entities that do not exist, your operation will fail.\nIn this guide, we will be using data from sample ingestion.")),(0,r.kt)("h2",{id:"add-lineage-with-graphql"},"Add Lineage With GraphQL"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Please note that there are two available endpoints (",(0,r.kt)("inlineCode",{parentName:"p"},":8000"),", ",(0,r.kt)("inlineCode",{parentName:"p"},":9002"),") to access ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql"),".\nFor more information about the differences between these endpoints, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-service#graphql-api"},"DataHub Metadata Service"))),(0,r.kt)("h3",{id:"graphql-explorer"},"GraphQL Explorer"),(0,r.kt)("p",null,"GraphQL Explorer is the fastest way to experiment with ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql")," without any dependencies.\nNavigate to GraphQL Explorer (",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:9002/api/graphiql"),") and run the following query."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'mutation updateLineage {\n  updateLineage(\n    input: {\n      edgesToAdd: [\n        {\n          downstreamUrn: "urn:li:dataset:(urn:li:dataPlatform:hive,logging_events,PROD)"\n          upstreamUrn: "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_deleted,PROD)"\n        }\n      ]\n      edgesToRemove: []\n    }\n  )\n}\n')),(0,r.kt)("p",null,"Note that you can create a list of edges. For example, if you want to assign multiple upstream entities to a downstream entity, you can do the following."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'mutation updateLineage {\n  updateLineage(\n    input: {\n      edgesToAdd: [\n        {\n          downstreamUrn: "urn:li:dataset:(urn:li:dataPlatform:hive,logging_events,PROD)"\n          upstreamUrn: "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_deleted,PROD)"\n        }\n        {\n          downstreamUrn: "urn:li:dataset:(urn:li:dataPlatform:hive,logging_events,PROD)"\n          upstreamUrn: "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)"\n        }\n      ]\n      edgesToRemove: []\n    }\n  )\n}\n\n')),(0,r.kt)("p",null,"For more information about the ",(0,r.kt)("inlineCode",{parentName:"p"},"updateLineage")," mutation, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/graphql/mutations/#updatelineage"},"updateLineage"),"."),(0,r.kt)("p",null,"If you see the following response, the operation was successful:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'{\n  "data": {\n    "updateLineage": true\n  },\n  "extensions": {}\n}\n')),(0,r.kt)("h3",{id:"curl"},"CURL"),(0,r.kt)("p",null,"With CURL, you need to provide tokens. To generate a token, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/graphql/token-management"},"Access Token Management"),".\nWith ",(0,r.kt)("inlineCode",{parentName:"p"},"accessToken"),", you can run the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://localhost:8080/api/graphql\' \\\n--header \'Authorization: Bearer <my-access-token>\' \\\n--header \'Content-Type: application/json\'  --data-raw \'{ "query": "mutation updateLineage { updateLineage( input:{ edgesToAdd : { downstreamUrn: \\"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_deleted,PROD)\\", upstreamUrn : \\"urn:li:dataset:(urn:li:dataPlatform:hive,logging_events,PROD)\\"}, edgesToRemove :{downstreamUrn: \\"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_deleted,PROD)\\",upstreamUrn : \\"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_deleted,PROD)\\" } })}", "variables":{}}\'\n')),(0,r.kt)("p",null,"Expected Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "data": { "updateLineage": true }, "extensions": {} }\n')),(0,r.kt)("h2",{id:"add-lineage-with-python-sdk"},"Add Lineage With Python SDK"),(0,r.kt)("p",null,"You can refer to the related code in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/examples/library/lineage_emitter_rest.py"},"lineage_emitter_rest.py"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import datahub.emitter.mce_builder as builder\nfrom datahub.emitter.rest_emitter import DatahubRestEmitter\n\n# Construct a lineage object.\nlineage_mce = builder.make_lineage_mce(\n    [\n        builder.make_dataset_urn("hive", "fct_users_deleted"), # Upstream\n    ],\n    builder.make_dataset_urn("hive", "logging_events"), # Downstream\n)\n\n# Create an emitter to the GMS REST API.\nemitter = DatahubRestEmitter("http://localhost:8080")\n\n# Emit metadata!\nemitter.emit_mce(lineage_mce)\n')),(0,r.kt)("p",null,"We're using the ",(0,r.kt)("inlineCode",{parentName:"p"},"MetdataChangeEvent")," emitter to change entities in this example.\nFor more information about the ",(0,r.kt)("inlineCode",{parentName:"p"},"MetadataChangeEvent"),", please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/what/mxe#metadata-change-event-mce"},"Metadata Change Event (MCE)")),(0,r.kt)("h2",{id:"expected-outcomes"},"Expected Outcomes"),(0,r.kt)("p",null,"You can now see the lineage between ",(0,r.kt)("inlineCode",{parentName:"p"},"fct_users_deleted")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"logging_events"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"lineage-added",src:a(87216).Z,width:"2758",height:"1048"})))}p.isMDXComponent=!0},87216:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lineage-added-1d4abfa595394cec95debfa5c0d9ffe7.png"}}]);