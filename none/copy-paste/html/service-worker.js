if(!self.define){let e,l={};const s=(s,r)=>(s=new URL(s+".js",r).href,l[s]||new Promise((l=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=l,document.head.appendChild(e)}else e=s,importScripts(s),l()})).then((()=>{let e=l[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(l[o])return;let i={};const f=e=>s(e,o),u={module:{uri:o},exports:i,require:f};l[o]=Promise.all(r.map((e=>u[e]||f(e)))).then((e=>(n(...e),i)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mockups"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/app.a7a0c48a.css",revision:null},{url:"fonts/fa-brands-400.497d2362.woff",revision:null},{url:"fonts/fa-brands-400.c233d321.eot",revision:null},{url:"fonts/fa-brands-400.f33215b6.woff2",revision:null},{url:"fonts/fa-brands-400.f73a0a26.ttf",revision:null},{url:"fonts/fa-regular-400.2760851e.woff",revision:null},{url:"fonts/fa-regular-400.4e13c46f.woff2",revision:null},{url:"fonts/fa-regular-400.b2222176.ttf",revision:null},{url:"fonts/fa-regular-400.b6819d19.eot",revision:null},{url:"fonts/fa-solid-900.32b6da04.woff",revision:null},{url:"fonts/fa-solid-900.624b26e6.woff2",revision:null},{url:"fonts/fa-solid-900.b92fed3a.ttf",revision:null},{url:"fonts/fa-solid-900.ebf38ade.eot",revision:null},{url:"img/fa-brands-400.7dbae49a.svg",revision:null},{url:"img/fa-regular-400.d909ea80.svg",revision:null},{url:"img/fa-solid-900.1db87db9.svg",revision:null},{url:"img/logo-small-box.5ddb19ec.svg",revision:null},{url:"index.html",revision:"a4e6165a5a44ff839ebc6de86446a8e1"},{url:"js/app.4db1da75.js",revision:null},{url:"js/chunk-vendors.d0397a37.js",revision:null},{url:"jscpd-report.json",revision:"19825ed86d4baeb6845977ca400d1e44"},{url:"manifest.json",revision:"55463fa8e97ba629629698dcdb501419"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
