import{_registerComponent as t,registerVersion as e,_getProvider as n,getApp as r}from"https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";const o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let e=0;e<t.length;e+=3){const o=t[e],i=e+1<t.length,s=i?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,u=o>>2,h=(3&o)<<4|s>>4;let l=(15&s)<<2|c>>6,d=63&c;a||(d=64,i||(l=64)),r.push(n[u],n[h],n[l],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let o=t.charCodeAt(r);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=63&o|128):55296==(64512&o)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(o=65536+((1023&o)<<10)+(1023&t.charCodeAt(++r)),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=63&o|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=63&o|128)}return e}(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,r=0;for(;n<t.length;){const o=t[n++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const i=t[n++];e[r++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){const i=((7&o)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(i>>10)),e[r++]=String.fromCharCode(56320+(1023&i))}else{const i=t[n++],s=t[n++];e[r++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&s)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let e=0;e<t.length;){const o=n[t.charAt(e++)],s=e<t.length?n[t.charAt(e)]:0;++e;const a=e<t.length?n[t.charAt(e)]:64;++e;const c=e<t.length?n[t.charAt(e)]:64;if(++e,null==o||null==s||null==a||null==c)throw new i;const u=o<<2|s>>4;if(r.push(u),64!==a){const t=s<<4&240|a>>2;if(r.push(t),64!==c){const t=a<<6&192|c;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class i extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const s=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,a=()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&function(t){try{return o.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null}(t[1]);return e&&JSON.parse(e)},c=()=>{try{return s()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const t=process.env.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0})()||a()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},u=t=>{const e=(t=>{var e,n;return null===(n=null===(e=c())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]})(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]};class h extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,h.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,l.prototype.create)}}class l{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,o=this.errors[t],i=o?function(t,e){return t.replace(d,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}(o,n):"Error",s=`${this.serviceName}: ${i} (${r}).`;return new h(r,s,n)}}const d=/\{\$([^}]+)}/g;function f(t){return t&&t._delegate?t._delegate:t}class p{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}function g(t,e){const n={};for(const r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function E(t){if(null==t)return null;if(t instanceof Number&&(t=t.valueOf()),"number"==typeof t&&isFinite(t))return t;if(!0===t||!1===t)return t;if("[object String]"===Object.prototype.toString.call(t))return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map((t=>E(t)));if("function"==typeof t||"object"==typeof t)return g(t,(t=>E(t)));throw new Error("Data cannot be encoded in JSON: "+t)}function m(t){if(null==t)return t;if(t["@type"])switch(t["@type"]){case"type.googleapis.com/google.protobuf.Int64Value":case"type.googleapis.com/google.protobuf.UInt64Value":{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map((t=>m(t))):"function"==typeof t||"object"==typeof t?g(t,(t=>m(t))):t}const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends h{constructor(t,e,n){super(`functions/${t}`,e||""),this.details=n}}class A{constructor(t,e,n){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=t.getImmediate({optional:!0}),this.messaging=e.getImmediate({optional:!0}),this.auth||t.get().then((t=>this.auth=t),(()=>{})),this.messaging||e.get().then((t=>this.messaging=t),(()=>{})),this.appCheck||n.get().then((t=>this.appCheck=t),(()=>{}))}async getAuthToken(){if(this.auth)try{const t=await this.auth.getToken();return null==t?void 0:t.accessToken}catch(t){return}}async getMessagingToken(){if(this.messaging&&"Notification"in self&&"granted"===Notification.permission)try{return await this.messaging.getToken()}catch(t){return}}async getAppCheckToken(){if(this.appCheck){const t=await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(){return{authToken:await this.getAuthToken(),messagingToken:await this.getMessagingToken(),appCheckToken:await this.getAppCheckToken()}}}class S{constructor(t,e,n,r,o="us-central1",i){this.app=t,this.fetchImpl=i,this.emulatorOrigin=null,this.contextProvider=new A(e,n,r),this.cancelAllRequests=new Promise((t=>{this.deleteService=()=>Promise.resolve(t())}));try{const t=new URL(o);this.customDomain=t.origin,this.region="us-central1"}catch(t){this.customDomain=null,this.region=o}}_delete(){return this.deleteService()}_url(t){const e=this.app.options.projectId;if(null!==this.emulatorOrigin){return`${this.emulatorOrigin}/${e}/${this.region}/${t}`}return null!==this.customDomain?`${this.customDomain}/${t}`:`https://${this.region}-${e}.cloudfunctions.net/${t}`}}function T(t,e,n){return r=>function(t,e,n,r){const o=t._url(e);return C(t,o,n,r)}(t,e,r,n||{})}async function b(t,e,n,r){let o;n["Content-Type"]="application/json";try{o=await r(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch(t){return{status:0,json:null}}let i=null;try{i=await o.json()}catch(t){}return{status:o.status,json:i}}async function C(t,e,n,r){const o={data:n=E(n)},i={},s=await t.contextProvider.getContext();s.authToken&&(i.Authorization="Bearer "+s.authToken),s.messagingToken&&(i["Firebase-Instance-ID-Token"]=s.messagingToken),null!==s.appCheckToken&&(i["X-Firebase-AppCheck"]=s.appCheckToken);const a=function(t){let e=null;return{promise:new Promise(((n,r)=>{e=setTimeout((()=>{r(new y("deadline-exceeded","deadline-exceeded"))}),t)})),cancel:()=>{e&&clearTimeout(e)}}}(r.timeout||7e4),c=await Promise.race([b(e,o,i,t.fetchImpl),a.promise,t.cancelAllRequests]);if(a.cancel(),!c)throw new y("cancelled","Firebase Functions instance was deleted.");const u=function(t,e){let n,r=function(t){if(t>=200&&t<300)return"ok";switch(t){case 0:case 500:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}(t),o=r;try{const t=e&&e.error;if(t){const e=t.status;if("string"==typeof e){if(!_[e])return new y("internal","internal");r=_[e],o=e}const i=t.message;"string"==typeof i&&(o=i),n=t.details,void 0!==n&&(n=m(n))}}catch(t){}return"ok"===r?null:new y(r,o,n)}(c.status,c.json);if(u)throw u;if(!c.json)throw new y("internal","Response is not valid JSON object.");let h=c.json.data;if(void 0===h&&(h=c.json.result),void 0===h)throw new y("internal","Response is missing data field.");return{data:m(h)}}const D="@firebase/functions";function w(t=r(),e="us-central1"){const o=n(f(t),"functions").getImmediate({identifier:e}),i=u("functions");return i&&N(o,...i),o}function N(t,e,n){!function(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}(f(t),e,n)}function I(t,e,n){return T(f(t),e,n)}function O(t,e,n){return function(t,e,n){return r=>C(t,e,r,n||{})}(f(t),e,n)}var k,v;k=fetch.bind(self),t(new p("functions",((t,{instanceIdentifier:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),o=t.getProvider("messaging-internal"),i=t.getProvider("app-check-internal");return new S(n,r,o,i,e,k)}),"PUBLIC").setMultipleInstances(!0)),e(D,"0.9.4",v),e(D,"0.9.4","esm2017");export{N as connectFunctionsEmulator,w as getFunctions,I as httpsCallable,O as httpsCallableFromURL};

//# sourceMappingURL=firebase-functions.js.map
