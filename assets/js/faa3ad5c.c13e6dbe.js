"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[16008],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>f});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=n.createContext({}),c=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=c(o),h=r,f=l["".concat(u,".").concat(h)]||l[h]||p[h]||i;return o?n.createElement(f,a(a({ref:t},d),{},{components:o})):n.createElement(f,a({ref:t},d))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[l]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},99448:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=o(87462),r=(o(67294),o(3905));const i={title:"Configuring Frontend to use a Proxy when communicating with SSO Provider",slug:"/authentication/guides/sso/configure-oidc-behind-proxy",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/authentication/guides/sso/configure-oidc-behind-proxy.md"},a="Configuring Frontend to use a Proxy when communicating with SSO Provider",s={unversionedId:"docs/authentication/guides/sso/configure-oidc-behind-proxy",id:"version-0.11.0/docs/authentication/guides/sso/configure-oidc-behind-proxy",title:"Configuring Frontend to use a Proxy when communicating with SSO Provider",description:"Authored on 22/08/2023",source:"@site/versioned_docs/version-0.11.0/docs/authentication/guides/sso/configure-oidc-behind-proxy.md",sourceDirName:"docs/authentication/guides/sso",slug:"/authentication/guides/sso/configure-oidc-behind-proxy",permalink:"/docs/authentication/guides/sso/configure-oidc-behind-proxy",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/authentication/guides/sso/configure-oidc-behind-proxy.md",tags:[],version:"0.11.0",frontMatter:{title:"Configuring Frontend to use a Proxy when communicating with SSO Provider",slug:"/authentication/guides/sso/configure-oidc-behind-proxy",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/authentication/guides/sso/configure-oidc-behind-proxy.md"},sidebar:"overviewSidebar",previous:{title:"Configuring Azure Authentication for React App (OIDC)",permalink:"/docs/authentication/guides/sso/configure-oidc-react-azure"},next:{title:"Metadata Service Authentication",permalink:"/docs/authentication/introducing-metadata-service-authentication"}},u={},c=[{value:"Configure http proxy and non proxy hosts",id:"configure-http-proxy-and-non-proxy-hosts",level:2},{value:"Optional: provide custom truststore",id:"optional-provide-custom-truststore",level:2},{value:"Make truststore available in the frontend",id:"make-truststore-available-in-the-frontend",level:3},{value:"Option a) Build frontend docker image with your own truststore included",id:"option-a-build-frontend-docker-image-with-your-own-truststore-included",level:4},{value:"Option b) Mount truststore from your host machine using a docker volume",id:"option-b-mount-truststore-from-your-host-machine-using-a-docker-volume",level:4},{value:"Reference new truststore",id:"reference-new-truststore",level:3}],d={toc:c},l="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(l,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuring-frontend-to-use-a-proxy-when-communicating-with-sso-provider"},"Configuring Frontend to use a Proxy when communicating with SSO Provider"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Authored on 22/08/2023")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub-frontend-react")," server can be configured to use an http proxy when retrieving the openid-configuration.\nThis can be needed if your infrastructure is locked down and disallows connectivity by default, using proxies for fine-grained egress control. "),(0,r.kt)("h2",{id:"configure-http-proxy-and-non-proxy-hosts"},"Configure http proxy and non proxy hosts"),(0,r.kt)("p",null,"To do this, you will need to pass a set of environment variables to the datahub-frontend-react container (e.g. in the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file or your kubernetes manifest)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"HTTP_PROXY_HOST=host of your http proxy\nHTTP_PROXY_PORT=port of your http proxy\nHTTPS_PROXY_HOST=host of your http(s) proxy used for https connections (often the same as the http proxy)\nHTTPS_PROXY_PORT=port of your http(s) proxy used for https connections (often the same as the http proxy)\nHTTP_NON_PROXY_HOSTS=localhost|datahub-gms (or any other hosts that you would like to bypass the proxy for, delimited by pipe)\n")),(0,r.kt)("h2",{id:"optional-provide-custom-truststore"},"Optional: provide custom truststore"),(0,r.kt)("p",null,"If your upstream proxy performs SSL termination to inspect traffic, this will result in different (self-signed) certificates for HTTPS connections.\nThe default truststore used in the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub-frontend-react")," docker image will not trust these kinds of connections.\nTo address this, you can copy or mount your own truststore (provided by the proxy or network administrators) into the docker container."),(0,r.kt)("p",null,"Depending on your setup, you have a few options to achieve this:"),(0,r.kt)("h3",{id:"make-truststore-available-in-the-frontend"},"Make truststore available in the frontend"),(0,r.kt)("h4",{id:"option-a-build-frontend-docker-image-with-your-own-truststore-included"},"Option a) Build frontend docker image with your own truststore included"),(0,r.kt)("p",null,"To build a custom image for your frontend, with the certificates built-in, you can use the official frontend image as a base, then copy in your required files."),(0,r.kt)("p",null,"Example Dockerfile:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dockerfile"},"FROM linkedin/datahub-frontend-react:<version>\nCOPY /truststore-directory /certificates\n")),(0,r.kt)("p",null,"Building this Dockerfile will result in your own custom docker image on your local machine.\nYou will then be able to tag it, publish it to your own registry, etc. "),(0,r.kt)("h4",{id:"option-b-mount-truststore-from-your-host-machine-using-a-docker-volume"},"Option b) Mount truststore from your host machine using a docker volume"),(0,r.kt)("p",null,"Adapt your docker-compose.yml to include a new volume mount in the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub-frontend-react")," container"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-docker"},"  datahub-frontend-react:\n    # ...\n    volumes:\n      # ...\n      - /truststore-directory:/certificates\n")),(0,r.kt)("h3",{id:"reference-new-truststore"},"Reference new truststore"),(0,r.kt)("p",null,"Add the following environment values to the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub-frontend-react")," container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SSL_TRUSTSTORE_FILE=path/to/truststore.jks (e.g. /certificates)\nSSL_TRUSTSTORE_TYPE=jks\nSSL_TRUSTSTORE_PASSWORD=MyTruststorePassword\n")),(0,r.kt)("p",null,"Once these steps are done, your frontend container will use the new truststore when validating SSL/HTTPS connections."))}p.isMDXComponent=!0}}]);