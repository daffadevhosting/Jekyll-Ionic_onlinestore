import{__spreadArray}from"tslib";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */import{r as raf}from"./helpers-3b390e48.js";import{w as win}from"./index-33ffec25.js";var animationPrefix;var processKeyframes=function(e){e.forEach((function(e){for(var n in e){if(e.hasOwnProperty(n)){var r=e[n];if(n==="easing"){var t="animation-timing-function";e[t]=r;delete e[n]}else{var t=convertCamelCaseToHypen(n);if(t!==n){e[t]=r;delete e[n]}}}}}));return e};var convertCamelCaseToHypen=function(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()};var getAnimationPrefix=function(e){if(animationPrefix===undefined){var n=e.style.animationName!==undefined;var r=e.style.webkitAnimationName!==undefined;animationPrefix=!n&&r?"-webkit-":""}return animationPrefix};var setStyleProperty=function(e,n,r){var t=n.startsWith("animation")?getAnimationPrefix(e):"";e.style.setProperty(t+n,r)};var removeStyleProperty=function(e,n){var r=n.startsWith("animation")?getAnimationPrefix(e):"";e.style.removeProperty(r+n)};var animationEnd=function(e,n){var r;var t={passive:true};var a=function(){if(r){r()}};var i=function(r){if(e===r.target){a();n(r)}};if(e){e.addEventListener("webkitAnimationEnd",i,t);e.addEventListener("animationend",i,t);r=function(){e.removeEventListener("webkitAnimationEnd",i,t);e.removeEventListener("animationend",i,t)}}return a};var generateKeyframeRules=function(e){if(e===void 0){e=[]}return e.map((function(e){var n=e.offset;var r=[];for(var t in e){if(e.hasOwnProperty(t)&&t!=="offset"){r.push("".concat(t,": ").concat(e[t],";"))}}return"".concat(n*100,"% { ").concat(r.join(" ")," }")})).join(" ")};var keyframeIds=[];var generateKeyframeName=function(e){var n=keyframeIds.indexOf(e);if(n<0){n=keyframeIds.push(e)-1}return"ion-animation-".concat(n)};var getStyleContainer=function(e){var n=e.getRootNode!==undefined?e.getRootNode():e;return n.head||n};var createKeyframeStylesheet=function(e,n,r){var t;var a=getStyleContainer(r);var i=getAnimationPrefix(r);var o=a.querySelector("#"+e);if(o){return o}var f=((t=r.ownerDocument)!==null&&t!==void 0?t:document).createElement("style");f.id=e;f.textContent="@".concat(i,"keyframes ").concat(e," { ").concat(n," } @").concat(i,"keyframes ").concat(e,"-alt { ").concat(n," }");a.appendChild(f);return f};var addClassToArray=function(e,n){if(e===void 0){e=[]}if(n!==undefined){var r=Array.isArray(n)?n:[n];return __spreadArray(__spreadArray([],e,true),r,true)}return e};var createAnimation=function(e){var n;var r;var t;var a;var i;var o;var f=[];var u=[];var c=[];var s=false;var v;var l={};var d=[];var m=[];var y={};var p=0;var h=false;var g=false;var E;var P;var S;var A;var C=true;var T=false;var b=true;var w;var k;var x=false;var K=e;var _=[];var R=[];var I=[];var N=[];var D=[];var L=[];var F=[];var O=[];var W=[];var j=[];var H=typeof AnimationEffect==="function"||win!==undefined&&typeof win.AnimationEffect==="function";var M=typeof Element==="function"&&typeof Element.prototype.animate==="function"&&H;var $=100;var q=function(){return j};var z=function(e){N.forEach((function(n){n.destroy(e)}));Z(e);I.length=0;N.length=0;f.length=0;Q();s=false;b=true;return k};var Z=function(e){U();if(e){V()}};var B=function(){h=false;g=false;b=true;P=undefined;S=undefined;A=undefined;p=0;T=false;C=true;x=false};var G=function(){return p!==0&&!x};var J=function(e,n){var r=(n===null||n===void 0?void 0:n.oneTimeCallback)?R:_;r.push({c:e,o:n});return k};var Q=function(){_.length=0;R.length=0;return k};var U=function(){if(M){j.forEach((function(e){e.cancel()}));j.length=0}else{var e=I.slice();raf((function(){e.forEach((function(e){removeStyleProperty(e,"animation-name");removeStyleProperty(e,"animation-duration");removeStyleProperty(e,"animation-timing-function");removeStyleProperty(e,"animation-iteration-count");removeStyleProperty(e,"animation-delay");removeStyleProperty(e,"animation-play-state");removeStyleProperty(e,"animation-fill-mode");removeStyleProperty(e,"animation-direction")}))}))}};var V=function(){D.forEach((function(e){if(e===null||e===void 0?void 0:e.parentNode){e.parentNode.removeChild(e)}}));D.length=0};var X=function(e){L.push(e);return k};var Y=function(e){F.push(e);return k};var ee=function(e){O.push(e);return k};var ne=function(e){W.push(e);return k};var re=function(e){u=addClassToArray(u,e);return k};var te=function(e){c=addClassToArray(c,e);return k};var ae=function(e){if(e===void 0){e={}}l=e;return k};var ie=function(e){if(e===void 0){e=[]}for(var n=0,r=e;n<r.length;n++){var t=r[n];l[t]=""}return k};var oe=function(e){d=addClassToArray(d,e);return k};var fe=function(e){m=addClassToArray(m,e);return k};var ue=function(e){if(e===void 0){e={}}y=e;return k};var ce=function(e){if(e===void 0){e=[]}for(var n=0,r=e;n<r.length;n++){var t=r[n];y[t]=""}return k};var se=function(){if(i!==undefined){return i}if(v){return v.getFill()}return"both"};var ve=function(){if(P!==undefined){return P}if(o!==undefined){return o}if(v){return v.getDirection()}return"normal"};var le=function(){if(h){return"linear"}if(t!==undefined){return t}if(v){return v.getEasing()}return"linear"};var de=function(){if(g){return 0}if(S!==undefined){return S}if(r!==undefined){return r}if(v){return v.getDuration()}return 0};var me=function(){if(a!==undefined){return a}if(v){return v.getIterations()}return 1};var ye=function(){if(A!==undefined){return A}if(n!==undefined){return n}if(v){return v.getDelay()}return 0};var pe=function(){return f};var he=function(e){o=e;Oe(true);return k};var ge=function(e){i=e;Oe(true);return k};var Ee=function(e){n=e;Oe(true);return k};var Pe=function(e){t=e;Oe(true);return k};var Se=function(e){if(!M&&e===0){e=1}r=e;Oe(true);return k};var Ae=function(e){a=e;Oe(true);return k};var Ce=function(e){v=e;return k};var Te=function(e){if(e!=null){if(e.nodeType===1){I.push(e)}else if(e.length>=0){for(var n=0;n<e.length;n++){I.push(e[n])}}else{console.error("Invalid addElement value")}}return k};var be=function(e){if(e!=null){if(Array.isArray(e)){for(var n=0,r=e;n<r.length;n++){var t=r[n];t.parent(k);N.push(t)}}else{e.parent(k);N.push(e)}}return k};var we=function(e){var n=f!==e;f=e;if(n){ke(f)}return k};var ke=function(e){if(M){q().forEach((function(n){if(n.effect.setKeyframes){n.effect.setKeyframes(e)}else{var r=new KeyframeEffect(n.effect.target,e,n.effect.getTiming());n.effect=r}}))}else{Re()}};var xe=function(){L.forEach((function(e){return e()}));F.forEach((function(e){return e()}));var e=u;var n=c;var r=l;I.forEach((function(t){var a=t.classList;e.forEach((function(e){return a.add(e)}));n.forEach((function(e){return a.remove(e)}));for(var i in r){if(r.hasOwnProperty(i)){setStyleProperty(t,i,r[i])}}}))};var Ke=function(){ze();O.forEach((function(e){return e()}));W.forEach((function(e){return e()}));var e=C?1:0;var n=d;var r=m;var t=y;I.forEach((function(e){var a=e.classList;n.forEach((function(e){return a.add(e)}));r.forEach((function(e){return a.remove(e)}));for(var i in t){if(t.hasOwnProperty(i)){setStyleProperty(e,i,t[i])}}}));_.forEach((function(n){return n.c(e,k)}));R.forEach((function(n){return n.c(e,k)}));R.length=0;b=true;if(C){T=true}C=true};var _e=function(){if(p===0){return}p--;if(p===0){Ke();if(v){v.animationFinish()}}};var Re=function(n){if(n===void 0){n=true}V();var r=processKeyframes(f);I.forEach((function(t){if(r.length>0){var a=generateKeyframeRules(r);w=e!==undefined?e:generateKeyframeName(a);var i=createKeyframeStylesheet(w,a,t);D.push(i);setStyleProperty(t,"animation-duration","".concat(de(),"ms"));setStyleProperty(t,"animation-timing-function",le());setStyleProperty(t,"animation-delay","".concat(ye(),"ms"));setStyleProperty(t,"animation-fill-mode",se());setStyleProperty(t,"animation-direction",ve());var o=me()===Infinity?"infinite":me().toString();setStyleProperty(t,"animation-iteration-count",o);setStyleProperty(t,"animation-play-state","paused");if(n){setStyleProperty(t,"animation-name","".concat(i.id,"-alt"))}raf((function(){setStyleProperty(t,"animation-name",i.id||null)}))}}))};var Ie=function(){I.forEach((function(e){var n=e.animate(f,{id:K,delay:ye(),duration:de(),easing:le(),iterations:me(),fill:se(),direction:ve()});n.pause();j.push(n)}));if(j.length>0){j[0].onfinish=function(){_e()}}};var Ne=function(e){if(e===void 0){e=true}xe();if(f.length>0){if(M){Ie()}else{Re(e)}}s=true};var De=function(e){e=Math.min(Math.max(e,0),.9999);if(M){j.forEach((function(n){n.currentTime=n.effect.getComputedTiming().delay+de()*e;n.pause()}))}else{var n="-".concat(de()*e,"ms");I.forEach((function(e){if(f.length>0){setStyleProperty(e,"animation-delay",n);setStyleProperty(e,"animation-play-state","paused")}}))}};var Le=function(e){j.forEach((function(e){e.effect.updateTiming({delay:ye(),duration:de(),easing:le(),iterations:me(),fill:se(),direction:ve()})}));if(e!==undefined){De(e)}};var Fe=function(e,n){if(e===void 0){e=true}raf((function(){I.forEach((function(r){setStyleProperty(r,"animation-name",w||null);setStyleProperty(r,"animation-duration","".concat(de(),"ms"));setStyleProperty(r,"animation-timing-function",le());setStyleProperty(r,"animation-delay",n!==undefined?"-".concat(n*de(),"ms"):"".concat(ye(),"ms"));setStyleProperty(r,"animation-fill-mode",se()||null);setStyleProperty(r,"animation-direction",ve()||null);var t=me()===Infinity?"infinite":me().toString();setStyleProperty(r,"animation-iteration-count",t);if(e){setStyleProperty(r,"animation-name","".concat(w,"-alt"))}raf((function(){setStyleProperty(r,"animation-name",w||null)}))}))}))};var Oe=function(e,n,r){if(e===void 0){e=false}if(n===void 0){n=true}if(e){N.forEach((function(t){t.update(e,n,r)}))}if(M){Le(r)}else{Fe(n,r)}return k};var We=function(e,n){if(e===void 0){e=false}N.forEach((function(r){r.progressStart(e,n)}));Me();h=e;if(!s){Ne()}Oe(false,true,n);return k};var je=function(e){N.forEach((function(n){n.progressStep(e)}));De(e);return k};var He=function(e,n,r){h=false;N.forEach((function(t){t.progressEnd(e,n,r)}));if(r!==undefined){S=r}T=false;C=true;if(e===0){P=ve()==="reverse"?"normal":"reverse";if(P==="reverse"){C=false}if(M){Oe();De(1-n)}else{A=(1-n)*de()*-1;Oe(false,false)}}else if(e===1){if(M){Oe();De(n)}else{A=n*de()*-1;Oe(false,false)}}if(e!==undefined){J((function(){S=undefined;P=undefined;A=undefined}),{oneTimeCallback:true});if(!v){Qe()}}return k};var Me=function(){if(s){if(M){j.forEach((function(e){e.pause()}))}else{I.forEach((function(e){setStyleProperty(e,"animation-play-state","paused")}))}x=true}};var $e=function(){N.forEach((function(e){e.pause()}));Me();return k};var qe=function(){E=undefined;_e()};var ze=function(){if(E){clearTimeout(E)}};var Ze=function(){ze();raf((function(){I.forEach((function(e){if(f.length>0){setStyleProperty(e,"animation-play-state","running")}}))}));if(f.length===0||I.length===0){_e()}else{var e=ye()||0;var n=de()||0;var r=me()||1;if(isFinite(r)){E=setTimeout(qe,e+n*r+$)}animationEnd(I[0],(function(){ze();raf((function(){Be();raf(_e)}))}))}};var Be=function(){I.forEach((function(e){removeStyleProperty(e,"animation-duration");removeStyleProperty(e,"animation-delay");removeStyleProperty(e,"animation-play-state")}))};var Ge=function(){j.forEach((function(e){e.play()}));if(f.length===0||I.length===0){_e()}};var Je=function(){if(M){De(0);Le()}else{Fe()}};var Qe=function(e){return new Promise((function(n){if(e===null||e===void 0?void 0:e.sync){g=true;J((function(){return g=false}),{oneTimeCallback:true})}if(!s){Ne()}if(T){Je();T=false}if(b){p=N.length+1;b=false}J((function(){return n()}),{oneTimeCallback:true});N.forEach((function(e){e.play()}));if(M){Ge()}else{Ze()}x=false}))};var Ue=function(){N.forEach((function(e){e.stop()}));if(s){U();s=false}B()};var Ve=function(e,n){var r;var t=f[0];if(t!==undefined&&(t.offset===undefined||t.offset===0)){t[e]=n}else{f=__spreadArray([(r={offset:0},r[e]=n,r)],f,true)}return k};var Xe=function(e,n){var r;var t=f[f.length-1];if(t!==undefined&&(t.offset===undefined||t.offset===1)){t[e]=n}else{f=__spreadArray(__spreadArray([],f,true),[(r={offset:1},r[e]=n,r)],false)}return k};var Ye=function(e,n,r){return Ve(e,n).to(e,r)};return k={parentAnimation:v,elements:I,childAnimations:N,id:K,animationFinish:_e,from:Ve,to:Xe,fromTo:Ye,parent:Ce,play:Qe,pause:$e,stop:Ue,destroy:z,keyframes:we,addAnimation:be,addElement:Te,update:Oe,fill:ge,direction:he,iterations:Ae,duration:Se,easing:Pe,delay:Ee,getWebAnimations:q,getKeyframes:pe,getFill:se,getDirection:ve,getDelay:ye,getIterations:me,getEasing:le,getDuration:de,afterAddRead:ee,afterAddWrite:ne,afterClearStyles:ce,afterStyles:ue,afterRemoveClass:fe,afterAddClass:oe,beforeAddRead:X,beforeAddWrite:Y,beforeClearStyles:ie,beforeStyles:ae,beforeRemoveClass:te,beforeAddClass:re,onFinish:J,isRunning:G,progressStart:We,progressStep:je,progressEnd:He}};export{createAnimation as c};