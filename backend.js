"use strict";!function(e){function t(e,t,n){for(var r=[t],i=0;i<n.length;i++)r[i+1]=n[i];
var a=x(Function.prototype.bind,e,r);return a}function n(e,n){var r=new(t(e,null,n));
return r}function r(){return"__$"+Math.floor(1e9*Math.random())+"$"+ ++S+"$__"}function i(e){
return E[e]}function a(){var e=r();return E[e]=!0,e}function o(e,t,n){return[j,e,t,n];
}function s(e){return e&&e[0]===j}function u(){C=a(),Function.prototype.call=c(function(e){
var t=h(function(e){for(var t=[],n=1;n<arguments.length;++n)t[n-1]=arguments[n];var r=o(this,e,t);
return r},this,arguments);return t}),Function.prototype.apply=c(function(e,t){var n=h(function(e,t){
var n=o(this,e,t);return n},this,arguments);return n})}function c(e){return null===C&&u(),
e[C]=!0,e}function l(e){return!!e[C]}function h(e,t,n){var r=n[0];if(s(r))return r=x(e,t,r[3]);
for(r=o(e,t,n);;){if(r=l(e)?x(e,r[2],[r]):x(e,r[2],r[3]),!s(r))return r;e=r[1]}}function d(){
var e;return e=l(this)?n(this,[o(null,null,arguments)]):n(this,arguments)}if(!e.$traceurRuntime){
var f=Object,b=TypeError,m=f.create,v=f.defineProperty,p=f.freeze,g=f.getOwnPropertyNames,y=f.keys,_=(f.prototype.toString,
Object.preventExtensions),w=Object.seal,k=Object.isExtensible,x=Function.prototype.call.bind(Function.prototype.apply),S=0,E=m(null),j=Object.create(null),C=null;
!function(){function t(e){return{configurable:!0,enumerable:!1,value:e,writable:!0
}}function n(e){var t=new s(e);if(!(this instanceof n))return t;throw new TypeError("Symbol cannot be new'ed");
}function s(e){var t=r();v(this,$,{value:this}),v(this,N,{value:t}),v(this,B,{value:e
}),l(this),H[t]=this}function u(e){var t=e[U];return t&&t.self===e?t:k(e)?(V.hash.value=q++,
V.self.value=e,G.value=m(null,V),v(e,U,G),G.value):void 0}function l(e){return u(e),
p.apply(this,arguments)}function x(e){return u(e),_.apply(this,arguments)}function S(e){
return u(e),w.apply(this,arguments)}function j(e){return H[e]||E[e]}function C(e){
for(var t=[],n=0;n<e.length;n++)j(e[n])||t.push(e[n]);return t}function O(e){return C(g(e));
}function M(e){return C(y(e))}function T(e){for(var t=[],n=g(e),r=0;r<n.length;r++){
var i=H[n[r]];i&&t.push(i)}return t}function A(e){v(e,"getOwnPropertyNames",{value:O
}),v(e,"freeze",{value:l}),v(e,"preventExtensions",{value:x}),v(e,"seal",{value:S
}),v(e,"keys",{value:M})}function R(e){for(var t=1;t<arguments.length;t++)for(var n=g(arguments[t]),r=0;r<n.length;r++){
var i=n[r];"__esModule"===i||"default"===i||j(i)||!function(t,n){v(e,n,{get:function(){
return t[n]},enumerable:!0})}(arguments[t],n[r])}return e}function I(e){return null!=e&&("object"==typeof e||"function"==typeof e);
}function P(e){if(null==e)throw b();return f(e)}function L(e){if(null==e)throw new TypeError("Value cannot be converted to an Object");
return e}function F(e,t){e.Symbol?Z=!0:(e.Symbol=t,Object.getOwnPropertySymbols=T,
Z=!1),e.Symbol.iterator||(e.Symbol.iterator=t("Symbol.iterator")),e.Symbol.observer||(e.Symbol.observer=t("Symbol.observer"));
}function D(){return Z}function z(e){F(e,n),e.Reflect=e.Reflect||{},e.Reflect.global=e.Reflect.global||e,
A(e.Object)}var W=t,N=r(),B=r(),$=r(),H=m(null);v(n.prototype,"constructor",t(n)),
v(n.prototype,"toString",W(function(){var e=this[$];return e[N]})),v(n.prototype,"valueOf",W(function(){
var e=this[$];if(!e)throw TypeError("Conversion from symbol to string");return e[N];
})),v(s.prototype,"constructor",t(n)),v(s.prototype,"toString",{value:n.prototype.toString,
enumerable:!1}),v(s.prototype,"valueOf",{value:n.prototype.valueOf,enumerable:!1});
var U=a(),G={value:void 0},V={hash:{value:void 0},self:{value:void 0}},q=0;l(s.prototype);
var Z;z(e);var K=Z?function(e){return typeof e}:function(e){return e instanceof s?"symbol":typeof e;
};e.$traceurRuntime={call:h,checkObjectCoercible:L,construct:d,continuation:o,createPrivateName:a,
exportStar:R,getOwnHashObject:u,getOwnPropertyNames:g,hasNativeSymbol:D,initTailRecursiveFunction:c,
isObject:I,isPrivateName:i,isSymbolString:j,keys:y,options:{},setupGlobals:z,toObject:P,
"typeof":K}}()}}("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this),
function(){function e(e,t,n,r,i,a,o){var s=[];return e&&s.push(e,":"),n&&(s.push("//"),
t&&s.push(t,"@"),s.push(n),r&&s.push(":",r)),i&&s.push(i),a&&s.push("?",a),o&&s.push("#",o),
s.join("")}function t(e){return e.match(s)}function n(e){if("/"===e)return"/";for(var t="/"===e[0]?"/":"",n="/"===e.slice(-1)?"/":"",r=e.split("/"),i=[],a=0,o=0;o<r.length;o++){
var s=r[o];switch(s){case"":case".":break;case"..":i.length?i.pop():a++;break;default:
i.push(s)}}if(!t){for(;a-- >0;)i.unshift("..");0===i.length&&i.push(".")}return t+i.join("/")+n;
}function r(t){var r=t[u.PATH]||"";return r=n(r),t[u.PATH]=r,e(t[u.SCHEME],t[u.USER_INFO],t[u.DOMAIN],t[u.PORT],t[u.PATH],t[u.QUERY_DATA],t[u.FRAGMENT]);
}function i(e){var n=t(e);return r(n)}function a(e,n){var i=t(n),a=t(e);if(i[u.SCHEME])return r(i);
i[u.SCHEME]=a[u.SCHEME];for(var o=u.SCHEME;o<=u.PORT;o++)i[o]||(i[o]=a[o]);if("/"==i[u.PATH][0])return r(i);
var s=a[u.PATH],c=s.lastIndexOf("/");return s=s.slice(0,c+1)+i[u.PATH],i[u.PATH]=s,
r(i)}function o(e){if(!e)return!1;if("/"===e[0])return!0;var n=t(e);return n[u.SCHEME]?!0:!1;
}var s=new RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),u={
SCHEME:1,USER_INFO:2,DOMAIN:3,PORT:4,PATH:5,QUERY_DATA:6,FRAGMENT:7};$traceurRuntime.canonicalizeUrl=i,
$traceurRuntime.isAbsolute=o,$traceurRuntime.removeDotSegments=n,$traceurRuntime.resolveUrl=a;
}(),function(e){function t(e,t){this.url=e,this.value_=t}function n(e,t){this.message=this.constructor.name+": "+this.stripCause(t)+" in "+e,
t instanceof n||!t.stack?this.stack="":this.stack=this.stripStack(t.stack)}function r(e,t){
var n=[],r=t-3;0>r&&(r=0);for(var i=r;t>i;i++)n.push(e[i]);return n}function i(e,t){
var n=t+1;n>e.length-1&&(n=e.length-1);for(var r=[],i=t;n>=i;i++)r.push(e[i]);return r;
}function a(e){for(var t="",n=0;e-1>n;n++)t+="-";return t}function o(e,n){t.call(this,e,null),
this.func=n}function s(e){if(e){var t=p.normalize(e);return b[t]}}function u(e){var t=arguments[1],n=Object.create(null);
return Object.getOwnPropertyNames(e).forEach(function(r){var i,a;if(t===v){var o=Object.getOwnPropertyDescriptor(e,r);
o.get&&(i=o.get)}i||(a=e[r],i=function(){return a}),Object.defineProperty(n,r,{get:i,
enumerable:!0})}),Object.preventExtensions(n),n}var c,l=$traceurRuntime,h=l.canonicalizeUrl,d=l.resolveUrl,f=l.isAbsolute,b=Object.create(null);
c=e.location&&e.location.href?d(e.location.href,"./"):"",n.prototype=Object.create(Error.prototype),
n.prototype.constructor=n,n.prototype.stripError=function(e){return e.replace(/.*Error:/,this.constructor.name+":");
},n.prototype.stripCause=function(e){return e?e.message?this.stripError(e.message):e+"":"";
},n.prototype.loadedBy=function(e){this.stack+="\n loaded by "+e},n.prototype.stripStack=function(e){
var t=[];return e.split("\n").some(function(e){return/UncoatedModuleInstantiator/.test(e)?!0:void t.push(e);
}),t[0]=this.stripError(t[0]),t.join("\n")},o.prototype=Object.create(t.prototype),
o.prototype.getUncoatedModule=function(){var t=this;if(this.value_)return this.value_;
try{var o;return void 0!==typeof $traceurRuntime&&$traceurRuntime.require&&(o=$traceurRuntime.require.bind(null,this.url)),
this.value_=this.func.call(e,o)}catch(s){if(s instanceof n)throw s.loadedBy(this.url),
s;if(s.stack){var u=this.func.toString().split("\n"),c=[];s.stack.split("\n").some(function(e,n){
if(e.indexOf("UncoatedModuleInstantiator.getUncoatedModule")>0)return!0;var o=/(at\s[^\s]*\s).*>:(\d*):(\d*)\)/.exec(e);
if(o){var s=parseInt(o[2],10);c=c.concat(r(u,s)),1===n?c.push(a(o[3])+"^ "+t.url):c.push(a(o[3])+"^"),
c=c.concat(i(u,s)),c.push("= = = = = = = = =")}else c.push(e)}),s.stack=c.join("\n");
}throw new n(this.url,s)}};var m=Object.create(null),v={},p={normalize:function(e,t,n){
if("string"!=typeof e)throw new TypeError("module name must be a string, not "+typeof e);
if(f(e))return h(e);if(/[^\.]\/\.\.\//.test(e))throw new Error("module name embeds /../: "+e);
return"."===e[0]&&t?d(t,e):h(e)},get:function(e){var t=s(e);if(t){var n=m[t.url];return n?n:(n=u(t.getUncoatedModule(),v),
m[t.url]=n)}},set:function(e,t){e=String(e),b[e]=new o(e,function(){return t}),m[e]=t;
},get baseURL(){return c},set baseURL(e){c=String(e)},registerModule:function(e,t,n){
var r=p.normalize(e);if(b[r])throw new Error("duplicate module named "+r);b[r]=new o(r,n);
},bundleStore:Object.create(null),register:function(e,t,n){t&&(t.length||n.length)?this.bundleStore[e]={
deps:t,execute:function(){var e=arguments,r={};t.forEach(function(t,n){return r[t]=e[n];
});var i=n.call(this,r);return i.execute.call(this),i.exports}}:this.registerModule(e,t,n);
},getAnonymousModule:function(t){return new u(t.call(e),v)}},g=new u({ModuleStore:p
});p.set("@traceur/src/runtime/ModuleStore.js",g);var y=$traceurRuntime.setupGlobals;
$traceurRuntime.setupGlobals=function(e){y(e)},$traceurRuntime.ModuleStore=p,e.System={
register:p.register.bind(p),registerModule:p.registerModule.bind(p),get:p.get,set:p.set,
normalize:p.normalize}}("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this),
System.registerModule("traceur-runtime@0.0.92/src/runtime/async.js",[],function(){
function e(){}function t(){}function n(e){return e.prototype=c(t.prototype),e.__proto__=t,
e}function r(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i=c(t.prototype);
return i[h]=this,i[d]=n,i[f]=e,i}function i(e,t){return new Promise(function(n,r){
var i=e({next:function(e){return t.call(i,e)},"throw":function(e){r(e)},"return":function(e){
n(e)}})})}function a(e){return Promise.resolve().then(e)}function o(e,t){return new p(e,t);
}if("object"!=typeof $traceurRuntime)throw new Error("traceur runtime not found.");
var s=$traceurRuntime.createPrivateName,u=Object,c=u.create,l=u.defineProperty,h=s(),d=s(),f=s();
e.prototype=t,t.constructor=e,l(t,"constructor",{enumerable:!1});var b=function(){
function e(e){var t=this;this.decoratedObserver=$traceurRuntime.createDecoratedGenerator(e,function(){
t.done=!0}),this.done=!1,this.inReturn=!1}return $traceurRuntime.createClass(e,{"throw":function(e){
if(!this.inReturn)throw e},"yield":function(e){if(this.done)throw void(this.inReturn=!0);
var t;try{t=this.decoratedObserver.next(e)}catch(n){throw this.done=!0,n}if(void 0!==t){
if(t.done)throw this.done=!0,void(this.inReturn=!0);return t.value}},yieldFor:function(e){
var t=this;return $traceurRuntime.observeForEach(e[Symbol.observer].bind(e),function(e){
if(t.done)return void this["return"]();var n;try{n=t.decoratedObserver.next(e)}catch(r){
throw t.done=!0,r}if(void 0!==n)return n.done&&(t.done=!0),n})}},{})}();t.prototype[Symbol.observer]=function(e){
var t=this[f],n=new b(e);return $traceurRuntime.schedule(function(){return t(n)}).then(function(e){
n.done||n.decoratedObserver["return"](e)})["catch"](function(e){n.done||n.decoratedObserver["throw"](e);
}),n.decoratedObserver},l(t.prototype,Symbol.observer,{enumerable:!1});var m=Symbol(),v=Symbol(),p=function(){
function e(e,t){this[m]=e,this[v]=t}return $traceurRuntime.createClass(e,{next:function(e){
var t=this[m].next(e);return void 0!==t&&t.done&&this[v].call(this),t},"throw":function(e){
return this[v].call(this),this[m]["throw"](e)},"return":function(e){return this[v].call(this),
this[m]["return"](e)}},{})}();return Array.prototype[Symbol.observer]=function(e){
var t=!1,n=o(e,function(){return t=!0}),r=!0,i=!1,a=void 0;try{for(var s=void 0,u=this[Symbol.iterator]();!(r=(s=u.next()).done);r=!0){
var c=s.value;if(n.next(c),t)return}}catch(l){i=!0,a=l}finally{try{r||null==u["return"]||u["return"]();
}finally{if(i)throw a}}return n["return"](),n},l(Array.prototype,Symbol.observer,{
enumerable:!1}),$traceurRuntime.initAsyncGeneratorFunction=n,$traceurRuntime.createAsyncGeneratorInstance=r,
$traceurRuntime.observeForEach=i,$traceurRuntime.schedule=a,$traceurRuntime.createDecoratedGenerator=o,
{}}),System.registerModule("traceur-runtime@0.0.92/src/runtime/classes.js",[],function(){
function e(e,t){var n=g(e);do{var r=m(n,t);if(r)return r;n=g(n)}while(n)}function t(e){
return e.__proto__}function n(t,n,r){var i=e(n,r);if(i){var a=i.value;return a?a:i.get?i.get.call(t):a;
}}function r(t,n,r,i){var a=e(n,r);if(a&&a.set)return a.set.call(t,i),i;throw l("super has no setter '"+r+"'.");
}function i(e,t){v(e).forEach(t),p(e).forEach(t)}function a(e){var t={};return i(e,function(n){
t[n]=m(e,n),t[n].enumerable=!1}),t}function o(e){i(e,function(t){b(e,t,y)})}function s(e,t,n,r){
return b(t,"constructor",{value:e,configurable:!0,enumerable:!1,writable:!0}),arguments.length>3?("function"==typeof r&&(e.__proto__=r),
e.prototype=d(u(r),a(t))):(o(t),e.prototype=t),b(e,"prototype",{configurable:!1,writable:!1
}),f(e,a(n))}function u(e){if("function"==typeof e){var t=e.prototype;if(c(t)===t||null===t)return e.prototype;
throw new l("super prototype must be an Object or null")}if(null===e)return null;throw new l("Super expression must either be null or a function, not "+typeof e+".");
}var c=Object,l=TypeError,h=Object,d=h.create,f=h.defineProperties,b=h.defineProperty,m=h.getOwnPropertyDescriptor,v=h.getOwnPropertyNames,p=h.getOwnPropertySymbols,g=h.getPrototypeOf,y={
enumerable:!1};return $traceurRuntime.createClass=s,$traceurRuntime.superConstructor=t,
$traceurRuntime.superGet=n,$traceurRuntime.superSet=r,{}}),System.registerModule("traceur-runtime@0.0.92/src/runtime/destructuring.js",[],function(){
function e(e){for(var t,n=[],r=0;!(t=e.next()).done;)n[r++]=t.value;return n}return $traceurRuntime.iteratorToArray=e,
{}}),System.registerModule("traceur-runtime@0.0.92/src/runtime/generators.js",[],function(){
function e(e){return{configurable:!0,enumerable:!1,value:e,writable:!0}}function t(e){
return new Error("Traceur compiler bug: invalid state in state machine: "+e)}function n(){
this.state=0,this.GState=g,this.storedException=void 0,this.finallyFallThrough=void 0,
this.sent_=void 0,this.returnValue=void 0,this.oldReturnValue=void 0,this.tryStack_=[];
}function r(e,t,n,r){switch(e.GState){case y:throw new Error('"'+n+'" on executing generator');
case w:if("next"==n)return{value:void 0,done:!0};if(r===S)return{value:e.returnValue,
done:!0};throw r;case g:if("throw"===n){if(e.GState=w,r===S)return{value:e.returnValue,
done:!0};throw r}if(void 0!==r)throw d("Sent value to newborn generator");case _:
e.GState=y,e.action=n,e.sent=r;var i;try{i=t(e)}catch(a){if(a!==S)throw a;i=e}var o=i===e;
return o&&(i=e.returnValue),e.GState=o?w:_,{value:i,done:o}}}function i(){}function a(){}
function o(e,t,r){var i=l(e,r),a=new n,o=m(t.prototype);return o[E]=a,o[j]=i,o}function s(e){
return e.prototype=m(a.prototype),e.__proto__=a,e}function u(){n.call(this),this.err=void 0;
var e=this;e.result=new Promise(function(t,n){e.resolve=t,e.reject=n})}function c(e,t){
var n=l(e,t),r=new u;return r.createCallback=function(e){return function(t){r.state=e,
r.value=t,n(r)}},r.errback=function(e){h(r,e),n(r)},n(r),r.result}function l(e,t){
return function(n){for(;;)try{return e.call(t,n)}catch(r){h(n,r)}}}function h(e,t){
e.storedException=t;var n=e.tryStack_[e.tryStack_.length-1];return n?(e.state=void 0!==n["catch"]?n["catch"]:n["finally"],
void(void 0!==n.finallyFallThrough&&(e.finallyFallThrough=n.finallyFallThrough))):void e.handleException(t);
}if("object"!=typeof $traceurRuntime)throw new Error("traceur runtime not found.");
var d=TypeError,f=$traceurRuntime.createPrivateName,b=Object,m=b.create,v=b.defineProperties,p=b.defineProperty,g=0,y=1,_=2,w=3,k=-2,x=-3,S={};
n.prototype={pushTry:function(e,t){if(null!==t){for(var n=null,r=this.tryStack_.length-1;r>=0;r--)if(void 0!==this.tryStack_[r]["catch"]){
n=this.tryStack_[r]["catch"];break}null===n&&(n=x),this.tryStack_.push({"finally":t,
finallyFallThrough:n})}null!==e&&this.tryStack_.push({"catch":e})},popTry:function(){
this.tryStack_.pop()},maybeUncatchable:function(){if(this.storedException===S)throw S;
},get sent(){return this.maybeThrow(),this.sent_},set sent(e){this.sent_=e},get sentIgnoreThrow(){
return this.sent_},maybeThrow:function(){if("throw"===this.action)throw this.action="next",
this.sent_},end:function(){switch(this.state){case k:return this;case x:throw this.storedException;
default:throw t(this.state)}},handleException:function(e){throw this.GState=w,this.state=k,
e},wrapYieldStar:function(e){var t=this;return{next:function(t){return e.next(t)},
"throw":function(n){var r;if(n===S){if(e["return"]){if(r=e["return"](t.returnValue),
!r.done)return t.returnValue=t.oldReturnValue,r;t.returnValue=r.value}throw n}if(e["throw"])return e["throw"](n);
throw e["return"]&&e["return"](),d("Inner iterator does not have a throw method");
}}}};var E=f(),j=f();return i.prototype=a,p(a,"constructor",e(i)),a.prototype={constructor:a,
next:function(e){return r(this[E],this[j],"next",e)},"throw":function(e){return r(this[E],this[j],"throw",e);
},"return":function(e){return this[E].oldReturnValue=this[E].returnValue,this[E].returnValue=e,
r(this[E],this[j],"throw",S)}},v(a.prototype,{constructor:{enumerable:!1},next:{enumerable:!1
},"throw":{enumerable:!1},"return":{enumerable:!1}}),Object.defineProperty(a.prototype,Symbol.iterator,e(function(){
return this})),u.prototype=m(n.prototype),u.prototype.end=function(){switch(this.state){
case k:this.resolve(this.returnValue);break;case x:this.reject(this.storedException);
break;default:this.reject(t(this.state))}},u.prototype.handleException=function(){
this.state=x},$traceurRuntime.asyncWrap=c,$traceurRuntime.initGeneratorFunction=s,
$traceurRuntime.createGeneratorInstance=o,{}}),System.registerModule("traceur-runtime@0.0.92/src/runtime/relativeRequire.js",[],function(){
function e(e,n){function r(e){return"/"===e.slice(-1)}function i(e){return"/"===e[0];
}function a(e){return"."===e[0]}return t=t||"undefined"!=typeof require&&require("path"),
r(n)||i(n)?void 0:a(n)?require(t.resolve(t.dirname(e),n)):require(n)}var t;return $traceurRuntime.require=e,
{}}),System.registerModule("traceur-runtime@0.0.92/src/runtime/spread.js",[],function(){
function e(){for(var e,t=[],n=0,r=0;r<arguments.length;r++){var i=$traceurRuntime.checkObjectCoercible(arguments[r]);
if("function"!=typeof i[Symbol.iterator])throw new TypeError("Cannot spread non-iterable object.");
for(var a=i[Symbol.iterator]();!(e=a.next()).done;)t[n++]=e.value}return t}return $traceurRuntime.spread=e,
{}}),System.registerModule("traceur-runtime@0.0.92/src/runtime/template.js",[],function(){
function e(e){var t=arguments[1],o=e.join("${}"),s=a[o];return s?s:(t||(t=i.call(e)),
a[o]=r(n(t,"raw",{value:r(e)})))}var t=Object,n=t.defineProperty,r=t.freeze,i=Array.prototype.slice,a=Object.create(null);
return $traceurRuntime.getTemplateObject=e,{}}),System.registerModule("traceur-runtime@0.0.92/src/runtime/type-assertions.js",[],function(){
function e(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];var a=r,o=$traceurRuntime.getOwnHashObject(e).hash;
a[o]||(a[o]=Object.create(null)),a=a[o];for(var s=0;s<t.length-1;s++)o=$traceurRuntime.getOwnHashObject(t[s]).hash,
a[o]||(a[o]=Object.create(null)),a=a[o];var u=t[t.length-1];return o=$traceurRuntime.getOwnHashObject(u).hash,
a[o]||(a[o]=new n(e,t)),a[o]}var t={any:{name:"any"},"boolean":{name:"boolean"},number:{
name:"number"},string:{name:"string"},symbol:{name:"symbol"},"void":{name:"void"}
},n=function(){function e(e,t){this.type=e,this.argumentTypes=t}return $traceurRuntime.createClass(e,{},{});
}(),r=Object.create(null);return $traceurRuntime.GenericType=n,$traceurRuntime.genericType=e,
$traceurRuntime.type=t,{}}),System.registerModule("traceur-runtime@0.0.92/src/runtime/runtime-modules.js",[],function(){
return System.get("traceur-runtime@0.0.92/src/runtime/relativeRequire.js"),System.get("traceur-runtime@0.0.92/src/runtime/spread.js"),
System.get("traceur-runtime@0.0.92/src/runtime/destructuring.js"),System.get("traceur-runtime@0.0.92/src/runtime/classes.js"),
System.get("traceur-runtime@0.0.92/src/runtime/async.js"),System.get("traceur-runtime@0.0.92/src/runtime/generators.js"),
System.get("traceur-runtime@0.0.92/src/runtime/template.js"),System.get("traceur-runtime@0.0.92/src/runtime/type-assertions.js"),
{}}),System.get("traceur-runtime@0.0.92/src/runtime/runtime-modules.js"),System.registerModule("traceur-runtime@0.0.92/src/runtime/polyfills/utils.js",[],function(){
function e(e){return e>>>0}function t(e){return e&&("object"==typeof e||"function"==typeof e);
}function n(e){return"function"==typeof e}function r(e){return"number"==typeof e}
function i(e){return e=+e,_(e)?0:0!==e&&y(e)?e>0?g(e):p(e):e}function a(e){var t=i(e);
return 0>t?0:k(t,S)}function o(e){return t(e)?e[Symbol.iterator]:void 0}function s(e){
return n(e)}function u(e,t){return{value:e,done:t}}function c(e,t,n){t in e||Object.defineProperty(e,t,n);
}function l(e,t,n){c(e,t,{value:n,configurable:!0,enumerable:!1,writable:!0})}function h(e,t,n){
c(e,t,{value:n,configurable:!1,enumerable:!1,writable:!1})}function d(e,t){for(var n=0;n<t.length;n+=2){
var r=t[n],i=t[n+1];l(e,r,i)}}function f(e,t){for(var n=0;n<t.length;n+=2){var r=t[n],i=t[n+1];
h(e,r,i)}}function b(e,t,n){n&&n.iterator&&!e[n.iterator]&&(e["@@iterator"]&&(t=e["@@iterator"]),
Object.defineProperty(e,n.iterator,{value:t,configurable:!0,enumerable:!1,writable:!0
}))}function m(e){E.push(e)}function v(e){E.forEach(function(t){return t(e)})}var p=Math.ceil,g=Math.floor,y=isFinite,_=isNaN,w=Math.pow,k=Math.min,x=$traceurRuntime.toObject,S=w(2,53)-1,E=[];
return{get toObject(){return x},get toUint32(){return e},get isObject(){return t},
get isCallable(){return n},get isNumber(){return r},get toInteger(){return i},get toLength(){
return a},get checkIterable(){return o},get isConstructor(){return s},get createIteratorResultObject(){
return u},get maybeDefine(){return c},get maybeDefineMethod(){return l},get maybeDefineConst(){
return h},get maybeAddFunctions(){return d},get maybeAddConsts(){return f},get maybeAddIterator(){
return b},get registerPolyfill(){return m},get polyfillAll(){return v}}}),System.registerModule("traceur-runtime@0.0.92/src/runtime/polyfills/Map.js",[],function(){
function e(e,t){if(a(t)){var n=u(t);return n&&e.objectIndex_[n.hash]}return"string"==typeof t?e.stringIndex_[t]:e.primitiveIndex_[t];
}function t(e){e.entries_=[],e.objectIndex_=Object.create(null),e.stringIndex_=Object.create(null),
e.primitiveIndex_=Object.create(null),e.deletedCount_=0}function n(e){var t=e,n=t.Map,r=t.Symbol;
if(!(n&&$traceurRuntime.hasNativeSymbol()&&n.prototype[r.iterator]&&n.prototype.entries))return!0;
try{return 1!==new n([[]]).size}catch(i){return!1}}function r(e){n(e)&&(e.Map=h)}
var i=System.get("traceur-runtime@0.0.92/src/runtime/polyfills/utils.js"),a=i.isObject,o=i.registerPolyfill,s=$traceurRuntime,u=s.getOwnHashObject,c=(s.hasNativeSymbol,
Object.prototype.hasOwnProperty),l={},h=function(){function n(){var e,n,r=arguments[0];
if(!a(this))throw new TypeError("Map called on incompatible type");if(c.call(this,"entries_"))throw new TypeError("Map can not be reentrantly initialised");
if(t(this),null!==r&&void 0!==r){var i=!0,o=!1,s=void 0;try{for(var u=void 0,l=r[Symbol.iterator]();!(i=(u=l.next()).done);i=!0){
var h=u.value,d=(e=h[Symbol.iterator](),(n=e.next()).done?void 0:n.value),f=(n=e.next()).done?void 0:n.value;
this.set(d,f)}}catch(b){o=!0,s=b}finally{try{i||null==l["return"]||l["return"]()}finally{
if(o)throw s}}}}return $traceurRuntime.createClass(n,{get size(){return this.entries_.length/2-this.deletedCount_;
},get:function(t){var n=e(this,t);return void 0!==n?this.entries_[n+1]:void 0},set:function(t,n){
var r=a(t),i="string"==typeof t,o=e(this,t);if(void 0!==o)this.entries_[o+1]=n;else if(o=this.entries_.length,
this.entries_[o]=t,this.entries_[o+1]=n,r){var s=u(t),c=s.hash;this.objectIndex_[c]=o;
}else i?this.stringIndex_[t]=o:this.primitiveIndex_[t]=o;return this},has:function(t){
return void 0!==e(this,t)},"delete":function(e){var t,n,r=a(e),i="string"==typeof e;
if(r){var o=u(e);o&&(t=this.objectIndex_[n=o.hash],delete this.objectIndex_[n])}else i?(t=this.stringIndex_[e],
delete this.stringIndex_[e]):(t=this.primitiveIndex_[e],delete this.primitiveIndex_[e]);
return void 0!==t?(this.entries_[t]=l,this.entries_[t+1]=void 0,this.deletedCount_++,
!0):!1},clear:function(){t(this)},forEach:function(e){for(var t=arguments[1],n=0;n<this.entries_.length;n+=2){
var r=this.entries_[n],i=this.entries_[n+1];r!==l&&e.call(t,i,r,this)}},entries:$traceurRuntime.initGeneratorFunction(function r(){
var e,t,n;return $traceurRuntime.createGeneratorInstance(function(r){for(;;)switch(r.state){
case 0:e=0,r.state=12;break;case 12:r.state=e<this.entries_.length?8:-2;break;case 4:
e+=2,r.state=12;break;case 8:t=this.entries_[e],n=this.entries_[e+1],r.state=9;break;
case 9:r.state=t===l?4:6;break;case 6:return r.state=2,[t,n];case 2:r.maybeThrow(),
r.state=4;break;default:return r.end()}},r,this)}),keys:$traceurRuntime.initGeneratorFunction(function i(){
var e,t,n;return $traceurRuntime.createGeneratorInstance(function(r){for(;;)switch(r.state){
case 0:e=0,r.state=12;break;case 12:r.state=e<this.entries_.length?8:-2;break;case 4:
e+=2,r.state=12;break;case 8:t=this.entries_[e],n=this.entries_[e+1],r.state=9;break;
case 9:r.state=t===l?4:6;break;case 6:return r.state=2,t;case 2:r.maybeThrow(),r.state=4;
break;default:return r.end()}},i,this)}),values:$traceurRuntime.initGeneratorFunction(function o(){
var e,t,n;return $traceurRuntime.createGeneratorInstance(function(r){for(;;)switch(r.state){
case 0:e=0,r.state=12;break;case 12:r.state=e<this.entries_.length?8:-2;break;case 4:
e+=2,r.state=12;break;case 8:t=this.entries_[e],n=this.entries_[e+1],r.state=9;break;
case 9:r.state=t===l?4:6;break;case 6:return r.state=2,n;case 2:r.maybeThrow(),r.state=4;
break;default:return r.end()}},o,this)})},{})}();return Object.defineProperty(h.prototype,Symbol.iterator,{
configurable:!0,writable:!0,value:h.prototype.entries}),o(r),{get Map(){return h},
get polyfillMap(){return r}}}),System.get("traceur-runtime@0.0.92/src/runtime/polyfills/Map.js"),
System.registerModule("traceur-runtime@0.0.92/src/runtime/polyfills/Set.js",[],function(){
function e(e){e.map_=new o}function t(e){var t=e,n=t.Set,r=t.Symbol;if(!(n&&$traceurRuntime.hasNativeSymbol()&&n.prototype[r.iterator]&&n.prototype.values))return!0;
try{return 1!==new n([1]).size}catch(i){return!1}}function n(e){t(e)&&(e.Set=u)}var r=System.get("traceur-runtime@0.0.92/src/runtime/polyfills/utils.js"),i=r.isObject,a=r.registerPolyfill,o=System.get("traceur-runtime@0.0.92/src/runtime/polyfills/Map.js").Map,s=($traceurRuntime.getOwnHashObject,
Object.prototype.hasOwnProperty),u=function(){function t(){var t=arguments[0];if(!i(this))throw new TypeError("Set called on incompatible type");
if(s.call(this,"map_"))throw new TypeError("Set can not be reentrantly initialised");
if(e(this),null!==t&&void 0!==t){var n=!0,r=!1,a=void 0;try{for(var o=void 0,u=t[Symbol.iterator]();!(n=(o=u.next()).done);n=!0){
var c=o.value;this.add(c)}}catch(l){r=!0,a=l}finally{try{n||null==u["return"]||u["return"]();
}finally{if(r)throw a}}}}return $traceurRuntime.createClass(t,{get size(){return this.map_.size;
},has:function(e){return this.map_.has(e)},add:function(e){return this.map_.set(e,e),
this},"delete":function(e){return this.map_["delete"](e)},clear:function(){return this.map_.clear();
},forEach:function(e){var t=arguments[1],n=this;return this.map_.forEach(function(r,i){
e.call(t,i,i,n)})},values:$traceurRuntime.initGeneratorFunction(function n(){var e,t;
return $traceurRuntime.createGeneratorInstance(function(n){for(;;)switch(n.state){
case 0:e=n.wrapYieldStar(this.map_.keys()[Symbol.iterator]()),n.sent=void 0,n.action="next",
n.state=12;break;case 12:t=e[n.action](n.sentIgnoreThrow),n.state=9;break;case 9:
n.state=t.done?3:2;break;case 3:n.sent=t.value,n.state=-2;break;case 2:return n.state=12,
t.value;default:return n.end()}},n,this)}),entries:$traceurRuntime.initGeneratorFunction(function r(){
var e,t;return $traceurRuntime.createGeneratorInstance(function(n){for(;;)switch(n.state){
case 0:e=n.wrapYieldStar(this.map_.entries()[Symbol.iterator]()),n.sent=void 0,n.action="next",
n.state=12;break;case 12:t=e[n.action](n.sentIgnoreThrow),n.state=9;break;case 9:
n.state=t.done?3:2;break;case 3:n.sent=t.value,n.state=-2;break;case 2:return n.state=12,
t.value;default:return n.end()}},r,this)})},{})}();return Object.defineProperty(u.prototype,Symbol.iterator,{
configurable:!0,writable:!0,value:u.prototype.values}),Object.defineProperty(u.prototype,"keys",{
configurable:!0,writable:!0,value:u.prototype.values}),a(n),{get Set(){return u},
get polyfillSet(){return n}}}),System.get("traceur-runtime@0.0.92/src/runtime/polyfills/Set.js"),
System.registerModule("traceur-runtime@0.0.92/node_modules/rsvp/lib/rsvp/asap.js",[],function(){
function e(e,t){d[s]=e,d[s+1]=t,s+=2,2===s&&o()}function t(){return function(){process.nextTick(a);
}}function n(){var e=0,t=new l(a),n=document.createTextNode("");return t.observe(n,{
characterData:!0}),function(){n.data=e=++e%2}}function r(){var e=new MessageChannel;
return e.port1.onmessage=a,function(){e.port2.postMessage(0)}}function i(){return function(){
setTimeout(a,1)}}function a(){for(var e=0;s>e;e+=2){var t=d[e],n=d[e+1];t(n),d[e]=void 0,
d[e+1]=void 0}s=0}var o,s=0,u=e,c="undefined"!=typeof window?window:{},l=c.MutationObserver||c.WebKitMutationObserver,h="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,d=new Array(1e3);
return o="undefined"!=typeof process&&"[object process]"==={}.toString.call(process)?t():l?n():h?r():i(),
{get default(){return u}}}),System.registerModule("traceur-runtime@0.0.92/src/runtime/polyfills/Promise.js",[],function(){
function e(e){return e&&"object"==typeof e&&void 0!==e.status_}function t(e){return e;
}function n(e){throw e}function r(e){var r=void 0!==arguments[1]?arguments[1]:t,a=void 0!==arguments[2]?arguments[2]:n,o=i(e.constructor);
switch(e.status_){case void 0:throw TypeError;case 0:e.onResolve_.push(r,o),e.onReject_.push(a,o);
break;case 1:l(e.value_,[r,o]);break;case-1:l(e.value_,[a,o])}return o.promise}function i(e){
if(this===y){var t=o(new y(p));return{promise:t,resolve:function(e){s(t,e)},reject:function(e){
u(t,e)}}}var n={};return n.promise=new e(function(e,t){n.resolve=e,n.reject=t}),n;
}function a(e,t,n,r,i){return e.status_=t,e.value_=n,e.onResolve_=r,e.onReject_=i,
e}function o(e){return a(e,0,void 0,[],[])}function s(e,t){c(e,1,t,e.onResolve_)}
function u(e,t){c(e,-1,t,e.onReject_)}function c(e,t,n,r){0===e.status_&&(l(n,r),
a(e,t,n))}function l(e,t){m(function(){for(var n=0;n<t.length;n+=2)h(e,t[n],t[n+1]);
})}function h(t,n,i){try{var a=n(t);if(a===i.promise)throw new TypeError;e(a)?r(a,i.resolve,i.reject):i.resolve(a);
}catch(o){try{i.reject(o)}catch(o){}}}function d(e){return e&&("object"==typeof e||"function"==typeof e);
}function f(t,n){if(!e(n)&&d(n)){var r;try{r=n.then}catch(a){var o=_.call(t,a);return n[w]=o,
o}if("function"==typeof r){var s=n[w];if(s)return s;var u=i(t);n[w]=u.promise;try{
r.call(n,u.resolve,u.reject)}catch(a){u.reject(a)}return u.promise}}return n}function b(e){
e.Promise||(e.Promise=g)}var m=System.get("traceur-runtime@0.0.92/node_modules/rsvp/lib/rsvp/asap.js")["default"],v=System.get("traceur-runtime@0.0.92/src/runtime/polyfills/utils.js").registerPolyfill,p={},g=function(){
function c(e){if(e!==p){if("function"!=typeof e)throw new TypeError;var t=o(this);
try{e(function(e){s(t,e)},function(e){u(t,e)})}catch(n){u(t,n)}}}return $traceurRuntime.createClass(c,{
"catch":function(e){return this.then(void 0,e)},then:function(i,a){"function"!=typeof i&&(i=t),
"function"!=typeof a&&(a=n);var o=this,s=this.constructor;return r(this,function(t){
return t=f(s,t),t===o?a(new TypeError):e(t)?t.then(i,a):i(t)},a)}},{resolve:function(t){
return this===y?e(t)?t:a(new y(p),1,t):new this(function(e,n){e(t)})},reject:function(e){
return this===y?a(new y(p),-1,e):new this(function(t,n){n(e)})},all:function(e){var t=i(this),n=[];
try{var r=function(e){return function(r){n[e]=r,0===--a&&t.resolve(n)}},a=0,o=0,s=!0,u=!1,c=void 0;
try{for(var l=void 0,h=e[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var d=l.value,f=r(o);
this.resolve(d).then(f,function(e){t.reject(e)}),++o,++a}}catch(b){u=!0,c=b}finally{
try{s||null==h["return"]||h["return"]()}finally{if(u)throw c}}0===a&&t.resolve(n);
}catch(m){t.reject(m)}return t.promise},race:function(e){var t=i(this);try{for(var n=0;n<e.length;n++)this.resolve(e[n]).then(function(e){
t.resolve(e)},function(e){t.reject(e)})}catch(r){t.reject(r)}return t.promise}})}(),y=g,_=y.reject,w="@@thenable";
return v(b),{get Promise(){return g},get polyfillPromise(){return b}}}),System.get("traceur-runtime@0.0.92/src/runtime/polyfills/Promise.js"),
System.registerModule("traceur-runtime@0.0.92/src/runtime/polyfills/StringIterator.js",[],function(){
function e(e){var t=String(e),n=Object.create(s.prototype);return n[a]=t,n[o]=0,n;
}var t=System.get("traceur-runtime@0.0.92/src/runtime/polyfills/utils.js"),n=t.createIteratorResultObject,r=t.isObject,i=Object.prototype.hasOwnProperty,a=Symbol("iteratedString"),o=Symbol("stringIteratorNextIndex"),s=function(){
function e(){}var t;return $traceurRuntime.createClass(e,(t={},Object.defineProperty(t,"next",{
value:function(){var e=this;if(!r(e)||!i.call(e,a))throw new TypeError("this must be a StringIterator object");
var t=e[a];if(void 0===t)return n(void 0,!0);var s=e[o],u=t.length;if(s>=u)return e[a]=void 0,
n(void 0,!0);var c,l=t.charCodeAt(s);if(55296>l||l>56319||s+1===u)c=String.fromCharCode(l);else{
var h=t.charCodeAt(s+1);c=56320>h||h>57343?String.fromCharCode(l):String.fromCharCode(l)+String.fromCharCode(h);
}return e[o]=s+c.length,n(c,!1)},configurable:!0,enumerable:!0,writable:!0}),Object.defineProperty(t,Symbol.iterator,{
value:function(){return this},configurable:!0,enumerable:!0,writable:!0}),t),{})}();
return{get createStringIterator(){return e}}}),System.registerModule("traceur-runtime@0.0.92/src/runtime/polyfills/String.js",[],function(){
function e(e){var t=String(this);if(null==this||"[object RegExp]"==b.call(e))throw TypeError();
var n=t.length,r=String(e),i=(r.length,arguments.length>1?arguments[1]:void 0),a=i?Number(i):0;
isNaN(a)&&(a=0);var o=Math.min(Math.max(a,0),n);return m.call(t,r,a)==o}function t(e){
var t=String(this);if(null==this||"[object RegExp]"==b.call(e))throw TypeError();var n=t.length,r=String(e),i=r.length,a=n;
if(arguments.length>1){var o=arguments[1];void 0!==o&&(a=o?Number(o):0,isNaN(a)&&(a=0));
}var s=Math.min(Math.max(a,0),n),u=s-i;return 0>u?!1:v.call(t,r,u)==u}function n(e){
if(null==this)throw TypeError();var t=String(this);if(e&&"[object RegExp]"==b.call(e))throw TypeError();
var n=t.length,r=String(e),i=r.length,a=arguments.length>1?arguments[1]:void 0,o=a?Number(a):0;
o!=o&&(o=0);var s=Math.min(Math.max(o,0),n);return i+s>n?!1:-1!=m.call(t,r,o)}function r(e){
if(null==this)throw TypeError();var t=String(this),n=e?Number(e):0;if(isNaN(n)&&(n=0),
0>n||n==1/0)throw RangeError();if(0==n)return"";for(var r="";n--;)r+=t;return r}function i(e){
if(null==this)throw TypeError();var t=String(this),n=t.length,r=e?Number(e):0;if(isNaN(r)&&(r=0),
!(0>r||r>=n)){var i,a=t.charCodeAt(r);return a>=55296&&56319>=a&&n>r+1&&(i=t.charCodeAt(r+1),
i>=56320&&57343>=i)?1024*(a-55296)+i-56320+65536:a}}function a(e){var t=e.raw,n=t.length>>>0;
if(0===n)return"";for(var r="",i=0;;){if(r+=t[i],i+1===n)return r;r+=arguments[++i];
}}function o(e){var t,n,r=[],i=Math.floor,a=-1,o=arguments.length;if(!o)return"";for(;++a<o;){
var s=Number(arguments[a]);if(!isFinite(s)||0>s||s>1114111||i(s)!=s)throw RangeError("Invalid code point: "+s);
65535>=s?r.push(s):(s-=65536,t=(s>>10)+55296,n=s%1024+56320,r.push(t,n))}return String.fromCharCode.apply(null,r);
}function s(){var e=$traceurRuntime.checkObjectCoercible(this),t=String(e);return c(t);
}function u(u){var c=u.String;h(c.prototype,["codePointAt",i,"endsWith",t,"includes",n,"repeat",r,"startsWith",e]),
h(c,["fromCodePoint",o,"raw",a]),d(c.prototype,s,Symbol)}var c=System.get("traceur-runtime@0.0.92/src/runtime/polyfills/StringIterator.js").createStringIterator,l=System.get("traceur-runtime@0.0.92/src/runtime/polyfills/utils.js"),h=l.maybeAddFunctions,d=l.maybeAddIterator,f=l.registerPolyfill,b=Object.prototype.toString,m=String.prototype.indexOf,v=String.prototype.lastIndexOf;
return f(u),{get startsWith(){return e},get endsWith(){return t},get includes(){return n;
},get repeat(){return r},get codePointAt(){return i},get raw(){return a},get fromCodePoint(){
return o},get stringPrototypeIterator(){return s},get polyfillString(){return u}};
}),System.get("traceur-runtime@0.0.92/src/runtime/polyfills/String.js"),System.registerModule("traceur-runtime@0.0.92/src/runtime/polyfills/ArrayIterator.js",[],function(){
function e(e,t){var n=a(e),r=new h;return r.iteratorObject_=n,r.arrayIteratorNextIndex_=0,
r.arrayIterationKind_=t,r}function t(){return e(this,l)}function n(){return e(this,u);
}function r(){return e(this,c)}var i=System.get("traceur-runtime@0.0.92/src/runtime/polyfills/utils.js"),a=i.toObject,o=i.toUint32,s=i.createIteratorResultObject,u=1,c=2,l=3,h=function(){
function e(){}var t;return $traceurRuntime.createClass(e,(t={},Object.defineProperty(t,"next",{
value:function(){var e=a(this),t=e.iteratorObject_;if(!t)throw new TypeError("Object is not an ArrayIterator");
var n=e.arrayIteratorNextIndex_,r=e.arrayIterationKind_,i=o(t.length);return n>=i?(e.arrayIteratorNextIndex_=1/0,
s(void 0,!0)):(e.arrayIteratorNextIndex_=n+1,r==c?s(t[n],!1):r==l?s([n,t[n]],!1):s(n,!1));
},configurable:!0,enumerable:!0,writable:!0}),Object.defineProperty(t,Symbol.iterator,{
value:function(){return this},configurable:!0,enumerable:!0,writable:!0}),t),{})}();
return{get entries(){return t},get keys(){return n},get values(){return r}}}),System.registerModule("traceur-runtime@0.0.92/src/runtime/polyfills/Array.js",[],function(){
function e(e){var t,n,r=arguments[1],i=arguments[2],a=this,o=_(e),s=void 0!==r,u=0;
if(s&&!f(r))throw TypeError();if(d(o)){t=b(a)?new a:[];var c=!0,l=!1,h=void 0;try{
for(var m=void 0,v=o[Symbol.iterator]();!(c=(m=v.next()).done);c=!0){var p=m.value;
s?t[u]=r.call(i,p,u):t[u]=p,u++}}catch(g){l=!0,h=g}finally{try{c||null==v["return"]||v["return"]();
}finally{if(l)throw h}}return t.length=u,t}for(n=y(o.length),t=b(a)?new a(n):new Array(n);n>u;u++)s?t[u]="undefined"==typeof i?r(o[u],u):r.call(i,o[u],u):t[u]=o[u];
return t.length=n,t}function t(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];
for(var n=this,r=e.length,i=b(n)?new n(r):new Array(r),a=0;r>a;a++)i[a]=e[a];return i.length=r,
i}function n(e){var t=void 0!==arguments[1]?arguments[1]:0,n=arguments[2],r=_(this),i=y(r.length),a=g(t),o=void 0!==n?g(n):i;
for(a=0>a?Math.max(i+a,0):Math.min(a,i),o=0>o?Math.max(i+o,0):Math.min(o,i);o>a;)r[a]=e,
a++;return r}function r(e){var t=arguments[1];return a(this,e,t)}function i(e){var t=arguments[1];
return a(this,e,t,!0)}function a(e,t){var n=arguments[2],r=void 0!==arguments[3]?arguments[3]:!1,i=_(e),a=y(i.length);
if(!f(t))throw TypeError();for(var o=0;a>o;o++){var s=i[o];if(t.call(n,s,o,i))return r?o:s;
}return r?-1:void 0}function o(a){var o=a,s=o.Array,h=o.Object,d=o.Symbol,f=l;d&&d.iterator&&s.prototype[d.iterator]&&(f=s.prototype[d.iterator]),
m(s.prototype,["entries",u,"keys",c,"values",f,"fill",n,"find",r,"findIndex",i]),
m(s,["from",e,"of",t]),v(s.prototype,f,d),v(h.getPrototypeOf([].values()),function(){
return this},d)}var s=System.get("traceur-runtime@0.0.92/src/runtime/polyfills/ArrayIterator.js"),u=s.entries,c=s.keys,l=s.values,h=System.get("traceur-runtime@0.0.92/src/runtime/polyfills/utils.js"),d=h.checkIterable,f=h.isCallable,b=h.isConstructor,m=h.maybeAddFunctions,v=h.maybeAddIterator,p=h.registerPolyfill,g=h.toInteger,y=h.toLength,_=h.toObject;
return p(o),{get from(){return e},get of(){return t},get fill(){return n},get find(){
return r},get findIndex(){return i},get polyfillArray(){return o}}}),System.get("traceur-runtime@0.0.92/src/runtime/polyfills/Array.js"),
System.registerModule("traceur-runtime@0.0.92/src/runtime/polyfills/Object.js",[],function(){
function e(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}function t(e){for(var t=1;t<arguments.length;t++){
var n=arguments[t],r=null==n?[]:l(n),i=void 0,a=r.length;for(i=0;a>i;i++){var o=r[i];
c(o)||(e[o]=n[o])}}return e}function n(e,t){var n,r,i=u(t),a=i.length;for(n=0;a>n;n++){
var o=i[n];c(o)||(r=f(t,i[n]),d(e,i[n],r))}return e}function r(r){var i=r.Object;a(i,["assign",t,"is",e,"mixin",n]);
}var i=System.get("traceur-runtime@0.0.92/src/runtime/polyfills/utils.js"),a=i.maybeAddFunctions,o=i.registerPolyfill,s=$traceurRuntime,u=s.getOwnPropertyNames,c=s.isPrivateName,l=s.keys,h=Object,d=h.defineProperty,f=h.getOwnPropertyDescriptor;
return o(r),{get is(){return e},get assign(){return t},get mixin(){return n},get polyfillObject(){
return r}}}),System.get("traceur-runtime@0.0.92/src/runtime/polyfills/Object.js"),
System.registerModule("traceur-runtime@0.0.92/src/runtime/polyfills/Number.js",[],function(){
function e(e){return o(e)&&d(e)}function t(t){return e(t)&&l(t)===t}function n(e){
return o(e)&&f(e)}function r(t){if(e(t)){var n=l(t);if(n===t)return h(n)<=b}return!1;
}function i(i){var a=i.Number;s(a,["MAX_SAFE_INTEGER",b,"MIN_SAFE_INTEGER",m,"EPSILON",v]),
u(a,["isFinite",e,"isInteger",t,"isNaN",n,"isSafeInteger",r])}var a=System.get("traceur-runtime@0.0.92/src/runtime/polyfills/utils.js"),o=a.isNumber,s=a.maybeAddConsts,u=a.maybeAddFunctions,c=a.registerPolyfill,l=a.toInteger,h=Math.abs,d=isFinite,f=isNaN,b=Math.pow(2,53)-1,m=-Math.pow(2,53)+1,v=Math.pow(2,-52);
return c(i),{get MAX_SAFE_INTEGER(){return b},get MIN_SAFE_INTEGER(){return m},get EPSILON(){
return v},get isFinite(){return e},get isInteger(){return t},get isNaN(){return n;
},get isSafeInteger(){return r},get polyfillNumber(){return i}}}),System.get("traceur-runtime@0.0.92/src/runtime/polyfills/Number.js"),
System.registerModule("traceur-runtime@0.0.92/src/runtime/polyfills/fround.js",[],function(){
function e(e,t,n){function r(e){var t=l(e),n=e-t;return.5>n?t:n>.5?t+1:t%2?t+1:t}
var i,a,o,s,b,m,v,p=(1<<t-1)-1;for(e!==e?(a=(1<<t)-1,o=f(2,n-1),i=0):e===1/0||e===-(1/0)?(a=(1<<t)-1,
o=0,i=0>e?1:0):0===e?(a=0,o=0,i=1/e===-(1/0)?1:0):(i=0>e,e=c(e),e>=f(2,1-p)?(a=d(l(h(e)/u),1023),
o=r(e/f(2,a)*f(2,n)),o/f(2,n)>=2&&(a+=1,o=1),a>p?(a=(1<<t)-1,o=0):(a+=p,o-=f(2,n))):(a=0,
o=r(e/f(2,1-p-n)))),b=[],s=n;s;s-=1)b.push(o%2?1:0),o=l(o/2);for(s=t;s;s-=1)b.push(a%2?1:0),
a=l(a/2);for(b.push(i?1:0),b.reverse(),m=b.join(""),v=[];m.length;)v.push(parseInt(m.substring(0,8),2)),
m=m.substring(8);return v}function t(e,t,n){var r,i,a,o,s,u,c,l,h=[];for(r=e.length;r;r-=1)for(a=e[r-1],
i=8;i;i-=1)h.push(a%2?1:0),a>>=1;return h.reverse(),o=h.join(""),s=(1<<t-1)-1,u=parseInt(o.substring(0,1),2)?-1:1,
c=parseInt(o.substring(1,1+t),2),l=parseInt(o.substring(1+t),2),c===(1<<t)-1?0!==l?NaN:u*(1/0):c>0?u*f(2,c-s)*(1+l/f(2,n)):0!==l?u*f(2,-(s-1))*(l/f(2,n)):0>u?-0:0;
}function n(e){return t(e,8,23)}function r(t){return e(t,8,23)}function i(e){return 0===e||!a(e)||o(e)?e:n(r(Number(e)));
}var a=isFinite,o=isNaN,s=Math,u=s.LN2,c=s.abs,l=s.floor,h=s.log,d=s.min,f=s.pow;return{
get fround(){return i}}}),System.registerModule("traceur-runtime@0.0.92/src/runtime/polyfills/Math.js",[],function(){
function e(e){if(e=x(+e),0==e)return 32;var t=0;return 0===(4294901760&e)&&(e<<=16,
t+=16),0===(4278190080&e)&&(e<<=8,t+=8),0===(4026531840&e)&&(e<<=4,t+=4),0===(3221225472&e)&&(e<<=2,
t+=2),0===(2147483648&e)&&(e<<=1,t+=1),t}function t(e,t){e=x(+e),t=x(+t);var n=e>>>16&65535,r=65535&e,i=t>>>16&65535,a=65535&t;
return r*a+(n*a+r*i<<16>>>0)|0}function n(e){return e=+e,e>0?1:0>e?-1:e}function r(e){
return.4342944819032518*A(e)}function i(e){return 1.4426950408889634*A(e)}function a(e){
if(e=+e,-1>e||E(e))return NaN;if(0===e||e===1/0)return e;if(-1===e)return-(1/0);var t=0,n=50;
if(0>e||e>1)return A(1+e);for(var r=1;n>r;r++)r%2===0?t-=R(e,r)/r:t+=R(e,r)/r;return t;
}function o(e){return e=+e,e===-(1/0)?-1:S(e)&&0!==e?M(e)-1:e}function s(e){return e=+e,
0===e?1:E(e)?NaN:S(e)?(0>e&&(e=-e),e>21?M(e)/2:(M(e)+M(-e))/2):1/0}function u(e){
return e=+e,S(e)&&0!==e?(M(e)-M(-e))/2:e}function c(e){if(e=+e,0===e)return e;if(!S(e))return n(e);
var t=M(e),r=M(-e);return(t-r)/(t+r)}function l(e){return e=+e,1>e?NaN:S(e)?A(e+I(e+1)*I(e-1)):e;
}function h(e){return e=+e,0!==e&&S(e)?e>0?A(e+I(e*e+1)):-A(-e+I(e*e+1)):e}function d(e){
return e=+e,-1===e?-(1/0):1===e?1/0:0===e?e:E(e)||-1>e||e>1?NaN:.5*A((1+e)/(1-e));
}function f(e,t){for(var n=arguments.length,r=new Array(n),i=0,a=0;n>a;a++){var o=arguments[a];
if(o=+o,o===1/0||o===-(1/0))return 1/0;o=C(o),o>i&&(i=o),r[a]=o}0===i&&(i=1);for(var s=0,u=0,a=0;n>a;a++){
var o=r[a]/i,c=o*o-u,l=s+c;u=l-s-c,s=l}return I(s)*i}function b(e){return e=+e,e>0?T(e):0>e?O(e):e;
}function m(e){if(e=+e,0===e)return e;var t=0>e;t&&(e=-e);var n=R(e,1/3);return t?-n:n;
}function v(v){var g=v.Math;w(g,["acosh",l,"asinh",h,"atanh",d,"cbrt",m,"clz32",e,"cosh",s,"expm1",o,"fround",p,"hypot",f,"imul",t,"log10",r,"log1p",a,"log2",i,"sign",n,"sinh",u,"tanh",c,"trunc",b]);
}var p,g,y=System.get("traceur-runtime@0.0.92/src/runtime/polyfills/fround.js").fround,_=System.get("traceur-runtime@0.0.92/src/runtime/polyfills/utils.js"),w=_.maybeAddFunctions,k=_.registerPolyfill,x=_.toUint32,S=isFinite,E=isNaN,j=Math,C=j.abs,O=j.ceil,M=j.exp,T=j.floor,A=j.log,R=j.pow,I=j.sqrt;
return"function"==typeof Float32Array?(g=new Float32Array(1),p=function(e){return g[0]=Number(e),
g[0]}):p=y,k(v),{get clz32(){return e},get imul(){return t},get sign(){return n},
get log10(){return r},get log2(){return i},get log1p(){return a},get expm1(){return o;
},get cosh(){return s},get sinh(){return u},get tanh(){return c},get acosh(){return l;
},get asinh(){return h},get atanh(){return d},get hypot(){return f},get trunc(){return b;
},get fround(){return p},get cbrt(){return m},get polyfillMath(){return v}}}),System.get("traceur-runtime@0.0.92/src/runtime/polyfills/Math.js"),
System.registerModule("traceur-runtime@0.0.92/src/runtime/polyfills/polyfills.js",[],function(){
var e=System.get("traceur-runtime@0.0.92/src/runtime/polyfills/utils.js").polyfillAll;
e(Reflect.global);var t=$traceurRuntime.setupGlobals;return $traceurRuntime.setupGlobals=function(n){
t(n),e(n)},{}}),System.get("traceur-runtime@0.0.92/src/runtime/polyfills/polyfills.js"),
Object.defineProperty(String.prototype,"includes",{enumerable:!1,writable:!0,value:function(){
return-1!==String.prototype.indexOf.apply(this,arguments)}}),Object.defineProperty(String.prototype,"replaceAll",{
enumerable:!1,writable:!0,value:function(e,t){return this.split(e).join(t)}}),Object.defineProperty(String.prototype,"toCamelCase",{
enumerable:!1,writable:!0,value:function(){return this.replace(/(\-[a-z])/g,function(e){
return e.toUpperCase().replace("-","")})}}),Object.defineProperty(Object,"values",{
enumerable:!1,writable:!0,value:function(e){var t=[];return Object.keys(e).forEach(function(n){
t.push(e[n])}),t}}),Object.defineProperty(Object,"entries",{enumerable:!1,writable:!0,
value:function(e){var t=[];return Object.keys(e).forEach(function(n){t.push([n,e[n]]);
}),t}}),Object.defineProperty(Array.prototype,"includes",{enumerable:!1,writable:!0,
value:function(e){return-1!==this.indexOf(e)}}),Object.defineProperty(Array.prototype,"remove",{
enumerable:!1,writable:!0,value:function(e){var t=this.indexOf(e);return-1!==t&&this.splice(t,1),
this}}),Object.defineProperty(Array.prototype,"removeAll",{enumerable:!1,writable:!0,
value:function(e){for(;this.includes(e);)this.remove(e);return this}}),function(){
var e,t,n,r,i;if(n=window.IDBObjectStore||window.webkitIDBObjectStore||window.mozIDBObjectStore||window.msIDBObjectStore,
t=window.IDBIndex||window.webkitIDBIndex||window.mozIDBIndex||window.msIDBIndex,"undefined"!=typeof n&&"undefined"!=typeof t&&(void 0===n.prototype.getAll||void 0===t.prototype.getAll)){
if(void 0!==n.prototype.mozGetAll&&void 0!==t.prototype.mozGetAll)return n.prototype.getAll=n.prototype.mozGetAll,
void(t.prototype.getAll=t.prototype.mozGetAll);r=function(){this.onsuccess=null,this.readyState="pending";
},e=function(e,t){return{type:e,debug:t,bubbles:!1,cancelable:!1,eventPhase:0,timeStamp:new Date
}},i=function(t){var n,i;return t=void 0!==t?t:null,n=new r,i=[],this.openCursor(t).onsuccess=function(t){
var r,a;r=t.target.result,r?(i.push(r.value),r["continue"]()):"function"==typeof n.onsuccess&&(a=new e("success"),
a.target={readyState:"done",result:i},n.result=i,n.onsuccess(a))},n},n.prototype.getAll=i,
t.prototype.getAll=i}}(),Object.defineProperty(ClientRect.prototype,"x",{enumerable:!1,
configurable:!1,get:function(){return this.left},set:function(e){this.left=e}}),Object.defineProperty(ClientRect.prototype,"y",{
enumerable:!1,configurable:!1,get:function(){return this.top},set:function(e){this.top=e;
}}),Node.prototype.append||(Node.prototype.append=function(e){this.appendChild(e);
}),Node.prototype.prepend||(Node.prototype.prepend=function(e){this.insertBefore(e,this.firstElementChild);
}),Node.prototype.before||(Node.prototype.before=function(e){this.parentElement.insertBefore(e,this);
}),Node.prototype.after||(Node.prototype.after=function(e){this.parentElement.insertBefore(e,this.nextElementSibling);
}),Node.prototype.replace||(Node.prototype.replace=function(e){this.parentNode.replaceChild(e,this);
}),Object.defineProperty(Element.prototype,"disabled",{enumerable:!1,configurable:!1,
get:function(){return this.hasAttribute("disabled")},set:function(e){e===!0?this.setAttribute("disabled",""):this.removeAttribute("disabled");
}}),Object.defineProperty(SVGRect.prototype,"top",{enumerable:!1,configurable:!1,
get:function(){return Math.min(this.y,this.y+this.height)},set:function(e){throw new Error("top property is read-only");
}}),Object.defineProperty(SVGRect.prototype,"right",{enumerable:!1,configurable:!1,
get:function(){return Math.max(this.x,this.x+this.width)},set:function(e){throw new Error("right property is read-only");
}}),Object.defineProperty(SVGRect.prototype,"bottom",{enumerable:!1,configurable:!1,
get:function(){return Math.max(this.y,this.y+this.height)},set:function(e){throw new Error("bottom property is read-only");
}}),Object.defineProperty(SVGRect.prototype,"left",{enumerable:!1,configurable:!1,
get:function(){return Math.min(this.x,this.x+this.width)},set:function(e){throw new Error("left property is read-only");
}}),SVGPoint.prototype.toString=function(){return"point("+this.x+", "+this.y+")"},
SVGUseElement.prototype.getBBox=function(){var e=SVGGraphicsElement.prototype.getBBox.call(this);
return e.x+=this.x.baseVal.value,e.y+=this.y.baseVal.value,e},function(){var e=document.createElementNS("http://www.w3.org/2000/svg","svg");
SVGMatrix.prototype.transformPoint=function(t){var t=e.createSVGPoint();return t.x=this.a*t.x+this.c*t.y+this.e,
t.y=this.b*t.x+this.d*t.y+this.f,t},SVGMatrix.prototype.determinant=function(){var e=this.a*this.d-this.b*this.c;
return e},SVGMatrix.prototype.isIdentity=function(){return 1===this.a&&0===this.b&&0===this.c&&1===this.d&&0===this.e&&0===this.f?!0:!1;
},SVGMatrix.prototype.toString=function(){return"matrix("+this.a+", "+this.b+", "+this.c+", "+this.d+", "+this.e+", "+this.f+")";
},SVGMatrix.prototype.multiplySelf=function(e){var t=this.a*e.a+this.c*e.b,n=this.b*e.a+this.d*e.b,r=this.a*e.c+this.c*e.d,i=this.b*e.c+this.d*e.d,a=this.a*e.e+this.c*e.f+this.e,o=this.b*e.e+this.d*e.f+this.f;
return this.a=t,this.b=n,this.c=r,this.d=i,this.e=a,this.f=o,this},SVGMatrix.prototype.preMultiplySelf=function(e){
var t=e.a*this.a+e.c*this.b,n=e.b*this.a+e.d*this.b,r=e.a*this.c+e.c*this.d,i=e.b*this.c+e.d*this.d,a=e.a*this.e+e.c*this.f+e.e,o=e.b*this.e+e.d*this.f+e.f;
return this.a=t,this.b=n,this.c=r,this.d=i,this.e=a,this.f=o,this},SVGMatrix.prototype.translateSelf=function(e,t){
var n={a:1,b:0,c:0,d:1,e:e,f:t};return this.multiplySelf(n),this},SVGMatrix.prototype._translateOriginSelf=function(e,t){
return this.e=this.e+e*this.a+t*this.c,this.f=this.f+e*this.b+t*this.d,this},SVGMatrix.prototype._translateOrigin=function(t,n){
var r=e.createSVGMatrix();return r.a=this.a,r.b=this.b,r.c=this.c,r.d=this.d,r.e=this.e+t*this.a+n*this.c,
r.f=this.f+t*this.b+n*this.d,r},SVGMatrix.prototype.scaleSelf=function(e,t,n){void 0===t&&(t=0),
void 0===n&&(n=0);var r={a:e,b:0,c:0,d:e,e:0,f:0};return this._translateOriginSelf(t,n),
this.multiplySelf(r),this._translateOriginSelf(-t,-n),this},SVGMatrix.prototype.scaleNonUniformSelf=function(e,t,n,r){
void 0===t&&(t=1),void 0===n&&(n=0),void 0===r&&(r=0);var i={a:e,b:0,c:0,d:t,e:0,
f:0};return this._translateOriginSelf(n,r),this.multiplySelf(i),this._translateOriginSelf(-n,-r),
this},SVGMatrix.prototype.rotate=function(e,t,n){void 0===t&&(t=0),void 0===n&&(n=0);
var r=Math.PI*e/180,i=Math.cos(r),a=Math.sin(r),o={a:i,b:a,c:-a,d:i,e:0,f:0},s=this._translateOrigin(t,n);
return s.multiplySelf(o),s._translateOriginSelf(-t,-n),s},SVGMatrix.prototype.rotateSelf=function(e,t,n){
void 0===t&&(t=0),void 0===n&&(n=0);var r=Math.PI*e/180,i=Math.cos(r),a=Math.sin(r),o={
a:i,b:a,c:-a,d:i,e:0,f:0};return this._translateOriginSelf(t,n),this.multiplySelf(o),
this._translateOriginSelf(-t,-n),this},SVGMatrix.prototype.skewXSelf=function(e){
var t={a:1,b:0,c:tan(e),d:1,e:0,f:0};return this.multiplySelf(t),this},SVGMatrix.prototype.skewYSelf=function(e){
var t={a:1,b:tan(e),c:0,d:1,e:0,f:0};return this.multiplySelf(t),this},SVGMatrix.prototype.invertSelf=function(e){
var t=this.determinant();if(0!==t){var n=this.d/t,r=-this.b/t,i=-this.c/t,a=this.a/t,o=(this.c*this.f-this.d*this.e)/t,s=(this.b*this.e-this.a*this.f)/t;
this.a=n,this.b=r,this.c=i,this.d=a,this.e=o,this.f=s}return this}}(),SVGPathElement.prototype.getPathData&&SVGPathElement.prototype.setPathData||!function(){
var e={Z:"Z",M:"M",L:"L",C:"C",Q:"Q",A:"A",H:"H",V:"V",S:"S",T:"T",z:"Z",m:"m",l:"l",
c:"c",q:"q",a:"a",h:"h",v:"v",s:"s",t:"t"},t=function(e){this._string=e,this._currentIndex=0,
this._endIndex=this._string.length,this._prevCommand=null,this._skipOptionalSpaces();
},n=-1!==window.navigator.userAgent.indexOf("MSIE ");t.prototype={parseSegment:function(){
var t=this._string[this._currentIndex],n=e[t]?e[t]:null;if(null===n){if(null===this._prevCommand)return null;
if(n=("+"===t||"-"===t||"."===t||t>="0"&&"9">=t)&&"Z"!==this._prevCommand?"M"===this._prevCommand?"L":"m"===this._prevCommand?"l":this._prevCommand:null,
null===n)return null}else this._currentIndex+=1;this._prevCommand=n;var r=null,i=n.toUpperCase();
return"H"===i||"V"===i?r=[this._parseNumber()]:"M"===i||"L"===i||"T"===i?r=[this._parseNumber(),this._parseNumber()]:"S"===i||"Q"===i?r=[this._parseNumber(),this._parseNumber(),this._parseNumber(),this._parseNumber()]:"C"===i?r=[this._parseNumber(),this._parseNumber(),this._parseNumber(),this._parseNumber(),this._parseNumber(),this._parseNumber()]:"A"===i?r=[this._parseNumber(),this._parseNumber(),this._parseNumber(),this._parseArcFlag(),this._parseArcFlag(),this._parseNumber(),this._parseNumber()]:"Z"===i&&(this._skipOptionalSpaces(),
r=[]),null===r||r.indexOf(null)>=0?null:{type:n,values:r}},hasMoreData:function(){
return this._currentIndex<this._endIndex},peekSegmentType:function(){var t=this._string[this._currentIndex];
return e[t]?e[t]:null},initialCommandIsMoveTo:function(){if(!this.hasMoreData())return!0;
var e=this.peekSegmentType();return"M"===e||"m"===e},_isCurrentSpace:function(){var e=this._string[this._currentIndex];
return" ">=e&&(" "===e||"\n"===e||"	"===e||"\r"===e||"\f"===e)},_skipOptionalSpaces:function(){
for(;this._currentIndex<this._endIndex&&this._isCurrentSpace();)this._currentIndex+=1;
return this._currentIndex<this._endIndex},_skipOptionalSpacesOrDelimiter:function(){
return this._currentIndex<this._endIndex&&!this._isCurrentSpace()&&","!==this._string[this._currentIndex]?!1:(this._skipOptionalSpaces()&&this._currentIndex<this._endIndex&&","===this._string[this._currentIndex]&&(this._currentIndex+=1,
this._skipOptionalSpaces()),this._currentIndex<this._endIndex)},_parseNumber:function(){
var e=0,t=0,n=1,r=0,i=1,a=1,o=this._currentIndex;if(this._skipOptionalSpaces(),this._currentIndex<this._endIndex&&"+"===this._string[this._currentIndex]?this._currentIndex+=1:this._currentIndex<this._endIndex&&"-"===this._string[this._currentIndex]&&(this._currentIndex+=1,
i=-1),this._currentIndex===this._endIndex||(this._string[this._currentIndex]<"0"||this._string[this._currentIndex]>"9")&&"."!==this._string[this._currentIndex])return null;
for(var s=this._currentIndex;this._currentIndex<this._endIndex&&this._string[this._currentIndex]>="0"&&this._string[this._currentIndex]<="9";)this._currentIndex+=1;
if(this._currentIndex!==s)for(var u=this._currentIndex-1,c=1;u>=s;)t+=c*(this._string[u]-"0"),
u-=1,c*=10;if(this._currentIndex<this._endIndex&&"."===this._string[this._currentIndex]){
if(this._currentIndex+=1,this._currentIndex>=this._endIndex||this._string[this._currentIndex]<"0"||this._string[this._currentIndex]>"9")return null;
for(;this._currentIndex<this._endIndex&&this._string[this._currentIndex]>="0"&&this._string[this._currentIndex]<="9";)r+=(this._string[this._currentIndex]-"0")*(n*=.1),
this._currentIndex+=1}if(this._currentIndex!==o&&this._currentIndex+1<this._endIndex&&("e"===this._string[this._currentIndex]||"E"===this._string[this._currentIndex])&&"x"!==this._string[this._currentIndex+1]&&"m"!==this._string[this._currentIndex+1]){
if(this._currentIndex+=1,"+"===this._string[this._currentIndex]?this._currentIndex+=1:"-"===this._string[this._currentIndex]&&(this._currentIndex+=1,
a=-1),this._currentIndex>=this._endIndex||this._string[this._currentIndex]<"0"||this._string[this._currentIndex]>"9")return null;
for(;this._currentIndex<this._endIndex&&this._string[this._currentIndex]>="0"&&this._string[this._currentIndex]<="9";)e*=10,
e+=this._string[this._currentIndex]-"0",this._currentIndex+=1}var l=t+r;return l*=i,
e&&(l*=Math.pow(10,a*e)),o===this._currentIndex?null:(this._skipOptionalSpacesOrDelimiter(),
l)},_parseArcFlag:function(){if(this._currentIndex>=this._endIndex)return null;var e=!1,t=this._string[this._currentIndex];
if(this._currentIndex+=1,"0"===t)e=!1;else{if("1"!==t)return null;e=!0}return this._skipOptionalSpacesOrDelimiter(),
e}};var r,i=function(e){if(!e||0===e.length)return[];var n=new t(e),r=[];if(n.initialCommandIsMoveTo())for(;n.hasMoreData();){
var i=n.parseSegment();if(null===i)break;r.push(i)}return r},a=SVGPathElement.prototype.setAttribute,o=SVGPathElement.prototype.removeAttribute;
r=window.Symbol?{cachedPathData:Symbol(),cachedNormalizedPathData:Symbol()}:{cachedPathData:"__cachedPathData",
cachedNormalizedPathData:"__cachedNormalizedPathData"};var s=function(e,t,n,r,i,a,o,u,c,l){
var h,d,f,b,m=function(e){return Math.PI*e/180},v=function(e,t,n){var r=e*Math.cos(n)-t*Math.sin(n),i=e*Math.sin(n)+t*Math.cos(n);
return{x:r,y:i}},p=m(o),g=[];if(l)h=l[0],d=l[1],f=l[2],b=l[3];else{var y=v(e,t,-p);
e=y.x,t=y.y;var _=v(n,r,-p);n=_.x,r=_.y;var w=(e-n)/2,k=(t-r)/2,x=w*w/(i*i)+k*k/(a*a);
x>1&&(x=Math.sqrt(x),i=x*i,a=x*a);var S;S=u===c?-1:1;var E=i*i,j=a*a,C=E*j-E*k*k-j*w*w,O=E*k*k+j*w*w,M=S*Math.sqrt(Math.abs(C/O));
f=M*i*k/a+(e+n)/2,b=M*-a*w/i+(t+r)/2,h=Math.asin(((t-b)/a).toFixed(9)),d=Math.asin(((r-b)/a).toFixed(9)),
f>e&&(h=Math.PI-h),f>n&&(d=Math.PI-d),0>h&&(h=2*Math.PI+h),0>d&&(d=2*Math.PI+d),c&&h>d&&(h-=2*Math.PI),
!c&&d>h&&(d-=2*Math.PI)}var T=d-h;if(Math.abs(T)>120*Math.PI/180){var A=d,R=n,I=r;
d=c&&d>h?h+120*Math.PI/180*1:h+120*Math.PI/180*-1,n=f+i*Math.cos(d),r=b+a*Math.sin(d),
g=s(n,r,R,I,i,a,o,0,c,[d,A,f,b])}T=d-h;var P=Math.cos(h),L=Math.sin(h),F=Math.cos(d),D=Math.sin(d),z=Math.tan(T/4),W=4/3*i*z,N=4/3*a*z,B=[e,t],$=[e+W*L,t-N*P],H=[n+W*D,r-N*F],U=[n,r];
if($[0]=2*B[0]-$[0],$[1]=2*B[1]-$[1],l)return[$,H,U].concat(g);g=[$,H,U].concat(g).join().split(",");
var G=[],V=[];return g.forEach(function(e,t){t%2?V.push(v(g[t-1],g[t],p).y):V.push(v(g[t],g[t+1],p).x),
6===V.length&&(G.push(V),V=[])}),G},u=function(e){return e.map(function(e){return{
type:e.type,values:Array.prototype.slice.call(e.values)}})},c=function(e){var t=[],n=null,r=null,i=null,a=null;
return e.forEach(function(e){var o=e.type;if("M"===o){var s=e.values[0],u=e.values[1];
t.push({type:"M",values:[s,u]}),i=s,a=u,n=s,r=u}else if("m"===o){var s=n+e.values[0],u=r+e.values[1];
t.push({type:"M",values:[s,u]}),i=s,a=u,n=s,r=u}else if("L"===o){var s=e.values[0],u=e.values[1];
t.push({type:"L",values:[s,u]}),n=s,r=u}else if("l"===o){var s=n+e.values[0],u=r+e.values[1];
t.push({type:"L",values:[s,u]}),n=s,r=u}else if("C"===o){var c=e.values[0],l=e.values[1],h=e.values[2],d=e.values[3],s=e.values[4],u=e.values[5];
t.push({type:"C",values:[c,l,h,d,s,u]}),n=s,r=u}else if("c"===o){var c=n+e.values[0],l=r+e.values[1],h=n+e.values[2],d=r+e.values[3],s=n+e.values[4],u=r+e.values[5];
t.push({type:"C",values:[c,l,h,d,s,u]}),n=s,r=u}else if("Q"===o){var c=e.values[0],l=e.values[1],s=e.values[2],u=e.values[3];
t.push({type:"Q",values:[c,l,s,u]}),n=s,r=u}else if("q"===o){var c=n+e.values[0],l=r+e.values[1],s=n+e.values[2],u=r+e.values[3];
t.push({type:"Q",values:[c,l,s,u]}),n=s,r=u}else if("A"===o){var s=e.values[5],u=e.values[6];
t.push({type:"A",values:[e.values[0],e.values[1],e.values[2],e.values[3],e.values[4],s,u]
}),n=s,r=u}else if("a"===o){var s=n+e.values[5],u=r+e.values[6];t.push({type:"A",
values:[e.values[0],e.values[1],e.values[2],e.values[3],e.values[4],s,u]}),n=s,r=u;
}else if("H"===o){var s=e.values[0];t.push({type:"H",values:[s]}),n=s}else if("h"===o){
var s=n+e.values[0];t.push({type:"H",values:[s]}),n=s}else if("V"===o){var u=e.values[0];
t.push({type:"V",values:[u]}),r=u}else if("v"===o){var u=r+e.values[0];t.push({type:"V",
values:[u]}),r=u}else if("S"===o){var h=e.values[0],d=e.values[1],s=e.values[2],u=e.values[3];
t.push({type:"S",values:[h,d,s,u]}),n=s,r=u}else if("s"===o){var h=n+e.values[0],d=r+e.values[1],s=n+e.values[2],u=r+e.values[3];
t.push({type:"S",values:[h,d,s,u]}),n=s,r=u}else if("T"===o){var s=e.values[0],u=e.values[1];
t.push({type:"T",values:[s,u]}),n=s,r=u}else if("t"===o){var s=n+e.values[0],u=r+e.values[1];
t.push({type:"T",values:[s,u]}),n=s,r=u}else("Z"===o||"z"===o)&&(t.push({type:"Z",
values:[]}),n=i,r=a)}),t},l=function(e){var t=[],n=null,r=null,i=null,a=null,o=null,u=null,c=null;
return e.forEach(function(e){if("M"===e.type){var l=e.values[0],h=e.values[1];t.push({
type:"M",values:[l,h]}),u=l,c=h,a=l,o=h}else if("C"===e.type){var d=e.values[0],f=e.values[1],b=e.values[2],m=e.values[3],l=e.values[4],h=e.values[5];
t.push({type:"C",values:[d,f,b,m,l,h]}),r=b,i=m,a=l,o=h}else if("L"===e.type){var l=e.values[0],h=e.values[1];
t.push({type:"L",values:[l,h]}),a=l,o=h}else if("H"===e.type){var l=e.values[0];t.push({
type:"L",values:[l,o]}),a=l}else if("V"===e.type){var h=e.values[0];t.push({type:"L",
values:[a,h]}),o=h}else if("S"===e.type){var v,p,b=e.values[0],m=e.values[1],l=e.values[2],h=e.values[3];
"C"===n||"S"===n?(v=a+(a-r),p=o+(o-i)):(v=a,p=o),t.push({type:"C",values:[v,p,b,m,l,h]
}),r=b,i=m,a=l,o=h}else if("T"===e.type){var d,f,l=e.values[0],h=e.values[1];"Q"===n||"T"===n?(d=a+(a-r),
f=o+(o-i)):(d=a,f=o);var v=a+2*(d-a)/3,p=o+2*(f-o)/3,g=l+2*(d-l)/3,y=h+2*(f-h)/3;t.push({
type:"C",values:[v,p,g,y,l,h]}),r=d,i=f,a=l,o=h}else if("Q"===e.type){var d=e.values[0],f=e.values[1],l=e.values[2],h=e.values[3],v=a+2*(d-a)/3,p=o+2*(f-o)/3,g=l+2*(d-l)/3,y=h+2*(f-h)/3;
t.push({type:"C",values:[v,p,g,y,l,h]}),r=d,i=f,a=l,o=h}else if("A"===e.type){var _=e.values[0],w=e.values[1],k=e.values[2],x=e.values[3],S=e.values[4],l=e.values[5],h=e.values[6];
if(0===_||0===w)t.push({type:"C",values:[a,o,l,h,l,h]}),a=l,o=h;else if(a!==l||o!==h){
var E=s(a,o,l,h,_,w,k,x,S);E.forEach(function(e){t.push({type:"C",values:e}),a=l,
o=h})}}else"Z"===e.type&&(t.push(e),a=u,o=c);n=e.type}),t};SVGPathElement.prototype.setAttribute=function(e,t){
"d"===e&&(this[r.cachedPathData]=null,this[r.cachedNormalizedPathData]=null),a.call(this,e,t);
},SVGPathElement.prototype.removeAttribute=function(e,t){"d"===e&&(this[r.cachedPathData]=null,
this[r.cachedNormalizedPathData]=null),o.call(this,e)},SVGPathElement.prototype.getPathData=function(e){
if(e&&e.normalize){if(this[r.cachedNormalizedPathData])return u(this[r.cachedNormalizedPathData]);
var t;this[r.cachedPathData]?t=u(this[r.cachedPathData]):(t=i(this.getAttribute("d")||""),
this[r.cachedPathData]=u(t));var n=l(c(t));return this[r.cachedNormalizedPathData]=u(n),
n}if(this[r.cachedPathData])return u(this[r.cachedPathData]);var t=i(this.getAttribute("d")||"");
return this[r.cachedPathData]=u(t),t},SVGPathElement.prototype.setPathData=function(e){
if(0===e.length)n?this.setAttribute("d",""):this.removeAttribute("d");else{for(var t="",r=0,i=e.length;i>r;r+=1){
var a=e[r];r>0&&(t+=" "),t+=a.type,a.values&&(t+=" "+a.values.join(" "))}this.setAttribute("d",t);
}}}(),function(){var e=SVGElement.prototype.getAttribute,t=SVGElement.prototype.setAttribute,n=SVGElement.prototype.removeAttribute,r=SVGElement.prototype.hasAttribute,i="http://www.w3.org/1999/xlink";
SVGElement.prototype.getAttribute=function(t){return"href"===t?this.getAttributeNS(i,"href"):e.call(this,t);
},SVGElement.prototype.setAttribute=function(e,n){"href"===e?this.setAttributeNS(i,"href",n):t.call(this,e,n);
},SVGElement.prototype.removeAttribute=function(e,t){"href"===e?this.removeAttributeNS(i,"href"):n.call(this,e);
},SVGElement.prototype.hasAttribute=function(e){return"href"===e?this.hasAttributeNS(i,"href"):r.call(this,e);
}}(),function(){var e=[CSSRuleList,CSSStyleDeclaration,DataTransferItemList,FileList,HTMLCollection,NamedNodeMap,NodeList,SVGPointList];
e.forEach(function(e){Object.defineProperty(e.prototype,Symbol.iterator,{configurable:!0,
enumerable:!1,writable:!0,value:Array.prototype[Symbol.iterator]})})}(),chrome.app.runtime.onLaunched.addListener(function(e){
"bx-backgroundbody"===document.body.getAttribute("is")&&document.body.ready.then(function(){
document.body.launchedCallback(e)})}),window.addEventListener("load",function(){System.get("./elements/"+document.body.getAttribute("is"));
}),System.registerModule("classes/bridge",[],function(){var e=function(){function e(){
var e=this;this.targets={},this._counter=0,this._callbacks={},this._handlers=[],window.addEventListener("message",function(t){
e._onMessage(t.data,t.source)})}return $traceurRuntime.createClass(e,{registerTarget:function(e,t){
this.targets[e]=t},unregisterTarget:function(e){delete this.targets[e]},addMessageHandler:function(e,t){
var n={name:e,callback:t};this._handlers.push(n)},removeMessageHandler:function(e,t){
this._handlers=this._handlers.filter(function(e){return e.callback!==t})},postMessage:function(e,t){
var n=void 0!==arguments[2]?arguments[2]:null,r=void 0!==arguments[3]?arguments[3]:null;
if(this.targets[e]){var i={name:t,arg:n,sender:window.name||"background",id:this._counter
};this._counter+=1,r&&(this._callbacks[i.id]=r);var a=this.targets[e];a.postMessage(i,"*");
}},_onMessage:function(e,t){"__response__"===e.name?this._callbacks[e.id]&&this._callbacks[e.id](e.arg):this._handlers.forEach(function(n){
n.name===e.name&&n.callback(e.arg,e.sender,function(n){var r={name:"__response__",
arg:n,sender:window.name||"background",id:e.id};t.postMessage(r,"*")})})}},{})}(),t=e;
return{get default(){return t}}}),System.registerModule("classes/clipboard",[],function(){
var e=function(){function e(){var e=this;body.bridge.addMessageHandler("clipboard.getData",function(t,n,r){
e.getData().then(function(e){return r(e)})}),body.bridge.addMessageHandler("clipboard.setData",function(t){
e.setData(t)})}return $traceurRuntime.createClass(e,{getData:function(){var e=this;
return new Promise(function(t){var n;document.addEventListener("paste",n=function(r){
document.removeEventListener("paste",n);var i=Array.prototype.slice.call(r.clipboardData.items,0),a={},o=0;
i?i.forEach(function(n){var r,s;return $traceurRuntime.asyncWrap(function(u){for(;;)switch(u.state){
case 0:r=n.type,u.state=5;break;case 5:return void Promise.resolve(e._readItem(n)).then(u.createCallback(3),u.errback);
case 3:s=u.value,u.state=2;break;case 2:s&&(a[r]=s),o+=1,o===i.length&&t(a),u.state=-2;
break;default:return u.end()}},this)}):t(a)}),document.execCommand("paste")})},setData:function(e){
return new Promise(function(t){var n;document.addEventListener("copy",n=function(r){
if(document.removeEventListener("copy",n),r.preventDefault(),r.clipboardData.items.clear(),
e["text/plain"]&&r.clipboardData.items.add(e["text/plain"],"text/plain"),e["text/html"]&&r.clipboardData.items.add(e["text/html"],"text/html"),
e["image/svg+xml"]&&r.clipboardData.items.add(e["image/svg+xml"],"image/svg+xml"),
e["image/png"]){for(var i=(e["image/png"],atob(e["image/png"].split(",")[1])),a=new ArrayBuffer(i.length),o=new Uint8Array(a),s=0;s<i.length;s+=1)o[s]=i.charCodeAt(s);
var u=new Blob([a],{type:"image/png"}),c=new File([u],"clipboard.png");r.clipboardData.items.add(c);
}t()}),document.execCommand("copy")})},_readItem:function(e){return new Promise(function(t){
if("image/png"===e.type){var n=e.getAsFile();if(n){var r=new FileReader;r.readAsDataURL(n),
r.addEventListener("load",function(e){t("data:"!==e.target.result?e.target.result:null);
})}else t(null)}else"text/plain"===e.type||"text/html"===e.type||"image/svg+xml"===e.type?e.getAsString(function(e){
t(e)}):(console.warn("Clipboard contains data with unsupported mime-type:",e.type),
t(null))})}},{})}(),t=e;return{get default(){return t}}}),System.registerModule("classes/config",[],function(){
var e=System.get("classes/event-emitter")["default"],t=Object.keys,n=function(e){
function n(){var e,t,r,i,a;$traceurRuntime.superConstructor(n).call(this),body.bridge.addMessageHandler("config.get",(e=this,
function(t,n,r){e.get(t).then(r)})),body.bridge.addMessageHandler("config.set",(t=this,
function(e,n,r){t.set(e.key,e.value).then(r)})),body.bridge.addMessageHandler("config.getAll",(r=this,
function(e,t,n){r.getAll().then(n)})),body.bridge.addMessageHandler("config.setAll",(i=this,
function(e,t,n){i.setAll(e).then(n)})),chrome.storage.onChanged.addListener((a=this,
function(e){a._onChromeStorageChange(e)}))}return $traceurRuntime.createClass(n,{
get:function(e){return new Promise(function(t){var n="!"===e[0]?"local":"sync";chrome.storage[n].get(e,function(n){
var r=n[e];void 0===r&&(r=null),t(r)})})},set:function(e,t){return new Promise(function(n){
var r,i="!"===e[0]?"local":"sync";null===t?chrome.storage[i].remove(e,n):chrome.storage[i].set((r={},
Object.defineProperty(r,e,{value:t,configurable:!0,enumerable:!0,writable:!0}),r),n);
})},getAll:function(){return new Promise(function(e){var n={};chrome.storage.local.get(null,function(r){
var i=!0,a=!1,o=void 0;try{for(var s=void 0,u=t(r)[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){
var c=s.value;n[c]=r[c]}}catch(l){a=!0,o=l}finally{try{i||null==u["return"]||u["return"]();
}finally{if(a)throw o}}chrome.storage.sync.get(null,function(r){var i=!0,a=!1,o=void 0;
try{for(var s=void 0,u=t(r)[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;
n[c]=r[c]}}catch(l){a=!0,o=l}finally{try{i||null==u["return"]||u["return"]()}finally{
if(a)throw o}}e(n)})})})},setAll:function(e){return new Promise(function(n){var r={},i={},a=!0,o=!1,s=void 0;
try{for(var u=void 0,c=t(e)[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value,h="!"===l[0]?"local":"sync",d=e[l];
"local"===h?r[l]=d:i[l]=d}}catch(f){o=!0,s=f}finally{try{a||null==c["return"]||c["return"]();
}finally{if(o)throw s}}chrome.storage.local.set(r,function(){chrome.storage.sync.set(i,function(){
n()})})})},_onChromeStorageChange:function(e){var n=!0,r=!1,i=void 0;try{for(var a=void 0,o=t(e)[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){
var s=a.value,u=void 0!==e[s].newValue?e[s].newValue:null;this.dispatchEvent(new CustomEvent("change",{
detail:{key:s,value:u}}));var c=!0,l=!1,h=void 0;try{for(var d=void 0,f=t(body.bridge.targets)[Symbol.iterator]();!(c=(d=f.next()).done);c=!0){
var b=d.value;if("main"!==b&&"background"!==b){body.bridge.targets[b];body.bridge.postMessage(b,"config.dispatchChangeEvent",{
key:s,value:u})}}}catch(m){l=!0,h=m}finally{try{c||null==f["return"]||f["return"]();
}finally{if(l)throw h}}}}catch(v){r=!0,i=v}finally{try{n||null==o["return"]||o["return"]();
}finally{if(r)throw i}}}},{},e)}(e),r=n;return{get default(){return r}}}),System.registerModule("classes/event-emitter",[],function(){
var e=function(){function e(){}return $traceurRuntime.createClass(e,{addEventListener:function(e,t){
this._events||(this._events={});var n=this._events[e];n||(this._events[e]=n=[]),n.push(t),
n.length>300&&console.warn("Potential EventEmitter memory leak: "+n.length+" listeners "+('subscribed to event "'+e+'"'));
},removeEventListener:function(e,t){if(this._events&&this._events[e]){for(var n=[],r=0;r<this._events[e].length;r+=1)this._events[e][r]!==t&&n.push(this._events[e][r]);
this._events[e]=n}},dispatchEvent:function(e){if(this._events){var t=this._events[e.type];
if(t){for(var n=null,r=t.length-1;r>=0;r-=1){var i,a=t[r];try{i=a.call(window,e)}catch(o){
null===n&&(n=o)}if(i===!1)break}if(n)throw n}}}},{})}(),t=e;return{get default(){
return t}}}),System.registerModule("elements/bx-backgroundbody",[],function(){var e=System.get("classes/bridge")["default"],t=System.get("classes/config")["default"],n=System.get("utils/window").createAppWindow,r=System.get("utils/dom").registerElement,i=function(r){
function i(){$traceurRuntime.superConstructor(i).apply(this,arguments)}return $traceurRuntime.createClass(i,{
createdCallback:function(){var n,r,i,a,o,s,u;return $traceurRuntime.asyncWrap(function(c){
for(;;)switch(c.state){case 0:n=this,this._shadowRoot=this.createShadowRoot({mode:"closed"
}),this.bridge=new e,this.config=new t,this._readyCallbacks=[],this._retainedFileEntriesPassedOnAppLaunch=[],
this._mainAppWindowState="closed",c.state=4;break;case 4:return void Promise.resolve(this._upgradeConfig()).then(c.createCallback(2),c.errback);
case 2:this.bridge.addMessageHandler("getFileEntriesPassedOnAppLaunch",function(e,t,r){
r(n._retainedFileEntriesPassedOnAppLaunch)}),this.bridge.addMessageHandler("ready",function(){
n._mainAppWindowState="ready"}),r=!0,i=!1,a=void 0;try{for(o=void 0,s=this._readyCallbacks[Symbol.iterator]();!(r=(o=s.next()).done);r=!0)(u=o.value)();
}catch(l){i=!0,a=l}finally{try{r||null==s["return"]||s["return"]()}finally{if(i)throw a;
}}this._readyCallbacks=null,c.state=-2;break;default:return c.end()}},this)},launchedCallback:function(e){
var t=e.items?e.items.map(function(e){return chrome.fileSystem.retainEntry(e.entry);
}):null;if("ready"===this._mainAppWindowState){var n=chrome.app.window.get("main");
n.focus(),n.show(),t&&t.length>0&&this.bridge.postMessage("main","openFiles",t)}else"opening"===this._mainAppWindowState?t&&(this._retainedFileEntriesPassedOnAppLaunch=t):"closed"===this._mainAppWindowState&&(t&&(this._retainedFileEntriesPassedOnAppLaunch=t),
this._openMainAppWindow())},get ready(){var e=this;return new Promise(function(t){
e._readyCallbacks?e._readyCallbacks.push(t):t()})},_openMainAppWindow:function(){
var e,t,r,i,a;return $traceurRuntime.asyncWrap(function(o){for(;;)switch(o.state){
case 0:e=this,this._mainAppWindowState="opening",i={id:"main",resizable:!0,hidden:!0,
frame:{type:"chrome",color:"#333"},outerBounds:{width:1e3,height:600,minWidth:100,
minHeight:440}},o.state=5;break;case 5:return void Promise.resolve(n("main.html",i)).then(o.createCallback(3),o.errback);
case 3:a=o.value,o.state=2;break;case 2:a.contentWindow.name="main",this.bridge.registerTarget("main",a.contentWindow),
a.contentWindow.addEventListener("load",t=function(){a.contentWindow.removeEventListener("load",t),
a.focus(),a.show()}),a.onClosed.addListener(r=function(){a.onClosed.removeListener(r),
a.contentWindow.removeEventListener("load",t),e._mainAppWindowState="closed",e._retainedFileEntriesPassedOnAppLaunch=[];
}),o.state=-2;break;default:return o.end()}},this)},_upgradeConfig:function(){var e=this;
return new Promise(function(t){var n;return $traceurRuntime.asyncWrap(function(r){
for(;;)switch(r.state){case 0:return void Promise.resolve(e.config.get("!bx-background:version")).then(r.createCallback(3),r.errback);
case 3:n=r.value,r.state=2;break;case 2:r.state=1===n?20:8;break;case 20:t(),r.state=-2;
break;case 8:r.state=null===n?6:5;break;case 6:n=0,r.state=7;break;case 7:return void Promise.resolve(e.config.set("!bx-background:version",n)).then(r.createCallback(5),r.errback);
case 5:r.state=0===n?15:14;break;case 15:n=1,r.state=16;break;case 16:return void Promise.resolve(e.config.set("!bx-background:version",n)).then(r.createCallback(10),r.errback);
case 10:return void Promise.resolve(e.config.set("!bx-editors:session",null)).then(r.createCallback(12),r.errback);
case 12:return void Promise.resolve(e.config.set("!bx-editors:recent",null)).then(r.createCallback(14),r.errback);
case 14:t(),r.state=-2;break;default:return r.end()}},this)})}},{},r)}(HTMLBodyElement),a=r("body","bx-backgroundbody",i);
return{get default(){return a}}}),System.registerModule("elements/bx-button",[],function(){
var e=System.get("utils/dom"),t=e.createElement,n=e.registerElement,r=Number.parseInt,i='\n<style id="stylesheet"></style>\n\n<main>\n  <svg id="icon" preserveAspectRatio="none" viewBox="0 0 100 100">\n    <use id="icon-use" x="0" y="0" width="100%" height="100%"></use>\n  </svg>\n\n  <label id="label"></label>\n</main>\n',a=function(e){
function n(){$traceurRuntime.superConstructor(n).apply(this,arguments)}return $traceurRuntime.createClass(n,{
createdCallback:function(){this._shadowRoot=this.createShadowRoot({mode:"closed"}),
this._shadowRoot.innerHTML=i;var e=!0,t=!1,n=void 0;try{for(var r=void 0,a=this._shadowRoot.querySelectorAll("[id]")[Symbol.iterator]();!(e=(r=a.next()).done);e=!0){
var o=r.value;this["#"+o.id]=o}}catch(s){t=!0,n=s}finally{try{e||null==a["return"]||a["return"]();
}finally{if(t)throw n}}this._onLabelChange(),this._onIconChange(),this._onIconSizeChange(),
this._onSkinChange()},attributeChangedCallback:function(e,t,n){t!==n&&("label"===e?this._onLabelChange():"icon"===e?this._onIconChange():"iconsize"===e?this._onIconSizeChange():"skin"===e&&this._onSkinChange());
},get label(){return this.hasAttribute("label")?this.getAttribute("label"):""},set label(e){
this.setAttribute("label",e)},get value(){return this.getAttribute("value")},set value(e){
null===e?this.removeAttribute("value"):this.setAttribute("value",e)},get icon(){return this.hasAttribute("icon")?this.getAttribute("icon"):"stub";
},set icon(e){this.setAttribute("icon",e)},get iconSize(){return this.hasAttribute("iconsize")?r(this.getAttribute("iconsize")):20;
},set iconSize(e){this.setAttribute("iconsize",e)},get skin(){return this.hasAttribute("skin")?this.getAttribute("skin"):"horizontal";
},set skin(e){this.setAttribute("skin",e)},get href(){return this.hasAttribute("href")?this.getAttribute("href"):"";
},set href(e){this.setAttribute("href",e)},get pressed(){return this.hasAttribute("pressed")?!0:!1;
},set pressed(e){e===!0?this.setAttribute("pressed",""):this.removeAttribute("pressed");
},get mixed(){return this.hasAttribute("mixed")},set mixed(e){e?this.setAttribute("mixed",""):this.removeAttribute("mixed");
},_onLabelChange:function(){this["#label"].textContent=this.label},_onIconChange:function(){
this["#icon-use"].remove(),this["#icon-use"]=t("svg:use"),this["#icon"].append(this["#icon-use"]),
this["#icon-use"].setAttribute("href","images/icons.svg#"+this.icon)},_onIconSizeChange:function(){
this["#icon"].style.width=this.iconSize+"px",this["#icon"].style.height=this.iconSize+"px";
},_onSkinChange:function(){this["#stylesheet"].innerText='@import url("stylesheets/bx-button@'+this.skin+'.css");';
}},{},e)}(HTMLElement),o=n("bx-button",a);return{get default(){return o}}}),System.registerModule("elements/bx-confirmdialog",[],function(){
System.get("elements/bx-button"),System.get("elements/bx-icon");var e=System.get("utils/dom"),t=e.createElement,n=e.registerElement,r={
title:"Sample title",description:"This is sample description.",buttons:[{value:"confirm",
label:"Confirm"},{value:"cancel",label:"Cancel"}]},i='\n  <style>@import url("stylesheets/bx-confirmdialog.css");</style>\n\n  <div id="message">\n    <bx-icon id="icon" name="warning"></bx-icon>\n\n    <div id="headers">\n      <h1 id="title"></h1>\n      <h2 id="description"></h2>\n    </div>\n  </div>\n\n  <div id="buttons"></div>\n',a=function(e){
function n(){$traceurRuntime.superConstructor(n).apply(this,arguments)}return $traceurRuntime.createClass(n,{
createdCallback:function(){var e=this;this._shadowRoot=this.createShadowRoot({mode:"closed"
}),this._shadowRoot.innerHTML=i;var t=!0,n=!1,r=void 0;try{for(var a=void 0,o=this._shadowRoot.querySelectorAll("[id]")[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){
var s=a.value;this["#"+s.id]=s}}catch(u){n=!0,r=u}finally{try{t||null==o["return"]||o["return"]();
}finally{if(n)throw r}}this.tabIndex=1,this["#buttons"].addEventListener("click",function(t){
return e._onButtonClick(t)}),this.addEventListener("keydown",function(t){return e._onKeyDown(t);
})},showModal:function(){var e=void 0!==arguments[0]?arguments[0]:r,i=e.title||r.title,a=e.description||r.description;
e.buttons||r.buttons;this["#title"].innerHTML=i,this["#description"].innerHTML=a,
this["#buttons"].innerHTML="";var o=!0,s=!1,u=void 0;try{for(var c=void 0,l=e.buttons[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){
var h=c.value,d=h.value,f=h.label,b=t("bx-button");b.value=d,b.label=f,b.skin="horizontal",
this["#buttons"].append(b)}}catch(m){s=!0,u=m}finally{try{o||null==l["return"]||l["return"]();
}finally{if(s)throw u}}this["#buttons"].lastElementChild&&this["#buttons"].lastElementChild.setAttribute("default",""),
$traceurRuntime.superGet(this,n.prototype,"showModal").call(this),this.focus()},_onButtonClick:function(e){
0===e.button&&"bx-button"===e.target.localName&&this.close(e.target.value)},_onKeyDown:function(e){
if(13===e.keyCode){var t=this["#buttons"].lastElementChild?this["#buttons"].lastElementChild.value:null;
this.close(t)}else 27===e.keyCode&&(e.preventDefault(),this.close(null))}},{},e)}(HTMLDialogElement),o=n("dialog","bx-confirmdialog",a);
return{get default(){return o}}}),System.registerModule("elements/bx-contextmenu",[],function(){
var e=System.get("utils/dom").registerElement;System.get("elements/bx-menu");var t=!1,n='\n  <style>@import url("stylesheets/bx-contextmenu.css");</style>\n  <div id="overlay"></div>\n  <content></content>\n',r=function(e){
function r(){$traceurRuntime.superConstructor(r).apply(this,arguments)}return $traceurRuntime.createClass(r,{
createdCallback:function(){var e=this;this._shadowRoot=this.createShadowRoot({mode:"closed"
}),this._shadowRoot.innerHTML=n,this._menu=this.querySelector("bx-menu"),this._overlay=this._shadowRoot.querySelector("#overlay"),
this._menu.addEventListener("menuopen",function(t){return e._onMenuOpen(t)}),this._menu.addEventListener("menuclose",function(t){
return e._onMenuClose(t)}),this._menu.addEventListener("menuitemclick",function(t){
return e._onMenuItemClick(t)}),this._menu.addEventListener("mousedown",function(t){
return e._onMenuMouseDown(t)}),this._overlay.addEventListener("mousedown",function(t){
return e._onOverlayMouseDown(t)}),t&&this.setAttribute("debug","")},attachedCallback:function(){
var e=this;window.addEventListener("blur",this._windowBlurListener=function(){e._onWindowBlur(event);
}),window.addEventListener("resize",this._windowResizeListener=function(){e._onWindowResize(event);
})},detachedCallback:function(){window.removeEventListener("blur",this._windowBlurListener),
window.removeEventListener("resize",this._windowResizeListener),this.parentNode.removeEventListener("contextmenu",this._contextMenuListener);
},open:function(e,t){this._overlay.style.display="block",this._menu.openAtPosition(event.clientX,event.clientY);
},validateMenu:function(e){},_onMenuOpen:function(e){this.validateMenu(e.detail)},
_onMenuClose:function(e){e.detail===this._menu&&(this._overlay.style.display="none");
},_onMenuItemClick:function(e){this._menu.close();var t=e.detail;t.commandID&&body.execCommand(t.commandID);
},_onMenuMouseDown:function(e){e.preventDefault()},_onOverlayMouseDown:function(e){
this._menu.close(),event.preventDefault(),event.stopPropagation()},_onWindowBlur:function(e){
t||this._menu.close()},_onWindowResize:function(e){t||this._menu.close()}},{},e)}(HTMLElement),i=e("bx-contextmenu",r);
return{get default(){return i}}}),System.registerModule("elements/bx-editor",[],function(){
var e=System.get("utils/artwork"),t=e.compressArtwork,n=e.uncompressArtwork,r=System.get("utils/constants").DEFAULT_ARTWORK,i=System.get("utils/dom"),a=(i.createElement,
i.registerElement),o=(System.get("utils/time").sleep,System.get("utils/file")),s=(o.getWritableFileEntry,
o.getFileEntryDisplayPath,o.getFileEntryExtension),u=(o.chooseFileEntry,o.restoreFileEntry,
o.readSVGFileEntry),c=o.writeSVGFileEntry,l="\n  width: 100%;\n  height: calc(100% - 30px - 30px);\n  display: block;\n  position: fixed;\n  top: 60px;\n  left; 0;\n",h='\n  <style>@import url("stylesheets/bx-editor.css");</style>\n  <webview\n    id="webview"\n    tabindex="-1"\n    partition="persist:boxy"\n    style="'+l+'"\n    allowtransparency>\n  </webview>\n',d=function(e){
function i(){$traceurRuntime.superConstructor(i).apply(this,arguments)}return $traceurRuntime.createClass(i,{
createdCallback:function(){var e=this;this._changeCounter=0,this._fileEntry=null,
this._webviewContentLoadedCallbacks=[],this._webviewContentInitializedCallbacks=[],
this._shadowRoot=this.createShadowRoot({mode:"closed"}),this._shadowRoot.innerHTML=h,
this["#webview"]=this._shadowRoot.querySelector("#webview"),this["#webview"].partition="persist:boxy",
this["#webview"].src="frontend/editor.html",this["#webview"].addEventListener("contentload",function(t){
e._onWebviewContentLoad(t)}),this._onIDPropertyChange()},detachedCallback:function(){
body.bridge.unregisterTarget(this.id)},attributeChangedCallback:function(e,t,n){t!==n&&("id"===e?this._onIDPropertyChange():"disabled"===e&&this._onDisabledPropertyChange());
},get fileEntry(){return this._fileEntry},set fileEntry(e){throw new Error("This property is read-only");
},get edited(){return 0!==this._changeCounter},set edited(e){throw new Error("This property is read-only");
},_onIDPropertyChange:function(){this["#webview"].name=this.id},_onDisabledPropertyChange:function(){
this.disabled===!1&&this.focus()},_onWebviewContentLoad:function(){this["#webview"].setZoomMode("disabled"),
body.bridge.registerTarget(this.id,this["#webview"].contentWindow);var e=!0,t=!1,n=void 0;
try{for(var r=void 0,i=this._webviewContentLoadedCallbacks[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){
var a=r.value;a()}}catch(o){t=!0,n=o}finally{try{e||null==i["return"]||i["return"]();
}finally{if(t)throw n}}this._webviewContentLoadedCallbacks=null},_onWebviewContentInit:function(){
var e=!0,t=!1,n=void 0;try{for(var r=void 0,i=this._webviewContentInitializedCallbacks[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){
var a=r.value;a()}}catch(o){t=!0,n=o}finally{try{e||null==i["return"]||i["return"]();
}finally{if(t)throw n}}this._webviewContentInitializedCallbacks=null},_webviewContentLoaded:function(){
var e=this;return new Promise(function(t){e._webviewContentLoadedCallbacks?e._webviewContentLoadedCallbacks.push(t):t();
})},_webviewContentInitialized:function(){var e=this;return new Promise(function(t){
e._webviewContentInitializedCallbacks?e._webviewContentInitializedCallbacks.push(t):t();
})},load:function(e){var t=e,i=t.fileEntry,a=t.unsavedArtwork,o=this;return new Promise(function(e){
var t;return $traceurRuntime.asyncWrap(function(s){for(;;)switch(s.state){case 0:
return void Promise.resolve(o._webviewContentLoaded()).then(s.createCallback(2),s.errback);
case 2:o._fileEntry=i||null,s.state=15;break;case 15:s.state=a?11:10;break;case 11:
t=a,o._setChangeCounter("increment"),s.state=12;break;case 10:s.state=i?3:8;break;
case 3:return void Promise.resolve(u(i)).then(s.createCallback(5),s.errback);case 5:
t=s.value,s.state=4;break;case 4:i.name.endsWith("svgz")&&(t=n(t)),s.state=12;break;
case 8:t=r,s.state=12;break;case 12:body.bridge.postMessage(o.id,"init",t,function(){
o._onWebviewContentInit(),e()}),body.bridge.addMessageHandler("setChangeCounter",function(e,t){
t===o.id&&o._setChangeCounter(e)}),s.state=-2;break;default:return s.end()}},this);
})},reloadFromDisk:function(){var e=this;return new Promise(function(t){return $traceurRuntime.asyncWrap(function(n){
for(;;)switch(n.state){case 0:body.bridge.unregisterTarget(e.id),e._setChangeCounter("reset"),
e._webviewContentLoadedCallbacks=[],e._webviewContentInitializedCallbacks=[],e["#webview"].reload(),
n.state=6;break;case 6:return void Promise.resolve(e._webviewContentLoaded()).then(n.createCallback(2),n.errback);
case 2:body.bridge.registerTarget(e.id,e["#webview"].contentWindow),n.state=8;break;
case 8:return void Promise.resolve(e.load({fileEntry:e._fileEntry,unsavedArtwork:null
})).then(n.createCallback(4),n.errback);case 4:t(),n.state=-2;break;default:return n.end();
}},this)})},save:function(){var e=this;return new Promise(function(n){var r,i,a;return $traceurRuntime.asyncWrap(function(o){
for(;;)switch(o.state){case 0:o.state=e._fileEntry?5:1;break;case 5:e.edited===!1?n():(r=s(e._fileEntry),
"svg"===r?(i="xml",a=!1):"svgz"===r?(i="xml",a=!0):"html"===r&&(i="html",a=!1),body.bridge.postMessage(e.id,"getArtwork",i,function(r){
return $traceurRuntime.asyncWrap(function(i){for(;;)switch(i.state){case 0:a&&(r=t(r)),
i.state=4;break;case 4:return void Promise.resolve(c(e._fileEntry,r)).then(i.createCallback(2),i.errback);
case 2:e._setChangeCounter("reset"),n(),i.state=-2;break;default:return i.end()}},this);
})),o.state=-2;break;case 1:return void Promise.resolve(e.saveAs()).then(o.createCallback(2),o.errback);
case 2:n(),o.state=-2;break;default:return o.end()}},this)})},saveAs:function(){var e=this;
return new Promise(function(n,r){var i={type:"saveFile",suggestedName:e._fileEntry?e._fileEntry.name:"Untitled",
acceptsAllTypes:!0,accepts:[{description:"HTML",extensions:["html"]},{description:"SVGZ",
extensions:["svgz"]},{description:"SVG",extensions:["svg"]}]};chrome.fileSystem.chooseEntry(i,function(i){
var a,o,u;return $traceurRuntime.asyncWrap(function(l){for(;;)switch(l.state){case 0:
chrome.runtime.lastError?r(chrome.runtime.lastError.message):(a=s(i),"svg"===a?(o="xml",
u=!1):"svgz"===a?(o="xml",u=!0):"html"===a&&(o="html",u=!1),body.bridge.postMessage(e.id,"getArtwork",o,function(r){
return $traceurRuntime.asyncWrap(function(a){for(;;)switch(a.state){case 0:e._fileEntry=i,
u&&(r=t(r)),a.state=4;break;case 4:return void Promise.resolve(c(e.fileEntry,r)).then(a.createCallback(2),a.errback);
case 2:e._setChangeCounter("reset"),e.dispatchEvent(new CustomEvent("fileentrychange",{
bubbles:!0,detail:e})),n(),a.state=-2;break;default:return a.end()}},this)})),l.state=-2;
break;default:return l.end()}},this)})})},getArtwork:function(){var e=void 0!==arguments[0]?arguments[0]:"xml",t=this;
return new Promise(function(n,r){t._cache&&t._cache.changeCounter===t._changeCounter&&t._cache.serialization===e?n(t._cache.artwork):body.bridge.postMessage(t.id,"getArtwork",e,function(r){
return $traceurRuntime.asyncWrap(function(i){for(;;)switch(i.state){case 0:t._cache={
artwork:r,changeCounter:t._changeCounter,serialization:e},n(r),i.state=-2;break;default:
return i.end()}},this)})})},focus:function(){this["#webview"].focus()},_setChangeCounter:function(e){
var t=this._changeCounter;"increment"===e?this._changeCounter+=1:"decrement"===e?this._changeCounter-=1:"reset"===e&&(this._changeCounter=0),
0!==t!=(0!==this._changeCounter)&&this.dispatchEvent(new CustomEvent("editedchange",{
bubbles:!0,detail:this}))}},{},e)}(HTMLElement),f=a("bx-editor",d);return{get default(){
return f}}}),System.registerModule("elements/bx-icon",[],function(){var e=System.get("utils/dom"),t=e.createElement,n=e.registerElement,r='\n<style>\n  @import url("stylesheets/bx-icon.css");\n</style>\n\n<main>\n  <svg id="svg" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 100 100">\n    <use id="use" width="100" height="100" x="0" y="0"></use>\n  </svg>\n</main>\n',i=function(e){
function n(){$traceurRuntime.superConstructor(n).apply(this,arguments)}return $traceurRuntime.createClass(n,{
createdCallback:function(){this._shadowRoot=this.createShadowRoot({mode:"closed"}),
this._shadowRoot.innerHTML=r;var e=!0,t=!1,n=void 0;try{for(var i=void 0,a=this._shadowRoot.querySelectorAll("[id]")[Symbol.iterator]();!(e=(i=a.next()).done);e=!0){
var o=i.value;this["#"+o.id]=o}}catch(s){t=!0,n=s}finally{try{e||null==a["return"]||a["return"]();
}finally{if(t)throw n}}this._onNameChange()},attributeChangedCallback:function(e,t,n){
t!==n&&"name"===e&&this._onNameChange()},get name(){return this.hasAttribute("name")?this.getAttribute("name"):"";
},set name(e){null===e?this.removeAttribute("name"):this.setAttribute("name",e)},
_onNameChange:function(){this["#use"].remove(),this["#use"]=t("svg:use"),this["#svg"].append(this["#use"]),
this["#use"].setAttribute("href","images/icons.svg#"+this.name)}},{},e)}(HTMLElement),a=n("bx-icon",i);
return{get default(){return a}}}),System.registerModule("elements/bx-mainbody",[],function(){
System.get("elements/bx-editor"),System.get("elements/bx-confirmdialog"),System.get("elements/bx-menubar"),
System.get("elements/bx-menu"),System.get("elements/bx-menuitem"),System.get("elements/bx-tabs");
var e=System.get("utils/array").compareArrays,t=System.get("utils/constants"),n=t.DEFAULT_ARTWORK,r=t.OS_NAME,i=System.get("utils/dom"),a=i.createElement,o=i.registerElement,s=System.get("utils/event"),u=s.getShortcutForKeyboardEvent,c=s.keyboardShortcutToString,l=System.get("utils/time").sleep,h=System.get("utils/window"),d=h.createAppWindow,f=h.getBackgroundWindow,b=System.get("utils/file"),m=b.getWritableFileEntry,v=b.getFileEntryDisplayPath,p=b.chooseFileEntry,g=b.compareFileEntries,y=b.restoreFileEntry,_=System.get("classes/bridge")["default"],w=System.get("classes/clipboard")["default"],k=System.get("classes/config")["default"],x=Object.entries,S="https://chrome.google.com/webstore/detail/boxy-svg/gaoogdonmngmdlbinmiclicjpbjhgomg/reviews",E="https://chrome.google.com/webstore/detail/boxy-svg/gaoogdonmngmdlbinmiclicjpbjhgomg/support",j="frontend/about.html",C="frontend/preferences.html",O=10,M={
id:"preferencesAppWindow",resizable:!1,hidden:!0,frame:{type:"chrome",color:"#333"
},outerBounds:{width:700,minWidth:700,maxWidth:700,height:450,minHeight:450,maxHeight:450
}},T={id:"aboutAppWindow",resizable:!1,hidden:!0,frame:{type:"chrome",color:"#333"
},outerBounds:{width:340,minWidth:340,maxWidth:340,height:400,minHeight:400,maxHeight:400
}},A='\n  <style>@import url("stylesheets/bx-mainbody.css");</style>\n\n  <bx-menubar id="menubar" disabled>\n    <bx-menu label="File">\n      <bx-menuitem commandid="new"></bx-menuitem>\n      <bx-menuitem commandid="newFromSelected"></bx-menuitem>\n      <bx-menuitem commandid="open"></bx-menuitem>\n      <bx-menuitem id="open-recent-menu-item" label="Open Recent">\n        <bx-menu id="open-recent-menu">\n          <hr/>\n          <bx-menuitem id="clear-recent-menu-item" commandid="clearRecent"></bx-menuitem>\n        </bx-menu>\n      </bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="save"></bx-menuitem>\n      <bx-menuitem commandid="saveAs"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="reloadFromDisk"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="close"></bx-menuitem>\n      <bx-menuitem commandid="quit"></bx-menuitem>\n    </bx-menu>\n\n    <bx-menu label="Edit">\n      <bx-menuitem commandid="undo"></bx-menuitem>\n      <bx-menuitem commandid="redo"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="cut"></bx-menuitem>\n      <bx-menuitem commandid="copy"></bx-menuitem>\n      <bx-menuitem commandid="copyPathData"></bx-menuitem>\n      <bx-menuitem commandid="paste"></bx-menuitem>\n      <bx-menuitem commandid="duplicate"></bx-menuitem>\n      <bx-menuitem commandid="delete"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="selectAll"></bx-menuitem>\n      <bx-menuitem commandid="deselectAll"></bx-menuitem>\n      <bx-menuitem commandid="selectNext"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="preferences"></bx-menuitem>\n    </bx-menu>\n\n    <bx-menu label="View">\n      <bx-menuitem commandid="zoomIn"></bx-menuitem>\n      <bx-menuitem commandid="zoomOut"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="zoomToFitAll"></bx-menuitem>\n      <bx-menuitem commandid="zoomToOriginalSize"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="zoomToViewBox"></bx-menuitem>\n      <bx-menuitem commandid="zoomToViewBoxWidth"></bx-menuitem>\n      <bx-menuitem commandid="zoomToViewBoxHeight"></bx-menuitem>\n    </bx-menu>\n\n    <bx-menu label="Object">\n      <bx-menuitem commandid="group"></bx-menuitem>\n      <bx-menuitem commandid="ungroup"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="raise"></bx-menuitem>\n      <bx-menuitem commandid="lower"></bx-menuitem>\n      <bx-menuitem commandid="raiseToFront"></bx-menuitem>\n      <bx-menuitem commandid="lowerToBack"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="clip"></bx-menuitem>\n      <bx-menuitem commandid="unclip"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="mask"></bx-menuitem>\n      <bx-menuitem commandid="unmask"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="rotateClockwise"></bx-menuitem>\n      <bx-menuitem commandid="rotateCounterclockwise"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="flipX"></bx-menuitem>\n      <bx-menuitem commandid="flipY"></bx-menuitem>\n      <hr/>\n      <bx-menuitem label="Move">\n        <bx-menu>\n          <bx-menuitem commandid="moveOneUnitLeft"></bx-menuitem>\n          <bx-menuitem commandid="moveOneUnitRight"></bx-menuitem>\n          <bx-menuitem commandid="moveOneUnitUp"></bx-menuitem>\n          <bx-menuitem commandid="moveOneUnitDown"></bx-menuitem>\n          <hr/>\n          <bx-menuitem commandid="moveTenUnitsLeft"></bx-menuitem>\n          <bx-menuitem commandid="moveTenUnitsRight"></bx-menuitem>\n          <bx-menuitem commandid="moveTenUnitsUp"></bx-menuitem>\n          <bx-menuitem commandid="moveTenUnitsDown"></bx-menuitem>\n        </bx-menu>\n      </bx-menuitem>\n    </bx-menu>\n\n    <bx-menu label="Tools">\n      <bx-menuitem commandid="previousTool"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="transformTool"></bx-menuitem>\n      <bx-menuitem commandid="editTool"></bx-menuitem>\n      <bx-menuitem commandid="quadBezierTool"></bx-menuitem>\n      <bx-menuitem commandid="cubicBezierTool"></bx-menuitem>\n      <bx-menuitem commandid="freehandTool"></bx-menuitem>\n      <bx-menuitem commandid="textTool"></bx-menuitem>\n      <bx-menuitem commandid="rectTool"></bx-menuitem>\n      <bx-menuitem commandid="ellipseTool"></bx-menuitem>\n      <bx-menuitem commandid="starTool"></bx-menuitem>\n      <bx-menuitem commandid="ringTool"></bx-menuitem>\n    </bx-menu>\n\n    <bx-menu label="Panels">\n      <bx-menuitem commandid="fillPanel"></bx-menuitem>\n      <bx-menuitem commandid="strokePanel"></bx-menuitem>\n      <bx-menuitem commandid="compositingPanel"></bx-menuitem>\n      <bx-menuitem commandid="maskPanel"></bx-menuitem>\n      <bx-menuitem commandid="typographyPanel"></bx-menuitem>\n      <bx-menuitem commandid="viewPanel"></bx-menuitem>\n      <bx-menuitem commandid="arrangementPanel"></bx-menuitem>\n      <bx-menuitem commandid="defsPanel"></bx-menuitem>\n    </bx-menu>\n\n    <bx-menu label="Window">\n      <bx-menuitem commandid="showPreviousTab"></bx-menuitem>\n      <bx-menuitem commandid="showNextTab"></bx-menuitem>\n      <bx-menuitem commandid="moveTabLeft"></bx-menuitem>\n      <bx-menuitem commandid="moveTabRight"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="minimizeWindow"></bx-menuitem>\n      <bx-menuitem commandid="maximizeWindow"></bx-menuitem>\n      <bx-menuitem commandid="fullscreen"></bx-menuitem>\n      <bx-menuitem commandid="restoreWindow"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="alwaysOnTop"></bx-menuitem>\n    </bx-menu>\n\n    <bx-menu label="Help">\n      <bx-menuitem commandid="about"></bx-menuitem>\n      <bx-menuitem commandid="rate"></bx-menuitem>\n      <bx-menuitem commandid="support"></bx-menuitem>\n    </bx-menu>\n  </bx-menubar>\n\n  <bx-tabs id="tabs"></bx-tabs>\n  <div id="editors"></div>\n  <dialog id="confirm-dialog" is="bx-confirmdialog"></dialog>\n',R=function(t){
function i(){$traceurRuntime.superConstructor(i).apply(this,arguments)}return $traceurRuntime.createClass(i,{
createdCallback:function(){var e,t,n,i,a,o,s,u;return $traceurRuntime.asyncWrap(function(c){
for(;;)switch(c.state){case 0:e=this,this.commands={"new":{label:"New",shortcut:["Ctrl","T"],
enabled:function(){return!0},exec:function(){return e._openEditor()}},newFromSelected:{
label:"New From Selected",shortcut:["Ctrl","Shift","N"],enabled:function(){return!0;
},exec:function(){return e._openEditorWithArtworkFromSelectedElements()}},open:{label:"Open…",
shortcut:["Ctrl","O"],enabled:function(){return!0},exec:function(){return l(100).then(function(){
return e._openEditorsWithArtworksFromFileDialog()})}},clearRecent:{label:"Clear Recent",
enabled:function(){return!0},exec:function(){return e._clearRecentFiles()}},save:{
label:"Save",shortcut:["Ctrl","S"],enabled:function(){return e.currentEditor&&e.currentEditor.edited;
},exec:function(){return l(100).then(function(){return e._saveCurrentEditorArtwork();
})}},saveAs:{shortcut:["Ctrl","Shift","S"],label:"Save As…",enabled:function(){return!0;
},exec:function(){return l(100).then(function(){return e._saveCurrentEditorArtworkAs();
})}},reloadFromDisk:{shortcut:["Ctrl","R"],label:"Reload from Disk",enabled:function(){
return!0},exec:function(){return e.currentEditor.reloadFromDisk()}},close:{shortcut:["Ctrl","W"],
label:"Close",enabled:function(){return!0},exec:function(){return e._closeEditor(e.currentEditor.id);
}},quit:{shortcut:["Ctrl","Q"],label:"Quit Boxy SVG",enabled:function(){return!0},
exec:function(){return e._closeAllAppWindows()}},showPreviousTab:{label:"Show Previous Tab",
shortcut:["Ctrl","Left"],enabled:function(){return e["#tabs"].children.length>1},
exec:function(){return e._toggleEditorForPreviousTab()}},showNextTab:{label:"Show Next Tab",
shortcut:["Ctrl","Right"],enabled:function(){return e["#tabs"].children.length>1},
exec:function(){return e._toggleEditorForNextTab()}},moveTabLeft:{label:"Move Tab Left",
shortcut:["Ctrl","Alt","Left"],enabled:function(){return e["#tabs"].children.length>1;
},exec:function(){return e._moveCurrentEditorTabLeft()}},moveTabRight:{label:"Move Tab Right",
shortcut:["Ctrl","Alt","Right"],enabled:function(){return e["#tabs"].children.length>1;
},exec:function(){return e._moveCurrentEditorTabRight()}},minimizeWindow:{label:"Minimize Window",
enabled:function(){return!0},exec:function(){return chrome.app.window.current().minimize();
}},maximizeWindow:{label:"Maximize Window",enabled:function(){return e._canMaximizeCurrentAppWindow();
},exec:function(){return e._maximizeCurrentAppWindow()}},restoreWindow:{label:"Restore",
enabled:function(){return e._canRestoreCurrentAppWindow()},exec:function(){return e._restoreCurrentAppWindow();
}},fullscreen:{label:"Fullscreen",enabled:function(){return!chrome.app.window.current().isFullscreen();
},exec:function(){return chrome.app.window.current().fullscreen()}},alwaysOnTop:{
label:"Always on Top",enabled:function(){return!0},state:function(){return chrome.app.window.current().isAlwaysOnTop();
},exec:function(){return e._toggleAlwaysOnTopAppWindowState()}},about:{label:"About",
enabled:function(){return!0},exec:function(){return e._openAboutAppWindow()}},preferences:{
label:"Preferences…",enabled:function(){return!0},exec:function(){return e._openPreferencesAppWindow();
}},rate:{label:"Rate on Chrome Web Store...",enabled:function(){return navigator.onLine;
},exec:function(){return chrome.browser.openTab({url:S})}},support:{label:"Get Support...",
enabled:function(){return navigator.onLine},exec:function(){return chrome.browser.openTab({
url:E})}}},this.bridge=new _,this.config=new k,this.clipboard=new w,this.userShortcuts={},
c.state=10;break;case 10:return void Promise.resolve(f()).then(c.createCallback(3),c.errback);
case 3:t=c.value,c.state=2;break;case 2:this.bridge.registerTarget("background",t),
"windows"===r&&this.setAttribute("bordered",""),this._shadowRoot=this.createShadowRoot({
mode:"closed"}),this._shadowRoot.innerHTML=A,n=!0,i=!1,a=void 0;try{for(o=void 0,
s=this._shadowRoot.querySelectorAll("[id]")[Symbol.iterator]();!(n=(o=s.next()).done);n=!0)u=o.value,
this["#"+u.id]=u}catch(h){i=!0,a=h}finally{try{n||null==s["return"]||s["return"]();
}finally{if(i)throw a}}window.addEventListener("focus",function(){return e._focusCurrentEditor();
}),this.config.addEventListener("change",function(t){return e._onConfigChange(t)}),
this._shadowRoot.addEventListener("keydown",function(t){return e._onShadowRootKeyDown(t);
}),this._shadowRoot.addEventListener("mousedown",function(t){return e._onShadowRootMouseDown(t);
}),this["#menubar"].addEventListener("dragover",function(t){return e._onMenubarDragOver(t);
}),this["#menubar"].addEventListener("drop",function(t){return e._onMenubarDrop(t);
}),this["#menubar"].addEventListener("menuitemclick",function(t){return e._onMenuItemClick(t);
}),this["#menubar"].validateMenu=function(t){return e._validateMenu(t)},this["#tabs"].addEventListener("mousedown",function(t){
return e._focusCurrentEditor()}),this["#tabs"].addEventListener("tabopenintent",function(t){
return e._openEditor()}),this["#tabs"].addEventListener("tabcloseintent",function(t){
return e._closeEditor(t.detail.id)}),this["#tabs"].addEventListener("tabdown",function(t){
return e._toggleEditor(t.detail.id)}),this["#tabs"].addEventListener("tabslotchange",function(t){
return e._onTabSlotChange(t)}),this["#tabs"].addEventListener("dragover",function(t){
return e._onTabsDragOver(t)}),this["#tabs"].addEventListener("drop",function(t){return e._onTabsDrop(t);
}),this["#editors"].addEventListener("editedchange",function(t){return e._onEditorEditedChange(t);
}),this["#editors"].addEventListener("fileentrychange",function(t){return e._onEditorFileEntryChange(t);
}),this.config.get("bx-shortcutseditor:userShortcuts").then(function(t){e.userShortcuts=t||{};
}),this.bridge.addMessageHandler("getVersion",function(e,t,n){n(chrome.runtime.getManifest().version);
}),this.bridge.addMessageHandler("openFiles",function(t,n){return $traceurRuntime.asyncWrap(function(n){
for(;;)switch(n.state){case 0:return void Promise.resolve(e._openEditorsWithArtworksFromRetainedFileEntries(t)).then(n.createCallback(2),n.errback);
case 2:e.currentEditor.focus(),n.state=-2;break;default:return n.end()}},this)}),
this.bridge.addMessageHandler("openBrowserTab",function(e,t){chrome.browser.openTab({
url:e})}),this.bridge.addMessageHandler("showConfirmDialog",function(t,n,r){e._showConfirmDialog(t).then(r);
}),this.bridge.addMessageHandler("getMenubarCommandDescriptors",function(t,n,r){e._getMenubarCommandDescriptors(function(e){
return r(e)})}),this.bridge.postMessage("background","ready"),c.state=12;break;case 12:
return void Promise.resolve(this._dbOpen()).then(c.createCallback(6),c.errback);case 6:
this._db=c.value,c.state=5;break;case 5:return void Promise.resolve(this._restoreSession()).then(c.createCallback(-2),c.errback);
default:return c.end()}},this)},execCommand:function(e){for(var t=document.activeElement;t._shadowRoot&&t._shadowRoot.activeElement;)t=t._shadowRoot.activeElement;
for(var n=t;n;n=n.parentNode||n.host)if(n.commands&&n.commands[e]){n.commands[e].exec();
break}},get currentEditor(){var e=!0,t=!1,n=void 0;try{for(var r=void 0,i=this["#editors"].children[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){
var a=r.value;if(a.disabled===!1)return a}}catch(o){t=!0,n=o}finally{try{e||null==i["return"]||i["return"]();
}finally{if(t)throw n}}return null},_onConfigChange:function(e){var t=e.detail,n=t.key,r=t.value;
"bx-shortcutseditor:userShortcuts"===n&&(this.userShortcuts=r||{})},_onShadowRootKeyDown:function(t){
var n,r,i=u(t),a=!0,o=!1,s=void 0;try{for(var c=void 0,l=x(this.commands)[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){
var h=c.value,d=(n=h[Symbol.iterator](),(r=n.next()).done?void 0:r.value),f=(r=n.next()).done?void 0:r.value,b=this._getComputedCommandShortcut(d);
if(e(i,b)){t.stopPropagation(),t.preventDefault(),(!f.enabled||f.enabled())&&(f.exec(),
this["#menubar"].blinkItem(d));break}}}catch(m){o=!0,s=m}finally{try{a||null==l["return"]||l["return"]();
}finally{if(o)throw s}}},_onShadowRootMouseDown:function(e){"bx-editor"!==e.target.localName&&e.preventDefault();
},_onMenubarDragOver:function(e){e.preventDefault(),e.dataTransfer.effectAllowed="copy",
e.dataTransfer.dropEffect="copy"},_onMenubarDrop:function(e){var t,n,r,i,a,o,s,u,c;
return $traceurRuntime.asyncWrap(function(l){for(;;)switch(l.state){case 0:e.preventDefault(),
t=!0,n=!1,r=void 0,l.state=28;break;case 28:l.pushTry(14,15),l.state=17;break;case 17:
i=void 0,a=e.dataTransfer.items[Symbol.iterator](),l.state=13;break;case 13:l.state=(t=(i=a.next()).done)?11:9;
break;case 5:t=!0,l.state=13;break;case 9:o=i.value,l.state=10;break;case 10:s=o.webkitGetAsEntry(),
l.state=8;break;case 8:l.state=s.name.endsWith(".svg")||s.name.endsWith(".svgz")?1:5;
break;case 1:return void Promise.resolve(m(s)).then(l.createCallback(3),l.errback);
case 3:u=l.value,l.state=2;break;case 2:this._openEditorWithArtworkFromFileEntry(u),
this._registerRecentFile(u),l.state=5;break;case 11:l.popTry(),l.state=15,l.finallyFallThrough=-2;
break;case 14:l.popTry(),l.maybeUncatchable(),c=l.storedException,l.state=20;break;
case 20:n=!0,r=c,l.state=15,l.finallyFallThrough=-2;break;case 15:l.popTry(),l.state=26;
break;case 26:try{t||null==a["return"]||a["return"]()}finally{if(n)throw r}l.state=24;
break;case 24:l.state=l.finallyFallThrough;break;default:return l.end()}},this)},
_onMenuItemClick:function(e){var t=this,n=e.detail;if(n.id.startsWith("open-recent-")){
var r=n.id.substring(12);chrome.fileSystem.restoreEntry(r,function(e){t._openEditorWithArtworkFromFileEntry(e),
t._registerRecentFile(e)})}else{var i=this.commands[n.commandID];i?i.exec():this.bridge.postMessage(this.currentEditor.id,"execCommand",n.commandID);
}},_onTabSlotChange:function(e){this._storeSession()},_onTabsDragOver:function(e){
e.preventDefault(),e.dataTransfer.effectAllowed="copy",e.dataTransfer.dropEffect="copy";
},_onTabsDrop:function(e){var t,n,r,i,a,o,s,u,c;return $traceurRuntime.asyncWrap(function(l){
for(;;)switch(l.state){case 0:e.preventDefault(),t=!0,n=!1,r=void 0,l.state=28;break;
case 28:l.pushTry(14,15),l.state=17;break;case 17:i=void 0,a=e.dataTransfer.items[Symbol.iterator](),
l.state=13;break;case 13:l.state=(t=(i=a.next()).done)?11:9;break;case 5:t=!0,l.state=13;
break;case 9:o=i.value,l.state=10;break;case 10:s=o.webkitGetAsEntry(),l.state=8;break;
case 8:l.state=s.name.endsWith(".svg")||s.name.endsWith(".svgz")?1:5;break;case 1:
return void Promise.resolve(m(s)).then(l.createCallback(3),l.errback);case 3:u=l.value,
l.state=2;break;case 2:this._openEditorWithArtworkFromFileEntry(u),this._registerRecentFile(u),
l.state=5;break;case 11:l.popTry(),l.state=15,l.finallyFallThrough=-2;break;case 14:
l.popTry(),l.maybeUncatchable(),c=l.storedException,l.state=20;break;case 20:n=!0,
r=c,l.state=15,l.finallyFallThrough=-2;break;case 15:l.popTry(),l.state=26;break;case 26:
try{t||null==a["return"]||a["return"]()}finally{if(n)throw r}l.state=24;break;case 24:
l.state=l.finallyFallThrough;break;default:return l.end()}},this)},_onEditorEditedChange:function(e){
var t=e.detail,n=this["#tabs"].querySelector("#"+t.id);n.icon=t.edited?"close-edited":"close";
},_onEditorFileEntryChange:function(e){var t=e.detail,n=this["#tabs"].querySelector("#"+t.id);
n.label=t.fileEntry?t.fileEntry.name:"Untitled",this._registerRecentFile(t.fileEntry),
this._storeSession()},_showConfirmDialog:function(e){var t=this;return new Promise(function(n){
var r;t["#confirm-dialog"].open&&t["#confirm-dialog"].close(null),t["#menubar"].disabled=!0,
t["#tabs"].disabled=!0,t["#confirm-dialog"].showModal(e),t["#confirm-dialog"].addEventListener("close",r=function(){
t["#confirm-dialog"].removeEventListener("close",r),t["#menubar"].disabled=!1,t["#tabs"].disabled=!1,
t._focusCurrentEditor(),n(t["#confirm-dialog"].returnValue)})})},_getCommandDescriptor:function(e){
var t=this;return new Promise(function(n){if(t.commands[e]){var r=t.commands[e],i={
label:r.label,shortcut:r.shortcut?r.shortcut:[],state:r.state?r.state():!1,enabled:r.enabled?r.enabled():!0
};n(i)}else t.currentEditor?t.bridge.postMessage(t.currentEditor.id,"getCommand",e,function(e){
n(e)}):n(null)})},_getComputedCommandShortcut:function(e){var t=[];return this.userShortcuts[e]?t=this.userShortcuts[e]:this.commands[e]&&this.commands[e].shortcut&&(t=this.commands[e].shortcut),
t},_validateMenu:function(e){var t=this;return new Promise(function(n){var r,i,a,o,s,u,l,h,d,f;
return $traceurRuntime.asyncWrap(function(b){for(;;)switch(b.state){case 0:"open-recent-menu"===e.id&&t._updateOpenRecentMenu(e),
r=$traceurRuntime.spread(e.children).filter(function(e){return e.commandID}),i=!0,
a=!1,o=void 0,b.state=27;break;case 27:b.pushTry(13,14),b.state=16;break;case 16:
s=void 0,u=r[Symbol.iterator](),b.state=12;break;case 12:b.state=(i=(s=u.next()).done)?10:8;
break;case 7:i=!0,b.state=12;break;case 8:l=s.value,b.state=9;break;case 9:h=l.commandID,
b.state=5;break;case 5:return void Promise.resolve(t._getCommandDescriptor(h)).then(b.createCallback(3),b.errback);
case 3:d=b.value,b.state=2;break;case 2:d&&(l.disabled=!d.enabled,l.shortcut=c(t.userShortcuts[h]||d.shortcut),
l.label=d.label,d.state===!0?l.state="toggled":d.state===!1?l.state=null:l.state="selected"),
b.state=7;break;case 10:b.popTry(),b.state=14,b.finallyFallThrough=18;break;case 13:
b.popTry(),b.maybeUncatchable(),f=b.storedException,b.state=19;break;case 19:a=!0,
o=f,b.state=14,b.finallyFallThrough=18;break;case 14:b.popTry(),b.state=25;break;case 25:
try{i||null==u["return"]||u["return"]()}finally{if(a)throw o}b.state=23;break;case 18:
n(),b.state=-2;break;case 23:b.state=b.finallyFallThrough;break;default:return b.end();
}},this)})},_updateOpenRecentMenu:function(e){var t,n,r,i,o,s,u,c,l,h,d,f,b,m,v,p,g;
return $traceurRuntime.asyncWrap(function(_){for(;;)switch(_.state){case 0:t=!0,n=!1,
r=void 0;try{for(i=void 0,o=$traceurRuntime.spread(e.children)[Symbol.iterator]();!(t=(i=o.next()).done);t=!0)s=i.value,
s.id&&s.id.startsWith("open-recent-")&&s.remove()}catch(w){n=!0,r=w}finally{try{t||null==o["return"]||o["return"]();
}finally{if(n)throw r}}_.state=31;break;case 31:return void Promise.resolve(this._dbGetRecent()).then(_.createCallback(3),_.errback);
case 3:u=_.value,_.state=2;break;case 2:c=!0,_.state=33;break;case 33:_.state=u.length>0?27:19;
break;case 27:l=!0,h=!1,d=void 0,_.state=28;break;case 28:_.pushTry(14,15),_.state=17;
break;case 17:f=void 0,b=u[Symbol.iterator](),_.state=13;break;case 13:_.state=(l=(f=b.next()).done)?11:9;
break;case 8:l=!0,_.state=13;break;case 9:m=f.value,_.state=10;break;case 10:return void Promise.resolve(y(m)).then(_.createCallback(6),_.errback);
case 6:v=_.value,_.state=5;break;case 5:v&&(p=a("bx-menuitem"),p.id="open-recent-"+m,
p.label=v.name,p.state=null,p.enabled=!0,e.prepend(p),c=!1),_.state=8;break;case 11:
_.popTry(),_.state=15,_.finallyFallThrough=19;break;case 14:_.popTry(),_.maybeUncatchable(),
g=_.storedException,_.state=20;break;case 20:h=!0,d=g,_.state=15,_.finallyFallThrough=19;
break;case 15:_.popTry(),_.state=26;break;case 26:try{l||null==b["return"]||b["return"]();
}finally{if(h)throw d}_.state=24;break;case 19:this["#clear-recent-menu-item"].disabed=c,
_.state=-2;break;case 24:_.state=_.finallyFallThrough;break;default:return _.end();
}},this)},_getMenubarCommandDescriptors:function(e){var t=this,n=document.createTreeWalker(this["#menubar"],NodeFilter.SHOW_ELEMENT),r=[],i=function(){
var a,o,s,u,c,l,h=arguments;return $traceurRuntime.asyncWrap(function(d){for(;;)switch(d.state){
case 0:a=void 0!==h[0]?h[0]:n.nextNode(),d.state=13;break;case 13:d.state=null===a?9:8;
break;case 9:e(r),d.state=-2;break;case 8:d.state=a.commandID?1:6;break;case 1:return void Promise.resolve(t._getCommandDescriptor(a.commandID)).then(d.createCallback(3),d.errback);
case 3:o=d.value,d.state=2;break;case 2:for(s=a.commandID,u=o.shortcut,c=o.label,
l=a.parentElement;l&&l!==t._menubar;l=l.parentElement)l.label&&(c=l.label+" ‣ "+c);
r.push({id:s,shortcut:u,label:c}),i(),d.state=-2;break;case 6:i(),d.state=-2;break;
default:return d.end()}},this)};i()},_openPreferencesAppWindow:function(){var e=this;
return new Promise(function(t){var n,r;return $traceurRuntime.asyncWrap(function(i){
for(;;)switch(i.state){case 0:i.state=e._preferencesAppWindow?6:1;break;case 6:e._preferencesAppWindow.focus(),
t(),i.state=-2;break;case 1:return void Promise.resolve(d(C,M)).then(i.createCallback(3),i.errback);
case 3:e._preferencesAppWindow=i.value,i.state=2;break;case 2:e._preferencesAppWindow.contentWindow.name="preferences",
e.bridge.registerTarget("preferences",e._preferencesAppWindow.contentWindow),e._preferencesAppWindow.contentWindow.addEventListener("load",n=function(){
return $traceurRuntime.asyncWrap(function(r){for(;;)switch(r.state){case 0:e._preferencesAppWindow.contentWindow.removeEventListener("load",n),
e.bridge.postMessage("preferences","init"),r.state=4;break;case 4:return void Promise.resolve(l(150)).then(r.createCallback(2),r.errback);
case 2:e._preferencesAppWindow.show(),t(),r.state=-2;break;default:return r.end();
}},this)}),e._preferencesAppWindow.onClosed.addListener(r=function(){e._preferencesAppWindow.onClosed.removeListener(r),
e._preferencesAppWindow=null,e.bridge.unregisterTarget("preferences")}),i.state=-2;
break;default:return i.end()}},this)})},_openAboutAppWindow:function(){var e=this;
return new Promise(function(t){var n,r;return $traceurRuntime.asyncWrap(function(i){
for(;;)switch(i.state){case 0:i.state=e._aboutAppWindow?6:1;break;case 6:e._aboutAppWindow.focus(),
t(),i.state=-2;break;case 1:return void Promise.resolve(d(j,T)).then(i.createCallback(3),i.errback);
case 3:e._aboutAppWindow=i.value,i.state=2;break;case 2:e._aboutAppWindow.contentWindow.name="about",
e.bridge.registerTarget("about",e._aboutAppWindow.contentWindow),e._aboutAppWindow.contentWindow.addEventListener("load",n=function(){
return $traceurRuntime.asyncWrap(function(r){for(;;)switch(r.state){case 0:e._aboutAppWindow.contentWindow.removeEventListener("load",n),
e.bridge.postMessage("about","init"),r.state=4;break;case 4:return void Promise.resolve(l(150)).then(r.createCallback(2),r.errback);
case 2:e._aboutAppWindow.show(),t(),r.state=-2;break;default:return r.end()}},this);
}),e._aboutAppWindow.onClosed.addListener(r=function(){e._aboutAppWindow.onClosed.removeListener(r),
e._aboutAppWindow=null,e.bridge.unregisterTarget("about")}),i.state=-2;break;default:
return i.end()}},this)})},_closeAllAppWindows:function(){this._aboutAppWindow&&this._aboutAppWindow.close(),
this._preferencesAppWindow&&this._preferencesAppWindow.close(),chrome.app.window.current().close();
},_maximizeCurrentAppWindow:function(){var e=chrome.app.window.current();e.maximize();
},_canMaximizeCurrentAppWindow:function(){var e=chrome.app.window.current();return e.isMaximized()===!1&&e.isFullscreen()===!1;
},_restoreCurrentAppWindow:function(){var e=chrome.app.window.current();e.restore();
},_canRestoreCurrentAppWindow:function(){var e=chrome.app.window.current();return e.isMaximized()||e.isFullscreen();
},_toggleAlwaysOnTopAppWindowState:function(){var e=chrome.app.window.current();e.setAlwaysOnTop(!e.isAlwaysOnTop());
},_openEditor:function(){var e=void 0!==arguments[0]?arguments[0]:null,t=this;return new Promise(function(n){
var r,i,o,s,u,c,l,h;return $traceurRuntime.asyncWrap(function(d){for(;;)switch(d.state){
case 0:r=a("bx-editor"),r.id=t._createUniqueEditorID(),r.disabled=!0,t["#editors"].append(r),
i=t["#tabs"].openTab(r.id,"Untitled"),i.disabled=!0,d.state=4;break;case 4:return void Promise.resolve(r.load({
fileEntry:null,unsavedArtwork:e})).then(d.createCallback(2),d.errback);case 2:o=!0,
s=!1,u=void 0;try{for(c=void 0,l=t["#editors"].children[Symbol.iterator]();!(o=(c=l.next()).done);o=!0)h=c.value,
h.disabled=h!==r}catch(f){s=!0,u=f}finally{try{o||null==l["return"]||l["return"]();
}finally{if(s)throw u}}t["#tabs"].highlightTab(r.id),i.disabled=!1,n(r),d.state=-2;
break;default:return d.end()}},this)})},_openEditorWithArtworkFromFileEntry:function(e){
var t=this;return new Promise(function(n){var r,i,o,s,u,c,l,h,d,f,b,m,p,g,y,_,w,k,x,S,E,j,C,O,M,T,A,R;
return $traceurRuntime.asyncWrap(function(I){for(;;)switch(I.state){case 0:return void Promise.resolve(v(e)).then(I.createCallback(3),I.errback);
case 3:r=I.value,I.state=2;break;case 2:i=null,o=!0,s=!1,u=void 0,I.state=49;break;
case 49:I.pushTry(26,27),I.state=29;break;case 29:c=void 0,l=t["#editors"].children[Symbol.iterator](),
I.state=25;break;case 25:I.state=(o=(c=l.next()).done)?23:21;break;case 17:o=!0,I.state=25;
break;case 21:h=c.value,I.state=22;break;case 22:C=h.fileEntry,I.state=15;break;case 15:
I.state=C?7:11;break;case 7:O=h.fileEntry,M=v(O),I.state=8;break;case 8:return void Promise.resolve(M).then(I.createCallback(6),I.errback);
case 6:T=I.value,I.state=5;break;case 5:A=r===T,I.state=10;break;case 11:A=C,I.state=10;
break;case 10:I.state=A?18:17;break;case 18:i=h,I.state=23;break;case 23:I.popTry(),
I.state=27,I.finallyFallThrough=31;break;case 26:I.popTry(),I.maybeUncatchable(),
R=I.storedException,I.state=32;break;case 32:s=!0,u=R,I.state=27,I.finallyFallThrough=31;
break;case 27:I.popTry(),I.state=38;break;case 38:try{o||null==l["return"]||l["return"]();
}finally{if(s)throw u}I.state=36;break;case 31:I.state=i?45:41;break;case 45:d=!0,
f=!1,b=void 0;try{for(m=void 0,p=t["#editors"].children[Symbol.iterator]();!(d=(m=p.next()).done);d=!0)g=m.value,
g.disabled=g!==i}catch(P){f=!0,b=P}finally{try{d||null==p["return"]||p["return"]();
}finally{if(f)throw b}}t["#tabs"].highlightTab(i.id),n(i),I.state=-2;break;case 41:
y=a("bx-editor"),y.id=t._createUniqueEditorID(),y.disabled=!0,t["#editors"].append(y),
_=t["#tabs"].openTab(y.id,e.name),_.disabled=!0,I.state=42;break;case 42:return void Promise.resolve(y.load({
fileEntry:e,unsavedArtwork:null})).then(I.createCallback(40),I.errback);case 40:w=!0,
k=!1,x=void 0;try{for(S=void 0,E=t["#editors"].children[Symbol.iterator]();!(w=(S=E.next()).done);w=!0)j=S.value,
j.disabled=j!==y}catch(L){k=!0,x=L}finally{try{w||null==E["return"]||E["return"]();
}finally{if(k)throw x}}t["#tabs"].highlightTab(y.id),_.disabled=!1,n(y),I.state=-2;
break;case 36:I.state=I.finallyFallThrough;break;default:return I.end()}},this)});
},_openEditorsWithArtworksFromRetainedFileEntries:function(e){var t=this;return new Promise(function(n){
var r,i,a,o,s,u,c,l;return $traceurRuntime.asyncWrap(function(h){for(;;)switch(h.state){
case 0:r=!0,i=!1,a=void 0,h.state=28;break;case 28:h.pushTry(14,15),h.state=17;break;
case 17:o=void 0,s=e[Symbol.iterator](),h.state=13;break;case 13:h.state=(r=(o=s.next()).done)?11:9;
break;case 7:r=!0,h.state=13;break;case 9:u=o.value,h.state=10;break;case 10:return void Promise.resolve(y(u)).then(h.createCallback(3),h.errback);
case 3:c=h.value,h.state=2;break;case 2:h.state=c?4:7;break;case 4:return void Promise.resolve(t._openEditorWithArtworkFromFileEntry(c)).then(h.createCallback(5),h.errback);
case 5:return void Promise.resolve(t._registerRecentFile(c)).then(h.createCallback(7),h.errback);
case 11:h.popTry(),h.state=15,h.finallyFallThrough=19;break;case 14:h.popTry(),h.maybeUncatchable(),
l=h.storedException,h.state=20;break;case 20:i=!0,a=l,h.state=15,h.finallyFallThrough=19;
break;case 15:h.popTry(),h.state=26;break;case 26:try{r||null==s["return"]||s["return"]();
}finally{if(i)throw a}h.state=24;break;case 19:n(),h.state=-2;break;case 24:h.state=h.finallyFallThrough;
break;default:return h.end()}},this)})},_openEditorsWithArtworksFromFileDialog:function(){
var e=this;return new Promise(function(t,n){var r,i,a,o,s,u,c,l;return $traceurRuntime.asyncWrap(function(n){
for(;;)switch(n.state){case 0:return void Promise.resolve(p({type:"openWritableFile",
acceptsMultiple:!0,accepts:[{extensions:["svg","svgz","html"]}]})).then(n.createCallback(3),n.errback);
case 3:r=n.value,n.state=2;break;case 2:i=!0,a=!1,o=void 0,n.state=27;break;case 27:
n.pushTry(13,14),n.state=16;break;case 16:s=void 0,u=r[Symbol.iterator](),n.state=12;
break;case 12:n.state=(i=(s=u.next()).done)?10:8;break;case 7:i=!0,n.state=12;break;
case 8:c=s.value,n.state=9;break;case 9:return void Promise.resolve(e._openEditorWithArtworkFromFileEntry(c)).then(n.createCallback(5),n.errback);
case 5:return void Promise.resolve(e._registerRecentFile(c)).then(n.createCallback(7),n.errback);
case 10:n.popTry(),n.state=14,n.finallyFallThrough=18;break;case 13:n.popTry(),n.maybeUncatchable(),
l=n.storedException,n.state=19;break;case 19:a=!0,o=l,n.state=14,n.finallyFallThrough=18;
break;case 14:n.popTry(),n.state=25;break;case 25:try{i||null==u["return"]||u["return"]();
}finally{if(a)throw o}n.state=23;break;case 18:t(),n.state=-2;break;case 23:n.state=n.finallyFallThrough;
break;default:return n.end()}},this)})},_openEditorWithArtworkFromSelectedElements:function(){
var e=this;return new Promise(function(t){e.bridge.postMessage(e.currentEditor.id,"getArtworkFromSelectedElements","html",function(r){
return $traceurRuntime.asyncWrap(function(i){for(;;)switch(i.state){case 0:return void Promise.resolve(e._openEditor(r||n)).then(i.createCallback(2),i.errback);
case 2:t(),i.state=-2;break;default:return i.end()}},this)})})},_closeEditor:function(e){
var t=this;return new Promise(function(n,r){var i,a,o,s,u;return $traceurRuntime.asyncWrap(function(c){
for(;;)switch(c.state){case 0:i=t["#editors"].querySelector("#"+e)||null,a=function(){
var e,r,a,o,s,u,c,l,h;return $traceurRuntime.asyncWrap(function(d){for(;;)switch(d.state){
case 0:d.state=i===t.currentEditor?3:7;break;case 3:e=null,t["#tabs"].children.length>1&&(r=t["#tabs"].querySelector("#"+i.id),
a=$traceurRuntime.spread(t["#tabs"].children).indexOf(r),e=a===t["#tabs"].children.length-1?t["#tabs"].children[a-1].id:t["#tabs"].children[a+1].id),
o=!0,s=!1,u=void 0;try{for(c=void 0,l=t["#editors"].children[Symbol.iterator]();!(o=(c=l.next()).done);o=!0)h=c.value,
h.disabled=h.id===e?!1:!0}catch(f){s=!0,u=f}finally{try{o||null==l["return"]||l["return"]();
}finally{if(s)throw u}}t["#tabs"].highlightTab(e),d.state=4;break;case 4:return void Promise.resolve(t["#tabs"].closeTab(i.id)).then(d.createCallback(2),d.errback);
case 2:i.remove(),0===t["#editors"].children.length&&t._openEditor(),d.state=6;break;
case 7:return void Promise.resolve(t["#tabs"].closeTab(i.id)).then(d.createCallback(8),d.errback);
case 8:i.remove(),t._storeSession(),d.state=6;break;case 6:n(),d.state=-2;break;default:
return d.end()}},this)},c.state=34;break;case 34:c.state=t._restoringSession?30:29;
break;case 30:r("Can't close editor while restoring session"),c.state=-2;break;case 29:
c.state=null===i?27:26;break;case 27:r("Editor with given ID is not open"),c.state=-2;
break;case 26:c.state=i.edited===!1?24:1;break;case 24:a(),c.state=-2;break;case 1:
return void Promise.resolve(t._showConfirmDialog({title:"Unsaved changes",description:'"<strong>'+i.fileName+'</strong>" was modified, would you like to save it before closing?',
buttons:[{value:"dontSave",label:"Don't Save"},{value:"cancel",label:"Cancel"},{value:"save",
label:"Save"}]})).then(c.createCallback(3),c.errback);case 3:o=c.value,c.state=2;break;
case 2:c.state="save"===o?4:21;break;case 4:return void Promise.resolve(l(30)).then(c.createCallback(5),c.errback);
case 5:s=null,c.state=18;break;case 18:c.pushTry(8,null),c.state=11;break;case 11:
return void Promise.resolve(i.save()).then(c.createCallback(7),c.errback);case 7:
c.popTry(),c.state=13;break;case 8:c.popTry(),c.maybeUncatchable(),u=c.storedException,
c.state=14;break;case 14:s=u,c.state=13;break;case 13:s?r(s):a(),c.state=-2;break;
case 21:"dontSave"===o?a():"cancel"===o&&n(),c.state=-2;break;default:return c.end();
}},this)})},_saveCurrentEditorArtwork:function(){var e=this;return new Promise(function(t){
return $traceurRuntime.asyncWrap(function(n){for(;;)switch(n.state){case 0:return void Promise.resolve(e.currentEditor.save()).then(n.createCallback(2),n.errback);
case 2:t(),n.state=-2;break;default:return n.end()}},this)})},_saveCurrentEditorArtworkAs:function(){
var e=this;return new Promise(function(t){return $traceurRuntime.asyncWrap(function(n){
for(;;)switch(n.state){case 0:return void Promise.resolve(e.currentEditor.saveAs()).then(n.createCallback(2),n.errback);
case 2:t(),n.state=-2;break;default:return n.end()}},this)})},_toggleEditor:function(e){
var t=!0,n=!1,r=void 0;try{for(var i=void 0,a=this["#editors"].children[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){
var o=i.value;o.disabled=o.id===e?!1:!0}}catch(s){n=!0,r=s}finally{try{t||null==a["return"]||a["return"]();
}finally{if(n)throw r}}this["#tabs"].highlightTab(e),this._storeSession()},_toggleEditorForPreviousTab:function(){
var e=this["#tabs"].getTabsByScreenPosition(),t=this["#tabs"].querySelector("[highlighted]"),n=e.indexOf(t),r=e[n-1]||e[e.length-1];
this._toggleEditor(r.id)},_toggleEditorForNextTab:function(){var e=this["#tabs"].getTabsByScreenPosition(),t=this["#tabs"].querySelector("[highlighted]"),n=e.indexOf(t),r=e[n+1]||e[0];
this._toggleEditor(r.id)},_moveCurrentEditorTabLeft:function(){this["#tabs"].moveHighlightedTabLeft(),
this._storeSession()},_moveCurrentEditorTabRight:function(){this["#tabs"].moveHighlightedTabRight(),
this._storeSession()},_focusCurrentEditor:function(){this.currentEditor&&this.currentEditor.focus();
},_createUniqueEditorID:function(){for(var e=void 0!==arguments[0]?arguments[0]:[],t=0;;){
var n="editor-"+t;if(!this["#editors"].querySelector("#"+n)&&!e.includes(n))return n;
t+=1}},_registerRecentFile:function(e){var t=this;return new Promise(function(n){
var r,i,a,o,s,u,c,l,h,d,f,b,m,p,g,_,w,k,x;return $traceurRuntime.asyncWrap(function(n){
for(;;)switch(n.state){case 0:r=[],i=Symbol(),a=!0,o=!1,s=void 0,n.state=41;break;
case 41:n.pushTry(22,23),n.state=25;break;case 25:u=void 0,m=t._dbGetRecent,p=m.call(t),
n.state=5;break;case 5:return void Promise.resolve(p).then(n.createCallback(3),n.errback);
case 3:g=n.value,n.state=2;break;case 2:_=Symbol.iterator,w=g[_],k=w.call(g),c=k,
n.state=7;break;case 7:n.state=21;break;case 21:n.state=(a=(u=c.next()).done)?19:17;
break;case 15:a=!0,n.state=21;break;case 17:l=u.value,n.state=18;break;case 18:return void Promise.resolve(y(l)).then(n.createCallback(10),n.errback);
case 10:h=n.value,n.state=9;break;case 9:n.state=h?11:15;break;case 11:return void Promise.resolve(v(h)).then(n.createCallback(13),n.errback);
case 13:d=n.value,n.state=12;break;case 12:h[i]=d,r.push(h),n.state=15;break;case 19:
n.popTry(),n.state=23,n.finallyFallThrough=27;break;case 22:n.popTry(),n.maybeUncatchable(),
x=n.storedException,n.state=28;break;case 28:o=!0,s=x,n.state=23,n.finallyFallThrough=27;
break;case 23:n.popTry(),n.state=34;break;case 34:try{a||null==c["return"]||c["return"]();
}finally{if(o)throw s}n.state=32;break;case 27:return void Promise.resolve(v(e)).then(n.createCallback(37),n.errback);
case 37:f=n.value,n.state=36;break;case 36:for(r=r.filter(function(e){return e[i]!==f;
}),r.push(e);r.length>O;)r.shift();b=r.map(function(e){return chrome.fileSystem.retainEntry(e);
}),n.state=43;break;case 43:return void Promise.resolve(t._dbSetRecent(b)).then(n.createCallback(-2),n.errback);
case 32:n.state=n.finallyFallThrough;break;default:return n.end()}},this)})},_clearRecentFiles:function(){
var e=this;return new Promise(function(t){e._dbSetRecent([])})},_requestStoreSession:function(){},
_storeSession:function(){var e=this;return new Promise(function(t){var n,r,i,a,o,s,u,c,l,h,d,f,b,m,v,p,g,y,_,w,k,x,S,E;
return $traceurRuntime.asyncWrap(function(j){for(;;)switch(j.state){case 0:j.state=e._storingSession||e._restoringSession?4:3;
break;case 4:t(),j.state=5;break;case 5:j.returnValue=void 0,j.state=2;break;case 2:
j.state=-2;break;case 3:console.time("Store session"),e._storingSession=!0,n=[],r=e["#tabs"].getTabsByScreenPosition(),
i=!0,a=!1,o=void 0,j.state=46;break;case 46:j.pushTry(30,31),j.state=33;break;case 33:
s=void 0,u=r[Symbol.iterator](),j.state=29;break;case 29:j.state=(i=(s=u.next()).done)?27:25;
break;case 24:i=!0,j.state=29;break;case 25:c=s.value,j.state=26;break;case 26:l=e["#editors"].querySelector("#"+c.id),
j.state=22;break;case 22:d=l.fileEntry,d?(f=chrome.fileSystem,b=f.retainEntry,m=l.fileEntry,
v=b.call(f,m),p=v):p=null,g=l.edited,j.state=18;break;case 18:j.state=g?10:14;break;
case 10:y=l.getArtwork,_=y.call(l),j.state=11;break;case 11:return void Promise.resolve(_).then(j.createCallback(9),j.errback);
case 9:w=j.value,j.state=8;break;case 8:k=w,j.state=13;break;case 14:k=null,j.state=13;
break;case 13:x=c.highlighted,S={retainedFileEntry:p,unsavedArtwork:k,primary:x},
h=S,j.state=20;break;case 20:n.push(h),j.state=24;break;case 27:j.popTry(),j.state=31,
j.finallyFallThrough=35;break;case 30:j.popTry(),j.maybeUncatchable(),E=j.storedException,
j.state=36;break;case 36:a=!0,o=E,j.state=31,j.finallyFallThrough=35;break;case 31:
j.popTry(),j.state=42;break;case 42:try{i||null==u["return"]||u["return"]()}finally{
if(a)throw o}j.state=40;break;case 35:return void Promise.resolve(e._dbSetSession(n)).then(j.createCallback(44),j.errback);
case 44:console.timeEnd("Store session"),e._storingSession=!1,j.state=-2;break;case 40:
j.state=j.finallyFallThrough;break;default:return j.end()}},this)})},_restoreSession:function(){
var e=this;return new Promise(function(t,n){var r,i,o,s,u,c,l,h,d,f,b,m,v,p,_,w,k,x,S,E,j,C,O,M,T,A,R,I,P,L,F,D,z,W,N,B,$,H,U,G,V,q,Z,K,Y,X,Q,J,ee,te,ne,re,ie,ae,oe,se,ue,ce,le,he,de,fe,be,me,ve,pe,ge,ye,_e;
return $traceurRuntime.asyncWrap(function(n){for(;;)switch(n.state){case 0:e._restoringSession=!0,
n.state=127;break;case 127:return void Promise.resolve(e._dbGetSession()).then(n.createCallback(3),n.errback);
case 3:r=n.value,n.state=2;break;case 2:i=[],o=!0,s=!1,u=void 0,n.state=129;break;
case 129:n.pushTry(27,28),n.state=30;break;case 30:c=void 0,l=r[Symbol.iterator](),
n.state=26;break;case 26:n.state=(o=(c=l.next()).done)?24:22;break;case 21:o=!0,n.state=26;
break;case 22:h=c.value,n.state=23;break;case 23:h.id=e._createUniqueEditorID(i),
n.state=19;break;case 19:se=h.retainedFileEntry,n.state=15;break;case 15:n.state=se?7:11;
break;case 7:ue=h.retainedFileEntry,ce=y(ue),n.state=8;break;case 8:return void Promise.resolve(ce).then(n.createCallback(6),n.errback);
case 6:le=n.value,n.state=5;break;case 5:he=le,n.state=10;break;case 11:he=null,n.state=10;
break;case 10:h.fileEntry=he,n.state=17;break;case 17:h.name=h.fileEntry?h.fileEntry.name:"Untitled",
i.push(h.id),n.state=21;break;case 24:n.popTry(),n.state=28,n.finallyFallThrough=32;
break;case 27:n.popTry(),n.maybeUncatchable(),de=n.storedException,n.state=33;break;
case 33:s=!0,u=de,n.state=28,n.finallyFallThrough=32;break;case 28:n.popTry(),n.state=39;
break;case 39:try{o||null==l["return"]||l["return"]()}finally{if(s)throw u}n.state=37;
break;case 32:return void Promise.resolve(e._getFileEntriesPassedOnAppLaunch()).then(n.createCallback(42),n.errback);
case 42:d=n.value,n.state=41;break;case 41:f=!0,b=!1,m=void 0,n.state=131;break;case 131:
n.pushTry(87,88),n.state=90;break;case 90:v=void 0,p=d[Symbol.iterator](),n.state=86;
break;case 86:n.state=(f=(v=p.next()).done)?84:82;break;case 81:f=!0,n.state=86;break;
case 82:_=v.value,n.state=83;break;case 83:w=void 0,k=!0,x=!1,S=void 0,n.state=79;
break;case 79:n.pushTry(65,66),n.state=68;break;case 68:E=void 0,j=r[Symbol.iterator](),
n.state=64;break;case 64:n.state=(k=(E=j.next()).done)?62:60;break;case 56:k=!0,n.state=64;
break;case 60:C=E.value,n.state=61;break;case 61:fe=C.fileEntry,n.state=54;break;case 54:
n.state=fe?46:50;break;case 46:be=C.fileEntry,me=g(_,be),n.state=47;break;case 47:
return void Promise.resolve(me).then(n.createCallback(45),n.errback);case 45:ve=n.value,
n.state=44;break;case 44:pe=ve,n.state=49;break;case 50:pe=fe,n.state=49;break;case 49:
n.state=pe?57:56;break;case 57:w=C,n.state=62;break;case 62:n.popTry(),n.state=66,
n.finallyFallThrough=70;break;case 65:n.popTry(),n.maybeUncatchable(),ge=n.storedException,
n.state=71;break;case 71:x=!0,S=ge,n.state=66,n.finallyFallThrough=70;break;case 66:
n.popTry(),n.state=77;break;case 77:try{k||null==j["return"]||j["return"]()}finally{
if(x)throw S}n.state=75;break;case 70:if(w){O=!0,M=!1,T=void 0;try{for(A=void 0,R=r[Symbol.iterator]();!(O=(A=R.next()).done);O=!0)I=A.value,
I.primary=I===w}catch(we){M=!0,T=we}finally{try{O||null==R["return"]||R["return"]();
}finally{if(M)throw T}}}else{P={},P.id=e._createUniqueEditorID(i),P.fileEntry=_,P.name=_.name,
P.primary=!1,P.unsavedArtwork=null,i.push(P.id),r.push(P),L=!0,F=!1,D=void 0;try{
for(z=void 0,W=r[Symbol.iterator]();!(L=(z=W.next()).done);L=!0)N=z.value,N.primary=N===P;
}catch(ke){F=!0,D=ke}finally{try{L||null==W["return"]||W["return"]()}finally{if(F)throw D;
}}}n.state=81;break;case 84:n.popTry(),n.state=88,n.finallyFallThrough=92;break;case 87:
n.popTry(),n.maybeUncatchable(),ye=n.storedException,n.state=93;break;case 93:b=!0,
m=ye,n.state=88,n.finallyFallThrough=92;break;case 88:n.popTry(),n.state=99;break;
case 99:try{f||null==p["return"]||p["return"]()}finally{if(b)throw m}n.state=97;break;
case 92:0===r.length&&(B={},B.id=e._createUniqueEditorID(i),B.fileEntry=null,B.name="Untitled",
B.primary=!0,B.unsavedArtwork=null,i.push(B.id),r.push(B)),$=r.find(function(e){return e.primary===!0;
}),H=r.filter(function(e){return e.primary===!1}),$||($=r[r.length-1],$.primary=!0),
U=!0,G=!1,V=void 0;try{for(q=void 0,Z=r[Symbol.iterator]();!(U=(q=Z.next()).done);U=!0)K=q.value,
Y=e["#tabs"].openTab(K.id,K.name),Y.icon=K.unsavedArtwork?"close-edited":"close",
Y.highlighted=K===$,Y.disabled=!0}catch(xe){G=!0,V=xe}finally{try{U||null==Z["return"]||Z["return"]();
}finally{if(G)throw V}}X=a("bx-editor"),X.id=$.id,X.disabled=!0,e["#editors"].append(X),
n.state=133;break;case 133:return void Promise.resolve(X.load({fileEntry:$.fileEntry,
unsavedArtwork:$.unsavedArtwork})).then(n.createCallback(101),n.errback);case 101:
X.disabled=!1,X.focus(),Q=e["#tabs"].querySelector("#"+X.id),Q.disabled=!1,e["#menubar"].disabled=!1,
J=!0,ee=!1,te=void 0,n.state=135;break;case 135:n.pushTry(113,114),n.state=116;break;
case 116:ne=void 0,re=H[Symbol.iterator](),n.state=112;break;case 112:n.state=(J=(ne=re.next()).done)?110:108;
break;case 107:J=!0,n.state=112;break;case 108:ie=ne.value,n.state=109;break;case 109:
ae=a("bx-editor"),ae.id=ie.id,ae.disabled=!0,e["#editors"].append(ae),n.state=105;
break;case 105:return void Promise.resolve(ae.load({fileEntry:ie.fileEntry,unsavedArtwork:ie.unsavedArtwork
})).then(n.createCallback(103),n.errback);case 103:oe=e["#tabs"].querySelector("#"+ae.id),
oe.disabled=!1,n.state=107;break;case 110:n.popTry(),n.state=114,n.finallyFallThrough=118;
break;case 113:n.popTry(),n.maybeUncatchable(),_e=n.storedException,n.state=119;break;
case 119:ee=!0,te=_e,n.state=114,n.finallyFallThrough=118;break;case 114:n.popTry(),
n.state=125;break;case 125:try{J||null==re["return"]||re["return"]()}finally{if(ee)throw te;
}n.state=123;break;case 118:e._restoringSession=!1,t(),n.state=-2;break;case 37:n.state=n.finallyFallThrough;
break;case 97:n.state=n.finallyFallThrough;break;case 75:switch(n.finallyFallThrough){
case 131:case 90:case 86:case 81:case 82:case 83:case 79:case 68:case 64:case 56:
case 60:case 61:case 54:case 46:case 47:case 45:case 44:case 50:case 49:case 57:case 58:
case 62:case 65:case 71:case 66:case 77:case 75:case 70:case 84:case 87:case 93:n.state=n.finallyFallThrough,
n.finallyFallThrough=-1;break;default:n.state=88}break;case 123:n.state=n.finallyFallThrough;
break;default:return n.end()}},this)})},_getFileEntriesPassedOnAppLaunch:function(){
var e=this;return new Promise(function(t){var n=[];e.bridge.postMessage("background","getFileEntriesPassedOnAppLaunch",null,function(e){
var r,i,a,o,s,u,c,l;return $traceurRuntime.asyncWrap(function(h){for(;;)switch(h.state){
case 0:r=!0,i=!1,a=void 0,h.state=25;break;case 25:h.pushTry(11,12),h.state=14;break;
case 14:o=void 0,s=e[Symbol.iterator](),h.state=10;break;case 10:h.state=(r=(o=s.next()).done)?8:6;
break;case 5:r=!0,h.state=10;break;case 6:u=o.value,h.state=7;break;case 7:return void Promise.resolve(y(u)).then(h.createCallback(3),h.errback);
case 3:c=h.value,h.state=2;break;case 2:c&&n.push(c),h.state=5;break;case 8:h.popTry(),
h.state=12,h.finallyFallThrough=16;break;case 11:h.popTry(),h.maybeUncatchable(),
l=h.storedException,h.state=17;break;case 17:i=!0,a=l,h.state=12,h.finallyFallThrough=16;
break;case 12:h.popTry(),h.state=23;break;case 23:try{r||null==s["return"]||s["return"]();
}finally{if(i)throw a}h.state=21;break;case 16:t(n),h.state=-2;break;case 21:h.state=h.finallyFallThrough;
break;default:return h.end()}},this)})})},_dbOpen:function(){return new Promise(function(e){
var t=indexedDB.open("bx-mainbody",1);t.addEventListener("upgradeneeded",function(e){
var t=e.target.result;t.objectStoreNames.contains("recent")===!1&&t.createObjectStore("recent"),
t.objectStoreNames.contains("session")===!1&&t.createObjectStore("session")}),t.onsuccess=function(t){
return e(t.target.result)},t.onerror=function(e){return reject(e.target.result)}});
},_dbGetRecent:function(){var e=this;return new Promise(function(t,n){var r=e._db.transaction(["recent"],"readonly").objectStore("recent").getAll();
r.onsuccess=function(e){return t(e.target.result)},r.onerror=function(e){return n(e.target.result);
}})},_dbSetRecent:function(e){var t=this;return new Promise(function(n,r){var i;return $traceurRuntime.asyncWrap(function(a){
for(;;)switch(a.state){case 0:return void Promise.resolve(t._dbClearRecent()).then(a.createCallback(2),a.errback);
case 2:i=e.map(function(e,n){return new Promise(function(r,i){var a=t._db.transaction(["recent"],"readwrite").objectStore("recent").add(e,n);
a.onsuccess=function(e){return r(e.target.result)},a.onerror=function(e){return i(e.target.result);
}})}),Promise.all(i).then(n,r),a.state=-2;break;default:return a.end()}},this)})},
_dbClearRecent:function(){var e=this;return new Promise(function(t,n){var r=e._db.transaction(["recent"],"readwrite").objectStore("recent").clear();
r.onsuccess=function(e){return t(e.target.result)},r.onerror=function(e){return n(e.target.result);
}})},_dbGetSession:function(){var e=this;return new Promise(function(t,n){var r;return $traceurRuntime.asyncWrap(function(i){
for(;;)switch(i.state){case 0:r=e._db.transaction(["session"],"readonly").objectStore("session").getAll(),
r.onsuccess=function(e){return t(e.target.result)},r.onerror=function(e){return n(e.target.result);
},i.state=-2;break;default:return i.end()}},this)})},_dbSetSession:function(e){var t=this;
return new Promise(function(n,r){var i;return $traceurRuntime.asyncWrap(function(a){
for(;;)switch(a.state){case 0:return void Promise.resolve(t._dbClearSession()).then(a.createCallback(2),a.errback);
case 2:i=e.map(function(e,n){return new Promise(function(r,i){var a=t._db.transaction(["session"],"readwrite").objectStore("session").add(e,n);
a.onsuccess=function(e){return r(e.target.result)},a.onerror=function(e){return i(e.target.result);
}})}),Promise.all(i).then(n,r),a.state=-2;break;default:return a.end()}},this)})},
_dbClearSession:function(){var e=this;return new Promise(function(t,n){var r=e._db.transaction(["session"],"readwrite").objectStore("session").clear();
r.onsuccess=function(e){return t(e.target.result)},r.onerror=function(e){return n(e.target.result);
}})}},{},t)}(HTMLBodyElement),I=o("body","bx-mainbody",R);return{get default(){return I;
}}}),System.registerModule("elements/bx-menu",[],function(){System.get("elements/bx-menuitem");
var e=System.get("utils/dom").registerElement,t=System.get("utils/time").sleep,n=75,r=300,i='\n  <style>\n    @import url("stylesheets/scrollbars.css");\n    @import url("stylesheets/bx-menu.css");\n  </style>\n\n  <main id="main">\n    <content></content>\n  </main>\n',a=function(e){
function a(){$traceurRuntime.superConstructor(a).apply(this,arguments)}return $traceurRuntime.createClass(a,{
createdCallback:function(){var e=this;this._shadowRoot=this.createShadowRoot({mode:"closed"
}),this._shadowRoot.innerHTML=i;var t=!0,n=!1,r=void 0;try{for(var a=void 0,o=this._shadowRoot.querySelectorAll("[id]")[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){
var s=a.value;this["#"+s.id]=s}}catch(u){n=!0,r=u}finally{try{t||null==o["return"]||o["return"]();
}finally{if(n)throw r}}this._mouseLocs=[],this._mouseInsideMenuBlock=!1,this["#main"].addEventListener("mousemove",function(t){
return e._onMouseMove(t)}),this.addEventListener("mouseover",function(t){return e._onMouseOver(t);
}),this.addEventListener("mouseout",function(t){return e._onMouseOut(t)}),this.addEventListener("click",function(t){
return e._onClick(t)})},attachedCallback:function(){this.dispatchEvent(new CustomEvent("menuattach",{
bubbles:!0,detail:this}))},detachedCallback:function(){this.dispatchEvent(new CustomEvent("menudetach",{
bubbles:!0,detail:this}))},attributeChangedCallback:function(e,t,n){t!==n&&"label"===e&&this._onLabelChange();
},get label(){return this.hasAttribute("label")?this.getAttribute("label"):""},set label(e){
this.setAttribute("label",e)},get opened(){return this.hasAttribute("opened")},set opened(e){
e?this.setAttribute("opened",""):this.removeAttribute("opened")},openBelowElement:function(e){
var t=e.getBoundingClientRect();this.style.height=null,this.style.top=t.top+t.height+"px",
this.style.left=t.left+"px",this.opened=!0;var n=this.getBoundingClientRect();n.left+n.width>window.innerWidth&&(this.style.left=t.left+t.width-n.width+"px"),
n.top+n.height+10>window.innerHeight&&(this.style.height=window.innerHeight-(t.top+t.height)-10+"px"),
this.dispatchEvent(new CustomEvent("menuopen",{bubbles:!0,detail:this}))},openNextToElement:function(e){
var t=e.getBoundingClientRect();this.style.top=t.top+"px",this.style.left=t.left+t.width+"px",
this.opened=!0;var n=this.getBoundingClientRect();if(n.left+n.width>window.innerWidth&&(this.style.left=t.left-n.width+"px",
n=this.getBoundingClientRect()),n.top+n.height>window.innerHeight){var r=window.innerHeight-(n.top+n.height)-5;
this.style.top=t.top+r+"px",n=this.getBoundingClientRect(),n.top<0&&(this.style.top="5px",
this.style.height=window.innerHeight-10+"px")}this.dispatchEvent(new CustomEvent("menuopen",{
bubbles:!0,detail:this}))},openAtPosition:function(e,t){this.style.left=e+"px",this.style.top=t+"px",
this.opened=!0;var n=this.getBoundingClientRect();if(n.left+n.width>window.innerWidth&&(this.style.left=e-n.width+"px",
n=this.getBoundingClientRect()),n.top+n.height>window.innerHeight){var r=window.innerHeight-(n.top+n.height)-5;
this.style.top=t+r+"px",n=this.getBoundingClientRect(),n.top<0&&(this.style.top="5px",
this.style.height=window.innerHeight-10+"px")}this.dispatchEvent(new CustomEvent("menuopen",{
bubbles:!0,detail:this}))},close:function(){this._highlightedMenuItem&&(this._highlightedMenuItem.highlighted=!1,
this._highlightedMenuItem=null),this.style.left=null,this.style.top=null,this.opened=!1,
this._openedSubmenu&&(this._openedSubmenu.close(),this._openedSubmenu=null),this.dispatchEvent(new CustomEvent("menuclose",{
bubbles:!0,detail:this}))},_onLabelChange:function(){this.dispatchEvent(new CustomEvent("menulabelchange",{
bubbles:!0,detail:this}))},_onMouseMove:function(e){this._mouseLocs.push({x:e.pageX,
y:e.pageY}),this._mouseLocs.length>3&&this._mouseLocs.shift()},_onMouseOver:function(e){
e.target===this||e.target.parentElement===this?(this._mouseInsideMenuBlock===!1&&(this._mouseInsideMenuBlock=!0),
"bx-menuitem"===e.target.localName&&this._onMenuItemMouseEnter(e.target)):this._mouseInsideMenuBlock===!0&&(this._mouseInsideMenuBlock=!1,
this._onMenuBlockMouseLeave())},_onMouseOut:function(e){(!e.toElement||e.toElement!==this&&e.toElement.parentElement!==this)&&this._mouseInsideMenuBlock===!0&&(this._mouseInsideMenuBlock=!1,
this._onMenuBlockMouseLeave())},_onClick:function(e){var t;return $traceurRuntime.asyncWrap(function(n){
for(;;)switch(n.state){case 0:n.state="bx-menuitem"===e.target.localName&&e.target.parentElement===this&&e.target.disabled===!1&&0===e.target.childElementCount&&0===e.button?3:-2;
break;case 3:t=e.target,n.state=4;break;case 4:return void Promise.resolve(t.blink()).then(n.createCallback(2),n.errback);
case 2:this.dispatchEvent(new CustomEvent("menuitemclick",{bubbles:!0,detail:t})),
n.state=-2;break;default:return n.end()}},this)},_onMenuItemMouseEnter:function(e){
this.timeoutID&&clearTimeout(this.timeoutID),this._highlightMenuItemWithDelay(e)},
_onMenuBlockMouseLeave:function(){if(this.timeoutID&&clearTimeout(this.timeoutID),
this._highlightedMenuItem){var e=this._highlightedMenuItem.children[0];e&&e.opened!==!1||(this._highlightedMenuItem.highlighted=!1,
this._highlightedMenuItem=null)}},_highlightMenuItem:function(e){var n;return $traceurRuntime.asyncWrap(function(r){
for(;;)switch(r.state){case 0:this._highlightedMenuItem&&(this._highlightedMenuItem.highlighted=!1),
this._openedSubmenu&&(this._openedSubmenu.close(),this._openedSubmenu=null),r.state=12;
break;case 12:r.state=e.disabled===!1?8:-2;break;case 8:this._highlightedMenuItem=e,
e.highlighted=!0,r.state=9;break;case 9:r.state=e.children[0]&&"bx-menu"===e.children[0].localName?3:-2;
break;case 3:n=e.children[0],r.state=4;break;case 4:return void Promise.resolve(t(100)).then(r.createCallback(2),r.errback);
case 2:this._highlightedMenuItem===e&&(this._openedSubmenu=n,n.openNextToElement(n.parentElement)),
r.state=-2;break;default:return r.end()}},this)},_highlightMenuItemWithDelay:function(e){
var t=this,n=this._getHighlightDelay();n?this.timeoutID=setTimeout(function(){t._highlightMenuItemWithDelay(e);
},n):this._highlightMenuItem(e)},_getHighlightDelay:function(){var e="right",t=this._mouseLocs[this._mouseLocs.length-1],i=this._mouseLocs[0];
if(!this._openedSubmenu)return 0;if(!t)return 0;i||(i=t);var a=this.getBoundingClientRect(),o={
x:a.left,y:a.top-n},s={x:a.left+a.width,y:o.y},u={x:a.left,y:a.top+a.height+n},c={
x:a.left+a.width,y:u.y};if(i.x<a.left||i.x>c.x||i.y<a.top||i.y>c.y)return 0;if(this._lastDelayLoc&&t.x==this._lastDelayLoc.x&&t.y==this._lastDelayLoc.y)return 0;
var l=function(e,t){return(t.y-e.y)/(t.x-e.x)},h=s,d=c;"left"==e?(h=u,d=o):"below"==e?(h=c,
d=u):"above"==e&&(h=o,d=s);var f=l(t,h),b=l(t,d),m=l(i,h),v=l(i,d);return m>f&&b>v?(this._lastDelayLoc=t,
r):(this._lastDelayLoc=null,0)}},{},e)}(HTMLElement),o=e("bx-menu",a);return{get default(){
return o}}}),System.registerModule("elements/bx-menubar",[],function(){var e=System.get("utils/dom"),t=e.createElement,n=e.registerElement,r=System.get("utils/time").sleep;
System.get("elements/bx-menu");var i=!1,a='\n  <style>@import url("stylesheets/bx-menubar.css");</style>\n  <div id="overlay"></div>\n  <ul id="strip"></ul>\n  <content></content>\n',o=function(e){
function n(){$traceurRuntime.superConstructor(n).apply(this,arguments)}return $traceurRuntime.createClass(n,{
createdCallback:function(){var e=this;this._highlightedStripItem=null,this._shadowRoot=this.createShadowRoot({
mode:"closed"}),this._shadowRoot.innerHTML=a,this._strip=this._shadowRoot.querySelector("#strip"),
this._content=this._shadowRoot.querySelector("content"),this._overlay=this._shadowRoot.querySelector("#overlay"),
this.addEventListener("menuattach",function(t){return e._onMenuAttach(t)}),this.addEventListener("menudetach",function(t){
return e._onMenuDetach(t)}),this.addEventListener("menuopen",function(t){return e._onMenuOpen(t);
}),this.addEventListener("menuitemclick",function(t){return e._onMenuItemClick(t);
}),this.addEventListener("menulabelchange",function(t){return e._onMenuLabelChange(t);
}),this._strip.addEventListener("mousedown",function(t){return e._onStripMouseDown(t);
}),this._strip.addEventListener("mouseover",function(t){return e._onStripMouseOver(t);
}),this._overlay.addEventListener("mousedown",function(t){return e._onOverlayMouseDown(t);
}),i&&this.setAttribute("debug","")},attachedCallback:function(){var e=this;window.addEventListener("blur",this._windowBlurListener=function(){
return e._onWindowBlur(event)}),window.addEventListener("resize",this._windowResizeListener=function(){
return e._onWindowResize(event)}),body.bridge.addMessageHandler("menubar.blinkItem",this._blinkHandler=function(t){
return e.blinkItem(t)})},detachedCallback:function(){window.removeEventListener("blur",this._windowBlurListener),
window.removeEventListener("resize",this._windowResizeListener),body.bridge.removeMessageHandler("menubar.blinkItem",this._blinkHandler);
},validateMenu:function(e){},blinkItem:function(e){var t,n,i,a,o,s,u,c,l,h,d;return $traceurRuntime.asyncWrap(function(f){
for(;;)switch(f.state){case 0:for(t=this.querySelector('[commandid="'+e+'"]'),n=t.parentElement,
i=null,a=t;a!==this;a=a.parentElement)"bx-menu"===a.localName&&(i=a);o=!0,s=!1,u=void 0,
f.state=27;break;case 27:f.pushTry(13,14),f.state=16;break;case 16:c=void 0,l=this._strip.children[Symbol.iterator](),
f.state=12;break;case 12:f.state=(o=(c=l.next()).done)?10:8;break;case 6:o=!0,f.state=12;
break;case 8:h=c.value,f.state=9;break;case 9:f.state=h.menu===i?3:6;break;case 3:
h.setAttribute("highlighted",""),f.state=4;break;case 4:return void Promise.resolve(r(100)).then(f.createCallback(2),f.errback);
case 2:h.removeAttribute("highlighted"),f.state=6;break;case 10:f.popTry(),f.state=14,
f.finallyFallThrough=-2;break;case 13:f.popTry(),f.maybeUncatchable(),d=f.storedException,
f.state=19;break;case 19:s=!0,u=d,f.state=14,f.finallyFallThrough=-2;break;case 14:
f.popTry(),f.state=25;break;case 25:try{o||null==l["return"]||l["return"]()}finally{
if(s)throw u}f.state=23;break;case 23:f.state=f.finallyFallThrough;break;default:
return f.end()}},this)},_onMenuAttach:function(e){e.detail.parentElement===this&&this._updateStrip();
},_onMenuDetach:function(e){e.detail.parentElement===this&&this._updateStrip()},_onMenuOpen:function(e){
this.validateMenu(e.detail)},_onMenuItemClick:function(e){this._collapse()},_onMenuLabelChange:function(e){
e.detail.parentElement===this&&this._updateStrip()},_onStripMouseDown:function(e){
this._highlightedStripItem&&e.target===this._strip&&this._collapse(),0===e.button&&(e.target===this._strip?this._onStripEmptySpaceDragStart(e):this._onStripItemMouseDown(e.target));
},_onStripEmptySpaceDragStart:function(e){var t,n,r=chrome.app.window.current().getBounds();
window.addEventListener("mousemove",t=function(t){var n=t.screenX-e.screenX,i=t.screenY-e.screenY;
chrome.app.window.current().setBounds({left:r.left+n,top:r.top+i,width:r.width,height:r.height
})}),window.addEventListener("mouseup",n=function(e){window.removeEventListener("mousemove",t),
window.removeEventListener("mouseup",n)})},_onStripMouseOver:function(e){0===e.button&&e.target!==this._strip&&this._onStripItemMouseEnter(e.target);
},_onStripItemMouseDown:function(e){this._highlightedStripItem===e?this._collapse():this._expand(e);
},_onStripItemMouseEnter:function(e){this._highlightedStripItem&&this._highlightedStripItem!==e&&this._expand(e);
},_onOverlayMouseDown:function(e){this._collapse(),e.preventDefault(),e.stopPropagation();
},_onWindowBlur:function(e){i||this._collapse()},_onWindowResize:function(e){i||this._collapse();
},_expand:function(e){this._highlightedStripItem&&(this._highlightedStripItem.removeAttribute("highlighted"),
this._highlightedStripItem.menu.close()),this._overlay.style.display="block",e.menu.openBelowElement(e),
e.setAttribute("highlighted",""),this._highlightedStripItem=e},_collapse:function(){
this._highlightedStripItem&&(this._highlightedStripItem.removeAttribute("highlighted"),
this._highlightedStripItem.menu.close(),this._highlightedStripItem=null),this._overlay.style.display="none";
},_updateStrip:function(){if(this.childElementCount!==this._strip.childElementCount){
this._strip.innerHTML="";for(var e=0;e<this.childElementCount;e+=1)this._strip.append(t("li"));
}for(var n=0;n<this.childElementCount;n+=1)this._strip.children[n].textContent=this.children[n].label,
this._strip.children[n].menu=this.children[n]}},{},e)}(HTMLElement),s=n("bx-menubar",o);
return{get default(){return s}}}),System.registerModule("elements/bx-menuitem",[],function(){
var e=System.get("utils/dom").registerElement,t=System.get("utils/time").sleep;System.get("elements/bx-icon");
var n='\n<style>@import url("stylesheets/bx-menuitem.css");</style>\n\n<main>\n  <bx-icon id="state-icon"></bx-icon>\n  <div id="label"></div>\n  <div id="shortcut"></div>\n  <bx-icon id="arrow-icon" name="arrow-right"></bx-icon>\n</main>\n\n<content select="bx-menu"></content>\n',r=function(e){
function r(){$traceurRuntime.superConstructor(r).apply(this,arguments)}return $traceurRuntime.createClass(r,{
createdCallback:function(){this._shadowRoot=this.createShadowRoot({mode:"closed"}),
this._shadowRoot.innerHTML=n;var e=!0,t=!1,r=void 0;try{for(var i=void 0,a=this._shadowRoot.querySelectorAll("[id]")[Symbol.iterator]();!(e=(i=a.next()).done);e=!0){
var o=i.value;this["#"+o.id]=o}}catch(s){t=!0,r=s}finally{try{e||null==a["return"]||a["return"]();
}finally{if(t)throw r}}this._onLabelChange(),this._onStateChange(),this._onShortcutChange();
},attributeChangedCallback:function(e,t,n){t!==n&&("label"===e?this._onLabelChange():"state"===e?this._onStateChange():"shortcut"===e&&this._onShortcutChange());
},get label(){return this.hasAttribute("label")?this.getAttribute("label"):""},set label(e){
this.setAttribute("label",e)},get commandID(){return this.hasAttribute("commandid")?this.getAttribute("commandid"):"";
},set commandID(e){this.setAttribute("commandid",e)},get state(){return this.hasAttribute("state")?this.getAttribute("state"):"";
},set state(e){this.setAttribute("state",e)},get shortcut(){return this.hasAttribute("shortcut")?this.getAttribute("shortcut"):"";
},set shortcut(e){this.setAttribute("shortcut",e)},get highlighted(){return this.hasAttribute("highlighted");
},set highlighted(e){e?this.setAttribute("highlighted",""):this.removeAttribute("highlighted");
},blink:function(){var e=this;return new Promise(function(n){return $traceurRuntime.asyncWrap(function(r){
for(;;)switch(r.state){case 0:e.highlighted=!1,r.state=6;break;case 6:return void Promise.resolve(t(100)).then(r.createCallback(2),r.errback);
case 2:e.highlighted=!0,r.state=8;break;case 8:return void Promise.resolve(t(100)).then(r.createCallback(4),r.errback);
case 4:n(),r.state=-2;break;default:return r.end()}},this)})},_onLabelChange:function(){
this["#label"].textContent=this.label},_onStateChange:function(){"selected"===this.state?this["#state-icon"].name="circle":"toggled"===this.state?this["#state-icon"].name="check-mark":this["#state-icon"].name=null;
},_onShortcutChange:function(){this["#shortcut"].textContent=this.shortcut}},{},e);
}(HTMLElement),i=e("bx-menuitem",r);return{get default(){return i}}}),System.registerModule("elements/bx-tab",[],function(){
System.get("elements/bx-button");var e=System.get("utils/dom").registerElement,t='\n  <style>@import url("stylesheets/bx-tab.css");</style>\n\n  <main>\n    <div id="label"></div>\n    <bx-button id="close-button" icon="close" iconsize="10" skin="bx-tabs"></bx-button>\n  </main>\n',n=function(e){
function n(){$traceurRuntime.superConstructor(n).apply(this,arguments)}return $traceurRuntime.createClass(n,{
createdCallback:function(){var e=this;this._shadowRoot=this.createShadowRoot({mode:"closed"
}),this._shadowRoot.innerHTML=t;var n=!0,r=!1,i=void 0;try{for(var a=void 0,o=this._shadowRoot.querySelectorAll("[id]")[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){
var s=a.value;this["#"+s.id]=s}}catch(u){r=!0,i=u}finally{try{n||null==o["return"]||o["return"]();
}finally{if(r)throw i}}this._shadowRoot.addEventListener("mousedown",function(t){
return e._onShadowRootMouseDown(t)}),this["#close-button"].addEventListener("click",function(t){
return e._onCloseButtonClick(t)}),this._onLabelChange(),this._onIconChange(),this._onDisabledChange();
},attachedCallback:function(){this.dispatchEvent(new CustomEvent("tabopen",{bubbles:!0,
detail:this}))},detachedCallback:function(){this.dispatchEvent(new CustomEvent("tabclose",{
bubbles:!0,detail:this}))},attributeChangedCallback:function(e,t,n){t!==n&&("label"===e?this._onLabelChange():"icon"===e?this._onIconChange():"disabled"===e&&this._onDisabledChange());
},get label(){return this.hasAttribute("label")?this.getAttribute("label"):""},set label(e){
this.setAttribute("label",e)},get icon(){return this.hasAttribute("icon")?this.getAttribute("icon"):"close";
},set icon(e){this.setAttribute("icon",e)},get highlighted(){return this.hasAttribute("highlighted");
},set highlighted(e){e?this.setAttribute("highlighted",""):this.removeAttribute("highlighted");
},_onShadowRootMouseDown:function(e){0===e.button&&e.target!==this["#close-button"]&&this.disabled===!1&&this.highlighted===!1&&this.dispatchEvent(new CustomEvent("tabdown",{
bubbles:!0,detail:this}))},_onCloseButtonClick:function(e){0===e.button&&this.dispatchEvent(new CustomEvent("tabcloseintent",{
bubbles:!0,detail:this}))},_onLabelChange:function(){this["#label"].textContent=this.label;
},_onIconChange:function(){this["#close-button"].icon=this.icon},_onDisabledChange:function(){
this["#close-button"].disabled=this.disabled}},{},e)}(HTMLElement),r=e("bx-tab",n);
return{get default(){return r}}}),System.registerModule("elements/bx-tabs",[],function(){
System.get("elements/bx-button"),System.get("elements/bx-contextmenu"),System.get("elements/bx-menu"),
System.get("elements/bx-menuitem"),System.get("elements/bx-tab");var e=System.get("utils/dom"),t=e.createElement,n=e.registerElement,r=System.get("utils/time").sleep,i=Math.abs,a=Number,o=a.parseInt,s=(a.parseFloat,
50),u='\n  <style>@import url("stylesheets/bx-tabs.css");</style>\n\n  <main>\n    <content></content>\n    <bx-button id="new-tab-button" skin="bx-tabs" iconsize="15" icon="plus"></bx-button>\n    <bx-contextmenu id="context-menu">\n      <bx-menu>\n        <bx-menuitem id="open-tab-menu-item" label="Open tab"></bx-menuitem>\n        <hr/>\n        <bx-menuitem id="close-tab-menu-item" label="Close Tab"></bx-menuitem>\n        <bx-menuitem id="close-other-tabs-menu-item" label="Close Other Tabs"></bx-menuitem>\n        <bx-menuitem id="close-tabs-to-right-menu-item" label="Close Tabs to the Right"></bx-menuitem>\n      </bx-menu>\n    </bx-contextmenu>\n  </main>\n',c=function(e){
function n(){$traceurRuntime.superConstructor(n).apply(this,arguments)}return $traceurRuntime.createClass(n,{
createdCallback:function(){var e=this;this._shadowRoot=this.createShadowRoot({mode:"closed"
}),this._shadowRoot.innerHTML=u;var t=!0,n=!1,r=void 0;try{for(var i=void 0,a=this._shadowRoot.querySelectorAll("[id]")[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){
var o=i.value;this["#"+o.id]=o}}catch(s){n=!0,r=s}finally{try{t||null==a["return"]||a["return"]();
}finally{if(n)throw r}}this.addEventListener("tabcloseintent",function(e){return e.stopPropagation();
}),this.addEventListener("tabdown",function(t){return e._onTabDown(t)}),this.addEventListener("menuitemclick",function(t){
return e._onContextMenuItemClick(t)}),this._shadowRoot.addEventListener("contextmenu",function(t){
return e._onShadowRootContextMenu(t)}),this._shadowRoot.addEventListener("mousedown",function(t){
return e._onMouseDown(t)}),this["#new-tab-button"].addEventListener("click",function(t){
return e._onNewTabButtonClick(t)}),this["#context-menu"].validateMenu=function(t,n){
return e._validateContextMenu(t,n)}},openTab:function(e,n){var i=t("bx-tab");return i.id=e,
i.label=n,i.style.maxWidth="0px",i.style.order=this.childElementCount,this.append(i),
r(50).then(function(){return i.style.maxWidth=null}),i},closeTab:function(e){var t=this;
return new Promise(function(n){var i,a,o,s,u,c,l,h,d,f,b,m,v,p,g;return $traceurRuntime.asyncWrap(function(y){
for(;;)switch(y.state){case 0:if(i=t.querySelector("#"+e),a=i.getBoundingClientRect().width,
o=t._getSlotForTab(i),i.isClosing=!0,o<t.childElementCount-1){s=!0,u=!1,c=void 0;try{
for(l=void 0,h=t.children[Symbol.iterator]();!(s=(l=h.next()).done);s=!0)d=l.value,
d.isClosing||(d.style.transition="none",d.style.maxWidth=a+"px")}catch(_){u=!0,c=_;
}finally{try{s||null==h["return"]||h["return"]()}finally{if(u)throw c}}}i.style.transition=null,
i.style.maxWidth="0px",t._waitingForTabToClose=!0,y.state=4;break;case 4:return void Promise.resolve(r(150)).then(y.createCallback(2),y.errback);
case 2:i.remove(),t._waitingForTabToClose=!1,delete i.isClosing,t._waitingForMouseMoveAfterClosingTab||(t._waitingForMouseMoveAfterClosingTab=!0,
v=null,p=null,g=function(){window.removeEventListener("mousemove",f),window.removeEventListener("mouseout",b),
window.removeEventListener("blur",m),t._waitingForMouseMoveAfterClosingTab=!1;var e=!0,r=!1,i=void 0;
try{for(var a=void 0,o=t.children[Symbol.iterator]();!(e=(a=o.next()).done);e=!0){
var s=a.value;s.style.transition=null,s.style.maxWidth=null}}catch(u){r=!0,i=u}finally{
try{e||null==o["return"]||o["return"]()}finally{if(r)throw i}}n()},window.addEventListener("mousemove",f=function(e){
return null===v&&null===p?(v=e.clientX,void(p=e.clientY)):void(e.clientX>=v-3&&e.clientX<=v+3&&e.clientY>=p-3&&e.clientY<=p+3||g());
}),window.addEventListener("mouseout",b=function(e){null===e.toElement&&g()}),window.addEventListener("blur",m=function(){
g()})),y.state=-2;break;default:return y.end()}},this)})},highlightTab:function(e){
var t=this.querySelector("bx-tab#"+e),n=this.querySelector("bx-tab[highlighted]");
null===e?n&&(n.highlighted=!1):t&&t!==n&&(n&&(n.highlighted=!1),t.highlighted=!0);
},moveHighlightedTabLeft:function(){var e=this.querySelector("bx-tab[highlighted]"),t=this._getSlotForTab(e),n=!0,r=!1,i=void 0;
try{for(var a=void 0,s=this.children[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){
var u=a.value;u.style.order=this._getSlotForTab(u)}}catch(c){r=!0,i=c}finally{try{
n||null==s["return"]||s["return"]()}finally{if(r)throw i}}if(0===o(e.style.order)){
var l=!0,h=!1,d=void 0;try{for(var f=void 0,b=this.children[Symbol.iterator]();!(l=(f=b.next()).done);l=!0){
var m=f.value;m===e?m.style.order=this.childElementCount-1:m.style.order=o(m.style.order)-1;
}}catch(v){h=!0,d=v}finally{try{l||null==b["return"]||b["return"]()}finally{if(h)throw d;
}}}else{var p=this._getTabForSlot(t-1);p.style.order=o(p.style.order)+1,e.style.order=o(e.style.order)-1;
}},moveHighlightedTabRight:function(){var e=this.querySelector("bx-tab[highlighted]"),t=this._getSlotForTab(e),n=!0,r=!1,i=void 0;
try{for(var a=void 0,s=this.children[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){
var u=a.value;u.style.order=this._getSlotForTab(u)}}catch(c){r=!0,i=c}finally{try{
n||null==s["return"]||s["return"]()}finally{if(r)throw i}}if(o(e.style.order)===this.childElementCount-1){
var l=!0,h=!1,d=void 0;try{for(var f=void 0,b=this.children[Symbol.iterator]();!(l=(f=b.next()).done);l=!0){
var m=f.value;m===e?m.style.order=0:m.style.order=o(m.style.order)+1}}catch(v){h=!0,
d=v}finally{try{l||null==b["return"]||b["return"]()}finally{if(h)throw d}}}else{var p=this._getTabForSlot(t+1);
p.style.order=o(p.style.order)-1,e.style.order=o(e.style.order)+1}},getTabsByScreenPosition:function(){
var e=Symbol(),t=!0,n=!1,r=void 0;try{for(var i=void 0,a=this.children[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){
var o=i.value;o[e]=this._getSlotForTab(o)}}catch(s){n=!0,r=s}finally{try{t||null==a["return"]||a["return"]();
}finally{if(n)throw r}}return $traceurRuntime.spread(this.children).sort(function(t,n){
return t[e]>n[e]})},_onMouseDown:function(e){0===e.button&&("bx-tab"===e.target.localName?this._onTabMouseDown(e):"main"===e.target.localName&&this._onEmptySpaceDragStart(e));
},_onEmptySpaceDragStart:function(e){var t,n,r=chrome.app.window.current().getBounds();
window.addEventListener("mousemove",t=function(t){var n=t.screenX-e.screenX,i=t.screenY-e.screenY;
chrome.app.window.current().setBounds({left:r.left+n,top:r.top+i,width:r.width,height:r.height
})}),window.addEventListener("mouseup",n=function(e){window.removeEventListener("mousemove",t),
window.removeEventListener("mouseup",n)})},_onTabDown:function(e){this._waitingForTabToClose?e.stopImmediatePropagation():e.stopPropagation();
},_onTabMouseDown:function(e){var t,n,r=this,a=e.target;document.addEventListener("mousemove",t=function(o){
i(o.clientX-e.clientX)>1&&(document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",n),
r._onTabDragStart(o,a))}),document.addEventListener("mouseup",n=function(e){document.removeEventListener("mousemove",t),
document.removeEventListener("mouseup",n)})},_onTabDragStart:function(e,t){var n=this,i=t.getBoundingClientRect().width,a=this.getBoundingClientRect().width;
t.style.zIndex=999,this["#new-tab-button"].style.opacity="0";var o=!0,s=!1,u=void 0;
try{for(var c=void 0,l=this.children[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){
var h=c.value;h.slot=this._getSlotForTab(h),h.flexOffset=h.getBoundingClientRect().left-1,
h!==t&&(h.style.transition="transform 0.15s ease-out")}}catch(d){s=!0,u=d}finally{
try{o||null==l["return"]||l["return"]()}finally{if(s)throw u}}var f=function(e,r){
if(r>e+1)for(var a=e;r>a;a+=1)f(a,a+1);else if(e-1>r)for(var o=e;o>r;o-=1)f(o,o-1);else{
var s=!0,u=!1,c=void 0;try{for(var l=void 0,h=n.children[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){
var d=l.value;if(d!==t){d.slot===r&&(d.slot=e);for(var b=-d.flexOffset,m=0;m<d.slot;m+=1)b+=i;
0===b?d.style.transform=null:d.style.transform="translate("+b+"px)"}}}catch(v){u=!0,
c=v}finally{try{s||null==h["return"]||h["return"]()}finally{if(u)throw c}}}},b=function(r){
var o=r.clientX-e.clientX;o+t.flexOffset<=0?o=-t.flexOffset:o+t.flexOffset+i>a&&(o=a-t.flexOffset-i),
t.style.transform="translate("+o+"px)";var s=n._getSlotForTab(t);if(s!==t.slot){var u=t.slot;
t.slot=s,f(u,t.slot)}},m=function(e){var a,o,s,u,c,l,h,d;return $traceurRuntime.asyncWrap(function(e){
for(;;)switch(e.state){case 0:for(document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",m),
a=-t.flexOffset,o=0;o<t.slot;o+=1)a+=i;t.style.transition="transform 0.15s ease-out",
t.style.transform="translate("+a+"px)",n.dispatchEvent(new CustomEvent("tabslotchange",{
detail:{tab:t,slot:t.slot}})),e.state=4;break;case 4:return void Promise.resolve(r(150)).then(e.createCallback(2),e.errback);
case 2:t.style.zIndex=null,n["#new-tab-button"].style.opacity=null,s=!0,u=!1,c=void 0;
try{for(l=void 0,h=n.children[Symbol.iterator]();!(s=(l=h.next()).done);s=!0)d=l.value,
d.style.transition=null,d.style.transform=null,d.style.order=d.slot,delete d.slot,
delete t.flexOffset}catch(f){u=!0,c=f}finally{try{s||null==h["return"]||h["return"]();
}finally{if(u)throw c}}e.state=-2;break;default:return e.end()}},this)};document.addEventListener("mouseup",m),
document.addEventListener("mousemove",b)},_onNewTabButtonClick:function(e){0===e.button&&this.dispatchEvent(new CustomEvent("tabopenintent"));
},_onShadowRootContextMenu:function(e){e.preventDefault(),this._contextMenuTarget=e.target,
this["#context-menu"].open(e.clientX,e.clientY)},_onContextMenuItemClick:function(e){
var t=e.detail,n=this._contextMenuTarget;if(t===this["#open-tab-menu-item"])this.dispatchEvent(new CustomEvent("tabopenintent"));else if(t===this["#close-tab-menu-item"])this.dispatchEvent(new CustomEvent("tabcloseintent",{
detail:n}));else if(t===this["#close-other-tabs-menu-item"]){var r=!0,i=!1,a=void 0;
try{for(var o=void 0,s=$traceurRuntime.spread(this.children)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){
var u=o.value;u!==n&&this.dispatchEvent(new CustomEvent("tabcloseintent",{detail:u
}))}}catch(c){i=!0,a=c}finally{try{r||null==s["return"]||s["return"]()}finally{if(i)throw a;
}}}else if(t===this["#close-tabs-to-right-menu-item"]){var l=this._getSlotForTab(n),h=!0,d=!1,f=void 0;
try{for(var b=void 0,m=$traceurRuntime.spread(this.children)[Symbol.iterator]();!(h=(b=m.next()).done);h=!0){
var v=b.value,p=this._getSlotForTab(v);p>l&&this.dispatchEvent(new CustomEvent("tabcloseintent",{
detail:v}))}}catch(g){d=!0,f=g}finally{try{h||null==m["return"]||m["return"]()}finally{
if(d)throw f}}}},_getSlotForTab:function(e){var t=e.getBoundingClientRect();if(t.left<t.width/2)return 0;
for(var n=t.width/2,r=1;s>r;r+=1){if(t.left>=n&&t.left<n+t.width)return r>this.childElementCount-1?this.childElementCount-1:r;
n+=t.width}},_getTabForSlot:function(e){var t=!0,n=!1,r=void 0;try{for(var i=void 0,a=this.children[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){
var o=i.value,s=this._getSlotForTab(o);if(s===e)return o}}catch(u){n=!0,r=u}finally{
try{t||null==a["return"]||a["return"]()}finally{if(n)throw r}}return null},_validateContextMenu:function(e){
var t=this._contextMenuTarget;this["#close-tab-menu-item"].disabled="bx-tab"!==t.localName,
this["#close-other-tabs-menu-item"].disabled="bx-tab"!==t.localName||this.childElementCount<=1,
this["#close-tabs-to-right-menu-item"].disabled="bx-tab"!==t.localName||t===this.lastElementChild;
}},{},e)}(HTMLElement),l=n("bx-tabs",c);return{get default(){return l}}}),System.registerModule("libs/pako",[],function(){
!function(e){if("object"==("undefined"==typeof exports?"undefined":$traceurRuntime["typeof"](exports)))module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{
var t;"undefined"!=typeof window?t=window:"undefined"!=typeof global?t=global:"undefined"!=typeof self&&(t=self),
t.pako=e()}}(function(){return function e(t,n,r){function i(o,s){if(!n[o]){if(!t[o]){
var u="function"==typeof require&&require;if(!s&&u)return u(o,!0);if(a)return a(o,!0);
throw new Error("Cannot find module '"+o+"'")}var c=n[o]={exports:{}};t[o][0].call(c.exports,function(e){
var n=t[o][1][e];return i(n?n:e)},c,c.exports,e,t,n,r)}return n[o].exports}for(var a="function"==typeof require&&require,o=0;o<r.length;o++)i(r[o]);
return i}({1:[function(e,t,n){var r=e("./lib/zlib/utils").assign,i=e("./lib/deflate"),a=e("./lib/inflate"),o=e("./lib/zlib/constants"),s={};
r(s,i,a,o),t.exports=s},{"./lib/deflate":2,"./lib/inflate":3,"./lib/zlib/constants":5,
"./lib/zlib/utils":13}],2:[function(e,t,n){function r(e,t){var n=new p(t);if(n.push(e,!0),
n.err)throw n.msg;return n.result}function i(e,t){return t=t||{},t.raw=!0,r(e,t)}
function a(e,t){return t=t||{},t.gzip=!0,r(e,t)}var o=e("./zlib/deflate.js"),s=e("./zlib/utils"),u=e("./zlib/messages"),c=e("./zlib/zstream"),l=0,h=4,d=0,f=1,b=-1,m=0,v=8,p=function(e){
this.options=s.assign({level:b,method:v,chunkSize:16384,windowBits:15,memLevel:8,
strategy:m},e||{});var t=this.options;t.raw&&t.windowBits>0?t.windowBits=-t.windowBits:t.gzip&&t.windowBits>0&&t.windowBits<16&&(t.windowBits+=16),
this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c;var n=o.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);
if(n!==d)throw new Error(u[n])};p.prototype.push=function(e,t){var n,r,i=this.strm,a=this.options.chunkSize;
if(this.ended)return!1;r=t===~~t?t:t===!0?h:l,i.next_in=e,i.next_in_index=0,i.avail_in=i.next_in.length,
i.next_out=new s.Buf8(a);do{if(i.avail_out=this.options.chunkSize,i.next_out_index=0,
n=o.deflate(i,r),n!==f&&n!==d)return this.onEnd(n),this.ended=!0,!1;i.next_out_index&&(this.onData(s.shrinkBuf(i.next_out,i.next_out_index)),
(i.avail_in>0||0===i.avail_out)&&(i.next_out=new s.Buf8(this.options.chunkSize)));
}while(i.avail_in>0||0===i.avail_out);return r===h?(n=o.deflateEnd(this.strm),this.onEnd(n),
this.ended=!0,n===d):!0},p.prototype.onData=function(e){this.chunks.push(e)},p.prototype.onEnd=function(e){
e===d&&(this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg;
},n.Deflate=p,n.deflate=r,n.deflateRaw=i,n.gzip=a},{"./zlib/deflate.js":7,"./zlib/messages":11,
"./zlib/utils":13,"./zlib/zstream":14}],3:[function(e,t,n){function r(e,t){var n=new l(t);
if(n.push(e,!0),n.err)throw n.msg;return n.result}function i(e,t){return t=t||{},
t.raw=!0,r(e,t)}var a=e("./zlib/inflate.js"),o=e("./zlib/utils"),s=e("./zlib/constants"),u=e("./zlib/messages"),c=e("./zlib/zstream"),l=function(e){
this.options=o.assign({chunkSize:16384,windowBits:0},e||{});var t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,
0===t.windowBits&&(t.windowBits=-15)),!(t.windowBits>=0&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),
t.windowBits>15&&t.windowBits<48&&0===(15&t.windowBits)&&(t.windowBits|=15),this.err=0,
this.msg="",this.ended=!1,this.chunks=[],this.strm=new c;var n=a.inflateInit2(this.strm,t.windowBits);
if(n!==s.Z_OK)throw new Error(u[n])};l.prototype.push=function(e,t){var n,r,i=this.strm,u=this.options.chunkSize;
if(this.ended)return!1;r=s.Z_NO_FLUSH,i.next_in=e,i.next_in_index=0,i.avail_in=i.next_in.length,
i.next_out=new o.Buf8(u);do{if(i.avail_out=this.options.chunkSize,i.next_out_index=0,
n=a.inflate(i,r),n!==s.Z_STREAM_END&&n!==s.Z_OK)return this.onEnd(n),this.ended=!0,
!1;i.next_out_index&&(this.onData(o.shrinkBuf(i.next_out,i.next_out_index)),(i.avail_in>0||0===i.avail_out)&&(i.next_out=new o.Buf8(this.options.chunkSize)));
}while(i.avail_in>0||0===i.avail_out);return r=t===~~t?t:t===!0?s.Z_FINISH:s.Z_NO_FLUSH,
r===s.Z_FINISH?(n=a.inflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===s.Z_OK):!0;
},l.prototype.onData=function(e){this.chunks.push(e)},l.prototype.onEnd=function(e){
e===s.Z_OK&&(this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=e,
this.msg=this.strm.msg},n.Inflate=l,n.inflate=r,n.inflateRaw=i},{"./zlib/constants":5,
"./zlib/inflate.js":9,"./zlib/messages":11,"./zlib/utils":13,"./zlib/zstream":14}],
4:[function(e,t,n){function r(e,t,n,r){for(var i=65535&e|0,a=e>>>16&65535|0,o=0;0!==n;){
o=n>2e3?2e3:n,n-=o;do i=i+t[r++]|0,a=a+i|0;while(--o);i%=65521,a%=65521}return i|a<<16|0;
}t.exports=r},{}],5:[function(e,t,n){t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,
Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,
Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,
Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,
Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],
6:[function(e,t,n){function r(){for(var e,t=[],n=0;256>n;n++){e=n;for(var r=0;8>r;r++)e=1&e?3988292384^e>>>1:e>>>1;
t[n]=e}return t}function i(e,t,n,r){var i=a,o=r+n;e=-1^e;for(var s=r;o>s;s++)e=e>>>8^i[255&(e^t[s])];
return-1^e}var a=r();t.exports=i},{}],7:[function(e,t,n){function r(e,t){return e.msg=A[t],
t}function i(e){return(e<<1)-(e>4?9:0)}function a(e){for(var t=e.length;--t;)e[t]=0;
}function o(e){var t=e.state,n=t.pending;n>e.avail_out&&(n=e.avail_out),0!==n&&(C.arraySet(e.next_out,t.pending_buf,t.pending_out,n,e.next_out_index),
e.next_out_index+=n,t.pending_out+=n,e.total_out+=n,e.avail_out-=n,t.pending-=n,0===t.pending&&(t.pending_out=0));
}function s(e,t){O._tr_flush_block(e,e.block_start>=0?e.block_start:-1,e.strstart-e.block_start,t),
e.block_start=e.strstart,o(e.strm)}function u(e,t){e.pending_buf[e.pending++]=t}function c(e,t){
e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t}function l(e,t,n,r){
var i=e.avail_in;return i>r&&(i=r),0===i?0:(e.avail_in-=i,C.arraySet(t,e.next_in,e.next_in_index,i,n),
1===e.state.wrap?e.adler=M(e.adler,t,i,n):2===e.state.wrap&&(e.adler=T(e.adler,t,i,n)),
e.next_in_index+=i,e.total_in+=i,i)}function h(e,t){var n,r,i=e.max_chain_length,a=e.strstart,o=e.prev_length,s=e.nice_match,u=e.strstart>e.w_size-ue?e.strstart-(e.w_size-ue):0,c=e.window,l=e.w_mask,h=e.prev,d=e.strstart+se,f=c[a+o-1],b=c[a+o];
e.prev_length>=e.good_match&&(i>>=2),s>e.lookahead&&(s=e.lookahead);do if(n=t,c[n+o]===b&&c[n+o-1]===f&&c[n]===c[a]&&c[++n]===c[a+1]){
a+=2,n++;do;while(c[++a]===c[++n]&&c[++a]===c[++n]&&c[++a]===c[++n]&&c[++a]===c[++n]&&c[++a]===c[++n]&&c[++a]===c[++n]&&c[++a]===c[++n]&&c[++a]===c[++n]&&d>a);
if(r=se-(d-a),a=d-se,r>o){if(e.match_start=t,o=r,r>=s)break;f=c[a+o-1],b=c[a+o]}}while((t=h[t&l])>u&&0!==--i);
return o<=e.lookahead?o:e.lookahead}function d(e){var t,n,r,i,a,o=e.w_size;do{if(i=e.window_size-e.lookahead-e.strstart,
e.strstart>=o+(o-ue)){C.arraySet(e.window,e.window,o,o,0),e.match_start-=o,e.strstart-=o,
e.block_start-=o,n=e.hash_size,t=n;do r=e.head[--t],e.head[t]=r>=o?r-o:0;while(--n);
n=o,t=n;do r=e.prev[--t],e.prev[t]=r>=o?r-o:0;while(--n);i+=o}if(0===e.strm.avail_in)break;
if(n=l(e.strm,e.window,e.strstart+e.lookahead,i),e.lookahead+=n,e.lookahead+e.insert>=oe)for(a=e.strstart-e.insert,
e.ins_h=e.window[a],e.ins_h=(e.ins_h<<e.hash_shift^e.window[a+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[a+oe-1])&e.hash_mask,
e.prev[a&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=a,a++,e.insert--,!(e.lookahead+e.insert<oe)););
}while(e.lookahead<ue&&0!==e.strm.avail_in)}function f(e,t){var n=65535;for(n>e.pending_buf_size-5&&(n=e.pending_buf_size-5);;){
if(e.lookahead<=1){if(d(e),0===e.lookahead&&t===R)return pe;if(0===e.lookahead)break;
}e.strstart+=e.lookahead,e.lookahead=0;var r=e.block_start+n;if((0===e.strstart||e.strstart>=r)&&(e.lookahead=e.strstart-r,
e.strstart=r,s(e,!1),0===e.strm.avail_out))return pe;if(e.strstart-e.block_start>=e.w_size-ue&&(s(e,!1),
0===e.strm.avail_out))return pe}return e.insert=0,t===L?(s(e,!0),0===e.strm.avail_out?ye:_e):e.strstart>e.block_start&&(s(e,!1),
0===e.strm.avail_out)?pe:pe}function b(e,t){for(var n,r;;){if(e.lookahead<ue){if(d(e),
e.lookahead<ue&&t===R)return pe;if(0===e.lookahead)break}if(n=0,e.lookahead>=oe&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+oe-1])&e.hash_mask,
n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!==n&&e.strstart-n<=e.w_size-ue&&(e.match_length=h(e,n)),
e.match_length>=oe)if(r=O._tr_tally(e,e.strstart-e.match_start,e.match_length-oe),
e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=oe){e.match_length--;
do e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+oe-1])&e.hash_mask,
n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart;while(0!==--e.match_length);
e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],
e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else r=O._tr_tally(e,0,e.window[e.strstart]),
e.lookahead--,e.strstart++;if(r&&(s(e,!1),0===e.strm.avail_out))return pe}return e.insert=e.strstart<oe-1?e.strstart:oe-1,
t===L?(s(e,!0),0===e.strm.avail_out?ye:_e):e.last_lit&&(s(e,!1),0===e.strm.avail_out)?pe:ge;
}function m(e,t){for(var n,r,i;;){if(e.lookahead<ue){if(d(e),e.lookahead<ue&&t===R)return pe;
if(0===e.lookahead)break}if(n=0,e.lookahead>=oe&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+oe-1])&e.hash_mask,
n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,
e.prev_match=e.match_start,e.match_length=oe-1,0!==n&&e.prev_length<e.max_lazy_match&&e.strstart-n<=e.w_size-ue&&(e.match_length=h(e,n),
e.match_length<=5&&(e.strategy===H||e.match_length===oe&&e.strstart-e.match_start>4096)&&(e.match_length=oe-1)),
e.prev_length>=oe&&e.match_length<=e.prev_length){i=e.strstart+e.lookahead-oe,r=O._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-oe),
e.lookahead-=e.prev_length-1,e.prev_length-=2;do++e.strstart<=i&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+oe-1])&e.hash_mask,
n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart);while(0!==--e.prev_length);
if(e.match_available=0,e.match_length=oe-1,e.strstart++,r&&(s(e,!1),0===e.strm.avail_out))return pe;
}else if(e.match_available){if(r=O._tr_tally(e,0,e.window[e.strstart-1]),r&&s(e,!1),
e.strstart++,e.lookahead--,0===e.strm.avail_out)return pe}else e.match_available=1,
e.strstart++,e.lookahead--}return e.match_available&&(r=O._tr_tally(e,0,e.window[e.strstart-1]),
e.match_available=0),e.insert=e.strstart<oe-1?e.strstart:oe-1,t===L?(s(e,!0),0===e.strm.avail_out?ye:_e):e.last_lit&&(s(e,!1),
0===e.strm.avail_out)?pe:ge}function v(e,t){for(var n,r,i,a,o=e.window;;){if(e.lookahead<=se){
if(d(e),e.lookahead<=se&&t===R)return pe;if(0===e.lookahead)break}if(e.match_length=0,
e.lookahead>=oe&&e.strstart>0&&(i=e.strstart-1,r=o[i],r===o[++i]&&r===o[++i]&&r===o[++i])){
a=e.strstart+se;do;while(r===o[++i]&&r===o[++i]&&r===o[++i]&&r===o[++i]&&r===o[++i]&&r===o[++i]&&r===o[++i]&&r===o[++i]&&a>i);
e.match_length=se-(a-i),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}
if(e.match_length>=oe?(n=O._tr_tally(e,1,e.match_length-oe),e.lookahead-=e.match_length,
e.strstart+=e.match_length,e.match_length=0):(n=O._tr_tally(e,0,e.window[e.strstart]),
e.lookahead--,e.strstart++),n&&(s(e,!1),0===e.strm.avail_out))return pe}return e.insert=0,
t===L?(s(e,!0),0===e.strm.avail_out?ye:_e):e.last_lit&&(s(e,!1),0===e.strm.avail_out)?pe:ge;
}function p(e,t){for(var n;;){if(0===e.lookahead&&(d(e),0===e.lookahead)){if(t===R)return pe;
break}if(e.match_length=0,n=O._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,
n&&(s(e,!1),0===e.strm.avail_out))return pe}return e.insert=0,t===L?(s(e,!0),0===e.strm.avail_out?ye:_e):e.last_lit&&(s(e,!1),
0===e.strm.avail_out)?pe:ge}function g(e){e.window_size=2*e.w_size,a(e.head),e.max_lazy_match=j[e.level].max_lazy,
e.good_match=j[e.level].good_length,e.nice_match=j[e.level].nice_length,e.max_chain_length=j[e.level].max_chain,
e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=oe-1,
e.match_available=0,e.ins_h=0}function y(){this.strm=null,this.status=0,this.pending_buf=null,
this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,
this.gzindex=0,this.method=K,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,
this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,
this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,
this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,
this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,
this.good_match=0,this.nice_match=0,this.dyn_ltree=new C.Buf16(2*ie),this.dyn_dtree=new C.Buf16(2*(2*ne+1)),
this.bl_tree=new C.Buf16(2*(2*re+1)),a(this.dyn_ltree),a(this.dyn_dtree),a(this.bl_tree),
this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new C.Buf16(ae+1),
this.heap=new C.Buf16(2*te+1),a(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new C.Buf16(2*te+1),
a(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,
this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0,this.high_water=0;
}function _(e){var t;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=Z,t=e.state,
t.pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?le:me,e.adler=2===t.wrap?0:1,
t.last_flush=R,O._tr_init(t),D):r(e,W)}function w(e){var t=_(e);return t===D&&g(e.state),
t}function k(e,t,n,i,a,o){if(!e)return r(e,W);var s=1;if(t===$&&(t=6),0>i?(s=0,i=-i):i>15&&(s=2,
i-=16),1>a||a>Y||n!==K||8>i||i>15||0>t||t>9||0>o||o>V)return r(e,W);8===i&&(i=9);var u=new y;
return e.state=u,u.strm=e,u.wrap=s,u.gzhead=null,u.w_bits=i,u.w_size=1<<u.w_bits,
u.w_mask=u.w_size-1,u.hash_bits=a+7,u.hash_size=1<<u.hash_bits,u.hash_mask=u.hash_size-1,
u.hash_shift=~~((u.hash_bits+oe-1)/oe),u.window=new C.Buf8(2*u.w_size),u.head=new C.Buf16(u.hash_size),
u.prev=new C.Buf16(u.w_size),u.high_water=0,u.lit_bufsize=1<<a+6,u.pending_buf_size=4*u.lit_bufsize,
u.pending_buf=new C.Buf8(u.pending_buf_size),u.d_buf=u.lit_bufsize>>1,u.l_buf=3*u.lit_bufsize,
u.level=t,u.strategy=o,u.method=n,w(e)}function x(e,t){return k(e,t,K,X,Q,q)}function S(e,t){
var n,s;if(!e||!e.state||t>F||0>t)return r(e,W);if(s=e.state,!e.next_out||!e.next_in&&0!==e.avail_in||s.status===ve&&t!==L)return r(e,0===e.avail_out?B:W);
if(s.strm=e,n=s.last_flush,s.last_flush=t,s.status===le)if(2===s.wrap){if(e.adler=0,
u(s,31),u(s,139),u(s,8),s.gzhead)throw new Error("Custom GZIP headers not supported");
u(s,0),u(s,0),u(s,0),u(s,0),u(s,0),u(s,9===s.level?2:s.strategy>=U||s.level<2?4:0),
u(s,we),s.status=me}else{var l=K+(s.w_bits-8<<4)<<8,h=-1;h=s.strategy>=U||s.level<2?0:s.level<6?1:6===s.level?2:3,
l|=h<<6,0!==s.strstart&&(l|=ce),l+=31-l%31,s.status=me,c(s,l),0!==s.strstart&&(c(s,e.adler>>>16),
c(s,65535&e.adler)),e.adler=1}if(0!==s.pending){if(o(e),0===e.avail_out)return s.last_flush=-1,
D}else if(0===e.avail_in&&i(t)<=i(n)&&t!==L)return r(e,B);if(s.status===ve&&0!==e.avail_in)return r(e,B);
if(0!==e.avail_in||0!==s.lookahead||t!==R&&s.status!==ve){var d=s.strategy===U?p(s,t):s.strategy===G?v(s,t):j[s.level].func(s,t);
if((d===ye||d===_e)&&(s.status=ve),d===pe||d===ye)return 0===e.avail_out&&(s.last_flush=-1),
D;if(d===ge&&(t===I?O._tr_align(s):t!==F&&(O._tr_stored_block(s,0,0,!1),t===P&&(a(s.head),
0===s.lookahead&&(s.strstart=0,s.block_start=0,s.insert=0))),o(e),0===e.avail_out))return s.last_flush=-1,
D}return t!==L?D:s.wrap<=0?z:(2===s.wrap?(u(s,255&e.adler),u(s,e.adler>>8&255),u(s,e.adler>>16&255),
u(s,e.adler>>24&255),u(s,255&e.total_in),u(s,e.total_in>>8&255),u(s,e.total_in>>16&255),
u(s,e.total_in>>24&255)):(c(s,e.adler>>>16),c(s,65535&e.adler)),o(e),s.wrap>0&&(s.wrap=-s.wrap),
0!==s.pending?D:z)}function E(e){var t=e.state.status;return t!==le&&t!==he&&t!==de&&t!==fe&&t!==be&&t!==me&&t!==ve?r(e,W):(e.state=null,
t===me?r(e,N):D)}var j,C=e("./utils"),O=e("./trees"),M=e("./adler32"),T=e("./crc32"),A=e("./messages"),R=0,I=1,P=3,L=4,F=5,D=0,z=1,W=-2,N=-3,B=-5,$=-1,H=1,U=2,G=3,V=4,q=0,Z=2,K=8,Y=9,X=15,Q=8,J=29,ee=256,te=ee+1+J,ne=30,re=19,ie=2*te+1,ae=15,oe=3,se=258,ue=se+oe+1,ce=32,le=42,he=69,de=73,fe=91,be=103,me=113,ve=666,pe=1,ge=2,ye=3,_e=4,we=3,ke=function(e,t,n,r,i){
this.good_length=e,this.max_lazy=t,this.nice_length=n,this.max_chain=r,this.func=i;
};j=[new ke(0,0,0,0,f),new ke(4,4,8,4,b),new ke(4,5,16,8,b),new ke(4,6,32,32,b),new ke(4,4,16,16,m),new ke(8,16,32,32,m),new ke(8,16,128,128,m),new ke(8,32,128,256,m),new ke(32,128,258,1024,m),new ke(32,258,258,4096,m)],
n.deflateInit=x,n.deflateInit2=k,n.deflateReset=w,n.deflate=S,n.deflateEnd=E,n.deflateInfo="pako deflate (from Nodeca project)";
},{"./adler32":4,"./crc32":6,"./messages":11,"./trees":12,"./utils":13}],8:[function(e,t,n){
var r=30,i=12;t.exports=function(e,t){var n,a,o,s,u,c,l,h,d,f,b,m,v,p,g,y,_,w,k,x,S,E,j,C,O;
n=e.state,a=e.next_in_index,C=e.next_in,o=a+(e.avail_in-5),s=e.next_out_index,O=e.next_out,
u=s-(t-e.avail_out),c=s+(e.avail_out-257),l=n.dmax,h=n.wsize,d=n.whave,f=n.wnext,
b=n.window,m=n.hold,v=n.bits,p=n.lencode,g=n.distcode,y=(1<<n.lenbits)-1,_=(1<<n.distbits)-1;
e:do{15>v&&(m+=C[a++]<<v,v+=8,m+=C[a++]<<v,v+=8),w=p[m&y];t:for(;;){if(k=w>>>24,m>>>=k,
v-=k,k=w>>>16&255,0===k)O[s++]=65535&w;else{if(!(16&k)){if(0===(64&k)){w=p[(65535&w)+(m&(1<<k)-1)];
continue t}if(32&k){n.mode=i;break e}e.msg="invalid literal/length code",n.mode=r;
break e}x=65535&w,k&=15,k&&(k>v&&(m+=C[a++]<<v,v+=8),x+=m&(1<<k)-1,m>>>=k,v-=k),15>v&&(m+=C[a++]<<v,
v+=8,m+=C[a++]<<v,v+=8),w=g[m&_];n:for(;;){if(k=w>>>24,m>>>=k,v-=k,k=w>>>16&255,!(16&k)){
if(0===(64&k)){w=g[(65535&w)+(m&(1<<k)-1)];continue n}e.msg="invalid distance code",
n.mode=r;break e}if(S=65535&w,k&=15,k>v&&(m+=C[a++]<<v,v+=8,k>v&&(m+=C[a++]<<v,v+=8)),
S+=m&(1<<k)-1,S>l){e.msg="invalid distance too far back",n.mode=r;break e}if(m>>>=k,
v-=k,k=s-u,S>k){if(k=S-k,k>d&&n.sane){e.msg="invalid distance too far back",n.mode=r;
break e}if(E=0,j=b,0===f){if(E+=h-k,x>k){x-=k;do O[s++]=b[E++];while(--k);E=s-S,j=O;
}}else if(k>f){if(E+=h+f-k,k-=f,x>k){x-=k;do O[s++]=b[E++];while(--k);if(E=0,x>f){
k=f,x-=k;do O[s++]=b[E++];while(--k);E=s-S,j=O}}}else if(E+=f-k,x>k){x-=k;do O[s++]=b[E++];while(--k);
E=s-S,j=O}for(;x>2;)O[s++]=j[E++],O[s++]=j[E++],O[s++]=j[E++],x-=3;x&&(O[s++]=j[E++],
x>1&&(O[s++]=j[E++]))}else{E=s-S;do O[s++]=O[E++],O[s++]=O[E++],O[s++]=O[E++],x-=3;while(x>2);
x&&(O[s++]=O[E++],x>1&&(O[s++]=O[E++]))}break}}break}}while(o>a&&c>s);x=v>>3,a-=x,
v-=x<<3,m&=(1<<v)-1,e.next_in_index=a,e.next_out_index=s,e.avail_in=o>a?5+(o-a):5-(a-o),
e.avail_out=c>s?257+(c-s):257-(s-c),n.hold=m,n.bits=v}},{}],9:[function(e,t,n){function r(e){
return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function i(){this.mode=0,
this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,
this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,
this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,
this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,
this.have=0,this.next=null,this.next_index=0,this.lens=new g.Buf16(320),this.work=new g.Buf16(288),
this.codes=new g.Buf32(pe),this.sane=0,this.back=0,this.was=0}function a(e,t,n,r,i,a,o,s){
this.type=e,this.lens=t,this.lens_index=n,this.codes=r,this.table=i,this.table_index=a,
this.bits=o,this.work=s}function o(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,
t.wrap&&(e.adler=1&t.wrap),t.mode=D,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,
t.hold=0,t.bits=0,t.lencode=new g.Buf32(pe),t.distcode=new g.Buf32(pe),t.sane=1,t.back=-1,
M):R}function s(e){var t;return e&&e.state?(t=e.state,t.wsize=0,t.whave=0,t.wnext=0,
o(e)):R}function u(e,t){var n,r;return e&&e.state?(r=e.state,0>t?(n=0,t=-t):(n=(t>>4)+1,
48>t&&(t&=15)),t&&(8>t||t>15)?R:(null!==r.window&&r.wbits!==t&&(r.window=null),r.wrap=n,
r.wbits=t,s(e))):R}function c(e,t){var n,r;return e?(r=new i,e.state=r,r.window=null,
n=u(e,t),n!==M&&(e.state=null),n):R}function l(e){return c(e,ye)}function h(e,t,n){
var r;return e&&e.state?(r=e.state,0>t?(r.hold=0,r.bits=0,M):t>16||r.bits+t>32?R:(n&=(1<<t)-1,
r.hold+=n<<r.bits,r.bits+=t,M)):R}function d(e){if(_e){var t,n;for(v=new g.Buf32(512),
p=new g.Buf32(32),t=0;144>t;)e.lens[t++]=8;for(;256>t;)e.lens[t++]=9;for(;280>t;)e.lens[t++]=7;
for(;288>t;)e.lens[t++]=8;for(n=9,k(new a(S,e.lens,0,288,v,0,n,e.work)),t=0;32>t;)e.lens[t++]=5;
n=5,k(new a(E,e.lens,0,32,p,0,n,e.work)),_e=!1}e.lencode=v,e.lenbits=9,e.distcode=p,
e.distbits=5}function f(e,t,n,r){var i,a=e.state;return null===a.window&&(a.wsize=1<<a.wbits,
a.wnext=0,a.whave=0,a.window=new g.Buf8(a.wsize)),r>=a.wsize?(g.arraySet(a.window,t,n-a.wsize,a.wsize,0),
a.wnext=0,a.whave=a.wsize):(i=a.wsize-a.wnext,i>r&&(i=r),g.arraySet(a.window,t,n-r,i,a.wnext),
r-=i,r?(g.arraySet(a.window,t,n-r,r,0),a.wnext=r,a.whave=a.wsize):(a.wnext+=i,a.wnext===a.wsize&&(a.wnext=0),
a.whave<a.wsize&&(a.whave+=i))),0}function b(e,t){var n,i,o,s,u,c,l,h,b,m,v,p,me,ve,pe,ge,ye,_e,we,ke,xe,Se,Ee,je,Ce=0,Oe=new g.Buf8(4),Me=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];
n=e.state,n.mode===Z&&(n.mode=K),u=e.next_out_index,o=e.next_out,l=e.avail_out,s=e.next_in_index,
i=e.next_in,c=e.avail_in,h=n.hold,b=n.bits,m=c,v=l,Se=M;e:for(;;)switch(n.mode){case D:
if(0===n.wrap){n.mode=K;break}for(;16>b;){if(0===c)break e;c--,h+=i[s++]<<b,b+=8}
if(2&n.wrap&&35615===h){n.check=0,Oe[0]=255&h,Oe[1]=h>>>8&255,n.check=_(n.check,Oe,2,0),
h=0,b=0,n.mode=z;break}if(n.flags=0,n.head&&(n.head.done=-1),!(1&n.wrap)||(((255&h)<<8)+(h>>8))%31){
e.msg="incorrect header check",n.mode=de;break}if((15&h)!==F){e.msg="unknown compression method",
n.mode=de;break}if(h>>>=4,b-=4,xe=(15&h)+8,0===n.wbits)n.wbits=xe;else if(xe>n.wbits){
e.msg="invalid window size",n.mode=de;break}n.dmax=1<<xe,e.adler=n.check=1,n.mode=512&h?V:Z,
h=0,b=0;break;case z:for(;16>b;){if(0===c)break e;c--,h+=i[s++]<<b,b+=8}if(n.flags=h,
(255&n.flags)!==F){e.msg="unknown compression method",n.mode=de;break}if(57344&n.flags){
e.msg="unknown header flags set",n.mode=de;break}n.head&&(n.head.text=h>>8&1),512&n.flags&&(Oe[0]=255&h,
Oe[1]=h>>>8&255,n.check=_(n.check,Oe,2,0)),h=0,b=0,n.mode=W;case W:for(;32>b;){if(0===c)break e;
c--,h+=i[s++]<<b,b+=8}n.head&&(n.head.time=h),512&n.flags&&(Oe[0]=255&h,Oe[1]=h>>>8&255,
Oe[2]=h>>>16&255,Oe[3]=h>>>24&255,n.check=_(n.check,Oe,4,0)),h=0,b=0,n.mode=N;case N:
for(;16>b;){if(0===c)break e;c--,h+=i[s++]<<b,b+=8}n.head&&(n.head.xflags=255&h,n.head.os=h>>8),
512&n.flags&&(Oe[0]=255&h,Oe[1]=h>>>8&255,n.check=_(n.check,Oe,2,0)),h=0,b=0,n.mode=B;
case B:if(1024&n.flags){for(;16>b;){if(0===c)break e;c--,h+=i[s++]<<b,b+=8}n.length=h,
n.head&&(n.head.extra_len=h),512&n.flags&&(Oe[0]=255&h,Oe[1]=h>>>8&255,n.check=_(n.check,Oe,2,0)),
h=0,b=0}else n.head&&(n.head.extra=null);n.mode=$;case $:if(1024&n.flags){if(p=n.length,
p>c&&(p=c),p){if(n.head&&n.head.extra)throw xe=n.head.extra_len-n.length,"Review & implement right";
512&n.flags&&(n.check=_(n.check,i,p,s)),c-=p,s+=p,n.length-=p}if(n.length)break e;
}n.length=0,n.mode=H;case H:if(2048&n.flags){if(0===c)break e;p=0;do xe=i[s+p++],
n.head&&n.head.name&&n.length<n.head.name_max&&(n.head.name[n.length++]=xe);while(xe&&c>p);
if(512&n.flags&&(n.check=_(n.check,i,p,s)),c-=p,s+=p,xe)break e}else n.head&&(n.head.name=null);
n.length=0,n.mode=U;case U:if(4096&n.flags){if(0===c)break e;p=0;do xe=i[s+p++],n.head&&n.head.comment&&n.length<n.head.comm_max&&(n.head.comment[n.length++]=xe);while(xe&&c>p);
if(512&n.flags&&(n.check=_(n.check,i,p,s)),c-=p,s+=p,xe)break e}else n.head&&(n.head.comment=null);
n.mode=G;case G:if(512&n.flags){for(;16>b;){if(0===c)break e;c--,h+=i[s++]<<b,b+=8;
}if(h!==(65535&n.check)){e.msg="header crc mismatch",n.mode=de;break}h=0,b=0}n.head&&(n.head.hcrc=n.flags>>9&1,
n.head.done=1),e.adler=n.check=0,n.mode=Z;break;case V:for(;32>b;){if(0===c)break e;
c--,h+=i[s++]<<b,b+=8}e.adler=n.check=r(h),h=0,b=0,n.mode=q;case q:if(0===n.havedict)return e.next_out_index=u,
e.avail_out=l,e.next_in_index=s,e.avail_in=c,n.hold=h,n.bits=b,A;e.adler=n.check=1,
n.mode=Z;case Z:if(t===C||t===O)break e;case K:if(n.last){h>>>=7&b,b-=7&b,n.mode=ce;
break}for(;3>b;){if(0===c)break e;c--,h+=i[s++]<<b,b+=8}switch(n.last=1&h,h>>>=1,
b-=1,3&h){case 0:n.mode=Y;break;case 1:if(d(n),n.mode=ne,t===O){h>>>=2,b-=2;break e;
}break;case 2:n.mode=J;break;case 3:e.msg="invalid block type",n.mode=de}h>>>=2,b-=2;
break;case Y:for(h>>>=7&b,b-=7&b;32>b;){if(0===c)break e;c--,h+=i[s++]<<b,b+=8}if((65535&h)!==(h>>>16^65535)){
e.msg="invalid stored block lengths",n.mode=de;break}if(n.length=65535&h,h=0,b=0,
n.mode=X,t===O)break e;case X:n.mode=Q;case Q:if(p=n.length){if(p>c&&(p=c),p>l&&(p=l),
0===p)break e;g.arraySet(o,i,s,p,u),c-=p,s+=p,l-=p,u+=p,n.length-=p;break}n.mode=Z;
break;case J:for(;14>b;){if(0===c)break e;c--,h+=i[s++]<<b,b+=8}if(n.nlen=(31&h)+257,
h>>>=5,b-=5,n.ndist=(31&h)+1,h>>>=5,b-=5,n.ncode=(15&h)+4,h>>>=4,b-=4,n.nlen>286||n.ndist>30){
e.msg="too many length or distance symbols",n.mode=de;break}n.have=0,n.mode=ee;case ee:
for(;n.have<n.ncode;){for(;3>b;){if(0===c)break e;c--,h+=i[s++]<<b,b+=8}n.lens[Me[n.have++]]=7&h,
h>>>=3,b-=3}for(;n.have<19;)n.lens[Me[n.have++]]=0;if(g.arraySet(n.lencode,n.codes,0,n.codes.length,0),
n.lenbits=7,Ee=new a(x,n.lens,0,19,n.lencode,0,n.lenbits,n.work),Se=k(Ee),n.lenbits=Ee.bits,
Se){e.msg="invalid code lengths set",n.mode=de;break}n.have=0,n.mode=te;case te:for(;n.have<n.nlen+n.ndist;){
for(;Ce=n.lencode[h&(1<<n.lenbits)-1],pe=Ce>>>24,ge=Ce>>>16&255,ye=65535&Ce,!(b>=pe);){
if(0===c)break e;c--,h+=i[s++]<<b,b+=8}if(16>ye)h>>>=pe,b-=pe,n.lens[n.have++]=ye;else{
if(16===ye){for(je=pe+2;je>b;){if(0===c)break e;c--,h+=i[s++]<<b,b+=8}if(h>>>=pe,
b-=pe,0===n.have){e.msg="invalid bit length repeat",n.mode=de;break}xe=n.lens[n.have-1],
p=3+(3&h),h>>>=2,b-=2}else if(17===ye){for(je=pe+3;je>b;){if(0===c)break e;c--,h+=i[s++]<<b,
b+=8}h>>>=pe,b-=pe,xe=0,p=3+(7&h),h>>>=3,b-=3}else{for(je=pe+7;je>b;){if(0===c)break e;
c--,h+=i[s++]<<b,b+=8}h>>>=pe,b-=pe,xe=0,p=11+(127&h),h>>>=7,b-=7}if(n.have+p>n.nlen+n.ndist){
e.msg="invalid bit length repeat",n.mode=de;break}for(;p--;)n.lens[n.have++]=xe}}
if(n.mode===de)break;if(0===n.lens[256]){e.msg="invalid code -- missing end-of-block",
n.mode=de;break}if(g.arraySet(n.lencode,n.codes,0,n.codes.length,0),n.lenbits=9,Ee=new a(S,n.lens,0,n.nlen,n.lencode,0,n.lenbits,n.work),
Se=k(Ee),n.lenbits=Ee.bits,Se){e.msg="invalid literal/lengths set",n.mode=de;break;
}if(n.distbits=6,g.arraySet(n.distcode,n.codes,0,n.codes.length,0),Ee=new a(E,n.lens,n.nlen,n.ndist,n.distcode,0,n.distbits,n.work),
Se=k(Ee),n.distbits=Ee.bits,Se){e.msg="invalid distances set",n.mode=de;break}if(n.mode=ne,
t===O)break e;case ne:n.mode=re;case re:if(c>=6&&l>=258){e.next_out_index=u,e.avail_out=l,
e.next_in_index=s,e.avail_in=c,n.hold=h,n.bits=b,w(e,v),u=e.next_out_index,o=e.next_out,
l=e.avail_out,s=e.next_in_index,i=e.next_in,c=e.avail_in,h=n.hold,b=n.bits,n.mode===Z&&(n.back=-1);
break}for(n.back=0;Ce=n.lencode[h&(1<<n.lenbits)-1],pe=Ce>>>24,ge=Ce>>>16&255,ye=65535&Ce,
!(b>=pe);){if(0===c)break e;c--,h+=i[s++]<<b,b+=8}if(ge&&0===(240&ge)){for(_e=pe,
we=ge,ke=ye;Ce=n.lencode[ke+((h&(1<<_e+we)-1)>>_e)],pe=Ce>>>24,ge=Ce>>>16&255,ye=65535&Ce,
!(b>=_e+pe);){if(0===c)break e;c--,h+=i[s++]<<b,b+=8}h>>>=_e,b-=_e,n.back+=_e}if(h>>>=pe,
b-=pe,n.back+=pe,n.length=ye,0===ge){n.mode=ue;break}if(32&ge){n.back=-1,n.mode=Z;
break}if(64&ge){e.msg="invalid literal/length code",n.mode=de;break}n.extra=15&ge,
n.mode=ie;case ie:if(n.extra){for(je=n.extra;je>b;){if(0===c)break e;c--,h+=i[s++]<<b,
b+=8}n.length+=h&(1<<n.extra)-1,h>>>=n.extra,b-=n.extra,n.back+=n.extra}n.was=n.length,
n.mode=ae;case ae:for(;Ce=n.distcode[h&(1<<n.distbits)-1],pe=Ce>>>24,ge=Ce>>>16&255,
ye=65535&Ce,!(b>=pe);){if(0===c)break e;c--,h+=i[s++]<<b,b+=8}if(0===(240&ge)){for(_e=pe,
we=ge,ke=ye;Ce=n.distcode[ke+((h&(1<<_e+we)-1)>>_e)],pe=Ce>>>24,ge=Ce>>>16&255,ye=65535&Ce,
!(b>=_e+pe);){if(0===c)break e;c--,h+=i[s++]<<b,b+=8}h>>>=_e,b-=_e,n.back+=_e}if(h>>>=pe,
b-=pe,n.back+=pe,64&ge){e.msg="invalid distance code",n.mode=de;break}n.offset=ye,
n.extra=15&ge,n.mode=oe;case oe:if(n.extra){for(je=n.extra;je>b;){if(0===c)break e;
c--,h+=i[s++]<<b,b+=8}n.offset+=h&(1<<n.extra)-1,h>>>=n.extra,b-=n.extra,n.back+=n.extra;
}if(n.offset>n.dmax){e.msg="invalid distance too far back",n.mode=de;break}n.mode=se;
case se:if(0===l)break e;if(p=v-l,n.offset>p){if(p=n.offset-p,p>n.whave&&n.sane){
e.msg="invalid distance too far back",n.mode=de;break}p>n.wnext?(p-=n.wnext,me=n.wsize-p):me=n.wnext-p,
p>n.length&&(p=n.length),ve=n.window}else ve=o,me=u-n.offset,p=n.length;p>l&&(p=l),
l-=p,n.length-=p;do o[u++]=ve[me++];while(--p);0===n.length&&(n.mode=re);break;case ue:
if(0===l)break e;o[u++]=n.length,l--,n.mode=re;break;case ce:if(n.wrap){for(;32>b;){
if(0===c)break e;c--,h|=i[s++]<<b,b+=8}if(v-=l,e.total_out+=v,n.total+=v,v&&(e.adler=n.check=n.flags?_(n.check,o,v,u-v):y(n.check,o,v,u-v)),
v=l,(n.flags?h:r(h))!==n.check){e.msg="incorrect data check",n.mode=de;break}h=0,
b=0}n.mode=le;case le:if(n.wrap&&n.flags){for(;32>b;){if(0===c)break e;c--,h+=i[s++]<<b,
b+=8}if(h!==(4294967295&n.total)){e.msg="incorrect length check",n.mode=de;break}
h=0,b=0}n.mode=he;case he:Se=T;break e;case de:Se=I;break e;case fe:return P;case be:
default:return R}return e.next_out_index=u,e.avail_out=l,e.next_in_index=s,e.avail_in=c,
n.hold=h,n.bits=b,(n.wsize||v!==e.avail_out&&n.mode<de&&(n.mode<ce||t!==j))&&f(e,e.next_out,e.next_out_index,v-e.avail_out)?(n.mode=fe,
P):(m-=e.avail_in,v-=e.avail_out,e.total_in+=m,e.total_out+=v,n.total+=v,n.wrap&&v&&(e.adler=n.check=n.flags?_(n.check,o,v,e.next_out_index-v):y(n.check,o,v,e.next_out_index-v)),
e.data_type=n.bits+(n.last?64:0)+(n.mode===Z?128:0)+(n.mode===ne||n.mode===X?256:0),
(0===m&&0===v||t===j)&&Se===M&&(Se=L),Se)}function m(e){var t=e.state;return t.window&&(t.window=null),
e.state=null,M}var v,p,g=e("./utils"),y=e("./adler32"),_=e("./crc32"),w=e("./inffast"),k=e("./inftrees"),x=0,S=1,E=2,j=4,C=5,O=6,M=0,T=1,A=2,R=-2,I=-3,P=-4,L=-5,F=8,D=1,z=2,W=3,N=4,B=5,$=6,H=7,U=8,G=9,V=10,q=11,Z=12,K=13,Y=14,X=15,Q=16,J=17,ee=18,te=19,ne=20,re=21,ie=22,ae=23,oe=24,se=25,ue=26,ce=27,le=28,he=29,de=30,fe=31,be=32,me=852,ve=592,pe=me+ve,ge=15,ye=ge,_e=!0;
n.inflateReset=s,n.inflateReset2=u,n.inflateResetKeep=o,n.inflateInit=l,n.inflateInit2=c,
n.inflatePrime=h,n.inflate=b,n.inflateEnd=m,n.inflateInfo="pako inflate (from Nodeca project)";
},{"./adler32":4,"./crc32":6,"./inffast":8,"./inftrees":10,"./utils":13}],10:[function(e,t,n){
var r=e("./utils"),i=15,a=852,o=592,s=0,u=1,c=2,l=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],h=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],d=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],f=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];
t.exports=function(e){var t,n,b,m,v,p,g,y,_,w=e.type,k=e.lens,x=e.codes,S=e.table,E=e.bits,j=e.work,C=0,O=0,M=0,T=0,A=0,R=0,I=0,P=0,L=0,F=0,D=null,z=0,W=new r.Buf16(i+1),N=new r.Buf16(i+1),B=null,$=0;
for(C=0;i>=C;C++)W[C]=0;for(O=0;x>O;O++)W[k[e.lens_index+O]]++;for(A=E,T=i;T>=1&&0===W[T];T--);
if(A>T&&(A=T),0===T)return S[e.table_index++]=20971520,S[e.table_index++]=20971520,
e.bits=1,0;for(M=1;T>M&&0===W[M];M++);for(M>A&&(A=M),P=1,C=1;i>=C;C++)if(P<<=1,P-=W[C],
0>P)return-1;if(P>0&&(w===s||1!==T))return-1;for(N[1]=0,C=1;i>C;C++)N[C+1]=N[C]+W[C];
for(O=0;x>O;O++)0!==k[e.lens_index+O]&&(j[N[k[e.lens_index+O]]++]=O);switch(w){case s:
D=B=j,p=19;break;case u:D=l,z-=257,B=h,$-=257,p=256;break;default:D=d,B=f,p=-1}if(F=0,
O=0,C=M,v=e.table_index,R=A,I=0,b=-1,L=1<<A,m=L-1,w===u&&L>a||w===c&&L>o)return 1;
for(var H=0;;){H++,g=C-I,j[O]<p?(y=0,_=j[O]):j[O]>p?(y=B[$+j[O]],_=D[z+j[O]]):(y=96,
_=0),t=1<<C-I,n=1<<R,M=n;do n-=t,S[v+(F>>I)+n]=g<<24|y<<16|_|0;while(0!==n);for(t=1<<C-1;F&t;)t>>=1;
if(0!==t?(F&=t-1,F+=t):F=0,O++,0===--W[C]){if(C===T)break;C=k[e.lens_index+j[O]]}
if(C>A&&(F&m)!==b){for(0===I&&(I=A),v+=M,R=C-I,P=1<<R;T>R+I&&(P-=W[R+I],!(0>=P));)R++,
P<<=1;if(L+=1<<R,w===u&&L>a||w===c&&L>o)return 1;b=F&m,S[b]=A<<24|R<<16|v-e.table_index;
}}return 0!==F&&(S[v+F]=C-I<<24|64<<16|0),e.table_index+=L,e.bits=A,0}},{"./utils":13
}],11:[function(e,t,n){t.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error",
"-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error",
"-6":"incompatible version"}},{}],12:[function(e,t,n){function r(e){for(var t=e.length;--t;)e[t]=0;
}function i(e){return 256>e?oe[e]:oe[256+(e>>>7)]}function a(e,t){e.pending_buf[e.pending++]=255&t,
e.pending_buf[e.pending++]=t>>>8&255}function o(e,t,n){e.bi_valid>q-n?(e.bi_buf|=t<<e.bi_valid&65535,
a(e,e.bi_buf),e.bi_buf=t>>q-e.bi_valid,e.bi_valid+=n-q):(e.bi_buf|=t<<e.bi_valid&65535,
e.bi_valid+=n)}function s(e,t,n){o(e,n[2*t],n[2*t+1])}function u(e,t){var n=0;do n|=1&e,
e>>>=1,n<<=1;while(--t>0);return n>>>1}function c(e){16===e.bi_valid?(a(e,e.bi_buf),
e.bi_buf=0,e.bi_valid=0):e.bi_valid>=8&&(e.pending_buf[e.pending++]=255&e.bi_buf,
e.bi_buf>>=8,e.bi_valid-=8)}function l(e,t){var n,r,i,a,o,s,u=t.dyn_tree,c=t.max_code,l=t.stat_desc.static_tree,h=t.stat_desc.has_stree,d=t.stat_desc.extra_bits,f=t.stat_desc.extra_base,b=t.stat_desc.max_length,m=0;
for(a=0;V>=a;a++)e.bl_count[a]=0;for(u[2*e.heap[e.heap_max]+1]=0,n=e.heap_max+1;G>n;n++)r=e.heap[n],
a=u[2*u[2*r+1]+1]+1,a>b&&(a=b,m++),u[2*r+1]=a,r>c||(e.bl_count[a]++,o=0,r>=f&&(o=d[r-f]),
s=u[2*r],e.opt_len+=s*(a+o),h&&(e.static_len+=s*(l[2*r+1]+o)));if(0!==m){do{for(a=b-1;0===e.bl_count[a];)a--;
e.bl_count[a]--,e.bl_count[a+1]+=2,e.bl_count[b]--,m-=2}while(m>0);for(a=b;0!==a;a--)for(r=e.bl_count[a];0!==r;)i=e.heap[--n],
i>c||(u[2*i+1]!==a&&(e.opt_len+=(a-u[2*i+1])*u[2*i],u[2*i+1]=a),r--)}}function h(e,t,n){
var r,i,a=new Array(V+1),o=0;for(r=1;V>=r;r++)a[r]=o=o+n[r-1]<<1;for(i=0;t>=i;i++){
var s=e[2*i+1];0!==s&&(e[2*i]=u(a[s]++,s))}}function d(){var e,t,n,r,i,a=new Array(V+1);
for(n=0,r=0;N-1>r;r++)for(ue[r]=n,e=0;e<1<<J[r];e++)se[n++]=r;for(se[n-1]=r,i=0,r=0;16>r;r++)for(ce[r]=i,
e=0;e<1<<ee[r];e++)oe[i++]=r;for(i>>=7;H>r;r++)for(ce[r]=i<<7,e=0;e<1<<ee[r]-7;e++)oe[256+i++]=r;
for(t=0;V>=t;t++)a[t]=0;for(e=0;143>=e;)ie[2*e+1]=8,e++,a[8]++;for(;255>=e;)ie[2*e+1]=9,
e++,a[9]++;for(;279>=e;)ie[2*e+1]=7,e++,a[7]++;for(;287>=e;)ie[2*e+1]=8,e++,a[8]++;
for(h(ie,$+1,a),e=0;H>e;e++)ae[2*e+1]=5,ae[2*e]=u(e,5);le=new fe(ie,J,B+1,$,V),he=new fe(ae,ee,0,H,V),
de=new fe(new Array(0),te,0,U,Z)}function f(e){var t;for(t=0;$>t;t++)e.dyn_ltree[2*t]=0;
for(t=0;H>t;t++)e.dyn_dtree[2*t]=0;for(t=0;U>t;t++)e.bl_tree[2*t]=0;e.dyn_ltree[2*K]=1,
e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function b(e){e.bi_valid>8?a(e,e.bi_buf):e.bi_valid>0&&(e.pending_buf[e.pending++]=e.bi_buf),
e.bi_buf=0,e.bi_valid=0}function m(e,t,n,r){b(e),r&&(a(e,n),a(e,~n)),T.arraySet(e.pending_buf,e.window,t,n,e.pending),
e.pending+=n}function v(e,t,n,r){var i=2*t,a=2*n;return e[i]<e[a]||e[i]===e[a]&&r[t]<=r[n];
}function p(e,t,n){for(var r=e.heap[n],i=n<<1;i<=e.heap_len&&(i<e.heap_len&&v(t,e.heap[i+1],e.heap[i],e.depth)&&i++,
!v(t,r,e.heap[i],e.depth));)e.heap[n]=e.heap[i],n=i,i<<=1;e.heap[n]=r}function g(e,t,n){
var r,a,u,c,l=0;if(0!==e.last_lit)do r=e.pending_buf[e.d_buf+2*l]<<8|e.pending_buf[e.d_buf+2*l+1],
a=e.pending_buf[e.l_buf+l],l++,0===r?s(e,a,t):(u=se[a],s(e,u+B+1,t),c=J[u],0!==c&&(a-=ue[u],
o(e,a,c)),r--,u=i(r),s(e,u,n),c=ee[u],0!==c&&(r-=ce[u],o(e,r,c)));while(l<e.last_lit);
s(e,K,t)}function y(e,t){var n,r,i,a=t.dyn_tree,o=t.stat_desc.static_tree,s=t.stat_desc.has_stree,u=t.stat_desc.elems,c=-1;
for(e.heap_len=0,e.heap_max=G,n=0;u>n;n++)0!==a[2*n]?(e.heap[++e.heap_len]=c=n,e.depth[n]=0):a[2*n+1]=0;
for(;e.heap_len<2;)i=e.heap[++e.heap_len]=2>c?++c:0,a[2*i]=1,e.depth[i]=0,e.opt_len--,
s&&(e.static_len-=o[2*i+1]);for(t.max_code=c,n=e.heap_len>>1;n>=1;n--)p(e,a,n);i=u;
do n=e.heap[1],e.heap[1]=e.heap[e.heap_len--],p(e,a,1),r=e.heap[1],e.heap[--e.heap_max]=n,
e.heap[--e.heap_max]=r,a[2*i]=a[2*n]+a[2*r],e.depth[i]=(e.depth[n]>=e.depth[r]?e.depth[n]:e.depth[r])+1,
a[2*n+1]=a[2*r+1]=i,e.heap[1]=i++,p(e,a,1);while(e.heap_len>=2);e.heap[--e.heap_max]=e.heap[1],
l(e,t),h(a,c,e.bl_count)}function _(e,t,n){var r,i,a=-1,o=t[1],s=0,u=7,c=4;for(0===o&&(u=138,
c=3),t[2*(n+1)+1]=65535,r=0;n>=r;r++)i=o,o=t[2*(r+1)+1],++s<u&&i===o||(c>s?e.bl_tree[2*i]+=s:0!==i?(i!==a&&e.bl_tree[2*i]++,
e.bl_tree[2*Y]++):10>=s?e.bl_tree[2*X]++:e.bl_tree[2*Q]++,s=0,a=i,0===o?(u=138,c=3):i===o?(u=6,
c=3):(u=7,c=4))}function w(e,t,n){var r,i,a=-1,u=t[1],c=0,l=7,h=4;for(0===u&&(l=138,
h=3),r=0;n>=r;r++)if(i=u,u=t[2*(r+1)+1],!(++c<l&&i===u)){if(h>c){do s(e,i,e.bl_tree);while(0!==--c);
}else 0!==i?(i!==a&&(s(e,i,e.bl_tree),c--),s(e,Y,e.bl_tree),o(e,c-3,2)):10>=c?(s(e,X,e.bl_tree),
o(e,c-3,3)):(s(e,Q,e.bl_tree),o(e,c-11,7));c=0,a=i,0===u?(l=138,h=3):i===u?(l=6,h=3):(l=7,
h=4)}}function k(e){var t;for(_(e,e.dyn_ltree,e.l_desc.max_code),_(e,e.dyn_dtree,e.d_desc.max_code),
y(e,e.bl_desc),t=U-1;t>=3&&0===e.bl_tree[2*ne[t]+1];t--);return e.opt_len+=3*(t+1)+5+5+4,
t}function x(e,t,n,r){var i;for(o(e,t-257,5),o(e,n-1,5),o(e,r-4,4),i=0;r>i;i++)o(e,e.bl_tree[2*ne[i]+1],3);
w(e,e.dyn_ltree,t-1),w(e,e.dyn_dtree,n-1)}function S(e){var t,n=4093624447;for(t=0;31>=t;t++,
n>>>=1)if(1&n&&0!==e.dyn_ltree[2*t])return R;if(0!==e.dyn_ltree[18]||0!==e.dyn_ltree[20]||0!==e.dyn_ltree[26])return I;
for(t=32;B>t;t++)if(0!==e.dyn_ltree[2*t])return I;return R}function E(e){me||(d(),
me=!0),e.l_desc=new be(e.dyn_ltree,le),e.d_desc=new be(e.dyn_dtree,he),e.bl_desc=new be(e.bl_tree,de),
e.bi_buf=0,e.bi_valid=0,f(e)}function j(e,t,n,r){o(e,(L<<1)+(r?1:0),3),m(e,t,n,!0);
}function C(e){o(e,F<<1,3),s(e,K,ie),c(e)}function O(e,t,n,r){var i,a,s=0;e.level>0?(e.strm.data_type===P&&(e.strm.data_type=S(e)),
y(e,e.l_desc),y(e,e.d_desc),s=k(e),i=e.opt_len+3+7>>>3,a=e.static_len+3+7>>>3,i>=a&&(i=a)):i=a=n+5,
i>=n+4&&-1!==t?j(e,t,n,r):e.strategy===A||a===i?(o(e,(F<<1)+(r?1:0),3),g(e,ie,ae)):(o(e,(D<<1)+(r?1:0),3),
x(e,e.l_desc.max_code+1,e.d_desc.max_code+1,s+1),g(e,e.dyn_ltree,e.dyn_dtree)),f(e),
r&&b(e)}function M(e,t,n){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,
e.pending_buf[e.l_buf+e.last_lit]=255&n,e.last_lit++,0===t?e.dyn_ltree[2*n]++:(e.matches++,
t--,e.dyn_ltree[2*(se[n]+B+1)]++,e.dyn_dtree[2*i(t)]++),e.last_lit===e.lit_bufsize-1;
}var T=e("./utils"),A=4,R=0,I=1,P=2,L=0,F=1,D=2,z=3,W=258,N=29,B=256,$=B+1+N,H=30,U=19,G=2*$+1,V=15,q=16,Z=7,K=256,Y=16,X=17,Q=18,J=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ee=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],te=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],ne=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],re=512,ie=new Array(2*($+2));
r(ie);var ae=new Array(2*H);r(ae);var oe=new Array(re);r(oe);var se=new Array(W-z+1);
r(se);var ue=new Array(N);r(ue);var ce=new Array(H);r(ce);var le,he,de,fe=function(e,t,n,r,i){
this.static_tree=e,this.extra_bits=t,this.extra_base=n,this.elems=r,this.max_length=i,
this.has_stree=e&&e.length},be=function(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t;
},me=!1;n._tr_init=E,n._tr_stored_block=j,n._tr_flush_block=O,n._tr_tally=M,n._tr_align=C;
},{"./utils":13}],13:[function(e,t,n){var r="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;
n.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){
var n=t.shift();if(n){if("object"!==$traceurRuntime["typeof"](n))throw new TypeError(n+"must be non-object");
for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])}}return e},n.shrinkBuf=function(e,t){
return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var i={arraySet:function(e,t,n,r,i){
if(t.subarray)return void e.set(t.subarray(n,n+r),i);for(var a=0;r>a;a++)e[i+a]=t[n+a];
},flattenChunks:function(e){var t,n,r,i,a,o;for(r=0,t=0,n=e.length;n>t;t++)r+=e[t].length;
for(o=new Uint8Array(r),i=0,t=0,n=e.length;n>t;t++)a=e[t],o.set(a,i),i+=a.length;return o;
}},a={arraySet:function(e,t,n,r,i){for(var a=0;r>a;a++)e[i+a]=t[n+a]},flattenChunks:function(e){
return[].concat.apply([],e)}};n.setTyped=function(e){e?(n.Buf8=Uint8Array,n.Buf16=Uint16Array,
n.Buf32=Int32Array,n.assign(n,i)):(n.Buf8=Array,n.Buf16=Array,n.Buf32=Array,n.assign(n,a));
},n.setTyped(r)},{}],14:[function(e,t,n){function r(){this.next_in=null,this.next_in_index=0,
this.avail_in=0,this.total_in=0,this.next_out=null,this.next_out_index=0,this.avail_out=0,
this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}t.exports=r;
},{}]},{},[1])(1)});var e=window.pako;return{get default(){return e}}}),System.registerModule("utils/array",[],function(){
var e=function(e,t){var n=void 0!==arguments[2]?arguments[2]:!1;if(e.length!==t.length)return!1;
if(n)for(var r in e){var i=e[r];if(i!==t[r])return!1}else{for(var a=0;a<e.length;a+=1)if(!t.includes(e[a]))return!1;
for(var o=0;o<t.length;o+=1)if(!e.includes(t[o]))return!1}return!0};return{get compareArrays(){
return e}}}),System.registerModule("utils/artwork",[],function(){var e=System.get("libs/pako")["default"],t=function(t){
for(var n=[],r=0,i=t.length;i>r;r+=1)n.push(t[r].charCodeAt(0));var a=new Uint8Array(n);
return e.gzip(a)},n=function(t){for(var n=e.inflate(t),r="",i=0,a=n.length;a>i;i+=1){
var o=String.fromCharCode(n[i]);r+=o}return r};return{get compressArtwork(){return t;
},get uncompressArtwork(){return n}}}),System.registerModule("utils/constants",[],function(){
var e="http://www.w3.org/2000/svg",t="http://www.w3.org/1999/xlink",n="http://www.w3.org/1999/xhtml",r="http://www.w3.org/1998/Math/MathML",i="http://www.w3.org/2000/xmlns/",a="http://www.boxy-svg.com/bx",o='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"></svg>',s=void 0===chrome.runtime.getManifest().update_url,u=function(){
return navigator.platform.startsWith("Win")?"windows":navigator.platform.startsWith("Mac")?"osx":"iPhone"===navigator.platform||"iPad"===navigator.platform?"ios":"Android"===navigator.platform?"android":navigator.userAgent.includes("CrOS")?"chromeos":navigator.platform.startsWith("Linux")?"linux":"other";
}();return{get SVG_NAMESPACE(){return e},get XLINK_NAMESPACE(){return t},get XHTML_NAMESPACE(){
return n},get MATHML_NAMESPACE(){return r},get XMLNS_NAMESPACE(){return i},get BX_NAMESPACE(){
return a},get DEFAULT_ARTWORK(){return o},get DEV_MODE(){return s},get OS_NAME(){
return u}}}),System.registerModule("utils/dom",[],function(){var e=System.get("utils/constants").SVG_NAMESPACE,t=function(e,t){
var n=void 0!==arguments[2]?arguments[2]:null;if(null===n){var r=t;return document.registerElement(e,r);
}var i=t,a=n;return document.registerElement(i,{"extends":e,prototype:a.prototype
})},n=function(t){var n,r,i,a,o=void 0!==arguments[1]?arguments[1]:null,s=t.split(":"),u=null;
if(1===s.length){var c=(n=s[Symbol.iterator](),(r=n.next()).done?void 0:r.value);u=document.createElement(c,o);
}else if(2===s.length){var l=s,h=(i=l[Symbol.iterator](),(a=i.next()).done?void 0:a.value),d=(a=i.next()).done?void 0:a.value;
"svg"===h&&(u=document.createElementNS(e,d,o))}return u};return{get registerElement(){
return t},get createElement(){return n}}}),System.registerModule("utils/event",[],function(){
var e=System.get("utils/constants").OS_NAME,t=function(e){var t=n(e),i=r(e),a=i;return a.includes(t)||a.push(t),
a},n=function(e){var t=null,n=e.keyIdentifier,r={"U+00C0":"U+0060","U+00BD":"U+002D",
"U+00BB":"U+003D","U+00DB":"U+005B","U+00DD":"U+005D","U+00DC":"U+005C","U+00BA":"U+003B",
"U+00DE":"U+0027","U+00BC":"U+002C","U+00BE":"U+002E","U+00BF":"U+002F"};for(var i in r){
var a=r[i];n===i&&(n=a)}if("U"===n[0]&&"+"===n[1]){var o=parseInt(n.substring(2),16);
27===o?t="Esc":8===o?t="Backspace":(t=String.fromCharCode(o),"	"===t?t="Tab":" "===t&&(t="Space"));
}else t="MacIntel"===navigator.platform?"Meta"===n?"Ctrl":"Control"===n?"Meta":n:"Control"===n?"Ctrl":"Win"===n||"Meta"===n?"Meta":n;
return t},r=function(e){var t,n,r=[],i=e.altKey,a=e.shiftKey;return t="MacIntel"===navigator.platform?e.metaKey:e.ctrlKey,
n="MacIntel"===navigator.platform?e.ctrlKey:e.metaKey,t&&r.push("Ctrl"),i&&r.push("Alt"),
a&&r.push("Shift"),n&&r.push("Meta"),r},i=function(t){var n=!1,r=!1,i=!1,a="",o=!0,s=!1,u=void 0;
try{for(var c=void 0,l=t[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var h=c.value;
"Ctrl"===h?n=!0:"Alt"===h?r=!0:"Shift"===h?i=!0:a=h}}catch(d){s=!0,u=d}finally{try{
o||null==l["return"]||l["return"]()}finally{if(s)throw u}}var f="";if("osx"===e||"ios"===e){
i&&(f+="⇧"),r&&(f+="⌥"),n&&(f+="⌘");var b={Up:"↑",Down:"↓",Left:"←",Right:"→",Backspace:"⌦"
};b[a]&&(a=b[a]),"Up"===a?a="↑":"Down"===a?a="↓":"Left"===a?a="←":"Right"===a&&(a="→");
}else n&&(f+="Ctrl+"),r&&(f+="Alt+"),i&&(f+="Shift+");return f+=a};return{get getShortcutForKeyboardEvent(){
return t},get getKeyForKeyboardEvent(){return n},get keyboardShortcutToString(){return i;
}}}),System.registerModule("utils/file",[],function(){var e=function(e){return new Promise(function(t){
chrome.fileSystem.getWritableEntry(e,function(e){t(e)})})},t=function(e){return new Promise(function(t){
chrome.fileSystem.getDisplayPath(e,function(e){t(e)})})},n=function(e){return e.name&&e.name.includes(".")?e.name.substring(e.name.lastIndexOf(".")+1).toLowerCase():null;
},r=function(e){return new Promise(function(t,n){chrome.fileSystem.chooseEntry(e,function(e){
chrome.runtime.lastError?"User cancelled"===chrome.runtime.lastError.message?t([]):n(chrome.runtime.lastError.message):t(e);
})})},i=function(e){return new Promise(function(t){chrome.fileSystem.restoreEntry(e,function(e){
e?e.file(function(){return t(e)},function(){return t(null)}):t(null)})})},a=function(e){
return new Promise(function(t){e.file(function(n){var r,i,a=e.name.endsWith("svgz")?"binary":"text",o=new FileReader;
"binary"===a?o.readAsArrayBuffer(n):o.readAsText(n),o.addEventListener("load",r=function(e){
o.removeEventListener("load",r),o.removeEventListener("error",i);var n;n="binary"===a?new Uint8Array(e.target.result):e.target.result,
t(n)}),o.addEventListener("error",i=function(e){o.removeEventListener("load",r),o.removeEventListener("error",i),
reject(e)})})})},o=function(e,t){return new Promise(function(n,r){e.createWriter(function(e){
var i,a,o=new Blob([t],{type:"image/svg+xml;charset=utf-8"}),s="write";e.addEventListener("writeend",i=function(t){
"write"===s?(s="truncate",e.truncate(o.size)):"truncate"===s&&(e.removeEventListener("writeend",i),
e.removeEventListener("error",a),n())}),e.addEventListener("error",a=function(t){
e.removeEventListener("writeend",i),e.removeEventListener("error",a),r(t)}),e.write(o);
},function(e){r(e)})})},s=function(e,n){return $traceurRuntime.asyncWrap(function(r){
for(;;)switch(r.state){case 0:r.returnValue=new Promise(function(r){var i,a;return $traceurRuntime.asyncWrap(function(o){
for(;;)switch(o.state){case 0:return void Promise.resolve(t(e)).then(o.createCallback(3),o.errback);
case 3:i=o.value,o.state=2;break;case 2:return void Promise.resolve(t(n)).then(o.createCallback(6),o.errback);
case 6:a=o.value,o.state=5;break;case 5:r(i===a),o.state=-2;break;default:return o.end();
}},this)}),r.state=2;break;case 2:r.state=-2;break;default:return r.end()}},this);
};return{get getWritableFileEntry(){return e},get getFileEntryDisplayPath(){return t;
},get getFileEntryExtension(){return n},get chooseFileEntry(){return r},get restoreFileEntry(){
return i},get readSVGFileEntry(){return a},get writeSVGFileEntry(){return o},get compareFileEntries(){
return s}}}),System.registerModule("utils/time",[],function(){var e=function(e){return new Promise(function(t,n){
setTimeout(function(){return t()},e)})},t=function(){return Date.now()};return{get sleep(){
return e},get getTimeStamp(){return t}}}),System.registerModule("utils/window",[],function(){
var e=function(e,t){return new Promise(function(n){chrome.app.window.create(e,t,function(e){
n(e)})})},t=function(){return new Promise(function(e){chrome.runtime.getBackgroundPage(function(t){
return e(t)})})};return{get createAppWindow(){return e},get getBackgroundWindow(){
return t}}});