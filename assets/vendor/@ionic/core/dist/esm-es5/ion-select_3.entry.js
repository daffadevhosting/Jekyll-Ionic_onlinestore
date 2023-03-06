import{__awaiter,__generator}from"tslib";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */import{r as registerInstance,e as createEvent,h,H as Host,i as getElement,j as forceUpdate}from"./index-8e692445.js";import{b as getIonMode}from"./ionic-global-c74e4951.js";import{f as focusElement,k as findItemLabel,d as getAriaLabel,e as renderHiddenInput}from"./helpers-3b390e48.js";import{c as popoverController,b as actionSheetController,a as alertController,s as safeCall}from"./overlays-5fc09c9a.js";import{h as hostContext,g as getClassMap}from"./theme-7670341c.js";import"./hardware-back-button-490df115.js";var watchForOptions=function(e,t,n){if(typeof MutationObserver==="undefined"){return}var i=new MutationObserver((function(e){n(getSelectedOption(e,t))}));i.observe(e,{childList:true,subtree:true});return i};var getSelectedOption=function(e,t){var n;e.forEach((function(e){for(var i=0;i<e.addedNodes.length;i++){n=findCheckedOption(e.addedNodes[i],t)||n}}));return n};var findCheckedOption=function(e,t){if(e.nodeType!==1){return undefined}var n=e.tagName===t.toUpperCase()?[e]:Array.from(e.querySelectorAll(t));return n.find((function(t){return t.value===e.value}))};var selectIosCss=":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:20px}.select-icon{width:12px;height:18px;opacity:0.33}";var selectMdCss=":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:0;--padding-bottom:10px;--padding-start:16px}.select-icon{width:19px;height:19px;-webkit-transition:-webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);opacity:0.55}:host-context(.item-label-stacked) .select-icon,:host-context(.item-label-floating:not(.item-fill-outline)) .select-icon,:host-context(.item-label-floating.item-fill-outline){-webkit-transform:translate3d(0,  -9px,  0);transform:translate3d(0,  -9px,  0)}:host-context(.item-has-focus) .select-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host-context(.item-has-focus.item-label-stacked) .select-icon,:host-context(.item-has-focus.item-label-floating:not(.item-fill-outline)) .select-icon{-webkit-transform:translate3d(0,  -9px,  0) rotate(180deg);transform:translate3d(0,  -9px,  0) rotate(180deg)}:host-context(ion-item.ion-focused) .select-icon,:host-context(.item-has-focus) .select-icon{color:var(--highlight-color-focused);opacity:1}";var Select=function(){function e(e){var t=this;registerInstance(this,e);this.ionChange=createEvent(this,"ionChange",7);this.ionCancel=createEvent(this,"ionCancel",7);this.ionDismiss=createEvent(this,"ionDismiss",7);this.ionFocus=createEvent(this,"ionFocus",7);this.ionBlur=createEvent(this,"ionBlur",7);this.ionStyle=createEvent(this,"ionStyle",7);this.inputId="ion-sel-".concat(selectIds++);this.didInit=false;this.isExpanded=false;this.disabled=false;this.cancelText="Cancel";this.okText="OK";this.name=this.inputId;this.multiple=false;this.interface="alert";this.interfaceOptions={};this.onClick=function(e){t.setFocus();t.open(e)};this.onFocus=function(){t.ionFocus.emit()};this.onBlur=function(){t.ionBlur.emit()}}e.prototype.styleChanged=function(){this.emitStyle()};e.prototype.valueChanged=function(){this.emitStyle();if(this.didInit){this.ionChange.emit({value:this.value})}};e.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var e=this;return __generator(this,(function(t){this.updateOverlayOptions();this.emitStyle();this.mutationO=watchForOptions(this.el,"ion-select-option",(function(){return __awaiter(e,void 0,void 0,(function(){return __generator(this,(function(e){this.updateOverlayOptions();forceUpdate(this);return[2]}))}))}));return[2]}))}))};e.prototype.disconnectedCallback=function(){if(this.mutationO){this.mutationO.disconnect();this.mutationO=undefined}};e.prototype.componentDidLoad=function(){this.didInit=true};e.prototype.open=function(e){return __awaiter(this,void 0,void 0,(function(){var t,n,i,o,r;var a=this;return __generator(this,(function(s){switch(s.label){case 0:if(this.disabled||this.isExpanded){return[2,undefined]}this.isExpanded=true;n=this;return[4,this.createOverlay(e)];case 1:t=n.overlay=s.sent();t.onDidDismiss().then((function(){a.overlay=undefined;a.isExpanded=false;a.ionDismiss.emit();a.setFocus()}));return[4,t.present()];case 2:s.sent();if(this.interface==="popover"){i=this.childOpts.map((function(e){return e.value})).indexOf(this.value);i=i>-1?i:0;o=t.querySelector(".select-interface-option:nth-child(".concat(i+1,")"));if(o){focusElement(o);r=o.querySelector("ion-radio, ion-checkbox");if(r){r.focus()}}}return[2,t]}}))}))};e.prototype.createOverlay=function(e){var t=this.interface;if(t==="action-sheet"&&this.multiple){console.warn('Select interface cannot be "'.concat(t,'" with a multi-value select. Using the "alert" interface instead.'));t="alert"}if(t==="popover"&&!e){console.warn('Select interface cannot be a "'.concat(t,'" without passing an event. Using the "alert" interface instead.'));t="alert"}if(t==="action-sheet"){return this.openActionSheet()}if(t==="popover"){return this.openPopover(e)}return this.openAlert()};e.prototype.updateOverlayOptions=function(){var e=this.overlay;if(!e){return}var t=this.childOpts;var n=this.value;switch(this.interface){case"action-sheet":e.buttons=this.createActionSheetButtons(t,n);break;case"popover":var i=e.querySelector("ion-select-popover");if(i){i.options=this.createPopoverOptions(t,n)}break;case"alert":var o=this.multiple?"checkbox":"radio";e.inputs=this.createAlertInputs(t,o,n);break}};e.prototype.createActionSheetButtons=function(e,t){var n=this;var i=e.map((function(e){var i=getOptionValue(e);var o=Array.from(e.classList).filter((function(e){return e!=="hydrated"})).join(" ");var r="".concat(OPTION_CLASS," ").concat(o);return{role:isOptionSelected(t,i,n.compareWith)?"selected":"",text:e.textContent,cssClass:r,handler:function(){n.value=i}}}));i.push({text:this.cancelText,role:"cancel",handler:function(){n.ionCancel.emit()}});return i};e.prototype.createAlertInputs=function(e,t,n){var i=this;var o=e.map((function(e){var o=getOptionValue(e);var r=Array.from(e.classList).filter((function(e){return e!=="hydrated"})).join(" ");var a="".concat(OPTION_CLASS," ").concat(r);return{type:t,cssClass:a,label:e.textContent||"",value:o,checked:isOptionSelected(n,o,i.compareWith),disabled:e.disabled}}));return o};e.prototype.createPopoverOptions=function(e,t){var n=this;var i=e.map((function(e){var i=getOptionValue(e);var o=Array.from(e.classList).filter((function(e){return e!=="hydrated"})).join(" ");var r="".concat(OPTION_CLASS," ").concat(o);return{text:e.textContent||"",cssClass:r,value:i,checked:isOptionSelected(t,i,n.compareWith),disabled:e.disabled,handler:function(e){n.value=e;if(!n.multiple){n.close()}}}}));return i};e.prototype.openPopover=function(e){return __awaiter(this,void 0,void 0,(function(){var t,n,i,o,r,a,s,l,c;return __generator(this,(function(d){t=this.interfaceOptions;n=getIonMode(this);i=n==="md"?false:true;o=this.multiple;r=this.value;a=e;s="auto";l=this.el.closest("ion-item");if(l&&(l.classList.contains("item-label-floating")||l.classList.contains("item-label-stacked"))){a=Object.assign(Object.assign({},e),{detail:{ionShadowTarget:l}});s="cover"}c=Object.assign(Object.assign({mode:n,event:a,alignment:"center",size:s,showBackdrop:i},t),{component:"ion-select-popover",cssClass:["select-popover",t.cssClass],componentProps:{header:t.header,subHeader:t.subHeader,message:t.message,multiple:o,value:r,options:this.createPopoverOptions(this.childOpts,r)}});return[2,popoverController.create(c)]}))}))};e.prototype.openActionSheet=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,n;return __generator(this,(function(i){e=getIonMode(this);t=this.interfaceOptions;n=Object.assign(Object.assign({mode:e},t),{buttons:this.createActionSheetButtons(this.childOpts,this.value),cssClass:["select-action-sheet",t.cssClass]});return[2,actionSheetController.create(n)]}))}))};e.prototype.openAlert=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,n,i,o,r;var a=this;return __generator(this,(function(s){e=this.getLabel();t=e?e.textContent:null;n=this.interfaceOptions;i=this.multiple?"checkbox":"radio";o=getIonMode(this);r=Object.assign(Object.assign({mode:o},n),{header:n.header?n.header:t,inputs:this.createAlertInputs(this.childOpts,i,this.value),buttons:[{text:this.cancelText,role:"cancel",handler:function(){a.ionCancel.emit()}},{text:this.okText,handler:function(e){a.value=e}}],cssClass:["select-alert",n.cssClass,this.multiple?"multiple-select-alert":"single-select-alert"]});return[2,alertController.create(r)]}))}))};e.prototype.close=function(){if(!this.overlay){return Promise.resolve(false)}return this.overlay.dismiss()};e.prototype.getLabel=function(){return findItemLabel(this.el)};e.prototype.hasValue=function(){return this.getText()!==""};Object.defineProperty(e.prototype,"childOpts",{get:function(){return Array.from(this.el.querySelectorAll("ion-select-option"))},enumerable:false,configurable:true});e.prototype.getText=function(){var e=this.selectedText;if(e!=null&&e!==""){return e}return generateText(this.childOpts,this.value,this.compareWith)};e.prototype.setFocus=function(){if(this.focusEl){this.focusEl.focus()}};e.prototype.emitStyle=function(){this.ionStyle.emit({interactive:true,"interactive-disabled":this.disabled,select:true,"select-disabled":this.disabled,"has-placeholder":this.placeholder!==undefined,"has-value":this.hasValue(),"has-focus":this.isExpanded})};e.prototype.render=function(){var e;var t=this;var n=this,i=n.disabled,o=n.el,r=n.inputId,a=n.isExpanded,s=n.name,l=n.placeholder,c=n.value;var d=getIonMode(this);var p=getAriaLabel(o,r),u=p.labelText,f=p.labelId;renderHiddenInput(true,o,s,parseValue(c),i);var v=this.getText();var m=false;var g=v;if(g===""&&l!==undefined){g=l;m=true}var b={"select-text":true,"select-placeholder":m};var x=m?"placeholder":"text";var y=u!==undefined?g!==""?"".concat(g,", ").concat(u):u:g;return h(Host,{onClick:this.onClick,role:"button","aria-haspopup":"listbox","aria-disabled":i?"true":null,"aria-label":y,class:(e={},e[d]=true,e["in-item"]=hostContext("ion-item",o),e["select-disabled"]=i,e["select-expanded"]=a,e)},h("div",{"aria-hidden":"true",class:b,part:x},g),h("div",{class:"select-icon",role:"presentation",part:"icon"},h("div",{class:"select-icon-inner"})),h("label",{id:f},y),h("button",{type:"button",disabled:i,id:r,"aria-labelledby":f,"aria-haspopup":"listbox","aria-expanded":"".concat(a),onFocus:this.onFocus,onBlur:this.onBlur,ref:function(e){return t.focusEl=e}}))};Object.defineProperty(e.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{disabled:["styleChanged"],placeholder:["styleChanged"],isExpanded:["styleChanged"],value:["valueChanged"]}},enumerable:false,configurable:true});return e}();var isOptionSelected=function(e,t,n){if(e===undefined){return false}if(Array.isArray(e)){return e.some((function(e){return compareOptions(e,t,n)}))}else{return compareOptions(e,t,n)}};var getOptionValue=function(e){var t=e.value;return t===undefined?e.textContent||"":t};var parseValue=function(e){if(e==null){return undefined}if(Array.isArray(e)){return e.join(",")}return e.toString()};var compareOptions=function(e,t,n){if(typeof n==="function"){return n(e,t)}else if(typeof n==="string"){return e[n]===t[n]}else{return Array.isArray(t)?t.includes(e):e===t}};var generateText=function(e,t,n){if(t===undefined){return""}if(Array.isArray(t)){return t.map((function(t){return textForValue(e,t,n)})).filter((function(e){return e!==null})).join(", ")}else{return textForValue(e,t,n)||""}};var textForValue=function(e,t,n){var i=e.find((function(e){return compareOptions(t,getOptionValue(e),n)}));return i?i.textContent:null};var selectIds=0;var OPTION_CLASS="select-interface-option";Select.style={ios:selectIosCss,md:selectMdCss};var selectOptionCss=":host{display:none}";var SelectOption=function(){function e(e){registerInstance(this,e);this.inputId="ion-selopt-".concat(selectOptionIds++);this.disabled=false}e.prototype.render=function(){return h(Host,{role:"option",id:this.inputId,class:getIonMode(this)})};Object.defineProperty(e.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});return e}();var selectOptionIds=0;SelectOption.style=selectOptionCss;var selectPopoverIosCss=".sc-ion-select-popover-ios-h ion-list.sc-ion-select-popover-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-list-header.sc-ion-select-popover-ios,ion-label.sc-ion-select-popover-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}";var selectPopoverMdCss=".sc-ion-select-popover-md-h ion-list.sc-ion-select-popover-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-list-header.sc-ion-select-popover-md,ion-label.sc-ion-select-popover-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-list.sc-ion-select-popover-md ion-radio.sc-ion-select-popover-md{opacity:0}ion-item.sc-ion-select-popover-md{--inner-border-width:0}.item-radio-checked.sc-ion-select-popover-md{--background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.08);--background-focused:var(--ion-color-primary, #3880ff);--background-focused-opacity:0.2;--background-hover:var(--ion-color-primary, #3880ff);--background-hover-opacity:0.12}.item-checkbox-checked.sc-ion-select-popover-md{--background-activated:var(--ion-item-color, var(--ion-text-color, #000));--background-focused:var(--ion-item-color, var(--ion-text-color, #000));--background-hover:var(--ion-item-color, var(--ion-text-color, #000));--color:var(--ion-color-primary, #3880ff)}";var SelectPopover=function(){function e(e){registerInstance(this,e);this.options=[]}e.prototype.onSelect=function(e){this.setChecked(e);this.callOptionHandler(e)};e.prototype.findOptionFromEvent=function(e){var t=this.options;return t.find((function(t){return t.value===e.target.value}))};e.prototype.callOptionHandler=function(e){var t=this.findOptionFromEvent(e);var n=this.getValues(e);if(t===null||t===void 0?void 0:t.handler){safeCall(t.handler,n)}};e.prototype.rbClick=function(e){this.callOptionHandler(e)};e.prototype.setChecked=function(e){var t=this.multiple;var n=this.findOptionFromEvent(e);if(t&&n){n.checked=e.detail.checked}};e.prototype.getValues=function(e){var t=this,n=t.multiple,i=t.options;if(n){return i.filter((function(e){return e.checked})).map((function(e){return e.value}))}var o=this.findOptionFromEvent(e);return o?o.value:undefined};e.prototype.renderOptions=function(e){var t=this.multiple;switch(t){case true:return this.renderCheckboxOptions(e);default:return this.renderRadioOptions(e)}};e.prototype.renderCheckboxOptions=function(e){return e.map((function(e){return h("ion-item",{class:getClassMap(e.cssClass)},h("ion-checkbox",{slot:"start",value:e.value,disabled:e.disabled,checked:e.checked}),h("ion-label",null,e.text))}))};e.prototype.renderRadioOptions=function(e){var t=this;var n=e.filter((function(e){return e.checked})).map((function(e){return e.value}))[0];return h("ion-radio-group",{value:n},e.map((function(e){return h("ion-item",{class:getClassMap(e.cssClass)},h("ion-label",null,e.text),h("ion-radio",{value:e.value,disabled:e.disabled,onClick:function(e){return t.rbClick(e)}}))})))};e.prototype.render=function(){var e=this,t=e.header,n=e.message,i=e.options,o=e.subHeader;var r=o!==undefined||n!==undefined;return h(Host,{class:getIonMode(this)},h("ion-list",null,t!==undefined&&h("ion-list-header",null,t),r&&h("ion-item",null,h("ion-label",{class:"ion-text-wrap"},o!==undefined&&h("h3",null,o),n!==undefined&&h("p",null,n))),this.renderOptions(i)))};return e}();SelectPopover.style={ios:selectPopoverIosCss,md:selectPopoverMdCss};export{Select as ion_select,SelectOption as ion_select_option,SelectPopover as ion_select_popover};