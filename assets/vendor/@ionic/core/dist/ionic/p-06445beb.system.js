var __awaiter=this&&this.__awaiter||function(e,n,t,r){function i(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,o){function a(e){try{s(r.next(e))}catch(e){o(e)}}function u(e){try{s(r["throw"](e))}catch(e){o(e)}}function s(e){e.done?t(e.value):i(e.value).then(a,u)}s((r=r.apply(e,n||[])).next())}))};var __generator=this&&this.__generator||function(e,n){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(e){return function(n){return s([e,n])}}function s(a){if(r)throw new TypeError("Generator is already executing.");while(t)try{if(r=1,i&&(o=a[0]&2?i["return"]:a[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;if(i=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:t.label++;return{value:a[1],done:false};case 5:t.label++;i=a[1];a=[0];continue;case 7:a=t.ops.pop();t.trys.pop();continue;default:if(!(o=t.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){t=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){t.label=a[1];break}if(a[0]===6&&t.label<o[1]){t.label=o[1];o=a;break}if(o&&t.label<o[2]){t.label=o[2];t.ops.push(a);break}if(o[2])t.ops.pop();t.trys.pop();continue}a=n.call(e,t)}catch(e){a=[6,e];i=0}finally{r=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(e,n,t){if(t||arguments.length===2)for(var r=0,i=n.length,o;r<i;r++){if(o||!(r in n)){if(!o)o=Array.prototype.slice.call(n,0,r);o[r]=n[r]}}return e.concat(o||Array.prototype.slice.call(n))};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */System.register(["./p-8828dd78.system.js","./p-04f1268e.system.js","./p-d020342e.system.js"],(function(e){"use strict";var n,t,r,i,o,a,u,s;return{setters:[function(e){n=e.b;t=e.c},function(e){r=e.OVERLAY_BACK_BUTTON_PRIORITY},function(e){i=e.c;o=e.f;a=e.a;u=e.b;s=e.g}],execute:function(){var l=this;var c=0;var d=e("h",new WeakMap);var f=function(e){return{create:function(n){return g(e,n)},dismiss:function(n,t,r){return D(document,n,t,e,r)},getTop:function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(n){return[2,L(document,e)]}))}))}}};var v=e("a",f("ion-alert"));var h=e("b",f("ion-action-sheet"));var m=e("l",f("ion-loading"));var p=e("m",f("ion-modal"));var y=e("p",f("ion-picker"));var b=e("c",f("ion-popover"));var w=e("t",f("ion-toast"));var _=e("e",(function(e){if(typeof document!=="undefined"){P(document)}var n=c++;e.overlayIndex=n;if(!e.hasAttribute("id")){e.id="ion-overlay-".concat(n)}}));var g=function(e,n){if(typeof window!=="undefined"&&typeof window.customElements!=="undefined"){return window.customElements.whenDefined(e).then((function(){var t=document.createElement(e);t.classList.add("overlay-hidden");Object.assign(t,Object.assign(Object.assign({},n),{hasController:true}));T(document).appendChild(t);return new Promise((function(e){return i(t,e)}))}))}return Promise.resolve()};var A='[tabindex]:not([tabindex^="-"]):not([hidden]):not([disabled]), input:not([type=hidden]):not([tabindex^="-"]):not([hidden]):not([disabled]), textarea:not([tabindex^="-"]):not([hidden]):not([disabled]), button:not([tabindex^="-"]):not([hidden]):not([disabled]), select:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable[disabled="false"]:not([tabindex^="-"]):not([hidden])';var x=e("j",(function(e,n){var t=e.querySelector(A);var r=t===null||t===void 0?void 0:t.shadowRoot;if(r){t=r.querySelector(A)||t}if(t){o(t)}else{n.focus()}}));var k=function(e){return e.classList.contains("overlay-hidden")};var E=function(e,n){var t=Array.from(e.querySelectorAll(A));var r=t.length>0?t[t.length-1]:null;var i=r===null||r===void 0?void 0:r.shadowRoot;if(i){r=i.querySelector(A)||r}if(r){r.focus()}else{n.focus()}};var S=function(e,n){var t=L(n,"ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover");var r=e.target;if(!t||!r){return}if(t.classList.contains("ion-disable-focus-trap")){return}var i=function(){if(t===r){t.lastFocus=undefined}else{var e=s(t);if(!e.contains(r)){return}var i=e.querySelector(".ion-overlay-wrapper");if(!i){return}if(i.contains(r)){t.lastFocus=r}else{var o=t.lastFocus;x(i,t);if(o===n.activeElement){E(i,t)}t.lastFocus=n.activeElement}}};var o=function(){if(t.contains(r)){t.lastFocus=r}else{var e=t.lastFocus;x(t,t);if(e===n.activeElement){E(t,t)}t.lastFocus=n.activeElement}};if(t.shadowRoot){o()}else{i()}};var P=function(e){if(c===0){c=1;e.addEventListener("focus",(function(n){S(n,e)}),true);e.addEventListener("ionBackButton",(function(n){var t=L(e);if(t===null||t===void 0?void 0:t.backdropDismiss){n.detail.register(r,(function(){return t.dismiss(undefined,Y)}))}}));e.addEventListener("keyup",(function(n){if(n.key==="Escape"){var t=L(e);if(t===null||t===void 0?void 0:t.backdropDismiss){t.dismiss(undefined,Y)}}}))}};var D=function(e,n,t,r,i){var o=L(e,r,i);if(!o){return Promise.reject("overlay does not exist")}return o.dismiss(n,t)};var q=function(e,n){if(n===undefined){n="ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast"}return Array.from(e.querySelectorAll(n)).filter((function(e){return e.overlayIndex>0}))};var L=e("k",(function(e,n,t){var r=q(e,n).filter((function(e){return!k(e)}));return t===undefined?r[r.length-1]:r.find((function(e){return e.id===t}))}));var j=function(e){if(e===void 0){e=false}var n=T(document);var t=n.querySelector("ion-router-outlet, ion-nav, #ion-view-container-root");if(!t){return}if(e){t.setAttribute("aria-hidden","true")}else{t.removeAttribute("aria-hidden")}};var O=e("d",(function(e,r,i,o,a){return __awaiter(l,void 0,void 0,(function(){var u,s,l,c,d;return __generator(this,(function(f){switch(f.label){case 0:if(e.presented){return[2]}j(true);e.presented=true;e.willPresent.emit();(u=e.willPresentShorthand)===null||u===void 0?void 0:u.emit();l=n(e);c=e.enterAnimation?e.enterAnimation:t.get(r,l==="ios"?i:o);return[4,B(e,c,e.el,a)];case 1:d=f.sent();if(d){e.didPresent.emit();(s=e.didPresentShorthand)===null||s===void 0?void 0:s.emit()}if(e.el.tagName!=="ION-TOAST"){F(e.el)}if(e.keyboardClose&&(document.activeElement===null||!e.el.contains(document.activeElement))){e.el.focus()}return[2]}}))}))}));var F=function(e){return __awaiter(l,void 0,void 0,(function(){var n,t;return __generator(this,(function(r){switch(r.label){case 0:n=document.activeElement;if(!n){return[2]}t=n===null||n===void 0?void 0:n.shadowRoot;if(t){n=t.querySelector(A)||n}return[4,e.onDidDismiss()];case 1:r.sent();n.focus();return[2]}}))}))};var R=e("f",(function(e,r,i,o,a,u,s){return __awaiter(l,void 0,void 0,(function(){var l,c,f,v,h;return __generator(this,(function(m){switch(m.label){case 0:if(!e.presented){return[2,false]}j(false);e.presented=false;m.label=1;case 1:m.trys.push([1,4,,5]);e.el.style.setProperty("pointer-events","none");e.willDismiss.emit({data:r,role:i});(l=e.willDismissShorthand)===null||l===void 0?void 0:l.emit({data:r,role:i});f=n(e);v=e.leaveAnimation?e.leaveAnimation:t.get(o,f==="ios"?a:u);if(!(i!==z))return[3,3];return[4,B(e,v,e.el,s)];case 2:m.sent();m.label=3;case 3:e.didDismiss.emit({data:r,role:i});(c=e.didDismissShorthand)===null||c===void 0?void 0:c.emit({data:r,role:i});d.delete(e);e.el.classList.add("overlay-hidden");e.el.style.removeProperty("pointer-events");return[3,5];case 4:h=m.sent();console.error(h);return[3,5];case 5:e.el.remove();return[2,true]}}))}))}));var T=function(e){return e.querySelector("ion-app")||e.body};var B=function(e,n,r,i){return __awaiter(l,void 0,void 0,(function(){var o,a,u;return __generator(this,(function(s){switch(s.label){case 0:r.classList.remove("overlay-hidden");o=e.el;a=n(o,i);if(!e.animated||!t.getBoolean("animated",true)){a.duration(0)}if(e.keyboardClose){a.beforeAddWrite((function(){var e=r.ownerDocument.activeElement;if(e===null||e===void 0?void 0:e.matches("input,ion-input, ion-textarea")){e.blur()}}))}u=d.get(e)||[];d.set(e,__spreadArray(__spreadArray([],u,true),[a],false));return[4,a.play()];case 1:s.sent();return[2,true]}}))}))};var C=e("g",(function(e,n){var t;var r=new Promise((function(e){return t=e}));I(e,n,(function(e){t(e.detail)}));return r}));var I=function(e,n,t){var r=function(i){u(e,n,r);t(i)};a(e,n,r)};var G=e("i",(function(e){return e==="cancel"||e===Y}));var N=function(e){return e()};var W=e("s",(function(e,n){if(typeof e==="function"){var r=t.get("_zoneGate",N);return r((function(){try{return e(n)}catch(e){throw e}}))}return undefined}));var Y=e("B","backdrop");var z=e("G","gesture")}}}));