"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[36981],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>f});var o=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),s=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},l="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=s(r),d=n,f=l["".concat(u,".").concat(d)]||l[d]||b[d]||a;return r?o.createElement(f,c(c({ref:t},p),{},{components:r})):o.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[l]="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},97367:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>l});r(96540);var o=r(15680);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const i={title:"Taking backup of DataHub",slug:"/how/backup-datahub",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/backup-datahub.md"},u="Taking backup of DataHub",s={unversionedId:"docs/how/backup-datahub",id:"version-0.13.0/docs/how/backup-datahub",title:"Taking backup of DataHub",description:"Production",source:"@site/versioned_docs/version-0.13.0/docs/how/backup-datahub.md",sourceDirName:"docs/how",slug:"/how/backup-datahub",permalink:"/docs/0.13.0/how/backup-datahub",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/how/backup-datahub.md",tags:[],version:"0.13.0",frontMatter:{title:"Taking backup of DataHub",slug:"/how/backup-datahub",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/backup-datahub.md"},sidebar:"overviewSidebar",previous:{title:"Configuring Authorization with Apache Ranger",permalink:"/docs/0.13.0/how/configuring-authorization-with-apache-ranger"},next:{title:"Restoring Search and Graph Indices from Local Database",permalink:"/docs/0.13.0/how/restore-indices"}},p={},l=[{value:"Production",id:"production",level:2},{value:"Quickstart",id:"quickstart",level:2}],b={toc:l},d="wrapper";function f(e){var{components:t}=e,r=c(e,["components"]);return(0,o.yg)(d,a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){n(e,t,r[t])}))}return e}({},b,r),{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"taking-backup-of-datahub"},"Taking backup of DataHub"),(0,o.yg)("h2",{id:"production"},"Production"),(0,o.yg)("p",null,"The recommended backup strategy is to periodically dump the database ",(0,o.yg)("inlineCode",{parentName:"p"},"datahub.metadata_aspect_v2")," so it can be recreated from the dump which most managed DB services will support (e.g. AWS RDS). Then run ",(0,o.yg)("a",{parentName:"p",href:"/docs/0.13.0/how/restore-indices"},"restore indices")," to recreate the indices. "),(0,o.yg)("p",null,"In order to back up Time Series Aspects (which power usage and dataset profiles), you'd have to do a backup of Elasticsearch, which is possible via AWS OpenSearch. Otherwise, you'd have to reingest dataset profiles from your sources in the event of a disaster scenario!"),(0,o.yg)("h2",{id:"quickstart"},"Quickstart"),(0,o.yg)("p",null,"To take a backup of your quickstart, take a look at this ",(0,o.yg)("a",{parentName:"p",href:"/docs/0.13.0/quickstart#backing-up-your-datahub-quickstart-experimental"},"document")," on how to accomplish it."))}f.isMDXComponent=!0}}]);