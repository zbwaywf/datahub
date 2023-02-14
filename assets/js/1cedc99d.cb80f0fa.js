"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6474],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),m=l,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return a?n.createElement(g,r(r({ref:t},p),{},{components:a})):n.createElement(g,r({ref:t},p))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var u=2;u<i;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),l=a(86010);const i="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(i,r),hidden:a},t)}},34259:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),l=a(67294),i=a(86010),r=a(51048),o=a(33609),s=a(1943),u=a(72957);const p="tabList__CuJ",d="tabItem_LNqP";function c(e){const{lazy:t,block:a,defaultValue:r,values:c,groupId:m,className:g}=e,f=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=c??f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,o.l)(h,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===r?r:r??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:v}=(0,s.U)(),[N,w]=(0,l.useState)(k),C=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=m){const e=y[m];null!=e&&e!==N&&h.some((t=>t.value===e))&&w(e)}const E=e=>{const t=e.currentTarget,a=C.indexOf(t),n=h[a].value;n!==N&&(T(t),w(n),null!=m&&v(m,String(n)))},O=e=>{let t=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const a=C.indexOf(e.currentTarget)+1;t=C[a]??C[0];break}case"ArrowLeft":{const a=C.indexOf(e.currentTarget)-1;t=C[a]??C[C.length-1];break}}t?.focus()};return l.createElement("div",{className:(0,i.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},g)},h.map((e=>{let{value:t,label:a,attributes:r}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>C.push(e),onKeyDown:O,onClick:E},r,{className:(0,i.Z)("tabs__item",d,r?.className,{"tabs__item--active":N===t})}),a??t)}))),t?(0,l.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,r.Z)();return l.createElement(c,(0,n.Z)({key:String(t)},e))}},39088:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var n=a(87462),l=(a(67294),a(3905)),i=a(34259),r=a(18679);const o={sidebar_position:15,title:"File Based Lineage",slug:"/generated/ingestion/sources/file-based-lineage",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/file-based-lineage.md"},s="File Based Lineage",u={unversionedId:"docs/generated/ingestion/sources/file-based-lineage",id:"docs/generated/ingestion/sources/file-based-lineage",title:"File Based Lineage",description:"Module datahub-lineage-file",source:"@site/genDocs/docs/generated/ingestion/sources/file-based-lineage.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/file-based-lineage",permalink:"/docs/generated/ingestion/sources/file-based-lineage",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/file-based-lineage.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15,title:"File Based Lineage",slug:"/generated/ingestion/sources/file-based-lineage",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/file-based-lineage.md"},sidebar:"overviewSidebar",previous:{title:"File",permalink:"/docs/generated/ingestion/sources/file"},next:{title:"Glue",permalink:"/docs/generated/ingestion/sources/glue"}},p={},d=[{value:"Module <code>datahub-lineage-file</code>",id:"module-datahub-lineage-file",level:2},{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Starter Recipe",id:"starter-recipe",level:3},{value:"Config Details",id:"config-details",level:3},{value:"Lineage File Format",id:"lineage-file-format",level:3},{value:"Code Coordinates",id:"code-coordinates",level:3},{value:"Questions",id:"questions",level:2}],c={toc:d};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"file-based-lineage"},"File Based Lineage"),(0,l.kt)("h2",{id:"module-datahub-lineage-file"},"Module ",(0,l.kt)("inlineCode",{parentName:"h2"},"datahub-lineage-file")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"})),(0,l.kt)("p",null,"This plugin pulls lineage metadata from a yaml-formatted file. An example of one such file is located in the examples directory ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/examples/bootstrap_data/file_lineage.yml"},"here"),"."),(0,l.kt)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,l.kt)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[datahub-lineage-file]'\n")),(0,l.kt)("h3",{id:"starter-recipe"},"Starter Recipe"),(0,l.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,l.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,l.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,l.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"source:\n  type: datahub-lineage-file\n  config:\n    # Coordinates\n    file: /path/to/file_lineage.yml\n    # Whether we want to query datahub-gms for upstream data\n    preserve_upstream: False\n\nsink:\n# sink configs\n")),(0,l.kt)("h3",{id:"config-details"},"Config Details"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Note that a ",(0,l.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,l.kt)("details",{open:!0},(0,l.kt)("summary",null,"View All Configuration Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"file"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Path to lineage file to ingest."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"preserve_upstream"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether we want to query datahub-gms for upstream data. False means it will hard replace upstream data for a given entity. True means it will query the backend for existing upstreams and include it in the ingestion run"),(0,l.kt)("td",{parentName:"tr",align:null},"True")))))),(0,l.kt)(r.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "LineageFileSourceConfig",\n  "type": "object",\n  "properties": {\n    "file": {\n      "title": "File",\n      "description": "Path to lineage file to ingest.",\n      "type": "string"\n    },\n    "preserve_upstream": {\n      "title": "Preserve Upstream",\n      "description": "Whether we want to query datahub-gms for upstream data. False means it will hard replace upstream data for a given entity. True means it will query the backend for existing upstreams and include it in the ingestion run",\n      "default": true,\n      "type": "boolean"\n    }\n  },\n  "required": [\n    "file"\n  ],\n  "additionalProperties": false\n}\n')))),(0,l.kt)("h3",{id:"lineage-file-format"},"Lineage File Format"),(0,l.kt)("p",null,"The lineage source file should be a ",(0,l.kt)("inlineCode",{parentName:"p"},".yml")," file with the following top-level keys:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"version"),": the version of lineage file config the config conforms to. Currently, the only version released\nis ",(0,l.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"lineage"),": the top level key of the lineage file containing a list of ",(0,l.kt)("strong",{parentName:"p"},"EntityNodeConfig")," objects"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"EntityNodeConfig"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"entity"),": ",(0,l.kt)("strong",{parentName:"li"},"EntityConfig")," object"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"upstream"),": (optional) list of child ",(0,l.kt)("strong",{parentName:"li"},"EntityNodeConfig")," objects")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"EntityConfig"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"name")," : identifier of the entity. Typically name or guid, as used in constructing entity urn."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"type"),": type of the entity (only ",(0,l.kt)("inlineCode",{parentName:"li"},"dataset")," is supported as of now)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"env"),": the environment of this entity. Should match the values in the\ntable ",(0,l.kt)("a",{parentName:"li",href:"/docs/graphql/enums/#fabrictype"},"here")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"platform"),": a valid platform like kafka, snowflake, etc.."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"platform_instance"),": optional string specifying the platform instance of this entity")),(0,l.kt)("p",null,"For example if dataset URN is ",(0,l.kt)("inlineCode",{parentName:"p"},"urn:li:dataset:(urn:li:dataPlatform:redshift,userdb.public.customer_table,DEV)")," then ",(0,l.kt)("strong",{parentName:"p"},"EntityConfig")," will look like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"name : userdb.public.customer_table\ntype: dataset\nenv: DEV\nplatform: redshift\n")),(0,l.kt)("p",null,"You can also view an example lineage file checked in ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/examples/bootstrap_data/file_lineage.yml"},"here")),(0,l.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Class Name: ",(0,l.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.metadata.lineage.LineageFileSource")),(0,l.kt)("li",{parentName:"ul"},"Browse on ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/metadata/lineage.py"},"GitHub"))),(0,l.kt)("h2",{id:"questions"},"Questions"),(0,l.kt)("p",null,"If you've got any questions on configuring ingestion for File Based Lineage, feel free to ping us on ",(0,l.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack")))}m.isMDXComponent=!0}}]);