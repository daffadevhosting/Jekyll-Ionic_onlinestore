/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const t=t=>{try{if(t instanceof c)return t.value;if(!e()||"string"!=typeof t||""===t)return t;if(t.includes("onload="))return"";const r=document.createDocumentFragment(),i=document.createElement("div");r.appendChild(i),i.innerHTML=t,s.forEach((t=>{const e=r.querySelectorAll(t);for(let t=e.length-1;t>=0;t--){const s=e[t];s.parentNode?s.parentNode.removeChild(s):r.removeChild(s);const c=o(s);for(let t=0;t<c.length;t++)n(c[t])}}));const l=o(r);for(let t=0;t<l.length;t++)n(l[t]);const a=document.createElement("div");a.appendChild(r);const d=a.querySelector("div");return null!==d?d.innerHTML:a.innerHTML}catch(t){return console.error(t),""}},n=t=>{if(t.nodeType&&1!==t.nodeType)return;if("undefined"!=typeof NamedNodeMap&&!(t.attributes instanceof NamedNodeMap))return void t.remove();for(let n=t.attributes.length-1;n>=0;n--){const o=t.attributes.item(n),e=o.name;if(!r.includes(e.toLowerCase())){t.removeAttribute(e);continue}const s=o.value,c=t[e];(null!=s&&s.toLowerCase().includes("javascript:")||null!=c&&c.toLowerCase().includes("javascript:"))&&t.removeAttribute(e)}const e=o(t);for(let t=0;t<e.length;t++)n(e[t])},o=t=>null!=t.children?t.children:t.childNodes,e=()=>{var t;const n=window,o=null===(t=null==n?void 0:n.Ionic)||void 0===t?void 0:t.config;return!o||(o.get?o.get("sanitizerEnabled",!0):!0===o.sanitizerEnabled||void 0===o.sanitizerEnabled)},r=["class","id","href","src","name","slot"],s=["script","style","iframe","meta","link","object","embed"];class c{constructor(t){this.value=t}}export{c as I,t as s}