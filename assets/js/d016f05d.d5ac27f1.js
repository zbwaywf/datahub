"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[39351],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>g});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),b=n,g=d["".concat(l,".").concat(b)]||d[b]||p[b]||o;return a?r.createElement(g,i(i({ref:t},c),{},{components:a})):r.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},53427:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>d});a(96540);var r=a(15680);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const s={title:"Setup",sidebar_label:"Setup",slug:"/quick-ingestion-guides/snowflake/setup",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/snowflake/setup.md"},l="Snowflake Ingestion Guide: Setup & Prerequisites",u={unversionedId:"docs/quick-ingestion-guides/snowflake/setup",id:"docs/quick-ingestion-guides/snowflake/setup",title:"Setup",description:"In order to configure ingestion from Snowflake, you'll first have to ensure you have a Snowflake user with the ACCOUNTADMIN role or MANAGE GRANTS privilege.",source:"@site/genDocs/docs/quick-ingestion-guides/snowflake/setup.md",sourceDirName:"docs/quick-ingestion-guides/snowflake",slug:"/quick-ingestion-guides/snowflake/setup",permalink:"/docs/quick-ingestion-guides/snowflake/setup",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/snowflake/setup.md",tags:[],version:"current",frontMatter:{title:"Setup",sidebar_label:"Setup",slug:"/quick-ingestion-guides/snowflake/setup",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/snowflake/setup.md"},sidebar:"overviewSidebar",previous:{title:"Overview",permalink:"/docs/quick-ingestion-guides/snowflake/overview"},next:{title:"Configuration",permalink:"/docs/quick-ingestion-guides/snowflake/configuration"}},c={},d=[{value:"Snowflake Prerequisites",id:"snowflake-prerequisites",level:2},{value:"Next Steps",id:"next-steps",level:2}],p={toc:d},b="wrapper";function g(e){var{components:t}=e,a=i(e,["components"]);return(0,r.yg)(b,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){n(e,t,a[t])}))}return e}({},p,a),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"snowflake-ingestion-guide-setup--prerequisites"},"Snowflake Ingestion Guide: Setup & Prerequisites"),(0,r.yg)("p",null,"In order to configure ingestion from Snowflake, you'll first have to ensure you have a Snowflake user with the ",(0,r.yg)("inlineCode",{parentName:"p"},"ACCOUNTADMIN")," role or ",(0,r.yg)("inlineCode",{parentName:"p"},"MANAGE GRANTS")," privilege."),(0,r.yg)("h2",{id:"snowflake-prerequisites"},"Snowflake Prerequisites"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a DataHub-specific role by executing the following queries in Snowflake. Replace ",(0,r.yg)("inlineCode",{parentName:"p"},"<your-warehouse>")," with an existing warehouse that you wish to use for DataHub ingestion."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'create or replace role datahub_role;\n-- Grant access to a warehouse to run queries to view metadata\ngrant operate, usage on warehouse "<your-warehouse>" to role datahub_role;\n')),(0,r.yg)("p",{parentName:"li"},"Make note of this role and warehouse. You'll need this in the next step.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a DataHub-specific user by executing the following queries. Replace ",(0,r.yg)("inlineCode",{parentName:"p"},"<your-password>")," with a strong password. Replace ",(0,r.yg)("inlineCode",{parentName:"p"},"<your-warehouse>")," with the same warehouse used above."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"create user datahub_user display_name = 'DataHub' password='<your-password>' default_role = datahub_role default_warehouse = '<your-warehouse>';\n-- Grant access to the DataHub role created above\ngrant role datahub_role to user datahub_user;\n")),(0,r.yg)("p",{parentName:"li"},"Make note of the user and its password. You'll need this in the next step.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Assign privileges to read metadata about your assets by executing the following queries. Replace ",(0,r.yg)("inlineCode",{parentName:"p"},"<your-database>")," with an existing database. Repeat for all databases from your Snowflake instance that you wish to integrate with DataHub."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"set db_var = '\"<your-database>\"';\n-- Grant access to view database and schema in which your tables/views exist\ngrant usage on DATABASE identifier($db_var) to role datahub_role;\ngrant usage on all schemas in database identifier($db_var) to role datahub_role;\ngrant usage on future schemas in database identifier($db_var) to role datahub_role;\n\n-- Grant Select acccess enable Data Profiling\ngrant select on all tables in database identifier($db_var) to role datahub_role;\ngrant select on future tables in database identifier($db_var) to role datahub_role;\ngrant select on all external tables in database identifier($db_var) to role datahub_role;\ngrant select on future external tables in database identifier($db_var) to role datahub_role;\ngrant select on all views in database identifier($db_var) to role datahub_role;\ngrant select on future views in database identifier($db_var) to role datahub_role;\n\n--  Grant access to view tables and views\ngrant references on all tables in database identifier($db_var) to role datahub_role;\ngrant references on future tables in database identifier($db_var) to role datahub_role;\ngrant references on all external tables in database identifier($db_var) to role datahub_role;\ngrant references on future external tables in database identifier($db_var) to role datahub_role;\ngrant references on all views in database identifier($db_var) to role datahub_role;\ngrant references on future views in database identifier($db_var) to role datahub_role;\n\n-- Assign privileges to extract lineage and usage statistics from Snowflake by executing the below query.\ngrant imported privileges on database snowflake to role datahub_role;\n\n")),(0,r.yg)("p",{parentName:"li"},"If you have imported databases in your Snowflake instance that you wish to integrate with DataHub, you'll need to use the below query for them."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'grant IMPORTED PRIVILEGES on database "<your-database>" to role datahub_role;  \n')))),(0,r.yg)("h2",{id:"next-steps"},"Next Steps"),(0,r.yg)("p",null,"Once you've done all of the above in Snowflake, it's time to ",(0,r.yg)("a",{parentName:"p",href:"/docs/quick-ingestion-guides/snowflake/configuration"},"move on")," to configuring the actual ingestion source within DataHub."),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Need more help? Join the conversation in ",(0,r.yg)("a",{parentName:"em",href:"http://slack.datahubproject.io"},"Slack"),"!")))}g.isMDXComponent=!0}}]);