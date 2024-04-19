"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[58004],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>h});var o=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,h=p["".concat(l,".").concat(d)]||p[d]||g[d]||s;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,a[1]=i;for(var u=2;u<s;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>p});n(96540);var o=n(15680);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={title:"Deploying to GCP",sidebar_label:"Deploying to GCP",slug:"/deploy/gcp",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/deploy/gcp.md"},l="GCP setup guide",u={unversionedId:"docs/deploy/gcp",id:"version-0.13.0/docs/deploy/gcp",title:"Deploying to GCP",description:"The following is a set of instructions to quickstart DataHub on GCP Google Kubernetes Engine (GKE). Note, the guide",source:"@site/versioned_docs/version-0.13.0/docs/deploy/gcp.md",sourceDirName:"docs/deploy",slug:"/deploy/gcp",permalink:"/docs/0.13.0/deploy/gcp",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/deploy/gcp.md",tags:[],version:"0.13.0",frontMatter:{title:"Deploying to GCP",sidebar_label:"Deploying to GCP",slug:"/deploy/gcp",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/deploy/gcp.md"},sidebar:"overviewSidebar",previous:{title:"Deploying to AWS",permalink:"/docs/0.13.0/deploy/aws"},next:{title:"Deploying to Azure",permalink:"/docs/0.13.0/deploy/azure"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Start up a kubernetes cluster on GKE",id:"start-up-a-kubernetes-cluster-on-gke",level:2},{value:"Setup DataHub using Helm",id:"setup-datahub-using-helm",level:2},{value:"Expose endpoints using GKE ingress controller",id:"expose-endpoints-using-gke-ingress-controller",level:2}],g={toc:p},d="wrapper";function h(e){var{components:t}=e,n=a(e,["components"]);return(0,o.yg)(d,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"gcp-setup-guide"},"GCP setup guide"),(0,o.yg)("p",null,"The following is a set of instructions to quickstart DataHub on GCP Google Kubernetes Engine (GKE). Note, the guide\nassumes that you do not have a kubernetes cluster set up. If you are deploying DataHub to an existing cluster, please\nskip the corresponding sections."),(0,o.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.yg)("p",null,"This guide requires the following tools:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/"},"kubectl")," to manage kubernetes resources"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"helm")," to deploy the resources based on helm charts. Note, we only support Helm\n3."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://cloud.google.com/sdk/docs/install"},"gcloud")," to manage GCP resources")),(0,o.yg)("p",null,"Follow the\nfollowing ",(0,o.yg)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/creating-a-zonal-cluster#before_you_begin"},"guide")," to\ncorrectly set up Google Cloud SDK."),(0,o.yg)("p",null,"After setting up, run ",(0,o.yg)("inlineCode",{parentName:"p"},"gcloud services enable container.googleapis.com")," to make sure GKE service is enabled."),(0,o.yg)("h2",{id:"start-up-a-kubernetes-cluster-on-gke"},"Start up a kubernetes cluster on GKE"),(0,o.yg)("p",null,"Let\u2019s follow this ",(0,o.yg)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/creating-a-zonal-cluster"},"guide")," to create a\nnew cluster using gcloud. Run the following command with cluster-name set to the cluster name of choice, and zone set to\nthe GCP zone you are operating on."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"gcloud container clusters create <<cluster-name>> \\\n    --zone <<zone>> \\\n    -m e2-standard-2\n")),(0,o.yg)("p",null,"The command will provision a GKE cluster powered by 3 e2-standard-2 (2 CPU, 8GB RAM) nodes."),(0,o.yg)("p",null,"If you are planning to run the storage layer (MySQL, Elasticsearch, Kafka) as pods in the cluster, you need at least 3\nnodes with the above specs. If you decide to use managed storage services, you can reduce the number of nodes or use\nm3.medium nodes to save cost. Refer to\nthis ",(0,o.yg)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/creating-a-regional-cluster"},"guide")," for creating a regional\ncluster for better robustness."),(0,o.yg)("p",null,"Run ",(0,o.yg)("inlineCode",{parentName:"p"},"kubectl get nodes")," to confirm that the cluster has been setup correctly. You should get results like below"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"NAME                                     STATUS   ROLES    AGE   VERSION\ngke-datahub-default-pool-e5be7c4f-8s97   Ready    <none>   34h   v1.19.10-gke.1600\ngke-datahub-default-pool-e5be7c4f-d68l   Ready    <none>   34h   v1.19.10-gke.1600\ngke-datahub-default-pool-e5be7c4f-rksj   Ready    <none>   34h   v1.19.10-gke.1600\n")),(0,o.yg)("h2",{id:"setup-datahub-using-helm"},"Setup DataHub using Helm"),(0,o.yg)("p",null,"Once the kubernetes cluster has been set up, you can deploy DataHub and it\u2019s prerequisites using helm. Please follow the\nsteps in this ",(0,o.yg)("a",{parentName:"p",href:"/docs/0.13.0/deploy/kubernetes"},"guide")),(0,o.yg)("h2",{id:"expose-endpoints-using-gke-ingress-controller"},"Expose endpoints using GKE ingress controller"),(0,o.yg)("p",null,"Now that all the pods are up and running, you need to expose the datahub-frontend end point by setting\nup ",(0,o.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"ingress"),". Easiest way to set up ingress is to use\nthe GKE page on ",(0,o.yg)("a",{parentName:"p",href:"https://console.cloud.google.com/kubernetes/discovery"},"GCP website"),"."),(0,o.yg)("p",null,'Once all deploy is successful, you should see a page like below in the "Services & Ingress" tab on the left.'),(0,o.yg)("p",{align:"center"},(0,o.yg)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/gcp/services_ingress.png"})),(0,o.yg)("p",null,'Tick the checkbox for datahub-datahub-frontend and click "CREATE INGRESS" button. You should land on the following page.'),(0,o.yg)("p",{align:"center"},(0,o.yg)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/gcp/ingress1.png"})),(0,o.yg)("p",null,'Type in an arbitrary name for the ingress and click on the second step "Host and path rules". You should land on the\nfollowing page.'),(0,o.yg)("p",{align:"center"},(0,o.yg)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/gcp/ingress2.png"})),(0,o.yg)("p",null,'Select "datahub-datahub-frontend" in the dropdown menu for backends, and then click on "ADD HOST AND PATH RULE" button.\nIn the second row that got created, add in the host name of choice (here gcp.datahubproject.io) and select\n"datahub-datahub-frontend" in the backends dropdown.'),(0,o.yg)("p",null,'This step adds the rule allowing requests from the host name of choice to get routed to datahub-frontend service. Click\non step 3 "Frontend configuration". You should land on the following page.'),(0,o.yg)("p",{align:"center"},(0,o.yg)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/gcp/ingress3.png"})),(0,o.yg)("p",null,'Choose HTTPS in the dropdown menu for protocol. To enable SSL, you need to add a certificate. If you do not have one,\nyou can click "CREATE A NEW CERTIFICATE" and input the host name of choice. GCP will create a certificate for you.'),(0,o.yg)("p",null,'Now press "CREATE" button on the left to create ingress! After around 5 minutes, you should see the following.'),(0,o.yg)("p",{align:"center"},(0,o.yg)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/gcp/ingress_ready.png"})),(0,o.yg)("p",null,"In your domain provider, add an A record for the host name set above using the IP address on the ingress page (noted\nwith the red box). Once DNS updates, you should be able to access DataHub through the host name!!"),(0,o.yg)("p",null,"Note, ignore the warning icon next to ingress. It takes about ten minutes for ingress to check that the backend service\nis ready and show a check mark as follows. However, ingress is fully functional once you see the above page. "),(0,o.yg)("p",{align:"center"},(0,o.yg)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/gcp/ingress_final.png"})))}h.isMDXComponent=!0}}]);