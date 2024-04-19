"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[79880],{15680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>m});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),g=o,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},55690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>u,toc:()=>d});n(96540);var r=n(15680);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={title:"Introduction to Scheduling Metadata Ingestion",slug:"/metadata-ingestion/schedule_docs/intro",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/schedule_docs/intro.md"},s="Introduction to Scheduling Metadata Ingestion",u={unversionedId:"metadata-ingestion/schedule_docs/intro",id:"version-0.13.1/metadata-ingestion/schedule_docs/intro",title:"Introduction to Scheduling Metadata Ingestion",description:"Given a recipe file /home/ubuntu/datahubingest/mysqlto_datahub.yml.",source:"@site/versioned_docs/version-0.13.1/metadata-ingestion/schedule_docs/intro.md",sourceDirName:"metadata-ingestion/schedule_docs",slug:"/metadata-ingestion/schedule_docs/intro",permalink:"/docs/0.13.1/metadata-ingestion/schedule_docs/intro",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/schedule_docs/intro.md",tags:[],version:"0.13.1",frontMatter:{title:"Introduction to Scheduling Metadata Ingestion",slug:"/metadata-ingestion/schedule_docs/intro",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/schedule_docs/intro.md"},sidebar:"overviewSidebar",previous:{title:"Vertica",permalink:"/docs/0.13.1/generated/ingestion/sources/vertica"},next:{title:"Using Cron",permalink:"/docs/0.13.1/metadata-ingestion/schedule_docs/cron"}},l={},d=[],p={toc:d},g="wrapper";function m(e){var{components:t}=e,n=i(e,["components"]);return(0,r.yg)(g,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},p,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"introduction-to-scheduling-metadata-ingestion"},"Introduction to Scheduling Metadata Ingestion"),(0,r.yg)("p",null,"Given a recipe file ",(0,r.yg)("inlineCode",{parentName:"p"},"/home/ubuntu/datahub_ingest/mysql_to_datahub.yml"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"source:\n  type: mysql\n  config:\n    # Coordinates\n    host_port: localhost:3306\n    database: dbname\n\n    # Credentials\n    username: root\n    password: example\n\nsink:\n type: datahub-rest \n config:\n  server: http://localhost:8080\n")),(0,r.yg)("p",null,"We can do ingestion of our metadata using ",(0,r.yg)("a",{parentName:"p",href:"/docs/0.13.1/cli"},"DataHub CLI")," as follows"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"datahub ingest -c /home/ubuntu/datahub_ingest/mysql_to_datahub.yml\n")),(0,r.yg)("p",null,"This will ingest metadata from the ",(0,r.yg)("inlineCode",{parentName:"p"},"mysql")," source which is configured in the recipe file. This does ingestion once. As the source system changes we would like to have the changes reflected in DataHub. To do this someone will need to re-run the ingestion command using a recipe file. "),(0,r.yg)("p",null,"An alternate to running the command manually we can schedule the ingestion to run on a regular basis. In this section we give some examples of how scheduling ingestion of metadata into DataHub can be done."))}m.isMDXComponent=!0}}]);