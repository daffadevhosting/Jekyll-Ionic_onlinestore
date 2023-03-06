/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{r as i,e as t,h as e,H as s,i as n}from"./p-d472be56.js";import{b as o}from"./p-7ca0168a.js";import{r,g as a}from"./p-ebe7e343.js";import{a as l,b as p,h as c}from"./p-5455eb05.js";import{c as h}from"./p-fe01417c.js";const d=class{constructor(e){i(this,e),this.ionChange=t(this,"ionChange",7),this.isScrolling=!1,this.isColumnVisible=!1,this.canExitInputMode=!0,this.isActive=!1,this.items=[],this.color="primary",this.numericInput=!1,this.centerPickerItemInView=(i,t=!0,e=!0)=>{const{el:s,isColumnVisible:n}=this;if(n){const n=i.offsetTop-3*i.clientHeight+i.clientHeight/2;s.scrollTop!==n&&(this.canExitInputMode=e,s.scroll({top:n,left:0,behavior:t?"smooth":void 0}))}},this.inputModeChange=i=>{if(!this.numericInput)return;const{useInputMode:t,inputModeColumn:e}=i.detail;this.setInputModeActive(!(!t||void 0!==e&&e!==this.el))},this.setInputModeActive=i=>{this.isScrolling?this.scrollEndCallback=()=>{this.isActive=i}:this.isActive=i},this.initializeScrollListener=()=>{const{el:i}=this;let t,e=this.activeItem;const s=()=>{r((()=>{t&&(clearTimeout(t),t=void 0),this.isScrolling||(l(),this.isScrolling=!0);const s=i.getBoundingClientRect(),n=i.shadowRoot.elementFromPoint(s.x+s.width/2,s.y+s.height/2);null!==e&&e.classList.remove(m),null===n||n.disabled||(n!==e&&(p(),this.canExitInputMode&&this.exitInputMode()),e=n,n.classList.add(m),t=setTimeout((()=>{this.isScrolling=!1,c();const{scrollEndCallback:i}=this;i&&(i(),this.scrollEndCallback=void 0),this.canExitInputMode=!0;const t=n.getAttribute("data-index");if(null===t)return;const e=parseInt(t,10),s=this.items[e];s.value!==this.value&&this.setValue(s.value)}),250))}))};r((()=>{i.addEventListener("scroll",s),this.destroyScrollListener=()=>{i.removeEventListener("scroll",s)}}))},this.exitInputMode=()=>{const{parentEl:i}=this;null!=i&&(i.exitInputMode(),this.el.classList.remove("picker-column-active"))}}valueChange(){this.isColumnVisible&&this.scrollActiveItemIntoView()}componentWillLoad(){new IntersectionObserver((i=>{var t;if(i[0].isIntersecting){this.isColumnVisible=!0;const i=a(this.el).querySelector(`.${m}`);null==i||i.classList.remove(m),this.scrollActiveItemIntoView(),null===(t=this.activeItem)||void 0===t||t.classList.add(m),this.initializeScrollListener()}else this.isColumnVisible=!1,this.destroyScrollListener&&(this.destroyScrollListener(),this.destroyScrollListener=void 0)}),{threshold:.001}).observe(this.el);const i=this.parentEl=this.el.closest("ion-picker-internal");null!==i&&i.addEventListener("ionInputModeChange",(i=>this.inputModeChange(i)))}componentDidRender(){var i;const{activeItem:t,items:e,isColumnVisible:s,value:n}=this;s&&(t?this.scrollActiveItemIntoView():(null===(i=e[0])||void 0===i?void 0:i.value)!==n&&this.setValue(e[0].value))}async scrollActiveItemIntoView(){const i=this.activeItem;i&&this.centerPickerItemInView(i,!1,!1)}async setValue(i){const{items:t}=this;this.value=i;const e=t.find((t=>t.value===i&&!0!==t.disabled));e&&this.ionChange.emit(e)}get activeItem(){return a(this.el).querySelector(`.picker-item[data-value="${this.value}"]:not([disabled])`)}render(){const{items:i,color:t,isActive:n,numericInput:r}=this,a=o(this);return e(s,{tabindex:0,class:h(t,{[a]:!0,"picker-column-active":n,"picker-column-numeric-input":r})},e("div",{class:"picker-item picker-item-empty"}," "),e("div",{class:"picker-item picker-item-empty"}," "),e("div",{class:"picker-item picker-item-empty"}," "),i.map(((i,t)=>e("button",{tabindex:"-1",class:{"picker-item":!0,"picker-item-disabled":i.disabled||!1},"data-value":i.value,"data-index":t,onClick:i=>{this.centerPickerItemInView(i.target,!0)},disabled:i.disabled},i.text))),e("div",{class:"picker-item picker-item-empty"}," "),e("div",{class:"picker-item picker-item-empty"}," "),e("div",{class:"picker-item picker-item-empty"}," "))}get el(){return n(this)}static get watchers(){return{value:["valueChange"]}}},m="picker-item-active";d.style={ios:":host{padding-left:16px;padding-right:16px;padding-top:0px;padding-bottom:0px;height:200px;outline:none;font-size:22px;-webkit-scroll-snap-type:y mandatory;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;overflow-x:hidden;overflow-y:scroll;scrollbar-width:none;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host::-webkit-scrollbar{display:none}:host .picker-item{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:hidden;scroll-snap-align:center}:host .picker-item-empty,:host .picker-item.picker-item-disabled{scroll-snap-align:none;cursor:default}:host .picker-item.picker-item-disabled{opacity:0.4}:host(.picker-column-active) .picker-item.picker-item-active{color:var(--ion-color-base)}@media (any-hover: hover){:host(:focus){outline:none;background:rgba(var(--ion-color-base-rgb), 0.2)}}",md:":host{padding-left:16px;padding-right:16px;padding-top:0px;padding-bottom:0px;height:200px;outline:none;font-size:22px;-webkit-scroll-snap-type:y mandatory;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;overflow-x:hidden;overflow-y:scroll;scrollbar-width:none;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host::-webkit-scrollbar{display:none}:host .picker-item{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:hidden;scroll-snap-align:center}:host .picker-item-empty,:host .picker-item.picker-item-disabled{scroll-snap-align:none;cursor:default}:host .picker-item.picker-item-disabled{opacity:0.4}:host(.picker-column-active) .picker-item.picker-item-active{color:var(--ion-color-base)}@media (any-hover: hover){:host(:focus){outline:none;background:rgba(var(--ion-color-base-rgb), 0.2)}}:host .picker-item-active{color:var(--ion-color-base)}"};export{d as ion_picker_column_internal}