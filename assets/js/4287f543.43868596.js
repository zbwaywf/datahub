"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[11511],{71178:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>b,frontMatter:()=>l,metadata:()=>d,toc:()=>m});n(67294);var a=n(3905),r=n(51715),o=n(7626);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={title:"Ownership",slug:"/api/tutorials/owners",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/owners.md"},u="Ownership",d={unversionedId:"docs/api/tutorials/owners",id:"version-0.13.1/docs/api/tutorials/owners",title:"Ownership",description:"Why Would You Use Users and Groups?",source:"@site/versioned_docs/version-0.13.1/docs/api/tutorials/owners.md",sourceDirName:"docs/api/tutorials",slug:"/api/tutorials/owners",permalink:"/docs/api/tutorials/owners",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/owners.md",tags:[],version:"0.13.1",frontMatter:{title:"Ownership",slug:"/api/tutorials/owners",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/owners.md"},sidebar:"overviewSidebar",previous:{title:"Terms",permalink:"/docs/api/tutorials/terms"},next:{title:"Domains",permalink:"/docs/api/tutorials/domains"}},c={},m=[{value:"Why Would You Use Users and Groups?",id:"why-would-you-use-users-and-groups",level:2},{value:"Goal Of This Guide",id:"goal-of-this-guide",level:3},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Upsert Users",id:"upsert-users",level:2},{value:"Expected Outcomes of Upserting User",id:"expected-outcomes-of-upserting-user",level:3},{value:"Upsert Group",id:"upsert-group",level:2},{value:"Expected Outcomes of Upserting Group",id:"expected-outcomes-of-upserting-group",level:3},{value:"Read Owners",id:"read-owners",level:2},{value:"Add Owners",id:"add-owners",level:2},{value:"Expected Outcomes of Adding Owner",id:"expected-outcomes-of-adding-owner",level:2},{value:"Remove Owners",id:"remove-owners",level:2},{value:"Expected Outcomes of Removing Owners",id:"expected-outcomes-of-removing-owners",level:3}],h={toc:m},g="wrapper";function b(e){var{components:t}=e,n=p(e,["components"]);return(0,a.kt)(g,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){s(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ownership"},"Ownership"),(0,a.kt)("h2",{id:"why-would-you-use-users-and-groups"},"Why Would You Use Users and Groups?"),(0,a.kt)("p",null,"Users and groups are essential for managing ownership of data.\nBy creating or updating user accounts and assigning them to appropriate groups, administrators can ensure that the right people can access the data they need to do their jobs.\nThis helps to avoid confusion or conflicts over who is responsible for specific datasets and can improve the overall effectiveness."),(0,a.kt)("h3",{id:"goal-of-this-guide"},"Goal Of This Guide"),(0,a.kt)("p",null,"This guide will show you how to"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create: create or update users and groups."),(0,a.kt)("li",{parentName:"ul"},"Read: read owners attached to a dataset."),(0,a.kt)("li",{parentName:"ul"},"Add: add user group as an owner to a dataset."),(0,a.kt)("li",{parentName:"ul"},"Remove: remove the owner from a dataset.")),(0,a.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,a.kt)("p",null,"For this tutorial, you need to deploy DataHub Quickstart and ingest sample data.\nFor detailed information, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/quickstart"},"Datahub Quickstart Guide"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"In this guide, ingesting sample data is optional.")),(0,a.kt)("h2",{id:"upsert-users"},"Upsert Users"),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"cli",label:"CLI",mdxType:"TabItem"},(0,a.kt)("p",null,"Save this ",(0,a.kt)("inlineCode",{parentName:"p"},"user.yaml")," as a local file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'- id: bar@acryl.io\n  first_name: The\n  last_name: Bar\n  email: bar@acryl.io\n  slack: "@the_bar_raiser"\n  description: "I like raising the bar higher"\n  groups:\n    - foogroup@acryl.io\n- id: datahub\n  slack: "@datahubproject"\n  phone: "1-800-GOT-META"\n  description: "The DataHub Project"\n  picture_link: "https://raw.githubusercontent.com/datahub-project/datahub/master/datahub-web-react/src/images/datahub-logo-color-stable.svg"\n')),(0,a.kt)("p",null,"Execute the following CLI command to ingest user data.\nSince the user datahub already exists in the sample data, any updates made to the user information will overwrite the existing data."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"datahub user upsert -f user.yaml\n")),(0,a.kt)("p",null,"If you see the following logs, the operation was successful:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Update succeeded for urn urn:li:corpuser:bar@acryl.io.\nUpdate succeeded for urn urn:li:corpuser:datahub.\n"))),(0,a.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/upsert_user.py\nimport logging\n\nfrom datahub.api.entities.corpuser.corpuser import CorpUser, CorpUserGenerationConfig\nfrom datahub.ingestion.graph.client import DataHubGraph, DataHubGraphConfig\n\nlog = logging.getLogger(__name__)\nlogging.basicConfig(level=logging.INFO)\n\nuser_email = "bar@acryl.io"\n\nuser: CorpUser = CorpUser(\n    id=user_email,\n    display_name="The Bar",\n    email=user_email,\n    title="Software Engineer",\n    first_name="The",\n    last_name="Bar",\n    full_name="The Bar",\n)\n\n# Create graph client\ndatahub_graph = DataHubGraph(DataHubGraphConfig(server="http://localhost:8080"))\nfor event in user.generate_mcp(\n    generation_config=CorpUserGenerationConfig(override_editable=False)\n):\n    datahub_graph.emit(event)\nlog.info(f"Upserted user {user.urn}")\n\n')))),(0,a.kt)("h3",{id:"expected-outcomes-of-upserting-user"},"Expected Outcomes of Upserting User"),(0,a.kt)("p",null,"You can see the user ",(0,a.kt)("inlineCode",{parentName:"p"},"The bar")," has been created and the user ",(0,a.kt)("inlineCode",{parentName:"p"},"Datahub")," has been updated under ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings > Access > Users & Groups")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/tutorials/user-upserted.png"})),(0,a.kt)("h2",{id:"upsert-group"},"Upsert Group"),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"cli",label:"CLI",mdxType:"TabItem"},(0,a.kt)("p",null,"Save this ",(0,a.kt)("inlineCode",{parentName:"p"},"group.yaml")," as a local file. Note that the group includes a list of users who are owners and members.\nWithin these lists, you can refer to the users by their ids or their urns, and can additionally specify their metadata inline within the group description itself. See the example below to understand how this works and feel free to make modifications to this file locally to see the effects of your changes in your local DataHub instance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'id: foogroup@acryl.io\ndisplay_name: Foo Group\nowners:\n  - datahub\nmembers:\n  - bar@acryl.io # refer to a user either by id or by urn\n  - id: joe@acryl.io # inline specification of user\n    slack: "@joe_shmoe"\n    display_name: "Joe\'s Hub"\n')),(0,a.kt)("p",null,"Execute the following CLI command to ingest this group's information."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"datahub group upsert -f group.yaml\n")),(0,a.kt)("p",null,"If you see the following logs, the operation was successful:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Update succeeded for group urn:li:corpGroup:foogroup@acryl.io.\n"))),(0,a.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/upsert_group.py\nimport logging\n\nfrom datahub.api.entities.corpgroup.corpgroup import (\n    CorpGroup,\n    CorpGroupGenerationConfig,\n)\nfrom datahub.ingestion.graph.client import DataHubGraph, DataHubGraphConfig\nfrom datahub.metadata.urns import CorpUserUrn\n\nlog = logging.getLogger(__name__)\nlogging.basicConfig(level=logging.INFO)\n\ngroup_email = "foogroup@acryl.io"\ngroup = CorpGroup(\n    id=group_email,\n    owners=[str(CorpUserUrn("datahub"))],\n    members=[\n        str(CorpUserUrn("bar@acryl.io")),\n        str(CorpUserUrn("joe@acryl.io")),\n    ],\n    display_name="Foo Group",\n    email=group_email,\n    description="Software engineering team",\n    slack="@foogroup",\n)\n\n# Create graph client\ndatahub_graph = DataHubGraph(DataHubGraphConfig(server="http://localhost:8080"))\n\nfor event in group.generate_mcp(\n    generation_config=CorpGroupGenerationConfig(\n        override_editable=False, datahub_graph=datahub_graph\n    )\n):\n    datahub_graph.emit(event)\nlog.info(f"Upserted group {group.urn}")\n\n')))),(0,a.kt)("h3",{id:"expected-outcomes-of-upserting-group"},"Expected Outcomes of Upserting Group"),(0,a.kt)("p",null,"You can see the group ",(0,a.kt)("inlineCode",{parentName:"p"},"Foo Group")," has been created under ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings > Access > Users & Groups")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/tutorials/group-upserted.png"})),(0,a.kt)("h2",{id:"read-owners"},"Read Owners"),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'query {\n  dataset(urn: "urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)") {\n    ownership {\n      owners {\n        owner {\n          ... on CorpUser {\n            urn\n            type\n          }\n          ... on CorpGroup {\n            urn\n            type\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,a.kt)("p",null,"If you see the following response, the operation was successful:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "dataset": {\n      "ownership": {\n        "owners": [\n          {\n            "owner": {\n              "urn": "urn:li:corpuser:jdoe",\n              "type": "CORP_USER"\n            }\n          },\n          {\n            "owner": {\n              "urn": "urn:li:corpuser:datahub",\n              "type": "CORP_USER"\n            }\n          }\n        ]\n      }\n    }\n  },\n  "extensions": {}\n}\n'))),(0,a.kt)(o.Z,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request POST 'http://localhost:8080/api/graphql' \\\n--header 'Authorization: Bearer <my-access-token>' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{ \"query\": \"{ dataset(urn: \\\"urn:li:dataset:(urn:li:dataPlatform:hive,SampleHiveDataset,PROD)\\\") { ownership { owners { owner { ... on CorpUser { urn type } ... on CorpGroup { urn type } } } } } }\", \"variables\":{}}'\n")),(0,a.kt)("p",null,"Expected Response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "dataset": {\n      "ownership": {\n        "owners": [\n          { "owner": { "urn": "urn:li:corpuser:jdoe", "type": "CORP_USER" } },\n          { "owner": { "urn": "urn:li:corpuser:datahub", "type": "CORP_USER" } }\n        ]\n      }\n    }\n  },\n  "extensions": {}\n}\n'))),(0,a.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/dataset_query_owners.py\nfrom datahub.emitter.mce_builder import make_dataset_urn\n\n# read-modify-write requires access to the DataHubGraph (RestEmitter is not enough)\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\n# Imports for metadata model classes\nfrom datahub.metadata.schema_classes import OwnershipClass\n\ndataset_urn = make_dataset_urn(platform="hive", name="SampleHiveDataset", env="PROD")\n\ngms_endpoint = "http://localhost:8080"\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\n\n# Query multiple aspects from entity\nresult = graph.get_aspects_for_entity(\n    entity_urn=dataset_urn,\n    aspects=["ownership"],\n    aspect_types=[OwnershipClass],\n)\n\nprint(result)\n\n')))),(0,a.kt)("h2",{id:"add-owners"},"Add Owners"),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'mutation addOwners {\n    addOwner(\n      input: {\n        ownerUrn: "urn:li:corpGroup:bfoo",\n        resourceUrn: "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)",\n        ownerEntityType: CORP_GROUP,\n        type: TECHNICAL_OWNER\n            }\n    )\n}\n')),(0,a.kt)("p",null,"Expected Response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'{\n  "data": {\n    "addOwner": true\n  },\n  "extensions": {}\n}\n'))),(0,a.kt)(o.Z,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://localhost:8080/api/graphql\' \\\n--header \'Authorization: Bearer <my-access-token>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{ "query": "mutation addOwners { addOwner(input: { ownerUrn: \\"urn:li:corpGroup:bfoo\\", resourceUrn: \\"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)\\", ownerEntityType: CORP_GROUP, type: TECHNICAL_OWNER }) }", "variables":{}}\'\n'))),(0,a.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/dataset_add_owner.py\nimport logging\nfrom typing import Optional\n\nfrom datahub.emitter.mce_builder import make_dataset_urn, make_user_urn\nfrom datahub.emitter.mcp import MetadataChangeProposalWrapper\n\n# read-modify-write requires access to the DataHubGraph (RestEmitter is not enough)\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\n# Imports for metadata model classes\nfrom datahub.metadata.schema_classes import (\n    OwnerClass,\n    OwnershipClass,\n    OwnershipTypeClass,\n)\n\nlog = logging.getLogger(__name__)\nlogging.basicConfig(level=logging.INFO)\n\n\n# Inputs -> owner, ownership_type, dataset\nowner_to_add = make_user_urn("jdoe")\nownership_type = OwnershipTypeClass.TECHNICAL_OWNER\ndataset_urn = make_dataset_urn(platform="hive", name="realestate_db.sales", env="PROD")\n\n# Some objects to help with conditional pathways later\nowner_class_to_add = OwnerClass(owner=owner_to_add, type=ownership_type)\nownership_to_add = OwnershipClass(owners=[owner_class_to_add])\n\n\n# First we get the current owners\ngms_endpoint = "http://localhost:8080"\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\n\n\ncurrent_owners: Optional[OwnershipClass] = graph.get_aspect(\n    entity_urn=dataset_urn, aspect_type=OwnershipClass\n)\n\n\nneed_write = False\nif current_owners:\n    if (owner_to_add, ownership_type) not in [\n        (x.owner, x.type) for x in current_owners.owners\n    ]:\n        # owners exist, but this owner is not present in the current owners\n        current_owners.owners.append(owner_class_to_add)\n        need_write = True\nelse:\n    # create a brand new ownership aspect\n    current_owners = ownership_to_add\n    need_write = True\n\nif need_write:\n    event: MetadataChangeProposalWrapper = MetadataChangeProposalWrapper(\n        entityUrn=dataset_urn,\n        aspect=current_owners,\n    )\n    graph.emit(event)\n    log.info(\n        f"Owner {owner_to_add}, type {ownership_type} added to dataset {dataset_urn}"\n    )\n\nelse:\n    log.info(f"Owner {owner_to_add} already exists, omitting write")\n\n')))),(0,a.kt)("h2",{id:"expected-outcomes-of-adding-owner"},"Expected Outcomes of Adding Owner"),(0,a.kt)("p",null,"You can now see ",(0,a.kt)("inlineCode",{parentName:"p"},"bfoo")," has been added as an owner to the ",(0,a.kt)("inlineCode",{parentName:"p"},"fct_users_created")," dataset."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/tutorials/owner-added.png"})),(0,a.kt)("h2",{id:"remove-owners"},"Remove Owners"),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'mutation removeOwners {\n    removeOwner(\n      input: {\n        ownerUrn: "urn:li:corpuser:jdoe",\n        resourceUrn: "urn:li:dataset:(urn:li:dataPlatform:hdfs,SampleHdfsDataset,PROD)",\n            }\n    )\n}\n')),(0,a.kt)("p",null,"Note that you can also remove owners from multiple entities or subresource using ",(0,a.kt)("inlineCode",{parentName:"p"},"batchRemoveOwners"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'mutation batchRemoveOwners {\n    batchRemoveOwners(\n      input: {\n        ownerUrns: ["urn:li:corpuser:jdoe"],\n        resources: [\n          { resourceUrn:"urn:li:dataset:(urn:li:dataPlatform:hdfs,SampleHdfsDataset,PROD)"} ,\n          { resourceUrn:"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)"} ,]\n      }\n    )\n}\n')),(0,a.kt)("p",null,"Expected Response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'{\n  "data": {\n    "removeOwner": true\n  },\n  "extensions": {}\n}\n'))),(0,a.kt)(o.Z,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://localhost:8080/api/graphql\' \\\n--header \'Authorization: Bearer <my-access-token>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{ "query": "mutation removeOwner { removeOwner(input: { ownerUrn: \\"urn:li:corpuser:jdoe\\", resourceUrn: \\"urn:li:dataset:(urn:li:dataPlatform:hdfs,SampleHdfsDataset,PROD)\\" }) }", "variables":{}}\'\n'))),(0,a.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/dataset_remove_owner_execute_graphql.py\n# read-modify-write requires access to the DataHubGraph (RestEmitter is not enough)\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\ngms_endpoint = "http://localhost:8080"\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\n\n# Query multiple aspects from entity\nquery = """\nmutation batchRemoveOwners {\n    batchRemoveOwners(\n      input: {\n        ownerUrns: ["urn:li:corpuser:jdoe"],\n        resources: [\n          { resourceUrn:"urn:li:dataset:(urn:li:dataPlatform:hdfs,SampleHdfsDataset,PROD)"} ,\n          { resourceUrn:"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)"} ,]\n      }\n    )\n}\n"""\nresult = graph.execute_graphql(query=query)\n\nprint(result)\n\n')))),(0,a.kt)("h3",{id:"expected-outcomes-of-removing-owners"},"Expected Outcomes of Removing Owners"),(0,a.kt)("p",null,"You can now see ",(0,a.kt)("inlineCode",{parentName:"p"},"John Doe")," has been removed as an owner from the ",(0,a.kt)("inlineCode",{parentName:"p"},"fct_users_created")," dataset."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/tutorials/owner-removed.png"})))}b.isMDXComponent=!0}}]);