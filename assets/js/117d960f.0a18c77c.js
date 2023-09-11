"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[75076],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,s=e.originalType,o=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),p=c(a),u=l,f=p["".concat(o,".").concat(u)]||p[u]||d[u]||s;return a?n.createElement(f,i(i({ref:t},m),{},{components:a})):n.createElement(f,i({ref:t},m))}));function f(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=a.length,i=new Array(s);i[0]=u;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r[p]="string"==typeof e?e:l,i[1]=r;for(var c=2;c<s;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),l=a(86010);const s={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(s.tabItem,i),hidden:a},t)}},73992:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(87462),l=a(67294),s=a(86010),i=a(72957),r=a(16550),o=a(75238),c=a(33609),m=a(92560);function p(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function d(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function u(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,r.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(s),(0,l.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=d(e),[i,r]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[o,c]=f({queryString:a,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,m.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),h=(()=>{const e=o??p;return u({value:e,tabValues:s})?e:null})();(0,l.useLayoutEffect)((()=>{h&&r(h)}),[h]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);r(e),c(e),g(e)}),[c,g,s]),tabValues:s}}var h=a(51048);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:r,selectValue:o,tabValues:c}=e;const m=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=m.indexOf(t),n=c[a].value;n!==r&&(p(t),o(n))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=m.indexOf(e.currentTarget)+1;t=m[a]??m[0];break}case"ArrowLeft":{const a=m.indexOf(e.currentTarget)-1;t=m[a]??m[m.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:e=>m.push(e),onKeyDown:u,onClick:d},i,{className:(0,s.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":r===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return l.createElement("div",{className:(0,s.Z)("tabs-container",k.tabList)},l.createElement(b,(0,n.Z)({},e,t)),l.createElement(N,(0,n.Z)({},e,t)))}function v(e){const t=(0,h.Z)();return l.createElement(y,(0,n.Z)({key:String(t)},e))}},80910:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>f,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var n=a(87462),l=(a(67294),a(3905)),s=a(73992),i=a(18679);const r={sidebar_position:30,title:"MongoDB",slug:"/generated/ingestion/sources/mongodb",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/mongodb.md"},o="MongoDB",c={unversionedId:"docs/generated/ingestion/sources/mongodb",id:"version-0.10.5/docs/generated/ingestion/sources/mongodb",title:"MongoDB",description:"Certified",source:"@site/versioned_docs/version-0.10.5/docs/generated/ingestion/sources/mongodb.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/mongodb",permalink:"/docs/0.10.5/generated/ingestion/sources/mongodb",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/mongodb.md",tags:[],version:"0.10.5",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"MongoDB",slug:"/generated/ingestion/sources/mongodb",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/mongodb.md"},sidebar:"overviewSidebar",previous:{title:"Mode",permalink:"/docs/0.10.5/generated/ingestion/sources/mode"},next:{title:"MySQL",permalink:"/docs/0.10.5/generated/ingestion/sources/mysql"}},m={},p=[{value:"Important Capabilities",id:"important-capabilities",level:3},{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Starter Recipe",id:"starter-recipe",level:3},{value:"Config Details",id:"config-details",level:3},{value:"Code Coordinates",id:"code-coordinates",level:3}],d={toc:p},u="wrapper";function f(e){let{components:t,...a}=e;return(0,l.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"mongodb"},"MongoDB"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"})),(0,l.kt)("h3",{id:"important-capabilities"},"Important Capabilities"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Capability"),(0,l.kt)("th",{parentName:"tr",align:null},"Status"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Schema Metadata"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"Enabled by default")))),(0,l.kt)("p",null,"This plugin extracts the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Databases and associated metadata"),(0,l.kt)("li",{parentName:"ul"},"Collections in each database and schemas for each collection (via schema inference)")),(0,l.kt)("p",null,"By default, schema inference samples 1,000 documents from each collection. Setting ",(0,l.kt)("inlineCode",{parentName:"p"},"schemaSamplingSize: null")," will scan the entire collection.\nMoreover, setting ",(0,l.kt)("inlineCode",{parentName:"p"},"useRandomSampling: False")," will sample the first documents found without random selection, which may be faster for large collections."),(0,l.kt)("p",null,"Note that ",(0,l.kt)("inlineCode",{parentName:"p"},"schemaSamplingSize")," has no effect if ",(0,l.kt)("inlineCode",{parentName:"p"},"enableSchemaInference: False")," is set."),(0,l.kt)("p",null,"Really large schemas will be further truncated to a maximum of 300 schema fields. This is configurable using the ",(0,l.kt)("inlineCode",{parentName:"p"},"maxSchemaSize")," parameter."),(0,l.kt)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,l.kt)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[mongodb]'\n")),(0,l.kt)("h3",{id:"starter-recipe"},"Starter Recipe"),(0,l.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,l.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,l.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,l.kt)("a",{parentName:"p",href:"/docs/0.10.5/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'source:\n  type: "mongodb"\n  config:\n    # Coordinates\n    connect_uri: "mongodb://localhost"\n\n    # Credentials\n    username: admin\n    password: password\n    authMechanism: "DEFAULT"\n\n    # Options\n    enableSchemaInference: True\n    useRandomSampling: True\n    maxSchemaSize: 300\n\nsink:\n  # sink configs\n')),(0,l.kt)("h3",{id:"config-details"},"Config Details"),(0,l.kt)(s.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Note that a ",(0,l.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,l.kt)("div",{className:"config-table"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-main"},"authMechanism"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"string"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"MongoDB authentication mechanism.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-main"},"connect_uri"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"string"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"MongoDB connection URI. ",(0,l.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,l.kt)("span",{className:"default-value"},"mongodb://localhost")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-main"},"enableSchemaInference"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"boolean"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Whether to infer schemas.  ",(0,l.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,l.kt)("span",{className:"default-value"},"True")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-main"},"maxDocumentSize"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"integer"))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"default-line "},"Default: ",(0,l.kt)("span",{className:"default-value"},"16793600")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-main"},"maxSchemaSize"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"integer"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Maximum number of fields to include in the schema. ",(0,l.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,l.kt)("span",{className:"default-value"},"300")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-main"},"options"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"object"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Additional options to pass to ",(0,l.kt)("inlineCode",{parentName:"td"},"pymongo.MongoClient()"),". ",(0,l.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,l.kt)("span",{className:"default-value"},"{","}")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-main"},"password"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"string"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"MongoDB password.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-main"},"schemaSamplingSize"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"integer"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Number of documents to use when inferring schema size. If set to ",(0,l.kt)("inlineCode",{parentName:"td"},"0"),", all documents will be scanned. ",(0,l.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,l.kt)("span",{className:"default-value"},"1000")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-main"},"useRandomSampling"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"boolean"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"If documents for schema inference should be randomly selected. If ",(0,l.kt)("inlineCode",{parentName:"td"},"False"),", documents will be selected from start. ",(0,l.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,l.kt)("span",{className:"default-value"},"True")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-main"},"username"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"string"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"MongoDB username.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-main"},"env"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"string"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"The environment that all assets produced by this connector belong to ",(0,l.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,l.kt)("span",{className:"default-value"},"PROD")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-main"},"collection_pattern"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"AllowDenyPattern"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"regex patterns for collections to filter in ingestion. ",(0,l.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,l.kt)("span",{className:"default-value"},"{","'","allow","'",": ","[","'",".","*","'","]",", ","'","deny","'",": ","[","]",", ","'","ignoreCase","'",": True","}")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-prefix"},"collection_pattern."),(0,l.kt)("span",{className:"path-main"},"allow"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"array(string)"))),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-prefix"},"collection_pattern."),(0,l.kt)("span",{className:"path-main"},"deny"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"array(string)"))),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-prefix"},"collection_pattern."),(0,l.kt)("span",{className:"path-main"},"ignoreCase"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"boolean"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Whether to ignore case sensitivity during pattern matching. ",(0,l.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,l.kt)("span",{className:"default-value"},"True")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-main"},"database_pattern"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"AllowDenyPattern"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"regex patterns for databases to filter in ingestion. ",(0,l.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,l.kt)("span",{className:"default-value"},"{","'","allow","'",": ","[","'",".","*","'","]",", ","'","deny","'",": ","[","]",", ","'","ignoreCase","'",": True","}")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-prefix"},"database_pattern."),(0,l.kt)("span",{className:"path-main"},"allow"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"array(string)"))),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-prefix"},"database_pattern."),(0,l.kt)("span",{className:"path-main"},"deny"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"array(string)"))),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"path-line"},(0,l.kt)("span",{className:"path-prefix"},"database_pattern."),(0,l.kt)("span",{className:"path-main"},"ignoreCase"))," ",(0,l.kt)("div",{className:"type-name-line"},(0,l.kt)("span",{className:"type-name"},"boolean"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Whether to ignore case sensitivity during pattern matching. ",(0,l.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,l.kt)("span",{className:"default-value"},"True")))))))),(0,l.kt)(i.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "MongoDBConfig",\n  "description": "Any source that produces dataset urns in a single environment should inherit this class",\n  "type": "object",\n  "properties": {\n    "env": {\n      "title": "Env",\n      "description": "The environment that all assets produced by this connector belong to",\n      "default": "PROD",\n      "type": "string"\n    },\n    "connect_uri": {\n      "title": "Connect Uri",\n      "description": "MongoDB connection URI.",\n      "default": "mongodb://localhost",\n      "type": "string"\n    },\n    "username": {\n      "title": "Username",\n      "description": "MongoDB username.",\n      "type": "string"\n    },\n    "password": {\n      "title": "Password",\n      "description": "MongoDB password.",\n      "type": "string"\n    },\n    "authMechanism": {\n      "title": "Authmechanism",\n      "description": "MongoDB authentication mechanism.",\n      "type": "string"\n    },\n    "options": {\n      "title": "Options",\n      "description": "Additional options to pass to `pymongo.MongoClient()`.",\n      "default": {},\n      "type": "object"\n    },\n    "enableSchemaInference": {\n      "title": "Enableschemainference",\n      "description": "Whether to infer schemas. ",\n      "default": true,\n      "type": "boolean"\n    },\n    "schemaSamplingSize": {\n      "title": "Schemasamplingsize",\n      "description": "Number of documents to use when inferring schema size. If set to `0`, all documents will be scanned.",\n      "default": 1000,\n      "exclusiveMinimum": 0,\n      "type": "integer"\n    },\n    "useRandomSampling": {\n      "title": "Userandomsampling",\n      "description": "If documents for schema inference should be randomly selected. If `False`, documents will be selected from start.",\n      "default": true,\n      "type": "boolean"\n    },\n    "maxSchemaSize": {\n      "title": "Maxschemasize",\n      "description": "Maximum number of fields to include in the schema.",\n      "default": 300,\n      "exclusiveMinimum": 0,\n      "type": "integer"\n    },\n    "maxDocumentSize": {\n      "title": "Maxdocumentsize",\n      "default": 16793600,\n      "exclusiveMinimum": 0,\n      "type": "integer"\n    },\n    "database_pattern": {\n      "title": "Database Pattern",\n      "description": "regex patterns for databases to filter in ingestion.",\n      "default": {\n        "allow": [\n          ".*"\n        ],\n        "deny": [],\n        "ignoreCase": true\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/AllowDenyPattern"\n        }\n      ]\n    },\n    "collection_pattern": {\n      "title": "Collection Pattern",\n      "description": "regex patterns for collections to filter in ingestion.",\n      "default": {\n        "allow": [\n          ".*"\n        ],\n        "deny": [],\n        "ignoreCase": true\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/AllowDenyPattern"\n        }\n      ]\n    }\n  },\n  "additionalProperties": false,\n  "definitions": {\n    "AllowDenyPattern": {\n      "title": "AllowDenyPattern",\n      "description": "A class to store allow deny regexes",\n      "type": "object",\n      "properties": {\n        "allow": {\n          "title": "Allow",\n          "description": "List of regex patterns to include in ingestion",\n          "default": [\n            ".*"\n          ],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "deny": {\n          "title": "Deny",\n          "description": "List of regex patterns to exclude from ingestion.",\n          "default": [],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "ignoreCase": {\n          "title": "Ignorecase",\n          "description": "Whether to ignore case sensitivity during pattern matching.",\n          "default": true,\n          "type": "boolean"\n        }\n      },\n      "additionalProperties": false\n    }\n  }\n}\n')))),(0,l.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Class Name: ",(0,l.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.mongodb.MongoDBSource")),(0,l.kt)("li",{parentName:"ul"},"Browse on ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/mongodb.py"},"GitHub"))),(0,l.kt)("h2",null,"Questions"),(0,l.kt)("p",null,"If you've got any questions on configuring ingestion for MongoDB, feel free to ping us on ",(0,l.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack"),"."))}f.isMDXComponent=!0}}]);