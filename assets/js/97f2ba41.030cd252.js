"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[45545],{68242:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>g,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>m});a(96540);var n=a(15680),i=a(53720),s=a(5400);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}const p={sidebar_position:21,title:"Google Cloud Storage",slug:"/generated/ingestion/sources/gcs",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/gcs.md"},g="Google Cloud Storage",c={unversionedId:"docs/generated/ingestion/sources/gcs",id:"version-0.13.1/docs/generated/ingestion/sources/gcs",title:"Google Cloud Storage",description:"This connector ingests Google Cloud Storage datasets into DataHub. It allows mapping an individual file or a folder of files to a dataset in DataHub.",source:"@site/versioned_docs/version-0.13.1/docs/generated/ingestion/sources/gcs.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/gcs",permalink:"/docs/0.13.1/generated/ingestion/sources/gcs",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/gcs.md",tags:[],version:"0.13.1",sidebarPosition:21,frontMatter:{sidebar_position:21,title:"Google Cloud Storage",slug:"/generated/ingestion/sources/gcs",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/gcs.md"},sidebar:"overviewSidebar",previous:{title:"Glue",permalink:"/docs/0.13.1/generated/ingestion/sources/glue"},next:{title:"Hive",permalink:"/docs/0.13.1/generated/ingestion/sources/hive"}},d={},m=[{value:"Concept Mapping",id:"concept-mapping",level:3},{value:"Supported file types",id:"supported-file-types",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Important Capabilities",id:"important-capabilities",level:3},{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Starter Recipe",id:"starter-recipe",level:3},{value:"Config Details",id:"config-details",level:3},{value:"Path Specs",id:"path-specs",level:3},{value:"Code Coordinates",id:"code-coordinates",level:3}],y={toc:m},u="wrapper";function f(e){var{components:t}=e,a=o(e,["components"]);return(0,n.yg)(u,r(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){l(e,t,a[t])}))}return e}({},y,a),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"google-cloud-storage"},"Google Cloud Storage"),(0,n.yg)("p",null,"This connector ingests Google Cloud Storage datasets into DataHub. It allows mapping an individual file or a folder of files to a dataset in DataHub.\nTo specify the group of files that form a dataset, use ",(0,n.yg)("inlineCode",{parentName:"p"},"path_specs")," configuration in ingestion recipe. This source leverages ",(0,n.yg)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/interoperability"},"Interoperability of GCS with S3"),"\nand uses DataHub S3 Data Lake integration source under the hood. Refer section ",(0,n.yg)("a",{parentName:"p",href:"/docs/generated/ingestion/sources/s3/#path-specs"},"Path Specs")," from S3 connector for more details."),(0,n.yg)("h3",{id:"concept-mapping"},"Concept Mapping"),(0,n.yg)("p",null,"This ingestion source maps the following Source System Concepts to DataHub Concepts:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Source Concept"),(0,n.yg)("th",{parentName:"tr",align:null},"DataHub Concept"),(0,n.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},'"Google Cloud Storage"')),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/generated/metamodel/entities/dataplatform/"},"Data Platform")),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"GCS object / Folder containing GCS objects"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/generated/metamodel/entities/dataset/"},"Dataset")),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"GCS bucket"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/generated/metamodel/entities/container/"},"Container")),(0,n.yg)("td",{parentName:"tr",align:null},"Subtype ",(0,n.yg)("inlineCode",{parentName:"td"},"GCS bucket"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"GCS folder"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/generated/metamodel/entities/container/"},"Container")),(0,n.yg)("td",{parentName:"tr",align:null},"Subtype ",(0,n.yg)("inlineCode",{parentName:"td"},"Folder"))))),(0,n.yg)("h3",{id:"supported-file-types"},"Supported file types"),(0,n.yg)("p",null,"Supported file types are as follows:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"CSV"),(0,n.yg)("li",{parentName:"ul"},"TSV"),(0,n.yg)("li",{parentName:"ul"},"JSONL"),(0,n.yg)("li",{parentName:"ul"},"JSON"),(0,n.yg)("li",{parentName:"ul"},"Parquet"),(0,n.yg)("li",{parentName:"ul"},"Apache Avro")),(0,n.yg)("p",null,"Schemas for Parquet and Avro files are extracted as provided."),(0,n.yg)("p",null,"Schemas for schemaless formats (CSV, TSV, JSONL, JSON) are inferred. For CSV, TSV and JSONL files, we consider the first 100 rows by default, which can be controlled via the ",(0,n.yg)("inlineCode",{parentName:"p"},"max_rows")," recipe parameter (see ",(0,n.yg)("a",{parentName:"p",href:"#config-details"},"below"),")\nJSON file schemas are inferred on the basis of the entire file (given the difficulty in extracting only the first few objects of the file), which may impact performance.\nWe are working on using iterator-based JSON parsers to avoid reading in the entire JSON object."),(0,n.yg)("h3",{id:"prerequisites"},"Prerequisites"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},'Create a service account with "Storage Object Viewer" Role - ',(0,n.yg)("a",{parentName:"li",href:"https://cloud.google.com/iam/docs/service-accounts-create"},"https://cloud.google.com/iam/docs/service-accounts-create")),(0,n.yg)("li",{parentName:"ol"},"Make sure you meet following requirements to generate HMAC key - ",(0,n.yg)("a",{parentName:"li",href:"https://cloud.google.com/storage/docs/authentication/managing-hmackeys#before-you-begin"},"https://cloud.google.com/storage/docs/authentication/managing-hmackeys#before-you-begin")),(0,n.yg)("li",{parentName:"ol"},"Create an HMAC key for service account created above - ",(0,n.yg)("a",{parentName:"li",href:"https://cloud.google.com/storage/docs/authentication/managing-hmackeys#create"},"https://cloud.google.com/storage/docs/authentication/managing-hmackeys#create")," .\n",(0,n.yg)("img",{parentName:"li",src:"https://img.shields.io/badge/support%20status-incubating-blue",alt:"Incubating"}))),(0,n.yg)("h3",{id:"important-capabilities"},"Important Capabilities"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Capability"),(0,n.yg)("th",{parentName:"tr",align:null},"Status"),(0,n.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Asset Containers"),(0,n.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:null},"Enabled by default")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/0.13.1/metadata-ingestion/docs/dev_guides/sql_profiles"},"Data Profiling")),(0,n.yg)("td",{parentName:"tr",align:null},"\u274c"),(0,n.yg)("td",{parentName:"tr",align:null},"Not supported")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/0.13.1/metadata-ingestion/docs/dev_guides/stateful#stale-entity-removal"},"Detect Deleted Entities")),(0,n.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:null},"Optionally enabled via ",(0,n.yg)("inlineCode",{parentName:"td"},"stateful_ingestion.remove_stale_metadata"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Schema Metadata"),(0,n.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:null},"Enabled by default")))),(0,n.yg)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,n.yg)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[gcs]'\n")),(0,n.yg)("h3",{id:"starter-recipe"},"Starter Recipe"),(0,n.yg)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,n.yg)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,n.yg)("p",null,"For general pointers on writing and running a recipe, see our ",(0,n.yg)("a",{parentName:"p",href:"/docs/0.13.1/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},"source:\n  type: gcs\n  config:\n    path_specs: \n       - include: gs://gcs-ingestion-bucket/parquet_example/{table}/year={partition[0]}/*.parquet\n    credential:\n      hmac_access_id: <hmac access id>\n      hmac_access_secret: <hmac access secret>\n\n")),(0,n.yg)("h3",{id:"config-details"},"Config Details"),(0,n.yg)(i.A,{mdxType:"Tabs"},(0,n.yg)(s.A,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,n.yg)("p",null,"Note that a ",(0,n.yg)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,n.yg)("div",{className:"config-table"},(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Field"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"credential"),"\xa0",(0,n.yg)("abbr",{title:"Required"},"\u2705"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"HMACKey"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Google cloud storage ",(0,n.yg)("a",{parentName:"td",href:"https://cloud.google.com/storage/docs/authentication/hmackeys"},"HMAC keys"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"credential."),(0,n.yg)("span",{className:"path-main"},"hmac_access_id"),"\xa0",(0,n.yg)("abbr",{title:"Required if credential is set"},"\u2753"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Access ID")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"credential."),(0,n.yg)("span",{className:"path-main"},"hmac_access_secret"),"\xa0",(0,n.yg)("abbr",{title:"Required if credential is set"},"\u2753"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string(password)"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Secret")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"path_specs"),"\xa0",(0,n.yg)("abbr",{title:"Required"},"\u2705"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"array"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"List of PathSpec. See ",(0,n.yg)("a",{parentName:"td",href:"#path-spec"},"below")," the details about PathSpec")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"path_specs."),(0,n.yg)("span",{className:"path-main"},"PathSpec"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"PathSpec"))),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"path_specs.PathSpec."),(0,n.yg)("span",{className:"path-main"},"include"),"\xa0",(0,n.yg)("abbr",{title:"Required if PathSpec is set"},"\u2753"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Path to table. Name variable ",(0,n.yg)("inlineCode",{parentName:"td"},"{table}")," is used to mark the folder with dataset. In absence of ",(0,n.yg)("inlineCode",{parentName:"td"},"{table}"),", file level dataset will be created. Check below examples for more details.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"path_specs.PathSpec."),(0,n.yg)("span",{className:"path-main"},"allow_double_stars"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Allow double stars in the include path. This can affect performance significantly if enabled ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"False")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"path_specs.PathSpec."),(0,n.yg)("span",{className:"path-main"},"default_extension"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"For files without extension it will assume the specified file type. If it is not set the files without extensions will be skipped.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"path_specs.PathSpec."),(0,n.yg)("span",{className:"path-main"},"enable_compression"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Enable or disable processing compressed files. Currently .gz and .bz files are supported. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"True")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"path_specs.PathSpec."),(0,n.yg)("span",{className:"path-main"},"sample_files"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Not listing all the files but only taking a handful amount of sample file to infer the schema. File count and file size calculation will be disabled. This can affect performance significantly if enabled ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"True")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"path_specs.PathSpec."),(0,n.yg)("span",{className:"path-main"},"table_name"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Display name of the dataset.Combination of named variables from include path and strings")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"path_specs.PathSpec."),(0,n.yg)("span",{className:"path-main"},"exclude"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"array"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"list of paths in glob pattern which will be excluded while scanning for the datasets")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"path_specs.PathSpec.exclude."),(0,n.yg)("span",{className:"path-main"},"string"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"path_specs.PathSpec."),(0,n.yg)("span",{className:"path-main"},"file_types"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"array"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Files with extenstions specified here (subset of default value) only will be scanned to create dataset. Other files will be omitted. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"[","'","csv","'",", ","'","tsv","'",", ","'","json","'",", ","'","parquet","'",", ","'","avro","'","]")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"path_specs.PathSpec.file_types."),(0,n.yg)("span",{className:"path-main"},"string"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"max_rows"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"integer"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Maximum number of rows to use when inferring schemas for TSV and CSV files. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"100")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"number_of_files_to_sample"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"integer"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Number of files to list to sample for schema inference. This will be ignored if sample_files is set to False in the pathspec. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"100")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"platform_instance"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"The instance of the platform that all assets produced by this recipe belong to")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"env"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"The environment that all assets produced by this connector belong to ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"PROD")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"stateful_ingestion"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"StatefulStaleMetadataRemovalConfig"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Base specialized config for Stateful Ingestion with stale metadata removal capability.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"stateful_ingestion."),(0,n.yg)("span",{className:"path-main"},"enabled"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Whether or not to enable stateful ingest. Default: True if a pipeline_name is set and either a datahub-rest sink or ",(0,n.yg)("inlineCode",{parentName:"td"},"datahub_api")," is specified, otherwise False ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"False")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"stateful_ingestion."),(0,n.yg)("span",{className:"path-main"},"remove_stale_metadata"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Soft-deletes the entities present in the last successful run but missing in the current run with stateful_ingestion enabled. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"True")))))))),(0,n.yg)(s.A,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,n.yg)("p",null,"The ",(0,n.yg)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "GCSSourceConfig",\n  "description": "Base configuration class for stateful ingestion for source configs to inherit from.",\n  "type": "object",\n  "properties": {\n    "path_specs": {\n      "title": "Path Specs",\n      "description": "List of PathSpec. See [below](#path-spec) the details about PathSpec",\n      "type": "array",\n      "items": {\n        "$ref": "#/definitions/PathSpec"\n      }\n    },\n    "env": {\n      "title": "Env",\n      "description": "The environment that all assets produced by this connector belong to",\n      "default": "PROD",\n      "type": "string"\n    },\n    "platform_instance": {\n      "title": "Platform Instance",\n      "description": "The instance of the platform that all assets produced by this recipe belong to",\n      "type": "string"\n    },\n    "stateful_ingestion": {\n      "$ref": "#/definitions/StatefulStaleMetadataRemovalConfig"\n    },\n    "credential": {\n      "title": "Credential",\n      "description": "Google cloud storage [HMAC keys](https://cloud.google.com/storage/docs/authentication/hmackeys)",\n      "allOf": [\n        {\n          "$ref": "#/definitions/HMACKey"\n        }\n      ]\n    },\n    "max_rows": {\n      "title": "Max Rows",\n      "description": "Maximum number of rows to use when inferring schemas for TSV and CSV files.",\n      "default": 100,\n      "type": "integer"\n    },\n    "number_of_files_to_sample": {\n      "title": "Number Of Files To Sample",\n      "description": "Number of files to list to sample for schema inference. This will be ignored if sample_files is set to False in the pathspec.",\n      "default": 100,\n      "type": "integer"\n    }\n  },\n  "required": [\n    "path_specs",\n    "credential"\n  ],\n  "additionalProperties": false,\n  "definitions": {\n    "PathSpec": {\n      "title": "PathSpec",\n      "type": "object",\n      "properties": {\n        "include": {\n          "title": "Include",\n          "description": "Path to table. Name variable `{table}` is used to mark the folder with dataset. In absence of `{table}`, file level dataset will be created. Check below examples for more details.",\n          "type": "string"\n        },\n        "exclude": {\n          "title": "Exclude",\n          "description": "list of paths in glob pattern which will be excluded while scanning for the datasets",\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "file_types": {\n          "title": "File Types",\n          "description": "Files with extenstions specified here (subset of default value) only will be scanned to create dataset. Other files will be omitted.",\n          "default": [\n            "csv",\n            "tsv",\n            "json",\n            "parquet",\n            "avro"\n          ],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "default_extension": {\n          "title": "Default Extension",\n          "description": "For files without extension it will assume the specified file type. If it is not set the files without extensions will be skipped.",\n          "type": "string"\n        },\n        "table_name": {\n          "title": "Table Name",\n          "description": "Display name of the dataset.Combination of named variables from include path and strings",\n          "type": "string"\n        },\n        "enable_compression": {\n          "title": "Enable Compression",\n          "description": "Enable or disable processing compressed files. Currently .gz and .bz files are supported.",\n          "default": true,\n          "type": "boolean"\n        },\n        "sample_files": {\n          "title": "Sample Files",\n          "description": "Not listing all the files but only taking a handful amount of sample file to infer the schema. File count and file size calculation will be disabled. This can affect performance significantly if enabled",\n          "default": true,\n          "type": "boolean"\n        },\n        "allow_double_stars": {\n          "title": "Allow Double Stars",\n          "description": "Allow double stars in the include path. This can affect performance significantly if enabled",\n          "default": false,\n          "type": "boolean"\n        }\n      },\n      "required": [\n        "include"\n      ],\n      "additionalProperties": false\n    },\n    "DynamicTypedStateProviderConfig": {\n      "title": "DynamicTypedStateProviderConfig",\n      "type": "object",\n      "properties": {\n        "type": {\n          "title": "Type",\n          "description": "The type of the state provider to use. For DataHub use `datahub`",\n          "type": "string"\n        },\n        "config": {\n          "title": "Config",\n          "description": "The configuration required for initializing the state provider. Default: The datahub_api config if set at pipeline level. Otherwise, the default DatahubClientConfig. See the defaults (https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/graph/client.py#L19).",\n          "default": {},\n          "type": "object"\n        }\n      },\n      "required": [\n        "type"\n      ],\n      "additionalProperties": false\n    },\n    "StatefulStaleMetadataRemovalConfig": {\n      "title": "StatefulStaleMetadataRemovalConfig",\n      "description": "Base specialized config for Stateful Ingestion with stale metadata removal capability.",\n      "type": "object",\n      "properties": {\n        "enabled": {\n          "title": "Enabled",\n          "description": "Whether or not to enable stateful ingest. Default: True if a pipeline_name is set and either a datahub-rest sink or `datahub_api` is specified, otherwise False",\n          "default": false,\n          "type": "boolean"\n        },\n        "remove_stale_metadata": {\n          "title": "Remove Stale Metadata",\n          "description": "Soft-deletes the entities present in the last successful run but missing in the current run with stateful_ingestion enabled.",\n          "default": true,\n          "type": "boolean"\n        }\n      },\n      "additionalProperties": false\n    },\n    "HMACKey": {\n      "title": "HMACKey",\n      "type": "object",\n      "properties": {\n        "hmac_access_id": {\n          "title": "Hmac Access Id",\n          "description": "Access ID",\n          "type": "string"\n        },\n        "hmac_access_secret": {\n          "title": "Hmac Access Secret",\n          "description": "Secret",\n          "type": "string",\n          "writeOnly": true,\n          "format": "password"\n        }\n      },\n      "required": [\n        "hmac_access_id",\n        "hmac_access_secret"\n      ],\n      "additionalProperties": false\n    }\n  }\n}\n')))),(0,n.yg)("h3",{id:"path-specs"},"Path Specs"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Example - Dataset per file")),(0,n.yg)("p",null,"Bucket structure:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"test-gs-bucket\n\u251c\u2500\u2500 employees.csv\n\u2514\u2500\u2500 food_items.csv\n")),(0,n.yg)("p",null,"Path specs config"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"path_specs:\n    - include: gs://test-gs-bucket/*.csv\n\n")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Example - Datasets with partitions")),(0,n.yg)("p",null,"Bucket structure:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"test-gs-bucket\n\u251c\u2500\u2500 orders\n\u2502\xa0\xa0 \u2514\u2500\u2500 year=2022\n\u2502\xa0\xa0     \u2514\u2500\u2500 month=2\n\u2502\xa0\xa0         \u251c\u2500\u2500 1.parquet\n\u2502\xa0\xa0         \u2514\u2500\u2500 2.parquet\n\u2514\u2500\u2500 returns\n    \u2514\u2500\u2500 year=2021\n        \u2514\u2500\u2500 month=2\n            \u2514\u2500\u2500 1.parquet\n\n")),(0,n.yg)("p",null,"Path specs config:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"path_specs:\n    - include: gs://test-gs-bucket/{table}/{partition_key[0]}={partition[0]}/{partition_key[1]}={partition[1]}/*.parquet\n")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Example - Datasets with partition and exclude")),(0,n.yg)("p",null,"Bucket structure:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"test-gs-bucket\n\u251c\u2500\u2500 orders\n\u2502\xa0\xa0 \u2514\u2500\u2500 year=2022\n\u2502\xa0\xa0     \u2514\u2500\u2500 month=2\n\u2502\xa0\xa0         \u251c\u2500\u2500 1.parquet\n\u2502\xa0\xa0         \u2514\u2500\u2500 2.parquet\n\u2514\u2500\u2500 tmp_orders\n    \u2514\u2500\u2500 year=2021\n        \u2514\u2500\u2500 month=2\n            \u2514\u2500\u2500 1.parquet\n\n\n")),(0,n.yg)("p",null,"Path specs config:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"path_specs:\n    - include: gs://test-gs-bucket/{table}/{partition_key[0]}={partition[0]}/{partition_key[1]}={partition[1]}/*.parquet\n      exclude: \n        - **/tmp_orders/**\n")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Example - Datasets of mixed nature")),(0,n.yg)("p",null,"Bucket structure:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"test-gs-bucket\n\u251c\u2500\u2500 customers\n\u2502\xa0\xa0 \u251c\u2500\u2500 part1.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 part2.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 part3.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 part4.json\n\u251c\u2500\u2500 employees.csv\n\u251c\u2500\u2500 food_items.csv\n\u251c\u2500\u2500 tmp_10101000.csv\n\u2514\u2500\u2500  orders\n \xa0\xa0 \u2514\u2500\u2500 year=2022\n\xa0 \xa0     \u2514\u2500\u2500 month=2\n\xa0\xa0          \u251c\u2500\u2500 1.parquet\n\xa0\xa0          \u251c\u2500\u2500 2.parquet\n\xa0\xa0          \u2514\u2500\u2500 3.parquet\n\n")),(0,n.yg)("p",null,"Path specs config:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"path_specs:\n    - include: gs://test-gs-bucket/*.csv\n      exclude:\n        - **/tmp_10101000.csv\n    - include: gs://test-gs-bucket/{table}/*.json\n    - include: gs://test-gs-bucket/{table}/{partition_key[0]}={partition[0]}/{partition_key[1]}={partition[1]}/*.parquet\n")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Valid path_specs.include")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-python"},"gs://my-bucket/foo/tests/bar.avro # single file table   \ngs://my-bucket/foo/tests/*.* # mulitple file level tables\ngs://my-bucket/foo/tests/{table}/*.avro #table without partition\ngs://my-bucket/foo/tests/{table}/*/*.avro #table where partitions are not specified\ngs://my-bucket/foo/tests/{table}/*.* # table where no partitions as well as data type specified\ngs://my-bucket/{dept}/tests/{table}/*.avro # specifying keywords to be used in display name\ngs://my-bucket/{dept}/tests/{table}/{partition_key[0]}={partition[0]}/{partition_key[1]}={partition[1]}/*.avro # specify partition key and value format\ngs://my-bucket/{dept}/tests/{table}/{partition[0]}/{partition[1]}/{partition[2]}/*.avro # specify partition value only format\ngs://my-bucket/{dept}/tests/{table}/{partition[0]}/{partition[1]}/{partition[2]}/*.* # for all extensions\ngs://my-bucket/*/{table}/{partition[0]}/{partition[1]}/{partition[2]}/*.* # table is present at 2 levels down in bucket\ngs://my-bucket/*/*/{table}/{partition[0]}/{partition[1]}/{partition[2]}/*.* # table is present at 3 levels down in bucket\n")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Valid path_specs.exclude")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"*","*/tests/**"),(0,n.yg)("li",{parentName:"ul"},"gs://my-bucket/hr/**"),(0,n.yg)("li",{parentName:"ul"},"*",(0,n.yg)("em",{parentName:"li"},"/tests/"),".csv"),(0,n.yg)("li",{parentName:"ul"},"gs://my-bucket/foo/*/my_table/**")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Notes")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"{table} represents folder for which dataset will be created."),(0,n.yg)("li",{parentName:"ul"},"include path must end with (",(0,n.yg)("em",{parentName:"li"},".")," or *.","[ext]",") to represent leaf level."),(0,n.yg)("li",{parentName:"ul"},"if *.","[ext]"," is provided then only files with specified type will be scanned."),(0,n.yg)("li",{parentName:"ul"},"/*/ represents single folder."),(0,n.yg)("li",{parentName:"ul"},"{partition","[i]","} represents value of partition."),(0,n.yg)("li",{parentName:"ul"},"{partition_key","[i]","} represents name of the partition."),(0,n.yg)("li",{parentName:"ul"},"While extracting, \u201ci\u201d will be used to match partition_key to partition."),(0,n.yg)("li",{parentName:"ul"},"all folder levels need to be specified in include. Only exclude path can have ** like matching."),(0,n.yg)("li",{parentName:"ul"},"exclude path cannot have named variables ( {} )."),(0,n.yg)("li",{parentName:"ul"},"Folder names should not contain {, }, *, / in their names."),(0,n.yg)("li",{parentName:"ul"},"{folder} is reserved for internal working. please do not use in named variables.")),(0,n.yg)("p",null,"If you would like to write a more complicated function for resolving file names, then a {transformer} would be a good fit."),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"Specify as long fixed prefix ( with out /*/ ) as possible in ",(0,n.yg)("inlineCode",{parentName:"p"},"path_specs.include"),". This will reduce the scanning time and cost, specifically on Google Cloud Storage.")),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"If you are ingesting datasets from Google Cloud Storage, we recommend running the ingestion on a server in the same region to avoid high egress costs.")),(0,n.yg)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Class Name: ",(0,n.yg)("inlineCode",{parentName:"li"},"datahub.ingestion.source.gcs.gcs_source.GCSSource")),(0,n.yg)("li",{parentName:"ul"},"Browse on ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/gcs/gcs_source.py"},"GitHub"))),(0,n.yg)("h2",null,"Questions"),(0,n.yg)("p",null,"If you've got any questions on configuring ingestion for Google Cloud Storage, feel free to ping us on ",(0,n.yg)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack"),"."))}f.isMDXComponent=!0}}]);