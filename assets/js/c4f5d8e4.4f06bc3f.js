(window.webpackJsonp=window.webpackJsonp||[]).push([[26,8],{113:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(108),l=t.n(c),s=t(107),i=t(16);a.a=function(e){var a=Object(n.useRef)(!1),c=Object(n.useRef)(null),o=Object(s.useHistory)(),u=Object(i.default)().siteConfig,m=(void 0===u?{}:u).baseUrl,h=function(){a.current||(Promise.all([fetch(m+"search-doc.json").then((function(e){return e.json()})),fetch(m+"lunr-index.json").then((function(e){return e.json()})),Promise.all([t.e(35),t.e(38)]).then(t.bind(null,116)),t.e(24).then(t.t.bind(null,115,7))]).then((function(e){!function(e,a,t){new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var n=m+t.url;document.createElement("a").href=n,o.push(n)}})}(e[0],e[1],e[2].default)})),a.current=!0)},d=Object(n.useCallback)((function(a){c.current.contains(a.target)||c.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:d,onKeyDown:d,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:l()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:h,onMouseOver:h,onFocus:d,onBlur:d,ref:c}))}},92:function(e,a,t){"use strict";t.r(a);var n=t(3),r=t(0),c=t.n(r),l=t(108),s=t.n(l),i=t(112),o=(t(106),t(16)),u=t(111),m=t(93),h=t.n(m),d=[{title:c.a.createElement("a",{href:"docs/about/about-me"},"About Me"),imageUrl:"svg/about.svg",description:""},{title:c.a.createElement("a",{href:"blog"},"Blog"),imageUrl:"svg/blog.svg",description:""},{title:c.a.createElement("a",{href:"./"},"Personal Projects"),imageUrl:"svg/portfolio.svg",description:""}];function p(e){var a=e.imageUrl,t=e.title,n=e.description;Object(u.a)(a);return c.a.createElement("div",{className:s()("col col--4",h.a.feature)},c.a.createElement("div",{className:"text--center"}),c.a.createElement("h3",null,t),c.a.createElement("p",null,n))}a.default=function(){var e=Object(o.default)().siteConfig,a=void 0===e?{}:e;return c.a.createElement(i.a,{title:"Hello from "+a.title,description:""},c.a.createElement("header",{className:s()("hero hero--primary",h.a.heroBanner)},c.a.createElement("div",{className:"container"},c.a.createElement("img",{className:h.a.mainImage,width:"500px",height:"500px",src:"img/profile-photos/KB.png"}),c.a.createElement("h1",{className:"hero__title"},a.title),c.a.createElement("p",{className:"hero__subtitle"},a.tagline),c.a.createElement("div",{className:h.a.buttons}))),c.a.createElement("main",{className:h.a.content},c.a.createElement("section",{className:h.a.features},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},d.map((function(e,a){return c.a.createElement(p,Object(n.a)({key:a},e))})))))))}}}]);