"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8943],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(a),g=o,m=c["".concat(l,".").concat(g)]||c[g]||u[g]||r;return a?n.createElement(m,s(s({ref:t},p),{},{components:a})):n.createElement(m,s({ref:t},p))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var d=2;d<r;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},37008:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=a(87462),o=(a(67294),a(3905));const r={title:"Adding Tags",slug:"/tools/tutorials/adding-tags",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/tools/tutorials/adding-tags.md"},s="Adding Tags",i={unversionedId:"docs/tools/tutorials/adding-tags",id:"docs/tools/tutorials/adding-tags",title:"Adding Tags",description:"Why Would You Add Tags?",source:"@site/genDocs/docs/tools/tutorials/adding-tags.md",sourceDirName:"docs/tools/tutorials",slug:"/tools/tutorials/adding-tags",permalink:"/docs/tools/tutorials/adding-tags",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/tools/tutorials/adding-tags.md",tags:[],version:"current",frontMatter:{title:"Adding Tags",slug:"/tools/tutorials/adding-tags",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/tools/tutorials/adding-tags.md"},sidebar:"overviewSidebar",previous:{title:"Advantages of using SDKs and APIs",permalink:"/docs/tools/tutorials/advantages"},next:{title:"Adding Terms",permalink:"/docs/tools/tutorials/adding-terms"}},l={},d=[{value:"Why Would You Add Tags?",id:"why-would-you-add-tags",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Add Tags With GraphQL",id:"add-tags-with-graphql",level:2},{value:"GraphQL Explorer",id:"graphql-explorer",level:3},{value:"CURL",id:"curl",level:3},{value:"Add Tags With Python SDK",id:"add-tags-with-python-sdk",level:2},{value:"Expected Outcomes",id:"expected-outcomes",level:2}],p={toc:d};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"adding-tags"},"Adding Tags"),(0,o.kt)("h2",{id:"why-would-you-add-tags"},"Why Would You Add Tags?"),(0,o.kt)("p",null,"Tags are informal, loosely controlled labels that help in search & discovery. They can be added to datasets, dataset schemas, or containers, for an easy way to label or categorize entities \u2013 without having to associate them to a broader business glossary or vocabulary."),(0,o.kt)("p",null,"Tags can help you in:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Querying: Tagging a dataset with a phrase that users can use to query the same dataset"),(0,o.kt)("li",{parentName:"ul"},"Mapping assets to a category or group of your choice")),(0,o.kt)("p",null,"Fore more information about tags, refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/tags"},"About DataHub Tags"),"."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"For this tutorial, you need to deploy DataHub Quickstart and ingest sample data.\nFor detailed steps, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/tools/tutorials/references/prepare-datahub"},"Prepare Local DataHub Environment"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Before adding tags, you need to ensure the targeted dataset and the tag are already present in your datahub.\nIf you attempt to manipulate entities that do not exist, your operation will fail.\nIn this guide, we will be using data from a sample ingestion.")),(0,o.kt)("h2",{id:"add-tags-with-graphql"},"Add Tags With GraphQL"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Please note that there are two available endpoints (",(0,o.kt)("inlineCode",{parentName:"p"},":8000"),", ",(0,o.kt)("inlineCode",{parentName:"p"},":9002"),") to access GraphQL.\nFor more information about the differences between these endpoints, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/metadata-service#graphql-api"},"DataHub Metadata Service"))),(0,o.kt)("h3",{id:"graphql-explorer"},"GraphQL Explorer"),(0,o.kt)("p",null,"GraphQL Explorer is the fastest way to experiment with GraphQL without any dependancies.\nNavigate to GraphQL Explorer (",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:9002/api/graphiql"),") and run the following query."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'mutation addTags {\n    addTags(\n      input: { \n        tagUrns: ["urn:li:tag:Legacy"], \n        resourceUrn: "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)",\n        subResourceType:DATASET_FIELD,\n        subResource:"user_name"})\n}\n')),(0,o.kt)("p",null,"If you see the following response, the operation was successful:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'{\n  "data": {\n    "addTags": true\n  },\n  "extensions": {}\n}\n')),(0,o.kt)("h3",{id:"curl"},"CURL"),(0,o.kt)("p",null,"With CURL, you need to provide tokens. To generate a token, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/tools/tutorials/references/generate-access-token"},"Generate Access Token"),".\nWith ",(0,o.kt)("inlineCode",{parentName:"p"},"accessToken"),", you can run the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://localhost:8080/api/graphql\' \\\n--header \'Authorization: Bearer <my-access-token>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{ "query": "mutation addTags { addTags(input: { tagUrns: [\\"urn:li:tag:Legacy\\"], resourceUrn: \\"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)\\" }) }", "variables":{}}\'\n')),(0,o.kt)("p",null,"Expected Response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"data":{"addTags":true},"extensions":{}}\n')),(0,o.kt)("h2",{id:"add-tags-with-python-sdk"},"Add Tags With Python SDK"),(0,o.kt)("p",null,"The following code adds a tag named ",(0,o.kt)("inlineCode",{parentName:"p"},"Legacy")," to the column ",(0,o.kt)("inlineCode",{parentName:"p"},"user_name")," of the hive dataset ",(0,o.kt)("inlineCode",{parentName:"p"},"fct_users_created"),".\nYou can refer to the full code in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/examples/library/dataset_add_column_tag.py"},"dataset_add_column_tag.py"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# inlined from metadata-ingestion/examples/library/dataset_add_column_tag.py\nimport logging\nimport time\n\nfrom datahub.emitter.mce_builder import make_dataset_urn, make_tag_urn\nfrom datahub.emitter.mcp import MetadataChangeProposalWrapper\n\n# read-modify-write requires access to the DataHubGraph (RestEmitter is not enough)\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\n# Imports for metadata model classes\nfrom datahub.metadata.schema_classes import (\n    AuditStampClass,\n    EditableSchemaFieldInfoClass,\n    EditableSchemaMetadataClass,\n    GlobalTagsClass,\n    TagAssociationClass,\n)\n\nlog = logging.getLogger(__name__)\nlogging.basicConfig(level=logging.INFO)\n\n\ndef get_simple_field_path_from_v2_field_path(field_path: str) -> str:\n    """A helper function to extract simple . path notation from the v2 field path"""\n    if not field_path.startswith("[version=2.0]"):\n        # not a v2, we assume this is a simple path\n        return field_path\n        # this is a v2 field path\n    tokens = [\n        t for t in field_path.split(".") if not (t.startswith("[") or t.endswith("]"))\n    ]\n\n    return ".".join(tokens)\n\n\n# Inputs -> the column, dataset and the tag to set\ncolumn = "user_name"\ndataset_urn = make_dataset_urn(platform="hive", name="fct_users_created", env="PROD")\ntag_to_add = make_tag_urn("Legacy")\n\n\n# First we get the current editable schema metadata\ngms_endpoint = "http://localhost:8080"\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\n\n\ncurrent_editable_schema_metadata = graph.get_aspect(\n    entity_urn=dataset_urn,\n    aspect_type=EditableSchemaMetadataClass,\n)\n\n\n# Some pre-built objects to help all the conditional pathways\ntag_association_to_add = TagAssociationClass(tag=tag_to_add)\ntags_aspect_to_set = GlobalTagsClass(tags=[tag_association_to_add])\nfield_info_to_set = EditableSchemaFieldInfoClass(\n    fieldPath=column, globalTags=tags_aspect_to_set\n)\n\n\nneed_write = False\nfield_match = False\nif current_editable_schema_metadata:\n    for fieldInfo in current_editable_schema_metadata.editableSchemaFieldInfo:\n        if get_simple_field_path_from_v2_field_path(fieldInfo.fieldPath) == column:\n            # we have some editable schema metadata for this field\n            field_match = True\n            if fieldInfo.globalTags:\n                if tag_to_add not in [x.tag for x in fieldInfo.globalTags.tags]:\n                    # this tag is not present\n                    fieldInfo.globalTags.tags.append(tag_association_to_add)\n                    need_write = True\n            else:\n                fieldInfo.globalTags = tags_aspect_to_set\n                need_write = True\n\n    if not field_match:\n        # this field isn\'t present in the editable schema metadata aspect, add it\n        field_info = field_info_to_set\n        current_editable_schema_metadata.editableSchemaFieldInfo.append(field_info)\n        need_write = True\n\nelse:\n    # create a brand new editable schema metadata aspect\n    now = int(time.time() * 1000)  # milliseconds since epoch\n    current_timestamp = AuditStampClass(time=now, actor="urn:li:corpuser:ingestion")\n    current_editable_schema_metadata = EditableSchemaMetadataClass(\n        editableSchemaFieldInfo=[field_info_to_set],\n        created=current_timestamp,\n    )\n    need_write = True\n\nif need_write:\n    event: MetadataChangeProposalWrapper = MetadataChangeProposalWrapper(\n        entityUrn=dataset_urn,\n        aspect=current_editable_schema_metadata,\n    )\n    graph.emit(event)\n    log.info(f"Tag {tag_to_add} added to column {column} of dataset {dataset_urn}")\n\nelse:\n    log.info(f"Tag {tag_to_add} already attached to column {column}, omitting write")\n')),(0,o.kt)("p",null,"We're using the ",(0,o.kt)("inlineCode",{parentName:"p"},"MetdataChangeProposalWrapper")," to change entities in this example.\nFor more information about the ",(0,o.kt)("inlineCode",{parentName:"p"},"MetadataChangeProposal"),", please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/advanced/mcp-mcl"},"MetadataChangeProposal & MetadataChangeLog Events")),(0,o.kt)("h2",{id:"expected-outcomes"},"Expected Outcomes"),(0,o.kt)("p",null,"You can now see ",(0,o.kt)("inlineCode",{parentName:"p"},"CustomerAccount")," tag has been added to ",(0,o.kt)("inlineCode",{parentName:"p"},"user_name")," column. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"tag-added",src:a(39168).Z,width:"2242",height:"898"})))}u.isMDXComponent=!0},39168:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tag-added-0ea8788c276f043cc1e260e97bd7843a.png"}}]);