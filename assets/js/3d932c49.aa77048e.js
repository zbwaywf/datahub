"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[66093],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>b});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(r),h=n,b=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return r?o.createElement(b,c(c({ref:t},l),{},{components:r})):o.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:n,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9170:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>u,toc:()=>d});r(67294);var o=r(3905);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const i={title:"Restoring Search and Graph Indices from Local Database",slug:"/how/restore-indices",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/restore-indices.md"},s="Restoring Search and Graph Indices from Local Database",u={unversionedId:"docs/how/restore-indices",id:"version-0.13.0/docs/how/restore-indices",title:"Restoring Search and Graph Indices from Local Database",description:"If search or graph services go down or you have made changes to them that require reindexing, you can restore them from",source:"@site/versioned_docs/version-0.13.0/docs/how/restore-indices.md",sourceDirName:"docs/how",slug:"/how/restore-indices",permalink:"/docs/0.13.0/how/restore-indices",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/how/restore-indices.md",tags:[],version:"0.13.0",frontMatter:{title:"Restoring Search and Graph Indices from Local Database",slug:"/how/restore-indices",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/restore-indices.md"},sidebar:"overviewSidebar",previous:{title:"Taking backup of DataHub",permalink:"/docs/0.13.0/how/backup-datahub"},next:{title:"Configuring Database Retention",permalink:"/docs/0.13.0/advanced/db-retention"}},l={},d=[{value:"Quickstart",id:"quickstart",level:2},{value:"Docker-compose",id:"docker-compose",level:2},{value:"Kubernetes",id:"kubernetes",level:2},{value:"Through API",id:"through-api",level:2}],p={toc:d},h="wrapper";function b(e){var{components:t}=e,r=c(e,["components"]);return(0,o.kt)(h,a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){n(e,t,r[t])}))}return e}({},p,r),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"restoring-search-and-graph-indices-from-local-database"},"Restoring Search and Graph Indices from Local Database"),(0,o.kt)("p",null,"If search or graph services go down or you have made changes to them that require reindexing, you can restore them from\nthe aspects stored in the local database."),(0,o.kt)("p",null,"When a new version of the aspect gets ingested, GMS initiates an MAE event for the aspect which is consumed to update\nthe search and graph indices. As such, we can fetch the latest version of each aspect in the local database and produce\nMAE events corresponding to the aspects to restore the search and graph indices."),(0,o.kt)("h2",{id:"quickstart"},"Quickstart"),(0,o.kt)("p",null,"If you're using the quickstart images, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub")," cli to restore indices."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"datahub docker quickstart --restore-indices\n")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.13.0/quickstart#restoring-only-the-index-use-with-care"},"this section")," for more information. "),(0,o.kt)("h2",{id:"docker-compose"},"Docker-compose"),(0,o.kt)("p",null,"If you are on a custom docker-compose deployment, run the following command (you need to checkout ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub"},"the source repository"),") from the root of the repo to send MAE for each aspect in the Local DB."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./docker/datahub-upgrade/datahub-upgrade.sh -u RestoreIndices\n")),(0,o.kt)("p",null,"If you need to clear the search and graph indices before restoring, add ",(0,o.kt)("inlineCode",{parentName:"p"},"-a clean")," to the end of the command."),(0,o.kt)("p",null,"Refer to this ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.13.0/docker/datahub-upgrade#environment-variables"},"doc")," on how to set environment variables\nfor your environment."),(0,o.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get cronjobs")," to see if the restoration job template has been deployed. If you see results like below, you\nare good to go."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NAME                                          SCHEDULE    SUSPEND   ACTIVE   LAST SCHEDULE   AGE\ndatahub-datahub-cleanup-job-template          * * * * *   True      0        <none>          2d3h\ndatahub-datahub-restore-indices-job-template  * * * * *   True      0        <none>          2d3h\n")),(0,o.kt)("p",null,"If not, deploy latest helm charts to use this functionality."),(0,o.kt)("p",null,"Once restore indices job template has been deployed, run the following command to start a job that restores indices."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl create job --from=cronjob/datahub-datahub-restore-indices-job-template datahub-restore-indices-adhoc\n")),(0,o.kt)("p",null,"Once the job completes, your indices will have been restored. "),(0,o.kt)("h2",{id:"through-api"},"Through API"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.13.0/api/restli/restore-indices"},"Restore Indices API"),"."))}b.isMDXComponent=!0}}]);