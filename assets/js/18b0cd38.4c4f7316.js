"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[39195],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=c(r),f=i,h=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(h,s(s({ref:t},l),{},{components:r})):n.createElement(h,s({ref:t},l))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[p]="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},94129:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>p});r(67294);var n=r(3905);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const a={title:"Setup",sidebar_label:"Setup",slug:"/quick-ingestion-guides/redshift/setup",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/redshift/setup.md"},u="Redshift Ingestion Guide: Setup & Prerequisites",c={unversionedId:"docs/quick-ingestion-guides/redshift/setup",id:"version-0.13.1/docs/quick-ingestion-guides/redshift/setup",title:"Setup",description:"To configure ingestion from Redshift, you'll need a User configured with the proper permission sets, and an associated.",source:"@site/versioned_docs/version-0.13.1/docs/quick-ingestion-guides/redshift/setup.md",sourceDirName:"docs/quick-ingestion-guides/redshift",slug:"/quick-ingestion-guides/redshift/setup",permalink:"/docs/quick-ingestion-guides/redshift/setup",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/redshift/setup.md",tags:[],version:"0.13.1",frontMatter:{title:"Setup",sidebar_label:"Setup",slug:"/quick-ingestion-guides/redshift/setup",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/redshift/setup.md"},sidebar:"overviewSidebar",previous:{title:"Overview",permalink:"/docs/quick-ingestion-guides/redshift/overview"},next:{title:"Configuration",permalink:"/docs/quick-ingestion-guides/redshift/configuration"}},l={},p=[{value:"Redshift Prerequisites",id:"redshift-prerequisites",level:2},{value:"Redshift Setup",id:"redshift-setup",level:2},{value:"Next Steps",id:"next-steps",level:2}],d={toc:p},f="wrapper";function h(e){var{components:t}=e,r=s(e,["components"]);return(0,n.kt)(f,o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"redshift-ingestion-guide-setup--prerequisites"},"Redshift Ingestion Guide: Setup & Prerequisites"),(0,n.kt)("p",null,"To configure ingestion from Redshift, you'll need a ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/redshift/latest/gsg/t_adding_redshift_user_cmd.html"},"User")," configured with the proper permission sets, and an associated."),(0,n.kt)("p",null,"This setup guide will walk you through the steps you'll need to take via your Google Cloud Console."),(0,n.kt)("h2",{id:"redshift-prerequisites"},"Redshift Prerequisites"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Connect to your Amazon Redshift cluster using an SQL client such as SQL Workbench/J or Amazon Redshift Query Editor with your Admin user."),(0,n.kt)("li",{parentName:"ol"},"Create a ",(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/redshift/latest/gsg/t_adding_redshift_user_cmd.html"},"Redshift User")," that will be used to perform the metadata extraction if you don't have one already.\nFor example:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER datahub WITH PASSWORD 'Datahub1234';\n")),(0,n.kt)("h2",{id:"redshift-setup"},"Redshift Setup"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Grant the following permission to your ",(0,n.kt)("inlineCode",{parentName:"li"},"datahub")," user:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER USER datahub WITH SYSLOG ACCESS UNRESTRICTED;\nGRANT SELECT ON pg_catalog.svv_table_info to datahub;\nGRANT SELECT ON pg_catalog.svl_user_info to datahub;\n\n")),(0,n.kt)("h2",{id:"next-steps"},"Next Steps"),(0,n.kt)("p",null,"Once you've confirmed all of the above in Redshift, it's time to ",(0,n.kt)("a",{parentName:"p",href:"/docs/quick-ingestion-guides/redshift/configuration"},"move on")," to configure the actual ingestion source within the DataHub UI."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Need more help? Join the conversation in ",(0,n.kt)("a",{parentName:"em",href:"http://slack.datahubproject.io"},"Slack"),"!")))}h.isMDXComponent=!0}}]);