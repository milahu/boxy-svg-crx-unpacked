!function(t){"use strict";function e(t){return{configurable:!0,enumerable:!1,value:t,writable:!0}
}function n(){return"__$"+Math.floor(1e9*Math.random())+"$"+ ++X+"$__"}function i(){var t=n();
return z[t]=!0,t}function r(t){return"object"==typeof t&&t instanceof a}function o(t){return r(t)?"symbol":typeof t
}function s(t){var e=new a(t);if(!(this instanceof s))return e;throw new TypeError("Symbol cannot be new'ed")
}function a(t){var e=n();k(this,H,{value:this}),k(this,Y,{value:e}),k(this,F,{value:t}),u(this),q[e]=this
}function l(t){var e=t[U];return e&&e.self===t?e:V(t)?($.hash.value=Z++,$.self.value=t,W.value=T(null,$),k(t,U,W),W.value):void 0
}function u(t){return l(t),O.apply(this,arguments)}function c(t){return l(t),B.apply(this,arguments)
}function h(t){return l(t),N.apply(this,arguments)}function d(t){return r(t)?t[Y]:t
}function p(t){for(var e=[],n=j(t),i=0;i<n.length;i++){var r=n[i];q[r]||z[r]||e.push(r)
}return e}function m(t,e){return M(t,d(e))}function f(t){for(var e=[],n=j(t),i=0;i<n.length;i++){var r=q[n[i]];
r&&e.push(r)}return e}function g(t){return I.call(this,d(t))}function v(e){return t.traceur&&t.traceur.options[e]
}function b(t,e,n){var i,o;return r(e)&&(i=e,e=e[Y]),t[e]=n,i&&(o=M(t,e))&&k(t,e,{enumerable:!1}),n
}function y(t,e,n){return r(e)&&(n.enumerable&&(n=T(n,{enumerable:{value:!1}})),e=e[Y]),k(t,e,n),t
}function x(t){k(t,"defineProperty",{value:y}),k(t,"getOwnPropertyNames",{value:p}),k(t,"getOwnPropertyDescriptor",{value:m}),k(t.prototype,"hasOwnProperty",{value:g}),k(t,"freeze",{value:u}),k(t,"preventExtensions",{value:c}),k(t,"seal",{value:h}),t.getOwnPropertySymbols=f
}function _(t){for(var e=1;e<arguments.length;e++)for(var n=j(arguments[e]),i=0;i<n.length;i++){var r=n[i];
z[r]||!function(e,n){k(t,n,{get:function(){return e[n]},enumerable:!0})}(arguments[e],n[i])
}return t}function S(t){return null!=t&&("object"==typeof t||"function"==typeof t)
}function w(t){if(null==t)throw L();return P(t)}function C(t){if(null==t)throw new TypeError("Value cannot be converted to an Object");
return t}function E(t){t.Symbol=s,t.Reflect=t.Reflect||{},t.Reflect.global=t.Reflect.global||t,x(t.Object)
}if(!t.$traceurRuntime){var P=Object,L=TypeError,T=P.create,A=P.defineProperties,k=P.defineProperty,O=P.freeze,M=P.getOwnPropertyDescriptor,j=P.getOwnPropertyNames,R=P.keys,I=P.prototype.hasOwnProperty,B=(P.prototype.toString,Object.preventExtensions),N=Object.seal,V=Object.isExtensible,D={"void":function(){},any:function(){},string:function(){},number:function(){},"boolean":function(){}},G=e,X=0,Y=n(),F=n(),H=n(),q=T(null),z=T(null);
k(s.prototype,"constructor",e(s)),k(s.prototype,"toString",G(function(){var t=this[H];
if(!v("symbols"))return t[Y];if(!t)throw TypeError("Conversion from symbol to string");
var e=t[F];return void 0===e&&(e=""),"Symbol("+e+")"})),k(s.prototype,"valueOf",G(function(){var t=this[H];
if(!t)throw TypeError("Conversion from symbol to string");return v("symbols")?t:t[Y]
})),k(a.prototype,"constructor",e(s)),k(a.prototype,"toString",{value:s.prototype.toString,enumerable:!1}),k(a.prototype,"valueOf",{value:s.prototype.valueOf,enumerable:!1});
var U=i(),W={value:void 0},$={hash:{value:void 0},self:{value:void 0}},Z=0;s.iterator=s(),u(a.prototype),E(t),t.$traceurRuntime={createPrivateName:i,exportStar:_,getOwnHashObject:l,privateNames:z,setProperty:b,setupGlobals:E,toObject:w,isObject:S,toProperty:d,type:D,"typeof":o,checkObjectCoercible:C,hasOwnProperty:function(t,e){return g.call(t,e)
},defineProperties:A,defineProperty:k,getOwnPropertyDescriptor:M,getOwnPropertyNames:j,keys:R}
}}("undefined"!=typeof global?global:this),function(){"use strict";function t(){for(var t,e=[],n=0,i=0;i<arguments.length;i++){var r=$traceurRuntime.checkObjectCoercible(arguments[i]);
if("function"!=typeof r[$traceurRuntime.toProperty(Symbol.iterator)])throw new TypeError("Cannot spread non-iterable object.");
for(var o=r[$traceurRuntime.toProperty(Symbol.iterator)]();!(t=o.next()).done;)e[n++]=t.value
}return e}$traceurRuntime.spread=t}(),function(){"use strict";function t(t,e){var n=f(t);
do{var i=p(n,e);if(i)return i;n=f(n)}while(n);return void 0}function e(t,e,i,r){return n(t,e,i).apply(t,r)
}function n(e,n,i){var r=t(n,i);return r?r.get?r.get.call(e):r.value:void 0}function i(e,n,i,r){var o=t(n,i);
if(o&&o.set)return o.set.call(e,r),r;throw u("super has no setter '"+i+"'.")}function r(t){for(var e,n={},i=m(t),r=0;r<i.length;r++){var e=i[r];
n[e]=p(t,e)}return n}function o(t,e,n,i){return d(e,"constructor",{value:t,configurable:!0,enumerable:!1,writable:!0}),arguments.length>3?("function"==typeof i&&(t.__proto__=i),t.prototype=c(s(i),r(e))):t.prototype=e,d(t,"prototype",{configurable:!1,writable:!1}),h(t,r(n))
}function s(t){if("function"==typeof t){var e=t.prototype;if(l(e)===e||null===e)return t.prototype;
throw new u("super prototype must be an Object or null")}if(null===t)return null;
throw new u("Super expression must either be null or a function, not "+typeof t+".")
}function a(t,n,i){null!==f(n)&&e(t,n,"constructor",i)}var l=Object,u=TypeError,c=l.create,h=$traceurRuntime.defineProperties,d=$traceurRuntime.defineProperty,p=$traceurRuntime.getOwnPropertyDescriptor,m=$traceurRuntime.getOwnPropertyNames,f=Object.getPrototypeOf;
$traceurRuntime.createClass=o,$traceurRuntime.defaultSuperCall=a,$traceurRuntime.superCall=e,$traceurRuntime.superGet=n,$traceurRuntime.superSet=i
}(),function(){"use strict";function t(t){return{configurable:!0,enumerable:!1,value:t,writable:!0}
}function e(t){return new Error("Traceur compiler bug: invalid state in state machine: "+t)
}function n(){this.state=0,this.GState=v,this.storedException=void 0,this.finallyFallThrough=void 0,this.sent_=void 0,this.returnValue=void 0,this.tryStack_=[]
}function i(t,e,n,i){switch(t.GState){case b:throw new Error('"'+n+'" on executing generator');
case x:if("next"==n)return{value:void 0,done:!0};throw i;case v:if("throw"===n)throw t.GState=x,i;
if(void 0!==i)throw g("Sent value to newborn generator");case y:t.GState=b,t.action=n,t.sent=i;
var r=e(t),o=r===t;return o&&(r=t.returnValue),t.GState=o?x:y,{value:r,done:o}}}function r(){}function o(){}function s(t,e,i){var r=c(t,i),o=new n,s=f(e.prototype);
return s[w]=o,s[C]=r,s}function a(t){return t.prototype=f(o.prototype),t.__proto__=o,t
}function l(){n.call(this),this.err=void 0;var t=this;t.result=new Promise(function(e,n){t.resolve=e,t.reject=n
})}function u(t,e){var n=c(t,e),i=new l;return i.createCallback=function(t){return function(e){i.state=t,i.value=e,n(i)
}},i.errback=function(t){h(i,t),n(i)},n(i),i.result}function c(t,e){return function(n){for(;;)try{return t.call(e,n)
}catch(i){h(n,i)}}}function h(t,e){t.storedException=e;var n=t.tryStack_[t.tryStack_.length-1];
return n?(t.state=void 0!==n.catch?n.catch:n.finally,void(void 0!==n.finallyFallThrough&&(t.finallyFallThrough=n.finallyFallThrough))):void t.handleException(e)
}var d=$traceurRuntime.createPrivateName,p=$traceurRuntime.defineProperties,m=$traceurRuntime.defineProperty,f=Object.create,g=TypeError,v=0,b=1,y=2,x=3,_=-2,S=-3;
n.prototype={pushTry:function(t,e){if(null!==e){for(var n=null,i=this.tryStack_.length-1;i>=0;i--)if(void 0!==this.tryStack_[i].catch){n=this.tryStack_[i].catch;
break}null===n&&(n=S),this.tryStack_.push({"finally":e,finallyFallThrough:n})}null!==t&&this.tryStack_.push({"catch":t})
},popTry:function(){this.tryStack_.pop()},get sent(){return this.maybeThrow(),this.sent_
},set sent(t){this.sent_=t},get sentIgnoreThrow(){return this.sent_},maybeThrow:function(){if("throw"===this.action)throw this.action="next",this.sent_
},end:function(){switch(this.state){case _:return this;case S:throw this.storedException;
default:throw e(this.state)}},handleException:function(t){throw this.GState=x,this.state=_,t
}};var w=d(),C=d();r.prototype=o,m(o,"constructor",t(r)),o.prototype={constructor:o,next:function(t){return i(this[w],this[C],"next",t)
},"throw":function(t){return i(this[w],this[C],"throw",t)}},p(o.prototype,{constructor:{enumerable:!1},next:{enumerable:!1},"throw":{enumerable:!1}}),Object.defineProperty(o.prototype,Symbol.iterator,t(function(){return this
})),l.prototype=f(n.prototype),l.prototype.end=function(){switch(this.state){case _:this.resolve(this.returnValue);
break;case S:this.reject(this.storedException);break;default:this.reject(e(this.state))
}},l.prototype.handleException=function(){this.state=S},$traceurRuntime.asyncWrap=u,$traceurRuntime.initGeneratorFunction=a,$traceurRuntime.createGeneratorInstance=s
}(),function(){function t(t,e,n,i,r,o,s){var a=[];return t&&a.push(t,":"),n&&(a.push("//"),e&&a.push(e,"@"),a.push(n),i&&a.push(":",i)),r&&a.push(r),o&&a.push("?",o),s&&a.push("#",s),a.join("")
}function e(t){return t.match(a)}function n(t){if("/"===t)return"/";for(var e="/"===t[0]?"/":"",n="/"===t.slice(-1)?"/":"",i=t.split("/"),r=[],o=0,s=0;s<i.length;s++){var a=i[s];
switch(a){case"":case".":break;case"..":r.length?r.pop():o++;break;default:r.push(a)
}}if(!e){for(;o-->0;)r.unshift("..");0===r.length&&r.push(".")}return e+r.join("/")+n
}function i(e){var i=e[l.PATH]||"";return i=n(i),e[l.PATH]=i,t(e[l.SCHEME],e[l.USER_INFO],e[l.DOMAIN],e[l.PORT],e[l.PATH],e[l.QUERY_DATA],e[l.FRAGMENT])
}function r(t){var n=e(t);return i(n)}function o(t,n){var r=e(n),o=e(t);if(r[l.SCHEME])return i(r);
r[l.SCHEME]=o[l.SCHEME];for(var s=l.SCHEME;s<=l.PORT;s++)r[s]||(r[s]=o[s]);if("/"==r[l.PATH][0])return i(r);
var a=o[l.PATH],u=a.lastIndexOf("/");return a=a.slice(0,u+1)+r[l.PATH],r[l.PATH]=a,i(r)
}function s(t){if(!t)return!1;if("/"===t[0])return!0;var n=e(t);return n[l.SCHEME]?!0:!1
}var a=new RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),l={SCHEME:1,USER_INFO:2,DOMAIN:3,PORT:4,PATH:5,QUERY_DATA:6,FRAGMENT:7};
$traceurRuntime.canonicalizeUrl=r,$traceurRuntime.isAbsolute=s,$traceurRuntime.removeDotSegments=n,$traceurRuntime.resolveUrl=o
}(),function(t){"use strict";function e(t){if(t){var e=g.normalize(t);return l[e]
}}function n(t){var e=arguments[1],n=Object.create(null);return Object.getOwnPropertyNames(t).forEach(function(i){var r,o;
if(e===f){var s=Object.getOwnPropertyDescriptor(t,i);s.get&&(r=s.get)}r||(o=t[i],r=function(){return o
}),Object.defineProperty(n,i,{get:r,enumerable:!0})}),Object.preventExtensions(n),n
}var i,r=$traceurRuntime,o=r.canonicalizeUrl,s=r.resolveUrl,a=r.isAbsolute,l=Object.create(null);
i=t.location&&t.location.href?s(t.location.href,"./"):"";var u=function(t,e){this.url=t,this.value_=e
};$traceurRuntime.createClass(u,{},{});var c=function(t,e){this.message=this.constructor.name+": "+this.stripCause(e)+" in "+t,this.stack=e instanceof h||!e.stack?"":this.stripStack(e.stack)
},h=c;$traceurRuntime.createClass(c,{stripError:function(t){return t.replace(/.*Error:/,this.constructor.name+":")
},stripCause:function(t){return t?t.message?this.stripError(t.message):t+"":""},loadedBy:function(t){this.stack+="\n loaded by "+t
},stripStack:function(t){var e=[];return t.split("\n").some(function(t){return/UncoatedModuleInstantiator/.test(t)?!0:void e.push(t)
}),e[0]=this.stripError(e[0]),e.join("\n")}},{},Error);var d=function(t,e){$traceurRuntime.superCall(this,p.prototype,"constructor",[t,null]),this.func=e
},p=d;$traceurRuntime.createClass(d,{getUncoatedModule:function(){if(this.value_)return this.value_;
try{return this.value_=this.func.call(t)}catch(e){if(e instanceof c)throw e.loadedBy(this.url),e;
throw new c(this.url,e)}}},{},u);var m=Object.create(null),f={},g={normalize:function(t,e){if("string"!=typeof t)throw new TypeError("module name must be a string, not "+typeof t);
if(a(t))return o(t);if(/[^\.]\/\.\.\//.test(t))throw new Error("module name embeds /../: "+t);
return"."===t[0]&&e?s(e,t):o(t)},get:function(t){var i=e(t);if(!i)return void 0;var r=m[i.url];
return r?r:(r=n(i.getUncoatedModule(),f),m[i.url]=r)},set:function(t,e){t=String(t),l[t]=new d(t,function(){return e
}),m[t]=e},get baseURL(){return i},set baseURL(t){i=String(t)},registerModule:function(t,e){var n=g.normalize(t);
if(l[n])throw new Error("duplicate module named "+n);l[n]=new d(n,e)},bundleStore:Object.create(null),register:function(t,e,n){e&&(e.length||n.length)?this.bundleStore[t]={deps:e,execute:function(){var t=arguments,i={};
e.forEach(function(e,n){return i[e]=t[n]});var r=n.call(this,i);return r.execute.call(this),r.exports
}}:this.registerModule(t,n)},getAnonymousModule:function(e){return new n(e.call(t),f)
},getForTesting:function(t){var e=this;return this.testingPrefix_||Object.keys(m).some(function(t){var n=/(traceur@[^\/]*\/)/.exec(t);
return n?(e.testingPrefix_=n[1],!0):void 0}),this.get(this.testingPrefix_+t)}};g.set("@traceur/src/runtime/ModuleStore",new n({ModuleStore:g}));
var v=$traceurRuntime.setupGlobals;$traceurRuntime.setupGlobals=function(t){v(t)},$traceurRuntime.ModuleStore=g,t.System={register:g.register.bind(g),get:g.get,set:g.set,normalize:g.normalize},$traceurRuntime.getModuleImpl=function(t){var n=e(t);
return n&&n.getUncoatedModule()}}("undefined"!=typeof global?global:this),System.register("traceur-runtime@0.0.65/src/runtime/polyfills/utils",[],function(){"use strict";
function t(t){return t>>>0}function e(t){return t&&("object"==typeof t||"function"==typeof t)
}function n(t){return"function"==typeof t}function i(t){return"number"==typeof t}function r(t){return t=+t,x(t)?0:0!==t&&y(t)?t>0?b(t):v(t):t
}function o(t){var e=r(t);return 0>e?0:S(e,C)}function s(t){return e(t)?t[Symbol.iterator]:void 0
}function a(t){return n(t)}function l(t,e){return{value:t,done:e}}function u(t,e,n){e in t||Object.defineProperty(t,e,n)
}function c(t,e,n){u(t,e,{value:n,configurable:!0,enumerable:!1,writable:!0})}function h(t,e,n){u(t,e,{value:n,configurable:!1,enumerable:!1,writable:!1})
}function d(t,e){for(var n=0;n<e.length;n+=2){var i=e[n],r=e[n+1];c(t,i,r)}}function p(t,e){for(var n=0;n<e.length;n+=2){var i=e[n],r=e[n+1];
h(t,i,r)}}function m(t,e,n){n&&n.iterator&&!t[n.iterator]&&(t["@@iterator"]&&(e=t["@@iterator"]),Object.defineProperty(t,n.iterator,{value:e,configurable:!0,enumerable:!1,writable:!0}))
}function f(t){E.push(t)}function g(t){E.forEach(function(e){return e(t)})}var v=Math.ceil,b=Math.floor,y=isFinite,x=isNaN,_=Math.pow,S=Math.min,w=$traceurRuntime.toObject,C=_(2,53)-1,E=[];
return{get toObject(){return w},get toUint32(){return t},get isObject(){return e},get isCallable(){return n
},get isNumber(){return i},get toInteger(){return r},get toLength(){return o},get checkIterable(){return s
},get isConstructor(){return a},get createIteratorResultObject(){return l},get maybeDefine(){return u
},get maybeDefineMethod(){return c},get maybeDefineConst(){return h},get maybeAddFunctions(){return d
},get maybeAddConsts(){return p},get maybeAddIterator(){return m},get registerPolyfill(){return f
},get polyfillAll(){return g}}}),System.register("traceur-runtime@0.0.65/src/runtime/polyfills/Map",[],function(){"use strict";
function t(t,e){if(r(e)){var n=a(e);return n&&t.objectIndex_[n.hash]}return"string"==typeof e?t.stringIndex_[e]:t.primitiveIndex_[e]
}function e(t){t.entries_=[],t.objectIndex_=Object.create(null),t.stringIndex_=Object.create(null),t.primitiveIndex_=Object.create(null),t.deletedCount_=0
}function n(t){var e=t,n=e.Object,i=e.Symbol;t.Map||(t.Map=c);var r=t.Map.prototype;
r.entries&&(o(r,r.entries,i),o(n.getPrototypeOf((new t.Map).entries()),function(){return this
},i))}var i=System.get("traceur-runtime@0.0.65/src/runtime/polyfills/utils"),r=i.isObject,o=i.maybeAddIterator,s=i.registerPolyfill,a=$traceurRuntime.getOwnHashObject,l=Object.prototype.hasOwnProperty,u={},c=function(){var t=arguments[0];
if(!r(this))throw new TypeError("Map called on incompatible type");if(l.call(this,"entries_"))throw new TypeError("Map can not be reentrantly initialised");
if(e(this),null!==t&&void 0!==t)for(var n,i=t[Symbol.iterator]();!(n=i.next()).done;){var o=n.value,s=o[0],a=o[1];
this.set(s,a)}};return $traceurRuntime.createClass(c,{get size(){return this.entries_.length/2-this.deletedCount_
},get:function(e){var n=t(this,e);return void 0!==n?this.entries_[n+1]:void 0},set:function(e,n){var i=r(e),o="string"==typeof e,s=t(this,e);
if(void 0!==s)this.entries_[s+1]=n;else if(s=this.entries_.length,this.entries_[s]=e,this.entries_[s+1]=n,i){var l=a(e),u=l.hash;
this.objectIndex_[u]=s}else o?this.stringIndex_[e]=s:this.primitiveIndex_[e]=s;return this
},has:function(e){return void 0!==t(this,e)},"delete":function(t){var e,n,i=r(t),o="string"==typeof t;
if(i){var s=a(t);s&&(e=this.objectIndex_[n=s.hash],delete this.objectIndex_[n])}else o?(e=this.stringIndex_[t],delete this.stringIndex_[t]):(e=this.primitiveIndex_[t],delete this.primitiveIndex_[t]);
return void 0!==e?(this.entries_[e]=u,this.entries_[e+1]=void 0,this.deletedCount_++,!0):!1
},clear:function(){e(this)},forEach:function(t){for(var e=arguments[1],n=0;n<this.entries_.length;n+=2){var i=this.entries_[n],r=this.entries_[n+1];
i!==u&&t.call(e,r,i,this)}},entries:$traceurRuntime.initGeneratorFunction(function h(){var t,e,n;
return $traceurRuntime.createGeneratorInstance(function(i){for(;;)switch(i.state){case 0:t=0,i.state=12;
break;case 12:i.state=t<this.entries_.length?8:-2;break;case 4:t+=2,i.state=12;break;
case 8:e=this.entries_[t],n=this.entries_[t+1],i.state=9;break;case 9:i.state=e===u?4:6;
break;case 6:return i.state=2,[e,n];case 2:i.maybeThrow(),i.state=4;break;default:return i.end()
}},h,this)}),keys:$traceurRuntime.initGeneratorFunction(function d(){var t,e,n;return $traceurRuntime.createGeneratorInstance(function(i){for(;;)switch(i.state){case 0:t=0,i.state=12;
break;case 12:i.state=t<this.entries_.length?8:-2;break;case 4:t+=2,i.state=12;break;
case 8:e=this.entries_[t],n=this.entries_[t+1],i.state=9;break;case 9:i.state=e===u?4:6;
break;case 6:return i.state=2,e;case 2:i.maybeThrow(),i.state=4;break;default:return i.end()
}},d,this)}),values:$traceurRuntime.initGeneratorFunction(function p(){var t,e,n;
return $traceurRuntime.createGeneratorInstance(function(i){for(;;)switch(i.state){case 0:t=0,i.state=12;
break;case 12:i.state=t<this.entries_.length?8:-2;break;case 4:t+=2,i.state=12;break;
case 8:e=this.entries_[t],n=this.entries_[t+1],i.state=9;break;case 9:i.state=e===u?4:6;
break;case 6:return i.state=2,n;case 2:i.maybeThrow(),i.state=4;break;default:return i.end()
}},p,this)})},{}),Object.defineProperty(c.prototype,Symbol.iterator,{configurable:!0,writable:!0,value:c.prototype.entries}),s(n),{get Map(){return c
},get polyfillMap(){return n}}}),System.get("traceur-runtime@0.0.65/src/runtime/polyfills/Map"),System.register("traceur-runtime@0.0.65/src/runtime/polyfills/Set",[],function(){"use strict";
function t(t){t.map_=new s}function e(t){var e=t,n=e.Object,i=e.Symbol;t.Set||(t.Set=l);
var o=t.Set.prototype;o.values&&(r(o,o.values,i),r(n.getPrototypeOf((new t.Set).values()),function(){return this
},i))}var n=System.get("traceur-runtime@0.0.65/src/runtime/polyfills/utils"),i=n.isObject,r=n.maybeAddIterator,o=n.registerPolyfill,s=System.get("traceur-runtime@0.0.65/src/runtime/polyfills/Map").Map,a=($traceurRuntime.getOwnHashObject,Object.prototype.hasOwnProperty),l=function(){var e=arguments[0];
if(!i(this))throw new TypeError("Set called on incompatible type");if(a.call(this,"map_"))throw new TypeError("Set can not be reentrantly initialised");
if(t(this),null!==e&&void 0!==e)for(var n,r=e[Symbol.iterator]();!(n=r.next()).done;){var o=n.value;
this.add(o)}};return $traceurRuntime.createClass(l,{get size(){return this.map_.size
},has:function(t){return this.map_.has(t)},add:function(t){return this.map_.set(t,t),this
},"delete":function(t){return this.map_.delete(t)},clear:function(){return this.map_.clear()
},forEach:function(t){var e=arguments[1],n=this;return this.map_.forEach(function(i,r){t.call(e,r,r,n)
})},values:$traceurRuntime.initGeneratorFunction(function u(){var t,e;return $traceurRuntime.createGeneratorInstance(function(n){for(;;)switch(n.state){case 0:t=this.map_.keys()[Symbol.iterator](),n.sent=void 0,n.action="next",n.state=12;
break;case 12:e=t[n.action](n.sentIgnoreThrow),n.state=9;break;case 9:n.state=e.done?3:2;
break;case 3:n.sent=e.value,n.state=-2;break;case 2:return n.state=12,e.value;default:return n.end()
}},u,this)}),entries:$traceurRuntime.initGeneratorFunction(function c(){var t,e;return $traceurRuntime.createGeneratorInstance(function(n){for(;;)switch(n.state){case 0:t=this.map_.entries()[Symbol.iterator](),n.sent=void 0,n.action="next",n.state=12;
break;case 12:e=t[n.action](n.sentIgnoreThrow),n.state=9;break;case 9:n.state=e.done?3:2;
break;case 3:n.sent=e.value,n.state=-2;break;case 2:return n.state=12,e.value;default:return n.end()
}},c,this)})},{}),Object.defineProperty(l.prototype,Symbol.iterator,{configurable:!0,writable:!0,value:l.prototype.values}),Object.defineProperty(l.prototype,"keys",{configurable:!0,writable:!0,value:l.prototype.values}),o(e),{get Set(){return l
},get polyfillSet(){return e}}}),System.get("traceur-runtime@0.0.65/src/runtime/polyfills/Set"),System.register("traceur-runtime@0.0.65/node_modules/rsvp/lib/rsvp/asap",[],function(){"use strict";
function t(t,e){d[a]=t,d[a+1]=e,a+=2,2===a&&s()}function e(){return function(){process.nextTick(o)
}}function n(){var t=0,e=new c(o),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2
}}function i(){var t=new MessageChannel;return t.port1.onmessage=o,function(){t.port2.postMessage(0)
}}function r(){return function(){setTimeout(o,1)}}function o(){for(var t=0;a>t;t+=2){var e=d[t],n=d[t+1];
e(n),d[t]=void 0,d[t+1]=void 0}a=0}var s,a=0,l=t,u="undefined"!=typeof window?window:{},c=u.MutationObserver||u.WebKitMutationObserver,h="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,d=new Array(1e3);
return s="undefined"!=typeof process&&"[object process]"==={}.toString.call(process)?e():c?n():h?i():r(),{get default(){return l
}}}),System.register("traceur-runtime@0.0.65/src/runtime/polyfills/Promise",[],function(){"use strict";
function t(t){return t&&"object"==typeof t&&void 0!==t.status_}function e(t){return t
}function n(t){throw t}function i(t){var i=void 0!==arguments[1]?arguments[1]:e,o=void 0!==arguments[2]?arguments[2]:n,s=r(t.constructor);
switch(t.status_){case void 0:throw TypeError;case 0:t.onResolve_.push(i,s),t.onReject_.push(o,s);
break;case 1:c(t.value_,[i,s]);break;case-1:c(t.value_,[o,s])}return s.promise}function r(t){if(this===y){var e=s(new y(v));
return{promise:e,resolve:function(t){a(e,t)},reject:function(t){l(e,t)}}}var n={};
return n.promise=new t(function(t,e){n.resolve=t,n.reject=e}),n}function o(t,e,n,i,r){return t.status_=e,t.value_=n,t.onResolve_=i,t.onReject_=r,t
}function s(t){return o(t,0,void 0,[],[])}function a(t,e){u(t,1,e,t.onResolve_)}function l(t,e){u(t,-1,e,t.onReject_)
}function u(t,e,n,i){0===t.status_&&(c(n,i),o(t,e,n))}function c(t,e){f(function(){for(var n=0;n<e.length;n+=2)h(t,e[n],e[n+1])
})}function h(e,n,r){try{var o=n(e);if(o===r.promise)throw new TypeError;t(o)?i(o,r.resolve,r.reject):r.resolve(o)
}catch(s){try{r.reject(s)}catch(s){}}}function d(t){return t&&("object"==typeof t||"function"==typeof t)
}function p(e,n){if(!t(n)&&d(n)){var i;try{i=n.then}catch(o){var s=x.call(e,o);return n[_]=s,s
}if("function"==typeof i){var a=n[_];if(a)return a;var l=r(e);n[_]=l.promise;try{i.call(n,l.resolve,l.reject)
}catch(o){l.reject(o)}return l.promise}}return n}function m(t){t.Promise||(t.Promise=b)
}var f=System.get("traceur-runtime@0.0.65/node_modules/rsvp/lib/rsvp/asap").default,g=System.get("traceur-runtime@0.0.65/src/runtime/polyfills/utils").registerPolyfill,v={},b=function(t){if(t!==v){if("function"!=typeof t)throw new TypeError;
var e=s(this);try{t(function(t){a(e,t)},function(t){l(e,t)})}catch(n){l(e,n)}}};$traceurRuntime.createClass(b,{"catch":function(t){return this.then(void 0,t)
},then:function(r,o){"function"!=typeof r&&(r=e),"function"!=typeof o&&(o=n);var s=this,a=this.constructor;
return i(this,function(e){return e=p(a,e),e===s?o(new TypeError):t(e)?e.then(r,o):r(e)
},o)}},{resolve:function(e){return this===y?t(e)?e:o(new y(v),1,e):new this(function(t){t(e)
})},reject:function(t){return this===y?o(new y(v),-1,t):new this(function(e,n){n(t)
})},all:function(t){var e=r(this),n=[];try{var i=t.length;if(0===i)e.resolve(n);else for(var o=0;o<t.length;o++)this.resolve(t[o]).then(function(t,r){n[t]=r,0===--i&&e.resolve(n)
}.bind(void 0,o),function(t){e.reject(t)})}catch(s){e.reject(s)}return e.promise},race:function(t){var e=r(this);
try{for(var n=0;n<t.length;n++)this.resolve(t[n]).then(function(t){e.resolve(t)},function(t){e.reject(t)
})}catch(i){e.reject(i)}return e.promise}});var y=b,x=y.reject,_="@@thenable";return g(m),{get Promise(){return b
},get polyfillPromise(){return m}}}),System.get("traceur-runtime@0.0.65/src/runtime/polyfills/Promise"),System.register("traceur-runtime@0.0.65/src/runtime/polyfills/StringIterator",[],function(){"use strict";
function t(t){var e=String(t),n=Object.create(c.prototype);return n[a(l)]=e,n[a(u)]=0,n
}var e,n=System.get("traceur-runtime@0.0.65/src/runtime/polyfills/utils"),i=n.createIteratorResultObject,r=n.isObject,o=$traceurRuntime,s=o.hasOwnProperty,a=o.toProperty,l=Symbol("iteratedString"),u=Symbol("stringIteratorNextIndex"),c=function(){};
return $traceurRuntime.createClass(c,(e={},Object.defineProperty(e,"next",{value:function(){var t=this;
if(!r(t)||!s(t,l))throw new TypeError("this must be a StringIterator object");var e=t[a(l)];
if(void 0===e)return i(void 0,!0);var n=t[a(u)],o=e.length;if(n>=o)return t[a(l)]=void 0,i(void 0,!0);
var c,h=e.charCodeAt(n);if(55296>h||h>56319||n+1===o)c=String.fromCharCode(h);else{var d=e.charCodeAt(n+1);
c=56320>d||d>57343?String.fromCharCode(h):String.fromCharCode(h)+String.fromCharCode(d)
}return t[a(u)]=n+c.length,i(c,!1)},configurable:!0,enumerable:!0,writable:!0}),Object.defineProperty(e,Symbol.iterator,{value:function(){return this
},configurable:!0,enumerable:!0,writable:!0}),e),{}),{get createStringIterator(){return t
}}}),System.register("traceur-runtime@0.0.65/src/runtime/polyfills/String",[],function(){"use strict";
function t(t){var e=String(this);if(null==this||"[object RegExp]"==m.call(t))throw TypeError();
var n=e.length,i=String(t),r=(i.length,arguments.length>1?arguments[1]:void 0),o=r?Number(r):0;
isNaN(o)&&(o=0);var s=Math.min(Math.max(o,0),n);return f.call(e,i,o)==s}function e(t){var e=String(this);
if(null==this||"[object RegExp]"==m.call(t))throw TypeError();var n=e.length,i=String(t),r=i.length,o=n;
if(arguments.length>1){var s=arguments[1];void 0!==s&&(o=s?Number(s):0,isNaN(o)&&(o=0))
}var a=Math.min(Math.max(o,0),n),l=a-r;return 0>l?!1:g.call(e,i,l)==l}function n(t){if(null==this)throw TypeError();
var e=String(this),n=e.length,i=String(t),r=(i.length,arguments.length>1?arguments[1]:void 0),o=r?Number(r):0;
isNaN(o)&&(o=0);Math.min(Math.max(o,0),n);return-1!=f.call(e,i,o)}function i(t){if(null==this)throw TypeError();
var e=String(this),n=t?Number(t):0;if(isNaN(n)&&(n=0),0>n||1/0==n)throw RangeError();
if(0==n)return"";for(var i="";n--;)i+=e;return i}function r(t){if(null==this)throw TypeError();
var e=String(this),n=e.length,i=t?Number(t):0;if(isNaN(i)&&(i=0),0>i||i>=n)return void 0;
var r,o=e.charCodeAt(i);return o>=55296&&56319>=o&&n>i+1&&(r=e.charCodeAt(i+1),r>=56320&&57343>=r)?1024*(o-55296)+r-56320+65536:o
}function o(t){var e=t.raw,n=e.length>>>0;if(0===n)return"";for(var i="",r=0;;){if(i+=e[r],r+1===n)return i;
i+=arguments[++r]}}function s(){var t,e,n=[],i=Math.floor,r=-1,o=arguments.length;
if(!o)return"";for(;++r<o;){var s=Number(arguments[r]);if(!isFinite(s)||0>s||s>1114111||i(s)!=s)throw RangeError("Invalid code point: "+s);
65535>=s?n.push(s):(s-=65536,t=(s>>10)+55296,e=s%1024+56320,n.push(t,e))}return String.fromCharCode.apply(null,n)
}function a(){var t=$traceurRuntime.checkObjectCoercible(this),e=String(t);return u(e)
}function l(l){var u=l.String;h(u.prototype,["codePointAt",r,"contains",n,"endsWith",e,"startsWith",t,"repeat",i]),h(u,["fromCodePoint",s,"raw",o]),d(u.prototype,a,Symbol)
}var u=System.get("traceur-runtime@0.0.65/src/runtime/polyfills/StringIterator").createStringIterator,c=System.get("traceur-runtime@0.0.65/src/runtime/polyfills/utils"),h=c.maybeAddFunctions,d=c.maybeAddIterator,p=c.registerPolyfill,m=Object.prototype.toString,f=String.prototype.indexOf,g=String.prototype.lastIndexOf;
return p(l),{get startsWith(){return t},get endsWith(){return e},get contains(){return n
},get repeat(){return i},get codePointAt(){return r},get raw(){return o},get fromCodePoint(){return s
},get stringPrototypeIterator(){return a},get polyfillString(){return l}}}),System.get("traceur-runtime@0.0.65/src/runtime/polyfills/String"),System.register("traceur-runtime@0.0.65/src/runtime/polyfills/ArrayIterator",[],function(){"use strict";
function t(t,e){var n=s(t),i=new d;return i.iteratorObject_=n,i.arrayIteratorNextIndex_=0,i.arrayIterationKind_=e,i
}function e(){return t(this,h)}function n(){return t(this,u)}function i(){return t(this,c)
}var r,o=System.get("traceur-runtime@0.0.65/src/runtime/polyfills/utils"),s=o.toObject,a=o.toUint32,l=o.createIteratorResultObject,u=1,c=2,h=3,d=function(){};
return $traceurRuntime.createClass(d,(r={},Object.defineProperty(r,"next",{value:function(){var t=s(this),e=t.iteratorObject_;
if(!e)throw new TypeError("Object is not an ArrayIterator");var n=t.arrayIteratorNextIndex_,i=t.arrayIterationKind_,r=a(e.length);
return n>=r?(t.arrayIteratorNextIndex_=1/0,l(void 0,!0)):(t.arrayIteratorNextIndex_=n+1,i==c?l(e[n],!1):i==h?l([n,e[n]],!1):l(n,!1))
},configurable:!0,enumerable:!0,writable:!0}),Object.defineProperty(r,Symbol.iterator,{value:function(){return this
},configurable:!0,enumerable:!0,writable:!0}),r),{}),{get entries(){return e},get keys(){return n
},get values(){return i}}}),System.register("traceur-runtime@0.0.65/src/runtime/polyfills/Array",[],function(){"use strict";
function t(t){var e,n,i=arguments[1],r=arguments[2],o=this,s=x(t),a=void 0!==i,l=0;
if(a&&!p(i))throw TypeError();if(d(s)){e=m(o)?new o:[];for(var u,c=s[Symbol.iterator]();!(u=c.next()).done;){var h=u.value;
e[l]=a?i.call(r,h,l):h,l++}return e.length=l,e}for(n=y(s.length),e=m(o)?new o(n):new Array(n);n>l;l++)e[l]=a?"undefined"==typeof r?i(s[l],l):i.call(r,s[l],l):s[l];
return e.length=n,e}function e(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];
for(var n=this,i=t.length,r=m(n)?new n(i):new Array(i),o=0;i>o;o++)r[o]=t[o];return r.length=i,r
}function n(t){var e=void 0!==arguments[1]?arguments[1]:0,n=arguments[2],i=x(this),r=y(i.length),o=b(e),s=void 0!==n?b(n):r;
for(o=0>o?Math.max(r+o,0):Math.min(o,r),s=0>s?Math.max(r+s,0):Math.min(s,r);s>o;)i[o]=t,o++;
return i}function i(t){var e=arguments[1];return o(this,t,e)}function r(t){var e=arguments[1];
return o(this,t,e,!0)}function o(t,e){var n=arguments[2],i=void 0!==arguments[3]?arguments[3]:!1,r=x(t),o=y(r.length);
if(!p(e))throw TypeError();for(var s=0;o>s;s++)if(s in r){var a=r[s];if(e.call(n,a,s,r))return i?s:a
}return i?-1:void 0}function s(o){var s=o,a=s.Array,h=s.Object,d=s.Symbol;f(a.prototype,["entries",l,"keys",u,"values",c,"fill",n,"find",i,"findIndex",r]),f(a,["from",t,"of",e]),g(a.prototype,c,d),g(h.getPrototypeOf([].values()),function(){return this
},d)}var a=System.get("traceur-runtime@0.0.65/src/runtime/polyfills/ArrayIterator"),l=a.entries,u=a.keys,c=a.values,h=System.get("traceur-runtime@0.0.65/src/runtime/polyfills/utils"),d=h.checkIterable,p=h.isCallable,m=h.isConstructor,f=h.maybeAddFunctions,g=h.maybeAddIterator,v=h.registerPolyfill,b=h.toInteger,y=h.toLength,x=h.toObject;
return v(s),{get from(){return t},get of(){return e},get fill(){return n},get find(){return i
},get findIndex(){return r},get polyfillArray(){return s}}}),System.get("traceur-runtime@0.0.65/src/runtime/polyfills/Array"),System.register("traceur-runtime@0.0.65/src/runtime/polyfills/Object",[],function(){"use strict";
function t(t,e){return t===e?0!==t||1/t===1/e:t!==t&&e!==e}function e(t){for(var e=1;e<arguments.length;e++){var n,i=arguments[e],r=h(i),o=r.length;
for(n=0;o>n;n++){var s=r[n];d[s]||(t[s]=i[s])}}return t}function n(t,e){var n,i,r=c(e),o=r.length;
for(n=0;o>n;n++){var s=r[n];d[s]||(i=u(e,r[n]),l(t,r[n],i))}return t}function i(i){var r=i.Object;
o(r,["assign",e,"is",t,"mixin",n])}var r=System.get("traceur-runtime@0.0.65/src/runtime/polyfills/utils"),o=r.maybeAddFunctions,s=r.registerPolyfill,a=$traceurRuntime,l=a.defineProperty,u=a.getOwnPropertyDescriptor,c=a.getOwnPropertyNames,h=a.keys,d=a.privateNames;
return s(i),{get is(){return t},get assign(){return e},get mixin(){return n},get polyfillObject(){return i
}}}),System.get("traceur-runtime@0.0.65/src/runtime/polyfills/Object"),System.register("traceur-runtime@0.0.65/src/runtime/polyfills/Number",[],function(){"use strict";
function t(t){return s(t)&&d(t)}function e(e){return t(e)&&c(e)===e}function n(t){return s(t)&&p(t)
}function i(e){if(t(e)){var n=c(e);if(n===e)return h(n)<=m}return!1}function r(r){var o=r.Number;
a(o,["MAX_SAFE_INTEGER",m,"MIN_SAFE_INTEGER",f,"EPSILON",g]),l(o,["isFinite",t,"isInteger",e,"isNaN",n,"isSafeInteger",i])
}var o=System.get("traceur-runtime@0.0.65/src/runtime/polyfills/utils"),s=o.isNumber,a=o.maybeAddConsts,l=o.maybeAddFunctions,u=o.registerPolyfill,c=o.toInteger,h=Math.abs,d=isFinite,p=isNaN,m=Math.pow(2,53)-1,f=-Math.pow(2,53)+1,g=Math.pow(2,-52);
return u(r),{get MAX_SAFE_INTEGER(){return m},get MIN_SAFE_INTEGER(){return f},get EPSILON(){return g
},get isFinite(){return t},get isInteger(){return e},get isNaN(){return n},get isSafeInteger(){return i
},get polyfillNumber(){return r}}}),System.get("traceur-runtime@0.0.65/src/runtime/polyfills/Number"),System.register("traceur-runtime@0.0.65/src/runtime/polyfills/polyfills",[],function(){"use strict";
var t=System.get("traceur-runtime@0.0.65/src/runtime/polyfills/utils").polyfillAll;
t(this);var e=$traceurRuntime.setupGlobals;return $traceurRuntime.setupGlobals=function(n){e(n),t(n)
},{}}),System.get("traceur-runtime@0.0.65/src/runtime/polyfills/polyfills"),Object.defineProperty(Array.prototype,"includes",{enumerable:!1,writable:!0,value:function(t){return-1!==this.indexOf(t)
}}),Object.defineProperty(Array.prototype,"remove",{enumerable:!1,writable:!0,value:function(t){var e=this.indexOf(t);
return-1!==e&&this.splice(e,1),this}}),Object.defineProperty(Array.prototype,"removeAll",{enumerable:!1,writable:!0,value:function(t){for(;this.includes(t);)this.remove(t);
return this}}),Object.defineProperty(String.prototype,"includes",{enumerable:!1,writable:!0,value:function(){return-1!==String.prototype.indexOf.apply(this,arguments)
}}),Object.defineProperty(String.prototype,"replaceAll",{enumerable:!1,writable:!0,value:function(t,e){return this.split(t).join(e)
}}),Object.defineProperty(String.prototype,"toCamelCase",{enumerable:!1,writable:!0,value:function(){return this.replace(/(\-[a-z])/g,function(t){return t.toUpperCase().replace("-","")
})}}),Node.prototype.append||(Node.prototype.append=function(t){this.appendChild(t)
}),Node.prototype.prepend||(Node.prototype.prepend=function(t){this.insertBefore(t,this.firstElementChild)
}),Node.prototype.before||(Node.prototype.before=function(t){this.parentElement.insertBefore(t,this)
}),Node.prototype.after||(Node.prototype.after=function(t){this.parentElement.insertBefore(t,this.nextElementSibling)
}),Node.prototype.replace||(Node.prototype.replace=function(t){this.parentNode.replaceChild(t,this)
}),Object.defineProperty(Element.prototype,"disabled",{enumerable:!1,configurable:!1,get:function(){return this.hasAttribute("disabled")
},set:function(t){t===!0?this.setAttribute("disabled",""):this.removeAttribute("disabled")
}}),Object.defineProperty(SVGRect.prototype,"top",{enumerable:!1,configurable:!1,get:function(){return Math.min(this.y,this.y+this.height)
},set:function(){throw new Error("top property is read-only")}}),Object.defineProperty(SVGRect.prototype,"right",{enumerable:!1,configurable:!1,get:function(){return Math.max(this.x,this.x+this.width)
},set:function(){throw new Error("right property is read-only")}}),Object.defineProperty(SVGRect.prototype,"bottom",{enumerable:!1,configurable:!1,get:function(){return Math.max(this.y,this.y+this.height)
},set:function(){throw new Error("bottom property is read-only")}}),Object.defineProperty(SVGRect.prototype,"left",{enumerable:!1,configurable:!1,get:function(){return Math.min(this.x,this.x+this.width)
},set:function(){throw new Error("left property is read-only")}}),Object.defineProperty(ClientRect.prototype,"x",{enumerable:!1,configurable:!1,get:function(){return this.left
},set:function(t){this.left=t}}),Object.defineProperty(ClientRect.prototype,"y",{enumerable:!1,configurable:!1,get:function(){return this.top
},set:function(t){this.top=t}}),SVGPoint.prototype.toString=function(){return"point("+this.x+", "+this.y+")"
},SVGMatrix.prototype.determinant=function(){var t=this.a*this.d-this.b*this.c;return t
},function(){var t=document.createElementNS("http://www.w3.org/2000/svg","svg");SVGMatrix.prototype.transformPoint=function(e){var e=t.createSVGPoint();
return e.x=this.a*e.x+this.c*e.y+this.e,e.y=this.b*e.x+this.d*e.y+this.f,e}}(),SVGMatrix.prototype.isIdentity=function(){return 1===this.a&&0===this.b&&0===this.c&&1===this.d&&0===this.e&&0===this.f?!0:!1
},SVGMatrix.prototype.toString=function(){return"matrix("+this.a+", "+this.b+", "+this.c+", "+this.d+", "+this.e+", "+this.f+")"
},SVGMatrix.prototype.multiplyBy=function(t){var e=this.a*t.a+this.c*t.b,n=this.b*t.a+this.d*t.b,i=this.a*t.c+this.c*t.d,r=this.b*t.c+this.d*t.d,o=this.a*t.e+this.c*t.f+this.e,s=this.b*t.e+this.d*t.f+this.f;
return this.a=e,this.b=n,this.c=i,this.d=r,this.e=o,this.f=s,this},SVGMatrix.prototype.preMultiplyBy=function(t){var e=t.a*this.a+t.c*this.b,n=t.b*this.a+t.d*this.b,i=t.a*this.c+t.c*this.d,r=t.b*this.c+t.d*this.d,o=t.a*this.e+t.c*this.f+t.e,s=t.b*this.e+t.d*this.f+t.f;
return this.a=e,this.b=n,this.c=i,this.d=r,this.e=o,this.f=s,this},SVGMatrix.prototype.translateBy=function(t,e){var n={a:1,b:0,c:0,d:1,e:t,f:e};
return this.multiplyBy(n),this},SVGMatrix.prototype._translateOriginBy=function(t,e){return this.e=this.e+t*this.a+e*this.c,this.f=this.f+t*this.b+e*this.d,this
},SVGMatrix.prototype.scaleBy=function(t,e,n){void 0===e&&(e=0),void 0===n&&(n=0);
var i={a:t,b:0,c:0,d:t,e:0,f:0};return this._translateOriginBy(e,n),this.multiplyBy(i),this._translateOriginBy(-e,-n),this
},SVGMatrix.prototype.scaleNonUniformBy=function(t,e,n,i){void 0===e&&(e=1),void 0===n&&(n=0),void 0===i&&(i=0);
var r={a:t,b:0,c:0,d:e,e:0,f:0};return this._translateOriginBy(n,i),this.multiplyBy(r),this._translateOriginBy(-n,-i),this
},SVGMatrix.prototype.rotateBy=function(t,e,n){void 0===e&&(e=0),void 0===n&&(n=0);
var i=Math.PI*t/180,r=Math.cos(i),o=Math.sin(i),s={a:r,b:o,c:-o,d:r,e:0,f:0};return this._translateOriginBy(e,n),this.multiplyBy(s),this._translateOriginBy(-e,-n),this
},SVGMatrix.prototype.skewXBy=function(t){var e={a:1,b:0,c:tan(t),d:1,e:0,f:0};return this.multiplyBy(e),this
},SVGMatrix.prototype.skewYBy=function(t){var e={a:1,b:tan(t),c:0,d:1,e:0,f:0};return this.multiplyBy(e),this
},SVGMatrix.prototype.invert=function(){var t=this.determinant();if(0!==t){var e=this.d/t,n=-this.b/t,i=-this.c/t,r=this.a/t,o=(this.c*this.f-this.d*this.e)/t,s=(this.b*this.e-this.a*this.f)/t;
this.a=e,this.b=n,this.c=i,this.d=r,this.e=o,this.f=s}return this},function(){var t=[String,NamedNodeMap,NodeList,HTMLCollection,DOMTokenList,CSSStyleDeclaration,FileList,DataTransferItemList,SVGPathSegList,SVGPointList];
t.forEach(function(t){Object.defineProperty(t.prototype,Symbol.iterator,{configurable:!0,enumerable:!1,writable:!0,value:Array.prototype[Symbol.iterator]})
})}(),window.addEventListener("load",function(){System.get("./elements/"+document.body.firstElementChild.localName)
}),System.register("classes/bridge",[],function(){"use strict";var t=function(){var t=this;
this._counter=0,this._callbacks={},this._handlers=[],this._cache=[],this._mainWindow=null,this._mainOrigin=null,window.addEventListener("message",function(e){t._onMessage(e)
})};$traceurRuntime.createClass(t,{addMessageHandler:function(t,e){var n={name:t,callback:e};
this._handlers.push(n)},removeMessageHandler:function(t,e){this._handlers=this._handlers.filter(function(t){return t.callback!==e
})},postMessage:function(t){var e=void 0!==arguments[1]?arguments[1]:null,n=void 0!==arguments[2]?arguments[2]:null,i=this,r=function(){var r={name:t,arg:e,sender:window.name,id:i._counter};
i._counter+=1,n&&(i._callbacks[r.id]=n),i._mainWindow.postMessage(r,i._mainOrigin)
};this._mainWindow&&this._mainOrigin?r():this._cache.push(r)},_onMessage:function(t){var e,n=this,i=t.data;
if(null===this._mainWindow){this._mainWindow=t.source,this._mainOrigin=t.origin;for(var r,o=this._cache[Symbol.iterator]();!(r=o.next()).done;)(e=r.value)();
this._cache=[]}"__response__"===i.name?this._callbacks[i.id]&&this._callbacks[i.id](i.arg):this._handlers.forEach(function(t){t.name===i.name&&t.callback(i.arg,function(t){var e={name:"__response__",arg:t,sender:window.name,id:i.id};
n._mainWindow.postMessage(e,n._mainOrigin)})})}},{});var e=t;return{get default(){return e
}}}),System.register("classes/color",[],function(){"use strict";var t=System.get("utils/color"),e=t.stringToColor,n=t.colorToString,i=t.rgbToHsl,r=t.hslToRgb,o=function(){var t=void 0!==arguments[0]?arguments[0]:0,e=void 0!==arguments[1]?arguments[1]:0,n=void 0!==arguments[2]?arguments[2]:0,i=void 0!==arguments[3]?arguments[3]:1,r=void 0!==arguments[4]?arguments[4]:"rgba";
"rgba"===r?(this.r=t,this.g=e,this.b=n):"hsla"===r&&(this.h=t,this.s=e,this.l=n),this.a=i,this.space=r
},s=o;$traceurRuntime.createClass(o,{setSpace:function(t){var e,n,o,s,a,l,u,c;"rgba"===t&&"hsla"===this.space?(e=r(this.h,this.s,this.l),n=e[0],o=e[1],s=e[2],this.r=n,this.g=o,this.b=s,delete this.h,delete this.s,delete this.l,this.space="rgba"):"hsla"===t&&"rgba"===this.space&&(a=i(this.r,this.g,this.b),l=a[0],u=a[1],c=a[2],this.h=l,this.s=u,this.l=c,delete this.r,delete this.g,delete this.b,this.space="hsla")
},clone:function(){return"rgba"===this.space?new s(this.r,this.g,this.b,this.a,"rgba"):"hsla"===this.space?new s(this.h,this.s,this.l,this.a,"hsla"):void 0
},log:function(){var t=this.toString();console.log("%c     ","background: "+t,t)},toString:function(){var t=void 0!==arguments[0]?arguments[0]:"rgba";
return n(this,t)}},{fromString:function(t){var n,i,r,o,a,l,u,c,h,d,p=void 0!==arguments[1]?arguments[1]:"rgba";
return"rgba"===p?(n=e(t,"rgba"),i=n.r,r=n.g,o=n.b,a=n.a,new s(i,r,o,a,"rgba")):(l=e(t,"hsla"),u=l.h,c=l.s,h=l.l,d=l.a,new s(u,c,h,d,"hsla"))
}});var a=o;return{get default(){return a}}}),System.register("classes/config",[],function(){"use strict";
var t=System.get("classes/event-emitter").default,e=function(){var t=this;app.bridge.addMessageHandler("config.dispatchChangeEvent",function(e){var n=e,i=n.key,r=n.value;
t.dispatchEvent(new CustomEvent("change",{detail:{key:i,value:r}}))})};$traceurRuntime.createClass(e,{get:function(t,e){app.bridge.postMessage("config.get",t,function(t){e(t)
})},set:function(t,e){var n=void 0!==arguments[2]?arguments[2]:null;app.bridge.postMessage("config.set",{key:t,value:e},n)
},getAll:function(t){app.bridge.postMessage("config.getAll",null,function(e){t(e)
})},setAll:function(t){var e=void 0!==arguments[1]?arguments[1]:null;app.bridge.postMessage("config.setAll",t,e)
}},{},t);var n=e;return{get default(){return n}}}),System.register("classes/dom-undo-manager",[],function(){"use strict";
var t=System.get("classes/event-emitter").default,e=System.get("utils/type").isBoolean,n={childList:!0,attributes:!0,characterData:!0,subtree:!0,attributeOldValue:!0,characterDataOldValue:!0},i=function(t){var e=this;
this._rootElement=t,this._groups=[],this._position=0,this._disabled=!1,this._observer=new MutationObserver(function(t){for(var n,i,r=t[Symbol.iterator]();!(i=r.next()).done;)n=i.value,e._onDOMTransaction(n)
}),this._onDisabledChange()};$traceurRuntime.createClass(i,{get disabled(){return this._disabled
},set disabled(t){e(t)&&t!==this._disabled&&(this._disabled=t,this._onDisabledChange())
},get undoLabel(){var t,e="Undo";return this.canUndo()&&(t=this._groups[this._position-1].transactions.length>0?this._groups[this._position-1]:this._groups[this._position-2],e="Undo: "+t.label),e
},set undoLabel(t){throw new Error("undoLabel property is read-only")},get redoLabel(){var t,e="Redo";
return this.canRedo()&&(t=this._groups[this._position],e="Redo: "+t.label),e},set redoLabel(t){throw new Error("redoLabel property is read-only")
},clear:function(){this._groups=[],this._position=0,this.dispatchEvent(new CustomEvent("positionchange",{detail:this._position}))
},checkpoint:function(t){this._observer.takeRecords(),this._position<this._groups.length&&(this._groups=this._groups.slice(0,this._position));
var e={label:t,transactions:[]};this._groups.push(e),this._position+=1,this.dispatchEvent(new CustomEvent("positionchange",{detail:this._position}))
},undo:function(){var t,e,n,i,r,o,s,a;if(this.canUndo()){this._discardCurrentGroupIfEmpty(),this.disabled=!0,this._position-=1,t=this._groups[this._position].transactions,t=$traceurRuntime.spread(t).reverse(),e=new Set,n=new Set,i=new Set;
for(var l,u=t[Symbol.iterator]();!(l=u.next()).done;)if(r=l.value,"childList"===r.type){o=document.createDocumentFragment();
for(var c,h=r.addedNodes[Symbol.iterator]();!(c=h.next()).done;)s=c.value,r.target.removeChild(s),n.add(s),e.delete(s);
for(var d,p=r.removedNodes[Symbol.iterator]();!(d=p.next()).done;)a=d.value,o.append(a),e.add(a),n.delete(a);
r.nextSibling?r.target.insertBefore(o,r.nextSibling):r.previousSibling?r.target.insertBefore(o,r.previousSibling.nextSibling):r.target.append(o)
}else"attributes"===r.type?(null===r.oldValue?r.target.removeAttribute(r.attributeName):r.target.setAttribute(r.attributeName,r.oldValue),i.add(r.target)):"characterData"===r.type&&(r.target.data=r.oldValue,i.add(r.target));
this.disabled=!1,this.dispatchEvent(new CustomEvent("undo",{detail:{addedNodes:e,removedNodes:n,modifiedNodes:i}})),this.dispatchEvent(new CustomEvent("positionchange",{detail:this._position}))
}else console.info("Can't undo")},redo:function(){var t,e,n,i,r,o,s,a;if(this.canRedo()){this.disabled=!0,t=this._groups[this._position].transactions,this._position+=1,e=new Set,n=new Set,i=new Set;
for(var l,u=t[Symbol.iterator]();!(l=u.next()).done;)if(r=l.value,"childList"===r.type){o=document.createDocumentFragment();
for(var c,h=r.removedNodes[Symbol.iterator]();!(c=h.next()).done;)s=c.value,r.target.removeChild(s),n.add(s),e.delete(s);
for(var d,p=r.addedNodes[Symbol.iterator]();!(d=p.next()).done;)a=d.value,o.append(a),e.add(a),n.delete(a);
r.nextSibling?r.target.insertBefore(o,r.nextSibling):r.previousSibling?r.target.insertBefore(o,r.previousSibling.nextSibling):r.target.append(o)
}else"attributes"===r.type?(null===r.newValue?r.target.removeAttribute(r.attributeName):r.target.setAttribute(r.attributeName,r.newValue),i.add(r.target)):"characterData"===r.type&&(r.target.data=r.newValue,i.add(r.target));
this.disabled=!1,this.dispatchEvent(new CustomEvent("redo",{detail:{addedNodes:e,removedNodes:n,modifiedNodes:i}})),this.dispatchEvent(new CustomEvent("positionchange",{detail:this._position}))
}else console.info("Can't redo")},canUndo:function(){return 0===this._position||this.disabled?!1:1===this._position&&this._isCurrentGroupEmpty()?!1:!0
},canRedo:function(){return this._position===this._groups.length||this.disabled?!1:!0
},_onDisabledChange:function(){this.disabled===!0?(this._observer.takeRecords(),this._observer.disconnect()):this.disabled===!1&&this._observer.observe(this._rootElement,n)
},_onDOMTransaction:function(t){var e,n,i,r;if(0!==this._groups.length){var o=this._groups[this._groups.length-1].transactions;
"attributes"===t.type?(e=o.find(function(e){return"attributes"===e.type&&e.attributeName===t.attributeName&&e.target===t.target
}),e?e.newValue=e.target.getAttribute(e.attributeName):(e={type:"attributes",target:t.target,attributeName:t.attributeName,oldValue:t.oldValue,newValue:t.target.getAttribute(t.attributeName)},o.push(e))):"characterData"===t.type?(n=o.find(function(e){return"characterData"===e.type&&e.target===t.target
}),n?n.newValue=n.target.data:(i={type:"characterData",target:t.target,oldValue:t.oldValue,newValue:t.target.data},o.push(i))):"childList"===t.type&&(r={type:"childList",target:t.target,addedNodes:$traceurRuntime.spread(t.addedNodes),removedNodes:$traceurRuntime.spread(t.removedNodes),nextSibling:t.nextSibling,previousSibling:t.previousSibling},o.push(r))
}},_isCurrentGroupEmpty:function(){return 0===this._groups[this._position-1].transactions.length
},_discardCurrentGroupIfEmpty:function(){this._position>0&&0===this._groups[this._position-1].transactions.length&&(this._groups.remove(this._groups[this._position]),this._position-=1,this.dispatchEvent(new CustomEvent("positionchange",{detail:this._position})))
}},{},t);var r=i;return{get default(){return r}}}),System.register("classes/enum",[],function(){"use strict";
var t=Object,e=t.defineProperty,n=t.freeze,i=function(){for(var t,i,r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];
for(var s,a=r[Symbol.iterator]();!(s=a.next()).done;)t=s.value,i=Symbol(t),e(this,t,{enumerable:!0,configurable:!1,value:i}),e(this,i,{enumerable:!1,configurable:!1,value:t});
n(this)};$traceurRuntime.createClass(i,{},{});var r=i;return{get default(){return r
}}}),System.register("classes/event-emitter",[],function(){"use strict";var t=function(){};
$traceurRuntime.createClass(t,{addEventListener:function(t,e){this._events||(this._events={});
var n=this._events[t];n||(this._events[t]=n=[]),n.push(e),n.length>300&&console.warn("Potential EventEmitter memory leak: "+n.length+" listeners "+('subscribed to event "'+t+'"'))
},removeEventListener:function(t,e){if(this._events&&this._events[t]){for(var n=[],i=0;i<this._events[t].length;i+=1)this._events[t][i]!==e&&n.push(this._events[t][i]);
this._events[t]=n}},dispatchEvent:function(t){var e,n;if(this._events){var i=this._events[t.type];
if(i){for(var r=null,o=i.length-1;o>=0;o-=1){e=i[o];try{n=e.call(window,t)}catch(s){null===r&&(r=s)
}if(n===!1)break}if(r)throw r}}}},{});var e=t;return{get default(){return e}}}),System.register("classes/string-scanner",[],function(){"use strict";
var t=function(t){this.text=t,this.counter=0,this.storedPosition=0};$traceurRuntime.createClass(t,{read:function(){for(var t,e=void 0!==arguments[0]?arguments[0]:1,n="",i=this.counter,r=0;e>r&&(t=this.text[i+r],void 0!==t);r+=1)n+=t,this.counter+=1;
return""===n?null:n},peek:function(){for(var t,e=void 0!==arguments[0]?arguments[0]:1,n="",i=0;e>i&&(t=this.text[this.counter+i],void 0!==t);i+=1)n+=t;
return""===n?null:n},storePosition:function(){this.storedPosition=this.counter},restorePosition:function(){this.counter=this.storedPosition
}},{});var e=t;return{get default(){return e}}}),System.register("classes/undo-manager",[],function(){"use strict";
var t={label:"Sample label",icon:"stub",undo:function(){},redo:function(){}},e=function(){this._entries=[],this._position=0
};$traceurRuntime.createClass(e,{get undoLabel(){var t;return this.canUndo()&&(t=this._entries[this._position-1],t[0]&&t[0].label)?"Undo: "+t[0].label:"Undo"
},set undoLabel(t){throw new Error("undoLabel property is read-only")},get redoLabel(){var t;
return this.canRedo()&&(t=this._entries[this._position],t[0]&&t[0].label)?"Redo: "+t[0].label:"Redo"
},set redoLabel(t){throw new Error("redoLabel property is read-only")},register:function(e){e.__proto__=t,this._position<this._entries.length&&(this._entries=this._entries.slice(0,this._position));
var n=[];this._entries.push(n),this._position+=1,n.push(e)},undo:function(){var t,e,n;
if(this.canUndo()){t=this._entries[this._position-1],e=$traceurRuntime.spread(t).reverse();
for(var i,r=e[Symbol.iterator]();!(i=r.next()).done;)n=i.value,n.undo();this._position-=1
}},redo:function(){var t,e;if(this.canRedo()){t=this._entries[this._position];for(var n,i=t[Symbol.iterator]();!(n=i.next()).done;)e=n.value,e.redo();
this._position+=1}},reset:function(){this._entries=[],this._position=0},canUndo:function(){return 0===this._position?!1:!0
},canRedo:function(){return this._position===this._entries.length?!1:!0}},{});var n=e;
return{get default(){return n}}}),System.register("classes/vector",[],function(){"use strict";
var t=System.get("utils/math").sqrt,e=System.get("utils/type").isNumber,n="Invalid argument passed to Vector contstructor",i=function(){for(var t,i,r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];
if(0===r.length)this.x=0,this.y=0;else if(1===r.length){if(!e(r[0].x)||!e(r[0].y))throw new Error(n);
this.x=r[0].x,this.y=r[0].y}else{if(2!==r.length)throw new Error(n);if(e(r[0])&&e(r[1]))this.x=r[0],this.y=r[1];
else{if(!(r[0]instanceof SVGPoint&&r[1]instanceof SVGPoint))throw new Error(n);t=r[0],i=r[1],this.x=i.x-t.x,this.y=i.y-t.y
}}},r=i;$traceurRuntime.createClass(i,{get length(){return t(this.x*this.x+this.y*this.y)
},set length(t){0!==this.length&&(t/=this.length,this.x=this.x*t,this.y=this.y*t)
},getNormalVector:function(){return new r(-this.y,this.x)},getOppositeVector:function(){return new r(-this.x,-this.y)
},negate:function(){var t=this.multiply(-1);return t},multiply:function(t){return new r(this.x*t,this.y*t)
},multiplyBy:function(t){return this.x=this.x*t,this.y=this.y*t,this},divide:function(t){return new r(this.x/t,this.y/t)
},divideBy:function(t){return this.x=this.x/t,this.y=this.y/t,this},normalize:function(){return 0===this.length?new r(this):new r(this.x/this.length,this.y/this.length)
},scale:function(t){return 0===this.length?new r(this):(t/=this.length,new r(this.x*t,this.y*t))
},toString:function(){return"("+this.x+", "+this.y+")"}},{});var o=i;return{get default(){return o
}}}),System.register("elements/bx-about",[],function(){"use strict";var t=System.get("elements/bx-app").default,e=System.get("utils/dom").registerElement,n='\n  <style>\n    @import url("stylesheets/scrollbars.css");\n    @import url("stylesheets/bx-about.css");\n  </style>\n\n  <main> \n    <div class="icon"></div>\n    <img id="logo" src="images/logo.svg"></img>\n    <h1 id="app-name">Boxy SVG</h1>\n    <h2 id="version"></h2>\n\n    <div id="scroll">\n      <h3>Authors</h3>\n      <ul>\n        <li><a href="http://foksa.name/" target="_blank">Jarosław Foksa</a></li>\n      </ul>\n\n      <h3>Special thanks</h3>\n      <dl>\n        <dt><a href="https://github.com/DmitryBaranovskiy" target="_blank">Dmitry Baranovskiy</a></dt>\n        <dd><a href="http://raphaeljs.com/" target="_blank">Raphaël</a></dd>\n\n        <dt><a href="http://bost.ocks.org/mike/" target="_blank">Mike Bostock</a></dt>\n        <dd><a href="https://gist.github.com/mbostock/8027637" target="_blank">Closest point on path algorithm</a></dd>\n\n        <dt><a href="http://ariya.blogspot.com/" target="_blank">Ariya Hidayat</a></dt>\n        <dd>HSV↔HSL conversion code</dd>\n\n        <dt><a href="http://www.paulirish.com" target="_blank">Paul Irish</a></dt>\n        <dd><a href="http://www.paulirish.com/2009/random-hex-color-code-snippets/" target="_blank">Random Color Generator</a></dd>\n\n        <dt><a href="http://mjijackson.com/" target="_blank">Michael Jackson</a></dt>\n        <dd>HSV↔RGB↔HSL conversion code</dd>\n\n        <dt><a href="http://www.angusj.com" target="_blank">Angus Johnson</a></dt>\n        <dd><a href="http://www.angusj.com/delphi/clipper.php" target="_blank">Clipper</a></dd>\n\n        <dt><a href="http://kahkonen.com" target="_blank">Timo Kähkönen</a></dt>\n        <dd><a href="http://sourceforge.net/projects/jsclipper/" target="_blank">JavaScript Clipper</a></dd>\n\n        <dt><a href="http://tmotooka.hatenablog.jp/" target="_blank">Tadahisa Motooka</a></dt>\n        <dd><a href="https://github.com/motooka/SVGPathNormalizer" target="_blank">SVGPathNormalizer</a></dd>\n\n        <dt><a href="https://github.com/kennethormandy" target="_blank">Kenneth Ormandy</a></dt>\n        <dd><a href="https://github.com/kennethormandy/normalize-opentype.css" target="_blank">Normalize OpenType</a></dd>\n\n        <dt><a href="https://github.com/gwynne" target="_blank">Gwynne Raskind</a></dt>\n        <dd>Base64 encoding code</dd>\n\n        <dt><a href="http://svg-whiz.com/" target="_blank">Doug Schepers</a></dt>\n        <dd>Polar coordinates code</dd>\n\n        <dt>Philip J. Schneider</dt>\n        <dd>Bezier curve fitting algorithm</dd>\n\n        <dt><a href="https://github.com/johan" target="_blank">Johan Sundström</a></dt>\n        <dd>Path normalization code</dd>\n\n        <dt>\n          <a href="https://github.com/andr83" target="_blank">Andrey Tupitsin</a> and\n          <a href="https://github.com/puzrin" target="_blank">Vitaly Puzrin</a>\n        </dt>\n        <dd><a href="http://nodeca.github.io/pako/" target="_blank">Pako</a></dd>\n      </dl>\n    </div>\n\n    <h2 id="copyright">© '+(new Date).getFullYear()+" Jarosław Foksa</h2>\n  </main>\n",i=function(){$traceurRuntime.defaultSuperCall(this,r.prototype,arguments)
},r=i;$traceurRuntime.createClass(i,{createdCallback:function(){var t=this;$traceurRuntime.superCall(this,r.prototype,"createdCallback",[]),this.innerHTML=n,this.bridge.postMessage("getVersion",null,function(e){t.querySelector("#version").textContent="Version "+e
})}},{},t);var o=e("bx-about",i);return{get default(){return o}}}),System.register("elements/bx-alphaslider",[],function(){"use strict";
var t=System.get("utils/color").parseColor,e=System.get("utils/dom").registerElement,n=System.get("utils/math").normalize,i=!1,r='\n<style>\n  @import url("stylesheets/bx-alphaslider.css");\n</style>\n\n<main>\n  <canvas></canvas>\n  <div id="marker"></div>\n</main>\n',o=function(){$traceurRuntime.defaultSuperCall(this,s.prototype,arguments)
},s=o;$traceurRuntime.createClass(o,{createdCallback:function(){var t=this;this.createShadowRoot(),this.shadowRoot.innerHTML=r,this._canvas=this.shadowRoot.querySelector("canvas"),this._marker=this.shadowRoot.querySelector("#marker"),this._canvas.addEventListener("mousedown",function(e){return t._onMouseDown(e)
})},attributeChangedCallback:function(t,e,n){e!==n&&("alpha"===t?this._onAlphaChange():"color"===t&&this._onColorChange())
},get alpha(){return this.hasAttribute("alpha")?parseFloat(this.getAttribute("alpha")):1
},set alpha(t){this.setAttribute("alpha",t)},get color(){return this.hasAttribute("color")?this.getAttribute("color"):"#ffffff"
},set color(t){this.setAttribute("color",t)},_onMouseDown:function(t){var e=this;
this.dispatchEvent(new CustomEvent("markerdragstart"));var n,i,r,o=this._canvas.getBoundingClientRect().left;
this._onMarkerDrag(t.clientX-o),window.addEventListener("mousemove",n=function(t){t.clientX!==r&&(r=t.clientX,e._onMarkerDrag(t.clientX-o))
}),window.addEventListener("mouseup",i=function(){window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",i),e.dispatchEvent(new CustomEvent("markerdragend"))
})},_onMarkerDrag:function(e){var r=n(e/this._canvas.clientWidth,0,1,2);if(this.alpha!==r&&(this.alpha=r,this.dispatchEvent(new CustomEvent("markerdrag",{detail:this.alpha})),i)){var o=t(this.color);
o.a=r,console.log("%c     ","background: "+o,"alpha = "+r)}},_onAlphaChange:function(){var t=n(this.alpha,0,1,2);
this._marker.style.left=100*t+"%"},_onColorChange:function(){var e,n,i,r,o=this._canvas.width=800,s=this._canvas.height=100,a=this._canvas.getContext("2d");
a.clearRect(0,0,o,s),null!==this.color&&(e=t(this.color),n=e.clone(),n.a=0,i=e.clone(),i.a=1,r=a.createLinearGradient(0,0,o,0),r.addColorStop(0,n.toString()),r.addColorStop(1,i.toString()),a.fillStyle=r,a.fillRect(0,0,o,s))
}},{},HTMLElement);var a=e("bx-alphaslider",o);return{get default(){return a}}}),System.register("elements/bx-app",[],function(){"use strict";
var t=System.get("classes/bridge").default,e=System.get("classes/config").default,n=System.get("utils/array").compare,i=System.get("utils/dom"),r=i.createElement,o=i.registerElement,s=System.get("utils/object"),a=(s.entries,s.keys),l=s.observe,u=System.get("utils/event"),c=u.getShortcutForKeyboardEvent,h=u.getKeyForKeyboardEvent,d=function(){$traceurRuntime.defaultSuperCall(this,p.prototype,arguments)
},p=d;$traceurRuntime.createClass(d,{createdCallback:function(){var n=this;this.bridge=new t,this.config=new e,this.tabIndex=-1,this.commands={},this.userShortcuts={},this.mouseClientX=0,this.mouseClientY=0,this._cursors=[],this._modKeys={ctrl:!1,alt:!1,shift:!1},this.bridge.addMessageHandler("getCommand",function(t,e){e(n.getSerializableCommand(t))
}),this.bridge.addMessageHandler("execCommand",function(t){n.execCommand(t)}),this.config.addEventListener("change",function(t){n._onConfigChange(t)
}),this.config.get("bx-shortcutseditor:userShortcuts",function(t){n.userShortcuts=t||{}
}),l(this._modKeys,function(){return n._onModKeysChange()})},attachedCallback:function(){var t=this;
window.addEventListener("keydown",this._keyDownListener=function(e){t._onKeyDown(e)
}),window.addEventListener("keyup",this._keyUpListener=function(e){t._onKeyUp(e)}),window.addEventListener("blur",this._blurListener=function(e){t._onBlur(e)
}),window.addEventListener("drop",this._dropListener=function(e){t.mouseClientX=e.clientX,t.mouseClientY=e.clientY
}),window.addEventListener("mousemove",this._mouseMoveListener=function(e){t.mouseClientX=e.clientX,t.mouseClientY=e.clientY
}),this.focus()},detachedCallback:function(){window.removeEventListener("keydown",this._keyDownListener),window.removeEventListener("keyup",this._keyUpListener),window.removeEventListener("blur",this._blurListener),window.removeEventListener("drop",this._dropListener),window.removeEventListener("mousemove",this._mouseMoveListener)
},get modKeys(){var t=this._modKeys,e=t.ctrl,n=t.alt,i=t.shift;return{ctrl:e,alt:n,shift:i}
},set modKeys(t){throw new Error("modKeys property is read-only")},registerCursor:function(t){var e=void 0!==arguments[1]?arguments[1]:0,n=void 0!==arguments[2]?arguments[2]:0,i=void 0!==arguments[3]?arguments[3]:0;
t.includes("/")&&(t="url("+t+") "+n+" "+i+", auto");var r={name:t,weight:e};return this._cursors.push(r),this._updateCursorStyle(),r
},unregisterCursor:function(t){this._cursors=this._cursors.filter(function(e){return e!==t
}),this._updateCursorStyle()},execCommand:function(t){for(var e=document.activeElement;e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;
for(var n=e;n;n=n.parentNode||n.host)if(n.commands&&n.commands[t]){n.commands[t].exec();
break}},getSerializableCommand:function(t){var e=this.commands[t],n=null;return e&&(n={label:e.label,shortcut:e.shortcut,state:e.state?e.state():!1,enabled:e.enabled?e.enabled():!0}),n
},_onKeyDown:function(t){var e,i,r=c(t),o=h(t);"Ctrl"===o?this._modKeys.ctrl=!0:"Alt"===o?this._modKeys.alt=!0:"Shift"===o&&(this._modKeys.shift=!0);
for(var s,l=a(this.commands)[Symbol.iterator]();!(s=l.next()).done;)if(e=s.value,i=app.userShortcuts[e]?app.userShortcuts[e]:this.commands[e]&&this.commands[e].shortcut?this.commands[e].shortcut:app.commands[e]&&app.commands[e].shortcut?app.commands[e].shortcut:[],n(r,i))return t.stopPropagation(),t.preventDefault(),void(this.commands[e].enabled()&&this.commands[e].exec())
},_onKeyUp:function(t){var e=h(t);"Ctrl"===e?this._modKeys.ctrl=!1:"Alt"===e?this._modKeys.alt=!1:"Shift"===e&&(this._modKeys.shift=!1)
},_onModKeysChange:function(){this.dispatchEvent(new CustomEvent("modkeyschange"))
},_onBlur:function(){this._modKeys.ctrl=!1,this._modKeys.alt=!1,this._modKeys.shift=!1
},_onConfigChange:function(t){var e=t.detail,n=e.key,i=e.value;"bx-shortcutseditor:userShortcuts"===n&&(this.userShortcuts=i||{},this.dispatchEvent(new CustomEvent("usershortcutschange")))
},_updateCursorStyle:function(){var t,e=$traceurRuntime.spread(this._cursors);e.sort(function(t,e){return t.weight>e.weight?1:t.weight<e.weight?-1:0
}),this._cursorStyle||(this._cursorStyle=r("style"),this._cursorStyle.id="cursor-style",this.prepend(this._cursorStyle)),e.length>0?(t=e[e.length-1].name,this._cursorStyle.innerHTML="* {cursor: "+t+"!important}"):this._cursorStyle.innerHTML=""
}},{},HTMLElement);var m=o("bx-app",d);return{get default(){return m}}}),System.register("elements/bx-arrangementcontrols",[],function(){"use strict";
System.get("elements/bx-button"),System.get("elements/bx-checkbox"),System.get("elements/bx-select");
var t=System.get("utils/bbox").getClientBBox,e=System.get("utils/rect").getBiggestRect,n=System.get("utils/dom"),i=n.registerElement,r=n.createSVGMatrix,o=n.createSVGRect,s=System.get("utils/function").throttle,a=System.get("utils/rect"),l=a.combineRects,u=a.transformRect,c='\n<style>\n  @import url("stylesheets/controls.css");\n  @import url("stylesheets/bx-arrangementcontrols.css");\n</style>\n\n<section id="align">\n  <h2 id="align-section-header">Align</h2>\n\n  <div id="relative-to-label">Relative to:</div>\n  <bx-select id="align-to-select" value="first-selected">\n    <bx-selectitem value="first-selected" label="First selected"></bx-selectitem>\n    <bx-selectitem value="last-selected" label="Last selected"></bx-selectitem>\n    <bx-selectitem value="biggest-selected" label="Biggest selected"></bx-selectitem>\n    <bx-selectitem value="view-box" label="View box"></bx-selectitem>\n  </bx-select>\n\n  <bx-checkbox\n    id="align-individually-checkbox"\n    label="Align elements individually">\n  </bx-checkbox>\n\n  <div id="align-buttons">\n    <div class="column">\n      <bx-button\n        id="move-left-button"\n        tooltip="Align Left"\n        icon="move-left"\n        iconsize="35"\n        skin="iconic">\n      </bx-button>\n    </div>\n\n    <div class="column">\n      <bx-button\n        id="move-top-button"\n        tooltip="Align Top"\n        icon="move-top"\n        iconsize="35"\n        skin="iconic">\n      </bx-button>\n\n      <bx-button\n        id="move-bottom-button"\n        tooltip="Align Bottom"\n        icon="move-bottom"\n        iconsize="35"\n        skin="iconic">\n      </bx-button>\n    </div>\n\n    <div class="column">\n      <bx-button\n        id="move-right-button"\n        tooltip="Align Right"\n        icon="move-right"\n        iconsize="35"\n        skin="iconic">\n      </bx-button>\n    </div>\n\n    <div class="column">\n      <bx-button\n        id="center-horizontally-button"\n        tooltip="Center Horizontally"\n        icon="center-horizontally"\n        iconsize="35"\n        skin="iconic">\n      </bx-button>\n\n      <bx-button\n        id="center-vertically-button"\n        tooltip="Center Vertically"\n        icon="center-vertically"\n        iconsize="35"\n        skin="iconic">\n      </bx-button>\n    </div>\n\n    <div class="column">\n      <bx-button\n        id="stretch-horizontally-button"\n        tooltip="Stretch horizontally (align left and right)"\n        icon="stretch-horizontally"\n        iconsize="35"\n        skin="iconic">\n      </bx-button>\n\n      <bx-button\n        id="stretch-vertically-button"\n        tooltip="Stretch vertically (align left and right)"\n        icon="stretch-vertically"\n        iconsize="35"\n        skin="iconic">\n      </bx-button>\n  </div>\n</section>\n\n<section id="z-order-section">\n  <h2 id="z-order-section-header">Z-order</h2>\n\n  <bx-button\n    id="raise-button"\n    icon="raise"\n    title="Raise Selection"\n    skin="bordered"\n    label="Raise">\n  </bx-button>\n\n  <bx-button\n    id="lower-button"\n    icon="lower"\n    title="Lower Selection"\n    skin="bordered"\n    label="Lower">\n  </bx-button>\n</section>\n\n<section id="group-section">\n  <h2 id="group-section-header">Group</h2>\n\n  <bx-button\n    id="group-button"\n    icon="group"\n    title="Group Selection"\n    skin="bordered"\n    label="Group">\n  </bx-button>\n\n  <bx-button\n    id="ungroup-button"\n    icon="ungroup"\n    title="Ungroup Selection"\n    skin="bordered"\n    label="Ungroup">\n  </bx-button>\n</section>\n\n<section id="rotate-section">\n  <h2 id="rotate-section-header">Rotate</h2>\n\n  <bx-button\n    id="rotate-counterclockwise-button"\n    icon="rotate-counterclockwise"\n    title="Rotate element(s) counter-clockwise by 90°"\n    skin="bordered"\n    label="Rotate by -90°">\n  </bx-button>\n\n  <bx-button\n    id="rotate-clockwise-button"\n    icon="rotate-clockwise"\n    title="Rotate element(s) clockwise by 90°"\n    skin="bordered"\n    label="Rotate by +90°">\n  </bx-button>\n</section>\n\n<section id="flip-section">\n  <h2 id="flip-section-header">Flip</h2>\n\n  <bx-button\n    id="flip-x-button"\n    icon="flip-x"\n    title="Flip X"\n    skin="bordered"\n    label="Flip X">\n  </bx-button>\n\n  <bx-button\n    id="flip-y-button"\n    icon="flip-y"\n    title="Flip Y"\n    skin="bordered"\n    label="Flip Y">\n  </bx-button>\n</section>\n',h=function(){$traceurRuntime.defaultSuperCall(this,d.prototype,arguments)
},d=h;$traceurRuntime.createClass(h,{createdCallback:function(){var t=this;this.createShadowRoot(),this.shadowRoot.innerHTML=c,this._alignSectionHeader=this.shadowRoot.querySelector("#align-section-header"),this._alignToSelect=this.shadowRoot.querySelector("#align-to-select"),this._alignIndividuallyCheckbox=this.shadowRoot.querySelector("#align-individually-checkbox"),this._moveLeftButton=this.shadowRoot.querySelector("#move-left-button"),this._moveRightButton=this.shadowRoot.querySelector("#move-right-button"),this._moveTopButton=this.shadowRoot.querySelector("#move-top-button"),this._moveBottomButton=this.shadowRoot.querySelector("#move-bottom-button"),this._centerHorizontallyButton=this.shadowRoot.querySelector("#center-horizontally-button"),this._centerVerticallyButton=this.shadowRoot.querySelector("#center-vertically-button"),this._stretchHorizontallyButton=this.shadowRoot.querySelector("#stretch-horizontally-button"),this._stretchVerticallyButton=this.shadowRoot.querySelector("#stretch-vertically-button"),this._zOrderSectionHeader=this.shadowRoot.querySelector("#z-order-section-header"),this._lowerButton=this.shadowRoot.querySelector("#lower-button"),this._raiseButton=this.shadowRoot.querySelector("#raise-button"),this._groupSectionHeader=this.shadowRoot.querySelector("#group-section-header"),this._groupButton=this.shadowRoot.querySelector("#group-button"),this._ungroupButton=this.shadowRoot.querySelector("#ungroup-button"),this._rotateSectionHeader=this.shadowRoot.querySelector("#rotate-section-header"),this._rotateCounterclockwiseButton=this.shadowRoot.querySelector("#rotate-counterclockwise-button"),this._rotateClockwiseButton=this.shadowRoot.querySelector("#rotate-clockwise-button"),this._flipSectionHeader=this.shadowRoot.querySelector("#flip-section-header"),this._flipXButton=this.shadowRoot.querySelector("#flip-x-button"),this._flipYButton=this.shadowRoot.querySelector("#flip-y-button"),this._alignButtons=this.shadowRoot.querySelector("#align-buttons"),this._alignButtons.addEventListener("click",function(e){"bx-button"===e.target.localName&&t._onAlignButtonClick(e.target)
}),this._alignToSelect.addEventListener("change",function(){return t._onAlignToSelectChange()
}),this._alignIndividuallyCheckbox.addEventListener("change",function(){return t._onAlignIndividuallyCheckboxChange()
}),this._lowerButton.addEventListener("click",function(e){return t._onLowerButtonClick(e)
}),this._raiseButton.addEventListener("click",function(e){return t._onRaiseButtonClick(e)
}),this._groupButton.addEventListener("click",function(){return t._onGroupButtonClick()
}),this._ungroupButton.addEventListener("click",function(){return t._onUngroupButtonClick()
}),this._rotateCounterclockwiseButton.addEventListener("click",function(){return t._onRotateByMinus90DegButtonClick()
}),this._rotateClockwiseButton.addEventListener("click",function(){return t._onRotateByPlus90DegButtonClick()
}),this._flipXButton.addEventListener("click",function(e){return t._onFlipXButtonClick(e)
}),this._flipYButton.addEventListener("click",function(e){return t._onFlipYButtonClick(e)
}),this._updateWidgets_250ms=s(this._updateWidgets,250,this),app.config.get("bx-arrangementcontrols:relativeTo",function(e){null!==e&&(t._alignToSelect.value=e)
}),app.config.get("bx-arrangmentControls:alignIndividually",function(e){(e===!0||e===!1)&&(t._alignIndividuallyCheckbox.checked=e)
})},enabledCallback:function(){var t=this;this._updateWidgets(),app.canvas.addEventListener("selectedelementschange",this._selectedElementsChangeListener=function(){t._updateWidgets_250ms()
}),app.canvas.addEventListener("contentmutation",this._contentMutationListener=function(){t._updateWidgets_250ms()
})},disabledCallback:function(){app.canvas.removeEventListener("selectedelementschange",this._selectedElementsChangeListener),app.canvas.removeEventListener("contentmutation",this._contentMutationListener)
},_onAlignToSelectChange:function(){this._updateAlignSection(),app.config.set("bx-arrangementcontrols:relativeTo",this._alignToSelect.value)
},_onAlignIndividuallyCheckboxChange:function(){app.config.set("bx-arrangmentControls:alignIndividually",this._alignIndividuallyCheckbox.checked)
},_onAlignButtonClick:function(n){var i,r,s,a,l,c,h,d,p,m,f,g,v,b,y;app.canvas.undoManager.checkpoint("Align");
var x=this._alignToSelect.value,_=this._alignIndividuallyCheckbox.checked,S=n.id.split("-button")[0];
"view-box"===x?(i=app.canvas.currentArtboard.getScreenCTM(),r=o(app.canvas.currentArtboard.viewBoxX,app.canvas.currentArtboard.viewBoxY,app.canvas.currentArtboard.viewBoxWidth,app.canvas.currentArtboard.viewBoxHeight),s=u(r,i),this._alignElementsToBBox(app.canvas.selectedElements,s,S,_)):"first-selected"===x?(a=app.canvas.selectedElements[0],l=app.canvas.selectedElements.slice(1),c=t(a),this._alignElementsToBBox(l,c,S,_)):"last-selected"===x?(h=app.canvas.selectedElements[app.canvas.selectedElements.length-1],d=app.canvas.selectedElements.slice(0,app.canvas.selectedElements.length-1),p=t(h),this._alignElementsToBBox(d,p,S,_)):"biggest-selected"===x&&(m=$traceurRuntime.spread(app.canvas.selectedElements),f=m.map(function(e){return t(e)
}),g=e(f),v=m[f.indexOf(g)],b=m.filter(function(t){return t!==v}),y=t(v),this._alignElementsToBBox(b,y,S,_))
},_alignElementsToBBox:function(e,n,i){var o,s,a,u,c,h,d,p,m,f,g,v,b,y,x,_,S,w,C,E,P,L=void 0!==arguments[3]?arguments[3]:!0;
if(L===!0)for(var T,A=e[Symbol.iterator]();!(T=A.next()).done;)o=T.value,s=r(o.transform.baseVal.consolidate().matrix),a=o.getScreenCTM(),u=a.inverse(),c=t(o),h=0,d=0,p=1,m=1,"move-left"===i?h=n.x-c.x:"move-right"===i?h=n.x+n.width-(c.x+c.width):"move-top"===i?d=n.y-c.y:"move-bottom"===i?d=n.y+n.height-(c.y+c.height):"center-horizontally"===i?h=n.x-c.x+n.width/2-c.width/2:"center-vertically"===i?d=n.y-c.y+n.height/2-c.height/2:"stretch-horizontally"===i?(p=n.width/c.width,h=n.x-c.x*p):"stretch-vertically"===i&&(m=n.height/c.height,d=n.y-c.y*m),f=s.multiply(u),f.translateBy(h,d),f.scaleNonUniformBy(p,m),f.multiplyBy(a),o.setAttribute("transform",f.toString());
else if(L===!1){g=function(){for(var n,i,r=0,o=[],s=e[Symbol.iterator]();!(i=s.next()).done;)n=i.value,o[r++]=t(n);
return o}(),v=l(g),b=0,y=0,x=1,_=1,"move-left"===i?b=n.x-v.x:"move-right"===i?b=n.x+n.width-(v.x+v.width):"move-top"===i?y=n.y-v.y:"move-bottom"===i?y=n.y+n.height-(v.y+v.height):"center-horizontally"===i?b=n.x-v.x+n.width/2-v.width/2:"center-vertically"===i?y=n.y-v.y+n.height/2-v.height/2:"stretch-horizontally"===i?(x=n.width/v.width,b=n.x-v.x*x):"stretch-vertically"===i&&(_=n.height/v.height,y=n.y-v.y*_);
for(var k,O=e[Symbol.iterator]();!(k=O.next()).done;)S=k.value,w=r(S.transform.baseVal.consolidate().matrix),C=S.getScreenCTM(),E=C.inverse(),P=w.multiply(E),P.translateBy(b,y),P.scaleNonUniformBy(x,_),P.multiplyBy(C),S.setAttribute("transform",P.toString())
}},_onRaiseButtonClick:function(){0===event.button&&app.commands.raise.exec()},_onLowerButtonClick:function(){0===event.button&&app.commands.lower.exec()
},_onGroupButtonClick:function(){0===event.button&&app.commands.group.exec()},_onUngroupButtonClick:function(){0===event.button&&app.commands.ungroup.exec()
},_onRotateByMinus90DegButtonClick:function(){0===event.button&&app.commands.rotateCounterclockwise.exec()
},_onRotateByPlus90DegButtonClick:function(){0===event.button&&app.commands.rotateClockwise.exec()
},_onFlipXButtonClick:function(t){0===t.button&&app.commands.flipX.exec()},_onFlipYButtonClick:function(t){0===t.button&&app.commands.flipY.exec()
},_updateWidgets:function(){this._updateAlignSection(),this._updateZOrderSection(),this._updateGroupSection(),this._updateRotateSection(),this._updateFlipSection()
},_updateAlignSection:function(){var t;0===app.canvas.selectedElements.length?(this._alignSectionHeader.disabled=!0,this._alignToSelect.disabled=!0,this._alignIndividuallyCheckbox.disabled=!0,this._disableAlignButtons()):1===app.canvas.selectedElements.length?(this._alignSectionHeader.disabled=!1,this._alignToSelect.disabled=!1,this._alignIndividuallyCheckbox.disabled=!1,t=this._alignToSelect.value,"view-box"===t?this._enableAlignButtons():this._disableAlignButtons()):(this._alignSectionHeader.disabled=!1,this._alignToSelect.disabled=!1,this._alignIndividuallyCheckbox.disabled=!1,this._enableAlignButtons())
},_updateZOrderSection:function(){this._raiseButton.disabled=!app.commands.raise.enabled(),this._lowerButton.disabled=!app.commands.lower.enabled(),this._zOrderSectionHeader.disabled=this._raiseButton.disabled&&this._lowerButton.disabled
},_updateGroupSection:function(){this._groupButton.disabled=!app.commands.group.enabled(),this._ungroupButton.disabled=!app.commands.group.enabled(),this._groupSectionHeader.disabled=this._groupButton.disabled&&this._ungroupButton.disabled
},_updateRotateSection:function(){this._rotateCounterclockwiseButton.disabled=!app.commands.rotateCounterclockwise.enabled(),this._rotateClockwiseButton.disabled=!app.commands.rotateClockwise.enabled(),this._rotateSectionHeader.disabled=this._rotateCounterclockwiseButton.disabled&&this._rotateClockwiseButton.disabled
},_updateFlipSection:function(){this._flipXButton.disabled=!app.commands.flipX.enabled(),this._flipYButton.disabled=!app.commands.flipY.enabled(),this._flipSectionHeader.disabled=this._flipXButton.disabled&&this._flipYButton.disabled
},_enableAlignButtons:function(){this._moveLeftButton.disabled=!1,this._moveRightButton.disabled=!1,this._moveTopButton.disabled=!1,this._moveBottomButton.disabled=!1,this._centerHorizontallyButton.disabled=!1,this._centerVerticallyButton.disabled=!1,this._stretchHorizontallyButton.disabled=!1,this._stretchVerticallyButton.disabled=!1
},_disableAlignButtons:function(){this._moveLeftButton.disabled=!0,this._moveRightButton.disabled=!0,this._moveTopButton.disabled=!0,this._moveBottomButton.disabled=!0,this._centerHorizontallyButton.disabled=!0,this._centerVerticallyButton.disabled=!0,this._stretchHorizontallyButton.disabled=!0,this._stretchVerticallyButton.disabled=!0
}},{},HTMLElement);var p=i("bx-arrangementcontrols",h);return{get default(){return p
}}}),System.register("elements/bx-button",[],function(){"use strict";System.get("elements/bx-icon");
var t=System.get("utils/dom").registerElement,e='\n<style id="stylesheet"></style>\n\n<main>\n  <bx-icon></bx-icon>\n  <div id="label-wrapper">\n    <label></label>\n  </div>\n</main>\n',n=function(){$traceurRuntime.defaultSuperCall(this,i.prototype,arguments)
},i=n;$traceurRuntime.createClass(n,{createdCallback:function(){this.createShadowRoot(),this.shadowRoot.innerHTML=e,this._stylesheetElement=this.shadowRoot.querySelector("#stylesheet"),this._iconElement=this.shadowRoot.querySelector("bx-icon"),this._labelElement=this.shadowRoot.querySelector("label"),this._onLabelChange(),this._onIconChange(),this._onIconSizeChange(),this._onSkinChange()
},attributeChangedCallback:function(t,e,n){e!==n&&("label"===t?this._onLabelChange():"icon"===t?this._onIconChange():"iconsize"===t?this._onIconSizeChange():"skin"===t&&this._onSkinChange())
},get label(){return this.hasAttribute("label")?this.getAttribute("label"):""},set label(t){this.setAttribute("label",t)
},get value(){return this.getAttribute("value")},set value(t){null===t?this.removeAttribute("value"):this.setAttribute("value",t)
},get icon(){return this.hasAttribute("icon")?this.getAttribute("icon"):"stub"},set icon(t){this.setAttribute("icon",t)
},get iconSize(){return this.hasAttribute("iconsize")?parseInt(this.getAttribute("iconsize")):20
},set iconSize(t){this.setAttribute("iconsize",t)},get skin(){return this.hasAttribute("skin")?this.getAttribute("skin"):"bordered"
},set skin(t){this.setAttribute("skin",t)},get href(){return this.hasAttribute("href")?this.getAttribute("href"):""
},set href(t){this.setAttribute("href",t)},get pressed(){return this.hasAttribute("pressed")?!0:!1
},set pressed(t){t===!0?this.setAttribute("pressed",""):this.removeAttribute("pressed")
},get mixed(){return this.hasAttribute("mixed")},set mixed(t){t?this.setAttribute("mixed",""):this.removeAttribute("mixed")
},_onLabelChange:function(){this._labelElement.textContent=this.label},_onIconChange:function(){this._iconElement.name=this.icon
},_onIconSizeChange:function(){this._iconElement.style.width=this.iconSize+"px",this._iconElement.style.height=this.iconSize+"px"
},_onSkinChange:function(){this._stylesheetElement.innerText='@import url("stylesheets/bx-button@'+this.skin+'.css");'
}},{},HTMLElement);var r=t("bx-button",n);return{get default(){return r}}}),System.register("elements/bx-canvas",[],function(){"use strict";
System.get("elements/bx-masterartboard"),System.get("elements/bx-symbolartboard"),System.get("elements/bx-viewboxhud"),System.get("elements/bx-viewboxedithud"),System.get("elements/bx-outlineshud"),System.get("elements/bx-recthud"),System.get("elements/bx-ellipsehud"),System.get("elements/bx-pathsedithud"),System.get("elements/bx-selectedtextrangehud"),System.get("elements/bx-lineargradienthud"),System.get("elements/bx-radialgradienthud"),System.get("elements/bx-transformhud"),System.get("elements/bx-rubberbandhud"),System.get("elements/bx-cubicsegsdrawhud"),System.get("elements/bx-quadsegsdrawhud"),System.get("elements/bx-freehandsegsdrawhud"),System.get("elements/bx-contextmenu"),System.get("elements/bx-menuitem"),System.get("elements/bx-menu");
var t=System.get("classes/dom-undo-manager").default,e=System.get("utils/bbox").getClientBBox,n=System.get("utils/event").keyboardShortcutToString,i=System.get("utils/math"),r=i.normalize,o=(i.round,i.min),s=System.get("utils/image").extractImageSize,a=System.get("utils/object"),l=a.freeze,u=a.defineProperty,c=System.get("utils/rect"),h=c.transformRect,d=c.combineRects,p=System.get("utils/relationship").sortByDomPosition,m=System.get("utils/constants"),f=m.SVG_NAMESPACE,g=m.XLINK_NAMESPACE,v=System.get("utils/artwork"),b=(v.serializeArtwork,v.deserializeArtwork),y=(v.normalizeArtwork,v.normalizeArtworkForInsertion),x=System.get("utils/dom"),_=x.closest,S=x.parseSVG,w=x.registerElement,C=x.createElement,E=x.createSVGMatrix,P=x.createSVGPoint,L=(x.createSVGRect,x.isTransformableElement),T=x.normalizeWhitespace,A=.39,k=25600,O=20,M=window.screen.width,j=window.screen.height,R={childList:!0,attributes:!0,characterData:!0,subtree:!0,attributeOldValue:!1,characterDataOldValue:!1},I=[[-3,-3],[-2,-3],[-1,-3],[0,-3],[1,-3],[2,-3],[3,-3],[-3,-2],[-2,-2],[-1,-2],[0,-2],[1,-2],[2,-2],[3,-2],[-3,-1],[-2,-1],[-1,-1],[0,-1],[1,-1],[2,-1],[3,-1],[-3,0],[-2,0],[-1,0],[0,0],[1,0],[2,0],[3,0],[-3,1],[-2,1],[-1,1],[0,1],[1,1],[2,1],[3,1],[-3,2],[-2,2],[-1,2],[0,2],[1,2],[2,2],[3,2],[-3,3],[-2,3],[-1,3],[0,3],[1,3],[2,3],[3,3]],B='\n  <style>@import url("stylesheets/bx-canvas.css");</style>\n\n  <svg>\n    <defs>\n      <filter id="grippie-drop-shadow" width="100" height="100">\n        <feGaussianBlur in="SourceAlpha" result="blur-out" stdDeviation="1"/>\n        <feOffset in="blur-out" result="the-shadow" dx="1" dy="1"/>\n        <feBlend in="SourceGraphic" in2="the-shadow" mode="normal"/>\n      </filter>\n    </defs>\n\n    <text title="Dummy text to work around DOM text selection bug" x="99999" y="99999">.</text>\n\n    <g id="content">\n      <polygon\n        id="background"\n        fill="white"\n        points="-10000000,-10000000 20000000,0 20000000,20000000, 0,20000000"/>\n      <g id="master-artboard" is="bx-masterartboard"></g>\n    </g>\n\n    <g id="huds">\n      <g id="viewbox-hud" is="bx-viewboxhud"></g>\n      <g id="outlines-hud" is="bx-outlineshud"></g>\n      <g id="transform-hud" is="bx-transformhud"></g>\n      <g id="rect-hud" is="bx-recthud"></g>\n      <g id="ellipse-hud" is="bx-ellipsehud"></g>\n      <g id="paths-edit-hud" is="bx-pathsedithud"></g>\n      <g id="selected-text-range-hud" is="bx-selectedtextrangehud"></g>\n      <g id="linear-gradient-fill-hud" is="bx-lineargradienthud" context="fill"></g>\n      <g id="linear-gradient-stroke-hud" is="bx-lineargradienthud" context="stroke"></g>\n      <g id="radial-gradient-fill-hud" is="bx-radialgradienthud" context="fill"></g>\n      <g id="radial-gradient-stroke-hud" is="bx-radialgradienthud" context="stroke"></g>\n      <g id="rubber-band-hud" is="bx-rubberbandhud"></g>\n      <g id="draw-cubic-segs-hud" is="bx-cubicsegsdrawhud"></g>\n      <g id="draw-quad-segs-hud" is="bx-quadsegsdrawhud"></g>\n      <g id="draw-freehand-segs-hud" is="bx-freehandsegsdrawhud"></g>\n      <g id="viewbox-edit-hud" is="bx-viewboxedithud"></g>\n    </g>\n  </svg>\n\n  <bx-contextmenu id="context-menu">\n    <bx-menu>\n      <bx-menuitem commandid="cut"></bx-menuitem>\n      <bx-menuitem commandid="copy"></bx-menuitem>\n      <bx-menuitem commandid="paste"></bx-menuitem>\n      <bx-menuitem commandid="duplicate"></bx-menuitem>\n      <bx-menuitem commandid="delete"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="raise"></bx-menuitem>\n      <bx-menuitem commandid="lower"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="group"></bx-menuitem>\n      <bx-menuitem commandid="ungroup"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="editSymbol"></bx-menuitem>\n    </bx-menu>\n  </bx-contextmenu>\n',N=function(){$traceurRuntime.defaultSuperCall(this,V.prototype,arguments)
},V=N;$traceurRuntime.createClass(N,{createdCallback:function(){var e=this;this.innerHTML=B,this._svg=this.querySelector("svg"),this._content=this.querySelector("g#content"),this._masterArtboard=this.querySelector("g#master-artboard"),this._contextMenu=this.querySelector("#context-menu"),this._huds=this.querySelector("g#huds"),this._dropShadowFeBlur=this.querySelector("filter").children[0],this._dropShadowFeOffset=this.querySelector("filter").children[1],this._undoManager=new t(this._content),this._svg.setAttribute("width",M+"px"),this._svg.setAttribute("height",j+"px"),this._svg.pauseAnimations(),this._scrollX=0,this._scrollY=0,this._zoom=100,this._selectedElements=[],this._selectedTextRange=null,this._currentContainer=null,this._hasPointer=!1;
for(var n,i=this,r=function(){var t=n.value;u(i,t.id.toCamelCase(),{get:function(){return t
}})},o=this._huds.children[Symbol.iterator]();!(n=o.next()).done;)r();this.enableHud("viewbox-hud");
var s=new MutationObserver(function(t){for(var n,i,r=t[Symbol.iterator]();!(i=r.next()).done;)n=i.value,e._onContentMutation(n)
});s.observe(this._content,R),this._contextMenu.validateMenu=function(t){return e._validateContextMenu(t)
},this.addEventListener("mousewheel",function(t){e._onMouseWheel(t)}),this.addEventListener("click",function(t){t.target.closest("a")&&t.preventDefault()
}),this.addEventListener("scroll",function(){e._onScroll()}),this.addEventListener("dragover",function(t){t.preventDefault()
}),this.addEventListener("drop",function(t){e._onDrop(t)}),this._undoManager.addEventListener("undo",function(t){e._onUndoOrRedo(t)
}),this._undoManager.addEventListener("redo",function(t){e._onUndoOrRedo(t)}),this._undoManager.addEventListener("positionchange",function(t){app.bridge.postMessage("setChangeCounter",t.detail)
}),this.addEventListener("mouseenter",function(){e._hasPointer=!0}),this.addEventListener("mouseleave",function(){e._hasPointer=!1
})},get zoom(){return this._zoom},set zoom(t){throw new Error("zoom property is read-only")
},get scale(){return this._zoom/100},set scale(t){throw new Error("scale property is read-only")
},get undoManager(){return this._undoManager},set undoManager(t){throw new Error("undoManager property is read-only")
},get selectedElements(){return l($traceurRuntime.spread(this._selectedElements))
},set selectedElements(t){this._selectedElements=t,this.dispatchEvent(new CustomEvent("selectedelementschange"))
},get selectedTextRange(){return this._selectedTextRange?this._selectedTextRange:null
},set selectedTextRange(t){this._selectedTextRange=t?t:null,this.dispatchEvent(new CustomEvent("selectedtextrangechange"))
},get currentContainer(){return this._currentContainer},set currentContainer(t){this._currentContainer=t
},get content(){return this._content},set content(t){throw new Error("content property is read-only")
},get masterArtboard(){return this._masterArtboard},set masterArtboard(t){throw new Error("masterArtboard property is read-only")
},get slaveArtboard(){return this._content.children.length>2?this._content.lastElementChild:null
},set slaveArtboard(t){throw new Error("slaveArtboard property is read-only")},get currentArtboard(){return this._content.lastElementChild
},set currentArtboard(t){throw new Error("currentArtboard property is read-only")
},get defs(){return this.masterArtboard.querySelector("defs")},set defs(t){throw new Error("defs property is read-only")
},get huds(){return this._huds},set huds(t){throw new Error("huds property is read-only")
},get hasPointer(){return this._hasPointer},set hasPointer(t){throw new Error("hasPointer property is read-only")
},enableHud:function(t){for(var e,n,i=this._huds.children[Symbol.iterator]();!(n=i.next()).done;)e=n.value,e.id===t&&e.hasAttribute("enabled")===!1&&(e.setAttribute("enabled",""),e.enabledCallback&&e.enabledCallback())
},disableHud:function(t){for(var e,n,i=this._huds.children[Symbol.iterator]();!(n=i.next()).done;)e=n.value,e.id===t&&e.hasAttribute("enabled")===!0&&(e.removeAttribute("enabled"),e.disabledCallback&&e.disabledCallback())
},loadArtwork:function(t){var e;this.masterArtboard.loadArtwork(t);for(var n,i=this._content.children[Symbol.iterator]();!(n=i.next()).done;)e=n.value,"master-artboard"!==e.id&&"background"!==e.id&&e.remove();
this.selectedElements=[],this.selectedTextRange=null,this.currentContainer=null,this.undoManager.clear(),this.canZoomToViewBox()?this.zoomToCurrentArtboardViewBox():this.zoomToFitAll()
},extractArtwork:function(){var t,e,n=this.masterArtboard.extractArtwork();return"symbol-artboard"===this.currentArtboard.id&&(t=n.querySelector("#"+this.currentArtboard.symbolID),e=this.currentArtboard.extractSymbol(),t.replace(e)),n
},extractArtworkForSelectedElements:function(){for(var t,n,i,r,o,s,a,l,u=p(this.selectedElements),c=this._getIdsReferencedBySelectedElements(),m=[],f=c[Symbol.iterator]();!(l=f.next()).done;)t=l.value,n=this.currentArtboard.querySelector("#"+t),n||this.currentArtboard===this.masterArtboard||(n=this.masterArtboard.querySelector("#"+t)),n&&m.push(n);
m=m.filter(function(t){for(var e,n,i,r=u[Symbol.iterator]();!(i=r.next()).done;)if(e=i.value,e.contains(t)||e===t)return!1;
for(var o,s=m[Symbol.iterator]();!(o=s.next()).done;)if(n=o.value,n.contains(t)&&n!==t)return!1;
return!0});for(var g,v=C("svg:svg"),b=C("svg:defs"),y=m[Symbol.iterator]();!(g=y.next()).done;)i=g.value,i.closest("defs")?b.append(i.cloneNode(!0)):v.append(i);
b.children.length>0&&v.append(b);for(var x,_=u[Symbol.iterator]();!(x=_.next()).done;)r=x.value,o=r.getTransformToElement(this.currentArtboard),s=r.cloneNode(!0),s.setAttribute("transform",o),v.append(s);
var S=function(){for(var t,n,i=0,r=[],o=u[Symbol.iterator]();!(n=o.next()).done;)t=n.value,r[i++]=e(t);
return r}(),w=d(S);w=h(w,this.currentArtboard.getCTM().inverse());for(var E,P=["x","y","width","height"][Symbol.iterator]();!(E=P.next()).done;)a=E.value,v.viewBox.baseVal[a]=w[a];
return v.setAttribute("width",w.width),v.setAttribute("height",w.height),T(v),v},insertArtwork:function(t){var n,i,r,o,s,a,l,u,c,h,p,m,f,g,v=void 0!==arguments[1]?arguments[1]:"canvasCenter";
y(t,this.extractArtwork());for(var b,x=this.currentContainer||this.currentArtboard,_=[],S=$traceurRuntime.spread(t.children)[Symbol.iterator]();!(b=S.next()).done;)if(n=b.value,L(n))i=x.getTransformToElement(this.currentArtboard),r=E(n.transform.baseVal.consolidate().matrix),o=E(),o.multiplyBy(i.inverse()),o.multiplyBy(r),o.isIdentity()?n.removeAttribute("transform"):n.setAttribute("transform",o.toString()),x.append(n),L(n)&&_.push(n);
else if("defs"===n.localName)for(var w,C=$traceurRuntime.spread(n.children)[Symbol.iterator]();!(w=C.next()).done;)s=w.value,this.defs.append(s);
else x.append(n);if("original"!==v){a="canvasCenter"===v?P(this.clientLeft+this.clientWidth/2,this.clientTop+this.clientHeight/2):P(app.mouseClientX,app.mouseClientY),l=function(){for(var t,n,i=0,r=[],o=_[Symbol.iterator]();!(n=o.next()).done;)t=n.value,r[i++]=e(t);
return r}(),l=l.filter(function(t){return t.width>0||t.height>0}),u=d(l),c=a.x-(u.x+u.width/2),h=a.y-(u.y+u.height/2);
for(var T,A=_[Symbol.iterator]();!(T=A.next()).done;)p=T.value,m=p.getScreenCTM(),f=m.inverse(),g=E(p.transform.baseVal.consolidate().matrix),g.multiplyBy(f),g.translateBy(c,h),g.multiplyBy(m),p.setAttribute("transform",g.toString())
}this.selectedElements=_},insertBitmap:function(t){var e=this;s(t,function(n,i){var r=C("svg:image");
r.setAttributeNS(g,"xlink:href",t),r.setAttribute("width",n),r.setAttribute("height",i);
var o=e.currentContainer||e.currentArtboard,s=o.getScreenCTM().inverse(),a=P(app.mouseClientX,app.mouseClientY),l=a.matrixTransform(s);
o.append(r);var u=r.getBBox();r.setAttribute("x",l.x-u.width/2),r.setAttribute("y",l.y-u.height/2),e.selectedElements=[r]
})},editSymbol:function(t){var e,n;if("symbol-artboard"!==this.currentArtboard.id||this.currentArtboard.symbolID!==t){var i=this.masterArtboard.querySelector("#"+t);
if(null!==i){this.undoManager.checkpoint("Edit Symbol"),"symbol-artboard"===this.currentArtboard.id&&(e=this.masterArtboard.querySelector("#"+this.currentArtboard.symbolID),n=this.currentArtboard.extractSymbol(),e.replace(n),this.currentArtboard.remove());
var r=S('<g id="symbol-artboard" is="bx-symbolartboard"></g>');this._content.append(r),r.loadSymbol(i),this.currentContainer=null,this.selectedElements=[],this.selectedTextRange=null,this.canZoomToViewBox()?this.zoomToCurrentArtboardViewBox():this.zoomToFitAll()
}}},editSymbolEnd:function(){var t,e,n,i;if("symbol-artboard"===this.currentArtboard.id){this.undoManager.checkpoint("Edit Symbol"),t=this.currentArtboard.symbolID,e=this.masterArtboard.querySelector("#"+t),n=this.currentArtboard.extractSymbol(),e.replace(n),this.currentArtboard.remove();
for(var r,o=this.masterArtboard.querySelectorAll("use")[Symbol.iterator]();!(r=o.next()).done;)i=r.value,i.href.baseVal=i.href.baseVal
}},zoomToFitAll:function(){var t=this.currentArtboard.getBBox();this._zoomToArea(t.x,t.y,t.width,t.height,30)
},zoomToCurrentArtboardViewBox:function(){this._zoomToArea(this.currentArtboard.viewBoxX,this.currentArtboard.viewBoxY,this.currentArtboard.viewBoxWidth,this.currentArtboard.viewBoxHeight,30)
},zoomToCurrentArtboardViewBoxWidth:function(){this._zoomToArea(this.currentArtboard.viewBoxX,this.currentArtboard.viewBoxY+this.currentArtboard.viewBoxHeight/2,this.currentArtboard.viewBoxWidth,0,30)
},zoomToCurrentArtboardViewBoxHeight:function(){this._zoomToArea(this.currentArtboard.viewBoxX+this.currentArtboard.viewBoxWidth/2,this.currentArtboard.viewBoxY,0,this.currentArtboard.viewBoxHeight,30)
},canZoomToViewBox:function(){return 0!==this.currentArtboard.viewBoxWidth&&0!==this.currentArtboard.viewBoxHeight
},_zoomToArea:function(t,e,n,i){var s=void 0!==arguments[4]?arguments[4]:0,a={width:window.innerWidth,height:window.innerHeight},l=100*o(a.width/n,a.height/i);
s=100*s/l,l=100*o(a.width/(n+s),a.height/(i+s)),l=r(l,A,k,3),this._zoom=l;var u=a.width/this.scale,c=a.height/this.scale,h=t-(u-n)/2,d=e-(c-i)/2;
this._scrollX=h,this._scrollY=d,this._svg.viewBox.baseVal.width=M/this.scale,this._svg.viewBox.baseVal.height=j/this.scale,this._svg.viewBox.baseVal.x=this._scrollX,this._svg.viewBox.baseVal.y=this._scrollY,this._updateDropShadow(),this.dispatchEvent(new CustomEvent("zoomchange"))
},selectAll:function(){var t,e,n,i;if(this.selectedTextRange)t=_(this.selectedTextRange.startContainer,"text"),e=new Range,e.selectNodeContents(t),this.selectedTextRange=e;
else{n=[];for(var r,o=this.currentArtboard.children[Symbol.iterator]();!(r=o.next()).done;)i=r.value,L(i)&&n.push(i);
this.selectedElements=$traceurRuntime.spread(n)}},selectNextElement:function(){console.log("@todo: select next element in container")
},grabColor:function(t){var e=this,n=this._svg.cloneNode(!0),i=S('\n      <rect\n        x="'+this.currentArtboard.viewBoxX+'"\n        y="'+this.currentArtboard.viewBoxY+'"\n        width="'+this.currentArtboard.viewBoxWidth+'"\n        height="'+this.currentArtboard.viewBoxHeight+'"\n        style="fill: none; stroke: #646464; stroke-width: 1; vector-effect: non-scaling-stroke;">\n      </rect>\n    ');
n.appendChild(i),n.setAttribute("xmlns",f),n.setAttribute("xmlns:xlink",g);var o=new Blob([n.outerHTML],{type:"image/svg+xml;charset=utf-8"}),s=URL.createObjectURL(o),a=new Image;
a.src=s,a.addEventListener("load",function(){var n=document.createElement("canvas");
n.width=e._svg.clientWidth,n.height=e._svg.clientHeight,n.setAttribute("style","\n        position: absolute;\n        top: "+e._svg.offsetTop+"px;\n        left: "+e._svg.offsetLeft+"px;\n        background: white;\n      ");
var i=n.getContext("2d");i.fillStyle="transparent",i.fillRect(0,0,1e3,1e3),i.drawImage(a,0,0),e.after(n);
var o,l,u,c;n.addEventListener("mouseenter",o=function(){c=app.registerCursor("crosshair",0)
}),n.addEventListener("mouseleave",l=function(){app.unregisterCursor(c)}),n.addEventListener("click",u=function(a){n.removeEventListener("click",u),n.removeEventListener("mouseenter",o),n.removeEventListener("mouseleave",l),app.unregisterCursor(c),n.remove();
var h=a.clientX-e._svg.offsetLeft,d=a.clientY-e._svg.offsetTop,p=e._svg.clientWidth,m=e._svg.clientHeight,f=i.getImageData(h,d,p,m),g=f.data[0],v=f.data[1],b=f.data[2],y=r(f.data[3]/255,0,1,2),x="rgba("+g+", "+v+", "+b+", "+y+")";
URL.revokeObjectURL(s),t(x)})})},getHitElements:function(t,e){for(var n,i,r,o,s,a=[],l=I[Symbol.iterator]();!(s=l.next()).done;)n=s.value,i=n[0],r=n[1],o=document.elementFromPoint(t+i,e+r),o&&(("tspan"===o.localName||"textPath"===o.localName)&&(o=_(o,"text")),a.includes(o)||this!==o&&!this.contains(o)||a.push(o));
return p(a)},generateUniqueID:function(t){for(var e,n=void 0!==arguments[1]?arguments[1]:null,i=0;;)if(i+=1,e=t+"-"+i,!this._content.querySelector("#"+e)){if(!n)return e;
if(!n.querySelector("#"+e))return e}},pathDataChangeCallback:function(t,e){var n={type:"attributes",target:t,addedNodes:[],removedNodes:[],previousSibling:null,nextSibling:null,attributeName:"d",oldValue:e,newValue:t.getAttribute("d")};
this._onContentMutation(n),this.undoManager._onDOMTransaction(n)},_onContentMutation:function(t){this.dispatchEvent(new CustomEvent("contentmutation",{detail:t})),"childList"===t.type&&t.target===this._content&&(this.canZoomToViewBox()?this.zoomToCurrentArtboardViewBox():this.zoomToFitAll())
},_onMouseWheel:function(t){var e,n,i,o,s,a=r(t.wheelDeltaX,-O,O,1),l=r(t.wheelDeltaY,-O,O,1);
!t.metaKey||t.altKey||t.shiftKey?(this._scrollX=this._scrollX-a/this.scale,this._scrollY=this._scrollY-l/this.scale,this._svg.viewBox.baseVal.width=M/this.scale,this._svg.viewBox.baseVal.height=j/this.scale,this._svg.viewBox.baseVal.x=this._scrollX,this._svg.viewBox.baseVal.y=this._scrollY):(e=l/100,n=this._svg.getScreenCTM(),i=n.inverse(),o=P(t.clientX,t.clientY),s=o.matrixTransform(i),this._zoom=r(this._zoom+this._zoom*e,A,k,3),this._scrollX=s.x-o.x/this.scale,this._scrollY=s.y-o.y/this.scale,this._svg.viewBox.baseVal.width=M/this.scale,this._svg.viewBox.baseVal.height=j/this.scale,this._svg.viewBox.baseVal.x=this._scrollX,this._svg.viewBox.baseVal.y=this._scrollY,this._updateDropShadow(),this.dispatchEvent(new CustomEvent("zoomchange")))
},_onUndoOrRedo:function(t){for(var e,n,i,r,o,s=this,a=t.detail,l=a.addedNodes,u=a.removedNodes,c=a.modifiedNodes,h=new Set(this.selectedElements),d=l[Symbol.iterator]();!(o=d.next()).done;)e=o.value,h.add(e);
for(var p,m=c[Symbol.iterator]();!(p=m.next()).done;)n=p.value,h.add(n);for(var f,g=u[Symbol.iterator]();!(f=g.next()).done;)i=f.value,h.delete(i);
h=$traceurRuntime.spread(h).filter(function(t){return L(t)&&s.currentArtboard.contains(t)&&s.currentArtboard!==t
}),this.currentContainer=null,this.selectedElements=h;for(var v,b=this.currentArtboard.querySelectorAll("use")[Symbol.iterator]();!(v=b.next()).done;)r=v.value,r.href.baseVal=r.href.baseVal
},_onDrop:function(t){var e,n,i,r=this;t.preventDefault();for(var o,s=t.dataTransfer.files,a=s[Symbol.iterator]();!(o=a.next()).done;)e=o.value,"image/svg+xml"===e.type&&(n=new FileReader,n.readAsText(e,"UTF-8"),n.addEventListener("load",function(t){r.undoManager.checkpoint("Paste");
var e=b(t.target.result);r.insertArtwork(e)})),("image/jpeg"===e.type||"image/png"===e.type)&&(i=new FileReader,i.readAsDataURL(e),i.addEventListener("load",function(t){r.undoManager.checkpoint("Paste");
var e=t.target.result;r.insertBitmap(e)}))},_onScroll:function(){this.scrollTop=0,this.scrollLeft=0,this.scrollIntoView()
},_updateDropShadow:function(){this._dropShadowFeOffset.dx.baseVal=1/this.scale,this._dropShadowFeOffset.dy.baseVal=1/this.scale,this._dropShadowFeBlur.stdDeviationX.baseVal=1/this.scale,this._dropShadowFeBlur.stdDeviationY.baseVal=1/this.scale
},_getIdsReferencedBySelectedElements:function(){for(var t,e,n=this,i=p(this.selectedElements),r=new Set,o=["fill","stroke","filter","clip-path","mask","marker-mid","marker-start","marker-end"],s=function(t){for(var e,i,a,l,u,c,h,d=document.createNodeIterator(t,NodeFilter.SHOW_ELEMENT),p=null;p=d.nextNode();){e=getComputedStyle(p);
for(var m,f=o[Symbol.iterator]();!(m=f.next()).done;)i=m.value,a=e.getPropertyValue(i),a&&a.startsWith("url(#")&&(l=a.substring(5,a.length-1),r.has(l)===!1&&(u=n.currentArtboard.querySelector("#"+l),u||n.currentArtboard===n.masterArtboard||(u=n.masterArtboard.querySelector("#"+l)),u&&s(u)),r.add(l));
p.href&&"#"===p.href.baseVal[0]&&(c=p.href.baseVal.substring(1,p.href.baseVal.length),r.has(c)===!1&&(h=n.currentArtboard.querySelector("#"+c),h||n.currentArtboard===n.masterArtboard||(h=n.masterArtboard.querySelector("#"+c)),h&&s(h)),r.add(c))
}},a=i[Symbol.iterator]();!(e=a.next()).done;)t=e.value,s(t);return $traceurRuntime.spread(r)
},_validateContextMenu:function(t){for(var e,i,r,o=t.children[Symbol.iterator]();!(r=o.next()).done;)e=r.value,e.commandID&&(i=app.commands[e.commandID],i&&(e.label=i.label,e.shortcut=i.shortcut?n(i.shortcut):"",e.state=i.state?i.state():!1,e.disabled=i.enabled?!i.enabled():!1))
}},{},HTMLElement);var D=w("bx-canvas",N);return{get MIN_ZOOM(){return A},get MAX_ZOOM(){return k
},get default(){return D}}}),System.register("elements/bx-checkbox",[],function(){"use strict";
System.get("elements/bx-icon");var t=System.get("utils/dom").registerElement,e='\n  <style>@import url("stylesheets/bx-checkbox.css");</style>\n\n  <main>\n    <bx-icon></bx-icon>\n    <label></label>\n  </main>\n',n=function(){$traceurRuntime.defaultSuperCall(this,i.prototype,arguments)
},i=n;$traceurRuntime.createClass(n,{createdCallback:function(){var t=this;this.createShadowRoot(),this.shadowRoot.innerHTML=e,this._iconElement=this.shadowRoot.querySelector("bx-icon"),this._labelElement=this.shadowRoot.querySelector("label"),this._onLabelChange(),this._onCheckedChange(),this.tabIndex=0,this.addEventListener("click",function(){t.checked=!t.checked,t.dispatchEvent(new CustomEvent("change"))
}),this.addEventListener("keydown",function(e){"Enter"===e.keyIdentifier&&(t.checked=!t.checked)
})},attributeChangedCallback:function(t,e,n){e!==n&&("label"===t?this._onLabelChange():"checked"===t&&this._onCheckedChange())
},get label(){return this.hasAttribute("label")?this.getAttribute("label"):""},set label(t){this.setAttribute("label",t)
},get checked(){return this.hasAttribute("checked")},set checked(t){t?this.setAttribute("checked",""):this.removeAttribute("checked")
},get mixed(){return this.hasAttribute("mixed")},set mixed(t){t?this.setAttribute("mixed",""):this.removeAttribute("mixed")
},_onLabelChange:function(){this._labelElement.textContent=this.label},_onCheckedChange:function(){this.checked?(this.setAttribute("checked",""),this._iconElement.setAttribute("name","checkbox-on")):(this.removeAttribute("checked"),this._iconElement.setAttribute("name","checkbox-off"))
}},{},HTMLElement);var r=t("bx-checkbox",n);return{get default(){return r}}}),System.register("elements/bx-colorpicker",[],function(){"use strict";
System.get("elements/bx-alphaslider"),System.get("elements/bx-hueslider"),System.get("elements/bx-satlightslider"),System.get("elements/bx-textinput"),System.get("elements/bx-button");
var t=System.get("classes/color").default,e=System.get("utils/color"),n=e.isValidColorString,i=e.parseColor,r=System.get("utils/dom").registerElement,o="hex",s='\n<style>\n  @import url("stylesheets/bx-colorpicker.css");\n</style>\n\n<main>\n  <bx-hueslider></bx-hueslider>\n  <bx-satlightslider></bx-satlightslider>\n  <bx-alphaslider></bx-alphaslider>\n\n  <div>\n    <bx-textinput id="color" title="Color"></bx-textinput>\n\n    <bx-button\n      title="Grab color"\n      id="grab-color"\n      icon="grab-color"\n      iconsize="23"\n      skin="iconic">\n    </bx-button>\n  </div>\n</main>\n',a=function(){$traceurRuntime.defaultSuperCall(this,l.prototype,arguments)
},l=a;$traceurRuntime.createClass(a,{createdCallback:function(){var t=this;this.createShadowRoot(),this.shadowRoot.innerHTML=s,this._hueSlider=this.shadowRoot.querySelector("bx-hueslider"),this._satlightSlider=this.shadowRoot.querySelector("bx-satlightslider"),this._alphaSlider=this.shadowRoot.querySelector("bx-alphaslider"),this._colorInput=this.shadowRoot.querySelector("bx-textinput"),this._grabColorButton=this.shadowRoot.querySelector("bx-button"),this._colorInput.validate=function(t){return n(t)
},this._isDraggingSlider=!1,this._hueSlider.addEventListener("markerdragstart",function(){return t._onHueSliderDragStart()
}),this._satlightSlider.addEventListener("markerdragstart",function(){return t._onSatlightSliderDragStart()
}),this._alphaSlider.addEventListener("markerdragstart",function(){return t._onAlphaSliderDragStart()
}),this._grabColorButton.addEventListener("click",function(){return t._onGrabColorButtonClick()
}),this._colorInput.addEventListener("change",function(){return t._onColorInputChange(event)
}),this._onColorChange()},attributeChangedCallback:function(t,e,n){e!==n&&"color"===t&&this._onColorChange()
},get color(){return this.hasAttribute("color")?this.getAttribute("color"):"#ffffff"
},set color(t){this.setAttribute("color",t)},get mixed(){this._colorInput.mixed},set mixed(t){this._colorInput.mixed=t
},_onHueSliderDragStart:function(){var t=this;this._isDraggingSlider=!0;var e,n,r=i(this.color,"hsla");
this.dispatchEvent(new CustomEvent("changestart")),this._hueSlider.addEventListener("markerdrag",e=function(){r.h=t._hueSlider.hue,t.color=r.toString("rgba"),t._satlightSlider.hue=t._hueSlider.hue,t._alphaSlider.color=t.color,t._colorInput.value=r.toString(o),t.dispatchEvent(new CustomEvent("change"))
}),this._hueSlider.addEventListener("markerdragend",n=function(){t._hueSlider.removeEventListener("markerdrag",e),t._hueSlider.removeEventListener("markerdragend",n),t._isDraggingSlider=!1,t.dispatchEvent(new CustomEvent("changeend"))
})},_onSatlightSliderDragStart:function(){var e=this;this._isDraggingSlider=!0;var n,i,r=new t(this._hueSlider.hue,50,50,this._alphaSlider.alpha,"hsla");
this.dispatchEvent(new CustomEvent("changestart")),this._satlightSlider.addEventListener("markerdrag",n=function(){r.s=e._satlightSlider.saturation,r.l=e._satlightSlider.lightness,e.color=r.toString("rgba"),e._alphaSlider.color=e.color,e._colorInput.value=r.toString(o),e.dispatchEvent(new CustomEvent("change"))
}),this._satlightSlider.addEventListener("markerdragend",i=function(){e._satlightSlider.removeEventListener("markerdrag",n),e._satlightSlider.removeEventListener("markerdragend",i),e._isDraggingSlider=!1,e.dispatchEvent(new CustomEvent("changeend"))
})},_onAlphaSliderDragStart:function(){var t=this;this._isDraggingSlider=!0;var e,n,r=i(this.color,"hsla");
this.dispatchEvent(new CustomEvent("changestart")),this._alphaSlider.addEventListener("markerdrag",e=function(e){r.a=e.detail,t.color=r.toString("rgba"),t._colorInput.value=r.toString(o),t.dispatchEvent(new CustomEvent("change"))
}),this._alphaSlider.addEventListener("markerdragend",n=function(){t._alphaSlider.removeEventListener("markerdrag",e),t._alphaSlider.removeEventListener("markerdragend",n),t._isDraggingSlider=!1,t.dispatchEvent(new CustomEvent("changeend"))
})},_onColorInputChange:function(){this.dispatchEvent(new CustomEvent("changestart")),this.color=this._colorInput.value,this.dispatchEvent(new CustomEvent("change")),this.dispatchEvent(new CustomEvent("changeend"))
},_onColorChange:function(){var t;this._isDraggingSlider||null===this.color||(t=i(this.color,"hsla"),this._hueSlider.hue=t.h,this._satlightSlider.hue=t.h,this._satlightSlider.saturation=t.s,this._satlightSlider.lightness=t.l,this._alphaSlider.color=this.color,this._alphaSlider.alpha=t.a,this._colorInput.value=t.toString(o))
},_onGrabColorButtonClick:function(){var t=this;this._grabColorButton.pressed=!0,app.canvas.grabColor(function(e){t._grabColorButton.pressed=!1,t.dispatchEvent(new CustomEvent("changestart")),t.color=e,t.dispatchEvent(new CustomEvent("change")),t.dispatchEvent(new CustomEvent("changeend"))
})}},{},HTMLElement);var u=r("bx-colorpicker",a);return{get default(){return u}}}),System.register("elements/bx-colorpreview",[],function(){"use strict";
var t=System.get("utils/dom").registerElement,e='\n<style>\n  @import url("stylesheets/bx-colorpreview.css");\n</style>\n\n<main>\n  <div id="left"></div>\n  <div id="right"></div>\n</main>\n',n=function(){$traceurRuntime.defaultSuperCall(this,i.prototype,arguments)
},i=n;$traceurRuntime.createClass(n,{createdCallback:function(){this.title="Color Preview",this.createShadowRoot(),this.shadowRoot.innerHTML=e,this._leftColorPreview=this.shadowRoot.querySelector("#left"),this._rightColorPreview=this.shadowRoot.querySelector("#right"),this._onLeftChange(),this._onRightChange()
},attributeChangedCallback:function(t,e,n){e!==n&&("left"===t?this._onLeftChange():"right"===t&&this._onRightChange())
},get left(){return this.hasAttribute("left")?this.getAttribute("left"):"#000000"
},set left(t){this.setAttribute("left",t)},get right(){return this.hasAttribute("right")?this.getAttribute("right"):"#000000"
},set right(t){this.setAttribute("right",t)},_onLeftChange:function(){this._leftColorPreview.style.backgroundColor=this.left
},_onRightChange:function(){this._rightColorPreview.style.backgroundColor=this.right
}},{},HTMLElement);var r=t("bx-colorpreview",n);return{get default(){return r}}}),System.register("elements/bx-compositingcontrols",[],function(){"use strict";
System.get("elements/bx-button"),System.get("elements/bx-checkbox"),System.get("elements/bx-select");
var t=System.get("utils/dom"),e=(t.createElement,t.createSVGMatrix,t.registerElement),n=System.get("utils/function").throttle,i=System.get("utils/math").round,r=(System.get("utils/paint").getDefFromURL,System.get("utils/relationship").queryStylableElements),o='\n<style>\n  @import url("stylesheets/controls.css");\n  @import url("stylesheets/bx-compositingcontrols.css");\n</style>\n\n<section id="opacity-section">\n  <h2>Opacity</h2>\n\n  <bx-slider\n    id="opacity-slider"\n    title="Opacity"\n    value="1"\n    min="0"\n    max="1"\n    precision="2">\n  </bx-slider>\n</section>\n\n<section id="blend-mode-section">\n  <h2>Blend Mode</h2>\n\n  <bx-select id="blend-mode-select" value="normal">\n    <bx-selectitem value="normal" label="Normal"></bx-selectitem>\n    <hr>\n    <bx-selectitem value="darken" label="Darken"></bx-selectitem>\n    <bx-selectitem value="multiply" label="Multiply"></bx-selectitem>\n    <bx-selectitem value="color-burn" label="Color Burn"></bx-selectitem>\n    <hr>\n    <bx-selectitem value="lighten" label="Lighten"></bx-selectitem>\n    <bx-selectitem value="screen" label="Screen"></bx-selectitem>\n    <bx-selectitem value="color-dodge" label="Color Dodge"></bx-selectitem>\n    <hr>\n    <bx-selectitem value="overlay" label="Overlay"></bx-selectitem>\n    <bx-selectitem value="soft-light" label="Soft Light"></bx-selectitem>\n    <bx-selectitem value="hard-light" label="Hard Light"></bx-selectitem>\n    <hr>\n    <bx-selectitem value="difference" label="Difference"></bx-selectitem>\n    <bx-selectitem value="exclusion" label="Exclusion"></bx-selectitem>\n    <hr>\n    <bx-selectitem value="hue" label="Hue"></bx-selectitem>\n    <bx-selectitem value="saturation" label="Saturation"></bx-selectitem>\n    <bx-selectitem value="color" label="Color"></bx-selectitem>\n    <bx-selectitem value="luminosity" label="Luminosity"></bx-selectitem>\n  </bx-select>\n\n  <bx-checkbox label="Isolate" id="isolate-checkbox"></bx-checkbox>\n</section>\n\n<section id="clip-section">\n  <h2>Clip</h2>\n\n  <div id="clip-buttons">\n    <bx-button\n      id="clip-button"\n      icon="set"\n      iconsize="25"\n      label="Clip"\n      skin="bordered">\n    </bx-button>\n\n    <bx-button\n      id="unclip-button"\n      icon="unset"\n      iconsize="25"\n      label="Unclip"\n      skin="bordered">\n    </bx-button>\n  </div>\n</section>\n\n<section id="mask-section">\n  <h2>Mask</h2>\n\n  <div id="mask-buttons">\n    <bx-button\n      id="mask-button"\n      icon="set"\n      iconsize="25"\n      label="Mask"\n      skin="bordered">\n    </bx-button>\n\n    <bx-button\n      id="unmask-button"\n      icon="unset"\n      iconsize="25"\n      label="Unmask"\n      skin="bordered">\n    </bx-button>\n  </div>\n</section>\n',s=function(){$traceurRuntime.defaultSuperCall(this,a.prototype,arguments)
},a=s;$traceurRuntime.createClass(s,{createdCallback:function(){var t=this;this.createShadowRoot(),this.shadowRoot.innerHTML=o,this._update$200ms=n(this._update,200,this),this._opacitySectionHeading=this.shadowRoot.querySelector("#opacity-section h2"),this._opacitySlider=this.shadowRoot.querySelector("#opacity-slider"),this._blendModeSectionHeading=this.shadowRoot.querySelector("#blend-mode-section h2"),this._blendModeSelect=this.shadowRoot.querySelector("#blend-mode-select"),this._isolateCheckbox=this.shadowRoot.querySelector("#isolate-checkbox"),this._clipSectionHeading=this.shadowRoot.querySelector("#clip-section h2"),this._clipButton=this.shadowRoot.querySelector("#clip-button"),this._unclipButton=this.shadowRoot.querySelector("#unclip-button"),this._maskSectionHeading=this.shadowRoot.querySelector("#mask-section h2"),this._maskButton=this.shadowRoot.querySelector("#mask-button"),this._unmaskButton=this.shadowRoot.querySelector("#unmask-button"),this._opacitySlider.addEventListener("changestart",function(){return t._onOpacitySliderChangeStart()
}),this._blendModeSelect.addEventListener("change",function(){return t._onBlendModeSelectChange()
}),this._isolateCheckbox.addEventListener("change",function(){return t._onIsolateCheckboxChange()
}),this._clipButton.addEventListener("click",function(e){return t._onClipButtonClick(e)
}),this._unclipButton.addEventListener("click",function(e){return t._onUnclipButtonClick(e)
}),this._maskButton.addEventListener("click",function(e){return t._onMaskButtonClick(e)
}),this._unmaskButton.addEventListener("click",function(e){return t._onUnmaskButtonClick(e)
})},enabledCallback:function(){var t=this;this._update(),app.canvas.addEventListener("selectedelementschange",this._selectedElementsChangeListener=function(){t._onSelectedElementsChange()
}),app.canvas.addEventListener("selectedtextrangechange",this._selectedTextRangeChangeListener=function(){t._onSelectedTextRangeChange()
}),app.canvas.addEventListener("contentmutation",this._contentMutationListener=function(e){t._onContentMutation(e.detail)
})},disabledCallback:function(){app.canvas.removeEventListener("selectedelementschange",this._selectedElementsChangeListener),app.canvas.removeEventListener("selectedtextrangechange",this._selectedTextRangeChangeListener),app.canvas.removeEventListener("contentmutation",this._contentMutationListener)
},_onSelectedElementsChange:function(){this._update$200ms()},_onSelectedTextRangeChange:function(){this._update$200ms()
},_onContentMutation:function(){this._update$200ms()},_onOpacitySliderChangeStart:function(){var t=this;
app.canvas.undoManager.checkpoint("Opacity");{var e,n,i=app.canvas.selectedElements,o=r("opacity",i);
o[0]||null}this._isChangingOpacitySlider=!0,this._opacitySlider.addEventListener("change",e=function(){for(var e,n,i=o[Symbol.iterator]();!(n=i.next()).done;)e=n.value,e.style.opacity=t._opacitySlider.value;
t._opacitySlider.mixed=!1}),this._opacitySlider.addEventListener("changeend",n=function(){t._opacitySlider.removeEventListener("change",e),t._opacitySlider.removeEventListener("changeend",n),t._isChangingOpacitySlider=!1
})},_onBlendModeSelectChange:function(){var t;app.canvas.undoManager.checkpoint("Blend mode");
for(var e,n=r("mix-blend-mode",app.canvas.selectedElements),i=n[Symbol.iterator]();!(e=i.next()).done;)t=e.value,t.style.mixBlendMode=this._blendModeSelect.value
},_onIsolateCheckboxChange:function(){var t;app.canvas.undoManager.checkpoint("Isolate");
for(var e,n=r("isolation",app.canvas.selectedElements),i=n[Symbol.iterator]();!(e=i.next()).done;)t=e.value,t.style.isolation=this._isolateCheckbox.checked?"isolate":"auto"
},_onClipButtonClick:function(t){0===t.button&&app.commands.clip.exec()},_onUnclipButtonClick:function(t){0===t.button&&app.commands.unclip.exec()
},_onMaskButtonClick:function(t){0===t.button&&app.commands.mask.exec()},_onUnmaskButtonClick:function(t){0===t.button&&app.commands.unmask.exec()
},_update:function(){this._updateOpacitySection(),this._updateBlendModeSection(),this._updateClipSection(),this._updateMaskSection()
},_updateOpacitySection:function(){var t,e,n,o;if(!this._isChangingOpacitySlider){var s=r("opacity",app.canvas.selectedElements),a=s[0]||null;
if(null===a)this._opacitySlider.value=1,this._opacitySlider.disabled=!0,this._opacitySlider.mixed=!1;
else{this._opacitySlider.disabled=!1,t=i(parseFloat(getComputedStyle(a).opacity),2),e=!1;
for(var l,u=s[Symbol.iterator]();!(l=u.next()).done;)n=l.value,n!==a&&(o=i(parseFloat(getComputedStyle(n).opacity),2),o!==t&&(e=!0));
this._opacitySlider.value=t,this._opacitySlider.mixed=e}this._opacitySectionHeading.disabled=this._opacitySlider.disabled
}},_updateBlendModeSection:function(){var t,e,n,i,o,s,a,l,u=r("mix-blend-mode",app.canvas.selectedElements),c=u[0]||null;
if(null===c)this._blendModeSelect.value="normal",this._blendModeSelect.disabled=!0,this._blendModeSelect.mixed=!1;
else{t=!1,e=getComputedStyle(c).mixBlendMode;for(var h,d=u[Symbol.iterator]();!(h=d.next()).done;)if(n=h.value,n!==c&&(i=getComputedStyle(n).mixBlendMode,i!==e)){t=!0;
break}this._blendModeSelect.value=getComputedStyle(c).mixBlendMode,this._blendModeSelect.disabled=!1,this._blendModeSelect.mixed=t
}if(null===c)this._isolateCheckbox.disabled=!0,this._isolateCheckbox.checked=!1,this._isolateCheckbox.mixed=!1;
else{o=getComputedStyle(c).isolation,s=!1;for(var p,m=u[Symbol.iterator]();!(p=m.next()).done;)if(a=p.value,a!==c&&(l=getComputedStyle(a).isolation,l!==o)){s=!0;
break}this._isolateCheckbox.disabled=!1,this._isolateCheckbox.checked="isolate"===o,this._isolateCheckbox.mixed=s
}this._blendModeSectionHeading.disabled=this._blendModeSelect.disabled&&this._isolateCheckbox.disabled
},_updateClipSection:function(){this._clipButton.disabled=!app.commands.clip.enabled(),this._unclipButton.disabled=!app.commands.unclip.enabled(),this._clipSectionHeading.disabled=this._clipButton.disabled&&this._unclipButton.disabled
},_updateMaskSection:function(){this._maskButton.disabled=!app.commands.mask.enabled(),this._unmaskButton.disabled=!app.commands.unmask.enabled(),this._maskSectionHeading.disabled=this._maskButton.disabled&&this._unmaskButton.disabled
}},{},HTMLElement);var l=e("bx-compositingcontrols",s);return{get default(){return l
}}}),System.register("elements/bx-contextmenu",[],function(){"use strict";var t=System.get("utils/dom").registerElement;
System.get("elements/bx-menu");var e=!1,n='\n  <style>@import url("stylesheets/bx-contextmenu.css");</style>\n  <div id="overlay"></div>\n  <content></content>\n',i=function(){$traceurRuntime.defaultSuperCall(this,r.prototype,arguments)
},r=i;$traceurRuntime.createClass(i,{createdCallback:function(){var t=this;this.createShadowRoot(),this.shadowRoot.innerHTML=n,this._menu=this.querySelector("bx-menu"),this._overlay=this.shadowRoot.querySelector("#overlay"),this._menu.addEventListener("menuopen",function(e){return t._onMenuOpen(e)
}),this._menu.addEventListener("menuclose",function(e){return t._onMenuClose(e)}),this._menu.addEventListener("menuitemclick",function(e){return t._onMenuItemClick(e)
}),this._overlay.addEventListener("mousedown",function(e){return t._onOverlayMouseDown(e)
}),e&&this.setAttribute("debug","")},attachedCallback:function(){var t=this;window.addEventListener("blur",this._windowBlurListener=function(){t._onWindowBlur(event)
}),window.addEventListener("resize",this._windowResizeListener=function(){t._onWindowResize(event)
}),this.parentNode.addEventListener("contextmenu",this._contextMenuListener=function(e){t._onContextMenu(e)
})},detachedCallback:function(){window.removeEventListener("blur",this._windowBlurListener),window.removeEventListener("resize",this._windowResizeListener),this.parentNode.removeEventListener("contextmenu",this._contextMenuListener)
},get target(){return this._target||null},set target(t){throw new Error("target property is read-only")
},validateMenu:function(){},_onContextMenu:function(t){t.preventDefault(),this._overlay.style.display="block",this._target=t.target,this._menu.openAtPosition(t.clientX,t.clientY)
},_onMenuOpen:function(t){this.validateMenu(t.detail)},_onMenuClose:function(t){t.detail===this._menu&&(this._overlay.style.display="none")
},_onMenuItemClick:function(t){this._menu.close();var e=t.detail;e.commandID&&app.execCommand(e.commandID)
},_onOverlayMouseDown:function(){this._menu.close(),event.preventDefault(),event.stopPropagation()
},_onWindowBlur:function(){e||this._menu.close()},_onWindowResize:function(){e||this._menu.close()
}},{},HTMLElement);var o=t("bx-contextmenu",i);return{get default(){return o}}}),System.register("elements/bx-cubicbeziertool",[],function(){"use strict";
var t=System.get("utils/dom").registerElement,e=function(){$traceurRuntime.defaultSuperCall(this,n.prototype,arguments)
},n=e;$traceurRuntime.createClass(e,{enabledCallback:function(){app.canvas.enableHud("outlines-hud"),app.canvas.enableHud("draw-cubic-segs-hud")
},disabledCallback:function(){app.canvas.disableHud("outlines-hud"),app.canvas.disableHud("draw-cubic-segs-hud")
}},{},HTMLElement);var i=t("bx-cubicbeziertool",e);return{get default(){return i}}
}),System.register("elements/bx-cubicsegsdrawhud",[],function(){"use strict";var t=System.get("classes/vector").default,e=System.get("utils/array").compare,n=System.get("utils/dom"),i=n.registerElement,r=n.createElement,o=n.createSVGPoint,s=System.get("utils/event").getShortcutForKeyboardEvent,a=System.get("utils/path"),l=a.cloneSeg,u=a.reversePath,c=a.createSeg,h=System.get("utils/relationship").getGraphicsElements,d=System.get("utils/transform").normalizeTransform;
System.get("elements/bx-cubicsegsketch");var p=10,m='\n  <style>@import url("stylesheets/bx-cubicsegsdrawhud.css");</style>\n  <g id="node-grippies"></g>\n  <g id="segsketch" is="bx-cubicsegsketch"></g>\n',f=function(){$traceurRuntime.defaultSuperCall(this,g.prototype,arguments)
},g=f;$traceurRuntime.createClass(f,{createdCallback:function(){this.createShadowRoot(),this.shadowRoot.innerHTML=m,this._nodeGrippies=this.shadowRoot.querySelector("#node-grippies"),this._segSketch=this.shadowRoot.querySelector("#segsketch")
},enabledCallback:function(){var t=this;this._mode="select",this._currentPath=null,window.addEventListener("keydown",this._keyDownListener=function(e){t._onKeyDown(e)
}),app.canvas.addEventListener("selectedelementschange",this._selectedElementsChangeListener=function(){t._onSelectedElementsChange()
}),app.canvas.addEventListener("zoomchange",this._zoomChangeListener=function(){t._onZoomChange()
}),app.canvas.addEventListener("contentmutation",this._contentMutationListener=function(e){t._onContentMutation(e)
}),app.canvas.content.addEventListener("mousedown",this._canvasMouseDownListener=function(e){t._onContentMouseDown(e)
}),this._nodeGrippies.addEventListener("mousedown",this._nodeGrippiesMouseDownListener=function(e){t._onNodeGrippieMouseDown(e)
}),this._onSelectedElementsChange()},disabledCallback:function(){window.removeEventListener("keydown",this._keyDownListener),app.canvas.removeEventListener("selectedelementschange",this._selectedElementsChangeListener),app.canvas.removeEventListener("zoomchange",this._zoomChangeListener),app.canvas.removeEventListener("contentmutation",this._contentMutationListener),app.canvas.content.removeEventListener("mousedown",this._canvasMouseDownListener),this._nodeGrippies.removeEventListener("mousedown",this._nodeGrippiesMouseDownListener),this._mode="select",this._currentPath=null,this._segSketch.hide()
},_onSelectedElementsChange:function(){this._updateNodeGrippies()},_onZoomChange:function(){this._updateNodeGrippiesSize()
},_onContentMutation:function(t){var e,n=t.detail;if("childList"===n.type)for(var i,r=n.removedNodes[Symbol.iterator]();!(i=r.next()).done;)e=i.value,(e===this._currentPath||e.contains(this._currentPath))&&(this._mode="select",this._currentPath=null,this._segSketch.hide(),this._updateNodeGrippies());
else(n.target===this._currentPath||n.target.contains(this._currentPath))&&this._updateNodeGrippies()
},_onContentMouseDown:function(e){var n,i,r=this,s=o(e.clientX,e.clientY),a=0;window.addEventListener("mousemove",n=function(e){var n=o(e.clientX,e.clientY),i=new t(s,n).length;
i>a&&(a=i)}),window.addEventListener("mouseup",i=function(t){window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",i),r._onContentClick(e,t),4>a&&r._onContentDirectClick(e,t)
})},_onContentClick:function(t){{var e,n,i,r,o,s=t;s.clientX,s.clientY}"draw-forward"===this._mode?(this._currentPath.pathSegList.length>1&&app.canvas.undoManager.checkpoint("Draw path segment"),e=c("C",this._segSketch.controlPoint1.x,this._segSketch.controlPoint1.y,this._segSketch.controlPoint2.x,this._segSketch.controlPoint2.y,this._segSketch.endPoint.x,this._segSketch.endPoint.y),n=this._currentPath.getAttribute("d"),this._currentPath.pathSegList.appendItem(e),app.canvas.pathDataChangeCallback(this._currentPath,n)):"draw-backward"===this._mode&&(app.canvas.undoManager.checkpoint("Draw path segment"),i=this._currentPath.getAttribute("d"),r=this._currentPath.pathSegList.getItem(0),r.x=this._segSketch.startPoint.x,r.y=this._segSketch.startPoint.y,o=c("C",this._segSketch.controlPoint1.x,this._segSketch.controlPoint1.y,this._segSketch.controlPoint2.x,this._segSketch.controlPoint2.y,this._segSketch.endPoint.x,this._segSketch.endPoint.y),this._currentPath.pathSegList.insertItemBefore(o,1),app.canvas.pathDataChangeCallback(this._currentPath,i))
},_onContentDirectClick:function(t){var e,n,i,s,a,l,u=t,c=u.clientX,h=u.clientY;"select"===this._mode&&(app.canvas.undoManager.checkpoint("Draw path segment"),e=r("svg:path"),e.style.stroke="black",e.style.fill="none",n=app.canvas.currentContainer||app.canvas.currentArtboard,n.append(e),i=e.getScreenCTM().inverse(),s=o(c,h).matrixTransform(i),a=s.x,l=s.y,e.setAttribute("d","M "+a+" "+l),app.canvas.selectedElements=$traceurRuntime.spread(app.canvas.selectedElements,[e]),this._mode="draw-forward",this._currentPath=e,this._segSketch.show(e,"end"))
},_onNodeGrippieMouseDown:function(t){var e,n,i=this,r=t.target;this._nodeGrippies.addEventListener("mouseup",e=function(t){i._nodeGrippies.removeEventListener("mouseup",e),window.removeEventListener("mouseup",n);
var o=t.target,s=i._onNodeGrippieClick(r,t);r!==o||s||i._onNodeGrippieDirectClick(r,t)
}),window.addEventListener("mouseup",n=function(t){i._nodeGrippies.removeEventListener("mouseup",e),window.removeEventListener("mouseup",n),i._onNodeGrippieClick(r,t)
})},_onNodeGrippieClick:function(t){var e,n,i,r,o,s,a,h,p,m,f,g,v,b,y,x,_,S,w,C,E,P;
if("select"!==this._mode){if(t.ownerPath===this._currentPath)return e=t.dataset.position,n=this._currentPath.pathSegList.getItem(0),i=this._currentPath.pathSegList.getItem(this._currentPath.pathSegList.length-1),r=this._currentPath,o=this._currentPath.getAttribute("d"),"draw-forward"===this._mode&&"start"===e?(app.canvas.undoManager.checkpoint("Draw path segment"),s=c("C",this._segSketch.controlPoint1.x,this._segSketch.controlPoint1.y,this._segSketch.controlPoint2.x,this._segSketch.controlPoint2.y,n.x,n.y),a=c("Z"),r.pathSegList.appendItem(s),r.pathSegList.appendItem(a),app.canvas.pathDataChangeCallback(r,o)):"draw-backward"===this._mode&&"end"===e&&(app.canvas.undoManager.checkpoint("Draw path segment"),h=c("C",this._segSketch.controlPoint1.x,this._segSketch.controlPoint1.y,this._segSketch.controlPoint2.x,this._segSketch.controlPoint2.y,n.x,n.y),p=c("Z"),n.x=i.x,n.y=i.y,r.pathSegList.insertItemBefore(h,1),r.pathSegList.appendItem(p),app.canvas.pathDataChangeCallback(r,o)),this._mode="select",this._currentPath=null,this._segSketch.hide(),!0;
if(m=t.dataset.position,f=this._currentPath,g=t.ownerPath,f.pathSegList.length>1&&app.canvas.undoManager.checkpoint("Draw path segment"),v=f.getAttribute("d"),b=g.getAttribute("d"),y=g.getTransformToElement(f),g.setAttribute("transform",y.toString()),d(g),"draw-forward"===this._mode){"end"===m&&u(g),x=g.pathSegList.getItem(0),_=c("C",this._segSketch.controlPoint1.x,this._segSketch.controlPoint1.y,this._segSketch.controlPoint2.x,this._segSketch.controlPoint2.y,x.x,x.y),f.pathSegList.appendItem(_);
for(var L=1;L<g.pathSegList.length;L+=1)S=g.pathSegList.getItem(L),f.pathSegList.appendItem(l(S));
g.setAttribute("d",""),app.canvas.pathDataChangeCallback(f,v),app.canvas.pathDataChangeCallback(g,b),g.remove()
}else if("draw-backward"===this._mode){"start"===m&&u(g),w=f.pathSegList.getItem(0),C=g.pathSegList.getItem(0),E=c("C",this._segSketch.controlPoint1.x,this._segSketch.controlPoint1.y,this._segSketch.controlPoint2.x,this._segSketch.controlPoint2.y,w.x,w.y),w.x=C.x,w.y=C.y,f.pathSegList.removeItem(0),f.pathSegList.insertItemBefore(E,0);
for(var T=g.pathSegList.length-1;T>=0;T-=1)P=g.pathSegList.getItem(T),f.pathSegList.insertItemBefore(P,0);
g.setAttribute("d",""),app.canvas.pathDataChangeCallback(f,v),app.canvas.pathDataChangeCallback(g,b),g.remove()
}return this._mode="select",this._currentPath=null,this._segSketch.hide(),!0}},_onNodeGrippieDirectClick:function(t){if("select"===this._mode){this._currentPath=t.ownerPath;
var e=t.dataset.position;"start"===e?(this._mode="draw-backward",this._segSketch.show(t.ownerPath,"start")):(this._mode="draw-forward",this._segSketch.show(t.ownerPath,"end"))
}},_onKeyDown:function(t){var n,i,r;("draw-forward"===this._mode||"draw-backward"===this._mode)&&(n=s(t),e(n,["Enter"])===!0||e(n,["Esc"])===!0?(t.stopPropagation(),this._mode="select",this._currentPath=null,this._segSketch.hide()):e(n,["Shift","Enter"])===!0&&(t.stopPropagation(),i=this._currentPath.getAttribute("d"),r=c("Z"),this._currentPath.pathSegList.appendItem(r),app.canvas.pathDataChangeCallback(this._currentPath,i),this._mode="select",this._currentPath=null,this._segSketch.hide()))
},_updateNodeGrippies:function(){var t,e,n,i,s,a,l,u,c,d,p;this._nodeGrippies.innerHTML="";
for(var m,f=h(app.canvas.selectedElements,!0)[Symbol.iterator]();!(m=f.next()).done;)t=m.value,"path"===t.localName&&(e=t,n=e.pathSegList.length,0===n?(i=null,s=null):1===n?(i=e.pathSegList[0],s=null):n>1&&(i=e.pathSegList[0],s=e.pathSegList[n-1]),a=e.getTransformToElement(this),l=s&&"Z"===s.pathSegTypeAsLetter,i&&!l&&(u=o(i).matrixTransform(a),c=r("svg:ellipse"),c.setAttribute("class","node-grippie"),c.setAttribute("cx",u.x),c.setAttribute("cy",u.y),c.setAttribute("data-position","start"),c.ownerPath=e,this._nodeGrippies.append(c)),s&&!l&&(d=o(s).matrixTransform(a),p=r("svg:ellipse"),p.setAttribute("class","node-grippie"),p.setAttribute("cx",d.x),p.setAttribute("cy",d.y),p.setAttribute("data-position","end"),p.ownerPath=e,this._nodeGrippies.append(p)));
this._updateNodeGrippiesSize()},_updateNodeGrippiesSize:function(){for(var t,e,n=p/2/app.canvas.scale,i=this._nodeGrippies.children[Symbol.iterator]();!(e=i.next()).done;)t=e.value,t.setAttribute("rx",n),t.setAttribute("ry",n)
}},{},SVGGElement);var v=i("g","bx-cubicsegsdrawhud",f);return{get default(){return v
}}}),System.register("elements/bx-cubicsegsketch",[],function(){"use strict";var t=System.get("utils/dom"),e=t.registerElement,n=t.createSVGPoint,i=System.get("utils/object").freeze,r=System.get("utils/point"),o=(r.getPointBetweenTwoPoints,r.getNearestPointOnLine,r.snapPointToAngleMultiple),s=System.get("classes/vector").default,a='\n  <style>@import url("stylesheets/bx-cubicsegsketch.css");</style>\n  <path id="outline" d="M 0 0 C 0 0 0 0 0 0"></path>\n  <line id="control-line-1"></line>\n  <line id="control-line-2"></line>\n  <circle id="control-point-1-grippie"></circle>\n  <circle id="control-point-2-grippie"></circle>\n',l=function(){$traceurRuntime.defaultSuperCall(this,u.prototype,arguments)
},u=l;$traceurRuntime.createClass(l,{createdCallback:function(){this.createShadowRoot(),this.shadowRoot.innerHTML=a,this._outline=this.shadowRoot.querySelector("#outline"),this._controlLine1=this.shadowRoot.querySelector("#control-line-1"),this._controlLine2=this.shadowRoot.querySelector("#control-line-2"),this._controlPoint1Grippie=this.shadowRoot.querySelector("#control-point-1-grippie"),this._controlPoint2Grippie=this.shadowRoot.querySelector("#control-point-2-grippie"),this._path=null,this._position="end",this._snap="none",this._hasListeners=!1,this._clientX=null,this._clientY=null
},get startPoint(){return i(n(this._startPoint))},set startPoint(t){throw new Error("startPoint property is read-only.")
},get endPoint(){return i(n(this._endPoint))},set endPoint(t){throw new Error("endPoint property is read-only.")
},get controlPoint1(){return i(n(this._controlPoint1))},set controlPoint1(t){throw new Error("controlPoint1 property is read-only.")
},get controlPoint2(){return i(n(this._controlPoint2))},set controlPoint2(t){throw new Error("controlPoint2 property is read-only.")
},show:function(t){var e=void 0!==arguments[1]?arguments[1]:"end";this._position=e,this._path=t,this._snap="none",this.style.visibility="visible",this._hasListeners===!1&&this._addListeners(),this._updateSegProperties(),this._updateSnapProperty(),this._updatePointProperties(),this._updateOutlines()
},hide:function(){this._path=null,this._clientX=null,this._clientY=null,this.style.visibility="hidden",this._hasListeners===!0&&this._removeListeners()
},_addListeners:function(){var t=this;this._hasListeners=!0,this._mouseDown=!1,app.addEventListener("modkeyschange",this._modKeysChangeListener=function(){t._mouseDown===!1&&(t._updateSnapProperty(),t._updatePointProperties(),t._updateOutlines())
}),app.canvas.addEventListener("contentmutation",this._contentMutationListener=function(e){t._onContentMutation(e)
}),app.canvas.addEventListener("mousedown",this._mouseDownListener=function(e){var i=t._path.getScreenCTM().inverse();
t._mouseDown=!0,t._mouseDownPoint=n(e.clientX,e.clientY),t._mouseDownPoint=t._mouseDownPoint.matrixTransform(i),t._mouseDownControlPoint1=n(t._controlPoint1),t._mouseDownControlPoint2=n(t._controlPoint2),"end"===t._position?t._endPoint="paraxialPolygon"===t._snap?o(t._startPoint,t._endPoint,45):n(t._mouseDownPoint):"start"===t._position&&(t._endPoint="paraxialPolygon"===t._snap?o(t._startPoint,t._endPoint,45):n(n(t._firstSeg.x,t._firstSeg.y)))
}),window.addEventListener("mousemove",this._mouseMoveListener=function(e){t._clientX=e.clientX,t._clientY=e.clientY,t._updatePointProperties(),t._updateOutlines()
}),window.addEventListener("mouseup",this._mouseUpListener=function(){t._mouseDown=!1,t._updateSnapProperty()
})},_removeListeners:function(){this._hasListeners=!1,app.removeEventListener("modkeyschange",this._modKeysChangeListener),app.canvas.removeEventListener("contentmutation",this._contentMutationListener),app.canvas.removeEventListener("mousedown",this._mouseDownListener),window.removeEventListener("mousemove",this._mouseMoveListener),window.removeEventListener("mouseup",this._mouseUpListener)
},_onContentMutation:function(t){var e=t.detail;(e.target===this._path||e.target.contains(this._path))&&this._path.pathSegList.numberOfItems>0&&(this._updateSegProperties(),this._updateSnapProperty(),this._updatePointProperties(),this._updateOutlines())
},_updateSegProperties:function(){var t;if("end"===this._position){this._lastSeg=this._path.pathSegList.getItem(this._path.pathSegList.numberOfItems-1);
for(var e=this._path.pathSegList.length-1;e>=0;e-=1)if(t=this._path.pathSegList.getItem(e),"Z"!==t.pathSegTypeAsLetter){this._lastNonZSeg=t;
break}this._lastSegControlPoint="Q"===this._lastSeg.pathSegTypeAsLetter?n(this._lastSeg.x1,this._lastSeg.y1):"C"===this._lastSeg.pathSegTypeAsLetter?n(this._lastSeg.x2,this._lastSeg.y2):n(this._lastSeg.x,this._lastSeg.y),this._lastSegIsSmooth="Q"===this._lastSeg.pathSegTypeAsLetter?this._lastSeg.x1!==this._lastSeg.x||this._lastSeg.y1!==this._lastSeg.y:"C"===this._lastSeg.pathSegTypeAsLetter?this._lastSeg.x2!==this._lastSeg.x||this._lastSeg.y2!==this._lastSeg.y:!1
}else"start"===this._position&&(this._firstSeg=this._path.pathSegList.getItem(0),this._secondSeg=this._path.pathSegList.getItem(1),this._secondSegControlPoint="Q"===this._secondSeg.pathSegTypeAsLetter?n(this._secondSeg.x1,this._secondSeg.y1):"C"===this._secondSeg.pathSegTypeAsLetter?n(this._secondSeg.x1,this._secondSeg.y1):n(this._secondSeg.x,this._secondSeg.y),this._secondSegIsSmooth="Q"===this._secondSeg.pathSegTypeAsLetter?this._secondSeg.x1!==this._firstSeg.x&&this._secondSeg.y1!==this._firstSeg.y:"C"===this._secondSeg.pathSegTypeAsLetter?this._secondSeg.x1!==this._firstSeg.x&&this._secondSeg.y1!==this._firstSeg.y:!1)
},_updatePointProperties:function(){var t,e,i,r,a,l;this._mouseDown===!1?(t=this._path.getScreenCTM().inverse(),"end"===this._position?(this._startPoint=n(this._lastNonZSeg.x,this._lastNonZSeg.y),this._endPoint=null===this._clientX?n(this._startPoint):n(this._clientX,this._clientY).matrixTransform(t)):"start"===this._position&&(this._startPoint=null===this._clientX?n(this._firstSeg.x,this._firstSeg.y):n(this._clientX,this._clientY).matrixTransform(t),this._endPoint=n(this._firstSeg.x,this._firstSeg.y)),"none"===this._snap?(e=new s(this._startPoint,this._endPoint),"end"===this._position?i=new s(this._startPoint,this._lastSegControlPoint):"start"===this._position&&(i=new s(this._endPoint,this._secondSegControlPoint)),i=i.negate(),"end"===this._position?(this._controlPoint1=n(this._startPoint.x+i.x,this._startPoint.y+i.y),this._controlPoint2=n(this._endPoint)):"start"===this._position&&(this._controlPoint2=n(this._endPoint.x+i.x,this._endPoint.y+i.y),this._controlPoint1=n(this._startPoint))):"polygon"===this._snap?(this._controlPoint1=n(this._startPoint),this._controlPoint2=n(this._endPoint)):"paraxialPolygon"===this._snap&&("end"===this._position?this._endPoint=o(this._startPoint,this._endPoint,45):"start"===this._position&&(this._startPoint=o(this._endPoint,this._startPoint,45)),this._controlPoint1=n(this._startPoint),this._controlPoint2=n(this._endPoint))):this._mouseDown===!0&&(r=this._path.getScreenCTM().inverse(),a=n(this._clientX,this._clientY),a=a.matrixTransform(r),l=new s(this._mouseDownPoint,a).negate(),"end"===this._position?this._controlPoint2=n(this._mouseDownControlPoint2.x+l.x,this._mouseDownControlPoint2.y+l.y):"start"===this._position&&(this._controlPoint1=n(this._mouseDownControlPoint1.x+l.x,this._mouseDownControlPoint1.y+l.y)))
},_updateSnapProperty:function(){var t=app.modKeys,e=t.ctrl,n=(t.alt,t.shift);this._snap=e&&!n?"polygon":e&&n?"paraxialPolygon":"none","end"===this._position?this._lastSegIsSmooth||"none"!==this._snap||(this._snap="polygon"):"start"===this._position&&(this._secondSegIsSmooth||"none"!==this._snap||(this._snap="polygon"))
},_updateOutlines:function(){var t=this._path.getTransformToElement(this),e=this._startPoint.matrixTransform(t),n=this._endPoint.matrixTransform(t),i=this._controlPoint1.matrixTransform(t),r=this._controlPoint2.matrixTransform(t);
this._outline.pathSegList[0].x=e.x,this._outline.pathSegList[0].y=e.y,this._outline.pathSegList[1].x=n.x,this._outline.pathSegList[1].y=n.y,this._outline.pathSegList[1].x1=i.x,this._outline.pathSegList[1].y1=i.y,this._outline.pathSegList[1].x2=r.x,this._outline.pathSegList[1].y2=r.y;
var o=3/app.canvas.scale;this._controlPoint1Grippie.cx.baseVal.value=i.x,this._controlPoint1Grippie.cy.baseVal.value=i.y,this._controlPoint1Grippie.r.baseVal.value=o,this._controlPoint2Grippie.cx.baseVal.value=r.x,this._controlPoint2Grippie.cy.baseVal.value=r.y,this._controlPoint2Grippie.r.baseVal.value=o,this._controlLine1.x1.baseVal.value=e.x,this._controlLine1.y1.baseVal.value=e.y,this._controlLine1.x2.baseVal.value=i.x,this._controlLine1.y2.baseVal.value=i.y,this._controlLine2.x1.baseVal.value=n.x,this._controlLine2.y1.baseVal.value=n.y,this._controlLine2.x2.baseVal.value=r.x,this._controlLine2.y2.baseVal.value=r.y
}},{},SVGGElement);var c=e("g","bx-cubicsegsketch",l);return{get default(){return c
}}}),System.register("elements/bx-defscontrols",[],function(){"use strict";System.get("elements/bx-button"),System.get("elements/bx-scrollableview");
var t=System.get("utils/dom"),e=(t.parseSVG,t.registerElement),n='\n<style>\n  @import url("stylesheets/controls.css");\n  @import url("stylesheets/bx-defscontrols.css");\n</style>\n\n<section id="symbols-section"></section>\n',i=function(){$traceurRuntime.defaultSuperCall(this,r.prototype,arguments)
},r=i;$traceurRuntime.createClass(i,{createdCallback:function(){this.createShadowRoot(),this.shadowRoot.innerHTML=n
},enabledCallback:function(){},disabledCallback:function(){}},{},HTMLElement);var o=e("bx-defscontrols",i);
return{get default(){return o}}}),System.register("elements/bx-dock",[],function(){"use strict";
System.get("elements/bx-scrollableview");var t=System.get("utils/dom").registerElement,e='\n  <style>@import url("stylesheets/bx-dock.css");</style>\n\n  <bx-scrollableview>\n    <content></conten>\n  </bx-scrollableview>\n',n=function(){$traceurRuntime.defaultSuperCall(this,i.prototype,arguments)
},i=n;$traceurRuntime.createClass(n,{createdCallback:function(){this.createShadowRoot(),this.shadowRoot.innerHTML=e,this._scrollableView=this.shadowRoot.querySelector("bx-scrollableview"),this._pressedButton=null
},attachedCallback:function(){var t=this;this.addEventListener("mouseenter",this._mouseEnterListener=function(){t._defaultCursor=app.registerCursor("default",200)
}),this.addEventListener("mouseleave",this._mouseLeaveListener=function(){app.unregisterCursor(t._defaultCursor)
})},detachedCallback:function(){this.removeEventListener("mouseenter",this._mouseEnterListener),this.removeEventListener("mouseleave",this._mouseLeaveListener)
}},{},HTMLElement);var r=t("bx-dock",n);return{get default(){return r}}}),System.register("elements/bx-editor",[],function(){"use strict";
var t=System.get("elements/bx-app").default;System.get("elements/bx-rect"),System.get("elements/bx-button"),System.get("elements/bx-canvas"),System.get("elements/bx-dock"),System.get("elements/bx-panel"),System.get("elements/bx-fillcontrols"),System.get("elements/bx-strokecontrols"),System.get("elements/bx-compositingcontrols"),System.get("elements/bx-typographycontrols"),System.get("elements/bx-viewcontrols"),System.get("elements/bx-arrangementcontrols"),System.get("elements/bx-transformtool"),System.get("elements/bx-edittool"),System.get("elements/bx-quadbeziertool"),System.get("elements/bx-cubicbeziertool"),System.get("elements/bx-freehandtool"),System.get("elements/bx-texttool"),System.get("elements/bx-recttool"),System.get("elements/bx-ellipsetool");
var e=System.get("utils/artwork"),n=e.serializeArtwork,i=e.deserializeArtwork,r=e.rasterizeArtwork,o=System.get("utils/bbox").getClientBBox,s=System.get("utils/dom"),a=s.parseSVG,l=s.registerElement,u=s.createElement,c=s.createSVGPoint,h=s.createSVGMatrix,d=(System.get("utils/image").extractImageSize,System.get("utils/paint").getDefFromURL),p=System.get("utils/rect").combineRects,m=(System.get("utils/time").createTimeout,System.get("utils/transform").getTransformOriginPoint),f=System.get("utils/relationship"),g=f.getElementIndex,v=f.getGraphicsElements,b=f.sortByDomPosition,y=f.isElementIntersectingElement,x=f.sortBySiblingElements,_=f.sortByIntersectingElements,S=f.queryClippingElements,w='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"></svg>',C='\n  <style>@import url("stylesheets/bx-editor.css");</style>\n\n  <main>\n    <bx-canvas id="canvas"></bx-canvas>\n\n    <bx-dock id="tools-dock">\n      <bx-button\n        title="Transform Tool"\n        icon="tool-transform"\n        skin="bx-dock"\n        href="#transform-tool">\n      </bx-button>\n\n      <bx-button\n        title="Edit Tool"\n        icon="tool-edit"\n        skin="bx-dock"\n        href="#edit-tool">\n      </bx-button>\n\n      <bx-button\n        title="Quad Bezier Tool"\n        icon="tool-quadratic-bezier"\n        skin="bx-dock"\n        href="#quad-bezier-tool">\n      </bx-button>\n\n      <bx-button\n        title="Cubic Bezier Tool"\n        icon="tool-cubic-bezier"\n        skin="bx-dock"\n        href="#cubic-bezier-tool">\n      </bx-button>\n\n      <bx-button id="freehand"\n        title="Freehand Tool"\n        icon="tool-freehand"\n        skin="bx-dock"\n        href="#freehand-tool">\n      </bx-button>\n\n      <bx-button\n        title="Text Tool"\n        icon="tool-text"\n        skin="bx-dock"\n        href="#text-tool">\n      </bx-button>\n\n      <bx-button\n        title="Rect Tool"\n        icon="tool-rect"\n        skin="bx-dock"\n        href="#rectangle-tool">\n      </bx-button>\n\n      <bx-button\n        title="Ellipse Tool"\n        icon="tool-ellipse"\n        skin="bx-dock"\n        href="#ellipse-tool">\n      </bx-button>\n    </bx-dock>\n\n    <bx-dock id="panels-dock">\n      <bx-button\n        title="Fill Panel"\n        icon="fill-panel"\n        skin="bx-dock"\n        href="#fill-panel">\n      </bx-button>\n\n      <bx-button\n        title="Stroke Panel"\n        icon="stroke-panel"\n        skin="bx-dock"\n        href="#stroke-panel">\n      </bx-button>\n\n      <bx-button\n        title="Compositing Panel"\n        icon="compositing-panel"\n        skin="bx-dock"\n        href="#compositing-panel">\n      </bx-button>\n\n      <bx-button\n        title="Typography Panel"\n        icon="typography-panel"\n        skin="bx-dock"\n        href="#typography-panel">\n      </bx-button>\n\n      <bx-button\n        title="View Panel"\n        icon="view-panel"\n        skin="bx-dock"\n        href="#view-panel">\n      </bx-button>\n\n      <bx-button\n        title="Arrangement Panel"\n        icon="arrangement-panel"\n        skin="bx-dock"\n        href="#arrangement-panel">\n      </bx-button>\n    </bx-dock>\n\n    <div id="tools">\n      <bx-transformtool id="transform-tool"></bx-transformtool>\n      <bx-edittool id="edit-tool"></bx-edittool>\n      <bx-quadbeziertool id="quad-bezier-tool"></bx-quadbeziertool>\n      <bx-cubicbeziertool id="cubic-bezier-tool"></bx-cubicbeziertool>\n      <bx-freehandtool id="freehand-tool"></bx-freehandtool>\n      <bx-texttool id="text-tool"></bx-texttool>\n      <bx-recttool id="rectangle-tool"></bx-recttool>\n      <bx-ellipsetool id="ellipse-tool"></bx-ellipsetool>\n    </div>\n\n    <div id="panels">\n      <bx-panel id="fill-panel" label="Fill">\n        <bx-fillcontrols></bx-fillcontrols>\n      </bx-panel>\n\n      <bx-panel id="stroke-panel" label="Stroke">\n        <bx-strokecontrols></bx-strokecontrols>\n      </bx-panel>\n\n      <bx-panel id="compositing-panel" label="Compositing">\n        <bx-compositingcontrols></bx-compositingcontrols>\n      </bx-panel>\n\n      <bx-panel id="typography-panel" label="Typography">\n        <bx-typographycontrols></bx-typographycontrols>\n      </bx-panel>\n\n      <bx-panel id="view-panel" label="View">\n        <bx-viewcontrols></bx-viewcontrols>\n      </bx-panel>\n\n      <bx-panel id="arrangement-panel" label="Arrangement">\n        <bx-arrangementcontrols></bx-arrangementcontrols>\n      </bx-panel>\n    </div>\n  </main>\n',E=function(){$traceurRuntime.defaultSuperCall(this,P.prototype,arguments)
},P=E;$traceurRuntime.createClass(E,{createdCallback:function(){var t=this;$traceurRuntime.superCall(this,P.prototype,"createdCallback",[]),this.commands={transformTool:{label:"Transform Tool",shortcut:["Alt","1"],state:function(){return t._getToolState("transform-tool")
},enabled:function(){return!0},exec:function(){return t.toggleTool("transform-tool")
}},editTool:{label:"Edit Tool",shortcut:["Alt","2"],state:function(){return t._getToolState("edit-tool")
},enabled:function(){return!0},exec:function(){return t.toggleTool("edit-tool")}},quadBezierTool:{label:"Quad Bezier Tool",shortcut:["Alt","5"],state:function(){return t._getToolState("quad-bezier-tool")
},enabled:function(){return!0},exec:function(){return t.toggleTool("quad-bezier-tool")
}},cubicBezierTool:{label:"Cubic Bezier Tool",shortcut:["Alt","6"],state:function(){return t._getToolState("cubic-bezier-tool")
},enabled:function(){return!0},exec:function(){return t.toggleTool("cubic-bezier-tool")
}},freehandTool:{label:"Freehand Tool",shortcut:["Alt","7"],state:function(){return t._getToolState("freehand-tool")
},enabled:function(){return!0},exec:function(){return t.toggleTool("freehand-tool")
}},textTool:{label:"Text Tool",shortcut:["Alt","8"],state:function(){return t._getToolState("text-tool")
},enabled:function(){return!0},exec:function(){return t.toggleTool("text-tool")}},rectangleTool:{label:"Rectangle Tool",shortcut:["Alt","3"],state:function(){return t._getToolState("rectangle-tool")
},enabled:function(){return!0},exec:function(){return t.toggleTool("rectangle-tool")
}},ellipseTool:{label:"Ellipse Tool",shortcut:["Alt","4"],state:function(){return t._getToolState("ellipse-tool")
},enabled:function(){return!0},exec:function(){return t.toggleTool("ellipse-tool")
}},fillPanel:{label:"Fill Panel",shortcut:["F"],enabled:function(){return!0},state:function(){return t._getPanelState("fill-panel")
},exec:function(){return t.togglePanel("fill-panel")}},strokePanel:{label:"Stroke Panel",shortcut:["S"],enabled:function(){return!0
},state:function(){return t._getPanelState("stroke-panel")},exec:function(){return t.togglePanel("stroke-panel")
}},compositingPanel:{label:"Compositing Panel",shortcut:["C"],enabled:function(){return!0
},state:function(){return t._getPanelState("compositing-panel")},exec:function(){return t.togglePanel("compositing-panel")
}},typographyPanel:{label:"Typography Panel",shortcut:["T"],enabled:function(){return!0
},state:function(){return t._getPanelState("typography-panel")},exec:function(){return t.togglePanel("typography-panel")
}},arrangementPanel:{label:"Arrangement Panel",shortcut:["A"],enabled:function(){return!0
},state:function(){return t._getPanelState("arrangement-panel")},exec:function(){return t.togglePanel("arrangement-panel")
}},viewPanel:{label:"View Panel",shortcut:["V"],enabled:function(){return!0},state:function(){return t._getPanelState("view-panel")
},exec:function(){return t.togglePanel("view-panel")}},zoomIn:{label:"Zoom In",shortcut:["Z"],enabled:function(){return!0
},exec:function(){return console.log("zoom in")}},zoomOut:{label:"Zoom Out",shortcut:["X"],enabled:function(){return!0
},exec:function(){return console.log("zoom out")}},zoomToFitAll:{label:"Zoom to Fit All",shortcut:["0"],enabled:function(){return!0
},exec:function(){return t.canvas.zoomToFitAll()}},zoomToViewBox:{label:"Zoom to View Box",shortcut:["1"],enabled:function(){return t.canvas.canZoomToViewBox()
},exec:function(){return t.canvas.zoomToCurrentArtboardViewBox()}},zoomToViewBoxWidth:{label:"Zoom to View Box Width",shortcut:["2"],enabled:function(){return t.canvas.canZoomToViewBox()
},exec:function(){return t.canvas.zoomToCurrentArtboardViewBoxWidth()}},zoomToViewBoxHeight:{label:"Zoom to View Box Height",shortcut:["3"],enabled:function(){return t.canvas.canZoomToViewBox()
},exec:function(){return t.canvas.zoomToCurrentArtboardViewBoxHeight()}},zoomToOriginalSize:{label:"Zoom to Original Size",shortcut:["4"],enabled:function(){return!0
},exec:function(){return console.log("zoom to original size")}},undo:{get label(){return app.canvas.undoManager.undoLabel
},shortcut:["Ctrl","Z"],enabled:function(){return t.canvas.undoManager.canUndo()},exec:function(){return t.canvas.undoManager.undo()
}},redo:{get label(){return app.canvas.undoManager.redoLabel},shortcut:["Ctrl","Shift","Z"],enabled:function(){return t.canvas.undoManager.canRedo()
},exec:function(){return t.canvas.undoManager.redo()}},group:{label:"Group",shortcut:["Ctrl","G"],enabled:function(){return t._canGroup()
},exec:function(){return t._group()}},ungroup:{label:"Ungroup",shortcut:["Ctrl","Shift","G"],enabled:function(){return t._canUngroup()
},exec:function(){return t._ungroup()}},raise:{label:"Raise",shortcut:["]"],enabled:function(){return t._canRaise()
},exec:function(){return t._raise()}},raiseToFront:{label:"Raise to Front",shortcut:["Ctrl","]"],enabled:function(){return t._canRaise()
},exec:function(){return t._raiseToFront()}},lower:{label:"Lower",shortcut:["["],enabled:function(){return t._canLower()
},exec:function(){return t._lower()}},lowerToBack:{label:"Lower to Back",shortcut:["Ctrl","["],enabled:function(){return t._canLower()
},exec:function(){return t._lowerToBack()}},clip:{label:"Clip",shortcut:[],enabled:function(){return t._canClip()
},exec:function(){return t._clip()}},unclip:{label:"Unclip",shortcut:[],enabled:function(){return t._canUnclip()
},exec:function(){return t._unclip()}},mask:{label:"Mask",shortcut:[],enabled:function(){return t._canMask()
},exec:function(){return t._mask()}},unmask:{label:"Unmask",shortcut:[],enabled:function(){return t._canUnmask()
},exec:function(){return t._unmask()}},editSymbol:{label:"Edit Symbol",shortcut:[],enabled:function(){return t._canEditSymbol()
},exec:function(){return t._editSymbol()}},rotateClockwise:{label:"Rotate +90°",shortcut:["Ctrl","Shift","Right"],enabled:function(){return t._canRotate()
},exec:function(){return t._rotate(90)}},rotateCounterclockwise:{label:"Rotate -90°",shortcut:["Ctrl","Shift","Left"],enabled:function(){return t._canRotate()
},exec:function(){return t._rotate(-90)}},flipX:{label:"Flip X",shortcut:["Ctrl","Shift","Up"],enabled:function(){return t._canFlip()
},exec:function(){return t._flip("x")}},flipY:{label:"Flip Y",shortcut:["Ctrl","Shift","Down"],enabled:function(){return t._canFlip()
},exec:function(){return t._flip("y")}},moveOneUnitLeft:{label:"Move 1 Unit Left",shortcut:["Left"],enabled:function(){return t._canMove()
},exec:function(){return t._move(t.canvas.selectedElements,1,"left")}},moveOneUnitRight:{label:"Move 1 Unit Right",shortcut:["Right"],enabled:function(){return t._canMove()
},exec:function(){return t._move(t.canvas.selectedElements,1,"right")}},moveOneUnitUp:{label:"Move 1 Unit Up",shortcut:["Up"],enabled:function(){return t._canMove()
},exec:function(){return t._move(t.canvas.selectedElements,1,"up")}},moveOneUnitDown:{label:"Move 1 Unit Down",shortcut:["Down"],enabled:function(){return t._canMove()
},exec:function(){return t._move(t.canvas.selectedElements,1,"down")}},moveTenUnitsLeft:{label:"Move 10 Units Left",shortcut:["Shift","Left"],enabled:function(){return t._canMove()
},exec:function(){return t._move(t.canvas.selectedElements,10,"left")}},moveTenUnitsRight:{label:"Move 10 Units Right",shortcut:["Shift","Right"],enabled:function(){return t._canMove()
},exec:function(){return t._move(t.canvas.selectedElements,10,"right")}},moveTenUnitsUp:{label:"Move 10 Units Up",shortcut:["Shift","Up"],enabled:function(){return t._canMove()
},exec:function(){return t._move(t.canvas.selectedElements,10,"up")}},moveTenUnitsDown:{label:"Move 10 Units Down",shortcut:["Shift","Down"],enabled:function(){return t._canMove()
},exec:function(){return t._move(t.canvas.selectedElements,10,"down")}},selectAll:{label:"Select All",shortcut:["Ctrl","A"],enabled:function(){return!0
},exec:function(){return t.canvas.selectAll()}},selectNext:{label:"Select Next",shortcut:["Tab"],enabled:function(){return!0
},exec:function(){return t.canvas.selectNextElement()}},deselectAll:{label:"Deselect All",shortcut:["Ctrl","Shift","A"],enabled:function(){return t.canvas.selectedElements.length>0
},exec:function(){return t.canvas.selectedElements=[]}},copy:{label:"Copy",shortcut:["Ctrl","C"],enabled:function(){return t.canvas.selectedElements.length>0
},exec:function(){return t._copy()}},cut:{label:"Cut",shortcut:["Ctrl","X"],enabled:function(){return t.canvas.selectedElements.length>0
},exec:function(){return t._cut()}},paste:{label:"Paste",shortcut:["Ctrl","V"],enabled:function(){return!0
},exec:function(){return t._paste()}},duplicate:{label:"Duplicate",shortcut:["Ctrl","D"],enabled:function(){return t.canvas.selectedElements.length>0
},exec:function(){return t._duplicate()}},"delete":{label:"Delete",shortcut:["Backspace"],enabled:function(){return t.canvas.selectedElements.length>0
},exec:function(){return t._delete()}},previousTool:{label:"Previous Tool",shortcut:["Space"],enabled:function(){return null!==t._previousToolID
},exec:function(){return t.toggleTool(t._previousToolID)}}},this.innerHTML=C,this._main=this.querySelector("main"),this._tools=this.querySelector("#tools"),this._panels=this.querySelector("#panels"),this._toolsDock=this.querySelector("bx-dock#tools-dock"),this._panelsDock=this.querySelector("bx-dock#panels-dock"),this._previousToolID=null,this._toolsDock.addEventListener("click",function(e){e.target!==t._toolsDock&&t._onToolsDockButtonClick(e)
}),this._panelsDock.addEventListener("click",function(e){t._onPanelsDockButtonClick(e)
}),this.bridge.addMessageHandler("init",function(e,n){var r=i(e||w);t.canvas.loadArtwork(r),n()
}),this.bridge.addMessageHandler("getArtwork",function(e,i){var r=t.canvas.extractArtwork(),o=n(r,e);
i(o)}),this.bridge.addMessageHandler("getArtworkFromSelectedElements",function(e,i){var r,o;
0===t.canvas.selectedElements.length?i(w):(r=t.canvas.extractArtworkForSelectedElements(),o=n(r,e),i(o))
}),this.toggleTool("transform-tool")},get canvas(){return this.querySelector("#canvas")
},set canvas(t){throw new Error("canvas property is read-only")},get tools(){return this._tools
},set tools(t){throw new Error("tools property is read-only")},get panels(){return this._panels
},set panels(t){throw new Error("panels property is read-only")},get currentTool(){var t,e=null,n=this._toolsDock.querySelector("bx-button[pressed]");
return n&&(t=n.href.slice(1),e=this._tools.querySelector("#"+t)),e},set currentTool(t){throw new Error("currentTool property is read-only")
},get currentPanel(){var t,e=null,n=this._panelsDock.querySelector("bx-button[pressed]");
return n&&(t=n.href.slice(1),e=this._panels.querySelector("#"+t)),e},set currentPanel(t){throw new Error("currentPanel property is read-only")
},toggleTool:function(t){var e,n,i=this._tools.querySelector("#"+t),r=this._toolsDock.querySelector('bx-button[href="#'+t+'"]'),o=this._toolsDock.querySelector("bx-button[pressed]");
if(!r.pressed){if(!i)throw new Error("Tool with given ID was not found: "+t);o&&(o.pressed=!1,this._previousToolID=o.href.substring(1),e=o.href.slice(1),n=this._tools.querySelector("#"+e),n&&n.disabledCallback()),r.pressed=!0,i.enabledCallback(),this.dispatchEvent(new CustomEvent("toolchange",{detail:t}))
}},togglePanel:function(t){var e,n,i=this._panels.querySelector("#"+t),r=this._panelsDock.querySelector('bx-button[href="#'+t+'"]'),o=this._panelsDock.querySelector("bx-button[pressed]");
if(r.pressed)r.pressed=!1,i.removeAttribute("enabled"),i.disabledCallback();else{if(!i)throw new Error("Panel with given ID was not found: "+t);
o&&(o.pressed=!1,e=o.href.slice(1),n=this._panels.querySelector("#"+e),n&&(n.removeAttribute("enabled"),n.disabledCallback())),r.pressed=!0,i.setAttribute("enabled",""),i.enabledCallback()
}},_onToolsDockButtonClick:function(t){var e=t.target,n=e.href.slice(1);this.toggleTool(n)
},_onPanelsDockButtonClick:function(t){var e=t.target,n=e.href.slice(1);this.togglePanel(n)
},_getToolState:function(t){return this.currentTool&&this.currentTool.id===t?!0:!1
},_getPanelState:function(t){return this.currentPanel&&this.currentPanel.id===t?!0:!1
},_copy:function(){var t,e,i,o,s=this,a=app.canvas,l=a.selectedElements,u=a.selectedTextRange;
u&&u.collapsed===!1?(t={"text/plain":u.toString()},this.bridge.postMessage("clipboard.setData",t)):l.length>0&&(e=this.canvas.extractArtworkForSelectedElements(),i=n(e,"html"),o=n(e,"xml"),r(e,function(t){var e={"text/plain":i,"text/html":i,"image/svg+xml":o,"image/png":t};
s.bridge.postMessage("clipboard.setData",e)}))},_paste:function(){var t=this,e=this.canvas.hasPointer?"pointer":"canvasCenter";
this.bridge.postMessage("clipboard.getData",null,function(n){n["image/svg+xml"]?t._pasteSVG(n["image/svg+xml"],e):n["image/png"]?t._pastePNG(n["image/png"],e):void 0!==n["text/plain"]&&t._pasteText(n["text/plain"],e)
})},_pasteSVG:function(t,e){this.canvas.undoManager.checkpoint("Paste");var n=i(t);
this.canvas.insertArtwork(n,e)},_pastePNG:function(t){this.canvas.undoManager.checpoint("Paste"),this.canvas.insertBitmap(t)
},_pasteText:function(t){this.canvas.undoManager.checkpoint("Paste");var e=this.canvas.currentContainer||this.canvas.currentArtboard,n=e.getScreenCTM().inverse(),i=c(this.mouseClientX,this.mouseClientY),r=i.matrixTransform(n),o=e.getTransformToElement(this.canvas.currentArtboard).inverse(),s=a('<text style="font-size: 30;"><tspan>'+t+"</tspan></text>");
s.setAttribute("transform",o.toString()),s.setAttribute("x",r.x),s.setAttribute("y",r.y),e.append(s),this.canvas.selectedElements=[s],this.canvas.currentContainer=e===this.canvas.currentArtboard?null:e
},_duplicate:function(){this.canvas.undoManager.checkpoint("Duplicate");var t=this.canvas.extractArtworkForSelectedElements();
this.canvas.insertArtwork(t,"original"),this.canvas.transformHud.blink()},_cut:function(){var t;
this.canvas.undoManager.checkpoint("Cut"),this._copy();var e=b(this.canvas.selectedElements);
e.reverse(),this.canvas.selectedElements=[];for(var n,i=e[Symbol.iterator]();!(n=i.next()).done;)t=n.value,t.remove()
},_delete:function(){var t;this.canvas.undoManager.checkpoint("Delete");var e=b(this.canvas.selectedElements);
e.reverse(),this.canvas.selectedElements=[];for(var n,i=e[Symbol.iterator]();!(n=i.next()).done;)t=n.value,t.remove()
},_clip:function(){var t,e;this.canvas.undoManager.checkpoint("Clip");var n=this.canvas.selectedElements[0],i=S(this.canvas.selectedElements.slice(1)),r=this.canvas.generateUniqueID("clip"),o=u("svg:clipPath");
o.id=r,this.canvas.defs.append(o);for(var s,a=i[Symbol.iterator]();!(s=a.next()).done;)t=s.value,e=t.getTransformToElement(n),t.setAttribute("transform",e.toString()),o.appendChild(t);
this.canvas.selectedElements=this.canvas.selectedElements.filter(function(t){return i.includes(t)===!1
}),n.style.clipPath="url(#"+r+")"},_canClip:function(){for(var t,e,n=!1,i=this.canvas.selectedElements[0]||null,r=this.canvas.selectedElements.slice(1),o=S(r),s=o[Symbol.iterator]();!(e=s.next()).done;)if(t=e.value,y(t,i)){n=!0;
break}return null===i||n===!1?!1:!0},_unclip:function(){var t,e,n,i,r,o,s;this.canvas.undoManager.checkpoint("Unclip");
for(var a,l=this.canvas.selectedElements[Symbol.iterator]();!(a=l.next()).done;)if(t=a.value,"none"!==getComputedStyle(t).clipPath&&(e=t,n=d(this.canvas.masterArtboard,t.style.clipPath))){i=$traceurRuntime.spread(n.children);
for(var u,c=i[Symbol.iterator]();!(u=c.next()).done;)r=u.value,o=r.getTransformToElement(this.canvas.currentArtboard),s=e.transform.baseVal.consolidate().matrix.multiply(o),r.setAttribute("transform",s.toString()),this.canvas.currentArtboard.appendChild(r);
t.style.clipPath=null}},_canUnclip:function(){for(var t,e,n,i,r=!1,o=this.canvas.selectedElements[Symbol.iterator]();!(i=o.next()).done;)if(t=i.value,e=getComputedStyle(t).clipPath,"none"!==e&&(n=d(this.canvas.masterArtboard,e))){r=!0;
break}return r},_mask:function(){var t,e;this.canvas.undoManager.checkpoint("Mask");
var n=this.canvas.selectedElements[0],i=this.canvas.selectedElements.slice(1),r=this.canvas.generateUniqueID("mask"),o=u("svg:mask");
o.id=r,this.canvas.defs.append(o);for(var s,a=i[Symbol.iterator]();!(s=a.next()).done;)t=s.value,e=t.getTransformToElement(n),t.setAttribute("transform",e.toString()),o.appendChild(t);
this.canvas.selectedElements=this.canvas.selectedElements.filter(function(t){return i.includes(t)===!1
}),n.style.mask="url(#"+r+")"},_canMask:function(){for(var t,e,n=!1,i=this.canvas.selectedElements[0]||null,r=this.canvas.selectedElements.slice(1),o=r[Symbol.iterator]();!(e=o.next()).done;)if(t=e.value,y(t,i)){n=!0;
break}return null===i||n===!1?!1:!0},_unmask:function(){var t,e,n,i,r,o,s;this.canvas.undoManager.checkpoint("Unmask");
for(var a,l=this.canvas.selectedElements[Symbol.iterator]();!(a=l.next()).done;)if(t=a.value,"none"!==getComputedStyle(t).mask&&(e=t,n=d(this.canvas.masterArtboard,t.style.mask))){i=$traceurRuntime.spread(n.children);
for(var u,c=i[Symbol.iterator]();!(u=c.next()).done;)r=u.value,o=r.getTransformToElement(this.canvas.currentArtboard),s=e.transform.baseVal.consolidate().matrix.multiply(o),r.setAttribute("transform",s.toString()),this.canvas.currentArtboard.appendChild(r);
t.style.mask=null}},_canUnmask:function(){for(var t,e,n,i,r=!1,o=this.canvas.selectedElements[Symbol.iterator]();!(i=o.next()).done;)if(t=i.value,e=getComputedStyle(t).mask,"none"!==e&&(n=d(this.canvas.masterArtboard,e))){r=!0;
break}return r},_editSymbol:function(){for(var t,e,n,i,r=v(this.canvas.selectedElements,!0),o=r[Symbol.iterator]();!(i=o.next()).done;)if(t=i.value,"use"===t.localName&&(e=this.canvas.masterArtboard.querySelector(t.href.baseVal),e&&"symbol"===e.localName)){n=e;
break}this.canvas.editSymbol(n.id)},_canEditSymbol:function(){for(var t,e,n,i=v(this.canvas.selectedElements,!0),r=!1,o=i[Symbol.iterator]();!(n=o.next()).done;)if(t=n.value,"use"===t.localName&&(e=this.canvas.masterArtboard.querySelector(t.href.baseVal),e&&"symbol"===e.localName)){r=!0;
break}return r},_move:function(t){var e,n,i,r,o,s,a=void 0!==arguments[1]?arguments[1]:1,l=void 0!==arguments[2]?arguments[2]:"left";
this.canvas.undoManager.checkpoint("Move");for(var u,c=t[Symbol.iterator]();!(u=c.next()).done;)e=u.value,n=h(e.transform.baseVal.consolidate().matrix),i=e.getTransformToElement(this.canvas.currentArtboard),r=i.inverse(),o=h(),"left"===l?o.translateBy(-a,0):"right"===l?o.translateBy(a,0):"up"===l?o.translateBy(0,-a):"down"===l&&o.translateBy(0,a),s=h(n),s.multiplyBy(r),s.multiplyBy(o),s.multiplyBy(i),e.setAttribute("transform",s.toString())
},_canMove:function(){return this.canvas.selectedElements.length>0},_flip:function(){var t,e,n,i,r,s,a,l,u=void 0!==arguments[0]?arguments[0]:"x";
this.canvas.undoManager.checkpoint("Flip");for(var c,d=$traceurRuntime.spread(this.canvas.selectedElements),m=function(){for(var t,e,n=0,i=[],r=d[Symbol.iterator]();!(e=r.next()).done;)t=e.value,i[n++]=o(t);
return i}(),f=p(m),g=d[Symbol.iterator]();!(c=g.next()).done;)t=c.value,e=h(t.transform.baseVal.consolidate().matrix),n=t.getScreenCTM(),i=n.inverse(),"x"===u?(s=2*(f.x+f.width/2),r=h(-1,0,0,1,s,0)):"y"===u&&(a=2*(f.y+f.height/2),r=h(1,0,0,-1,0,a)),l=h(e),l.multiplyBy(i),l.multiplyBy(r),l.multiplyBy(n),t.setAttribute("transform",l.toString())
},_canFlip:function(){return this.canvas.selectedElements.length>0},_raise:function(){var t;
this.canvas.undoManager.checkpoint("Raise");for(var e,n=x(this.canvas.selectedElements)[Symbol.iterator]();!(e=n.next()).done;){t=e.value;
for(var i,r=function(){var t,e,n,r=i.value;if(t=$traceurRuntime.spread(r[0].parentElement.children).filter(function(t){var e;
if(r.includes(t))return!1;for(var n,i=r[Symbol.iterator]();!(n=i.next()).done;)if(e=n.value,y(t,e))return!0;
return!1}),e=t.find(function(t){return g(t)>g(r[r.length-1])}))for(var o,s=r.reverse()[Symbol.iterator]();!(o=s.next()).done;)n=o.value,e.after(n)
},o=_(t)[Symbol.iterator]();!(i=o.next()).done;)r()}},_raiseToFront:function(){var t;
this.canvas.undoManager.checkpoint("Raise to Front");for(var e,n=x(this.canvas.selectedElements)[Symbol.iterator]();!(e=n.next()).done;){t=e.value;
for(var i,r=function(){var t,e,n,r=i.value;if(t=$traceurRuntime.spread(r[0].parentElement.children).filter(function(t){var e;
if(r.includes(t))return!1;for(var n,i=r[Symbol.iterator]();!(n=i.next()).done;)if(e=n.value,y(t,e))return!0;
return!1}),e=t[t.length-1])for(var o,s=r.reverse()[Symbol.iterator]();!(o=s.next()).done;)n=o.value,e.after(n)
},o=_(t)[Symbol.iterator]();!(i=o.next()).done;)r()}},_canRaise:function(){for(var t,e,n=x(this.canvas.selectedElements)[Symbol.iterator]();!(e=n.next()).done;){t=e.value;
for(var i,r,o=function(){var t,e,n=r.value;return t=$traceurRuntime.spread(n[0].parentElement.children).filter(function(t){var e;
if(n.includes(t))return!1;for(var i,r=n[Symbol.iterator]();!(i=r.next()).done;)if(e=i.value,y(t,e))return!0;
return!1}),(e=t.find(function(t){return g(t)>g(n[n.length-1])}))?{v:!0}:void 0},s=_(t)[Symbol.iterator]();!(r=s.next()).done;)if(i=o(),"object"==typeof i)return i.v
}return!1},_lower:function(){var t;this.canvas.undoManager.checkpoint("Lower");for(var e,n=x(this.canvas.selectedElements)[Symbol.iterator]();!(e=n.next()).done;){t=e.value;
for(var i,r=function(){var t,e,n,r=i.value;if(t=$traceurRuntime.spread(r[0].parentElement.children).filter(function(t){var e;
if(r.includes(t))return!1;for(var n,i=r[Symbol.iterator]();!(n=i.next()).done;)if(e=n.value,y(t,e))return!0;
return!1}),e=t.reverse().find(function(t){return g(t)<g(r[0])}))for(var o,s=r[Symbol.iterator]();!(o=s.next()).done;)n=o.value,e.before(n)
},o=_(t)[Symbol.iterator]();!(i=o.next()).done;)r()}},_lowerToBack:function(){var t;
this.canvas.undoManager.checkpoint("Lower to Back");for(var e,n=x(this.canvas.selectedElements)[Symbol.iterator]();!(e=n.next()).done;){t=e.value;
for(var i,r=function(){var t,e,n,r=i.value;if(t=$traceurRuntime.spread(r[0].parentElement.children).filter(function(t){var e;
if(r.includes(t))return!1;for(var n,i=r[Symbol.iterator]();!(n=i.next()).done;)if(e=n.value,y(t,e))return!0;
return!1}),e=t[0])for(var o,s=r[Symbol.iterator]();!(o=s.next()).done;)n=o.value,e.before(n)
},o=_(t)[Symbol.iterator]();!(i=o.next()).done;)r()}},_canLower:function(){for(var t,e,n=x(this.canvas.selectedElements)[Symbol.iterator]();!(e=n.next()).done;){t=e.value;
for(var i,r,o=function(){var t,e,n=r.value;return t=$traceurRuntime.spread(n[0].parentElement.children).filter(function(t){var e;
if(n.includes(t))return!1;for(var i,r=n[Symbol.iterator]();!(i=r.next()).done;)if(e=i.value,y(t,e))return!0;
return!1}),(e=t.reverse().find(function(t){return g(t)<g(n[0])}))?{v:!0}:void 0},s=_(t)[Symbol.iterator]();!(r=s.next()).done;)if(i=o(),"object"==typeof i)return i.v
}return!1},_rotate:function(){var t,e,n,i,r,o=void 0!==arguments[0]?arguments[0]:90;
this.canvas.undoManager.checkpoint("Rotate");for(var s,a=$traceurRuntime.spread(this.canvas.selectedElements),l=m.apply(null,$traceurRuntime.spread(a)),u=a[Symbol.iterator]();!(s=u.next()).done;)t=s.value,e=h(t.transform.baseVal.consolidate().matrix),n=t.getScreenCTM(),i=n.inverse(),r=h(e),r.multiplyBy(i),r.rotateBy(o,l.x,l.y),r.multiplyBy(n),t.setAttribute("transform",r.toString())
},_canRotate:function(){return this.canvas.selectedElements.length>0},_group:function(){var t,e;
this.canvas.undoManager.checkpoint("Group");var n=$traceurRuntime.spread(app.canvas.selectedElements),i=u("svg:g");
n[0].after(i),n=b(n);for(var r,o=n[Symbol.iterator]();!(r=o.next()).done;)t=r.value,e=t.getTransformToElement(i),t.setAttribute("transform",e.toString()),i.append(t);
this.canvas.selectedElements=[i]},_ungroup:function(){var t,e,n,i;this.canvas.undoManager.checkpoint("Ungroup");
for(var r,o=$traceurRuntime.spread(this.canvas.selectedElements),s=[],a=o[Symbol.iterator]();!(r=a.next()).done;)if(t=r.value,"g"===t.localName){e=t;
for(var l,u=$traceurRuntime.spread(e.children)[Symbol.iterator]();!(l=u.next()).done;)n=l.value,i=n.getTransformToElement(e.parentElement),n.setAttribute("transform",i.toString()),e.before(n),s.push(n);
e.remove()}else s.push(t);this.canvas.selectedElements=$traceurRuntime.spread(s)},_canGroup:function(){return this.canvas.selectedElements.length>0
},_canUngroup:function(){return this.canvas.selectedElements.length>0}},{},t);var L=l("bx-editor",E);
return{get default(){return L}}}),System.register("elements/bx-edittool",[],function(){"use strict";
var t=System.get("utils/array").compare,e=System.get("utils/dom"),n=e.closest,i=e.registerElement,r=e.isTransformableElement,o=System.get("utils/function").debounce,s=System.get("utils/event").getShortcutForKeyboardEvent,a=System.get("utils/relationship").getGraphicsElements,l=System.get("utils/text").getRangeOffsetRelativeToElement,u=function(){$traceurRuntime.defaultSuperCall(this,c.prototype,arguments)
},c=u;$traceurRuntime.createClass(u,{createdCallback:function(){this._textInputMode=!1,this._mouseIsDown=!1,this._onKeyPressDebounced=o(this._onKeyPressDebounced,300,this,!0),this._onBackspaceKeyDownDebounced=o(this._onBackspaceKeyDownDebounced,600,this,!0)
},enabledCallback:function(){var t=this;app.canvas.enableHud("outlines-hud"),app.canvas.enableHud("rect-hud"),app.canvas.enableHud("ellipse-hud"),app.canvas.enableHud("paths-edit-hud"),app.canvas.enableHud("selected-text-range-hud"),app.canvas.addEventListener("mousedown",this._mouseDownListener=function(e){t._onCanvasMouseDown(e)
})},disabledCallback:function(){app.canvas.disableHud("outlines-hud"),app.canvas.disableHud("rect-hud"),app.canvas.disableHud("ellipse-hud"),app.canvas.disableHud("paths-edit-hud"),app.canvas.disableHud("selected-text-range-hud"),app.canvas.removeEventListener("mousedown",this._mouseDownListener),app.canvas.selectedTextRange=null,this._disableTextInputMode()
},_enableTextInputMode:function(){var t=this;this._textInputMode=!0,app.canvas.setAttribute("contenteditable",""),app.canvas.addEventListener("selectedelementschange",this._selectedElementsChangeListener=function(){t._onSelectedElementsChange()
}),app.canvas.undoManager.addEventListener("undo",this._undoListener=function(){t._onUndoOrRedo()
}),app.canvas.undoManager.addEventListener("redo",this._redoListener=function(){t._onUndoOrRedo()
}),document.addEventListener("selectionchange",this._selectionChangeListener=function(){t._onSystemSelectionChange()
}),document.addEventListener("keydown",this._contentEditableKeydownListener=function(e){t._onKeyDown(e)
}),document.addEventListener("keypress",this._contentEditableKeypressListener=function(e){t._onKeyPressDebounced(e),t._onKeyPress(e)
}),document.addEventListener("mousedown",this._documentMouseDownListener=function(e){t._onDocumentMouseDown(e)
})},_disableTextInputMode:function(){this._textInputMode=!1,app.canvas.removeAttribute("contenteditable"),app.canvas.removeEventListener("selectedelementschange",this._selectedElementsChangeListener),app.canvas.undoManager.removeEventListener("undo",this._undoListener),app.canvas.undoManager.removeEventListener("redo",this._redoListener),document.removeEventListener("selectionchange",this._selectionChangeListener),document.removeEventListener("keydown",this._contentEditableKeydownListener),document.removeEventListener("keypress",this._contentEditableKeypressListener),document.removeEventListener("mousedown",this._documentMouseDownListener)
},_onSelectedElementsChange:function(){var t,e;app.canvas.selectedTextRange&&(t=n(app.canvas.selectedTextRange.startContainer,"text"),e=app.canvas.selectedElements.find(function(e){return e===t||e.contains(t)
}),e||(app.canvas.selectedTextRange=null))},_onSystemSelectionChange:function(){var t,e,n,i,r=document.getSelection();
"None"!==r.type&&(t=a(app.canvas.selectedElements,!0),e=t.length>0?t[0]:null,n=r.getRangeAt(0).cloneRange(),i=e&&"text"===e.localName?e:null,i&&i.contains(n.startContainer)&&i!==n.startContainer&&i.contains(n.endContainer)&&i!==n.endContainer&&(n.direction=this._getSelectionDirection(r),app.canvas.selectedTextRange=n))
},_onUndoOrRedo:function(){app.canvas.selectedTextRange=null,this._setSystemSelectionToCanvasSelectedTextRange()
},_onKeyDown:function(e){var n=s(e);n.includes("Ctrl")||n.includes("Alt")||t(n,["Shift"])!==!1||e.stopImmediatePropagation(),this._mouseIsDown?(e.preventDefault(),e.stopImmediatePropagation()):n.includes("Up")||n.includes("Down")?(e.preventDefault(),e.stopImmediatePropagation()):n.includes("Left")||n.includes("Right")?this._setSystemSelectionToCanvasSelectedTextRange():t(n,["Ctrl","Z"])?e.preventDefault():t(n,["Ctrl","X"])?e.preventDefault():t(n,["Ctrl","A"])?(e.preventDefault(),e.stopImmediatePropagation(),this._selectAll()):n.includes("Backspace")&&(e.preventDefault(),e.stopImmediatePropagation(),this._onBackspaceKeyDownDebounced(e),this._onBackspaceKeyDown(e))
},_onBackspaceKeyDown:function(){this._setSystemSelectionToCanvasSelectedTextRange();
var t=app.canvas.selectedTextRange,e=n(t.startContainer,"text"),i=l(t,e,"start");
(t.collapsed!==!0||0!==i)&&(document.execCommand("delete"),0===e.textContent.length&&(e.remove(),app.canvas.selectedTextRange=null,this._disableTextInputMode()))
},_onBackspaceKeyDownDebounced:function(){app.canvas.undoManager.checkpoint("Delete text")
},_onKeyPress:function(t){var e,i,r=n(app.canvas.selectedTextRange.startContainer,"text"),o=n(app.canvas.selectedTextRange.startContainer,"textPath"),s=o||r,a=app.canvas.selectedTextRange,l=document.getSelection().getRangeAt(0),u=l.startContainer,c=l.endContainer;
if((s!==u&&s.contains(u)===!1||s!==c&&s.contains(c)===!1)&&this._setSystemSelectionToCanvasSelectedTextRange(),a.collapsed===!1&&a.toString()===s.textContent){for(e=s.children[0],i=String.fromCharCode(t.keyCode),e.innerHTML=i;s.children.length>1;)s.lastChild.remove();
t.preventDefault(),a.selectNodeContents(e),a.collapse(),this._setSystemSelectionToCanvasSelectedTextRange()
}},_onKeyPressDebounced:function(){app.canvas.undoManager.checkpoint("Text")},_onDocumentMouseDown:function(t){var e=this;
app.canvas.currentArtboard.contains(t.target)===!1&&this._disableTextInputMode();
var n;this._mouseIsDown=!0,document.addEventListener("mouseup",n=function(){document.removeEventListener("mouseup",n),e._mouseIsDown=!1
})},_onCanvasMouseDown:function(t){var e;if(0===t.button&&!app.canvas.huds.contains(t.target)){var n=app.canvas.getHitElements(t.clientX,t.clientY);
n=n.filter(function(t){return app.canvas.currentArtboard.contains(t)}),n.length>0?(e=n[n.length-1],r(e)&&this._onMouseDownContentElementHit(e,t)):this._onMouseDownEmptySpaceHit()
}},_onMouseDownContentElementHit:function(t,e){for(var n,i,r,o,s,l=app.modKeys.shift,u=!1,c=app.canvas.selectedElements[Symbol.iterator]();!(s=c.next()).done;)if(n=s.value,n===t||n.contains(t)){u=!0;
break}if(u){i=[];for(var h,d=app.canvas.selectedElements[Symbol.iterator]();!(h=d.next()).done;)if(r=h.value,"g"!==r.localName&&"a"!==r.localName||!r.contains(t))i.push(r);
else for(var p,m=a($traceurRuntime.spread(r.children),!0)[Symbol.iterator]();!(p=m.next()).done;)o=p.value,i.unshift(o);
i.remove(t),i.unshift(t),app.canvas.selectedElements=i;for(var f=t.parentElement;f!==app.canvas.currentArtboard;f=f.parentElement)if("g"===f.localName||"a"===f.localName){app.canvas.currentContainer=f;
break}}"text"===t.localName?(u===!0?this._onMouseDownTextElementHit(t):u===!1&&(l===!1&&(app.canvas.selectedElements=[t],this._onMouseDownTextElementHit(t)),l===!0&&(app.canvas.selectedElements=$traceurRuntime.spread(app.canvas.selectedElements,[t]),app.canvas.selectedTextRange=null,this._onMouseDownTextElementHit(t))),e.detail>=3&&(e.preventDefault(),this._selectAll())):"text"!==t.localName&&(u===!0?(app.canvas.selectedTextRange=null,l===!0&&(app.canvas.selectedElements=app.canvas.selectedElements.filter(function(e){return e!==t
}))):u===!1&&(l?l&&(app.canvas.selectedElements=$traceurRuntime.spread(app.canvas.selectedElements,[t])):(app.canvas.selectedElements=[t],app.canvas.selectedTextRange=null)),this._disableTextInputMode())
},_onMouseDownEmptySpaceHit:function(){this._disableTextInputMode(),app.canvas.selectedElements=[],app.canvas.selectedTextRange=null
},_onMouseDownTextElementHit:function(t){this._textInputMode===!1&&this._enableTextInputMode(t)
},_selectAll:function(){var t=n(app.canvas.selectedTextRange.startContainer,"text"),e=n(app.canvas.selectedTextRange.startContainer,"textPath"),i=e||t,r=i.childNodes[0],o=i.childNodes[i.childNodes.length-1],s=new Range;
s.setStart(r.childNodes[0],0),s.setEnd(o.childNodes[0],o.childNodes[0].textContent.length),app.canvas.selectedTextRange=s,this._setSystemSelectionToCanvasSelectedTextRange()
},_getSelectionDirection:function(t){var e=t.anchorNode.compareDocumentPosition(t.focusNode);
return!e&&t.anchorOffset>t.focusOffset||e===Node.DOCUMENT_POSITION_PRECEDING?"backward":"forward"
},_setSystemSelectionToCanvasSelectedTextRange:function(){var t=document.getSelection(),e=app.canvas.selectedTextRange;
null===e?t.removeAllRanges():(t.removeAllRanges(),t.addRange(e))}},{},HTMLElement);
var h=i("bx-edittool",u);return{get default(){return h}}}),System.register("elements/bx-ellipsehud",[],function(){"use strict";
var t=System.get("utils/dom"),e=t.registerElement,n=(t.createElement,t.createSVGPoint),i=System.get("utils/relationship").getGraphicsElements,r=6,o='\n  <style>@import url("stylesheets/bx-ellipsehud.css");</style>\n\n  <defs>\n    <g class="subhud">\n      <circle class="grippie" data-axis="rx" fill="none"></circle>\n      <circle class="grippie" data-axis="ry" fill="none"></circle>\n    </g>\n  </defs>\n\n  <g id="subhuds"></g>\n',s=function(){$traceurRuntime.defaultSuperCall(this,a.prototype,arguments)
},a=s;$traceurRuntime.createClass(s,{createdCallback:function(){this.createShadowRoot(),this.shadowRoot.innerHTML=o,this._subhuds=this.shadowRoot.querySelector("#subhuds"),this._subhudTemplate=this.shadowRoot.querySelector("defs .subhud"),this._hasContextListeners=!1
},enabledCallback:function(){var t=this;app.canvas.addEventListener("selectedelementschange",this._selectedElementsChangeListener=function(){t._onSelectedElementsChange()
}),this._onSelectedElementsChange()},disabledCallback:function(){app.canvas.removeEventListener("selectedelementschange",this._selectedElementsChangeListener),this._removeContextListeners()
},_addContextListeners:function(){var t=this;this._hasContextListeners!==!0&&(this._hasContextListeners=!0,app.canvas.addEventListener("zoomchange",this._zoomChangeListener=function(){t._onZoomChange()
}),app.canvas.addEventListener("contentmutation",this._contentMutationListener=function(e){t._onContentMutation(e.detail)
}),this.shadowRoot.addEventListener("mousedown",this._mouseDownListener=function(e){t._onMouseDown(e)
}))},_removeContextListeners:function(){this._hasContextListeners!==!1&&(this._hasContextListeners=!1,app.canvas.removeEventListener("zoomchange",this._zoomChangeListener),app.canvas.removeEventListener("contentmutation",this._contentMutationListener),this.shadowRoot.removeEventListener("mousedown",this._mouseDownListener))
},_onSelectedElementsChange:function(){var t,e,n=i(app.canvas.selectedElements,!0),r=n.filter(function(t){return"ellipse"===t.localName
});0===r.length?this._removeContextListeners():this._addContextListeners(),this._subhuds.innerHTML="";
for(var o,s=r[Symbol.iterator]();!(o=s.next()).done;)t=o.value,e=this._subhudTemplate.cloneNode(!0),e.ownerEllipse=t,this._subhuds.append(e);
this._updateGrippiesPosition(),this._updateGrippiesSize()},_onContentMutation:function(t){var e=t.attributeName;
("cx"===e||"cy"===e||"rx"===e||"ry"===e||"transform"===e)&&this._updateGrippiesPosition()
},_onZoomChange:function(){this._updateGrippiesSize()},_onMouseDown:function(t){var e=t.target,i=e.dataset.axis,r=e.parentElement.ownerEllipse,o=r.getCTM().inverse(),s=(r.rx.baseVal.value,r.ry.baseVal.value,n(t.clientX,t.clientY));
s=s.matrixTransform(o);var a,l,u,c=n(r.cx.baseVal.value,r.cy.baseVal.value);app.canvas.undoManager.checkpoint("Change ellipse radius"),app.addEventListener("modkeyschange",a=function(){app.modKeys.shift&&("rx"===i?r.setAttribute("ry",r.getAttribute("rx")):"ry"===i&&r.setAttribute("rx",r.getAttribute("ry")))
}),window.addEventListener("mousemove",l=function(t){var e=n(t.clientX,t.clientY);
e=e.matrixTransform(o);var a=(e.x-s.x,e.y-s.y,e.x-c.x),l=e.y-c.y;1>a&&(a=1),1>l&&(l=1),"rx"===i?app.modKeys.shift===!1?r.setAttribute("rx",a):(r.setAttribute("rx",a),r.setAttribute("ry",a)):"ry"===i&&(app.modKeys.shift===!1?r.setAttribute("ry",l):(r.setAttribute("rx",l),r.setAttribute("ry",l)))
}),window.addEventListener("mouseup",u=function(){app.removeEventListener("modkeyschange",a),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",u)
})},_updateGrippiesPosition:function(){for(var t,e,i,r,o,s,a,l,u=void 0!==arguments[0]?arguments[0]:null,c=this._subhuds.children[Symbol.iterator]();!(l=c.next()).done;)if(t=l.value,!u||t.ownerEllipse===u){e=t.ownerEllipse,i=e.getTransformToElement(this),r=n(e.cx.baseVal.value,e.cy.baseVal.value),r=r.matrixTransform(i);
for(var h,d=t.children[Symbol.iterator]();!(h=d.next()).done;)o=h.value,"rx"===o.dataset.axis?(s=n(e.cx.baseVal.value+e.rx.baseVal.value,e.cy.baseVal.value).matrixTransform(i),o.setAttribute("cx",s.x),o.setAttribute("cy",s.y)):"ry"===o.dataset.axis&&(a=n(e.cx.baseVal.value,e.cy.baseVal.value+e.ry.baseVal.value).matrixTransform(i),o.setAttribute("cx",a.x),o.setAttribute("cy",a.y))
}},_updateGrippiesSize:function(){for(var t,e,n,i=this._subhuds.children[Symbol.iterator]();!(n=i.next()).done;){t=n.value;
for(var o,s=t.children[Symbol.iterator]();!(o=s.next()).done;)e=o.value,e.setAttribute("r",r/app.canvas.scale)
}}},{},SVGGElement);var l=e("g","bx-ellipsehud",s);return{get default(){return l}}
}),System.register("elements/bx-ellipsetool",[],function(){"use strict";var t=System.get("utils/dom"),e=t.registerElement,n=t.createElement,i=t.createSVGMatrix,r=System.get("utils/event").isMouseMoveIntentional,o=System.get("utils/math"),s=o.abs,a=o.min,l=function(){$traceurRuntime.defaultSuperCall(this,u.prototype,arguments)
},u=l;$traceurRuntime.createClass(l,{enabledCallback:function(){var t=this;app.canvas.enableHud("outlines-hud"),this._ellipseCursor=app.registerCursor("images/cursor-ellipse.png",-100,8,7),app.canvas.addEventListener("mousedown",this._mouseDownListener=function(e){t._onMouseDown(e)
})},disabledCallback:function(){app.canvas.disableHud("outlines-hud"),app.unregisterCursor(this._ellipseCursor),app.unregisterCursor(this._mouseDownEllipseCursor),app.canvas.removeEventListener("mousedown",this._mouseDownListener)
},_onMouseDown:function(t){var e,n,i=this;window.addEventListener("mousemove",e=function(o){r(t,o)!==!1&&(window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",n),i._onIntentionalDragStart(t))
}),window.addEventListener("mouseup",n=function(){window.removeEventListener("mousemove",e),app.canvas.removeEventListener("mouseend",n)
})},_onIntentionalDragStart:function(t){var e,r,o,l=this,u=app.canvas.currentContainer||app.canvas.currentArtboard,c=n("svg:ellipse");
c.style.fill="#d8d8d8",app.canvas.undoManager.checkpoint("Draw Ellipse"),u.append(c),app.canvas.selectedElements=[c],this._mouseDownEllipseCursor=app.registerCursor("images/cursor-ellipse.png",900,8,7);
var h=c.getScreenCTM().inverse(),d=i(c.transform.baseVal.consolidate().matrix);d.multiplyBy(h),c.setAttribute("transform",d.toString()),window.addEventListener("mousemove",e=function(e){var n,i,r,o,l,u,h,d=app.modKeys,p=d.ctrl,m=d.shift;
m===!1?(o=(e.clientX-t.clientX)/2,l=(e.clientY-t.clientY)/2,n=!1,i=!1,0>o&&(n=!0,o=s(o)),0>l&&(i=!0,l=s(l)),p&&(o=a(o,l),l=o),u=n?t.clientX-o:t.clientX+o,h=i?t.clientY-l:t.clientY+l):m===!0&&(o=e.clientX-t.clientX,l=e.clientY-t.clientY,0>o?(o=s(o),u=e.clientX+o):u=e.clientX-o,0>l?(l=s(l),h=e.clientY+l):h=e.clientY-l,p&&(r=a(o,l),o=l=r)),c.setAttribute("cx",u),c.setAttribute("cy",h),c.setAttribute("rx",o),c.setAttribute("ry",l)
}),window.addEventListener("mouseup",r=function(){window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",r),app.removeEventListener("toolchange",o),app.unregisterCursor(l._mouseDownEllipseCursor)
}),app.addEventListener("toolchange",o=function(){window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",r),app.removeEventListener("toolchange",o),app.unregisterCursor(l._mouseDownEllipseCursor)
})}},{},HTMLElement);var c=e("bx-ellipsetool",l);return{get default(){return c}}}),System.register("elements/bx-fillcontrols",[],function(){"use strict";
System.get("elements/bx-button"),System.get("elements/bx-slider"),System.get("elements/bx-paintsection");
var t=System.get("utils/dom"),e=(t.closest,t.registerElement),n=System.get("utils/function").throttle,i=System.get("utils/math").round,r=System.get("utils/relationship").queryStylableElements,o=System.get("utils/text").normalizeTextInRangeBeforeEditing,s='\n<style>\n  @import url("stylesheets/controls.css");\n  @import url("stylesheets/bx-fillcontrols.css");\n</style>\n\n<main>\n  <section id="paint-section" is="bx-paintsection" context="fill"></section>\n\n  <section id="opacity-section">\n    <h2>Opacity</h2>\n\n    <bx-slider\n      id="opacity-slider"\n      title="Fill Opacity"\n      value="1"\n      min="0"\n      max="1"\n      precision="2">\n    </bx-slider>\n  </section>\n\n  <section id="fill-rule-section">\n    <h2>Fill Rule</h2>\n\n    <div id="fill-rule-buttons">\n      <bx-button\n        id="non-zero-fill-rule-button"\n        value="nonzero"\n        icon="fill-rule-non-zero"\n        iconsize="28"\n        title="Non-zero"\n        skin="iconic">\n      </bx-button>\n\n      <bx-button\n        id="even-odd-fill-rule-button"\n        value="evenodd"\n        icon="fill-rule-even-odd"\n        iconsize="28"\n        title="Even-odd"\n        skin="iconic">\n      </bx-button>\n    </div>\n  </section>\n</main>\n',a=function(){$traceurRuntime.defaultSuperCall(this,l.prototype,arguments)
},l=a;$traceurRuntime.createClass(a,{createdCallback:function(){var t=this;this.createShadowRoot(),this.shadowRoot.innerHTML=s,this._update$200ms=n(this._update,200,this),this._paintSection=this.shadowRoot.querySelector("#paint-section"),this._opacitySlider=this.shadowRoot.querySelector("#opacity-slider"),this._opacitySectionHeading=this.shadowRoot.querySelector("#opacity-section h2"),this._fillRuleSectionHeading=this.shadowRoot.querySelector("#fill-rule-section h2"),this._nonZeroFillRuleButton=this.shadowRoot.querySelector("#non-zero-fill-rule-button"),this._evenOddFillRuleButton=this.shadowRoot.querySelector("#even-odd-fill-rule-button"),this._opacitySlider.addEventListener("changestart",function(){return t._onOpacitySliderChangeStart()
}),this._nonZeroFillRuleButton.addEventListener("click",function(){return t._onFillRuleButtonClick(event)
}),this._evenOddFillRuleButton.addEventListener("click",function(){return t._onFillRuleButtonClick(event)
})},enabledCallback:function(){var t=this;this._paintSection.enabledCallback(),this._toggleHuds(),this._onSelectedElementsChange(),app.addEventListener("toolchange",this._toolChangeListener=function(){t._toggleHuds()
}),app.canvas.addEventListener("selectedelementschange",this._selectedElementsChangeListener=function(){t._onSelectedElementsChange()
}),app.canvas.addEventListener("selectedtextrangechange",this._selectedTextRangeChangeListener=function(){t._onSelectedTextRangeChange()
}),app.canvas.addEventListener("contentmutation",this._contentMutationListener=function(e){t._onContentMutation(e)
})},disabledCallback:function(){this._paintSection.disabledCallback(),this._toggleHuds(),app.removeEventListener("toolchange",this._toolChangeListener),app.canvas.removeEventListener("selectedelementschange",this._selectedElementsChangeListener),app.canvas.removeEventListener("selectedtextrangechange",this._selectedTextRangeChangeListener),app.canvas.removeEventListener("contentmutation",this._contentMutationListener)
},_onSelectedElementsChange:function(){this._update$200ms()},_onSelectedTextRangeChange:function(){this._update$200ms()
},_onContentMutation:function(){this._update$200ms()},_onOpacitySliderChangeStart:function(){var t=this;
app.canvas.undoManager.checkpoint("Fill opacity");var e=app.canvas,n=e.selectedElements,i=e.selectedTextRange;
o(i);var s,a,l=r("fill-opacity",n,i);this._isChangingOpacitySlider=!0,this._opacitySlider.addEventListener("change",s=function(){for(var e,n,i=l[Symbol.iterator]();!(n=i.next()).done;)e=n.value,e.style.fillOpacity=t._opacitySlider.value;
t._opacitySlider.mixed=!1}),this._opacitySlider.addEventListener("changeend",a=function(){t._isChangingOpacitySlider=!1,t._opacitySlider.removeEventListener("change",s),t._opacitySlider.removeEventListener("changeend",a)
})},_onFillRuleButtonClick:function(t){var e,n=t.target,i=n.pressed,s=n.mixed,a=n.value;
if(0===t.button&&(i!==!0||s!==!1)){app.canvas.undoManager.checkpoint("Fill rule");
var l=app.canvas,u=l.selectedElements,c=l.selectedTextRange;o(c);for(var h,d=r("fill-rule",u,c),p=d[Symbol.iterator]();!(h=p.next()).done;)e=h.value,e.style.fillRule=a
}},_update:function(){this._updateOpacitySection(),this._updateFillRuleSection()},_updateOpacitySection:function(){var t,e,n,o;
if(!this._isChangingOpacitySlider){var s=app.canvas,a=s.selectedElements,l=s.selectedTextRange,u=r("fill-opacity",a,l),c=u[0]||null;
if(this._opacitySectionHeading.disabled=null===c?!0:!1,null===c)this._opacitySlider.value=1,this._opacitySlider.disabled=!0,this._opacitySlider.mixed=!1;
else{this._opacitySlider.disabled=!1,t=i(parseFloat(getComputedStyle(c).fillOpacity),2),e=!1;
for(var h,d=u[Symbol.iterator]();!(h=d.next()).done;)if(n=h.value,n!==c&&(o=i(parseFloat(getComputedStyle(n).fillOpacity),2),o!==t)){e=!0;
break}this._opacitySlider.value=t,this._opacitySlider.mixed=e}}},_updateFillRuleSection:function(){var t,e,n,i,o=app.canvas,s=o.selectedElements,a=o.selectedTextRange,l=r("fill-rule",s,a),u=l[0]||null;
if(this._fillRuleSectionHeading.disabled=null===u?!0:!1,null===u)this._nonZeroFillRuleButton.disabled=!0,this._nonZeroFillRuleButton.pressed=!1,this._nonZeroFillRuleButton.mixed=!1,this._evenOddFillRuleButton.disabled=!0,this._evenOddFillRuleButton.pressed=!1,this._evenOddFillRuleButton.mixed=!1;
else{this._nonZeroFillRuleButton.disabled=!1,this._evenOddFillRuleButton.disabled=!1,t=getComputedStyle(u).fillRule,e=!1;
for(var c,h=l[Symbol.iterator]();!(c=h.next()).done;)n=c.value,i=getComputedStyle(n).fillRule,i!==t&&(e=!0);
"evenodd"===t?(this._nonZeroFillRuleButton.pressed=!1,this._nonZeroFillRuleButton.mixed=!1,this._evenOddFillRuleButton.pressed=!0,this._evenOddFillRuleButton.mixed=e):"nonzero"===t&&(this._nonZeroFillRuleButton.pressed=!0,this._nonZeroFillRuleButton.mixed=e,this._evenOddFillRuleButton.pressed=!1,this._evenOddFillRuleButton.mixed=!1)
}},_toggleHuds:function(){"edit-tool"===app.currentTool.id&&app.currentPanel&&"fill-panel"===app.currentPanel.id?(app.canvas.enableHud("linear-gradient-fill-hud"),app.canvas.enableHud("radial-gradient-fill-hud")):(app.canvas.disableHud("linear-gradient-fill-hud"),app.canvas.disableHud("radial-gradient-fill-hud"))
}},{},HTMLElement);var u=e("bx-fillcontrols",a);return{get default(){return u}}}),System.register("elements/bx-freehandsegsdrawhud",[],function(){"use strict";
var t=System.get("utils/dom"),e=t.createElement,n=t.registerElement,i=t.createSVGPoint,r=System.get("utils/function").debounce,o=System.get("utils/schneider-curves").getSchneiderCurves,s=(System.get("utils/point").getRamerDouglasPeuckerPoints,System.get("utils/path")),a=s.reversePath,l=s.normalizePathData,u=s.createSeg,c=System.get("utils/relationship").getGraphicsElements,h=System.get("utils/transform").normalizeTransform;
System.get("elements/bx-freehandsegsketch");var d=10,p=10,m=4,f=60,g='\n  <style>@import url("stylesheets/bx-freehandsegsdrawhud.css");</style>\n  <g id="node-grippies"></g>\n  <g id="segsketch" is="bx-freehandsegsketch"></g>\n',v=function(){$traceurRuntime.defaultSuperCall(this,b.prototype,arguments)
},b=v;$traceurRuntime.createClass(v,{createdCallback:function(){this.createShadowRoot(),this.shadowRoot.innerHTML=g,this._nodeGrippies=this.shadowRoot.querySelector("#node-grippies"),this._segSketch=this.shadowRoot.querySelector("#segsketch")
},enabledCallback:function(){var t=this;this._currentPath=null,app.canvas.content.addEventListener("mousedown",this._canvasMouseDownListener=function(e){t._onContentMouseDown(e)
}),app.canvas.addEventListener("selectedelementschange",this._selectedElementsChangeListener=function(){t._onSelectedElementsChange()
}),app.canvas.addEventListener("zoomchange",this._zoomChangeListener=function(){t._onZoomChange()
}),app.canvas.addEventListener("contentmutation",this._contentMutationListener=function(e){t._onContentMutation(e)
}),this._nodeGrippies.addEventListener("mousedown",this._nodeGrippiesMouseDownListener=function(e){t._onNodeGrippieMouseDown(e)
}),this._onSelectedElementsChange()},disabledCallback:function(){app.canvas.content.removeEventListener("mousedown",this._canvasMouseDownListener),app.canvas.removeEventListener("selectedelementschange",this._selectedElementsChangeListener),app.canvas.removeEventListener("zoomchange",this._zoomChangeListener),app.canvas.removeEventListener("contentmutation",this._contentMutationListener),this._nodeGrippies.removeEventListener("mousedown",this._nodeGrippiesMouseDownListener),this._currentPath=null,this._segSketch.hide()
},_onSelectedElementsChange:function(){this._updateNodeGrippies()},_onZoomChange:function(){this._updateNodeGrippiesSize()
},_onContentMutation:function(){this._updateNodeGrippies()},_onNodeGrippieMouseDown:function(t){var e=this;
app.canvas.undoManager.checkpoint("Draw freehand path segments");var n,i,s=t.target,c=s.ownerPath;
this._currentPath=c,"end"===s.dataset.position?this._mode="draw-forward":"start"===s.dataset.position&&(this._mode="draw-backward"),this._segSketch.show(c,s),this._updateNodeGrippies();
var d=function(){var t,n,i,r,s,a,l,u=e._segSketch.points;if("draw-forward"===e._mode){if(l=c.getAttribute("d"),0===u.length)return;
if(1===u.length||2===u.length)l+=" L "+u[u.length-1].x+" "+u[u.length-1].y;else if(u.length>=3){t=o(u,m/app.canvas.scale);
for(var h,d=t[Symbol.iterator]();!(h=d.next()).done;)n=h.value,l+=" C "+n[1].x+" "+n[1].y+" "+n[2].x+" "+n[2].y+" "+n[3].x+" "+n[3].y
}}else if("draw-backward"===e._mode){if(u=$traceurRuntime.spread(u).reverse(),0===u.length)return;
if(1===u.length||2===u.length){l="M "+u[0].x+" "+u[0].y;for(var p=1;p<u.length;p+=1)i=u[p],l+=" L "+i.x+" "+i.y
}else if(u.length>=3){r=o(u,m/app.canvas.scale),l="M "+r[0][0].x+" "+r[0][0].y;for(var f,g=r[Symbol.iterator]();!(f=g.next()).done;)s=f.value,l+=" C "+s[1].x+" "+s[1].y+" "+s[2].x+" "+s[2].y+" "+s[3].x+" "+s[3].y;
for(var v=1;v<c.pathSegList.length;v+=1)a=c.pathSegList.getItem(v),"M"===a.pathSegTypeAsLetter?l+=" M "+a.x+" "+a.y:"L"===a.pathSegTypeAsLetter&&(l+=" L "+a.x+" "+a.y),"C"===a.pathSegTypeAsLetter?l+=" C "+a.x1+" "+a.y1+" "+a.x2+" "+a.y2+" "+a.x+" "+a.y:"Q"===a.pathSegTypeAsLetter?l+=" Q "+a.x1+" "+a.y1+" "+a.x+" "+a.y:"Z"===a.pathSegTypeAsLetter&&(l+=" Z")
}}c.setAttribute("d",l),e._segSketch.clear()};window.addEventListener("mousemove",n=r(function(){e._segSketch.points.length>=p&&d()
},f,this,!1)),window.addEventListener("mouseup",i=function(t){var r,o,s,p,m,f,g,v,b;
window.removeEventListener("mouseup",i),window.removeEventListener("mousemove",n),e._segSketch.points.length>1&&d();
var y=e.shadowRoot.elementFromPoint(t.clientX,t.clientY);if(y&&e._nodeGrippies.contains(y))if(r=y,o=r.ownerPath,s=r.dataset.position,l(c),o===c)p=u("Z"),c.pathSegList.appendItem(p);
else if(m=o.getTransformToElement(c),o.setAttribute("transform",m.toString()),h(o),"draw-forward"===e._mode){"end"===s&&a(o),f=c.getAttribute("d");
for(var x=1;x<o.pathSegList.length;x+=1)g=o.pathSegList.getItem(x),"M"===g.pathSegTypeAsLetter&&(f+=" M "+g.x+" "+g.y),"C"===g.pathSegTypeAsLetter?f+=" C "+g.x1+" "+g.y1+" "+g.x2+" "+g.y2+" "+g.x+" "+g.y:"Z"===g.pathSegTypeAsLetter&&(f+=" Z");
c.setAttribute("d",f),o.setAttribute("d",""),o.remove()}else if("draw-backward"===e._mode){"start"===s&&a(o),v=o.getAttribute("d");
for(var _=1;_<c.pathSegList.length;_+=1)b=c.pathSegList[_],"M"===b.pathSegTypeAsLetter&&(v+=" M "+b.x+" "+b.y),"C"===b.pathSegTypeAsLetter?v+=" C "+b.x1+" "+b.y1+" "+b.x2+" "+b.y2+" "+b.x+" "+b.y:"Z"===b.pathSegTypeAsLetter&&(v+=" Z");
c.setAttribute("d",v),o.setAttribute("d",""),o.remove()}e._segSketch.hide(),"select"===e._mode,e._currentPath=null,e._updateNodeGrippies()
})},_onContentMouseDown:function(t){var n=this;app.canvas.undoManager.checkpoint("Draw freehand path segments");
var s=app.canvas.currentContainer||app.canvas.currentArtboard,c=e("svg:path");c.style.stroke="black",c.style.fill="none",s.append(c);
var d=c.getScreenCTM().inverse(),g=t,v=g.clientX,b=g.clientY,y=i(v,b).matrixTransform(d),x=y.x,_=y.y;
c.setAttribute("d","M "+x+" "+_),app.canvas.selectedElements=$traceurRuntime.spread(app.canvas.selectedElements,[c]);
var S,w;this._mode="draw-forward",this._currentPath=c,this._segSketch.show(c),this._updateNodeGrippies();
var C=function(){var t,e,i=n._segSketch.points,r=c.getAttribute("d");if(0!==i.length){if(1===i.length||2===i.length)r+=" L "+i[i.length-1].x+" "+i[i.length-1].y;
else if(i.length>=3){t=o(i,m/app.canvas.scale);for(var s,a=t[Symbol.iterator]();!(s=a.next()).done;)e=s.value,r+=" C "+e[1].x+" "+e[1].y+" "+e[2].x+" "+e[2].y+" "+e[3].x+" "+e[3].y
}c.setAttribute("d",r),n._segSketch.clear()}};window.addEventListener("mousemove",S=r(function(){n._segSketch.points.length>=p&&C()
},f,this,!1)),window.addEventListener("mouseup",w=function(t){var e,i,r,o,s,c,d,p;
window.removeEventListener("mouseup",w),window.removeEventListener("mousemove",S);
var m=n.shadowRoot.elementFromPoint(t.clientX,t.clientY);if(n._segSketch.points.length>0&&C(),m&&n._nodeGrippies.contains(m))if(e=m,e.ownerPath===n._currentPath)i=u("Z"),n._currentPath.pathSegList.appendItem(i);
else{r=e.dataset.position,o=n._currentPath,s=e.ownerPath,l(o),l(s),c=s.getTransformToElement(o),s.setAttribute("transform",c.toString()),h(s),"end"===r&&a(s),d=o.getAttribute("d");
for(var f=1;f<s.pathSegList.length;f+=1)p=s.pathSegList[f],"M"===p.pathSegTypeAsLetter?d+=" M "+p.x+" "+p.y:"L"===p.pathSegTypeAsLetter&&(d+=" L "+p.x+" "+p.y),"C"===p.pathSegTypeAsLetter?d+=" C "+p.x1+" "+p.y1+" "+p.x2+" "+p.y2+" "+p.x+" "+p.y:"Z"===p.pathSegTypeAsLetter&&(d+=" Z");
o.setAttribute("d",d),s.setAttribute("d",""),s.remove()}n._segSketch.hide(),n._mode="select",n._currentPath=null,n._updateNodeGrippies()
})},_updateNodeGrippies:function(){var t,n,r,o,s,a,l,u,h,d,p;this._nodeGrippies.innerHTML="";
for(var m,f=c(app.canvas.selectedElements,!0)[Symbol.iterator]();!(m=f.next()).done;)t=m.value,"path"===t.localName&&(n=t,r=n.pathSegList.length,0===r?(o=null,s=null):1===r?(o=n.pathSegList[0],s=null):r>1&&(o=n.pathSegList[0],s=n.pathSegList[r-1]),a=n.getTransformToElement(this),l=s&&"Z"===s.pathSegTypeAsLetter,!o||l||n===this._currentPath&&"draw-backward"===this._mode||(u=i(o).matrixTransform(a),h=e("svg:ellipse"),h.setAttribute("class","node-grippie"),h.setAttribute("cx",u.x),h.setAttribute("cy",u.y),h.setAttribute("data-position","start"),h.ownerPath=n,this._nodeGrippies.append(h)),!s||l||n===this._currentPath&&"draw-forward"===this._mode||(d=i(s).matrixTransform(a),p=e("svg:ellipse"),p.setAttribute("class","node-grippie"),p.setAttribute("cx",d.x),p.setAttribute("cy",d.y),p.setAttribute("data-position","end"),p.ownerPath=n,this._nodeGrippies.append(p)));
this._updateNodeGrippiesSize()},_updateNodeGrippiesSize:function(){for(var t,e,n=d/2/app.canvas.scale,i=this._nodeGrippies.children[Symbol.iterator]();!(e=i.next()).done;)t=e.value,t.setAttribute("rx",n),t.setAttribute("ry",n)
}},{},SVGGElement);var y=n("g","bx-freehandsegsdrawhud",v);return{get default(){return y
}}}),System.register("elements/bx-freehandsegsketch",[],function(){"use strict";var t=System.get("utils/dom"),e=t.registerElement,n=t.createSVGPoint,i=(System.get("utils/object").freeze,'\n  <style>@import url("stylesheets/bx-freehandsegsketch.css");</style>\n  <polyline id="outline"></polyline>\n'),r=function(){$traceurRuntime.defaultSuperCall(this,o.prototype,arguments)
},o=r;$traceurRuntime.createClass(r,{createdCallback:function(){this.createShadowRoot(),this.shadowRoot.innerHTML=i,this._outline=this.shadowRoot.querySelector("#outline"),this._path=null,this._hasListeners=!1
},get points(){return this._outline.points},set points(t){throw new Error("points property is read-only")
},show:function(t){var e,i,r=void 0!==arguments[1]?arguments[1]:null;this._path=t,this._outline.setAttribute("points",""),this._path.hasAttribute("transform")?this._outline.setAttribute("transform",this._path.getAttribute("transform")):this._outline.removeAttribute("transform"),this.style.visibility="visible",r&&(e=r.getTransformToElement(this._path),i=n(r.cx.baseVal.value,r.cy.baseVal.value),i=i.matrixTransform(e),this._outline.points.appendItem(i)),this._hasListeners===!1&&this._addListeners()
},hide:function(){this._path=null,this.style.visibility="hidden",this._outline.setAttribute("points",""),this._hasListeners===!0&&this._removeListeners()
},clear:function(){this._outline.setAttribute("points","")},_addListeners:function(){var t=this;
this._hasListeners=!0,app.canvas.addEventListener("contentmutation",this._contentMutationListener=function(e){t._onContentMutation(e)
}),window.addEventListener("mousemove",this._mouseMoveListener=function(e){var i=t._path.getScreenCTM().inverse(),r=n(e.clientX,e.clientY),o=r.matrixTransform(i);
t._outline.points.appendItem(o)})},_removeListeners:function(){this._hasListeners=!1,app.canvas.removeEventListener("contentmutation",this._contentMutationListener),window.removeEventListener("mousemove",this._mouseMoveListener)
},_onContentMutation:function(t){var e=t.detail;(e.target===this._path||e.target.contains(this._path))&&this._path.pathSegList.numberOfItems>0
}},{},SVGGElement);var s=e("g","bx-freehandsegsketch",r);return{get default(){return s
}}}),System.register("elements/bx-freehandtool",[],function(){"use strict";var t=System.get("utils/dom").registerElement,e=function(){$traceurRuntime.defaultSuperCall(this,n.prototype,arguments)
},n=e;$traceurRuntime.createClass(e,{enabledCallback:function(){app.canvas.enableHud("outlines-hud"),app.canvas.enableHud("draw-freehand-segs-hud")
},disabledCallback:function(){app.canvas.disableHud("outlines-hud"),app.canvas.disableHud("draw-freehand-segs-hud")
}},{},HTMLElement);var i=t("bx-freehandtool",e);return{get default(){return i}}}),System.register("elements/bx-hueslider",[],function(){"use strict";
var t=System.get("utils/dom").registerElement,e=System.get("utils/math").normalize,n=!1,i='\n<style>\n  @import url("stylesheets/bx-hueslider.css");\n</style>\n\n<main>\n  <canvas></canvas>\n  <div id="marker"></div>\n</main>\n',r=[[0,[255,0,0]],[.15,[255,255,0]],[.33,[0,255,0]],[.49,[0,255,255]],[.67,[0,0,255]],[.84,[255,0,255]],[1,[255,0,0]]],o=function(){$traceurRuntime.defaultSuperCall(this,s.prototype,arguments)
},s=o;$traceurRuntime.createClass(o,{createdCallback:function(){var t=this;this.createShadowRoot(),this.shadowRoot.innerHTML=i,this._canvas=this.shadowRoot.querySelector("canvas"),this._marker=this.shadowRoot.querySelector("#marker"),this._canvas.addEventListener("mousedown",function(e){return t._onMouseDown(e)
}),this._drawSpectrum()},attributeChangedCallback:function(t,e,n){e!==n&&"hue"===t&&this._onHueChange()
},get hue(){return this.hasAttribute("hue")?parseInt(this.getAttribute("hue")):360
},set hue(t){this.setAttribute("hue",t)},_onMouseDown:function(t){var e=this;this.dispatchEvent(new CustomEvent("markerdragstart"));
var n,i,r,o=this._canvas.getBoundingClientRect().left;this._onMarkerDrag(t.clientX-o),window.addEventListener("mousemove",i=function(t){t.clientX!==n&&(n=t.clientX,e._onMarkerDrag(t.clientX-o))
}),window.addEventListener("mouseup",r=function(){window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r),e.dispatchEvent(new CustomEvent("markerdragend"))
})},_onMarkerDrag:function(t){var i=e(t/this._canvas.clientWidth*360,0,360,0);this.hue!==i&&(this.hue=i,this.dispatchEvent(new CustomEvent("markerdrag",{detail:this.hue})),n&&console.log("%c     ","background: hsl("+i+", 100%, 50%)","hue = "+i))
},_onHueChange:function(){var t=e(this.hue,0,360,0);this._marker.style.left=t/360*100+"%"
},_drawSpectrum:function(){for(var t,e,n=this._canvas.width=800,i=this._canvas.height=100,o=this._canvas.getContext("2d"),s=o.createLinearGradient(0,0,n,0),a=r[Symbol.iterator]();!(e=a.next()).done;)t=e.value,s.addColorStop(t[0],"rgb("+t[1][0]+", "+t[1][1]+", "+t[1][2]+")");
o.fillStyle=s,o.fillRect(0,0,n,i)}},{},HTMLElement);var a=t("bx-hueslider",o);return{get default(){return a
}}}),System.register("elements/bx-icon",[],function(){"use strict";var t=System.get("utils/dom").registerElement,e='\n<style>\n  @import url("stylesheets/bx-icon.css");\n</style>\n\n<main>\n  <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 100 100">\n    <use width="100" height="100" x="0" y="0"></use>\n  </svg>\n</main>\n',n=function(){$traceurRuntime.defaultSuperCall(this,i.prototype,arguments)
},i=n;$traceurRuntime.createClass(n,{createdCallback:function(){this.createShadowRoot(),this.shadowRoot.innerHTML=e,this._useElement=this.shadowRoot.querySelector("use"),this._onNameChange()
},attributeChangedCallback:function(t,e,n){e!==n&&"name"===t&&this._onNameChange()
},get name(){return this.hasAttribute("name")?this.getAttribute("name"):""},set name(t){this.setAttribute("name",t)
},_onNameChange:function(){this._useElement.href.baseVal="images/icons.svg#"+this.name
}},{},HTMLElement);var r=t("bx-icon",n);return{get default(){return r}}}),System.register("elements/bx-lineargradienthud",[],function(){"use strict";
var t=System.get("utils/array").compare,e=System.get("utils/dom"),n=e.createElement,i=e.createSVGMatrix,r=e.createSVGPoint,o=e.registerElement,s=System.get("utils/event"),a=s.getShortcutForKeyboardEvent,l=s.isMouseMoveIntentional,u=System.get("utils/function").throttle,c=System.get("utils/gradient").getGradientColorAtOffset,h=System.get("utils/math").normalize,d=System.get("utils/object"),p=d.freeze,m=d.keys,f=System.get("utils/paint"),g=f.getPaintType,v=f.getPaintServer,b=System.get("utils/relationship"),y=b.getGraphicsElements,x=(b.moveElementUp,b.moveElementDown,b.queryStylableElements),_=System.get("utils/point"),S=_.getPointAtFraction,w=_.getNearestPointOnLine,C=_.getDistanceBetweenPoints,E=_.snapPointToAngleMultiple,P=System.get("classes/vector").default,L=SVGUnitTypes,T=L.SVG_UNIT_TYPE_OBJECTBOUNDINGBOX,A=L.SVG_UNIT_TYPE_USERSPACEONUSE,k=6,O='\n  <style>@import url("stylesheets/bx-lineargradienthud.css");</style>\n\n  <defs>\n    <g class="subhud" tabindex="0">\n      <line class="slider-shadow"></line>\n      <line class="slider"></line>\n      <g class="stop-grippies"></g>\n    </g>\n  </defs>\n\n  <g id="subhuds"></g>\n',M=function(){$traceurRuntime.defaultSuperCall(this,j.prototype,arguments)
},j=M;$traceurRuntime.createClass(M,{createdCallback:function(){var t=this;this.commands={selectNext:{label:"Select Next",shortcut:["Tab"],enabled:function(){return!0
},exec:function(){return t._selectNextStop()}},selectAll:{label:"Select All",enabled:function(){return!0
},exec:function(){return t._selectAllStops()}},deselectAll:{label:"Deselect All",enabled:function(){return!0
},exec:function(){return t._deselectAllStops()}},moveOneUnitLeft:{label:"Move 1 Unit Left",enabled:function(){return t._canMoveActiveSelectedStops("left")
},exec:function(){app.canvas.undoManager.checkpoint("Move 1 Unit Left"),t._moveSelectedStops(1,"left")
}},moveOneUnitRight:{label:"Move 1 Unit Right",enabled:function(){return t._canMoveActiveSelectedStops("right")
},exec:function(){app.canvas.undoManager.checkpoint("Move 1 Unit Right"),t._moveSelectedStops(1,"right")
}},moveTenUnitsLeft:{label:"Move 10 Units Left",enabled:function(){return t._canMoveActiveSelectedStops("left")
},exec:function(){app.canvas.undoManager.checkpoint("Move 10 Units Left"),t._moveSelectedStops(10,"left")
}},moveTenUnitsRight:{label:"Move 10 Units Right",enabled:function(){return t._canMoveActiveSelectedStops("right")
},exec:function(){app.canvas.undoManager.checkpoint("Move 10 Units Right"),t._moveSelectedStops(10,"right")
}},"delete":{label:"Delete",shortcut:["Backspace"],enabled:function(){return!0},exec:function(){return t._deleteSelectedStops()
}}},this.createShadowRoot(),this.shadowRoot.innerHTML=O,this.tabIndex=-1,this._subhudTemplate=this.shadowRoot.querySelector("defs .subhud"),this._subhuds=this.shadowRoot.querySelector("#subhuds"),this._updatePositions30ms=u(this._updatePositions,30,this),this._updateSubhuds200ms=u(this._updateSubhuds,200,this),this._selectedStops=[]
},enabledCallback:function(){var t=this;app.canvas.addEventListener("selectedelementschange",this._selectedElementsChangeListener=function(){t._onSelectedElementsChange()
}),app.canvas.addEventListener("selectedtextrangechange",this._selectedTextRangeChangeListener=function(){t._onSelectedTextRangeChange()
}),app.canvas.addEventListener("contentmutation",this._contentMutationListener=function(e){t._onContentMutation(e.detail)
}),app.canvas.addEventListener("zoomchange",this._zoomChangeListener=function(){t._onZoomChange()
}),app.canvas.addEventListener("mousedown",this._canvasMouseDownListener=function(e){t._onCanvasMouseDown(e)
}),this.shadowRoot.addEventListener("mousedown",this._shadowRootMouseDownListener=function(e){t._onHudMouseDown(e)
}),this.shadowRoot.addEventListener("mouseup",this._mouseUpListener=function(e){t._onHudMouseUp(e)
}),this.shadowRoot.addEventListener("dblclick",this._dblClickListener=function(e){t._onHudDblClick(e)
}),this.shadowRoot.addEventListener("keydown",this._keyDownListener=function(e){t._onKeyDown(e)
}),this._previousSelectedElements=[],this._onSelectedElementsChange()},disabledCallback:function(){app.canvas.removeEventListener("selectedelementschange",this._selectedElementsChangeListener),app.canvas.removeEventListener("selectedtextrangechange",this._selectedTextRangeChangeListener),app.canvas.removeEventListener("contentmutation",this._contentMutationListener),app.canvas.removeEventListener("zoomchange",this._zoomChangeListener),app.canvas.removeEventListener("mousedown",this._canvasMouseDownListener),this.shadowRoot.removeEventListener("mousedown",this._shadowRootMouseDownListener),this.shadowRoot.removeEventListener("mouseup",this._mouseUpListener),this.shadowRoot.removeEventListener("dblclick",this._dblClickListener),this.shadowRoot.removeEventListener("keydown",this._keyDownListener),this._previousSelectedElements=[],this.selectedStops=[]
},get context(){return this.hasAttribute("context")?this.getAttribute("context"):"fill"
},set context(t){this.setAttribute("context",t)},get selectedStops(){return this._selectedStops=this._selectedStops.filter(function(t){return app.canvas.masterArtboard.contains(t)
}),p($traceurRuntime.spread(this._selectedStops))},set selectedStops(e){t(e,this._selectedStops,!0)===!1&&(this._selectedStops=$traceurRuntime.spread(e),this._updateGrippiesSelectedState(),this._updateGrippiesZOrder(),this.dispatchEvent(new CustomEvent("selectedstopschange")))
},_updateSubhuds:function(){var t,e,i,r,o=this,s=app.canvas,a=s.selectedElements,l=s.selectedTextRange,u=x(this.context,a,l);
if(u=u.filter(function(t){return"linearGradient"===g(t,o.context)}),0===u.length)this._subhuds.innerHTML="";
else{t=$traceurRuntime.spread(this.selectedStops),e=this.shadowRoot.activeElement,i=[],this._subhuds.innerHTML="";
var c,h=this,d=function(){var t,e,r,o,s,a,l,u=p.value;if(t=v(u,h.context),i.includes(t))return 0;
i.push(t),e=function(){for(var e,n,i=0,r=[],o=t.children[Symbol.iterator]();!(n=o.next()).done;)e=n.value,"stop"===e.localName&&(r[i++]=e);
return r}(),r=h._subhudTemplate.cloneNode(!0),r.targetGradient=t,r.targetGradientUser=u,o=r.querySelector(".stop-grippies"),s=document.createDocumentFragment();
for(var c,d=e[Symbol.iterator]();!(c=d.next()).done;)a=c.value,l=n("svg:circle"),l.setAttribute("class","stop-grippie"),l.targetStop=a,a.offset.baseVal>.95?s.prepend(l):o.append(l);
o.append(s),h._subhuds.append(r)};t:for(var p,m=u[Symbol.iterator]();!(p=m.next()).done;)switch(c=d()){case 0:continue t
}e&&(r=$traceurRuntime.spread(this._subhuds.children).find(function(t){return t.targetGradient===e.targetGradient
}),r&&r.focus()),this._updatePositions(),this._updateGrippiesSize(),this._updateGrippiesColor(),this._updateGrippiesSelectedState()
}},_updatePositions:function(){var t,e=void 0!==arguments[0]?arguments[0]:null,n=this,o=function(){var t,o,a,l,u,c,h,d,p,m,f,g,v,b,y,x,_,w,C,E,P,L,k,O=s.value;
if(e&&O.targetGradient!==e)return 0;if(t=O.targetGradient,o=O.targetGradientUser,a=function(){for(var e,n,i=0,r=[],o=t.children[Symbol.iterator]();!(n=o.next()).done;)e=n.value,"stop"===e.localName&&(r[i++]=e);
return r}(),l=i(t.gradientTransform.baseVal.consolidate().matrix),u=o.getTransformToElement(n),c=O.querySelector(".slider"),h=O.querySelector(".slider-shadow"),d=$traceurRuntime.spread(O.querySelector(".stop-grippies").children),t.gradientUnits.baseVal===A){p=r(t.x1.baseVal.value,t.y1.baseVal.value),m=r(t.x2.baseVal.value,t.y2.baseVal.value),f=p.matrixTransform(l),g=m.matrixTransform(l),v=f.matrixTransform(u),b=g.matrixTransform(u),c.setAttribute("x1",v.x),c.setAttribute("y1",v.y),c.setAttribute("x2",b.x),c.setAttribute("y2",b.y),h.setAttribute("x1",v.x),h.setAttribute("y1",v.y),h.setAttribute("x2",b.x),h.setAttribute("y2",b.y);
for(var M,j=function(){var t,e,n=M.value;t=d.find(function(t){return t.targetStop===n
}),e=S(v,b,n.offset.baseVal),t.cx.baseVal.value=e.x,t.cy.baseVal.value=e.y},R=a[Symbol.iterator]();!(M=R.next()).done;)j()
}else if(t.gradientUnits.baseVal===T){y=o.getBBox(),x=r(t.x1.baseVal.valueInSpecifiedUnits,t.y1.baseVal.valueInSpecifiedUnits),_=r(t.x2.baseVal.valueInSpecifiedUnits,t.y2.baseVal.valueInSpecifiedUnits),w=x.matrixTransform(l),C=_.matrixTransform(l),E=r(y.x+w.x*y.width,y.y+w.y*y.height),P=r(y.x+C.x*y.width,y.y+C.y*y.height),L=E.matrixTransform(u),k=P.matrixTransform(u),c.setAttribute("x1",L.x),c.setAttribute("y1",L.y),c.setAttribute("x2",k.x),c.setAttribute("y2",k.y),h.setAttribute("x1",L.x),h.setAttribute("y1",L.y),h.setAttribute("x2",k.x),h.setAttribute("y2",k.y);
for(var I,B=function(){var t,e,n=I.value;t=d.find(function(t){return t.targetStop===n
}),e=S(L,k,n.offset.baseVal),t.cx.baseVal.value=e.x,t.cy.baseVal.value=e.y},N=a[Symbol.iterator]();!(I=N.next()).done;)B()
}};t:for(var s,a=this._subhuds.children[Symbol.iterator]();!(s=a.next()).done;)switch(t=o()){case 0:continue t
}},_updateGrippiesColor:function(){for(var t,e,n,i=void 0!==arguments[0]?arguments[0]:null,r=this._subhuds.children[Symbol.iterator]();!(n=r.next()).done;)if(t=n.value,!i||t.targetGradient===i)for(var o,s=t.querySelectorAll(".stop-grippie")[Symbol.iterator]();!(o=s.next()).done;)e=o.value,e.style.fill=e.targetStop.style.stopColor
},_updateGrippiesSize:function(){for(var t,e,n=this.shadowRoot.querySelectorAll(".stop-grippie")[Symbol.iterator]();!(e=n.next()).done;)t=e.value,t.setAttribute("r",k/app.canvas.scale)
},_updateGrippiesSelectedState:function(){for(var t,e,n,i=this._subhuds.children[Symbol.iterator]();!(n=i.next()).done;){t=n.value;
for(var r,o=t.querySelectorAll(".stop-grippie")[Symbol.iterator]();!(r=o.next()).done;)e=r.value,this._selectedStops.includes(e.targetStop)?e.setAttribute("data-selected",""):e.removeAttribute("data-selected")
}},_updateGrippiesZOrder:function(){for(var t,e,n,i=this._subhuds.querySelectorAll(".stop-grippie"),r=this._selectedStops[Symbol.iterator]();!(n=r.next()).done;){t=n.value;
for(var o,s=i[Symbol.iterator]();!(o=s.next()).done;)e=o.value,e.targetStop===t&&e.parentElement.append(e)
}},_onContentMutation:function(t){var e;t.removedNodes.length>0&&(e=this._selectedStops.filter(function(t){return!app.canvas.masterArtboard.contains(t)
}),e.length>0&&(this.selectedStops=this._selectedStops.filter(function(t){return app.canvas.masterArtboard.contains(t)
}))),"offset"===t.attributeName&&"stop"===t.target.localName?this._updatePositions(t.target.parentElement):"attributes"===t.type&&"linearGradient"===t.target.localName?this._updatePositions(t.target):this._updateSubhuds200ms()
},_onSelectedElementsChange:function(){t(this._previousSelectedElements,app.canvas.selectedElements)!==!0&&(this._previousSelectedElements=app.canvas.selectedElements,this._updateSubhuds())
},_onSelectedTextRangeChange:function(){this._updateSubhuds()},_onZoomChange:function(){this._updateGrippiesSize()
},_onCanvasMouseDown:function(t){0===t.button&&t.target!==this&&(this.selectedStops=[])
},_onHudMouseDown:function(t){var e=this;if(0===t.button){t.target.classList.contains("slider")?this._onSliderMouseDown(t):t.target.classList.contains("stop-grippie")&&this._onStopGrippieMouseDown(t);
var n,i;this._mouseMovedAfterMouseDown=!1,this._mouseDownTimeStamp=t.timeStamp,window.addEventListener("mousemove",n=function(){e._mouseMovedAfterMouseDown=!0
}),window.addEventListener("mouseup",i=function(){window.removeEventListener("mouseup",i),window.removeEventListener("mousemove",n)
})}},_onHudMouseUp:function(t){t.target.classList.contains("stop-grippie")&&this._onStopGrippieMouseUp(t)
},_onHudDblClick:function(t){t.timeStamp-this._mouseDownTimeStamp<100&&t.target.classList.contains("slider")&&this._onSliderDblClick(t)
},_onStopGrippieMouseDown:function(t){var e=t.target,n=e.targetStop,i=this.selectedStops.filter(function(t){return t.parentElement===n.parentElement
}),r=n.parentElement,o=function(){for(var t,e,n=0,i=[],o=r.children[Symbol.iterator]();!(e=o.next()).done;)t=e.value,"stop"===t.localName&&(i[n++]=t);
return i}(),s=o[0],a=o[o.length-1],l=app.modKeys,u=l.alt,c=l.shift;this._mouseDownSelectedStops=$traceurRuntime.spread(i),c===!1?i.includes(n)===!1&&(this.selectedStops=[n]):c===!0&&i.includes(n)===!1&&(i.push(n),this.selectedStops=i),n===s&&0===n.offset.baseVal&&u===!1?this._onBoundingStopGrippieOrSliderEdgeMouseDown(t,"start"):n===a&&1===n.offset.baseVal&&u===!1?this._onBoundingStopGrippieOrSliderEdgeMouseDown(t,"end"):this._onDraggableStopGrippieMouseDown(t)
},_onStopGrippieMouseUp:function(t){var e,n;if(!this._mouseMovedAfterMouseDown){for(var i,r=t.target,o=this._mouseDownSelectedStops,s=r.targetStop,a=app.modKeys.shift,l=r.parentElement.parentElement,u=l.targetGradientUser,c=[],h=app.canvas.selectedElements[Symbol.iterator]();!(i=h.next()).done;)if(e=i.value,"g"!==e.localName&&"a"!==e.localName||!e.contains(u))c.push(e);
else for(var d,p=y($traceurRuntime.spread(e.children),!0)[Symbol.iterator]();!(d=p.next()).done;)n=d.value,c.unshift(n);
c.remove(u),c.unshift(u),app.canvas.selectedElements=c;for(var m=u.parentElement;m!==app.canvas.currentArtboard;m=m.parentElement)if("g"===m.localName||"a"===m.localName){app.canvas.currentContainer=m;
break}a===!0&&this._mouseDownSelectedStops.includes(s)===!0&&(o.remove(s),this.selectedStops=o)
}},_onDraggableStopGrippieMouseDown:function(t){var e,n,i=t.target,o=i.parentElement.parentElement,s=this._getMoveOffsetsForSelectedStops(),a=!1,l=o.querySelector(".slider"),u=$traceurRuntime.spread(this.selectedStops),c=this.getScreenCTM(),h=c.inverse(),d=r(l.x1.baseVal.value,l.y1.baseVal.value),p=r(l.x2.baseVal.value,l.y2.baseVal.value),m=r(i.cx.baseVal.value,i.cy.baseVal.value),f=m.matrixTransform(c),g=r(t.clientX,t.clientY),v=w(d,p,m,!1)[0],b=C(d,v)/C(d,p);
window.addEventListener("mousemove",e=function(t){var e,n,i,o,l;a===!1&&(app.canvas.undoManager.checkpoint("Move gradient stop"),a=!0);
for(var c,m=r(t.clientX+f.x-g.x,t.clientY+f.y-g.y),v=m.matrixTransform(h),y=w(d,p,v,!1)[0],x=C(d,y)/C(d,p),_=x-b,S=u[Symbol.iterator]();!(c=S.next()).done;)e=c.value,n=s.get(e),i=n.minOffset,o=n.maxOffset,l=n.initialOffset,i>l+_?e.setAttribute("offset",i):l+_>o?e.setAttribute("offset",o):e.setAttribute("offset",l+_)
}),window.addEventListener("mouseup",n=function(){window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",n)
})},_onBoundingStopGrippieOrSliderEdgeMouseDown:function(t){var e=void 0!==arguments[1]?arguments[1]:"start",n=$traceurRuntime.spread(this._subhuds.children).find(function(e){return e.contains(t.target)
});if(n){{var i,o,s,a,u=n.targetGradient,c=n.targetGradientUser,h=c.getBBox(),d=c.getScreenCTM(),p=d.inverse(),m=!1,f=r(t.clientX,t.clientY);
f.matrixTransform(p)}u.gradientUnits.baseVal===A?(s=r(u.x1.baseVal.value,u.y1.baseVal.value),a=r(u.x2.baseVal.value,u.y2.baseVal.value)):u.gradientUnits.baseVal===T&&(s=r(h.x+u.x1.baseVal.valueInSpecifiedUnits*h.width,h.y+u.y1.baseVal.valueInSpecifiedUnits*h.height),a=r(h.x+u.x2.baseVal.valueInSpecifiedUnits*h.width,h.y+u.y2.baseVal.valueInSpecifiedUnits*h.height));
var g=s.matrixTransform(d),v=a.matrixTransform(d);window.addEventListener("mousemove",i=function(n){var i,o,s,a;
if(m===!1){if(!l(t,n,10))return;m=!0,app.canvas.undoManager.checkpoint("Move gradient")
}{var c=app.modKeys.shift,d="start"===e?g:v,b=r(n.clientX+d.x-f.x,n.clientY+d.y-f.y);
b.matrixTransform(p)}"start"===e?(i=c?E(v,b,45):b,o=i.matrixTransform(p),u.gradientUnits.baseVal===A?(u.setAttribute("x1",o.x),u.setAttribute("y1",o.y)):u.gradientUnits.baseVal===T&&(u.setAttribute("x1",(o.x-h.x)/h.width),u.setAttribute("y1",(o.y-h.y)/h.height))):"end"===e&&(s=c?E(g,b,45):b,a=s.matrixTransform(p),u.gradientUnits.baseVal===A?(u.setAttribute("x2",a.x),u.setAttribute("y2",a.y)):u.gradientUnits.baseVal===T&&(u.setAttribute("x2",(a.x-h.x)/h.width),u.setAttribute("y2",(a.y-h.y)/h.height)))
}),window.addEventListener("mouseup",o=function(){window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",o)
})}},_onSliderMouseDown:function(t){var e=t.target,n=e.parentElement,i=(n.targetGradientUser,e.getScreenCTM()),o=r(t.clientX,t.clientY),s=r(e.x1.baseVal.value,e.y1.baseVal.value),a=r(e.x2.baseVal.value,e.y2.baseVal.value),l=s.matrixTransform(i),u=a.matrixTransform(i),c=new P(l,o).length,h=new P(u,o).length;
5>=c?this._onBoundingStopGrippieOrSliderEdgeMouseDown(t,"start"):5>=h?this._onBoundingStopGrippieOrSliderEdgeMouseDown(t,"end"):this._onSliderBodyMouseDown(t)
},_onSliderBodyMouseDown:function(t){var e,n,i,o,s=t.target,a=s.parentElement,l=a.targetGradientUser,u=a.targetGradient,c=l.getBBox(),h=!1,d=l.getScreenCTM(),p=d.inverse(),m=r(t.clientX,t.clientY),f=m.matrixTransform(p);
u.gradientUnits.baseVal===A?(i=r(u.x1.baseVal.value,u.y1.baseVal.value),o=r(u.x2.baseVal.value,u.y2.baseVal.value)):u.gradientUnits.baseVal===T&&(i=r(c.x+u.x1.baseVal.valueInSpecifiedUnits*c.width,c.y+u.y1.baseVal.valueInSpecifiedUnits*c.height),o=r(c.x+u.x2.baseVal.valueInSpecifiedUnits*c.width,c.y+u.y2.baseVal.valueInSpecifiedUnits*c.height)),window.addEventListener("mousemove",e=function(t){h===!1&&(h=!0,app.canvas.undoManager.checkpoint("Move gradient"));
var e=r(t.clientX,t.clientY),n=e.matrixTransform(p),s=new P(f,n);u.gradientUnits.baseVal===A?(u.setAttribute("x1",i.x+s.x),u.setAttribute("y1",i.y+s.y),u.setAttribute("x2",o.x+s.x),u.setAttribute("y2",o.y+s.y)):u.gradientUnits.baseVal===T&&(u.setAttribute("x1",(i.x+s.x-c.x)/c.width),u.setAttribute("y1",(i.y+s.y-c.y)/c.height),u.setAttribute("x2",(o.x+s.x-c.x)/c.width),u.setAttribute("y2",(o.y+s.y-c.y)/c.height))
}),window.addEventListener("mouseup",n=function(){window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",n)
})},_onSliderDblClick:function(t){var e;app.canvas.undoManager.checkpoint("Add Stop");
var i=t.target,o=i.parentElement,s=o.targetGradient,a=this.getScreenCTM().inverse(),l=function(){for(var t,e,n=0,i=[],r=s.children[Symbol.iterator]();!(e=r.next()).done;)t=e.value,"stop"===t.localName&&(i[n++]=t);
return i}(),u=r(i.x1.baseVal.value,i.y1.baseVal.value),d=r(i.x2.baseVal.value,i.y2.baseVal.value),p=r(t.clientX,t.clientY).matrixTransform(a),m=C(u,p),f=C(u,d),g=m/f;
g=h(g,0,1,5);for(var v=null,b=0;b<l.length;b+=1)if(e=l[b],e.offset.baseVal<g)v=b;
else if(e.offset.baseVal>g)break;var y=n("svg:stop");y.setAttribute("offset",g),y.style.stopColor=c(s,g).toString("hsl"),null===v?0===s.children.length?s.append(y):s.children[0].before(y):l[v].after(y),this.selectedStops=[y]
},_onKeyDown:function(e){var n,i;if(this.shadowRoot.activeElement&&0!==this.selectedStops.length)for(var r,o=a(e),s=m(this.commands)[Symbol.iterator]();!(r=s.next()).done;)if(n=r.value,i=app.userShortcuts[n]?app.userShortcuts[n]:this.commands[n]&&this.commands[n].shortcut?this.commands[n].shortcut:app.commands[n]&&app.commands[n].shortcut?app.commands[n].shortcut:[],t(o,i)){e.stopPropagation(),e.preventDefault(),this.commands[n].enabled()&&this.commands[n].exec();
break}},_selectAllStops:function(){for(var t,e,n=this.shadowRoot.activeElement,i=n.targetGradient,r=function(){for(var t,e,n=0,r=[],o=i.children[Symbol.iterator]();!(e=o.next()).done;)t=e.value,"stop"===t.localName&&(r[n++]=t);
return r}(),o=this.selectedStops[Symbol.iterator]();!(e=o.next()).done;)t=e.value,t.parentElement!==i&&r.push(t);
this.selectedStops=r},_deselectAllStops:function(){var t=this.shadowRoot.activeElement,e=t.targetGradient;
this.selectedStops=this.selectedStops.filter(function(t){return t.parentElement!==e
})},_selectNextStop:function(){var t=this.shadowRoot.activeElement,e=t.targetGradient,n=function(){for(var t,n,i=0,r=[],o=e.children[Symbol.iterator]();!(n=o.next()).done;)t=n.value,"stop"===t.localName&&(r[i++]=t);
return r}(),i=this.selectedStops.filter(function(t){return t.parentElement===e}),r=i[i.length-1],o=n[0];
n.length>1&&(this.selectedStops=this.selectedStops.filter(function(t){return t.parentElement!==e
}),this.selectedStops=r.nextElementSibling?$traceurRuntime.spread([r.nextElementSibling],this.selectedStops):$traceurRuntime.spread([o],this.selectedStops))
},_deleteSelectedStops:function(){var t,e=this.shadowRoot.activeElement;if(null!==e){var n=e.targetGradient,i=this.selectedStops.filter(function(t){return t.parentElement===n
});if(i.length>0){app.canvas.undoManager.checkpoint("Delete gradient stop(s)");for(var r,o=i[Symbol.iterator]();!(r=o.next()).done;)t=r.value,t.remove()
}}},_moveSelectedStops:function(){var t,e,n,i,o,s,a=void 0!==arguments[0]?arguments[0]:1,l=void 0!==arguments[1]?arguments[1]:"left",u=this.shadowRoot.activeElement;
if(null!==u)for(var c,d=u.querySelector(".slider"),p=u.targetGradient,m=this.selectedStops.filter(function(t){return t.parentElement===p
}),f=this._getMoveOffsetsForSelectedStops(),g=this.getScreenCTM(),v=r(d.x1.baseVal.value,d.y1.baseVal.value),b=r(d.x2.baseVal.value,d.y2.baseVal.value),y=v.matrixTransform(g),x=b.matrixTransform(g),_=new P(y,x),S=a/_.length,w=m[Symbol.iterator]();!(c=w.next()).done;)t=c.value,e=f.get(t),n=e.minOffset,i=e.maxOffset,"left"===l?(o=h(t.offset.baseVal-S,n,i),t.setAttribute("offset",o)):"right"===l&&(s=h(t.offset.baseVal+S,n,i),t.setAttribute("offset",s))
},_canMoveActiveSelectedStops:function(){var t=void 0!==arguments[0]?arguments[0]:"left",e=this.shadowRoot.activeElement;
if(null!==e){var n=(e.querySelector(".slider"),e.targetGradient),i=this.selectedStops.find(function(t){return t.parentElement===n
});if(null!==i){var r=this._getMoveOffsetsForSelectedStops(),o=r.get(i),s=o.minOffset,a=o.maxOffset;
return"left"===t?i.offset.baseVal>s:"right"===t?i.offset.baseVal<a:void 0}}},_getPreviousNotSelectedStop:function(t){for(;t.previousElementSibling;){if(this.selectedStops.includes(t.previousElementSibling)===!1)return t.previousElementSibling;
t=t.previousElementSibling}return null},_getNextNotSelectedStop:function(t){for(;t.nextElementSibling;){if(this.selectedStops.includes(t.nextElementSibling)===!1)return t.nextElementSibling;
t=t.nextElementSibling}return null},_getMoveOffsetsForSelectedStops:function(){for(var t,e,n,i,r,o,s,a=[],l=this.selectedStops[Symbol.iterator]();!(s=l.next()).done;)t=s.value,e={},n=this._getPreviousNotSelectedStop(t),i=this._getNextNotSelectedStop(t),e.min=n?t.offset.baseVal-n.offset.baseVal:t.offset.baseVal,e.max=i?i.offset.baseVal-t.offset.baseVal:1-t.offset.baseVal,a.push(e);
if(0===a.length)return a;for(var u,c=a[0].min,h=a[0].max,d=a[Symbol.iterator]();!(u=d.next()).done;)r=u.value,r.min<c&&(c=r.min),r.max<h&&(h=r.max);
for(var p,m=new Map,f=this.selectedStops[Symbol.iterator]();!(p=f.next()).done;)o=p.value,m.set(o,{initialOffset:o.offset.baseVal,minOffset:o.offset.baseVal-c,maxOffset:o.offset.baseVal+h});
return m}},{},SVGGElement);var R=o("g","bx-lineargradienthud",M);return{get default(){return R
}}}),System.register("elements/bx-masterartboard",[],function(){"use strict";var t=System.get("utils/artwork"),e=t.normalizeArtwork,n=t.getComputedViewBox,i=t.getComputedViewport,r=System.get("utils/dom"),o=r.createElement,s=r.registerElement,a=r.normalizeWhitespace,l={1:"none",2:"xMinYMin",3:"xMidYMin",4:"xMaxYMin",5:"xMinYMid",6:"xMidYMid",7:"xMaxYMid",8:"xMinYMax",9:"xMidYMax",10:"xMaxYMax"},u=function(){$traceurRuntime.defaultSuperCall(this,c.prototype,arguments)
},c=u;$traceurRuntime.createClass(u,{get viewBoxX(){return this.hasAttribute("viewboxx")?parseFloat(this.getAttribute("viewboxx")):0
},set viewBoxX(t){this.setAttribute("viewboxx",t)},get viewBoxY(){return this.hasAttribute("viewboxy")?parseFloat(this.getAttribute("viewboxy")):0
},set viewBoxY(t){this.setAttribute("viewboxy",t)},get viewBoxWidth(){return this.hasAttribute("viewboxwidth")?parseFloat(this.getAttribute("viewboxwidth")):0
},set viewBoxWidth(t){this.setAttribute("viewboxwidth",t)},get viewBoxHeight(){return this.hasAttribute("viewboxheight")?parseFloat(this.getAttribute("viewboxheight")):0
},set viewBoxHeight(t){this.setAttribute("viewboxheight",t)},get viewportWidth(){return this.hasAttribute("viewportwidth")?parseFloat(this.getAttribute("viewportwidth")):null
},set viewportWidth(t){null===t?this.removeAttribute("viewportwidth"):this.setAttribute("viewportwidth",t)
},get viewportHeight(){return this.hasAttribute("viewportheight")?parseFloat(this.getAttribute("viewportheight")):null
},set viewportHeight(t){null===t?this.removeAttribute("viewportheight"):this.setAttribute("viewportheight",t)
},get viewportWidthUnit(){return this.hasAttribute("viewportwidthunit")?this.getAttribute("viewportwidthunit"):null
},set viewportWidthUnit(t){null===t?this.removeAttribute("viewportwidthunit"):this.setAttribute("viewportwidthunit",t)
},get viewportHeightUnit(){return this.hasAttribute("viewportheightunit")?this.getAttribute("viewportheightunit"):null
},set viewportHeightUnit(t){null===t?this.removeAttribute("viewportheightunit"):this.setAttribute("viewportheightunit",t)
},get align(){return this.hasAttribute("align")?this.getAttribute("align"):"xMidYMid"
},set align(t){this.setAttribute("align",t)},get slice(){return this.hasAttribute("slice")
},set slice(t){t?this.setAttribute("slice",""):this.removeAttribute("slice")},loadArtwork:function(t){e(t);
var r=i(t);this.viewportWidth=r.width,this.viewportHeight=r.height,this.viewportWidthUnit=r.widthUnit,this.viewportHeightUnit=r.heightUnit;
var o=n(t);for(this.viewBoxX=o.x,this.viewBoxY=o.y,this.viewBoxWidth=o.width,this.viewBoxHeight=o.height,this.align=l[t.preserveAspectRatio.baseVal.align],this.slice=2===t.preserveAspectRatio.baseVal.meetOrSlice;t.firstChild;)this.append(t.firstChild)
},extractArtwork:function(){var t,e=o("svg:svg");e.setAttribute("viewBox",this.viewBoxX+" "+this.viewBoxY+" "+this.viewBoxWidth+" "+this.viewBoxHeight);
for(var n,i=this.childNodes[Symbol.iterator]();!(n=i.next()).done;)t=n.value,e.append(t.cloneNode(!0));
return a(e),e}},{},SVGGElement);var h=s("g","bx-masterartboard",u);return{get default(){return h
}}}),System.register("elements/bx-menu",[],function(){"use strict";System.get("elements/bx-menuitem"),System.get("elements/bx-icon");
var t=System.get("utils/dom").registerElement,e=System.get("utils/time").createTimeout,n=75,i=300,r='\n  <style>\n    @import url("stylesheets/scrollbars.css");\n    @import url("stylesheets/bx-menu.css");\n  </style>\n\n  <main>\n    <content></content>\n  </main>\n',o=function(){$traceurRuntime.defaultSuperCall(this,s.prototype,arguments)
},s=o;$traceurRuntime.createClass(o,{createdCallback:function(){var t=this;this.createShadowRoot(),this.shadowRoot.innerHTML=r,this._main=this.shadowRoot.querySelector("main"),this._mouseLocs=[],this._mouseInsideMenuBlock=!1,this._main.addEventListener("mousemove",function(e){return t._onMouseMove(e)
}),this.addEventListener("mouseover",function(e){return t._onMouseOver(e)}),this.addEventListener("mouseout",function(e){return t._onMouseOut(e)
}),this.addEventListener("click",function(e){return t._onClick(e)})},attachedCallback:function(){this.dispatchEvent(new CustomEvent("menuattach",{bubbles:!0,detail:this}))
},detachedCallback:function(){this.dispatchEvent(new CustomEvent("menudetach",{bubbles:!0,detail:this}))
},attributeChangedCallback:function(t,e,n){e!==n&&"label"===t&&this._onLabelChange()
},get label(){return this.hasAttribute("label")?this.getAttribute("label"):""},set label(t){this.setAttribute("label",t)
},get opened(){return this.hasAttribute("opened")},set opened(t){t?this.setAttribute("opened",""):this.removeAttribute("opened")
},openBelowElement:function(t){var e=t.getBoundingClientRect();this.style.height=null,this.style.top=e.top+e.height+"px",this.style.left=e.left+"px",this.opened=!0;
var n=this.getBoundingClientRect();n.left+n.width>window.innerWidth&&(this.style.left=e.left+e.width-n.width+"px"),n.top+n.height+10>window.innerHeight&&(this.style.height=window.innerHeight-(e.top+e.height)-10+"px"),this.dispatchEvent(new CustomEvent("menuopen",{bubbles:!0,detail:this}))
},openNextToElement:function(t){var e,n=t.getBoundingClientRect();this.style.top=n.top+"px",this.style.left=n.left+n.width+"px",this.opened=!0;
var i=this.getBoundingClientRect();i.left+i.width>window.innerWidth&&(this.style.left=n.left-i.width+"px",i=this.getBoundingClientRect()),i.top+i.height>window.innerHeight&&(e=window.innerHeight-(i.top+i.height)-5,this.style.top=n.top+e+"px",i=this.getBoundingClientRect(),i.top<0&&(this.style.top="5px",this.style.height=window.innerHeight-10+"px")),this.dispatchEvent(new CustomEvent("menuopen",{bubbles:!0,detail:this}))
},openAtPosition:function(t,e){var n;this.style.left=t+"px",this.style.top=e+"px",this.opened=!0;
var i=this.getBoundingClientRect();i.left+i.width>window.innerWidth&&(this.style.left=t-i.width+"px",i=this.getBoundingClientRect()),i.top+i.height>window.innerHeight&&(n=window.innerHeight-(i.top+i.height)-5,this.style.top=e+n+"px",i=this.getBoundingClientRect(),i.top<0&&(this.style.top="5px",this.style.height=window.innerHeight-10+"px")),this.dispatchEvent(new CustomEvent("menuopen",{bubbles:!0,detail:this}))
},close:function(){this._highlightedMenuItem&&(this._highlightedMenuItem.highlighted=!1,this._highlightedMenuItem=null),this.style.left=null,this.style.top=null,this.opened=!1,this._openedSubmenu&&(this._openedSubmenu.close(),this._openedSubmenu=null),this.dispatchEvent(new CustomEvent("menuclose",{bubbles:!0,detail:this}))
},_onLabelChange:function(){this.dispatchEvent(new CustomEvent("menulabelchange",{bubbles:!0,detail:this}))
},_onMouseMove:function(t){this._mouseLocs.push({x:t.pageX,y:t.pageY}),this._mouseLocs.length>3&&this._mouseLocs.shift()
},_onMouseOver:function(t){t.target===this||t.target.parentElement===this?(this._mouseInsideMenuBlock===!1&&(this._mouseInsideMenuBlock=!0),"bx-menuitem"===t.target.localName&&this._onMenuItemMouseEnter(t.target)):this._mouseInsideMenuBlock===!0&&(this._mouseInsideMenuBlock=!1,this._onMenuBlockMouseLeave())
},_onMouseOut:function(t){(!t.toElement||t.toElement!==this&&t.toElement.parentElement!==this)&&this._mouseInsideMenuBlock===!0&&(this._mouseInsideMenuBlock=!1,this._onMenuBlockMouseLeave())
},_onClick:function(t){var e,n=this;"bx-menuitem"===t.target.localName&&t.target.parentElement===this&&t.target.disabled===!1&&0===t.target.children.length&&0===t.button&&(e=t.target,e.blink(function(){n.dispatchEvent(new CustomEvent("menuitemclick",{bubbles:!0,detail:e}))
}))},_onMenuItemMouseEnter:function(t){this.timeoutID&&clearTimeout(this.timeoutID),this._highlightMenuItemWithDelay(t)
},_onMenuBlockMouseLeave:function(){var t;this.timeoutID&&clearTimeout(this.timeoutID),this._highlightedMenuItem&&(t=this._highlightedMenuItem.children[0],t&&t.opened!==!1||(this._highlightedMenuItem.highlighted=!1,this._highlightedMenuItem=null))
},_highlightMenuItem:function(t){var n,i=this;this._highlightedMenuItem&&(this._highlightedMenuItem.highlighted=!1),this._openedSubmenu&&(this._openedSubmenu.close(),this._openedSubmenu=null),t.disabled===!1&&(this._highlightedMenuItem=t,t.highlighted=!0,t.children[0]&&"bx-menu"===t.children[0].localName&&(n=t.children[0],e(100,function(){i._highlightedMenuItem===t&&(i._openedSubmenu=n,n.openNextToElement(n.parentElement))
})))},_highlightMenuItemWithDelay:function(t){var n=this,i=this._getHighlightDelay();
i?this.timeoutID=e(i,function(){n._highlightMenuItemWithDelay(t)}):this._highlightMenuItem(t)
},_getHighlightDelay:function(){var t="right",e=this._mouseLocs[this._mouseLocs.length-1],r=this._mouseLocs[0];
if(!this._openedSubmenu)return 0;if(!e)return 0;r||(r=e);var o=this.getBoundingClientRect(),s={x:o.left,y:o.top-n},a={x:o.left+o.width,y:s.y},l={x:o.left,y:o.top+o.height+n},u={x:o.left+o.width,y:l.y};
if(r.x<o.left||r.x>u.x||r.y<o.top||r.y>u.y)return 0;if(this._lastDelayLoc&&e.x==this._lastDelayLoc.x&&e.y==this._lastDelayLoc.y)return 0;
var c=function(t,e){return(e.y-t.y)/(e.x-t.x)},h=a,d=u;"left"==t?(h=l,d=s):"below"==t?(h=u,d=l):"above"==t&&(h=s,d=a);
var p=c(e,h),m=c(e,d),f=c(r,h),g=c(r,d);return f>p&&m>g?(this._lastDelayLoc=e,i):(this._lastDelayLoc=null,0)
}},{},HTMLElement);var a=t("bx-menu",o);return{get default(){return a}}}),System.register("elements/bx-menuitem",[],function(){"use strict";
var t=System.get("utils/dom").registerElement,e=System.get("utils/time").createTimeout;
System.get("elements/bx-icon");var n='\n<style>@import url("stylesheets/bx-menuitem.css");</style>\n\n<main>\n  <bx-icon id="state"></bx-icon>\n  <div id="label"></div>\n  <div id="shortcut"></div>\n  <bx-icon id="arrow" name="arrow-right"></bx-icon>\n</main>\n\n<content select="bx-menu"></content>\n',i=function(){$traceurRuntime.defaultSuperCall(this,r.prototype,arguments)
},r=i;$traceurRuntime.createClass(i,{createdCallback:function(){this.createShadowRoot(),this.shadowRoot.innerHTML=n,this._labelElement=this.shadowRoot.querySelector("#label"),this._stateIcon=this.shadowRoot.querySelector("bx-icon#state"),this._shortcutElement=this.shadowRoot.querySelector("#shortcut"),this._onLabelChange(),this._onStateChange(),this._onShortcutChange()
},attributeChangedCallback:function(t,e,n){e!==n&&("label"===t?this._onLabelChange():"state"===t?this._onStateChange():"shortcut"===t&&this._onShortcutChange())
},get label(){return this.hasAttribute("label")?this.getAttribute("label"):""},set label(t){this.setAttribute("label",t)
},get commandID(){return this.hasAttribute("commandid")?this.getAttribute("commandid"):""
},set commandID(t){this.setAttribute("commandid",t)},get state(){return this.hasAttribute("state")?this.getAttribute("state"):""
},set state(t){this.setAttribute("state",t)},get shortcut(){return this.hasAttribute("shortcut")?this.getAttribute("shortcut"):""
},set shortcut(t){this.setAttribute("shortcut",t)},get highlighted(){return this.hasAttribute("highlighted")
},set highlighted(t){t?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")
},blink:function(t){var n=this;this.highlighted=!1,e(100,function(){n.highlighted=!0,e(100,function(){return t()
})})},_onLabelChange:function(){this._labelElement.textContent=this.label},_onStateChange:function(){this._stateIcon.name="selected"===this.state?"circle":"toggled"===this.state?"check-mark":null
},_onShortcutChange:function(){this._shortcutElement.textContent=this.shortcut}},{},HTMLElement);
var o=t("bx-menuitem",i);return{get default(){return o}}}),System.register("elements/bx-outlineshud",[],function(){"use strict";
var t=System.get("utils/bbox").getUserBBox,e=System.get("utils/function").throttle,n=System.get("utils/dom"),i=n.createElement,r=n.registerElement,o=System.get("utils/path"),s=(o.ellipseToPath,o.rectToPath),a=System.get("utils/relationship").getGraphicsElements,l='\n  <style>@import url("stylesheets/bx-outlineshud.css");</style>\n  <g id="outlines"></g>\n',u=function(){$traceurRuntime.defaultSuperCall(this,c.prototype,arguments)
},c=u;$traceurRuntime.createClass(u,{createdCallback:function(){this.createShadowRoot(),this.shadowRoot.innerHTML=l,this._outlines=this.shadowRoot.querySelector("#outlines"),this._updateOutlines_30ms=e(this._updateOutlines,30,this)
},enabledCallback:function(){var t=this;this._updateOutlines(),app.canvas.addEventListener("selectedelementschange",this._selectedElementsChangeListener=function(){t._onSelectedElementsChange()
}),app.canvas.addEventListener("contentmutation",this._contentMutationListener=function(){t._onContentMutation()
})},disabledCallback:function(){app.canvas.removeEventListener("selectedelementschange",this._selectedElementsChangeListener),app.canvas.removeEventListener("contentmutation",this._contentMutationListener)
},_onSelectedElementsChange:function(){this._updateOutlines()},_onContentMutation:function(){this._updateOutlines_30ms()
},_updateOutlines:function(){var e,n,r,o;this._outlines.innerHTML="";for(var l,u=!1,c=a(app.canvas.selectedElements,!0)[Symbol.iterator]();!(l=c.next()).done;)e=l.value,n=e.getTransformToElement(this),r=null,"path"===e.localName?(r=i("svg:path"),e.hasAttribute("d")&&r.setAttribute("d",e.getAttribute("d"))):"rect"===e.localName?r=s(e,!1):(o=t(e),r=i("svg:path"),r.setAttribute("d","\n          M "+o.x+" "+o.y+"\n          L "+(o.x+o.width)+" "+o.y+"\n          L "+(o.x+o.width)+" "+(o.y+o.height)+"\n          L "+o.x+" "+(o.y+o.height)+"\n          L "+o.x+" "+o.y+"\n        ")),app.canvas.selectedElements.includes(e)===!1&&r.setAttribute("data-container",""),r.setAttribute("class","outline"),r.setAttribute("transform",n.toString()),u===!1&&(u=!0,r.setAttribute("data-primary","")),this._outlines.append(r)
}},{},SVGGElement);var h=r("g","bx-outlineshud",u);return{get default(){return h}}
}),System.register("elements/bx-paintsection",[],function(){"use strict";System.get("elements/bx-colorpicker");
var t=System.get("classes/color").default,e=System.get("utils/bbox").getUserBBox,n=System.get("utils/color").parseColor,i=System.get("utils/dom"),r=(i.closest,i.createElement),o=i.registerElement,s=i.parseSVG,a=System.get("utils/function").throttle,l=System.get("utils/relationship").queryStylableElements,u=System.get("utils/text").normalizeTextInRangeBeforeEditing,c=System.get("utils/paint"),h=c.getPaintType,d=c.getPaintServer,p=c.getDefFromURL,m=c.isMixedPaint,f=(c.isSamePaintType,'\n<style>@import url("stylesheets/bx-paintsection.css");</style>\n\n<main>\n  <section id="paint-type-section">\n    <h2>Paint</h2>\n\n    <div id="paint-type-label">Type</div>\n\n    <div id="paint-type-buttons">\n      <bx-button\n        id="solid"\n        tooltip="Solid Color"\n        icon="paint-solid"\n        iconsize="30"\n        skin="iconic">\n      </bx-button>\n\n      <bx-button\n        id="linear-gradient"\n        tooltip="Linear Gradient"\n        icon="paint-linear-gradient"\n        iconsize="30"\n        skin="iconic">\n      </bx-button>\n\n      <bx-button\n        id="radial-gradient"\n        tooltip="Radial Gradient"\n        icon="paint-radial-gradient"\n        iconsize="30"\n        skin="iconic">\n      </bx-button>\n\n      <bx-button\n        id="none"\n        tooltip="None"\n        icon="paint-none"\n        iconsize="30"\n        skin="iconic">\n      </bx-button>\n    </div>\n  </section>\n\n  <section id="spread-method-section">\n    <div id="spread-label">Spread</div>\n\n    <div id="spread-method-buttons">\n      <bx-button\n        id="pad-spread-method-button"\n        value="pad"\n        tooltip="Pad spread method"\n        icon="spread-method-pad"\n        iconsize="30"\n        skin="iconic">\n      </bx-button>\n\n      <bx-button\n        id="repeat-spread-method-button"\n        value="repeat"\n        tooltip="Repeat spread method"\n        icon="spread-method-repeat"\n        iconsize="30"\n        skin="iconic">\n      </bx-button>\n\n      <bx-button\n        id="reflect-spread-method-button"\n        value="reflect"\n        tooltip="Reflect spread method"\n        icon="spread-method-reflect"\n        iconsize="30"\n        skin="iconic">\n      </bx-button>\n    </div>\n  </section>\n\n  <section id="color-section">\n    <div id="color-label">Color</div>\n    <bx-colorpicker></bx-colorpicker>\n    <p id="color-picker-hint"></p>\n  </section>\n</main>\n'),g=function(){$traceurRuntime.defaultSuperCall(this,v.prototype,arguments)
},v=g;$traceurRuntime.createClass(g,{createdCallback:function(){this.createShadowRoot(),this.shadowRoot.innerHTML=f,this._paintTypeSection=this.shadowRoot.querySelector("#paint-type-section"),this._colorSection=this.shadowRoot.querySelector("#color-section"),this._spreadMethodSection=this.shadowRoot.querySelector("#spread-method-section"),this._paintTypeSectionHeading=this.shadowRoot.querySelector("#paint-type-section h2"),this._padSpreadMethodButton=this.shadowRoot.querySelector("#pad-spread-method-button"),this._repeatSpreadMethodButton=this.shadowRoot.querySelector("#repeat-spread-method-button"),this._reflectSpreadMethodButton=this.shadowRoot.querySelector("#reflect-spread-method-button"),this._paintTypeButtons=this.shadowRoot.querySelector("#paint-type-buttons"),this._spreadMethodButtons=this.shadowRoot.querySelector("#spread-method-buttons"),this._colorPickerHint=this.shadowRoot.querySelector("#color-picker-hint"),this._colorPicker=this.shadowRoot.querySelector("bx-colorpicker"),this._linearGradientHud=app.canvas.huds.querySelector("#linear-gradient-"+this.context+"-hud"),this._radialGradientHud=app.canvas.huds.querySelector("#radial-gradient-"+this.context+"-hud"),this._update$200ms=a(this._update,200,this)
},enabledCallback:function(){var t=this;app.canvas.addEventListener("selectedelementschange",this._selectedElementsChangeListener=function(){t._onSelectedElementsChange()
}),app.canvas.addEventListener("selectedtextrangechange",this._selectedTextRangeChangeListener=function(){t._onSelectedTextRangeChange()
}),app.canvas.addEventListener("contentmutation",this._contentMutationListener=function(e){t._onContentMutation(e.detail)
}),this._paintTypeButtons.addEventListener("click",this._paintTypeButtonsClickListener=function(e){t._onPaintTypeButtonsClick(e)
}),this._spreadMethodButtons.addEventListener("click",this._spreadMethodButtonsClickListener=function(e){t._onSpreadMethodButtonsClick(e)
}),this._colorPicker.addEventListener("changestart",this._colorPickerChangeStartListener=function(e){t._onColorPickerColorChangeStart(e)
}),this._colorPickerHint.addEventListener("click",this._colorPickerHintClickListener=function(e){t._onColorPickerHintClick(e)
}),this._linearGradientHud.addEventListener("selectedstopschange",this._linearGradientSelectedStopsChangeListener=function(){t._onSelectedElementsChange()
}),this._radialGradientHud.addEventListener("selectedstopschange",this._radialGradientSelectedStopsChangeListener=function(){t._onSelectedElementsChange()
}),this._onSelectedElementsChange()},disabledCallback:function(){app.canvas.removeEventListener("selectedelementschange",this._selectedElementsChangeListener),app.canvas.removeEventListener("selectedtextrangechange",this._selectedTextRangeChangeListener),app.canvas.removeEventListener("contentmutation",this._contentMutationListener),this._paintTypeButtons.removeEventListener("click",this._paintTypeButtonsClickListener),this._spreadMethodButtons.removeEventListener("click",this._spreadMethodButtonsClickListener),this._colorPicker.removeEventListener("changestart",this._colorPickerChangeStartListener),this._colorPickerHint.removeEventListener("click",this._colorPickerHintClickListener),this._linearGradientHud.removeEventListener("selectedstopschange",this._linearGradientSelectedStopsChangeListener),this._radialGradientHud.removeEventListener("selectedstopschange",this._radialGradientSelectedStopsChangeListener)
},get context(){return this.hasAttribute("context")?this.getAttribute("context"):"fill"
},set context(t){if("fill"!==t&&"stroke"!==t)throw new Error("Invalid context value");
this.setAttribute("context",t)},_onContentMutation:function(){this._update$200ms()
},_onSelectedElementsChange:function(){this._update$200ms()},_onSelectedTextRangeChange:function(){this._update()
},_onPaintTypeButtonsClick:function(t){var e=t.target,n=e.id,i=(e.localName,e.pressed),r=e.mixed;
"bx-button"===t.target.localName&&(i!==!0||r!==!1)&&("solid"===n?this._onSolidPaintButtonClick():"linear-gradient"===n?this._onLinearGradientPaintButtonClick():"radial-gradient"===n?this._onRadialGradientPaintButtonClick():"none"===n&&this._onNonePaintButtonClick())
},_onSolidPaintButtonClick:function(){var t,e,i,r,o;app.canvas.undoManager.checkpoint("Paint type");
var s=app.canvas,a=s.selectedElements,c=s.selectedTextRange;u(c);var p,m=l(this.context,a,c),f=m[0]||null,g=h(f,this.context);
"solid"===g?p=getComputedStyle(f)[this.context]:"linearGradient"===g||"radialGradient"===g?(t=d(f,this.context),e=t.children[0],i=e.style.stopColor,r=n(i,"hsla"),p=r.toString("hsl")):p="#bada55";
for(var v,b=m[Symbol.iterator]();!(v=b.next()).done;)o=v.value,o.style[this.context]=p
},_onLinearGradientPaintButtonClick:function(){var i,o,a,c,d,m,f,g,v,b,y,x;app.canvas.undoManager.checkpoint("Change paint type");
var _=app.canvas,S=_.selectedElements,w=_.selectedTextRange;u(w);var C,E=l(this.context,S,w),P=E[0]||null,L=h(P,this.context);
"solid"===L?(i=getComputedStyle(P)[this.context],o=n(i,"hsla"),a=o.l-20,0>a&&(a=0),C=r("svg:linearGradient"),c=r("svg:stop"),c.offset.baseVal=0,c.style.stopColor=o.toString("hsl"),1!==o.a&&(c.style.stopOpacity=o.a),C.append(c),d=r("svg:stop"),d.offset.baseVal=1,m=new t(o.h,o.s,a,1,"hsla"),d.style.stopColor=m.toString("hsl"),C.append(d)):"linearGradient"===L?(f=getComputedStyle(P)[this.context],C=p(app.canvas.masterArtboard,f)):"radialGradient"===L?(g=getComputedStyle(P)[this.context],v=p(app.canvas.masterArtboard,g),C=r("svg:linearGradient"),C.innerHTML=v.innerHTML):C=s('\n        <linearGradient>\n          <stop offset="0" style="stop-color: #bada55"></stop>\n          <stop offset="1" style="stop-color: #758d29"></stop>\n        </linearGradient>\n      ');
for(var T,A=null,k=E[Symbol.iterator]();!(T=k.next()).done;)b=T.value,"tspan"===b.localName&&A&&A.closest("text")===b.closest("text")?b.style[this.context]=A.style[this.context]:(y=e(b),x=C.cloneNode(!0),x.setAttribute("id",app.canvas.generateUniqueID("gradient")),x.setAttribute("gradientUnits","userSpaceOnUse"),x.setAttribute("x1",y.x+y.width/2),x.setAttribute("y1",y.y),x.setAttribute("x2",y.x+y.width/2),x.setAttribute("y2",y.y+y.height),app.canvas.defs.append(x),b.style[this.context]="url(#"+x.id+")"),"tspan"===b.localName&&(A=b)
},_onRadialGradientPaintButtonClick:function(){var i,o,a,c,d,m,f,g,v,b,y,x;app.canvas.undoManager.checkpoint("Change paint type");
var _=app.canvas,S=_.selectedElements,w=_.selectedTextRange;u(w);var C,E=l(this.context,S,w),P=E[0]||null,L=h(P,this.context);
"solid"===L?(i=getComputedStyle(P)[this.context],o=n(i,"hsla"),a=o.l-20,0>a&&(a=0),C=r("svg:radialGradient"),c=r("svg:stop"),c.offset.baseVal=0,c.style.stopColor=o.toString("hsl"),1!==o.a&&(c.style.stopOpacity=o.a),C.append(c),d=r("svg:stop"),d.offset.baseVal=1,m=new t(o.h,o.s,a,1,"hsla"),d.style.stopColor=m.toString("hsl"),C.append(d)):"linearGradient"===L?(f=getComputedStyle(P)[this.context],g=p(app.canvas.masterArtboard,f),C=r("svg:radialGradient"),C.innerHTML=g.innerHTML):"radialGradient"===L?(v=getComputedStyle(P)[this.context],C=p(app.canvas.masterArtboard,v)):C=s('\n        <radialGradient>\n          <stop offset="0" style="stop-color: #bada55"></stop>\n          <stop offset="1" style="stop-color: #758d29"></stop>\n        </radialGradient>\n      ');
for(var T,A=null,k=E[Symbol.iterator]();!(T=k.next()).done;)b=T.value,"tspan"===b.localName&&A&&A.closest("text")===b.closest("text")?b.style[this.context]=A.style[this.context]:(y=e(b),x=C.cloneNode(!0),x.setAttribute("id",app.canvas.generateUniqueID("gradient")),x.setAttribute("gradientUnits","userSpaceOnUse"),x.setAttribute("cx",y.x+y.width/2),x.setAttribute("cy",y.y+y.height/2),x.setAttribute("r",y.width/2),app.canvas.defs.append(x),b.style[this.context]="url(#"+x.id+")"),"tspan"===b.localName&&(A=b)
},_onNonePaintButtonClick:function(){var t;app.canvas.undoManager.checkpoint("Paint type");
var e=app.canvas,n=e.selectedElements,i=e.selectedTextRange;u(i);for(var r,o=l(this.context,n,i),s=o[Symbol.iterator]();!(r=s.next()).done;)t=r.value,t.style[this.context]="none"
},_onSpreadMethodButtonsClick:function(t){var e,n,i;if("bx-button"===t.target.localName&&0===t.button){var r=t.target,o=r.pressed,s=r.mixed,a=r.value;
if(o!==!0||s!==!1){app.canvas.undoManager.checkpoint("Spread Method");for(var u,c=app.canvas,p=c.selectedElements,m=c.selectedTextRange,f=l(this.context,p,m),g=f[Symbol.iterator]();!(u=g.next()).done;)e=u.value,n=h(e,this.context),("linearGradient"===n||"radialGradient"===n)&&(i=d(e,this.context),i.setAttribute("spreadMethod",a))
}}},_onColorPickerColorChangeStart:function(){var t,e,n,i=this;app.canvas.undoManager.checkpoint("Change Color");
var r=app.canvas,o=r.selectedElements,s=r.selectedTextRange;u(s);var a,c,p,m=l(this.context,o,s),f=m[0]||null,g=h(f,this.context);
"solid"===g?p=getComputedStyle(f)[this.context]:"linearGradient"===g||"radialGradient"===g?(t=d(f,this.context),e=t.children[0],p=e.style.stopColor):p="#bada55";
for(var v,b=m[Symbol.iterator]();!(v=b.next()).done;)n=v.value,n!==f&&"solid"===g&&(n.style[this.context]=p);
this._colorPicker.addEventListener("change",a=function(){for(var t,e=function(){var e,n,r,o,s,a,l,u=t.value;
if(e=h(u,i.context),"solid"===e)u.style[i.context]=i._colorPicker.color;else if("linearGradient"===e){n=d(u,i.context),r=i._linearGradientHud.selectedStops.filter(function(t){return t.parentElement===n
});for(var c,p=r[Symbol.iterator]();!(c=p.next()).done;)o=c.value,o.style.stopColor=i._colorPicker.color
}else if("radialGradient"===e){s=d(u,i.context),a=i._radialGradientHud.selectedStops.filter(function(t){return t.parentElement===s
});for(var m,f=a[Symbol.iterator]();!(m=f.next()).done;)l=m.value,l.style.stopColor=i._colorPicker.color
}},n=m[Symbol.iterator]();!(t=n.next()).done;)e()}),this._colorPicker.addEventListener("changeend",c=function(){i._colorPicker.removeEventListener("change",a),i._colorPicker.removeEventListener("changeend",c)
})},_onColorPickerHintClick:function(t){0===t.button&&"edit-tool-span"===t.target.id&&app.toggleTool("edit-tool")
},_update:function(){var t=app.canvas,e=t.selectedElements,n=t.selectedTextRange,i=l(this.context,e,n);
this._updatePaintTypeSection(i),this._updateColorSection(i),this._updateSpreadMethodSection(i)
},_updatePaintTypeSection:function(t){var e,n,i,r,o,s,a,u;t||(t=l(this.context,app.canvas.selectedElements,app.canvas.selectedTextRange));
var c=t[0]||null;if(null===c){this._paintTypeSectionHeading.disabled=!0;for(var d,p=this._paintTypeButtons.children[Symbol.iterator]();!(d=p.next()).done;)e=d.value,e.disabled=!0,e.pressed=!1,e.mixed=!1
}else if(n=h(c,this.context),i=m(t,this.context),this._paintTypeSectionHeading.disabled=!1,"solid"===n)for(var f,g=this._paintTypeButtons.children[Symbol.iterator]();!(f=g.next()).done;)r=f.value,r.disabled=!1,"solid"===r.id?(r.pressed=!0,r.mixed=i):(r.pressed=!1,r.mixed=!1);
else if("linearGradient"===n)for(var v,b=this._paintTypeButtons.children[Symbol.iterator]();!(v=b.next()).done;)o=v.value,o.disabled=!1,"linear-gradient"===o.id?(o.pressed=!0,o.mixed=i):(o.pressed=!1,o.mixed=!1);
else if("radialGradient"===n)for(var y,x=this._paintTypeButtons.children[Symbol.iterator]();!(y=x.next()).done;)s=y.value,s.disabled=!1,"radial-gradient"===s.id?(s.pressed=!0,s.mixed=i):(s.pressed=!1,s.mixed=!1);
else if("pattern"===n)for(var _,S=this._paintTypeButtons.children[Symbol.iterator]();!(_=S.next()).done;)a=_.value,a.disabled=!1,"pattern"===a.id?(a.pressed=!0,a.mixed=i):(a.pressed=!1,a.mixed=!1);
else if("none"===n)for(var w,C=this._paintTypeButtons.children[Symbol.iterator]();!(w=C.next()).done;)u=w.value,u.disabled=!1,"none"===u.id?(u.pressed=!0,u.mixed=i):(u.pressed=!1,u.mixed=!1)
},_updateColorSection:function(t){var e,n,i;t||(t=l(this.context,app.canvas.selectedElements,app.canvas.selectedTextRange));
var r=t[0]||null;null===r?this._colorSection.hidden=!0:(e=h(r,this.context),n=m(t,this.context),"solid"===e?(this._colorSection.hidden=!1,this._colorPicker.hidden=!1,this._colorPicker.color=getComputedStyle(r)[this.context],this._colorPicker.mixed=n,this._colorPickerHint.innerHTML=""):"linearGradient"===e||"radialGradient"===e?(i=this["_"+e+"Hud"].selectedStops,this._colorSection.hidden=!1,this._colorPicker.mixed=n,0===i.length?(this._colorPicker.hidden=!0,this._colorPickerHint.innerHTML='Select stop to recolor with <span id="edit-tool-span">Edit Tool</span>.'):(this._colorPicker.hidden=!1,this._colorPicker.color=getComputedStyle(i[0]).stopColor,this._colorPickerHint.innerHTML="")):"pattern"===e?this._colorSection.hidden=!0:"none"===e&&(this._colorSection.hidden=!0))
},_updateSpreadMethodSection:function(t){var e,n,i,r,o,s;t||(t=l(this.context,app.canvas.selectedElements,app.canvas.selectedTextRange));
var a=t[0]||null;if(null===a)this._spreadMethodSection.hidden=!0;else if(e=h(a,this.context),"linearGradient"===e||"radialGradient"===e){this._spreadMethodSection.hidden=!1,n=d(a,this.context),i=!1,r=[];
for(var u,c=t[Symbol.iterator]();!(u=c.next()).done;)o=u.value,s=d(o,this.context),s&&s.localName.endsWith("Gradient")&&s.spreadMethod.baseVal!==n.spreadMethod.baseVal&&(i=!0);
n.spreadMethod.baseVal===SVGGradientElement.SVG_SPREADMETHOD_REPEAT?(this._repeatSpreadMethodButton.pressed=!0,this._repeatSpreadMethodButton.mixed=i,this._padSpreadMethodButton.pressed=!1,this._padSpreadMethodButton.mixed=!1,this._reflectSpreadMethodButton.pressed=!1,this._reflectSpreadMethodButton.mixed=!1):n.spreadMethod.baseVal===SVGGradientElement.SVG_SPREADMETHOD_PAD?(this._repeatSpreadMethodButton.pressed=!1,this._repeatSpreadMethodButton.mixed=!1,this._padSpreadMethodButton.pressed=!0,this._padSpreadMethodButton.mixed=i,this._reflectSpreadMethodButton.pressed=!1,this._reflectSpreadMethodButton.mixed=!1):n.spreadMethod.baseVal===SVGGradientElement.SVG_SPREADMETHOD_REFLECT&&(this._repeatSpreadMethodButton.pressed=!1,this._repeatSpreadMethodButton.mixed=!1,this._padSpreadMethodButton.pressed=!1,this._padSpreadMethodButton.mixed=!1,this._reflectSpreadMethodButton.pressed=!0,this._reflectSpreadMethodButton.mixed=i)
}else this._spreadMethodSection.hidden=!0}},{},HTMLElement);var b=o("section","bx-paintsection",g);
return{get default(){return b}}}),System.register("elements/bx-panel",[],function(){"use strict";
var t=System.get("utils/dom").registerElement,e=(System.get("utils/math").normalize,System.get("utils/time").createTimeout),n=5,i=7,r=5,o=7,s=!1,a='\n<style>\n  @import url("stylesheets/bx-panel.css");\n  @import url("stylesheets/scrollbars.css");\n</style>\n\n<div id="container">\n  <header>\n    <h1>Panel</h1>\n  </header>\n\n  <main>\n    <content></content>\n  </main>\n\n  <div id="resize-grippies">\n    <div class="grippie edge" data-position="top"></div>\n    <div class="grippie edge" data-position="bottom"></div>\n    <div class="grippie edge" data-position="left"></div>\n    <div class="grippie edge" data-position="right"></div>\n    <div class="grippie corner" data-position="top-left"></div>\n    <div class="grippie corner" data-position="top-right"></div>\n    <div class="grippie corner" data-position="bottom-left"></div>\n    <div class="grippie corner" data-position="bottom-right"></div>\n  </div>\n</div>\n',l=function(){$traceurRuntime.defaultSuperCall(this,u.prototype,arguments)
},u=l;$traceurRuntime.createClass(l,{createdCallback:function(){var t=this;this.createShadowRoot(),this.shadowRoot.innerHTML=a,this._main=this.shadowRoot.querySelector("main"),this._heading=this.shadowRoot.querySelector("h1"),this._header=this.shadowRoot.querySelector("header"),this._resizeGripppies=this.shadowRoot.querySelector("#resize-grippies"),this._prefferedWidth=null,this._prefferedHeight=null,this._onLabelChange(),s&&this.setAttribute("debug",""),this.addEventListener("mouseenter",function(){t._defaultCursor=app.registerCursor("default",-100)
}),this.addEventListener("mouseleave",function(){app.unregisterCursor(t._defaultCursor)
}),this._resizeGripppies.addEventListener("mousedown",function(e){t._onResizeGrippieMouseDown(e)
})},enabledCallback:function(){for(var t,e,n=this,i=this.children[Symbol.iterator]();!(e=i.next()).done;)t=e.value,t.enabledCallback&&t.enabledCallback();
app.config.get("bx-panel#"+this.id+":size",function(t){var e,i,r;t&&(e=t,i=e[0],r=e[1],n._prefferedWidth=i,n._prefferedHeight=r,n.updateSizing())
}),this.updateSizing(),window.addEventListener("resize",this._windowResizeListener=function(){n._onWindowResize()
})},disabledCallback:function(){for(var t,e,n=this.children[Symbol.iterator]();!(e=n.next()).done;)t=e.value,t.disabledCallback&&t.disabledCallback();
window.removeEventListener("resize",this._windowResizeListener)},attributeChangedCallback:function(t,e,n){e!==n&&"label"===t&&this._onLabelChange()
},get label(){return this.getAttribute("label")},set label(t){t?this.setAttribute("label",t):this.removeAttribute("label")
},get button(){for(var t=this.parentNode;t.parentNode;)t=t.parentNode;return t?t.querySelector('bx-button[href="#'+this.id+'"]'):null
},_onLabelChange:function(){this._heading.textContent=this.label},_onWindowResize:function(){this.updateSizing()
},_onResizeGrippieMouseDown:function(t){var s,a,l=this,u=t.target.dataset.position,c=this.button.getBoundingClientRect(),h=this.getBoundingClientRect(),d=getComputedStyle(this),p=h.left,m=h.top,f=h.width,g=h.height,v=p,b=m,y=f,x=g,_="none"===d.minWidth?0:parseFloat(d.minWidth),S="none"===d.minHeight?0:parseFloat(d.minHeight),w="none"===d.maxWidth?1/0:parseFloat(d.maxWidth),C="none"===d.maxHeight?1/0:parseFloat(d.maxHeight),E=null;
"top"===u||"bottom"===u?E="ns-resize":"left"===u||"right"===u?E="ew-resize":"top-left"===u?E="nwse-resize":"top-right"===u?E="nesw-resize":"bottom-left"===u?E="nesw-resize":"bottom-right"===u&&(E="nwse-resize");
var P=app.registerCursor(E,900);window.addEventListener("mousemove",s=function(e){var s=e.clientX-t.clientX,a=e.clientY-t.clientY,c=function(){f=_>y+s?_:y+s>w?w:y+s,v+f+o>window.innerWidth&&(f=window.innerWidth-v-o),l.style.width=f+"px"
},h=function(){_>y-s?(p=v+(y-_),f=_):y-s>w?(p=v+(y-w),f=w):(p=v+s,f=y-s),r>p&&(p=r,f=v+y-r),l.style.left=p+"px",l.style.width=f+"px"
},d=function(){S>x-a?(m=b+(x-S),g=S):x-a>C?(m=b+(x-C),g=C):(m=b+a,g=x-a),n>m&&(m=n,g=b+x-n),l.style.top=m+"px",l.style.height=g+"px"
},E=function(){g=S>x+a?S:x+a>C?C:x+a,b+g+i>window.innerHeight&&(g=window.innerHeight-b-i),l.style.height=g+"px"
};"right"===u?c():"left"===u?h():"top"===u?d():"bottom"===u?E():"bottom-right"===u?(E(),c()):"bottom-left"===u?(E(),h()):"top-left"===u?(d(),h()):"top-right"===u&&(d(),c())
}),window.addEventListener("mouseup",a=function(){window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",a),app.unregisterCursor(P);
var t=c.top+g+i-window.innerHeight;p=c.right+r+f+o<=window.innerWidth?c.right+o:c.left-o-f,0>=t?m=c.top:c.top-t>=n?m=c.top-t:(m=n,g=window.innerHeight-n-i),l.style.transition="ease 0.3s all",l.style.left=p+"px",l.style.top=m+"px",l.style.width=f+"px",l.style.height=g+"px",e(300,function(){return l.style.transition=null
}),l._prefferedWidth=f,l._prefferedHeight=g,l.id&&app.config.set("bx-panel#"+l.id+":size",[f,g])
})},updateSizing:function(){var t;null!==this._prefferedWidth&&(this.style.width=this._prefferedWidth+"px"),null!==this._prefferedHeight&&(this.style.height=this._prefferedHeight+"px");
var e=this.button.getBoundingClientRect(),s=this.getBoundingClientRect();this.style.left=e.right+r+s.width+o<=window.innerWidth?e.right+r+"px":e.left-o-s.width+"px",e.top+s.height+i>window.innerHeight?(t=e.top+s.height+i-window.innerHeight,e.top-t<n?(this.style.top=n+"px",this.style.height=window.innerHeight-n-i+"px"):this.style.top=e.top-t+"px"):this.style.top=e.top+"px"
}},{},HTMLElement);var c=t("bx-panel",l);return{get default(){return c}}}),System.register("elements/bx-pathsedithud",[],function(){"use strict";
var t=System.get("utils/array").compare,e=(System.get("utils/bbox").getUserBBox,System.get("utils/color").generateRandomHexColorString,System.get("utils/dom")),n=e.createElement,i=e.createSVGPoint,r=e.registerElement,o=System.get("utils/event"),s=o.getShortcutForKeyboardEvent,a=o.isMouseMoveIntentional,l=System.get("utils/function").throttle,u=System.get("utils/math"),c=(u.abs,u.max),h=u.pow,d=System.get("utils/object").keys,p=System.get("utils/point"),m=p.comparePoints,f=p.getPerpendicularDistance,g=(System.get("utils/relationship").getGraphicsElements,System.get("utils/transform").getScale),v=System.get("utils/path"),b=v.createSeg,y=(v.ellipseToPath,v.rectToPath,v.getCubicCurveTParam),x=v.getNearestPointOnPath,_=v.splitCurve,S=System.get("classes/enum").default,w=System.get("classes/vector").default,C=5,E=4,P='\n  <style>@import url("stylesheets/bx-pathsedithud.css");</style>\n\n  <g id="outline-grippies"></g>\n  <g id="control-lines"></g>\n  <g id="node-grippies"></g>\n  <g id="control-grippies"></g>\n',L=new S("path","seg","nextSeg","initialX","initialY","initialX1","initialY1","initialX2","initialY2","transform","initialData","selectedSegs"),T=function(){$traceurRuntime.defaultSuperCall(this,A.prototype,arguments)
},A=T;$traceurRuntime.createClass(T,{createdCallback:function(){var t=this;this.commands={selectAll:{label:"Select All",enabled:function(){return!0
},exec:function(){return console.log("select all segs")}},"delete":{label:"Delete",shortcut:["Backspace"],enabled:function(){return!0
},exec:function(){return console.log("delete segs")}}},this._selectedSegs=[],this._draggedOutlineGrippie=null,this._draggedNodeGrippie=null,this._draggedControlGrippie=null,this.createShadowRoot(),this.shadowRoot.innerHTML=P,this._outlineGrippies=this.shadowRoot.querySelector("#outline-grippies"),this._nodeGrippies=this.shadowRoot.querySelector("#node-grippies"),this._controlGrippies=this.shadowRoot.querySelector("#control-grippies"),this._controlLines=this.shadowRoot.querySelector("#control-lines"),this._updateOutlineGrippies500ms=l(this._updateOutlineGrippies,500,this),this._updateNodeGrippies40ms=l(this._updateNodeGrippies,40,this),this._updateControlGrippiesAndControlLines40ms=l(this._updateControlGrippiesAndControlLines,40,this),this._updateGrippiesSize40ms=l(this._updateGrippiesSize,40,this),this.shadowRoot.addEventListener("mousedown",function(e){t._onShadowRootMouseDown(e)
}),this.shadowRoot.addEventListener("dblclick",function(e){t._onShadowRootDblClick(e)
}),this.shadowRoot.addEventListener("keydown",function(e){t._onKeyDown(e)})},enabledCallback:function(){var t=this;
this._updateOutlineGrippies(),app.canvas.undoManager.addEventListener("undo",this._undoListener=function(){t._onUndoOrRedo()
}),app.canvas.undoManager.addEventListener("redo",this._redoListener=function(){t._onUndoOrRedo()
}),app.canvas.addEventListener("selectedelementschange",this._selectedElementsChangeListener=function(){t._onSelectedElementsChange()
}),app.canvas.addEventListener("contentmutation",this._contentMutationListener=function(){t._onCanvasContentMutation()
}),app.canvas.addEventListener("zoomchange",this._zoomChangeListener=function(){t._onZoomChange()
}),app.canvas.content.addEventListener("mousedown",this._contentMouseDownListener=function(e){t._onCanvasContentMouseDown(e)
}),this._onSelectedElementsChange()},disabledCallback:function(){app.canvas.undoManager.removeEventListener("undo",this._undoListener),app.canvas.undoManager.removeEventListener("redo",this._redoListener),app.canvas.removeEventListener("selectedelementschange",this._selectedElementsChangeListener),app.canvas.removeEventListener("contentmutation",this._contentMutationListener),app.canvas.removeEventListener("zoomchange",this._zoomChangeListener),app.canvas.content.removeEventListener("mousedown",this._contentMouseDownListener)
},get selectedSegs(){return this._selectedSegs},set selectedSegs(t){for(var e,n,i=t[Symbol.iterator]();!(n=i.next()).done;)if(e=n.value,!e[L.path])throw new Error("Selected seg must have Symbols.path property.");
this._selectedSegs=$traceurRuntime.spread(t),this._updateNodeGrippies40ms(),this._updateControlGrippiesAndControlLines40ms()
},_onSelectedElementsChange:function(){this._updateOutlineGrippies500ms(),this._updateNodeGrippies40ms(),this._updateGrippiesSize40ms()
},_onCanvasContentMutation:function(){this._updateOutlineGrippies500ms(),this._updateNodeGrippies40ms(),this._updateControlGrippiesAndControlLines40ms()
},_onUndoOrRedo:function(){this.selectedSegs=[]},_onZoomChange:function(){this._updateOutlineGrippies500ms(),this._updateGrippiesSize40ms()
},_onShadowRootMouseDown:function(t){t.target.classList.contains("node-grippie")?this._onNodeGrippieMouseDown(t):t.target.classList.contains("outline-grippie")?this._onOutlineGrippieMouseDown(t):t.target.classList.contains("control-grippie")&&this._onControlGrippieMouseDown(t)
},_onShadowRootDblClick:function(t){t.target.classList.contains("control-grippie")?this._onControlGrippieDblClick(t):t.target.classList.contains("outline-grippie")&&this._onOutlineGrippieDblClick(t)
},_onCanvasContentMouseDown:function(){app.modKeys.shift===!1&&(this.selectedSegs=[])
},_onNodeGrippieMouseDown:function(t){var e=this;if(0===t.button){var n=app.modKeys.shift,i=t.target,r=i[L.seg],o=!1;
this.selectedSegs.includes(r)===!1&&(r[L.path]=i[L.path],n===!1?this.selectedSegs=[r]:n===!0&&(this.selectedSegs=$traceurRuntime.spread(this.selectedSegs,[r])),o=!0);
var s,l,u=!1;window.addEventListener("mousemove",s=function(n){a(t,n)!==!1&&(window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",l),u=!0,e._onNodeGrippieDragStart(t))
}),window.addEventListener("mouseup",l=function(){window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",l),u===!1&&o===!1&&n===!0&&(e.selectedSegs=e.selectedSegs.filter(function(t){return t!==r
}))})}},_onNodeGrippieDragStart:function(t){for(var e,n,r,o,s=this,a=new Set,l=this.selectedSegs[Symbol.iterator]();!(o=l.next()).done;)e=o.value,n=e[L.path],r=this._getNextSeg(n,e),e[L.initialX]=e.x,e[L.initialY]=e.y,e[L.nextSeg]=r,"C"===e.pathSegTypeAsLetter&&(e[L.initialX2]=e.x2,e[L.initialY2]=e.y2),r&&"C"===r.pathSegTypeAsLetter&&(r[L.initialX1]=r.x1,r[L.initialY1]=r.y1),a.add(n);
for(var u,c=this,h=function(){var t=u.value;t[L.transform]=t.getScreenCTM().inverse(),t[L.initialData]=t.getAttribute("d"),t[L.selectedSegs]=c.selectedSegs.filter(function(e){return e[L.path]===t
})},d=a[Symbol.iterator]();!(u=d.next()).done;)h();var p,m,f=i(t.clientX,t.clientY);
this._draggedNodeGrippie=t.path[0],window.addEventListener("mousemove",p=function(t){for(var e,n,r,o,s,l,u,c,h=i(t.clientX,t.clientY),d=a[Symbol.iterator]();!(c=d.next()).done;){e=c.value,n=f.matrixTransform(e[L.transform]),r=h.matrixTransform(e[L.transform]),o=r.x-n.x,s=r.y-n.y;
for(var p,m=e[L.selectedSegs][Symbol.iterator]();!(p=m.next()).done;)l=p.value,l.x=l[L.initialX]+o,l.y=l[L.initialY]+s,"C"===l.pathSegTypeAsLetter&&(l.x2=l[L.initialX2]+o,l.y2=l[L.initialY2]+s),u=l[L.nextSeg],u&&"C"===u.pathSegTypeAsLetter&&(u.x1=u[L.initialX1]+o,u.y1=u[L.initialY1]+s);
app.canvas.pathDataChangeCallback(e,e[L.initialData])}}),window.addEventListener("mouseup",m=function(){window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",m),s._draggedNodeGrippie=null
})},_onControlGrippieMouseDown:function(t){var e,n,r=this,o=t.path[0],s=o[L.path],a=o[L.seg],l=s.getAttribute("d"),u=s.getScreenCTM().inverse(),c=!1;
this._draggedControlGrippie=o,window.addEventListener("mousemove",e=function(t){var e,n,h,d,p,m,g,v,b,y,x,_,S,C,E,P,L,T;
c===!1&&(c=!0,app.canvas.undoManager.checkpoint("Move control point"));var A=i(t.clientX,t.clientY).matrixTransform(u),k=app.modKeys,O=k.shift,M=k.ctrl;
"1"===o.dataset.index?(e=r._getPreviousSeg(s,a),n=i(a.x1,a.y1),h=i(e.x2,e.y2),d=i(e.x,e.y),p=f(d,n,h),a.x1=A.x,a.y1=A.y,.01>p?M===!1?(m=new w(d,A),m=m.getOppositeVector(),m.length=new w(d,h).length,e.x2=d.x+m.x,e.y2=d.y+m.y):O===!0&&M===!0&&(g=new w(d,A),g=g.negate(),e.x2=d.x+g.x,e.y2=d.y+g.y):O===!0&&M===!1?(v=new w(d,A),v=v.getOppositeVector(),v.length=new w(d,h).length,e.x2=d.x+v.x,e.y2=d.y+v.y):O===!0&&M===!0&&(b=new w(d,A),b=b.negate(),e.x2=d.x+b.x,e.y2=d.y+b.y)):"2"===o.dataset.index&&(y=r._getNextSeg(s,a),x=i(a.x2,a.y2),_=i(y.x1,y.y1),S=i(a.x,a.y),C=f(S,x,_),a.x2=A.x,a.y2=A.y,.01>C?M===!1?(E=new w(S,A),E=E.getOppositeVector(),E.length=new w(S,_).length,y.x1=S.x+E.x,y.y1=S.y+E.y):O===!0&&M===!0&&(P=new w(S,A),P=P.negate(),y.x1=S.x+P.x,y.y1=S.y+P.y):O===!0&&M===!1?(L=new w(S,A),L=L.getOppositeVector(),L.length=new w(S,_).length,y.x1=S.x+L.x,y.y1=S.y+L.y):O===!0&&M===!0&&(T=new w(S,A),T=T.negate(),y.x1=S.x+T.x,y.y1=S.y+T.y)),app.canvas.pathDataChangeCallback(s,l)
}),window.addEventListener("mouseup",n=function(){window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",n),r._draggedControlGrippie=null
})},_onControlGrippieDblClick:function(t){var e=t.target,n=e[L.seg],i=e[L.path],r=this._getPreviousSeg(i,n),o=i.getAttribute("d");
"2"===e.dataset.index?(n.x2=n.x,n.y2=n.y):"1"===e.dataset.index&&(n.x1=r.x,n.y1=r.y),app.canvas.pathDataChangeCallback(i,o)
},_onOutlineGrippieMouseDown:function(t){var e,n,r,o=this,s=app.modKeys,a=s.ctrl,l=s.shift,u=t.target[L.path],c=u.getScreenCTM().inverse(),d=i(t.clientX,t.clientY).matrixTransform(c),p=x(u,d),m=p[0],f=p[1],g=u.getPathSegAtLength(f),v=u.pathSegList[g],b=this._getPreviousSeg(u,v),_=this._getNextSeg(u,v),S=b?b.pathSegTypeAsLetter:null,w=_?_.pathSegTypeAsLetter:null,C=i(b.x,b.y),E=i(v.x,v.y),P=u.getAttribute("d"),T=!1,A=!1,k=0,O=0,M=!1;
v[L.path]=u,b[L.path]=u,this.selectedSegs=[],this._draggedOutlineGrippie=t.target,"C"===S&&(l===!0?T=!0:a===!0&&l===!1?T=!1:this._isSegStartSmooth(v,b)&&(T=!0)),"C"===w&&(l===!0?A=!0:a===!0&&l===!1?A=!1:this._isSegEndSmooth(v,_)&&(A=!0));
var j=function(){var t=void 0!==arguments[0]?arguments[0]:k,e=void 0!==arguments[1]?arguments[1]:O,n=i(t,e).matrixTransform(c),r=i(v.x1,v.y1),s=i(v.x2,v.y2),a=y(m,C,r,s,E),l=1;
if(1/6>=a?l=0:.5>=a?l=h((6*a-1)/2,3)/2:5/6>=a&&(l=(1-h((6*(1-a)-1)/2,3))/2+.5),-1!==a){var d=(1-l)/(3*a*(1-a)*(1-a)),p=l/(3*a*a*(1-a)),f=n.x-m.x,g=n.y-m.y;
v.x1=v.x1+d*f,v.y1=v.y1+d*g,v.x2=v.x2+p*f,v.y2=v.y2+p*g,T&&o._smoothSegEnd(b,v),A&&o._smoothSegStart(_,v),m=n,k=t,O=e,app.canvas.pathDataChangeCallback(u,P)
}};app.addEventListener("modkeyschange",r=function(){var t=app.modKeys,e=t.ctrl,n=t.shift;
e===!0&&n===!1?(T=!1,A=!1):n===!0&&("C"===S&&(T=!0),"C"===w&&(A=!0)),j()}),window.addEventListener("mousemove",e=function(t){M===!1&&(M=!0,app.canvas.undoManager.checkpoint("Edit path")),j(t.clientX,t.clientY)
}),window.addEventListener("mouseup",n=function(){app.removeEventListener("modkeyschange",r),window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",n),o._draggedOutlineGrippie=null
})},_onOutlineGrippieDblClick:function(t){app.canvas.undoManager.checkpoint("Add path node");
var e=t.target[L.path],n=e.getAttribute("d"),r=e.getScreenCTM().inverse(),o=i(t.clientX,t.clientY).matrixTransform(r),s=x(e,o),a=s[0],l=s[1],u=e.getPathSegAtLength(l),c=e.pathSegList[u],h=this._getPreviousSeg(e,c),d=i(h.x,h.y),p=i(c.x,c.y),m=i(c.x1,c.y1),f=i(c.x2,c.y2),g=y(a,d,m,f,p),v=_(d,m,f,p,g),S=b("C",v[0][1].x,v[0][1].y,v[0][2].x,v[0][2].y,v[0][3].x,v[0][3].y),w=b("C",v[1][1].x,v[1][1].y,v[1][2].x,v[1][2].y,v[1][3].x,v[1][3].y);
e.pathSegList.replaceItem(S,u),e.pathSegList.insertItemBefore(w,u+1),app.canvas.pathDataChangeCallback(e,n)
},_onKeyDown:function(e){var n,i;if(console.log("down"),this.shadowRoot.activeElement&&0!==this.selectedSegs.length)for(var r,o=s(e),a=d(this.commands)[Symbol.iterator]();!(r=a.next()).done;)if(n=r.value,i=app.userShortcuts[n]?app.userShortcuts[n]:this.commands[n]&&this.commands[n].shortcut?this.commands[n].shortcut:app.commands[n]&&app.commands[n].shortcut?app.commands[n].shortcut:[],t(o,i)){e.stopPropagation(),e.preventDefault(),this.commands[n].enabled()&&this.commands[n].exec();
break}},_updateOutlineGrippies:function(){for(var t,e,i,r,o,s,a,l,u,h,d,p=document.createDocumentFragment(),m=this._getSelectedPaths()[Symbol.iterator]();!(d=m.next()).done;)t=d.value,e=t.getTransformToElement(this),i=n("svg:path"),i[L.path]=t,i.setAttribute("class","outline-grippie"),i.setAttribute("transform",e.toString()),r=t.getScreenCTM(),o=g(r),s=o.scaleX,a=o.scaleY,l=(s+a)/2,u=getComputedStyle(t),h=c(10,l*parseFloat(u.strokeWidth)),i.style.strokeWidth=h,t.hasAttribute("d")&&i.setAttribute("d",t.getAttribute("d")),p.append(i);
this._outlineGrippies.innerHTML="",this._outlineGrippies.append(p)},_updateNodeGrippies:function(){var t,e,r,o,s,a;
if(!this._draggedOutlineGrippie&&!this._draggedControlGrippie){for(var l,u=document.createDocumentFragment(),c=this._getSelectedPaths()[Symbol.iterator]();!(l=c.next()).done;){t=l.value,e=t.getTransformToElement(app.canvas.currentArtboard);
for(var h,d=t.pathSegList[Symbol.iterator]();!(h=d.next()).done;)r=h.value,("M"===r.pathSegTypeAsLetter||"C"===r.pathSegTypeAsLetter)&&(o=i(r.x,r.y),s=o.matrixTransform(e),a=n("svg:circle"),a.setAttribute("class","node-grippie"),a.setAttribute("cx",s.x),a.setAttribute("cy",s.y),a[L.seg]=r,a[L.path]=t,u.append(a),this.selectedSegs.includes(r)&&a.setAttribute("data-selected",""))
}this._nodeGrippies.innerHTML="",this._nodeGrippies.append(u),this._updateNodeGrippiesSize()
}},_updateControlGrippiesAndControlLines:function(){for(var t,e,r,o,s,a,l,u,c,h,d,p,f,g,v,b,y=document.createDocumentFragment(),x=document.createDocumentFragment(),_=this.selectedSegs[Symbol.iterator]();!(b=_.next()).done;)t=b.value,e=t[L.path],r=e.getTransformToElement(app.canvas.currentArtboard),o=this._getNextSeg(e,t),s=i(t.x,t.y),a=null,l=null,"C"===t.pathSegTypeAsLetter&&(a=i(t.x2,t.y2)),o&&"C"===o.pathSegTypeAsLetter&&(l=i(o.x1,o.y1)),a&&m(s,a)===!1&&(u=s.matrixTransform(r),c=a.matrixTransform(r),h=n("svg:circle"),h.setAttribute("class","control-grippie"),h.setAttribute("data-index","2"),h.setAttribute("cx",c.x),h.setAttribute("cy",c.y),h[L.seg]=t,h[L.path]=e,y.append(h),d=n("svg:line"),d.setAttribute("class","control-line"),d.setAttribute("x1",u.x),d.setAttribute("y1",u.y),d.setAttribute("x2",c.x),d.setAttribute("y2",c.y),x.append(d)),l&&m(s,l)===!1&&(p=s.matrixTransform(r),f=l.matrixTransform(r),g=n("svg:circle"),g.setAttribute("class","control-grippie"),g.setAttribute("data-index","1"),g.setAttribute("cx",f.x),g.setAttribute("cy",f.y),g[L.seg]=o,g[L.path]=e,y.append(g),v=n("svg:line"),v.setAttribute("class","control-line"),v.setAttribute("x1",p.x),v.setAttribute("y1",p.y),v.setAttribute("x2",f.x),v.setAttribute("y2",f.y),x.append(v));
this._controlGrippies.innerHTML="",this._controlGrippies.append(y),this._controlLines.innerHTML="",this._controlLines.append(x),this._updateControlGrippiesSize()
},_updateGrippiesSize:function(){this._updateNodeGrippiesSize(),this._updateControlGrippiesSize()
},_updateNodeGrippiesSize:function(){for(var t,e,n=this._nodeGrippies.querySelectorAll(".node-grippie")[Symbol.iterator]();!(e=n.next()).done;)t=e.value,t.setAttribute("r",C/app.canvas.scale)
},_updateControlGrippiesSize:function(){for(var t,e,n=this._controlGrippies.querySelectorAll(".control-grippie")[Symbol.iterator]();!(e=n.next()).done;)t=e.value,t.setAttribute("r",E/app.canvas.scale)
},_getSelectedPaths:function(){var t=[],e=function(n){for(var i,r,o=n[Symbol.iterator]();!(r=o.next()).done;)i=r.value,"path"===i.localName?i.hasAttribute("d")&&t.push(i):("g"===i.localName||"a"===i.localName)&&e(i.children)
};return e(app.canvas.selectedElements),t},_getNextSeg:function(t,e){for(var n=null,i=0;i<t.pathSegList.length;i+=1)if(t.pathSegList[i]===e&&i+1<t.pathSegList.length){n=t.pathSegList[i+1];
break}return n},_getPreviousSeg:function(t,e){for(var n=null,i=0;i<t.pathSegList.length;i+=1)if(t.pathSegList[i]===e&&i-1>=0){n=t.pathSegList[i-1];
break}return n},_isSegStartSmooth:function(t,e){var n,r,o,s,a=!1;return"C"===e.pathSegTypeAsLetter&&(n=i(e.x,e.y),r=i(t.x1,t.y1),o=i(e.x2,e.y2),s=f(n,r,o),m(n,r)===!1&&m(n,o)===!1&&.001>s&&(a=!0)),a
},_isSegEndSmooth:function(t,e){var n,r,o,s,a=!1;return"C"===e.pathSegTypeAsLetter&&(n=i(t.x,t.y),r=i(t.x2,t.y2),o=i(e.x1,e.y1),s=f(n,r,o),m(n,r)===!1&&m(n,o)===!1&&.001>s&&(a=!0)),a
},_smoothSegStart:function(t,e){var n=i(e.x,e.y),r=i(t.x1,t.y1),o=i(e.x2,e.y2),s=new w(n,r),a=new w(n,o),l=a.getOppositeVector();
l.length=s.length,t.x1=n.x+l.x,t.y1=n.y+l.y},_smoothSegEnd:function(t,e){var n=i(t.x,t.y),r=i(t.x2,t.y2),o=i(e.x1,e.y1),s=new w(n,r),a=new w(n,o),l=a.getOppositeVector();
l.length=s.length,t.x2=n.x+l.x,t.y2=n.y+l.y}},{},SVGGElement);var k=r("g","bx-pathsedithud",T);
return{get default(){return k}}}),System.register("elements/bx-preferences",[],function(){"use strict";
var t=System.get("elements/bx-app").default;System.get("elements/bx-button"),System.get("elements/bx-checkbox"),System.get("elements/bx-shortcutseditor");
var e=System.get("utils/dom").registerElement,n='\n  <style>@import url("stylesheets/scrollbars.css");</style>\n  <style>@import url("stylesheets/bx-preferences.css");</style>\n\n  <main>\n    <div id="buttons">\n      <bx-button\n        id="general-button"\n        data-view="general"\n        icon="prefs-general"\n        iconsize="25"\n        skin="bx-preferences"\n        label="General">\n      </bx-button>\n\n      <bx-button\n        id="shortcuts-button"\n        data-view="shortcuts"\n        icon="prefs-shortcuts"\n        iconsize="25"\n        skin="bx-preferences"\n        label="Shortcuts">\n      </bx-button>\n    </div>\n\n    <div id="views">\n      <div data-view="general" class="view" hidden>\n        <header>\n          <bx-icon name="prefs-general"></bx-icon>\n          <h1>General</h1>\n        </header>\n\n        <section>\n          <bx-checkbox\n            id="experimental-features-checkbox"\n            label="Enable experimental features">\n          </bx-checkbox>\n        </section>\n      </div>\n\n      <div data-view="shortcuts" class="view" hidden>\n        <header>\n          <bx-icon name="prefs-shortcuts"></bx-icon>\n          <h1>Shortcuts</h1>\n        </header>\n\n        <section>\n          <bx-shortcutseditor></bx-shortcutseditor>\n        </section>\n      </div>\n    </div>\n  </main>\n',i=function(){$traceurRuntime.defaultSuperCall(this,r.prototype,arguments)
},r=i;$traceurRuntime.createClass(i,{createdCallback:function(){var t=this;$traceurRuntime.superCall(this,r.prototype,"createdCallback",[]),this.createShadowRoot(),this.shadowRoot.innerHTML=n,this._buttons=this.shadowRoot.querySelector("#buttons"),this._views=this.shadowRoot.querySelector("#views"),this._experimentalFeaturesCheckbox=this.shadowRoot.querySelector("#experimental-features-checkbox"),this.config.get("bx-preferences:currentView",function(e){t._toggleView(e||"general")
}),this.config.get("bx-preferences:experimentalFeatures",function(e){e===!0&&t._experimentalFeaturesCheckbox.setAttribute("checked","")
}),this._buttons.addEventListener("click",function(e){t._onButtonsClick(e)}),this._experimentalFeaturesCheckbox.addEventListener("change",function(){t._onExperimentalFeaturesCheckboxChange()
})},_onButtonsClick:function(t){"bx-button"===t.target.localName&&0===t.button&&this._toggleView(t.target.dataset.view)
},_onExperimentalFeaturesCheckboxChange:function(){this.config.set("bx-preferences:experimentalFeatures",this._experimentalFeaturesCheckbox.checked)
},_toggleView:function(t){for(var e,n,i,r=this._views.children[Symbol.iterator]();!(i=r.next()).done;)e=i.value,e.hidden=e.dataset.view===t?!1:!0;
for(var o,s=this._buttons.children[Symbol.iterator]();!(o=s.next()).done;)n=o.value,n.pressed=n.dataset.view===t?!0:!1;
this.config.set("bx-preferences:currentView",t)}},{},t);var o=e("bx-preferences",i);
return{get default(){return o}}}),System.register("elements/bx-quadbeziertool",[],function(){"use strict";
var t=System.get("utils/dom").registerElement,e=function(){$traceurRuntime.defaultSuperCall(this,n.prototype,arguments)
},n=e;$traceurRuntime.createClass(e,{enabledCallback:function(){app.canvas.enableHud("outlines-hud"),app.canvas.enableHud("draw-quad-segs-hud")
},disabledCallback:function(){app.canvas.disableHud("outlines-hud"),app.canvas.disableHud("draw-quad-segs-hud")
}},{},HTMLElement);var i=t("bx-quadbeziertool",e);return{get default(){return i}}
}),System.register("elements/bx-quadsegsdrawhud",[],function(){"use strict";var t=System.get("classes/vector").default,e=System.get("utils/array").compare,n=System.get("utils/dom"),i=n.registerElement,r=n.createElement,o=n.createSVGPoint,s=System.get("utils/event").getShortcutForKeyboardEvent,a=System.get("utils/path"),l=a.cloneSeg,u=a.reversePath,c=a.normalizePathData,h=a.createSeg,d=System.get("utils/relationship").getGraphicsElements,p=System.get("utils/transform").normalizeTransform;
System.get("elements/bx-quadsegsketch");var m=10,f='\n  <style>@import url("stylesheets/bx-quadsegsdrawhud.css");</style>\n  <g id="node-grippies"></g>\n  <g id="segsketch" is="bx-quadsegsketch"></g>\n',g=function(){$traceurRuntime.defaultSuperCall(this,v.prototype,arguments)
},v=g;$traceurRuntime.createClass(g,{createdCallback:function(){this.createShadowRoot(),this.shadowRoot.innerHTML=f,this._nodeGrippies=this.shadowRoot.querySelector("#node-grippies"),this._segSketch=this.shadowRoot.querySelector("#segsketch")
},enabledCallback:function(){var t=this;this._mode="select",this._currentPath=null,window.addEventListener("keydown",this._keyDownListener=function(e){t._onKeyDown(e)
}),app.canvas.addEventListener("selectedelementschange",this._selectedElementsChangeListener=function(){t._onSelectedElementsChange()
}),app.canvas.addEventListener("zoomchange",this._zoomChangeListener=function(){t._onZoomChange()
}),app.canvas.addEventListener("contentmutation",this._contentMutationListener=function(e){t._onContentMutation(e)
}),app.canvas.content.addEventListener("mousedown",this._canvasMouseDownListener=function(e){t._onContentMouseDown(e)
}),this._nodeGrippies.addEventListener("mousedown",this._nodeGrippiesMouseDownListener=function(e){t._onNodeGrippieMouseDown(e)
}),this._onSelectedElementsChange()},disabledCallback:function(){window.removeEventListener("keydown",this._keyDownListener),app.canvas.removeEventListener("selectedelementschange",this._selectedElementsChangeListener),app.canvas.removeEventListener("zoomchange",this._zoomChangeListener),app.canvas.removeEventListener("contentmutation",this._contentMutationListener),app.canvas.content.removeEventListener("mousedown",this._canvasMouseDownListener),this._nodeGrippies.removeEventListener("mousedown",this._nodeGrippiesMouseDownListener),this._mode="select",this._currentPath=null,this._segSketch.hide()
},_onSelectedElementsChange:function(){this._updateNodeGrippies()},_onZoomChange:function(){this._updateNodeGrippiesSize()
},_onContentMutation:function(t){var e,n=t.detail;if("childList"===n.type)for(var i,r=n.removedNodes[Symbol.iterator]();!(i=r.next()).done;)e=i.value,(e===this._currentPath||e.contains(this._currentPath))&&(this._mode="select",this._currentPath=null,this._segSketch.hide(),this._updateNodeGrippies());
else(n.target===this._currentPath||n.target.contains(this._currentPath))&&this._updateNodeGrippies()
},_onContentMouseDown:function(e){var n,i,r=this,s=o(e.clientX,e.clientY),a=0;window.addEventListener("mousemove",n=function(e){var n=o(e.clientX,e.clientY),i=new t(s,n).length;
i>a&&(a=i)}),window.addEventListener("mouseup",i=function(t){window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",i),r._onContentClick(e,t),4>a&&r._onContentDirectClick(e,t)
})},_onContentClick:function(t){{var e,n,i,r,o,s=t;s.clientX,s.clientY}"draw-forward"===this._mode?(this._currentPath.pathSegList.length>1&&app.canvas.undoManager.checkpoint("Draw path segment"),e=h("Q",this._segSketch.controlPoint.x,this._segSketch.controlPoint.y,this._segSketch.endPoint.x,this._segSketch.endPoint.y),n=this._currentPath.getAttribute("d"),this._currentPath.pathSegList.appendItem(e),c(this._currentPath),app.canvas.pathDataChangeCallback(this._currentPath,n)):"draw-backward"===this._mode&&(app.canvas.undoManager.checkpoint("Draw path segment"),i=this._currentPath.getAttribute("d"),r=this._currentPath.pathSegList.getItem(0),r.x=this._segSketch.startPoint.x,r.y=this._segSketch.startPoint.y,o=h("Q",this._segSketch.controlPoint.x,this._segSketch.controlPoint.y,this._segSketch.endPoint.x,this._segSketch.endPoint.y),this._currentPath.pathSegList.insertItemBefore(o,1),c(this._currentPath),app.canvas.pathDataChangeCallback(this._currentPath,i))
},_onContentDirectClick:function(t){var e,n,i,s,a,l,u=t,c=u.clientX,h=u.clientY;"select"===this._mode&&(app.canvas.undoManager.checkpoint("Draw path segment"),e=r("svg:path"),e.style.stroke="black",e.style.fill="none",n=app.canvas.currentContainer||app.canvas.currentArtboard,n.append(e),i=e.getScreenCTM().inverse(),s=o(c,h).matrixTransform(i),a=s.x,l=s.y,e.setAttribute("d","M "+a+" "+l),app.canvas.selectedElements=$traceurRuntime.spread(app.canvas.selectedElements,[e]),this._mode="draw-forward",this._currentPath=e,this._segSketch.show(e,"end"))
},_onNodeGrippieMouseDown:function(t){var e,n,i=this,r=t.target;this._nodeGrippies.addEventListener("mouseup",e=function(t){i._nodeGrippies.removeEventListener("mouseup",e),window.removeEventListener("mouseup",n);
var o=t.target,s=i._onNodeGrippieClick(r,t);r!==o||s||i._onNodeGrippieDirectClick(r,t)
}),window.addEventListener("mouseup",n=function(t){i._nodeGrippies.removeEventListener("mouseup",e),window.removeEventListener("mouseup",n),i._onNodeGrippieClick(r,t)
})},_onNodeGrippieClick:function(t){var e,n,i,r,o,s,a,d,m,f,g,v,b,y,x,_,S,w,C,E,P,L;
if("select"!==this._mode){if(t.ownerPath===this._currentPath)return e=t.dataset.position,n=this._currentPath.pathSegList.getItem(0),i=this._currentPath.pathSegList.getItem(this._currentPath.pathSegList.length-1),r=this._currentPath,o=this._currentPath.getAttribute("d"),"draw-forward"===this._mode&&"start"===e?(app.canvas.undoManager.checkpoint("Draw path segment"),s=h("Q",this._segSketch.controlPoint.x,this._segSketch.controlPoint.y,n.x,n.y),a=h("Z"),r.pathSegList.appendItem(s),r.pathSegList.appendItem(a),c(r),app.canvas.pathDataChangeCallback(r,o)):"draw-backward"===this._mode&&"end"===e&&(app.canvas.undoManager.checkpoint("Draw path segment"),d=h("Q",this._segSketch.controlPoint.x,this._segSketch.controlPoint.y,n.x,n.y),m=h("Z"),n.x=i.x,n.y=i.y,r.pathSegList.insertItemBefore(d,1),r.pathSegList.appendItem(m),c(r),app.canvas.pathDataChangeCallback(r,o)),this._mode="select",this._currentPath=null,this._segSketch.hide(),!0;
if(f=t.dataset.position,g=this._currentPath,v=t.ownerPath,g.pathSegList.length>1&&app.canvas.undoManager.checkpoint("Draw path segment"),b=g.getAttribute("d"),y=v.getAttribute("d"),x=v.getTransformToElement(g),v.setAttribute("transform",x.toString()),p(v),"draw-forward"===this._mode){"end"===f&&u(v),_=v.pathSegList.getItem(0),S=h("Q",this._segSketch.controlPoint.x,this._segSketch.controlPoint.y,_.x,_.y),g.pathSegList.appendItem(S),c(g);
for(var T=1;T<v.pathSegList.length;T+=1)w=v.pathSegList.getItem(T),g.pathSegList.appendItem(l(w));
v.setAttribute("d",""),app.canvas.pathDataChangeCallback(g,b),app.canvas.pathDataChangeCallback(v,y),v.remove()
}else if("draw-backward"===this._mode){"start"===f&&u(v),C=v.pathSegList.getItem(0),E=g.pathSegList.getItem(0),P=h("Q",this._segSketch.controlPoint.x,this._segSketch.controlPoint.y,E.x,E.y),E.x=C.x,E.y=C.y,g.pathSegList.removeItem(0),g.pathSegList.insertItemBefore(P,0);
for(var A=v.pathSegList.length-1;A>=0;A-=1)L=v.pathSegList.getItem(A),g.pathSegList.insertItemBefore(L,0);
c(g),v.setAttribute("d",""),app.canvas.pathDataChangeCallback(g,b),app.canvas.pathDataChangeCallback(v,y),v.remove()
}return this._mode="select",this._currentPath=null,this._segSketch.hide(),!0}},_onNodeGrippieDirectClick:function(t){var e;
"select"===this._mode&&(this._currentPath=t.ownerPath,e=t.dataset.position,"start"===e?(this._mode="draw-backward",this._segSketch.show(t.ownerPath,"start")):(this._mode="draw-forward",this._segSketch.show(t.ownerPath,"end")))
},_onKeyDown:function(t){var n,i,r;("draw-forward"===this._mode||"draw-backward"===this._mode)&&(n=s(t),e(n,["Enter"])===!0||e(n,["Esc"])===!0?(t.stopPropagation(),this._mode="select",this._currentPath=null,this._segSketch.hide()):e(n,["Shift","Enter"])===!0&&(t.stopPropagation(),i=this._currentPath.getAttribute("d"),r=h("Z"),this._currentPath.pathSegList.appendItem(r),app.canvas.pathDataChangeCallback(this._currentPath,i),this._mode="select",this._currentPath=null,this._segSketch.hide()))
},_updateNodeGrippies:function(){var t,e,n,i,s,a,l,u,c,h,p;this._nodeGrippies.innerHTML="";
for(var m,f=d(app.canvas.selectedElements,!0)[Symbol.iterator]();!(m=f.next()).done;)t=m.value,"path"===t.localName&&(e=t,n=e.pathSegList.length,0===n?(i=null,s=null):1===n?(i=e.pathSegList[0],s=null):n>1&&(i=e.pathSegList[0],s=e.pathSegList[n-1]),a=e.getTransformToElement(this),l=s&&"Z"===s.pathSegTypeAsLetter,i&&!l&&(u=o(i).matrixTransform(a),c=r("svg:ellipse"),c.setAttribute("class","node-grippie"),c.setAttribute("cx",u.x),c.setAttribute("cy",u.y),c.setAttribute("data-position","start"),c.ownerPath=e,this._nodeGrippies.append(c)),s&&!l&&(h=o(s).matrixTransform(a),p=r("svg:ellipse"),p.setAttribute("class","node-grippie"),p.setAttribute("cx",h.x),p.setAttribute("cy",h.y),p.setAttribute("data-position","end"),p.ownerPath=e,this._nodeGrippies.append(p)));
this._updateNodeGrippiesSize()},_updateNodeGrippiesSize:function(){for(var t,e,n=m/2/app.canvas.scale,i=this._nodeGrippies.children[Symbol.iterator]();!(e=i.next()).done;)t=e.value,t.setAttribute("rx",n),t.setAttribute("ry",n)
}},{},SVGGElement);var b=i("g","bx-quadsegsdrawhud",g);return{get default(){return b
}}}),System.register("elements/bx-quadsegsketch",[],function(){"use strict";var t=System.get("utils/dom"),e=t.registerElement,n=t.createSVGPoint,i=System.get("utils/object").freeze,r=System.get("utils/point"),o=r.getPointBetweenTwoPoints,s=r.getNearestPointOnLine,a=r.snapPointToAngleMultiple,l=System.get("classes/vector").default,u='\n  <style>@import url("stylesheets/bx-quadsegsketch.css");</style>\n  <path id="outline" d="M 0 0 Q 0 0 0 0"></path>\n  <line id="control-line-1"></line>\n  <line id="control-line-2"></line>\n  <circle id="control-point-grippie"></circle>\n',c=function(){$traceurRuntime.defaultSuperCall(this,h.prototype,arguments)
},h=c;$traceurRuntime.createClass(c,{createdCallback:function(){this.createShadowRoot(),this.shadowRoot.innerHTML=u,this._outline=this.shadowRoot.querySelector("#outline"),this._controlLine1=this.shadowRoot.querySelector("#control-line-1"),this._controlLine2=this.shadowRoot.querySelector("#control-line-2"),this._controlPointGrippie=this.shadowRoot.querySelector("#control-point-grippie"),this._path=null,this._position="end",this._snap="none",this._hasListeners=!1,this._clientX=null,this._clientY=null
},get startPoint(){return i(n(this._startPoint))},set startPoint(t){throw new Error("startPoint property is read-only.")
},get endPoint(){return i(n(this._endPoint))},set endPoint(t){throw new Error("endPoint property is read-only.")
},get controlPoint(){return i(n(this._controlPoint))},set controlPoint(t){throw new Error("controlPoint property is read-only.")
},show:function(t){var e=void 0!==arguments[1]?arguments[1]:"end";this._position=e,this._path=t,this._snap="none",this.style.visibility="visible",this._hasListeners===!1&&this._addListeners(),this._updateSegProperties(),this._updateSnapProperty(),this._updatePointProperties(),this._updateOutlines()
},hide:function(){this._path=null,this._clientX=null,this._clientY=null,this.style.visibility="hidden",this._hasListeners===!0&&this._removeListeners()
},_addListeners:function(){var t=this;this._hasListeners=!0,this._mouseDown=!1,app.addEventListener("modkeyschange",this._modKeysChangeListener=function(){t._mouseDown===!1&&(t._updateSnapProperty(),t._updatePointProperties(),t._updateOutlines())
}),app.canvas.addEventListener("contentmutation",this._contentMutationListener=function(e){t._onContentMutation(e)
}),app.canvas.addEventListener("mousedown",this._mouseDownListener=function(e){var i=t._path.getScreenCTM().inverse();
t._mouseDown=!0,t._mouseDownPoint=n(e.clientX,e.clientY),t._mouseDownPoint=t._mouseDownPoint.matrixTransform(i),t._mouseDownControlPoint=n(t._controlPoint),"end"===t._position?t._endPoint="paraxialPolygon"===t._snap?a(t._startPoint,t._endPoint,45):n(t._mouseDownPoint):"start"===t._position&&(t._endPoint="paraxialPolygon"===t._snap?a(t._startPoint,t._endPoint,45):n(n(t._firstSeg.x,t._firstSeg.y)))
}),window.addEventListener("mousemove",this._mouseMoveListener=function(e){t._clientX=e.clientX,t._clientY=e.clientY,t._updatePointProperties(),t._updateOutlines()
}),window.addEventListener("mouseup",this._mouseUpListener=function(){t._mouseDown=!1,t._updateSnapProperty()
})},_removeListeners:function(){this._hasListeners=!1,app.removeEventListener("modkeyschange",this._modKeysChangeListener),app.canvas.removeEventListener("contentmutation",this._contentMutationListener),app.canvas.removeEventListener("mousedown",this._mouseDownListener),window.removeEventListener("mousemove",this._mouseMoveListener),window.removeEventListener("mouseup",this._mouseUpListener)
},_onContentMutation:function(t){var e=t.detail;(e.target===this._path||e.target.contains(this._path))&&this._path.pathSegList.numberOfItems>0&&(this._updateSegProperties(),this._updateSnapProperty(),this._updatePointProperties(),this._updateOutlines())
},_updateSegProperties:function(){var t;if("end"===this._position){this._lastSeg=this._path.pathSegList.getItem(this._path.pathSegList.numberOfItems-1);
for(var e=this._path.pathSegList.length-1;e>=0;e-=1)if(t=this._path.pathSegList.getItem(e),"Z"!==t.pathSegTypeAsLetter){this._lastNonZSeg=t;
break}this._lastSegControlPoint="Q"===this._lastSeg.pathSegTypeAsLetter?n(this._lastSeg.x1,this._lastSeg.y1):"C"===this._lastSeg.pathSegTypeAsLetter?n(this._lastSeg.x2,this._lastSeg.y2):n(this._lastSeg.x,this._lastSeg.y),this._lastSegIsSmooth="Q"===this._lastSeg.pathSegTypeAsLetter?this._lastSeg.x1!==this._lastSeg.x||this._lastSeg.y1!==this._lastSeg.y:"C"===this._lastSeg.pathSegTypeAsLetter?this._lastSeg.x2!==this._lastSeg.x||this._lastSeg.y2!==this._lastSeg.y:!1
}else"start"===this._position&&(this._firstSeg=this._path.pathSegList.getItem(0),this._secondSeg=this._path.pathSegList.getItem(1),this._secondSegControlPoint="Q"===this._secondSeg.pathSegTypeAsLetter?n(this._secondSeg.x1,this._secondSeg.y1):"C"===this._secondSeg.pathSegTypeAsLetter?n(this._secondSeg.x1,this._secondSeg.y1):n(this._secondSeg.x,this._secondSeg.y),this._secondSegIsSmooth="Q"===this._secondSeg.pathSegTypeAsLetter?this._secondSeg.x1!==this._firstSeg.x&&this._secondSeg.y1!==this._firstSeg.y:"C"===this._secondSeg.pathSegTypeAsLetter?this._secondSeg.x1!==this._firstSeg.x&&this._secondSeg.y1!==this._firstSeg.y:!1)
},_updatePointProperties:function(){var t,e,i,r,u,c,h,d,p,m,f,g;this._mouseDown===!1?(t=this._path.getScreenCTM().inverse(),"end"===this._position?(this._startPoint=n(this._lastNonZSeg.x,this._lastNonZSeg.y),this._endPoint=null===this._clientX?n(this._startPoint):n(this._clientX,this._clientY).matrixTransform(t)):"start"===this._position&&(this._startPoint=null===this._clientX?n(this._firstSeg.x,this._firstSeg.y):n(this._clientX,this._clientY).matrixTransform(t),this._endPoint=n(this._firstSeg.x,this._firstSeg.y)),"none"===this._snap?(e=new l(this._startPoint,this._endPoint),"end"===this._position?i=new l(this._startPoint,this._lastSegControlPoint):"start"===this._position&&(i=new l(this._endPoint,this._secondSegControlPoint)),i=i.negate().scale(e.length/2),"end"===this._position?this._controlPoint=n(this._startPoint.x+i.x,this._startPoint.y+i.y):"start"===this._position&&(this._controlPoint=n(this._endPoint.x+i.x,this._endPoint.y+i.y))):"polygon"===this._snap?this._controlPoint=o(this._startPoint,this._endPoint):"paraxialPolygon"===this._snap&&("end"===this._position?this._endPoint=a(this._startPoint,this._endPoint,45):"start"===this._position&&(this._startPoint=a(this._endPoint,this._startPoint,45)),this._controlPoint=o(this._startPoint,this._endPoint))):this._mouseDown===!0&&(r=this._path.getScreenCTM().inverse(),u=n(this._clientX,this._clientY),u=u.matrixTransform(r),c=new l(this._mouseDownPoint,u),this._controlPoint=n(this._mouseDownControlPoint.x-c.x,this._mouseDownControlPoint.y-c.y),"none"===this._snap&&("end"===this._position?(h=s(this._lastSegControlPoint,this._startPoint,this._controlPoint,!0),d=h[0],p=h[1],this._controlPoint=1>p?n(this._startPoint):d):"start"===this._position&&(m=s(this._secondSegControlPoint,this._endPoint,this._controlPoint,!0),f=m[0],g=m[1],this._controlPoint=1>g?n(this._endPoint):f)))
},_updateSnapProperty:function(){var t=app.modKeys,e=t.ctrl,n=(t.alt,t.shift);this._snap=e&&!n?"polygon":e&&n?"paraxialPolygon":"none","end"===this._position?this._lastSegIsSmooth||"none"!==this._snap||(this._snap="polygon"):"start"===this._position&&(this._secondSegIsSmooth||"none"!==this._snap||(this._snap="polygon"))
},_updateOutlines:function(){var t=this._path.getTransformToElement(this),e=this._startPoint.matrixTransform(t),n=this._endPoint.matrixTransform(t),i=this._controlPoint.matrixTransform(t);
this._outline.pathSegList[0].x=e.x,this._outline.pathSegList[0].y=e.y,this._outline.pathSegList[1].x=n.x,this._outline.pathSegList[1].y=n.y,this._outline.pathSegList[1].x1=i.x,this._outline.pathSegList[1].y1=i.y;
var r=3/app.canvas.scale;this._controlPointGrippie.cx.baseVal.value=i.x,this._controlPointGrippie.cy.baseVal.value=i.y,this._controlPointGrippie.r.baseVal.value=r,this._controlLine1.x1.baseVal.value=e.x,this._controlLine1.y1.baseVal.value=e.y,this._controlLine1.x2.baseVal.value=i.x,this._controlLine1.y2.baseVal.value=i.y,this._controlLine2.x1.baseVal.value=n.x,this._controlLine2.y1.baseVal.value=n.y,this._controlLine2.x2.baseVal.value=i.x,this._controlLine2.y2.baseVal.value=i.y
}},{},SVGGElement);var d=e("g","bx-quadsegsketch",c);return{get default(){return d
}}}),System.register("elements/bx-radialgradienthud",[],function(){"use strict";var t=System.get("utils/array").compare,e=System.get("utils/dom"),n=e.createElement,i=e.createSVGMatrix,r=e.createSVGPoint,o=e.registerElement,s=System.get("utils/event"),a=s.getShortcutForKeyboardEvent,l=s.isMouseMoveIntentional,u=System.get("utils/function").throttle,c=System.get("utils/gradient").getGradientColorAtOffset,h=System.get("utils/math").normalize,d=System.get("utils/object"),p=d.freeze,m=d.keys,f=System.get("utils/paint"),g=f.getPaintType,v=f.getPaintServer,b=System.get("utils/relationship"),y=b.getGraphicsElements,x=(b.moveElementUp,b.moveElementDown,b.queryStylableElements),_=System.get("utils/vector").getAngleBetweenVectors,S=System.get("utils/point"),w=S.getPointAtFraction,C=S.getNearestPointOnLine,E=S.getDistanceBetweenPoints,P=S.snapPointToAngleMultiple,L=System.get("classes/vector").default,T=SVGUnitTypes,A=T.SVG_UNIT_TYPE_OBJECTBOUNDINGBOX,k=T.SVG_UNIT_TYPE_USERSPACEONUSE,O=6,M='\n  <style>@import url("stylesheets/bx-radialgradienthud.css");</style>\n\n  <defs>\n    <g class="subhud" tabindex="0">\n      <line class="ry-outline"></line>\n      <line class="slider-shadow"></line>\n      <line class="slider"></line>\n      <circle class="ry-grippie grippie"></circle>\n      <g class="stop-grippies"></g>\n    </g>\n  </defs>\n\n  <g id="subhuds"></g>\n',j=function(){$traceurRuntime.defaultSuperCall(this,R.prototype,arguments)
},R=j;$traceurRuntime.createClass(j,{createdCallback:function(){var t=this;this.commands={selectNext:{label:"Select Next",shortcut:["Tab"],enabled:function(){return!0
},exec:function(){return t._selectNextStop()}},selectAll:{label:"Select All",enabled:function(){return!0
},exec:function(){return t._selectAllStops()}},deselectAll:{label:"Deselect All",enabled:function(){return!0
},exec:function(){return t._deselectAllStops()}},moveOneUnitLeft:{label:"Move 1 Unit Left",enabled:function(){return t._canMoveActiveSelectedStops("left")
},exec:function(){app.canvas.undoManager.checkpoint("Move 1 Unit Left"),t._moveSelectedStops(1,"left")
}},moveOneUnitRight:{label:"Move 1 Unit Right",enabled:function(){return t._canMoveActiveSelectedStops("right")
},exec:function(){app.canvas.undoManager.checkpoint("Move 1 Unit Right"),t._moveSelectedStops(1,"right")
}},moveTenUnitsLeft:{label:"Move 10 Units Left",enabled:function(){return t._canMoveActiveSelectedStops("left")
},exec:function(){app.canvas.undoManager.checkpoint("Move 10 Units Left"),t._moveSelectedStops(10,"left")
}},moveTenUnitsRight:{label:"Move 10 Units Right",enabled:function(){return t._canMoveActiveSelectedStops("right")
},exec:function(){app.canvas.undoManager.checkpoint("Move 10 Units Right"),t._moveSelectedStops(10,"right")
}},"delete":{label:"Delete",shortcut:["Backspace"],enabled:function(){return!0},exec:function(){return t._deleteSelectedStops()
}}},this.createShadowRoot(),this.shadowRoot.innerHTML=M,this.tabIndex=-1,this._subhudTemplate=this.shadowRoot.querySelector("defs .subhud"),this._subhuds=this.shadowRoot.querySelector("#subhuds"),this._updatePositions30ms=u(this._updatePositions,30,this),this._updateSubhuds200ms=u(this._updateSubhuds,200,this),this._selectedStops=[]
},enabledCallback:function(){var t=this;app.canvas.addEventListener("selectedelementschange",this._selectedElementsChangeListener=function(){t._onSelectedElementsChange()
}),app.canvas.addEventListener("selectedtextrangechange",this._selectedTextRangeChangeListener=function(){t._onSelectedTextRangeChange()
}),app.canvas.addEventListener("contentmutation",this._contentMutationListener=function(e){t._onContentMutation(e.detail)
}),app.canvas.addEventListener("zoomchange",this._zoomChangeListener=function(){t._onZoomChange()
}),app.canvas.addEventListener("mousedown",this._canvasMouseDownListener=function(e){t._onCanvasMouseDown(e)
}),this.shadowRoot.addEventListener("mousedown",this._shadowRootMouseDownListener=function(e){t._onHudMouseDown(e)
}),this.shadowRoot.addEventListener("mouseup",this._mouseUpListener=function(e){t._onHudMouseUp(e)
}),this.shadowRoot.addEventListener("dblclick",this._dblClickListener=function(e){t._onHudDblClick(e)
}),this.shadowRoot.addEventListener("keydown",this._keyDownListener=function(e){t._onKeyDown(e)
}),this._previousSelectedElements=[],this._onSelectedElementsChange()},disabledCallback:function(){app.canvas.removeEventListener("selectedelementschange",this._selectedElementsChangeListener),app.canvas.removeEventListener("selectedtextrangechange",this._selectedTextRangeChangeListener),app.canvas.removeEventListener("contentmutation",this._contentMutationListener),app.canvas.removeEventListener("zoomchange",this._zoomChangeListener),app.canvas.removeEventListener("mousedown",this._canvasMouseDownListener),this.shadowRoot.removeEventListener("mousedown",this._shadowRootMouseDownListener),this.shadowRoot.removeEventListener("mouseup",this._mouseUpListener),this.shadowRoot.removeEventListener("dblclick",this._dblClickListener),this.shadowRoot.removeEventListener("keydown",this._keyDownListener),this._previousSelectedElements=[],this.selectedStops=[]
},get context(){return this.hasAttribute("context")?this.getAttribute("context"):"fill"
},set context(t){this.setAttribute("context",t)},get selectedStops(){return this._selectedStops=this._selectedStops.filter(function(t){return app.canvas.masterArtboard.contains(t)
}),p($traceurRuntime.spread(this._selectedStops))},set selectedStops(e){t(e,this._selectedStops,!0)===!1&&(this._selectedStops=$traceurRuntime.spread(e),this._updateGrippiesSelectedState(),this._updateGrippiesZOrder(),this.dispatchEvent(new CustomEvent("selectedstopschange")))
},_updateSubhuds:function(){var t,e,i,r,o=this,s=app.canvas,a=s.selectedElements,l=s.selectedTextRange,u=x(this.context,a,l);
if(u=u.filter(function(t){return"radialGradient"===g(t,o.context)}),0===u.length)this._subhuds.innerHTML="";
else{t=$traceurRuntime.spread(this.selectedStops),e=this.shadowRoot.activeElement,i=[],this._subhuds.innerHTML="";
var c,h=this,d=function(){var t,e,r,o,s,a,l,u=p.value;if(t=v(u,h.context),i.includes(t))return 0;
i.push(t),e=function(){for(var e,n,i=0,r=[],o=t.children[Symbol.iterator]();!(n=o.next()).done;)e=n.value,"stop"===e.localName&&(r[i++]=e);
return r}(),r=h._subhudTemplate.cloneNode(!0),r.targetGradient=t,r.targetGradientUser=u,o=r.querySelector(".stop-grippies"),s=document.createDocumentFragment();
for(var c,d=e[Symbol.iterator]();!(c=d.next()).done;)a=c.value,l=n("svg:circle"),l.setAttribute("class","stop-grippie grippie"),l.targetStop=a,a.offset.baseVal>.95?s.prepend(l):o.append(l);
o.append(s),h._subhuds.append(r)};t:for(var p,m=u[Symbol.iterator]();!(p=m.next()).done;)switch(c=d()){case 0:continue t
}e&&(r=$traceurRuntime.spread(this._subhuds.children).find(function(t){return t.targetGradient===e.targetGradient
}),r&&r.focus()),this._updatePositions(),this._updateGrippiesSize(),this._updateStopGrippiesColor(),this._updateGrippiesSelectedState()
}},_updatePositions:function(){var t,e=void 0!==arguments[0]?arguments[0]:null,n=this,o=function(){var t,o,a,l,u,c,h,d,p,m,f,g,v,b,y,x,_,S,C,E,P,L,T,O,M,j,R,I,B,N,V,D,G=s.value;
if(e&&G.targetGradient!==e)return 0;if(t=G.targetGradient,o=G.targetGradientUser,a=function(){for(var e,n,i=0,r=[],o=t.children[Symbol.iterator]();!(n=o.next()).done;)e=n.value,"stop"===e.localName&&(r[i++]=e);
return r}(),l=i(t.gradientTransform.baseVal.consolidate().matrix),u=o.getTransformToElement(n),c=G.querySelector(".slider"),h=G.querySelector(".slider-shadow"),d=G.querySelector(".ry-grippie"),p=G.querySelector(".ry-outline"),m=$traceurRuntime.spread(G.querySelector(".stop-grippies").children),t.gradientUnits.baseVal===k){f=r(t.cx.baseVal.value,t.cy.baseVal.value),g=r(t.cx.baseVal.value+t.r.baseVal.value,t.cy.baseVal.value),v=r(t.cx.baseVal.value,t.cy.baseVal.value-t.r.baseVal.value),b=f.matrixTransform(l),y=g.matrixTransform(l),x=v.matrixTransform(l),_=b.matrixTransform(u),S=y.matrixTransform(u),C=x.matrixTransform(u),c.setAttribute("x1",_.x),c.setAttribute("y1",_.y),c.setAttribute("x2",S.x),c.setAttribute("y2",S.y),h.setAttribute("x1",_.x),h.setAttribute("y1",_.y),h.setAttribute("x2",S.x),h.setAttribute("y2",S.y),p.setAttribute("x1",_.x),p.setAttribute("y1",_.y),p.setAttribute("x2",C.x),p.setAttribute("y2",C.y),d.setAttribute("cx",C.x),d.setAttribute("cy",C.y);
for(var X,Y=function(){var t,e,n=X.value;t=m.find(function(t){return t.targetStop===n
}),e=w(_,S,n.offset.baseVal),t.cx.baseVal.value=e.x,t.cy.baseVal.value=e.y},F=a[Symbol.iterator]();!(X=F.next()).done;)Y()
}else if(t.gradientUnits.baseVal===A){E=o.getBBox(),P=r(t.cx.baseVal.valueInSpecifiedUnits,t.cy.baseVal.valueInSpecifiedUnits),L=r(t.cx.baseVal.valueInSpecifiedUnits+t.r.baseVal.valueInSpecifiedUnits,t.cy.baseVal.valueInSpecifiedUnits),T=r(t.cx.baseVal.valueInSpecifiedUnits,t.cy.baseVal.valueInSpecifiedUnits-t.r.baseVal.valueInSpecifiedUnits),O=P.matrixTransform(l),M=L.matrixTransform(l),j=T.matrixTransform(l),R=r(E.x+O.x*E.width,E.y+O.y*E.height),I=r(E.x+M.x*E.width,E.y+M.y*E.height),B=r(E.x+j.x*E.width,E.y+j.y*E.height),N=R.matrixTransform(u),V=I.matrixTransform(u),D=B.matrixTransform(u),c.setAttribute("x1",N.x),c.setAttribute("y1",N.y),c.setAttribute("x2",V.x),c.setAttribute("y2",V.y),h.setAttribute("x1",N.x),h.setAttribute("y1",N.y),h.setAttribute("x2",V.x),h.setAttribute("y2",V.y),p.setAttribute("x1",N.x),p.setAttribute("y1",N.y),p.setAttribute("x2",D.x),p.setAttribute("y2",D.y),d.setAttribute("cx",D.x),d.setAttribute("cy",D.y);
for(var H,q=function(){var t,e,n=H.value;t=m.find(function(t){return t.targetStop===n
}),t&&(e=w(N,V,n.offset.baseVal),t.cx.baseVal.value=e.x,t.cy.baseVal.value=e.y)},z=a[Symbol.iterator]();!(H=z.next()).done;)q()
}};t:for(var s,a=this._subhuds.children[Symbol.iterator]();!(s=a.next()).done;)switch(t=o()){case 0:continue t
}},_updateStopGrippiesColor:function(){for(var t,e,n,i=void 0!==arguments[0]?arguments[0]:null,r=this._subhuds.children[Symbol.iterator]();!(n=r.next()).done;)if(t=n.value,!i||t.targetGradient===i)for(var o,s=t.querySelectorAll(".stop-grippie")[Symbol.iterator]();!(o=s.next()).done;)e=o.value,e.style.fill=e.targetStop.style.stopColor
},_updateGrippiesSize:function(){for(var t,e,n=this.shadowRoot.querySelectorAll(".grippie")[Symbol.iterator]();!(e=n.next()).done;)t=e.value,t.setAttribute("r",O/app.canvas.scale)
},_updateGrippiesSelectedState:function(){for(var t,e,n,i=this._subhuds.children[Symbol.iterator]();!(n=i.next()).done;){t=n.value;
for(var r,o=t.querySelectorAll(".stop-grippie")[Symbol.iterator]();!(r=o.next()).done;)e=r.value,this._selectedStops.includes(e.targetStop)?e.setAttribute("data-selected",""):e.removeAttribute("data-selected")
}},_updateGrippiesZOrder:function(){for(var t,e,n,i=this._subhuds.querySelectorAll(".stop-grippie"),r=this._selectedStops[Symbol.iterator]();!(n=r.next()).done;){t=n.value;
for(var o,s=i[Symbol.iterator]();!(o=s.next()).done;)e=o.value,e.targetStop===t&&e.parentElement.append(e)
}},_onContentMutation:function(t){var e;t.removedNodes.length>0&&(e=this._selectedStops.filter(function(t){return!app.canvas.masterArtboard.contains(t)
}),e.length>0&&(this.selectedStops=this._selectedStops.filter(function(t){return app.canvas.masterArtboard.contains(t)
}))),"offset"===t.attributeName&&"stop"===t.target.localName?this._updatePositions(t.target.parentElement):"attributes"===t.type&&"radialGradient"===t.target.localName?this._updatePositions(t.target):this._updateSubhuds200ms()
},_onSelectedElementsChange:function(){t(this._previousSelectedElements,app.canvas.selectedElements)!==!0&&(this._previousSelectedElements=app.canvas.selectedElements,this._updateSubhuds())
},_onSelectedTextRangeChange:function(){this._updateSubhuds()},_onZoomChange:function(){this._updateGrippiesSize()
},_onCanvasMouseDown:function(t){0===t.button&&t.target!==this&&(this.selectedStops=[])
},_onHudMouseDown:function(t){var e=this;if(0===t.button){t.target.classList.contains("slider")?this._onSliderMouseDown(t):t.target.classList.contains("stop-grippie")?this._onStopGrippieMouseDown(t):t.target.classList.contains("ry-grippie")&&this._onRadiusGrippieOrSliderEdgeMouseDown(t,"y");
var n,i;this._mouseMovedAfterMouseDown=!1,this._mouseDownTimeStamp=t.timeStamp,window.addEventListener("mousemove",n=function(){e._mouseMovedAfterMouseDown=!0
}),window.addEventListener("mouseup",i=function(){window.removeEventListener("mouseup",i),window.removeEventListener("mousemove",n)
})}},_onHudMouseUp:function(t){t.target.classList.contains("stop-grippie")&&this._onStopGrippieMouseUp(t)
},_onHudDblClick:function(t){t.timeStamp-this._mouseDownTimeStamp<100&&t.target.classList.contains("slider")&&this._onSliderDblClick(t)
},_onStopGrippieMouseDown:function(t){var e=t.target,n=e.targetStop,i=this.selectedStops.filter(function(t){return t.parentElement===n.parentElement
}),r=n.parentElement,o=function(){for(var t,e,n=0,i=[],o=r.children[Symbol.iterator]();!(e=o.next()).done;)t=e.value,"stop"===t.localName&&(i[n++]=t);
return i}(),s=o[0],a=o[o.length-1],l=app.modKeys,u=l.alt,c=l.shift;this._mouseDownSelectedStops=$traceurRuntime.spread(i),c===!1?i.includes(n)===!1&&(this.selectedStops=[n]):c===!0&&i.includes(n)===!1&&(i.push(n),this.selectedStops=i),n===s&&0===n.offset.baseVal&&u===!1?this._onCenterGrippieOrSliderEdgeMouseDown(t):n===a&&1===n.offset.baseVal&&u===!1?this._onRadiusGrippieOrSliderEdgeMouseDown(t,"x"):this._onDraggableStopGrippieMouseDown(t)
},_onStopGrippieMouseUp:function(t){var e,n;if(!this._mouseMovedAfterMouseDown){for(var i,r=t.target,o=r.parentElement.parentElement,s=o.targetGradientUser,a=this._mouseDownSelectedStops,l=r.targetStop,u=app.modKeys.shift,c=[],h=app.canvas.selectedElements[Symbol.iterator]();!(i=h.next()).done;)if(e=i.value,"g"!==e.localName&&"a"!==e.localName||!e.contains(s))c.push(e);
else for(var d,p=y($traceurRuntime.spread(e.children),!0)[Symbol.iterator]();!(d=p.next()).done;)n=d.value,c.unshift(n);
c.remove(s),c.unshift(s),app.canvas.selectedElements=c;for(var m=s.parentElement;m!==app.canvas.currentArtboard;m=m.parentElement)if("g"===m.localName||"a"===m.localName){app.canvas.currentContainer=m;
break}u===!0&&this._mouseDownSelectedStops.includes(l)===!0&&(a.remove(l),this.selectedStops=a)
}},_onDraggableStopGrippieMouseDown:function(t){var e,n,i=t.target,o=i.parentElement.parentElement,s=this._getMoveOffsetsForSelectedStops(),a=!1,l=o.querySelector(".slider"),u=$traceurRuntime.spread(this.selectedStops),c=this.getScreenCTM(),h=c.inverse(),d=r(l.x1.baseVal.value,l.y1.baseVal.value),p=r(l.x2.baseVal.value,l.y2.baseVal.value),m=r(i.cx.baseVal.value,i.cy.baseVal.value),f=m.matrixTransform(c),g=r(t.clientX,t.clientY),v=C(d,p,m,!1)[0],b=E(d,v)/E(d,p);
window.addEventListener("mousemove",e=function(t){var e,n,i,o,l;a===!1&&(app.canvas.undoManager.checkpoint("Move gradient stop"),a=!0);
for(var c,m=r(t.clientX+f.x-g.x,t.clientY+f.y-g.y),v=m.matrixTransform(h),y=C(d,p,v,!1)[0],x=E(d,y)/E(d,p),_=x-b,S=u[Symbol.iterator]();!(c=S.next()).done;)e=c.value,n=s.get(e),i=n.minOffset,o=n.maxOffset,l=n.initialOffset,i>l+_?e.setAttribute("offset",i):l+_>o?e.setAttribute("offset",o):e.setAttribute("offset",l+_)
}),window.addEventListener("mouseup",n=function(){window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",n)
})},_onCenterGrippieOrSliderEdgeMouseDown:function(t){var e,n,o,s,a,u,c,h,d,p,m,f,g,v,b,y,x,S,w,C,E,T,O,M,j,R,I=$traceurRuntime.spread(this._subhuds.children).find(function(e){return e.contains(t.target)
}),B=I.targetGradient,N=I.targetGradientUser,V=1,D=1,G=!1;B.gradientUnits.baseVal===k?(e=i(B.gradientTransform.baseVal.consolidate().matrix),n=N.getScreenCTM(),o=n.inverse(),s=i(e),a=r(t.clientX,t.clientY),u=r(B.cx.baseVal.value,B.cy.baseVal.value),c=u.matrixTransform(s),h=c.matrixTransform(n),d=r(B.cx.baseVal.value+B.r.baseVal.value,B.cy.baseVal.value),p=d.matrixTransform(s),m=p.matrixTransform(n),window.addEventListener("mousemove",j=function(n){if(G===!1){if(!l(t,n,10))return;
G=!0,app.canvas.undoManager.checkpoint("Transform gradient")}var s=app.modKeys,f=s.ctrl,g=(s.alt,s.shift),v=r(n.clientX+h.x-a.x,n.clientY+h.y-a.y);
g&&(v=P(m,v,45));var b=v.matrixTransform(o),y=i(),x=_(new L(p,c),new L(p,b));y.rotateBy(x,p.x,p.y),y.multiplyBy(e);
var S=y.inverse(),w=b.matrixTransform(S),C=new L(d,w).length/new L(u,d).length;f===!1?V=C:f===!0&&(V=C,D=C);
var E=-d.x*(V-1),T=-d.y*(D-1);y.translateBy(E,T),y.scaleNonUniformBy(V,D),B.setAttribute("gradientTransform",y.toString())
}),window.addEventListener("mouseup",R=function(){window.removeEventListener("mousemove",j),window.removeEventListener("mouseup",R)
})):B.gradientUnits.baseVal===A&&(f=N.getBBox(),g=i(B.gradientTransform.baseVal.consolidate().matrix),v=N.getScreenCTM(),b=N.getScreenCTM().inverse(),y=r(t.clientX,t.clientY),x=r(B.cx.baseVal.valueInSpecifiedUnits,B.cy.baseVal.valueInSpecifiedUnits),S=x.matrixTransform(g),w=r(f.x+S.x*f.width,f.y+S.y*f.height),C=w.matrixTransform(v),E=r(B.cx.baseVal.valueInSpecifiedUnits+B.r.baseVal.valueInSpecifiedUnits,B.cy.baseVal.valueInSpecifiedUnits),T=E.matrixTransform(g),O=r(f.x+T.x*f.width,f.y+T.y*f.height),M=O.matrixTransform(v),window.addEventListener("mousemove",j=function(e){if(G===!1){if(!l(t,e,10))return;
G=!0,app.canvas.undoManager.checkpoint("Transform gradient")}var n=app.modKeys,o=n.ctrl,s=(n.alt,n.shift),a=r(e.clientX+C.x-y.x,e.clientY+C.y-y.y);
s&&(a=P(M,a,45));var u=a.matrixTransform(b),c=r((u.x-f.x)/f.width,(u.y-f.y)/f.height),h=i(),d=_(new L(T,S),new L(T,c));
h.rotateBy(d,T.x,T.y),h.multiplyBy(g);var p=new L(T,c).length/new L(S,T).length;o===!1?V=p:o===!0&&(V=p,D=p);
var m=-E.x*(V-1),v=-E.y*(D-1);h.translateBy(m,v),h.scaleNonUniformBy(V,D),B.setAttribute("gradientTransform",h.toString())
}),window.addEventListener("mouseup",R=function(){window.removeEventListener("mousemove",j),window.removeEventListener("mouseup",R)
}))},_onRadiusGrippieOrSliderEdgeMouseDown:function(t){var e,n,o,s,a,u,c,h,d,p,m,f,g,v,b,y,x,S,w,C,E,T,O,M,j,R,I,B,N,V,D,G,X,Y,F=void 0!==arguments[1]?arguments[1]:"x",H=$traceurRuntime.spread(this._subhuds.children).find(function(e){return e.contains(t.target)
}),q=H.targetGradient,z=H.targetGradientUser,U=1,W=1,$=!1;q.gradientUnits.baseVal===k?(e=i(q.gradientTransform.baseVal.consolidate().matrix),n=z.getScreenCTM().inverse(),o=z.getScreenCTM(),s=i(e),a=r(q.cx.baseVal.value,q.cy.baseVal.value),u=a.matrixTransform(s),c=u.matrixTransform(o),h=r(t.clientX,t.clientY),d=h.matrixTransform(n),p=r(q.cx.baseVal.value+q.r.baseVal.value,q.cy.baseVal.value),m=r(q.cx.baseVal.value,q.cy.baseVal.value-q.r.baseVal.value),f="x"===F?p:m,g=f.matrixTransform(s),v=g.matrixTransform(o),window.addEventListener("mousemove",X=function(o){if($===!1){if(!l(t,o,10))return;
$=!0,app.canvas.undoManager.checkpoint("Transform gradient")}var s=app.modKeys,d=s.ctrl,p=s.shift,m=r(o.clientX+v.x-h.x,o.clientY+v.y-h.y);
p&&(m=P(c,m,45));var b=m.matrixTransform(n),y=i(),x=_(new L(u,g),new L(u,b));y.rotateBy(x,u.x,u.y),y.multiplyBy(e);
var S=y.inverse(),w=b.matrixTransform(S),C=new L(a,w).length/new L(a,f).length;d===!1?"x"===F?U=C:"y"===F&&(W=C):d===!0&&(U=C,W=C);
var E=-a.x*(U-1),T=-a.y*(W-1);y.translateBy(E,T),y.scaleNonUniformBy(U,W),q.setAttribute("gradientTransform",y.toString())
}),window.addEventListener("mouseup",Y=function(){window.removeEventListener("mousemove",X),window.removeEventListener("mouseup",Y)
})):q.gradientUnits.baseVal===A&&(b=z.getBBox(),y=i(q.gradientTransform.baseVal.consolidate().matrix),x=z.getScreenCTM(),S=z.getScreenCTM().inverse(),w=r(q.cx.baseVal.valueInSpecifiedUnits,q.cy.baseVal.valueInSpecifiedUnits),C=w.matrixTransform(y),E=r(b.x+C.x*b.width,b.y+C.y*b.height),T=E.matrixTransform(x),O=r(q.cx.baseVal.valueInSpecifiedUnits+q.r.baseVal.valueInSpecifiedUnits,q.cy.baseVal.valueInSpecifiedUnits),M=r(q.cx.baseVal.valueInSpecifiedUnits,q.cy.baseVal.valueInSpecifiedUnits-q.r.baseVal.valueInSpecifiedUnits),j="x"===F?O:M,R=j.matrixTransform(y),I=r(b.x+R.x*b.width,b.y+R.y*b.height),B=I.matrixTransform(x),N=r(t.clientX,t.clientY),V=N.matrixTransform(S),D=r((V.x-b.x)/b.width,(V.y-b.y)/b.height),G=D.matrixTransform(y.inverse()),window.addEventListener("mousemove",X=function(e){if($===!1){if(!l(t,e,10))return;
$=!0,app.canvas.undoManager.checkpoint("Transform gradient")}var n=app.modKeys,o=n.ctrl,s=(n.alt,n.shift),a=r(e.clientX+B.x-N.x,e.clientY+B.y-N.y);
s&&(a=P(T,a,45));var u=a.matrixTransform(S),c=r((u.x-b.x)/b.width,(u.y-b.y)/b.height),h=i(),d=_(new L(C,R),new L(C,c));
h.rotateBy(d,C.x,C.y),h.multiplyBy(y);var p=new L(C,c).length/new L(C,R).length;o===!1?"x"===F?U=p:"y"===F&&(W=p):o===!0&&(U=p,W=p);
var m=-w.x*(U-1),f=-w.y*(W-1);h.translateBy(m,f),h.scaleNonUniformBy(U,W),q.setAttribute("gradientTransform",h.toString())
}),window.addEventListener("mouseup",Y=function(){window.removeEventListener("mousemove",X),window.removeEventListener("mouseup",Y)
}))},_onSliderMouseDown:function(t){var e=t.target,n=e.parentElement,i=(n.targetGradientUser,e.getScreenCTM()),o=r(t.clientX,t.clientY),s=r(e.x1.baseVal.value,e.y1.baseVal.value),a=r(e.x2.baseVal.value,e.y2.baseVal.value),l=s.matrixTransform(i),u=a.matrixTransform(i),c=new L(l,o).length,h=new L(u,o).length;
5>=c?this._onCenterGrippieOrSliderEdgeMouseDown(t):5>=h?this._onRadiusGrippieOrSliderEdgeMouseDown(t,"x"):this._onSliderBodyMouseDown(t)
},_onSliderBodyMouseDown:function(t){var e,n,o,s,a,l,u,c,h,d,p,m,f,g,v,b,y,x,_,S=t.target.parentElement,w=S.targetGradient,C=S.targetGradientUser,E=!1;
w.gradientUnits.baseVal===A?(e=C.getBBox(),n=i(w.gradientTransform.baseVal.consolidate().matrix),o=C.getScreenCTM(),s=C.getScreenCTM().inverse(),a=r(t.clientX,t.clientY),l=r(w.cx.baseVal.valueInSpecifiedUnits,w.cy.baseVal.valueInSpecifiedUnits),u=l.matrixTransform(n),c=r(e.x+u.x*e.width,e.y+u.y*e.height),h=c.matrixTransform(o),window.addEventListener("mousemove",x=function(t){E===!1&&(app.canvas.undoManager.checkpoint("Transform gradient"),E=!0);
var i=r(t.clientX,t.clientY),o=new L(a,i),l=r(h.x+o.x,h.y+o.y),u=l.matrixTransform(s),c=r((u.x-e.x)/e.width,(u.y-e.y)/e.height),d=c.matrixTransform(n.inverse());
w.setAttribute("cx",d.x),w.setAttribute("cy",d.y)}),window.addEventListener("mouseup",_=function(){window.removeEventListener("mousemove",x),window.removeEventListener("mouseup",_)
})):w.gradientUnits.baseVal===k&&(d=C.getScreenCTM(),p=C.getScreenCTM().inverse(),m=i(w.gradientTransform.baseVal.consolidate().matrix),f=m.inverse(),g=r(t.clientX,t.clientY),v=r(w.cx.baseVal.value,w.cy.baseVal.value),b=v.matrixTransform(m),y=b.matrixTransform(d),window.addEventListener("mousemove",x=function(t){E===!1&&(app.canvas.undoManager.checkpoint("Transform gradient"),E=!0);
var e=r(t.clientX,t.clientY),n=new L(g,e),i=r(y.x+n.x,y.y+n.y),o=i.matrixTransform(p),s=o.matrixTransform(f);
w.setAttribute("cx",s.x),w.setAttribute("cy",s.y)}),window.addEventListener("mouseup",_=function(){window.removeEventListener("mousemove",x),window.removeEventListener("mouseup",_)
}))},_onSliderDblClick:function(t){var e;app.canvas.undoManager.checkpoint("Add Stop");
var i=t.target,o=i.parentElement,s=o.targetGradient,a=this.getScreenCTM().inverse(),l=function(){for(var t,e,n=0,i=[],r=s.children[Symbol.iterator]();!(e=r.next()).done;)t=e.value,"stop"===t.localName&&(i[n++]=t);
return i}(),u=r(i.x1.baseVal.value,i.y1.baseVal.value),d=r(i.x2.baseVal.value,i.y2.baseVal.value),p=r(t.clientX,t.clientY).matrixTransform(a),m=E(u,p),f=E(u,d),g=m/f;
g=h(g,0,1,5);for(var v=null,b=0;b<l.length;b+=1)if(e=l[b],e.offset.baseVal<g)v=b;
else if(e.offset.baseVal>g)break;var y=n("svg:stop");y.setAttribute("offset",g),y.style.stopColor=c(s,g).toString("hex"),null===v?0===s.children.length?s.append(y):s.children[0].before(y):l[v].after(y),this.selectedStops=[y]
},_onKeyDown:function(e){var n,i;if(this.shadowRoot.activeElement&&0!==this.selectedStops.length)for(var r,o=a(e),s=m(this.commands)[Symbol.iterator]();!(r=s.next()).done;)if(n=r.value,i=app.userShortcuts[n]?app.userShortcuts[n]:this.commands[n]&&this.commands[n].shortcut?this.commands[n].shortcut:app.commands[n]&&app.commands[n].shortcut?app.commands[n].shortcut:[],t(o,i))return e.stopPropagation(),e.preventDefault(),void(this.commands[n].enabled()&&this.commands[n].exec())
},_selectAllStops:function(){for(var t,e,n=this.shadowRoot.activeElement,i=n.targetGradient,r=function(){for(var t,e,n=0,r=[],o=i.children[Symbol.iterator]();!(e=o.next()).done;)t=e.value,"stop"===t.localName&&(r[n++]=t);
return r}(),o=this.selectedStops[Symbol.iterator]();!(e=o.next()).done;)t=e.value,t.parentElement!==i&&r.push(t);
this.selectedStops=r},_deselectAllStops:function(){var t=this.shadowRoot.activeElement,e=t.targetGradient;
this.selectedStops=this.selectedStops.filter(function(t){return t.parentElement!==e
})},_selectNextStop:function(){var t=this.shadowRoot.activeElement,e=t.targetGradient,n=function(){for(var t,n,i=0,r=[],o=e.children[Symbol.iterator]();!(n=o.next()).done;)t=n.value,"stop"===t.localName&&(r[i++]=t);
return r}(),i=this.selectedStops.filter(function(t){return t.parentElement===e}),r=i[i.length-1],o=n[0];
n.length>1&&(this.selectedStops=this.selectedStops.filter(function(t){return t.parentElement!==e
}),this.selectedStops=r.nextElementSibling?$traceurRuntime.spread([r.nextElementSibling],this.selectedStops):$traceurRuntime.spread([o],this.selectedStops))
},_deleteSelectedStops:function(){var t,e=this.shadowRoot.activeElement;if(null!==e){var n=e.targetGradient,i=this.selectedStops.filter(function(t){return t.parentElement===n
});if(i.length>0){app.canvas.undoManager.checkpoint("Delete gradient stop(s)");for(var r,o=i[Symbol.iterator]();!(r=o.next()).done;)t=r.value,t.remove()
}}},_moveSelectedStops:function(){var t,e,n,i,o,s,a=void 0!==arguments[0]?arguments[0]:1,l=void 0!==arguments[1]?arguments[1]:"left",u=this.shadowRoot.activeElement;
if(null!==u)for(var c,d=u.querySelector(".slider"),p=u.targetGradient,m=this.selectedStops.filter(function(t){return t.parentElement===p
}),f=this._getMoveOffsetsForSelectedStops(),g=this.getScreenCTM(),v=r(d.x1.baseVal.value,d.y1.baseVal.value),b=r(d.x2.baseVal.value,d.y2.baseVal.value),y=v.matrixTransform(g),x=b.matrixTransform(g),_=new L(y,x),S=a/_.length,w=m[Symbol.iterator]();!(c=w.next()).done;)t=c.value,e=f.get(t),n=e.minOffset,i=e.maxOffset,"left"===l?(o=h(t.offset.baseVal-S,n,i),t.setAttribute("offset",o)):"right"===l&&(s=h(t.offset.baseVal+S,n,i),t.setAttribute("offset",s))
},_canMoveActiveSelectedStops:function(){var t=void 0!==arguments[0]?arguments[0]:"left",e=this.shadowRoot.activeElement;
if(null!==e){var n=(e.querySelector(".slider"),e.targetGradient),i=this.selectedStops.find(function(t){return t.parentElement===n
});if(null!==i){var r=this._getMoveOffsetsForSelectedStops(),o=r.get(i),s=o.minOffset,a=o.maxOffset;
return"left"===t?i.offset.baseVal>s:"right"===t?i.offset.baseVal<a:void 0}}},_getPreviousNotSelectedStop:function(t){for(;t.previousElementSibling;){if(this.selectedStops.includes(t.previousElementSibling)===!1)return t.previousElementSibling;
t=t.previousElementSibling}return null},_getNextNotSelectedStop:function(t){for(;t.nextElementSibling;){if(this.selectedStops.includes(t.nextElementSibling)===!1)return t.nextElementSibling;
t=t.nextElementSibling}return null},_getMoveOffsetsForSelectedStops:function(){for(var t,e,n,i,r,o,s,a=[],l=this.selectedStops[Symbol.iterator]();!(s=l.next()).done;)t=s.value,e={},n=this._getPreviousNotSelectedStop(t),i=this._getNextNotSelectedStop(t),e.min=n?t.offset.baseVal-n.offset.baseVal:t.offset.baseVal,e.max=i?i.offset.baseVal-t.offset.baseVal:1-t.offset.baseVal,a.push(e);
if(0===a.length)return a;for(var u,c=a[0].min,h=a[0].max,d=a[Symbol.iterator]();!(u=d.next()).done;)r=u.value,r.min<c&&(c=r.min),r.max<h&&(h=r.max);
for(var p,m=new Map,f=this.selectedStops[Symbol.iterator]();!(p=f.next()).done;)o=p.value,m.set(o,{initialOffset:o.offset.baseVal,minOffset:o.offset.baseVal-c,maxOffset:o.offset.baseVal+h});
return m}},{},SVGGElement);var I=o("g","bx-radialgradienthud",j);return{get default(){return I
}}}),System.register("elements/bx-rect",[],function(){"use strict";var t=System.get("utils/dom").registerElement,e=function(){$traceurRuntime.defaultSuperCall(this,n.prototype,arguments)
},n=e;$traceurRuntime.createClass(e,{createdCallback:function(){},get r1(){return this.hasAttribute("data-r1")?parseFloat(this.getAttribute("data-r1")):0
},set r1(t){this.setAttribute("data-r1",t)},synchronize:function(){},isSynchronized:function(){}},{},SVGPathElement);
var i=t("path","bx-rect",e);return{get default(){return i}}}),System.register("elements/bx-recthud",[],function(){"use strict";
var t=System.get("utils/dom"),e=t.registerElement,n=(t.createElement,t.createSVGPoint),i=System.get("utils/relationship").getGraphicsElements,r=6,o='\n  <style>@import url("stylesheets/bx-recthud.css");</style>\n\n  <defs>\n    <g class="subhud">\n      <circle class="grippie" data-position="top-left" fill="none"></circle>\n      <circle class="grippie" data-position="top-right" fill="none"></circle>\n      <circle class="grippie" data-position="bottom-left" fill="none"></circle>\n      <circle class="grippie" data-position="bottom-right" fill="none"></circle>\n    </g>\n  </defs>\n\n  <g id="subhuds"></g>\n',s=function(){$traceurRuntime.defaultSuperCall(this,a.prototype,arguments)
},a=s;$traceurRuntime.createClass(s,{createdCallback:function(){this.createShadowRoot(),this.shadowRoot.innerHTML=o,this._subhuds=this.shadowRoot.querySelector("#subhuds"),this._subhudTemplate=this.shadowRoot.querySelector("defs .subhud"),this._hasContextListeners=!1
},enabledCallback:function(){var t=this;app.canvas.addEventListener("selectedelementschange",this._selectedElementsChangeListener=function(){t._onSelectedElementsChange()
}),this._onSelectedElementsChange()},disabledCallback:function(){app.canvas.removeEventListener("selectedelementschange",this._selectedElementsChangeListener),this._removeContextListeners()
},_addContextListeners:function(){var t=this;this._hasContextListeners!==!0&&(this._hasContextListeners=!0,app.canvas.addEventListener("zoomchange",this._zoomChangeListener=function(){t._onZoomChange()
}),app.canvas.addEventListener("contentmutation",this._contentMutationListener=function(e){t._onContentMutation(e.detail)
}),this._subhuds.addEventListener("mousedown",this._mouseDownListener=function(e){t._onGrippieMouseDown(e)
}))},_removeContextListeners:function(){this._hasContextListeners!==!1&&(this._hasContextListeners=!1,app.canvas.removeEventListener("zoomchange",this._zoomChangeListener),app.canvas.removeEventListener("contentmutation",this._contentMutationListener),this._subhuds.removeEventListener("mousedown",this._mouseDownListener))
},_onSelectedElementsChange:function(){var t=i(app.canvas.selectedElements,!0),e=t.filter(function(t){return"rect"===t.localName
});0===e.length?(this._removeContextListeners(),this._subhuds.innerHTML=""):(this._addContextListeners(),this._updateSubhuds())
},_onContentMutation:function(t){var e=t.attributeName;("x"===e||"y"===e||"rx"===e||"ry"===e||"width"===e||"height"===e||"transform"===e)&&this._updateGrippiesPosition()
},_onZoomChange:function(){this._updateGrippiesSize()},_onGrippieMouseDown:function(t){var e=this,i=t.target,r=i.dataset.position,o=i.parentElement.ownerRect,s=o.getCTM().inverse(),a=o.rx.baseVal.value,l=n(t.clientX,t.clientY);
l=l.matrixTransform(s);var u,c;app.canvas.undoManager.checkpoint("Round corners"),window.addEventListener("mousemove",u=function(t){var i=n(t.clientX,t.clientY);
i=i.matrixTransform(s);{var u,c=i.x-l.x;i.y-l.y}"top-right"===r||"bottom-right"===r?u=a-c:("top-left"===r||"bottom-left"===r)&&(u=a+c),u>=0&&u<=o.width.baseVal.value/2?o.setAttribute("rx",u):u>o.width.baseVal.value/2?o.setAttribute("rx",o.width.baseVal.value/2):0>u&&o.setAttribute("rx",0),o.setAttribute("ry",o.rx.baseVal.value),e._updateGrippiesPosition(o)
}),window.addEventListener("mouseup",c=function(){window.removeEventListener("mousemove",u),window.removeEventListener("mouseup",c)
})},_updateSubhuds:function(){var t,e;this._subhuds.innerHTML="";for(var n,r=i(app.canvas.selectedElements,!0),o=r.filter(function(t){return"rect"===t.localName
}),s=o[Symbol.iterator]();!(n=s.next()).done;)t=n.value,e=this._subhudTemplate.cloneNode(!0),e.ownerRect=t,this._subhuds.append(e);
this._updateGrippiesPosition(),this._updateGrippiesSize()},_updateGrippiesPosition:function(){for(var t,e,i,r,o,s,a,l,u,c,h,d,p,m=void 0!==arguments[0]?arguments[0]:null,f=this._subhuds.children[Symbol.iterator]();!(p=f.next()).done;)if(t=p.value,!m||t.ownerRect===m){e=t.ownerRect,i=e.getTransformToElement(this),r=e.x.baseVal.value,o=e.y.baseVal.value,s=e.rx.baseVal.value,a=e.width.baseVal.value,l=e.height.baseVal.value;
for(var g,v=t.children[Symbol.iterator]();!(g=v.next()).done;)u=g.value,c=u.dataset.position,"top-right"===c?h=n(r+a-s,o):"top-left"===c?h=n(r+s,o):"bottom-right"===c?h=n(r+a-s,o+l):"bottom-left"===c&&(h=n(r+s,o+l)),d=h.matrixTransform(i),u.setAttribute("cx",d.x),u.setAttribute("cy",d.y)
}},_updateGrippiesSize:function(){for(var t,e,n,i=this._subhuds.children[Symbol.iterator]();!(n=i.next()).done;){t=n.value;
for(var o,s=t.children[Symbol.iterator]();!(o=s.next()).done;)e=o.value,e.setAttribute("r",r/app.canvas.scale)
}}},{},SVGGElement);var l=e("g","bx-recthud",s);return{get default(){return l}}}),System.register("elements/bx-recttool",[],function(){"use strict";
var t=System.get("utils/dom"),e=t.registerElement,n=t.createElement,i=t.createSVGMatrix,r=System.get("utils/event").isMouseMoveIntentional,o=System.get("utils/math"),s=(o.abs,o.min),a=function(){$traceurRuntime.defaultSuperCall(this,l.prototype,arguments)
},l=a;$traceurRuntime.createClass(a,{enabledCallback:function(){var t=this;app.canvas.enableHud("outlines-hud"),this._rectCursor=app.registerCursor("images/cursor-rect.png",-100,8,7),app.canvas.addEventListener("mousedown",this._mouseDownListener=function(e){t._onMouseDown(e)
})},disabledCallback:function(){app.unregisterCursor(this._rectCursor),app.unregisterCursor(this._mouseDownRectCursor),app.canvas.disableHud("outlines-hud"),app.canvas.removeEventListener("mousedown",this._mouseDownListener)
},_onMouseDown:function(t){var e,n,i=this;window.addEventListener("mousemove",e=function(o){r(t,o)!==!1&&(window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",n),i._onIntentionalDragStart(t))
}),window.addEventListener("mouseup",n=function(){window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",n)
})},_onIntentionalDragStart:function(t){var e,r,o,a,l,u,c,h=this,d=app.canvas.currentContainer||app.canvas.currentArtboard,p=n("svg:rect");
p.style.fill="#d8d8d8",app.canvas.undoManager.checkpoint("Draw Rectangle"),d.append(p),app.canvas.selectedElements=[p],this._mouseDownRectCursor=app.registerCursor("images/cursor-rect.png",900,8,7);
var m=p.getScreenCTM().inverse(),f=i(p.transform.baseVal.consolidate().matrix);f.multiplyBy(m),p.setAttribute("transform",f.toString()),window.addEventListener("mousemove",e=function(e){var n,i,r,o,h=app.modKeys,d=h.ctrl,m=h.shift;
m===!1?(a=e.clientX-t.clientX,l=e.clientY-t.clientY,0===a&&(a=1),0===l&&(l=1),n=!1,i=!1,0>a&&(n=!0,a=-a),0>l&&(i=!0,l=-l),d&&(a=s(a,l),l=a),u=n?t.clientX-a:t.clientX,c=i?t.clientY-l:t.clientY):m===!0&&(a=2*(e.clientX-t.clientX),l=2*(e.clientY-t.clientY),0===a&&(a=1),0===l&&(l=1),r=!1,o=!1,0>a&&(r=!0,a=-a),0>l&&(o=!0,l=-l),d&&(a=s(a,l),l=a),u=r?t.clientX-a/2:t.clientX-a/2,c=o?t.clientY-l/2:t.clientY-l/2),p.setAttribute("width",a),p.setAttribute("height",l),p.setAttribute("x",u),p.setAttribute("y",c)
}),window.addEventListener("mouseup",r=function(){window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",r),app.removeEventListener("toolchange",o),app.unregisterCursor(h._mouseDownRectCursor)
}),app.addEventListener("toolchange",o=function(){window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",r),app.removeEventListener("toolchange",o),app.unregisterCursor(h._mouseDownRectCursor)
})}},{},HTMLElement);var u=e("bx-recttool",a);return{get default(){return u}}}),System.register("elements/bx-rubberbandhud",[],function(){"use strict";
var t=System.get("utils/dom"),e=t.registerElement,n=t.createSVGPoint,i=t.createSVGRect,r=System.get("utils/math").round,o='\n  <style>@import url("stylesheets/bx-rubberbandhud.css");</style>\n  <rect x="0" y="0" width="0" height="0"></rect>\n',s=function(){$traceurRuntime.defaultSuperCall(this,a.prototype,arguments)
},a=s;$traceurRuntime.createClass(s,{createdCallback:function(){this.createShadowRoot(),this.shadowRoot.innerHTML=o,this._rect=this.shadowRoot.querySelector("rect")
},get x(){return r(this._rect.x.baseVal.value,3)},set x(t){this._rect.x.baseVal.value=t
},get y(){return r(this._rect.y.baseVal.value,3)},set y(t){this._rect.y.baseVal.value=t
},get width(){return r(this._rect.width.baseVal.value,3)},set width(t){this._rect.width.baseVal.value=t
},get height(){return r(this._rect.height.baseVal.value,3)},set height(t){this._rect.height.baseVal.value=t
},grabSelection:function(t,e,r){var o,s,a=this,l=this.getScreenCTM(),u=l.inverse(),c=n(t,e),h=c.matrixTransform(u);
this._rect.style.visibility="visible",this._rect.style.vectorEffect="non-scaling-stroke",window.addEventListener("mousemove",o=function(t){var e,i,r=n(t.clientX,t.clientY),o=r.matrixTransform(u),s=o.x-h.x,l=o.y-h.y;
0>s?(s=-s,e=h.x-s):e=h.x,0>l?(l=-l,i=h.y-l):i=h.y,a.x=e,a.y=i,a.width=s,a.height=l
}),window.addEventListener("mouseup",s=function(){window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",s),a._rect.style.visibility="hidden",a._rect.style.vectorEffect=null;
var t=i(a.x,a.y,a.width,a.height);r(t),a.x=0,a.y=0,a.width=0,a.height=0})}},{},SVGGElement);
var l=e("g","bx-rubberbandhud",s);return{get default(){return l}}}),System.register("elements/bx-satlightslider",[],function(){"use strict";
var t=System.get("classes/color").default,e=System.get("utils/color"),n=e.hslToHsv,i=e.hsvToHsl,r=e.colorToString,o=System.get("utils/dom").registerElement,s=System.get("utils/math").normalize,a=!1,l='\n  <style>\n    @import url("stylesheets/bx-satlightslider.css");\n  </style>\n\n  <main>\n    <canvas></canvas>\n    <div id="marker"></div>\n  </main>\n</style>\n',u=function(){$traceurRuntime.defaultSuperCall(this,c.prototype,arguments)
},c=u;$traceurRuntime.createClass(u,{createdCallback:function(){var t=this;this.createShadowRoot(),this.shadowRoot.innerHTML=l,this._canvas=this.shadowRoot.querySelector("canvas"),this._marker=this.shadowRoot.querySelector("#marker"),this._context=this._canvas.getContext("2d"),this._canvas.width=800,this._canvas.height=800,this._canvas.addEventListener("mousedown",function(e){return t._onMouseDown(e)
})},attributeChangedCallback:function(t,e,n){e!==n&&("hue"===t?this._onHueChange():"saturation"===t?this._onSaturationLightnessChange():"lightness"===t&&this._onSaturationLightnessChange())
},get hue(){return this.hasAttribute("hue")?parseFloat(this.getAttribute("hue")):0
},set hue(t){this.setAttribute("hue",t)},get saturation(){return this.hasAttribute("saturation")?parseFloat(this.getAttribute("saturation")):0
},set saturation(t){this.setAttribute("saturation",t)},get lightness(){return this.hasAttribute("lightness")?parseFloat(this.getAttribute("lightness")):0
},set lightness(t){this.setAttribute("lightness",t)},_onMouseDown:function(t){var e,n,i,r,o=this,a=this._canvas.getBoundingClientRect(),l=(t.clientX-a.left)/this.clientWidth*100,u=(t.clientY-a.top)/this.clientHeight*100;
this.dispatchEvent(new CustomEvent("markerdragstart")),this._isDraggingMarker=!0,this._onMarkerDrag(l,u),window.addEventListener("mousemove",i=function(t){(t.clientX!==e||t.clientY!==n)&&(e=t.clientX,n=t.clientY,l=(t.clientX-a.left)/o.clientWidth*100,u=(t.clientY-a.top)/o.clientHeight*100,l=s(l,0,100,2),u=s(u,0,100,2),o._onMarkerDrag(l,u))
}),window.addEventListener("mouseup",r=function(){window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r),o._isDraggingMarker=!1,o.dispatchEvent(new CustomEvent("markerdragend"))
})},_onMarkerDrag:function(t,e){var n;this._marker.style.left=t+"%",this._marker.style.top=e+"%";
var o=i(this.hue,t,100-e),s=o[0],l=o[1],u=o[2];(this.hue!==s||this.saturation!==l||this.lightness!==u)&&(this.hue=s,this.saturation=l,this.lightness=u,this.dispatchEvent(new CustomEvent("markerdrag")),a&&(n=r({h:s,s:l,l:u},"hex"),console.log("%c     ","background: "+n,'color = "'+n+'"')))
},_onHueChange:function(){if(!this._isDraggingMarker&&null!==this.hue){var e=this._canvas.width,n=this._canvas.height,i=this._context;
i.clearRect(0,0,e,n);var r=new t(this.hue,100,50,1,"hsla");i.fillStyle=r.toString("hex"),i.fillRect(0,0,e,n);
var o=i.createLinearGradient(0,0,e,0);o.addColorStop(0,"rgba(255,255,255,1)"),o.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=o,i.fillRect(0,0,e,n);
var s=i.createLinearGradient(0,0,0,n);s.addColorStop(0,"rgba(0,0,0,0)"),s.addColorStop(1,"rgba(0,0,0,1)"),i.fillStyle=s,i.fillRect(0,0,e,n)
}},_onSaturationLightnessChange:function(){var t=n(this.hue,this.saturation,this.lightness),e=(t[0],t[1]),i=t[2];
this._marker.style.left=e/100*100+"%",this._marker.style.top=100-i/100*100+"%"}},{},HTMLElement);
var h=o("bx-satlightslider",u);return{get default(){return h}}}),System.register("elements/bx-scrollableview",[],function(){"use strict";
System.get("elements/bx-icon");var t=System.get("utils/time").createTimeout,e=System.get("utils/dom").registerElement,n='\n  <style>@import url("stylesheets/bx-scrollableview.css");</style>\n\n  <main>\n    <div id="up-grippie" class="grippie">\n      <bx-icon name="arrow-up"></bx-icon>\n    </div>\n\n    <div id="view">\n      <content></content>\n    </div>\n\n    <div id="down-grippie" class="grippie">\n      <bx-icon name="arrow-down"></bx-icon>\n    </div>\n  </main>\n',i=function(){$traceurRuntime.defaultSuperCall(this,r.prototype,arguments)
},r=i;$traceurRuntime.createClass(i,{createdCallback:function(){var t=this;this.createShadowRoot(),this.shadowRoot.innerHTML=n,this._view=this.shadowRoot.querySelector("#view"),this._scrollUpGrippie=this.shadowRoot.querySelector("#up-grippie"),this._scrollDownGrippie=this.shadowRoot.querySelector("#down-grippie"),this._view.addEventListener("scroll",function(){return t._adjustGrippiesVisibility()
})},attachedCallback:function(){var e=this;t(100,function(){return e._adjustGrippiesVisibility()
}),t(1e3,function(){return e._adjustGrippiesVisibility()})},_onScroll:function(){this._adjustGrippiesVisibility()
},_adjustGrippiesVisibility:function(){this._scrollUpGrippie.disabled=0===this._view.scrollTop?!0:!1,this._scrollDownGrippie.disabled=this._view.scrollTop>=this._view.scrollHeight-this._view.offsetHeight?!0:!1
}},{},HTMLElement);var o=e("bx-scrollableview",i);return{get default(){return o}}
}),System.register("elements/bx-select",[],function(){"use strict";System.get("elements/bx-icon"),System.get("elements/bx-selectitem");
var t=System.get("utils/array").compare,e=System.get("utils/dom").registerElement,n=System.get("utils/event").getShortcutForKeyboardEvent,i=System.get("utils/object").values,r=System.get("utils/time"),o=r.createTimeout,s=r.getTimestamp,a='\n  <style>\n    @import url("stylesheets/scrollbars.css");\n    @import url("stylesheets/bx-select.css");\n  </style>\n\n  <div id="button">\n    <div id="label-wrapper">\n      <label></label>\n    </div>\n\n    <bx-icon name="select-arrows"></bx-icon>\n  </div>\n\n  <div id="overlay"></div>\n\n  <div id="popup" style="visibility: hidden"">\n    <content></content>\n  </div>\n',l=function(){$traceurRuntime.defaultSuperCall(this,u.prototype,arguments)
},u=l;$traceurRuntime.createClass(l,{createdCallback:function(){var t=this;this.commands={highlightPreviousItem:{shortcut:["Up"],exec:function(){return t._highlightPreviousItem()
}},highlightNextItem:{shortcut:["Down"],exec:function(){return t._highlightNextItem()
}},highlightFirstItem:{shortcut:["Ctrl","Up"],exec:function(){return t._highlightFirstItem()
}},highlightLastItem:{shortcut:["Ctrl","Down"],exec:function(){return t._highlightLastItem()
}},selectHighlightedItem:{shortcut:["Enter"],exec:function(){return t._selectHighlightedItem()
}}},this.createShadowRoot(),this.shadowRoot.innerHTML=a,this._highlghtTimeStamp=0,this._labelElement=this.shadowRoot.querySelector("label"),this._buttonElement=this.shadowRoot.querySelector("#button"),this._overlayElement=this.shadowRoot.querySelector("#overlay"),this._popupElement=this.shadowRoot.querySelector("#popup"),this._buttonElement.addEventListener("click",function(e){t._onButtonClick(e)
}),this._overlayElement.addEventListener("mousedown",function(e){t._onOverlayMouseDown(e)
}),this._popupElement.addEventListener("click",function(e){t._onPopupElementClick(e)
}),this._popupElement.addEventListener("mouseover",function(e){e.timeStamp-t._highlghtTimeStamp>150&&t._onPopupMouseOver(e)
}),this._popupElement.addEventListener("mouseout",function(e){e.timeStamp-t._highlghtTimeStamp>150&&t._onPopupMouseOut(e)
}),this._popupElement.addEventListener("mousewheel",function(e){t._onPopupMouseWheel(e)
}),this._popupElement.addEventListener("scroll",function(t){t.stopImmediatePropagation(),t.preventDefault()
}),this.addEventListener("keydown",function(e){t._onKeyDown(e)}),this.addEventListener("focus",function(){t._onFocus()
}),this.addEventListener("blur",function(){t._onBlur()}),this._onValueChange(),this._onDisabledChange()
},attributeChangedCallback:function(t,e,n){e!==n&&("value"===t?this._onValueChange():"disabled"===t&&this._onDisabledChange())
},get value(){return this.hasAttribute("value")?this.getAttribute("value"):""},set value(t){this.setAttribute("value",t)
},get mixed(){return this.hasAttribute("mixed")},set mixed(t){t?this.setAttribute("mixed",""):this.removeAttribute("mixed")
},_onFocus:function(){var t=this;o(50,function(){var e,n,i,r=t._popupElement;r.style.pointerEvents="all";
var o=t._getItemWithValue(t.value);o.disabled===!1&&t._highlightItem(o),t._overlayElement.style.display="block",r.style.visibility="visible",r.style.height="auto",r.style.left="0px",r.style.top="0px",r.scrollTop=0,r.style.overflow=null;
var s=o.getLabelBoundingClientRect(),a=t._labelElement.getBoundingClientRect(),l=t._buttonElement.getBoundingClientRect(),u=a.left-s.left,c=a.top-s.top,h=l.right-u+3;
r.style.left=u+"px",r.style.top=c+"px",r.style.width=h+"px";var d=r.getBoundingClientRect();
d.top<0&&(e=!0,n=parseFloat(r.style.top),r.style.height=d.height+d.top-5+"px",r.style.top="5px",r.scrollTop=9999),d=r.getBoundingClientRect();
var p=!1;d.bottom+5>window.innerHeight&&(p=!0,i=d.bottom-window.innerHeight,r.style.height=d.height-i-5+"px"),window.addEventListener("resize",t._windowResizeListener=function(){t.blur()
})})},_onBlur:function(){this._overlayElement.style.display="none",this._popupElement.style.visibility="hidden",window.removeEventListener("resize",this._windowResizeListener)
},_onValueChange:function(){for(var t,e,n=this.querySelectorAll("bx-selectitem")[Symbol.iterator]();!(e=n.next()).done;)t=e.value,t.getAttribute("value")===this.value?(t.setAttribute("checked",""),this._labelElement.textContent=t.getAttribute("label")):t.removeAttribute("checked")
},_onDisabledChange:function(){this.disabled===!0?this.tabIndex=-1:this.disabled===!1&&(this.tabIndex=0)
},_onButtonClick:function(){"visible"===this._popupElement.style.visibility?this.blur():this.focus()
},_onOverlayMouseDown:function(t){t.preventDefault(),this.blur()},_onPopupElementClick:function(t){"bx-selectitem"==t.target.localName&&0===t.button&&this._onSelectItemClick(t.target)
},_onSelectItemClick:function(t){var e=this;t.disabled===!1&&(this._popupElement.style.pointerEvents="none",t.blink(function(){var n=t.value!==e.value;
e.value=t.value,e.blur(),(n||e.mixed)&&e.dispatchEvent(new CustomEvent("change"))
}))},_onPopupMouseOver:function(t){"bx-selectitem"===t.target.localName&&this._onSelectItemMouseEnter(t.target)
},_onPopupMouseOut:function(){this._highlightItem(null)},_onPopupMouseWheel:function(t){t.preventDefault(),this._scroll(t.deltaY)
},_onSelectItemMouseEnter:function(t){t.disabled===!1&&this._highlightItem(t)},_onKeyDown:function(e){for(var r,o,s=n(e),a=i(this.commands)[Symbol.iterator]();!(o=a.next()).done;)r=o.value,t(r.shortcut,s)&&(e.stopPropagation(),e.preventDefault(),r.exec())
},_scroll:function(t){var e,n,i,r,o,s,a,l,u,c,h=this._popupElement,d=h.scrollTop+h.offsetHeight<=h.scrollHeight,p=h.scrollTop>0;
0>t&&!p||t>0&&!d||(e=parseFloat(h.style.top),n=parseFloat(h.style.height),t>0?e-t>5?(n+t+10>window.innerHeight&&(t=window.innerHeight-n-10),n+t>h.scrollHeight&&(t=h.scrollHeight-n,h.style.overflow="hidden"),i=n+t,r=e-t,h.style.height=i+"px",h.style.top=r+"px",h.scrollTop=0):n+t+10>window.innerHeight?(o=window.innerHeight-10,s=o-n,h.style.top="5px",h.style.height=o+"px",h.scrollTop+=t-s):h.scrollTop+=t:0>t&&(a=window.innerHeight-n-e,a>5?window.innerHeight-n+t-10<0?(l=window.innerHeight-10,u=l-n,h.style.height=l+"px",h.scrollTop+=t+u):n-t>h.scrollHeight?(h.style.overflow="hidden",h.style.height=h.scrollHeight+"px"):(c=n-t,h.style.height=c+"px"):h.scrollTop+=t))
},_highlightItem:function(t){var e,n,i,r,o,s,a;null===t?this._highlightedItem&&(this._highlightedItem.highlighted=!1):(this._highlightedItem&&this._highlightedItem!==t&&(this._highlightedItem.highlighted=!1,this._highlightedItem=null),t.highlighted=!0,this._highlightedItem=t,e=t.offsetTop,n=this._popupElement.clientHeight,i=t.clientHeight,r=t.getBoundingClientRect(),o=this._popupElement.getBoundingClientRect(),r.bottom>o.bottom?(s=r.bottom-o.bottom,this._scroll(s)):r.top<o.top&&(a=r.top-o.top,this._scroll(a)))
},_highlightPreviousItem:function(){for(var t,e,n,i=this.querySelectorAll("bx-selectitem:not([disabled])"),r=null,o=0;o<i.length;o+=1)if(t=i[o],t.highlighted){r=o;
break}0!==r&&(null===r?(e=i[i.length-1],this._highlghtTimeStamp=s(),this._highlightItem(e)):(n=i[r-1],this._highlghtTimeStamp=s(),this._highlightItem(n)))
},_highlightNextItem:function(){for(var t,e,n,i=this.querySelectorAll("bx-selectitem:not([disabled])"),r=null,o=0;o<i.length;o+=1)if(t=i[o],t.highlighted){r=o;
break}r!==i.length-1&&(null===r?(e=i[0],this._highlghtTimeStamp=s(),this._highlightItem(e)):(n=i[r+1],this._highlghtTimeStamp=s(),this._highlightItem(n)))
},_highlightFirstItem:function(){var t=this.querySelector("bx-selectitem:not([disabled])");
t&&(this._highlghtTimeStamp=s(),this._highlightItem(t))},_highlightLastItem:function(){var t,e=this.querySelectorAll("bx-selectitem:not([disabled])");
e.length>0&&(t=e[e.length-1],this._highlghtTimeStamp=s(),this._highlightItem(t))},_selectHighlightedItem:function(){var t=this.querySelector("bx-selectitem[highlighted]");
t&&(this.value=t.value),this.blur(),this.dispatchEvent(new CustomEvent("change"))
},_getItemWithValue:function(t){for(var e,n,i=null,r=this.querySelectorAll("bx-selectitem")[Symbol.iterator]();!(n=r.next()).done;)if(e=n.value,e.value===t){i=e;
break}return i}},{},HTMLElement);var c=e("bx-select",l);return{get default(){return c
}}}),System.register("elements/bx-selectedtextrangehud",[],function(){"use strict";
var t=System.get("utils/dom"),e=t.createElement,n=t.createSVGMatrix,i=t.closest,r=t.registerElement,o=(System.get("utils/rect").combineRects,System.get("utils/text").getRangeOffsetRelativeToElement),s=System.get("utils/function").throttle,a='\n  <style>@import url("stylesheets/bx-selectedtextrangehud.css");</style>\n  <line id="caret-line"></line>\n  <g id="selection-rects"></g>\n',l=function(){$traceurRuntime.defaultSuperCall(this,u.prototype,arguments)
},u=l;$traceurRuntime.createClass(l,{createdCallback:function(){this.createShadowRoot(),this.shadowRoot.innerHTML=a,this._caretLine=this.shadowRoot.querySelector("#caret-line"),this._selectionRects=this.shadowRoot.querySelector("#selection-rects"),this._update$200ms=s(this._update,200,this)
},enabledCallback:function(){var t=this;this._update(),app.canvas.addEventListener("selectedtextrangechange",this._selectedTextRangeChangeListener=function(){t._onSelectedTextRangeChange()
}),app.canvas.addEventListener("contentmutation",this._contentMutationListener=function(){t._update$200ms()
})},disabledCallback:function(){app.canvas.removeEventListener("selectedtextrangechange",this._selectedTextRangeChangeListener),app.canvas.removeEventListener("contentmutation",this._contentMutationListener)
},_onSelectedTextRangeChange:function(){this._update()},_update:function(){this._updateCaretLine(),this._udpateSelectionRects()
},_updateCaretLine:function(){var t,e,r,s,a,l,u,c,h,d,p,m,f,g,v,b,y=app.canvas.selectedTextRange;
y?(t=i(y.startContainer,"text"),e=t.getNumberOfChars(),r="backward"===y.direction?"end":"start",s=o(y,t,r),0===s?(a=t.getExtentOfChar(s),l=t.getStartPositionOfChar(s),u=t.getSubStringLength(s,1),c=a.height,h=t.getRotationOfChar(s),d=n(),d.multiplyBy(t.getTransformToElement(this)),d.rotateBy(h,l.x+u/2,l.y),this._caretLine.setAttribute("x1",l.x),this._caretLine.setAttribute("y1",a.y),this._caretLine.setAttribute("x2",l.x),this._caretLine.setAttribute("y2",a.y+c),this._caretLine.setAttribute("transform",d.toString()),this._caretLine.style.visibility="visible"):s>0&&e>=s?(p=t.getExtentOfChar(s-1),m=t.getEndPositionOfChar(s-1),f=t.getSubStringLength(s-1,1),g=p.height,v=t.getRotationOfChar(s-1),b=n(),b.multiplyBy(t.getTransformToElement(this)),b.rotateBy(v,m.x-f/2,m.y),this._caretLine.setAttribute("x1",m.x),this._caretLine.setAttribute("y1",p.y),this._caretLine.setAttribute("x2",m.x),this._caretLine.setAttribute("y2",p.y+g),this._caretLine.setAttribute("transform",b.toString()),this._caretLine.style.visibility="visible"):s>e&&(this._caretLine.style.visibility="hidden")):this._caretLine.style.visibility="hidden"
},_udpateSelectionRects:function(){var t,r,s,a,l,u,c,h,d,p,m,f,g=app.canvas.selectedTextRange;
if(this._selectionRects.innerHTML="",g&&g.collapsed===!1){t=i(g.startContainer,"text"),r=o(g,t,"start"),s=o(g,t,"end"),a=t.getNumberOfChars();
for(var v=r;s>v&&a>v;v+=1)l=t.getExtentOfChar(v),u=t.getStartPositionOfChar(v),c=t.getEndPositionOfChar(v),h=t.getSubStringLength(v,1),d=l.height,p=t.getRotationOfChar(v),m=n(),m.multiplyBy(t.getTransformToElement(this)),m.rotateBy(p,u.x+h/2,u.y),f=e("svg:rect"),f.setAttribute("x",u.x),f.setAttribute("y",l.y),f.setAttribute("width",h),f.setAttribute("height",d),f.setAttribute("transform",m.toString()),this._selectionRects.append(f)
}}},{},SVGGElement);var c=r("g","bx-selectedtextrangehud",l);return{get default(){return c
}}}),System.register("elements/bx-selectitem",[],function(){"use strict";var t=System.get("utils/dom").registerElement,e=System.get("utils/time").createTimeout;
System.get("elements/bx-icon");var n='\n<style>@import url("stylesheets/bx-selectitem.css");</style>\n\n<main>\n  <bx-icon></bx-icon>\n  <div id="label"></div>\n</main>\n',i=function(){$traceurRuntime.defaultSuperCall(this,r.prototype,arguments)
},r=i;$traceurRuntime.createClass(i,{createdCallback:function(){this.createShadowRoot(),this.shadowRoot.innerHTML=n,this._labelElement=this.shadowRoot.querySelector("#label"),this._icon=this.shadowRoot.querySelector("bx-icon"),this._onLabelChange(),this._onValueChange(),this._onCheckedChange()
},attributeChangedCallback:function(t,e,n){e!==n&&("label"===t?this._onLabelChange():"value"===t?this._onValueChange():"checked"===t&&this._onCheckedChange())
},get value(){return this.hasAttribute("value")?this.getAttribute("value"):""},set value(t){this.setAttribute("value",t)
},get label(){return this.hasAttribute("label")?this.getAttribute("label"):""},set label(t){this.setAttribute("label",t)
},get checked(){return this.hasAttribute("checked")},set checked(t){t===!0?this.setAttribute("checked",""):this.removeAttribute("checked")
},get highlighted(){return this.hasAttribute("highlighted")},set highlighted(t){t?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")
},blink:function(t){var n=this;this.highlighted=!1,e(100,function(){n.highlighted=!0,e(100,function(){return t()
})})},getLabelBoundingClientRect:function(){return this._labelElement.getBoundingClientRect()
},_onLabelChange:function(){this._labelElement.textContent=this.label},_onValueChange:function(){},_onCheckedChange:function(){this._icon.name=this.checked===!0?"check-mark":null
}},{},HTMLElement);var o=t("bx-selectitem",i);return{get default(){return o}}}),System.register("elements/bx-shortcutseditor",[],function(){"use strict";
System.get("elements/bx-shortcutseditorrow");var t=System.get("utils/array").compare,e=System.get("utils/dom"),n=e.createElement,i=e.registerElement,r=System.get("utils/event"),o=(r.keyboardShortcutToString,r.getShortcutForKeyboardEvent),s='\n  <style>@import url("stylesheets/scrollbars.css");</style>\n  <style>@import url("stylesheets/bx-shortcutseditor.css");</style>\n\n  <main>\n    <header>\n      <div>Command</div>\n      <div>Shortcut</div>\n    </header>\n\n    <div id="rows"></div>\n  </main>\n',a=function(){$traceurRuntime.defaultSuperCall(this,l.prototype,arguments)
},l=a;$traceurRuntime.createClass(a,{createdCallback:function(){var t=this;this.createShadowRoot(),this.shadowRoot.innerHTML=s,this._rows=this.shadowRoot.querySelector("#rows"),app.bridge.postMessage("getMenubarCommandDescriptors",null,function(e){t._onMenubarCommandDescriptorsRecieved(e)
}),this.addEventListener("keydown",function(e){t._onKeyDown(e)}),this._rows.addEventListener("change",function(e){t._onRowChange(e)
}),this._rows.addEventListener("focusin",function(e){t._onRowFocusIn(e)})},attachedCallback:function(){var t=this;
app.addEventListener("usershortcutschange",this._userShortcutsChangeListener=function(){t._onUserShortcutsChange()
})},detachedCallback:function(){app.removeEventListener("usershortcutschange",this._userShortcutsChangeListener)
},_onMenubarCommandDescriptorsRecieved:function(t){for(var e,i,r,o=t[Symbol.iterator]();!(r=o.next()).done;)e=r.value,i=n("bx-shortcutseditorrow"),i.commandID=e.id,i.label=e.label,i.defaultShortcut=e.shortcut,i.userShortcut=app.userShortcuts[i.commandID]||null,this._rows.append(i);
this._markConflictingRows()},_onUserShortcutsChange:function(){for(var t,e,n=this._rows.children[Symbol.iterator]();!(e=n.next()).done;)t=e.value,t.userShortcut=app.userShortcuts[t.commandID]||null;
this._markConflictingRows()},_onRowChange:function(t){t.stopPropagation();var e=t.target,n=e.commandID,i=e.userShortcut;
app.config.get("bx-shortcutseditor:userShortcuts",function(t){t=t||{},null===i?delete t[n]:t[n]=i,app.config.set("bx-shortcutseditor:userShortcuts",t)
})},_onRowFocusIn:function(t){for(var e,n,i=t.target,r=this._rows.children[Symbol.iterator]();!(n=r.next()).done;)e=n.value,e.highlighted=e===i
},_onKeyDown:function(e){var n,i;e.preventDefault();var r=o(e);t(r,["Up"])?(n=this.shadowRoot.querySelector(":focus"),n.previousElementSibling&&n.previousElementSibling.focus()):t(r,["Down"])&&(i=this.shadowRoot.querySelector(":focus"),i.nextElementSibling&&i.nextElementSibling.focus())
},_markConflictingRows:function(){for(var e,n,i,r,o=this._rows.children[Symbol.iterator]();!(r=o.next()).done;){if(e=r.value,n=!1,e.shortcut&&e.shortcut.length>0)for(var s,a=this._rows.children[Symbol.iterator]();!(s=a.next()).done;)if(i=s.value,i!==e&&i.shortcut&&i.shortcut.length>0&&t(e.shortcut,i.shortcut)===!0){n=!0;
break}e.conflicting=n}}},{},HTMLElement);var u=i("bx-shortcutseditor",a);return{get default(){return u
}}}),System.register("elements/bx-shortcutseditorrow",[],function(){"use strict";
var t=System.get("utils/array").compare,e=System.get("utils/dom"),n=(e.createElement,e.registerElement),i=System.get("utils/event"),r=i.getShortcutForKeyboardEvent,o=i.keyboardShortcutToString,s=(System.get("utils/time").createInterval,'\n  <style>@import url("stylesheets/bx-shortcutseditorrow.css");</style>\n\n  <main>\n    <div id="label"></div>\n    <div id="shortcut-preview"></div>\n\n    <div id="buttons">\n      <bx-button\n        id="clear-button"\n        icon="clear-shortcut"\n        iconsize="12"\n        title="Clear"\n        skin="bx-shortcutseditorrow">\n      </bx-button>\n\n      <bx-button\n        id="reset-button"\n        icon="reset-shortcut"\n        iconsize="12"\n        title="Reset to default shortcut"\n        skin="bx-shortcutseditorrow">\n      </bx-button>\n    </div>\n  </main>\n'),a=function(){$traceurRuntime.defaultSuperCall(this,l.prototype,arguments)
},l=a;$traceurRuntime.createClass(a,{createdCallback:function(){var t=this;this._userShortcut=null,this._defaultShortcut=[],this.createShadowRoot(),this.shadowRoot.innerHTML=s,this.tabIndex=0,this._labelElement=this.shadowRoot.querySelector("#label"),this._clearButton=this.shadowRoot.querySelector("#clear-button"),this._resetButton=this.shadowRoot.querySelector("#reset-button"),this._shortcutPreview=this.shadowRoot.querySelector("#shortcut-preview"),this.shadowRoot.addEventListener("click",function(e){return t._onClick(e)
}),this.addEventListener("keydown",function(e){return t._onKeyDown(e)}),this.addEventListener("blur",function(){return t._onBlur()
})},attributeChangedCallback:function(t,e,n){e!==n&&("label"===t?this._updateLabel():"editable"===t&&this._update())
},get commandID(){return this.hasAttribute("commandid")?this.getAttribute("commandid"):null
},set commandID(t){t?this.setAttribute("commandid",t):this.removeAttribute("commandid"),this._update()
},get label(){return this.hasAttribute("label")?this.getAttribute("label"):""},set label(t){this.setAttribute("label",t)
},get editable(){return this.hasAttribute("editable")},set editable(t){t?this.setAttribute("editable",""):this.removeAttribute("editable")
},get highlighted(){return this.hasAttribute("highlighted")},set highlighted(t){t?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")
},get conflicting(){return this.hasAttribute("conflicting")},set conflicting(t){t?this.setAttribute("conflicting",""):this.removeAttribute("conflicting")
},get userShortcut(){return this._userShortcut},set userShortcut(t){this._userShortcut=t,this._updateShortcutPreview(),this._updateButtons()
},get defaultShortcut(){return this._defaultShortcut},set defaultShortcut(t){this._defaultShortcut=t,this._updateShortcutPreview(),this._updateButtons()
},get shortcut(){return this._userShortcut||this._defaultShortcut},set shortcut(t){throw new Error("shortcut property is read-only")
},_update:function(){this._updateLabel(),this._updateShortcutPreview(),this._updateButtons()
},_updateLabel:function(){this._labelElement.textContent=this.label},_updateShortcutPreview:function(){this.editable===!0?this._shortcutPreview.textContent="Press new shortcut":this.editable===!1&&(this.userShortcut?(this._shortcutPreview.textContent=o(this.userShortcut),this._shortcutPreview.classList.add("user-shortcut")):(this._shortcutPreview.textContent=o(this.defaultShortcut),this._shortcutPreview.classList.remove("user-shortcut")))
},_updateButtons:function(){this._resetButton.hidden=this.userShortcut?!1:!0,this._clearButton.hidden=0===this.shortcut.length?!0:!1
},_onKeyDown:function(e){var n,i,o=r(e);if(this.editable){if(e.preventDefault(),e.stopPropagation(),n=["Ctrl","Alt","Shift","Meta"],i=void 0!==o.find(function(t){return!n.includes(t)
}))if(t(o,["Esc"]))this.editable=!1;else if(t(o,["Enter"]))this.editable=!1;else{if(o.includes("Meta"))return;
this.userShortcut&&t(o,this.userShortcut)===!0?this.editable=!1:t(o,this.defaultShortcut)===!0?(this.userShortcut=null,this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this.editable=!1):(this.userShortcut=o,this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this.editable=!1)
}}else t(o,["Enter"])?this.editable=!0:t(o,["Backspace"])&&(this.userShortcut?(this.userShortcut=null,this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))):this.defaultShortcut.length>0&&(this.userShortcut=[],this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))))
},_onClick:function(t){0===t.button&&(t.target===this._clearButton?this._onClearButtonClick(t):t.target===this._resetButton?this._onResetButtonClick(t):2===t.detail&&(this.editable=!0))
},_onClearButtonClick:function(){this.userShortcut=[],this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))
},_onResetButtonClick:function(){this.userShortcut=null,this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))
},_onBlur:function(){this.editable=!1}},{},HTMLElement);var u=n("bx-shortcutseditorrow",a);
return{get default(){return u}}}),System.register("elements/bx-slider",[],function(){"use strict";
System.get("elements/bx-contextmenu"),System.get("elements/bx-menu"),System.get("elements/bx-menuitem");
var t=System.get("classes/undo-manager").default,e=System.get("utils/array").compare,n=System.get("utils/dom").registerElement,i=System.get("utils/event"),r=i.getShortcutForKeyboardEvent,o=i.keyboardShortcutToString,s=System.get("utils/function").debounce,a=System.get("utils/math"),l=a.normalize,u=a.round,c=a.pow,h=a.countDecimalPlaces,d=System.get("utils/object").entries,p=System.get("utils/time").nextTick,m=System.get("utils/type"),f=m.isNumeric,g=m.isNumber,v='\n<style>\n  @import url("stylesheets/bx-slider.css");\n</style>\n\n<main>\n  <div id="bar"></div>\n  <input type="text" tabindex="-1" spellcheck="false"></input>\n\n  <bx-contextmenu id="context-menu">\n    <bx-menu>\n      <bx-menuitem commandid="cut"></bx-menuitem>\n      <bx-menuitem commandid="copy"></bx-menuitem>\n      <bx-menuitem commandid="paste"></bx-menuitem>\n    </bx-menu>\n  </bx-contextmenu>\n</main>\n',b=function(){$traceurRuntime.defaultSuperCall(this,y.prototype,arguments)
},y=b;$traceurRuntime.createClass(b,{createdCallback:function(){var e=this;this.createShadowRoot(),this.shadowRoot.innerHTML=v,this._input=this.shadowRoot.querySelector("input"),this._bar=this.shadowRoot.querySelector("#bar"),this._contextMenu=this.shadowRoot.querySelector("#context-menu"),this._undoManager=new t,this._contextMenu.validateMenu=function(t){return e._validateContextMenu(t)
},this._onValueChange(),this.addEventListener("focus",function(t){return e._onFocus(t)
}),this.addEventListener("mousedown",function(t){return e._onMouseDown(t)}),this.addEventListener("keydown",function(t){return e._onKeyDown(t)
}),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0"),this.commands={selectAll:{label:"Select All",shortcut:["Ctrl","A"],enabled:function(){return e._input.selectionStart!==e._input.selectionEnd
},exec:function(){return e._input.select()}},incrementValueOneStep:{label:"Increment Value by 1 step",shortcut:["Up"],enabled:function(){return!0
},exec:function(){return e._changeInputValueByStep(e.step)}},decrementValueOneStep:{label:"Decrement Value by 1 step",shortcut:["Down"],enabled:function(){return!0
},exec:function(){return e._changeInputValueByStep(-e.step)}},incrementValueTenSteps:{label:"Increment Value by 10 steps",shortcut:["Shift","Up"],enabled:function(){return!0
},exec:function(){return e._changeInputValueByStep(10*e.step)}},decrementValueTenSteps:{label:"Decrement Value by 10 steps",shortcut:["Shift","Down"],enabled:function(){return!0
},exec:function(){return e._changeInputValueByStep(10*-e.step)}},copy:{label:"Copy",shortcut:["Ctrl","C"],enabled:function(){return e._input.selectionStart!==e._input.selectionEnd
},exec:function(){return e._copy()}},paste:{label:"Paste",shortcut:["Ctrl","V"],enabled:function(){return e._active
},exec:function(){return e._paste()}},cut:{label:"Cut",shortcut:["Ctrl","X"],enabled:function(){return e._input.selectionStart!==e._input.selectionEnd
},exec:function(){return e._cut()}},undo:{label:"Undo: typing",shortcut:["Ctrl","Z"],enabled:function(){return!0
},exec:function(){return e._undoManager.undo()}},redo:{label:"Redo: typing",shortcut:["Ctrl","Shift","Z"],enabled:function(){return!0
},exec:function(){return e._undoManager.redo()}},blur:{label:"Blur",shortcut:["Enter"],enabled:function(){return e._active
},exec:function(){return e.blur()}}}},attributeChangedCallback:function(t,e,n){e!==n&&("value"===t?this._onValueChange():("before"===t||"after"===t)&&(this._active||(this._input.value=this._serializeValue(this.value))))
},get value(){return this.hasAttribute("value")?parseFloat(this.getAttribute("value")):this.min!==-1/0?this.min:0
},set value(t){this.setAttribute("value",t)},get min(){var t=this.getAttribute("min"),e=-1/0;
return f(t)&&(e=parseFloat(t)),e},set min(t){g(t)?this.setAttribute("min",t):this.removeAttribute("min")
},get max(){var t=this.getAttribute("max"),e=1/0;return f(t)&&(e=parseFloat(t)),e
},set max(t){g(t)?this.setAttribute("max",t):this.removeAttribute("max")},get before(){return this.hasAttribute("before")?this.getAttribute("before"):""
},set before(t){null===t?this.removeAttribute("before"):this.setAttribute("before",t)
},get after(){return this.hasAttribute("after")?this.getAttribute("after"):""},set after(t){null===t?this.removeAttribute("after"):this.setAttribute("after",t)
},get mixed(){return this.hasAttribute("mixed")},set mixed(t){t?this.setAttribute("mixed",""):this.removeAttribute("mixed")
},get precision(){return this.hasAttribute("precision")?parseFloat(this.getAttribute("precision")):2
},set precision(t){this.setAttribute("precision",t)},get step(){return this.hasAttribute("step")?parseFloat(this.getAttribute("step")):u(c(.1,this.precision),this.precision)
},set step(t){this.setAttribute("step",step)},focus:function(){this._input.focus()
},validate:function(t){return g(t)},_onValueChange:function(){this._input.value=this._active?this.value:this._serializeValue(this.value),this._updateBar(),this._updateValidity()
},_onFocus:function(){var t,e,n,i=this,r=this.value,o=this.value;this._active=!0,this._input.value=this.value,this._hideBar(),this._updateValidity(),p(function(){return i._input.select()
}),this.dispatchEvent(new CustomEvent("changestart")),this._input.addEventListener("input",t=function(){i._updateValidity()
}),this._input.addEventListener("input",e=s(function(){var t=o,e=i._input.value;o=i._input.value,i._undoManager.register({undo:function(){i._input.value=o=t,i._updateValidity(),i._input.select()
},redo:function(){i._input.value=o=e,i._updateValidity(),i._input.select()}})},250,this)),this.addEventListener("blur",n=function(){i._input.removeEventListener("input",t),i._input.removeEventListener("input",e),i.removeEventListener("blur",n),i._undoManager.reset(),i._active=!1;
var o=parseFloat(i._input.value);o=l(o,i.min,i.max,9);var s=i.validate(o)===!0,a=o!==r;
(s&&a===!0||a===!1&&i.mixed===!0)&&(i.value=o,i.dispatchEvent(new CustomEvent("change"))),i._input.value=i._serializeValue(i.value),i.dispatchEvent(new CustomEvent("changeend",{detail:a})),i._showBar()
})},_onKeyDown:function(t){var n,i,o,s;if(this._active){n=r(t);for(var a,l=d(this.commands)[Symbol.iterator]();!(a=l.next()).done;)i=a.value,o=i[0],s=i[1],s.shortcut&&e(s.shortcut,n)&&(t.stopPropagation(),t.preventDefault(),s.enabled()&&s.exec());
n.includes("Ctrl")||n.includes("Alt")||e(n,["Enter"])||t.stopPropagation()}},_onMouseDown:function(t){var e=this;
if(t.preventDefault(),!this._active&&0===t.button){var n,i,r,o=1,s=this.value,a=(this._bar.clientWidth,this.value),u=null,c=null;
r=isFinite(this.min)&&isFinite(this.max)?(this.max-this.min)/this.clientWidth:this.step,u=app.registerCursor("col-resize",100),window.addEventListener("mousemove",n=function(n){if(n.clientX!==c){c=n.clientX;
var i=n.clientX-t.clientX;if(!e._isDragging){if(i>=-o&&o>=i)return;e._isDragging=!0,e.dispatchEvent(new CustomEvent("changestart"))
}-o>i?i+=o:i>o&&(i-=o);var a=s+i*r;a=l(a,e.min,e.max,e.precision),e.value=a,e.dispatchEvent(new CustomEvent("change"))
}}),window.addEventListener("mouseup",i=function(){window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",i),app.unregisterCursor(u),e._isDragging?(e._isDragging=!1,e.dispatchEvent(new CustomEvent("changeend",{detail:e.value!==a}))):e.focus()
})}},_serializeValue:function(t){var e;return e=h(t)<this.precision?t.toFixed(this.precision):t.toString(),e=this.before+e+this.after
},_changeInputValueByStep:function(t){var e;f(this._input.value)&&(e=parseFloat(this._input.value)+t,e=l(e,this.min,this.max,this.precision),this._input.value=e.toFixed(this.precision),this._input.select(),this._input.dispatchEvent(new Event("input",{bubbles:!0})))
},_showBar:function(){this._bar.style.visibility=null,this._updateBar()},_hideBar:function(){this._bar.style.visibility="hidden"
},_updateBar:function(){var t;isFinite(this.min)&&isFinite(this.max)&&(t=this.value/this.max*100,this._bar.style.width=t+"%")
},_updateValidity:function(){var t=parseFloat(this._input.value);this._input.setCustomValidity(this.validate(t)?"":"Invalid value")
},_copy:function(){console.log("copying");var t=this._input.value.substring(this._input.selectionStart,this._input.selectionEnd);
app.bridge.postMessage("clipboard.setData",{"text/plain":t})},_paste:function(){var t=this;
console.log("pasting"),app.bridge.postMessage("clipboard.getData",null,function(e){var n,i,r,o,s;
e["text/plain"]&&(n=t._input.selectionStart,i=t._input.selectionEnd,r=e["text/plain"],o=t._input.value.substring(0,n),s=t._input.value.substring(i,t._input.value.length),t._input.value=o+r+s,t._input.setSelectionRange(n+r.length,n+r.length),t._input.dispatchEvent(new Event("input",{bubbles:!0})))
})},_cut:function(){var t=this._input.selectionStart,e=this._input.selectionEnd,n=this._input.value.substring(t,e),i=this._input.value.substring(0,t),r=this._input.value.substring(e,this._input.value.length);
this._input.value=i+r,this._input.setSelectionRange(t,t),this._input.dispatchEvent(new Event("input",{bubbles:!0})),app.bridge.postMessage("clipboard.setData",{"text/plain":n})
},_validateContextMenu:function(t){for(var e,n,i,r,s,a=t.children[Symbol.iterator]();!(s=a.next()).done;)e=s.value,e.commandID&&(n=e.commandID,i=this.commands[n],i&&(e.label=i.label,r=[],app.userShortcuts[n]?r=app.userShortcuts[n]:i.shortcut?r=i.shortcut:app.commands[n]&&app.commands[n].shortcut&&(r=app.commands[n].shortcut),e.shortcut=o(r),e.state=i.state?i.state():!1,e.disabled=i.enabled?!i.enabled():!1))
}},{},HTMLElement);var x=n("bx-slider",b);return{get default(){return x}}}),System.register("elements/bx-strokecontrols",[],function(){"use strict";
System.get("elements/bx-button"),System.get("elements/bx-checkbox"),System.get("elements/bx-slider"),System.get("elements/bx-paintsection");
var t=System.get("utils/dom"),e=(t.closest,t.registerElement),n=System.get("utils/function").throttle,i=System.get("utils/math").round,r=System.get("utils/relationship").queryStylableElements,o=System.get("utils/text").normalizeTextInRangeBeforeEditing,s=System.get("utils/transform").getScale,a='\n<style>\n  @import url("stylesheets/controls.css");\n  @import url("stylesheets/bx-strokecontrols.css");\n</style>\n\n<section id="paint-section" is="bx-paintsection" context="stroke"></section>\n\n<section id="opacity-section">\n  <h2>Opacity</h2>\n\n  <bx-slider\n    id="opacity-slider"\n    title="Stroke Opacity"\n    value="1"\n    min="0"\n    max="1"\n    precision="2">\n  </bx-slider>\n</section>\n\n<section id="width-section">\n  <h2>Width</h2>\n\n  <bx-slider\n    id="width-slider"\n    title="Stroke width"\n    value="1"\n    min="0"\n    precision="0">\n  </bx-slider>\n\n  <bx-checkbox\n    id="non-scaling-stroke-checkbox"\n    label="Non-scaling stroke">\n  </bx-checkbox>\n</section>\n\n<section id="line-cap-section">\n  <h2>Line Cap</h2>\n\n  <div id="line-cap-buttons" class="buttons">\n    <bx-button\n      id="butt-line-cap-button"\n      value="butt"\n      icon="cap-butt"\n      iconsize="30"\n      title="Butt cap"\n      skin="iconic">\n    </bx-button>\n\n    <bx-button\n      id="round-line-cap-button"\n      value="round"\n      icon="cap-round"\n      iconsize="30"\n      title="Round cap"\n      skin="iconic">\n    </bx-button>\n\n    <bx-button\n      id="square-line-cap-button"\n      value="square"\n      icon="cap-square"\n      iconsize="30"\n      title="Square cap"\n      skin="iconic">\n    </bx-button>\n  </div>\n</section>\n\n<section id="line-join-section">\n  <h2>Line Join</h2>\n\n  <div id="line-join-buttons" class="buttons">\n    <bx-button\n      id="miter-line-join-button"\n      value="miter"\n      icon="join-miter"\n      iconsize="30"\n      title="Miter Join"\n      skin="iconic">\n    </bx-button>\n\n    <bx-button\n      id="round-line-join-button"\n      value="round"\n      icon="join-round"\n      iconsize="30"\n      title="Round Join"\n      skin="iconic">\n    </bx-button>\n\n    <bx-button\n      id="bevel-line-join-button"\n      value="bevel"\n      icon="join-bevel"\n      iconsize="30"\n      title="Bevel Join"\n      skin="iconic">\n    </bx-button>\n  </div>\n</section>\n',l=function(){$traceurRuntime.defaultSuperCall(this,u.prototype,arguments)
},u=l;$traceurRuntime.createClass(l,{createdCallback:function(){var t=this;this.createShadowRoot(),this.shadowRoot.innerHTML=a,this._update$200ms=n(this._update,200,this),this._paintSection=this.shadowRoot.querySelector("#paint-section"),this._opacitySectionHeading=this.shadowRoot.querySelector("#opacity-section h2"),this._opacitySlider=this.shadowRoot.querySelector("#opacity-slider"),this._widthSectionHeading=this.shadowRoot.querySelector("#width-section h2"),this._widthSlider=this.shadowRoot.querySelector("#width-slider"),this._nonScalingStrokeCheckbox=this.shadowRoot.querySelector("#non-scaling-stroke-checkbox"),this._lineCapSectionHeading=this.shadowRoot.querySelector("#line-cap-section h2"),this._lineCapButtons=this.shadowRoot.querySelector("#line-cap-buttons"),this._buttLineCapButton=this.shadowRoot.querySelector("#butt-line-cap-button"),this._roundLineCapButton=this.shadowRoot.querySelector("#round-line-cap-button"),this._squareLineCapButton=this.shadowRoot.querySelector("#square-line-cap-button"),this._lineJoinSectionHeading=this.shadowRoot.querySelector("#line-join-section h2"),this._lineJoinButtons=this.shadowRoot.querySelector("#line-join-buttons"),this._miterLineJoinButton=this.shadowRoot.querySelector("#miter-line-join-button"),this._roundLineJoinButton=this.shadowRoot.querySelector("#round-line-join-button"),this._bevelLineJoinButton=this.shadowRoot.querySelector("#bevel-line-join-button"),this._opacitySlider.addEventListener("changestart",function(){return t._onOpacitySliderChangeStart()
}),this._widthSlider.addEventListener("changestart",function(){return t._onWidthSliderChangeStart()
}),this._nonScalingStrokeCheckbox.addEventListener("change",function(){return t._onNonScalingStrokeCheckboxChange()
}),this._lineCapButtons.addEventListener("click",function(e){return t._onLineCapButtonsClick(e)
}),this._lineJoinButtons.addEventListener("click",function(e){return t._onLineJoinButtonsClick(e)
})},enabledCallback:function(){var t=this;this._paintSection.enabledCallback(),this._toggleHuds(),this._update(),app.addEventListener("toolchange",this._toolChangeListener=function(){t._toggleHuds()
}),app.canvas.addEventListener("selectedelementschange",this._selectedElementsChangeListener=function(){t._onSelectedElementsChange()
}),app.canvas.addEventListener("selectedtextrangechange",this._selectedTextRangeChangeListener=function(){t._onSelectedTextRangeChange()
}),app.canvas.addEventListener("contentmutation",this._contentMutationListener=function(e){t._onContentMutation(e.detail)
})},disabledCallback:function(){this._paintSection.disabledCallback(),this._toggleHuds(),app.removeEventListener("toolchange",this._toolChangeListener),app.canvas.removeEventListener("selectedelementschange",this._selectedElementsChangeListener),app.canvas.removeEventListener("selectedtextrangechange",this._selectedTextRangeChangeListener),app.canvas.removeEventListener("contentmutation",this._contentMutationListener)
},_onSelectedElementsChange:function(){this._update$200ms()},_onSelectedTextRangeChange:function(){this._update$200ms()
},_onContentMutation:function(){this._update$200ms()},_onOpacitySliderChangeStart:function(){var t=this;
app.canvas.undoManager.checkpoint("Stroke opacity");var e=app.canvas,n=e.selectedElements,i=e.selectedTextRange;
o(i);{var s,a,l=r("stroke-opacity",n,i);l[0]||null}this._isChangingOpacitySlider=!0,this._opacitySlider.addEventListener("change",s=function(){for(var e,n,i=l[Symbol.iterator]();!(n=i.next()).done;)e=n.value,e.style.strokeOpacity=t._opacitySlider.value;
t._opacitySlider.mixed=!1}),this._opacitySlider.addEventListener("changeend",a=function(){t._isChangingOpacitySlider=!1,t._opacitySlider.removeEventListener("change",s),t._opacitySlider.removeEventListener("changeend",a)
})},_onWidthSliderChangeStart:function(){var t=this;app.canvas.undoManager.checkpoint("Stroke width");
var e=app.canvas,n=e.selectedElements,i=e.selectedTextRange;o(i);var a,l,u=r("stroke-width",n,i);
this._isChangingWidthSlider=!0,this._widthSlider.addEventListener("change",a=function(){for(var e,n,i,r,o,a,l,c,h=u[Symbol.iterator]();!(c=h.next()).done;)e=c.value,n=e.getTransformToElement(app.canvas.masterArtboard),i=s(n),r=i.scaleX,o=i.scaleY,a=(r+o)/2,l=t._widthSlider.value/a,e.style.strokeWidth=l+"";
t._widthSlider.mixed=!1}),this._widthSlider.addEventListener("changeend",l=function(){t._isChangingWidthSlider=!1,t._widthSlider.removeEventListener("change",a),t._widthSlider.removeEventListener("changeend",l)
})},_onNonScalingStrokeCheckboxChange:function(){var t;app.canvas.undoManager.checkpoint("Non-scaling stroke");
var e=app.canvas,n=e.selectedElements,i=e.selectedTextRange;o(i);for(var s,a=r("vector-effect",n,i),l=a[Symbol.iterator]();!(s=l.next()).done;)t=s.value,t.style.vectorEffect=this._nonScalingStrokeCheckbox.checked?"non-scaling-stroke":null
},_onLineCapButtonsClick:function(t){var e;if("bx-button"===t.target.localName&&0===t.button){var n=t.target,i=n.pressed,s=n.mixed,a=n.value;
if(i!==!0||s!==!1){app.canvas.undoManager.checkpoint("Line cap");var l=app.canvas,u=l.selectedElements,c=l.selectedTextRange;
o(c);for(var h,d=r("stroke-linecap",u,c),p=d[Symbol.iterator]();!(h=p.next()).done;)e=h.value,e.style.strokeLinecap=a
}}},_onLineJoinButtonsClick:function(t){var e;if("bx-button"===t.target.localName&&0===t.button){var n=t.target,i=n.pressed,s=n.mixed,a=n.value;
if(i!==!0||s!==!1){app.canvas.undoManager.checkpoint("Line join");var l=app.canvas,u=l.selectedElements,c=l.selectedTextRange;
o(c);for(var h,d=r("stroke-linejoin",u,c),p=d[Symbol.iterator]();!(h=p.next()).done;)e=h.value,e.style.strokeLinejoin=a
}}},_update:function(){this._updateOpacitySection(),this._updateWidthSection(),this._updateLineCapSection(),this._updateLineJoinSection()
},_updateOpacitySection:function(){var t,e,n,o;if(!this._isChangingOpacitySlider){var s=app.canvas,a=s.selectedElements,l=s.selectedTextRange,u=r("stroke-opacity",a,l),c=u[0]||null;
if(this._opacitySectionHeading.disabled=null===c?!0:!1,null===c)this._opacitySlider.value=1,this._opacitySlider.disabled=!0,this._opacitySlider.mixed=!1;
else{this._opacitySlider.disabled=!1,t=parseFloat(getComputedStyle(c).strokeOpacity),t=i(t,2),e=!1;
for(var h,d=u[Symbol.iterator]();!(h=d.next()).done;)n=h.value,n!==c&&(o=i(parseFloat(getComputedStyle(n).strokeOpacity),2),o!==t&&(e=!0));
this._opacitySlider.value=t,this._opacitySlider.mixed=e}}},_updateWidthSection:function(){var t,e,n,i,o,s,a,l;
if(!this._isChangingWidthSlider){var u=app.canvas,c=u.selectedElements,h=u.selectedTextRange,d=r("stroke-width",c,h),p=d[0]||null;
if(this._widthSectionHeading.disabled=null===p?!0:!1,null===p)this._widthSlider.value=0,this._widthSlider.disabled=!0,this._widthSlider.mixed=!1;
else{t=this._getComputedStrokeWidth(p),e=!1;for(var m,f=d[Symbol.iterator]();!(m=f.next()).done;)if(n=m.value,n!==p&&(i=this._getComputedStrokeWidth(n),i!==t)){e=!0;
break}this._widthSlider.value=t,this._widthSlider.disabled=!1,this._widthSlider.mixed=e
}if(null===p)this._nonScalingStrokeCheckbox.disabled=!0,this._nonScalingStrokeCheckbox.checked=!1,this._nonScalingStrokeCheckbox.mixed=!1;
else{o=getComputedStyle(p).vectorEffect,s=!1;for(var g,v=d[Symbol.iterator]();!(g=v.next()).done;)if(a=g.value,a!==p&&(l=getComputedStyle(a).vectorEffect,l!==o)){s=!0;
break}this._nonScalingStrokeCheckbox.disabled=!1,this._nonScalingStrokeCheckbox.checked="non-scaling-stroke"===o,this._nonScalingStrokeCheckbox.mixed=s
}}},_updateLineCapSection:function(){var t,e,n,i,o,s,a,l=app.canvas,u=l.selectedElements,c=l.selectedTextRange,h=r("stroke-linecap",u,c),d=h[0]||null;
this._lineCapSectionHeading.disabled=null===d?!0:!1;var p=[this._buttLineCapButton,this._roundLineCapButton,this._squareLineCapButton];
if(null===d)for(var m,f=p[Symbol.iterator]();!(m=f.next()).done;)t=m.value,t.disabled=!0,t.pressed=!1,t.mixed=!1;
else{for(var g,v=p[Symbol.iterator]();!(g=v.next()).done;)e=g.value,e.disabled=!1;
n=getComputedStyle(d).strokeLinecap,i=!1;for(var b,y=h[Symbol.iterator]();!(b=y.next()).done;)if(o=b.value,o!==d&&(s=getComputedStyle(o).strokeLinecap,s!==n)){i=!0;
break}for(var x,_=p[Symbol.iterator]();!(x=_.next()).done;)a=x.value,a.value===n?(a.pressed=!0,a.mixed=i):(a.pressed=!1,a.mixed=!1)
}},_updateLineJoinSection:function(){var t,e,n,i,o,s,a,l=app.canvas,u=l.selectedElements,c=l.selectedTextRange,h=r("stroke-linejoin",u,c),d=h[0]||null;
this._lineJoinSectionHeading.disabled=null===d?!0:!1;var p=[this._miterLineJoinButton,this._roundLineJoinButton,this._bevelLineJoinButton];
if(null===d)for(var m,f=p[Symbol.iterator]();!(m=f.next()).done;)t=m.value,t.disabled=!0,t.pressed=!1,t.mixed=!1;
else{for(var g,v=p[Symbol.iterator]();!(g=v.next()).done;)e=g.value,e.disabled=!1;
n=getComputedStyle(d).strokeLinejoin,i=!1;for(var b,y=h[Symbol.iterator]();!(b=y.next()).done;)if(o=b.value,o!==d&&(s=getComputedStyle(o).strokeLinejoin,s!==n)){i=!0;
break}for(var x,_=p[Symbol.iterator]();!(x=_.next()).done;)a=x.value,a.value===n?(a.pressed=!0,a.mixed=i):(a.pressed=!1,a.mixed=!1)
}},_toggleHuds:function(){"edit-tool"===app.currentTool.id&&app.currentPanel&&"stroke-panel"===app.currentPanel.id?(app.canvas.enableHud("linear-gradient-stroke-hud"),app.canvas.enableHud("radial-gradient-stroke-hud")):(app.canvas.disableHud("linear-gradient-stroke-hud"),app.canvas.disableHud("radial-gradient-stroke-hud"))
},_getComputedStrokeWidth:function(t){var e=t.getTransformToElement(app.canvas.masterArtboard),n=s(e),r=n.scaleX,o=n.scaleY,a=(r+o)/2,l=a*parseFloat(getComputedStyle(t).strokeWidth);
return l=i(l,3)}},{},HTMLElement);var c=e("bx-strokecontrols",l);return{get default(){return c
}}}),System.register("elements/bx-symbolartboard",[],function(){"use strict";var t=System.get("utils/dom"),e=t.createElement,n=t.registerElement,i={1:"none",2:"xMinYMin",3:"xMidYMin",4:"xMaxYMin",5:"xMinYMid",6:"xMidYMid",7:"xMaxYMid",8:"xMinYMax",9:"xMidYMax",10:"xMaxYMax"},r=function(){$traceurRuntime.defaultSuperCall(this,o.prototype,arguments)
},o=r;$traceurRuntime.createClass(r,{get viewBoxX(){return this.hasAttribute("viewboxx")?parseFloat(this.getAttribute("viewboxx")):0
},set viewBoxX(t){this.setAttribute("viewboxx",t)},get viewBoxY(){return this.hasAttribute("viewboxy")?parseFloat(this.getAttribute("viewboxy")):0
},set viewBoxY(t){this.setAttribute("viewboxy",t)},get viewBoxWidth(){return this.hasAttribute("viewboxwidth")?parseFloat(this.getAttribute("viewboxwidth")):0
},set viewBoxWidth(t){this.setAttribute("viewboxwidth",t)},get viewBoxHeight(){return this.hasAttribute("viewboxheight")?parseFloat(this.getAttribute("viewboxheight")):0
},set viewBoxHeight(t){this.setAttribute("viewboxheight",t)},get align(){return this.hasAttribute("align")?this.getAttribute("align"):"xMidYMid"
},set align(t){this.setAttribute("align",t)},get slice(){return this.hasAttribute("slice")
},set slice(t){t?this.setAttribute("slice",""):this.removeAttribute("slice")},loadSymbol:function(t){this.viewBoxX=t.viewBox.baseVal.x,this.viewBoxY=t.viewBox.baseVal.y,this.viewBoxWidth=t.viewBox.baseVal.width,this.viewBoxHeight=t.viewBox.baseVal.height,this.align=i[artwork.preserveAspectRatio.baseVal.align],this.slice=2===artwork.preserveAspectRatio.baseVal.meetOrSlice,this.symbolID=t.id,this.innerHTML=t.innerHTML,t.hasAttribute("style")&&this.setAttribute("style",t.getAttribute("style"))
},extractSymbol:function(){var t=this.viewBoxX+" "+this.viewBoxY+" "+this.viewBoxWidth+" "+this.viewBoxHeight,n=this.align+" "+(this.slice?"slice":"meet"),i=e("svg:symbol");
return i.setAttribute("viewBox",t),i.setAttribute("id",this.symbolID),"xMidYMid meet"!==n&&i.setAttribute("preserveAspectRatio",n),this.hasAttribute("style")&&i.setAttribute("style",this.getAttribute("style")),i.innerHTML=this.innerHTML,i
}},{},SVGGElement);var s=n("g","bx-symbolartboard",r);return{get default(){return s
}}}),System.register("elements/bx-textinput",[],function(){"use strict";var t=System.get("classes/undo-manager").default,e=System.get("utils/array").compare,n=System.get("utils/dom").registerElement,i=System.get("utils/event").getShortcutForKeyboardEvent,r=System.get("utils/function").debounce,o=System.get("utils/math").abs,s=System.get("utils/object"),a=(s.entries,s.keys),l=(System.get("utils/time").nextTick,'\n<style>\n  @import url("stylesheets/bx-textinput.css");\n</style>\n\n<input type="text" tabindex="-1" spellcheck="false"></input>\n'),u=function(){$traceurRuntime.defaultSuperCall(this,c.prototype,arguments)
},c=u;$traceurRuntime.createClass(u,{createdCallback:function(){var e=this;this.commands={selectAll:{label:"Select All",shortcut:["Ctrl","A"],enabled:function(){return!0
},exec:function(){return e._input.select()}},copy:{label:"Copy",shortcut:["Ctrl","C"],enabled:function(){return e._input.selectionStart!==e._input.selectionEnd
},exec:function(){return e._copy()}},paste:{label:"Paste",shortcut:["Ctrl","V"],enabled:function(){return!0
},exec:function(){return e._paste()}},cut:{label:"Cut",shortcut:["Ctrl","X"],enabled:function(){return e._input.selectionStart!==e._input.selectionEnd
},exec:function(){return e._cut()}},undo:{label:"Undo: typing",shortcut:["Ctrl","Z"],enabled:function(){return!0
},exec:function(){return e._undoManager.undo()}},redo:{label:"Redo: typing",shortcut:["Ctrl","Shift","Z"],enabled:function(){return!0
},exec:function(){return e._undoManager.redo()}},blur:{label:"Blur",shortcut:["Enter"],enabled:function(){return e._active
},exec:function(){return e.blur()}}},this.createShadowRoot(),this.shadowRoot.innerHTML=l,this._input=this.shadowRoot.querySelector("input"),this._onInputDebounced=r(this._onInputDebounced,250,this),this._undoManager=new t,this.addEventListener("focus",function(t){return e._onFocus(t)
}),this.addEventListener("blur",function(t){return e._onBlur(t)}),this.addEventListener("mousedown",function(t){return e._onMouseDown(t)
}),this.addEventListener("keydown",function(t){return e._onKeyDown(t)}),this._input.addEventListener("input",function(t){return e._onInput(t)
}),this._input.addEventListener("input",function(t){return e._onInputDebounced(t)
}),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0"),this._onValueChange()
},attributeChangedCallback:function(t,e,n){e!==n&&"value"===t&&this._onValueChange()
},get value(){return this.hasAttribute("value")?this.getAttribute("value"):""},set value(t){this.setAttribute("value",t)
},get mixed(){return this.hasAttribute("mixed")},set mixed(t){t?this.setAttribute("mixed",""):this.removeAttribute("mixed")
},focus:function(){this._input.focus()},validate:function(){return!0},_onFocus:function(){this._cachedValue=this._input.value,this._active=!0,this._updateValidity(),this._input.select()
},_onBlur:function(){this._undoManager.reset(),this._active=!1,this._input.value!==this.value&&(this.validate(this._input.value)===!1?this._input.value=this.value:(this.value=this._input.value,this.dispatchEvent(new CustomEvent("change"))))
},_onInput:function(){this._updateValidity()},_onInputDebounced:function(){var t=this,e=this._cachedValue,n=this._input.value;
this._cachedValue=this._input.value,this._undoManager.register({undo:function(){t._input.value=t._cachedValue=e,t._updateValidity(),t._input.select()
},redo:function(){t._input.value=t._cachedValue=n,t._updateValidity(),t._input.select()
}})},_onValueChange:function(){this._input.value=this.value,this._updateValidity()
},_onMouseDown:function(t){var e,n=this;return 0!==t.button?void t.preventDefault():void(this._active||(t.preventDefault(),document.addEventListener("mouseup",e=function(i){document.removeEventListener("mouseup",e);
var r=i.clientX-t.clientX,s=i.clientY-t.clientY;o(r)<=2&&o(s)<=2&&n.focus()})))},_onKeyDown:function(t){var n,r,o=i(t);
if(o.includes("Ctrl")===!1&&o.includes("Alt")===!1&&e(o,["Enter"])===!1)return void t.stopPropagation();
for(var s,l=a(this.commands)[Symbol.iterator]();!(s=l.next()).done;)if(n=s.value,r=app.userShortcuts[n]?app.userShortcuts[n]:this.commands[n]&&this.commands[n].shortcut?this.commands[n].shortcut:app.commands[n]&&app.commands[n].shortcut?app.commands[n].shortcut:[],e(o,r)){t.stopPropagation(),t.preventDefault(),this.commands[n].enabled()&&this.commands[n].exec();
break}},_updateValidity:function(){this._input.setCustomValidity(this.validate(this._input.value)?"":"Invalid value")
},_copy:function(){var t=this._input.value.substring(this._input.selectionStart,this._input.selectionEnd);
app.bridge.postMessage("clipboard.setData",{"text/plain":t})},_paste:function(){var t=this;
app.bridge.postMessage("clipboard.getData",null,function(e){var n,i,r,o,s;e["text/plain"]&&(n=t._input.selectionStart,i=t._input.selectionEnd,r=e["text/plain"],o=t._input.value.substring(0,n),s=t._input.value.substring(i,t._input.value.length),t._input.value=o+r+s,t._input.setSelectionRange(n+r.length,n+r.length),t._input.dispatchEvent(new Event("input",{bubbles:!0})))
})},_cut:function(){var t=this._input.selectionStart,e=this._input.selectionEnd,n=this._input.value.substring(t,e),i=this._input.value.substring(0,t),r=this._input.value.substring(e,this._input.value.length);
this._input.value=i+r,this._input.setSelectionRange(t,t),this._input.dispatchEvent(new Event("input",{bubbles:!0})),app.bridge.postMessage("clipboard.setData",{"text/plain":n})
}},{},HTMLElement);var h=n("bx-textinput",u);return{get default(){return h}}}),System.register("elements/bx-texttool",[],function(){"use strict";
var t=System.get("utils/dom"),e=t.parseSVG,n=t.registerElement,i=(t.createElement,t.createSVGPoint),r=function(){$traceurRuntime.defaultSuperCall(this,o.prototype,arguments)
},o=r;$traceurRuntime.createClass(r,{enabledCallback:function(){var t=this;app.canvas.enableHud("outlines-hud"),app.canvas.addEventListener("click",this._clickListener=function(e){t._onClick(e)
})},disabledCallback:function(){app.canvas.disableHud("outlines-hud"),app.canvas.removeEventListener("click",this._clickListener)
},_onClick:function(t){var n=app.canvas.currentContainer||app.canvas.currentArtboard,r=n.getScreenCTM().inverse(),o=i(t.clientX,t.clientY),s=o.matrixTransform(r),a='<tspan style="font-size: 16; font-family: Arial;">Enter your text here</tspan>',l='<text x="'+s.x+'" y="'+s.y+'" style="white-space: pre;">'+a+"</text>",u=e(l);
n.append(u),app.canvas.selectedElements=[u],app.toggleTool("edit-tool")}},{},HTMLElement);
var s=n("bx-texttool",r);return{get default(){return s}}}),System.register("elements/bx-transformhud",[],function(){"use strict";
var t=System.get("utils/bbox"),e=t.getUserBBox,n=t.getClientBBox,i=System.get("utils/dom"),r=i.registerElement,o=i.createSVGPoint,s=i.createSVGMatrix,a=(i.parseSVG,System.get("utils/function").throttle),l=System.get("utils/math"),u=l.abs,c=l.min,h=l.max,d=(System.get("utils/object").entries,System.get("utils/rect")),p=d.transformRect,m=d.combineRects,f=System.get("utils/time").createTimeout,g=System.get("utils/transform"),v=g.getTransformOriginPoint,b=g.getScale,y=g.skew,x=System.get("utils/vector").getAngleBetweenVectors,_=System.get("classes/enum").default,S=System.get("classes/vector").default,w=12,C=12,E=12,P=10,L=new _("initialStrokeWidth","initialVectorEffect","initialTransforms","initialUserBBox"),T='\n  <style>@import url("stylesheets/bx-transformhud.css");</style>\n\n  <g id="grippies">\n    <g id="scale-grippies">\n      <rect class="grippie" data-position="top"></rect>\n      <rect class="grippie" data-position="left"></rect>\n      <rect class="grippie" data-position="bottom"></rect>\n      <rect class="grippie" data-position="right"></rect>\n      <rect class="grippie" data-position="top-left"></rect>\n      <rect class="grippie" data-position="top-right"></rect>\n      <rect class="grippie" data-position="bottom-left"></rect>\n      <rect class="grippie" data-position="bottom-right"></rect>\n    </g>\n\n    <g id="rotate-grippies">\n      <rect class="grippie" rx="999" data-position="top-left"></rect>\n      <rect class="grippie" rx="999" data-position="top-right"></rect>\n      <rect class="grippie" rx="999" data-position="bottom-left"></rect>\n      <rect class="grippie" rx="999" data-position="bottom-right"></rect>\n    </g>\n\n    <g id="skew-grippies">\n      <rect class="grippie" data-position="top"></rect>\n      <rect class="grippie" data-position="left"></rect>\n      <rect class="grippie" data-position="bottom"></rect>\n      <rect class="grippie" data-position="right"></rect>\n    </g>\n\n    <svg id="origin-grippie" viewBox="0 0 50 50">\n      <use xlink:href="images/icons.svg#cross" x="0" y="0" width="50" height="50"></use>\n      <rect x="0" y="0" width="50" height="50" style="opacity: 0;"/>\n    </svg>\n  </g>\n',A=function(){$traceurRuntime.defaultSuperCall(this,k.prototype,arguments)
},k=A;$traceurRuntime.createClass(A,{createdCallback:function(){var t,e,n,i=this;
this.createShadowRoot(),this.shadowRoot.innerHTML=T,this._grippies=this.shadowRoot.querySelector("g#grippies"),this._scaleGrippies=this.shadowRoot.querySelector("g#scale-grippies"),this._rotateGrippies=this.shadowRoot.querySelector("g#rotate-grippies"),this._skewGrippies=this.shadowRoot.querySelector("g#skew-grippies"),this._originGrippie=this.shadowRoot.querySelector("#origin-grippie"),this._updateGrippies_25ms=a(this._updateGrippies,25,this),this._scaleGrippiesByPosition={},this._skewGrippiesByPosition={},this._rotateGrippiesByPosition={};
for(var r,o=this._scaleGrippies.children[Symbol.iterator]();!(r=o.next()).done;)t=r.value,this._scaleGrippiesByPosition[t.dataset.position]=t;
for(var s,l=this._rotateGrippies.children[Symbol.iterator]();!(s=l.next()).done;)e=s.value,this._rotateGrippiesByPosition[e.dataset.position]=e;
for(var u,c=this._skewGrippies.children[Symbol.iterator]();!(u=c.next()).done;)n=u.value,this._skewGrippiesByPosition[n.dataset.position]=n;
this.shadowRoot.addEventListener("mousedown",this._mouseDownListener=function(t){i._onMouseDown(t)
})},enabledCallback:function(){var t=this;this._onSelectedElementsChange(),this._onModeChange(),this._onZoomChange(),app.canvas.addEventListener("selectedelementschange",this._selectedElementsChangeListener=function(){t._onSelectedElementsChange()
}),app.canvas.addEventListener("contentmutation",this._contentMutationListener=function(e){t._onContentMutation(e.detail)
}),app.canvas.addEventListener("zoomchange",this._zoomChangeListener=function(){t._onZoomChange()
})},disabledCallback:function(){app.canvas.removeEventListener("selectedelementschange",this._selectedElementsChangeListener),app.canvas.removeEventListener("contentmutation",this._contentMutationListener),app.canvas.removeEventListener("zoomchange",this._zoomChangeListener)
},attributeChangedCallback:function(t,e,n){e!==n&&"mode"===t&&this._onModeChange()
},blink:function(){var t=this;this._grippies.style.display="none",f(200,function(){app.canvas.selectedElements.length>0&&(t._grippies.style.display="block")
})},get mode(){return this.hasAttribute("mode")?this.getAttribute("mode"):"scale"
},set mode(t){this.setAttribute("mode",t)},_onModeChange:function(){"scale"===this.mode?(this._scaleGrippies.style.visibility="visible",this._rotateGrippies.style.visibility="hidden",this._skewGrippies.style.visibility="hidden",this._originGrippie.style.visibility="hidden"):"rotate-and-skew"===this.mode&&(this._scaleGrippies.style.visibility="hidden",this._rotateGrippies.style.visibility="visible",this._skewGrippies.style.visibility="visible",this._originGrippie.style.visibility="visible"),this._updateGrippies()
},_onSelectedElementsChange:function(){this._grippies.style.display=0===app.canvas.selectedElements.length?"none":"block",this._updateGrippies()
},_onContentMutation:function(){this._updateGrippies_25ms()},_onZoomChange:function(){this._updateGrippies_25ms()
},_onMouseDown:function(t){var e=t.target.parentElement;e===this._scaleGrippies?this._onScaleGrippieMouseDown(t):e===this._rotateGrippies?this._onRotateGrippieMouseDown(t):e===this._skewGrippies?this._onSkewGrippieMouseDown(t):e===this._originGrippie&&this._onOriginGrippieMouseDown(t)
},_onScaleGrippieMouseDown:function(t){var i,r,a,l,u,c,h,d,p,f,g,v,y,x,_,S,w,C,E,P,T,A,k=this,O=$traceurRuntime.spread(app.canvas.selectedElements),M=t.target.dataset.position;
app.canvas.undoManager.checkpoint("Scale Transform");for(var j,R=O[Symbol.iterator]();!(j=R.next()).done;)i=j.value,i[L.initialStrokeWidth]=i.style.strokeWidth,i[L.initialVectorEffect]=i.style.vectorEffect,r=i.getScreenCTM(),a=b(r),l=a.scaleX,u=a.scaleY,c=(l+u)/2,h=getComputedStyle(i),d=c*parseFloat(h.strokeWidth),i.style.strokeWidth=d,i.style.vectorEffect="non-scaling-stroke";
if(1===O.length)p=O[0],f=e(p),g=p.getScreenCTM(),v=g.inverse(),y=s(p.transform.baseVal.consolidate().matrix),x=o(t.clientX,t.clientY),x=x.matrixTransform(v),window.addEventListener("mousemove",T=function(t){var e=app.modKeys,n=(e.ctrl,e.alt,e.shift,o(t.clientX,t.clientY));
n=n.matrixTransform(v);var i=n.x-x.x,r=n.y-x.y,a=k._scaleParams(i,r,f,M),l=a.centerX,u=a.centerY,c=a.scaleX,h=a.scaleY,d=-l*(c-1),m=-u*(h-1),g=s(y);
g.translateBy(d,m),g.scaleNonUniformBy(c,h),p.setAttribute("transform",g.toString())
});else if(O.length>1){_=function(){for(var t,e,i=0,r=[],o=app.canvas.selectedElements[Symbol.iterator]();!(e=o.next()).done;)t=e.value,r[i++]=n(t);
return r}(),S=m(_);for(var I,B=O[Symbol.iterator]();!(I=B.next()).done;)w=I.value,C=w.getScreenCTM(),E=C.inverse(),P=s(w.transform.baseVal.consolidate().matrix),w[L.initialTransforms]={clientToUserTransform:C,userToClientTransform:E,userTransform:P};
window.addEventListener("mousemove",T=function(e){for(var n,i,r,o,a,l,u,c,h,d,p,m,f,g,v,b,y=O[Symbol.iterator]();!(b=y.next()).done;)n=b.value,i=e.clientX-t.clientX,r=e.clientY-t.clientY,o=n[L.initialTransforms],a=o.clientToUserTransform,l=o.userToClientTransform,u=o.userTransform,c=k._scaleParams(i,r,S,M),h=c.centerX,d=c.centerY,p=c.scaleX,m=c.scaleY,f=-h*(p-1),g=-d*(m-1),v=s(u),v.multiplyBy(l),v.translateBy(f,g),v.scaleNonUniformBy(p,m),v.multiplyBy(a),n.setAttribute("transform",v.toString())
})}window.addEventListener("mouseup",A=function(){var t;window.removeEventListener("mousemove",T),window.removeEventListener("mouseup",A);
for(var e,n=O[Symbol.iterator]();!(e=n.next()).done;)t=e.value,t.style.strokeWidth=t[L.initialStrokeWidth],t.style.vectorEffect=t[L.initialVectorEffect]
})},_onRotateGrippieMouseDown:function(t){var e,n,i,r,a,l,u=$traceurRuntime.spread(app.canvas.selectedElements),c=v.apply(null,$traceurRuntime.spread(u)),h=o(t.clientX,t.clientY);
app.canvas.undoManager.checkpoint("Rotate Transform");for(var d,p=u[Symbol.iterator]();!(d=p.next()).done;)e=d.value,n=s(e.transform.baseVal.consolidate().matrix),i=e.getScreenCTM(),r=i.inverse(),e[L.initialTransforms]={clientToUserTransform:i,userToClientTransform:r,userTransform:n};
window.addEventListener("mousemove",a=function(t){for(var e,n,i,r,a,l,d,p,m,f,g,v=u[Symbol.iterator]();!(g=v.next()).done;)e=g.value,n=e[L.initialTransforms],i=n.clientToUserTransform,r=n.userToClientTransform,a=n.userTransform,l=o(t.clientX,t.clientY),d=new S(c,h),p=new S(c,l),m=x(d,p),f=s(a),f.multiplyBy(r),f.rotateBy(m,c.x,c.y),f.multiplyBy(i),e.setAttribute("transform",f.toString())
}),window.addEventListener("mouseup",l=function(){window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",l)
})},_onSkewGrippieMouseDown:function(t){var e,n,i,r,a,l,u,c,h,d,p,m,f,g,_,w,C,E,P,T,A,k,O,M=$traceurRuntime.spread(app.canvas.selectedElements),j=t.target.dataset.position;
O="top"===j||"bottom"===j?"horizontal":"vertical",app.canvas.undoManager.checkpoint("Skew Transform");
for(var R,I=M[Symbol.iterator]();!(R=I.next()).done;)e=R.value,e[L.initialStrokeWidth]=e.style.strokeWidth,e[L.initialVectorEffect]=e.style.vectorEffect,n=e.getScreenCTM(),i=b(n),r=i.scaleX,a=i.scaleY,l=(r+a)/2,u=getComputedStyle(e),c=l*parseFloat(u.strokeWidth),e.style.strokeWidth=c,e.style.vectorEffect="non-scaling-stroke";
if(1===M.length)h=M[0],d=h.getScreenCTM(),p=d.inverse(),m=s(h.transform.baseVal.consolidate().matrix),f=o(t.clientX,t.clientY),f=f.matrixTransform(p),g=v.apply(null,$traceurRuntime.spread(M)),g=g.matrixTransform(p),window.addEventListener("mousemove",A=function(t){var e=app.modKeys,n=(e.ctrl,e.alt,e.shift,o(t.clientX,t.clientY));
n=n.matrixTransform(p);var i=new S(g,f),r=new S(g,n),a=x(i,r),l=s(m);l="horizontal"===O?y(l,-a,0,g.x,g.y):y(l,0,a,g.x,g.y),h.setAttribute("transform",l.toString())
});else if(M.length>1){_=o(t.clientX,t.clientY),w=v.apply(null,$traceurRuntime.spread(M));
for(var B,N=M[Symbol.iterator]();!(B=N.next()).done;)C=B.value,E=C.getScreenCTM(),P=E.inverse(),T=s(C.transform.baseVal.consolidate().matrix),C[L.initialTransforms]={clientToUserTransform:E,userToClientTransform:P,userTransform:T};
window.addEventListener("mousemove",A=function(t){for(var e,n,i,r,a,l,u,c,h,d,p,m=M[Symbol.iterator]();!(p=m.next()).done;)e=p.value,n=e[L.initialTransforms],i=n.clientToUserTransform,r=n.userToClientTransform,a=n.userTransform,l=o(t.clientX,t.clientY),u=new S(w,_),c=new S(w,l),h=x(u,c),d=s(a),d.multiplyBy(r),d="horizontal"===O?y(d,-h,0,w.x,w.y):y(d,0,h,w.x,w.y),d.multiplyBy(i),e.setAttribute("transform",d.toString())
})}window.addEventListener("mouseup",k=function(){var t;window.removeEventListener("mousemove",A),window.removeEventListener("mouseup",k);
for(var e,n=M[Symbol.iterator]();!(e=n.next()).done;)t=e.value,t.style.strokeWidth=t[L.initialStrokeWidth],t.style.vectorEffect=t[L.initialVectorEffect]
})},_onOriginGrippieMouseDown:function(t){for(var n,i,r,s,a,l,u=$traceurRuntime.spread(app.canvas.selectedElements),c=u[Symbol.iterator]();!(l=c.next()).done;)n=l.value,i=n.getScreenCTM().inverse(),r=e(n),n[L.initialTransforms]={clientToUserTransform:i},n[L.initialUserBBox]=r;
app.canvas.undoManager.checkpoint("Transform Origin"),window.addEventListener("mousemove",s=function(e){for(var n,i,r,s,a,l,c,h,d=u[Symbol.iterator]();!(h=d.next()).done;)n=h.value,i=n[L.initialTransforms].clientToUserTransform,r=n[L.initialUserBBox],s=o(t.clientX,t.clientY),s=s.matrixTransform(i),a=o(e.clientX,e.clientY),a=a.matrixTransform(i),l=a.x-(r.x+r.width/2),c=a.y-(r.y+r.height/2),n.setAttribute("data-transform-origin",l+" "+c)
}),window.addEventListener("mouseup",a=function(){window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",a)
})},_updateGrippies:function(){"scale"===this.mode?this._updateScaleGrippies():"rotate-and-skew"===this.mode&&(this._updateRotateGrippies(),this._updateSkewGrippies(),this._updateOriginGrippie())
},_updateRotateGrippies:function(){for(var t,i,r,s,a,l,u,c,h=C/app.canvas.scale,d=(3/app.canvas.scale,this._rotateGrippiesByPosition),f=this._rotateGrippies.children[Symbol.iterator]();!(c=f.next()).done;)t=c.value,t.width.baseVal.value=h,t.height.baseVal.value=h;
1===app.canvas.selectedElements.length?(i=app.canvas.selectedElements[0],r=i.getTransformToElement(this),s=e(i),a=o(s.x,s.y),a=a.matrixTransform(r),d["top-left"].x.baseVal.value=a.x-h/2,d["top-left"].y.baseVal.value=a.y-h/2,a=o(s.x+s.width,s.y),a=a.matrixTransform(r),d["top-right"].x.baseVal.value=a.x-h/2,d["top-right"].y.baseVal.value=a.y-h/2,a=o(s.x,s.y+s.height),a=a.matrixTransform(r),d["bottom-left"].x.baseVal.value=a.x-h/2,d["bottom-left"].y.baseVal.value=a.y-h/2,a=o(s.x+s.width,s.y+s.height),a=a.matrixTransform(r),d["bottom-right"].x.baseVal.value=a.x-h/2,d["bottom-right"].y.baseVal.value=a.y-h/2):app.canvas.selectedElements.length>1&&(l=this.getScreenCTM().inverse(),u=m(function(){for(var t,e,i=0,r=[],o=app.canvas.selectedElements[Symbol.iterator]();!(e=o.next()).done;)t=e.value,r[i++]=n(t);
return r}()),u=p(u,l),d["top-left"].x.baseVal.value=u.x-h/2,d["top-left"].y.baseVal.value=u.y-h/2,d["top-right"].x.baseVal.value=u.x+u.width-h/2,d["top-right"].y.baseVal.value=u.y-h/2,d["bottom-left"].x.baseVal.value=u.x-h/2,d["bottom-left"].y.baseVal.value=u.y+u.height-h/2,d["bottom-right"].x.baseVal.value=u.x+u.width-h/2,d["bottom-right"].y.baseVal.value=u.y+u.height-h/2)
},_updateSkewGrippies:function(){for(var t,i,r,s,a,l,u,c,h=E/app.canvas.scale,d=(3/app.canvas.scale,this._skewGrippiesByPosition),f=this._skewGrippies.children[Symbol.iterator]();!(c=f.next()).done;)t=c.value,t.width.baseVal.value=h,t.height.baseVal.value=h;
1===app.canvas.selectedElements.length?(i=app.canvas.selectedElements[0],r=i.getTransformToElement(this),s=e(i),a=o(s.x+s.width/2,s.y),a=a.matrixTransform(r),d.top.x.baseVal.value=a.x-h/2,d.top.y.baseVal.value=a.y-h/2,a=o(s.x+s.width/2,s.y+s.height),a=a.matrixTransform(r),d.bottom.x.baseVal.value=a.x-h/2,d.bottom.y.baseVal.value=a.y-h/2,a=o(s.x,s.y+s.height/2),a=a.matrixTransform(r),d.left.x.baseVal.value=a.x-h/2,d.left.y.baseVal.value=a.y-h/2,a=o(s.x+s.width,s.y+s.height/2),a=a.matrixTransform(r),d.right.x.baseVal.value=a.x-h/2,d.right.y.baseVal.value=a.y-h/2):app.canvas.selectedElements.length>1&&(l=this.getScreenCTM().inverse(),u=m(function(){for(var t,e,i=0,r=[],o=app.canvas.selectedElements[Symbol.iterator]();!(e=o.next()).done;)t=e.value,r[i++]=n(t);
return r}()),u=p(u,l),d.top.x.baseVal.value=u.x+u.width/2-h/2,d.top.y.baseVal.value=u.y-h/2,d.bottom.x.baseVal.value=u.x+u.width/2-h/2,d.bottom.y.baseVal.value=u.y+u.height-h/2,d.left.x.baseVal.value=u.x-h/2,d.left.y.baseVal.value=u.y+u.height/2-h/2,d.right.x.baseVal.value=u.x+u.width-h/2,d.right.y.baseVal.value=u.y+u.height/2-h/2)
},_updateScaleGrippies:function(){for(var t,i,r,s,a,l,u,c,h=w/app.canvas.scale,d=(3/app.canvas.scale,this._scaleGrippiesByPosition),f=this._scaleGrippies.children[Symbol.iterator]();!(c=f.next()).done;)t=c.value,t.width.baseVal.value=h,t.height.baseVal.value=h;
1===app.canvas.selectedElements.length?(i=app.canvas.selectedElements[0],r=i.getTransformToElement(this),s=e(i),a=o(s.x+s.width/2,s.y),a=a.matrixTransform(r),d.top.x.baseVal.value=a.x-h/2,d.top.y.baseVal.value=a.y-h/2,a=o(s.x+s.width/2,s.y+s.height),a=a.matrixTransform(r),d.bottom.x.baseVal.value=a.x-h/2,d.bottom.y.baseVal.value=a.y-h/2,a=o(s.x,s.y+s.height/2),a=a.matrixTransform(r),d.left.x.baseVal.value=a.x-h/2,d.left.y.baseVal.value=a.y-h/2,a=o(s.x+s.width,s.y+s.height/2),a=a.matrixTransform(r),d.right.x.baseVal.value=a.x-h/2,d.right.y.baseVal.value=a.y-h/2,a=o(s.x,s.y),a=a.matrixTransform(r),d["top-left"].x.baseVal.value=a.x-h/2,d["top-left"].y.baseVal.value=a.y-h/2,a=o(s.x+s.width,s.y),a=a.matrixTransform(r),d["top-right"].x.baseVal.value=a.x-h/2,d["top-right"].y.baseVal.value=a.y-h/2,a=o(s.x,s.y+s.height),a=a.matrixTransform(r),d["bottom-left"].x.baseVal.value=a.x-h/2,d["bottom-left"].y.baseVal.value=a.y-h/2,a=o(s.x+s.width,s.y+s.height),a=a.matrixTransform(r),d["bottom-right"].x.baseVal.value=a.x-h/2,d["bottom-right"].y.baseVal.value=a.y-h/2):app.canvas.selectedElements.length>1&&(l=this.getScreenCTM().inverse(),u=m(function(){for(var t,e,i=0,r=[],o=app.canvas.selectedElements[Symbol.iterator]();!(e=o.next()).done;)t=e.value,r[i++]=n(t);
return r}()),u=p(u,l),d.top.x.baseVal.value=u.x+u.width/2-h/2,d.top.y.baseVal.value=u.y-h/2,d.bottom.x.baseVal.value=u.x+u.width/2-h/2,d.bottom.y.baseVal.value=u.y+u.height-h/2,d.left.x.baseVal.value=u.x-h/2,d.left.y.baseVal.value=u.y+u.height/2-h/2,d.right.x.baseVal.value=u.x+u.width-h/2,d.right.y.baseVal.value=u.y+u.height/2-h/2,d["top-left"].x.baseVal.value=u.x-h/2,d["top-left"].y.baseVal.value=u.y-h/2,d["top-right"].x.baseVal.value=u.x+u.width-h/2,d["top-right"].y.baseVal.value=u.y-h/2,d["bottom-left"].x.baseVal.value=u.x-h/2,d["bottom-left"].y.baseVal.value=u.y+u.height-h/2,d["bottom-right"].x.baseVal.value=u.x+u.width-h/2,d["bottom-right"].y.baseVal.value=u.y+u.height-h/2)
},_updateOriginGrippie:function(){var t,e,n;app.canvas.selectedElements.length>=1&&(t=P/app.canvas.scale,e=app.canvas.currentArtboard.getScreenCTM().inverse(),n=v.apply(null,$traceurRuntime.spread(app.canvas.selectedElements)),n=n.matrixTransform(e),this._originGrippie.setAttribute("width",t),this._originGrippie.setAttribute("height",t),this._originGrippie.setAttribute("x",n.x-t/2),this._originGrippie.setAttribute("y",n.y-t/2))
},_scaleParams:function(t,e,n,i){var r,o,s,a,l=app.modKeys,d=l.ctrl,p=(l.alt,l.shift);
return"top"===i?d||p?d&&!p?(r=n.x+n.width/2,o=n.y+n.height,a=(n.height-e)/n.height,s=a):!d&&p?(r=n.x+n.width/2,o=n.y+n.height/2,s=1,a=(n.height-n.height/2-e)/(n.height-n.height/2)):d&&p&&(r=n.x+n.width/2,o=n.y+n.height/2,a=(n.height-n.height/2-e)/(n.height-n.height/2),s=a):(r=n.x+n.width/2,o=n.y+n.height,s=1,a=(n.height-e)/n.height):"bottom"===i?d||p?d&&!p?(r=n.x+n.width/2,o=n.y,a=(n.height+e)/n.height,s=a):!d&&p?(r=n.x+n.width/2,o=n.y+n.height/2,s=1,a=(n.height-n.height/2+e)/(n.height-n.height/2)):d&&p&&(r=n.x+n.width/2,o=n.y+n.height/2,a=(n.height-n.height/2+e)/(n.height-n.height/2),s=a):(r=n.x+n.width/2,o=n.y,s=1,a=(n.height+e)/n.height):"left"===i?d||p?d&&!p?(r=n.x+n.width,o=n.y+n.height/2,s=(n.width-t)/n.width,a=s):!d&&p?(r=n.x+n.width/2,o=n.y+n.height/2,s=(n.width-n.width/2-t)/(n.width-n.width/2),a=1):d&&p&&(r=n.x+n.width/2,o=n.y+n.height/2,s=(n.width-n.width/2-t)/(n.width-n.width/2),a=s):(r=n.x+n.width,o=n.y+n.height/2,s=(n.width-t)/n.width,a=1):"right"===i&&(d||p?d&&!p?(r=n.x,o=n.y+n.height/2,s=(n.width+t)/n.width,a=s):!d&&p?(r=n.x+n.width/2,o=n.y+n.height/2,s=(n.width-n.width/2+t)/(n.width-n.width/2),a=1):d&&p&&(r=n.x+n.width/2,o=n.y+n.height/2,s=a=(n.width-n.width/2+t)/(n.width-n.width/2)):(r=n.x,o=n.y+n.height/2,s=(n.width+t)/n.width,a=1)),"top-left"===i?d||p?d&&!p?(r=n.x+n.width,o=n.y+n.height,s=(n.width-t)/n.width,a=(n.height-e)/n.height,s=a=c(s,a)):!d&&p?(r=n.x+n.width/2,o=n.y+n.height/2,s=(n.width-n.width/2-t)/(n.width-n.width/2),a=(n.height-n.height/2-e)/(n.height-n.height/2)):d&&p&&(r=n.x+n.width/2,o=n.y+n.height/2,s=(n.width-n.width/2-t)/(n.width-n.width/2),a=(n.height-n.height/2-e)/(n.height-n.height/2),s>=0&&a>=0?s=a=c(s,a):0>=s&&0>=a?s=a=h(s,a):u(s)>=u(a)?s=-a:a=-s):(r=n.x+n.width,o=n.y+n.height,s=(n.width-t)/n.width,a=(n.height-e)/n.height):"top-right"===i?d||p?d&&!p?(r=n.x,o=n.y+n.height,s=(n.width+t)/n.width,a=(n.height-e)/n.height,s=a=c(s,a)):!d&&p?(r=n.x+n.width/2,o=n.y+n.height/2,s=(n.width-n.width/2+t)/(n.width-n.width/2),a=(n.height-n.height/2-e)/(n.height-n.height/2)):d&&p&&(r=n.x+n.width/2,o=n.y+n.height/2,s=(n.width-n.width/2+t)/(n.width-n.width/2),a=(n.height-n.height/2-e)/(n.height-n.height/2),s>=0&&a>=0?s=a=c(s,a):0>=s&&0>=a?s=a=h(s,a):u(s)>=u(a)?s=-a:a=-s):(r=n.x,o=n.y+n.height,s=(n.width+t)/n.width,a=(n.height-e)/n.height):"bottom-left"===i?d||p?d&&!p?(r=n.x+n.width,o=n.y,s=(n.width-t)/n.width,a=(n.height+e)/n.height,s=a=c(s,a)):!d&&p?(r=n.x+n.width/2,o=n.y+n.height/2,s=(n.width-n.width/2-t)/(n.width-n.width/2),a=(n.height-n.height/2+e)/(n.height-n.height/2)):d&&p&&(r=n.x+n.width/2,o=n.y+n.height/2,s=(n.width-n.width/2-t)/(n.width-n.width/2),a=(n.height-n.height/2+e)/(n.height-n.height/2),s>=0&&a>=0?s=a=c(s,a):0>=s&&0>=a?s=a=h(s,a):u(s)>=u(a)?s=-a:a=-s):(r=n.x+n.width,o=n.y,s=(n.width-t)/n.width,a=(n.height+e)/n.height):"bottom-right"===i&&(d||p?d&&!p?(r=n.x,o=n.y,s=(n.width+t)/n.width,a=(n.height+e)/n.height,s=a=c(s,a)):!d&&p?(r=n.x+n.width/2,o=n.y+n.height/2,s=(n.width-n.width/2+t)/(n.width-n.width/2),a=(n.height-n.height/2+e)/(n.height-n.height/2)):d&&p&&(r=n.x+n.width/2,o=n.y+n.height/2,s=(n.width-n.width/2+t)/(n.width-n.width/2),a=(n.height-n.height/2+e)/(n.height-n.height/2),s>=0&&a>=0?s=a=c(s,a):0>=s&&0>=a?s=a=h(s,a):u(s)>=u(a)?s=-a:a=-s):(r=n.x,o=n.y,s=(n.width+t)/n.width,a=(n.height+e)/n.height)),{centerX:r,centerY:o,scaleX:s,scaleY:a}
}},{},SVGGElement);var O=r("g","bx-transformhud",A);return{get default(){return O
}}}),System.register("elements/bx-transformtool",[],function(){"use strict";var t=System.get("utils/bbox").getClientBBox,e=System.get("utils/dom"),n=e.isTransformableElement,i=(e.createSVGRect,e.createSVGMatrix),r=e.registerElement,o=System.get("utils/event").isMouseMoveIntentional,s=(System.get("utils/function").bind,System.get("utils/math").abs),a=System.get("utils/rect"),l=a.rectContainsRect,u=a.transformRect,c=System.get("utils/relationship"),h=c.getCommonContainer,d=c.getContainers,p=System.get("utils/constants").GRAPHICS_ELEMENTS,m=(System.get("elements/bx-rubberbandhud").default,System.get("classes/enum").default),f=System.get("classes/vector").default,g=new m("initialTransforms"),v=function(){$traceurRuntime.defaultSuperCall(this,b.prototype,arguments)
},b=v;$traceurRuntime.createClass(v,{enabledCallback:function(){var t=this;app.canvas.enableHud("outlines-hud"),app.canvas.enableHud("transform-hud"),app.canvas.enableHud("rubber-band-hud"),app.canvas.content.addEventListener("mousedown",this._mouseDownListener=function(e){t._onContentMouseDown(e)
}),app.canvas.content.addEventListener("contextmenu",this._contextMenuListener=function(e){t._onContentContextMenu(e)
})},disabledCallback:function(){app.canvas.disableHud("outlines-hud"),app.canvas.disableHud("transform-hud"),app.canvas.disableHud("rubber-band-hud"),app.canvas.content.removeEventListener("mousedown",this._mouseDownListener),app.canvas.content.removeEventListener("contextmenu",this._contextMenuListener)
},_onContentContextMenu:function(t){var e,n,i,r,o=app.canvas.getHitElements(t.clientX,t.clientY);
if(o=o.filter(function(t){return app.canvas.currentArtboard.contains(t)}),o.length>0){e=o[o.length-1],n=d(e,app.canvas.currentArtboard),i=app.canvas.selectedElements.includes(e);
for(var s,a=n[Symbol.iterator]();!(s=a.next()).done;)r=s.value,app.canvas.selectedElements.includes(r)&&(i=!0);
i===!1&&this._onContentClickSelectableElementHit(e)}else this._onContentClickBackgroundHit(t)
},_onContentMouseDown:function(t){var e=this;if(0===t.button){var n,i;this._intentionalDragStarted=!1,window.addEventListener("mousemove",n=function(i){if(o(t,i)!==!1){window.removeEventListener("mousemove",n),e._intentionalDragStarted=!0;
var r=new f(i.clientX-t.clientX,i.clientY-t.clientY),a=s(r.x)>s(r.y)?"horizontal":"vertical";
e._onIntentionalDragStart(t,i,a)}}),window.addEventListener("mouseup",i=function(r){window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",i),t.clientX===r.clientX&&t.clientY===r.clientY&&e._onContentClick(r)
})}},_onContentClick:function(t){var e,i;if(0===t.button&&!app.canvas.huds.contains(t.target)&&!this._intentionalDragStarted){var r=app.canvas.querySelector("#transform-hud"),o=app.canvas.getHitElements(t.clientX,t.clientY);
o=o.filter(function(t){return app.canvas.currentArtboard.contains(t)}),o.length>0?(e=o[o.length-1],t.detail%2===1?n(e)&&this._onContentClickSelectableElementHit(e):t.detail%2===0&&(i=this._getContainerForHitElement(e),i?(app.canvas.currentContainer=i,app.canvas.selectedElements=[]):(r.mode="scale",app.toggleTool("edit-tool")))):this._onContentClickBackgroundHit(t)
}},_getContainerForHitElement:function(t){for(var e=[],n=t.parentElement;n!==app.canvas.currentArtboard&&n!==app.canvas.currentContainer;n=n.parentElement)("g"===n.localName||"a"===n.localName)&&e.push(n);
var i=e.length>0?e[e.length-1]:null;return i},_onIntentionalDragStart:function(t,e,n){if(!app.canvas.huds.contains(t.target)){var i=app.canvas.getHitElements(e.clientX,e.clientY);
i=i.filter(function(t){return app.canvas.currentArtboard.contains(t)}),i.length>0?this._onContentElementDragStart(e,i[i.length-1],n):this._onEmptySpaceDragStart(t)
}},_onContentClickSelectableElementHit:function(t){for(var e,n,i,r,o,s,a,l=app.modKeys,u=l.ctrl,c=(l.alt,l.shift),p=d(t,app.canvas.currentArtboard),m=app.canvas.selectedElements.includes(t),f=p[Symbol.iterator]();!(a=f.next()).done;)e=a.value,app.canvas.selectedElements.includes(e)&&(m=!0);
if(u||c){if(!u&&c)if(0===p.length)app.canvas.currentContainer=null,app.canvas.selectedElements=app.canvas.selectedElements.includes(t)?app.canvas.selectedElements.filter(function(e){return e!==t
}):$traceurRuntime.spread(app.canvas.selectedElements,[t]);else if(app.canvas.currentContainer&&app.canvas.currentContainer.contains(t)){for(;t.parentNode!==app.canvas.currentContainer;)t=t.parentNode;
app.canvas.selectedElements=app.canvas.selectedElements.includes(t)?app.canvas.selectedElements.filter(function(e){return e!==t
}):$traceurRuntime.spread(app.canvas.selectedElements,[t])}else{for(o=h(t,app.canvas.currentContainer);t.parentNode!==o&&t.parentNode!==app.canvas.currentArtboard;)t=t.parentNode;
app.canvas.currentContainer=o,app.canvas.selectedElements=app.canvas.selectedElements.includes(t)?app.canvas.selectedElements.filter(function(e){return e!==t
}):$traceurRuntime.spread(app.canvas.selectedElements,[t])}else if(u&&!c){s=null;
for(var g=t.parentElement;g!==app.canvas.currentArtboard;g=g.parentElement)if("g"===g.localName||"a"===g.localName){s=g;
break}app.canvas.selectedElements=[t],app.canvas.currentContainer=s}else if(u&&c)if(app.canvas.selectedElements=app.canvas.selectedElements.includes(t)?app.canvas.selectedElements.filter(function(e){return e!==t
}):$traceurRuntime.spread(app.canvas.selectedElements,[t]),0===app.canvas.selectedElements.length)app.canvas.currentContainer=null;
else for(var v=app.canvas.selectedElements[0].parentElement;v!==app.canvas.currentArtboard;v=v.parentElement)if("g"===v.localName||"a"===v.localName){app.canvas.currentContainer=v;
break}}else if(n=app.canvas.querySelector("#transform-hud"),m)n.mode="scale"===n.mode?"rotate-and-skew":"scale";
else if(n.mode="scale",0===p.length)app.canvas.currentContainer=null,app.canvas.selectedElements=[t];
else if(i=app.canvas.currentContainer,i&&i.contains(t)){for(;t.parentNode!==i;)t=t.parentNode;
app.canvas.selectedElements=[t]}else{for(r=h(t,i);t.parentNode!==r&&t.parentNode!==app.canvas.currentArtboard;)t=t.parentNode;
app.canvas.currentContainer=r,app.canvas.selectedElements=[t]}},_onContentElementDragStart:function(t,e,n){var r,o,s,a,l,u,c,p,m,f=d(e,app.canvas.currentArtboard),v=!1;
app.canvas.undoManager.checkpoint("Transform"),app.canvas.selectedElements.includes(e)&&(v=!0);
for(var b,y=f[Symbol.iterator]();!(b=y.next()).done;)r=b.value,app.canvas.selectedElements.includes(r)&&(v=!0);
if(!v)if(0===f.length)app.canvas.currentContainer=null,app.canvas.selectedElements=[e];
else{for(o=h(e,app.canvas.currentArtboard);e.parentNode!==o&&e.parentNode!==app.canvas.currentArtboard;)e=e.parentNode;
app.canvas.currentContainer=o,app.canvas.selectedElements=[e]}for(var x,_=app.registerCursor("move",300),S=app.canvas.selectedElements[Symbol.iterator]();!(x=S.next()).done;)s=x.value,a=s.getScreenCTM(),l=a.inverse(),u=i(s.transform.baseVal.consolidate().matrix),c=u.multiplyBy(l),s[g.initialTransforms]={clientToUserTransform:a,initialClientTransform:c};
window.addEventListener("mousemove",p=function(e){var r,o,s,a,l,u=e.clientX-t.clientX,c=e.clientY-t.clientY;
app.modKeys.shift&&("vertical"===n?u=0:"horizontal"===n&&(c=0));for(var h,d=app.canvas.selectedElements[Symbol.iterator]();!(h=d.next()).done;)r=h.value,o=r[g.initialTransforms],s=o.clientToUserTransform,a=o.initialClientTransform,l=i(a),l.translateBy(u,c),l.multiplyBy(s),r.setAttribute("transform",l.toString())
}),window.addEventListener("mouseup",m=function(){window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",m),app.unregisterCursor(_)
})},_onContentClickBackgroundHit:function(t){if(0===t.button){var e=app.modKeys,n=e.ctrl,i=(e.alt,e.shift);
n||i||(app.canvas.currentContainer=null,app.canvas.selectedElements=[])}},_onEmptySpaceDragStart:function(e){var n=e,i=n.clientX,r=n.clientY,o=app.canvas.querySelector("#rubber-band-hud");
o.grabSelection(i,r,function(e){for(var n,i,r,o,s=[],a=app.canvas.currentContainer||app.canvas.currentArtboard,c=app.canvas.currentArtboard.getScreenCTM().inverse(),h=a.children[Symbol.iterator]();!(o=h.next()).done;)n=o.value,(p.includes(n.localName)||"g"===n.localName)&&(i=t(n),i=u(i,c),r=0===i.width&&0===i.height,!r&&l(e,i)&&s.push(n));
app.canvas.selectedElements=$traceurRuntime.spread(s)})}},{},HTMLElement);var y=r("bx-transformtool",v);
return{get default(){return y}}}),System.register("elements/bx-typographycontrols",[],function(){"use strict";
System.get("elements/bx-button"),System.get("elements/bx-checkbox"),System.get("elements/bx-select"),System.get("elements/bx-selectitem"),System.get("elements/bx-slider"),System.get("elements/bx-textinput");
var t=System.get("utils/dom"),e=(t.closest,t.createElement),n=t.registerElement,i=System.get("utils/function").throttle,r=System.get("utils/math").round,o=System.get("utils/relationship"),s=o.getGraphicsElements,a=o.queryStylableElements,l=System.get("utils/transform").getScale,u=System.get("utils/text"),c=u.isValidFontFamilyValue,h=u.normalizeTextInRangeBeforeEditing,d=u.normalizeTextInRangeAfterEditing,p='\n<style>\n  @import url("stylesheets/controls.css");\n  @import url("stylesheets/bx-typographycontrols.css");\n</style>\n\n<section id="font-family-section">\n  <h2 id="font-family-heading">Font Family</h2>\n  <bx-checkbox label="Custom" id="font-family-checkbox"></bx-checkbox>\n\n  <bx-select id="font-family-select" value="Arial">\n    <h3>System (Web Safe)</h3>\n\n    <div id="system-items">\n      <bx-selectitem value="Arial" label="Arial"></bx-selectitem>\n      <bx-selectitem value="Arial Black" label="Arial Black"></bx-selectitem>\n      <bx-selectitem value="Comic Sans MS" label="Comic Sans MS"></bx-selectitem>\n      <bx-selectitem value="Courier New" label="Courier New"></bx-selectitem>\n      <bx-selectitem value="Georgia" label="Georgia"></bx-selectitem>\n      <bx-selectitem value="Impact" label="Impact"></bx-selectitem>\n      <bx-selectitem value="Tahoma" label="Tahoma"></bx-selectitem>\n      <bx-selectitem value="Times New Roman" label="Times New Roman"></bx-selectitem>\n      <bx-selectitem value="Trebuchet MS" label="Trebuchet MS"></bx-selectitem>\n      <bx-selectitem value="Verdana" label="Verdana"></bx-selectitem>\n    </div>\n\n    <h3>Generic</h3>\n\n    <div id="generic-items">\n      <bx-selectitem value="cursive" label="Cursive"></bx-selectitem>\n      <bx-selectitem value="fantasy" label="Fantasy"></bx-selectitem>\n      <bx-selectitem value="monospace" label="Monospace"></bx-selectitem>\n      <bx-selectitem value="sans-serif" label="Sans Serif"></bx-selectitem>\n      <bx-selectitem value="serif" label="Serif"></bx-selectitem>\n    </div>\n  </bx-select>\n\n  <bx-textinput\n    id="font-family-textinput"\n    title="Enter the value for the CSS &quot;font-family&quot; property here."\n    value="">\n  </bx-textinput>\n</section>\n\n<section id="font-size-section">\n  <h2 id="font-size-heading">Font Size</h2>\n\n  <bx-slider\n    id="font-size-slider"\n    title=""\n    value="0"\n    min="1"\n    precision="0">\n  </bx-slider>\n</section>\n\n<section id="font-weight-section">\n  <h2 id="font-weight-heading">Font Weight</h2>\n\n  <bx-select id="font-weight-select" value="400">\n    <bx-selectitem value="100" label="100 - Ultra-light"></bx-selectitem>\n    <bx-selectitem value="200" label="200 - Light"></bx-selectitem>\n    <bx-selectitem value="300" label="300 - Book"></bx-selectitem>\n    <bx-selectitem value="400" label="400 - Normal"></bx-selectitem>\n    <bx-selectitem value="500" label="500 - Medium"></bx-selectitem>\n    <bx-selectitem value="600" label="600 - Semi-Bold"></bx-selectitem>\n    <bx-selectitem value="700" label="700 - Bold"></bx-selectitem>\n    <bx-selectitem value="800" label="800 - Extra-Bold"></bx-selectitem>\n    <bx-selectitem value="900" label="900 - Ultra-Bold"></bx-selectitem>\n  </bx-select>\n</section>\n\n<section id="font-style-section">\n  <h2 id="font-style-heading">Font Style</h2>\n\n  <bx-select id="font-style-select" value="normal">\n    <bx-selectitem value="normal" label="Normal"></bx-selectitem>\n    <bx-selectitem value="italic" label="Italic"></bx-selectitem>\n  </bx-select>\n</section>\n\n<section id="font-variant-section">\n  <h2 id="font-variant-heading">Font Variant</h2>\n\n  <bx-select id="font-variant-select" value="normal">\n    <bx-selectitem value="normal" label="Normal"></bx-selectitem>\n    <bx-selectitem value="small-caps" label="Small caps"></bx-selectitem>\n  </bx-select>\n</section>\n\n<section id="text-transform-section">\n  <h2 id="text-transform-heading">Text Transform</h2>\n\n  <bx-select id="text-transform-select" value="none">\n    <bx-selectitem value="none" label="None"></bx-selectitem>\n    <bx-selectitem value="capitalize" label="Capitalize"></bx-selectitem>\n    <bx-selectitem value="uppercase" label="Uppercase"></bx-selectitem>\n    <bx-selectitem value="lowercase" label="Lowercase"></bx-selectitem>\n  </bx-select>\n</section>\n\n<section id="text-decoration-section">\n  <h2 id="text-decoration-heading">Text Decoration</h2>\n\n  <bx-select id="text-decoration-select" value="none">\n    <bx-selectitem value="none" label="None"></bx-selectitem>\n    <bx-selectitem value="underline" label="Underline"></bx-selectitem>\n    <bx-selectitem value="overline" label="Overline"></bx-selectitem>\n    <bx-selectitem value="line-through" label="Line-through"></bx-selectitem>\n  </bx-select>\n</section>\n\n<section id="letter-spacing-section">\n  <h2 id="letter-spacing-heading">Letter spacing</h2>\n\n  <bx-slider\n    id="letter-spacing-slider"\n    title=""\n    value="0"\n    step="0.1"\n    precision="2">\n  </bx-slider>\n</section>\n\n<section id="word-spacing-section">\n  <h2 id="word-spacing-heading">Word spacing</h2>\n\n  <bx-slider\n    id="word-spacing-slider"\n    title=""\n    value="0"\n    step="0.1"\n    precision="2">\n  </bx-slider>\n</section>\n\n<section id="text-on-path-section">\n  <h2 id="text-on-path-heading">Text on Path</h2>\n\n  <div id="text-on-path-buttons">\n    <bx-button\n      id="put-text-on-path-button"\n      icon="set"\n      iconsize="25"\n      label="Put"\n      skin="bordered">\n    </bx-button>\n\n    <bx-button\n      id="release-text-on-path-button"\n      icon="unset"\n      iconsize="25"\n      label="Release"\n      skin="bordered">\n    </bx-button>\n  </div>\n</section>\n',m=function(){$traceurRuntime.defaultSuperCall(this,f.prototype,arguments)
},f=m;$traceurRuntime.createClass(m,{createdCallback:function(){var t=this;this.createShadowRoot(),this.shadowRoot.innerHTML=p,this._fontFamilyHeading=this.shadowRoot.querySelector("#font-family-heading"),this._fontFamilyCheckbox=this.shadowRoot.querySelector("#font-family-checkbox"),this._fontFamilySelect=this.shadowRoot.querySelector("#font-family-select"),this._fontFamilyTextInput=this.shadowRoot.querySelector("#font-family-textinput"),this._fontSizeHeading=this.shadowRoot.querySelector("#font-size-heading"),this._fontSizeSlider=this.shadowRoot.querySelector("#font-size-slider"),this._fontWeightHeading=this.shadowRoot.querySelector("#font-weight-heading"),this._fontWeightSelect=this.shadowRoot.querySelector("#font-weight-select"),this._fontStyleHeading=this.shadowRoot.querySelector("#font-style-heading"),this._fontStyleSelect=this.shadowRoot.querySelector("#font-style-select"),this._fontVariantHeading=this.shadowRoot.querySelector("#font-variant-heading"),this._fontVariantSelect=this.shadowRoot.querySelector("#font-variant-select"),this._textTransformHeading=this.shadowRoot.querySelector("#text-transform-heading"),this._textTransformSelect=this.shadowRoot.querySelector("#text-transform-select"),this._textDecorationHeading=this.shadowRoot.querySelector("#text-decoration-heading"),this._textDecorationSelect=this.shadowRoot.querySelector("#text-decoration-select"),this._letterSpacingHeading=this.shadowRoot.querySelector("#letter-spacing-heading"),this._letterSpacingSlider=this.shadowRoot.querySelector("#letter-spacing-slider"),this._wordSpacingHeading=this.shadowRoot.querySelector("#word-spacing-heading"),this._wordSpacingSlider=this.shadowRoot.querySelector("#word-spacing-slider"),this._textOnPathHeading=this.shadowRoot.querySelector("#text-on-path-heading"),this._putTextOnPathButton=this.shadowRoot.querySelector("#put-text-on-path-button"),this._releaseTextOnPathButton=this.shadowRoot.querySelector("#release-text-on-path-button"),this._fontFamilySelect.addEventListener("change",function(){return t._onFontFamilySelectChange()
}),this._fontFamilyTextInput.addEventListener("change",function(){return t._onFontFamilyTextInputChange()
}),this._fontFamilyCheckbox.addEventListener("change",function(){return t._onFontFamilyCheckboxChange()
}),this._fontSizeSlider.addEventListener("changestart",function(){return t._onFontSizeSliderChangeStart()
}),this._fontWeightSelect.addEventListener("change",function(){return t._onFontWeightSelectChange()
}),this._fontStyleSelect.addEventListener("change",function(){return t._onFontStyleSelectChange()
}),this._fontVariantSelect.addEventListener("change",function(){return t._onFontVariantSelectChange()
}),this._textTransformSelect.addEventListener("change",function(){return t._onTextTransformSelectChange()
}),this._textDecorationSelect.addEventListener("change",function(){return t._onTextDecorationSelectChange()
}),this._letterSpacingSlider.addEventListener("changestart",function(){return t._onLetterSpacingSliderChangeStart()
}),this._wordSpacingSlider.addEventListener("changestart",function(){return t._onWordSpacingSliderChangeStart()
}),this._putTextOnPathButton.addEventListener("click",function(e){return t._onPutTextOnPathButtonClick(e)
}),this._releaseTextOnPathButton.addEventListener("click",function(e){return t._onReleaseTextOnPathButtonClick(e)
}),this._fontFamilyTextInput.validate=function(t){return c(t)},this._updateWidgets_60ms=i(this._updateWidgets,60,this)
},enabledCallback:function(){var t=this;app.canvas.addEventListener("selectedelementschange",this._selectedElementsChangeListener=function(){t._onSelectedElementsChange()
}),app.canvas.addEventListener("contentmutation",this._contentMutationListener=function(e){t._onContentMutation(e.detail)
}),app.canvas.addEventListener("selectedtextrangechange",this._selectedTextRangeChangeListener=function(){t._onSelectedTextRangeChange()
}),this._updateWidgets()},disabledCallback:function(){app.canvas.removeEventListener("selectedelementschange",this._selectedElementsChangeListener),app.canvas.removeEventListener("contentmutation",this._contentMutationListener),app.canvas.removeEventListener("selectedtextrangechange",this._selectedTextRangeChangeListener)
},_onSelectedElementsChange:function(){this._updateWidgets_60ms()},_onSelectedTextRangeChange:function(){this._updateWidgets_60ms()
},_onContentMutation:function(){this._updateWidgets_60ms()},_onFontFamilySelectChange:function(){var t;
app.canvas.undoManager.checkpoint("Font family");var e=app.canvas,n=e.selectedElements,i=e.selectedTextRange;
h(i);for(var r,o=a("font-family",n,i),s=o[Symbol.iterator]();!(r=s.next()).done;)t=r.value,t.style.fontFamily=this._fontFamilySelect.value;
d(i)},_onFontFamilyTextInputChange:function(){var t,e=this._fontFamilyTextInput.value;
if(c(e)!==!1){app.canvas.undoManager.checkpoint("Font size");var n=app.canvas,i=n.selectedElements,r=n.selectedTextRange;
h(r);for(var o,s=a("font-family",i,r),l=s[Symbol.iterator]();!(o=l.next()).done;)t=o.value,t.style.fontFamily=this._fontFamilyTextInput.value;
d(r)}},_onFontFamilyCheckboxChange:function(){var t,e,n,i,r,o=this._fontFamilyCheckbox.checked;
if(o===!0)this._fontFamilySelect.hidden=!0,this._fontFamilySelect.disabled=!0,this._fontFamilyTextInput.hidden=!1,this._fontFamilyTextInput.disabled=!1,this._fontFamilyTextInput.mixed=this._fontFamilySelect.mixed,this._fontFamilyTextInput.value=this._fontFamilySelect.value;
else if(o===!1){app.canvas.undoManager.checkpoint("Font family"),t=app.canvas,e=t.selectedElements,n=t.selectedTextRange,h(n),i=a("font-family",e,n);
for(var s,l=i[Symbol.iterator]();!(s=l.next()).done;)r=s.value,r.style.fontFamily="Arial";
d(n)}},_onFontSizeSliderChangeStart:function(){var t=this;app.canvas.undoManager.checkpoint("Font size");
var e=app.canvas,n=e.selectedElements,i=e.selectedTextRange;h(i);var r,o,s=a("font-size",n,i);
this._isChangingFontSizeSlider=!0,this._fontSizeSlider.addEventListener("change",r=function(){var e,n,i,r;
t._fontSizeSlider.mixed=!1;for(var o,a=s[Symbol.iterator]();!(o=a.next()).done;)e=o.value,n=e.getTransformToElement(app.canvas.currentArtboard).inverse(),i=l(n).scaleY,r=t._fontSizeSlider.value*i,e.style.fontSize=r
}),this._fontSizeSlider.addEventListener("changeend",o=function(){t._fontSizeSlider.removeEventListener("change",r),t._fontSizeSlider.removeEventListener("changeend",o),t._isChangingFontSizeSlider=!1,d(i)
})},_onFontWeightSelectChange:function(){var t;app.canvas.undoManager.checkpoint("Font weight");
var e=app.canvas,n=e.selectedElements,i=e.selectedTextRange;h(i);for(var r,o=a("font-weight",n,i),s=o[Symbol.iterator]();!(r=s.next()).done;)t=r.value,t.style.fontWeight=this._fontWeightSelect.value;
d(i)},_onFontStyleSelectChange:function(){var t;app.canvas.undoManager.checkpoint("Font style");
var e=app.canvas,n=e.selectedElements,i=e.selectedTextRange;h(i);for(var r,o=a("font-style",n,i),s=o[Symbol.iterator]();!(r=s.next()).done;)t=r.value,t.style.fontStyle=this._fontStyleSelect.value;
d(i)},_onFontVariantSelectChange:function(){var t;app.canvas.undoManager.checkpoint("Font variant");
var e=app.canvas,n=e.selectedElements,i=e.selectedTextRange;h(i);for(var r,o=a("font-variant",n,i),s=o[Symbol.iterator]();!(r=s.next()).done;)t=r.value,t.style.fontVariant=this._fontVariantSelect.value;
d(i)},_onTextTransformSelectChange:function(){var t;app.canvas.undoManager.checkpoint("Text transform");
var e=app.canvas,n=e.selectedElements,i=e.selectedTextRange;h(i);for(var r,o=a("text-transform",n,i),s=o[Symbol.iterator]();!(r=s.next()).done;)t=r.value,t.style.textTransform=this._textTransformSelect.value;
d(i)},_onTextDecorationSelectChange:function(){var t;app.canvas.undoManager.checkpoint("Text decoration");
var e=app.canvas,n=e.selectedElements,i=e.selectedTextRange;h(i);for(var r,o=a("text-decoration",n,i),s=o[Symbol.iterator]();!(r=s.next()).done;)t=r.value,t.style.textDecoration=this._textDecorationSelect.value;
d(i)},_onLetterSpacingSliderChangeStart:function(){var t=this;app.canvas.undoManager.checkpoint("Letter spacing");
var e=app.canvas,n=e.selectedElements,i=e.selectedTextRange;h(i);var r,o,s=a("letter-spacing",n,i);
this._isChangingLetterSpacingSlider=!0,this._letterSpacingSlider.addEventListener("change",r=function(){var e,n,i,r;
t._letterSpacingSlider.mixed=!1;for(var o,a=s[Symbol.iterator]();!(o=a.next()).done;)e=o.value,n=e.getTransformToElement(app.canvas.currentArtboard).inverse(),i=l(n).scaleX,r=t._letterSpacingSlider.value*i,e.style.letterSpacing=r
}),this._letterSpacingSlider.addEventListener("changeend",o=function(){t._letterSpacingSlider.removeEventListener("change",r),t._letterSpacingSlider.removeEventListener("changeend",o),t._isChangingLetterSpacingSlider=!1,d(i)
})},_onWordSpacingSliderChangeStart:function(){var t=this;app.canvas.undoManager.checkpoint("Word spacing");
var e=app.canvas,n=e.selectedElements,i=e.selectedTextRange;h(i);var r,o,s=a("word-spacing",n,i);
this._isChangingWordSpacingSlider=!0,this._wordSpacingSlider.addEventListener("change",r=function(){var e,n,i,r;
t._wordSpacingSlider.mixed=!1;for(var o,a=s[Symbol.iterator]();!(o=a.next()).done;)e=o.value,n=e.getTransformToElement(app.canvas.currentArtboard).inverse(),i=l(n).scaleX,r=t._wordSpacingSlider.value*i,e.style.wordSpacing=r
}),this._wordSpacingSlider.addEventListener("changeend",o=function(){t._wordSpacingSlider.removeEventListener("change",r),t._wordSpacingSlider.removeEventListener("changeend",o),t._isChangingWordSpacingSlider=!1,d(i)
})},_onPutTextOnPathButtonClick:function(){app.canvas.undoManager.checkpoint("Text on path");
var t=$traceurRuntime.spread(app.canvas.selectedElements),n="text"===t[0].localName?t[0]:t[1],i="path"===t[0].localName?t[0]:t[1];
null===i.getAttribute("id")&&i.setAttribute("id",app.canvas.generateUniqueID("path"));
var r=e("svg:textPath");r.href.baseVal="#"+i.id,r.innerHTML=n.innerHTML,n.removeAttribute("transform"),n.innerHTML="",app.canvas.defs.append(i),n.append(r),t.remove(i),app.canvas.selectedElements=$traceurRuntime.spread(t)
},_onReleaseTextOnPathButtonClick:function(){var t,e,n;app.canvas.undoManager.checkpoint("Text on path");
for(var i,r=s(app.canvas.selectedElements,!0),o=r.filter(function(t){return"text"===t.localName
}),a=o[Symbol.iterator]();!(i=a.next()).done;)t=i.value,e=t.getElementsByTagName("textPath")[0],n=app.canvas.masterArtboard.querySelector(e.href.baseVal),app.canvas.currentArtboard.append(n),e&&(t.innerHTML=e.innerHTML)
},_updateWidgets:function(){this._updateFontFamilySection(),this._updateFontSizeSection(),this._updateFontWeightSection(),this._updateFontStyleSection(),this._updateFontVariantSection(),this._updateTextTransformSection(),this._updateTextDecorationSection(),this._updateLetterSpacingSection(),this._updateWordSpacingSection(),this._updateTextOnPathSection()
},_updateFontFamilySection:function(){var t,e,n,i=app.canvas,r=i.selectedElements,o=i.selectedTextRange,s=a("font-family",r,o),l=s[0]||null,u=s.slice(1),c=null,h=!1,d=!1;
l&&(c=getComputedStyle(l).fontFamily,c.contains(",")?h=!0:(t=c.replaceAll("'","").replaceAll('"',""),null===this._fontFamilySelect.querySelector('bx-selectitem[value="'+t+'"]')&&(h=!0)));
for(var p,m=u[Symbol.iterator]();!(p=m.next()).done;)if(e=p.value,n=getComputedStyle(e).fontFamily,null!==n&&n!==c){d=!0;
break}null===c?(this._fontFamilyCheckbox.checked=!1,this._fontFamilyCheckbox.disabled=!0):(this._fontFamilyCheckbox.disabled=!1,this._fontFamilyCheckbox.checked=h),null===c?(this._fontFamilySelect.hidden=!1,this._fontFamilySelect.disabled=!0,this._fontFamilySelect.mixed=!1):h===!1?(this._fontFamilySelect.hidden=!1,this._fontFamilySelect.disabled=!1,this._fontFamilySelect.value=c.replaceAll("'",""),this._fontFamilySelect.mixed=d):(this._fontFamilySelect.hidden=!0,this._fontFamilySelect.disabled=!0),null===c?(this._fontFamilyTextInput.hidden=!0,this._fontFamilyTextInput.disabled=!0):h===!1?(this._fontFamilyTextInput.hidden=!0,this._fontFamilyTextInput.disabled=!0):(this._fontFamilyTextInput.hidden=!1,this._fontFamilyTextInput.disabled=!1,this._fontFamilyTextInput.value=c,this._fontFamilyTextInput.mixed=d),this._fontFamilyHeading.disabled=this._fontFamilyCheckbox.disabled&&this._fontFamilySelect.disabled&&this._fontFamilyTextInput.disabled
},_updateFontSizeSection:function(){var t,e,n,i,o,s,u,c;if(!this._isChangingFontSizeSlider){var h=function(t){var e=getComputedStyle(t).fontSize;
return e=parseFloat(e)},d=app.canvas,p=d.selectedElements,m=d.selectedTextRange,f=a("font-size",p,m);
if(f.length>0){t=f[0],e=f.slice(1),n=h(t),i=!1;for(var g,v=e[Symbol.iterator]();!(g=v.next()).done;)if(o=g.value,s=h(o),s!==n){i=!0;
break}u=t.closest("text").getTransformToElement(app.canvas.currentArtboard),c=l(u).scaleY,this._fontSizeSlider.disabled=!1,this._fontSizeSlider.value=r(n*c,2),this._fontSizeSlider.mixed=i
}else this._fontSizeSlider.disabled=!0;this._fontSizeHeading.disabled=this._fontSizeSlider.disabled
}},_updateFontWeightSection:function(){var t,e,n,i,r,o,s=function(t){var e=getComputedStyle(t).fontWeight;
return"normal"===e?e="400":"bold"===e&&(e="700"),e},l=app.canvas,u=l.selectedElements,c=l.selectedTextRange,h=a("font-weight",u,c);
if(h.length>0){t=h[0],e=h.slice(1),n=s(t),i=!1;for(var d,p=e[Symbol.iterator]();!(d=p.next()).done;)if(r=d.value,o=s(r),o!==n){i=!0;
break}this._fontWeightSelect.disabled=!1,this._fontWeightSelect.value=n,this._fontWeightSelect.mixed=i
}else this._fontWeightSelect.disabled=!0;this._fontWeightHeading.disabled=this._fontWeightSelect.disabled
},_updateFontStyleSection:function(){var t,e,n,i,r,o,s=function(){var e=getComputedStyle(t).fontStyle;
return"oblique"===e&&(e="italic"),e},l=app.canvas,u=l.selectedElements,c=l.selectedTextRange,h=a("font-style",u,c);
if(h.length>0){t=h[0],e=h.slice(1),n=s(t),i=!1;for(var d,p=e[Symbol.iterator]();!(d=p.next()).done;)if(r=d.value,o=s(r),o!==n){i=!0;
break}this._fontStyleSelect.disabled=!1,this._fontStyleSelect.value=n,this._fontStyleSelect.mixed=i
}else this._fontStyleSelect.disabled=!0;this._fontStyleHeading.disabled=this._fontStyleSelect.disabled
},_updateFontVariantSection:function(){var t,e,n,i,r,o,s=app.canvas,l=s.selectedElements,u=s.selectedTextRange,c=a("font-variant",l,u);
if(c.length>0){t=c[0],e=c.slice(1),n=getComputedStyle(t).fontVariant,i=!1;for(var h,d=e[Symbol.iterator]();!(h=d.next()).done;)if(r=h.value,o=getComputedStyle(r).fontVariant,o!==n){i=!0;
break}this._fontVariantSelect.disabled=!1,this._fontVariantSelect.value=n,this._fontVariantSelect.mixed=i
}else this._fontVariantSelect.disabled=!0;this._fontVariantHeading.disabled=this._fontVariantSelect.disabled
},_updateTextTransformSection:function(){var t,e,n,i,r,o,s=app.canvas,l=s.selectedElements,u=s.selectedTextRange,c=a("text-transform",l,u);
if(c.length>0){t=c[0],e=c.slice(1),n=getComputedStyle(t).textTransform,i=!1;for(var h,d=e[Symbol.iterator]();!(h=d.next()).done;)if(r=h.value,o=getComputedStyle(r).textTransform,o!==n){i=!0;
break}this._textTransformSelect.disabled=!1,this._textTransformSelect.value=n,this._textTransformSelect.mixed=i
}else this._textTransformSelect.disabled=!0;this._textTransformHeading.disabled=this._textTransformSelect.disabled
},_updateTextDecorationSection:function(){var t,e,n,i,r,o,s=app.canvas,l=s.selectedElements,u=s.selectedTextRange,c=a("text-decoration",l,u);
if(c.length>0){t=c[0],e=c.slice(1),n=getComputedStyle(t).textDecoration,i=!1;for(var h,d=e[Symbol.iterator]();!(h=d.next()).done;)if(r=h.value,o=getComputedStyle(r).textDecoration,o!==n){i=!0;
break}this._textDecorationSelect.disabled=!1,this._textDecorationSelect.value=n,this._textDecorationSelect.mixed=i
}else this._textDecorationSelect.disabled=!0;this._textDecorationHeading.disabled=this._textDecorationSelect.disabled
},_updateLetterSpacingSection:function(){var t,e,n,i,o,s;if(!this._isChangingLetterSpacingSlider){var l=app.canvas,u=l.selectedElements,c=l.selectedTextRange,h=a("letter-spacing",u,c),d=function(t){var e=getComputedStyle(t).letterSpacing;
return e="normal"===e?0:parseFloat(e)};if(h.length>0){t=h[0],e=h.slice(1),n=d(t),i=!1;
for(var p,m=e[Symbol.iterator]();!(p=m.next()).done;)if(o=p.value,s=d(o),s!==n){i=!0;
break}this._letterSpacingSlider.value=r(n,2),this._letterSpacingSlider.mixed=i,this._letterSpacingSlider.disabled=!1
}else this._letterSpacingSlider.value=0,this._letterSpacingSlider.mixed=!1,this._letterSpacingSlider.disabled=!0;
this._letterSpacingHeading.disabled=this._letterSpacingSlider.disabled}},_updateWordSpacingSection:function(){var t,e,n,i,o,s;
if(!this._isChangingWordSpacingSlider){var l=app.canvas,u=l.selectedElements,c=l.selectedTextRange,h=a("word-spacing",u,c),d=function(t){var e=getComputedStyle(t).wordSpacing;
return e="normal"===e?0:parseFloat(e)};if(h.length>0){t=h[0],e=h.slice(1),n=d(t),i=!1;
for(var p,m=e[Symbol.iterator]();!(p=m.next()).done;)if(o=p.value,s=d(o),s!==n){i=!0;
break}this._wordSpacingSlider.value=r(n,2),this._wordSpacingSlider.mixed=i,this._wordSpacingSlider.disabled=!1
}else this._wordSpacingSlider.value=0,this._wordSpacingSlider.mixed=!1,this._wordSpacingSlider.disabled=!0;
this._wordSpacingHeading.disabled=this._wordSpacingSlider.disabled}},_updateTextOnPathSection:function(){var t,e,n,i=app.canvas.selectedElements;
2===i.length?(t=null,e=null,"path"===i[0].localName?t=i[0]:"path"===i[1].localName&&(t=i[1]),"text"===i[0].localName&&0===i[0].getElementsByTagName("textPath").length?e=i[0]:"text"===i[1].localName&&0===i[1].getElementsByTagName("textPath").length&&(e=i[1]),this._putTextOnPathButton.disabled=t&&e?!1:!0):this._putTextOnPathButton.disabled=!0;
for(var r,o=s(app.canvas.selectedElements,!0),a=o.filter(function(t){return"text"===t.localName
}),l=!1,u=a[Symbol.iterator]();!(r=u.next()).done;)if(n=r.value,n.getElementsByTagName("textPath").length>0){l=!0;
break}this._releaseTextOnPathButton.disabled=!l,this._textOnPathHeading.disabled=this._putTextOnPathButton.disabled&&this._releaseTextOnPathButton.disabled
}},{},HTMLElement);var g=n("bx-typographycontrols",m);return{get default(){return g
}}}),System.register("elements/bx-viewboxedithud",[],function(){"use strict";var t=System.get("utils/dom"),e=t.createSVGPoint,n=t.registerElement,i=System.get("utils/event").isMouseMoveIntentional,r=System.get("utils/math"),o=r.abs,s=r.round,a='\n  <style>@import url("stylesheets/bx-viewboxedithud.css");</style>\n  <path id="outer-area"></path>\n  <rect id="inner-area" width="0" height="0" x="0" y="0"></rect>\n\n  <g id="resize-grippies">\n    <rect class="resize-grippie" data-position="left"></rect>\n    <rect class="resize-grippie" data-position="right"></rect>\n    <rect class="resize-grippie" data-position="top"></rect>\n    <rect class="resize-grippie" data-position="bottom"></rect>\n    <rect class="resize-grippie" data-position="top-left"></rect>\n    <rect class="resize-grippie" data-position="top-right"></rect>\n    <rect class="resize-grippie" data-position="bottom-left"></rect>\n    <rect class="resize-grippie" data-position="bottom-right"></rect>\n  </g>\n',l=function(){$traceurRuntime.defaultSuperCall(this,u.prototype,arguments)
},u=l;$traceurRuntime.createClass(l,{createdCallback:function(){var t=this;this.createShadowRoot(),this.shadowRoot.innerHTML=a,this._innerArea=this.shadowRoot.querySelector("#inner-area"),this._outerArea=this.shadowRoot.querySelector("#outer-area"),this._resizeGrippies=this.shadowRoot.querySelector("#resize-grippies"),this._innerArea.addEventListener("mousedown",function(e){t._onInnerAreaMouseDown(e)
}),this._resizeGrippies.addEventListener("mousedown",function(e){t._onResizeGrippieMouseDown(e)
})},enabledCallback:function(){var t=this;app.canvas.addEventListener("contentmutation",this._contentMutationListener=function(e){t._onContentMutation(e)
}),app.canvas.addEventListener("zoomchange",this._zoomChangeListener=function(){t._onZoomChange()
}),this._update()},disabledCallback:function(){app.canvas.removeEventListener("contentmutation",this._contentMutationListener),app.canvas.removeEventListener("zoomchange",this._zoomChangeListener)
},_onContentMutation:function(t){(t.target===app.canvas||t.target.parentElement===app.canvas)&&this._update()
},_onZoomChange:function(){this._update()},_onInnerAreaMouseDown:function(t){var e,n,r=this;
window.addEventListener("mousemove",n=function(o){i(t,o,7)!==!1&&(window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",e),r._onInnerAreaDragStart(t))
}),window.addEventListener("mouseup",e=function(){window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",e)
})},_onInnerAreaDragStart:function(t){app.canvas.undoManager.checkpoint("View box");
var n,i,r=app.registerCursor("-webkit-grabbing",900),o=app.canvas.currentArtboard.viewBoxX,a=app.canvas.currentArtboard.viewBoxY,l=app.canvas.currentArtboard.getScreenCTM().inverse(),u=app.canvas.zoom<500?0:2,c=e(t.clientX,t.clientY);
c=c.matrixTransform(l),window.addEventListener("mousemove",i=function(t){var n=e(t.clientX,t.clientY);
n=n.matrixTransform(l);var i={x:n.x-c.x,y:n.y-c.y},r=o+i.x,h=a+i.y;null!==r&&(app.canvas.currentArtboard.viewBoxX=s(r,u)),null!==h&&(app.canvas.currentArtboard.viewBoxY=s(h,u))
}),window.addEventListener("mouseup",n=function(){window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",n),app.unregisterCursor(r)
})},_onResizeGrippieMouseDown:function(t){app.canvas.undoManager.checkpoint("View box");
var n=t.target,i=n.dataset.position,r=app.canvas.currentArtboard.getScreenCTM().inverse(),a=app.canvas.currentArtboard.viewBoxX,l=app.canvas.currentArtboard.viewBoxY,u=app.canvas.currentArtboard.viewBoxWidth,c=app.canvas.currentArtboard.viewBoxHeight,h=app.canvas.zoom<500?0:2,d=e(t.clientX,t.clientY);
d=d.matrixTransform(r);var p,m,f;"left"===i||"right"===i?f="ew-resize":"top"===i||"bottom"===i?f="ns-resize":"top-left"===i?f="nwse-resize":"top-right"===i?f="nesw-resize":"bottom-left"===i?f="nesw-resize":"bottom-right"===i&&(f="nwse-resize");
var g=app.registerCursor(f,999);window.addEventListener("mousemove",p=function(t){var n=e(t.clientX,t.clientY);
n=n.matrixTransform(r);var p={x:n.x-d.x,y:n.y-d.y},m=null,f=null,g=null,v=null;"left"===i?(g=u-p.x,m=a+p.x,0>g&&(g=o(g),m=a+u)):"right"===i?(g=u+p.x,0>g&&(g=o(g),m=a-g)):"top"===i?(v=c-p.y,f=l+p.y,0>v&&(v=o(v),f=l+c)):"bottom"===i?(v=c+p.y,0>v&&(v=o(v),f=l-v)):"top-left"===i?(g=u-p.x,v=c-p.y,m=a+p.x,f=l+p.y,0>g&&(g=o(g),m=a+u),0>v&&(v=o(v),f=l+c)):"top-right"===i?(g=u+p.x,v=c-p.y,f=l+p.y,0>g&&(g=o(g),m=a-g),0>v&&(v=o(v),f=l+c)):"bottom-left"===i?(g=u-p.x,v=c+p.y,m=a+p.x,0>g&&(g=o(g),m=a+u),0>v&&(v=o(v),f=l-v)):"bottom-right"===i&&(g=u+p.x,v=c+p.y,0>g&&(g=o(g),m=a-g),0>v&&(v=o(v),f=l-v)),null!==m&&(app.canvas.currentArtboard.viewBoxX=s(m,h)),null!==f&&(app.canvas.currentArtboard.viewBoxY=s(f,h)),null!==g&&(app.canvas.currentArtboard.viewBoxWidth=s(g,h)),null!==v&&(app.canvas.currentArtboard.viewBoxHeight=s(v,h))
}),window.addEventListener("mouseup",m=function(){window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",m),app.unregisterCursor(g)
})},_update:function(){var t,e,n=app.canvas.currentArtboard.viewBoxX,i=app.canvas.currentArtboard.viewBoxY,r=app.canvas.currentArtboard.viewBoxWidth,o=app.canvas.currentArtboard.viewBoxHeight;
this._innerArea.setAttribute("x",n),this._innerArea.setAttribute("y",i),this._innerArea.setAttribute("width",r),this._innerArea.setAttribute("height",o);
var s=1e6,a="\n      M "+-s+", "+-s+"\n      L "+2*s+", "+-s+"\n      L "+2*s+", "+2*s+"\n      L "+-s+", "+2*s+"\n      Z\n      M "+n+", "+i+"\n      L "+n+", "+(i+o)+"\n      L "+(n+r)+", "+(i+o)+"\n      L "+(n+r)+", "+i+"\n      Z\n    ";
this._outerArea.setAttribute("d",a);for(var l,u=10/app.canvas.scale,c=this._resizeGrippies.children[Symbol.iterator]();!(l=c.next()).done;)t=l.value,e=t.dataset.position,"left"===e?(t.x.baseVal.value=n-u/2,t.y.baseVal.value=i,t.width.baseVal.value=u,t.height.baseVal.value=o):"right"===e?(t.x.baseVal.value=n+r-u/2,t.y.baseVal.value=i,t.width.baseVal.value=u,t.height.baseVal.value=o):"top"===e?(t.x.baseVal.value=n,t.y.baseVal.value=i-u/2,t.width.baseVal.value=r,t.height.baseVal.value=u):"bottom"===e?(t.x.baseVal.value=n,t.y.baseVal.value=i+o-u/2,t.width.baseVal.value=r,t.height.baseVal.value=u):"top-left"===e?(t.x.baseVal.value=n-u,t.y.baseVal.value=i-u,t.width.baseVal.value=2*u,t.height.baseVal.value=2*u):"top-right"===e?(t.x.baseVal.value=n+r-u,t.y.baseVal.value=i-u,t.width.baseVal.value=2*u,t.height.baseVal.value=2*u):"bottom-left"===e?(t.x.baseVal.value=n-u,t.y.baseVal.value=i+o-u,t.width.baseVal.value=2*u,t.height.baseVal.value=2*u):"bottom-right"===e&&(t.x.baseVal.value=n+r-u,t.y.baseVal.value=i+o-u,t.width.baseVal.value=2*u,t.height.baseVal.value=2*u)
}},{},SVGGElement);var c=n("g","bx-viewboxedithud",l);return{get default(){return c
}}}),System.register("elements/bx-viewboxhud",[],function(){"use strict";var t=System.get("utils/dom").registerElement,e='\n  <style>@import url("stylesheets/bx-viewboxhud.css");</style>\n  <rect id="outline" width="0" height="0" x="0" y="0"></rect>\n  <path id="overlay"></path>\n',n=function(){$traceurRuntime.defaultSuperCall(this,i.prototype,arguments)
},i=n;$traceurRuntime.createClass(n,{createdCallback:function(){this.createShadowRoot(),this.shadowRoot.innerHTML=e,this._outlineRect=this.shadowRoot.querySelector("#outline")
},enabledCallback:function(){var t=this;app.canvas.addEventListener("contentmutation",this._contentMutationListener=function(e){t._onContentMutation(e)
})},disabledCallback:function(){app.canvas.removeEventListener("contentmutation",this._contentMutationListener)
},_onContentMutation:function(t){(t.target===app.canvas||t.target.parentElement===app.canvas)&&this._update()
},_update:function(){this._outlineRect.setAttribute("width",app.canvas.currentArtboard.viewBoxWidth),this._outlineRect.setAttribute("height",app.canvas.currentArtboard.viewBoxHeight),this._outlineRect.setAttribute("x",app.canvas.currentArtboard.viewBoxX),this._outlineRect.setAttribute("y",app.canvas.currentArtboard.viewBoxY)
}},{},SVGGElement);var r=t("g","bx-viewboxhud",n);return{get default(){return r}}
}),System.register("elements/bx-viewcontrols",[],function(){"use strict";System.get("elements/bx-checkbox"),System.get("elements/bx-icon"),System.get("elements/bx-select"),System.get("elements/bx-slider"),System.get("elements/bx-textinput");
var t=System.get("utils/dom").registerElement,e='\n<style>\n  @import url("stylesheets/controls.css");\n  @import url("stylesheets/bx-viewcontrols.css");\n</style>\n\n<section id="viewbox-section">\n  <h2>Viewbox</h2>\n\n  <bx-slider\n    id="viewbox-x-slider"\n    title="Viewbox X"\n    before="X: "\n    value="0"\n    precision="0">\n  </bx-slider>\n\n  <bx-slider\n    id="viewbox-y-slider"\n    title="Viewbox Y"\n    before="Y: "\n    value="0"\n    precision="0">\n  </bx-slider>\n\n  <bx-slider\n    id="viewbox-width-slider"\n    title="Viewbox Width"\n    before="Width: "\n    value="0"\n    precision="0">\n  </bx-slider>\n\n  <bx-slider\n    id="viewbox-height-slider"\n    title="Viewbox Height"\n    before="Height: "\n    value="0"\n    precision="0">\n  </bx-slider>\n</section>\n\n<section id="viewport-section">\n  <h2>Viewport</h2>\n\n  <div id="viewport-width-div" clas="viewport-div">\n    <bx-checkbox id="viewport-width-checkbox" label="Width"></bx-checkbox>\n\n    <div class="row-div">\n      <bx-slider\n        id="viewport-width-slider"\n        title="Viewport Width"\n        value="0"\n        min="0"\n        precision="0">\n      </bx-slider>\n\n      <bx-select id="viewport-width-unit-select" value="px">\n        <bx-selectitem value="px"  label="px"></bx-selectitem>\n        <bx-selectitem value="cm"  label="cm"></bx-selectitem>\n        <bx-selectitem value="mm"  label="mm"></bx-selectitem>\n        <bx-selectitem value="in"  label="in"></bx-selectitem>\n        <bx-selectitem value="pt"  label="pt"></bx-selectitem>\n        <bx-selectitem value="pc"  label="pc"></bx-selectitem>\n        <bx-selectitem value="ems" label="ems"></bx-selectitem>\n        <bx-selectitem value="exs" label="exs"></bx-selectitem>\n        <bx-selectitem value="%"   label="%"></bx-selectitem>\n      </bx-select>\n    </div>\n  </div>\n\n  <div id="viewport-height-div" class="viewport-div">\n    <bx-checkbox id="viewport-height-checkbox" label="Height"></bx-checkbox>\n\n    <div class="row-div">\n      <bx-slider\n        id="viewport-height-slider"\n        title="Viewport Height"\n        value="0"\n        min="0"\n        precision="0">\n      </bx-slider>\n\n      <bx-select id="viewport-height-unit-select" value="px">\n        <bx-selectitem value="px"  label="px"></bx-selectitem>\n        <bx-selectitem value="cm"  label="cm"></bx-selectitem>\n        <bx-selectitem value="mm"  label="mm"></bx-selectitem>\n        <bx-selectitem value="in"  label="in"></bx-selectitem>\n        <bx-selectitem value="pt"  label="pt"></bx-selectitem>\n        <bx-selectitem value="pc"  label="pc"></bx-selectitem>\n        <bx-selectitem value="ems" label="ems"></bx-selectitem>\n        <bx-selectitem value="exs" label="exs"></bx-selectitem>\n        <bx-selectitem value="%"   label="%"></bx-selectitem>\n      </bx-select>\n    </div>\n  </div>\n</section>\n\n<section id="aspect-ratio-section">\n  <h2>Aspect ratio</h2>\n\n  <bx-checkbox label="Preserve aspect ratio" id="preserve-aspect-ratio-checkbox"></bx-checkbox>\n  <bx-checkbox label="Slice" id="slice-checkbox"></bx-checkbox>\n\n  <div id="align-label">Align</div>\n\n  <bx-select id="align-select" value="xMidYMid">\n    <bx-selectitem value="xMinYMin" label="X min, Y min"></bx-selectitem>\n    <bx-selectitem value="xMidYMin" label="X mid, Y min"></bx-selectitem>\n    <bx-selectitem value="xMaxYMin" label="X max, Y min"></bx-selectitem>\n    <bx-selectitem value="xMinYMid" label="X min, Y mid"></bx-selectitem>\n    <bx-selectitem value="xMidYMid" label="X mid, Y mid"></bx-selectitem>\n    <bx-selectitem value="xMaxYMid" label="X max, Y mid"></bx-selectitem>\n    <bx-selectitem value="xMinYMax" label="X min, Y max"></bx-selectitem>\n    <bx-selectitem value="xMidYMax" label="X mid, Y max"></bx-selectitem>\n    <bx-selectitem value="xMaxYMax" label="X max, Y max"></bx-selectitem>\n  </bx-select>\n</section>\n',n=function(){$traceurRuntime.defaultSuperCall(this,i.prototype,arguments)
},i=n;$traceurRuntime.createClass(n,{createdCallback:function(){var t=this;this.createShadowRoot(),this.shadowRoot.innerHTML=e,this._viewBoxXSlider=this.shadowRoot.querySelector("#viewbox-x-slider"),this._viewBoxYSlider=this.shadowRoot.querySelector("#viewbox-y-slider"),this._viewBoxWidthSlider=this.shadowRoot.querySelector("#viewbox-width-slider"),this._viewBoxHeightSlider=this.shadowRoot.querySelector("#viewbox-height-slider"),this._viewportWidthSlider=this.shadowRoot.querySelector("#viewport-width-slider"),this._viewportWidthCheckbox=this.shadowRoot.querySelector("#viewport-width-checkbox"),this._viewportWidthUnitSelect=this.shadowRoot.querySelector("#viewport-width-unit-select"),this._viewportHeightSlider=this.shadowRoot.querySelector("#viewport-height-slider"),this._viewportHeightCheckbox=this.shadowRoot.querySelector("#viewport-height-checkbox"),this._viewportHeightUnitSelect=this.shadowRoot.querySelector("#viewport-height-unit-select"),this._preserveAspectRatioCheckbox=this.shadowRoot.querySelector("#preserve-aspect-ratio-checkbox"),this._sliceCheckbox=this.shadowRoot.querySelector("#slice-checkbox"),this._alignLabel=this.shadowRoot.querySelector("#align-label"),this._alignSelect=this.shadowRoot.querySelector("#align-select"),this._viewBoxXSlider.addEventListener("changestart",function(){return t._onViewBoxXSliderChangeStart()
}),this._viewBoxYSlider.addEventListener("changestart",function(){return t._onViewBoxYSliderChangeStart()
}),this._viewBoxWidthSlider.addEventListener("changestart",function(){return t._onViewBoxWidthSliderChangeStart()
}),this._viewBoxHeightSlider.addEventListener("changestart",function(){return t._onViewBoxHeightSliderChangeStart()
}),this._viewportWidthCheckbox.addEventListener("change",function(){return t._onViewportWidthCheckboxChange()
}),this._viewportWidthSlider.addEventListener("changestart",function(){return t._onViewportWidthSliderChangeStart()
}),this._viewportWidthUnitSelect.addEventListener("change",function(){return t._onViewportWidthUnitSelectChange()
}),this._viewportHeightCheckbox.addEventListener("change",function(){return t._onViewportHeightCheckboxChange()
}),this._viewportHeightSlider.addEventListener("changestart",function(){return t._onViewportHeightSliderChangeStart()
}),this._viewportHeightUnitSelect.addEventListener("change",function(){return t._onViewportHeightUnitSelectChange()
}),this._preserveAspectRatioCheckbox.addEventListener("change",function(){return t._onPreserveAspectRatioCheckboxChange()
}),this._sliceCheckbox.addEventListener("change",function(){return t._onSliceCheckboxChange()
}),this._alignSelect.addEventListener("change",function(){return t._onAlignSelectChange()
})},enabledCallback:function(){var t=this;this._isChangingSlider=!1,this._updateViewBoxSection(),this._updateViewportSection(),this._updateAspectRatioSection(),app.addEventListener("toolchange",this._toolChangeListener=function(){t._toggleViewboxHud()
}),app.canvas.addEventListener("contentmutation",this._contentMutationListener=function(e){t._onCanvasContentMutation(e.detail)
}),this._toggleViewboxHud()},disabledCallback:function(){app.removeEventListener("toolchange",this._toolChangeListener),app.canvas.removeEventListener("contentmutation",this._contentMutationListener),app.canvas.disableHud("viewbox-edit-hud")
},_onCanvasContentMutation:function(t){t.target!==app.canvas.currentArtboard||this._isChangingSlider||this._update()
},_onViewBoxXSliderChangeStart:function(){var t,e,n=this,i=this._viewBoxXSlider;app.canvas.undoManager.checkpoint("View Box"),this._isChangingSlider=!0,i.addEventListener("change",t=function(){app.canvas.currentArtboard.viewBoxX=i.value
}),i.addEventListener("changeend",e=function(){i.removeEventListener("change",t),i.removeEventListener("changeend",e),n._isChangingSlider=!1
})},_onViewBoxYSliderChangeStart:function(){var t,e,n=this,i=this._viewBoxYSlider;
app.canvas.undoManager.checkpoint("View Box"),this._isChangingSlider=!0,i.addEventListener("change",t=function(){app.canvas.currentArtboard.viewBoxY=i.value
}),i.addEventListener("changeend",e=function(){i.removeEventListener("change",t),i.removeEventListener("changeend",e),n._isChangingSlider=!1
})},_onViewBoxWidthSliderChangeStart:function(){var t,e,n=this,i=this._viewBoxWidthSlider;
app.canvas.undoManager.checkpoint("View Box"),this._isChangingSlider=!0,i.addEventListener("change",t=function(){app.canvas.currentArtboard.viewBoxWidth=i.value
}),i.addEventListener("changeend",e=function(){i.removeEventListener("change",t),i.removeEventListener("changeend",e),n._isChangingSlider=!1
})},_onViewBoxHeightSliderChangeStart:function(){var t,e,n=this,i=this._viewBoxHeightSlider;
app.canvas.undoManager.checkpoint("View Box"),this._isChangingSlider=!0,i.addEventListener("change",t=function(){app.canvas.currentArtboard.viewBoxHeight=i.value
}),i.addEventListener("changeend",e=function(){i.removeEventListener("change",t),i.removeEventListener("changeend",e),n._isChangingSlider=!1
})},_onViewportWidthCheckboxChange:function(){app.canvas.undoManager.checkpoint("Viewport width"),this._viewportWidthCheckbox.checked===!0?(app.canvas.currentArtboard.viewportWidth=500,app.canvas.currentArtboard.viewportWidthUnit="px"):(app.canvas.currentArtboard.viewportWidth=null,app.canvas.currentArtboard.viewportWidthUnit=null)
},_onViewportWidthSliderChangeStart:function(){var t,e,n=this,i=this._viewportWidthSlider;
app.canvas.undoManager.checkpoint("Viewport width"),this._isChangingSlider=!0,i.addEventListener("change",t=function(){app.canvas.currentArtboard.viewportWidth=i.value
}),i.addEventListener("changeend",e=function(){i.removeEventListener("change",t),i.removeEventListener("changeend",e),n._isChangingSlider=!1
})},_onViewportWidthUnitSelectChange:function(){app.canvas.undoManager.checkpoint("Viewport width unit"),app.canvas.currentArtboard.viewportWidthUnit=this._viewportWidthUnitSelect.value
},_onViewportHeightCheckboxChange:function(){app.canvas.undoManager.checkpoint("Viewport height"),this._viewportHeightCheckbox.checked===!0?(app.canvas.currentArtboard.viewportHeight=500,app.canvas.currentArtboard.viewportHeightUnit="px"):(app.canvas.currentArtboard.viewportHeight=null,app.canvas.currentArtboard.viewportHeightUnit=null)
},_onViewportHeightSliderChangeStart:function(){var t,e,n=this,i=this._viewportHeightSlider;
app.canvas.undoManager.checkpoint("Viewport height"),this._isChangingSlider=!0,i.addEventListener("change",t=function(){app.canvas.currentArtboard.viewportHeight=i.value
}),i.addEventListener("changeend",e=function(){i.removeEventListener("change",t),i.removeEventListener("changeend",e),n._isChangingSlider=!1
})},_onViewportHeightUnitSelectChange:function(){app.canvas.undoManager.checkpoint("Viewport height unit"),app.canvas.currentArtboard.viewportHeightUnit=this._viewportHeightUnitSelect.value
},_onPreserveAspectRatioCheckboxChange:function(){this._preserveAspectRatioCheckbox.checked?(app.canvas.currentArtboard.slice=!1,app.canvas.currentArtboard.align="xMidYMid"):(app.canvas.currentArtboard.slice=!1,app.canvas.currentArtboard.align="none")
},_onSliceCheckboxChange:function(){app.canvas.currentArtboard.slice=this._sliceCheckbox.checked
},_onAlignSelectChange:function(){app.canvas.currentArtboard.align=this._alignSelect.value
},_update:function(){this._updateViewBoxSection(),this._updateViewportSection(),this._updateAspectRatioSection()
},_updateViewBoxSection:function(){this._viewBoxXSlider.value=app.canvas.currentArtboard.viewBoxX,this._viewBoxYSlider.value=app.canvas.currentArtboard.viewBoxY,this._viewBoxWidthSlider.value=app.canvas.currentArtboard.viewBoxWidth,this._viewBoxHeightSlider.value=app.canvas.currentArtboard.viewBoxHeight
},_updateViewportSection:function(){null===app.canvas.currentArtboard.viewportWidth?(this._viewportWidthSlider.disabled=!0,this._viewportWidthSlider.value=0,this._viewportWidthCheckbox.checked=!1,this._viewportWidthUnitSelect.disabled=!0,this._viewportWidthUnitSelect.value="px"):(this._viewportWidthSlider.disabled=!1,this._viewportWidthSlider.value=app.canvas.currentArtboard.viewportWidth,this._viewportWidthCheckbox.checked=!0,this._viewportWidthUnitSelect.disabled=!1,this._viewportWidthUnitSelect.value=app.canvas.currentArtboard.viewportWidthUnit),null===app.canvas.currentArtboard.viewportHeight?(this._viewportHeightSlider.disabled=!0,this._viewportHeightSlider.value=0,this._viewportHeightCheckbox.checked=!1,this._viewportHeightUnitSelect.disabled=!0,this._viewportHeightUnitSelect.value="px"):(this._viewportHeightSlider.disabled=!1,this._viewportHeightSlider.value=app.canvas.currentArtboard.viewportHeight,this._viewportHeightCheckbox.checked=!0,this._viewportHeightUnitSelect.disabled=!1,this._viewportHeightUnitSelect.value=app.canvas.currentArtboard.viewportHeightUnit)
},_updateAspectRatioSection:function(){"none"===app.canvas.currentArtboard.align?(this._preserveAspectRatioCheckbox.checked=!1,this._sliceCheckbox.checked=!1,this._sliceCheckbox.disabled=!0,this._alignLabel.disabled=!0,this._alignSelect.value="xMidYMid",this._alignSelect.disabled=!0):(this._preserveAspectRatioCheckbox.checked=!0,this._sliceCheckbox.checked=app.canvas.currentArtboard.slice,this._sliceCheckbox.disabled=!1,this._alignLabel.disabled=!1,this._alignSelect.value=app.canvas.currentArtboard.align,this._alignSelect.disabled=!1)
},_toggleViewboxHud:function(){"transform-tool"===app.currentTool.id||"edit-tool"===app.currentTool.id?app.canvas.enableHud("viewbox-edit-hud"):app.canvas.disableHud("viewbox-edit-hud")
}},{},HTMLElement);var r=t("bx-viewcontrols",n);return{get default(){return r}}}),System.register("libs/clipper",[],function(){"use strict";
!function(){function t(t,e,n){nn.biginteger_used=1,null!=t&&("number"==typeof t&&"undefined"==typeof e?this.fromInt(t):"number"==typeof t?this.fromNumber(t,e,n):null==e&&"string"!=typeof t?this.fromString(t,256):this.fromString(t,e))
}function e(){return new t(null)}function n(t,e,n,i,r,o){for(;--o>=0;){var s=e*this[t++]+n[i]+r;
r=Math.floor(s/67108864),n[i++]=67108863&s}return r}function i(t,e,n,i,r,o){for(var s=32767&e,a=e>>15;--o>=0;){var l=32767&this[t],u=this[t++]>>15,c=a*l+u*s;
l=s*l+((32767&c)<<15)+n[i]+(1073741823&r),r=(l>>>30)+(c>>>15)+a*u+(r>>>30),n[i++]=1073741823&l
}return r}function r(t,e,n,i,r,o){for(var s=16383&e,a=e>>14;--o>=0;){var l=16383&this[t],u=this[t++]>>14,c=a*l+u*s;
l=s*l+((16383&c)<<14)+n[i]+r,r=(l>>28)+(c>>14)+a*u,n[i++]=268435455&l}return r}function o(t){return mn.charAt(t)
}function s(t,e){var n=fn[t.charCodeAt(e)];return null==n?-1:n}function a(t){for(var e=this.t-1;e>=0;--e)t[e]=this[e];
t.t=this.t,t.s=this.s}function l(t){this.t=1,this.s=0>t?-1:0,t>0?this[0]=t:-1>t?this[0]=t+this.DV:this.t=0
}function u(t){var n=e();return n.fromInt(t),n}function c(e,n){var i;if(16==n)i=4;
else if(8==n)i=3;else if(256==n)i=8;else if(2==n)i=1;else if(32==n)i=5;else{if(4!=n)return void this.fromRadix(e,n);
i=2}this.t=0,this.s=0;for(var r=e.length,o=!1,a=0;--r>=0;){var l=8==i?255&e[r]:s(e,r);
0>l?"-"==e.charAt(r)&&(o=!0):(o=!1,0==a?this[this.t++]=l:a+i>this.DB?(this[this.t-1]|=(l&(1<<this.DB-a)-1)<<a,this[this.t++]=l>>this.DB-a):this[this.t-1]|=l<<a,a+=i,a>=this.DB&&(a-=this.DB))
}8==i&&0!=(128&e[0])&&(this.s=-1,a>0&&(this[this.t-1]|=(1<<this.DB-a)-1<<a)),this.clamp(),o&&t.ZERO.subTo(this,this)
}function h(){for(var t=this.s&this.DM;this.t>0&&this[this.t-1]==t;)--this.t}function d(t){if(this.s<0)return"-"+this.negate().toString(t);
var e;if(16==t)e=4;else if(8==t)e=3;else if(2==t)e=1;else if(32==t)e=5;else{if(4!=t)return this.toRadix(t);
e=2}var n,i=(1<<e)-1,r=!1,s="",a=this.t,l=this.DB-a*this.DB%e;if(a-->0)for(l<this.DB&&(n=this[a]>>l)>0&&(r=!0,s=o(n));a>=0;)e>l?(n=(this[a]&(1<<l)-1)<<e-l,n|=this[--a]>>(l+=this.DB-e)):(n=this[a]>>(l-=e)&i,0>=l&&(l+=this.DB,--a)),n>0&&(r=!0),r&&(s+=o(n));
return r?s:"0"}function p(){var n=e();return t.ZERO.subTo(this,n),n}function m(){return this.s<0?this.negate():this
}function f(t){var e=this.s-t.s;if(0!=e)return e;var n=this.t;if(e=n-t.t,0!=e)return this.s<0?-e:e;
for(;--n>=0;)if(0!=(e=this[n]-t[n]))return e;return 0}function g(t){var e,n=1;return 0!=(e=t>>>16)&&(t=e,n+=16),0!=(e=t>>8)&&(t=e,n+=8),0!=(e=t>>4)&&(t=e,n+=4),0!=(e=t>>2)&&(t=e,n+=2),0!=(e=t>>1)&&(t=e,n+=1),n
}function v(){return this.t<=0?0:this.DB*(this.t-1)+g(this[this.t-1]^this.s&this.DM)
}function b(t,e){var n;for(n=this.t-1;n>=0;--n)e[n+t]=this[n];for(n=t-1;n>=0;--n)e[n]=0;
e.t=this.t+t,e.s=this.s}function y(t,e){for(var n=t;n<this.t;++n)e[n-t]=this[n];e.t=Math.max(this.t-t,0),e.s=this.s
}function x(t,e){var n,i=t%this.DB,r=this.DB-i,o=(1<<r)-1,s=Math.floor(t/this.DB),a=this.s<<i&this.DM;
for(n=this.t-1;n>=0;--n)e[n+s+1]=this[n]>>r|a,a=(this[n]&o)<<i;for(n=s-1;n>=0;--n)e[n]=0;
e[s]=a,e.t=this.t+s+1,e.s=this.s,e.clamp()}function _(t,e){e.s=this.s;var n=Math.floor(t/this.DB);
if(n>=this.t)return void(e.t=0);var i=t%this.DB,r=this.DB-i,o=(1<<i)-1;e[0]=this[n]>>i;
for(var s=n+1;s<this.t;++s)e[s-n-1]|=(this[s]&o)<<r,e[s-n]=this[s]>>i;i>0&&(e[this.t-n-1]|=(this.s&o)<<r),e.t=this.t-n,e.clamp()
}function S(t,e){for(var n=0,i=0,r=Math.min(t.t,this.t);r>n;)i+=this[n]-t[n],e[n++]=i&this.DM,i>>=this.DB;
if(t.t<this.t){for(i-=t.s;n<this.t;)i+=this[n],e[n++]=i&this.DM,i>>=this.DB;i+=this.s
}else{for(i+=this.s;n<t.t;)i-=t[n],e[n++]=i&this.DM,i>>=this.DB;i-=t.s}e.s=0>i?-1:0,-1>i?e[n++]=this.DV+i:i>0&&(e[n++]=i),e.t=n,e.clamp()
}function w(e,n){var i=this.abs(),r=e.abs(),o=i.t;for(n.t=o+r.t;--o>=0;)n[o]=0;for(o=0;o<r.t;++o)n[o+i.t]=i.am(0,r[o],n,o,0,i.t);
n.s=0,n.clamp(),this.s!=e.s&&t.ZERO.subTo(n,n)}function C(t){for(var e=this.abs(),n=t.t=2*e.t;--n>=0;)t[n]=0;
for(n=0;n<e.t-1;++n){var i=e.am(n,e[n],t,2*n,0,1);(t[n+e.t]+=e.am(n+1,2*e[n],t,2*n+1,i,e.t-n-1))>=e.DV&&(t[n+e.t]-=e.DV,t[n+e.t+1]=1)
}t.t>0&&(t[t.t-1]+=e.am(n,e[n],t,2*n,0,1)),t.s=0,t.clamp()}function E(n,i,r){var o=n.abs();
if(!(o.t<=0)){var s=this.abs();if(s.t<o.t)return null!=i&&i.fromInt(0),void(null!=r&&this.copyTo(r));
null==r&&(r=e());var a=e(),l=this.s,u=n.s,c=this.DB-g(o[o.t-1]);c>0?(o.lShiftTo(c,a),s.lShiftTo(c,r)):(o.copyTo(a),s.copyTo(r));
var h=a.t,d=a[h-1];if(0!=d){var p=d*(1<<this.F1)+(h>1?a[h-2]>>this.F2:0),m=this.FV/p,f=(1<<this.F1)/p,v=1<<this.F2,b=r.t,y=b-h,x=null==i?e():i;
for(a.dlShiftTo(y,x),r.compareTo(x)>=0&&(r[r.t++]=1,r.subTo(x,r)),t.ONE.dlShiftTo(h,x),x.subTo(a,a);a.t<h;)a[a.t++]=0;
for(;--y>=0;){var _=r[--b]==d?this.DM:Math.floor(r[b]*m+(r[b-1]+v)*f);if((r[b]+=a.am(0,_,r,y,0,h))<_)for(a.dlShiftTo(y,x),r.subTo(x,r);r[b]<--_;)r.subTo(x,r)
}null!=i&&(r.drShiftTo(h,i),l!=u&&t.ZERO.subTo(i,i)),r.t=h,r.clamp(),c>0&&r.rShiftTo(c,r),0>l&&t.ZERO.subTo(r,r)
}}}function P(n){var i=e();return this.abs().divRemTo(n,null,i),this.s<0&&i.compareTo(t.ZERO)>0&&n.subTo(i,i),i
}function L(t){this.m=t}function T(t){return t.s<0||t.compareTo(this.m)>=0?t.mod(this.m):t
}function A(t){return t}function k(t){t.divRemTo(this.m,null,t)}function O(t,e,n){t.multiplyTo(e,n),this.reduce(n)
}function M(t,e){t.squareTo(e),this.reduce(e)}function j(){if(this.t<1)return 0;var t=this[0];
if(0==(1&t))return 0;var e=3&t;return e=e*(2-(15&t)*e)&15,e=e*(2-(255&t)*e)&255,e=e*(2-((65535&t)*e&65535))&65535,e=e*(2-t*e%this.DV)%this.DV,e>0?this.DV-e:-e
}function R(t){this.m=t,this.mp=t.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<t.DB-15)-1,this.mt2=2*t.t
}function I(n){var i=e();return n.abs().dlShiftTo(this.m.t,i),i.divRemTo(this.m,null,i),n.s<0&&i.compareTo(t.ZERO)>0&&this.m.subTo(i,i),i
}function B(t){var n=e();return t.copyTo(n),this.reduce(n),n}function N(t){for(;t.t<=this.mt2;)t[t.t++]=0;
for(var e=0;e<this.m.t;++e){var n=32767&t[e],i=n*this.mpl+((n*this.mph+(t[e]>>15)*this.mpl&this.um)<<15)&t.DM;
for(n=e+this.m.t,t[n]+=this.m.am(0,i,t,e,0,this.m.t);t[n]>=t.DV;)t[n]-=t.DV,t[++n]++
}t.clamp(),t.drShiftTo(this.m.t,t),t.compareTo(this.m)>=0&&t.subTo(this.m,t)}function V(t,e){t.squareTo(e),this.reduce(e)
}function D(t,e,n){t.multiplyTo(e,n),this.reduce(n)}function G(){return 0==(this.t>0?1&this[0]:this.s)
}function X(n,i){if(n>4294967295||1>n)return t.ONE;var r=e(),o=e(),s=i.convert(this),a=g(n)-1;
for(s.copyTo(r);--a>=0;)if(i.sqrTo(r,o),(n&1<<a)>0)i.mulTo(o,s,r);else{var l=r;r=o,o=l
}return i.revert(r)}function Y(t,e){var n;return n=256>t||e.isEven()?new L(e):new R(e),this.exp(t,n)
}function F(){var t=e();return this.copyTo(t),t}function H(){if(this.s<0){if(1==this.t)return this[0]-this.DV;
if(0==this.t)return-1}else{if(1==this.t)return this[0];if(0==this.t)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]
}function q(){return 0==this.t?this.s:this[0]<<24>>24}function z(){return 0==this.t?this.s:this[0]<<16>>16
}function U(t){return Math.floor(Math.LN2*this.DB/Math.log(t))}function W(){return this.s<0?-1:this.t<=0||1==this.t&&this[0]<=0?0:1
}function $(t){if(null==t&&(t=10),0==this.signum()||2>t||t>36)return"0";var n=this.chunkSize(t),i=Math.pow(t,n),r=u(i),o=e(),s=e(),a="";
for(this.divRemTo(r,o,s);o.signum()>0;)a=(i+s.intValue()).toString(t).substr(1)+a,o.divRemTo(r,o,s);
return s.intValue().toString(t)+a}function Z(e,n){this.fromInt(0),null==n&&(n=10);
for(var i=this.chunkSize(n),r=Math.pow(n,i),o=!1,a=0,l=0,u=0;u<e.length;++u){var c=s(e,u);
0>c?"-"==e.charAt(u)&&0==this.signum()&&(o=!0):(l=n*l+c,++a>=i&&(this.dMultiply(r),this.dAddOffset(l,0),a=0,l=0))
}a>0&&(this.dMultiply(Math.pow(n,a)),this.dAddOffset(l,0)),o&&t.ZERO.subTo(this,this)
}function K(e,n,i){if("number"==typeof n)if(2>e)this.fromInt(1);else for(this.fromNumber(e,i),this.testBit(e-1)||this.bitwiseTo(t.ONE.shiftLeft(e-1),oe,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(n);)this.dAddOffset(2,0),this.bitLength()>e&&this.subTo(t.ONE.shiftLeft(e-1),this);
else{var r=new Array,o=7&e;r.length=(e>>3)+1,n.nextBytes(r),o>0?r[0]&=(1<<o)-1:r[0]=0,this.fromString(r,256)
}}function J(){var t=this.t,e=new Array;e[0]=this.s;var n,i=this.DB-t*this.DB%8,r=0;
if(t-->0)for(i<this.DB&&(n=this[t]>>i)!=(this.s&this.DM)>>i&&(e[r++]=n|this.s<<this.DB-i);t>=0;)8>i?(n=(this[t]&(1<<i)-1)<<8-i,n|=this[--t]>>(i+=this.DB-8)):(n=this[t]>>(i-=8)&255,0>=i&&(i+=this.DB,--t)),0!=(128&n)&&(n|=-256),0==r&&(128&this.s)!=(128&n)&&++r,(r>0||n!=this.s)&&(e[r++]=n);
return e}function Q(t){return 0==this.compareTo(t)}function te(t){return this.compareTo(t)<0?this:t
}function ee(t){return this.compareTo(t)>0?this:t}function ne(t,e,n){var i,r,o=Math.min(t.t,this.t);
for(i=0;o>i;++i)n[i]=e(this[i],t[i]);if(t.t<this.t){for(r=t.s&this.DM,i=o;i<this.t;++i)n[i]=e(this[i],r);
n.t=this.t}else{for(r=this.s&this.DM,i=o;i<t.t;++i)n[i]=e(r,t[i]);n.t=t.t}n.s=e(this.s,t.s),n.clamp()
}function ie(t,e){return t&e}function re(t){var n=e();return this.bitwiseTo(t,ie,n),n
}function oe(t,e){return t|e}function se(t){var n=e();return this.bitwiseTo(t,oe,n),n
}function ae(t,e){return t^e}function le(t){var n=e();return this.bitwiseTo(t,ae,n),n
}function ue(t,e){return t&~e}function ce(t){var n=e();return this.bitwiseTo(t,ue,n),n
}function he(){for(var t=e(),n=0;n<this.t;++n)t[n]=this.DM&~this[n];return t.t=this.t,t.s=~this.s,t
}function de(t){var n=e();return 0>t?this.rShiftTo(-t,n):this.lShiftTo(t,n),n}function pe(t){var n=e();
return 0>t?this.lShiftTo(-t,n):this.rShiftTo(t,n),n}function me(t){if(0==t)return-1;
var e=0;return 0==(65535&t)&&(t>>=16,e+=16),0==(255&t)&&(t>>=8,e+=8),0==(15&t)&&(t>>=4,e+=4),0==(3&t)&&(t>>=2,e+=2),0==(1&t)&&++e,e
}function fe(){for(var t=0;t<this.t;++t)if(0!=this[t])return t*this.DB+me(this[t]);
return this.s<0?this.t*this.DB:-1}function ge(t){for(var e=0;0!=t;)t&=t-1,++e;return e
}function ve(){for(var t=0,e=this.s&this.DM,n=0;n<this.t;++n)t+=ge(this[n]^e);return t
}function be(t){var e=Math.floor(t/this.DB);return e>=this.t?0!=this.s:0!=(this[e]&1<<t%this.DB)
}function ye(e,n){var i=t.ONE.shiftLeft(e);return this.bitwiseTo(i,n,i),i}function xe(t){return this.changeBit(t,oe)
}function _e(t){return this.changeBit(t,ue)}function Se(t){return this.changeBit(t,ae)
}function we(t,e){for(var n=0,i=0,r=Math.min(t.t,this.t);r>n;)i+=this[n]+t[n],e[n++]=i&this.DM,i>>=this.DB;
if(t.t<this.t){for(i+=t.s;n<this.t;)i+=this[n],e[n++]=i&this.DM,i>>=this.DB;i+=this.s
}else{for(i+=this.s;n<t.t;)i+=t[n],e[n++]=i&this.DM,i>>=this.DB;i+=t.s}e.s=0>i?-1:0,i>0?e[n++]=i:-1>i&&(e[n++]=this.DV+i),e.t=n,e.clamp()
}function Ce(t){var n=e();return this.addTo(t,n),n}function Ee(t){var n=e();return this.subTo(t,n),n
}function Pe(t){var n=e();return this.multiplyTo(t,n),n}function Le(){var t=e();return this.squareTo(t),t
}function Te(t){var n=e();return this.divRemTo(t,n,null),n}function Ae(t){var n=e();
return this.divRemTo(t,null,n),n}function ke(t){var n=e(),i=e();return this.divRemTo(t,n,i),new Array(n,i)
}function Oe(t){this[this.t]=this.am(0,t-1,this,0,0,this.t),++this.t,this.clamp()
}function Me(t,e){if(0!=t){for(;this.t<=e;)this[this.t++]=0;for(this[e]+=t;this[e]>=this.DV;)this[e]-=this.DV,++e>=this.t&&(this[this.t++]=0),++this[e]
}}function je(){}function Re(t){return t}function Ie(t,e,n){t.multiplyTo(e,n)}function Be(t,e){t.squareTo(e)
}function Ne(t){return this.exp(t,new je)}function Ve(t,e,n){var i=Math.min(this.t+t.t,e);
for(n.s=0,n.t=i;i>0;)n[--i]=0;var r;for(r=n.t-this.t;r>i;++i)n[i+this.t]=this.am(0,t[i],n,i,0,this.t);
for(r=Math.min(t.t,e);r>i;++i)this.am(0,t[i],n,i,0,e-i);n.clamp()}function De(t,e,n){--e;
var i=n.t=this.t+t.t-e;for(n.s=0;--i>=0;)n[i]=0;for(i=Math.max(e-this.t,0);i<t.t;++i)n[this.t+i-e]=this.am(e-i,t[i],n,0,0,this.t+i-e);
n.clamp(),n.drShiftTo(1,n)}function Ge(n){this.r2=e(),this.q3=e(),t.ONE.dlShiftTo(2*n.t,this.r2),this.mu=this.r2.divide(n),this.m=n
}function Xe(t){if(t.s<0||t.t>2*this.m.t)return t.mod(this.m);if(t.compareTo(this.m)<0)return t;
var n=e();return t.copyTo(n),this.reduce(n),n}function Ye(t){return t}function Fe(t){for(t.drShiftTo(this.m.t-1,this.r2),t.t>this.m.t+1&&(t.t=this.m.t+1,t.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);t.compareTo(this.r2)<0;)t.dAddOffset(1,this.m.t+1);
for(t.subTo(this.r2,t);t.compareTo(this.m)>=0;)t.subTo(this.m,t)}function He(t,e){t.squareTo(e),this.reduce(e)
}function qe(t,e,n){t.multiplyTo(e,n),this.reduce(n)}function ze(t,n){var i,r,o=t.bitLength(),s=u(1);
if(0>=o)return s;i=18>o?1:48>o?3:144>o?4:768>o?5:6,r=8>o?new L(n):n.isEven()?new Ge(n):new R(n);
var a=new Array,l=3,c=i-1,h=(1<<i)-1;if(a[1]=r.convert(this),i>1){var d=e();for(r.sqrTo(a[1],d);h>=l;)a[l]=e(),r.mulTo(d,a[l-2],a[l]),l+=2
}var p,m,f=t.t-1,v=!0,b=e();for(o=g(t[f])-1;f>=0;){for(o>=c?p=t[f]>>o-c&h:(p=(t[f]&(1<<o+1)-1)<<c-o,f>0&&(p|=t[f-1]>>this.DB+o-c)),l=i;0==(1&p);)p>>=1,--l;
if((o-=l)<0&&(o+=this.DB,--f),v)a[p].copyTo(s),v=!1;else{for(;l>1;)r.sqrTo(s,b),r.sqrTo(b,s),l-=2;
l>0?r.sqrTo(s,b):(m=s,s=b,b=m),r.mulTo(b,a[p],s)}for(;f>=0&&0==(t[f]&1<<o);)r.sqrTo(s,b),m=s,s=b,b=m,--o<0&&(o=this.DB-1,--f)
}return r.revert(s)}function Ue(t){var e=this.s<0?this.negate():this.clone(),n=t.s<0?t.negate():t.clone();
if(e.compareTo(n)<0){var i=e;e=n,n=i}var r=e.getLowestSetBit(),o=n.getLowestSetBit();
if(0>o)return e;for(o>r&&(o=r),o>0&&(e.rShiftTo(o,e),n.rShiftTo(o,n));e.signum()>0;)(r=e.getLowestSetBit())>0&&e.rShiftTo(r,e),(r=n.getLowestSetBit())>0&&n.rShiftTo(r,n),e.compareTo(n)>=0?(e.subTo(n,e),e.rShiftTo(1,e)):(n.subTo(e,n),n.rShiftTo(1,n));
return o>0&&n.lShiftTo(o,n),n}function We(t){if(0>=t)return 0;var e=this.DV%t,n=this.s<0?t-1:0;
if(this.t>0)if(0==e)n=this[0]%t;else for(var i=this.t-1;i>=0;--i)n=(e*n+this[i])%t;
return n}function $e(e){var n=e.isEven();if(this.isEven()&&n||0==e.signum())return t.ZERO;
for(var i=e.clone(),r=this.clone(),o=u(1),s=u(0),a=u(0),l=u(1);0!=i.signum();){for(;i.isEven();)i.rShiftTo(1,i),n?(o.isEven()&&s.isEven()||(o.addTo(this,o),s.subTo(e,s)),o.rShiftTo(1,o)):s.isEven()||s.subTo(e,s),s.rShiftTo(1,s);
for(;r.isEven();)r.rShiftTo(1,r),n?(a.isEven()&&l.isEven()||(a.addTo(this,a),l.subTo(e,l)),a.rShiftTo(1,a)):l.isEven()||l.subTo(e,l),l.rShiftTo(1,l);
i.compareTo(r)>=0?(i.subTo(r,i),n&&o.subTo(a,o),s.subTo(l,s)):(r.subTo(i,r),n&&a.subTo(o,a),l.subTo(s,l))
}return 0!=r.compareTo(t.ONE)?t.ZERO:l.compareTo(e)>=0?l.subtract(e):l.signum()<0?(l.addTo(e,l),l.signum()<0?l.add(e):l):l
}function Ze(t){var e,n=this.abs();if(1==n.t&&n[0]<=gn[gn.length-1]){for(e=0;e<gn.length;++e)if(n[0]==gn[e])return!0;
return!1}if(n.isEven())return!1;for(e=1;e<gn.length;){for(var i=gn[e],r=e+1;r<gn.length&&vn>i;)i*=gn[r++];
for(i=n.modInt(i);r>e;)if(i%gn[e++]==0)return!1}return n.millerRabin(t)}function Ke(n){var i=this.subtract(t.ONE),r=i.getLowestSetBit();
if(0>=r)return!1;var o=i.shiftRight(r);n=n+1>>1,n>gn.length&&(n=gn.length);for(var s=e(),a=0;n>a;++a){s.fromInt(gn[Math.floor(Math.random()*gn.length)]);
var l=s.modPow(o,this);if(0!=l.compareTo(t.ONE)&&0!=l.compareTo(i)){for(var u=1;u++<r&&0!=l.compareTo(i);)if(l=l.modPowInt(2,this),0==l.compareTo(t.ONE))return!1;
if(0!=l.compareTo(i))return!1}}return!0}var Je=!1,Qe=!1,tn=!0,en=!1,nn={},rn=!1;"undefined"!=typeof module&&module.exports?(module.exports=nn,rn=!0):"undefined"!=typeof document?window.ClipperLib=nn:self.ClipperLib=nn;
var on;if(rn){var sn="chrome";on="Netscape"}else{var sn=navigator.userAgent.toString().toLowerCase();
on=navigator.appName}var an={};an.chrome=-1!=sn.indexOf("chrome")&&-1==sn.indexOf("chromium")?1:0,an.chromium=-1!=sn.indexOf("chromium")?1:0,an.safari=-1!=sn.indexOf("safari")&&-1==sn.indexOf("chrome")&&-1==sn.indexOf("chromium")?1:0,an.firefox=-1!=sn.indexOf("firefox")?1:0,an.firefox17=-1!=sn.indexOf("firefox/17")?1:0,an.firefox15=-1!=sn.indexOf("firefox/15")?1:0,an.firefox3=-1!=sn.indexOf("firefox/3")?1:0,an.opera=-1!=sn.indexOf("opera")?1:0,an.msie10=-1!=sn.indexOf("msie 10")?1:0,an.msie9=-1!=sn.indexOf("msie 9")?1:0,an.msie8=-1!=sn.indexOf("msie 8")?1:0,an.msie7=-1!=sn.indexOf("msie 7")?1:0,an.msie=-1!=sn.indexOf("msie ")?1:0,nn.biginteger_used=null;
var ln,un=0xdeadbeefcafe,cn=15715070==(16777215&un);cn&&"Microsoft Internet Explorer"==on?(t.prototype.am=i,ln=30):cn&&"Netscape"!=on?(t.prototype.am=n,ln=26):(t.prototype.am=r,ln=28),t.prototype.DB=ln,t.prototype.DM=(1<<ln)-1,t.prototype.DV=1<<ln;
var hn=52;t.prototype.FV=Math.pow(2,hn),t.prototype.F1=hn-ln,t.prototype.F2=2*ln-hn;
var dn,pn,mn="0123456789abcdefghijklmnopqrstuvwxyz",fn=new Array;for(dn="0".charCodeAt(0),pn=0;9>=pn;++pn)fn[dn++]=pn;
for(dn="a".charCodeAt(0),pn=10;36>pn;++pn)fn[dn++]=pn;for(dn="A".charCodeAt(0),pn=10;36>pn;++pn)fn[dn++]=pn;
L.prototype.convert=T,L.prototype.revert=A,L.prototype.reduce=k,L.prototype.mulTo=O,L.prototype.sqrTo=M,R.prototype.convert=I,R.prototype.revert=B,R.prototype.reduce=N,R.prototype.mulTo=D,R.prototype.sqrTo=V,t.prototype.copyTo=a,t.prototype.fromInt=l,t.prototype.fromString=c,t.prototype.clamp=h,t.prototype.dlShiftTo=b,t.prototype.drShiftTo=y,t.prototype.lShiftTo=x,t.prototype.rShiftTo=_,t.prototype.subTo=S,t.prototype.multiplyTo=w,t.prototype.squareTo=C,t.prototype.divRemTo=E,t.prototype.invDigit=j,t.prototype.isEven=G,t.prototype.exp=X,t.prototype.toString=d,t.prototype.negate=p,t.prototype.abs=m,t.prototype.compareTo=f,t.prototype.bitLength=v,t.prototype.mod=P,t.prototype.modPowInt=Y,t.ZERO=u(0),t.ONE=u(1),je.prototype.convert=Re,je.prototype.revert=Re,je.prototype.mulTo=Ie,je.prototype.sqrTo=Be,Ge.prototype.convert=Xe,Ge.prototype.revert=Ye,Ge.prototype.reduce=Fe,Ge.prototype.mulTo=qe,Ge.prototype.sqrTo=He;
var gn=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],vn=(1<<26)/gn[gn.length-1];
t.prototype.chunkSize=U,t.prototype.toRadix=$,t.prototype.fromRadix=Z,t.prototype.fromNumber=K,t.prototype.bitwiseTo=ne,t.prototype.changeBit=ye,t.prototype.addTo=we,t.prototype.dMultiply=Oe,t.prototype.dAddOffset=Me,t.prototype.multiplyLowerTo=Ve,t.prototype.multiplyUpperTo=De,t.prototype.modInt=We,t.prototype.millerRabin=Ke,t.prototype.clone=F,t.prototype.intValue=H,t.prototype.byteValue=q,t.prototype.shortValue=z,t.prototype.signum=W,t.prototype.toByteArray=J,t.prototype.equals=Q,t.prototype.min=te,t.prototype.max=ee,t.prototype.and=re,t.prototype.or=se,t.prototype.xor=le,t.prototype.andNot=ce,t.prototype.not=he,t.prototype.shiftLeft=de,t.prototype.shiftRight=pe,t.prototype.getLowestSetBit=fe,t.prototype.bitCount=ve,t.prototype.testBit=be,t.prototype.setBit=xe,t.prototype.clearBit=_e,t.prototype.flipBit=Se,t.prototype.add=Ce,t.prototype.subtract=Ee,t.prototype.multiply=Pe,t.prototype.divide=Te,t.prototype.remainder=Ae,t.prototype.divideAndRemainder=ke,t.prototype.modPow=ze,t.prototype.modInverse=$e,t.prototype.pow=Ne,t.prototype.gcd=Ue,t.prototype.isProbablePrime=Ze,t.prototype.square=Le;
var bn=t;if(bn.prototype.IsNegative=function(){return-1==this.compareTo(bn.ZERO)?!0:!1
},bn.op_Equality=function(t,e){return 0==t.compareTo(e)?!0:!1},bn.op_Inequality=function(t,e){return 0!=t.compareTo(e)?!0:!1
},bn.op_GreaterThan=function(t,e){return t.compareTo(e)>0?!0:!1},bn.op_LessThan=function(t,e){return t.compareTo(e)<0?!0:!1
},bn.op_Addition=function(t,e){return new bn(t).add(new bn(e))},bn.op_Subtraction=function(t,e){return new bn(t).subtract(new bn(e))
},bn.Int128Mul=function(t,e){return new bn(t).multiply(new bn(e))},bn.op_Division=function(t,e){return t.divide(e)
},bn.prototype.ToDouble=function(){return parseFloat(this.toString())},"undefined"==typeof yn)var yn=function(t,e){var n;
if("undefined"==typeof Object.getOwnPropertyNames){for(n in e.prototype)("undefined"==typeof t.prototype[n]||t.prototype[n]==Object.prototype[n])&&(t.prototype[n]=e.prototype[n]);
for(n in e)"undefined"==typeof t[n]&&(t[n]=e[n]);t.$baseCtor=e}else{for(var i=Object.getOwnPropertyNames(e.prototype),r=0;r<i.length;r++)"undefined"==typeof Object.getOwnPropertyDescriptor(t.prototype,i[r])&&Object.defineProperty(t.prototype,i[r],Object.getOwnPropertyDescriptor(e.prototype,i[r]));
for(n in e)"undefined"==typeof t[n]&&(t[n]=e[n]);t.$baseCtor=e}};nn.Path=function(){return[]
},nn.Paths=function(){return[]},nn.DoublePoint=function(){var t=arguments;this.X=0,this.Y=0,1==t.length?(this.X=t[0].X,this.Y=t[0].Y):2==t.length&&(this.X=t[0],this.Y=t[1])
},nn.DoublePoint0=function(){this.X=0,this.Y=0},nn.DoublePoint1=function(t){this.X=t.X,this.Y=t.Y
},nn.DoublePoint2=function(t,e){this.X=t,this.Y=e},nn.PolyNode=function(){this.m_Parent=null,this.m_polygon=new nn.Path,this.m_Index=0,this.m_jointype=0,this.m_endtype=0,this.m_Childs=[],this.IsOpen=!1
},nn.PolyNode.prototype.IsHoleNode=function(){for(var t=!0,e=this.m_Parent;null!==e;)t=!t,e=e.m_Parent;
return t},nn.PolyNode.prototype.ChildCount=function(){return this.m_Childs.length
},nn.PolyNode.prototype.Contour=function(){return this.m_polygon},nn.PolyNode.prototype.AddChild=function(t){var e=this.m_Childs.length;
this.m_Childs.push(t),t.m_Parent=this,t.m_Index=e},nn.PolyNode.prototype.GetNext=function(){return this.m_Childs.length>0?this.m_Childs[0]:this.GetNextSiblingUp()
},nn.PolyNode.prototype.GetNextSiblingUp=function(){return null===this.m_Parent?null:this.m_Index==this.m_Parent.m_Childs.length-1?this.m_Parent.GetNextSiblingUp():this.m_Parent.m_Childs[this.m_Index+1]
},nn.PolyNode.prototype.Childs=function(){return this.m_Childs},nn.PolyNode.prototype.Parent=function(){return this.m_Parent
},nn.PolyNode.prototype.IsHole=function(){return this.IsHoleNode()},nn.PolyTree=function(){this.m_AllPolys=[],nn.PolyNode.call(this)
},nn.PolyTree.prototype.Clear=function(){for(var t=0,e=this.m_AllPolys.length;e>t;t++)this.m_AllPolys[t]=null;
this.m_AllPolys.length=0,this.m_Childs.length=0},nn.PolyTree.prototype.GetFirst=function(){return this.m_Childs.length>0?this.m_Childs[0]:null
},nn.PolyTree.prototype.Total=function(){return this.m_AllPolys.length},yn(nn.PolyTree,nn.PolyNode),nn.Math_Abs_Int64=nn.Math_Abs_Int32=nn.Math_Abs_Double=function(t){return Math.abs(t)
},nn.Math_Max_Int32_Int32=function(t,e){return Math.max(t,e)},nn.Cast_Int32=an.msie||an.opera||an.safari?function(t){return 0|t
}:function(t){return~~t},nn.Cast_Int64=an.chrome?function(t){return-2147483648>t||t>2147483647?0>t?Math.ceil(t):Math.floor(t):~~t
}:an.firefox&&"function"==typeof Number.toInteger?function(t){return Number.toInteger(t)
}:an.msie7||an.msie8?function(t){return parseInt(t,10)}:an.msie?function(t){return-2147483648>t||t>2147483647?0>t?Math.ceil(t):Math.floor(t):0|t
}:function(t){return 0>t?Math.ceil(t):Math.floor(t)},nn.Clear=function(t){t.length=0
},nn.PI=3.141592653589793,nn.PI2=6.283185307179586,nn.IntPoint=function(){var t=arguments,e=t.length;
if(this.X=0,this.Y=0,Qe)if(this.Z=0,3==e)this.X=t[0],this.Y=t[1],this.Z=t[2];else if(2==e)this.X=t[0],this.Y=t[1],this.Z=0;
else if(1==e)if(t[0]instanceof nn.DoublePoint){var n=t[0];this.X=nn.Clipper.Round(n.X),this.Y=nn.Clipper.Round(n.Y),this.Z=0
}else{var i=t[0];"undefined"==typeof i.Z&&(i.Z=0),this.X=i.X,this.Y=i.Y,this.Z=i.Z
}else this.X=0,this.Y=0,this.Z=0;else if(2==e)this.X=t[0],this.Y=t[1];else if(1==e)if(t[0]instanceof nn.DoublePoint){var n=t[0];
this.X=nn.Clipper.Round(n.X),this.Y=nn.Clipper.Round(n.Y)}else{var i=t[0];this.X=i.X,this.Y=i.Y
}else this.X=0,this.Y=0},nn.IntPoint.op_Equality=function(t,e){return t.X==e.X&&t.Y==e.Y
},nn.IntPoint.op_Inequality=function(t,e){return t.X!=e.X||t.Y!=e.Y},Qe?(nn.IntPoint0=function(){this.X=0,this.Y=0,this.Z=0
},nn.IntPoint1=function(t){this.X=t.X,this.Y=t.Y,this.Z=t.Z},nn.IntPoint1dp=function(t){this.X=nn.Clipper.Round(t.X),this.Y=nn.Clipper.Round(t.Y),this.Z=0
},nn.IntPoint2=function(t,e){this.X=t,this.Y=e,this.Z=0},nn.IntPoint3=function(t,e,n){this.X=t,this.Y=e,this.Z=n
}):(nn.IntPoint0=function(){this.X=0,this.Y=0},nn.IntPoint1=function(t){this.X=t.X,this.Y=t.Y
},nn.IntPoint1dp=function(t){this.X=nn.Clipper.Round(t.X),this.Y=nn.Clipper.Round(t.Y)
},nn.IntPoint2=function(t,e){this.X=t,this.Y=e}),nn.IntRect=function(){var t=arguments,e=t.length;
4==e?(this.left=t[0],this.top=t[1],this.right=t[2],this.bottom=t[3]):1==e?(this.left=ir.left,this.top=ir.top,this.right=ir.right,this.bottom=ir.bottom):(this.left=0,this.top=0,this.right=0,this.bottom=0)
},nn.IntRect0=function(){this.left=0,this.top=0,this.right=0,this.bottom=0},nn.IntRect1=function(t){this.left=t.left,this.top=t.top,this.right=t.right,this.bottom=t.bottom
},nn.IntRect4=function(t,e,n,i){this.left=t,this.top=e,this.right=n,this.bottom=i
},nn.ClipType={ctIntersection:0,ctUnion:1,ctDifference:2,ctXor:3},nn.PolyType={ptSubject:0,ptClip:1},nn.PolyFillType={pftEvenOdd:0,pftNonZero:1,pftPositive:2,pftNegative:3},nn.JoinType={jtSquare:0,jtRound:1,jtMiter:2},nn.EndType={etOpenSquare:0,etOpenRound:1,etOpenButt:2,etClosedLine:3,etClosedPolygon:4},en&&(nn.EndType_={etSquare:0,etRound:1,etButt:2,etClosed:3}),nn.EdgeSide={esLeft:0,esRight:1},nn.Direction={dRightToLeft:0,dLeftToRight:1},nn.TEdge=function(){this.Bot=new nn.IntPoint,this.Curr=new nn.IntPoint,this.Top=new nn.IntPoint,this.Delta=new nn.IntPoint,this.Dx=0,this.PolyTyp=nn.PolyType.ptSubject,this.Side=nn.EdgeSide.esLeft,this.WindDelta=0,this.WindCnt=0,this.WindCnt2=0,this.OutIdx=0,this.Next=null,this.Prev=null,this.NextInLML=null,this.NextInAEL=null,this.PrevInAEL=null,this.NextInSEL=null,this.PrevInSEL=null
},nn.IntersectNode=function(){this.Edge1=null,this.Edge2=null,this.Pt=new nn.IntPoint
},nn.MyIntersectNodeSort=function(){},nn.MyIntersectNodeSort.Compare=function(t,e){return e.Pt.Y-t.Pt.Y
},nn.LocalMinima=function(){this.Y=0,this.LeftBound=null,this.RightBound=null,this.Next=null
},nn.Scanbeam=function(){this.Y=0,this.Next=null},nn.OutRec=function(){this.Idx=0,this.IsHole=!1,this.IsOpen=!1,this.FirstLeft=null,this.Pts=null,this.BottomPt=null,this.PolyNode=null
},nn.OutPt=function(){this.Idx=0,this.Pt=new nn.IntPoint,this.Next=null,this.Prev=null
},nn.Join=function(){this.OutPt1=null,this.OutPt2=null,this.OffPt=new nn.IntPoint
},nn.ClipperBase=function(){this.m_MinimaList=null,this.m_CurrentLM=null,this.m_edges=new Array,this.m_UseFullRange=!1,this.m_HasOpenPaths=!1,this.PreserveCollinear=!1,this.m_MinimaList=null,this.m_CurrentLM=null,this.m_UseFullRange=!1,this.m_HasOpenPaths=!1
},nn.ClipperBase.horizontal=-9007199254740992,nn.ClipperBase.Skip=-2,nn.ClipperBase.Unassigned=-1,nn.ClipperBase.tolerance=1e-20,Je?(nn.ClipperBase.loRange=46340,nn.ClipperBase.hiRange=46340):(nn.ClipperBase.loRange=47453132,nn.ClipperBase.hiRange=0xfffffffffffff),nn.ClipperBase.near_zero=function(t){return t>-nn.ClipperBase.tolerance&&t<nn.ClipperBase.tolerance
},nn.ClipperBase.IsHorizontal=function(t){return 0===t.Delta.Y},nn.ClipperBase.prototype.PointIsVertex=function(t,e){var n=e;
do{if(nn.IntPoint.op_Equality(n.Pt,t))return!0;n=n.Next}while(n!=e);return!1},nn.ClipperBase.prototype.PointOnLineSegment=function(t,e,n,i){return i?t.X==e.X&&t.Y==e.Y||t.X==n.X&&t.Y==n.Y||t.X>e.X==t.X<n.X&&t.Y>e.Y==t.Y<n.Y&&bn.op_Equality(bn.Int128Mul(t.X-e.X,n.Y-e.Y),bn.Int128Mul(n.X-e.X,t.Y-e.Y)):t.X==e.X&&t.Y==e.Y||t.X==n.X&&t.Y==n.Y||t.X>e.X==t.X<n.X&&t.Y>e.Y==t.Y<n.Y&&(t.X-e.X)*(n.Y-e.Y)==(n.X-e.X)*(t.Y-e.Y)
},nn.ClipperBase.prototype.PointOnPolygon=function(t,e,n){for(var i=e;;){if(this.PointOnLineSegment(t,i.Pt,i.Next.Pt,n))return!0;
if(i=i.Next,i==e)break}return!1},nn.ClipperBase.prototype.SlopesEqual=nn.ClipperBase.SlopesEqual=function(){var t,e,n,i,r,o,s,a=arguments,l=a.length;
return 3==l?(t=a[0],e=a[1],s=a[2],s?bn.op_Equality(bn.Int128Mul(t.Delta.Y,e.Delta.X),bn.Int128Mul(t.Delta.X,e.Delta.Y)):nn.Cast_Int64(t.Delta.Y*e.Delta.X)==nn.Cast_Int64(t.Delta.X*e.Delta.Y)):4==l?(n=a[0],i=a[1],r=a[2],s=a[3],s?bn.op_Equality(bn.Int128Mul(n.Y-i.Y,i.X-r.X),bn.Int128Mul(n.X-i.X,i.Y-r.Y)):nn.Cast_Int64((n.Y-i.Y)*(i.X-r.X))-nn.Cast_Int64((n.X-i.X)*(i.Y-r.Y))===0):(n=a[0],i=a[1],r=a[2],o=a[3],s=a[4],s?bn.op_Equality(bn.Int128Mul(n.Y-i.Y,r.X-o.X),bn.Int128Mul(n.X-i.X,r.Y-o.Y)):nn.Cast_Int64((n.Y-i.Y)*(r.X-o.X))-nn.Cast_Int64((n.X-i.X)*(r.Y-o.Y))===0)
},nn.ClipperBase.SlopesEqual3=function(t,e,n){return n?bn.op_Equality(bn.Int128Mul(t.Delta.Y,e.Delta.X),bn.Int128Mul(t.Delta.X,e.Delta.Y)):nn.Cast_Int64(t.Delta.Y*e.Delta.X)==nn.Cast_Int64(t.Delta.X*e.Delta.Y)
},nn.ClipperBase.SlopesEqual4=function(t,e,n,i){return i?bn.op_Equality(bn.Int128Mul(t.Y-e.Y,e.X-n.X),bn.Int128Mul(t.X-e.X,e.Y-n.Y)):nn.Cast_Int64((t.Y-e.Y)*(e.X-n.X))-nn.Cast_Int64((t.X-e.X)*(e.Y-n.Y))===0
},nn.ClipperBase.SlopesEqual5=function(t,e,n,i,r){return r?bn.op_Equality(bn.Int128Mul(t.Y-e.Y,n.X-i.X),bn.Int128Mul(t.X-e.X,n.Y-i.Y)):nn.Cast_Int64((t.Y-e.Y)*(n.X-i.X))-nn.Cast_Int64((t.X-e.X)*(n.Y-i.Y))===0
},nn.ClipperBase.prototype.Clear=function(){this.DisposeLocalMinimaList();for(var t=0,e=this.m_edges.length;e>t;++t){for(var n=0,i=this.m_edges[t].length;i>n;++n)this.m_edges[t][n]=null;
nn.Clear(this.m_edges[t])}nn.Clear(this.m_edges),this.m_UseFullRange=!1,this.m_HasOpenPaths=!1
},nn.ClipperBase.prototype.DisposeLocalMinimaList=function(){for(;null!==this.m_MinimaList;){var t=this.m_MinimaList.Next;
this.m_MinimaList=null,this.m_MinimaList=t}this.m_CurrentLM=null},nn.ClipperBase.prototype.RangeTest=function(t,e){e.Value?(t.X>nn.ClipperBase.hiRange||t.Y>nn.ClipperBase.hiRange||-t.X>nn.ClipperBase.hiRange||-t.Y>nn.ClipperBase.hiRange)&&nn.Error("Coordinate outside allowed range in RangeTest()."):(t.X>nn.ClipperBase.loRange||t.Y>nn.ClipperBase.loRange||-t.X>nn.ClipperBase.loRange||-t.Y>nn.ClipperBase.loRange)&&(e.Value=!0,this.RangeTest(t,e))
},nn.ClipperBase.prototype.InitEdge=function(t,e,n,i){t.Next=e,t.Prev=n,t.Curr.X=i.X,t.Curr.Y=i.Y,t.OutIdx=-1
},nn.ClipperBase.prototype.InitEdge2=function(t,e){t.Curr.Y>=t.Next.Curr.Y?(t.Bot.X=t.Curr.X,t.Bot.Y=t.Curr.Y,t.Top.X=t.Next.Curr.X,t.Top.Y=t.Next.Curr.Y):(t.Top.X=t.Curr.X,t.Top.Y=t.Curr.Y,t.Bot.X=t.Next.Curr.X,t.Bot.Y=t.Next.Curr.Y),this.SetDx(t),t.PolyTyp=e
},nn.ClipperBase.prototype.FindNextLocMin=function(t){for(var e;;){for(;nn.IntPoint.op_Inequality(t.Bot,t.Prev.Bot)||nn.IntPoint.op_Equality(t.Curr,t.Top);)t=t.Next;
if(t.Dx!=nn.ClipperBase.horizontal&&t.Prev.Dx!=nn.ClipperBase.horizontal)break;for(;t.Prev.Dx==nn.ClipperBase.horizontal;)t=t.Prev;
for(e=t;t.Dx==nn.ClipperBase.horizontal;)t=t.Next;if(t.Top.Y!=t.Prev.Bot.Y){e.Prev.Bot.X<t.Bot.X&&(t=e);
break}}return t},nn.ClipperBase.prototype.ProcessBound=function(t,e){var n,i,r=t,o=t;
if(t.Dx==nn.ClipperBase.horizontal&&(i=e?t.Prev.Bot.X:t.Next.Bot.X,t.Bot.X!=i&&this.ReverseHorizontal(t)),o.OutIdx!=nn.ClipperBase.Skip)if(e){for(;o.Top.Y==o.Next.Bot.Y&&o.Next.OutIdx!=nn.ClipperBase.Skip;)o=o.Next;
if(o.Dx==nn.ClipperBase.horizontal&&o.Next.OutIdx!=nn.ClipperBase.Skip){for(n=o;n.Prev.Dx==nn.ClipperBase.horizontal;)n=n.Prev;
n.Prev.Top.X==o.Next.Top.X?e||(o=n.Prev):n.Prev.Top.X>o.Next.Top.X&&(o=n.Prev)}for(;t!=o;)t.NextInLML=t.Next,t.Dx==nn.ClipperBase.horizontal&&t!=r&&t.Bot.X!=t.Prev.Top.X&&this.ReverseHorizontal(t),t=t.Next;
t.Dx==nn.ClipperBase.horizontal&&t.Bot.X!=t.Prev.Top.X&&this.ReverseHorizontal(t),o=o.Next
}else{for(;o.Top.Y==o.Prev.Bot.Y&&o.Prev.OutIdx!=nn.ClipperBase.Skip;)o=o.Prev;if(o.Dx==nn.ClipperBase.horizontal&&o.Prev.OutIdx!=nn.ClipperBase.Skip){for(n=o;n.Next.Dx==nn.ClipperBase.horizontal;)n=n.Next;
n.Next.Top.X==o.Prev.Top.X?e||(o=n.Next):n.Next.Top.X>o.Prev.Top.X&&(o=n.Next)}for(;t!=o;)t.NextInLML=t.Prev,t.Dx==nn.ClipperBase.horizontal&&t!=r&&t.Bot.X!=t.Next.Top.X&&this.ReverseHorizontal(t),t=t.Prev;
t.Dx==nn.ClipperBase.horizontal&&t.Bot.X!=t.Next.Top.X&&this.ReverseHorizontal(t),o=o.Prev
}if(o.OutIdx==nn.ClipperBase.Skip){if(t=o,e){for(;t.Top.Y==t.Next.Bot.Y;)t=t.Next;
for(;t!=o&&t.Dx==nn.ClipperBase.horizontal;)t=t.Prev}else{for(;t.Top.Y==t.Prev.Bot.Y;)t=t.Prev;
for(;t!=o&&t.Dx==nn.ClipperBase.horizontal;)t=t.Next}if(t==o)o=e?t.Next:t.Prev;else{t=e?o.Next:o.Prev;
var s=new nn.LocalMinima;s.Next=null,s.Y=t.Bot.Y,s.LeftBound=null,s.RightBound=t,s.RightBound.WindDelta=0,o=this.ProcessBound(s.RightBound,e),this.InsertLocalMinima(s)
}}return o},nn.ClipperBase.prototype.AddPath=function(t,e,n){tn?n||e!=nn.PolyType.ptClip||nn.Error("AddPath: Open paths must be subject."):n||nn.Error("AddPath: Open paths have been disabled.");
var i=t.length-1;if(n)for(;i>0&&nn.IntPoint.op_Equality(t[i],t[0]);)--i;for(;i>0&&nn.IntPoint.op_Equality(t[i],t[i-1]);)--i;
if(n&&2>i||!n&&1>i)return!1;for(var r=new Array,o=0;i>=o;o++)r.push(new nn.TEdge);
var s=!0;try{r[1].Curr.X=t[1].X,r[1].Curr.Y=t[1].Y,function(){var e={Value:this.m_UseFullRange},n=this.RangeTest(t[0],e);
return this.m_UseFullRange=e.Value,n}.call(this),function(){var e={Value:this.m_UseFullRange},n=this.RangeTest(t[i],e);
return this.m_UseFullRange=e.Value,n}.call(this),this.InitEdge(r[0],r[1],r[i],t[0]),this.InitEdge(r[i],r[0],r[i-1],t[i]);
for(var o=i-1;o>=1;--o)(function(){var e={Value:this.m_UseFullRange},n=this.RangeTest(t[o],e);
return this.m_UseFullRange=e.Value,n}).call(this),this.InitEdge(r[o],r[o+1],r[o-1],t[o])
}catch(a){return!1}var l=r[0];n||(l.Prev.OutIdx=nn.ClipperBase.Skip);for(var u=l,c=l;;)if(nn.IntPoint.op_Equality(u.Curr,u.Next.Curr)){if(u==u.Next)break;
u==l&&(l=u.Next),u=this.RemoveEdge(u),c=u}else{if(u.Prev==u.Next)break;if(!n||!nn.ClipperBase.SlopesEqual(u.Prev.Curr,u.Curr,u.Next.Curr,this.m_UseFullRange)||this.PreserveCollinear&&this.Pt2IsBetweenPt1AndPt3(u.Prev.Curr,u.Curr,u.Next.Curr)){if(u=u.Next,u==c)break
}else u==l&&(l=u.Next),u=this.RemoveEdge(u),u=u.Prev,c=u}if(!n&&u==u.Next||n&&u.Prev==u.Next)return!1;
this.m_edges.push(r),n||(this.m_HasOpenPaths=!0);u=l;do this.InitEdge2(u,e),u=u.Next,s&&u.Curr.Y!=l.Curr.Y&&(s=!1);
while(u!=l);if(s){if(n)return!1;u.Prev.OutIdx=nn.ClipperBase.Skip,u.Prev.Bot.X<u.Prev.Top.X&&this.ReverseHorizontal(u.Prev);
var h=new nn.LocalMinima;for(h.Next=null,h.Y=u.Bot.Y,h.LeftBound=null,h.RightBound=u,h.RightBound.Side=nn.EdgeSide.esRight,h.RightBound.WindDelta=0;u.OutIdx!=nn.ClipperBase.Skip;)u.NextInLML=u.Next,u.Bot.X!=u.Prev.Top.X&&this.ReverseHorizontal(u),u=u.Next;
return this.InsertLocalMinima(h),!1}for(var d,p=null;u=this.FindNextLocMin(u),u!=p;){null==p&&(p=u);
var h=new nn.LocalMinima;h.Next=null,h.Y=u.Bot.Y,u.Dx<u.Prev.Dx?(h.LeftBound=u.Prev,h.RightBound=u,d=!1):(h.LeftBound=u,h.RightBound=u.Prev,d=!0),h.LeftBound.Side=nn.EdgeSide.esLeft,h.RightBound.Side=nn.EdgeSide.esRight,h.LeftBound.WindDelta=n?h.LeftBound.Next==h.RightBound?-1:1:0,h.RightBound.WindDelta=-h.LeftBound.WindDelta,u=this.ProcessBound(h.LeftBound,d);
var m=this.ProcessBound(h.RightBound,!d);h.LeftBound.OutIdx==nn.ClipperBase.Skip?h.LeftBound=null:h.RightBound.OutIdx==nn.ClipperBase.Skip&&(h.RightBound=null),this.InsertLocalMinima(h),d||(u=m)
}return!0},nn.ClipperBase.prototype.AddPaths=function(t,e,n){for(var i=!1,r=0,o=t.length;o>r;++r)this.AddPath(t[r],e,n)&&(i=!0);
return i},nn.ClipperBase.prototype.Pt2IsBetweenPt1AndPt3=function(t,e,n){return nn.IntPoint.op_Equality(t,n)||nn.IntPoint.op_Equality(t,e)||nn.IntPoint.op_Equality(n,e)?!1:t.X!=n.X?e.X>t.X==e.X<n.X:e.Y>t.Y==e.Y<n.Y
},nn.ClipperBase.prototype.RemoveEdge=function(t){t.Prev.Next=t.Next,t.Next.Prev=t.Prev;
var e=t.Next;return t.Prev=null,e},nn.ClipperBase.prototype.SetDx=function(t){t.Delta.X=t.Top.X-t.Bot.X,t.Delta.Y=t.Top.Y-t.Bot.Y,t.Dx=0===t.Delta.Y?nn.ClipperBase.horizontal:t.Delta.X/t.Delta.Y
},nn.ClipperBase.prototype.InsertLocalMinima=function(t){if(null===this.m_MinimaList)this.m_MinimaList=t;
else if(t.Y>=this.m_MinimaList.Y)t.Next=this.m_MinimaList,this.m_MinimaList=t;else{for(var e=this.m_MinimaList;null!==e.Next&&t.Y<e.Next.Y;)e=e.Next;
t.Next=e.Next,e.Next=t}},nn.ClipperBase.prototype.PopLocalMinima=function(){null!==this.m_CurrentLM&&(this.m_CurrentLM=this.m_CurrentLM.Next)
},nn.ClipperBase.prototype.ReverseHorizontal=function(t){var e=t.Top.X;t.Top.X=t.Bot.X,t.Bot.X=e,Qe&&(e=t.Top.Z,t.Top.Z=t.Bot.Z,t.Bot.Z=e)
},nn.ClipperBase.prototype.Reset=function(){if(this.m_CurrentLM=this.m_MinimaList,null!=this.m_CurrentLM)for(var t=this.m_MinimaList;null!=t;){var e=t.LeftBound;
null!=e&&(e.Curr.X=e.Bot.X,e.Curr.Y=e.Bot.Y,e.Side=nn.EdgeSide.esLeft,e.OutIdx=nn.ClipperBase.Unassigned),e=t.RightBound,null!=e&&(e.Curr.X=e.Bot.X,e.Curr.Y=e.Bot.Y,e.Side=nn.EdgeSide.esRight,e.OutIdx=nn.ClipperBase.Unassigned),t=t.Next
}},nn.Clipper=function(t){"undefined"==typeof t&&(t=0),this.m_PolyOuts=null,this.m_ClipType=nn.ClipType.ctIntersection,this.m_Scanbeam=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=null,this.m_IntersectNodeComparer=null,this.m_ExecuteLocked=!1,this.m_ClipFillType=nn.PolyFillType.pftEvenOdd,this.m_SubjFillType=nn.PolyFillType.pftEvenOdd,this.m_Joins=null,this.m_GhostJoins=null,this.m_UsingPolyTree=!1,this.ReverseSolution=!1,this.StrictlySimple=!1,nn.ClipperBase.call(this),this.m_Scanbeam=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=new Array,this.m_IntersectNodeComparer=nn.MyIntersectNodeSort.Compare,this.m_ExecuteLocked=!1,this.m_UsingPolyTree=!1,this.m_PolyOuts=new Array,this.m_Joins=new Array,this.m_GhostJoins=new Array,this.ReverseSolution=0!==(1&t),this.StrictlySimple=0!==(2&t),this.PreserveCollinear=0!==(4&t),Qe&&(this.ZFillFunction=null)
},nn.Clipper.ioReverseSolution=1,nn.Clipper.ioStrictlySimple=2,nn.Clipper.ioPreserveCollinear=4,nn.Clipper.prototype.Clear=function(){0!==this.m_edges.length&&(this.DisposeAllPolyPts(),nn.ClipperBase.prototype.Clear.call(this))
},nn.Clipper.prototype.DisposeScanbeamList=function(){for(;null!==this.m_Scanbeam;){var t=this.m_Scanbeam.Next;
this.m_Scanbeam=null,this.m_Scanbeam=t}},nn.Clipper.prototype.Reset=function(){nn.ClipperBase.prototype.Reset.call(this),this.m_Scanbeam=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.DisposeAllPolyPts();
for(var t=this.m_MinimaList;null!==t;)this.InsertScanbeam(t.Y),t=t.Next},nn.Clipper.prototype.InsertScanbeam=function(t){if(null===this.m_Scanbeam)this.m_Scanbeam=new nn.Scanbeam,this.m_Scanbeam.Next=null,this.m_Scanbeam.Y=t;
else if(t>this.m_Scanbeam.Y){var e=new nn.Scanbeam;e.Y=t,e.Next=this.m_Scanbeam,this.m_Scanbeam=e
}else{for(var n=this.m_Scanbeam;null!==n.Next&&t<=n.Next.Y;)n=n.Next;if(t==n.Y)return;
var e=new nn.Scanbeam;e.Y=t,e.Next=n.Next,n.Next=e}},nn.Clipper.prototype.Execute=function(){var t=arguments,e=t.length,n=t[1]instanceof nn.PolyTree;
if(4==e&&!n){var i=t[0],r=t[1],o=t[2],s=t[3];if(this.m_ExecuteLocked)return!1;this.m_HasOpenPaths&&nn.Error("Error: PolyTree struct is need for open path clipping."),this.m_ExecuteLocked=!0,nn.Clear(r),this.m_SubjFillType=o,this.m_ClipFillType=s,this.m_ClipType=i,this.m_UsingPolyTree=!1;
var a=this.ExecuteInternal();return a&&this.BuildResult(r),this.m_ExecuteLocked=!1,a
}if(4==e&&n){var i=t[0],l=t[1],o=t[2],s=t[3];if(this.m_ExecuteLocked)return!1;this.m_ExecuteLocked=!0,this.m_SubjFillType=o,this.m_ClipFillType=s,this.m_ClipType=i,this.m_UsingPolyTree=!0;
var a=this.ExecuteInternal();return a&&this.BuildResult2(l),this.m_ExecuteLocked=!1,a
}if(2==e&&!n){var i=t[0],r=t[1];return this.Execute(i,r,nn.PolyFillType.pftEvenOdd,nn.PolyFillType.pftEvenOdd)
}if(2==e&&n){var i=t[0],l=t[1];return this.Execute(i,l,nn.PolyFillType.pftEvenOdd,nn.PolyFillType.pftEvenOdd)
}},nn.Clipper.prototype.FixHoleLinkage=function(t){if(null!==t.FirstLeft&&(t.IsHole==t.FirstLeft.IsHole||null===t.FirstLeft.Pts)){for(var e=t.FirstLeft;null!==e&&(e.IsHole==t.IsHole||null===e.Pts);)e=e.FirstLeft;
t.FirstLeft=e}},nn.Clipper.prototype.ExecuteInternal=function(){try{if(this.Reset(),null===this.m_CurrentLM)return!1;
var t=this.PopScanbeam();do{if(this.InsertLocalMinimaIntoAEL(t),nn.Clear(this.m_GhostJoins),this.ProcessHorizontals(!1),null===this.m_Scanbeam)break;
var e=this.PopScanbeam();if(!this.ProcessIntersections(t,e))return!1;this.ProcessEdgesAtTopOfScanbeam(e),t=e
}while(null!==this.m_Scanbeam||null!==this.m_CurrentLM);for(var n=0,i=this.m_PolyOuts.length;i>n;n++){var r=this.m_PolyOuts[n];
null===r.Pts||r.IsOpen||(r.IsHole^this.ReverseSolution)==this.Area(r)>0&&this.ReversePolyPtLinks(r.Pts)
}this.JoinCommonEdges();for(var n=0,i=this.m_PolyOuts.length;i>n;n++){var r=this.m_PolyOuts[n];
null===r.Pts||r.IsOpen||this.FixupOutPolygon(r)}return this.StrictlySimple&&this.DoSimplePolygons(),!0
}finally{nn.Clear(this.m_Joins),nn.Clear(this.m_GhostJoins)}},nn.Clipper.prototype.PopScanbeam=function(){var t=this.m_Scanbeam.Y,e=this.m_Scanbeam;
return this.m_Scanbeam=this.m_Scanbeam.Next,e=null,t},nn.Clipper.prototype.DisposeAllPolyPts=function(){for(var t=0,e=this.m_PolyOuts.length;e>t;++t)this.DisposeOutRec(t);
nn.Clear(this.m_PolyOuts)},nn.Clipper.prototype.DisposeOutRec=function(t){var e=this.m_PolyOuts[t];
null!==e.Pts&&this.DisposeOutPts(e.Pts),e=null,this.m_PolyOuts[t]=null},nn.Clipper.prototype.DisposeOutPts=function(t){if(null!==t){var e=null;
for(t.Prev.Next=null;null!==t;)e=t,t=t.Next,e=null}},nn.Clipper.prototype.AddJoin=function(t,e,n){var i=new nn.Join;
i.OutPt1=t,i.OutPt2=e,i.OffPt.X=n.X,i.OffPt.Y=n.Y,this.m_Joins.push(i)},nn.Clipper.prototype.AddGhostJoin=function(t,e){var n=new nn.Join;
n.OutPt1=t,n.OffPt.X=e.X,n.OffPt.Y=e.Y,this.m_GhostJoins.push(n)},Qe&&(nn.Clipper.prototype.SetZ=function(t,e){t.Z=0,null!==this.ZFillFunction&&(e.OutIdx<0?this.ZFillFunction(e.Bot,e.Top,t):this.ZFillFunction(e.Top,e.Bot,t))
}),nn.Clipper.prototype.InsertLocalMinimaIntoAEL=function(t){for(;null!==this.m_CurrentLM&&this.m_CurrentLM.Y==t;){var e=this.m_CurrentLM.LeftBound,n=this.m_CurrentLM.RightBound;
this.PopLocalMinima();var i=null;if(null===e?(this.InsertEdgeIntoAEL(n,null),this.SetWindingCount(n),this.IsContributing(n)&&(i=this.AddOutPt(n,n.Bot))):null==n?(this.InsertEdgeIntoAEL(e,null),this.SetWindingCount(e),this.IsContributing(e)&&(i=this.AddOutPt(e,e.Bot)),this.InsertScanbeam(e.Top.Y)):(this.InsertEdgeIntoAEL(e,null),this.InsertEdgeIntoAEL(n,e),this.SetWindingCount(e),n.WindCnt=e.WindCnt,n.WindCnt2=e.WindCnt2,this.IsContributing(e)&&(i=this.AddLocalMinPoly(e,n,e.Bot)),this.InsertScanbeam(e.Top.Y)),null!=n&&(nn.ClipperBase.IsHorizontal(n)?this.AddEdgeToSEL(n):this.InsertScanbeam(n.Top.Y)),null!=e&&null!=n){if(null!==i&&nn.ClipperBase.IsHorizontal(n)&&this.m_GhostJoins.length>0&&0!==n.WindDelta)for(var r=0,o=this.m_GhostJoins.length;o>r;r++){var s=this.m_GhostJoins[r];
this.HorzSegmentsOverlap(s.OutPt1.Pt,s.OffPt,n.Bot,n.Top)&&this.AddJoin(s.OutPt1,i,s.OffPt)
}if(e.OutIdx>=0&&null!==e.PrevInAEL&&e.PrevInAEL.Curr.X==e.Bot.X&&e.PrevInAEL.OutIdx>=0&&nn.ClipperBase.SlopesEqual(e.PrevInAEL,e,this.m_UseFullRange)&&0!==e.WindDelta&&0!==e.PrevInAEL.WindDelta){var a=this.AddOutPt(e.PrevInAEL,e.Bot);
this.AddJoin(i,a,e.Top)}if(e.NextInAEL!=n){if(n.OutIdx>=0&&n.PrevInAEL.OutIdx>=0&&nn.ClipperBase.SlopesEqual(n.PrevInAEL,n,this.m_UseFullRange)&&0!==n.WindDelta&&0!==n.PrevInAEL.WindDelta){var a=this.AddOutPt(n.PrevInAEL,n.Bot);
this.AddJoin(i,a,n.Top)}var l=e.NextInAEL;if(null!==l)for(;l!=n;)this.IntersectEdges(n,l,e.Curr,!1),l=l.NextInAEL
}}}},nn.Clipper.prototype.InsertEdgeIntoAEL=function(t,e){if(null===this.m_ActiveEdges)t.PrevInAEL=null,t.NextInAEL=null,this.m_ActiveEdges=t;
else if(null===e&&this.E2InsertsBeforeE1(this.m_ActiveEdges,t))t.PrevInAEL=null,t.NextInAEL=this.m_ActiveEdges,this.m_ActiveEdges.PrevInAEL=t,this.m_ActiveEdges=t;
else{for(null===e&&(e=this.m_ActiveEdges);null!==e.NextInAEL&&!this.E2InsertsBeforeE1(e.NextInAEL,t);)e=e.NextInAEL;
t.NextInAEL=e.NextInAEL,null!==e.NextInAEL&&(e.NextInAEL.PrevInAEL=t),t.PrevInAEL=e,e.NextInAEL=t
}},nn.Clipper.prototype.E2InsertsBeforeE1=function(t,e){return e.Curr.X==t.Curr.X?e.Top.Y>t.Top.Y?e.Top.X<nn.Clipper.TopX(t,e.Top.Y):t.Top.X>nn.Clipper.TopX(e,t.Top.Y):e.Curr.X<t.Curr.X
},nn.Clipper.prototype.IsEvenOddFillType=function(t){return t.PolyTyp==nn.PolyType.ptSubject?this.m_SubjFillType==nn.PolyFillType.pftEvenOdd:this.m_ClipFillType==nn.PolyFillType.pftEvenOdd
},nn.Clipper.prototype.IsEvenOddAltFillType=function(t){return t.PolyTyp==nn.PolyType.ptSubject?this.m_ClipFillType==nn.PolyFillType.pftEvenOdd:this.m_SubjFillType==nn.PolyFillType.pftEvenOdd
},nn.Clipper.prototype.IsContributing=function(t){var e,n;switch(t.PolyTyp==nn.PolyType.ptSubject?(e=this.m_SubjFillType,n=this.m_ClipFillType):(e=this.m_ClipFillType,n=this.m_SubjFillType),e){case nn.PolyFillType.pftEvenOdd:if(0===t.WindDelta&&1!=t.WindCnt)return!1;
break;case nn.PolyFillType.pftNonZero:if(1!=Math.abs(t.WindCnt))return!1;break;case nn.PolyFillType.pftPositive:if(1!=t.WindCnt)return!1;
break;default:if(-1!=t.WindCnt)return!1}switch(this.m_ClipType){case nn.ClipType.ctIntersection:switch(n){case nn.PolyFillType.pftEvenOdd:case nn.PolyFillType.pftNonZero:return 0!==t.WindCnt2;
case nn.PolyFillType.pftPositive:return t.WindCnt2>0;default:return t.WindCnt2<0}case nn.ClipType.ctUnion:switch(n){case nn.PolyFillType.pftEvenOdd:case nn.PolyFillType.pftNonZero:return 0===t.WindCnt2;
case nn.PolyFillType.pftPositive:return t.WindCnt2<=0;default:return t.WindCnt2>=0
}case nn.ClipType.ctDifference:if(t.PolyTyp==nn.PolyType.ptSubject)switch(n){case nn.PolyFillType.pftEvenOdd:case nn.PolyFillType.pftNonZero:return 0===t.WindCnt2;
case nn.PolyFillType.pftPositive:return t.WindCnt2<=0;default:return t.WindCnt2>=0
}else switch(n){case nn.PolyFillType.pftEvenOdd:case nn.PolyFillType.pftNonZero:return 0!==t.WindCnt2;
case nn.PolyFillType.pftPositive:return t.WindCnt2>0;default:return t.WindCnt2<0}case nn.ClipType.ctXor:if(0!==t.WindDelta)return!0;
switch(n){case nn.PolyFillType.pftEvenOdd:case nn.PolyFillType.pftNonZero:return 0===t.WindCnt2;
case nn.PolyFillType.pftPositive:return t.WindCnt2<=0;default:return t.WindCnt2>=0
}}return!0},nn.Clipper.prototype.SetWindingCount=function(t){for(var e=t.PrevInAEL;null!==e&&(e.PolyTyp!=t.PolyTyp||0===e.WindDelta);)e=e.PrevInAEL;
if(null===e)t.WindCnt=0===t.WindDelta?1:t.WindDelta,t.WindCnt2=0,e=this.m_ActiveEdges;
else if(0===t.WindDelta&&this.m_ClipType!=nn.ClipType.ctUnion)t.WindCnt=1,t.WindCnt2=e.WindCnt2,e=e.NextInAEL;
else if(this.IsEvenOddFillType(t)){if(0===t.WindDelta){for(var n=!0,i=e.PrevInAEL;null!==i;)i.PolyTyp==e.PolyTyp&&0!==i.WindDelta&&(n=!n),i=i.PrevInAEL;
t.WindCnt=n?0:1}else t.WindCnt=t.WindDelta;t.WindCnt2=e.WindCnt2,e=e.NextInAEL}else t.WindCnt=e.WindCnt*e.WindDelta<0?Math.abs(e.WindCnt)>1?e.WindDelta*t.WindDelta<0?e.WindCnt:e.WindCnt+t.WindDelta:0===t.WindDelta?1:t.WindDelta:0===t.WindDelta?e.WindCnt<0?e.WindCnt-1:e.WindCnt+1:e.WindDelta*t.WindDelta<0?e.WindCnt:e.WindCnt+t.WindDelta,t.WindCnt2=e.WindCnt2,e=e.NextInAEL;
if(this.IsEvenOddAltFillType(t))for(;e!=t;)0!==e.WindDelta&&(t.WindCnt2=0===t.WindCnt2?1:0),e=e.NextInAEL;
else for(;e!=t;)t.WindCnt2+=e.WindDelta,e=e.NextInAEL},nn.Clipper.prototype.AddEdgeToSEL=function(t){null===this.m_SortedEdges?(this.m_SortedEdges=t,t.PrevInSEL=null,t.NextInSEL=null):(t.NextInSEL=this.m_SortedEdges,t.PrevInSEL=null,this.m_SortedEdges.PrevInSEL=t,this.m_SortedEdges=t)
},nn.Clipper.prototype.CopyAELToSEL=function(){var t=this.m_ActiveEdges;for(this.m_SortedEdges=t;null!==t;)t.PrevInSEL=t.PrevInAEL,t.NextInSEL=t.NextInAEL,t=t.NextInAEL
},nn.Clipper.prototype.SwapPositionsInAEL=function(t,e){if(t.NextInAEL!=t.PrevInAEL&&e.NextInAEL!=e.PrevInAEL){if(t.NextInAEL==e){var n=e.NextInAEL;
null!==n&&(n.PrevInAEL=t);var i=t.PrevInAEL;null!==i&&(i.NextInAEL=e),e.PrevInAEL=i,e.NextInAEL=t,t.PrevInAEL=e,t.NextInAEL=n
}else if(e.NextInAEL==t){var n=t.NextInAEL;null!==n&&(n.PrevInAEL=e);var i=e.PrevInAEL;
null!==i&&(i.NextInAEL=t),t.PrevInAEL=i,t.NextInAEL=e,e.PrevInAEL=t,e.NextInAEL=n
}else{var n=t.NextInAEL,i=t.PrevInAEL;t.NextInAEL=e.NextInAEL,null!==t.NextInAEL&&(t.NextInAEL.PrevInAEL=t),t.PrevInAEL=e.PrevInAEL,null!==t.PrevInAEL&&(t.PrevInAEL.NextInAEL=t),e.NextInAEL=n,null!==e.NextInAEL&&(e.NextInAEL.PrevInAEL=e),e.PrevInAEL=i,null!==e.PrevInAEL&&(e.PrevInAEL.NextInAEL=e)
}null===t.PrevInAEL?this.m_ActiveEdges=t:null===e.PrevInAEL&&(this.m_ActiveEdges=e)
}},nn.Clipper.prototype.SwapPositionsInSEL=function(t,e){if(!(null===t.NextInSEL&&null===t.PrevInSEL||null===e.NextInSEL&&null===e.PrevInSEL)){if(t.NextInSEL==e){var n=e.NextInSEL;
null!==n&&(n.PrevInSEL=t);var i=t.PrevInSEL;null!==i&&(i.NextInSEL=e),e.PrevInSEL=i,e.NextInSEL=t,t.PrevInSEL=e,t.NextInSEL=n
}else if(e.NextInSEL==t){var n=t.NextInSEL;null!==n&&(n.PrevInSEL=e);var i=e.PrevInSEL;
null!==i&&(i.NextInSEL=t),t.PrevInSEL=i,t.NextInSEL=e,e.PrevInSEL=t,e.NextInSEL=n
}else{var n=t.NextInSEL,i=t.PrevInSEL;t.NextInSEL=e.NextInSEL,null!==t.NextInSEL&&(t.NextInSEL.PrevInSEL=t),t.PrevInSEL=e.PrevInSEL,null!==t.PrevInSEL&&(t.PrevInSEL.NextInSEL=t),e.NextInSEL=n,null!==e.NextInSEL&&(e.NextInSEL.PrevInSEL=e),e.PrevInSEL=i,null!==e.PrevInSEL&&(e.PrevInSEL.NextInSEL=e)
}null===t.PrevInSEL?this.m_SortedEdges=t:null===e.PrevInSEL&&(this.m_SortedEdges=e)
}},nn.Clipper.prototype.AddLocalMaxPoly=function(t,e,n){this.AddOutPt(t,n),0==e.WindDelta&&this.AddOutPt(e,n),t.OutIdx==e.OutIdx?(t.OutIdx=-1,e.OutIdx=-1):t.OutIdx<e.OutIdx?this.AppendPolygon(t,e):this.AppendPolygon(e,t)
},nn.Clipper.prototype.AddLocalMinPoly=function(t,e,n){var i,r,o;if(nn.ClipperBase.IsHorizontal(e)||t.Dx>e.Dx?(i=this.AddOutPt(t,n),e.OutIdx=t.OutIdx,t.Side=nn.EdgeSide.esLeft,e.Side=nn.EdgeSide.esRight,r=t,o=r.PrevInAEL==e?e.PrevInAEL:r.PrevInAEL):(i=this.AddOutPt(e,n),t.OutIdx=e.OutIdx,t.Side=nn.EdgeSide.esRight,e.Side=nn.EdgeSide.esLeft,r=e,o=r.PrevInAEL==t?t.PrevInAEL:r.PrevInAEL),null!==o&&o.OutIdx>=0&&nn.Clipper.TopX(o,n.Y)==nn.Clipper.TopX(r,n.Y)&&nn.ClipperBase.SlopesEqual(r,o,this.m_UseFullRange)&&0!==r.WindDelta&&0!==o.WindDelta){var s=this.AddOutPt(o,n);
this.AddJoin(i,s,r.Top)}return i},nn.Clipper.prototype.CreateOutRec=function(){var t=new nn.OutRec;
return t.Idx=-1,t.IsHole=!1,t.IsOpen=!1,t.FirstLeft=null,t.Pts=null,t.BottomPt=null,t.PolyNode=null,this.m_PolyOuts.push(t),t.Idx=this.m_PolyOuts.length-1,t
},nn.Clipper.prototype.AddOutPt=function(t,e){var n=t.Side==nn.EdgeSide.esLeft;if(t.OutIdx<0){var i=this.CreateOutRec();
i.IsOpen=0===t.WindDelta;var r=new nn.OutPt;return i.Pts=r,r.Idx=i.Idx,r.Pt.X=e.X,r.Pt.Y=e.Y,r.Next=r,r.Prev=r,i.IsOpen||this.SetHoleState(t,i),Qe&&(nn.IntPoint.op_Equality(e,t.Bot)?(r.Pt.X=t.Bot.X,r.Pt.Y=t.Bot.Y,r.Pt.Z=t.Bot.Z):nn.IntPoint.op_Equality(e,t.Top)?(r.Pt.X=t.Top.X,r.Pt.Y=t.Top.Y,r.Pt.Z=t.Top.Z):this.SetZ(r.Pt,t)),t.OutIdx=i.Idx,r
}var i=this.m_PolyOuts[t.OutIdx],o=i.Pts;if(n&&nn.IntPoint.op_Equality(e,o.Pt))return o;
if(!n&&nn.IntPoint.op_Equality(e,o.Prev.Pt))return o.Prev;var r=new nn.OutPt;return r.Idx=i.Idx,r.Pt.X=e.X,r.Pt.Y=e.Y,r.Next=o,r.Prev=o.Prev,r.Prev.Next=r,o.Prev=r,n&&(i.Pts=r),Qe&&(nn.IntPoint.op_Equality(e,t.Bot)?(r.Pt.X=t.Bot.X,r.Pt.Y=t.Bot.Y,r.Pt.Z=t.Bot.Z):nn.IntPoint.op_Equality(e,t.Top)?(r.Pt.X=t.Top.X,r.Pt.Y=t.Top.Y,r.Pt.Z=t.Top.Z):this.SetZ(r.Pt,t)),r
},nn.Clipper.prototype.SwapPoints=function(t,e){var n=new nn.IntPoint(t.Value);t.Value.X=e.Value.X,t.Value.Y=e.Value.Y,e.Value.X=n.X,e.Value.Y=n.Y
},nn.Clipper.prototype.HorzSegmentsOverlap=function(t,e,n,i){return t.X>n.X==t.X<i.X?!0:e.X>n.X==e.X<i.X?!0:n.X>t.X==n.X<e.X?!0:i.X>t.X==i.X<e.X?!0:t.X==n.X&&e.X==i.X?!0:t.X==i.X&&e.X==n.X?!0:!1
},nn.Clipper.prototype.InsertPolyPtBetween=function(t,e,n){var i=new nn.OutPt;return i.Pt.X=n.X,i.Pt.Y=n.Y,e==t.Next?(t.Next=i,e.Prev=i,i.Next=e,i.Prev=t):(e.Next=i,t.Prev=i,i.Next=t,i.Prev=e),i
},nn.Clipper.prototype.SetHoleState=function(t,e){for(var n=!1,i=t.PrevInAEL;null!==i;)i.OutIdx>=0&&0!=i.WindDelta&&(n=!n,null===e.FirstLeft&&(e.FirstLeft=this.m_PolyOuts[i.OutIdx])),i=i.PrevInAEL;
n&&(e.IsHole=!0)},nn.Clipper.prototype.GetDx=function(t,e){return t.Y==e.Y?nn.ClipperBase.horizontal:(e.X-t.X)/(e.Y-t.Y)
},nn.Clipper.prototype.FirstIsBottomPt=function(t,e){for(var n=t.Prev;nn.IntPoint.op_Equality(n.Pt,t.Pt)&&n!=t;)n=n.Prev;
var i=Math.abs(this.GetDx(t.Pt,n.Pt));for(n=t.Next;nn.IntPoint.op_Equality(n.Pt,t.Pt)&&n!=t;)n=n.Next;
var r=Math.abs(this.GetDx(t.Pt,n.Pt));for(n=e.Prev;nn.IntPoint.op_Equality(n.Pt,e.Pt)&&n!=e;)n=n.Prev;
var o=Math.abs(this.GetDx(e.Pt,n.Pt));for(n=e.Next;nn.IntPoint.op_Equality(n.Pt,e.Pt)&&n!=e;)n=n.Next;
var s=Math.abs(this.GetDx(e.Pt,n.Pt));return i>=o&&i>=s||r>=o&&r>=s},nn.Clipper.prototype.GetBottomPt=function(t){for(var e=null,n=t.Next;n!=t;)n.Pt.Y>t.Pt.Y?(t=n,e=null):n.Pt.Y==t.Pt.Y&&n.Pt.X<=t.Pt.X&&(n.Pt.X<t.Pt.X?(e=null,t=n):n.Next!=t&&n.Prev!=t&&(e=n)),n=n.Next;
if(null!==e)for(;e!=n;)for(this.FirstIsBottomPt(n,e)||(t=e),e=e.Next;nn.IntPoint.op_Inequality(e.Pt,t.Pt);)e=e.Next;
return t},nn.Clipper.prototype.GetLowermostRec=function(t,e){null===t.BottomPt&&(t.BottomPt=this.GetBottomPt(t.Pts)),null===e.BottomPt&&(e.BottomPt=this.GetBottomPt(e.Pts));
var n=t.BottomPt,i=e.BottomPt;return n.Pt.Y>i.Pt.Y?t:n.Pt.Y<i.Pt.Y?e:n.Pt.X<i.Pt.X?t:n.Pt.X>i.Pt.X?e:n.Next==n?e:i.Next==i?t:this.FirstIsBottomPt(n,i)?t:e
},nn.Clipper.prototype.Param1RightOfParam2=function(t,e){do if(t=t.FirstLeft,t==e)return!0;
while(null!==t);return!1},nn.Clipper.prototype.GetOutRec=function(t){for(var e=this.m_PolyOuts[t];e!=this.m_PolyOuts[e.Idx];)e=this.m_PolyOuts[e.Idx];
return e},nn.Clipper.prototype.AppendPolygon=function(t,e){var n,i=this.m_PolyOuts[t.OutIdx],r=this.m_PolyOuts[e.OutIdx];
n=this.Param1RightOfParam2(i,r)?r:this.Param1RightOfParam2(r,i)?i:this.GetLowermostRec(i,r);
var o,s=i.Pts,a=s.Prev,l=r.Pts,u=l.Prev;t.Side==nn.EdgeSide.esLeft?(e.Side==nn.EdgeSide.esLeft?(this.ReversePolyPtLinks(l),l.Next=s,s.Prev=l,a.Next=u,u.Prev=a,i.Pts=u):(u.Next=s,s.Prev=u,l.Prev=a,a.Next=l,i.Pts=l),o=nn.EdgeSide.esLeft):(e.Side==nn.EdgeSide.esRight?(this.ReversePolyPtLinks(l),a.Next=u,u.Prev=a,l.Next=s,s.Prev=l):(a.Next=l,l.Prev=a,s.Prev=u,u.Next=s),o=nn.EdgeSide.esRight),i.BottomPt=null,n==r&&(r.FirstLeft!=i&&(i.FirstLeft=r.FirstLeft),i.IsHole=r.IsHole),r.Pts=null,r.BottomPt=null,r.FirstLeft=i;
var c=t.OutIdx,h=e.OutIdx;t.OutIdx=-1,e.OutIdx=-1;for(var d=this.m_ActiveEdges;null!==d;){if(d.OutIdx==h){d.OutIdx=c,d.Side=o;
break}d=d.NextInAEL}r.Idx=i.Idx},nn.Clipper.prototype.ReversePolyPtLinks=function(t){if(null!==t){var e,n;
e=t;do n=e.Next,e.Next=e.Prev,e.Prev=n,e=n;while(e!=t)}},nn.Clipper.SwapSides=function(t,e){var n=t.Side;
t.Side=e.Side,e.Side=n},nn.Clipper.SwapPolyIndexes=function(t,e){var n=t.OutIdx;t.OutIdx=e.OutIdx,e.OutIdx=n
},nn.Clipper.prototype.IntersectEdges=function(t,e,n,i){var r=!i&&null===t.NextInLML&&t.Top.X==n.X&&t.Top.Y==n.Y,o=!i&&null===e.NextInLML&&e.Top.X==n.X&&e.Top.Y==n.Y,s=t.OutIdx>=0,a=e.OutIdx>=0;
if(tn&&(0===t.WindDelta||0===e.WindDelta))return 0===t.WindDelta&&0===e.WindDelta?(r||o)&&s&&a&&this.AddLocalMaxPoly(t,e,n):t.PolyTyp==e.PolyTyp&&t.WindDelta!=e.WindDelta&&this.m_ClipType==nn.ClipType.ctUnion?0===t.WindDelta?a&&(this.AddOutPt(t,n),s&&(t.OutIdx=-1)):s&&(this.AddOutPt(e,n),a&&(e.OutIdx=-1)):t.PolyTyp!=e.PolyTyp&&(0!==t.WindDelta||1!=Math.abs(e.WindCnt)||this.m_ClipType==nn.ClipType.ctUnion&&0!==e.WindCnt2?0!==e.WindDelta||1!=Math.abs(t.WindCnt)||this.m_ClipType==nn.ClipType.ctUnion&&0!==t.WindCnt2||(this.AddOutPt(e,n),a&&(e.OutIdx=-1)):(this.AddOutPt(t,n),s&&(t.OutIdx=-1))),r&&(t.OutIdx<0?this.DeleteFromAEL(t):nn.Error("Error intersecting polylines")),void(o&&(e.OutIdx<0?this.DeleteFromAEL(e):nn.Error("Error intersecting polylines")));
if(t.PolyTyp==e.PolyTyp)if(this.IsEvenOddFillType(t)){var l=t.WindCnt;t.WindCnt=e.WindCnt,e.WindCnt=l
}else t.WindCnt+e.WindDelta===0?t.WindCnt=-t.WindCnt:t.WindCnt+=e.WindDelta,e.WindCnt-t.WindDelta===0?e.WindCnt=-e.WindCnt:e.WindCnt-=t.WindDelta;
else this.IsEvenOddFillType(e)?t.WindCnt2=0===t.WindCnt2?1:0:t.WindCnt2+=e.WindDelta,this.IsEvenOddFillType(t)?e.WindCnt2=0===e.WindCnt2?1:0:e.WindCnt2-=t.WindDelta;
var u,c,h,d;t.PolyTyp==nn.PolyType.ptSubject?(u=this.m_SubjFillType,h=this.m_ClipFillType):(u=this.m_ClipFillType,h=this.m_SubjFillType),e.PolyTyp==nn.PolyType.ptSubject?(c=this.m_SubjFillType,d=this.m_ClipFillType):(c=this.m_ClipFillType,d=this.m_SubjFillType);
var p,m;switch(u){case nn.PolyFillType.pftPositive:p=t.WindCnt;break;case nn.PolyFillType.pftNegative:p=-t.WindCnt;
break;default:p=Math.abs(t.WindCnt)}switch(c){case nn.PolyFillType.pftPositive:m=e.WindCnt;
break;case nn.PolyFillType.pftNegative:m=-e.WindCnt;break;default:m=Math.abs(e.WindCnt)
}if(s&&a)r||o||0!==p&&1!=p||0!==m&&1!=m||t.PolyTyp!=e.PolyTyp&&this.m_ClipType!=nn.ClipType.ctXor?this.AddLocalMaxPoly(t,e,n):(this.AddOutPt(t,n),this.AddOutPt(e,n),nn.Clipper.SwapSides(t,e),nn.Clipper.SwapPolyIndexes(t,e));
else if(s)(0===m||1==m)&&(this.AddOutPt(t,n),nn.Clipper.SwapSides(t,e),nn.Clipper.SwapPolyIndexes(t,e));
else if(a)(0===p||1==p)&&(this.AddOutPt(e,n),nn.Clipper.SwapSides(t,e),nn.Clipper.SwapPolyIndexes(t,e));
else if(!(0!==p&&1!=p||0!==m&&1!=m||r||o)){var f,g;switch(h){case nn.PolyFillType.pftPositive:f=t.WindCnt2;
break;case nn.PolyFillType.pftNegative:f=-t.WindCnt2;break;default:f=Math.abs(t.WindCnt2)
}switch(d){case nn.PolyFillType.pftPositive:g=e.WindCnt2;break;case nn.PolyFillType.pftNegative:g=-e.WindCnt2;
break;default:g=Math.abs(e.WindCnt2)}if(t.PolyTyp!=e.PolyTyp)this.AddLocalMinPoly(t,e,n);
else if(1==p&&1==m)switch(this.m_ClipType){case nn.ClipType.ctIntersection:f>0&&g>0&&this.AddLocalMinPoly(t,e,n);
break;case nn.ClipType.ctUnion:0>=f&&0>=g&&this.AddLocalMinPoly(t,e,n);break;case nn.ClipType.ctDifference:(t.PolyTyp==nn.PolyType.ptClip&&f>0&&g>0||t.PolyTyp==nn.PolyType.ptSubject&&0>=f&&0>=g)&&this.AddLocalMinPoly(t,e,n);
break;case nn.ClipType.ctXor:this.AddLocalMinPoly(t,e,n)}else nn.Clipper.SwapSides(t,e)
}r!=o&&(r&&t.OutIdx>=0||o&&e.OutIdx>=0)&&(nn.Clipper.SwapSides(t,e),nn.Clipper.SwapPolyIndexes(t,e)),r&&this.DeleteFromAEL(t),o&&this.DeleteFromAEL(e)
},nn.Clipper.prototype.DeleteFromAEL=function(t){var e=t.PrevInAEL,n=t.NextInAEL;
(null!==e||null!==n||t==this.m_ActiveEdges)&&(null!==e?e.NextInAEL=n:this.m_ActiveEdges=n,null!==n&&(n.PrevInAEL=e),t.NextInAEL=null,t.PrevInAEL=null)
},nn.Clipper.prototype.DeleteFromSEL=function(t){var e=t.PrevInSEL,n=t.NextInSEL;
(null!==e||null!==n||t==this.m_SortedEdges)&&(null!==e?e.NextInSEL=n:this.m_SortedEdges=n,null!==n&&(n.PrevInSEL=e),t.NextInSEL=null,t.PrevInSEL=null)
},nn.Clipper.prototype.UpdateEdgeIntoAEL=function(t){null===t.Value.NextInLML&&nn.Error("UpdateEdgeIntoAEL: invalid call");
var e=t.Value.PrevInAEL,n=t.Value.NextInAEL;t.Value.NextInLML.OutIdx=t.Value.OutIdx,null!==e?e.NextInAEL=t.Value.NextInLML:this.m_ActiveEdges=t.Value.NextInLML,null!==n&&(n.PrevInAEL=t.Value.NextInLML),t.Value.NextInLML.Side=t.Value.Side,t.Value.NextInLML.WindDelta=t.Value.WindDelta,t.Value.NextInLML.WindCnt=t.Value.WindCnt,t.Value.NextInLML.WindCnt2=t.Value.WindCnt2,t.Value=t.Value.NextInLML,t.Value.Curr.X=t.Value.Bot.X,t.Value.Curr.Y=t.Value.Bot.Y,t.Value.PrevInAEL=e,t.Value.NextInAEL=n,nn.ClipperBase.IsHorizontal(t.Value)||this.InsertScanbeam(t.Value.Top.Y)
},nn.Clipper.prototype.ProcessHorizontals=function(t){for(var e=this.m_SortedEdges;null!==e;)this.DeleteFromSEL(e),this.ProcessHorizontal(e,t),e=this.m_SortedEdges
},nn.Clipper.prototype.GetHorzDirection=function(t,e,n,i){t.Bot.X<t.Top.X?(n.Value=t.Bot.X,i.Value=t.Top.X,e.Value=nn.Direction.dLeftToRight):(n.Value=t.Top.X,i.Value=t.Bot.X,e.Value=nn.Direction.dRightToLeft)
},nn.Clipper.prototype.PrepareHorzJoins=function(t,e){var n=this.m_PolyOuts[t.OutIdx].Pts;
t.Side!=nn.EdgeSide.esLeft&&(n=n.Prev);for(var i=0,r=this.m_GhostJoins.length;r>i;++i){var o=this.m_GhostJoins[i];
this.HorzSegmentsOverlap(o.OutPt1.Pt,o.OffPt,t.Bot,t.Top)&&this.AddJoin(o.OutPt1,n,o.OffPt)
}e&&(nn.IntPoint.op_Equality(n.Pt,t.Top)?this.AddGhostJoin(n,t.Bot):this.AddGhostJoin(n,t.Top))
},nn.Clipper.prototype.ProcessHorizontal=function(t,e){var n,i,r;(function(){n={Value:n},i={Value:i},r={Value:r};
var e=this.GetHorzDirection(t,n,i,r);return n=n.Value,i=i.Value,r=r.Value,e}).call(this);
for(var o=t,s=null;null!==o.NextInLML&&nn.ClipperBase.IsHorizontal(o.NextInLML);)o=o.NextInLML;
for(null===o.NextInLML&&(s=this.GetMaximaPair(o));;){for(var a=t==o,l=this.GetNextInAEL(t,n);null!==l&&!(l.Curr.X==t.Top.X&&null!==t.NextInLML&&l.Dx<t.NextInLML.Dx);){var u=this.GetNextInAEL(l,n);
if(n==nn.Direction.dLeftToRight&&l.Curr.X<=r||n==nn.Direction.dRightToLeft&&l.Curr.X>=i){if(l==s&&a)return t.OutIdx>=0&&0!==t.WindDelta&&this.PrepareHorzJoins(t,e),n==nn.Direction.dLeftToRight?this.IntersectEdges(t,l,l.Top,!1):this.IntersectEdges(l,t,l.Top,!1),void(s.OutIdx>=0&&nn.Error("ProcessHorizontal error"));
if(n==nn.Direction.dLeftToRight){var c=new nn.IntPoint(l.Curr.X,t.Curr.Y);this.IntersectEdges(t,l,c,!0)
}else{var c=new nn.IntPoint(l.Curr.X,t.Curr.Y);this.IntersectEdges(l,t,c,!0)}this.SwapPositionsInAEL(t,l)
}else if(n==nn.Direction.dLeftToRight&&l.Curr.X>=r||n==nn.Direction.dRightToLeft&&l.Curr.X<=i)break;
l=u}if(t.OutIdx>=0&&0!==t.WindDelta&&this.PrepareHorzJoins(t,e),null===t.NextInLML||!nn.ClipperBase.IsHorizontal(t.NextInLML))break;
(function(){t={Value:t};var e=this.UpdateEdgeIntoAEL(t);return t=t.Value,e}).call(this),t.OutIdx>=0&&this.AddOutPt(t,t.Bot),function(){n={Value:n},i={Value:i},r={Value:r};
var e=this.GetHorzDirection(t,n,i,r);return n=n.Value,i=i.Value,r=r.Value,e}.call(this)
}if(null!==t.NextInLML)if(t.OutIdx>=0){var h=this.AddOutPt(t,t.Top);if(function(){t={Value:t};
var e=this.UpdateEdgeIntoAEL(t);return t=t.Value,e}.call(this),0===t.WindDelta)return;
var d=t.PrevInAEL,u=t.NextInAEL;if(null!==d&&d.Curr.X==t.Bot.X&&d.Curr.Y==t.Bot.Y&&0!==d.WindDelta&&d.OutIdx>=0&&d.Curr.Y>d.Top.Y&&nn.ClipperBase.SlopesEqual(t,d,this.m_UseFullRange)){var p=this.AddOutPt(d,t.Bot);
this.AddJoin(h,p,t.Top)}else if(null!==u&&u.Curr.X==t.Bot.X&&u.Curr.Y==t.Bot.Y&&0!==u.WindDelta&&u.OutIdx>=0&&u.Curr.Y>u.Top.Y&&nn.ClipperBase.SlopesEqual(t,u,this.m_UseFullRange)){var p=this.AddOutPt(u,t.Bot);
this.AddJoin(h,p,t.Top)}}else(function(){t={Value:t};var e=this.UpdateEdgeIntoAEL(t);
return t=t.Value,e}).call(this);else null!==s?s.OutIdx>=0?(n==nn.Direction.dLeftToRight?this.IntersectEdges(t,s,t.Top,!1):this.IntersectEdges(s,t,t.Top,!1),s.OutIdx>=0&&nn.Error("ProcessHorizontal error")):(this.DeleteFromAEL(t),this.DeleteFromAEL(s)):(t.OutIdx>=0&&this.AddOutPt(t,t.Top),this.DeleteFromAEL(t))
},nn.Clipper.prototype.GetNextInAEL=function(t,e){return e==nn.Direction.dLeftToRight?t.NextInAEL:t.PrevInAEL
},nn.Clipper.prototype.IsMinima=function(t){return null!==t&&t.Prev.NextInLML!=t&&t.Next.NextInLML!=t
},nn.Clipper.prototype.IsMaxima=function(t,e){return null!==t&&t.Top.Y==e&&null===t.NextInLML
},nn.Clipper.prototype.IsIntermediate=function(t,e){return t.Top.Y==e&&null!==t.NextInLML
},nn.Clipper.prototype.GetMaximaPair=function(t){var e=null;return nn.IntPoint.op_Equality(t.Next.Top,t.Top)&&null===t.Next.NextInLML?e=t.Next:nn.IntPoint.op_Equality(t.Prev.Top,t.Top)&&null===t.Prev.NextInLML&&(e=t.Prev),null===e||-2!=e.OutIdx&&(e.NextInAEL!=e.PrevInAEL||nn.ClipperBase.IsHorizontal(e))?e:null
},nn.Clipper.prototype.ProcessIntersections=function(t,e){if(null==this.m_ActiveEdges)return!0;
try{if(this.BuildIntersectList(t,e),0==this.m_IntersectList.length)return!0;if(1!=this.m_IntersectList.length&&!this.FixupIntersectionOrder())return!1;
this.ProcessIntersectList()}catch(n){this.m_SortedEdges=null,this.m_IntersectList.length=0,nn.Error("ProcessIntersections error")
}return this.m_SortedEdges=null,!0},nn.Clipper.prototype.BuildIntersectList=function(t,e){if(null!==this.m_ActiveEdges){var n=this.m_ActiveEdges;
for(this.m_SortedEdges=n;null!==n;)n.PrevInSEL=n.PrevInAEL,n.NextInSEL=n.NextInAEL,n.Curr.X=nn.Clipper.TopX(n,e),n=n.NextInAEL;
for(var i=!0;i&&null!==this.m_SortedEdges;){for(i=!1,n=this.m_SortedEdges;null!==n.NextInSEL;){var r,o=n.NextInSEL;
if(n.Curr.X>o.Curr.X){!function(){r={Value:r};var t=this.IntersectPoint(n,o,r);return r=r.Value,t
}.call(this)&&n.Curr.X>o.Curr.X+1&&nn.Error("Intersection error"),r.Y>t&&(r.Y=t,r.X=Math.abs(n.Dx)>Math.abs(o.Dx)?nn.Clipper.TopX(o,t):nn.Clipper.TopX(n,t));
var s=new nn.IntersectNode;s.Edge1=n,s.Edge2=o,s.Pt.X=r.X,s.Pt.Y=r.Y,this.m_IntersectList.push(s),this.SwapPositionsInSEL(n,o),i=!0
}else n=o}if(null===n.PrevInSEL)break;n.PrevInSEL.NextInSEL=null}this.m_SortedEdges=null
}},nn.Clipper.prototype.EdgesAdjacent=function(t){return t.Edge1.NextInSEL==t.Edge2||t.Edge1.PrevInSEL==t.Edge2
},nn.Clipper.IntersectNodeSort=function(t,e){return e.Pt.Y-t.Pt.Y},nn.Clipper.prototype.FixupIntersectionOrder=function(){this.m_IntersectList.sort(this.m_IntersectNodeComparer),this.CopyAELToSEL();
for(var t=this.m_IntersectList.length,e=0;t>e;e++){if(!this.EdgesAdjacent(this.m_IntersectList[e])){for(var n=e+1;t>n&&!this.EdgesAdjacent(this.m_IntersectList[n]);)n++;
if(n==t)return!1;var i=this.m_IntersectList[e];this.m_IntersectList[e]=this.m_IntersectList[n],this.m_IntersectList[n]=i
}this.SwapPositionsInSEL(this.m_IntersectList[e].Edge1,this.m_IntersectList[e].Edge2)
}return!0},nn.Clipper.prototype.ProcessIntersectList=function(){for(var t=0,e=this.m_IntersectList.length;e>t;t++){var n=this.m_IntersectList[t];
this.IntersectEdges(n.Edge1,n.Edge2,n.Pt,!0),this.SwapPositionsInAEL(n.Edge1,n.Edge2)
}this.m_IntersectList.length=0};var xn=function(t){return 0>t?Math.ceil(t-.5):Math.round(t)
},_n=function(t){return 0>t?Math.ceil(t-.5):Math.floor(t+.5)},Sn=function(t){return 0>t?-Math.round(Math.abs(t)):Math.round(t)
},wn=function(t){return 0>t?(t-=.5,-2147483648>t?Math.ceil(t):0|t):(t+=.5,t>2147483647?Math.floor(t):0|t)
};nn.Clipper.Round=an.msie?xn:an.chromium?Sn:an.safari?wn:_n,nn.Clipper.TopX=function(t,e){return e==t.Top.Y?t.Top.X:t.Bot.X+nn.Clipper.Round(t.Dx*(e-t.Bot.Y))
},nn.Clipper.prototype.IntersectPoint=function(t,e,n){n.Value=new nn.IntPoint;var i,r;
if(nn.ClipperBase.SlopesEqual(t,e,this.m_UseFullRange)||t.Dx==e.Dx)return e.Bot.Y>t.Bot.Y?(n.Value.X=e.Bot.X,n.Value.Y=e.Bot.Y):(n.Value.X=t.Bot.X,n.Value.Y=t.Bot.Y),!1;
if(0===t.Delta.X)n.Value.X=t.Bot.X,nn.ClipperBase.IsHorizontal(e)?n.Value.Y=e.Bot.Y:(r=e.Bot.Y-e.Bot.X/e.Dx,n.Value.Y=nn.Clipper.Round(n.Value.X/e.Dx+r));
else if(0===e.Delta.X)n.Value.X=e.Bot.X,nn.ClipperBase.IsHorizontal(t)?n.Value.Y=t.Bot.Y:(i=t.Bot.Y-t.Bot.X/t.Dx,n.Value.Y=nn.Clipper.Round(n.Value.X/t.Dx+i));
else{i=t.Bot.X-t.Bot.Y*t.Dx,r=e.Bot.X-e.Bot.Y*e.Dx;var o=(r-i)/(t.Dx-e.Dx);n.Value.Y=nn.Clipper.Round(o),n.Value.X=nn.Clipper.Round(Math.abs(t.Dx)<Math.abs(e.Dx)?t.Dx*o+i:e.Dx*o+r)
}if(n.Value.Y<t.Top.Y||n.Value.Y<e.Top.Y){if(t.Top.Y>e.Top.Y)return n.Value.Y=t.Top.Y,n.Value.X=nn.Clipper.TopX(e,t.Top.Y),n.Value.X<t.Top.X;
n.Value.Y=e.Top.Y,n.Value.X=Math.abs(t.Dx)<Math.abs(e.Dx)?nn.Clipper.TopX(t,n.Value.Y):nn.Clipper.TopX(e,n.Value.Y)
}return!0},nn.Clipper.prototype.ProcessEdgesAtTopOfScanbeam=function(t){for(var e=this.m_ActiveEdges;null!==e;){var n=this.IsMaxima(e,t);
if(n){var i=this.GetMaximaPair(e);n=null===i||!nn.ClipperBase.IsHorizontal(i)}if(n){var r=e.PrevInAEL;
this.DoMaxima(e),e=null===r?this.m_ActiveEdges:r.NextInAEL}else{if(this.IsIntermediate(e,t)&&nn.ClipperBase.IsHorizontal(e.NextInLML)?(function(){e={Value:e};
var t=this.UpdateEdgeIntoAEL(e);return e=e.Value,t}.call(this),e.OutIdx>=0&&this.AddOutPt(e,e.Bot),this.AddEdgeToSEL(e)):(e.Curr.X=nn.Clipper.TopX(e,t),e.Curr.Y=t),this.StrictlySimple){var r=e.PrevInAEL;
if(e.OutIdx>=0&&0!==e.WindDelta&&null!==r&&r.OutIdx>=0&&r.Curr.X==e.Curr.X&&0!==r.WindDelta){var o=this.AddOutPt(r,e.Curr),s=this.AddOutPt(e,e.Curr);
this.AddJoin(o,s,e.Curr)}}e=e.NextInAEL}}for(this.ProcessHorizontals(!0),e=this.m_ActiveEdges;null!==e;){if(this.IsIntermediate(e,t)){var o=null;
e.OutIdx>=0&&(o=this.AddOutPt(e,e.Top)),function(){e={Value:e};var t=this.UpdateEdgeIntoAEL(e);
return e=e.Value,t}.call(this);var r=e.PrevInAEL,a=e.NextInAEL;if(null!==r&&r.Curr.X==e.Bot.X&&r.Curr.Y==e.Bot.Y&&null!==o&&r.OutIdx>=0&&r.Curr.Y>r.Top.Y&&nn.ClipperBase.SlopesEqual(e,r,this.m_UseFullRange)&&0!==e.WindDelta&&0!==r.WindDelta){var s=this.AddOutPt(r,e.Bot);
this.AddJoin(o,s,e.Top)}else if(null!==a&&a.Curr.X==e.Bot.X&&a.Curr.Y==e.Bot.Y&&null!==o&&a.OutIdx>=0&&a.Curr.Y>a.Top.Y&&nn.ClipperBase.SlopesEqual(e,a,this.m_UseFullRange)&&0!==e.WindDelta&&0!==a.WindDelta){var s=this.AddOutPt(a,e.Bot);
this.AddJoin(o,s,e.Top)}}e=e.NextInAEL}},nn.Clipper.prototype.DoMaxima=function(t){var e=this.GetMaximaPair(t);
if(null===e)return t.OutIdx>=0&&this.AddOutPt(t,t.Top),void this.DeleteFromAEL(t);
for(var n=t.NextInAEL,i=!0;null!==n&&n!=e;)this.IntersectEdges(t,n,t.Top,!0),this.SwapPositionsInAEL(t,n),n=t.NextInAEL;
-1==t.OutIdx&&-1==e.OutIdx?(this.DeleteFromAEL(t),this.DeleteFromAEL(e)):t.OutIdx>=0&&e.OutIdx>=0?this.IntersectEdges(t,e,t.Top,!1):i&&0===t.WindDelta?(t.OutIdx>=0&&(this.AddOutPt(t,t.Top),t.OutIdx=-1),this.DeleteFromAEL(t),e.OutIdx>=0&&(this.AddOutPt(e,t.Top),e.OutIdx=-1),this.DeleteFromAEL(e)):nn.Error("DoMaxima error")
},nn.Clipper.ReversePaths=function(t){for(var e=0,n=t.length;n>e;e++)t[e].reverse()
},nn.Clipper.Orientation=function(t){return nn.Clipper.Area(t)>=0},nn.Clipper.prototype.PointCount=function(t){if(null===t)return 0;
var e=0,n=t;do e++,n=n.Next;while(n!=t);return e},nn.Clipper.prototype.BuildResult=function(t){nn.Clear(t);
for(var e=0,n=this.m_PolyOuts.length;n>e;e++){var i=this.m_PolyOuts[e];if(null!==i.Pts){var r=i.Pts.Prev,o=this.PointCount(r);
if(!(2>o)){for(var s=new Array(o),a=0;o>a;a++)s[a]=r.Pt,r=r.Prev;t.push(s)}}}},nn.Clipper.prototype.BuildResult2=function(t){t.Clear();
for(var e=0,n=this.m_PolyOuts.length;n>e;e++){var i=this.m_PolyOuts[e],r=this.PointCount(i.Pts);
if(!(i.IsOpen&&2>r||!i.IsOpen&&3>r)){this.FixHoleLinkage(i);var o=new nn.PolyNode;
t.m_AllPolys.push(o),i.PolyNode=o,o.m_polygon.length=r;for(var s=i.Pts.Prev,a=0;r>a;a++)o.m_polygon[a]=s.Pt,s=s.Prev
}}for(var e=0,n=this.m_PolyOuts.length;n>e;e++){var i=this.m_PolyOuts[e];null!==i.PolyNode&&(i.IsOpen?(i.PolyNode.IsOpen=!0,t.AddChild(i.PolyNode)):null!==i.FirstLeft?i.FirstLeft.PolyNode.AddChild(i.PolyNode):t.AddChild(i.PolyNode))
}},nn.Clipper.prototype.FixupOutPolygon=function(t){var e=null;t.BottomPt=null;for(var n=t.Pts;;){if(n.Prev==n||n.Prev==n.Next)return this.DisposeOutPts(n),void(t.Pts=null);
if(nn.IntPoint.op_Equality(n.Pt,n.Next.Pt)||nn.IntPoint.op_Equality(n.Pt,n.Prev.Pt)||nn.ClipperBase.SlopesEqual(n.Prev.Pt,n.Pt,n.Next.Pt,this.m_UseFullRange)&&(!this.PreserveCollinear||!this.Pt2IsBetweenPt1AndPt3(n.Prev.Pt,n.Pt,n.Next.Pt))){e=null;
var i=n;n.Prev.Next=n.Next,n.Next.Prev=n.Prev,n=n.Prev,i=null}else{if(n==e)break;
null===e&&(e=n),n=n.Next}}t.Pts=n},nn.Clipper.prototype.DupOutPt=function(t,e){var n=new nn.OutPt;
return n.Pt.X=t.Pt.X,n.Pt.Y=t.Pt.Y,n.Idx=t.Idx,e?(n.Next=t.Next,n.Prev=t,t.Next.Prev=n,t.Next=n):(n.Prev=t.Prev,n.Next=t,t.Prev.Next=n,t.Prev=n),n
},nn.Clipper.prototype.GetOverlap=function(t,e,n,i,r,o){return e>t?i>n?(r.Value=Math.max(t,n),o.Value=Math.min(e,i)):(r.Value=Math.max(t,i),o.Value=Math.min(e,n)):i>n?(r.Value=Math.max(e,n),o.Value=Math.min(t,i)):(r.Value=Math.max(e,i),o.Value=Math.min(t,n)),r.Value<o.Value
},nn.Clipper.prototype.JoinHorz=function(t,e,n,i,r,o){var s=t.Pt.X>e.Pt.X?nn.Direction.dRightToLeft:nn.Direction.dLeftToRight,a=n.Pt.X>i.Pt.X?nn.Direction.dRightToLeft:nn.Direction.dLeftToRight;
if(s==a)return!1;if(s==nn.Direction.dLeftToRight){for(;t.Next.Pt.X<=r.X&&t.Next.Pt.X>=t.Pt.X&&t.Next.Pt.Y==r.Y;)t=t.Next;
o&&t.Pt.X!=r.X&&(t=t.Next),e=this.DupOutPt(t,!o),nn.IntPoint.op_Inequality(e.Pt,r)&&(t=e,t.Pt.X=r.X,t.Pt.Y=r.Y,e=this.DupOutPt(t,!o))
}else{for(;t.Next.Pt.X>=r.X&&t.Next.Pt.X<=t.Pt.X&&t.Next.Pt.Y==r.Y;)t=t.Next;o||t.Pt.X==r.X||(t=t.Next),e=this.DupOutPt(t,o),nn.IntPoint.op_Inequality(e.Pt,r)&&(t=e,t.Pt.X=r.X,t.Pt.Y=r.Y,e=this.DupOutPt(t,o))
}if(a==nn.Direction.dLeftToRight){for(;n.Next.Pt.X<=r.X&&n.Next.Pt.X>=n.Pt.X&&n.Next.Pt.Y==r.Y;)n=n.Next;
o&&n.Pt.X!=r.X&&(n=n.Next),i=this.DupOutPt(n,!o),nn.IntPoint.op_Inequality(i.Pt,r)&&(n=i,n.Pt.X=r.X,n.Pt.Y=r.Y,i=this.DupOutPt(n,!o))
}else{for(;n.Next.Pt.X>=r.X&&n.Next.Pt.X<=n.Pt.X&&n.Next.Pt.Y==r.Y;)n=n.Next;o||n.Pt.X==r.X||(n=n.Next),i=this.DupOutPt(n,o),nn.IntPoint.op_Inequality(i.Pt,r)&&(n=i,n.Pt.X=r.X,n.Pt.Y=r.Y,i=this.DupOutPt(n,o))
}return s==nn.Direction.dLeftToRight==o?(t.Prev=n,n.Next=t,e.Next=i,i.Prev=e):(t.Next=n,n.Prev=t,e.Prev=i,i.Next=e),!0
},nn.Clipper.prototype.JoinPoints=function(t,e,n){var i,r,o=this.GetOutRec(t.OutPt1.Idx),s=this.GetOutRec(t.OutPt2.Idx),a=t.OutPt1,l=t.OutPt2;
e.Value=null,n.Value=null;var u=t.OutPt1.Pt.Y==t.OffPt.Y;if(u&&nn.IntPoint.op_Equality(t.OffPt,t.OutPt1.Pt)&&nn.IntPoint.op_Equality(t.OffPt,t.OutPt2.Pt)){for(i=t.OutPt1.Next;i!=a&&nn.IntPoint.op_Equality(i.Pt,t.OffPt);)i=i.Next;
var c=i.Pt.Y>t.OffPt.Y;for(r=t.OutPt2.Next;r!=l&&nn.IntPoint.op_Equality(r.Pt,t.OffPt);)r=r.Next;
var h=r.Pt.Y>t.OffPt.Y;return c==h?!1:c?(i=this.DupOutPt(a,!1),r=this.DupOutPt(l,!0),a.Prev=l,l.Next=a,i.Next=r,r.Prev=i,e.Value=a,n.Value=i,!0):(i=this.DupOutPt(a,!0),r=this.DupOutPt(l,!1),a.Next=l,l.Prev=a,i.Prev=r,r.Next=i,e.Value=a,n.Value=i,!0)
}if(u){for(i=a;a.Prev.Pt.Y==a.Pt.Y&&a.Prev!=i&&a.Prev!=l;)a=a.Prev;for(;i.Next.Pt.Y==i.Pt.Y&&i.Next!=a&&i.Next!=l;)i=i.Next;
if(i.Next==a||i.Next==l)return!1;for(r=l;l.Prev.Pt.Y==l.Pt.Y&&l.Prev!=r&&l.Prev!=i;)l=l.Prev;
for(;r.Next.Pt.Y==r.Pt.Y&&r.Next!=l&&r.Next!=a;)r=r.Next;if(r.Next==l||r.Next==a)return!1;
var d,p;if(!function(){d={Value:d},p={Value:p};var t=this.GetOverlap(a.Pt.X,i.Pt.X,l.Pt.X,r.Pt.X,d,p);
return d=d.Value,p=p.Value,t}.call(this))return!1;var m,f=new nn.IntPoint;return a.Pt.X>=d&&a.Pt.X<=p?(f.X=a.Pt.X,f.Y=a.Pt.Y,m=a.Pt.X>i.Pt.X):l.Pt.X>=d&&l.Pt.X<=p?(f.X=l.Pt.X,f.Y=l.Pt.Y,m=l.Pt.X>r.Pt.X):i.Pt.X>=d&&i.Pt.X<=p?(f.X=i.Pt.X,f.Y=i.Pt.Y,m=i.Pt.X>a.Pt.X):(f.X=r.Pt.X,f.Y=r.Pt.Y,m=r.Pt.X>l.Pt.X),e.Value=a,n.Value=l,this.JoinHorz(a,i,l,r,f,m)
}for(i=a.Next;nn.IntPoint.op_Equality(i.Pt,a.Pt)&&i!=a;)i=i.Next;var g=i.Pt.Y>a.Pt.Y||!nn.ClipperBase.SlopesEqual(a.Pt,i.Pt,t.OffPt,this.m_UseFullRange);
if(g){for(i=a.Prev;nn.IntPoint.op_Equality(i.Pt,a.Pt)&&i!=a;)i=i.Prev;if(i.Pt.Y>a.Pt.Y||!nn.ClipperBase.SlopesEqual(a.Pt,i.Pt,t.OffPt,this.m_UseFullRange))return!1
}for(r=l.Next;nn.IntPoint.op_Equality(r.Pt,l.Pt)&&r!=l;)r=r.Next;var v=r.Pt.Y>l.Pt.Y||!nn.ClipperBase.SlopesEqual(l.Pt,r.Pt,t.OffPt,this.m_UseFullRange);
if(v){for(r=l.Prev;nn.IntPoint.op_Equality(r.Pt,l.Pt)&&r!=l;)r=r.Prev;if(r.Pt.Y>l.Pt.Y||!nn.ClipperBase.SlopesEqual(l.Pt,r.Pt,t.OffPt,this.m_UseFullRange))return!1
}return i==a||r==l||i==r||o==s&&g==v?!1:g?(i=this.DupOutPt(a,!1),r=this.DupOutPt(l,!0),a.Prev=l,l.Next=a,i.Next=r,r.Prev=i,e.Value=a,n.Value=i,!0):(i=this.DupOutPt(a,!0),r=this.DupOutPt(l,!1),a.Next=l,l.Prev=a,i.Prev=r,r.Next=i,e.Value=a,n.Value=i,!0)
},nn.Clipper.GetBounds=function(t){for(var e=0,n=t.length;n>e&&0==t[e].length;)e++;
if(e==n)return new nn.IntRect(0,0,0,0);var i=new nn.IntRect;for(i.left=t[e][0].X,i.right=i.left,i.top=t[e][0].Y,i.bottom=i.top;n>e;e++)for(var r=0,o=t[e].length;o>r;r++)t[e][r].X<i.left?i.left=t[e][r].X:t[e][r].X>i.right&&(i.right=t[e][r].X),t[e][r].Y<i.top?i.top=t[e][r].Y:t[e][r].Y>i.bottom&&(i.bottom=t[e][r].Y);
return i},nn.Clipper.prototype.GetBounds2=function(t){var e=t,n=new nn.IntRect;for(n.left=t.Pt.X,n.right=t.Pt.X,n.top=t.Pt.Y,n.bottom=t.Pt.Y,t=t.Next;t!=e;)t.Pt.X<n.left&&(n.left=t.Pt.X),t.Pt.X>n.right&&(n.right=t.Pt.X),t.Pt.Y<n.top&&(n.top=t.Pt.Y),t.Pt.Y>n.bottom&&(n.bottom=t.Pt.Y),t=t.Next;
return n},nn.ClipperBase.prototype.PointInPolygon=nn.Clipper.prototype.PointInPolygon=function(){var t=arguments,e=t.length;
if(2==e){for(var n=t[0],i=t[1],r=0,o=i;;){var s=i.Pt.X,a=i.Pt.Y,l=i.Next.Pt.X,u=i.Next.Pt.Y;
if(u==n.Y&&(l==n.X||a==n.Y&&l>n.X==s<n.X))return-1;if(a<n.Y!=u<n.Y)if(s>=n.X)if(l>n.X)r=1-r;
else{var c=(s-n.X)*(u-n.Y)-(l-n.X)*(a-n.Y);if(0==c)return-1;c>0==u>a&&(r=1-r)}else if(l>n.X){var c=(s-n.X)*(u-n.Y)-(l-n.X)*(a-n.Y);
if(0==c)return-1;c>0==u>a&&(r=1-r)}if(i=i.Next,o==i)break}return r}if(3==e){var n=t[0],h=t[1],d=t[2],p=h,r=!1;
if(d){do p.Pt.Y>n.Y!=p.Prev.Pt.Y>n.Y&&bn.op_LessThan(new bn(n.X-p.Pt.X),bn.op_Division(bn.Int128Mul(p.Prev.Pt.X-p.Pt.X,n.Y-p.Pt.Y),new bn(p.Prev.Pt.Y-p.Pt.Y)))&&(r=!r),p=p.Next;
while(p!=h)}else do p.Pt.Y>n.Y!=p.Prev.Pt.Y>n.Y&&n.X-p.Pt.X<(p.Prev.Pt.X-p.Pt.X)*(n.Y-p.Pt.Y)/(p.Prev.Pt.Y-p.Pt.Y)&&(r=!r),p=p.Next;
while(p!=h);return r}},nn.Clipper.prototype.Poly2ContainsPoly1=function(t,e){var n=t;
do{var i=this.PointInPolygon(n.Pt,e);if(i>=0)return 0!=i;n=n.Next}while(n!=t);return!0
},nn.Clipper.prototype.FixupFirstLefts1=function(t,e){for(var n=0,i=this.m_PolyOuts.length;i>n;n++){var r=this.m_PolyOuts[n];
null!==r.Pts&&r.FirstLeft==t&&this.Poly2ContainsPoly1(r.Pts,e.Pts)&&(r.FirstLeft=e)
}},nn.Clipper.prototype.FixupFirstLefts2=function(t,e){for(var n=0,i=this.m_PolyOuts,r=i.length,o=i[n];r>n;n++,o=i[n])o.FirstLeft==t&&(o.FirstLeft=e)
},nn.Clipper.ParseFirstLeft=function(t){for(;null!=t&&null==t.Pts;)t=t.FirstLeft;
return t},nn.Clipper.prototype.JoinCommonEdges=function(){for(var t=0,e=this.m_Joins.length;e>t;t++){var n=this.m_Joins[t],i=this.GetOutRec(n.OutPt1.Idx),r=this.GetOutRec(n.OutPt2.Idx);
if(null!=i.Pts&&null!=r.Pts){var o;o=i==r?i:this.Param1RightOfParam2(i,r)?r:this.Param1RightOfParam2(r,i)?i:this.GetLowermostRec(i,r);
var s,a;if(function(){var t={Value:s},e={Value:a},i=this.JoinPoints(n,t,e);return s=t.Value,a=e.Value,i
}.call(this))if(i==r){if(i.Pts=s,i.BottomPt=null,r=this.CreateOutRec(),r.Pts=a,this.UpdateOutPtIdxs(r),this.m_UsingPolyTree)for(var l=0,u=this.m_PolyOuts.length;u-1>l;l++){var c=this.m_PolyOuts[l];
null!=c.Pts&&nn.Clipper.ParseFirstLeft(c.FirstLeft)==i&&c.IsHole!=i.IsHole&&this.Poly2ContainsPoly1(c.Pts,a)&&(c.FirstLeft=r)
}this.Poly2ContainsPoly1(r.Pts,i.Pts)?(r.IsHole=!i.IsHole,r.FirstLeft=i,this.m_UsingPolyTree&&this.FixupFirstLefts2(r,i),(r.IsHole^this.ReverseSolution)==this.Area(r)>0&&this.ReversePolyPtLinks(r.Pts)):this.Poly2ContainsPoly1(i.Pts,r.Pts)?(r.IsHole=i.IsHole,i.IsHole=!r.IsHole,r.FirstLeft=i.FirstLeft,i.FirstLeft=r,this.m_UsingPolyTree&&this.FixupFirstLefts2(i,r),(i.IsHole^this.ReverseSolution)==this.Area(i)>0&&this.ReversePolyPtLinks(i.Pts)):(r.IsHole=i.IsHole,r.FirstLeft=i.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(i,r))
}else r.Pts=null,r.BottomPt=null,r.Idx=i.Idx,i.IsHole=o.IsHole,o==r&&(i.FirstLeft=r.FirstLeft),r.FirstLeft=i,this.m_UsingPolyTree&&this.FixupFirstLefts2(r,i)
}}},nn.Clipper.prototype.UpdateOutPtIdxs=function(t){var e=t.Pts;do e.Idx=t.Idx,e=e.Prev;
while(e!=t.Pts)},nn.Clipper.prototype.DoSimplePolygons=function(){for(var t=0;t<this.m_PolyOuts.length;){var e=this.m_PolyOuts[t++],n=e.Pts;
if(null!==n)do{for(var i=n.Next;i!=e.Pts;){if(nn.IntPoint.op_Equality(n.Pt,i.Pt)&&i.Next!=n&&i.Prev!=n){var r=n.Prev,o=i.Prev;
n.Prev=o,o.Next=n,i.Prev=r,r.Next=i,e.Pts=n;var s=this.CreateOutRec();s.Pts=i,this.UpdateOutPtIdxs(s),this.Poly2ContainsPoly1(s.Pts,e.Pts)?(s.IsHole=!e.IsHole,s.FirstLeft=e):this.Poly2ContainsPoly1(e.Pts,s.Pts)?(s.IsHole=e.IsHole,e.IsHole=!s.IsHole,s.FirstLeft=e.FirstLeft,e.FirstLeft=s):(s.IsHole=e.IsHole,s.FirstLeft=e.FirstLeft),i=n
}i=i.Next}n=n.Next}while(n!=e.Pts)}},nn.Clipper.Area=function(t){var e=t.length;if(3>e)return 0;
for(var n=0,i=0,r=e-1;e>i;++i)n+=(t[r].X+t[i].X)*(t[r].Y-t[i].Y),r=i;return.5*-n},nn.Clipper.prototype.Area=function(t){var e=t.Pts;
if(null==e)return 0;var n=0;do n+=(e.Prev.Pt.X+e.Pt.X)*(e.Prev.Pt.Y-e.Pt.Y),e=e.Next;
while(e!=t.Pts);return.5*n},en&&(nn.Clipper.OffsetPaths=function(t,e,n,i,r){var o=new nn.Paths,s=new nn.ClipperOffset(r,r);
return s.AddPaths(t,n,i),s.Execute(o,e),o}),nn.Clipper.SimplifyPolygon=function(t,e){var n=new Array,i=new nn.Clipper(0);
return i.StrictlySimple=!0,i.AddPath(t,nn.PolyType.ptSubject,!0),i.Execute(nn.ClipType.ctUnion,n,e,e),n
},nn.Clipper.SimplifyPolygons=function(t,e){"undefined"==typeof e&&(e=nn.PolyFillType.pftEvenOdd);
var n=new Array,i=new nn.Clipper(0);return i.StrictlySimple=!0,i.AddPaths(t,nn.PolyType.ptSubject,!0),i.Execute(nn.ClipType.ctUnion,n,e,e),n
},nn.Clipper.DistanceSqrd=function(t,e){var n=t.X-e.X,i=t.Y-e.Y;return n*n+i*i},nn.Clipper.DistanceFromLineSqrd=function(t,e,n){var i=e.Y-n.Y,r=n.X-e.X,o=i*e.X+r*e.Y;
return o=i*t.X+r*t.Y-o,o*o/(i*i+r*r)},nn.Clipper.SlopesNearCollinear=function(t,e,n,i){return DistanceFromLineSqrd(e,t,n)<i
},nn.Clipper.PointsAreClose=function(t,e,n){var i=t.X-e.X,r=t.Y-e.Y;return n>=i*i+r*r
},nn.Clipper.ExcludeOp=function(t){var e=t.Prev;return e.Next=t.Next,t.Next.Prev=e,e.Idx=0,e
},nn.Clipper.CleanPolygon=function(t,e){"undefined"==typeof e&&(e=1.415);var n=t.length;
if(0==n)return new Array;for(var i=new Array(n),r=0;n>r;++r)i[r]=new nn.OutPt;for(var r=0;n>r;++r)i[r].Pt=t[r],i[r].Next=i[(r+1)%n],i[r].Next.Prev=i[r],i[r].Idx=0;
for(var o=e*e,s=i[0];0==s.Idx&&s.Next!=s.Prev;)nn.Clipper.PointsAreClose(s.Pt,s.Prev.Pt,o)?(s=nn.Clipper.ExcludeOp(s),n--):nn.Clipper.PointsAreClose(s.Prev.Pt,s.Next.Pt,o)?(nn.Clipper.ExcludeOp(s.Next),s=nn.Clipper.ExcludeOp(s),n-=2):nn.Clipper.SlopesNearCollinear(s.Prev.Pt,s.Pt,s.Next.Pt,o)?(s=nn.Clipper.ExcludeOp(s),n--):(s.Idx=1,s=s.Next);
3>n&&(n=0);for(var a=new Array(n),r=0;n>r;++r)a[r]=new nn.IntPoint(s.Pt),s=s.Next;
return i=null,a},nn.Clipper.CleanPolygons=function(t,e){for(var n=new Array(t.length),i=0,r=t.length;r>i;i++)n[i]=nn.Clipper.CleanPolygon(t[i],e);
return n},nn.Clipper.Minkowski=function(t,e,n,i){var r=i?1:0,o=t.length,s=e.length,a=new Array;
if(n)for(var l=0;s>l;l++){for(var u=new Array(o),c=0,h=t.length,d=t[c];h>c;c++,d=t[c])u[c]=new nn.IntPoint(e[l].X+d.X,e[l].Y+d.Y);
a.push(u)}else for(var l=0;s>l;l++){for(var u=new Array(o),c=0,h=t.length,d=t[c];h>c;c++,d=t[c])u[c]=new nn.IntPoint(e[l].X-d.X,e[l].Y-d.Y);
a.push(u)}for(var p=new Array,l=0;s-2+r>=l;l++)for(var c=0;o-1>=c;c++){var m=new Array;
m.push(a[l%s][c%o]),m.push(a[(l+1)%s][c%o]),m.push(a[(l+1)%s][(c+1)%o]),m.push(a[l%s][(c+1)%o]),nn.Clipper.Orientation(m)||m.reverse(),p.push(m)
}var f=new nn.Clipper(0);return f.AddPaths(p,nn.PolyType.ptSubject,!0),f.Execute(nn.ClipType.ctUnion,a,nn.PolyFillType.pftNonZero,nn.PolyFillType.pftNonZero),a
},nn.Clipper.MinkowskiSum=function(t,e,n){return nn.Clipper.Minkowski(t,e,!0,n)},nn.Clipper.MinkowskiDiff=function(t,e,n){return nn.Clipper.Minkowski(t,e,!1,n)
},nn.Clipper.PolyTreeToPaths=function(t){var e=new Array;return nn.Clipper.AddPolyNodeToPaths(t,nn.Clipper.NodeType.ntAny,e),e
},nn.Clipper.AddPolyNodeToPaths=function(t,e,n){var i=!0;switch(e){case nn.Clipper.NodeType.ntOpen:return;
case nn.Clipper.NodeType.ntClosed:i=!t.IsOpen}t.m_polygon.length>0&&i&&n.push(t.m_polygon);
for(var r=0,o=t.Childs(),s=o.length,a=o[r];s>r;r++,a=o[r])nn.Clipper.AddPolyNodeToPaths(a,e,n)
},nn.Clipper.OpenPathsFromPolyTree=function(t){for(var e=new nn.Paths,n=0,i=t.ChildCount();i>n;n++)t.Childs()[n].IsOpen&&e.push(t.Childs()[n].m_polygon);
return e},nn.Clipper.ClosedPathsFromPolyTree=function(t){var e=new nn.Paths;return nn.Clipper.AddPolyNodeToPaths(t,nn.Clipper.NodeType.ntClosed,e),e
},yn(nn.Clipper,nn.ClipperBase),nn.Clipper.NodeType={ntAny:0,ntOpen:1,ntClosed:2},nn.ClipperOffset=function(t,e){"undefined"==typeof t&&(t=2),"undefined"==typeof e&&(e=nn.ClipperOffset.def_arc_tolerance),this.m_destPolys=new nn.Paths,this.m_srcPoly=new nn.Path,this.m_destPoly=new nn.Path,this.m_normals=new Array,this.m_delta=0,this.m_sinA=0,this.m_sin=0,this.m_cos=0,this.m_miterLim=0,this.m_StepsPerRad=0,this.m_lowest=new nn.IntPoint,this.m_polyNodes=new nn.PolyNode,this.MiterLimit=t,this.ArcTolerance=e,this.m_lowest.X=-1
},nn.ClipperOffset.two_pi=6.28318530717959,nn.ClipperOffset.def_arc_tolerance=.25,nn.ClipperOffset.prototype.Clear=function(){nn.Clear(this.m_polyNodes.Childs()),this.m_lowest.X=-1
},nn.ClipperOffset.Round=nn.Clipper.Round,nn.ClipperOffset.prototype.AddPath=function(t,e,n){var i=t.length-1;
if(!(0>i)){var r=new nn.PolyNode;if(r.m_jointype=e,r.m_endtype=n,n==nn.EndType.etClosedLine||n==nn.EndType.etClosedPolygon)for(;i>0&&nn.IntPoint.op_Equality(t[0],t[i]);)i--;
r.m_polygon.push(t[0]);for(var o=0,s=0,a=1;i>=a;a++)nn.IntPoint.op_Inequality(r.m_polygon[o],t[a])&&(o++,r.m_polygon.push(t[a]),(t[a].Y>r.m_polygon[s].Y||t[a].Y==r.m_polygon[s].Y&&t[a].X<r.m_polygon[s].X)&&(s=o));
if(!(n==nn.EndType.etClosedPolygon&&2>o||n!=nn.EndType.etClosedPolygon&&0>o)&&(this.m_polyNodes.AddChild(r),n==nn.EndType.etClosedPolygon))if(this.m_lowest.X<0)this.m_lowest=new nn.IntPoint(0,s);
else{var l=this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon[this.m_lowest.Y];
(r.m_polygon[s].Y>l.Y||r.m_polygon[s].Y==l.Y&&r.m_polygon[s].X<l.X)&&(this.m_lowest=new nn.IntPoint(this.m_polyNodes.ChildCount()-1,s))
}}},nn.ClipperOffset.prototype.AddPaths=function(t,e,n){for(var i=0,r=t.length;r>i;i++)this.AddPath(t[i],e,n)
},nn.ClipperOffset.prototype.FixOrientations=function(){if(this.m_lowest.X>=0&&!nn.Clipper.Orientation(this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon))for(var t=0;t<this.m_polyNodes.ChildCount();t++){var e=this.m_polyNodes.Childs()[t];
(e.m_endtype==nn.EndType.etClosedPolygon||e.m_endtype==nn.EndType.etClosedLine&&nn.Clipper.Orientation(e.m_polygon))&&e.m_polygon.reverse()
}else for(var t=0;t<this.m_polyNodes.ChildCount();t++){var e=this.m_polyNodes.Childs()[t];
e.m_endtype!=nn.EndType.etClosedLine||nn.Clipper.Orientation(e.m_polygon)||e.m_polygon.reverse()
}},nn.ClipperOffset.GetUnitNormal=function(t,e){var n=e.X-t.X,i=e.Y-t.Y;if(0==n&&0==i)return new nn.DoublePoint(0,0);
var r=1/Math.sqrt(n*n+i*i);return n*=r,i*=r,new nn.DoublePoint(i,-n)},nn.ClipperOffset.prototype.DoOffset=function(t){if(this.m_destPolys=new Array,this.m_delta=t,nn.ClipperBase.near_zero(t))for(var e=0;e<this.m_polyNodes.ChildCount();e++){var n=this.m_polyNodes.Childs()[e];
n.m_endtype==nn.EndType.etClosedPolygon&&this.m_destPolys.push(n.m_polygon)}else{this.m_miterLim=this.MiterLimit>2?2/(this.MiterLimit*this.MiterLimit):.5;
var i;i=this.ArcTolerance<=0?nn.ClipperOffset.def_arc_tolerance:this.ArcTolerance>Math.abs(t)*nn.ClipperOffset.def_arc_tolerance?Math.abs(t)*nn.ClipperOffset.def_arc_tolerance:this.ArcTolerance;
var r=3.14159265358979/Math.acos(1-i/Math.abs(t));this.m_sin=Math.sin(nn.ClipperOffset.two_pi/r),this.m_cos=Math.cos(nn.ClipperOffset.two_pi/r),this.m_StepsPerRad=r/nn.ClipperOffset.two_pi,0>t&&(this.m_sin=-this.m_sin);
for(var e=0;e<this.m_polyNodes.ChildCount();e++){var n=this.m_polyNodes.Childs()[e];
this.m_srcPoly=n.m_polygon;var o=this.m_srcPoly.length;if(!(0==o||0>=t&&(3>o||n.m_endtype!=nn.EndType.etClosedPolygon)))if(this.m_destPoly=new Array,1!=o){this.m_normals.length=0;
for(var s=0;o-1>s;s++)this.m_normals.push(nn.ClipperOffset.GetUnitNormal(this.m_srcPoly[s],this.m_srcPoly[s+1]));
if(this.m_normals.push(n.m_endtype==nn.EndType.etClosedLine||n.m_endtype==nn.EndType.etClosedPolygon?nn.ClipperOffset.GetUnitNormal(this.m_srcPoly[o-1],this.m_srcPoly[0]):new nn.DoublePoint(this.m_normals[o-2])),n.m_endtype==nn.EndType.etClosedPolygon){for(var a=o-1,s=0;o>s;s++)a=this.OffsetPoint(s,a,n.m_jointype);
this.m_destPolys.push(this.m_destPoly)}else if(n.m_endtype==nn.EndType.etClosedLine){for(var a=o-1,s=0;o>s;s++)a=this.OffsetPoint(s,a,n.m_jointype);
this.m_destPolys.push(this.m_destPoly),this.m_destPoly=new Array;for(var l=this.m_normals[o-1],s=o-1;s>0;s--)this.m_normals[s]=new nn.DoublePoint(-this.m_normals[s-1].X,-this.m_normals[s-1].Y);
this.m_normals[0]=new nn.DoublePoint(-l.X,-l.Y),a=0;for(var s=o-1;s>=0;s--)a=this.OffsetPoint(s,a,n.m_jointype);
this.m_destPolys.push(this.m_destPoly)}else{for(var a=0,s=1;o-1>s;++s)a=this.OffsetPoint(s,a,n.m_jointype);
var u;if(n.m_endtype==nn.EndType.etOpenButt){var s=o-1;u=new nn.IntPoint(nn.ClipperOffset.Round(this.m_srcPoly[s].X+this.m_normals[s].X*t),nn.ClipperOffset.Round(this.m_srcPoly[s].Y+this.m_normals[s].Y*t)),this.m_destPoly.push(u),u=new nn.IntPoint(nn.ClipperOffset.Round(this.m_srcPoly[s].X-this.m_normals[s].X*t),nn.ClipperOffset.Round(this.m_srcPoly[s].Y-this.m_normals[s].Y*t)),this.m_destPoly.push(u)
}else{var s=o-1;a=o-2,this.m_sinA=0,this.m_normals[s]=new nn.DoublePoint(-this.m_normals[s].X,-this.m_normals[s].Y),n.m_endtype==nn.EndType.etOpenSquare?this.DoSquare(s,a):this.DoRound(s,a)
}for(var s=o-1;s>0;s--)this.m_normals[s]=new nn.DoublePoint(-this.m_normals[s-1].X,-this.m_normals[s-1].Y);
this.m_normals[0]=new nn.DoublePoint(-this.m_normals[1].X,-this.m_normals[1].Y),a=o-1;
for(var s=a-1;s>0;--s)a=this.OffsetPoint(s,a,n.m_jointype);n.m_endtype==nn.EndType.etOpenButt?(u=new nn.IntPoint(nn.ClipperOffset.Round(this.m_srcPoly[0].X-this.m_normals[0].X*t),nn.ClipperOffset.Round(this.m_srcPoly[0].Y-this.m_normals[0].Y*t)),this.m_destPoly.push(u),u=new nn.IntPoint(nn.ClipperOffset.Round(this.m_srcPoly[0].X+this.m_normals[0].X*t),nn.ClipperOffset.Round(this.m_srcPoly[0].Y+this.m_normals[0].Y*t)),this.m_destPoly.push(u)):(a=1,this.m_sinA=0,n.m_endtype==nn.EndType.etOpenSquare?this.DoSquare(0,1):this.DoRound(0,1)),this.m_destPolys.push(this.m_destPoly)
}}else{if(n.m_jointype==nn.JoinType.jtRound)for(var c=1,h=0,s=1;r>=s;s++){this.m_destPoly.push(new nn.IntPoint(nn.ClipperOffset.Round(this.m_srcPoly[0].X+c*t),nn.ClipperOffset.Round(this.m_srcPoly[0].Y+h*t)));
var d=c;c=c*this.m_cos-this.m_sin*h,h=d*this.m_sin+h*this.m_cos}else for(var c=-1,h=-1,s=0;4>s;++s)this.m_destPoly.push(new nn.IntPoint(nn.ClipperOffset.Round(this.m_srcPoly[0].X+c*t),nn.ClipperOffset.Round(this.m_srcPoly[0].Y+h*t))),0>c?c=1:0>h?h=1:c=-1;
this.m_destPolys.push(this.m_destPoly)}}}},nn.ClipperOffset.prototype.Execute=function(){var t=arguments,e=t[0]instanceof nn.PolyTree;
if(e){var n=t[0],i=t[1];n.Clear(),this.FixOrientations(),this.DoOffset(i);var r=new nn.Clipper(0);
if(r.AddPaths(this.m_destPolys,nn.PolyType.ptSubject,!0),i>0)r.Execute(nn.ClipType.ctUnion,n,nn.PolyFillType.pftPositive,nn.PolyFillType.pftPositive);
else{var o=nn.Clipper.GetBounds(this.m_destPolys),s=new nn.Path;if(s.push(new nn.IntPoint(o.left-10,o.bottom+10)),s.push(new nn.IntPoint(o.right+10,o.bottom+10)),s.push(new nn.IntPoint(o.right+10,o.top-10)),s.push(new nn.IntPoint(o.left-10,o.top-10)),r.AddPath(s,nn.PolyType.ptSubject,!0),r.ReverseSolution=!0,r.Execute(nn.ClipType.ctUnion,n,nn.PolyFillType.pftNegative,nn.PolyFillType.pftNegative),1==n.ChildCount()&&n.Childs()[0].ChildCount()>0){var a=n.Childs()[0];
n.Childs()[0]=a.Childs()[0];for(var l=1;l<a.ChildCount();l++)n.AddChild(a.Childs()[l])
}else n.Clear()}}else{var n=t[0],i=t[1];nn.Clear(n),this.FixOrientations(),this.DoOffset(i);
var r=new nn.Clipper(0);if(r.AddPaths(this.m_destPolys,nn.PolyType.ptSubject,!0),i>0)r.Execute(nn.ClipType.ctUnion,n,nn.PolyFillType.pftPositive,nn.PolyFillType.pftPositive);
else{var o=nn.Clipper.GetBounds(this.m_destPolys),s=new nn.Path;s.push(new nn.IntPoint(o.left-10,o.bottom+10)),s.push(new nn.IntPoint(o.right+10,o.bottom+10)),s.push(new nn.IntPoint(o.right+10,o.top-10)),s.push(new nn.IntPoint(o.left-10,o.top-10)),r.AddPath(s,nn.PolyType.ptSubject,!0),r.ReverseSolution=!0,r.Execute(nn.ClipType.ctUnion,n,nn.PolyFillType.pftNegative,nn.PolyFillType.pftNegative),n.length>0&&n.splice(0,1)
}}},nn.ClipperOffset.prototype.OffsetPoint=function(t,e,n){if(this.m_sinA=this.m_normals[e].X*this.m_normals[t].Y-this.m_normals[t].X*this.m_normals[e].Y,this.m_sinA<5e-5&&this.m_sinA>-5e-5)return e;
if(this.m_sinA>1?this.m_sinA=1:this.m_sinA<-1&&(this.m_sinA=-1),this.m_sinA*this.m_delta<0)this.m_destPoly.push(new nn.IntPoint(nn.ClipperOffset.Round(this.m_srcPoly[t].X+this.m_normals[e].X*this.m_delta),nn.ClipperOffset.Round(this.m_srcPoly[t].Y+this.m_normals[e].Y*this.m_delta))),this.m_destPoly.push(new nn.IntPoint(this.m_srcPoly[t])),this.m_destPoly.push(new nn.IntPoint(nn.ClipperOffset.Round(this.m_srcPoly[t].X+this.m_normals[t].X*this.m_delta),nn.ClipperOffset.Round(this.m_srcPoly[t].Y+this.m_normals[t].Y*this.m_delta)));
else switch(n){case nn.JoinType.jtMiter:var i=1+(this.m_normals[t].X*this.m_normals[e].X+this.m_normals[t].Y*this.m_normals[e].Y);
i>=this.m_miterLim?this.DoMiter(t,e,i):this.DoSquare(t,e);break;case nn.JoinType.jtSquare:this.DoSquare(t,e);
break;case nn.JoinType.jtRound:this.DoRound(t,e)}return e=t},nn.ClipperOffset.prototype.DoSquare=function(t,e){var n=Math.tan(Math.atan2(this.m_sinA,this.m_normals[e].X*this.m_normals[t].X+this.m_normals[e].Y*this.m_normals[t].Y)/4);
this.m_destPoly.push(new nn.IntPoint(nn.ClipperOffset.Round(this.m_srcPoly[t].X+this.m_delta*(this.m_normals[e].X-this.m_normals[e].Y*n)),nn.ClipperOffset.Round(this.m_srcPoly[t].Y+this.m_delta*(this.m_normals[e].Y+this.m_normals[e].X*n)))),this.m_destPoly.push(new nn.IntPoint(nn.ClipperOffset.Round(this.m_srcPoly[t].X+this.m_delta*(this.m_normals[t].X+this.m_normals[t].Y*n)),nn.ClipperOffset.Round(this.m_srcPoly[t].Y+this.m_delta*(this.m_normals[t].Y-this.m_normals[t].X*n))))
},nn.ClipperOffset.prototype.DoMiter=function(t,e,n){var i=this.m_delta/n;this.m_destPoly.push(new nn.IntPoint(nn.ClipperOffset.Round(this.m_srcPoly[t].X+(this.m_normals[e].X+this.m_normals[t].X)*i),nn.ClipperOffset.Round(this.m_srcPoly[t].Y+(this.m_normals[e].Y+this.m_normals[t].Y)*i)))
},nn.ClipperOffset.prototype.DoRound=function(t,e){for(var n,i=Math.atan2(this.m_sinA,this.m_normals[e].X*this.m_normals[t].X+this.m_normals[e].Y*this.m_normals[t].Y),r=nn.Cast_Int32(nn.ClipperOffset.Round(this.m_StepsPerRad*Math.abs(i))),o=this.m_normals[e].X,s=this.m_normals[e].Y,a=0;r>a;++a)this.m_destPoly.push(new nn.IntPoint(nn.ClipperOffset.Round(this.m_srcPoly[t].X+o*this.m_delta),nn.ClipperOffset.Round(this.m_srcPoly[t].Y+s*this.m_delta))),n=o,o=o*this.m_cos-this.m_sin*s,s=n*this.m_sin+s*this.m_cos;
this.m_destPoly.push(new nn.IntPoint(nn.ClipperOffset.Round(this.m_srcPoly[t].X+this.m_normals[t].X*this.m_delta),nn.ClipperOffset.Round(this.m_srcPoly[t].Y+this.m_normals[t].Y*this.m_delta)))
},nn.Error=function(t){try{throw new Error(t)}catch(e){alert(e.message)}},nn.JS={},nn.JS.AreaOfPolygon=function(t,e){return e||(e=1),nn.Clipper.Area(t)/(e*e)
},nn.JS.AreaOfPolygons=function(t,e){e||(e=1);for(var n=0,i=0;i<t.length;i++)n+=nn.Clipper.Area(t[i]);
return n/(e*e)},nn.JS.BoundsOfPath=function(t,e){return nn.JS.BoundsOfPaths([t],e)
},nn.JS.BoundsOfPaths=function(t,e){e||(e=1);var n=nn.Clipper.GetBounds(t);return n.left/=e,n.bottom/=e,n.right/=e,n.top/=e,n
},nn.JS.Clean=function(t,e){if(!(t instanceof Array))return[];var n=t[0]instanceof Array,t=nn.JS.Clone(t);
if("number"!=typeof e||null===e)return nn.Error("Delta is not a number in Clean()."),t;
if(0===t.length||1==t.length&&0===t[0].length||0>e)return t;n||(t=[t]);for(var i,r,o,s,a,l,u,c=t.length,h=[],d=0;c>d;d++)if(r=t[d],i=r.length,0!==i)if(3>i)o=r,h.push(o);
else{for(o=r,s=e*e,a=r[0],l=1,u=1;i>u;u++)(r[u].X-a.X)*(r[u].X-a.X)+(r[u].Y-a.Y)*(r[u].Y-a.Y)<=s||(o[l]=r[u],a=r[u],l++);
a=r[l-1],(r[0].X-a.X)*(r[0].X-a.X)+(r[0].Y-a.Y)*(r[0].Y-a.Y)<=s&&l--,i>l&&o.splice(l,i-l),o.length&&h.push(o)
}return!n&&h.length?h=h[0]:n||0!==h.length?n&&0===h.length&&(h=[[]]):h=[],h},nn.JS.Clone=function(t){if(!(t instanceof Array))return[];
if(0===t.length)return[];if(1==t.length&&0===t[0].length)return[[]];var e=t[0]instanceof Array;
e||(t=[t]);var n,i,r,o,s=t.length,a=new Array(s);for(i=0;s>i;i++){for(n=t[i].length,o=new Array(n),r=0;n>r;r++)o[r]={X:t[i][r].X,Y:t[i][r].Y};
a[i]=o}return e||(a=a[0]),a},nn.JS.Lighten=function(t,e){if(!(t instanceof Array))return[];
if("number"!=typeof e||null===e)return nn.Error("Tolerance is not a number in Lighten()."),nn.JS.Clone(t);
if(0===t.length||1==t.length&&0===t[0].length||0>e)return nn.JS.Clone(t);t[0]instanceof Array||(t=[t]);
var n,i,r,o,s,a,l,u,c,h,d,p,m,f,g,v,b,y=t.length,x=e*e,_=[];for(n=0;y>n;n++)if(r=t[n],a=r.length,0!=a){for(o=0;1e6>o;o++){for(s=[],a=r.length,r[a-1].X!=r[0].X||r[a-1].Y!=r[0].Y?(p=1,r.push({X:r[0].X,Y:r[0].Y}),a=r.length):p=0,d=[],i=0;a-2>i;i++)l=r[i],c=r[i+1],u=r[i+2],v=l.X,b=l.Y,m=u.X-v,f=u.Y-b,(0!==m||0!==f)&&(g=((c.X-v)*m+(c.Y-b)*f)/(m*m+f*f),g>1?(v=u.X,b=u.Y):g>0&&(v+=m*g,b+=f*g)),m=c.X-v,f=c.Y-b,h=m*m+f*f,x>=h&&(d[i+1]=1,i++);
for(s.push({X:r[0].X,Y:r[0].Y}),i=1;a-1>i;i++)d[i]||s.push({X:r[i].X,Y:r[i].Y});if(s.push({X:r[a-1].X,Y:r[a-1].Y}),p&&r.pop(),!d.length)break;
r=s}a=s.length,s[a-1].X==s[0].X&&s[a-1].Y==s[0].Y&&s.pop(),s.length>2&&_.push(s)}return!t[0]instanceof Array&&(_=_[0]),"undefined"==typeof _&&(_=[[]]),_
},nn.JS.PerimeterOfPath=function(t,e,n){if("undefined"==typeof t)return 0;var i,r,o=Math.sqrt,s=0,a=0,l=0,u=0,c=0,h=t.length;
if(2>h)return 0;for(e&&(t[h]=t[0],h++);--h;)i=t[h],a=i.X,l=i.Y,r=t[h-1],u=r.X,c=r.Y,s+=o((a-u)*(a-u)+(l-c)*(l-c));
return e&&t.pop(),s/n},nn.JS.PerimeterOfPaths=function(t,e,n){n||(n=1);for(var i=0,r=0;r<t.length;r++)i+=nn.JS.PerimeterOfPath(t[r],e,n);
return i},nn.JS.ScaleDownPath=function(t,e){var n,i;for(e||(e=1),n=t.length;n--;)i=t[n],i.X=i.X/e,i.Y=i.Y/e
},nn.JS.ScaleDownPaths=function(t,e){{var n,i,r;Math.round}for(e||(e=1),n=t.length;n--;)for(i=t[n].length;i--;)r=t[n][i],r.X=r.X/e,r.Y=r.Y/e
},nn.JS.ScaleUpPath=function(t,e){var n,i,r=Math.round;for(e||(e=1),n=t.length;n--;)i=t[n],i.X=r(i.X*e),i.Y=r(i.Y*e)
},nn.JS.ScaleUpPaths=function(t,e){var n,i,r,o=Math.round;for(e||(e=1),n=t.length;n--;)for(i=t[n].length;i--;)r=t[n][i],r.X=o(r.X*e),r.Y=o(r.Y*e)
},nn.ExPolygons=function(){return[]},nn.ExPolygon=function(){this.outer=null,this.holes=null
},nn.JS.AddOuterPolyNodeToExPolygons=function(t,e){var n=new nn.ExPolygon;n.outer=t.Contour();
var i=t.Childs(),r=i.length;n.holes=new Array(r);var o,s,a,l,u,c;for(a=0;r>a;a++)for(o=i[a],n.holes[a]=o.Contour(),l=0,u=o.Childs(),c=u.length;c>l;l++)s=u[l],nn.JS.AddOuterPolyNodeToExPolygons(s,e);
e.push(n)},nn.JS.ExPolygonsToPaths=function(t){var e,n,i,r,o=new nn.Paths;for(e=0,i=t.length;i>e;e++)for(o.push(t[e].outer),n=0,r=t[e].holes.length;r>n;n++)o.push(t[e].holes[n]);
return o},nn.JS.PolyTreeToExPolygons=function(t){var e,n,i,r,o=new nn.ExPolygons;
for(n=0,i=t.Childs(),r=i.length;r>n;n++)e=i[n],nn.JS.AddOuterPolyNodeToExPolygons(e,o);
return o}}();var t=window.ClipperLib;return{get ClipperLib(){return t}}}),System.register("utils/array",[],function(){"use strict";
var t=function(t,e){var n=void 0!==arguments[2]?arguments[2]:!1;if(t.length!==e.length)return!1;
if(n)for(var i in t){var r=t[i];if(r!==e[i])return!1}else{for(var o=0;o<t.length;o+=1)if(!e.includes(t[o]))return!1;
for(var o=0;o<e.length;o+=1)if(!t.includes(e[o]))return!1}return!0},e=function(t,e){if(0===t.length)return!1;
for(var n=0;n<t.length;n+=1)if(t[n]!==e)return!1;return!0};return{get compare(){return t
},get includesOnly(){return e}}}),System.register("utils/artwork",[],function(){"use strict";
var t=System.get("utils/dom"),e=t.createElement,n=t.createSVGLength,i=t.createSVGRect,r=System.get("utils/gradient"),o=r.normalizeLinearGradient,s=r.normalizeRadialGradient,a=System.get("utils/path"),l=a.circleToEllipse,u=a.lineToPath,c=a.polylineToPath,h=a.polygonToPath,d=a.normalizePathData,p=System.get("utils/text").normalizeText,m=System.get("utils/constants"),f=m.PROPERTIES,g=m.DEPRACATED_ELEMENTS,v=m.XMLNS_NAMESPACE,b=m.XLINK_NAMESPACE,y=m.SVG_NAMESPACE,x=function(t){for(var n,i,r,a,m,v,b,y,x=document.createNodeIterator(t,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT);y=x.nextNode();)if("#comment"!==y.nodeName)if(y.nodeName.includes(":"))y.remove();
else if(g.includes(y.nodeName))y.remove();else if("script"!==y.nodeName&&"foreignObject"!==y.nodeName&&"title"!==y.nodeName&&"metadata"!==y.nodeName&&"switch"!==y.nodeName){"path"===y.nodeName?d(y):"circle"===y.nodeName?y.replace(l(y)):"line"===y.nodeName?y.replace(u(y)):"polyline"===y.nodeName?y.replace(c(y)):"polygon"===y.nodeName?y.replace(h(y)):"linearGradient"===y.nodeName?o(y):"radialGradient"===y.nodeName?s(y):"text"===y.nodeName&&p(y);
for(var _,S=$traceurRuntime.spread(y.attributes)[Symbol.iterator]();!(_=S.next()).done;)n=_.value,n.name.includes(":")&&"xlink:href"!==n.name?y.removeAttribute(n.name):"requiredFeatures"===n.name||"requiredExtensions"===n.name||"externalResourcesRequired"===n.name||"systemLanguage"===n.name?y.removeAttribute(n.name):n.name.startsWith("on")?y.removeAttribute(n.name):f.includes(n.name)&&(i=n.name,null===y.style.getPropertyValue(i)&&y.style.setProperty(i,y.getAttribute(i)),y.removeAttribute(n.name))
}else y.remove();else y.remove();var w=t.querySelectorAll("defs");if(0===w.length)r=e("svg:defs"),t.prepend(r);
else if(1===w.length)a=w[0],a.parentElement!==t&&t.prepend(a);else if(w.length>1){m=e("svg:defs");
for(var C,E=w[Symbol.iterator]();!(C=E.next()).done;){v=C.value;for(var P,L=$traceurRuntime.spread(v.children)[Symbol.iterator]();!(P=L.next()).done;)b=P.value,m.append(b);
v.remove()}t.prepend(m)}},_=function(t,e){var n,i,r,o,s,a,l,u,c,h,d;x(t);for(var p=[],m=[],f=document.createNodeIterator(t,NodeFilter.SHOW_ELEMENT),g=document.createNodeIterator(e,NodeFilter.SHOW_ELEMENT),v=null;v=g.nextNode();)v.id&&m.push(v.id);
for(;v=f.nextNode();)v.id&&p.push(v.id);for(var b,y=p.filter(function(t){return m.includes(t)
}),_=["fill","stroke","filter","clip-path","mask","marker-mid","marker-start","marker-end"],S=y[Symbol.iterator]();!(b=S.next()).done;){for(n=b.value,i=t.querySelector("#"+n),r="linearGradient"===i.localName||"radialGradient"===i.localName?"gradient":"clipPath"===i.localName?"path":i.localName,s=1;;){if(a=r+"-"+s,!t.querySelector("#"+a)&&!e.querySelector("#"+a)){o=a;
break}s+=1}for(l=document.createNodeIterator(t,NodeFilter.SHOW_ELEMENT),u=null;u=l.nextNode();){u.id===n&&(u.id=o),u.href&&u.href.baseVal==="#"+n&&(u.href.baseVal="#"+o);
for(var w,C=_[Symbol.iterator]();!(w=C.next()).done;)c=w.value,h=u.style.getPropertyValue(c),h&&h.startsWith("url(")&&(d=h.substring(5,h.length-1),d===n&&u.style.setProperty(c,"url(#"+o+")"))
}}},S=function(t){var e,n,i,r,o,s,a,l,u=void 0!==arguments[1]?arguments[1]:"xml";
if("xml"===u){for(t=t.cloneNode(!0),e=!1,i=document.createNodeIterator(t,NodeFilter.SHOW_ELEMENT);n=i.nextNode();)for(var c,h=$traceurRuntime.spread(n.attributes)[Symbol.iterator]();!(c=h.next()).done;)if(r=c.value,r.nodeName.startsWith("xlink:")){e=!0;
break}t.setAttributeNS(v,"xmlns",y),e&&t.setAttributeNS(v,"xmlns:xlink",b),o=new XMLSerializer,s='<?xml version="1.0" encoding="utf-8"?>\n',l=s+o.serializeToString(t)
}else"html"===u&&(a="<!doctype html>\n",l=a+t.outerHTML,l=l.replaceAll(' xmlns:xlink="http://www.w3.org/1999/xlink"',""));
return l},w=function(t){var e=new DOMParser,n=e.parseFromString(t,"text/html"),i=n.querySelector("svg");
return i=document.importNode(i,!0)},C=function(t,n){var i=S(t,"xml"),r=e("canvas"),o=r.getContext("2d"),s=new Blob([i],{type:"image/svg+xml;charset=utf-8"}),a=URL.createObjectURL(s),l=new Image;
l.src=a,l.addEventListener("load",function(){r.width=l.naturalWidth,r.height=l.naturalHeight,o.drawImage(l,0,0);
var t=r.toDataURL("image/png");n&&n(t),URL.revokeObjectURL(a)})},E=function(t){var e,n,i={1:null,2:"%",3:"ems",4:"exs",5:"px",6:"cm",7:"mm",8:"in",9:"pt",10:"pc"},r={width:null,height:null,widthUnit:null,heightUnit:null};
if(t.style.width){r.width=parseFloat(t.style.width);for(var o,s=["%","ems","exs","px","cm","mm","in","pt","pc"][Symbol.iterator]();!(o=s.next()).done;)e=o.value,t.style.width.endsWith(e)&&(r.widthUnit=e)
}else t.hasAttribute("width")&&(r.width=t.width.baseVal.valueInSpecifiedUnits,r.widthUnit=i[t.width.baseVal.unitType]);
if(t.style.height){r.height=parseFloat(t.style.height),r.heightUnit="";for(var a,l=["%","ems","exs","px","cm","mm","in","pt","pc"][Symbol.iterator]();!(a=l.next()).done;)n=a.value,t.style.height.endsWith(n)&&(r.heightUnit=n)
}else t.hasAttribute("height")&&(r.height=t.height.baseVal.valueInSpecifiedUnits,r.heightUnit=i[t.height.baseVal.unitType]);
return r},P=function(t){var e,r,o,s=i(0,0,0,0);return t.hasAttribute("viewBox")?(s.x=t.viewBox.baseVal.x,s.y=t.viewBox.baseVal.y,s.width=t.viewBox.baseVal.width,s.height=t.viewBox.baseVal.height):(e=E(t),null!==e.width&&"%"!==e.widthUnit&&(r=n(),r.valueAsString=e.width+(e.widthUnit||""),s.width=r.value),null!==e.height&&"%"!==e.heightUnit&&(o=n(),o.valueAsString=e.height+(e.heightUnit||""),s.height=o.value)),s
};return{get normalizeArtwork(){return x},get normalizeArtworkForInsertion(){return _
},get serializeArtwork(){return S},get deserializeArtwork(){return w},get rasterizeArtwork(){return C
},get getComputedViewport(){return E},get getComputedViewBox(){return P}}}),System.register("utils/bbox",[],function(){"use strict";
var t=System.get("utils/dom"),e=t.closest,n=t.createSVGRect,i=System.get("utils/rect").combineRects,r=System.get("utils/text").getRangeOffsetRelativeToElement,o={fill:!0,stroke:!0,marker:!0,clipped:!0},s=function(t){var s,a,l,u,c,h,d,p=void 0!==arguments[1]?arguments[1]:o;
if("tspan"===t.localName)if(s=document.createRange(),s.selectNodeContents(t),s.collapsed===!1){a=e(s.startContainer,"text"),l=r(s,a,"start"),u=r(s,a,"end"),c=[];
for(var m=l;u>m;m+=1)h=a.getExtentOfChar(m),c.push(h);d=i(c)}else d=n(0,0,0,0);else d=t.getBBox(p);
return d},a=function(t){var e=t.getBoundingClientRect();return n(e.left,e.top,e.width,e.height)
};return{get getUserBBox(){return s},get getClientBBox(){return a}}}),System.register("utils/color",[],function(){"use strict";
var t=System.get("classes/string-scanner").default,e=System.get("utils/constants").NAMED_COLORS,n=System.get("utils/math"),i=n.min,r=n.max,o=n.floor,s=n.normalize,a=n.round,l=System.get("utils/type").isNumber,u=function(t){var e,n,i,r,o,s,a,l,u,c,h=void 0!==arguments[1]?arguments[1]:"rgba",d=System.get("classes/color").default;
return"rgba"===h?(e=x(t,"rgba"),n=e.r,i=e.g,r=e.b,o=e.a,new d(n,i,r,o,"rgba")):(s=x(t,"hsla"),a=s.h,l=s.s,u=s.l,c=s.a,new d(a,l,u,c,"hsla"))
},c=function(t){try{x(t)}catch(e){return!1}return!0},h=function(t){var e;if(t=t.toLowerCase(),"#"!==t[0])return!1;
if(4!==t.length&&7!==t.length)return!1;t=t.substring(1);for(var n,i=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],r=t[Symbol.iterator]();!(n=r.next()).done;)if(e=n.value,!i.includes(e))return!1;
return!0},d=function(){return"#"+Math.floor(16777215*Math.random()).toString(16)},p=function(t,e,n){t/=360,e/=100,n/=100;
var o=t,s=(2-e)*n,a=e*n;return 1>=s?0===s?a=0:a/=s:2===s?a=0:a/=2-s,s/=2,o=360*o,a=100*r(0,i(1,a)),s=100*r(0,i(1,s)),[o,a,s]
},m=function(t,e,n){t/=360,e/=100,n=n/100*2,e*=1>=n?n:2-n;var o,s,a=t;return o=n+e===0?0:2*e/(n+e),s=(n+e)/2,a=360*a,o=100*r(0,i(1,o)),s=100*r(0,i(1,s)),[a,o,s]
},f=function(t,e,n){var i,r,o;t/=360,e/=100,n/=100;var a,l,u;return 0===e?a=l=u=n:(i=function(t,e,n){return 0>n&&(n+=1),n>1&&(n-=1),1/6>n?t+6*(e-t)*n:.5>n?e:2/3>n?t+(e-t)*(2/3-n)*6:t
},r=.5>n?n*(1+e):n+e-n*e,o=2*n-r,a=i(o,r,t+1/3),l=i(o,r,t),u=i(o,r,t-1/3)),a=s(255*a,0,255,0),l=s(255*l,0,255,0),u=s(255*u,0,255,0),[a,l,u]
},g=function(t,e,n){var o,a;t/=255,e/=255,n/=255;var l,u,c,h=r(t,e,n),d=i(t,e,n);
return l=u=c=(h+d)/2,h===d?l=u=0:(o=h-d,u=c>.5?o/(2-h-d):o/(h+d),h===t?(a=n>e?6:0,l=(e-n)/o+a):h===e?l=(n-t)/o+2:h===n&&(l=(t-e)/o+4)),l=s(l/6*360,0,360,0),u=s(100*u,0,100,1),c=s(100*c,0,100,1),[l,u,c]
},v=function(t,e,n){t/=360,e/=100,n/=100;var i=o(6*t),r=6*t-i,s=n*(1-e),a=n*(1-r*e),l=n*(1-(1-r)*e),u=0,c=0,h=0;
return i%6===0?(u=n,c=l,h=s):i%6===1?(u=a,c=n,h=s):i%6===2?(u=s,c=n,h=l):i%6===3?(u=s,c=a,h=n):i%6===4?(u=l,c=s,h=n):i%6===5&&(u=n,c=s,h=a),u=255*u,c=255*c,h=255*h,[u,c,h]
},b=function(t,e,n){t/=255,e/=255,n/=255;var o=r(t,e,n),s=i(t,e,n),a=0,l=0,u=o,c=o-s;
return l=0===o?0:c/o,o===s?a=0:(o===t?a=(e-n)/c+(n>e?6:0):o===e?a=(n-t)/c+2:o===n&&(a=(t-e)/c+4),a/=6),a=360*a,l=100*l,u=100*u,[a,l,u]
},y=function(t,e){var n=x(t),i=_(n,e);return i},x=function(t){var n,i,r,o,a,u,c,h,d,p,m,v,b,y,x,_=void 0!==arguments[1]?arguments[1]:"auto",w=S(t);
if(7===w.length&&"rgb("===w[0].text&&"NUM"===w[1].type&&","===w[2].text&&"NUM"===w[3].type&&","===w[4].text&&"NUM"===w[5].type&&")"===w[6].text?x={r:parseFloat(w[1].text),g:parseFloat(w[3].text),b:parseFloat(w[5].text),a:1}:7===w.length&&"rgb("===w[0].text&&"PERCENTAGE"===w[1].type&&","===w[2].text&&"PERCENTAGE"===w[3].type&&","===w[4].text&&"PERCENTAGE"===w[5].type&&")"===w[6].text?x={r:parseFloat(w[1].text)/100*255,g:parseFloat(w[3].text)/100*255,b:parseFloat(w[5].text)/100*255,a:1}:9===w.length&&"rgba("===w[0].text&&"NUM"===w[1].type&&","===w[2].text&&"NUM"===w[3].type&&","===w[4].text&&"NUM"===w[5].type&&","===w[6].text&&"NUM"===w[7].type&&")"===w[8].text?x={r:parseFloat(w[1].text),g:parseFloat(w[3].text),b:parseFloat(w[5].text),a:parseFloat(w[7].text)}:9===w.length&&"rgb("===w[0].text&&"PERCENTAGE"===w[1].type&&","===w[2].text&&"PERCENTAGE"===w[3].type&&","===w[4].text&&"PERCENTAGE"===w[5].type&&","===w[6].text&&"NUM"===w[7].type&&")"===w[8].text?x={r:parseFloat(w[1].text)/100*255,g:parseFloat(w[3].text)/100*255,b:parseFloat(w[5].text)/100*255,a:parseFloat(w[7].text)}:7===w.length&&"hsl("===w[0].text&&"NUM"===w[1].type&&","===w[2].text&&"PERCENTAGE"===w[3].type&&","===w[4].text&&"PERCENTAGE"===w[5].type&&")"===w[6].text?x={h:parseFloat(w[1].text),s:parseFloat(w[3].text),l:parseFloat(w[5].text),a:1}:9===w.length&&"hsla("===w[0].text&&"NUM"===w[1].type&&","===w[2].text&&"PERCENTAGE"===w[3].type&&","===w[4].text&&"PERCENTAGE"===w[5].type&&","===w[6].text&&"NUM"===w[7].type&&")"===w[8].text?x={h:parseFloat(w[1].text),s:parseFloat(w[3].text),l:parseFloat(w[5].text),a:parseFloat(w[7].text)}:"HEX"===w[0].type&&void 0===w[1]?(n=w[0].text.substring(1),3===n.length?(i=n[0]+n[0],r=n[1]+n[1],o=n[2]+n[2]):(i=n[0]+n[1],r=n[2]+n[3],o=n[4]+n[5]),x={r:parseInt(i,16),g:parseInt(r,16),b:parseInt(o,16),a:1}):e[t]&&(x={r:e[t][0],g:e[t][1],b:e[t][2],a:1}),!x)throw x=null,new Error('Invalid color string: "'+t+'"');
return l(x.r)?(x.r=s(x.r,0,255,0),x.g=s(x.g,0,255,0),x.b=s(x.b,0,255,0),x.a=s(x.a,0,1,2)):l(x.h)&&(x.h=s(x.h,0,360,0),x.s=s(x.s,0,100,1),x.l=s(x.l,0,100,1),x.a=s(x.a,0,1,2)),"rgba"===_&&l(x.h)?(a=f(x.h,x.s,x.l),u=a[0],c=a[1],h=a[2],d=x.a,x={r:u,g:c,b:h,a:d}):"hsla"===_&&l(x.r)&&(p=g(x.r,x.g,x.b),m=p[0],v=p[1],b=p[2],y=x.a,x={h:m,s:v,l:b,a:y}),x
},_=function(t){var e,n,i,r,o,u,c,h,d,p,m,v,b,y=void 0!==arguments[1]?arguments[1]:"rgba",x=null;
return["rgb","rgba","rgb%","rgba%","hex"].includes(y)?(l(t.r)?(e=t.r,n=t.g,i=t.b,r=t.a):(v=f(t.h,t.s,t.l),e=v[0],n=v[1],i=v[2],v,r=t.a),("rgb%"===y||"rgba%"===y)&&(e=a(e/255*100,1),n=a(n/255*100,1),i=a(i/255*100,1)),e=s(e,0,255,0),n=s(n,0,255,0),i=s(i,0,255,0),r=s(r,0,1,2),"rgb"===y?x="rgb("+e+", "+n+", "+i+")":"rgba"===y?x="rgba("+e+", "+n+", "+i+", "+r+")":"rgb%"===y?x="rgb("+e+"%, "+n+"%, "+i+"%)":"rgba%"===y?x="rgb("+e+"%, "+n+"%, "+i+"%, "+r+")":"hex"===y&&(o=e.toString(16),u=n.toString(16),c=i.toString(16),1===o.length&&(o="0"+o),1===u.length&&(u="0"+u),1===c.length&&(c="0"+c),x="#"+o+u+c)):("hsl"===y||"hsla"===y)&&(l(t.h)?(h=t.h,d=t.s,p=t.l,m=t.a):(b=g(t.r,t.g,t.b),h=b[0],d=b[1],p=b[2],b,m=t.a),h=s(h,0,360,0),d=s(d,0,100,1),p=s(p,0,100,1),m=s(m,0,1,2),"hsl"===y?x="hsl("+h+", "+d+"%, "+p+"%)":"hsla"===y&&(x="hsla("+h+", "+d+"%, "+p+"%, "+m+")")),x
},S=function(e){for(var n=[],i=new t(e.toLowerCase()),r=function(){var t=i.read();
!function(){var e,r,o;if(("r"===t||"h"===t)&&(e=t,t+i.peek(3)==="rgb("?e+=i.read(3):t+i.peek(4)==="rgba("?e+=i.read(4):t+i.peek(3)==="hsl("?e+=i.read(3):t+i.peek(4)==="hsla("&&(e+=i.read(4)),e!==t))return void n.push({type:"FUNCTION",text:e});
if("#"===t){if(h(t+i.peek(6)))return r=t+i.read(6),void n.push({type:"HEX",text:r});
if(h(t+i.peek(3)))return e=t+i.read(3),void n.push({type:"HEX",text:e})}if(["0","1","2","3","4","5","6","7","8","9",".","-"].includes(t)){for(o=t;;){if(!["0","1","2","3","4","5","6","7","8","9","."].includes(i.peek()))break;
o+=i.read()}return void("%"===i.peek()?(o+=i.read(),n.push({type:"PERCENTAGE",text:o})):n.push({type:"NUM",text:o}))
}/\u0009|\u000a|\u000c|\u000d|\u0020/.test(t)||n.push({type:"CHAR",text:t})}()};null!==i.peek();)r();
return n};return{get parseColor(){return u},get isValidColorString(){return c},get isHexColorString(){return h
},get generateRandomHexColorString(){return d},get hsvToHsl(){return p},get hslToHsv(){return m
},get hslToRgb(){return f},get rgbToHsl(){return g},get hsvToRgb(){return v},get rgbToHsv(){return b
},get formatColorString(){return y},get stringToColor(){return x},get colorToString(){return _
}}}),System.register("utils/constants",[],function(){"use strict";var t="http://www.w3.org/2000/svg",e="http://www.w3.org/1999/xlink",n="http://www.w3.org/1999/xhtml",i="http://www.w3.org/1998/Math/MathML",r="http://www.w3.org/2000/xmlns/",o=["a","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","metadata","path","pattern","polygon","polyline","radialGradient","rect","script","stop","style","svg","switch","symbol","text","textPath","title","tref","tspan","use","view"],s=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","menuitem","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"],a=["font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","altGlyph","altGlyphDef","altGlyphItem","glyph","glyphRef","missing-glyph","hkern","vkern","set","animate","animateColor","animateMotion","animateTransform","mpath"],l=["solidColor","linearGradient","radialGradient","meshGradient","pattern","hatch"],u=["a","defs","g","marker","mask","pattern","svg","switch","symbol"],c=["circle","ellipse","image","line","path","polygon","polyline","rect","text","use"],h=["a","g","circle","ellipse","image","line","path","polygon","polyline","rect","text","use","foreignObject"],d=["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"],p=["circle","ellipse","line","path","polygon","polyline","rect"],m=["text","textPath","tref","tspan"],f=["alignment-baseline","baseline-shift","clip-path","clip-rule","clip","color-interpolation-filters","color-interpolation","color-profile","color-rendering","color","cursor","direction","display","dominant-baseline","enable-background","fill-opacity","fill-rule","fill","filter","flood-color","flood-opacity","font-family","font-size-adjust","font-size","font-stretch","font-style","font-variant","font-weight","glyph-orientation-horizontal","glyph-orientation-vertical","image-rendering","kerning","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","mask","opacity","overflow","pointer-events","shape-rendering","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","stroke","text-anchor","text-decoration","text-rendering","unicode-bidi","vector-effect","visibility","word-spacing","writing-mode"],g={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};
return{get SVG_NAMESPACE(){return t},get XLINK_NAMESPACE(){return e},get XHTML_NAMESPACE(){return n
},get MATHML_NAMESPACE(){return i},get XMLNS_NAMESPACE(){return r},get SVG_ELEMENTS(){return o
},get HTML_ELEMENTS(){return s},get DEPRACATED_ELEMENTS(){return a},get PAINT_SERVER_ELEMENTS(){return l
},get CONTAINER_ELEMENTS(){return u},get GRAPHICS_ELEMENTS(){return c},get TRANSFORMABLE_ELEMENTS(){return h
},get FILTER_ELEMENTS(){return d},get SHAPE_ELEMENTS(){return p},get TEXT_CONTENT_ELEMENTS(){return m
},get PROPERTIES(){return f},get NAMED_COLORS(){return g}}}),System.register("utils/dom",[],function(){"use strict";
var t=System.get("utils/type").isNumber,e=System.get("utils/constants"),n=e.TRANSFORMABLE_ELEMENTS,i=e.CONTAINER_ELEMENTS,r=e.GRAPHICS_ELEMENTS,o=e.SVG_NAMESPACE,s=document.createElementNS(o,"svg"),a=function(t){var e=document.createDocumentFragment(),n=document.createElement("div");
for(n.innerHTML=t;n.firstChild;)e.append(n.firstChild);return e.children.length>1?e:1===e.children.length?e.children[0]:null
},l=function(t){var e=document.createDocumentFragment(),n=document.createElementNS(o,"svg");
for(n.innerHTML=t;n.firstChild;)e.append(n.firstChild);return e.children.length>1?e:1===e.children.length?e.children[0]:null
},u=function(t,e){var n,i,r,o=void 0!==arguments[2]?arguments[2]:null;return null===o?(n=e,document.registerElement(t,n)):(i=e,r=o,document.registerElement(i,{"extends":t,prototype:r.prototype}))
},c=function(t){var e,n,i,r,s=t.split(":"),a=null;return 1===s.length?(e=s[0],a=document.createElement(e)):2===s.length&&(n=s,i=n[0],r=n[1],"svg"===i&&(a=document.createElementNS(o,r))),a
},h=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=s.createSVGPoint(),i=t.length;
return 0===i?(n.x=0,n.y=0):1===i?(n.x=t[0].x,n.y=t[0].y):(n.x=t[0],n.y=t[1]),n},d=function(){var t=void 0!==arguments[0]?arguments[0]:0,e=s.createSVGLength();
return e.value=t,e},p=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];
var n=s.createSVGRect(),i=t.length;return 0===i?(n.x=0,n.y=0,n.width=0,n.height=0):1===i?(n.x=t[0].x,n.y=t[0].y,n.width=t[0].width,n.height=t[0].height):(n.x=t[0],n.y=t[1],n.width=t[2],n.height=t[3]),n
},m=function(){for(var e,n,i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];var o=s.createSVGMatrix(),a=i.length;
if(0===a)o.a=1,o.b=0,o.c=0,o.d=1,o.e=0,o.f=0;else if(1===a)e=i[0],t(e.a)?(o.a=e.a,o.b=e.b,o.c=e.c,o.d=e.d,o.e=e.e,o.f=e.f):e instanceof Array&&(o.a=e[0],o.b=e[1],o.c=e[2],o.d=e[3],o.e=e[4],o.f=e[5]);
else{if(6!==a)throw new Error("Invalid number of arguments");n=i,o.a=n[0],o.b=n[1],o.c=n[2],o.d=n[3],o.e=n[4],o.f=n[5]
}return o},f=function(){var t,e=void 0!==arguments[0]?arguments[0]:null;return t=e?s.createSVGTransformFromMatrix(e):s.createSVGTransform()
},g=function(t){for(var e,n=document.createNodeIterator(t,NodeFilter.SHOW_TEXT,null),i={text:!0,textPath:!0,tspan:!0};e=n.nextNode();)i[e.parentElement.localName]||_(e.textContent)&&e.remove()
},v=function(t){var e=void 0!==arguments[1]?arguments[1]:2;g(t);for(var n="",i={text:!0,textPath:!0,tspan:!0},r=0;e>r;r+=1)n+=" ";
var o=function(t){var e,r,s,a,l,u,c,h,d,p,m=void 0!==arguments[1]?arguments[1]:2;
if(!i[t.localName])for(var f,g=t.children[Symbol.iterator]();!(f=g.next()).done;){e=f.value,r=t.firstChild===e,s=t.lastChild===e,r===!0&&(a=document.createTextNode("\n"),e.parentNode.insertBefore(a,e)),l="";
for(var v=0;m>v;v+=1)l+=n;if(u=document.createTextNode(l),t.insertBefore(u,e),s===!0){c=document.createTextNode("\n"),t.appendChild(c),h="";
for(var b=0;m-1>b;b+=1)h+=n;d=document.createTextNode(h),t.appendChild(d)}else p=document.createTextNode("\n"),t.insertBefore(p,e.nextSibling);
e.children.length>0&&o(e,m+1)}};o(t,1)},b=function(t){return n.includes(t.localName)?!0:!1
},y=function(t){return r.includes(t.localName)?!0:!1},x=function(t){return i.includes(t.localName)?!0:!1
},_=function(t){return!/[^\t\n\r ]/.test(t)},S=function(t,e){return document.elementFromPoint(t,e)
},w=function(t,e){for(;t;){if(t.localName===e)return t;t=t.parentElement}};return{get parseHTML(){return a
},get parseSVG(){return l},get registerElement(){return u},get createElement(){return c
},get createSVGPoint(){return h},get createSVGLength(){return d},get createSVGRect(){return p
},get createSVGMatrix(){return m},get createSVGTransform(){return f},get stripWhitespace(){return g
},get normalizeWhitespace(){return v},get isTransformableElement(){return b},get isGraphicsElement(){return y
},get isContainer(){return x},get isDOMWhiteSpace(){return _},get getElementFromPoint(){return S
},get closest(){return w}}}),System.register("utils/event",[],function(){"use strict";
var t=System.get("utils/math"),e=t.sqrt,n=t.pow,i=System.get("utils/platform").OS_NAME,r=function(t){var e=o(t),n=s(t),i=n;
return i.includes(e)||i.push(e),i},o=function(t){var e,n,i=null,r=t.keyIdentifier,o={"U+00C0":"U+0060","U+00BD":"U+002D","U+00BB":"U+003D","U+00DB":"U+005B","U+00DD":"U+005D","U+00DC":"U+005C","U+00BA":"U+003B","U+00DE":"U+0027","U+00BC":"U+002C","U+00BE":"U+002E","U+00BF":"U+002F"};
for(var s in o)e=o[s],r===s&&(r=e);return"U"===r[0]&&"+"===r[1]?(n=parseInt(r.substring(2),16),27===n?i="Esc":8===n?i="Backspace":(i=String.fromCharCode(n),"	"===i?i="Tab":" "===i&&(i="Space"))):i="MacIntel"===navigator.platform?"Meta"===r?"Ctrl":"Control"===r?"Meta":r:"Control"===r?"Ctrl":"Win"===r||"Meta"===r?"Meta":r,i
},s=function(t){var e,n,i=[],r=t.altKey,o=t.shiftKey;return e="MacIntel"===navigator.platform?t.metaKey:t.ctrlKey,n="MacIntel"===navigator.platform?t.ctrlKey:t.metaKey,e&&i.push("Ctrl"),r&&i.push("Alt"),o&&i.push("Shift"),n&&i.push("Meta"),i
},a=function(t){for(var e,n,r,o=!1,s=!1,a=!1,l="",u=t[Symbol.iterator]();!(r=u.next()).done;)e=r.value,"Ctrl"===e?o=!0:"Alt"===e?s=!0:"Shift"===e?a=!0:l=e;
var c="";return"osx"===i||"ios"===i?(a&&(c+="⇧"),s&&(c+="⌥"),o&&(c+="⌘"),n={Up:"↑",Down:"↓",Left:"←",Right:"→",Backspace:"⌦"},n[l]&&(l=n[l]),"Up"===l?l="↑":"Down"===l?l="↓":"Left"===l?l="←":"Right"===l&&(l="→")):(o&&(c+="Ctrl+"),s&&(c+="Alt+"),a&&(c+="Shift+")),c+=l
},l=function(t,i){var r=void 0!==arguments[2]?arguments[2]:3,o=e(n(i.clientX-t.clientX,2)+n(i.clientY-t.clientY,2));
return r>o&&i.timeStamp-t.timeStamp<50?!1:!0};return{get getShortcutForKeyboardEvent(){return r
},get getKeyForKeyboardEvent(){return o},get getModKeysForUIEvent(){return s},get keyboardShortcutToString(){return a
},get isMouseMoveIntentional(){return l}}}),System.register("utils/function",[],function(){"use strict";
var t=arguments,e=System.get("utils/type").isNumber,n=function(n){var i,r,o,s,a,l,u,c,h,d,p,m=void 0!==arguments[1]?arguments[1]:500,f=arguments[2];
if(e(m))return i=null,r=null,o=null,s=0,a=function(){s=new Date,r=null,o=n.apply(f,i)
},l=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var l=new Date,u=m-(l-s);
return i=t,0>=u?(clearTimeout(r),r=null,s=l,o=n.apply(f,i)):r||(r=setTimeout(a,u)),o
};if("auto"===m)return u=null,c=null,h=null,d=function(){c=n.apply(f,u)},p=function(){return u=t,webkitCancelAnimationFrame(h),h=webkitRequestAnimationFrame(d),c
};throw new Error("Invalid argument passed to func.throttle(): "+m)},i=function(e,n,i){var r=void 0!==arguments[3]?arguments[3]:!1,o=null,s=null,a=function(){var a=t,l=function(){o=null,r||(s=e.apply(i,a))
},u=r&&!o;return clearTimeout(o),o=setTimeout(l,n),u&&(s=e.apply(i,a)),s};return a
},r=function(e){var n=!1,i=function(){n===!1&&(n=!0,e.apply(window,t))};return i},o=function(t,e){return t.bind(e)
};return{get throttle(){return n},get debounce(){return i},get once(){return r},get bind(){return o
}}}),System.register("utils/gradient",[],function(){"use strict";var t=System.get("utils/constants").XLINK_NAMESPACE,e=System.get("utils/color").parseColor,n=System.get("utils/dom"),i=n.createElement,r=n.createSVGMatrix,o=n.createSVGPoint,s=System.get("utils/math"),a=s.round,l=s.normalize,u=["x1","x2","y1","y2","gradientUnits","gradientTransform","spreadMethod","style"],c=["r","cx","cx","fx","fy","fr","gradientUnits","gradientTransform","spreadMethod","style"],h=function(e){var n,i,r,o,s,a;
if(""!==e.href.baseVal){if(f(e)===!1){n=g(e);for(var u,h=n[Symbol.iterator]();!(u=h.next()).done;)i=u.value,e.append(i.cloneNode())
}for(var d,p=c[Symbol.iterator]();!(d=p.next()).done;)r=d.value,e.hasAttribute(r)===!1&&(o=v(e,r),null!==o&&e.setAttribute(r,o));
e.removeAttributeNS(t,"href")}for(var m,b=0,y=function(){for(var t,n,i=0,r=[],o=e.children[Symbol.iterator]();!(n=o.next()).done;)t=n.value,"stop"===t.localName&&(r[i++]=t);
return r}(),x=y[Symbol.iterator]();!(m=x.next()).done;)s=m.value,a=s.offset.baseVal,b>a&&(a=b),a=l(a,0,1,4),b=a,s.setAttribute("offset",a);
e.removeAttribute("fx"),e.removeAttribute("fy"),e.removeAttribute("fr"),e.gradientUnits.baseVal===SVGUnitTypes.SVG_UNIT_TYPE_OBJECTBOUNDINGBOX&&(e.r.baseVal.unitType===SVGLength.SVG_LENGTHTYPE_PERCENTAGE&&e.setAttribute("r",e.r.baseVal.valueInSpecifiedUnits/100),e.cx.baseVal.unitType===SVGLength.SVG_LENGTHTYPE_PERCENTAGE&&e.setAttribute("cx",e.cx.baseVal.valueInSpecifiedUnits/100),e.cy.baseVal.unitType===SVGLength.SVG_LENGTHTYPE_PERCENTAGE&&e.setAttribute("cy",e.cy.baseVal.valueInSpecifiedUnits/100))
},d=function(e){for(var n,i,s,c,h,d,p,m,b,y,x,_,S=e.children[Symbol.iterator]();!(_=S.next()).done;)n=_.value,"stop"!==n.localName&&e.removeChild(n);
if(""!==e.href.baseVal){if(f(e)===!1){i=g(e);for(var w,C=i[Symbol.iterator]();!(w=C.next()).done;)s=w.value,e.append(s.cloneNode())
}for(var E,P=u[Symbol.iterator]();!(E=P.next()).done;)c=E.value,e.hasAttribute(c)===!1&&(h=v(e,c),null!==h&&e.setAttribute(c,h));
e.removeAttributeNS(t,"href")}for(var L,T=0,A=e.children[Symbol.iterator]();!(L=A.next()).done;)d=L.value,p=d.offset.baseVal,T>p&&(p=T),p=l(p,0,1,4),T=p,d.setAttribute("offset",p);
var k,O,M=r(e.gradientTransform.baseVal.consolidate().matrix);e.gradientUnits.baseVal===SVGUnitTypes.SVG_UNIT_TYPE_USERSPACEONUSE?(k=o(e.x1.baseVal.value,e.y1.baseVal.value),O=o(e.x2.baseVal.value,e.y2.baseVal.value)):e.gradientUnits.baseVal===SVGUnitTypes.SVG_UNIT_TYPE_OBJECTBOUNDINGBOX&&(m=e.x1.baseVal.unitType===SVGLength.SVG_LENGTHTYPE_PERCENTAGE?e.x1.baseVal.valueInSpecifiedUnits/100:e.x1.baseVal.value,b=e.y1.baseVal.unitType===SVGLength.SVG_LENGTHTYPE_PERCENTAGE?e.y1.baseVal.valueInSpecifiedUnits/100:e.y1.baseVal.value,y=e.x2.baseVal.unitType===SVGLength.SVG_LENGTHTYPE_PERCENTAGE?e.x2.baseVal.valueInSpecifiedUnits/100:e.x2.baseVal.value,x=e.y2.baseVal.unitType===SVGLength.SVG_LENGTHTYPE_PERCENTAGE?e.y2.baseVal.valueInSpecifiedUnits/100:e.y2.baseVal.value,k=o(m,b),O=o(y,x)),k=k.matrixTransform(M),O=O.matrixTransform(M),e.removeAttribute("gradientTransform"),e.setAttribute("x1",a(k.x,3)),e.setAttribute("x2",a(O.x,3)),e.setAttribute("y1",a(k.y,3)),e.setAttribute("y2",a(O.y,3))
},p=function(t,n){var r,o,s,a=i("canvas");a.width=o=100,a.height=s=10;var l=a.getContext("2d");
l.clearRect(0,0,o,s);for(var u,c=l.createLinearGradient(0,0,o,0),h=t.children[Symbol.iterator]();!(u=h.next()).done;)r=u.value,"stop"===r.localName&&c.addColorStop(r.offset.baseVal,r.style.stopColor);
l.fillStyle=c,l.fillRect(0,0,o,s);var d=l.getImageData(n*o,0,1,1).data,p="rgb("+d[0]+", "+d[1]+", "+d[2]+")",m=e(p,"hsla");
return m},m=function(t){var e,n,i,r;if(0===t.length)return!1;if(1===t.length)return!0;
e=t[0].children.length;for(var o,s=t[Symbol.iterator]();!(o=s.next()).done;)if(n=o.value,n!=t[0]&&n.children.length!==e)return!1;
for(var a=0;e>a;a+=1){i=t[0].children[a];for(var l,u=t[Symbol.iterator]();!(l=u.next()).done;)if(r=l.value,r!==t[0]){if(r.children[a].offset.baseVal!==i.offset.baseVal)return!1;
if(r.children[a].style.stopColor!==i.style.stopColor)return!1}}return!0},f=function(t){for(var e,n,i=t.children[Symbol.iterator]();!(n=i.next()).done;)if(e=n.value,"stop"===e.localName)return!0;
return!1},g=function(t){var e=[],n=function(i){var r,o=t.ownerSVGElement.querySelector(i.href.baseVal);
if(o){for(var s,a=o.children[Symbol.iterator]();!(s=a.next()).done;)r=s.value,"stop"===r.localName&&e.push(r);
0===e.length&&o.href.baseVal&&n(o)}};return n(t),e},v=function(t,e){var n,i=null;
return t.hasAttribute(e)?i=t.getAttribute(e):""!==t.href.baseVal&&(n=t.ownerSVGElement.querySelector(t.href.baseVal),n&&(i=v(n,e))),i
};return{get normalizeRadialGradient(){return h},get normalizeLinearGradient(){return d
},get getGradientColorAtOffset(){return p},get boundGradients(){return m}}}),System.register("utils/image",[],function(){"use strict";
var t=function(t,e){var n=new Image;n.onload=function(){e(n.naturalWidth,n.naturalHeight)
},n.src=t};return{get extractImageSize(){return t}}}),System.register("utils/json",[],function(){"use strict";
var t=function(t){var e=null;try{e=JSON.stringify(t)}catch(n){return console.error("Failed to generate JSON string",n),e
}return e},e=function(t){var e=void 0!==arguments[1]?arguments[1]:!0,i=void 0!==arguments[2]?arguments[2]:!1;
i&&(t=n(t));var r=null;try{r=JSON.parse(t)}catch(o){return void(e&&console.error("Failed to parse JSON string",t,o))
}return r},n=function(t){for(var e="",n="",i=0,r=t.length,o=null,s=null,a=null;r>i;)if(n=t.charAt(i),"/"===n)nextChar=t.charAt(i+=1),"/"===nextChar?(o=t.indexOf("\n",i),-1===o&&(o=t.indexOf("\r",i)),i=o>-1?o:r):"*"===nextChar?(s=t.indexOf("*/",i),s>-1?i=s+=2:console.error("Unclosed block comment")):(msg="JSON.stripComments(): Unexpected char "+n+" at position "+i,console.error(msg));
else if('"'===n){for(a=i;r>i;)if(i+=1,n=t.charAt(i),"\\"===n)i+=1;else if('"'===n)break;
'"'===t.charAt(i)?e+=t.slice(a,i+=1):console.error("Unclosed string")}else e+=n,i+=1;
return e};return{get toJSON(){return t},get fromJSON(){return e}}}),System.register("utils/math",[],function(){"use strict";
var t=Math.E,e=Math.LN2,n=Math.LN10,i=Math.LOG2E,r=Math.LOG10E,o=Math.PI,s=Math.SQRT1_2,a=Math.SQRT2,l=Math.sin,u=Math.cos,c=Math.tan,h=Math.asin,d=Math.acos,p=Math.atan,m=Math.atan2,f=Math.min,g=Math.max,v=Math.pow,b=Math.exp,y=Math.sqrt,x=Math.log,_=Math.abs,S=Math.ceil,w=Math.floor,C=function(t,e,n){var i=void 0!==arguments[3]?arguments[3]:99;
return t=E(t,i),e>t?t=e:t>n&&(t=n),t},E=function(t){var e=void 0!==arguments[1]?arguments[1]:0,n=v(10,e),i=Math.round(t*n)/n;
return i},P=function(t){var e=t*(180/o);return e},L=function(t){var e=o*t/180;return e
},T=function(t){return 0>t?-1:t>0?1:0},A=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];
for(var n=0,i=0;i<t.length;i+=1)n+=t[i];return n/t.length},k=function(t){var e,n=(""+t).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
return e=n?Math.max(0,(n[1]?n[1].length:0)-(n[2]?+n[2]:0)):0};return{get E(){return t
},get LN2(){return e},get LN10(){return n},get LOG2E(){return i},get LOG10E(){return r
},get PI(){return o},get SQRT1_2(){return s},get SQRT2(){return a},get sin(){return l
},get cos(){return u},get tan(){return c},get asin(){return h},get acos(){return d
},get atan(){return p},get atan2(){return m},get min(){return f},get max(){return g
},get pow(){return v},get exp(){return b},get sqrt(){return y},get log(){return x
},get abs(){return _},get ceil(){return S},get floor(){return w},get normalize(){return C
},get round(){return E},get radToDeg(){return P},get degToRad(){return L},get signum(){return T
},get average(){return A},get countDecimalPlaces(){return k}}}),System.register("utils/object",[],function(){"use strict";
var t=Object.freeze,e=Object.observe,n=Object.keys,i=Object.defineProperty,r=Object.getOwnPropertyDescriptor,o=function(t){for(var e,i,r=[],o=n(t)[Symbol.iterator]();!(i=o.next()).done;)e=i.value,r.push(t[e]);
return r},s=function(t){for(var e,i,r=[],o=n(t)[Symbol.iterator]();!(i=o.next()).done;)e=i.value,r.push([e,t[e]]);
return r},a=function(t,e){var n=Object.create(t);if(e)for(var i in e)n[i]=e[i];return n
},l=function(t){for(var e,o,s=[],a=1;a<arguments.length;a++)s[a-1]=arguments[a];for(var l,u=s[Symbol.iterator]();!(l=u.next()).done;){e=l.value;
for(var c,d=n(e)[Symbol.iterator]();!(c=d.next()).done;)o=c.value,h(t,o)||i(t,o,r(e,o))
}return t},u=function(t){for(var e,o,s=[],a=1;a<arguments.length;a++)s[a-1]=arguments[a];
for(var l,u=s[Symbol.iterator]();!(l=u.next()).done;){e=l.value;for(var c,h=n(e)[Symbol.iterator]();!(c=h.next()).done;)o=c.value,i(t,o,r(e,o))
}return t},c=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];
var n={};return l.apply(null,$traceurRuntime.spread([n],t)),n},h=function(t,e){return t.hasOwnProperty(e)
},d=function(t,e){return e in t},p=function(t,e){return r(t,e)},m=function(t,e,n){void 0!==n.value&&void 0===n.writable&&(n.writable=!0),void 0===n.enumerable&&(n.enumerable=!0),void 0===n.configurable&&(n.configurable=!0),Object.defineProperty(t,e,n)
},f=function(t,e){var n=p(t,e);return n.enumerable},g=function(t,e){var n=void 0!==arguments[2]?arguments[2]:!0,i=p(t,e);
i.enumerable=n,m(t,e,i)},v=function(t,e){var n;if(t===e)return t;n={};for(var i in e)n[i]=e[i];
for(var r in t)n[r]=t[r];return n};return{get freeze(){return t},get observe(){return e
},get keys(){return n},get defineProperty(){return i},get getOwnPropertyDescriptor(){return r
},get values(){return o},get entries(){return s},get create(){return a},get mix(){return l
},get extend(){return u},get combine(){return c},get hasOwnProperty(){return h},get hasProperty(){return d
},get getPropertyDescriptor(){return p},get setPropertyDescriptor(){return m},get getPropertyIsEnumerable(){return f
},get setPropertyIsEnumerable(){return g},get mergeOptions(){return v}}}),System.register("utils/paint",[],function(){"use strict";
var t=System.get("utils/array").includesOnly,e=System.get("utils/color").isValidColorString,n=System.get("utils/constants").PAINT_SERVER_ELEMENTS,i=(System.get("utils/dom").isContainer,System.get("utils/gradient").boundGradients),r=(System.get("utils/relationship").getDescendants,System.get("utils/text").getTspansIntersectedByRange,function(t){var n,i,r,o=void 0!==arguments[1]?arguments[1]:"fill",s=getComputedStyle(t).getPropertyValue(o),a="none";
return e(s)?a="solid":s&&s.startsWith("url(")&&(n=s.substring(4,s.length-1),i=t.ownerSVGElement.querySelector(n),r=i?i.localName:null,("linearGradient"===r||"radialGradient"===r||"pattern"===r)&&(a=r)),a
}),o=function(t){var e,i,r=void 0!==arguments[1]?arguments[1]:"fill",o=null,s=getComputedStyle(t)[r];
return s&&s.toLowerCase().startsWith("url(")&&s.endsWith(")")&&(e=s.substring(4,s.length-1),i=t.ownerSVGElement.querySelector(e),i&&n.includes(i.localName)&&(o=i)),o
},s=function(t){for(var e,n,i,o=void 0!==arguments[1]?arguments[1]:"fill",s=null,a=t[Symbol.iterator]();!(i=a.next()).done;){if(e=i.value,n=r(e,o),e!==t[0]&&s!==n)return!1;
s=n}return null===s?!1:!0},a=function(e){for(var n,r,s,a,l,u,c=void 0!==arguments[1]?arguments[1]:"fill",h=[],d=[],p=e[Symbol.iterator]();!(u=p.next()).done;)n=u.value,r=getComputedStyle(n).getPropertyValue(c),s=o(n),h.push(r),d.push(s);
return h.legth<=1?!1:t(h,h[0])?!1:(a=d.filter(function(t){return t&&"linearGradient"===t.localName
}),l=d.filter(function(t){return t&&"radialGradient"===t.localName}),a.length===e.length&&i(a)?!1:l.length===e.length&&i(l)?!1:!0)
},l=function(e){for(var n,i,r,o=void 0!==arguments[1]?arguments[1]:"fill",s=[],a=e[Symbol.iterator]();!(r=a.next()).done;)n=r.value,i=getComputedStyle(n).getPropertyValue(o),s.push(i);
return 0===s.legth?!0:t(s,s[0])?!0:!1},u=function(t,e){var n,i;return e&&e.startsWith("url(#")&&e.endsWith(")")&&(n=e.substring(4,e.length-1),i=t.querySelector(n))?i:null
};return{get getPaintType(){return r},get getPaintServer(){return o},get isSamePaintType(){return s
},get isMixedPaint(){return a},get isSamePaint(){return l},get getDefFromURL(){return u
}}}),System.register("utils/path",[],function(){"use strict";var t=System.get("utils/dom"),e=t.createElement,n=t.createSVGPoint,i=System.get("utils/math"),r=i.abs,o=i.sin,s=i.asin,a=i.cos,l=i.acos,u=i.tan,c=i.pow,h=i.sqrt,d=i.degToRad,p=(i.round,i.PI),m=(System.get("utils/object").mergeOptions,System.get("utils/point").getDistanceBetweenPoints,System.get("utils/string").isLowerCase,System.get("utils/transform").normalizeTransform),f=e("svg:path"),g=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];
switch(t){case"Z":return f.createSVGPathSegClosePath();case"M":var i=e,r=i[0],o=i[1];
return f.createSVGPathSegMovetoAbs(r,o);case"L":var s=e,r=s[0],o=s[1];return f.createSVGPathSegLinetoAbs(r,o);
case"C":var a=e,l=a[0],u=a[1],c=a[2],h=a[3],r=a[4],o=a[5];return f.createSVGPathSegCurvetoCubicAbs(r,o,l,u,c,h);
case"Q":var d=e,l=d[0],u=d[1],r=d[2],o=d[3];return f.createSVGPathSegCurvetoQuadraticAbs(r,o,l,u);
case"H":var r=e[0];return f.createSVGPathSegLinetoHorizontalAbs(r);case"V":var o=e[0];
return f.createSVGPathSegLinetoVerticalAbs(o);case"S":var p=e,c=p[0],h=p[1],r=p[2],o=p[3];
return f.createSVGPathSegCurvetoCubicSmoothAbs(r,o,c,h);case"T":var m=e,r=m[0],o=m[1];
return f.createSVGPathSegCurvetoQuadraticSmoothAbs(r,o);case"A":var g=e,v=g[0],b=g[1],y=g[2],x=g[3],_=g[4],r=g[5],o=g[6];
return f.createSVGPathSegArcAbs(r,o,v,b,y,x,_);case"m":var S=e,r=S[0],o=S[1];return f.createSVGPathSegMovetoRel(r,o);
case"l":var w=e,r=w[0],o=w[1];return f.createSVGPathSegLinetoRel(r,o);case"c":var C=e,l=C[0],u=C[1],c=C[2],h=C[3],r=C[4],o=C[5];
return f.createSVGPathSegCurvetoCubicRel(r,o,l,u,c,h);case"q":var E=e,l=E[0],u=E[1],r=E[2],o=E[3];
return f.createSVGPathSegCurvetoQuadraticRel(r,o,l,u);case"h":var r=e[0];return f.createSVGPathSegLinetoHorizontalRel(r);
case"v":var o=e[0];return f.createSVGPathSegLinetoVerticalRel(o);case"s":var P=e,c=P[0],h=P[1],r=P[2],o=P[3];
return f.createSVGPathSegCurvetoCubicSmoothRel(r,o,c,h);case"t":var L=e,r=L[0],o=L[1];
return f.createSVGPathSegCurvetoQuadraticSmoothRel(r,o);case"a":var T=e,v=T[0],b=T[1],y=T[2],x=T[3],_=T[4],r=T[5],o=T[6];
return f.createSVGPathSegArcRel(r,o,v,b,y,x,_)}},v=function(t){switch(t.pathSegTypeAsLetter){case"Z":return g("Z");
case"M":return g("M",t.x,t.y);case"L":return g("M",t.x,t.y);case"C":return g("C",t.x1,t.y1,t.x2,t.y2,t.x,t.y);
case"Q":return g("Q",t.x1,t.y1,t.x,t.y);case"H":return g("H",t.x);case"V":return g("V",t.y);
case"S":return g("S",t.x2,t.y2,t.x,t.y);case"T":return g("T",t.x,t.y);case"A":return g("A",t.r1,t.r2,t.angle,t.largeArcFlag,t.sweepFlag,t.x,t.y);
case"m":return g("m",t.x,t.y);case"l":return g("l",t.x,t.y);case"c":return g("c",t.x1,t.y1,t.x2,t.y2,t.x,t.y);
case"q":return g("q",t.x1,t.y1,t.x,t.y);case"h":return g("h",t.x);case"v":return g("v",t.y);
case"s":return g("s",t.x2,t.y2,t.x,t.y);case"t":return g("t",t.x,t.y);case"a":return g("a",t.r1,t.r2,t.angle,t.largeArcFlag,t.sweepFlag,t.x,t.y)
}},b=function(t){for(var e,n,i,r,o,s,a,l,u,c,h,d,p,m,f,g,v,b,y,_,S,w,C,E,P,L,T,A,k,O,M,j,R,I,B,N,V,D,G,X,Y,F,H,q,z,U,W,$,Z,K,J,Q,te,ee,ne,ie,re,oe,se,ae,le,ue,ce,he,de,pe,me,fe,ge,ve,be,ye,xe,_e,Se,we,Ce,Ee,Pe,Le,Te,Ae,ke,Oe,Me,je,Re,Ie,Be,Ne,Ve,De,Ge,Xe,Ye,Fe,He,qe,ze,Ue,We,$e,Ze,Ke,Je,Qe,tn,en,nn,rn,on,sn,an,ln,un,cn,hn,dn,pn,mn,fn,gn,vn,bn,yn=[],xn=null,_n=null,Sn=null,wn=null,Cn=t.pathSegList[Symbol.iterator]();!(bn=Cn.next()).done;)e=bn.value,n=e.pathSegTypeAsLetter,"M"===n?(i=e,r=i.x,o=i.y,yn.push(["M",r,o]),Sn=r,wn=o,xn=r,_n=o):"m"===n?(s=xn+e.x,a=_n+e.y,yn.push(["M",s,a]),Sn=s,wn=a,xn=s,_n=a):"L"===n?(l=e,u=l.x,c=l.y,yn.push(["L",u,c]),xn=u,_n=c):"l"===n?(h=xn+e.x,d=_n+e.y,yn.push(["L",h,d]),xn=h,_n=d):"C"===n?(p=e,m=p.x1,f=p.y1,g=p.x2,v=p.y2,b=p.x,y=p.y,yn.push(["C",m,f,g,v,b,y]),xn=b,_n=y):"c"===n?(_=xn+e.x,S=_n+e.y,w=xn+e.x1,C=_n+e.y1,E=xn+e.x2,P=_n+e.y2,yn.push(["C",w,C,E,P,_,S]),xn=_,_n=S):"Q"===n?(L=e,T=L.x1,A=L.y1,k=L.x,O=L.y,yn.push(["Q",e.x1,e.y1,k,O]),xn=k,_n=O):"q"===n?(M=xn+e.x,j=_n+e.y,yn.push(["Q",xn+e.x1,_n+e.y1,M,j]),xn=M,_n=j):"A"===n?(R=e.x,I=e.y,yn.push(["A",e.r1,e.r2,e.angle,e.largeArcFlag,e.sweepFlag,R,I]),xn=R,_n=I):"a"===n?(B=xn+e.x,N=_n+e.y,yn.push(["A",e.r1,e.r2,e.angle,e.largeArcFlag,e.sweepFlag,B,N]),xn=B,_n=N):"H"===n?(V=e.x,yn.push(["H",V]),xn=V):"h"===n?(D=xn+e.x,yn.push(["H",D]),xn=D):"V"===n?(G=e.y,yn.push(["V",G]),_n=G):"v"===n?(X=_n+e.y,yn.push(["V",X]),_n=X):"S"===n?(Y=e,F=Y.x2,H=Y.y2,q=Y.x,z=Y.y,yn.push(["S",F,H,q,z]),xn=q,_n=z):"s"===n?(U=xn+e.x2,W=_n+e.y2,$=xn+e.x,Z=_n+e.y,yn.push(["S",U,W,$,Z]),xn=$,_n=Z):"T"===n?(K=e,J=K.x,Q=K.y,yn.push(["T",J,Q]),xn=J,_n=Q):"t"===n?(te=xn+e.x,ee=_n+e.y,yn.push(["T",te,ee]),xn=te,_n=ee):"Z"===n&&(yn.push(["Z"]),xn=Sn,_n=wn);
var En=[],Pn=null,Ln=null,Tn=null;xn=null,_n=null,Sn=null,wn=null;for(var An,kn=yn[Symbol.iterator]();!(An=kn.next()).done;){if(ne=An.value,ie=ne,re=ie[0],oe=Array.prototype.slice.call(ie,1),"Z"===Pn&&"M"!==re&&"Z"!==re&&En.push(["M",Sn,wn]),"M"===re)se=oe,ae=se[0],le=se[1],En.push(ne),Sn=ae,wn=le,xn=ae,_n=le;
else if("C"===re)ue=oe,ce=ue[0],he=ue[1],de=ue[2],pe=ue[3],me=ue[4],fe=ue[5],En.push(ne),Ln=de,Tn=pe,xn=me,_n=fe;
else if("L"===re)ge=oe,ve=ge[0],be=ge[1],ye=["C",xn,_n,ve,be,ve,be],En.push(ye),xn=ve,_n=be;
else if("H"===re)xe=oe[0],_e=["C",xn,_n,xe,_n,xe,_n],En.push(_e),xn=xe;else if("V"===re)Se=oe[0],we=["C",xn,_n,xn,Se,xn,Se],En.push(we),_n=Se;
else if("S"===re)Ce=oe,Ee=Ce[0],Pe=Ce[1],Le=Ce[2],Te=Ce[3],"C"===Pn||"S"===Pn?(Ae=xn+(xn-Ln),ke=_n+(_n-Tn)):(Ae=xn,ke=_n),En.push(["C",Ae,ke,Ee,Pe,Le,Te]),Ln=Ee,Tn=Pe,xn=Le,_n=Te;
else if("T"===re)Oe=oe,Me=Oe[0],je=Oe[1],"Q"===Pn||"T"===Pn?(Re=xn+(xn-Ln),Ie=_n+(_n-Tn)):(Re=xn,Ie=_n),Be=xn+2*(Re-xn)/3,Ne=_n+2*(Ie-_n)/3,Ve=Me+2*(Re-Me)/3,De=je+2*(Ie-je)/3,En.push(["C",Be,Ne,Ve,De,Me,je]),Ln=Re,Tn=Ie,xn=Me,_n=je;
else if("Q"===re)Ge=oe,Xe=Ge[0],Ye=Ge[1],Fe=Ge[2],He=Ge[3],qe=xn+2*(Xe-xn)/3,ze=_n+2*(Ye-_n)/3,Ue=Fe+2*(Xe-Fe)/3,We=He+2*(Ye-He)/3,En.push(["C",qe,ze,Ue,We,Fe,He]),Ln=Xe,Tn=Ye,xn=Fe,_n=He;
else if("A"===re){if($e=oe,Ze=$e[0],Ke=$e[1],Je=$e[2],Qe=$e[3],tn=$e[4],en=$e[5],nn=$e[6],0===Ze||0===Ke)En.push(["C",xn,_n,en,nn,en,nn]),xn=en,_n=nn;
else if(xn!==en||_n!==nn){rn=x(xn,_n,en,nn,Ze,Ke,Je,Qe,tn);for(var On,Mn=rn[Symbol.iterator]();!(On=Mn.next()).done;)on=On.value,sn=on[0],an=on[1],ln=on[2],un=on[3],cn=on[4],hn=on[5],En.push(["C",sn,an,ln,un,cn,hn]),xn=cn,_n=hn
}}else"Z"===re&&((xn!==Sn||_n!==wn)&&En.push(["C",xn,_n,Sn,wn,Sn,wn]),En.push(ne),xn=Sn,_n=wn);
Pn=re}var jn=[];Pn=null;for(var Rn,In=En[Symbol.iterator]();!(Rn=In.next()).done;)dn=Rn.value,pn=dn,mn=pn[0],fn=Array.prototype.slice.call(pn,1),"M"===mn?"M"===Pn&&jn.pop():"Z"===mn&&("M"===Pn&&jn.length>1?jn.pop():"Z"===Pn&&jn.pop()),jn.push(dn),Pn=mn;
if(0===jn.length)t.removeAttribute("d");else{gn="";for(var Bn,Nn=jn[Symbol.iterator]();!(Bn=Nn.next()).done;)vn=Bn.value,gn+=" "+vn.join(" ");
t.setAttribute("d",gn)}},y=function(){},x=function(t,e,n,i,l,c,m,f,g,v){var b,y,_,S,w,C,E,P,L,T,A,k,O,M,j,R,I,B,N,V,D=[],G=d(m),X=function(t,e,n){var i=t*a(n)-e*o(n),r=t*o(n)+e*a(n);
return{x:i,y:r}};v?(I=v[0],B=v[1],N=v[2],V=v[3]):(b=X(t,e,-G),t=b.x,e=b.y,y=X(n,i,-G),n=y.x,i=y.y,_=(t-n)/2,S=(e-i)/2,w=_*_/(l*l)+S*S/(c*c),w>1&&(w=h(w),l=w*l,c=w*c),C=f===g?-1:1,E=l*l,P=c*c,L=E*P-E*S*S-P*_*_,T=E*S*S+P*_*_,A=C*h(r(L/T)),N=A*l*S/c+(t+n)/2,V=A*-c*_/l+(e+i)/2,I=s(((e-V)/c).toFixed(9)),B=s(((i-V)/c).toFixed(9)),N>t&&(I=p-I),N>n&&(B=p-B),0>I&&(I=2*p+I),0>B&&(B=2*p+B),g&&I>B&&(I-=2*p),!g&&B>I&&(B-=2*p));
var Y=B-I;r(Y)>120*p/180&&(k=B,O=n,M=i,B=g&&B>I?I+120*p/180*1:I+120*p/180*-1,n=N+l*a(B),i=V+c*o(B),D=x(n,i,O,M,l,c,m,0,g,[B,k,N,V])),Y=B-I;
var F=a(I),H=o(I),q=a(B),z=o(B),U=u(Y/4),W=4/3*l*U,$=4/3*c*U,Z=[t,e],K=[t+W*H,e-$*F],J=[n+W*z,i-$*q],Q=[n,i];
return K[0]=2*Z[0]-K[0],K[1]=2*Z[1]-K[1],v?[K,J,Q].concat(D):(D=[K,J,Q].concat(D).join().split(","),j=[],R=[],D.forEach(function(t,e){R.push(e%2?X(D[e-1],D[e],G).y:X(D[e],D[e+1],G).x),6===R.length&&(j.push(R),R=[])
}),j)},_=function(t,e,n,i,o){var s,u,d,m,f,g,v=function(t){return r(t)<1e-11?0:t>0?1:-1
},b=function(t,e,n,i){var r=(n-t)*(n-t),o=(i-e)*(i-e);return h(r+o)},y=function(t,e,n,i,r){var o,s=-t+3*e-3*n+i,a=3*t-6*e+3*n,l=-3*t+3*e,u=-r+t,c=[3,-1];
x(c,a/s,l/s,u/s);for(var h,d=[],p=c[Symbol.iterator]();!(h=p.next()).done;)o=h.value,o>=0&&1>=o&&d.push(o);
return d},x=function(t,e,n,i){var o,s,u,d=(c(e,2)-3*n)/9,m=(2*c(e,3)-9*e*n+27*i)/54;
return c(m,2)<c(d,3)?(o=l(m/h(c(d,3)))/3,t.splice(0,0,-2*h(d)*a(o)-e/3),t.splice(1,0,-2*h(d)*a(o+4*p/3)-e/3),t.splice(2,0,-2*h(d)*a(o-4*p/3)-e/3),3):(s=-v(m)*c(r(m)+h(c(m,2)-c(d,3)),1/3),u=0==v(s)?0:d/s,t.splice(0,0,s+u-e/3),t.splice(1,0,-.5*(s+u)-e/3),t.splice(2,0,.5*h(3)*r(s-u)),t[2]+1===1?2:1)
},_=$traceurRuntime.spread(y(e.x,n.x,i.x,o.x,t.x),y(e.y,n.y,i.y,o.y,t.y));if(0===_.length)return-1;
s=-1,u=3;for(var S,w=_[Symbol.iterator]();!(S=w.next()).done;)d=S.value,m=c(1-d,3)*e.x+3*c(1-d,2)*d*n.x+3*(1-d)*c(d,2)*i.x+c(d,3)*o.x,f=c(1-d,3)*e.y+3*c(1-d,2)*d*n.y+3*(1-d)*c(d,2)*i.y+c(d,3)*o.y,g=b(t.x,t.y,m,f),u>g&&(s=d,u=g);
return s},S=function(t,e,i,r,o){var s=(e.x-t.x)*o+t.x,a=(e.y-t.y)*o+t.y,l=(i.x-e.x)*o+e.x,u=(i.y-e.y)*o+e.y,c=(r.x-i.x)*o+i.x,h=(r.y-i.y)*o+i.y,d=(l-s)*o+s,p=(u-a)*o+a,m=(c-l)*o+l,f=(h-u)*o+u,g=(m-d)*o+d,v=(f-p)*o+p,b=[n(t.x,t.y),n(s,a),n(d,p),n(g,v)],y=[n(g,v),n(m,f),n(c,h),n(r.x,r.y)];
return[b,y]},w=function(t,e){for(var n,i,r,o,s,a,l,u,h=t.getTotalLength(),d=h/t.pathSegList.numberOfItems*.125,p=null,m=null,f=1/0,g=function(t){return c(t.x-e.x,2)+c(t.y-e.y,2)
},v=0;h>=v;v+=d)n=t.getPointAtLength(v),i=g(n),f>i&&(p=n,m=v,f=i);for(d*=.5;d>.5;)r=m-d,o=t.getPointAtLength(r),s=g(o),r>=0&&f>s?(p=o,m=r,f=s):(a=m+d,l=t.getPointAtLength(a),u=g(l),h>=a&&f>u?(p=l,m=a,f=u):d*=.5);
return[p,m,f]},C=function(t){var e,n=t.localName;return e="rect"===n?E(t):"circle"===n?P(t):"ellipse"===n?L(t):"line"===n?T(t):"polyline"===n?A(t):"polygon"===n?k(t):"path"===n?t.cloneNode(!0):"g"===n?null:null
},E=function(t){var n,i=void 0!==arguments[1]?arguments[1]:!0,r=e("svg:path");if(i)for(var o,s=t.attributes[Symbol.iterator]();!(o=s.next()).done;)n=o.value,["x","y","width","height","rx","ry"].includes(n.name)||r.setAttribute(n.name,n.value);
var a,l=t.x.baseVal.value,u=t.y.baseVal.value,c=t.rx.baseVal.value,h=t.ry.baseVal.value,d=t.width.baseVal.value,p=t.height.baseVal.value;
return c>d/2&&(c=d/2),h>p/2&&(h=p/2),a=0===c&&0===h?"\n      M "+l+" "+u+"\n      L "+(l+d)+" "+u+"\n      L "+(l+d)+" "+(u+p)+"\n      L "+l+" "+(u+p)+"\n      L "+l+" "+u+"\n    ":"\n      M "+(l+c)+" "+u+"\n      L "+(l+d-c)+" "+u+"\n      A "+c+" "+h+" 0 0 1 "+(l+d)+" "+(u+h)+"\n      L "+(l+d)+" "+(u+p-h)+"\n      A "+c+" "+h+" 0 0 1 "+(l+d-c)+" "+(u+p)+"\n      L "+(l+c)+" "+(u+p)+"\n      A "+c+" "+h+" 0 0 1 "+l+" "+(u+p-h)+"\n      L "+l+" "+(u+h)+"\n      A "+c+" "+h+" 0 0 1 "+(l+c)+" "+u+"\n    ",r.setAttribute("d",a.replaceAll("\n"," ")),r
},P=function(t){var e=R(t),n=L(e);return n},L=function(t){for(var n,i,r=e("svg:path"),o=t.attributes[Symbol.iterator]();!(i=o.next()).done;)n=i.value,["cx","cy","rx","ry"].includes(n.name)||r.setAttribute(n.name,n.value);
var s=t.cx.baseVal.value,a=t.cy.baseVal.value,l=t.rx.baseVal.value,u=t.ry.baseVal.value,c="\n    M "+s+" "+(a-u)+"\n    A "+l+" "+u+" 0 0 0 "+s+" "+(a+u)+"\n    A "+l+" "+u+" 0 0 0 "+s+" "+(a-u)+"\n  ";
return r.setAttribute("d",c.replaceAll("\n"," ")),r},T=function(t){for(var n,i,r=e("svg:path"),o=t.attributes[Symbol.iterator]();!(i=o.next()).done;)n=i.value,["x1","y1","x2","y2"].includes(n.name)&&r.setAttribute(n.name,n.value);
var s=t.x1.baseVal.value,a=t.y1.baseVal.value,l=t.x2.baseVal.value,u=t.y2.baseVal.value,c="\n    M "+s+" "+a+"\n    L "+l+" "+u+"\n  ";
return r.setAttribute("d",c.replaceAll("\n"," ")),r},A=function(t){for(var n,i,r,o,s,a=e("svg:path"),l=t.attributes[Symbol.iterator]();!(s=l.next()).done;)n=s.value,"points"!==n.name&&a.setAttribute(n.name,n.value);
for(var u="",c=0;c<t.points.numberOfItems;c+=1)i=t.points.getItem(c),r=i.x,o=i.y,u+=0===c?"M "+r+" "+o:" L "+r+" "+o;
return a.setAttribute("d",u),a},k=function(t){for(var n,i,r,o,s,a=e("svg:path"),l=t.attributes[Symbol.iterator]();!(s=l.next()).done;)n=s.value,"points"!==n.name&&a.setAttribute(n.name,n.value);
for(var u="",c=0;c<t.points.numberOfItems;c+=1)i=t.points.getItem(c),r=i.x,o=i.y,u+=0===c?"M "+r+" "+o:" L "+r+" "+o;
return u+=" Z",a.setAttribute("d",u),a},O=function(t){for(var n,i,r,o,s,a=(void 0!==arguments[1]?arguments[1]:0,e("svg:polygon")),l=[],u=0;u<t.pathSegList.numberOfItems;u+=1)n=t.pathSegList.getItem(u),l.push(n);
for(var c=l.concat(),h=null,d=[],p=0,m=0,f=function(t){var e;t.pathSegType!==SVGPathSeg.PATHSEG_CLOSEPATH&&(t.pathSegType%2===1&&t.pathSegType>1?(p+=t.x,m+=t.y):(p=t.x,m=t.y),e=d[d.length-1],e&&p===e[0]&&m===e[1]||d.push([p,m]))
},g=t.getTotalLength(),v=0;g>v;v+=g){if(i=c[t.getPathSegAtLength(v)],r=t.getPointAtLength(v),i!==h)for(h=i;l.length&&l[0]!==i;)f(l.shift());
o=d[d.length-1],o&&r.x===o[0]&&r.y===o[1]||d.push([r.x,r.y])}for(var b,y=l[Symbol.iterator]();!(b=y.next()).done;)s=b.value,f(s);
for(var x=0;x<d.length;x+=1)d[x]=d[x].join(",");return a.setAttribute("points",d.join(" ")),a
},M=function(){},j=function(){},R=function(t){for(var n,i,r=e("svg:ellipse"),o=t.attributes[Symbol.iterator]();!(i=o.next()).done;)n=i.value,"r"===n.name?(r.setAttribute("rx",n.value),r.setAttribute("ry",n.value)):r.setAttribute(n.name,n.value);
return r},I=function(t){var n,i,r,o,s,a;b(t),m(t);for(var l,u=[],c=null,h=0,d=0,p=t.pathSegList[Symbol.iterator]();!(l=p.next()).done;)n=l.value,i=n.pathSegTypeAsLetter,"M"===i?(c=[],u.push(c),c.push(["M",n.x,n.y]),h=n.x,d=n.y):"C"===i?c.push(["C",n.x1,n.y1,n.x2,n.y2,n.x,n.y]):"Z"===i&&(c.push(["Z"]),c=[],u.push(c),c.push(["M",h,d]));
u=u.filter(function(t){for(var e,n,i=t[Symbol.iterator]();!(n=i.next()).done;)if(e=n.value,"M"!==e[0]&&"Z"!==e[0])return!0;
return!1});for(var f,v=[],y=u[Symbol.iterator]();!(f=y.next()).done;){r=f.value,o=e("svg:path");
for(var x,_=r[Symbol.iterator]();!(x=_.next()).done;)s=x.value,a=g.apply(null,$traceurRuntime.spread(s)),o.pathSegList.appendItem(a);
v.push(o)}return v},B=function(t){for(var e,n,i,r,o,s,a,l,u,c,h,d,p,m,f,g,v,b,y,x,_,S=I(t),w=S[Symbol.iterator]();!(_=w.next()).done;){e=_.value,n=e.pathSegList.getItem(0),i=[],r=null;
for(var C=1;C<e.pathSegList.numberOfItems;C+=1)o=e.pathSegList.getItem(C),"Z"===o.pathSegTypeAsLetter?r=o:i.push(o);
s=n.x,a=n.y,n.x=i[i.length-1].x,n.y=i[i.length-1].y;for(var E,P=i[Symbol.iterator]();!(E=P.next()).done;)l=E.value,"L"===l.pathSegTypeAsLetter?(u=l,c=u.x,h=u.y,l.x=s,l.y=a,s=c,a=h):"C"===l.pathSegTypeAsLetter&&(d=l,p=d.x,m=d.y,f=d.x1,g=d.y1,v=d.x2,b=d.y2,l.x=s,l.y=a,l.x1=v,l.y1=b,l.x2=f,l.y2=g,s=p,a=m);
for(i.reverse();e.pathSegList.numberOfItems>0;)e.pathSegList.removeItem(0);e.pathSegList.appendItem(n);
for(var L,T=i[Symbol.iterator]();!(L=T.next()).done;)y=L.value,e.pathSegList.appendItem(y);
r&&e.pathSegList.appendItem(r)}S.reverse();for(var A,k="",O=S[Symbol.iterator]();!(A=O.next()).done;)x=A.value,x!==S[0]&&(k+=" "),k+=x.getAttribute("d");
t.setAttribute("d",k)};return{get createSeg(){return g},get cloneSeg(){return v},get normalizePathData(){return b
},get compactPathSegments(){return y},get getCubicCurveTParam(){return _},get splitCurve(){return S
},get getNearestPointOnPath(){return w},get anyToPath(){return C},get rectToPath(){return E
},get circleToPath(){return P},get ellipseToPath(){return L},get lineToPath(){return T
},get polylineToPath(){return A},get polygonToPath(){return k},get pathToPolygon(){return O
},get textToPath(){return M},get imageToPath(){return j},get circleToEllipse(){return R
},get getSubpaths(){return I},get reversePath(){return B}}}),System.register("utils/platform",[],function(){"use strict";
var t=function(){return navigator.platform.startsWith("Win")?"windows":navigator.platform.startsWith("Mac")?"osx":"iPhone"===navigator.platform||"iPad"===navigator.platform?"ios":"Android"===navigator.platform?"android":navigator.userAgent.includes("CrOS")?"chromeos":navigator.platform.startsWith("Linux")?"linux":"other"
}();return{get OS_NAME(){return t}}}),System.register("utils/point",[],function(){"use strict";
var t=System.get("classes/vector").default,e=System.get("utils/math"),n=e.sin,i=e.cos,r=e.abs,o=e.sqrt,s=e.pow,a=e.degToRad,l=System.get("utils/dom").createSVGPoint,u=System.get("utils/vector"),c=u.sumVectors,h=u.vectorsDotProduct,d=u.getAngleBetweenVectors,p=function(t,e){return t.x===e.x&&t.y===e.y
},m=function(t,e){var n=e.x-t.x;n*=n;var i=e.y-t.y;i*=i;var r=o(n+i);return r},f=function(t,e){var n=(t.x+e.x)/2,i=(t.y+e.y)/2;
return l(n,i)},g=function(e,n,i){var r,o=void 0!==arguments[3]?arguments[3]:!0,s=l(0,0),a=l(e.x,e.y),u=l(n.x,n.y),d=i,p=new t(s,a),m=new t(a,u),f=new t(a,d),g=h(f,m),v=h(m,m);
r=0!==v?g/v:0,o===!1&&(0>r?r=0:r>1&&(r=1));var b=c(p,m.multiply(r)),y=l(b.x,b.y);
return[y,r]},v=function(t,e){var n=void 0!==arguments[2]?arguments[2]:.5,i=e.x-t.x,r=e.y-t.y,o=l(t.x+n*i,t.y+n*r);
return o},b=function(e,o){for(var s,u,c=void 0!==arguments[2]?arguments[2]:22.5,h=new t(e,l(e.x,e.y-1e3)),p=new t(e,o),f=d(h,p),g=[],v=0;360>=v;v+=c)g.push(v);
for(var b,y=1/0,x=g[Symbol.iterator]();!(b=x.next()).done;)s=b.value,u=s-f,r(u)<r(y)&&(y=u);
f+=y,360===f&&(f=0);var _=a(f-90),S=m(e,o),w=new t(i(_),n(_));w.length=S;var C=l(e.x+w.x,e.y+w.y);
return C},y=function(t,e,n){var i=(n.y-e.y)/(n.x-e.x),a=e.y-i*e.x,l=r(i*t.x-t.y+a)/o(s(i,2)+1);
return l},x=function(t){var e,n,i,r=void 0!==arguments[1]?arguments[1]:1,o=0,s=0;
if(t.length-1>2)for(var a=2;a<t.length;a+=1)e=y(t[a],t[1],t[t.length-1]),e>s&&(o=a,s=e);
var l;return s>r?(n=x(t.slice(1,o),r),i=x(t.slice(o),r),l=n.concat(i)):l=t,l};return{get comparePoints(){return p
},get getDistanceBetweenPoints(){return m},get getPointBetweenTwoPoints(){return f
},get getNearestPointOnLine(){return g},get getPointAtFraction(){return v},get snapPointToAngleMultiple(){return b
},get getPerpendicularDistance(){return y},get getRamerDouglasPeuckerPoints(){return x
}}}),System.register("utils/random",[],function(){"use strict";var t=System.get("utils/math"),e=t.floor,n=t.round,i=function(){var t=void 0!==arguments[0]?arguments[0]:0,e=void 0!==arguments[1]?arguments[1]:100,i=void 0!==arguments[2]?arguments[2]:0,r=t+Math.random()*(e-t);
return n(r,i)},r=function(){for(var t,e=void 0!==arguments[0]?arguments[0]:10,n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz!@#$%^&*()_+-={}[]:<>,.",i="",r=0;e>r;r+=1)t=Math.floor(Math.random()*n.length),i+=n.substring(t,t+1);
return i},o=function(){for(var t,e=void 0!==arguments[0]?arguments[0]:"id-",n=0;;){if(t=e+n,null===document.getElementById(t))return t;
n+=1}},s=function(t){for(var n,r,o,s=t.length;--s;)n=i(0,1,5),r=e(n*(s+1)),o=t[r],t[r]=t[s],t[s]=o;
return t};return{get generateRandomNumber(){return i},get generateRandomString(){return r
},get generateUniqueID(){return o},get shuffle(){return s}}}),System.register("utils/rect",[],function(){"use strict";
var t=System.get("utils/dom"),e=t.createSVGPoint,n=t.createSVGRect,i=System.get("utils/math").max,r=function(t,i){var r=e(t.left,t.top),o=e(t.right,t.bottom);
r=r.matrixTransform(i),o=o.matrixTransform(i);var s=n({x:r.x,y:r.y,width:o.x-r.x,height:o.y-r.y});
return s},o=function(t){for(var e,n,r,o=[],s=t[Symbol.iterator]();!(r=s.next()).done;)e=r.value,n=e.width*e.height,o.push(n);
var a=i.apply(null,$traceurRuntime.spread(o)),l=o.indexOf(a),u=t[l];return u},s=function(t){var i,r,o,s;
if(0===t.length)return n(0,0,0,0);if(1===t.length)return i=t[0],n(i.x,i.y,i.width,i.height);
for(var a,l=[],u=[],c=t[Symbol.iterator]();!(a=c.next()).done;)r=a.value,l.push(e(r.x,r.y)),u.push(e(r.x+r.width,r.y+r.height));
for(var h,d=e(l[0]),p=e(u[0]),m=l[Symbol.iterator]();!(h=m.next()).done;)o=h.value,o.x<d.x&&(d.x=o.x),o.y<d.y&&(d.y=o.y);
for(var f,g=u[Symbol.iterator]();!(f=g.next()).done;)s=f.value,s.x>p.x&&(p.x=s.x),s.y>p.y&&(p.y=s.y);
var v=n(d.x,d.y,p.x-d.x,p.y-d.y);return v},a=function(t,e){return e.x>=t.x&&e.y>=t.y&&e.x+e.width<=t.x+t.width&&e.y+e.height<=t.y+t.height?!0:!1
},l=function(t,e){return e.x>=t.x&&e.x<=t.x+t.width&&e.y>=t.y&&e.y<=t.y+t.height?!0:!1
},u=function(t,e){return t.left<=e.right&&e.left<=t.right&&t.top<=e.bottom&&e.top<=t.bottom
};return{get transformRect(){return r},get getBiggestRect(){return o},get combineRects(){return s
},get rectContainsRect(){return a},get rectContainsPoint(){return l},get rectIntersectsRect(){return u
}}}),System.register("utils/relationship",[],function(){"use strict";var t=System.get("utils/constants"),e=t.CONTAINER_ELEMENTS,n=t.SHAPE_ELEMENTS,i=t.GRAPHICS_ELEMENTS,r=t.TEXT_CONTENT_ELEMENTS,o=System.get("utils/text").getTspansIntersectedByRange,s=function(t){for(var e,n,i,r=[],o=["path","text","rect","circle","ellipse","line","polyline","polygon","use"],a=t[Symbol.iterator]();!(i=a.next()).done;)e=i.value,n=e.localName,o.includes(n)?r.push(e):("g"===n||"a"===n)&&(r=$traceurRuntime.spread(r,s(e.children)));
return r},a=function(t,s){var l,u,c,h,d,p,m,f,g,v,b,y,x,_,S=void 0!==arguments[2]?arguments[2]:null,w=[];
if("fill"===t||"fill-opacity"===t||"fill-rule"===t||"stroke"===t||"stroke-dasharray"===t||"stroke-dashoffset"===t||"stroke-linecap"===t||"stroke-linejoin"===t||"stroke-miterlimit"===t||"stroke-opacity"===t||"stroke-width"===t||"vector-effect"===t)for(var C,E=s[Symbol.iterator]();!(C=E.next()).done;)l=C.value,u=l.localName,"text"===u?S&&S.intersectsNode(l)?(c=l,h=o(S),h.length>0&&(d="backward"===S.direction?h[h.length-1]:h[0],p=h.remove(d),w=$traceurRuntime.spread(w,[d],p))):w=$traceurRuntime.spread(w,a(t,l.children,S)):n.includes(u)||r.includes(u)?w.push(l):("g"===u||"a"===u)&&(w=$traceurRuntime.spread(w,a(t,l.children,S)));
else if("buffered-rendering"===t||"clip-path"===t||"filter"===t||"mask"===t||"opacity"===t||"mix-blend-mode"===t||"isolation"===t)for(var P,L=s[Symbol.iterator]();!(P=L.next()).done;)m=P.value,f=m.localName,(i.includes(f)||e.includes(f))&&w.push(m);
else if("direction"===t||"font"===t||"font-family"===t||"font-size"===t||"font-size-adjust"===t||"font-stretch"===t||"font-style"===t||"font-variant"===t||"font-weight"===t||"glyph-orientation-horizontal"===t||"glyph-orientation-vertical"===t||"letter-spacing"===t||"text-anchor"===t||"text-transform"===t||"text-decoration"===t||"word-spacing"===t||"white-space"===t)for(var T,A=s[Symbol.iterator]();!(T=A.next()).done;)g=T.value,v=g.localName,"text"===v?S&&S.intersectsNode(g)?(b=g,y=o(S),y.length>0&&(x="backward"===S.direction?y[y.length-1]:y[0],_=y.remove(x),w=$traceurRuntime.spread(w,[x],_))):w=$traceurRuntime.spread(w,a(t,g.children,S)):r.includes(v)?w.push(g):("g"===v||"a"===v)&&(w=$traceurRuntime.spread(w,a(t,g.children,S)));
return w},l=function(t){for(var e=[],n=0;n<t.parentElement.children.length;n+=1)t.parentElement.children[n]!==t&&e.push(t.parentElement.children[n]);
return e},u=function(t,n){var i=c(t,n);if(i)for(;!e.includes(i.localName);)i=i.parentNode;
return i},c=function(t,e){for(;t=t.parentNode;)if(t.contains&&t.contains(e))return t;
return null},h=function(t){var n=void 0!==arguments[1]?arguments[1]:document.documentElement,i=[];
if(t!==n)for(;t.parentElement&&t.parentElement!==n;)t=t.parentElement,e.includes(t.localName)&&i.unshift(t);
return i},d=function(t){var e=[],n=function(t){for(var i,r,o=t.children[Symbol.iterator]();!(r=o.next()).done;)i=r.value,e.push(i),i.children&&i.children.length>0&&n(i)
};return n(t),e},p=function(t){for(var e,n,i=void 0!==arguments[1]?arguments[1]:!0,r=System.get("utils/dom").isGraphicsElement,o=[],s=t[Symbol.iterator]();!(n=s.next()).done;)e=n.value,"g"===e.localName||"a"===e.localName?i&&(o=o.concat(m(e,i))):r(e)&&o.push(e);
return o},m=function(t){for(var e,n,i=System.get("utils/dom").isGraphicsElement,r=d(t),o=[],s=r[Symbol.iterator]();!(n=s.next()).done;)e=n.value,i(e)&&o.push(e);
return o},f=function(t){var e;for(var n in t.parentElement.children)if(e=t.parentElement.children[n],e===t)return parseInt(n)
},g=function(t){for(var e,n,i=[],r=t[Symbol.iterator]();!(n=r.next()).done;)e=n.value,i.push(e);
return i.sort(function(t,e){return 3-(6&t.compareDocumentPosition(e))}),i},v=function(t){var e,n,i,r=[];
t=g(t);for(var o,s=t[Symbol.iterator]();!(o=s.next()).done;)if(e=o.value,e===t[0])r.push([e]);
else{n=!1;for(var a,l=r[Symbol.iterator]();!(a=l.next()).done;)i=a.value,e.parentElement===i[0].parentElement&&(i.push(e),n=!0);
n===!1&&r.push([e])}return r},b=function(t){var e=void 0!==arguments[1]?arguments[1]:1;
if("max"===e)for(;t.previousElementSibling;)t.parentNode.insertBefore(t,t.previousElementSibling);
else for(var n=0;e>n;n+=1)t.previousElementSibling&&t.parentNode.insertBefore(t,t.previousElementSibling)
},y=function(t){var e=void 0!==arguments[1]?arguments[1]:1;if("max"===e)for(;t.nextElementSibling;)t.parentNode.insertBefore(t.nextElementSibling,t);
else for(var n=0;e>n;n+=1)t.nextElementSibling&&t.parentNode.insertBefore(t.nextElementSibling,t)
},x=function(t){var e=System.get("utils/bbox").getClientBBox,n=(System.get("utils/rect").transformRect,t.ownerSVGElement.getScreenCTM().inverse(),e(t)),i=t.ownerSVGElement.getIntersectionList(n,t.ownerSVGElement);
return i=Array.from(i),i.remove(t),i},_=function(t){for(var e,n,i,r=[],o=t[Symbol.iterator]();!(i=o.next()).done;)e=i.value,r.push(e);
for(;r.length>1;)n=r[0].compareDocumentPosition(r[1]),r.remove(4===n||20===n?r[0]:r[1]);
return r[0]},S=function(t,e){var n=(System.get("utils/dom").isGraphicsElement,System.get("utils/bbox").getClientBBox),i=System.get("utils/rect"),r=(i.transformRect,i.rectIntersectsRect);
if(!t.transform||!e.transform)return!1;var o=(t.getScreenCTM().inverse(),n(t)),s=(e.getScreenCTM().inverse(),n(e));
return r(o,s)},w=function(t){for(var e,n,i=[],r=[],o=function(){var e,o,s=n.value;
e=[],o=function(n){for(var i,s,a,l=t[Symbol.iterator]();!(a=l.next()).done;)i=a.value,s=!e.includes(i)&&!r.includes(i),i!==n&&s&&S(i,n)&&(e.push(i),r.push(i),o(i))
},o(s),e.length>0&&i.push(g(e))},s=t[Symbol.iterator]();!(n=s.next()).done;)o();for(var a,l=t[Symbol.iterator]();!(a=l.next()).done;)e=a.value,r.includes(e)||i.push([e]);
return i};return{get queryClippingElements(){return s},get queryStylableElements(){return a
},get getSiblings(){return l},get getCommonContainer(){return u},get getCommonAncestor(){return c
},get getContainers(){return h},get getDescendants(){return d},get getGraphicsElements(){return p
},get getGraphicsDescendants(){return m},get getElementIndex(){return f},get sortByDomPosition(){return g
},get sortBySiblingElements(){return v},get moveElementUp(){return b},get moveElementDown(){return y
},get getIntersectingElements(){return x},get getTopStackedElement(){return _},get isElementIntersectingElement(){return S
},get sortByIntersectingElements(){return w}}}),System.register("utils/schneider-curves",[],function(){"use strict";
var t=System.get("classes/vector").default,e=System.get("utils/dom").createSVGPoint,n=System.get("utils/math"),i=n.abs,r=n.floor,o=n.max,s=System.get("utils/point").getDistanceBetweenPoints,a=System.get("utils/vector"),l=a.subtractVectors,u=a.sumVectors,c=a.vectorsDotProduct,h=function(e,n){var i=l(new t(e[1]),new t(e[0])),r=l(new t(e[e.length-3]),new t(e[e.length-2]));
i=i.normalize(),r=r.normalize();var o=d(e,0,e.length-1,i,r,n);return o},d=function(n,i,r,a,c,h){var g,v,y,x,_,S,w,C,E,P,L,T;
if(r-i===1)return g=n[i],v=n[r],y=s(g,v)/3,x=new t(g),_=new t(v),S=u(x,a.scale(y)),w=u(_,c.scale(y)),C=[g,e(S),e(w),v],[C];
for(var A,k=m(n,i,r),O=o(h,h*h),M=0;4>=M;M+=1){if(E=p(n,i,r,k,a,c),P=b(n,i,r,E,k),L=P[0],T=P[1],h>L)return[E];
if(A=T,L>=O)break;f(n,i,r,k,E),O=L}var j=l(new t(n[A-1]),new t(n[A])),R=l(new t(n[A]),new t(n[A+1])),I=u(j,R).multiply(.5).normalize(),B=d(n,i,A,a,I,h),N=d(n,A,r,I.multiply(-1),c,h),V=B.concat(N);
return V},p=function(n,r,o,a,h,d){for(var p,m,f,g,v,b,y,x,_,S,w,C,E,P,L=n[r],T=n[o],A=new t(L),k=new t(T),O=[[0,0],[0,0]],M=[0,0],j=o-r+1,R=0;j>R;R+=1)p=a[R],m=1-p,f=3*p*m,g=m*m*m,v=f*m,b=f*p,y=p*p*p,x=h.scale(v),_=d.scale(b),O[0][0]+=c(x,x),O[0][1]+=c(x,_),O[1][0]=O[0][1],O[1][1]+=c(_,_),S=l(new t(n[r+R]),A.multiply(g+v)),S=l(S,k.multiply(b+y)),M[0]+=c(x,S),M[1]+=c(_,S);
var I,B,N=O[0][0]*O[1][1]-O[1][0]*O[0][1],V=1e-6;i(N)>V?(w=O[0][0]*M[1]-O[1][0]*M[0],C=M[0]*O[1][1]-M[1]*O[0][1],I=C/N,B=w/N):(E=O[0][0]+O[0][1],P=O[1][0]+O[1][1],I=B=i(E)>V?M[0]/E:i(P)>V?M[1]/P:0);
var D=s(T,L);V*=D,(V>I||V>B)&&(I=B=D/3);var G=u(A,h.scale(I)),X=u(k,d.scale(B)),Y=[L,e(G),e(X),T];
return Y},m=function(t,e,n){for(var i=[0],r=e+1;n>=r;r+=1)i[r-e]=i[r-e-1]+s(t[r],t[r-1]);
for(var o=1,a=n-e;a>=o;o+=1)i[o]/=i[n-e];return i},f=function(t,e,n,i,r){for(var o=[],s=e;n>=s;s+=1)o[s-e]=g(r,t[s],i[s-e]);
return o},g=function(e,n,r){for(var o,s,a=[],u=[],h=0;2>=h;h+=1)o=l(new t(e[h+1]),new t(e[h])),a[h]=o.multiply(3);
for(var d=0;1>=d;d++)s=l(a[d+1],a[d]),u[d]=s.multiply(2);var p=v(3,e,r),m=v(2,a,r),f=v(1,u,r),g=l(p,new t(n)),b=c(m,m)+c(g,f);
return i(b)<1e-6?r:r-c(g,m)/b},v=function(e,n,i){for(var r=function(){for(var e,i,r=0,o=[],s=n[Symbol.iterator]();!(i=s.next()).done;)e=i.value,o[r++]=new t(e);
return o}(),o=1;e>=o;o+=1)for(var s=0;e-o>=s;s+=1)r[s]=u(r[s].multiply(1-i),r[s+1].multiply(i));
return r[0]},b=function(e,n,i,o,s){for(var a,u,c=r((i-n+1)/2),h=0,d=n+1;i>d;d++)a=l(v(3,o,s[d-n]),new t(e[d])),u=a.length,u>=h&&(h=u,c=d);
return[h,c]};return{get getSchneiderCurves(){return h}}}),System.register("utils/string",[],function(){"use strict";
var t=function(t){return t.charAt(0).toUpperCase()+t.substr(1)},e=function(t){return t.replace(/(\-[a-z])/g,function(t){return t.toUpperCase().replace("-","")
})},n=function(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()
})},i=function(t){return t===t.toLowerCase()};return{get capitalize(){return t},get toCamelCase(){return e
},get toDashCase(){return n},get isLowerCase(){return i}}}),System.register("utils/text",[],function(){"use strict";
var t=(System.get("utils/color").generateRandomHexColorString,System.get("utils/dom")),e=t.createElement,n=t.closest,i=System.get("utils/object").keys,r=function(t){var n,r,o,s,a,l,u,c,h,d,p,m,f=t.getElementsByTagName("textPath")[0];
f&&(t.innerHTML="",t.append(f)),t.style.whiteSpace="pre",t.normalize();for(var g,v=t.querySelectorAll("tref"),b=v[Symbol.iterator]();!(g=b.next()).done;)n=g.value,r=n.getAttribute("href")||n.getAttribute("xlink:href"),o=r?t.ownerSVGElement.querySelector(r):null,o?(s=e("tspan"),s.textContent=o.textContent,n.replace(o)):n.remove();
for(var y=[],x=f?f:t,_=document.createTreeWalker(x,NodeFilter.SHOW_TEXT,null),S=function(t,e){var n,r=i(t),o=i(e);
if(r.length!==o.length)return!1;for(var s,a=r[Symbol.iterator]();!(s=a.next()).done;)if(n=s.value,t[n]!==e[n])return!1;
return!0};_.nextNode();){a=_.currentNode,l={};for(var w=a.parentNode;w!==t;w=w.parentNode)for(var C,E=w.style[Symbol.iterator]();!(C=E.next()).done;)u=C.value,void 0===l[u]&&(l[u]=w.style[u]);
c=y[y.length-1],c&&S(c.style,l)?c.textContent+=a.textContent:(h={textContent:a.textContent,style:l},y.push(h))
}for(var P,L=document.createDocumentFragment(),T=y[Symbol.iterator]();!(P=T.next()).done;){d=P.value,p=e("svg:tspan"),p.textContent=d.textContent;
for(var A,k=i(d.style)[Symbol.iterator]();!(A=k.next()).done;)m=A.value,p.style[m]=d.style[m];
L.appendChild(p)}x.innerHTML="",x.append(L)},o=function(t){var e,i;if(t&&!t.collapsed){var r=n(t.startContainer,"text");
if(t){var o=a(t,r,"start"),s=a(t,r,"end"),l=r.getElementsByTagName("textPath")[0],u=l?l:r,c=function(t){for(var e,n,i,r,o,s,a,l,c,h,d=0,p=null,m=null,f=u.children[Symbol.iterator]();!(h=f.next()).done;){e=h.value,n=0;
for(var g,v=e.textContent[Symbol.iterator]();!(g=v.next()).done;)i=g.value,d===t&&(p=e,m=n),d+=1,n+=1
}p&&(r=p.textContent,o=r.slice(0,m),s=r.slice(m,r.length),o.length>0&&s.length>0&&(a=document.createDocumentFragment(),l=p.cloneNode(!1),l.textContent=o,a.appendChild(l),c=p.cloneNode(!1),c.textContent=s,a.appendChild(c),p.replace(a)))
};c(o),c(s);for(var h,d=0,p=null,m=null,f=u.children[Symbol.iterator]();!(h=f.next()).done;){e=h.value;
for(var g,v=e.textContent[Symbol.iterator]();!(g=v.next()).done;)i=g.value,d===o&&(p=e),d===s-1&&(m=e),d+=1
}t.setStart(p.childNodes[0],0),t.setEnd(m.childNodes[0],m.childNodes[0].length)}}},s=function(t){if(t&&!t.collapsed){n(t.startContainer,"text")
}},a=function(t,e){var n=void 0!==arguments[2]?arguments[2]:"start";t=t.cloneRange(),"start"===n?t.collapse(!0):"end"===n&&t.collapse(!1);
for(var i=0,r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,function(e){var n=new Range;
return n.selectNode(e),n.compareBoundaryPoints(Range.END_TO_END,t)<1?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT
});r.nextNode();)i+=r.currentNode.length;return 3===t.startContainer.nodeType&&(i+=t.startOffset),i
},l=function(t){var e=0,n=0;return t.x.baseVal.numberOfItems>0&&(e=t.x.baseVal.getItem(0).value),t.y.baseVal.numberOfItems>0&&(n=t.y.baseVal.getItem(0).value),{x:e,y:n}
},u=function(t){var e,n,i,r=[];if(t.commonAncestorContainer.nodeType===Document.TEXT_NODE){for(e=t.commonAncestorContainer;e=e.parentElement;)if("tspan"===e.localName){r.push(e);
break}}else for(n=document.createTreeWalker(t.commonAncestorContainer,NodeFilter.SHOW_ELEMENT,null);i=n.nextNode();)t.intersectsNode(i)&&"tspan"===i.localName&&r.push(i);
return r},c=function(t){var n=e("div");return n.style.fontFamily=t,""!==n.style.fontFamily
};return{get normalizeText(){return r},get normalizeTextInRangeBeforeEditing(){return o
},get normalizeTextInRangeAfterEditing(){return s},get getRangeOffsetRelativeToElement(){return a
},get getTextOffset(){return l},get getTspansIntersectedByRange(){return u},get isValidFontFamilyValue(){return c
}}}),System.register("utils/time",[],function(){"use strict";var t=function(t,e){var n=setTimeout(e,t);
return n},e=function(t,e){var n=setInterval(e,t);return n},n=function(t){requestAnimationFrame(t)
},i=function(t,e){var n=0,i=function(){t>n?(n+=1,webkitRequestAnimationFrame(i)):e()
};i()},r=function(){return Date.now()},o=function(){var t=new Date,e=t.getFullYear(),n=("0"+(t.getMonth()+1)).slice(-2),i=("0"+t.getDate()).slice(-2),r=("0"+t.getHours()).slice(-2),o=("0"+t.getMinutes()).slice(-2),s=("0"+t.getSeconds()).slice(-2),a=e+"-"+n+"-"+i+"T"+r+":"+o+":"+s;
return a};return{get createTimeout(){return t},get createInterval(){return e},get nextTick(){return n
},get sleepFrames(){return i},get getTimestamp(){return r},get getISOTimestamp(){return o
}}}),System.register("utils/transform",[],function(){"use strict";var t=System.get("utils/bbox"),e=t.getUserBBox,n=t.getClientBBox,i=System.get("utils/dom"),r=i.createSVGMatrix,o=i.createSVGPoint,s=i.createSVGLength,a=System.get("utils/math"),l=a.abs,u=a.sqrt,c=a.pow,h=a.tan,d=a.atan2,p=a.signum,m=a.degToRad,f=a.radToDeg,g=a.round,v=System.get("utils/rect"),b=(v.transformRect,v.combineRects),y=function(){for(var t,i,r,s,a,l,u,c,h,d,p,m,f=[],g=0;g<arguments.length;g++)f[g]=arguments[g];
for(var v,y,x=[],_=f[Symbol.iterator]();!(y=_.next()).done;)t=y.value,i=e(t),r=t.getScreenCTM(),s=0,a=0,t.hasAttribute("data-transform-origin")&&(l=t.getAttribute("data-transform-origin").split(" "),s=parseFloat(l[0]),a=parseFloat(l[1])),u=i.x+i.width/2+s,c=i.y+i.height/2+a,v=o(u,c),v=v.matrixTransform(r),x.push(v);
if(1===f.length)v=x[0];else{h=!0;for(var S,w=x[Symbol.iterator]();!(S=w.next()).done;)if(d=S.value,d.x<x[0].x-3||d.x>x[0].x+3||d.y<x[0].y-3||d.y>x[0].y+3){h=!1;
break}h?v=x[0]:(p=function(){for(var t,e,i=0,r=[],o=f[Symbol.iterator]();!(e=o.next()).done;)t=e.value,r[i++]=n(t);
return r}(),m=b(p),v=o(m.x+m.width/2,m.y+m.height/2))}return v},x=function(t){var e=u(c(t.a,2)+c(t.b,2)),n=u(c(t.c,2)+c(t.d,2));
return{scaleX:e,scaleY:n}},_=function(t){var e=d(t.b,t.a);return e=f(e)},S=function(t,e,n){var i=r(t);
return i.e=i.e+e*i.a+n*i.c,i.f=i.f+e*i.b+n*i.d,i},w=function(t,e,n){var i=void 0!==arguments[3]?arguments[3]:0,o=void 0!==arguments[4]?arguments[4]:0,s=r(t),a=m(e),l=m(n),u=r();
return u=C(u,h(a),h(l)),s=S(s,i,o),s.multiplyBy(u),s=S(s,-i,-o)},C=function(t,e,n){var i=r(t),o=i.a,s=i.b;
return i.a+=n*i.c,i.b+=n*i.d,i.c+=e*o,i.d+=e*s,i},E=function(t){var e=t,n=e.a,i=e.b,o=e.c,s=e.d,a=e.e,u=e.f;
0===n&&(n=1e-4),0===s&&(s=1e-4);var c=r(p(n),i/l(n),o/l(s),p(s),a,u),h=r(l(n),0,0,l(s),0,0);
return[c,h]},P=function(t){var e=r(t.a,t.b,t.c,t.d,0,0),n=(t.f*e.a-t.e*e.b)/(-e.c*e.b+e.d*e.a),i=(t.e-e.c*n)/e.a,o=r(1,0,0,1,i,n);
return[e,o]},L=function(t){var e=E(t),n=e[0],i=e[1],r=P(n),o=r[0],s=r[1],a=s.multiply(i);
return{baseTransform2:o,transcaleTransform:a}},T=function(t){var e,n=void 0!==arguments[1]?arguments[1]:!1,i=["rect","ellipse","image","text","path","g","a","foreignObject"],r=t.localName;
if(i.includes(r)){if("rect"===r)A(t,n);else if("ellipse"===r)k(t);else if("image"===r)O(t);
else if("text"===r)M(t);else if("path"===r)j(t);else if("g"===r||"a"===r)for(var o,s=t.children[Symbol.iterator]();!(o=s.next()).done;)e=o.value,T(e);
t.transform.baseVal.consolidate().matrix.isIdentity()&&t.removeAttribute("transform")
}},A=function(t,e){var n;if(t.hasAttribute("transform")){var i=r(t.transform.baseVal.consolidate().matrix),o=E(i),s=o[0],a=o[1];
t.setAttribute("transform",s.toString()),t.setAttribute("x",t.x.baseVal.value*a.a),t.setAttribute("y",t.y.baseVal.value*a.d),t.setAttribute("width",t.width.baseVal.value*a.a),t.setAttribute("height",t.height.baseVal.value*a.d),e&&(n=getComputedStyle(t).strokeWidth,n=parseFloat(n),t.style.strokeWidth=n*a.a);
var l=r(t.transform.baseVal.consolidate().matrix),u=P(l),c=u[0],h=u[1];t.setAttribute("transform",c.toString()),t.setAttribute("x",t.x.baseVal.value+h.e),t.setAttribute("y",t.y.baseVal.value+h.f)
}},k=function(t){if(t.hasAttribute("transform")){var e=r(t.transform.baseVal.consolidate().matrix),n=E(e),i=n[0],o=n[1];
t.setAttribute("transform",i.toString()),t.setAttribute("cx",t.cx.baseVal.value*o.a),t.setAttribute("cy",t.cy.baseVal.value*o.d),t.setAttribute("rx",t.rx.baseVal.value*o.a),t.setAttribute("ry",t.ry.baseVal.value*o.d);
var s=r(t.transform.baseVal.consolidate().matrix),a=P(s),l=a[0],u=a[1];t.setAttribute("transform",l.toString()),t.setAttribute("cx",t.cx.baseVal.value+u.e),t.setAttribute("cy",t.cy.baseVal.value+u.f)
}},O=function(t){if(t.hasAttribute("transform")){var e=r(t.transform.baseVal.consolidate().matrix),n=P(e),i=n[0],o=n[1];
t.setAttribute("transform",i.toString()),t.setAttribute("x",t.x.baseVal.value+o.e),t.setAttribute("y",t.y.baseVal.value+o.f)
}},M=function(t){var e,n,i,o,a;if(t.hasAttribute("transform")){var l=r(t.transform.baseVal.consolidate().matrix),u=E(l),c=u[0],h=u[1];
if(h.a===h.d){t.setAttribute("transform",c.toString()),e=getComputedStyle(t).fontSize,e=parseInt(e),e=g(e*h.a,1),t.style.fontSize=e;
for(var d=0;d<t.x.baseVal.numberOfItems;d+=1)n=t.x.baseVal.getItem(d),n.value=n.value*h.a;
for(var p=0;p<t.y.baseVal.numberOfItems;p+=1)i=t.y.baseVal.getItem(p),i.value=i.value*h.d
}var m=r(t.transform.baseVal.consolidate().matrix),f=P(m),v=f[0],b=f[1];if(t.setAttribute("transform",v.toString()),0!==b.e)if(t.x.baseVal.numberOfItems>0)for(var y=0;y<t.x.baseVal.numberOfItems;y+=1)o=t.x.baseVal.getItem(y),o.value+=b.e;
else t.x.baseVal.appendItem(s(b.e));if(0!==b.f)if(t.y.baseVal.numberOfItems>0)for(var x=0;x<t.y.baseVal.numberOfItems;x+=1)a=t.y.baseVal.getItem(x),a.value+=b.f;
else t.y.baseVal.appendItem(s(b.f))}},j=function(t){if(t.hasAttribute("transform")){var e=System.get("utils/path").normalizePathData;
e(t);for(var n=r(t.transform.baseVal.consolidate().matrix),i=t.pathSegList,s={0:0,1:0,2:0,"":0},a={0:0,1:0,2:0,"":0},l=function(t){var e=i.getItem(t);
["",1,2].forEach(function(t){var i,r="x"+t,l="y"+t,u=e[r],c=e[l];(void 0!==u||void 0!==c)&&(void 0===u&&(u=s[""]),void 0===c&&(c=a[""]),i=o(u,c).matrixTransform(n),s[t]=e[r]=i.x,a[t]=e[l]=i.y)
}),"m"===e.pathSegTypeAsLetter||"M"===e.pathSegTypeAsLetter?(s[0]=s[""],a[0]=a[""]):("z"===e.pathSegTypeAsLetter||"Z"===e.pathSegTypeAsLetter)&&(s[""]=s[0],a[""]=a[0])
},u=0,c=i.numberOfItems;c>u;u+=1)l(u,c);t.removeAttribute("transform")}};return{get getTransformOriginPoint(){return y
},get getScale(){return x},get getRotationAngle(){return _},get skew(){return w},get shear(){return C
},get extractScaleTransform(){return E},get extractTranslateTransform(){return P},get extractTranscaleTransform(){return L
},get normalizeTransform(){return T}}}),System.register("utils/type",[],function(){"use strict";
var t=function(t){return window.isNaN(t)},e=function(t){return window.isFinite(t)
},n=function(e){return t(e)?!1:"number"==typeof e?!0:!1},i=function(t){return"string"==typeof t?!0:!1
},r=function(t){return t===!!t},o=function(t){return"object"==typeof t&&null!==t},s=function(t){return Array.isArray(t)
},a=function(t){return"function"==typeof t},l=function(n){return!t(parseFloat(n))&&e(n)
};return{get isNaN(){return t},get isFinite(){return e},get isNumber(){return n},get isString(){return i
},get isBoolean(){return r},get isObject(){return o},get isArray(){return s},get isFunction(){return a
},get isNumeric(){return l}}}),System.register("utils/vector",[],function(){"use strict";
var t=System.get("utils/math"),e=t.abs,n=t.atan2,i=t.radToDeg,r=System.get("classes/vector").default,o=function(t,r){var o=n(r.y,r.x)-n(t.y,t.x),s=i(o);
return 0>s&&(s=360-e(s)),s},s=function(t,e){return t.x*e.x+t.y*e.y},a=function(t,e){return new r(t.x-e.x,t.y-e.y)
},l=function(t,e){return new r(t.x+e.x,t.y+e.y)},u=function(t,e){return t.x===e.x&&t.y===e.y?!0:!1
};return{get getAngleBetweenVectors(){return o},get vectorsDotProduct(){return s},get subtractVectors(){return a
},get sumVectors(){return l},get compareVectors(){return u}}});