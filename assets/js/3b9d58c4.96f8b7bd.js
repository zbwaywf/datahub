"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[18180],{91762:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>m,metadata:()=>d,toc:()=>c});a(67294);var n=a(3905),r=a(51715),s=a(7626);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const m={title:"Terms",slug:"/api/tutorials/terms",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/terms.md"},u="Terms",d={unversionedId:"docs/api/tutorials/terms",id:"version-0.13.0/docs/api/tutorials/terms",title:"Terms",description:"Why Would You Use Terms on Datasets?",source:"@site/versioned_docs/version-0.13.0/docs/api/tutorials/terms.md",sourceDirName:"docs/api/tutorials",slug:"/api/tutorials/terms",permalink:"/docs/0.13.0/api/tutorials/terms",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/terms.md",tags:[],version:"0.13.0",frontMatter:{title:"Terms",slug:"/api/tutorials/terms",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/terms.md"},sidebar:"overviewSidebar",previous:{title:"Tags",permalink:"/docs/0.13.0/api/tutorials/tags"},next:{title:"Ownership",permalink:"/docs/0.13.0/api/tutorials/owners"}},p={},c=[{value:"Why Would You Use Terms on Datasets?",id:"why-would-you-use-terms-on-datasets",level:2},{value:"Goal Of This Guide",id:"goal-of-this-guide",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create Terms",id:"create-terms",level:2},{value:"Expected Outcome of Creating Terms",id:"expected-outcome-of-creating-terms",level:3},{value:"Read Terms",id:"read-terms",level:2},{value:"Add Terms",id:"add-terms",level:2},{value:"Add Terms to a dataset",id:"add-terms-to-a-dataset",level:3},{value:"Add Terms to a Column of a Dataset",id:"add-terms-to-a-column-of-a-dataset",level:3},{value:"Expected Outcome of Adding Terms",id:"expected-outcome-of-adding-terms",level:3},{value:"Remove Terms",id:"remove-terms",level:2},{value:"Expected Outcome of Removing Terms",id:"expected-outcome-of-removing-terms",level:3}],h={toc:c},f="wrapper";function g(e){var{components:t}=e,a=l(e,["components"]);return(0,n.kt)(f,i(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){o(e,t,a[t])}))}return e}({},h,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"terms"},"Terms"),(0,n.kt)("h2",{id:"why-would-you-use-terms-on-datasets"},"Why Would You Use Terms on Datasets?"),(0,n.kt)("p",null,"The Business Glossary(Term) feature in DataHub helps you use a shared vocabulary within the orgarnization, by providing a framework for defining a standardized set of data concepts and then associating them with the physical assets that exist within your data ecosystem."),(0,n.kt)("p",null,"For more information about terms, refer to ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.13.0/glossary/business-glossary"},"About DataHub Business Glossary"),"."),(0,n.kt)("h3",{id:"goal-of-this-guide"},"Goal Of This Guide"),(0,n.kt)("p",null,"This guide will show you how to"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create: create a term."),(0,n.kt)("li",{parentName:"ul"},"Read : read terms attached to a dataset."),(0,n.kt)("li",{parentName:"ul"},"Add: add a term to a column of a dataset or a dataset itself."),(0,n.kt)("li",{parentName:"ul"},"Remove: remove a term from a dataset.")),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"For this tutorial, you need to deploy DataHub Quickstart and ingest sample data.\nFor detailed information, please refer to ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.13.0/quickstart"},"Datahub Quickstart Guide"),"."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Before modifying terms, you need to ensure the target dataset is already present in your DataHub instance.\nIf you attempt to manipulate entities that do not exist, your operation will fail.\nIn this guide, we will be using data from sample ingestion.")),(0,n.kt)("p",null,"For more information on how to set up for GraphQL, please refer to ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.13.0/api/graphql/how-to-set-up-graphql"},"How To Set Up GraphQL"),"."),(0,n.kt)("h2",{id:"create-terms"},"Create Terms"),(0,n.kt)("p",null,"The following code creates a term ",(0,n.kt)("inlineCode",{parentName:"p"},"Rate of Return"),"."),(0,n.kt)(r.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'mutation createGlossaryTerm {\n  createGlossaryTerm(input: {\n    name: "Rate of Return",\n    id: "rateofreturn",\n    description: "A rate of return (RoR) is the net gain or loss of an investment over a specified time period."\n  },\n  )\n}\n')),(0,n.kt)("p",null,"If you see the following response, the operation was successful:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'{\n  "data": {\n    "createGlossaryTerm": "urn:li:glossaryTerm:rateofreturn"\n  },\n  "extensions": {}\n}\n'))),(0,n.kt)(s.Z,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://localhost:8080/api/graphql\' \\\n--header \'Authorization: Bearer <my-access-token>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{ "query": "mutation createGlossaryTerm { createGlossaryTerm(input: { name: \\"Rate of Return\\", id:\\"rateofreturn\\", description: \\"A rate of return (RoR) is the net gain or loss of an investment over a specified time period.\\" }) }", "variables":{}}\'\n')),(0,n.kt)("p",null,"Expected Response:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": { "createGlossaryTerm": "urn:li:glossaryTerm:rateofreturn" },\n  "extensions": {}\n}\n'))),(0,n.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/create_term.py\nimport logging\n\nfrom datahub.emitter.mce_builder import make_term_urn\nfrom datahub.emitter.mcp import MetadataChangeProposalWrapper\nfrom datahub.emitter.rest_emitter import DatahubRestEmitter\n\n# Imports for metadata model classes\nfrom datahub.metadata.schema_classes import GlossaryTermInfoClass\n\nlog = logging.getLogger(__name__)\nlogging.basicConfig(level=logging.INFO)\n\nterm_urn = make_term_urn("rateofreturn")\nterm_properties_aspect = GlossaryTermInfoClass(\n    definition="A rate of return (RoR) is the net gain or loss of an investment over a specified time period.",\n    name="Rate of Return",\n    termSource="",\n)\n\nevent: MetadataChangeProposalWrapper = MetadataChangeProposalWrapper(\n    entityUrn=term_urn,\n    aspect=term_properties_aspect,\n)\n\n# Create rest emitter\nrest_emitter = DatahubRestEmitter(gms_server="http://localhost:8080")\nrest_emitter.emit(event)\nlog.info(f"Created term {term_urn}")\n\n')))),(0,n.kt)("h3",{id:"expected-outcome-of-creating-terms"},"Expected Outcome of Creating Terms"),(0,n.kt)("p",null,"You can now see the new term ",(0,n.kt)("inlineCode",{parentName:"p"},"Rate of Return")," has been created."),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/tutorials/term-created.png"})),(0,n.kt)("p",null,"We can also verify this operation by programmatically searching ",(0,n.kt)("inlineCode",{parentName:"p"},"Rate of Return")," term after running this code using the ",(0,n.kt)("inlineCode",{parentName:"p"},"datahub")," cli."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'datahub get --urn "urn:li:glossaryTerm:rateofreturn" --aspect glossaryTermInfo\n\n{\n  "glossaryTermInfo": {\n    "definition": "A rate of return (RoR) is the net gain or loss of an investment over a specified time period.",\n    "name": "Rate of Return",\n    "termSource": "INTERNAL"\n  }\n}\n')),(0,n.kt)("h2",{id:"read-terms"},"Read Terms"),(0,n.kt)(r.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'query {\n  dataset(urn: "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)") {\n    glossaryTerms {\n      terms {\n        term {\n          urn\n          glossaryTermInfo {\n            name\n            description\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,n.kt)("p",null,"If you see the following response, the operation was successful:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'{\n  "data": {\n    "dataset": {\n      "glossaryTerms": {\n        "terms": [\n          {\n            "term": {\n              "urn": "urn:li:glossaryTerm:CustomerAccount",\n              "glossaryTermInfo": {\n                "name": "CustomerAccount",\n                "description": "account that represents an identified, named collection of balances and cumulative totals used to summarize customer transaction-related activity over a designated period of time"\n              }\n            }\n          }\n        ]\n      }\n    }\n  },\n  "extensions": {}\n}\n'))),(0,n.kt)(s.Z,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request POST 'http://localhost:8080/api/graphql' \\\n--header 'Authorization: Bearer <my-access-token>' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{ \"query\": \"{dataset(urn: \\\"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)\\\") {glossaryTerms {terms {term {urn glossaryTermInfo { name description } } } } } }\", \"variables\":{}}'\n")),(0,n.kt)("p",null,"Expected Response:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{"data":{"dataset":{"glossaryTerms":{"terms":[{"term":{"urn":"urn:li:glossaryTerm:CustomerAccount","glossaryTermInfo":{"name":"CustomerAccount","description":"account that represents an identified, named collection of balances and cumulative totals used to summarize customer transaction-related activity over a designated period of time"}}}]}}},"extensions":{}}```\n'))),(0,n.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/dataset_query_terms.py\nfrom datahub.emitter.mce_builder import make_dataset_urn\n\n# read-modify-write requires access to the DataHubGraph (RestEmitter is not enough)\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\n# Imports for metadata model classes\nfrom datahub.metadata.schema_classes import GlossaryTermsClass\n\ndataset_urn = make_dataset_urn(platform="hive", name="fct_users_created", env="PROD")\n\ngms_endpoint = "http://localhost:8080"\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\n\n# Query multiple aspects from entity\nresult = graph.get_aspects_for_entity(\n    entity_urn=dataset_urn,\n    aspects=["glossaryTerms"],\n    aspect_types=[GlossaryTermsClass],\n)\n\nprint(result)\n\n')))),(0,n.kt)("h2",{id:"add-terms"},"Add Terms"),(0,n.kt)("h3",{id:"add-terms-to-a-dataset"},"Add Terms to a dataset"),(0,n.kt)("p",null,"The following code shows you how can add terms to a dataset.\nIn the following code, we add a term ",(0,n.kt)("inlineCode",{parentName:"p"},"Rate of Return")," to a dataset named ",(0,n.kt)("inlineCode",{parentName:"p"},"fct_users_created"),"."),(0,n.kt)(r.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'mutation addTerms {\n    addTerms(\n      input: {\n        termUrns: ["urn:li:glossaryTerm:rateofreturn"],\n        resourceUrn: "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)",\n      }\n  )\n}\n')),(0,n.kt)("p",null,"If you see the following response, the operation was successful:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'{\n  "data": {\n    "addTerms": true\n  },\n  "extensions": {}\n}\n'))),(0,n.kt)(s.Z,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://localhost:8080/api/graphql\' \\\n--header \'Authorization: Bearer <my-access-token>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{ "query": "mutation addTerm { addTerms(input: { termUrns: [\\"urn:li:glossaryTerm:rateofreturn\\"], resourceUrn: \\"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)\\" }) }", "variables":{}}\'\n')),(0,n.kt)("p",null,"Expected Response:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{ "data": { "addTerms": true }, "extensions": {} }\n'))),(0,n.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/dataset_add_term.py\nimport logging\nfrom typing import Optional\n\nfrom datahub.emitter.mce_builder import make_dataset_urn, make_term_urn\nfrom datahub.emitter.mcp import MetadataChangeProposalWrapper\n\n# read-modify-write requires access to the DataHubGraph (RestEmitter is not enough)\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\n# Imports for metadata model classes\nfrom datahub.metadata.schema_classes import (\n    AuditStampClass,\n    GlossaryTermAssociationClass,\n    GlossaryTermsClass,\n)\n\nlog = logging.getLogger(__name__)\nlogging.basicConfig(level=logging.INFO)\n\n\n# First we get the current terms\ngms_endpoint = "http://localhost:8080"\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\n\ndataset_urn = make_dataset_urn(platform="hive", name="realestate_db.sales", env="PROD")\n\ncurrent_terms: Optional[GlossaryTermsClass] = graph.get_aspect(\n    entity_urn=dataset_urn, aspect_type=GlossaryTermsClass\n)\n\nterm_to_add = make_term_urn("Classification.HighlyConfidential")\nterm_association_to_add = GlossaryTermAssociationClass(urn=term_to_add)\n# an audit stamp that basically says we have no idea when these terms were added to this dataset\n# change the time value to (time.time() * 1000) if you want to specify the current time of running this code as the time\nunknown_audit_stamp = AuditStampClass(time=0, actor="urn:li:corpuser:ingestion")\nneed_write = False\nif current_terms:\n    if term_to_add not in [x.urn for x in current_terms.terms]:\n        # terms exist, but this term is not present in the current terms\n        current_terms.terms.append(term_association_to_add)\n        need_write = True\nelse:\n    # create a brand new terms aspect\n    current_terms = GlossaryTermsClass(\n        terms=[term_association_to_add],\n        auditStamp=unknown_audit_stamp,\n    )\n    need_write = True\n\nif need_write:\n    event: MetadataChangeProposalWrapper = MetadataChangeProposalWrapper(\n        entityUrn=dataset_urn,\n        aspect=current_terms,\n    )\n    graph.emit(event)\nelse:\n    log.info(f"Term {term_to_add} already exists, omitting write")\n\n')))),(0,n.kt)("h3",{id:"add-terms-to-a-column-of-a-dataset"},"Add Terms to a Column of a Dataset"),(0,n.kt)(r.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"graphql",label:"GraphQL",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'mutation addTerms {\n    addTerms(\n      input: {\n        termUrns: ["urn:li:glossaryTerm:rateofreturn"],\n        resourceUrn: "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)",\n        subResourceType:DATASET_FIELD,\n        subResource:"user_name"})\n}\n'))),(0,n.kt)(s.Z,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://localhost:8080/api/graphql\' \\\n--header \'Authorization: Bearer <my-access-token>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{ "query": "mutation addTerms { addTerms(input: { termUrns: [\\"urn:li:glossaryTerm:rateofreturn\\"], resourceUrn: \\"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)\\", subResourceType: DATASET_FIELD, subResource: \\"user_name\\" }) }", "variables":{}}\'\n')),(0,n.kt)("p",null,"Expected Response:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{ "data": { "addTerms": true }, "extensions": {} }\n'))),(0,n.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/dataset_add_column_term.py\nimport logging\nimport time\n\nfrom datahub.emitter.mce_builder import make_dataset_urn, make_term_urn\nfrom datahub.emitter.mcp import MetadataChangeProposalWrapper\n\n# read-modify-write requires access to the DataHubGraph (RestEmitter is not enough)\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\n# Imports for metadata model classes\nfrom datahub.metadata.schema_classes import (\n    AuditStampClass,\n    EditableSchemaFieldInfoClass,\n    EditableSchemaMetadataClass,\n    GlossaryTermAssociationClass,\n    GlossaryTermsClass,\n)\nfrom datahub.utilities.urns.field_paths import get_simple_field_path_from_v2_field_path\n\nlog = logging.getLogger(__name__)\nlogging.basicConfig(level=logging.INFO)\n\n\n# Inputs -> the column, dataset and the term to set\ncolumn = "address.zipcode"\ndataset_urn = make_dataset_urn(platform="hive", name="realestate_db.sales", env="PROD")\nterm_to_add = make_term_urn("Classification.Location")\n\n\n# First we get the current editable schema metadata\ngms_endpoint = "http://localhost:8080"\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\n\n\ncurrent_editable_schema_metadata = graph.get_aspect(\n    entity_urn=dataset_urn, aspect_type=EditableSchemaMetadataClass\n)\n\n\n# Some pre-built objects to help all the conditional pathways\nnow = int(time.time() * 1000)  # milliseconds since epoch\ncurrent_timestamp = AuditStampClass(time=now, actor="urn:li:corpuser:ingestion")\n\nterm_association_to_add = GlossaryTermAssociationClass(urn=term_to_add)\nterm_aspect_to_set = GlossaryTermsClass(\n    terms=[term_association_to_add], auditStamp=current_timestamp\n)\nfield_info_to_set = EditableSchemaFieldInfoClass(\n    fieldPath=column, glossaryTerms=term_aspect_to_set\n)\n\nneed_write = False\nfield_match = False\nif current_editable_schema_metadata:\n    for fieldInfo in current_editable_schema_metadata.editableSchemaFieldInfo:\n        if get_simple_field_path_from_v2_field_path(fieldInfo.fieldPath) == column:\n            # we have some editable schema metadata for this field\n            field_match = True\n            if fieldInfo.glossaryTerms:\n                if term_to_add not in [x.urn for x in fieldInfo.glossaryTerms.terms]:\n                    # this tag is not present\n                    fieldInfo.glossaryTerms.terms.append(term_association_to_add)\n                    need_write = True\n            else:\n                fieldInfo.glossaryTerms = term_aspect_to_set\n                need_write = True\n\n    if not field_match:\n        # this field isn\'t present in the editable schema metadata aspect, add it\n        field_info = field_info_to_set\n        current_editable_schema_metadata.editableSchemaFieldInfo.append(field_info)\n        need_write = True\n\nelse:\n    # create a brand new editable schema metadata aspect\n    current_editable_schema_metadata = EditableSchemaMetadataClass(\n        editableSchemaFieldInfo=[field_info_to_set],\n        created=current_timestamp,\n    )\n    need_write = True\n\nif need_write:\n    event: MetadataChangeProposalWrapper = MetadataChangeProposalWrapper(\n        entityUrn=dataset_urn,\n        aspect=current_editable_schema_metadata,\n    )\n    graph.emit(event)\n    log.info(f"Term {term_to_add} added to column {column} of dataset {dataset_urn}")\n\nelse:\n    log.info(f"Term {term_to_add} already attached to column {column}, omitting write")\n\n')))),(0,n.kt)("h3",{id:"expected-outcome-of-adding-terms"},"Expected Outcome of Adding Terms"),(0,n.kt)("p",null,"You can now see ",(0,n.kt)("inlineCode",{parentName:"p"},"Rate of Return")," term has been added to ",(0,n.kt)("inlineCode",{parentName:"p"},"user_name")," column."),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/tutorials/term-added.png"})),(0,n.kt)("h2",{id:"remove-terms"},"Remove Terms"),(0,n.kt)("p",null,"The following code remove a term from a dataset.\nAfter running this code, ",(0,n.kt)("inlineCode",{parentName:"p"},"Rate of Return")," term will be removed from a ",(0,n.kt)("inlineCode",{parentName:"p"},"user_name")," column."),(0,n.kt)(r.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'mutation removeTerm {\n    removeTerm(\n      input: {\n        termUrn: "urn:li:glossaryTerm:rateofreturn",\n        resourceUrn: "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)",\n        subResourceType:DATASET_FIELD,\n        subResource:"user_name"})\n}\n')),(0,n.kt)("p",null,"Note that you can also remove a term from a dataset if you don't specify ",(0,n.kt)("inlineCode",{parentName:"p"},"subResourceType")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"subResource"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'mutation removeTerm {\n    removeTerm(\n      input: {\n        termUrn: "urn:li:glossaryTerm:rateofreturn",\n        resourceUrn: "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)",\n      })\n}\n')),(0,n.kt)("p",null,"Also note that you can remove terms from multiple entities or subresource using ",(0,n.kt)("inlineCode",{parentName:"p"},"batchRemoveTerms"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'mutation batchRemoveTerms {\n    batchRemoveTerms(\n      input: {\n        termUrns: ["urn:li:glossaryTerm:rateofreturn"],\n        resources: [\n          { resourceUrn:"urn:li:dataset:(urn:li:dataPlatform:hdfs,SampleHdfsDataset,PROD)"} ,\n          { resourceUrn:"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)"} ,]\n      }\n    )\n}\n'))),(0,n.kt)(s.Z,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://localhost:8080/api/graphql\' \\\n--header \'Authorization: Bearer <my-access-token>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{ "query": "mutation removeTerm { removeTerm(input: { termUrn: \\"urn:li:glossaryTerm:rateofreturn\\", resourceUrn: \\"urn:li:dataset:(urn:li:dataPlatform:hdfs,SampleHdfsDataset,PROD)\\" }) }", "variables":{}}\'\n'))),(0,n.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/dataset_remove_term_execute_graphql.py\n# read-modify-write requires access to the DataHubGraph (RestEmitter is not enough)\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\ngms_endpoint = "http://localhost:8080"\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\n\n# Query multiple aspects from entity\nquery = """\nmutation batchRemoveTerms {\n    batchRemoveTerms(\n      input: {\n        termUrns: ["urn:li:glossaryTerm:rateofreturn"],\n        resources: [\n          { resourceUrn:"urn:li:dataset:(urn:li:dataPlatform:hdfs,SampleHdfsDataset,PROD)"} ,\n          { resourceUrn:"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)"} ,]\n      }\n    )\n}\n"""\nresult = graph.execute_graphql(query=query)\n\nprint(result)\n\n')))),(0,n.kt)("h3",{id:"expected-outcome-of-removing-terms"},"Expected Outcome of Removing Terms"),(0,n.kt)("p",null,"You can now see ",(0,n.kt)("inlineCode",{parentName:"p"},"Rate of Return")," term has been removed to ",(0,n.kt)("inlineCode",{parentName:"p"},"user_name")," column."),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/tutorials/term-removed.png"})))}g.isMDXComponent=!0}}]);