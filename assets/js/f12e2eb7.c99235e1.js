"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6519],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(a),d=n,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||i;return a?r.createElement(m,o(o({ref:t},c),{},{components:a})):r.createElement(m,o({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},43985:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return h}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),o=["components"],s={slug:"/api/graphql/overview",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/graphql/overview.md"},l="DataHub GraphQL API",p={unversionedId:"docs/api/graphql/overview",id:"docs/api/graphql/overview",isDocsHomePage:!1,title:"DataHub GraphQL API",description:"DataHub provides a rich GraphQL API for programmatically interacting with the Entities & Relationships comprising your organization's Metadata Graph",source:"@site/genDocs/docs/api/graphql/overview.md",sourceDirName:"docs/api/graphql",slug:"/api/graphql/overview",permalink:"/docs/api/graphql/overview",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/graphql/overview.md",tags:[],version:"current",frontMatter:{slug:"/api/graphql/overview",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/graphql/overview.md"},sidebar:"overviewSidebar",previous:{title:"CLI",permalink:"/docs/cli"},next:{title:"Queries",permalink:"/docs/graphql/queries"}},c=[{value:"DataHub provides a rich GraphQL API for programmatically interacting with the Entities &amp; Relationships comprising your organization&#39;s Metadata Graph",id:"datahub-provides-a-rich-graphql-api-for-programmatically-interacting-with-the-entities--relationships-comprising-your-organizations-metadata-graph",children:[],level:3},{value:"Getting Started",id:"getting-started",children:[],level:2},{value:"About GraphQL",id:"about-graphql",children:[],level:2},{value:"GraphQL Schema Reference",id:"graphql-schema-reference",children:[],level:2},{value:"On the Horizon",id:"on-the-horizon",children:[{value:"Supporting Additional Use Cases",id:"supporting-additional-use-cases",children:[],level:3},{value:"Client SDKs",id:"client-sdks",children:[],level:3},{value:"Token Based Authentication",id:"token-based-authentication",children:[],level:3}],level:2},{value:"Feedback, Feature Requests, &amp; Support",id:"feedback-feature-requests--support",children:[],level:2}],u={toc:c};function h(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"datahub-graphql-api"},"DataHub GraphQL API"),(0,i.kt)("h3",{id:"datahub-provides-a-rich-graphql-api-for-programmatically-interacting-with-the-entities--relationships-comprising-your-organizations-metadata-graph"},"DataHub provides a rich ",(0,i.kt)("a",{parentName:"h3",href:"https://graphql.org/"},"GraphQL")," API for programmatically interacting with the Entities & Relationships comprising your organization's Metadata Graph"),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"Check out ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/graphql/getting-started"},"Getting Started")," to start using the DataHub GraphQL API right away. "),(0,i.kt)("h2",{id:"about-graphql"},"About GraphQL"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://graphql.org/"},"GraphQL")," provides a data query language and API with the following characteristics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("strong",{parentName:"li"},"validated specification"),": The GraphQL spec verifies a ",(0,i.kt)("em",{parentName:"li"},"schema")," on the API server. The server in turn is responsible\nfor validating incoming queries from the clients against that schema."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Strongly typed"),": A GraphQL schema declares the universe of types and relationships composing the interface. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Document-oriented & hierarchical"),": GraphQL makes it eay to ask for related entities using a familiar JSON document\nstructure. This minimizes the number of round-trip API requests a client must make to answer a particular question."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Flexible & efficient"),": GraphQL provides a way to ask for only the data you want, and that's it. Ignore all\nthe rest. It allows you to replace multiple REST calls with one GraphQL call."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Large Open Source Ecosystem"),": Open source GraphQL projects have been developed for ",(0,i.kt)("a",{parentName:"li",href:"https://graphql.org/code/"},"virtually every programming language"),". With a thriving\ncommunity, it offers a sturdy foundation to build upon.\n")),(0,i.kt)("p",null,"For these reasons among others DataHub provides a GraphQL API on top of the Metadata Graph,\npermitting easy exploration of the Entities & Relationships composing it. "),(0,i.kt)("p",null,"For more information about the GraphQL specification, check out ",(0,i.kt)("a",{parentName:"p",href:"https://graphql.org/learn/"},"Introduction to GraphQL"),". "),(0,i.kt)("h2",{id:"graphql-schema-reference"},"GraphQL Schema Reference"),(0,i.kt)("p",null,"The Reference docs in the sidebar are generated from the DataHub GraphQL schema. Each call to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/graphql")," endpoint is\nvalidated against this schema. You can use these docs to understand data that is available for retrieval and operations\nthat may be performed using the API."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Available Operations: ",(0,i.kt)("a",{parentName:"li",href:"/docs/graphql/queries"},"Queries")," (Reads) & ",(0,i.kt)("a",{parentName:"li",href:"/docs/graphql/mutations"},"Mutations")," (Writes)"),(0,i.kt)("li",{parentName:"ul"},"Schema Types: ",(0,i.kt)("a",{parentName:"li",href:"/docs/graphql/objects"},"Objects"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/graphql/inputObjects"},"Input Objects"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/graphql/interfaces"},"Interfaces"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/graphql/unions"},"Unions"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/graphql/enums"},"Enums"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/graphql/scalars"},"Scalars"))),(0,i.kt)("h2",{id:"on-the-horizon"},"On the Horizon"),(0,i.kt)("p",null,"The GraphQL API undergoing continuous development. A few of the things we're most excited about can be found below."),(0,i.kt)("h3",{id:"supporting-additional-use-cases"},"Supporting Additional Use Cases"),(0,i.kt)("p",null,"DataHub plans to support the following use cases via the GraphQL API:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Creating entities"),": Programmatically creating Datasets, Dashboards, Charts, Data Flows (Pipelines), Data Jobs (Tasks) and more."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Listing entities"),": Listing all Metadata Entities of a particular type. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Removing entities"),": The ability to soft & hard delete Metadata Entities on DataHub.")),(0,i.kt)("p",null,"This will enable organization's to build flows on top of DataHub for creating custom Metadata Entities,\nextracting batch data from DataHub, and curating the Entities that are visible on the platform. "),(0,i.kt)("h3",{id:"client-sdks"},"Client SDKs"),(0,i.kt)("p",null,"DataHub plans to develop Open Source Client SDKs for Python, Java, Javascript among others on top of this API. If you're interested\nin contributing, ",(0,i.kt)("a",{parentName:"p",href:"https://datahubspace.slack.com/join/shared_invite/zt-nx7i0dj7-I3IJYC551vpnvvjIaNRRGw#/shared-invite/email"},"join us on Slack"),"!"),(0,i.kt)("h3",{id:"token-based-authentication"},"Token Based Authentication"),(0,i.kt)("p",null,"Add universal token based authentication and get rid of the legacy ",(0,i.kt)("inlineCode",{parentName:"p"},"PLAY_SESSION")," session cookie and ",(0,i.kt)("inlineCode",{parentName:"p"},"X-DataHub-Actor")," used\nfor conveying actor identity information. "),(0,i.kt)("h2",{id:"feedback-feature-requests--support"},"Feedback, Feature Requests, & Support"),(0,i.kt)("p",null,"Visit our ",(0,i.kt)("a",{parentName:"p",href:"https://datahubspace.slack.com/join/shared_invite/zt-nx7i0dj7-I3IJYC551vpnvvjIaNRRGw#/shared-invite/email"},"Slack channel")," to ask questions, tell us what we can do better, & make requests for what you'd like to see in the future. Or just\nstop by to say 'Hi'."))}h.isMDXComponent=!0}}]);