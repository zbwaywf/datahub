"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[69074],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(a),d=i,h=m["".concat(p,".").concat(d)]||m[d]||c[d]||r;return a?n.createElement(h,l(l({ref:t},s),{},{components:a})):n.createElement(h,l({ref:t},s))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},24769:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>m});a(67294);var n=a(3905);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}const o={title:"Plugins Guide",slug:"/plugins",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/plugins.md"},p="Plugins Guide",u={unversionedId:"docs/plugins",id:"version-0.13.0/docs/plugins",title:"Plugins Guide",description:"Plugins are way to enhance the basic DataHub functionality in a custom manner.",source:"@site/versioned_docs/version-0.13.0/docs/plugins.md",sourceDirName:"docs",slug:"/plugins",permalink:"/docs/0.13.0/plugins",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/plugins.md",tags:[],version:"0.13.0",frontMatter:{title:"Plugins Guide",slug:"/plugins",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/plugins.md"},sidebar:"overviewSidebar",previous:{title:"Generating Browse Paths (V2)",permalink:"/docs/0.13.0/browsev2/browse-paths-v2"},next:{title:"Which DataHub API is for me?",permalink:"/docs/0.13.0/api/datahub-apis"}},s={},m=[{value:"Authentication",id:"authentication",level:2},{value:"Implementing an Authentication Plugin",id:"implementing-an-authentication-plugin",level:3},{value:"Enable GMS Authentication",id:"enable-gms-authentication",level:2},{value:"Authorization",id:"authorization",level:2},{value:"Implementing an Authorization Plugin",id:"implementing-an-authorization-plugin",level:3},{value:"Plugin Installation",id:"plugin-installation",level:2},{value:"Docker",id:"docker",level:3},{value:"Kubernetes",id:"kubernetes",level:3},{value:"Config Detail",id:"config-detail",level:2},{value:"Plugin Permissions",id:"plugin-permissions",level:2},{value:"Migration Of Plugins From application.yml",id:"migration-of-plugins-from-applicationyml",level:2}],c={toc:m},d="wrapper";function h(e){var{components:t}=e,a=l(e,["components"]);return(0,n.kt)(d,r(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){i(e,t,a[t])}))}return e}({},c,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"plugins-guide"},"Plugins Guide"),(0,n.kt)("p",null,"Plugins are way to enhance the basic DataHub functionality in a custom manner."),(0,n.kt)("p",null,"Currently, DataHub formally supports 2 types of plugins:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#authentication"},"Authentication")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#authorization"},"Authorization"))),(0,n.kt)("h2",{id:"authentication"},"Authentication"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," This is in ",(0,n.kt)("b",null,"BETA")," version")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"It is recommend that you do not do this unless you really know what you are doing")),(0,n.kt)("p",null,"Custom authentication plugin makes it possible to authenticate DataHub users against any Identity Management System.\nChoose your Identity Management System and write custom authentication plugin as per detail mentioned in this section."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Currently, custom authenticators cannot be used to authenticate users of DataHub's web UI. This is because the DataHub web app expects the presence of 2 special cookies PLAY_SESSION and actor which are explicitly set by the server when a login action is performed.\nInstead, custom authenticators are useful for authenticating API requests to DataHub's backend (GMS), and can stand in addition to the default Authentication performed by DataHub, which is based on DataHub-minted access tokens.")),(0,n.kt)("p",null,"The sample authenticator implementation can be found at ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-service/plugin/src/test/sample-test-plugins"},"Authenticator Sample")),(0,n.kt)("h3",{id:"implementing-an-authentication-plugin"},"Implementing an Authentication Plugin"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add ",(0,n.kt)("em",{parentName:"p"},"datahub-auth-api")," as compileOnly dependency: Maven coordinates of ",(0,n.kt)("em",{parentName:"p"},"datahub-auth-api")," can be found at ",(0,n.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/io.acryl/datahub-auth-api"},"Maven")),(0,n.kt)("p",{parentName:"li"},"Example of gradle dependency is given below."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-groovy"},' dependencies {\n   \n   def auth_api = \'io.acryl:datahub-auth-api:0.9.3-3rc3\'\n   compileOnly "${auth_api}"\n   testImplementation "${auth_api}"\n\n }\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Implement the Authenticator interface: Refer ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-service/plugin/src/test/sample-test-plugins"},"Authenticator Sample")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Sample class which implements the Authenticator interface"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},"public class GoogleAuthenticator implements Authenticator {\n\n    @Override\n    public void init(@Nonnull Map<String, Object> authenticatorConfig, @Nullable AuthenticatorContext context) {\n      // Plugin initialization code will go here \n      // DataHub will call this method on boot time\n    }\n\n    @Nullable\n    @Override\n    public Authentication authenticate(@Nonnull AuthenticationRequest authenticationRequest)\n        throws AuthenticationException {\n        // DataHub will call this method whenever authentication decisions are need to be taken\n        // Authenticate the request and return Authentication\n    }\n}\n")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"getResourceAsStream")," to read files: If your plugin read any configuration file like properties or YAML or JSON or xml then use ",(0,n.kt)("inlineCode",{parentName:"p"},'this.getClass().getClassLoader().getResourceAsStream("<file-name>")')," to read that file from DataHub GMS plugin's class-path. For DataHub GMS resource look-up behavior please refer ",(0,n.kt)("a",{parentName:"p",href:"#plugin-installation"},"Plugin Installation")," section. Sample code of ",(0,n.kt)("inlineCode",{parentName:"p"},"getResourceAsStream")," is available in sample Authenticator plugin ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-service/plugin/src/test/sample-test-plugins/src/main/java/com/datahub/plugins/test/TestAuthenticator.java"},"TestAuthenticator.java"),"."))),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Bundle your Jar: Use ",(0,n.kt)("inlineCode",{parentName:"p"},"com.github.johnrengelman.shadow")," gradle plugin to create an uber jar. "),(0,n.kt)("p",{parentName:"li"},"To see an example of building an uber jar, check out the ",(0,n.kt)("inlineCode",{parentName:"p"},"build.gradle")," file for the apache-ranger-plugin file of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/acryldata/datahub-ranger-auth-plugin/tree/main/apache-ranger-plugin"},"Apache Ranger Plugin")," for reference. "),(0,n.kt)("p",{parentName:"li"},"Exclude signature files as shown in below ",(0,n.kt)("inlineCode",{parentName:"p"},"shadowJar")," task."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-groovy"},'  apply plugin: \'com.github.johnrengelman.shadow\';\n  shadowJar {\n      // Exclude com.datahub.plugins package and files related to jar signature   \n      exclude "META-INF/*.RSA", "META-INF/*.SF","META-INF/*.DSA"\n  }\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Refer section ",(0,n.kt)("a",{parentName:"p",href:"#plugin-installation"},"Plugin Installation")," for plugin installation in DataHub environment"))),(0,n.kt)("h2",{id:"enable-gms-authentication"},"Enable GMS Authentication"),(0,n.kt)("p",null,"By default, authentication is disabled in DataHub GMS."),(0,n.kt)("p",null,"Follow below steps to enable GMS authentication"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Download docker-compose.quickstart.yml: Download docker compose file ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/docker/quickstart/docker-compose.quickstart.yml"},"docker-compose.quickstart.yml"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Set environment variable: Set ",(0,n.kt)("inlineCode",{parentName:"p"},"METADATA_SERVICE_AUTH_ENABLED")," environment variable to ",(0,n.kt)("inlineCode",{parentName:"p"},"true"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Redeploy DataHub GMS: Below is quickstart command to redeploy DataHub GMS"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"datahub docker quickstart -f docker-compose.quickstart.yml\n")))),(0,n.kt)("h2",{id:"authorization"},"Authorization"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," This is in ",(0,n.kt)("b",null,"BETA")," version")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"It is recommend that you do not do this unless you really know what you are doing")),(0,n.kt)("p",null,"Custom authorization plugin makes it possible to authorize DataHub users against any Access Management System.\nChoose your Access Management System and write custom authorization plugin as per detail mentioned in this section."),(0,n.kt)("p",null,"The sample authorizer implementation can be found at ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/acryldata/datahub-ranger-auth-plugin/tree/main/apache-ranger-plugin"},"Authorizer Sample")),(0,n.kt)("h3",{id:"implementing-an-authorization-plugin"},"Implementing an Authorization Plugin"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add ",(0,n.kt)("em",{parentName:"p"},"datahub-auth-api")," as compileOnly dependency: Maven coordinates of ",(0,n.kt)("em",{parentName:"p"},"datahub-auth-api")," can be found at ",(0,n.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/io.acryl/datahub-auth-api"},"Maven")),(0,n.kt)("p",{parentName:"li"},"Example of gradle dependency is given below."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-groovy"},' dependencies {\n   \n   def auth_api = \'io.acryl:datahub-auth-api:0.9.3-3rc3\'\n   compileOnly "${auth_api}"\n   testImplementation "${auth_api}"\n\n }\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Implement the Authorizer interface: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/acryldata/datahub-ranger-auth-plugin/tree/main/apache-ranger-plugin"},"Authorizer Sample")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Sample class which implements the Authorization interface "),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"}," public class ApacheRangerAuthorizer implements Authorizer {\n     @Override\n     public void init(@Nonnull Map<String, Object> authorizerConfig, @Nonnull AuthorizerContext ctx) {\n       // Plugin initialization code will go here \n       // DataHub will call this method on boot time\n     }\n\n     @Override\n     public AuthorizationResult authorize(@Nonnull AuthorizationRequest request) {\n         // DataHub will call this method whenever authorization decisions are need be taken\n         // Authorize the request and return AuthorizationResult\n     }\n\n     @Override\n     public AuthorizedActors authorizedActors(String privilege, Optional<ResourceSpec> resourceSpec) {\n         // Need to add doc\n     }\n }\n")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"getResourceAsStream")," to read files: If your plugin read any configuration file like properties or YAML or JSON or xml then use ",(0,n.kt)("inlineCode",{parentName:"p"},'this.getClass().getClassLoader().getResourceAsStream("<file-name>")')," to read that file from DataHub GMS plugin's class-path. For DataHub GMS resource look-up behavior please refer ",(0,n.kt)("a",{parentName:"p",href:"#plugin-installation"},"Plugin Installation")," section. Sample code of ",(0,n.kt)("inlineCode",{parentName:"p"},"getResourceAsStream")," is available in sample Authenticator plugin ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-service/plugin/src/test/sample-test-plugins/src/main/java/com/datahub/plugins/test/TestAuthenticator.java"},"TestAuthenticator.java"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Bundle your Jar: Use ",(0,n.kt)("inlineCode",{parentName:"p"},"com.github.johnrengelman.shadow")," gradle plugin to create an uber jar. "),(0,n.kt)("p",{parentName:"li"},"To see an example of building an uber jar, check out the ",(0,n.kt)("inlineCode",{parentName:"p"},"build.gradle")," file for the apache-ranger-plugin file of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/acryldata/datahub-ranger-auth-plugin/tree/main/apache-ranger-plugin"},"Apache Ranger Plugin")," for reference."),(0,n.kt)("p",{parentName:"li"},"Exclude signature files as shown in below ",(0,n.kt)("inlineCode",{parentName:"p"},"shadowJar")," task."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-groovy"},'  apply plugin: \'com.github.johnrengelman.shadow\';\n  shadowJar {\n      // Exclude com.datahub.plugins package and files related to jar signature   \n      exclude "META-INF/*.RSA", "META-INF/*.SF","META-INF/*.DSA"\n  }\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Install the Plugin: Refer to the section (Plugin Installation)","[#plugin_installation]"," for plugin installation in DataHub environment"))),(0,n.kt)("h2",{id:"plugin-installation"},"Plugin Installation"),(0,n.kt)("p",null,"DataHub's GMS Service searches for the plugins in container's local directory at location ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/datahub/plugins/auth/"),". This location will be referred as ",(0,n.kt)("inlineCode",{parentName:"p"},"plugin-base-directory")," hereafter."),(0,n.kt)("p",null,"For docker, we set docker-compose to mount ",(0,n.kt)("inlineCode",{parentName:"p"},"${HOME}/.datahub")," directory to ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/datahub")," directory within the GMS containers."),(0,n.kt)("h3",{id:"docker"},"Docker"),(0,n.kt)("p",null,"Follow below steps to install plugins:"),(0,n.kt)("p",null,"Lets consider you have created an uber jar for authorizer plugin and jar name is apache-ranger-authorizer.jar and class com.abc.RangerAuthorizer has implemented the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-auth/auth-api/src/main/java/com/datahub/plugins/auth/authorization/Authorizer.java"},"Authorizer")," interface."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a plugin configuration file: Create a ",(0,n.kt)("inlineCode",{parentName:"p"},"config.yml")," file at ",(0,n.kt)("inlineCode",{parentName:"p"},"${HOME}/.datahub/plugins/auth/"),". For more detail on configuration refer ",(0,n.kt)("a",{parentName:"p",href:"#config-detail"},"Config Detail")," section")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a plugin directory: Create plugin directory as ",(0,n.kt)("inlineCode",{parentName:"p"},"apache-ranger-authorizer"),", this directory will be referred as ",(0,n.kt)("inlineCode",{parentName:"p"},"plugin-home")," hereafter"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"}," mkdir -p ${HOME}/.datahub/plugins/auth/apache-ranger-authorizer\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Copy plugin jar to ",(0,n.kt)("inlineCode",{parentName:"p"},"plugin-home"),": Copy ",(0,n.kt)("inlineCode",{parentName:"p"},"apache-ranger-authorizer.jar")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"plugin-home")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"}," copy apache-ranger-authorizer.jar ${HOME}/.datahub/plugins/auth/apache-ranger-authorizer\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Update plugin configuration file: Add below entry in ",(0,n.kt)("inlineCode",{parentName:"p"},"config.yml"),' file, the plugin can take any arbitrary configuration under the "configs" block. in our example, there is username and password'),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'   plugins:\n     - name: "apache-ranger-authorizer"\n       type: "authorizer"\n       enabled: "true"\n       params:\n         className: "com.abc.RangerAuthorizer"\n         configs:\n            username: "foo"\n            password: "fake"\n\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Restart datahub-gms container: "),(0,n.kt)("p",{parentName:"li"},"On startup DataHub GMS service performs below steps "),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Load ",(0,n.kt)("inlineCode",{parentName:"li"},"config.yml")),(0,n.kt)("li",{parentName:"ol"},"Prepare list of plugin where ",(0,n.kt)("inlineCode",{parentName:"li"},"enabled")," is set to ",(0,n.kt)("inlineCode",{parentName:"li"},"true")),(0,n.kt)("li",{parentName:"ol"},"Look for directory equivalent to plugin ",(0,n.kt)("inlineCode",{parentName:"li"},"name")," in ",(0,n.kt)("inlineCode",{parentName:"li"},"plugin-base-directory"),". In this case it is ",(0,n.kt)("inlineCode",{parentName:"li"},"/etc/datahub/plugins/auth/apache-ranger-authorizer/"),", this directory will become ",(0,n.kt)("inlineCode",{parentName:"li"},"plugin-home")," "),(0,n.kt)("li",{parentName:"ol"},"Look for ",(0,n.kt)("inlineCode",{parentName:"li"},"params.jarFileName")," attribute otherwise look for jar having name as ","<","plugin-name",">",".jar. In this case  it is ",(0,n.kt)("inlineCode",{parentName:"li"},"/etc/datahub/plugins/auth/apache-ranger-authorizer/apache-ranger-authorizer.jar")),(0,n.kt)("li",{parentName:"ol"},"Load class given in plugin ",(0,n.kt)("inlineCode",{parentName:"li"},"params.className")," attribute from the jar, here load class ",(0,n.kt)("inlineCode",{parentName:"li"},"com.abc.RangerAuthorizer")," from ",(0,n.kt)("inlineCode",{parentName:"li"},"apache-ranger-authorizer.jar")),(0,n.kt)("li",{parentName:"ol"},"Call ",(0,n.kt)("inlineCode",{parentName:"li"},"init")," method of plugin")),(0,n.kt)("br",null),"On method call of `getResourceAsStream` DataHub GMS service looks for the resource in below order. 1. Look for the requested resource in plugin-jar file. if found then return the resource as InputStream. 2. Look for the requested resource in `plugin-home` directory. if found then return the resource as InputStream. 3. Look for the requested resource in application class-loader. if found then return the resource as InputStream. 4. Return `null` as requested resource is not found.")),(0,n.kt)("p",null,"By default, authentication is disabled in DataHub GMS, Please follow section ",(0,n.kt)("a",{parentName:"p",href:"#enable-gms-authentication"},"Enable GMS Authentication")," to enable authentication."),(0,n.kt)("h3",{id:"kubernetes"},"Kubernetes"),(0,n.kt)("p",null,"Helm support is coming soon."),(0,n.kt)("h2",{id:"config-detail"},"Config Detail"),(0,n.kt)("p",null,"A sample ",(0,n.kt)("inlineCode",{parentName:"p"},"config.yml")," can be found at ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-service/plugin/src/test/resources/valid-base-plugin-dir1/config.yml"},"config.yml"),"."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"config.yml")," structure:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"plugins[].name"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"name of the plugin")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"plugins[].type"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null},"enum","[authenticator, authorizer]"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"type of plugin, possible values are authenticator or authorizer")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"plugins[].enabled"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"whether this plugin is enabled or disabled. DataHub GMS wouldn't process disabled plugin")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"plugins[].params.className"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Authenticator or Authorizer implementation class' fully qualified class name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"plugins[].params.jarFileName"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"default to ",(0,n.kt)("inlineCode",{parentName:"td"},"plugins[].name"),".jar"),(0,n.kt)("td",{parentName:"tr",align:null},"jar file name in ",(0,n.kt)("inlineCode",{parentName:"td"},"plugin-home"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"plugins[].params.configs"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"map<string,object>"),(0,n.kt)("td",{parentName:"tr",align:null},"default to empty map"),(0,n.kt)("td",{parentName:"tr",align:null},"Runtime configuration required for plugin")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"plugins[] is an array of plugin, where you can define multiple authenticator and authorizer plugins. plugin name should be unique in plugins array.")),(0,n.kt)("h2",{id:"plugin-permissions"},"Plugin Permissions"),(0,n.kt)("p",null,"Adhere to below plugin access control to keep your plugin forward compatible."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Plugin should read/write file to and from ",(0,n.kt)("inlineCode",{parentName:"li"},"plugin-home")," directory only. Refer ",(0,n.kt)("a",{parentName:"li",href:"#plugin-installation"},"Plugin Installation")," step2 for ",(0,n.kt)("inlineCode",{parentName:"li"},"plugin-home")," definition"),(0,n.kt)("li",{parentName:"ul"},"Plugin should access port 80 or 443 or port higher than 1024")),(0,n.kt)("p",null,"All other access are forbidden for the plugin."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Disclaimer: In BETA version your plugin can access any port and can read/write to any location on file system, however you should implement the plugin as per above access permission to keep your plugin compatible with upcoming release of DataHub.")),(0,n.kt)("h2",{id:"migration-of-plugins-from-applicationyml"},"Migration Of Plugins From application.yml"),(0,n.kt)("p",null,"If you have any custom Authentication or Authorization plugin define in ",(0,n.kt)("inlineCode",{parentName:"p"},"authorization")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"authentication")," section of  ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-service/configuration/src/main/resources/application.yml"},"application.yml")," then migrate them as per below steps."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Implement Plugin: For Authentication Plugin follow steps of ",(0,n.kt)("a",{parentName:"p",href:"#implementing-an-authentication-plugin"},"Implementing an Authentication Plugin")," and for Authorization Plugin follow steps of ",(0,n.kt)("a",{parentName:"p",href:"#implementing-an-authorization-plugin"},"Implementing an Authorization Plugin"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Install Plugin: Install the plugins as per steps mentioned in ",(0,n.kt)("a",{parentName:"p",href:"#plugin-installation"},"Plugin Installation"),". Here you need to map the configuration from ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-service/configuration/src/main/resources/application.yml"},"application.yml")," to configuration in ",(0,n.kt)("inlineCode",{parentName:"p"},"config.yml"),". This mapping from ",(0,n.kt)("inlineCode",{parentName:"p"},"application.yml")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"config.yml")," is described below "),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Mapping for Authenticators")),(0,n.kt)("p",{parentName:"li"},"a. In ",(0,n.kt)("inlineCode",{parentName:"p"},"config.yml")," set ",(0,n.kt)("inlineCode",{parentName:"p"},"plugins[].type")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"authenticator")),(0,n.kt)("p",{parentName:"li"},"b. ",(0,n.kt)("inlineCode",{parentName:"p"},"authentication.authenticators[].type")," is mapped to ",(0,n.kt)("inlineCode",{parentName:"p"},"plugins[].params.className")),(0,n.kt)("p",{parentName:"li"},"c. ",(0,n.kt)("inlineCode",{parentName:"p"},"authentication.authenticators[].configs")," is mapped to ",(0,n.kt)("inlineCode",{parentName:"p"},"plugins[].params.configs")),(0,n.kt)("p",{parentName:"li"},"Example Authenticator Plugin configuration in ",(0,n.kt)("inlineCode",{parentName:"p"},"config.yml")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'plugins:\n   - name: "apache-ranger-authenticator"\n      type: "authenticator"\n      enabled: "true"\n      params:\n      className: "com.abc.RangerAuthenticator"\n      configs:\n         username: "foo"\n         password: "fake"\n\n')),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Mapping for Authorizer")),(0,n.kt)("p",{parentName:"li"},"a. In ",(0,n.kt)("inlineCode",{parentName:"p"},"config.yml")," set ",(0,n.kt)("inlineCode",{parentName:"p"},"plugins[].type")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"authorizer")),(0,n.kt)("p",{parentName:"li"},"b. ",(0,n.kt)("inlineCode",{parentName:"p"},"authorization.authorizers[].type")," is mapped to ",(0,n.kt)("inlineCode",{parentName:"p"},"plugins[].params.className")),(0,n.kt)("p",{parentName:"li"},"c. ",(0,n.kt)("inlineCode",{parentName:"p"},"authorization.authorizers[].configs")," is mapped to ",(0,n.kt)("inlineCode",{parentName:"p"},"plugins[].params.configs")),(0,n.kt)("p",{parentName:"li"},"Example Authorizer Plugin configuration in ",(0,n.kt)("inlineCode",{parentName:"p"},"config.yml")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'plugins:\n   - name: "apache-ranger-authorizer"\n      type: "authorizer"\n      enabled: "true"\n      params:\n      className: "com.abc.RangerAuthorizer"\n      configs:\n         username: "foo"\n         password: "fake"\n\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Move any other configurations files of your plugin to ",(0,n.kt)("inlineCode",{parentName:"p"},"plugin_home")," directory. The detail about ",(0,n.kt)("inlineCode",{parentName:"p"},"plugin_home")," is mentioned in ",(0,n.kt)("a",{parentName:"p",href:"#plugin-installation"},"Plugin Installation")," section."))))}h.isMDXComponent=!0}}]);