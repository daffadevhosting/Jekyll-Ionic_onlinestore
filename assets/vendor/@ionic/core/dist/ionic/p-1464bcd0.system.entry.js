var __awaiter=this&&this.__awaiter||function(t,e,n,i){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function a(t){try{l(i.next(t))}catch(t){o(t)}}function s(t){try{l(i["throw"](t))}catch(t){o(t)}}function l(t){t.done?n(t.value):r(t.value).then(a,s)}l((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},i,r,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return l([t,e])}}function l(a){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,r&&(o=a[0]&2?r["return"]:a[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;if(r=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;r=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){n.label=a[1];break}if(a[0]===6&&n.label<o[1]){n.label=o[1];o=a;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(a);break}if(o[2])n.ops.pop();n.trys.pop();continue}a=e.call(t,n)}catch(t){a=[6,t];r=0}finally{i=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */System.register(["./p-492d5033.system.js","./p-8828dd78.system.js","./p-d020342e.system.js","./p-06445beb.system.js","./p-1ef14636.system.js","./p-04f1268e.system.js"],(function(t){"use strict";var e,n,i,r,o,a,s,l,c,d,u,p,h,f,v,m,b;return{setters:[function(t){e=t.r;n=t.e;i=t.h;r=t.H;o=t.i;a=t.j},function(t){s=t.b},function(t){l=t.f;c=t.k;d=t.d;u=t.e},function(t){p=t.c;h=t.b;f=t.a;v=t.s},function(t){m=t.h;b=t.g},function(){}],execute:function(){var g=function(t,e,n){if(typeof MutationObserver==="undefined"){return}var i=new MutationObserver((function(t){n(y(t,e))}));i.observe(t,{childList:true,subtree:true});return i};var y=function(t,e){var n;t.forEach((function(t){for(var i=0;i<t.addedNodes.length;i++){n=x(t.addedNodes[i],e)||n}}));return n};var x=function(t,e){if(t.nodeType!==1){return undefined}var n=t.tagName===e.toUpperCase()?[t]:Array.from(t.querySelectorAll(e));return n.find((function(e){return e.value===t.value}))};var w=":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:20px}.select-icon{width:12px;height:18px;opacity:0.33}";var k=":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:0;--padding-bottom:10px;--padding-start:16px}.select-icon{width:19px;height:19px;-webkit-transition:-webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);opacity:0.55}:host-context(.item-label-stacked) .select-icon,:host-context(.item-label-floating:not(.item-fill-outline)) .select-icon,:host-context(.item-label-floating.item-fill-outline){-webkit-transform:translate3d(0,  -9px,  0);transform:translate3d(0,  -9px,  0)}:host-context(.item-has-focus) .select-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host-context(.item-has-focus.item-label-stacked) .select-icon,:host-context(.item-has-focus.item-label-floating:not(.item-fill-outline)) .select-icon{-webkit-transform:translate3d(0,  -9px,  0) rotate(180deg);transform:translate3d(0,  -9px,  0) rotate(180deg)}:host-context(ion-item.ion-focused) .select-icon,:host-context(.item-has-focus) .select-icon{color:var(--highlight-color-focused);opacity:1}";var O=t("ion_select",function(){function t(t){var i=this;e(this,t);this.ionChange=n(this,"ionChange",7);this.ionCancel=n(this,"ionCancel",7);this.ionDismiss=n(this,"ionDismiss",7);this.ionFocus=n(this,"ionFocus",7);this.ionBlur=n(this,"ionBlur",7);this.ionStyle=n(this,"ionStyle",7);this.inputId="ion-sel-".concat(E++);this.didInit=false;this.isExpanded=false;this.disabled=false;this.cancelText="Cancel";this.okText="OK";this.name=this.inputId;this.multiple=false;this.interface="alert";this.interfaceOptions={};this.onClick=function(t){i.setFocus();i.open(t)};this.onFocus=function(){i.ionFocus.emit()};this.onBlur=function(){i.ionBlur.emit()}}t.prototype.styleChanged=function(){this.emitStyle()};t.prototype.valueChanged=function(){this.emitStyle();if(this.didInit){this.ionChange.emit({value:this.value})}};t.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var t=this;return __generator(this,(function(e){this.updateOverlayOptions();this.emitStyle();this.mutationO=g(this.el,"ion-select-option",(function(){return __awaiter(t,void 0,void 0,(function(){return __generator(this,(function(t){this.updateOverlayOptions();a(this);return[2]}))}))}));return[2]}))}))};t.prototype.disconnectedCallback=function(){if(this.mutationO){this.mutationO.disconnect();this.mutationO=undefined}};t.prototype.componentDidLoad=function(){this.didInit=true};t.prototype.open=function(t){return __awaiter(this,void 0,void 0,(function(){var e,n,i,r,o;var a=this;return __generator(this,(function(s){switch(s.label){case 0:if(this.disabled||this.isExpanded){return[2,undefined]}this.isExpanded=true;n=this;return[4,this.createOverlay(t)];case 1:e=n.overlay=s.sent();e.onDidDismiss().then((function(){a.overlay=undefined;a.isExpanded=false;a.ionDismiss.emit();a.setFocus()}));return[4,e.present()];case 2:s.sent();if(this.interface==="popover"){i=this.childOpts.map((function(t){return t.value})).indexOf(this.value);i=i>-1?i:0;r=e.querySelector(".select-interface-option:nth-child(".concat(i+1,")"));if(r){l(r);o=r.querySelector("ion-radio, ion-checkbox");if(o){o.focus()}}}return[2,e]}}))}))};t.prototype.createOverlay=function(t){var e=this.interface;if(e==="action-sheet"&&this.multiple){console.warn('Select interface cannot be "'.concat(e,'" with a multi-value select. Using the "alert" interface instead.'));e="alert"}if(e==="popover"&&!t){console.warn('Select interface cannot be a "'.concat(e,'" without passing an event. Using the "alert" interface instead.'));e="alert"}if(e==="action-sheet"){return this.openActionSheet()}if(e==="popover"){return this.openPopover(t)}return this.openAlert()};t.prototype.updateOverlayOptions=function(){var t=this.overlay;if(!t){return}var e=this.childOpts;var n=this.value;switch(this.interface){case"action-sheet":t.buttons=this.createActionSheetButtons(e,n);break;case"popover":var i=t.querySelector("ion-select-popover");if(i){i.options=this.createPopoverOptions(e,n)}break;case"alert":var r=this.multiple?"checkbox":"radio";t.inputs=this.createAlertInputs(e,r,n);break}};t.prototype.createActionSheetButtons=function(t,e){var n=this;var i=t.map((function(t){var i=_(t);var r=Array.from(t.classList).filter((function(t){return t!=="hydrated"})).join(" ");var o="".concat(F," ").concat(r);return{role:C(e,i,n.compareWith)?"selected":"",text:t.textContent,cssClass:o,handler:function(){n.value=i}}}));i.push({text:this.cancelText,role:"cancel",handler:function(){n.ionCancel.emit()}});return i};t.prototype.createAlertInputs=function(t,e,n){var i=this;var r=t.map((function(t){var r=_(t);var o=Array.from(t.classList).filter((function(t){return t!=="hydrated"})).join(" ");var a="".concat(F," ").concat(o);return{type:e,cssClass:a,label:t.textContent||"",value:r,checked:C(n,r,i.compareWith),disabled:t.disabled}}));return r};t.prototype.createPopoverOptions=function(t,e){var n=this;var i=t.map((function(t){var i=_(t);var r=Array.from(t.classList).filter((function(t){return t!=="hydrated"})).join(" ");var o="".concat(F," ").concat(r);return{text:t.textContent||"",cssClass:o,value:i,checked:C(e,i,n.compareWith),disabled:t.disabled,handler:function(t){n.value=t;if(!n.multiple){n.close()}}}}));return i};t.prototype.openPopover=function(t){return __awaiter(this,void 0,void 0,(function(){var e,n,i,r,o,a,l,c,d;return __generator(this,(function(u){e=this.interfaceOptions;n=s(this);i=n==="md"?false:true;r=this.multiple;o=this.value;a=t;l="auto";c=this.el.closest("ion-item");if(c&&(c.classList.contains("item-label-floating")||c.classList.contains("item-label-stacked"))){a=Object.assign(Object.assign({},t),{detail:{ionShadowTarget:c}});l="cover"}d=Object.assign(Object.assign({mode:n,event:a,alignment:"center",size:l,showBackdrop:i},e),{component:"ion-select-popover",cssClass:["select-popover",e.cssClass],componentProps:{header:e.header,subHeader:e.subHeader,message:e.message,multiple:r,value:o,options:this.createPopoverOptions(this.childOpts,o)}});return[2,p.create(d)]}))}))};t.prototype.openActionSheet=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,n;return __generator(this,(function(i){t=s(this);e=this.interfaceOptions;n=Object.assign(Object.assign({mode:t},e),{buttons:this.createActionSheetButtons(this.childOpts,this.value),cssClass:["select-action-sheet",e.cssClass]});return[2,h.create(n)]}))}))};t.prototype.openAlert=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,n,i,r,o;var a=this;return __generator(this,(function(l){t=this.getLabel();e=t?t.textContent:null;n=this.interfaceOptions;i=this.multiple?"checkbox":"radio";r=s(this);o=Object.assign(Object.assign({mode:r},n),{header:n.header?n.header:e,inputs:this.createAlertInputs(this.childOpts,i,this.value),buttons:[{text:this.cancelText,role:"cancel",handler:function(){a.ionCancel.emit()}},{text:this.okText,handler:function(t){a.value=t}}],cssClass:["select-alert",n.cssClass,this.multiple?"multiple-select-alert":"single-select-alert"]});return[2,f.create(o)]}))}))};t.prototype.close=function(){if(!this.overlay){return Promise.resolve(false)}return this.overlay.dismiss()};t.prototype.getLabel=function(){return c(this.el)};t.prototype.hasValue=function(){return this.getText()!==""};Object.defineProperty(t.prototype,"childOpts",{get:function(){return Array.from(this.el.querySelectorAll("ion-select-option"))},enumerable:false,configurable:true});t.prototype.getText=function(){var t=this.selectedText;if(t!=null&&t!==""){return t}return j(this.childOpts,this.value,this.compareWith)};t.prototype.setFocus=function(){if(this.focusEl){this.focusEl.focus()}};t.prototype.emitStyle=function(){this.ionStyle.emit({interactive:true,"interactive-disabled":this.disabled,select:true,"select-disabled":this.disabled,"has-placeholder":this.placeholder!==undefined,"has-value":this.hasValue(),"has-focus":this.isExpanded})};t.prototype.render=function(){var t;var e=this;var n=this,o=n.disabled,a=n.el,l=n.inputId,c=n.isExpanded,p=n.name,h=n.placeholder,f=n.value;var v=s(this);var b=d(a,l),g=b.labelText,y=b.labelId;u(true,a,p,A(f),o);var x=this.getText();var w=false;var k=x;if(k===""&&h!==undefined){k=h;w=true}var O={"select-text":true,"select-placeholder":w};var C=w?"placeholder":"text";var _=g!==undefined?k!==""?"".concat(k,", ").concat(g):g:k;return i(r,{onClick:this.onClick,role:"button","aria-haspopup":"listbox","aria-disabled":o?"true":null,"aria-label":_,class:(t={},t[v]=true,t["in-item"]=m("ion-item",a),t["select-disabled"]=o,t["select-expanded"]=c,t)},i("div",{"aria-hidden":"true",class:O,part:C},k),i("div",{class:"select-icon",role:"presentation",part:"icon"},i("div",{class:"select-icon-inner"})),i("label",{id:y},_),i("button",{type:"button",disabled:o,id:l,"aria-labelledby":y,"aria-haspopup":"listbox","aria-expanded":"".concat(c),onFocus:this.onFocus,onBlur:this.onBlur,ref:function(t){return e.focusEl=t}}))};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{disabled:["styleChanged"],placeholder:["styleChanged"],isExpanded:["styleChanged"],value:["valueChanged"]}},enumerable:false,configurable:true});return t}());var C=function(t,e,n){if(t===undefined){return false}if(Array.isArray(t)){return t.some((function(t){return S(t,e,n)}))}else{return S(t,e,n)}};var _=function(t){var e=t.value;return e===undefined?t.textContent||"":e};var A=function(t){if(t==null){return undefined}if(Array.isArray(t)){return t.join(",")}return t.toString()};var S=function(t,e,n){if(typeof n==="function"){return n(t,e)}else if(typeof n==="string"){return t[n]===e[n]}else{return Array.isArray(e)?e.includes(t):t===e}};var j=function(t,e,n){if(e===undefined){return""}if(Array.isArray(e)){return e.map((function(e){return z(t,e,n)})).filter((function(t){return t!==null})).join(", ")}else{return z(t,e,n)||""}};var z=function(t,e,n){var i=t.find((function(t){return S(e,_(t),n)}));return i?i.textContent:null};var E=0;var F="select-interface-option";O.style={ios:w,md:k};var T=":host{display:none}";var I=t("ion_select_option",function(){function t(t){e(this,t);this.inputId="ion-selopt-".concat(P++);this.disabled=false}t.prototype.render=function(){return i(r,{role:"option",id:this.inputId,class:s(this)})};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});return t}());var P=0;I.style=T;var B=".sc-ion-select-popover-ios-h ion-list.sc-ion-select-popover-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-list-header.sc-ion-select-popover-ios,ion-label.sc-ion-select-popover-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}";var L=".sc-ion-select-popover-md-h ion-list.sc-ion-select-popover-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-list-header.sc-ion-select-popover-md,ion-label.sc-ion-select-popover-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-list.sc-ion-select-popover-md ion-radio.sc-ion-select-popover-md{opacity:0}ion-item.sc-ion-select-popover-md{--inner-border-width:0}.item-radio-checked.sc-ion-select-popover-md{--background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.08);--background-focused:var(--ion-color-primary, #3880ff);--background-focused-opacity:0.2;--background-hover:var(--ion-color-primary, #3880ff);--background-hover-opacity:0.12}.item-checkbox-checked.sc-ion-select-popover-md{--background-activated:var(--ion-item-color, var(--ion-text-color, #000));--background-focused:var(--ion-item-color, var(--ion-text-color, #000));--background-hover:var(--ion-item-color, var(--ion-text-color, #000));--color:var(--ion-color-primary, #3880ff)}";var H=t("ion_select_popover",function(){function t(t){e(this,t);this.options=[]}t.prototype.onSelect=function(t){this.setChecked(t);this.callOptionHandler(t)};t.prototype.findOptionFromEvent=function(t){var e=this.options;return e.find((function(e){return e.value===t.target.value}))};t.prototype.callOptionHandler=function(t){var e=this.findOptionFromEvent(t);var n=this.getValues(t);if(e===null||e===void 0?void 0:e.handler){v(e.handler,n)}};t.prototype.rbClick=function(t){this.callOptionHandler(t)};t.prototype.setChecked=function(t){var e=this.multiple;var n=this.findOptionFromEvent(t);if(e&&n){n.checked=t.detail.checked}};t.prototype.getValues=function(t){var e=this,n=e.multiple,i=e.options;if(n){return i.filter((function(t){return t.checked})).map((function(t){return t.value}))}var r=this.findOptionFromEvent(t);return r?r.value:undefined};t.prototype.renderOptions=function(t){var e=this.multiple;switch(e){case true:return this.renderCheckboxOptions(t);default:return this.renderRadioOptions(t)}};t.prototype.renderCheckboxOptions=function(t){return t.map((function(t){return i("ion-item",{class:b(t.cssClass)},i("ion-checkbox",{slot:"start",value:t.value,disabled:t.disabled,checked:t.checked}),i("ion-label",null,t.text))}))};t.prototype.renderRadioOptions=function(t){var e=this;var n=t.filter((function(t){return t.checked})).map((function(t){return t.value}))[0];return i("ion-radio-group",{value:n},t.map((function(t){return i("ion-item",{class:b(t.cssClass)},i("ion-label",null,t.text),i("ion-radio",{value:t.value,disabled:t.disabled,onClick:function(t){return e.rbClick(t)}}))})))};t.prototype.render=function(){var t=this,e=t.header,n=t.message,o=t.options,a=t.subHeader;var l=a!==undefined||n!==undefined;return i(r,{class:s(this)},i("ion-list",null,e!==undefined&&i("ion-list-header",null,e),l&&i("ion-item",null,i("ion-label",{class:"ion-text-wrap"},a!==undefined&&i("h3",null,a),n!==undefined&&i("p",null,n))),this.renderOptions(o)))};return t}());H.style={ios:B,md:L}}}}));