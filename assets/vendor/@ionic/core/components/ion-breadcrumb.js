/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { e as ellipsisHorizontal, d as chevronForwardOutline } from './index7.js';
import { b as getIonMode } from './ionic-global.js';
import { i as inheritAriaAttributes } from './helpers.js';
import { o as openURL, c as createColorClasses, h as hostContext } from './theme.js';
import { d as defineCustomElement$2 } from './icon.js';

const breadcrumbIosCss = ":host{display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-align:center;align-items:center;color:var(--color);font-size:16px;font-weight:400;line-height:1.5}.breadcrumb-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;outline:none;background:inherit}:host(.breadcrumb-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.breadcrumb-active){color:var(--color-active)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .breadcrumb-native{background:var(--background-focused)}@media (any-hover: hover){:host(.ion-activatable:hover){color:var(--color-hover)}:host(.ion-activatable.in-breadcrumbs-color:hover),:host(.ion-activatable.ion-color:hover){color:var(--ion-color-shade)}}.breadcrumb-separator{display:-ms-inline-flexbox;display:inline-flex}:host(.breadcrumb-collapsed) .breadcrumb-native{display:none}:host(.in-breadcrumbs-color),:host(.in-breadcrumbs-color.breadcrumb-active){color:var(--ion-color-base)}:host(.in-breadcrumbs-color) .breadcrumb-separator{color:var(--ion-color-base)}:host(.ion-color){color:var(--ion-color-base)}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumb-separator{color:rgba(var(--ion-color-contrast-rgb), 0.8)}:host(.in-toolbar-color.breadcrumb-active){color:var(--ion-color-contrast)}.breadcrumbs-collapsed-indicator{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:14px;margin-right:14px;margin-top:0;margin-bottom:0;display:-ms-flexbox;display:flex;-ms-flex:1 1 100%;flex:1 1 100%;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:32px;height:18px;border:0;outline:none;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.breadcrumbs-collapsed-indicator{margin-left:unset;margin-right:unset;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:14px;margin-inline-end:14px}}.breadcrumbs-collapsed-indicator ion-icon{margin-top:1px;font-size:22px}:host{--color:var(--ion-color-step-850, #2d4665);--color-active:var(--ion-text-color, #03060b);--color-hover:var(--ion-text-color, #03060b);--color-focused:var(--color-active);--background-focused:var(--ion-color-step-50, rgba(233, 237, 243, 0.7))}:host(.breadcrumb-active){font-weight:600}.breadcrumb-native{border-radius:4px;padding-left:12px;padding-right:12px;padding-top:5px;padding-bottom:5px;border:1px solid transparent}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.breadcrumb-native{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}:host(.ion-focused) .breadcrumb-native{border-radius:8px}:host(.in-breadcrumbs-color.ion-focused) .breadcrumb-native,:host(.ion-color.ion-focused) .breadcrumb-native{background:rgba(var(--ion-color-base-rgb), 0.1);color:var(--ion-color-base)}:host(.ion-focused) ::slotted(ion-icon),:host(.in-breadcrumbs-color.ion-focused) ::slotted(ion-icon),:host(.ion-color.ion-focused) ::slotted(ion-icon){color:var(--ion-color-step-750, #445b78)}.breadcrumb-separator{color:var(--ion-color-step-550, #73849a)}::slotted(ion-icon){color:var(--ion-color-step-400, #92a0b3);font-size:18px}::slotted(ion-icon[slot=start]){margin-right:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=start]){margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}::slotted(ion-icon[slot=end]){margin-left:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=end]){margin-left:unset;-webkit-margin-start:8px;margin-inline-start:8px}}:host(.breadcrumb-active) ::slotted(ion-icon){color:var(--ion-color-step-850, #242d39)}.breadcrumbs-collapsed-indicator{border-radius:4px;background:var(--ion-color-step-100, #e9edf3);color:var(--ion-color-step-550, #73849a)}.breadcrumbs-collapsed-indicator:hover{opacity:0.45}.breadcrumbs-collapsed-indicator:focus{background:var(--ion-color-step-150, #d9e0ea)}";

