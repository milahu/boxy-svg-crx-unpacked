System.registerModule("classes/shortcut",[],function(){"use strict";var e=["iPhone","iPad"].includes(navigator.platform)||navigator.platform.startsWith("Mac"),t=function(){
function t(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.ctrl=!1,
this.alt=!1,this.meta=!1,this.shift=!1,this.base=null;var n=!0,r=!1,a=void 0;try{
for(var i=void 0,s=e[Symbol.iterator]();!(n=(i=s.next()).done);n=!0){var o=i.value;
"Control"===o?this.ctrl=!0:"Alt"===o?this.alt=!0:"Meta"===o?this.meta=!0:"Shift"===o?this.shift=!0:this.base=o;
}}catch(l){r=!0,a=l}finally{try{n||null==s["return"]||s["return"]()}finally{if(r)throw a;
}}}return $traceurRuntime.createClass(t,{matches:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];
var n=!1,r=!1,a=!1,i=!1,s=null,o=!0,l=!1,u=void 0;try{for(var c=void 0,d=e[Symbol.iterator]();!(o=(c=d.next()).done);o=!0){
var h=c.value;"Control"===h?n=!0:"Alt"===h?r=!0:"Meta"===h?a=!0:"Shift"===h?i=!0:s=h;
}}catch(b){l=!0,u=b}finally{try{o||null==d["return"]||d["return"]()}finally{if(l)throw u;
}}return n===this.ctrl&&r===this.alt&&a===this.meta&&i===this.shift&&s===this.base;
},includes:function(e){return"Control"===e?this.ctrl:"Alt"===e?this.alt:"Meta"===e?this.meta:"Shift"===e?this.shift:this.base===e;
},compare:function(e){return this.ctrl===e.ctrl&&this.alt===e.alt&&this.meta===e.meta&&this.shift===e.shift&&this.base===e.base;
},isVoid:function(){return this.ctrl===!1&&this.alt===!1&&this.meta===!1&&this.shift===!1&&null===this.base;
},toDisplayString:function(){var t="";if(e){this.meta&&(t+="^"),this.alt&&(t+="⌥"),
this.shift&&(t+="⇧"),this.ctrl&&(t+="⌘");var n={ArrowUp:"↑",ArrowDown:"↓",ArrowLeft:"←",
ArrowRight:"→",Backspace:"⌦"};null!==this.base&&(t+=n[this.base]||this.base)}else{
var r=[];this.ctrl&&r.push("Ctrl"),this.alt&&r.push("Alt"),this.meta&&r.push("Meta"),
this.shift&&r.push("Shift");var a={ArrowUp:"Up",ArrowDown:"Down",ArrowLeft:"Left",
ArrowRight:"Right"};null!==this.base&&r.push(a[this.base]||this.base),t=r.join("+");
}return t},toAccelerator:function(){var e=[];return this.ctrl&&e.push("CmdOrCtrl"),
this.alt&&e.push("Alt"),this.shift&&e.push("Shift"),this.meta,null!==this.base&&("ArrowUp"===this.base?e.push("Up"):"ArrowDown"===this.base?e.push("Down"):"ArrowLeft"===this.base?e.push("Left"):"ArrowRight"===this.base?e.push("Right"):e.push(this.base)),
e.join("+")},toJSON:function(){return this.toString()},toString:function(){var e=[];
return this.ctrl&&e.push("Control"),this.alt&&e.push("Alt"),this.meta&&e.push("Meta"),
this.shift&&e.push("Shift"),null!==this.base&&e.push(this.base),e.join("+")}},{fromEvent:function(n){
var r=new t;r.ctrl=e?n.metaKey:n.ctrlKey,r.alt=n.altKey,r.meta=e?n.ctrlKey:n.metaKey,
r.shift=n.shiftKey;var a=null,i=n.keyIdentifier,s={"U+00C0":"U+0060","U+00BD":"U+002D",
"U+00BB":"U+003D","U+00DB":"U+005B","U+00DD":"U+005D","U+00DC":"U+005C","U+00BA":"U+003B",
"U+00DE":"U+0027","U+00BC":"U+002C","U+00BE":"U+002E","U+00BF":"U+002F",Win:"Meta",
Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown"};for(var o in s)if(i===o){
var l=s[o];i=l}if("U"===i[0]&&"+"===i[1]){var u=parseInt(i.substring(2),16);27===u?a="Escape":8===u?a="Backspace":(a=String.fromCharCode(u),
"	"===a?a="Tab":" "===a?a="Space":n.shiftKey===!1&&(a=a.toLowerCase()))}else a=i;return a&&"Control"!==a&&"Alt"!==a&&"Shift"!==a&&"Meta"!==a?1===a.length?r.base=a.toUpperCase():r.base=a:r.base=null,
r},fromAccelerator:function(e){var n=e.split("+"),r=[],a=!0,i=!1,s=void 0;try{for(var o=void 0,l=n[Symbol.iterator]();!(a=(o=l.next()).done);a=!0){
var u=o.value;"CmdOrCtrl"===u||"CommandOrControl"===u?r.push("Control"):"Up"===u?r.push("ArrowUp"):"Down"===u?r.push("ArrowDown"):"Left"===u?r.push("ArrowLeft"):"Right"===u?r.push("ArrowRight"):""!==u&&r.push(u);
}}catch(c){i=!0,s=c}finally{try{a||null==l["return"]||l["return"]()}finally{if(i)throw s;
}}var d=new(Function.prototype.bind.apply(t,$traceurRuntime.spread([null],r)));return d;
},fromString:function(e){return new(Function.prototype.bind.apply(t,$traceurRuntime.spread([null],e.split("+").filter(function(e){
return""!==e}))))}})}(),n=t;return{get default(){return n}}}),System.registerModule("elements/bx-backgroundbody",[],function(){
"use strict";var e=System.get("utils/element").registerElement,t=System.get("utils/window").createAppWindow,n=Object.keys,r=function(e){
function r(){$traceurRuntime.superConstructor(r).apply(this,arguments)}return $traceurRuntime.createClass(r,{
createdCallback:function(){var e,t,n,r,a,i,s;return $traceurRuntime.asyncWrap(function(o){
for(;;)switch(o.state){case 0:e=this,this._shadowRoot=this.createShadowRoot({mode:"closed"
}),this._messageCounter=0,this._messageRequestCallbacks={},this._messageResponseCallbacks={},
this._readyCallbacks=[],this._retainedLaunchEntries=[],this._masterAppWindow=null,
this._masterAppWindowState="closed",o.state=4;break;case 4:return void Promise.resolve(this._upgradeConfig()).then(o.createCallback(2),o.errback);
case 2:window.addEventListener("message",function(t){return e._onMessage(t)}),chrome.storage.onChanged.addListener(function(t){
return e._onChromeStorageChange(t)}),this.addMessageListener("ready",function(){return e._masterAppWindowState="ready";
}),this.addMessageListener("getConfig",function(t,n){return e.getConfig(t).then(n);
}),this.addMessageListener("setConfig",function(t,n){return e.setConfig(t.key,t.value).then(n);
}),this.addMessageListener("getRetainedLaunchEntries",function(t,n){return n(e._retainedLaunchEntries);
}),t=!0,n=!1,r=void 0;try{for(a=void 0,i=this._readyCallbacks[Symbol.iterator]();!(t=(a=i.next()).done);t=!0)(s=a.value)();
}catch(l){n=!0,r=l}finally{try{t||null==i["return"]||i["return"]()}finally{if(n)throw r;
}}this._readyCallbacks=null,o.state=-2;break;default:return o.end()}},this)},launchedCallback:function(e){
var t=e.items?e.items.map(function(e){return chrome.fileSystem.retainEntry(e.entry);
}):null;"ready"===this._masterAppWindowState?(this._masterAppWindow.focus(),this._masterAppWindow.show(),
t&&t.length>0&&this.postMessage("openEntries",t)):"opening"===this._masterAppWindowState?t&&(this._retainedLaunchEntries=t):"closed"===this._masterAppWindowState&&(t&&(this._retainedLaunchEntries=t),
this._openMasterAppWindow())},get ready(){var e=this;return new Promise(function(t){
e._readyCallbacks?e._readyCallbacks.push(t):t()})},postMessage:function(e){var t=void 0!==arguments[1]?arguments[1]:null,n=void 0!==arguments[2]?arguments[2]:null;
if(this._masterAppWindow){var r=this._messageCounter++,a={channel:"request",id:r,
name:e,arg:t};n&&(this._messageResponseCallbacks[a.id]=n),this._masterAppWindow.contentWindow.postMessage(a,"*");
}},addMessageListener:function(e,t){this._messageRequestCallbacks[e]||(this._messageRequestCallbacks[e]=[]),
this._messageRequestCallbacks[e].push(t)},removeMessageListener:function(e,t){this._messageRequestCallbacks[e]&&(this._messageRequestCallbacks[e]=this._messageRequestCallbacks[e].filter(function(e){
return e!==t}))},getConfig:function(e){return new Promise(function(t){var n="!"===e[0]?"local":"sync";
chrome.storage[n].get(e,function(n){var r=n[e];void 0===r&&(r=null),t(r)})})},setConfig:function(e,t){
var n=this;return new Promise(function(r){var a,i="!"===e[0]?"local":"sync";null===t?chrome.storage[i].remove(e,r):chrome.storage[i].set((a={},
Object.defineProperty(a,e,{value:t,configurable:!0,enumerable:!0,writable:!0}),a),r),
n.postMessage("configChanged",{key:e,value:t})})},_onMessage:function(e){var t=this;
if(this._masterAppWindow&&e.source===this._masterAppWindow.contentWindow){var n=e.data,r=n.channel,a=n.id,i=n.name,s=n.arg;
"request"===r?this._messageRequestCallbacks[i]&&this._messageRequestCallbacks[i].forEach(function(e){
e(s,function(e){var n={channel:"response",id:a,name:i,arg:e};t._masterAppWindow.contentWindow.postMessage(n,"*");
})}):"response"===r&&this._messageResponseCallbacks[a]&&(this._messageResponseCallbacks[a](s),
delete this._messageResponseCallbacks[a])}},_onChromeStorageChange:function(e){var t=!0,r=!1,a=void 0;
try{for(var i=void 0,s=n(e)[Symbol.iterator]();!(t=(i=s.next()).done);t=!0){var o=i.value,l=void 0!==e[o].newValue?e[o].newValue:null;
this.dispatchEvent(new CustomEvent("change",{detail:{key:o,value:l}}))}}catch(u){
r=!0,a=u}finally{try{t||null==s["return"]||s["return"]()}finally{if(r)throw a}}},
_openMasterAppWindow:function(){var e,n,r,a;return $traceurRuntime.asyncWrap(function(i){
for(;;)switch(i.state){case 0:e=this,this._masterAppWindowState="opening",a={id:"master",
resizable:!0,hidden:!0,frame:{type:"chrome",color:"#333"},outerBounds:{width:800,
height:550,minWidth:100,minHeight:440}},i.state=5;break;case 5:return void Promise.resolve(t("master.html",a)).then(i.createCallback(3),i.errback);
case 3:this._masterAppWindow=i.value,i.state=2;break;case 2:this._masterAppWindow.contentWindow.addEventListener("load",n=function(){
e._masterAppWindow.contentWindow.removeEventListener("load",n),e._masterAppWindow.focus(),
e._masterAppWindow.show()}),this._masterAppWindow.onClosed.addListener(r=function(){
e._masterAppWindow.onClosed.removeListener(r),e._masterAppWindow.contentWindow.removeEventListener("load",n),
e._masterAppWindow=null,e._masterAppWindowState="closed",e._retainedLaunchEntries=[];
}),i.state=-2;break;default:return i.end()}},this)},_upgradeConfig:function(){var e=this;
return new Promise(function(t){var n;return $traceurRuntime.asyncWrap(function(r){
for(;;)switch(r.state){case 0:return void Promise.resolve(e.getConfig("!bx-background:version")).then(r.createCallback(3),r.errback);
case 3:n=r.value,r.state=2;break;case 2:r.state=2===n?22:18;break;case 22:t(),r.state=-2;
break;case 18:null===n&&(n=0),r.state=19;break;case 19:r.state=0===n?8:7;break;case 8:
n=1,r.state=9;break;case 9:return void Promise.resolve(e.setConfig("!bx-editors:session",null)).then(r.createCallback(5),r.errback);
case 5:return void Promise.resolve(e.setConfig("!bx-editors:recent",null)).then(r.createCallback(7),r.errback);
case 7:r.state=1===n?13:12;break;case 13:n=2,r.state=14;break;case 14:return void Promise.resolve(e.setConfig("bx-shortcutseditor:userShortcuts",null)).then(r.createCallback(12),r.errback);
case 12:return void Promise.resolve(e.setConfig("!bx-background:version",n)).then(r.createCallback(17),r.errback);
case 17:t(),r.state=-2;break;default:return r.end()}},this)})}},{},e)}(HTMLBodyElement),a=e("body","bx-backgroundbody",r);
return{get default(){return a}}}),System.registerModule("elements/bx-button",[],function(){
"use strict";var e=System.get("utils/element"),t=e.createElement,n=e.registerElement,r=Number.parseInt,a='\n  <style id="skin-stylesheet"></style>\n\n  <main>\n    <svg id="icon" preserveAspectRatio="none" viewBox="0 0 100 100" style="width: 20px; height: 20px;">\n      <use id="icon-use" x="0" y="0" width="100%" height="100%"></use>\n    </svg>\n\n    <label id="label"></label>\n  </main>\n',i=function(e){
function n(){$traceurRuntime.superConstructor(n).apply(this,arguments)}return $traceurRuntime.createClass(n,{
createdCallback:function(){this._shadowRoot=this.createShadowRoot({mode:"closed"}),
this._shadowRoot.innerHTML=a;var e=!0,t=!1,n=void 0;try{for(var r=void 0,i=this._shadowRoot.querySelectorAll("[id]")[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){
var s=r.value;this["#"+s.id]=s}}catch(o){t=!0,n=o}finally{try{e||null==i["return"]||i["return"]();
}finally{if(t)throw n}}var l=!0,u=!1,c=void 0;try{for(var d=void 0,h=this.attributes[Symbol.iterator]();!(l=(d=h.next()).done);l=!0){
var b=d.value;this.attributeChangedCallback(b.name)}}catch(m){u=!0,c=m}finally{try{
l||null==h["return"]||h["return"]()}finally{if(u)throw c}}this._updateSkin()},attributeChangedCallback:function(e){
"label"===e?this._onLabelAttributeChange():"icon"===e?this._onIconAttributeChange():"iconsize"===e?this._onIconSizeAttributeChange():"skin"===e?this._onSkinAttributeChange():"hidden"===e&&this._onHiddenAttributeChange();
},get label(){return this.hasAttribute("label")?this.getAttribute("label"):""},set label(e){
this.setAttribute("label",e)},get value(){return this.getAttribute("value")},set value(e){
null===e?this.removeAttribute("value"):this.setAttribute("value",e)},get icon(){return this.getAttribute("icon");
},set icon(e){null===e?this.removeAttribute("icon"):this.setAttribute("icon",e)},
get iconSize(){return this.hasAttribute("iconsize")?r(this.getAttribute("iconsize")):20;
},set iconSize(e){this.setAttribute("iconsize",e)},get skin(){return this.getAttribute("skin");
},set skin(e){e?this.setAttribute("skin",e):this.removeAttribute("skin")},get href(){
return this.hasAttribute("href")?this.getAttribute("href"):""},set href(e){this.setAttribute("href",e);
},get pressed(){return this.hasAttribute("pressed")},set pressed(e){e===!0?this.setAttribute("pressed",""):this.removeAttribute("pressed");
},get mixed(){return this.hasAttribute("mixed")},set mixed(e){e===!0?this.setAttribute("mixed",""):this.removeAttribute("mixed");
},get disabled(){return this.hasAttribute("disabled")},set disabled(e){e===!0?this.setAttribute("disabled",""):this.removeAttribute("disabled");
},_onLabelAttributeChange:function(){this["#label"].textContent=this.label},_onIconAttributeChange:function(){
this["#icon-use"].remove(),this["#icon-use"]=t("svg:use"),this["#icon"].append(this["#icon-use"]),
this.icon&&this["#icon-use"].setAttribute("href","images/icons.svg#"+this.icon)},
_onIconSizeAttributeChange:function(){this["#icon"].style.width=this.iconSize+"px",
this["#icon"].style.height=this.iconSize+"px"},_onSkinAttributeChange:function(){
this._updateSkin()},_onHiddenAttributeChange:function(){this.dispatchEvent(new CustomEvent("hiddenchange",{
detail:this,bubbles:!0}))},_updateSkin:function(){this.skin?this["#skin-stylesheet"].innerText='@import url("stylesheets/bx-button@'+this.skin+'.css");':this["#skin-stylesheet"].innerText='@import url("stylesheets/bx-button.css");';
}},{},e)}(HTMLElement),s=n("bx-button",i);return{get default(){return s}}}),System.registerModule("elements/bx-editor",[],function(){
"use strict";var e=System.get("utils/artwork"),t=e.compressArtwork,n=e.uncompressArtwork,r=e.createArtworkFromBitmapDataURL,a=System.get("utils/element"),i=(a.createElement,
a.registerElement),s=(System.get("utils/time").sleep,System.get("utils/filesystem")),o=s.getEntryExtension,l=s.chooseEntry,u=s.readEntry,c=s.writeEntry,d='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"></svg>',h="\n  width: 100%;\n  height: calc(100% - 30px - 30px);\n  display: block;\n  position: fixed;\n  top: 60px;\n  left; 0;\n",b='\n  <style>@import url("stylesheets/bx-editor.css");</style>\n\n  <webview\n    id="webview"\n    tabindex="-1"\n    partition="persist:boxy"\n    src="frontend/editor.html"\n    style="'+h+'"\n    allowtransparency="on">\n  </webview>\n',m=function(e){
function a(){$traceurRuntime.superConstructor(a).apply(this,arguments)}return $traceurRuntime.createClass(a,{
createdCallback:function(){var e=this;this._messageCounter=0,this._messageRequestCallbacks={},
this._messageResponseCallbacks={},this._webviewLoadedCallbacks=[],this._webviewInitializedCallbacks=[],
this._currentToolID=null,this._currentPanelID=null,this._entry=null,this._changeCounter=0,
this._textInputModeCounter=0,this._shadowRoot=this.createShadowRoot({mode:"closed"
}),this._shadowRoot.innerHTML=b;var t=!0,n=!1,r=void 0;try{for(var a=void 0,i=this._shadowRoot.querySelectorAll("[id]")[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){
var s=a.value;this["#"+s.id]=s}}catch(o){n=!0,r=o}finally{try{t||null==i["return"]||i["return"]();
}finally{if(n)throw r}}this["#webview"].addEventListener("contentload",function(t){
return e._onWebviewLoaded(t)}),window.addEventListener("message",function(t){return e._onMessage(t);
}),this.addMessageListener("getBackendName",function(e,t){return t("chrome")}),this.addMessageListener("getConfig",function(e,t){
return body.getConfig(e).then(t)}),this.addMessageListener("setConfig",function(e,t){
return body.setConfig(e.key,e.value).then(t)}),this.addMessageListener("setClipboardData",function(e,t){
return body.setClipboardData(e)}),this.addMessageListener("setChangeCounter",function(t){
return e._setChangeCounter(t)}),this.addMessageListener("toggleTextInputMode",function(t){
return e._toggleTextInputMode(t)}),this.addMessageListener("toolChanged",function(t){
return e._onCurrentToolChange(t)}),this.addMessageListener("secondaryPanelChanged",function(t){
return e._onCurrentSecondaryPanelChange(t)}),this.addMessageListener("showMessageBox",function(e,t){
return body.showMessageBox(e).then(t)}),this.addMessageListener("openExternalURL",function(e){
return chrome.browser.openTab({url:e})}),this.addMessageListener("exportFile",function(t){
return e._exportFile(t)}),this.addMessageListener("getClipboardData",function(e,t){
var n;return $traceurRuntime.asyncWrap(function(e){for(;;)switch(e.state){case 0:
return void Promise.resolve(body.getClipboardData()).then(e.createCallback(3),e.errback);
case 3:n=e.value,e.state=2;break;case 2:t(n),e.state=-2;break;default:return e.end();
}},this)}),this.addMessageListener("rasterizeArtwork",function(e,t){var n,r,a,i,s,o;
return $traceurRuntime.asyncWrap(function(l){for(;;)switch(l.state){case 0:n=e,r=n.artwork,
a=n.format,i=n.compression,s=n.transparent,l.state=5;break;case 5:return void Promise.resolve(body.rasterizeArtwork(r,a,i,s)).then(l.createCallback(3),l.errback);
case 3:o=l.value,l.state=2;break;case 2:t(o),l.state=-2;break;default:return l.end();
}},this)})},get entry(){return this._entry},get edited(){return 0!==this._changeCounter;
},get ready(){return null===this._webviewInitializedCallbacks},get textInputMode(){
return this._textInputModeCounter>0},get currentToolID(){return this._currentToolID;
},get currentPanelID(){return this._currentPanelID},get disabled(){return this.hasAttribute("disabled");
},set disabled(e){e===!0?this.setAttribute("disabled",""):this.removeAttribute("disabled");
},init:function(){var e=void 0!==arguments[0]?arguments[0]:null,t=void 0!==arguments[1]?arguments[1]:null,a=this;
return new Promise(function(i){var s,l,c,h,b;return $traceurRuntime.asyncWrap(function(m){
for(;;)switch(m.state){case 0:m.state=null===e&&null===t?34:33;break;case 34:s=d,
m.state=35;break;case 33:m.state=e&&null===t?31:30;break;case 31:s=e,a._setChangeCounter("increment"),
m.state=35;break;case 30:m.state=e&&t?28:27;break;case 28:s=e,a._setChangeCounter("increment"),
m.state=35;break;case 27:m.state=null===e&&t?25:35;break;case 25:l=o(t).toLowerCase(),
m.state=26;break;case 26:m.state="svg"===l||"html"===l?1:23;break;case 1:return void Promise.resolve(u(t,"text")).then(m.createCallback(3),m.errback);
case 3:c=m.value,m.state=2;break;case 2:c?s=c:(s=d,a._setChangeCounter("increment")),
m.state=35;break;case 23:m.state="svgz"===l?6:22;break;case 6:return void Promise.resolve(u(t,"arrayBuffer")).then(m.createCallback(8),m.errback);
case 8:h=m.value,m.state=7;break;case 7:h?s=n(h):(s=d,a._setChangeCounter("increment")),
m.state=35;break;case 22:m.state=["png","jpg","jpeg","webp","gif"].includes(l)?11:35;
break;case 11:return void Promise.resolve(u(t,"dataURL")).then(m.createCallback(13),m.errback);
case 13:b=m.value,m.state=12;break;case 12:m.state=b?14:17;break;case 14:return void Promise.resolve(r(b)).then(m.createCallback(16),m.errback);
case 16:s=m.value,m.state=15;break;case 17:s=d,m.state=15;break;case 15:a._setChangeCounter("increment"),
m.state=35;break;case 35:a._entry=t,a.postMessage("init",{artwork:s,distribution:body.distribution
},function(){a._onWebviewInitialized(),i()}),m.state=-2;break;default:return m.end();
}},this)})},reload:function(){var e=this;return new Promise(function(t){var n,r;return $traceurRuntime.asyncWrap(function(a){
for(;;)switch(a.state){case 0:n=function(){return $traceurRuntime.asyncWrap(function(t){
for(;;)switch(t.state){case 0:t.returnValue=new Promise(function(t){e.edited?e.postMessage("getArtwork","html",t):t(null);
}),t.state=2;break;case 2:t.state=-2;break;default:return t.end()}},this)},a.state=12;
break;case 12:a.state=e.entry?4:1;break;case 4:r=null,e._setChangeCounter("reset"),
a.state=5;break;case 1:return void Promise.resolve(n()).then(a.createCallback(3),a.errback);
case 3:r=a.value,a.state=5;break;case 5:e._webviewLoadedCallbacks=[],e._webviewInitializedCallbacks=[],
e["#webview"].reload(),a.state=14;break;case 14:return void Promise.resolve(e._promiseWebviewLoaded()).then(a.createCallback(8),a.errback);
case 8:return void Promise.resolve(e.init(r,e._entry)).then(a.createCallback(10),a.errback);
case 10:t(),a.state=-2;break;default:return a.end()}},this)})},reloadArtworkFromDisk:function(){
var e=this;return new Promise(function(t){var r,a,i,s;return $traceurRuntime.asyncWrap(function(l){
for(;;)switch(l.state){case 0:l.state=e._entry?13:5;break;case 13:a=o(e._entry).toLowerCase(),
l.state=14;break;case 14:l.state="svg"===a||"html"===a?1:11;break;case 1:return void Promise.resolve(u(e._entry,"text")).then(l.createCallback(3),l.errback);
case 3:i=l.value,l.state=2;break;case 2:i&&(r=i),l.state=5;break;case 11:l.state="svgz"===a?6:5;
break;case 6:return void Promise.resolve(u(e._entry,"arrayBuffer")).then(l.createCallback(8),l.errback);
case 8:s=l.value,l.state=7;break;case 7:s&&(r=n(s)),l.state=5;break;case 5:r?(e.postMessage("setArtwork",r),
e._setChangeCounter("reset"),t(!0)):t(!1),l.state=-2;break;default:return l.end();
}},this)})},canReloadArtworkFromDisk:function(){if(this._entry){var e=o(this._entry).toLowerCase();
return"svg"===e||"svgz"===e||"html"===e}return!1},save:function(){var e=this;return new Promise(function(n){
var r,a,i,s,l,u,d,h,b,m;return $traceurRuntime.asyncWrap(function(f){for(;;)switch(f.state){
case 0:r=e._entry,a=r?o(r):null,f.state=60;break;case 60:f.state="svg"===a||"svgz"===a||"html"===a?49:53;
break;case 49:i="html"===a?"html":"xml",f.state=50;break;case 50:return void Promise.resolve(e.getArtwork(i)).then(f.createCallback(3),f.errback);
case 3:s=f.value,f.state=2;break;case 2:f.pushTry(42,null),f.state=45;break;case 45:
f.state="svg"===a?4:13;break;case 4:return void Promise.resolve(c(r,s,"image/svg+xml;charset=utf-8")).then(f.createCallback(5),f.errback);
case 13:f.state="svgz"===a?8:12;break;case 8:l=t(s),f.state=9;break;case 9:return void Promise.resolve(c(r,l,"image/svg+xml;charset=utf-8")).then(f.createCallback(5),f.errback);
case 12:f.state="html"===a?10:5;break;case 10:return void Promise.resolve(c(r,s,"text/html;charset=utf-8")).then(f.createCallback(5),f.errback);
case 5:f.popTry(),f.state=47;break;case 42:f.popTry(),f.maybeUncatchable(),m=f.storedException,
f.state=41;break;case 41:f.state="READ_ONLY"===m?15:33;break;case 15:return void Promise.resolve(body.showMessageBox({
message:"Can't save file.",detail:'The file "'+r.name+'" is read-only.',buttons:["Cancel","Save As…"]
})).then(f.createCallback(17),f.errback);case 17:u=f.value,f.state=16;break;case 16:
f.state=0===u?21:31;break;case 21:n(!1),f.state=22;break;case 22:f.returnValue=void 0,
f.state=19;break;case 19:f.state=-2;break;case 31:f.state=1===u?23:47;break;case 23:
return void Promise.resolve(e.saveAs()).then(f.createCallback(25),f.errback);case 25:
d=f.value,f.state=24;break;case 24:n(d),f.state=30;break;case 30:f.returnValue=void 0,
f.state=27;break;case 27:f.state=-2;break;case 33:return void Promise.resolve(e.saveAs()).then(f.createCallback(35),f.errback);
case 35:h=f.value,f.state=34;break;case 34:n(h),f.state=40;break;case 40:f.returnValue=void 0,
f.state=37;break;case 37:f.state=-2;break;case 47:e._setChangeCounter("reset"),n(!0),
f.state=-2;break;case 53:return void Promise.resolve(e.saveAs()).then(f.createCallback(55),f.errback);
case 55:b=f.value,f.state=54;break;case 54:n(b),f.state=-2;break;default:return f.end();
}},this)})},saveAs:function(){var e=this;return new Promise(function(n){var r,a,i,s,u,d,h,b,m,f;
return $traceurRuntime.asyncWrap(function(v){for(;;)switch(v.state){case 0:v.pushTry(21,null),
v.state=24;break;case 24:return void Promise.resolve(l({type:"saveFile",suggestedName:e._entry?e._entry.name:"Untitled.svg",
acceptsAllTypes:!1,accepts:[{description:"SVG",extensions:["svg"]},{description:"SVGZ",
extensions:["svgz"]},{description:"HTML",extensions:["html"]}]})).then(v.createCallback(3),v.errback);
case 3:r=v.value,v.state=2;break;case 2:v.popTry(),v.state=26;break;case 21:v.popTry(),
v.maybeUncatchable(),f=v.storedException,v.state=4;break;case 4:return void Promise.resolve(body.showMessageBox({
message:"Can't save file.",detail:"Selected directory is read-only.",buttons:["Cancel","Save As…"]
})).then(v.createCallback(6),v.errback);case 6:a=v.value,v.state=5;break;case 5:v.state=0===a?10:12;
break;case 10:n(!1),v.state=11;break;case 11:v.returnValue=void 0,v.state=8;break;
case 8:v.state=-2;break;case 12:return void Promise.resolve(e.saveAs()).then(v.createCallback(14),v.errback);
case 14:i=v.value,v.state=13;break;case 13:n(i),v.state=19;break;case 19:v.returnValue=void 0,
v.state=16;break;case 16:v.state=-2;break;case 26:v.state=r?67:71;break;case 67:s=o(r).toLowerCase(),
u="html"===s?"html":"xml",v.state=68;break;case 68:return void Promise.resolve(e.getArtwork(u)).then(v.createCallback(30),v.errback);
case 30:d=v.value,v.state=29;break;case 29:v.pushTry(60,null),v.state=63;break;case 63:
v.state="svg"===s||""===s?31:40;break;case 31:return void Promise.resolve(c(r,d,"image/svg+xml;charset=utf-8")).then(v.createCallback(32),v.errback);
case 40:v.state="svgz"===s?35:39;break;case 35:h=t(d),v.state=36;break;case 36:return void Promise.resolve(c(r,h,"image/svg+xml;charset=utf-8")).then(v.createCallback(32),v.errback);
case 39:v.state="html"===s?37:32;break;case 37:return void Promise.resolve(c(r,d,"text/html;charset=utf-8")).then(v.createCallback(32),v.errback);
case 32:v.popTry(),v.state=65;break;case 60:v.popTry(),v.maybeUncatchable(),f=v.storedException,
v.state=42;break;case 42:return void Promise.resolve(body.showMessageBox({message:"Can't save file.",
detail:'The file "'+r.name+'" is read-only.',buttons:["Cancel","Save As…"]})).then(v.createCallback(44),v.errback);
case 44:b=v.value,v.state=43;break;case 43:v.state=0===b?48:58;break;case 48:n(!1),
v.state=49;break;case 49:v.returnValue=void 0,v.state=46;break;case 46:v.state=-2;
break;case 58:v.state=1===b?50:65;break;case 50:return void Promise.resolve(e.saveAs()).then(v.createCallback(52),v.errback);
case 52:m=v.value,v.state=51;break;case 51:n(m),v.state=57;break;case 57:v.returnValue=void 0,
v.state=54;break;case 54:v.state=-2;break;case 65:e._entry=r,e._setChangeCounter("reset"),
e.dispatchEvent(new CustomEvent("entrychange",{bubbles:!0,detail:e})),n(!0),v.state=-2;
break;case 71:n(!1),v.state=-2;break;default:return v.end()}},this)})},getArtwork:function(){
var e=void 0!==arguments[0]?arguments[0]:"xml",t=this;return new Promise(function(n){
return $traceurRuntime.asyncWrap(function(r){for(;;)switch(r.state){case 0:return void Promise.resolve(t.promiseReady()).then(r.createCallback(2),r.errback);
case 2:t.postMessage("getArtwork",e,function(e){return $traceurRuntime.asyncWrap(function(t){
for(;;)switch(t.state){case 0:n(e),t.state=-2;break;default:return t.end()}},this);
}),r.state=-2;break;default:return r.end()}},this)})},getArtworkFromSelectedElements:function(){
var e=void 0!==arguments[0]?arguments[0]:"xml",t=this;return new Promise(function(n){
t.postMessage("getArtworkFromSelectedElements",e,function(e){return $traceurRuntime.asyncWrap(function(t){
for(;;)switch(t.state){case 0:n(e),t.state=-2;break;default:return t.end()}},this);
})})},focus:function(){this["#webview"].focus()},postMessage:function(e){var t,n,r,a,i=arguments;
return $traceurRuntime.asyncWrap(function(s){for(;;)switch(s.state){case 0:t=void 0!==i[1]?i[1]:null,
n=void 0!==i[2]?i[2]:null,r=this._messageCounter++,a={channel:"request",id:r,name:e,
arg:t},s.state=4;break;case 4:return void Promise.resolve(this._promiseWebviewLoaded()).then(s.createCallback(2),s.errback);
case 2:n&&(this._messageResponseCallbacks[a.id]=n),this["#webview"].contentWindow.postMessage(a,"*"),
s.state=-2;break;default:return s.end()}},this)},addMessageListener:function(e,t){
this._messageRequestCallbacks[e]||(this._messageRequestCallbacks[e]=[]),this._messageRequestCallbacks[e].push(t);
},removeMessageListener:function(e,t){this._messageRequestCallbacks[e]&&(this._messageRequestCallbacks[e]=this._messageRequestCallbacks[e].filter(function(e){
return e!==t}))},_onMessage:function(e){var t=this;if(e.source===this["#webview"].contentWindow){
var n=e.data,r=n.channel,a=n.id,i=n.name,s=n.arg;"request"===r?this._messageRequestCallbacks[i]&&this._messageRequestCallbacks[i].forEach(function(e){
e(s,function(e){var n={channel:"response",id:a,name:i,arg:e};t["#webview"].contentWindow.postMessage(n,"*");
})}):"response"===r&&this._messageResponseCallbacks[a]&&(this._messageResponseCallbacks[a](s),
delete this._messageResponseCallbacks[a])}},_onWebviewLoaded:function(){this["#webview"].setZoomMode("disabled");
var e=!0,t=!1,n=void 0;try{for(var r=void 0,a=this._webviewLoadedCallbacks[Symbol.iterator]();!(e=(r=a.next()).done);e=!0){
var i=r.value;i()}}catch(s){t=!0,n=s}finally{try{e||null==a["return"]||a["return"]();
}finally{if(t)throw n}}this._webviewLoadedCallbacks=null},_onWebviewInitialized:function(){
var e=!0,t=!1,n=void 0;try{for(var r=void 0,a=this._webviewInitializedCallbacks[Symbol.iterator]();!(e=(r=a.next()).done);e=!0){
var i=r.value;i()}}catch(s){t=!0,n=s}finally{try{e||null==a["return"]||a["return"]();
}finally{if(t)throw n}}this._webviewInitializedCallbacks=null,this.dispatchEvent(new CustomEvent("ready",{
bubbles:!0,detail:this}))},_onCurrentToolChange:function(e){this._currentToolID=e;
},_onCurrentSecondaryPanelChange:function(e){this._currentPanelID=e},promiseReady:function(){
return this._promiseWebviewInitialized()},_promiseWebviewLoaded:function(){var e=this;
return new Promise(function(t){e._webviewLoadedCallbacks?e._webviewLoadedCallbacks.push(t):t();
})},_promiseWebviewInitialized:function(){var e=this;return new Promise(function(t){
e._webviewInitializedCallbacks?e._webviewInitializedCallbacks.push(t):t()})},_exportFile:function(e){
var t,n,r,a,i,s,u,d,h,b,m;return $traceurRuntime.asyncWrap(function(f){for(;;)switch(f.state){
case 0:t=e,n=t.format,r=t.data,f.state=54;break;case 54:f.pushTry(13,null),f.state=16;
break;case 16:return void Promise.resolve(l({type:"saveFile",suggestedName:"Untitled."+n,
acceptsAllTypes:!1,accepts:[{description:n,extensions:[n]}]})).then(f.createCallback(3),f.errback);
case 3:a=f.value,f.state=2;break;case 2:f.popTry(),f.state=18;break;case 13:f.popTry(),
f.maybeUncatchable(),m=f.storedException,f.state=4;break;case 4:return void Promise.resolve(body.showMessageBox({
message:"Can't save file.",detail:"Selected directory is read-only.",buttons:["Cancel","Save As…"]
})).then(f.createCallback(6),f.errback);case 6:i=f.value,f.state=5;break;case 5:f.state=0===i?7:10;
break;case 7:f.returnValue=void 0,f.state=8;break;case 8:f.state=-2;break;case 10:
this._exportFile({format:n,data:r}),f.state=18;break;case 18:f.state=a?50:-2;break;
case 50:s=o(a),u="html"===s?"html":"xml",f.state=51;break;case 51:f.pushTry(43,null),
f.state=46;break;case 46:f.state="jpg"===n?22:28;break;case 22:d=new Uint8Array(atob(r.substring(23)).split("").map(function(e){
return e.charCodeAt(0)})),f.state=23;break;case 23:return void Promise.resolve(c(a,d,"image/jpeg")).then(f.createCallback(21),f.errback);
case 28:f.state="png"===s?26:21;break;case 26:h=new Uint8Array(atob(r.substring(22)).split("").map(function(e){
return e.charCodeAt(0)})),f.state=27;break;case 27:return void Promise.resolve(c(a,h,"image/png")).then(f.createCallback(21),f.errback);
case 21:f.popTry(),f.state=-2;break;case 43:f.popTry(),f.maybeUncatchable(),m=f.storedException,
f.state=30;break;case 30:return void Promise.resolve(body.showMessageBox({message:"Can't save file.",
detail:'The file "'+a.name+'" is read-only.',buttons:["Cancel","Save As…"]})).then(f.createCallback(32),f.errback);
case 32:b=f.value,f.state=31;break;case 31:f.state=0===b?33:41;break;case 33:f.returnValue=void 0,
f.state=34;break;case 34:f.state=-2;break;case 41:f.state=1===b?39:-2;break;case 39:
this._exportFile({format:n,data:r}),f.state=40;break;case 40:f.returnValue=void 0,
f.state=37;break;case 37:f.state=-2;break;default:return f.end()}},this)},_toggleTextInputMode:function(e){
e===!0?this._textInputModeCounter+=1:e===!1&&(this._textInputModeCounter-=1),this._textInputModeCounter<0&&(this._textInputModeCounter=0);
},_setChangeCounter:function(e){var t=this._changeCounter;"increment"===e?this._changeCounter+=1:"decrement"===e?this._changeCounter-=1:"reset"===e&&(this._changeCounter=0),
this.dispatchEvent(new CustomEvent("artworkchange",{bubbles:!0,detail:this})),0!==t!=(0!==this._changeCounter)&&this.dispatchEvent(new CustomEvent("editedchange",{
bubbles:!0,detail:this}))}},{},e)}(HTMLElement),f=i("bx-editor",m);return{get default(){
return f}}}),System.registerModule("elements/bx-masterbody",[],function(){"use strict";
System.get("elements/bx-editor"),System.get("elements/bx-messagebox"),System.get("elements/bx-menubar"),
System.get("elements/bx-menu"),System.get("elements/bx-menuitem"),System.get("elements/bx-tabs");
var e=System.get("utils/element"),t=e.createElement,n=e.registerElement,r=System.get("utils/string").toDashCase,a=System.get("utils/time"),i=a.debounce,s=a.sleep,o=System.get("utils/vendor").getOperatingSystemName,l=System.get("utils/window"),u=l.createAppWindow,c=l.getBackgroundWindow,d=System.get("utils/constants"),h=d.APP_NAME,b=d.APP_VERSION,m=System.get("utils/filesystem"),f=m.getEntryBaseName,v=m.getEntryDisplayPath,g=m.getEntryExtension,p=m.chooseEntry,_=m.compareEntries,w=m.restoreEntry,k=System.get("classes/shortcut")["default"],y=Number.parseInt,x="frontend/about.html",C="frontend/preferences.html",S=10,E=["transform-tool","edit-tool","quad-bezier-tool","cubic-bezier-tool","freehand-tool","text-tool","triangle-tool","rectangle-tool","n-gon-tool","star-tool","ellipse-tool","ring-tool"],A=["fill-panel","stroke-panel","compositing-panel","view-panel","arrangement-panel","typography-panel","defs-panel","mask-panel","geometry-panel","path-panel","export-panel"],R=navigator.userAgent.includes("Chrome/52"),T={
"Boxy SVG":{backend:"chrome",backendSupportsRasterization:R,badge:!0,debugMenu:!1,
reviewsURL:"https://chrome.google.com/webstore/detail/boxy-svg/gaoogdonmngmdlbinmiclicjpbjhgomg/reviews",
supportURL:"https://chrome.google.com/webstore/detail/boxy-svg/gaoogdonmngmdlbinmiclicjpbjhgomg/support",
tools:$traceurRuntime.spread(E),panels:$traceurRuntime.spread(A)},"Boxy SVG Pro":{
backend:"chrome",backendSupportsRasterization:R,badge:!1,debugMenu:!1,reviewsURL:"https://chrome.google.com/webstore/detail/boxy-svg/gaoogdonmngmdlbinmiclicjpbjhgomg/reviews",
supportURL:"https://chrome.google.com/webstore/detail/boxy-svg/gaoogdonmngmdlbinmiclicjpbjhgomg/support",
tools:$traceurRuntime.spread(E),panels:$traceurRuntime.spread(A)},"Boxy SVG Dev":{
backend:"chrome",backendSupportsRasterization:R,badge:!1,debugMenu:!0,reviewsURL:"https://chrome.google.com/webstore/detail/boxy-svg/gaoogdonmngmdlbinmiclicjpbjhgomg/reviews",
supportURL:"https://chrome.google.com/webstore/detail/boxy-svg/gaoogdonmngmdlbinmiclicjpbjhgomg/support",
tools:$traceurRuntime.spread(E),panels:$traceurRuntime.spread(A)}},L={id:"preferencesAppWindow",
resizable:!1,hidden:!0,frame:{type:"chrome",color:"#333"},outerBounds:{width:700,
minWidth:700,maxWidth:700,height:450,minHeight:450,maxHeight:450}},P={id:"aboutAppWindow",
resizable:!1,hidden:!0,frame:{type:"chrome",color:"#333"},outerBounds:{width:340,
minWidth:340,maxWidth:340,height:400,minHeight:400,maxHeight:400}},M='\n  <style>@import url("stylesheets/bx-masterbody.css");</style>\n\n  <bx-menubar id="menubar">\n    <bx-menu label="File">\n      <bx-menuitem commandid="new" label="New" shortcut="Control+N"></bx-menuitem>\n      <bx-menuitem commandid="newFromSelected" label="New from Selected" shortcut="Control+Shift+N"></bx-menuitem>\n      <bx-menuitem commandid="open" label="Open…" shortcut="Control+O"></bx-menuitem>\n      <bx-menuitem id="open-recent-menu-item" label="Open Recent">\n        <bx-menu id="open-recent-menu"></bx-menu>\n      </bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="save" label="Save" shortcut="Control+S"></bx-menuitem>\n      <bx-menuitem commandid="saveAs" label="Save As…" shortcut="Control+Shift+S"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="reloadFromDisk" label="Reload from Disk"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="close" label="Close" shortcut="Control+W"></bx-menuitem>\n      <bx-menuitem commandid="quit" label="Quit Boxy SVG" shortcut="Control+Q"></bx-menuitem>\n    </bx-menu>\n\n    <bx-menu label="Edit">\n      <bx-menuitem commandid="undo" label="Undo" shortcut="Control+Z"></bx-menuitem>\n      <bx-menuitem commandid="redo" label="Redo" shortcut="Control+Shift+Z"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="cut" label="Cut" shortcut="Control+X"></bx-menuitem>\n      <bx-menuitem commandid="copy" label="Copy" shortcut="Control+C"></bx-menuitem>\n      <bx-menuitem commandid="paste" label="Paste" shortcut="Control+V"></bx-menuitem>\n      <bx-menuitem commandid="duplicate" label="Duplicate" shortcut="Control+D"></bx-menuitem>\n      <bx-menuitem commandid="delete" label="Delete"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="grabPaintColor" label="Grab Paint Color" shortcut="Q"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="selectAll" label="Select All" shortcut="Control+A"></bx-menuitem>\n      <bx-menuitem commandid="deselectAll" label="Deselect All" shortcut="Control+Shift+A"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="preferences" label="Preferences…"></bx-menuitem>\n    </bx-menu>\n\n    <bx-menu label="View">\n      <bx-menuitem commandid="zoomIn" label="Zoom In" shortcut="="></bx-menuitem>\n      <bx-menuitem commandid="zoomOut"label="Zoom Out" shortcut="-"></bx-menuitem>\n      <bx-menuitem commandid="resetZoom" label="Reset Zoom" shortcut="1"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="zoomToViewBox" label="Zoom to View Box" shortcut="2"></bx-menuitem>\n      <bx-menuitem commandid="zoomToViewBoxWidth" label="Zoom to View Box Width" shortcut="3"></bx-menuitem>\n      <bx-menuitem commandid="zoomToViewBoxHeight" label="Zoom to View Box Height" shortcut="4"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="zoomToFitAll"label="Zoom to Fit All" shortcut="5"></bx-menuitem>\n    </bx-menu>\n\n    <bx-menu label="Element">\n      <bx-menuitem commandid="group" label="Group" shortcut="Control+G"></bx-menuitem>\n      <bx-menuitem commandid="ungroup" label="Ungroup" shortcut="Control+Shift+G"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="raise" label="Raise" shortcut="]"></bx-menuitem>\n      <bx-menuitem commandid="lower" label="Lower" shortcut="["></bx-menuitem>\n      <bx-menuitem commandid="raiseToFront" label="Raise to Front" shortcut="Control+]"></bx-menuitem>\n      <bx-menuitem commandid="lowerToBack" label="Lower to Back" shortcut="Control+["></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="clip" label="Clip"></bx-menuitem>\n      <bx-menuitem commandid="unclip"label="Unclip"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="mask" label="Mask"></bx-menuitem>\n      <bx-menuitem commandid="unmask" label="Unmask"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="rotateClockwise" label="Rotate +90°" shortcut="Control+Shift+ArrowRight"></bx-menuitem>\n      <bx-menuitem commandid="rotateCounterclockwise" label="Rotate -90°" shortcut="Control+Shift+ArrowLeft"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="flipX" label="Flip X" shortcut="Control+Shift+ArrowUp"></bx-menuitem>\n      <bx-menuitem commandid="flipY" label="Flip Y" shortcut="Control+Shift+ArrowDown"></bx-menuitem>\n      <hr/>\n      <bx-menuitem label="Path">\n        <bx-menu>\n          <bx-menuitem commandid="convertToPath" label="Convert to Path"></bx-menuitem>\n          <bx-menuitem commandid="reversePath" label="Reverse Path"></bx-menuitem>\n          <hr/>\n          <bx-menuitem commandid="unite" label="Unite"></bx-menuitem>\n          <bx-menuitem commandid="subtract" label="Subtract"></bx-menuitem>\n          <bx-menuitem commandid="intersect" label="Intersect"></bx-menuitem>\n          <bx-menuitem commandid="exclude" label="Exclude"></bx-menuitem>\n          <hr/>\n          <bx-menuitem commandid="combine" label="Combine"></bx-menuitem>\n          <bx-menuitem commandid="breakApart" label="Break Apart"></bx-menuitem>\n        </bx-menu>\n      </bx-menuitem>\n      <bx-menuitem label="Move">\n        <bx-menu>\n          <bx-menuitem commandid="moveOneUnitLeft" label="Move 1 Unit Left"></bx-menuitem>\n          <bx-menuitem commandid="moveOneUnitRight" label="Move 1 Unit Right"></bx-menuitem>\n          <bx-menuitem commandid="moveOneUnitUp" label="Move 1 Unit Up"></bx-menuitem>\n          <bx-menuitem commandid="moveOneUnitDown" label="Move 1 Unit Down"></bx-menuitem>\n          <hr/>\n          <bx-menuitem commandid="moveTenUnitsLeft" label="Move 10 Units Left"></bx-menuitem>\n          <bx-menuitem commandid="moveTenUnitsRight" label="Move 10 Units Right"></bx-menuitem>\n          <bx-menuitem commandid="moveTenUnitsUp" label="Move 10 Units Up"></bx-menuitem>\n          <bx-menuitem commandid="moveTenUnitsDown" label="Move 10 Units Down"></bx-menuitem>\n        </bx-menu>\n      </bx-menuitem>\n    </bx-menu>\n\n    <bx-menu label="Tools" id="tools-menu">\n      <bx-menuitem commandid="previousTool" label="Previous Tool" shortcut="Space"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="transformTool" label="Transform Tool" shortcut="Alt+T"></bx-menuitem>\n      <bx-menuitem commandid="editTool" label="Edit Tool" shortcut="Alt+E"></bx-menuitem>\n      <bx-menuitem commandid="quadBezierTool" label="Quad Bezier Tool" shortcut="Alt+Q"></bx-menuitem>\n      <bx-menuitem commandid="cubicBezierTool" label="Cubic Bezier Tool" shortcut="Alt+C"></bx-menuitem>\n      <bx-menuitem commandid="freehandTool" label="Freehand Tool" shortcut="Alt+F"></bx-menuitem>\n      <bx-menuitem commandid="textTool" label="Text Tool" shortcut="Alt+Shift+T"></bx-menuitem>\n      <bx-menuitem commandid="triangleTool" label="Triangle Tool" shortcut="Alt+Y"></bx-menuitem>\n      <bx-menuitem commandid="rectangleTool" label="Rectangle Tool" shortcut="Alt+R"></bx-menuitem>\n      <bx-menuitem commandid="nGonTool" label="N-gon Tool" shortcut="Alt+N"></bx-menuitem>\n      <bx-menuitem commandid="starTool" label="Star Tool" shortcut="Alt+S"></bx-menuitem>\n      <bx-menuitem commandid="ellipseTool" label="Ellipse Tool" shortcut="Alt+Shift+E"></bx-menuitem>\n      <bx-menuitem commandid="ringTool" label="Ring Tool" shortcut="Alt+Shift+R"></bx-menuitem>\n    </bx-menu>\n\n    <bx-menu label="Panels" id="panels-menu">\n      <bx-menuitem commandid="fillPanel" label="Fill Panel" shortcut="F"></bx-menuitem>\n      <bx-menuitem commandid="strokePanel" label="Stroke Panel" shortcut="S"></bx-menuitem>\n      <bx-menuitem commandid="compositingPanel" label="Compositing Panel" shortcut="C"></bx-menuitem>\n      <bx-menuitem commandid="viewPanel" label="View Panel" shortcut="V"></bx-menuitem>\n      <bx-menuitem commandid="arrangementPanel" label="Arrangement Panel" shortcut="A"></bx-menuitem>\n      <bx-menuitem commandid="typographyPanel" label="Typography Panel"  shortcut="T"></bx-menuitem>\n      <bx-menuitem commandid="defsPanel" label="Defs Panel" shortcut="D"></bx-menuitem>\n      <bx-menuitem commandid="maskPanel" label="Mask Panel" shortcut="M"></bx-menuitem>\n      <bx-menuitem commandid="geometryPanel" label="Geometry Panel" shortcut="G"></bx-menuitem>\n      <bx-menuitem commandid="pathPanel" label="Path Panel" shortcut="X"></bx-menuitem>\n      <bx-menuitem commandid="exportPanel" label="Export Panel" shortcut="E"></bx-menuitem>\n    </bx-menu>\n\n    <bx-menu label="Window" id="window-menu">\n      <bx-menuitem commandid="showPreviousTab" label="Show Previous Tab" shortcut="Control+ArrowLeft"></bx-menuitem>\n      <bx-menuitem commandid="showNextTab" label="Show Next Tab" shortcut="Control+ArrowRight"></bx-menuitem>\n      <bx-menuitem commandid="moveTabLeft" label="Move Tab Left" shortcut="Control+Alt+ArrowLeft"></bx-menuitem>\n      <bx-menuitem commandid="moveTabRight" label="Move Tab Right" shortcut="Control+Alt+ArrowRight"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="minimizeWindow" label="Minimize"></bx-menuitem>\n      <bx-menuitem commandid="maximizeWindow" label="Maximize"></bx-menuitem>\n      <bx-menuitem commandid="fullscreen" label="Fullscreen"></bx-menuitem>\n    </bx-menu>\n\n    <bx-menu label="Help">\n      <bx-menuitem commandid="about" label="About"></bx-menuitem>\n      <bx-menuitem commandid="rate" label="Rate on Chrome Web Store…"></bx-menuitem>\n      <bx-menuitem commandid="support" label="Get Support…"></bx-menuitem>\n    </bx-menu>\n\n    <bx-menu label="Debug" id="debug-menu">\n      <bx-menuitem commandid="reloadApp" label="Reload App" shortcut="Control+Shift+R"></bx-menuitem>\n      <bx-menuitem commandid="reloadCurrentEditor" label="Reload Editor" shortcut="Control+R"></bx-menuitem>\n    </bx-menu>\n  </bx-menubar>\n\n  <bx-tabs id="tabs"></bx-tabs>\n  <div id="editors"></div>\n  <dialog id="message-box" is="bx-messagebox"></dialog>\n',j=function(e){
function n(){$traceurRuntime.superConstructor(n).apply(this,arguments)}return $traceurRuntime.createClass(n,{
createdCallback:function(){var e,t,n,r,a,l,u;return $traceurRuntime.asyncWrap(function(d){
for(;;)switch(d.state){case 0:e=this,this._commands={"new":{exec:function(){return e._openEditorWidthDefaultArtwork();
}},newFromSelected:{enabled:function(){return null!==e.currentEditor},exec:function(){
return e._openEditorWithArtworkImportedFromSelectedElements()}},open:{exec:function(){
return s(300).then(function(){return e._openEditorsWithUserSelectedEntries()})}},
clearRecent:{exec:function(){return e._clearRecentEntries()}},save:{enabled:function(){
return e.currentEditor&&e.currentEditor.edited},exec:function(){return s(300).then(function(){
return e._saveCurrentEditorArtwork()})}},saveAs:{exec:function(){return s(300).then(function(){
return e._saveCurrentEditorArtworkAs()})}},reloadFromDisk:{enabled:function(){return e.currentEditor&&e.currentEditor.canReloadArtworkFromDisk();
},exec:function(){return e.currentEditor.reloadArtworkFromDisk()}},close:{exec:function(){
return e._closeEditor(e.currentEditor.id)}},quit:{exec:function(){return e._closeAllAppWindows();
}},showPreviousTab:{enabled:function(){return e._canToggleEditorForPreviousTab()},
exec:function(){return e._toggleEditorForPreviousTab()}},showNextTab:{enabled:function(){
return e._canToggleEditorForNextTab()},exec:function(){return e._toggleEditorForNextTab();
}},moveTabLeft:{enabled:function(){return e["#tabs"].childElementCount>1},exec:function(){
return e._moveCurrentEditorTabLeft()}},moveTabRight:{enabled:function(){return e["#tabs"].childElementCount>1;
},exec:function(){return e._moveCurrentEditorTabRight()}},minimizeWindow:{exec:function(){
return chrome.app.window.current().minimize()}},maximizeWindow:{enabled:function(){
return chrome.app.window.current().isFullscreen()===!1},exec:function(){return e._maximizeCurrentAppWindow();
}},fullscreen:{exec:function(){return e._toggleCurrentAppWindowFullscreenMode()}},
about:{exec:function(){return e._openAboutAppWindow()}},preferences:{exec:function(){
return e._openPreferencesAppWindow()}},rate:{enabled:function(){return navigator.onLine;
},exec:function(){return chrome.browser.openTab({url:e.distribution.reviewsURL})}
},support:{enabled:function(){return navigator.onLine},exec:function(){return chrome.browser.openTab({
url:e.distribution.supportURL})}},reloadApp:{exec:function(){return s(50).then(function(){
return chrome.runtime.reload()})}},reloadCurrentEditor:{exec:function(){return e.currentEditor.reload();
}}},this._shouldStoreSessionOnUserIdle=!1,this._toggleEditorQueue=[],this._distribution=T[h],
this._messageCounter=0,this._messageRequestCallbacks={},this._messageResponseCallbacks={},
this._aboutAppWindow=null,this._preferencesAppWindow=null,d.state=8;break;case 8:
return void Promise.resolve(c()).then(d.createCallback(3),d.errback);case 3:this._backgroundWindow=d.value,
d.state=2;break;case 2:this._storeSessionDebounced=i(this._storeSession,2e3,this),
"windows"===o()&&this.setAttribute("bordered",""),this._shadowRoot=this.createShadowRoot({
mode:"closed"}),this._shadowRoot.innerHTML=M,t=!0,n=!1,r=void 0;try{for(a=void 0,
l=this._shadowRoot.querySelectorAll("[id]")[Symbol.iterator]();!(t=(a=l.next()).done);t=!0)u=a.value,
this["#"+u.id]=u}catch(m){n=!0,r=m}finally{try{t||null==l["return"]||l["return"]();
}finally{if(n)throw r}}chrome.idle.setDetectionInterval(15),chrome.idle.onStateChanged.addListener(function(t){
return e._onUserIdleStateChange(t)}),this.addMessageListener("getConfig",function(t,n){
return e.getConfig(t).then(n)}),this.addMessageListener("setConfig",function(t,n){
return e.setConfig(t.key,t.value).then(n)}),this.addMessageListener("getClipboardData",function(t,n){
return e.getClipboardtData().then(function(e){return n(e)})}),this.addMessageListener("setClipboardData",function(t,n){
return e.setClipboardData(t)}),this.addMessageListener("getBackendName",function(e,t){
return t("chrome")}),this.addMessageListener("getAppName",function(e,t){return t(h);
}),this.addMessageListener("getAppVersion",function(e,t){return t(b)}),this.addMessageListener("getShortcutsEditorModel",function(t,n){
return n(e._getShortcutsEditorModel())}),this.addMessageListener("openExternalURL",function(e){
return chrome.browser.openTab({url:e})}),this.addMessageListener("showMessageBox",function(t,n){
return e.showMessageBox(t).then(n)}),this.addMessageListener("configChanged",function(t){
return e._onConfigChange(t)}),this.addMessageListener("openEntries",function(t){return $traceurRuntime.asyncWrap(function(n){
for(;;)switch(n.state){case 0:n.returnValue=e._openEditorsWithRetainedEntries(t),
n.state=2;break;case 2:n.state=-2;break;default:return n.end()}},this)}),window.addEventListener("message",function(t){
return e._onMessage(t)}),window.addEventListener("focus",function(){return e._focusCurrentEditor();
}),this.addEventListener("keydown",function(t){return e._onKeyDown(t)},!0),this["#menubar"].addEventListener("dragover",function(t){
return e._onMenubarDragOver(t)}),this["#menubar"].addEventListener("drop",function(t){
return e._onMenubarDrop(t)}),this["#menubar"].addEventListener("menuitemtrigger",function(t){
return e._onMenuItemTrigger(t)}),this["#menubar"].addEventListener("blur",function(t){
return e._onMenubarBlur(t)}),this["#tabs"].addEventListener("mousedown",function(e){
return e.preventDefault()}),this["#tabs"].addEventListener("tabopenintent",function(t){
return e._openEditorWidthDefaultArtwork()}),this["#tabs"].addEventListener("tabcloseintent",function(t){
return e._closeEditor(t.detail.href.substring(1))}),this["#tabs"].addEventListener("tabdown",function(t){
return e._toggleEditor(t.detail.href.substring(1))}),this["#tabs"].addEventListener("tabslotchange",function(t){
return e._onTabSlotChange(t)}),this["#tabs"].addEventListener("dragover",function(t){
return e._onTabsDragOver(t)}),this["#tabs"].addEventListener("drop",function(t){return e._onTabsDrop(t);
}),this["#editors"].addEventListener("editedchange",function(t){return e._onEditorEditedChange(t);
}),this["#editors"].addEventListener("artworkchange",function(t){return e._onEditorArtworkChange(t);
}),this["#editors"].addEventListener("entrychange",function(t){return e._onEditorEntryChange(t);
}),this["#editors"].addEventListener("ready",function(t){return e._onEditorReady(t);
}),this["#editors"].addEventListener("dragover",function(t){return e._onEditorsDragOver(t);
}),this["#editors"].addEventListener("drop",function(t){return e._onEditorsDrop(t);
}),this["#menubar"].menuWillShow=function(t){return e._validateMenu(t)},this["#menubar"].menuItemWillTrigger=function(t){
return e._validateMenuItem(t)},this["#debug-menu"].hidden=this.distribution.debugMenu===!1,
this._updateMainMenuWithUserShortcuts(),this.postMessage("background","ready"),d.state=10;
break;case 10:return void Promise.resolve(this._dbOpen()).then(d.createCallback(6),d.errback);
case 6:this._db=d.value,d.state=5;break;case 5:this._restoreSession(),d.state=-2;break;
default:return d.end()}},this)},get distribution(){return this._distribution},get commands(){
return this._commands},get currentEditor(){var e=!0,t=!1,n=void 0;try{for(var r=void 0,a=this["#editors"].children[Symbol.iterator]();!(e=(r=a.next()).done);e=!0){
var i=r.value;if(i.disabled===!1)return i}}catch(s){t=!0,n=s}finally{try{e||null==a["return"]||a["return"]();
}finally{if(t)throw n}}return null},postMessage:function(e,t){var n=void 0!==arguments[2]?arguments[2]:null,r=void 0!==arguments[3]?arguments[3]:null,a=this._messageCounter++,i={
channel:"request",id:a,name:t,arg:n};r&&(this._messageResponseCallbacks[i.id]=r),
"background"===e&&this._backgroundWindow?this._backgroundWindow.postMessage(i,"*"):"preferences"===e&&this._preferencesAppWindow?this._preferencesAppWindow.contentWindow.postMessage(i,"*"):"about"===e&&this._aboutAppWindow&&this._aboutAppWindow.contentWindow.postMessage(i,"*");
},addMessageListener:function(e,t){this._messageRequestCallbacks[e]||(this._messageRequestCallbacks[e]=[]),
this._messageRequestCallbacks[e].push(t)},removeMessageListener:function(e,t){this._messageRequestCallbacks[e]&&(this._messageRequestCallbacks[e]=this._messageRequestCallbacks[e].filter(function(e){
return e!==t}))},getConfig:function(e){var t=this;return new Promise(function(n){
t.postMessage("background","getConfig",e,n)})},setConfig:function(e,t){var n=this;
return new Promise(function(r){n.postMessage("background","setConfig",{key:e,value:t
},r)})},getClipboardData:function(){return new Promise(function(e){var t,n=function(e){
return new Promise(function(t){if("image/png"===e.type){var n=e.getAsFile();if(n){
var r=new FileReader;r.readAsDataURL(n),r.addEventListener("load",function(e){t("data:"!==e.target.result?e.target.result:null);
})}else t(null)}else"text/plain"===e.type||"text/html"===e.type||"image/svg+xml"===e.type?e.getAsString(function(e){
t(e)}):(console.warn("Clipboard contains data with unsupported mime-type:",e.type),
t(null))})};document.addEventListener("paste",t=function(r){document.removeEventListener("paste",t);
var a=Array.prototype.slice.call(r.clipboardData.items,0),i={},s=0;a?a.forEach(function(t){
var r,o;return $traceurRuntime.asyncWrap(function(l){for(;;)switch(l.state){case 0:
r=t.type,l.state=5;break;case 5:return void Promise.resolve(n(t)).then(l.createCallback(3),l.errback);
case 3:o=l.value,l.state=2;break;case 2:o&&(i[r]=o),s+=1,s===a.length&&e(i),l.state=-2;
break;default:return l.end()}},this)}):e(i)}),document.execCommand("paste")})},setClipboardData:function(e){
return new Promise(function(t){var n;document.addEventListener("copy",n=function(r){
return $traceurRuntime.asyncWrap(function(a){for(;;)switch(a.state){case 0:document.removeEventListener("copy",n),
r.preventDefault(),r.clipboardData.items.clear(),e["text/plain"]&&r.clipboardData.items.add(e["text/plain"],"text/plain"),
e["text/html"]&&r.clipboardData.items.add(e["text/html"],"text/html"),t(),a.state=-2;
break;default:return a.end()}},this)}),document.execCommand("copy")})},execCommand:function(e){
for(var t=document.activeElement;t._shadowRoot&&t._shadowRoot.activeElement;)t=t._shadowRoot.activeElement;
for(var n=t;n;n=n.parentNode||n.host)if(n.commands&&n.commands[e]){n.commands[e].exec();
break}},getRetainedRecentEntries:function(){return this._dbGetRecent()},rasterizeArtwork:function(e){
var t=void 0!==arguments[1]?arguments[1]:"png",n=(void 0!==arguments[2]?arguments[2]:1,
void 0!==arguments[3]?arguments[3]:!0),r=this;return new Promise(function(a,i){var o,l,u,c,d;
return $traceurRuntime.asyncWrap(function(h){for(;;)switch(h.state){case 0:o='\n        let svg = document.querySelector("svg");\n        let width = svg.viewBox.baseVal.width;\n        let height = svg.viewBox.baseVal.height;\n        svg.setAttribute("width", width + "px");\n        svg.setAttribute("height", height + "px");\n        [width, height];\n      ',
l="\n        display: block;\n        position: fixed;\n        width: 1px;\n        height: 1px;\n        top: 0px;\n        left: 0px;\n        opacity: 0.01;\n      ",
u="jpg"===t?"jpeg":t,c=document.createElement("webview"),"png"===u&&n&&c.setAttribute("allowtransparency",""),
c.setAttribute("partition","persist:boxy"),c.setAttribute("style",l),c.src="data:image/svg+xml;utf8,"+e,
r._shadowRoot.append(c),c.addEventListener("contentload",d=function(){c.removeEventListener("contentload",d),
c.executeScript({code:o},function(e){var t,n,r,o,l;return $traceurRuntime.asyncWrap(function(d){
for(;;)switch(d.state){case 0:r=e[0],t=r[Symbol.iterator](),o=(n=t.next()).done?void 0:n.value,
l=(n=t.next()).done?void 0:n.value,c.style.width=o+"px",c.style.height=l+"px",d.state=4;
break;case 4:return void Promise.resolve(s(200)).then(d.createCallback(2),d.errback);
case 2:c.captureVisibleRegion({format:u},function(e){c.remove(),chrome.runtime.lastError?i(chrome.runtime.lastError.message):a(e);
}),d.state=-2;break;default:return d.end()}},this)})}),h.state=-2;break;default:return h.end();
}},this)})},_onMessage:function(e){var t=e.source;if(t===this._backgroundWindow||this._preferencesAppWindow&&t===this._preferencesAppWindow.contentWindow||this._aboutAppWindow&&t===this._aboutAppWindow.contentWindow){
var n=e.data,r=n.channel,a=n.id,i=n.name,s=n.arg;"request"===r?this._messageRequestCallbacks[i]&&this._messageRequestCallbacks[i].forEach(function(e){
e(s,function(e){var n={channel:"response",id:a,name:i,arg:e};t.postMessage(n,"*");
})}):"response"===r&&this._messageResponseCallbacks[a]&&(this._messageResponseCallbacks[a](s),
delete this._messageResponseCallbacks[a])}},_onConfigChange:function(e){this.dispatchEvent(new CustomEvent("configchange",{
detail:e}));var t=e,n=t.key,r=t.value;this.postMessage("about","configChanged",{key:n,
value:r}),this.postMessage("preferences","configChanged",{key:n,value:r});var a=!0,i=!1,s=void 0;
try{for(var o=void 0,l=this["#editors"].children[Symbol.iterator]();!(a=(o=l.next()).done);a=!0){
var u=o.value;u.postMessage&&u.postMessage("configChanged",{key:n,value:r})}}catch(c){
i=!0,s=c}finally{try{a||null==l["return"]||l["return"]()}finally{if(i)throw s}}"bx-shortcutseditor:userShortcuts"===n&&this._updateMainMenuWithUserShortcuts();
},_onUserIdleStateChange:function(e){"idle"===e&&this._shouldStoreSessionOnUserIdle&&(this._shouldStoreSessionOnUserIdle=!1,
this._storeSession())},_onKeyDown:function(e){var t=k.fromEvent(e);this.currentEditor&&this.currentEditor.textInputMode?(t.ctrl||t.alt||t.meta)&&this["#menubar"].triggerItemForShortcut(t):this["#menubar"].triggerItemForShortcut(t);
},_onDragOver:function(e){e.preventDefault(),e.dataTransfer.effectAllowed="copy",
e.dataTransfer.dropEffect="copy"},_onDrop:function(e){e.preventDefault();var t=[],n=!0,r=!1,a=void 0;
try{for(var i=void 0,s=e.dataTransfer.items[Symbol.iterator]();!(n=(i=s.next()).done);n=!0){
var o=i.value,l=o.webkitGetAsEntry(),u=g(l).toLowerCase();["svg","svgz","html"].includes(u)?t.push(l):["png","jpg","jpeg","webp","gif"].includes(u)&&t.push(l);
}}catch(c){r=!0,a=c}finally{try{n||null==s["return"]||s["return"]()}finally{if(r)throw a;
}}this._openEditorsWithEntries(t),this._addRecentEntries(t)},_onMenubarDragOver:function(e){
this._onDragOver(e)},_onMenubarDrop:function(e){this._onDrop(e)},_onTabSlotChange:function(e){
this._storeSessionDebounced()},_onTabsDragOver:function(e){this._onDragOver(e)},_onTabsDrop:function(e){
this._onDrop(e)},_onEditorsDragOver:function(e){null===this.currentEditor&&this._onDragOver(e);
},_onEditorsDrop:function(e){null===this.currentEditor&&this._onDrop(e)},_onEditorReady:function(e){
var t=e.detail;this._toggleEditorQueue[0]===t&&this._toggleEditor(t.id)},_onEditorEditedChange:function(e){
var t=e.detail,n=this["#tabs"].querySelector('[href="#'+t.id+'"]');n.edited=t.edited;
},_onEditorArtworkChange:function(e){this._storeSessionOnUserIdle()},_onEditorEntryChange:function(e){
var t=e.detail,n=this["#tabs"].querySelector('[href="#'+t.id+'"]');t.entry?(n.label=t.entry.name,
this._addRecentEntries([t.entry])):n.label="Untitled",this._storeSessionDebounced();
},_onCurrentEditorChange:function(){this.dispatchEvent(new CustomEvent("currenteditorchange")),
this._storeSessionDebounced();var e=!0,t=!1,n=void 0;try{for(var r=void 0,a=this["#menubar"].querySelectorAll("bx-menu[opened]")[Symbol.iterator]();!(e=(r=a.next()).done);e=!0){
var i=r.value;this._validateMenu(i)}}catch(s){t=!0,n=s}finally{try{e||null==a["return"]||a["return"]();
}finally{if(t)throw n}}},_onMenubarBlur:function(){this.currentEditor&&this.currentEditor.focus();
},_onMenuItemTrigger:function(e){var t,n,r;return $traceurRuntime.asyncWrap(function(a){
for(;;)switch(a.state){case 0:t=e.detail,a.state=12;break;case 12:a.state=t.id.startsWith("open-recent-")?4:8;
break;case 4:n=t.id.substring(12),a.state=5;break;case 5:return void Promise.resolve(w(n)).then(a.createCallback(3),a.errback);
case 3:r=a.value,a.state=2;break;case 2:r&&(this._openEditorsWithEntries([r]),this._addRecentEntries([r])),
a.state=-2;break;case 8:this.commands[t.commandID]?this.commands[t.commandID].exec():this.currentEditor&&this.currentEditor.postMessage("execCommand",t.commandID),
a.state=-2;break;default:return a.end()}},this)},_validateMenu:function(e){var t=this;
return new Promise(function(n){var a,i,o,l,u,c,d,h,b,m,f,v,g,p,_,k,y,x,C,S,E,A,R,T,L,P,M,j,W,D,O,I,B,z,U,F;
return $traceurRuntime.asyncWrap(function($){for(;;)switch($.state){case 0:a=!0,i=!1,
o=void 0;try{for(l=void 0,u=e.children[Symbol.iterator]();!(a=(l=u.next()).done);a=!0)c=l.value,
t._validateMenuItem(c)}catch(N){i=!0,o=N}finally{try{a||null==u["return"]||u["return"]();
}finally{if(i)throw o}}$.state=40;break;case 40:$.state="open-recent-menu"===e.id?1:36;
break;case 1:return void Promise.resolve(t.getRetainedRecentEntries()).then($.createCallback(3),$.errback);
case 3:d=$.value,$.state=2;break;case 2:h="",$.state=33;break;case 33:$.state=d.length>0?27:19;
break;case 27:b=!0,m=!1,f=void 0,$.state=28;break;case 28:$.pushTry(14,15),$.state=17;
break;case 17:v=void 0,g=d[Symbol.iterator](),$.state=13;break;case 13:$.state=(b=(v=g.next()).done)?11:9;
break;case 8:b=!0,$.state=13;break;case 9:p=v.value,$.state=10;break;case 10:return void Promise.resolve(w(p)).then($.createCallback(6),$.errback);
case 6:_=$.value,$.state=5;break;case 5:_&&(h+='<bx-menuitem id="open-recent-'+p+'" label="'+_.name+'"></bx-menuitem>'),
$.state=8;break;case 11:$.popTry(),$.state=15,$.finallyFallThrough=19;break;case 14:
$.popTry(),$.maybeUncatchable(),F=$.storedException,$.state=20;break;case 20:m=!0,
f=F,$.state=15,$.finallyFallThrough=19;break;case 15:$.popTry(),$.state=26;break;case 26:
try{b||null==g["return"]||g["return"]()}finally{if(m)throw f}$.state=24;break;case 19:
e.innerHTML="\n          "+h+'\n          <hr/>\n          <bx-menuitem id="clear-recent-menu-item" commandid="clearRecent" label="Clear Recent"></bx-menuitem>\n        ',
$.state=35;break;case 35:return void Promise.resolve(s(30)).then($.createCallback(31),$.errback);
case 36:if("tools-menu"===e.id){k=t.currentEditor?t.currentEditor.currentToolID:null,
y=!0,x=!1,C=void 0;try{for(S=void 0,E=e.children[Symbol.iterator]();!(y=(S=E.next()).done);y=!0)A=S.value,
A.commandID&&(A.state=A.commandID===k?"toggled":null,"previousTool"!==A.commandID&&(A.hidden=!t.distribution.tools.includes(r(A.commandID))));
}catch(q){x=!0,C=q}finally{try{y||null==E["return"]||E["return"]()}finally{if(x)throw C;
}}}else if("panels-menu"===e.id){R=t.currentEditor?t.currentEditor.currentPanelID:null,
T=!0,L=!1,P=void 0;try{for(M=void 0,j=e.children[Symbol.iterator]();!(T=(M=j.next()).done);T=!0)W=M.value,
W.commandID&&(W.state=W.commandID===R?"toggled":null,W.hidden=!t.distribution.panels.includes(r(W.commandID)));
}catch(H){L=!0,P=H}finally{try{T||null==j["return"]||j["return"]()}finally{if(L)throw P;
}}}else if("window-menu"===e.id){D=!0,O=!1,I=void 0;try{for(B=void 0,z=e.children[Symbol.iterator]();!(D=(B=z.next()).done);D=!0)U=B.value,
"maximizeWindow"===U.commandID?chrome.app.window.current().isMaximized()?U.label="Restore":U.label="Maximize":"fullscreen"===U.commandID&&(chrome.app.window.current().isFullscreen()?U.label="Leave Fullscreen":U.label="Enter Fullscreen");
}catch(Z){O=!0,I=Z}finally{try{D||null==z["return"]||z["return"]()}finally{if(O)throw I;
}}}$.state=31;break;case 31:n(),$.state=-2;break;case 24:$.state=$.finallyFallThrough;
break;default:return $.end()}},this)})},_validateMenuItem:function(e){var t=this;return new Promise(function(n){
if(e.commandID){var r=e.commandID,a=t.commands[r];a?(e.disabled=a.enabled?!a.enabled():!1,
n()):t.currentEditor?t.currentEditor.postMessage("validateCommand",r,function(t){
e.disabled=!t,n()}):(e.disabled=!0,n())}else n()})},_updateMainMenuWithUserShortcuts:function(){
var e=this;return new Promise(function(t){var n,r,a,i,s,o,l,u,c,d,h,b;return $traceurRuntime.asyncWrap(function(m){
for(;;)switch(m.state){case 0:c=e.getConfig,d=c.call(e,"bx-shortcutseditor:userShortcuts"),
m.state=5;break;case 5:return void Promise.resolve(d).then(m.createCallback(3),m.errback);
case 3:h=m.value,m.state=2;break;case 2:b=h?h:{},n=b,m.state=7;break;case 7:r=e["#menubar"].querySelectorAll("bx-menuitem[commandid]"),
a=!0,i=!1,s=void 0;try{for(o=void 0,l=r[Symbol.iterator]();!(a=(o=l.next()).done);a=!0)u=o.value,
n[u.commandID]?u.userShortcut=k.fromString(n[u.commandID]):u.userShortcut=null}catch(f){
i=!0,s=f}finally{try{a||null==l["return"]||l["return"]()}finally{if(i)throw s}}t(),
m.state=-2;break;default:return m.end()}},this)})},_getShortcutsEditorModel:function(){
var e=[],t=!0,n=!1,r=void 0;try{for(var a=void 0,i=this["#menubar"].querySelectorAll("bx-menu")[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){
var s=a.value;if(s.hidden===!1){for(var o=[],l=s;l!==this["#menubar"];l=l.parentElement)l.label&&o.unshift(l.label);
var u=!0,c=!1,d=void 0;try{for(var h=void 0,b=s.children[Symbol.iterator]();!(u=(h=b.next()).done);u=!0){
var m=h.value;m.commandID&&m.hidden===!1&&e.push({id:m.commandID,label:$traceurRuntime.spread(o,[m.label]).join(" ‣ "),
shortcut:m.shortcut?m.shortcut.toString():null})}}catch(f){c=!0,d=f}finally{try{u||null==b["return"]||b["return"]();
}finally{if(c)throw d}}}}}catch(v){n=!0,r=v}finally{try{t||null==i["return"]||i["return"]();
}finally{if(n)throw r}}return e},_openPreferencesAppWindow:function(){var e=this;return new Promise(function(t){
var n,r;return $traceurRuntime.asyncWrap(function(a){for(;;)switch(a.state){case 0:
a.state=e._preferencesAppWindow?6:1;break;case 6:e._preferencesAppWindow.focus(),
t(),a.state=-2;break;case 1:return void Promise.resolve(u(C,L)).then(a.createCallback(3),a.errback);
case 3:e._preferencesAppWindow=a.value,a.state=2;break;case 2:e._preferencesAppWindow.contentWindow.addEventListener("load",n=function(){
return $traceurRuntime.asyncWrap(function(r){for(;;)switch(r.state){case 0:e._preferencesAppWindow.contentWindow.removeEventListener("load",n),
e.postMessage("preferences","init"),r.state=4;break;case 4:return void Promise.resolve(s(150)).then(r.createCallback(2),r.errback);
case 2:e._preferencesAppWindow.show(),t(),r.state=-2;break;default:return r.end();
}},this)}),e._preferencesAppWindow.onClosed.addListener(r=function(){e._preferencesAppWindow.onClosed.removeListener(r),
e._preferencesAppWindow=null}),a.state=-2;break;default:return a.end()}},this)})},
_openAboutAppWindow:function(){var e=this;return new Promise(function(t){var n,r;return $traceurRuntime.asyncWrap(function(a){
for(;;)switch(a.state){case 0:a.state=e._aboutAppWindow?6:1;break;case 6:e._aboutAppWindow.focus(),
t(),a.state=-2;break;case 1:return void Promise.resolve(u(x,P)).then(a.createCallback(3),a.errback);
case 3:e._aboutAppWindow=a.value,a.state=2;break;case 2:e._aboutAppWindow.contentWindow.addEventListener("load",n=function(){
return $traceurRuntime.asyncWrap(function(r){for(;;)switch(r.state){case 0:e._aboutAppWindow.contentWindow.removeEventListener("load",n),
e.postMessage("about","init"),r.state=4;break;case 4:return void Promise.resolve(s(150)).then(r.createCallback(2),r.errback);
case 2:e._aboutAppWindow.show(),t(),r.state=-2;break;default:return r.end()}},this);
}),e._aboutAppWindow.onClosed.addListener(r=function(){e._aboutAppWindow.onClosed.removeListener(r),
e._aboutAppWindow=null}),a.state=-2;break;default:return a.end()}},this)})},_closeAllAppWindows:function(){
this._aboutAppWindow&&this._aboutAppWindow.close(),this._preferencesAppWindow&&this._preferencesAppWindow.close(),
chrome.app.window.current().close()},_maximizeCurrentAppWindow:function(){var e=chrome.app.window.current();
e.isMaximized()?e.restore():e.maximize()},_toggleCurrentAppWindowFullscreenMode:function(){
var e=chrome.app.window.current();e.isFullscreen()?e.restore():e.fullscreen()},showMessageBox:function(e){
var t=this;return new Promise(function(n){var r;t["#message-box"].open&&t["#message-box"].close(null),
t["#menubar"].disabled=!0,t["#message-box"].showModal(e),t["#message-box"].addEventListener("close",r=function(){
t["#menubar"].disabled=!1,t["#message-box"].removeEventListener("close",r),t._focusCurrentEditor(),
n(y(t["#message-box"].returnValue))})})},_openEditorWidthDefaultArtwork:function(){
var e=this;return new Promise(function(n){var r,a,i,s;return $traceurRuntime.asyncWrap(function(o){
for(;;)switch(o.state){case 0:r=e._createUniqueTabID(),a=r.replace("tab","editor"),
i=e["#tabs"].openTab(),i.label="Untitled",i.id=r,i.href="#"+a,i.disabled=!0,s=t("bx-editor"),
s.id=a,s.disabled=!0,e["#editors"].append(s),e._toggleEditor(s.id),o.state=4;break;
case 4:return void Promise.resolve(s.init()).then(o.createCallback(2),o.errback);case 2:
i.disabled=!1,e._storeSessionDebounced(),n(s),o.state=-2;break;default:return o.end();
}},this)})},_openEditorWithArtworkImportedFromSelectedElements:function(){var e=this;
return new Promise(function(n){var r,a,i,s,o;return $traceurRuntime.asyncWrap(function(l){
for(;;)switch(l.state){case 0:return void Promise.resolve(e.currentEditor.getArtworkFromSelectedElements("html")).then(l.createCallback(3),l.errback);
case 3:r=l.value,l.state=2;break;case 2:a=e._createUniqueTabID(),i=a.replace("tab","editor"),
s=e["#tabs"].openTab(),s.label="Untitled",s.id=a,s.href="#"+i,s.disabled=!0,o=t("bx-editor"),
o.id=i,o.disabled=!0,e["#editors"].append(o),e._toggleEditor(o.id),l.state=7;break;
case 7:return void Promise.resolve(o.init(r)).then(l.createCallback(5),l.errback);
case 5:s.disabled=!1,e._storeSessionDebounced(),n(o),l.state=-2;break;default:return l.end();
}},this)})},_openEditorsWithEntries:function(e){var n=this,r=function(e){return new Promise(function(r){
var a,i,s,o,l,u,c,d,h,b,m,v,p,w,k;return $traceurRuntime.asyncWrap(function(y){for(;;)switch(y.state){
case 0:a=null,i=!0,s=!1,o=void 0,y.state=29;break;case 29:y.pushTry(15,16),y.state=18;
break;case 18:l=void 0,u=$traceurRuntime.spread(n["#editors"].children)[Symbol.iterator](),
y.state=14;break;case 14:y.state=(i=(l=u.next()).done)?12:10;break;case 5:i=!0,y.state=14;
break;case 10:c=l.value,y.state=11;break;case 11:y.state=c.entry?1:5;break;case 1:
return void Promise.resolve(_(e,c.entry)).then(y.createCallback(3),y.errback);case 3:
d=y.value,y.state=2;break;case 2:y.state=d?6:5;break;case 6:a=c,y.state=12;break;case 12:
y.popTry(),y.state=16,y.finallyFallThrough=20;break;case 15:y.popTry(),y.maybeUncatchable(),
k=y.storedException,y.state=21;break;case 21:s=!0,o=k,y.state=16,y.finallyFallThrough=20;
break;case 16:y.popTry(),y.state=27;break;case 27:try{i||null==u["return"]||u["return"]();
}finally{if(s)throw o}y.state=25;break;case 20:h=f(e),b=g(e).toLowerCase(),m=null,
v=null,p=function(){a?m=n["#tabs"].querySelector('[href="#'+a.id+'"]'):(m=n["#tabs"].openTab(),
m.id=n._createUniqueTabID(),m.href="#"+m.id.replace("tab","editor"),m.label=h+"."+("svgz"===b||"html"===b?b:"svg"),
m.disabled=!0)},w=function(r){return new Promise(function(i){return $traceurRuntime.asyncWrap(function(s){
for(;;)switch(s.state){case 0:s.state=a?7:3;break;case 7:v=a,r&&n._toggleEditor(v.id),
i(v),s.state=-2;break;case 3:v=t("bx-editor"),v.id=m.id.replace("tab","editor"),v.disabled=!0,
n["#editors"].append(v),r&&n._toggleEditor(v.id),s.state=4;break;case 4:return void Promise.resolve(v.init(null,e)).then(s.createCallback(2),s.errback);
case 2:m.disabled=!1,i(v),s.state=-2;break;default:return s.end()}},this)})},r({createTab:p,
createEditor:w}),y.state=-2;break;case 25:y.state=y.finallyFallThrough;break;default:
return y.end()}},this)})};return new Promise(function(t){var a,i,s,o,l,u,c,d,h,b,m,f,v,g,p,_,w;
return $traceurRuntime.asyncWrap(function(k){for(;;)switch(k.state){case 0:a=[],i=!0,
s=!1,o=void 0,k.state=29;break;case 29:k.pushTry(11,12),k.state=14;break;case 14:
l=void 0,u=e[Symbol.iterator](),k.state=10;break;case 10:k.state=(i=(l=u.next()).done)?8:6;
break;case 5:i=!0,k.state=10;break;case 6:c=l.value,k.state=7;break;case 7:return void Promise.resolve(r(c)).then(k.createCallback(3),k.errback);
case 3:d=k.value,k.state=2;break;case 2:a.push(d),k.state=5;break;case 8:k.popTry(),
k.state=12,k.finallyFallThrough=16;break;case 11:k.popTry(),k.maybeUncatchable(),
w=k.storedException,k.state=17;break;case 17:s=!0,o=w,k.state=12,k.finallyFallThrough=16;
break;case 12:k.popTry(),k.state=23;break;case 23:try{i||null==u["return"]||u["return"]();
}finally{if(s)throw o}k.state=21;break;case 16:h=a[a.length-1],b=a.slice(0,a.length-1),
m=!0,f=!1,v=void 0;try{for(g=void 0,p=a[Symbol.iterator]();!(m=(g=p.next()).done);m=!0)_=g.value,
_.createTab()}catch(y){f=!0,v=y}finally{try{m||null==p["return"]||p["return"]()}finally{
if(f)throw v}}k.state=31;break;case 31:return void Promise.resolve(h.createEditor(!0)).then(k.createCallback(25),k.errback);
case 25:return void Promise.resolve(Promise.all(b.map(function(e){return e.createEditor(!1);
}))).then(k.createCallback(27),k.errback);case 27:n._storeSessionDebounced(),t(),
k.state=-2;break;case 21:k.state=k.finallyFallThrough;break;default:return k.end();
}},this)})},_openEditorsWithRetainedEntries:function(e){var t=this;return new Promise(function(n){
var r,a,i,s,o,l,u,c,d;return $traceurRuntime.asyncWrap(function(h){for(;;)switch(h.state){
case 0:r=[],a=!0,i=!1,s=void 0,h.state=27;break;case 27:h.pushTry(11,12),h.state=14;
break;case 14:o=void 0,l=e[Symbol.iterator](),h.state=10;break;case 10:h.state=(a=(o=l.next()).done)?8:6;
break;case 5:a=!0,h.state=10;break;case 6:u=o.value,h.state=7;break;case 7:return void Promise.resolve(w(u)).then(h.createCallback(3),h.errback);
case 3:c=h.value,h.state=2;break;case 2:c&&r.push(c),h.state=5;break;case 8:h.popTry(),
h.state=12,h.finallyFallThrough=16;break;case 11:h.popTry(),h.maybeUncatchable(),
d=h.storedException,h.state=17;break;case 17:i=!0,s=d,h.state=12,h.finallyFallThrough=16;
break;case 12:h.popTry(),h.state=23;break;case 23:try{a||null==l["return"]||l["return"]();
}finally{if(i)throw s}h.state=21;break;case 16:t._addRecentEntries(r),h.state=29;break;
case 29:return void Promise.resolve(t._openEditorsWithEntries(r)).then(h.createCallback(25),h.errback);
case 25:n(),h.state=-2;break;case 21:h.state=h.finallyFallThrough;break;default:return h.end();
}},this)})},_openEditorsWithUserSelectedEntries:function(){var e=this;return new Promise(function(t){
var n,r;return $traceurRuntime.asyncWrap(function(a){for(;;)switch(a.state){case 0:
a.pushTry(9,null),a.state=12;break;case 12:return void Promise.resolve(p({type:"openFile",
acceptsMultiple:!0,accepts:[{extensions:["svg","svgz","html","png","jpg","jpeg","webp","gif"]
}]})).then(a.createCallback(3),a.errback);case 3:n=a.value,a.state=2;break;case 2:
a.popTry(),a.state=14;break;case 9:a.popTry(),a.maybeUncatchable(),r=a.storedException,
a.state=7;break;case 7:t(),a.state=8;break;case 8:a.returnValue=void 0,a.state=5;break;
case 5:a.state=-2;break;case 14:a.state=n.length>0?16:20;break;case 16:return void Promise.resolve(e._addRecentEntries(n)).then(a.createCallback(17),a.errback);
case 17:return void Promise.resolve(e._openEditorsWithEntries(n)).then(a.createCallback(19),a.errback);
case 20:e.currentEditor&&e.currentEditor.focus(),a.state=19;break;case 19:t(),a.state=-2;
break;default:return a.end()}},this)})},_closeEditor:function(e){var t=this;return new Promise(function(n){
var r,a,i,o,l;return $traceurRuntime.asyncWrap(function(u){for(;;)switch(u.state){
case 0:r=t["#editors"].querySelector("#"+e)||null,a=t["#tabs"].querySelector('[href="#'+r.id+'"]'),
i=function(){var e,i,s,o,l,u,c,d;return $traceurRuntime.asyncWrap(function(h){for(;;)switch(h.state){
case 0:r===t.currentEditor?(e=t["#tabs"].querySelector('[href="#'+r.id+'"]'),i=null,
t["#tabs"].childElementCount>1&&(s=t["#tabs"].getTabsByScreenPosition(),o=s.indexOf(a),
l=s[o+1],u=s[o-1],c=s.find(function(e){return e.disabled===!1&&e!==a}),l&&l.disabled===!1?i=l:u&&u.disabled===!1?i=u:c&&(i=c)),
t["#tabs"].closeTab(e.id),i?(t["#tabs"].highlightTab(i.id),t._toggleEditor(i.href.substring(1))):t._toggleEditor(null)):(d=t["#tabs"].querySelector('[href="#'+r.id+'"]'),
t["#tabs"].closeTab(d.id)),r.remove(),0===t["#editors"].childElementCount?t._storeSession():t._storeSessionDebounced(),
n(!0),h.state=-2;break;default:return h.end()}},this)},u.state=26;break;case 26:u.state=t._restoringSession?22:21;
break;case 22:n(!1),u.state=-2;break;case 21:u.state=null===r?19:17;break;case 19:
n(!1),u.state=-2;break;case 17:a.disabled=!0,u.state=18;break;case 18:u.state=r.edited===!1?14:1;
break;case 14:i(),u.state=-2;break;case 1:return void Promise.resolve(t.showMessageBox({
message:"Would you like to save your changes before closing?",buttons:["Don't Save","Cancel","Save"]
})).then(u.createCallback(3),u.errback);case 3:o=u.value,u.state=2;break;case 2:u.state=2===o?4:11;
break;case 4:return void Promise.resolve(s(30)).then(u.createCallback(5),u.errback);
case 5:return void Promise.resolve(r.save()).then(u.createCallback(8),u.errback);case 8:
l=u.value,u.state=7;break;case 7:l?i():(a.disabled=!1,n(!1)),u.state=-2;break;case 11:
0===o?i():1===o&&(a.disabled=!1,n(!1)),u.state=-2;break;default:return u.end()}},this);
})},_saveCurrentEditorArtwork:function(){var e=this;return new Promise(function(t){
return $traceurRuntime.asyncWrap(function(n){for(;;)switch(n.state){case 0:return void Promise.resolve(e.currentEditor.save()).then(n.createCallback(2),n.errback);
case 2:t(),n.state=-2;break;default:return n.end()}},this)})},_saveCurrentEditorArtworkAs:function(){
var e=this;return new Promise(function(t){return $traceurRuntime.asyncWrap(function(n){
for(;;)switch(n.state){case 0:return void Promise.resolve(e.currentEditor.saveAs()).then(n.createCallback(2),n.errback);
case 2:t(),n.state=-2;break;default:return n.end()}},this)})},_toggleEditor:function(e){
var t=null===e?null:this["#editors"].querySelector("#"+e);if(t!==this.currentEditor)if(t)if(t.ready===!1)this._toggleEditorQueue.unshift(t);else{
this._toggleEditorQueue=[],t.disabled=!1,t.focus();var n=$traceurRuntime.spread(this["#editors"].children).filter(function(t){
return t.id!==e}),r=!0,a=!1,i=void 0;try{for(var s=void 0,o=n[Symbol.iterator]();!(r=(s=o.next()).done);r=!0){
var l=s.value;l.disabled=!0}}catch(u){a=!0,i=u}finally{try{r||null==o["return"]||o["return"]();
}finally{if(a)throw i}}var c=this["#tabs"].querySelector('[href="#'+e+'"]');this["#tabs"].highlightTab(c.id),
this._onCurrentEditorChange()}else{var d=!0,h=!1,b=void 0;try{for(var m=void 0,f=this["#editors"].children[Symbol.iterator]();!(d=(m=f.next()).done);d=!0){
var v=m.value;v.disabled=!0}}catch(g){h=!0,b=g}finally{try{d||null==f["return"]||f["return"]();
}finally{if(h)throw b}}this["#tabs"].highlightTab(null),this._onCurrentEditorChange();
}},_toggleEditorForPreviousTab:function(){var e=this["#tabs"].querySelector("[highlighted]"),t=this["#tabs"].getTabsByScreenPosition();
if(t=t.filter(function(t){return t.disabled===!1||t===e}),e){var n=t.indexOf(e),r=t[n-1],a=t[t.length-1];
if(r){var i=r.href.substring(1);this._toggleEditor(i)}else if(a&&a!==e){var s=a.href.substring(1);
this._toggleEditor(s)}}},_toggleEditorForNextTab:function(){var e=this["#tabs"].querySelector("[highlighted]"),t=this["#tabs"].getTabsByScreenPosition();
if(t=t.filter(function(t){return t.disabled===!1||t===e}),e){var n=t.indexOf(e),r=t[n+1],a=t[0];
if(r){var i=r.href.substring(1);this._toggleEditor(i)}else if(a&&a!==e){var s=a.href.substring(1);
this._toggleEditor(s)}}},_canToggleEditorForPreviousTab:function(){var e=this["#tabs"].querySelector("[highlighted]"),t=this["#tabs"].getTabsByScreenPosition();
if(t=t.filter(function(t){return t.disabled===!1||t===e}),e){var n=t.indexOf(e),r=t[n-1],a=t[t.length-1];
return r?!0:!(!a||a===e)}return!1},_canToggleEditorForNextTab:function(){var e=this["#tabs"].querySelector("[highlighted]"),t=this["#tabs"].getTabsByScreenPosition();
if(t=t.filter(function(t){return t.disabled===!1||t===e}),e){var n=t.indexOf(e),r=t[n+1],a=t[0];
return r?!0:!(!a||a===e)}return!1},_moveCurrentEditorTabLeft:function(){this["#tabs"].moveHighlightedTabLeft(),
this._storeSessionDebounced()},_moveCurrentEditorTabRight:function(){this["#tabs"].moveHighlightedTabRight(),
this._storeSessionDebounced()},_focusCurrentEditor:function(){this.currentEditor&&this.currentEditor.focus();
},_createUniqueTabID:function(){for(var e=0;;){var t="tab-"+e;if(!this["#tabs"].querySelector("#"+t))return t;
e+=1}},_createUniqueEditorID:function(){for(var e=void 0!==arguments[0]?arguments[0]:[],t=0;;){
var n="editor-"+t;if(!this["#editors"].querySelector("#"+n)&&!e.includes(n))return n;
t+=1}},_addRecentEntries:function(e){var t=this;return new Promise(function(n){var r,a,i,s,o,l,u,c,d,h,b,m,f,p,_,k,y,x,C,E,A,R,T,L,P,M;
return $traceurRuntime.asyncWrap(function(j){for(;;)switch(j.state){case 0:j.state=0===e.length?71:63;
break;case 71:n(),j.state=-2;break;case 63:r=[],a=Symbol(),i=!0,s=!1,o=void 0,j.state=64;
break;case 64:j.pushTry(22,23),j.state=25;break;case 25:l=void 0,C=t._dbGetRecent,
E=C.call(t),j.state=5;break;case 5:return void Promise.resolve(E).then(j.createCallback(3),j.errback);
case 3:A=j.value,j.state=2;break;case 2:R=Symbol.iterator,T=A[R],L=T.call(A),u=L,
j.state=7;break;case 7:j.state=21;break;case 21:j.state=(i=(l=u.next()).done)?19:17;
break;case 15:i=!0,j.state=21;break;case 17:c=l.value,j.state=18;break;case 18:return void Promise.resolve(w(c)).then(j.createCallback(10),j.errback);
case 10:d=j.value,j.state=9;break;case 9:j.state=d?11:15;break;case 11:return void Promise.resolve(v(d)).then(j.createCallback(13),j.errback);
case 13:h=j.value,j.state=12;break;case 12:d[a]=h,r.push(d),j.state=15;break;case 19:
j.popTry(),j.state=23,j.finallyFallThrough=27;break;case 22:j.popTry(),j.maybeUncatchable(),
P=j.storedException,j.state=28;break;case 28:s=!0,o=P,j.state=23,j.finallyFallThrough=27;
break;case 23:j.popTry(),j.state=34;break;case 34:try{i||null==u["return"]||u["return"]();
}finally{if(s)throw o}j.state=32;break;case 27:b=!0,m=!1,f=void 0,j.state=66;break;
case 66:j.pushTry(48,49),j.state=51;break;case 51:p=void 0,_=e[Symbol.iterator](),
j.state=47;break;case 47:j.state=(b=(p=_.next()).done)?45:43;break;case 39:b=!0,j.state=47;
break;case 43:k=p.value,j.state=44;break;case 44:y=g(k).toLowerCase(),j.state=42;break;
case 42:j.state="svg"===y||"svgz"===y||"html"===y?35:39;break;case 35:return void Promise.resolve(v(k)).then(j.createCallback(37),j.errback);
case 37:k[a]=j.value,j.state=36;break;case 36:r=r.filter(function(e){return e[a]!==k[a];
}),r.push(k),j.state=39;break;case 45:j.popTry(),j.state=49,j.finallyFallThrough=53;
break;case 48:j.popTry(),j.maybeUncatchable(),M=j.storedException,j.state=54;break;
case 54:m=!0,f=M,j.state=49,j.finallyFallThrough=53;break;case 49:j.popTry(),j.state=60;
break;case 60:try{b||null==_["return"]||_["return"]()}finally{if(m)throw f}j.state=58;
break;case 53:for(;r.length>S;)r.shift();x=r.map(function(e){return chrome.fileSystem.retainEntry(e);
}),j.state=68;break;case 68:return void Promise.resolve(t._dbSetRecent(x)).then(j.createCallback(62),j.errback);
case 62:n(),j.state=-2;break;case 32:j.state=j.finallyFallThrough;break;case 58:j.state=j.finallyFallThrough;
break;default:return j.end()}},this)})},_clearRecentEntries:function(){var e=this;
return new Promise(function(t){e._dbSetRecent([])})},_storeSessionOnUserIdle:function(){
this._shouldStoreSessionOnUserIdle=!0},_storeSession:function(){var e=this;return new Promise(function(t){
var n,r,a,i,s,o,l,u,c,d,h,b,m,f,v,g,p,_,w,k,y,x,C,S;return $traceurRuntime.asyncWrap(function(E){
for(;;)switch(E.state){case 0:E.state=e._storingSession||e._restoringSession?44:40;
break;case 44:t(),E.state=-2;break;case 40:e._storingSession=!0,n=[],r=e["#tabs"].getTabsByScreenPosition(),
a=!0,i=!1,s=void 0,E.state=41;break;case 41:E.pushTry(25,26),E.state=28;break;case 28:
o=void 0,l=r[Symbol.iterator](),E.state=24;break;case 24:E.state=(a=(o=l.next()).done)?22:20;
break;case 16:a=!0,E.state=24;break;case 20:u=o.value,E.state=21;break;case 21:c=e["#editors"].querySelector(u.href),
E.state=19;break;case 19:E.state=c?11:16;break;case 11:h=c.entry,h?(b=chrome.fileSystem,
m=b.retainEntry,f=c.entry,v=m.call(b,f),g=v):g=null,p=c.edited,E.state=12;break;case 12:
E.state=p?4:8;break;case 4:_=c.getArtwork,w=_.call(c),E.state=5;break;case 5:return void Promise.resolve(w).then(E.createCallback(3),E.errback);
case 3:k=E.value,E.state=2;break;case 2:y=k,E.state=7;break;case 8:y=null,E.state=7;
break;case 7:x=u.highlighted,C={retainedEntry:g,unsavedArtwork:y,primary:x},d=C,E.state=14;
break;case 14:n.push(d),E.state=16;break;case 22:E.popTry(),E.state=26,E.finallyFallThrough=30;
break;case 25:E.popTry(),E.maybeUncatchable(),S=E.storedException,E.state=31;break;
case 31:i=!0,s=S,E.state=26,E.finallyFallThrough=30;break;case 26:E.popTry(),E.state=37;
break;case 37:try{a||null==l["return"]||l["return"]()}finally{if(i)throw s}E.state=35;
break;case 30:return void Promise.resolve(e._dbSetSession(n)).then(E.createCallback(39),E.errback);
case 39:e._storingSession=!1,t(),E.state=-2;break;case 35:E.state=E.finallyFallThrough;
break;default:return E.end()}},this)})},_restoreSession:function(){var e=this;return new Promise(function(n,r){
var a,i,s,o,l,u,c,d,h,b,m,v,p,k,y,x,C,S,E,A,R,T,L,P,M,j,W,D,O,I,B,z,U,F,$,N,q,H,Z,V,G,K,X,Y,Q,J,ee,te,ne,re,ae,ie,se,oe,le,ue,ce,de,he,be;
return $traceurRuntime.asyncWrap(function(r){for(;;)switch(r.state){case 0:e._restoringSession=!0,
r.state=119;break;case 119:return void Promise.resolve(e._dbGetSession()).then(r.createCallback(3),r.errback);
case 3:a=r.value,r.state=2;break;case 2:i=!0,s=!1,o=void 0,r.state=121;break;case 121:
r.pushTry(23,24),r.state=26;break;case 26:l=void 0,u=a[Symbol.iterator](),r.state=22;
break;case 22:r.state=(i=(l=u.next()).done)?20:18;break;case 17:i=!0,r.state=22;break;
case 18:c=l.value,r.state=19;break;case 19:Y=c.retainedEntry,r.state=15;break;case 15:
r.state=Y?7:11;break;case 7:Q=c.retainedEntry,J=w(Q),r.state=8;break;case 8:return void Promise.resolve(J).then(r.createCallback(6),r.errback);
case 6:ee=r.value,r.state=5;break;case 5:te=ee,r.state=10;break;case 11:te=null,r.state=10;
break;case 10:c.entry=te,r.state=17;break;case 20:r.popTry(),r.state=24,r.finallyFallThrough=28;
break;case 23:r.popTry(),r.maybeUncatchable(),ne=r.storedException,r.state=29;break;
case 29:s=!0,o=ne,r.state=24,r.finallyFallThrough=28;break;case 24:r.popTry(),r.state=35;
break;case 35:try{i||null==u["return"]||u["return"]()}finally{if(s)throw o}r.state=33;
break;case 28:a=a.filter(function(e){return e.entry||e.unsavedArtwork||null===e.retainedEntry;
}),r.state=123;break;case 123:return void Promise.resolve(e._getLaunchEntries()).then(r.createCallback(38),r.errback);
case 38:d=r.value,r.state=37;break;case 37:r.state=d.length>0?96:88;break;case 96:
h=!0,b=!1,m=void 0,r.state=97;break;case 97:r.pushTry(83,84),r.state=86;break;case 86:
v=void 0,p=d[Symbol.iterator](),r.state=82;break;case 82:r.state=(h=(v=p.next()).done)?80:78;
break;case 77:h=!0,r.state=82;break;case 78:k=v.value,r.state=79;break;case 79:y=void 0,
x=!0,C=!1,S=void 0,r.state=75;break;case 75:r.pushTry(61,62),r.state=64;break;case 64:
E=void 0,A=a[Symbol.iterator](),r.state=60;break;case 60:r.state=(x=(E=A.next()).done)?58:56;
break;case 52:x=!0,r.state=60;break;case 56:R=E.value,r.state=57;break;case 57:re=R.entry,
r.state=50;break;case 50:r.state=re?42:46;break;case 42:ae=R.entry,ie=_(k,ae),r.state=43;
break;case 43:return void Promise.resolve(ie).then(r.createCallback(41),r.errback);
case 41:se=r.value,r.state=40;break;case 40:oe=se,r.state=45;break;case 46:oe=re,
r.state=45;break;case 45:r.state=oe?53:52;break;case 53:y=R,r.state=58;break;case 58:
r.popTry(),r.state=62,r.finallyFallThrough=66;break;case 61:r.popTry(),r.maybeUncatchable(),
le=r.storedException,r.state=67;break;case 67:C=!0,S=le,r.state=62,r.finallyFallThrough=66;
break;case 62:r.popTry(),r.state=73;break;case 73:try{x||null==A["return"]||A["return"]();
}finally{if(C)throw S}r.state=71;break;case 66:if(y){T=!0,L=!1,P=void 0;try{for(M=void 0,
j=a[Symbol.iterator]();!(T=(M=j.next()).done);T=!0)W=M.value,W.primary=W===y}catch(me){
L=!0,P=me}finally{try{T||null==j["return"]||j["return"]()}finally{if(L)throw P}}}else{
D=!0,O=!1,I=void 0;try{for(B=void 0,z=a[Symbol.iterator]();!(D=(B=z.next()).done);D=!0)U=B.value,
U.primary=!1}catch(fe){O=!0,I=fe}finally{try{D||null==z["return"]||z["return"]()}finally{
if(O)throw I}}a.push({entry:k,unsavedArtwork:null,primary:!0})}r.state=77;break;case 80:
r.popTry(),r.state=84,r.finallyFallThrough=88;break;case 83:r.popTry(),r.maybeUncatchable(),
ue=r.storedException,r.state=89;break;case 89:b=!0,m=ue,r.state=84,r.finallyFallThrough=88;
break;case 84:r.popTry(),r.state=95;break;case 95:try{h||null==p["return"]||p["return"]();
}finally{if(b)throw m}r.state=93;break;case 88:r.state=a.length>0?103:102;break;case 103:
F=[],a.forEach(function(n){var r=null,a=null,i="Untitled",s=n.primary;if(n.entry){
var o=f(n.entry),l=g(n.entry).toLowerCase();i=o+"."+("svgz"===l?"svgz":"svg")}var u=function(){
r=e["#tabs"].openTab(),r.id=e._createUniqueTabID(),r.href="#"+r.id.replace("tab","editor"),
r.label=i,r.disabled=!0,n.unsavedArtwork&&(r.edited=!0)},c=function(i){return new Promise(function(s){
return $traceurRuntime.asyncWrap(function(o){for(;;)switch(o.state){case 0:a=t("bx-editor"),
a.id=r.id.replace("tab","editor"),a.disabled=!0,e["#editors"].append(a),i&&e._toggleEditor(a.id),
o.state=4;break;case 4:return void Promise.resolve(a.init(n.unsavedArtwork,n.entry)).then(o.createCallback(2),o.errback);
case 2:r.disabled=!1,s(a),o.state=-2;break;default:return o.end()}},this)})};F.push({
primary:s,createTab:u,createEditor:c})}),$=F.find(function(e){return e.primary})||F[F.length-1],
N=F.filter(function(e){return e!==$}),q=!0,H=!1,Z=void 0;try{for(V=void 0,G=F[Symbol.iterator]();!(q=(V=G.next()).done);q=!0)K=V.value,
K.createTab()}catch(ve){H=!0,Z=ve}finally{try{q||null==G["return"]||G["return"]();
}finally{if(H)throw Z}}r.state=104;break;case 104:return void Promise.resolve($.createEditor(!0)).then(r.createCallback(100),r.errback);
case 100:return void Promise.resolve(Promise.all(N.map(function(e){return e.createEditor(!1);
}))).then(r.createCallback(102),r.errback);case 102:ce=e.getConfig,de=ce.call(e,"!bx-masterbody:isSubsequentLaunch"),
r.state=110;break;case 110:return void Promise.resolve(de).then(r.createCallback(108),r.errback);
case 108:he=r.value,r.state=107;break;case 107:be=he?he:!1,X=be,r.state=112;break;
case 112:r.state=X===!1?115:114;break;case 115:e.setConfig("!bx-masterbody:isSubsequentLaunch",!0),
r.state=116;break;case 116:return void Promise.resolve(e._openEditorWidthDefaultArtwork()).then(r.createCallback(114),r.errback);
case 114:e._restoringSession=!1,d.length>0&&e._storeSessionDebounced(),n(),r.state=-2;
break;case 33:r.state=r.finallyFallThrough;break;case 93:r.state=r.finallyFallThrough;
break;case 71:switch(r.finallyFallThrough){case 97:case 86:case 82:case 77:case 78:
case 79:case 75:case 64:case 60:case 52:case 56:case 57:case 50:case 42:case 43:case 41:
case 40:case 46:case 45:case 53:case 54:case 58:case 61:case 67:case 62:case 73:case 71:
case 66:case 80:case 83:case 89:r.state=r.finallyFallThrough,r.finallyFallThrough=-1;
break;default:r.state=84}break;default:return r.end()}},this)})},_getLaunchEntries:function(){
var e=this;return new Promise(function(t){var n=[];e.postMessage("background","getRetainedLaunchEntries",null,function(e){
var r,a,i,s,o,l,u,c;return $traceurRuntime.asyncWrap(function(d){for(;;)switch(d.state){
case 0:r=!0,a=!1,i=void 0,d.state=25;break;case 25:d.pushTry(11,12),d.state=14;break;
case 14:s=void 0,o=e[Symbol.iterator](),d.state=10;break;case 10:d.state=(r=(s=o.next()).done)?8:6;
break;case 5:r=!0,d.state=10;break;case 6:l=s.value,d.state=7;break;case 7:return void Promise.resolve(w(l)).then(d.createCallback(3),d.errback);
case 3:u=d.value,d.state=2;break;case 2:u&&n.push(u),d.state=5;break;case 8:d.popTry(),
d.state=12,d.finallyFallThrough=16;break;case 11:d.popTry(),d.maybeUncatchable(),
c=d.storedException,d.state=17;break;case 17:a=!0,i=c,d.state=12,d.finallyFallThrough=16;
break;case 12:d.popTry(),d.state=23;break;case 23:try{r||null==o["return"]||o["return"]();
}finally{if(a)throw i}d.state=21;break;case 16:t(n),d.state=-2;break;case 21:d.state=d.finallyFallThrough;
break;default:return d.end()}},this)})})},_dbOpen:function(){return new Promise(function(e){
var t=indexedDB.open("bx-masterbody",1);t.addEventListener("upgradeneeded",function(e){
var t=e.target.result;t.objectStoreNames.contains("recent")===!1&&t.createObjectStore("recent"),
t.objectStoreNames.contains("session")===!1&&t.createObjectStore("session")}),t.onsuccess=function(t){
return e(t.target.result)},t.onerror=function(e){return reject(e.target.result)}});
},_dbGetRecent:function(){var e=this;return new Promise(function(t,n){var r=e._db.transaction(["recent"],"readonly").objectStore("recent").getAll();
r.onsuccess=function(e){return t(e.target.result)},r.onerror=function(e){return n(e.target.result);
}})},_dbSetRecent:function(e){var t=this;return new Promise(function(n,r){var a;return $traceurRuntime.asyncWrap(function(i){
for(;;)switch(i.state){case 0:return void Promise.resolve(t._dbClearRecent()).then(i.createCallback(2),i.errback);
case 2:a=e.map(function(e,n){return new Promise(function(r,a){var i=t._db.transaction(["recent"],"readwrite").objectStore("recent").add(e,n);
i.onsuccess=function(e){return r(e.target.result)},i.onerror=function(e){return a(e.target.result);
}})}),Promise.all(a).then(n,r),i.state=-2;break;default:return i.end()}},this)})},
_dbClearRecent:function(){var e=this;return new Promise(function(t,n){var r=e._db.transaction(["recent"],"readwrite").objectStore("recent").clear();
r.onsuccess=function(e){return t(e.target.result)},r.onerror=function(e){return n(e.target.result);
}})},_dbGetSession:function(){var e=this;return new Promise(function(t,n){var r;return $traceurRuntime.asyncWrap(function(a){
for(;;)switch(a.state){case 0:r=e._db.transaction(["session"],"readonly").objectStore("session").getAll(),
r.onsuccess=function(e){return t(e.target.result)},r.onerror=function(e){return n(e.target.result);
},a.state=-2;break;default:return a.end()}},this)})},_dbSetSession:function(e){var t=this;
return new Promise(function(n,r){var a;return $traceurRuntime.asyncWrap(function(i){
for(;;)switch(i.state){case 0:return void Promise.resolve(t._dbClearSession()).then(i.createCallback(2),i.errback);
case 2:a=e.map(function(e,n){return new Promise(function(r,a){var i=t._db.transaction(["session"],"readwrite").objectStore("session").add(e,n);
i.onsuccess=function(e){return r(e.target.result)},i.onerror=function(e){return a(e.target.result);
}})}),Promise.all(a).then(n,r),i.state=-2;break;default:return i.end()}},this)})},
_dbClearSession:function(){var e=this;return new Promise(function(t,n){var r=e._db.transaction(["session"],"readwrite").objectStore("session").clear();
r.onsuccess=function(e){return t(e.target.result)},r.onerror=function(e){return n(e.target.result);
}})}},{},e)}(HTMLBodyElement),W=n("body","bx-masterbody",j);return{get default(){
return W}}}),System.registerModule("elements/bx-menu",[],function(){"use strict";System.get("elements/bx-menuitem");
var e=System.get("utils/element").registerElement,t=System.get("utils/time").sleep,n=75,r=300,a='\n  <style>\n    @import url("stylesheets/scrollbars.css");\n    @import url("stylesheets/bx-menu.css");\n  </style>\n\n  <main id="main">\n    <content id="content"></content>\n  </main>\n',i=function(e){
function i(){$traceurRuntime.superConstructor(i).apply(this,arguments)}return $traceurRuntime.createClass(i,{
createdCallback:function(){var e=this;this._mouseLocs=[],this._mouseInsideMenuBlock=!1,
this._shadowRoot=this.createShadowRoot({mode:"closed"}),this._shadowRoot.innerHTML=a;
var t=!0,n=!1,r=void 0;try{for(var i=void 0,s=this._shadowRoot.querySelectorAll("[id]")[Symbol.iterator]();!(t=(i=s.next()).done);t=!0){
var o=i.value;this["#"+o.id]=o}}catch(l){n=!0,r=l}finally{try{t||null==s["return"]||s["return"]();
}finally{if(n)throw r}}this["#main"].addEventListener("mousemove",function(t){return e._onMouseMove(t);
}),this.addEventListener("mouseover",function(t){return e._onMouseOver(t)}),this.addEventListener("mouseout",function(t){
return e._onMouseOut(t)}),this.addEventListener("click",function(t){return e._onClick(t);
})},menuWillShow:function(){return Promise.resolve()},menuItemWillTrigger:function(e){
return Promise.resolve()},get label(){return this.hasAttribute("label")?this.getAttribute("label"):"";
},set label(e){this.setAttribute("label",e)},get opened(){return this.hasAttribute("opened");
},get items(){var e=[],t=!0,n=!1,r=void 0;try{for(var a=void 0,i=this.children[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){
var s=a.value;if("content"===s.localName){var o=!0,l=!1,u=void 0;try{for(var c=void 0,d=s.getDistributedNodes()[Symbol.iterator]();!(o=(c=d.next()).done);o=!0){
var h=c.value;"bx-menuitem"!==h.localName&&"hr"!==h.localName||e.push(h)}}catch(b){
l=!0,u=b}finally{try{o||null==d["return"]||d["return"]()}finally{if(l)throw u}}}else"bx-menuitem"!==s.localName&&"hr"!==s.localName||e.push(s);
}}catch(m){n=!0,r=m}finally{try{t||null==i["return"]||i["return"]()}finally{if(n)throw r;
}}return e},openBelowElement:function(e){var t,n,r,a=arguments;return $traceurRuntime.asyncWrap(function(i){
for(;;)switch(i.state){case 0:t=void 0!==a[1]?a[1]:0,i.state=4;break;case 4:return void Promise.resolve(this.menuWillShow()).then(i.createCallback(2),i.errback);
case 2:this.setAttribute("opened",""),n=e.getBoundingClientRect(),this.style.height=null,
this.style.top=n.top+n.height+t+"px",this.style.left=n.left+"px",r=this.getBoundingClientRect(),
r.left+r.width>window.innerWidth&&(this.style.left=n.left+n.width-r.width+"px"),r.top+r.height+t+5>window.innerHeight&&(this.style.height=window.innerHeight-(n.top+n.height+t)-10+"px"),
this.dispatchEvent(new CustomEvent("menuopen",{bubbles:!0,detail:this})),i.state=-2;
break;default:return i.end()}},this)},openNextToElement:function(e){var t,n,r,a,i=arguments;
return $traceurRuntime.asyncWrap(function(s){for(;;)switch(s.state){case 0:t=void 0!==i[1]?i[1]:0,
s.state=4;break;case 4:return void Promise.resolve(this.menuWillShow()).then(s.createCallback(2),s.errback);
case 2:this.setAttribute("opened",""),n=e.getBoundingClientRect(),this.style.height=null,
this.style.top=n.top+"px",this.style.left=n.left+n.width+t+"px",r=this.getBoundingClientRect(),
r.left+r.width+t>window.innerWidth&&(this.style.left=n.left-r.width-t+"px",r=this.getBoundingClientRect()),
r.top+r.height+5>window.innerHeight&&(a=window.innerHeight-(r.top+r.height)-5,this.style.top=n.top+a+"px",
r=this.getBoundingClientRect(),r.top<0&&(this.style.top="5px",this.style.height=window.innerHeight-10+"px")),
this.dispatchEvent(new CustomEvent("menuopen",{bubbles:!0,detail:this})),s.state=-2;
break;default:return s.end()}},this)},openAtPosition:function(e,t){var n,r;return $traceurRuntime.asyncWrap(function(a){
for(;;)switch(a.state){case 0:return void Promise.resolve(this.menuWillShow()).then(a.createCallback(2),a.errback);
case 2:this.setAttribute("opened",""),this.style.height=null,this.style.left=e+"px",
this.style.top=t+"px",n=this.getBoundingClientRect(),n.left+n.width>window.innerWidth&&(this.style.left=e-n.width+"px",
n=this.getBoundingClientRect()),n.top+n.height+5>window.innerHeight&&(r=window.innerHeight-(n.top+n.height)-5,
this.style.top=t+r+"px",n=this.getBoundingClientRect(),n.top<0&&(this.style.top="5px",
this.style.height=window.innerHeight-10+"px")),this.dispatchEvent(new CustomEvent("menuopen",{
bubbles:!0,detail:this})),a.state=-2;break;default:return a.end()}},this)},close:function(){
var e=!0,t=!1,n=void 0;try{for(var r=void 0,a=this.items[Symbol.iterator]();!(e=(r=a.next()).done);e=!0){
var i=r.value;i.highlighted&&(i.highlighted=!1)}}catch(s){t=!0,n=s}finally{try{e||null==a["return"]||a["return"]();
}finally{if(t)throw n}}this.style.left=null,this.style.top=null,this.removeAttribute("opened"),
this._openedSubmenu&&(this._openedSubmenu.close(),this._openedSubmenu=null),this.dispatchEvent(new CustomEvent("menuclose",{
bubbles:!0,detail:this}))},triggerItem:function(e){var n=this;return new Promise(function(r){
var a,i,s,o,l,u;return $traceurRuntime.asyncWrap(function(c){for(;;)switch(c.state){
case 0:return void Promise.resolve(n.menuItemWillTrigger(e)).then(c.createCallback(2),c.errback);
case 2:c.state=e.disabled===!1&&0===e.childElementCount?13:16;break;case 13:c.state=n.opened?7:12;
break;case 7:a=!0,i=!1,s=void 0;try{for(o=void 0,l=n.items[Symbol.iterator]();!(a=(o=l.next()).done);a=!0)u=o.value,
u.highlighted&&(u.highlighted=!1)}catch(d){i=!0,s=d}finally{try{a||null==l["return"]||l["return"]();
}finally{if(i)throw s}}n._willClose=!0,c.state=8;break;case 8:return void Promise.resolve(t(100)).then(c.createCallback(4),c.errback);
case 4:e.highlighted=!0,c.state=10;break;case 10:return void Promise.resolve(t(100)).then(c.createCallback(6),c.errback);
case 6:e.highlighted=!1,n._willClose=!1,n.close(),c.state=12;break;case 12:n.dispatchEvent(new CustomEvent("menuitemtrigger",{
bubbles:!0,detail:e})),r(),c.state=-2;break;case 16:r(),c.state=-2;break;default:
return c.end()}},this)})},highlightItem:function(e){var n,r;return $traceurRuntime.asyncWrap(function(a){
for(;;)switch(a.state){case 0:a.state=this._willClose?1:3;break;case 1:a.returnValue=void 0,
a.state=2;break;case 2:a.state=-2;break;case 3:n=this.items.find(function(e){return e.highlighted===!0;
}),a.state=21;break;case 21:a.state=n?10:7;break;case 10:a.state=n===e?5:8;break;case 5:
a.returnValue=void 0,a.state=6;break;case 6:a.state=-2;break;case 8:n.highlighted=!1,
a.state=7;break;case 7:this._openedSubmenu&&(this._openedSubmenu.close(),this._openedSubmenu=null),
a.state=23;break;case 23:a.state=e&&e.disabled===!1?17:-2;break;case 17:r=e.children[0]&&"bx-menu"===e.children[0].localName?e.children[0]:null,
e.highlighted=!0,a.state=18;break;case 18:a.state=r?12:-2;break;case 12:return void Promise.resolve(t(100)).then(a.createCallback(13),a.errback);
case 13:e.highlighted&&e.highlighted&&(this._openedSubmenu=r,r.openNextToElement(e,0)),
a.state=-2;break;default:return a.end()}},this)},highlightPreviousItem:function(){
var e=void 0!==arguments[0]?arguments[0]:null,t=this.items;if(null===e&&(e=t.find(function(e){
return e.highlighted===!0})),e)for(var n=t.indexOf(e)-1;n>=0;n-=1){var r=t[n];if(r.disabled===!1&&r.hidden===!1&&"bx-menuitem"===r.localName)return this.highlightItem(r),
void r.scrollIntoViewIfNeeded()}for(var a=t.length-1;a>=0;a-=1){var i=t[a];if(i.disabled===!1&&i.hidden===!1&&"bx-menuitem"===i.localName&&i!==e)return this.highlightItem(i),
void i.scrollIntoViewIfNeeded()}},highlightNextItem:function(){var e=void 0!==arguments[0]?arguments[0]:null,t=this.items;
if(null===e&&(e=t.find(function(e){return e.highlighted===!0})),e)for(var n=t.indexOf(e)+1;n<t.length;n+=1){
var r=t[n];if(r.disabled===!1&&r.hidden===!1&&"bx-menuitem"===r.localName)return this.highlightItem(r),
void r.scrollIntoViewIfNeeded()}for(var a=0;a<t.length;a+=1){var i=t[a];if(i.disabled===!1&&i.hidden===!1&&"bx-menuitem"===i.localName&&i!==e)return this.highlightItem(i),
void i.scrollIntoViewIfNeeded()}},_onMouseMove:function(e){this._mouseLocs.push({
x:e.pageX,y:e.pageY}),this._mouseLocs.length>3&&this._mouseLocs.shift()},_onMouseOver:function(e){
e.target===this||e.target.parentElement===this||this.items.includes(e.target)?(this._mouseInsideMenuBlock===!1&&(this._mouseInsideMenuBlock=!0),
"bx-menuitem"===e.target.localName&&this._onMenuItemMouseEnter(e.target)):this._mouseInsideMenuBlock===!0&&(this._mouseInsideMenuBlock=!1,
this._onMenuBlockMouseLeave())},_onMouseOut:function(e){e.toElement&&(e.toElement===this||this.items.includes(e.toElement))||this._mouseInsideMenuBlock===!0&&(this._mouseInsideMenuBlock=!1,
this._onMenuBlockMouseLeave())},_onClick:function(e){if(0===e.button&&"bx-menuitem"===e.target.localName&&(e.target.parentElement===this||this.items.includes(e.target))){
var t=e.target;this.triggerItem(t)}},_onMenuItemMouseEnter:function(e){this._timeoutID&&clearTimeout(this._timeoutID),
this._highlightItemWithDelay(e)},_onMenuBlockMouseLeave:function(){this._timeoutID&&clearTimeout(this._timeoutID);
var e=this.items.find(function(e){return e.highlighted===!0});if(e){var t=e.children[0];
t&&t.opened!==!1||(e.highlighted=!1)}},_highlightItemWithDelay:function(e){var t=this,n=this._getHighlightDelay();
n?this._timeoutID=setTimeout(function(){t._highlightItemWithDelay(e)},n):this.highlightItem(e);
},_getHighlightDelay:function(){var e="right",t=this._mouseLocs[this._mouseLocs.length-1],a=this._mouseLocs[0];
if(!this._openedSubmenu)return 0;if(!t)return 0;a||(a=t);var i=this.getBoundingClientRect(),s={
x:i.left,y:i.top-n},o={x:i.left+i.width,y:s.y},l={x:i.left,y:i.top+i.height+n},u={
x:i.left+i.width,y:l.y};if(a.x<i.left||a.x>u.x||a.y<i.top||a.y>u.y)return 0;if(this._lastDelayLoc&&t.x==this._lastDelayLoc.x&&t.y==this._lastDelayLoc.y)return 0;
var c=o,d=u;"left"==e?(c=l,d=s):"below"==e?(c=u,d=l):"above"==e&&(c=s,d=o);var h=function(e,t){
return(t.y-e.y)/(t.x-e.x)},b=h(t,c),m=h(t,d),f=h(a,c),v=h(a,d);return f>b&&m>v?(this._lastDelayLoc=t,
r):(this._lastDelayLoc=null,0)}},{},e)}(HTMLElement),s=e("bx-menu",i);return{get default(){
return s}}}),System.registerModule("elements/bx-menubar",[],function(){"use strict";
var e=System.get("utils/element"),t=e.createElement,n=e.registerElement,r=e.getClosestShadowRoot,a=(System.get("utils/filesystem").restoreEntry,
System.get("utils/time").sleep),i=System.get("classes/shortcut")["default"];System.get("elements/bx-menu");
var s={childList:!0,attributes:!0,characterData:!1,subtree:!0,attributeFilter:["hidden"],
attributeOldValue:!1,characterDataOldValue:!1},o='\n  <style>@import url("stylesheets/bx-menubar.css");</style>\n\n  <div id="overlay" hidden></div>\n  <ul id="strip"></ul>\n\n  <div id="menus">\n    <content></content>\n  </div>\n',l=function(e){
function n(){$traceurRuntime.superConstructor(n).apply(this,arguments)}return $traceurRuntime.createClass(n,{
createdCallback:function(){var e=this;this.tabIndex=0,this._highlightedStripItem=null,
this._shadowRoot=this.createShadowRoot({mode:"closed"}),this._shadowRoot.innerHTML=o;
var t=!0,n=!1,r=void 0;try{for(var a=void 0,i=this._shadowRoot.querySelectorAll("[id]")[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){
var l=a.value;this["#"+l.id]=l}}catch(u){n=!0,r=u}finally{try{t||null==i["return"]||i["return"]();
}finally{if(n)throw r}}$traceurRuntime.spread(this.querySelectorAll("bx-menu")).forEach(function(t){
t.menuWillShow=function(){return e.menuWillShow(t)},t.menuItemWillTrigger=function(t){
return e.menuItemWillTrigger(t)}});var c=new MutationObserver(function(t){return e._onChildrenMutation(t);
});c.observe(this,s),this.addEventListener("keydown",function(t){return e._onKeyDown(t);
}),this.addEventListener("menuitemtrigger",function(t){return e._onMenuItemTrigger(t);
}),this["#strip"].addEventListener("mousedown",function(t){return e._onStripMouseDown(t);
}),this["#strip"].addEventListener("mouseover",function(t){return e._onStripMouseOver(t);
}),this["#overlay"].addEventListener("mousedown",function(t){return e._onOverlayMouseDown(t);
}),this._updateStrip()},attachedCallback:function(){var e=this;window.addEventListener("blur",this._windowBlurListener=function(t){
return e._onWindowBlur(t)}),window.addEventListener("resize",this._windowResizeListener=function(t){
return e._onWindowResize(t)})},detachedCallback:function(){window.removeEventListener("blur",this._windowBlurListener),
window.removeEventListener("resize",this._windowResizeListener)},get disabled(){return this.hasAttribute("disabled");
},set disabled(e){e===!0?this.setAttribute("disabled",""):this.removeAttribute("disabled");
},menuWillShow:function(e){return Promise.resolve()},menuItemWillTrigger:function(e){
return Promise.resolve()},_onChildrenMutation:function(e){var t=!0,n=!1,r=void 0;try{
for(var a=void 0,i=e[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){var s=a.value;
s.target!==this&&s.target.parentElement!==this||this._updateStrip()}}catch(o){n=!0,
r=o}finally{try{t||null==i["return"]||i["return"]()}finally{if(n)throw r}}},_onMenuItemTrigger:function(e){
this._collapse();var t=e.target,n=$traceurRuntime.spread(this.children).find(function(e){
return e.contains(t)}),r=$traceurRuntime.spread(this["#strip"].children).find(function(e){
return e.menu===n});r&&r.hasAttribute("highlighted")===!1&&(r.setAttribute("highlighted",""),
a(150).then(function(){return r.removeAttribute("highlighted")}))},_onStripMouseDown:function(e){
this._highlightedStripItem&&e.target===this["#strip"]&&this._collapse(),0===e.button&&(e.target===this["#strip"]?(e.preventDefault(),
this._onStripEmptySpaceDragStart(e)):this._onStripItemMouseDown(e.target))},_onStripEmptySpaceDragStart:function(e){
var t,n,r=chrome.app.window.current().getBounds();window.addEventListener("mousemove",t=function(t){
var n=t.screenX-e.screenX,a=t.screenY-e.screenY;chrome.app.window.current().setBounds({
left:r.left+n,top:r.top+a,width:r.width,height:r.height})}),window.addEventListener("mouseup",n=function(e){
window.removeEventListener("mousemove",t),window.removeEventListener("mouseup",n);
})},_onStripMouseOver:function(e){0===e.button&&e.target!==this["#strip"]&&this._onStripItemMouseEnter(e.target);
},_onStripItemMouseDown:function(e){this._highlightedStripItem===e?(event.preventDefault(),
this._collapse()):this._expand(e)},_onStripItemMouseEnter:function(e){this._highlightedStripItem&&this._highlightedStripItem!==e&&this._expand(e);
},_onOverlayMouseDown:function(e){this._collapse(),e.preventDefault(),e.stopPropagation();
},_onWindowBlur:function(e){this._collapse()},_onWindowResize:function(e){this._collapse();
},_onKeyDown:function(e){if(!this.disabled){var t=i.fromEvent(e),n=t.ctrl||t.alt||t.meta||t.shift,a=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Enter","Esc"],s=a.includes(t.base)&&n===!1?t.base:null;
if(this._expaned&&s){var o=$traceurRuntime.spread(this.querySelectorAll("bx-menuitem[highlighted]")),l=o.length>0?o[o.length-1]:null,u=this.querySelectorAll("bx-menu[opened]");
if(e.preventDefault(),e.stopImmediatePropagation(),"ArrowUp"===s)if(l){var c=l.parentElement;
c.highlightPreviousItem()}else{var d=u.length>0?u[u.length-1]:null;d&&d.highlightPreviousItem();
}else if("ArrowDown"===s)if(l){var h=l.parentElement;h.highlightNextItem()}else{var b=u.length>0?u[u.length-1]:null;
b&&b.highlightNextItem()}else if("ArrowRight"===s){var m=l?l.querySelector("bx-menu"):null;
if(m){var f=m.getBoundingClientRect(),v=l.getBoundingClientRect(),g=f.x+f.width/2,p=v.y+v.height/2,_=r(this).elementFromPoint(g,p);
if(_.disabled)for(var w=_.nextElementSibling;w;w=w.nextElementSibling)if("bx-menuitem"===w.localName&&w.disabled===!1&&w.hidden===!1){
_=w;break}if(_.disabled)for(var k=m.children[0];k;k=k.nextElementSibling)if("bx-menuitem"===k.localName&&k.disabled===!1&&k.hidden===!1){
_=k;break}_.disabled?this._expandNext():m.highlightItem(_)}else this._expandNext();
}else if("ArrowLeft"===s){var y=u.length>0?u[u.length-1]:null;y.parentElement!==this&&y.querySelector("bx-menuitem[highlighted]")?y.highlightItem(null):this._expandPrevious();
}else if("Enter"===s)if(l){if(!l.querySelector("bx-menu")){var x=l.parentElement;x.triggerItem(l);
}}else this._collapse();else"Esc"===s&&this._collapse()}else this.triggerItemForShortcut(t),
e.stopPropagation()}},triggerItemForShortcut:function(e){var t=$traceurRuntime.spread(this.querySelectorAll("bx-menuitem"));
t=t.filter(function(e){return e.matches("bx-menuitem[hidden], *[hidden] bx-menuitem")===!1;
});var n=t.find(function(t){var n=t.userShortcut||t.shortcut||null;return n?n.compare(e):!1;
});if(n){var r=n.parentElement===this?this["#root-menu"]:n.parentElement;r.triggerItem(n);
}},_expand:function(e){return $traceurRuntime.asyncWrap(function(t){for(;;)switch(t.state){
case 0:this._highlightedStripItem&&(this._highlightedStripItem.removeAttribute("highlighted"),
this._highlightedStripItem.menu.close()),this["#overlay"].hidden=!1,e.menu.openBelowElement(e),
e.setAttribute("highlighted",""),this._highlightedStripItem=e,this._expaned=!0,t.state=-2;
break;default:return t.end()}},this)},_expandNext:function(){var e=this.querySelectorAll("bx-menu[opened]");
if(e.length>0){for(var t=e[0],n=$traceurRuntime.spread(this["#strip"].children).find(function(e){
return e.menu===t}),r=n.nextElementSibling;r;r=r.nextElementSibling)if(r.disabled===!1&&r.hidden===!1)return void this._expand(r);
for(var a=this["#strip"].firstElementChild;a;a=a.nextElementSibling)if(a.disabled===!1&&a.hidden===!1&&a!==n)return void this._expand(a);
}},_expandPrevious:function(){var e=this.querySelectorAll("bx-menu[opened]");if(e.length>0){
for(var t=e[0],n=$traceurRuntime.spread(this["#strip"].children).find(function(e){
return e.menu===t}),r=n.previousElementSibling;r;r=r.previousElementSibling)if(r.disabled===!1&&r.hidden===!1)return void this._expand(r);
for(var a=this["#strip"].lastElementChild;a;a=a.previousElementSibling)if(a.disabled===!1&&a.hidden===!1&&a!==n)return void this._expand(a);
}},_collapse:function(){this.blur(),this._highlightedStripItem&&(this._highlightedStripItem.removeAttribute("highlighted"),
this._highlightedStripItem.menu.close(),this._highlightedStripItem=null),this["#overlay"].hidden=!0,
this._expaned=!1},_updateStrip:function(){if(this.childElementCount!==this["#strip"].childElementCount){
this["#strip"].innerHTML="";for(var e=0;e<this.childElementCount;e+=1)this["#strip"].append(t("li"));
}for(var n=0;n<this.childElementCount;n+=1)this["#strip"].children[n].textContent=this.children[n].getAttribute("label"),
this["#strip"].children[n].menu=this.children[n],this["#strip"].children[n].hidden=this.children[n].hasAttribute("hidden");
}},{},e)}(HTMLElement),u=n("bx-menubar",l);return{get default(){return u}}}),System.registerModule("elements/bx-menuitem",[],function(){
"use strict";var e=System.get("utils/element").registerElement,t=System.get("classes/shortcut")["default"],n="images/icons.svg#arrow-right",r="images/icons.svg#circle",a="images/icons.svg#check-mark",i='\n  <style>@import url("stylesheets/bx-menuitem.css");</style>\n\n  <main>\n    <div id="state-icons">\n      <svg class="icon" id="selected-state-icon" viewBox="0 0 100 100" hidden>\n        <use href="'+r+'" width="100" height="100"></use>\n      </svg>\n\n      <svg class="icon" id="toggled-state-icon" viewBox="0 0 100 100" hidden>\n        <use href="'+a+'" width="100" height="100"></use>\n      </svg>\n    </div>\n\n    <div id="label"></div>\n    <div id="shortcut"></div>\n    <svg id="arrow-icon" viewBox="0 0 100 100"><use href="'+n+'" width="100" height="100"></use></svg>\n  </main>\n\n  <content select="bx-menu"></content>\n',s=function(e){
function n(){$traceurRuntime.superConstructor(n).apply(this,arguments)}return $traceurRuntime.createClass(n,{
createdCallback:function(){this._shadowRoot=this.createShadowRoot({mode:"closed"}),
this._shadowRoot.innerHTML=i;var e=!0,t=!1,n=void 0;try{for(var r=void 0,a=this._shadowRoot.querySelectorAll("[id]")[Symbol.iterator]();!(e=(r=a.next()).done);e=!0){
var s=r.value;this["#"+s.id]=s}}catch(o){t=!0,n=o}finally{try{e||null==a["return"]||a["return"]();
}finally{if(t)throw n}}var l=!0,u=!1,c=void 0;try{for(var d=void 0,h=this.attributes[Symbol.iterator]();!(l=(d=h.next()).done);l=!0){
var b=d.value;this.attributeChangedCallback(b.name)}}catch(m){u=!0,c=m}finally{try{
l||null==h["return"]||h["return"]()}finally{if(u)throw c}}},attributeChangedCallback:function(e){
"label"===e?this._onLabelAttributeChange():"state"===e?this._onStateAttributeChange():"shortcut"!==e&&"usershortcut"!==e||this._onShortcutAttributeChange();
},get label(){return this.hasAttribute("label")?this.getAttribute("label"):""},set label(e){
this.setAttribute("label",e)},get state(){return this.hasAttribute("state")?this.getAttribute("state"):null;
},set state(e){null===e?this.removeAttribute("state"):this.setAttribute("state",e);
},get commandID(){return this.hasAttribute("commandid")?this.getAttribute("commandid"):"";
},set commandID(e){this.setAttribute("commandid",e)},get shortcut(){return this.hasAttribute("shortcut")?t.fromString(this.getAttribute("shortcut")):null;
},set shortcut(e){null===e?this.removeAttribute("shortcut"):this.setAttribute("shortcut",e.toString());
},get userShortcut(){return this.hasAttribute("usershortcut")?t.fromString(this.getAttribute("usershortcut")):null;
},set userShortcut(e){null===e?this.removeAttribute("usershortcut"):this.setAttribute("usershortcut",e.toString());
},get highlighted(){return this.hasAttribute("highlighted")},set highlighted(e){e?this.setAttribute("highlighted",""):this.removeAttribute("highlighted");
},get disabled(){return this.hasAttribute("disabled")},set disabled(e){e?this.setAttribute("disabled",""):this.removeAttribute("disabled");
},_onLabelAttributeChange:function(){this["#label"].textContent=this.label},_onStateAttributeChange:function(){
"selected"===this.state?(this["#selected-state-icon"].removeAttribute("hidden"),this["#toggled-state-icon"].setAttribute("hidden","")):"toggled"===this.state?(this["#selected-state-icon"].setAttribute("hidden",""),
this["#toggled-state-icon"].removeAttribute("hidden")):(this["#selected-state-icon"].setAttribute("hidden",""),
this["#toggled-state-icon"].setAttribute("hidden",""))},_onShortcutAttributeChange:function(){
var e=this.userShortcut||this.shortcut||null;e?this["#shortcut"].textContent=e.toDisplayString():this["#shortcut"].textContent="";
}},{},e)}(HTMLElement),o=e("bx-menuitem",s);return{get default(){return o}}}),System.registerModule("elements/bx-messagebox",[],function(){
"use strict";System.get("elements/bx-button");var e=System.get("utils/element"),t=e.createElement,n=e.registerElement,r=System.get("utils/time").sleep,a="images/icons.svg#warning",i={
message:"Sample message",detail:"",buttons:["Confirm","Cancel"]},s='\n  <style>@import url("stylesheets/bx-messagebox.css");</style>\n\n  <div id="inner">\n    <svg id="icon" viewBox="0 0 100 100"><use href="'+a+'" width="100" height="100"></use></svg>\n\n    <div id="headers">\n      <h1 id="message"></h1>\n      <h2 id="detail"></h2>\n    </div>\n  </div>\n\n  <div id="buttons"></div>\n',o=function(e){
function n(){$traceurRuntime.superConstructor(n).apply(this,arguments)}return $traceurRuntime.createClass(n,{
createdCallback:function(){var e=this;this.tabIndex=1,this._shadowRoot=this.createShadowRoot({
mode:"closed"}),this._shadowRoot.innerHTML=s;var t=!0,n=!1,r=void 0;try{for(var a=void 0,i=this._shadowRoot.querySelectorAll("[id]")[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){
var o=a.value;this["#"+o.id]=o}}catch(l){n=!0,r=l}finally{try{t||null==i["return"]||i["return"]();
}finally{if(n)throw r}}this["#buttons"].addEventListener("click",function(t){return e._onButtonClick(t);
}),this.addEventListener("keydown",function(t){return e._onKeyDown(t)})},showModal:function(){
var e,a,s,o,l,u,c=arguments;return $traceurRuntime.asyncWrap(function(d){for(;;)switch(d.state){
case 0:for(e=void 0!==c[0]?c[0]:i,a=e.message||i.message,s=e.detail||i.detail,o=e.buttons||i.buttons,
this["#message"].innerHTML=a,this["#detail"].innerHTML=s,this["#buttons"].innerHTML="",
l=0;l<o.length;l+=1)u=t("bx-button"),u.value=l,u.label=o[l],u.skin="bx-messagebox",
this["#buttons"].append(u);this["#buttons"].lastElementChild&&this["#buttons"].lastElementChild.setAttribute("default",""),
d.state=4;break;case 4:return void Promise.resolve(r(100)).then(d.createCallback(2),d.errback);
case 2:$traceurRuntime.superGet(this,n.prototype,"showModal").call(this),this.focus(),
d.state=-2;break;default:return d.end()}},this)},_onButtonClick:function(e){var t,n;
return $traceurRuntime.asyncWrap(function(a){for(;;)switch(a.state){case 0:a.state=0===e.button&&"bx-button"===e.target.localName?3:-2;
break;case 3:t=e.target,n=e.target.value,t.style.pointerEvents="none",a.state=4;break;
case 4:return void Promise.resolve(r(200)).then(a.createCallback(2),a.errback);case 2:
delete t.style.pointerEvents,this.close(n),a.state=-2;break;default:return a.end();
}},this)},_onKeyDown:function(e){if(13===e.keyCode){var t=this["#buttons"].lastElementChild?this["#buttons"].lastElementChild.value:null;
this.close(t)}else 27===e.keyCode&&(e.preventDefault(),this.close("cancel"))}},{},e);
}(HTMLDialogElement),l=n("dialog","bx-messagebox",o);return{get default(){return l;
}}}),System.registerModule("elements/bx-tab",[],function(){"use strict";System.get("elements/bx-button");
var e=System.get("utils/element").registerElement,t='\n  <style>@import url("stylesheets/bx-tab.css");</style>\n\n  <main>\n    <div id="label"></div>\n    <bx-button id="close-button" icon="close" iconsize="10" skin="bx-tabs"></bx-button>\n  </main>\n',n=function(e){
function n(){$traceurRuntime.superConstructor(n).apply(this,arguments)}return $traceurRuntime.createClass(n,{
createdCallback:function(){var e=this;this._shadowRoot=this.createShadowRoot({mode:"closed"
}),this._shadowRoot.innerHTML=t;var n=!0,r=!1,a=void 0;try{for(var i=void 0,s=this._shadowRoot.querySelectorAll("[id]")[Symbol.iterator]();!(n=(i=s.next()).done);n=!0){
var o=i.value;this["#"+o.id]=o}}catch(l){r=!0,a=l}finally{try{n||null==s["return"]||s["return"]();
}finally{if(r)throw a}}var u=!0,c=!1,d=void 0;try{for(var h=void 0,b=this.attributes[Symbol.iterator]();!(u=(h=b.next()).done);u=!0){
var m=h.value;this.attributeChangedCallback(m.name)}}catch(f){c=!0,d=f}finally{try{
u||null==b["return"]||b["return"]()}finally{if(c)throw d}}this._shadowRoot.addEventListener("mousedown",function(t){
return e._onShadowRootMouseDown(t)}),this["#close-button"].addEventListener("click",function(t){
return e._onCloseButtonClick(t)})},attachedCallback:function(){this.dispatchEvent(new CustomEvent("tabopen",{
bubbles:!0,detail:this}))},detachedCallback:function(){this.dispatchEvent(new CustomEvent("tabclose",{
bubbles:!0,detail:this}))},attributeChangedCallback:function(e){"label"===e?this._onLabelChange():"edited"===e?this._onEditedChange():"disabled"===e&&this._onDisabledChange();
},get label(){return this.hasAttribute("label")?this.getAttribute("label"):""},set label(e){
this.setAttribute("label",e)},get edited(){return this.hasAttribute("edited")},set edited(e){
e?this.setAttribute("edited",""):this.removeAttribute("edited")},get highlighted(){
return this.hasAttribute("highlighted")},set highlighted(e){e?this.setAttribute("highlighted",""):this.removeAttribute("highlighted");
},get href(){return this.hasAttribute("href")?this.getAttribute("href"):""},set href(e){
e?this.setAttribute("href",e):this.removeAttribute("href")},get disabled(){return this.hasAttribute("disabled");
},set disabled(e){e===!0?this.setAttribute("disabled",""):this.removeAttribute("disabled");
},_onShadowRootMouseDown:function(e){0===e.button&&e.target!==this["#close-button"]&&this.disabled===!1&&this.dispatchEvent(new CustomEvent("tabdown",{
bubbles:!0,detail:this}))},_onCloseButtonClick:function(e){0===e.button&&this.dispatchEvent(new CustomEvent("tabcloseintent",{
bubbles:!0,detail:this}))},_onLabelChange:function(){this["#label"].textContent=this.label;
},_onEditedChange:function(){this["#close-button"].icon=this.edited?"close-edited":"close";
},_onDisabledChange:function(){this["#close-button"].disabled=this.disabled}},{},e);
}(HTMLElement),r=e("bx-tab",n);return{get default(){return r}}}),System.registerModule("elements/bx-tabs",[],function(){
"use strict";System.get("elements/bx-button"),System.get("elements/bx-tab");var e=System.get("utils/element"),t=e.createElement,n=e.registerElement,r=System.get("utils/time").sleep,a=Math.abs,i=Number,s=i.parseInt,o=(i.parseFloat,
50),l='\n  <style>@import url("stylesheets/bx-tabs.css");</style>\n\n  <main>\n    <content></content>\n    <bx-button id="new-tab-button" skin="bx-tabs" iconsize="15" icon="plus"></bx-button>\n  </main>\n',u=function(e){
function n(){$traceurRuntime.superConstructor(n).apply(this,arguments)}return $traceurRuntime.createClass(n,{
createdCallback:function(){var e=this;this._shadowRoot=this.createShadowRoot({mode:"closed"
}),this._shadowRoot.innerHTML=l;var t=!0,n=!1,r=void 0;try{for(var a=void 0,i=this._shadowRoot.querySelectorAll("[id]")[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){
var s=a.value;this["#"+s.id]=s}}catch(o){n=!0,r=o}finally{try{t||null==i["return"]||i["return"]();
}finally{if(n)throw r}}this.addEventListener("tabcloseintent",function(e){return e.stopPropagation();
}),this.addEventListener("tabdown",function(t){return e._onTabDown(t)}),this._shadowRoot.addEventListener("mousedown",function(t){
return e._onMouseDown(t)}),this["#new-tab-button"].addEventListener("click",function(t){
return e._onNewTabButtonClick(t)})},get disabled(){return this.hasAttribute("disabled");
},set disabled(e){e===!0?this.setAttribute("disabled",""):this.removeAttribute("disabled");
},openTab:function(){var e=t("bx-tab");return e.style.maxWidth="0px",e.style.order=this.childElementCount,
this.append(e),r(50).then(function(){return e.style.maxWidth=null}),e},closeTab:function(e){
var t=this;return new Promise(function(n){var a,i,s,o,l,u,c,d,h,b,m,f,v,g,p;return $traceurRuntime.asyncWrap(function(_){
for(;;)switch(_.state){case 0:if(a=t.querySelector("#"+e),i=a.getBoundingClientRect().width,
s=t._getSlotForTab(a),a.isClosing=!0,s<t.childElementCount-1){o=!0,l=!1,u=void 0;try{
for(c=void 0,d=t.children[Symbol.iterator]();!(o=(c=d.next()).done);o=!0)h=c.value,
h.isClosing||(h.style.transition="none",h.style.maxWidth=i+"px")}catch(w){l=!0,u=w;
}finally{try{o||null==d["return"]||d["return"]()}finally{if(l)throw u}}}a.style.transition=null,
a.style.maxWidth="0px",a.style.pointerEvents="none",t._waitingForTabToClose=!0,_.state=4;
break;case 4:return void Promise.resolve(r(300)).then(_.createCallback(2),_.errback);
case 2:a.remove(),t._waitingForTabToClose=!1,delete a.isClosing,t._waitingForMouseMoveAfterClosingTab||(t._waitingForMouseMoveAfterClosingTab=!0,
v=null,g=null,p=function(){window.removeEventListener("mousemove",b),window.removeEventListener("mouseout",m),
window.removeEventListener("blur",f),t._waitingForMouseMoveAfterClosingTab=!1;var e=!0,r=!1,a=void 0;
try{for(var i=void 0,s=t.children[Symbol.iterator]();!(e=(i=s.next()).done);e=!0){
var o=i.value;o.style.transition=null,o.style.maxWidth=null,o.style.order=t._getSlotForTab(o);
}}catch(l){r=!0,a=l}finally{try{e||null==s["return"]||s["return"]()}finally{if(r)throw a;
}}n()},window.addEventListener("mousemove",b=function(e){return null===v&&null===g?(v=e.clientX,
void(g=e.clientY)):void(e.clientX>=v-3&&e.clientX<=v+3&&e.clientY>=g-3&&e.clientY<=g+3||p());
}),window.addEventListener("mouseout",m=function(e){null===e.toElement&&p()}),window.addEventListener("blur",f=function(){
p()})),_.state=-2;break;default:return _.end()}},this)})},highlightTab:function(e){
var t=this.querySelector("bx-tab#"+e),n=this.querySelector("bx-tab[highlighted]");
null===e?n&&(n.highlighted=!1):t&&t!==n&&(n&&(n.highlighted=!1),t.highlighted=!0);
},moveHighlightedTabLeft:function(){var e=this.querySelector("bx-tab[highlighted]"),t=this._getSlotForTab(e),n=!0,r=!1,a=void 0;
try{for(var i=void 0,o=this.children[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){
var l=i.value;l.style.order=this._getSlotForTab(l)}}catch(u){r=!0,a=u}finally{try{
n||null==o["return"]||o["return"]()}finally{if(r)throw a}}if(0===s(e.style.order)){
var c=!0,d=!1,h=void 0;try{for(var b=void 0,m=this.children[Symbol.iterator]();!(c=(b=m.next()).done);c=!0){
var f=b.value;f===e?f.style.order=this.childElementCount-1:f.style.order=s(f.style.order)-1;
}}catch(v){d=!0,h=v}finally{try{c||null==m["return"]||m["return"]()}finally{if(d)throw h;
}}}else{var g=this._getTabForSlot(t-1);g.style.order=s(g.style.order)+1,e.style.order=s(e.style.order)-1;
}},moveHighlightedTabRight:function(){var e=this.querySelector("bx-tab[highlighted]"),t=this._getSlotForTab(e),n=!0,r=!1,a=void 0;
try{for(var i=void 0,o=this.children[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){
var l=i.value;l.style.order=this._getSlotForTab(l)}}catch(u){r=!0,a=u}finally{try{
n||null==o["return"]||o["return"]()}finally{if(r)throw a}}if(s(e.style.order)===this.childElementCount-1){
var c=!0,d=!1,h=void 0;try{for(var b=void 0,m=this.children[Symbol.iterator]();!(c=(b=m.next()).done);c=!0){
var f=b.value;f===e?f.style.order=0:f.style.order=s(f.style.order)+1}}catch(v){d=!0,
h=v}finally{try{c||null==m["return"]||m["return"]()}finally{if(d)throw h}}}else{var g=this._getTabForSlot(t+1);
g.style.order=s(g.style.order)-1,e.style.order=s(e.style.order)+1}},getTabsByScreenPosition:function(){
var e={slot:Symbol()},t=!0,n=!1,r=void 0;try{for(var a=void 0,i=this.children[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){
var s=a.value;s[e.slot]=this._getSlotForTab(s)}}catch(o){n=!0,r=o}finally{try{t||null==i["return"]||i["return"]();
}finally{if(n)throw r}}return $traceurRuntime.spread(this.children).sort(function(t,n){
return t[e.slot]>n[e.slot]})},_onMouseDown:function(e){0===e.button&&("bx-tab"===e.target.localName?this._onTabMouseDown(e):"main"===e.target.localName&&this._onEmptySpaceDragStart(e));
},_onEmptySpaceDragStart:function(e){var t,n,r=chrome.app.window.current().getBounds();
window.addEventListener("mousemove",t=function(t){var n=t.screenX-e.screenX,a=t.screenY-e.screenY;
chrome.app.window.current().setBounds({left:r.left+n,top:r.top+a,width:r.width,height:r.height
})}),window.addEventListener("mouseup",n=function(e){window.removeEventListener("mousemove",t),
window.removeEventListener("mouseup",n)})},_onTabDown:function(e){this._waitingForTabToClose?e.stopImmediatePropagation():e.stopPropagation();
},_onTabMouseDown:function(e){var t,n,r=this,i=e.target;document.addEventListener("mousemove",t=function(s){
a(s.clientX-e.clientX)>1&&(document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",n),
r._onTabDragStart(s,i))}),document.addEventListener("mouseup",n=function(e){document.removeEventListener("mousemove",t),
document.removeEventListener("mouseup",n)})},_onTabDragStart:function(e,t){var n=this,a=t.getBoundingClientRect().width,i=this.getBoundingClientRect().width;
t.style.zIndex=999,this["#new-tab-button"].style.opacity="0";var s={slot:Symbol(),
initialSlot:Symbol(),flexOffset:Symbol()},o=!0,l=!1,u=void 0;try{for(var c=void 0,d=this.children[Symbol.iterator]();!(o=(c=d.next()).done);o=!0){
var h=c.value,b=this._getSlotForTab(h);h[s.slot]=b,h[s.initialSlot]=b,h[s.flexOffset]=h.getBoundingClientRect().left-1,
h!==t&&(h.style.transition="transform 0.15s ease-out")}}catch(m){l=!0,u=m}finally{
try{o||null==d["return"]||d["return"]()}finally{if(l)throw u}}var f=function(e,r){
if(r>e+1)for(var i=e;r>i;i+=1)f(i,i+1);else if(e-1>r)for(var o=e;o>r;o-=1)f(o,o-1);else{
var l=!0,u=!1,c=void 0;try{for(var d=void 0,h=n.children[Symbol.iterator]();!(l=(d=h.next()).done);l=!0){
var b=d.value;if(b!==t){b[s.slot]===r&&(b[s.slot]=e);for(var m=-b[s.flexOffset],v=0;v<b[s.slot];v+=1)m+=a;
0===m?b.style.transform=null:b.style.transform="translate("+m+"px)"}}}catch(g){u=!0,
c=g}finally{try{l||null==h["return"]||h["return"]()}finally{if(u)throw c}}}},v=function(r){
var o=r.clientX-e.clientX;o+t[s.flexOffset]<=0?o=-t[s.flexOffset]:o+t[s.flexOffset]+a>i&&(o=i-t[s.flexOffset]-a),
t.style.transform="translate("+o+"px)";var l=n._getSlotForTab(t);if(l!==t[s.slot]){
var u=t[s.slot];t[s.slot]=l,f(u,t[s.slot])}},g=function(e){var i,o,l,u,c,d,h,b;return $traceurRuntime.asyncWrap(function(e){
for(;;)switch(e.state){case 0:for(document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",g),
i=-t[s.flexOffset],o=0;o<t[s.slot];o+=1)i+=a;t.style.transition="transform 0.15s ease-out",
t.style.transform="translate("+i+"px)",t[s.initialSlot]!==t[s.slot]&&n.dispatchEvent(new CustomEvent("tabslotchange",{
detail:{tab:t,slot:t[s.slot]}})),e.state=4;break;case 4:return void Promise.resolve(r(150)).then(e.createCallback(2),e.errback);
case 2:t.style.zIndex=null,n["#new-tab-button"].style.opacity=null,l=!0,u=!1,c=void 0;
try{for(d=void 0,h=n.children[Symbol.iterator]();!(l=(d=h.next()).done);l=!0)b=d.value,
b.style.transition=null,b.style.transform=null,b.style.order=b[s.slot]}catch(m){u=!0,
c=m}finally{try{l||null==h["return"]||h["return"]()}finally{if(u)throw c}}e.state=-2;
break;default:return e.end()}},this)};document.addEventListener("mouseup",g),document.addEventListener("mousemove",v);
},_onNewTabButtonClick:function(e){0===e.button&&this.dispatchEvent(new CustomEvent("tabopenintent"));
},_getSlotForTab:function(e){var t=e.getBoundingClientRect();if(t.left<t.width/2)return 0;
for(var n=t.width/2,r=1;o>r;r+=1){if(t.left>=n&&t.left<n+t.width)return r>this.childElementCount-1?this.childElementCount-1:r;
n+=t.width}},_getTabForSlot:function(e){var t=!0,n=!1,r=void 0;try{for(var a=void 0,i=this.children[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){
var s=a.value,o=this._getSlotForTab(s);if(o===e)return s}}catch(l){n=!0,r=l}finally{
try{t||null==i["return"]||i["return"]()}finally{if(n)throw r}}return null}},{},e);
}(HTMLElement),c=n("bx-tabs",u);return{get default(){return c}}}),System.registerModule("libs/pako",[],function(){
"use strict";!function(e){if("object"==("undefined"==typeof exports?"undefined":$traceurRuntime["typeof"](exports)))module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{
var t;"undefined"!=typeof window?t=window:"undefined"!=typeof global?t=global:"undefined"!=typeof self&&(t=self),
t.pako=e()}}(function(){return function e(t,n,r){function a(s,o){if(!n[s]){if(!t[s]){
var l="function"==typeof require&&require;if(!o&&l)return l(s,!0);if(i)return i(s,!0);
throw new Error("Cannot find module '"+s+"'")}var u=n[s]={exports:{}};t[s][0].call(u.exports,function(e){
var n=t[s][1][e];return a(n?n:e)},u,u.exports,e,t,n,r)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)a(r[s]);
return a}({1:[function(e,t,n){var r=e("./lib/zlib/utils").assign,a=e("./lib/deflate"),i=e("./lib/inflate"),s=e("./lib/zlib/constants"),o={};
r(o,a,i,s),t.exports=o},{"./lib/deflate":2,"./lib/inflate":3,"./lib/zlib/constants":5,
"./lib/zlib/utils":13}],2:[function(e,t,n){function r(e,t){var n=new g(t);if(n.push(e,!0),
n.err)throw n.msg;return n.result}function a(e,t){return t=t||{},t.raw=!0,r(e,t)}
function i(e,t){return t=t||{},t.gzip=!0,r(e,t)}var s=e("./zlib/deflate.js"),o=e("./zlib/utils"),l=e("./zlib/messages"),u=e("./zlib/zstream"),c=0,d=4,h=0,b=1,m=-1,f=0,v=8,g=function(e){
this.options=o.assign({level:m,method:v,chunkSize:16384,windowBits:15,memLevel:8,
strategy:f},e||{});var t=this.options;t.raw&&t.windowBits>0?t.windowBits=-t.windowBits:t.gzip&&t.windowBits>0&&t.windowBits<16&&(t.windowBits+=16),
this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new u;var n=s.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);
if(n!==h)throw new Error(l[n])};g.prototype.push=function(e,t){var n,r,a=this.strm,i=this.options.chunkSize;
if(this.ended)return!1;r=t===~~t?t:t===!0?d:c,a.next_in=e,a.next_in_index=0,a.avail_in=a.next_in.length,
a.next_out=new o.Buf8(i);do{if(a.avail_out=this.options.chunkSize,a.next_out_index=0,
n=s.deflate(a,r),n!==b&&n!==h)return this.onEnd(n),this.ended=!0,!1;a.next_out_index&&(this.onData(o.shrinkBuf(a.next_out,a.next_out_index)),
(a.avail_in>0||0===a.avail_out)&&(a.next_out=new o.Buf8(this.options.chunkSize)));
}while(a.avail_in>0||0===a.avail_out);return r===d?(n=s.deflateEnd(this.strm),this.onEnd(n),
this.ended=!0,n===h):!0},g.prototype.onData=function(e){this.chunks.push(e)},g.prototype.onEnd=function(e){
e===h&&(this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg;
},n.Deflate=g,n.deflate=r,n.deflateRaw=a,n.gzip=i},{"./zlib/deflate.js":7,"./zlib/messages":11,
"./zlib/utils":13,"./zlib/zstream":14}],3:[function(e,t,n){function r(e,t){var n=new c(t);
if(n.push(e,!0),n.err)throw n.msg;return n.result}function a(e,t){return t=t||{},
t.raw=!0,r(e,t)}var i=e("./zlib/inflate.js"),s=e("./zlib/utils"),o=e("./zlib/constants"),l=e("./zlib/messages"),u=e("./zlib/zstream"),c=function(e){
this.options=s.assign({chunkSize:16384,windowBits:0},e||{});var t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,
0===t.windowBits&&(t.windowBits=-15)),!(t.windowBits>=0&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),
t.windowBits>15&&t.windowBits<48&&0===(15&t.windowBits)&&(t.windowBits|=15),this.err=0,
this.msg="",this.ended=!1,this.chunks=[],this.strm=new u;var n=i.inflateInit2(this.strm,t.windowBits);
if(n!==o.Z_OK)throw new Error(l[n])};c.prototype.push=function(e,t){var n,r,a=this.strm,l=this.options.chunkSize;
if(this.ended)return!1;r=o.Z_NO_FLUSH,a.next_in=e,a.next_in_index=0,a.avail_in=a.next_in.length,
a.next_out=new s.Buf8(l);do{if(a.avail_out=this.options.chunkSize,a.next_out_index=0,
n=i.inflate(a,r),n!==o.Z_STREAM_END&&n!==o.Z_OK)return this.onEnd(n),this.ended=!0,
!1;a.next_out_index&&(this.onData(s.shrinkBuf(a.next_out,a.next_out_index)),(a.avail_in>0||0===a.avail_out)&&(a.next_out=new s.Buf8(this.options.chunkSize)));
}while(a.avail_in>0||0===a.avail_out);return r=t===~~t?t:t===!0?o.Z_FINISH:o.Z_NO_FLUSH,
r===o.Z_FINISH?(n=i.inflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===o.Z_OK):!0;
},c.prototype.onData=function(e){this.chunks.push(e)},c.prototype.onEnd=function(e){
e===o.Z_OK&&(this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=e,
this.msg=this.strm.msg},n.Inflate=c,n.inflate=r,n.inflateRaw=a},{"./zlib/constants":5,
"./zlib/inflate.js":9,"./zlib/messages":11,"./zlib/utils":13,"./zlib/zstream":14}],
4:[function(e,t,n){function r(e,t,n,r){for(var a=65535&e|0,i=e>>>16&65535|0,s=0;0!==n;){
s=n>2e3?2e3:n,n-=s;do a=a+t[r++]|0,i=i+a|0;while(--s);a%=65521,i%=65521}return a|i<<16|0;
}t.exports=r},{}],5:[function(e,t,n){t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,
Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,
Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,
Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,
Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],
6:[function(e,t,n){function r(){for(var e,t=[],n=0;256>n;n++){e=n;for(var r=0;8>r;r++)e=1&e?3988292384^e>>>1:e>>>1;
t[n]=e}return t}function a(e,t,n,r){var a=i,s=r+n;e=-1^e;for(var o=r;s>o;o++)e=e>>>8^a[255&(e^t[o])];
return-1^e}var i=r();t.exports=a},{}],7:[function(e,t,n){function r(e,t){return e.msg=P[t],
t}function a(e){return(e<<1)-(e>4?9:0)}function i(e){for(var t=e.length;--t;)e[t]=0;
}function s(e){var t=e.state,n=t.pending;n>e.avail_out&&(n=e.avail_out),0!==n&&(A.arraySet(e.next_out,t.pending_buf,t.pending_out,n,e.next_out_index),
e.next_out_index+=n,t.pending_out+=n,e.total_out+=n,e.avail_out-=n,t.pending-=n,0===t.pending&&(t.pending_out=0));
}function o(e,t){R._tr_flush_block(e,e.block_start>=0?e.block_start:-1,e.strstart-e.block_start,t),
e.block_start=e.strstart,s(e.strm)}function l(e,t){e.pending_buf[e.pending++]=t}function u(e,t){
e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t}function c(e,t,n,r){
var a=e.avail_in;return a>r&&(a=r),0===a?0:(e.avail_in-=a,A.arraySet(t,e.next_in,e.next_in_index,a,n),
1===e.state.wrap?e.adler=T(e.adler,t,a,n):2===e.state.wrap&&(e.adler=L(e.adler,t,a,n)),
e.next_in_index+=a,e.total_in+=a,a)}function d(e,t){var n,r,a=e.max_chain_length,i=e.strstart,s=e.prev_length,o=e.nice_match,l=e.strstart>e.w_size-le?e.strstart-(e.w_size-le):0,u=e.window,c=e.w_mask,d=e.prev,h=e.strstart+oe,b=u[i+s-1],m=u[i+s];
e.prev_length>=e.good_match&&(a>>=2),o>e.lookahead&&(o=e.lookahead);do if(n=t,u[n+s]===m&&u[n+s-1]===b&&u[n]===u[i]&&u[++n]===u[i+1]){
i+=2,n++;do;while(u[++i]===u[++n]&&u[++i]===u[++n]&&u[++i]===u[++n]&&u[++i]===u[++n]&&u[++i]===u[++n]&&u[++i]===u[++n]&&u[++i]===u[++n]&&u[++i]===u[++n]&&h>i);
if(r=oe-(h-i),i=h-oe,r>s){if(e.match_start=t,s=r,r>=o)break;b=u[i+s-1],m=u[i+s]}}while((t=d[t&c])>l&&0!==--a);
return s<=e.lookahead?s:e.lookahead}function h(e){var t,n,r,a,i,s=e.w_size;do{if(a=e.window_size-e.lookahead-e.strstart,
e.strstart>=s+(s-le)){A.arraySet(e.window,e.window,s,s,0),e.match_start-=s,e.strstart-=s,
e.block_start-=s,n=e.hash_size,t=n;do r=e.head[--t],e.head[t]=r>=s?r-s:0;while(--n);
n=s,t=n;do r=e.prev[--t],e.prev[t]=r>=s?r-s:0;while(--n);a+=s}if(0===e.strm.avail_in)break;
if(n=c(e.strm,e.window,e.strstart+e.lookahead,a),e.lookahead+=n,e.lookahead+e.insert>=se)for(i=e.strstart-e.insert,
e.ins_h=e.window[i],e.ins_h=(e.ins_h<<e.hash_shift^e.window[i+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[i+se-1])&e.hash_mask,
e.prev[i&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=i,i++,e.insert--,!(e.lookahead+e.insert<se)););
}while(e.lookahead<le&&0!==e.strm.avail_in)}function b(e,t){var n=65535;for(n>e.pending_buf_size-5&&(n=e.pending_buf_size-5);;){
if(e.lookahead<=1){if(h(e),0===e.lookahead&&t===M)return ge;if(0===e.lookahead)break;
}e.strstart+=e.lookahead,e.lookahead=0;var r=e.block_start+n;if((0===e.strstart||e.strstart>=r)&&(e.lookahead=e.strstart-r,
e.strstart=r,o(e,!1),0===e.strm.avail_out))return ge;if(e.strstart-e.block_start>=e.w_size-le&&(o(e,!1),
0===e.strm.avail_out))return ge}return e.insert=0,t===D?(o(e,!0),0===e.strm.avail_out?_e:we):e.strstart>e.block_start&&(o(e,!1),
0===e.strm.avail_out)?ge:ge}function m(e,t){for(var n,r;;){if(e.lookahead<le){if(h(e),
e.lookahead<le&&t===M)return ge;if(0===e.lookahead)break}if(n=0,e.lookahead>=se&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+se-1])&e.hash_mask,
n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!==n&&e.strstart-n<=e.w_size-le&&(e.match_length=d(e,n)),
e.match_length>=se)if(r=R._tr_tally(e,e.strstart-e.match_start,e.match_length-se),
e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=se){e.match_length--;
do e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+se-1])&e.hash_mask,
n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart;while(0!==--e.match_length);
e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],
e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else r=R._tr_tally(e,0,e.window[e.strstart]),
e.lookahead--,e.strstart++;if(r&&(o(e,!1),0===e.strm.avail_out))return ge}return e.insert=e.strstart<se-1?e.strstart:se-1,
t===D?(o(e,!0),0===e.strm.avail_out?_e:we):e.last_lit&&(o(e,!1),0===e.strm.avail_out)?ge:pe;
}function f(e,t){for(var n,r,a;;){if(e.lookahead<le){if(h(e),e.lookahead<le&&t===M)return ge;
if(0===e.lookahead)break}if(n=0,e.lookahead>=se&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+se-1])&e.hash_mask,
n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,
e.prev_match=e.match_start,e.match_length=se-1,0!==n&&e.prev_length<e.max_lazy_match&&e.strstart-n<=e.w_size-le&&(e.match_length=d(e,n),
e.match_length<=5&&(e.strategy===N||e.match_length===se&&e.strstart-e.match_start>4096)&&(e.match_length=se-1)),
e.prev_length>=se&&e.match_length<=e.prev_length){a=e.strstart+e.lookahead-se,r=R._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-se),
e.lookahead-=e.prev_length-1,e.prev_length-=2;do++e.strstart<=a&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+se-1])&e.hash_mask,
n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart);while(0!==--e.prev_length);
if(e.match_available=0,e.match_length=se-1,e.strstart++,r&&(o(e,!1),0===e.strm.avail_out))return ge;
}else if(e.match_available){if(r=R._tr_tally(e,0,e.window[e.strstart-1]),r&&o(e,!1),
e.strstart++,e.lookahead--,0===e.strm.avail_out)return ge}else e.match_available=1,
e.strstart++,e.lookahead--}return e.match_available&&(r=R._tr_tally(e,0,e.window[e.strstart-1]),
e.match_available=0),e.insert=e.strstart<se-1?e.strstart:se-1,t===D?(o(e,!0),0===e.strm.avail_out?_e:we):e.last_lit&&(o(e,!1),
0===e.strm.avail_out)?ge:pe}function v(e,t){for(var n,r,a,i,s=e.window;;){if(e.lookahead<=oe){
if(h(e),e.lookahead<=oe&&t===M)return ge;if(0===e.lookahead)break}if(e.match_length=0,
e.lookahead>=se&&e.strstart>0&&(a=e.strstart-1,r=s[a],r===s[++a]&&r===s[++a]&&r===s[++a])){
i=e.strstart+oe;do;while(r===s[++a]&&r===s[++a]&&r===s[++a]&&r===s[++a]&&r===s[++a]&&r===s[++a]&&r===s[++a]&&r===s[++a]&&i>a);
e.match_length=oe-(i-a),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}
if(e.match_length>=se?(n=R._tr_tally(e,1,e.match_length-se),e.lookahead-=e.match_length,
e.strstart+=e.match_length,e.match_length=0):(n=R._tr_tally(e,0,e.window[e.strstart]),
e.lookahead--,e.strstart++),n&&(o(e,!1),0===e.strm.avail_out))return ge}return e.insert=0,
t===D?(o(e,!0),0===e.strm.avail_out?_e:we):e.last_lit&&(o(e,!1),0===e.strm.avail_out)?ge:pe;
}function g(e,t){for(var n;;){if(0===e.lookahead&&(h(e),0===e.lookahead)){if(t===M)return ge;
break}if(e.match_length=0,n=R._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,
n&&(o(e,!1),0===e.strm.avail_out))return ge}return e.insert=0,t===D?(o(e,!0),0===e.strm.avail_out?_e:we):e.last_lit&&(o(e,!1),
0===e.strm.avail_out)?ge:pe}function p(e){e.window_size=2*e.w_size,i(e.head),e.max_lazy_match=E[e.level].max_lazy,
e.good_match=E[e.level].good_length,e.nice_match=E[e.level].nice_length,e.max_chain_length=E[e.level].max_chain,
e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=se-1,
e.match_available=0,e.ins_h=0}function _(){this.strm=null,this.status=0,this.pending_buf=null,
this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,
this.gzindex=0,this.method=K,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,
this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,
this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,
this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,
this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,
this.good_match=0,this.nice_match=0,this.dyn_ltree=new A.Buf16(2*ae),this.dyn_dtree=new A.Buf16(2*(2*ne+1)),
this.bl_tree=new A.Buf16(2*(2*re+1)),i(this.dyn_ltree),i(this.dyn_dtree),i(this.bl_tree),
this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new A.Buf16(ie+1),
this.heap=new A.Buf16(2*te+1),i(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new A.Buf16(2*te+1),
i(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,
this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0,this.high_water=0;
}function w(e){var t;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=G,t=e.state,
t.pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?ce:fe,e.adler=2===t.wrap?0:1,
t.last_flush=M,R._tr_init(t),I):r(e,z)}function k(e){var t=w(e);return t===I&&p(e.state),
t}function y(e,t,n,a,i,s){if(!e)return r(e,z);var o=1;if(t===$&&(t=6),0>a?(o=0,a=-a):a>15&&(o=2,
a-=16),1>i||i>X||n!==K||8>a||a>15||0>t||t>9||0>s||s>Z)return r(e,z);8===a&&(a=9);var l=new _;
return e.state=l,l.strm=e,l.wrap=o,l.gzhead=null,l.w_bits=a,l.w_size=1<<l.w_bits,
l.w_mask=l.w_size-1,l.hash_bits=i+7,l.hash_size=1<<l.hash_bits,l.hash_mask=l.hash_size-1,
l.hash_shift=~~((l.hash_bits+se-1)/se),l.window=new A.Buf8(2*l.w_size),l.head=new A.Buf16(l.hash_size),
l.prev=new A.Buf16(l.w_size),l.high_water=0,l.lit_bufsize=1<<i+6,l.pending_buf_size=4*l.lit_bufsize,
l.pending_buf=new A.Buf8(l.pending_buf_size),l.d_buf=l.lit_bufsize>>1,l.l_buf=3*l.lit_bufsize,
l.level=t,l.strategy=s,l.method=n,k(e)}function x(e,t){return y(e,t,K,Y,Q,V)}function C(e,t){
var n,o;if(!e||!e.state||t>O||0>t)return r(e,z);if(o=e.state,!e.next_out||!e.next_in&&0!==e.avail_in||o.status===ve&&t!==D)return r(e,0===e.avail_out?F:z);
if(o.strm=e,n=o.last_flush,o.last_flush=t,o.status===ce)if(2===o.wrap){if(e.adler=0,
l(o,31),l(o,139),l(o,8),o.gzhead)throw new Error("Custom GZIP headers not supported");
l(o,0),l(o,0),l(o,0),l(o,0),l(o,0),l(o,9===o.level?2:o.strategy>=q||o.level<2?4:0),
l(o,ke),o.status=fe}else{var c=K+(o.w_bits-8<<4)<<8,d=-1;d=o.strategy>=q||o.level<2?0:o.level<6?1:6===o.level?2:3,
c|=d<<6,0!==o.strstart&&(c|=ue),c+=31-c%31,o.status=fe,u(o,c),0!==o.strstart&&(u(o,e.adler>>>16),
u(o,65535&e.adler)),e.adler=1}if(0!==o.pending){if(s(e),0===e.avail_out)return o.last_flush=-1,
I}else if(0===e.avail_in&&a(t)<=a(n)&&t!==D)return r(e,F);if(o.status===ve&&0!==e.avail_in)return r(e,F);
if(0!==e.avail_in||0!==o.lookahead||t!==M&&o.status!==ve){var h=o.strategy===q?g(o,t):o.strategy===H?v(o,t):E[o.level].func(o,t);
if(h!==_e&&h!==we||(o.status=ve),h===ge||h===_e)return 0===e.avail_out&&(o.last_flush=-1),
I;if(h===pe&&(t===j?R._tr_align(o):t!==O&&(R._tr_stored_block(o,0,0,!1),t===W&&(i(o.head),
0===o.lookahead&&(o.strstart=0,o.block_start=0,o.insert=0))),s(e),0===e.avail_out))return o.last_flush=-1,
I}return t!==D?I:o.wrap<=0?B:(2===o.wrap?(l(o,255&e.adler),l(o,e.adler>>8&255),l(o,e.adler>>16&255),
l(o,e.adler>>24&255),l(o,255&e.total_in),l(o,e.total_in>>8&255),l(o,e.total_in>>16&255),
l(o,e.total_in>>24&255)):(u(o,e.adler>>>16),u(o,65535&e.adler)),s(e),o.wrap>0&&(o.wrap=-o.wrap),
0!==o.pending?I:B)}function S(e){var t=e.state.status;return t!==ce&&t!==de&&t!==he&&t!==be&&t!==me&&t!==fe&&t!==ve?r(e,z):(e.state=null,
t===fe?r(e,U):I)}var E,A=e("./utils"),R=e("./trees"),T=e("./adler32"),L=e("./crc32"),P=e("./messages"),M=0,j=1,W=3,D=4,O=5,I=0,B=1,z=-2,U=-3,F=-5,$=-1,N=1,q=2,H=3,Z=4,V=0,G=2,K=8,X=9,Y=15,Q=8,J=29,ee=256,te=ee+1+J,ne=30,re=19,ae=2*te+1,ie=15,se=3,oe=258,le=oe+se+1,ue=32,ce=42,de=69,he=73,be=91,me=103,fe=113,ve=666,ge=1,pe=2,_e=3,we=4,ke=3,ye=function(e,t,n,r,a){
this.good_length=e,this.max_lazy=t,this.nice_length=n,this.max_chain=r,this.func=a;
};E=[new ye(0,0,0,0,b),new ye(4,4,8,4,m),new ye(4,5,16,8,m),new ye(4,6,32,32,m),new ye(4,4,16,16,f),new ye(8,16,32,32,f),new ye(8,16,128,128,f),new ye(8,32,128,256,f),new ye(32,128,258,1024,f),new ye(32,258,258,4096,f)],
n.deflateInit=x,n.deflateInit2=y,n.deflateReset=k,n.deflate=C,n.deflateEnd=S,n.deflateInfo="pako deflate (from Nodeca project)";
},{"./adler32":4,"./crc32":6,"./messages":11,"./trees":12,"./utils":13}],8:[function(e,t,n){
var r=30,a=12;t.exports=function(e,t){var n,i,s,o,l,u,c,d,h,b,m,f,v,g,p,_,w,k,y,x,C,S,E,A,R;
n=e.state,i=e.next_in_index,A=e.next_in,s=i+(e.avail_in-5),o=e.next_out_index,R=e.next_out,
l=o-(t-e.avail_out),u=o+(e.avail_out-257),c=n.dmax,d=n.wsize,h=n.whave,b=n.wnext,
m=n.window,f=n.hold,v=n.bits,g=n.lencode,p=n.distcode,_=(1<<n.lenbits)-1,w=(1<<n.distbits)-1;
e:do{15>v&&(f+=A[i++]<<v,v+=8,f+=A[i++]<<v,v+=8),k=g[f&_];t:for(;;){if(y=k>>>24,f>>>=y,
v-=y,y=k>>>16&255,0===y)R[o++]=65535&k;else{if(!(16&y)){if(0===(64&y)){k=g[(65535&k)+(f&(1<<y)-1)];
continue t}if(32&y){n.mode=a;break e}e.msg="invalid literal/length code",n.mode=r;
break e}x=65535&k,y&=15,y&&(y>v&&(f+=A[i++]<<v,v+=8),x+=f&(1<<y)-1,f>>>=y,v-=y),15>v&&(f+=A[i++]<<v,
v+=8,f+=A[i++]<<v,v+=8),k=p[f&w];n:for(;;){if(y=k>>>24,f>>>=y,v-=y,y=k>>>16&255,!(16&y)){
if(0===(64&y)){k=p[(65535&k)+(f&(1<<y)-1)];continue n}e.msg="invalid distance code",
n.mode=r;break e}if(C=65535&k,y&=15,y>v&&(f+=A[i++]<<v,v+=8,y>v&&(f+=A[i++]<<v,v+=8)),
C+=f&(1<<y)-1,C>c){e.msg="invalid distance too far back",n.mode=r;break e}if(f>>>=y,
v-=y,y=o-l,C>y){if(y=C-y,y>h&&n.sane){e.msg="invalid distance too far back",n.mode=r;
break e}if(S=0,E=m,0===b){if(S+=d-y,x>y){x-=y;do R[o++]=m[S++];while(--y);S=o-C,E=R;
}}else if(y>b){if(S+=d+b-y,y-=b,x>y){x-=y;do R[o++]=m[S++];while(--y);if(S=0,x>b){
y=b,x-=y;do R[o++]=m[S++];while(--y);S=o-C,E=R}}}else if(S+=b-y,x>y){x-=y;do R[o++]=m[S++];while(--y);
S=o-C,E=R}for(;x>2;)R[o++]=E[S++],R[o++]=E[S++],R[o++]=E[S++],x-=3;x&&(R[o++]=E[S++],
x>1&&(R[o++]=E[S++]))}else{S=o-C;do R[o++]=R[S++],R[o++]=R[S++],R[o++]=R[S++],x-=3;while(x>2);
x&&(R[o++]=R[S++],x>1&&(R[o++]=R[S++]))}break}}break}}while(s>i&&u>o);x=v>>3,i-=x,
v-=x<<3,f&=(1<<v)-1,e.next_in_index=i,e.next_out_index=o,e.avail_in=s>i?5+(s-i):5-(i-s),
e.avail_out=u>o?257+(u-o):257-(o-u),n.hold=f,n.bits=v}},{}],9:[function(e,t,n){function r(e){
return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function a(){this.mode=0,
this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,
this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,
this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,
this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,
this.have=0,this.next=null,this.next_index=0,this.lens=new p.Buf16(320),this.work=new p.Buf16(288),
this.codes=new p.Buf32(ge),this.sane=0,this.back=0,this.was=0}function i(e,t,n,r,a,i,s,o){
this.type=e,this.lens=t,this.lens_index=n,this.codes=r,this.table=a,this.table_index=i,
this.bits=s,this.work=o}function s(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,
t.wrap&&(e.adler=1&t.wrap),t.mode=I,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,
t.hold=0,t.bits=0,t.lencode=new p.Buf32(ge),t.distcode=new p.Buf32(ge),t.sane=1,t.back=-1,
T):M}function o(e){var t;return e&&e.state?(t=e.state,t.wsize=0,t.whave=0,t.wnext=0,
s(e)):M}function l(e,t){var n,r;return e&&e.state?(r=e.state,0>t?(n=0,t=-t):(n=(t>>4)+1,
48>t&&(t&=15)),t&&(8>t||t>15)?M:(null!==r.window&&r.wbits!==t&&(r.window=null),r.wrap=n,
r.wbits=t,o(e))):M}function u(e,t){var n,r;return e?(r=new a,e.state=r,r.window=null,
n=l(e,t),n!==T&&(e.state=null),n):M}function c(e){return u(e,_e)}function d(e,t,n){
var r;return e&&e.state?(r=e.state,0>t?(r.hold=0,r.bits=0,T):t>16||r.bits+t>32?M:(n&=(1<<t)-1,
r.hold+=n<<r.bits,r.bits+=t,T)):M}function h(e){if(we){var t,n;for(v=new p.Buf32(512),
g=new p.Buf32(32),t=0;144>t;)e.lens[t++]=8;for(;256>t;)e.lens[t++]=9;for(;280>t;)e.lens[t++]=7;
for(;288>t;)e.lens[t++]=8;for(n=9,y(new i(C,e.lens,0,288,v,0,n,e.work)),t=0;32>t;)e.lens[t++]=5;
n=5,y(new i(S,e.lens,0,32,g,0,n,e.work)),we=!1}e.lencode=v,e.lenbits=9,e.distcode=g,
e.distbits=5}function b(e,t,n,r){var a,i=e.state;return null===i.window&&(i.wsize=1<<i.wbits,
i.wnext=0,i.whave=0,i.window=new p.Buf8(i.wsize)),r>=i.wsize?(p.arraySet(i.window,t,n-i.wsize,i.wsize,0),
i.wnext=0,i.whave=i.wsize):(a=i.wsize-i.wnext,a>r&&(a=r),p.arraySet(i.window,t,n-r,a,i.wnext),
r-=a,r?(p.arraySet(i.window,t,n-r,r,0),i.wnext=r,i.whave=i.wsize):(i.wnext+=a,i.wnext===i.wsize&&(i.wnext=0),
i.whave<i.wsize&&(i.whave+=a))),0}function m(e,t){var n,a,s,o,l,u,c,d,m,f,v,g,fe,ve,ge,pe,_e,we,ke,ye,xe,Ce,Se,Ee,Ae=0,Re=new p.Buf8(4),Te=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];
n=e.state,n.mode===G&&(n.mode=K),l=e.next_out_index,s=e.next_out,c=e.avail_out,o=e.next_in_index,
a=e.next_in,u=e.avail_in,d=n.hold,m=n.bits,f=u,v=c,Ce=T;e:for(;;)switch(n.mode){case I:
if(0===n.wrap){n.mode=K;break}for(;16>m;){if(0===u)break e;u--,d+=a[o++]<<m,m+=8}
if(2&n.wrap&&35615===d){n.check=0,Re[0]=255&d,Re[1]=d>>>8&255,n.check=w(n.check,Re,2,0),
d=0,m=0,n.mode=B;break}if(n.flags=0,n.head&&(n.head.done=-1),!(1&n.wrap)||(((255&d)<<8)+(d>>8))%31){
e.msg="incorrect header check",n.mode=he;break}if((15&d)!==O){e.msg="unknown compression method",
n.mode=he;break}if(d>>>=4,m-=4,xe=(15&d)+8,0===n.wbits)n.wbits=xe;else if(xe>n.wbits){
e.msg="invalid window size",n.mode=he;break}n.dmax=1<<xe,e.adler=n.check=1,n.mode=512&d?Z:G,
d=0,m=0;break;case B:for(;16>m;){if(0===u)break e;u--,d+=a[o++]<<m,m+=8}if(n.flags=d,
(255&n.flags)!==O){e.msg="unknown compression method",n.mode=he;break}if(57344&n.flags){
e.msg="unknown header flags set",n.mode=he;break}n.head&&(n.head.text=d>>8&1),512&n.flags&&(Re[0]=255&d,
Re[1]=d>>>8&255,n.check=w(n.check,Re,2,0)),d=0,m=0,n.mode=z;case z:for(;32>m;){if(0===u)break e;
u--,d+=a[o++]<<m,m+=8}n.head&&(n.head.time=d),512&n.flags&&(Re[0]=255&d,Re[1]=d>>>8&255,
Re[2]=d>>>16&255,Re[3]=d>>>24&255,n.check=w(n.check,Re,4,0)),d=0,m=0,n.mode=U;case U:
for(;16>m;){if(0===u)break e;u--,d+=a[o++]<<m,m+=8}n.head&&(n.head.xflags=255&d,n.head.os=d>>8),
512&n.flags&&(Re[0]=255&d,Re[1]=d>>>8&255,n.check=w(n.check,Re,2,0)),d=0,m=0,n.mode=F;
case F:if(1024&n.flags){for(;16>m;){if(0===u)break e;u--,d+=a[o++]<<m,m+=8}n.length=d,
n.head&&(n.head.extra_len=d),512&n.flags&&(Re[0]=255&d,Re[1]=d>>>8&255,n.check=w(n.check,Re,2,0)),
d=0,m=0}else n.head&&(n.head.extra=null);n.mode=$;case $:if(1024&n.flags){if(g=n.length,
g>u&&(g=u),g){if(n.head&&n.head.extra)throw xe=n.head.extra_len-n.length,"Review & implement right";
512&n.flags&&(n.check=w(n.check,a,g,o)),u-=g,o+=g,n.length-=g}if(n.length)break e;
}n.length=0,n.mode=N;case N:if(2048&n.flags){if(0===u)break e;g=0;do xe=a[o+g++],
n.head&&n.head.name&&n.length<n.head.name_max&&(n.head.name[n.length++]=xe);while(xe&&u>g);
if(512&n.flags&&(n.check=w(n.check,a,g,o)),u-=g,o+=g,xe)break e}else n.head&&(n.head.name=null);
n.length=0,n.mode=q;case q:if(4096&n.flags){if(0===u)break e;g=0;do xe=a[o+g++],n.head&&n.head.comment&&n.length<n.head.comm_max&&(n.head.comment[n.length++]=xe);while(xe&&u>g);
if(512&n.flags&&(n.check=w(n.check,a,g,o)),u-=g,o+=g,xe)break e}else n.head&&(n.head.comment=null);
n.mode=H;case H:if(512&n.flags){for(;16>m;){if(0===u)break e;u--,d+=a[o++]<<m,m+=8;
}if(d!==(65535&n.check)){e.msg="header crc mismatch",n.mode=he;break}d=0,m=0}n.head&&(n.head.hcrc=n.flags>>9&1,
n.head.done=1),e.adler=n.check=0,n.mode=G;break;case Z:for(;32>m;){if(0===u)break e;
u--,d+=a[o++]<<m,m+=8}e.adler=n.check=r(d),d=0,m=0,n.mode=V;case V:if(0===n.havedict)return e.next_out_index=l,
e.avail_out=c,e.next_in_index=o,e.avail_in=u,n.hold=d,n.bits=m,P;e.adler=n.check=1,
n.mode=G;case G:if(t===A||t===R)break e;case K:if(n.last){d>>>=7&m,m-=7&m,n.mode=ue;
break}for(;3>m;){if(0===u)break e;u--,d+=a[o++]<<m,m+=8}switch(n.last=1&d,d>>>=1,
m-=1,3&d){case 0:n.mode=X;break;case 1:if(h(n),n.mode=ne,t===R){d>>>=2,m-=2;break e;
}break;case 2:n.mode=J;break;case 3:e.msg="invalid block type",n.mode=he}d>>>=2,m-=2;
break;case X:for(d>>>=7&m,m-=7&m;32>m;){if(0===u)break e;u--,d+=a[o++]<<m,m+=8}if((65535&d)!==(d>>>16^65535)){
e.msg="invalid stored block lengths",n.mode=he;break}if(n.length=65535&d,d=0,m=0,
n.mode=Y,t===R)break e;case Y:n.mode=Q;case Q:if(g=n.length){if(g>u&&(g=u),g>c&&(g=c),
0===g)break e;p.arraySet(s,a,o,g,l),u-=g,o+=g,c-=g,l+=g,n.length-=g;break}n.mode=G;
break;case J:for(;14>m;){if(0===u)break e;u--,d+=a[o++]<<m,m+=8}if(n.nlen=(31&d)+257,
d>>>=5,m-=5,n.ndist=(31&d)+1,d>>>=5,m-=5,n.ncode=(15&d)+4,d>>>=4,m-=4,n.nlen>286||n.ndist>30){
e.msg="too many length or distance symbols",n.mode=he;break}n.have=0,n.mode=ee;case ee:
for(;n.have<n.ncode;){for(;3>m;){if(0===u)break e;u--,d+=a[o++]<<m,m+=8}n.lens[Te[n.have++]]=7&d,
d>>>=3,m-=3}for(;n.have<19;)n.lens[Te[n.have++]]=0;if(p.arraySet(n.lencode,n.codes,0,n.codes.length,0),
n.lenbits=7,Se=new i(x,n.lens,0,19,n.lencode,0,n.lenbits,n.work),Ce=y(Se),n.lenbits=Se.bits,
Ce){e.msg="invalid code lengths set",n.mode=he;break}n.have=0,n.mode=te;case te:for(;n.have<n.nlen+n.ndist;){
for(;Ae=n.lencode[d&(1<<n.lenbits)-1],ge=Ae>>>24,pe=Ae>>>16&255,_e=65535&Ae,!(m>=ge);){
if(0===u)break e;u--,d+=a[o++]<<m,m+=8}if(16>_e)d>>>=ge,m-=ge,n.lens[n.have++]=_e;else{
if(16===_e){for(Ee=ge+2;Ee>m;){if(0===u)break e;u--,d+=a[o++]<<m,m+=8}if(d>>>=ge,
m-=ge,0===n.have){e.msg="invalid bit length repeat",n.mode=he;break}xe=n.lens[n.have-1],
g=3+(3&d),d>>>=2,m-=2}else if(17===_e){for(Ee=ge+3;Ee>m;){if(0===u)break e;u--,d+=a[o++]<<m,
m+=8}d>>>=ge,m-=ge,xe=0,g=3+(7&d),d>>>=3,m-=3}else{for(Ee=ge+7;Ee>m;){if(0===u)break e;
u--,d+=a[o++]<<m,m+=8}d>>>=ge,m-=ge,xe=0,g=11+(127&d),d>>>=7,m-=7}if(n.have+g>n.nlen+n.ndist){
e.msg="invalid bit length repeat",n.mode=he;break}for(;g--;)n.lens[n.have++]=xe}}
if(n.mode===he)break;if(0===n.lens[256]){e.msg="invalid code -- missing end-of-block",
n.mode=he;break}if(p.arraySet(n.lencode,n.codes,0,n.codes.length,0),n.lenbits=9,Se=new i(C,n.lens,0,n.nlen,n.lencode,0,n.lenbits,n.work),
Ce=y(Se),n.lenbits=Se.bits,Ce){e.msg="invalid literal/lengths set",n.mode=he;break;
}if(n.distbits=6,p.arraySet(n.distcode,n.codes,0,n.codes.length,0),Se=new i(S,n.lens,n.nlen,n.ndist,n.distcode,0,n.distbits,n.work),
Ce=y(Se),n.distbits=Se.bits,Ce){e.msg="invalid distances set",n.mode=he;break}if(n.mode=ne,
t===R)break e;case ne:n.mode=re;case re:if(u>=6&&c>=258){e.next_out_index=l,e.avail_out=c,
e.next_in_index=o,e.avail_in=u,n.hold=d,n.bits=m,k(e,v),l=e.next_out_index,s=e.next_out,
c=e.avail_out,o=e.next_in_index,a=e.next_in,u=e.avail_in,d=n.hold,m=n.bits,n.mode===G&&(n.back=-1);
break}for(n.back=0;Ae=n.lencode[d&(1<<n.lenbits)-1],ge=Ae>>>24,pe=Ae>>>16&255,_e=65535&Ae,
!(m>=ge);){if(0===u)break e;u--,d+=a[o++]<<m,m+=8}if(pe&&0===(240&pe)){for(we=ge,
ke=pe,ye=_e;Ae=n.lencode[ye+((d&(1<<we+ke)-1)>>we)],ge=Ae>>>24,pe=Ae>>>16&255,_e=65535&Ae,
!(m>=we+ge);){if(0===u)break e;u--,d+=a[o++]<<m,m+=8}d>>>=we,m-=we,n.back+=we}if(d>>>=ge,
m-=ge,n.back+=ge,n.length=_e,0===pe){n.mode=le;break}if(32&pe){n.back=-1,n.mode=G;
break}if(64&pe){e.msg="invalid literal/length code",n.mode=he;break}n.extra=15&pe,
n.mode=ae;case ae:if(n.extra){for(Ee=n.extra;Ee>m;){if(0===u)break e;u--,d+=a[o++]<<m,
m+=8}n.length+=d&(1<<n.extra)-1,d>>>=n.extra,m-=n.extra,n.back+=n.extra}n.was=n.length,
n.mode=ie;case ie:for(;Ae=n.distcode[d&(1<<n.distbits)-1],ge=Ae>>>24,pe=Ae>>>16&255,
_e=65535&Ae,!(m>=ge);){if(0===u)break e;u--,d+=a[o++]<<m,m+=8}if(0===(240&pe)){for(we=ge,
ke=pe,ye=_e;Ae=n.distcode[ye+((d&(1<<we+ke)-1)>>we)],ge=Ae>>>24,pe=Ae>>>16&255,_e=65535&Ae,
!(m>=we+ge);){if(0===u)break e;u--,d+=a[o++]<<m,m+=8}d>>>=we,m-=we,n.back+=we}if(d>>>=ge,
m-=ge,n.back+=ge,64&pe){e.msg="invalid distance code",n.mode=he;break}n.offset=_e,
n.extra=15&pe,n.mode=se;case se:if(n.extra){for(Ee=n.extra;Ee>m;){if(0===u)break e;
u--,d+=a[o++]<<m,m+=8}n.offset+=d&(1<<n.extra)-1,d>>>=n.extra,m-=n.extra,n.back+=n.extra;
}if(n.offset>n.dmax){e.msg="invalid distance too far back",n.mode=he;break}n.mode=oe;
case oe:if(0===c)break e;if(g=v-c,n.offset>g){if(g=n.offset-g,g>n.whave&&n.sane){
e.msg="invalid distance too far back",n.mode=he;break}g>n.wnext?(g-=n.wnext,fe=n.wsize-g):fe=n.wnext-g,
g>n.length&&(g=n.length),ve=n.window}else ve=s,fe=l-n.offset,g=n.length;g>c&&(g=c),
c-=g,n.length-=g;do s[l++]=ve[fe++];while(--g);0===n.length&&(n.mode=re);break;case le:
if(0===c)break e;s[l++]=n.length,c--,n.mode=re;break;case ue:if(n.wrap){for(;32>m;){
if(0===u)break e;u--,d|=a[o++]<<m,m+=8}if(v-=c,e.total_out+=v,n.total+=v,v&&(e.adler=n.check=n.flags?w(n.check,s,v,l-v):_(n.check,s,v,l-v)),
v=c,(n.flags?d:r(d))!==n.check){e.msg="incorrect data check",n.mode=he;break}d=0,
m=0}n.mode=ce;case ce:if(n.wrap&&n.flags){for(;32>m;){if(0===u)break e;u--,d+=a[o++]<<m,
m+=8}if(d!==(4294967295&n.total)){e.msg="incorrect length check",n.mode=he;break}
d=0,m=0}n.mode=de;case de:Ce=L;break e;case he:Ce=j;break e;case be:return W;case me:
default:return M}return e.next_out_index=l,e.avail_out=c,e.next_in_index=o,e.avail_in=u,
n.hold=d,n.bits=m,(n.wsize||v!==e.avail_out&&n.mode<he&&(n.mode<ue||t!==E))&&b(e,e.next_out,e.next_out_index,v-e.avail_out)?(n.mode=be,
W):(f-=e.avail_in,v-=e.avail_out,e.total_in+=f,e.total_out+=v,n.total+=v,n.wrap&&v&&(e.adler=n.check=n.flags?w(n.check,s,v,e.next_out_index-v):_(n.check,s,v,e.next_out_index-v)),
e.data_type=n.bits+(n.last?64:0)+(n.mode===G?128:0)+(n.mode===ne||n.mode===Y?256:0),
(0===f&&0===v||t===E)&&Ce===T&&(Ce=D),Ce)}function f(e){var t=e.state;return t.window&&(t.window=null),
e.state=null,T}var v,g,p=e("./utils"),_=e("./adler32"),w=e("./crc32"),k=e("./inffast"),y=e("./inftrees"),x=0,C=1,S=2,E=4,A=5,R=6,T=0,L=1,P=2,M=-2,j=-3,W=-4,D=-5,O=8,I=1,B=2,z=3,U=4,F=5,$=6,N=7,q=8,H=9,Z=10,V=11,G=12,K=13,X=14,Y=15,Q=16,J=17,ee=18,te=19,ne=20,re=21,ae=22,ie=23,se=24,oe=25,le=26,ue=27,ce=28,de=29,he=30,be=31,me=32,fe=852,ve=592,ge=fe+ve,pe=15,_e=pe,we=!0;
n.inflateReset=o,n.inflateReset2=l,n.inflateResetKeep=s,n.inflateInit=c,n.inflateInit2=u,
n.inflatePrime=d,n.inflate=m,n.inflateEnd=f,n.inflateInfo="pako inflate (from Nodeca project)";
},{"./adler32":4,"./crc32":6,"./inffast":8,"./inftrees":10,"./utils":13}],10:[function(e,t,n){
var r=e("./utils"),a=15,i=852,s=592,o=0,l=1,u=2,c=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],d=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],h=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],b=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];
t.exports=function(e){var t,n,m,f,v,g,p,_,w,k=e.type,y=e.lens,x=e.codes,C=e.table,S=e.bits,E=e.work,A=0,R=0,T=0,L=0,P=0,M=0,j=0,W=0,D=0,O=0,I=null,B=0,z=new r.Buf16(a+1),U=new r.Buf16(a+1),F=null,$=0;
for(A=0;a>=A;A++)z[A]=0;for(R=0;x>R;R++)z[y[e.lens_index+R]]++;for(P=S,L=a;L>=1&&0===z[L];L--);
if(P>L&&(P=L),0===L)return C[e.table_index++]=20971520,C[e.table_index++]=20971520,
e.bits=1,0;for(T=1;L>T&&0===z[T];T++);for(T>P&&(P=T),W=1,A=1;a>=A;A++)if(W<<=1,W-=z[A],
0>W)return-1;if(W>0&&(k===o||1!==L))return-1;for(U[1]=0,A=1;a>A;A++)U[A+1]=U[A]+z[A];
for(R=0;x>R;R++)0!==y[e.lens_index+R]&&(E[U[y[e.lens_index+R]]++]=R);switch(k){case o:
I=F=E,g=19;break;case l:I=c,B-=257,F=d,$-=257,g=256;break;default:I=h,F=b,g=-1}if(O=0,
R=0,A=T,v=e.table_index,M=P,j=0,m=-1,D=1<<P,f=D-1,k===l&&D>i||k===u&&D>s)return 1;
for(var N=0;;){N++,p=A-j,E[R]<g?(_=0,w=E[R]):E[R]>g?(_=F[$+E[R]],w=I[B+E[R]]):(_=96,
w=0),t=1<<A-j,n=1<<M,T=n;do n-=t,C[v+(O>>j)+n]=p<<24|_<<16|w|0;while(0!==n);for(t=1<<A-1;O&t;)t>>=1;
if(0!==t?(O&=t-1,O+=t):O=0,R++,0===--z[A]){if(A===L)break;A=y[e.lens_index+E[R]]}
if(A>P&&(O&f)!==m){for(0===j&&(j=P),v+=T,M=A-j,W=1<<M;L>M+j&&(W-=z[M+j],!(0>=W));)M++,
W<<=1;if(D+=1<<M,k===l&&D>i||k===u&&D>s)return 1;m=O&f,C[m]=P<<24|M<<16|v-e.table_index;
}}return 0!==O&&(C[v+O]=A-j<<24|64<<16|0),e.table_index+=D,e.bits=P,0}},{"./utils":13
}],11:[function(e,t,n){t.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error",
"-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error",
"-6":"incompatible version"}},{}],12:[function(e,t,n){function r(e){for(var t=e.length;--t;)e[t]=0;
}function a(e){return 256>e?se[e]:se[256+(e>>>7)]}function i(e,t){e.pending_buf[e.pending++]=255&t,
e.pending_buf[e.pending++]=t>>>8&255}function s(e,t,n){e.bi_valid>V-n?(e.bi_buf|=t<<e.bi_valid&65535,
i(e,e.bi_buf),e.bi_buf=t>>V-e.bi_valid,e.bi_valid+=n-V):(e.bi_buf|=t<<e.bi_valid&65535,
e.bi_valid+=n)}function o(e,t,n){s(e,n[2*t],n[2*t+1])}function l(e,t){var n=0;do n|=1&e,
e>>>=1,n<<=1;while(--t>0);return n>>>1}function u(e){16===e.bi_valid?(i(e,e.bi_buf),
e.bi_buf=0,e.bi_valid=0):e.bi_valid>=8&&(e.pending_buf[e.pending++]=255&e.bi_buf,
e.bi_buf>>=8,e.bi_valid-=8)}function c(e,t){var n,r,a,i,s,o,l=t.dyn_tree,u=t.max_code,c=t.stat_desc.static_tree,d=t.stat_desc.has_stree,h=t.stat_desc.extra_bits,b=t.stat_desc.extra_base,m=t.stat_desc.max_length,f=0;
for(i=0;Z>=i;i++)e.bl_count[i]=0;for(l[2*e.heap[e.heap_max]+1]=0,n=e.heap_max+1;H>n;n++)r=e.heap[n],
i=l[2*l[2*r+1]+1]+1,i>m&&(i=m,f++),l[2*r+1]=i,r>u||(e.bl_count[i]++,s=0,r>=b&&(s=h[r-b]),
o=l[2*r],e.opt_len+=o*(i+s),d&&(e.static_len+=o*(c[2*r+1]+s)));if(0!==f){do{for(i=m-1;0===e.bl_count[i];)i--;
e.bl_count[i]--,e.bl_count[i+1]+=2,e.bl_count[m]--,f-=2}while(f>0);for(i=m;0!==i;i--)for(r=e.bl_count[i];0!==r;)a=e.heap[--n],
a>u||(l[2*a+1]!==i&&(e.opt_len+=(i-l[2*a+1])*l[2*a],l[2*a+1]=i),r--)}}function d(e,t,n){
var r,a,i=new Array(Z+1),s=0;for(r=1;Z>=r;r++)i[r]=s=s+n[r-1]<<1;for(a=0;t>=a;a++){
var o=e[2*a+1];0!==o&&(e[2*a]=l(i[o]++,o))}}function h(){var e,t,n,r,a,i=new Array(Z+1);
for(n=0,r=0;U-1>r;r++)for(le[r]=n,e=0;e<1<<J[r];e++)oe[n++]=r;for(oe[n-1]=r,a=0,r=0;16>r;r++)for(ue[r]=a,
e=0;e<1<<ee[r];e++)se[a++]=r;for(a>>=7;N>r;r++)for(ue[r]=a<<7,e=0;e<1<<ee[r]-7;e++)se[256+a++]=r;
for(t=0;Z>=t;t++)i[t]=0;for(e=0;143>=e;)ae[2*e+1]=8,e++,i[8]++;for(;255>=e;)ae[2*e+1]=9,
e++,i[9]++;for(;279>=e;)ae[2*e+1]=7,e++,i[7]++;for(;287>=e;)ae[2*e+1]=8,e++,i[8]++;
for(d(ae,$+1,i),e=0;N>e;e++)ie[2*e+1]=5,ie[2*e]=l(e,5);ce=new be(ae,J,F+1,$,Z),de=new be(ie,ee,0,N,Z),
he=new be(new Array(0),te,0,q,G)}function b(e){var t;for(t=0;$>t;t++)e.dyn_ltree[2*t]=0;
for(t=0;N>t;t++)e.dyn_dtree[2*t]=0;for(t=0;q>t;t++)e.bl_tree[2*t]=0;e.dyn_ltree[2*K]=1,
e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function m(e){e.bi_valid>8?i(e,e.bi_buf):e.bi_valid>0&&(e.pending_buf[e.pending++]=e.bi_buf),
e.bi_buf=0,e.bi_valid=0}function f(e,t,n,r){m(e),r&&(i(e,n),i(e,~n)),L.arraySet(e.pending_buf,e.window,t,n,e.pending),
e.pending+=n}function v(e,t,n,r){var a=2*t,i=2*n;return e[a]<e[i]||e[a]===e[i]&&r[t]<=r[n];
}function g(e,t,n){for(var r=e.heap[n],a=n<<1;a<=e.heap_len&&(a<e.heap_len&&v(t,e.heap[a+1],e.heap[a],e.depth)&&a++,
!v(t,r,e.heap[a],e.depth));)e.heap[n]=e.heap[a],n=a,a<<=1;e.heap[n]=r}function p(e,t,n){
var r,i,l,u,c=0;if(0!==e.last_lit)do r=e.pending_buf[e.d_buf+2*c]<<8|e.pending_buf[e.d_buf+2*c+1],
i=e.pending_buf[e.l_buf+c],c++,0===r?o(e,i,t):(l=oe[i],o(e,l+F+1,t),u=J[l],0!==u&&(i-=le[l],
s(e,i,u)),r--,l=a(r),o(e,l,n),u=ee[l],0!==u&&(r-=ue[l],s(e,r,u)));while(c<e.last_lit);
o(e,K,t)}function _(e,t){var n,r,a,i=t.dyn_tree,s=t.stat_desc.static_tree,o=t.stat_desc.has_stree,l=t.stat_desc.elems,u=-1;
for(e.heap_len=0,e.heap_max=H,n=0;l>n;n++)0!==i[2*n]?(e.heap[++e.heap_len]=u=n,e.depth[n]=0):i[2*n+1]=0;
for(;e.heap_len<2;)a=e.heap[++e.heap_len]=2>u?++u:0,i[2*a]=1,e.depth[a]=0,e.opt_len--,
o&&(e.static_len-=s[2*a+1]);for(t.max_code=u,n=e.heap_len>>1;n>=1;n--)g(e,i,n);a=l;
do n=e.heap[1],e.heap[1]=e.heap[e.heap_len--],g(e,i,1),r=e.heap[1],e.heap[--e.heap_max]=n,
e.heap[--e.heap_max]=r,i[2*a]=i[2*n]+i[2*r],e.depth[a]=(e.depth[n]>=e.depth[r]?e.depth[n]:e.depth[r])+1,
i[2*n+1]=i[2*r+1]=a,e.heap[1]=a++,g(e,i,1);while(e.heap_len>=2);e.heap[--e.heap_max]=e.heap[1],
c(e,t),d(i,u,e.bl_count)}function w(e,t,n){var r,a,i=-1,s=t[1],o=0,l=7,u=4;for(0===s&&(l=138,
u=3),t[2*(n+1)+1]=65535,r=0;n>=r;r++)a=s,s=t[2*(r+1)+1],++o<l&&a===s||(u>o?e.bl_tree[2*a]+=o:0!==a?(a!==i&&e.bl_tree[2*a]++,
e.bl_tree[2*X]++):10>=o?e.bl_tree[2*Y]++:e.bl_tree[2*Q]++,o=0,i=a,0===s?(l=138,u=3):a===s?(l=6,
u=3):(l=7,u=4))}function k(e,t,n){var r,a,i=-1,l=t[1],u=0,c=7,d=4;for(0===l&&(c=138,
d=3),r=0;n>=r;r++)if(a=l,l=t[2*(r+1)+1],!(++u<c&&a===l)){if(d>u){do o(e,a,e.bl_tree);while(0!==--u);
}else 0!==a?(a!==i&&(o(e,a,e.bl_tree),u--),o(e,X,e.bl_tree),s(e,u-3,2)):10>=u?(o(e,Y,e.bl_tree),
s(e,u-3,3)):(o(e,Q,e.bl_tree),s(e,u-11,7));u=0,i=a,0===l?(c=138,d=3):a===l?(c=6,d=3):(c=7,
d=4)}}function y(e){var t;for(w(e,e.dyn_ltree,e.l_desc.max_code),w(e,e.dyn_dtree,e.d_desc.max_code),
_(e,e.bl_desc),t=q-1;t>=3&&0===e.bl_tree[2*ne[t]+1];t--);return e.opt_len+=3*(t+1)+5+5+4,
t}function x(e,t,n,r){var a;for(s(e,t-257,5),s(e,n-1,5),s(e,r-4,4),a=0;r>a;a++)s(e,e.bl_tree[2*ne[a]+1],3);
k(e,e.dyn_ltree,t-1),k(e,e.dyn_dtree,n-1)}function C(e){var t,n=4093624447;for(t=0;31>=t;t++,
n>>>=1)if(1&n&&0!==e.dyn_ltree[2*t])return M;if(0!==e.dyn_ltree[18]||0!==e.dyn_ltree[20]||0!==e.dyn_ltree[26])return j;
for(t=32;F>t;t++)if(0!==e.dyn_ltree[2*t])return j;return M}function S(e){fe||(h(),
fe=!0),e.l_desc=new me(e.dyn_ltree,ce),e.d_desc=new me(e.dyn_dtree,de),e.bl_desc=new me(e.bl_tree,he),
e.bi_buf=0,e.bi_valid=0,b(e)}function E(e,t,n,r){s(e,(D<<1)+(r?1:0),3),f(e,t,n,!0);
}function A(e){s(e,O<<1,3),o(e,K,ae),u(e)}function R(e,t,n,r){var a,i,o=0;e.level>0?(e.strm.data_type===W&&(e.strm.data_type=C(e)),
_(e,e.l_desc),_(e,e.d_desc),o=y(e),a=e.opt_len+3+7>>>3,i=e.static_len+3+7>>>3,a>=i&&(a=i)):a=i=n+5,
a>=n+4&&-1!==t?E(e,t,n,r):e.strategy===P||i===a?(s(e,(O<<1)+(r?1:0),3),p(e,ae,ie)):(s(e,(I<<1)+(r?1:0),3),
x(e,e.l_desc.max_code+1,e.d_desc.max_code+1,o+1),p(e,e.dyn_ltree,e.dyn_dtree)),b(e),
r&&m(e)}function T(e,t,n){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,
e.pending_buf[e.l_buf+e.last_lit]=255&n,e.last_lit++,0===t?e.dyn_ltree[2*n]++:(e.matches++,
t--,e.dyn_ltree[2*(oe[n]+F+1)]++,e.dyn_dtree[2*a(t)]++),e.last_lit===e.lit_bufsize-1;
}var L=e("./utils"),P=4,M=0,j=1,W=2,D=0,O=1,I=2,B=3,z=258,U=29,F=256,$=F+1+U,N=30,q=19,H=2*$+1,Z=15,V=16,G=7,K=256,X=16,Y=17,Q=18,J=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ee=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],te=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],ne=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],re=512,ae=new Array(2*($+2));
r(ae);var ie=new Array(2*N);r(ie);var se=new Array(re);r(se);var oe=new Array(z-B+1);
r(oe);var le=new Array(U);r(le);var ue=new Array(N);r(ue);var ce,de,he,be=function(e,t,n,r,a){
this.static_tree=e,this.extra_bits=t,this.extra_base=n,this.elems=r,this.max_length=a,
this.has_stree=e&&e.length},me=function(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t;
},fe=!1;n._tr_init=S,n._tr_stored_block=E,n._tr_flush_block=R,n._tr_tally=T,n._tr_align=A;
},{"./utils":13}],13:[function(e,t,n){var r="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;
n.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){
var n=t.shift();if(n){if("object"!==$traceurRuntime["typeof"](n))throw new TypeError(n+"must be non-object");
for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])}}return e},n.shrinkBuf=function(e,t){
return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var a={arraySet:function(e,t,n,r,a){
if(t.subarray)return void e.set(t.subarray(n,n+r),a);for(var i=0;r>i;i++)e[a+i]=t[n+i];
},flattenChunks:function(e){var t,n,r,a,i,s;for(r=0,t=0,n=e.length;n>t;t++)r+=e[t].length;
for(s=new Uint8Array(r),a=0,t=0,n=e.length;n>t;t++)i=e[t],s.set(i,a),a+=i.length;return s;
}},i={arraySet:function(e,t,n,r,a){for(var i=0;r>i;i++)e[a+i]=t[n+i]},flattenChunks:function(e){
return[].concat.apply([],e)}};n.setTyped=function(e){e?(n.Buf8=Uint8Array,n.Buf16=Uint16Array,
n.Buf32=Int32Array,n.assign(n,a)):(n.Buf8=Array,n.Buf16=Array,n.Buf32=Array,n.assign(n,i));
},n.setTyped(r)},{}],14:[function(e,t,n){function r(){this.next_in=null,this.next_in_index=0,
this.avail_in=0,this.total_in=0,this.next_out=null,this.next_out_index=0,this.avail_out=0,
this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}t.exports=r;
},{}]},{},[1])(1)});var e=window.pako;return{get default(){return e}}}),System.registerModule("utils/artwork",[],function(){
"use strict";var e=System.get("libs/pako")["default"],t=System.get("utils/constants"),n=t.SVG_NAMESPACE,r=t.XLINK_NAMESPACE,a=function(t){
for(var n=[],r=0,a=t.length;a>r;r+=1)n.push(t[r].charCodeAt(0));var i=new Uint8Array(n);
return e.gzip(i)},i=function(t){for(var n=e.inflate(t),r="",a=0,i=n.length;i>a;a+=1){
var s=String.fromCharCode(n[a]);r+=s}return r},s=function(e){return new Promise(function(t){
var a=new Image;a.src=e,a.onload=function(){var i=a.naturalWidth,s=a.naturalHeight,o='\n        <svg xmlns="'+n+'" xmlns:xlink="'+r+'" viewBox="0 0 '+i+" "+s+'">\n          <image width="'+i+'" height="'+s+'" xlink:href="'+e+'"></image>\n        </svg>\n      ';
t(o)}})};return{get compressArtwork(){return a},get uncompressArtwork(){return i},
get createArtworkFromBitmapDataURL(){return s}}}),System.registerModule("utils/constants",[],function(){
"use strict";var e=chrome.runtime.getManifest().name,t=chrome.runtime.getManifest().version,n="http://www.w3.org/2000/svg",r="http://www.w3.org/1999/xlink";
return{get APP_NAME(){return e},get APP_VERSION(){return t},get SVG_NAMESPACE(){return n;
},get XLINK_NAMESPACE(){return r}}}),System.registerModule("utils/element",[],function(){
"use strict";var e=System.get("utils/constants").SVG_NAMESPACE,t=function(t){var n,r,a,i,s=void 0!==arguments[1]?arguments[1]:null,o=t.split(":"),l=null;
if(1===o.length){var u=(n=o[Symbol.iterator](),(r=n.next()).done?void 0:r.value);l=document.createElement(u,s);
}else if(2===o.length){var c=o,d=(a=c[Symbol.iterator](),(i=a.next()).done?void 0:i.value),h=(i=a.next()).done?void 0:i.value;
"svg"===d&&(l=document.createElementNS(e,h,s))}return l},n=function(e,t){var n=void 0!==arguments[2]?arguments[2]:null;
if(null===n){var r=t;return document.registerElement(e,r)}var a=t,i=n;return document.registerElement(a,{
"extends":e,prototype:i.prototype})},r=function(e){for(var t=e;t;t=t.parentNode)if(t instanceof ShadowRoot||t===window.document)return t;
};return{get createElement(){return t},get registerElement(){return n},get getClosestShadowRoot(){
return r}}}),System.registerModule("utils/filesystem",[],function(){"use strict";var e=function(e){
var t=void 0!==arguments[1]?arguments[1]:"text";return new Promise(function(n){e.file(function(e){
var r,a,i,s=new FileReader;"text"===t?s.readAsText(e):"dataURL"===t?s.readAsDataURL(e):"arrayBuffer"===t&&s.readAsArrayBuffer(e),
s.addEventListener("load",a=function(e){s.removeEventListener("load",a),s.removeEventListener("error",i),
r="arrayBuffer"===t?new Uint8Array(e.target.result):e.target.result,n(r)}),s.addEventListener("error",i=function(e){
s.removeEventListener("load",a),s.removeEventListener("error",i),n(null)})})})},t=function(e,t){
var n=void 0!==arguments[2]?arguments[2]:"text/plain";return new Promise(function(r,a){
var i;return $traceurRuntime.asyncWrap(function(s){for(;;)switch(s.state){case 0:
return void Promise.resolve(l(e)).then(s.createCallback(3),s.errback);case 3:i=s.value,
s.state=2;break;case 2:i?i.createWriter(function(e){var i,s,o=new Blob([t],{type:n
}),l="write";e.addEventListener("writeend",i=function(t){"write"===l?(l="truncate",
e.truncate(o.size)):"truncate"===l&&(e.removeEventListener("writeend",i),e.removeEventListener("error",s),
r())}),e.addEventListener("error",s=function(t){e.removeEventListener("writeend",i),
e.removeEventListener("error",s),a("READ_ONLY")}),e.write(o)},function(e){a("NOT_FOUND");
}):a("READ_ONLY"),s.state=-2;break;default:return s.end()}},this)})},n=function(e){
return new Promise(function(t,n){chrome.fileSystem.chooseEntry(e,function(r){chrome.runtime.lastError?"User cancelled"===chrome.runtime.lastError.message?t(e.acceptsMultiple===!0?[]:null):n(chrome.runtime.lastError.message):t(r);
})})},r=function(e){return new Promise(function(t){chrome.fileSystem.restoreEntry(e,function(e){
e?e.file(function(){return t(e)},function(){return t(null)}):t(null)})})},a=function(e,t){
return $traceurRuntime.asyncWrap(function(n){for(;;)switch(n.state){case 0:n.returnValue=new Promise(function(n){
var r,a;return $traceurRuntime.asyncWrap(function(s){for(;;)switch(s.state){case 0:
return void Promise.resolve(i(e)).then(s.createCallback(3),s.errback);case 3:r=s.value,
s.state=2;break;case 2:return void Promise.resolve(i(t)).then(s.createCallback(6),s.errback);
case 6:a=s.value,s.state=5;break;case 5:n(r===a),s.state=-2;break;default:return s.end();
}},this)}),n.state=2;break;case 2:n.state=-2;break;default:return n.end()}},this);
},i=function(e){return new Promise(function(t){chrome.fileSystem.getDisplayPath(e,function(e){
t(e)})})},s=function(e){return e.name.substring(0,e.name.lastIndexOf("."))},o=function(e){
return e.name&&e.name.includes(".")?e.name.substring(e.name.lastIndexOf(".")+1).toLowerCase():"";
},l=function(e){return new Promise(function(t){chrome.fileSystem.isWritableEntry(e,function(n){
n?t(e):chrome.fileSystem.getWritableEntry(e,function(e){t(chrome.runtime.lastError?null:e);
})})})};return{get readEntry(){return e},get writeEntry(){return t},get chooseEntry(){
return n},get restoreEntry(){return r},get compareEntries(){return a},get getEntryDisplayPath(){
return i},get getEntryBaseName(){return s},get getEntryExtension(){return o}}}),System.registerModule("utils/string",[],function(){
"use strict";var e=function(e){return e.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase();
})};return{get toDashCase(){return e}}}),System.registerModule("utils/time",[],function(){
"use strict";var e=arguments,t=function(e){return new Promise(function(t,n){setTimeout(function(){
return t()},e)})},n=function(){return Date.now()},r=function(t,n,r){var a=void 0!==arguments[3]?arguments[3]:!1,i=null,s=null,o=function(){
var o=e,l=function(){i=null,a||(s=t.apply(r,o))},u=a&&!i;return clearTimeout(i),i=setTimeout(l,n),
u&&(s=t.apply(r,o)),s};return o};return{get sleep(){return t},get getTimeStamp(){
return n},get debounce(){return r}}}),System.registerModule("utils/vendor",[],function(){
"use strict";var e=function(){return navigator.platform.startsWith("Win")?"windows":navigator.platform.startsWith("Mac")?"osx":"iPhone"===navigator.platform||"iPad"===navigator.platform?"ios":"Android"===navigator.platform?"android":navigator.userAgent.includes("CrOS")?"chromeos":navigator.platform.startsWith("Linux")?"linux":"other";
};return{get getOperatingSystemName(){return e}}}),System.registerModule("utils/window",[],function(){
"use strict";var e=function(e,t){return new Promise(function(n){chrome.app.window.create(e,t,function(e){
n(e)})})},t=function(){return new Promise(function(e){chrome.runtime.getBackgroundPage(function(t){
return e(t)})})};return{get createAppWindow(){return e},get getBackgroundWindow(){
return t}}});