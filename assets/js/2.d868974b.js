"use strict";(self.webpackChunkark_modding_github_io=self.webpackChunkark_modding_github_io||[]).push([[2],{8317:(e,t,a)=>{a.d(t,{Z:()=>f});var s=a(1733),n=a(8490),r=a(2354),i=a(2129),l=a(7995),o=a(4596),c=a(574),m=a(3827);function d(e){const{pathname:t}=(0,c.TH)();return(0,s.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,m.Mg)(e.permalink,t))}(e,t)))),[e,t])}const u={sidebar:"sidebar_pkD5",sidebarItemTitle:"sidebarItemTitle_tkiW",sidebarItemList:"sidebarItemList_el_y",sidebarItem:"sidebarItem_qrxt",sidebarItemLink:"sidebarItemLink_JGgO",sidebarItemLinkActive:"sidebarItemLinkActive_oRJ9"};var h=a(3860);function g(e){let{sidebar:t}=e;const a=d(t.items);return(0,h.jsx)("aside",{className:"col col--3",children:(0,h.jsxs)("nav",{className:(0,n.Z)(u.sidebar,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,h.jsx)("div",{className:(0,n.Z)(u.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,h.jsx)("ul",{className:(0,n.Z)(u.sidebarItemList,"clean-list"),children:a.map((e=>(0,h.jsx)("li",{className:u.sidebarItem,children:(0,h.jsx)(l.Z,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var p=a(4411);function x(e){let{sidebar:t}=e;const a=d(t.items);return(0,h.jsx)("ul",{className:"menu__list",children:a.map((e=>(0,h.jsx)("li",{className:"menu__list-item",children:(0,h.jsx)(l.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function j(e){return(0,h.jsx)(p.Zo,{component:x,props:e})}function b(e){let{sidebar:t}=e;const a=(0,i.i)();return t?.items.length?"mobile"===a?(0,h.jsx)(j,{sidebar:t}):(0,h.jsx)(g,{sidebar:t}):null}function f(e){const{sidebar:t,toc:a,children:s,...i}=e,l=t&&t.items.length>0;return(0,h.jsx)(r.Z,{...i,children:(0,h.jsx)("div",{className:"container margin-vert--lg",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)(b,{sidebar:t}),(0,h.jsx)("main",{className:(0,n.Z)("col",{"col--7":l,"col--9 col--offset-1":!l}),itemScope:!0,itemType:"https://schema.org/Blog",children:s}),a&&(0,h.jsx)("div",{className:"col col--2",children:a})]})})})}},6168:(e,t,a)=>{a.d(t,{Z:()=>U});var s=a(1733),n=a(8490),r=a(7124),i=a(3293),l=a(3860);function o(e){let{children:t,className:a}=e;const{frontMatter:s,assets:n,metadata:{description:o}}=(0,r.C)(),{withBaseUrl:c}=(0,i.C)(),m=n.image??s.image,d=s.keywords??[];return(0,l.jsxs)("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"https://schema.org/BlogPosting",children:[o&&(0,l.jsx)("meta",{itemProp:"description",content:o}),m&&(0,l.jsx)("link",{itemProp:"image",href:c(m,{absolute:!0})}),d.length>0&&(0,l.jsx)("meta",{itemProp:"keywords",content:d.join(",")}),t]})}var c=a(7995);const m={title:"title_deMQ"};function d(e){let{className:t}=e;const{metadata:a,isBlogPostPage:s}=(0,r.C)(),{permalink:i,title:o}=a,d=s?"h1":"h2";return(0,l.jsx)(d,{className:(0,n.Z)(m.title,t),itemProp:"headline",children:s?o:(0,l.jsx)(c.Z,{itemProp:"url",to:i,children:o})})}var u=a(4596),h=a(8403);const g=["zero","one","two","few","many","other"];function p(e){return g.filter((t=>e.includes(t)))}const x={locale:"en",pluralForms:p(["one","other"]),select:e=>1===e?"one":"other"};function j(){const{i18n:{currentLocale:e}}=(0,h.Z)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:p(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),x}}),[e])}function b(){const e=j();return{selectMessage:(t,a)=>function(e,t,a){const s=e.split("|");if(1===s.length)return s[0];s.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const n=a.select(t),r=a.pluralForms.indexOf(n);return s[Math.min(r,s.length-1)]}(a,t,e)}}const f={container:"container_LZU8"};function v(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=b();return t=>{const a=Math.ceil(t);return e(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,l.jsx)(l.Fragment,{children:a(t)})}function _(e){let{date:t,formattedDate:a}=e;return(0,l.jsx)("time",{dateTime:t,itemProp:"datePublished",children:a})}function N(){return(0,l.jsx)(l.Fragment,{children:" \xb7 "})}function P(e){let{className:t}=e;const{metadata:a}=(0,r.C)(),{date:s,formattedDate:i,readingTime:o}=a;return(0,l.jsxs)("div",{className:(0,n.Z)(f.container,"margin-vert--md",t),children:[(0,l.jsx)(_,{date:s,formattedDate:i}),void 0!==o&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(N,{}),(0,l.jsx)(v,{readingTime:o})]})]})}function k(e){return e.href?(0,l.jsx)(c.Z,{...e}):(0,l.jsx)(l.Fragment,{children:e.children})}function Z(e){let{author:t,className:a}=e;const{name:s,title:r,url:i,imageURL:o,email:c}=t,m=i||c&&`mailto:${c}`||void 0;return(0,l.jsxs)("div",{className:(0,n.Z)("avatar margin-bottom--sm",a),children:[o&&(0,l.jsx)(k,{href:m,className:"avatar__photo-link",children:(0,l.jsx)("img",{className:"avatar__photo",src:o,alt:s,itemProp:"image"})}),s&&(0,l.jsxs)("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person",children:[(0,l.jsx)("div",{className:"avatar__name",children:(0,l.jsx)(k,{href:m,itemProp:"url",children:(0,l.jsx)("span",{itemProp:"name",children:s})})}),r&&(0,l.jsx)("small",{className:"avatar__subtitle",itemProp:"description",children:r})]})]})}const C={authorCol:"authorCol_c4rU",imageOnlyAuthorRow:"imageOnlyAuthorRow_YPTe",imageOnlyAuthorCol:"imageOnlyAuthorCol_pXuq"};function T(e){let{className:t}=e;const{metadata:{authors:a},assets:s}=(0,r.C)();if(0===a.length)return null;const i=a.every((e=>{let{name:t}=e;return!t}));return(0,l.jsx)("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",i?C.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,l.jsx)("div",{className:(0,n.Z)(!i&&"col col--6",i?C.imageOnlyAuthorCol:C.authorCol),children:(0,l.jsx)(Z,{author:{...e,imageURL:s.authorsImageUrls[t]??e.imageURL}})},t)))})}function w(){return(0,l.jsxs)("header",{children:[(0,l.jsx)(d,{}),(0,l.jsx)(P,{}),(0,l.jsx)(T,{})]})}var I=a(2133),L=a(4270);function F(e){let{children:t,className:a}=e;const{isBlogPostPage:s}=(0,r.C)();return(0,l.jsx)("div",{id:s?I.blogPostContainerID:void 0,className:(0,n.Z)("markdown",a),itemProp:"articleBody",children:(0,l.jsx)(L.Z,{children:t})})}var y=a(5973),B=a(9093);function M(){return(0,l.jsx)("b",{children:(0,l.jsx)(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function R(e){const{blogPostTitle:t,...a}=e;return(0,l.jsx)(c.Z,{"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,l.jsx)(M,{})})}const A={blogPostFooterDetailsFull:"blogPostFooterDetailsFull__Zw2"};function O(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:a,title:s,editUrl:i,hasTruncateMarker:o}=e,c=!t&&o,m=a.length>0;return m||c||i?(0,l.jsxs)("footer",{className:(0,n.Z)("row docusaurus-mt-lg",t&&A.blogPostFooterDetailsFull),children:[m&&(0,l.jsx)("div",{className:(0,n.Z)("col",{"col--9":c}),children:(0,l.jsx)(B.Z,{tags:a})}),t&&i&&(0,l.jsx)("div",{className:"col margin-top--sm",children:(0,l.jsx)(y.Z,{editUrl:i})}),c&&(0,l.jsx)("div",{className:(0,n.Z)("col text--right",{"col--3":m}),children:(0,l.jsx)(R,{blogPostTitle:s,to:e.permalink})})]}):null}function U(e){let{children:t,className:a}=e;const s=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--xl"}();return(0,l.jsxs)(o,{className:(0,n.Z)(s,a),children:[(0,l.jsx)(w,{}),(0,l.jsx)(F,{children:t}),(0,l.jsx)(O,{})]})}},5973:(e,t,a)=>{a.d(t,{Z:()=>m});a(1733);var s=a(4596),n=a(6932),r=a(7995),i=a(8490);const l={iconEdit:"iconEdit_CSHF"};var o=a(3860);function c(e){let{className:t,...a}=e;return(0,o.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(l.iconEdit,t),"aria-hidden":"true",...a,children:(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function m(e){let{editUrl:t}=e;return(0,o.jsxs)(r.Z,{to:t,className:n.k.common.editThisPage,children:[(0,o.jsx)(c,{}),(0,o.jsx)(s.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}},9575:(e,t,a)=>{a.d(t,{Z:()=>i});a(1733);var s=a(8490),n=a(7995),r=a(3860);function i(e){const{permalink:t,title:a,subLabel:i,isNext:l}=e;return(0,r.jsxs)(n.Z,{className:(0,s.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[i&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:i}),(0,r.jsx)("div",{className:"pagination-nav__label",children:a})]})}},9093:(e,t,a)=>{a.d(t,{Z:()=>m});a(1733);var s=a(8490),n=a(4596),r=a(7995);const i={tag:"tag_Kvab",tagRegular:"tagRegular_o7V3",tagWithCount:"tagWithCount_eCtL"};var l=a(3860);function o(e){let{permalink:t,label:a,count:n}=e;return(0,l.jsxs)(r.Z,{href:t,className:(0,s.Z)(i.tag,n?i.tagWithCount:i.tagRegular),children:[a,n&&(0,l.jsx)("span",{children:n})]})}const c={tags:"tags_hBTK",tag:"tag_xgOB"};function m(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,s.Z)(c.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:a}=e;return(0,l.jsx)("li",{className:c.tag,children:(0,l.jsx)(o,{label:t,permalink:a})},a)}))})]})}},7124:(e,t,a)=>{a.d(t,{C:()=>o,n:()=>l});var s=a(1733),n=a(5623),r=a(3860);const i=s.createContext(null);function l(e){let{children:t,content:a,isBlogPostPage:n=!1}=e;const l=function(e){let{content:t,isBlogPostPage:a}=e;return(0,s.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:n});return(0,r.jsx)(i.Provider,{value:l,children:t})}function o(){const e=(0,s.useContext)(i);if(null===e)throw new n.i6("BlogPostProvider");return e}}}]);