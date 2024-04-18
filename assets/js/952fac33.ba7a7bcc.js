"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[73857],{16494:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>p,metadata:()=>m,toc:()=>u});a(67294);var n=a(3905),i=a(51715),r=a(7626);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}const p={sidebar_position:23,title:"JSON Schemas",slug:"/generated/ingestion/sources/json-schema",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/json-schema.md"},c="JSON Schemas",m={unversionedId:"docs/generated/ingestion/sources/json-schema",id:"version-0.13.0/docs/generated/ingestion/sources/json-schema",title:"JSON Schemas",description:"Incubating",source:"@site/versioned_docs/version-0.13.0/docs/generated/ingestion/sources/json-schema.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/json-schema",permalink:"/docs/0.13.0/generated/ingestion/sources/json-schema",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/json-schema.md",tags:[],version:"0.13.0",sidebarPosition:23,frontMatter:{sidebar_position:23,title:"JSON Schemas",slug:"/generated/ingestion/sources/json-schema",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/json-schema.md"},sidebar:"overviewSidebar",previous:{title:"Iceberg",permalink:"/docs/0.13.0/generated/ingestion/sources/iceberg"},next:{title:"Kafka",permalink:"/docs/0.13.0/generated/ingestion/sources/kafka"}},d={},u=[{value:"Important Capabilities",id:"important-capabilities",level:3},{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Starter Recipe",id:"starter-recipe",level:3},{value:"Config Details",id:"config-details",level:3},{value:"Configuration Notes",id:"configuration-notes",level:4},{value:"Code Coordinates",id:"code-coordinates",level:3}],h={toc:u},f="wrapper";function g(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)(f,l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){s(e,t,a[t])}))}return e}({},h,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"json-schemas"},"JSON Schemas"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-incubating-blue",alt:"Incubating"})),(0,n.kt)("h3",{id:"important-capabilities"},"Important Capabilities"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Capability"),(0,n.kt)("th",{parentName:"tr",align:null},"Status"),(0,n.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Descriptions"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null},"Extracts descriptions at top level and field level")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/0.13.0/metadata-ingestion/docs/dev_guides/stateful#stale-entity-removal"},"Detect Deleted Entities")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null},"With stateful ingestion enabled, will remove entities from DataHub if they are no longer present in the source")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Extract Ownership"),(0,n.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:null},"Does not currently support extracting ownership")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Extract Tags"),(0,n.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:null},"Does not currently support extracting tags")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/0.13.0/platform-instances"},"Platform Instance")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null},"Supports platform instance via config")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Schema Metadata"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null},"Extracts schemas, following references")))),(0,n.kt)("p",null,"This source extracts metadata from a single JSON Schema or multiple JSON Schemas rooted at a particular path.\nIt performs reference resolution based on the ",(0,n.kt)("inlineCode",{parentName:"p"},"$ref")," keyword."),(0,n.kt)("p",null,"Metadata mapping:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Schemas are mapped to Datasets with sub-type Schema"),(0,n.kt)("li",{parentName:"ul"},"The name of the Schema (Dataset) is inferred from the ",(0,n.kt)("inlineCode",{parentName:"li"},"$id")," property and if that is missing, the file name."),(0,n.kt)("li",{parentName:"ul"},"Browse paths are minted based on the path")),(0,n.kt)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,n.kt)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[json-schema]'\n")),(0,n.kt)("h3",{id:"starter-recipe"},"Starter Recipe"),(0,n.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,n.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,n.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.13.0/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"pipeline_name: json_schema_ingestion\nsource:\n  type: json-schema\n  config:\n    path: <path_to_json_file_or_directory or url> # e.g. https://json.schemastore.org/petstore-v1.0.json\n    platform: <choose a platform that you want schemas to live under> # e.g. schemaregistry\n    # platform_instance: <add a platform_instance if there are multiple schema repositories>\n    stateful_ingestion:\n      enabled: true # recommended to have this turned on\n\n# sink configs if needed\n")),(0,n.kt)("h3",{id:"config-details"},"Config Details"),(0,n.kt)(i.Z,{mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,n.kt)("p",null,"Note that a ",(0,n.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,n.kt)("div",{className:"config-table"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-main"},"path"),"\xa0",(0,n.kt)("abbr",{title:"Required"},"\u2705"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"One of string(file-path), string(directory-path), string(uri)"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set this to a single file-path or a directory-path (for recursive traversal) or a remote url. e.g. ",(0,n.kt)("a",{parentName:"td",href:"https://json.schemastore.org/petstore-v1.0.json"},"https://json.schemastore.org/petstore-v1.0.json"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-main"},"platform"),"\xa0",(0,n.kt)("abbr",{title:"Required"},"\u2705"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"string"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set this to a platform that you want all schemas to live under. e.g. schemaregistry / schemarepo etc.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-main"},"platform_instance"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"string"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"The instance of the platform that all assets produced by this recipe belong to")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-main"},"use_id_as_base_uri"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"boolean"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"When enabled, uses the ",(0,n.kt)("inlineCode",{parentName:"td"},"$id")," field in the json schema as the base uri for following references. ",(0,n.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.kt)("span",{className:"default-value"},"False")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-main"},"env"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"string"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"The environment that all assets produced by this connector belong to ",(0,n.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.kt)("span",{className:"default-value"},"PROD")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-main"},"uri_replace_pattern"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"URIReplacePattern"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Use this if URI-s need to be modified during reference resolution. Simple string match - replace capabilities are supported.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-prefix"},"uri_replace_pattern."),(0,n.kt)("span",{className:"path-main"},"match"),"\xa0",(0,n.kt)("abbr",{title:"Required if uri_replace_pattern is set"},"\u2753"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"string"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Pattern to match on uri-s as part of reference resolution. See replace field")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-prefix"},"uri_replace_pattern."),(0,n.kt)("span",{className:"path-main"},"replace"),"\xa0",(0,n.kt)("abbr",{title:"Required if uri_replace_pattern is set"},"\u2753"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"string"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Pattern to replace with as part of reference resolution. See match field")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-main"},"stateful_ingestion"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"StatefulStaleMetadataRemovalConfig"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Base specialized config for Stateful Ingestion with stale metadata removal capability.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-prefix"},"stateful_ingestion."),(0,n.kt)("span",{className:"path-main"},"enabled"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"boolean"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"The type of the ingestion state provider registered with datahub. ",(0,n.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.kt)("span",{className:"default-value"},"False")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-prefix"},"stateful_ingestion."),(0,n.kt)("span",{className:"path-main"},"remove_stale_metadata"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"boolean"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Soft-deletes the entities present in the last successful run but missing in the current run with stateful_ingestion enabled. ",(0,n.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.kt)("span",{className:"default-value"},"True")))))))),(0,n.kt)(r.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "JsonSchemaSourceConfig",\n  "description": "Base configuration class for stateful ingestion for source configs to inherit from.",\n  "type": "object",\n  "properties": {\n    "env": {\n      "title": "Env",\n      "description": "The environment that all assets produced by this connector belong to",\n      "default": "PROD",\n      "type": "string"\n    },\n    "platform_instance": {\n      "title": "Platform Instance",\n      "description": "The instance of the platform that all assets produced by this recipe belong to",\n      "type": "string"\n    },\n    "stateful_ingestion": {\n      "$ref": "#/definitions/StatefulStaleMetadataRemovalConfig"\n    },\n    "path": {\n      "title": "Path",\n      "description": "Set this to a single file-path or a directory-path (for recursive traversal) or a remote url. e.g. https://json.schemastore.org/petstore-v1.0.json",\n      "anyOf": [\n        {\n          "type": "string",\n          "format": "file-path"\n        },\n        {\n          "type": "string",\n          "format": "directory-path"\n        },\n        {\n          "type": "string",\n          "minLength": 1,\n          "maxLength": 65536,\n          "format": "uri"\n        }\n      ]\n    },\n    "platform": {\n      "title": "Platform",\n      "description": "Set this to a platform that you want all schemas to live under. e.g. schemaregistry / schemarepo etc.",\n      "type": "string"\n    },\n    "use_id_as_base_uri": {\n      "title": "Use Id As Base Uri",\n      "description": "When enabled, uses the `$id` field in the json schema as the base uri for following references.",\n      "default": false,\n      "type": "boolean"\n    },\n    "uri_replace_pattern": {\n      "title": "Uri Replace Pattern",\n      "description": "Use this if URI-s need to be modified during reference resolution. Simple string match - replace capabilities are supported.",\n      "allOf": [\n        {\n          "$ref": "#/definitions/URIReplacePattern"\n        }\n      ]\n    }\n  },\n  "required": [\n    "path",\n    "platform"\n  ],\n  "additionalProperties": false,\n  "definitions": {\n    "DynamicTypedStateProviderConfig": {\n      "title": "DynamicTypedStateProviderConfig",\n      "type": "object",\n      "properties": {\n        "type": {\n          "title": "Type",\n          "description": "The type of the state provider to use. For DataHub use `datahub`",\n          "type": "string"\n        },\n        "config": {\n          "title": "Config",\n          "description": "The configuration required for initializing the state provider. Default: The datahub_api config if set at pipeline level. Otherwise, the default DatahubClientConfig. See the defaults (https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/graph/client.py#L19).",\n          "default": {},\n          "type": "object"\n        }\n      },\n      "required": [\n        "type"\n      ],\n      "additionalProperties": false\n    },\n    "StatefulStaleMetadataRemovalConfig": {\n      "title": "StatefulStaleMetadataRemovalConfig",\n      "description": "Base specialized config for Stateful Ingestion with stale metadata removal capability.",\n      "type": "object",\n      "properties": {\n        "enabled": {\n          "title": "Enabled",\n          "description": "The type of the ingestion state provider registered with datahub.",\n          "default": false,\n          "type": "boolean"\n        },\n        "remove_stale_metadata": {\n          "title": "Remove Stale Metadata",\n          "description": "Soft-deletes the entities present in the last successful run but missing in the current run with stateful_ingestion enabled.",\n          "default": true,\n          "type": "boolean"\n        }\n      },\n      "additionalProperties": false\n    },\n    "URIReplacePattern": {\n      "title": "URIReplacePattern",\n      "type": "object",\n      "properties": {\n        "match": {\n          "title": "Match",\n          "description": "Pattern to match on uri-s as part of reference resolution. See replace field",\n          "type": "string"\n        },\n        "replace": {\n          "title": "Replace",\n          "description": "Pattern to replace with as part of reference resolution. See match field",\n          "type": "string"\n        }\n      },\n      "required": [\n        "match",\n        "replace"\n      ],\n      "additionalProperties": false\n    }\n  }\n}\n')))),(0,n.kt)("h4",{id:"configuration-notes"},"Configuration Notes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You must provide a ",(0,n.kt)("inlineCode",{parentName:"li"},"platform")," field. Most organizations have custom project names for their schema repositories, so you can pick whatever name makes sense. For example, you might want to call your schema platform ",(0,n.kt)("strong",{parentName:"li"},"schemaregistry"),". After picking a custom platform, you can use the ",(0,n.kt)("a",{parentName:"li",href:"/docs/0.13.0/cli#put-platform"},"put platform")," command to register your custom platform into DataHub.")),(0,n.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Class Name: ",(0,n.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.schema.json_schema.JsonSchemaSource")),(0,n.kt)("li",{parentName:"ul"},"Browse on ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/schema/json_schema.py"},"GitHub"))),(0,n.kt)("h2",null,"Questions"),(0,n.kt)("p",null,"If you've got any questions on configuring ingestion for JSON Schemas, feel free to ping us on ",(0,n.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack"),"."))}g.isMDXComponent=!0}}]);