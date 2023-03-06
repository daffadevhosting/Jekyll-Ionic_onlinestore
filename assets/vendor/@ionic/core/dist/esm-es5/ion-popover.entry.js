import{__awaiter,__generator}from"tslib";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */import{r as registerInstance,e as createEvent,h,H as Host,i as getElement}from"./index-8e692445.js";import{b as getIonMode,a as isPlatform}from"./ionic-global-c74e4951.js";import{C as CoreDelegate,a as attachComponent,d as detachComponent}from"./framework-delegate-c3305a28.js";import{r as raf,g as getElementRoot,a as addEventListener}from"./helpers-3b390e48.js";import{p as printIonWarning}from"./index-c4b11676.js";import{B as BACKDROP,e as prepareOverlay,d as present,j as focusFirstDescendant,f as dismiss,g as eventMethod}from"./overlays-5fc09c9a.js";import{g as getClassMap}from"./theme-7670341c.js";import{e as deepReady}from"./index-27c7e5c4.js";import{c as createAnimation}from"./animation-4ff3f603.js";import"./hardware-back-button-490df115.js";import"./index-33ffec25.js";var getArrowDimensions=function(e){if(!e){return{arrowWidth:0,arrowHeight:0}}var t=e.getBoundingClientRect(),r=t.width,o=t.height;return{arrowWidth:r,arrowHeight:o}};var getPopoverDimensions=function(e,t,r){var o=t.getBoundingClientRect();var n=o.height;var i=o.width;if(e==="cover"&&r){var a=r.getBoundingClientRect();i=a.width}return{contentWidth:i,contentHeight:n}};var configureDismissInteraction=function(e,t,r,o){var n=[];var i=getElementRoot(o);var a=i.querySelector(".popover-content");switch(t){case"hover":n=[{eventName:"mouseenter",callback:function(t){var o=document.elementFromPoint(t.clientX,t.clientY);if(o===e){return}r.dismiss(undefined,undefined,false)}}];break;case"context-menu":case"click":default:n=[{eventName:"click",callback:function(t){var o=t.target;var n=o.closest("[data-ion-popover-trigger]");if(n===e){t.stopPropagation();return}r.dismiss(undefined,undefined,false)}}];break}n.forEach((function(e){var t=e.eventName,r=e.callback;return a.addEventListener(t,r)}));return function(){n.forEach((function(e){var t=e.eventName,r=e.callback;return a.removeEventListener(t,r)}))}};var configureTriggerInteraction=function(e,t,r){var o=[];switch(t){case"hover":var n;o=[{eventName:"mouseenter",callback:function(e){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(t){e.stopPropagation();if(n){clearTimeout(n)}n=setTimeout((function(){raf((function(){r.presentFromTrigger(e);n=undefined}))}),100);return[2]}))}))}},{eventName:"mouseleave",callback:function(e){if(n){clearTimeout(n)}var t=e.relatedTarget;if(!t){return}if(t.closest("ion-popover")!==r){r.dismiss(undefined,undefined,false)}}},{eventName:"click",callback:function(e){return e.stopPropagation()}},{eventName:"ionPopoverActivateTrigger",callback:function(e){return r.presentFromTrigger(e,true)}}];break;case"context-menu":o=[{eventName:"contextmenu",callback:function(e){e.preventDefault();r.presentFromTrigger(e)}},{eventName:"click",callback:function(e){return e.stopPropagation()}},{eventName:"ionPopoverActivateTrigger",callback:function(e){return r.presentFromTrigger(e,true)}}];break;case"click":default:o=[{eventName:"click",callback:function(e){return r.presentFromTrigger(e)}},{eventName:"ionPopoverActivateTrigger",callback:function(e){return r.presentFromTrigger(e,true)}}];break}o.forEach((function(t){var r=t.eventName,o=t.callback;return e.addEventListener(r,o)}));e.setAttribute("data-ion-popover-trigger","true");return function(){o.forEach((function(t){var r=t.eventName,o=t.callback;return e.removeEventListener(r,o)}));e.removeAttribute("data-ion-popover-trigger")}};var getIndexOfItem=function(e,t){if(!t||t.tagName!=="ION-ITEM"){return-1}return e.findIndex((function(e){return e===t}))};var getNextItem=function(e,t){var r=getIndexOfItem(e,t);return e[r+1]};var getPrevItem=function(e,t){var r=getIndexOfItem(e,t);return e[r-1]};var focusItem=function(e){var t=getElementRoot(e);var r=t.querySelector("button");if(r){raf((function(){return r.focus()}))}};var isTriggerElement=function(e){return e.hasAttribute("data-ion-popover-trigger")};var configureKeyboardInteraction=function(e){var t=function(t){return __awaiter(void 0,void 0,void 0,(function(){var r,o,n,i,a,s,p,c,d,l,v;return __generator(this,(function(f){switch(f.label){case 0:o=document.activeElement;n=[];i=(r=t.target)===null||r===void 0?void 0:r.tagName;if(i!=="ION-POPOVER"&&i!=="ION-ITEM"){return[2]}try{n=Array.from(e.querySelectorAll("ion-item:not(ion-popover ion-popover *):not([disabled])"))}catch(e){}a=t.key;switch(a){case"ArrowLeft":return[3,1];case"ArrowDown":return[3,3];case"ArrowUp":return[3,4];case"Home":return[3,5];case"End":return[3,6];case"ArrowRight":return[3,7];case" ":return[3,7];case"Enter":return[3,7]}return[3,8];case 1:return[4,e.getParentPopover()];case 2:s=f.sent();if(s){e.dismiss(undefined,undefined,false)}return[3,8];case 3:t.preventDefault();p=getNextItem(n,o);if(p!==undefined){focusItem(p)}return[3,8];case 4:t.preventDefault();c=getPrevItem(n,o);if(c!==undefined){focusItem(c)}return[3,8];case 5:t.preventDefault();d=n[0];if(d!==undefined){focusItem(d)}return[3,8];case 6:t.preventDefault();l=n[n.length-1];if(l!==undefined){focusItem(l)}return[3,8];case 7:if(o&&isTriggerElement(o)){v=new CustomEvent("ionPopoverActivateTrigger");o.dispatchEvent(v)}return[3,8];case 8:return[2]}}))}))};e.addEventListener("keydown",t);return function(){return e.removeEventListener("keydown",t)}};var getPopoverPosition=function(e,t,r,o,n,i,a,s,p,c,d){var l;var v={top:0,left:0,width:0,height:0};switch(i){case"event":if(!d){return p}var f=d;v={top:f.clientY,left:f.clientX,width:1,height:1};break;case"trigger":default:var u=d;var h=c||((l=u===null||u===void 0?void 0:u.detail)===null||l===void 0?void 0:l.ionShadowTarget)||(u===null||u===void 0?void 0:u.target);if(!h){return p}var g=h.getBoundingClientRect();v={top:g.top,left:g.left,width:g.width,height:g.height};break}var m=calculatePopoverSide(a,v,t,r,o,n,e);var w=calculatePopoverAlign(s,a,v,t,r);var b=m.top+w.top;var x=m.left+w.left;var y=calculateArrowPosition(a,o,n,b,x,t,r,e),P=y.arrowTop,k=y.arrowLeft;var A=calculatePopoverOrigin(a,s,e),D=A.originX,E=A.originY;return{top:b,left:x,referenceCoordinates:v,arrowTop:P,arrowLeft:k,originX:D,originY:E}};var calculatePopoverOrigin=function(e,t,r){switch(e){case"top":return{originX:getOriginXAlignment(t),originY:"bottom"};case"bottom":return{originX:getOriginXAlignment(t),originY:"top"};case"left":return{originX:"right",originY:getOriginYAlignment(t)};case"right":return{originX:"left",originY:getOriginYAlignment(t)};case"start":return{originX:r?"left":"right",originY:getOriginYAlignment(t)};case"end":return{originX:r?"right":"left",originY:getOriginYAlignment(t)}}};var getOriginXAlignment=function(e){switch(e){case"start":return"left";case"center":return"center";case"end":return"right"}};var getOriginYAlignment=function(e){switch(e){case"start":return"top";case"center":return"center";case"end":return"bottom"}};var calculateArrowPosition=function(e,t,r,o,n,i,a,s){var p={arrowTop:o+a/2-t/2,arrowLeft:n+i-t/2};var c={arrowTop:o+a/2-t/2,arrowLeft:n-t*1.5};switch(e){case"top":return{arrowTop:o+a,arrowLeft:n+i/2-t/2};case"bottom":return{arrowTop:o-r,arrowLeft:n+i/2-t/2};case"left":return p;case"right":return c;case"start":return s?c:p;case"end":return s?p:c;default:return{arrowTop:0,arrowLeft:0}}};var calculatePopoverSide=function(e,t,r,o,n,i,a){var s={top:t.top,left:t.left-r-n};var p={top:t.top,left:t.left+t.width+n};switch(e){case"top":return{top:t.top-o-i,left:t.left};case"right":return p;case"bottom":return{top:t.top+t.height+i,left:t.left};case"left":return s;case"start":return a?p:s;case"end":return a?s:p}};var calculatePopoverAlign=function(e,t,r,o,n){switch(e){case"center":return calculatePopoverCenterAlign(t,r,o,n);case"end":return calculatePopoverEndAlign(t,r,o,n);case"start":default:return{top:0,left:0}}};var calculatePopoverEndAlign=function(e,t,r,o){switch(e){case"start":case"end":case"left":case"right":return{top:-(o-t.height),left:0};case"top":case"bottom":default:return{top:0,left:-(r-t.width)}}};var calculatePopoverCenterAlign=function(e,t,r,o){switch(e){case"start":case"end":case"left":case"right":return{top:-(o/2-t.height/2),left:0};case"top":case"bottom":default:return{top:0,left:-(r/2-t.width/2)}}};var calculateWindowAdjustment=function(e,t,r,o,n,i,a,s,p,c,d,l,v,f,u){if(v===void 0){v=0}if(f===void 0){f=0}if(u===void 0){u=0}var h=v;var g=f;var m=r;var w=t;var b;var x=c;var y=d;var P=false;var k=false;var A=l?l.top+l.height:i/2-s/2;var D=l?l.height:0;var E=false;if(m<o+p){m=o;P=true;x="left"}else if(a+o+m+p>n){k=true;m=n-a-o;x="right"}if(A+D+s>i&&(e==="top"||e==="bottom")){if(A-s>0){w=Math.max(12,A-s-D-(u-1));h=w+s;y="bottom";E=true}else{b=o}}return{top:w,left:m,bottom:b,originX:x,originY:y,checkSafeAreaLeft:P,checkSafeAreaRight:k,arrowTop:h,arrowLeft:g,addPopoverBottomClass:E}};var shouldShowArrow=function(e,t,r,o){if(t===void 0){t=false}if(!r&&!o){return false}if(e!=="top"&&e!=="bottom"&&t){return false}return true};var POPOVER_IOS_BODY_PADDING=5;var iosEnterAnimation=function(e,t){var r;var o=t.event,n=t.size,i=t.trigger,a=t.reference,s=t.side,p=t.align;var c=e.ownerDocument;var d=c.dir==="rtl";var l=c.defaultView.innerWidth;var v=c.defaultView.innerHeight;var f=getElementRoot(e);var u=f.querySelector(".popover-content");var h=f.querySelector(".popover-arrow");var g=i||((r=o===null||o===void 0?void 0:o.detail)===null||r===void 0?void 0:r.ionShadowTarget)||(o===null||o===void 0?void 0:o.target);var m=getPopoverDimensions(n,u,g),w=m.contentWidth,b=m.contentHeight;var x=getArrowDimensions(h),y=x.arrowWidth,P=x.arrowHeight;var k={top:v/2-b/2,left:l/2-w/2,originX:d?"right":"left",originY:"top"};var A=getPopoverPosition(d,w,b,y,P,a,s,p,k,i,o);var D=n==="cover"?0:POPOVER_IOS_BODY_PADDING;var E=n==="cover"?0:25;var I=calculateWindowAdjustment(s,A.top,A.left,D,l,v,w,b,E,A.originX,A.originY,A.referenceCoordinates,A.arrowTop,A.arrowLeft,P),T=I.originX,O=I.originY,C=I.top,_=I.left,S=I.bottom,L=I.checkSafeAreaLeft,W=I.checkSafeAreaRight,Y=I.arrowTop,N=I.arrowLeft,M=I.addPopoverBottomClass;var R=createAnimation();var j=createAnimation();var X=createAnimation();j.addElement(f.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);X.addElement(f.querySelector(".popover-wrapper")).fromTo("opacity",.01,1);return R.easing("ease").duration(100).beforeAddWrite((function(){if(n==="cover"){e.style.setProperty("--width","".concat(w,"px"))}if(M){e.classList.add("popover-bottom")}if(S!==undefined){u.style.setProperty("bottom","".concat(S,"px"))}var t=" + var(--ion-safe-area-left, 0)";var r=" - var(--ion-safe-area-right, 0)";var a="".concat(_,"px");if(L){a="".concat(_,"px").concat(t)}if(W){a="".concat(_,"px").concat(r)}u.style.setProperty("top","calc(".concat(C,"px + var(--offset-y, 0))"));u.style.setProperty("left","calc(".concat(a," + var(--offset-x, 0))"));u.style.setProperty("transform-origin","".concat(O," ").concat(T));if(h!==null){var p=A.top!==C||A.left!==_;var c=shouldShowArrow(s,p,o,i);if(c){h.style.setProperty("top","calc(".concat(Y,"px + var(--offset-y, 0))"));h.style.setProperty("left","calc(".concat(N,"px + var(--offset-x, 0))"))}else{h.style.setProperty("display","none")}}})).addAnimation([j,X])};var iosLeaveAnimation=function(e){var t=getElementRoot(e);var r=t.querySelector(".popover-content");var o=t.querySelector(".popover-arrow");var n=createAnimation();var i=createAnimation();var a=createAnimation();i.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);a.addElement(t.querySelector(".popover-wrapper")).fromTo("opacity",.99,0);return n.easing("ease").afterAddWrite((function(){e.style.removeProperty("--width");e.classList.remove("popover-bottom");r.style.removeProperty("top");r.style.removeProperty("left");r.style.removeProperty("bottom");r.style.removeProperty("transform-origin");if(o){o.style.removeProperty("top");o.style.removeProperty("left");o.style.removeProperty("display")}})).duration(300).addAnimation([i,a])};var POPOVER_MD_BODY_PADDING=12;var mdEnterAnimation=function(e,t){var r;var o=t.event,n=t.size,i=t.trigger,a=t.reference,s=t.side,p=t.align;var c=e.ownerDocument;var d=c.dir==="rtl";var l=c.defaultView.innerWidth;var v=c.defaultView.innerHeight;var f=getElementRoot(e);var u=f.querySelector(".popover-content");var h=i||((r=o===null||o===void 0?void 0:o.detail)===null||r===void 0?void 0:r.ionShadowTarget)||(o===null||o===void 0?void 0:o.target);var g=getPopoverDimensions(n,u,h),m=g.contentWidth,w=g.contentHeight;var b={top:v/2-w/2,left:l/2-m/2,originX:d?"right":"left",originY:"top"};var x=getPopoverPosition(d,m,w,0,0,a,s,p,b,i,o);var y=n==="cover"?0:POPOVER_MD_BODY_PADDING;var P=calculateWindowAdjustment(s,x.top,x.left,y,l,v,m,w,0,x.originX,x.originY,x.referenceCoordinates),k=P.originX,A=P.originY,D=P.top,E=P.left,I=P.bottom;var T=createAnimation();var O=createAnimation();var C=createAnimation();var _=createAnimation();var S=createAnimation();O.addElement(f.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);C.addElement(f.querySelector(".popover-wrapper")).duration(150).fromTo("opacity",.01,1);_.addElement(u).beforeStyles({top:"calc(".concat(D,"px + var(--offset-y, 0px))"),left:"calc(".concat(E,"px + var(--offset-x, 0px))"),"transform-origin":"".concat(A," ").concat(k)}).beforeAddWrite((function(){if(I!==undefined){u.style.setProperty("bottom","".concat(I,"px"))}})).fromTo("transform","scale(0.8)","scale(1)");S.addElement(f.querySelector(".popover-viewport")).fromTo("opacity",.01,1);return T.easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).beforeAddWrite((function(){if(n==="cover"){e.style.setProperty("--width","".concat(m,"px"))}if(A==="bottom"){e.classList.add("popover-bottom")}})).addAnimation([O,C,_,S])};var mdLeaveAnimation=function(e){var t=getElementRoot(e);var r=t.querySelector(".popover-content");var o=createAnimation();var n=createAnimation();var i=createAnimation();n.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);i.addElement(t.querySelector(".popover-wrapper")).fromTo("opacity",.99,0);return o.easing("ease").afterAddWrite((function(){e.style.removeProperty("--width");e.classList.remove("popover-bottom");r.style.removeProperty("top");r.style.removeProperty("left");r.style.removeProperty("bottom");r.style.removeProperty("transform-origin")})).duration(150).addAnimation([n,i])};var popoverIosCss=':host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{opacity:0;z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}:host{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}:host(.popover-desktop){--box-shadow:0px 4px 16px 0px rgba(0, 0, 0, 0.12)}.popover-content{border-radius:10px}:host(.popover-desktop) .popover-content{border:0.5px solid var(--ion-color-step-100, #e6e6e6)}.popover-arrow{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl] .popover-arrow::after,:host-context([dir=rtl]) .popover-arrow::after{left:unset;right:unset;right:3px}:host(.popover-bottom) .popover-arrow{top:auto;bottom:-10px}:host(.popover-bottom) .popover-arrow::after{top:-6px}:host(.popover-side-left) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host(.popover-side-right) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-top) .popover-arrow{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(.popover-side-start) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host-context([dir=rtl]):host(.popover-side-start) .popover-arrow,:host-context([dir=rtl]).popover-side-start .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-end) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host-context([dir=rtl]):host(.popover-side-end) .popover-arrow,:host-context([dir=rtl]).popover-side-end .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.popover-translucent) .popover-content,:host(.popover-translucent) .popover-arrow::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}';var popoverMdCss=":host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{opacity:0;z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}:host{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl] .popover-content,:host-context([dir=rtl]) .popover-content{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport{-webkit-transition-delay:100ms;transition-delay:100ms}";var Popover=function(){function e(e){var t=this;registerInstance(this,e);this.didPresent=createEvent(this,"ionPopoverDidPresent",7);this.willPresent=createEvent(this,"ionPopoverWillPresent",7);this.willDismiss=createEvent(this,"ionPopoverWillDismiss",7);this.didDismiss=createEvent(this,"ionPopoverDidDismiss",7);this.didPresentShorthand=createEvent(this,"didPresent",7);this.willPresentShorthand=createEvent(this,"willPresent",7);this.willDismissShorthand=createEvent(this,"willDismiss",7);this.didDismissShorthand=createEvent(this,"didDismiss",7);this.ionMount=createEvent(this,"ionMount",7);this.parentPopover=null;this.popoverIndex=popoverIds++;this.coreDelegate=CoreDelegate();this.inline=false;this.focusDescendantOnPresent=false;this.presented=false;this.hasController=false;this.keyboardClose=true;this.backdropDismiss=true;this.showBackdrop=true;this.translucent=false;this.animated=true;this.triggerAction="click";this.size="auto";this.dismissOnSelect=false;this.reference="trigger";this.side="bottom";this.arrow=true;this.isOpen=false;this.keyboardEvents=false;this.keepContentsMounted=false;this.onBackdropTap=function(){t.dismiss(undefined,BACKDROP)};this.onLifecycle=function(e){var r=t.usersElement;var o=LIFECYCLE_MAP[e.type];if(r&&o){var n=new CustomEvent(o,{bubbles:false,cancelable:false,detail:e.detail});r.dispatchEvent(n)}};this.configureTriggerInteraction=function(){var e=t,r=e.trigger,o=e.triggerAction,n=e.el,i=e.destroyTriggerInteraction;if(i){i()}if(r===undefined){return}var a=t.triggerEl=r!==undefined?document.getElementById(r):null;if(!a){printIonWarning('A trigger element with the ID "'.concat(r,'" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on ion-popover.'),t.el);return}t.destroyTriggerInteraction=configureTriggerInteraction(a,o,n)};this.configureKeyboardInteraction=function(){var e=t,r=e.destroyKeyboardInteraction,o=e.el;if(r){r()}t.destroyKeyboardInteraction=configureKeyboardInteraction(o)};this.configureDismissInteraction=function(){var e=t,r=e.destroyDismissInteraction,o=e.parentPopover,n=e.triggerAction,i=e.triggerEl,a=e.el;if(!o||!i){return}if(r){r()}t.destroyDismissInteraction=configureDismissInteraction(i,n,a,o)}}e.prototype.onTriggerChange=function(){this.configureTriggerInteraction()};e.prototype.onIsOpenChange=function(e,t){if(e===true&&t===false){this.present()}else if(e===false&&t===true){this.dismiss()}};e.prototype.connectedCallback=function(){var e=this,t=e.configureTriggerInteraction,r=e.el;prepareOverlay(r);t()};e.prototype.disconnectedCallback=function(){var e=this.destroyTriggerInteraction;if(e){e()}};e.prototype.componentWillLoad=function(){this.popoverId=this.el.hasAttribute("id")?this.el.getAttribute("id"):"ion-popover-".concat(this.popoverIndex);this.parentPopover=this.el.closest("ion-popover:not(#".concat(this.popoverId,")"));if(this.alignment===undefined){this.alignment=getIonMode(this)==="ios"?"center":"start"}};e.prototype.componentDidLoad=function(){var e=this;var t=this,r=t.parentPopover,o=t.isOpen;if(o===true){raf((function(){return e.present()}))}if(r){addEventListener(r,"ionPopoverWillDismiss",(function(){e.dismiss(undefined,undefined,false)}))}};e.prototype.presentFromTrigger=function(e,t){if(t===void 0){t=false}return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(r){switch(r.label){case 0:this.focusDescendantOnPresent=t;return[4,this.present(e)];case 1:r.sent();this.focusDescendantOnPresent=false;return[2]}}))}))};e.prototype.getDelegate=function(e){if(e===void 0){e=false}if(this.workingDelegate&&!e){return{delegate:this.workingDelegate,inline:this.inline}}var t=this.el.parentNode;var r=this.inline=t!==null&&!this.hasController;var o=this.workingDelegate=r?this.delegate||this.coreDelegate:this.delegate;return{inline:r,delegate:o}};e.prototype.present=function(e){return __awaiter(this,void 0,void 0,(function(){var t,r,o,n;var i=this;return __generator(this,(function(a){switch(a.label){case 0:if(this.presented){return[2]}if(!(this.currentTransition!==undefined))return[3,2];return[4,this.currentTransition];case 1:a.sent();a.label=2;case 2:t=this.getDelegate(true),r=t.inline,o=t.delegate;n=this;return[4,attachComponent(o,this.el,this.component,["popover-viewport"],this.componentProps,r)];case 3:n.usersElement=a.sent();return[4,deepReady(this.usersElement)];case 4:a.sent();if(!this.keyboardEvents){this.configureKeyboardInteraction()}this.configureDismissInteraction();this.ionMount.emit();return[2,new Promise((function(t){raf((function(){raf((function(){return __awaiter(i,void 0,void 0,(function(){return __generator(this,(function(r){switch(r.label){case 0:this.currentTransition=present(this,"popoverEnter",iosEnterAnimation,mdEnterAnimation,{event:e||this.event,size:this.size,trigger:this.triggerEl,reference:this.reference,side:this.side,align:this.alignment});return[4,this.currentTransition];case 1:r.sent();this.currentTransition=undefined;if(this.focusDescendantOnPresent){focusFirstDescendant(this.el,this.el)}t();return[2]}}))}))}))}))}))]}}))}))};e.prototype.dismiss=function(e,t,r){if(r===void 0){r=true}return __awaiter(this,void 0,void 0,(function(){var o,n,i,a,s;return __generator(this,(function(p){switch(p.label){case 0:if(!(this.currentTransition!==undefined))return[3,2];return[4,this.currentTransition];case 1:p.sent();p.label=2;case 2:o=this,n=o.destroyKeyboardInteraction,i=o.destroyDismissInteraction;if(r&&this.parentPopover){this.parentPopover.dismiss(e,t,r)}this.currentTransition=dismiss(this,e,t,"popoverLeave",iosLeaveAnimation,mdLeaveAnimation,this.event);return[4,this.currentTransition];case 3:a=p.sent();if(!a)return[3,5];if(n){n();this.destroyKeyboardInteraction=undefined}if(i){i();this.destroyDismissInteraction=undefined}s=this.getDelegate().delegate;return[4,detachComponent(s,this.usersElement)];case 4:p.sent();p.label=5;case 5:this.currentTransition=undefined;return[2,a]}}))}))};e.prototype.getParentPopover=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){return[2,this.parentPopover]}))}))};e.prototype.onDidDismiss=function(){return eventMethod(this.el,"ionPopoverDidDismiss")};e.prototype.onWillDismiss=function(){return eventMethod(this.el,"ionPopoverWillDismiss")};e.prototype.render=function(){var e;var t=this;var r=getIonMode(this);var o=this,n=o.onLifecycle,i=o.popoverId,a=o.parentPopover,s=o.dismissOnSelect,p=o.side,c=o.arrow,d=o.htmlAttributes;var l=isPlatform("desktop");var v=c&&!a;return h(Host,Object.assign({"aria-modal":"true","no-router":true,tabindex:"-1"},d,{style:{zIndex:"".concat(2e4+this.overlayIndex)},id:i,class:Object.assign(Object.assign({},getClassMap(this.cssClass)),(e={},e[r]=true,e["popover-translucent"]=this.translucent,e["overlay-hidden"]=true,e["popover-desktop"]=l,e["popover-side-".concat(p)]=true,e["popover-nested"]=!!a,e)),onIonPopoverDidPresent:n,onIonPopoverWillPresent:n,onIonPopoverWillDismiss:n,onIonPopoverDidDismiss:n,onIonBackdropTap:this.onBackdropTap}),!a&&h("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop,part:"backdrop"}),h("div",{class:"popover-wrapper ion-overlay-wrapper",onClick:s?function(){return t.dismiss()}:undefined},v&&h("div",{class:"popover-arrow",part:"arrow"}),h("div",{class:"popover-content",part:"content"},h("slot",null))))};Object.defineProperty(e.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{trigger:["onTriggerChange"],triggerAction:["onTriggerChange"],isOpen:["onIsOpenChange"]}},enumerable:false,configurable:true});return e}();var LIFECYCLE_MAP={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};var popoverIds=0;Popover.style={ios:popoverIosCss,md:popoverMdCss};export{Popover as ion_popover};