/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{r as registerInstance,h,H as Host}from"./index-8e692445.js";import{b as getIonMode}from"./ionic-global-c74e4951.js";import{c as createColorClasses}from"./theme-7670341c.js";var textCss=":host(.ion-color){color:var(--ion-color-base)}";var Text=function(){function t(t){registerInstance(this,t)}t.prototype.render=function(){var t;var o=getIonMode(this);return h(Host,{class:createColorClasses(this.color,(t={},t[o]=true,t))},h("slot",null))};return t}();Text.style=textCss;export{Text as ion_text};