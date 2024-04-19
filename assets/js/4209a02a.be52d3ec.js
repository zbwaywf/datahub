"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[24304],{15680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>m});var r=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=r.createContext({}),p=function(e){var a=r.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},d=function(e){var a=p(e.components);return r.createElement(u.Provider,{value:a},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},g=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(t),g=n,m=s["".concat(u,".").concat(g)]||s[g]||c[g]||o;return t?r.createElement(m,i(i({ref:a},d),{},{components:t})):r.createElement(m,i({ref:a},d))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=g;var l={};for(var u in a)hasOwnProperty.call(a,u)&&(l[u]=a[u]);l.originalType=e,l[s]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6196:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});t(96540);var r=t(15680);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){return a=null!=a?a:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):function(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})),e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}const l={title:"DataHub Upgrade Docker Image",sidebar_label:"Upgrade Docker Image",slug:"/docker/datahub-upgrade",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docker/datahub-upgrade/README.md"},u="DataHub Upgrade Docker Image",p={unversionedId:"docker/datahub-upgrade/README",id:"docker/datahub-upgrade/README",title:"DataHub Upgrade Docker Image",description:"This container is used to automatically apply upgrades from one version of DataHub to another.",source:"@site/genDocs/docker/datahub-upgrade/README.md",sourceDirName:"docker/datahub-upgrade",slug:"/docker/datahub-upgrade",permalink:"/docs/docker/datahub-upgrade",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docker/datahub-upgrade/README.md",tags:[],version:"current",frontMatter:{title:"DataHub Upgrade Docker Image",sidebar_label:"Upgrade Docker Image",slug:"/docker/datahub-upgrade",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docker/datahub-upgrade/README.md"},sidebar:"overviewSidebar",previous:{title:"MetadataChangeProposal & MetadataChangeLog Events",permalink:"/docs/advanced/mcp-mcl"},next:{title:"No Code Metadata",permalink:"/docs/advanced/no-code-modeling"}},d={},s=[{value:"Supported Upgrades",id:"supported-upgrades",level:2},{value:"Environment Variables",id:"environment-variables",level:2},{value:"Arguments",id:"arguments",level:2}],c={toc:s},g="wrapper";function m(e){var{components:a}=e,t=i(e,["components"]);return(0,r.yg)(g,o(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(a){n(e,a,t[a])}))}return e}({},c,t),{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"datahub-upgrade-docker-image"},"DataHub Upgrade Docker Image"),(0,r.yg)("p",null,"This container is used to automatically apply upgrades from one version of DataHub to another."),(0,r.yg)("h2",{id:"supported-upgrades"},"Supported Upgrades"),(0,r.yg)("p",null,"As of today, there are 2 supported upgrades:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"NoCodeDataMigration"),": Performs a series of pre-flight qualification checks and then migrates metadata_aspect table data\nto metadata_aspect_v2 table. Arguments:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"- *batchSize* (Optional): The number of rows to migrate at a time. Defaults to 1000.\n- *batchDelayMs* (Optional): The number of milliseconds of delay between migrated batches. Used for rate limiting. Defaults to 250. \n- *dbType* (optional): The target DB type. Valid values are `MYSQL`, `MARIA`, `POSTGRES`. Defaults to `MYSQL`. \n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"NoCodeDataMigrationCleanup"),": Cleanses graph index, search index, and key-value store of legacy DataHub data (metadata_aspect table) once\nthe No Code Data Migration has completed successfully. No arguments. ")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"RestoreIndices"),": Restores indices by fetching the latest version of each aspect and producing MAE. Arguments:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"batchSize")," (Optional): The number of rows to migrate at a time. Defaults to 1000."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"batchDelayMs")," (Optional): The number of milliseconds of delay between migrated batches. Used for rate limiting. Defaults to 250. "),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"numThreads")," (Optional): The number of threads to use, defaults to 1. Note that this is not used if ",(0,r.yg)("inlineCode",{parentName:"li"},"urnBasedPagination")," is true."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"aspectName")," (Optional): The aspect name for producing events."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"urn")," (Optional): The urn for producing events."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"urnLike")," (Optional): The urn pattern for producing events, using ",(0,r.yg)("inlineCode",{parentName:"li"},"%")," as a wild card"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"urnBasedPagination")," (Optional): Paginate the SQL results using the urn + aspect string instead of ",(0,r.yg)("inlineCode",{parentName:"li"},"OFFSET"),". Defaults to false,\nthough should improve performance for large amounts of data."))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"RestoreBackup"),": Restores the storage stack from a backup of the local database"))),(0,r.yg)("h2",{id:"environment-variables"},"Environment Variables"),(0,r.yg)("p",null,"To run the ",(0,r.yg)("inlineCode",{parentName:"p"},"datahub-upgrade")," container, some environment variables must be provided in order to tell the upgrade CLI\nwhere the running DataHub containers reside. "),(0,r.yg)("p",null,"Below details the required configurations. By default, these configs are provided for local docker-compose deployments of\nDataHub within ",(0,r.yg)("inlineCode",{parentName:"p"},"docker/datahub-upgrade/env/docker.env"),". They assume that there is a Docker network called datahub_network\nwhere the DataHub containers can be found. "),(0,r.yg)("p",null,"These are also the variables used when the provided ",(0,r.yg)("inlineCode",{parentName:"p"},"datahub-upgrade.sh")," script is executed. To run the upgrade CLI for non-local deployments,\nfollow these steps: "),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},'Define new ".env" variable to hold your environment variables.')),(0,r.yg)("p",null,"The following variables may be provided: "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-aidl"},"# Required Environment Variables\nEBEAN_DATASOURCE_USERNAME=datahub\nEBEAN_DATASOURCE_PASSWORD=datahub\nEBEAN_DATASOURCE_HOST=<your-ebean-host>:3306\nEBEAN_DATASOURCE_URL=jdbc:mysql://<your-ebean-host>:3306/datahub?verifyServerCertificate=false&useSSL=true&useUnicode=yes&characterEncoding=UTF-8\nEBEAN_DATASOURCE_DRIVER=com.mysql.jdbc.Driver\n\nKAFKA_BOOTSTRAP_SERVER=<your-kafka-host>:29092\nKAFKA_SCHEMAREGISTRY_URL=http://<your-kafka-host>:8081\n\nELASTICSEARCH_HOST=<your-elastic-host>\nELASTICSEARCH_PORT=9200\n\nNEO4J_HOST=http://<your-neo-host>:7474\nNEO4J_URI=bolt://<your-neo-host>\nNEO4J_USERNAME=neo4j\nNEO4J_PASSWORD=datahub\n\nDATAHUB_GMS_HOST=<your-gms-host>>\nDATAHUB_GMS_PORT=8080\n\n# Datahub protocol (default http)\n# DATAHUB_GMS_PROTOCOL=http\n\nDATAHUB_MAE_CONSUMER_HOST=<your-mae-consumer-host>\nDATAHUB_MAE_CONSUMER_PORT=9091\n\n# Optional Arguments\n\n# Uncomment and set these to support SSL connection to Elasticsearch\n# ELASTICSEARCH_USE_SSL=\n# ELASTICSEARCH_SSL_PROTOCOL=\n# ELASTICSEARCH_SSL_SECURE_RANDOM_IMPL=\n# ELASTICSEARCH_SSL_TRUSTSTORE_FILE=\n# ELASTICSEARCH_SSL_TRUSTSTORE_TYPE=\n# ELASTICSEARCH_SSL_TRUSTSTORE_PASSWORD=\n# ELASTICSEARCH_SSL_KEYSTORE_FILE=\n# ELASTICSEARCH_SSL_KEYSTORE_TYPE=\n# ELASTICSEARCH_SSL_KEYSTORE_PASSWORD=\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Pull (or build) & execute the ",(0,r.yg)("inlineCode",{parentName:"li"},"datahub-upgrade")," container:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-aidl"},"docker pull acryldata/datahub-upgrade:head && docker run --env-file *path-to-custom-env-file.env* acryldata/datahub-upgrade:head -u NoCodeDataMigration\n")),(0,r.yg)("h2",{id:"arguments"},"Arguments"),(0,r.yg)("p",null,"The primary argument required by the datahub-upgrade container is the name of the upgrade to perform. This argument\ncan be specified using the ",(0,r.yg)("inlineCode",{parentName:"p"},"-u")," flag when running the ",(0,r.yg)("inlineCode",{parentName:"p"},"datahub-upgrade")," container. "),(0,r.yg)("p",null,'For example, to run the migration named "NoCodeDataMigration", you would do execute the following:'),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-aidl"},"./datahub-upgrade.sh -u NoCodeDataMigration\n")),(0,r.yg)("p",null,"OR"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-aidl"},"docker pull acryldata/datahub-upgrade:head && docker run --env-file env/docker.env acryldata/datahub-upgrade:head -u NoCodeDataMigration\n")),(0,r.yg)("p",null,"In addition to the required ",(0,r.yg)("inlineCode",{parentName:"p"},"-u")," argument, each upgrade may require specific arguments. You can provide arguments to individual\nupgrades using multiple ",(0,r.yg)("inlineCode",{parentName:"p"},"-a")," arguments. "),(0,r.yg)("p",null,"For example, the NoCodeDataMigration upgrade provides 2 optional arguments detailed above: ",(0,r.yg)("em",{parentName:"p"},"batchSize")," and ",(0,r.yg)("em",{parentName:"p"},"batchDelayMs"),".\nTo specify these, you can use a combination of ",(0,r.yg)("inlineCode",{parentName:"p"},"-a")," arguments and of the form ",(0,r.yg)("em",{parentName:"p"},"argumentName=argumentValue")," as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-aidl"},"./datahub-upgrade.sh -u NoCodeDataMigration -a batchSize=500 -a batchDelayMs=1000 // Small batches with 1 second delay. \n")),(0,r.yg)("p",null,"OR "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-aidl"},"docker pull acryldata/datahub-upgrade:head && docker run --env-file env/docker.env acryldata/datahub-upgrade:head -u NoCodeDataMigration -a batchSize=500 -a batchDelayMs=1000\n")))}m.isMDXComponent=!0}}]);