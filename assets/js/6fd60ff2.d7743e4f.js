"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3382],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=p(n),c=r,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18679:(t,e,n)=>{n.d(e,{Z:()=>i});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function i(t){let{children:e,hidden:n,className:i}=t;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},e)}},34259:(t,e,n)=>{n.d(e,{Z:()=>c});var a=n(87462),r=n(67294),l=n(86010),i=n(51048),o=n(33609),s=n(1943),p=n(72957);const d="tabList__CuJ",u="tabItem_LNqP";function m(t){const{lazy:e,block:n,defaultValue:i,values:m,groupId:c,className:k}=t,g=r.Children.map(t.children,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=m??g.map((t=>{let{props:{value:e,label:n,attributes:a}}=t;return{value:e,label:n,attributes:a}})),f=(0,o.l)(N,((t,e)=>t.value===e.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===i?i:i??g.find((t=>t.props.default))?.props.value??g[0].props.value;if(null!==b&&!N.some((t=>t.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${N.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:y}=(0,s.U)(),[v,w]=(0,r.useState)(b),_=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=c){const t=h[c];null!=t&&t!==v&&N.some((e=>e.value===t))&&w(t)}const M=t=>{const e=t.currentTarget,n=_.indexOf(e),a=N[n].value;a!==v&&(C(e),w(a),null!=c&&y(c,String(a)))},O=t=>{let e=null;switch(t.key){case"Enter":M(t);break;case"ArrowRight":{const n=_.indexOf(t.currentTarget)+1;e=_[n]??_[0];break}case"ArrowLeft":{const n=_.indexOf(t.currentTarget)-1;e=_[n]??_[_.length-1];break}}e?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},k)},N.map((t=>{let{value:e,label:n,attributes:i}=t;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===e?0:-1,"aria-selected":v===e,key:e,ref:t=>_.push(t),onKeyDown:O,onClick:M},i,{className:(0,l.Z)("tabs__item",u,i?.className,{"tabs__item--active":v===e})}),n??e)}))),e?(0,r.cloneElement)(g.filter((t=>t.props.value===v))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==v})))))}function c(t){const e=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(e)},t))}},62367:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),l=n(34259),i=n(18679);const o={sidebar_position:26,title:"Mode",slug:"/generated/ingestion/sources/mode",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/mode.md"},s="Mode",p={unversionedId:"docs/generated/ingestion/sources/mode",id:"docs/generated/ingestion/sources/mode",title:"Mode",description:"Module mode",source:"@site/genDocs/docs/generated/ingestion/sources/mode.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/mode",permalink:"/docs/generated/ingestion/sources/mode",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/mode.md",tags:[],version:"current",sidebarPosition:26,frontMatter:{sidebar_position:26,title:"Mode",slug:"/generated/ingestion/sources/mode",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/mode.md"},sidebar:"overviewSidebar",previous:{title:"Microsoft SQL Server",permalink:"/docs/generated/ingestion/sources/mssql"},next:{title:"MongoDB",permalink:"/docs/generated/ingestion/sources/mongodb"}},d={},u=[{value:"Module <code>mode</code>",id:"module-mode",level:2},{value:"Important Capabilities",id:"important-capabilities",level:3},{value:"Report",id:"report",level:3},{value:"Chart",id:"chart",level:3},{value:"Chart Information",id:"chart-information",level:4},{value:"Table Information",id:"table-information",level:4},{value:"Pivot Table Information",id:"pivot-table-information",level:4},{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Starter Recipe",id:"starter-recipe",level:3},{value:"Config Details",id:"config-details",level:3},{value:"Code Coordinates",id:"code-coordinates",level:3},{value:"Questions",id:"questions",level:2}],m={toc:u};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mode"},"Mode"),(0,r.kt)("h2",{id:"module-mode"},"Module ",(0,r.kt)("inlineCode",{parentName:"h2"},"mode")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"})),(0,r.kt)("h3",{id:"important-capabilities"},"Important Capabilities"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Capability"),(0,r.kt)("th",{parentName:"tr",align:null},"Status"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/platform-instances"},"Platform Instance")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Enabled by default")))),(0,r.kt)("p",null,"This plugin extracts Charts, Reports, and associated metadata from a given Mode workspace. This plugin is in beta and has only been tested\non PostgreSQL database."),(0,r.kt)("h3",{id:"report"},"Report"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mode.com/developer/api-reference/analytics/reports/"},"/api/{account}/reports/{report}")," endpoint is used to\nretrieve the following report information."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Title and description"),(0,r.kt)("li",{parentName:"ul"},"Last edited by"),(0,r.kt)("li",{parentName:"ul"},"Owner"),(0,r.kt)("li",{parentName:"ul"},"Link to the Report in Mode for exploration"),(0,r.kt)("li",{parentName:"ul"},"Associated charts within the report")),(0,r.kt)("h3",{id:"chart"},"Chart"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mode.com/developer/api-reference/analytics/charts/#getChart"},"/api/{workspace}/reports/{report}/queries/{query}/charts'")," endpoint is used to\nretrieve the following information."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Title and description"),(0,r.kt)("li",{parentName:"ul"},"Last edited by"),(0,r.kt)("li",{parentName:"ul"},"Owner"),(0,r.kt)("li",{parentName:"ul"},"Link to the chart in Metabase"),(0,r.kt)("li",{parentName:"ul"},"Datasource and lineage information from Report queries.")),(0,r.kt)("p",null,"The following properties for a chart are ingested in DataHub."),(0,r.kt)("h4",{id:"chart-information"},"Chart Information"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Filters")),(0,r.kt)("td",{parentName:"tr",align:null},"Filters applied to the chart")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Metrics")),(0,r.kt)("td",{parentName:"tr",align:null},"Fields or columns used for aggregation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"X")),(0,r.kt)("td",{parentName:"tr",align:null},"Fields used in X-axis")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"X2")),(0,r.kt)("td",{parentName:"tr",align:null},"Fields used in second X-axis")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Y")),(0,r.kt)("td",{parentName:"tr",align:null},"Fields used in Y-axis")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Y2")),(0,r.kt)("td",{parentName:"tr",align:null},"Fields used in second Y-axis")))),(0,r.kt)("h4",{id:"table-information"},"Table Information"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Columns")),(0,r.kt)("td",{parentName:"tr",align:null},"Column names in a table")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Filters")),(0,r.kt)("td",{parentName:"tr",align:null},"Filters applied to the table")))),(0,r.kt)("h4",{id:"pivot-table-information"},"Pivot Table Information"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Columns")),(0,r.kt)("td",{parentName:"tr",align:null},"Column names in a table")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Filters")),(0,r.kt)("td",{parentName:"tr",align:null},"Filters applied to the table")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Metrics")),(0,r.kt)("td",{parentName:"tr",align:null},"Fields or columns used for aggregation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Rows")),(0,r.kt)("td",{parentName:"tr",align:null},"Row names in a table")))),(0,r.kt)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,r.kt)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[mode]'\n")),(0,r.kt)("h3",{id:"starter-recipe"},"Starter Recipe"),(0,r.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,r.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,r.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'source:\n  type: mode\n  config:\n    # Coordinates\n    connect_uri: http://app.mode.com\n\n    # Credentials\n    token: token\n    password: pass\n\n    # Options\n    workspace: "datahub"\n    default_schema: "public"\n    owner_username_instead_of_email: False\n    api_options:\n      retry_backoff_multiplier: 2\n      max_retry_interval: 10\n      max_attempts: 5\n\nsink:\n  # sink configs\n')),(0,r.kt)("h3",{id:"config-details"},"Config Details"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Note that a ",(0,r.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,r.kt)("details",{open:!0},(0,r.kt)("summary",null,"View All Configuration Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"env"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The environment that all assets produced by this connector belong to"),(0,r.kt)("td",{parentName:"tr",align:null},"PROD")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"platform_instance_map"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Dict","[str,string]"),(0,r.kt)("td",{parentName:"tr",align:null},"A holder for platform -> platform_instance mappings to generate correct dataset urns"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connect_uri"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Mode host URL."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://app.mode.com"},"https://app.mode.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"token"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Mode user token."),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Mode password for authentication."),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"workspace"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"default_schema"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Default schema to use when schema is not provided in an SQL query"),(0,r.kt)("td",{parentName:"tr",align:null},"public")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"owner_username_instead_of_email"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Use username for owner URN instead of Email"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"api_options"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"ModeAPIConfig (see below for fields)"),(0,r.kt)("td",{parentName:"tr",align:null},'Retry/Wait settings for Mode API to avoid "Too many Requests" error. See Mode API Options below'),(0,r.kt)("td",{parentName:"tr",align:null},"{'retry_backoff_multiplier': 2, 'max_retry_interval': 10, 'max_attempts': 5}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"api_options.retry_backoff_multiplier"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Generic dict"),(0,r.kt)("td",{parentName:"tr",align:null},"Multiplier for exponential backoff when waiting to retry"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"api_options.max_retry_interval"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Generic dict"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum interval to wait when retrying"),(0,r.kt)("td",{parentName:"tr",align:null},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"api_options.max_attempts"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum number of attempts to retry before failing"),(0,r.kt)("td",{parentName:"tr",align:null},"5")))))),(0,r.kt)(i.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "ModeConfig",\n  "description": "Any non-Dataset source that produces lineage to Datasets should inherit this class.\\ne.g. Orchestrators, Pipelines, BI Tools etc.",\n  "type": "object",\n  "properties": {\n    "env": {\n      "title": "Env",\n      "description": "The environment that all assets produced by this connector belong to",\n      "default": "PROD",\n      "type": "string"\n    },\n    "platform_instance_map": {\n      "title": "Platform Instance Map",\n      "description": "A holder for platform -> platform_instance mappings to generate correct dataset urns",\n      "type": "object",\n      "additionalProperties": {\n        "type": "string"\n      }\n    },\n    "connect_uri": {\n      "title": "Connect Uri",\n      "description": "Mode host URL.",\n      "default": "https://app.mode.com",\n      "type": "string"\n    },\n    "token": {\n      "title": "Token",\n      "description": "Mode user token.",\n      "type": "string"\n    },\n    "password": {\n      "title": "Password",\n      "description": "Mode password for authentication.",\n      "type": "string",\n      "writeOnly": true,\n      "format": "password"\n    },\n    "workspace": {\n      "title": "Workspace",\n      "type": "string"\n    },\n    "default_schema": {\n      "title": "Default Schema",\n      "description": "Default schema to use when schema is not provided in an SQL query",\n      "default": "public",\n      "type": "string"\n    },\n    "owner_username_instead_of_email": {\n      "title": "Owner Username Instead Of Email",\n      "description": "Use username for owner URN instead of Email",\n      "default": true,\n      "type": "boolean"\n    },\n    "api_options": {\n      "title": "Api Options",\n      "description": "Retry/Wait settings for Mode API to avoid \\"Too many Requests\\" error. See Mode API Options below",\n      "default": {\n        "retry_backoff_multiplier": 2,\n        "max_retry_interval": 10,\n        "max_attempts": 5\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/ModeAPIConfig"\n        }\n      ]\n    }\n  },\n  "required": [\n    "token",\n    "password"\n  ],\n  "additionalProperties": false,\n  "definitions": {\n    "ModeAPIConfig": {\n      "title": "ModeAPIConfig",\n      "type": "object",\n      "properties": {\n        "retry_backoff_multiplier": {\n          "title": "Retry Backoff Multiplier",\n          "description": "Multiplier for exponential backoff when waiting to retry",\n          "default": 2,\n          "anyOf": [\n            {\n              "type": "integer"\n            },\n            {\n              "type": "number"\n            }\n          ]\n        },\n        "max_retry_interval": {\n          "title": "Max Retry Interval",\n          "description": "Maximum interval to wait when retrying",\n          "default": 10,\n          "anyOf": [\n            {\n              "type": "integer"\n            },\n            {\n              "type": "number"\n            }\n          ]\n        },\n        "max_attempts": {\n          "title": "Max Attempts",\n          "description": "Maximum number of attempts to retry before failing",\n          "default": 5,\n          "type": "integer"\n        }\n      },\n      "additionalProperties": false\n    }\n  }\n}\n')))),(0,r.kt)("p",null,"See Mode's ",(0,r.kt)("a",{parentName:"p",href:"https://mode.com/developer/api-reference/authentication/"},"Authentication documentation")," on how to generate ",(0,r.kt)("inlineCode",{parentName:"p"},"token")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"password"),"."),(0,r.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Class Name: ",(0,r.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.mode.ModeSource")),(0,r.kt)("li",{parentName:"ul"},"Browse on ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/mode.py"},"GitHub"))),(0,r.kt)("h2",{id:"questions"},"Questions"),(0,r.kt)("p",null,"If you've got any questions on configuring ingestion for Mode, feel free to ping us on ",(0,r.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack")))}c.isMDXComponent=!0}}]);