const breadcrumbMdCss = ":host{display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-align:center;align-items:center;color:var(--color);font-size:16px;font-weight:400;line-height:1.5}.breadcrumb-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;outline:none;background:inherit}:host(.breadcrumb-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.breadcrumb-active){color:var(--color-active)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .breadcrumb-native{background:var(--background-focused)}@media (any-hover: hover){:host(.ion-activatable:hover){color:var(--color-hover)}:host(.ion-activatable.in-breadcrumbs-color:hover),:host(.ion-activatable.ion-color:hover){color:var(--ion-color-shade)}}.breadcrumb-separator{display:-ms-inline-flexbox;display:inline-flex}:host(.breadcrumb-collapsed) .breadcrumb-native{display:none}:host(.in-breadcrumbs-color),:host(.in-breadcrumbs-color.breadcrumb-active){color:var(--ion-color-base)}:host(.in-breadcrumbs-color) .breadcrumb-separator{color:var(--ion-color-base)}:host(.ion-color){color:var(--ion-color-base)}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumb-separator{color:rgba(var(--ion-color-contrast-rgb), 0.8)}:host(.in-toolbar-color.breadcrumb-active){color:var(--ion-color-contrast)}.breadcrumbs-collapsed-indicator{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:14px;margin-right:14px;margin-top:0;margin-bottom:0;display:-ms-flexbox;display:flex;-ms-flex:1 1 100%;flex:1 1 100%;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:32px;height:18px;border:0;outline:none;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.breadcrumbs-collapsed-indicator{margin-left:unset;margin-right:unset;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:14px;margin-inline-end:14px}}.breadcrumbs-collapsed-indicator ion-icon{margin-top:1px;font-size:22px}:host{--color:var(--ion-color-step-600, #677483);--color-active:var(--ion-text-color, #03060b);--color-hover:var(--ion-text-color, #03060b);--color-focused:var(--ion-color-step-800, #35404e);--background-focused:$breadcrumb-md-background-focused}:host(.breadcrumb-active){font-weight:500}.breadcrumb-native{padding-left:12px;padding-right:12px;padding-top:6px;padding-bottom:6px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.breadcrumb-native{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}.breadcrumb-separator{margin-left:10px;margin-right:10px;margin-top:-1px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.breadcrumb-separator{margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}:host(.ion-focused) .breadcrumb-native{border-radius:4px;-webkit-box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2), 0px 2px 8px rgba(0, 0, 0, 0.12);box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2), 0px 2px 8px rgba(0, 0, 0, 0.12)}.breadcrumb-separator{color:var(--ion-color-step-550, #73849a)}::slotted(ion-icon){color:var(--ion-color-step-550, #7d8894);font-size:18px}::slotted(ion-icon[slot=start]){margin-right:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=start]){margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}::slotted(ion-icon[slot=end]){margin-left:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=end]){margin-left:unset;-webkit-margin-start:8px;margin-inline-start:8px}}:host(.breadcrumb-active) ::slotted(ion-icon){color:var(--ion-color-step-850, #222d3a)}.breadcrumbs-collapsed-indicator{border-radius:2px;background:var(--ion-color-step-100, #eef1f3);color:var(--ion-color-step-550, #73849a)}.breadcrumbs-collapsed-indicator:hover{opacity:0.7}.breadcrumbs-collapsed-indicator:focus{background:var(--ion-color-step-150, #dfe5e8)}";

