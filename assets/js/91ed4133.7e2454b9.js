"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[84711],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var i=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=i.createContext({}),u=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,m=p["".concat(s,".").concat(d)]||p[d]||g[d]||n;return r?i.createElement(m,a(a({ref:t},l),{},{components:r})):i.createElement(m,a({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,a=new Array(n);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<n;u++)a[u]=r[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},36551:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>u,toc:()=>p});r(67294);var i=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const c={title:"Setup",sidebar_label:"Setup",slug:"/quick-ingestion-guides/bigquery/setup",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/bigquery/setup.md"},s="BigQuery Ingestion Guide: Setup & Prerequisites",u={unversionedId:"docs/quick-ingestion-guides/bigquery/setup",id:"version-0.13.0/docs/quick-ingestion-guides/bigquery/setup",title:"Setup",description:"To configure ingestion from BigQuery, you'll need a Service Account configured with the proper permission sets and an associated Service Account Key.",source:"@site/versioned_docs/version-0.13.0/docs/quick-ingestion-guides/bigquery/setup.md",sourceDirName:"docs/quick-ingestion-guides/bigquery",slug:"/quick-ingestion-guides/bigquery/setup",permalink:"/docs/0.13.0/quick-ingestion-guides/bigquery/setup",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/bigquery/setup.md",tags:[],version:"0.13.0",frontMatter:{title:"Setup",sidebar_label:"Setup",slug:"/quick-ingestion-guides/bigquery/setup",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/bigquery/setup.md"},sidebar:"overviewSidebar",previous:{title:"Overview",permalink:"/docs/0.13.0/quick-ingestion-guides/bigquery/overview"},next:{title:"Configuration",permalink:"/docs/0.13.0/quick-ingestion-guides/bigquery/configuration"}},l={},p=[{value:"BigQuery Prerequisites",id:"bigquery-prerequisites",level:2},{value:"BigQuery Setup",id:"bigquery-setup",level:2},{value:"Next Steps",id:"next-steps",level:2}],g={toc:p},d="wrapper";function m(e){var{components:t}=e,r=a(e,["components"]);return(0,i.kt)(d,n(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},i=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){o(e,t,r[t])}))}return e}({},g,r),{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bigquery-ingestion-guide-setup--prerequisites"},"BigQuery Ingestion Guide: Setup & Prerequisites"),(0,i.kt)("p",null,"To configure ingestion from BigQuery, you'll need a ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/creating-managing-service-accounts"},"Service Account")," configured with the proper permission sets and an associated ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys"},"Service Account Key"),"."),(0,i.kt)("p",null,"This setup guide will walk you through the steps you'll need to take via your Google Cloud Console."),(0,i.kt)("h2",{id:"bigquery-prerequisites"},"BigQuery Prerequisites"),(0,i.kt)("p",null,"If you do not have an existing Service Account and Service Account Key, please work with your BigQuery Admin to ensure you have the appropriate permissions and/or roles to continue with this setup guide."),(0,i.kt)("p",null,"When creating and managing new Service Accounts and Service Account Keys, we have found the following permissions and roles to be required:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a Service Account: ",(0,i.kt)("inlineCode",{parentName:"li"},"iam.serviceAccounts.create")," permission"),(0,i.kt)("li",{parentName:"ul"},"Assign roles to a Service Account: ",(0,i.kt)("inlineCode",{parentName:"li"},"serviceusage.services.enable")," permission"),(0,i.kt)("li",{parentName:"ul"},"Set permission policy to the project: ",(0,i.kt)("inlineCode",{parentName:"li"},"resourcemanager.projects.setIamPolicy")," permission"),(0,i.kt)("li",{parentName:"ul"},"Generate Key for Service Account: Service Account Key Admin (",(0,i.kt)("inlineCode",{parentName:"li"},"roles/iam.serviceAccountKeyAdmin"),") IAM role")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Please refer to the BigQuery ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/permissions-reference"},"Permissions")," and ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/understanding-roles"},"IAM Roles")," references for details")),(0,i.kt)("h2",{id:"bigquery-setup"},"BigQuery Setup"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To set up a new Service Account follow ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/creating-managing-service-accounts"},"this guide"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When you are creating a Service Account, assign the following predefined Roles:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cloud.google.com/bigquery/docs/access-control#bigquery.jobUser"},"BigQuery Job User")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cloud.google.com/bigquery/docs/access-control#bigquery.metadataViewer"},"BigQuery Metadata Viewer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cloud.google.com/bigquery/docs/access-control#bigquery.resourceViewer"},"BigQuery Resource Viewer")," -> This role is for Table-Level Lineage and Usage extraction"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cloud.google.com/bigquery/docs/access-control#bigquery.dataViewer"},"Logs View Accessor")," -> This role is for Table-Level Lineage and Usage extraction"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cloud.google.com/bigquery/docs/access-control#bigquery.dataViewer"},"BigQuery Data Viewer")," -> This role is for Profiling"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cloud.google.com/bigquery/docs/access-control#bigquery.readSessionUser"},"BigQuery Read Session User")," -> This role is for Profiling")))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You can always add/remove roles to Service Accounts later on. Please refer to the BigQuery ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/granting-changing-revoking-access"},"Manage access to projects, folders, and organizations")," guide for more details.")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Create and download a ",(0,i.kt)("a",{parentName:"li",href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys"},"Service Account Key"),". We will use this to set up authentication within DataHub.")),(0,i.kt)("p",null,"The key file looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "type": "service_account",\n   "project_id": "project-id-1234567",\n   "private_key_id": "d0121d0000882411234e11166c6aaa23ed5d74e0",\n   "private_key": "-----BEGIN PRIVATE KEY-----\\nMIIyourkey\\n-----END PRIVATE KEY-----",\n   "client_email": "test@suppproject-id-1234567.iam.gserviceaccount.com",\n   "client_id": "113545814931671546333",\n   "auth_uri": "https://accounts.google.com/o/oauth2/auth",\n   "token_uri": "https://oauth2.googleapis.com/token",\n   "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",\n   "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/test%suppproject-id-1234567.iam.gserviceaccount.com"\n}\n')),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)("p",null,"Once you've confirmed all of the above in BigQuery, it's time to ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.13.0/quick-ingestion-guides/bigquery/configuration"},"move on")," to configure the actual ingestion source within the DataHub UI."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Need more help? Join the conversation in ",(0,i.kt)("a",{parentName:"em",href:"http://slack.datahubproject.io"},"Slack"),"!")))}m.isMDXComponent=!0}}]);