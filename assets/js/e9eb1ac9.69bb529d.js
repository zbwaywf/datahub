"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[67054],{8391:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>u,default:()=>y,frontMatter:()=>d,metadata:()=>p,toc:()=>c});t(96540);var n=t(15680),i=t(53720),l=t(5400);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){return a=null!=a?a:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):function(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})),e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const d={title:"DataHub Lite (Experimental)",sidebar_label:"Lite (Experimental)",slug:"/datahub_lite",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/datahub_lite.md"},u="DataHub Lite (Experimental)",p={unversionedId:"docs/datahub_lite",id:"version-0.13.1/docs/datahub_lite",title:"DataHub Lite (Experimental)",description:"What is it?",source:"@site/versioned_docs/version-0.13.1/docs/datahub_lite.md",sourceDirName:"docs",slug:"/datahub_lite",permalink:"/docs/0.13.1/datahub_lite",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/datahub_lite.md",tags:[],version:"0.13.1",frontMatter:{title:"DataHub Lite (Experimental)",sidebar_label:"Lite (Experimental)",slug:"/datahub_lite",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/datahub_lite.md"},sidebar:"overviewSidebar",previous:{title:"CLI",permalink:"/docs/0.13.1/cli"},next:{title:"Act on Metadata Overview",permalink:"/docs/0.13.1/act-on-metadata"}},m={},c=[{value:"What is it?",id:"what-is-it",level:2},{value:"Features",id:"features",level:2},{value:"Architecture",id:"architecture",level:2},{value:"What is it not?",id:"what-is-it-not",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Importing Metadata",id:"importing-metadata",level:2},{value:"Forwarding to a central DataHub GMS over REST or Kafka",id:"forwarding-to-a-central-datahub-gms-over-rest-or-kafka",level:3},{value:"Importing from a file",id:"importing-from-a-file",level:3},{value:"Exploring Metadata",id:"exploring-metadata",level:2},{value:"List (ls)",id:"list-ls",level:3},{value:"Read (get)",id:"read-get",level:3},{value:"Get metadata for an entity filtered by specific aspect",id:"get-metadata-for-an-entity-filtered-by-specific-aspect",level:4},{value:"Get metadata using the urn of the entity",id:"get-metadata-using-the-urn-of-the-entity",level:4},{value:"Point-in-time Queries",id:"point-in-time-queries",level:4},{value:"Search (search)",id:"search-search",level:3},{value:"List Urns (list-urns)",id:"list-urns-list-urns",level:3},{value:"HTTP Server (serve)",id:"http-server-serve",level:3},{value:"Server Configuration",id:"server-configuration",level:4},{value:"Admin Commands",id:"admin-commands",level:2},{value:"Export Metadata (export)",id:"export-metadata-export",level:3},{value:"Clear (nuke)",id:"clear-nuke",level:3},{value:"Use a different file (init)",id:"use-a-different-file-init",level:3},{value:"Reindex",id:"reindex",level:3},{value:"Caveat Emptor!",id:"caveat-emptor",level:2},{value:"Advanced Options",id:"advanced-options",level:2},{value:"Tab Completion",id:"tab-completion",level:3},{value:"Option 1: Inline eval (easy, less performant)",id:"option-1-inline-eval-easy-less-performant",level:4},{value:"Option 2: External completion script (recommended, better performance)",id:"option-2-external-completion-script-recommended-better-performance",level:4}],h={toc:c},g="wrapper";function y(e){var{components:a}=e,t=o(e,["components"]);return(0,n.yg)(g,r(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(a){s(e,a,t[a])}))}return e}({},h,t),{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"datahub-lite-experimental"},"DataHub Lite (Experimental)"),(0,n.yg)("h2",{id:"what-is-it"},"What is it?"),(0,n.yg)("p",null,"DataHub Lite is a lightweight embeddable version of DataHub with no external dependencies. It is intended to enable local developer tooling use-cases such as simple access to metadata for scripts and other tools.\nDataHub Lite is compatible with the DataHub metadata format and all the ingestion connectors that DataHub supports.\nCurrently DataHub Lite uses DuckDB under the covers as its default storage layer, but that might change in the future."),(0,n.yg)("h2",{id:"features"},"Features"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Designed for the CLI"),(0,n.yg)("li",{parentName:"ul"},"Available as a Python library or REST API"),(0,n.yg)("li",{parentName:"ul"},"Ingest metadata from  all DataHub ingestion sources"),(0,n.yg)("li",{parentName:"ul"},"Metadata Reads",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"navigate metadata using a hierarchy"),(0,n.yg)("li",{parentName:"ul"},"get metadata for an entity"),(0,n.yg)("li",{parentName:"ul"},"search / query metadata across all entities"))),(0,n.yg)("li",{parentName:"ul"},"Forward metadata automatically to a central GMS or Kafka instance")),(0,n.yg)("h2",{id:"architecture"},"Architecture"),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/lite/lite_architecture.png",alt:"architecture"})),(0,n.yg)("h2",{id:"what-is-it-not"},"What is it not?"),(0,n.yg)("p",null,"DataHub Lite is NOT meant to be a replacement for the production Java DataHub server (",(0,n.yg)("a",{parentName:"p",href:"/docs/0.13.1/architecture/metadata-serving"},"datahub-gms"),"). It does not offer the full set of API-s that the DataHub GMS server does.\nThe following features are ",(0,n.yg)("strong",{parentName:"p"},"NOT")," supported:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Full-text search with ranking and relevance features"),(0,n.yg)("li",{parentName:"ul"},"Graph traversal of relationships (e.g. lineage)"),(0,n.yg)("li",{parentName:"ul"},"Metadata change stream over Kafka (only forwarding of writes is supported)"),(0,n.yg)("li",{parentName:"ul"},"GraphQL API")),(0,n.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.yg)("p",null,"To use ",(0,n.yg)("inlineCode",{parentName:"p"},"datahub lite")," commands, you need to install ",(0,n.yg)("a",{parentName:"p",href:"https://pypi.org/project/acryl-datahub/"},(0,n.yg)("inlineCode",{parentName:"a"},"acryl-datahub"))," > 0.9.6 (",(0,n.yg)("a",{parentName:"p",href:"/docs/0.13.1/cli#using-pip"},"install instructions"),") and the ",(0,n.yg)("inlineCode",{parentName:"p"},"datahub-lite")," plugin."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"pip install acryl-datahub[datahub-lite]\n")),(0,n.yg)("h2",{id:"importing-metadata"},"Importing Metadata"),(0,n.yg)("p",null,"To ingest metadata into DataHub Lite, all you have to do is change the ",(0,n.yg)("inlineCode",{parentName:"p"},"sink:")," in your recipe to be a ",(0,n.yg)("inlineCode",{parentName:"p"},"datahub-lite")," instance. See the detailed sink docs ",(0,n.yg)("a",{parentName:"p",href:"/docs/0.13.1/metadata-ingestion/sink_docs/datahub#datahub-lite-experimental"},"here"),".\nFor example, here is a simple recipe file that ingests mysql metadata into datahub-lite."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},"# mysql.in.dhub.yaml\nsource:\n  type: mysql\n  config:\n    host_port: localhost:3306\n    username: datahub\n    password: datahub\n\nsink:\n  type: datahub-lite\n")),(0,n.yg)("p",null,"By default, ",(0,n.yg)("inlineCode",{parentName:"p"},"lite")," will create a local instance under ",(0,n.yg)("inlineCode",{parentName:"p"},"~/.datahub/lite/"),"."),(0,n.yg)("p",null,"Ingesting metadata into DataHub Lite is as simple as running ingestion:\n",(0,n.yg)("inlineCode",{parentName:"p"},"datahub ingest -c mysql.in.dhub.yaml")),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"DataHub Lite currently doesn't support stateful ingestion, so you'll have to turn off stateful ingestion in your recipe to use it. This will be fixed shortly.")),(0,n.yg)("h3",{id:"forwarding-to-a-central-datahub-gms-over-rest-or-kafka"},"Forwarding to a central DataHub GMS over REST or Kafka"),(0,n.yg)("p",null,"DataHub Lite can be configured to forward all writes to a central DataHub GMS using either the REST API or the Kafka API.\nTo configure forwarding, add a ",(0,n.yg)("strong",{parentName:"p"},"forward_to")," section to your DataHub Lite config that conforms to a valid DataHub Sink configuration. Here is an example:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},'# mysql.in.dhub.yaml with forwarding to datahub-gms over REST\nsource:\n  type: mysql\n  config:\n    host_port: localhost:3306\n    username: datahub\n    password: datahub\n\nsink:\n  type: datahub-lite\n  config:\n    forward_to:\n      type: datahub-rest\n      config:\n        server: "http://datahub-gms:8080"\n')),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"Forwarding is currently best-effort, so there can be losses in metadata if the remote server is down. For a reliable sync mechanism, look at the ",(0,n.yg)("a",{parentName:"p",href:"#export-metadata-export"},"exporting metadata")," section to generate a standard metadata file.")),(0,n.yg)("h3",{id:"importing-from-a-file"},"Importing from a file"),(0,n.yg)("p",null,"As a convenient short-cut, you can import metadata from any standard DataHub metadata json file (e.g. generated via using a file sink) by issuing a ",(0,n.yg)("em",{parentName:"p"},"datahub lite import")," command. "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"> datahub lite import --file metadata_events.json\n\n")),(0,n.yg)("h2",{id:"exploring-metadata"},"Exploring Metadata"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"datahub lite")," group of commands provides a set of capabilities for you to explore the metadata you just ingested."),(0,n.yg)("h3",{id:"list-ls"},"List (ls)"),(0,n.yg)("p",null,"Listing functions like a directory structure that is customized based on the kind of system being explored. DataHub's metadata is automatically organized into databases, tables, views, dashboards, charts, etc."),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"Using the ",(0,n.yg)("inlineCode",{parentName:"p"},"ls")," command below is much more pleasant when you have tab completion enabled on your shell. Check out the ",(0,n.yg)("a",{parentName:"p",href:"#tab-completion"},"Setting up Tab Completion")," section at the bottom of the guide.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"> datahub lite ls /\ndatabases\nbi_tools\ntags\n# Stepping down one level\n> datahub lite ls /databases\nmysql\n# Stepping down another level\n> datahub lite ls /databases/mysql\ninstances\n...\n# At the final level\n> datahub lite ls /databases/mysql/instances/default/databases/datahub/tables/\nmetadata_aspect_v2\n\n# Listing a leaf entity functions just like the unix ls command\n> datahub lite ls /databases/mysql/instances/default/databases/datahub/tables/metadata_aspect_v2\nmetadata_aspect_v2\n")),(0,n.yg)("h3",{id:"read-get"},"Read (get)"),(0,n.yg)("p",null,"Once you have located a path of interest, you can read metadata at that entity, by issuing a ",(0,n.yg)("strong",{parentName:"p"},"get"),". You can additionally filter the metadata retrieved from an entity by the aspect type of the metadata (e.g. to request the schema, filter by the ",(0,n.yg)("strong",{parentName:"p"},"schemaMetadata")," aspect)."),(0,n.yg)("p",null,"Aside: If you are curious what all types of entities and aspects DataHub supports, check out the metadata model of entities like ",(0,n.yg)("a",{parentName:"p",href:"/docs/0.13.1/generated/metamodel/entities/dataset"},"Dataset"),", ",(0,n.yg)("a",{parentName:"p",href:"/docs/0.13.1/generated/metamodel/entities/dashboard"},"Dashboard")," etc."),(0,n.yg)("p",null,"The general template for the get responses looks like:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'{\n    "urn": <urn_of_the_entity>,\n    <aspect_name>: {\n        "value": <aspect_value>,    # aspect value as a dictionary\n        "systemMetadata": <system_metadata> # present if details are requested\n    }\n}\n')),(0,n.yg)("p",null,"Here is what executing a ",(0,n.yg)("em",{parentName:"p"},"get")," command looks like:"),(0,n.yg)("details",null,(0,n.yg)("summary",null,"Get metadata for an entity by path"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'> datahub lite get --path /databases/mysql/instances/default/databases/datahub/tables/metadata_aspect_v2\n{\n  "urn": "urn:li:dataset:(urn:li:dataPlatform:mysql,datahub.metadata_aspect_v2,PROD)",\n  "container": {\n    "value": {\n      "container": "urn:li:container:21d4204e13d5b984c58acad468ecdbdd"\n    }\n  },\n  "status": {\n    "value": {\n      "removed": false\n    }\n  },\n  "datasetProperties": {\n    "value": {\n      "customProperties": {},\n      "name": "metadata_aspect_v2",\n      "tags": []\n    }\n  },\n  "schemaMetadata": {\n    "value": {\n      "schemaName": "datahub.metadata_aspect_v2",\n      "platform": "urn:li:dataPlatform:mysql",\n      "version": 0,\n      "created": {\n        "time": 0,\n        "actor": "urn:li:corpuser:unknown"\n      },\n      "lastModified": {\n        "time": 0,\n        "actor": "urn:li:corpuser:unknown"\n      },\n      "hash": "",\n      "platformSchema": {\n        "com.linkedin.schema.MySqlDDL": {\n          "tableSchema": ""\n        }\n      },\n      "fields": [\n        {\n          "fieldPath": "urn",\n          "nullable": false,\n          "type": {\n            "type": {\n              "com.linkedin.schema.StringType": {}\n            }\n          },\n          "nativeDataType": "VARCHAR(collation=\'utf8mb4_bin\', length=500)",\n          "recursive": false,\n          "isPartOfKey": true\n        },\n        {\n          "fieldPath": "aspect",\n          "nullable": false,\n          "type": {\n            "type": {\n              "com.linkedin.schema.StringType": {}\n            }\n          },\n          "nativeDataType": "VARCHAR(collation=\'utf8mb4_bin\', length=200)",\n          "recursive": false,\n          "isPartOfKey": true\n        },\n        {\n          "fieldPath": "version",\n          "nullable": false,\n          "type": {\n            "type": {\n              "com.linkedin.schema.NumberType": {}\n            }\n          },\n          "nativeDataType": "BIGINT(display_width=20)",\n          "recursive": false,\n          "isPartOfKey": true\n        },\n        {\n          "fieldPath": "metadata",\n          "nullable": false,\n          "type": {\n            "type": {\n              "com.linkedin.schema.StringType": {}\n            }\n          },\n          "nativeDataType": "LONGTEXT(collation=\'utf8mb4_bin\')",\n          "recursive": false,\n          "isPartOfKey": false\n        },\n        {\n          "fieldPath": "systemmetadata",\n          "nullable": true,\n          "type": {\n            "type": {\n              "com.linkedin.schema.StringType": {}\n            }\n          },\n          "nativeDataType": "LONGTEXT(collation=\'utf8mb4_bin\')",\n          "recursive": false,\n          "isPartOfKey": false\n        },\n        {\n          "fieldPath": "createdon",\n          "nullable": false,\n          "type": {\n            "type": {\n              "com.linkedin.schema.TimeType": {}\n            }\n          },\n          "nativeDataType": "DATETIME(fsp=6)",\n          "recursive": false,\n          "isPartOfKey": false\n        },\n        {\n          "fieldPath": "createdby",\n          "nullable": false,\n          "type": {\n            "type": {\n              "com.linkedin.schema.StringType": {}\n            }\n          },\n          "nativeDataType": "VARCHAR(collation=\'utf8mb4_bin\', length=255)",\n          "recursive": false,\n          "isPartOfKey": false\n        },\n        {\n          "fieldPath": "createdfor",\n          "nullable": true,\n          "type": {\n            "type": {\n              "com.linkedin.schema.StringType": {}\n            }\n          },\n          "nativeDataType": "VARCHAR(collation=\'utf8mb4_bin\', length=255)",\n          "recursive": false,\n          "isPartOfKey": false\n        }\n      ]\n    }\n  },\n  "subTypes": {\n    "value": {\n      "typeNames": [\n        "table"\n      ]\n    }\n  }\n}\n'))),(0,n.yg)("h4",{id:"get-metadata-for-an-entity-filtered-by-specific-aspect"},"Get metadata for an entity filtered by specific aspect"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'> datahub lite get --path /databases/mysql/instances/default/databases/datahub/tables/metadata_aspect_v2 --aspect status\n{\n  "urn": "urn:li:dataset:(urn:li:dataPlatform:mysql,datahub.metadata_aspect_v2,PROD)",\n  "status": {\n    "value": {\n      "removed": false\n    }\n  }\n}\n')),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"Using the ",(0,n.yg)("inlineCode",{parentName:"p"},"get")," command by path is much more pleasant when you have tab completion enabled on your shell. Check out the ",(0,n.yg)("a",{parentName:"p",href:"#tab-completion"},"Setting up Tab Completion")," section at the bottom of the guide.")),(0,n.yg)("h4",{id:"get-metadata-using-the-urn-of-the-entity"},"Get metadata using the urn of the entity"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'> datahub lite get --urn "urn:li:dataset:(urn:li:dataPlatform:mysql,datahub.metadata_aspect_v2,PROD)" --aspect status\n{\n  "urn": "urn:li:dataset:(urn:li:dataPlatform:mysql,datahub.metadata_aspect_v2,PROD)",\n  "status": {\n    "value": {\n      "removed": false\n    }\n  }\n}\n')),(0,n.yg)("details",null,(0,n.yg)("summary",null,"Get metadata with additional details (systemMetadata)"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'> datahub lite get --path /databases/mysql/instances/default/databases/datahub/tables/metadata_aspect_v2 --aspect status --verbose\n{\n  "urn": "urn:li:dataset:(urn:li:dataPlatform:mysql,datahub.metadata_aspect_v2,PROD)",\n  "status": {\n    "value": {\n      "removed": false\n    },\n    "systemMetadata": {\n      "lastObserved": 1673982834666,\n      "runId": "mysql-2023_01_17-11_13_12",\n      "properties": {\n        "sysVersion": 1\n      }\n    }\n  }\n}\n'))),(0,n.yg)("h4",{id:"point-in-time-queries"},"Point-in-time Queries"),(0,n.yg)("p",null,"DataHub Lite preserves every version of metadata ingested, just like DataHub GMS. You can also query the metadata as of a specific point in time by adding the ",(0,n.yg)("em",{parentName:"p"},"--asof")," parameter to your ",(0,n.yg)("em",{parentName:"p"},"get")," command."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},'> datahub lite get "urn:li:dataset:(urn:li:dataPlatform:mysql,datahub.metadata_aspect_v2,PROD)" --aspect status --asof 2020-01-01\nnull\n\n> datahub lite get "urn:li:dataset:(urn:li:dataPlatform:mysql,datahub.metadata_aspect_v2,PROD)" --aspect status --asof 2023-01-16\n{\n  "urn": "urn:li:dataset:(urn:li:dataPlatform:mysql,datahub.metadata_aspect_v2,PROD)",\n  "status": {\n    "removed": false\n  }\n}\n')),(0,n.yg)("h3",{id:"search-search"},"Search (search)"),(0,n.yg)("p",null,"DataHub Lite also allows you to search using queries within the metadata using the ",(0,n.yg)("inlineCode",{parentName:"p"},"datahub lite search"),' command.\nYou can provide a free form search query like: "customer" and DataHub Lite will attempt to find entities that match the name customer either in the id of the entity or within the name fields of aspects in the entities.'),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},'> datahub lite search pet\n{"id": "urn:li:dataset:(urn:li:dataPlatform:looker,long_tail_companions.explore.long_tail_pets,PROD)", "aspect": "urn", "snippet": null}\n{"id": "urn:li:dataset:(urn:li:dataPlatform:looker,long_tail_companions.explore.long_tail_pets,PROD)", "aspect": "datasetProperties", "snippet": "{\\"customProperties\\": {\\"looker.explore.label\\": \\"Long Tail Pets\\", \\"looker.explore.file\\": \\"long_tail_companions.model.lkml\\"}, \\"externalUrl\\": \\"https://acryl.cloud.looker.com/explore/long_tail_companions/long_tail_pets\\", \\"name\\": \\"Long Tail Pets\\", \\"tags\\": []}"}\n')),(0,n.yg)("p",null,"You can also query the metadata precisely using DuckDB's ",(0,n.yg)("a",{parentName:"p",href:"https://duckdb.org/docs/extensions/json.html"},"JSON")," extract functions.\nWriting these functions requires that you understand the DataHub metadata model and how the data is laid out in DataHub Lite."),(0,n.yg)("p",null,"For example, to find all entities whose ",(0,n.yg)("em",{parentName:"p"},"datasetProperties")," aspect includes the ",(0,n.yg)("em",{parentName:"p"},"view_definition")," in its ",(0,n.yg)("em",{parentName:"p"},"customProperties")," sub-field, we can issue the following command:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"> datahub lite search --aspect datasetProperties --flavor exact \"metadata -> '$.customProperties' ->> '$.view_definition' IS NOT NULL\"\n")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'{"id": "urn:li:dataset:(urn:li:dataPlatform:mysql,information_schema.INNODB_MUTEXES,PROD)", "aspect": "datasetProperties", "snippet": "{\\"customProperties\\": {\\"view_definition\\": \\"CREATE TEMPORARY TABLE `INNODB_MUTEXES` (\\\\n  `NAME` varchar(4000) NOT NULL DEFAULT \'\',\\\\n  `CREATE_FILE` varchar(4000) NOT NULL DEFAULT \'\',\\\\n  `CREATE_LINE` int(11) unsigned NOT NULL DEFAULT 0,\\\\n  `OS_WAITS` bigint(21) unsigned NOT NULL DEFAULT 0\\\\n) ENGINE=MEMORY DEFAULT CHARSET=utf8\\", \\"is_view\\": \\"True\\"}, \\"name\\": \\"INNODB_MUTEXES\\", \\"tags\\": []}"}\n{"id": "urn:li:dataset:(urn:li:dataPlatform:mysql,information_schema.user_variables,PROD)", "aspect": "datasetProperties", "snippet": "{\\"customProperties\\": {\\"view_definition\\": \\"CREATE TEMPORARY TABLE `user_variables` (\\\\n  `VARIABLE_NAME` varchar(64) NOT NULL DEFAULT \'\',\\\\n  `VARIABLE_VALUE` varchar(2048) DEFAULT NULL,\\\\n  `VARIABLE_TYPE` varchar(64) NOT NULL DEFAULT \'\',\\\\n  `CHARACTER_SET_NAME` varchar(32) DEFAULT NULL\\\\n) ENGINE=MEMORY DEFAULT CHARSET=utf8\\", \\"is_view\\": \\"True\\"}, \\"name\\": \\"user_variables\\", \\"tags\\": []}"}\n{"id": "urn:li:dataset:(urn:li:dataPlatform:mysql,information_schema.INNODB_TABLESPACES_ENCRYPTION,PROD)", "aspect": "datasetProperties", "snippet": "{\\"customProperties\\": {\\"view_definition\\": \\"CREATE TEMPORARY TABLE `INNODB_TABLESPACES_ENCRYPTION` (\\\\n  `SPACE` int(11) unsigned NOT NULL DEFAULT 0,\\\\n  `NAME` varchar(655) DEFAULT NULL,\\\\n  `ENCRYPTION_SCHEME` int(11) unsigned NOT NULL DEFAULT 0,\\\\n  `KEYSERVER_REQUESTS` int(11) unsigned NOT NULL DEFAULT 0,\\\\n  `MIN_KEY_VERSION` int(11) unsigned NOT NULL DEFAULT 0,\\\\n  `CURRENT_KEY_VERSION` int(11) unsigned NOT NULL DEFAULT 0,\\\\n  `KEY_ROTATION_PAGE_NUMBER` bigint(21) unsigned DEFAULT NULL,\\\\n  `KEY_ROTATION_MAX_PAGE_NUMBER` bigint(21) unsigned DEFAULT NULL,\\\\n  `CURRENT_KEY_ID` int(11) unsigned NOT NULL DEFAULT 0,\\\\n  `ROTATING_OR_FLUSHING` int(1) NOT NULL DEFAULT 0\\\\n) ENGINE=MEMORY DEFAULT CHARSET=utf8\\", \\"is_view\\": \\"True\\"}, \\"name\\": \\"INNODB_TABLESPACES_ENCRYPTION\\", \\"tags\\": []}"}\n')),(0,n.yg)("p",null,"Search will return results that include the ",(0,n.yg)("em",{parentName:"p"},"id")," of the entity that matched along with the ",(0,n.yg)("em",{parentName:"p"},"aspect")," and the content of the aspect as part of the ",(0,n.yg)("em",{parentName:"p"},"snippet")," field. If you just want the ",(0,n.yg)("em",{parentName:"p"},"id")," of the entity to be returned, use the ",(0,n.yg)("em",{parentName:"p"},"--no-details")," flag."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"> datahub lite search --aspect datasetProperties --flavor exact \"metadata -> '$.customProperties' ->> '$.view_definition' IS NOT NULL\" --no-details\nurn:li:dataset:(urn:li:dataPlatform:mysql,information_schema.INNODB_SYS_FOREIGN,PROD)\nurn:li:dataset:(urn:li:dataPlatform:mysql,information_schema.INNODB_CMPMEM_RESET,PROD)\nurn:li:dataset:(urn:li:dataPlatform:mysql,information_schema.INNODB_FT_DEFAULT_STOPWORD,PROD)\nurn:li:dataset:(urn:li:dataPlatform:mysql,information_schema.INNODB_SYS_TABLES,PROD)\n...\nurn:li:dataset:(urn:li:dataPlatform:mysql,information_schema.INNODB_SYS_COLUMNS,PROD)\nurn:li:dataset:(urn:li:dataPlatform:mysql,information_schema.INNODB_FT_CONFIG,PROD)\nurn:li:dataset:(urn:li:dataPlatform:mysql,information_schema.USER_STATISTICS,PROD)\n")),(0,n.yg)("h3",{id:"list-urns-list-urns"},"List Urns (list-urns)"),(0,n.yg)("p",null,"List all the ids in the DataHub Lite instance."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"> datahub lite list-urns\nurn:li:container:21d4204e13d5b984c58acad468ecdbdd\nurn:li:dataset:(urn:li:dataPlatform:mysql,datahub.metadata_aspect_v2,PROD)\n\nurn:li:container:aa82e8309ce84acc350640647a54ca3b\nurn:li:dataset:(urn:li:dataPlatform:mysql,information_schema.ALL_PLUGINS,PROD)\nurn:li:dataset:(urn:li:dataPlatform:mysql,information_schema.APPLICABLE_ROLES,PROD)\nurn:li:dataset:(urn:li:dataPlatform:mysql,information_schema.CHARACTER_SETS,PROD)\nurn:li:dataset:(urn:li:dataPlatform:mysql,information_schema.CHECK_CONSTRAINTS,PROD)\nurn:li:dataset:(urn:li:dataPlatform:mysql,information_schema.COLLATIONS,PROD)\nurn:li:dataset:(urn:li:dataPlatform:mysql,information_schema.COLLATION_CHARACTER_SET_APPLICABILITY,PROD)\nurn:li:dataset:(urn:li:dataPlatform:mysql,information_schema.COLUMNS,PROD)\n...\n\n")),(0,n.yg)("h3",{id:"http-server-serve"},"HTTP Server (serve)"),(0,n.yg)("p",null,"DataHub Lite can be run as a lightweight HTTP server, exposing an OpenAPI spec over FastAPI."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"> datahub lite serve\nINFO:     Started server process [33364]\nINFO:     Waiting for application startup.\nINFO:     Application startup complete.\nINFO:     Uvicorn running on http://127.0.0.1:8979 (Press CTRL+C to quit)\n")),(0,n.yg)("p",null,"OpenAPI docs are available via your browser at the same port: http://localhost:8979"),(0,n.yg)("p",null,"The server exposes similar commands as the ",(0,n.yg)("strong",{parentName:"p"},"lite")," cli commands over HTTP:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"entities: list of all entity ids and get metadata for an entity"),(0,n.yg)("li",{parentName:"ul"},"browse: traverse the entity hierarchy in a path based way"),(0,n.yg)("li",{parentName:"ul"},"search: execute search against the metadata")),(0,n.yg)("h4",{id:"server-configuration"},"Server Configuration"),(0,n.yg)("p",null,"Configuration for the server is picked up from the standard location for the ",(0,n.yg)("strong",{parentName:"p"},"datahub")," cli: ",(0,n.yg)("strong",{parentName:"p"},"~/.datahubenv")," and can be created using ",(0,n.yg)("strong",{parentName:"p"},"datahub lite init"),"."),(0,n.yg)("p",null,"Here is a sample config file with the ",(0,n.yg)("strong",{parentName:"p"},"lite")," section filled out:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},"gms:\n  server: http://localhost:8080\n  token: ''\nlite:\n  config:\n    file: /Users/<username>/.datahub/lite/datahub.duckdb\n  type: duckdb\n  forward_to:\n    type: datahub-rest\n    server: \"http://datahub-gms:8080\n")),(0,n.yg)("h2",{id:"admin-commands"},"Admin Commands"),(0,n.yg)("h3",{id:"export-metadata-export"},"Export Metadata (export)"),(0,n.yg)("p",null,"The ",(0,n.yg)("em",{parentName:"p"},"export")," command allows you to export the contents of DataHub Lite into a metadata events file that you can then send to another DataHub instance (e.g. over REST)."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"> datahub lite export --file datahub_lite_export.json\nSuccessfully exported 1785 events to datahub_lite_export.json\n")),(0,n.yg)("h3",{id:"clear-nuke"},"Clear (nuke)"),(0,n.yg)("p",null,"If you want to clear your DataHub lite instance, you can just issue the ",(0,n.yg)("inlineCode",{parentName:"p"},"nuke")," command."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"> datahub lite nuke\nDataHub Lite destroyed at <path>\n")),(0,n.yg)("h3",{id:"use-a-different-file-init"},"Use a different file (init)"),(0,n.yg)("p",null,"By default, DataHub Lite will create and use a local duckdb instance located at ",(0,n.yg)("inlineCode",{parentName:"p"},"~/.datahub/lite/datahub.duckdb"),".\nIf you want to use a different location, you can configure it using the ",(0,n.yg)("inlineCode",{parentName:"p"},"datahub lite init")," command."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"> datahub lite init --type duckdb --file my_local_datahub.duckdb\nWill replace datahub lite config type='duckdb' config={'file': '/Users/<username>/.datahub/lite/datahub.duckdb', 'options': {}} with type='duckdb' config={'file': 'my_local_datahub.duckdb', 'options': {}} [y/N]: y\nDataHub Lite inited at my_local_datahub.duckdb\n")),(0,n.yg)("h3",{id:"reindex"},"Reindex"),(0,n.yg)("p",null,"DataHub Lite maintains a few derived tables to make access possible via both the native id (urn) as well as the logical path of the entity. The ",(0,n.yg)("inlineCode",{parentName:"p"},"reindex")," command recomputes these indexes."),(0,n.yg)("h2",{id:"caveat-emptor"},"Caveat Emptor!"),(0,n.yg)("p",null,"DataHub Lite is a very new project. Do not use it for production use-cases. The API-s and storage formats are subject to change and we get feedback from early adopters. That said, we are really interested in accepting PR-s and suggestions for improvements to this fledgling project."),(0,n.yg)("h2",{id:"advanced-options"},"Advanced Options"),(0,n.yg)("h3",{id:"tab-completion"},"Tab Completion"),(0,n.yg)("p",null,"Using the datahub lite commands like ",(0,n.yg)("inlineCode",{parentName:"p"},"ls")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"get")," is much more pleasant when you have tab completion enabled on your shell. Tab completion is supported on the command line through the ",(0,n.yg)("a",{parentName:"p",href:"https://click.palletsprojects.com/en/8.1.x/shell-completion/"},"Click Shell completion")," module.\nTo set up shell completion for your shell, follow the instructions below based on your shell variant:"),(0,n.yg)("h4",{id:"option-1-inline-eval-easy-less-performant"},"Option 1: Inline eval (easy, less performant)"),(0,n.yg)(i.A,{mdxType:"Tabs"},(0,n.yg)(l.A,{value:"zsh",label:"Zsh",default:!0,mdxType:"TabItem"},(0,n.yg)("p",null,"Add this to ~/.zshrc:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},'eval "$(_DATAHUB_COMPLETE=zsh_source datahub)"\n'))),(0,n.yg)(l.A,{value:"bash",label:"Bash",mdxType:"TabItem"},(0,n.yg)("p",null,"Add this to ~/.bashrc:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},'eval "$(_DATAHUB_COMPLETE=bash_source datahub)"\n')))),(0,n.yg)("h4",{id:"option-2-external-completion-script-recommended-better-performance"},"Option 2: External completion script (recommended, better performance)"),(0,n.yg)("p",null,"Using eval means that the command is invoked and evaluated every time a shell is started, which can delay shell responsiveness. To speed it up, write the generated script to a file, then source that."),(0,n.yg)(i.A,{mdxType:"Tabs"},(0,n.yg)(l.A,{value:"zsh",label:"Zsh",default:!0,mdxType:"TabItem"},(0,n.yg)("p",null,"Save the script somewhere."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"# the additional sed patches completion to be path oriented and not add spaces between each completed token\n_DATAHUB_COMPLETE=zsh_source datahub | sed 's;compadd;compadd -S /;' > ~/.datahub-complete.zsh\n")),(0,n.yg)("p",null,"Source the file in ~/.zshrc."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},". ~/.datahub-complete.zsh\n"))),(0,n.yg)(l.A,{value:"bash",label:"Bash",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"_DATAHUB_COMPLETE=bash_source datahub > ~/.datahub-complete.bash\n")),(0,n.yg)("p",null,"Source the file in ~/.bashrc."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},". ~/.datahub-complete.bash\n"))),(0,n.yg)(l.A,{value:"fish",label:"Fish",mdxType:"TabItem"},(0,n.yg)("p",null,"Save the script to ~/.config/fish/completions/datahub.fish:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"_DATAHUB_COMPLETE=fish_source datahub > ~/.config/fish/completions/datahub.fish\n")))))}y.isMDXComponent=!0}}]);