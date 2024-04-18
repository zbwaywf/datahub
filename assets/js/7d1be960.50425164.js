"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[92724],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,m=p["".concat(c,".").concat(b)]||p[b]||d[b]||o;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},93818:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={title:"Using Kubernetes",slug:"/metadata-ingestion/schedule_docs/kubernetes",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/schedule_docs/kubernetes.md"},c="Using Kubernetes",u={unversionedId:"metadata-ingestion/schedule_docs/kubernetes",id:"version-0.13.0/metadata-ingestion/schedule_docs/kubernetes",title:"Using Kubernetes",description:"If you have deployed DataHub using our official helm charts you can use the",source:"@site/versioned_docs/version-0.13.0/metadata-ingestion/schedule_docs/kubernetes.md",sourceDirName:"metadata-ingestion/schedule_docs",slug:"/metadata-ingestion/schedule_docs/kubernetes",permalink:"/docs/0.13.0/metadata-ingestion/schedule_docs/kubernetes",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/schedule_docs/kubernetes.md",tags:[],version:"0.13.0",frontMatter:{title:"Using Kubernetes",slug:"/metadata-ingestion/schedule_docs/kubernetes",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/schedule_docs/kubernetes.md"},sidebar:"overviewSidebar",previous:{title:"Using Airflow",permalink:"/docs/0.13.0/metadata-ingestion/schedule_docs/airflow"},next:{title:"Working With Platform Instances",permalink:"/docs/0.13.0/platform-instances"}},l={},p=[],d={toc:p},b="wrapper";function m(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)(b,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-kubernetes"},"Using Kubernetes"),(0,r.kt)("p",null,"If you have deployed DataHub using our official ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/acryldata/datahub-helm"},"helm charts")," you can use the\ndatahub ingestion cron subchart to schedule ingestions. "),(0,r.kt)("p",null,"Here is an example of what that configuration would look like in your ",(0,r.kt)("strong",{parentName:"p"},"values.yaml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'datahub-ingestion-cron:\n  enabled: true\n  crons:\n    mysql:\n      schedule: "0 * * * *" # Every hour\n      recipe:\n        configmapName: recipe-config\n        fileName: mysql_recipe.yml\n')),(0,r.kt)("p",null,"This assumes the pre-existence of a Kubernetes ConfigMap which holds all recipes being scheduled in the same namespace as\nwhere the cron jobs will be running."),(0,r.kt)("p",null,"An example could be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: recipe-config\ndata:\n  mysql_recipe.yml: |-\n    source:\n      type: mysql\n      config:\n        # Coordinates\n        host_port: <MYSQL HOST>:3306\n        database: dbname\n    \n        # Credentials\n        username: root\n        password: example\n    \n    sink:\n      type: datahub-rest\n      config:\n        server: http://<GMS_HOST>:8080\n")),(0,r.kt)("p",null,"For more information, please see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/acryldata/datahub-helm/tree/master/charts/datahub/subcharts/datahub-ingestion-cron"},"documentation")," of this sub-chart."))}m.isMDXComponent=!0}}]);