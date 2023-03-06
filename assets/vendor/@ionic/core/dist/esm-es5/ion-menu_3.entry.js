import{__awaiter,__generator}from"tslib";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */import{r as registerInstance,e as createEvent,h,H as Host,i as getElement}from"./index-8e692445.js";import{c as config,b as getIonMode}from"./ionic-global-c74e4951.js";import{g as getTimeGivenProgression}from"./cubic-bezier-e78d1307.js";import{G as GESTURE_CONTROLLER}from"./gesture-controller-17060b7c.js";import{o as isEndSide,i as inheritAriaAttributes,n as assert,l as clamp}from"./helpers-3b390e48.js";import{m as menuController}from"./index-2b839939.js";import{k as getOverlay}from"./overlays-5fc09c9a.js";import{u as menuOutline,v as menuSharp}from"./index-2bcb741c.js";import{c as createColorClasses,h as hostContext}from"./theme-7670341c.js";import"./hardware-back-button-490df115.js";import"./animation-4ff3f603.js";import"./index-33ffec25.js";var menuIosCss=":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translateX(-9999px);transform:translateX(-9999px);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{left:unset;right:unset;left:auto;right:0}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto;}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none !important;transform:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}";var menuMdCss=":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translateX(-9999px);transform:translateX(-9999px);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{left:unset;right:unset;left:auto;right:0}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto;}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none !important;transform:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18);box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}";var iosEasing="cubic-bezier(0.32,0.72,0,1)";var mdEasing="cubic-bezier(0.0,0.0,0.2,1)";var iosEasingReverse="cubic-bezier(1, 0, 0.68, 0.28)";var mdEasingReverse="cubic-bezier(0.4, 0, 0.6, 1)";var focusableQueryString='[tabindex]:not([tabindex^="-"]), input:not([type=hidden]):not([tabindex^="-"]), textarea:not([tabindex^="-"]), button:not([tabindex^="-"]), select:not([tabindex^="-"]), .ion-focusable:not([tabindex^="-"])';var Menu=function(){function t(t){var e=this;registerInstance(this,t);this.ionWillOpen=createEvent(this,"ionWillOpen",7);this.ionWillClose=createEvent(this,"ionWillClose",7);this.ionDidOpen=createEvent(this,"ionDidOpen",7);this.ionDidClose=createEvent(this,"ionDidClose",7);this.ionMenuChange=createEvent(this,"ionMenuChange",7);this.lastOnEnd=0;this.blocker=GESTURE_CONTROLLER.createBlocker({disableScroll:true});this.isAnimating=false;this._isOpen=false;this.inheritedAttributes={};this.handleFocus=function(t){var n=getOverlay(document);if(n&&!n.contains(e.el)){return}e.trapKeyboardFocus(t,document)};this.isPaneVisible=false;this.isEndSide=false;this.disabled=false;this.side="start";this.swipeGesture=true;this.maxEdgeStart=50}t.prototype.typeChanged=function(t,e){var n=this.contentEl;if(n){if(e!==undefined){n.classList.remove("menu-content-".concat(e))}n.classList.add("menu-content-".concat(t));n.removeAttribute("style")}if(this.menuInnerEl){this.menuInnerEl.removeAttribute("style")}this.animation=undefined};t.prototype.disabledChanged=function(){this.updateState();this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})};t.prototype.sideChanged=function(){this.isEndSide=isEndSide(this.side)};t.prototype.swipeGestureChanged=function(){this.updateState()};t.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var t,e;var n=this;return __generator(this,(function(i){switch(i.label){case 0:if(!(typeof customElements!=="undefined"))return[3,2];return[4,customElements.whenDefined("ion-menu")];case 1:i.sent();i.label=2;case 2:if(this.type===undefined){this.type=config.get("menuType","overlay")}t=this.contentId!==undefined?document.getElementById(this.contentId):null;if(t===null){console.error('Menu: must have a "content" element to listen for drag events on.');return[2]}if(this.el.contains(t)){console.error('Menu: "contentId" should refer to the main view\'s ion-content, not the ion-content inside of the ion-menu.')}this.contentEl=t;t.classList.add("menu-content");this.typeChanged(this.type,undefined);this.sideChanged();menuController._register(this);e=this;return[4,import("./index-422b6e83.js")];case 3:e.gesture=i.sent().createGesture({el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,blurOnStart:true,canStart:function(t){return n.canStart(t)},onWillStart:function(){return n.onWillStart()},onStart:function(){return n.onStart()},onMove:function(t){return n.onMove(t)},onEnd:function(t){return n.onEnd(t)}});this.updateState();return[2]}}))}))};t.prototype.componentWillLoad=function(){this.inheritedAttributes=inheritAriaAttributes(this.el)};t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen});this.updateState();return[2]}))}))};t.prototype.disconnectedCallback=function(){this.blocker.destroy();menuController._unregister(this);if(this.animation){this.animation.destroy()}if(this.gesture){this.gesture.destroy();this.gesture=undefined}this.animation=undefined;this.contentEl=this.backdropEl=this.menuInnerEl=undefined};t.prototype.onSplitPaneChanged=function(t){this.isPaneVisible=t.detail.isPane(this.el);this.updateState()};t.prototype.onBackdropClick=function(t){if(this._isOpen&&this.lastOnEnd<t.timeStamp-100){var e=t.composedPath?!t.composedPath().includes(this.menuInnerEl):false;if(e){t.preventDefault();t.stopPropagation();this.close()}}};t.prototype.onKeydown=function(t){if(t.key==="Escape"){this.close()}};t.prototype.isOpen=function(){return Promise.resolve(this._isOpen)};t.prototype.isActive=function(){return Promise.resolve(this._isActive())};t.prototype.open=function(t){if(t===void 0){t=true}return this.setOpen(true,t)};t.prototype.close=function(t){if(t===void 0){t=true}return this.setOpen(false,t)};t.prototype.toggle=function(t){if(t===void 0){t=true}return this.setOpen(!this._isOpen,t)};t.prototype.setOpen=function(t,e){if(e===void 0){e=true}return menuController._setOpen(this,t,e)};t.prototype.focusFirstDescendant=function(){var t=this.el;var e=t.querySelector(focusableQueryString);if(e){e.focus()}else{t.focus()}};t.prototype.focusLastDescendant=function(){var t=this.el;var e=Array.from(t.querySelectorAll(focusableQueryString));var n=e.length>0?e[e.length-1]:null;if(n){n.focus()}else{t.focus()}};t.prototype.trapKeyboardFocus=function(t,e){var n=t.target;if(!n){return}if(this.el.contains(n)){this.lastFocus=n}else{this.focusFirstDescendant();if(this.lastFocus===e.activeElement){this.focusLastDescendant()}}};t.prototype._setOpen=function(t,e){if(e===void 0){e=true}return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(n){switch(n.label){case 0:if(!this._isActive()||this.isAnimating||t===this._isOpen){return[2,false]}this.beforeAnimation(t);return[4,this.loadAnimation()];case 1:n.sent();return[4,this.startAnimation(t,e)];case 2:n.sent();this.afterAnimation(t);return[2,true]}}))}))};t.prototype.loadAnimation=function(){return __awaiter(this,void 0,void 0,(function(){var t,e;return __generator(this,(function(n){switch(n.label){case 0:t=this.menuInnerEl.offsetWidth;if(t===this.width&&this.animation!==undefined){return[2]}this.width=t;if(this.animation){this.animation.destroy();this.animation=undefined}e=this;return[4,menuController._createAnimation(this.type,this)];case 1:e.animation=n.sent();if(!config.getBoolean("animated",true)){this.animation.duration(0)}this.animation.fill("both");return[2]}}))}))};t.prototype.startAnimation=function(t,e){return __awaiter(this,void 0,void 0,(function(){var n,i,o,r,a;return __generator(this,(function(s){switch(s.label){case 0:n=!t;i=getIonMode(this);o=i==="ios"?iosEasing:mdEasing;r=i==="ios"?iosEasingReverse:mdEasingReverse;a=this.animation.direction(n?"reverse":"normal").easing(n?r:o).onFinish((function(){if(a.getDirection()==="reverse"){a.direction("normal")}}));if(!e)return[3,2];return[4,a.play()];case 1:s.sent();return[3,3];case 2:a.play({sync:true});s.label=3;case 3:return[2]}}))}))};t.prototype._isActive=function(){return!this.disabled&&!this.isPaneVisible};t.prototype.canSwipe=function(){return this.swipeGesture&&!this.isAnimating&&this._isActive()};t.prototype.canStart=function(t){var e=!!document.querySelector("ion-modal.show-modal");if(e||!this.canSwipe()){return false}if(this._isOpen){return true}else if(menuController._getOpenSync()){return false}return checkEdgeSide(window,t.currentX,this.isEndSide,this.maxEdgeStart)};t.prototype.onWillStart=function(){this.beforeAnimation(!this._isOpen);return this.loadAnimation()};t.prototype.onStart=function(){if(!this.isAnimating||!this.animation){assert(false,"isAnimating has to be true");return}this.animation.progressStart(true,this._isOpen?1:0)};t.prototype.onMove=function(t){if(!this.isAnimating||!this.animation){assert(false,"isAnimating has to be true");return}var e=computeDelta(t.deltaX,this._isOpen,this.isEndSide);var n=e/this.width;this.animation.progressStep(this._isOpen?1-n:n)};t.prototype.onEnd=function(t){var e=this;if(!this.isAnimating||!this.animation){assert(false,"isAnimating has to be true");return}var n=this._isOpen;var i=this.isEndSide;var o=computeDelta(t.deltaX,n,i);var r=this.width;var a=o/r;var s=t.velocityX;var d=r/2;var u=s>=0&&(s>.2||t.deltaX>d);var l=s<=0&&(s<-.2||t.deltaX<-d);var h=n?i?u:l:i?l:u;var c=!n&&h;if(n&&!h){c=true}this.lastOnEnd=t.currentTime;var p=h?.001:-.001;var m=a<0?.01:a;p+=getTimeGivenProgression([0,0],[.4,0],[.6,1],[1,1],clamp(0,m,.9999))[0]||0;var f=this._isOpen?!h:h;this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish((function(){return e.afterAnimation(c)}),{oneTimeCallback:true}).progressEnd(f?1:0,this._isOpen?1-p:p,300)};t.prototype.beforeAnimation=function(t){assert(!this.isAnimating,"_before() should not be called while animating");this.el.classList.add(SHOW_MENU);this.el.setAttribute("tabindex","0");if(this.backdropEl){this.backdropEl.classList.add(SHOW_BACKDROP)}this.blocker.block();this.isAnimating=true;if(t){this.ionWillOpen.emit()}else{this.ionWillClose.emit()}};t.prototype.afterAnimation=function(t){var e;assert(this.isAnimating,"_before() should be called while animating");this._isOpen=t;this.isAnimating=false;if(!this._isOpen){this.blocker.unblock()}if(t){if(this.contentEl){this.contentEl.classList.add(MENU_CONTENT_OPEN);this.contentEl.setAttribute("aria-hidden","true")}this.ionDidOpen.emit();var n=(e=document.activeElement)===null||e===void 0?void 0:e.closest("ion-menu");if(n!==this.el){this.el.focus()}document.addEventListener("focus",this.handleFocus,true)}else{this.el.classList.remove(SHOW_MENU);this.el.removeAttribute("tabindex");if(this.contentEl){this.contentEl.classList.remove(MENU_CONTENT_OPEN);this.contentEl.removeAttribute("aria-hidden")}if(this.backdropEl){this.backdropEl.classList.remove(SHOW_BACKDROP)}if(this.animation){this.animation.stop()}this.ionDidClose.emit();document.removeEventListener("focus",this.handleFocus,true)}};t.prototype.updateState=function(){var t=this._isActive();if(this.gesture){this.gesture.enable(t&&this.swipeGesture)}if(!t&&this._isOpen){this.forceClosing()}if(!this.disabled){menuController._setActiveMenu(this)}assert(!this.isAnimating,"can not be animating")};t.prototype.forceClosing=function(){assert(this._isOpen,"menu cannot be closed");this.isAnimating=true;var t=this.animation.direction("reverse");t.play({sync:true});this.afterAnimation(false)};t.prototype.render=function(){var t;var e=this;var n=this,i=n.isEndSide,o=n.type,r=n.disabled,a=n.isPaneVisible,s=n.inheritedAttributes;var d=getIonMode(this);return h(Host,{role:"navigation","aria-label":s["aria-label"]||"menu",class:(t={},t[d]=true,t["menu-type-".concat(o)]=true,t["menu-enabled"]=!r,t["menu-side-end"]=i,t["menu-side-start"]=!i,t["menu-pane-visible"]=a,t)},h("div",{class:"menu-inner",part:"container",ref:function(t){return e.menuInnerEl=t}},h("slot",null)),h("ion-backdrop",{ref:function(t){return e.backdropEl=t},class:"menu-backdrop",tappable:false,stopPropagation:false,part:"backdrop"}))};Object.defineProperty(t.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{type:["typeChanged"],disabled:["disabledChanged"],side:["sideChanged"],swipeGesture:["swipeGestureChanged"]}},enumerable:false,configurable:true});return t}();var computeDelta=function(t,e,n){return Math.max(0,e!==n?-t:t)};var checkEdgeSide=function(t,e,n,i){if(n){return e>=t.innerWidth-i}else{return e<=i}};var SHOW_MENU="show-menu";var SHOW_BACKDROP="show-backdrop";var MENU_CONTENT_OPEN="menu-content-open";Menu.style={ios:menuIosCss,md:menuMdCss};var updateVisibility=function(t){return __awaiter(void 0,void 0,void 0,(function(){var e,n;return __generator(this,(function(i){switch(i.label){case 0:return[4,menuController.get(t)];case 1:e=i.sent();n=e;if(!n)return[3,3];return[4,e.isActive()];case 2:n=i.sent();i.label=3;case 3:return[2,!!n]}}))}))};var menuButtonIosCss=':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #3880ff);--padding-start:5px;--padding-end:5px;height:32px;font-size:31px}:host(.ion-activated){opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}';var menuButtonMdCss=':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:.04;--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:48px;height:48px;font-size:24px}:host(.ion-color.ion-focused)::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}';var MenuButton=function(){function t(t){var e=this;registerInstance(this,t);this.inheritedAttributes={};this.visible=false;this.disabled=false;this.autoHide=true;this.type="button";this.onClick=function(){return __awaiter(e,void 0,void 0,(function(){return __generator(this,(function(t){return[2,menuController.toggle(this.menu)]}))}))}}t.prototype.componentWillLoad=function(){this.inheritedAttributes=inheritAriaAttributes(this.el)};t.prototype.componentDidLoad=function(){this.visibilityChanged()};t.prototype.visibilityChanged=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){switch(e.label){case 0:t=this;return[4,updateVisibility(this.menu)];case 1:t.visible=e.sent();return[2]}}))}))};t.prototype.render=function(){var t;var e=this,n=e.color,i=e.disabled,o=e.inheritedAttributes;var r=getIonMode(this);var a=config.get("menuIcon",r==="ios"?menuOutline:menuSharp);var s=this.autoHide&&!this.visible;var d={type:this.type};var u=o["aria-label"]||"menu";return h(Host,{onClick:this.onClick,"aria-disabled":i?"true":null,"aria-hidden":s?"true":null,class:createColorClasses(n,(t={},t[r]=true,t.button=true,t["menu-button-hidden"]=s,t["menu-button-disabled"]=i,t["in-toolbar"]=hostContext("ion-toolbar",this.el),t["in-toolbar-color"]=hostContext("ion-toolbar[color]",this.el),t["ion-activatable"]=true,t["ion-focusable"]=true,t))},h("button",Object.assign({},d,{disabled:i,class:"button-native",part:"native","aria-label":u}),h("span",{class:"button-inner"},h("slot",null,h("ion-icon",{part:"icon",icon:a,mode:r,lazy:false,"aria-hidden":"true"}))),r==="md"&&h("ion-ripple-effect",{type:"unbounded"})))};Object.defineProperty(t.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});return t}();MenuButton.style={ios:menuButtonIosCss,md:menuButtonMdCss};var menuToggleCss=":host(.menu-toggle-hidden){display:none}";var MenuToggle=function(){function t(t){var e=this;registerInstance(this,t);this.visible=false;this.autoHide=true;this.onClick=function(){return menuController.toggle(e.menu)}}t.prototype.connectedCallback=function(){this.visibilityChanged()};t.prototype.visibilityChanged=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){switch(e.label){case 0:t=this;return[4,updateVisibility(this.menu)];case 1:t.visible=e.sent();return[2]}}))}))};t.prototype.render=function(){var t;var e=getIonMode(this);var n=this.autoHide&&!this.visible;return h(Host,{onClick:this.onClick,"aria-hidden":n?"true":null,class:(t={},t[e]=true,t["menu-toggle-hidden"]=n,t)},h("slot",null))};return t}();MenuToggle.style=menuToggleCss;export{Menu as ion_menu,MenuButton as ion_menu_button,MenuToggle as ion_menu_toggle};