const Breadcrumb = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.ionFocus = createEvent(this, "ionFocus", 7);
    this.ionBlur = createEvent(this, "ionBlur", 7);
    this.collapsedClick = createEvent(this, "collapsedClick", 7);
    this.inheritedAttributes = {};
    /** @internal */
    this.collapsed = false;
    /**
     * If `true`, the breadcrumb will take on a different look to show that
     * it is the currently active breadcrumb. Defaults to `true` for the
     * last breadcrumb if it is not set on any.
     */
    this.active = false;
    /**
     * If `true`, the user cannot interact with the breadcrumb.
     */
    this.disabled = false;
    /**
     * When using a router, it specifies the transition direction when navigating to
     * another page using `href`.
     */
    this.routerDirection = 'forward';
    this.onFocus = () => {
      this.ionFocus.emit();
    };
    this.onBlur = () => {
      this.ionBlur.emit();
    };
    this.collapsedIndicatorClick = () => {
      this.collapsedClick.emit({ ionShadowTarget: this.collapsedRef });
    };
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }
  isClickable() {
    return this.href !== undefined;
  }
  render() {
    const { color, active, collapsed, disabled, download, el, inheritedAttributes, last, routerAnimation, routerDirection, separator, showCollapsedIndicator, target, } = this;
    const clickable = this.isClickable();
    const TagType = this.href === undefined ? 'span' : 'a';
    // Links can still be tabbed to when set to disabled if they have an href
    // in order to truly disable them we can keep it as an anchor but remove the href
    const href = disabled ? undefined : this.href;
    const mode = getIonMode(this);
    const attrs = TagType === 'span'
      ? {}
      : {
        download,
        href,
        target,
      };
    // If the breadcrumb is collapsed, check if it contains the collapsed indicator
    // to show the separator as long as it isn't also the last breadcrumb
    // otherwise if not collapsed use the value in separator
    const showSeparator = last ? false : collapsed ? (showCollapsedIndicator && !last ? true : false) : separator;
    return (h(Host, { onClick: (ev) => openURL(href, ev, routerDirection, routerAnimation), "aria-disabled": disabled ? 'true' : null, class: createColorClasses(color, {
        [mode]: true,
        'breadcrumb-active': active,
        'breadcrumb-collapsed': collapsed,
        'breadcrumb-disabled': disabled,
        'in-breadcrumbs-color': hostContext('ion-breadcrumbs[color]', el),
        'in-toolbar': hostContext('ion-toolbar', this.el),
        'in-toolbar-color': hostContext('ion-toolbar[color]', this.el),
        'ion-activatable': clickable,
        'ion-focusable': clickable,
      }) }, h(TagType, Object.assign({}, attrs, { class: "breadcrumb-native", part: "native", disabled: disabled, onFocus: this.onFocus, onBlur: this.onBlur }, inheritedAttributes), h("slot", { name: "start" }), h("slot", null), h("slot", { name: "end" })), showCollapsedIndicator && (h("button", { part: "collapsed-indicator", onClick: () => this.collapsedIndicatorClick(), ref: (collapsedEl) => (this.collapsedRef = collapsedEl), class: {
        'breadcrumbs-collapsed-indicator': true,
      } }, h("ion-icon", { icon: ellipsisHorizontal, lazy: false }))), showSeparator && (
    /**
     * Separators should not be announced by narrators.
     * We add aria-hidden on the span so that this applies
     * to any custom separators too.
     */
    h("span", { class: "breadcrumb-separator", part: "separator", "aria-hidden": "true" }, h("slot", { name: "separator" }, mode === 'ios' ? (h("ion-icon", { icon: chevronForwardOutline, lazy: false, "flip-rtl": true })) : (h("span", null, "/")))))));
  }
  get el() { return this; }
  static get style() { return {
    ios: breadcrumbIosCss,
    md: breadcrumbMdCss
  }; }
}, [33, "ion-breadcrumb", {
    "collapsed": [4],
    "last": [4],
    "showCollapsedIndicator": [4, "show-collapsed-indicator"],
    "color": [1],
    "active": [4],
    "disabled": [4],
    "download": [1],
    "href": [1],
    "rel": [1],
    "separator": [4],
    "target": [1],
    "routerDirection": [1, "router-direction"],
    "routerAnimation": [16]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-breadcrumb", "ion-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "ion-breadcrumb":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Breadcrumb);
      }
      break;
    case "ion-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const IonBreadcrumb = Breadcrumb;
const defineCustomElement = defineCustomElement$1;

export { IonBreadcrumb, defineCustomElement };
