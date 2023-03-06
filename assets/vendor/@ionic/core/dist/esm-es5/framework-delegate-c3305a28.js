import{__awaiter,__generator}from"tslib";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */import{c as componentOnReady}from"./helpers-3b390e48.js";var attachComponent=function(e,n,t,r,o,i){return __awaiter(void 0,void 0,void 0,(function(){var a,c;return __generator(this,(function(s){switch(s.label){case 0:if(e){return[2,e.attachViewToDom(n,t,o,r)]}if(!i&&typeof t!=="string"&&!(t instanceof HTMLElement)){throw new Error("framework delegate is missing")}c=typeof t==="string"?(a=n.ownerDocument)===null||a===void 0?void 0:a.createElement(t):t;if(r){r.forEach((function(e){return c.classList.add(e)}))}if(o){Object.assign(c,o)}n.appendChild(c);return[4,new Promise((function(e){return componentOnReady(c,e)}))];case 1:s.sent();return[2,c]}}))}))};var detachComponent=function(e,n){if(n){if(e){var t=n.parentElement;return e.removeViewFromDom(t,n)}n.remove()}return Promise.resolve()};var CoreDelegate=function(){var e;var n;var t=function(t,r,o,i){if(o===void 0){o={}}if(i===void 0){i=[]}return __awaiter(void 0,void 0,void 0,(function(){var a,c,s,d,u,l;return __generator(this,(function(m){switch(m.label){case 0:e=t;if(!r)return[3,2];s=typeof r==="string"?(a=e.ownerDocument)===null||a===void 0?void 0:a.createElement(r):r;i.forEach((function(e){return s.classList.add(e)}));Object.assign(s,o);e.appendChild(s);return[4,new Promise((function(e){return componentOnReady(s,e)}))];case 1:m.sent();return[3,3];case 2:if(e.children.length>0){d=e.children[0];if(!d.classList.contains("ion-delegate-host")){u=(c=e.ownerDocument)===null||c===void 0?void 0:c.createElement("div");u.classList.add("ion-delegate-host");i.forEach((function(e){return u.classList.add(e)}));u.append.apply(u,e.children);e.appendChild(u)}}m.label=3;case 3:l=document.querySelector("ion-app")||document.body;n=document.createComment("ionic teleport");e.parentNode.insertBefore(n,e);l.appendChild(e);return[2,e]}}))}))};var r=function(){if(e&&n){n.parentNode.insertBefore(e,n);n.remove()}return Promise.resolve()};return{attachViewToDom:t,removeViewFromDom:r}};export{CoreDelegate as C,attachComponent as a,detachComponent as d};