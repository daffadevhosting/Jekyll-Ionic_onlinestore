import{__awaiter,__extends,__generator,__spreadArray}from"tslib";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */var NAMESPACE="ionic";var scopeId;var contentRef;var hostTagName;var useNativeShadowDom=false;var checkSlotFallbackVisibility=false;var checkSlotRelocate=false;var isSvgMode=false;var queuePending=false;var win=typeof window!=="undefined"?window:{};var doc=win.document||{head:{}};var plt={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)},ce:function(e,t){return new CustomEvent(e,t)}};var setPlatformHelpers=function(e){Object.assign(plt,e)};var supportsShadow=true;var promiseResolve=function(e){return Promise.resolve(e)};var supportsConstructableStylesheets=function(){try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(e){}return false}();var addHostEventListeners=function(e,t,r,n){if(r){r.map((function(r){var n=r[0],a=r[1],o=r[2];var s=getHostListenerTarget(e,n);var i=hostListenerProxy(t,o);var l=hostListenerOpts(n);plt.ael(s,a,i,l);(t.$rmListeners$=t.$rmListeners$||[]).push((function(){return plt.rel(s,a,i,l)}))}))}};var hostListenerProxy=function(e,t){return function(r){try{{if(e.$flags$&256){e.$lazyInstance$[t](r)}else{(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,r])}}}catch(e){consoleError(e)}}};var getHostListenerTarget=function(e,t){if(t&4)return doc;if(t&8)return win;if(t&16)return doc.body;return e};var hostListenerOpts=function(e){return(e&2)!==0};var CONTENT_REF_ID="r";var ORG_LOCATION_ID="o";var SLOT_NODE_ID="s";var TEXT_NODE_ID="t";var HYDRATE_ID="s-id";var HYDRATED_STYLE_ID="sty-id";var HYDRATE_CHILD_ID="c-id";var HYDRATED_CSS="{visibility:hidden}.hydrated{visibility:inherit}";var XLINK_NS="http://www.w3.org/1999/xlink";var createTime=function(e,t){if(t===void 0){t=""}{return function(){return}}};var uniqueTime=function(e,t){{return function(){return}}};var rootAppliedStyles=new WeakMap;var registerStyle=function(e,t,r){var n=styles.get(e);if(supportsConstructableStylesheets&&r){n=n||new CSSStyleSheet;if(typeof n==="string"){n=t}else{n.replaceSync(t)}}else{n=t}styles.set(e,n)};var addStyle=function(e,t,r,n){var a=getScopeId(t,r);var o=styles.get(a);e=e.nodeType===11?e:doc;if(o){if(typeof o==="string"){e=e.head||e;var s=rootAppliedStyles.get(e);var i=void 0;if(!s){rootAppliedStyles.set(e,s=new Set)}if(!s.has(a)){if(e.host&&(i=e.querySelector("[".concat(HYDRATED_STYLE_ID,'="').concat(a,'"]')))){i.innerHTML=o}else{{i=doc.createElement("style");i.innerHTML=o}e.insertBefore(i,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(o)){e.adoptedStyleSheets=__spreadArray(__spreadArray([],e.adoptedStyleSheets,true),[o],false)}}return a};var attachStyles=function(e){var t=e.$cmpMeta$;var r=e.$hostElement$;var n=t.$flags$;var a=createTime("attachStyles",t.$tagName$);var o=addStyle(r.shadowRoot?r.shadowRoot:r.getRootNode(),t,e.$modeName$);if(n&10){r["s-sc"]=o;r.classList.add(o+"-h");if(n&2){r.classList.add(o+"-s")}}a()};var getScopeId=function(e,t){return"sc-"+(t&&e.$flags$&32?e.$tagName$+"-"+t:e.$tagName$)};var convertScopedToShadow=function(e){return e.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g,"$1{")};var computeMode=function(e){return modeResolutionChain.map((function(t){return t(e)})).find((function(e){return!!e}))};var setMode=function(e){return modeResolutionChain.push(e)};var getMode=function(e){return getHostRef(e).$modeName$};var EMPTY_OBJ={};var SVG_NS="http://www.w3.org/2000/svg";var HTML_NS="http://www.w3.org/1999/xhtml";var isDef=function(e){return e!=null};var isComplexType=function(e){e=typeof e;return e==="object"||e==="function"};var h=function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var o=null;var s=null;var i=false;var l=false;var $=[];var c=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){c(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!isComplexType(a)){a=String(a)}if(i&&l){$[$.length-1].$text$+=a}else{$.push(i?newVNode(null,a):a)}l=i}}};c(r);if(t){if(t.key){o=t.key}if(t.name){s=t.name}{var f=t.className||t.class;if(f){t.class=typeof f!=="object"?f:Object.keys(f).filter((function(e){return f[e]})).join(" ")}}}if(typeof e==="function"){return e(t===null?{}:t,$,vdomFnUtils)}var u=newVNode(e,null);u.$attrs$=t;if($.length>0){u.$children$=$}{u.$key$=o}{u.$name$=s}return u};var newVNode=function(e,t){var r={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};{r.$attrs$=null}{r.$key$=null}{r.$name$=null}return r};var Host={};var isHost=function(e){return e&&e.$tag$===Host};var vdomFnUtils={forEach:function(e,t){return e.map(convertToPublic).forEach(t)},map:function(e,t){return e.map(convertToPublic).map(t).map(convertToPrivate)}};var convertToPublic=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var convertToPrivate=function(e){if(typeof e.vtag==="function"){var t=Object.assign({},e.vattrs);if(e.vkey){t.key=e.vkey}if(e.vname){t.name=e.vname}return h.apply(void 0,__spreadArray([e.vtag,t],e.vchildren||[],false))}var r=newVNode(e.vtag,e.vtext);r.$attrs$=e.vattrs;r.$children$=e.vchildren;r.$key$=e.vkey;r.$name$=e.vname;return r};var setAccessor=function(e,t,r,n,a,o){if(r!==n){var s=isMemberInElement(e,t);var i=t.toLowerCase();if(t==="class"){var l=e.classList;var $=parseClassList(r);var c=parseClassList(n);l.remove.apply(l,$.filter((function(e){return e&&!c.includes(e)})));l.add.apply(l,c.filter((function(e){return e&&!$.includes(e)})))}else if(t==="style"){{for(var f in r){if(!n||n[f]==null){if(f.includes("-")){e.style.removeProperty(f)}else{e.style[f]=""}}}}for(var f in n){if(!r||n[f]!==r[f]){if(f.includes("-")){e.style.setProperty(f,n[f])}else{e.style[f]=n[f]}}}}else if(t==="key");else if(t==="ref"){if(n){n(e)}}else if(!s&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(isMemberInElement(win,i)){t=i.slice(2)}else{t=i[2]+t.slice(3)}if(r){plt.rel(e,t,r,false)}if(n){plt.ael(e,t,n,false)}}else{var u=isComplexType(n);if((s||u&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var d=n==null?"":n;if(t==="list"){s=false}else if(r==null||e[t]!=d){e[t]=d}}else{e[t]=n}}catch(e){}}var v=false;{if(i!==(i=i.replace(/^xlink\:?/,""))){t=i;v=true}}if(n==null||n===false){if(n!==false||e.getAttribute(t)===""){if(v){e.removeAttributeNS(XLINK_NS,t)}else{e.removeAttribute(t)}}}else if((!s||o&4||a)&&!u){n=n===true?"":n;if(v){e.setAttributeNS(XLINK_NS,t,n)}else{e.setAttribute(t,n)}}}}};var parseClassListRegex=/\s/;var parseClassList=function(e){return!e?[]:e.split(parseClassListRegex)};var updateElement=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var o=e&&e.$attrs$||EMPTY_OBJ;var s=t.$attrs$||EMPTY_OBJ;{for(n in o){if(!(n in s)){setAccessor(a,n,o[n],undefined,r,t.$flags$)}}}for(n in s){setAccessor(a,n,o[n],s[n],r,t.$flags$)}};var createElm=function(e,t,r,n){var a=t.$children$[r];var o=0;var s;var i;var l;if(!useNativeShadowDom){checkSlotRelocate=true;if(a.$tag$==="slot"){if(scopeId){n.classList.add(scopeId+"-s")}a.$flags$|=a.$children$?2:1}}if(a.$text$!==null){s=a.$elm$=doc.createTextNode(a.$text$)}else if(a.$flags$&1){s=a.$elm$=doc.createTextNode("")}else{if(!isSvgMode){isSvgMode=a.$tag$==="svg"}s=a.$elm$=doc.createElementNS(isSvgMode?SVG_NS:HTML_NS,a.$flags$&2?"slot-fb":a.$tag$);if(isSvgMode&&a.$tag$==="foreignObject"){isSvgMode=false}{updateElement(null,a,isSvgMode)}if(isDef(scopeId)&&s["s-si"]!==scopeId){s.classList.add(s["s-si"]=scopeId)}if(a.$children$){for(o=0;o<a.$children$.length;++o){i=createElm(e,a,o,s);if(i){s.appendChild(i)}}}{if(a.$tag$==="svg"){isSvgMode=false}else if(s.tagName==="foreignObject"){isSvgMode=true}}}{s["s-hn"]=hostTagName;if(a.$flags$&(2|1)){s["s-sr"]=true;s["s-cr"]=contentRef;s["s-sn"]=a.$name$||"";l=e&&e.$children$&&e.$children$[r];if(l&&l.$tag$===a.$tag$&&e.$elm$){putBackInOriginalLocation(e.$elm$,false)}}}return s};var putBackInOriginalLocation=function(e,t){plt.$flags$|=1;var r=e.childNodes;for(var n=r.length-1;n>=0;n--){var a=r[n];if(a["s-hn"]!==hostTagName&&a["s-ol"]){parentReferenceNode(a).insertBefore(a,referenceNode(a));a["s-ol"].remove();a["s-ol"]=undefined;checkSlotRelocate=true}if(t){putBackInOriginalLocation(a,t)}}plt.$flags$&=~1};var addVnodes=function(e,t,r,n,a,o){var s=e["s-cr"]&&e["s-cr"].parentNode||e;var i;if(s.shadowRoot&&s.tagName===hostTagName){s=s.shadowRoot}for(;a<=o;++a){if(n[a]){i=createElm(null,r,a,e);if(i){n[a].$elm$=i;s.insertBefore(i,referenceNode(t))}}}};var removeVnodes=function(e,t,r,n,a){for(;t<=r;++t){if(n=e[t]){a=n.$elm$;callNodeRefs(n);{checkSlotFallbackVisibility=true;if(a["s-ol"]){a["s-ol"].remove()}else{putBackInOriginalLocation(a,true)}}a.remove()}}};var updateChildren=function(e,t,r,n){var a=0;var o=0;var s=0;var i=0;var l=t.length-1;var $=t[0];var c=t[l];var f=n.length-1;var u=n[0];var d=n[f];var v;var p;while(a<=l&&o<=f){if($==null){$=t[++a]}else if(c==null){c=t[--l]}else if(u==null){u=n[++o]}else if(d==null){d=n[--f]}else if(isSameVnode($,u)){patch($,u);$=t[++a];u=n[++o]}else if(isSameVnode(c,d)){patch(c,d);c=t[--l];d=n[--f]}else if(isSameVnode($,d)){if($.$tag$==="slot"||d.$tag$==="slot"){putBackInOriginalLocation($.$elm$.parentNode,false)}patch($,d);e.insertBefore($.$elm$,c.$elm$.nextSibling);$=t[++a];d=n[--f]}else if(isSameVnode(c,u)){if($.$tag$==="slot"||d.$tag$==="slot"){putBackInOriginalLocation(c.$elm$.parentNode,false)}patch(c,u);e.insertBefore(c.$elm$,$.$elm$);c=t[--l];u=n[++o]}else{s=-1;{for(i=a;i<=l;++i){if(t[i]&&t[i].$key$!==null&&t[i].$key$===u.$key$){s=i;break}}}if(s>=0){p=t[s];if(p.$tag$!==u.$tag$){v=createElm(t&&t[o],r,s,e)}else{patch(p,u);t[s]=undefined;v=p.$elm$}u=n[++o]}else{v=createElm(t&&t[o],r,o,e);u=n[++o]}if(v){{parentReferenceNode($.$elm$).insertBefore(v,referenceNode($.$elm$))}}}}if(a>l){addVnodes(e,n[f+1]==null?null:n[f+1].$elm$,r,n,o,f)}else if(o>f){removeVnodes(t,a,l)}};var isSameVnode=function(e,t){if(e.$tag$===t.$tag$){if(e.$tag$==="slot"){return e.$name$===t.$name$}{return e.$key$===t.$key$}}return false};var referenceNode=function(e){return e&&e["s-ol"]||e};var parentReferenceNode=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var patch=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;var o=t.$tag$;var s=t.$text$;var i;if(s===null){{isSvgMode=o==="svg"?true:o==="foreignObject"?false:isSvgMode}{if(o==="slot");else{updateElement(e,t,isSvgMode)}}if(n!==null&&a!==null){updateChildren(r,n,t,a)}else if(a!==null){if(e.$text$!==null){r.textContent=""}addVnodes(r,null,t,a,0,a.length-1)}else if(n!==null){removeVnodes(n,0,n.length-1)}if(isSvgMode&&o==="svg"){isSvgMode=false}}else if(i=r["s-cr"]){i.parentNode.textContent=s}else if(e.$text$!==s){r.data=s}};var updateFallbackSlotVisibility=function(e){var t=e.childNodes;var r;var n;var a;var o;var s;var i;for(n=0,a=t.length;n<a;n++){r=t[n];if(r.nodeType===1){if(r["s-sr"]){s=r["s-sn"];r.hidden=false;for(o=0;o<a;o++){i=t[o].nodeType;if(t[o]["s-hn"]!==r["s-hn"]||s!==""){if(i===1&&s===t[o].getAttribute("slot")){r.hidden=true;break}}else{if(i===1||i===3&&t[o].textContent.trim()!==""){r.hidden=true;break}}}}updateFallbackSlotVisibility(r)}}};var relocateNodes=[];var relocateSlotContent=function(e){var t;var r;var n;var a;var o;var s;var i=0;var l=e.childNodes;var $=l.length;for(;i<$;i++){t=l[i];if(t["s-sr"]&&(r=t["s-cr"])&&r.parentNode){n=r.parentNode.childNodes;a=t["s-sn"];for(s=n.length-1;s>=0;s--){r=n[s];if(!r["s-cn"]&&!r["s-nr"]&&r["s-hn"]!==t["s-hn"]){if(isNodeLocatedInSlot(r,a)){o=relocateNodes.find((function(e){return e.$nodeToRelocate$===r}));checkSlotFallbackVisibility=true;r["s-sn"]=r["s-sn"]||a;if(o){o.$slotRefNode$=t}else{relocateNodes.push({$slotRefNode$:t,$nodeToRelocate$:r})}if(r["s-sr"]){relocateNodes.map((function(e){if(isNodeLocatedInSlot(e.$nodeToRelocate$,r["s-sn"])){o=relocateNodes.find((function(e){return e.$nodeToRelocate$===r}));if(o&&!e.$slotRefNode$){e.$slotRefNode$=o.$slotRefNode$}}}))}}else if(!relocateNodes.some((function(e){return e.$nodeToRelocate$===r}))){relocateNodes.push({$nodeToRelocate$:r})}}}}if(t.nodeType===1){relocateSlotContent(t)}}};var isNodeLocatedInSlot=function(e,t){if(e.nodeType===1){if(e.getAttribute("slot")===null&&t===""){return true}if(e.getAttribute("slot")===t){return true}return false}if(e["s-sn"]===t){return true}return t===""};var callNodeRefs=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.map(callNodeRefs)}};var renderVdom=function(e,t){var r=e.$hostElement$;var n=e.$cmpMeta$;var a=e.$vnode$||newVNode(null,null);var o=isHost(t)?t:h(null,null,t);hostTagName=r.tagName;if(n.$attrsToReflect$){o.$attrs$=o.$attrs$||{};n.$attrsToReflect$.map((function(e){var t=e[0],n=e[1];return o.$attrs$[n]=r[t]}))}o.$tag$=null;o.$flags$|=4;e.$vnode$=o;o.$elm$=a.$elm$=r.shadowRoot||r;{scopeId=r["s-sc"]}{contentRef=r["s-cr"];useNativeShadowDom=(n.$flags$&1)!==0;checkSlotFallbackVisibility=false}patch(a,o);{plt.$flags$|=1;if(checkSlotRelocate){relocateSlotContent(o.$elm$);var s=void 0;var i=void 0;var l=void 0;var $=void 0;var c=void 0;var f=void 0;var u=0;for(;u<relocateNodes.length;u++){s=relocateNodes[u];i=s.$nodeToRelocate$;if(!i["s-ol"]){l=doc.createTextNode("");l["s-nr"]=i;i.parentNode.insertBefore(i["s-ol"]=l,i)}}for(u=0;u<relocateNodes.length;u++){s=relocateNodes[u];i=s.$nodeToRelocate$;if(s.$slotRefNode$){$=s.$slotRefNode$.parentNode;c=s.$slotRefNode$.nextSibling;l=i["s-ol"];while(l=l.previousSibling){f=l["s-nr"];if(f&&f["s-sn"]===i["s-sn"]&&$===f.parentNode){f=f.nextSibling;if(!f||!f["s-nr"]){c=f;break}}}if(!c&&$!==i.parentNode||i.nextSibling!==c){if(i!==c){if(!i["s-hn"]&&i["s-ol"]){i["s-hn"]=i["s-ol"].parentNode.nodeName}$.insertBefore(i,c)}}}else{if(i.nodeType===1){i.hidden=true}}}}if(checkSlotFallbackVisibility){updateFallbackSlotVisibility(o.$elm$)}plt.$flags$&=~1;relocateNodes.length=0}};var getElement=function(e){return getHostRef(e).$hostElement$};var createEvent=function(e,t,r){var n=getElement(e);return{emit:function(e){return emitEvent(n,t,{bubbles:!!(r&4),composed:!!(r&2),cancelable:!!(r&1),detail:e})}}};var emitEvent=function(e,t,r){var n=plt.ce(t,r);e.dispatchEvent(n);return n};var attachToAncestor=function(e,t){if(t&&!e.$onRenderResolve$&&t["s-p"]){t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))}};var scheduleUpdate=function(e,t){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}attachToAncestor(e,e.$ancestorComponent$);var r=function(){return dispatchHooks(e,t)};return writeTask(r)};var dispatchHooks=function(e,t){var r=createTime("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$lazyInstance$;var a;if(t){{e.$flags$|=256;if(e.$queuedListeners$){e.$queuedListeners$.map((function(e){var t=e[0],r=e[1];return safeCall(n,t,r)}));e.$queuedListeners$=null}}{a=safeCall(n,"componentWillLoad")}}{a=then(a,(function(){return safeCall(n,"componentWillRender")}))}r();return then(a,(function(){return updateComponent(e,n,t)}))};var updateComponent=function(e,t,r){return __awaiter(void 0,void 0,void 0,(function(){var n,a,o,s,i,l;return __generator(this,(function($){n=e.$hostElement$;a=createTime("update",e.$cmpMeta$.$tagName$);o=n["s-rc"];if(r){attachStyles(e)}s=createTime("render",e.$cmpMeta$.$tagName$);{callRender(e,t)}if(o){o.map((function(e){return e()}));n["s-rc"]=undefined}s();a();{i=n["s-p"];l=function(){return postUpdateComponent(e)};if(i.length===0){l()}else{Promise.all(i).then(l);e.$flags$|=4;i.length=0}}return[2]}))}))};var callRender=function(e,t,r){try{t=t.render&&t.render();{e.$flags$&=~16}{e.$flags$|=2}{{{renderVdom(e,t)}}}}catch(t){consoleError(t,e.$hostElement$)}return null};var postUpdateComponent=function(e){var t=e.$cmpMeta$.$tagName$;var r=e.$hostElement$;var n=createTime("postUpdate",t);var a=e.$lazyInstance$;var o=e.$ancestorComponent$;{safeCall(a,"componentDidRender")}if(!(e.$flags$&64)){e.$flags$|=64;{addHydratedFlag(r)}{safeCall(a,"componentDidLoad")}n();{e.$onReadyResolve$(r);if(!o){appDidLoad()}}}else{{safeCall(a,"componentDidUpdate")}n()}{e.$onInstanceResolve$(r)}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){nextTick((function(){return scheduleUpdate(e,false)}))}e.$flags$&=~(4|512)}};var forceUpdate=function(e){{var t=getHostRef(e);var r=t.$hostElement$.isConnected;if(r&&(t.$flags$&(2|16))===2){scheduleUpdate(t,false)}return r}};var appDidLoad=function(e){{addHydratedFlag(doc.documentElement)}nextTick((function(){return emitEvent(win,"appload",{detail:{namespace:NAMESPACE}})}))};var safeCall=function(e,t,r){if(e&&e[t]){try{return e[t](r)}catch(e){consoleError(e)}}return undefined};var then=function(e,t){return e&&e.then?e.then(t):t()};var addHydratedFlag=function(e){return e.classList.add("hydrated")};var initializeClientHydrate=function(e,t,r,n){var a=createTime("hydrateClient",t);var o=e.shadowRoot;var s=[];var i=[];var l=o?[]:null;var $=n.$vnode$=newVNode(t,null);if(!plt.$orgLocNodes$){initializeDocumentHydrate(doc.body,plt.$orgLocNodes$=new Map)}e[HYDRATE_ID]=r;e.removeAttribute(HYDRATE_ID);clientHydrate($,s,i,l,e,e,r);s.map((function(e){var r=e.$hostId$+"."+e.$nodeId$;var n=plt.$orgLocNodes$.get(r);var a=e.$elm$;if(n&&supportsShadow&&n["s-en"]===""){n.parentNode.insertBefore(a,n.nextSibling)}if(!o){a["s-hn"]=t;if(n){a["s-ol"]=n;a["s-ol"]["s-nr"]=a}}plt.$orgLocNodes$.delete(r)}));if(o){l.map((function(e){if(e){o.appendChild(e)}}))}a()};var clientHydrate=function(e,t,r,n,a,o,s){var i;var l;var $;var c;if(o.nodeType===1){i=o.getAttribute(HYDRATE_CHILD_ID);if(i){l=i.split(".");if(l[0]===s||l[0]==="0"){$={$flags$:0,$hostId$:l[0],$nodeId$:l[1],$depth$:l[2],$index$:l[3],$tag$:o.tagName.toLowerCase(),$elm$:o,$attrs$:null,$children$:null,$key$:null,$name$:null,$text$:null};t.push($);o.removeAttribute(HYDRATE_CHILD_ID);if(!e.$children$){e.$children$=[]}e.$children$[$.$index$]=$;e=$;if(n&&$.$depth$==="0"){n[$.$index$]=$.$elm$}}}for(c=o.childNodes.length-1;c>=0;c--){clientHydrate(e,t,r,n,a,o.childNodes[c],s)}if(o.shadowRoot){for(c=o.shadowRoot.childNodes.length-1;c>=0;c--){clientHydrate(e,t,r,n,a,o.shadowRoot.childNodes[c],s)}}}else if(o.nodeType===8){l=o.nodeValue.split(".");if(l[1]===s||l[1]==="0"){i=l[0];$={$flags$:0,$hostId$:l[1],$nodeId$:l[2],$depth$:l[3],$index$:l[4],$elm$:o,$attrs$:null,$children$:null,$key$:null,$name$:null,$tag$:null,$text$:null};if(i===TEXT_NODE_ID){$.$elm$=o.nextSibling;if($.$elm$&&$.$elm$.nodeType===3){$.$text$=$.$elm$.textContent;t.push($);o.remove();if(!e.$children$){e.$children$=[]}e.$children$[$.$index$]=$;if(n&&$.$depth$==="0"){n[$.$index$]=$.$elm$}}}else if($.$hostId$===s){if(i===SLOT_NODE_ID){$.$tag$="slot";if(l[5]){o["s-sn"]=$.$name$=l[5]}else{o["s-sn"]=""}o["s-sr"]=true;if(n){$.$elm$=doc.createElement($.$tag$);if($.$name$){$.$elm$.setAttribute("name",$.$name$)}o.parentNode.insertBefore($.$elm$,o);o.remove();if($.$depth$==="0"){n[$.$index$]=$.$elm$}}r.push($);if(!e.$children$){e.$children$=[]}e.$children$[$.$index$]=$}else if(i===CONTENT_REF_ID){if(n){o.remove()}else{a["s-cr"]=o;o["s-cn"]=true}}}}}else if(e&&e.$tag$==="style"){var f=newVNode(null,o.textContent);f.$elm$=o;f.$index$="0";e.$children$=[f]}};var initializeDocumentHydrate=function(e,t){if(e.nodeType===1){var r=0;for(;r<e.childNodes.length;r++){initializeDocumentHydrate(e.childNodes[r],t)}if(e.shadowRoot){for(r=0;r<e.shadowRoot.childNodes.length;r++){initializeDocumentHydrate(e.shadowRoot.childNodes[r],t)}}}else if(e.nodeType===8){var n=e.nodeValue.split(".");if(n[0]===ORG_LOCATION_ID){t.set(n[1]+"."+n[2],e);e.nodeValue="";e["s-en"]=n[3]}}};var parsePropertyValue=function(e,t){if(e!=null&&!isComplexType(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&2){return parseFloat(e)}if(t&1){return String(e)}return e}return e};var getValue=function(e,t){return getHostRef(e).$instanceValues$.get(t)};var setValue=function(e,t,r,n){var a=getHostRef(e);var o=a.$hostElement$;var s=a.$instanceValues$.get(t);var i=a.$flags$;var l=a.$lazyInstance$;r=parsePropertyValue(r,n.$members$[t][0]);var $=Number.isNaN(s)&&Number.isNaN(r);var c=r!==s&&!$;if((!(i&8)||s===undefined)&&c){a.$instanceValues$.set(t,r);if(l){if(n.$watchers$&&i&128){var f=n.$watchers$[t];if(f){f.map((function(e){try{l[e](r,s,t)}catch(e){consoleError(e,o)}}))}}if((i&(2|16))===2){scheduleUpdate(a,false)}}}};var proxyComponent=function(e,t,r){if(t.$members$){if(e.watchers){t.$watchers$=e.watchers}var n=Object.entries(t.$members$);var a=e.prototype;n.map((function(e){var n=e[0],o=e[1][0];if(o&31||r&2&&o&32){Object.defineProperty(a,n,{get:function(){return getValue(this,n)},set:function(e){setValue(this,n,e,t)},configurable:true,enumerable:true})}else if(r&1&&o&64){Object.defineProperty(a,n,{value:function(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}var r=getHostRef(this);return r.$onInstancePromise$.then((function(){var t;return(t=r.$lazyInstance$)[n].apply(t,e)}))}})}}));if(r&1){var o=new Map;a.attributeChangedCallback=function(e,t,r){var n=this;plt.jmp((function(){var t=o.get(e);if(n.hasOwnProperty(t)){r=n[t];delete n[t]}else if(a.hasOwnProperty(t)&&typeof n[t]==="number"&&n[t]==r){return}n[t]=r===null&&typeof n[t]==="boolean"?false:r}))};e.observedAttributes=n.filter((function(e){var t=e[0],r=e[1];return r[0]&15})).map((function(e){var r=e[0],n=e[1];var a=n[1]||r;o.set(a,r);if(n[0]&512){t.$attrsToReflect$.push([r,a])}return a}))}}return e};var initializeComponent=function(e,t,r,n,a){return __awaiter(void 0,void 0,void 0,(function(){var n,o,s,i,l,$,c;return __generator(this,(function(f){switch(f.label){case 0:if(!((t.$flags$&32)===0))return[3,3];t.$flags$|=32;a=loadModule(r);if(!a.then)return[3,2];n=uniqueTime();return[4,a];case 1:a=f.sent();n();f.label=2;case 2:if(!a.isProxied){{r.$watchers$=a.watchers}proxyComponent(a,r,2);a.isProxied=true}o=createTime("createInstance",r.$tagName$);{t.$flags$|=8}try{new a(t)}catch(e){consoleError(e)}{t.$flags$&=~8}{t.$flags$|=128}o();fireConnectedCallback(t.$lazyInstance$);if(a.style){s=a.style;if(typeof s!=="string"){s=s[t.$modeName$=computeMode(e)]}i=getScopeId(r,t.$modeName$);if(!styles.has(i)){l=createTime("registerStyles",r.$tagName$);registerStyle(i,s,!!(r.$flags$&1));l()}}f.label=3;case 3:$=t.$ancestorComponent$;c=function(){return scheduleUpdate(t,true)};if($&&$["s-rc"]){$["s-rc"].push(c)}else{c()}return[2]}}))}))};var fireConnectedCallback=function(e){{safeCall(e,"connectedCallback")}};var connectedCallback=function(e){if((plt.$flags$&1)===0){var t=getHostRef(e);var r=t.$cmpMeta$;var n=createTime("connectedCallback",r.$tagName$);if(!(t.$flags$&1)){t.$flags$|=1;var a=void 0;{a=e.getAttribute(HYDRATE_ID);if(a){if(r.$flags$&1){var o=addStyle(e.shadowRoot,r,e.getAttribute("s-mode"));e.classList.remove(o+"-h",o+"-s")}initializeClientHydrate(e,r.$tagName$,a,t)}}if(!a){if(r.$flags$&(4|8)){setContentReference(e)}}{var s=e;while(s=s.parentNode||s.host){if(s.nodeType===1&&s.hasAttribute("s-id")&&s["s-p"]||s["s-p"]){attachToAncestor(t,t.$ancestorComponent$=s);break}}}if(r.$members$){Object.entries(r.$members$).map((function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}}))}{nextTick((function(){return initializeComponent(e,t,r)}))}}else{addHostEventListeners(e,t,r.$listeners$);fireConnectedCallback(t.$lazyInstance$)}n()}};var setContentReference=function(e){var t=e["s-cr"]=doc.createComment("");t["s-cn"]=true;e.insertBefore(t,e.firstChild)};var disconnectedCallback=function(e){if((plt.$flags$&1)===0){var t=getHostRef(e);var r=t.$lazyInstance$;{if(t.$rmListeners$){t.$rmListeners$.map((function(e){return e()}));t.$rmListeners$=undefined}}{safeCall(r,"disconnectedCallback")}}};var bootstrapLazy=function(e,t){if(t===void 0){t={}}var r=createTime();var n=[];var a=t.exclude||[];var o=win.customElements;var s=doc.head;var i=s.querySelector("meta[charset]");var l=doc.createElement("style");var $=[];var c=doc.querySelectorAll("[".concat(HYDRATED_STYLE_ID,"]"));var f;var u=true;var d=0;Object.assign(plt,t);plt.$resourcesUrl$=new URL(t.resourcesUrl||"./",doc.baseURI).href;{plt.$flags$|=2}{for(;d<c.length;d++){registerStyle(c[d].getAttribute(HYDRATED_STYLE_ID),convertScopedToShadow(c[d].innerHTML),true)}}e.map((function(e){e[1].map((function(t){var r={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{r.$members$=t[2]}{r.$listeners$=t[3]}{r.$attrsToReflect$=[]}{r.$watchers$={}}var s=r.$tagName$;var i=function(e){__extends(t,e);function t(t){var n=e.call(this,t)||this;t=n;registerHost(t,r);if(r.$flags$&1){{{t.attachShadow({mode:"open",delegatesFocus:!!(r.$flags$&16)})}}}return n}t.prototype.connectedCallback=function(){var e=this;if(f){clearTimeout(f);f=null}if(u){$.push(this)}else{plt.jmp((function(){return connectedCallback(e)}))}};t.prototype.disconnectedCallback=function(){var e=this;plt.jmp((function(){return disconnectedCallback(e)}))};t.prototype.componentOnReady=function(){return getHostRef(this).$onReadyPromise$};return t}(HTMLElement);r.$lazyBundleId$=e[0];if(!a.includes(s)&&!o.get(s)){n.push(s);o.define(s,proxyComponent(i,r,1))}}))}));{l.innerHTML=n+HYDRATED_CSS;l.setAttribute("data-styles","");s.insertBefore(l,i?i.nextSibling:s.firstChild)}u=false;if($.length){$.map((function(e){return e.connectedCallback()}))}else{{plt.jmp((function(){return f=setTimeout(appDidLoad,30)}))}}r()};var getAssetPath=function(e){var t=new URL(e,plt.$resourcesUrl$);return t.origin!==win.location.origin?t.href:t.pathname};var hostRefs=new WeakMap;var getHostRef=function(e){return hostRefs.get(e)};var registerInstance=function(e,t){return hostRefs.set(t.$lazyInstance$=e,t)};var registerHost=function(e,t){var r={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};{r.$onInstancePromise$=new Promise((function(e){return r.$onInstanceResolve$=e}))}{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}addHostEventListeners(e,r,t.$listeners$);return hostRefs.set(e,r)};var isMemberInElement=function(e,t){return t in e};var consoleError=function(e,t){return(0,console.error)(e,t)};var cmpModules=new Map;var loadModule=function(e,t,r){var n=e.$tagName$.replace(/-/g,"_");var a=e.$lazyBundleId$;var o=cmpModules.get(a);if(o){return o[n]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return import("./".concat(a,".entry.js").concat("")).then((function(e){{cmpModules.set(a,e)}return e[n]}),consoleError)};var styles=new Map;var modeResolutionChain=[];var queueDomReads=[];var queueDomWrites=[];var queueTask=function(e,t){return function(r){e.push(r);if(!queuePending){queuePending=true;if(t&&plt.$flags$&4){nextTick(flush)}else{plt.raf(flush)}}}};var consume=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){consoleError(e)}}e.length=0};var flush=function(){consume(queueDomReads);{consume(queueDomWrites);if(queuePending=queueDomReads.length>0){plt.raf(flush)}}};var nextTick=function(e){return promiseResolve().then(e)};var readTask=queueTask(queueDomReads,false);var writeTask=queueTask(queueDomWrites,true);var Build={isDev:false,isBrowser:true,isServer:false,isTesting:false};export{Build as B,Host as H,NAMESPACE as N,setMode as a,bootstrapLazy as b,writeTask as c,doc as d,createEvent as e,readTask as f,getMode as g,h,getElement as i,forceUpdate as j,getAssetPath as k,promiseResolve as p,registerInstance as r,setPlatformHelpers as s,win as w};