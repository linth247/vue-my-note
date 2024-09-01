(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function no(e,t){const n=new Set(e.split(","));return o=>n.has(o)}const ee={},At=[],Te=()=>{},jr=()=>!1,bn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),oo=e=>e.startsWith("onUpdate:"),ue=Object.assign,so=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},$r=Object.prototype.hasOwnProperty,K=(e,t)=>$r.call(e,t),O=Array.isArray,Tt=e=>_n(e)==="[object Map]",As=e=>_n(e)==="[object Set]",H=e=>typeof e=="function",le=e=>typeof e=="string",st=e=>typeof e=="symbol",te=e=>e!==null&&typeof e=="object",Ts=e=>(te(e)||H(e))&&H(e.then)&&H(e.catch),Ss=Object.prototype.toString,_n=e=>Ss.call(e),qr=e=>_n(e).slice(8,-1),Cs=e=>_n(e)==="[object Object]",ro=e=>le(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,kt=no(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},zr=/-(\w)/g,Le=vn(e=>e.replace(zr,(t,n)=>n?n.toUpperCase():"")),Jr=/\B([A-Z])/g,bt=vn(e=>e.replace(Jr,"-$1").toLowerCase()),yn=vn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Dn=vn(e=>e?`on${yn(e)}`:""),ot=(e,t)=>!Object.is(e,t),Ln=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},xs=(e,t,n,o=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:o,value:n})},Qr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Eo;const Es=()=>Eo||(Eo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function io(e){if(O(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],s=le(o)?ei(o):io(o);if(s)for(const r in s)t[r]=s[r]}return t}else if(le(e)||te(e))return e}const Zr=/;(?![^(]*\))/g,Yr=/:([^]+)/,Xr=/\/\*[^]*?\*\//g;function ei(e){const t={};return e.replace(Xr,"").split(Zr).forEach(n=>{if(n){const o=n.split(Yr);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function lo(e){let t="";if(le(e))t=e;else if(O(e))for(let n=0;n<e.length;n++){const o=lo(e[n]);o&&(t+=o+" ")}else if(te(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ti="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ni=no(ti);function Ds(e){return!!e||e===""}const Ls=e=>!!(e&&e.__v_isRef===!0),_t=e=>le(e)?e:e==null?"":O(e)||te(e)&&(e.toString===Ss||!H(e.toString))?Ls(e)?_t(e.value):JSON.stringify(e,Rs,2):String(e),Rs=(e,t)=>Ls(t)?Rs(e,t.value):Tt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,s],r)=>(n[Rn(o,r)+" =>"]=s,n),{})}:As(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Rn(n))}:st(t)?Rn(t):te(t)&&!O(t)&&!Cs(t)?String(t):t,Rn=(e,t="")=>{var n;return st(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ce;class Ws{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ce,!t&&Ce&&(this.index=(Ce.scopes||(Ce.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ce;try{return Ce=this,t()}finally{Ce=n}}}on(){Ce=this}off(){Ce=this.parent}stop(t){if(this._active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function oi(e){return new Ws(e)}function si(e,t=Ce){t&&t.active&&t.effects.push(e)}function ri(){return Ce}let pt;class ao{constructor(t,n,o,s){this.fn=t,this.trigger=n,this.scheduler=o,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,si(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,rt();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(ii(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),it()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=tt,n=pt;try{return tt=!0,pt=this,this._runnings++,Do(this),this.fn()}finally{Lo(this),this._runnings--,pt=n,tt=t}}stop(){this.active&&(Do(this),Lo(this),this.onStop&&this.onStop(),this.active=!1)}}function ii(e){return e.value}function Do(e){e._trackId++,e._depsLength=0}function Lo(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)Ns(e.deps[t],e);e.deps.length=e._depsLength}}function Ns(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let tt=!0,Bn=0;const Ms=[];function rt(){Ms.push(tt),tt=!1}function it(){const e=Ms.pop();tt=e===void 0?!0:e}function co(){Bn++}function uo(){for(Bn--;!Bn&&Gn.length;)Gn.shift()()}function Us(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const o=e.deps[e._depsLength];o!==t?(o&&Ns(o,e),e.deps[e._depsLength++]=t):e._depsLength++}}const Gn=[];function Os(e,t,n){co();for(const o of e.keys()){let s;o._dirtyLevel<t&&(s??(s=e.get(o)===o._trackId))&&(o._shouldSchedule||(o._shouldSchedule=o._dirtyLevel===0),o._dirtyLevel=t),o._shouldSchedule&&(s??(s=e.get(o)===o._trackId))&&(o.trigger(),(!o._runnings||o.allowRecurse)&&o._dirtyLevel!==2&&(o._shouldSchedule=!1,o.scheduler&&Gn.push(o.scheduler)))}uo()}const ks=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},Kn=new WeakMap,ht=Symbol(""),Vn=Symbol("");function me(e,t,n){if(tt&&pt){let o=Kn.get(e);o||Kn.set(e,o=new Map);let s=o.get(n);s||o.set(n,s=ks(()=>o.delete(n))),Us(pt,s)}}function je(e,t,n,o,s,r){const i=Kn.get(e);if(!i)return;let c=[];if(t==="clear")c=[...i.values()];else if(n==="length"&&O(e)){const a=Number(o);i.forEach((f,d)=>{(d==="length"||!st(d)&&d>=a)&&c.push(f)})}else switch(n!==void 0&&c.push(i.get(n)),t){case"add":O(e)?ro(n)&&c.push(i.get("length")):(c.push(i.get(ht)),Tt(e)&&c.push(i.get(Vn)));break;case"delete":O(e)||(c.push(i.get(ht)),Tt(e)&&c.push(i.get(Vn)));break;case"set":Tt(e)&&c.push(i.get(ht));break}co();for(const a of c)a&&Os(a,4);uo()}const li=no("__proto__,__v_isRef,__isVue"),Hs=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(st)),Ro=ai();function ai(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const o=z(this);for(let r=0,i=this.length;r<i;r++)me(o,"get",r+"");const s=o[t](...n);return s===-1||s===!1?o[t](...n.map(z)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){rt(),co();const o=z(this)[t].apply(this,n);return uo(),it(),o}}),e}function ci(e){st(e)||(e=String(e));const t=z(this);return me(t,"has",e),t.hasOwnProperty(e)}class Fs{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,o){const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return o===(s?r?Ii:Vs:r?Ks:Gs).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(o)?t:void 0;const i=O(t);if(!s){if(i&&K(Ro,n))return Reflect.get(Ro,n,o);if(n==="hasOwnProperty")return ci}const c=Reflect.get(t,n,o);return(st(n)?Hs.has(n):li(n))||(s||me(t,"get",n),r)?c:ge(c)?i&&ro(n)?c:c.value:te(c)?s?$s(c):In(c):c}}class Bs extends Fs{constructor(t=!1){super(!1,t)}set(t,n,o,s){let r=t[n];if(!this._isShallow){const a=gt(r);if(!xt(o)&&!gt(o)&&(r=z(r),o=z(o)),!O(t)&&ge(r)&&!ge(o))return a?!1:(r.value=o,!0)}const i=O(t)&&ro(n)?Number(n)<t.length:K(t,n),c=Reflect.set(t,n,o,s);return t===z(s)&&(i?ot(o,r)&&je(t,"set",n,o):je(t,"add",n,o)),c}deleteProperty(t,n){const o=K(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&o&&je(t,"delete",n,void 0),s}has(t,n){const o=Reflect.has(t,n);return(!st(n)||!Hs.has(n))&&me(t,"has",n),o}ownKeys(t){return me(t,"iterate",O(t)?"length":ht),Reflect.ownKeys(t)}}class ui extends Fs{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const fi=new Bs,di=new ui,pi=new Bs(!0);const fo=e=>e,wn=e=>Reflect.getPrototypeOf(e);function en(e,t,n=!1,o=!1){e=e.__v_raw;const s=z(e),r=z(t);n||(ot(t,r)&&me(s,"get",t),me(s,"get",r));const{has:i}=wn(s),c=o?fo:n?mo:Vt;if(i.call(s,t))return c(e.get(t));if(i.call(s,r))return c(e.get(r));e!==s&&e.get(t)}function tn(e,t=!1){const n=this.__v_raw,o=z(n),s=z(e);return t||(ot(e,s)&&me(o,"has",e),me(o,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function nn(e,t=!1){return e=e.__v_raw,!t&&me(z(e),"iterate",ht),Reflect.get(e,"size",e)}function Wo(e,t=!1){!t&&!xt(e)&&!gt(e)&&(e=z(e));const n=z(this);return wn(n).has.call(n,e)||(n.add(e),je(n,"add",e,e)),this}function No(e,t,n=!1){!n&&!xt(t)&&!gt(t)&&(t=z(t));const o=z(this),{has:s,get:r}=wn(o);let i=s.call(o,e);i||(e=z(e),i=s.call(o,e));const c=r.call(o,e);return o.set(e,t),i?ot(t,c)&&je(o,"set",e,t):je(o,"add",e,t),this}function Mo(e){const t=z(this),{has:n,get:o}=wn(t);let s=n.call(t,e);s||(e=z(e),s=n.call(t,e)),o&&o.call(t,e);const r=t.delete(e);return s&&je(t,"delete",e,void 0),r}function Uo(){const e=z(this),t=e.size!==0,n=e.clear();return t&&je(e,"clear",void 0,void 0),n}function on(e,t){return function(o,s){const r=this,i=r.__v_raw,c=z(i),a=t?fo:e?mo:Vt;return!e&&me(c,"iterate",ht),i.forEach((f,d)=>o.call(s,a(f),a(d),r))}}function sn(e,t,n){return function(...o){const s=this.__v_raw,r=z(s),i=Tt(r),c=e==="entries"||e===Symbol.iterator&&i,a=e==="keys"&&i,f=s[e](...o),d=n?fo:t?mo:Vt;return!t&&me(r,"iterate",a?Vn:ht),{next(){const{value:p,done:m}=f.next();return m?{value:p,done:m}:{value:c?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function Qe(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function hi(){const e={get(r){return en(this,r)},get size(){return nn(this)},has:tn,add:Wo,set:No,delete:Mo,clear:Uo,forEach:on(!1,!1)},t={get(r){return en(this,r,!1,!0)},get size(){return nn(this)},has:tn,add(r){return Wo.call(this,r,!0)},set(r,i){return No.call(this,r,i,!0)},delete:Mo,clear:Uo,forEach:on(!1,!0)},n={get(r){return en(this,r,!0)},get size(){return nn(this,!0)},has(r){return tn.call(this,r,!0)},add:Qe("add"),set:Qe("set"),delete:Qe("delete"),clear:Qe("clear"),forEach:on(!0,!1)},o={get(r){return en(this,r,!0,!0)},get size(){return nn(this,!0)},has(r){return tn.call(this,r,!0)},add:Qe("add"),set:Qe("set"),delete:Qe("delete"),clear:Qe("clear"),forEach:on(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=sn(r,!1,!1),n[r]=sn(r,!0,!1),t[r]=sn(r,!1,!0),o[r]=sn(r,!0,!0)}),[e,n,t,o]}const[mi,gi,bi,_i]=hi();function po(e,t){const n=t?e?_i:bi:e?gi:mi;return(o,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?o:Reflect.get(K(n,s)&&s in o?n:o,s,r)}const vi={get:po(!1,!1)},yi={get:po(!1,!0)},wi={get:po(!0,!1)};const Gs=new WeakMap,Ks=new WeakMap,Vs=new WeakMap,Ii=new WeakMap;function Pi(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ai(e){return e.__v_skip||!Object.isExtensible(e)?0:Pi(qr(e))}function In(e){return gt(e)?e:ho(e,!1,fi,vi,Gs)}function js(e){return ho(e,!1,pi,yi,Ks)}function $s(e){return ho(e,!0,di,wi,Vs)}function ho(e,t,n,o,s){if(!te(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=s.get(e);if(r)return r;const i=Ai(e);if(i===0)return e;const c=new Proxy(e,i===2?o:n);return s.set(e,c),c}function Ht(e){return gt(e)?Ht(e.__v_raw):!!(e&&e.__v_isReactive)}function gt(e){return!!(e&&e.__v_isReadonly)}function xt(e){return!!(e&&e.__v_isShallow)}function qs(e){return e?!!e.__v_raw:!1}function z(e){const t=e&&e.__v_raw;return t?z(t):e}function zs(e){return Object.isExtensible(e)&&xs(e,"__v_skip",!0),e}const Vt=e=>te(e)?In(e):e,mo=e=>te(e)?$s(e):e;class Js{constructor(t,n,o,s){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ao(()=>t(this._value),()=>ln(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=o}get value(){const t=z(this);return(!t._cacheable||t.effect.dirty)&&ot(t._value,t._value=t.effect.run())&&ln(t,4),Qs(t),t.effect._dirtyLevel>=2&&ln(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function Ti(e,t,n=!1){let o,s;const r=H(e);return r?(o=e,s=Te):(o=e.get,s=e.set),new Js(o,s,r||!s,n)}function Qs(e){var t;tt&&pt&&(e=z(e),Us(pt,(t=e.dep)!=null?t:e.dep=ks(()=>e.dep=void 0,e instanceof Js?e:void 0)))}function ln(e,t=4,n,o){e=z(e);const s=e.dep;s&&Os(s,t)}function ge(e){return!!(e&&e.__v_isRef===!0)}function Zs(e){return Ys(e,!1)}function Si(e){return Ys(e,!0)}function Ys(e,t){return ge(e)?e:new Ci(e,t)}class Ci{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:z(t),this._value=n?t:Vt(t)}get value(){return Qs(this),this._value}set value(t){const n=this.__v_isShallow||xt(t)||gt(t);t=n?t:z(t),ot(t,this._rawValue)&&(this._rawValue,this._rawValue=t,this._value=n?t:Vt(t),ln(this,4))}}function mt(e){return ge(e)?e.value:e}const xi={get:(e,t,n)=>mt(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const s=e[t];return ge(s)&&!ge(n)?(s.value=n,!0):Reflect.set(e,t,n,o)}};function Xs(e){return Ht(e)?e:new Proxy(e,xi)}/**
* @vue/runtime-core v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function nt(e,t,n,o){try{return o?e(...o):e()}catch(s){Pn(s,t,n)}}function De(e,t,n,o){if(H(e)){const s=nt(e,t,n,o);return s&&Ts(s)&&s.catch(r=>{Pn(r,t,n)}),s}if(O(e)){const s=[];for(let r=0;r<e.length;r++)s.push(De(e[r],t,n,o));return s}}function Pn(e,t,n,o=!0){const s=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const f=r.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](e,i,c)===!1)return}r=r.parent}const a=t.appContext.config.errorHandler;if(a){rt(),nt(a,null,10,[e,i,c]),it();return}}Ei(e,n,s,o)}function Ei(e,t,n,o=!0){console.error(e)}let jt=!1,jn=!1;const ae=[];let He=0;const St=[];let Ye=null,ft=0;const er=Promise.resolve();let go=null;function tr(e){const t=go||er;return e?t.then(this?e.bind(this):e):t}function Di(e){let t=He+1,n=ae.length;for(;t<n;){const o=t+n>>>1,s=ae[o],r=$t(s);r<e||r===e&&s.pre?t=o+1:n=o}return t}function bo(e){(!ae.length||!ae.includes(e,jt&&e.allowRecurse?He+1:He))&&(e.id==null?ae.push(e):ae.splice(Di(e.id),0,e),nr())}function nr(){!jt&&!jn&&(jn=!0,go=er.then(sr))}function Li(e){const t=ae.indexOf(e);t>He&&ae.splice(t,1)}function Ri(e){O(e)?St.push(...e):(!Ye||!Ye.includes(e,e.allowRecurse?ft+1:ft))&&St.push(e),nr()}function Oo(e,t,n=jt?He+1:0){for(;n<ae.length;n++){const o=ae[n];if(o&&o.pre){if(e&&o.id!==e.uid)continue;ae.splice(n,1),n--,o()}}}function or(e){if(St.length){const t=[...new Set(St)].sort((n,o)=>$t(n)-$t(o));if(St.length=0,Ye){Ye.push(...t);return}for(Ye=t,ft=0;ft<Ye.length;ft++){const n=Ye[ft];n.active!==!1&&n()}Ye=null,ft=0}}const $t=e=>e.id==null?1/0:e.id,Wi=(e,t)=>{const n=$t(e)-$t(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function sr(e){jn=!1,jt=!0,ae.sort(Wi);try{for(He=0;He<ae.length;He++){const t=ae[He];t&&t.active!==!1&&nt(t,t.i,t.i?15:14)}}finally{He=0,ae.length=0,or(),jt=!1,go=null,(ae.length||St.length)&&sr()}}let Ee=null,An=null;function hn(e){const t=Ee;return Ee=e,An=e&&e.type.__scopeId||null,t}function Fe(e){An=e}function Be(){An=null}function Ae(e,t=Ee,n){if(!t||e._n)return e;const o=(...s)=>{o._d&&$o(-1);const r=hn(t);let i;try{i=e(...s)}finally{hn(r),o._d&&$o(1)}return i};return o._n=!0,o._c=!0,o._d=!0,o}function ct(e,t,n,o){const s=e.dirs,r=t&&t.dirs;for(let i=0;i<s.length;i++){const c=s[i];r&&(c.oldValue=r[i].value);let a=c.dir[o];a&&(rt(),De(a,n,8,[e.el,c,e,t]),it())}}function rr(e,t){e.shapeFlag&6&&e.component?rr(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function ir(e,t){return H(e)?ue({name:e.name},t,{setup:e}):e}const an=e=>!!e.type.__asyncLoader,lr=e=>e.type.__isKeepAlive;function Ni(e,t){ar(e,"a",t)}function Mi(e,t){ar(e,"da",t)}function ar(e,t,n=ce){const o=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Tn(t,o,n),n){let s=n.parent;for(;s&&s.parent;)lr(s.parent.vnode)&&Ui(o,t,n,s),s=s.parent}}function Ui(e,t,n,o){const s=Tn(t,e,o,!0);cr(()=>{so(o[t],s)},n)}function Tn(e,t,n=ce,o=!1){if(n){const s=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...i)=>{rt();const c=Yt(n),a=De(t,n,e,i);return c(),it(),a});return o?s.unshift(r):s.push(r),r}}const qe=e=>(t,n=ce)=>{(!xn||e==="sp")&&Tn(e,(...o)=>t(...o),n)},Oi=qe("bm"),ki=qe("m"),Hi=qe("bu"),Fi=qe("u"),Bi=qe("bum"),cr=qe("um"),Gi=qe("sp"),Ki=qe("rtg"),Vi=qe("rtc");function ji(e,t=ce){Tn("ec",e,t)}const $i="components";function qt(e,t){return zi($i,e,!0,t)||e}const qi=Symbol.for("v-ndc");function zi(e,t,n=!0,o=!1){const s=Ee||ce;if(s){const r=s.type;{const c=Hl(r,!1);if(c&&(c===t||c===Le(t)||c===yn(Le(t))))return r}const i=ko(s[e]||r[e],t)||ko(s.appContext[e],t);return!i&&o?r:i}}function ko(e,t){return e&&(e[t]||e[Le(t)]||e[yn(Le(t))])}const $n=e=>e?xr(e)?wo(e):$n(e.parent):null,Ft=ue(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>$n(e.parent),$root:e=>$n(e.root),$emit:e=>e.emit,$options:e=>_o(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,bo(e.update)}),$nextTick:e=>e.n||(e.n=tr.bind(e.proxy)),$watch:e=>bl.bind(e)}),Wn=(e,t)=>e!==ee&&!e.__isScriptSetup&&K(e,t),Ji={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:o,data:s,props:r,accessCache:i,type:c,appContext:a}=e;let f;if(t[0]!=="$"){const g=i[t];if(g!==void 0)switch(g){case 1:return o[t];case 2:return s[t];case 4:return n[t];case 3:return r[t]}else{if(Wn(o,t))return i[t]=1,o[t];if(s!==ee&&K(s,t))return i[t]=2,s[t];if((f=e.propsOptions[0])&&K(f,t))return i[t]=3,r[t];if(n!==ee&&K(n,t))return i[t]=4,n[t];qn&&(i[t]=0)}}const d=Ft[t];let p,m;if(d)return t==="$attrs"&&me(e.attrs,"get",""),d(e);if((p=c.__cssModules)&&(p=p[t]))return p;if(n!==ee&&K(n,t))return i[t]=4,n[t];if(m=a.config.globalProperties,K(m,t))return m[t]},set({_:e},t,n){const{data:o,setupState:s,ctx:r}=e;return Wn(s,t)?(s[t]=n,!0):o!==ee&&K(o,t)?(o[t]=n,!0):K(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:s,propsOptions:r}},i){let c;return!!n[i]||e!==ee&&K(e,i)||Wn(t,i)||(c=r[0])&&K(c,i)||K(o,i)||K(Ft,i)||K(s.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:K(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ho(e){return O(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let qn=!0;function Qi(e){const t=_o(e),n=e.proxy,o=e.ctx;qn=!1,t.beforeCreate&&Fo(t.beforeCreate,e,"bc");const{data:s,computed:r,methods:i,watch:c,provide:a,inject:f,created:d,beforeMount:p,mounted:m,beforeUpdate:g,updated:R,activated:x,deactivated:F,beforeDestroy:U,beforeUnmount:M,destroyed:E,unmounted:j,render:oe,renderTracked:B,renderTriggered:ne,errorCaptured:Ie,serverPrefetch:lt,expose:We,inheritAttrs:ze,components:at,directives:Ne,filters:Wt}=t;if(f&&Zi(f,o,null),i)for(const Z in i){const $=i[Z];H($)&&(o[Z]=$.bind(n))}if(s){const Z=s.call(n,n);te(Z)&&(e.data=In(Z))}if(qn=!0,r)for(const Z in r){const $=r[Z],Ge=H($)?$.bind(n,n):H($.get)?$.get.bind(n,n):Te,Je=!H($)&&H($.set)?$.set.bind(n):Te,Me=xe({get:Ge,set:Je});Object.defineProperty(o,Z,{enumerable:!0,configurable:!0,get:()=>Me.value,set:de=>Me.value=de})}if(c)for(const Z in c)ur(c[Z],o,n,Z);if(a){const Z=H(a)?a.call(n):a;Reflect.ownKeys(Z).forEach($=>{cn($,Z[$])})}d&&Fo(d,e,"c");function re(Z,$){O($)?$.forEach(Ge=>Z(Ge.bind(n))):$&&Z($.bind(n))}if(re(Oi,p),re(ki,m),re(Hi,g),re(Fi,R),re(Ni,x),re(Mi,F),re(ji,Ie),re(Vi,B),re(Ki,ne),re(Bi,M),re(cr,j),re(Gi,lt),O(We))if(We.length){const Z=e.exposed||(e.exposed={});We.forEach($=>{Object.defineProperty(Z,$,{get:()=>n[$],set:Ge=>n[$]=Ge})})}else e.exposed||(e.exposed={});oe&&e.render===Te&&(e.render=oe),ze!=null&&(e.inheritAttrs=ze),at&&(e.components=at),Ne&&(e.directives=Ne)}function Zi(e,t,n=Te){O(e)&&(e=zn(e));for(const o in e){const s=e[o];let r;te(s)?"default"in s?r=$e(s.from||o,s.default,!0):r=$e(s.from||o):r=$e(s),ge(r)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>r.value,set:i=>r.value=i}):t[o]=r}}function Fo(e,t,n){De(O(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function ur(e,t,n,o){const s=o.includes(".")?Ar(n,o):()=>n[o];if(le(e)){const r=t[e];H(r)&&un(s,r)}else if(H(e))un(s,e.bind(n));else if(te(e))if(O(e))e.forEach(r=>ur(r,t,n,o));else{const r=H(e.handler)?e.handler.bind(n):t[e.handler];H(r)&&un(s,r,e)}}function _o(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:i}}=e.appContext,c=r.get(t);let a;return c?a=c:!s.length&&!n&&!o?a=t:(a={},s.length&&s.forEach(f=>mn(a,f,i,!0)),mn(a,t,i)),te(t)&&r.set(t,a),a}function mn(e,t,n,o=!1){const{mixins:s,extends:r}=t;r&&mn(e,r,n,!0),s&&s.forEach(i=>mn(e,i,n,!0));for(const i in t)if(!(o&&i==="expose")){const c=Yi[i]||n&&n[i];e[i]=c?c(e[i],t[i]):t[i]}return e}const Yi={data:Bo,props:Go,emits:Go,methods:Ot,computed:Ot,beforeCreate:fe,created:fe,beforeMount:fe,mounted:fe,beforeUpdate:fe,updated:fe,beforeDestroy:fe,beforeUnmount:fe,destroyed:fe,unmounted:fe,activated:fe,deactivated:fe,errorCaptured:fe,serverPrefetch:fe,components:Ot,directives:Ot,watch:el,provide:Bo,inject:Xi};function Bo(e,t){return t?e?function(){return ue(H(e)?e.call(this,this):e,H(t)?t.call(this,this):t)}:t:e}function Xi(e,t){return Ot(zn(e),zn(t))}function zn(e){if(O(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function fe(e,t){return e?[...new Set([].concat(e,t))]:t}function Ot(e,t){return e?ue(Object.create(null),e,t):t}function Go(e,t){return e?O(e)&&O(t)?[...new Set([...e,...t])]:ue(Object.create(null),Ho(e),Ho(t??{})):t}function el(e,t){if(!e)return t;if(!t)return e;const n=ue(Object.create(null),e);for(const o in t)n[o]=fe(e[o],t[o]);return n}function fr(){return{app:null,config:{isNativeTag:jr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tl=0;function nl(e,t){return function(o,s=null){H(o)||(o=ue({},o)),s!=null&&!te(s)&&(s=null);const r=fr(),i=new WeakSet;let c=!1;const a=r.app={_uid:tl++,_component:o,_props:s,_container:null,_context:r,_instance:null,version:Bl,get config(){return r.config},set config(f){},use(f,...d){return i.has(f)||(f&&H(f.install)?(i.add(f),f.install(a,...d)):H(f)&&(i.add(f),f(a,...d))),a},mixin(f){return r.mixins.includes(f)||r.mixins.push(f),a},component(f,d){return d?(r.components[f]=d,a):r.components[f]},directive(f,d){return d?(r.directives[f]=d,a):r.directives[f]},mount(f,d,p){if(!c){const m=V(o,s);return m.appContext=r,p===!0?p="svg":p===!1&&(p=void 0),d&&t?t(m,f):e(m,f,p),c=!0,a._container=f,f.__vue_app__=a,wo(m.component)}},unmount(){c&&(e(null,a._container),delete a._container.__vue_app__)},provide(f,d){return r.provides[f]=d,a},runWithContext(f){const d=Ct;Ct=a;try{return f()}finally{Ct=d}}};return a}}let Ct=null;function cn(e,t){if(ce){let n=ce.provides;const o=ce.parent&&ce.parent.provides;o===n&&(n=ce.provides=Object.create(o)),n[e]=t}}function $e(e,t,n=!1){const o=ce||Ee;if(o||Ct){const s=Ct?Ct._context.provides:o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&H(t)?t.call(o&&o.proxy):t}}const dr={},pr=()=>Object.create(dr),hr=e=>Object.getPrototypeOf(e)===dr;function ol(e,t,n,o=!1){const s={},r=pr();e.propsDefaults=Object.create(null),mr(e,t,s,r);for(const i in e.propsOptions[0])i in s||(s[i]=void 0);n?e.props=o?s:js(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function sl(e,t,n,o){const{props:s,attrs:r,vnode:{patchFlag:i}}=e,c=z(s),[a]=e.propsOptions;let f=!1;if((o||i>0)&&!(i&16)){if(i&8){const d=e.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(Sn(e.emitsOptions,m))continue;const g=t[m];if(a)if(K(r,m))g!==r[m]&&(r[m]=g,f=!0);else{const R=Le(m);s[R]=Jn(a,c,R,g,e,!1)}else g!==r[m]&&(r[m]=g,f=!0)}}}else{mr(e,t,s,r)&&(f=!0);let d;for(const p in c)(!t||!K(t,p)&&((d=bt(p))===p||!K(t,d)))&&(a?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Jn(a,c,p,void 0,e,!0)):delete s[p]);if(r!==c)for(const p in r)(!t||!K(t,p))&&(delete r[p],f=!0)}f&&je(e.attrs,"set","")}function mr(e,t,n,o){const[s,r]=e.propsOptions;let i=!1,c;if(t)for(let a in t){if(kt(a))continue;const f=t[a];let d;s&&K(s,d=Le(a))?!r||!r.includes(d)?n[d]=f:(c||(c={}))[d]=f:Sn(e.emitsOptions,a)||(!(a in o)||f!==o[a])&&(o[a]=f,i=!0)}if(r){const a=z(n),f=c||ee;for(let d=0;d<r.length;d++){const p=r[d];n[p]=Jn(s,a,p,f[p],e,!K(f,p))}}return i}function Jn(e,t,n,o,s,r){const i=e[n];if(i!=null){const c=K(i,"default");if(c&&o===void 0){const a=i.default;if(i.type!==Function&&!i.skipFactory&&H(a)){const{propsDefaults:f}=s;if(n in f)o=f[n];else{const d=Yt(s);o=f[n]=a.call(null,t),d()}}else o=a}i[0]&&(r&&!c?o=!1:i[1]&&(o===""||o===bt(n))&&(o=!0))}return o}const rl=new WeakMap;function gr(e,t,n=!1){const o=n?rl:t.propsCache,s=o.get(e);if(s)return s;const r=e.props,i={},c=[];let a=!1;if(!H(e)){const d=p=>{a=!0;const[m,g]=gr(p,t,!0);ue(i,m),g&&c.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!r&&!a)return te(e)&&o.set(e,At),At;if(O(r))for(let d=0;d<r.length;d++){const p=Le(r[d]);Ko(p)&&(i[p]=ee)}else if(r)for(const d in r){const p=Le(d);if(Ko(p)){const m=r[d],g=i[p]=O(m)||H(m)?{type:m}:ue({},m),R=g.type;let x=!1,F=!0;if(O(R))for(let U=0;U<R.length;++U){const M=R[U],E=H(M)&&M.name;if(E==="Boolean"){x=!0;break}else E==="String"&&(F=!1)}else x=H(R)&&R.name==="Boolean";g[0]=x,g[1]=F,(x||K(g,"default"))&&c.push(p)}}const f=[i,c];return te(e)&&o.set(e,f),f}function Ko(e){return e[0]!=="$"&&!kt(e)}const br=e=>e[0]==="_"||e==="$stable",vo=e=>O(e)?e.map(ke):[ke(e)],il=(e,t,n)=>{if(t._n)return t;const o=Ae((...s)=>vo(t(...s)),n);return o._c=!1,o},_r=(e,t,n)=>{const o=e._ctx;for(const s in e){if(br(s))continue;const r=e[s];if(H(r))t[s]=il(s,r,o);else if(r!=null){const i=vo(r);t[s]=()=>i}}},vr=(e,t)=>{const n=vo(t);e.slots.default=()=>n},yr=(e,t,n)=>{for(const o in t)(n||o!=="_")&&(e[o]=t[o])},ll=(e,t,n)=>{const o=e.slots=pr();if(e.vnode.shapeFlag&32){const s=t._;s?(yr(o,t,n),n&&xs(o,"_",s,!0)):_r(t,o)}else t&&vr(e,t)},al=(e,t,n)=>{const{vnode:o,slots:s}=e;let r=!0,i=ee;if(o.shapeFlag&32){const c=t._;c?n&&c===1?r=!1:yr(s,t,n):(r=!t.$stable,_r(t,s)),i=t}else t&&(vr(e,t),i={default:1});if(r)for(const c in s)!br(c)&&i[c]==null&&delete s[c]};function Qn(e,t,n,o,s=!1){if(O(e)){e.forEach((m,g)=>Qn(m,t&&(O(t)?t[g]:t),n,o,s));return}if(an(o)&&!s)return;const r=o.shapeFlag&4?wo(o.component):o.el,i=s?null:r,{i:c,r:a}=e,f=t&&t.r,d=c.refs===ee?c.refs={}:c.refs,p=c.setupState;if(f!=null&&f!==a&&(le(f)?(d[f]=null,K(p,f)&&(p[f]=null)):ge(f)&&(f.value=null)),H(a))nt(a,c,12,[i,d]);else{const m=le(a),g=ge(a);if(m||g){const R=()=>{if(e.f){const x=m?K(p,a)?p[a]:d[a]:a.value;s?O(x)&&so(x,r):O(x)?x.includes(r)||x.push(r):m?(d[a]=[r],K(p,a)&&(p[a]=d[a])):(a.value=[r],e.k&&(d[e.k]=a.value))}else m?(d[a]=i,K(p,a)&&(p[a]=i)):g&&(a.value=i,e.k&&(d[e.k]=i))};i?(R.id=-1,pe(R,n)):R()}}}const cl=Symbol("_vte"),ul=e=>e.__isTeleport,pe=Tl;function fl(e){return dl(e)}function dl(e,t){const n=Es();n.__VUE__=!0;const{insert:o,remove:s,patchProp:r,createElement:i,createText:c,createComment:a,setText:f,setElementText:d,parentNode:p,nextSibling:m,setScopeId:g=Te,insertStaticContent:R}=e,x=(l,u,h,v=null,b=null,w=null,A=void 0,I=null,P=!!u.dynamicChildren)=>{if(l===u)return;l&&!Mt(l,u)&&(v=_(l),de(l,b,w,!0),l=null),u.patchFlag===-2&&(P=!1,u.dynamicChildren=null);const{type:y,ref:C,shapeFlag:W}=u;switch(y){case Cn:F(l,u,h,v);break;case zt:U(l,u,h,v);break;case fn:l==null&&M(u,h,v,A);break;case se:at(l,u,h,v,b,w,A,I,P);break;default:W&1?oe(l,u,h,v,b,w,A,I,P):W&6?Ne(l,u,h,v,b,w,A,I,P):(W&64||W&128)&&y.process(l,u,h,v,b,w,A,I,P,D)}C!=null&&b&&Qn(C,l&&l.ref,w,u||l,!u)},F=(l,u,h,v)=>{if(l==null)o(u.el=c(u.children),h,v);else{const b=u.el=l.el;u.children!==l.children&&f(b,u.children)}},U=(l,u,h,v)=>{l==null?o(u.el=a(u.children||""),h,v):u.el=l.el},M=(l,u,h,v)=>{[l.el,l.anchor]=R(l.children,u,h,v,l.el,l.anchor)},E=({el:l,anchor:u},h,v)=>{let b;for(;l&&l!==u;)b=m(l),o(l,h,v),l=b;o(u,h,v)},j=({el:l,anchor:u})=>{let h;for(;l&&l!==u;)h=m(l),s(l),l=h;s(u)},oe=(l,u,h,v,b,w,A,I,P)=>{u.type==="svg"?A="svg":u.type==="math"&&(A="mathml"),l==null?B(u,h,v,b,w,A,I,P):lt(l,u,b,w,A,I,P)},B=(l,u,h,v,b,w,A,I)=>{let P,y;const{props:C,shapeFlag:W,transition:L,dirs:k}=l;if(P=l.el=i(l.type,w,C&&C.is,C),W&8?d(P,l.children):W&16&&Ie(l.children,P,null,v,b,Nn(l,w),A,I),k&&ct(l,null,v,"created"),ne(P,l,l.scopeId,A,v),C){for(const Y in C)Y!=="value"&&!kt(Y)&&r(P,Y,null,C[Y],w,v);"value"in C&&r(P,"value",null,C.value,w),(y=C.onVnodeBeforeMount)&&Oe(y,v,l)}k&&ct(l,null,v,"beforeMount");const G=pl(b,L);G&&L.beforeEnter(P),o(P,u,h),((y=C&&C.onVnodeMounted)||G||k)&&pe(()=>{y&&Oe(y,v,l),G&&L.enter(P),k&&ct(l,null,v,"mounted")},b)},ne=(l,u,h,v,b)=>{if(h&&g(l,h),v)for(let w=0;w<v.length;w++)g(l,v[w]);if(b){let w=b.subTree;if(u===w){const A=b.vnode;ne(l,A,A.scopeId,A.slotScopeIds,b.parent)}}},Ie=(l,u,h,v,b,w,A,I,P=0)=>{for(let y=P;y<l.length;y++){const C=l[y]=I?Xe(l[y]):ke(l[y]);x(null,C,u,h,v,b,w,A,I)}},lt=(l,u,h,v,b,w,A)=>{const I=u.el=l.el;let{patchFlag:P,dynamicChildren:y,dirs:C}=u;P|=l.patchFlag&16;const W=l.props||ee,L=u.props||ee;let k;if(h&&ut(h,!1),(k=L.onVnodeBeforeUpdate)&&Oe(k,h,u,l),C&&ct(u,l,h,"beforeUpdate"),h&&ut(h,!0),(W.innerHTML&&L.innerHTML==null||W.textContent&&L.textContent==null)&&d(I,""),y?We(l.dynamicChildren,y,I,h,v,Nn(u,b),w):A||$(l,u,I,null,h,v,Nn(u,b),w,!1),P>0){if(P&16)ze(I,W,L,h,b);else if(P&2&&W.class!==L.class&&r(I,"class",null,L.class,b),P&4&&r(I,"style",W.style,L.style,b),P&8){const G=u.dynamicProps;for(let Y=0;Y<G.length;Y++){const q=G[Y],ie=W[q],Se=L[q];(Se!==ie||q==="value")&&r(I,q,ie,Se,b,h)}}P&1&&l.children!==u.children&&d(I,u.children)}else!A&&y==null&&ze(I,W,L,h,b);((k=L.onVnodeUpdated)||C)&&pe(()=>{k&&Oe(k,h,u,l),C&&ct(u,l,h,"updated")},v)},We=(l,u,h,v,b,w,A)=>{for(let I=0;I<u.length;I++){const P=l[I],y=u[I],C=P.el&&(P.type===se||!Mt(P,y)||P.shapeFlag&70)?p(P.el):h;x(P,y,C,null,v,b,w,A,!0)}},ze=(l,u,h,v,b)=>{if(u!==h){if(u!==ee)for(const w in u)!kt(w)&&!(w in h)&&r(l,w,u[w],null,b,v);for(const w in h){if(kt(w))continue;const A=h[w],I=u[w];A!==I&&w!=="value"&&r(l,w,I,A,b,v)}"value"in h&&r(l,"value",u.value,h.value,b)}},at=(l,u,h,v,b,w,A,I,P)=>{const y=u.el=l?l.el:c(""),C=u.anchor=l?l.anchor:c("");let{patchFlag:W,dynamicChildren:L,slotScopeIds:k}=u;k&&(I=I?I.concat(k):k),l==null?(o(y,h,v),o(C,h,v),Ie(u.children||[],h,C,b,w,A,I,P)):W>0&&W&64&&L&&l.dynamicChildren?(We(l.dynamicChildren,L,h,b,w,A,I),(u.key!=null||b&&u===b.subTree)&&wr(l,u,!0)):$(l,u,h,C,b,w,A,I,P)},Ne=(l,u,h,v,b,w,A,I,P)=>{u.slotScopeIds=I,l==null?u.shapeFlag&512?b.ctx.activate(u,h,v,A,P):Wt(u,h,v,b,w,A,P):vt(l,u,P)},Wt=(l,u,h,v,b,w,A)=>{const I=l.component=Nl(l,v,b);if(lr(l)&&(I.ctx.renderer=D),Ml(I,!1,A),I.asyncDep){if(b&&b.registerDep(I,re,A),!l.el){const P=I.subTree=V(zt);U(null,P,u,h)}}else re(I,l,u,h,b,w,A)},vt=(l,u,h)=>{const v=u.component=l.component;if(Il(l,u,h))if(v.asyncDep&&!v.asyncResolved){Z(v,u,h);return}else v.next=u,Li(v.update),v.effect.dirty=!0,v.update();else u.el=l.el,v.vnode=u},re=(l,u,h,v,b,w,A)=>{const I=()=>{if(l.isMounted){let{next:C,bu:W,u:L,parent:k,vnode:G}=l;{const It=Ir(l);if(It){C&&(C.el=G.el,Z(l,C,A)),It.asyncDep.then(()=>{l.isUnmounted||I()});return}}let Y=C,q;ut(l,!1),C?(C.el=G.el,Z(l,C,A)):C=G,W&&Ln(W),(q=C.props&&C.props.onVnodeBeforeUpdate)&&Oe(q,k,C,G),ut(l,!0);const ie=Mn(l),Se=l.subTree;l.subTree=ie,x(Se,ie,p(Se.el),_(Se),l,b,w),C.el=ie.el,Y===null&&Pl(l,ie.el),L&&pe(L,b),(q=C.props&&C.props.onVnodeUpdated)&&pe(()=>Oe(q,k,C,G),b)}else{let C;const{el:W,props:L}=u,{bm:k,m:G,parent:Y}=l,q=an(u);if(ut(l,!1),k&&Ln(k),!q&&(C=L&&L.onVnodeBeforeMount)&&Oe(C,Y,u),ut(l,!0),W&&X){const ie=()=>{l.subTree=Mn(l),X(W,l.subTree,l,b,null)};q?u.type.__asyncLoader().then(()=>!l.isUnmounted&&ie()):ie()}else{const ie=l.subTree=Mn(l);x(null,ie,h,v,l,b,w),u.el=ie.el}if(G&&pe(G,b),!q&&(C=L&&L.onVnodeMounted)){const ie=u;pe(()=>Oe(C,Y,ie),b)}(u.shapeFlag&256||Y&&an(Y.vnode)&&Y.vnode.shapeFlag&256)&&l.a&&pe(l.a,b),l.isMounted=!0,u=h=v=null}},P=l.effect=new ao(I,Te,()=>bo(y),l.scope),y=l.update=()=>{P.dirty&&P.run()};y.i=l,y.id=l.uid,ut(l,!0),y()},Z=(l,u,h)=>{u.component=l;const v=l.vnode.props;l.vnode=u,l.next=null,sl(l,u.props,v,h),al(l,u.children,h),rt(),Oo(l),it()},$=(l,u,h,v,b,w,A,I,P=!1)=>{const y=l&&l.children,C=l?l.shapeFlag:0,W=u.children,{patchFlag:L,shapeFlag:k}=u;if(L>0){if(L&128){Je(y,W,h,v,b,w,A,I,P);return}else if(L&256){Ge(y,W,h,v,b,w,A,I,P);return}}k&8?(C&16&&Pe(y,b,w),W!==y&&d(h,W)):C&16?k&16?Je(y,W,h,v,b,w,A,I,P):Pe(y,b,w,!0):(C&8&&d(h,""),k&16&&Ie(W,h,v,b,w,A,I,P))},Ge=(l,u,h,v,b,w,A,I,P)=>{l=l||At,u=u||At;const y=l.length,C=u.length,W=Math.min(y,C);let L;for(L=0;L<W;L++){const k=u[L]=P?Xe(u[L]):ke(u[L]);x(l[L],k,h,null,b,w,A,I,P)}y>C?Pe(l,b,w,!0,!1,W):Ie(u,h,v,b,w,A,I,P,W)},Je=(l,u,h,v,b,w,A,I,P)=>{let y=0;const C=u.length;let W=l.length-1,L=C-1;for(;y<=W&&y<=L;){const k=l[y],G=u[y]=P?Xe(u[y]):ke(u[y]);if(Mt(k,G))x(k,G,h,null,b,w,A,I,P);else break;y++}for(;y<=W&&y<=L;){const k=l[W],G=u[L]=P?Xe(u[L]):ke(u[L]);if(Mt(k,G))x(k,G,h,null,b,w,A,I,P);else break;W--,L--}if(y>W){if(y<=L){const k=L+1,G=k<C?u[k].el:v;for(;y<=L;)x(null,u[y]=P?Xe(u[y]):ke(u[y]),h,G,b,w,A,I,P),y++}}else if(y>L)for(;y<=W;)de(l[y],b,w,!0),y++;else{const k=y,G=y,Y=new Map;for(y=G;y<=L;y++){const _e=u[y]=P?Xe(u[y]):ke(u[y]);_e.key!=null&&Y.set(_e.key,y)}let q,ie=0;const Se=L-G+1;let It=!1,So=0;const Nt=new Array(Se);for(y=0;y<Se;y++)Nt[y]=0;for(y=k;y<=W;y++){const _e=l[y];if(ie>=Se){de(_e,b,w,!0);continue}let Ue;if(_e.key!=null)Ue=Y.get(_e.key);else for(q=G;q<=L;q++)if(Nt[q-G]===0&&Mt(_e,u[q])){Ue=q;break}Ue===void 0?de(_e,b,w,!0):(Nt[Ue-G]=y+1,Ue>=So?So=Ue:It=!0,x(_e,u[Ue],h,null,b,w,A,I,P),ie++)}const Co=It?hl(Nt):At;for(q=Co.length-1,y=Se-1;y>=0;y--){const _e=G+y,Ue=u[_e],xo=_e+1<C?u[_e+1].el:v;Nt[y]===0?x(null,Ue,h,xo,b,w,A,I,P):It&&(q<0||y!==Co[q]?Me(Ue,h,xo,2):q--)}}},Me=(l,u,h,v,b=null)=>{const{el:w,type:A,transition:I,children:P,shapeFlag:y}=l;if(y&6){Me(l.component.subTree,u,h,v);return}if(y&128){l.suspense.move(u,h,v);return}if(y&64){A.move(l,u,h,D);return}if(A===se){o(w,u,h);for(let W=0;W<P.length;W++)Me(P[W],u,h,v);o(l.anchor,u,h);return}if(A===fn){E(l,u,h);return}if(v!==2&&y&1&&I)if(v===0)I.beforeEnter(w),o(w,u,h),pe(()=>I.enter(w),b);else{const{leave:W,delayLeave:L,afterLeave:k}=I,G=()=>o(w,u,h),Y=()=>{W(w,()=>{G(),k&&k()})};L?L(w,G,Y):Y()}else o(w,u,h)},de=(l,u,h,v=!1,b=!1)=>{const{type:w,props:A,ref:I,children:P,dynamicChildren:y,shapeFlag:C,patchFlag:W,dirs:L,cacheIndex:k}=l;if(W===-2&&(b=!1),I!=null&&Qn(I,null,h,l,!0),k!=null&&(u.renderCache[k]=void 0),C&256){u.ctx.deactivate(l);return}const G=C&1&&L,Y=!an(l);let q;if(Y&&(q=A&&A.onVnodeBeforeUnmount)&&Oe(q,u,l),C&6)Xt(l.component,h,v);else{if(C&128){l.suspense.unmount(h,v);return}G&&ct(l,null,u,"beforeUnmount"),C&64?l.type.remove(l,u,h,D,v):y&&!y.hasOnce&&(w!==se||W>0&&W&64)?Pe(y,u,h,!1,!0):(w===se&&W&384||!b&&C&16)&&Pe(P,u,h),v&&yt(l)}(Y&&(q=A&&A.onVnodeUnmounted)||G)&&pe(()=>{q&&Oe(q,u,l),G&&ct(l,null,u,"unmounted")},h)},yt=l=>{const{type:u,el:h,anchor:v,transition:b}=l;if(u===se){wt(h,v);return}if(u===fn){j(l);return}const w=()=>{s(h),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(l.shapeFlag&1&&b&&!b.persisted){const{leave:A,delayLeave:I}=b,P=()=>A(h,w);I?I(l.el,w,P):P()}else w()},wt=(l,u)=>{let h;for(;l!==u;)h=m(l),s(l),l=h;s(u)},Xt=(l,u,h)=>{const{bum:v,scope:b,update:w,subTree:A,um:I,m:P,a:y}=l;Vo(P),Vo(y),v&&Ln(v),b.stop(),w&&(w.active=!1,de(A,l,u,h)),I&&pe(I,u),pe(()=>{l.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Pe=(l,u,h,v=!1,b=!1,w=0)=>{for(let A=w;A<l.length;A++)de(l[A],u,h,v,b)},_=l=>{if(l.shapeFlag&6)return _(l.component.subTree);if(l.shapeFlag&128)return l.suspense.next();const u=m(l.anchor||l.el),h=u&&u[cl];return h?m(h):u};let S=!1;const T=(l,u,h)=>{l==null?u._vnode&&de(u._vnode,null,null,!0):x(u._vnode||null,l,u,null,null,null,h),u._vnode=l,S||(S=!0,Oo(),or(),S=!1)},D={p:x,um:de,m:Me,r:yt,mt:Wt,mc:Ie,pc:$,pbc:We,n:_,o:e};let J,X;return{render:T,hydrate:J,createApp:nl(T,J)}}function Nn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function ut({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function pl(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function wr(e,t,n=!1){const o=e.children,s=t.children;if(O(o)&&O(s))for(let r=0;r<o.length;r++){const i=o[r];let c=s[r];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[r]=Xe(s[r]),c.el=i.el),!n&&c.patchFlag!==-2&&wr(i,c)),c.type===Cn&&(c.el=i.el)}}function hl(e){const t=e.slice(),n=[0];let o,s,r,i,c;const a=e.length;for(o=0;o<a;o++){const f=e[o];if(f!==0){if(s=n[n.length-1],e[s]<f){t[o]=s,n.push(o);continue}for(r=0,i=n.length-1;r<i;)c=r+i>>1,e[n[c]]<f?r=c+1:i=c;f<e[n[r]]&&(r>0&&(t[o]=n[r-1]),n[r]=o)}}for(r=n.length,i=n[r-1];r-- >0;)n[r]=i,i=t[i];return n}function Ir(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ir(t)}function Vo(e){if(e)for(let t=0;t<e.length;t++)e[t].active=!1}const ml=Symbol.for("v-scx"),gl=()=>$e(ml),rn={};function un(e,t,n){return Pr(e,t,n)}function Pr(e,t,{immediate:n,deep:o,flush:s,once:r,onTrack:i,onTrigger:c}=ee){if(t&&r){const B=t;t=(...ne)=>{B(...ne),oe()}}const a=ce,f=B=>o===!0?B:dt(B,o===!1?1:void 0);let d,p=!1,m=!1;if(ge(e)?(d=()=>e.value,p=xt(e)):Ht(e)?(d=()=>f(e),p=!0):O(e)?(m=!0,p=e.some(B=>Ht(B)||xt(B)),d=()=>e.map(B=>{if(ge(B))return B.value;if(Ht(B))return f(B);if(H(B))return nt(B,a,2)})):H(e)?t?d=()=>nt(e,a,2):d=()=>(g&&g(),De(e,a,3,[R])):d=Te,t&&o){const B=d;d=()=>dt(B())}let g,R=B=>{g=E.onStop=()=>{nt(B,a,4),g=E.onStop=void 0}},x;if(xn)if(R=Te,t?n&&De(t,a,3,[d(),m?[]:void 0,R]):d(),s==="sync"){const B=gl();x=B.__watcherHandles||(B.__watcherHandles=[])}else return Te;let F=m?new Array(e.length).fill(rn):rn;const U=()=>{if(!(!E.active||!E.dirty))if(t){const B=E.run();(o||p||(m?B.some((ne,Ie)=>ot(ne,F[Ie])):ot(B,F)))&&(g&&g(),De(t,a,3,[B,F===rn?void 0:m&&F[0]===rn?[]:F,R]),F=B)}else E.run()};U.allowRecurse=!!t;let M;s==="sync"?M=U:s==="post"?M=()=>pe(U,a&&a.suspense):(U.pre=!0,a&&(U.id=a.uid),M=()=>bo(U));const E=new ao(d,Te,M),j=ri(),oe=()=>{E.stop(),j&&so(j.effects,E)};return t?n?U():F=E.run():s==="post"?pe(E.run.bind(E),a&&a.suspense):E.run(),x&&x.push(oe),oe}function bl(e,t,n){const o=this.proxy,s=le(e)?e.includes(".")?Ar(o,e):()=>o[e]:e.bind(o,o);let r;H(t)?r=t:(r=t.handler,n=t);const i=Yt(this),c=Pr(s,r.bind(o),n);return i(),c}function Ar(e,t){const n=t.split(".");return()=>{let o=e;for(let s=0;s<n.length&&o;s++)o=o[n[s]];return o}}function dt(e,t=1/0,n){if(t<=0||!te(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,ge(e))dt(e.value,t,n);else if(O(e))for(let o=0;o<e.length;o++)dt(e[o],t,n);else if(As(e)||Tt(e))e.forEach(o=>{dt(o,t,n)});else if(Cs(e)){for(const o in e)dt(e[o],t,n);for(const o of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,o)&&dt(e[o],t,n)}return e}const _l=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Le(t)}Modifiers`]||e[`${bt(t)}Modifiers`];function vl(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||ee;let s=n;const r=t.startsWith("update:"),i=r&&_l(o,t.slice(7));i&&(i.trim&&(s=n.map(d=>le(d)?d.trim():d)),i.number&&(s=n.map(Qr)));let c,a=o[c=Dn(t)]||o[c=Dn(Le(t))];!a&&r&&(a=o[c=Dn(bt(t))]),a&&De(a,e,6,s);const f=o[c+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,De(f,e,6,s)}}function Tr(e,t,n=!1){const o=t.emitsCache,s=o.get(e);if(s!==void 0)return s;const r=e.emits;let i={},c=!1;if(!H(e)){const a=f=>{const d=Tr(f,t,!0);d&&(c=!0,ue(i,d))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!r&&!c?(te(e)&&o.set(e,null),null):(O(r)?r.forEach(a=>i[a]=null):ue(i,r),te(e)&&o.set(e,i),i)}function Sn(e,t){return!e||!bn(t)?!1:(t=t.slice(2).replace(/Once$/,""),K(e,t[0].toLowerCase()+t.slice(1))||K(e,bt(t))||K(e,t))}function Mn(e){const{type:t,vnode:n,proxy:o,withProxy:s,propsOptions:[r],slots:i,attrs:c,emit:a,render:f,renderCache:d,props:p,data:m,setupState:g,ctx:R,inheritAttrs:x}=e,F=hn(e);let U,M;try{if(n.shapeFlag&4){const j=s||o,oe=j;U=ke(f.call(oe,j,d,p,g,m,R)),M=c}else{const j=t;U=ke(j.length>1?j(p,{attrs:c,slots:i,emit:a}):j(p,null)),M=t.props?c:yl(c)}}catch(j){Bt.length=0,Pn(j,e,1),U=V(zt)}let E=U;if(M&&x!==!1){const j=Object.keys(M),{shapeFlag:oe}=E;j.length&&oe&7&&(r&&j.some(oo)&&(M=wl(M,r)),E=Et(E,M,!1,!0))}return n.dirs&&(E=Et(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),U=E,hn(F),U}const yl=e=>{let t;for(const n in e)(n==="class"||n==="style"||bn(n))&&((t||(t={}))[n]=e[n]);return t},wl=(e,t)=>{const n={};for(const o in e)(!oo(o)||!(o.slice(9)in t))&&(n[o]=e[o]);return n};function Il(e,t,n){const{props:o,children:s,component:r}=e,{props:i,children:c,patchFlag:a}=t,f=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return o?jo(o,i,f):!!i;if(a&8){const d=t.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(i[m]!==o[m]&&!Sn(f,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:o===i?!1:o?i?jo(o,i,f):!0:!!i;return!1}function jo(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let s=0;s<o.length;s++){const r=o[s];if(t[r]!==e[r]&&!Sn(n,r))return!0}return!1}function Pl({vnode:e,parent:t},n){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.el=e.el),o===e)(e=t.vnode).el=n,t=t.parent;else break}}const Al=e=>e.__isSuspense;function Tl(e,t){t&&t.pendingBranch?O(e)?t.effects.push(...e):t.effects.push(e):Ri(e)}const se=Symbol.for("v-fgt"),Cn=Symbol.for("v-txt"),zt=Symbol.for("v-cmt"),fn=Symbol.for("v-stc"),Bt=[];let ve=null;function be(e=!1){Bt.push(ve=e?null:[])}function Sl(){Bt.pop(),ve=Bt[Bt.length-1]||null}let Jt=1;function $o(e){Jt+=e,e<0&&ve&&(ve.hasOnce=!0)}function Sr(e){return e.dynamicChildren=Jt>0?ve||At:null,Sl(),Jt>0&&ve&&ve.push(e),e}function ye(e,t,n,o,s,r){return Sr(N(e,t,n,o,s,r,!0))}function Cl(e,t,n,o,s){return Sr(V(e,t,n,o,s,!0))}function Zn(e){return e?e.__v_isVNode===!0:!1}function Mt(e,t){return e.type===t.type&&e.key===t.key}const Cr=({key:e})=>e??null,dn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?le(e)||ge(e)||H(e)?{i:Ee,r:e,k:t,f:!!n}:e:null);function N(e,t=null,n=null,o=0,s=null,r=e===se?0:1,i=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Cr(t),ref:t&&dn(t),scopeId:An,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:o,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ee};return c?(yo(a,n),r&128&&e.normalize(a)):n&&(a.shapeFlag|=le(n)?8:16),Jt>0&&!i&&ve&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&ve.push(a),a}const V=xl;function xl(e,t=null,n=null,o=0,s=null,r=!1){if((!e||e===qi)&&(e=zt),Zn(e)){const c=Et(e,t,!0);return n&&yo(c,n),Jt>0&&!r&&ve&&(c.shapeFlag&6?ve[ve.indexOf(e)]=c:ve.push(c)),c.patchFlag=-2,c}if(Fl(e)&&(e=e.__vccOpts),t){t=El(t);let{class:c,style:a}=t;c&&!le(c)&&(t.class=lo(c)),te(a)&&(qs(a)&&!O(a)&&(a=ue({},a)),t.style=io(a))}const i=le(e)?1:Al(e)?128:ul(e)?64:te(e)?4:H(e)?2:0;return N(e,t,n,o,s,i,r,!0)}function El(e){return e?qs(e)||hr(e)?ue({},e):e:null}function Et(e,t,n=!1,o=!1){const{props:s,ref:r,patchFlag:i,children:c,transition:a}=e,f=t?Ll(s||{},t):s,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&Cr(f),ref:t&&t.ref?n&&r?O(r)?r.concat(dn(t)):[r,dn(t)]:dn(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==se?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Et(e.ssContent),ssFallback:e.ssFallback&&Et(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&o&&rr(d,a.clone(d)),d}function he(e=" ",t=0){return V(Cn,null,e,t)}function Dl(e,t){const n=V(fn,null,e);return n.staticCount=t,n}function ke(e){return e==null||typeof e=="boolean"?V(zt):O(e)?V(se,null,e.slice()):typeof e=="object"?Xe(e):V(Cn,null,String(e))}function Xe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Et(e)}function yo(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(O(t))n=16;else if(typeof t=="object")if(o&65){const s=t.default;s&&(s._c&&(s._d=!1),yo(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!hr(t)?t._ctx=Ee:s===3&&Ee&&(Ee.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else H(t)?(t={default:t,_ctx:Ee},n=32):(t=String(t),o&64?(n=16,t=[he(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ll(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const s in o)if(s==="class")t.class!==o.class&&(t.class=lo([t.class,o.class]));else if(s==="style")t.style=io([t.style,o.style]);else if(bn(s)){const r=t[s],i=o[s];i&&r!==i&&!(O(r)&&r.includes(i))&&(t[s]=r?[].concat(r,i):i)}else s!==""&&(t[s]=o[s])}return t}function Oe(e,t,n,o=null){De(e,t,7,[n,o])}const Rl=fr();let Wl=0;function Nl(e,t,n){const o=e.type,s=(t?t.appContext:e.appContext)||Rl,r={uid:Wl++,vnode:e,type:o,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ws(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gr(o,s),emitsOptions:Tr(o,s),emit:null,emitted:null,propsDefaults:ee,inheritAttrs:o.inheritAttrs,ctx:ee,data:ee,props:ee,attrs:ee,slots:ee,refs:ee,setupState:ee,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=vl.bind(null,r),e.ce&&e.ce(r),r}let ce=null,gn,Yn;{const e=Es(),t=(n,o)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(o),r=>{s.length>1?s.forEach(i=>i(r)):s[0](r)}};gn=t("__VUE_INSTANCE_SETTERS__",n=>ce=n),Yn=t("__VUE_SSR_SETTERS__",n=>xn=n)}const Yt=e=>{const t=ce;return gn(e),e.scope.on(),()=>{e.scope.off(),gn(t)}},qo=()=>{ce&&ce.scope.off(),gn(null)};function xr(e){return e.vnode.shapeFlag&4}let xn=!1;function Ml(e,t=!1,n=!1){t&&Yn(t);const{props:o,children:s}=e.vnode,r=xr(e);ol(e,o,r,t),ll(e,s,n);const i=r?Ul(e,t):void 0;return t&&Yn(!1),i}function Ul(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ji);const{setup:o}=n;if(o){const s=e.setupContext=o.length>1?kl(e):null,r=Yt(e);rt();const i=nt(o,e,0,[e.props,s]);if(it(),r(),Ts(i)){if(i.then(qo,qo),t)return i.then(c=>{zo(e,c,t)}).catch(c=>{Pn(c,e,0)});e.asyncDep=i}else zo(e,i,t)}else Er(e,t)}function zo(e,t,n){H(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:te(t)&&(e.setupState=Xs(t)),Er(e,n)}let Jo;function Er(e,t,n){const o=e.type;if(!e.render){if(!t&&Jo&&!o.render){const s=o.template||_o(e).template;if(s){const{isCustomElement:r,compilerOptions:i}=e.appContext.config,{delimiters:c,compilerOptions:a}=o,f=ue(ue({isCustomElement:r,delimiters:c},i),a);o.render=Jo(s,f)}}e.render=o.render||Te}{const s=Yt(e);rt();try{Qi(e)}finally{it(),s()}}}const Ol={get(e,t){return me(e,"get",""),e[t]}};function kl(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Ol),slots:e.slots,emit:e.emit,expose:t}}function wo(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Xs(zs(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ft)return Ft[n](e)},has(t,n){return n in t||n in Ft}})):e.proxy}function Hl(e,t=!0){return H(e)?e.displayName||e.name:e.name||t&&e.__name}function Fl(e){return H(e)&&"__vccOpts"in e}const xe=(e,t)=>Ti(e,t,xn);function Dr(e,t,n){const o=arguments.length;return o===2?te(t)&&!O(t)?Zn(t)?V(e,null,[t]):V(e,t):V(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&Zn(n)&&(n=[n]),V(e,t,n))}const Bl="3.4.38";/**
* @vue/runtime-dom v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Gl="http://www.w3.org/2000/svg",Kl="http://www.w3.org/1998/Math/MathML",Ve=typeof document<"u"?document:null,Qo=Ve&&Ve.createElement("template"),Vl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const s=t==="svg"?Ve.createElementNS(Gl,e):t==="mathml"?Ve.createElementNS(Kl,e):n?Ve.createElement(e,{is:n}):Ve.createElement(e);return e==="select"&&o&&o.multiple!=null&&s.setAttribute("multiple",o.multiple),s},createText:e=>Ve.createTextNode(e),createComment:e=>Ve.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ve.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,o,s,r){const i=n?n.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Qo.innerHTML=o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e;const c=Qo.content;if(o==="svg"||o==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}t.insertBefore(c,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},jl=Symbol("_vtc");function $l(e,t,n){const o=e[jl];o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Zo=Symbol("_vod"),ql=Symbol("_vsh"),zl=Symbol(""),Jl=/(^|;)\s*display\s*:/;function Ql(e,t,n){const o=e.style,s=le(n);let r=!1;if(n&&!s){if(t)if(le(t))for(const i of t.split(";")){const c=i.slice(0,i.indexOf(":")).trim();n[c]==null&&pn(o,c,"")}else for(const i in t)n[i]==null&&pn(o,i,"");for(const i in n)i==="display"&&(r=!0),pn(o,i,n[i])}else if(s){if(t!==n){const i=o[zl];i&&(n+=";"+i),o.cssText=n,r=Jl.test(n)}}else t&&e.removeAttribute("style");Zo in e&&(e[Zo]=r?o.display:"",e[ql]&&(o.display="none"))}const Yo=/\s*!important$/;function pn(e,t,n){if(O(n))n.forEach(o=>pn(e,t,o));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const o=Zl(e,t);Yo.test(n)?e.setProperty(bt(o),n.replace(Yo,""),"important"):e[o]=n}}const Xo=["Webkit","Moz","ms"],Un={};function Zl(e,t){const n=Un[t];if(n)return n;let o=Le(t);if(o!=="filter"&&o in e)return Un[t]=o;o=yn(o);for(let s=0;s<Xo.length;s++){const r=Xo[s]+o;if(r in e)return Un[t]=r}return t}const es="http://www.w3.org/1999/xlink";function ts(e,t,n,o,s,r=ni(t)){o&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(es,t.slice(6,t.length)):e.setAttributeNS(es,t,n):n==null||r&&!Ds(n)?e.removeAttribute(t):e.setAttribute(t,r?"":st(n)?String(n):n)}function Yl(e,t,n,o){if(t==="innerHTML"||t==="textContent"){if(n==null)return;e[t]=n;return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const i=s==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?"":String(n);(i!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let r=!1;if(n===""||n==null){const i=typeof e[t];i==="boolean"?n=Ds(n):n==null&&i==="string"?(n="",r=!0):i==="number"&&(n=0,r=!0)}try{e[t]=n}catch{}r&&e.removeAttribute(t)}function Xl(e,t,n,o){e.addEventListener(t,n,o)}function ea(e,t,n,o){e.removeEventListener(t,n,o)}const ns=Symbol("_vei");function ta(e,t,n,o,s=null){const r=e[ns]||(e[ns]={}),i=r[t];if(o&&i)i.value=o;else{const[c,a]=na(t);if(o){const f=r[t]=ra(o,s);Xl(e,c,f,a)}else i&&(ea(e,c,i,a),r[t]=void 0)}}const os=/(?:Once|Passive|Capture)$/;function na(e){let t;if(os.test(e)){t={};let o;for(;o=e.match(os);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):bt(e.slice(2)),t]}let On=0;const oa=Promise.resolve(),sa=()=>On||(oa.then(()=>On=0),On=Date.now());function ra(e,t){const n=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=n.attached)return;De(ia(o,n.value),t,5,[o])};return n.value=e,n.attached=sa(),n}function ia(e,t){if(O(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(o=>s=>!s._stopped&&o&&o(s))}else return t}const ss=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,la=(e,t,n,o,s,r)=>{const i=s==="svg";t==="class"?$l(e,o,i):t==="style"?Ql(e,n,o):bn(t)?oo(t)||ta(e,t,n,o,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):aa(e,t,o,i))?(Yl(e,t,o),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ts(e,t,o,i,r,t!=="value")):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),ts(e,t,o,i))};function aa(e,t,n,o){if(o)return!!(t==="innerHTML"||t==="textContent"||t in e&&ss(t)&&H(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ss(t)&&le(n)?!1:t in e}const ca=ue({patchProp:la},Vl);let rs;function ua(){return rs||(rs=fl(ca))}const fa=(...e)=>{const t=ua().createApp(...e),{mount:n}=t;return t.mount=o=>{const s=pa(o);if(!s)return;const r=t._component;!H(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const i=n(s,!1,da(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),i},t};function da(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function pa(e){return le(e)?document.querySelector(e):e}var ha=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const ma=Symbol();var is;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(is||(is={}));function ga(){const e=oi(!0),t=e.run(()=>Zs({}));let n=[],o=[];const s=zs({install(r){s._a=r,r.provide(ma,s),r.config.globalProperties.$pinia=s,o.forEach(i=>n.push(i)),o=[]},use(r){return!this._a&&!ha?o.push(r):n.push(r),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Pt=typeof document<"u";function ba(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Q=Object.assign;function kn(e,t){const n={};for(const o in t){const s=t[o];n[o]=Re(s)?s.map(e):e(s)}return n}const Gt=()=>{},Re=Array.isArray,Lr=/#/g,_a=/&/g,va=/\//g,ya=/=/g,wa=/\?/g,Rr=/\+/g,Ia=/%5B/g,Pa=/%5D/g,Wr=/%5E/g,Aa=/%60/g,Nr=/%7B/g,Ta=/%7C/g,Mr=/%7D/g,Sa=/%20/g;function Io(e){return encodeURI(""+e).replace(Ta,"|").replace(Ia,"[").replace(Pa,"]")}function Ca(e){return Io(e).replace(Nr,"{").replace(Mr,"}").replace(Wr,"^")}function Xn(e){return Io(e).replace(Rr,"%2B").replace(Sa,"+").replace(Lr,"%23").replace(_a,"%26").replace(Aa,"`").replace(Nr,"{").replace(Mr,"}").replace(Wr,"^")}function xa(e){return Xn(e).replace(ya,"%3D")}function Ea(e){return Io(e).replace(Lr,"%23").replace(wa,"%3F")}function Da(e){return e==null?"":Ea(e).replace(va,"%2F")}function Qt(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const La=/\/$/,Ra=e=>e.replace(La,"");function Hn(e,t,n="/"){let o,s={},r="",i="";const c=t.indexOf("#");let a=t.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(o=t.slice(0,a),r=t.slice(a+1,c>-1?c:t.length),s=e(r)),c>-1&&(o=o||t.slice(0,c),i=t.slice(c,t.length)),o=Ua(o??t,n),{fullPath:o+(r&&"?")+r+i,path:o,query:s,hash:Qt(i)}}function Wa(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ls(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Na(e,t,n){const o=t.matched.length-1,s=n.matched.length-1;return o>-1&&o===s&&Dt(t.matched[o],n.matched[s])&&Ur(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Dt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ur(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Ma(e[n],t[n]))return!1;return!0}function Ma(e,t){return Re(e)?as(e,t):Re(t)?as(t,e):e===t}function as(e,t){return Re(t)?e.length===t.length&&e.every((n,o)=>n===t[o]):e.length===1&&e[0]===t}function Ua(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),o=e.split("/"),s=o[o.length-1];(s===".."||s===".")&&o.push("");let r=n.length-1,i,c;for(i=0;i<o.length;i++)if(c=o[i],c!==".")if(c==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+o.slice(i).join("/")}const Ze={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Zt;(function(e){e.pop="pop",e.push="push"})(Zt||(Zt={}));var Kt;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Kt||(Kt={}));function Oa(e){if(!e)if(Pt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Ra(e)}const ka=/^[^#]+#/;function Ha(e,t){return e.replace(ka,"#")+t}function Fa(e,t){const n=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:t.behavior,left:o.left-n.left-(t.left||0),top:o.top-n.top-(t.top||0)}}const En=()=>({left:window.scrollX,top:window.scrollY});function Ba(e){let t;if("el"in e){const n=e.el,o=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?o?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Fa(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function cs(e,t){return(history.state?history.state.position-t:-1)+e}const eo=new Map;function Ga(e,t){eo.set(e,t)}function Ka(e){const t=eo.get(e);return eo.delete(e),t}let Va=()=>location.protocol+"//"+location.host;function Or(e,t){const{pathname:n,search:o,hash:s}=t,r=e.indexOf("#");if(r>-1){let c=s.includes(e.slice(r))?e.slice(r).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),ls(a,"")}return ls(n,e)+o+s}function ja(e,t,n,o){let s=[],r=[],i=null;const c=({state:m})=>{const g=Or(e,location),R=n.value,x=t.value;let F=0;if(m){if(n.value=g,t.value=m,i&&i===R){i=null;return}F=x?m.position-x.position:0}else o(g);s.forEach(U=>{U(n.value,R,{delta:F,type:Zt.pop,direction:F?F>0?Kt.forward:Kt.back:Kt.unknown})})};function a(){i=n.value}function f(m){s.push(m);const g=()=>{const R=s.indexOf(m);R>-1&&s.splice(R,1)};return r.push(g),g}function d(){const{history:m}=window;m.state&&m.replaceState(Q({},m.state,{scroll:En()}),"")}function p(){for(const m of r)m();r=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:a,listen:f,destroy:p}}function us(e,t,n,o=!1,s=!1){return{back:e,current:t,forward:n,replaced:o,position:window.history.length,scroll:s?En():null}}function $a(e){const{history:t,location:n}=window,o={value:Or(e,n)},s={value:t.state};s.value||r(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(a,f,d){const p=e.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+a:Va()+e+a;try{t[d?"replaceState":"pushState"](f,"",m),s.value=f}catch(g){console.error(g),n[d?"replace":"assign"](m)}}function i(a,f){const d=Q({},t.state,us(s.value.back,a,s.value.forward,!0),f,{position:s.value.position});r(a,d,!0),o.value=a}function c(a,f){const d=Q({},s.value,t.state,{forward:a,scroll:En()});r(d.current,d,!0);const p=Q({},us(o.value,a,null),{position:d.position+1},f);r(a,p,!1),o.value=a}return{location:o,state:s,push:c,replace:i}}function qa(e){e=Oa(e);const t=$a(e),n=ja(e,t.state,t.location,t.replace);function o(r,i=!0){i||n.pauseListeners(),history.go(r)}const s=Q({location:"",base:e,go:o,createHref:Ha.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function za(e){return typeof e=="string"||e&&typeof e=="object"}function kr(e){return typeof e=="string"||typeof e=="symbol"}const Hr=Symbol("");var fs;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(fs||(fs={}));function Lt(e,t){return Q(new Error,{type:e,[Hr]:!0},t)}function Ke(e,t){return e instanceof Error&&Hr in e&&(t==null||!!(e.type&t))}const ds="[^/]+?",Ja={sensitive:!1,strict:!1,start:!0,end:!0},Qa=/[.+*?^${}()[\]/\\]/g;function Za(e,t){const n=Q({},Ja,t),o=[];let s=n.start?"^":"";const r=[];for(const f of e){const d=f.length?[]:[90];n.strict&&!f.length&&(s+="/");for(let p=0;p<f.length;p++){const m=f[p];let g=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(Qa,"\\$&"),g+=40;else if(m.type===1){const{value:R,repeatable:x,optional:F,regexp:U}=m;r.push({name:R,repeatable:x,optional:F});const M=U||ds;if(M!==ds){g+=10;try{new RegExp(`(${M})`)}catch(j){throw new Error(`Invalid custom RegExp for param "${R}" (${M}): `+j.message)}}let E=x?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;p||(E=F&&f.length<2?`(?:/${E})`:"/"+E),F&&(E+="?"),s+=E,g+=20,F&&(g+=-8),x&&(g+=-20),M===".*"&&(g+=-50)}d.push(g)}o.push(d)}if(n.strict&&n.end){const f=o.length-1;o[f][o[f].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const i=new RegExp(s,n.sensitive?"":"i");function c(f){const d=f.match(i),p={};if(!d)return null;for(let m=1;m<d.length;m++){const g=d[m]||"",R=r[m-1];p[R.name]=g&&R.repeatable?g.split("/"):g}return p}function a(f){let d="",p=!1;for(const m of e){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const g of m)if(g.type===0)d+=g.value;else if(g.type===1){const{value:R,repeatable:x,optional:F}=g,U=R in f?f[R]:"";if(Re(U)&&!x)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const M=Re(U)?U.join("/"):U;if(!M)if(F)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${R}"`);d+=M}}return d||"/"}return{re:i,score:o,keys:r,parse:c,stringify:a}}function Ya(e,t){let n=0;for(;n<e.length&&n<t.length;){const o=t[n]-e[n];if(o)return o;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Fr(e,t){let n=0;const o=e.score,s=t.score;for(;n<o.length&&n<s.length;){const r=Ya(o[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-o.length)===1){if(ps(o))return 1;if(ps(s))return-1}return s.length-o.length}function ps(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Xa={type:0,value:""},ec=/[a-zA-Z0-9_]/;function tc(e){if(!e)return[[]];if(e==="/")return[[Xa]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${f}": ${g}`)}let n=0,o=n;const s=[];let r;function i(){r&&s.push(r),r=[]}let c=0,a,f="",d="";function p(){f&&(n===0?r.push({type:0,value:f}):n===1||n===2||n===3?(r.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:f,regexp:d,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),f="")}function m(){f+=a}for(;c<e.length;){if(a=e[c++],a==="\\"&&n!==2){o=n,n=4;continue}switch(n){case 0:a==="/"?(f&&p(),i()):a===":"?(p(),n=1):m();break;case 4:m(),n=o;break;case 1:a==="("?n=2:ec.test(a)?m():(p(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+a:n=3:d+=a;break;case 3:p(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,d="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),p(),i(),s}function nc(e,t,n){const o=Za(tc(e.path),n),s=Q(o,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function oc(e,t){const n=[],o=new Map;t=gs({strict:!1,end:!0,sensitive:!1},t);function s(p){return o.get(p)}function r(p,m,g){const R=!g,x=sc(p);x.aliasOf=g&&g.record;const F=gs(t,p),U=[x];if("alias"in p){const j=typeof p.alias=="string"?[p.alias]:p.alias;for(const oe of j)U.push(Q({},x,{components:g?g.record.components:x.components,path:oe,aliasOf:g?g.record:x}))}let M,E;for(const j of U){const{path:oe}=j;if(m&&oe[0]!=="/"){const B=m.record.path,ne=B[B.length-1]==="/"?"":"/";j.path=m.record.path+(oe&&ne+oe)}if(M=nc(j,m,F),g?g.alias.push(M):(E=E||M,E!==M&&E.alias.push(M),R&&p.name&&!ms(M)&&i(p.name)),Br(M)&&a(M),x.children){const B=x.children;for(let ne=0;ne<B.length;ne++)r(B[ne],M,g&&g.children[ne])}g=g||M}return E?()=>{i(E)}:Gt}function i(p){if(kr(p)){const m=o.get(p);m&&(o.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(i),m.alias.forEach(i))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&o.delete(p.record.name),p.children.forEach(i),p.alias.forEach(i))}}function c(){return n}function a(p){const m=lc(p,n);n.splice(m,0,p),p.record.name&&!ms(p)&&o.set(p.record.name,p)}function f(p,m){let g,R={},x,F;if("name"in p&&p.name){if(g=o.get(p.name),!g)throw Lt(1,{location:p});F=g.record.name,R=Q(hs(m.params,g.keys.filter(E=>!E.optional).concat(g.parent?g.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),p.params&&hs(p.params,g.keys.map(E=>E.name))),x=g.stringify(R)}else if(p.path!=null)x=p.path,g=n.find(E=>E.re.test(x)),g&&(R=g.parse(x),F=g.record.name);else{if(g=m.name?o.get(m.name):n.find(E=>E.re.test(m.path)),!g)throw Lt(1,{location:p,currentLocation:m});F=g.record.name,R=Q({},m.params,p.params),x=g.stringify(R)}const U=[];let M=g;for(;M;)U.unshift(M.record),M=M.parent;return{name:F,path:x,params:R,matched:U,meta:ic(U)}}e.forEach(p=>r(p));function d(){n.length=0,o.clear()}return{addRoute:r,resolve:f,removeRoute:i,clearRoutes:d,getRoutes:c,getRecordMatcher:s}}function hs(e,t){const n={};for(const o of t)o in e&&(n[o]=e[o]);return n}function sc(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:rc(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function rc(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const o in e.components)t[o]=typeof n=="object"?n[o]:n;return t}function ms(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ic(e){return e.reduce((t,n)=>Q(t,n.meta),{})}function gs(e,t){const n={};for(const o in e)n[o]=o in t?t[o]:e[o];return n}function lc(e,t){let n=0,o=t.length;for(;n!==o;){const r=n+o>>1;Fr(e,t[r])<0?o=r:n=r+1}const s=ac(e);return s&&(o=t.lastIndexOf(s,o-1)),o}function ac(e){let t=e;for(;t=t.parent;)if(Br(t)&&Fr(e,t)===0)return t}function Br({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function cc(e){const t={};if(e===""||e==="?")return t;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<o.length;++s){const r=o[s].replace(Rr," "),i=r.indexOf("="),c=Qt(i<0?r:r.slice(0,i)),a=i<0?null:Qt(r.slice(i+1));if(c in t){let f=t[c];Re(f)||(f=t[c]=[f]),f.push(a)}else t[c]=a}return t}function bs(e){let t="";for(let n in e){const o=e[n];if(n=xa(n),o==null){o!==void 0&&(t+=(t.length?"&":"")+n);continue}(Re(o)?o.map(r=>r&&Xn(r)):[o&&Xn(o)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function uc(e){const t={};for(const n in e){const o=e[n];o!==void 0&&(t[n]=Re(o)?o.map(s=>s==null?null:""+s):o==null?o:""+o)}return t}const fc=Symbol(""),_s=Symbol(""),Po=Symbol(""),Gr=Symbol(""),to=Symbol("");function Ut(){let e=[];function t(o){return e.push(o),()=>{const s=e.indexOf(o);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function et(e,t,n,o,s,r=i=>i()){const i=o&&(o.enterCallbacks[s]=o.enterCallbacks[s]||[]);return()=>new Promise((c,a)=>{const f=m=>{m===!1?a(Lt(4,{from:n,to:t})):m instanceof Error?a(m):za(m)?a(Lt(2,{from:t,to:m})):(i&&o.enterCallbacks[s]===i&&typeof m=="function"&&i.push(m),c())},d=r(()=>e.call(o&&o.instances[s],t,n,f));let p=Promise.resolve(d);e.length<3&&(p=p.then(f)),p.catch(m=>a(m))})}function Fn(e,t,n,o,s=r=>r()){const r=[];for(const i of e)for(const c in i.components){let a=i.components[c];if(!(t!=="beforeRouteEnter"&&!i.instances[c]))if(dc(a)){const d=(a.__vccOpts||a)[t];d&&r.push(et(d,n,o,i,c,s))}else{let f=a();r.push(()=>f.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${i.path}"`));const p=ba(d)?d.default:d;i.components[c]=p;const g=(p.__vccOpts||p)[t];return g&&et(g,n,o,i,c,s)()}))}}return r}function dc(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function vs(e){const t=$e(Po),n=$e(Gr),o=xe(()=>{const a=mt(e.to);return t.resolve(a)}),s=xe(()=>{const{matched:a}=o.value,{length:f}=a,d=a[f-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(Dt.bind(null,d));if(m>-1)return m;const g=ys(a[f-2]);return f>1&&ys(d)===g&&p[p.length-1].path!==g?p.findIndex(Dt.bind(null,a[f-2])):m}),r=xe(()=>s.value>-1&&gc(n.params,o.value.params)),i=xe(()=>s.value>-1&&s.value===n.matched.length-1&&Ur(n.params,o.value.params));function c(a={}){return mc(a)?t[mt(e.replace)?"replace":"push"](mt(e.to)).catch(Gt):Promise.resolve()}return{route:o,href:xe(()=>o.value.href),isActive:r,isExactActive:i,navigate:c}}const pc=ir({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:vs,setup(e,{slots:t}){const n=In(vs(e)),{options:o}=$e(Po),s=xe(()=>({[ws(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[ws(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&t.default(n);return e.custom?r:Dr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),hc=pc;function mc(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function gc(e,t){for(const n in t){const o=t[n],s=e[n];if(typeof o=="string"){if(o!==s)return!1}else if(!Re(s)||s.length!==o.length||o.some((r,i)=>r!==s[i]))return!1}return!0}function ys(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ws=(e,t,n)=>e??t??n,bc=ir({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const o=$e(to),s=xe(()=>e.route||o.value),r=$e(_s,0),i=xe(()=>{let f=mt(r);const{matched:d}=s.value;let p;for(;(p=d[f])&&!p.components;)f++;return f}),c=xe(()=>s.value.matched[i.value]);cn(_s,xe(()=>i.value+1)),cn(fc,c),cn(to,s);const a=Zs();return un(()=>[a.value,c.value,e.name],([f,d,p],[m,g,R])=>{d&&(d.instances[p]=f,g&&g!==d&&f&&f===m&&(d.leaveGuards.size||(d.leaveGuards=g.leaveGuards),d.updateGuards.size||(d.updateGuards=g.updateGuards))),f&&d&&(!g||!Dt(d,g)||!m)&&(d.enterCallbacks[p]||[]).forEach(x=>x(f))},{flush:"post"}),()=>{const f=s.value,d=e.name,p=c.value,m=p&&p.components[d];if(!m)return Is(n.default,{Component:m,route:f});const g=p.props[d],R=g?g===!0?f.params:typeof g=="function"?g(f):g:null,F=Dr(m,Q({},R,t,{onVnodeUnmounted:U=>{U.component.isUnmounted&&(p.instances[d]=null)},ref:a}));return Is(n.default,{Component:F,route:f})||F}}});function Is(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Kr=bc;function _c(e){const t=oc(e.routes,e),n=e.parseQuery||cc,o=e.stringifyQuery||bs,s=e.history,r=Ut(),i=Ut(),c=Ut(),a=Si(Ze);let f=Ze;Pt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=kn.bind(null,_=>""+_),p=kn.bind(null,Da),m=kn.bind(null,Qt);function g(_,S){let T,D;return kr(_)?(T=t.getRecordMatcher(_),D=S):D=_,t.addRoute(D,T)}function R(_){const S=t.getRecordMatcher(_);S&&t.removeRoute(S)}function x(){return t.getRoutes().map(_=>_.record)}function F(_){return!!t.getRecordMatcher(_)}function U(_,S){if(S=Q({},S||a.value),typeof _=="string"){const u=Hn(n,_,S.path),h=t.resolve({path:u.path},S),v=s.createHref(u.fullPath);return Q(u,h,{params:m(h.params),hash:Qt(u.hash),redirectedFrom:void 0,href:v})}let T;if(_.path!=null)T=Q({},_,{path:Hn(n,_.path,S.path).path});else{const u=Q({},_.params);for(const h in u)u[h]==null&&delete u[h];T=Q({},_,{params:p(u)}),S.params=p(S.params)}const D=t.resolve(T,S),J=_.hash||"";D.params=d(m(D.params));const X=Wa(o,Q({},_,{hash:Ca(J),path:D.path})),l=s.createHref(X);return Q({fullPath:X,hash:J,query:o===bs?uc(_.query):_.query||{}},D,{redirectedFrom:void 0,href:l})}function M(_){return typeof _=="string"?Hn(n,_,a.value.path):Q({},_)}function E(_,S){if(f!==_)return Lt(8,{from:S,to:_})}function j(_){return ne(_)}function oe(_){return j(Q(M(_),{replace:!0}))}function B(_){const S=_.matched[_.matched.length-1];if(S&&S.redirect){const{redirect:T}=S;let D=typeof T=="function"?T(_):T;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=M(D):{path:D},D.params={}),Q({query:_.query,hash:_.hash,params:D.path!=null?{}:_.params},D)}}function ne(_,S){const T=f=U(_),D=a.value,J=_.state,X=_.force,l=_.replace===!0,u=B(T);if(u)return ne(Q(M(u),{state:typeof u=="object"?Q({},J,u.state):J,force:X,replace:l}),S||T);const h=T;h.redirectedFrom=S;let v;return!X&&Na(o,D,T)&&(v=Lt(16,{to:h,from:D}),Me(D,D,!0,!1)),(v?Promise.resolve(v):We(h,D)).catch(b=>Ke(b)?Ke(b,2)?b:Je(b):$(b,h,D)).then(b=>{if(b){if(Ke(b,2))return ne(Q({replace:l},M(b.to),{state:typeof b.to=="object"?Q({},J,b.to.state):J,force:X}),S||h)}else b=at(h,D,!0,l,J);return ze(h,D,b),b})}function Ie(_,S){const T=E(_,S);return T?Promise.reject(T):Promise.resolve()}function lt(_){const S=wt.values().next().value;return S&&typeof S.runWithContext=="function"?S.runWithContext(_):_()}function We(_,S){let T;const[D,J,X]=vc(_,S);T=Fn(D.reverse(),"beforeRouteLeave",_,S);for(const u of D)u.leaveGuards.forEach(h=>{T.push(et(h,_,S))});const l=Ie.bind(null,_,S);return T.push(l),Pe(T).then(()=>{T=[];for(const u of r.list())T.push(et(u,_,S));return T.push(l),Pe(T)}).then(()=>{T=Fn(J,"beforeRouteUpdate",_,S);for(const u of J)u.updateGuards.forEach(h=>{T.push(et(h,_,S))});return T.push(l),Pe(T)}).then(()=>{T=[];for(const u of X)if(u.beforeEnter)if(Re(u.beforeEnter))for(const h of u.beforeEnter)T.push(et(h,_,S));else T.push(et(u.beforeEnter,_,S));return T.push(l),Pe(T)}).then(()=>(_.matched.forEach(u=>u.enterCallbacks={}),T=Fn(X,"beforeRouteEnter",_,S,lt),T.push(l),Pe(T))).then(()=>{T=[];for(const u of i.list())T.push(et(u,_,S));return T.push(l),Pe(T)}).catch(u=>Ke(u,8)?u:Promise.reject(u))}function ze(_,S,T){c.list().forEach(D=>lt(()=>D(_,S,T)))}function at(_,S,T,D,J){const X=E(_,S);if(X)return X;const l=S===Ze,u=Pt?history.state:{};T&&(D||l?s.replace(_.fullPath,Q({scroll:l&&u&&u.scroll},J)):s.push(_.fullPath,J)),a.value=_,Me(_,S,T,l),Je()}let Ne;function Wt(){Ne||(Ne=s.listen((_,S,T)=>{if(!Xt.listening)return;const D=U(_),J=B(D);if(J){ne(Q(J,{replace:!0}),D).catch(Gt);return}f=D;const X=a.value;Pt&&Ga(cs(X.fullPath,T.delta),En()),We(D,X).catch(l=>Ke(l,12)?l:Ke(l,2)?(ne(l.to,D).then(u=>{Ke(u,20)&&!T.delta&&T.type===Zt.pop&&s.go(-1,!1)}).catch(Gt),Promise.reject()):(T.delta&&s.go(-T.delta,!1),$(l,D,X))).then(l=>{l=l||at(D,X,!1),l&&(T.delta&&!Ke(l,8)?s.go(-T.delta,!1):T.type===Zt.pop&&Ke(l,20)&&s.go(-1,!1)),ze(D,X,l)}).catch(Gt)}))}let vt=Ut(),re=Ut(),Z;function $(_,S,T){Je(_);const D=re.list();return D.length?D.forEach(J=>J(_,S,T)):console.error(_),Promise.reject(_)}function Ge(){return Z&&a.value!==Ze?Promise.resolve():new Promise((_,S)=>{vt.add([_,S])})}function Je(_){return Z||(Z=!_,Wt(),vt.list().forEach(([S,T])=>_?T(_):S()),vt.reset()),_}function Me(_,S,T,D){const{scrollBehavior:J}=e;if(!Pt||!J)return Promise.resolve();const X=!T&&Ka(cs(_.fullPath,0))||(D||!T)&&history.state&&history.state.scroll||null;return tr().then(()=>J(_,S,X)).then(l=>l&&Ba(l)).catch(l=>$(l,_,S))}const de=_=>s.go(_);let yt;const wt=new Set,Xt={currentRoute:a,listening:!0,addRoute:g,removeRoute:R,clearRoutes:t.clearRoutes,hasRoute:F,getRoutes:x,resolve:U,options:e,push:j,replace:oe,go:de,back:()=>de(-1),forward:()=>de(1),beforeEach:r.add,beforeResolve:i.add,afterEach:c.add,onError:re.add,isReady:Ge,install(_){const S=this;_.component("RouterLink",hc),_.component("RouterView",Kr),_.config.globalProperties.$router=S,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>mt(a)}),Pt&&!yt&&a.value===Ze&&(yt=!0,j(s.location).catch(J=>{}));const T={};for(const J in Ze)Object.defineProperty(T,J,{get:()=>a.value[J],enumerable:!0});_.provide(Po,S),_.provide(Gr,js(T)),_.provide(to,a);const D=_.unmount;wt.add(_),_.unmount=function(){wt.delete(_),wt.size<1&&(f=Ze,Ne&&Ne(),Ne=null,a.value=Ze,yt=!1,Z=!1),D()}}};function Pe(_){return _.reduce((S,T)=>S.then(()=>lt(T)),Promise.resolve())}return Xt}function vc(e,t){const n=[],o=[],s=[],r=Math.max(t.matched.length,e.matched.length);for(let i=0;i<r;i++){const c=t.matched[i];c&&(e.matched.find(f=>Dt(f,c))?o.push(c):n.push(c));const a=e.matched[i];a&&(t.matched.find(f=>Dt(f,a))||s.push(a))}return[n,o,s]}const we=(e,t)=>{const n=e.__vccOpts||e;for(const[o,s]of t)n[o]=s;return n},yc={__name:"App",setup(e){return(t,n)=>(be(),Cl(mt(Kr)))}},wc=we(yc,[["__scopeId","data-v-0b57781d"]]),Ic={class:"app-header"},Pc={class:"container"},Ac={class:"app-header-nav",style:{"list-style":"none"}},Tc={__name:"LayoutHeader",setup(e){return(t,n)=>{const o=qt("RouterLink");return be(),ye("header",Ic,[N("div",Pc,[N("ul",Ac,[N("li",null,[V(o,{to:"/"},{default:Ae(()=>[he("WebAPI")]),_:1})]),N("li",null,[V(o,{to:"/vue3"},{default:Ae(()=>[he("Vue3")]),_:1})]),N("li",null,[V(o,{to:"/download"},{default:Ae(()=>[he("下載")]),_:1})]),N("li",null,[V(o,{to:"/others"},{default:Ae(()=>[he("其他")]),_:1})]),N("li",null,[V(o,{to:"/dotnet7_vue3"},{default:Ae(()=>[he("Dotnet7_vue3")]),_:1})])])])])}}},Sc=we(Tc,[["__scopeId","data-v-abd018af"]]),Cc=N("hr",null,null,-1),xc={__name:"index",setup(e){return(t,n)=>{const o=qt("RouterView");return be(),ye(se,null,[V(Sc),Cc,V(o)],64)}}},Ec="/vue-my-note/assets/uparrow-CelNzM_b.png",Dc={name:"scroll-top",data(){return{scrollTop:0,time:0,dParams:20,scrollState:0}},computed:{showTop:function(){return this.scrollTop>200}},mounted(){window.addEventListener("scroll",this.getScrollTop)},methods:{toTop(e){if(this.scrollState)return;this.scrollState=1,e.preventDefault(),document.documentElement.scrollTop||document.body.scrollTop;let t=this;this.time=setInterval(function(){t.gotoTop(t.scrollTop-t.dParams)},30)},gotoTop(e){this.dParams+=20,e=e>0?e:0,document.documentElement.scrollTop=document.body.scrollTop=window.pageYOffset=e,this.scrollTop<10&&(clearInterval(this.time),this.dParams=20,this.scrollState=0)},getScrollTop(){this.scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop}}},Lc=e=>(Fe("data-v-77d80545"),e=e(),Be(),e),Rc=Lc(()=>N("img",{src:Ec},null,-1)),Wc=[Rc];function Nc(e,t,n,o,s,r){return be(),ye("div",{class:"scrollTop",onClick:t[0]||(t[0]=(...i)=>r.toTop&&r.toTop(...i))},Wc)}const Rt=we(Dc,[["render",Nc],["__scopeId","data-v-77d80545"]]),Mc=e=>(Fe("data-v-e16ba16f"),e=e(),Be(),e),Uc=Mc(()=>N("div",null,"我是WebAPI頁面",-1)),Oc=`
    <div id="content" style="display:flex; justify-content: center; background-color: #282923; color:#c1cccc; font-size: 14px;">
    
    <pre>
      <h2 style="display:flex; justify-content: center" >ASP.NET Core Web API 入門教學</h2>
          <a href="https://www.youtube.com/watch?v=eEn_K2nlWaA&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=1" target="_blank">
          1.【1.基本環境介紹】ASP.NET Core Web API 入門教學(1_1) - 開發環境安裝</a>
          <a href="https://www.youtube.com/watch?v=EpJhItI8ubA&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=2" target="_blank">
          2.【1.基本環境介紹】ASP.NET Core Web API 入門教學(1_2) - 創建第一支HelloWorld API</a>
          <a href="https://www.youtube.com/watch?v=EpJhItI8ubA&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=3" target="_blank">
          3.【1.基本環境介紹】ASP.NET Core Web API 入門教學(1_3) - 開發環境基本介紹</a>
          <a href="https://www.youtube.com/watch?v=EpJhItI8ubA&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=4" target="_blank">
          4.【2.事前必備知識】ASP.NET Core Web API 入門教學(2_1) - RESTful API基本觀念與Postman基本操作</a>
          <a href="https://www.youtube.com/watch?v=FSHGaeYUIuI&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=5" target="_blank">
          5.【2.事前必備知識】ASP.NET Core Web API 入門教學(2_2) - LINQ基本教學，以後資料庫操作都靠它</a>
          <a href="https://www.youtube.com/watch?v=h_dtiQ57dWI&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=6" target="_blank">
          6.【2.事前必備知識】ASP.NET Core Web API 入門教學(2_3) - SQL Server安裝教學及設定TCP/IP教學</a>
          <a href="https://www.youtube.com/watch?v=4LPXVT-Sm14&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=7" target="_blank">
          7.【2.事前必備知識】ASP.NET Core Web API 入門教學(2_4) - SQL Server Management Studio基本操作</a>
            uniqueidentifier
            (newid())
          <a href="https://www.youtube.com/watch?v=fYshqezjB28&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=8" target="_blank">
          8.【3.建立與資料庫連線】ASP.NET Core Web API 入門教學(3_1) - Entity Framework Core資料庫連線，使用Database First</a>
          <a href="https://www.youtube.com/watch?v=ibnJfPB76t8&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=9" target="_blank">
          9.【3.建立與資料庫連線】ASP.NET Core Web API 入門教學(3_2) - Entity Framework Core資料庫連線，使用Code First</a>
          <a href="https://www.youtube.com/watch?v=Ka01qBapPHw&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=10" target="_blank">
          10.【3.建立與資料庫連線】ASP.NET Core Web API 入門教學(3_3) - Entity Framework Core資料庫連線，使用MySQL設定方式</a>
          <a href="https://www.youtube.com/watch?v=OPPlXJzMrdw&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=11" target="_blank">
          11.【3.建立與資料庫連線】ASP.NET Core Web API 入門教學(3_4) - Entity Framework Core資料庫連線，使用MongoDB設定方式</a>
          <a href="https://www.youtube.com/watch?v=-zcYrfxZfKk&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=12" target="_blank">
          12.【4.取得資料GET】ASP.NET Core Web API 入門教學(4_1) - 取得資料列表與DTO</a>
          <a href="https://www.youtube.com/watch?v=jwPpVIBDk78&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=13" target="_blank">
          13.【4.取得資料GET】ASP.NET Core Web API 入門教學(4_2) - 取得指定資料</a>
          <a href="https://www.youtube.com/watch?v=EzMJP7i9Gxc&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=14" target="_blank">
          14.【4.取得資料GET】ASP.NET Core Web API 入門教學(4_3) - 關鍵字搜尋</a>
          <a href="https://www.youtube.com/watch?v=E5qYptn31D4&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=15" target="_blank">
          15.【4.取得資料GET】ASP.NET Core Web API 入門教學(4_3) - 參數化並過濾接受值</a>
          <a href="https://www.youtube.com/watch?v=eOx9Nrvr6hA&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=16" target="_blank">
          16.【4.取得資料GET】ASP.NET Core Web API 入門教學(4_4) - From之常用來源標籤功能用法介紹</a>
          <a href="https://www.youtube.com/watch?v=WVplD95kXnk&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=17" target="_blank">
          17.【4.取得資料GET】ASP.NET Core Web API 入門教學(4_5) - 將DTO轉換部分函式化</a>
          <a href="https://www.youtube.com/watch?v=Zrziyw-LN7I&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=18" target="_blank">
          18.【4.取得資料GET】ASP.NET Core Web API 入門教學(4_6) - 使用AutoMapper自動對應Dto欄位</a>
              //Program.cs
              builder.Services.AddAutoMapper(typeof(TodoListProfile));
          
              //TodoListController.cs
              var map = _mapper.Map<IEnumerable<TodoListDto>>(result);
          <a href="https://www.youtube.com/watch?v=Igm8Ho-WA0g&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=19" target="_blank">
          19.【4.取得資料GET】ASP.NET Core Web API 入門教學(4_7) - 同時取得父子資料</a>
          
            autoMapper要做profile檔案
          <a href="https://www.youtube.com/watch?v=RhrjVASX2Uc&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=20" target="_blank">
          20.【4.取得資料GET】ASP.NET Core Web API 入門教學(4_8) - DbContext取得資料庫資料</a>
            一次組好sql, 再抓取資料庫，避免一直重覆讀取
          <a href="https://www.youtube.com/watch?v=VkmoPovJNAo&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=21" target="_blank">
          21.【4.取得資料GET】ASP.NET Core Web API 入門教學(4_9) - 讀取資料之好想用SQL語法阿,小心SQL Injection
          <a href="https://www.youtube.com/watch?v=Ekp8DdOuGY4&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=22" target="_blank">
          22.【4.取得資料GET】ASP.NET Core Web API 入門教學(4_10) - 使用Dto並用FromSqlRaw讀取出來</a>
            有成功
          <a href="https://www.youtube.com/watch?v=uelo5mbdckc&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=23" target="_blank">
          23.【4.取得資料GET】ASP.NET Core Web API 入門教學(4_11) - 自行擴充DbContext之ExecSQL用法功能</a>
          <a href="https://www.youtube.com/watch?v=m23QBnEppxg&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=24" target="_blank">
          24.【4.取得資料GET】ASP.NET Core Web API 入門教學(4_12) - 使用ActionResult返回資料</a>
            NotFound
            return Ok(result.ToList().Select(a => ItemToDto(a)));
            NoContent
          
            public ActionResult<TodoListDto> Get(Guid id)
            return ItemToDto(result); // 加上<TodoListDto>，就可以不用打上Ok
          <a href="https://www.youtube.com/watch?v=Jk0satrh-TM&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=25" target="_blank">
          25.【4.取得資料GET】ASP.NET Core Web API 入門教學(4_13) - 複習示範,取得子資料</a>
          <a href="https://www.youtube.com/watch?v=mEJ-jxQSwaQ&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=26" target="_blank">
          26.【5.新增資料POST】ASP.NET Core Web API 入門教學(5_1) - 新增資料</a>  
              [HttpPost]
                  public void Post([FromBody] TodoList value)
                  {
                TodoList insert = new TodoList
                      {
                          Name = value.Name,
                          Enable = value.Enable,
                          Orders = value.Orders,
                          InsertTime = DateTime.Now,
                          UpdateTime = DateTime.Now,
                          InsertEmployeeId = Guid.Parse("8840a700-35a4-4301-93aa-f172a28a7583"),
                          UpdateEmployeeId = Guid.Parse("63F8FD9D-E045-4C78-A491-96EABE1D2024"),
                      };
                      //_todoContext.Add(value); // 會自動
                _todoContext.TodoList.Add(value);
                      _todoContext.SaveChanges();
                  }
          <a href="https://www.youtube.com/watch?v=5l2sSjoQKr8&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=27" target="_blank">
          27.【5.新增資料POST】ASP.NET Core Web API 入門教學(5_2) - 新增子資料和同時新增父子資料</a>  
          <a href="https://www.youtube.com/watch?v=_tjibfkWgrk&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=28" target="_blank">
          28.【5.新增資料POST】ASP.NET Core Web API 入門教學(5_3) - 沒設外鍵時同時新增父子</a>  
          <a href="https://www.youtube.com/watch?v=L-v1eH9N7zQ&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=29" target="_blank">
          29.【5.新增資料POST】ASP.NET Core Web API 入門教學(5_4) - 使用DTO新增資料</a>
          <a href="https://www.youtube.com/watch?v=zNPcrjAB4Ag&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=30" target="_blank">
          30.【5.新增資料POST】ASP.NET Core Web API 入門教學(5_5) - 使用AutoMapper新增資</a>
          <a href="https://www.youtube.com/watch?v=fOHJR1yTZag&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=31" target="_blank">
          31.【5.新增資料POST】ASP.NET Core Web API 入門教學(5_6) - 使用內建函式匹配新增資源</a>  
            不使用autoMapper，可以使用CurrentValues.SetValues()
          
            _todoContext.TodoLists.Add(insert);
            _todoContext.SaveChanges();
            
            CurrentValues.SetValues(value)
            子資料，必須用for 迴圈，一筆一筆新增
            但，autoMapper做好設定檔，就可以自動匹配新增
          <a href="https://www.youtube.com/watch?v=EL0gmEfDpy4&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=32" target="_blank">
          32.【5.新增資料POST】ASP.NET Core Web API 入門教學(5_7) - 新增資料之好想用SQL,一樣要小心SQL Injection</a>  
            _todoContext.Database.ExecuteSqlRaw(sql);
            
            // 避免Sql injection
            var name = new SqlParameter("name", value.Name); // 解決SQL Injection
            
            string sql = @"INSERT INOT...() VALUES (@name, '"+DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")+"', 
            '"+DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")+"')
            
            _todoContext.Database.ExecuteSqlRaw(sql, name);
          <a href="https://www.youtube.com/watch?v=gk_5-_x_s9Y&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=33" target="_blank">  
          33.【5.新增資料POST】ASP.NET Core Web API 入門教學(5_8) - 資料驗證</a>  
            
          <a href="https://www.youtube.com/watch?v=h4izTuvQTno&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=34" target="_blank">  
          34.【5.新增資料POST】ASP.NET Core Web API 入門教學(5_9) - 新增資料後返回符合規範的內容</a>  
            return CreatedAtAction(nameof(GetOne), new {TodoId = insert.TodoId}, insert);
          <a href="https://www.youtube.com/watch?v=wkOeuyNnodU&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=35" target="_blank">
          35.【6.更新資料PUT與PATCH】ASP.NET Core Web API 入門教學(6_1) - 使用PUT更新資料</a>  
          
            [HttpPut("{id}")]
            public void Put(Guid id, [FromBody] TodoList value)
            {
              //_todoContext.Entry(value).State = EntityState.Modified; // 效果是一樣的
              //_todoContext.TodoList.Update(value);
              //_todoContext.SaveChanges();
              
              var update = _todoContext.TodoLists.Find(id);//
              var update = (from a in _todoContext.TodoLists
                      where a.TodoId = id
                      select a).SingleOrDefault();
              if(update != null)
              {
                update.InsertTime = DateTime.Now;
                update.UpdateTime = DateTime.Now;
                update.InsertEmployeeId = Guid.Parse("8840a700-35a4-4301-93aa-f172a28a7583");
                update.UpdateEmployeeId = Guid.Parse("63F8FD9D-E045-4C78-A491-96EABE1D2024");
                
                update.Name = value.Name;
                upate.Orders = value.Orders;
                update.Enable = value.Enable;
                
                _todoContext.SaveChanges();
              }
          <a href="https://www.youtube.com/watch?v=6MRyTzg-zJo&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=36" target="_blank">
          36.【6.更新資料PUT與PATCH】ASP.NET Core Web API 入門教學(6_2) - 使用DTO更新資和架構思考</a>
          <a href="https://www.youtube.com/watch?v=3ASLB25wg_8&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=37" target="_blank">
          37.【6.更新資料PUT與PATCH】ASP.NET Core Web API 入門教學(6_3) - 使用AutoMapper更新資料</a>
            ☆對應檔的設定 
              TodoListProfile.cs
                CreateMap<TodoListPutDto, TodoList>()
                  .ForMember(
                    dest => dest.UpdateTime,
                    opt => opt.MapFrom(src => DateTime.Now)
                  )
                  .ForMember(
                    dest => dest.UpdateEmployeeId,
                    opt => opt.MapFrom(src => Guid.Parse("63F8FD9D-E045-4C78-A491-96EABE1D2024"))
                  );
                
                
              _mapper.Map(value, update);
              _todoContext.SaveChanges();
          <a href="https://www.youtube.com/watch?v=i1hSVuIyuCM&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=38" target="_blank">
          38.【6.更新資料PUT與PATCH】ASP.NET Core Web API 入門教學(6_4) - 使用內建函式匹配更新資料</a>		
              ------------------------------------
              不用autoMapper
              _todoContext.TodoLists.Update(update).CurrentValues.SetValues(value);
              _todoContext.SaveChanges();
          <a href="https://www.youtube.com/watch?v=zaqs8SZoWRc&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=39" target="_blank">
          39.【6.更新資料PUT與PATCH】ASP.NET Core Web API 入門教學(6_5) - 使用PATCH局部更新資料</a>
          
              很少使用。
          <a href="https://www.youtube.com/watch?v=MEh5WKFvTI0&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=40" target="_blank">    
          40.【6.更新資料PUT與PATCH】ASP.NET Core Web API 入門教學(6_6) - 更新資料後返回符合規範的內容</a>
              回傳 IActionResult
              
              if(id != value.TodoId)
              {
                return BadRequest();
                // return NotFound();
                // return NoContent();  //204
                // return Ok();  // 200
              }
          <a href="https://www.youtube.com/watch?v=Ujd3_O8k2-E&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=41" target="_blank">
          41.【7.刪除資料DELETE】ASP.NET Core Web API 入門教學(7_1) - 使用DELETE刪除資料</a>
            [HttpDelete("{id}")]
            public void Delete(Guid id)
            {
              var delete = (from a in _todoContext.TodoLists
                      where a.TodoId == id
                      select a).includes(c=>c.UploadFiles).SingleOrDefault();
              if(delete != null)
              {
                _todoContext.TodoLists.Remove(delete);
                _todoContext.SaveChanges();
              }
            }
          <a href="https://www.youtube.com/watch?v=0sqy4YbUfcM&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=42" target="_blank">
          42.【7.刪除資料DELETE】ASP.NET Core Web API 入門教學(7_2) - 刪除全部子資料</a>
            [HttpDelete("nofk/{id}")]
            public void NofkDelete(Guid id)
            {
              var child = from a in _todoContext.UploadFiles
                    where a.TodoId == id
                    select a;
          
              _todoContext.UploadFiles.RemoveRange(child);
              _todoContext.SaveChanges();
          
              var delete = (from a in _todoContext.TodoLists
                      where a.TodoId == id
                      select a).SingleOrDefault();
              if(delete != null)
              {
                _todoContext.TodoLists.Remove(delete);
                _todoContext.SaveChanges();
              }
            }
          <a href="https://www.youtube.com/watch?v=CPcL6cX3y0c&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=43" target="_blank">  
          43.【7.刪除資料DELETE】ASP.NET Core Web API 入門教學(7_3) - 刪除多筆指定資料</a>
            [HttpDelete("list/{ids}")]
            // public void Delete(List<Guid> id)
            public void Delete(string ids)
            {
              List<Guid> deleteList = JsonSerializer.Deserialize<List<Guid>>(ids);
          
              var delete = (from a in _todoContext.TodoList
                      where deleteList.Contains(a.TodoId)
                      select a).Include(c => c.UploadFiles);
          
              _todoContext.TodoList.RemoveRange(delete);
              _todoContext.SaveChanges();
            }	
          
          <a href="https://www.youtube.com/watch?v=uKfkMgPecDM&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=44" target="_blank">  
          44.【7.刪除資料DELETE】ASP.NET Core Web API 入門教學(7_4) - 刪除資料後返回符合規範的內容</a>
            [HttpDelete("{id}")]
            public IActionResult Delete(Guid id)
            {
              var delete = (from a in _todoContext.TodoLists
                      where a.TodoId == id
                      select a).includes(c=>c.UploadFiles).SingleOrDefault();
              if(delete == null)
              {
                return NotFound("找不到刪除的資源");
              }
              _todoContext.TodoLists.Remove(delete);
              _todoContext.SaveChanges();
          
              return NoCoutent(); // 204 成功了，但不回傳訊息
            }
          <a href="https://www.youtube.com/watch?v=bk4IdIb0W_I&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=45" target="_blank">
          45.【8.模型資料驗證】ASP.NET Core Web API 入門教學(8_1) - 自訂模型資料驗證標籤</a>
            新增一個資料夾，ValidationAttributes
          
            新增一個類別檔，TodoNameAttribute
            public class TotoNameAttribute: ValidationAttribute
            {
              protected override ValidationResult IsValid(object value, ValidationContext validationContext)
              {
                TodoContext _todoContext = validationContext.GetService(typeof(TodoContext));
          
                var name = (string)value;
          
                var findName = from a in _todoContext.TodoLists
                                where a.Name == name
                                select a;
          
                // 更新的時候，要排除自己，二次過濾(因為put會有問題)
                var dto = validationContext.ObjectInstance; // 抓到整個類別
                // 判斷今天進來的是post 還是 put
                if(dto.GetType() == typeof(TodoListPutDto)) //TodoListPutDto 再做二次過濾
                {
                  var dtoUpdate = (TodoListPutDto)dto; 
                  findName = findName.Where(a => a.TodoId != dtoUpdate.TodoId); // 把自己排除
                }
          
                if(findName.FirstOrDefault() != null)
                {
                  return new ValidationResult("已存在相同的代辦事項");
                }
                return ValidationResult.Success;
              }
            }
          
            //TodoListPostDto.cs
            [StartEnd]
            public class TodoListPostDto
            {
              // [TotoNameAttribute] // Attribute可以拿掉
              [TotoName]
              public string Name {get;set;}
          
            //....
            }
          
          <a href="https://www.youtube.com/watch?v=fethjeEzMU4&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=46" target="_blank">
          46.【8.模型資料驗證】ASP.NET Core Web API 入門教學(8_2) - 自訂類別模型資料驗證標籤和傳值</a>
              //新增一個類別檔，StartEndAttribute.cs
            public class StartEndAttribute: ValidationAttribute
            {
              protected override ValidationResult IsValid(object value, ValidationContext validationContext)
              {
                var st = (TodoListPostDto)value;
          
                if(st.StartTime >= st.EndTime)
                {
                  return new ValidationResult("開始時間不可以大於結束時間", new string[] {"time"});
                }
                return ValidationResult.Success;
              }
            }
          
              //新增一個類別檔，TestAttribute.cs
            public class TestAttribute: ValidationAttribute
            {
              private string _tvalue;
              public string Tvalue = "de1";
              public TestAttribute(string tvalue = "de")
              {
                _tvalue = tvalue;
              }
              protected override ValidationResult IsValid(object value, ValidationContext validationContext)
              {
                var st = (TodoListPostDto)value;
          
                // return new ValidationResult(_tvalue, new string[] {"tvalue"});
                return new ValidationResult(Tvalue, new string[] {"tvalue"});
              }
            }
          
          
              //TodoListPostDto.cs
            [StartEnd]
            // [Test("123")]
            [Test(Tvalue = "321")]
            public class TodoListPostDto
            {
              // [TotoNameAttribute]
              [TotoName]
              public string Name {get;set;}
          
            //....
            }
          
          <a href="https://www.youtube.com/watch?v=H6qPtifLb-0&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=47" target="_blank">
          47.【8.模型資料驗證】ASP.NET Core Web API 入門教學(8_3) - 類別內自訂屬性資料驗證</a>
          
            //TodoListPostDto.cs
            //...
            // public class TodoListPostDto: IValidatableObject
            // 要實作介面
          
            // 驗證邏輯，不用寫成標籤，直接寫在Dto裡面
            if(fineName.FirstOrDefault() != null)
            {
              yield return new ValidationResult("已存在相同的代辦事項", new string[]{"Name"});
            }
            // 繼續往下走
            if(StartTime >= EndTime)
            {
              yield return new ValidationResult("開始時間不可以大於結束時間", new string[]{"Time"});
            }
          <a href="https://www.youtube.com/watch?v=f_qdCpua_G8&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=48" target="_blank">
          48.【8.模型資料驗證】ASP.NET Core Web API 入門教學(8_4) - 繼承抽象化驗證資料類別</a>
            把PUT及POST共同的部份，寫成抽象化類別，再去繼承
            新增Abstracts\\TodoListEditDtoAbstract.cs
            把TodoListPostDto 通通剪下，貼上
          <a href="https://www.youtube.com/watch?v=DQxGDFZn_6Y&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=49" target="_blank">
          49.【9.使用DI依賴注入功能】ASP.NET Core Web API 入門教學(9_1) - 基本DI依賴注入用法_GET</a>
            主要目的，可以把程式拆分出去
            controller主要寫控制邏輯，商業邏輯就要拆分出去
            新增一個資料夾 Services\\TodoListService
          
            把原本在TodoController裡面Get的code，搬到TodoListService
            在programs.cs 加上
            builder.Services.AddScoped<TodoListService>();  // 注入
          
            商業邏輯-- 放在TodoListService.cs
            控制邏輯-- 放在TodoController.cs
            <a href="https://www.youtube.com/watch?v=Xy0sdbMDyCk&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=50" target="_blank">
          50.【9.使用DI依賴注入功能】ASP.NET Core Web API 入門教學(9_2) - 基本DI依賴注入用法_POST</a>
          <a href="https://www.youtube.com/watch?v=08Bsb9t7cLk&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=51" target="_blank">
          51.【9.使用DI依賴注入功能】ASP.NET Core Web API 入門教學(9_3) - 基本DI依賴注入用法_PUT、DELETE</a>
          <a href="https://www.youtube.com/watch?v=xpdly1Xdrmg&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=52" target="_blank">
          52.【9.使用DI依賴注入功能】ASP.NET Core Web API 入門教學(9_4) - DI依賴注入之生命週期</a>
            //prgram.cs
            builder.Services.AddScoped<TestDIService>();
            //每次注入時，都是一個新的實例
            builder.Services.AddSingleton<SingletonService>();
            //每個Request為同一個新的實例
            builder.Services.AddScoped<ScopedService>();
            //程式運行期間，只會有一個實例
            builder.Services.AddTransient<TransientService>();
          <a href="https://www.youtube.com/watch?v=oX9mixne0Rg&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=53" target="_blank">
          53.【9.使用DI依賴注入功能】ASP.NET Core Web API 入門教學(9_5) - DI_IoC用法</a>
            先建立一個Interface
            public interface ITodoListService
              {
                  List<TodoListDto> 取得資料(TodoSelectParameter value);
              }
            再寫2支Service, TodoLinqService, TodoAutoMapperService, 來繼承ITodoListService
          
            然後在programs.cs可以實現IOC
            //builder.Services.AddScoped<ITodoListService, TodoLinqService>();
            builder.Services.AddScoped<ITodoListService, TodoAutoMapperService>();
          
          <a href="https://www.youtube.com/watch?v=g5YixtianHo&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=54" target="_blank">
          54.【9.使用DI依賴注入功能】ASP.NET Core Web API 入門教學(9_6) - 同Interface依賴注入多個實作</a>
              //多個服務，可以在controller做篩選
              services.AddScoped<ITodoListService, TodoLinqService>();
              services.AddScoped<ITodoListService, TodoAutomapperService>();
          
              在TodoSelectParameter.cs加上 public string type { get; set; }
          
              在TodoListProfile.cs加上 
                      .ForMember(
                          dest => dest.Name,
                          opt => opt.MapFrom(src => src.Name + "(use automaper)")
                          );
              
              在ITotoListService.cs 加上 string type { get; set; }
          
              在TodoLinqService.cs 加上 public string type => "function";
              在TodoAutoMapperService 加上  public string type => "automapper";
          
              //TodoIOCController.cs
              [HttpGet]
              public List<TodoListDto> Get([FromQuery]TodoSelectParameter value)
              {
                ITodoListService _todo;
                if(value.type == "fun")
                {
                  _todo = _todoListService.Where(a => a.type == "function").Single();
                }
                else
                {
                  _todo = _todoListService.Where(a => a.type == "automapper").Single();
                }
                return _todo.取得資料(value);
              }
          <a href="https://www.youtube.com/watch?v=rNiQ1_pfnFM&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=55" target="_blank">
          55.【9.使用DI依賴注入功能】ASP.NET Core Web API 入門教學(9_7) - Service、Repository？</a>
          <a href="https://www.youtube.com/watch?v=ilhbNoNNH74&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=56" target="_blank">
          56.【10.上傳檔案API】ASP.NET Core Web API 入門教學(10_1) - 基本上傳檔案</a>
          <a href="https://www.youtube.com/watch?v=vz95-EPNgwM&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=57" target="_blank">
          57.【10.上傳檔案API】ASP.NET Core Web API 入門教學(10_2) - 上傳檔案與簡單傳值</a>
            // 要把靜態目錄設起來
            app.UseStaticFiles();
          
            [FromForm]Guid id 
          <a href="https://www.youtube.com/watch?v=y-LpayTszXU&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=58" target="_blank">
          58.【10.上傳檔案API】ASP.NET Core Web API 入門教學(10_3) - 使用ModelBinder處理FormData的Json字串並反序列化成對應類別物件</a>
            類別擴充器
            from data也可以接收到字串，自動轉成對應類別的物件
            主要的code是，檔案及Json用form-data一起上傳
            並沒有內建的json字串，自動轉成對應的類別
            所以自行寫一個擴充器，字串轉自動轉成對應的類別
            [ModelBinder(BinderType = typeof(FormDataJsonBinder))]
          <a href="https://www.youtube.com/watch?v=7j-cDtWCJk0&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=59" target="_blank">
          59.【11.理解非同步Async與Await】ASP.NET Core Web API 入門教學(11_1) - 非同步基本觀念寫法與實例解說用處</a>
          <a href="https://www.youtube.com/watch?v=Du27wrSd5sE&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=60" target="_blank">
          60.【11.理解非同步Async與Await】ASP.NET Core Web API 入門教學(11_2) - 改寫原程式成非同步和總結</a>
          <a href="https://www.youtube.com/watch?v=7vhKul20pbs&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=61" target="_blank">
          61.【12.身分驗證】ASP.NET Core Web API 入門教學(12_1) - 使用 cookie 驗證但不使用 ASP.NET Core Identity（實作登入登出）</a>
            
            [AllowAnonymous]
          
          <a href="https://www.youtube.com/watch?v=TCHqjhGvclU&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=62" target="_blank">
          62.【12.身分驗證】ASP.NET Core Web API 入門教學(12_2) - 身分驗證和登入期限</a>
          <a href="https://www.youtube.com/watch?v=anDihjKOb5w&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=63" target="_blank">
          63.【12.身分驗證】ASP.NET Core Web API 入門教學(12_3) - 取得登入使用者資訊與內建or自己打造閒談</a>
          <a href="https://www.youtube.com/watch?v=3LV0JAZbORQ&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=64" target="_blank">
          64.【12.身分驗證】ASP.NET Core Web API 入門教學(12_4) - JWT身分驗證</a>
          <a href="https://www.youtube.com/watch?v=6yrngToZE6w&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=65" target="_blank">
          65.【12.身分驗證】ASP.NET Core Web API 入門教學(12_5) - JWT登入後取得登入使用者資訊</a>
            // LoginController.cs
            new Claim(JwtRegisteredClaimNames.Email, user.Account),
          
            // TodoListService.cs
            //new Claim(JwtRegisteredClaimNames.Email, user.Account), 從這邊設定取得
            var email = _httpContextAccessor.HttpContext.User.FindFirst(ClaimTypes.Email).Value;
          <a href="https://www.youtube.com/watch?v=1_ir2gM7D_c&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=66" target="_blank">
          66.【13.Filter】ASP.NET Core Web API 入門教學(13_1) - Filter基本介紹</a>
            
            Authorization Filters - 驗證
            Resource Filters - 上傳檔案大小
            Action Filters - 使用者傳來的資料，做驗證
            Exception Filters - 發生錯誤，統一處理掛在全域，寫log
            Result Filters - 執行出來的結果，客製化回傳的結果
          <a href="https://www.youtube.com/watch?v=9cXUuql-__A&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=67" target="_blank">
          67.【13.Filter】ASP.NET Core Web API 入門教學(13_2) - AuthorizationFilter之自訂權限驗證</a>
          <a href="https://www.youtube.com/watch?v=XFkR101v3zI&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=68" target="_blank">
          68.【13.Filter】ASP.NET Core Web API 入門教學(13_3) - ResourceFilter之檢查檔案大小及副檔名</a>
          <a href="https://www.youtube.com/watch?v=uLpIwyq_B5g&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=69" target="_blank">
          69.【13.Filter】ASP.NET Core Web API 入門教學(13_4) - ActionFilter之Log紀錄</a>
          <a href="https://www.youtube.com/watch?v=0MogPVe_l3E&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=70" target="_blank">
          70.【13.Filter】ASP.NET Core Web API 入門教學(13_5) - ResultFilter之統一回傳格式紀錄</a>
          <a href="https://www.youtube.com/watch?v=gqDW63Tnq8c&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=71" target="_blank">
          71.【14.IIS部署】ASP.NET Core Web API 入門教學(14_1) - Windows Server 2019安裝IIS</a>
          <a href="https://www.youtube.com/watch?v=RldzjCIkQ84&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=72" target="_blank">
          72.【14.IIS部署】ASP.NET Core Web API 入門教學(14_2) - 發佈、部署到IIS&系列完結語</a>
    </pre>
  </div>
  `,kc={__name:"index",setup(e){return Rt.scrollToTop=!0,(t,n)=>(be(),ye(se,null,[Uc,N("div",null,[N("div",{innerHTML:Oc})]),V(Rt)],64))}},Hc=we(kc,[["__scopeId","data-v-e16ba16f"]]),Fc=N("div",null,"我是RabbitVue3頁面",-1),Bc=`
  <div id="Vue3-rabbit" style="display:flex; justify-content: center; background-color: #282923; color:#c1cccc; font-size: 14px;">
    <pre>
        //===============================================================================================//
     
        //================== Day1-01-Vue3小兔鮮先導課
        <a href="https://www.youtube.com/playlist?list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG" target="_blank">
          Vue3小兔鮮
        </a>
        Vue3 全家桶
        Create-vue
        Pinia
        ElementPlus
        Vue3+Setup
        Vue-Router
        VueUse
        項目亮點：
        基於業務邏輯的組件拆分思想
        長面頁吸頂交互實現
        圖片懶加載指令封裝
        面板插槽組件等業務通用組件封裝
        SKU電商組件封裝
        通用邏輯函數封裝
        路由緩存問題處理
        支付寶第三方支付
        day01 Vue3入門
        day02 Pinia + Layout
        day03 Home + 一級分類
        day04 二級分類 + 詳情
        day05 登入
        day06 購物車 + 支付
        day07 會員中心 + 拓展課

        //================== Day1-02-認識Vue3
        Vue3组合式API體驗體驗
        通過一個 Counter案例 體驗Vue3新引入的组合式API
                
        script setup>
        Vue3組合式api實現
        import { ref } from 'vue'
        const count = ref(0)
        const addCount = () => count.value++
        /script>
        
        script>
        //vue2的代碼 選項式
        export default {
          data(){
            return {
              count: 0
            }
          },
          methods:{
            addCount() {
              this.count++
            }
          }
        }
        /script>

        
      
        1.代碼量變少 2.分散式維護轉為集中式維護
        
        Vue3更多的優勢
        更容易維護：1.組合式API 2.更好的TypeScript支持
        更快的速度：1.重寫diff算法 2.模版編譯優化 3.更高效的組件初始化
        更小的體積：1.良好的TreeShaking 2.按需引入
        更優的數據響應式： Proxy

        //================== Day1-03-使用create-vue創建項目
        認識create-vue
        create-vue是Vue官方新的脚手架工具，底層切換到了 vite（下一代前端工具鏈），為開發发提供極速響應
        1. 前提環境條件
          已安裝 16.0 或更高版本的 Node.j   node -v
        2. 創建一个Vue應用
          npm init vue@latest 這一指令將會安裝並執行 create-vu
          
          cd vue3-project => npm install => npm run dev

        //================== Day1-04-熟悉項目目錄和關鍵文件
        關鍵文件：
        1. vite.config.js - 項目的配置文件 基于vite的配置
        2. package.json - 項目包文件 核心依賴項變成了 Vue3.x 和 vite
        3. main.js - 入口文件 createApp函數創建應用實例
        4. app.vue - 根組件 SFC單文件组件 script - template - style
          變化一：脚本script和模板template順序調整
          變化二：模板template不再要求唯一根元素
          變化三：脚本script添加setup標識支持組合式API
        5. index.html - 單頁入口 提供id為app的掛載點
        
            // 開關：容許在Script書寫組合式API
          script setup>
        
          // 不再要求唯一根元素 <div>


    //================== Day1-05-組合式PI入口-setup
            setup選項的寫法和執行時機
              setup是在beforeCreate之前執行的
              
              // APP.vue
              script>
              export default{
                setup(){
                 console.log('setup')
                 const message = 'this is message'
                 const logMessage = () => {
                  console.log(message)
                 }
                 return {  // 必須return才可以叫得到
                  message,
                  logMessage
                 }
                },
                beforeCreate(){
                 console.log('beforeCreate')
                }
              }
              script/>
              template>
                div>This is div/div>
                {{ message }}
                button @click="logMessage"> log /button>
              /template>
            
              //======== 語法糖 script setup>  ==> 不需要return了
            
              script setup>
                const message = 'this is message'
                const logMessage = () => {
                 console.log(message)
                }
              script/>
              template>
                div>This is div/div>
                {{ message }}
                button @click="logMessage"> log /button>
              /template>

     //================== Day1-06-組合式API-reactive和ref函數

              ------------reactive()
              作用：接受對象類型數據参数，傳入並返回一個響應式的對象
              核心步驟：
              1. 從 vue 包中導入reactive函數
              2. 在 script setup> 中執行 reactive函數，並傳入類型為對象的初始值，並使用變量接收返回值
              
              script setup>
              //1.導入函數
              import { reactive } from 'vue'
              //2.執行函數 傳入一個對象類型的參數 變量接收
              const state = reactive({
                count: 0
              })
              const setCount = () => {
               state.count++
              }
              script/>
              template>
               div>
                button @click="setCount">{{state.count}}button/>
               /div>
              /template>
              
              ------------ref()
              作用：接收簡單類型或者對象類型的數據傳入並返回一个響應式的對象
              核心步驟：
              1. 從 vue 包中導入reactive函數
              2. 在 script setup> 中執行 ref 函数，並傳入初始值，使用變量接收 ref 函數的返回值
              
              script setup>
              //1.導入ref函數
              import { ref } from 'vue'
              //2.執行函數 傳入一個參數[簡單類型 + 對象類型] 變量接收
              const count = ref(0)
              console.log(count)
              const setCount = () => {
               count.value++
              }
              script/>
              template>
               div>
                button @click="setCount">{{ count }}button/>
               /div>
              /template>
              
            //在實際工作中推薦使用ref函數，更加靈活，小兔鮮項目主用ref



        //================== Day1-07-組合式API-computed
         computed計算属性函數
          計算屬性基本思想和Vue2的完全一致，組合式API下的計算属性只是修改了寫法
          核心步驟：1. 導入computed函數
                   2. 執行函數 在回調參數中return基於響應式數據做計算的值，用變量接收

            script setup>
            // 原始響應式數組
            // 1. 導入computed
            import { ref, computed } from 'vue'
            const list = ref([1,2,3,4,5,6,7,8])
            // 2. 執行函數 return 計算之後的值 變量接收
            const computedList = computed(() => {
              return list.value.filer(item => item > 2)
            })

            setInterval(()=> {
              list.value.push(9,10)
            }, 3000)
            /script>
            template>
              div>
                原始響應式數組 - {{ list }}
              /div>
              div>
                計算屬性數組 - {{ computedList }}
              /div>
            /template>

            // 最佳實踐
              1.計算屬性中不應該有 "副作用"
               比如異步請求/修改dom
              2.避免直接修改計算屬性的值(只讀)

        //================== Day1-08-組合式API-watch-基本使用和立即執行

          watch函数
          作用: 偵聽一個或者多個數據的變化，數據變化時執行回調函數
          兩個額外參數：1. immediate（立即執行） 2. deep（深度偵聽）

          script setup>
            //1.導入watch
            import { ref, watch } from 'vue'
            const count = ref(0)
            const setCount = () => {
              count.value++
            }

            //2.調用watch 偵聽變化
              // ref對象不需要加.value
            watch(count, (newValue, oldValue) => {
              console.log("count發生變化，老值為$-{oldValue}, 新值為$-{newValue}")
            })
          /script>
          template>
            div>
              button @click="setCount">{{ count }} /button>
            /div>
          /template>


          ---- 基礎使用 - 偵聽多個數據
            說明：同時偵聽多個響應式數據的變化，不管哪個數據變化，都需要執行回調

            script setup>
            //1.導入watch
            import { ref, watch } from 'vue'

            const count = ref(0)
            const setCount = () => {
              count.value++
            }

            const name = ref('cp')
            const setName = () => {
              name.value = 'pc'
            }

            //2.調用watch 偵聽變化
              // ref對象不需要加.value
            watch([count, name], (
                [newCount, newName],
                [oldCount, oldName]
              ) => {
              console.log(count或者name發生變化了, [newCount, newName],[oldCount, oldName])
            })
          /script>
          template>
            div>
              button @click="setCount">修改count -- {{ count }} /button>
            /div>
            div>
            button @click="setName">修改name -- {{ name }} /button>
          /div>
          /template>


          //immediate
          說明：在偵聽器創建時立即觸發回調, 響應式數據變化之後繼續執行回調

          watch(count, () => {
            console.log('count發生變化')
          }, { 
            immediate: true
          })


          script setup>
            // 1. 導入watch
            import { ref, watch } from 'vue'
            const count = ref(0)
            // 2. 調用watch 偵聽變化
            watch(count, (newValue, oldValue)=>{
              console.log('count發生了變化，老值為$-{oldValue},新值為$-{newValue}')
            },{
              immediate: true  // 
            })
          /script>

        //================== Day1-09-組合式API-watch-深度偵聽和精確偵聽
        deep
        默認機制：通過watch監聽的ref對象，默認是淺層偵聽的，直接修改嵌套的對象属性，不會觸發回調執行，需要開啟deep
        選項

        script setup>
          // 1. 導入watch
          import { ref, watch } from 'vue'
          const state = ref({ count: 0, age: 20 }) // 對象
          // 2. 監聽對象state 並開啟deep
          watch(state, ()=>{
            console.log('數據變化了')
          },{deep:true})

          const changeStateByCount = ()=>{
            // 此時修改可以觸發回調
            state.value.count++
          }
        /script>
        template>
          {{ state.count }}
          div>
          button @click="changeStateByCount">通過count修改 /button>
        /div>
        /template>


        ---精確偵聽對象的某個屬性
        需求：在不開啟deep的前提下，偵聽age的變化，只有age變化時才執行回調
          watch(
            ()=> state.value.age,
            ()=>{
              console.log('age變化了')
            }
          )

          // deep性能損秏 盡量不開啟deep


        //================== Day1-10-组合式API-生命周期函數
        Vue3的生命周期API （選項式 VS 組合式
        選項式API              組合式API
        beforeCreate/created  setup
        beforeMount           onBeforeMount
        mounted               onMounted
        beforeUpdate          onBeforeUpdate
        updated               onUpdated
        beforeUnmount         onBeforeUnmount
        unmounted             onUnmounted
        
        生命周期函数基本使用
        1. 導入生命周期函數
        2. 執行生命周期函數 傳入回調

        執行多次
        生命周期函數是可以執行多次的，多次執行時，傳入的回調會在時機成熟時，依次執行
        onMounted(()=>{
          console.log('mnount1')
          //好多邏輯
        })
        onMounted(()=>{
          console.log('mnount2')
          //補充邏輯
        })


        //================== Day1-11-組合式API下的父子通信 父傳子
        組合式API下的父傳子
        基本思想
          1. 父組件中給子組件綁定屬性
          2. 子組件内部通過props選項接收


          父組件
          script setup>
          //引入子組件
          // setup語法糖下，局部組件無需注冊直接可以使用
          import SonComVue form './son-com.vue'
          const count = ref(100) // 響應式數據
          /script>

          template>
            // 1.綁定屬性 message
            <"sonComVue :count="count" message="this is app message"/>
          /template>

          子組件(son-com.vue)
          script setup>
          //2.通過 defineProps "編譯器宏" 接收子組件傳遞的數據
          <span class="orange_">const props = defineProps({</span>
            message: String,
            count: Number
          })
          setTimeout(() =>{
            count.value = 200
          }, 3000)  // 3秒後變200
          /script>

          template>
            h3>子組件Son /h3>
            div>
              父組件傳入的數據 - {{message}} //this is app message
              {{ count }}
            /div>
          /template>

        //================== Day1-12-組合式API下的父子通信 子傳父
        組合式API下的子傳父
        基本思想
        1. 父組件中給子組件標籤通過@綁定事件
        2. 子組件内部通過 $emit 方法觸發事件

        父組件

        script setup>
          import sonComVue from './son-com.vue'
          const getMessage = (msg) => {
            console.log(msg)
          }
        /script>

        template>
          div class="father"
            //1.綁定自定義事件
            sonComVue @get-message="getMessage" />
          /div>
        /template>


        子組件

        script setup>
        // 2.通過defineEmits 編譯器宏生成emit方法
        <span class="orange_">const emit = defineEmits(['get-message']);</span> // defineEmits(['事件名稱'])
        const sendMsg = () => {
          // 3.觸發自定義事件 並傳遞參數
          emit('get-message', 'this is son msg');
        }
        /script>

        template>
          div class="son">
            button @click="sendMsg">sendMsg 觸發自定義事件 /button>
          /div>
        /template>

        //================== Day1-13-組合式API-模版引用

        模板引用的概念
        通過ref標識獲取真實的dom對象或者組件實例對象

        <span class="orange_">this.$refs.form.validate()</span>
        
        如何使用(以獲取dom為例 組件同理)
        1.調用ref函數，生成一個ref對象
        2.通過ref標識綁定對象標籤

        scrip setup>
        import { ref } from 'vue'
        import TestCom from './test-com.vue'
        // 1.調用ref函數得到ref對象
        <span class="orange_">const h1Ref = ref(null)</span>
        const comRef = ref(null)

        // 組件掛載完畢之後，才能獲取
        onMounted(()=>{
          console.log(h1Ref.value)
          console.log(comRef.value)
        })
        /script>

        template>
          // 2.通過ref標識綁定ref對象
          <span class="orange_">h1 ref="h1Ref">我是dom標籤h1 /h1></span>
          TestCom ref="comRef" />  // 獲取組件實例對象 
        /template>

        //-----test-com.vue
        script setup>
        import { ref } from 'vue'

        const name = ref('test name')
        const setName = () => {
          name.value = 'test new name'
        }
        <span class="orange_">
        defineExpose({
          name,
          setName
        })
        </span>
        /script>

        template>
          div>我是test組件 /div>
        /template>

        //defineExpose()
        默認情況下在 script setup>語法糖下組件内部的屬性和方法是不開放給父組件訪問的，
        可以通過defineExpose編譯宏 指定哪些屬性和 方法允許訪問

        總結： 1.獲取模版引用的時機是什麼? 組件掛載完畢
               2.defineExpose 編譯宏 的作用是什麼？
                顯示暴露組件內部的屬性和方法


        //================== Day1-14-組合式API-provide和inject
        作用和場景
        頂層組件向任意的底層組件傳遞數據和方法，實現跨層組件通信


        room-page
        ||
        V
        room-msg-item
        ||
        V
        room-msg-comment

        跨層遞數普通數據
        1. 頂層組件通過provide函數提供數據   provide('data-key',頂層組件中的數據 )
        2. 底層組件通過inject函數獲取數據    const message = inject('data-key')
        

        跨層遞數響應式數據
        在調用provide函數時，第二個参數設置為ref對象 

        頂層組件 provide('app-key', countData)  // ref對象
        底層組件 const countData = inject('app-key')


        跨層遞數方法
        頂層組件可以向底層組件傳遞方法，底層組件調用方法，修改頂層組件中的數據

        頂層組件 provide('setCount-key', setCount )
        底層組件 const setCount = inject('setCount-key')


        //================== Day1-15-Vue3綜合小案例
        //================== Day1-16-補充作業-編輯功能作業
        //================== Day2-01-Pinia-添加pinia到vue項目
        什麼是Pinia
        Pinia是Vue的專屬的最新狀態管理庫，是Vuex狀態管理工具的替代品
        
        1.提供更加簡單的API(去掉了mutation)
        2.提供符合組合式風格的API (和Vue3新語法統一)
        3.去掉了 modules的概念，每一個store都是一個獨立的模塊
        4.搭配 TypeScipt 一起使用，提供可靠的類型推斷

        添加Pinia到Vue項目
        1.使用create-vue 創建空的新項目
          npm init vue@latest
        2.按照官方文檔安裝pinia到項目
          <a href='https://pinia.vuejs.org/zh/getting-started.html'>https://pinia.vuejs.org/zh/getting-started.html</a>
          開始安裝：
            npm install pinia
            創建一個 pinia 實例 (根 store) 並將其傳遞給應用：
            import { createApp } from 'vue'
            import App from './App.vue'

            // 1.導入cratePinia
            import { createPinia } from 'pinia'
            // 2.執行方法得到實例
            const pinia = createPinia()
            
            const app = createApp(App)

            // 3.把pinia實例加入到app應用中
            app.use(pinia)
            app.mount('#app')


        //================== Day2-02-Pinia-counter基礎使用
          使用Pinia實現計數器案例
          <a href='https://pinia.vuejs.org/zh/introduction.html'>Pinia基礎示例: https://pinia.vuejs.org/zh/introduction.html</a>


          下面就是 pinia API 的基本用法 (為繼續閱讀本簡介，請確保你已閱讀過了開始章節)。
          你可以先創建一個 Store：

          // stores/counter.js
          import { defineStore } from 'pinia'
          
          export const useCounterStore = defineStore('counter', {
            state: () => {
              return { count: 0 }
            },
            // 也可以這樣定義
            // state: () => ({ count: 0 })
            actions: {
              increment() {
                this.count++
              },
            },
          })

          然後你就可以在一個組件中使用該 store 了：
          script setup>
            import { useCounterStore } from '@/stores/counter'
            
            const counter = useCounterStore()
            
            counter.count++
            // 自動補全！ ✨
            counter.$patch({ count: counter.count + 1 })
            // 或使用 action 代替
            counter.increment()
            /script>
            
            template>
              <!-- 直接從 store 中訪問 state -->
              div>Current Count: {{ counter.count }}/div>
            /template>


            為實現更多高級用法，你甚至可以使用一個函數 (與組件 setup() 類似) 來定義一個 Store：

            export const useCounterStore = defineStore('counter', () => {
              const count = ref(0)
              function increment() {
                count.value++
              }
            
              return { count, increment }
            })
            
            <span class="orange_">
            ☆使用Pinia實現計數器案例
            1.定義Store（state + action)
            2.組件使用Store
          </span>

            定義：
            // 導入一個方法 defineStore(定義store)
            import { defineStore } from 'pinia'
            import { ref } from 'vue'
            export const useCounterStore = defineStore('counter', ()=>{
              // 定義數據(state)
              const count = ref(0)

              // 定義修改數據的方法 (action)
              const increment = () => {
                count.value ++
              }

              // 以對象的方式return供組件使用
              return { count, increment }
            })

            使用：
            script setup>
            // 1.導入 'useCounterStore' 方法
            import { useCounterStore } from '@/stores/counter/store'
            // 2.執行方法得到counterStore實例對象
            const counterStore = useCounterStore()
            /script>

            template>
              button @click="counterStore.increment">
               {{counterStore.count}}
              /button>
            /template>
            

        //================== Day2-03-Pinia-getters和異步action
        getters實現
        Pinia中的 getters 直接使用 computed函數 進行模擬

        // 數據(state)
        const count = ref(0)

        // getter
        const doubleCount = computed(() => count.value * 2)
        return {
          doubleCount
        }

        action如何實現異步
        action中實現異步和組件中定義數據和方法的風格完全一致

        const API_URL = "http://geek.itheima.net/v1_0/channels"
        // 準備數據(state)
        const list = ref([])
        // 異步action
        const getList = async() => {
          const res = await axios.get(API_URL)
          list.value = res.data.data.channels
        }
        return {
          list,
          getList
        }

        //================== Day2-04-Pinia-storeToRefs和調試
        storeToRefs
        使用storeToRefs函數可以輔助保持數據（state + getter）的響應式解構

        import { storeToRefs } from 'pinia'

        // 直接解構賦值(響應式丟失 視圖不再更新)
        const { count, doubleCount } = counterStore

        // 方法包裹(保持數據響應式) : 只限數據相關的處理(state,getter)
        const { count, doubleCount } = storeToRefs(counterStore)

        // 方法直接從原來的counterStore中解構賦值
        const { increment } = counterStore

        總結：
        1.Pinia是用來做什麼的？
          集中狀態管理工具，新一代的Vuex
        2.Pinia中還需要mutation嗎?
          不需要, action既支持同步也支持異步
        3.Pinia如何實現getter?
          computed計算屬性函數
        4.Pinia產生的Store如何解構賦值數據 保持響應式?
          storeToRefs (只管數據)

        //================== Day2-05-項目起步-項目初始化和git管理
        //================== Day2-06-項目起步-别名路徑聯想設置
        //================== Day2-07-項目起步-elementPlus自動按需導入配置
          # elementPlus引入
          ## 1. 安裝elementPlus和自動導入插件

            這個會有問題//npm i elementPlus  要執行這個// npm install element-plus --save --legacy-peer-deps
          npm install element-plus --save
          npm install -D unplugin-vue-components unplugin-auto-import

          //安裝錯誤，搜尋到的解法 https://wenku.csdn.net/answer/45gmngb29c?ydreferer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8%3D


          //配置 vite.config.js
          // elementPlus按需導入
          import AutoImport from 'unplugin-auto-import/vite'
          import Components from 'unplugin-vue-components/vite'
          import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


          export default defineConfig({
            plugins: [
              vue(),
              // 配置插件
              AutoImport({
                resolvers: [ElementPlusResolver()],
              }),
              Components({
                resolvers:[
                  //1.配置elementPlus採用sass樣式配它系統
                  ElementPlusResolver({importStyle:"sass"}),
                ]
              })
            ],
            resolve: {
              alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
              }
            }
          })

        //================== Day2-08-項目起步-elementPlus主題色定制

        
        //--------------------
        如何定制 (SCSS 變量替換方案)
        1.安裝SCSS   				npm i sass -D
        2.準備定制樣式文件	 			styles/element/index.scss
        3.對ElementPlus樣式進行覆蓋  	通知Element採用scss語言 -> 導入定制SCSS文件覆蓋

        新增目錄
        //src\\styles\\element
        新增檔案 index.scss
        //-----------------------------
        /* 只需要重寫你需要的即可 */
        @forward 'element-plus/theme-chalk/src/common/var.scss' with (
          $colors: (
            'primary': (
              // 主色
              'base': #27ba9b,
            ),
            'success': (
              // 成功色
              'base': #1dc779,
            ),
            'warning': (
              // 警告色
              'base': #ffb302,
            ),
            'danger': (
              // 危險色
              'base': #e26237,
            ),
            'error': (
              // 錯誤色
              'base': #cf4444,
            ),
          )
        )
        //-----------------------------
        再把common.scss, var.scss 複製到styles底下
        //vite.config.js
        //---------------------------
          css: {
            preprocessorOptions: {
              scss: {
                // 自動導入定制化樣式文件進行樣式覆蓋
                additionalData: '
                  //@use "@/styles/element/index.scss" as *;
                  //@use "@/styles/var.scss" as *;
                ',
              }
            }
          }
        //---------------------------

        //================== Day2-09-項目起步-axios基礎配置
        1.安裝axios    npm i axios
        2.配置基礎實例(統一接口配)

        在src底下建立一個utils/http.js
        //-----------------------------------------
        // axios 基礎的封裝
        import axios from 'axios'
        import { ElMessage } from 'element-plus'
        import 'element-plus/theme-chalk/el-message.css'
        //import { useUserStore } from '@/stores/userStore'
        import router from '@/router'

        const httpInstance = axios.create({
        baseURL:'https://pcapi-xiaotuxian-front-devtest.itheima.net',
        timeout: 5000
        })

        // 攔截器
        // axios请求攔截器
        httpInstance.interceptors.request.use(config => {
          //1.從pinia獲取token數據
          //const userStore = useUserStore()
          //2.按照後端的要求拼接token數據
          //const token = userStore.userInfo.token
          // console.log(token)
          //if(token){
          //	config.headers.Authorization = 'Bearer $-{token}'
          //}
          return config
        }, e => Promise.reject(e))
          
        // axios響應式攔截器
        httpInstance.interceptors.response.use(res => res.data, e => {
          //const userStore = useUserStore()
          // 統一錯誤提示
          //ElMessage({
          //		type:'warning',
          //		message: e.response.data.message
          //})
          // 401token失效處理
          // 1.清除本地用戶數據
          // 2.跳轉到登入頁
          //if(e.response.status === 401){
          //	userStore.clearUserInfo()
          //	router.push('/login')
          //}
          return Promise.reject(e)
        })

        export default httpInstance
        //--------------------------------

        // 測試axios
        建立src\\apis\\testAPI.js

        //--------------------------------
        import httpInstance from "@/utils/http";

        export function getCategory(){
            return httpInstance({
                url: 'home/category/head'
            })
        }
        //--------------------------------
        main.js
        //--------------------------------
        // 測試接口函數
        import {getCategory} from '@/apis/testAPI'
        getCategory().then(res => {
          console.log(res)
        })
        //--------------------------------
        //================== Day2-10-項目起步-項目整體路由設計

        // eslint比較嚴，需要配置eslintrc.cjs
        //.eslintrc.cjs
        /* eslint-env node */
        module.exports = {
          root: true,
          'extends': [
            'plugin:vue/vue3-essential',
            'eslint:recommended'
          ],
          parserOptions: {
            ecmaVersion: 'latest'
          },
          rules:{
            "vue/multi-word-component-names": ["error", {
              "ignores": []
            }]
          }
        }

        //router\\index.js
        //createRouter: 創建router實例對象
        //createWebHistory: 創建history模式的路由

          配置一級路由，二級路由
          Layout \\ Home
              \\ Category

        //================== Day2-11-項目起步-靜態資源引入和ErrorLen安裝
        
        圖片資源和樣式資源
        資源说明
        1. 實際工作中的圖片資源通常由 UI設計師 提供，常見的圖片格式有png,svg等都是由UI切圖交给前端
        2. 樣式資源通常是指項目初始化的時候進行樣式重置，常見的比如開源的 normalize.css 或者手寫
        資源操作
        1. 圖片資源 - 把 images 文件夾放到 assets 目錄下
        2. 樣式資源 - 把 common.scss 文件放到 styles 目錄下

        // 引入初始化樣式文件 main.js
          import '@/styles/common.scss'


        error lens 安裝
        error lens是一個實時提供錯誤警告信息的VSCode插件，方便開發

        
        //================== Day2-12-項目起步-scss文件的自動導入

        為什麼要自動導入
        在項目裡一些組件共享的色值會以scss變量的方式統一放到一个名為 var.scss 的文件中，正常組件中使用，需要先導
        入scss文件，再使用内部的變量，比較繁索，自動導入可以免去手動導入的步驟，直接使用内部的變量

        自動導入配置
        1. 新增一個 var.scss 文件，存入色值變量
        2. 通過 vite.config.js 配置動導入文

        //自動導入var.scss
        // vite.config.js
          css: {
            preprocessorOptions: {
              scss: {
                // 自動導入定制化樣式文件進行樣式覆盖
                additionalData: '
                  //@use "@/styles/element/index.scss" as *;
                  //@use "@/styles/var.scss" as *;
                ',
              }
            }
          }

          //<s_tyle scoped lang="scss">
          //.test{
          //  color: $priceColor;
          //}

        //================== Day2-13-Layout-靜態模版結構搭建
        //================== Day2-14-Layout-字體圖標引入
        //================== Day2-15-Layout-一級導航渲染
        //================== Day2-16-Layout-吸頂導航交互實現
        //================== Day2-17-Layout-Pinia優化重覆請求
        //================== Day3-01-Home-整體結構拆分和分類實現
        //================== Day3-02-Home-banner輪播圖實現
        //================== Day3-03-Home-面板組件封裝
        //================== Day3-04-Home-新鮮好物業務實現
        //================== Day3-05-Home-圖片懶加載指令實現
        //================== Day3-06-Home-懶加載指令優化
        //================== Day3-07-Home-Product產品列表實現
        //================== Day3-08-Home-GoodsItem組件封裝
        //================== Day3-09-一級分類-整體認識和路由配置
        //================== Day3-10-一級分類-面包屑導航渲染
        //================== Day3-11-一級分類-輪播圖功能實現
        //================== Day3-12-一級分類-激活狀態控制和分類列表渲染
        //================== Day3-13-一級分類-解决路由緩存問題
        //================== Day3-14-一級分類-使用邏輯函數拆分業務
        //================== Day4-01-二級分類-整體認識和路由配置
        //================== Day4-02-二級分類-面包屑導航實現
        //================== Day4-03-二級分類-基礎商品列表實現
        //================== Day4-04-二級分類-列表篩選功能實現
        //================== Day4-05-二級分類-列表無限加載實現
        //================== Day4-06-二級分類-定制路由滾動行為
        //================== Day4-07-詳情頁-整體認識和路由配置
        //================== Day4-08-詳情頁-基礎數據渲染
        //================== Day4-09-詳情頁-熱榜區-基礎組件封裝和數據渲染
        //================== Day4-10-詳情頁-熱榜區-適配不同title和數據列表
        //================== Day4-11-詳情頁-圖片預覽組件-小圖切換大選顯示
        //================== Day4-12-詳情頁-圖片預覽組件-放大鏡-滑塊跟隨移動
        //================== Day4-13-詳情頁-圖片預覽組件-放大鏡-大圖效果實現
        //================== Day4-14-詳情頁-圖片預覽組件-props適配和整體總結
        //================== Day4-15-詳情頁-SKU組件熟悉使用
        //================== Day4-16-詳情頁-通用組件統一注冊全局
        //================== Day5-01-登入-整體認識和路由配置
        //================== Day5-02-登入-表單校驗實現
        //================== Day5-03-登入-表單校驗-自定義校驗規則
        //================== Day5-04-登入-表單校驗-統一校驗
        //================== Day5-05 登入-基礎功能實現
        //================== Day5-06-登入-Pinia管理用戶數據
        //================== Day5-07-登入-Pinia用戶數據持久化
        //================== Day5-08-登入-登入和非登入狀態下的模版適配
        //================== Day5-09-登入-請求攔截器攜帶Token
        //================== Day5-10-登入-退出登入功能實現
        //================== Day5-11-登入-Token失效401攔截處理
        //================== Day5-12-購物車-流程梳理和本地加入購物車實現
        //================== Day5-13-購物車-本地-頭部購物車列表渲染
        //================== Day5-14-購物車-本地-頭部購物車刪除功能實現
        //================== Day5-15-購物車-本地-頭部購物車統計計算
        //================== Day6-01-購物車-本地-列表購物車基礎數據渲染
        //================== Day6-02-購物車-本地-列表購物車單選功能
        //================== Day6-03-購物車-本地-購物車列表全選功能
        //================== Day6-04-購物車-本地-購物車列表統計數據實現
        //================== Day6-05-購物車-接口-加入購物車
        //================== Day6-06-購物車-接口-刪除購物車
        //================== Day6-07-退出登入-清空購物車數據
        //================== Day6-08-購物車-合併本地購物車到服務器
        //================== Day6-09-結算-路由配置和基礎數據渲染
        //================== Day6-10-結算-地址切換-打開彈框交互實現
        //================== Day6-11-結算-切換地址-地址激活交互實現
        //================== Day6-12-結算-生成訂單功能實現
        //================== Day6-13-支付-渲染基礎數據
        //================== Day6-14-支付-實現支付功能
        //================== Day6-15-支付-支付結果展示
        //================== Day6-16-支付-封裝倒計時函數
        //================== Day7-01-會員中心-整體功能梳理和路由配置
        //================== Day7-02-會員中心-個人中心信息渲染
        //================== Day7-03-會員中心-我的訂單-基礎訂單列表實現
        //================== Day7-04-會員中心-我的訂單-tab切換實現
        //================== Day7-05-會員中心-我的訂單-分頁邏輯實現
        //================== Day7-06-會員中心-細節優化
        //================== Day7-07-拓展課-SKU組件-功能拆解
        //================== Day7-08-拓展課-SKU組件-點擊規格更新選中狀態
        //================== Day7-09-拓展課-SKU組件-獲取有效路徑字典
        //================== Day7-10-拓展課-SKU組件-初始化時更新禁用狀態
        //================== Day7-11-拓展課-SKU組件-點擊時組合更新禁用狀態
        //================== Day7-12-拓展課-SKU組件-產出有效的SKU對象信息


    </pre>
  </div>

    <div id="Vite_to_github" style="display:flex; justify-content: center; background-color: #282923; color:#c1cccc; font-size: 14px;">
      <pre>
//===============================================================================================//
        How to Deploy Your Vite App to Github Pages
        <a href="https://www.youtube.com/watch?v=yo2bMGnIKE8">https://www.youtube.com/watch?v=yo2bMGnIKE8</a>
        
        new repository

        git init
        git add .
        git commit -m "first commit"
        git branch -M main
        git remote add origin git@github.com:gh242/deploying-vite-project-example.git
        git remote add origin git@github.com:gh242/vue-rabbit_my.git
        git push -u origin main
        
        // vite.config.js加上
        // https://vitejs.dev/config/
        export default defineConfig({
          base:'/deploying-vite-project-example/',
        
        npm run build
        git add dist -f
        git commit -m "adding dist"
        git subtree push --prefix dist origin gh-pages
      
    </pre>
  </div>
`,Gc={__name:"index",setup(e){return Rt.scrollToTop=!0,(t,n)=>(be(),ye(se,null,[Fc,N("div",{innerHTML:Bc}),V(Rt)],64))}},Kc={},Vc=Dl('<div data-v-7cf749bc>我是Download頁面</div><div id="Vue3" class="content" data-v-7cf749bc><div class="box" data-v-7cf749bc> //-----------Vue3 <div data-v-7cf749bc><a href="https://www.youtube.com/watch?v=LlYhPO8Ti2U" target="_blank" data-v-7cf749bc> 1.NET7 Web API | SQL Database | VueJS(3.0) - Composition API | CRUD| Full Video<span class="pdf" data-v-7cf749bc>YouTube</span></a><p data-v-7cf749bc>.解決CORS問題</p></div><div data-v-7cf749bc><a download href="https://drive.google.com/uc?export=download&amp;id=19m0QpipH0fPS51aztlgZ0gFxwWkSpqo_" data-v-7cf749bc> 1.dotnet7_vue3<span class="pdf" data-v-7cf749bc>download&gt;</span></a></div><div data-v-7cf749bc><a href="https://www.youtube.com/watch?v=2FoD_8dMGyU&amp;list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG" target="_blank" data-v-7cf749bc> 2.【黑馬程序員】前端Vue3小兔鮮實戰項目<span class="pdf" data-v-7cf749bc>YouTube</span></a></div><div data-v-7cf749bc><a download href="https://drive.google.com/uc?export=download&amp;id=10LPanB6adG6BLF0cKcM3H-VCSvUWwf8A" data-v-7cf749bc> 3.vue-rabbit_my 小兔鮮<span class="pdf" data-v-7cf749bc>download</span></a></div><div data-v-7cf749bc><a download href="https://drive.google.com/uc?export=download&amp;id=18N6U0JeeUsS6EhGGz2jvh3aZK41L-uBc" data-v-7cf749bc> 4.vue3-basic-project-my(mock)<span class="pdf" data-v-7cf749bc>download</span></a></div><div data-v-7cf749bc><a download href="https://drive.google.com/uc?export=download&amp;id=1Xe_GxmzXJVSIxMnqw3cm15YkLLQc4tWD" data-v-7cf749bc> 5.vue3-basic-project-my(有驗證名字不能重覆update)<span class="pdf" data-v-7cf749bc>download</span></a></div> //-----------WEBAPI <div data-v-7cf749bc><a href="https://blog.talllkai.com/ASPNETCore" target="_blank" data-v-7cf749bc> 1.完整且輕鬆學習ASP.NET Core Web API<span class="pdf" data-v-7cf749bc>Web</span></a></div><div data-v-7cf749bc><a href="https://www.youtube.com/watch?v=dXUfZuf1Wp4&amp;list=PLneJIGUTIItuqdxuDBEKCrvXCtCdUf_Xm" target="_blank" data-v-7cf749bc> 2.ASP.NET Core Web API 入門教學<span class="pdf" data-v-7cf749bc>YouTube</span></a></div><div data-v-7cf749bc><a download href="https://drive.google.com/uc?export=download&amp;id=1Mi3nQijxvyz6TmA7NWzkudmxeJha7W-e" data-v-7cf749bc> 3.DataBase_First_凱哥<span class="pdf" data-v-7cf749bc>download</span></a></div></div></div>',2);function jc(e,t){return Vc}const $c=we(Kc,[["render",jc],["__scopeId","data-v-7cf749bc"]]),qc={},Ao=e=>(Fe("data-v-f9fd13ac"),e=e(),Be(),e),zc=Ao(()=>N("div",null,"------------------------------------------------------------",-1)),Jc=Ao(()=>N("div",null,"這是其他頁",-1)),Qc=Ao(()=>N("div",{id:"Vite_to_github",class:"content"},[N("div",null,[he("1.Vue3 CRUD + bootstrap "),N("a",{href:"https://www.youtube.com/watch?v=PrKh6GemOyg",target:"_blank"}," https://www.youtube.com/watch?v=PrKh6GemOyg ")]),N("div",null,[he("2.Vue3 學習筆記 "),N("a",{href:"https://hackmd.io/@Lin-Jay/S1xju_nKO",target:"_blank"}," https://hackmd.io/@Lin-Jay/S1xju_nKO ")])],-1));function Zc(e,t){const n=qt("toTop");return be(),ye(se,null,[zc,Jc,Qc,V(n)],64)}const Yc=we(qc,[["render",Zc],["__scopeId","data-v-f9fd13ac"]]),Vr=e=>(Fe("data-v-c5b6fb41"),e=e(),Be(),e),Xc=Vr(()=>N("div",null,[N("h2",null,"Dotnet7_vue3"),N("div",null,".NET7 Web API | SQL Database | VueJS(3.0) - Composition API | CRUD")],-1)),eu={class:"container"},tu={class:"app-header-nav",style:{"list-style":"none"}},nu=Vr(()=>N("div",null,null,-1)),ou={__name:"index",setup(e){return Rt.scrollToTop=!0,(t,n)=>{const o=qt("RouterLink"),s=qt("RouterView");return be(),ye(se,null,[Xc,N("div",null,[N("div",eu,[N("ul",tu,[N("li",null,[V(o,{to:"/_beach_info"},{default:Ae(()=>[he("_Beach_Info.vue")]),_:1})]),N("li",null,[V(o,{to:"/editbeach"},{default:Ae(()=>[he("AddBeach.vue")]),_:1})]),N("li",null,[V(o,{to:"/beachList"},{default:Ae(()=>[he("BeachList.vue")]),_:1})]),N("li",null,[V(o,{to:"/editbeach"},{default:Ae(()=>[he("EditBeach.vue")]),_:1})]),N("li",null,[V(o,{to:"/routerbeach"},{default:Ae(()=>[he("router_Beach.vue")]),_:1})]),N("li",null,[V(o,{to:"/confirmDeletePopup"},{default:Ae(()=>[he("ConfirmDeletePopup.vue")]),_:1})])])]),V(s),nu]),V(Rt)],64)}}},su=we(ou,[["__scopeId","data-v-c5b6fb41"]]),ru=e=>(Fe("data-v-090910d0"),e=e(),Be(),e),iu=ru(()=>N("div",null,"這是_Beach_Info",-1)),lu=`
    https://www.youtube.com/watch?v=LlYhPO8Ti2U

    安裝 mssql develope 版本, ssms

    1.建立資料庫
    CREATE DATABASE MyWorldDB

    2.建立資料表
    CREATE TABLE Beach(
      Id int IDENTITY(1,1) NOT NULL,
      BeachName varchar(200),
      Place varchar(200),
      ImageUrl varchar(1000)
      CONSTRAINT PK_Beach_Id PRIMARY KEY(Id)
    )

    安裝node.js 

    npm init vue@latest

    安裝 bootstrap 5 -- https://getbootstrap.com/docs/5.0/getting-started/introduction/
    index.html
    <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    </head>

    script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"> /script>

    ----WebAPI
    安裝Visual Studio 2022
    下載 SDK 8
    若要IIS，要下載Windows Hosting Bundle
    dotnet new webapi -controllers -n Dot7.API.CRUD

    vs code extension: 
      C#

    dotnet watch run

    vue3-crud-sample> npm i axios



    //program.cs
    // 在AddDbContext 下面，加上cors設定
    builder.Services.AddCors(options => {
        options.AddPolicy("Cors", p => {
            p.AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
        });
    });

    app.UseCors("Cors");

    安裝 Microsoft.EntityFrameworkCore
    https://www.nuget.org/packages/Microsoft.EntityFrameworkCore/9.0.0-preview.7.24405.3
    dotnet add package Microsoft.EntityFrameworkCore --version 9.0.0-preview.7.24405.3
    https://www.nuget.org/packages/Microsoft.EntityFrameworkCore.SqlServer/9.0.0-preview.7.24405.3
    dotnet add package Microsoft.EntityFrameworkCore.SqlServer --version 9.0.0-preview.7.24405.3

    在專案新增資料夾 DataEntities
      新增檔案Beach.cs
          using System;
          using System.Collections.Generic;
          using System.Linq;
          using System.Threading.Tasks;

          namespace API.Data.Entities
          {
              public class Beach
              {
                  public int Id { get; set; }
                  public string? BeachName { get; set; }
                  public string? Place { get; set; }
                  public string? ImageUrl { get; set; }
              }
          }

        在Data資料夾底下, 新增檔案MyWorldDbContext.cs
        using System;
        using System.Collections.Generic;
        using System.Linq;
        using System.Threading.Tasks;
        using API.Data.Entities;
        using Microsoft.EntityFrameworkCore;

        namespace API.Data
        {
            public class MyWorldDbContext:DbContext
            {
                public MyWorldDbContext(DbContextOptions MyWorldDbContext> options):base(options)
                {

                }
                public DbSet Beach> Beach{get; set;}
            }
        }
    
    在檔案appsettings.Development.json
    {
      "Logging": {
        "LogLevel": {
          "Default": "Information",
          "Microsoft.AspNetCore": "Warning"
        }
      },
      "ConnectionStrings": {
        "MyWorldDbConnection": "Server=127.0.0.1;Database=Web;User ID=Web;Password=123456;TrustServerCertificate=true"
      },
      "JWT": {
        "KEY": "DJDJFIAFEAFEAFEGAIJAEIJIFEFETTEGGGAGE",
        "Issuer": "todo.com",
        "Audience": "my"
      }
    }

    program.cs
    builder.Services.AddDbContext MyWorldDbContext>(options => {
      options.UseSqlServer(builder.Configuration.GetConnectionString("MyWorldDbConnection"));
    });   
    
    新增controller > BeachController.cs
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using API.Data;
    using API.Data.Entities;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;

    namespace API.Controllers
    {
        [ApiController]
        [Route("[controller]")]
        public class BeachController(MyWorldDbContext context) : ControllerBase
        {
            // private readonly MyWorldDbCotext _myWorldDbContext;
            // public Beach(MyWorldDbCotext myWorldDbContext)

            [HttpGet]
            public async Task IActionResult> Get()
            {
                //var users = context.Users.ToList();
                var beaches = await context.Beach.ToListAsync();

                return Ok(beaches);
            }

            [HttpPost]
            public async Task IActionResult> Post(Beach newBeach)
            {
                context.Beach.Add(newBeach);
                await context.SaveChangesAsync();
                return Ok(newBeach);
            }

            [HttpGet("{id:int}")]
            public async Task IActionResult> Get(int id)
            {
                //var users = context.Users.ToList();
                // var beachById = await context.Beach.FindAsync(id);
                var beachById = await context.Beach.Where(_ => _.Id == id).FirstOrDefaultAsync();
                return Ok(beachById);
            }

            [HttpPut]
            public async Task IActionResult> Put(Beach beachUpdate)
            {
                context.Beach.Update(beachUpdate);
                await context.SaveChangesAsync();
                return Ok(beachUpdate);
            }

            [HttpDelete("{id:int}")]
            public async Task IActionResult> Delete(int id){
                var beachToDelete = await context.Beach.FindAsync(id);
                if(beachToDelete == null)
                {
                    return NotFound();
                }
                context.Beach.Remove(beachToDelete);
                await context.SaveChangesAsync();
                return Ok();
            }
          }
      }

    form @submit.prevent="addBeach">

    https://picsum.photos/id/237/300/200

    const myModal = new bootstrap.Modal(document.getElementById('myModal'), options)
    // or
    const myModalAlternative = new bootstrap.Modal('#myModal', options)


      //----------------------------------------------------------------
        "dependencies": {
            "axios": "^1.7.4",
            "vue": "^3.4.29",
            "vue-router": "^4.3.3"
          },
          "devDependencies": {
            "@vitejs/plugin-vue": "^5.0.5",
            "vite": "^5.3.1"
          }
`,au={__name:"_Beach_Info",setup(e){return(t,n)=>(be(),ye(se,null,[iu,N("div",{class:"content"},[N("pre",null,"      "+_t(lu)+`
    `)])],64))}},Ps=we(au,[["__scopeId","data-v-090910d0"]]),cu=e=>(Fe("data-v-56326e1c"),e=e(),Be(),e),uu=cu(()=>N("div",null,"這是AddBeach",-1)),fu=`
  script setup
      import axios from 'axios';
      import {reactive} from 'vue';
      import { useRouter } from 'vue-router';

      let newBeach = reactive({
          beachName: '',
          place: '',
          imageUrl:''
      })

      const router = useRouter();

      const addBeach = () => {
          axios.post("http://localhost:5247/Beach", newBeach)
          .then(()=>{
              router.push('/');
          })
      }

  /script>
  <template>
      <div class="container mt-4">
          <form @submit.prevent="addBeach">
              <legend>Add A New Item</legend>
              <div class="mb-3">
                  <label for="txtBeachName" class="form-label">Beach Name</label>
                  <input type="text" 
                      class="form-control" 
                      id="txtBeachName" 
                      aria-describedby="emailHelp"
                      v-model="newBeach.beachName">
              </div>
              <div class="mb-3">
                  <label for="txtLocation" class="form-label">Location</label>
                  <input type="text" 
                      class="form-control" 
                      id="txtLocation" 
                      aria-describedby="emailHelp"
                      v-model="newBeach.Location">
              </div>
              <div class="mb-3">
                  <label for="txtImageUrl" class="form-label">ImageUrl</label>
                  <input type="text" 
                      class="form-control" 
                      id="txtImageUrl" 
                      aria-describedby="emailHelp"
                      v-model="newBeach.imageUrl">
              </div>
              <button type="submit" class="btn btn-primary">Add</button>
          </form>
      </div>
  </template>

  <style lang="scss" scoped>

  </style>

`,du={__name:"AddBeach",setup(e){return(t,n)=>(be(),ye(se,null,[uu,N("div",{class:"content"},[N("pre",null,"      "+_t(fu)+`
    `)])],64))}},pu=we(du,[["__scopeId","data-v-56326e1c"]]),hu=e=>(Fe("data-v-a17ba2a6"),e=e(),Be(),e),mu=hu(()=>N("div",null,"這是BeachList",-1)),gu=`
    script setup>
    import { onMounted, ref } from 'vue';
    import axios from 'axios'
    import ConfirmDeletePopup from '@/components/ConfirmDeletePopup.vue';

    const beachCollection = ref([])

    let deleteModalInstance;
    const deleteItemId = ref(0);

    onMounted(()=>{
        deleteModalInstance = new window.bootstrap.Modal(document.getElementById('deletePopup'))
        axios.get("http://localhost:5247/Beach")
        .then((response)=>{
            beachCollection.value = response.data;
        })
    })

    const openDeleteModal = (id) => {
        console.log("openDeleteModal",id);
        deleteItemId.value = id;
        deleteModalInstance.show();
    }

    const confirmDelete = () => {
        axios.delete('http://localhost:5247/Beach/$-{deleteItemId.value}')
        .then(()=> {
            beachCollection.value = beachCollection.value.filter(_ => _.id !== deleteItemId.value);
            deleteModalInstance.hide();
        })

    }

    /script>
    <template>
        <div class="container">
            <div class="row mt-2">
                <div class="col col-md-4 offset-md-4">
                    <router-link class="btn btn-primary" to="/add">Add</router-link> 
                </div>
            </div>
            <!-- <div class="row row-cols-1 row-cols-md-2 g-4"> -->
            <div class="row row-cols-1 row-cols-md-5 g-4">
                <div class="col" v-for="item in beachCollection" :key="item.id">
                    <div class="card">
                    <img :src="item.imageUrl" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ item.beachName }}</h5>
                        <p class="card-text">Location - {{ item.place }}</p>
                        <router-link class="btn btn-primary" :to="'/edit/$-{item.id}'">Edit</router-link> 
                        // <button type="button" @click="$event => openDeleteModal(item.id)" class="btn btn-danger">Delete</button>
                        <button type="button" @click="openDeleteModal(item.id)" class="btn btn-danger">Delete</button>
                    </div>
                    </div>
                </div>
            </div>
            <ConfirmDeletePopup @confirm-delete-click="confirmDelete"></ConfirmDeletePopup>
        </div>
    </template>
    <style>

    </style>

`,bu={__name:"BeachList",setup(e){return(t,n)=>(be(),ye(se,null,[mu,N("div",{class:"content"},[N("pre",null,"      "+_t(gu)+`
    `)])],64))}},_u=we(bu,[["__scopeId","data-v-a17ba2a6"]]),vu=e=>(Fe("data-v-2a59f778"),e=e(),Be(),e),yu=vu(()=>N("div",null,"這是EditBeach",-1)),wu=`
    script setup>
        import axios from 'axios';
        import {onMounted, reactive} from 'vue';
        import { useRoute, useRouter } from 'vue-router';

        let beachToUpdate = reactive({
            id:0,
            beachName: '',
            place: '',
            imageUrl:''
        })

        const router = useRouter();
        const route = useRoute();

        // const addBeach = () => {
        //     axios.post("http://localhost:5247/Beach", newBeach)
        //     .then(()=>{
        //         router.push('/');
        //     })
        // }

    onMounted(()=>{
        axios.get('http://localhost:5247/Beach/$-{route.params.id}')
        .then((response)=>{
            beachToUpdate.beachName = response.data.beachName;
            beachToUpdate.place = response.data.place;
            beachToUpdate.imageUrl = response.data.imageUrl;
            beachToUpdate.id = response.data.id;     
        })
    })

    const updateBeach = () => {
        axios.put("http://localhost:5247/Beach", beachToUpdate)
        .then(()=>{
            router.push("/");
        })
    }

    /script>
    <template>
        <div class="container mt-4">
            <form @submit.prevent="updateBeach">
                <legend>Update Item</legend>
                <div class="mb-3">
                    <label for="txtBeachName" class="form-label">Beach Name</label>
                    <input type="text" 
                        class="form-control" 
                        id="txtBeachName" 
                        aria-describedby="emailHelp"
                        v-model="beachToUpdate.beachName">
                </div>
                <div class="mb-3">
                    <label for="txtLocation" class="form-label">Location</label>
                    <input type="text" 
                        class="form-control" 
                        id="txtLocation" 
                        aria-describedby="emailHelp"
                        v-model="beachToUpdate.place">
                </div>
                <div class="mb-3">
                    <label for="txtImageUrl" class="form-label">ImageUrl</label>
                    <input type="text" 
                        class="form-control" 
                        id="txtImageUrl" 
                        aria-describedby="emailHelp"
                        v-model="beachToUpdate.imageUrl">
                </div>
                <button type="submit" class="btn btn-primary">Update</button>
            </form>
        </div>
    </template>



    <style lang="scss" scoped>

    </style>

`,Iu={__name:"EditBeach",setup(e){return(t,n)=>(be(),ye(se,null,[yu,N("div",{class:"content"},[N("pre",null,"      "+_t(wu)+`
    `)])],64))}},Pu=we(Iu,[["__scopeId","data-v-2a59f778"]]),Au=e=>(Fe("data-v-f0f2e55e"),e=e(),Be(),e),Tu=Au(()=>N("div",null,"這是_router_Beach",-1)),Su=`
    import { createRouter, createWebHistory } from 'vue-router'
    // import HomeView from '../views/HomeView.vue'
    import BeachList from '../views/beaches/BeachList.vue'
    import AddBeach from '../views/beaches/AddBeach.vue'
    import EditBeach from '../views/beaches/EditBeach.vue'

    const router = createRouter({
      history: createWebHistory(import.meta.env.BASE_URL),
      routes: [
        {
          path: '/',
          name: 'home',
          component: BeachList
        },
        {
          path: '/add',
          name: 'add-beach',
          component: AddBeach
        },
        {
          path: '/edit/:id',
          name: 'edit-beach',
          component: EditBeach
        },
        // {
        //   path: '/about',
        //   name: 'about',
        //   // route level code-splitting
        //   // this generates a separate chunk (About.[hash].js) for this route
        //   // which is lazy-loaded when the route is visited.
        //   component: () => import('../views/AboutView.vue')
        // }
      ]
    })

    export default router


`,Cu={__name:"router_Beach",setup(e){return(t,n)=>(be(),ye(se,null,[Tu,N("div",{class:"content"},[N("pre",null,"      "+_t(Su)+`
    `)])],64))}},xu=we(Cu,[["__scopeId","data-v-f0f2e55e"]]),Eu=e=>(Fe("data-v-69fb1a2b"),e=e(),Be(),e),Du=Eu(()=>N("div",null,"這是ConfirmDeletePopup",-1)),Lu=`
<template>
    <!-- Button trigger modal -->
    <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
    </button> -->

    <!-- Modal -->
    <div class="modal fade" id="deletePopup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Delete Confirmation</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            Are you sure to delete this item?
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            // <button type="button" @click="$event => $emit('confirm-delete-click')" class="btn btn-danger">Confirm Delete</button>
            <button type="button" @click="$emit('confirm-delete-click')" class="btn btn-danger">Confirm Delete</button>
        </div>
        </div>
    </div>
    </div>
</template>


`,Ru={__name:"ConfirmDeletePopup",setup(e){return(t,n)=>(be(),ye(se,null,[Du,N("div",{class:"content"},[N("pre",null,`      這放在components\\
      由BeachList 呼叫
      `+_t(Lu)+`
    `)])],64))}},Wu=we(Ru,[["__scopeId","data-v-69fb1a2b"]]),Nu=_c({history:qa("/vue-my-note/"),routes:[{path:"/",component:xc,children:[{path:"",component:Hc},{path:"/vue3",component:Gc},{path:"/download",component:$c},{path:"/others",component:Yc},{path:"/dotnet7_vue3",component:su,children:[{path:"",component:Ps},{path:"/_beach_info",component:Ps},{path:"/addbeach",component:pu},{path:"/beachList",component:_u},{path:"/editbeach",component:Pu},{path:"/routerbeach",component:xu},{path:"/confirmDeletePopup",component:Wu}]}]}]}),To=fa(wc);To.use(ga());To.use(Nu);To.mount("#app");
