var __awaiter=this&&this.__awaiter||function(e,t,r,n){function o(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function s(e){try{l(n.next(e))}catch(e){i(e)}}function a(e){try{l(n["throw"](e))}catch(e){i(e)}}function l(e){e.done?r(e.value):o(e.value).then(s,a)}l((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(e){return function(t){return l([e,t])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,o&&(i=s[0]&2?o["return"]:s[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,s[1])).done)return i;if(o=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;o=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){r.label=s[1];break}if(s[0]===6&&r.label<i[1]){r.label=i[1];i=s;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(s);break}if(i[2])r.ops.pop();r.trys.pop();continue}s=t.call(e,r)}catch(e){s=[6,e];o=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */System.register(["./p-492d5033.system.js","./p-364f93fe.system.js","./p-8828dd78.system.js","./p-63b93eb8.system.js","./p-d020342e.system.js","./p-4e7305c8.system.js","./p-5c49b484.system.js"],(function(e,t){"use strict";var r,n,o,i,s,a,l,c,u,h,d,f,p,v;return{setters:[function(e){r=e.r;n=e.h;o=e.H;i=e.i;s=e.e},function(e){a=e.j;l=e.k},function(e){c=e.b},function(e){u=e.f;h=e.g},function(e){d=e.r},function(e){f=e.a;p=e.b;v=e.h},function(){}],execute:function(){var m=":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:34px;opacity:0.4}";var b=":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:31px;opacity:0.3}";var y=e("ion_reorder",function(){function e(e){r(this,e)}e.prototype.onClick=function(e){var t=this.el.closest("ion-reorder-group");e.preventDefault();if(!t||!t.disabled){e.stopImmediatePropagation()}};e.prototype.render=function(){var e=c(this);var t=e==="ios"?a:l;return n(o,{class:e},n("slot",null,n("ion-icon",{icon:t,lazy:false,class:"reorder-icon",part:"icon"})))};Object.defineProperty(e.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});return e}());y.style={ios:m,md:b};var g=".reorder-list-active>*{display:block;-webkit-transition:-webkit-transform 300ms;transition:-webkit-transform 300ms;transition:transform 300ms;transition:transform 300ms, -webkit-transform 300ms;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none !important;transition:none !important;-webkit-box-shadow:0 0 10px rgba(0, 0, 0, 0.4);box-shadow:0 0 10px rgba(0, 0, 0, 0.4);opacity:0.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}";var x=e("ion_reorder_group",function(){function e(e){r(this,e);this.ionItemReorder=s(this,"ionItemReorder",7);this.lastToIndex=-1;this.cachedHeights=[];this.scrollElTop=0;this.scrollElBottom=0;this.scrollElInitial=0;this.containerTop=0;this.containerBottom=0;this.state=0;this.disabled=true}e.prototype.disabledChanged=function(){if(this.gesture){this.gesture.enable(!this.disabled)}};e.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var e,r,n;var o=this;return __generator(this,(function(i){switch(i.label){case 0:e=u(this.el);if(!e)return[3,2];r=this;return[4,h(e)];case 1:r.scrollEl=i.sent();i.label=2;case 2:n=this;return[4,t.import("./p-c3da26fd.system.js")];case 3:n.gesture=i.sent().createGesture({el:this.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:false,canStart:function(e){return o.canStart(e)},onStart:function(e){return o.onStart(e)},onMove:function(e){return o.onMove(e)},onEnd:function(){return o.onEnd()}});this.disabledChanged();return[2]}}))}))};e.prototype.disconnectedCallback=function(){this.onEnd();if(this.gesture){this.gesture.destroy();this.gesture=undefined}};e.prototype.complete=function(e){return Promise.resolve(this.completeReorder(e))};e.prototype.canStart=function(e){if(this.selectedItemEl||this.state!==0){return false}var t=e.event.target;var r=t.closest("ion-reorder");if(!r){return false}var n=w(r,this.el);if(!n){return false}e.data=n;return true};e.prototype.onStart=function(e){e.event.preventDefault();var t=this.selectedItemEl=e.data;var r=this.cachedHeights;r.length=0;var n=this.el;var o=n.children;if(!o||o.length===0){return}var i=0;for(var s=0;s<o.length;s++){var a=o[s];i+=a.offsetHeight;r.push(i);a.$ionIndex=s}var l=n.getBoundingClientRect();this.containerTop=l.top;this.containerBottom=l.bottom;if(this.scrollEl){var c=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop;this.scrollElTop=c.top+I;this.scrollElBottom=c.bottom-I}else{this.scrollElInitial=0;this.scrollElTop=0;this.scrollElBottom=0}this.lastToIndex=E(t);this.selectedItemHeight=t.offsetHeight;this.state=1;t.classList.add(T);f()};e.prototype.onMove=function(e){var t=this.selectedItemEl;if(!t){return}var r=this.autoscroll(e.currentY);var n=this.containerTop-r;var o=this.containerBottom-r;var i=Math.max(n,Math.min(e.currentY,o));var s=r+i-e.startY;var a=i-n;var l=this.itemIndexForTop(a);if(l!==this.lastToIndex){var c=E(t);this.lastToIndex=l;p();this.reorderMove(c,l)}t.style.transform="translateY(".concat(s,"px)")};e.prototype.onEnd=function(){var e=this.selectedItemEl;this.state=2;if(!e){this.state=0;return}var t=this.lastToIndex;var r=E(e);if(t===r){this.completeReorder()}else{this.ionItemReorder.emit({from:r,to:t,complete:this.completeReorder.bind(this)})}v()};e.prototype.completeReorder=function(e){var t=this;var r=this.selectedItemEl;if(r&&this.state===2){var n=this.el.children;var o=n.length;var i=this.lastToIndex;var s=E(r);d((function(){if(i!==s&&(e===undefined||e===true)){var a=s<i?n[i+1]:n[i];t.el.insertBefore(r,a)}for(var l=0;l<o;l++){n[l].style["transform"]=""}}));if(Array.isArray(e)){e=_(e,s,i)}r.style.transition="";r.classList.remove(T);this.selectedItemEl=undefined;this.state=0}return e};e.prototype.itemIndexForTop=function(e){var t=this.cachedHeights;for(var r=0;r<t.length;r++){if(t[r]>e){return r}}return t.length-1};e.prototype.reorderMove=function(e,t){var r=this.selectedItemHeight;var n=this.el.children;for(var o=0;o<n.length;o++){var i=n[o].style;var s="";if(o>e&&o<=t){s="translateY(".concat(-r,"px)")}else if(o<e&&o>=t){s="translateY(".concat(r,"px)")}i["transform"]=s}};e.prototype.autoscroll=function(e){if(!this.scrollEl){return 0}var t=0;if(e<this.scrollElTop){t=-k}else if(e>this.scrollElBottom){t=k}if(t!==0){this.scrollEl.scrollBy(0,t)}return this.scrollEl.scrollTop-this.scrollElInitial};e.prototype.render=function(){var e;var t=c(this);return n(o,{class:(e={},e[t]=true,e["reorder-enabled"]=!this.disabled,e["reorder-list-active"]=this.state!==0,e)})};Object.defineProperty(e.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{disabled:["disabledChanged"]}},enumerable:false,configurable:true});return e}());var E=function(e){return e["$ionIndex"]};var w=function(e,t){var r;while(e){r=e.parentElement;if(r===t){return e}e=r}return undefined};var I=60;var k=10;var T="reorder-selected";var _=function(e,t,r){var n=e[t];e.splice(t,1);e.splice(r,0,n);return e.slice()};x.style=g}}}));