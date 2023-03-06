import{__spreadArray}from"tslib";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */var transitionEndAsync=function(e,r){if(r===void 0){r=0}return new Promise((function(a){transitionEnd(e,r,a)}))};var transitionEnd=function(e,r,a){if(r===void 0){r=0}var i;var t;var n={passive:true};var o=500;var u=function(){if(i){i()}};var l=function(r){if(r===undefined||e===r.target){u();a(r)}};if(e){e.addEventListener("webkitTransitionEnd",l,n);e.addEventListener("transitionend",l,n);t=setTimeout(l,r+o);i=function(){if(t){clearTimeout(t);t=undefined}e.removeEventListener("webkitTransitionEnd",l,n);e.removeEventListener("transitionend",l,n)}}return u};var componentOnReady=function(e,r){if(e.componentOnReady){e.componentOnReady().then((function(e){return r(e)}))}else{raf((function(){return r(e)}))}};var inheritAttributes=function(e,r){if(r===void 0){r=[]}var a={};r.forEach((function(r){if(e.hasAttribute(r)){var i=e.getAttribute(r);if(i!==null){a[r]=e.getAttribute(r)}e.removeAttribute(r)}}));return a};var ariaAttributes=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"];var inheritAriaAttributes=function(e,r){var a=ariaAttributes;if(r&&r.length>0){a=a.filter((function(e){return!r.includes(e)}))}return inheritAttributes(e,a)};var addEventListener=function(e,r,a,i){var t;if(typeof window!=="undefined"){var n=window;var o=(t=n===null||n===void 0?void 0:n.Ionic)===null||t===void 0?void 0:t.config;if(o){var u=o.get("_ael");if(u){return u(e,r,a,i)}else if(o._ael){return o._ael(e,r,a,i)}}}return e.addEventListener(r,a,i)};var removeEventListener=function(e,r,a,i){var t;if(typeof window!=="undefined"){var n=window;var o=(t=n===null||n===void 0?void 0:n.Ionic)===null||t===void 0?void 0:t.config;if(o){var u=o.get("_rel");if(u){return u(e,r,a,i)}else if(o._rel){return o._rel(e,r,a,i)}}}return e.removeEventListener(r,a,i)};var getElementRoot=function(e,r){if(r===void 0){r=e}return e.shadowRoot||r};var raf=function(e){if(typeof __zone_symbol__requestAnimationFrame==="function"){return __zone_symbol__requestAnimationFrame(e)}if(typeof requestAnimationFrame==="function"){return requestAnimationFrame(e)}return setTimeout(e)};var hasShadowDom=function(e){return!!e.shadowRoot&&!!e.attachShadow};var findItemLabel=function(e){var r=e.closest("ion-item");if(r){return r.querySelector("ion-label")}return null};var focusElement=function(e){e.focus();if(e.classList.contains("ion-focusable")){var r=e.closest("ion-app");if(r){r.setFocus([e])}}};var getAriaLabel=function(e,r){var a;var i=e.getAttribute("aria-labelledby");var t=e.id;var n=i!==null&&i.trim()!==""?i:r+"-lbl";var o=i!==null&&i.trim()!==""?document.getElementById(i):findItemLabel(e);if(o){if(i===null){o.id=n}a=o.textContent;o.setAttribute("aria-hidden","true")}else if(t.trim()!==""){o=document.querySelector('label[for="'.concat(t,'"]'));if(o){if(o.id!==""){n=o.id}else{o.id=n="".concat(t,"-lbl")}a=o.textContent}}return{label:o,labelId:n,labelText:a}};var renderHiddenInput=function(e,r,a,i,t){if(e||hasShadowDom(r)){var n=r.querySelector("input.aux-input");if(!n){n=r.ownerDocument.createElement("input");n.type="hidden";n.classList.add("aux-input");r.appendChild(n)}n.disabled=t;n.name=a;n.value=i||""}};var clamp=function(e,r,a){return Math.max(e,Math.min(r,a))};var assert=function(e,r){if(!e){var a="ASSERT: "+r;console.error(a);debugger;throw new Error(a)}};var now=function(e){return e.timeStamp||Date.now()};var pointerCoord=function(e){if(e){var r=e.changedTouches;if(r&&r.length>0){var a=r[0];return{x:a.clientX,y:a.clientY}}if(e.pageX!==undefined){return{x:e.pageX,y:e.pageY}}}return{x:0,y:0}};var isEndSide=function(e){var r=document.dir==="rtl";switch(e){case"start":return r;case"end":return!r;default:throw new Error('"'.concat(e,'" is not a valid value for [side]. Use "start" or "end" instead.'))}};var debounceEvent=function(e,r){var a=e._original||e;return{_original:e,emit:debounce(a.emit.bind(a),r)}};var debounce=function(e,r){if(r===void 0){r=0}var a;return function(){var i=[];for(var t=0;t<arguments.length;t++){i[t]=arguments[t]}clearTimeout(a);a=setTimeout.apply(void 0,__spreadArray([e,r],i,false))}};var shallowEqualStringMap=function(e,r){e!==null&&e!==void 0?e:e={};r!==null&&r!==void 0?r:r={};if(e===r){return true}var a=Object.keys(e);if(a.length!==Object.keys(r).length){return false}for(var i=0,t=a;i<t.length;i++){var n=t[i];if(!(n in r)){return false}if(e[n]!==r[n]){return false}}return true};export{addEventListener as a,removeEventListener as b,componentOnReady as c,getAriaLabel as d,renderHiddenInput as e,focusElement as f,getElementRoot as g,debounceEvent as h,inheritAriaAttributes as i,inheritAttributes as j,findItemLabel as k,clamp as l,hasShadowDom as m,assert as n,isEndSide as o,pointerCoord as p,debounce as q,raf as r,shallowEqualStringMap as s,transitionEndAsync as t,now as u};