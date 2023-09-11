"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[74918],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>m});var n=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var d=n.createContext({}),u=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=u(t.components);return n.createElement(d.Provider,{value:e},t.children)},s="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),s=u(a),k=i,m=s["".concat(d,".").concat(k)]||s[k]||c[k]||r;return a?n.createElement(m,l(l({ref:e},p),{},{components:a})):n.createElement(m,l({ref:e},p))}));function m(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,l=new Array(r);l[0]=k;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[s]="string"==typeof t?t:i,l[1]=o;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},17730:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=a(87462),i=(a(67294),a(3905));const r={title:"DataHub",slug:"/metadata-ingestion/sink_docs/datahub",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/sink_docs/datahub.md"},l="DataHub",o={unversionedId:"metadata-ingestion/sink_docs/datahub",id:"version-0.10.5/metadata-ingestion/sink_docs/datahub",title:"DataHub",description:"DataHub Rest",source:"@site/versioned_docs/version-0.10.5/metadata-ingestion/sink_docs/datahub.md",sourceDirName:"metadata-ingestion/sink_docs",slug:"/metadata-ingestion/sink_docs/datahub",permalink:"/docs/0.10.5/metadata-ingestion/sink_docs/datahub",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/sink_docs/datahub.md",tags:[],version:"0.10.5",frontMatter:{title:"DataHub",slug:"/metadata-ingestion/sink_docs/datahub",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/sink_docs/datahub.md"},sidebar:"overviewSidebar",previous:{title:"Console",permalink:"/docs/0.10.5/metadata-ingestion/sink_docs/console"},next:{title:"File",permalink:"/docs/0.10.5/metadata-ingestion/sink_docs/file"}},d={},u=[{value:"DataHub Rest",id:"datahub-rest",level:2},{value:"Setup",id:"setup",level:3},{value:"Capabilities",id:"capabilities",level:3},{value:"Quickstart recipe",id:"quickstart-recipe",level:3},{value:"Config details",id:"config-details",level:3},{value:"DataHub Kafka",id:"datahub-kafka",level:2},{value:"Setup",id:"setup-1",level:3},{value:"Capabilities",id:"capabilities-1",level:3},{value:"Quickstart recipe",id:"quickstart-recipe-1",level:3},{value:"Config details",id:"config-details-1",level:3},{value:"DataHub Lite (experimental)",id:"datahub-lite-experimental",level:2},{value:"Setup",id:"setup-2",level:3},{value:"Capabilities",id:"capabilities-2",level:3},{value:"Quickstart recipe",id:"quickstart-recipe-2",level:3},{value:"Config details",id:"config-details-2",level:3},{value:"DuckDB Config Details",id:"duckdb-config-details",level:4},{value:"Questions",id:"questions",level:2}],p={toc:u},s="wrapper";function c(t){let{components:e,...a}=t;return(0,i.kt)(s,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"datahub"},"DataHub"),(0,i.kt)("h2",{id:"datahub-rest"},"DataHub Rest"),(0,i.kt)("p",null,"For context on getting started with ingestion, check out our ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.10.5/metadata-ingestion"},"metadata ingestion guide"),"."),(0,i.kt)("h3",{id:"setup"},"Setup"),(0,i.kt)("p",null,"To install this plugin, run ",(0,i.kt)("inlineCode",{parentName:"p"},"pip install 'acryl-datahub[datahub-rest]'"),"."),(0,i.kt)("h3",{id:"capabilities"},"Capabilities"),(0,i.kt)("p",null,"Pushes metadata to DataHub using the GMS REST API. The advantage of the REST-based interface\nis that any errors can immediately be reported."),(0,i.kt)("h3",{id:"quickstart-recipe"},"Quickstart recipe"),(0,i.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,i.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,i.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.10.5/metadata-ingestion#recipes"},"main recipe guide"),". This should point to the GMS server."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'source:\n  # source configs\nsink:\n  type: "datahub-rest"\n  config:\n    server: "http://localhost:8080"\n')),(0,i.kt)("p",null,"If you are running the ingestion in a container in docker and your ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.10.5/docker"},"GMS is also running in docker")," then you should use the internal docker hostname of the GMS pod. Usually it would look something like"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'source:\n  # source configs\nsink:\n  type: "datahub-rest"\n  config:\n    server: "http://datahub-gms:8080"\n')),(0,i.kt)("p",null,"If GMS is running in a kubernetes pod ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.10.5/deploy/kubernetes"},"deployed through the helm charts")," and you are trying to connect to it from within the kubernetes cluster then you should use the Kubernetes service name of GMS. Usually it would look something like"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'source:\n  # source configs\nsink:\n  type: "datahub-rest"\n  config:\n    server: "http://datahub-datahub-gms.datahub.svc.cluster.local:8080"\n')),(0,i.kt)("p",null,"If you are using ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.10.5/ui-ingestion"},"UI based ingestion")," then where GMS is deployed decides what hostname you should use."),(0,i.kt)("h3",{id:"config-details"},"Config details"),(0,i.kt)("p",null,"Note that a ",(0,i.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"server")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"URL of DataHub GMS endpoint.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"timeout_sec")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"30"),(0,i.kt)("td",{parentName:"tr",align:null},"Per-HTTP request timeout.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"retry_max_times")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"Maximum times to retry if HTTP request fails. The delay between retries is increased exponentially")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"retry_status_codes")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"[429, 502, 503, 504]"),(0,i.kt)("td",{parentName:"tr",align:null},"Retry HTTP request also on these status codes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"token")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Bearer token used for authentication.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"extra_headers")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Extra headers which will be added to the request.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"max_threads")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"15")),(0,i.kt)("td",{parentName:"tr",align:null},"Experimental: Max parallelism for REST API calls")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ca_certificate_path")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Path to server's CA certificate for verification of HTTPS communications")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"client_certificate_path")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Path to client's CA certificate for HTTPS communications")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"disable_ssl_verification")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Disable ssl certificate validation")))),(0,i.kt)("h2",{id:"datahub-kafka"},"DataHub Kafka"),(0,i.kt)("p",null,"For context on getting started with ingestion, check out our ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.10.5/metadata-ingestion"},"metadata ingestion guide"),"."),(0,i.kt)("h3",{id:"setup-1"},"Setup"),(0,i.kt)("p",null,"To install this plugin, run ",(0,i.kt)("inlineCode",{parentName:"p"},"pip install 'acryl-datahub[datahub-kafka]'"),"."),(0,i.kt)("h3",{id:"capabilities-1"},"Capabilities"),(0,i.kt)("p",null,"Pushes metadata to DataHub by publishing messages to Kafka. The advantage of the Kafka-based\ninterface is that it's asynchronous and can handle higher throughput."),(0,i.kt)("h3",{id:"quickstart-recipe-1"},"Quickstart recipe"),(0,i.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,i.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,i.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.10.5/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'source:\n  # source configs\n\nsink:\n  type: "datahub-kafka"\n  config:\n    connection:\n      bootstrap: "localhost:9092"\n      schema_registry_url: "http://localhost:8081"\n')),(0,i.kt)("h3",{id:"config-details-1"},"Config details"),(0,i.kt)("p",null,"Note that a ",(0,i.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"connection.bootstrap")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Kafka bootstrap URL.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"connection.producer_config.<option>")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Passed to ",(0,i.kt)("a",{parentName:"td",href:"https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html#confluent_kafka.SerializingProducer"},"https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html#confluent_kafka.SerializingProducer"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"connection.schema_registry_url")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"URL of schema registry being used.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"connection.schema_registry_config.<option>")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Passed to ",(0,i.kt)("a",{parentName:"td",href:"https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html#confluent_kafka.schema_registry.SchemaRegistryClient"},"https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html#confluent_kafka.schema_registry.SchemaRegistryClient"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"topic_routes.MetadataChangeEvent")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"MetadataChangeEvent"),(0,i.kt)("td",{parentName:"tr",align:null},"Overridden Kafka topic name for the MetadataChangeEvent")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"topic_routes.MetadataChangeProposal")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"MetadataChangeProposal"),(0,i.kt)("td",{parentName:"tr",align:null},"Overridden Kafka topic name for the MetadataChangeProposal")))),(0,i.kt)("p",null,"The options in the producer config and schema registry config are passed to the Kafka SerializingProducer and SchemaRegistryClient respectively."),(0,i.kt)("p",null,"For a full example with a number of security options, see this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/examples/recipes/secured_kafka.dhub.yaml"},"example recipe"),"."),(0,i.kt)("h2",{id:"datahub-lite-experimental"},"DataHub Lite (experimental)"),(0,i.kt)("p",null,"A sink that provides integration with ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.10.5/datahub_lite"},"DataHub Lite")," for local metadata exploration and serving."),(0,i.kt)("h3",{id:"setup-2"},"Setup"),(0,i.kt)("p",null,"To install this plugin, run ",(0,i.kt)("inlineCode",{parentName:"p"},"pip install 'acryl-datahub[datahub-lite]'"),"."),(0,i.kt)("h3",{id:"capabilities-2"},"Capabilities"),(0,i.kt)("p",null,"Pushes metadata to a local DataHub Lite instance."),(0,i.kt)("h3",{id:"quickstart-recipe-2"},"Quickstart recipe"),(0,i.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,i.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,i.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.10.5/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'source:\n  # source configs\nsink:\n  type: "datahub-lite"\n')),(0,i.kt)("p",null,"By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"datahub-lite")," uses a ",(0,i.kt)("strong",{parentName:"p"},"DuckDB")," database and will write to a database file located under ",(0,i.kt)("strong",{parentName:"p"},"~/.datahub/lite/"),"."),(0,i.kt)("p",null,"To configure the location, you can specify it directly in the config:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'source:\n  # source configs\nsink:\n  type: "datahub-lite"\n  config:\n    type: "duckdb"\n    config:\n      file: "<path_to_duckdb_file>"\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"DataHub Lite currently doesn't support stateful ingestion, so you'll have to turn off stateful ingestion in your recipe to use it. This will be fixed shortly.")),(0,i.kt)("h3",{id:"config-details-2"},"Config details"),(0,i.kt)("p",null,"Note that a ",(0,i.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"duckdb"),(0,i.kt)("td",{parentName:"tr",align:null},"Type of DataHub Lite implementation to use")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"config")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'{"file": "~/.datahub/lite/datahub.duckdb"}')),(0,i.kt)("td",{parentName:"tr",align:null},"Config dictionary to pass through to the DataHub Lite implementation. See below for fields accepted by the DuckDB implementation")))),(0,i.kt)("h4",{id:"duckdb-config-details"},"DuckDB Config Details"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"file")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"~/.datahub/lite/datahub.duckdb"')),(0,i.kt)("td",{parentName:"tr",align:null},"File to use for DuckDB storage")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"options")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{}")),(0,i.kt)("td",{parentName:"tr",align:null},"Options dictionary to pass through to DuckDB library. See ",(0,i.kt)("a",{parentName:"td",href:"https://duckdb.org/docs/sql/configuration.html"},"the official spec")," for the options supported by DuckDB.")))),(0,i.kt)("h2",{id:"questions"},"Questions"),(0,i.kt)("p",null,"If you've got any questions on configuring this sink, feel free to ping us on ",(0,i.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io/"},"our Slack"),"!"))}c.isMDXComponent=!0}}]);