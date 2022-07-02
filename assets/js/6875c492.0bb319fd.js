"use strict";(self.webpackChunkabsolutchat_documentation=self.webpackChunkabsolutchat_documentation||[]).push([[610],{9058:function(e,t,a){a.d(t,{Z:function(){return Z}});var r=a(3366),l=a(7294),n=a(6010),s=a(5257),i=a(7524),o=a(9960),m=a(5999),c="sidebar_re4s",u="sidebarItemTitle_pO2u",g="sidebarItemList_Yudw",d="sidebarItem__DBe",p="sidebarItemLink_mo7H",h="sidebarItemLinkActive_I1ZP";function b(e){var t=e.sidebar;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.Z)(c,"thin-scrollbar"),"aria-label":(0,m.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(u,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.Z)(g,"clean-list")},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:d},l.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:p,activeClassName:h},e.title))})))))}var v=a(3102);function f(e){var t=e.sidebar;return l.createElement("ul",{className:"menu__list"},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function E(e){return l.createElement(v.Zo,{component:f,props:e})}function N(e){var t=e.sidebar,a=(0,i.i)();return null!=t&&t.items.length?"mobile"===a?l.createElement(E,{sidebar:t}):l.createElement(b,{sidebar:t}):null}var _=["sidebar","toc","children"];function Z(e){var t=e.sidebar,a=e.toc,i=e.children,o=(0,r.Z)(e,_),m=t&&t.items.length>0;return l.createElement(s.Z,o,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(N,{sidebar:t}),l.createElement("main",{className:(0,n.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&l.createElement("div",{className:"col col--2"},a))))}},9703:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(7294),l=a(5999),n=a(2244);function s(e){var t=e.metadata,a=t.previousPage,s=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,l.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&r.createElement(n.Z,{permalink:a,title:r.createElement(l.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&r.createElement(n.Z,{permalink:s,title:r.createElement(l.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},1860:function(e,t,a){a.d(t,{Z:function(){return Z}});var r=a(7294),l=a(6010),n=a(5999),s=a(9960),i=a(4996),o=a(8824),m=a(8780),c=a(1315),u=a(6114),g=a(1526);function d(e){return e.href?r.createElement(s.Z,e):r.createElement(r.Fragment,null,e.children)}function p(e){var t=e.author,a=t.name,l=t.title,n=t.url,s=t.imageURL,i=t.email,o=n||i&&"mailto:"+i||void 0;return r.createElement("div",{className:"avatar margin-bottom--sm"},s&&r.createElement(d,{href:o,className:"avatar__photo-link"},r.createElement("img",{className:"avatar__photo",src:s,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(d,{href:o,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),l&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))}var h="authorCol_sTYa",b="imageOnlyAuthorRow_vA2J",v="imageOnlyAuthorCol_kG3X";function f(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var n=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",n?b:"row")},t.map((function(e,t){var s;return r.createElement("div",{className:(0,l.Z)(!n&&"col col--6",n?v:h),key:t},r.createElement(p,{author:Object.assign({},e,{imageURL:null!=(s=a.authorsImageUrls[t])?s:e.imageURL})}))})))}var E="blogPostTitle_Ikge",N="blogPostData_SAv4",_="blogPostDetailsFull_u0Nl";function Z(e){var t,a,d=(a=(0,o.c)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,n.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),p=(0,i.C)().withBaseUrl,h=e.children,b=e.frontMatter,v=e.assets,Z=e.metadata,k=e.truncated,P=e.isBlogPostPage,w=void 0!==P&&P,T=Z.date,I=Z.formattedDate,y=Z.permalink,A=Z.tags,L=Z.readingTime,x=Z.title,M=Z.editUrl,F=Z.authors,R=null!=(t=v.image)?t:b.image,C=!w&&k,O=A.length>0,U=w?"h1":"h2";return r.createElement("article",{className:w?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(U,{className:E,itemProp:"headline"},w?x:r.createElement(s.Z,{itemProp:"url",to:y},x)),r.createElement("div",{className:(0,l.Z)(N,"margin-vert--md")},r.createElement("time",{dateTime:T,itemProp:"datePublished"},I),void 0!==L&&r.createElement(r.Fragment,null," \xb7 ",d(L))),r.createElement(f,{authors:F,assets:v})),R&&r.createElement("meta",{itemProp:"image",content:p(R,{absolute:!0})}),r.createElement("div",{id:w?m.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},r.createElement(c.Z,null,h)),(O||k)&&r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",w&&_)},O&&r.createElement("div",{className:(0,l.Z)("col",{"col--9":C})},r.createElement(g.Z,{tags:A})),w&&M&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(u.Z,{editUrl:M})),C&&r.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":O})},r.createElement(s.Z,{to:Z.permalink,"aria-label":(0,n.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:x})},r.createElement("b",null,r.createElement(n.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},1714:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var r=a(7294),l=a(6010),n=a(5999),s=a(8824),i=a(1944),o=a(5281),m=a(9960),c=a(9058),u=a(1860),g=a(9703),d=a(197);function p(e){var t,a=e.tag,p=e.items,h=e.sidebar,b=e.listMetadata,v=(t=(0,s.c)().selectMessage,function(e){return t(e,(0,n.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),f=(0,n.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:v(a.count),tagName:a.label});return r.createElement(i.FG,{className:(0,l.Z)(o.k.wrapper.blogPages,o.k.page.blogTagPostListPage)},r.createElement(i.d,{title:f}),r.createElement(d.Z,{tag:"blog_tags_posts"}),r.createElement(c.Z,{sidebar:h},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,f),r.createElement(m.Z,{href:a.allTagsPath},r.createElement(n.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),p.map((function(e){var t=e.content;return r.createElement(u.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},r.createElement(t,null))})),r.createElement(g.Z,{metadata:b})))}},8824:function(e,t,a){a.d(t,{c:function(){return m}});var r=a(7294),l=a(2263),n=["zero","one","two","few","many","other"];function s(e){return n.filter((function(t){return e.includes(t)}))}var i={locale:"en",pluralForms:s(["one","other"]),select:function(e){return 1===e?"one":"other"}};function o(){var e=(0,l.Z)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,a=new Intl.PluralRules(t),{locale:t,pluralForms:s(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),i}var t,a}),[e])}function m(){var e=o();return{selectMessage:function(t,a){return function(e,t,a){var r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms.join(",")+"), but the message contains "+r.length+": "+e);var l=a.select(t),n=a.pluralForms.indexOf(l);return r[Math.min(n,r.length-1)]}(a,t,e)}}}}}]);