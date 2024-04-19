"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[2500],{15680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>f});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,f=p["".concat(c,".").concat(d)]||p[d]||y[d]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[p]="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},68852:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>s,toc:()=>p});r(96540);var n=r(15680);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const u={title:"Reporting Security Issues",slug:"/security",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/SECURITY.md"},c="Reporting Security Issues",s={unversionedId:"SECURITY",id:"SECURITY",title:"Reporting Security Issues",description:"If you think you have found a security vulnerability, please send a report to security@datahubproject.io. This address can be used for all of Acryl Data\u2019s open source and commercial products (including but not limited to DataHub and Acryl Data). We can accept only vulnerability reports at this address.",source:"@site/genDocs/SECURITY.md",sourceDirName:".",slug:"/security",permalink:"/docs/security",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/SECURITY.md",tags:[],version:"current",frontMatter:{title:"Reporting Security Issues",slug:"/security",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/SECURITY.md"},sidebar:"overviewSidebar",previous:{title:"RFC Process",permalink:"/docs/rfc"},next:{title:"Releases",permalink:"/docs/releases"}},l={},p=[{value:"Security announcements",id:"security-announcements",level:2}],y={toc:p},d="wrapper";function f(e){var{components:t}=e,r=i(e,["components"]);return(0,n.yg)(d,a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},y,r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"reporting-security-issues"},"Reporting Security Issues"),(0,n.yg)("p",null,"If you think you have found a security vulnerability, please send a report to ",(0,n.yg)("a",{parentName:"p",href:"mailto:security@datahubproject.io."},"security@datahubproject.io.")," This address can be used for all of Acryl Data\u2019s open source and commercial products (including but not limited to DataHub and Acryl Data). We can accept only vulnerability reports at this address."),(0,n.yg)("p",null,"It's not mandatory, but if you'd like to encrypt your message to us; please use our PGP key. The key fingerprint is:"),(0,n.yg)("p",null,"A50B10A86CC21F4B7BE102E170764C95B4FACEBF"),(0,n.yg)("p",null,"The key is available from ",(0,n.yg)("a",{parentName:"p",href:"https://keyserver.ubuntu.com/pks/lookup?search=A50B10A86CC21F4B7BE102E170764C95B4FACEBF&fingerprint=on&op=index"},"keyserver.ubuntu.com"),"."),(0,n.yg)("p",null,"Acryl Data will send you a response indicating the next steps in handling your report. After the initial reply to your report, the security team will keep you informed of the progress towards a fix and full announcement, and may ask for additional information or guidance."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Important:")," We ask you to not disclose the vulnerability before it have been fixed and announced, unless you received a response from the Acryl Data security team that you can do so."),(0,n.yg)("h2",{id:"security-announcements"},"Security announcements"),(0,n.yg)("p",null,"We maintain ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/security/advisories"},"Security Advisories")," on the DataHub project GitHub repository,\nwhere we will post a summary, remediation, and mitigation details for any patch containing security fixes."))}f.isMDXComponent=!0}}]);