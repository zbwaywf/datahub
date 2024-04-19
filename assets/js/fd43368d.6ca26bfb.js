"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[61021],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},g=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,y=u["".concat(s,".").concat(c)]||u[c]||d[c]||i;return a?n.createElement(y,o(o({ref:t},g),{},{components:a})):n.createElement(y,o({ref:t},g))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4486:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>u});a(96540);var n=a(15680);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const l={title:"Getting Started With GraphQL",slug:"/api/graphql/getting-started",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/graphql/getting-started.md"},s="Getting Started With GraphQL",p={unversionedId:"docs/api/graphql/getting-started",id:"version-0.13.1/docs/api/graphql/getting-started",title:"Getting Started With GraphQL",description:"Reading an Entity: Queries",source:"@site/versioned_docs/version-0.13.1/docs/api/graphql/getting-started.md",sourceDirName:"docs/api/graphql",slug:"/api/graphql/getting-started",permalink:"/docs/0.13.1/api/graphql/getting-started",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/graphql/getting-started.md",tags:[],version:"0.13.1",frontMatter:{title:"Getting Started With GraphQL",slug:"/api/graphql/getting-started",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/graphql/getting-started.md"},sidebar:"overviewSidebar",previous:{title:"How To Set Up GraphQL",permalink:"/docs/0.13.1/api/graphql/how-to-set-up-graphql"},next:{title:"Access Token Management",permalink:"/docs/0.13.1/api/graphql/token-management"}},g={},u=[{value:"Reading an Entity: Queries",id:"reading-an-entity-queries",level:2},{value:"Query",id:"query",level:3},{value:"Search",id:"search",level:3},{value:"Modifying an Entity: Mutations",id:"modifying-an-entity-mutations",level:2},{value:"Handling Errors",id:"handling-errors",level:2}],d={toc:u},c="wrapper";function y(e){var{components:t}=e,a=o(e,["components"]);return(0,n.yg)(c,i(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},d,a),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"getting-started-with-graphql"},"Getting Started With GraphQL"),(0,n.yg)("h2",{id:"reading-an-entity-queries"},"Reading an Entity: Queries"),(0,n.yg)("p",null,"DataHub provides the following ",(0,n.yg)("inlineCode",{parentName:"p"},"graphql")," queries for retrieving entities in your Metadata Graph."),(0,n.yg)("h3",{id:"query"},"Query"),(0,n.yg)("p",null,"The following ",(0,n.yg)("inlineCode",{parentName:"p"},"graphql")," query retrieves the ",(0,n.yg)("inlineCode",{parentName:"p"},"urn")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"name")," of the ",(0,n.yg)("inlineCode",{parentName:"p"},"properties")," of a specific dataset"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'{\n  dataset(urn: "urn:li:dataset:(urn:li:dataPlatform:kafka,SampleKafkaDataset,PROD)") {\n    urn\n    properties {\n        name\n    }\n  }\n}\n')),(0,n.yg)("p",null,'In addition to the URN and properties, you can also fetch other types of metadata for an asset, such as owners, tags, domains, and terms of an entity.\nFor more information on, please refer to the following links."'),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/0.13.1/api/tutorials/owners#read-owners"},"Querying for Owners of a Dataset")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/0.13.1/api/tutorials/tags#read-tags"},"Querying for Tags of a Dataset")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/0.13.1/api/tutorials/domains#read-domains"},"Querying for Domain of a Dataset")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/0.13.1/api/tutorials/terms#read-terms"},"Querying for Glossary Terms of a Dataset")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/0.13.1/api/tutorials/deprecation#read-deprecation"},"Querying for Deprecation of a dataset"))),(0,n.yg)("h3",{id:"search"},"Search"),(0,n.yg)("p",null,"To perform full-text search against an Entity of a particular type, use the search(input: ",(0,n.yg)("inlineCode",{parentName:"p"},"SearchInput!"),") ",(0,n.yg)("inlineCode",{parentName:"p"},"graphql")," Query.\nThe following ",(0,n.yg)("inlineCode",{parentName:"p"},"graphql")," query searches for datasets that match a specific query term."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'{\n  search(input: { type: DATASET, query: "my sql dataset", start: 0, count: 10 }) {\n    start\n    count\n    total\n    searchResults {\n      entity {\n         urn\n         type\n         ...on Dataset {\n            name\n         }\n      }\n    }\n  }\n}\n')),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"search")," field is used to indicate that we want to perform a search.\nThe ",(0,n.yg)("inlineCode",{parentName:"p"},"input")," argument specifies the search criteria, including the type of entity being searched, the search query term, the start index of the search results, and the count of results to return."),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"query")," term is used to specify the search term.\nThe search term can be a simple string, or it can be a more complex query using patterns."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"*")," : Search for all entities."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"*[string]")," : Search for all entities that contain aspects ",(0,n.yg)("strong",{parentName:"li"},"starting with")," the specified ","[","string","]","."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"[string]*")," : Search for all entities that contain aspects ",(0,n.yg)("strong",{parentName:"li"},"ending with")," the specified ","[","string","]","."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"*[string]*")," : Search for all entities that ",(0,n.yg)("strong",{parentName:"li"},"match")," aspects named ","[","string","]","."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"[string]")," : Search for all entities that ",(0,n.yg)("strong",{parentName:"li"},"contain")," the specified ","[","string","]",".")),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"Note that by default Elasticsearch only allows pagination through 10,000 entities via the search API.\nIf you need to paginate through more, you can change the default value for the ",(0,n.yg)("inlineCode",{parentName:"p"},"index.max_result_window")," setting in Elasticsearch, or using the scroll API to read from the index directly.")),(0,n.yg)("h2",{id:"modifying-an-entity-mutations"},"Modifying an Entity: Mutations"),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"Mutations which change Entity metadata are subject to ",(0,n.yg)("a",{parentName:"p",href:"/docs/0.13.1/authorization/policies"},"DataHub Access Policies"),".\nThis means that DataHub's server will check whether the requesting actor is authorized to perform the action.")),(0,n.yg)("p",null,"To update an existing Metadata Entity, simply use the ",(0,n.yg)("inlineCode",{parentName:"p"},"update<entityName>(urn: String!, input: EntityUpdateInput!)")," GraphQL Query.\nFor example, to update a Dashboard entity, you can issue the following GraphQL mutation:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'mutation updateDashboard {\n    updateDashboard(\n        urn: "urn:li:dashboard:(looker,baz)",\n        input: {\n            editableProperties: {\n                description: "My new desription"\n            }\n        }\n    ) {\n        urn\n    }\n}\n')),(0,n.yg)("p",null,"For more information, please refer to following links."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/0.13.1/api/tutorials/tags#add-tags"},"Adding Tags")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/0.13.1/api/tutorials/terms#add-terms"},"Adding Glossary Terms")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/0.13.1/api/tutorials/domains#add-domains"},"Adding Domain")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/0.13.1/api/tutorials/owners#add-owners"},"Adding Owners")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/0.13.1/api/tutorials/tags#remove-tags"},"Removing Tags")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/0.13.1/api/tutorials/terms#remove-terms"},"Removing Glossary Terms")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/0.13.1/api/tutorials/domains#remove-domains"},"Removing Domain")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/0.13.1/api/tutorials/owners#remove-owners"},"Removing Owners")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/0.13.1/api/tutorials/deprecation#update-deprecation"},"Updating Deprecation")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/0.13.1/api/tutorials/descriptions#add-description-on-dataset"},"Editing Description (i.e. Documentation) on Datasets")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/0.13.1/api/tutorials/descriptions#add-description-on-column"},"Editing Description (i.e. Documentation) on Columns")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/0.13.1/api/tutorials/datasets#delete-dataset"},"Soft Deleting"))),(0,n.yg)("p",null,"Please refer to ",(0,n.yg)("a",{parentName:"p",href:"/docs/0.13.1/api/datahub-apis#datahub-api-comparison"},"Datahub API Comparison")," to navigate to the use-case oriented guide."),(0,n.yg)("h2",{id:"handling-errors"},"Handling Errors"),(0,n.yg)("p",null,"In GraphQL, requests that have errors do not always result in a non-200 HTTP response body. Instead, errors will be\npresent in the response body inside a top-level ",(0,n.yg)("inlineCode",{parentName:"p"},"errors")," field."),(0,n.yg)("p",null,"This enables situations in which the client is able to deal gracefully will partial data returned by the application server.\nTo verify that no error has returned after making a GraphQL request, make sure you check ",(0,n.yg)("em",{parentName:"p"},"both")," the ",(0,n.yg)("inlineCode",{parentName:"p"},"data")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"errors")," fields that are returned."),(0,n.yg)("p",null,"To catch a GraphQL error, simply check the ",(0,n.yg)("inlineCode",{parentName:"p"},"errors")," field side the GraphQL response. It will contain a message, a path, and a set of extensions\nwhich contain a standard error code."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [\n    {\n      "message": "Failed to change ownership for resource urn:li:dataFlow:(airflow,dag_abc,PROD). Expected a corp user urn.",\n      "locations": [\n        {\n          "line": 1,\n          "column": 22\n        }\n      ],\n      "path": ["addOwners"],\n      "extensions": {\n        "code": 400,\n        "type": "BAD_REQUEST",\n        "classification": "DataFetchingException"\n      }\n    }\n  ]\n}\n')),(0,n.yg)("p",null,"With the following error codes officially supported:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Code"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"400"),(0,n.yg)("td",{parentName:"tr",align:null},"BAD_REQUEST"),(0,n.yg)("td",{parentName:"tr",align:null},"The query or mutation was malformed.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"403"),(0,n.yg)("td",{parentName:"tr",align:null},"UNAUTHORIZED"),(0,n.yg)("td",{parentName:"tr",align:null},"The current actor is not authorized to perform the requested action.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"404"),(0,n.yg)("td",{parentName:"tr",align:null},"NOT_FOUND"),(0,n.yg)("td",{parentName:"tr",align:null},"The resource is not found.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"500"),(0,n.yg)("td",{parentName:"tr",align:null},"SERVER_ERROR"),(0,n.yg)("td",{parentName:"tr",align:null},"An internal error has occurred. Check your server logs or contact your DataHub administrator.")))),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Visit our ",(0,n.yg)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"Slack channel")," to ask questions, tell us what we can do better, & make requests for what you'd like to see in the future. Or just\nstop by to say 'Hi'.")))}y.isMDXComponent=!0}}]);