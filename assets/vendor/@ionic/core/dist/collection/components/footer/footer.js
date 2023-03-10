/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { Host, h } from '@stencil/core';
import { getIonMode } from '../../global/ionic-global';
import { findIonContent, getScrollElement, printIonContentErrorMsg } from '../../utils/content';
import { createKeyboardController } from '../../utils/keyboard/keyboard-controller';
import { handleFooterFade } from './footer.utils';
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
export class Footer {
  constructor() {
    this.keyboardCtrl = null;
    this.keyboardVisible = false;
    /**
     * If `true`, the footer will be translucent.
     * Only applies when the mode is `"ios"` and the device supports
     * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
     *
     * Note: In order to scroll content behind the footer, the `fullscreen`
     * attribute needs to be set on the content.
     */
    this.translucent = false;
    this.checkCollapsibleFooter = () => {
      const mode = getIonMode(this);
      if (mode !== 'ios') {
        return;
      }
      const { collapse } = this;
      const hasFade = collapse === 'fade';
      this.destroyCollapsibleFooter();
      if (hasFade) {
        const pageEl = this.el.closest('ion-app,ion-page,.ion-page,page-inner');
        const contentEl = pageEl ? findIonContent(pageEl) : null;
        if (!contentEl) {
          printIonContentErrorMsg(this.el);
          return;
        }
        this.setupFadeFooter(contentEl);
      }
    };
    this.setupFadeFooter = async (contentEl) => {
      const scrollEl = (this.scrollEl = await getScrollElement(contentEl));
      /**
       * Handle fading of toolbars on scroll
       */
      this.contentScrollCallback = () => {
        handleFooterFade(scrollEl, this.el);
      };
      scrollEl.addEventListener('scroll', this.contentScrollCallback);
      handleFooterFade(scrollEl, this.el);
    };
  }
  componentDidLoad() {
    this.checkCollapsibleFooter();
  }
  componentDidUpdate() {
    this.checkCollapsibleFooter();
  }
  connectedCallback() {
    this.keyboardCtrl = createKeyboardController((keyboardOpen) => {
      this.keyboardVisible = keyboardOpen; // trigger re-render by updating state
    });
  }
  disconnectedCallback() {
    if (this.keyboardCtrl) {
      this.keyboardCtrl.destroy();
    }
  }
  destroyCollapsibleFooter() {
    if (this.scrollEl && this.contentScrollCallback) {
      this.scrollEl.removeEventListener('scroll', this.contentScrollCallback);
      this.contentScrollCallback = undefined;
    }
  }
  render() {
    const { translucent, collapse } = this;
    const mode = getIonMode(this);
    const tabs = this.el.closest('ion-tabs');
    const tabBar = tabs === null || tabs === void 0 ? void 0 : tabs.querySelector(':scope > ion-tab-bar');
    return (h(Host, { role: "contentinfo", class: {
        [mode]: true,
        // Used internally for styling
        [`footer-${mode}`]: true,
        [`footer-translucent`]: translucent,
        [`footer-translucent-${mode}`]: translucent,
        ['footer-toolbar-padding']: !this.keyboardVisible && (!tabBar || tabBar.slot !== 'bottom'),
        [`footer-collapse-${collapse}`]: collapse !== undefined,
      } }, mode === 'ios' && translucent && h("div", { class: "footer-background" }), h("slot", null)));
  }
  static get is() { return "ion-footer"; }
  static get originalStyleUrls() {
    return {
      "ios": ["footer.ios.scss"],
      "md": ["footer.md.scss"]
    };
  }
  static get styleUrls() {
    return {
      "ios": ["footer.ios.css"],
      "md": ["footer.md.css"]
    };
  }
  static get properties() {
    return {
      "collapse": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'fade'",
          "resolved": "\"fade\" | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Describes the scroll effect that will be applied to the footer.\nOnly applies in iOS mode."
        },
        "attribute": "collapse",
        "reflect": false
      },
      "translucent": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true`, the footer will be translucent.\nOnly applies when the mode is `\"ios\"` and the device supports\n[`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).\n\nNote: In order to scroll content behind the footer, the `fullscreen`\nattribute needs to be set on the content."
        },
        "attribute": "translucent",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "keyboardVisible": {}
    };
  }
  static get elementRef() { return "el"; }
}
