"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8152],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>c});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),u=d(a),c=i,m=u["".concat(s,".").concat(c)]||u[c]||p[c]||l;return a?n.createElement(m,o(o({ref:t},h),{},{components:a})):n.createElement(m,o({ref:t},h))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,o=new Array(l);o[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},83010:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var n=a(83117),i=(a(67294),a(3905));const l={title:"Updating DataHub",slug:"/how/updating-datahub",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/updating-datahub.md"},o="Updating DataHub",r={unversionedId:"docs/how/updating-datahub",id:"docs/how/updating-datahub",title:"Updating DataHub",description:"This file documents any backwards-incompatible changes in DataHub and assists people when migrating to a new version.",source:"@site/genDocs/docs/how/updating-datahub.md",sourceDirName:"docs/how",slug:"/how/updating-datahub",permalink:"/docs/how/updating-datahub",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/how/updating-datahub.md",tags:[],version:"current",frontMatter:{title:"Updating DataHub",slug:"/how/updating-datahub",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/updating-datahub.md"},sidebar:"overviewSidebar",previous:{title:"No Code Upgrade (In-Place Migration Guide)",permalink:"/docs/advanced/no-code-upgrade"},next:{title:"Which DataHub API is for me?",permalink:"/docs/api/datahub-apis"}},s={},d=[{value:"Next",id:"next",level:2},{value:"Breaking Changes",id:"breaking-changes",level:3},{value:"Potential Downtime",id:"potential-downtime",level:3},{value:"Deprecations",id:"deprecations",level:3},{value:"Other notable Changes",id:"other-notable-changes",level:3},{value:"0.10.0",id:"0100",level:2},{value:"Breaking Changes",id:"breaking-changes-1",level:3},{value:"Potential Downtime",id:"potential-downtime-1",level:3},{value:"Helm Notes",id:"helm-notes",level:4},{value:"Deprecations",id:"deprecations-1",level:3},{value:"0.9.6",id:"096",level:2},{value:"Breaking Changes",id:"breaking-changes-2",level:3},{value:"Potential Downtime",id:"potential-downtime-2",level:3},{value:"Deprecations",id:"deprecations-2",level:3},{value:"Other notable Changes",id:"other-notable-changes-1",level:3},{value:"0.9.4 / 0.9.5",id:"094--095",level:2},{value:"Breaking Changes",id:"breaking-changes-3",level:3},{value:"Potential Downtime",id:"potential-downtime-3",level:3},{value:"Deprecations",id:"deprecations-3",level:3},{value:"Other notable Changes",id:"other-notable-changes-2",level:3},{value:"0.9.3",id:"093",level:2},{value:"Breaking Changes",id:"breaking-changes-4",level:3},{value:"Potential Downtime",id:"potential-downtime-4",level:3},{value:"Deprecations",id:"deprecations-4",level:3},{value:"Other notable Changes",id:"other-notable-changes-3",level:3},{value:"0.9.2",id:"092",level:2},{value:"Breaking Changes",id:"breaking-changes-5",level:3},{value:"Potential Downtime",id:"potential-downtime-5",level:3},{value:"Deprecations",id:"deprecations-5",level:3},{value:"Other notable Changes",id:"other-notable-changes-4",level:3},{value:"0.9.1",id:"091",level:2},{value:"Breaking Changes",id:"breaking-changes-6",level:3},{value:"Potential Downtime",id:"potential-downtime-6",level:3},{value:"Deprecations",id:"deprecations-6",level:3},{value:"Other notable Changes",id:"other-notable-changes-5",level:3},{value:"0.9.0",id:"090",level:2},{value:"Breaking Changes",id:"breaking-changes-7",level:3},{value:"Potential Downtime",id:"potential-downtime-7",level:3},{value:"Deprecations",id:"deprecations-7",level:3},{value:"Other notable Changes",id:"other-notable-changes-6",level:3},{value:"<code>v0.8.45</code>",id:"v0845",level:2},{value:"Breaking Changes",id:"breaking-changes-8",level:3},{value:"Potential Downtime",id:"potential-downtime-8",level:3},{value:"Deprecations",id:"deprecations-8",level:3},{value:"Other notable Changes",id:"other-notable-changes-7",level:3},{value:"<code>v0.8.44</code>",id:"v0844",level:2},{value:"Breaking Changes",id:"breaking-changes-9",level:3},{value:"Potential Downtime",id:"potential-downtime-9",level:3},{value:"Deprecations",id:"deprecations-9",level:3},{value:"Other notable Changes",id:"other-notable-changes-8",level:3},{value:"<code>v0.8.42</code>",id:"v0842",level:2},{value:"Breaking Changes",id:"breaking-changes-10",level:3},{value:"Potential Downtime",id:"potential-downtime-10",level:3},{value:"Deprecations",id:"deprecations-10",level:3},{value:"Other notable Changes",id:"other-notable-changes-9",level:3},{value:"<code>v0.8.41</code>",id:"v0841",level:2},{value:"Breaking Changes",id:"breaking-changes-11",level:3},{value:"Potential Downtime",id:"potential-downtime-11",level:3},{value:"Deprecations",id:"deprecations-11",level:3},{value:"Other notable Changes",id:"other-notable-changes-10",level:3},{value:"<code>v0.8.40</code>",id:"v0840",level:2},{value:"Breaking Changes",id:"breaking-changes-12",level:3},{value:"Potential Downtime",id:"potential-downtime-12",level:3},{value:"Deprecations",id:"deprecations-12",level:3},{value:"Other notable Changes",id:"other-notable-changes-11",level:3},{value:"<code>v0.8.39</code>",id:"v0839",level:2},{value:"Breaking Changes",id:"breaking-changes-13",level:3},{value:"Potential Downtime",id:"potential-downtime-13",level:3},{value:"Deprecations",id:"deprecations-13",level:3},{value:"Other notable Changes",id:"other-notable-changes-12",level:3},{value:"<code>v0.8.38</code>",id:"v0838",level:2},{value:"Breaking Changes",id:"breaking-changes-14",level:3},{value:"Potential Downtime",id:"potential-downtime-14",level:3},{value:"Deprecations",id:"deprecations-14",level:3},{value:"Other notable Changes",id:"other-notable-changes-13",level:3},{value:"<code>v0.8.36</code>",id:"v0836",level:2},{value:"Breaking Changes",id:"breaking-changes-15",level:3},{value:"Potential Downtime",id:"potential-downtime-15",level:3},{value:"Deprecations",id:"deprecations-15",level:3},{value:"Other notable Changes",id:"other-notable-changes-14",level:3},{value:"<code>v0.8.35</code>",id:"v0835",level:2},{value:"Breaking Changes",id:"breaking-changes-16",level:3},{value:"Potential Downtime",id:"potential-downtime-16",level:3},{value:"Deprecations",id:"deprecations-16",level:3},{value:"Other notable Changes",id:"other-notable-changes-15",level:3},{value:"<code>v0.8.34</code>",id:"v0834",level:2},{value:"Breaking Changes",id:"breaking-changes-17",level:3},{value:"Potential Downtime",id:"potential-downtime-17",level:3},{value:"Deprecations",id:"deprecations-17",level:3},{value:"Other notable Changes",id:"other-notable-changes-16",level:3}],h={toc:d};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"updating-datahub"},"Updating DataHub"),(0,i.kt)("p",null,"This file documents any backwards-incompatible changes in DataHub and assists people when migrating to a new version."),(0,i.kt)("h2",{id:"next"},"Next"),(0,i.kt)("h3",{id:"breaking-changes"},"Breaking Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"#7016 Add ",(0,i.kt)("inlineCode",{parentName:"li"},"add_database_name_to_urn")," flag to Oracle source which ensure that Dataset urns have the DB name as a prefix to prevent collision (.e.g. {database}.{schema}.{table}). ONLY breaking if you set this flag to true, otherwise behavior remains the same."),(0,i.kt)("li",{parentName:"ul"},"The Airflow plugin no longer includes the DataHub Kafka emitter by default. Use ",(0,i.kt)("inlineCode",{parentName:"li"},"pip install acryl-datahub-airflow-plugin[datahub-kafka]")," for Kafka support."),(0,i.kt)("li",{parentName:"ul"},"The Airflow lineage backend no longer includes the DataHub Kafka emitter by default. Use ",(0,i.kt)("inlineCode",{parentName:"li"},"pip install acryl-datahub[airflow,datahub-kafka]")," for Kafka support."),(0,i.kt)("li",{parentName:"ul"},"Java SDK PatchBuilders have been modified in a backwards incompatible way to align more with the Python SDK and support more use cases. Any application utilizing the Java SDK for patch building may be affected on upgrading this dependency.")),(0,i.kt)("h3",{id:"potential-downtime"},"Potential Downtime"),(0,i.kt)("h3",{id:"deprecations"},"Deprecations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The docker image and script for updating from Elasticsearch 6 to 7 is no longer being maintained and will be removed from the ",(0,i.kt)("inlineCode",{parentName:"li"},"/contrib")," section of\nthe repository. Please refer to older releases if needed.")),(0,i.kt)("h3",{id:"other-notable-changes"},"Other notable Changes"),(0,i.kt)("h2",{id:"0100"},"0.10.0"),(0,i.kt)("h3",{id:"breaking-changes-1"},"Breaking Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"#7103 This should only impact users who have configured explicit non-default names for DataHub's Kafka topics. The environment variables used to configure Kafka topics for DataHub used in the ",(0,i.kt)("inlineCode",{parentName:"li"},"kafka-setup")," docker image have been updated to be in-line with other DataHub components, for more info see our docs on ",(0,i.kt)("a",{parentName:"li",href:"https://datahubproject.io/docs/how/kafka-config"},"Configuring Kafka in DataHub\n"),". They have been suffixed with ",(0,i.kt)("inlineCode",{parentName:"li"},"_TOPIC")," where as now the correct suffix is ",(0,i.kt)("inlineCode",{parentName:"li"},"_TOPIC_NAME"),". This change should not affect any user who is using default Kafka names."),(0,i.kt)("li",{parentName:"ul"},"#6906 The Redshift source has been reworked and now also includes usage capabilities. The old Redshift source was renamed to ",(0,i.kt)("inlineCode",{parentName:"li"},"redshift-legacy"),". The ",(0,i.kt)("inlineCode",{parentName:"li"},"redshift-usage")," source has also been renamed to ",(0,i.kt)("inlineCode",{parentName:"li"},"redshift-usage-legacy")," will be removed in the future.")),(0,i.kt)("h3",{id:"potential-downtime-1"},"Potential Downtime"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"#6894 Search improvements requires reindexing indices. A ",(0,i.kt)("inlineCode",{parentName:"li"},"system-update")," job will run which will set indices to read-only and create a backup/clone of each index. During the reindexing new components will be prevented from start-up until the reindex completes. The logs of this job will indicate a % complete per index. Depending on index sizes and infrastructure this process can take 5 minutes to hours however as a rough estimate 1 hour for every 2.3 million entities.")),(0,i.kt)("h4",{id:"helm-notes"},"Helm Notes"),(0,i.kt)("p",null,"Helm without ",(0,i.kt)("inlineCode",{parentName:"p"},"--atomic"),": The default timeout for an upgrade command is 5 minutes. If the reindex takes longer (depending on data size) it will continue to run in the background even though helm will report a failure. Allow this job to finish and then re-run the helm upgrade command."),(0,i.kt)("p",null,"Helm with ",(0,i.kt)("inlineCode",{parentName:"p"},"--atomic"),": In general, it is recommended to not use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--atomic")," setting for this particular upgrade since the system update job will be terminated before completion. If ",(0,i.kt)("inlineCode",{parentName:"p"},"--atomic")," is preferred, then increase the timeout using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--timeout")," flag to account for the reindexing time (see note above for estimating this value)."),(0,i.kt)("h3",{id:"deprecations-1"},"Deprecations"),(0,i.kt)("h2",{id:"096"},"0.9.6"),(0,i.kt)("h3",{id:"breaking-changes-2"},"Breaking Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"#6742 The metadata file sink's output format no longer contains nested JSON strings for MCP aspects, but instead unpacks the stringified JSON into a real JSON object. The previous sink behavior can be recovered using the ",(0,i.kt)("inlineCode",{parentName:"li"},"legacy_nested_json_string")," option. The file source is backwards compatible and supports both formats."),(0,i.kt)("li",{parentName:"ul"},"#6901 The ",(0,i.kt)("inlineCode",{parentName:"li"},"env")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"database_alias")," fields have been marked deprecated across all sources. We recommend using ",(0,i.kt)("inlineCode",{parentName:"li"},"platform_instance")," where possible instead.")),(0,i.kt)("h3",{id:"potential-downtime-2"},"Potential Downtime"),(0,i.kt)("h3",{id:"deprecations-2"},"Deprecations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"#6851 - Sources bigquery-legacy and bigquery-usage-legacy have been removed")),(0,i.kt)("h3",{id:"other-notable-changes-1"},"Other notable Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If anyone faces issues with login please clear your cookies. Some security updates are part of this release. That may cause login issues until cookies are cleared.")),(0,i.kt)("h2",{id:"094--095"},"0.9.4 / 0.9.5"),(0,i.kt)("h3",{id:"breaking-changes-3"},"Breaking Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"#6243 apache-ranger authorizer is no longer the core part of DataHub GMS, and it is shifted as plugin. Please refer updated documentation ",(0,i.kt)("a",{parentName:"li",href:"/docs/how/configuring-authorization-with-apache-ranger#configuring-your-datahub-deployment"},"Configuring Authorization with Apache Ranger")," for configuring ",(0,i.kt)("inlineCode",{parentName:"li"},"apache-ranger-plugin")," in DataHub GMS."),(0,i.kt)("li",{parentName:"ul"},"#6243 apache-ranger authorizer as plugin is not supported in DataHub Kubernetes deployment."),(0,i.kt)("li",{parentName:"ul"},"#6243 Authentication and Authorization plugins configuration are removed from ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-service/factories/src/main/resources/application.yml"},"application.yml"),". Refer documentation ",(0,i.kt)("a",{parentName:"li",href:"/docs/plugins#migration-of-plugins-from-applicationyml"},"Migration Of Plugins From application.yml")," for migrating any existing custom plugins."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"datahub check graph-consistency")," command has been removed. It was a beta API that we had considered but decided there are better solutions for this. So removing this."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"graphql_url")," option of ",(0,i.kt)("inlineCode",{parentName:"li"},"powerbi-report-server")," source deprecated as the options is not used."),(0,i.kt)("li",{parentName:"ul"},"#6789 BigQuery ingestion: If ",(0,i.kt)("inlineCode",{parentName:"li"},"enable_legacy_sharded_table_support")," is set to False, sharded table names will be suffixed with ","_","yyyymmdd to make sure they don't clash with non-sharded tables. This means if stateful ingestion is enabled then old sharded tables will be recreated with a new id and attached tags/glossary terms/etc will need to be added again. ",(0,i.kt)("em",{parentName:"li"},"This behavior is not enabled by default yet, but will be enabled by default in a future release."))),(0,i.kt)("h3",{id:"potential-downtime-3"},"Potential Downtime"),(0,i.kt)("h3",{id:"deprecations-3"},"Deprecations"),(0,i.kt)("h3",{id:"other-notable-changes-2"},"Other notable Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"#6611 - Snowflake ",(0,i.kt)("inlineCode",{parentName:"li"},"schema_pattern")," now accepts pattern for fully qualified schema name in format ",(0,i.kt)("inlineCode",{parentName:"li"},"<catalog_name>.<schema_name>")," by setting config ",(0,i.kt)("inlineCode",{parentName:"li"},"match_fully_qualified_names : True"),". Current default ",(0,i.kt)("inlineCode",{parentName:"li"},"match_fully_qualified_names: False")," is only to maintain backward compatibility. The config option ",(0,i.kt)("inlineCode",{parentName:"li"},"match_fully_qualified_names")," will be deprecated in future and the default behavior will assume ",(0,i.kt)("inlineCode",{parentName:"li"},"match_fully_qualified_names: True"),'."'),(0,i.kt)("li",{parentName:"ul"},"#6636 - Sources ",(0,i.kt)("inlineCode",{parentName:"li"},"snowflake-legacy")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"snowflake-usage-legacy")," have been removed.")),(0,i.kt)("h2",{id:"093"},"0.9.3"),(0,i.kt)("h3",{id:"breaking-changes-4"},"Breaking Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The beta ",(0,i.kt)("inlineCode",{parentName:"li"},"datahub check graph-consistency")," command has been removed.")),(0,i.kt)("h3",{id:"potential-downtime-4"},"Potential Downtime"),(0,i.kt)("h3",{id:"deprecations-4"},"Deprecations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"PowerBI source: ",(0,i.kt)("inlineCode",{parentName:"li"},"workspace_id_pattern")," is introduced in place of ",(0,i.kt)("inlineCode",{parentName:"li"},"workspace_id"),". ",(0,i.kt)("inlineCode",{parentName:"li"},"workspace_id")," is now deprecated and set for removal in a future version.")),(0,i.kt)("h3",{id:"other-notable-changes-3"},"Other notable Changes"),(0,i.kt)("h2",{id:"092"},"0.9.2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"LookML source will only emit views that are reachable from explores while scanning your git repo. Previous behavior can be achieved by setting ",(0,i.kt)("inlineCode",{parentName:"li"},"emit_reachable_views_only")," to False."),(0,i.kt)("li",{parentName:"ul"},"LookML source will always lowercase urns for lineage edges from views to upstream tables. There is no fallback provided to previous behavior because it was inconsistent in application of lower-casing earlier."),(0,i.kt)("li",{parentName:"ul"},"dbt config ",(0,i.kt)("inlineCode",{parentName:"li"},"node_type_pattern")," which was previously deprecated has been removed. Use ",(0,i.kt)("inlineCode",{parentName:"li"},"entities_enabled")," instead to control whether to emit metadata for sources, models, seeds, tests, etc."),(0,i.kt)("li",{parentName:"ul"},"The dbt source will always lowercase urns for lineage edges to the underlying data platform."),(0,i.kt)("li",{parentName:"ul"},"The DataHub Airflow lineage backend and plugin no longer support Airflow 1.x. You can still run DataHub ingestion in Airflow 1.x using the ",(0,i.kt)("a",{parentName:"li",href:"https://airflow.apache.org/docs/apache-airflow/1.10.15/_api/airflow/operators/python_operator/index.html?highlight=pythonvirtualenvoperator#airflow.operators.python_operator.PythonVirtualenvOperator"},"PythonVirtualenvOperator"),".")),(0,i.kt)("h3",{id:"breaking-changes-5"},"Breaking Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"#6570 ",(0,i.kt)("inlineCode",{parentName:"li"},"snowflake")," connector now populates created and last modified timestamps for snowflake datasets and containers. This version of snowflake connector will not work with ",(0,i.kt)("strong",{parentName:"li"},"datahub-gms")," version older than ",(0,i.kt)("inlineCode",{parentName:"li"},"v0.9.3"))),(0,i.kt)("h3",{id:"potential-downtime-5"},"Potential Downtime"),(0,i.kt)("h3",{id:"deprecations-5"},"Deprecations"),(0,i.kt)("h3",{id:"other-notable-changes-4"},"Other notable Changes"),(0,i.kt)("h2",{id:"091"},"0.9.1"),(0,i.kt)("h3",{id:"breaking-changes-6"},"Breaking Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We have promoted ",(0,i.kt)("inlineCode",{parentName:"li"},"bigquery-beta")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"bigquery"),". If you are using ",(0,i.kt)("inlineCode",{parentName:"li"},"bigquery-beta")," then change your recipes to use the type ",(0,i.kt)("inlineCode",{parentName:"li"},"bigquery"),".")),(0,i.kt)("h3",{id:"potential-downtime-6"},"Potential Downtime"),(0,i.kt)("h3",{id:"deprecations-6"},"Deprecations"),(0,i.kt)("h3",{id:"other-notable-changes-5"},"Other notable Changes"),(0,i.kt)("h2",{id:"090"},"0.9.0"),(0,i.kt)("h3",{id:"breaking-changes-7"},"Breaking Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Java version 11 or greater is required."),(0,i.kt)("li",{parentName:"ul"},"For any of the GraphQL search queries, the input no longer supports value but instead now accepts a list of values. These values represent an OR relationship where the field value must match any of the values.")),(0,i.kt)("h3",{id:"potential-downtime-7"},"Potential Downtime"),(0,i.kt)("h3",{id:"deprecations-7"},"Deprecations"),(0,i.kt)("h3",{id:"other-notable-changes-6"},"Other notable Changes"),(0,i.kt)("h2",{id:"v0845"},(0,i.kt)("inlineCode",{parentName:"h2"},"v0.8.45")),(0,i.kt)("h3",{id:"breaking-changes-8"},"Breaking Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"getNativeUserInviteToken")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"createNativeUserInviteToken")," GraphQL endpoints have been renamed to\n",(0,i.kt)("inlineCode",{parentName:"li"},"getInviteToken")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"createInviteToken")," respectively. Additionally, both now accept an optional ",(0,i.kt)("inlineCode",{parentName:"li"},"roleUrn")," parameter.\nBoth endpoints also now require the ",(0,i.kt)("inlineCode",{parentName:"li"},"MANAGE_POLICIES")," privilege to execute, rather than ",(0,i.kt)("inlineCode",{parentName:"li"},"MANAGE_USER_CREDENTIALS"),"\nprivilege."),(0,i.kt)("li",{parentName:"ul"},"One of the default policies shipped with DataHub (",(0,i.kt)("inlineCode",{parentName:"li"},"urn:li:dataHubPolicy:7"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"All Users - All Platform Privileges"),")\nhas been edited to no longer include ",(0,i.kt)("inlineCode",{parentName:"li"},"MANAGE_POLICIES"),". Its name has consequently been changed to\n",(0,i.kt)("inlineCode",{parentName:"li"},"All Users - All Platform Privileges (EXCEPT MANAGE POLICIES)"),". This change was made to prevent all users from\neffectively acting as superusers by default.")),(0,i.kt)("h3",{id:"potential-downtime-8"},"Potential Downtime"),(0,i.kt)("h3",{id:"deprecations-8"},"Deprecations"),(0,i.kt)("h3",{id:"other-notable-changes-7"},"Other notable Changes"),(0,i.kt)("h2",{id:"v0844"},(0,i.kt)("inlineCode",{parentName:"h2"},"v0.8.44")),(0,i.kt)("h3",{id:"breaking-changes-9"},"Breaking Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Browse Paths have been upgraded to a new format to align more closely with the intention of the feature.\nLearn more about the changes, including steps on upgrading, here: ",(0,i.kt)("a",{parentName:"li",href:"https://datahubproject.io/docs/advanced/browse-paths-upgrade"},"https://datahubproject.io/docs/advanced/browse-paths-upgrade")),(0,i.kt)("li",{parentName:"ul"},"The dbt ingestion source's ",(0,i.kt)("inlineCode",{parentName:"li"},"disable_dbt_node_creation")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"load_schema")," options have been removed. They were no longer necessary due to the recently added sibling entities functionality."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"snowflake")," source now uses newer faster implementation (earlier ",(0,i.kt)("inlineCode",{parentName:"li"},"snowflake-beta"),"). Config properties ",(0,i.kt)("inlineCode",{parentName:"li"},"provision_role")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"check_role_grants")," are not supported. Older ",(0,i.kt)("inlineCode",{parentName:"li"},"snowflake")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"snowflake-usage")," are available as ",(0,i.kt)("inlineCode",{parentName:"li"},"snowflake-legacy")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"snowflake-usage-legacy")," sources respectively.")),(0,i.kt)("h3",{id:"potential-downtime-9"},"Potential Downtime"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[Helm]"," If you're using Helm, please ensure that your version of the ",(0,i.kt)("inlineCode",{parentName:"li"},"datahub-actions")," container is bumped to ",(0,i.kt)("inlineCode",{parentName:"li"},"v0.0.7")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"head"),".\nThis version contains changes to support running ingestion in debug mode. Previous versions are not compatible with this release.\nUpgrading to helm chart version ",(0,i.kt)("inlineCode",{parentName:"li"},"0.2.103")," will ensure that you have the compatible versions by default.")),(0,i.kt)("h3",{id:"deprecations-9"},"Deprecations"),(0,i.kt)("h3",{id:"other-notable-changes-8"},"Other notable Changes"),(0,i.kt)("h2",{id:"v0842"},(0,i.kt)("inlineCode",{parentName:"h2"},"v0.8.42")),(0,i.kt)("h3",{id:"breaking-changes-10"},"Breaking Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Python 3.6 is no longer supported for metadata ingestion"),(0,i.kt)("li",{parentName:"ul"},"#5451 ",(0,i.kt)("inlineCode",{parentName:"li"},"GMS_HOST")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"GMS_PORT")," environment variables deprecated in ",(0,i.kt)("inlineCode",{parentName:"li"},"v0.8.39")," have been removed. Use ",(0,i.kt)("inlineCode",{parentName:"li"},"DATAHUB_GMS_HOST")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"DATAHUB_GMS_PORT")," instead."),(0,i.kt)("li",{parentName:"ul"},"#5478 DataHub CLI ",(0,i.kt)("inlineCode",{parentName:"li"},"delete")," command when used with ",(0,i.kt)("inlineCode",{parentName:"li"},"--hard")," option will delete soft-deleted entities which match the other filters given."),(0,i.kt)("li",{parentName:"ul"},"#5471 Looker now populates ",(0,i.kt)("inlineCode",{parentName:"li"},"userEmail")," in dashboard user usage stats. This version of looker connnector will not work with older version of ",(0,i.kt)("strong",{parentName:"li"},"datahub-gms")," if you have ",(0,i.kt)("inlineCode",{parentName:"li"},"extract_usage_history")," looker config enabled."),(0,i.kt)("li",{parentName:"ul"},"#5529 - ",(0,i.kt)("inlineCode",{parentName:"li"},"ANALYTICS_ENABLED")," environment variable in ",(0,i.kt)("strong",{parentName:"li"},"datahub-gms")," is now deprecated. Use ",(0,i.kt)("inlineCode",{parentName:"li"},"DATAHUB_ANALYTICS_ENABLED")," instead."),(0,i.kt)("li",{parentName:"ul"},"#5485 ",(0,i.kt)("inlineCode",{parentName:"li"},"--include-removed")," option was removed from delete CLI")),(0,i.kt)("h3",{id:"potential-downtime-10"},"Potential Downtime"),(0,i.kt)("h3",{id:"deprecations-10"},"Deprecations"),(0,i.kt)("h3",{id:"other-notable-changes-9"},"Other notable Changes"),(0,i.kt)("h2",{id:"v0841"},(0,i.kt)("inlineCode",{parentName:"h2"},"v0.8.41")),(0,i.kt)("h3",{id:"breaking-changes-11"},"Breaking Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"should_overwrite")," flag in ",(0,i.kt)("inlineCode",{parentName:"p"},"csv-enricher")," has been replaced with ",(0,i.kt)("inlineCode",{parentName:"p"},"write_semantics")," to match the format used for other sources. See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/generated/ingestion/sources/csv/"},"documentation")," for more details")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Closing an authorization hole in creating tags adding a Platform Privilege called ",(0,i.kt)("inlineCode",{parentName:"p"},"Create Tags")," for creating tags. This is assigned to ",(0,i.kt)("inlineCode",{parentName:"p"},"datahub")," root user, along\nwith default All Users policy. Notice: You may need to add this privilege (or ",(0,i.kt)("inlineCode",{parentName:"p"},"Manage Tags"),") to existing users that need the ability to create tags on the platform.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"#5329 Below profiling config parameters are now supported in ",(0,i.kt)("inlineCode",{parentName:"p"},"BigQuery"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"profiling.profile_if_updated_since_days (default=1)"),(0,i.kt)("li",{parentName:"ul"},"profiling.profile_table_size_limit (default=1GB)"),(0,i.kt)("li",{parentName:"ul"},"profiling.profile_table_row_limit (default=50000)")),(0,i.kt)("p",{parentName:"li"},"Set above parameters to ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," if you want older behaviour."))),(0,i.kt)("h3",{id:"potential-downtime-11"},"Potential Downtime"),(0,i.kt)("h3",{id:"deprecations-11"},"Deprecations"),(0,i.kt)("h3",{id:"other-notable-changes-10"},"Other notable Changes"),(0,i.kt)("h2",{id:"v0840"},(0,i.kt)("inlineCode",{parentName:"h2"},"v0.8.40")),(0,i.kt)("h3",{id:"breaking-changes-12"},"Breaking Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"#5240 ",(0,i.kt)("inlineCode",{parentName:"li"},"lineage_client_project_id")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"bigquery")," source is removed. Use ",(0,i.kt)("inlineCode",{parentName:"li"},"storage_project_id")," instead.")),(0,i.kt)("h3",{id:"potential-downtime-12"},"Potential Downtime"),(0,i.kt)("h3",{id:"deprecations-12"},"Deprecations"),(0,i.kt)("h3",{id:"other-notable-changes-11"},"Other notable Changes"),(0,i.kt)("h2",{id:"v0839"},(0,i.kt)("inlineCode",{parentName:"h2"},"v0.8.39")),(0,i.kt)("h3",{id:"breaking-changes-13"},"Breaking Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Refactored the ",(0,i.kt)("inlineCode",{parentName:"li"},"health")," field of the ",(0,i.kt)("inlineCode",{parentName:"li"},"Dataset")," GraphQL Type to be of type ",(0,i.kt)("strong",{parentName:"li"},"list of HealthStatus")," (was type ",(0,i.kt)("strong",{parentName:"li"},"HealthStatus"),"). See ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/pull/5222/files"},"this PR")," for more details.")),(0,i.kt)("h3",{id:"potential-downtime-13"},"Potential Downtime"),(0,i.kt)("h3",{id:"deprecations-13"},"Deprecations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"#4875 Lookml view file contents will no longer be populated in custom_properties, instead view definitions will be always available in the View Definitions tab."),(0,i.kt)("li",{parentName:"ul"},"#5208 ",(0,i.kt)("inlineCode",{parentName:"li"},"GMS_HOST")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"GMS_PORT")," environment variables being set in various containers are deprecated in favour of ",(0,i.kt)("inlineCode",{parentName:"li"},"DATAHUB_GMS_HOST")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"DATAHUB_GMS_PORT"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"KAFKA_TOPIC_NAME")," environment variable in ",(0,i.kt)("strong",{parentName:"li"},"datahub-mae-consumer")," and ",(0,i.kt)("strong",{parentName:"li"},"datahub-gms")," is now deprecated. Use ",(0,i.kt)("inlineCode",{parentName:"li"},"METADATA_AUDIT_EVENT_NAME")," instead."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"KAFKA_MCE_TOPIC_NAME")," environment variable in ",(0,i.kt)("strong",{parentName:"li"},"datahub-mce-consumer")," and ",(0,i.kt)("strong",{parentName:"li"},"datahub-gms")," is now deprecated. Use ",(0,i.kt)("inlineCode",{parentName:"li"},"METADATA_CHANGE_EVENT_NAME")," instead."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"KAFKA_FMCE_TOPIC_NAME")," environment variable in ",(0,i.kt)("strong",{parentName:"li"},"datahub-mce-consumer")," and ",(0,i.kt)("strong",{parentName:"li"},"datahub-gms")," is now deprecated. Use ",(0,i.kt)("inlineCode",{parentName:"li"},"FAILED_METADATA_CHANGE_EVENT_NAME")," instead.")),(0,i.kt)("h3",{id:"other-notable-changes-12"},"Other notable Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"#5132 Profile tables in ",(0,i.kt)("inlineCode",{parentName:"li"},"snowflake")," source only if they have been updated since configured (default: ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),") number of day(s). Update the config ",(0,i.kt)("inlineCode",{parentName:"li"},"profiling.profile_if_updated_since_days")," as per your profiling schedule or set it to ",(0,i.kt)("inlineCode",{parentName:"li"},"None")," if you want older behaviour.")),(0,i.kt)("h2",{id:"v0838"},(0,i.kt)("inlineCode",{parentName:"h2"},"v0.8.38")),(0,i.kt)("h3",{id:"breaking-changes-14"},"Breaking Changes"),(0,i.kt)("h3",{id:"potential-downtime-14"},"Potential Downtime"),(0,i.kt)("h3",{id:"deprecations-14"},"Deprecations"),(0,i.kt)("h3",{id:"other-notable-changes-13"},"Other notable Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create & Revoke Access Tokens via the UI"),(0,i.kt)("li",{parentName:"ul"},"Create and Manage new users via the UI"),(0,i.kt)("li",{parentName:"ul"},"Improvements to Business Glossary UI"),(0,i.kt)("li",{parentName:"ul"},"FIX - Do not require reindexing to migrate to using the UI business glossary")),(0,i.kt)("h2",{id:"v0836"},(0,i.kt)("inlineCode",{parentName:"h2"},"v0.8.36")),(0,i.kt)("h3",{id:"breaking-changes-15"},"Breaking Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In this release we introduce a brand new Business Glossary experience. With this new experience comes some new ways of indexing data in order to make viewing and traversing the different levels of your Glossary possible. Therefore, you will have to ",(0,i.kt)("a",{parentName:"li",href:"/docs/how/restore-indices/"},"restore your indices")," in order for the new Glossary experience to work for users that already have existing Glossaries. If this is your first time using DataHub Glossaries, you're all set!")),(0,i.kt)("h3",{id:"potential-downtime-15"},"Potential Downtime"),(0,i.kt)("h3",{id:"deprecations-15"},"Deprecations"),(0,i.kt)("h3",{id:"other-notable-changes-14"},"Other notable Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"#4961 Dropped profiling is not reported by default as that caused a lot of spurious logging in some cases. Set ",(0,i.kt)("inlineCode",{parentName:"li"},"profiling.report_dropped_profiles")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"True")," if you want older behaviour.")),(0,i.kt)("h2",{id:"v0835"},(0,i.kt)("inlineCode",{parentName:"h2"},"v0.8.35")),(0,i.kt)("h3",{id:"breaking-changes-16"},"Breaking Changes"),(0,i.kt)("h3",{id:"potential-downtime-16"},"Potential Downtime"),(0,i.kt)("h3",{id:"deprecations-16"},"Deprecations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"#4875 Lookml view file contents will no longer be populated in custom_properties, instead view definitions will be always available in the View Definitions tab.")),(0,i.kt)("h3",{id:"other-notable-changes-15"},"Other notable Changes"),(0,i.kt)("h2",{id:"v0834"},(0,i.kt)("inlineCode",{parentName:"h2"},"v0.8.34")),(0,i.kt)("h3",{id:"breaking-changes-17"},"Breaking Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"#4644 Remove ",(0,i.kt)("inlineCode",{parentName:"li"},"database")," option from ",(0,i.kt)("inlineCode",{parentName:"li"},"snowflake")," source which was deprecated since ",(0,i.kt)("inlineCode",{parentName:"li"},"v0.8.5")),(0,i.kt)("li",{parentName:"ul"},"#4595 Rename confusing config ",(0,i.kt)("inlineCode",{parentName:"li"},"report_upstream_lineage")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"upstream_lineage_in_report")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"snowflake")," connector which was added in ",(0,i.kt)("inlineCode",{parentName:"li"},"0.8.32"))),(0,i.kt)("h3",{id:"potential-downtime-17"},"Potential Downtime"),(0,i.kt)("h3",{id:"deprecations-17"},"Deprecations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"#4644 ",(0,i.kt)("inlineCode",{parentName:"li"},"host_port")," option of ",(0,i.kt)("inlineCode",{parentName:"li"},"snowflake")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"snowflake-usage")," sources deprecated as the name was confusing. Use ",(0,i.kt)("inlineCode",{parentName:"li"},"account_id")," option instead.")),(0,i.kt)("h3",{id:"other-notable-changes-16"},"Other notable Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"#4760 ",(0,i.kt)("inlineCode",{parentName:"li"},"check_role_grants")," option was added in ",(0,i.kt)("inlineCode",{parentName:"li"},"snowflake")," to disable checking roles in ",(0,i.kt)("inlineCode",{parentName:"li"},"snowflake")," as some people were reporting long run times when checking roles.")))}p.isMDXComponent=!0}}]);