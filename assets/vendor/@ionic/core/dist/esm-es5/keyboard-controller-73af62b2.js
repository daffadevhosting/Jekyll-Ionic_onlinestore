/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{w as win}from"./index-33ffec25.js";var createKeyboardController=function(i){var n;var e;var r;var o=function(){n=function(){r=true;if(i)i(true)};e=function(){r=false;if(i)i(false)};win===null||win===void 0?void 0:win.addEventListener("keyboardWillShow",n);win===null||win===void 0?void 0:win.addEventListener("keyboardWillHide",e)};var t=function(){win===null||win===void 0?void 0:win.removeEventListener("keyboardWillShow",n);win===null||win===void 0?void 0:win.removeEventListener("keyboardWillHide",e);n=e=undefined};var d=function(){return r};o();return{init:o,destroy:t,isKeyboardVisible:d}};export{createKeyboardController as c};