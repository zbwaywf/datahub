"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[94197],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},62573:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});a(67294);var r=a(3905);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const l={title:"Deploying with Docker",hide_title:!0,sidebar_label:"Deploying with Docker",slug:"/docker",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docker/README.md"},s="Docker Images",c={unversionedId:"docker/README",id:"version-0.13.1/docker/README",title:"Deploying with Docker",description:"Prerequisites",source:"@site/versioned_docs/version-0.13.1/docker/README.md",sourceDirName:"docker",slug:"/docker",permalink:"/docs/docker",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docker/README.md",tags:[],version:"0.13.1",frontMatter:{title:"Deploying with Docker",hide_title:!0,sidebar_label:"Deploying with Docker",slug:"/docker",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docker/README.md"},sidebar:"overviewSidebar",previous:{title:"Deploying to Azure",permalink:"/docs/deploy/azure"},next:{title:"Deploying with Kubernetes",permalink:"/docs/deploy/kubernetes"}},u={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quickstart",id:"quickstart",level:2},{value:"Ingesting demo data.",id:"ingesting-demo-data",level:3},{value:"Using Docker Images During Development",id:"using-docker-images-during-development",level:2},{value:"Building And Deploying Docker Images",id:"building-and-deploying-docker-images",level:2},{value:"Building images",id:"building-images",level:3},{value:"Community Built Images",id:"community-built-images",level:3}],p={toc:d},m="wrapper";function h(e){var{components:t}=e,a=i(e,["components"]);return(0,r.kt)(m,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){n(e,t,a[t])}))}return e}({},p,a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"docker-images"},"Docker Images"),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"You need to install ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/"},"docker")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"docker-compose")," (if using Linux; on Windows and Mac compose is included with\nDocker Desktop)."),(0,r.kt)("p",null,"Make sure to allocate enough hardware resources for Docker engine. Tested & confirmed config: 2 CPUs, 8GB RAM, 2GB Swap\narea."),(0,r.kt)("h2",{id:"quickstart"},"Quickstart"),(0,r.kt)("p",null,"The easiest way to bring up and test DataHub is using DataHub ",(0,r.kt)("a",{parentName:"p",href:"https://www.docker.com"},"Docker")," images\nwhich are continuously deployed to ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/u/linkedin"},"Docker Hub")," with every commit to repository."),(0,r.kt)("p",null,"You can easily download and run all these images and their dependencies with our\n",(0,r.kt)("a",{parentName:"p",href:"/docs/quickstart"},"quick start guide"),"."),(0,r.kt)("p",null,"DataHub Docker Images:"),(0,r.kt)("p",null,"Do not use ",(0,r.kt)("inlineCode",{parentName:"p"},"latest")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"debug")," tags for any of the image as those are not supported and present only due to legacy reasons. Please use ",(0,r.kt)("inlineCode",{parentName:"p"},"head")," or tags specific for versions like ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.8.40"),". For production we recommend using version specific tags not ",(0,r.kt)("inlineCode",{parentName:"p"},"head"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/acryldata/datahub-ingestion/"},"acryldata/datahub-ingestion")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hub.docker.com/repository/docker/acryldata/datahub-gms/"},"acryldata/datahub-gms")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hub.docker.com/repository/docker/acryldata/datahub-frontend-react/"},"acryldata/datahub-frontend-react")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hub.docker.com/repository/docker/acryldata/datahub-mae-consumer/"},"acryldata/datahub-mae-consumer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hub.docker.com/repository/docker/acryldata/datahub-mce-consumer/"},"acryldata/datahub-mce-consumer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/acryldata/datahub-upgrade/"},"acryldata/datahub-upgrade")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/acryldata/datahub-kafka-setup/"},"acryldata/datahub-kafka-setup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/acryldata/datahub-elasticsearch-setup/"},"acryldata/datahub-elasticsearch-setup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/acryldata/datahub-mysql-setup/"},"acryldata/datahub-mysql-setup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/acryldata/datahub-postgres-setup/"},"acryldata/datahub-postgres-setup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/acryldata/datahub-actions"},"acryldata/datahub-actions"),". Do not use ",(0,r.kt)("inlineCode",{parentName:"li"},"acryldata/acryl-datahub-actions")," as that is deprecated and no longer used.")),(0,r.kt)("p",null,"Dependencies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/docker/kafka-setup"},"Kafka, Zookeeper, and Schema Registry")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/docker/elasticsearch-setup"},"Elasticsearch")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/docker/mysql"},"MySQL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/docker/neo4j"},"(Optional) Neo4j"))),(0,r.kt)("h3",{id:"ingesting-demo-data"},"Ingesting demo data."),(0,r.kt)("p",null,"If you want to test ingesting some data once DataHub is up, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"./docker/ingestion/ingestion.sh")," script or ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub docker ingest-sample-data"),". See the ",(0,r.kt)("a",{parentName:"p",href:"/docs/quickstart"},"quickstart guide")," for more details."),(0,r.kt)("h2",{id:"using-docker-images-during-development"},"Using Docker Images During Development"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/docker/development"},"Using Docker Images During Development"),"."),(0,r.kt)("h2",{id:"building-and-deploying-docker-images"},"Building And Deploying Docker Images"),(0,r.kt)("p",null,"We use GitHub Actions to build and continuously deploy our images. There should be no need to do this manually; a\nsuccessful release on Github will automatically publish the images."),(0,r.kt)("h3",{id:"building-images"},"Building images"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This is ",(0,r.kt)("strong",{parentName:"p"},"not")," our recommended development flow and most developers should be following the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/docker/development"},"Using Docker Images During Development")," guide.")),(0,r.kt)("p",null,"To build the full images (that we are going to publish), you need to run the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker compose -p datahub build\n")),(0,r.kt)("p",null,"This is because we're relying on builtkit for multistage builds. It does not hurt also set ",(0,r.kt)("inlineCode",{parentName:"p"},"DATAHUB_VERSION")," to\nsomething unique."),(0,r.kt)("h3",{id:"community-built-images"},"Community Built Images"),(0,r.kt)("p",null,"As the open source project grows, community members would like to contribute additions to the docker images. Not all contributions to the images can be accepted because those changes are not useful for all community members, it will increase build times, add dependencies and possible security vulns. In those cases this section can be used to point to ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfiles")," hosted by the community which build on top of the images published by the DataHub core team along with any container registry links where the result of those images are maintained."))}h.isMDXComponent=!0}}]);