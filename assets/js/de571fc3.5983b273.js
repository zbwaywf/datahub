"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[76962],{3905:(t,e,i)=>{i.d(e,{Zo:()=>l,kt:()=>h});var n=i(67294);function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function s(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function a(t,e){if(null==t)return{};var i,n,r=function(t,e){if(null==t)return{};var i,n,r={},s=Object.keys(t);for(n=0;n<s.length;n++)i=s[n],e.indexOf(i)>=0||(r[i]=t[i]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)i=s[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(r[i]=t[i])}return r}var c=n.createContext({}),u=function(t){var e=n.useContext(c),i=e;return t&&(i="function"==typeof t?t(e):o(o({},e),t)),i},l=function(t){var e=u(t.components);return n.createElement(c.Provider,{value:e},t.children)},g="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var i=t.components,r=t.mdxType,s=t.originalType,c=t.parentName,l=a(t,["components","mdxType","originalType","parentName"]),g=u(i),p=r,h=g["".concat(c,".").concat(p)]||g[p]||d[p]||s;return i?n.createElement(h,o(o({ref:e},l),{},{components:i})):n.createElement(h,o({ref:e},l))}));function h(t,e){var i=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var s=i.length,o=new Array(s);o[0]=p;var a={};for(var c in e)hasOwnProperty.call(e,c)&&(a[c]=e[c]);a.originalType=t,a[g]="string"==typeof t?t:r,o[1]=a;for(var u=2;u<s;u++)o[u]=i[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},49004:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>u,toc:()=>g});i(67294);var n=i(3905);function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function s(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}(Object(e)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))})),t}function o(t,e){if(null==t)return{};var i,n,r=function(t,e){if(null==t)return{};var i,n,r={},s=Object.keys(t);for(n=0;n<s.length;n++)i=s[n],e.indexOf(i)>=0||(r[i]=t[i]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)i=s[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(r[i]=t[i])}return r}const a={title:"Configuration",sidebar_label:"Configuration",slug:"/quick-ingestion-guides/redshift/configuration",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/redshift/configuration.md"},c="Configuring Your Redshift Connector to DataHub",u={unversionedId:"docs/quick-ingestion-guides/redshift/configuration",id:"version-0.13.0/docs/quick-ingestion-guides/redshift/configuration",title:"Configuration",description:"Now that you have created a DataHub user in Redshift in the prior step, it's time to set up a connection via the DataHub UI.",source:"@site/versioned_docs/version-0.13.0/docs/quick-ingestion-guides/redshift/configuration.md",sourceDirName:"docs/quick-ingestion-guides/redshift",slug:"/quick-ingestion-guides/redshift/configuration",permalink:"/docs/0.13.0/quick-ingestion-guides/redshift/configuration",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/redshift/configuration.md",tags:[],version:"0.13.0",frontMatter:{title:"Configuration",sidebar_label:"Configuration",slug:"/quick-ingestion-guides/redshift/configuration",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/redshift/configuration.md"},sidebar:"overviewSidebar",previous:{title:"Setup",permalink:"/docs/0.13.0/quick-ingestion-guides/redshift/setup"},next:{title:"Overview",permalink:"/docs/0.13.0/quick-ingestion-guides/snowflake/overview"}},l={},g=[{value:"Configure Secrets",id:"configure-secrets",level:2},{value:"Configure Recipe",id:"configure-recipe",level:2},{value:"Schedule Execution",id:"schedule-execution",level:2},{value:"Finish Up",id:"finish-up",level:2},{value:"Validate Ingestion Runs",id:"validate-ingestion-runs",level:2}],d={toc:g},p="wrapper";function h(t){var{components:e}=t,i=o(t,["components"]);return(0,n.kt)(p,s(function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter((function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable})))),n.forEach((function(e){r(t,e,i[e])}))}return t}({},d,i),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"configuring-your-redshift-connector-to-datahub"},"Configuring Your Redshift Connector to DataHub"),(0,n.kt)("p",null,"Now that you have created a DataHub user in Redshift in ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.13.0/quick-ingestion-guides/redshift/setup"},"the prior step"),", it's time to set up a connection via the DataHub UI."),(0,n.kt)("h2",{id:"configure-secrets"},"Configure Secrets"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Within DataHub, navigate to the ",(0,n.kt)("strong",{parentName:"li"},"Ingestion")," tab in the top, right corner of your screen")),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"75%",alt:'Navigate to the "Ingestion Tab"',src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/redshift/redshift_ingestion_ingestion_button.png"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you do not see the Ingestion tab, please contact your DataHub admin to grant you the correct permissions")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Navigate to the ",(0,n.kt)("strong",{parentName:"li"},"Secrets")," tab and click ",(0,n.kt)("strong",{parentName:"li"},"Create new secret"))),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"75%",alt:"Secrets Tab",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/redshift/redshift_ingestion_secrets_tab.png"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Create a Redshift User's Password secret")),(0,n.kt)("p",null,"This will securely store your Redshift User's password within DataHub"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Create new secret")," again"),(0,n.kt)("li",{parentName:"ul"},"Enter a name like ",(0,n.kt)("inlineCode",{parentName:"li"},"REDSHIFT_PASSWORD")," - we will use this later to refer to the secret"),(0,n.kt)("li",{parentName:"ul"},"Enter your ",(0,n.kt)("inlineCode",{parentName:"li"},"datahub")," redshift user's password"),(0,n.kt)("li",{parentName:"ul"},"Optionally add a description"),(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Create"))),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"75%",alt:"Redshift Password Secret",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/redshift/redshift_ingestion_password_secret.png"})),(0,n.kt)("h2",{id:"configure-recipe"},"Configure Recipe"),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Navigate to the ",(0,n.kt)("strong",{parentName:"li"},"Sources")," tab and click ",(0,n.kt)("strong",{parentName:"li"},"Create new source"))),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"75%",alt:'Click "Create new source"',src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/redshift/redshift_ingestion_click_create_new_source_button.png"})),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Select Redshift")),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"75%",alt:"Select BigQuery from the options",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/redshift/redshift_ingestion_redshift_button.png"})),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"Fill out the Redshift Recipe")),(0,n.kt)("p",null,"Populate the Password field by selecting Redshift Password secrets you created in steps 3 and 4."),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"75%",alt:"Fill out the Redshift Recipe",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/redshift/redshift-ingestion-recipe.png"})),(0,n.kt)("h2",{id:"schedule-execution"},"Schedule Execution"),(0,n.kt)("p",null,"Now it's time to schedule a recurring ingestion pipeline to regularly extract metadata from your Redshift instance."),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},"Decide how regularly you want this ingestion to run-- day, month, year, hour, minute, etc. Select from the dropdown")),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"75%",alt:"schedule selector",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/redshift/redshift_ingestion_scheduled_execution.png"})),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},"Ensure you've configured your correct timezone")),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"75%",alt:"timezone_selector",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/redshift/redshift_ingestion_timezone_selector.png"})),(0,n.kt)("ol",{start:9},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Next")," when you are done")),(0,n.kt)("h2",{id:"finish-up"},"Finish Up"),(0,n.kt)("ol",{start:10},(0,n.kt)("li",{parentName:"ol"},"Name your ingestion source, then click ",(0,n.kt)("strong",{parentName:"li"},"Save and Run"))),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"75%",alt:"Name your ingestion",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/redshift/redshift_ingestion_name_ingestion.png"})),(0,n.kt)("p",null,"You will now find your new ingestion source running"),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"75%",alt:"ingestion_running",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/redshift/redshift_ingestion_running.png"})),(0,n.kt)("h2",{id:"validate-ingestion-runs"},"Validate Ingestion Runs"),(0,n.kt)("ol",{start:11},(0,n.kt)("li",{parentName:"ol"},"View the latest status of ingestion runs on the Ingestion page")),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"75%",alt:"ingestion succeeded",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/redshift/redshift_ingestion_succeeded.png"})),(0,n.kt)("ol",{start:12},(0,n.kt)("li",{parentName:"ol"},"Click the plus sign to expand the full list of historical runs and outcomes; click ",(0,n.kt)("strong",{parentName:"li"},"Details")," to see the outcomes of a specific run")),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"75%",alt:"ingestion_details",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/redshift/redshift_ingestion_details.png"})),(0,n.kt)("ol",{start:13},(0,n.kt)("li",{parentName:"ol"},"From the Ingestion Run Details page, pick ",(0,n.kt)("strong",{parentName:"li"},"View All")," to see which entities were ingested")),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"75%",alt:"ingestion_details_view_all",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/redshift/redshift_ingestion_details_view_all.png"})),(0,n.kt)("ol",{start:14},(0,n.kt)("li",{parentName:"ol"},"Pick an entity from the list to manually validate if it contains the detail you expected  ")),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"75%",alt:"ingestion_details_view_all",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/redshift/redshift_ingestion_ingested_assets.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Congratulations!")," You've successfully set up Redshift as an ingestion source for DataHub!"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Need more help? Join the conversation in ",(0,n.kt)("a",{parentName:"em",href:"http://slack.datahubproject.io"},"Slack"),"!")))}h.isMDXComponent=!0}}]);