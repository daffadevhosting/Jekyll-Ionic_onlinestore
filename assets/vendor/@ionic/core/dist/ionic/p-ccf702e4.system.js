var __awaiter=this&&this.__awaiter||function(e,t,n,r){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function o(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r["throw"](e))}catch(e){i(e)}}function s(e){e.done?n(e.value):a(e.value).then(o,u)}s((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,a,i,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(e){return function(t){return s([e,t])}}function s(o){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,a&&(i=o[0]&2?a["return"]:o[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;if(a=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;a=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){n.label=o[1];break}if(o[0]===6&&n.label<i[1]){n.label=i[1];i=o;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(o);break}if(i[2])n.ops.pop();n.trys.pop();continue}o=t.call(e,n)}catch(e){o=[6,e];a=0}finally{r=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */System.register(["./p-63b93eb8.system.js","./p-d020342e.system.js","./p-5c49b484.system.js"],(function(e){"use strict";var t,n,r,a,i,o,u,s;return{setters:[function(e){t=e.g;n=e.c;r=e.f},function(e){a=e.a;i=e.b;o=e.r;u=e.p;s=e.c},function(){}],execute:function(){var c=this;var l=new WeakMap;var f=function(e,t,n,r,a){if(r===void 0){r=0}if(a===void 0){a=false}if(l.has(e)===n){return}if(n){d(e,t,r,a)}else{h(e,t)}};var v=function(e){return e===e.getRootNode().activeElement};var d=function(e,t,n,r){if(r===void 0){r=false}var a=t.parentNode;var i=t.cloneNode(false);i.classList.add("cloned-input");i.tabIndex=-1;if(r){i.disabled=true}a.appendChild(i);l.set(e,i);var o=e.ownerDocument;var u=o.dir==="rtl"?9999:-9999;e.style.pointerEvents="none";t.style.transform="translate3d(".concat(u,"px,").concat(n,"px,0) scale(0)")};var h=function(e,t){var n=l.get(e);if(n){l.delete(e);n.remove()}e.style.pointerEvents="";t.style.transform=""};var m=function(e,t,n){if(!n||!t){return function(){return}}var r=function(n){if(v(t)){f(e,t,n)}};var o=function(){return f(e,t,false)};var u=function(){return r(true)};var s=function(){return r(false)};a(n,"ionScrollStart",u);a(n,"ionScrollEnd",s);t.addEventListener("blur",o);return function(){i(n,"ionScrollStart",u);i(n,"ionScrollEnd",s);t.removeEventListener("blur",o)}};var p="input, textarea, [no-blur], [contenteditable]";var w=function(){var e=true;var t=false;var n=document;var r=function(){t=true};var o=function(){e=true};var u=function(r){if(t){t=false;return}var a=n.activeElement;if(!a){return}if(a.matches(p)){return}var i=r.target;if(i===a){return}if(i.matches(p)||i.closest(p)){return}e=false;setTimeout((function(){if(!e){a.blur()}}),50)};a(n,"ionScrollStart",r);n.addEventListener("focusin",o,true);n.addEventListener("touchend",u,false);return function(){i(n,"ionScrollStart",r,true);n.removeEventListener("focusin",o,true);n.removeEventListener("touchend",u,false)}};var b=.3;var y=function(e,t,n){var r;var a=(r=e.closest("ion-item,[ion-item]"))!==null&&r!==void 0?r:e;return g(a.getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight)};var g=function(e,t,n,r){var a=e.top;var i=e.bottom;var o=t.top;var u=Math.min(t.bottom,r-n);var s=o+15;var c=u*.75;var l=c-i;var f=s-a;var v=Math.round(l<0?-l:f>0?-f:0);var d=Math.min(v,a-o);var h=Math.abs(d);var m=h/b;var p=Math.min(400,Math.max(150,m));return{scrollAmount:d,scrollDuration:p,scrollPadding:n,inputSafeY:-(a-s)+4}};var E=function(e,t,n,r,a,i){if(i===void 0){i=false}var o;var s=function(e){o=u(e)};var c=function(s){if(!o){return}var c=u(s);if(!L(6,o,c)&&!v(t)){S(e,t,n,r,a,i)}};e.addEventListener("touchstart",s,{capture:true,passive:true});e.addEventListener("touchend",c,true);return function(){e.removeEventListener("touchstart",s,true);e.removeEventListener("touchend",c,true)}};var S=function(e,r,a,i,u,s){if(s===void 0){s=false}return __awaiter(c,void 0,void 0,(function(){var c,l,v,d,h,m;var p=this;return __generator(this,(function(w){switch(w.label){case 0:if(!a&&!i){return[2]}c=y(e,a||i,u);if(a&&Math.abs(c.scrollAmount)<4){r.focus();return[2]}f(e,r,true,c.inputSafeY,s);r.focus();o((function(){return e.click()}));if(!(typeof window!=="undefined"))return[3,3];v=function(){return __awaiter(p,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:if(l!==undefined){clearTimeout(l)}window.removeEventListener("ionKeyboardDidShow",d);window.removeEventListener("ionKeyboardDidShow",v);if(!a)return[3,2];return[4,n(a,0,c.scrollAmount,c.scrollDuration)];case 1:t.sent();t.label=2;case 2:f(e,r,false,c.inputSafeY);r.focus();return[2]}}))}))};d=function(){window.removeEventListener("ionKeyboardDidShow",d);window.addEventListener("ionKeyboardDidShow",v)};if(!a)return[3,2];return[4,t(a)];case 1:h=w.sent();m=h.scrollHeight-h.clientHeight;if(c.scrollAmount>m-h.scrollTop){if(r.type==="password"){c.scrollAmount+=50;window.addEventListener("ionKeyboardDidShow",d)}else{window.addEventListener("ionKeyboardDidShow",v)}l=setTimeout(v,1e3);return[2]}w.label=2;case 2:v();w.label=3;case 3:return[2]}}))}))};var L=function(e,t,n){if(t&&n){var r=t.x-n.x;var a=t.y-n.y;var i=r*r+a*a;return i>e*e}return false};var _="$ionPaddingTimer";var x=function(e){var t=document;var n=function(t){D(t.target,e)};var r=function(e){D(e.target,0)};t.addEventListener("focusin",n);t.addEventListener("focusout",r);return function(){t.removeEventListener("focusin",n);t.removeEventListener("focusout",r)}};var D=function(e,t){var n,a;if(e.tagName!=="INPUT"){return}if(e.parentElement&&e.parentElement.tagName==="ION-INPUT"){return}if(((a=(n=e.parentElement)===null||n===void 0?void 0:n.parentElement)===null||a===void 0?void 0:a.tagName)==="ION-SEARCHBAR"){return}var i=r(e);if(i===null){return}var o=i[_];if(o){clearTimeout(o)}if(t>0){i.style.setProperty("--keyboard-offset","".concat(t,"px"))}else{i[_]=setTimeout((function(){i.style.setProperty("--keyboard-offset","0px")}),120)}};var k=true;var N=true;var A=e("startInputShims",(function(e,t){var n=document;var a=t==="ios";var i=t==="android";var o=e.getNumber("keyboardHeight",290);var u=e.getBoolean("scrollAssist",true);var l=e.getBoolean("hideCaretOnScroll",a);var f=e.getBoolean("inputBlurring",a);var v=e.getBoolean("scrollPadding",true);var d=Array.from(n.querySelectorAll("ion-input, ion-textarea"));var h=new WeakMap;var p=new WeakMap;var b=function(e){return __awaiter(c,void 0,void 0,(function(){var t,n,a,c,f,v,f;return __generator(this,(function(d){switch(d.label){case 0:return[4,new Promise((function(t){return s(e,t)}))];case 1:d.sent();t=e.shadowRoot||e;n=t.querySelector("input")||t.querySelector("textarea");a=r(e);c=!a?e.closest("ion-footer"):null;if(!n){return[2]}if(!!a&&l&&!h.has(e)){f=m(e,n,a);h.set(e,f)}v=n.type==="date"||n.type==="datetime-local";if(!v&&(!!a||!!c)&&u&&!p.has(e)){f=E(e,n,a,c,o,i);p.set(e,f)}return[2]}}))}))};var y=function(e){if(l){var t=h.get(e);if(t){t()}h.delete(e)}if(u){var t=p.get(e);if(t){t()}p.delete(e)}};if(f&&k){w()}if(v&&N){x(o)}for(var g=0,S=d;g<S.length;g++){var L=S[g];b(L)}n.addEventListener("ionInputDidLoad",(function(e){b(e.detail)}));n.addEventListener("ionInputDidUnload",(function(e){y(e.detail)}))}))}}}));