"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[65653],{68467:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>d,default:()=>f,frontMatter:()=>o,metadata:()=>g,toc:()=>y});t(96540);var n=t(15680),s=t(53720),i=t(5400);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){return a=null!=a?a:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):function(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})),e}function p(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}const o={sidebar_position:29,title:"LDAP",slug:"/generated/ingestion/sources/ldap",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/ldap.md"},d="LDAP",g={unversionedId:"docs/generated/ingestion/sources/ldap",id:"docs/generated/ingestion/sources/ldap",title:"LDAP",description:"Certified",source:"@site/genDocs/docs/generated/ingestion/sources/ldap.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/ldap",permalink:"/docs/generated/ingestion/sources/ldap",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/ldap.md",tags:[],version:"current",sidebarPosition:29,frontMatter:{sidebar_position:29,title:"LDAP",slug:"/generated/ingestion/sources/ldap",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/ldap.md"},sidebar:"overviewSidebar",previous:{title:"Kafka Connect",permalink:"/docs/generated/ingestion/sources/kafka-connect"},next:{title:"Looker",permalink:"/docs/generated/ingestion/sources/looker"}},m={},y=[{value:"Important Capabilities",id:"important-capabilities",level:3},{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Starter Recipe",id:"starter-recipe",level:3},{value:"Config Details",id:"config-details",level:3},{value:"Code Coordinates",id:"code-coordinates",level:3}],c={toc:y},u="wrapper";function f(e){var{components:a}=e,t=p(e,["components"]);return(0,n.yg)(u,r(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(a){l(e,a,t[a])}))}return e}({},c,t),{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"ldap"},"LDAP"),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"})),(0,n.yg)("h3",{id:"important-capabilities"},"Important Capabilities"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Capability"),(0,n.yg)("th",{parentName:"tr",align:null},"Status"),(0,n.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/metadata-ingestion/docs/dev_guides/stateful#stale-entity-removal"},"Detect Deleted Entities")),(0,n.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:null},"Optionally enabled via ",(0,n.yg)("inlineCode",{parentName:"td"},"stateful_ingestion.remove_stale_metadata"))))),(0,n.yg)("p",null,"This plugin extracts the following:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"People"),(0,n.yg)("li",{parentName:"ul"},"Names, emails, titles, and manager information for each person"),(0,n.yg)("li",{parentName:"ul"},"List of groups")),(0,n.yg)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,n.yg)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[ldap]'\n")),(0,n.yg)("h3",{id:"starter-recipe"},"Starter Recipe"),(0,n.yg)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,n.yg)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,n.yg)("p",null,"For general pointers on writing and running a recipe, see our ",(0,n.yg)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},'source:\n  type: "ldap"\n  config:\n    # Coordinates\n    ldap_server: ldap://localhost\n\n    # Credentials\n    ldap_user: "cn=admin,dc=example,dc=org"\n    ldap_password: "admin"\n\n    # Options\n    base_dn: "dc=example,dc=org"\n\nsink:\n  # sink configs\n')),(0,n.yg)("h3",{id:"config-details"},"Config Details"),(0,n.yg)(s.A,{mdxType:"Tabs"},(0,n.yg)(i.A,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,n.yg)("p",null,"Note that a ",(0,n.yg)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,n.yg)("div",{className:"config-table"},(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Field"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"base_dn"),"\xa0",(0,n.yg)("abbr",{title:"Required"},"\u2705"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"LDAP DN.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"ldap_password"),"\xa0",(0,n.yg)("abbr",{title:"Required"},"\u2705"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"LDAP password.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"ldap_server"),"\xa0",(0,n.yg)("abbr",{title:"Required"},"\u2705"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"LDAP server URL.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"ldap_user"),"\xa0",(0,n.yg)("abbr",{title:"Required"},"\u2705"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"LDAP user.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"drop_missing_first_last_name"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"If set to true, any users without first and last names will be dropped. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"True")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"filter"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"LDAP extractor filter. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"(objectClass=","*",")")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"group_attrs_map"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"object"))),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"default-line "},"Default: ",(0,n.yg)("span",{className:"default-value"},"{","}")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"manager_filter_enabled"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Use LDAP extractor filter to search managers. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"True")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"manager_pagination_enabled"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"[deprecated]"," Use pagination_enabled  ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"True")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"page_size"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"integer"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Size of each page to fetch when extracting metadata. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"20")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"pagination_enabled"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Use pagination while do search query (enabled by default). ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"True")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"platform_instance"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"The instance of the platform that all assets produced by this recipe belong to")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"use_email_as_username"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Use email for users' usernames instead of username (disabled by default).             If enabled, the user and group urn would be having email as the id part of the urn. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"False")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"user_attrs_map"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"object"))),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"default-line "},"Default: ",(0,n.yg)("span",{className:"default-value"},"{","}")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"env"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"The environment that all assets produced by this connector belong to ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"PROD")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"attrs_list"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"array"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Retrieved attributes list")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"attrs_list."),(0,n.yg)("span",{className:"path-main"},"string"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"custom_props_list"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"array"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"A list of custom attributes to extract from the LDAP provider.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"custom_props_list."),(0,n.yg)("span",{className:"path-main"},"string"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"stateful_ingestion"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"StatefulStaleMetadataRemovalConfig"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Base specialized config for Stateful Ingestion with stale metadata removal capability.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"stateful_ingestion."),(0,n.yg)("span",{className:"path-main"},"enabled"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Whether or not to enable stateful ingest. Default: True if a pipeline_name is set and either a datahub-rest sink or ",(0,n.yg)("inlineCode",{parentName:"td"},"datahub_api")," is specified, otherwise False ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"False")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"stateful_ingestion."),(0,n.yg)("span",{className:"path-main"},"remove_stale_metadata"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Soft-deletes the entities present in the last successful run but missing in the current run with stateful_ingestion enabled. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"True")))))))),(0,n.yg)(i.A,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,n.yg)("p",null,"The ",(0,n.yg)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "LDAPSourceConfig",\n  "description": "Config used by the LDAP Source.",\n  "type": "object",\n  "properties": {\n    "env": {\n      "title": "Env",\n      "description": "The environment that all assets produced by this connector belong to",\n      "default": "PROD",\n      "type": "string"\n    },\n    "platform_instance": {\n      "title": "Platform Instance",\n      "description": "The instance of the platform that all assets produced by this recipe belong to",\n      "type": "string"\n    },\n    "stateful_ingestion": {\n      "$ref": "#/definitions/StatefulStaleMetadataRemovalConfig"\n    },\n    "ldap_server": {\n      "title": "Ldap Server",\n      "description": "LDAP server URL.",\n      "type": "string"\n    },\n    "ldap_user": {\n      "title": "Ldap User",\n      "description": "LDAP user.",\n      "type": "string"\n    },\n    "ldap_password": {\n      "title": "Ldap Password",\n      "description": "LDAP password.",\n      "type": "string"\n    },\n    "base_dn": {\n      "title": "Base Dn",\n      "description": "LDAP DN.",\n      "type": "string"\n    },\n    "filter": {\n      "title": "Filter",\n      "description": "LDAP extractor filter.",\n      "default": "(objectClass=*)",\n      "type": "string"\n    },\n    "attrs_list": {\n      "title": "Attrs List",\n      "description": "Retrieved attributes list",\n      "type": "array",\n      "items": {\n        "type": "string"\n      }\n    },\n    "custom_props_list": {\n      "title": "Custom Props List",\n      "description": "A list of custom attributes to extract from the LDAP provider.",\n      "type": "array",\n      "items": {\n        "type": "string"\n      }\n    },\n    "drop_missing_first_last_name": {\n      "title": "Drop Missing First Last Name",\n      "description": "If set to true, any users without first and last names will be dropped.",\n      "default": true,\n      "type": "boolean"\n    },\n    "page_size": {\n      "title": "Page Size",\n      "description": "Size of each page to fetch when extracting metadata.",\n      "default": 20,\n      "type": "integer"\n    },\n    "manager_filter_enabled": {\n      "title": "Manager Filter Enabled",\n      "description": "Use LDAP extractor filter to search managers.",\n      "default": true,\n      "type": "boolean"\n    },\n    "manager_pagination_enabled": {\n      "title": "Manager Pagination Enabled",\n      "description": "[deprecated] Use pagination_enabled ",\n      "default": true,\n      "type": "boolean"\n    },\n    "pagination_enabled": {\n      "title": "Pagination Enabled",\n      "description": "Use pagination while do search query (enabled by default).",\n      "default": true,\n      "type": "boolean"\n    },\n    "use_email_as_username": {\n      "title": "Use Email As Username",\n      "description": "Use email for users\' usernames instead of username (disabled by default).             If enabled, the user and group urn would be having email as the id part of the urn.",\n      "default": false,\n      "type": "boolean"\n    },\n    "user_attrs_map": {\n      "title": "User Attrs Map",\n      "default": {},\n      "type": "object"\n    },\n    "group_attrs_map": {\n      "title": "Group Attrs Map",\n      "default": {},\n      "type": "object"\n    }\n  },\n  "required": [\n    "ldap_server",\n    "ldap_user",\n    "ldap_password",\n    "base_dn"\n  ],\n  "additionalProperties": false,\n  "definitions": {\n    "DynamicTypedStateProviderConfig": {\n      "title": "DynamicTypedStateProviderConfig",\n      "type": "object",\n      "properties": {\n        "type": {\n          "title": "Type",\n          "description": "The type of the state provider to use. For DataHub use `datahub`",\n          "type": "string"\n        },\n        "config": {\n          "title": "Config",\n          "description": "The configuration required for initializing the state provider. Default: The datahub_api config if set at pipeline level. Otherwise, the default DatahubClientConfig. See the defaults (https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/graph/client.py#L19).",\n          "default": {},\n          "type": "object"\n        }\n      },\n      "required": [\n        "type"\n      ],\n      "additionalProperties": false\n    },\n    "StatefulStaleMetadataRemovalConfig": {\n      "title": "StatefulStaleMetadataRemovalConfig",\n      "description": "Base specialized config for Stateful Ingestion with stale metadata removal capability.",\n      "type": "object",\n      "properties": {\n        "enabled": {\n          "title": "Enabled",\n          "description": "Whether or not to enable stateful ingest. Default: True if a pipeline_name is set and either a datahub-rest sink or `datahub_api` is specified, otherwise False",\n          "default": false,\n          "type": "boolean"\n        },\n        "remove_stale_metadata": {\n          "title": "Remove Stale Metadata",\n          "description": "Soft-deletes the entities present in the last successful run but missing in the current run with stateful_ingestion enabled.",\n          "default": true,\n          "type": "boolean"\n        }\n      },\n      "additionalProperties": false\n    }\n  }\n}\n')))),(0,n.yg)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Class Name: ",(0,n.yg)("inlineCode",{parentName:"li"},"datahub.ingestion.source.ldap.LDAPSource")),(0,n.yg)("li",{parentName:"ul"},"Browse on ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/ldap.py"},"GitHub"))),(0,n.yg)("h2",null,"Questions"),(0,n.yg)("p",null,"If you've got any questions on configuring ingestion for LDAP, feel free to ping us on ",(0,n.yg)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack"),"."))}f.isMDXComponent=!0}}]);