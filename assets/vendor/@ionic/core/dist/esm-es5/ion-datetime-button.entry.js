import{__awaiter,__generator}from"tslib";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */import{r as registerInstance,h,H as Host,i as getElement}from"./index-8e692445.js";import{b as getIonMode}from"./ionic-global-c74e4951.js";import{a as addEventListener,c as componentOnReady}from"./helpers-3b390e48.js";import{b as printIonError}from"./index-c4b11676.js";import{c as createColorClasses}from"./theme-7670341c.js";import{q as parseDate,t as getToday,J as is24Hour,S as getLocalizedDateTime,G as getMonthAndYear,K as getLocalizedTime,T as getMonthDayAndYear}from"./data-cb72448c.js";var iosDatetimeButtonCss=":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host button{border-radius:8px;padding-left:12px;padding-right:12px;padding-top:6px;padding-bottom:6px;margin-left:2px;margin-right:2px;margin-top:0px;margin-bottom:0px;position:relative;-webkit-transition:150ms color ease-in-out;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host button{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host button{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}";var mdDatetimeButtonCss=":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host button{border-radius:8px;padding-left:12px;padding-right:12px;padding-top:6px;padding-bottom:6px;margin-left:2px;margin-right:2px;margin-top:0px;margin-bottom:0px;position:relative;-webkit-transition:150ms color ease-in-out;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host button{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host button{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}";var DatetimeButton=function(){function t(t){var e=this;registerInstance(this,t);this.datetimeEl=null;this.overlayEl=null;this.datetimePresentation="date-time";this.datetimeActive=false;this.color="primary";this.disabled=false;this.getParsedDateValues=function(t){if(t===""||t===undefined||t===null){return[]}if(Array.isArray(t)){return t}return[t]};this.setDateTimeText=function(){var t=e,i=t.datetimeEl,a=t.datetimePresentation;if(!i){return}var n=i.value,r=i.locale,o=i.hourCycle,s=i.preferWheel,d=i.multiple,l=i.titleSelectedDatesFormatter;var c=e.getParsedDateValues(n);var m=parseDate(c.length>0?c:[getToday()]);var p=m[0];var u=is24Hour(r,o);m.forEach((function(t){t.tzOffset=undefined}));e.dateText=e.timeText=undefined;switch(a){case"date-time":case"time-date":var g=getMonthDayAndYear(r,p);var h=getLocalizedTime(r,p,u);if(s){e.dateText="".concat(g," ").concat(h)}else{e.dateText=g;e.timeText=h}break;case"date":if(d&&c.length!==1){var f="".concat(c.length," days");if(l!==undefined){try{f=l(c)}catch(t){printIonError("Exception in provided `titleSelectedDatesFormatter`: ",t)}}e.dateText=f}else{e.dateText=getMonthDayAndYear(r,p)}break;case"time":e.timeText=getLocalizedTime(r,p,u);break;case"month-year":e.dateText=getMonthAndYear(r,p);break;case"month":e.dateText=getLocalizedDateTime(r,p,{month:"long"});break;case"year":e.dateText=getLocalizedDateTime(r,p,{year:"numeric"});break}};this.waitForDatetimeChanges=function(){return __awaiter(e,void 0,void 0,(function(){var t;return __generator(this,(function(e){t=this.datetimeEl;if(!t){return[2,Promise.resolve()]}return[2,new Promise((function(e){addEventListener(t,"ionRender",e,{once:true})}))]}))}))};this.handleDateClick=function(t){return __awaiter(e,void 0,void 0,(function(){var e,i,a,n,r;return __generator(this,(function(o){e=this,i=e.datetimeEl,a=e.datetimePresentation;if(!i){return[2]}n=false;switch(a){case"date-time":case"time-date":r=i.presentation!=="date";if(!i.preferWheel&&r){i.presentation="date";n=true}break}this.selectedButton="date";this.presentOverlay(t,n,this.dateTargetEl);return[2]}))}))};this.handleTimeClick=function(t){var i=e,a=i.datetimeEl,n=i.datetimePresentation;if(!a){return}var r=false;switch(n){case"date-time":case"time-date":var o=a.presentation!=="time";if(o){a.presentation="time";r=true}break}e.selectedButton="time";e.presentOverlay(t,r,e.timeTargetEl)};this.presentOverlay=function(t,i,a){return __awaiter(e,void 0,void 0,(function(){var e;return __generator(this,(function(n){switch(n.label){case 0:e=this.overlayEl;if(!e){return[2]}if(!(e.tagName==="ION-POPOVER"))return[3,3];if(!i)return[3,2];return[4,this.waitForDatetimeChanges()];case 1:n.sent();n.label=2;case 2:e.present(Object.assign(Object.assign({},t),{detail:{ionShadowTarget:a}}));return[3,4];case 3:e.present();n.label=4;case 4:return[2]}}))}))}}t.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,i,a;var n=this;return __generator(this,(function(r){t=this.datetime;if(!t){printIonError("An ID associated with an ion-datetime instance is required for ion-datetime-button to function properly.",this.el);return[2]}e=this.datetimeEl=document.getElementById(t);if(!e){printIonError("No ion-datetime instance found for ID '".concat(t,"'."),this.el);return[2]}i=new IntersectionObserver((function(t){var e=t[0];n.datetimeActive=e.isIntersecting}),{threshold:.01});i.observe(e);a=this.overlayEl=e.closest("ion-modal, ion-popover");if(a){a.classList.add("ion-datetime-button-overlay")}componentOnReady(e,(function(){var t=n.datetimePresentation=e.presentation||"date-time";n.setDateTimeText();addEventListener(e,"ionChange",n.setDateTimeText);switch(t){case"date-time":case"date":case"month-year":case"month":case"year":n.selectedButton="date";break;case"time-date":case"time":n.selectedButton="time";break}}));return[2]}))}))};t.prototype.render=function(){var t;var e=this;var i=this,a=i.color,n=i.dateText,r=i.timeText,o=i.selectedButton,s=i.datetimeActive,d=i.disabled;var l=getIonMode(this);return h(Host,{class:createColorClasses(a,(t={},t[l]=true,t["".concat(o,"-active")]=s,t["datetime-button-disabled"]=d,t))},n&&h("button",{class:"ion-activatable",id:"date-button","aria-expanded":s?"true":"false",onClick:this.handleDateClick,disabled:d,part:"native",ref:function(t){return e.dateTargetEl=t}},h("slot",{name:"date-target"},n),l==="md"&&h("ion-ripple-effect",null)),r&&h("button",{class:"ion-activatable",id:"time-button","aria-expanded":s?"true":"false",onClick:this.handleTimeClick,disabled:d,part:"native",ref:function(t){return e.timeTargetEl=t}},h("slot",{name:"time-target"},r),l==="md"&&h("ion-ripple-effect",null)))};Object.defineProperty(t.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});return t}();DatetimeButton.style={ios:iosDatetimeButtonCss,md:mdDatetimeButtonCss};export{DatetimeButton as ion_datetime_button};