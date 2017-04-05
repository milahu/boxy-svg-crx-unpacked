$traceurRuntime.registerModule("classes/shortcut",[],function(){"use strict"
;var e=["iPhone","iPad"].includes(navigator.platform)||navigator.platform.startsWith("Mac"),t=function(){
function t(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
;this.ctrl=!1,this.alt=!1,this.meta=!1,this.shift=!1,this.base=null
;var r=!0,n=!1,a=void 0;try{
for(var i=void 0,s=e[Symbol.iterator]();!(r=(i=s.next()).done);r=!0){
var o=i.value
;"Control"===o?this.ctrl=!0:"Alt"===o?this.alt=!0:"Meta"===o?this.meta=!0:"Shift"===o?this.shift=!0:this.base=o
}}catch(e){n=!0,a=e}finally{try{r||null==s.return||s.return()}finally{
if(n)throw a}}}return $traceurRuntime.createClass(t,{matches:function(){
for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
;var r=!1,n=!1,a=!1,i=!1,s=null,o=!0,l=!1,u=void 0;try{
for(var c=void 0,d=e[Symbol.iterator]();!(o=(c=d.next()).done);o=!0){
var h=c.value
;"Control"===h?r=!0:"Alt"===h?n=!0:"Meta"===h?a=!0:"Shift"===h?i=!0:s=h}
}catch(e){l=!0,u=e}finally{try{o||null==d.return||d.return()}finally{
if(l)throw u}}
return r===this.ctrl&&n===this.alt&&a===this.meta&&i===this.shift&&s===this.base
},includes:function(e){
return"Control"===e?this.ctrl:"Alt"===e?this.alt:"Meta"===e?this.meta:"Shift"===e?this.shift:this.base===e
},compare:function(e){
return this.ctrl===e.ctrl&&this.alt===e.alt&&this.meta===e.meta&&this.shift===e.shift&&this.base===e.base
},isVoid:function(){
return!1===this.ctrl&&!1===this.alt&&!1===this.meta&&!1===this.shift&&null===this.base
},toDisplayString:function(){var t="";if(e){
this.meta&&(t+="^"),this.alt&&(t+="⌥"),this.shift&&(t+="⇧"),this.ctrl&&(t+="⌘")
;var r={ArrowUp:"↑",ArrowDown:"↓",ArrowLeft:"←",ArrowRight:"→",Backspace:"⌦"}
;null!==this.base&&(t+=r[this.base]||this.base)}else{var n=[]
;this.ctrl&&n.push("Ctrl"),
this.alt&&n.push("Alt"),this.meta&&n.push("Meta"),this.shift&&n.push("Shift")
;var a={ArrowUp:"Up",ArrowDown:"Down",ArrowLeft:"Left",ArrowRight:"Right"}
;null!==this.base&&n.push(a[this.base]||this.base),t=n.join("+")}return t},
toAccelerator:function(){var e=[]
;return this.ctrl&&e.push("CmdOrCtrl"),this.alt&&e.push("Alt"),
this.shift&&e.push("Shift"),
this.meta,null!==this.base&&("ArrowUp"===this.base?e.push("Up"):"ArrowDown"===this.base?e.push("Down"):"ArrowLeft"===this.base?e.push("Left"):"ArrowRight"===this.base?e.push("Right"):e.push(this.base)),
e.join("+")},toJSON:function(){return this.toString()},toString:function(){
var e=[]
;return this.ctrl&&e.push("Control"),this.alt&&e.push("Alt"),this.meta&&e.push("Meta"),
this.shift&&e.push("Shift"),null!==this.base&&e.push(this.base),e.join("+")}},{
fromEvent:function(r){var n=new t
;n.ctrl=e?r.metaKey:r.ctrlKey,n.alt=r.altKey,n.meta=e?r.ctrlKey:r.metaKey,
n.shift=r.shiftKey;var a=r.key
;return" "===a&&(a="Space"),a&&"Control"!==a&&"Alt"!==a&&"Shift"!==a&&"Meta"!==a?1===a.length?n.base=a.toUpperCase():n.base=a:n.base=null,
n},fromAccelerator:function(e){var r=e.split("+"),n=[],a=!0,i=!1,s=void 0;try{
for(var o=void 0,l=r[Symbol.iterator]();!(a=(o=l.next()).done);a=!0){
var u=o.value
;"CmdOrCtrl"===u||"CommandOrControl"===u?n.push("Control"):"Up"===u?n.push("ArrowUp"):"Down"===u?n.push("ArrowDown"):"Left"===u?n.push("ArrowLeft"):"Right"===u?n.push("ArrowRight"):""!==u&&n.push(u)
}}catch(e){i=!0,s=e}finally{try{a||null==l.return||l.return()}finally{
if(i)throw s}}
return new(Function.prototype.bind.apply(t,$traceurRuntime.spread([null],n)))},
fromString:function(e){
return new(Function.prototype.bind.apply(t,$traceurRuntime.spread([null],e.split("+").filter(function(e){
return""!==e}))))}})}();return{get default(){return t}}
}),$traceurRuntime.registerModule("elements/bx-backgroundbody",[],function(){
"use strict"
;var e=$traceurRuntime.getModule($traceurRuntime.normalizeModuleName("../utils/element","elements/bx-backgroundbody")).registerElement,t=$traceurRuntime.getModule($traceurRuntime.normalizeModuleName("../utils/window","elements/bx-backgroundbody")).createAppWindow,r=Object.keys,n=function(e){
function n(){$traceurRuntime.superConstructor(n).apply(this,arguments)}
return $traceurRuntime.createClass(n,{createdCallback:function(){
var e,t,r,n,a,i,s;return $traceurRuntime.asyncWrap(function(o){
for(;;)switch(o.state){case 0:e=this,this._shadowRoot=this.createShadowRoot({
mode:"closed"
}),this._messageCounter=0,this._messageRequestCallbacks={},this._messageResponseCallbacks={},
this._readyCallbacks=[],
this._retainedLaunchEntries=[],this._masterAppWindow=null,
this._masterAppWindowState="closed",o.state=4;break;case 4:
return void Promise.resolve(this._upgradeConfig()).then(o.createCallback(2),o.errback)
;case 2:window.addEventListener("message",function(t){return e._onMessage(t)
}),chrome.storage.onChanged.addListener(function(t){
return e._onChromeStorageChange(t)}),this.addMessageListener("ready",function(){
return e._masterAppWindowState="ready"
}),this.addMessageListener("getConfig",function(t,r){
return e.getConfig(t).then(r)
}),this.addMessageListener("setConfig",function(t,r){
return e.setConfig(t.key,t.value).then(r)
}),this.addMessageListener("getRetainedLaunchEntries",function(t,r){
return r(e._retainedLaunchEntries)}),t=!0,r=!1,n=void 0;try{
for(a=void 0,i=this._readyCallbacks[Symbol.iterator]();!(t=(a=i.next()).done);t=!0)(s=a.value)()
}catch(e){r=!0,n=e}finally{try{t||null==i.return||i.return()}finally{
if(r)throw n}}this._readyCallbacks=null,o.state=-2;break;default:return o.end()}
},this)},launchedCallback:function(e){var t=e.items?e.items.map(function(e){
return chrome.fileSystem.retainEntry(e.entry)}):null
;"ready"===this._masterAppWindowState?(this._masterAppWindow.focus(),
this._masterAppWindow.show(),
t&&t.length>0&&this.postMessage("openEntries",t)):"opening"===this._masterAppWindowState?t&&(this._retainedLaunchEntries=t):"closed"===this._masterAppWindowState&&(t&&(this._retainedLaunchEntries=t),
this._openMasterAppWindow())},get ready(){var e=this
;return new Promise(function(t){e._readyCallbacks?e._readyCallbacks.push(t):t()
})},postMessage:function(e){
var t=void 0!==arguments[1]?arguments[1]:null,r=void 0!==arguments[2]?arguments[2]:null
;if(this._masterAppWindow){var n=this._messageCounter++,a={channel:"request",
id:n,name:e,arg:t}
;r&&(this._messageResponseCallbacks[a.id]=r),this._masterAppWindow.contentWindow.postMessage(a,"*")
}},addMessageListener:function(e,t){
this._messageRequestCallbacks[e]||(this._messageRequestCallbacks[e]=[]),
this._messageRequestCallbacks[e].push(t)},removeMessageListener:function(e,t){
this._messageRequestCallbacks[e]&&(this._messageRequestCallbacks[e]=this._messageRequestCallbacks[e].filter(function(e){
return e!==t}))},getConfig:function(e){return new Promise(function(t){
var r="!"===e[0]?"local":"sync";chrome.storage[r].get(e,function(r){var n=r[e]
;void 0===n&&(n=null),t(n)})})},setConfig:function(e,t){var r=this
;return new Promise(function(n){var a,i="!"===e[0]?"local":"sync"
;null===t?chrome.storage[i].remove(e,n):chrome.storage[i].set((a={},
Object.defineProperty(a,e,{value:t,configurable:!0,enumerable:!0,writable:!0
}),a),n),r.postMessage("event:configchange",{key:e,value:t})})},
_onMessage:function(e){var t=this
;if(this._masterAppWindow&&e.source===this._masterAppWindow.contentWindow){
var r=e.data,n=r.channel,a=r.id,i=r.name,s=r.arg
;"request"===n?this._messageRequestCallbacks[i]&&this._messageRequestCallbacks[i].forEach(function(e){
e(s,function(e){var r={channel:"response",id:a,name:i,arg:e}
;t._masterAppWindow.contentWindow.postMessage(r,"*")})
}):"response"===n&&this._messageResponseCallbacks[a]&&(this._messageResponseCallbacks[a](s),
delete this._messageResponseCallbacks[a])}},_onChromeStorageChange:function(e){
var t=!0,n=!1,a=void 0;try{
for(var i=void 0,s=r(e)[Symbol.iterator]();!(t=(i=s.next()).done);t=!0){
var o=i.value,l=void 0!==e[o].newValue?e[o].newValue:null
;this.dispatchEvent(new CustomEvent("change",{detail:{key:o,value:l}}))}
}catch(e){n=!0,a=e}finally{try{t||null==s.return||s.return()}finally{
if(n)throw a}}},_openMasterAppWindow:function(){var e,r,n,a
;return $traceurRuntime.asyncWrap(function(i){for(;;)switch(i.state){case 0:
e=this,this._masterAppWindowState="opening",a={id:"master",resizable:!0,
hidden:!1,frame:{type:"chrome",color:"#333"},outerBounds:{width:800,height:550,
minWidth:100,minHeight:440}},i.state=5;break;case 5:
return void Promise.resolve(t("master.html",a)).then(i.createCallback(3),i.errback)
;case 3:this._masterAppWindow=i.value,i.state=2;break;case 2:
this._masterAppWindow.contentWindow.addEventListener("load",r=function(){
e._masterAppWindow.contentWindow.removeEventListener("load",r),
e._masterAppWindow.focus(),e._masterAppWindow.show()
}),this._masterAppWindow.onClosed.addListener(n=function(){
e._masterAppWindow.onClosed.removeListener(n),
e._masterAppWindow.contentWindow.removeEventListener("load",r),
e._masterAppWindow=null,
e._masterAppWindowState="closed",e._retainedLaunchEntries=[]}),i.state=-2;break
;default:return i.end()}},this)},_upgradeConfig:function(){var e=this
;return new Promise(function(t){var r
;return $traceurRuntime.asyncWrap(function(n){for(;;)switch(n.state){case 0:
return void Promise.resolve(e.getConfig("!bx-background:version")).then(n.createCallback(3),n.errback)
;case 3:r=n.value,n.state=2;break;case 2:n.state=2===r?22:18;break;case 22:
t(),n.state=-2;break;case 18:null===r&&(r=0),n.state=19;break;case 19:
n.state=0===r?8:7;break;case 8:r=1,n.state=9;break;case 9:
return void Promise.resolve(e.setConfig("!bx-editors:session",null)).then(n.createCallback(5),n.errback)
;case 5:
return void Promise.resolve(e.setConfig("!bx-editors:recent",null)).then(n.createCallback(7),n.errback)
;case 7:n.state=1===r?13:12;break;case 13:r=2,n.state=14;break;case 14:
return void Promise.resolve(e.setConfig("bx-shortcutseditor:userShortcuts",null)).then(n.createCallback(12),n.errback)
;case 12:
return void Promise.resolve(e.setConfig("!bx-background:version",r)).then(n.createCallback(17),n.errback)
;case 17:t(),n.state=-2;break;default:return n.end()}},this)})}},{},e)
}(HTMLBodyElement),a=e("body","bx-backgroundbody",n);return{get default(){
return a}}}),$traceurRuntime.registerModule("elements/bx-button",[],function(){
"use strict"
;var e=$traceurRuntime.getModule($traceurRuntime.normalizeModuleName("../utils/element","elements/bx-button")),t=e.createElement,r=e.registerElement,n=(Number.parseInt,
function(e){function r(){
$traceurRuntime.superConstructor(r).apply(this,arguments)}
return $traceurRuntime.createClass(r,{createdCallback:function(){
this._shadowRoot=this.createShadowRoot({mode:"closed"
}),this._shadowRoot.innerHTML='\n  <style id="skin-stylesheet"></style>\n\n  <main>\n    <svg id="icon" preserveAspectRatio="none" viewBox="0 0 100 100">\n      <use id="icon-use" x="0" y="0" width="100%" height="100%"></use>\n    </svg>\n\n    <label id="label"></label>\n  </main>\n'
;var e=!0,t=!1,r=void 0;try{
for(var n=void 0,a=this._shadowRoot.querySelectorAll("[id]")[Symbol.iterator]();!(e=(n=a.next()).done);e=!0){
var i=n.value;this["#"+i.id]=i}}catch(e){t=!0,r=e}finally{try{
e||null==a.return||a.return()}finally{if(t)throw r}}var s=!0,o=!1,l=void 0;try{
for(var u=void 0,c=this.attributes[Symbol.iterator]();!(s=(u=c.next()).done);s=!0){
var d=u.value;this.attributeChangedCallback(d.name)}}catch(e){o=!0,l=e}finally{
try{s||null==c.return||c.return()}finally{if(o)throw l}}this._updateSkin()},
attributeChangedCallback:function(e){
"label"===e?this._onLabelAttributeChange():"icon"===e?this._onIconAttributeChange():"skin"===e?this._onSkinAttributeChange():"hidden"===e&&this._onHiddenAttributeChange()
},get label(){return this.hasAttribute("label")?this.getAttribute("label"):""},
set label(e){this.setAttribute("label",e)},get value(){
return this.getAttribute("value")},set value(e){
null===e?this.removeAttribute("value"):this.setAttribute("value",e)},get icon(){
return this.getAttribute("icon")},set icon(e){
null===e?this.removeAttribute("icon"):this.setAttribute("icon",e)},get skin(){
return this.getAttribute("skin")},set skin(e){
e?this.setAttribute("skin",e):this.removeAttribute("skin")},get href(){
return this.hasAttribute("href")?this.getAttribute("href"):""},set href(e){
this.setAttribute("href",e)},get pressed(){return this.hasAttribute("pressed")},
set pressed(e){
!0===e?this.setAttribute("pressed",""):this.removeAttribute("pressed")},
get mixed(){return this.hasAttribute("mixed")},set mixed(e){
!0===e?this.setAttribute("mixed",""):this.removeAttribute("mixed")},
get disabled(){return this.hasAttribute("disabled")},set disabled(e){
!0===e?this.setAttribute("disabled",""):this.removeAttribute("disabled")},
_onLabelAttributeChange:function(){this["#label"].textContent=this.label},
_onIconAttributeChange:function(){
this["#icon-use"].remove(),this["#icon-use"]=t("svg:use"),
this["#icon"].append(this["#icon-use"]),
this.icon&&this["#icon-use"].setAttribute("href","images/icons.svg#"+this.icon)
},_onSkinAttributeChange:function(){this._updateSkin()},
_onHiddenAttributeChange:function(){
this.dispatchEvent(new CustomEvent("hiddenchange",{detail:this,bubbles:!0}))},
_updateSkin:function(){
this.skin?this["#skin-stylesheet"].innerText='@import url("stylesheets/bx-button@'+this.skin+'.css");':this["#skin-stylesheet"].innerText='@import url("stylesheets/bx-button.css");'
}},{},e)}(HTMLElement)),a=r("bx-button",n);return{get default(){return a}}
}),$traceurRuntime.registerModule("elements/bx-editor",[],function(){
"use strict"
;var e=$traceurRuntime.getModule($traceurRuntime.normalizeModuleName("../utils/artwork","elements/bx-editor")),t=e.compressArtwork,r=e.uncompressArtwork,n=e.createArtworkFromBitmapDataURL,a=$traceurRuntime.getModule($traceurRuntime.normalizeModuleName("../utils/element","elements/bx-editor")),i=(a.createElement,
a.registerElement),s=($traceurRuntime.getModule($traceurRuntime.normalizeModuleName("../utils/time","elements/bx-editor")).sleep,
$traceurRuntime.getModule($traceurRuntime.normalizeModuleName("../utils/filesystem","elements/bx-editor"))),o=s.getEntryExtension,l=s.chooseEntry,u=s.readEntry,c=s.writeEntry,d='<?xml version="1.0" encoding="utf-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"></svg>',h=function(e){
function a(){$traceurRuntime.superConstructor(a).apply(this,arguments)}
return $traceurRuntime.createClass(a,{createdCallback:function(){var e=this
;this._messageCounter=0,
this._messageRequestCallbacks={},this._messageResponseCallbacks={},
this._webviewLoadedCallbacks=[],
this._webviewInitializedCallbacks=[],this._currentToolID=null,
this._currentPrimaryPanelID=null,
this._currentSecondaryPanelID=null,this._entry=null,
this._changeCounter=0,this._textInputModeCounter=0,
this._shadowRoot=this.createShadowRoot({mode:"closed"
}),this._shadowRoot.innerHTML='\n  <style>@import url("stylesheets/bx-editor.css");</style>\n\n  <webview\n    id="webview"\n    tabindex="-1"\n    partition="persist:boxy"\n    src="core/editor.html"\n    style="\n  width: 100%;\n  height: calc(100% - 30px - 30px);\n  display: block;\n  position: fixed;\n  top: 60px;\n  left; 0;\n"\n    allowtransparency>\n  </webview>\n'
;var t=!0,r=!1,n=void 0;try{
for(var a=void 0,i=this._shadowRoot.querySelectorAll("[id]")[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){
var s=a.value;this["#"+s.id]=s}}catch(e){r=!0,n=e}finally{try{
t||null==i.return||i.return()}finally{if(r)throw n}}
this["#webview"].addEventListener("contentload",function(t){
return e._onWebviewLoaded(t)}),window.addEventListener("message",function(t){
return e._onMessage(t)}),this.addMessageListener("event:toolchange",function(t){
return e._currentToolID=t
}),this.addMessageListener("event:primarypanelchange",function(t){
return e._currentPrimaryPanelID=t
}),this.addMessageListener("event:secondarypanelchange",function(t){
return e._currentSecondaryPanelID=t
}),this.addMessageListener("getConfig",function(e,t){
return body.getConfig(e).then(t)
}),this.addMessageListener("setConfig",function(e,t){
return body.setConfig(e.key,e.value).then(t)
}),this.addMessageListener("getClipboardData",function(e,t){
return body.getClipboardData().then(function(e){return t(e)})
}),this.addMessageListener("setClipboardData",function(e,t){
return body.setClipboardData(e)
}),this.addMessageListener("setChangeCounter",function(t){
return e._setChangeCounter(t)
}),this.addMessageListener("getAppMeta",function(e,t){return t(body.appMeta)
}),this.addMessageListener("toggleTextInputMode",function(t){
return e._toggleTextInputMode(t)
}),this.addMessageListener("showMessageBox",function(e,t){
return body.showMessageBox(e).then(t)
}),this.addMessageListener("openExternalURL",function(e){
return chrome.browser.openTab({url:e})
}),this.addMessageListener("exportFile",function(t){return e._exportFile(t)
}),this.addMessageListener("rasterizeArtwork",function(e,t){var r,n,a,i,s,o
;return $traceurRuntime.asyncWrap(function(l){for(;;)switch(l.state){case 0:r=e,
n=r.artwork,a=r.format,i=r.compression,s=r.backgroundColor,l.state=5;break
;case 5:
return void Promise.resolve(body.rasterizeArtwork(n,a,i,s)).then(l.createCallback(3),l.errback)
;case 3:o=l.value,l.state=2;break;case 2:t(o),l.state=-2;break;default:
return l.end()}},this)})},get entry(){return this._entry},get edited(){
return 0!==this._changeCounter},get ready(){
return null===this._webviewInitializedCallbacks},get textInputMode(){
return this._textInputModeCounter>0},get currentToolID(){
return this._currentToolID},get currentPrimaryPanelID(){
return this._currentPrimaryPanelID},get currentSecondaryPanelID(){
return this._currentSecondaryPanelID},get disabled(){
return this.hasAttribute("disabled")},set disabled(e){
!0===e?this.setAttribute("disabled",""):this.removeAttribute("disabled")},
init:function(){
var e=void 0!==arguments[0]?arguments[0]:null,t=void 0!==arguments[1]?arguments[1]:null,a=this
;return new Promise(function(i){var s,l,c,h,b,m,f
;return $traceurRuntime.asyncWrap(function(v){for(;;)switch(v.state){case 0:
v.state=null===e&&null===t?34:33;break;case 34:s=d,v.state=35;break;case 33:
v.state=e&&null===t?31:30;break;case 31:
s=e,a._setChangeCounter("increment"),v.state=35;break;case 30:v.state=e&&t?28:27
;break;case 28:
l=o(t).toLowerCase(),s=e,a._setChangeCounter("increment"),v.state=35;break
;case 27:v.state=null===e&&t?25:35;break;case 25:c=o(t).toLowerCase(),v.state=26
;break;case 26:v.state="svg"===c?1:23;break;case 1:
return void Promise.resolve(u(t,"text")).then(v.createCallback(3),v.errback)
;case 3:h=v.value,v.state=2;break;case 2:
h?s=h:(s=d,a._setChangeCounter("increment")),v.state=35;break;case 23:
v.state="svgz"===c?6:22;break;case 6:
return void Promise.resolve(u(t,"arrayBuffer")).then(v.createCallback(8),v.errback)
;case 8:b=v.value,v.state=7;break;case 7:
b?s=r(b):(s=d,a._setChangeCounter("increment")),v.state=35;break;case 22:
v.state=["png","jpg","jpeg","webp","gif"].includes(c)?11:35;break;case 11:
return void Promise.resolve(u(t,"dataURL")).then(v.createCallback(13),v.errback)
;case 13:m=v.value,v.state=12;break;case 12:v.state=m?14:17;break;case 14:
return void Promise.resolve(n(m)).then(v.createCallback(16),v.errback);case 16:
s=v.value,v.state=15;break;case 17:s=d,v.state=15;break;case 15:
a._setChangeCounter("increment"),v.state=35;break;case 35:a._entry=t,f={
artwork:s,restrictedFeatures:body.restrictedFeatures
},a.postMessage("init",f,function(){a._onWebviewInitialized(),i()}),v.state=-2
;break;default:return v.end()}},this)})},reload:function(){var e=this
;return new Promise(function(t){var r
;return $traceurRuntime.asyncWrap(function(n){for(;;)switch(n.state){case 0:
n.state=e.entry||!e.edited?4:1;break;case 4:r=null,e._setChangeCounter("reset"),
n.state=5;break;case 1:
return void Promise.resolve(e.getArtwork(t)).then(n.createCallback(3),n.errback)
;case 3:r=n.value,n.state=5;break;case 5:
e._webviewLoadedCallbacks=[],e._webviewInitializedCallbacks=[],
e._textInputModeCounter=0,e["#webview"].reload(),n.state=12;break;case 12:
return void Promise.resolve(e._promiseWebviewLoaded()).then(n.createCallback(8),n.errback)
;case 8:
return void Promise.resolve(e.init(r,e._entry)).then(n.createCallback(10),n.errback)
;case 10:t(),n.state=-2;break;default:return n.end()}},this)})},
reloadArtworkFromDisk:function(){var e=this;return new Promise(function(t){
var n,a,i,s;return $traceurRuntime.asyncWrap(function(l){for(;;)switch(l.state){
case 0:l.state=e._entry?13:5;break;case 13:
a=o(e._entry).toLowerCase(),l.state=14;break;case 14:l.state="svg"===a?1:11
;break;case 1:
return void Promise.resolve(u(e._entry,"text")).then(l.createCallback(3),l.errback)
;case 3:i=l.value,l.state=2;break;case 2:i&&(n=i),l.state=5;break;case 11:
l.state="svgz"===a?6:5;break;case 6:
return void Promise.resolve(u(e._entry,"arrayBuffer")).then(l.createCallback(8),l.errback)
;case 8:s=l.value,l.state=7;break;case 7:s&&(n=r(s)),l.state=5;break;case 5:
n?(e.postMessage("setArtwork",n),
e._setChangeCounter("reset"),t(!0)):t(!1),l.state=-2;break;default:
return l.end()}},this)})},canReloadArtworkFromDisk:function(){if(this._entry){
var e=o(this._entry).toLowerCase();return"svg"===e||"svgz"===e}return!1},
save:function(){var e=this;return new Promise(function(r){var n,a,i,s,l,u,d,h
;return $traceurRuntime.asyncWrap(function(b){for(;;)switch(b.state){case 0:
n=e._entry,a=n?o(n):null,b.state=53;break;case 53:
b.state="svg"===a||"svgz"===a?1:46;break;case 1:
return void Promise.resolve(e.getArtwork()).then(b.createCallback(3),b.errback)
;case 3:i=b.value,b.state=2;break;case 2:b.pushTry(37,null),b.state=40;break
;case 40:b.state="svg"===a?4:8;break;case 4:
return void Promise.resolve(c(n,i,"image/svg+xml;charset=utf-8")).then(b.createCallback(5),b.errback)
;case 8:b.state="svgz"===a?6:5;break;case 6:
return void Promise.resolve(c(n,t(i),"image/svg+xml;charset=utf-8")).then(b.createCallback(5),b.errback)
;case 5:b.popTry(),b.state=42;break;case 37:
b.popTry(),b.maybeUncatchable(),h=b.storedException,b.state=36;break;case 36:
b.state="READ_ONLY"===h?10:28;break;case 10:
return void Promise.resolve(body.showMessageBox({message:"Can't save file.",
detail:'The file "'+n.name+'" is read-only.',buttons:["Cancel","Save As…"]
})).then(b.createCallback(12),b.errback);case 12:s=b.value,b.state=11;break
;case 11:b.state=0===s?16:26;break;case 16:r(!1),b.state=17;break;case 17:
b.returnValue=void 0,b.state=14;break;case 14:b.state=-2;break;case 26:
b.state=1===s?18:42;break;case 18:
return void Promise.resolve(e.saveAs()).then(b.createCallback(20),b.errback)
;case 20:l=b.value,b.state=19;break;case 19:r(l),b.state=25;break;case 25:
b.returnValue=void 0,b.state=22;break;case 22:b.state=-2;break;case 28:
return void Promise.resolve(e.saveAs()).then(b.createCallback(30),b.errback)
;case 30:u=b.value,b.state=29;break;case 29:r(u),b.state=35;break;case 35:
b.returnValue=void 0,b.state=32;break;case 32:b.state=-2;break;case 42:
e._setChangeCounter("reset"),r(!0),b.state=-2;break;case 46:
return void Promise.resolve(e.saveAs()).then(b.createCallback(48),b.errback)
;case 48:d=b.value,b.state=47;break;case 47:r(d),b.state=-2;break;default:
return b.end()}},this)})},saveAs:function(){var e=this
;return new Promise(function(r){var n,a,i,s,u,d,h,b,m
;return $traceurRuntime.asyncWrap(function(f){for(;;)switch(f.state){case 0:
f.pushTry(21,null),f.state=24;break;case 24:return void Promise.resolve(l({
type:"saveFile",suggestedName:e._entry?e._entry.name:"Untitled.svg",
acceptsAllTypes:!1,accepts:[{description:"SVG",mimeTypes:["image/svg+xml"],
extensions:["svg"]},{description:"SVGZ",mimeTypes:["image/svg+xml"],
extensions:["svgz"]}]})).then(f.createCallback(3),f.errback);case 3:
n=f.value,f.state=2;break;case 2:f.popTry(),f.state=26;break;case 21:f.popTry(),
f.maybeUncatchable(),m=f.storedException,f.state=4;break;case 4:
return void Promise.resolve(body.showMessageBox({message:"Can't save file.",
detail:"Selected directory is read-only.",buttons:["Cancel","Save As…"]
})).then(f.createCallback(6),f.errback);case 6:a=f.value,f.state=5;break;case 5:
f.state=0===a?10:12;break;case 10:r(!1),f.state=11;break;case 11:
f.returnValue=void 0,f.state=8;break;case 8:f.state=-2;break;case 12:
return void Promise.resolve(e.saveAs()).then(f.createCallback(14),f.errback)
;case 14:i=f.value,f.state=13;break;case 13:r(i),f.state=19;break;case 19:
f.returnValue=void 0,f.state=16;break;case 16:f.state=-2;break;case 26:
f.state=n?64:68;break;case 64:s=o(n).toLowerCase(),f.state=65;break;case 65:
return void Promise.resolve(e.getArtwork()).then(f.createCallback(30),f.errback)
;case 30:u=f.value,f.state=29;break;case 29:f.pushTry(57,null),f.state=60;break
;case 60:f.state="svg"===s||""===s?31:37;break;case 31:
return void Promise.resolve(c(n,u,"image/svg+xml;charset=utf-8")).then(f.createCallback(32),f.errback)
;case 37:f.state="svgz"===s?35:32;break;case 35:d=t(u),f.state=36;break;case 36:
return void Promise.resolve(c(n,d,"image/svg+xml;charset=utf-8")).then(f.createCallback(32),f.errback)
;case 32:f.popTry(),f.state=62;break;case 57:
f.popTry(),f.maybeUncatchable(),m=f.storedException,f.state=39;break;case 39:
return void Promise.resolve(body.showMessageBox({message:"Can't save file.",
detail:'The file "'+n.name+'" is read-only.',buttons:["Cancel","Save As…"]
})).then(f.createCallback(41),f.errback);case 41:h=f.value,f.state=40;break
;case 40:f.state=0===h?45:55;break;case 45:r(!1),f.state=46;break;case 46:
f.returnValue=void 0,f.state=43;break;case 43:f.state=-2;break;case 55:
f.state=1===h?47:62;break;case 47:
return void Promise.resolve(e.saveAs()).then(f.createCallback(49),f.errback)
;case 49:b=f.value,f.state=48;break;case 48:r(b),f.state=54;break;case 54:
f.returnValue=void 0,f.state=51;break;case 51:f.state=-2;break;case 62:
e._entry=n,
e._setChangeCounter("reset"),e.dispatchEvent(new CustomEvent("entrychange",{
bubbles:!0,detail:e})),r(!0),f.state=-2;break;case 68:r(!1),f.state=-2;break
;default:return f.end()}},this)})},getArtwork:function(){var e=this
;return new Promise(function(t){return $traceurRuntime.asyncWrap(function(r){
for(;;)switch(r.state){case 0:
return void Promise.resolve(e.promiseReady()).then(r.createCallback(2),r.errback)
;case 2:e.postMessage("getArtwork",null,function(e){
return $traceurRuntime.asyncWrap(function(r){for(;;)switch(r.state){case 0:t(e),
r.state=-2;break;default:return r.end()}},this)}),r.state=-2;break;default:
return r.end()}},this)})},getArtworkFromSelectedElements:function(){var e=this
;return new Promise(function(t){
e.postMessage("getArtworkFromSelectedElements",null,function(e){
return $traceurRuntime.asyncWrap(function(r){for(;;)switch(r.state){case 0:t(e),
r.state=-2;break;default:return r.end()}},this)})})},focus:function(){
this["#webview"].focus()},postMessage:function(e){var t,r,n,a,i=arguments
;return $traceurRuntime.asyncWrap(function(s){for(;;)switch(s.state){case 0:
t=void 0!==i[1]?i[1]:null,r=void 0!==i[2]?i[2]:null,n=this._messageCounter++,a={
channel:"request",id:n,name:e,arg:t},s.state=4;break;case 4:
return void Promise.resolve(this._promiseWebviewLoaded()).then(s.createCallback(2),s.errback)
;case 2:
r&&(this._messageResponseCallbacks[a.id]=r),this["#webview"].contentWindow.postMessage(a,"*"),
s.state=-2;break;default:return s.end()}},this)},
addMessageListener:function(e,t){
this._messageRequestCallbacks[e]||(this._messageRequestCallbacks[e]=[]),
this._messageRequestCallbacks[e].push(t)},removeMessageListener:function(e,t){
this._messageRequestCallbacks[e]&&(this._messageRequestCallbacks[e]=this._messageRequestCallbacks[e].filter(function(e){
return e!==t}))},_onMessage:function(e){var t=this
;if(e.source===this["#webview"].contentWindow){
var r=e.data,n=r.channel,a=r.id,i=r.name,s=r.arg
;"request"===n?this._messageRequestCallbacks[i]&&this._messageRequestCallbacks[i].forEach(function(e){
e(s,function(e){var r={channel:"response",id:a,name:i,arg:e}
;t["#webview"].contentWindow.postMessage(r,"*")})
}):"response"===n&&this._messageResponseCallbacks[a]&&(this._messageResponseCallbacks[a](s),
delete this._messageResponseCallbacks[a])}},_onWebviewLoaded:function(){
this["#webview"].setZoomMode("disabled");var e=!0,t=!1,r=void 0;try{
for(var n=void 0,a=this._webviewLoadedCallbacks[Symbol.iterator]();!(e=(n=a.next()).done);e=!0){
(0,n.value)()}}catch(e){t=!0,r=e}finally{try{e||null==a.return||a.return()
}finally{if(t)throw r}}this._webviewLoadedCallbacks=null},
_onWebviewInitialized:function(){var e=!0,t=!1,r=void 0;try{
for(var n=void 0,a=this._webviewInitializedCallbacks[Symbol.iterator]();!(e=(n=a.next()).done);e=!0){
(0,n.value)()}}catch(e){t=!0,r=e}finally{try{e||null==a.return||a.return()
}finally{if(t)throw r}}
this._webviewInitializedCallbacks=null,this.dispatchEvent(new CustomEvent("ready",{
bubbles:!0,detail:this}))},promiseReady:function(){
return this._promiseWebviewInitialized()},_promiseWebviewLoaded:function(){
var e=this;return new Promise(function(t){
e._webviewLoadedCallbacks?e._webviewLoadedCallbacks.push(t):t()})},
_promiseWebviewInitialized:function(){var e=this;return new Promise(function(t){
e._webviewInitializedCallbacks?e._webviewInitializedCallbacks.push(t):t()})},
_exportFile:function(e){var r,n,a,i,s,o,u,d,h,b,m,f,v
;return $traceurRuntime.asyncWrap(function(g){for(;;)switch(g.state){case 0:r=e,
n=r.format,a=r.data,s={png:[{description:"PNG",extensions:["png"]}],jpeg:[{
description:"JPEG",extensions:["jpg","jpeg"]}],webp:[{description:"WebP",
extensions:["webp"]}],gif:[{description:"GIF",extensions:["gif"]}],svg:[{
description:"SVG",extensions:["svg"]}],svgz:[{description:"SVGZ",
extensions:["svgz"]}],html:[{description:"HTML",extensions:["html"]}]
},g.state=73;break;case 73:g.pushTry(13,null),g.state=16;break;case 16:
return void Promise.resolve(l({type:"saveFile",suggestedName:"Untitled."+n,
acceptsAllTypes:!1,accepts:s[n]})).then(g.createCallback(3),g.errback);case 3:
i=g.value,g.state=2;break;case 2:g.popTry(),g.state=18;break;case 13:g.popTry(),
g.maybeUncatchable(),v=g.storedException,g.state=4;break;case 4:
return void Promise.resolve(body.showMessageBox({message:"Can't save file.",
detail:"Selected directory is read-only.",buttons:["Cancel","Save As…"]
})).then(g.createCallback(6),g.errback);case 6:o=g.value,g.state=5;break;case 5:
g.state=0===o?7:10;break;case 7:g.returnValue=void 0,g.state=8;break;case 8:
g.state=-2;break;case 10:this._exportFile({format:n,data:a}),g.state=18;break
;case 18:g.state=i?66:-2;break;case 66:g.pushTry(64,null),g.state=67;break
;case 67:g.state="png"===n?22:49;break;case 22:
u=new Uint8Array(atob(a.substring(22)).split("").map(function(e){
return e.charCodeAt(0)})),g.state=23;break;case 23:
return void Promise.resolve(c(i,u,"image/png")).then(g.createCallback(21),g.errback)
;case 49:g.state="jpeg"===n?26:48;break;case 26:
d=new Uint8Array(atob(a.substring(23)).split("").map(function(e){
return e.charCodeAt(0)})),g.state=27;break;case 27:
return void Promise.resolve(c(i,d,"image/jpeg")).then(g.createCallback(21),g.errback)
;case 48:g.state="webp"===n?30:47;break;case 30:
h=new Uint8Array(atob(a.substring(23)).split("").map(function(e){
return e.charCodeAt(0)})),g.state=31;break;case 31:
return void Promise.resolve(c(i,h,"image/webp")).then(g.createCallback(21),g.errback)
;case 47:g.state="gif"===n?34:46;break;case 34:
b=new Uint8Array(atob(a.substring(22)).split("").map(function(e){
return e.charCodeAt(0)})),g.state=35;break;case 35:
return void Promise.resolve(c(i,b,"image/gif")).then(g.createCallback(21),g.errback)
;case 46:g.state="svg"===n?36:45;break;case 36:
return void Promise.resolve(c(i,a,"image/svg+xml;charset=utf-8")).then(g.createCallback(21),g.errback)
;case 45:g.state="svgz"===extension?40:44;break;case 40:m=t(m),g.state=41;break
;case 41:
return void Promise.resolve(c(i,m,"image/svg+xml;charset=utf-8")).then(g.createCallback(21),g.errback)
;case 44:g.state="html"===extension?42:21;break;case 42:
return void Promise.resolve(c(i,a,"text/html;charset=utf-8")).then(g.createCallback(21),g.errback)
;case 21:g.popTry(),g.state=-2;break;case 64:
g.popTry(),g.maybeUncatchable(),v=g.storedException,g.state=51;break;case 51:
return void Promise.resolve(body.showMessageBox({message:"Can't save file.",
detail:'The file "'+i.name+'" is read-only.',buttons:["Cancel","Save As…"]
})).then(g.createCallback(53),g.errback);case 53:f=g.value,g.state=52;break
;case 52:g.state=0===f?54:62;break;case 54:g.returnValue=void 0,g.state=55;break
;case 55:g.state=-2;break;case 62:g.state=1===f?60:-2;break;case 60:
this._exportFile({format:n,data:a}),g.state=61;break;case 61:
g.returnValue=void 0,g.state=58;break;case 58:g.state=-2;break;default:
return g.end()}},this)},_toggleTextInputMode:function(e){
!0===e?this._textInputModeCounter+=1:!1===e&&(this._textInputModeCounter-=1),
this._textInputModeCounter<0&&(this._textInputModeCounter=0)},
_setChangeCounter:function(e){var t=this._changeCounter
;"increment"===e?this._changeCounter+=1:"decrement"===e?this._changeCounter-=1:"reset"===e&&(this._changeCounter=0),
this.dispatchEvent(new CustomEvent("artworkchange",{bubbles:!0,detail:this
})),0!==t!=(0!==this._changeCounter)&&this.dispatchEvent(new CustomEvent("editedchange",{
bubbles:!0,detail:this}))}},{},e)}(HTMLElement),b=i("bx-editor",h);return{
get default(){return b}}
}),$traceurRuntime.registerModule("elements/bx-masterbody",[],function(){
"use strict"
;$traceurRuntime.getModule($traceurRuntime.normalizeModuleName("./bx-editor","elements/bx-masterbody")),
$traceurRuntime.getModule($traceurRuntime.normalizeModuleName("./bx-messagebox","elements/bx-masterbody")),
$traceurRuntime.getModule($traceurRuntime.normalizeModuleName("./bx-menubar","elements/bx-masterbody")),
$traceurRuntime.getModule($traceurRuntime.normalizeModuleName("./bx-menu","elements/bx-masterbody")),
$traceurRuntime.getModule($traceurRuntime.normalizeModuleName("./bx-menuitem","elements/bx-masterbody")),
$traceurRuntime.getModule($traceurRuntime.normalizeModuleName("./bx-tabs","elements/bx-masterbody"))
;var e=$traceurRuntime.getModule($traceurRuntime.normalizeModuleName("../utils/element","elements/bx-masterbody")),t=e.createElement,r=e.registerElement,n=$traceurRuntime.getModule($traceurRuntime.normalizeModuleName("../utils/string","elements/bx-masterbody")).toDashCase,a=$traceurRuntime.getModule($traceurRuntime.normalizeModuleName("../utils/time","elements/bx-masterbody")),i=a.debounce,s=a.sleep,o=$traceurRuntime.getModule($traceurRuntime.normalizeModuleName("../utils/vendor","elements/bx-masterbody")),l=o.getOperatingSystemName,u=(o.getChromeVersion,
$traceurRuntime.getModule($traceurRuntime.normalizeModuleName("../utils/window","elements/bx-masterbody"))),c=u.createAppWindow,d=u.getBackgroundWindow,h=$traceurRuntime.getModule($traceurRuntime.normalizeModuleName("../utils/filesystem","elements/bx-masterbody")),b=h.getEntryBaseName,m=h.getEntryDisplayPath,f=h.getEntryExtension,v=h.chooseEntry,g=h.compareEntries,p=h.restoreEntry,_=$traceurRuntime.getModule($traceurRuntime.normalizeModuleName("../classes/shortcut","elements/bx-masterbody")).default,w=Number.parseInt,k=function(e){
function r(){$traceurRuntime.superConstructor(r).apply(this,arguments)}
return $traceurRuntime.createClass(r,{createdCallback:function(){
var e,t,r,n,a,o,u,c;return $traceurRuntime.asyncWrap(function(h){
for(;;)switch(h.state){case 0:e=this,this._commands={new:{exec:function(){
return e._openEditorWidthDefaultArtwork()}},newFromSelected:{enabled:function(){
return null!==e.currentEditor},exec:function(){
return e._openEditorWithArtworkImportedFromSelectedElements()}},open:{
exec:function(){return s(300).then(function(){
return e._openEditorsWithUserSelectedEntries()})}},clearRecent:{exec:function(){
return e._clearRecentEntries()}},save:{enabled:function(){
return e.currentEditor&&e.currentEditor.edited},exec:function(){
return s(300).then(function(){return e._saveCurrentEditorArtwork()})}},saveAs:{
enabled:function(){return null!==e.currentEditor},exec:function(){
return s(300).then(function(){return e._saveCurrentEditorArtworkAs()})}},
reloadFromDisk:{enabled:function(){
return e.currentEditor&&e.currentEditor.canReloadArtworkFromDisk()},
exec:function(){return e.currentEditor.reloadArtworkFromDisk()}},close:{
exec:function(){return e._closeEditor(e.currentEditor.id)}},quit:{
exec:function(){return e._closeAllAppWindows()}},showPreviousTab:{
enabled:function(){return e._canToggleEditorForPreviousTab()},exec:function(){
return e._toggleEditorForPreviousTab()}},showNextTab:{enabled:function(){
return e._canToggleEditorForNextTab()},exec:function(){
return e._toggleEditorForNextTab()}},moveTabLeft:{enabled:function(){
return e["#tabs"].childElementCount>1},exec:function(){
return e._moveCurrentEditorTabLeft()}},moveTabRight:{enabled:function(){
return e["#tabs"].childElementCount>1},exec:function(){
return e._moveCurrentEditorTabRight()}},minimizeWindow:{exec:function(){
return chrome.app.window.current().minimize()}},maximizeWindow:{
enabled:function(){return!1===chrome.app.window.current().isFullscreen()},
exec:function(){return e._maximizeCurrentAppWindow()}},fullscreen:{
exec:function(){return e._toggleCurrentAppWindowFullscreenMode()}},about:{
exec:function(){return e._openAboutAppWindow()}},preferences:{exec:function(){
return e._openPreferencesAppWindow()}},rate:{enabled:function(){
return navigator.onLine},exec:function(){
return e._openRateOnChromeWebStorePage()}},support:{enabled:function(){
return navigator.onLine},exec:function(){return e._openSupportPage()}},
reloadApp:{exec:function(){return s(50).then(function(){
return chrome.runtime.reload()})}},reloadCurrentEditor:{exec:function(){
return e.currentEditor.reload()}}
},this._shouldStoreSessionOnUserIdle=!1,this._toggleEditorQueue=[],
this._messageCounter=0,
this._messageRequestCallbacks={},this._messageResponseCallbacks={},
this._aboutAppWindow=null,this._preferencesAppWindow=null,h.state=8;break
;case 8:return void Promise.resolve(d()).then(h.createCallback(3),h.errback)
;case 3:this._backgroundWindow=h.value,h.state=2;break;case 2:
this._storeSessionDebounced=i(this._storeSession,2e3,this),
t=chrome.runtime.getManifest(),this.appMeta={name:t.name,version:t.version,
type:"chrome"
},"Boxy SVG"===this.appMeta.name?this._restrictedFeatures=["chrome-dev-tools","native-color-grabber","native-rasterizer"]:"Boxy SVG Dev"===this.appMeta.name&&(this._restrictedFeatures=["native-color-grabber","native-rasterizer"]),
"windows"===l()&&this.setAttribute("bordered",""),
this._shadowRoot=this.createShadowRoot({mode:"closed"
}),this._shadowRoot.innerHTML='\n  <style>@import url("stylesheets/bx-masterbody.css");</style>\n\n  <bx-menubar id="menubar">\n    <bx-menu label="File">\n      <bx-menuitem commandid="new" label="New" shortcut="Control+N"></bx-menuitem>\n      <bx-menuitem commandid="newFromSelected" label="New from Selected" shortcut="Control+Shift+N"></bx-menuitem>\n      <bx-menuitem commandid="open" label="Open…" shortcut="Control+O"></bx-menuitem>\n      <bx-menuitem id="open-recent-menu-item" label="Open Recent">\n        <bx-menu id="open-recent-menu"></bx-menu>\n      </bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="save" label="Save" shortcut="Control+S"></bx-menuitem>\n      <bx-menuitem commandid="saveAs" label="Save As…" shortcut="Control+Shift+S"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="reloadFromDisk" label="Reload from Disk"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="close" label="Close" shortcut="Control+W"></bx-menuitem>\n      <bx-menuitem commandid="quit" label="Quit Boxy SVG" shortcut="Control+Q"></bx-menuitem>\n    </bx-menu>\n\n    <bx-menu label="Edit">\n      <bx-menuitem commandid="undo" label="Undo" shortcut="Control+Z"></bx-menuitem>\n      <bx-menuitem commandid="redo" label="Redo" shortcut="Control+Shift+Z"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="cut" label="Cut" shortcut="Control+X"></bx-menuitem>\n      <bx-menuitem commandid="copy" label="Copy" shortcut="Control+C"></bx-menuitem>\n      <bx-menuitem commandid="paste" label="Paste" shortcut="Control+V"></bx-menuitem>\n      <bx-menuitem commandid="duplicate" label="Duplicate" shortcut="Control+D"></bx-menuitem>\n      <bx-menuitem commandid="delete" label="Delete"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="grabPaintColor" label="Grab Paint Color" shortcut="Q"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="selectAll" label="Select All" shortcut="Control+A"></bx-menuitem>\n      <bx-menuitem commandid="deselectAll" label="Deselect All" shortcut="Control+Shift+A"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="preferences" label="Preferences…"></bx-menuitem>\n    </bx-menu>\n\n    <bx-menu label="View">\n      <bx-menuitem commandid="zoomIn" label="Zoom In" shortcut="="></bx-menuitem>\n      <bx-menuitem commandid="zoomOut"label="Zoom Out" shortcut="-"></bx-menuitem>\n      <bx-menuitem commandid="resetZoom" label="Reset Zoom" shortcut="1"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="zoomToViewBox" label="Zoom to View Box" shortcut="2"></bx-menuitem>\n      <bx-menuitem commandid="zoomToViewBoxWidth" label="Zoom to View Box Width" shortcut="3"></bx-menuitem>\n      <bx-menuitem commandid="zoomToViewBoxHeight" label="Zoom to View Box Height" shortcut="4"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="zoomToFitAll"label="Zoom to Fit All" shortcut="5"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="inspector" label="Inspector" shortcut="I"></bx-menuitem>\n    </bx-menu>\n\n    <bx-menu label="Element">\n      <bx-menuitem commandid="group" label="Group" shortcut="Control+G"></bx-menuitem>\n      <bx-menuitem commandid="ungroup" label="Ungroup" shortcut="Control+Shift+G"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="raise" label="Raise" shortcut="]"></bx-menuitem>\n      <bx-menuitem commandid="lower" label="Lower" shortcut="["></bx-menuitem>\n      <bx-menuitem commandid="raiseToFront" label="Raise to Front" shortcut="Control+]"></bx-menuitem>\n      <bx-menuitem commandid="lowerToBack" label="Lower to Back" shortcut="Control+["></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="clip" label="Clip"></bx-menuitem>\n      <bx-menuitem commandid="unclip"label="Unclip"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="mask" label="Mask"></bx-menuitem>\n      <bx-menuitem commandid="unmask" label="Unmask"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="rotateClockwise" label="Rotate +90°" shortcut="Control+Shift+ArrowRight"></bx-menuitem>\n      <bx-menuitem commandid="rotateCounterclockwise" label="Rotate -90°" shortcut="Control+Shift+ArrowLeft"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="flipX" label="Flip X" shortcut="Control+Shift+ArrowUp"></bx-menuitem>\n      <bx-menuitem commandid="flipY" label="Flip Y" shortcut="Control+Shift+ArrowDown"></bx-menuitem>\n      <hr/>\n      <bx-menuitem label="Path">\n        <bx-menu>\n          <bx-menuitem commandid="convertToPath" label="Convert to Path"></bx-menuitem>\n          <bx-menuitem commandid="reversePath" label="Reverse Path"></bx-menuitem>\n          <hr/>\n          <bx-menuitem commandid="unite" label="Unite"></bx-menuitem>\n          <bx-menuitem commandid="subtract" label="Subtract"></bx-menuitem>\n          <bx-menuitem commandid="intersect" label="Intersect"></bx-menuitem>\n          <bx-menuitem commandid="exclude" label="Exclude"></bx-menuitem>\n          <hr/>\n          <bx-menuitem commandid="combine" label="Combine"></bx-menuitem>\n          <bx-menuitem commandid="breakApart" label="Break Apart"></bx-menuitem>\n        </bx-menu>\n      </bx-menuitem>\n      <bx-menuitem label="Move">\n        <bx-menu>\n          <bx-menuitem commandid="moveOneUnitLeft" label="Move 1 Unit Left"></bx-menuitem>\n          <bx-menuitem commandid="moveOneUnitRight" label="Move 1 Unit Right"></bx-menuitem>\n          <bx-menuitem commandid="moveOneUnitUp" label="Move 1 Unit Up"></bx-menuitem>\n          <bx-menuitem commandid="moveOneUnitDown" label="Move 1 Unit Down"></bx-menuitem>\n          <hr/>\n          <bx-menuitem commandid="moveTenUnitsLeft" label="Move 10 Units Left"></bx-menuitem>\n          <bx-menuitem commandid="moveTenUnitsRight" label="Move 10 Units Right"></bx-menuitem>\n          <bx-menuitem commandid="moveTenUnitsUp" label="Move 10 Units Up"></bx-menuitem>\n          <bx-menuitem commandid="moveTenUnitsDown" label="Move 10 Units Down"></bx-menuitem>\n        </bx-menu>\n      </bx-menuitem>\n    </bx-menu>\n\n    <bx-menu label="Tools" id="tools-menu">\n      <bx-menuitem commandid="previousTool" label="Previous Tool" shortcut="Space"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="transformTool" label="Transform Tool" shortcut="Alt+T"></bx-menuitem>\n      <bx-menuitem commandid="editTool" label="Edit Tool" shortcut="Alt+E"></bx-menuitem>\n      <bx-menuitem commandid="shapeTool" label="Shape Tool" shortcut="Alt+S"></bx-menuitem>\n      <bx-menuitem commandid="curveTool" label="Curve Tool" shortcut="Alt+C"></bx-menuitem>\n      <bx-menuitem commandid="freehandTool" label="Freehand Tool" shortcut="Alt+F"></bx-menuitem>\n      <bx-menuitem commandid="textTool" label="Text Tool" shortcut="Alt+Shift+T"></bx-menuitem>\n    </bx-menu>\n\n    <bx-menu label="Panels" id="panels-menu">\n      <bx-menuitem commandid="fillPanel" label="Fill Panel" shortcut="F"></bx-menuitem>\n      <bx-menuitem commandid="strokePanel" label="Stroke Panel" shortcut="S"></bx-menuitem>\n      <bx-menuitem commandid="compositingPanel" label="Compositing Panel" shortcut="C"></bx-menuitem>\n      <bx-menuitem commandid="viewPanel" label="View Panel" shortcut="V"></bx-menuitem>\n      <bx-menuitem commandid="arrangementPanel" label="Arrangement Panel" shortcut="A"></bx-menuitem>\n      <bx-menuitem commandid="typographyPanel" label="Typography Panel"  shortcut="T"></bx-menuitem>\n      <bx-menuitem commandid="defsPanel" label="Defs Panel" shortcut="D"></bx-menuitem>\n      <bx-menuitem commandid="maskPanel" label="Mask Panel" shortcut="M"></bx-menuitem>\n      <bx-menuitem commandid="geometryPanel" label="Geometry Panel" shortcut="G"></bx-menuitem>\n      <bx-menuitem commandid="pathPanel" label="Path Panel" shortcut="X"></bx-menuitem>\n      <bx-menuitem commandid="exportPanel" label="Export Panel" shortcut="E"></bx-menuitem>\n    </bx-menu>\n\n    <bx-menu label="Window" id="window-menu">\n      <bx-menuitem commandid="showPreviousTab" label="Show Previous Tab" shortcut="Control+ArrowLeft"></bx-menuitem>\n      <bx-menuitem commandid="showNextTab" label="Show Next Tab" shortcut="Control+ArrowRight"></bx-menuitem>\n      <bx-menuitem commandid="moveTabLeft" label="Move Tab Left" shortcut="Control+Alt+ArrowLeft"></bx-menuitem>\n      <bx-menuitem commandid="moveTabRight" label="Move Tab Right" shortcut="Control+Alt+ArrowRight"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="minimizeWindow" label="Minimize"></bx-menuitem>\n      <bx-menuitem commandid="maximizeWindow" label="Maximize"></bx-menuitem>\n      <bx-menuitem commandid="fullscreen" label="Fullscreen"></bx-menuitem>\n    </bx-menu>\n\n    <bx-menu label="Help">\n      <bx-menuitem commandid="about" label="About"></bx-menuitem>\n      <bx-menuitem commandid="rate" label="Rate on Chrome Web Store…"></bx-menuitem>\n      <bx-menuitem commandid="support" label="Get Support…"></bx-menuitem>\n    </bx-menu>\n\n    <bx-menu label="Debug" id="debug-menu">\n      <bx-menuitem commandid="reloadApp" label="Reload App" shortcut="Control+Shift+R"></bx-menuitem>\n      <bx-menuitem commandid="reloadCurrentEditor" label="Reload Editor" shortcut="Control+R"></bx-menuitem>\n    </bx-menu>\n  </bx-menubar>\n\n  <bx-tabs id="tabs"></bx-tabs>\n  <div id="editors"></div>\n  <dialog id="message-box" is="bx-messagebox"></dialog>\n',
r=!0,n=!1,a=void 0;try{
for(o=void 0,u=this._shadowRoot.querySelectorAll("[id]")[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)c=o.value,
this["#"+c.id]=c}catch(e){n=!0,a=e}finally{try{r||null==u.return||u.return()
}finally{if(n)throw a}}
chrome.idle.setDetectionInterval(15),chrome.idle.onStateChanged.addListener(function(t){
return e._onUserIdleStateChange(t)
}),this.addMessageListener("getConfig",function(t,r){
return e.getConfig(t).then(r)
}),this.addMessageListener("setConfig",function(t,r){
return e.setConfig(t.key,t.value).then(r)
}),this.addMessageListener("getClipboardData",function(t,r){
return e.getClipboardData().then(function(e){return r(e)})
}),this.addMessageListener("setClipboardData",function(t,r){
return e.setClipboardData(t)
}),this.addMessageListener("getAppMeta",function(t,r){return r(e.appMeta)
}),this.addMessageListener("getShortcutsEditorModel",function(t,r){
return r(e._getShortcutsEditorModel())
}),this.addMessageListener("openExternalURL",function(e){
return chrome.browser.openTab({url:e})
}),this.addMessageListener("showMessageBox",function(t,r){
return e.showMessageBox(t).then(r)
}),this.addMessageListener("openEntries",function(t){
return $traceurRuntime.asyncWrap(function(r){for(;;)switch(r.state){case 0:
r.returnValue=e._openEditorsWithRetainedEntries(t),r.state=2;break;case 2:
r.state=-2;break;default:return r.end()}},this)
}),this.addMessageListener("event:configchange",function(t){
return e._onConfigChange(t)}),window.addEventListener("message",function(t){
return e._onMessage(t)}),window.addEventListener("focus",function(){
return e._focusCurrentEditor()}),this.addEventListener("keydown",function(t){
return e._onKeyDown(t)
},!0),this["#menubar"].addEventListener("dragover",function(t){
return e._onMenubarDragOver(t)
}),this["#menubar"].addEventListener("drop",function(t){
return e._onMenubarDrop(t)
}),this["#menubar"].addEventListener("menuitemtrigger",function(t){
return e._onMenuItemTrigger(t)
}),this["#menubar"].addEventListener("blur",function(t){
return e._onMenubarBlur(t)
}),this["#tabs"].addEventListener("pointerdown",function(e){
return e.preventDefault()
}),this["#tabs"].addEventListener("tabopenintent",function(t){
return e._openEditorWidthDefaultArtwork()
}),this["#tabs"].addEventListener("tabcloseintent",function(t){
return e._closeEditor(t.detail.href.substring(1))
}),this["#tabs"].addEventListener("tabdown",function(t){
return e._toggleEditor(t.detail.href.substring(1))
}),this["#tabs"].addEventListener("tabslotchange",function(t){
return e._onTabSlotChange(t)
}),this["#tabs"].addEventListener("dragover",function(t){
return e._onTabsDragOver(t)}),this["#tabs"].addEventListener("drop",function(t){
return e._onTabsDrop(t)
}),this["#editors"].addEventListener("editedchange",function(t){
return e._onEditorEditedChange(t)
}),this["#editors"].addEventListener("artworkchange",function(t){
return e._onEditorArtworkChange(t)
}),this["#editors"].addEventListener("entrychange",function(t){
return e._onEditorEntryChange(t)
}),this["#editors"].addEventListener("ready",function(t){
return e._onEditorReady(t)
}),this["#editors"].addEventListener("dragover",function(t){
return e._onEditorsDragOver(t)
}),this["#editors"].addEventListener("drop",function(t){
return e._onEditorsDrop(t)}),this["#menubar"].menuWillShow=function(t){
return e._validateMenu(t)},this["#menubar"].menuItemWillTrigger=function(t){
return e._validateMenuItem(t)
},this["#debug-menu"].hidden="Boxy SVG Dev"!==this.appMeta.name,
this._removeRestrictedMainMenuItems(),
this._updateMainMenuWithUserShortcuts(),this.postMessage("background","ready"),
h.state=10;break;case 10:
return void Promise.resolve(this._dbOpen()).then(h.createCallback(6),h.errback)
;case 6:this._db=h.value,h.state=5;break;case 5:
this._restoreSession(),h.state=-2;break;default:return h.end()}},this)},
get commands(){return this._commands},get currentEditor(){var e=!0,t=!1,r=void 0
;try{
for(var n=void 0,a=this["#editors"].children[Symbol.iterator]();!(e=(n=a.next()).done);e=!0){
var i=n.value;if(!1===i.disabled)return i}}catch(e){t=!0,r=e}finally{try{
e||null==a.return||a.return()}finally{if(t)throw r}}return null},
get restrictedFeatures(){return this._restrictedFeatures},
postMessage:function(e,t){
var r=void 0!==arguments[2]?arguments[2]:null,n=void 0!==arguments[3]?arguments[3]:null,a=this._messageCounter++,i={
channel:"request",id:a,name:t,arg:r}
;n&&(this._messageResponseCallbacks[i.id]=n),
"background"===e&&this._backgroundWindow?this._backgroundWindow.postMessage(i,"*"):"preferences"===e&&this._preferencesAppWindow?this._preferencesAppWindow.contentWindow.postMessage(i,"*"):"about"===e&&this._aboutAppWindow&&this._aboutAppWindow.contentWindow.postMessage(i,"*")
},addMessageListener:function(e,t){
this._messageRequestCallbacks[e]||(this._messageRequestCallbacks[e]=[]),
this._messageRequestCallbacks[e].push(t)},removeMessageListener:function(e,t){
this._messageRequestCallbacks[e]&&(this._messageRequestCallbacks[e]=this._messageRequestCallbacks[e].filter(function(e){
return e!==t}))},getConfig:function(e){var t=this
;return new Promise(function(r){t.postMessage("background","getConfig",e,r)})},
setConfig:function(e,t){var r=this;return new Promise(function(n){
r.postMessage("background","setConfig",{key:e,value:t},n)})},
getClipboardData:function(){return new Promise(function(e){var t,r=function(e){
return new Promise(function(t){if("image/png"===e.type){var r=e.getAsFile()
;if(r){var n=new FileReader
;n.readAsDataURL(r),n.addEventListener("load",function(e){
t("data:"!==e.target.result?e.target.result:null)})}else t(null)
}else"text/plain"===e.type||"text/html"===e.type||"image/svg+xml"===e.type?e.getAsString(function(e){
t(e)
}):(console.warn("Clipboard contains data with unsupported mime-type:",e.type),
t(null))})};document.addEventListener("paste",t=function(n){
document.removeEventListener("paste",t)
;var a=Array.prototype.slice.call(n.clipboardData.items,0),i={},s=0
;a?a.forEach(function(t){var n,o;return $traceurRuntime.asyncWrap(function(l){
for(;;)switch(l.state){case 0:n=t.type,l.state=5;break;case 5:
return void Promise.resolve(r(t)).then(l.createCallback(3),l.errback);case 3:
o=l.value,l.state=2;break;case 2:o&&(i[n]=o),s+=1,s===a.length&&e(i),l.state=-2
;break;default:return l.end()}},this)}):e(i)}),document.execCommand("paste")})},
setClipboardData:function(e){return new Promise(function(t){var r
;document.addEventListener("copy",r=function(n){
return $traceurRuntime.asyncWrap(function(a){for(;;)switch(a.state){case 0:
document.removeEventListener("copy",r),
n.preventDefault(),n.clipboardData.items.clear(),
e["text/plain"]&&n.clipboardData.items.add(e["text/plain"],"text/plain"),
e["text/html"]&&n.clipboardData.items.add(e["text/html"],"text/html"),
t(),a.state=-2;break;default:return a.end()}},this)
}),document.execCommand("copy")})},execCommand:function(e){
for(var t=document.activeElement;t._shadowRoot&&t._shadowRoot.activeElement;)t=t._shadowRoot.activeElement
;for(var r=t;r;r=r.parentNode||r.host)if(r.commands&&r.commands[e]){
r.commands[e].exec();break}},getRetainedRecentEntries:function(){
return this._dbGetRecent()},rasterizeArtwork:function(e){
var t=void 0!==arguments[1]?arguments[1]:"png",r=(void 0!==arguments[2]&&arguments[2],
void 0!==arguments[3]?arguments[3]:"#ffffff"),n=this
;return new Promise(function(a,i){var o,l,u,c,d
;return $traceurRuntime.asyncWrap(function(h){for(;;)switch(h.state){case 0:
o='\n        let svg = document.querySelector("svg");\n        let width = svg.width.baseVal.valueAsString;\n        let height = svg.height.baseVal.valueAsString;\n        svg.setAttribute("style", "background-color: '+r+'");\n        [width, height];\n      ',
l="\n        display: block;\n        position: fixed;\n        width: 1px;\n        height: 1px;\n        top: 0px;\n        left: 0px;\n        opacity: 0.01;\n      ",
u="jpg"===t?"jpeg":t,
c=document.createElement("webview"),c.setAttribute("allowtransparency",""),
c.setAttribute("partition","persist:boxy"),
c.setAttribute("style",l),c.src="data:image/svg+xml;utf8,"+e,
n._shadowRoot.append(c),c.addEventListener("contentload",d=function(){
c.removeEventListener("contentload",d),c.executeScript({code:o},function(e){
var t,r,n,o,l;return $traceurRuntime.asyncWrap(function(d){
for(;;)switch(d.state){case 0:
n=e[0],t=n[Symbol.iterator](),o=(r=t.next()).done?void 0:r.value,
l=(r=t.next()).done?void 0:r.value,c.style.width=o,c.style.height=l,d.state=4
;break;case 4:
return void Promise.resolve(s(200)).then(d.createCallback(2),d.errback);case 2:
c.captureVisibleRegion({format:u},function(e){
c.remove(),chrome.runtime.lastError?i(chrome.runtime.lastError.message):a(e)
}),d.state=-2;break;default:return d.end()}},this)})}),h.state=-2;break;default:
return h.end()}},this)})},_onMessage:function(e){var t=e.source
;if(t===this._backgroundWindow||this._preferencesAppWindow&&t===this._preferencesAppWindow.contentWindow||this._aboutAppWindow&&t===this._aboutAppWindow.contentWindow){
var r=e.data,n=r.channel,a=r.id,i=r.name,s=r.arg
;"request"===n?this._messageRequestCallbacks[i]&&this._messageRequestCallbacks[i].forEach(function(e){
e(s,function(e){var r={channel:"response",id:a,name:i,arg:e}
;t.postMessage(r,"*")})
}):"response"===n&&this._messageResponseCallbacks[a]&&(this._messageResponseCallbacks[a](s),
delete this._messageResponseCallbacks[a])}},_onConfigChange:function(e){
var t=e,r=t.key,n=t.value;this.dispatchEvent(new CustomEvent("configchange",{
detail:{key:r,value:n}})),this.postMessage("about","event:configchange",{key:r,
value:n}),this.postMessage("preferences","event:configchange",{key:r,value:n})
;var a=!0,i=!1,s=void 0;try{
for(var o=void 0,l=this["#editors"].children[Symbol.iterator]();!(a=(o=l.next()).done);a=!0){
var u=o.value;u.postMessage&&u.postMessage("event:configchange",{key:r,value:n})
}}catch(e){i=!0,s=e}finally{try{a||null==l.return||l.return()}finally{
if(i)throw s}}
"bx-shortcutseditor:userShortcuts"===r&&this._updateMainMenuWithUserShortcuts()
},_onUserIdleStateChange:function(e){
"idle"===e&&this._shouldStoreSessionOnUserIdle&&(this._shouldStoreSessionOnUserIdle=!1,
this._storeSession())},_onKeyDown:function(e){var t=_.fromEvent(e)
;this.currentEditor&&this.currentEditor.textInputMode?(t.ctrl||t.alt||t.meta)&&this["#menubar"].triggerItemForShortcut(t):this["#menubar"].triggerItemForShortcut(t)
},_onDragOver:function(e){
e.preventDefault(),e.dataTransfer.effectAllowed="copy",
e.dataTransfer.dropEffect="copy"},_onDrop:function(e){e.preventDefault()
;var t=[],r=!0,n=!1,a=void 0;try{
for(var i=void 0,s=e.dataTransfer.items[Symbol.iterator]();!(r=(i=s.next()).done);r=!0){
var o=i.value,l=o.webkitGetAsEntry(),u=f(l).toLowerCase()
;["svg","svgz","html"].includes(u)?t.push(l):["png","jpg","jpeg","webp","gif"].includes(u)&&t.push(l)
}}catch(e){n=!0,a=e}finally{try{r||null==s.return||s.return()}finally{
if(n)throw a}}
t.length>0&&(this._openEditorsWithEntries(t),this._addRecentEntries(t))},
_onMenubarDragOver:function(e){this._onDragOver(e)},_onMenubarDrop:function(e){
this._onDrop(e)},_onTabSlotChange:function(e){this._storeSessionDebounced()},
_onTabsDragOver:function(e){this._onDragOver(e)},_onTabsDrop:function(e){
this._onDrop(e)},_onEditorsDragOver:function(e){
null===this.currentEditor&&this._onDragOver(e)},_onEditorsDrop:function(e){
null===this.currentEditor&&this._onDrop(e)},_onEditorReady:function(e){
var t=e.detail;this._toggleEditorQueue[0]===t&&this._toggleEditor(t.id)},
_onEditorEditedChange:function(e){var t=e.detail
;this["#tabs"].querySelector('[href="#'+t.id+'"]').edited=t.edited},
_onEditorArtworkChange:function(e){this._storeSessionOnUserIdle()},
_onEditorEntryChange:function(e){
var t=e.detail,r=this["#tabs"].querySelector('[href="#'+t.id+'"]')
;t.entry?(r.label=t.entry.name,
this._addRecentEntries([t.entry])):r.label="Untitled",
this._storeSessionDebounced()},_onCurrentEditorChange:function(){
this.dispatchEvent(new CustomEvent("currenteditorchange")),
this._storeSessionDebounced();var e=!0,t=!1,r=void 0;try{
for(var n=void 0,a=this["#menubar"].querySelectorAll("bx-menu[opened]")[Symbol.iterator]();!(e=(n=a.next()).done);e=!0){
var i=n.value;this._validateMenu(i)}}catch(e){t=!0,r=e}finally{try{
e||null==a.return||a.return()}finally{if(t)throw r}}},_onMenubarBlur:function(){
this.currentEditor&&this.currentEditor.focus()},_onMenuItemTrigger:function(e){
var t,r,n;return $traceurRuntime.asyncWrap(function(a){for(;;)switch(a.state){
case 0:t=e.detail,a.state=12;break;case 12:
a.state=t.id.startsWith("open-recent-")?4:8;break;case 4:
r=t.id.substring(12),a.state=5;break;case 5:
return void Promise.resolve(p(r)).then(a.createCallback(3),a.errback);case 3:
n=a.value,a.state=2;break;case 2:
n&&(this._openEditorsWithEntries([n]),this._addRecentEntries([n])),a.state=-2
;break;case 8:
this.commands[t.commandID]?this.commands[t.commandID].exec():this.currentEditor&&this.currentEditor.postMessage("execCommand",t.commandID),
a.state=-2;break;default:return a.end()}},this)},_validateMenu:function(e){
var t=this;return new Promise(function(r){
var n,a,i,o,l,u,c,d,h,b,m,f,v,g,_,w,k,y,x,C,E,S,R,A,T,M,P,L,W,j,D,z,$,I,O,B
;return $traceurRuntime.asyncWrap(function(F){for(;;)switch(F.state){case 0:
n=!0,a=!1,i=void 0;try{
for(o=void 0,l=e.children[Symbol.iterator]();!(n=(o=l.next()).done);n=!0)u=o.value,
t._validateMenuItem(u)}catch(e){a=!0,i=e}finally{try{
n||null==l.return||l.return()}finally{if(a)throw i}}F.state=40;break;case 40:
F.state="open-recent-menu"===e.id?1:36;break;case 1:
return void Promise.resolve(t.getRetainedRecentEntries()).then(F.createCallback(3),F.errback)
;case 3:c=F.value,F.state=2;break;case 2:d="",F.state=33;break;case 33:
F.state=c.length>0?27:19;break;case 27:h=!0,b=!1,m=void 0,F.state=28;break
;case 28:F.pushTry(14,15),F.state=17;break;case 17:
f=void 0,v=c[Symbol.iterator](),F.state=13;break;case 13:
F.state=(h=(f=v.next()).done)?11:9;break;case 8:h=!0,F.state=13;break;case 9:
g=f.value,F.state=10;break;case 10:
return void Promise.resolve(p(g)).then(F.createCallback(6),F.errback);case 6:
_=F.value,F.state=5;break;case 5:
_&&(d+='<bx-menuitem id="open-recent-'+g+'" label="'+_.name+'"></bx-menuitem>'),
F.state=8;break;case 11:F.popTry(),F.state=15,F.finallyFallThrough=19;break
;case 14:F.popTry(),F.maybeUncatchable(),B=F.storedException,F.state=20;break
;case 20:b=!0,m=B,F.state=15,F.finallyFallThrough=19;break;case 15:
F.popTry(),F.state=26;break;case 26:try{h||null==v.return||v.return()}finally{
if(b)throw m}F.state=24;break;case 19:
e.innerHTML="\n          "+d+'\n          <hr/>\n          <bx-menuitem id="clear-recent-menu-item" commandid="clearRecent" label="Clear Recent"></bx-menuitem>\n        ',
F.state=35;break;case 35:
return void Promise.resolve(s(30)).then(F.createCallback(31),F.errback);case 36:
if("tools-menu"===e.id){
w=t.currentEditor?t.currentEditor.currentToolID:null,k=!0,y=!1,x=void 0;try{
for(C=void 0,
E=e.children[Symbol.iterator]();!(k=(C=E.next()).done);k=!0)S=C.value,
S.commandID&&(S.state=S.commandID===w?"toggled":null)}catch(e){y=!0,x=e}finally{
try{k||null==E.return||E.return()}finally{if(y)throw x}}
}else if("panels-menu"===e.id){
R=t.currentEditor?t.currentEditor.currentSecondaryPanelID:null,
A=!0,T=!1,M=void 0;try{
for(P=void 0,L=e.children[Symbol.iterator]();!(A=(P=L.next()).done);A=!0)W=P.value,
W.commandID&&(W.state=W.commandID===R?"toggled":null)}catch(e){T=!0,M=e}finally{
try{A||null==L.return||L.return()}finally{if(T)throw M}}
}else if("window-menu"===e.id){j=!0,D=!1,z=void 0;try{
for($=void 0,I=e.children[Symbol.iterator]();!(j=($=I.next()).done);j=!0)O=$.value,
"maximizeWindow"===O.commandID?chrome.app.window.current().isMaximized()?O.label="Restore":O.label="Maximize":"fullscreen"===O.commandID&&(chrome.app.window.current().isFullscreen()?O.label="Leave Fullscreen":O.label="Enter Fullscreen")
}catch(e){D=!0,z=e}finally{try{j||null==I.return||I.return()}finally{
if(D)throw z}}}F.state=31;break;case 31:r(),F.state=-2;break;case 24:
F.state=F.finallyFallThrough;break;default:return F.end()}},this)})},
_validateMenuItem:function(e){var t=this;return new Promise(function(r){
if(e.commandID){var n=e.commandID,a=t.commands[n]
;a?(e.disabled=!!a.enabled&&!a.enabled(),
r()):t.currentEditor?t.currentEditor.postMessage("validateCommand",n,function(t){
e.disabled=!t,r()}):(e.disabled=!0,r())}else r()})},
_updateMainMenuWithUserShortcuts:function(){var e=this
;return new Promise(function(t){var r,n,a,i,s,o,l,u,c,d,h,b
;return $traceurRuntime.asyncWrap(function(m){for(;;)switch(m.state){case 0:
c=e.getConfig,d=c.call(e,"bx-shortcutseditor:userShortcuts"),m.state=5;break
;case 5:return void Promise.resolve(d).then(m.createCallback(3),m.errback)
;case 3:h=m.value,m.state=2;break;case 2:b=h||{},r=b,m.state=7;break;case 7:
n=e["#menubar"].querySelectorAll("bx-menuitem[commandid]"),a=!0,i=!1,s=void 0
;try{
for(o=void 0,l=n[Symbol.iterator]();!(a=(o=l.next()).done);a=!0)u=o.value,r[u.commandID]?u.userShortcut=_.fromString(r[u.commandID]):u.userShortcut=null
}catch(e){i=!0,s=e}finally{try{a||null==l.return||l.return()}finally{
if(i)throw s}}t(),m.state=-2;break;default:return m.end()}},this)})},
_removeRestrictedMainMenuItems:function(){
var e=this["#menubar"].querySelectorAll("bx-menuitem[commandid]"),t=!0,r=!1,a=void 0
;try{for(var i=void 0,s=e[Symbol.iterator]();!(t=(i=s.next()).done);t=!0){
var o=i.value;this.restrictedFeatures.includes(n(o.commandID))&&o.remove()}
}catch(e){r=!0,a=e}finally{try{t||null==s.return||s.return()}finally{
if(r)throw a}}},_getShortcutsEditorModel:function(){var e=[],t=!0,r=!1,n=void 0
;try{
for(var a=void 0,i=this["#menubar"].querySelectorAll("bx-menu")[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){
var s=a.value;if(!1===s.hidden){
for(var o=[],l=s;l!==this["#menubar"];l=l.parentElement)l.label&&o.unshift(l.label)
;var u=!0,c=!1,d=void 0;try{
for(var h=void 0,b=s.children[Symbol.iterator]();!(u=(h=b.next()).done);u=!0){
var m=h.value;m.commandID&&!1===m.hidden&&e.push({id:m.commandID,
label:$traceurRuntime.spread(o,[m.label]).join(" ‣ "),
shortcut:m.shortcut?m.shortcut.toString():null})}}catch(e){c=!0,d=e}finally{try{
u||null==b.return||b.return()}finally{if(c)throw d}}}}}catch(e){r=!0,n=e
}finally{try{t||null==i.return||i.return()}finally{if(r)throw n}}return e},
_openPreferencesAppWindow:function(){var e=this;return new Promise(function(t){
var r,n,a;return $traceurRuntime.asyncWrap(function(i){for(;;)switch(i.state){
case 0:i.state=e._preferencesAppWindow?8:4;break;case 8:
e._preferencesAppWindow.focus(),t(),i.state=-2;break;case 4:a={
id:"preferencesAppWindow",resizable:!1,hidden:!0,frame:{type:"chrome",
color:"#333"},outerBounds:{width:700,minWidth:700,maxWidth:700,height:450,
minHeight:450,maxHeight:450}},i.state=5;break;case 5:
return void Promise.resolve(c("core/preferences.html",a)).then(i.createCallback(3),i.errback)
;case 3:e._preferencesAppWindow=i.value,i.state=2;break;case 2:
e._preferencesAppWindow.contentWindow.addEventListener("load",r=function(){
return $traceurRuntime.asyncWrap(function(n){for(;;)switch(n.state){case 0:
e._preferencesAppWindow.contentWindow.removeEventListener("load",r),
e.postMessage("preferences","init"),n.state=4;break;case 4:
return void Promise.resolve(s(150)).then(n.createCallback(2),n.errback);case 2:
e._preferencesAppWindow.show(),t(),n.state=-2;break;default:return n.end()}
},this)}),e._preferencesAppWindow.onClosed.addListener(n=function(){
e._preferencesAppWindow.onClosed.removeListener(n),e._preferencesAppWindow=null
}),i.state=-2;break;default:return i.end()}},this)})},
_openAboutAppWindow:function(){var e=this;return new Promise(function(t){
var r,n,a;return $traceurRuntime.asyncWrap(function(i){for(;;)switch(i.state){
case 0:i.state=e._aboutAppWindow?8:4;break;case 8:e._aboutAppWindow.focus(),t(),
i.state=-2;break;case 4:a={id:"aboutAppWindow",resizable:!1,hidden:!0,frame:{
type:"chrome",color:"#333"},outerBounds:{width:340,minWidth:340,maxWidth:340,
height:400,minHeight:400,maxHeight:400}},i.state=5;break;case 5:
return void Promise.resolve(c("core/about.html",a)).then(i.createCallback(3),i.errback)
;case 3:e._aboutAppWindow=i.value,i.state=2;break;case 2:
e._aboutAppWindow.contentWindow.addEventListener("load",r=function(){
return $traceurRuntime.asyncWrap(function(n){for(;;)switch(n.state){case 0:
e._aboutAppWindow.contentWindow.removeEventListener("load",r),
e.postMessage("about","init"),n.state=4;break;case 4:
return void Promise.resolve(s(150)).then(n.createCallback(2),n.errback);case 2:
e._aboutAppWindow.show(),t(),n.state=-2;break;default:return n.end()}},this)
}),e._aboutAppWindow.onClosed.addListener(n=function(){
e._aboutAppWindow.onClosed.removeListener(n),e._aboutAppWindow=null}),i.state=-2
;break;default:return i.end()}},this)})},_closeAllAppWindows:function(){
this._aboutAppWindow&&this._aboutAppWindow.close(),
this._preferencesAppWindow&&this._preferencesAppWindow.close(),
chrome.app.window.current().close()},_maximizeCurrentAppWindow:function(){
var e=chrome.app.window.current();e.isMaximized()?e.restore():e.maximize()},
_toggleCurrentAppWindowFullscreenMode:function(){
var e=chrome.app.window.current();e.isFullscreen()?e.restore():e.fullscreen()},
showMessageBox:function(e){var t=this;return new Promise(function(r){var n
;t["#message-box"].open&&t["#message-box"].close(null),
t["#menubar"].disabled=!0,
t["#message-box"].showModal(e),t["#message-box"].addEventListener("close",n=function(){
t["#menubar"].disabled=!1,
t["#message-box"].removeEventListener("close",n),t._focusCurrentEditor(),
r(w(t["#message-box"].returnValue))})})},
_openEditorWidthDefaultArtwork:function(){var e=this
;return new Promise(function(r){var n,a,i,s
;return $traceurRuntime.asyncWrap(function(o){for(;;)switch(o.state){case 0:
n=e._createUniqueTabID(),
a=n.replace("tab","editor"),i=e["#tabs"].openTab(),i.label="Untitled",
i.id=n,i.href="#"+a,
i.disabled=!0,s=t("bx-editor"),s.id=a,s.disabled=!0,e["#editors"].append(s),
e._toggleEditor(s.id),o.state=4;break;case 4:
return void Promise.resolve(s.init()).then(o.createCallback(2),o.errback)
;case 2:i.disabled=!1,e._storeSessionDebounced(),r(s),o.state=-2;break;default:
return o.end()}},this)})},
_openEditorWithArtworkImportedFromSelectedElements:function(){var e=this
;return new Promise(function(r){var n,a,i,s,o
;return $traceurRuntime.asyncWrap(function(l){for(;;)switch(l.state){case 0:
return void Promise.resolve(e.currentEditor.getArtworkFromSelectedElements()).then(l.createCallback(3),l.errback)
;case 3:n=l.value,l.state=2;break;case 2:
a=e._createUniqueTabID(),i=a.replace("tab","editor"),
s=e["#tabs"].openTab(),s.label="Untitled",
s.id=a,s.href="#"+i,s.disabled=!0,o=t("bx-editor"),
o.id=i,o.disabled=!0,e["#editors"].append(o),e._toggleEditor(o.id),l.state=7
;break;case 7:
return void Promise.resolve(o.init(n)).then(l.createCallback(5),l.errback)
;case 5:s.disabled=!1,e._storeSessionDebounced(),r(o),l.state=-2;break;default:
return l.end()}},this)})},_openEditorsWithEntries:function(e){
var r=this,n=function(e){return new Promise(function(n){
var a,i,s,o,l,u,c,d,h,m,v,p,_,w,k;return $traceurRuntime.asyncWrap(function(y){
for(;;)switch(y.state){case 0:a=null,i=!0,s=!1,o=void 0,y.state=29;break
;case 29:y.pushTry(15,16),y.state=18;break;case 18:
l=void 0,u=$traceurRuntime.spread(r["#editors"].children)[Symbol.iterator](),
y.state=14;break;case 14:y.state=(i=(l=u.next()).done)?12:10;break;case 5:
i=!0,y.state=14;break;case 10:c=l.value,y.state=11;break;case 11:
y.state=c.entry?1:5;break;case 1:
return void Promise.resolve(g(e,c.entry)).then(y.createCallback(3),y.errback)
;case 3:d=y.value,y.state=2;break;case 2:y.state=d?6:5;break;case 6:
a=c,y.state=12;break;case 12:y.popTry(),y.state=16,y.finallyFallThrough=20;break
;case 15:y.popTry(),y.maybeUncatchable(),k=y.storedException,y.state=21;break
;case 21:s=!0,o=k,y.state=16,y.finallyFallThrough=20;break;case 16:
y.popTry(),y.state=27;break;case 27:try{i||null==u.return||u.return()}finally{
if(s)throw o}y.state=25;break;case 20:h=b(e),m=f(e).toLowerCase(),v=null,p=null,
_=function(){
a?v=r["#tabs"].querySelector('[href="#'+a.id+'"]'):(v=r["#tabs"].openTab(),
v.id=r._createUniqueTabID(),
v.href="#"+v.id.replace("tab","editor"),v.label=h+"."+("svgz"===m||"html"===m?m:"svg"),
v.disabled=!0)},w=function(n){return new Promise(function(i){
return $traceurRuntime.asyncWrap(function(s){for(;;)switch(s.state){case 0:
s.state=a?7:3;break;case 7:p=a,n&&r._toggleEditor(p.id),i(p),s.state=-2;break
;case 3:
p=t("bx-editor"),p.id=v.id.replace("tab","editor"),p.disabled=!0,r["#editors"].append(p),
n&&r._toggleEditor(p.id),s.state=4;break;case 4:
return void Promise.resolve(p.init(null,e)).then(s.createCallback(2),s.errback)
;case 2:v.disabled=!1,i(p),s.state=-2;break;default:return s.end()}},this)})
},n({createTab:_,createEditor:w}),y.state=-2;break;case 25:
y.state=y.finallyFallThrough;break;default:return y.end()}},this)})}
;return new Promise(function(t){var a,i,s,o,l,u,c,d,h,b,m,f,v,g,p,_,w
;return $traceurRuntime.asyncWrap(function(k){for(;;)switch(k.state){case 0:
a=[],i=!0,s=!1,o=void 0,k.state=36;break;case 36:k.pushTry(11,12),k.state=14
;break;case 14:l=void 0,u=e[Symbol.iterator](),k.state=10;break;case 10:
k.state=(i=(l=u.next()).done)?8:6;break;case 5:i=!0,k.state=10;break;case 6:
c=l.value,k.state=7;break;case 7:
return void Promise.resolve(n(c)).then(k.createCallback(3),k.errback);case 3:
d=k.value,k.state=2;break;case 2:a.push(d),k.state=5;break;case 8:
k.popTry(),k.state=12,k.finallyFallThrough=16;break;case 11:
k.popTry(),k.maybeUncatchable(),w=k.storedException,k.state=17;break;case 17:
s=!0,o=w,k.state=12,k.finallyFallThrough=16;break;case 12:k.popTry(),k.state=23
;break;case 23:try{i||null==u.return||u.return()}finally{if(s)throw o}k.state=21
;break;case 16:k.state=a.length>0?28:32;break;case 28:
h=a[a.length-1],b=a.slice(0,a.length-1),m=!0,f=!1,v=void 0;try{
for(g=void 0,p=a[Symbol.iterator]();!(m=(g=p.next()).done);m=!0)_=g.value,
_.createTab()}catch(e){f=!0,v=e}finally{try{m||null==p.return||p.return()
}finally{if(f)throw v}}k.state=29;break;case 29:
return void Promise.resolve(h.createEditor(!0)).then(k.createCallback(25),k.errback)
;case 25:return void Promise.resolve(Promise.all(b.map(function(e){
return e.createEditor(!1)}))).then(k.createCallback(27),k.errback);case 27:
r._storeSessionDebounced(),t(),k.state=-2;break;case 32:t(),k.state=-2;break
;case 21:k.state=k.finallyFallThrough;break;default:return k.end()}},this)})},
_openEditorsWithRetainedEntries:function(e){var t=this
;return new Promise(function(r){var n,a,i,s,o,l,u,c,d
;return $traceurRuntime.asyncWrap(function(h){for(;;)switch(h.state){case 0:
n=[],a=!0,i=!1,s=void 0,h.state=27;break;case 27:h.pushTry(11,12),h.state=14
;break;case 14:o=void 0,l=e[Symbol.iterator](),h.state=10;break;case 10:
h.state=(a=(o=l.next()).done)?8:6;break;case 5:a=!0,h.state=10;break;case 6:
u=o.value,h.state=7;break;case 7:
return void Promise.resolve(p(u)).then(h.createCallback(3),h.errback);case 3:
c=h.value,h.state=2;break;case 2:c&&n.push(c),h.state=5;break;case 8:h.popTry(),
h.state=12,h.finallyFallThrough=16;break;case 11:
h.popTry(),h.maybeUncatchable(),d=h.storedException,h.state=17;break;case 17:
i=!0,s=d,h.state=12,h.finallyFallThrough=16;break;case 12:h.popTry(),h.state=23
;break;case 23:try{a||null==l.return||l.return()}finally{if(i)throw s}h.state=21
;break;case 16:t._addRecentEntries(n),h.state=29;break;case 29:
return void Promise.resolve(t._openEditorsWithEntries(n)).then(h.createCallback(25),h.errback)
;case 25:r(),h.state=-2;break;case 21:h.state=h.finallyFallThrough;break
;default:return h.end()}},this)})},
_openEditorsWithUserSelectedEntries:function(){var e=this
;return new Promise(function(t){var r,n
;return $traceurRuntime.asyncWrap(function(a){for(;;)switch(a.state){case 0:
a.pushTry(9,null),a.state=12;break;case 12:return void Promise.resolve(v({
type:"openFile",acceptsMultiple:!0,acceptsAllTypes:!1,accepts:[{
description:"All Supported Formats",
extensions:["svg","svgz","png","jpg","jpeg","gif","webp"]},{description:"SVG",
mimeTypes:["image/svg+xml"],extensions:["svg"]},{description:"SVGZ",
mimeTypes:["image/svg+xml"],extensions:["svgz"]},{description:"PNG",
mimeTypes:["image/png"],extensions:["png"]},{description:"JPEG",
mimeTypes:["image/jpeg"],extensions:["jpg","jpeg"]},{description:"GIF",
mimeTypes:["image/gif"],extensions:["gif"]},{description:"WebP",
mimeTypes:["image/webp"],extensions:["webp"]}]
})).then(a.createCallback(3),a.errback);case 3:r=a.value,a.state=2;break;case 2:
a.popTry(),a.state=14;break;case 9:
a.popTry(),a.maybeUncatchable(),n=a.storedException,a.state=7;break;case 7:
t(),a.state=8;break;case 8:a.returnValue=void 0,a.state=5;break;case 5:
a.state=-2;break;case 14:a.state=r.length>0?16:20;break;case 16:
return void Promise.resolve(e._addRecentEntries(r)).then(a.createCallback(17),a.errback)
;case 17:
return void Promise.resolve(e._openEditorsWithEntries(r)).then(a.createCallback(19),a.errback)
;case 20:e.currentEditor&&e.currentEditor.focus(),a.state=19;break;case 19:
t(),a.state=-2;break;default:return a.end()}},this)})},_closeEditor:function(e){
var t=this;return new Promise(function(r){var n,a,i,o,l
;return $traceurRuntime.asyncWrap(function(u){for(;;)switch(u.state){case 0:
n=t["#editors"].querySelector("#"+e)||null,
a=t["#tabs"].querySelector('[href="#'+n.id+'"]'),i=function(){
var e,i,s,o,l,u,c,d;return $traceurRuntime.asyncWrap(function(h){
for(;;)switch(h.state){case 0:
n===t.currentEditor?(e=t["#tabs"].querySelector('[href="#'+n.id+'"]'),
i=null,t["#tabs"].childElementCount>1&&(s=t["#tabs"].getTabsByScreenPosition(),
o=s.indexOf(a),l=s[o+1],u=s[o-1],c=s.find(function(e){
return!1===e.disabled&&e!==a
}),l&&!1===l.disabled?i=l:u&&!1===u.disabled?i=u:c&&(i=c)),
t["#tabs"].closeTab(e.id),
i?(t["#tabs"].highlightTab(i.id),t._toggleEditor(i.href.substring(1))):t._toggleEditor(null)):(d=t["#tabs"].querySelector('[href="#'+n.id+'"]'),
t["#tabs"].closeTab(d.id)),
n.remove(),0===t["#editors"].childElementCount?t._storeSession():t._storeSessionDebounced(),
r(!0),h.state=-2;break;default:return h.end()}},this)},u.state=26;break;case 26:
u.state=t._restoringSession?22:21;break;case 22:r(!1),u.state=-2;break;case 21:
u.state=null===n?19:17;break;case 19:r(!1),u.state=-2;break;case 17:
a.disabled=!0,u.state=18;break;case 18:u.state=!1===n.edited?14:1;break;case 14:
i(),u.state=-2;break;case 1:return void Promise.resolve(t.showMessageBox({
message:"Would you like to save your changes before closing?",
buttons:["Don't Save","Cancel","Save"]})).then(u.createCallback(3),u.errback)
;case 3:o=u.value,u.state=2;break;case 2:u.state=2===o?4:11;break;case 4:
return void Promise.resolve(s(30)).then(u.createCallback(5),u.errback);case 5:
return void Promise.resolve(n.save()).then(u.createCallback(8),u.errback)
;case 8:l=u.value,u.state=7;break;case 7:l?i():(a.disabled=!1,r(!1)),u.state=-2
;break;case 11:0===o?i():1===o&&(a.disabled=!1,r(!1)),u.state=-2;break;default:
return u.end()}},this)})},_saveCurrentEditorArtwork:function(){var e=this
;return new Promise(function(t){return $traceurRuntime.asyncWrap(function(r){
for(;;)switch(r.state){case 0:
return void Promise.resolve(e.currentEditor.save()).then(r.createCallback(2),r.errback)
;case 2:t(),r.state=-2;break;default:return r.end()}},this)})},
_saveCurrentEditorArtworkAs:function(){var e=this
;return new Promise(function(t){return $traceurRuntime.asyncWrap(function(r){
for(;;)switch(r.state){case 0:
return void Promise.resolve(e.currentEditor.saveAs()).then(r.createCallback(2),r.errback)
;case 2:t(),r.state=-2;break;default:return r.end()}},this)})},
_toggleEditor:function(e){
var t=null===e?null:this["#editors"].querySelector("#"+e)
;if(t!==this.currentEditor)if(t)if(!1===t.ready)this._toggleEditorQueue.unshift(t);else{
this._toggleEditorQueue=[],t.disabled=!1,t.focus()
;var r=$traceurRuntime.spread(this["#editors"].children).filter(function(t){
return t.id!==e}),n=!0,a=!1,i=void 0;try{
for(var s=void 0,o=r[Symbol.iterator]();!(n=(s=o.next()).done);n=!0){
var l=s.value;l.disabled=!0}}catch(e){a=!0,i=e}finally{try{
n||null==o.return||o.return()}finally{if(a)throw i}}
var u=this["#tabs"].querySelector('[href="#'+e+'"]')
;this["#tabs"].highlightTab(u.id),this._onCurrentEditorChange()}else{
var c=!0,d=!1,h=void 0;try{
for(var b=void 0,m=this["#editors"].children[Symbol.iterator]();!(c=(b=m.next()).done);c=!0){
var f=b.value;f.disabled=!0}}catch(e){d=!0,h=e}finally{try{
c||null==m.return||m.return()}finally{if(d)throw h}}
this["#tabs"].highlightTab(null),this._onCurrentEditorChange()}},
_toggleEditorForPreviousTab:function(){
var e=this["#tabs"].querySelector("[highlighted]"),t=this["#tabs"].getTabsByScreenPosition()
;if(t=t.filter(function(t){return!1===t.disabled||t===e}),e){
var r=t.indexOf(e),n=t[r-1],a=t[t.length-1];if(n){var i=n.href.substring(1)
;this._toggleEditor(i)}else if(a&&a!==e){var s=a.href.substring(1)
;this._toggleEditor(s)}}},_toggleEditorForNextTab:function(){
var e=this["#tabs"].querySelector("[highlighted]"),t=this["#tabs"].getTabsByScreenPosition()
;if(t=t.filter(function(t){return!1===t.disabled||t===e}),e){
var r=t.indexOf(e),n=t[r+1],a=t[0];if(n){var i=n.href.substring(1)
;this._toggleEditor(i)}else if(a&&a!==e){var s=a.href.substring(1)
;this._toggleEditor(s)}}},_canToggleEditorForPreviousTab:function(){
var e=this["#tabs"].querySelector("[highlighted]"),t=this["#tabs"].getTabsByScreenPosition()
;if(t=t.filter(function(t){return!1===t.disabled||t===e}),e){
var r=t.indexOf(e),n=t[r-1],a=t[t.length-1];return!!n||!(!a||a===e)}return!1},
_canToggleEditorForNextTab:function(){
var e=this["#tabs"].querySelector("[highlighted]"),t=this["#tabs"].getTabsByScreenPosition()
;if(t=t.filter(function(t){return!1===t.disabled||t===e}),e){
var r=t.indexOf(e),n=t[r+1],a=t[0];return!!n||!(!a||a===e)}return!1},
_moveCurrentEditorTabLeft:function(){
this["#tabs"].moveHighlightedTabLeft(),this._storeSessionDebounced()},
_moveCurrentEditorTabRight:function(){
this["#tabs"].moveHighlightedTabRight(),this._storeSessionDebounced()},
_focusCurrentEditor:function(){this.currentEditor&&this.currentEditor.focus()},
_createUniqueTabID:function(){for(var e=0;;){var t="tab-"+e
;if(!this["#tabs"].querySelector("#"+t))return t;e+=1}},
_createUniqueEditorID:function(){
for(var e=void 0!==arguments[0]?arguments[0]:[],t=0;;){var r="editor-"+t
;if(!this["#editors"].querySelector("#"+r)&&!e.includes(r))return r;t+=1}},
_addRecentEntries:function(e){var t=this;return new Promise(function(r){
var n,a,i,s,o,l,u,c,d,h,b,v,g,_,w,k,y,x,C,E,S,R,A,T,M,P
;return $traceurRuntime.asyncWrap(function(L){for(;;)switch(L.state){case 0:
L.state=0===e.length?71:63;break;case 71:r(),L.state=-2;break;case 63:
n=[],a=Symbol(),i=!0,s=!1,o=void 0,L.state=64;break;case 64:
L.pushTry(22,23),L.state=25;break;case 25:l=void 0,C=t._dbGetRecent,E=C.call(t),
L.state=5;break;case 5:
return void Promise.resolve(E).then(L.createCallback(3),L.errback);case 3:
S=L.value,L.state=2;break;case 2:
R=Symbol.iterator,A=S[R],T=A.call(S),u=T,L.state=7;break;case 7:L.state=21;break
;case 21:L.state=(i=(l=u.next()).done)?19:17;break;case 15:i=!0,L.state=21;break
;case 17:c=l.value,L.state=18;break;case 18:
return void Promise.resolve(p(c)).then(L.createCallback(10),L.errback);case 10:
d=L.value,L.state=9;break;case 9:L.state=d?11:15;break;case 11:
return void Promise.resolve(m(d)).then(L.createCallback(13),L.errback);case 13:
h=L.value,L.state=12;break;case 12:d[a]=h,n.push(d),L.state=15;break;case 19:
L.popTry(),L.state=23,L.finallyFallThrough=27;break;case 22:
L.popTry(),L.maybeUncatchable(),M=L.storedException,L.state=28;break;case 28:
s=!0,o=M,L.state=23,L.finallyFallThrough=27;break;case 23:L.popTry(),L.state=34
;break;case 34:try{i||null==u.return||u.return()}finally{if(s)throw o}L.state=32
;break;case 27:b=!0,v=!1,g=void 0,L.state=66;break;case 66:
L.pushTry(48,49),L.state=51;break;case 51:
_=void 0,w=e[Symbol.iterator](),L.state=47;break;case 47:
L.state=(b=(_=w.next()).done)?45:43;break;case 39:b=!0,L.state=47;break;case 43:
k=_.value,L.state=44;break;case 44:y=f(k).toLowerCase(),L.state=42;break
;case 42:L.state="svg"===y||"svgz"===y||"html"===y?35:39;break;case 35:
return void Promise.resolve(m(k)).then(L.createCallback(37),L.errback);case 37:
k[a]=L.value,L.state=36;break;case 36:n=n.filter(function(e){return e[a]!==k[a]
}),n.push(k),L.state=39;break;case 45:
L.popTry(),L.state=49,L.finallyFallThrough=53;break;case 48:
L.popTry(),L.maybeUncatchable(),P=L.storedException,L.state=54;break;case 54:
v=!0,g=P,L.state=49,L.finallyFallThrough=53;break;case 49:L.popTry(),L.state=60
;break;case 60:try{b||null==w.return||w.return()}finally{if(v)throw g}L.state=58
;break;case 53:for(;n.length>10;)n.shift();x=n.map(function(e){
return chrome.fileSystem.retainEntry(e)}),L.state=68;break;case 68:
return void Promise.resolve(t._dbSetRecent(x)).then(L.createCallback(62),L.errback)
;case 62:r(),L.state=-2;break;case 32:case 58:L.state=L.finallyFallThrough;break
;default:return L.end()}},this)})},_clearRecentEntries:function(){var e=this
;return new Promise(function(t){e._dbSetRecent([])})},
_storeSessionOnUserIdle:function(){this._shouldStoreSessionOnUserIdle=!0},
_storeSession:function(){var e=this;return new Promise(function(t){
var r,n,a,i,s,o,l,u,c,d,h,b,m,f,v,g,p,_,w,k,y,x,C,E
;return $traceurRuntime.asyncWrap(function(S){for(;;)switch(S.state){case 0:
S.state=e._storingSession||e._restoringSession?44:40;break;case 44:
t(),S.state=-2;break;case 40:
e._storingSession=!0,r=[],n=e["#tabs"].getTabsByScreenPosition(),
a=!0,i=!1,s=void 0,S.state=41;break;case 41:S.pushTry(25,26),S.state=28;break
;case 28:o=void 0,l=n[Symbol.iterator](),S.state=24;break;case 24:
S.state=(a=(o=l.next()).done)?22:20;break;case 16:a=!0,S.state=24;break;case 20:
u=o.value,S.state=21;break;case 21:
c=e["#editors"].querySelector(u.href),S.state=19;break;case 19:S.state=c?11:16
;break;case 11:
h=c.entry,h?(b=chrome.fileSystem,m=b.retainEntry,f=c.entry,v=m.call(b,f),
g=v):g=null,p=c.edited,S.state=12;break;case 12:S.state=p?4:8;break;case 4:
_=c.getArtwork,w=_.call(c),S.state=5;break;case 5:
return void Promise.resolve(w).then(S.createCallback(3),S.errback);case 3:
k=S.value,S.state=2;break;case 2:y=k,S.state=7;break;case 8:y=null,S.state=7
;break;case 7:x=u.highlighted,C={retainedEntry:g,unsavedArtwork:y,primary:x
},d=C,S.state=14;break;case 14:r.push(d),S.state=16;break;case 22:
S.popTry(),S.state=26,S.finallyFallThrough=30;break;case 25:
S.popTry(),S.maybeUncatchable(),E=S.storedException,S.state=31;break;case 31:
i=!0,s=E,S.state=26,S.finallyFallThrough=30;break;case 26:S.popTry(),S.state=37
;break;case 37:try{a||null==l.return||l.return()}finally{if(i)throw s}S.state=35
;break;case 30:
return void Promise.resolve(e._dbSetSession(r)).then(S.createCallback(39),S.errback)
;case 39:e._storingSession=!1,t(),S.state=-2;break;case 35:
S.state=S.finallyFallThrough;break;default:return S.end()}},this)})},
_restoreSession:function(){var e=this;return new Promise(function(r,n){
var a,i,s,o,l,u,c,d,h,m,v,_,w,k,y,x,C,E,S,R,A,T,M,P,L,W,j,D,z,$,I,O,B,F,N,U,q,H,Z,V,G,K,X,Y,Q,J,ee,te,re,ne,ae,ie,se,oe,le,ue,ce,de,he,be
;return $traceurRuntime.asyncWrap(function(n){for(;;)switch(n.state){case 0:
e._restoringSession=!0,n.state=119;break;case 119:
return void Promise.resolve(e._dbGetSession()).then(n.createCallback(3),n.errback)
;case 3:a=n.value,n.state=2;break;case 2:i=!0,s=!1,o=void 0,n.state=121;break
;case 121:n.pushTry(23,24),n.state=26;break;case 26:
l=void 0,u=a[Symbol.iterator](),n.state=22;break;case 22:
n.state=(i=(l=u.next()).done)?20:18;break;case 17:i=!0,n.state=22;break;case 18:
c=l.value,n.state=19;break;case 19:Y=c.retainedEntry,n.state=15;break;case 15:
n.state=Y?7:11;break;case 7:Q=c.retainedEntry,J=p(Q),n.state=8;break;case 8:
return void Promise.resolve(J).then(n.createCallback(6),n.errback);case 6:
ee=n.value,n.state=5;break;case 5:te=ee,n.state=10;break;case 11:
te=null,n.state=10;break;case 10:c.entry=te,n.state=17;break;case 20:n.popTry(),
n.state=24,n.finallyFallThrough=28;break;case 23:
n.popTry(),n.maybeUncatchable(),re=n.storedException,n.state=29;break;case 29:
s=!0,o=re,n.state=24,n.finallyFallThrough=28;break;case 24:n.popTry(),n.state=35
;break;case 35:try{i||null==u.return||u.return()}finally{if(s)throw o}n.state=33
;break;case 28:a=a.filter(function(e){
return e.entry||e.unsavedArtwork||null===e.retainedEntry}),n.state=123;break
;case 123:
return void Promise.resolve(e._getLaunchEntries()).then(n.createCallback(38),n.errback)
;case 38:d=n.value,n.state=37;break;case 37:n.state=d.length>0?96:88;break
;case 96:h=!0,m=!1,v=void 0,n.state=97;break;case 97:n.pushTry(83,84),n.state=86
;break;case 86:_=void 0,w=d[Symbol.iterator](),n.state=82;break;case 82:
n.state=(h=(_=w.next()).done)?80:78;break;case 77:h=!0,n.state=82;break;case 78:
k=_.value,n.state=79;break;case 79:y=void 0,x=!0,C=!1,E=void 0,n.state=75;break
;case 75:n.pushTry(61,62),n.state=64;break;case 64:
S=void 0,R=a[Symbol.iterator](),n.state=60;break;case 60:
n.state=(x=(S=R.next()).done)?58:56;break;case 52:x=!0,n.state=60;break;case 56:
A=S.value,n.state=57;break;case 57:ne=A.entry,n.state=50;break;case 50:
n.state=ne?42:46;break;case 42:ae=A.entry,ie=g(k,ae),n.state=43;break;case 43:
return void Promise.resolve(ie).then(n.createCallback(41),n.errback);case 41:
se=n.value,n.state=40;break;case 40:oe=se,n.state=45;break;case 46:
oe=ne,n.state=45;break;case 45:n.state=oe?53:52;break;case 53:y=A,n.state=58
;break;case 58:n.popTry(),n.state=62,n.finallyFallThrough=66;break;case 61:
n.popTry(),n.maybeUncatchable(),le=n.storedException,n.state=67;break;case 67:
C=!0,E=le,n.state=62,n.finallyFallThrough=66;break;case 62:n.popTry(),n.state=73
;break;case 73:try{x||null==R.return||R.return()}finally{if(C)throw E}n.state=71
;break;case 66:if(y){T=!0,M=!1,P=void 0;try{
for(L=void 0,W=a[Symbol.iterator]();!(T=(L=W.next()).done);T=!0)j=L.value,
j.primary=j===y}catch(e){M=!0,P=e}finally{try{T||null==W.return||W.return()
}finally{if(M)throw P}}}else{D=!0,z=!1,$=void 0;try{
for(I=void 0,O=a[Symbol.iterator]();!(D=(I=O.next()).done);D=!0)B=I.value,
B.primary=!1}catch(e){z=!0,$=e}finally{try{D||null==O.return||O.return()
}finally{if(z)throw $}}a.push({entry:k,unsavedArtwork:null,primary:!0})}
n.state=77;break;case 80:n.popTry(),n.state=84,n.finallyFallThrough=88;break
;case 83:n.popTry(),n.maybeUncatchable(),ue=n.storedException,n.state=89;break
;case 89:m=!0,v=ue,n.state=84,n.finallyFallThrough=88;break;case 84:
n.popTry(),n.state=95;break;case 95:try{h||null==w.return||w.return()}finally{
if(m)throw v}n.state=93;break;case 88:n.state=a.length>0?103:102;break;case 103:
F=[],a.forEach(function(r){var n=null,a=null,i="Untitled",s=r.primary
;if(r.entry){var o=b(r.entry),l=f(r.entry).toLowerCase()
;i=o+"."+("svgz"===l||"html"===l?l:"svg")}var u=function(){
n=e["#tabs"].openTab(),
n.id=e._createUniqueTabID(),n.href="#"+n.id.replace("tab","editor"),
n.label=i,n.disabled=!0,r.unsavedArtwork&&(n.edited=!0)},c=function(i){
return new Promise(function(s){return $traceurRuntime.asyncWrap(function(o){
for(;;)switch(o.state){case 0:
a=t("bx-editor"),a.id=n.id.replace("tab","editor"),
a.disabled=!0,e["#editors"].append(a),i&&e._toggleEditor(a.id),o.state=4;break
;case 4:
return void Promise.resolve(a.init(r.unsavedArtwork,r.entry)).then(o.createCallback(2),o.errback)
;case 2:n.disabled=!1,s(a),o.state=-2;break;default:return o.end()}},this)})}
;F.push({primary:s,createTab:u,createEditor:c})}),N=F.find(function(e){
return e.primary})||F[F.length-1],U=F.filter(function(e){return e!==N
}),q=!0,H=!1,Z=void 0;try{
for(V=void 0,G=F[Symbol.iterator]();!(q=(V=G.next()).done);q=!0)K=V.value,
K.createTab()}catch(e){H=!0,Z=e}finally{try{q||null==G.return||G.return()
}finally{if(H)throw Z}}n.state=104;break;case 104:
return void Promise.resolve(N.createEditor(!0)).then(n.createCallback(100),n.errback)
;case 100:return void Promise.resolve(Promise.all(U.map(function(e){
return e.createEditor(!1)}))).then(n.createCallback(102),n.errback);case 102:
ce=e.getConfig,de=ce.call(e,"!bx-masterbody:isSubsequentLaunch"),n.state=110
;break;case 110:
return void Promise.resolve(de).then(n.createCallback(108),n.errback);case 108:
he=n.value,n.state=107;break;case 107:be=he||!1,X=be,n.state=112;break;case 112:
n.state=!1===X?115:114;break;case 115:
e.setConfig("!bx-masterbody:isSubsequentLaunch",!0),n.state=116;break;case 116:
return void Promise.resolve(e._openEditorWidthDefaultArtwork()).then(n.createCallback(114),n.errback)
;case 114:
e._restoringSession=!1,d.length>0&&e._storeSessionDebounced(),r(),n.state=-2
;break;case 33:case 93:n.state=n.finallyFallThrough;break;case 71:
switch(n.finallyFallThrough){case 97:case 86:case 82:case 77:case 78:case 79:
case 75:case 64:case 60:case 52:case 56:case 57:case 50:case 42:case 43:case 41:
case 40:case 46:case 45:case 53:case 54:case 58:case 61:case 67:case 62:case 73:
case 71:case 66:case 80:case 83:case 89:
n.state=n.finallyFallThrough,n.finallyFallThrough=-1;break;default:n.state=84}
break;default:return n.end()}},this)})},_getLaunchEntries:function(){var e=this
;return new Promise(function(t){var r=[]
;e.postMessage("background","getRetainedLaunchEntries",null,function(e){
var n,a,i,s,o,l,u,c;return $traceurRuntime.asyncWrap(function(d){
for(;;)switch(d.state){case 0:n=!0,a=!1,i=void 0,d.state=25;break;case 25:
d.pushTry(11,12),d.state=14;break;case 14:
s=void 0,o=e[Symbol.iterator](),d.state=10;break;case 10:
d.state=(n=(s=o.next()).done)?8:6;break;case 5:n=!0,d.state=10;break;case 6:
l=s.value,d.state=7;break;case 7:
return void Promise.resolve(p(l)).then(d.createCallback(3),d.errback);case 3:
u=d.value,d.state=2;break;case 2:u&&r.push(u),d.state=5;break;case 8:d.popTry(),
d.state=12,d.finallyFallThrough=16;break;case 11:
d.popTry(),d.maybeUncatchable(),c=d.storedException,d.state=17;break;case 17:
a=!0,i=c,d.state=12,d.finallyFallThrough=16;break;case 12:d.popTry(),d.state=23
;break;case 23:try{n||null==o.return||o.return()}finally{if(a)throw i}d.state=21
;break;case 16:t(r),d.state=-2;break;case 21:d.state=d.finallyFallThrough;break
;default:return d.end()}},this)})})},_openRateOnChromeWebStorePage:function(){
chrome.browser.openTab({
url:"https://chrome.google.com/webstore/detail/boxy-svg/gaoogdonmngmdlbinmiclicjpbjhgomg/reviews"
})},_openSupportPage:function(){chrome.browser.openTab({
url:"https://chrome.google.com/webstore/detail/boxy-svg/gaoogdonmngmdlbinmiclicjpbjhgomg/support"
})},_dbOpen:function(){return new Promise(function(e){
var t=indexedDB.open("bx-masterbody",1)
;t.addEventListener("upgradeneeded",function(e){var t=e.target.result
;!1===t.objectStoreNames.contains("recent")&&t.createObjectStore("recent"),
!1===t.objectStoreNames.contains("session")&&t.createObjectStore("session")
}),t.onsuccess=function(t){return e(t.target.result)},t.onerror=function(e){
return reject(e.target.result)}})},_dbGetRecent:function(){var e=this
;return new Promise(function(t,r){
var n=e._db.transaction(["recent"],"readonly").objectStore("recent").getAll()
;n.onsuccess=function(e){return t(e.target.result)},n.onerror=function(e){
return r(e.target.result)}})},_dbSetRecent:function(e){var t=this
;return new Promise(function(r,n){var a
;return $traceurRuntime.asyncWrap(function(i){for(;;)switch(i.state){case 0:
return void Promise.resolve(t._dbClearRecent()).then(i.createCallback(2),i.errback)
;case 2:a=e.map(function(e,r){return new Promise(function(n,a){
var i=t._db.transaction(["recent"],"readwrite").objectStore("recent").add(e,r)
;i.onsuccess=function(e){return n(e.target.result)},i.onerror=function(e){
return a(e.target.result)}})}),Promise.all(a).then(r,n),i.state=-2;break
;default:return i.end()}},this)})},_dbClearRecent:function(){var e=this
;return new Promise(function(t,r){
var n=e._db.transaction(["recent"],"readwrite").objectStore("recent").clear()
;n.onsuccess=function(e){return t(e.target.result)},n.onerror=function(e){
return r(e.target.result)}})},_dbGetSession:function(){var e=this
;return new Promise(function(t,r){var n
;return $traceurRuntime.asyncWrap(function(a){for(;;)switch(a.state){case 0:
n=e._db.transaction(["session"],"readonly").objectStore("session").getAll(),
n.onsuccess=function(e){return t(e.target.result)},n.onerror=function(e){
return r(e.target.result)},a.state=-2;break;default:return a.end()}},this)})},
_dbSetSession:function(e){var t=this;return new Promise(function(r,n){var a
;return $traceurRuntime.asyncWrap(function(i){for(;;)switch(i.state){case 0:
return void Promise.resolve(t._dbClearSession()).then(i.createCallback(2),i.errback)
;case 2:a=e.map(function(e,r){return new Promise(function(n,a){
var i=t._db.transaction(["session"],"readwrite").objectStore("session").add(e,r)
;i.onsuccess=function(e){return n(e.target.result)},i.onerror=function(e){
return a(e.target.result)}})}),Promise.all(a).then(r,n),i.state=-2;break
;default:return i.end()}},this)})},_dbClearSession:function(){var e=this
;return new Promise(function(t,r){
var n=e._db.transaction(["session"],"readwrite").objectStore("session").clear()
;n.onsuccess=function(e){return t(e.target.result)},n.onerror=function(e){
return r(e.target.result)}})}},{},e)
}(HTMLBodyElement),y=r("body","bx-masterbody",k);return{get default(){return y}}
}),$traceurRuntime.registerModule("elements/bx-menu",[],function(){"use strict"
;$traceurRuntime.getModule($traceurRuntime.normalizeModuleName("./bx-menuitem","elements/bx-menu"))
;var e=$traceurRuntime.getModule($traceurRuntime.normalizeModuleName("../utils/element","elements/bx-menu")).registerElement,t=$traceurRuntime.getModule($traceurRuntime.normalizeModuleName("../utils/time","elements/bx-menu")).sleep,r=function(e){
function r(){$traceurRuntime.superConstructor(r).apply(this,arguments)}
return $traceurRuntime.createClass(r,{createdCallback:function(){var e=this
;this._pointerLocs=[],
this._pointerInsideMenuBlock=!1,this._shadowRoot=this.createShadowRoot({
mode:"closed"
}),this._shadowRoot.innerHTML='\n  <style>\n    @import url("stylesheets/scrollbars.css");\n    @import url("stylesheets/bx-menu.css");\n  </style>\n\n  <main id="main">\n    <content id="content"></content>\n  </main>\n'
;var t=!0,r=!1,n=void 0;try{
for(var a=void 0,i=this._shadowRoot.querySelectorAll("[id]")[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){
var s=a.value;this["#"+s.id]=s}}catch(e){r=!0,n=e}finally{try{
t||null==i.return||i.return()}finally{if(r)throw n}}
this["#main"].addEventListener("pointermove",function(t){
return e._onPointerMove(t)}),this.addEventListener("pointerover",function(t){
return e._onPointerOver(t)}),this.addEventListener("pointerout",function(t){
return e._onPointerOut(t)}),this.addEventListener("click",function(t){
return e._onClick(t)})},menuWillShow:function(){return Promise.resolve()},
menuItemWillTrigger:function(e){return Promise.resolve()},get label(){
return this.hasAttribute("label")?this.getAttribute("label"):""},set label(e){
this.setAttribute("label",e)},get opened(){return this.hasAttribute("opened")},
get items(){var e=[],t=!0,r=!1,n=void 0;try{
for(var a=void 0,i=this.children[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){
var s=a.value;if("content"===s.localName){var o=!0,l=!1,u=void 0;try{
for(var c=void 0,d=s.getDistributedNodes()[Symbol.iterator]();!(o=(c=d.next()).done);o=!0){
var h=c.value;"bx-menuitem"!==h.localName&&"hr"!==h.localName||e.push(h)}
}catch(e){l=!0,u=e}finally{try{o||null==d.return||d.return()}finally{
if(l)throw u}}}else"bx-menuitem"!==s.localName&&"hr"!==s.localName||e.push(s)}
}catch(e){r=!0,n=e}finally{try{t||null==i.return||i.return()}finally{
if(r)throw n}}return e},openBelowElement:function(e){var t,r,n,a=arguments
;return $traceurRuntime.asyncWrap(function(i){for(;;)switch(i.state){case 0:
t=void 0!==a[1]?a[1]:0,i.state=4;break;case 4:
return void Promise.resolve(this.menuWillShow()).then(i.createCallback(2),i.errback)
;case 2:
this.setAttribute("opened",""),r=e.getBoundingClientRect(),this.style.height=null,
this.style.top=r.top+r.height+t+"px",
this.style.left=r.left+"px",n=this.getBoundingClientRect(),
n.left+n.width>window.innerWidth&&(this.style.left=r.left+r.width-n.width+"px"),
n.top+n.height+t+5>window.innerHeight&&(this.style.height=window.innerHeight-(r.top+r.height+t)-10+"px"),
this.dispatchEvent(new CustomEvent("menuopen",{bubbles:!0,detail:this
})),i.state=-2;break;default:return i.end()}},this)},
openNextToElement:function(e){var t,r,n,a,i=arguments
;return $traceurRuntime.asyncWrap(function(s){for(;;)switch(s.state){case 0:
t=void 0!==i[1]?i[1]:0,s.state=4;break;case 4:
return void Promise.resolve(this.menuWillShow()).then(s.createCallback(2),s.errback)
;case 2:
this.setAttribute("opened",""),r=e.getBoundingClientRect(),this.style.height=null,
this.style.top=r.top+"px",
this.style.left=r.left+r.width+t+"px",n=this.getBoundingClientRect(),
n.left+n.width+t>window.innerWidth&&(this.style.left=r.left-n.width-t+"px",
n=this.getBoundingClientRect()),
n.top+n.height+5>window.innerHeight&&(a=window.innerHeight-(n.top+n.height)-5,
this.style.top=r.top+a+"px",
n=this.getBoundingClientRect(),n.top<0&&(this.style.top="5px",
this.style.height=window.innerHeight-10+"px")),
this.dispatchEvent(new CustomEvent("menuopen",{bubbles:!0,detail:this
})),s.state=-2;break;default:return s.end()}},this)},
openAtPosition:function(e,t){var r,n
;return $traceurRuntime.asyncWrap(function(a){for(;;)switch(a.state){case 0:
return void Promise.resolve(this.menuWillShow()).then(a.createCallback(2),a.errback)
;case 2:
this.setAttribute("opened",""),this.style.height=null,this.style.left=e+"px",
this.style.top=t+"px",
r=this.getBoundingClientRect(),r.left+r.width>window.innerWidth&&(this.style.left=e-r.width+"px",
r=this.getBoundingClientRect()),
r.top+r.height+5>window.innerHeight&&(n=window.innerHeight-(r.top+r.height)-5,
this.style.top=t+n+"px",
r=this.getBoundingClientRect(),r.top<0&&(this.style.top="5px",
this.style.height=window.innerHeight-10+"px")),
this.dispatchEvent(new CustomEvent("menuopen",{bubbles:!0,detail:this
})),a.state=-2;break;default:return a.end()}},this)},close:function(){
var e=!0,t=!1,r=void 0;try{
for(var n=void 0,a=this.items[Symbol.iterator]();!(e=(n=a.next()).done);e=!0){
var i=n.value;i.highlighted&&(i.highlighted=!1)}}catch(e){t=!0,r=e}finally{try{
e||null==a.return||a.return()}finally{if(t)throw r}}
this.style.left=null,this.style.top=null,
this.removeAttribute("opened"),this._openedSubmenu&&(this._openedSubmenu.close(),
this._openedSubmenu=null),this.dispatchEvent(new CustomEvent("menuclose",{
bubbles:!0,detail:this}))},triggerItem:function(e){var r=this
;return new Promise(function(n){var a,i,s,o,l,u
;return $traceurRuntime.asyncWrap(function(c){for(;;)switch(c.state){case 0:
return void Promise.resolve(r.menuItemWillTrigger(e)).then(c.createCallback(2),c.errback)
;case 2:c.state=!1===e.disabled&&0===e.childElementCount?13:16;break;case 13:
c.state=r.opened?7:12;break;case 7:a=!0,i=!1,s=void 0;try{
for(o=void 0,l=r.items[Symbol.iterator]();!(a=(o=l.next()).done);a=!0)u=o.value,
u.highlighted&&(u.highlighted=!1)}catch(e){i=!0,s=e}finally{try{
a||null==l.return||l.return()}finally{if(i)throw s}}r._willClose=!0,c.state=8
;break;case 8:
return void Promise.resolve(t(100)).then(c.createCallback(4),c.errback);case 4:
e.highlighted=!0,c.state=10;break;case 10:
return void Promise.resolve(t(100)).then(c.createCallback(6),c.errback);case 6:
e.highlighted=!1,r._willClose=!1,r.close(),c.state=12;break;case 12:
r.dispatchEvent(new CustomEvent("menuitemtrigger",{bubbles:!0,detail:e
})),n(),c.state=-2;break;case 16:n(),c.state=-2;break;default:return c.end()}
},this)})},highlightItem:function(e){var r,n
;return $traceurRuntime.asyncWrap(function(a){for(;;)switch(a.state){case 0:
a.state=this._willClose?1:3;break;case 1:a.returnValue=void 0,a.state=2;break
;case 2:a.state=-2;break;case 3:r=this.items.find(function(e){
return!0===e.highlighted}),a.state=21;break;case 21:a.state=r?10:7;break
;case 10:a.state=r===e?5:8;break;case 5:a.returnValue=void 0,a.state=6;break
;case 6:a.state=-2;break;case 8:r.highlighted=!1,a.state=7;break;case 7:
this._openedSubmenu&&(this._openedSubmenu.close(),
this._openedSubmenu=null),a.state=23;break;case 23:
a.state=e&&!1===e.disabled?17:-2;break;case 17:
n=e.children[0]&&"bx-menu"===e.children[0].localName?e.children[0]:null,
e.highlighted=!0,a.state=18;break;case 18:a.state=n?12:-2;break;case 12:
return void Promise.resolve(t(100)).then(a.createCallback(13),a.errback)
;case 13:
e.highlighted&&e.highlighted&&(this._openedSubmenu=n,n.openNextToElement(e,0)),
a.state=-2;break;default:return a.end()}},this)},
highlightPreviousItem:function(){
var e=void 0!==arguments[0]?arguments[0]:null,t=this.items
;if(null===e&&(e=t.find(function(e){return!0===e.highlighted
})),e)for(var r=t.indexOf(e)-1;r>=0;r-=1){var n=t[r]
;if(!1===n.disabled&&!1===n.hidden&&"bx-menuitem"===n.localName)return this.highlightItem(n),
void n.scrollIntoViewIfNeeded()}for(var a=t.length-1;a>=0;a-=1){var i=t[a]
;if(!1===i.disabled&&!1===i.hidden&&"bx-menuitem"===i.localName&&i!==e)return this.highlightItem(i),
void i.scrollIntoViewIfNeeded()}},highlightNextItem:function(){
var e=void 0!==arguments[0]?arguments[0]:null,t=this.items
;if(null===e&&(e=t.find(function(e){return!0===e.highlighted
})),e)for(var r=t.indexOf(e)+1;r<t.length;r+=1){var n=t[r]
;if(!1===n.disabled&&!1===n.hidden&&"bx-menuitem"===n.localName)return this.highlightItem(n),
void n.scrollIntoViewIfNeeded()}for(var a=0;a<t.length;a+=1){var i=t[a]
;if(!1===i.disabled&&!1===i.hidden&&"bx-menuitem"===i.localName&&i!==e)return this.highlightItem(i),
void i.scrollIntoViewIfNeeded()}},_onPointerMove:function(e){
this._pointerLocs.push({x:e.pageX,y:e.pageY
}),this._pointerLocs.length>3&&this._pointerLocs.shift()},
_onPointerOver:function(e){
e.target===this||e.target.parentElement===this||this.items.includes(e.target)?(!1===this._pointerInsideMenuBlock&&(this._pointerInsideMenuBlock=!0),
"bx-menuitem"===e.target.localName&&this._onMenuItemPointerEnter(e.target)):!0===this._pointerInsideMenuBlock&&(this._pointerInsideMenuBlock=!1,
this._onMenuBlockPointerLeave())},_onPointerOut:function(e){
e.relatedTarget&&(e.relatedTarget===this||this.items.includes(e.relatedTarget))||!0===this._pointerInsideMenuBlock&&(this._pointerInsideMenuBlock=!1,
this._onMenuBlockPointerLeave())},_onClick:function(e){
if(0===e.button&&"bx-menuitem"===e.target.localName&&(e.target.parentElement===this||this.items.includes(e.target))){
var t=e.target;this.triggerItem(t)}},_onMenuItemPointerEnter:function(e){
this._timeoutID&&clearTimeout(this._timeoutID),this._highlightItemWithDelay(e)},
_onMenuBlockPointerLeave:function(){
this._timeoutID&&clearTimeout(this._timeoutID)
;var e=this.items.find(function(e){return!0===e.highlighted});if(e){
var t=e.children[0];t&&!1!==t.opened||(e.highlighted=!1)}},
_highlightItemWithDelay:function(e){var t=this,r=this._getHighlightDelay()
;r?this._timeoutID=setTimeout(function(){t._highlightItemWithDelay(e)
},r):this.highlightItem(e)},_getHighlightDelay:function(){
var e=this._pointerLocs[this._pointerLocs.length-1],t=this._pointerLocs[0]
;if(!this._openedSubmenu)return 0;if(!e)return 0;t||(t=e)
;var r=this.getBoundingClientRect(),n={x:r.left,y:r.top-75},a={x:r.left+r.width,
y:n.y},i={x:r.left,y:r.top+r.height+75},s={x:r.left+r.width,y:i.y}
;if(t.x<r.left||t.x>s.x||t.y<r.top||t.y>s.y)return 0
;if(this._lastDelayLoc&&e.x==this._lastDelayLoc.x&&e.y==this._lastDelayLoc.y)return 0
;var o=a,l=s,u=function(e,t){return(t.y-e.y)/(t.x-e.x)
},c=u(e,o),d=u(e,l),h=u(t,o),b=u(t,l)
;return c<h&&d>b?(this._lastDelayLoc=e,300):(this._lastDelayLoc=null,0)}},{},e)
}(HTMLElement),n=e("bx-menu",r);return{get default(){return n}}
}),$traceurRuntime.registerModule("elements/bx-menubar",[],function(){
"use strict"
;var e=$traceurRuntime.getModule($traceurRuntime.normalizeModuleName("../utils/element","elements/bx-menubar")),t=e.createElement,r=e.registerElement,n=e.getClosestShadowRoot,a=($traceurRuntime.getModule($traceurRuntime.normalizeModuleName("../utils/filesystem","elements/bx-menubar")).restoreEntry,
$traceurRuntime.getModule($traceurRuntime.normalizeModuleName("../utils/time","elements/bx-menubar")).sleep),i=$traceurRuntime.getModule($traceurRuntime.normalizeModuleName("../classes/shortcut","elements/bx-menubar")).default
;$traceurRuntime.getModule($traceurRuntime.normalizeModuleName("./bx-menu","elements/bx-menubar"))
;var s={childList:!0,attributes:!0,characterData:!1,subtree:!0,
attributeFilter:["hidden"],attributeOldValue:!1,characterDataOldValue:!1
},o=function(e){function r(){
$traceurRuntime.superConstructor(r).apply(this,arguments)}
return $traceurRuntime.createClass(r,{createdCallback:function(){var e=this
;this.tabIndex=0,
this._highlightedStripItem=null,this._shadowRoot=this.createShadowRoot({
mode:"closed"
}),this._shadowRoot.innerHTML='\n  <style>@import url("stylesheets/bx-menubar.css");</style>\n\n  <div id="overlay" hidden></div>\n  <ul id="strip"></ul>\n\n  <div id="menus">\n    <content></content>\n  </div>\n'
;var t=!0,r=!1,n=void 0;try{
for(var a=void 0,i=this._shadowRoot.querySelectorAll("[id]")[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){
var o=a.value;this["#"+o.id]=o}}catch(e){r=!0,n=e}finally{try{
t||null==i.return||i.return()}finally{if(r)throw n}}
$traceurRuntime.spread(this.querySelectorAll("bx-menu")).forEach(function(t){
t.menuWillShow=function(){return e.menuWillShow(t)
},t.menuItemWillTrigger=function(t){return e.menuItemWillTrigger(t)}
}),new MutationObserver(function(t){return e._onChildrenMutation(t)
}).observe(this,s),this.addEventListener("keydown",function(t){
return e._onKeyDown(t)}),this.addEventListener("menuitemtrigger",function(t){
return e._onMenuItemTrigger(t)
}),this["#strip"].addEventListener("pointerdown",function(t){
return e._onStripPointerDown(t)
}),this["#strip"].addEventListener("pointerover",function(t){
return e._onStripPointerOver(t)
}),this["#overlay"].addEventListener("pointerdown",function(t){
return e._onOverlayPointerDown(t)}),this._updateStrip()},
attachedCallback:function(){var e=this
;window.addEventListener("blur",this._windowBlurListener=function(t){
return e._onWindowBlur(t)
}),window.addEventListener("resize",this._windowResizeListener=function(t){
return e._onWindowResize(t)})},detachedCallback:function(){
window.removeEventListener("blur",this._windowBlurListener),
window.removeEventListener("resize",this._windowResizeListener)},get disabled(){
return this.hasAttribute("disabled")},set disabled(e){
!0===e?this.setAttribute("disabled",""):this.removeAttribute("disabled")},
menuWillShow:function(e){return Promise.resolve()},
menuItemWillTrigger:function(e){return Promise.resolve()},
_onChildrenMutation:function(e){var t=!0,r=!1,n=void 0;try{
for(var a=void 0,i=e[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){
var s=a.value
;s.target!==this&&s.target.parentElement!==this||this._updateStrip()}}catch(e){
r=!0,n=e}finally{try{t||null==i.return||i.return()}finally{if(r)throw n}}},
_onMenuItemTrigger:function(e){this._collapse()
;var t=e.target,r=$traceurRuntime.spread(this.children).find(function(e){
return e.contains(t)
}),n=$traceurRuntime.spread(this["#strip"].children).find(function(e){
return e.menu===r})
;n&&!1===n.hasAttribute("highlighted")&&(n.setAttribute("highlighted",""),
a(150).then(function(){return n.removeAttribute("highlighted")}))},
_onStripPointerDown:function(e){
this._highlightedStripItem&&e.target===this["#strip"]&&this._collapse(),
0===e.button&&(e.target===this["#strip"]?(e.preventDefault(),
this._onStripEmptySpaceDragStart(e)):this._onStripItemPointerDown(e.target))},
_onStripEmptySpaceDragStart:function(e){
var t,r,n=chrome.app.window.current().getBounds()
;window.addEventListener("pointermove",t=function(t){
var r=t.screenX-e.screenX,a=t.screenY-e.screenY
;chrome.app.window.current().setBounds({left:n.left+r,top:n.top+a,width:n.width,
height:n.height})}),window.addEventListener("pointerup",r=function(e){
window.removeEventListener("pointermove",t),
window.removeEventListener("pointerup",r)})},_onStripPointerOver:function(e){
e.target!==this["#strip"]&&this._onStripItemPointerEnter(e.target)},
_onStripItemPointerDown:function(e){
this._highlightedStripItem===e?(event.preventDefault(),
this._collapse()):this._expand(e)},_onStripItemPointerEnter:function(e){
this._highlightedStripItem&&this._highlightedStripItem!==e&&this._expand(e)},
_onOverlayPointerDown:function(e){
this._collapse(),e.preventDefault(),e.stopPropagation()},
_onWindowBlur:function(e){this._collapse()},_onWindowResize:function(e){
this._collapse()},_onKeyDown:function(e){if(!this.disabled){
var t=i.fromEvent(e),r=t.ctrl||t.alt||t.meta||t.shift,a=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Enter","Esc"],s=a.includes(t.base)&&!1===r?t.base:null
;if(this._expaned&&s){
var o=$traceurRuntime.spread(this.querySelectorAll("bx-menuitem[highlighted]")),l=o.length>0?o[o.length-1]:null,u=this.querySelectorAll("bx-menu[opened]")
;if(e.preventDefault(),e.stopImmediatePropagation(),"ArrowUp"===s)if(l){
var c=l.parentElement;c.highlightPreviousItem()}else{
var d=u.length>0?u[u.length-1]:null;d&&d.highlightPreviousItem()
}else if("ArrowDown"===s)if(l){var h=l.parentElement;h.highlightNextItem()}else{
var b=u.length>0?u[u.length-1]:null;b&&b.highlightNextItem()
}else if("ArrowRight"===s){var m=l?l.querySelector("bx-menu"):null;if(m){
var f=m.getBoundingClientRect(),v=l.getBoundingClientRect(),g=f.x+f.width/2,p=v.y+v.height/2,_=n(this).elementFromPoint(g,p)
;if(_.disabled)for(var w=_.nextElementSibling;w;w=w.nextElementSibling)if("bx-menuitem"===w.localName&&!1===w.disabled&&!1===w.hidden){
_=w;break}
if(_.disabled)for(var k=m.children[0];k;k=k.nextElementSibling)if("bx-menuitem"===k.localName&&!1===k.disabled&&!1===k.hidden){
_=k;break}_.disabled?this._expandNext():m.highlightItem(_)
}else this._expandNext()}else if("ArrowLeft"===s){
var y=u.length>0?u[u.length-1]:null
;y.parentElement!==this&&y.querySelector("bx-menuitem[highlighted]")?y.highlightItem(null):this._expandPrevious()
}else if("Enter"===s)if(l){if(!l.querySelector("bx-menu")){var x=l.parentElement
;x.triggerItem(l)}}else this._collapse();else"Esc"===s&&this._collapse()
}else this.triggerItemForShortcut(t),e.stopPropagation()}},
triggerItemForShortcut:function(e){
var t=$traceurRuntime.spread(this.querySelectorAll("bx-menuitem"))
;t=t.filter(function(e){
return!1===e.matches("bx-menuitem[hidden], *[hidden] bx-menuitem")})
;var r=t.find(function(t){var r=t.userShortcut||t.shortcut||null
;return!!r&&r.compare(e)});if(r){
(r.parentElement===this?this["#root-menu"]:r.parentElement).triggerItem(r)}},
_expand:function(e){return $traceurRuntime.asyncWrap(function(t){
for(;;)switch(t.state){case 0:
this._highlightedStripItem&&(this._highlightedStripItem.removeAttribute("highlighted"),
this._highlightedStripItem.menu.close()),
this["#overlay"].hidden=!1,e.menu.openBelowElement(e),
e.setAttribute("highlighted",""),
this._highlightedStripItem=e,this._expaned=!0,t.state=-2;break;default:
return t.end()}},this)},_expandNext:function(){
var e=this.querySelectorAll("bx-menu[opened]");if(e.length>0){
for(var t=e[0],r=$traceurRuntime.spread(this["#strip"].children).find(function(e){
return e.menu===t
}),n=r.nextElementSibling;n;n=n.nextElementSibling)if(!1===n.disabled&&!1===n.hidden)return void this._expand(n)
;for(var a=this["#strip"].firstElementChild;a;a=a.nextElementSibling)if(!1===a.disabled&&!1===a.hidden&&a!==r)return void this._expand(a)
}},_expandPrevious:function(){var e=this.querySelectorAll("bx-menu[opened]")
;if(e.length>0){
for(var t=e[0],r=$traceurRuntime.spread(this["#strip"].children).find(function(e){
return e.menu===t
}),n=r.previousElementSibling;n;n=n.previousElementSibling)if(!1===n.disabled&&!1===n.hidden)return void this._expand(n)
;for(var a=this["#strip"].lastElementChild;a;a=a.previousElementSibling)if(!1===a.disabled&&!1===a.hidden&&a!==r)return void this._expand(a)
}},_collapse:function(){
this.blur(),this._highlightedStripItem&&(this._highlightedStripItem.removeAttribute("highlighted"),
this._highlightedStripItem.menu.close(),
this._highlightedStripItem=null),this["#overlay"].hidden=!0,this._expaned=!1},
_updateStrip:function(){
if(this.childElementCount!==this["#strip"].childElementCount){
this["#strip"].innerHTML=""
;for(var e=0;e<this.childElementCount;e+=1)this["#strip"].append(t("li"))}
for(var r=0;r<this.childElementCount;r+=1)this["#strip"].children[r].textContent=this.children[r].getAttribute("label"),
this["#strip"].children[r].menu=this.children[r],
this["#strip"].children[r].hidden=this.children[r].hasAttribute("hidden")}
},{},e)}(HTMLElement),l=r("bx-menubar",o);return{get default(){return l}}
}),$traceurRuntime.registerModule("elements/bx-menuitem",[],function(){
"use strict"
;var e=$traceurRuntime.getModule($traceurRuntime.normalizeModuleName("../utils/element","elements/bx-menuitem")).registerElement,t=$traceurRuntime.getModule($traceurRuntime.normalizeModuleName("../classes/shortcut","elements/bx-menuitem")).default,r=function(e){
function r(){$traceurRuntime.superConstructor(r).apply(this,arguments)}
return $traceurRuntime.createClass(r,{createdCallback:function(){
this._shadowRoot=this.createShadowRoot({mode:"closed"
}),this._shadowRoot.innerHTML='\n  <style>@import url("stylesheets/bx-menuitem.css");</style>\n\n  <main>\n    <div id="state-icons">\n      <svg class="icon" id="selected-state-icon" viewBox="0 0 100 100" hidden>\n        <use href="images/icons.svg#circle" width="100" height="100"></use>\n      </svg>\n\n      <svg class="icon" id="toggled-state-icon" viewBox="0 0 100 100" hidden>\n        <use href="images/icons.svg#check-mark" width="100" height="100"></use>\n      </svg>\n    </div>\n\n    <div id="label"></div>\n    <div id="shortcut"></div>\n    <svg id="arrow-icon" viewBox="0 0 100 100"><use href="images/icons.svg#arrow-right" width="100" height="100"></use></svg>\n  </main>\n\n  <content select="bx-menu"></content>\n'
;var e=!0,t=!1,r=void 0;try{
for(var n=void 0,a=this._shadowRoot.querySelectorAll("[id]")[Symbol.iterator]();!(e=(n=a.next()).done);e=!0){
var i=n.value;this["#"+i.id]=i}}catch(e){t=!0,r=e}finally{try{
e||null==a.return||a.return()}finally{if(t)throw r}}var s=!0,o=!1,l=void 0;try{
for(var u=void 0,c=this.attributes[Symbol.iterator]();!(s=(u=c.next()).done);s=!0){
var d=u.value;this.attributeChangedCallback(d.name)}}catch(e){o=!0,l=e}finally{
try{s||null==c.return||c.return()}finally{if(o)throw l}}},
attributeChangedCallback:function(e){
"label"===e?this._onLabelAttributeChange():"state"===e?this._onStateAttributeChange():"shortcut"!==e&&"usershortcut"!==e||this._onShortcutAttributeChange()
},get label(){return this.hasAttribute("label")?this.getAttribute("label"):""},
set label(e){this.setAttribute("label",e)},get state(){
return this.hasAttribute("state")?this.getAttribute("state"):null},set state(e){
null===e?this.removeAttribute("state"):this.setAttribute("state",e)},
get commandID(){
return this.hasAttribute("commandid")?this.getAttribute("commandid"):""},
set commandID(e){this.setAttribute("commandid",e)},get shortcut(){
return this.hasAttribute("shortcut")?t.fromString(this.getAttribute("shortcut")):null
},set shortcut(e){
null===e?this.removeAttribute("shortcut"):this.setAttribute("shortcut",e.toString())
},get userShortcut(){
return this.hasAttribute("usershortcut")?t.fromString(this.getAttribute("usershortcut")):null
},set userShortcut(e){
null===e?this.removeAttribute("usershortcut"):this.setAttribute("usershortcut",e.toString())
},get highlighted(){return this.hasAttribute("highlighted")},set highlighted(e){
e?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")},
get disabled(){return this.hasAttribute("disabled")},set disabled(e){
e?this.setAttribute("disabled",""):this.removeAttribute("disabled")},
_onLabelAttributeChange:function(){this["#label"].textContent=this.label},
_onStateAttributeChange:function(){
"selected"===this.state?(this["#selected-state-icon"].removeAttribute("hidden"),
this["#toggled-state-icon"].setAttribute("hidden","")):"toggled"===this.state?(this["#selected-state-icon"].setAttribute("hidden",""),
this["#toggled-state-icon"].removeAttribute("hidden")):(this["#selected-state-icon"].setAttribute("hidden",""),
this["#toggled-state-icon"].setAttribute("hidden",""))},
_onShortcutAttributeChange:function(){
var e=this.userShortcut||this.shortcut||null
;this["#shortcut"].textContent=e?e.toDisplayString():""}},{},e)
}(HTMLElement),n=e("bx-menuitem",r);return{get default(){return n}}
}),$traceurRuntime.registerModule("elements/bx-messagebox",[],function(){
"use strict"
;$traceurRuntime.getModule($traceurRuntime.normalizeModuleName("./bx-button","elements/bx-messagebox"))
;var e=$traceurRuntime.getModule($traceurRuntime.normalizeModuleName("../utils/element","elements/bx-messagebox")),t=e.createElement,r=e.registerElement,n=$traceurRuntime.getModule($traceurRuntime.normalizeModuleName("../utils/time","elements/bx-messagebox")).sleep,a={
message:"Sample message",detail:"",buttons:["Confirm","Cancel"]},i=function(e){
function r(){$traceurRuntime.superConstructor(r).apply(this,arguments)}
return $traceurRuntime.createClass(r,{createdCallback:function(){var e=this
;this.tabIndex=1,this._shadowRoot=this.createShadowRoot({mode:"closed"
}),this._shadowRoot.innerHTML='\n  <style>@import url("stylesheets/bx-messagebox.css");</style>\n\n  <div id="inner">\n    <svg id="icon" viewBox="0 0 100 100">\n      <use href="images/icons.svg#warning" width="100" height="100"></use>\n    </svg>\n\n    <div id="headers">\n      <h1 id="message"></h1>\n      <h2 id="detail"></h2>\n    </div>\n  </div>\n\n  <div id="buttons"></div>\n'
;var t=!0,r=!1,n=void 0;try{
for(var a=void 0,i=this._shadowRoot.querySelectorAll("[id]")[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){
var s=a.value;this["#"+s.id]=s}}catch(e){r=!0,n=e}finally{try{
t||null==i.return||i.return()}finally{if(r)throw n}}
this["#buttons"].addEventListener("click",function(t){return e._onButtonClick(t)
}),this.addEventListener("keydown",function(t){return e._onKeyDown(t)})},
showModal:function(){var e,i,s,o,l,u,c=arguments
;return $traceurRuntime.asyncWrap(function(d){for(;;)switch(d.state){case 0:
for(e=void 0!==c[0]?c[0]:a,
i=e.message||a.message,s=e.detail||a.detail,o=e.buttons||a.buttons,
this["#message"].innerHTML=i,
this["#detail"].innerHTML=s,this["#buttons"].innerHTML="",
l=0;l<o.length;l+=1)u=t("bx-button"),
u.value=l,u.label=o[l],u.skin="bx-messagebox",this["#buttons"].append(u)
;this["#buttons"].lastElementChild&&this["#buttons"].lastElementChild.setAttribute("default",""),
d.state=4;break;case 4:
return void Promise.resolve(n(100)).then(d.createCallback(2),d.errback);case 2:
$traceurRuntime.superGet(this,r.prototype,"showModal").call(this),
this.focus(),d.state=-2;break;default:return d.end()}},this)},
_onButtonClick:function(e){var t,r;return $traceurRuntime.asyncWrap(function(a){
for(;;)switch(a.state){case 0:
a.state=0===e.button&&"bx-button"===e.target.localName?3:-2;break;case 3:
t=e.target,r=e.target.value,t.style.pointerEvents="none",a.state=4;break;case 4:
return void Promise.resolve(n(200)).then(a.createCallback(2),a.errback);case 2:
delete t.style.pointerEvents,this.close(r),a.state=-2;break;default:
return a.end()}},this)},_onKeyDown:function(e){if(13===e.keyCode){
var t=this["#buttons"].lastElementChild?this["#buttons"].lastElementChild.value:null
;this.close(t)}else 27===e.keyCode&&(e.preventDefault(),this.close("cancel"))}
},{},e)}(HTMLDialogElement),s=r("dialog","bx-messagebox",i);return{
get default(){return s}}
}),$traceurRuntime.registerModule("elements/bx-tab",[],function(){"use strict"
;$traceurRuntime.getModule($traceurRuntime.normalizeModuleName("./bx-button","elements/bx-tab"))
;var e=$traceurRuntime.getModule($traceurRuntime.normalizeModuleName("../utils/element","elements/bx-tab")).registerElement,t=function(e){
function t(){$traceurRuntime.superConstructor(t).apply(this,arguments)}
return $traceurRuntime.createClass(t,{createdCallback:function(){var e=this
;this._shadowRoot=this.createShadowRoot({mode:"closed"
}),this._shadowRoot.innerHTML='\n  <style>@import url("stylesheets/bx-tab.css");</style>\n\n  <main>\n    <div id="label"></div>\n    <bx-button id="close-button" icon="close" skin="bx-tabs"></bx-button>\n  </main>\n'
;var t=!0,r=!1,n=void 0;try{
for(var a=void 0,i=this._shadowRoot.querySelectorAll("[id]")[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){
var s=a.value;this["#"+s.id]=s}}catch(e){r=!0,n=e}finally{try{
t||null==i.return||i.return()}finally{if(r)throw n}}var o=!0,l=!1,u=void 0;try{
for(var c=void 0,d=this.attributes[Symbol.iterator]();!(o=(c=d.next()).done);o=!0){
var h=c.value;this.attributeChangedCallback(h.name)}}catch(e){l=!0,u=e}finally{
try{o||null==d.return||d.return()}finally{if(l)throw u}}
this._shadowRoot.addEventListener("pointerdown",function(t){
return e._onShadowRootPointerDown(t)
}),this["#close-button"].addEventListener("click",function(t){
return e._onCloseButtonClick(t)})},attachedCallback:function(){
this.dispatchEvent(new CustomEvent("tabopen",{bubbles:!0,detail:this}))},
detachedCallback:function(){this.dispatchEvent(new CustomEvent("tabclose",{
bubbles:!0,detail:this}))},attributeChangedCallback:function(e){
"label"===e?this._onLabelChange():"edited"===e?this._onEditedChange():"disabled"===e&&this._onDisabledChange()
},get label(){return this.hasAttribute("label")?this.getAttribute("label"):""},
set label(e){this.setAttribute("label",e)},get edited(){
return this.hasAttribute("edited")},set edited(e){
e?this.setAttribute("edited",""):this.removeAttribute("edited")},
get highlighted(){return this.hasAttribute("highlighted")},set highlighted(e){
e?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")},
get href(){return this.hasAttribute("href")?this.getAttribute("href"):""},
set href(e){e?this.setAttribute("href",e):this.removeAttribute("href")},
get disabled(){return this.hasAttribute("disabled")},set disabled(e){
!0===e?this.setAttribute("disabled",""):this.removeAttribute("disabled")},
_onShadowRootPointerDown:function(e){
0===e.button&&e.target!==this["#close-button"]&&!1===this.disabled&&this.dispatchEvent(new CustomEvent("tabdown",{
bubbles:!0,detail:this}))},_onCloseButtonClick:function(e){
0===e.button&&this.dispatchEvent(new CustomEvent("tabcloseintent",{bubbles:!0,
detail:this}))},_onLabelChange:function(){this["#label"].textContent=this.label
},_onEditedChange:function(){
this["#close-button"].icon=this.edited?"close-edited":"close"},
_onDisabledChange:function(){this["#close-button"].disabled=this.disabled}
},{},e)}(HTMLElement),r=e("bx-tab",t);return{get default(){return r}}
}),$traceurRuntime.registerModule("elements/bx-tabs",[],function(){"use strict"
;$traceurRuntime.getModule($traceurRuntime.normalizeModuleName("./bx-button","elements/bx-tabs")),
$traceurRuntime.getModule($traceurRuntime.normalizeModuleName("./bx-tab","elements/bx-tabs"))
;var e=$traceurRuntime.getModule($traceurRuntime.normalizeModuleName("../utils/element","elements/bx-tabs")),t=e.createElement,r=e.registerElement,n=$traceurRuntime.getModule($traceurRuntime.normalizeModuleName("../utils/time","elements/bx-tabs")).sleep,a=Math.abs,i=Number,s=i.parseInt,o=(i.parseFloat,
function(e){function r(){
$traceurRuntime.superConstructor(r).apply(this,arguments)}
return $traceurRuntime.createClass(r,{createdCallback:function(){var e=this
;this._shadowRoot=this.createShadowRoot({mode:"closed"
}),this._shadowRoot.innerHTML='\n  <style>@import url("stylesheets/bx-tabs.css");</style>\n\n  <main>\n    <content></content>\n    <bx-button id="new-tab-button" skin="bx-tabs" icon="plus"></bx-button>\n  </main>\n'
;var t=!0,r=!1,n=void 0;try{
for(var a=void 0,i=this._shadowRoot.querySelectorAll("[id]")[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){
var s=a.value;this["#"+s.id]=s}}catch(e){r=!0,n=e}finally{try{
t||null==i.return||i.return()}finally{if(r)throw n}}
this.addEventListener("tabcloseintent",function(e){return e.stopPropagation()}),
this.addEventListener("tabdown",function(t){return e._onTabDown(t)
}),this._shadowRoot.addEventListener("pointerdown",function(t){
return e._onPointerDown(t)
}),this["#new-tab-button"].addEventListener("click",function(t){
return e._onNewTabButtonClick(t)})},get disabled(){
return this.hasAttribute("disabled")},set disabled(e){
!0===e?this.setAttribute("disabled",""):this.removeAttribute("disabled")},
openTab:function(){var e=t("bx-tab")
;return e.style.maxWidth="0px",e.style.order=this.childElementCount,
this.append(e),n(50).then(function(){return e.style.maxWidth=null}),e},
closeTab:function(e){var t=this;return new Promise(function(r){
var a,i,s,o,l,u,c,d,h,b,m,f,v,g,p;return $traceurRuntime.asyncWrap(function(_){
for(;;)switch(_.state){case 0:
if(a=t.querySelector("#"+e),i=a.getBoundingClientRect().width,
s=t._getSlotForTab(a),a.isClosing=!0,s<t.childElementCount-1){o=!0,l=!1,u=void 0
;try{
for(c=void 0,d=t.children[Symbol.iterator]();!(o=(c=d.next()).done);o=!0)h=c.value,
h.isClosing||(h.style.transition="none",h.style.maxWidth=i+"px")}catch(e){
l=!0,u=e}finally{try{o||null==d.return||d.return()}finally{if(l)throw u}}}
a.style.transition=null,
a.style.maxWidth="0px",a.style.pointerEvents="none",t._waitingForTabToClose=!0,
_.state=4;break;case 4:
return void Promise.resolve(n(300)).then(_.createCallback(2),_.errback);case 2:
a.remove(),
t._waitingForTabToClose=!1,delete a.isClosing,t._waitingForPointerMoveAfterClosingTab||(t._waitingForPointerMoveAfterClosingTab=!0,
v=null,g=null,p=function(){
window.removeEventListener("pointermove",b),window.removeEventListener("pointerout",m),
window.removeEventListener("blur",f),t._waitingForPointerMoveAfterClosingTab=!1
;var e=!0,n=!1,a=void 0;try{
for(var i=void 0,s=t.children[Symbol.iterator]();!(e=(i=s.next()).done);e=!0){
var o=i.value
;o.style.transition=null,o.style.maxWidth=null,o.style.order=t._getSlotForTab(o)
}}catch(e){n=!0,a=e}finally{try{e||null==s.return||s.return()}finally{
if(n)throw a}}r()},window.addEventListener("pointermove",b=function(e){
if(null===v&&null===g)return v=e.clientX,void(g=e.clientY)
;e.clientX>=v-3&&e.clientX<=v+3&&e.clientY>=g-3&&e.clientY<=g+3||p()
}),window.addEventListener("pointerout",m=function(e){null===e.toElement&&p()}),
window.addEventListener("blur",f=function(){p()})),_.state=-2;break;default:
return _.end()}},this)})},highlightTab:function(e){
var t=this.querySelector("bx-tab#"+e),r=this.querySelector("bx-tab[highlighted]")
;null===e?r&&(r.highlighted=!1):t&&t!==r&&(r&&(r.highlighted=!1),
t.highlighted=!0)},moveHighlightedTabLeft:function(){
var e=this.querySelector("bx-tab[highlighted]"),t=this._getSlotForTab(e),r=!0,n=!1,a=void 0
;try{
for(var i=void 0,o=this.children[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){
var l=i.value;l.style.order=this._getSlotForTab(l)}}catch(e){n=!0,a=e}finally{
try{r||null==o.return||o.return()}finally{if(n)throw a}}
if(0===s(e.style.order)){var u=!0,c=!1,d=void 0;try{
for(var h=void 0,b=this.children[Symbol.iterator]();!(u=(h=b.next()).done);u=!0){
var m=h.value;m.style.order=m===e?this.childElementCount-1:s(m.style.order)-1}
}catch(e){c=!0,d=e}finally{try{u||null==b.return||b.return()}finally{
if(c)throw d}}}else{var f=this._getTabForSlot(t-1)
;f.style.order=s(f.style.order)+1,e.style.order=s(e.style.order)-1}},
moveHighlightedTabRight:function(){
var e=this.querySelector("bx-tab[highlighted]"),t=this._getSlotForTab(e),r=!0,n=!1,a=void 0
;try{
for(var i=void 0,o=this.children[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){
var l=i.value;l.style.order=this._getSlotForTab(l)}}catch(e){n=!0,a=e}finally{
try{r||null==o.return||o.return()}finally{if(n)throw a}}
if(s(e.style.order)===this.childElementCount-1){var u=!0,c=!1,d=void 0;try{
for(var h=void 0,b=this.children[Symbol.iterator]();!(u=(h=b.next()).done);u=!0){
var m=h.value;m.style.order=m===e?0:s(m.style.order)+1}}catch(e){c=!0,d=e
}finally{try{u||null==b.return||b.return()}finally{if(c)throw d}}}else{
var f=this._getTabForSlot(t+1)
;f.style.order=s(f.style.order)-1,e.style.order=s(e.style.order)+1}},
getTabsByScreenPosition:function(){var e=Symbol(),t=!0,r=!1,n=void 0;try{
for(var a=void 0,i=this.children[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){
var s=a.value;s[e]=this._getSlotForTab(s)}}catch(e){r=!0,n=e}finally{try{
t||null==i.return||i.return()}finally{if(r)throw n}}
return $traceurRuntime.spread(this.children).sort(function(t,r){return t[e]>r[e]
})},_onPointerDown:function(e){
0===e.button&&("bx-tab"===e.target.localName?this._onTabPointerDown(e):"main"===e.target.localName&&this._onEmptySpaceDragStart(e))
},_onEmptySpaceDragStart:function(e){
var t,r,n=chrome.app.window.current().getBounds()
;window.addEventListener("pointermove",t=function(t){
var r=t.screenX-e.screenX,a=t.screenY-e.screenY
;chrome.app.window.current().setBounds({left:n.left+r,top:n.top+a,width:n.width,
height:n.height})}),window.addEventListener("pointerup",r=function(e){
window.removeEventListener("pointermove",t),
window.removeEventListener("pointerup",r)})},_onTabDown:function(e){
this._waitingForTabToClose?e.stopImmediatePropagation():e.stopPropagation()},
_onTabPointerDown:function(e){var t,r,n=this,i=e.target
;document.addEventListener("pointermove",t=function(s){
a(s.clientX-e.clientX)>1&&(document.removeEventListener("pointermove",t),
document.removeEventListener("pointerup",r),n._onTabDragStart(s,i))
}),document.addEventListener("pointerup",r=function(e){
document.removeEventListener("pointermove",t),
document.removeEventListener("pointerup",r)})},_onTabDragStart:function(e,t){
var r=this,a=t.getBoundingClientRect().width,i=this.getBoundingClientRect().width
;t.style.zIndex=999,this["#new-tab-button"].style.opacity="0"
;var s=Symbol(),o=Symbol(),l=Symbol(),u=!0,c=!1,d=void 0;try{
for(var h=void 0,b=this.children[Symbol.iterator]();!(u=(h=b.next()).done);u=!0){
var m=h.value,f=this._getSlotForTab(m)
;m[s]=f,m[o]=f,m[l]=m.getBoundingClientRect().left-1,
m!==t&&(m.style.transition="transform 0.15s ease-out")}}catch(e){c=!0,d=e
}finally{try{u||null==b.return||b.return()}finally{if(c)throw d}}
var v=function(e,n){
if(n>e+1)for(var i=e;i<n;i+=1)v(i,i+1);else if(n<e-1)for(var o=e;o>n;o-=1)v(o,o-1);else{
var u=!0,c=!1,d=void 0;try{
for(var h=void 0,b=r.children[Symbol.iterator]();!(u=(h=b.next()).done);u=!0){
var m=h.value;if(m!==t){m[s]===n&&(m[s]=e);for(var f=-m[l],g=0;g<m[s];g+=1)f+=a
;m.style.transform=0===f?null:"translate("+f+"px)"}}}catch(e){c=!0,d=e}finally{
try{u||null==b.return||b.return()}finally{if(c)throw d}}}},g=function(n){
var o=n.clientX-e.clientX
;o+t[l]<=0?o=-t[l]:o+t[l]+a>i&&(o=i-t[l]-a),t.style.transform="translate("+o+"px)"
;var u=r._getSlotForTab(t);if(u!==t[s]){var c=t[s];t[s]=u,v(c,t[s])}
},p=function(e){var i,u,c,d,h,b,m,f
;return $traceurRuntime.asyncWrap(function(e){for(;;)switch(e.state){case 0:
for(document.removeEventListener("pointermove",g),
document.removeEventListener("pointerup",p),i=-t[l],u=0;u<t[s];u+=1)i+=a
;t.style.transition="transform 0.15s ease-out",
t.style.transform="translate("+i+"px)",
t[o]!==t[s]&&r.dispatchEvent(new CustomEvent("tabslotchange",{detail:{tab:t,
slot:t[s]}})),e.state=4;break;case 4:
return void Promise.resolve(n(150)).then(e.createCallback(2),e.errback);case 2:
t.style.zIndex=null,r["#new-tab-button"].style.opacity=null,c=!0,d=!1,h=void 0
;try{
for(b=void 0,m=r.children[Symbol.iterator]();!(c=(b=m.next()).done);c=!0)f=b.value,
f.style.transition=null,f.style.transform=null,f.style.order=f[s]}catch(e){d=!0,
h=e}finally{try{c||null==m.return||m.return()}finally{if(d)throw h}}e.state=-2
;break;default:return e.end()}},this)};document.addEventListener("pointerup",p),
document.addEventListener("pointermove",g)},_onNewTabButtonClick:function(e){
0===e.button&&this.dispatchEvent(new CustomEvent("tabopenintent"))},
_getSlotForTab:function(e){var t=e.getBoundingClientRect()
;if(t.left<t.width/2)return 0;for(var r=t.width/2,n=1;n<50;n+=1){
if(t.left>=r&&t.left<r+t.width)return n>this.childElementCount-1?this.childElementCount-1:n
;r+=t.width}},_getTabForSlot:function(e){var t=!0,r=!1,n=void 0;try{
for(var a=void 0,i=this.children[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){
var s=a.value;if(this._getSlotForTab(s)===e)return s}}catch(e){r=!0,n=e}finally{
try{t||null==i.return||i.return()}finally{if(r)throw n}}return null}},{},e)
}(HTMLElement)),l=r("bx-tabs",o);return{get default(){return l}}
}),$traceurRuntime.registerModule("libs/pako",[],function(){"use strict"
;!function(e){
if("object"==("undefined"==typeof exports?"undefined":$traceurRuntime.typeof(exports)))module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{
var t
;"undefined"!=typeof window?t=window:"undefined"!=typeof global?t=global:"undefined"!=typeof self&&(t=self),
t.pako=e()}}(function(){return function e(t,r,n){function a(s,o){if(!r[s]){
if(!t[s]){var l="function"==typeof require&&require;if(!o&&l)return l(s,!0)
;if(i)return i(s,!0);throw new Error("Cannot find module '"+s+"'")}var u=r[s]={
exports:{}};t[s][0].call(u.exports,function(e){var r=t[s][1][e];return a(r||e)
},u,u.exports,e,t,r,n)}return r[s].exports}
for(var i="function"==typeof require&&require,s=0;s<n.length;s++)a(n[s])
;return a}({1:[function(e,t,r){
var n=e("./lib/zlib/utils").assign,a=e("./lib/deflate"),i=e("./lib/inflate"),s=e("./lib/zlib/constants"),o={}
;n(o,a,i,s),t.exports=o},{"./lib/deflate":2,"./lib/inflate":3,
"./lib/zlib/constants":5,"./lib/zlib/utils":13}],2:[function(e,t,r){
function n(e,t){var r=new c(t);if(r.push(e,!0),r.err)throw r.msg;return r.result
}function a(e,t){return t=t||{},t.raw=!0,n(e,t)}function i(e,t){
return t=t||{},t.gzip=!0,n(e,t)}
var s=e("./zlib/deflate.js"),o=e("./zlib/utils"),l=e("./zlib/messages"),u=e("./zlib/zstream"),c=function(e){
this.options=o.assign({level:-1,method:8,chunkSize:16384,windowBits:15,
memLevel:8,strategy:0},e||{});var t=this.options
;t.raw&&t.windowBits>0?t.windowBits=-t.windowBits:t.gzip&&t.windowBits>0&&t.windowBits<16&&(t.windowBits+=16),
this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new u
;var r=s.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy)
;if(0!==r)throw new Error(l[r])};c.prototype.push=function(e,t){
var r,n,a=this.strm,i=this.options.chunkSize;if(this.ended)return!1
;n=t===~~t?t:!0===t?4:0,
a.next_in=e,a.next_in_index=0,a.avail_in=a.next_in.length,
a.next_out=new o.Buf8(i);do{
if(a.avail_out=this.options.chunkSize,a.next_out_index=0,
1!==(r=s.deflate(a,n))&&0!==r)return this.onEnd(r),this.ended=!0,!1
;a.next_out_index&&(this.onData(o.shrinkBuf(a.next_out,a.next_out_index)),
(a.avail_in>0||0===a.avail_out)&&(a.next_out=new o.Buf8(this.options.chunkSize)))
}while(a.avail_in>0||0===a.avail_out)
;return 4!==n||(r=s.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,0===r)
},c.prototype.onData=function(e){this.chunks.push(e)
},c.prototype.onEnd=function(e){
0===e&&(this.result=o.flattenChunks(this.chunks)),
this.chunks=[],this.err=e,this.msg=this.strm.msg
},r.Deflate=c,r.deflate=n,r.deflateRaw=a,r.gzip=i},{"./zlib/deflate.js":7,
"./zlib/messages":11,"./zlib/utils":13,"./zlib/zstream":14}],3:[function(e,t,r){
function n(e,t){var r=new c(t);if(r.push(e,!0),r.err)throw r.msg;return r.result
}function a(e,t){return t=t||{},t.raw=!0,n(e,t)}
var i=e("./zlib/inflate.js"),s=e("./zlib/utils"),o=e("./zlib/constants"),l=e("./zlib/messages"),u=e("./zlib/zstream"),c=function(e){
this.options=s.assign({chunkSize:16384,windowBits:0},e||{});var t=this.options
;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,
0===t.windowBits&&(t.windowBits=-15)),
!(t.windowBits>=0&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),
t.windowBits>15&&t.windowBits<48&&0==(15&t.windowBits)&&(t.windowBits|=15),
this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new u
;var r=i.inflateInit2(this.strm,t.windowBits)
;if(r!==o.Z_OK)throw new Error(l[r])};c.prototype.push=function(e,t){
var r,n,a=this.strm,l=this.options.chunkSize;if(this.ended)return!1
;n=o.Z_NO_FLUSH,
a.next_in=e,a.next_in_index=0,a.avail_in=a.next_in.length,a.next_out=new s.Buf8(l)
;do{
if(a.avail_out=this.options.chunkSize,a.next_out_index=0,(r=i.inflate(a,n))!==o.Z_STREAM_END&&r!==o.Z_OK)return this.onEnd(r),
this.ended=!0,!1
;a.next_out_index&&(this.onData(s.shrinkBuf(a.next_out,a.next_out_index)),
(a.avail_in>0||0===a.avail_out)&&(a.next_out=new s.Buf8(this.options.chunkSize)))
}while(a.avail_in>0||0===a.avail_out)
;return(n=t===~~t?t:!0===t?o.Z_FINISH:o.Z_NO_FLUSH)!==o.Z_FINISH||(r=i.inflateEnd(this.strm),
this.onEnd(r),this.ended=!0,r===o.Z_OK)},c.prototype.onData=function(e){
this.chunks.push(e)},c.prototype.onEnd=function(e){
e===o.Z_OK&&(this.result=s.flattenChunks(this.chunks)),
this.chunks=[],this.err=e,this.msg=this.strm.msg
},r.Inflate=c,r.inflate=n,r.inflateRaw=a},{"./zlib/constants":5,
"./zlib/inflate.js":9,"./zlib/messages":11,"./zlib/utils":13,"./zlib/zstream":14
}],4:[function(e,t,r){function n(e,t,r,n){
for(var a=65535&e|0,i=e>>>16&65535|0,s=0;0!==r;){s=r>2e3?2e3:r,r-=s;do{
a=a+t[n++]|0,i=i+a|0}while(--s);a%=65521,i%=65521}return a|i<<16|0}t.exports=n
},{}],5:[function(e,t,r){t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,
Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,
Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,
Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,
Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,
Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],
6:[function(e,t,r){function n(e,t,r,n){var i=a,s=n+r;e^=-1
;for(var o=n;o<s;o++)e=e>>>8^i[255&(e^t[o])];return-1^e}var a=function(){
for(var e,t=[],r=0;r<256;r++){e=r
;for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1;t[r]=e}return t}();t.exports=n
},{}],7:[function(e,t,r){function n(e,t){return e.msg=P[t],t}function a(e){
return(e<<1)-(e>4?9:0)}function i(e){for(var t=e.length;--t;)e[t]=0}
function s(e){var t=e.state,r=t.pending
;r>e.avail_out&&(r=e.avail_out),0!==r&&(R.arraySet(e.next_out,t.pending_buf,t.pending_out,r,e.next_out_index),
e.next_out_index+=r,t.pending_out+=r,e.total_out+=r,e.avail_out-=r,t.pending-=r,
0===t.pending&&(t.pending_out=0))}function o(e,t){
A._tr_flush_block(e,e.block_start>=0?e.block_start:-1,e.strstart-e.block_start,t),
e.block_start=e.strstart,s(e.strm)}function l(e,t){e.pending_buf[e.pending++]=t}
function u(e,t){
e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t}
function c(e,t,r,n){var a=e.avail_in
;return a>n&&(a=n),0===a?0:(e.avail_in-=a,R.arraySet(t,e.next_in,e.next_in_index,a,r),
1===e.state.wrap?e.adler=T(e.adler,t,a,r):2===e.state.wrap&&(e.adler=M(e.adler,t,a,r)),
e.next_in_index+=a,e.total_in+=a,a)}function d(e,t){
var r,n,a=e.max_chain_length,i=e.strstart,s=e.prev_length,o=e.nice_match,l=e.strstart>e.w_size-se?e.strstart-(e.w_size-se):0,u=e.window,c=e.w_mask,d=e.prev,h=e.strstart+ie,b=u[i+s-1],m=u[i+s]
;e.prev_length>=e.good_match&&(a>>=2),o>e.lookahead&&(o=e.lookahead);do{
if(r=t,u[r+s]===m&&u[r+s-1]===b&&u[r]===u[i]&&u[++r]===u[i+1]){i+=2,r++
;do{}while(u[++i]===u[++r]&&u[++i]===u[++r]&&u[++i]===u[++r]&&u[++i]===u[++r]&&u[++i]===u[++r]&&u[++i]===u[++r]&&u[++i]===u[++r]&&u[++i]===u[++r]&&i<h)
;if(n=ie-(h-i),i=h-ie,n>s){if(e.match_start=t,s=n,n>=o)break;b=u[i+s-1],m=u[i+s]
}}}while((t=d[t&c])>l&&0!=--a);return s<=e.lookahead?s:e.lookahead}
function h(e){var t,r,n,a,i,s=e.w_size;do{
if(a=e.window_size-e.lookahead-e.strstart,e.strstart>=s+(s-se)){
R.arraySet(e.window,e.window,s,s,0),
e.match_start-=s,e.strstart-=s,e.block_start-=s,r=e.hash_size,t=r;do{
n=e.head[--t],e.head[t]=n>=s?n-s:0}while(--r);r=s,t=r;do{
n=e.prev[--t],e.prev[t]=n>=s?n-s:0}while(--r);a+=s}if(0===e.strm.avail_in)break
;if(r=c(e.strm,e.window,e.strstart+e.lookahead,a),
e.lookahead+=r,e.lookahead+e.insert>=ae)for(i=e.strstart-e.insert,
e.ins_h=e.window[i],
e.ins_h=(e.ins_h<<e.hash_shift^e.window[i+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[i+ae-1])&e.hash_mask,
e.prev[i&e.w_mask]=e.head[e.ins_h],
e.head[e.ins_h]=i,i++,e.insert--,!(e.lookahead+e.insert<ae)););
}while(e.lookahead<se&&0!==e.strm.avail_in)}function b(e,t){var r=65535
;for(r>e.pending_buf_size-5&&(r=e.pending_buf_size-5);;){if(e.lookahead<=1){
if(h(e),0===e.lookahead&&t===L)return fe;if(0===e.lookahead)break}
e.strstart+=e.lookahead,e.lookahead=0;var n=e.block_start+r
;if((0===e.strstart||e.strstart>=n)&&(e.lookahead=e.strstart-n,
e.strstart=n,o(e,!1),0===e.strm.avail_out))return fe
;if(e.strstart-e.block_start>=e.w_size-se&&(o(e,!1),
0===e.strm.avail_out))return fe}
return e.insert=0,t===D?(o(e,!0),0===e.strm.avail_out?ge:pe):(e.strstart>e.block_start&&(o(e,!1),
e.strm.avail_out),fe)}function m(e,t){for(var r,n;;){if(e.lookahead<se){if(h(e),
e.lookahead<se&&t===L)return fe;if(0===e.lookahead)break}
if(r=0,e.lookahead>=ae&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+ae-1])&e.hash_mask,
r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],
e.head[e.ins_h]=e.strstart),0!==r&&e.strstart-r<=e.w_size-se&&(e.match_length=d(e,r)),
e.match_length>=ae)if(n=A._tr_tally(e,e.strstart-e.match_start,e.match_length-ae),
e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=ae){
e.match_length--;do{
e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+ae-1])&e.hash_mask,
r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart
}while(0!=--e.match_length);e.strstart++
}else e.strstart+=e.match_length,e.match_length=0,
e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else n=A._tr_tally(e,0,e.window[e.strstart]),
e.lookahead--,e.strstart++;if(n&&(o(e,!1),0===e.strm.avail_out))return fe}
return e.insert=e.strstart<ae-1?e.strstart:ae-1,
t===D?(o(e,!0),0===e.strm.avail_out?ge:pe):e.last_lit&&(o(e,!1),
0===e.strm.avail_out)?fe:ve}function f(e,t){for(var r,n,a;;){if(e.lookahead<se){
if(h(e),e.lookahead<se&&t===L)return fe;if(0===e.lookahead)break}
if(r=0,e.lookahead>=ae&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+ae-1])&e.hash_mask,
r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],
e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,
e.prev_match=e.match_start,
e.match_length=ae-1,0!==r&&e.prev_length<e.max_lazy_match&&e.strstart-r<=e.w_size-se&&(e.match_length=d(e,r),
e.match_length<=5&&(e.strategy===U||e.match_length===ae&&e.strstart-e.match_start>4096)&&(e.match_length=ae-1)),
e.prev_length>=ae&&e.match_length<=e.prev_length){
a=e.strstart+e.lookahead-ae,n=A._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-ae),
e.lookahead-=e.prev_length-1,e.prev_length-=2;do{
++e.strstart<=a&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+ae-1])&e.hash_mask,
r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart)
}while(0!=--e.prev_length)
;if(e.match_available=0,e.match_length=ae-1,e.strstart++,
n&&(o(e,!1),0===e.strm.avail_out))return fe}else if(e.match_available){
if(n=A._tr_tally(e,0,e.window[e.strstart-1]),
n&&o(e,!1),e.strstart++,e.lookahead--,0===e.strm.avail_out)return fe
}else e.match_available=1,e.strstart++,e.lookahead--}
return e.match_available&&(n=A._tr_tally(e,0,e.window[e.strstart-1]),
e.match_available=0),
e.insert=e.strstart<ae-1?e.strstart:ae-1,t===D?(o(e,!0),0===e.strm.avail_out?ge:pe):e.last_lit&&(o(e,!1),
0===e.strm.avail_out)?fe:ve}function v(e,t){for(var r,n,a,i,s=e.window;;){
if(e.lookahead<=ie){if(h(e),e.lookahead<=ie&&t===L)return fe
;if(0===e.lookahead)break}
if(e.match_length=0,e.lookahead>=ae&&e.strstart>0&&(a=e.strstart-1,
(n=s[a])===s[++a]&&n===s[++a]&&n===s[++a])){i=e.strstart+ie
;do{}while(n===s[++a]&&n===s[++a]&&n===s[++a]&&n===s[++a]&&n===s[++a]&&n===s[++a]&&n===s[++a]&&n===s[++a]&&a<i)
;e.match_length=ie-(i-a),
e.match_length>e.lookahead&&(e.match_length=e.lookahead)}
if(e.match_length>=ae?(r=A._tr_tally(e,1,e.match_length-ae),
e.lookahead-=e.match_length,
e.strstart+=e.match_length,e.match_length=0):(r=A._tr_tally(e,0,e.window[e.strstart]),
e.lookahead--,e.strstart++),r&&(o(e,!1),0===e.strm.avail_out))return fe}
return e.insert=0,
t===D?(o(e,!0),0===e.strm.avail_out?ge:pe):e.last_lit&&(o(e,!1),
0===e.strm.avail_out)?fe:ve}function g(e,t){for(var r;;){
if(0===e.lookahead&&(h(e),0===e.lookahead)){if(t===L)return fe;break}
if(e.match_length=0,
r=A._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,
r&&(o(e,!1),0===e.strm.avail_out))return fe}
return e.insert=0,t===D?(o(e,!0),0===e.strm.avail_out?ge:pe):e.last_lit&&(o(e,!1),
0===e.strm.avail_out)?fe:ve}function p(e){
e.window_size=2*e.w_size,i(e.head),e.max_lazy_match=S[e.level].max_lazy,
e.good_match=S[e.level].good_length,
e.nice_match=S[e.level].nice_length,e.max_chain_length=S[e.level].max_chain,
e.strstart=0,
e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=ae-1,
e.match_available=0,e.ins_h=0}function _(){
this.strm=null,this.status=0,this.pending_buf=null,
this.pending_buf_size=0,this.pending_out=0,
this.pending=0,this.wrap=0,this.gzhead=null,
this.gzindex=0,this.method=K,this.last_flush=-1,
this.w_size=0,this.w_bits=0,this.w_mask=0,
this.window=null,this.window_size=0,this.prev=null,
this.head=null,this.ins_h=0,this.hash_size=0,
this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,
this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,
this.strstart=0,
this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,
this.max_lazy_match=0,
this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,
this.dyn_ltree=new R.Buf16(2*re),
this.dyn_dtree=new R.Buf16(2*(2*ee+1)),this.bl_tree=new R.Buf16(2*(2*te+1)),
i(this.dyn_ltree),
i(this.dyn_dtree),i(this.bl_tree),this.l_desc=null,this.d_desc=null,
this.bl_desc=null,
this.bl_count=new R.Buf16(ne+1),this.heap=new R.Buf16(2*J+1),i(this.heap),
this.heap_len=0,
this.heap_max=0,this.depth=new R.Buf16(2*J+1),i(this.depth),this.l_buf=0,
this.lit_bufsize=0,
this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,
this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0,this.high_water=0}
function w(e){var t
;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=G,t=e.state,
t.pending=0,
t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?le:be,e.adler=2===t.wrap?0:1,
t.last_flush=L,A._tr_init(t),$):n(e,O)}function k(e){var t=w(e)
;return t===$&&p(e.state),t}function y(e,t,r,a,i,s){if(!e)return n(e,O);var o=1
;if(t===N&&(t=6),
a<0?(o=0,a=-a):a>15&&(o=2,a-=16),i<1||i>X||r!==K||a<8||a>15||t<0||t>9||s<0||s>Z)return n(e,O)
;8===a&&(a=9);var l=new _
;return e.state=l,l.strm=e,l.wrap=o,l.gzhead=null,l.w_bits=a,
l.w_size=1<<l.w_bits,
l.w_mask=l.w_size-1,l.hash_bits=i+7,l.hash_size=1<<l.hash_bits,
l.hash_mask=l.hash_size-1,
l.hash_shift=~~((l.hash_bits+ae-1)/ae),l.window=new R.Buf8(2*l.w_size),
l.head=new R.Buf16(l.hash_size),
l.prev=new R.Buf16(l.w_size),l.high_water=0,l.lit_bufsize=1<<i+6,
l.pending_buf_size=4*l.lit_bufsize,l.pending_buf=new R.Buf8(l.pending_buf_size),
l.d_buf=l.lit_bufsize>>1,
l.l_buf=3*l.lit_bufsize,l.level=t,l.strategy=s,l.method=r,k(e)}function x(e,t){
return y(e,t,K,Y,Q,V)}function C(e,t){var r,o
;if(!e||!e.state||t>z||t<0)return n(e,O)
;if(o=e.state,!e.next_out||!e.next_in&&0!==e.avail_in||o.status===me&&t!==D)return n(e,0===e.avail_out?F:O)
;if(o.strm=e,r=o.last_flush,o.last_flush=t,o.status===le)if(2===o.wrap){
if(e.adler=0,
l(o,31),l(o,139),l(o,8),o.gzhead)throw new Error("Custom GZIP headers not supported")
;l(o,0),
l(o,0),l(o,0),l(o,0),l(o,0),l(o,9===o.level?2:o.strategy>=q||o.level<2?4:0),
l(o,_e),o.status=be}else{var c=K+(o.w_bits-8<<4)<<8,d=-1
;d=o.strategy>=q||o.level<2?0:o.level<6?1:6===o.level?2:3,
c|=d<<6,0!==o.strstart&&(c|=oe),
c+=31-c%31,o.status=be,u(o,c),0!==o.strstart&&(u(o,e.adler>>>16),
u(o,65535&e.adler)),e.adler=1}if(0!==o.pending){
if(s(e),0===e.avail_out)return o.last_flush=-1,$
}else if(0===e.avail_in&&a(t)<=a(r)&&t!==D)return n(e,F)
;if(o.status===me&&0!==e.avail_in)return n(e,F)
;if(0!==e.avail_in||0!==o.lookahead||t!==L&&o.status!==me){
var h=o.strategy===q?g(o,t):o.strategy===H?v(o,t):S[o.level].func(o,t)
;if(h!==ge&&h!==pe||(o.status=me),
h===fe||h===ge)return 0===e.avail_out&&(o.last_flush=-1),$
;if(h===ve&&(t===W?A._tr_align(o):t!==z&&(A._tr_stored_block(o,0,0,!1),
t===j&&(i(o.head),
0===o.lookahead&&(o.strstart=0,o.block_start=0,o.insert=0))),s(e),
0===e.avail_out))return o.last_flush=-1,$}
return t!==D?$:o.wrap<=0?I:(2===o.wrap?(l(o,255&e.adler),
l(o,e.adler>>8&255),l(o,e.adler>>16&255),
l(o,e.adler>>24&255),l(o,255&e.total_in),
l(o,e.total_in>>8&255),l(o,e.total_in>>16&255),
l(o,e.total_in>>24&255)):(u(o,e.adler>>>16),
u(o,65535&e.adler)),s(e),o.wrap>0&&(o.wrap=-o.wrap),0!==o.pending?$:I)}
function E(e){var t=e.state.status
;return t!==le&&t!==ue&&t!==ce&&t!==de&&t!==he&&t!==be&&t!==me?n(e,O):(e.state=null,
t===be?n(e,B):$)}
var S,R=e("./utils"),A=e("./trees"),T=e("./adler32"),M=e("./crc32"),P=e("./messages"),L=0,W=1,j=3,D=4,z=5,$=0,I=1,O=-2,B=-3,F=-5,N=-1,U=1,q=2,H=3,Z=4,V=0,G=2,K=8,X=9,Y=15,Q=8,J=286,ee=30,te=19,re=2*J+1,ne=15,ae=3,ie=258,se=ie+ae+1,oe=32,le=42,ue=69,ce=73,de=91,he=103,be=113,me=666,fe=1,ve=2,ge=3,pe=4,_e=3,we=function(e,t,r,n,a){
this.good_length=e,
this.max_lazy=t,this.nice_length=r,this.max_chain=n,this.func=a}
;S=[new we(0,0,0,0,b),new we(4,4,8,4,m),new we(4,5,16,8,m),new we(4,6,32,32,m),new we(4,4,16,16,f),new we(8,16,32,32,f),new we(8,16,128,128,f),new we(8,32,128,256,f),new we(32,128,258,1024,f),new we(32,258,258,4096,f)],
r.deflateInit=x,
r.deflateInit2=y,r.deflateReset=k,r.deflate=C,r.deflateEnd=E,r.deflateInfo="pako deflate (from Nodeca project)"
},{"./adler32":4,"./crc32":6,"./messages":11,"./trees":12,"./utils":13}],
8:[function(e,t,r){t.exports=function(e,t){
var r,n,a,i,s,o,l,u,c,d,h,b,m,f,v,g,p,_,w,k,y,x,C,E,S
;r=e.state,n=e.next_in_index,
E=e.next_in,a=n+(e.avail_in-5),i=e.next_out_index,S=e.next_out,
s=i-(t-e.avail_out),
o=i+(e.avail_out-257),l=r.dmax,u=r.wsize,c=r.whave,d=r.wnext,
h=r.window,b=r.hold,
m=r.bits,f=r.lencode,v=r.distcode,g=(1<<r.lenbits)-1,p=(1<<r.distbits)-1;e:do{
m<15&&(b+=E[n++]<<m,m+=8,b+=E[n++]<<m,m+=8),_=f[b&g];t:for(;;){
if(w=_>>>24,b>>>=w,m-=w,0===(w=_>>>16&255))S[i++]=65535&_;else{if(!(16&w)){
if(0==(64&w)){_=f[(65535&_)+(b&(1<<w)-1)];continue t}if(32&w){r.mode=12;break e}
e.msg="invalid literal/length code",r.mode=30;break e}
k=65535&_,w&=15,w&&(m<w&&(b+=E[n++]<<m,
m+=8),k+=b&(1<<w)-1,b>>>=w,m-=w),m<15&&(b+=E[n++]<<m,
m+=8,b+=E[n++]<<m,m+=8),_=v[b&p];r:for(;;){
if(w=_>>>24,b>>>=w,m-=w,!(16&(w=_>>>16&255))){if(0==(64&w)){
_=v[(65535&_)+(b&(1<<w)-1)];continue r}e.msg="invalid distance code",r.mode=30
;break e}
if(y=65535&_,w&=15,m<w&&(b+=E[n++]<<m,(m+=8)<w&&(b+=E[n++]<<m,m+=8)),(y+=b&(1<<w)-1)>l){
e.msg="invalid distance too far back",r.mode=30;break e}
if(b>>>=w,m-=w,w=i-s,y>w){if((w=y-w)>c&&r.sane){
e.msg="invalid distance too far back",r.mode=30;break e}if(x=0,C=h,0===d){
if(x+=u-w,w<k){k-=w;do{S[i++]=h[x++]}while(--w);x=i-y,C=S}}else if(d<w){
if(x+=u+d-w,(w-=d)<k){k-=w;do{S[i++]=h[x++]}while(--w);if(x=0,d<k){w=d,k-=w;do{
S[i++]=h[x++]}while(--w);x=i-y,C=S}}}else if(x+=d-w,w<k){k-=w;do{S[i++]=h[x++]
}while(--w);x=i-y,C=S}for(;k>2;)S[i++]=C[x++],S[i++]=C[x++],S[i++]=C[x++],k-=3
;k&&(S[i++]=C[x++],k>1&&(S[i++]=C[x++]))}else{x=i-y;do{
S[i++]=S[x++],S[i++]=S[x++],S[i++]=S[x++],k-=3}while(k>2)
;k&&(S[i++]=S[x++],k>1&&(S[i++]=S[x++]))}break}}break}}while(n<a&&i<o)
;k=m>>3,n-=k,
m-=k<<3,b&=(1<<m)-1,e.next_in_index=n,e.next_out_index=i,e.avail_in=n<a?a-n+5:5-(n-a),
e.avail_out=i<o?o-i+257:257-(i-o),r.hold=b,r.bits=m}},{}],9:[function(e,t,r){
function n(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}
function a(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,
this.dmax=0,
this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,
this.wnext=0,
this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,
this.extra=0,
this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,
this.ncode=0,
this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.next_index=0,
this.lens=new p.Buf16(320),
this.work=new p.Buf16(288),this.codes=new p.Buf32(fe),
this.sane=0,this.back=0,this.was=0}function i(e,t,r,n,a,i,s,o){
this.type=e,this.lens=t,
this.lens_index=r,this.codes=n,this.table=a,this.table_index=i,
this.bits=s,this.work=o}function s(e){var t
;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,
t.wrap&&(e.adler=1&t.wrap),
t.mode=$,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,
t.hold=0,t.bits=0,t.lencode=new p.Buf32(fe),t.distcode=new p.Buf32(fe),t.sane=1,
t.back=-1,T):L}function o(e){var t
;return e&&e.state?(t=e.state,t.wsize=0,t.whave=0,t.wnext=0,s(e)):L}
function l(e,t){var r,n;return e&&e.state?(n=e.state,t<0?(r=0,t=-t):(r=1+(t>>4),
t<48&&(t&=15)),
t&&(t<8||t>15)?L:(null!==n.window&&n.wbits!==t&&(n.window=null),n.wrap=r,
n.wbits=t,o(e))):L}function u(e,t){var r,n
;return e?(n=new a,e.state=n,n.window=null,r=l(e,t),r!==T&&(e.state=null),r):L}
function c(e){return u(e,ve)}function d(e,t,r){var n
;return e&&e.state?(n=e.state,
t<0?(n.hold=0,n.bits=0,T):t>16||n.bits+t>32?L:(r&=(1<<t)-1,
n.hold+=r<<n.bits,n.bits+=t,T)):L}function h(e){if(ge){var t,r
;for(v=new p.Buf32(512),g=new p.Buf32(32),t=0;t<144;)e.lens[t++]=8
;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8
;for(r=9,y(new i(C,e.lens,0,288,v,0,r,e.work)),t=0;t<32;)e.lens[t++]=5
;r=5,y(new i(E,e.lens,0,32,g,0,r,e.work)),ge=!1}
e.lencode=v,e.lenbits=9,e.distcode=g,e.distbits=5}function b(e,t,r,n){
var a,i=e.state;return null===i.window&&(i.wsize=1<<i.wbits,i.wnext=0,i.whave=0,
i.window=new p.Buf8(i.wsize)),
n>=i.wsize?(p.arraySet(i.window,t,r-i.wsize,i.wsize,0),
i.wnext=0,i.whave=i.wsize):(a=i.wsize-i.wnext,
a>n&&(a=n),p.arraySet(i.window,t,r-n,a,i.wnext),
n-=a,n?(p.arraySet(i.window,t,r-n,n,0),
i.wnext=n,i.whave=i.wsize):(i.wnext+=a,i.wnext===i.wsize&&(i.wnext=0),
i.whave<i.wsize&&(i.whave+=a))),0}function m(e,t){
var r,a,s,o,l,u,c,d,m,f,v,g,fe,ve,ge,pe,_e,we,ke,ye,xe,Ce,Ee,Se,Re=0,Ae=new p.Buf8(4),Te=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]
;r=e.state,r.mode===G&&(r.mode=K),l=e.next_out_index,s=e.next_out,c=e.avail_out,
o=e.next_in_index,a=e.next_in,u=e.avail_in,d=r.hold,m=r.bits,f=u,v=c,Ce=T
;e:for(;;)switch(r.mode){case $:if(0===r.wrap){r.mode=K;break}for(;m<16;){
if(0===u)break e;u--,d+=a[o++]<<m,m+=8}if(2&r.wrap&&35615===d){
r.check=0,Ae[0]=255&d,Ae[1]=d>>>8&255,r.check=w(r.check,Ae,2,0),d=0,m=0,r.mode=I
;break}
if(r.flags=0,r.head&&(r.head.done=-1),!(1&r.wrap)||(((255&d)<<8)+(d>>8))%31){
e.msg="incorrect header check",r.mode=he;break}if((15&d)!==z){
e.msg="unknown compression method",r.mode=he;break}
if(d>>>=4,m-=4,xe=8+(15&d),0===r.wbits)r.wbits=xe;else if(xe>r.wbits){
e.msg="invalid window size",r.mode=he;break}
r.dmax=1<<xe,e.adler=r.check=1,r.mode=512&d?Z:G,d=0,m=0;break;case I:
for(;m<16;){if(0===u)break e;u--,d+=a[o++]<<m,m+=8}
if(r.flags=d,(255&r.flags)!==z){e.msg="unknown compression method",r.mode=he
;break}if(57344&r.flags){e.msg="unknown header flags set",r.mode=he;break}
r.head&&(r.head.text=d>>8&1),
512&r.flags&&(Ae[0]=255&d,Ae[1]=d>>>8&255,r.check=w(r.check,Ae,2,0)),
d=0,m=0,r.mode=O;case O:for(;m<32;){if(0===u)break e;u--,d+=a[o++]<<m,m+=8}
r.head&&(r.head.time=d),
512&r.flags&&(Ae[0]=255&d,Ae[1]=d>>>8&255,Ae[2]=d>>>16&255,
Ae[3]=d>>>24&255,r.check=w(r.check,Ae,4,0)),d=0,m=0,r.mode=B;case B:for(;m<16;){
if(0===u)break e;u--,d+=a[o++]<<m,m+=8}
r.head&&(r.head.xflags=255&d,r.head.os=d>>8),
512&r.flags&&(Ae[0]=255&d,Ae[1]=d>>>8&255,
r.check=w(r.check,Ae,2,0)),d=0,m=0,r.mode=F;case F:if(1024&r.flags){for(;m<16;){
if(0===u)break e;u--,d+=a[o++]<<m,m+=8}
r.length=d,r.head&&(r.head.extra_len=d),512&r.flags&&(Ae[0]=255&d,
Ae[1]=d>>>8&255,r.check=w(r.check,Ae,2,0)),d=0,m=0
}else r.head&&(r.head.extra=null);r.mode=N;case N:if(1024&r.flags){
if(g=r.length,g>u&&(g=u),g){
if(r.head&&r.head.extra)throw xe=r.head.extra_len-r.length,
"Review & implement right"
;512&r.flags&&(r.check=w(r.check,a,g,o)),u-=g,o+=g,r.length-=g}
if(r.length)break e}r.length=0,r.mode=U;case U:if(2048&r.flags){if(0===u)break e
;g=0;do{
xe=a[o+g++],r.head&&r.head.name&&r.length<r.head.name_max&&(r.head.name[r.length++]=xe)
}while(xe&&g<u);if(512&r.flags&&(r.check=w(r.check,a,g,o)),u-=g,o+=g,xe)break e
}else r.head&&(r.head.name=null);r.length=0,r.mode=q;case q:if(4096&r.flags){
if(0===u)break e;g=0;do{
xe=a[o+g++],r.head&&r.head.comment&&r.length<r.head.comm_max&&(r.head.comment[r.length++]=xe)
}while(xe&&g<u);if(512&r.flags&&(r.check=w(r.check,a,g,o)),u-=g,o+=g,xe)break e
}else r.head&&(r.head.comment=null);r.mode=H;case H:if(512&r.flags){for(;m<16;){
if(0===u)break e;u--,d+=a[o++]<<m,m+=8}if(d!==(65535&r.check)){
e.msg="header crc mismatch",r.mode=he;break}d=0,m=0}
r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=1),e.adler=r.check=0,r.mode=G
;break;case Z:for(;m<32;){if(0===u)break e;u--,d+=a[o++]<<m,m+=8}
e.adler=r.check=n(d),d=0,m=0,r.mode=V;case V:
if(0===r.havedict)return e.next_out_index=l,
e.avail_out=c,e.next_in_index=o,e.avail_in=u,r.hold=d,r.bits=m,P
;e.adler=r.check=1,r.mode=G;case G:if(t===R||t===A)break e;case K:if(r.last){
d>>>=7&m,m-=7&m,r.mode=ue;break}for(;m<3;){if(0===u)break e
;u--,d+=a[o++]<<m,m+=8}switch(r.last=1&d,d>>>=1,m-=1,3&d){case 0:r.mode=X;break
;case 1:if(h(r),r.mode=re,t===A){d>>>=2,m-=2;break e}break;case 2:r.mode=J;break
;case 3:e.msg="invalid block type",r.mode=he}d>>>=2,m-=2;break;case X:
for(d>>>=7&m,m-=7&m;m<32;){if(0===u)break e;u--,d+=a[o++]<<m,m+=8}
if((65535&d)!=(d>>>16^65535)){e.msg="invalid stored block lengths",r.mode=he
;break}if(r.length=65535&d,d=0,m=0,r.mode=Y,t===A)break e;case Y:r.mode=Q
;case Q:if(g=r.length){if(g>u&&(g=u),g>c&&(g=c),0===g)break e
;p.arraySet(s,a,o,g,l),u-=g,o+=g,c-=g,l+=g,r.length-=g;break}r.mode=G;break
;case J:for(;m<14;){if(0===u)break e;u--,d+=a[o++]<<m,m+=8}if(r.nlen=257+(31&d),
d>>>=5,
m-=5,r.ndist=1+(31&d),d>>>=5,m-=5,r.ncode=4+(15&d),d>>>=4,m-=4,r.nlen>286||r.ndist>30){
e.msg="too many length or distance symbols",r.mode=he;break}r.have=0,r.mode=ee
;case ee:for(;r.have<r.ncode;){for(;m<3;){if(0===u)break e;u--,d+=a[o++]<<m,m+=8
}r.lens[Te[r.have++]]=7&d,d>>>=3,m-=3}for(;r.have<19;)r.lens[Te[r.have++]]=0
;if(p.arraySet(r.lencode,r.codes,0,r.codes.length,0),
r.lenbits=7,Ee=new i(x,r.lens,0,19,r.lencode,0,r.lenbits,r.work),
Ce=y(Ee),r.lenbits=Ee.bits,Ce){e.msg="invalid code lengths set",r.mode=he;break}
r.have=0,r.mode=te;case te:for(;r.have<r.nlen+r.ndist;){
for(;Re=r.lencode[d&(1<<r.lenbits)-1],
ge=Re>>>24,pe=Re>>>16&255,_e=65535&Re,!(ge<=m);){if(0===u)break e
;u--,d+=a[o++]<<m,m+=8}if(_e<16)d>>>=ge,m-=ge,r.lens[r.have++]=_e;else{
if(16===_e){for(Se=ge+2;m<Se;){if(0===u)break e;u--,d+=a[o++]<<m,m+=8}
if(d>>>=ge,m-=ge,0===r.have){e.msg="invalid bit length repeat",r.mode=he;break}
xe=r.lens[r.have-1],g=3+(3&d),d>>>=2,m-=2}else if(17===_e){for(Se=ge+3;m<Se;){
if(0===u)break e;u--,d+=a[o++]<<m,m+=8}d>>>=ge,m-=ge,xe=0,g=3+(7&d),d>>>=3,m-=3
}else{for(Se=ge+7;m<Se;){if(0===u)break e;u--,d+=a[o++]<<m,m+=8}
d>>>=ge,m-=ge,xe=0,g=11+(127&d),d>>>=7,m-=7}if(r.have+g>r.nlen+r.ndist){
e.msg="invalid bit length repeat",r.mode=he;break}for(;g--;)r.lens[r.have++]=xe}
}if(r.mode===he)break;if(0===r.lens[256]){
e.msg="invalid code -- missing end-of-block",r.mode=he;break}
if(p.arraySet(r.lencode,r.codes,0,r.codes.length,0),
r.lenbits=9,Ee=new i(C,r.lens,0,r.nlen,r.lencode,0,r.lenbits,r.work),
Ce=y(Ee),r.lenbits=Ee.bits,Ce){e.msg="invalid literal/lengths set",r.mode=he
;break}
if(r.distbits=6,p.arraySet(r.distcode,r.codes,0,r.codes.length,0),Ee=new i(E,r.lens,r.nlen,r.ndist,r.distcode,0,r.distbits,r.work),
Ce=y(Ee),r.distbits=Ee.bits,Ce){e.msg="invalid distances set",r.mode=he;break}
if(r.mode=re,t===A)break e;case re:r.mode=ne;case ne:if(u>=6&&c>=258){
e.next_out_index=l,
e.avail_out=c,e.next_in_index=o,e.avail_in=u,r.hold=d,r.bits=m,
k(e,v),l=e.next_out_index,
s=e.next_out,c=e.avail_out,o=e.next_in_index,a=e.next_in,
u=e.avail_in,d=r.hold,m=r.bits,r.mode===G&&(r.back=-1);break}
for(r.back=0;Re=r.lencode[d&(1<<r.lenbits)-1],
ge=Re>>>24,pe=Re>>>16&255,_e=65535&Re,!(ge<=m);){if(0===u)break e
;u--,d+=a[o++]<<m,m+=8}if(pe&&0==(240&pe)){
for(we=ge,ke=pe,ye=_e;Re=r.lencode[ye+((d&(1<<we+ke)-1)>>we)],
ge=Re>>>24,pe=Re>>>16&255,_e=65535&Re,!(we+ge<=m);){if(0===u)break e
;u--,d+=a[o++]<<m,m+=8}d>>>=we,m-=we,r.back+=we}
if(d>>>=ge,m-=ge,r.back+=ge,r.length=_e,0===pe){r.mode=le;break}if(32&pe){
r.back=-1,r.mode=G;break}if(64&pe){e.msg="invalid literal/length code",r.mode=he
;break}r.extra=15&pe,r.mode=ae;case ae:if(r.extra){for(Se=r.extra;m<Se;){
if(0===u)break e;u--,d+=a[o++]<<m,m+=8}
r.length+=d&(1<<r.extra)-1,d>>>=r.extra,m-=r.extra,r.back+=r.extra}
r.was=r.length,r.mode=ie;case ie:
for(;Re=r.distcode[d&(1<<r.distbits)-1],ge=Re>>>24,
pe=Re>>>16&255,_e=65535&Re,!(ge<=m);){if(0===u)break e;u--,d+=a[o++]<<m,m+=8}
if(0==(240&pe)){
for(we=ge,ke=pe,ye=_e;Re=r.distcode[ye+((d&(1<<we+ke)-1)>>we)],ge=Re>>>24,
pe=Re>>>16&255,_e=65535&Re,!(we+ge<=m);){if(0===u)break e;u--,d+=a[o++]<<m,m+=8}
d>>>=we,m-=we,r.back+=we}if(d>>>=ge,m-=ge,r.back+=ge,64&pe){
e.msg="invalid distance code",r.mode=he;break}
r.offset=_e,r.extra=15&pe,r.mode=se;case se:if(r.extra){for(Se=r.extra;m<Se;){
if(0===u)break e;u--,d+=a[o++]<<m,m+=8}
r.offset+=d&(1<<r.extra)-1,d>>>=r.extra,m-=r.extra,r.back+=r.extra}
if(r.offset>r.dmax){e.msg="invalid distance too far back",r.mode=he;break}
r.mode=oe;case oe:if(0===c)break e;if(g=v-c,r.offset>g){
if((g=r.offset-g)>r.whave&&r.sane){
e.msg="invalid distance too far back",r.mode=he;break}
g>r.wnext?(g-=r.wnext,fe=r.wsize-g):fe=r.wnext-g,
g>r.length&&(g=r.length),ve=r.window}else ve=s,fe=l-r.offset,g=r.length
;g>c&&(g=c),c-=g,r.length-=g;do{s[l++]=ve[fe++]}while(--g)
;0===r.length&&(r.mode=ne);break;case le:if(0===c)break e
;s[l++]=r.length,c--,r.mode=ne;break;case ue:if(r.wrap){for(;m<32;){
if(0===u)break e;u--,d|=a[o++]<<m,m+=8}
if(v-=c,e.total_out+=v,r.total+=v,v&&(e.adler=r.check=r.flags?w(r.check,s,v,l-v):_(r.check,s,v,l-v)),
v=c,(r.flags?d:n(d))!==r.check){e.msg="incorrect data check",r.mode=he;break}
d=0,m=0}r.mode=ce;case ce:if(r.wrap&&r.flags){for(;m<32;){if(0===u)break e
;u--,d+=a[o++]<<m,m+=8}if(d!==(4294967295&r.total)){
e.msg="incorrect length check",r.mode=he;break}d=0,m=0}r.mode=de;case de:Ce=M
;break e;case he:Ce=W;break e;case be:return j;case me:default:return L}
return e.next_out_index=l,e.avail_out=c,e.next_in_index=o,e.avail_in=u,r.hold=d,
r.bits=m,
(r.wsize||v!==e.avail_out&&r.mode<he&&(r.mode<ue||t!==S))&&b(e,e.next_out,e.next_out_index,v-e.avail_out)?(r.mode=be,
j):(f-=e.avail_in,
v-=e.avail_out,e.total_in+=f,e.total_out+=v,r.total+=v,r.wrap&&v&&(e.adler=r.check=r.flags?w(r.check,s,v,e.next_out_index-v):_(r.check,s,v,e.next_out_index-v)),
e.data_type=r.bits+(r.last?64:0)+(r.mode===G?128:0)+(r.mode===re||r.mode===Y?256:0),
(0===f&&0===v||t===S)&&Ce===T&&(Ce=D),Ce)}function f(e){var t=e.state
;return t.window&&(t.window=null),e.state=null,T}
var v,g,p=e("./utils"),_=e("./adler32"),w=e("./crc32"),k=e("./inffast"),y=e("./inftrees"),x=0,C=1,E=2,S=4,R=5,A=6,T=0,M=1,P=2,L=-2,W=-3,j=-4,D=-5,z=8,$=1,I=2,O=3,B=4,F=5,N=6,U=7,q=8,H=9,Z=10,V=11,G=12,K=13,X=14,Y=15,Q=16,J=17,ee=18,te=19,re=20,ne=21,ae=22,ie=23,se=24,oe=25,le=26,ue=27,ce=28,de=29,he=30,be=31,me=32,fe=1444,ve=15,ge=!0
;r.inflateReset=o,
r.inflateReset2=l,r.inflateResetKeep=s,r.inflateInit=c,r.inflateInit2=u,
r.inflatePrime=d,
r.inflate=m,r.inflateEnd=f,r.inflateInfo="pako inflate (from Nodeca project)"},{
"./adler32":4,"./crc32":6,"./inffast":8,"./inftrees":10,"./utils":13}],
10:[function(e,t,r){
var n=e("./utils"),a=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],i=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],s=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],o=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]
;t.exports=function(e){
var t,r,l,u,c,d,h,b,m,f=e.type,v=e.lens,g=e.codes,p=e.table,_=e.bits,w=e.work,k=0,y=0,x=0,C=0,E=0,S=0,R=0,A=0,T=0,M=0,P=null,L=0,W=new n.Buf16(16),j=new n.Buf16(16),D=null,z=0
;for(k=0;k<=15;k++)W[k]=0;for(y=0;y<g;y++)W[v[e.lens_index+y]]++
;for(E=_,C=15;C>=1&&0===W[C];C--);
if(E>C&&(E=C),0===C)return p[e.table_index++]=20971520,
p[e.table_index++]=20971520,e.bits=1,0;for(x=1;x<C&&0===W[x];x++);
for(E<x&&(E=x),A=1,k=1;k<=15;k++)if(A<<=1,(A-=W[k])<0)return-1
;if(A>0&&(0===f||1!==C))return-1;for(j[1]=0,k=1;k<15;k++)j[k+1]=j[k]+W[k]
;for(y=0;y<g;y++)0!==v[e.lens_index+y]&&(w[j[v[e.lens_index+y]]++]=y);switch(f){
case 0:P=D=w,d=19;break;case 1:P=a,L-=257,D=i,z-=257,d=256;break;default:
P=s,D=o,d=-1}
if(M=0,y=0,k=x,c=e.table_index,S=E,R=0,l=-1,T=1<<E,u=T-1,1===f&&T>852||2===f&&T>592)return 1
;for(var $=0;;){
$++,h=k-R,w[y]<d?(b=0,m=w[y]):w[y]>d?(b=D[z+w[y]],m=P[L+w[y]]):(b=96,
m=0),t=1<<k-R,r=1<<S,x=r;do{r-=t,p[c+(M>>R)+r]=h<<24|b<<16|m|0}while(0!==r)
;for(t=1<<k-1;M&t;)t>>=1;if(0!==t?(M&=t-1,M+=t):M=0,y++,0==--W[k]){
if(k===C)break;k=v[e.lens_index+w[y]]}if(k>E&&(M&u)!==l){
for(0===R&&(R=E),c+=x,S=k-R,A=1<<S;S+R<C&&!((A-=W[S+R])<=0);)S++,A<<=1
;if(T+=1<<S,1===f&&T>852||2===f&&T>592)return 1
;l=M&u,p[l]=E<<24|S<<16|c-e.table_index}}
return 0!==M&&(p[c+M]=k-R<<24|64<<16|0),e.table_index+=T,e.bits=E,0}},{
"./utils":13}],11:[function(e,t,r){t.exports={2:"need dictionary",
1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error",
"-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}
},{}],12:[function(e,t,r){function n(e){for(var t=e.length;--t;)e[t]=0}
function a(e){return e<256?ne[e]:ne[256+(e>>>7)]}function i(e,t){
e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255}
function s(e,t,r){
e.bi_valid>H-r?(e.bi_buf|=t<<e.bi_valid&65535,i(e,e.bi_buf),e.bi_buf=t>>H-e.bi_valid,
e.bi_valid+=r-H):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=r)}
function o(e,t,r){s(e,r[2*t],r[2*t+1])}function l(e,t){var r=0;do{r|=1&e,e>>>=1,
r<<=1}while(--t>0);return r>>>1}function u(e){
16===e.bi_valid?(i(e,e.bi_buf),e.bi_buf=0,
e.bi_valid=0):e.bi_valid>=8&&(e.pending_buf[e.pending++]=255&e.bi_buf,
e.bi_buf>>=8,e.bi_valid-=8)}function c(e,t){
var r,n,a,i,s,o,l=t.dyn_tree,u=t.max_code,c=t.stat_desc.static_tree,d=t.stat_desc.has_stree,h=t.stat_desc.extra_bits,b=t.stat_desc.extra_base,m=t.stat_desc.max_length,f=0
;for(i=0;i<=q;i++)e.bl_count[i]=0
;for(l[2*e.heap[e.heap_max]+1]=0,r=e.heap_max+1;r<U;r++)n=e.heap[r],
i=l[2*l[2*n+1]+1]+1,
i>m&&(i=m,f++),l[2*n+1]=i,n>u||(e.bl_count[i]++,s=0,n>=b&&(s=h[n-b]),
o=l[2*n],e.opt_len+=o*(i+s),d&&(e.static_len+=o*(c[2*n+1]+s)));if(0!==f){do{
for(i=m-1;0===e.bl_count[i];)i--
;e.bl_count[i]--,e.bl_count[i+1]+=2,e.bl_count[m]--,f-=2}while(f>0)
;for(i=m;0!==i;i--)for(n=e.bl_count[i];0!==n;)(a=e.heap[--r])>u||(l[2*a+1]!==i&&(e.opt_len+=(i-l[2*a+1])*l[2*a],
l[2*a+1]=i),n--)}}function d(e,t,r){var n,a,i=new Array(q+1),s=0
;for(n=1;n<=q;n++)i[n]=s=s+r[n-1]<<1;for(a=0;a<=t;a++){var o=e[2*a+1]
;0!==o&&(e[2*a]=l(i[o]++,o))}}function h(){var e,t,r,n,a,i=new Array(q+1)
;for(r=0,n=0;n<I-1;n++)for(ie[n]=r,e=0;e<1<<Y[n];e++)ae[r++]=n
;for(ae[r-1]=n,a=0,n=0;n<16;n++)for(se[n]=a,e=0;e<1<<Q[n];e++)ne[a++]=n
;for(a>>=7;n<F;n++)for(se[n]=a<<7,e=0;e<1<<Q[n]-7;e++)ne[256+a++]=n
;for(t=0;t<=q;t++)i[t]=0;for(e=0;e<=143;)te[2*e+1]=8,e++,i[8]++
;for(;e<=255;)te[2*e+1]=9,e++,i[9]++;for(;e<=279;)te[2*e+1]=7,e++,i[7]++
;for(;e<=287;)te[2*e+1]=8,e++,i[8]++
;for(d(te,B+1,i),e=0;e<F;e++)re[2*e+1]=5,re[2*e]=l(e,5);oe=new ce(te,Y,O+1,B,q),
le=new ce(re,Q,0,F,q),ue=new ce(new Array(0),J,0,N,Z)}function b(e){var t
;for(t=0;t<B;t++)e.dyn_ltree[2*t]=0;for(t=0;t<F;t++)e.dyn_dtree[2*t]=0
;for(t=0;t<N;t++)e.bl_tree[2*t]=0
;e.dyn_ltree[2*V]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}
function m(e){
e.bi_valid>8?i(e,e.bi_buf):e.bi_valid>0&&(e.pending_buf[e.pending++]=e.bi_buf),
e.bi_buf=0,e.bi_valid=0}function f(e,t,r,n){
m(e),n&&(i(e,r),i(e,~r)),M.arraySet(e.pending_buf,e.window,t,r,e.pending),
e.pending+=r}function v(e,t,r,n){var a=2*t,i=2*r
;return e[a]<e[i]||e[a]===e[i]&&n[t]<=n[r]}function g(e,t,r){
for(var n=e.heap[r],a=r<<1;a<=e.heap_len&&(a<e.heap_len&&v(t,e.heap[a+1],e.heap[a],e.depth)&&a++,
!v(t,n,e.heap[a],e.depth));)e.heap[r]=e.heap[a],r=a,a<<=1;e.heap[r]=n}
function p(e,t,r){var n,i,l,u,c=0;if(0!==e.last_lit)do{
n=e.pending_buf[e.d_buf+2*c]<<8|e.pending_buf[e.d_buf+2*c+1],
i=e.pending_buf[e.l_buf+c],
c++,0===n?o(e,i,t):(l=ae[i],o(e,l+O+1,t),u=Y[l],0!==u&&(i-=ie[l],
s(e,i,u)),n--,l=a(n),o(e,l,r),0!==(u=Q[l])&&(n-=se[l],s(e,n,u)))
}while(c<e.last_lit);o(e,V,t)}function _(e,t){
var r,n,a,i=t.dyn_tree,s=t.stat_desc.static_tree,o=t.stat_desc.has_stree,l=t.stat_desc.elems,u=-1
;for(e.heap_len=0,e.heap_max=U,r=0;r<l;r++)0!==i[2*r]?(e.heap[++e.heap_len]=u=r,
e.depth[r]=0):i[2*r+1]=0
;for(;e.heap_len<2;)a=e.heap[++e.heap_len]=u<2?++u:0,i[2*a]=1,
e.depth[a]=0,e.opt_len--,o&&(e.static_len-=s[2*a+1])
;for(t.max_code=u,r=e.heap_len>>1;r>=1;r--)g(e,i,r);a=l;do{
r=e.heap[1],e.heap[1]=e.heap[e.heap_len--],
g(e,i,1),n=e.heap[1],e.heap[--e.heap_max]=r,
e.heap[--e.heap_max]=n,i[2*a]=i[2*r]+i[2*n],
e.depth[a]=(e.depth[r]>=e.depth[n]?e.depth[r]:e.depth[n])+1,i[2*r+1]=i[2*n+1]=a,
e.heap[1]=a++,g(e,i,1)}while(e.heap_len>=2)
;e.heap[--e.heap_max]=e.heap[1],c(e,t),d(i,u,e.bl_count)}function w(e,t,r){
var n,a,i=-1,s=t[1],o=0,l=7,u=4
;for(0===s&&(l=138,u=3),t[2*(r+1)+1]=65535,n=0;n<=r;n++)a=s,
s=t[2*(n+1)+1],++o<l&&a===s||(o<u?e.bl_tree[2*a]+=o:0!==a?(a!==i&&e.bl_tree[2*a]++,
e.bl_tree[2*G]++):o<=10?e.bl_tree[2*K]++:e.bl_tree[2*X]++,
o=0,i=a,0===s?(l=138,u=3):a===s?(l=6,u=3):(l=7,u=4))}function k(e,t,r){
var n,a,i=-1,l=t[1],u=0,c=7,d=4
;for(0===l&&(c=138,d=3),n=0;n<=r;n++)if(a=l,l=t[2*(n+1)+1],!(++u<c&&a===l)){
if(u<d)do{o(e,a,e.bl_tree)
}while(0!=--u);else 0!==a?(a!==i&&(o(e,a,e.bl_tree),u--),
o(e,G,e.bl_tree),s(e,u-3,2)):u<=10?(o(e,K,e.bl_tree),
s(e,u-3,3)):(o(e,X,e.bl_tree),s(e,u-11,7));u=0,i=a,0===l?(c=138,d=3):a===l?(c=6,
d=3):(c=7,d=4)}}function y(e){var t
;for(w(e,e.dyn_ltree,e.l_desc.max_code),w(e,e.dyn_dtree,e.d_desc.max_code),
_(e,e.bl_desc),t=N-1;t>=3&&0===e.bl_tree[2*ee[t]+1];t--);
return e.opt_len+=3*(t+1)+5+5+4,t}function x(e,t,r,n){var a
;for(s(e,t-257,5),s(e,r-1,5),s(e,n-4,4),a=0;a<n;a++)s(e,e.bl_tree[2*ee[a]+1],3)
;k(e,e.dyn_ltree,t-1),k(e,e.dyn_dtree,r-1)}function C(e){var t,r=4093624447
;for(t=0;t<=31;t++,r>>>=1)if(1&r&&0!==e.dyn_ltree[2*t])return L
;if(0!==e.dyn_ltree[18]||0!==e.dyn_ltree[20]||0!==e.dyn_ltree[26])return W
;for(t=32;t<O;t++)if(0!==e.dyn_ltree[2*t])return W;return L}function E(e){
he||(h(),he=!0),e.l_desc=new de(e.dyn_ltree,oe),e.d_desc=new de(e.dyn_dtree,le),
e.bl_desc=new de(e.bl_tree,ue),e.bi_buf=0,e.bi_valid=0,b(e)}function S(e,t,r,n){
s(e,(D<<1)+(n?1:0),3),f(e,t,r,!0)}function R(e){s(e,z<<1,3),o(e,V,te),u(e)}
function A(e,t,r,n){var a,i,o=0
;e.level>0?(e.strm.data_type===j&&(e.strm.data_type=C(e)),
_(e,e.l_desc),_(e,e.d_desc),
o=y(e),a=e.opt_len+3+7>>>3,(i=e.static_len+3+7>>>3)<=a&&(a=i)):a=i=r+5,
r+4<=a&&-1!==t?S(e,t,r,n):e.strategy===P||i===a?(s(e,(z<<1)+(n?1:0),3),
p(e,te,re)):(s(e,($<<1)+(n?1:0),3),
x(e,e.l_desc.max_code+1,e.d_desc.max_code+1,o+1),
p(e,e.dyn_ltree,e.dyn_dtree)),b(e),n&&m(e)}function T(e,t,r){
return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,
e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,
e.pending_buf[e.l_buf+e.last_lit]=255&r,
e.last_lit++,0===t?e.dyn_ltree[2*r]++:(e.matches++,
t--,e.dyn_ltree[2*(ae[r]+O+1)]++,
e.dyn_dtree[2*a(t)]++),e.last_lit===e.lit_bufsize-1}
var M=e("./utils"),P=4,L=0,W=1,j=2,D=0,z=1,$=2,I=29,O=256,B=O+1+I,F=30,N=19,U=2*B+1,q=15,H=16,Z=7,V=256,G=16,K=17,X=18,Y=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Q=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],J=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],ee=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],te=new Array(2*(B+2))
;n(te);var re=new Array(2*F);n(re);var ne=new Array(512);n(ne)
;var ae=new Array(256);n(ae);var ie=new Array(I);n(ie);var se=new Array(F);n(se)
;var oe,le,ue,ce=function(e,t,r,n,a){
this.static_tree=e,this.extra_bits=t,this.extra_base=r,
this.elems=n,this.max_length=a,this.has_stree=e&&e.length},de=function(e,t){
this.dyn_tree=e,this.max_code=0,this.stat_desc=t},he=!1
;r._tr_init=E,r._tr_stored_block=S,
r._tr_flush_block=A,r._tr_tally=T,r._tr_align=R},{"./utils":13}],
13:[function(e,t,r){
var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array
;r.assign=function(e){
for(var t=Array.prototype.slice.call(arguments,1);t.length;){var r=t.shift()
;if(r){
if("object"!==$traceurRuntime.typeof(r))throw new TypeError(r+"must be non-object")
;for(var n in r)r.hasOwnProperty(n)&&(e[n]=r[n])}}return e
},r.shrinkBuf=function(e,t){
return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var a={
arraySet:function(e,t,r,n,a){
if(t.subarray)return void e.set(t.subarray(r,r+n),a)
;for(var i=0;i<n;i++)e[a+i]=t[r+i]},flattenChunks:function(e){var t,r,n,a,i,s
;for(n=0,t=0,r=e.length;t<r;t++)n+=e[t].length
;for(s=new Uint8Array(n),a=0,t=0,r=e.length;t<r;t++)i=e[t],
s.set(i,a),a+=i.length;return s}},i={arraySet:function(e,t,r,n,a){
for(var i=0;i<n;i++)e[a+i]=t[r+i]},flattenChunks:function(e){
return[].concat.apply([],e)}};r.setTyped=function(e){
e?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,
r.Buf32=Int32Array,r.assign(r,a)):(r.Buf8=Array,
r.Buf16=Array,r.Buf32=Array,r.assign(r,i))},r.setTyped(n)},{}],
14:[function(e,t,r){function n(){
this.next_in=null,this.next_in_index=0,this.avail_in=0,
this.total_in=0,this.next_out=null,
this.next_out_index=0,this.avail_out=0,this.total_out=0,
this.msg="",this.state=null,this.data_type=2,this.adler=0}t.exports=n},{}]
},{},[1])(1)});var e=window.pako;return{get default(){return e}}
}),$traceurRuntime.registerModule("utils/artwork",[],function(){"use strict"
;var e=$traceurRuntime.getModule($traceurRuntime.normalizeModuleName("../libs/pako","utils/artwork")).default,t=function(t){
for(var r=[],n=0,a=t.length;n<a;n+=1)r.push(t[n].charCodeAt(0))
;var i=new Uint8Array(r);return e.gzip(i)},r=function(t){
for(var r=e.inflate(t),n="",a=0,i=r.length;a<i;a+=1){
n+=String.fromCharCode(r[a])}return n},n=function(e){
return new Promise(function(t){var r=new Image;r.src=e,r.onload=function(){
var n=r.naturalWidth,a=r.naturalHeight
;t('<?xml version="1.0" encoding="utf-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 '+n+" "+a+'">  <image width="'+n+'" height="'+a+'" xlink:href="'+e+'"></image></svg>')
}})};return{get compressArtwork(){return t},get uncompressArtwork(){return r},
get createArtworkFromBitmapDataURL(){return n}}
}),$traceurRuntime.registerModule("utils/element",[],function(){"use strict"
;var e=function(e){
var t,r,n,a,i=void 0!==arguments[1]?arguments[1]:null,s=e.split(":"),o=null
;if(1===s.length){
var l=(t=s[Symbol.iterator](),(r=t.next()).done?void 0:r.value)
;o=document.createElement(l,i)}else if(2===s.length){
var u=s,c=(n=u[Symbol.iterator](),
(a=n.next()).done?void 0:a.value),d=(a=n.next()).done?void 0:a.value
;"svg"===c&&(o=document.createElementNS("http://www.w3.org/2000/svg",d,i))}
return o},t=function(e,t){var r=void 0!==arguments[2]?arguments[2]:null
;if(null===r){var n=t;return document.registerElement(e,n)}var a=t,i=r
;return document.registerElement(a,{extends:e,prototype:i.prototype})
},r=function(e){
for(var t=e;t;t=t.parentNode)if(t instanceof ShadowRoot||t===window.document)return t
};return{get createElement(){return e},get registerElement(){return t},
get getClosestShadowRoot(){return r}}
}),$traceurRuntime.registerModule("utils/filesystem",[],function(){"use strict"
;var e=function(e){var t=void 0!==arguments[1]?arguments[1]:"text"
;return new Promise(function(r){e.file(function(e){var n,a,i,s=new FileReader
;"text"===t?s.readAsText(e):"dataURL"===t?s.readAsDataURL(e):"arrayBuffer"===t&&s.readAsArrayBuffer(e),
s.addEventListener("load",a=function(e){
s.removeEventListener("load",a),s.removeEventListener("error",i),
n="arrayBuffer"===t?new Uint8Array(e.target.result):e.target.result,r(n)
}),s.addEventListener("error",i=function(e){
s.removeEventListener("load",a),s.removeEventListener("error",i),r(null)})})})
},t=function(e,t){var r=void 0!==arguments[2]?arguments[2]:"text/plain"
;return new Promise(function(n,a){var i
;return $traceurRuntime.asyncWrap(function(s){for(;;)switch(s.state){case 0:
return void Promise.resolve(l(e)).then(s.createCallback(3),s.errback);case 3:
i=s.value,s.state=2;break;case 2:i?i.createWriter(function(e){
var i,s,o=new Blob([t],{type:r}),l="write"
;e.addEventListener("writeend",i=function(t){
"write"===l?(l="truncate",e.truncate(o.size)):"truncate"===l&&(e.removeEventListener("writeend",i),
e.removeEventListener("error",s),n())
}),e.addEventListener("error",s=function(t){e.removeEventListener("writeend",i),
e.removeEventListener("error",s),a("READ_ONLY")}),e.write(o)},function(e){
a("NOT_FOUND")}):a("READ_ONLY"),s.state=-2;break;default:return s.end()}},this)
})},r=function(e){return new Promise(function(t,r){
chrome.fileSystem.chooseEntry(e,function(n){
chrome.runtime.lastError?"User cancelled"===chrome.runtime.lastError.message?t(!0===e.acceptsMultiple?[]:null):r(chrome.runtime.lastError.message):t(n)
})})},n=function(e){return new Promise(function(t){
chrome.fileSystem.restoreEntry(e,function(e){e?e.file(function(){return t(e)
},function(){return t(null)}):t(null)})})},a=function(e,t){
return $traceurRuntime.asyncWrap(function(r){for(;;)switch(r.state){case 0:
r.returnValue=new Promise(function(r){var n,a
;return $traceurRuntime.asyncWrap(function(s){for(;;)switch(s.state){case 0:
return void Promise.resolve(i(e)).then(s.createCallback(3),s.errback);case 3:
n=s.value,s.state=2;break;case 2:
return void Promise.resolve(i(t)).then(s.createCallback(6),s.errback);case 6:
a=s.value,s.state=5;break;case 5:r(n===a),s.state=-2;break;default:
return s.end()}},this)}),r.state=2;break;case 2:r.state=-2;break;default:
return r.end()}},this)},i=function(e){return new Promise(function(t){
chrome.fileSystem.getDisplayPath(e,function(e){t(e)})})},s=function(e){
return e.name.substring(0,e.name.lastIndexOf("."))},o=function(e){
return e.name&&e.name.includes(".")?e.name.substring(e.name.lastIndexOf(".")+1).toLowerCase():""
},l=function(e){return new Promise(function(t){
chrome.fileSystem.isWritableEntry(e,function(r){
r?t(e):chrome.fileSystem.getWritableEntry(e,function(e){
t(chrome.runtime.lastError?null:e)})})})};return{get readEntry(){return e},
get writeEntry(){return t},get chooseEntry(){return r},get restoreEntry(){
return n},get compareEntries(){return a},get getEntryDisplayPath(){return i},
get getEntryBaseName(){return s},get getEntryExtension(){return o}}
}),$traceurRuntime.registerModule("utils/string",[],function(){"use strict"
;var e=function(e){return e.replace(/([A-Z])/g,function(e){
return"-"+e.toLowerCase()})};return{get toDashCase(){return e}}
}),$traceurRuntime.registerModule("utils/time",[],function(){"use strict"
;var e=function(e){return new Promise(function(t,r){setTimeout(function(){
return t()},e)})},t=function(){return Date.now()},r=function(e,t,r){
var n=void 0!==arguments[3]&&arguments[3],a=null,i=null;return function(){
for(var s=[],o=0;o<arguments.length;o++)s[o]=arguments[o];var l=function(){
a=null,n||(i=e.apply(r,s))},u=n&&!a
;return clearTimeout(a),a=setTimeout(l,t),u&&(i=e.apply(r,s)),i}};return{
get sleep(){return e},get getTimeStamp(){return t},get debounce(){return r}}
}),$traceurRuntime.registerModule("utils/vendor",[],function(){"use strict"
;var e=function(){
return parseInt(navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)[2])
},t=function(){
return navigator.platform.startsWith("Win")?"windows":navigator.platform.startsWith("Mac")?"osx":"iPhone"===navigator.platform||"iPad"===navigator.platform?"ios":"Android"===navigator.platform?"android":navigator.userAgent.includes("CrOS")?"chromeos":navigator.platform.startsWith("Linux")?"linux":"other"
};return{get getChromeVersion(){return e},get getOperatingSystemName(){return t}
}}),$traceurRuntime.registerModule("utils/window",[],function(){"use strict"
;var e=function(e,t){return new Promise(function(r){
chrome.app.window.create(e,t,function(e){r(e)})})},t=function(){
return new Promise(function(e){chrome.runtime.getBackgroundPage(function(t){
return e(t)})})};return{get createAppWindow(){return e},
get getBackgroundWindow(){return t}}});