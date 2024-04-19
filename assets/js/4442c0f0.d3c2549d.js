"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[19938],{26109:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>g,metadata:()=>d,toc:()=>y});a(96540);var n=a(15680),i=a(53720),l=a(5400);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}const g={sidebar_position:22,title:"Iceberg",slug:"/generated/ingestion/sources/iceberg",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/iceberg.md"},p="Iceberg",d={unversionedId:"docs/generated/ingestion/sources/iceberg",id:"version-0.13.0/docs/generated/ingestion/sources/iceberg",title:"Iceberg",description:"Testing",source:"@site/versioned_docs/version-0.13.0/docs/generated/ingestion/sources/iceberg.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/iceberg",permalink:"/docs/0.13.0/generated/ingestion/sources/iceberg",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/iceberg.md",tags:[],version:"0.13.0",sidebarPosition:22,frontMatter:{sidebar_position:22,title:"Iceberg",slug:"/generated/ingestion/sources/iceberg",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/iceberg.md"},sidebar:"overviewSidebar",previous:{title:"Hive",permalink:"/docs/0.13.0/generated/ingestion/sources/hive"},next:{title:"JSON Schemas",permalink:"/docs/0.13.0/generated/ingestion/sources/json-schema"}},c={},y=[{value:"Important Capabilities",id:"important-capabilities",level:3},{value:"Integration Details",id:"integration-details",level:2},{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Starter Recipe",id:"starter-recipe",level:3},{value:"Config Details",id:"config-details",level:3},{value:"Concept Mapping",id:"concept-mapping",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Common Issue",id:"common-issue",level:3},{value:"Code Coordinates",id:"code-coordinates",level:3}],m={toc:y},f="wrapper";function u(e){var{components:t}=e,a=o(e,["components"]);return(0,n.yg)(f,s(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},m,a),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"iceberg"},"Iceberg"),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-testing-lightgrey",alt:"Testing"})),(0,n.yg)("h3",{id:"important-capabilities"},"Important Capabilities"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Capability"),(0,n.yg)("th",{parentName:"tr",align:null},"Status"),(0,n.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/0.13.0/metadata-ingestion/docs/dev_guides/sql_profiles"},"Data Profiling")),(0,n.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:null},"Optionally enabled via configuration.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Descriptions"),(0,n.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:null},"Enabled by default.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/0.13.0/metadata-ingestion/docs/dev_guides/stateful#stale-entity-removal"},"Detect Deleted Entities")),(0,n.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:null},"Enabled via stateful ingestion")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/0.13.0/domains"},"Domains")),(0,n.yg)("td",{parentName:"tr",align:null},"\u274c"),(0,n.yg)("td",{parentName:"tr",align:null},"Currently not supported.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Extract Ownership"),(0,n.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:null},"Optionally enabled via configuration by specifying which Iceberg table property holds user or group ownership.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Partition Support"),(0,n.yg)("td",{parentName:"tr",align:null},"\u274c"),(0,n.yg)("td",{parentName:"tr",align:null},"Currently not supported.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/0.13.0/platform-instances"},"Platform Instance")),(0,n.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:null},"Optionally enabled via configuration, an Iceberg instance represents the catalog name where the table is stored.")))),(0,n.yg)("h2",{id:"integration-details"},"Integration Details"),(0,n.yg)("p",null,"The DataHub Iceberg source plugin extracts metadata from ",(0,n.yg)("a",{parentName:"p",href:"https://iceberg.apache.org/spec/"},"Iceberg tables")," stored in a distributed or local file system.\nTypically, Iceberg tables are stored in a distributed file system like S3 or Azure Data Lake Storage (ADLS) and registered in a catalog.  There are various catalog\nimplementations like Filesystem-based, RDBMS-based or even REST-based catalogs.  This Iceberg source plugin relies on the\n",(0,n.yg)("a",{parentName:"p",href:"https://py.iceberg.apache.org/"},"pyiceberg library"),"."),(0,n.yg)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,n.yg)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[iceberg]'\n")),(0,n.yg)("h3",{id:"starter-recipe"},"Starter Recipe"),(0,n.yg)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,n.yg)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,n.yg)("p",null,"For general pointers on writing and running a recipe, see our ",(0,n.yg)("a",{parentName:"p",href:"/docs/0.13.0/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},'source:\n  type: "iceberg"\n  config:\n    env: PROD\n    catalog:\n      name: my_iceberg_catalog\n      type: rest\n      # Catalog configuration follows pyiceberg\'s documentation (https://py.iceberg.apache.org/configuration)\n      config:\n        uri: http://localhost:8181\n        s3.access-key-id: admin\n        s3.secret-access-key: password\n        s3.region: us-east-1\n        warehouse: s3a://warehouse/wh/\n        s3.endpoint: http://localhost:9000\n    platform_instance: my_iceberg_catalog\n    table_pattern:\n      allow:\n        - marketing.*\n    profiling:\n      enabled: true\n\nsink:\n  # sink configs\n\n\n')),(0,n.yg)("h3",{id:"config-details"},"Config Details"),(0,n.yg)(i.A,{mdxType:"Tabs"},(0,n.yg)(l.A,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,n.yg)("p",null,"Note that a ",(0,n.yg)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,n.yg)("div",{className:"config-table"},(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Field"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"catalog"),"\xa0",(0,n.yg)("abbr",{title:"Required"},"\u2705"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"IcebergCatalogConfig"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Catalog configuration where to find Iceberg tables.  See ",(0,n.yg)("a",{parentName:"td",href:"https://py.iceberg.apache.org/configuration/"},"pyiceberg's catalog configuration details"),".")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"catalog."),(0,n.yg)("span",{className:"path-main"},"config"),"\xa0",(0,n.yg)("abbr",{title:"Required if catalog is set"},"\u2753"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"map(str,string)"))),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"catalog."),(0,n.yg)("span",{className:"path-main"},"type"),"\xa0",(0,n.yg)("abbr",{title:"Required if catalog is set"},"\u2753"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Type of catalog.  See ",(0,n.yg)("a",{parentName:"td",href:"https://py.iceberg.apache.org/configuration/"},"PyIceberg")," for list of possible values.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"catalog."),(0,n.yg)("span",{className:"path-main"},"name"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Name of catalog ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"default")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"group_ownership_property"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Iceberg table property to look for a ",(0,n.yg)("inlineCode",{parentName:"td"},"CorpGroup")," owner.  Can only hold a single group value.  If property has no value, no owner information will be emitted.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"platform_instance"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"The instance of the platform that all assets produced by this recipe belong to")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"user_ownership_property"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Iceberg table property to look for a ",(0,n.yg)("inlineCode",{parentName:"td"},"CorpUser")," owner.  Can only hold a single user value.  If property has no value, no owner information will be emitted. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"owner")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"env"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"The environment that all assets produced by this connector belong to ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"PROD")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"table_pattern"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"AllowDenyPattern"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Regex patterns for tables to filter in ingestion. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"{","'","allow","'",": ","[","'",".","*","'","]",", ","'","deny","'",": ","[","]",", ","'","ignoreCase","'",": True","}")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"table_pattern."),(0,n.yg)("span",{className:"path-main"},"allow"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"array(string)"))),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"table_pattern."),(0,n.yg)("span",{className:"path-main"},"deny"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"array(string)"))),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"table_pattern."),(0,n.yg)("span",{className:"path-main"},"ignoreCase"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Whether to ignore case sensitivity during pattern matching. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"True")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"profiling"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"IcebergProfilingConfig"))),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"default-line "},"Default: ",(0,n.yg)("span",{className:"default-value"},"{","'","enabled","'",": False, ","'","include","_","field","_","null","_","count","'",": Tru...")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"profiling."),(0,n.yg)("span",{className:"path-main"},"enabled"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Whether profiling should be done. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"False")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"profiling."),(0,n.yg)("span",{className:"path-main"},"include_field_max_value"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Whether to profile for the max value of numeric columns. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"True")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"profiling."),(0,n.yg)("span",{className:"path-main"},"include_field_min_value"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Whether to profile for the min value of numeric columns. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"True")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"profiling."),(0,n.yg)("span",{className:"path-main"},"include_field_null_count"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Whether to profile for the number of nulls for each column. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"True")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"profiling."),(0,n.yg)("span",{className:"path-main"},"operation_config"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"OperationConfig"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Experimental feature. To specify operation configs.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"profiling.operation_config."),(0,n.yg)("span",{className:"path-main"},"lower_freq_profile_enabled"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Whether to do profiling at lower freq or not. This does not do any scheduling just adds additional checks to when not to run profiling. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"False")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"profiling.operation_config."),(0,n.yg)("span",{className:"path-main"},"profile_date_of_month"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"integer"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Number between 1 to 31 for date of month (both inclusive). If not specified, defaults to Nothing and this field does not take affect.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"profiling.operation_config."),(0,n.yg)("span",{className:"path-main"},"profile_day_of_week"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"integer"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Number between 0 to 6 for day of week (both inclusive). 0 is Monday and 6 is Sunday. If not specified, defaults to Nothing and this field does not take affect.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"stateful_ingestion"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"StatefulStaleMetadataRemovalConfig"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Iceberg Stateful Ingestion Config.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"stateful_ingestion."),(0,n.yg)("span",{className:"path-main"},"enabled"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"The type of the ingestion state provider registered with datahub. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"False")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"stateful_ingestion."),(0,n.yg)("span",{className:"path-main"},"remove_stale_metadata"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Soft-deletes the entities present in the last successful run but missing in the current run with stateful_ingestion enabled. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"True")))))))),(0,n.yg)(l.A,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,n.yg)("p",null,"The ",(0,n.yg)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "IcebergSourceConfig",\n  "description": "Base configuration class for stateful ingestion for source configs to inherit from.",\n  "type": "object",\n  "properties": {\n    "env": {\n      "title": "Env",\n      "description": "The environment that all assets produced by this connector belong to",\n      "default": "PROD",\n      "type": "string"\n    },\n    "platform_instance": {\n      "title": "Platform Instance",\n      "description": "The instance of the platform that all assets produced by this recipe belong to",\n      "type": "string"\n    },\n    "stateful_ingestion": {\n      "title": "Stateful Ingestion",\n      "description": "Iceberg Stateful Ingestion Config.",\n      "allOf": [\n        {\n          "$ref": "#/definitions/StatefulStaleMetadataRemovalConfig"\n        }\n      ]\n    },\n    "catalog": {\n      "title": "Catalog",\n      "description": "Catalog configuration where to find Iceberg tables.  See [pyiceberg\'s catalog configuration details](https://py.iceberg.apache.org/configuration/).",\n      "allOf": [\n        {\n          "$ref": "#/definitions/IcebergCatalogConfig"\n        }\n      ]\n    },\n    "table_pattern": {\n      "title": "Table Pattern",\n      "description": "Regex patterns for tables to filter in ingestion.",\n      "default": {\n        "allow": [\n          ".*"\n        ],\n        "deny": [],\n        "ignoreCase": true\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/AllowDenyPattern"\n        }\n      ]\n    },\n    "user_ownership_property": {\n      "title": "User Ownership Property",\n      "description": "Iceberg table property to look for a `CorpUser` owner.  Can only hold a single user value.  If property has no value, no owner information will be emitted.",\n      "default": "owner",\n      "type": "string"\n    },\n    "group_ownership_property": {\n      "title": "Group Ownership Property",\n      "description": "Iceberg table property to look for a `CorpGroup` owner.  Can only hold a single group value.  If property has no value, no owner information will be emitted.",\n      "type": "string"\n    },\n    "profiling": {\n      "title": "Profiling",\n      "default": {\n        "enabled": false,\n        "include_field_null_count": true,\n        "include_field_min_value": true,\n        "include_field_max_value": true,\n        "operation_config": {\n          "lower_freq_profile_enabled": false,\n          "profile_day_of_week": null,\n          "profile_date_of_month": null\n        }\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/IcebergProfilingConfig"\n        }\n      ]\n    }\n  },\n  "required": [\n    "catalog"\n  ],\n  "additionalProperties": false,\n  "definitions": {\n    "DynamicTypedStateProviderConfig": {\n      "title": "DynamicTypedStateProviderConfig",\n      "type": "object",\n      "properties": {\n        "type": {\n          "title": "Type",\n          "description": "The type of the state provider to use. For DataHub use `datahub`",\n          "type": "string"\n        },\n        "config": {\n          "title": "Config",\n          "description": "The configuration required for initializing the state provider. Default: The datahub_api config if set at pipeline level. Otherwise, the default DatahubClientConfig. See the defaults (https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/graph/client.py#L19).",\n          "default": {},\n          "type": "object"\n        }\n      },\n      "required": [\n        "type"\n      ],\n      "additionalProperties": false\n    },\n    "StatefulStaleMetadataRemovalConfig": {\n      "title": "StatefulStaleMetadataRemovalConfig",\n      "description": "Base specialized config for Stateful Ingestion with stale metadata removal capability.",\n      "type": "object",\n      "properties": {\n        "enabled": {\n          "title": "Enabled",\n          "description": "The type of the ingestion state provider registered with datahub.",\n          "default": false,\n          "type": "boolean"\n        },\n        "remove_stale_metadata": {\n          "title": "Remove Stale Metadata",\n          "description": "Soft-deletes the entities present in the last successful run but missing in the current run with stateful_ingestion enabled.",\n          "default": true,\n          "type": "boolean"\n        }\n      },\n      "additionalProperties": false\n    },\n    "IcebergCatalogConfig": {\n      "title": "IcebergCatalogConfig",\n      "description": "Iceberg catalog config.\\n\\nhttps://py.iceberg.apache.org/configuration/",\n      "type": "object",\n      "properties": {\n        "name": {\n          "title": "Name",\n          "description": "Name of catalog",\n          "default": "default",\n          "type": "string"\n        },\n        "type": {\n          "title": "Type",\n          "description": "Type of catalog.  See [PyIceberg](https://py.iceberg.apache.org/configuration/) for list of possible values.",\n          "type": "string"\n        },\n        "config": {\n          "title": "Config",\n          "description": "Catalog specific configuration.  See [PyIceberg documentation](https://py.iceberg.apache.org/configuration/) for details.",\n          "type": "object",\n          "additionalProperties": {\n            "type": "string"\n          }\n        }\n      },\n      "required": [\n        "type",\n        "config"\n      ],\n      "additionalProperties": false\n    },\n    "AllowDenyPattern": {\n      "title": "AllowDenyPattern",\n      "description": "A class to store allow deny regexes",\n      "type": "object",\n      "properties": {\n        "allow": {\n          "title": "Allow",\n          "description": "List of regex patterns to include in ingestion",\n          "default": [\n            ".*"\n          ],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "deny": {\n          "title": "Deny",\n          "description": "List of regex patterns to exclude from ingestion.",\n          "default": [],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "ignoreCase": {\n          "title": "Ignorecase",\n          "description": "Whether to ignore case sensitivity during pattern matching.",\n          "default": true,\n          "type": "boolean"\n        }\n      },\n      "additionalProperties": false\n    },\n    "OperationConfig": {\n      "title": "OperationConfig",\n      "type": "object",\n      "properties": {\n        "lower_freq_profile_enabled": {\n          "title": "Lower Freq Profile Enabled",\n          "description": "Whether to do profiling at lower freq or not. This does not do any scheduling just adds additional checks to when not to run profiling.",\n          "default": false,\n          "type": "boolean"\n        },\n        "profile_day_of_week": {\n          "title": "Profile Day Of Week",\n          "description": "Number between 0 to 6 for day of week (both inclusive). 0 is Monday and 6 is Sunday. If not specified, defaults to Nothing and this field does not take affect.",\n          "type": "integer"\n        },\n        "profile_date_of_month": {\n          "title": "Profile Date Of Month",\n          "description": "Number between 1 to 31 for date of month (both inclusive). If not specified, defaults to Nothing and this field does not take affect.",\n          "type": "integer"\n        }\n      },\n      "additionalProperties": false\n    },\n    "IcebergProfilingConfig": {\n      "title": "IcebergProfilingConfig",\n      "type": "object",\n      "properties": {\n        "enabled": {\n          "title": "Enabled",\n          "description": "Whether profiling should be done.",\n          "default": false,\n          "type": "boolean"\n        },\n        "include_field_null_count": {\n          "title": "Include Field Null Count",\n          "description": "Whether to profile for the number of nulls for each column.",\n          "default": true,\n          "type": "boolean"\n        },\n        "include_field_min_value": {\n          "title": "Include Field Min Value",\n          "description": "Whether to profile for the min value of numeric columns.",\n          "default": true,\n          "type": "boolean"\n        },\n        "include_field_max_value": {\n          "title": "Include Field Max Value",\n          "description": "Whether to profile for the max value of numeric columns.",\n          "default": true,\n          "type": "boolean"\n        },\n        "operation_config": {\n          "title": "Operation Config",\n          "description": "Experimental feature. To specify operation configs.",\n          "allOf": [\n            {\n              "$ref": "#/definitions/OperationConfig"\n            }\n          ]\n        }\n      },\n      "additionalProperties": false\n    }\n  }\n}\n')))),(0,n.yg)("h3",{id:"concept-mapping"},"Concept Mapping"),(0,n.yg)("p",null,"This ingestion source maps the following Source System Concepts to DataHub Concepts:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Source Concept"),(0,n.yg)("th",{parentName:"tr",align:null},"DataHub Concept"),(0,n.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"iceberg")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/0.13.0/generated/metamodel/entities/dataplatform"},"Data Platform")),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Table"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/0.13.0/generated/metamodel/entities/dataset"},"Dataset")),(0,n.yg)("td",{parentName:"tr",align:null},"Each Iceberg table maps to a Dataset named using the parent folders.  If a table is stored under ",(0,n.yg)("inlineCode",{parentName:"td"},"my/namespace/table"),", the dataset name will be ",(0,n.yg)("inlineCode",{parentName:"td"},"my.namespace.table"),".  If a ",(0,n.yg)("a",{parentName:"td",href:"/docs/platform-instances/"},"Platform Instance")," is configured, it will be used as a prefix: ",(0,n.yg)("inlineCode",{parentName:"td"},"<platform_instance>.my.namespace.table"),".")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://iceberg.apache.org/docs/latest/configuration/#table-properties"},"Table property")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/0.13.0/generated/metamodel/entities/corpuser"},"User (a.k.a CorpUser)")),(0,n.yg)("td",{parentName:"tr",align:null},"The value of a table property can be used as the name of a CorpUser owner.  This table property name can be configured with the source option ",(0,n.yg)("inlineCode",{parentName:"td"},"user_ownership_property"),".")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://iceberg.apache.org/docs/latest/configuration/#table-properties"},"Table property")),(0,n.yg)("td",{parentName:"tr",align:null},"CorpGroup"),(0,n.yg)("td",{parentName:"tr",align:null},"The value of a table property can be used as the name of a CorpGroup owner.  This table property name can be configured with the source option ",(0,n.yg)("inlineCode",{parentName:"td"},"group_ownership_property"),".")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Table parent folders (excluding ",(0,n.yg)("a",{parentName:"td",href:"https://iceberg.apache.org/docs/latest/configuration/#catalog-properties"},"warehouse catalog location"),")"),(0,n.yg)("td",{parentName:"tr",align:null},"Container"),(0,n.yg)("td",{parentName:"tr",align:null},"Available in a future release")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://iceberg.apache.org/spec/#schemas-and-data-types"},"Table schema")),(0,n.yg)("td",{parentName:"tr",align:null},"SchemaField"),(0,n.yg)("td",{parentName:"tr",align:null},"Maps to the fields defined within the Iceberg table schema definition.")))),(0,n.yg)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.yg)("h3",{id:"common-issue"},"[Common Issue]"),(0,n.yg)("p",null,"[Provide description of common issues with this integration and steps to resolve]"),(0,n.yg)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Class Name: ",(0,n.yg)("inlineCode",{parentName:"li"},"datahub.ingestion.source.iceberg.iceberg.IcebergSource")),(0,n.yg)("li",{parentName:"ul"},"Browse on ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/iceberg/iceberg.py"},"GitHub"))),(0,n.yg)("h2",null,"Questions"),(0,n.yg)("p",null,"If you've got any questions on configuring ingestion for Iceberg, feel free to ping us on ",(0,n.yg)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack"),"."))}u.isMDXComponent=!0}}]);