(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{107:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return g}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),b=n,g=u["".concat(i,".").concat(b)]||u[b]||f[b]||o;return r?a.a.createElement(g,c(c({ref:t},p),{},{components:r})):a.a.createElement(g,c({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},77:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(107)),i={title:"Data Engineering Project - Azure APIM, Azure Functions, Blob Storage - Part 3",author:"Kristijan Bakaric",author_title:"Mr.",author_url:"https://www.linkedin.com/in/kristijanb/",author_image_url:"https://media-exp1.licdn.com/dms/image/C4E03AQF-5oI5fHJPjw/profile-displayphoto-shrink_800_800/0/1606336983715?e=1620259200&v=beta&t=VvBP6s8IMDUwKDfvj6B3c-gGmN3IfioALIAboXg_DGE",tags:["dataengineering","projects","azure","python"],hide_table_of_contents:!1},c={permalink:"/personal-website/blog/2021/04/06/data-engineering-part3",source:"@site/blog/2021-04-6-data-engineering-part3.md",description:"In this post, I will create the first part of the data streaming pipeline which consists of API gateway that will accept API calls and route them to the Azure Function, which will further process the data and (initially) store them to Azure Blob Storage.",date:"2021-04-06T00:00:00.000Z",tags:[{label:"dataengineering",permalink:"/personal-website/blog/tags/dataengineering"},{label:"projects",permalink:"/personal-website/blog/tags/projects"},{label:"azure",permalink:"/personal-website/blog/tags/azure"},{label:"python",permalink:"/personal-website/blog/tags/python"}],title:"Data Engineering Project - Azure APIM, Azure Functions, Blob Storage - Part 3",readingTime:6.055,truncated:!0,nextItem:{title:"Data Engineering Project - Pre-process data - Part 2",permalink:"/personal-website/blog/2021/03/06/data-engineering-part2"}},l=[],p={toc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://images.unsplash.com/photo-1518289646039-3e6c87a5aaf6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2102&q=80",alt:null})),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"In this post, I will create the first part of the data streaming pipeline which consists of API gateway that will accept API calls and route them to the Azure Function, which will further process the data and (initially) store them to Azure Blob Storage.")))}s.isMDXComponent=!0}}]);