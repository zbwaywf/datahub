"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[60368],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>b});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),f=n,b=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return a?r.createElement(b,l(l({ref:t},u),{},{components:a})):r.createElement(b,l({ref:t},u))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:n,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},1020:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>p});a(96540);var r=a(15680);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const s={title:"v0.2.5",slug:"/managed-datahub/release-notes/v_0_2_5",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/release-notes/v_0_2_5.md"},i="v0.2.5",c={unversionedId:"docs/managed-datahub/release-notes/v_0_2_5",id:"docs/managed-datahub/release-notes/v_0_2_5",title:"v0.2.5",description:"---",source:"@site/genDocs/docs/managed-datahub/release-notes/v_0_2_5.md",sourceDirName:"docs/managed-datahub/release-notes",slug:"/managed-datahub/release-notes/v_0_2_5",permalink:"/docs/managed-datahub/release-notes/v_0_2_5",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/release-notes/v_0_2_5.md",tags:[],version:"current",frontMatter:{title:"v0.2.5",slug:"/managed-datahub/release-notes/v_0_2_5",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/release-notes/v_0_2_5.md"},sidebar:"overviewSidebar",previous:{title:"v0.2.6",permalink:"/docs/managed-datahub/release-notes/v_0_2_6"},next:{title:"v0.2.4",permalink:"/docs/managed-datahub/release-notes/v_0_2_4"}},u={},p=[{value:"Release Availability Date",id:"release-availability-date",level:2},{value:"Release Changelog",id:"release-changelog",level:2}],d={toc:p},f="wrapper";function b(e){var{components:t}=e,a=l(e,["components"]);return(0,r.yg)(f,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){n(e,t,a[t])}))}return e}({},d,a),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"v025"},"v0.2.5"),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"release-availability-date"},"Release Availability Date"),(0,r.yg)("p",null,"11-Apr-2023"),(0,r.yg)("h2",{id:"release-changelog"},"Release Changelog"),(0,r.yg)("hr",null),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Since ",(0,r.yg)("inlineCode",{parentName:"li"},"v0.2.4")," these changes from OSS DataHub ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/compare/2764c44977583d8a34a3425454e81a730b120829...294c5ff50789564dc836ca0cbcd8f7020756eb0a"},"https://github.com/datahub-project/datahub/compare/2764c44977583d8a34a3425454e81a730b120829...294c5ff50789564dc836ca0cbcd8f7020756eb0a")," have been pulled in."),(0,r.yg)("li",{parentName:"ul"},"feat(graphql): Adding new offline features to dataset stats summary"),(0,r.yg)("li",{parentName:"ul"},"feat(metadata tests): Further Metadata Tests Improvements (Prep for Uplift)"),(0,r.yg)("li",{parentName:"ul"},"refactor(tests): Supporting soft-deleted Metadata Tests"),(0,r.yg)("li",{parentName:"ul"},"feat(tests): Adding a high-quality set of Default Metadata Tests"),(0,r.yg)("li",{parentName:"ul"},"refactor(tests): Uplift Metadata Tests UX"),(0,r.yg)("li",{parentName:"ul"},"refactor(Tests): Metadata Tests Uplift: Adding Empty Tests state"),(0,r.yg)("li",{parentName:"ul"},"refactor(Tests): Adding Test Results Modal "),(0,r.yg)("li",{parentName:"ul"},"refactor(tests): Adding more default tests and tags"),(0,r.yg)("li",{parentName:"ul"},"fix(graphQL): Add protection agaisnt optional null OwnershipTypes"),(0,r.yg)("li",{parentName:"ul"},"fix(ui): Fix tags display name + color in UI for autocomplete, search preview, entity profile"),(0,r.yg)("li",{parentName:"ul"},"fix(ui) Fix tags and terms columns on nested schema fields")))}b.isMDXComponent=!0}}]);