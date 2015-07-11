!function(t){"use strict";function e(t){return{configurable:!0,enumerable:!1,value:t,writable:!0}
}function n(){return"__$"+Math.floor(1e9*Math.random())+"$"+ ++N+"$__"}function i(){var t=n();
return G[t]=!0,t}function r(t){return"object"==typeof t&&t instanceof a}function o(t){return r(t)?"symbol":typeof t
}function s(t){var e=new a(t);if(!(this instanceof s))return e;throw new TypeError("Symbol cannot be new'ed")
}function a(t){var e=n();R(this,U,{value:this}),R(this,$,{value:e}),R(this,H,{value:t}),c(this),V[e]=this
}function u(t){var e=t[q];return e&&e.self===t?e:z(t)?(Z.hash.value=X++,Z.self.value=t,K.value=O(null,Z),R(t,q,K),K.value):void 0
}function c(t){return u(t),A.apply(this,arguments)}function l(t){return u(t),D.apply(this,arguments)
}function h(t){return u(t),P.apply(this,arguments)}function d(t){return r(t)?t[$]:t
}function m(t){for(var e=[],n=L(t),i=0;i<n.length;i++){var r=n[i];V[r]||G[r]||e.push(r)
}return e}function f(t,e){return T(t,d(e))}function b(t){for(var e=[],n=L(t),i=0;i<n.length;i++){var r=V[n[i]];
r&&e.push(r)}return e}function g(t){return B.call(this,d(t))}function p(e){return t.traceur&&t.traceur.options[e]
}function _(t,e,n){var i,o;return r(e)&&(i=e,e=e[$]),t[e]=n,i&&(o=T(t,e))&&R(t,e,{enumerable:!1}),n
}function v(t,e,n){return r(e)&&(n.enumerable&&(n=O(n,{enumerable:{value:!1}})),e=e[$]),R(t,e,n),t
}function y(t){R(t,"defineProperty",{value:v}),R(t,"getOwnPropertyNames",{value:m}),R(t,"getOwnPropertyDescriptor",{value:f}),R(t.prototype,"hasOwnProperty",{value:g}),R(t,"freeze",{value:c}),R(t,"preventExtensions",{value:l}),R(t,"seal",{value:h}),t.getOwnPropertySymbols=b
}function w(t){for(var e=1;e<arguments.length;e++)for(var n=L(arguments[e]),i=0;i<n.length;i++){var r=n[i];
G[r]||!function(e,n){R(t,n,{get:function(){return e[n]},enumerable:!0})}(arguments[e],n[i])
}return t}function x(t){return null!=t&&("object"==typeof t||"function"==typeof t)
}function S(t){if(null==t)throw C();return j(t)}function E(t){if(null==t)throw new TypeError("Value cannot be converted to an Object");
return t}function k(t){t.Symbol=s,t.Reflect=t.Reflect||{},t.Reflect.global=t.Reflect.global||t,y(t.Object)
}if(!t.$traceurRuntime){var j=Object,C=TypeError,O=j.create,M=j.defineProperties,R=j.defineProperty,A=j.freeze,T=j.getOwnPropertyDescriptor,L=j.getOwnPropertyNames,I=j.keys,B=j.prototype.hasOwnProperty,D=(j.prototype.toString,Object.preventExtensions),P=Object.seal,z=Object.isExtensible,F={"void":function(){},any:function(){},string:function(){},number:function(){},"boolean":function(){}},W=e,N=0,$=n(),H=n(),U=n(),V=O(null),G=O(null);
R(s.prototype,"constructor",e(s)),R(s.prototype,"toString",W(function(){var t=this[U];
if(!p("symbols"))return t[$];if(!t)throw TypeError("Conversion from symbol to string");
var e=t[H];return void 0===e&&(e=""),"Symbol("+e+")"})),R(s.prototype,"valueOf",W(function(){var t=this[U];
if(!t)throw TypeError("Conversion from symbol to string");return p("symbols")?t:t[$]
})),R(a.prototype,"constructor",e(s)),R(a.prototype,"toString",{value:s.prototype.toString,enumerable:!1}),R(a.prototype,"valueOf",{value:s.prototype.valueOf,enumerable:!1});
var q=i(),K={value:void 0},Z={hash:{value:void 0},self:{value:void 0}},X=0;s.iterator=s(),c(a.prototype),k(t),t.$traceurRuntime={createPrivateName:i,exportStar:w,getOwnHashObject:u,privateNames:G,setProperty:_,setupGlobals:k,toObject:S,isObject:x,toProperty:d,type:F,"typeof":o,checkObjectCoercible:E,hasOwnProperty:function(t,e){return g.call(t,e)
},defineProperties:M,defineProperty:R,getOwnPropertyDescriptor:T,getOwnPropertyNames:L,keys:I}
}}("undefined"!=typeof global?global:this),function(){"use strict";function t(){for(var t,e=[],n=0,i=0;i<arguments.length;i++){var r=$traceurRuntime.checkObjectCoercible(arguments[i]);
if("function"!=typeof r[$traceurRuntime.toProperty(Symbol.iterator)])throw new TypeError("Cannot spread non-iterable object.");
for(var o=r[$traceurRuntime.toProperty(Symbol.iterator)]();!(t=o.next()).done;)e[n++]=t.value
}return e}$traceurRuntime.spread=t}(),function(){"use strict";function t(t,e){var n=b(t);
do{var i=m(n,e);if(i)return i;n=b(n)}while(n);return void 0}function e(t,e,i,r){return n(t,e,i).apply(t,r)
}function n(e,n,i){var r=t(n,i);return r?r.get?r.get.call(e):r.value:void 0}function i(e,n,i,r){var o=t(n,i);
if(o&&o.set)return o.set.call(e,r),r;throw c("super has no setter '"+i+"'.")}function r(t){for(var e,n={},i=f(t),r=0;r<i.length;r++){var e=i[r];
n[e]=m(t,e)}return n}function o(t,e,n,i){return d(e,"constructor",{value:t,configurable:!0,enumerable:!1,writable:!0}),arguments.length>3?("function"==typeof i&&(t.__proto__=i),t.prototype=l(s(i),r(e))):t.prototype=e,d(t,"prototype",{configurable:!1,writable:!1}),h(t,r(n))
}function s(t){if("function"==typeof t){var e=t.prototype;if(u(e)===e||null===e)return t.prototype;
throw new c("super prototype must be an Object or null")}if(null===t)return null;
throw new c("Super expression must either be null or a function, not "+typeof t+".")
}function a(t,n,i){null!==b(n)&&e(t,n,"constructor",i)}var u=Object,c=TypeError,l=u.create,h=$traceurRuntime.defineProperties,d=$traceurRuntime.defineProperty,m=$traceurRuntime.getOwnPropertyDescriptor,f=$traceurRuntime.getOwnPropertyNames,b=Object.getPrototypeOf;
$traceurRuntime.createClass=o,$traceurRuntime.defaultSuperCall=a,$traceurRuntime.superCall=e,$traceurRuntime.superGet=n,$traceurRuntime.superSet=i
}(),function(){"use strict";function t(t){return{configurable:!0,enumerable:!1,value:t,writable:!0}
}function e(t){return new Error("Traceur compiler bug: invalid state in state machine: "+t)
}function n(){this.state=0,this.GState=p,this.storedException=void 0,this.finallyFallThrough=void 0,this.sent_=void 0,this.returnValue=void 0,this.tryStack_=[]
}function i(t,e,n,i){switch(t.GState){case _:throw new Error('"'+n+'" on executing generator');
case y:if("next"==n)return{value:void 0,done:!0};throw i;case p:if("throw"===n)throw t.GState=y,i;
if(void 0!==i)throw g("Sent value to newborn generator");case v:t.GState=_,t.action=n,t.sent=i;
var r=e(t),o=r===t;return o&&(r=t.returnValue),t.GState=o?y:v,{value:r,done:o}}}function r(){}function o(){}function s(t,e,i){var r=l(t,i),o=new n,s=b(e.prototype);
return s[S]=o,s[E]=r,s}function a(t){return t.prototype=b(o.prototype),t.__proto__=o,t
}function u(){n.call(this),this.err=void 0;var t=this;t.result=new Promise(function(e,n){t.resolve=e,t.reject=n
})}function c(t,e){var n=l(t,e),i=new u;return i.createCallback=function(t){return function(e){i.state=t,i.value=e,n(i)
}},i.errback=function(t){h(i,t),n(i)},n(i),i.result}function l(t,e){return function(n){for(;;)try{return t.call(e,n)
}catch(i){h(n,i)}}}function h(t,e){t.storedException=e;var n=t.tryStack_[t.tryStack_.length-1];
return n?(t.state=void 0!==n.catch?n.catch:n.finally,void(void 0!==n.finallyFallThrough&&(t.finallyFallThrough=n.finallyFallThrough))):void t.handleException(e)
}var d=$traceurRuntime.createPrivateName,m=$traceurRuntime.defineProperties,f=$traceurRuntime.defineProperty,b=Object.create,g=TypeError,p=0,_=1,v=2,y=3,w=-2,x=-3;
n.prototype={pushTry:function(t,e){if(null!==e){for(var n=null,i=this.tryStack_.length-1;i>=0;i--)if(void 0!==this.tryStack_[i].catch){n=this.tryStack_[i].catch;
break}null===n&&(n=x),this.tryStack_.push({"finally":e,finallyFallThrough:n})}null!==t&&this.tryStack_.push({"catch":t})
},popTry:function(){this.tryStack_.pop()},get sent(){return this.maybeThrow(),this.sent_
},set sent(t){this.sent_=t},get sentIgnoreThrow(){return this.sent_},maybeThrow:function(){if("throw"===this.action)throw this.action="next",this.sent_
},end:function(){switch(this.state){case w:return this;case x:throw this.storedException;
default:throw e(this.state)}},handleException:function(t){throw this.GState=y,this.state=w,t
}};var S=d(),E=d();r.prototype=o,f(o,"constructor",t(r)),o.prototype={constructor:o,next:function(t){return i(this[S],this[E],"next",t)
},"throw":function(t){return i(this[S],this[E],"throw",t)}},m(o.prototype,{constructor:{enumerable:!1},next:{enumerable:!1},"throw":{enumerable:!1}}),Object.defineProperty(o.prototype,Symbol.iterator,t(function(){return this
})),u.prototype=b(n.prototype),u.prototype.end=function(){switch(this.state){case w:this.resolve(this.returnValue);
break;case x:this.reject(this.storedException);break;default:this.reject(e(this.state))
}},u.prototype.handleException=function(){this.state=x},$traceurRuntime.asyncWrap=c,$traceurRuntime.initGeneratorFunction=a,$traceurRuntime.createGeneratorInstance=s
}(),function(){function t(t,e,n,i,r,o,s){var a=[];return t&&a.push(t,":"),n&&(a.push("//"),e&&a.push(e,"@"),a.push(n),i&&a.push(":",i)),r&&a.push(r),o&&a.push("?",o),s&&a.push("#",s),a.join("")
}function e(t){return t.match(a)}function n(t){if("/"===t)return"/";for(var e="/"===t[0]?"/":"",n="/"===t.slice(-1)?"/":"",i=t.split("/"),r=[],o=0,s=0;s<i.length;s++){var a=i[s];
switch(a){case"":case".":break;case"..":r.length?r.pop():o++;break;default:r.push(a)
}}if(!e){for(;o-->0;)r.unshift("..");0===r.length&&r.push(".")}return e+r.join("/")+n
}function i(e){var i=e[u.PATH]||"";return i=n(i),e[u.PATH]=i,t(e[u.SCHEME],e[u.USER_INFO],e[u.DOMAIN],e[u.PORT],e[u.PATH],e[u.QUERY_DATA],e[u.FRAGMENT])
}function r(t){var n=e(t);return i(n)}function o(t,n){var r=e(n),o=e(t);if(r[u.SCHEME])return i(r);
r[u.SCHEME]=o[u.SCHEME];for(var s=u.SCHEME;s<=u.PORT;s++)r[s]||(r[s]=o[s]);if("/"==r[u.PATH][0])return i(r);
var a=o[u.PATH],c=a.lastIndexOf("/");return a=a.slice(0,c+1)+r[u.PATH],r[u.PATH]=a,i(r)
}function s(t){if(!t)return!1;if("/"===t[0])return!0;var n=e(t);return n[u.SCHEME]?!0:!1
}var a=new RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),u={SCHEME:1,USER_INFO:2,DOMAIN:3,PORT:4,PATH:5,QUERY_DATA:6,FRAGMENT:7};
$traceurRuntime.canonicalizeUrl=r,$traceurRuntime.isAbsolute=s,$traceurRuntime.removeDotSegments=n,$traceurRuntime.resolveUrl=o
}(),function(t){"use strict";function e(t){if(t){var e=g.normalize(t);return u[e]
}}function n(t){var e=arguments[1],n=Object.create(null);return Object.getOwnPropertyNames(t).forEach(function(i){var r,o;
if(e===b){var s=Object.getOwnPropertyDescriptor(t,i);s.get&&(r=s.get)}r||(o=t[i],r=function(){return o
}),Object.defineProperty(n,i,{get:r,enumerable:!0})}),Object.preventExtensions(n),n
}var i,r=$traceurRuntime,o=r.canonicalizeUrl,s=r.resolveUrl,a=r.isAbsolute,u=Object.create(null);
i=t.location&&t.location.href?s(t.location.href,"./"):"";var c=function(t,e){this.url=t,this.value_=e
};$traceurRuntime.createClass(c,{},{});var l=function(t,e){this.message=this.constructor.name+": "+this.stripCause(e)+" in "+t,this.stack=e instanceof h||!e.stack?"":this.stripStack(e.stack)
},h=l;$traceurRuntime.createClass(l,{stripError:function(t){return t.replace(/.*Error:/,this.constructor.name+":")
},stripCause:function(t){return t?t.message?this.stripError(t.message):t+"":""},loadedBy:function(t){this.stack+="\n loaded by "+t
},stripStack:function(t){var e=[];return t.split("\n").some(function(t){return/UncoatedModuleInstantiator/.test(t)?!0:void e.push(t)
}),e[0]=this.stripError(e[0]),e.join("\n")}},{},Error);var d=function(t,e){$traceurRuntime.superCall(this,m.prototype,"constructor",[t,null]),this.func=e
},m=d;$traceurRuntime.createClass(d,{getUncoatedModule:function(){if(this.value_)return this.value_;
try{return this.value_=this.func.call(t)}catch(e){if(e instanceof l)throw e.loadedBy(this.url),e;
throw new l(this.url,e)}}},{},c);var f=Object.create(null),b={},g={normalize:function(t,e){if("string"!=typeof t)throw new TypeError("module name must be a string, not "+typeof t);
if(a(t))return o(t);if(/[^\.]\/\.\.\//.test(t))throw new Error("module name embeds /../: "+t);
return"."===t[0]&&e?s(e,t):o(t)},get:function(t){var i=e(t);if(!i)return void 0;var r=f[i.url];
return r?r:(r=n(i.getUncoatedModule(),b),f[i.url]=r)},set:function(t,e){t=String(t),u[t]=new d(t,function(){return e
}),f[t]=e},get baseURL(){return i},set baseURL(t){i=String(t)},registerModule:function(t,e){var n=g.normalize(t);
if(u[n])throw new Error("duplicate module named "+n);u[n]=new d(n,e)},bundleStore:Object.create(null),register:function(t,e,n){e&&(e.length||n.length)?this.bundleStore[t]={deps:e,execute:function(){var t=arguments,i={};
e.forEach(function(e,n){return i[e]=t[n]});var r=n.call(this,i);return r.execute.call(this),r.exports
}}:this.registerModule(t,n)},getAnonymousModule:function(e){return new n(e.call(t),b)
},getForTesting:function(t){var e=this;return this.testingPrefix_||Object.keys(f).some(function(t){var n=/(traceur@[^\/]*\/)/.exec(t);
return n?(e.testingPrefix_=n[1],!0):void 0}),this.get(this.testingPrefix_+t)}};g.set("@traceur/src/runtime/ModuleStore",new n({ModuleStore:g}));
var p=$traceurRuntime.setupGlobals;$traceurRuntime.setupGlobals=function(t){p(t)},$traceurRuntime.ModuleStore=g,t.System={register:g.register.bind(g),get:g.get,set:g.set,normalize:g.normalize},$traceurRuntime.getModuleImpl=function(t){var n=e(t);
return n&&n.getUncoatedModule()}}("undefined"!=typeof global?global:this),System.register("traceur-runtime@0.0.65/src/runtime/polyfills/utils",[],function(){"use strict";
function t(t){return t>>>0}function e(t){return t&&("object"==typeof t||"function"==typeof t)
}function n(t){return"function"==typeof t}function i(t){return"number"==typeof t}function r(t){return t=+t,y(t)?0:0!==t&&v(t)?t>0?_(t):p(t):t
}function o(t){var e=r(t);return 0>e?0:x(e,E)}function s(t){return e(t)?t[Symbol.iterator]:void 0
}function a(t){return n(t)}function u(t,e){return{value:t,done:e}}function c(t,e,n){e in t||Object.defineProperty(t,e,n)
}function l(t,e,n){c(t,e,{value:n,configurable:!0,enumerable:!1,writable:!0})}function h(t,e,n){c(t,e,{value:n,configurable:!1,enumerable:!1,writable:!1})
}function d(t,e){for(var n=0;n<e.length;n+=2){var i=e[n],r=e[n+1];l(t,i,r)}}function m(t,e){for(var n=0;n<e.length;n+=2){var i=e[n],r=e[n+1];
h(t,i,r)}}function f(t,e,n){n&&n.iterator&&!t[n.iterator]&&(t["@@iterator"]&&(e=t["@@iterator"]),Object.defineProperty(t,n.iterator,{value:e,configurable:!0,enumerable:!1,writable:!0}))
}function b(t){k.push(t)}function g(t){k.forEach(function(e){return e(t)})}var p=Math.ceil,_=Math.floor,v=isFinite,y=isNaN,w=Math.pow,x=Math.min,S=$traceurRuntime.toObject,E=w(2,53)-1,k=[];
return{get toObject(){return S},get toUint32(){return t},get isObject(){return e},get isCallable(){return n
},get isNumber(){return i},get toInteger(){return r},get toLength(){return o},get checkIterable(){return s
},get isConstructor(){return a},get createIteratorResultObject(){return u},get maybeDefine(){return c
},get maybeDefineMethod(){return l},get maybeDefineConst(){return h},get maybeAddFunctions(){return d
},get maybeAddConsts(){return m},get maybeAddIterator(){return f},get registerPolyfill(){return b
},get polyfillAll(){return g}}}),System.register("traceur-runtime@0.0.65/src/runtime/polyfills/Map",[],function(){"use strict";
function t(t,e){if(r(e)){var n=a(e);return n&&t.objectIndex_[n.hash]}return"string"==typeof e?t.stringIndex_[e]:t.primitiveIndex_[e]
}function e(t){t.entries_=[],t.objectIndex_=Object.create(null),t.stringIndex_=Object.create(null),t.primitiveIndex_=Object.create(null),t.deletedCount_=0
}function n(t){var e=t,n=e.Object,i=e.Symbol;t.Map||(t.Map=l);var r=t.Map.prototype;
r.entries&&(o(r,r.entries,i),o(n.getPrototypeOf((new t.Map).entries()),function(){return this
},i))}var i=System.get("traceur-runtime@0.0.65/src/runtime/polyfills/utils"),r=i.isObject,o=i.maybeAddIterator,s=i.registerPolyfill,a=$traceurRuntime.getOwnHashObject,u=Object.prototype.hasOwnProperty,c={},l=function(){var t=arguments[0];
if(!r(this))throw new TypeError("Map called on incompatible type");if(u.call(this,"entries_"))throw new TypeError("Map can not be reentrantly initialised");
if(e(this),null!==t&&void 0!==t)for(var n,i=t[Symbol.iterator]();!(n=i.next()).done;){var o=n.value,s=o[0],a=o[1];
this.set(s,a)}};return $traceurRuntime.createClass(l,{get size(){return this.entries_.length/2-this.deletedCount_
},get:function(e){var n=t(this,e);return void 0!==n?this.entries_[n+1]:void 0},set:function(e,n){var i=r(e),o="string"==typeof e,s=t(this,e);
if(void 0!==s)this.entries_[s+1]=n;else if(s=this.entries_.length,this.entries_[s]=e,this.entries_[s+1]=n,i){var u=a(e),c=u.hash;
this.objectIndex_[c]=s}else o?this.stringIndex_[e]=s:this.primitiveIndex_[e]=s;return this
},has:function(e){return void 0!==t(this,e)},"delete":function(t){var e,n,i=r(t),o="string"==typeof t;
if(i){var s=a(t);s&&(e=this.objectIndex_[n=s.hash],delete this.objectIndex_[n])}else o?(e=this.stringIndex_[t],delete this.stringIndex_[t]):(e=this.primitiveIndex_[t],delete this.primitiveIndex_[t]);
return void 0!==e?(this.entries_[e]=c,this.entries_[e+1]=void 0,this.deletedCount_++,!0):!1
},clear:function(){e(this)},forEach:function(t){for(var e=arguments[1],n=0;n<this.entries_.length;n+=2){var i=this.entries_[n],r=this.entries_[n+1];
i!==c&&t.call(e,r,i,this)}},entries:$traceurRuntime.initGeneratorFunction(function h(){var t,e,n;
return $traceurRuntime.createGeneratorInstance(function(i){for(;;)switch(i.state){case 0:t=0,i.state=12;
break;case 12:i.state=t<this.entries_.length?8:-2;break;case 4:t+=2,i.state=12;break;
case 8:e=this.entries_[t],n=this.entries_[t+1],i.state=9;break;case 9:i.state=e===c?4:6;
break;case 6:return i.state=2,[e,n];case 2:i.maybeThrow(),i.state=4;break;default:return i.end()
}},h,this)}),keys:$traceurRuntime.initGeneratorFunction(function d(){var t,e,n;return $traceurRuntime.createGeneratorInstance(function(i){for(;;)switch(i.state){case 0:t=0,i.state=12;
break;case 12:i.state=t<this.entries_.length?8:-2;break;case 4:t+=2,i.state=12;break;
case 8:e=this.entries_[t],n=this.entries_[t+1],i.state=9;break;case 9:i.state=e===c?4:6;
break;case 6:return i.state=2,e;case 2:i.maybeThrow(),i.state=4;break;default:return i.end()
}},d,this)}),values:$traceurRuntime.initGeneratorFunction(function m(){var t,e,n;
return $traceurRuntime.createGeneratorInstance(function(i){for(;;)switch(i.state){case 0:t=0,i.state=12;
break;case 12:i.state=t<this.entries_.length?8:-2;break;case 4:t+=2,i.state=12;break;
case 8:e=this.entries_[t],n=this.entries_[t+1],i.state=9;break;case 9:i.state=e===c?4:6;
break;case 6:return i.state=2,n;case 2:i.maybeThrow(),i.state=4;break;default:return i.end()
}},m,this)})},{}),Object.defineProperty(l.prototype,Symbol.iterator,{configurable:!0,writable:!0,value:l.prototype.entries}),s(n),{get Map(){return l
},get polyfillMap(){return n}}}),System.get("traceur-runtime@0.0.65/src/runtime/polyfills/Map"),System.register("traceur-runtime@0.0.65/src/runtime/polyfills/Set",[],function(){"use strict";
function t(t){t.map_=new s}function e(t){var e=t,n=e.Object,i=e.Symbol;t.Set||(t.Set=u);
var o=t.Set.prototype;o.values&&(r(o,o.values,i),r(n.getPrototypeOf((new t.Set).values()),function(){return this
},i))}var n=System.get("traceur-runtime@0.0.65/src/runtime/polyfills/utils"),i=n.isObject,r=n.maybeAddIterator,o=n.registerPolyfill,s=System.get("traceur-runtime@0.0.65/src/runtime/polyfills/Map").Map,a=($traceurRuntime.getOwnHashObject,Object.prototype.hasOwnProperty),u=function(){var e=arguments[0];
if(!i(this))throw new TypeError("Set called on incompatible type");if(a.call(this,"map_"))throw new TypeError("Set can not be reentrantly initialised");
if(t(this),null!==e&&void 0!==e)for(var n,r=e[Symbol.iterator]();!(n=r.next()).done;){var o=n.value;
this.add(o)}};return $traceurRuntime.createClass(u,{get size(){return this.map_.size
},has:function(t){return this.map_.has(t)},add:function(t){return this.map_.set(t,t),this
},"delete":function(t){return this.map_.delete(t)},clear:function(){return this.map_.clear()
},forEach:function(t){var e=arguments[1],n=this;return this.map_.forEach(function(i,r){t.call(e,r,r,n)
})},values:$traceurRuntime.initGeneratorFunction(function c(){var t,e;return $traceurRuntime.createGeneratorInstance(function(n){for(;;)switch(n.state){case 0:t=this.map_.keys()[Symbol.iterator](),n.sent=void 0,n.action="next",n.state=12;
break;case 12:e=t[n.action](n.sentIgnoreThrow),n.state=9;break;case 9:n.state=e.done?3:2;
break;case 3:n.sent=e.value,n.state=-2;break;case 2:return n.state=12,e.value;default:return n.end()
}},c,this)}),entries:$traceurRuntime.initGeneratorFunction(function l(){var t,e;return $traceurRuntime.createGeneratorInstance(function(n){for(;;)switch(n.state){case 0:t=this.map_.entries()[Symbol.iterator](),n.sent=void 0,n.action="next",n.state=12;
break;case 12:e=t[n.action](n.sentIgnoreThrow),n.state=9;break;case 9:n.state=e.done?3:2;
break;case 3:n.sent=e.value,n.state=-2;break;case 2:return n.state=12,e.value;default:return n.end()
}},l,this)})},{}),Object.defineProperty(u.prototype,Symbol.iterator,{configurable:!0,writable:!0,value:u.prototype.values}),Object.defineProperty(u.prototype,"keys",{configurable:!0,writable:!0,value:u.prototype.values}),o(e),{get Set(){return u
},get polyfillSet(){return e}}}),System.get("traceur-runtime@0.0.65/src/runtime/polyfills/Set"),System.register("traceur-runtime@0.0.65/node_modules/rsvp/lib/rsvp/asap",[],function(){"use strict";
function t(t,e){d[a]=t,d[a+1]=e,a+=2,2===a&&s()}function e(){return function(){process.nextTick(o)
}}function n(){var t=0,e=new l(o),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2
}}function i(){var t=new MessageChannel;return t.port1.onmessage=o,function(){t.port2.postMessage(0)
}}function r(){return function(){setTimeout(o,1)}}function o(){for(var t=0;a>t;t+=2){var e=d[t],n=d[t+1];
e(n),d[t]=void 0,d[t+1]=void 0}a=0}var s,a=0,u=t,c="undefined"!=typeof window?window:{},l=c.MutationObserver||c.WebKitMutationObserver,h="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,d=new Array(1e3);
return s="undefined"!=typeof process&&"[object process]"==={}.toString.call(process)?e():l?n():h?i():r(),{get default(){return u
}}}),System.register("traceur-runtime@0.0.65/src/runtime/polyfills/Promise",[],function(){"use strict";
function t(t){return t&&"object"==typeof t&&void 0!==t.status_}function e(t){return t
}function n(t){throw t}function i(t){var i=void 0!==arguments[1]?arguments[1]:e,o=void 0!==arguments[2]?arguments[2]:n,s=r(t.constructor);
switch(t.status_){case void 0:throw TypeError;case 0:t.onResolve_.push(i,s),t.onReject_.push(o,s);
break;case 1:l(t.value_,[i,s]);break;case-1:l(t.value_,[o,s])}return s.promise}function r(t){if(this===v){var e=s(new v(p));
return{promise:e,resolve:function(t){a(e,t)},reject:function(t){u(e,t)}}}var n={};
return n.promise=new t(function(t,e){n.resolve=t,n.reject=e}),n}function o(t,e,n,i,r){return t.status_=e,t.value_=n,t.onResolve_=i,t.onReject_=r,t
}function s(t){return o(t,0,void 0,[],[])}function a(t,e){c(t,1,e,t.onResolve_)}function u(t,e){c(t,-1,e,t.onReject_)
}function c(t,e,n,i){0===t.status_&&(l(n,i),o(t,e,n))}function l(t,e){b(function(){for(var n=0;n<e.length;n+=2)h(t,e[n],e[n+1])
})}function h(e,n,r){try{var o=n(e);if(o===r.promise)throw new TypeError;t(o)?i(o,r.resolve,r.reject):r.resolve(o)
}catch(s){try{r.reject(s)}catch(s){}}}function d(t){return t&&("object"==typeof t||"function"==typeof t)
}function m(e,n){if(!t(n)&&d(n)){var i;try{i=n.then}catch(o){var s=y.call(e,o);return n[w]=s,s
}if("function"==typeof i){var a=n[w];if(a)return a;var u=r(e);n[w]=u.promise;try{i.call(n,u.resolve,u.reject)
}catch(o){u.reject(o)}return u.promise}}return n}function f(t){t.Promise||(t.Promise=_)
}var b=System.get("traceur-runtime@0.0.65/node_modules/rsvp/lib/rsvp/asap").default,g=System.get("traceur-runtime@0.0.65/src/runtime/polyfills/utils").registerPolyfill,p={},_=function(t){if(t!==p){if("function"!=typeof t)throw new TypeError;
var e=s(this);try{t(function(t){a(e,t)},function(t){u(e,t)})}catch(n){u(e,n)}}};$traceurRuntime.createClass(_,{"catch":function(t){return this.then(void 0,t)
},then:function(r,o){"function"!=typeof r&&(r=e),"function"!=typeof o&&(o=n);var s=this,a=this.constructor;
return i(this,function(e){return e=m(a,e),e===s?o(new TypeError):t(e)?e.then(r,o):r(e)
},o)}},{resolve:function(e){return this===v?t(e)?e:o(new v(p),1,e):new this(function(t){t(e)
})},reject:function(t){return this===v?o(new v(p),-1,t):new this(function(e,n){n(t)
})},all:function(t){var e=r(this),n=[];try{var i=t.length;if(0===i)e.resolve(n);else for(var o=0;o<t.length;o++)this.resolve(t[o]).then(function(t,r){n[t]=r,0===--i&&e.resolve(n)
}.bind(void 0,o),function(t){e.reject(t)})}catch(s){e.reject(s)}return e.promise},race:function(t){var e=r(this);
try{for(var n=0;n<t.length;n++)this.resolve(t[n]).then(function(t){e.resolve(t)},function(t){e.reject(t)
})}catch(i){e.reject(i)}return e.promise}});var v=_,y=v.reject,w="@@thenable";return g(f),{get Promise(){return _
},get polyfillPromise(){return f}}}),System.get("traceur-runtime@0.0.65/src/runtime/polyfills/Promise"),System.register("traceur-runtime@0.0.65/src/runtime/polyfills/StringIterator",[],function(){"use strict";
function t(t){var e=String(t),n=Object.create(l.prototype);return n[a(u)]=e,n[a(c)]=0,n
}var e,n=System.get("traceur-runtime@0.0.65/src/runtime/polyfills/utils"),i=n.createIteratorResultObject,r=n.isObject,o=$traceurRuntime,s=o.hasOwnProperty,a=o.toProperty,u=Symbol("iteratedString"),c=Symbol("stringIteratorNextIndex"),l=function(){};
return $traceurRuntime.createClass(l,(e={},Object.defineProperty(e,"next",{value:function(){var t=this;
if(!r(t)||!s(t,u))throw new TypeError("this must be a StringIterator object");var e=t[a(u)];
if(void 0===e)return i(void 0,!0);var n=t[a(c)],o=e.length;if(n>=o)return t[a(u)]=void 0,i(void 0,!0);
var l,h=e.charCodeAt(n);if(55296>h||h>56319||n+1===o)l=String.fromCharCode(h);else{var d=e.charCodeAt(n+1);
l=56320>d||d>57343?String.fromCharCode(h):String.fromCharCode(h)+String.fromCharCode(d)
}return t[a(c)]=n+l.length,i(l,!1)},configurable:!0,enumerable:!0,writable:!0}),Object.defineProperty(e,Symbol.iterator,{value:function(){return this
},configurable:!0,enumerable:!0,writable:!0}),e),{}),{get createStringIterator(){return t
}}}),System.register("traceur-runtime@0.0.65/src/runtime/polyfills/String",[],function(){"use strict";
function t(t){var e=String(this);if(null==this||"[object RegExp]"==f.call(t))throw TypeError();
var n=e.length,i=String(t),r=(i.length,arguments.length>1?arguments[1]:void 0),o=r?Number(r):0;
isNaN(o)&&(o=0);var s=Math.min(Math.max(o,0),n);return b.call(e,i,o)==s}function e(t){var e=String(this);
if(null==this||"[object RegExp]"==f.call(t))throw TypeError();var n=e.length,i=String(t),r=i.length,o=n;
if(arguments.length>1){var s=arguments[1];void 0!==s&&(o=s?Number(s):0,isNaN(o)&&(o=0))
}var a=Math.min(Math.max(o,0),n),u=a-r;return 0>u?!1:g.call(e,i,u)==u}function n(t){if(null==this)throw TypeError();
var e=String(this),n=e.length,i=String(t),r=(i.length,arguments.length>1?arguments[1]:void 0),o=r?Number(r):0;
isNaN(o)&&(o=0);Math.min(Math.max(o,0),n);return-1!=b.call(e,i,o)}function i(t){if(null==this)throw TypeError();
var e=String(this),n=t?Number(t):0;if(isNaN(n)&&(n=0),0>n||1/0==n)throw RangeError();
if(0==n)return"";for(var i="";n--;)i+=e;return i}function r(t){if(null==this)throw TypeError();
var e=String(this),n=e.length,i=t?Number(t):0;if(isNaN(i)&&(i=0),0>i||i>=n)return void 0;
var r,o=e.charCodeAt(i);return o>=55296&&56319>=o&&n>i+1&&(r=e.charCodeAt(i+1),r>=56320&&57343>=r)?1024*(o-55296)+r-56320+65536:o
}function o(t){var e=t.raw,n=e.length>>>0;if(0===n)return"";for(var i="",r=0;;){if(i+=e[r],r+1===n)return i;
i+=arguments[++r]}}function s(){var t,e,n=[],i=Math.floor,r=-1,o=arguments.length;
if(!o)return"";for(;++r<o;){var s=Number(arguments[r]);if(!isFinite(s)||0>s||s>1114111||i(s)!=s)throw RangeError("Invalid code point: "+s);
65535>=s?n.push(s):(s-=65536,t=(s>>10)+55296,e=s%1024+56320,n.push(t,e))}return String.fromCharCode.apply(null,n)
}function a(){var t=$traceurRuntime.checkObjectCoercible(this),e=String(t);return c(e)
}function u(u){var c=u.String;h(c.prototype,["codePointAt",r,"contains",n,"endsWith",e,"startsWith",t,"repeat",i]),h(c,["fromCodePoint",s,"raw",o]),d(c.prototype,a,Symbol)
}var c=System.get("traceur-runtime@0.0.65/src/runtime/polyfills/StringIterator").createStringIterator,l=System.get("traceur-runtime@0.0.65/src/runtime/polyfills/utils"),h=l.maybeAddFunctions,d=l.maybeAddIterator,m=l.registerPolyfill,f=Object.prototype.toString,b=String.prototype.indexOf,g=String.prototype.lastIndexOf;
return m(u),{get startsWith(){return t},get endsWith(){return e},get contains(){return n
},get repeat(){return i},get codePointAt(){return r},get raw(){return o},get fromCodePoint(){return s
},get stringPrototypeIterator(){return a},get polyfillString(){return u}}}),System.get("traceur-runtime@0.0.65/src/runtime/polyfills/String"),System.register("traceur-runtime@0.0.65/src/runtime/polyfills/ArrayIterator",[],function(){"use strict";
function t(t,e){var n=s(t),i=new d;return i.iteratorObject_=n,i.arrayIteratorNextIndex_=0,i.arrayIterationKind_=e,i
}function e(){return t(this,h)}function n(){return t(this,c)}function i(){return t(this,l)
}var r,o=System.get("traceur-runtime@0.0.65/src/runtime/polyfills/utils"),s=o.toObject,a=o.toUint32,u=o.createIteratorResultObject,c=1,l=2,h=3,d=function(){};
return $traceurRuntime.createClass(d,(r={},Object.defineProperty(r,"next",{value:function(){var t=s(this),e=t.iteratorObject_;
if(!e)throw new TypeError("Object is not an ArrayIterator");var n=t.arrayIteratorNextIndex_,i=t.arrayIterationKind_,r=a(e.length);
return n>=r?(t.arrayIteratorNextIndex_=1/0,u(void 0,!0)):(t.arrayIteratorNextIndex_=n+1,i==l?u(e[n],!1):i==h?u([n,e[n]],!1):u(n,!1))
},configurable:!0,enumerable:!0,writable:!0}),Object.defineProperty(r,Symbol.iterator,{value:function(){return this
},configurable:!0,enumerable:!0,writable:!0}),r),{}),{get entries(){return e},get keys(){return n
},get values(){return i}}}),System.register("traceur-runtime@0.0.65/src/runtime/polyfills/Array",[],function(){"use strict";
function t(t){var e,n,i=arguments[1],r=arguments[2],o=this,s=y(t),a=void 0!==i,u=0;
if(a&&!m(i))throw TypeError();if(d(s)){e=f(o)?new o:[];for(var c,l=s[Symbol.iterator]();!(c=l.next()).done;){var h=c.value;
e[u]=a?i.call(r,h,u):h,u++}return e.length=u,e}for(n=v(s.length),e=f(o)?new o(n):new Array(n);n>u;u++)e[u]=a?"undefined"==typeof r?i(s[u],u):i.call(r,s[u],u):s[u];
return e.length=n,e}function e(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];
for(var n=this,i=t.length,r=f(n)?new n(i):new Array(i),o=0;i>o;o++)r[o]=t[o];return r.length=i,r
}function n(t){var e=void 0!==arguments[1]?arguments[1]:0,n=arguments[2],i=y(this),r=v(i.length),o=_(e),s=void 0!==n?_(n):r;
for(o=0>o?Math.max(r+o,0):Math.min(o,r),s=0>s?Math.max(r+s,0):Math.min(s,r);s>o;)i[o]=t,o++;
return i}function i(t){var e=arguments[1];return o(this,t,e)}function r(t){var e=arguments[1];
return o(this,t,e,!0)}function o(t,e){var n=arguments[2],i=void 0!==arguments[3]?arguments[3]:!1,r=y(t),o=v(r.length);
if(!m(e))throw TypeError();for(var s=0;o>s;s++)if(s in r){var a=r[s];if(e.call(n,a,s,r))return i?s:a
}return i?-1:void 0}function s(o){var s=o,a=s.Array,h=s.Object,d=s.Symbol;b(a.prototype,["entries",u,"keys",c,"values",l,"fill",n,"find",i,"findIndex",r]),b(a,["from",t,"of",e]),g(a.prototype,l,d),g(h.getPrototypeOf([].values()),function(){return this
},d)}var a=System.get("traceur-runtime@0.0.65/src/runtime/polyfills/ArrayIterator"),u=a.entries,c=a.keys,l=a.values,h=System.get("traceur-runtime@0.0.65/src/runtime/polyfills/utils"),d=h.checkIterable,m=h.isCallable,f=h.isConstructor,b=h.maybeAddFunctions,g=h.maybeAddIterator,p=h.registerPolyfill,_=h.toInteger,v=h.toLength,y=h.toObject;
return p(s),{get from(){return t},get of(){return e},get fill(){return n},get find(){return i
},get findIndex(){return r},get polyfillArray(){return s}}}),System.get("traceur-runtime@0.0.65/src/runtime/polyfills/Array"),System.register("traceur-runtime@0.0.65/src/runtime/polyfills/Object",[],function(){"use strict";
function t(t,e){return t===e?0!==t||1/t===1/e:t!==t&&e!==e}function e(t){for(var e=1;e<arguments.length;e++){var n,i=arguments[e],r=h(i),o=r.length;
for(n=0;o>n;n++){var s=r[n];d[s]||(t[s]=i[s])}}return t}function n(t,e){var n,i,r=l(e),o=r.length;
for(n=0;o>n;n++){var s=r[n];d[s]||(i=c(e,r[n]),u(t,r[n],i))}return t}function i(i){var r=i.Object;
o(r,["assign",e,"is",t,"mixin",n])}var r=System.get("traceur-runtime@0.0.65/src/runtime/polyfills/utils"),o=r.maybeAddFunctions,s=r.registerPolyfill,a=$traceurRuntime,u=a.defineProperty,c=a.getOwnPropertyDescriptor,l=a.getOwnPropertyNames,h=a.keys,d=a.privateNames;
return s(i),{get is(){return t},get assign(){return e},get mixin(){return n},get polyfillObject(){return i
}}}),System.get("traceur-runtime@0.0.65/src/runtime/polyfills/Object"),System.register("traceur-runtime@0.0.65/src/runtime/polyfills/Number",[],function(){"use strict";
function t(t){return s(t)&&d(t)}function e(e){return t(e)&&l(e)===e}function n(t){return s(t)&&m(t)
}function i(e){if(t(e)){var n=l(e);if(n===e)return h(n)<=f}return!1}function r(r){var o=r.Number;
a(o,["MAX_SAFE_INTEGER",f,"MIN_SAFE_INTEGER",b,"EPSILON",g]),u(o,["isFinite",t,"isInteger",e,"isNaN",n,"isSafeInteger",i])
}var o=System.get("traceur-runtime@0.0.65/src/runtime/polyfills/utils"),s=o.isNumber,a=o.maybeAddConsts,u=o.maybeAddFunctions,c=o.registerPolyfill,l=o.toInteger,h=Math.abs,d=isFinite,m=isNaN,f=Math.pow(2,53)-1,b=-Math.pow(2,53)+1,g=Math.pow(2,-52);
return c(r),{get MAX_SAFE_INTEGER(){return f},get MIN_SAFE_INTEGER(){return b},get EPSILON(){return g
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
this.targets={},this._counter=0,this._callbacks={},this._handlers=[],window.addEventListener("message",function(e){t._onMessage(e.data,e.source)
})};$traceurRuntime.createClass(t,{registerTarget:function(t,e){this.targets[t]=e
},unregisterTarget:function(t){delete this.targets[t]},addMessageHandler:function(t,e){var n={name:t,callback:e};
this._handlers.push(n)},removeMessageHandler:function(t,e){this._handlers=this._handlers.filter(function(t){return t.callback!==e
})},postMessage:function(t,e){var n,i,r=void 0!==arguments[2]?arguments[2]:null,o=void 0!==arguments[3]?arguments[3]:null;
this.targets[t]&&(n={name:e,arg:r,sender:window.name||"background",id:this._counter},this._counter+=1,o&&(this._callbacks[n.id]=o),i=this.targets[t],i.postMessage(n,"*"))
},_onMessage:function(t,e){"__response__"===t.name?this._callbacks[t.id]&&this._callbacks[t.id](t.arg):this._handlers.forEach(function(n){n.name===t.name&&n.callback(t.arg,t.sender,function(n){var i={name:"__response__",arg:n,sender:window.name||"background",id:t.id};
e.postMessage(i,"*")})})}},{});var e=t;return{get default(){return e}}}),System.register("classes/clipboard",[],function(){"use strict";
var t=function(){var t=this;app.bridge.addMessageHandler("clipboard.getData",function(e,n,i){t.getData(function(t){return i(t)
})}),app.bridge.addMessageHandler("clipboard.setData",function(e){t.setData(e)})};
$traceurRuntime.createClass(t,{getData:function(t){var e,n=this;document.addEventListener("paste",e=function(i){document.removeEventListener("paste",e);
var r=Array.prototype.slice.call(i.clipboardData.items,0),o={},s=0;r&&r.forEach(function(e){var i=e.type;
n._readItem(e,function(e){s+=1,e&&(o[i]=e),s===r.length&&t&&t(o)})})}),document.execCommand("paste")
},setData:function(t){var e;document.addEventListener("copy",e=function(n){var i,r,o,s,a;
if(document.removeEventListener("copy",e),n.preventDefault(),n.clipboardData.items.clear(),t["text/plain"]&&n.clipboardData.items.add(t["text/plain"],"text/plain"),t["text/html"]&&n.clipboardData.items.add(t["text/html"],"text/html"),t["image/svg+xml"]&&n.clipboardData.items.add(t["image/svg+xml"],"image/svg+xml"),t["image/png"]){i=t["image/png"],r=atob(t["image/png"].split(",")[1]),o=new ArrayBuffer(r.length),s=new Uint8Array(o);
for(var u=0;u<r.length;u+=1)s[u]=r.charCodeAt(u);a=new Blob([o],{type:"image/png"}),n.clipboardData.items.add(a,"image/png")
}}),document.execCommand("copy")},_readItem:function(t,e){var n,i;"image/png"===t.type?(n=t.getAsFile(),n?(i=new FileReader,i.readAsDataURL(n),i.addEventListener("load",function(t){e("data:"!==t.target.result?t.target.result:null)
})):e(null)):"text/plain"===t.type||"text/html"===t.type||"image/svg+xml"===t.type?t.getAsString(function(t){e(t)
}):(console.warn("Clipboard contains unsuported data type:",t.type),e(null))}},{});
var e=t;return{get default(){return e}}}),System.register("classes/config",[],function(){"use strict";
var t,e=System.get("classes/event-emitter").default,n=System.get("utils/object").keys,i=function(){var t=this;
app.bridge.addMessageHandler("config.get",function(e,n,i){t.get(e,i)}),app.bridge.addMessageHandler("config.set",function(e,n,i){t.set(e.key,e.value,i)
}),app.bridge.addMessageHandler("config.getAll",function(e,n,i){t.getAll(i)}),app.bridge.addMessageHandler("config.setAll",function(e,n,i){t.setAll(e,i)
}),chrome.storage.onChanged.addListener(function(e){t._onChromeStorageChange(e)})
};$traceurRuntime.createClass(i,(t={},Object.defineProperty(t,"get",{value:function(t,e){var n="!"===t[0]?"local":"sync";
chrome.storage[n].get(t,function(n){var i=n[t];void 0===i&&(i=null),e(i)})},configurable:!0,enumerable:!0,writable:!0}),Object.defineProperty(t,"set",{value:function(t,e){var n,i=void 0!==arguments[2]?arguments[2]:null,r="!"===t[0]?"local":"sync";
null===e?chrome.storage[r].remove(t,i):chrome.storage[r].set((n={},Object.defineProperty(n,t,{value:e,configurable:!0,enumerable:!0,writable:!0}),n),i)
},configurable:!0,enumerable:!0,writable:!0}),Object.defineProperty(t,"getAll",{value:function(t){var e={};
chrome.storage.local.get(null,function(i){for(var r,o,s=n(i)[Symbol.iterator]();!(o=s.next()).done;)r=o.value,e[r]=i[r];
chrome.storage.sync.get(null,function(i){for(var r,o,s=n(i)[Symbol.iterator]();!(o=s.next()).done;)r=o.value,e[r]=i[r];
t(e)})})},configurable:!0,enumerable:!0,writable:!0}),Object.defineProperty(t,"setAll",{value:function(t){for(var e,i,r,o,s=void 0!==arguments[1]?arguments[1]:null,a={},u={},c=n(t)[Symbol.iterator]();!(o=c.next()).done;)e=o.value,i="!"===e[0]?"local":"sync",r=t[e],"local"===i?a[e]=r:u[e]=r;
chrome.storage.local.set(a,function(){chrome.storage.sync.set(u,function(){s()})})
},configurable:!0,enumerable:!0,writable:!0}),Object.defineProperty(t,"_onChromeStorageChange",{value:function(t){for(var e,i,r,o,s,a=n(t)[Symbol.iterator]();!(s=a.next()).done;){e=s.value,i=void 0!==t[e].newValue?t[e].newValue:null,this.dispatchEvent(new CustomEvent("change",{detail:{key:e,value:i}}));
for(var u,c=n(app.bridge.targets)[Symbol.iterator]();!(u=c.next()).done;)r=u.value,"main"!==r&&"background"!==r&&(o=app.bridge.targets[r],app.bridge.postMessage(r,"config.dispatchChangeEvent",{key:e,value:i}))
}},configurable:!0,enumerable:!0,writable:!0}),t),{},e);var r=i;return{get default(){return r
}}}),System.register("classes/event-emitter",[],function(){"use strict";var t=function(){};
$traceurRuntime.createClass(t,{addEventListener:function(t,e){this._events||(this._events={});
var n=this._events[t];n||(this._events[t]=n=[]),n.push(e),n.length>300&&console.warn("Potential EventEmitter memory leak: "+n.length+" listeners "+('subscribed to event "'+t+'"'))
},removeEventListener:function(t,e){if(this._events&&this._events[t]){for(var n=[],i=0;i<this._events[t].length;i+=1)this._events[t][i]!==e&&n.push(this._events[t][i]);
this._events[t]=n}},dispatchEvent:function(t){var e,n;if(this._events){var i=this._events[t.type];
if(i){for(var r=null,o=i.length-1;o>=0;o-=1){e=i[o];try{n=e.call(window,t)}catch(s){null===r&&(r=s)
}if(n===!1)break}if(r)throw r}}}},{});var e=t;return{get default(){return e}}}),System.register("elements/bx-app",[],function(){"use strict";
var t=System.get("classes/bridge").default,e=System.get("classes/config").default,n=System.get("classes/clipboard").default,i=System.get("utils/array").compare,r=System.get("utils/dom"),o=r.createElement,s=r.registerElement,a=System.get("utils/object"),u=(a.entries,a.keys),c=a.observe,l=System.get("utils/event"),h=l.getShortcutForKeyboardEvent,d=l.getKeyForKeyboardEvent,m=function(){$traceurRuntime.defaultSuperCall(this,f.prototype,arguments)
},f=m;$traceurRuntime.createClass(m,{createdCallback:function(){var i=this;this.createShadowRoot(),this.bridge=new t,this.config=new e,this.clipboard=new n,this.tabIndex=-1,this.commands={},this.userShortcuts={},this._cursors=[],this._modKeys={ctrl:!1,alt:!1,shift:!1},this.config.get("bx-shortcutseditor:userShortcuts",function(t){i.userShortcuts=t||{}
}),c(this._modKeys,function(){return i._onModKeysChange()}),this.config.addEventListener("change",function(t){return i._onConfigChange(t)
}),window.addEventListener("keydown",function(t){return i._onKeyDown(t)}),window.addEventListener("keyup",function(t){return i._onKeyUp(t)
}),window.addEventListener("blur",function(t){return i._onBlur(t)})},get modKeys(){var t=this._modKeys,e=t.ctrl,n=t.alt,i=t.shift;
return{ctrl:e,alt:n,shift:i}},set modKeys(t){throw new Error("modKeys property is read-only")
},registerCursor:function(t){var e=void 0!==arguments[1]?arguments[1]:0,n=void 0!==arguments[2]?arguments[2]:0,i=void 0!==arguments[3]?arguments[3]:0;
t.includes("/")&&(t="url("+t+") "+n+" "+i+", auto");var r={name:t,weight:e};return this._cursors.push(r),this._updateCursorStyle(),r
},unregisterCursor:function(t){this._cursors=this._cursors.filter(function(e){return e!==t
}),this._updateCursorStyle()},execCommand:function(t){for(var e=document.activeElement;e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;
for(var n=e;n;n=n.parentNode||n.host)if(n.commands&&n.commands[t]){n.commands[t].exec();
break}},getCommandDescriptor:function(t){var e=this.commands[t],n=null;return e&&(n={label:e.label,shortcut:e.shortcut,state:e.state?e.state():!1,enabled:e.enabled?e.enabled():!0}),n
},_onKeyDown:function(t){var e=this,n=h(t),r=d(t);"Ctrl"===r?this._modKeys.ctrl=!0:"Alt"===r?this._modKeys.alt=!0:"Shift"===r&&(this._modKeys.shift=!0);
var o=u(this.userShortcuts).find(function(t){return e.commands[t]&&i(e.userShortcuts[t],n)
});o||(o=u(this.commands).find(function(t){return e.commands[t].shortcut&&!e.userShortcuts[t]&&i(e.commands[t].shortcut,n)
})),o&&(t.stopPropagation(),t.preventDefault(),this.commands[o].enabled()&&this.commands[o].exec())
},_onKeyUp:function(t){var e=d(t);"Ctrl"===e?this._modKeys.ctrl=!1:"Alt"===e?this._modKeys.alt=!1:"Shift"===e&&(this._modKeys.shift=!1)
},_onModKeysChange:function(){this.dispatchEvent(new CustomEvent("modkeyschange"))
},_onBlur:function(){this._modKeys.ctrl=!1,this._modKeys.alt=!1,this._modKeys.shift=!1
},_onConfigChange:function(t){var e=t.detail,n=e.key,i=e.value;"bx-shortcutseditor:userShortcuts"===n&&(this.userShortcuts=i||{})
},_updateCursorStyle:function(){var t,e=$traceurRuntime.spread(this._cursors);e.sort(function(t,e){return t.weight>e.weight?1:t.weight<e.weight?-1:0
}),this._cursorStyle||(this._cursorStyle=o("style"),this._cursorStyle.id="cursor-style",this.shadowRoot.prepend(this._cursorStyle)),e.length>0?(t=e[e.length-1].name,this._cursorStyle.innerHTML="* {cursor: "+t+"!important}"):this._cursorStyle.innerHTML=""
}},{},HTMLElement);var b=s("bx-app",m);return{get default(){return b}}}),System.register("elements/bx-background",[],function(){"use strict";
var t=System.get("elements/bx-app").default,e=System.get("utils/dom").registerElement,n=function(){$traceurRuntime.defaultSuperCall(this,i.prototype,arguments)
},i=n;$traceurRuntime.createClass(n,{createdCallback:function(){var t=this;$traceurRuntime.superCall(this,i.prototype,"createdCallback",[]),this._upgradeConfig(function(){t._pipedFiles=[],t._mainAppWindowState="closed",t.bridge.addMessageHandler("getPipedFiles",function(e,n,i){i(t._pipedFiles)
}),t.bridge.addMessageHandler("ready",function(){t._mainAppWindowState="ready"}),chrome.app.runtime.onLaunched.addListener(function(e){t._onAppLaunch(e)
}),t._onAppLaunch({})})},_upgradeConfig:function(t){var e=this,n="!bx-background:version";
this.config.get(n,function(i){0===i?t():e.config.getAll(function(r){null===i&&(i=0),r[n]=i,e.config.setAll(r,t)
})})},_onAppLaunch:function(t){var e,n,i=this;"ready"===this._mainAppWindowState?(e=chrome.app.window.get("main"),e.focus(),e.show(),t.items&&t.items.length>0&&(n=[],t.items.forEach(function(t){n.push(chrome.fileSystem.retainEntry(t.entry))
}),this.bridge.postMessage("main","openFiles",n))):("opening"===this._mainAppWindowState||"closed"===this._mainAppWindowState)&&(t.items&&t.items.forEach(function(t){i._pipedFiles.push(chrome.fileSystem.retainEntry(t.entry))
}),"closed"===this._mainAppWindowState&&this._openMainAppWindow())},_openMainAppWindow:function(){var t=this;
this._mainAppWindowState="opening";var e={id:"main",resizable:!0,hidden:!0,frame:{type:"chrome",color:"#2D2D2D"},outerBounds:{width:1e3,height:600,minWidth:100,minHeight:440}};
chrome.app.window.create("main.html",e,function(e){var n,i;e.contentWindow.name="main",t.bridge.registerTarget("main",e.contentWindow),e.contentWindow.addEventListener("load",i=function(){e.contentWindow.removeEventListener("load",i),e.focus(),e.show()
}),e.onClosed.addListener(n=function(){e.onClosed.removeListener(n),t._mainAppWindowState="closed",t._pipedFiles=[]
})})}},{},t);var r=e("bx-background",n);return{get default(){return r}}}),System.register("elements/bx-button",[],function(){"use strict";
System.get("elements/bx-icon");var t=System.get("utils/dom").registerElement,e='\n<style id="stylesheet"></style>\n\n<main>\n  <bx-icon></bx-icon>\n  <div id="label-wrapper">\n    <label></label>\n  </div>\n</main>\n',n=function(){$traceurRuntime.defaultSuperCall(this,i.prototype,arguments)
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
}},{},HTMLElement);var r=t("bx-button",n);return{get default(){return r}}}),System.register("elements/bx-confirmclosedialog",[],function(){"use strict";
System.get("elements/bx-button"),System.get("elements/bx-icon");var t=System.get("utils/dom").registerElement,e='\n  <style>@import url("stylesheets/bx-confirmclosedialog.css");</style>\n\n  <div id="message">\n    <bx-icon id="icon" name="warning"></bx-icon>\n\n    <div id="headers">\n      <h1>Unsaved changes</h1>\n      <h2>"<span id="file-name-span"></span>" was modified, would you like to save it before closing?</h2>\n    </div>\n  </div>\n\n  <div id="buttons">\n    <bx-button id="dont-save-button" label="Don\'t Save" icon="unset" skin="bx-confirmclosedialog"></bx-button>\n    <bx-button id="cancel-button" label="Cancel" skin="bx-confirmclosedialog"></bx-button>\n    <bx-button id="save-button" label="Save" icon="set" skin="bx-confirmclosedialog" default></bx-button>\n  </div>\n',n=function(){$traceurRuntime.defaultSuperCall(this,i.prototype,arguments)
},i=n;$traceurRuntime.createClass(n,{createdCallback:function(){var t=this;this.createShadowRoot(),this.shadowRoot.innerHTML=e,this._fileNameSpan=this.shadowRoot.querySelector("#file-name-span"),this._saveButton=this.shadowRoot.querySelector("#save-button"),this._dontSaveButton=this.shadowRoot.querySelector("#dont-save-button"),this._cancelButton=this.shadowRoot.querySelector("#cancel-button"),this._saveButton.addEventListener("click",function(e){return t._onSaveButtonClick(e)
}),this._dontSaveButton.addEventListener("click",function(e){return t._onDontSaveButtonClick(e)
}),this._cancelButton.addEventListener("click",function(e){return t._onCancelButtonClick(e)
}),this._onFileNameChange()},attributeChangedCallback:function(t,e,n){e!==n&&"filename"===t&&this._onFileNameChange()
},get fileName(){return this.hasAttribute("filename")?this.getAttribute("filename"):"Untitled"
},set fileName(t){this.setAttribute("filename",t)},_onFileNameChange:function(){this._fileNameSpan.textContent=this.fileName
},_onSaveButtonClick:function(t){0===t.button&&this.close("save")},_onDontSaveButtonClick:function(t){0===t.button&&this.close("dont-save")
},_onCancelButtonClick:function(t){0===t.button&&this.close("cancel")}},{},HTMLDialogElement);
var r=t("dialog","bx-confirmclosedialog",n);return{get default(){return r}}}),System.register("elements/bx-contextmenu",[],function(){"use strict";
var t=System.get("utils/dom").registerElement;System.get("elements/bx-menu");var e=!1,n='\n  <style>@import url("stylesheets/bx-contextmenu.css");</style>\n  <div id="overlay"></div>\n  <content></content>\n',i=function(){$traceurRuntime.defaultSuperCall(this,r.prototype,arguments)
},r=i;$traceurRuntime.createClass(i,{createdCallback:function(){var t=this;this.createShadowRoot(),this.shadowRoot.innerHTML=n,this._menu=this.querySelector("bx-menu"),this._overlay=this.shadowRoot.querySelector("#overlay"),this._menu.addEventListener("menuopen",function(e){return t._onMenuOpen(e)
}),this._menu.addEventListener("menuclose",function(e){return t._onMenuClose(e)}),this._menu.addEventListener("menuitemclick",function(e){return t._onMenuItemClick(e)
}),this._overlay.addEventListener("mousedown",function(e){return t._onOverlayMouseDown(e)
}),e&&this.setAttribute("debug","")},attachedCallback:function(){var t=this;window.addEventListener("blur",this._windowBlurListener=function(){t._onWindowBlur(event)
}),window.addEventListener("resize",this._windowResizeListener=function(){t._onWindowResize(event)
}),this.parentElement.addEventListener("contextmenu",this._contextMenuListener=function(e){t._onContextMenu(e)
})},detachedCallback:function(){window.removeEventListener("blur",this._windowBlurListener),window.removeEventListener("resize",this._windowResizeListener),this.parentElement.removeEventListener("contextmenu",this._contextMenuListener)
},get target(){return this._target||null},set target(t){throw new Error("target property is read-only")
},validateMenu:function(){},_onContextMenu:function(t){t.preventDefault(),this._overlay.style.display="block",this._target=t.target,this._menu.openAtPosition(t.clientX,t.clientY)
},_onMenuOpen:function(t){this.validateMenu(t.detail)},_onMenuClose:function(t){t.detail===this._menu&&(this._overlay.style.display="none")
},_onMenuItemClick:function(t){var e;this._menu.close();var n=t.detail;n.commandID&&(e=app.commands[n.commandID],e&&e.enabled()&&e.exec())
},_onOverlayMouseDown:function(){this._menu.close(),event.preventDefault(),event.stopPropagation()
},_onWindowBlur:function(){e||this._menu.close()},_onWindowResize:function(){e||this._menu.close()
}},{},HTMLElement);var o=t("bx-contextmenu",i);return{get default(){return o}}}),System.register("elements/bx-editors",[],function(){"use strict";
System.get("elements/bx-button"),System.get("elements/bx-icon"),System.get("elements/bx-confirmclosedialog"),System.get("elements/bx-tabs"),System.get("elements/bx-webviews");
var t=System.get("utils/array"),e=t.iterateSeries,n=t.iterateParallel,i=System.get("utils/artwork"),r=i.compressArtwork,o=i.uncompressArtwork,s=System.get("utils/chrome"),a=(s.DEV_MODE,s.restoreFileEntry),u=s.getFileExtension,c=System.get("utils/dom").registerElement,l=System.get("utils/time").createTimeout,h=10,d='\n  <style>@import url("stylesheets/bx-editors.css");</style>\n\n  <main>\n    <bx-tabs></bx-tabs>\n    <bx-webviews tabindex="0"></bx-webviews>\n    <dialog is="bx-confirmclosedialog" id="confirm-close-dialog"></dialog>\n  </main>\n',m=function(){$traceurRuntime.defaultSuperCall(this,f.prototype,arguments)
},f=m;$traceurRuntime.createClass(m,{createdCallback:function(){var t=this;this._editors=[],this._counter=0,this._currentEditor=null,this._restoringSession=!1,this.createShadowRoot(),this.shadowRoot.innerHTML=d,this._tabs=this.shadowRoot.querySelector("bx-tabs"),this._webViews=this.shadowRoot.querySelector("bx-webviews"),this._confirmCloseDialog=this.shadowRoot.querySelector("#confirm-close-dialog"),this.shadowRoot.addEventListener("mousedown",function(e){return t._onMouseDown(e)
}),this.shadowRoot.addEventListener("mousedown",function(e){return t._onMouseDown(e)
}),this._tabs.addEventListener("tabopenintent",function(){return t.openEditor()}),this._tabs.addEventListener("tabcloseintent",function(e){return t.closeEditor(e.detail.id)
}),this._tabs.addEventListener("tabdown",function(e){return t._showEditor(e.detail.id)
}),this._tabs.addEventListener("tabslotchange",function(e){return t._onTabSlotChange(e)
}),this._tabs.addEventListener("dragover",function(e){return t._onTabsDragOver(e)
}),this._tabs.addEventListener("drop",function(e){return t._onTabsDrop(e)})},attachedCallback:function(){var t=this;
this._readRecentFiles(function(e){t.recentFiles=e,t._restoringSession=!0,t._restoreSession(function(){return t._restoringSession=!1
})})},get currentEditorID(){return this._currentEditor?this._currentEditor.id:null
},set currentEditorID(t){throw new Error("currentEditorID property is read-only")
},_onMouseDown:function(t){"webview"!==t.target.localName&&t.preventDefault()},_onTabSlotChange:function(t){var e=t.detail,n=e.slot,i=e.tab,r=this._editors.find(function(t){return t.id===i.id
});r&&(this._editors.remove(r),this._editors.splice(n,0,r)),this._storeSession()},_onTabsDragOver:function(t){t.preventDefault(),t.dataTransfer.effectAllowed="copy",t.dataTransfer.dropEffect="copy"
},_onTabsDrop:function(t){var n=this;t.preventDefault(),e(t.dataTransfer.items,function(t,e){var i=t.webkitGetAsEntry();
(i.name.endsWith(".svg")||i.name.endsWith(".svgz"))&&(chrome.fileSystem.getWritableEntry(i,function(t){n.openEditorWithArtworkFromFileEntry(t),n.registerRecentFile(t)
}),e())})},openEditor:function(){var t=void 0!==arguments[0]?arguments[0]:null,e=void 0!==arguments[1]?arguments[1]:function(){},n=this,i={id:"editor-"+this._counter,changeCounter:0,filePath:null,fileEntry:null};
this._counter+=1,this._editors.push(i),this._webViews.openWebView(i.id,"frontend/editor.html",t,function(){n._tabs.openTab(i.id,"Untitled"),n._showEditor(i.id),e(i)
})},openEditorWithArtworkFromFileEntry:function(t){var e=void 0!==arguments[1]?arguments[1]:function(){},n=this;
chrome.fileSystem.getDisplayPath(t,function(i){var r,s=n._editors.find(function(t){return t.filePath===i
});s?(n._showEditor(s.id),e(s)):(r={id:"editor-"+n._counter,changeCounter:0,filePath:i,fileEntry:t},n._counter+=1,n._editors.push(r),n._readFileEntry(t,function(i){t.name.endsWith("svgz")&&(i=o(i)),n._webViews.openWebView(r.id,"frontend/editor.html",i,function(){n._tabs.openTab(r.id,t.name),n._showEditor(r.id),e(r)
})}))})},openEditorWithArtworkFromFileDialog:function(){var t=void 0!==arguments[0]?arguments[0]:function(){},n=this,i={type:"openWritableFile",acceptsMultiple:!1,accepts:[{extensions:["svg","svgz","html"]}]};
chrome.fileSystem.chooseEntry(i,function(i){var r;chrome.runtime.lastError?t():(r=function(t,e){n.openEditorWithArtworkFromFileEntry(t,function(){n.registerRecentFile(t),e()
})},e(i,r,function(){t()}))})},closeEditor:function(t){var e,n=void 0!==arguments[1]?arguments[1]:function(){},i=this,r=this._editors.find(function(e){return e.id===t
})||null,o=function(){n(!0)},s=function(){var t,e;i._tabs.closeTab(r.id),i._webViews.closeWebView(r.id),r===i._currentEditor?(t=null,i._editors.length>1&&(e=i._editors.indexOf(r),t=e===i._editors.length-1?i._editors[e-1].id:i._editors[e+1].id),i._editors.remove(r),i._showEditor(t),0===i._editors.length&&i.openEditor()):(i._editors.remove(r),i._storeSession()),n(!1)
};this._restoringSession?o():null===r?o():0===r.changeCounter?s():(this._confirmCloseDialog.fileName=r.fileEntry?r.fileEntry.name:"Untitled",this._confirmCloseDialog.showModal(),app.menubar.disabled=!0,this._tabs.disabled=!0,this._confirmCloseDialog.addEventListener("close",e=function(){i._confirmCloseDialog.removeEventListener("close",e),i._webViews.focusCurrentWebView(),app.menubar.disabled=!1,i._tabs.disabled=!1;
var t=i._confirmCloseDialog.returnValue;"save"===t?l(30,function(){i._saveEditorArtwork(r.id,function(t){t?o():s()
})}):"dont-save"===t?s():"cancel"===t&&o()}))},_saveEditorArtwork:function(t){var e,n,i,o=void 0!==arguments[1]?arguments[1]:function(){},s=this,a=this._editors.find(function(e){return e.id===t
});a?a.fileEntry?0===a.changeCounter?o():(e=u(a.fileEntry),"svg"===e?(n="xml",i=!1):"svgz"===e?(n="xml",i=!0):"html"===e&&(n="html",i=!1),app.bridge.postMessage(a.id,"getArtwork",n,function(t){i&&(t=r(t)),s._writeFileEntry(a.fileEntry,t,function(){s.setEditorChangeCounter(a.id,0),o()
})})):this._saveEditorArtworkAs(a.id,o):o()},_saveEditorArtworkAs:function(t){var e,n=void 0!==arguments[1]?arguments[1]:function(){},i=this,o=this._editors.find(function(e){return e.id===t
});o?(e={type:"saveFile",suggestedName:o.fileEntry?o.fileEntry.name:"Untitled",acceptsAllTypes:!0,accepts:[{description:"HTML",extensions:["html"]},{description:"SVGZ",extensions:["svgz"]},{description:"SVG",extensions:["svg"]}]},chrome.fileSystem.chooseEntry(e,function(t){var e,s,a;
chrome.runtime.lastError?n(!0):(e=u(t),"svg"===e?(s="xml",a=!1):"svgz"===e?(s="xml",a=!0):"html"===e&&(s="html",a=!1),chrome.fileSystem.getDisplayPath(t,function(e){app.bridge.postMessage(o.id,"getArtwork",s,function(s){o.fileEntry=t,o.filePath=e;
var u=i._tabs.querySelector("#"+o.id);u.label=o.fileEntry.name,a&&(s=r(s)),i._writeFileEntry(o.fileEntry,s,function(){i.setEditorChangeCounter(o.id,0),i.registerRecentFile(o.fileEntry),i._storeSession(),n(!1)
})})}))})):n(!0)},_showEditor:function(t){var e=this._editors.find(function(e){return e.id===t
});e&&(this._tabs.highlightTab(t),this._webViews.showWebView(t),this._currentEditor=e,this._storeSession())
},showNextEditor:function(){var t=this._editors.indexOf(this._currentEditor);this._showEditor(this._editors[t+1]?this._editors[t+1].id:this._editors[0].id)
},showPreviousEditor:function(){var t=this._editors.indexOf(this._currentEditor);
this._showEditor(this._editors[t-1]?this._editors[t-1].id:this._editors[this._editors.length-1].id)
},moveCurrentEditorLeft:function(){var t;this._editors.length>1&&(t=this._editors.indexOf(this._currentEditor),t>0?(this._editors.remove(this._currentEditor),this._editors.splice(t-1,0,this._currentEditor)):(this._editors.remove(this._currentEditor),this._editors.push(this._currentEditor))),this._tabs.moveHighlightedTabLeft(),this._storeSession()
},moveCurrentEditorRight:function(){var t;this._editors.length>1&&(t=this._editors.indexOf(this._currentEditor),t<this._editors.length-1?(this._editors.remove(this._currentEditor),this._editors.splice(t+1,0,this._currentEditor)):(this._editors.remove(this._currentEditor),this._editors.unshift(this._currentEditor))),this._tabs.moveHighlightedTabRight(),this._storeSession()
},reloadEditor:function(t){var e=this;this._webViews.reloadWebView(t,function(){var n=e._editors.find(function(e){return e.id===t
});e.setEditorChangeCounter(n.id,0),n.fileEntry?e._readFileEntry(n.fileEntry,function(t){n.fileEntry.name.endsWith("svgz")&&(t=o(t)),app.bridge.postMessage(n.id,"init",t)
}):app.bridge.postMessage(n.id,"init")})},reloadCurrentEditor:function(){this.reloadEditor(this._currentEditor.id)
},canReloadCurrentEditor:function(){return this._confirmCloseDialog.open===!1},setEditorChangeCounter:function(t,e){var n,i,r,o=this._editors.find(function(e){return e.id===t
});o&&(n=o.changeCounter,o.changeCounter=e,0===n&&0!==o.changeCounter?(i=this._tabs.querySelector("#"+o.id),i.icon="close-edited"):0!==n&&0===o.changeCounter&&(r=this._tabs.querySelector("#"+o.id),r.icon="close"))
},saveCurrentEditorArtwork:function(t){this._saveEditorArtwork(this._currentEditor.id,t)
},saveCurrentEditorArtworkAs:function(t){this._saveEditorArtworkAs(this._currentEditor.id,t)
},canSaveCurrentEditorArtwork:function(){return this._currentEditor.changeCounter>0
},canShowNextEditor:function(){return this._editors.length>1},canShowPreviousEditor:function(){return this._editors.length>1
},canMoveCurrentEditorLeft:function(){return this._editors.length>1},canMoveCurrentEditorRight:function(){return this._editors.length>1
},registerRecentFile:function(t){var e=this;chrome.fileSystem.getDisplayPath(t,function(n){e.recentFiles.forEach(function(t){t.filePath===n&&e.recentFiles.remove(t)
}),e.recentFiles.unshift({filePath:n,fileEntry:t,retainedFileEntry:chrome.fileSystem.retainEntry(t)}),e.recentFiles.length>h&&(e.recentFiles.length=h);
var i=e.recentFiles.map(function(t){return t.retainedFileEntry});app.config.set("!bx-editors:recent",i)
})},unregisterRecentFiles:function(){app.config.set("!bx-editors:recent",null),this.recentFiles=[]
},_readRecentFiles:function(t){app.config.get("!bx-editors:recent",function(e){var i=e||[],r=[],o=function(t,e){a(t,function(n){n?chrome.fileSystem.getDisplayPath(n,function(i){r.push({filePath:i,fileEntry:n,retainedFileEntry:t}),e()
}):e()})};n(i,o,function(){r.length>h&&(r.length=h),t(r)})})},_storeSession:function(){for(var t,e,n=[],i=this._editors[Symbol.iterator]();!(e=i.next()).done;)t=e.value,n.push({current:this._currentEditor?this._currentEditor.id===t.id:!1,retainedFileEntry:t.fileEntry?chrome.fileSystem.retainEntry(t.fileEntry):null});
app.config.set("!bx-editors:session",n)},_restoreSession:function(){var t=void 0!==arguments[0]?arguments[0]:function(){},n=this;
this._getEditorsForLastSession(function(i,r){n._getEditorsForFilesPassedOnAppLaunch(function(s){for(var a,u,c,l,h,d,m,f,b=$traceurRuntime.spread(i),g=s[Symbol.iterator]();!(f=g.next()).done;){a=f.value,u=!0;
for(var p,_=b[Symbol.iterator]();!(p=_.next()).done;)if(c=p.value,null!==a.filePath&&a.filePath===c.filePath){u=!1,r=c.id;
break}u&&(b.push(a),r=a.id)}0===b.length&&(l={id:"editor-"+n._counter,changeCounter:0,filePath:null,fileEntry:null},r=l.id,n._counter+=1,b.push(l));
var v=b.find(function(t){return t.id===r});v||(v=b[b.length-1]);for(var y,w=b.filter(function(t){return t.id!==v.id
}),x=b[Symbol.iterator]();!(y=x.next()).done;)h=y.value,n._editors.push(h),d=h.fileEntry?h.fileEntry.name:"Untitled",m=n._tabs.openTab(h.id,d),m.disabled=!0,h===v&&n._tabs.highlightTab(h.id);
var S=function(t,e){t.fileEntry?n._readFileEntry(t.fileEntry,function(i){t.fileEntry.name.endsWith("svgz")&&(i=o(i)),n._webViews.openWebView(t.id,"frontend/editor.html",i,function(){n._tabs.querySelector("#"+t.id).disabled=!1,e()
})}):n._webViews.openWebView(t.id,"frontend/editor.html",null,function(){n._tabs.querySelector("#"+t.id).disabled=!1,e()
})};S(v,function(){n._showEditor(v.id),n.dispatchEvent(new CustomEvent("sessionrestore"));
var i=function(t,e){S(t,function(){e()})};e(w,i,function(){t()})})})})},_getEditorsForLastSession:function(t){var n=this,i=[],r=null;
app.config.get("!bx-editors:session",function(o){if(!o)return void t(i,r);var s=function(t,e){var o,s=t,u=s.retainedFileEntry,c=s.current;
u?a(u,function(t){t?chrome.fileSystem.getDisplayPath(t,function(o){var s={id:"editor-"+n._counter,changeCounter:0,filePath:o,fileEntry:t};
i.push(s),c&&(r=s.id),n._counter+=1,e()}):e()}):(o={id:"editor-"+n._counter,changeCounter:0,filePath:null,fileEntry:null,current:c},i.push(o),c&&(r=o.id),n._counter+=1,e())
};e(o,s,function(){t(i,r)})})},_getEditorsForFilesPassedOnAppLaunch:function(t){var n=this,i=[],r=function(t,e){a(t,function(t){t?chrome.fileSystem.getDisplayPath(t,function(r){i.push({id:"editor-"+n._counter,changeCounter:0,filePath:r,fileEntry:t,current:!1}),n._counter+=1,e()
}):e()})};app.bridge.postMessage("background","getPipedFiles",null,function(n){e(n,r,function(){t(i)
})})},_readFileEntry:function(t,e){t.file(function(n){var i;i=t.name.endsWith("svgz")?"binary":"text";
var r=new FileReader;r.addEventListener("load",function(t){var n;n="binary"===i?new Uint8Array(t.target.result):t.target.result,e(n)
}),"binary"===i?r.readAsArrayBuffer(n):r.readAsText(n)})},_writeFileEntry:function(t,e){var n=void 0!==arguments[2]?arguments[2]:function(){},i=function(t){var i=new Blob([e],{type:"image/svg+xml;charset=utf-8"}),r="write";
t.addEventListener("writeend",function(){"write"===r?(r="truncate",t.truncate(i.size)):"truncate"===r&&n()
}),t.addEventListener("error",function(t){console.log(t)}),t.write(i)},r=function(t){"NotFoundError"===t.name
};t.createWriter(i,r)}},{},HTMLElement);var b=c("bx-editors",m);return{get default(){return b
}}}),System.register("elements/bx-icon",[],function(){"use strict";var t=System.get("utils/dom").registerElement,e='\n<style>\n  @import url("stylesheets/bx-icon.css");\n</style>\n\n<main>\n  <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 100 100">\n    <use width="100" height="100" x="0" y="0"></use>\n  </svg>\n</main>\n',n=function(){$traceurRuntime.defaultSuperCall(this,i.prototype,arguments)
},i=n;$traceurRuntime.createClass(n,{createdCallback:function(){this.createShadowRoot(),this.shadowRoot.innerHTML=e,this._useElement=this.shadowRoot.querySelector("use"),this._onNameChange()
},attributeChangedCallback:function(t,e,n){e!==n&&"name"===t&&this._onNameChange()
},get name(){return this.hasAttribute("name")?this.getAttribute("name"):""},set name(t){this.setAttribute("name",t)
},_onNameChange:function(){this._useElement.href.baseVal="images/icons.svg#"+this.name
}},{},HTMLElement);var r=t("bx-icon",n);return{get default(){return r}}}),System.register("elements/bx-main",[],function(){"use strict";
var t=System.get("elements/bx-app").default;System.get("elements/bx-menubar"),System.get("elements/bx-menu"),System.get("elements/bx-menuitem"),System.get("elements/bx-editors");
var e=System.get("utils/array").iterateSeries,n=System.get("utils/chrome"),i=n.getBackgroundWindow,r=n.restoreFileEntry,o=n.APP_VERSION,s=System.get("utils/dom"),a=s.createElement,u=s.registerElement,c=System.get("utils/event").keyboardShortcutToString,l=System.get("utils/platform").OS_NAME,h=System.get("utils/time").createTimeout,d="frontend/preferences.html",m="frontend/about.html",f={id:"preferencesAppWindow",resizable:!1,hidden:!0,frame:{type:"chrome",color:"#303030"},outerBounds:{width:700,minWidth:700,maxWidth:700,height:450,minHeight:450,maxHeight:450}},b={id:"aboutAppWindow",resizable:!1,hidden:!0,frame:{type:"chrome",color:"#2D2D2D"},outerBounds:{width:340,minWidth:340,maxWidth:340,height:400,minHeight:400,maxHeight:400}},g='\n  <style>@import url("stylesheets/bx-main.css");</style>\n\n  <bx-menubar disabled>\n    <bx-menu label="File">\n      <bx-menuitem commandid="new"></bx-menuitem>\n      <bx-menuitem commandid="newFromSelected"></bx-menuitem>\n      <bx-menuitem commandid="open"></bx-menuitem>\n      <bx-menuitem id="open-recent-menu-item" label="Open Recent">\n        <bx-menu id="open-recent-menu">\n          <hr/>\n          <bx-menuitem commandid="clearRecent"></bx-menuitem>\n        </bx-menu>\n      </bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="save"></bx-menuitem>\n      <bx-menuitem commandid="saveAs"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="reloadFromDisk"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="close"></bx-menuitem>\n      <bx-menuitem commandid="quit"></bx-menuitem>\n    </bx-menu>\n\n    <bx-menu label="Edit">\n      <bx-menuitem commandid="undo"></bx-menuitem> \n      <bx-menuitem commandid="redo"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="cut"></bx-menuitem>\n      <bx-menuitem commandid="copy"></bx-menuitem>\n      <bx-menuitem commandid="paste"></bx-menuitem>\n      <bx-menuitem commandid="duplicate"></bx-menuitem>\n      <bx-menuitem commandid="delete"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="selectAll"></bx-menuitem>\n      <bx-menuitem commandid="deselectAll"></bx-menuitem>\n      <bx-menuitem commandid="selectNext"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="preferences"></bx-menuitem>\n    </bx-menu>\n\n    <bx-menu label="View">\n      <bx-menuitem commandid="zoomIn"></bx-menuitem>\n      <bx-menuitem commandid="zoomOut"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="zoomToFitAll"></bx-menuitem>\n      <bx-menuitem commandid="zoomToOriginalSize"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="zoomToViewBox"></bx-menuitem>\n      <bx-menuitem commandid="zoomToViewBoxWidth"></bx-menuitem>\n      <bx-menuitem commandid="zoomToViewBoxHeight"></bx-menuitem>\n    </bx-menu>\n\n    <bx-menu label="Object">\n      <bx-menuitem commandid="group"></bx-menuitem>\n      <bx-menuitem commandid="ungroup"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="raise"></bx-menuitem>\n      <bx-menuitem commandid="lower"></bx-menuitem>\n      <bx-menuitem commandid="raiseToFront"></bx-menuitem>\n      <bx-menuitem commandid="lowerToBack"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="clip"></bx-menuitem>\n      <bx-menuitem commandid="unclip"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="mask"></bx-menuitem>\n      <bx-menuitem commandid="unmask"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="editSymbol"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="rotateClockwise"></bx-menuitem>\n      <bx-menuitem commandid="rotateCounterclockwise"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="flipX"></bx-menuitem>\n      <bx-menuitem commandid="flipY"></bx-menuitem>\n      <hr/>\n      <bx-menuitem label="Move">\n        <bx-menu>\n          <bx-menuitem commandid="moveOneUnitLeft"></bx-menuitem>\n          <bx-menuitem commandid="moveOneUnitRight"></bx-menuitem>\n          <bx-menuitem commandid="moveOneUnitUp"></bx-menuitem>\n          <bx-menuitem commandid="moveOneUnitDown"></bx-menuitem>\n          <hr/>\n          <bx-menuitem commandid="moveTenUnitsLeft"></bx-menuitem>\n          <bx-menuitem commandid="moveTenUnitsRight"></bx-menuitem>\n          <bx-menuitem commandid="moveTenUnitsUp"></bx-menuitem>\n          <bx-menuitem commandid="moveTenUnitsDown"></bx-menuitem>\n        </bx-menu>\n      </bx-menuitem>\n    </bx-menu>\n\n    <bx-menu label="Tools">\n      <bx-menuitem commandid="previousTool"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="transformTool"></bx-menuitem>\n      <bx-menuitem commandid="editTool"></bx-menuitem>\n      <bx-menuitem commandid="quadBezierTool"></bx-menuitem>\n      <bx-menuitem commandid="cubicBezierTool"></bx-menuitem>\n      <bx-menuitem commandid="freehandTool"></bx-menuitem>\n      <bx-menuitem commandid="textTool"></bx-menuitem>\n      <bx-menuitem commandid="rectangleTool"></bx-menuitem>\n      <bx-menuitem commandid="ellipseTool"></bx-menuitem>\n    </bx-menu>\n\n    <bx-menu label="Panels">\n      <bx-menuitem commandid="fillPanel"></bx-menuitem>\n      <bx-menuitem commandid="strokePanel"></bx-menuitem>\n      <bx-menuitem commandid="compositingPanel"></bx-menuitem>\n      <bx-menuitem commandid="typographyPanel"></bx-menuitem>\n      <bx-menuitem commandid="arrangementPanel"></bx-menuitem>\n      <bx-menuitem commandid="viewPanel"></bx-menuitem>\n    </bx-menu>\n\n    <bx-menu label="Window">\n      <bx-menuitem commandid="showPreviousTab"></bx-menuitem>\n      <bx-menuitem commandid="showNextTab"></bx-menuitem>\n      <bx-menuitem commandid="moveTabLeft"></bx-menuitem>\n      <bx-menuitem commandid="moveTabRight"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="minimizeWindow"></bx-menuitem>\n      <bx-menuitem commandid="maximizeWindow"></bx-menuitem>\n      <bx-menuitem commandid="fullscreen"></bx-menuitem>\n      <bx-menuitem commandid="restoreWindow"></bx-menuitem>\n      <hr/>\n      <bx-menuitem commandid="alwaysOnTop"></bx-menuitem>\n    </bx-menu>\n\n    <bx-menu label="Help">\n      <bx-menuitem commandid="about"></bx-menuitem>\n      <bx-menuitem commandid="rate"></bx-menuitem>\n      <bx-menuitem commandid="support"></bx-menuitem>\n    </bx-menu>\n  </bx-menubar>\n\n  <bx-editors></bx-editors>\n',p=function(){$traceurRuntime.defaultSuperCall(this,_.prototype,arguments)
},_=p;$traceurRuntime.createClass(p,{createdCallback:function(){var t=this;$traceurRuntime.superCall(this,_.prototype,"createdCallback",[]),this.commands={"new":{label:"New",shortcut:["Ctrl","T"],enabled:function(){return!0
},exec:function(){return t.editors.openEditor()}},newFromSelected:{label:"New From Selected",shortcut:["Ctrl","Shift","N"],enabled:function(){return!0
},exec:function(){return t._openNewEditorWithArtworkFromSelectedElements()}},open:{label:"Open…",shortcut:["Ctrl","O"],enabled:function(){return!0
},exec:function(){return h(100,function(){return t.editors.openEditorWithArtworkFromFileDialog()
})}},clearRecent:{label:"Clear Recent",enabled:function(){return t.editors.recentFiles.length>0
},exec:function(){return t.editors.unregisterRecentFiles()}},save:{label:"Save",shortcut:["Ctrl","S"],enabled:function(){return t.editors.canSaveCurrentEditorArtwork()
},exec:function(){return h(100,function(){return t.editors.saveCurrentEditorArtwork()
})}},saveAs:{shortcut:["Ctrl","Shift","S"],label:"Save As…",enabled:function(){return!0
},exec:function(){return h(100,function(){return t.editors.saveCurrentEditorArtworkAs()
})}},reloadFromDisk:{shortcut:["Ctrl","R"],label:"Reload from Disk",enabled:function(){return t.editors.canReloadCurrentEditor()
},exec:function(){return t.editors.reloadCurrentEditor()}},close:{shortcut:["Ctrl","W"],label:"Close",enabled:function(){return!0
},exec:function(){return t.editors.closeEditor(t.editors.currentEditorID)}},quit:{shortcut:["Ctrl","Q"],label:"Quit Boxy SVG",enabled:function(){return!0
},exec:function(){return t._quitApp()}},showPreviousTab:{label:"Show Previous Tab",shortcut:["Ctrl","Left"],enabled:function(){return t.editors.canShowPreviousEditor()
},exec:function(){return t.editors.showPreviousEditor()}},showNextTab:{label:"Show Next Tab",shortcut:["Ctrl","Right"],enabled:function(){return t.editors.canShowNextEditor()
},exec:function(){return t.editors.showNextEditor()}},moveTabLeft:{label:"Move Tab Left",shortcut:["Ctrl","Alt","Left"],enabled:function(){return t.editors.canMoveCurrentEditorLeft()
},exec:function(){return t.editors.moveCurrentEditorLeft()}},moveTabRight:{label:"Move Tab Right",shortcut:["Ctrl","Alt","Right"],enabled:function(){return t.editors.canMoveCurrentEditorRight()
},exec:function(){return t.editors.moveCurrentEditorRight()}},minimizeWindow:{label:"Minimize Window",enabled:function(){return!0
},exec:function(){return chrome.app.window.current().minimize()}},maximizeWindow:{label:"Maximize Window",enabled:function(){return t._canMaximizeCurrentWindow()
},exec:function(){return t._maximizeCurrentWindow()}},restoreWindow:{label:"Restore",enabled:function(){return t._canRestoreCurrentWindow()
},exec:function(){return t._restoreCurrentWindow()}},fullscreen:{label:"Fullscreen",enabled:function(){return!chrome.app.window.current().isFullscreen()
},exec:function(){return chrome.app.window.current().fullscreen()}},alwaysOnTop:{label:"Always on Top",enabled:function(){return!0
},state:function(){return chrome.app.window.current().isAlwaysOnTop()},exec:function(){return t._toggleAlwaysOnTopWindowState()
}},about:{label:"About",enabled:function(){return!0},exec:function(){return t._openAboutAppWindow()
}},preferences:{label:"Preferences…",enabled:function(){return!0},exec:function(){return t._openPreferencesAppWindow()
}},rate:{label:"Rate on Chrome Web Store...",enabled:function(){return navigator.onLine
},exec:function(){return t._openChromeWebStoreReviewsPage()}},support:{label:"Get Support...",enabled:function(){return navigator.onLine
},exec:function(){return t._openChromeWebStoreSupportPage()}}},i(function(e){t.bridge.registerTarget("background",e),t.shadowRoot.innerHTML=g,t.editors=t.shadowRoot.querySelector("bx-editors"),t.menubar=t.shadowRoot.querySelector("bx-menubar"),t.menubar.validateMenu=function(e){return t._validateMenu(e)
},"windows"===l&&t.setAttribute("bordered",""),t.menubar.addEventListener("dragover",function(e){return t._onMenubarDragOver(e)
}),t.menubar.addEventListener("drop",function(e){return t._onMenubarDrop(e)}),t.menubar.addEventListener("menuitemclick",function(e){return t._onMenuItemClick(e)
}),t.editors.addEventListener("sessionrestore",function(){return t._onSessionRestore()
}),t.shadowRoot.addEventListener("mousedown",function(e){return t._onMouseDown(e)
}),t.bridge.addMessageHandler("setChangeCounter",function(e,n){t.editors.setEditorChangeCounter(n,e)
}),t.bridge.addMessageHandler("getVersion",function(t,e,n){n(o)}),t.bridge.addMessageHandler("openFiles",function(e){t._openFiles(e)
}),t.bridge.addMessageHandler("getMenubarCommandDescriptors",function(e,n,i){t._getMenubarCommandDescriptors(function(t){return i(t)
})}),setTimeout(function(){t.bridge.postMessage("background","ready")},1e3)})},_onMouseDown:function(t){"bx-editors"!==t.target.localName&&t.preventDefault()
},_onMenuItemClick:function(t){var e,n,i=this,r=t.detail;r.id.startsWith("open-recent-")?(e=r.id.substring(12),chrome.fileSystem.restoreEntry(e,function(t){i.editors.openEditorWithArtworkFromFileEntry(t),i.editors.registerRecentFile(t)
})):(n=this.commands[r.commandID],n?n.exec():this.bridge.postMessage(this.editors.currentEditorID,"execCommand",r.commandID))
},_onMenubarDragOver:function(t){t.preventDefault(),t.dataTransfer.effectAllowed="copy",t.dataTransfer.dropEffect="copy"
},_onMenubarDrop:function(t){var n=this;t.preventDefault(),e(t.dataTransfer.items,function(t,e){var i=t.webkitGetAsEntry();
(i.name.endsWith(".svg")||i.name.endsWith(".svgz"))&&(chrome.fileSystem.getWritableEntry(i,function(t){n.editors.openEditorWithArtworkFromFileEntry(t),n.editors.registerRecentFile(t)
}),e())})},_onSessionRestore:function(){this.menubar.disabled=!1},_openFiles:function(t){var n=this;
e(t,function(t,e){r(t,function(t){t?n.editors.openEditorWithArtworkFromFileEntry(t,function(){n.editors.registerRecentFile(t),e()
}):e()})})},_validateMenu:function(t){var e=this;"open-recent-menu"===t.id&&this._recreateOpenRecentMenuItems(t);
var n=$traceurRuntime.spread(t.children).filter(function(t){return t.commandID});
n.forEach(function(t){var n=t.commandID;e._getCommandDescriptor(n,function(i){i&&(t.disabled=!i.enabled,t.shortcut=c(e.userShortcuts[n]||i.shortcut),t.label=i.label,t.state=i.state===!0?"toggled":i.state===!1?null:"selected")
})})},_recreateOpenRecentMenuItems:function(t){var e,n;if($traceurRuntime.spread(t.children).forEach(function(t){t.id&&t.id.startsWith("open-recent-")&&t.remove()
}),this.editors.recentFiles.length>0)for(var i,r=$traceurRuntime.spread(this.editors.recentFiles).reverse()[Symbol.iterator]();!(i=r.next()).done;)e=i.value,n=a("bx-menuitem"),n.id="open-recent-"+e.retainedFileEntry,n.label=e.filePath,n.state=null,n.enabled=!0,t.prepend(n)
},_getCommandDescriptor:function(t,e){var n,i,r=this;this.commands[t]?(n=this.commands[t],i={label:n.label,shortcut:n.shortcut?n.shortcut:[],state:n.state?n.state():!1,enabled:n.enabled?n.enabled():!0},e(i,"backend")):this.editors.currentEditorID?this.bridge.postMessage(this.editors.currentEditorID,"getCommand",t,function(t){e(t,r.editors.currentEditorID)
}):e(null,null)},_getMenubarCommandDescriptors:function(t){var e=this,n=document.createTreeWalker(this.menubar,NodeFilter.SHOW_ELEMENT),i=[],r=function(){var o=void 0!==arguments[0]?arguments[0]:n.nextNode();
null===o?t(i):o.commandID?e._getCommandDescriptor(o.commandID,function(t){for(var n=o.commandID,s=t.shortcut,a=t.label,u=o.parentElement;u&&u!==e._menubar;u=u.parentElement)u.label&&(a=u.label+" ‣ "+a);
i.push({id:n,shortcut:s,label:a}),r()}):r()};r()},_quitApp:function(){this._aboutAppWindow&&this._aboutAppWindow.close(),this._preferencesAppWindow&&this._preferencesAppWindow.close(),chrome.app.window.current().close()
},_openNewEditorWithArtworkFromSelectedElements:function(){var t=this,e=this.editors.currentEditorID;
this.bridge.postMessage(e,"getArtworkFromSelectedElements","html",function(e){t.editors.openEditor(e)
})},_maximizeCurrentWindow:function(){var t=chrome.app.window.current();t.maximize()
},_canMaximizeCurrentWindow:function(){var t=chrome.app.window.current();return t.isMaximized()===!1&&t.isFullscreen()===!1
},_restoreCurrentWindow:function(){var t=chrome.app.window.current();t.restore()},_canRestoreCurrentWindow:function(){var t=chrome.app.window.current();
return t.isMaximized()||t.isFullscreen()},_toggleAlwaysOnTopWindowState:function(){var t=chrome.app.window.current();
t.setAlwaysOnTop(!t.isAlwaysOnTop())},_openPreferencesAppWindow:function(){var t=this;
this._preferencesAppWindow?this._preferencesAppWindow.focus():chrome.app.window.create(d,f,function(e){var n,i;
t._preferencesAppWindow=e,e.contentWindow.name="preferences",t.bridge.registerTarget("preferences",e.contentWindow),e.contentWindow.addEventListener("load",i=function(){e.contentWindow.removeEventListener("load",i),t.bridge.postMessage("preferences","init"),h(150,function(){return e.show()
})}),e.onClosed.addListener(n=function(){e.onClosed.removeListener(n),t._preferencesAppWindow=null,t.bridge.unregisterTarget("preferences")
})})},_openAboutAppWindow:function(){var t=this;this._aboutAppWindow?this._aboutAppWindow.focus():chrome.app.window.create(m,b,function(e){var n,i;
t._aboutAppWindow=e,e.contentWindow.name="about",t.bridge.registerTarget("about",e.contentWindow),e.contentWindow.addEventListener("load",i=function(){e.contentWindow.removeEventListener("load",i),t.bridge.postMessage("about","init"),h(150,function(){return e.show()
})}),e.onClosed.addListener(n=function(){e.onClosed.removeListener(n),t._aboutAppWindow=null,t.bridge.unregisterTarget("about")
})})},_openChromeWebStoreReviewsPage:function(){window.open("https://chrome.google.com/webstore/detail/boxy-svg/gaoogdonmngmdlbinmiclicjpbjhgomg/reviews")
},_openChromeWebStoreSupportPage:function(){window.open("https://chrome.google.com/webstore/detail/boxy-svg/gaoogdonmngmdlbinmiclicjpbjhgomg/support")
}},{},t);var v=u("bx-main",p);return{get default(){return v}}}),System.register("elements/bx-menu",[],function(){"use strict";
System.get("elements/bx-menuitem"),System.get("elements/bx-icon");var t=System.get("utils/dom").registerElement,e=System.get("utils/time").createTimeout,n=75,i=300,r='\n  <style>\n    @import url("stylesheets/scrollbars.css");\n    @import url("stylesheets/bx-menu.css");\n  </style>\n\n  <main>\n    <content></content>\n  </main>\n',o=function(){$traceurRuntime.defaultSuperCall(this,s.prototype,arguments)
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
if(!this._openedSubmenu)return 0;if(!e)return 0;r||(r=e);var o=this.getBoundingClientRect(),s={x:o.left,y:o.top-n},a={x:o.left+o.width,y:s.y},u={x:o.left,y:o.top+o.height+n},c={x:o.left+o.width,y:u.y};
if(r.x<o.left||r.x>c.x||r.y<o.top||r.y>c.y)return 0;if(this._lastDelayLoc&&e.x==this._lastDelayLoc.x&&e.y==this._lastDelayLoc.y)return 0;
var l=function(t,e){return(e.y-t.y)/(e.x-t.x)},h=a,d=c;"left"==t?(h=u,d=s):"below"==t?(h=c,d=u):"above"==t&&(h=s,d=a);
var m=l(e,h),f=l(e,d),b=l(r,h),g=l(r,d);return b>m&&f>g?(this._lastDelayLoc=e,i):(this._lastDelayLoc=null,0)
}},{},HTMLElement);var a=t("bx-menu",o);return{get default(){return a}}}),System.register("elements/bx-menubar",[],function(){"use strict";
var t=System.get("utils/dom"),e=t.createElement,n=t.registerElement;System.get("elements/bx-menu");
var i=!1,r='\n  <style>@import url("stylesheets/bx-menubar.css");</style>\n  <div id="overlay"></div>\n  <ul id="strip"></ul>\n  <content></content>\n',o=function(){$traceurRuntime.defaultSuperCall(this,s.prototype,arguments)
},s=o;$traceurRuntime.createClass(o,{createdCallback:function(){var t=this;this._highlightedStripItem=null,this.createShadowRoot(),this.shadowRoot.innerHTML=r,this._strip=this.shadowRoot.querySelector("#strip"),this._content=this.shadowRoot.querySelector("content"),this._overlay=this.shadowRoot.querySelector("#overlay"),this.addEventListener("menuattach",function(e){return t._onMenuAttach(e)
}),this.addEventListener("menudetach",function(e){return t._onMenuDetach(e)}),this.addEventListener("menuopen",function(e){return t._onMenuOpen(e)
}),this.addEventListener("menuitemclick",function(e){return t._onMenuItemClick(e)
}),this.addEventListener("menulabelchange",function(e){return t._onMenuLabelChange(e)
}),this._strip.addEventListener("mousedown",function(e){return t._onStripMouseDown(e)
}),this._strip.addEventListener("mouseover",function(e){return t._onStripMouseOver(e)
}),this._overlay.addEventListener("mousedown",function(e){return t._onOverlayMouseDown(e)
}),i&&this.setAttribute("debug","")},attachedCallback:function(){var t=this;window.addEventListener("blur",this._windowBlurListener=function(){return t._onWindowBlur(event)
}),window.addEventListener("resize",this._windowResizeListener=function(){return t._onWindowResize(event)
})},detachedCallback:function(){window.removeEventListener("blur",this._windowBlurListener),window.removeEventListener("resize",this._windowResizeListener)
},validateMenu:function(){},_onMenuAttach:function(t){t.detail.parentElement===this&&this._updateStrip()
},_onMenuDetach:function(t){t.detail.parentElement===this&&this._updateStrip()},_onMenuOpen:function(t){this.validateMenu(t.detail)
},_onMenuItemClick:function(){this._collapse()},_onMenuLabelChange:function(t){t.detail.parentElement===this&&this._updateStrip()
},_onStripMouseDown:function(t){this._highlightedStripItem&&t.target===this._strip&&this._collapse(),0===t.button&&(t.target===this._strip?this._onStripEmptySpaceDragStart(t):this._onStripItemMouseDown(t.target))
},_onStripEmptySpaceDragStart:function(t){var e,n,i=chrome.app.window.current().getBounds();
window.addEventListener("mousemove",e=function(e){var n=e.screenX-t.screenX,r=e.screenY-t.screenY;
chrome.app.window.current().setBounds({left:i.left+n,top:i.top+r,width:i.width,height:i.height})
}),window.addEventListener("mouseup",n=function(){window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",n)
})},_onStripMouseOver:function(t){0===t.button&&t.target!==this._strip&&this._onStripItemMouseEnter(t.target)
},_onStripItemMouseDown:function(t){this._highlightedStripItem===t?this._collapse():this._expand(t)
},_onStripItemMouseEnter:function(t){this._highlightedStripItem&&this._highlightedStripItem!==t&&this._expand(t)
},_onOverlayMouseDown:function(t){this._collapse(),t.preventDefault(),t.stopPropagation()
},_onWindowBlur:function(){i||this._collapse()},_onWindowResize:function(){i||this._collapse()
},_expand:function(t){this._highlightedStripItem&&(this._highlightedStripItem.removeAttribute("highlighted"),this._highlightedStripItem.menu.close()),this._overlay.style.display="block",t.menu.openBelowElement(t),t.setAttribute("highlighted",""),this._highlightedStripItem=t
},_collapse:function(){this._highlightedStripItem&&(this._highlightedStripItem.removeAttribute("highlighted"),this._highlightedStripItem.menu.close(),this._highlightedStripItem=null),this._overlay.style.display="none"
},_updateStrip:function(){if(this.children.length!==this._strip.children.length){this._strip.innerHTML="";
for(var t=0;t<this.children.length;t+=1)this._strip.append(e("li"))}for(var n=0;n<this.children.length;n+=1)this._strip.children[n].textContent=this.children[n].label,this._strip.children[n].menu=this.children[n]
}},{},HTMLElement);var a=n("bx-menubar",o);return{get default(){return a}}}),System.register("elements/bx-menuitem",[],function(){"use strict";
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
var o=t("bx-menuitem",i);return{get default(){return o}}}),System.register("elements/bx-tab",[],function(){"use strict";
System.get("elements/bx-button");var t=System.get("utils/dom").registerElement,e='\n  <style>@import url("stylesheets/bx-tab.css");</style>\n\n  <main>\n    <div id="label"></div>\n    <bx-button id="close" icon="close" iconsize="10" skin="bx-tabs"></bx-button>\n  </main>\n',n=function(){$traceurRuntime.defaultSuperCall(this,i.prototype,arguments)
},i=n;$traceurRuntime.createClass(n,{createdCallback:function(){var t=this;this.createShadowRoot(),this.shadowRoot.innerHTML=e,this._labelElement=this.shadowRoot.querySelector("#label"),this._closeButton=this.shadowRoot.querySelector("#close"),this.shadowRoot.addEventListener("mousedown",function(e){return t._onMouseDown(e)
}),this._closeButton.addEventListener("click",function(e){return t._onCloseButtonClick(e)
}),this._onLabelChange(),this._onIconChange(),this._onDisabledChange()},attachedCallback:function(){this.dispatchEvent(new CustomEvent("tabopen",{bubbles:!0,detail:this}))
},detachedCallback:function(){this.dispatchEvent(new CustomEvent("tabclose",{bubbles:!0,detail:this}))
},attributeChangedCallback:function(t,e,n){e!==n&&("label"===t?this._onLabelChange():"icon"===t?this._onIconChange():"disabled"===t&&this._onDisabledChange())
},get label(){return this.hasAttribute("label")?this.getAttribute("label"):""},set label(t){this.setAttribute("label",t)
},get icon(){return this.hasAttribute("icon")?this.getAttribute("icon"):"close"},set icon(t){this.setAttribute("icon",t)
},get highlighted(){return this.hasAttribute("highlighted")},set highlighted(t){t?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")
},_onMouseDown:function(t){0===t.button&&t.target!==this._closeButton&&this.disabled===!1&&this.highlighted===!1&&this.dispatchEvent(new CustomEvent("tabdown",{bubbles:!0,detail:this}))
},_onCloseButtonClick:function(t){0===t.button&&this.dispatchEvent(new CustomEvent("tabcloseintent",{bubbles:!0,detail:this}))
},_onLabelChange:function(){this._labelElement.textContent=this.label},_onIconChange:function(){this._closeButton.icon=this.icon
},_onDisabledChange:function(){this._closeButton.disabled=this.disabled}},{},HTMLElement);
var r=t("bx-tab",n);return{get default(){return r}}}),System.register("elements/bx-tabs",[],function(){"use strict";
System.get("elements/bx-button"),System.get("elements/bx-contextmenu"),System.get("elements/bx-menu"),System.get("elements/bx-menuitem"),System.get("elements/bx-tab");
var t=System.get("utils/dom"),e=t.createElement,n=t.registerElement,i=(System.get("utils/event").isMouseMoveIntentional,System.get("utils/time").createTimeout),r=Math.abs,o=Number,s=o.parseInt,a=(o.parseFloat,50),u='\n  <style>@import url("stylesheets/bx-tabs.css");</style>\n\n  <main>\n    <content></content>\n    <bx-button id="new-tab-button" skin="bx-tabs" iconsize="15" icon="plus"></bx-button>\n    <bx-contextmenu id="context-menu">\n      <bx-menu>\n        <bx-menuitem id="open-tab-menu-item" label="Open tab"></bx-menuitem>\n        <hr/>\n        <bx-menuitem id="close-tab-menu-item" label="Close Tab"></bx-menuitem>\n        <bx-menuitem id="close-other-tabs-menu-item" label="Close Other Tabs"></bx-menuitem>\n        <bx-menuitem id="close-tabs-to-right-menu-item" label="Close Tabs to the Right"></bx-menuitem>\n      </bx-menu>\n    </bx-contextmenu>\n  </main>\n',c=function(){$traceurRuntime.defaultSuperCall(this,l.prototype,arguments)
},l=c;$traceurRuntime.createClass(c,{createdCallback:function(){var t=this;this.createShadowRoot(),this.shadowRoot.innerHTML=u,this._main=this.shadowRoot.querySelector("main"),this._newTabButton=this.shadowRoot.querySelector("#new-tab-button"),this._contextMenu=this.shadowRoot.querySelector("#context-menu"),this._openTabMenuItem=this.shadowRoot.querySelector("#open-tab-menu-item"),this._closeTabMenuItem=this.shadowRoot.querySelector("#close-tab-menu-item"),this._closeOtherTabsMenuItem=this.shadowRoot.querySelector("#close-other-tabs-menu-item"),this._closeTabsToRightMenuItem=this.shadowRoot.querySelector("#close-tabs-to-right-menu-item"),this.addEventListener("tabopen",function(t){return t.stopPropagation()
}),this.addEventListener("tabclose",function(t){return t.stopPropagation()}),this.addEventListener("tabcloseintent",function(t){return t.stopPropagation()
}),this.addEventListener("tabdown",function(e){return t._onTabDown(e)}),this.addEventListener("menuitemclick",function(e){return t._onContextMenuItemClick(e)
}),this.shadowRoot.addEventListener("mousedown",function(e){return t._onMouseDown(e)
}),this._newTabButton.addEventListener("click",function(e){return t._onNewTabButtonClick(e)
}),this._contextMenu.validateMenu=function(e,n){return t._validateContextMenu(e,n)
}},openTab:function(t,n){var r=e("bx-tab");return r.id=t,r.label=n,r.style.maxWidth="0px",r.style.order=this.children.length,this.append(r),i(50,function(){return r.style.maxWidth=null
}),r},closeTab:function(t){var e,n=this,r=this.querySelector("#"+t),o=r.getBoundingClientRect().width,s=this._getSlotForTab(r);
if(r.isClosing=!0,s<this.children.length-1)for(var a,u=this.children[Symbol.iterator]();!(a=u.next()).done;)e=a.value,e.isClosing||(e.style.transition="none",e.style.maxWidth=o+"px");
r.style.transition=null,r.style.maxWidth="0px",this._waitingForTabToClose=!0,i(150,function(){var t,e,i,o,s,a;
r.remove(),n._waitingForTabToClose=!1,delete r.isClosing,n._waitingForMouseMoveAfterClosingTab||(n._waitingForMouseMoveAfterClosingTab=!0,o=null,s=null,a=function(){var r;
window.removeEventListener("mousemove",t),window.removeEventListener("mouseout",e),window.removeEventListener("blur",i),n._waitingForMouseMoveAfterClosingTab=!1;
for(var o,s=n.children[Symbol.iterator]();!(o=s.next()).done;)r=o.value,r.style.transition=null,r.style.maxWidth=null
},window.addEventListener("mousemove",t=function(t){return null===o&&null===s?(o=t.clientX,void(s=t.clientY)):void(t.clientX>=o-3&&t.clientX<=o+3&&t.clientY>=s-3&&t.clientY<=s+3||a())
}),window.addEventListener("mouseout",e=function(t){null===t.toElement&&a()}),window.addEventListener("blur",i=function(){a()
}))})},highlightTab:function(t){var e=this.querySelector("bx-tab#"+t),n=this.querySelector("bx-tab[highlighted]");
null===t?n&&(n.highlighted=!1):e&&e!==n&&(n&&(n.highlighted=!1),e.highlighted=!0)
},moveHighlightedTabLeft:function(){for(var t,e,n,i,r=this.querySelector("bx-tab[highlighted]"),o=this._getSlotForTab(r),a=this.children[Symbol.iterator]();!(i=a.next()).done;)t=i.value,t.style.order=this._getSlotForTab(t);
if(0===s(r.style.order))for(var u,c=this.children[Symbol.iterator]();!(u=c.next()).done;)e=u.value,e.style.order=e===r?this.children.length-1:s(e.style.order)-1;
else n=this._getTabForSlot(o-1),n.style.order=s(n.style.order)+1,r.style.order=s(r.style.order)-1
},moveHighlightedTabRight:function(){for(var t,e,n,i,r=this.querySelector("bx-tab[highlighted]"),o=this._getSlotForTab(r),a=this.children[Symbol.iterator]();!(i=a.next()).done;)t=i.value,t.style.order=this._getSlotForTab(t);
if(s(r.style.order)===this.children.length-1)for(var u,c=this.children[Symbol.iterator]();!(u=c.next()).done;)e=u.value,e.style.order=e===r?0:s(e.style.order)+1;
else n=this._getTabForSlot(o+1),n.style.order=s(n.style.order)-1,r.style.order=s(r.style.order)+1
},_onMouseDown:function(t){0===t.button&&("bx-tab"===t.target.localName?this._onTabMouseDown(t):"main"===t.target.localName&&this._onEmptySpaceDragStart(t))
},_onEmptySpaceDragStart:function(t){var e,n,i=chrome.app.window.current().getBounds();
window.addEventListener("mousemove",e=function(e){var n=e.screenX-t.screenX,r=e.screenY-t.screenY;
chrome.app.window.current().setBounds({left:i.left+n,top:i.top+r,width:i.width,height:i.height})
}),window.addEventListener("mouseup",n=function(){window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",n)
})},_onTabDown:function(t){this._waitingForTabToClose?t.stopImmediatePropagation():t.stopPropagation()
},_onTabMouseDown:function(t){var e,n,i=this,o=t.target;document.addEventListener("mousemove",e=function(s){r(s.clientX-t.clientX)>1&&(document.removeEventListener("mousemove",e),document.removeEventListener("mouseup",n),i._onTabDragStart(s,o))
}),document.addEventListener("mouseup",n=function(){document.removeEventListener("mousemove",e),document.removeEventListener("mouseup",n)
})},_onTabDragStart:function(t,e){var n,r=this,o=e.getBoundingClientRect().width,s=this.getBoundingClientRect().width;
e.style.zIndex=999,this._newTabButton.style.opacity="0";for(var a,u=this.children[Symbol.iterator]();!(a=u.next()).done;)n=a.value,n.slot=this._getSlotForTab(n),n.flexOffset=n.getBoundingClientRect().left-1,n!==e&&(n.style.transition="transform 0.15s ease-out");
var c=function(t,n){var i,s;if(n>t+1)for(var a=t;n>a;a+=1)c(a,a+1);else if(t-1>n)for(var u=t;u>n;u-=1)c(u,u-1);
else for(var l,h=r.children[Symbol.iterator]();!(l=h.next()).done;)if(i=l.value,i!==e){i.slot===n&&(i.slot=t),s=-i.flexOffset;
for(var d=0;d<i.slot;d+=1)s+=o;i.style.transform=0===s?null:"translate("+s+"px)"}},l=function(n){var i,a=n.clientX-t.clientX;
a+e.flexOffset<=0?a=-e.flexOffset:a+e.flexOffset+o>s&&(a=s-e.flexOffset-o),e.style.transform="translate("+a+"px)";
var u=r._getSlotForTab(e);u!==e.slot&&(i=e.slot,e.slot=u,c(i,e.slot))},h=function(){document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",h);
for(var t=-e.flexOffset,n=0;n<e.slot;n+=1)t+=o;e.style.transition="transform 0.15s ease-out",e.style.transform="translate("+t+"px)",r.dispatchEvent(new CustomEvent("tabslotchange",{detail:{tab:e,slot:e.slot}})),i(150,function(){var t;
e.style.zIndex=null,r._newTabButton.style.opacity=null;for(var n,i=r.children[Symbol.iterator]();!(n=i.next()).done;)t=n.value,t.style.transition=null,t.style.transform=null,t.style.order=t.slot,delete t.slot,delete e.flexOffset
})};document.addEventListener("mouseup",h),document.addEventListener("mousemove",l)
},_onNewTabButtonClick:function(t){0===t.button&&this.dispatchEvent(new CustomEvent("tabopenintent"))
},_onContextMenuItemClick:function(t){var e,n,i,r,o=t.detail,s=this._contextMenu.target;
if(o===this._openTabMenuItem)this.dispatchEvent(new CustomEvent("tabopenintent"));
else if(o===this._closeTabMenuItem)this.dispatchEvent(new CustomEvent("tabcloseintent",{detail:s}));
else if(o===this._closeOtherTabsMenuItem)for(var a,u=$traceurRuntime.spread(this.children)[Symbol.iterator]();!(a=u.next()).done;)e=a.value,e!==s&&this.dispatchEvent(new CustomEvent("tabcloseintent",{detail:e}));
else if(o===this._closeTabsToRightMenuItem){n=this._getSlotForTab(s);for(var c,l=$traceurRuntime.spread(this.children)[Symbol.iterator]();!(c=l.next()).done;)i=c.value,r=this._getSlotForTab(i),r>n&&this.dispatchEvent(new CustomEvent("tabcloseintent",{detail:i}))
}},_getSlotForTab:function(t){var e,n=t.getBoundingClientRect();if(n.left<n.width/2)return 0;
e=n.width/2;for(var i=1;a>i;i+=1){if(n.left>=e&&n.left<e+n.width)return i>this.children.length-1?this.children.length-1:i;
e+=n.width}},_getTabForSlot:function(t){for(var e,n,i,r=this.children[Symbol.iterator]();!(i=r.next()).done;)if(e=i.value,n=this._getSlotForTab(e),n===t)return e;
return null},_validateContextMenu:function(){var t=this._contextMenu.target;this._closeTabMenuItem.disabled="bx-tab"!==t.localName,this._closeOtherTabsMenuItem.disabled="bx-tab"!==t.localName||this.children.length<=1,this._closeTabsToRightMenuItem.disabled="bx-tab"!==t.localName||t===this.lastElementChild
}},{},HTMLElement);var h=n("bx-tabs",c);return{get default(){return h}}}),System.register("elements/bx-webviews",[],function(){"use strict";
var t=System.get("utils/dom"),e=t.createElement,n=t.registerElement,i='\n  <style>@import url("stylesheets/bx-webviews.css");</style>\n\n  <main>\n    <content></content>\n  </main>\n',r=function(){$traceurRuntime.defaultSuperCall(this,o.prototype,arguments)
},o=r;$traceurRuntime.createClass(r,{createdCallback:function(){var t=this;this.createShadowRoot(),this.shadowRoot.innerHTML=i,this._currentWebView=null,window.addEventListener("focus",function(){return t.focusCurrentWebView()
})},openWebView:function(t,n,i){var r=void 0!==arguments[3]?arguments[3]:function(){},o=e("webview");
o.partition="persist:boxy",o.name=t,o.src=n,o.status="loading",o.style.opacity="0",o.style.pointerEvents="none",this.append(o);
var s;o.addEventListener("contentload",s=function(){o.removeEventListener("contentload",s),app.bridge.registerTarget(t,o.contentWindow),o.setZoomMode("disabled"),o.status="loaded",app.bridge.postMessage(t,"init",i,function(){r(o)
})})},closeWebView:function(t){for(var e,n,i=this.children[Symbol.iterator]();!(n=i.next()).done;)e=n.value,e.name===t&&(this.removeChild(e),app.bridge.unregisterTarget(t))
},showWebView:function(t){for(var e,n,i=this.children[Symbol.iterator]();!(n=i.next()).done;)e=n.value,e.name===t?(e.style.opacity="1",e.style.pointerEvents="auto",e.focus(),this._currentWebView=e):(e.style.opacity="0",e.style.pointerEvents="none")
},focusCurrentWebView:function(){null!==this._currentWebView&&this._currentWebView.focus()
},reloadWebView:function(t,e){for(var n,i,r=function(n){app.bridge.unregisterTarget(t),n.status="loading",n.reload();
var i;n.addEventListener("contentload",i=function(){n.status="loaded",app.bridge.registerTarget(t,n.contentWindow),n.removeEventListener("contentload",i),e()
})},o=this.children[Symbol.iterator]();!(i=o.next()).done;)n=i.value,n.name===t&&"loading"!==n.status&&r(n)
}},{},HTMLElement);var s=n("bx-webviews",r);return{get default(){return s}}}),System.register("libs/pako",[],function(){"use strict";
!function(t){if("object"==typeof exports)module.exports=t();else if("function"==typeof define&&define.amd)define(t);
else{var e;"undefined"!=typeof window?e=window:"undefined"!=typeof global?e=global:"undefined"!=typeof self&&(e=self),e.pako=t()
}}(function(){return function t(e,n,i){function r(s,a){if(!n[s]){if(!e[s]){var u="function"==typeof require&&require;
if(!a&&u)return u(s,!0);if(o)return o(s,!0);throw new Error("Cannot find module '"+s+"'")
}var c=n[s]={exports:{}};e[s][0].call(c.exports,function(t){var n=e[s][1][t];return r(n?n:t)
},c,c.exports,t,e,n,i)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<i.length;s++)r(i[s]);
return r}({1:[function(t,e){var n=t("./lib/zlib/utils").assign,i=t("./lib/deflate"),r=t("./lib/inflate"),o=t("./lib/zlib/constants"),s={};
n(s,i,r,o),e.exports=s},{"./lib/deflate":2,"./lib/inflate":3,"./lib/zlib/constants":5,"./lib/zlib/utils":13}],2:[function(t,e,n){function i(t,e){var n=new p(e);
if(n.push(t,!0),n.err)throw n.msg;return n.result}function r(t,e){return e=e||{},e.raw=!0,i(t,e)
}function o(t,e){return e=e||{},e.gzip=!0,i(t,e)}var s=t("./zlib/deflate.js"),a=t("./zlib/utils"),u=t("./zlib/messages"),c=t("./zlib/zstream"),l=0,h=4,d=0,m=1,f=-1,b=0,g=8,p=function(t){this.options=a.assign({level:f,method:g,chunkSize:16384,windowBits:15,memLevel:8,strategy:b},t||{});
var e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c;
var n=s.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);
if(n!==d)throw new Error(u[n])};p.prototype.push=function(t,e){var n,i,r=this.strm,o=this.options.chunkSize;
if(this.ended)return!1;i=e===~~e?e:e===!0?h:l,r.next_in=t,r.next_in_index=0,r.avail_in=r.next_in.length,r.next_out=new a.Buf8(o);
do{if(r.avail_out=this.options.chunkSize,r.next_out_index=0,n=s.deflate(r,i),n!==m&&n!==d)return this.onEnd(n),this.ended=!0,!1;
r.next_out_index&&(this.onData(a.shrinkBuf(r.next_out,r.next_out_index)),(r.avail_in>0||0===r.avail_out)&&(r.next_out=new a.Buf8(this.options.chunkSize)))
}while(r.avail_in>0||0===r.avail_out);return i===h?(n=s.deflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===d):!0
},p.prototype.onData=function(t){this.chunks.push(t)},p.prototype.onEnd=function(t){t===d&&(this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg
},n.Deflate=p,n.deflate=i,n.deflateRaw=r,n.gzip=o},{"./zlib/deflate.js":7,"./zlib/messages":11,"./zlib/utils":13,"./zlib/zstream":14}],3:[function(t,e,n){function i(t,e){var n=new l(e);
if(n.push(t,!0),n.err)throw n.msg;return n.result}function r(t,e){return e=e||{},e.raw=!0,i(t,e)
}var o=t("./zlib/inflate.js"),s=t("./zlib/utils"),a=t("./zlib/constants"),u=t("./zlib/messages"),c=t("./zlib/zstream"),l=function(t){this.options=s.assign({chunkSize:16384,windowBits:0},t||{});
var e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&0===(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c;
var n=o.inflateInit2(this.strm,e.windowBits);if(n!==a.Z_OK)throw new Error(u[n])};
l.prototype.push=function(t,e){var n,i,r=this.strm,u=this.options.chunkSize;if(this.ended)return!1;
i=a.Z_NO_FLUSH,r.next_in=t,r.next_in_index=0,r.avail_in=r.next_in.length,r.next_out=new s.Buf8(u);
do{if(r.avail_out=this.options.chunkSize,r.next_out_index=0,n=o.inflate(r,i),n!==a.Z_STREAM_END&&n!==a.Z_OK)return this.onEnd(n),this.ended=!0,!1;
r.next_out_index&&(this.onData(s.shrinkBuf(r.next_out,r.next_out_index)),(r.avail_in>0||0===r.avail_out)&&(r.next_out=new s.Buf8(this.options.chunkSize)))
}while(r.avail_in>0||0===r.avail_out);return i=e===~~e?e:e===!0?a.Z_FINISH:a.Z_NO_FLUSH,i===a.Z_FINISH?(n=o.inflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===a.Z_OK):!0
},l.prototype.onData=function(t){this.chunks.push(t)},l.prototype.onEnd=function(t){t===a.Z_OK&&(this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg
},n.Inflate=l,n.inflate=i,n.inflateRaw=r},{"./zlib/constants":5,"./zlib/inflate.js":9,"./zlib/messages":11,"./zlib/utils":13,"./zlib/zstream":14}],4:[function(t,e){function n(t,e,n,i){for(var r=65535&t|0,o=t>>>16&65535|0,s=0;0!==n;){s=n>2e3?2e3:n,n-=s;
do r=r+e[i++]|0,o=o+r|0;while(--s);r%=65521,o%=65521}return r|o<<16|0}e.exports=n
},{}],5:[function(t,e){e.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}
},{}],6:[function(t,e){function n(){for(var t,e=[],n=0;256>n;n++){t=n;for(var i=0;8>i;i++)t=1&t?3988292384^t>>>1:t>>>1;
e[n]=t}return e}function i(t,e,n,i){var o=r,s=i+n;t=-1^t;for(var a=i;s>a;a++)t=t>>>8^o[255&(t^e[a])];
return-1^t}var r=n();e.exports=i},{}],7:[function(t,e,n){function i(t,e){return t.msg=A[e],e
}function r(t){return(t<<1)-(t>4?9:0)}function o(t){for(var e=t.length;--e;)t[e]=0
}function s(t){var e=t.state,n=e.pending;n>t.avail_out&&(n=t.avail_out),0!==n&&(C.arraySet(t.next_out,e.pending_buf,e.pending_out,n,t.next_out_index),t.next_out_index+=n,e.pending_out+=n,t.total_out+=n,t.avail_out-=n,e.pending-=n,0===e.pending&&(e.pending_out=0))
}function a(t,e){O._tr_flush_block(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,s(t.strm)
}function u(t,e){t.pending_buf[t.pending++]=e}function c(t,e){t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e
}function l(t,e,n,i){var r=t.avail_in;return r>i&&(r=i),0===r?0:(t.avail_in-=r,C.arraySet(e,t.next_in,t.next_in_index,r,n),1===t.state.wrap?t.adler=M(t.adler,e,r,n):2===t.state.wrap&&(t.adler=R(t.adler,e,r,n)),t.next_in_index+=r,t.total_in+=r,r)
}function h(t,e){var n,i,r=t.max_chain_length,o=t.strstart,s=t.prev_length,a=t.nice_match,u=t.strstart>t.w_size-ue?t.strstart-(t.w_size-ue):0,c=t.window,l=t.w_mask,h=t.prev,d=t.strstart+ae,m=c[o+s-1],f=c[o+s];
t.prev_length>=t.good_match&&(r>>=2),a>t.lookahead&&(a=t.lookahead);do if(n=e,c[n+s]===f&&c[n+s-1]===m&&c[n]===c[o]&&c[++n]===c[o+1]){o+=2,n++;
do;while(c[++o]===c[++n]&&c[++o]===c[++n]&&c[++o]===c[++n]&&c[++o]===c[++n]&&c[++o]===c[++n]&&c[++o]===c[++n]&&c[++o]===c[++n]&&c[++o]===c[++n]&&d>o);
if(i=ae-(d-o),o=d-ae,i>s){if(t.match_start=e,s=i,i>=a)break;m=c[o+s-1],f=c[o+s]}}while((e=h[e&l])>u&&0!==--r);
return s<=t.lookahead?s:t.lookahead}function d(t){var e,n,i,r,o,s=t.w_size;do{if(r=t.window_size-t.lookahead-t.strstart,t.strstart>=s+(s-ue)){C.arraySet(t.window,t.window,s,s,0),t.match_start-=s,t.strstart-=s,t.block_start-=s,n=t.hash_size,e=n;
do i=t.head[--e],t.head[e]=i>=s?i-s:0;while(--n);n=s,e=n;do i=t.prev[--e],t.prev[e]=i>=s?i-s:0;
while(--n);r+=s}if(0===t.strm.avail_in)break;if(n=l(t.strm,t.window,t.strstart+t.lookahead,r),t.lookahead+=n,t.lookahead+t.insert>=se)for(o=t.strstart-t.insert,t.ins_h=t.window[o],t.ins_h=(t.ins_h<<t.hash_shift^t.window[o+1])&t.hash_mask;t.insert&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[o+se-1])&t.hash_mask,t.prev[o&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=o,o++,t.insert--,!(t.lookahead+t.insert<se)););}while(t.lookahead<ue&&0!==t.strm.avail_in)
}function m(t,e){var n=65535;for(n>t.pending_buf_size-5&&(n=t.pending_buf_size-5);;){if(t.lookahead<=1){if(d(t),0===t.lookahead&&e===T)return pe;
if(0===t.lookahead)break}t.strstart+=t.lookahead,t.lookahead=0;var i=t.block_start+n;
if((0===t.strstart||t.strstart>=i)&&(t.lookahead=t.strstart-i,t.strstart=i,a(t,!1),0===t.strm.avail_out))return pe;
if(t.strstart-t.block_start>=t.w_size-ue&&(a(t,!1),0===t.strm.avail_out))return pe
}return t.insert=0,e===B?(a(t,!0),0===t.strm.avail_out?ve:ye):t.strstart>t.block_start&&(a(t,!1),0===t.strm.avail_out)?pe:pe
}function f(t,e){for(var n,i;;){if(t.lookahead<ue){if(d(t),t.lookahead<ue&&e===T)return pe;
if(0===t.lookahead)break}if(n=0,t.lookahead>=se&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+se-1])&t.hash_mask,n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==n&&t.strstart-n<=t.w_size-ue&&(t.match_length=h(t,n)),t.match_length>=se)if(i=O._tr_tally(t,t.strstart-t.match_start,t.match_length-se),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=se){t.match_length--;
do t.strstart++,t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+se-1])&t.hash_mask,n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart;
while(0!==--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+1])&t.hash_mask;
else i=O._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(i&&(a(t,!1),0===t.strm.avail_out))return pe
}return t.insert=t.strstart<se-1?t.strstart:se-1,e===B?(a(t,!0),0===t.strm.avail_out?ve:ye):t.last_lit&&(a(t,!1),0===t.strm.avail_out)?pe:_e
}function b(t,e){for(var n,i,r;;){if(t.lookahead<ue){if(d(t),t.lookahead<ue&&e===T)return pe;
if(0===t.lookahead)break}if(n=0,t.lookahead>=se&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+se-1])&t.hash_mask,n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=se-1,0!==n&&t.prev_length<t.max_lazy_match&&t.strstart-n<=t.w_size-ue&&(t.match_length=h(t,n),t.match_length<=5&&(t.strategy===H||t.match_length===se&&t.strstart-t.match_start>4096)&&(t.match_length=se-1)),t.prev_length>=se&&t.match_length<=t.prev_length){r=t.strstart+t.lookahead-se,i=O._tr_tally(t,t.strstart-1-t.prev_match,t.prev_length-se),t.lookahead-=t.prev_length-1,t.prev_length-=2;
do++t.strstart<=r&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+se-1])&t.hash_mask,n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart);
while(0!==--t.prev_length);if(t.match_available=0,t.match_length=se-1,t.strstart++,i&&(a(t,!1),0===t.strm.avail_out))return pe
}else if(t.match_available){if(i=O._tr_tally(t,0,t.window[t.strstart-1]),i&&a(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return pe
}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(i=O._tr_tally(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<se-1?t.strstart:se-1,e===B?(a(t,!0),0===t.strm.avail_out?ve:ye):t.last_lit&&(a(t,!1),0===t.strm.avail_out)?pe:_e
}function g(t,e){for(var n,i,r,o,s=t.window;;){if(t.lookahead<=ae){if(d(t),t.lookahead<=ae&&e===T)return pe;
if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=se&&t.strstart>0&&(r=t.strstart-1,i=s[r],i===s[++r]&&i===s[++r]&&i===s[++r])){o=t.strstart+ae;
do;while(i===s[++r]&&i===s[++r]&&i===s[++r]&&i===s[++r]&&i===s[++r]&&i===s[++r]&&i===s[++r]&&i===s[++r]&&o>r);
t.match_length=ae-(o-r),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=se?(n=O._tr_tally(t,1,t.match_length-se),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(n=O._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),n&&(a(t,!1),0===t.strm.avail_out))return pe
}return t.insert=0,e===B?(a(t,!0),0===t.strm.avail_out?ve:ye):t.last_lit&&(a(t,!1),0===t.strm.avail_out)?pe:_e
}function p(t,e){for(var n;;){if(0===t.lookahead&&(d(t),0===t.lookahead)){if(e===T)return pe;
break}if(t.match_length=0,n=O._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,n&&(a(t,!1),0===t.strm.avail_out))return pe
}return t.insert=0,e===B?(a(t,!0),0===t.strm.avail_out?ve:ye):t.last_lit&&(a(t,!1),0===t.strm.avail_out)?pe:_e
}function _(t){t.window_size=2*t.w_size,o(t.head),t.max_lazy_match=j[t.level].max_lazy,t.good_match=j[t.level].good_length,t.nice_match=j[t.level].nice_length,t.max_chain_length=j[t.level].max_chain,t.strstart=0,t.block_start=0,t.lookahead=0,t.insert=0,t.match_length=t.prev_length=se-1,t.match_available=0,t.ins_h=0
}function v(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=Z,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new C.Buf16(2*re),this.dyn_dtree=new C.Buf16(2*(2*ne+1)),this.bl_tree=new C.Buf16(2*(2*ie+1)),o(this.dyn_ltree),o(this.dyn_dtree),o(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new C.Buf16(oe+1),this.heap=new C.Buf16(2*ee+1),o(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new C.Buf16(2*ee+1),o(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0,this.high_water=0
}function y(t){var e;return t&&t.state?(t.total_in=t.total_out=0,t.data_type=K,e=t.state,e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?le:be,t.adler=2===e.wrap?0:1,e.last_flush=T,O._tr_init(e),P):i(t,F)
}function w(t){var e=y(t);return e===P&&_(t.state),e}function x(t,e,n,r,o,s){if(!t)return i(t,F);
var a=1;if(e===$&&(e=6),0>r?(a=0,r=-r):r>15&&(a=2,r-=16),1>o||o>X||n!==Z||8>r||r>15||0>e||e>9||0>s||s>G)return i(t,F);
8===r&&(r=9);var u=new v;return t.state=u,u.strm=t,u.wrap=a,u.gzhead=null,u.w_bits=r,u.w_size=1<<u.w_bits,u.w_mask=u.w_size-1,u.hash_bits=o+7,u.hash_size=1<<u.hash_bits,u.hash_mask=u.hash_size-1,u.hash_shift=~~((u.hash_bits+se-1)/se),u.window=new C.Buf8(2*u.w_size),u.head=new C.Buf16(u.hash_size),u.prev=new C.Buf16(u.w_size),u.high_water=0,u.lit_bufsize=1<<o+6,u.pending_buf_size=4*u.lit_bufsize,u.pending_buf=new C.Buf8(u.pending_buf_size),u.d_buf=u.lit_bufsize>>1,u.l_buf=3*u.lit_bufsize,u.level=e,u.strategy=s,u.method=n,w(t)
}function S(t,e){return x(t,e,Z,Y,Q,q)}function E(t,e){var n,a;if(!t||!t.state||e>D||0>e)return i(t,F);
if(a=t.state,!t.next_out||!t.next_in&&0!==t.avail_in||a.status===ge&&e!==B)return i(t,0===t.avail_out?N:F);
if(a.strm=t,n=a.last_flush,a.last_flush=e,a.status===le)if(2===a.wrap){if(t.adler=0,u(a,31),u(a,139),u(a,8),a.gzhead)throw new Error("Custom GZIP headers not supported");
u(a,0),u(a,0),u(a,0),u(a,0),u(a,0),u(a,9===a.level?2:a.strategy>=U||a.level<2?4:0),u(a,we),a.status=be
}else{var l=Z+(a.w_bits-8<<4)<<8,h=-1;h=a.strategy>=U||a.level<2?0:a.level<6?1:6===a.level?2:3,l|=h<<6,0!==a.strstart&&(l|=ce),l+=31-l%31,a.status=be,c(a,l),0!==a.strstart&&(c(a,t.adler>>>16),c(a,65535&t.adler)),t.adler=1
}if(0!==a.pending){if(s(t),0===t.avail_out)return a.last_flush=-1,P}else if(0===t.avail_in&&r(e)<=r(n)&&e!==B)return i(t,N);
if(a.status===ge&&0!==t.avail_in)return i(t,N);if(0!==t.avail_in||0!==a.lookahead||e!==T&&a.status!==ge){var d=a.strategy===U?p(a,e):a.strategy===V?g(a,e):j[a.level].func(a,e);
if((d===ve||d===ye)&&(a.status=ge),d===pe||d===ve)return 0===t.avail_out&&(a.last_flush=-1),P;
if(d===_e&&(e===L?O._tr_align(a):e!==D&&(O._tr_stored_block(a,0,0,!1),e===I&&(o(a.head),0===a.lookahead&&(a.strstart=0,a.block_start=0,a.insert=0))),s(t),0===t.avail_out))return a.last_flush=-1,P
}return e!==B?P:a.wrap<=0?z:(2===a.wrap?(u(a,255&t.adler),u(a,t.adler>>8&255),u(a,t.adler>>16&255),u(a,t.adler>>24&255),u(a,255&t.total_in),u(a,t.total_in>>8&255),u(a,t.total_in>>16&255),u(a,t.total_in>>24&255)):(c(a,t.adler>>>16),c(a,65535&t.adler)),s(t),a.wrap>0&&(a.wrap=-a.wrap),0!==a.pending?P:z)
}function k(t){var e=t.state.status;return e!==le&&e!==he&&e!==de&&e!==me&&e!==fe&&e!==be&&e!==ge?i(t,F):(t.state=null,e===be?i(t,W):P)
}var j,C=t("./utils"),O=t("./trees"),M=t("./adler32"),R=t("./crc32"),A=t("./messages"),T=0,L=1,I=3,B=4,D=5,P=0,z=1,F=-2,W=-3,N=-5,$=-1,H=1,U=2,V=3,G=4,q=0,K=2,Z=8,X=9,Y=15,Q=8,J=29,te=256,ee=te+1+J,ne=30,ie=19,re=2*ee+1,oe=15,se=3,ae=258,ue=ae+se+1,ce=32,le=42,he=69,de=73,me=91,fe=103,be=113,ge=666,pe=1,_e=2,ve=3,ye=4,we=3,xe=function(t,e,n,i,r){this.good_length=t,this.max_lazy=e,this.nice_length=n,this.max_chain=i,this.func=r
};j=[new xe(0,0,0,0,m),new xe(4,4,8,4,f),new xe(4,5,16,8,f),new xe(4,6,32,32,f),new xe(4,4,16,16,b),new xe(8,16,32,32,b),new xe(8,16,128,128,b),new xe(8,32,128,256,b),new xe(32,128,258,1024,b),new xe(32,258,258,4096,b)],n.deflateInit=S,n.deflateInit2=x,n.deflateReset=w,n.deflate=E,n.deflateEnd=k,n.deflateInfo="pako deflate (from Nodeca project)"
},{"./adler32":4,"./crc32":6,"./messages":11,"./trees":12,"./utils":13}],8:[function(t,e){var n=30,i=12;
e.exports=function(t,e){var r,o,s,a,u,c,l,h,d,m,f,b,g,p,_,v,y,w,x,S,E,k,j,C,O;r=t.state,o=t.next_in_index,C=t.next_in,s=o+(t.avail_in-5),a=t.next_out_index,O=t.next_out,u=a-(e-t.avail_out),c=a+(t.avail_out-257),l=r.dmax,h=r.wsize,d=r.whave,m=r.wnext,f=r.window,b=r.hold,g=r.bits,p=r.lencode,_=r.distcode,v=(1<<r.lenbits)-1,y=(1<<r.distbits)-1;
t:do{15>g&&(b+=C[o++]<<g,g+=8,b+=C[o++]<<g,g+=8),w=p[b&v];e:for(;;){if(x=w>>>24,b>>>=x,g-=x,x=w>>>16&255,0===x)O[a++]=65535&w;
else{if(!(16&x)){if(0===(64&x)){w=p[(65535&w)+(b&(1<<x)-1)];continue e}if(32&x){r.mode=i;
break t}t.msg="invalid literal/length code",r.mode=n;break t}S=65535&w,x&=15,x&&(x>g&&(b+=C[o++]<<g,g+=8),S+=b&(1<<x)-1,b>>>=x,g-=x),15>g&&(b+=C[o++]<<g,g+=8,b+=C[o++]<<g,g+=8),w=_[b&y];
n:for(;;){if(x=w>>>24,b>>>=x,g-=x,x=w>>>16&255,!(16&x)){if(0===(64&x)){w=_[(65535&w)+(b&(1<<x)-1)];
continue n}t.msg="invalid distance code",r.mode=n;break t}if(E=65535&w,x&=15,x>g&&(b+=C[o++]<<g,g+=8,x>g&&(b+=C[o++]<<g,g+=8)),E+=b&(1<<x)-1,E>l){t.msg="invalid distance too far back",r.mode=n;
break t}if(b>>>=x,g-=x,x=a-u,E>x){if(x=E-x,x>d&&r.sane){t.msg="invalid distance too far back",r.mode=n;
break t}if(k=0,j=f,0===m){if(k+=h-x,S>x){S-=x;do O[a++]=f[k++];while(--x);k=a-E,j=O
}}else if(x>m){if(k+=h+m-x,x-=m,S>x){S-=x;do O[a++]=f[k++];while(--x);if(k=0,S>m){x=m,S-=x;
do O[a++]=f[k++];while(--x);k=a-E,j=O}}}else if(k+=m-x,S>x){S-=x;do O[a++]=f[k++];
while(--x);k=a-E,j=O}for(;S>2;)O[a++]=j[k++],O[a++]=j[k++],O[a++]=j[k++],S-=3;S&&(O[a++]=j[k++],S>1&&(O[a++]=j[k++]))
}else{k=a-E;do O[a++]=O[k++],O[a++]=O[k++],O[a++]=O[k++],S-=3;while(S>2);S&&(O[a++]=O[k++],S>1&&(O[a++]=O[k++]))
}break}}break}}while(s>o&&c>a);S=g>>3,o-=S,g-=S<<3,b&=(1<<g)-1,t.next_in_index=o,t.next_out_index=a,t.avail_in=s>o?5+(s-o):5-(o-s),t.avail_out=c>a?257+(c-a):257-(a-c),r.hold=b,r.bits=g
}},{}],9:[function(t,e,n){function i(t){return(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24)
}function r(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.next_index=0,this.lens=new _.Buf16(320),this.work=new _.Buf16(288),this.codes=new _.Buf32(pe),this.sane=0,this.back=0,this.was=0
}function o(t,e,n,i,r,o,s,a){this.type=t,this.lens=e,this.lens_index=n,this.codes=i,this.table=r,this.table_index=o,this.bits=s,this.work=a
}function s(t){var e;return t&&t.state?(e=t.state,t.total_in=t.total_out=e.total=0,e.wrap&&(t.adler=1&e.wrap),e.mode=P,e.last=0,e.havedict=0,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=new _.Buf32(pe),e.distcode=new _.Buf32(pe),e.sane=1,e.back=-1,M):T
}function a(t){var e;return t&&t.state?(e=t.state,e.wsize=0,e.whave=0,e.wnext=0,s(t)):T
}function u(t,e){var n,i;return t&&t.state?(i=t.state,0>e?(n=0,e=-e):(n=(e>>4)+1,48>e&&(e&=15)),e&&(8>e||e>15)?T:(null!==i.window&&i.wbits!==e&&(i.window=null),i.wrap=n,i.wbits=e,a(t))):T
}function c(t,e){var n,i;return t?(i=new r,t.state=i,i.window=null,n=u(t,e),n!==M&&(t.state=null),n):T
}function l(t){return c(t,ve)}function h(t,e,n){var i;return t&&t.state?(i=t.state,0>e?(i.hold=0,i.bits=0,M):e>16||i.bits+e>32?T:(n&=(1<<e)-1,i.hold+=n<<i.bits,i.bits+=e,M)):T
}function d(t){if(ye){var e,n;for(g=new _.Buf32(512),p=new _.Buf32(32),e=0;144>e;)t.lens[e++]=8;
for(;256>e;)t.lens[e++]=9;for(;280>e;)t.lens[e++]=7;for(;288>e;)t.lens[e++]=8;for(n=9,x(new o(E,t.lens,0,288,g,0,n,t.work)),e=0;32>e;)t.lens[e++]=5;
n=5,x(new o(k,t.lens,0,32,p,0,n,t.work)),ye=!1}t.lencode=g,t.lenbits=9,t.distcode=p,t.distbits=5
}function m(t,e,n,i){var r,o=t.state;return null===o.window&&(o.wsize=1<<o.wbits,o.wnext=0,o.whave=0,o.window=new _.Buf8(o.wsize)),i>=o.wsize?(_.arraySet(o.window,e,n-o.wsize,o.wsize,0),o.wnext=0,o.whave=o.wsize):(r=o.wsize-o.wnext,r>i&&(r=i),_.arraySet(o.window,e,n-i,r,o.wnext),i-=r,i?(_.arraySet(o.window,e,n-i,i,0),o.wnext=i,o.whave=o.wsize):(o.wnext+=r,o.wnext===o.wsize&&(o.wnext=0),o.whave<o.wsize&&(o.whave+=r))),0
}function f(t,e){var n,r,s,a,u,c,l,h,f,b,g,p,be,ge,pe,_e,ve,ye,we,xe,Se,Ee,ke,je,Ce=0,Oe=new _.Buf8(4),Me=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];
n=t.state,n.mode===K&&(n.mode=Z),u=t.next_out_index,s=t.next_out,l=t.avail_out,a=t.next_in_index,r=t.next_in,c=t.avail_in,h=n.hold,f=n.bits,b=c,g=l,Ee=M;
t:for(;;)switch(n.mode){case P:if(0===n.wrap){n.mode=Z;break}for(;16>f;){if(0===c)break t;
c--,h+=r[a++]<<f,f+=8}if(2&n.wrap&&35615===h){n.check=0,Oe[0]=255&h,Oe[1]=h>>>8&255,n.check=y(n.check,Oe,2,0),h=0,f=0,n.mode=z;
break}if(n.flags=0,n.head&&(n.head.done=-1),!(1&n.wrap)||(((255&h)<<8)+(h>>8))%31){t.msg="incorrect header check",n.mode=de;
break}if((15&h)!==D){t.msg="unknown compression method",n.mode=de;break}if(h>>>=4,f-=4,Se=(15&h)+8,0===n.wbits)n.wbits=Se;
else if(Se>n.wbits){t.msg="invalid window size",n.mode=de;break}n.dmax=1<<Se,t.adler=n.check=1,n.mode=512&h?G:K,h=0,f=0;
break;case z:for(;16>f;){if(0===c)break t;c--,h+=r[a++]<<f,f+=8}if(n.flags=h,(255&n.flags)!==D){t.msg="unknown compression method",n.mode=de;
break}if(57344&n.flags){t.msg="unknown header flags set",n.mode=de;break}n.head&&(n.head.text=h>>8&1),512&n.flags&&(Oe[0]=255&h,Oe[1]=h>>>8&255,n.check=y(n.check,Oe,2,0)),h=0,f=0,n.mode=F;
case F:for(;32>f;){if(0===c)break t;c--,h+=r[a++]<<f,f+=8}n.head&&(n.head.time=h),512&n.flags&&(Oe[0]=255&h,Oe[1]=h>>>8&255,Oe[2]=h>>>16&255,Oe[3]=h>>>24&255,n.check=y(n.check,Oe,4,0)),h=0,f=0,n.mode=W;
case W:for(;16>f;){if(0===c)break t;c--,h+=r[a++]<<f,f+=8}n.head&&(n.head.xflags=255&h,n.head.os=h>>8),512&n.flags&&(Oe[0]=255&h,Oe[1]=h>>>8&255,n.check=y(n.check,Oe,2,0)),h=0,f=0,n.mode=N;
case N:if(1024&n.flags){for(;16>f;){if(0===c)break t;c--,h+=r[a++]<<f,f+=8}n.length=h,n.head&&(n.head.extra_len=h),512&n.flags&&(Oe[0]=255&h,Oe[1]=h>>>8&255,n.check=y(n.check,Oe,2,0)),h=0,f=0
}else n.head&&(n.head.extra=null);n.mode=$;case $:if(1024&n.flags){if(p=n.length,p>c&&(p=c),p){if(n.head&&n.head.extra)throw Se=n.head.extra_len-n.length,"Review & implement right";
512&n.flags&&(n.check=y(n.check,r,p,a)),c-=p,a+=p,n.length-=p}if(n.length)break t
}n.length=0,n.mode=H;case H:if(2048&n.flags){if(0===c)break t;p=0;do Se=r[a+p++],n.head&&n.head.name&&n.length<n.head.name_max&&(n.head.name[n.length++]=Se);
while(Se&&c>p);if(512&n.flags&&(n.check=y(n.check,r,p,a)),c-=p,a+=p,Se)break t}else n.head&&(n.head.name=null);
n.length=0,n.mode=U;case U:if(4096&n.flags){if(0===c)break t;p=0;do Se=r[a+p++],n.head&&n.head.comment&&n.length<n.head.comm_max&&(n.head.comment[n.length++]=Se);
while(Se&&c>p);if(512&n.flags&&(n.check=y(n.check,r,p,a)),c-=p,a+=p,Se)break t}else n.head&&(n.head.comment=null);
n.mode=V;case V:if(512&n.flags){for(;16>f;){if(0===c)break t;c--,h+=r[a++]<<f,f+=8
}if(h!==(65535&n.check)){t.msg="header crc mismatch",n.mode=de;break}h=0,f=0}n.head&&(n.head.hcrc=n.flags>>9&1,n.head.done=1),t.adler=n.check=0,n.mode=K;
break;case G:for(;32>f;){if(0===c)break t;c--,h+=r[a++]<<f,f+=8}t.adler=n.check=i(h),h=0,f=0,n.mode=q;
case q:if(0===n.havedict)return t.next_out_index=u,t.avail_out=l,t.next_in_index=a,t.avail_in=c,n.hold=h,n.bits=f,A;
t.adler=n.check=1,n.mode=K;case K:if(e===C||e===O)break t;case Z:if(n.last){h>>>=7&f,f-=7&f,n.mode=ce;
break}for(;3>f;){if(0===c)break t;c--,h+=r[a++]<<f,f+=8}switch(n.last=1&h,h>>>=1,f-=1,3&h){case 0:n.mode=X;
break;case 1:if(d(n),n.mode=ne,e===O){h>>>=2,f-=2;break t}break;case 2:n.mode=J;break;
case 3:t.msg="invalid block type",n.mode=de}h>>>=2,f-=2;break;case X:for(h>>>=7&f,f-=7&f;32>f;){if(0===c)break t;
c--,h+=r[a++]<<f,f+=8}if((65535&h)!==(h>>>16^65535)){t.msg="invalid stored block lengths",n.mode=de;
break}if(n.length=65535&h,h=0,f=0,n.mode=Y,e===O)break t;case Y:n.mode=Q;case Q:if(p=n.length){if(p>c&&(p=c),p>l&&(p=l),0===p)break t;
_.arraySet(s,r,a,p,u),c-=p,a+=p,l-=p,u+=p,n.length-=p;break}n.mode=K;break;case J:for(;14>f;){if(0===c)break t;
c--,h+=r[a++]<<f,f+=8}if(n.nlen=(31&h)+257,h>>>=5,f-=5,n.ndist=(31&h)+1,h>>>=5,f-=5,n.ncode=(15&h)+4,h>>>=4,f-=4,n.nlen>286||n.ndist>30){t.msg="too many length or distance symbols",n.mode=de;
break}n.have=0,n.mode=te;case te:for(;n.have<n.ncode;){for(;3>f;){if(0===c)break t;
c--,h+=r[a++]<<f,f+=8}n.lens[Me[n.have++]]=7&h,h>>>=3,f-=3}for(;n.have<19;)n.lens[Me[n.have++]]=0;
if(_.arraySet(n.lencode,n.codes,0,n.codes.length,0),n.lenbits=7,ke=new o(S,n.lens,0,19,n.lencode,0,n.lenbits,n.work),Ee=x(ke),n.lenbits=ke.bits,Ee){t.msg="invalid code lengths set",n.mode=de;
break}n.have=0,n.mode=ee;case ee:for(;n.have<n.nlen+n.ndist;){for(;Ce=n.lencode[h&(1<<n.lenbits)-1],pe=Ce>>>24,_e=Ce>>>16&255,ve=65535&Ce,!(f>=pe);){if(0===c)break t;
c--,h+=r[a++]<<f,f+=8}if(16>ve)h>>>=pe,f-=pe,n.lens[n.have++]=ve;else{if(16===ve){for(je=pe+2;je>f;){if(0===c)break t;
c--,h+=r[a++]<<f,f+=8}if(h>>>=pe,f-=pe,0===n.have){t.msg="invalid bit length repeat",n.mode=de;
break}Se=n.lens[n.have-1],p=3+(3&h),h>>>=2,f-=2}else if(17===ve){for(je=pe+3;je>f;){if(0===c)break t;
c--,h+=r[a++]<<f,f+=8}h>>>=pe,f-=pe,Se=0,p=3+(7&h),h>>>=3,f-=3}else{for(je=pe+7;je>f;){if(0===c)break t;
c--,h+=r[a++]<<f,f+=8}h>>>=pe,f-=pe,Se=0,p=11+(127&h),h>>>=7,f-=7}if(n.have+p>n.nlen+n.ndist){t.msg="invalid bit length repeat",n.mode=de;
break}for(;p--;)n.lens[n.have++]=Se}}if(n.mode===de)break;if(0===n.lens[256]){t.msg="invalid code -- missing end-of-block",n.mode=de;
break}if(_.arraySet(n.lencode,n.codes,0,n.codes.length,0),n.lenbits=9,ke=new o(E,n.lens,0,n.nlen,n.lencode,0,n.lenbits,n.work),Ee=x(ke),n.lenbits=ke.bits,Ee){t.msg="invalid literal/lengths set",n.mode=de;
break}if(n.distbits=6,_.arraySet(n.distcode,n.codes,0,n.codes.length,0),ke=new o(k,n.lens,n.nlen,n.ndist,n.distcode,0,n.distbits,n.work),Ee=x(ke),n.distbits=ke.bits,Ee){t.msg="invalid distances set",n.mode=de;
break}if(n.mode=ne,e===O)break t;case ne:n.mode=ie;case ie:if(c>=6&&l>=258){t.next_out_index=u,t.avail_out=l,t.next_in_index=a,t.avail_in=c,n.hold=h,n.bits=f,w(t,g),u=t.next_out_index,s=t.next_out,l=t.avail_out,a=t.next_in_index,r=t.next_in,c=t.avail_in,h=n.hold,f=n.bits,n.mode===K&&(n.back=-1);
break}for(n.back=0;Ce=n.lencode[h&(1<<n.lenbits)-1],pe=Ce>>>24,_e=Ce>>>16&255,ve=65535&Ce,!(f>=pe);){if(0===c)break t;
c--,h+=r[a++]<<f,f+=8}if(_e&&0===(240&_e)){for(ye=pe,we=_e,xe=ve;Ce=n.lencode[xe+((h&(1<<ye+we)-1)>>ye)],pe=Ce>>>24,_e=Ce>>>16&255,ve=65535&Ce,!(f>=ye+pe);){if(0===c)break t;
c--,h+=r[a++]<<f,f+=8}h>>>=ye,f-=ye,n.back+=ye}if(h>>>=pe,f-=pe,n.back+=pe,n.length=ve,0===_e){n.mode=ue;
break}if(32&_e){n.back=-1,n.mode=K;break}if(64&_e){t.msg="invalid literal/length code",n.mode=de;
break}n.extra=15&_e,n.mode=re;case re:if(n.extra){for(je=n.extra;je>f;){if(0===c)break t;
c--,h+=r[a++]<<f,f+=8}n.length+=h&(1<<n.extra)-1,h>>>=n.extra,f-=n.extra,n.back+=n.extra
}n.was=n.length,n.mode=oe;case oe:for(;Ce=n.distcode[h&(1<<n.distbits)-1],pe=Ce>>>24,_e=Ce>>>16&255,ve=65535&Ce,!(f>=pe);){if(0===c)break t;
c--,h+=r[a++]<<f,f+=8}if(0===(240&_e)){for(ye=pe,we=_e,xe=ve;Ce=n.distcode[xe+((h&(1<<ye+we)-1)>>ye)],pe=Ce>>>24,_e=Ce>>>16&255,ve=65535&Ce,!(f>=ye+pe);){if(0===c)break t;
c--,h+=r[a++]<<f,f+=8}h>>>=ye,f-=ye,n.back+=ye}if(h>>>=pe,f-=pe,n.back+=pe,64&_e){t.msg="invalid distance code",n.mode=de;
break}n.offset=ve,n.extra=15&_e,n.mode=se;case se:if(n.extra){for(je=n.extra;je>f;){if(0===c)break t;
c--,h+=r[a++]<<f,f+=8}n.offset+=h&(1<<n.extra)-1,h>>>=n.extra,f-=n.extra,n.back+=n.extra
}if(n.offset>n.dmax){t.msg="invalid distance too far back",n.mode=de;break}n.mode=ae;
case ae:if(0===l)break t;if(p=g-l,n.offset>p){if(p=n.offset-p,p>n.whave&&n.sane){t.msg="invalid distance too far back",n.mode=de;
break}p>n.wnext?(p-=n.wnext,be=n.wsize-p):be=n.wnext-p,p>n.length&&(p=n.length),ge=n.window
}else ge=s,be=u-n.offset,p=n.length;p>l&&(p=l),l-=p,n.length-=p;do s[u++]=ge[be++];
while(--p);0===n.length&&(n.mode=ie);break;case ue:if(0===l)break t;s[u++]=n.length,l--,n.mode=ie;
break;case ce:if(n.wrap){for(;32>f;){if(0===c)break t;c--,h|=r[a++]<<f,f+=8}if(g-=l,t.total_out+=g,n.total+=g,g&&(t.adler=n.check=n.flags?y(n.check,s,g,u-g):v(n.check,s,g,u-g)),g=l,(n.flags?h:i(h))!==n.check){t.msg="incorrect data check",n.mode=de;
break}h=0,f=0}n.mode=le;case le:if(n.wrap&&n.flags){for(;32>f;){if(0===c)break t;
c--,h+=r[a++]<<f,f+=8}if(h!==(4294967295&n.total)){t.msg="incorrect length check",n.mode=de;
break}h=0,f=0}n.mode=he;case he:Ee=R;break t;case de:Ee=L;break t;case me:return I;
case fe:default:return T}return t.next_out_index=u,t.avail_out=l,t.next_in_index=a,t.avail_in=c,n.hold=h,n.bits=f,(n.wsize||g!==t.avail_out&&n.mode<de&&(n.mode<ce||e!==j))&&m(t,t.next_out,t.next_out_index,g-t.avail_out)?(n.mode=me,I):(b-=t.avail_in,g-=t.avail_out,t.total_in+=b,t.total_out+=g,n.total+=g,n.wrap&&g&&(t.adler=n.check=n.flags?y(n.check,s,g,t.next_out_index-g):v(n.check,s,g,t.next_out_index-g)),t.data_type=n.bits+(n.last?64:0)+(n.mode===K?128:0)+(n.mode===ne||n.mode===Y?256:0),(0===b&&0===g||e===j)&&Ee===M&&(Ee=B),Ee)
}function b(t){var e=t.state;return e.window&&(e.window=null),t.state=null,M}var g,p,_=t("./utils"),v=t("./adler32"),y=t("./crc32"),w=t("./inffast"),x=t("./inftrees"),S=0,E=1,k=2,j=4,C=5,O=6,M=0,R=1,A=2,T=-2,L=-3,I=-4,B=-5,D=8,P=1,z=2,F=3,W=4,N=5,$=6,H=7,U=8,V=9,G=10,q=11,K=12,Z=13,X=14,Y=15,Q=16,J=17,te=18,ee=19,ne=20,ie=21,re=22,oe=23,se=24,ae=25,ue=26,ce=27,le=28,he=29,de=30,me=31,fe=32,be=852,ge=592,pe=be+ge,_e=15,ve=_e,ye=!0;
n.inflateReset=a,n.inflateReset2=u,n.inflateResetKeep=s,n.inflateInit=l,n.inflateInit2=c,n.inflatePrime=h,n.inflate=f,n.inflateEnd=b,n.inflateInfo="pako inflate (from Nodeca project)"
},{"./adler32":4,"./crc32":6,"./inffast":8,"./inftrees":10,"./utils":13}],10:[function(t,e){var n=t("./utils"),i=15,r=852,o=592,s=0,a=1,u=2,c=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],l=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],h=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],d=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];
e.exports=function(t){var e,m,f,b,g,p,_,v,y,w=t.type,x=t.lens,S=t.codes,E=t.table,k=t.bits,j=t.work,C=0,O=0,M=0,R=0,A=0,T=0,L=0,I=0,B=0,D=0,P=null,z=0,F=new n.Buf16(i+1),W=new n.Buf16(i+1),N=null,$=0;
for(C=0;i>=C;C++)F[C]=0;for(O=0;S>O;O++)F[x[t.lens_index+O]]++;for(A=k,R=i;R>=1&&0===F[R];R--);if(A>R&&(A=R),0===R)return E[t.table_index++]=20971520,E[t.table_index++]=20971520,t.bits=1,0;
for(M=1;R>M&&0===F[M];M++);for(M>A&&(A=M),I=1,C=1;i>=C;C++)if(I<<=1,I-=F[C],0>I)return-1;
if(I>0&&(w===s||1!==R))return-1;for(W[1]=0,C=1;i>C;C++)W[C+1]=W[C]+F[C];for(O=0;S>O;O++)0!==x[t.lens_index+O]&&(j[W[x[t.lens_index+O]]++]=O);
switch(w){case s:P=N=j,p=19;break;case a:P=c,z-=257,N=l,$-=257,p=256;break;default:P=h,N=d,p=-1
}if(D=0,O=0,C=M,g=t.table_index,T=A,L=0,f=-1,B=1<<A,b=B-1,w===a&&B>r||w===u&&B>o)return 1;
for(var H=0;;){H++,_=C-L,j[O]<p?(v=0,y=j[O]):j[O]>p?(v=N[$+j[O]],y=P[z+j[O]]):(v=96,y=0),e=1<<C-L,m=1<<T,M=m;
do m-=e,E[g+(D>>L)+m]=_<<24|v<<16|y|0;while(0!==m);for(e=1<<C-1;D&e;)e>>=1;if(0!==e?(D&=e-1,D+=e):D=0,O++,0===--F[C]){if(C===R)break;
C=x[t.lens_index+j[O]]}if(C>A&&(D&b)!==f){for(0===L&&(L=A),g+=M,T=C-L,I=1<<T;R>T+L&&(I-=F[T+L],!(0>=I));)T++,I<<=1;
if(B+=1<<T,w===a&&B>r||w===u&&B>o)return 1;f=D&b,E[f]=A<<24|T<<16|g-t.table_index
}}return 0!==D&&(E[g+D]=C-L<<24|64<<16|0),t.table_index+=B,t.bits=A,0}},{"./utils":13}],11:[function(t,e){e.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}
},{}],12:[function(t,e,n){function i(t){for(var e=t.length;--e;)t[e]=0}function r(t){return 256>t?se[t]:se[256+(t>>>7)]
}function o(t,e){t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255
}function s(t,e,n){t.bi_valid>q-n?(t.bi_buf|=e<<t.bi_valid&65535,o(t,t.bi_buf),t.bi_buf=e>>q-t.bi_valid,t.bi_valid+=n-q):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=n)
}function a(t,e,n){s(t,n[2*e],n[2*e+1])}function u(t,e){var n=0;do n|=1&t,t>>>=1,n<<=1;
while(--e>0);return n>>>1}function c(t){16===t.bi_valid?(o(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)
}function l(t,e){var n,i,r,o,s,a,u=e.dyn_tree,c=e.max_code,l=e.stat_desc.static_tree,h=e.stat_desc.has_stree,d=e.stat_desc.extra_bits,m=e.stat_desc.extra_base,f=e.stat_desc.max_length,b=0;
for(o=0;G>=o;o++)t.bl_count[o]=0;for(u[2*t.heap[t.heap_max]+1]=0,n=t.heap_max+1;V>n;n++)i=t.heap[n],o=u[2*u[2*i+1]+1]+1,o>f&&(o=f,b++),u[2*i+1]=o,i>c||(t.bl_count[o]++,s=0,i>=m&&(s=d[i-m]),a=u[2*i],t.opt_len+=a*(o+s),h&&(t.static_len+=a*(l[2*i+1]+s)));
if(0!==b){do{for(o=f-1;0===t.bl_count[o];)o--;t.bl_count[o]--,t.bl_count[o+1]+=2,t.bl_count[f]--,b-=2
}while(b>0);for(o=f;0!==o;o--)for(i=t.bl_count[o];0!==i;)r=t.heap[--n],r>c||(u[2*r+1]!==o&&(t.opt_len+=(o-u[2*r+1])*u[2*r],u[2*r+1]=o),i--)
}}function h(t,e,n){var i,r,o=new Array(G+1),s=0;for(i=1;G>=i;i++)o[i]=s=s+n[i-1]<<1;
for(r=0;e>=r;r++){var a=t[2*r+1];0!==a&&(t[2*r]=u(o[a]++,a))}}function d(){var t,e,n,i,r,o=new Array(G+1);
for(n=0,i=0;W-1>i;i++)for(ue[i]=n,t=0;t<1<<J[i];t++)ae[n++]=i;for(ae[n-1]=i,r=0,i=0;16>i;i++)for(ce[i]=r,t=0;t<1<<te[i];t++)se[r++]=i;
for(r>>=7;H>i;i++)for(ce[i]=r<<7,t=0;t<1<<te[i]-7;t++)se[256+r++]=i;for(e=0;G>=e;e++)o[e]=0;
for(t=0;143>=t;)re[2*t+1]=8,t++,o[8]++;for(;255>=t;)re[2*t+1]=9,t++,o[9]++;for(;279>=t;)re[2*t+1]=7,t++,o[7]++;
for(;287>=t;)re[2*t+1]=8,t++,o[8]++;for(h(re,$+1,o),t=0;H>t;t++)oe[2*t+1]=5,oe[2*t]=u(t,5);
le=new me(re,J,N+1,$,G),he=new me(oe,te,0,H,G),de=new me(new Array(0),ee,0,U,K)}function m(t){var e;
for(e=0;$>e;e++)t.dyn_ltree[2*e]=0;for(e=0;H>e;e++)t.dyn_dtree[2*e]=0;for(e=0;U>e;e++)t.bl_tree[2*e]=0;
t.dyn_ltree[2*Z]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0}function f(t){t.bi_valid>8?o(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0
}function b(t,e,n,i){f(t),i&&(o(t,n),o(t,~n)),R.arraySet(t.pending_buf,t.window,e,n,t.pending),t.pending+=n
}function g(t,e,n,i){var r=2*e,o=2*n;return t[r]<t[o]||t[r]===t[o]&&i[e]<=i[n]}function p(t,e,n){for(var i=t.heap[n],r=n<<1;r<=t.heap_len&&(r<t.heap_len&&g(e,t.heap[r+1],t.heap[r],t.depth)&&r++,!g(e,i,t.heap[r],t.depth));)t.heap[n]=t.heap[r],n=r,r<<=1;
t.heap[n]=i}function _(t,e,n){var i,o,u,c,l=0;if(0!==t.last_lit)do i=t.pending_buf[t.d_buf+2*l]<<8|t.pending_buf[t.d_buf+2*l+1],o=t.pending_buf[t.l_buf+l],l++,0===i?a(t,o,e):(u=ae[o],a(t,u+N+1,e),c=J[u],0!==c&&(o-=ue[u],s(t,o,c)),i--,u=r(i),a(t,u,n),c=te[u],0!==c&&(i-=ce[u],s(t,i,c)));
while(l<t.last_lit);a(t,Z,e)}function v(t,e){var n,i,r,o=e.dyn_tree,s=e.stat_desc.static_tree,a=e.stat_desc.has_stree,u=e.stat_desc.elems,c=-1;
for(t.heap_len=0,t.heap_max=V,n=0;u>n;n++)0!==o[2*n]?(t.heap[++t.heap_len]=c=n,t.depth[n]=0):o[2*n+1]=0;
for(;t.heap_len<2;)r=t.heap[++t.heap_len]=2>c?++c:0,o[2*r]=1,t.depth[r]=0,t.opt_len--,a&&(t.static_len-=s[2*r+1]);
for(e.max_code=c,n=t.heap_len>>1;n>=1;n--)p(t,o,n);r=u;do n=t.heap[1],t.heap[1]=t.heap[t.heap_len--],p(t,o,1),i=t.heap[1],t.heap[--t.heap_max]=n,t.heap[--t.heap_max]=i,o[2*r]=o[2*n]+o[2*i],t.depth[r]=(t.depth[n]>=t.depth[i]?t.depth[n]:t.depth[i])+1,o[2*n+1]=o[2*i+1]=r,t.heap[1]=r++,p(t,o,1);
while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],l(t,e),h(o,c,t.bl_count)}function y(t,e,n){var i,r,o=-1,s=e[1],a=0,u=7,c=4;
for(0===s&&(u=138,c=3),e[2*(n+1)+1]=65535,i=0;n>=i;i++)r=s,s=e[2*(i+1)+1],++a<u&&r===s||(c>a?t.bl_tree[2*r]+=a:0!==r?(r!==o&&t.bl_tree[2*r]++,t.bl_tree[2*X]++):10>=a?t.bl_tree[2*Y]++:t.bl_tree[2*Q]++,a=0,o=r,0===s?(u=138,c=3):r===s?(u=6,c=3):(u=7,c=4))
}function w(t,e,n){var i,r,o=-1,u=e[1],c=0,l=7,h=4;for(0===u&&(l=138,h=3),i=0;n>=i;i++)if(r=u,u=e[2*(i+1)+1],!(++c<l&&r===u)){if(h>c){do a(t,r,t.bl_tree);
while(0!==--c)}else 0!==r?(r!==o&&(a(t,r,t.bl_tree),c--),a(t,X,t.bl_tree),s(t,c-3,2)):10>=c?(a(t,Y,t.bl_tree),s(t,c-3,3)):(a(t,Q,t.bl_tree),s(t,c-11,7));
c=0,o=r,0===u?(l=138,h=3):r===u?(l=6,h=3):(l=7,h=4)}}function x(t){var e;for(y(t,t.dyn_ltree,t.l_desc.max_code),y(t,t.dyn_dtree,t.d_desc.max_code),v(t,t.bl_desc),e=U-1;e>=3&&0===t.bl_tree[2*ne[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e
}function S(t,e,n,i){var r;for(s(t,e-257,5),s(t,n-1,5),s(t,i-4,4),r=0;i>r;r++)s(t,t.bl_tree[2*ne[r]+1],3);
w(t,t.dyn_ltree,e-1),w(t,t.dyn_dtree,n-1)}function E(t){var e,n=4093624447;for(e=0;31>=e;e++,n>>>=1)if(1&n&&0!==t.dyn_ltree[2*e])return T;
if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return L;for(e=32;N>e;e++)if(0!==t.dyn_ltree[2*e])return L;
return T}function k(t){be||(d(),be=!0),t.l_desc=new fe(t.dyn_ltree,le),t.d_desc=new fe(t.dyn_dtree,he),t.bl_desc=new fe(t.bl_tree,de),t.bi_buf=0,t.bi_valid=0,m(t)
}function j(t,e,n,i){s(t,(B<<1)+(i?1:0),3),b(t,e,n,!0)}function C(t){s(t,D<<1,3),a(t,Z,re),c(t)
}function O(t,e,n,i){var r,o,a=0;t.level>0?(t.strm.data_type===I&&(t.strm.data_type=E(t)),v(t,t.l_desc),v(t,t.d_desc),a=x(t),r=t.opt_len+3+7>>>3,o=t.static_len+3+7>>>3,r>=o&&(r=o)):r=o=n+5,r>=n+4&&-1!==e?j(t,e,n,i):t.strategy===A||o===r?(s(t,(D<<1)+(i?1:0),3),_(t,re,oe)):(s(t,(P<<1)+(i?1:0),3),S(t,t.l_desc.max_code+1,t.d_desc.max_code+1,a+1),_(t,t.dyn_ltree,t.dyn_dtree)),m(t),i&&f(t)
}function M(t,e,n){return t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&n,t.last_lit++,0===e?t.dyn_ltree[2*n]++:(t.matches++,e--,t.dyn_ltree[2*(ae[n]+N+1)]++,t.dyn_dtree[2*r(e)]++),t.last_lit===t.lit_bufsize-1
}var R=t("./utils"),A=4,T=0,L=1,I=2,B=0,D=1,P=2,z=3,F=258,W=29,N=256,$=N+1+W,H=30,U=19,V=2*$+1,G=15,q=16,K=7,Z=256,X=16,Y=17,Q=18,J=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],te=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],ee=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],ne=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ie=512,re=new Array(2*($+2));
i(re);var oe=new Array(2*H);i(oe);var se=new Array(ie);i(se);var ae=new Array(F-z+1);
i(ae);var ue=new Array(W);i(ue);var ce=new Array(H);i(ce);var le,he,de,me=function(t,e,n,i,r){this.static_tree=t,this.extra_bits=e,this.extra_base=n,this.elems=i,this.max_length=r,this.has_stree=t&&t.length
},fe=function(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e},be=!1;n._tr_init=k,n._tr_stored_block=j,n._tr_flush_block=O,n._tr_tally=M,n._tr_align=C
},{"./utils":13}],13:[function(t,e,n){var i="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;
n.assign=function(t){for(var e=Array.prototype.slice.call(arguments,1);e.length;){var n=e.shift();
if(n){if("object"!=typeof n)throw new TypeError(n+"must be non-object");for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])
}}return t},n.shrinkBuf=function(t,e){return t.length===e?t:t.subarray?t.subarray(0,e):(t.length=e,t)
};var r={arraySet:function(t,e,n,i,r){if(e.subarray)return void t.set(e.subarray(n,n+i),r);
for(var o=0;i>o;o++)t[r+o]=e[n+o]},flattenChunks:function(t){var e,n,i,r,o,s;for(i=0,e=0,n=t.length;n>e;e++)i+=t[e].length;
for(s=new Uint8Array(i),r=0,e=0,n=t.length;n>e;e++)o=t[e],s.set(o,r),r+=o.length;
return s}},o={arraySet:function(t,e,n,i,r){for(var o=0;i>o;o++)t[r+o]=e[n+o]},flattenChunks:function(t){return[].concat.apply([],t)
}};n.setTyped=function(t){t?(n.Buf8=Uint8Array,n.Buf16=Uint16Array,n.Buf32=Int32Array,n.assign(n,r)):(n.Buf8=Array,n.Buf16=Array,n.Buf32=Array,n.assign(n,o))
},n.setTyped(i)},{}],14:[function(t,e){function n(){this.next_in=null,this.next_in_index=0,this.avail_in=0,this.total_in=0,this.next_out=null,this.next_out_index=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0
}e.exports=n},{}]},{},[1])(1)});var t=window.pako;return{get default(){return t}}
}),System.register("utils/array",[],function(){"use strict";var t=System.get("utils/function").once,e=function(t,e){var n=void 0!==arguments[2]?arguments[2]:!1;
if(t.length!==e.length)return!1;if(n)for(var i in t){var r=t[i];if(r!==e[i])return!1
}else{for(var o=0;o<t.length;o+=1)if(!e.includes(t[o]))return!1;for(var o=0;o<e.length;o+=1)if(!t.includes(e[o]))return!1
}return!0},n=function(e,n,i){var r,o;e=Array.prototype.slice.call(e,0),0===e.length?i&&i():(r=0,o=function(t){t?i&&i(t):(r+=1,r>=e.length&&i&&i())
},e.forEach(function(e){n(e,t(o))}))},i=function(e,n,i){var r,o,s;e=Array.prototype.slice.call(e,0),0===e.length?i&&i():(r=0,o=function(t){i&&i(t)
},s=function(){r+=1,r>=e.length?i&&i():n(e[r],t(s),t(o))},n(e[r],t(s),t(o)))};return{get compare(){return e
},get iterateParallel(){return n},get iterateSeries(){return i}}}),System.register("utils/artwork",[],function(){"use strict";
var t=System.get("libs/pako").default,e=function(e){for(var n=[],i=0,r=e.length;r>i;i+=1)n.push(e[i].charCodeAt(0));
var o=new Uint8Array(n);return t.gzip(o)},n=function(e){for(var n,i=t.inflate(e),r="",o=0,s=i.length;s>o;o+=1)n=String.fromCharCode(i[o]),r+=n;
return r};return{get compressArtwork(){return e},get uncompressArtwork(){return n
}}}),System.register("utils/chrome",[],function(){"use strict";var t=System.get("utils/time").nextTick,e=chrome.runtime.getManifest(),n=void 0===e.update_url,i=e.version,r=function(e){chrome.runtime.getBackgroundPage(function(n){t(function(){e(n)
})})},o=function(t,e){chrome.fileSystem.restoreEntry(t,function(t){t?t.file(function(){return e(t)
},function(){return e(null)}):e(null)})},s=function(t){return t.name&&t.name.includes(".")?t.name.substring(t.name.lastIndexOf(".")+1).toLowerCase():null
};return{get DEV_MODE(){return n},get APP_VERSION(){return i},get getBackgroundWindow(){return r
},get restoreFileEntry(){return o},get getFileExtension(){return s}}}),System.register("utils/constants",[],function(){"use strict";
var t="http://www.w3.org/2000/svg",e="http://www.w3.org/1999/xlink",n="http://www.w3.org/1999/xhtml",i="http://www.w3.org/1998/Math/MathML",r="http://www.w3.org/2000/xmlns/";
return{get SVG_NAMESPACE(){return t},get XLINK_NAMESPACE(){return e},get XHTML_NAMESPACE(){return n
},get MATHML_NAMESPACE(){return i},get XMLNS_NAMESPACE(){return r}}}),System.register("utils/dom",[],function(){"use strict";
var t=(System.get("utils/type").isFunction,System.get("utils/constants").SVG_NAMESPACE),e=function(t,e){var n,i,r,o=void 0!==arguments[2]?arguments[2]:null;
return null===o?(n=e,document.registerElement(t,n)):(i=e,r=o,document.registerElement(i,{"extends":t,prototype:r.prototype}))
},n=function(e){var n,i,r,o,s=e.split(":"),a=null;return 1===s.length?(n=s[0],a=document.createElement(n)):2===s.length&&(i=s,r=i[0],o=i[1],"svg"===r&&(a=document.createElementNS(t,o))),a
};return{get registerElement(){return e},get createElement(){return n}}}),System.register("utils/event",[],function(){"use strict";
var t=System.get("utils/platform").OS_NAME,e=Math,n=e.sqrt,i=e.pow,r=function(t){var e=o(t),n=s(t),i=n;
return i.includes(e)||i.push(e),i},o=function(t){var e,n,i=null,r=t.keyIdentifier,o={"U+00C0":"U+0060","U+00BD":"U+002D","U+00BB":"U+003D","U+00DB":"U+005B","U+00DD":"U+005D","U+00DC":"U+005C","U+00BA":"U+003B","U+00DE":"U+0027","U+00BC":"U+002C","U+00BE":"U+002E","U+00BF":"U+002F"};
for(var s in o)e=o[s],r===s&&(r=e);return"U"===r[0]&&"+"===r[1]?(n=parseInt(r.substring(2),16),27===n?i="Esc":8===n?i="Backspace":(i=String.fromCharCode(n),"	"===i?i="Tab":" "===i&&(i="Space"))):i="MacIntel"===navigator.platform?"Meta"===r?"Ctrl":"Control"===r?"Meta":r:"Control"===r?"Ctrl":"Win"===r||"Meta"===r?"Meta":r,i
},s=function(t){var e,n,i=[],r=t.altKey,o=t.shiftKey;return e="MacIntel"===navigator.platform?t.metaKey:t.ctrlKey,n="MacIntel"===navigator.platform?t.ctrlKey:t.metaKey,e&&i.push("Ctrl"),r&&i.push("Alt"),o&&i.push("Shift"),n&&i.push("Meta"),i
},a=function(e){for(var n,i,r,o=!1,s=!1,a=!1,u="",c=e[Symbol.iterator]();!(r=c.next()).done;)n=r.value,"Ctrl"===n?o=!0:"Alt"===n?s=!0:"Shift"===n?a=!0:u=n;
var l="";return"osx"===t||"ios"===t?(a&&(l+="⇧"),s&&(l+="⌥"),o&&(l+="⌘"),i={Up:"↑",Down:"↓",Left:"←",Right:"→",Backspace:"⌦"},i[u]&&(u=i[u]),"Up"===u?u="↑":"Down"===u?u="↓":"Left"===u?u="←":"Right"===u&&(u="→")):(o&&(l+="Ctrl+"),s&&(l+="Alt+"),a&&(l+="Shift+")),l+=u
},u=function(t,e){var r=void 0!==arguments[2]?arguments[2]:3,o=n(i(e.clientX-t.clientX,2)+i(e.clientY-t.clientY,2));
return r>o&&e.timeStamp-t.timeStamp<50?!1:!0};return{get getShortcutForKeyboardEvent(){return r
},get getKeyForKeyboardEvent(){return o},get getModKeysForUIEvent(){return s},get keyboardShortcutToString(){return a
},get isMouseMoveIntentional(){return u}}}),System.register("utils/function",[],function(){"use strict";
var t=arguments,e=function(e,n,i,r){var o=null,s=null,a=function(){var a=t,u=function(){o=null,r||(s=e.apply(i,a))
},c=r&&!o;return clearTimeout(o),o=setTimeout(u,n),c&&(s=e.apply(i,a)),s};return a
},n=function(e){var n=!1,i=function(){n===!1&&(n=!0,e.apply(window,t))};return i};
return{get debounce(){return e},get once(){return n}}}),System.register("utils/object",[],function(){"use strict";
var t=Object.keys,e=function(e){for(var n,i,r=[],o=t(e)[Symbol.iterator]();!(i=o.next()).done;)n=i.value,r.push([n,e[n]]);
return r},n=function(t,e){Object.observe(t,e)};return{get keys(){return t},get entries(){return e
},get observe(){return n}}}),System.register("utils/platform",[],function(){"use strict";
var t=function(){return navigator.platform.startsWith("Win")?"windows":navigator.platform.startsWith("Mac")?"osx":"iPhone"===navigator.platform||"iPad"===navigator.platform?"ios":"Android"===navigator.platform?"android":navigator.userAgent.includes("CrOS")?"chromeos":navigator.platform.startsWith("Linux")?"linux":"other"
}();return{get OS_NAME(){return t}}}),System.register("utils/time",[],function(){"use strict";
var t=function(t,e){var n=setTimeout(e,t);return n},e=function(t,e){var n=setInterval(e,t);
return n},n=function(t){requestAnimationFrame(t)};return{get createTimeout(){return t
},get createInterval(){return e},get nextTick(){return n}}}),System.register("utils/type",[],function(){"use strict";
var t=function(t){return"function"==typeof t};return{get isFunction(){return t}}});
