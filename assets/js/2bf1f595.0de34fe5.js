"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7546],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),d=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=d(a),u=n,h=l["".concat(p,".").concat(u)]||l[u]||m[u]||o;return a?r.createElement(h,s(s({ref:t},c),{},{components:a})):r.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[l]="string"==typeof e?e:n,s[1]=i;for(var d=2;d<o;d++)s[d]=a[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},82111:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const o={title:"How to add a new metadata aspect?",slug:"/how/add-new-aspect",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/add-new-aspect.md"},s="How to add a new metadata aspect?",i={unversionedId:"docs/how/add-new-aspect",id:"version-0.11.0/docs/how/add-new-aspect",title:"How to add a new metadata aspect?",description:"Adding a new metadata aspect is one of the most common ways to extend an existing entity.",source:"@site/versioned_docs/version-0.11.0/docs/how/add-new-aspect.md",sourceDirName:"docs/how",slug:"/how/add-new-aspect",permalink:"/docs/how/add-new-aspect",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/how/add-new-aspect.md",tags:[],version:"0.11.0",frontMatter:{title:"How to add a new metadata aspect?",slug:"/how/add-new-aspect",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/add-new-aspect.md"}},p={},d=[],c={toc:d},l="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(l,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-add-a-new-metadata-aspect"},"How to add a new metadata aspect?"),(0,n.kt)("p",null,"Adding a new metadata ",(0,n.kt)("a",{parentName:"p",href:"/docs/what/aspect"},"aspect")," is one of the most common ways to extend an existing ",(0,n.kt)("a",{parentName:"p",href:"/docs/what/entity"},"entity"),".\nWe'll use the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/identity/CorpUserEditableInfo.pdl"},"CorpUserEditableInfo")," as an example here."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add the aspect model to the corresponding namespace (e.g. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/tree/master/metadata-models/src/main/pegasus/com/linkedin/identity"},(0,n.kt)("inlineCode",{parentName:"a"},"com.linkedin.identity")),")")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Extend the entity's aspect union to include the new aspect (e.g. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/metadata/aspect/CorpUserAspect.pdl"},(0,n.kt)("inlineCode",{parentName:"a"},"CorpUserAspect")),")")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Rebuild the rest.li ",(0,n.kt)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/modeling/compatibility_check"},"IDL & snapshot")," by running the following command from the project root"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"./gradlew :metadata-service:restli-servlet-impl:build -Prest.model.compatibility=ignore\n")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"To surface the new aspect at the top-level ",(0,n.kt)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/user_guide/restli_server#writing-resources"},"resource endpoint"),", extend the resource data model (e.g. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/gms/api/src/main/pegasus/com/linkedin/identity/CorpUser.pdl"},(0,n.kt)("inlineCode",{parentName:"a"},"CorpUser")),") with an optional field (e.g. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/gms/api/src/main/pegasus/com/linkedin/identity/CorpUser.pdl#L21"},(0,n.kt)("inlineCode",{parentName:"a"},"editableInfo")),"). You'll also need to extend the ",(0,n.kt)("inlineCode",{parentName:"p"},"toValue")," & ",(0,n.kt)("inlineCode",{parentName:"p"},"toSnapshot")," methods of the top-level resource (e.g. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/gms/impl/src/main/java/com/linkedin/metadata/resources/identity/CorpUsers.java"},(0,n.kt)("inlineCode",{parentName:"a"},"CorpUsers")),") to convert between the snapshot & value models.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"(Optional) If there's need to update the aspect via API (instead of/in addition to MCE), add a ",(0,n.kt)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/user_guide/restli_server#sub-resources"},"sub-resource")," endpoint for the new aspect (e.g. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/gms/impl/src/main/java/com/linkedin/metadata/resources/identity/CorpUsersEditableInfoResource.java"},(0,n.kt)("inlineCode",{parentName:"a"},"CorpUsersEditableInfoResource")),"). The sub-resource endpiont also allows you to retrieve previous versions of the aspect as well as additional metadata such as the audit stamp.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"After rebuilding & restarting ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/tree/master/gms"},"gms"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/tree/master/metadata-jobs/mce-consumer-job"},"mce-consumer-job")," & ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/tree/master/metadata-jobs/mae-consumer-job"},"mae-consumer-job"),",\nyou should be able to start emitting ",(0,n.kt)("a",{parentName:"p",href:"/docs/what/mxe"},"MCE")," with the new aspect and have it automatically ingested & stored in DB."))))}m.isMDXComponent=!0}}]);