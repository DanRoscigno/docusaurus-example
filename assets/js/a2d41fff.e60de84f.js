(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{107:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=l(a),d=n,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return a?r.a.createElement(m,s(s({ref:t},p),{},{components:a})):r.a.createElement(m,s({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},161:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/diagramme-811c652476759c0eec3404cc105941f0.png"},162:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/tweets_before-3da818a0f177de27559438d816859bd9.png"},163:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/tweets_after-972ce9283e9840b1f0987242612f0b3d.png"},164:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/images_before-7b2cb8648c9cce93629c0d4747948b5f.png"},165:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/images_after-205254e7464955858326f36aad7bcb45.png"},166:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/tweets_images_merged-ba6dc7c59b4491a7a701c14ad210ff9a.png"},167:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/send_tweets-7a74d096152295668987ad5045edc412.png"},91:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),i=(a(0),a(107)),o={title:"Data Engineering Project - Pre-process data - Part 2",author:"Kristijan Bakaric",author_title:"Mr.",author_url:"https://www.linkedin.com/in/kristijanb/",author_image_url:"https://media-exp1.licdn.com/dms/image/C4E03AQF-5oI5fHJPjw/profile-displayphoto-shrink_800_800/0/1606336983715?e=1620259200&v=beta&t=VvBP6s8IMDUwKDfvj6B3c-gGmN3IfioALIAboXg_DGE",tags:["dataengineering","projects","azure","python"],hide_table_of_contents:!1},s={permalink:"/personal-website/blog/2021/03/06/data-engineering-part2",source:"@site/blog/2021-03-6-data-engineering-part2.md",description:"In this post I will briefly introduce Python functions and scripts that process the data from Kaggle, combine tweets and satelite images into a single file, acting as a source data, and building a python program that will send requests to an Azure API endpoint.",date:"2021-03-06T00:00:00.000Z",tags:[{label:"dataengineering",permalink:"/personal-website/blog/tags/dataengineering"},{label:"projects",permalink:"/personal-website/blog/tags/projects"},{label:"azure",permalink:"/personal-website/blog/tags/azure"},{label:"python",permalink:"/personal-website/blog/tags/python"}],title:"Data Engineering Project - Pre-process data - Part 2",readingTime:2.215,truncated:!0,prevItem:{title:"Data Engineering Project - Azure APIM, Azure Functions, Blob Storage - Part 3",permalink:"/personal-website/blog/2021/04/06/data-engineering-part3"},nextItem:{title:"Data Engineering Project - Intro - Part 1",permalink:"/personal-website/blog/2021/02/28/data-engineering-part1"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Python Scripts",id:"python-scripts",children:[{value:"<code>preprocess_twitter.py</code>",id:"preprocess_twitterpy",children:[]},{value:"<code>preprocess_images.py</code>",id:"preprocess_imagespy",children:[]},{value:"<code>merge_tweets_images.py</code>",id:"merge_tweets_imagespy",children:[]},{value:"<code>push_tweets.py</code>",id:"push_tweetspy",children:[]}]},{value:"In the Next Post...",id:"in-the-next-post",children:[]}],p={toc:c};function l(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://images.unsplash.com/photo-1568438350562-2cae6d394ad0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",alt:null})),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"In this post I will briefly introduce Python functions and scripts that process the data from Kaggle, combine tweets and satelite images into a single file, acting as a source data, and building a python program that will send requests to an Azure API endpoint. ")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Since there is no real relation between tweets and satelite images, for the purpose of creatnig data pipelines in Azure, I have simulated and randomly assigned ids from images to tweets, and thus made an artifical relation."))),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"I have briefly introduced the data sources in the ",Object(i.b)("a",{parentName:"p",href:"/personal-website/blog/2021/02/28/data-engineering-part1"},"previous post")," so I will skip the introduction of the dataset here. In the figure 1, there is a high level overview of what are the inputs and what are the outputs of the data processing, with a main aim of a json file that contains messages which I will be sending via http requests to Azure API management REST API endpoint."),Object(i.b)("p",null,Object(i.b)("img",{src:a(161).default}),"\nFigure 1: Diagramme of the data preparation process."),Object(i.b)("h2",{id:"python-scripts"},"Python Scripts"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/baky0905/hurricane-proc-send-data"},"Github Project")," has four python files. They can each be tested on sample dataset that is contained in the repository under ",Object(i.b)("a",{parentName:"p",href:"https://github.com/baky0905/hurricane-proc-send-data/sample_data"},"./sample_data"),", otherwise, navigate to original data sources and get the full datasets."),Object(i.b)("h3",{id:"preprocess_twitterpy"},Object(i.b)("inlineCode",{parentName:"h3"},"preprocess_twitter.py")),Object(i.b)("blockquote",null,Object(i.b)("blockquote",{parentName:"blockquote"},Object(i.b)("p",{parentName:"blockquote"},"Script that processes original tweet messages."))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Before processing:")),Object(i.b)("p",null,Object(i.b)("img",{src:a(162).default})),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"After processing:")),Object(i.b)("p",null,Object(i.b)("img",{src:a(163).default})),Object(i.b)("h3",{id:"preprocess_imagespy"},Object(i.b)("inlineCode",{parentName:"h3"},"preprocess_images.py")),Object(i.b)("blockquote",null,Object(i.b)("blockquote",{parentName:"blockquote"},Object(i.b)("p",{parentName:"blockquote"},"Script that processes file paths and names into an attribute table, together with a column that contains base64 encoded images.."))),Object(i.b)("p",null,Object(i.b)("img",{src:a(164).default})),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"After processing:")),Object(i.b)("p",null,Object(i.b)("img",{src:a(165).default})),Object(i.b)("h3",{id:"merge_tweets_imagespy"},Object(i.b)("inlineCode",{parentName:"h3"},"merge_tweets_images.py")),Object(i.b)("blockquote",null,Object(i.b)("blockquote",{parentName:"blockquote"},Object(i.b)("p",{parentName:"blockquote"},"Script that merges processed tweet json and images into a single json file where images are base 64 encoded."))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"After merging processed tweets and images:")),Object(i.b)("p",null,Object(i.b)("img",{src:a(166).default})),Object(i.b)("h3",{id:"push_tweetspy"},Object(i.b)("inlineCode",{parentName:"h3"},"push_tweets.py")),Object(i.b)("blockquote",null,Object(i.b)("blockquote",{parentName:"blockquote"},Object(i.b)("p",{parentName:"blockquote"},"Script converted to Python CLI via ",Object(i.b)("a",{parentName:"p",href:"https://google.github.io/python-fire/"},"Python Fire"),". Script sends tweet records from json file in the form of requets with a predefined header and schema. "))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"When in the CLI, type (number 5 is an argumend for number of tweets you would like to send towards REST API endpoint):")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"python3 src/push_tweets.py send_tweets_to_rest_api 5\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"To send 5 tweet messages, one by one to defined REST API endpoint in Azure.")),Object(i.b)("p",null,Object(i.b)("img",{src:a(167).default})),Object(i.b)("h2",{id:"in-the-next-post"},"In the Next Post..."),Object(i.b)("p",null,"Now that we have the required data in the desired shape, format and content, we can proceed to designing a data streamling pipeline in Azure."),Object(i.b)("p",null,"Goal will be to create the first part of the data streaming pipeline which consists of API gateway accepting API calls and routing them to the Azure function that process the data and (initially) store them to Azure Blob Storage."),Object(i.b)("p",null,"In the next post, I will introduce and create following Azure Services:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/api-management/api-management-key-concepts"},"Azure API Management"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-functions/functions-overview"},"Azure Functions"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction"},"Azure Blob Storage")," "))))}l.isMDXComponent=!0}}]);