"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[69030],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),i=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=i(a),h=r,m=c["".concat(u,".").concat(h)]||c[h]||d[h]||l;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var i=2;i<l;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},16110:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const l={title:"Deploying with Kubernetes",sidebar_label:"Deploying with Kubernetes",slug:"/deploy/kubernetes",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/deploy/kubernetes.md"},o="Deploying DataHub with Kubernetes",s={unversionedId:"docs/deploy/kubernetes",id:"version-0.12.0/docs/deploy/kubernetes",title:"Deploying with Kubernetes",description:"Introduction",source:"@site/versioned_docs/version-0.12.0/docs/deploy/kubernetes.md",sourceDirName:"docs/deploy",slug:"/deploy/kubernetes",permalink:"/docs/deploy/kubernetes",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/deploy/kubernetes.md",tags:[],version:"0.12.0",frontMatter:{title:"Deploying with Kubernetes",sidebar_label:"Deploying with Kubernetes",slug:"/deploy/kubernetes",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/deploy/kubernetes.md"},sidebar:"overviewSidebar",previous:{title:"Deploying with Docker",permalink:"/docs/docker"},next:{title:"Integrating with Confluent Cloud",permalink:"/docs/deploy/confluent-cloud"}},u={},i=[{value:"Introduction",id:"introduction",level:2},{value:"Setup",id:"setup",level:2},{value:"Components",id:"components",level:2},{value:"Quickstart",id:"quickstart",level:2},{value:"Other useful commands",id:"other-useful-commands",level:2}],p={toc:i},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploying-datahub-with-kubernetes"},"Deploying DataHub with Kubernetes"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Helm charts for deploying DataHub on a kubernetes cluster is located in\nthis ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/acryldata/datahub-helm"},"repository"),". We provide charts for\ndeploying ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/acryldata/datahub-helm/tree/master/charts/datahub"},"Datahub")," and\nit's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/acryldata/datahub-helm/tree/master/charts/prerequisites"},"dependencies"),"\n(Elasticsearch, optionally Neo4j, MySQL, and Kafka) on a Kubernetes cluster."),(0,r.kt)("p",null,"This doc is a guide to deploy an instance of DataHub on a kubernetes cluster using the above charts from scratch."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Set up a kubernetes cluster",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"In a cloud platform of choice like ",(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/eks"},"Amazon EKS"),",\n",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/kubernetes-engine"},"Google Kubernetes Engine"),",\nand ",(0,r.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/services/kubernetes-service/"},"Azure Kubernetes Service")," OR"),(0,r.kt)("li",{parentName:"ul"},"In local environment using ",(0,r.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/"},"Minikube"),". Note, more than 7GB of RAM is required\nto run Datahub and it's dependencies"))),(0,r.kt)("li",{parentName:"ol"},"Install the following tools:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/"},"kubectl")," to manage kubernetes resources"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"helm")," to deploy the resources based on helm charts. Note, we only support\nHelm 3.")))),(0,r.kt)("h2",{id:"components"},"Components"),(0,r.kt)("p",null,"Datahub consists of 4 main components: ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-service"},"GMS"),",\n",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-jobs/mae-consumer-job"},"MAE Consumer")," (optional),\n",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-jobs/mce-consumer-job"},"MCE Consumer")," (optional), and\n",(0,r.kt)("a",{parentName:"p",href:"/docs/datahub-frontend"},"Frontend"),". Kubernetes deployment for each of the components are\ndefined as subcharts under the main\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/acryldata/datahub-helm/tree/master/charts/datahub"},"Datahub"),"\nhelm chart."),(0,r.kt)("p",null,"The main components are powered by 4 external dependencies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kafka"),(0,r.kt)("li",{parentName:"ul"},"Local DB (MySQL, Postgres, MariaDB)"),(0,r.kt)("li",{parentName:"ul"},"Search Index (Elasticsearch)"),(0,r.kt)("li",{parentName:"ul"},"Graph Index (Supports either Neo4j or Elasticsearch)")),(0,r.kt)("p",null,"The dependencies must be deployed before deploying Datahub. We created a separate\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/acryldata/datahub-helm/tree/master/charts/prerequisites"},"chart"),"\nfor deploying the dependencies with example configuration. They could also be deployed separately on-prem or leveraged\nas managed services. To remove your dependency on Neo4j, set enabled to false in\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/acryldata/datahub-helm/blob/master/charts/prerequisites/values.yaml#L54"},"values.yaml")," for\nprerequisites. Then, override the ",(0,r.kt)("inlineCode",{parentName:"p"},"graph_service_impl")," field in\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/acryldata/datahub-helm/blob/master/charts/datahub/values.yaml#L63"},"values.yaml")," of datahub\ninstead of ",(0,r.kt)("inlineCode",{parentName:"p"},"neo4j"),"."),(0,r.kt)("h2",{id:"quickstart"},"Quickstart"),(0,r.kt)("p",null,"Assuming kubectl context points to the correct kubernetes cluster, first create kubernetes secrets that contain MySQL\nand Neo4j passwords."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-(shell)"},"kubectl create secret generic mysql-secrets --from-literal=mysql-root-password=datahub\nkubectl create secret generic neo4j-secrets --from-literal=neo4j-password=datahub\n")),(0,r.kt)("p",null,'The above commands sets the passwords to "datahub" as an example. Change to any password of choice.'),(0,r.kt)("p",null,"Add datahub helm repo by running the following"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-(shell)"},"helm repo add datahub https://helm.datahubproject.io/\n")),(0,r.kt)("p",null,"Then, deploy the dependencies by running the following"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-(shell)"},"helm install prerequisites datahub/datahub-prerequisites\n")),(0,r.kt)("p",null,"Note, the above uses the default configuration\ndefined ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/acryldata/datahub-helm/blob/master/charts/prerequisites/values.yaml"},"here"),". You can change\nany of the configuration and deploy by running the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-(shell)"},"helm install prerequisites datahub/datahub-prerequisites --values <<path-to-values-file>>\n")),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get pods")," to check whether all the pods for the dependencies are running. You should get a result similar\nto below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NAME                                               READY   STATUS      RESTARTS   AGE\nelasticsearch-master-0                             1/1     Running     0          62m\nelasticsearch-master-1                             1/1     Running     0          62m\nelasticsearch-master-2                             1/1     Running     0          62m\nprerequisites-cp-schema-registry-cf79bfccf-kvjtv   2/2     Running     1          63m\nprerequisites-kafka-0                              1/1     Running     2          62m\nprerequisites-mysql-0                              1/1     Running     1          62m\nprerequisites-neo4j-community-0                    1/1     Running     0          52m\nprerequisites-zookeeper-0                          1/1     Running     0          62m\n")),(0,r.kt)("p",null,"deploy Datahub by running the following"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-(shell)"},"helm install datahub datahub/datahub\n")),(0,r.kt)("p",null,"Values in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/acryldata/datahub-helm/blob/master/charts/datahub/values.yaml"},"values.yaml"),"\nhave been preset to point to the dependencies deployed using\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/acryldata/datahub-helm/tree/master/charts/prerequisites"},"prerequisites"),'\nchart with release name "prerequisites". If you deployed the helm chart using a different release name, update the\nquickstart-values.yaml file accordingly before installing.'),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get pods")," to check whether all the datahub pods are running. You should get a result similar to below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NAME                                               READY   STATUS      RESTARTS   AGE\ndatahub-datahub-frontend-84c58df9f7-5bgwx          1/1     Running     0          4m2s\ndatahub-datahub-gms-58b676f77c-c6pfx               1/1     Running     0          4m2s\ndatahub-datahub-mae-consumer-7b98bf65d-tjbwx       1/1     Running     0          4m3s\ndatahub-datahub-mce-consumer-8c57d8587-vjv9m       1/1     Running     0          4m2s\ndatahub-elasticsearch-setup-job-8dz6b              0/1     Completed   0          4m50s\ndatahub-kafka-setup-job-6blcj                      0/1     Completed   0          4m40s\ndatahub-mysql-setup-job-b57kc                      0/1     Completed   0          4m7s\nelasticsearch-master-0                             1/1     Running     0          97m\nelasticsearch-master-1                             1/1     Running     0          97m\nelasticsearch-master-2                             1/1     Running     0          97m\nprerequisites-cp-schema-registry-cf79bfccf-kvjtv   2/2     Running     1          99m\nprerequisites-kafka-0                              1/1     Running     2          97m\nprerequisites-mysql-0                              1/1     Running     1          97m\nprerequisites-neo4j-community-0                    1/1     Running     0          88m\nprerequisites-zookeeper-0                          1/1     Running     0          97m\n")),(0,r.kt)("p",null,"You can run the following to expose the frontend locally. Note, you can find the pod name using the command above. In\nthis case, the datahub-frontend pod name was ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub-datahub-frontend-84c58df9f7-5bgwx"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-(shell)"},"kubectl port-forward <datahub-frontend pod name> 9002:9002\n")),(0,r.kt)("p",null,"You should be able to access the frontend via http://localhost:9002."),(0,r.kt)("p",null,"Once you confirm that the pods are running well, you can set up ingress for datahub-frontend to expose the 9002 port to\nthe public."),(0,r.kt)("h2",{id:"other-useful-commands"},"Other useful commands"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Command"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"helm uninstall datahub"),(0,r.kt)("td",{parentName:"tr",align:null},"Remove DataHub")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"helm ls"),(0,r.kt)("td",{parentName:"tr",align:null},"List of Helm charts")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"helm history"),(0,r.kt)("td",{parentName:"tr",align:null},"Fetch a release history")))))}d.isMDXComponent=!0}}]);