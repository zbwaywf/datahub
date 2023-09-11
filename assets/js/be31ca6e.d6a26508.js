"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[18921],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),g=o,h=p["".concat(c,".").concat(g)]||p[g]||d[g]||r;return n?i.createElement(h,a(a({ref:t},u),{},{components:n})):i.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},37967:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=n(87462),o=(n(67294),n(3905));const r={title:"Ingestion Executor",slug:"/actions/actions/executor",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/actions/actions/executor.md"},a="Ingestion Executor",s={unversionedId:"docs/actions/actions/executor",id:"version-0.10.5/docs/actions/actions/executor",title:"Ingestion Executor",description:"Certified",source:"@site/versioned_docs/version-0.10.5/docs/actions/actions/executor.md",sourceDirName:"docs/actions/actions",slug:"/actions/actions/executor",permalink:"/docs/0.10.5/actions/actions/executor",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/actions/actions/executor.md",tags:[],version:"0.10.5",frontMatter:{title:"Ingestion Executor",slug:"/actions/actions/executor",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/actions/actions/executor.md"},sidebar:"overviewSidebar",previous:{title:"Metadata Change Log Event V1",permalink:"/docs/0.10.5/actions/events/metadata-change-log-event"},next:{title:"Hello World",permalink:"/docs/0.10.5/actions/actions/hello_world"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Capabilities",id:"capabilities",level:3},{value:"Supported Events",id:"supported-events",level:3},{value:"Action Quickstart",id:"action-quickstart",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"DataHub Privileges",id:"datahub-privileges",level:4},{value:"Connecting to Ingestion Sources",id:"connecting-to-ingestion-sources",level:4},{value:"Install the Plugin(s)",id:"install-the-plugins",level:3},{value:"Configure the Action Config",id:"configure-the-action-config",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Quitting the Actions Framework",id:"quitting-the-actions-framework",level:3}],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ingestion-executor"},"Ingestion Executor"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"})),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This Action executes ingestion recipes that are configured via the UI."),(0,o.kt)("h3",{id:"capabilities"},"Capabilities"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Executing ",(0,o.kt)("inlineCode",{parentName:"li"},"datahub ingest")," command in a sub-process when an Execution Request command is received from DataHub. (Scheduled or manual ingestion run)"),(0,o.kt)("li",{parentName:"ul"},"Resolving secrets within an ingestion recipe from DataHub"),(0,o.kt)("li",{parentName:"ul"},"Reporting ingestion execution status to DataHub")),(0,o.kt)("h3",{id:"supported-events"},"Supported Events"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MetadataChangeLog_v1"))),(0,o.kt)("p",null,"Specifically, changes to the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataHubExecutionRequestInput")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"dataHubExecutionRequestSignal")," aspects of the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataHubExecutionRequest")," entity are required."),(0,o.kt)("h2",{id:"action-quickstart"},"Action Quickstart"),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("h4",{id:"datahub-privileges"},"DataHub Privileges"),(0,o.kt)("p",null,"This action must be executed as a privileged DataHub user (e.g. using Personal Access Tokens). Specifically, the user must have the ",(0,o.kt)("inlineCode",{parentName:"p"},"Manage Secrets")," Platform Privilege, which allows for retrieval\nof decrypted secrets for injection into an ingestion recipe. "),(0,o.kt)("p",null,"An access token generated from a privileged account must be configured in the ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub")," configuration\nblock of the YAML configuration, as shown in the example below. "),(0,o.kt)("h4",{id:"connecting-to-ingestion-sources"},"Connecting to Ingestion Sources"),(0,o.kt)("p",null,"In order for ingestion to run successfully, the process running the Actions must have\nnetwork connectivity to any source systems that are required for ingestion. "),(0,o.kt)("p",null,"For example, if the ingestion recipe is pulling from an internal DBMS, the actions container\nmust be able to resolve & connect to that DBMS system for the ingestion command to run successfully."),(0,o.kt)("h3",{id:"install-the-plugins"},"Install the Plugin(s)"),(0,o.kt)("p",null,"Run the following commands to install the relevant action plugin(s):"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pip install 'acryl-datahub-actions[executor]'")),(0,o.kt)("h3",{id:"configure-the-action-config"},"Configure the Action Config"),(0,o.kt)("p",null,"Use the following config(s) to get started with this Action. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'name: "pipeline-name"\nsource:\n  # source configs\naction:\n  type: "executor"\n# Requires DataHub API configurations to report to DataHub\ndatahub:\n  server: "http://${DATAHUB_GMS_HOST:-localhost}:${DATAHUB_GMS_PORT:-8080}"\n  # token: <token> # Must have "Manage Secrets" privilege\n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,"View All Configuration Options"),"| Field | Required | Default | Description | | --- | :-: | :-: | --- | | `executor_id` | \u274c | `default` | An executor ID assigned to the executor. This can be used to manage multiple distinct executors. |"),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("h3",{id:"quitting-the-actions-framework"},"Quitting the Actions Framework"),(0,o.kt)("p",null,'Currently, when you quit the Actions framework, any in-flight ingestion processing will continue to execute as a subprocess on your system. This means that there may be "orphaned" processes which\nare never marked as "Succeeded" or "Failed" in the UI, even though they may have completed. '),(0,o.kt)("p",null,'To address this, simply "Cancel" the ingestion source on the UI once you\'ve restarted the Ingestion Executor action.'))}d.isMDXComponent=!0}}]);