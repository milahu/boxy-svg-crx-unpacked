!function(t){"use strict";function e(t,e,n){for(var r=[e],i=0;i<n.length;i++)r[i+1]=n[i];
var o=S(Function.prototype.bind,t,r);return o}function n(t,n){var r=new(e(t,null,n));
return r}function r(){return"__$"+Math.floor(1e9*Math.random())+"$"+ ++E+"$__"}function i(t){
return j[t]}function o(){var t=r();return j[t]=!0,t}function s(t,e,n){return[k,t,e,n];
}function a(t){return t&&t[0]===k}function u(){C=o(),Function.prototype.call=c(function(t){
var e=h(function(t){for(var e=[],n=1;n<arguments.length;++n)e[n-1]=arguments[n];var r=s(this,t,e);
return r},this,arguments);return e}),Function.prototype.apply=c(function(t,e){var n=h(function(t,e){
var n=s(this,t,e);return n},this,arguments);return n})}function c(t){return null===C&&u(),
t[C]=!0,t}function l(t){return!!t[C]}function h(t,e,n){var r=n[0];if(a(r))return r=S(t,e,r[3]);
for(r=s(t,e,n);;){if(r=l(t)?S(t,r[2],[r]):S(t,r[2],r[3]),!a(r))return r;t=r[1]}}function d(){
var t;return t=l(this)?n(this,[s(null,null,arguments)]):n(this,arguments)}if(!t.$traceurRuntime){
var f=Object,m=TypeError,b=f.create,g=f.defineProperty,p=f.freeze,v=f.getOwnPropertyNames,_=f.keys,y=(f.prototype.toString,
Object.preventExtensions),w=Object.seal,x=Object.isExtensible,S=Function.prototype.call.bind(Function.prototype.apply),E=0,j=b(null),k=Object.create(null),C=null;
!function(){function e(t){return{configurable:!0,enumerable:!1,value:t,writable:!0
}}function n(t){var e=new a(t);if(!(this instanceof n))return e;throw new TypeError("Symbol cannot be new'ed");
}function a(t){var e=r();g(this,$,{value:this}),g(this,N,{value:e}),g(this,W,{value:t
}),l(this),H[e]=this}function u(t){var e=t[U];return e&&e.self===t?e:x(t)?(G.hash.value=q++,
G.self.value=t,V.value=b(null,G),g(t,U,V),V.value):void 0}function l(t){return u(t),
p.apply(this,arguments)}function S(t){return u(t),y.apply(this,arguments)}function E(t){
return u(t),w.apply(this,arguments)}function k(t){return H[t]||j[t]}function C(t){
for(var e=[],n=0;n<t.length;n++)k(t[n])||e.push(t[n]);return e}function O(t){return C(v(t));
}function M(t){return C(_(t))}function R(t){for(var e=[],n=v(t),r=0;r<n.length;r++){
var i=H[n[r]];i&&e.push(i)}return e}function A(t){g(t,"getOwnPropertyNames",{value:O
}),g(t,"freeze",{value:l}),g(t,"preventExtensions",{value:S}),g(t,"seal",{value:E
}),g(t,"keys",{value:M})}function T(t){for(var e=1;e<arguments.length;e++)for(var n=v(arguments[e]),r=0;r<n.length;r++){
var i=n[r];"__esModule"===i||"default"===i||k(i)||!function(e,n){g(t,n,{get:function(){
return e[n]},enumerable:!0})}(arguments[e],n[r])}return t}function L(t){return null!=t&&("object"==typeof t||"function"==typeof t);
}function I(t){if(null==t)throw m();return f(t)}function F(t){if(null==t)throw new TypeError("Value cannot be converted to an Object");
return t}function B(t,e){t.Symbol?K=!0:(t.Symbol=e,Object.getOwnPropertySymbols=R,
K=!1),t.Symbol.iterator||(t.Symbol.iterator=e("Symbol.iterator")),t.Symbol.observer||(t.Symbol.observer=e("Symbol.observer"));
}function z(){return K}function D(t){B(t,n),t.Reflect=t.Reflect||{},t.Reflect.global=t.Reflect.global||t,
A(t.Object)}var P=e,N=r(),W=r(),$=r(),H=b(null);g(n.prototype,"constructor",e(n)),
g(n.prototype,"toString",P(function(){var t=this[$];return t[N]})),g(n.prototype,"valueOf",P(function(){
var t=this[$];if(!t)throw TypeError("Conversion from symbol to string");return t[N];
})),g(a.prototype,"constructor",e(n)),g(a.prototype,"toString",{value:n.prototype.toString,
enumerable:!1}),g(a.prototype,"valueOf",{value:n.prototype.valueOf,enumerable:!1});
var U=o(),V={value:void 0},G={hash:{value:void 0},self:{value:void 0}},q=0;l(a.prototype);
var K;D(t);var Z=K?function(t){return typeof t}:function(t){return t instanceof a?"symbol":typeof t;
};t.$traceurRuntime={call:h,checkObjectCoercible:F,construct:d,continuation:s,createPrivateName:o,
exportStar:T,getOwnHashObject:u,getOwnPropertyNames:v,hasNativeSymbol:z,initTailRecursiveFunction:c,
isObject:L,isPrivateName:i,isSymbolString:k,keys:_,options:{},setupGlobals:D,toObject:I,
"typeof":Z}}()}}("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this),
function(){function t(t,e,n,r,i,o,s){var a=[];return t&&a.push(t,":"),n&&(a.push("//"),
e&&a.push(e,"@"),a.push(n),r&&a.push(":",r)),i&&a.push(i),o&&a.push("?",o),s&&a.push("#",s),
a.join("")}function e(t){return t.match(a)}function n(t){if("/"===t)return"/";for(var e="/"===t[0]?"/":"",n="/"===t.slice(-1)?"/":"",r=t.split("/"),i=[],o=0,s=0;s<r.length;s++){
var a=r[s];switch(a){case"":case".":break;case"..":i.length?i.pop():o++;break;default:
i.push(a)}}if(!e){for(;o-- >0;)i.unshift("..");0===i.length&&i.push(".")}return e+i.join("/")+n;
}function r(e){var r=e[u.PATH]||"";return r=n(r),e[u.PATH]=r,t(e[u.SCHEME],e[u.USER_INFO],e[u.DOMAIN],e[u.PORT],e[u.PATH],e[u.QUERY_DATA],e[u.FRAGMENT]);
}function i(t){var n=e(t);return r(n)}function o(t,n){var i=e(n),o=e(t);if(i[u.SCHEME])return r(i);
i[u.SCHEME]=o[u.SCHEME];for(var s=u.SCHEME;s<=u.PORT;s++)i[s]||(i[s]=o[s]);if("/"==i[u.PATH][0])return r(i);
var a=o[u.PATH],c=a.lastIndexOf("/");return a=a.slice(0,c+1)+i[u.PATH],i[u.PATH]=a,
r(i)}function s(t){if(!t)return!1;if("/"===t[0])return!0;var n=e(t);return n[u.SCHEME]?!0:!1;
}var a=new RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),u={
SCHEME:1,USER_INFO:2,DOMAIN:3,PORT:4,PATH:5,QUERY_DATA:6,FRAGMENT:7};$traceurRuntime.canonicalizeUrl=i,
$traceurRuntime.isAbsolute=s,$traceurRuntime.removeDotSegments=n,$traceurRuntime.resolveUrl=o;
}(),function(t){"use strict";function e(t,e){this.url=t,this.value_=e}function n(t,e){
this.message=this.constructor.name+": "+this.stripCause(e)+" in "+t,e instanceof n||!e.stack?this.stack="":this.stack=this.stripStack(e.stack);
}function r(t,e){var n=[],r=e-3;0>r&&(r=0);for(var i=r;e>i;i++)n.push(t[i]);return n;
}function i(t,e){var n=e+1;n>t.length-1&&(n=t.length-1);for(var r=[],i=e;n>=i;i++)r.push(t[i]);
return r}function o(t){for(var e="",n=0;t-1>n;n++)e+="-";return e}function s(t,n){
e.call(this,t,null),this.func=n}function a(t){if(t){var e=p.normalize(t);return m[e];
}}function u(t){var e=arguments[1],n=Object.create(null);return Object.getOwnPropertyNames(t).forEach(function(r){
var i,o;if(e===g){var s=Object.getOwnPropertyDescriptor(t,r);s.get&&(i=s.get)}i||(o=t[r],
i=function(){return o}),Object.defineProperty(n,r,{get:i,enumerable:!0})}),Object.preventExtensions(n),
n}var c,l=$traceurRuntime,h=l.canonicalizeUrl,d=l.resolveUrl,f=l.isAbsolute,m=Object.create(null);
c=t.location&&t.location.href?d(t.location.href,"./"):"",n.prototype=Object.create(Error.prototype),
n.prototype.constructor=n,n.prototype.stripError=function(t){return t.replace(/.*Error:/,this.constructor.name+":");
},n.prototype.stripCause=function(t){return t?t.message?this.stripError(t.message):t+"":"";
},n.prototype.loadedBy=function(t){this.stack+="\n loaded by "+t},n.prototype.stripStack=function(t){
var e=[];return t.split("\n").some(function(t){return/UncoatedModuleInstantiator/.test(t)?!0:void e.push(t);
}),e[0]=this.stripError(e[0]),e.join("\n")},s.prototype=Object.create(e.prototype),
s.prototype.getUncoatedModule=function(){var e=this;if(this.value_)return this.value_;
try{var s;return void 0!==typeof $traceurRuntime&&$traceurRuntime.require&&(s=$traceurRuntime.require.bind(null,this.url)),
this.value_=this.func.call(t,s)}catch(a){if(a instanceof n)throw a.loadedBy(this.url),
a;if(a.stack){var u=this.func.toString().split("\n"),c=[];a.stack.split("\n").some(function(t,n){
if(t.indexOf("UncoatedModuleInstantiator.getUncoatedModule")>0)return!0;var s=/(at\s[^\s]*\s).*>:(\d*):(\d*)\)/.exec(t);
if(s){var a=parseInt(s[2],10);c=c.concat(r(u,a)),1===n?c.push(o(s[3])+"^ "+e.url):c.push(o(s[3])+"^"),
c=c.concat(i(u,a)),c.push("= = = = = = = = =")}else c.push(t)}),a.stack=c.join("\n");
}throw new n(this.url,a)}};var b=Object.create(null),g={},p={normalize:function(t,e,n){
if("string"!=typeof t)throw new TypeError("module name must be a string, not "+typeof t);
if(f(t))return h(t);if(/[^\.]\/\.\.\//.test(t))throw new Error("module name embeds /../: "+t);
return"."===t[0]&&e?d(e,t):h(t)},get:function(t){var e=a(t);if(e){var n=b[e.url];return n?n:(n=u(e.getUncoatedModule(),g),
b[e.url]=n)}},set:function(t,e){t=String(t),m[t]=new s(t,function(){return e}),b[t]=e;
},get baseURL(){return c},set baseURL(t){c=String(t)},registerModule:function(t,e,n){
var r=p.normalize(t);if(m[r])throw new Error("duplicate module named "+r);m[r]=new s(r,n);
},bundleStore:Object.create(null),register:function(t,e,n){e&&(e.length||n.length)?this.bundleStore[t]={
deps:e,execute:function(){var t=arguments,r={};e.forEach(function(e,n){return r[e]=t[n];
});var i=n.call(this,r);return i.execute.call(this),i.exports}}:this.registerModule(t,e,n);
},getAnonymousModule:function(e){return new u(e.call(t),g)}},v=new u({ModuleStore:p
});p.set("@traceur/src/runtime/ModuleStore.js",v);var _=$traceurRuntime.setupGlobals;
$traceurRuntime.setupGlobals=function(t){_(t)},$traceurRuntime.ModuleStore=p,t.System={
register:p.register.bind(p),registerModule:p.registerModule.bind(p),get:p.get,set:p.set,
normalize:p.normalize}}("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this),
System.registerModule("traceur-runtime@0.0.92/src/runtime/async.js",[],function(){
"use strict";function t(){}function e(){}function n(t){return t.prototype=c(e.prototype),
t.__proto__=e,t}function r(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];
var i=c(e.prototype);return i[h]=this,i[d]=n,i[f]=t,i}function i(t,e){return new Promise(function(n,r){
var i=t({next:function(t){return e.call(i,t)},"throw":function(t){r(t)},"return":function(t){
n(t)}})})}function o(t){return Promise.resolve().then(t)}function s(t,e){return new p(t,e);
}if("object"!=typeof $traceurRuntime)throw new Error("traceur runtime not found.");
var a=$traceurRuntime.createPrivateName,u=Object,c=u.create,l=u.defineProperty,h=a(),d=a(),f=a();
t.prototype=e,e.constructor=t,l(e,"constructor",{enumerable:!1});var m=function(){
function t(t){var e=this;this.decoratedObserver=$traceurRuntime.createDecoratedGenerator(t,function(){
e.done=!0}),this.done=!1,this.inReturn=!1}return $traceurRuntime.createClass(t,{"throw":function(t){
if(!this.inReturn)throw t},"yield":function(t){if(this.done)throw void(this.inReturn=!0);
var e;try{e=this.decoratedObserver.next(t)}catch(n){throw this.done=!0,n}if(void 0!==e){
if(e.done)throw this.done=!0,void(this.inReturn=!0);return e.value}},yieldFor:function(t){
var e=this;return $traceurRuntime.observeForEach(t[Symbol.observer].bind(t),function(t){
if(e.done)return void this["return"]();var n;try{n=e.decoratedObserver.next(t)}catch(r){
throw e.done=!0,r}if(void 0!==n)return n.done&&(e.done=!0),n})}},{})}();e.prototype[Symbol.observer]=function(t){
var e=this[f],n=new m(t);return $traceurRuntime.schedule(function(){return e(n)}).then(function(t){
n.done||n.decoratedObserver["return"](t)})["catch"](function(t){n.done||n.decoratedObserver["throw"](t);
}),n.decoratedObserver},l(e.prototype,Symbol.observer,{enumerable:!1});var b=Symbol(),g=Symbol(),p=function(){
function t(t,e){this[b]=t,this[g]=e}return $traceurRuntime.createClass(t,{next:function(t){
var e=this[b].next(t);return void 0!==e&&e.done&&this[g].call(this),e},"throw":function(t){
return this[g].call(this),this[b]["throw"](t)},"return":function(t){return this[g].call(this),
this[b]["return"](t)}},{})}();return Array.prototype[Symbol.observer]=function(t){
var e=!1,n=s(t,function(){return e=!0}),r=!0,i=!1,o=void 0;try{for(var a=void 0,u=this[Symbol.iterator]();!(r=(a=u.next()).done);r=!0){
var c=a.value;if(n.next(c),e)return}}catch(l){i=!0,o=l}finally{try{r||null==u["return"]||u["return"]();
}finally{if(i)throw o}}return n["return"](),n},l(Array.prototype,Symbol.observer,{
enumerable:!1}),$traceurRuntime.initAsyncGeneratorFunction=n,$traceurRuntime.createAsyncGeneratorInstance=r,
$traceurRuntime.observeForEach=i,$traceurRuntime.schedule=o,$traceurRuntime.createDecoratedGenerator=s,
{}}),System.registerModule("traceur-runtime@0.0.92/src/runtime/classes.js",[],function(){
"use strict";function t(t,e){var n=v(t);do{var r=b(n,e);if(r)return r;n=v(n)}while(n);
}function e(t){return t.__proto__}function n(e,n,r){var i=t(n,r);if(i){var o=i.value;
return o?o:i.get?i.get.call(e):o}}function r(e,n,r,i){var o=t(n,r);if(o&&o.set)return o.set.call(e,i),
i;throw l("super has no setter '"+r+"'.")}function i(t,e){g(t).forEach(e),p(t).forEach(e);
}function o(t){var e={};return i(t,function(n){e[n]=b(t,n),e[n].enumerable=!1}),e;
}function s(t){i(t,function(e){m(t,e,_)})}function a(t,e,n,r){return m(e,"constructor",{
value:t,configurable:!0,enumerable:!1,writable:!0}),arguments.length>3?("function"==typeof r&&(t.__proto__=r),
t.prototype=d(u(r),o(e))):(s(e),t.prototype=e),m(t,"prototype",{configurable:!1,writable:!1
}),f(t,o(n))}function u(t){if("function"==typeof t){var e=t.prototype;if(c(e)===e||null===e)return t.prototype;
throw new l("super prototype must be an Object or null")}if(null===t)return null;throw new l("Super expression must either be null or a function, not "+typeof t+".");
}var c=Object,l=TypeError,h=Object,d=h.create,f=h.defineProperties,m=h.defineProperty,b=h.getOwnPropertyDescriptor,g=h.getOwnPropertyNames,p=h.getOwnPropertySymbols,v=h.getPrototypeOf,_={
enumerable:!1};return $traceurRuntime.createClass=a,$traceurRuntime.superConstructor=e,
$traceurRuntime.superGet=n,$traceurRuntime.superSet=r,{}}),System.registerModule("traceur-runtime@0.0.92/src/runtime/destructuring.js",[],function(){
"use strict";function t(t){for(var e,n=[],r=0;!(e=t.next()).done;)n[r++]=e.value;return n;
}return $traceurRuntime.iteratorToArray=t,{}}),System.registerModule("traceur-runtime@0.0.92/src/runtime/generators.js",[],function(){
"use strict";function t(t){return{configurable:!0,enumerable:!1,value:t,writable:!0
}}function e(t){return new Error("Traceur compiler bug: invalid state in state machine: "+t);
}function n(){this.state=0,this.GState=v,this.storedException=void 0,this.finallyFallThrough=void 0,
this.sent_=void 0,this.returnValue=void 0,this.oldReturnValue=void 0,this.tryStack_=[];
}function r(t,e,n,r){switch(t.GState){case _:throw new Error('"'+n+'" on executing generator');
case w:if("next"==n)return{value:void 0,done:!0};if(r===E)return{value:t.returnValue,
done:!0};throw r;case v:if("throw"===n){if(t.GState=w,r===E)return{value:t.returnValue,
done:!0};throw r}if(void 0!==r)throw d("Sent value to newborn generator");case y:
t.GState=_,t.action=n,t.sent=r;var i;try{i=e(t)}catch(o){if(o!==E)throw o;i=t}var s=i===t;
return s&&(i=t.returnValue),t.GState=s?w:y,{value:i,done:s}}}function i(){}function o(){}
function s(t,e,r){var i=l(t,r),o=new n,s=b(e.prototype);return s[j]=o,s[k]=i,s}function a(t){
return t.prototype=b(o.prototype),t.__proto__=o,t}function u(){n.call(this),this.err=void 0;
var t=this;t.result=new Promise(function(e,n){t.resolve=e,t.reject=n})}function c(t,e){
var n=l(t,e),r=new u;return r.createCallback=function(t){return function(e){r.state=t,
r.value=e,n(r)}},r.errback=function(t){h(r,t),n(r)},n(r),r.result}function l(t,e){
return function(n){for(;;)try{return t.call(e,n)}catch(r){h(n,r)}}}function h(t,e){
t.storedException=e;var n=t.tryStack_[t.tryStack_.length-1];return n?(t.state=void 0!==n["catch"]?n["catch"]:n["finally"],
void(void 0!==n.finallyFallThrough&&(t.finallyFallThrough=n.finallyFallThrough))):void t.handleException(e);
}if("object"!=typeof $traceurRuntime)throw new Error("traceur runtime not found.");
var d=TypeError,f=$traceurRuntime.createPrivateName,m=Object,b=m.create,g=m.defineProperties,p=m.defineProperty,v=0,_=1,y=2,w=3,x=-2,S=-3,E={};
n.prototype={pushTry:function(t,e){if(null!==e){for(var n=null,r=this.tryStack_.length-1;r>=0;r--)if(void 0!==this.tryStack_[r]["catch"]){
n=this.tryStack_[r]["catch"];break}null===n&&(n=S),this.tryStack_.push({"finally":e,
finallyFallThrough:n})}null!==t&&this.tryStack_.push({"catch":t})},popTry:function(){
this.tryStack_.pop()},maybeUncatchable:function(){if(this.storedException===E)throw E;
},get sent(){return this.maybeThrow(),this.sent_},set sent(t){this.sent_=t},get sentIgnoreThrow(){
return this.sent_},maybeThrow:function(){if("throw"===this.action)throw this.action="next",
this.sent_},end:function(){switch(this.state){case x:return this;case S:throw this.storedException;
default:throw e(this.state)}},handleException:function(t){throw this.GState=w,this.state=x,
t},wrapYieldStar:function(t){var e=this;return{next:function(e){return t.next(e)},
"throw":function(n){var r;if(n===E){if(t["return"]){if(r=t["return"](e.returnValue),
!r.done)return e.returnValue=e.oldReturnValue,r;e.returnValue=r.value}throw n}if(t["throw"])return t["throw"](n);
throw t["return"]&&t["return"](),d("Inner iterator does not have a throw method");
}}}};var j=f(),k=f();return i.prototype=o,p(o,"constructor",t(i)),o.prototype={constructor:o,
next:function(t){return r(this[j],this[k],"next",t)},"throw":function(t){return r(this[j],this[k],"throw",t);
},"return":function(t){return this[j].oldReturnValue=this[j].returnValue,this[j].returnValue=t,
r(this[j],this[k],"throw",E)}},g(o.prototype,{constructor:{enumerable:!1},next:{enumerable:!1
},"throw":{enumerable:!1},"return":{enumerable:!1}}),Object.defineProperty(o.prototype,Symbol.iterator,t(function(){
return this})),u.prototype=b(n.prototype),u.prototype.end=function(){switch(this.state){
case x:this.resolve(this.returnValue);break;case S:this.reject(this.storedException);
break;default:this.reject(e(this.state))}},u.prototype.handleException=function(){
this.state=S},$traceurRuntime.asyncWrap=c,$traceurRuntime.initGeneratorFunction=a,
$traceurRuntime.createGeneratorInstance=s,{}}),System.registerModule("traceur-runtime@0.0.92/src/runtime/relativeRequire.js",[],function(){
"use strict";function t(t,n){function r(t){return"/"===t.slice(-1)}function i(t){
return"/"===t[0]}function o(t){return"."===t[0]}return e=e||"undefined"!=typeof require&&require("path"),
r(n)||i(n)?void 0:o(n)?require(e.resolve(e.dirname(t),n)):require(n)}var e;return $traceurRuntime.require=t,
{}}),System.registerModule("traceur-runtime@0.0.92/src/runtime/spread.js",[],function(){
"use strict";function t(){for(var t,e=[],n=0,r=0;r<arguments.length;r++){var i=$traceurRuntime.checkObjectCoercible(arguments[r]);
if("function"!=typeof i[Symbol.iterator])throw new TypeError("Cannot spread non-iterable object.");
for(var o=i[Symbol.iterator]();!(t=o.next()).done;)e[n++]=t.value}return e}return $traceurRuntime.spread=t,
{}}),System.registerModule("traceur-runtime@0.0.92/src/runtime/template.js",[],function(){
"use strict";function t(t){var e=arguments[1],s=t.join("${}"),a=o[s];return a?a:(e||(e=i.call(t)),
o[s]=r(n(e,"raw",{value:r(t)})))}var e=Object,n=e.defineProperty,r=e.freeze,i=Array.prototype.slice,o=Object.create(null);
return $traceurRuntime.getTemplateObject=t,{}}),System.registerModule("traceur-runtime@0.0.92/src/runtime/type-assertions.js",[],function(){
"use strict";function t(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];
var o=r,s=$traceurRuntime.getOwnHashObject(t).hash;o[s]||(o[s]=Object.create(null)),
o=o[s];for(var a=0;a<e.length-1;a++)s=$traceurRuntime.getOwnHashObject(e[a]).hash,
o[s]||(o[s]=Object.create(null)),o=o[s];var u=e[e.length-1];return s=$traceurRuntime.getOwnHashObject(u).hash,
o[s]||(o[s]=new n(t,e)),o[s]}var e={any:{name:"any"},"boolean":{name:"boolean"},number:{
name:"number"},string:{name:"string"},symbol:{name:"symbol"},"void":{name:"void"}
},n=function(){function t(t,e){this.type=t,this.argumentTypes=e}return $traceurRuntime.createClass(t,{},{});
}(),r=Object.create(null);return $traceurRuntime.GenericType=n,$traceurRuntime.genericType=t,
$traceurRuntime.type=e,{}}),System.registerModule("traceur-runtime@0.0.92/src/runtime/runtime-modules.js",[],function(){
"use strict";return System.get("traceur-runtime@0.0.92/src/runtime/relativeRequire.js"),
System.get("traceur-runtime@0.0.92/src/runtime/spread.js"),System.get("traceur-runtime@0.0.92/src/runtime/destructuring.js"),
System.get("traceur-runtime@0.0.92/src/runtime/classes.js"),System.get("traceur-runtime@0.0.92/src/runtime/async.js"),
System.get("traceur-runtime@0.0.92/src/runtime/generators.js"),System.get("traceur-runtime@0.0.92/src/runtime/template.js"),
System.get("traceur-runtime@0.0.92/src/runtime/type-assertions.js"),{}}),System.get("traceur-runtime@0.0.92/src/runtime/runtime-modules.js"),
System.registerModule("traceur-runtime@0.0.92/src/runtime/polyfills/utils.js",[],function(){
"use strict";function t(t){return t>>>0}function e(t){return t&&("object"==typeof t||"function"==typeof t);
}function n(t){return"function"==typeof t}function r(t){return"number"==typeof t}
function i(t){return t=+t,y(t)?0:0!==t&&_(t)?t>0?v(t):p(t):t}function o(t){var e=i(t);
return 0>e?0:x(e,E)}function s(t){return e(t)?t[Symbol.iterator]:void 0}function a(t){
return n(t)}function u(t,e){return{value:t,done:e}}function c(t,e,n){e in t||Object.defineProperty(t,e,n);
}function l(t,e,n){c(t,e,{value:n,configurable:!0,enumerable:!1,writable:!0})}function h(t,e,n){
c(t,e,{value:n,configurable:!1,enumerable:!1,writable:!1})}function d(t,e){for(var n=0;n<e.length;n+=2){
var r=e[n],i=e[n+1];l(t,r,i)}}function f(t,e){for(var n=0;n<e.length;n+=2){var r=e[n],i=e[n+1];
h(t,r,i)}}function m(t,e,n){n&&n.iterator&&!t[n.iterator]&&(t["@@iterator"]&&(e=t["@@iterator"]),
Object.defineProperty(t,n.iterator,{value:e,configurable:!0,enumerable:!1,writable:!0
}))}function b(t){j.push(t)}function g(t){j.forEach(function(e){return e(t)})}var p=Math.ceil,v=Math.floor,_=isFinite,y=isNaN,w=Math.pow,x=Math.min,S=$traceurRuntime.toObject,E=w(2,53)-1,j=[];
return{get toObject(){return S},get toUint32(){return t},get isObject(){return e},
get isCallable(){return n},get isNumber(){return r},get toInteger(){return i},get toLength(){
return o},get checkIterable(){return s},get isConstructor(){return a},get createIteratorResultObject(){
return u},get maybeDefine(){return c},get maybeDefineMethod(){return l},get maybeDefineConst(){
return h},get maybeAddFunctions(){return d},get maybeAddConsts(){return f},get maybeAddIterator(){
return m},get registerPolyfill(){return b},get polyfillAll(){return g}}}),System.registerModule("traceur-runtime@0.0.92/src/runtime/polyfills/Map.js",[],function(){
"use strict";function t(t,e){if(o(e)){var n=u(e);return n&&t.objectIndex_[n.hash];
}return"string"==typeof e?t.stringIndex_[e]:t.primitiveIndex_[e]}function e(t){t.entries_=[],
t.objectIndex_=Object.create(null),t.stringIndex_=Object.create(null),t.primitiveIndex_=Object.create(null),
t.deletedCount_=0}function n(t){var e=t,n=e.Map,r=e.Symbol;if(!(n&&$traceurRuntime.hasNativeSymbol()&&n.prototype[r.iterator]&&n.prototype.entries))return!0;
try{return 1!==new n([[]]).size}catch(i){return!1}}function r(t){n(t)&&(t.Map=h)}
var i=System.get("traceur-runtime@0.0.92/src/runtime/polyfills/utils.js"),o=i.isObject,s=i.registerPolyfill,a=$traceurRuntime,u=a.getOwnHashObject,c=(a.hasNativeSymbol,
Object.prototype.hasOwnProperty),l={},h=function(){function n(){var t,n,r=arguments[0];
if(!o(this))throw new TypeError("Map called on incompatible type");if(c.call(this,"entries_"))throw new TypeError("Map can not be reentrantly initialised");
if(e(this),null!==r&&void 0!==r){var i=!0,s=!1,a=void 0;try{for(var u=void 0,l=r[Symbol.iterator]();!(i=(u=l.next()).done);i=!0){
var h=u.value,d=(t=h[Symbol.iterator](),(n=t.next()).done?void 0:n.value),f=(n=t.next()).done?void 0:n.value;
this.set(d,f)}}catch(m){s=!0,a=m}finally{try{i||null==l["return"]||l["return"]()}finally{
if(s)throw a}}}}return $traceurRuntime.createClass(n,{get size(){return this.entries_.length/2-this.deletedCount_;
},get:function(e){var n=t(this,e);return void 0!==n?this.entries_[n+1]:void 0},set:function(e,n){
var r=o(e),i="string"==typeof e,s=t(this,e);if(void 0!==s)this.entries_[s+1]=n;else if(s=this.entries_.length,
this.entries_[s]=e,this.entries_[s+1]=n,r){var a=u(e),c=a.hash;this.objectIndex_[c]=s;
}else i?this.stringIndex_[e]=s:this.primitiveIndex_[e]=s;return this},has:function(e){
return void 0!==t(this,e)},"delete":function(t){var e,n,r=o(t),i="string"==typeof t;
if(r){var s=u(t);s&&(e=this.objectIndex_[n=s.hash],delete this.objectIndex_[n])}else i?(e=this.stringIndex_[t],
delete this.stringIndex_[t]):(e=this.primitiveIndex_[t],delete this.primitiveIndex_[t]);
return void 0!==e?(this.entries_[e]=l,this.entries_[e+1]=void 0,this.deletedCount_++,
!0):!1},clear:function(){e(this)},forEach:function(t){for(var e=arguments[1],n=0;n<this.entries_.length;n+=2){
var r=this.entries_[n],i=this.entries_[n+1];r!==l&&t.call(e,i,r,this)}},entries:$traceurRuntime.initGeneratorFunction(function r(){
var t,e,n;return $traceurRuntime.createGeneratorInstance(function(r){for(;;)switch(r.state){
case 0:t=0,r.state=12;break;case 12:r.state=t<this.entries_.length?8:-2;break;case 4:
t+=2,r.state=12;break;case 8:e=this.entries_[t],n=this.entries_[t+1],r.state=9;break;
case 9:r.state=e===l?4:6;break;case 6:return r.state=2,[e,n];case 2:r.maybeThrow(),
r.state=4;break;default:return r.end()}},r,this)}),keys:$traceurRuntime.initGeneratorFunction(function i(){
var t,e,n;return $traceurRuntime.createGeneratorInstance(function(r){for(;;)switch(r.state){
case 0:t=0,r.state=12;break;case 12:r.state=t<this.entries_.length?8:-2;break;case 4:
t+=2,r.state=12;break;case 8:e=this.entries_[t],n=this.entries_[t+1],r.state=9;break;
case 9:r.state=e===l?4:6;break;case 6:return r.state=2,e;case 2:r.maybeThrow(),r.state=4;
break;default:return r.end()}},i,this)}),values:$traceurRuntime.initGeneratorFunction(function s(){
var t,e,n;return $traceurRuntime.createGeneratorInstance(function(r){for(;;)switch(r.state){
case 0:t=0,r.state=12;break;case 12:r.state=t<this.entries_.length?8:-2;break;case 4:
t+=2,r.state=12;break;case 8:e=this.entries_[t],n=this.entries_[t+1],r.state=9;break;
case 9:r.state=e===l?4:6;break;case 6:return r.state=2,n;case 2:r.maybeThrow(),r.state=4;
break;default:return r.end()}},s,this)})},{})}();return Object.defineProperty(h.prototype,Symbol.iterator,{
configurable:!0,writable:!0,value:h.prototype.entries}),s(r),{get Map(){return h},
get polyfillMap(){return r}}}),System.get("traceur-runtime@0.0.92/src/runtime/polyfills/Map.js"),
System.registerModule("traceur-runtime@0.0.92/src/runtime/polyfills/Set.js",[],function(){
"use strict";function t(t){t.map_=new s}function e(t){var e=t,n=e.Set,r=e.Symbol;if(!(n&&$traceurRuntime.hasNativeSymbol()&&n.prototype[r.iterator]&&n.prototype.values))return!0;
try{return 1!==new n([1]).size}catch(i){return!1}}function n(t){e(t)&&(t.Set=u)}var r=System.get("traceur-runtime@0.0.92/src/runtime/polyfills/utils.js"),i=r.isObject,o=r.registerPolyfill,s=System.get("traceur-runtime@0.0.92/src/runtime/polyfills/Map.js").Map,a=($traceurRuntime.getOwnHashObject,
Object.prototype.hasOwnProperty),u=function(){function e(){var e=arguments[0];if(!i(this))throw new TypeError("Set called on incompatible type");
if(a.call(this,"map_"))throw new TypeError("Set can not be reentrantly initialised");
if(t(this),null!==e&&void 0!==e){var n=!0,r=!1,o=void 0;try{for(var s=void 0,u=e[Symbol.iterator]();!(n=(s=u.next()).done);n=!0){
var c=s.value;this.add(c)}}catch(l){r=!0,o=l}finally{try{n||null==u["return"]||u["return"]();
}finally{if(r)throw o}}}}return $traceurRuntime.createClass(e,{get size(){return this.map_.size;
},has:function(t){return this.map_.has(t)},add:function(t){return this.map_.set(t,t),
this},"delete":function(t){return this.map_["delete"](t)},clear:function(){return this.map_.clear();
},forEach:function(t){var e=arguments[1],n=this;return this.map_.forEach(function(r,i){
t.call(e,i,i,n)})},values:$traceurRuntime.initGeneratorFunction(function n(){var t,e;
return $traceurRuntime.createGeneratorInstance(function(n){for(;;)switch(n.state){
case 0:t=n.wrapYieldStar(this.map_.keys()[Symbol.iterator]()),n.sent=void 0,n.action="next",
n.state=12;break;case 12:e=t[n.action](n.sentIgnoreThrow),n.state=9;break;case 9:
n.state=e.done?3:2;break;case 3:n.sent=e.value,n.state=-2;break;case 2:return n.state=12,
e.value;default:return n.end()}},n,this)}),entries:$traceurRuntime.initGeneratorFunction(function r(){
var t,e;return $traceurRuntime.createGeneratorInstance(function(n){for(;;)switch(n.state){
case 0:t=n.wrapYieldStar(this.map_.entries()[Symbol.iterator]()),n.sent=void 0,n.action="next",
n.state=12;break;case 12:e=t[n.action](n.sentIgnoreThrow),n.state=9;break;case 9:
n.state=e.done?3:2;break;case 3:n.sent=e.value,n.state=-2;break;case 2:return n.state=12,
e.value;default:return n.end()}},r,this)})},{})}();return Object.defineProperty(u.prototype,Symbol.iterator,{
configurable:!0,writable:!0,value:u.prototype.values}),Object.defineProperty(u.prototype,"keys",{
configurable:!0,writable:!0,value:u.prototype.values}),o(n),{get Set(){return u},
get polyfillSet(){return n}}}),System.get("traceur-runtime@0.0.92/src/runtime/polyfills/Set.js"),
System.registerModule("traceur-runtime@0.0.92/node_modules/rsvp/lib/rsvp/asap.js",[],function(){
"use strict";function t(t,e){d[a]=t,d[a+1]=e,a+=2,2===a&&s()}function e(){return function(){
process.nextTick(o)}}function n(){var t=0,e=new l(o),n=document.createTextNode("");
return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function r(){var t=new MessageChannel;
return t.port1.onmessage=o,function(){t.port2.postMessage(0)}}function i(){return function(){
setTimeout(o,1)}}function o(){for(var t=0;a>t;t+=2){var e=d[t],n=d[t+1];e(n),d[t]=void 0,
d[t+1]=void 0}a=0}var s,a=0,u=t,c="undefined"!=typeof window?window:{},l=c.MutationObserver||c.WebKitMutationObserver,h="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,d=new Array(1e3);
return s="undefined"!=typeof process&&"[object process]"==={}.toString.call(process)?e():l?n():h?r():i(),
{get default(){return u}}}),System.registerModule("traceur-runtime@0.0.92/src/runtime/polyfills/Promise.js",[],function(){
"use strict";function t(t){return t&&"object"==typeof t&&void 0!==t.status_}function e(t){
return t}function n(t){throw t}function r(t){var r=void 0!==arguments[1]?arguments[1]:e,o=void 0!==arguments[2]?arguments[2]:n,s=i(t.constructor);
switch(t.status_){case void 0:throw TypeError;case 0:t.onResolve_.push(r,s),t.onReject_.push(o,s);
break;case 1:l(t.value_,[r,s]);break;case-1:l(t.value_,[o,s])}return s.promise}function i(t){
if(this===_){var e=s(new _(p));return{promise:e,resolve:function(t){a(e,t)},reject:function(t){
u(e,t)}}}var n={};return n.promise=new t(function(t,e){n.resolve=t,n.reject=e}),n;
}function o(t,e,n,r,i){return t.status_=e,t.value_=n,t.onResolve_=r,t.onReject_=i,
t}function s(t){return o(t,0,void 0,[],[])}function a(t,e){c(t,1,e,t.onResolve_)}
function u(t,e){c(t,-1,e,t.onReject_)}function c(t,e,n,r){0===t.status_&&(l(n,r),
o(t,e,n))}function l(t,e){b(function(){for(var n=0;n<e.length;n+=2)h(t,e[n],e[n+1]);
})}function h(e,n,i){try{var o=n(e);if(o===i.promise)throw new TypeError;t(o)?r(o,i.resolve,i.reject):i.resolve(o);
}catch(s){try{i.reject(s)}catch(s){}}}function d(t){return t&&("object"==typeof t||"function"==typeof t);
}function f(e,n){if(!t(n)&&d(n)){var r;try{r=n.then}catch(o){var s=y.call(e,o);return n[w]=s,
s}if("function"==typeof r){var a=n[w];if(a)return a;var u=i(e);n[w]=u.promise;try{
r.call(n,u.resolve,u.reject)}catch(o){u.reject(o)}return u.promise}}return n}function m(t){
t.Promise||(t.Promise=v)}var b=System.get("traceur-runtime@0.0.92/node_modules/rsvp/lib/rsvp/asap.js")["default"],g=System.get("traceur-runtime@0.0.92/src/runtime/polyfills/utils.js").registerPolyfill,p={},v=function(){
function c(t){if(t!==p){if("function"!=typeof t)throw new TypeError;var e=s(this);
try{t(function(t){a(e,t)},function(t){u(e,t)})}catch(n){u(e,n)}}}return $traceurRuntime.createClass(c,{
"catch":function(t){return this.then(void 0,t)},then:function(i,o){"function"!=typeof i&&(i=e),
"function"!=typeof o&&(o=n);var s=this,a=this.constructor;return r(this,function(e){
return e=f(a,e),e===s?o(new TypeError):t(e)?e.then(i,o):i(e)},o)}},{resolve:function(e){
return this===_?t(e)?e:o(new _(p),1,e):new this(function(t,n){t(e)})},reject:function(t){
return this===_?o(new _(p),-1,t):new this(function(e,n){n(t)})},all:function(t){var e=i(this),n=[];
try{var r=function(t){return function(r){n[t]=r,0===--o&&e.resolve(n)}},o=0,s=0,a=!0,u=!1,c=void 0;
try{for(var l=void 0,h=t[Symbol.iterator]();!(a=(l=h.next()).done);a=!0){var d=l.value,f=r(s);
this.resolve(d).then(f,function(t){e.reject(t)}),++s,++o}}catch(m){u=!0,c=m}finally{
try{a||null==h["return"]||h["return"]()}finally{if(u)throw c}}0===o&&e.resolve(n);
}catch(b){e.reject(b)}return e.promise},race:function(t){var e=i(this);try{for(var n=0;n<t.length;n++)this.resolve(t[n]).then(function(t){
e.resolve(t)},function(t){e.reject(t)})}catch(r){e.reject(r)}return e.promise}})}(),_=v,y=_.reject,w="@@thenable";
return g(m),{get Promise(){return v},get polyfillPromise(){return m}}}),System.get("traceur-runtime@0.0.92/src/runtime/polyfills/Promise.js"),
System.registerModule("traceur-runtime@0.0.92/src/runtime/polyfills/StringIterator.js",[],function(){
"use strict";function t(t){var e=String(t),n=Object.create(a.prototype);return n[o]=e,
n[s]=0,n}var e=System.get("traceur-runtime@0.0.92/src/runtime/polyfills/utils.js"),n=e.createIteratorResultObject,r=e.isObject,i=Object.prototype.hasOwnProperty,o=Symbol("iteratedString"),s=Symbol("stringIteratorNextIndex"),a=function(){
function t(){}var e;return $traceurRuntime.createClass(t,(e={},Object.defineProperty(e,"next",{
value:function(){var t=this;if(!r(t)||!i.call(t,o))throw new TypeError("this must be a StringIterator object");
var e=t[o];if(void 0===e)return n(void 0,!0);var a=t[s],u=e.length;if(a>=u)return t[o]=void 0,
n(void 0,!0);var c,l=e.charCodeAt(a);if(55296>l||l>56319||a+1===u)c=String.fromCharCode(l);else{
var h=e.charCodeAt(a+1);c=56320>h||h>57343?String.fromCharCode(l):String.fromCharCode(l)+String.fromCharCode(h);
}return t[s]=a+c.length,n(c,!1)},configurable:!0,enumerable:!0,writable:!0}),Object.defineProperty(e,Symbol.iterator,{
value:function(){return this},configurable:!0,enumerable:!0,writable:!0}),e),{})}();
return{get createStringIterator(){return t}}}),System.registerModule("traceur-runtime@0.0.92/src/runtime/polyfills/String.js",[],function(){
"use strict";function t(t){var e=String(this);if(null==this||"[object RegExp]"==m.call(t))throw TypeError();
var n=e.length,r=String(t),i=(r.length,arguments.length>1?arguments[1]:void 0),o=i?Number(i):0;
isNaN(o)&&(o=0);var s=Math.min(Math.max(o,0),n);return b.call(e,r,o)==s}function e(t){
var e=String(this);if(null==this||"[object RegExp]"==m.call(t))throw TypeError();var n=e.length,r=String(t),i=r.length,o=n;
if(arguments.length>1){var s=arguments[1];void 0!==s&&(o=s?Number(s):0,isNaN(o)&&(o=0));
}var a=Math.min(Math.max(o,0),n),u=a-i;return 0>u?!1:g.call(e,r,u)==u}function n(t){
if(null==this)throw TypeError();var e=String(this);if(t&&"[object RegExp]"==m.call(t))throw TypeError();
var n=e.length,r=String(t),i=r.length,o=arguments.length>1?arguments[1]:void 0,s=o?Number(o):0;
s!=s&&(s=0);var a=Math.min(Math.max(s,0),n);return i+a>n?!1:-1!=b.call(e,r,s)}function r(t){
if(null==this)throw TypeError();var e=String(this),n=t?Number(t):0;if(isNaN(n)&&(n=0),
0>n||n==1/0)throw RangeError();if(0==n)return"";for(var r="";n--;)r+=e;return r}function i(t){
if(null==this)throw TypeError();var e=String(this),n=e.length,r=t?Number(t):0;if(isNaN(r)&&(r=0),
!(0>r||r>=n)){var i,o=e.charCodeAt(r);return o>=55296&&56319>=o&&n>r+1&&(i=e.charCodeAt(r+1),
i>=56320&&57343>=i)?1024*(o-55296)+i-56320+65536:o}}function o(t){var e=t.raw,n=e.length>>>0;
if(0===n)return"";for(var r="",i=0;;){if(r+=e[i],i+1===n)return r;r+=arguments[++i];
}}function s(t){var e,n,r=[],i=Math.floor,o=-1,s=arguments.length;if(!s)return"";for(;++o<s;){
var a=Number(arguments[o]);if(!isFinite(a)||0>a||a>1114111||i(a)!=a)throw RangeError("Invalid code point: "+a);
65535>=a?r.push(a):(a-=65536,e=(a>>10)+55296,n=a%1024+56320,r.push(e,n))}return String.fromCharCode.apply(null,r);
}function a(){var t=$traceurRuntime.checkObjectCoercible(this),e=String(t);return c(e);
}function u(u){var c=u.String;h(c.prototype,["codePointAt",i,"endsWith",e,"includes",n,"repeat",r,"startsWith",t]),
h(c,["fromCodePoint",s,"raw",o]),d(c.prototype,a,Symbol)}var c=System.get("traceur-runtime@0.0.92/src/runtime/polyfills/StringIterator.js").createStringIterator,l=System.get("traceur-runtime@0.0.92/src/runtime/polyfills/utils.js"),h=l.maybeAddFunctions,d=l.maybeAddIterator,f=l.registerPolyfill,m=Object.prototype.toString,b=String.prototype.indexOf,g=String.prototype.lastIndexOf;
return f(u),{get startsWith(){return t},get endsWith(){return e},get includes(){return n;
},get repeat(){return r},get codePointAt(){return i},get raw(){return o},get fromCodePoint(){
return s},get stringPrototypeIterator(){return a},get polyfillString(){return u}};
}),System.get("traceur-runtime@0.0.92/src/runtime/polyfills/String.js"),System.registerModule("traceur-runtime@0.0.92/src/runtime/polyfills/ArrayIterator.js",[],function(){
"use strict";function t(t,e){var n=o(t),r=new h;return r.iteratorObject_=n,r.arrayIteratorNextIndex_=0,
r.arrayIterationKind_=e,r}function e(){return t(this,l)}function n(){return t(this,u);
}function r(){return t(this,c)}var i=System.get("traceur-runtime@0.0.92/src/runtime/polyfills/utils.js"),o=i.toObject,s=i.toUint32,a=i.createIteratorResultObject,u=1,c=2,l=3,h=function(){
function t(){}var e;return $traceurRuntime.createClass(t,(e={},Object.defineProperty(e,"next",{
value:function(){var t=o(this),e=t.iteratorObject_;if(!e)throw new TypeError("Object is not an ArrayIterator");
var n=t.arrayIteratorNextIndex_,r=t.arrayIterationKind_,i=s(e.length);return n>=i?(t.arrayIteratorNextIndex_=1/0,
a(void 0,!0)):(t.arrayIteratorNextIndex_=n+1,r==c?a(e[n],!1):r==l?a([n,e[n]],!1):a(n,!1));
},configurable:!0,enumerable:!0,writable:!0}),Object.defineProperty(e,Symbol.iterator,{
value:function(){return this},configurable:!0,enumerable:!0,writable:!0}),e),{})}();
return{get entries(){return e},get keys(){return n},get values(){return r}}}),System.registerModule("traceur-runtime@0.0.92/src/runtime/polyfills/Array.js",[],function(){
"use strict";function t(t){var e,n,r=arguments[1],i=arguments[2],o=this,s=y(t),a=void 0!==r,u=0;
if(a&&!f(r))throw TypeError();if(d(s)){e=m(o)?new o:[];var c=!0,l=!1,h=void 0;try{
for(var b=void 0,g=s[Symbol.iterator]();!(c=(b=g.next()).done);c=!0){var p=b.value;
a?e[u]=r.call(i,p,u):e[u]=p,u++}}catch(v){l=!0,h=v}finally{try{c||null==g["return"]||g["return"]();
}finally{if(l)throw h}}return e.length=u,e}for(n=_(s.length),e=m(o)?new o(n):new Array(n);n>u;u++)a?e[u]="undefined"==typeof i?r(s[u],u):r.call(i,s[u],u):e[u]=s[u];
return e.length=n,e}function e(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];
for(var n=this,r=t.length,i=m(n)?new n(r):new Array(r),o=0;r>o;o++)i[o]=t[o];return i.length=r,
i}function n(t){var e=void 0!==arguments[1]?arguments[1]:0,n=arguments[2],r=y(this),i=_(r.length),o=v(e),s=void 0!==n?v(n):i;
for(o=0>o?Math.max(i+o,0):Math.min(o,i),s=0>s?Math.max(i+s,0):Math.min(s,i);s>o;)r[o]=t,
o++;return r}function r(t){var e=arguments[1];return o(this,t,e)}function i(t){var e=arguments[1];
return o(this,t,e,!0)}function o(t,e){var n=arguments[2],r=void 0!==arguments[3]?arguments[3]:!1,i=y(t),o=_(i.length);
if(!f(e))throw TypeError();for(var s=0;o>s;s++){var a=i[s];if(e.call(n,a,s,i))return r?s:a;
}return r?-1:void 0}function s(o){var s=o,a=s.Array,h=s.Object,d=s.Symbol,f=l;d&&d.iterator&&a.prototype[d.iterator]&&(f=a.prototype[d.iterator]),
b(a.prototype,["entries",u,"keys",c,"values",f,"fill",n,"find",r,"findIndex",i]),
b(a,["from",t,"of",e]),g(a.prototype,f,d),g(h.getPrototypeOf([].values()),function(){
return this},d)}var a=System.get("traceur-runtime@0.0.92/src/runtime/polyfills/ArrayIterator.js"),u=a.entries,c=a.keys,l=a.values,h=System.get("traceur-runtime@0.0.92/src/runtime/polyfills/utils.js"),d=h.checkIterable,f=h.isCallable,m=h.isConstructor,b=h.maybeAddFunctions,g=h.maybeAddIterator,p=h.registerPolyfill,v=h.toInteger,_=h.toLength,y=h.toObject;
return p(s),{get from(){return t},get of(){return e},get fill(){return n},get find(){
return r},get findIndex(){return i},get polyfillArray(){return s}}}),System.get("traceur-runtime@0.0.92/src/runtime/polyfills/Array.js"),
System.registerModule("traceur-runtime@0.0.92/src/runtime/polyfills/Object.js",[],function(){
"use strict";function t(t,e){return t===e?0!==t||1/t===1/e:t!==t&&e!==e}function e(t){
for(var e=1;e<arguments.length;e++){var n=arguments[e],r=null==n?[]:l(n),i=void 0,o=r.length;
for(i=0;o>i;i++){var s=r[i];c(s)||(t[s]=n[s])}}return t}function n(t,e){var n,r,i=u(e),o=i.length;
for(n=0;o>n;n++){var s=i[n];c(s)||(r=f(e,i[n]),d(t,i[n],r))}return t}function r(r){
var i=r.Object;o(i,["assign",e,"is",t,"mixin",n])}var i=System.get("traceur-runtime@0.0.92/src/runtime/polyfills/utils.js"),o=i.maybeAddFunctions,s=i.registerPolyfill,a=$traceurRuntime,u=a.getOwnPropertyNames,c=a.isPrivateName,l=a.keys,h=Object,d=h.defineProperty,f=h.getOwnPropertyDescriptor;
return s(r),{get is(){return t},get assign(){return e},get mixin(){return n},get polyfillObject(){
return r}}}),System.get("traceur-runtime@0.0.92/src/runtime/polyfills/Object.js"),
System.registerModule("traceur-runtime@0.0.92/src/runtime/polyfills/Number.js",[],function(){
"use strict";function t(t){return s(t)&&d(t)}function e(e){return t(e)&&l(e)===e}
function n(t){return s(t)&&f(t)}function r(e){if(t(e)){var n=l(e);if(n===e)return h(n)<=m;
}return!1}function i(i){var o=i.Number;a(o,["MAX_SAFE_INTEGER",m,"MIN_SAFE_INTEGER",b,"EPSILON",g]),
u(o,["isFinite",t,"isInteger",e,"isNaN",n,"isSafeInteger",r])}var o=System.get("traceur-runtime@0.0.92/src/runtime/polyfills/utils.js"),s=o.isNumber,a=o.maybeAddConsts,u=o.maybeAddFunctions,c=o.registerPolyfill,l=o.toInteger,h=Math.abs,d=isFinite,f=isNaN,m=Math.pow(2,53)-1,b=-Math.pow(2,53)+1,g=Math.pow(2,-52);
return c(i),{get MAX_SAFE_INTEGER(){return m},get MIN_SAFE_INTEGER(){return b},get EPSILON(){
return g},get isFinite(){return t},get isInteger(){return e},get isNaN(){return n;
},get isSafeInteger(){return r},get polyfillNumber(){return i}}}),System.get("traceur-runtime@0.0.92/src/runtime/polyfills/Number.js"),
System.registerModule("traceur-runtime@0.0.92/src/runtime/polyfills/fround.js",[],function(){
"use strict";function t(t,e,n){function r(t){var e=l(t),n=t-e;return.5>n?e:n>.5?e+1:e%2?e+1:e;
}var i,o,s,a,m,b,g,p=(1<<e-1)-1;for(t!==t?(o=(1<<e)-1,s=f(2,n-1),i=0):t===1/0||t===-(1/0)?(o=(1<<e)-1,
s=0,i=0>t?1:0):0===t?(o=0,s=0,i=1/t===-(1/0)?1:0):(i=0>t,t=c(t),t>=f(2,1-p)?(o=d(l(h(t)/u),1023),
s=r(t/f(2,o)*f(2,n)),s/f(2,n)>=2&&(o+=1,s=1),o>p?(o=(1<<e)-1,s=0):(o+=p,s-=f(2,n))):(o=0,
s=r(t/f(2,1-p-n)))),m=[],a=n;a;a-=1)m.push(s%2?1:0),s=l(s/2);for(a=e;a;a-=1)m.push(o%2?1:0),
o=l(o/2);for(m.push(i?1:0),m.reverse(),b=m.join(""),g=[];b.length;)g.push(parseInt(b.substring(0,8),2)),
b=b.substring(8);return g}function e(t,e,n){var r,i,o,s,a,u,c,l,h=[];for(r=t.length;r;r-=1)for(o=t[r-1],
i=8;i;i-=1)h.push(o%2?1:0),o>>=1;return h.reverse(),s=h.join(""),a=(1<<e-1)-1,u=parseInt(s.substring(0,1),2)?-1:1,
c=parseInt(s.substring(1,1+e),2),l=parseInt(s.substring(1+e),2),c===(1<<e)-1?0!==l?NaN:u*(1/0):c>0?u*f(2,c-a)*(1+l/f(2,n)):0!==l?u*f(2,-(a-1))*(l/f(2,n)):0>u?-0:0;
}function n(t){return e(t,8,23)}function r(e){return t(e,8,23)}function i(t){return 0===t||!o(t)||s(t)?t:n(r(Number(t)));
}var o=isFinite,s=isNaN,a=Math,u=a.LN2,c=a.abs,l=a.floor,h=a.log,d=a.min,f=a.pow;return{
get fround(){return i}}}),System.registerModule("traceur-runtime@0.0.92/src/runtime/polyfills/Math.js",[],function(){
"use strict";function t(t){if(t=S(+t),0==t)return 32;var e=0;return 0===(4294901760&t)&&(t<<=16,
e+=16),0===(4278190080&t)&&(t<<=8,e+=8),0===(4026531840&t)&&(t<<=4,e+=4),0===(3221225472&t)&&(t<<=2,
e+=2),0===(2147483648&t)&&(t<<=1,e+=1),e}function e(t,e){t=S(+t),e=S(+e);var n=t>>>16&65535,r=65535&t,i=e>>>16&65535,o=65535&e;
return r*o+(n*o+r*i<<16>>>0)|0}function n(t){return t=+t,t>0?1:0>t?-1:t}function r(t){
return.4342944819032518*A(t)}function i(t){return 1.4426950408889634*A(t)}function o(t){
if(t=+t,-1>t||j(t))return NaN;if(0===t||t===1/0)return t;if(-1===t)return-(1/0);var e=0,n=50;
if(0>t||t>1)return A(1+t);for(var r=1;n>r;r++)r%2===0?e-=T(t,r)/r:e+=T(t,r)/r;return e;
}function s(t){return t=+t,t===-(1/0)?-1:E(t)&&0!==t?M(t)-1:t}function a(t){return t=+t,
0===t?1:j(t)?NaN:E(t)?(0>t&&(t=-t),t>21?M(t)/2:(M(t)+M(-t))/2):1/0}function u(t){
return t=+t,E(t)&&0!==t?(M(t)-M(-t))/2:t}function c(t){if(t=+t,0===t)return t;if(!E(t))return n(t);
var e=M(t),r=M(-t);return(e-r)/(e+r)}function l(t){return t=+t,1>t?NaN:E(t)?A(t+L(t+1)*L(t-1)):t;
}function h(t){return t=+t,0!==t&&E(t)?t>0?A(t+L(t*t+1)):-A(-t+L(t*t+1)):t}function d(t){
return t=+t,-1===t?-(1/0):1===t?1/0:0===t?t:j(t)||-1>t||t>1?NaN:.5*A((1+t)/(1-t));
}function f(t,e){for(var n=arguments.length,r=new Array(n),i=0,o=0;n>o;o++){var s=arguments[o];
if(s=+s,s===1/0||s===-(1/0))return 1/0;s=C(s),s>i&&(i=s),r[o]=s}0===i&&(i=1);for(var a=0,u=0,o=0;n>o;o++){
var s=r[o]/i,c=s*s-u,l=a+c;u=l-a-c,a=l}return L(a)*i}function m(t){return t=+t,t>0?R(t):0>t?O(t):t;
}function b(t){if(t=+t,0===t)return t;var e=0>t;e&&(t=-t);var n=T(t,1/3);return e?-n:n;
}function g(g){var v=g.Math;w(v,["acosh",l,"asinh",h,"atanh",d,"cbrt",b,"clz32",t,"cosh",a,"expm1",s,"fround",p,"hypot",f,"imul",e,"log10",r,"log1p",o,"log2",i,"sign",n,"sinh",u,"tanh",c,"trunc",m]);
}var p,v,_=System.get("traceur-runtime@0.0.92/src/runtime/polyfills/fround.js").fround,y=System.get("traceur-runtime@0.0.92/src/runtime/polyfills/utils.js"),w=y.maybeAddFunctions,x=y.registerPolyfill,S=y.toUint32,E=isFinite,j=isNaN,k=Math,C=k.abs,O=k.ceil,M=k.exp,R=k.floor,A=k.log,T=k.pow,L=k.sqrt;
return"function"==typeof Float32Array?(v=new Float32Array(1),p=function(t){return v[0]=Number(t),
v[0]}):p=_,x(g),{get clz32(){return t},get imul(){return e},get sign(){return n},
get log10(){return r},get log2(){return i},get log1p(){return o},get expm1(){return s;
},get cosh(){return a},get sinh(){return u},get tanh(){return c},get acosh(){return l;
},get asinh(){return h},get atanh(){return d},get hypot(){return f},get trunc(){return m;
},get fround(){return p},get cbrt(){return b},get polyfillMath(){return g}}}),System.get("traceur-runtime@0.0.92/src/runtime/polyfills/Math.js"),
System.registerModule("traceur-runtime@0.0.92/src/runtime/polyfills/polyfills.js",[],function(){
"use strict";var t=System.get("traceur-runtime@0.0.92/src/runtime/polyfills/utils.js").polyfillAll;
t(Reflect.global);var e=$traceurRuntime.setupGlobals;return $traceurRuntime.setupGlobals=function(n){
e(n),t(n)},{}}),System.get("traceur-runtime@0.0.92/src/runtime/polyfills/polyfills.js"),
Object.defineProperty(Array.prototype,"includes",{enumerable:!1,writable:!0,value:function(t){
return-1!==this.indexOf(t)}}),Object.defineProperty(Array.prototype,"remove",{enumerable:!1,
writable:!0,value:function(t){var e=this.indexOf(t);return-1!==e&&this.splice(e,1),
this}}),Object.defineProperty(Array.prototype,"removeAll",{enumerable:!1,writable:!0,
value:function(t){for(;this.includes(t);)this.remove(t);return this}}),Object.defineProperty(String.prototype,"includes",{
enumerable:!1,writable:!0,value:function(){return-1!==String.prototype.indexOf.apply(this,arguments);
}}),Object.defineProperty(String.prototype,"replaceAll",{enumerable:!1,writable:!0,
value:function(t,e){return this.split(t).join(e)}}),Object.defineProperty(String.prototype,"toCamelCase",{
enumerable:!1,writable:!0,value:function(){return this.replace(/(\-[a-z])/g,function(t){
return t.toUpperCase().replace("-","")})}}),Node.prototype.append||(Node.prototype.append=function(t){
this.appendChild(t)}),Node.prototype.prepend||(Node.prototype.prepend=function(t){
this.insertBefore(t,this.firstElementChild)}),Node.prototype.before||(Node.prototype.before=function(t){
this.parentElement.insertBefore(t,this)}),Node.prototype.after||(Node.prototype.after=function(t){
this.parentElement.insertBefore(t,this.nextElementSibling)}),Node.prototype.replace||(Node.prototype.replace=function(t){
this.parentNode.replaceChild(t,this)}),Object.defineProperty(Element.prototype,"disabled",{
enumerable:!1,configurable:!1,get:function(){return this.hasAttribute("disabled");
},set:function(t){t===!0?this.setAttribute("disabled",""):this.removeAttribute("disabled");
}}),Object.defineProperty(SVGRect.prototype,"top",{enumerable:!1,configurable:!1,
get:function(){return Math.min(this.y,this.y+this.height)},set:function(t){throw new Error("top property is read-only");
}}),Object.defineProperty(SVGRect.prototype,"right",{enumerable:!1,configurable:!1,
get:function(){return Math.max(this.x,this.x+this.width)},set:function(t){throw new Error("right property is read-only");
}}),Object.defineProperty(SVGRect.prototype,"bottom",{enumerable:!1,configurable:!1,
get:function(){return Math.max(this.y,this.y+this.height)},set:function(t){throw new Error("bottom property is read-only");
}}),Object.defineProperty(SVGRect.prototype,"left",{enumerable:!1,configurable:!1,
get:function(){return Math.min(this.x,this.x+this.width)},set:function(t){throw new Error("left property is read-only");
}}),Object.defineProperty(ClientRect.prototype,"x",{enumerable:!1,configurable:!1,
get:function(){return this.left},set:function(t){this.left=t}}),Object.defineProperty(ClientRect.prototype,"y",{
enumerable:!1,configurable:!1,get:function(){return this.top},set:function(t){this.top=t;
}}),SVGPoint.prototype.toString=function(){return"point("+this.x+", "+this.y+")"},
SVGMatrix.prototype.determinant=function(){var t=this.a*this.d-this.b*this.c;return t;
},function(){var t=document.createElementNS("http://www.w3.org/2000/svg","svg");SVGMatrix.prototype.transformPoint=function(e){
var e=t.createSVGPoint();return e.x=this.a*e.x+this.c*e.y+this.e,e.y=this.b*e.x+this.d*e.y+this.f,
e}}(),SVGMatrix.prototype.isIdentity=function(){return 1===this.a&&0===this.b&&0===this.c&&1===this.d&&0===this.e&&0===this.f?!0:!1;
},SVGMatrix.prototype.toString=function(){return"matrix("+this.a+", "+this.b+", "+this.c+", "+this.d+", "+this.e+", "+this.f+")";
},SVGMatrix.prototype.multiplyBy=function(t){var e=this.a*t.a+this.c*t.b,n=this.b*t.a+this.d*t.b,r=this.a*t.c+this.c*t.d,i=this.b*t.c+this.d*t.d,o=this.a*t.e+this.c*t.f+this.e,s=this.b*t.e+this.d*t.f+this.f;
return this.a=e,this.b=n,this.c=r,this.d=i,this.e=o,this.f=s,this},SVGMatrix.prototype.preMultiplyBy=function(t){
var e=t.a*this.a+t.c*this.b,n=t.b*this.a+t.d*this.b,r=t.a*this.c+t.c*this.d,i=t.b*this.c+t.d*this.d,o=t.a*this.e+t.c*this.f+t.e,s=t.b*this.e+t.d*this.f+t.f;
return this.a=e,this.b=n,this.c=r,this.d=i,this.e=o,this.f=s,this},SVGMatrix.prototype.translateBy=function(t,e){
var n={a:1,b:0,c:0,d:1,e:t,f:e};return this.multiplyBy(n),this},SVGMatrix.prototype._translateOriginBy=function(t,e){
return this.e=this.e+t*this.a+e*this.c,this.f=this.f+t*this.b+e*this.d,this},SVGMatrix.prototype.scaleBy=function(t,e,n){
void 0===e&&(e=0),void 0===n&&(n=0);var r={a:t,b:0,c:0,d:t,e:0,f:0};return this._translateOriginBy(e,n),
this.multiplyBy(r),this._translateOriginBy(-e,-n),this},SVGMatrix.prototype.scaleNonUniformBy=function(t,e,n,r){
void 0===e&&(e=1),void 0===n&&(n=0),void 0===r&&(r=0);var i={a:t,b:0,c:0,d:e,e:0,
f:0};return this._translateOriginBy(n,r),this.multiplyBy(i),this._translateOriginBy(-n,-r),
this},SVGMatrix.prototype.rotateBy=function(t,e,n){void 0===e&&(e=0),void 0===n&&(n=0);
var r=Math.PI*t/180,i=Math.cos(r),o=Math.sin(r),s={a:i,b:o,c:-o,d:i,e:0,f:0};return this._translateOriginBy(e,n),
this.multiplyBy(s),this._translateOriginBy(-e,-n),this},SVGMatrix.prototype.skewXBy=function(t){
var e={a:1,b:0,c:tan(t),d:1,e:0,f:0};return this.multiplyBy(e),this},SVGMatrix.prototype.skewYBy=function(t){
var e={a:1,b:tan(t),c:0,d:1,e:0,f:0};return this.multiplyBy(e),this},SVGMatrix.prototype.invert=function(t){
var e=this.determinant();if(0!==e){var n=this.d/e,r=-this.b/e,i=-this.c/e,o=this.a/e,s=(this.c*this.f-this.d*this.e)/e,a=(this.b*this.e-this.a*this.f)/e;
this.a=n,this.b=r,this.c=i,this.d=o,this.e=s,this.f=a}return this},function(){var t=[String,NamedNodeMap,NodeList,HTMLCollection,CSSStyleDeclaration,FileList,DataTransferItemList,SVGPointList];
t.forEach(function(t){Object.defineProperty(t.prototype,Symbol.iterator,{configurable:!0,
enumerable:!1,writable:!0,value:Array.prototype[Symbol.iterator]})})}(),window.addEventListener("load",function(){
System.get("./elements/"+document.body.firstElementChild.localName)}),System.registerModule("classes/bridge",[],function(){
"use strict";var t=function(){function t(){var t=this;this.targets={},this._counter=0,
this._callbacks={},this._handlers=[],window.addEventListener("message",function(e){
t._onMessage(e.data,e.source)})}return $traceurRuntime.createClass(t,{registerTarget:function(t,e){
this.targets[t]=e},unregisterTarget:function(t){delete this.targets[t]},addMessageHandler:function(t,e){
var n={name:t,callback:e};this._handlers.push(n)},removeMessageHandler:function(t,e){
this._handlers=this._handlers.filter(function(t){return t.callback!==e})},postMessage:function(t,e){
var n=void 0!==arguments[2]?arguments[2]:null,r=void 0!==arguments[3]?arguments[3]:null;
if(this.targets[t]){var i={name:e,arg:n,sender:window.name||"background",id:this._counter
};this._counter+=1,r&&(this._callbacks[i.id]=r);var o=this.targets[t];o.postMessage(i,"*");
}},_onMessage:function(t,e){"__response__"===t.name?this._callbacks[t.id]&&this._callbacks[t.id](t.arg):this._handlers.forEach(function(n){
n.name===t.name&&n.callback(t.arg,t.sender,function(n){var r={name:"__response__",
arg:n,sender:window.name||"background",id:t.id};e.postMessage(r,"*")})})}},{})}(),e=t;
return{get default(){return e}}}),System.registerModule("classes/clipboard",[],function(){
"use strict";var t=function(){function t(){var t=this;app.bridge.addMessageHandler("clipboard.getData",function(e,n,r){
t.getData(function(t){return r(t)})}),app.bridge.addMessageHandler("clipboard.setData",function(e){
t.setData(e)})}return $traceurRuntime.createClass(t,{getData:function(t){var e,n=this;
document.addEventListener("paste",e=function(r){document.removeEventListener("paste",e);
var i=Array.prototype.slice.call(r.clipboardData.items,0),o={},s=0;i&&i.forEach(function(e){
var r=e.type;n._readItem(e,function(e){s+=1,e&&(o[r]=e),s===i.length&&t&&t(o)})});
}),document.execCommand("paste")},setData:function(t){var e;document.addEventListener("copy",e=function(n){
if(document.removeEventListener("copy",e),n.preventDefault(),n.clipboardData.items.clear(),
t["text/plain"]&&n.clipboardData.items.add(t["text/plain"],"text/plain"),t["text/html"]&&n.clipboardData.items.add(t["text/html"],"text/html"),
t["image/svg+xml"]&&n.clipboardData.items.add(t["image/svg+xml"],"image/svg+xml"),
t["image/png"]){for(var r=(t["image/png"],atob(t["image/png"].split(",")[1])),i=new ArrayBuffer(r.length),o=new Uint8Array(i),s=0;s<r.length;s+=1)o[s]=r.charCodeAt(s);
var a=new Blob([i],{type:"image/png"}),u=new File([a],"clipboard.png");n.clipboardData.items.add(u);
}}),document.execCommand("copy")},_readItem:function(t,e){if("image/png"===t.type){
var n=t.getAsFile();if(n){var r=new FileReader;r.readAsDataURL(n),r.addEventListener("load",function(t){
e("data:"!==t.target.result?t.target.result:null)})}else e(null)}else"text/plain"===t.type||"text/html"===t.type||"image/svg+xml"===t.type?t.getAsString(function(t){
e(t)}):(console.warn("Clipboard contains unsuported data type:",t.type),e(null))}
},{})}(),e=t;return{get default(){return e}}}),System.registerModule("classes/config",[],function(){
"use strict";var t=System.get("classes/event-emitter")["default"],e=System.get("utils/object").keys,n=function(t){
function n(){var t,e,r,i,o;$traceurRuntime.superConstructor(n).call(this),app.bridge.addMessageHandler("config.get",(t=this,
function(e,n,r){t.get(e,r)})),app.bridge.addMessageHandler("config.set",(e=this,function(t,n,r){
e.set(t.key,t.value,r)})),app.bridge.addMessageHandler("config.getAll",(r=this,function(t,e,n){
r.getAll(n)})),app.bridge.addMessageHandler("config.setAll",(i=this,function(t,e,n){
i.setAll(t,n)})),chrome.storage.onChanged.addListener((o=this,function(t){o._onChromeStorageChange(t);
}))}return $traceurRuntime.createClass(n,{get:function(t,e){var n="!"===t[0]?"local":"sync";
chrome.storage[n].get(t,function(n){var r=n[t];void 0===r&&(r=null),e(r)})},set:function(t,e){
var n,r=void 0!==arguments[2]?arguments[2]:null,i="!"===t[0]?"local":"sync";null===e?chrome.storage[i].remove(t,r):chrome.storage[i].set((n={},
Object.defineProperty(n,t,{value:e,configurable:!0,enumerable:!0,writable:!0}),n),r);
},getAll:function(t){var n={};chrome.storage.local.get(null,function(r){var i=!0,o=!1,s=void 0;
try{for(var a=void 0,u=e(r)[Symbol.iterator]();!(i=(a=u.next()).done);i=!0){var c=a.value;
n[c]=r[c]}}catch(l){o=!0,s=l}finally{try{i||null==u["return"]||u["return"]()}finally{
if(o)throw s}}chrome.storage.sync.get(null,function(r){var i=!0,o=!1,s=void 0;try{
for(var a=void 0,u=e(r)[Symbol.iterator]();!(i=(a=u.next()).done);i=!0){var c=a.value;
n[c]=r[c]}}catch(l){o=!0,s=l}finally{try{i||null==u["return"]||u["return"]()}finally{
if(o)throw s}}t(n)})})},setAll:function(t){var n=void 0!==arguments[1]?arguments[1]:null,r={},i={},o=!0,s=!1,a=void 0;
try{for(var u=void 0,c=e(t)[Symbol.iterator]();!(o=(u=c.next()).done);o=!0){var l=u.value,h="!"===l[0]?"local":"sync",d=t[l];
"local"===h?r[l]=d:i[l]=d}}catch(f){s=!0,a=f}finally{try{o||null==c["return"]||c["return"]();
}finally{if(s)throw a}}chrome.storage.local.set(r,function(){chrome.storage.sync.set(i,function(){
n()})})},_onChromeStorageChange:function(t){var n=!0,r=!1,i=void 0;try{for(var o=void 0,s=e(t)[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){
var a=o.value,u=void 0!==t[a].newValue?t[a].newValue:null;this.dispatchEvent(new CustomEvent("change",{
detail:{key:a,value:u}}));var c=!0,l=!1,h=void 0;try{for(var d=void 0,f=e(app.bridge.targets)[Symbol.iterator]();!(c=(d=f.next()).done);c=!0){
var m=d.value;if("main"!==m&&"background"!==m){app.bridge.targets[m];app.bridge.postMessage(m,"config.dispatchChangeEvent",{
key:a,value:u})}}}catch(b){l=!0,h=b}finally{try{c||null==f["return"]||f["return"]();
}finally{if(l)throw h}}}}catch(g){r=!0,i=g}finally{try{n||null==s["return"]||s["return"]();
}finally{if(r)throw i}}}},{},t)}(t),r=n;return{get default(){return r}}}),System.registerModule("classes/event-emitter",[],function(){
"use strict";var t=function(){function t(){}return $traceurRuntime.createClass(t,{
addEventListener:function(t,e){this._events||(this._events={});var n=this._events[t];
n||(this._events[t]=n=[]),n.push(e),n.length>300&&console.warn("Potential EventEmitter memory leak: "+n.length+" listeners "+('subscribed to event "'+t+'"'));
},removeEventListener:function(t,e){if(this._events&&this._events[t]){for(var n=[],r=0;r<this._events[t].length;r+=1)this._events[t][r]!==e&&n.push(this._events[t][r]);
this._events[t]=n}},dispatchEvent:function(t){if(this._events){var e=this._events[t.type];
if(e){for(var n=null,r=e.length-1;r>=0;r-=1){var i,o=e[r];try{i=o.call(window,t)}catch(s){
null===n&&(n=s)}if(i===!1)break}if(n)throw n}}}},{})}(),e=t;return{get default(){
return e}}}),System.registerModule("elements/bx-app",[],function(){"use strict";var t=System.get("classes/bridge")["default"],e=System.get("classes/config")["default"],n=System.get("classes/clipboard")["default"],r=System.get("utils/array").compareArrays,i=System.get("utils/dom"),o=i.createElement,s=i.registerElement,a=System.get("utils/object"),u=a.entries,c=(a.keys,
a.observe),l=System.get("utils/event"),h=l.getShortcutForKeyboardEvent,d=l.getKeyForKeyboardEvent,f=function(i){
function s(){$traceurRuntime.superConstructor(s).apply(this,arguments)}return $traceurRuntime.createClass(s,{
createdCallback:function(){var r=this;this.createShadowRoot(),this.bridge=new t,this.config=new e,
this.clipboard=new n,this.tabIndex=-1,this.commands={},this.userShortcuts={},this._cursors=[],
this._modKeys={ctrl:!1,alt:!1,shift:!1},this.config.get("bx-shortcutseditor:userShortcuts",function(t){
r.userShortcuts=t||{}}),c(this._modKeys,function(){return r._onModKeysChange()}),
this.config.addEventListener("change",function(t){return r._onConfigChange(t)}),window.addEventListener("keydown",function(t){
return r._onKeyDown(t)}),window.addEventListener("keyup",function(t){return r._onKeyUp(t);
}),window.addEventListener("blur",function(t){return r._onBlur(t)})},get modKeys(){
var t=this._modKeys,e=t.ctrl,n=t.alt,r=t.shift;return{ctrl:e,alt:n,shift:r}},set modKeys(t){
throw new Error("modKeys property is read-only")},registerCursor:function(t){var e=void 0!==arguments[1]?arguments[1]:0,n=void 0!==arguments[2]?arguments[2]:0,r=void 0!==arguments[3]?arguments[3]:0;
t.includes("/")&&(t="url("+t+") "+n+" "+r+", auto");var i={name:t,weight:e};return this._cursors.push(i),
this._updateCursorStyle(),i},unregisterCursor:function(t){this._cursors=this._cursors.filter(function(e){
return e!==t}),this._updateCursorStyle()},execCommand:function(t){for(var e=document.activeElement;e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;
for(var n=e;n;n=n.parentNode||n.host)if(n.commands&&n.commands[t]){n.commands[t].exec();
break}},getCommandDescriptor:function(t){var e=this.commands[t],n=null;return e&&(n={
label:e.label,shortcut:e.shortcut,state:e.state?e.state():!1,enabled:e.enabled?e.enabled():!0
}),n},_onKeyDown:function(t){var e,n,i=h(t),o=d(t);"Ctrl"===o?this._modKeys.ctrl=!0:"Alt"===o?this._modKeys.alt=!0:"Shift"===o&&(this._modKeys.shift=!0);
var s=!0,a=!1,c=void 0;try{for(var l=void 0,f=u(this.commands)[Symbol.iterator]();!(s=(l=f.next()).done);s=!0){
var m=l.value,b=(e=m[Symbol.iterator](),(n=e.next()).done?void 0:n.value),g=(n=e.next()).done?void 0:n.value,p=this._getComputedShortcut(b);
if(r(i,p)){t.stopPropagation(),t.preventDefault(),(!g.enabled||g.enabled())&&(g.exec(),
this.menubar&&this.menubar.blinkItem(b));break}}}catch(v){a=!0,c=v}finally{try{s||null==f["return"]||f["return"]();
}finally{if(a)throw c}}},_onKeyUp:function(t){var e=d(t);"Ctrl"===e?this._modKeys.ctrl=!1:"Alt"===e?this._modKeys.alt=!1:"Shift"===e&&(this._modKeys.shift=!1);
},_onModKeysChange:function(){this.dispatchEvent(new CustomEvent("modkeyschange"));
},_onBlur:function(t){this._modKeys.ctrl=!1,this._modKeys.alt=!1,this._modKeys.shift=!1;
},_onConfigChange:function(t){var e=t.detail,n=e.key,r=e.value;"bx-shortcutseditor:userShortcuts"===n&&(this.userShortcuts=r||{});
},_updateCursorStyle:function(){var t=$traceurRuntime.spread(this._cursors);if(t.sort(function(t,e){
return t.weight>e.weight?1:t.weight<e.weight?-1:0}),this._cursorStyle||(this._cursorStyle=o("style"),
this._cursorStyle.id="cursor-style",this.shadowRoot.prepend(this._cursorStyle)),t.length>0){
var e=t[t.length-1].name;this._cursorStyle.innerHTML="* {cursor: "+e+"!important}";
}else this._cursorStyle.innerHTML=""},_getComputedShortcut:function(t){var e=[];return this.userShortcuts[t]?e=app.userShortcuts[t]:this.commands[t]&&this.commands[t].shortcut&&(e=this.commands[t].shortcut),
e}},{},i)}(HTMLElement),m=s("bx-app",f);return{get default(){return m}}}),System.registerModule("elements/bx-background",[],function(){
"use strict";var t=System.get("elements/bx-app")["default"],e=System.get("utils/dom").registerElement,n=function(t){
function e(){$traceurRuntime.superConstructor(e).apply(this,arguments)}return $traceurRuntime.createClass(e,{
createdCallback:function(){var t=this;$traceurRuntime.superGet(this,e.prototype,"createdCallback").call(this),
this._upgradeConfig(function(){t._pipedFiles=[],t._mainAppWindowState="closed",t.bridge.addMessageHandler("getPipedFiles",function(e,n,r){
r(t._pipedFiles)}),t.bridge.addMessageHandler("ready",function(){t._mainAppWindowState="ready";
}),chrome.app.runtime.onLaunched.addListener(function(e){t._onAppLaunch(e)}),t._onAppLaunch({});
})},_upgradeConfig:function(t){var e=this,n="!bx-background:version";this.config.get(n,function(r){
0===r?t():e.config.getAll(function(i){null===r&&(r=0),i[n]=r,e.config.setAll(i,t);
})})},_onAppLaunch:function(t){var e=this;if("ready"===this._mainAppWindowState){
var n=chrome.app.window.get("main");if(n.focus(),n.show(),t.items&&t.items.length>0){
var r=[];t.items.forEach(function(t){r.push(chrome.fileSystem.retainEntry(t.entry));
}),this.bridge.postMessage("main","openFiles",r)}}else("opening"===this._mainAppWindowState||"closed"===this._mainAppWindowState)&&(t.items&&t.items.forEach(function(t){
e._pipedFiles.push(chrome.fileSystem.retainEntry(t.entry))}),"closed"===this._mainAppWindowState&&this._openMainAppWindow());
},_openMainAppWindow:function(){var t=this;this._mainAppWindowState="opening";var e={
id:"main",resizable:!0,hidden:!0,frame:{type:"chrome",color:"#333"},outerBounds:{
width:1e3,height:600,minWidth:100,minHeight:440}};chrome.app.window.create("main.html",e,function(e){
var n,r;e.contentWindow.name="main",t.bridge.registerTarget("main",e.contentWindow),
e.contentWindow.addEventListener("load",r=function(){e.contentWindow.removeEventListener("load",r),
e.focus(),e.show()}),e.onClosed.addListener(n=function(){e.onClosed.removeListener(n),
t._mainAppWindowState="closed",t._pipedFiles=[]})})}},{},t)}(t),r=e("bx-background",n);
return{get default(){return r}}}),System.registerModule("elements/bx-button",[],function(){
"use strict";var t=System.get("utils/dom"),e=t.createElement,n=t.registerElement,r='\n<style id="stylesheet"></style>\n\n<main>\n  <svg id="icon" preserveAspectRatio="none" viewBox="0 0 100 100">\n    <use x="0" y="0" width="100%" height="100%"></use>\n  </svg>\n\n  <label></label>\n</main>\n',i=function(t){
function n(){$traceurRuntime.superConstructor(n).apply(this,arguments)}return $traceurRuntime.createClass(n,{
createdCallback:function(){this.createShadowRoot(),this.shadowRoot.innerHTML=r,this._stylesheetElement=this.shadowRoot.querySelector("#stylesheet"),
this._iconElement=this.shadowRoot.querySelector("#icon"),this._iconUseElement=this.shadowRoot.querySelector("#icon use"),
this._labelElement=this.shadowRoot.querySelector("label"),this._onLabelChange(),this._onIconChange(),
this._onIconSizeChange(),this._onSkinChange()},attributeChangedCallback:function(t,e,n){
e!==n&&("label"===t?this._onLabelChange():"icon"===t?this._onIconChange():"iconsize"===t?this._onIconSizeChange():"skin"===t&&this._onSkinChange());
},get label(){return this.hasAttribute("label")?this.getAttribute("label"):""},set label(t){
this.setAttribute("label",t)},get value(){return this.getAttribute("value")},set value(t){
null===t?this.removeAttribute("value"):this.setAttribute("value",t)},get icon(){return this.hasAttribute("icon")?this.getAttribute("icon"):"stub";
},set icon(t){this.setAttribute("icon",t)},get iconSize(){return this.hasAttribute("iconsize")?parseInt(this.getAttribute("iconsize")):20;
},set iconSize(t){this.setAttribute("iconsize",t)},get skin(){return this.hasAttribute("skin")?this.getAttribute("skin"):"horizontal";
},set skin(t){this.setAttribute("skin",t)},get href(){return this.hasAttribute("href")?this.getAttribute("href"):"";
},set href(t){this.setAttribute("href",t)},get pressed(){return this.hasAttribute("pressed")?!0:!1;
},set pressed(t){t===!0?this.setAttribute("pressed",""):this.removeAttribute("pressed");
},get mixed(){return this.hasAttribute("mixed")},set mixed(t){t?this.setAttribute("mixed",""):this.removeAttribute("mixed");
},_onLabelChange:function(){this._labelElement.textContent=this.label},_onIconChange:function(){
this._iconUseElement.remove(),this._iconUseElement=e("svg:use"),this._iconElement.append(this._iconUseElement),
this._iconUseElement.href.baseVal="images/icons.svg#"+this.icon},_onIconSizeChange:function(){
this._iconElement.style.width=this.iconSize+"px",this._iconElement.style.height=this.iconSize+"px";
},_onSkinChange:function(){this._stylesheetElement.innerText='@import url("stylesheets/bx-button@'+this.skin+'.css");';
}},{},t)}(HTMLElement),o=n("bx-button",i);return{get default(){return o}}}),System.registerModule("elements/bx-confirmdialog",[],function(){
"use strict";System.get("elements/bx-button"),System.get("elements/bx-icon");var t=System.get("utils/dom"),e=t.createElement,n=t.registerElement,r={
title:"Sample title",description:"This is sample description.",buttons:[{value:"confirm",
label:"Confirm"},{value:"cancel",label:"Cancel"}]},i='\n  <style>@import url("stylesheets/bx-confirmdialog.css");</style>\n\n  <div id="message">\n    <bx-icon id="icon" name="warning"></bx-icon>\n\n    <div id="headers">\n      <h1 id="title"></h1>\n      <h2 id="description"></h2>\n    </div>\n  </div>\n\n  <div id="buttons"></div>\n',o=function(t){
function n(){$traceurRuntime.superConstructor(n).apply(this,arguments)}return $traceurRuntime.createClass(n,{
createdCallback:function(){var t=this;this._shadowRoot=this.createShadowRoot({mode:"closed"
}),this._shadowRoot.innerHTML=i;var e=!0,n=!1,r=void 0;try{for(var o=void 0,s=this._shadowRoot.querySelectorAll("[id]")[Symbol.iterator]();!(e=(o=s.next()).done);e=!0){
var a=o.value;this["#"+a.id]=a}}catch(u){n=!0,r=u}finally{try{e||null==s["return"]||s["return"]();
}finally{if(n)throw r}}this.tabIndex=1,this["#buttons"].addEventListener("click",function(e){
return t._onButtonClick(e)}),this.addEventListener("keydown",function(e){return t._onKeyDown(e);
})},showModal:function(){var t=void 0!==arguments[0]?arguments[0]:r,i=t.title||r.title,o=t.description||r.description;
t.buttons||r.buttons;this["#title"].innerHTML=i,this["#description"].innerHTML=o,
this["#buttons"].innerHTML="";var s=!0,a=!1,u=void 0;try{for(var c=void 0,l=t.buttons[Symbol.iterator]();!(s=(c=l.next()).done);s=!0){
var h=c.value,d=h.value,f=h.label,m=e("bx-button");m.value=d,m.label=f,m.skin="horizontal",
this["#buttons"].append(m)}}catch(b){a=!0,u=b}finally{try{s||null==l["return"]||l["return"]();
}finally{if(a)throw u}}this["#buttons"].lastElementChild&&this["#buttons"].lastElementChild.setAttribute("default",""),
$traceurRuntime.superGet(this,n.prototype,"showModal").call(this),this.focus()},_onButtonClick:function(t){
0===t.button&&"bx-button"===t.target.localName&&this.close(t.target.value)},_onKeyDown:function(t){
if(13===t.keyCode){var e=this["#buttons"].lastElementChild?this["#buttons"].lastElementChild.value:null;
this.close(e)}else 27===t.keyCode&&(t.preventDefault(),this.close(null))}},{},t)}(HTMLDialogElement),s=n("dialog","bx-confirmdialog",o);
return{get default(){return s}}}),System.registerModule("elements/bx-contextmenu",[],function(){
"use strict";var t=System.get("utils/dom").registerElement;System.get("elements/bx-menu");
var e=!1,n='\n  <style>@import url("stylesheets/bx-contextmenu.css");</style>\n  <div id="overlay"></div>\n  <content></content>\n',r=function(t){
function r(){$traceurRuntime.superConstructor(r).apply(this,arguments)}return $traceurRuntime.createClass(r,{
createdCallback:function(){var t=this;this.createShadowRoot(),this.shadowRoot.innerHTML=n,
this._menu=this.querySelector("bx-menu"),this._overlay=this.shadowRoot.querySelector("#overlay"),
this._menu.addEventListener("menuopen",function(e){return t._onMenuOpen(e)}),this._menu.addEventListener("menuclose",function(e){
return t._onMenuClose(e)}),this._menu.addEventListener("menuitemclick",function(e){
return t._onMenuItemClick(e)}),this._overlay.addEventListener("mousedown",function(e){
return t._onOverlayMouseDown(e)}),e&&this.setAttribute("debug","")},attachedCallback:function(){
var t=this;window.addEventListener("blur",this._windowBlurListener=function(){t._onWindowBlur(event);
}),window.addEventListener("resize",this._windowResizeListener=function(){t._onWindowResize(event);
})},detachedCallback:function(){window.removeEventListener("blur",this._windowBlurListener),
window.removeEventListener("resize",this._windowResizeListener),this.parentNode.removeEventListener("contextmenu",this._contextMenuListener);
},open:function(t,e){this._overlay.style.display="block",this._menu.openAtPosition(event.clientX,event.clientY);
},validateMenu:function(t){},_onMenuOpen:function(t){this.validateMenu(t.detail)},
_onMenuClose:function(t){t.detail===this._menu&&(this._overlay.style.display="none");
},_onMenuItemClick:function(t){this._menu.close();var e=t.detail;e.commandID&&app.execCommand(e.commandID);
},_onOverlayMouseDown:function(t){this._menu.close(),event.preventDefault(),event.stopPropagation();
},_onWindowBlur:function(t){e||this._menu.close()},_onWindowResize:function(t){e||this._menu.close();
}},{},t)}(HTMLElement),i=t("bx-contextmenu",r);return{get default(){return i}}}),
System.registerModule("elements/bx-editors",[],function(){"use strict";System.get("elements/bx-button"),
System.get("elements/bx-icon"),System.get("elements/bx-confirmdialog"),System.get("elements/bx-tabs"),
System.get("elements/bx-webviews");var t=System.get("utils/array"),e=t.iterateSeries,n=t.iterateParallel,r=System.get("utils/artwork"),i=r.compressArtwork,o=r.uncompressArtwork,s=System.get("utils/chrome"),a=(s.DEV_MODE,
s.restoreFileEntry),u=s.getFileExtension,c=System.get("utils/dom"),l=(c.createElement,
c.registerElement),h=System.get("utils/time").createTimeout,d=10,f='\n  <style>@import url("stylesheets/bx-editors.css");</style>\n\n  <main>\n    <bx-tabs></bx-tabs>\n    <bx-webviews tabindex="0"></bx-webviews>\n  </main>\n',m=function(t){
function r(){$traceurRuntime.superConstructor(r).apply(this,arguments)}return $traceurRuntime.createClass(r,{
createdCallback:function(){var t=this;this._editors=[],this._counter=0,this._currentEditor=null,
this._restoringSession=!1,this.createShadowRoot(),this.shadowRoot.innerHTML=f,this._tabs=this.shadowRoot.querySelector("bx-tabs"),
this._webViews=this.shadowRoot.querySelector("bx-webviews"),this.shadowRoot.addEventListener("mousedown",function(e){
return t._onMouseDown(e)}),this.shadowRoot.addEventListener("mousedown",function(e){
return t._onMouseDown(e)}),this._tabs.addEventListener("tabopenintent",function(e){
return t.openEditor()}),this._tabs.addEventListener("tabcloseintent",function(e){
return t.closeEditor(e.detail.id)}),this._tabs.addEventListener("tabdown",function(e){
return t._showEditor(e.detail.id)}),this._tabs.addEventListener("tabslotchange",function(e){
return t._onTabSlotChange(e)}),this._tabs.addEventListener("dragover",function(e){
return t._onTabsDragOver(e)}),this._tabs.addEventListener("drop",function(e){return t._onTabsDrop(e);
})},attachedCallback:function(){var t=this;this._readRecentFiles(function(e){t.recentFiles=e,
t._restoringSession=!0,t._restoreSession(function(){return t._restoringSession=!1;
})})},get currentEditorID(){return this._currentEditor?this._currentEditor.id:null;
},set currentEditorID(t){throw new Error("currentEditorID property is read-only");
},_onMouseDown:function(t){"webview"!==t.target.localName&&t.preventDefault()},_onTabSlotChange:function(t){
var e=t.detail,n=e.slot,r=e.tab,i=this._editors.find(function(t){return t.id===r.id;
});i&&(this._editors.remove(i),this._editors.splice(n,0,i)),this._storeSession()},
_onTabsDragOver:function(t){t.preventDefault(),t.dataTransfer.effectAllowed="copy",
t.dataTransfer.dropEffect="copy"},_onTabsDrop:function(t){var n=this;t.preventDefault(),
e(t.dataTransfer.items,function(t,e,r){var i=t.webkitGetAsEntry();(i.name.endsWith(".svg")||i.name.endsWith(".svgz"))&&(chrome.fileSystem.getWritableEntry(i,function(t){
n.openEditorWithArtworkFromFileEntry(t),n.registerRecentFile(t)}),e())})},openEditor:function(){
var t=void 0!==arguments[0]?arguments[0]:null,e=void 0!==arguments[1]?arguments[1]:function(){},n=this,r={
id:"editor-"+this._counter,changeCounter:0,filePath:null,fileEntry:null};this._counter+=1,
this._editors.push(r),this._webViews.openWebView(r.id,"frontend/editor.html",t,function(){
n._tabs.openTab(r.id,"Untitled"),n._showEditor(r.id),e(r)})},openEditorWithArtworkFromFileEntry:function(t){
var e=void 0!==arguments[1]?arguments[1]:function(){},n=this;chrome.fileSystem.getDisplayPath(t,function(r){
var i=n._editors.find(function(t){return t.filePath===r});if(i)n._showEditor(i.id),
e(i);else{var s={id:"editor-"+n._counter,changeCounter:0,filePath:r,fileEntry:t};n._counter+=1,
n._editors.push(s),n._readFileEntry(t,function(r){t.name.endsWith("svgz")&&(r=o(r)),
n._webViews.openWebView(s.id,"frontend/editor.html",r,function(r){n._tabs.openTab(s.id,t.name),
n._showEditor(s.id),e(s)})})}})},openEditorWithArtworkFromFileDialog:function(){var t=void 0!==arguments[0]?arguments[0]:function(){},n=this,r={
type:"openWritableFile",acceptsMultiple:!1,accepts:[{extensions:["svg","svgz","html"]
}]};chrome.fileSystem.chooseEntry(r,function(r){if(chrome.runtime.lastError)t();else{
var i=function(t,e,r){n.openEditorWithArtworkFromFileEntry(t,function(){n.registerRecentFile(t),
e()})};e(r,i,function(e){t()})}})},closeEditor:function(t){var e=void 0!==arguments[1]?arguments[1]:function(t){},n=this,r=this._editors.find(function(e){
return e.id===t})||null,i=function(){e(!0)},o=function(){if(n._tabs.closeTab(r.id),
n._webViews.closeWebView(r.id),r===n._currentEditor){var t=null;if(n._editors.length>1){
var i=n._editors.indexOf(r);t=i===n._editors.length-1?n._editors[i-1].id:n._editors[i+1].id;
}n._editors.remove(r),n._showEditor(t),0===n._editors.length&&n.openEditor()}else n._editors.remove(r),
n._storeSession();e(!1)};if(this._restoringSession)i();else if(null===r)i();else if(0===r.changeCounter)o();else{
var s=r.fileEntry?r.fileEntry.name:"Untitled",a={title:"Unsaved changes",description:'"<strong>'+s+'</strong>" was modified, would you like to save it before closing?',
buttons:[{value:"dontSave",label:"Don't Save"},{value:"cancel",label:"Cancel"},{value:"save",
label:"Save"}]};app.showConfirmDialog(a,function(t){"save"===t?h(30,function(){n._saveEditorArtwork(r.id,function(t){
t?i():o()})}):"dontSave"===t?o():"cancel"===t&&i()})}},_saveEditorArtwork:function(t){
var e=void 0!==arguments[1]?arguments[1]:function(){},n=this,r=this._editors.find(function(e){
return e.id===t});if(r)if(r.fileEntry)if(0===r.changeCounter)e();else{var o,s,a=u(r.fileEntry);
"svg"===a?(o="xml",s=!1):"svgz"===a?(o="xml",s=!0):"html"===a&&(o="html",s=!1),app.bridge.postMessage(r.id,"getArtwork",o,function(t){
s&&(t=i(t)),n._writeFileEntry(r.fileEntry,t,function(){n.setEditorChangeCounter(r.id,0),
e()})})}else this._saveEditorArtworkAs(r.id,e);else e()},_saveEditorArtworkAs:function(t){
var e=void 0!==arguments[1]?arguments[1]:function(t){},n=this,r=this._editors.find(function(e){
return e.id===t});if(r){var o={type:"saveFile",suggestedName:r.fileEntry?r.fileEntry.name:"Untitled",
acceptsAllTypes:!0,accepts:[{description:"HTML",extensions:["html"]},{description:"SVGZ",
extensions:["svgz"]},{description:"SVG",extensions:["svg"]}]};chrome.fileSystem.chooseEntry(o,function(t){
if(chrome.runtime.lastError)e(!0);else{var o,s,a=u(t);"svg"===a?(o="xml",s=!1):"svgz"===a?(o="xml",
s=!0):"html"===a&&(o="html",s=!1),chrome.fileSystem.getDisplayPath(t,function(a){
app.bridge.postMessage(r.id,"getArtwork",o,function(o){r.fileEntry=t,r.filePath=a;
var u=n._tabs.querySelector("#"+r.id);u.label=r.fileEntry.name,s&&(o=i(o)),n._writeFileEntry(r.fileEntry,o,function(){
n.setEditorChangeCounter(r.id,0),n.registerRecentFile(r.fileEntry),n._storeSession(),
e(!1)})})})}})}else e(!0)},_showEditor:function(t){var e=this._editors.find(function(e){
return e.id===t});e&&(this._tabs.highlightTab(t),this._webViews.showWebView(t),this._currentEditor=e,
this._storeSession())},showNextEditor:function(){var t=this._editors.indexOf(this._currentEditor);
this._editors[t+1]?this._showEditor(this._editors[t+1].id):this._showEditor(this._editors[0].id);
},showPreviousEditor:function(){var t=this._editors.indexOf(this._currentEditor);this._editors[t-1]?this._showEditor(this._editors[t-1].id):this._showEditor(this._editors[this._editors.length-1].id);
},moveCurrentEditorLeft:function(){if(this._editors.length>1){var t=this._editors.indexOf(this._currentEditor);
t>0?(this._editors.remove(this._currentEditor),this._editors.splice(t-1,0,this._currentEditor)):(this._editors.remove(this._currentEditor),
this._editors.push(this._currentEditor))}this._tabs.moveHighlightedTabLeft(),this._storeSession();
},moveCurrentEditorRight:function(){if(this._editors.length>1){var t=this._editors.indexOf(this._currentEditor);
t<this._editors.length-1?(this._editors.remove(this._currentEditor),this._editors.splice(t+1,0,this._currentEditor)):(this._editors.remove(this._currentEditor),
this._editors.unshift(this._currentEditor))}this._tabs.moveHighlightedTabRight(),
this._storeSession()},reloadEditor:function(t){var e=this;this._webViews.reloadWebView(t,function(){
var n=e._editors.find(function(e){return e.id===t});e.setEditorChangeCounter(n.id,0),
n.fileEntry?e._readFileEntry(n.fileEntry,function(t){n.fileEntry.name.endsWith("svgz")&&(t=o(t)),
app.bridge.postMessage(n.id,"init",t)}):app.bridge.postMessage(n.id,"init")})},reloadCurrentEditor:function(){
this.reloadEditor(this._currentEditor.id)},canReloadCurrentEditor:function(){return!0;
},setEditorChangeCounter:function(t,e){var n=this._editors.find(function(e){return e.id===t;
});if(n){var r=n.changeCounter;if(n.changeCounter=e,0===r&&0!==n.changeCounter){var i=this._tabs.querySelector("#"+n.id);
i.icon="close-edited"}else if(0!==r&&0===n.changeCounter){var o=this._tabs.querySelector("#"+n.id);
o.icon="close"}}},saveCurrentEditorArtwork:function(t){this._saveEditorArtwork(this._currentEditor.id,t);
},saveCurrentEditorArtworkAs:function(t){this._saveEditorArtworkAs(this._currentEditor.id,t);
},canSaveCurrentEditorArtwork:function(){return this._currentEditor.changeCounter>0;
},canShowNextEditor:function(){return this._editors.length>1},canShowPreviousEditor:function(){
return this._editors.length>1},canMoveCurrentEditorLeft:function(){return this._editors.length>1;
},canMoveCurrentEditorRight:function(){return this._editors.length>1},registerRecentFile:function(t){
var e=this;chrome.fileSystem.getDisplayPath(t,function(n){e.recentFiles.forEach(function(t){
t.filePath===n&&e.recentFiles.remove(t)}),e.recentFiles.unshift({filePath:n,fileEntry:t,
retainedFileEntry:chrome.fileSystem.retainEntry(t)}),e.recentFiles.length>d&&(e.recentFiles.length=d);
var r=e.recentFiles.map(function(t){return t.retainedFileEntry});app.config.set("!bx-editors:recent",r);
})},unregisterRecentFiles:function(){app.config.set("!bx-editors:recent",null),this.recentFiles=[];
},_readRecentFiles:function(t){app.config.get("!bx-editors:recent",function(e){var r=e||[],i=[],o=function(t,e,n){
a(t,function(n){n?chrome.fileSystem.getDisplayPath(n,function(r){i.push({filePath:r,
fileEntry:n,retainedFileEntry:t}),e()}):e()})};n(r,o,function(e){console.log(e),i.length>d&&(i.length=d),
t(i)})})},_storeSession:function(){var t=[],e=!0,n=!1,r=void 0;try{for(var i=void 0,o=this._editors[Symbol.iterator]();!(e=(i=o.next()).done);e=!0){
var s=i.value;t.push({current:this._currentEditor?this._currentEditor.id===s.id:!1,
retainedFileEntry:s.fileEntry?chrome.fileSystem.retainEntry(s.fileEntry):null})}}catch(a){
n=!0,r=a}finally{try{e||null==o["return"]||o["return"]()}finally{if(n)throw r}}app.config.set("!bx-editors:session",t);
},_restoreSession:function(){var t=void 0!==arguments[0]?arguments[0]:function(){},n=this;
this._getEditorsForLastSession(function(r,i){n._getEditorsForFilesPassedOnAppLaunch(function(s){
var a=$traceurRuntime.spread(r),u=!0,c=!1,l=void 0;try{for(var h=void 0,d=s[Symbol.iterator]();!(u=(h=d.next()).done);u=!0){
var f=h.value,m=!0,b=!0,g=!1,p=void 0;try{for(var v=void 0,_=a[Symbol.iterator]();!(b=(v=_.next()).done);b=!0){
var y=v.value;if(null!==f.filePath&&f.filePath===y.filePath){m=!1,i=y.id;break}}}catch(w){
g=!0,p=w}finally{try{b||null==_["return"]||_["return"]()}finally{if(g)throw p}}m&&(a.push(f),
i=f.id)}}catch(x){c=!0,l=x}finally{try{u||null==d["return"]||d["return"]()}finally{
if(c)throw l}}if(0===a.length){var S={id:"editor-"+n._counter,changeCounter:0,filePath:null,
fileEntry:null};i=S.id,n._counter+=1,a.push(S)}var E=a.find(function(t){return t.id===i;
});E||(E=a[a.length-1]);var j=a.filter(function(t){return t.id!==E.id}),k=!0,C=!1,O=void 0;
try{for(var M=void 0,R=a[Symbol.iterator]();!(k=(M=R.next()).done);k=!0){var A=M.value;
n._editors.push(A);var T=A.fileEntry?A.fileEntry.name:"Untitled",L=n._tabs.openTab(A.id,T);
L.disabled=!0,A===E&&n._tabs.highlightTab(A.id)}}catch(I){C=!0,O=I}finally{try{k||null==R["return"]||R["return"]();
}finally{if(C)throw O}}var F=function(t,e){t.fileEntry?n._readFileEntry(t.fileEntry,function(r){
t.fileEntry.name.endsWith("svgz")&&(r=o(r)),n._webViews.openWebView(t.id,"frontend/editor.html",r,function(){
n._tabs.querySelector("#"+t.id).disabled=!1,e()})}):n._webViews.openWebView(t.id,"frontend/editor.html",null,function(){
n._tabs.querySelector("#"+t.id).disabled=!1,e()})};F(E,function(){n._showEditor(E.id),
n.dispatchEvent(new CustomEvent("sessionrestore"));var r=function(t,e,n){F(t,function(){
e()})};e(j,r,function(e){t()})})})})},_getEditorsForLastSession:function(t){var n=this,r=[],i=null;
app.config.get("!bx-editors:session",function(o){if(!o)return void t(r,i);var s=function(t,e,o){
var s=t,u=s.retainedFileEntry,c=s.current;if(u)a(u,function(t){t?chrome.fileSystem.getDisplayPath(t,function(o){
var s={id:"editor-"+n._counter,changeCounter:0,filePath:o,fileEntry:t};r.push(s),
c&&(i=s.id),n._counter+=1,e()}):e()});else{var l={id:"editor-"+n._counter,changeCounter:0,
filePath:null,fileEntry:null,current:c};r.push(l),c&&(i=l.id),n._counter+=1,e()}};
e(o,s,function(e){t(r,i)})})},_getEditorsForFilesPassedOnAppLaunch:function(t){var n=this,r=[],i=function(t,e,i){
a(t,function(t){t?chrome.fileSystem.getDisplayPath(t,function(i){r.push({id:"editor-"+n._counter,
changeCounter:0,filePath:i,fileEntry:t,current:!1}),n._counter+=1,e()}):e()})};app.bridge.postMessage("background","getPipedFiles",null,function(n){
e(n,i,function(e){t(r)})})},_readFileEntry:function(t,e){t.file(function(n){var r;
r=t.name.endsWith("svgz")?"binary":"text";var i=new FileReader;i.addEventListener("load",function(t){
var n;n="binary"===r?new Uint8Array(t.target.result):t.target.result,e(n)}),"binary"===r?i.readAsArrayBuffer(n):i.readAsText(n);
})},_writeFileEntry:function(t,e){var n=void 0!==arguments[2]?arguments[2]:function(){},r=function(t){
var r=new Blob([e],{type:"image/svg+xml;charset=utf-8"}),i="write";t.addEventListener("writeend",function(e){
"write"===i?(i="truncate",t.truncate(r.size)):"truncate"===i&&n()}),t.addEventListener("error",function(t){
console.log(t)}),t.write(r)},i=function(t){"NotFoundError"===t.name};t.createWriter(r,i);
}},{},t)}(HTMLElement),b=l("bx-editors",m);return{get default(){return b}}}),System.registerModule("elements/bx-icon",[],function(){
"use strict";var t=System.get("utils/dom"),e=t.createElement,n=t.registerElement,r='\n<style>\n  @import url("stylesheets/bx-icon.css");\n</style>\n\n<main>\n  <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 100 100">\n    <use width="100" height="100" x="0" y="0"></use>\n  </svg>\n</main>\n',i=function(t){
function n(){$traceurRuntime.superConstructor(n).apply(this,arguments)}return $traceurRuntime.createClass(n,{
createdCallback:function(){this.createShadowRoot(),this.shadowRoot.innerHTML=r,this._svgElement=this.shadowRoot.querySelector("svg"),
this._useElement=this.shadowRoot.querySelector("use"),this._onNameChange()},attributeChangedCallback:function(t,e,n){
e!==n&&"name"===t&&this._onNameChange()},get name(){return this.hasAttribute("name")?this.getAttribute("name"):"";
},set name(t){null===t?this.removeAttribute("name"):this.setAttribute("name",t)},
_onNameChange:function(){this._useElement.remove(),this._useElement=e("svg:use"),
this._svgElement.append(this._useElement),this._useElement.href.baseVal="images/icons.svg#"+this.name;
}},{},t)}(HTMLElement),o=n("bx-icon",i);return{get default(){return o}}}),System.registerModule("elements/bx-main",[],function(){
"use strict";var t=System.get("elements/bx-app")["default"];System.get("elements/bx-menubar"),
System.get("elements/bx-menu"),System.get("elements/bx-menuitem"),System.get("elements/bx-editors");
var e=System.get("utils/array").iterateSeries,n=System.get("utils/chrome"),r=n.getBackgroundWindow,i=n.restoreFileEntry,o=n.APP_VERSION,s=System.get("utils/dom"),a=s.createElement,u=s.registerElement,c=System.get("utils/event").keyboardShortcutToString,l=System.get("utils/platform").OS_NAME,h=System.get("utils/time").createTimeout,d="frontend/preferences.html",f="frontend/about.html",m={
id:"preferencesAppWindow",resizable:!1,hidden:!0,frame:{type:"chrome",color:"#333"
},outerBounds:{width:700,minWidth:700,maxWidth:700,height:450,minHeight:450,maxHeight:450
}},b={id:"aboutAppWindow",resizable:!1,hidden:!0,frame:{type:"chrome",color:"#333"
},outerBounds:{width:340,minWidth:340,maxWidth:340,height:400,minHeight:400,maxHeight:400
}},g='\n  <style>@import url("stylesheets/bx-main.css");</style>\n\n  <bx-menubar disabled>\n    <bx-menu label="File">\n      <bx-menuitem commandid="new"></bx-menuitem>\n      <bx-menuitem commandid="newFromSelected"></bx-menuitem>\n      <bx-menuitem commandid="open"></bx-menuitem>\n      <bx-menuitem id="open-recent-menu-item" label="Open Recent">\n        <bx-menu id="open-recent-menu">\n          <hr/>\n          <bx-menuitem commandid="clearRecent"></bx-menuitem>\n        </bx-menu>\n      </bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="save"></bx-menuitem>\n      <bx-menuitem commandid="saveAs"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="reloadFromDisk"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="close"></bx-menuitem>\n      <bx-menuitem commandid="quit"></bx-menuitem>\n    </bx-menu>\n\n    <bx-menu label="Edit">\n      <bx-menuitem commandid="undo"></bx-menuitem>\n      <bx-menuitem commandid="redo"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="cut"></bx-menuitem>\n      <bx-menuitem commandid="copy"></bx-menuitem>\n      <bx-menuitem commandid="copyPathData"></bx-menuitem>\n      <bx-menuitem commandid="paste"></bx-menuitem>\n      <bx-menuitem commandid="duplicate"></bx-menuitem>\n      <bx-menuitem commandid="delete"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="selectAll"></bx-menuitem>\n      <bx-menuitem commandid="deselectAll"></bx-menuitem>\n      <bx-menuitem commandid="selectNext"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="preferences"></bx-menuitem>\n    </bx-menu>\n\n    <bx-menu label="View">\n      <bx-menuitem commandid="zoomIn"></bx-menuitem>\n      <bx-menuitem commandid="zoomOut"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="zoomToFitAll"></bx-menuitem>\n      <bx-menuitem commandid="zoomToOriginalSize"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="zoomToViewBox"></bx-menuitem>\n      <bx-menuitem commandid="zoomToViewBoxWidth"></bx-menuitem>\n      <bx-menuitem commandid="zoomToViewBoxHeight"></bx-menuitem>\n    </bx-menu>\n\n    <bx-menu label="Object">\n      <bx-menuitem commandid="group"></bx-menuitem>\n      <bx-menuitem commandid="ungroup"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="raise"></bx-menuitem>\n      <bx-menuitem commandid="lower"></bx-menuitem>\n      <bx-menuitem commandid="raiseToFront"></bx-menuitem>\n      <bx-menuitem commandid="lowerToBack"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="clip"></bx-menuitem>\n      <bx-menuitem commandid="unclip"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="mask"></bx-menuitem>\n      <bx-menuitem commandid="unmask"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="rotateClockwise"></bx-menuitem>\n      <bx-menuitem commandid="rotateCounterclockwise"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="flipX"></bx-menuitem>\n      <bx-menuitem commandid="flipY"></bx-menuitem>\n      <hr/>\n      <bx-menuitem label="Move">\n        <bx-menu>\n          <bx-menuitem commandid="moveOneUnitLeft"></bx-menuitem>\n          <bx-menuitem commandid="moveOneUnitRight"></bx-menuitem>\n          <bx-menuitem commandid="moveOneUnitUp"></bx-menuitem>\n          <bx-menuitem commandid="moveOneUnitDown"></bx-menuitem>\n          <hr/>\n          <bx-menuitem commandid="moveTenUnitsLeft"></bx-menuitem>\n          <bx-menuitem commandid="moveTenUnitsRight"></bx-menuitem>\n          <bx-menuitem commandid="moveTenUnitsUp"></bx-menuitem>\n          <bx-menuitem commandid="moveTenUnitsDown"></bx-menuitem>\n        </bx-menu>\n      </bx-menuitem>\n    </bx-menu>\n\n    <bx-menu label="Tools">\n      <bx-menuitem commandid="previousTool"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="transformTool"></bx-menuitem>\n      <bx-menuitem commandid="editTool"></bx-menuitem>\n      <bx-menuitem commandid="quadBezierTool"></bx-menuitem>\n      <bx-menuitem commandid="cubicBezierTool"></bx-menuitem>\n      <bx-menuitem commandid="freehandTool"></bx-menuitem>\n      <bx-menuitem commandid="textTool"></bx-menuitem>\n      <bx-menuitem commandid="rectTool"></bx-menuitem>\n      <bx-menuitem commandid="ellipseTool"></bx-menuitem>\n      <bx-menuitem commandid="starTool"></bx-menuitem>\n      <bx-menuitem commandid="ringTool"></bx-menuitem>\n    </bx-menu>\n\n    <bx-menu label="Panels">\n      <bx-menuitem commandid="fillPanel"></bx-menuitem>\n      <bx-menuitem commandid="strokePanel"></bx-menuitem>\n      <bx-menuitem commandid="compositingPanel"></bx-menuitem>\n      <bx-menuitem commandid="maskPanel"></bx-menuitem>\n      <bx-menuitem commandid="typographyPanel"></bx-menuitem>\n      <bx-menuitem commandid="viewPanel"></bx-menuitem>\n      <bx-menuitem commandid="arrangementPanel"></bx-menuitem>\n      <bx-menuitem commandid="defsPanel"></bx-menuitem>\n    </bx-menu>\n\n    <bx-menu label="Window">\n      <bx-menuitem commandid="showPreviousTab"></bx-menuitem>\n      <bx-menuitem commandid="showNextTab"></bx-menuitem>\n      <bx-menuitem commandid="moveTabLeft"></bx-menuitem>\n      <bx-menuitem commandid="moveTabRight"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="minimizeWindow"></bx-menuitem>\n      <bx-menuitem commandid="maximizeWindow"></bx-menuitem>\n      <bx-menuitem commandid="fullscreen"></bx-menuitem>\n      <bx-menuitem commandid="restoreWindow"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="alwaysOnTop"></bx-menuitem>\n    </bx-menu>\n\n    <bx-menu label="Help">\n      <bx-menuitem commandid="about"></bx-menuitem>\n      <bx-menuitem commandid="rate"></bx-menuitem>\n      <bx-menuitem commandid="support"></bx-menuitem>\n    </bx-menu>\n  </bx-menubar>\n\n  <bx-editors></bx-editors>\n  <dialog is="bx-confirmdialog" id="confirm-dialog"></dialog>\n',p=function(t){
function n(){$traceurRuntime.superConstructor(n).apply(this,arguments)}return $traceurRuntime.createClass(n,{
createdCallback:function(){var t=this;$traceurRuntime.superGet(this,n.prototype,"createdCallback").call(this),
this.commands={"new":{label:"New",shortcut:["Ctrl","T"],enabled:function(){return!0;
},exec:function(){return t.editors.openEditor()}},newFromSelected:{label:"New From Selected",
shortcut:["Ctrl","Shift","N"],enabled:function(){return!0},exec:function(){return t._openNewEditorWithArtworkFromSelectedElements();
}},open:{label:"Open…",shortcut:["Ctrl","O"],enabled:function(){return!0},exec:function(){
return h(100,function(){return t.editors.openEditorWithArtworkFromFileDialog()})}
},clearRecent:{label:"Clear Recent",enabled:function(){return t.editors.recentFiles.length>0;
},exec:function(){return t.editors.unregisterRecentFiles()}},save:{label:"Save",shortcut:["Ctrl","S"],
enabled:function(){return t.editors.canSaveCurrentEditorArtwork()},exec:function(){
return h(100,function(){return t.editors.saveCurrentEditorArtwork()})}},saveAs:{shortcut:["Ctrl","Shift","S"],
label:"Save As…",enabled:function(){return!0},exec:function(){return h(100,function(){
return t.editors.saveCurrentEditorArtworkAs()})}},reloadFromDisk:{shortcut:["Ctrl","R"],
label:"Reload from Disk",enabled:function(){return t.editors.canReloadCurrentEditor();
},exec:function(){return t.editors.reloadCurrentEditor()}},close:{shortcut:["Ctrl","W"],
label:"Close",enabled:function(){return!0},exec:function(){return t.editors.closeEditor(t.editors.currentEditorID);
}},quit:{shortcut:["Ctrl","Q"],label:"Quit Boxy SVG",enabled:function(){return!0},
exec:function(){return t._quitApp()}},showPreviousTab:{label:"Show Previous Tab",
shortcut:["Ctrl","Left"],enabled:function(){return t.editors.canShowPreviousEditor();
},exec:function(){return t.editors.showPreviousEditor()}},showNextTab:{label:"Show Next Tab",
shortcut:["Ctrl","Right"],enabled:function(){return t.editors.canShowNextEditor();
},exec:function(){return t.editors.showNextEditor()}},moveTabLeft:{label:"Move Tab Left",
shortcut:["Ctrl","Alt","Left"],enabled:function(){return t.editors.canMoveCurrentEditorLeft();
},exec:function(){return t.editors.moveCurrentEditorLeft()}},moveTabRight:{label:"Move Tab Right",
shortcut:["Ctrl","Alt","Right"],enabled:function(){return t.editors.canMoveCurrentEditorRight();
},exec:function(){return t.editors.moveCurrentEditorRight()}},minimizeWindow:{label:"Minimize Window",
enabled:function(){return!0},exec:function(){return chrome.app.window.current().minimize();
}},maximizeWindow:{label:"Maximize Window",enabled:function(){return t._canMaximizeCurrentWindow();
},exec:function(){return t._maximizeCurrentWindow()}},restoreWindow:{label:"Restore",
enabled:function(){return t._canRestoreCurrentWindow()},exec:function(){return t._restoreCurrentWindow();
}},fullscreen:{label:"Fullscreen",enabled:function(){return!chrome.app.window.current().isFullscreen();
},exec:function(){return chrome.app.window.current().fullscreen()}},alwaysOnTop:{
label:"Always on Top",enabled:function(){return!0},state:function(){return chrome.app.window.current().isAlwaysOnTop();
},exec:function(){return t._toggleAlwaysOnTopWindowState()}},about:{label:"About",
enabled:function(){return!0},exec:function(){return t._openAboutAppWindow()}},preferences:{
label:"Preferences…",enabled:function(){return!0},exec:function(){return t._openPreferencesAppWindow();
}},rate:{label:"Rate on Chrome Web Store...",enabled:function(){return navigator.onLine;
},exec:function(){return t._openChromeWebStoreReviewsPage()}},support:{label:"Get Support...",
enabled:function(){return navigator.onLine},exec:function(){return t._openChromeWebStoreSupportPage();
}}},r(function(e){t.bridge.registerTarget("background",e),t.shadowRoot.innerHTML=g,
t.editors=t.shadowRoot.querySelector("bx-editors"),t.menubar=t.shadowRoot.querySelector("bx-menubar"),
t.menubar.validateMenu=function(e){return t._validateMenu(e)},"windows"===l&&t.setAttribute("bordered",""),
t.menubar.addEventListener("dragover",function(e){return t._onMenubarDragOver(e)}),
t.menubar.addEventListener("drop",function(e){return t._onMenubarDrop(e)}),t.menubar.addEventListener("menuitemclick",function(e){
return t._onMenuItemClick(e)}),t.editors.addEventListener("sessionrestore",function(){
return t._onSessionRestore()}),t.shadowRoot.addEventListener("mousedown",function(e){
return t._onMouseDown(e)}),t.bridge.addMessageHandler("setChangeCounter",function(e,n){
t.editors.setEditorChangeCounter(n,e)}),t.bridge.addMessageHandler("getVersion",function(t,e,n){
n(o)}),t.bridge.addMessageHandler("openFiles",function(e,n,r){t._openFiles(e)}),t.bridge.addMessageHandler("openBrowserTab",function(t,e,n){
chrome.browser.openTab({url:t})}),t.bridge.addMessageHandler("showConfirmDialog",function(e,n,r){
t.showConfirmDialog(e,r)}),t.bridge.addMessageHandler("getMenubarCommandDescriptors",function(e,n,r){
t._getMenubarCommandDescriptors(function(t){return r(t)})}),setTimeout(function(){
t.bridge.postMessage("background","ready")},1e3)})},showConfirmDialog:function(t,e){
var n=this,r=this.shadowRoot.querySelector("#confirm-dialog"),i=function(){n.menubar.disabled=!0,
n.editors._tabs.disabled=!0;var i;r.showModal(t),r.addEventListener("close",i=function(){
r.removeEventListener("close",i),n.menubar.disabled=!1,n.editors._webViews.focusCurrentWebView(),
n.editors._tabs.disabled=!1,e(r.returnValue)})};if(r.open===!1)i();else{var o;r.addEventListener("close",o=function(){
r.open===!1&&(r.removeEventListener("close",o),i())})}},_onMouseDown:function(t){
"bx-editors"!==t.target.localName&&t.preventDefault()},_onMenuItemClick:function(t){
var e=this,n=t.detail;if(n.id.startsWith("open-recent-")){var r=n.id.substring(12);
chrome.fileSystem.restoreEntry(r,function(t){e.editors.openEditorWithArtworkFromFileEntry(t),
e.editors.registerRecentFile(t)})}else{var i=this.commands[n.commandID];i?i.exec():this.bridge.postMessage(this.editors.currentEditorID,"execCommand",n.commandID);
}},_onMenubarDragOver:function(t){t.preventDefault(),t.dataTransfer.effectAllowed="copy",
t.dataTransfer.dropEffect="copy"},_onMenubarDrop:function(t){var n=this;t.preventDefault(),
e(t.dataTransfer.items,function(t,e,r){var i=t.webkitGetAsEntry();(i.name.endsWith(".svg")||i.name.endsWith(".svgz"))&&(chrome.fileSystem.getWritableEntry(i,function(t){
n.editors.openEditorWithArtworkFromFileEntry(t),n.editors.registerRecentFile(t)}),
e())})},_onSessionRestore:function(){this.menubar.disabled=!1},_openFiles:function(t){
var n=this;e(t,function(t,e,r){i(t,function(t){t?n.editors.openEditorWithArtworkFromFileEntry(t,function(){
n.editors.registerRecentFile(t),e()}):e()})})},_validateMenu:function(t){var e=this;
"open-recent-menu"===t.id&&this._recreateOpenRecentMenuItems(t);var n=$traceurRuntime.spread(t.children).filter(function(t){
return t.commandID});n.forEach(function(t){var n=t.commandID;e._getCommandDescriptor(n,function(r,i){
r&&(t.disabled=!r.enabled,t.shortcut=c(e.userShortcuts[n]||r.shortcut),t.label=r.label,
r.state===!0?t.state="toggled":r.state===!1?t.state=null:t.state="selected")})})},
_recreateOpenRecentMenuItems:function(t){if($traceurRuntime.spread(t.children).forEach(function(t){
t.id&&t.id.startsWith("open-recent-")&&t.remove()}),this.editors.recentFiles.length>0){
var e=!0,n=!1,r=void 0;try{for(var i=void 0,o=$traceurRuntime.spread(this.editors.recentFiles).reverse()[Symbol.iterator]();!(e=(i=o.next()).done);e=!0){
var s=i.value,u=a("bx-menuitem");u.id="open-recent-"+s.retainedFileEntry,u.label=s.filePath,
u.state=null,u.enabled=!0,t.prepend(u)}}catch(c){n=!0,r=c}finally{try{e||null==o["return"]||o["return"]();
}finally{if(n)throw r}}}},_getCommandDescriptor:function(t,e){var n=this;if(this.commands[t]){
var r=this.commands[t],i={label:r.label,shortcut:r.shortcut?r.shortcut:[],state:r.state?r.state():!1,
enabled:r.enabled?r.enabled():!0};e(i,"backend")}else this.editors.currentEditorID?this.bridge.postMessage(this.editors.currentEditorID,"getCommand",t,function(t){
e(t,n.editors.currentEditorID)}):e(null,null)},_getMenubarCommandDescriptors:function(t){
var e=this,n=document.createTreeWalker(this.menubar,NodeFilter.SHOW_ELEMENT),r=[],i=function(){
var o=void 0!==arguments[0]?arguments[0]:n.nextNode();null===o?t(r):o.commandID?e._getCommandDescriptor(o.commandID,function(t){
for(var n=o.commandID,s=t.shortcut,a=t.label,u=o.parentElement;u&&u!==e._menubar;u=u.parentElement)u.label&&(a=u.label+" ‣ "+a);
r.push({id:n,shortcut:s,label:a}),i()}):i()};i()},_quitApp:function(){this._aboutAppWindow&&this._aboutAppWindow.close(),
this._preferencesAppWindow&&this._preferencesAppWindow.close(),chrome.app.window.current().close();
},_openNewEditorWithArtworkFromSelectedElements:function(){var t=this,e=this.editors.currentEditorID;
this.bridge.postMessage(e,"getArtworkFromSelectedElements","html",function(e){t.editors.openEditor(e);
})},_maximizeCurrentWindow:function(){var t=chrome.app.window.current();t.maximize();
},_canMaximizeCurrentWindow:function(){var t=chrome.app.window.current();return t.isMaximized()===!1&&t.isFullscreen()===!1;
},_restoreCurrentWindow:function(){var t=chrome.app.window.current();t.restore()},
_canRestoreCurrentWindow:function(){var t=chrome.app.window.current();return t.isMaximized()||t.isFullscreen();
},_toggleAlwaysOnTopWindowState:function(){var t=chrome.app.window.current();t.setAlwaysOnTop(!t.isAlwaysOnTop());
},_openPreferencesAppWindow:function(){var t=this;this._preferencesAppWindow?this._preferencesAppWindow.focus():chrome.app.window.create(d,m,function(e){
var n,r;t._preferencesAppWindow=e,e.contentWindow.name="preferences",t.bridge.registerTarget("preferences",e.contentWindow),
e.contentWindow.addEventListener("load",r=function(){e.contentWindow.removeEventListener("load",r),
t.bridge.postMessage("preferences","init"),h(150,function(){return e.show()})}),e.onClosed.addListener(n=function(){
e.onClosed.removeListener(n),t._preferencesAppWindow=null,t.bridge.unregisterTarget("preferences");
})})},_openAboutAppWindow:function(){var t=this;this._aboutAppWindow?this._aboutAppWindow.focus():chrome.app.window.create(f,b,function(e){
var n,r;t._aboutAppWindow=e,e.contentWindow.name="about",t.bridge.registerTarget("about",e.contentWindow),
e.contentWindow.addEventListener("load",r=function(){e.contentWindow.removeEventListener("load",r),
t.bridge.postMessage("about","init"),h(150,function(){return e.show()})}),e.onClosed.addListener(n=function(){
e.onClosed.removeListener(n),t._aboutAppWindow=null,t.bridge.unregisterTarget("about");
})})},_openChromeWebStoreReviewsPage:function(){window.open("https://chrome.google.com/webstore/detail/boxy-svg/gaoogdonmngmdlbinmiclicjpbjhgomg/reviews");
},_openChromeWebStoreSupportPage:function(){window.open("https://chrome.google.com/webstore/detail/boxy-svg/gaoogdonmngmdlbinmiclicjpbjhgomg/support");
}},{},t)}(t),v=u("bx-main",p);return{get default(){return v}}}),System.registerModule("elements/bx-menu",[],function(){
"use strict";System.get("elements/bx-menuitem"),System.get("elements/bx-icon");var t=System.get("utils/dom").registerElement,e=System.get("utils/time").createTimeout,n=75,r=300,i='\n  <style>\n    @import url("stylesheets/scrollbars.css");\n    @import url("stylesheets/bx-menu.css");\n  </style>\n\n  <main>\n    <content></content>\n  </main>\n',o=function(t){
function o(){$traceurRuntime.superConstructor(o).apply(this,arguments)}return $traceurRuntime.createClass(o,{
createdCallback:function(){var t=this;this.createShadowRoot(),this.shadowRoot.innerHTML=i,
this._main=this.shadowRoot.querySelector("main"),this._mouseLocs=[],this._mouseInsideMenuBlock=!1,
this._main.addEventListener("mousemove",function(e){return t._onMouseMove(e)}),this.addEventListener("mouseover",function(e){
return t._onMouseOver(e)}),this.addEventListener("mouseout",function(e){return t._onMouseOut(e);
}),this.addEventListener("click",function(e){return t._onClick(e)})},attachedCallback:function(){
this.dispatchEvent(new CustomEvent("menuattach",{bubbles:!0,detail:this}))},detachedCallback:function(){
this.dispatchEvent(new CustomEvent("menudetach",{bubbles:!0,detail:this}))},attributeChangedCallback:function(t,e,n){
e!==n&&"label"===t&&this._onLabelChange()},get label(){return this.hasAttribute("label")?this.getAttribute("label"):"";
},set label(t){this.setAttribute("label",t)},get opened(){return this.hasAttribute("opened");
},set opened(t){t?this.setAttribute("opened",""):this.removeAttribute("opened")},
openBelowElement:function(t){var e=t.getBoundingClientRect();this.style.height=null,
this.style.top=e.top+e.height+"px",this.style.left=e.left+"px",this.opened=!0;var n=this.getBoundingClientRect();
n.left+n.width>window.innerWidth&&(this.style.left=e.left+e.width-n.width+"px"),n.top+n.height+10>window.innerHeight&&(this.style.height=window.innerHeight-(e.top+e.height)-10+"px"),
this.dispatchEvent(new CustomEvent("menuopen",{bubbles:!0,detail:this}))},openNextToElement:function(t){
var e=t.getBoundingClientRect();this.style.top=e.top+"px",this.style.left=e.left+e.width+"px",
this.opened=!0;var n=this.getBoundingClientRect();if(n.left+n.width>window.innerWidth&&(this.style.left=e.left-n.width+"px",
n=this.getBoundingClientRect()),n.top+n.height>window.innerHeight){var r=window.innerHeight-(n.top+n.height)-5;
this.style.top=e.top+r+"px",n=this.getBoundingClientRect(),n.top<0&&(this.style.top="5px",
this.style.height=window.innerHeight-10+"px")}this.dispatchEvent(new CustomEvent("menuopen",{
bubbles:!0,detail:this}))},openAtPosition:function(t,e){this.style.left=t+"px",this.style.top=e+"px",
this.opened=!0;var n=this.getBoundingClientRect();if(n.left+n.width>window.innerWidth&&(this.style.left=t-n.width+"px",
n=this.getBoundingClientRect()),n.top+n.height>window.innerHeight){var r=window.innerHeight-(n.top+n.height)-5;
this.style.top=e+r+"px",n=this.getBoundingClientRect(),n.top<0&&(this.style.top="5px",
this.style.height=window.innerHeight-10+"px")}this.dispatchEvent(new CustomEvent("menuopen",{
bubbles:!0,detail:this}))},close:function(){this._highlightedMenuItem&&(this._highlightedMenuItem.highlighted=!1,
this._highlightedMenuItem=null),this.style.left=null,this.style.top=null,this.opened=!1,
this._openedSubmenu&&(this._openedSubmenu.close(),this._openedSubmenu=null),this.dispatchEvent(new CustomEvent("menuclose",{
bubbles:!0,detail:this}))},_onLabelChange:function(){this.dispatchEvent(new CustomEvent("menulabelchange",{
bubbles:!0,detail:this}))},_onMouseMove:function(t){this._mouseLocs.push({x:t.pageX,
y:t.pageY}),this._mouseLocs.length>3&&this._mouseLocs.shift()},_onMouseOver:function(t){
t.target===this||t.target.parentElement===this?(this._mouseInsideMenuBlock===!1&&(this._mouseInsideMenuBlock=!0),
"bx-menuitem"===t.target.localName&&this._onMenuItemMouseEnter(t.target)):this._mouseInsideMenuBlock===!0&&(this._mouseInsideMenuBlock=!1,
this._onMenuBlockMouseLeave())},_onMouseOut:function(t){(!t.toElement||t.toElement!==this&&t.toElement.parentElement!==this)&&this._mouseInsideMenuBlock===!0&&(this._mouseInsideMenuBlock=!1,
this._onMenuBlockMouseLeave())},_onClick:function(t){var e=this;if("bx-menuitem"===t.target.localName&&t.target.parentElement===this&&t.target.disabled===!1&&0===t.target.childElementCount&&0===t.button){
var n=t.target;n.blink(function(){e.dispatchEvent(new CustomEvent("menuitemclick",{
bubbles:!0,detail:n}))})}},_onMenuItemMouseEnter:function(t){this.timeoutID&&clearTimeout(this.timeoutID),
this._highlightMenuItemWithDelay(t)},_onMenuBlockMouseLeave:function(){if(this.timeoutID&&clearTimeout(this.timeoutID),
this._highlightedMenuItem){var t=this._highlightedMenuItem.children[0];t&&t.opened!==!1||(this._highlightedMenuItem.highlighted=!1,
this._highlightedMenuItem=null)}},_highlightMenuItem:function(t){var n=this;if(this._highlightedMenuItem&&(this._highlightedMenuItem.highlighted=!1),
this._openedSubmenu&&(this._openedSubmenu.close(),this._openedSubmenu=null),t.disabled===!1&&(this._highlightedMenuItem=t,
t.highlighted=!0,t.children[0]&&"bx-menu"===t.children[0].localName)){var r=t.children[0];
e(100,function(){n._highlightedMenuItem===t&&(n._openedSubmenu=r,r.openNextToElement(r.parentElement));
})}},_highlightMenuItemWithDelay:function(t){var n=this,r=this._getHighlightDelay();
r?this.timeoutID=e(r,function(){n._highlightMenuItemWithDelay(t)}):this._highlightMenuItem(t);
},_getHighlightDelay:function(){var t="right",e=this._mouseLocs[this._mouseLocs.length-1],i=this._mouseLocs[0];
if(!this._openedSubmenu)return 0;if(!e)return 0;i||(i=e);var o=this.getBoundingClientRect(),s={
x:o.left,y:o.top-n},a={x:o.left+o.width,y:s.y},u={x:o.left,y:o.top+o.height+n},c={
x:o.left+o.width,y:u.y};if(i.x<o.left||i.x>c.x||i.y<o.top||i.y>c.y)return 0;if(this._lastDelayLoc&&e.x==this._lastDelayLoc.x&&e.y==this._lastDelayLoc.y)return 0;
var l=function(t,e){return(e.y-t.y)/(e.x-t.x)},h=a,d=c;"left"==t?(h=u,d=s):"below"==t?(h=c,
d=u):"above"==t&&(h=s,d=a);var f=l(e,h),m=l(e,d),b=l(i,h),g=l(i,d);return b>f&&m>g?(this._lastDelayLoc=e,
r):(this._lastDelayLoc=null,0)}},{},t)}(HTMLElement),s=t("bx-menu",o);return{get default(){
return s}}}),System.registerModule("elements/bx-menubar",[],function(){"use strict";
var t=System.get("utils/dom"),e=t.createElement,n=t.registerElement,r=System.get("utils/time").createTimeout;
System.get("elements/bx-menu");var i=!1,o='\n  <style>@import url("stylesheets/bx-menubar.css");</style>\n  <div id="overlay"></div>\n  <ul id="strip"></ul>\n  <content></content>\n',s=function(t){
function n(){$traceurRuntime.superConstructor(n).apply(this,arguments)}return $traceurRuntime.createClass(n,{
createdCallback:function(){var t=this;this._highlightedStripItem=null,this.createShadowRoot(),
this.shadowRoot.innerHTML=o,this._strip=this.shadowRoot.querySelector("#strip"),this._content=this.shadowRoot.querySelector("content"),
this._overlay=this.shadowRoot.querySelector("#overlay"),this.addEventListener("menuattach",function(e){
return t._onMenuAttach(e)}),this.addEventListener("menudetach",function(e){return t._onMenuDetach(e);
}),this.addEventListener("menuopen",function(e){return t._onMenuOpen(e)}),this.addEventListener("menuitemclick",function(e){
return t._onMenuItemClick(e)}),this.addEventListener("menulabelchange",function(e){
return t._onMenuLabelChange(e)}),this._strip.addEventListener("mousedown",function(e){
return t._onStripMouseDown(e)}),this._strip.addEventListener("mouseover",function(e){
return t._onStripMouseOver(e)}),this._overlay.addEventListener("mousedown",function(e){
return t._onOverlayMouseDown(e)}),i&&this.setAttribute("debug","")},attachedCallback:function(){
var t=this;window.addEventListener("blur",this._windowBlurListener=function(){return t._onWindowBlur(event);
}),window.addEventListener("resize",this._windowResizeListener=function(){return t._onWindowResize(event);
}),app.bridge.addMessageHandler("menubar.blinkItem",this._blinkHandler=function(e){
return t.blinkItem(e)})},detachedCallback:function(){window.removeEventListener("blur",this._windowBlurListener),
window.removeEventListener("resize",this._windowResizeListener),app.bridge.removeMessageHandler("menubar.blinkItem",this._blinkHandler);
},validateMenu:function(t){},blinkItem:function(t){for(var e=this.querySelector('[commandid="'+t+'"]'),n=(e.parentElement,
null),i=e;i!==this;i=i.parentElement)"bx-menu"===i.localName&&(n=i);var o=!0,s=!1,a=void 0;
try{for(var u=function(){var t=c.value;t.menu===n&&(t.setAttribute("highlighted",""),
r(100,function(){t.removeAttribute("highlighted")}))},c=void 0,l=this._strip.children[Symbol.iterator]();!(o=(c=l.next()).done);o=!0)u();
}catch(h){s=!0,a=h}finally{try{o||null==l["return"]||l["return"]()}finally{if(s)throw a;
}}},_onMenuAttach:function(t){t.detail.parentElement===this&&this._updateStrip()},
_onMenuDetach:function(t){t.detail.parentElement===this&&this._updateStrip()},_onMenuOpen:function(t){
this.validateMenu(t.detail)},_onMenuItemClick:function(t){this._collapse()},_onMenuLabelChange:function(t){
t.detail.parentElement===this&&this._updateStrip()},_onStripMouseDown:function(t){
this._highlightedStripItem&&t.target===this._strip&&this._collapse(),0===t.button&&(t.target===this._strip?this._onStripEmptySpaceDragStart(t):this._onStripItemMouseDown(t.target));
},_onStripEmptySpaceDragStart:function(t){var e,n,r=chrome.app.window.current().getBounds();
window.addEventListener("mousemove",e=function(e){var n=e.screenX-t.screenX,i=e.screenY-t.screenY;
chrome.app.window.current().setBounds({left:r.left+n,top:r.top+i,width:r.width,height:r.height
})}),window.addEventListener("mouseup",n=function(t){window.removeEventListener("mousemove",e),
window.removeEventListener("mouseup",n)})},_onStripMouseOver:function(t){0===t.button&&t.target!==this._strip&&this._onStripItemMouseEnter(t.target);
},_onStripItemMouseDown:function(t){this._highlightedStripItem===t?this._collapse():this._expand(t);
},_onStripItemMouseEnter:function(t){this._highlightedStripItem&&this._highlightedStripItem!==t&&this._expand(t);
},_onOverlayMouseDown:function(t){this._collapse(),t.preventDefault(),t.stopPropagation();
},_onWindowBlur:function(t){i||this._collapse()},_onWindowResize:function(t){i||this._collapse();
},_expand:function(t){this._highlightedStripItem&&(this._highlightedStripItem.removeAttribute("highlighted"),
this._highlightedStripItem.menu.close()),this._overlay.style.display="block",t.menu.openBelowElement(t),
t.setAttribute("highlighted",""),this._highlightedStripItem=t},_collapse:function(){
this._highlightedStripItem&&(this._highlightedStripItem.removeAttribute("highlighted"),
this._highlightedStripItem.menu.close(),this._highlightedStripItem=null),this._overlay.style.display="none";
},_updateStrip:function(){if(this.childElementCount!==this._strip.childElementCount){
this._strip.innerHTML="";for(var t=0;t<this.childElementCount;t+=1)this._strip.append(e("li"));
}for(var n=0;n<this.childElementCount;n+=1)this._strip.children[n].textContent=this.children[n].label,
this._strip.children[n].menu=this.children[n]}},{},t)}(HTMLElement),a=n("bx-menubar",s);
return{get default(){return a}}}),System.registerModule("elements/bx-menuitem",[],function(){
"use strict";var t=System.get("utils/dom").registerElement,e=System.get("utils/time").createTimeout;
System.get("elements/bx-icon");var n='\n<style>@import url("stylesheets/bx-menuitem.css");</style>\n\n<main>\n  <bx-icon id="state"></bx-icon>\n  <div id="label"></div>\n  <div id="shortcut"></div>\n  <bx-icon id="arrow" name="arrow-right"></bx-icon>\n</main>\n\n<content select="bx-menu"></content>\n',r=function(t){
function r(){$traceurRuntime.superConstructor(r).apply(this,arguments)}return $traceurRuntime.createClass(r,{
createdCallback:function(){this.createShadowRoot(),this.shadowRoot.innerHTML=n,this._labelElement=this.shadowRoot.querySelector("#label"),
this._stateIcon=this.shadowRoot.querySelector("bx-icon#state"),this._shortcutElement=this.shadowRoot.querySelector("#shortcut"),
this._onLabelChange(),this._onStateChange(),this._onShortcutChange()},attributeChangedCallback:function(t,e,n){
e!==n&&("label"===t?this._onLabelChange():"state"===t?this._onStateChange():"shortcut"===t&&this._onShortcutChange());
},get label(){return this.hasAttribute("label")?this.getAttribute("label"):""},set label(t){
this.setAttribute("label",t)},get commandID(){return this.hasAttribute("commandid")?this.getAttribute("commandid"):"";
},set commandID(t){this.setAttribute("commandid",t)},get state(){return this.hasAttribute("state")?this.getAttribute("state"):"";
},set state(t){this.setAttribute("state",t)},get shortcut(){return this.hasAttribute("shortcut")?this.getAttribute("shortcut"):"";
},set shortcut(t){this.setAttribute("shortcut",t)},get highlighted(){return this.hasAttribute("highlighted");
},set highlighted(t){t?this.setAttribute("highlighted",""):this.removeAttribute("highlighted");
},blink:function(t){var n=this;this.highlighted=!1,e(100,function(){n.highlighted=!0,
e(100,function(){return t()})})},_onLabelChange:function(){this._labelElement.textContent=this.label;
},_onStateChange:function(){"selected"===this.state?this._stateIcon.name="circle":"toggled"===this.state?this._stateIcon.name="check-mark":this._stateIcon.name=null;
},_onShortcutChange:function(){this._shortcutElement.textContent=this.shortcut}},{},t);
}(HTMLElement),i=t("bx-menuitem",r);return{get default(){return i}}}),System.registerModule("elements/bx-tab",[],function(){
"use strict";System.get("elements/bx-button");var t=System.get("utils/dom").registerElement,e='\n  <style>@import url("stylesheets/bx-tab.css");</style>\n\n  <main>\n    <div id="label"></div>\n    <bx-button id="close" icon="close" iconsize="10" skin="bx-tabs"></bx-button>\n  </main>\n',n=function(t){
function n(){$traceurRuntime.superConstructor(n).apply(this,arguments)}return $traceurRuntime.createClass(n,{
createdCallback:function(){var t=this;this.createShadowRoot(),this.shadowRoot.innerHTML=e,
this._labelElement=this.shadowRoot.querySelector("#label"),this._closeButton=this.shadowRoot.querySelector("#close"),
this.shadowRoot.addEventListener("mousedown",function(e){return t._onMouseDown(e);
}),this._closeButton.addEventListener("click",function(e){return t._onCloseButtonClick(e);
}),this._onLabelChange(),this._onIconChange(),this._onDisabledChange()},attachedCallback:function(){
this.dispatchEvent(new CustomEvent("tabopen",{bubbles:!0,detail:this}))},detachedCallback:function(){
this.dispatchEvent(new CustomEvent("tabclose",{bubbles:!0,detail:this}))},attributeChangedCallback:function(t,e,n){
e!==n&&("label"===t?this._onLabelChange():"icon"===t?this._onIconChange():"disabled"===t&&this._onDisabledChange());
},get label(){return this.hasAttribute("label")?this.getAttribute("label"):""},set label(t){
this.setAttribute("label",t)},get icon(){return this.hasAttribute("icon")?this.getAttribute("icon"):"close";
},set icon(t){this.setAttribute("icon",t)},get highlighted(){return this.hasAttribute("highlighted");
},set highlighted(t){t?this.setAttribute("highlighted",""):this.removeAttribute("highlighted");
},_onMouseDown:function(t){0===t.button&&t.target!==this._closeButton&&this.disabled===!1&&this.highlighted===!1&&this.dispatchEvent(new CustomEvent("tabdown",{
bubbles:!0,detail:this}))},_onCloseButtonClick:function(t){0===t.button&&this.dispatchEvent(new CustomEvent("tabcloseintent",{
bubbles:!0,detail:this}))},_onLabelChange:function(){this._labelElement.textContent=this.label;
},_onIconChange:function(){this._closeButton.icon=this.icon},_onDisabledChange:function(){
this._closeButton.disabled=this.disabled}},{},t)}(HTMLElement),r=t("bx-tab",n);return{
get default(){return r}}}),System.registerModule("elements/bx-tabs",[],function(){
"use strict";System.get("elements/bx-button"),System.get("elements/bx-contextmenu"),
System.get("elements/bx-menu"),System.get("elements/bx-menuitem"),System.get("elements/bx-tab");
var t=System.get("utils/dom"),e=t.createElement,n=t.registerElement,r=(System.get("utils/event").isMouseMoveIntentional,
System.get("utils/time").createTimeout),i=Math.abs,o=Number,s=o.parseInt,a=(o.parseFloat,
50),u='\n  <style>@import url("stylesheets/bx-tabs.css");</style>\n\n  <main>\n    <content></content>\n    <bx-button id="new-tab-button" skin="bx-tabs" iconsize="15" icon="plus"></bx-button>\n    <bx-contextmenu id="context-menu">\n      <bx-menu>\n        <bx-menuitem id="open-tab-menu-item" label="Open tab"></bx-menuitem>\n        <hr/>\n        <bx-menuitem id="close-tab-menu-item" label="Close Tab"></bx-menuitem>\n        <bx-menuitem id="close-other-tabs-menu-item" label="Close Other Tabs"></bx-menuitem>\n        <bx-menuitem id="close-tabs-to-right-menu-item" label="Close Tabs to the Right"></bx-menuitem>\n      </bx-menu>\n    </bx-contextmenu>\n  </main>\n',c=function(t){
function n(){$traceurRuntime.superConstructor(n).apply(this,arguments)}return $traceurRuntime.createClass(n,{
createdCallback:function(){var t=this;this.createShadowRoot(),this.shadowRoot.innerHTML=u,
this._main=this.shadowRoot.querySelector("main"),this._newTabButton=this.shadowRoot.querySelector("#new-tab-button"),
this._contextMenu=this.shadowRoot.querySelector("#context-menu"),this._openTabMenuItem=this.shadowRoot.querySelector("#open-tab-menu-item"),
this._closeTabMenuItem=this.shadowRoot.querySelector("#close-tab-menu-item"),this._closeOtherTabsMenuItem=this.shadowRoot.querySelector("#close-other-tabs-menu-item"),
this._closeTabsToRightMenuItem=this.shadowRoot.querySelector("#close-tabs-to-right-menu-item"),
this.addEventListener("tabopen",function(t){return t.stopPropagation()}),this.addEventListener("tabclose",function(t){
return t.stopPropagation()}),this.addEventListener("tabcloseintent",function(t){return t.stopPropagation();
}),this.addEventListener("tabdown",function(e){return t._onTabDown(e)}),this.addEventListener("menuitemclick",function(e){
return t._onContextMenuItemClick(e)}),this.shadowRoot.addEventListener("contextmenu",function(e){
return t._onShadowRootContextMenu(e)}),this.shadowRoot.addEventListener("mousedown",function(e){
return t._onMouseDown(e)}),this._newTabButton.addEventListener("click",function(e){
return t._onNewTabButtonClick(e)}),this._contextMenu.validateMenu=function(e,n){return t._validateContextMenu(e,n);
}},openTab:function(t,n){var i=e("bx-tab");return i.id=t,i.label=n,i.style.maxWidth="0px",
i.style.order=this.childElementCount,this.append(i),r(50,function(){return i.style.maxWidth=null;
}),i},closeTab:function(t){var e=this,n=this.querySelector("#"+t),i=n.getBoundingClientRect().width,o=this._getSlotForTab(n);
if(n.isClosing=!0,o<this.childElementCount-1){var s=!0,a=!1,u=void 0;try{for(var c=void 0,l=this.children[Symbol.iterator]();!(s=(c=l.next()).done);s=!0){
var h=c.value;h.isClosing||(h.style.transition="none",h.style.maxWidth=i+"px")}}catch(d){
a=!0,u=d}finally{try{s||null==l["return"]||l["return"]()}finally{if(a)throw u}}}n.style.transition=null,
n.style.maxWidth="0px",this._waitingForTabToClose=!0,r(150,function(){if(n.remove(),
e._waitingForTabToClose=!1,delete n.isClosing,!e._waitingForMouseMoveAfterClosingTab){
e._waitingForMouseMoveAfterClosingTab=!0;var t,r,i,o=null,s=null,a=function(){window.removeEventListener("mousemove",t),
window.removeEventListener("mouseout",r),window.removeEventListener("blur",i),e._waitingForMouseMoveAfterClosingTab=!1;
var n=!0,o=!1,s=void 0;try{for(var a=void 0,u=e.children[Symbol.iterator]();!(n=(a=u.next()).done);n=!0){
var c=a.value;c.style.transition=null,c.style.maxWidth=null}}catch(l){o=!0,s=l}finally{
try{n||null==u["return"]||u["return"]()}finally{if(o)throw s}}};window.addEventListener("mousemove",t=function(t){
return null===o&&null===s?(o=t.clientX,void(s=t.clientY)):void(t.clientX>=o-3&&t.clientX<=o+3&&t.clientY>=s-3&&t.clientY<=s+3||a());
}),window.addEventListener("mouseout",r=function(t){null===t.toElement&&a()}),window.addEventListener("blur",i=function(){
a()})}})},highlightTab:function(t){var e=this.querySelector("bx-tab#"+t),n=this.querySelector("bx-tab[highlighted]");
null===t?n&&(n.highlighted=!1):e&&e!==n&&(n&&(n.highlighted=!1),e.highlighted=!0);
},moveHighlightedTabLeft:function(){var t=this.querySelector("bx-tab[highlighted]"),e=this._getSlotForTab(t),n=!0,r=!1,i=void 0;
try{for(var o=void 0,a=this.children[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){
var u=o.value;u.style.order=this._getSlotForTab(u)}}catch(c){r=!0,i=c}finally{try{
n||null==a["return"]||a["return"]()}finally{if(r)throw i}}if(0===s(t.style.order)){
var l=!0,h=!1,d=void 0;try{for(var f=void 0,m=this.children[Symbol.iterator]();!(l=(f=m.next()).done);l=!0){
var b=f.value;b===t?b.style.order=this.childElementCount-1:b.style.order=s(b.style.order)-1;
}}catch(g){h=!0,d=g}finally{try{l||null==m["return"]||m["return"]()}finally{if(h)throw d;
}}}else{var p=this._getTabForSlot(e-1);p.style.order=s(p.style.order)+1,t.style.order=s(t.style.order)-1;
}},moveHighlightedTabRight:function(){var t=this.querySelector("bx-tab[highlighted]"),e=this._getSlotForTab(t),n=!0,r=!1,i=void 0;
try{for(var o=void 0,a=this.children[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){
var u=o.value;u.style.order=this._getSlotForTab(u)}}catch(c){r=!0,i=c}finally{try{
n||null==a["return"]||a["return"]()}finally{if(r)throw i}}if(s(t.style.order)===this.childElementCount-1){
var l=!0,h=!1,d=void 0;try{for(var f=void 0,m=this.children[Symbol.iterator]();!(l=(f=m.next()).done);l=!0){
var b=f.value;b===t?b.style.order=0:b.style.order=s(b.style.order)+1}}catch(g){h=!0,
d=g}finally{try{l||null==m["return"]||m["return"]()}finally{if(h)throw d}}}else{var p=this._getTabForSlot(e+1);
p.style.order=s(p.style.order)-1,t.style.order=s(t.style.order)+1}},_onMouseDown:function(t){
0===t.button&&("bx-tab"===t.target.localName?this._onTabMouseDown(t):"main"===t.target.localName&&this._onEmptySpaceDragStart(t));
},_onEmptySpaceDragStart:function(t){var e,n,r=chrome.app.window.current().getBounds();
window.addEventListener("mousemove",e=function(e){var n=e.screenX-t.screenX,i=e.screenY-t.screenY;
chrome.app.window.current().setBounds({left:r.left+n,top:r.top+i,width:r.width,height:r.height
})}),window.addEventListener("mouseup",n=function(t){window.removeEventListener("mousemove",e),
window.removeEventListener("mouseup",n)})},_onTabDown:function(t){this._waitingForTabToClose?t.stopImmediatePropagation():t.stopPropagation();
},_onTabMouseDown:function(t){var e,n,r=this,o=t.target;document.addEventListener("mousemove",e=function(s){
i(s.clientX-t.clientX)>1&&(document.removeEventListener("mousemove",e),document.removeEventListener("mouseup",n),
r._onTabDragStart(s,o))}),document.addEventListener("mouseup",n=function(t){document.removeEventListener("mousemove",e),
document.removeEventListener("mouseup",n)})},_onTabDragStart:function(t,e){var n=this,i=e.getBoundingClientRect().width,o=this.getBoundingClientRect().width;
e.style.zIndex=999,this._newTabButton.style.opacity="0";var s=!0,a=!1,u=void 0;try{
for(var c=void 0,l=this.children[Symbol.iterator]();!(s=(c=l.next()).done);s=!0){
var h=c.value;h.slot=this._getSlotForTab(h),h.flexOffset=h.getBoundingClientRect().left-1,
h!==e&&(h.style.transition="transform 0.15s ease-out")}}catch(d){a=!0,u=d}finally{
try{s||null==l["return"]||l["return"]()}finally{if(a)throw u}}var f=function(t,r){
if(r>t+1)for(var o=t;r>o;o+=1)f(o,o+1);else if(t-1>r)for(var s=t;s>r;s-=1)f(s,s-1);else{
var a=!0,u=!1,c=void 0;try{for(var l=void 0,h=n.children[Symbol.iterator]();!(a=(l=h.next()).done);a=!0){
var d=l.value;if(d!==e){d.slot===r&&(d.slot=t);for(var m=-d.flexOffset,b=0;b<d.slot;b+=1)m+=i;
0===m?d.style.transform=null:d.style.transform="translate("+m+"px)"}}}catch(g){u=!0,
c=g}finally{try{a||null==h["return"]||h["return"]()}finally{if(u)throw c}}}},m=function(r){
var s=r.clientX-t.clientX;s+e.flexOffset<=0?s=-e.flexOffset:s+e.flexOffset+i>o&&(s=o-e.flexOffset-i),
e.style.transform="translate("+s+"px)";var a=n._getSlotForTab(e);if(a!==e.slot){var u=e.slot;
e.slot=a,f(u,e.slot)}},b=function(t){document.removeEventListener("mousemove",m),
document.removeEventListener("mouseup",b);for(var o=-e.flexOffset,s=0;s<e.slot;s+=1)o+=i;
e.style.transition="transform 0.15s ease-out",e.style.transform="translate("+o+"px)",
n.dispatchEvent(new CustomEvent("tabslotchange",{detail:{tab:e,slot:e.slot}})),r(150,function(){
e.style.zIndex=null,n._newTabButton.style.opacity=null;var t=!0,r=!1,i=void 0;try{
for(var o=void 0,s=n.children[Symbol.iterator]();!(t=(o=s.next()).done);t=!0){var a=o.value;
a.style.transition=null,a.style.transform=null,a.style.order=a.slot,delete a.slot,
delete e.flexOffset}}catch(u){r=!0,i=u}finally{try{t||null==s["return"]||s["return"]();
}finally{if(r)throw i}}})};document.addEventListener("mouseup",b),document.addEventListener("mousemove",m);
},_onNewTabButtonClick:function(t){0===t.button&&this.dispatchEvent(new CustomEvent("tabopenintent"));
},_onShadowRootContextMenu:function(t){t.preventDefault(),this._contextMenuTarget=t.target,
this._contextMenu.open(t.clientX,t.clientY)},_onContextMenuItemClick:function(t){
var e=t.detail,n=this._contextMenuTarget;if(e===this._openTabMenuItem)this.dispatchEvent(new CustomEvent("tabopenintent"));else if(e===this._closeTabMenuItem)this.dispatchEvent(new CustomEvent("tabcloseintent",{
detail:n}));else if(e===this._closeOtherTabsMenuItem){var r=!0,i=!1,o=void 0;try{
for(var s=void 0,a=$traceurRuntime.spread(this.children)[Symbol.iterator]();!(r=(s=a.next()).done);r=!0){
var u=s.value;u!==n&&this.dispatchEvent(new CustomEvent("tabcloseintent",{detail:u
}))}}catch(c){i=!0,o=c}finally{try{r||null==a["return"]||a["return"]()}finally{if(i)throw o;
}}}else if(e===this._closeTabsToRightMenuItem){var l=this._getSlotForTab(n),h=!0,d=!1,f=void 0;
try{for(var m=void 0,b=$traceurRuntime.spread(this.children)[Symbol.iterator]();!(h=(m=b.next()).done);h=!0){
var g=m.value,p=this._getSlotForTab(g);p>l&&this.dispatchEvent(new CustomEvent("tabcloseintent",{
detail:g}))}}catch(v){d=!0,f=v}finally{try{h||null==b["return"]||b["return"]()}finally{
if(d)throw f}}}},_getSlotForTab:function(t){var e=t.getBoundingClientRect();if(e.left<e.width/2)return 0;
for(var n=e.width/2,r=1;a>r;r+=1){if(e.left>=n&&e.left<n+e.width)return r>this.childElementCount-1?this.childElementCount-1:r;
n+=e.width}},_getTabForSlot:function(t){var e=!0,n=!1,r=void 0;try{for(var i=void 0,o=this.children[Symbol.iterator]();!(e=(i=o.next()).done);e=!0){
var s=i.value,a=this._getSlotForTab(s);if(a===t)return s}}catch(u){n=!0,r=u}finally{
try{e||null==o["return"]||o["return"]()}finally{if(n)throw r}}return null},_validateContextMenu:function(t){
var e=this._contextMenuTarget;this._closeTabMenuItem.disabled="bx-tab"!==e.localName,
this._closeOtherTabsMenuItem.disabled="bx-tab"!==e.localName||this.childElementCount<=1,
this._closeTabsToRightMenuItem.disabled="bx-tab"!==e.localName||e===this.lastElementChild;
}},{},t)}(HTMLElement),l=n("bx-tabs",c);return{get default(){return l}}}),System.registerModule("elements/bx-webviews",[],function(){
"use strict";var t=System.get("utils/dom"),e=t.createElement,n=t.registerElement,r='\n  <style>@import url("stylesheets/bx-webviews.css");</style>\n\n  <main>\n    <content></content>\n  </main>\n',i=function(t){
function n(){$traceurRuntime.superConstructor(n).apply(this,arguments)}return $traceurRuntime.createClass(n,{
createdCallback:function(){var t=this;this.createShadowRoot(),this.shadowRoot.innerHTML=r,
this._currentWebView=null,window.addEventListener("focus",function(){return t.focusCurrentWebView();
})},openWebView:function(t,n,r){var i=void 0!==arguments[3]?arguments[3]:function(){},o=e("webview");
o.partition="persist:boxy",o.name=t,o.src=n,o.status="loading",o.style.opacity="0",
o.style.pointerEvents="none",this.append(o);var s;o.addEventListener("contentload",s=function(e){
o.removeEventListener("contentload",s),app.bridge.registerTarget(t,o.contentWindow),
o.setZoomMode("disabled"),o.status="loaded",app.bridge.postMessage(t,"init",r,function(){
i(o)})})},closeWebView:function(t){var e=!0,n=!1,r=void 0;try{for(var i=void 0,o=this.children[Symbol.iterator]();!(e=(i=o.next()).done);e=!0){
var s=i.value;s.name===t&&(this.removeChild(s),app.bridge.unregisterTarget(t))}}catch(a){
n=!0,r=a}finally{try{e||null==o["return"]||o["return"]()}finally{if(n)throw r}}},
showWebView:function(t){var e=!0,n=!1,r=void 0;try{for(var i=void 0,o=this.children[Symbol.iterator]();!(e=(i=o.next()).done);e=!0){
var s=i.value;s.name===t?(s.style.opacity="1",s.style.pointerEvents="auto",s.focus(),
this._currentWebView=s):(s.style.opacity="0",s.style.pointerEvents="none")}}catch(a){
n=!0,r=a}finally{try{e||null==o["return"]||o["return"]()}finally{if(n)throw r}}},
focusCurrentWebView:function(){null!==this._currentWebView&&this._currentWebView.focus();
},reloadWebView:function(t,e){var n=function(n){app.bridge.unregisterTarget(t),n.status="loading",
n.reload();var r;n.addEventListener("contentload",r=function(i){n.status="loaded",
app.bridge.registerTarget(t,n.contentWindow),n.removeEventListener("contentload",r),
e()})},r=!0,i=!1,o=void 0;try{for(var s=void 0,a=this.children[Symbol.iterator]();!(r=(s=a.next()).done);r=!0){
var u=s.value;u.name===t&&"loading"!==u.status&&n(u)}}catch(c){i=!0,o=c}finally{try{
r||null==a["return"]||a["return"]()}finally{if(i)throw o}}}},{},t)}(HTMLElement),o=n("bx-webviews",i);
return{get default(){return o}}}),System.registerModule("libs/pako",[],function(){
"use strict";!function(t){if("object"==("undefined"==typeof exports?"undefined":$traceurRuntime["typeof"](exports)))module.exports=t();else if("function"==typeof define&&define.amd)define(t);else{
var e;"undefined"!=typeof window?e=window:"undefined"!=typeof global?e=global:"undefined"!=typeof self&&(e=self),
e.pako=t()}}(function(){return function t(e,n,r){function i(s,a){if(!n[s]){if(!e[s]){
var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(o)return o(s,!0);
throw new Error("Cannot find module '"+s+"'")}var c=n[s]={exports:{}};e[s][0].call(c.exports,function(t){
var n=e[s][1][t];return i(n?n:t)},c,c.exports,t,e,n,r)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);
return i}({1:[function(t,e,n){var r=t("./lib/zlib/utils").assign,i=t("./lib/deflate"),o=t("./lib/inflate"),s=t("./lib/zlib/constants"),a={};
r(a,i,o,s),e.exports=a},{"./lib/deflate":2,"./lib/inflate":3,"./lib/zlib/constants":5,
"./lib/zlib/utils":13}],2:[function(t,e,n){function r(t,e){var n=new p(e);if(n.push(t,!0),
n.err)throw n.msg;return n.result}function i(t,e){return e=e||{},e.raw=!0,r(t,e)}
function o(t,e){return e=e||{},e.gzip=!0,r(t,e)}var s=t("./zlib/deflate.js"),a=t("./zlib/utils"),u=t("./zlib/messages"),c=t("./zlib/zstream"),l=0,h=4,d=0,f=1,m=-1,b=0,g=8,p=function(t){
this.options=a.assign({level:m,method:g,chunkSize:16384,windowBits:15,memLevel:8,
strategy:b},t||{});var e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),
this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c;var n=s.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);
if(n!==d)throw new Error(u[n])};p.prototype.push=function(t,e){var n,r,i=this.strm,o=this.options.chunkSize;
if(this.ended)return!1;r=e===~~e?e:e===!0?h:l,i.next_in=t,i.next_in_index=0,i.avail_in=i.next_in.length,
i.next_out=new a.Buf8(o);do{if(i.avail_out=this.options.chunkSize,i.next_out_index=0,
n=s.deflate(i,r),n!==f&&n!==d)return this.onEnd(n),this.ended=!0,!1;i.next_out_index&&(this.onData(a.shrinkBuf(i.next_out,i.next_out_index)),
(i.avail_in>0||0===i.avail_out)&&(i.next_out=new a.Buf8(this.options.chunkSize)));
}while(i.avail_in>0||0===i.avail_out);return r===h?(n=s.deflateEnd(this.strm),this.onEnd(n),
this.ended=!0,n===d):!0},p.prototype.onData=function(t){this.chunks.push(t)},p.prototype.onEnd=function(t){
t===d&&(this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg;
},n.Deflate=p,n.deflate=r,n.deflateRaw=i,n.gzip=o},{"./zlib/deflate.js":7,"./zlib/messages":11,
"./zlib/utils":13,"./zlib/zstream":14}],3:[function(t,e,n){function r(t,e){var n=new l(e);
if(n.push(t,!0),n.err)throw n.msg;return n.result}function i(t,e){return e=e||{},
e.raw=!0,r(t,e)}var o=t("./zlib/inflate.js"),s=t("./zlib/utils"),a=t("./zlib/constants"),u=t("./zlib/messages"),c=t("./zlib/zstream"),l=function(t){
this.options=s.assign({chunkSize:16384,windowBits:0},t||{});var e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,
0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),
e.windowBits>15&&e.windowBits<48&&0===(15&e.windowBits)&&(e.windowBits|=15),this.err=0,
this.msg="",this.ended=!1,this.chunks=[],this.strm=new c;var n=o.inflateInit2(this.strm,e.windowBits);
if(n!==a.Z_OK)throw new Error(u[n])};l.prototype.push=function(t,e){var n,r,i=this.strm,u=this.options.chunkSize;
if(this.ended)return!1;r=a.Z_NO_FLUSH,i.next_in=t,i.next_in_index=0,i.avail_in=i.next_in.length,
i.next_out=new s.Buf8(u);do{if(i.avail_out=this.options.chunkSize,i.next_out_index=0,
n=o.inflate(i,r),n!==a.Z_STREAM_END&&n!==a.Z_OK)return this.onEnd(n),this.ended=!0,
!1;i.next_out_index&&(this.onData(s.shrinkBuf(i.next_out,i.next_out_index)),(i.avail_in>0||0===i.avail_out)&&(i.next_out=new s.Buf8(this.options.chunkSize)));
}while(i.avail_in>0||0===i.avail_out);return r=e===~~e?e:e===!0?a.Z_FINISH:a.Z_NO_FLUSH,
r===a.Z_FINISH?(n=o.inflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===a.Z_OK):!0;
},l.prototype.onData=function(t){this.chunks.push(t)},l.prototype.onEnd=function(t){
t===a.Z_OK&&(this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=t,
this.msg=this.strm.msg},n.Inflate=l,n.inflate=r,n.inflateRaw=i},{"./zlib/constants":5,
"./zlib/inflate.js":9,"./zlib/messages":11,"./zlib/utils":13,"./zlib/zstream":14}],
4:[function(t,e,n){function r(t,e,n,r){for(var i=65535&t|0,o=t>>>16&65535|0,s=0;0!==n;){
s=n>2e3?2e3:n,n-=s;do i=i+e[r++]|0,o=o+i|0;while(--s);i%=65521,o%=65521}return i|o<<16|0;
}e.exports=r},{}],5:[function(t,e,n){e.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,
Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,
Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,
Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,
Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],
6:[function(t,e,n){function r(){for(var t,e=[],n=0;256>n;n++){t=n;for(var r=0;8>r;r++)t=1&t?3988292384^t>>>1:t>>>1;
e[n]=t}return e}function i(t,e,n,r){var i=o,s=r+n;t=-1^t;for(var a=r;s>a;a++)t=t>>>8^i[255&(t^e[a])];
return-1^t}var o=r();e.exports=i},{}],7:[function(t,e,n){function r(t,e){return t.msg=A[e],
e}function i(t){return(t<<1)-(t>4?9:0)}function o(t){for(var e=t.length;--e;)t[e]=0;
}function s(t){var e=t.state,n=e.pending;n>t.avail_out&&(n=t.avail_out),0!==n&&(C.arraySet(t.next_out,e.pending_buf,e.pending_out,n,t.next_out_index),
t.next_out_index+=n,e.pending_out+=n,t.total_out+=n,t.avail_out-=n,e.pending-=n,0===e.pending&&(e.pending_out=0));
}function a(t,e){O._tr_flush_block(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),
t.block_start=t.strstart,s(t.strm)}function u(t,e){t.pending_buf[t.pending++]=e}function c(t,e){
t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e}function l(t,e,n,r){
var i=t.avail_in;return i>r&&(i=r),0===i?0:(t.avail_in-=i,C.arraySet(e,t.next_in,t.next_in_index,i,n),
1===t.state.wrap?t.adler=M(t.adler,e,i,n):2===t.state.wrap&&(t.adler=R(t.adler,e,i,n)),
t.next_in_index+=i,t.total_in+=i,i)}function h(t,e){var n,r,i=t.max_chain_length,o=t.strstart,s=t.prev_length,a=t.nice_match,u=t.strstart>t.w_size-ut?t.strstart-(t.w_size-ut):0,c=t.window,l=t.w_mask,h=t.prev,d=t.strstart+at,f=c[o+s-1],m=c[o+s];
t.prev_length>=t.good_match&&(i>>=2),a>t.lookahead&&(a=t.lookahead);do if(n=e,c[n+s]===m&&c[n+s-1]===f&&c[n]===c[o]&&c[++n]===c[o+1]){
o+=2,n++;do;while(c[++o]===c[++n]&&c[++o]===c[++n]&&c[++o]===c[++n]&&c[++o]===c[++n]&&c[++o]===c[++n]&&c[++o]===c[++n]&&c[++o]===c[++n]&&c[++o]===c[++n]&&d>o);
if(r=at-(d-o),o=d-at,r>s){if(t.match_start=e,s=r,r>=a)break;f=c[o+s-1],m=c[o+s]}}while((e=h[e&l])>u&&0!==--i);
return s<=t.lookahead?s:t.lookahead}function d(t){var e,n,r,i,o,s=t.w_size;do{if(i=t.window_size-t.lookahead-t.strstart,
t.strstart>=s+(s-ut)){C.arraySet(t.window,t.window,s,s,0),t.match_start-=s,t.strstart-=s,
t.block_start-=s,n=t.hash_size,e=n;do r=t.head[--e],t.head[e]=r>=s?r-s:0;while(--n);
n=s,e=n;do r=t.prev[--e],t.prev[e]=r>=s?r-s:0;while(--n);i+=s}if(0===t.strm.avail_in)break;
if(n=l(t.strm,t.window,t.strstart+t.lookahead,i),t.lookahead+=n,t.lookahead+t.insert>=st)for(o=t.strstart-t.insert,
t.ins_h=t.window[o],t.ins_h=(t.ins_h<<t.hash_shift^t.window[o+1])&t.hash_mask;t.insert&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[o+st-1])&t.hash_mask,
t.prev[o&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=o,o++,t.insert--,!(t.lookahead+t.insert<st)););
}while(t.lookahead<ut&&0!==t.strm.avail_in)}function f(t,e){var n=65535;for(n>t.pending_buf_size-5&&(n=t.pending_buf_size-5);;){
if(t.lookahead<=1){if(d(t),0===t.lookahead&&e===T)return pt;if(0===t.lookahead)break;
}t.strstart+=t.lookahead,t.lookahead=0;var r=t.block_start+n;if((0===t.strstart||t.strstart>=r)&&(t.lookahead=t.strstart-r,
t.strstart=r,a(t,!1),0===t.strm.avail_out))return pt;if(t.strstart-t.block_start>=t.w_size-ut&&(a(t,!1),
0===t.strm.avail_out))return pt}return t.insert=0,e===F?(a(t,!0),0===t.strm.avail_out?_t:yt):t.strstart>t.block_start&&(a(t,!1),
0===t.strm.avail_out)?pt:pt}function m(t,e){for(var n,r;;){if(t.lookahead<ut){if(d(t),
t.lookahead<ut&&e===T)return pt;if(0===t.lookahead)break}if(n=0,t.lookahead>=st&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+st-1])&t.hash_mask,
n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==n&&t.strstart-n<=t.w_size-ut&&(t.match_length=h(t,n)),
t.match_length>=st)if(r=O._tr_tally(t,t.strstart-t.match_start,t.match_length-st),
t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=st){t.match_length--;
do t.strstart++,t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+st-1])&t.hash_mask,
n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart;while(0!==--t.match_length);
t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],
t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+1])&t.hash_mask;else r=O._tr_tally(t,0,t.window[t.strstart]),
t.lookahead--,t.strstart++;if(r&&(a(t,!1),0===t.strm.avail_out))return pt}return t.insert=t.strstart<st-1?t.strstart:st-1,
e===F?(a(t,!0),0===t.strm.avail_out?_t:yt):t.last_lit&&(a(t,!1),0===t.strm.avail_out)?pt:vt;
}function b(t,e){for(var n,r,i;;){if(t.lookahead<ut){if(d(t),t.lookahead<ut&&e===T)return pt;
if(0===t.lookahead)break}if(n=0,t.lookahead>=st&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+st-1])&t.hash_mask,
n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,
t.prev_match=t.match_start,t.match_length=st-1,0!==n&&t.prev_length<t.max_lazy_match&&t.strstart-n<=t.w_size-ut&&(t.match_length=h(t,n),
t.match_length<=5&&(t.strategy===H||t.match_length===st&&t.strstart-t.match_start>4096)&&(t.match_length=st-1)),
t.prev_length>=st&&t.match_length<=t.prev_length){i=t.strstart+t.lookahead-st,r=O._tr_tally(t,t.strstart-1-t.prev_match,t.prev_length-st),
t.lookahead-=t.prev_length-1,t.prev_length-=2;do++t.strstart<=i&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+st-1])&t.hash_mask,
n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart);while(0!==--t.prev_length);
if(t.match_available=0,t.match_length=st-1,t.strstart++,r&&(a(t,!1),0===t.strm.avail_out))return pt;
}else if(t.match_available){if(r=O._tr_tally(t,0,t.window[t.strstart-1]),r&&a(t,!1),
t.strstart++,t.lookahead--,0===t.strm.avail_out)return pt}else t.match_available=1,
t.strstart++,t.lookahead--}return t.match_available&&(r=O._tr_tally(t,0,t.window[t.strstart-1]),
t.match_available=0),t.insert=t.strstart<st-1?t.strstart:st-1,e===F?(a(t,!0),0===t.strm.avail_out?_t:yt):t.last_lit&&(a(t,!1),
0===t.strm.avail_out)?pt:vt}function g(t,e){for(var n,r,i,o,s=t.window;;){if(t.lookahead<=at){
if(d(t),t.lookahead<=at&&e===T)return pt;if(0===t.lookahead)break}if(t.match_length=0,
t.lookahead>=st&&t.strstart>0&&(i=t.strstart-1,r=s[i],r===s[++i]&&r===s[++i]&&r===s[++i])){
o=t.strstart+at;do;while(r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&o>i);
t.match_length=at-(o-i),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}
if(t.match_length>=st?(n=O._tr_tally(t,1,t.match_length-st),t.lookahead-=t.match_length,
t.strstart+=t.match_length,t.match_length=0):(n=O._tr_tally(t,0,t.window[t.strstart]),
t.lookahead--,t.strstart++),n&&(a(t,!1),0===t.strm.avail_out))return pt}return t.insert=0,
e===F?(a(t,!0),0===t.strm.avail_out?_t:yt):t.last_lit&&(a(t,!1),0===t.strm.avail_out)?pt:vt;
}function p(t,e){for(var n;;){if(0===t.lookahead&&(d(t),0===t.lookahead)){if(e===T)return pt;
break}if(t.match_length=0,n=O._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,
n&&(a(t,!1),0===t.strm.avail_out))return pt}return t.insert=0,e===F?(a(t,!0),0===t.strm.avail_out?_t:yt):t.last_lit&&(a(t,!1),
0===t.strm.avail_out)?pt:vt}function v(t){t.window_size=2*t.w_size,o(t.head),t.max_lazy_match=k[t.level].max_lazy,
t.good_match=k[t.level].good_length,t.nice_match=k[t.level].nice_length,t.max_chain_length=k[t.level].max_chain,
t.strstart=0,t.block_start=0,t.lookahead=0,t.insert=0,t.match_length=t.prev_length=st-1,
t.match_available=0,t.ins_h=0}function _(){this.strm=null,this.status=0,this.pending_buf=null,
this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,
this.gzindex=0,this.method=Z,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,
this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,
this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,
this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,
this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,
this.good_match=0,this.nice_match=0,this.dyn_ltree=new C.Buf16(2*it),this.dyn_dtree=new C.Buf16(2*(2*nt+1)),
this.bl_tree=new C.Buf16(2*(2*rt+1)),o(this.dyn_ltree),o(this.dyn_dtree),o(this.bl_tree),
this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new C.Buf16(ot+1),
this.heap=new C.Buf16(2*et+1),o(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new C.Buf16(2*et+1),
o(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,
this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0,this.high_water=0;
}function y(t){var e;return t&&t.state?(t.total_in=t.total_out=0,t.data_type=K,e=t.state,
e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?lt:bt,t.adler=2===e.wrap?0:1,
e.last_flush=T,O._tr_init(e),z):r(t,P)}function w(t){var e=y(t);return e===z&&v(t.state),
e}function x(t,e,n,i,o,s){if(!t)return r(t,P);var a=1;if(e===$&&(e=6),0>i?(a=0,i=-i):i>15&&(a=2,
i-=16),1>o||o>Y||n!==Z||8>i||i>15||0>e||e>9||0>s||s>G)return r(t,P);8===i&&(i=9);var u=new _;
return t.state=u,u.strm=t,u.wrap=a,u.gzhead=null,u.w_bits=i,u.w_size=1<<u.w_bits,
u.w_mask=u.w_size-1,u.hash_bits=o+7,u.hash_size=1<<u.hash_bits,u.hash_mask=u.hash_size-1,
u.hash_shift=~~((u.hash_bits+st-1)/st),u.window=new C.Buf8(2*u.w_size),u.head=new C.Buf16(u.hash_size),
u.prev=new C.Buf16(u.w_size),u.high_water=0,u.lit_bufsize=1<<o+6,u.pending_buf_size=4*u.lit_bufsize,
u.pending_buf=new C.Buf8(u.pending_buf_size),u.d_buf=u.lit_bufsize>>1,u.l_buf=3*u.lit_bufsize,
u.level=e,u.strategy=s,u.method=n,w(t)}function S(t,e){return x(t,e,Z,X,Q,q)}function E(t,e){
var n,a;if(!t||!t.state||e>B||0>e)return r(t,P);if(a=t.state,!t.next_out||!t.next_in&&0!==t.avail_in||a.status===gt&&e!==F)return r(t,0===t.avail_out?W:P);
if(a.strm=t,n=a.last_flush,a.last_flush=e,a.status===lt)if(2===a.wrap){if(t.adler=0,
u(a,31),u(a,139),u(a,8),a.gzhead)throw new Error("Custom GZIP headers not supported");
u(a,0),u(a,0),u(a,0),u(a,0),u(a,0),u(a,9===a.level?2:a.strategy>=U||a.level<2?4:0),
u(a,wt),a.status=bt}else{var l=Z+(a.w_bits-8<<4)<<8,h=-1;h=a.strategy>=U||a.level<2?0:a.level<6?1:6===a.level?2:3,
l|=h<<6,0!==a.strstart&&(l|=ct),l+=31-l%31,a.status=bt,c(a,l),0!==a.strstart&&(c(a,t.adler>>>16),
c(a,65535&t.adler)),t.adler=1}if(0!==a.pending){if(s(t),0===t.avail_out)return a.last_flush=-1,
z}else if(0===t.avail_in&&i(e)<=i(n)&&e!==F)return r(t,W);if(a.status===gt&&0!==t.avail_in)return r(t,W);
if(0!==t.avail_in||0!==a.lookahead||e!==T&&a.status!==gt){var d=a.strategy===U?p(a,e):a.strategy===V?g(a,e):k[a.level].func(a,e);
if((d===_t||d===yt)&&(a.status=gt),d===pt||d===_t)return 0===t.avail_out&&(a.last_flush=-1),
z;if(d===vt&&(e===L?O._tr_align(a):e!==B&&(O._tr_stored_block(a,0,0,!1),e===I&&(o(a.head),
0===a.lookahead&&(a.strstart=0,a.block_start=0,a.insert=0))),s(t),0===t.avail_out))return a.last_flush=-1,
z}return e!==F?z:a.wrap<=0?D:(2===a.wrap?(u(a,255&t.adler),u(a,t.adler>>8&255),u(a,t.adler>>16&255),
u(a,t.adler>>24&255),u(a,255&t.total_in),u(a,t.total_in>>8&255),u(a,t.total_in>>16&255),
u(a,t.total_in>>24&255)):(c(a,t.adler>>>16),c(a,65535&t.adler)),s(t),a.wrap>0&&(a.wrap=-a.wrap),
0!==a.pending?z:D)}function j(t){var e=t.state.status;return e!==lt&&e!==ht&&e!==dt&&e!==ft&&e!==mt&&e!==bt&&e!==gt?r(t,P):(t.state=null,
e===bt?r(t,N):z)}var k,C=t("./utils"),O=t("./trees"),M=t("./adler32"),R=t("./crc32"),A=t("./messages"),T=0,L=1,I=3,F=4,B=5,z=0,D=1,P=-2,N=-3,W=-5,$=-1,H=1,U=2,V=3,G=4,q=0,K=2,Z=8,Y=9,X=15,Q=8,J=29,tt=256,et=tt+1+J,nt=30,rt=19,it=2*et+1,ot=15,st=3,at=258,ut=at+st+1,ct=32,lt=42,ht=69,dt=73,ft=91,mt=103,bt=113,gt=666,pt=1,vt=2,_t=3,yt=4,wt=3,xt=function(t,e,n,r,i){
this.good_length=t,this.max_lazy=e,this.nice_length=n,this.max_chain=r,this.func=i;
};k=[new xt(0,0,0,0,f),new xt(4,4,8,4,m),new xt(4,5,16,8,m),new xt(4,6,32,32,m),new xt(4,4,16,16,b),new xt(8,16,32,32,b),new xt(8,16,128,128,b),new xt(8,32,128,256,b),new xt(32,128,258,1024,b),new xt(32,258,258,4096,b)],
n.deflateInit=S,n.deflateInit2=x,n.deflateReset=w,n.deflate=E,n.deflateEnd=j,n.deflateInfo="pako deflate (from Nodeca project)";
},{"./adler32":4,"./crc32":6,"./messages":11,"./trees":12,"./utils":13}],8:[function(t,e,n){
var r=30,i=12;e.exports=function(t,e){var n,o,s,a,u,c,l,h,d,f,m,b,g,p,v,_,y,w,x,S,E,j,k,C,O;
n=t.state,o=t.next_in_index,C=t.next_in,s=o+(t.avail_in-5),a=t.next_out_index,O=t.next_out,
u=a-(e-t.avail_out),c=a+(t.avail_out-257),l=n.dmax,h=n.wsize,d=n.whave,f=n.wnext,
m=n.window,b=n.hold,g=n.bits,p=n.lencode,v=n.distcode,_=(1<<n.lenbits)-1,y=(1<<n.distbits)-1;
t:do{15>g&&(b+=C[o++]<<g,g+=8,b+=C[o++]<<g,g+=8),w=p[b&_];e:for(;;){if(x=w>>>24,b>>>=x,
g-=x,x=w>>>16&255,0===x)O[a++]=65535&w;else{if(!(16&x)){if(0===(64&x)){w=p[(65535&w)+(b&(1<<x)-1)];
continue e}if(32&x){n.mode=i;break t}t.msg="invalid literal/length code",n.mode=r;
break t}S=65535&w,x&=15,x&&(x>g&&(b+=C[o++]<<g,g+=8),S+=b&(1<<x)-1,b>>>=x,g-=x),15>g&&(b+=C[o++]<<g,
g+=8,b+=C[o++]<<g,g+=8),w=v[b&y];n:for(;;){if(x=w>>>24,b>>>=x,g-=x,x=w>>>16&255,!(16&x)){
if(0===(64&x)){w=v[(65535&w)+(b&(1<<x)-1)];continue n}t.msg="invalid distance code",
n.mode=r;break t}if(E=65535&w,x&=15,x>g&&(b+=C[o++]<<g,g+=8,x>g&&(b+=C[o++]<<g,g+=8)),
E+=b&(1<<x)-1,E>l){t.msg="invalid distance too far back",n.mode=r;break t}if(b>>>=x,
g-=x,x=a-u,E>x){if(x=E-x,x>d&&n.sane){t.msg="invalid distance too far back",n.mode=r;
break t}if(j=0,k=m,0===f){if(j+=h-x,S>x){S-=x;do O[a++]=m[j++];while(--x);j=a-E,k=O;
}}else if(x>f){if(j+=h+f-x,x-=f,S>x){S-=x;do O[a++]=m[j++];while(--x);if(j=0,S>f){
x=f,S-=x;do O[a++]=m[j++];while(--x);j=a-E,k=O}}}else if(j+=f-x,S>x){S-=x;do O[a++]=m[j++];while(--x);
j=a-E,k=O}for(;S>2;)O[a++]=k[j++],O[a++]=k[j++],O[a++]=k[j++],S-=3;S&&(O[a++]=k[j++],
S>1&&(O[a++]=k[j++]))}else{j=a-E;do O[a++]=O[j++],O[a++]=O[j++],O[a++]=O[j++],S-=3;while(S>2);
S&&(O[a++]=O[j++],S>1&&(O[a++]=O[j++]))}break}}break}}while(s>o&&c>a);S=g>>3,o-=S,
g-=S<<3,b&=(1<<g)-1,t.next_in_index=o,t.next_out_index=a,t.avail_in=s>o?5+(s-o):5-(o-s),
t.avail_out=c>a?257+(c-a):257-(a-c),n.hold=b,n.bits=g}},{}],9:[function(t,e,n){function r(t){
return(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24)}function i(){this.mode=0,
this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,
this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,
this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,
this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,
this.have=0,this.next=null,this.next_index=0,this.lens=new v.Buf16(320),this.work=new v.Buf16(288),
this.codes=new v.Buf32(pt),this.sane=0,this.back=0,this.was=0}function o(t,e,n,r,i,o,s,a){
this.type=t,this.lens=e,this.lens_index=n,this.codes=r,this.table=i,this.table_index=o,
this.bits=s,this.work=a}function s(t){var e;return t&&t.state?(e=t.state,t.total_in=t.total_out=e.total=0,
e.wrap&&(t.adler=1&e.wrap),e.mode=z,e.last=0,e.havedict=0,e.dmax=32768,e.head=null,
e.hold=0,e.bits=0,e.lencode=new v.Buf32(pt),e.distcode=new v.Buf32(pt),e.sane=1,e.back=-1,
M):T}function a(t){var e;return t&&t.state?(e=t.state,e.wsize=0,e.whave=0,e.wnext=0,
s(t)):T}function u(t,e){var n,r;return t&&t.state?(r=t.state,0>e?(n=0,e=-e):(n=(e>>4)+1,
48>e&&(e&=15)),e&&(8>e||e>15)?T:(null!==r.window&&r.wbits!==e&&(r.window=null),r.wrap=n,
r.wbits=e,a(t))):T}function c(t,e){var n,r;return t?(r=new i,t.state=r,r.window=null,
n=u(t,e),n!==M&&(t.state=null),n):T}function l(t){return c(t,_t)}function h(t,e,n){
var r;return t&&t.state?(r=t.state,0>e?(r.hold=0,r.bits=0,M):e>16||r.bits+e>32?T:(n&=(1<<e)-1,
r.hold+=n<<r.bits,r.bits+=e,M)):T}function d(t){if(yt){var e,n;for(g=new v.Buf32(512),
p=new v.Buf32(32),e=0;144>e;)t.lens[e++]=8;for(;256>e;)t.lens[e++]=9;for(;280>e;)t.lens[e++]=7;
for(;288>e;)t.lens[e++]=8;for(n=9,x(new o(E,t.lens,0,288,g,0,n,t.work)),e=0;32>e;)t.lens[e++]=5;
n=5,x(new o(j,t.lens,0,32,p,0,n,t.work)),yt=!1}t.lencode=g,t.lenbits=9,t.distcode=p,
t.distbits=5}function f(t,e,n,r){var i,o=t.state;return null===o.window&&(o.wsize=1<<o.wbits,
o.wnext=0,o.whave=0,o.window=new v.Buf8(o.wsize)),r>=o.wsize?(v.arraySet(o.window,e,n-o.wsize,o.wsize,0),
o.wnext=0,o.whave=o.wsize):(i=o.wsize-o.wnext,i>r&&(i=r),v.arraySet(o.window,e,n-r,i,o.wnext),
r-=i,r?(v.arraySet(o.window,e,n-r,r,0),o.wnext=r,o.whave=o.wsize):(o.wnext+=i,o.wnext===o.wsize&&(o.wnext=0),
o.whave<o.wsize&&(o.whave+=i))),0}function m(t,e){var n,i,s,a,u,c,l,h,m,b,g,p,bt,gt,pt,vt,_t,yt,wt,xt,St,Et,jt,kt,Ct=0,Ot=new v.Buf8(4),Mt=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];
n=t.state,n.mode===K&&(n.mode=Z),u=t.next_out_index,s=t.next_out,l=t.avail_out,a=t.next_in_index,
i=t.next_in,c=t.avail_in,h=n.hold,m=n.bits,b=c,g=l,Et=M;t:for(;;)switch(n.mode){case z:
if(0===n.wrap){n.mode=Z;break}for(;16>m;){if(0===c)break t;c--,h+=i[a++]<<m,m+=8}
if(2&n.wrap&&35615===h){n.check=0,Ot[0]=255&h,Ot[1]=h>>>8&255,n.check=y(n.check,Ot,2,0),
h=0,m=0,n.mode=D;break}if(n.flags=0,n.head&&(n.head.done=-1),!(1&n.wrap)||(((255&h)<<8)+(h>>8))%31){
t.msg="incorrect header check",n.mode=dt;break}if((15&h)!==B){t.msg="unknown compression method",
n.mode=dt;break}if(h>>>=4,m-=4,St=(15&h)+8,0===n.wbits)n.wbits=St;else if(St>n.wbits){
t.msg="invalid window size",n.mode=dt;break}n.dmax=1<<St,t.adler=n.check=1,n.mode=512&h?G:K,
h=0,m=0;break;case D:for(;16>m;){if(0===c)break t;c--,h+=i[a++]<<m,m+=8}if(n.flags=h,
(255&n.flags)!==B){t.msg="unknown compression method",n.mode=dt;break}if(57344&n.flags){
t.msg="unknown header flags set",n.mode=dt;break}n.head&&(n.head.text=h>>8&1),512&n.flags&&(Ot[0]=255&h,
Ot[1]=h>>>8&255,n.check=y(n.check,Ot,2,0)),h=0,m=0,n.mode=P;case P:for(;32>m;){if(0===c)break t;
c--,h+=i[a++]<<m,m+=8}n.head&&(n.head.time=h),512&n.flags&&(Ot[0]=255&h,Ot[1]=h>>>8&255,
Ot[2]=h>>>16&255,Ot[3]=h>>>24&255,n.check=y(n.check,Ot,4,0)),h=0,m=0,n.mode=N;case N:
for(;16>m;){if(0===c)break t;c--,h+=i[a++]<<m,m+=8}n.head&&(n.head.xflags=255&h,n.head.os=h>>8),
512&n.flags&&(Ot[0]=255&h,Ot[1]=h>>>8&255,n.check=y(n.check,Ot,2,0)),h=0,m=0,n.mode=W;
case W:if(1024&n.flags){for(;16>m;){if(0===c)break t;c--,h+=i[a++]<<m,m+=8}n.length=h,
n.head&&(n.head.extra_len=h),512&n.flags&&(Ot[0]=255&h,Ot[1]=h>>>8&255,n.check=y(n.check,Ot,2,0)),
h=0,m=0}else n.head&&(n.head.extra=null);n.mode=$;case $:if(1024&n.flags){if(p=n.length,
p>c&&(p=c),p){if(n.head&&n.head.extra)throw St=n.head.extra_len-n.length,"Review & implement right";
512&n.flags&&(n.check=y(n.check,i,p,a)),c-=p,a+=p,n.length-=p}if(n.length)break t;
}n.length=0,n.mode=H;case H:if(2048&n.flags){if(0===c)break t;p=0;do St=i[a+p++],
n.head&&n.head.name&&n.length<n.head.name_max&&(n.head.name[n.length++]=St);while(St&&c>p);
if(512&n.flags&&(n.check=y(n.check,i,p,a)),c-=p,a+=p,St)break t}else n.head&&(n.head.name=null);
n.length=0,n.mode=U;case U:if(4096&n.flags){if(0===c)break t;p=0;do St=i[a+p++],n.head&&n.head.comment&&n.length<n.head.comm_max&&(n.head.comment[n.length++]=St);while(St&&c>p);
if(512&n.flags&&(n.check=y(n.check,i,p,a)),c-=p,a+=p,St)break t}else n.head&&(n.head.comment=null);
n.mode=V;case V:if(512&n.flags){for(;16>m;){if(0===c)break t;c--,h+=i[a++]<<m,m+=8;
}if(h!==(65535&n.check)){t.msg="header crc mismatch",n.mode=dt;break}h=0,m=0}n.head&&(n.head.hcrc=n.flags>>9&1,
n.head.done=1),t.adler=n.check=0,n.mode=K;break;case G:for(;32>m;){if(0===c)break t;
c--,h+=i[a++]<<m,m+=8}t.adler=n.check=r(h),h=0,m=0,n.mode=q;case q:if(0===n.havedict)return t.next_out_index=u,
t.avail_out=l,t.next_in_index=a,t.avail_in=c,n.hold=h,n.bits=m,A;t.adler=n.check=1,
n.mode=K;case K:if(e===C||e===O)break t;case Z:if(n.last){h>>>=7&m,m-=7&m,n.mode=ct;
break}for(;3>m;){if(0===c)break t;c--,h+=i[a++]<<m,m+=8}switch(n.last=1&h,h>>>=1,
m-=1,3&h){case 0:n.mode=Y;break;case 1:if(d(n),n.mode=nt,e===O){h>>>=2,m-=2;break t;
}break;case 2:n.mode=J;break;case 3:t.msg="invalid block type",n.mode=dt}h>>>=2,m-=2;
break;case Y:for(h>>>=7&m,m-=7&m;32>m;){if(0===c)break t;c--,h+=i[a++]<<m,m+=8}if((65535&h)!==(h>>>16^65535)){
t.msg="invalid stored block lengths",n.mode=dt;break}if(n.length=65535&h,h=0,m=0,
n.mode=X,e===O)break t;case X:n.mode=Q;case Q:if(p=n.length){if(p>c&&(p=c),p>l&&(p=l),
0===p)break t;v.arraySet(s,i,a,p,u),c-=p,a+=p,l-=p,u+=p,n.length-=p;break}n.mode=K;
break;case J:for(;14>m;){if(0===c)break t;c--,h+=i[a++]<<m,m+=8}if(n.nlen=(31&h)+257,
h>>>=5,m-=5,n.ndist=(31&h)+1,h>>>=5,m-=5,n.ncode=(15&h)+4,h>>>=4,m-=4,n.nlen>286||n.ndist>30){
t.msg="too many length or distance symbols",n.mode=dt;break}n.have=0,n.mode=tt;case tt:
for(;n.have<n.ncode;){for(;3>m;){if(0===c)break t;c--,h+=i[a++]<<m,m+=8}n.lens[Mt[n.have++]]=7&h,
h>>>=3,m-=3}for(;n.have<19;)n.lens[Mt[n.have++]]=0;if(v.arraySet(n.lencode,n.codes,0,n.codes.length,0),
n.lenbits=7,jt=new o(S,n.lens,0,19,n.lencode,0,n.lenbits,n.work),Et=x(jt),n.lenbits=jt.bits,
Et){t.msg="invalid code lengths set",n.mode=dt;break}n.have=0,n.mode=et;case et:for(;n.have<n.nlen+n.ndist;){
for(;Ct=n.lencode[h&(1<<n.lenbits)-1],pt=Ct>>>24,vt=Ct>>>16&255,_t=65535&Ct,!(m>=pt);){
if(0===c)break t;c--,h+=i[a++]<<m,m+=8}if(16>_t)h>>>=pt,m-=pt,n.lens[n.have++]=_t;else{
if(16===_t){for(kt=pt+2;kt>m;){if(0===c)break t;c--,h+=i[a++]<<m,m+=8}if(h>>>=pt,
m-=pt,0===n.have){t.msg="invalid bit length repeat",n.mode=dt;break}St=n.lens[n.have-1],
p=3+(3&h),h>>>=2,m-=2}else if(17===_t){for(kt=pt+3;kt>m;){if(0===c)break t;c--,h+=i[a++]<<m,
m+=8}h>>>=pt,m-=pt,St=0,p=3+(7&h),h>>>=3,m-=3}else{for(kt=pt+7;kt>m;){if(0===c)break t;
c--,h+=i[a++]<<m,m+=8}h>>>=pt,m-=pt,St=0,p=11+(127&h),h>>>=7,m-=7}if(n.have+p>n.nlen+n.ndist){
t.msg="invalid bit length repeat",n.mode=dt;break}for(;p--;)n.lens[n.have++]=St}}
if(n.mode===dt)break;if(0===n.lens[256]){t.msg="invalid code -- missing end-of-block",
n.mode=dt;break}if(v.arraySet(n.lencode,n.codes,0,n.codes.length,0),n.lenbits=9,jt=new o(E,n.lens,0,n.nlen,n.lencode,0,n.lenbits,n.work),
Et=x(jt),n.lenbits=jt.bits,Et){t.msg="invalid literal/lengths set",n.mode=dt;break;
}if(n.distbits=6,v.arraySet(n.distcode,n.codes,0,n.codes.length,0),jt=new o(j,n.lens,n.nlen,n.ndist,n.distcode,0,n.distbits,n.work),
Et=x(jt),n.distbits=jt.bits,Et){t.msg="invalid distances set",n.mode=dt;break}if(n.mode=nt,
e===O)break t;case nt:n.mode=rt;case rt:if(c>=6&&l>=258){t.next_out_index=u,t.avail_out=l,
t.next_in_index=a,t.avail_in=c,n.hold=h,n.bits=m,w(t,g),u=t.next_out_index,s=t.next_out,
l=t.avail_out,a=t.next_in_index,i=t.next_in,c=t.avail_in,h=n.hold,m=n.bits,n.mode===K&&(n.back=-1);
break}for(n.back=0;Ct=n.lencode[h&(1<<n.lenbits)-1],pt=Ct>>>24,vt=Ct>>>16&255,_t=65535&Ct,
!(m>=pt);){if(0===c)break t;c--,h+=i[a++]<<m,m+=8}if(vt&&0===(240&vt)){for(yt=pt,
wt=vt,xt=_t;Ct=n.lencode[xt+((h&(1<<yt+wt)-1)>>yt)],pt=Ct>>>24,vt=Ct>>>16&255,_t=65535&Ct,
!(m>=yt+pt);){if(0===c)break t;c--,h+=i[a++]<<m,m+=8}h>>>=yt,m-=yt,n.back+=yt}if(h>>>=pt,
m-=pt,n.back+=pt,n.length=_t,0===vt){n.mode=ut;break}if(32&vt){n.back=-1,n.mode=K;
break}if(64&vt){t.msg="invalid literal/length code",n.mode=dt;break}n.extra=15&vt,
n.mode=it;case it:if(n.extra){for(kt=n.extra;kt>m;){if(0===c)break t;c--,h+=i[a++]<<m,
m+=8}n.length+=h&(1<<n.extra)-1,h>>>=n.extra,m-=n.extra,n.back+=n.extra}n.was=n.length,
n.mode=ot;case ot:for(;Ct=n.distcode[h&(1<<n.distbits)-1],pt=Ct>>>24,vt=Ct>>>16&255,
_t=65535&Ct,!(m>=pt);){if(0===c)break t;c--,h+=i[a++]<<m,m+=8}if(0===(240&vt)){for(yt=pt,
wt=vt,xt=_t;Ct=n.distcode[xt+((h&(1<<yt+wt)-1)>>yt)],pt=Ct>>>24,vt=Ct>>>16&255,_t=65535&Ct,
!(m>=yt+pt);){if(0===c)break t;c--,h+=i[a++]<<m,m+=8}h>>>=yt,m-=yt,n.back+=yt}if(h>>>=pt,
m-=pt,n.back+=pt,64&vt){t.msg="invalid distance code",n.mode=dt;break}n.offset=_t,
n.extra=15&vt,n.mode=st;case st:if(n.extra){for(kt=n.extra;kt>m;){if(0===c)break t;
c--,h+=i[a++]<<m,m+=8}n.offset+=h&(1<<n.extra)-1,h>>>=n.extra,m-=n.extra,n.back+=n.extra;
}if(n.offset>n.dmax){t.msg="invalid distance too far back",n.mode=dt;break}n.mode=at;
case at:if(0===l)break t;if(p=g-l,n.offset>p){if(p=n.offset-p,p>n.whave&&n.sane){
t.msg="invalid distance too far back",n.mode=dt;break}p>n.wnext?(p-=n.wnext,bt=n.wsize-p):bt=n.wnext-p,
p>n.length&&(p=n.length),gt=n.window}else gt=s,bt=u-n.offset,p=n.length;p>l&&(p=l),
l-=p,n.length-=p;do s[u++]=gt[bt++];while(--p);0===n.length&&(n.mode=rt);break;case ut:
if(0===l)break t;s[u++]=n.length,l--,n.mode=rt;break;case ct:if(n.wrap){for(;32>m;){
if(0===c)break t;c--,h|=i[a++]<<m,m+=8}if(g-=l,t.total_out+=g,n.total+=g,g&&(t.adler=n.check=n.flags?y(n.check,s,g,u-g):_(n.check,s,g,u-g)),
g=l,(n.flags?h:r(h))!==n.check){t.msg="incorrect data check",n.mode=dt;break}h=0,
m=0}n.mode=lt;case lt:if(n.wrap&&n.flags){for(;32>m;){if(0===c)break t;c--,h+=i[a++]<<m,
m+=8}if(h!==(4294967295&n.total)){t.msg="incorrect length check",n.mode=dt;break}
h=0,m=0}n.mode=ht;case ht:Et=R;break t;case dt:Et=L;break t;case ft:return I;case mt:
default:return T}return t.next_out_index=u,t.avail_out=l,t.next_in_index=a,t.avail_in=c,
n.hold=h,n.bits=m,(n.wsize||g!==t.avail_out&&n.mode<dt&&(n.mode<ct||e!==k))&&f(t,t.next_out,t.next_out_index,g-t.avail_out)?(n.mode=ft,
I):(b-=t.avail_in,g-=t.avail_out,t.total_in+=b,t.total_out+=g,n.total+=g,n.wrap&&g&&(t.adler=n.check=n.flags?y(n.check,s,g,t.next_out_index-g):_(n.check,s,g,t.next_out_index-g)),
t.data_type=n.bits+(n.last?64:0)+(n.mode===K?128:0)+(n.mode===nt||n.mode===X?256:0),
(0===b&&0===g||e===k)&&Et===M&&(Et=F),Et)}function b(t){var e=t.state;return e.window&&(e.window=null),
t.state=null,M}var g,p,v=t("./utils"),_=t("./adler32"),y=t("./crc32"),w=t("./inffast"),x=t("./inftrees"),S=0,E=1,j=2,k=4,C=5,O=6,M=0,R=1,A=2,T=-2,L=-3,I=-4,F=-5,B=8,z=1,D=2,P=3,N=4,W=5,$=6,H=7,U=8,V=9,G=10,q=11,K=12,Z=13,Y=14,X=15,Q=16,J=17,tt=18,et=19,nt=20,rt=21,it=22,ot=23,st=24,at=25,ut=26,ct=27,lt=28,ht=29,dt=30,ft=31,mt=32,bt=852,gt=592,pt=bt+gt,vt=15,_t=vt,yt=!0;
n.inflateReset=a,n.inflateReset2=u,n.inflateResetKeep=s,n.inflateInit=l,n.inflateInit2=c,
n.inflatePrime=h,n.inflate=m,n.inflateEnd=b,n.inflateInfo="pako inflate (from Nodeca project)";
},{"./adler32":4,"./crc32":6,"./inffast":8,"./inftrees":10,"./utils":13}],10:[function(t,e,n){
var r=t("./utils"),i=15,o=852,s=592,a=0,u=1,c=2,l=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],h=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],d=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],f=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];
e.exports=function(t){var e,n,m,b,g,p,v,_,y,w=t.type,x=t.lens,S=t.codes,E=t.table,j=t.bits,k=t.work,C=0,O=0,M=0,R=0,A=0,T=0,L=0,I=0,F=0,B=0,z=null,D=0,P=new r.Buf16(i+1),N=new r.Buf16(i+1),W=null,$=0;
for(C=0;i>=C;C++)P[C]=0;for(O=0;S>O;O++)P[x[t.lens_index+O]]++;for(A=j,R=i;R>=1&&0===P[R];R--);
if(A>R&&(A=R),0===R)return E[t.table_index++]=20971520,E[t.table_index++]=20971520,
t.bits=1,0;for(M=1;R>M&&0===P[M];M++);for(M>A&&(A=M),I=1,C=1;i>=C;C++)if(I<<=1,I-=P[C],
0>I)return-1;if(I>0&&(w===a||1!==R))return-1;for(N[1]=0,C=1;i>C;C++)N[C+1]=N[C]+P[C];
for(O=0;S>O;O++)0!==x[t.lens_index+O]&&(k[N[x[t.lens_index+O]]++]=O);switch(w){case a:
z=W=k,p=19;break;case u:z=l,D-=257,W=h,$-=257,p=256;break;default:z=d,W=f,p=-1}if(B=0,
O=0,C=M,g=t.table_index,T=A,L=0,m=-1,F=1<<A,b=F-1,w===u&&F>o||w===c&&F>s)return 1;
for(var H=0;;){H++,v=C-L,k[O]<p?(_=0,y=k[O]):k[O]>p?(_=W[$+k[O]],y=z[D+k[O]]):(_=96,
y=0),e=1<<C-L,n=1<<T,M=n;do n-=e,E[g+(B>>L)+n]=v<<24|_<<16|y|0;while(0!==n);for(e=1<<C-1;B&e;)e>>=1;
if(0!==e?(B&=e-1,B+=e):B=0,O++,0===--P[C]){if(C===R)break;C=x[t.lens_index+k[O]]}
if(C>A&&(B&b)!==m){for(0===L&&(L=A),g+=M,T=C-L,I=1<<T;R>T+L&&(I-=P[T+L],!(0>=I));)T++,
I<<=1;if(F+=1<<T,w===u&&F>o||w===c&&F>s)return 1;m=B&b,E[m]=A<<24|T<<16|g-t.table_index;
}}return 0!==B&&(E[g+B]=C-L<<24|64<<16|0),t.table_index+=F,t.bits=A,0}},{"./utils":13
}],11:[function(t,e,n){e.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error",
"-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error",
"-6":"incompatible version"}},{}],12:[function(t,e,n){function r(t){for(var e=t.length;--e;)t[e]=0;
}function i(t){return 256>t?st[t]:st[256+(t>>>7)]}function o(t,e){t.pending_buf[t.pending++]=255&e,
t.pending_buf[t.pending++]=e>>>8&255}function s(t,e,n){t.bi_valid>q-n?(t.bi_buf|=e<<t.bi_valid&65535,
o(t,t.bi_buf),t.bi_buf=e>>q-t.bi_valid,t.bi_valid+=n-q):(t.bi_buf|=e<<t.bi_valid&65535,
t.bi_valid+=n)}function a(t,e,n){s(t,n[2*e],n[2*e+1])}function u(t,e){var n=0;do n|=1&t,
t>>>=1,n<<=1;while(--e>0);return n>>>1}function c(t){16===t.bi_valid?(o(t,t.bi_buf),
t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,
t.bi_buf>>=8,t.bi_valid-=8)}function l(t,e){var n,r,i,o,s,a,u=e.dyn_tree,c=e.max_code,l=e.stat_desc.static_tree,h=e.stat_desc.has_stree,d=e.stat_desc.extra_bits,f=e.stat_desc.extra_base,m=e.stat_desc.max_length,b=0;
for(o=0;G>=o;o++)t.bl_count[o]=0;for(u[2*t.heap[t.heap_max]+1]=0,n=t.heap_max+1;V>n;n++)r=t.heap[n],
o=u[2*u[2*r+1]+1]+1,o>m&&(o=m,b++),u[2*r+1]=o,r>c||(t.bl_count[o]++,s=0,r>=f&&(s=d[r-f]),
a=u[2*r],t.opt_len+=a*(o+s),h&&(t.static_len+=a*(l[2*r+1]+s)));if(0!==b){do{for(o=m-1;0===t.bl_count[o];)o--;
t.bl_count[o]--,t.bl_count[o+1]+=2,t.bl_count[m]--,b-=2}while(b>0);for(o=m;0!==o;o--)for(r=t.bl_count[o];0!==r;)i=t.heap[--n],
i>c||(u[2*i+1]!==o&&(t.opt_len+=(o-u[2*i+1])*u[2*i],u[2*i+1]=o),r--)}}function h(t,e,n){
var r,i,o=new Array(G+1),s=0;for(r=1;G>=r;r++)o[r]=s=s+n[r-1]<<1;for(i=0;e>=i;i++){
var a=t[2*i+1];0!==a&&(t[2*i]=u(o[a]++,a))}}function d(){var t,e,n,r,i,o=new Array(G+1);
for(n=0,r=0;N-1>r;r++)for(ut[r]=n,t=0;t<1<<J[r];t++)at[n++]=r;for(at[n-1]=r,i=0,r=0;16>r;r++)for(ct[r]=i,
t=0;t<1<<tt[r];t++)st[i++]=r;for(i>>=7;H>r;r++)for(ct[r]=i<<7,t=0;t<1<<tt[r]-7;t++)st[256+i++]=r;
for(e=0;G>=e;e++)o[e]=0;for(t=0;143>=t;)it[2*t+1]=8,t++,o[8]++;for(;255>=t;)it[2*t+1]=9,
t++,o[9]++;for(;279>=t;)it[2*t+1]=7,t++,o[7]++;for(;287>=t;)it[2*t+1]=8,t++,o[8]++;
for(h(it,$+1,o),t=0;H>t;t++)ot[2*t+1]=5,ot[2*t]=u(t,5);lt=new ft(it,J,W+1,$,G),ht=new ft(ot,tt,0,H,G),
dt=new ft(new Array(0),et,0,U,K)}function f(t){var e;for(e=0;$>e;e++)t.dyn_ltree[2*e]=0;
for(e=0;H>e;e++)t.dyn_dtree[2*e]=0;for(e=0;U>e;e++)t.bl_tree[2*e]=0;t.dyn_ltree[2*Z]=1,
t.opt_len=t.static_len=0,t.last_lit=t.matches=0}function m(t){t.bi_valid>8?o(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),
t.bi_buf=0,t.bi_valid=0}function b(t,e,n,r){m(t),r&&(o(t,n),o(t,~n)),R.arraySet(t.pending_buf,t.window,e,n,t.pending),
t.pending+=n}function g(t,e,n,r){var i=2*e,o=2*n;return t[i]<t[o]||t[i]===t[o]&&r[e]<=r[n];
}function p(t,e,n){for(var r=t.heap[n],i=n<<1;i<=t.heap_len&&(i<t.heap_len&&g(e,t.heap[i+1],t.heap[i],t.depth)&&i++,
!g(e,r,t.heap[i],t.depth));)t.heap[n]=t.heap[i],n=i,i<<=1;t.heap[n]=r}function v(t,e,n){
var r,o,u,c,l=0;if(0!==t.last_lit)do r=t.pending_buf[t.d_buf+2*l]<<8|t.pending_buf[t.d_buf+2*l+1],
o=t.pending_buf[t.l_buf+l],l++,0===r?a(t,o,e):(u=at[o],a(t,u+W+1,e),c=J[u],0!==c&&(o-=ut[u],
s(t,o,c)),r--,u=i(r),a(t,u,n),c=tt[u],0!==c&&(r-=ct[u],s(t,r,c)));while(l<t.last_lit);
a(t,Z,e)}function _(t,e){var n,r,i,o=e.dyn_tree,s=e.stat_desc.static_tree,a=e.stat_desc.has_stree,u=e.stat_desc.elems,c=-1;
for(t.heap_len=0,t.heap_max=V,n=0;u>n;n++)0!==o[2*n]?(t.heap[++t.heap_len]=c=n,t.depth[n]=0):o[2*n+1]=0;
for(;t.heap_len<2;)i=t.heap[++t.heap_len]=2>c?++c:0,o[2*i]=1,t.depth[i]=0,t.opt_len--,
a&&(t.static_len-=s[2*i+1]);for(e.max_code=c,n=t.heap_len>>1;n>=1;n--)p(t,o,n);i=u;
do n=t.heap[1],t.heap[1]=t.heap[t.heap_len--],p(t,o,1),r=t.heap[1],t.heap[--t.heap_max]=n,
t.heap[--t.heap_max]=r,o[2*i]=o[2*n]+o[2*r],t.depth[i]=(t.depth[n]>=t.depth[r]?t.depth[n]:t.depth[r])+1,
o[2*n+1]=o[2*r+1]=i,t.heap[1]=i++,p(t,o,1);while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],
l(t,e),h(o,c,t.bl_count)}function y(t,e,n){var r,i,o=-1,s=e[1],a=0,u=7,c=4;for(0===s&&(u=138,
c=3),e[2*(n+1)+1]=65535,r=0;n>=r;r++)i=s,s=e[2*(r+1)+1],++a<u&&i===s||(c>a?t.bl_tree[2*i]+=a:0!==i?(i!==o&&t.bl_tree[2*i]++,
t.bl_tree[2*Y]++):10>=a?t.bl_tree[2*X]++:t.bl_tree[2*Q]++,a=0,o=i,0===s?(u=138,c=3):i===s?(u=6,
c=3):(u=7,c=4))}function w(t,e,n){var r,i,o=-1,u=e[1],c=0,l=7,h=4;for(0===u&&(l=138,
h=3),r=0;n>=r;r++)if(i=u,u=e[2*(r+1)+1],!(++c<l&&i===u)){if(h>c){do a(t,i,t.bl_tree);while(0!==--c);
}else 0!==i?(i!==o&&(a(t,i,t.bl_tree),c--),a(t,Y,t.bl_tree),s(t,c-3,2)):10>=c?(a(t,X,t.bl_tree),
s(t,c-3,3)):(a(t,Q,t.bl_tree),s(t,c-11,7));c=0,o=i,0===u?(l=138,h=3):i===u?(l=6,h=3):(l=7,
h=4)}}function x(t){var e;for(y(t,t.dyn_ltree,t.l_desc.max_code),y(t,t.dyn_dtree,t.d_desc.max_code),
_(t,t.bl_desc),e=U-1;e>=3&&0===t.bl_tree[2*nt[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,
e}function S(t,e,n,r){var i;for(s(t,e-257,5),s(t,n-1,5),s(t,r-4,4),i=0;r>i;i++)s(t,t.bl_tree[2*nt[i]+1],3);
w(t,t.dyn_ltree,e-1),w(t,t.dyn_dtree,n-1)}function E(t){var e,n=4093624447;for(e=0;31>=e;e++,
n>>>=1)if(1&n&&0!==t.dyn_ltree[2*e])return T;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return L;
for(e=32;W>e;e++)if(0!==t.dyn_ltree[2*e])return L;return T}function j(t){bt||(d(),
bt=!0),t.l_desc=new mt(t.dyn_ltree,lt),t.d_desc=new mt(t.dyn_dtree,ht),t.bl_desc=new mt(t.bl_tree,dt),
t.bi_buf=0,t.bi_valid=0,f(t)}function k(t,e,n,r){s(t,(F<<1)+(r?1:0),3),b(t,e,n,!0);
}function C(t){s(t,B<<1,3),a(t,Z,it),c(t)}function O(t,e,n,r){var i,o,a=0;t.level>0?(t.strm.data_type===I&&(t.strm.data_type=E(t)),
_(t,t.l_desc),_(t,t.d_desc),a=x(t),i=t.opt_len+3+7>>>3,o=t.static_len+3+7>>>3,i>=o&&(i=o)):i=o=n+5,
i>=n+4&&-1!==e?k(t,e,n,r):t.strategy===A||o===i?(s(t,(B<<1)+(r?1:0),3),v(t,it,ot)):(s(t,(z<<1)+(r?1:0),3),
S(t,t.l_desc.max_code+1,t.d_desc.max_code+1,a+1),v(t,t.dyn_ltree,t.dyn_dtree)),f(t),
r&&m(t)}function M(t,e,n){return t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,
t.pending_buf[t.l_buf+t.last_lit]=255&n,t.last_lit++,0===e?t.dyn_ltree[2*n]++:(t.matches++,
e--,t.dyn_ltree[2*(at[n]+W+1)]++,t.dyn_dtree[2*i(e)]++),t.last_lit===t.lit_bufsize-1;
}var R=t("./utils"),A=4,T=0,L=1,I=2,F=0,B=1,z=2,D=3,P=258,N=29,W=256,$=W+1+N,H=30,U=19,V=2*$+1,G=15,q=16,K=7,Z=256,Y=16,X=17,Q=18,J=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],tt=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],et=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],nt=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],rt=512,it=new Array(2*($+2));
r(it);var ot=new Array(2*H);r(ot);var st=new Array(rt);r(st);var at=new Array(P-D+1);
r(at);var ut=new Array(N);r(ut);var ct=new Array(H);r(ct);var lt,ht,dt,ft=function(t,e,n,r,i){
this.static_tree=t,this.extra_bits=e,this.extra_base=n,this.elems=r,this.max_length=i,
this.has_stree=t&&t.length},mt=function(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e;
},bt=!1;n._tr_init=j,n._tr_stored_block=k,n._tr_flush_block=O,n._tr_tally=M,n._tr_align=C;
},{"./utils":13}],13:[function(t,e,n){var r="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;
n.assign=function(t){for(var e=Array.prototype.slice.call(arguments,1);e.length;){
var n=e.shift();if(n){if("object"!==$traceurRuntime["typeof"](n))throw new TypeError(n+"must be non-object");
for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])}}return t},n.shrinkBuf=function(t,e){
return t.length===e?t:t.subarray?t.subarray(0,e):(t.length=e,t)};var i={arraySet:function(t,e,n,r,i){
if(e.subarray)return void t.set(e.subarray(n,n+r),i);for(var o=0;r>o;o++)t[i+o]=e[n+o];
},flattenChunks:function(t){var e,n,r,i,o,s;for(r=0,e=0,n=t.length;n>e;e++)r+=t[e].length;
for(s=new Uint8Array(r),i=0,e=0,n=t.length;n>e;e++)o=t[e],s.set(o,i),i+=o.length;return s;
}},o={arraySet:function(t,e,n,r,i){for(var o=0;r>o;o++)t[i+o]=e[n+o]},flattenChunks:function(t){
return[].concat.apply([],t)}};n.setTyped=function(t){t?(n.Buf8=Uint8Array,n.Buf16=Uint16Array,
n.Buf32=Int32Array,n.assign(n,i)):(n.Buf8=Array,n.Buf16=Array,n.Buf32=Array,n.assign(n,o));
},n.setTyped(r)},{}],14:[function(t,e,n){function r(){this.next_in=null,this.next_in_index=0,
this.avail_in=0,this.total_in=0,this.next_out=null,this.next_out_index=0,this.avail_out=0,
this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}e.exports=r;
},{}]},{},[1])(1)});var t=window.pako;return{get default(){return t}}}),System.registerModule("utils/array",[],function(){
"use strict";var t=System.get("utils/function").once,e=function(t,e){var n=void 0!==arguments[2]?arguments[2]:!1;
if(t.length!==e.length)return!1;if(n)for(var r in t){var i=t[r];if(i!==e[r])return!1;
}else{for(var o=0;o<t.length;o+=1)if(!e.includes(t[o]))return!1;for(var o=0;o<e.length;o+=1)if(!t.includes(e[o]))return!1;
}return!0},n=function(e,n,r){if(e=Array.prototype.slice.call(e,0),0===e.length)r&&r();else{
var i=0,o=function(t){t?r&&r(t):(i+=1,i>=e.length&&r&&r())};e.forEach(function(e){
n(e,t(o))})}},r=function(e,n,r){if(e=Array.prototype.slice.call(e,0),0===e.length)r&&r();else{
var i=0,o=function(t){r&&r(t)},s=function(){i+=1,i>=e.length?r&&r():n(e[i],t(s),t(o));
};n(e[i],t(s),t(o))}};return{get compareArrays(){return e},get iterateParallel(){
return n},get iterateSeries(){return r}}}),System.registerModule("utils/artwork",[],function(){
"use strict";var t=System.get("libs/pako")["default"],e=function(e){for(var n=[],r=0,i=e.length;i>r;r+=1)n.push(e[r].charCodeAt(0));
var o=new Uint8Array(n);return t.gzip(o)},n=function(e){for(var n=t.inflate(e),r="",i=0,o=n.length;o>i;i+=1){
var s=String.fromCharCode(n[i]);r+=s}return r};return{get compressArtwork(){return e;
},get uncompressArtwork(){return n}}}),System.registerModule("utils/chrome",[],function(){
"use strict";var t=System.get("utils/time").nextTick,e=chrome.runtime.getManifest(),n=void 0===e.update_url,r=e.version,i=function(e){
chrome.runtime.getBackgroundPage(function(n){t(function(){e(n)})})},o=function(t,e){
chrome.fileSystem.restoreEntry(t,function(t){t?t.file(function(){return e(t)},function(){
return e(null)}):e(null)})},s=function(t){return t.name&&t.name.includes(".")?t.name.substring(t.name.lastIndexOf(".")+1).toLowerCase():null;
};return{get DEV_MODE(){return n},get APP_VERSION(){return r},get getBackgroundWindow(){
return i},get restoreFileEntry(){return o},get getFileExtension(){return s}}}),System.registerModule("utils/constants",[],function(){
"use strict";var t="http://www.w3.org/2000/svg",e="http://www.w3.org/1999/xlink",n="http://www.w3.org/1999/xhtml",r="http://www.w3.org/1998/Math/MathML",i="http://www.w3.org/2000/xmlns/";
return{get SVG_NAMESPACE(){return t},get XLINK_NAMESPACE(){return e},get XHTML_NAMESPACE(){
return n},get MATHML_NAMESPACE(){return r},get XMLNS_NAMESPACE(){return i}}}),System.registerModule("utils/dom",[],function(){
"use strict";var t=(System.get("utils/type").isFunction,System.get("utils/constants").SVG_NAMESPACE),e=function(t,e){
var n=void 0!==arguments[2]?arguments[2]:null;if(null===n){var r=e;return document.registerElement(t,r);
}var i=e,o=n;return document.registerElement(i,{"extends":t,prototype:o.prototype
})},n=function(e){var n,r,i,o,s=void 0!==arguments[1]?arguments[1]:null,a=e.split(":"),u=null;
if(1===a.length){var c=(n=a[Symbol.iterator](),(r=n.next()).done?void 0:r.value);u=document.createElement(c,s);
}else if(2===a.length){var l=a,h=(i=l[Symbol.iterator](),(o=i.next()).done?void 0:o.value),d=(o=i.next()).done?void 0:o.value;
"svg"===h&&(u=document.createElementNS(t,d,s))}return u};return{get registerElement(){
return e},get createElement(){return n}}}),System.registerModule("utils/event",[],function(){
"use strict";var t=System.get("utils/platform").OS_NAME,e=Math,n=e.sqrt,r=e.pow,i=function(t){
var e=o(t),n=s(t),r=n;return r.includes(e)||r.push(e),r},o=function(t){var e=null,n=t.keyIdentifier,r={
"U+00C0":"U+0060","U+00BD":"U+002D","U+00BB":"U+003D","U+00DB":"U+005B","U+00DD":"U+005D",
"U+00DC":"U+005C","U+00BA":"U+003B","U+00DE":"U+0027","U+00BC":"U+002C","U+00BE":"U+002E",
"U+00BF":"U+002F"};for(var i in r){var o=r[i];n===i&&(n=o)}if("U"===n[0]&&"+"===n[1]){
var s=parseInt(n.substring(2),16);27===s?e="Esc":8===s?e="Backspace":(e=String.fromCharCode(s),
"	"===e?e="Tab":" "===e&&(e="Space"))}else e="MacIntel"===navigator.platform?"Meta"===n?"Ctrl":"Control"===n?"Meta":n:"Control"===n?"Ctrl":"Win"===n||"Meta"===n?"Meta":n;
return e},s=function(t){var e,n,r=[],i=t.altKey,o=t.shiftKey;return e="MacIntel"===navigator.platform?t.metaKey:t.ctrlKey,
n="MacIntel"===navigator.platform?t.ctrlKey:t.metaKey,e&&r.push("Ctrl"),i&&r.push("Alt"),
o&&r.push("Shift"),n&&r.push("Meta"),r},a=function(e){var n=!1,r=!1,i=!1,o="",s=!0,a=!1,u=void 0;
try{for(var c=void 0,l=e[Symbol.iterator]();!(s=(c=l.next()).done);s=!0){var h=c.value;
"Ctrl"===h?n=!0:"Alt"===h?r=!0:"Shift"===h?i=!0:o=h}}catch(d){a=!0,u=d}finally{try{
s||null==l["return"]||l["return"]()}finally{if(a)throw u}}var f="";if("osx"===t||"ios"===t){
i&&(f+="⇧"),r&&(f+="⌥"),n&&(f+="⌘");var m={Up:"↑",Down:"↓",Left:"←",Right:"→",Backspace:"⌦"
};m[o]&&(o=m[o]),"Up"===o?o="↑":"Down"===o?o="↓":"Left"===o?o="←":"Right"===o&&(o="→");
}else n&&(f+="Ctrl+"),r&&(f+="Alt+"),i&&(f+="Shift+");return f+=o},u=function(t,e){
var i=void 0!==arguments[2]?arguments[2]:3,o=n(r(e.clientX-t.clientX,2)+r(e.clientY-t.clientY,2));
return i>o&&e.timeStamp-t.timeStamp<50?!1:!0};return{get getShortcutForKeyboardEvent(){
return i},get getKeyForKeyboardEvent(){return o},get getModKeysForUIEvent(){return s;
},get keyboardShortcutToString(){return a},get isMouseMoveIntentional(){return u}
}}),System.registerModule("utils/function",[],function(){"use strict";var t=arguments,e=function(e,n,r,i){
var o=null,s=null,a=function(){var a=t,u=function(){o=null,i||(s=e.apply(r,a))},c=i&&!o;
return clearTimeout(o),o=setTimeout(u,n),c&&(s=e.apply(r,a)),s};return a},n=function(t){
var e=!1,n=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];e===!1&&(e=!0,
t.apply(window,n))};return n};return{get debounce(){return e},get once(){return n;
}}}),System.registerModule("utils/object",[],function(){"use strict";var t=Object.keys,e=function(e){
var n=[],r=!0,i=!1,o=void 0;try{for(var s=void 0,a=t(e)[Symbol.iterator]();!(r=(s=a.next()).done);r=!0){
var u=s.value;n.push([u,e[u]])}}catch(c){i=!0,o=c}finally{try{r||null==a["return"]||a["return"]();
}finally{if(i)throw o}}return n},n=function(t,e){Object.observe(t,e)};return{get keys(){
return t},get entries(){return e},get observe(){return n}}}),System.registerModule("utils/platform",[],function(){
"use strict";var t=function(){return navigator.platform.startsWith("Win")?"windows":navigator.platform.startsWith("Mac")?"osx":"iPhone"===navigator.platform||"iPad"===navigator.platform?"ios":"Android"===navigator.platform?"android":navigator.userAgent.includes("CrOS")?"chromeos":navigator.platform.startsWith("Linux")?"linux":"other";
}();return{get OS_NAME(){return t}}}),System.registerModule("utils/time",[],function(){
"use strict";var t=function(t,e){var n=setTimeout(e,t);return n},e=function(t,e){
var n=setInterval(e,t);return n},n=function(t){requestAnimationFrame(t)};return{get createTimeout(){
return t},get createInterval(){return e},get nextTick(){return n}}}),System.registerModule("utils/type",[],function(){
"use strict";var t=function(t){return"function"==typeof t};return{get isFunction(){
return t}}});