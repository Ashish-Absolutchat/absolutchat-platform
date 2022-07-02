"use strict";(self.webpackChunkabsolutchat_documentation=self.webpackChunkabsolutchat_documentation||[]).push([[973],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1753:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return m}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),l=["components"],i={},s="Bot Templates",c={unversionedId:"dashboard/bot-templates",id:"dashboard/bot-templates",title:"Bot Templates",description:"Create Flows",source:"@site/docs/dashboard/bot-templates.md",sourceDirName:"dashboard",slug:"/dashboard/bot-templates",permalink:"/absolutchat-platform/docs/dashboard/bot-templates",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/dashboard/bot-templates.md",tags:[],version:"current",frontMatter:{}},p={},m=[{value:"Create Flows",id:"create-flows",level:2},{value:"Create Templates",id:"create-templates",level:2},{value:"Edit Templates",id:"edit-templates",level:2}],u={toc:m};function d(e){var t=e.components,i=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bot-templates"},"Bot Templates"),(0,o.kt)("h2",{id:"create-flows"},"Create Flows"),(0,o.kt)("p",null,"There are 2 ways you can create new flows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set up a bot and create flow for the bot. (create from blank or template)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install a template as a sole flow."))),(0,o.kt)("p",null,"Visit our\xa0",(0,o.kt)("a",{parentName:"p",href:"https://www.absolutchat.app/settings/accounts/5116#/templates"},"template store here")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"WARNING")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When you just install a template without connecting it to any bot. You are unable to test the flow."))),(0,o.kt)("h2",{id:"create-templates"},"Create Templates"),(0,o.kt)("p",null,"A template is created from one of your existing flows and the flow thereafter becomes the source flow of the template."),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"WARNING")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Source flow is important if you need to edit/update the template in the future. Make sure you keep and mark it safely.\xa0",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"If you accidentally delete it, you cannot edit the template anymore")),". Try to unlock and install the template to be a new source flow and re-create a template with that source flow."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"absolutchat-createtemplate",src:a(6296).Z,width:"1420",height:"734"})),(0,o.kt)("p",null,"Click on My content then My Bot Template above, then select a source flow from the existing flows"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"absolutchat-createtemplate",src:a(9812).Z,width:"1759",height:"498"})),(0,o.kt)("p",null,"Select one of your existing flows."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"absolutchat-createtemplate",src:a(7301).Z,width:"1784",height:"741"})),(0,o.kt)("p",null,"Give descriptions for template fields like manager email, restaurant address/contact, etc. Also, provide default values if needed."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"absolutchat-createtemplate",src:a(3998).Z,width:"1786",height:"636"})),(0,o.kt)("p",null,"Finally, name the template and that's it! \ud83d\ude0a"),(0,o.kt)("h2",{id:"edit-templates"},"Edit Templates"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"absolutchat-edittemplate",src:a(2686).Z,width:"402",height:"359"})),(0,o.kt)("p",null,'Click "Share" to adjust who can see this template:'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"absolutchat-edittemplate",src:a(1456).Z,width:"1775",height:"824"})),(0,o.kt)("p",null,'To update the template, you will need to go back to the source flow in "All Bots", edit it and come back to click "Update Flow" here. The system will list the differences between the old version and the updated version.'))}d.isMDXComponent=!0},6296:function(e,t,a){t.Z=a.p+"assets/images/createtemplate-3e3eca9924e9229eb051daebcf96734c.png"},9812:function(e,t,a){t.Z=a.p+"assets/images/createtemplate2-e945d7d2950e2bc33ff4df810e507323.png"},7301:function(e,t,a){t.Z=a.p+"assets/images/createtemplate3-cb12fa7cabca70fe3572a99ac2c6e57b.png"},3998:function(e,t,a){t.Z=a.p+"assets/images/createtemplate4-b072cbb7a1859ba963282c8a8fe8414b.png"},2686:function(e,t,a){t.Z=a.p+"assets/images/edittemplate-bce9ae85a206f39f4ea6108fed43a604.png"},1456:function(e,t,a){t.Z=a.p+"assets/images/edittemplate2-a5c62709979fbfa51e6efa7266769f77.png"}}]);