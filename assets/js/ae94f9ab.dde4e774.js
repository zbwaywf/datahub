"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[87378],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,o=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=c(a),u=s,f=m["".concat(o,".").concat(u)]||m[u]||d[u]||i;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function f(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,l=new Array(i);l[0]=u;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r[m]="string"==typeof e?e:s,l[1]=r;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),s=a(86010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(i.tabItem,l),hidden:a},t)}},73992:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(87462),s=a(67294),i=a(86010),l=a(72957),r=a(16550),o=a(75238),c=a(33609),p=a(92560);function m(e){return function(e){return s.Children.map(e,(e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:s}}=e;return{value:t,label:a,attributes:n,default:s}}))}function d(e){const{values:t,children:a}=e;return(0,s.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function u(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,r.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(i),(0,s.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=d(e),[l,r]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[o,c]=f({queryString:a,groupId:n}),[m,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,p.Nk)(a);return[n,(0,s.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),k=(()=>{const e=o??m;return u({value:e,tabValues:i})?e:null})();(0,s.useLayoutEffect)((()=>{k&&r(k)}),[k]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);r(e),c(e),h(e)}),[c,h,i]),tabValues:i}}var k=a(51048);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:r,selectValue:o,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=p.indexOf(t),n=c[a].value;n!==r&&(m(t),o(n))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:e=>p.push(e),onKeyDown:u,onClick:d},l,{className:(0,i.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":r===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return s.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=h(e);return s.createElement("div",{className:(0,i.Z)("tabs-container",g.tabList)},s.createElement(b,(0,n.Z)({},e,t)),s.createElement(N,(0,n.Z)({},e,t)))}function v(e){const t=(0,k.Z)();return s.createElement(y,(0,n.Z)({key:String(t)},e))}},34454:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>r,metadata:()=>c,toc:()=>m});var n=a(87462),s=(a(67294),a(3905)),i=a(73992),l=a(18679);const r={sidebar_position:8,title:"DataHub",slug:"/generated/ingestion/sources/datahub",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/datahub.md"},o="DataHub",c={unversionedId:"docs/generated/ingestion/sources/datahub",id:"version-0.10.5/docs/generated/ingestion/sources/datahub",title:"DataHub",description:"Testing",source:"@site/versioned_docs/version-0.10.5/docs/generated/ingestion/sources/datahub.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/datahub",permalink:"/docs/0.10.5/generated/ingestion/sources/datahub",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/datahub.md",tags:[],version:"0.10.5",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"DataHub",slug:"/generated/ingestion/sources/datahub",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/datahub.md"},sidebar:"overviewSidebar",previous:{title:"Databricks",permalink:"/docs/0.10.5/generated/ingestion/sources/databricks"},next:{title:"dbt",permalink:"/docs/0.10.5/generated/ingestion/sources/dbt"}},p={},m=[{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Config Details",id:"config-details",level:3},{value:"Code Coordinates",id:"code-coordinates",level:3}],d={toc:m},u="wrapper";function f(e){let{components:t,...a}=e;return(0,s.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"datahub"},"DataHub"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-testing-lightgrey",alt:"Testing"})),(0,s.kt)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,s.kt)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[datahub]'\n")),(0,s.kt)("h3",{id:"config-details"},"Config Details"),(0,s.kt)(i.Z,{mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,s.kt)("p",null,"Note that a ",(0,s.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,s.kt)("div",{className:"config-table"},(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"commit_state_interval"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"integer"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Number of records to process before committing state ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"1000")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"commit_with_parse_errors"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"boolean"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Whether to update createdon timestamp and kafka offset despite parse errors. Enable if you want to ignore the errors. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"False")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"include_all_versions"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"boolean"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"If enabled, include all versions of each aspect. Otherwise, only include the latest version of each aspect. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"False")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"kafka_topic_name"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Name of kafka topic containing timeseries MCLs ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"MetadataChangeLog","_","Timeseries","_","v1")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"mysql_batch_size"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"integer"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Number of records to fetch from MySQL at a time ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"10000")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"mysql_table_name"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Name of MySQL table containing all versioned aspects ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"metadata","_","aspect","_","v2")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"kafka_connection"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"KafkaConsumerConnectionConfig"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Kafka connection config ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"{","'","bootstrap","'",": ","'","localhost:9092","'",", ","'","schema","_","registry","_","u...")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"kafka_connection."),(0,s.kt)("span",{className:"path-main"},"bootstrap"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"default-line "},"Default: ",(0,s.kt)("span",{className:"default-value"},"localhost:9092")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"kafka_connection."),(0,s.kt)("span",{className:"path-main"},"client_timeout_seconds"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"integer"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"The request timeout used when interacting with the Kafka APIs. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"60")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"kafka_connection."),(0,s.kt)("span",{className:"path-main"},"consumer_config"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"object"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Extra consumer config serialized as JSON. These options will be passed into Kafka's DeserializingConsumer. See ",(0,s.kt)("a",{parentName:"td",href:"https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html#deserializingconsumer"},"https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html#deserializingconsumer")," and ",(0,s.kt)("a",{parentName:"td",href:"https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION.md"},"https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION.md")," .")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"kafka_connection."),(0,s.kt)("span",{className:"path-main"},"schema_registry_config"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"object"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Extra schema registry config serialized as JSON. These options will be passed into Kafka's SchemaRegistryClient. ",(0,s.kt)("a",{parentName:"td",href:"https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html?#schemaregistryclient"},"https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html?#schemaregistryclient"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"kafka_connection."),(0,s.kt)("span",{className:"path-main"},"schema_registry_url"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"default-line "},"Default: ",(0,s.kt)("span",{className:"default-value"},"http://localhost:8080/schema-registry/api/")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"mysql_connection"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"MySQLConnectionConfig"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"MySQL connection config ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"{","'","username","'",": None, ","'","host","_","port","'",": ","'","localhost:3306","'",", ...")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"mysql_connection."),(0,s.kt)("span",{className:"path-main"},"database"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"database (catalog)")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"mysql_connection."),(0,s.kt)("span",{className:"path-main"},"database_alias"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"[Deprecated]"," Alias to apply to database when ingesting.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"mysql_connection."),(0,s.kt)("span",{className:"path-main"},"host_port"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"MySQL host URL. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"localhost:3306")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"mysql_connection."),(0,s.kt)("span",{className:"path-main"},"options"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"object"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Any options specified here will be passed to ",(0,s.kt)("a",{parentName:"td",href:"https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine"},"SQLAlchemy.create_engine")," as kwargs.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"mysql_connection."),(0,s.kt)("span",{className:"path-main"},"password"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string(password)"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"password")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"mysql_connection."),(0,s.kt)("span",{className:"path-main"},"scheme"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"default-line "},"Default: ",(0,s.kt)("span",{className:"default-value"},"mysql+pymysql")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"mysql_connection."),(0,s.kt)("span",{className:"path-main"},"sqlalchemy_uri"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"URI of database to connect to. See ",(0,s.kt)("a",{parentName:"td",href:"https://docs.sqlalchemy.org/en/14/core/engines.html#database-urls"},"https://docs.sqlalchemy.org/en/14/core/engines.html#database-urls"),". Takes precedence over other connection parameters.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"mysql_connection."),(0,s.kt)("span",{className:"path-main"},"username"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"string"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"username")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-main"},"stateful_ingestion"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"StatefulIngestionConfig"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Stateful Ingestion Config ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"{","'","enabled","'",": True, ","'","max","_","checkpoint","_","state","_","size","'",": 167...")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("div",{className:"path-line"},(0,s.kt)("span",{className:"path-prefix"},"stateful_ingestion."),(0,s.kt)("span",{className:"path-main"},"enabled"))," ",(0,s.kt)("div",{className:"type-name-line"},(0,s.kt)("span",{className:"type-name"},"boolean"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"The type of the ingestion state provider registered with datahub. ",(0,s.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,s.kt)("span",{className:"default-value"},"False")))))))),(0,s.kt)(l.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "DataHubSourceConfig",\n  "description": "Base configuration class for stateful ingestion for source configs to inherit from.",\n  "type": "object",\n  "properties": {\n    "stateful_ingestion": {\n      "title": "Stateful Ingestion",\n      "description": "Stateful Ingestion Config",\n      "default": {\n        "enabled": true,\n        "max_checkpoint_state_size": 16777216,\n        "state_provider": {\n          "type": "datahub",\n          "config": null\n        },\n        "ignore_old_state": false,\n        "ignore_new_state": false\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/StatefulIngestionConfig"\n        }\n      ]\n    },\n    "mysql_connection": {\n      "title": "Mysql Connection",\n      "description": "MySQL connection config",\n      "default": {\n        "username": null,\n        "host_port": "localhost:3306",\n        "database": null,\n        "database_alias": null,\n        "scheme": "mysql+pymysql",\n        "sqlalchemy_uri": null,\n        "options": {}\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/MySQLConnectionConfig"\n        }\n      ]\n    },\n    "kafka_connection": {\n      "title": "Kafka Connection",\n      "description": "Kafka connection config",\n      "default": {\n        "bootstrap": "localhost:9092",\n        "schema_registry_url": "http://localhost:8080/schema-registry/api/",\n        "schema_registry_config": {},\n        "client_timeout_seconds": 60,\n        "consumer_config": {}\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/KafkaConsumerConnectionConfig"\n        }\n      ]\n    },\n    "include_all_versions": {\n      "title": "Include All Versions",\n      "description": "If enabled, include all versions of each aspect. Otherwise, only include the latest version of each aspect.",\n      "default": false,\n      "type": "boolean"\n    },\n    "mysql_batch_size": {\n      "title": "Mysql Batch Size",\n      "description": "Number of records to fetch from MySQL at a time",\n      "default": 10000,\n      "type": "integer"\n    },\n    "mysql_table_name": {\n      "title": "Mysql Table Name",\n      "description": "Name of MySQL table containing all versioned aspects",\n      "default": "metadata_aspect_v2",\n      "type": "string"\n    },\n    "kafka_topic_name": {\n      "title": "Kafka Topic Name",\n      "description": "Name of kafka topic containing timeseries MCLs",\n      "default": "MetadataChangeLog_Timeseries_v1",\n      "type": "string"\n    },\n    "commit_state_interval": {\n      "title": "Commit State Interval",\n      "description": "Number of records to process before committing state",\n      "default": 1000,\n      "type": "integer"\n    },\n    "commit_with_parse_errors": {\n      "title": "Commit With Parse Errors",\n      "description": "Whether to update createdon timestamp and kafka offset despite parse errors. Enable if you want to ignore the errors.",\n      "default": false,\n      "type": "boolean"\n    }\n  },\n  "definitions": {\n    "DynamicTypedStateProviderConfig": {\n      "title": "DynamicTypedStateProviderConfig",\n      "type": "object",\n      "properties": {\n        "type": {\n          "title": "Type",\n          "description": "The type of the state provider to use. For DataHub use `datahub`",\n          "type": "string"\n        },\n        "config": {\n          "title": "Config",\n          "description": "The configuration required for initializing the state provider. Default: The datahub_api config if set at pipeline level. Otherwise, the default DatahubClientConfig. See the defaults (https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/graph/client.py#L19)."\n        }\n      },\n      "required": [\n        "type"\n      ],\n      "additionalProperties": false\n    },\n    "StatefulIngestionConfig": {\n      "title": "StatefulIngestionConfig",\n      "description": "Basic Stateful Ingestion Specific Configuration for any source.",\n      "type": "object",\n      "properties": {\n        "enabled": {\n          "title": "Enabled",\n          "description": "The type of the ingestion state provider registered with datahub.",\n          "default": false,\n          "type": "boolean"\n        }\n      },\n      "additionalProperties": false\n    },\n    "MySQLConnectionConfig": {\n      "title": "MySQLConnectionConfig",\n      "type": "object",\n      "properties": {\n        "username": {\n          "title": "Username",\n          "description": "username",\n          "type": "string"\n        },\n        "password": {\n          "title": "Password",\n          "description": "password",\n          "type": "string",\n          "writeOnly": true,\n          "format": "password"\n        },\n        "host_port": {\n          "title": "Host Port",\n          "description": "MySQL host URL.",\n          "default": "localhost:3306",\n          "type": "string"\n        },\n        "database": {\n          "title": "Database",\n          "description": "database (catalog)",\n          "type": "string"\n        },\n        "database_alias": {\n          "title": "Database Alias",\n          "description": "[Deprecated] Alias to apply to database when ingesting.",\n          "type": "string"\n        },\n        "scheme": {\n          "title": "Scheme",\n          "default": "mysql+pymysql",\n          "type": "string"\n        },\n        "sqlalchemy_uri": {\n          "title": "Sqlalchemy Uri",\n          "description": "URI of database to connect to. See https://docs.sqlalchemy.org/en/14/core/engines.html#database-urls. Takes precedence over other connection parameters.",\n          "type": "string"\n        },\n        "options": {\n          "title": "Options",\n          "description": "Any options specified here will be passed to [SQLAlchemy.create_engine](https://docs.sqlalchemy.org/en/14/core/engines.html#sqlalchemy.create_engine) as kwargs.",\n          "type": "object"\n        }\n      },\n      "additionalProperties": false\n    },\n    "KafkaConsumerConnectionConfig": {\n      "title": "KafkaConsumerConnectionConfig",\n      "description": "Configuration class for holding connectivity information for Kafka consumers",\n      "type": "object",\n      "properties": {\n        "bootstrap": {\n          "title": "Bootstrap",\n          "default": "localhost:9092",\n          "type": "string"\n        },\n        "schema_registry_url": {\n          "title": "Schema Registry Url",\n          "default": "http://localhost:8080/schema-registry/api/",\n          "type": "string"\n        },\n        "schema_registry_config": {\n          "title": "Schema Registry Config",\n          "description": "Extra schema registry config serialized as JSON. These options will be passed into Kafka\'s SchemaRegistryClient. https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html?#schemaregistryclient",\n          "type": "object"\n        },\n        "client_timeout_seconds": {\n          "title": "Client Timeout Seconds",\n          "description": "The request timeout used when interacting with the Kafka APIs.",\n          "default": 60,\n          "type": "integer"\n        },\n        "consumer_config": {\n          "title": "Consumer Config",\n          "description": "Extra consumer config serialized as JSON. These options will be passed into Kafka\'s DeserializingConsumer. See https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html#deserializingconsumer and https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION.md .",\n          "type": "object"\n        }\n      },\n      "additionalProperties": false\n    }\n  }\n}\n')))),(0,s.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Class Name: ",(0,s.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.datahub.datahub_source.DataHubSource")),(0,s.kt)("li",{parentName:"ul"},"Browse on ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/datahub/datahub_source.py"},"GitHub"))),(0,s.kt)("h2",null,"Questions"),(0,s.kt)("p",null,"If you've got any questions on configuring ingestion for DataHub, feel free to ping us on ",(0,s.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack"),"."))}f.isMDXComponent=!0}}]);