(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();/**
* @vue/shared v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Sn(e,t){const o=new Set(e.split(","));return n=>o.has(n)}const me={},Ft=[],Ve=()=>{},xi=()=>!1,Uo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Pn=e=>e.startsWith("onUpdate:"),Ae=Object.assign,xn=(e,t)=>{const o=e.indexOf(t);o>-1&&e.splice(o,1)},Ei=Object.prototype.hasOwnProperty,Y=(e,t)=>Ei.call(e,t),F=Array.isArray,Vt=e=>Wo(e)==="[object Map]",Xs=e=>Wo(e)==="[object Set]",G=e=>typeof e=="function",be=e=>typeof e=="string",wt=e=>typeof e=="symbol",pe=e=>e!==null&&typeof e=="object",er=e=>(pe(e)||G(e))&&G(e.then)&&G(e.catch),tr=Object.prototype.toString,Wo=e=>tr.call(e),Di=e=>Wo(e).slice(8,-1),or=e=>Wo(e)==="[object Object]",En=e=>be(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Zt=Sn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ro=e=>{const t=Object.create(null);return o=>t[o]||(t[o]=e(o))},Li=/-(\w)/g,qe=Ro(e=>e.replace(Li,(t,o)=>o?o.toUpperCase():"")),ki=/\B([A-Z])/g,Wt=Ro(e=>e.replace(ki,"-$1").toLowerCase()),Mo=Ro(e=>e.charAt(0).toUpperCase()+e.slice(1)),Qo=Ro(e=>e?`on${Mo(e)}`:""),yt=(e,t)=>!Object.is(e,t),Zo=(e,...t)=>{for(let o=0;o<e.length;o++)e[o](...t)},nr=(e,t,o,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:o})},Ni=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Ui=e=>{const t=be(e)?Number(e):NaN;return isNaN(t)?e:t};let Zn;const sr=()=>Zn||(Zn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Dn(e){if(F(e)){const t={};for(let o=0;o<e.length;o++){const n=e[o],s=be(n)?Hi(n):Dn(n);if(s)for(const r in s)t[r]=s[r]}return t}else if(be(e)||pe(e))return e}const Wi=/;(?![^(]*\))/g,Ri=/:([^]+)/,Mi=/\/\*[^]*?\*\//g;function Hi(e){const t={};return e.replace(Mi,"").split(Wi).forEach(o=>{if(o){const n=o.split(Ri);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function so(e){let t="";if(be(e))t=e;else if(F(e))for(let o=0;o<e.length;o++){const n=so(e[o]);n&&(t+=n+" ")}else if(pe(e))for(const o in e)e[o]&&(t+=o+" ");return t.trim()}const Oi="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fi=Sn(Oi);function rr(e){return!!e||e===""}const ir=e=>!!(e&&e.__v_isRef===!0),et=e=>be(e)?e:e==null?"":F(e)||pe(e)&&(e.toString===tr||!G(e.toString))?ir(e)?et(e.value):JSON.stringify(e,ar,2):String(e),ar=(e,t)=>ir(t)?ar(e,t.value):Vt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((o,[n,s],r)=>(o[Yo(n,r)+" =>"]=s,o),{})}:Xs(t)?{[`Set(${t.size})`]:[...t.values()].map(o=>Yo(o))}:wt(t)?Yo(t):pe(t)&&!F(t)&&!or(t)?String(t):t,Yo=(e,t="")=>{var o;return wt(e)?`Symbol(${(o=e.description)!=null?o:t})`:e};/**
* @vue/reactivity v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $e;class lr{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=$e,!t&&$e&&(this.index=($e.scopes||($e.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const o=$e;try{return $e=this,t()}finally{$e=o}}}on(){$e=this}off(){$e=this.parent}stop(t){if(this._active){let o,n;for(o=0,n=this.effects.length;o<n;o++)this.effects[o].stop();for(o=0,n=this.cleanups.length;o<n;o++)this.cleanups[o]();if(this.scopes)for(o=0,n=this.scopes.length;o<n;o++)this.scopes[o].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Vi(e){return new lr(e)}function Bi(e,t=$e){t&&t.active&&t.effects.push(e)}function Gi(){return $e}let Lt;class Ln{constructor(t,o,n,s){this.fn=t,this.trigger=o,this.scheduler=n,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Bi(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,At();for(let t=0;t<this._depsLength;t++){const o=this.deps[t];if(o.computed&&(ji(o.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),It()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=bt,o=Lt;try{return bt=!0,Lt=this,this._runnings++,Yn(this),this.fn()}finally{Xn(this),this._runnings--,Lt=o,bt=t}}stop(){this.active&&(Yn(this),Xn(this),this.onStop&&this.onStop(),this.active=!1)}}function ji(e){return e.value}function Yn(e){e._trackId++,e._depsLength=0}function Xn(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)cr(e.deps[t],e);e.deps.length=e._depsLength}}function cr(e,t){const o=e.get(t);o!==void 0&&t._trackId!==o&&(e.delete(t),e.size===0&&e.cleanup())}let bt=!0,dn=0;const ur=[];function At(){ur.push(bt),bt=!1}function It(){const e=ur.pop();bt=e===void 0?!0:e}function kn(){dn++}function Nn(){for(dn--;!dn&&fn.length;)fn.shift()()}function dr(e,t,o){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const n=e.deps[e._depsLength];n!==t?(n&&cr(n,e),e.deps[e._depsLength++]=t):e._depsLength++}}const fn=[];function fr(e,t,o){kn();for(const n of e.keys()){let s;n._dirtyLevel<t&&(s??(s=e.get(n)===n._trackId))&&(n._shouldSchedule||(n._shouldSchedule=n._dirtyLevel===0),n._dirtyLevel=t),n._shouldSchedule&&(s??(s=e.get(n)===n._trackId))&&(n.trigger(),(!n._runnings||n.allowRecurse)&&n._dirtyLevel!==2&&(n._shouldSchedule=!1,n.scheduler&&fn.push(n.scheduler)))}Nn()}const pr=(e,t)=>{const o=new Map;return o.cleanup=e,o.computed=t,o},pn=new WeakMap,kt=Symbol(""),hn=Symbol("");function ke(e,t,o){if(bt&&Lt){let n=pn.get(e);n||pn.set(e,n=new Map);let s=n.get(o);s||n.set(o,s=pr(()=>n.delete(o))),dr(Lt,s)}}function st(e,t,o,n,s,r){const i=pn.get(e);if(!i)return;let l=[];if(t==="clear")l=[...i.values()];else if(o==="length"&&F(e)){const a=Number(n);i.forEach((f,d)=>{(d==="length"||!wt(d)&&d>=a)&&l.push(f)})}else switch(o!==void 0&&l.push(i.get(o)),t){case"add":F(e)?En(o)&&l.push(i.get("length")):(l.push(i.get(kt)),Vt(e)&&l.push(i.get(hn)));break;case"delete":F(e)||(l.push(i.get(kt)),Vt(e)&&l.push(i.get(hn)));break;case"set":Vt(e)&&l.push(i.get(kt));break}kn();for(const a of l)a&&fr(a,4);Nn()}const $i=Sn("__proto__,__v_isRef,__isVue"),hr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(wt)),es=Ki();function Ki(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...o){const n=ee(this);for(let r=0,i=this.length;r<i;r++)ke(n,"get",r+"");const s=n[t](...o);return s===-1||s===!1?n[t](...o.map(ee)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...o){At(),kn();const n=ee(this)[t].apply(this,o);return Nn(),It(),n}}),e}function qi(e){wt(e)||(e=String(e));const t=ee(this);return ke(t,"has",e),t.hasOwnProperty(e)}class mr{constructor(t=!1,o=!1){this._isReadonly=t,this._isShallow=o}get(t,o,n){const s=this._isReadonly,r=this._isShallow;if(o==="__v_isReactive")return!s;if(o==="__v_isReadonly")return s;if(o==="__v_isShallow")return r;if(o==="__v_raw")return n===(s?r?ia:yr:r?vr:br).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const i=F(t);if(!s){if(i&&Y(es,o))return Reflect.get(es,o,n);if(o==="hasOwnProperty")return qi}const l=Reflect.get(t,o,n);return(wt(o)?hr.has(o):$i(o))||(s||ke(t,"get",o),r)?l:ve(l)?i&&En(o)?l:l.value:pe(l)?s?wr(l):Oo(l):l}}class gr extends mr{constructor(t=!1){super(!1,t)}set(t,o,n,s){let r=t[o];if(!this._isShallow){const a=Ut(r);if(!jt(n)&&!Ut(n)&&(r=ee(r),n=ee(n)),!F(t)&&ve(r)&&!ve(n))return a?!1:(r.value=n,!0)}const i=F(t)&&En(o)?Number(o)<t.length:Y(t,o),l=Reflect.set(t,o,n,s);return t===ee(s)&&(i?yt(n,r)&&st(t,"set",o,n):st(t,"add",o,n)),l}deleteProperty(t,o){const n=Y(t,o);t[o];const s=Reflect.deleteProperty(t,o);return s&&n&&st(t,"delete",o,void 0),s}has(t,o){const n=Reflect.has(t,o);return(!wt(o)||!hr.has(o))&&ke(t,"has",o),n}ownKeys(t){return ke(t,"iterate",F(t)?"length":kt),Reflect.ownKeys(t)}}class zi extends mr{constructor(t=!1){super(!0,t)}set(t,o){return!0}deleteProperty(t,o){return!0}}const Ji=new gr,Qi=new zi,Zi=new gr(!0);const Un=e=>e,Ho=e=>Reflect.getPrototypeOf(e);function mo(e,t,o=!1,n=!1){e=e.__v_raw;const s=ee(e),r=ee(t);o||(yt(t,r)&&ke(s,"get",t),ke(s,"get",r));const{has:i}=Ho(s),l=n?Un:o?Mn:ro;if(i.call(s,t))return l(e.get(t));if(i.call(s,r))return l(e.get(r));e!==s&&e.get(t)}function go(e,t=!1){const o=this.__v_raw,n=ee(o),s=ee(e);return t||(yt(e,s)&&ke(n,"has",e),ke(n,"has",s)),e===s?o.has(e):o.has(e)||o.has(s)}function bo(e,t=!1){return e=e.__v_raw,!t&&ke(ee(e),"iterate",kt),Reflect.get(e,"size",e)}function ts(e,t=!1){!t&&!jt(e)&&!Ut(e)&&(e=ee(e));const o=ee(this);return Ho(o).has.call(o,e)||(o.add(e),st(o,"add",e,e)),this}function os(e,t,o=!1){!o&&!jt(t)&&!Ut(t)&&(t=ee(t));const n=ee(this),{has:s,get:r}=Ho(n);let i=s.call(n,e);i||(e=ee(e),i=s.call(n,e));const l=r.call(n,e);return n.set(e,t),i?yt(t,l)&&st(n,"set",e,t):st(n,"add",e,t),this}function ns(e){const t=ee(this),{has:o,get:n}=Ho(t);let s=o.call(t,e);s||(e=ee(e),s=o.call(t,e)),n&&n.call(t,e);const r=t.delete(e);return s&&st(t,"delete",e,void 0),r}function ss(){const e=ee(this),t=e.size!==0,o=e.clear();return t&&st(e,"clear",void 0,void 0),o}function vo(e,t){return function(n,s){const r=this,i=r.__v_raw,l=ee(i),a=t?Un:e?Mn:ro;return!e&&ke(l,"iterate",kt),i.forEach((f,d)=>n.call(s,a(f),a(d),r))}}function yo(e,t,o){return function(...n){const s=this.__v_raw,r=ee(s),i=Vt(r),l=e==="entries"||e===Symbol.iterator&&i,a=e==="keys"&&i,f=s[e](...n),d=o?Un:t?Mn:ro;return!t&&ke(r,"iterate",a?hn:kt),{next(){const{value:p,done:h}=f.next();return h?{value:p,done:h}:{value:l?[d(p[0]),d(p[1])]:d(p),done:h}},[Symbol.iterator](){return this}}}}function ct(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Yi(){const e={get(r){return mo(this,r)},get size(){return bo(this)},has:go,add:ts,set:os,delete:ns,clear:ss,forEach:vo(!1,!1)},t={get(r){return mo(this,r,!1,!0)},get size(){return bo(this)},has:go,add(r){return ts.call(this,r,!0)},set(r,i){return os.call(this,r,i,!0)},delete:ns,clear:ss,forEach:vo(!1,!0)},o={get(r){return mo(this,r,!0)},get size(){return bo(this,!0)},has(r){return go.call(this,r,!0)},add:ct("add"),set:ct("set"),delete:ct("delete"),clear:ct("clear"),forEach:vo(!0,!1)},n={get(r){return mo(this,r,!0,!0)},get size(){return bo(this,!0)},has(r){return go.call(this,r,!0)},add:ct("add"),set:ct("set"),delete:ct("delete"),clear:ct("clear"),forEach:vo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=yo(r,!1,!1),o[r]=yo(r,!0,!1),t[r]=yo(r,!1,!0),n[r]=yo(r,!0,!0)}),[e,o,t,n]}const[Xi,ea,ta,oa]=Yi();function Wn(e,t){const o=t?e?oa:ta:e?ea:Xi;return(n,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?n:Reflect.get(Y(o,s)&&s in n?o:n,s,r)}const na={get:Wn(!1,!1)},sa={get:Wn(!1,!0)},ra={get:Wn(!0,!1)};const br=new WeakMap,vr=new WeakMap,yr=new WeakMap,ia=new WeakMap;function aa(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function la(e){return e.__v_skip||!Object.isExtensible(e)?0:aa(Di(e))}function Oo(e){return Ut(e)?e:Rn(e,!1,Ji,na,br)}function _r(e){return Rn(e,!1,Zi,sa,vr)}function wr(e){return Rn(e,!0,Qi,ra,yr)}function Rn(e,t,o,n,s){if(!pe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=s.get(e);if(r)return r;const i=la(e);if(i===0)return e;const l=new Proxy(e,i===2?n:o);return s.set(e,l),l}function Yt(e){return Ut(e)?Yt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ut(e){return!!(e&&e.__v_isReadonly)}function jt(e){return!!(e&&e.__v_isShallow)}function Ar(e){return e?!!e.__v_raw:!1}function ee(e){const t=e&&e.__v_raw;return t?ee(t):e}function Ir(e){return Object.isExtensible(e)&&nr(e,"__v_skip",!0),e}const ro=e=>pe(e)?Oo(e):e,Mn=e=>pe(e)?wr(e):e;class Cr{constructor(t,o,n,s){this.getter=t,this._setter=o,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Ln(()=>t(this._value),()=>Ao(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=n}get value(){const t=ee(this);return(!t._cacheable||t.effect.dirty)&&yt(t._value,t._value=t.effect.run())&&Ao(t,4),Tr(t),t.effect._dirtyLevel>=2&&Ao(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function ca(e,t,o=!1){let n,s;const r=G(e);return r?(n=e,s=Ve):(n=e.get,s=e.set),new Cr(n,s,r||!s,o)}function Tr(e){var t;bt&&Lt&&(e=ee(e),dr(Lt,(t=e.dep)!=null?t:e.dep=pr(()=>e.dep=void 0,e instanceof Cr?e:void 0)))}function Ao(e,t=4,o,n){e=ee(e);const s=e.dep;s&&fr(s,t)}function ve(e){return!!(e&&e.__v_isRef===!0)}function xe(e){return Sr(e,!1)}function ua(e){return Sr(e,!0)}function Sr(e,t){return ve(e)?e:new da(e,t)}class da{constructor(t,o){this.__v_isShallow=o,this.dep=void 0,this.__v_isRef=!0,this._rawValue=o?t:ee(t),this._value=o?t:ro(t)}get value(){return Tr(this),this._value}set value(t){const o=this.__v_isShallow||jt(t)||Ut(t);t=o?t:ee(t),yt(t,this._rawValue)&&(this._rawValue,this._rawValue=t,this._value=o?t:ro(t),Ao(this,4))}}function fe(e){return ve(e)?e.value:e}const fa={get:(e,t,o)=>fe(Reflect.get(e,t,o)),set:(e,t,o,n)=>{const s=e[t];return ve(s)&&!ve(o)?(s.value=o,!0):Reflect.set(e,t,o,n)}};function Pr(e){return Yt(e)?e:new Proxy(e,fa)}/**
* @vue/runtime-core v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vt(e,t,o,n){try{return n?e(...n):e()}catch(s){Fo(s,t,o)}}function Be(e,t,o,n){if(G(e)){const s=vt(e,t,o,n);return s&&er(s)&&s.catch(r=>{Fo(r,t,o)}),s}if(F(e)){const s=[];for(let r=0;r<e.length;r++)s.push(Be(e[r],t,o,n));return s}}function Fo(e,t,o,n=!0){const s=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${o}`;for(;r;){const f=r.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](e,i,l)===!1)return}r=r.parent}const a=t.appContext.config.errorHandler;if(a){At(),vt(a,null,10,[e,i,l]),It();return}}pa(e,o,s,n)}function pa(e,t,o,n=!0){console.error(e)}let io=!1,mn=!1;const Te=[];let Xe=0;const Bt=[];let pt=null,xt=0;const xr=Promise.resolve();let Hn=null;function Er(e){const t=Hn||xr;return e?t.then(this?e.bind(this):e):t}function ha(e){let t=Xe+1,o=Te.length;for(;t<o;){const n=t+o>>>1,s=Te[n],r=ao(s);r<e||r===e&&s.pre?t=n+1:o=n}return t}function On(e){(!Te.length||!Te.includes(e,io&&e.allowRecurse?Xe+1:Xe))&&(e.id==null?Te.push(e):Te.splice(ha(e.id),0,e),Dr())}function Dr(){!io&&!mn&&(mn=!0,Hn=xr.then(kr))}function ma(e){const t=Te.indexOf(e);t>Xe&&Te.splice(t,1)}function ga(e){F(e)?Bt.push(...e):(!pt||!pt.includes(e,e.allowRecurse?xt+1:xt))&&Bt.push(e),Dr()}function rs(e,t,o=io?Xe+1:0){for(;o<Te.length;o++){const n=Te[o];if(n&&n.pre){if(e&&n.id!==e.uid)continue;Te.splice(o,1),o--,n()}}}function Lr(e){if(Bt.length){const t=[...new Set(Bt)].sort((o,n)=>ao(o)-ao(n));if(Bt.length=0,pt){pt.push(...t);return}for(pt=t,xt=0;xt<pt.length;xt++){const o=pt[xt];o.active!==!1&&o()}pt=null,xt=0}}const ao=e=>e.id==null?1/0:e.id,ba=(e,t)=>{const o=ao(e)-ao(t);if(o===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return o};function kr(e){mn=!1,io=!0,Te.sort(ba);try{for(Xe=0;Xe<Te.length;Xe++){const t=Te[Xe];t&&t.active!==!1&&vt(t,t.i,t.i?15:14)}}finally{Xe=0,Te.length=0,Lr(),io=!1,Hn=null,(Te.length||Bt.length)&&kr()}}let Se=null,Vo=null;function xo(e){const t=Se;return Se=e,Vo=e&&e.type.__scopeId||null,t}function Re(e){Vo=e}function Me(){Vo=null}function ie(e,t=Se,o){if(!t||e._n)return e;const n=(...s)=>{n._d&&ms(-1);const r=xo(t);let i;try{i=e(...s)}finally{xo(r),n._d&&ms(1)}return i};return n._n=!0,n._c=!0,n._d=!0,n}function Ct(e,t,o,n){const s=e.dirs,r=t&&t.dirs;for(let i=0;i<s.length;i++){const l=s[i];r&&(l.oldValue=r[i].value);let a=l.dir[n];a&&(At(),Be(a,o,8,[e.el,l,e,t]),It())}}const ht=Symbol("_leaveCb"),_o=Symbol("_enterCb");function va(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Or(()=>{e.isMounted=!0}),Fr(()=>{e.isUnmounting=!0}),e}const Oe=[Function,Array],Nr={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Oe,onEnter:Oe,onAfterEnter:Oe,onEnterCancelled:Oe,onBeforeLeave:Oe,onLeave:Oe,onAfterLeave:Oe,onLeaveCancelled:Oe,onBeforeAppear:Oe,onAppear:Oe,onAfterAppear:Oe,onAppearCancelled:Oe},Ur=e=>{const t=e.subTree;return t.component?Ur(t.component):t},ya={name:"BaseTransition",props:Nr,setup(e,{slots:t}){const o=gl(),n=va();return()=>{const s=t.default&&Rr(t.default(),!0);if(!s||!s.length)return;let r=s[0];if(s.length>1){for(const h of s)if(h.type!==Le){r=h;break}}const i=ee(e),{mode:l}=i;if(n.isLeaving)return Xo(r);const a=is(r);if(!a)return Xo(r);let f=gn(a,i,n,o,h=>f=h);Eo(a,f);const d=o.subTree,p=d&&is(d);if(p&&p.type!==Le&&!Dt(a,p)&&Ur(o).type!==Le){const h=gn(p,i,n,o);if(Eo(p,h),l==="out-in"&&a.type!==Le)return n.isLeaving=!0,h.afterLeave=()=>{n.isLeaving=!1,o.update.active!==!1&&(o.effect.dirty=!0,o.update())},Xo(r);l==="in-out"&&a.type!==Le&&(h.delayLeave=(g,L,x)=>{const V=Wr(n,p);V[String(p.key)]=p,g[ht]=()=>{L(),g[ht]=void 0,delete f.delayedLeave},f.delayedLeave=x})}return r}}},_a=ya;function Wr(e,t){const{leavingVNodes:o}=e;let n=o.get(t.type);return n||(n=Object.create(null),o.set(t.type,n)),n}function gn(e,t,o,n,s){const{appear:r,mode:i,persisted:l=!1,onBeforeEnter:a,onEnter:f,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:h,onLeave:g,onAfterLeave:L,onLeaveCancelled:x,onBeforeAppear:V,onAppear:H,onAfterAppear:W,onAppearCancelled:k}=t,z=String(e.key),le=Wr(o,e),O=(j,X)=>{j&&Be(j,n,9,X)},ce=(j,X)=>{const ue=X[1];O(j,X),F(j)?j.every(N=>N.length<=1)&&ue():j.length<=1&&ue()},ye={mode:i,persisted:l,beforeEnter(j){let X=a;if(!o.isMounted)if(r)X=V||a;else return;j[ht]&&j[ht](!0);const ue=le[z];ue&&Dt(e,ue)&&ue.el[ht]&&ue.el[ht](),O(X,[j])},enter(j){let X=f,ue=d,N=p;if(!o.isMounted)if(r)X=H||f,ue=W||d,N=k||p;else return;let te=!1;const _e=j[_o]=Ge=>{te||(te=!0,Ge?O(N,[j]):O(ue,[j]),ye.delayedLeave&&ye.delayedLeave(),j[_o]=void 0)};X?ce(X,[j,_e]):_e()},leave(j,X){const ue=String(e.key);if(j[_o]&&j[_o](!0),o.isUnmounting)return X();O(h,[j]);let N=!1;const te=j[ht]=_e=>{N||(N=!0,X(),_e?O(x,[j]):O(L,[j]),j[ht]=void 0,le[ue]===e&&delete le[ue])};le[ue]=e,g?ce(g,[j,te]):te()},clone(j){const X=gn(j,t,o,n,s);return s&&s(X),X}};return ye}function Xo(e){if(Bo(e))return e=_t(e),e.children=null,e}function is(e){if(!Bo(e))return e;const{shapeFlag:t,children:o}=e;if(o){if(t&16)return o[0];if(t&32&&G(o.default))return o.default()}}function Eo(e,t){e.shapeFlag&6&&e.component?Eo(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Rr(e,t=!1,o){let n=[],s=0;for(let r=0;r<e.length;r++){let i=e[r];const l=o==null?i.key:String(o)+String(i.key!=null?i.key:r);i.type===q?(i.patchFlag&128&&s++,n=n.concat(Rr(i.children,t,l))):(t||i.type!==Le)&&n.push(l!=null?_t(i,{key:l}):i)}if(s>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}/*! #__NO_SIDE_EFFECTS__ */function Mr(e,t){return G(e)?Ae({name:e.name},t,{setup:e}):e}const Xt=e=>!!e.type.__asyncLoader,Bo=e=>e.type.__isKeepAlive;function wa(e,t){Hr(e,"a",t)}function Aa(e,t){Hr(e,"da",t)}function Hr(e,t,o=Ce){const n=e.__wdc||(e.__wdc=()=>{let s=o;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Go(t,n,o),o){let s=o.parent;for(;s&&s.parent;)Bo(s.parent.vnode)&&Ia(n,t,o,s),s=s.parent}}function Ia(e,t,o,n){const s=Go(t,e,n,!0);Vr(()=>{xn(n[t],s)},o)}function Go(e,t,o=Ce,n=!1){if(o){const s=o[e]||(o[e]=[]),r=t.__weh||(t.__weh=(...i)=>{At();const l=po(o),a=Be(t,o,e,i);return l(),It(),a});return n?s.unshift(r):s.push(r),r}}const at=e=>(t,o=Ce)=>{(!zo||e==="sp")&&Go(e,(...n)=>t(...n),o)},Ca=at("bm"),Or=at("m"),Ta=at("bu"),Sa=at("u"),Fr=at("bum"),Vr=at("um"),Pa=at("sp"),xa=at("rtg"),Ea=at("rtc");function Da(e,t=Ce){Go("ec",e,t)}const Br="components";function Do(e,t){return jr(Br,e,!0,t)||e}const Gr=Symbol.for("v-ndc");function La(e){return be(e)?jr(Br,e,!1)||e:e||Gr}function jr(e,t,o=!0,n=!1){const s=Se||Ce;if(s){const r=s.type;{const l=wl(r,!1);if(l&&(l===t||l===qe(t)||l===Mo(qe(t))))return r}const i=as(s[e]||r[e],t)||as(s.appContext[e],t);return!i&&n?r:i}}function as(e,t){return e&&(e[t]||e[qe(t)]||e[Mo(qe(t))])}function en(e,t,o={},n,s){if(Se.isCE||Se.parent&&Xt(Se.parent)&&Se.parent.isCE)return t!=="default"&&(o.name=t),P("slot",o,n&&n());let r=e[t];r&&r._c&&(r._d=!1),$();const i=r&&$r(r(o)),l=Ko(q,{key:(o.key||i&&i.key||`_${t}`)+(!i&&n?"_fb":"")},i||(n?n():[]),i&&e._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),r&&r._c&&(r._d=!0),l}function $r(e){return e.some(t=>ko(t)?!(t.type===Le||t.type===q&&!$r(t.children)):!0)?e:null}const bn=e=>e?ui(e)?Gn(e):bn(e.parent):null,eo=Ae(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>bn(e.parent),$root:e=>bn(e.root),$emit:e=>e.emit,$options:e=>Fn(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,On(e.update)}),$nextTick:e=>e.n||(e.n=Er.bind(e.proxy)),$watch:e=>el.bind(e)}),tn=(e,t)=>e!==me&&!e.__isScriptSetup&&Y(e,t),ka={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:o,setupState:n,data:s,props:r,accessCache:i,type:l,appContext:a}=e;let f;if(t[0]!=="$"){const g=i[t];if(g!==void 0)switch(g){case 1:return n[t];case 2:return s[t];case 4:return o[t];case 3:return r[t]}else{if(tn(n,t))return i[t]=1,n[t];if(s!==me&&Y(s,t))return i[t]=2,s[t];if((f=e.propsOptions[0])&&Y(f,t))return i[t]=3,r[t];if(o!==me&&Y(o,t))return i[t]=4,o[t];vn&&(i[t]=0)}}const d=eo[t];let p,h;if(d)return t==="$attrs"&&ke(e.attrs,"get",""),d(e);if((p=l.__cssModules)&&(p=p[t]))return p;if(o!==me&&Y(o,t))return i[t]=4,o[t];if(h=a.config.globalProperties,Y(h,t))return h[t]},set({_:e},t,o){const{data:n,setupState:s,ctx:r}=e;return tn(s,t)?(s[t]=o,!0):n!==me&&Y(n,t)?(n[t]=o,!0):Y(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=o,!0)},has({_:{data:e,setupState:t,accessCache:o,ctx:n,appContext:s,propsOptions:r}},i){let l;return!!o[i]||e!==me&&Y(e,i)||tn(t,i)||(l=r[0])&&Y(l,i)||Y(n,i)||Y(eo,i)||Y(s.config.globalProperties,i)},defineProperty(e,t,o){return o.get!=null?e._.accessCache[t]=0:Y(o,"value")&&this.set(e,t,o.value,null),Reflect.defineProperty(e,t,o)}};function ls(e){return F(e)?e.reduce((t,o)=>(t[o]=null,t),{}):e}let vn=!0;function Na(e){const t=Fn(e),o=e.proxy,n=e.ctx;vn=!1,t.beforeCreate&&cs(t.beforeCreate,e,"bc");const{data:s,computed:r,methods:i,watch:l,provide:a,inject:f,created:d,beforeMount:p,mounted:h,beforeUpdate:g,updated:L,activated:x,deactivated:V,beforeDestroy:H,beforeUnmount:W,destroyed:k,unmounted:z,render:le,renderTracked:O,renderTriggered:ce,errorCaptured:ye,serverPrefetch:j,expose:X,inheritAttrs:ue,components:N,directives:te,filters:_e}=t;if(f&&Ua(f,n,null),i)for(const ae in i){const oe=i[ae];G(oe)&&(n[ae]=oe.bind(o))}if(s){const ae=s.call(o,o);pe(ae)&&(e.data=Oo(ae))}if(vn=!0,r)for(const ae in r){const oe=r[ae],tt=G(oe)?oe.bind(o,o):G(oe.get)?oe.get.bind(o,o):Ve,lt=!G(oe)&&G(oe.set)?oe.set.bind(o):Ve,Je=Ke({get:tt,set:lt});Object.defineProperty(n,ae,{enumerable:!0,configurable:!0,get:()=>Je.value,set:Ee=>Je.value=Ee})}if(l)for(const ae in l)Kr(l[ae],n,o,ae);if(a){const ae=G(a)?a.call(o):a;Reflect.ownKeys(ae).forEach(oe=>{Io(oe,ae[oe])})}d&&cs(d,e,"c");function ge(ae,oe){F(oe)?oe.forEach(tt=>ae(tt.bind(o))):oe&&ae(oe.bind(o))}if(ge(Ca,p),ge(Or,h),ge(Ta,g),ge(Sa,L),ge(wa,x),ge(Aa,V),ge(Da,ye),ge(Ea,O),ge(xa,ce),ge(Fr,W),ge(Vr,z),ge(Pa,j),F(X))if(X.length){const ae=e.exposed||(e.exposed={});X.forEach(oe=>{Object.defineProperty(ae,oe,{get:()=>o[oe],set:tt=>o[oe]=tt})})}else e.exposed||(e.exposed={});le&&e.render===Ve&&(e.render=le),ue!=null&&(e.inheritAttrs=ue),N&&(e.components=N),te&&(e.directives=te)}function Ua(e,t,o=Ve){F(e)&&(e=yn(e));for(const n in e){const s=e[n];let r;pe(s)?"default"in s?r=rt(s.from||n,s.default,!0):r=rt(s.from||n):r=rt(s),ve(r)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:i=>r.value=i}):t[n]=r}}function cs(e,t,o){Be(F(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,o)}function Kr(e,t,o,n){const s=n.includes(".")?ii(o,n):()=>o[n];if(be(e)){const r=t[e];G(r)&&Co(s,r)}else if(G(e))Co(s,e.bind(o));else if(pe(e))if(F(e))e.forEach(r=>Kr(r,t,o,n));else{const r=G(e.handler)?e.handler.bind(o):t[e.handler];G(r)&&Co(s,r,e)}}function Fn(e){const t=e.type,{mixins:o,extends:n}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:i}}=e.appContext,l=r.get(t);let a;return l?a=l:!s.length&&!o&&!n?a=t:(a={},s.length&&s.forEach(f=>Lo(a,f,i,!0)),Lo(a,t,i)),pe(t)&&r.set(t,a),a}function Lo(e,t,o,n=!1){const{mixins:s,extends:r}=t;r&&Lo(e,r,o,!0),s&&s.forEach(i=>Lo(e,i,o,!0));for(const i in t)if(!(n&&i==="expose")){const l=Wa[i]||o&&o[i];e[i]=l?l(e[i],t[i]):t[i]}return e}const Wa={data:us,props:ds,emits:ds,methods:Qt,computed:Qt,beforeCreate:Pe,created:Pe,beforeMount:Pe,mounted:Pe,beforeUpdate:Pe,updated:Pe,beforeDestroy:Pe,beforeUnmount:Pe,destroyed:Pe,unmounted:Pe,activated:Pe,deactivated:Pe,errorCaptured:Pe,serverPrefetch:Pe,components:Qt,directives:Qt,watch:Ma,provide:us,inject:Ra};function us(e,t){return t?e?function(){return Ae(G(e)?e.call(this,this):e,G(t)?t.call(this,this):t)}:t:e}function Ra(e,t){return Qt(yn(e),yn(t))}function yn(e){if(F(e)){const t={};for(let o=0;o<e.length;o++)t[e[o]]=e[o];return t}return e}function Pe(e,t){return e?[...new Set([].concat(e,t))]:t}function Qt(e,t){return e?Ae(Object.create(null),e,t):t}function ds(e,t){return e?F(e)&&F(t)?[...new Set([...e,...t])]:Ae(Object.create(null),ls(e),ls(t??{})):t}function Ma(e,t){if(!e)return t;if(!t)return e;const o=Ae(Object.create(null),e);for(const n in t)o[n]=Pe(e[n],t[n]);return o}function qr(){return{app:null,config:{isNativeTag:xi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ha=0;function Oa(e,t){return function(n,s=null){G(n)||(n=Ae({},n)),s!=null&&!pe(s)&&(s=null);const r=qr(),i=new WeakSet;let l=!1;const a=r.app={_uid:Ha++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:Il,get config(){return r.config},set config(f){},use(f,...d){return i.has(f)||(f&&G(f.install)?(i.add(f),f.install(a,...d)):G(f)&&(i.add(f),f(a,...d))),a},mixin(f){return r.mixins.includes(f)||r.mixins.push(f),a},component(f,d){return d?(r.components[f]=d,a):r.components[f]},directive(f,d){return d?(r.directives[f]=d,a):r.directives[f]},mount(f,d,p){if(!l){const h=P(n,s);return h.appContext=r,p===!0?p="svg":p===!1&&(p=void 0),d&&t?t(h,f):e(h,f,p),l=!0,a._container=f,f.__vue_app__=a,Gn(h.component)}},unmount(){l&&(e(null,a._container),delete a._container.__vue_app__)},provide(f,d){return r.provides[f]=d,a},runWithContext(f){const d=Gt;Gt=a;try{return f()}finally{Gt=d}}};return a}}let Gt=null;function Io(e,t){if(Ce){let o=Ce.provides;const n=Ce.parent&&Ce.parent.provides;n===o&&(o=Ce.provides=Object.create(n)),o[e]=t}}function rt(e,t,o=!1){const n=Ce||Se;if(n||Gt){const s=Gt?Gt._context.provides:n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return o&&G(t)?t.call(n&&n.proxy):t}}const zr={},Jr=()=>Object.create(zr),Qr=e=>Object.getPrototypeOf(e)===zr;function Fa(e,t,o,n=!1){const s={},r=Jr();e.propsDefaults=Object.create(null),Zr(e,t,s,r);for(const i in e.propsOptions[0])i in s||(s[i]=void 0);o?e.props=n?s:_r(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function Va(e,t,o,n){const{props:s,attrs:r,vnode:{patchFlag:i}}=e,l=ee(s),[a]=e.propsOptions;let f=!1;if((n||i>0)&&!(i&16)){if(i&8){const d=e.vnode.dynamicProps;for(let p=0;p<d.length;p++){let h=d[p];if(jo(e.emitsOptions,h))continue;const g=t[h];if(a)if(Y(r,h))g!==r[h]&&(r[h]=g,f=!0);else{const L=qe(h);s[L]=_n(a,l,L,g,e,!1)}else g!==r[h]&&(r[h]=g,f=!0)}}}else{Zr(e,t,s,r)&&(f=!0);let d;for(const p in l)(!t||!Y(t,p)&&((d=Wt(p))===p||!Y(t,d)))&&(a?o&&(o[p]!==void 0||o[d]!==void 0)&&(s[p]=_n(a,l,p,void 0,e,!0)):delete s[p]);if(r!==l)for(const p in r)(!t||!Y(t,p))&&(delete r[p],f=!0)}f&&st(e.attrs,"set","")}function Zr(e,t,o,n){const[s,r]=e.propsOptions;let i=!1,l;if(t)for(let a in t){if(Zt(a))continue;const f=t[a];let d;s&&Y(s,d=qe(a))?!r||!r.includes(d)?o[d]=f:(l||(l={}))[d]=f:jo(e.emitsOptions,a)||(!(a in n)||f!==n[a])&&(n[a]=f,i=!0)}if(r){const a=ee(o),f=l||me;for(let d=0;d<r.length;d++){const p=r[d];o[p]=_n(s,a,p,f[p],e,!Y(f,p))}}return i}function _n(e,t,o,n,s,r){const i=e[o];if(i!=null){const l=Y(i,"default");if(l&&n===void 0){const a=i.default;if(i.type!==Function&&!i.skipFactory&&G(a)){const{propsDefaults:f}=s;if(o in f)n=f[o];else{const d=po(s);n=f[o]=a.call(null,t),d()}}else n=a}i[0]&&(r&&!l?n=!1:i[1]&&(n===""||n===Wt(o))&&(n=!0))}return n}const Ba=new WeakMap;function Yr(e,t,o=!1){const n=o?Ba:t.propsCache,s=n.get(e);if(s)return s;const r=e.props,i={},l=[];let a=!1;if(!G(e)){const d=p=>{a=!0;const[h,g]=Yr(p,t,!0);Ae(i,h),g&&l.push(...g)};!o&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!r&&!a)return pe(e)&&n.set(e,Ft),Ft;if(F(r))for(let d=0;d<r.length;d++){const p=qe(r[d]);fs(p)&&(i[p]=me)}else if(r)for(const d in r){const p=qe(d);if(fs(p)){const h=r[d],g=i[p]=F(h)||G(h)?{type:h}:Ae({},h),L=g.type;let x=!1,V=!0;if(F(L))for(let H=0;H<L.length;++H){const W=L[H],k=G(W)&&W.name;if(k==="Boolean"){x=!0;break}else k==="String"&&(V=!1)}else x=G(L)&&L.name==="Boolean";g[0]=x,g[1]=V,(x||Y(g,"default"))&&l.push(p)}}const f=[i,l];return pe(e)&&n.set(e,f),f}function fs(e){return e[0]!=="$"&&!Zt(e)}const Xr=e=>e[0]==="_"||e==="$stable",Vn=e=>F(e)?e.map(Ye):[Ye(e)],Ga=(e,t,o)=>{if(t._n)return t;const n=ie((...s)=>Vn(t(...s)),o);return n._c=!1,n},ei=(e,t,o)=>{const n=e._ctx;for(const s in e){if(Xr(s))continue;const r=e[s];if(G(r))t[s]=Ga(s,r,n);else if(r!=null){const i=Vn(r);t[s]=()=>i}}},ti=(e,t)=>{const o=Vn(t);e.slots.default=()=>o},oi=(e,t,o)=>{for(const n in t)(o||n!=="_")&&(e[n]=t[n])},ja=(e,t,o)=>{const n=e.slots=Jr();if(e.vnode.shapeFlag&32){const s=t._;s?(oi(n,t,o),o&&nr(n,"_",s,!0)):ei(t,n)}else t&&ti(e,t)},$a=(e,t,o)=>{const{vnode:n,slots:s}=e;let r=!0,i=me;if(n.shapeFlag&32){const l=t._;l?o&&l===1?r=!1:oi(s,t,o):(r=!t.$stable,ei(t,s)),i=t}else t&&(ti(e,t),i={default:1});if(r)for(const l in s)!Xr(l)&&i[l]==null&&delete s[l]};function wn(e,t,o,n,s=!1){if(F(e)){e.forEach((h,g)=>wn(h,t&&(F(t)?t[g]:t),o,n,s));return}if(Xt(n)&&!s)return;const r=n.shapeFlag&4?Gn(n.component):n.el,i=s?null:r,{i:l,r:a}=e,f=t&&t.r,d=l.refs===me?l.refs={}:l.refs,p=l.setupState;if(f!=null&&f!==a&&(be(f)?(d[f]=null,Y(p,f)&&(p[f]=null)):ve(f)&&(f.value=null)),G(a))vt(a,l,12,[i,d]);else{const h=be(a),g=ve(a);if(h||g){const L=()=>{if(e.f){const x=h?Y(p,a)?p[a]:d[a]:a.value;s?F(x)&&xn(x,r):F(x)?x.includes(r)||x.push(r):h?(d[a]=[r],Y(p,a)&&(p[a]=d[a])):(a.value=[r],e.k&&(d[e.k]=a.value))}else h?(d[a]=i,Y(p,a)&&(p[a]=i)):g&&(a.value=i,e.k&&(d[e.k]=i))};i?(L.id=-1,De(L,o)):L()}}}const Ka=Symbol("_vte"),qa=e=>e.__isTeleport,De=ll;function za(e){return Ja(e)}function Ja(e,t){const o=sr();o.__VUE__=!0;const{insert:n,remove:s,patchProp:r,createElement:i,createText:l,createComment:a,setText:f,setElementText:d,parentNode:p,nextSibling:h,setScopeId:g=Ve,insertStaticContent:L}=e,x=(c,u,m,_=null,v=null,A=null,T=void 0,I=null,C=!!u.dynamicChildren)=>{if(c===u)return;c&&!Dt(c,u)&&(_=y(c),Ee(c,v,A,!0),c=null),u.patchFlag===-2&&(C=!1,u.dynamicChildren=null);const{type:w,ref:D,shapeFlag:M}=u;switch(w){case $o:V(c,u,m,_);break;case Le:H(c,u,m,_);break;case To:c==null&&W(u,m,_,T);break;case q:N(c,u,m,_,v,A,T,I,C);break;default:M&1?le(c,u,m,_,v,A,T,I,C):M&6?te(c,u,m,_,v,A,T,I,C):(M&64||M&128)&&w.process(c,u,m,_,v,A,T,I,C,U)}D!=null&&v&&wn(D,c&&c.ref,A,u||c,!u)},V=(c,u,m,_)=>{if(c==null)n(u.el=l(u.children),m,_);else{const v=u.el=c.el;u.children!==c.children&&f(v,u.children)}},H=(c,u,m,_)=>{c==null?n(u.el=a(u.children||""),m,_):u.el=c.el},W=(c,u,m,_)=>{[c.el,c.anchor]=L(c.children,u,m,_,c.el,c.anchor)},k=({el:c,anchor:u},m,_)=>{let v;for(;c&&c!==u;)v=h(c),n(c,m,_),c=v;n(u,m,_)},z=({el:c,anchor:u})=>{let m;for(;c&&c!==u;)m=h(c),s(c),c=m;s(u)},le=(c,u,m,_,v,A,T,I,C)=>{u.type==="svg"?T="svg":u.type==="math"&&(T="mathml"),c==null?O(u,m,_,v,A,T,I,C):j(c,u,v,A,T,I,C)},O=(c,u,m,_,v,A,T,I)=>{let C,w;const{props:D,shapeFlag:M,transition:R,dirs:B}=c;if(C=c.el=i(c.type,A,D&&D.is,D),M&8?d(C,c.children):M&16&&ye(c.children,C,null,_,v,on(c,A),T,I),B&&Ct(c,null,_,"created"),ce(C,c,c.scopeId,T,_),D){for(const de in D)de!=="value"&&!Zt(de)&&r(C,de,null,D[de],A,_);"value"in D&&r(C,"value",null,D.value,A),(w=D.onVnodeBeforeMount)&&Ze(w,_,c)}B&&Ct(c,null,_,"beforeMount");const K=Qa(v,R);K&&R.beforeEnter(C),n(C,u,m),((w=D&&D.onVnodeMounted)||K||B)&&De(()=>{w&&Ze(w,_,c),K&&R.enter(C),B&&Ct(c,null,_,"mounted")},v)},ce=(c,u,m,_,v)=>{if(m&&g(c,m),_)for(let A=0;A<_.length;A++)g(c,_[A]);if(v){let A=v.subTree;if(u===A){const T=v.vnode;ce(c,T,T.scopeId,T.slotScopeIds,v.parent)}}},ye=(c,u,m,_,v,A,T,I,C=0)=>{for(let w=C;w<c.length;w++){const D=c[w]=I?mt(c[w]):Ye(c[w]);x(null,D,u,m,_,v,A,T,I)}},j=(c,u,m,_,v,A,T)=>{const I=u.el=c.el;let{patchFlag:C,dynamicChildren:w,dirs:D}=u;C|=c.patchFlag&16;const M=c.props||me,R=u.props||me;let B;if(m&&Tt(m,!1),(B=R.onVnodeBeforeUpdate)&&Ze(B,m,u,c),D&&Ct(u,c,m,"beforeUpdate"),m&&Tt(m,!0),(M.innerHTML&&R.innerHTML==null||M.textContent&&R.textContent==null)&&d(I,""),w?X(c.dynamicChildren,w,I,m,_,on(u,v),A):T||oe(c,u,I,null,m,_,on(u,v),A,!1),C>0){if(C&16)ue(I,M,R,m,v);else if(C&2&&M.class!==R.class&&r(I,"class",null,R.class,v),C&4&&r(I,"style",M.style,R.style,v),C&8){const K=u.dynamicProps;for(let de=0;de<K.length;de++){const ne=K[de],we=M[ne],je=R[ne];(je!==we||ne==="value")&&r(I,ne,we,je,v,m)}}C&1&&c.children!==u.children&&d(I,u.children)}else!T&&w==null&&ue(I,M,R,m,v);((B=R.onVnodeUpdated)||D)&&De(()=>{B&&Ze(B,m,u,c),D&&Ct(u,c,m,"updated")},_)},X=(c,u,m,_,v,A,T)=>{for(let I=0;I<u.length;I++){const C=c[I],w=u[I],D=C.el&&(C.type===q||!Dt(C,w)||C.shapeFlag&70)?p(C.el):m;x(C,w,D,null,_,v,A,T,!0)}},ue=(c,u,m,_,v)=>{if(u!==m){if(u!==me)for(const A in u)!Zt(A)&&!(A in m)&&r(c,A,u[A],null,v,_);for(const A in m){if(Zt(A))continue;const T=m[A],I=u[A];T!==I&&A!=="value"&&r(c,A,I,T,v,_)}"value"in m&&r(c,"value",u.value,m.value,v)}},N=(c,u,m,_,v,A,T,I,C)=>{const w=u.el=c?c.el:l(""),D=u.anchor=c?c.anchor:l("");let{patchFlag:M,dynamicChildren:R,slotScopeIds:B}=u;B&&(I=I?I.concat(B):B),c==null?(n(w,m,_),n(D,m,_),ye(u.children||[],m,D,v,A,T,I,C)):M>0&&M&64&&R&&c.dynamicChildren?(X(c.dynamicChildren,R,m,v,A,T,I),(u.key!=null||v&&u===v.subTree)&&ni(c,u,!0)):oe(c,u,m,D,v,A,T,I,C)},te=(c,u,m,_,v,A,T,I,C)=>{u.slotScopeIds=I,c==null?u.shapeFlag&512?v.ctx.activate(u,m,_,T,C):_e(u,m,_,v,A,T,C):Ge(c,u,C)},_e=(c,u,m,_,v,A,T)=>{const I=c.component=ml(c,_,v);if(Bo(c)&&(I.ctx.renderer=U),bl(I,!1,T),I.asyncDep){if(v&&v.registerDep(I,ge,T),!c.el){const C=I.subTree=P(Le);H(null,C,u,m)}}else ge(I,c,u,m,v,A,T)},Ge=(c,u,m)=>{const _=u.component=c.component;if(rl(c,u,m))if(_.asyncDep&&!_.asyncResolved){ae(_,u,m);return}else _.next=u,ma(_.update),_.effect.dirty=!0,_.update();else u.el=c.el,_.vnode=u},ge=(c,u,m,_,v,A,T)=>{const I=()=>{if(c.isMounted){let{next:D,bu:M,u:R,parent:B,vnode:K}=c;{const Ht=si(c);if(Ht){D&&(D.el=K.el,ae(c,D,T)),Ht.asyncDep.then(()=>{c.isUnmounted||I()});return}}let de=D,ne;Tt(c,!1),D?(D.el=K.el,ae(c,D,T)):D=K,M&&Zo(M),(ne=D.props&&D.props.onVnodeBeforeUpdate)&&Ze(ne,B,D,K),Tt(c,!0);const we=nn(c),je=c.subTree;c.subTree=we,x(je,we,p(je.el),y(je),c,v,A),D.el=we.el,de===null&&il(c,we.el),R&&De(R,v),(ne=D.props&&D.props.onVnodeUpdated)&&De(()=>Ze(ne,B,D,K),v)}else{let D;const{el:M,props:R}=u,{bm:B,m:K,parent:de}=c,ne=Xt(u);if(Tt(c,!1),B&&Zo(B),!ne&&(D=R&&R.onVnodeBeforeMount)&&Ze(D,de,u),Tt(c,!0),M&&he){const we=()=>{c.subTree=nn(c),he(M,c.subTree,c,v,null)};ne?u.type.__asyncLoader().then(()=>!c.isUnmounted&&we()):we()}else{const we=c.subTree=nn(c);x(null,we,m,_,c,v,A),u.el=we.el}if(K&&De(K,v),!ne&&(D=R&&R.onVnodeMounted)){const we=u;De(()=>Ze(D,de,we),v)}(u.shapeFlag&256||de&&Xt(de.vnode)&&de.vnode.shapeFlag&256)&&c.a&&De(c.a,v),c.isMounted=!0,u=m=_=null}},C=c.effect=new Ln(I,Ve,()=>On(w),c.scope),w=c.update=()=>{C.dirty&&C.run()};w.i=c,w.id=c.uid,Tt(c,!0),w()},ae=(c,u,m)=>{u.component=c;const _=c.vnode.props;c.vnode=u,c.next=null,Va(c,u.props,_,m),$a(c,u.children,m),At(),rs(c),It()},oe=(c,u,m,_,v,A,T,I,C=!1)=>{const w=c&&c.children,D=c?c.shapeFlag:0,M=u.children,{patchFlag:R,shapeFlag:B}=u;if(R>0){if(R&128){lt(w,M,m,_,v,A,T,I,C);return}else if(R&256){tt(w,M,m,_,v,A,T,I,C);return}}B&8?(D&16&&He(w,v,A),M!==w&&d(m,M)):D&16?B&16?lt(w,M,m,_,v,A,T,I,C):He(w,v,A,!0):(D&8&&d(m,""),B&16&&ye(M,m,_,v,A,T,I,C))},tt=(c,u,m,_,v,A,T,I,C)=>{c=c||Ft,u=u||Ft;const w=c.length,D=u.length,M=Math.min(w,D);let R;for(R=0;R<M;R++){const B=u[R]=C?mt(u[R]):Ye(u[R]);x(c[R],B,m,null,v,A,T,I,C)}w>D?He(c,v,A,!0,!1,M):ye(u,m,_,v,A,T,I,C,M)},lt=(c,u,m,_,v,A,T,I,C)=>{let w=0;const D=u.length;let M=c.length-1,R=D-1;for(;w<=M&&w<=R;){const B=c[w],K=u[w]=C?mt(u[w]):Ye(u[w]);if(Dt(B,K))x(B,K,m,null,v,A,T,I,C);else break;w++}for(;w<=M&&w<=R;){const B=c[M],K=u[R]=C?mt(u[R]):Ye(u[R]);if(Dt(B,K))x(B,K,m,null,v,A,T,I,C);else break;M--,R--}if(w>M){if(w<=R){const B=R+1,K=B<D?u[B].el:_;for(;w<=R;)x(null,u[w]=C?mt(u[w]):Ye(u[w]),m,K,v,A,T,I,C),w++}}else if(w>R)for(;w<=M;)Ee(c[w],v,A,!0),w++;else{const B=w,K=w,de=new Map;for(w=K;w<=R;w++){const Ue=u[w]=C?mt(u[w]):Ye(u[w]);Ue.key!=null&&de.set(Ue.key,w)}let ne,we=0;const je=R-K+1;let Ht=!1,zn=0;const qt=new Array(je);for(w=0;w<je;w++)qt[w]=0;for(w=B;w<=M;w++){const Ue=c[w];if(we>=je){Ee(Ue,v,A,!0);continue}let Qe;if(Ue.key!=null)Qe=de.get(Ue.key);else for(ne=K;ne<=R;ne++)if(qt[ne-K]===0&&Dt(Ue,u[ne])){Qe=ne;break}Qe===void 0?Ee(Ue,v,A,!0):(qt[Qe-K]=w+1,Qe>=zn?zn=Qe:Ht=!0,x(Ue,u[Qe],m,null,v,A,T,I,C),we++)}const Jn=Ht?Za(qt):Ft;for(ne=Jn.length-1,w=je-1;w>=0;w--){const Ue=K+w,Qe=u[Ue],Qn=Ue+1<D?u[Ue+1].el:_;qt[w]===0?x(null,Qe,m,Qn,v,A,T,I,C):Ht&&(ne<0||w!==Jn[ne]?Je(Qe,m,Qn,2):ne--)}}},Je=(c,u,m,_,v=null)=>{const{el:A,type:T,transition:I,children:C,shapeFlag:w}=c;if(w&6){Je(c.component.subTree,u,m,_);return}if(w&128){c.suspense.move(u,m,_);return}if(w&64){T.move(c,u,m,U);return}if(T===q){n(A,u,m);for(let M=0;M<C.length;M++)Je(C[M],u,m,_);n(c.anchor,u,m);return}if(T===To){k(c,u,m);return}if(_!==2&&w&1&&I)if(_===0)I.beforeEnter(A),n(A,u,m),De(()=>I.enter(A),v);else{const{leave:M,delayLeave:R,afterLeave:B}=I,K=()=>n(A,u,m),de=()=>{M(A,()=>{K(),B&&B()})};R?R(A,K,de):de()}else n(A,u,m)},Ee=(c,u,m,_=!1,v=!1)=>{const{type:A,props:T,ref:I,children:C,dynamicChildren:w,shapeFlag:D,patchFlag:M,dirs:R,cacheIndex:B}=c;if(M===-2&&(v=!1),I!=null&&wn(I,null,m,c,!0),B!=null&&(u.renderCache[B]=void 0),D&256){u.ctx.deactivate(c);return}const K=D&1&&R,de=!Xt(c);let ne;if(de&&(ne=T&&T.onVnodeBeforeUnmount)&&Ze(ne,u,c),D&6)ho(c.component,m,_);else{if(D&128){c.suspense.unmount(m,_);return}K&&Ct(c,null,u,"beforeUnmount"),D&64?c.type.remove(c,u,m,U,_):w&&!w.hasOnce&&(A!==q||M>0&&M&64)?He(w,u,m,!1,!0):(A===q&&M&384||!v&&D&16)&&He(C,u,m),_&&Rt(c)}(de&&(ne=T&&T.onVnodeUnmounted)||K)&&De(()=>{ne&&Ze(ne,u,c),K&&Ct(c,null,u,"unmounted")},m)},Rt=c=>{const{type:u,el:m,anchor:_,transition:v}=c;if(u===q){Mt(m,_);return}if(u===To){z(c);return}const A=()=>{s(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(c.shapeFlag&1&&v&&!v.persisted){const{leave:T,delayLeave:I}=v,C=()=>T(m,A);I?I(c.el,A,C):C()}else A()},Mt=(c,u)=>{let m;for(;c!==u;)m=h(c),s(c),c=m;s(u)},ho=(c,u,m)=>{const{bum:_,scope:v,update:A,subTree:T,um:I,m:C,a:w}=c;ps(C),ps(w),_&&Zo(_),v.stop(),A&&(A.active=!1,Ee(T,c,u,m)),I&&De(I,u),De(()=>{c.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},He=(c,u,m,_=!1,v=!1,A=0)=>{for(let T=A;T<c.length;T++)Ee(c[T],u,m,_,v)},y=c=>{if(c.shapeFlag&6)return y(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const u=h(c.anchor||c.el),m=u&&u[Ka];return m?h(m):u};let E=!1;const S=(c,u,m)=>{c==null?u._vnode&&Ee(u._vnode,null,null,!0):x(u._vnode||null,c,u,null,null,null,m),u._vnode=c,E||(E=!0,rs(),Lr(),E=!1)},U={p:x,um:Ee,m:Je,r:Rt,mt:_e,mc:ye,pc:oe,pbc:X,n:y,o:e};let se,he;return{render:S,hydrate:se,createApp:Oa(S,se)}}function on({type:e,props:t},o){return o==="svg"&&e==="foreignObject"||o==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:o}function Tt({effect:e,update:t},o){e.allowRecurse=t.allowRecurse=o}function Qa(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ni(e,t,o=!1){const n=e.children,s=t.children;if(F(n)&&F(s))for(let r=0;r<n.length;r++){const i=n[r];let l=s[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[r]=mt(s[r]),l.el=i.el),!o&&l.patchFlag!==-2&&ni(i,l)),l.type===$o&&(l.el=i.el)}}function Za(e){const t=e.slice(),o=[0];let n,s,r,i,l;const a=e.length;for(n=0;n<a;n++){const f=e[n];if(f!==0){if(s=o[o.length-1],e[s]<f){t[n]=s,o.push(n);continue}for(r=0,i=o.length-1;r<i;)l=r+i>>1,e[o[l]]<f?r=l+1:i=l;f<e[o[r]]&&(r>0&&(t[n]=o[r-1]),o[r]=n)}}for(r=o.length,i=o[r-1];r-- >0;)o[r]=i,i=t[i];return o}function si(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:si(t)}function ps(e){if(e)for(let t=0;t<e.length;t++)e[t].active=!1}const Ya=Symbol.for("v-scx"),Xa=()=>rt(Ya),wo={};function Co(e,t,o){return ri(e,t,o)}function ri(e,t,{immediate:o,deep:n,flush:s,once:r,onTrack:i,onTrigger:l}=me){if(t&&r){const O=t;t=(...ce)=>{O(...ce),le()}}const a=Ce,f=O=>n===!0?O:Et(O,n===!1?1:void 0);let d,p=!1,h=!1;if(ve(e)?(d=()=>e.value,p=jt(e)):Yt(e)?(d=()=>f(e),p=!0):F(e)?(h=!0,p=e.some(O=>Yt(O)||jt(O)),d=()=>e.map(O=>{if(ve(O))return O.value;if(Yt(O))return f(O);if(G(O))return vt(O,a,2)})):G(e)?t?d=()=>vt(e,a,2):d=()=>(g&&g(),Be(e,a,3,[L])):d=Ve,t&&n){const O=d;d=()=>Et(O())}let g,L=O=>{g=k.onStop=()=>{vt(O,a,4),g=k.onStop=void 0}},x;if(zo)if(L=Ve,t?o&&Be(t,a,3,[d(),h?[]:void 0,L]):d(),s==="sync"){const O=Xa();x=O.__watcherHandles||(O.__watcherHandles=[])}else return Ve;let V=h?new Array(e.length).fill(wo):wo;const H=()=>{if(!(!k.active||!k.dirty))if(t){const O=k.run();(n||p||(h?O.some((ce,ye)=>yt(ce,V[ye])):yt(O,V)))&&(g&&g(),Be(t,a,3,[O,V===wo?void 0:h&&V[0]===wo?[]:V,L]),V=O)}else k.run()};H.allowRecurse=!!t;let W;s==="sync"?W=H:s==="post"?W=()=>De(H,a&&a.suspense):(H.pre=!0,a&&(H.id=a.uid),W=()=>On(H));const k=new Ln(d,Ve,W),z=Gi(),le=()=>{k.stop(),z&&xn(z.effects,k)};return t?o?H():V=k.run():s==="post"?De(k.run.bind(k),a&&a.suspense):k.run(),x&&x.push(le),le}function el(e,t,o){const n=this.proxy,s=be(e)?e.includes(".")?ii(n,e):()=>n[e]:e.bind(n,n);let r;G(t)?r=t:(r=t.handler,o=t);const i=po(this),l=ri(s,r.bind(n),o);return i(),l}function ii(e,t){const o=t.split(".");return()=>{let n=e;for(let s=0;s<o.length&&n;s++)n=n[o[s]];return n}}function Et(e,t=1/0,o){if(t<=0||!pe(e)||e.__v_skip||(o=o||new Set,o.has(e)))return e;if(o.add(e),t--,ve(e))Et(e.value,t,o);else if(F(e))for(let n=0;n<e.length;n++)Et(e[n],t,o);else if(Xs(e)||Vt(e))e.forEach(n=>{Et(n,t,o)});else if(or(e)){for(const n in e)Et(e[n],t,o);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&Et(e[n],t,o)}return e}const tl=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${qe(t)}Modifiers`]||e[`${Wt(t)}Modifiers`];function ol(e,t,...o){if(e.isUnmounted)return;const n=e.vnode.props||me;let s=o;const r=t.startsWith("update:"),i=r&&tl(n,t.slice(7));i&&(i.trim&&(s=o.map(d=>be(d)?d.trim():d)),i.number&&(s=o.map(Ni)));let l,a=n[l=Qo(t)]||n[l=Qo(qe(t))];!a&&r&&(a=n[l=Qo(Wt(t))]),a&&Be(a,e,6,s);const f=n[l+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Be(f,e,6,s)}}function ai(e,t,o=!1){const n=t.emitsCache,s=n.get(e);if(s!==void 0)return s;const r=e.emits;let i={},l=!1;if(!G(e)){const a=f=>{const d=ai(f,t,!0);d&&(l=!0,Ae(i,d))};!o&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!r&&!l?(pe(e)&&n.set(e,null),null):(F(r)?r.forEach(a=>i[a]=null):Ae(i,r),pe(e)&&n.set(e,i),i)}function jo(e,t){return!e||!Uo(t)?!1:(t=t.slice(2).replace(/Once$/,""),Y(e,t[0].toLowerCase()+t.slice(1))||Y(e,Wt(t))||Y(e,t))}function nn(e){const{type:t,vnode:o,proxy:n,withProxy:s,propsOptions:[r],slots:i,attrs:l,emit:a,render:f,renderCache:d,props:p,data:h,setupState:g,ctx:L,inheritAttrs:x}=e,V=xo(e);let H,W;try{if(o.shapeFlag&4){const z=s||n,le=z;H=Ye(f.call(le,z,d,p,g,h,L)),W=l}else{const z=t;H=Ye(z.length>1?z(p,{attrs:l,slots:i,emit:a}):z(p,null)),W=t.props?l:nl(l)}}catch(z){to.length=0,Fo(z,e,1),H=P(Le)}let k=H;if(W&&x!==!1){const z=Object.keys(W),{shapeFlag:le}=k;z.length&&le&7&&(r&&z.some(Pn)&&(W=sl(W,r)),k=_t(k,W,!1,!0))}return o.dirs&&(k=_t(k,null,!1,!0),k.dirs=k.dirs?k.dirs.concat(o.dirs):o.dirs),o.transition&&(k.transition=o.transition),H=k,xo(V),H}const nl=e=>{let t;for(const o in e)(o==="class"||o==="style"||Uo(o))&&((t||(t={}))[o]=e[o]);return t},sl=(e,t)=>{const o={};for(const n in e)(!Pn(n)||!(n.slice(9)in t))&&(o[n]=e[n]);return o};function rl(e,t,o){const{props:n,children:s,component:r}=e,{props:i,children:l,patchFlag:a}=t,f=r.emitsOptions;if(t.dirs||t.transition)return!0;if(o&&a>=0){if(a&1024)return!0;if(a&16)return n?hs(n,i,f):!!i;if(a&8){const d=t.dynamicProps;for(let p=0;p<d.length;p++){const h=d[p];if(i[h]!==n[h]&&!jo(f,h))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:n===i?!1:n?i?hs(n,i,f):!0:!!i;return!1}function hs(e,t,o){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let s=0;s<n.length;s++){const r=n[s];if(t[r]!==e[r]&&!jo(o,r))return!0}return!1}function il({vnode:e,parent:t},o){for(;t;){const n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.el=e.el),n===e)(e=t.vnode).el=o,t=t.parent;else break}}const al=e=>e.__isSuspense;function ll(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):ga(e)}const q=Symbol.for("v-fgt"),$o=Symbol.for("v-txt"),Le=Symbol.for("v-cmt"),To=Symbol.for("v-stc"),to=[];let We=null;function $(e=!1){to.push(We=e?null:[])}function cl(){to.pop(),We=to[to.length-1]||null}let lo=1;function ms(e){lo+=e,e<0&&We&&(We.hasOnce=!0)}function li(e){return e.dynamicChildren=lo>0?We||Ft:null,cl(),lo>0&&We&&We.push(e),e}function Q(e,t,o,n,s,r){return li(b(e,t,o,n,s,r,!0))}function Ko(e,t,o,n,s){return li(P(e,t,o,n,s,!0))}function ko(e){return e?e.__v_isVNode===!0:!1}function Dt(e,t){return e.type===t.type&&e.key===t.key}const ci=({key:e})=>e??null,So=({ref:e,ref_key:t,ref_for:o})=>(typeof e=="number"&&(e=""+e),e!=null?be(e)||ve(e)||G(e)?{i:Se,r:e,k:t,f:!!o}:e:null);function b(e,t=null,o=null,n=0,s=null,r=e===q?0:1,i=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ci(t),ref:t&&So(t),scopeId:Vo,slotScopeIds:null,children:o,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Se};return l?(Bn(a,o),r&128&&e.normalize(a)):o&&(a.shapeFlag|=be(o)?8:16),lo>0&&!i&&We&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&We.push(a),a}const P=ul;function ul(e,t=null,o=null,n=0,s=null,r=!1){if((!e||e===Gr)&&(e=Le),ko(e)){const l=_t(e,t,!0);return o&&Bn(l,o),lo>0&&!r&&We&&(l.shapeFlag&6?We[We.indexOf(e)]=l:We.push(l)),l.patchFlag=-2,l}if(Al(e)&&(e=e.__vccOpts),t){t=dl(t);let{class:l,style:a}=t;l&&!be(l)&&(t.class=so(l)),pe(a)&&(Ar(a)&&!F(a)&&(a=Ae({},a)),t.style=Dn(a))}const i=be(e)?1:al(e)?128:qa(e)?64:pe(e)?4:G(e)?2:0;return b(e,t,o,n,s,i,r,!0)}function dl(e){return e?Ar(e)||Qr(e)?Ae({},e):e:null}function _t(e,t,o=!1,n=!1){const{props:s,ref:r,patchFlag:i,children:l,transition:a}=e,f=t?fl(s||{},t):s,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&ci(f),ref:t&&t.ref?o&&r?F(r)?r.concat(So(t)):[r,So(t)]:So(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==q?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&_t(e.ssContent),ssFallback:e.ssFallback&&_t(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&n&&Eo(d,a.clone(d)),d}function J(e=" ",t=0){return P($o,null,e,t)}function qo(e,t){const o=P(To,null,e);return o.staticCount=t,o}function Nt(e="",t=!1){return t?($(),Ko(Le,null,e)):P(Le,null,e)}function Ye(e){return e==null||typeof e=="boolean"?P(Le):F(e)?P(q,null,e.slice()):typeof e=="object"?mt(e):P($o,null,String(e))}function mt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:_t(e)}function Bn(e,t){let o=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(F(t))o=16;else if(typeof t=="object")if(n&65){const s=t.default;s&&(s._c&&(s._d=!1),Bn(e,s()),s._c&&(s._d=!0));return}else{o=32;const s=t._;!s&&!Qr(t)?t._ctx=Se:s===3&&Se&&(Se.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else G(t)?(t={default:t,_ctx:Se},o=32):(t=String(t),n&64?(o=16,t=[J(t)]):o=8);e.children=t,e.shapeFlag|=o}function fl(...e){const t={};for(let o=0;o<e.length;o++){const n=e[o];for(const s in n)if(s==="class")t.class!==n.class&&(t.class=so([t.class,n.class]));else if(s==="style")t.style=Dn([t.style,n.style]);else if(Uo(s)){const r=t[s],i=n[s];i&&r!==i&&!(F(r)&&r.includes(i))&&(t[s]=r?[].concat(r,i):i)}else s!==""&&(t[s]=n[s])}return t}function Ze(e,t,o,n=null){Be(e,t,7,[o,n])}const pl=qr();let hl=0;function ml(e,t,o){const n=e.type,s=(t?t.appContext:e.appContext)||pl,r={uid:hl++,vnode:e,type:n,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new lr(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yr(n,s),emitsOptions:ai(n,s),emit:null,emitted:null,propsDefaults:me,inheritAttrs:n.inheritAttrs,ctx:me,data:me,props:me,attrs:me,slots:me,refs:me,setupState:me,setupContext:null,suspense:o,suspenseId:o?o.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=ol.bind(null,r),e.ce&&e.ce(r),r}let Ce=null;const gl=()=>Ce||Se;let No,An;{const e=sr(),t=(o,n)=>{let s;return(s=e[o])||(s=e[o]=[]),s.push(n),r=>{s.length>1?s.forEach(i=>i(r)):s[0](r)}};No=t("__VUE_INSTANCE_SETTERS__",o=>Ce=o),An=t("__VUE_SSR_SETTERS__",o=>zo=o)}const po=e=>{const t=Ce;return No(e),e.scope.on(),()=>{e.scope.off(),No(t)}},gs=()=>{Ce&&Ce.scope.off(),No(null)};function ui(e){return e.vnode.shapeFlag&4}let zo=!1;function bl(e,t=!1,o=!1){t&&An(t);const{props:n,children:s}=e.vnode,r=ui(e);Fa(e,n,r,t),ja(e,s,o);const i=r?vl(e,t):void 0;return t&&An(!1),i}function vl(e,t){const o=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,ka);const{setup:n}=o;if(n){const s=e.setupContext=n.length>1?_l(e):null,r=po(e);At();const i=vt(n,e,0,[e.props,s]);if(It(),r(),er(i)){if(i.then(gs,gs),t)return i.then(l=>{bs(e,l,t)}).catch(l=>{Fo(l,e,0)});e.asyncDep=i}else bs(e,i,t)}else di(e,t)}function bs(e,t,o){G(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:pe(t)&&(e.setupState=Pr(t)),di(e,o)}let vs;function di(e,t,o){const n=e.type;if(!e.render){if(!t&&vs&&!n.render){const s=n.template||Fn(e).template;if(s){const{isCustomElement:r,compilerOptions:i}=e.appContext.config,{delimiters:l,compilerOptions:a}=n,f=Ae(Ae({isCustomElement:r,delimiters:l},i),a);n.render=vs(s,f)}}e.render=n.render||Ve}{const s=po(e);At();try{Na(e)}finally{It(),s()}}}const yl={get(e,t){return ke(e,"get",""),e[t]}};function _l(e){const t=o=>{e.exposed=o||{}};return{attrs:new Proxy(e.attrs,yl),slots:e.slots,emit:e.emit,expose:t}}function Gn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Pr(Ir(e.exposed)),{get(t,o){if(o in t)return t[o];if(o in eo)return eo[o](e)},has(t,o){return o in t||o in eo}})):e.proxy}function wl(e,t=!0){return G(e)?e.displayName||e.name:e.name||t&&e.__name}function Al(e){return G(e)&&"__vccOpts"in e}const Ke=(e,t)=>ca(e,t,zo);function Fe(e,t,o){const n=arguments.length;return n===2?pe(t)&&!F(t)?ko(t)?P(e,null,[t]):P(e,t):P(e,null,t):(n>3?o=Array.prototype.slice.call(arguments,2):n===3&&ko(o)&&(o=[o]),P(e,t,o))}const Il="3.4.38";/**
* @vue/runtime-dom v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Cl="http://www.w3.org/2000/svg",Tl="http://www.w3.org/1998/Math/MathML",nt=typeof document<"u"?document:null,ys=nt&&nt.createElement("template"),Sl={insert:(e,t,o)=>{t.insertBefore(e,o||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,o,n)=>{const s=t==="svg"?nt.createElementNS(Cl,e):t==="mathml"?nt.createElementNS(Tl,e):o?nt.createElement(e,{is:o}):nt.createElement(e);return e==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:e=>nt.createTextNode(e),createComment:e=>nt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>nt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,o,n,s,r){const i=o?o.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),o),!(s===r||!(s=s.nextSibling)););else{ys.innerHTML=n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e;const l=ys.content;if(n==="svg"||n==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,o)}return[i?i.nextSibling:t.firstChild,o?o.previousSibling:t.lastChild]}},ut="transition",zt="animation",co=Symbol("_vtc"),it=(e,{slots:t})=>Fe(_a,Pl(e),t);it.displayName="Transition";const fi={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};it.props=Ae({},Nr,fi);const St=(e,t=[])=>{F(e)?e.forEach(o=>o(...t)):e&&e(...t)},_s=e=>e?F(e)?e.some(t=>t.length>1):e.length>1:!1;function Pl(e){const t={};for(const N in e)N in fi||(t[N]=e[N]);if(e.css===!1)return t;const{name:o="v",type:n,duration:s,enterFromClass:r=`${o}-enter-from`,enterActiveClass:i=`${o}-enter-active`,enterToClass:l=`${o}-enter-to`,appearFromClass:a=r,appearActiveClass:f=i,appearToClass:d=l,leaveFromClass:p=`${o}-leave-from`,leaveActiveClass:h=`${o}-leave-active`,leaveToClass:g=`${o}-leave-to`}=e,L=xl(s),x=L&&L[0],V=L&&L[1],{onBeforeEnter:H,onEnter:W,onEnterCancelled:k,onLeave:z,onLeaveCancelled:le,onBeforeAppear:O=H,onAppear:ce=W,onAppearCancelled:ye=k}=t,j=(N,te,_e)=>{Pt(N,te?d:l),Pt(N,te?f:i),_e&&_e()},X=(N,te)=>{N._isLeaving=!1,Pt(N,p),Pt(N,g),Pt(N,h),te&&te()},ue=N=>(te,_e)=>{const Ge=N?ce:W,ge=()=>j(te,N,_e);St(Ge,[te,ge]),ws(()=>{Pt(te,N?a:r),dt(te,N?d:l),_s(Ge)||As(te,n,x,ge)})};return Ae(t,{onBeforeEnter(N){St(H,[N]),dt(N,r),dt(N,i)},onBeforeAppear(N){St(O,[N]),dt(N,a),dt(N,f)},onEnter:ue(!1),onAppear:ue(!0),onLeave(N,te){N._isLeaving=!0;const _e=()=>X(N,te);dt(N,p),dt(N,h),Ll(),ws(()=>{N._isLeaving&&(Pt(N,p),dt(N,g),_s(z)||As(N,n,V,_e))}),St(z,[N,_e])},onEnterCancelled(N){j(N,!1),St(k,[N])},onAppearCancelled(N){j(N,!0),St(ye,[N])},onLeaveCancelled(N){X(N),St(le,[N])}})}function xl(e){if(e==null)return null;if(pe(e))return[sn(e.enter),sn(e.leave)];{const t=sn(e);return[t,t]}}function sn(e){return Ui(e)}function dt(e,t){t.split(/\s+/).forEach(o=>o&&e.classList.add(o)),(e[co]||(e[co]=new Set)).add(t)}function Pt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.remove(n));const o=e[co];o&&(o.delete(t),o.size||(e[co]=void 0))}function ws(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let El=0;function As(e,t,o,n){const s=e._endId=++El,r=()=>{s===e._endId&&n()};if(o)return setTimeout(r,o);const{type:i,timeout:l,propCount:a}=Dl(e,t);if(!i)return n();const f=i+"end";let d=0;const p=()=>{e.removeEventListener(f,h),r()},h=g=>{g.target===e&&++d>=a&&p()};setTimeout(()=>{d<a&&p()},l+1),e.addEventListener(f,h)}function Dl(e,t){const o=window.getComputedStyle(e),n=L=>(o[L]||"").split(", "),s=n(`${ut}Delay`),r=n(`${ut}Duration`),i=Is(s,r),l=n(`${zt}Delay`),a=n(`${zt}Duration`),f=Is(l,a);let d=null,p=0,h=0;t===ut?i>0&&(d=ut,p=i,h=r.length):t===zt?f>0&&(d=zt,p=f,h=a.length):(p=Math.max(i,f),d=p>0?i>f?ut:zt:null,h=d?d===ut?r.length:a.length:0);const g=d===ut&&/\b(transform|all)(,|$)/.test(n(`${ut}Property`).toString());return{type:d,timeout:p,propCount:h,hasTransform:g}}function Is(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((o,n)=>Cs(o)+Cs(e[n])))}function Cs(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Ll(){return document.body.offsetHeight}function kl(e,t,o){const n=e[co];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):o?e.setAttribute("class",t):e.className=t}const Ts=Symbol("_vod"),Nl=Symbol("_vsh"),Ul=Symbol(""),Wl=/(^|;)\s*display\s*:/;function Rl(e,t,o){const n=e.style,s=be(o);let r=!1;if(o&&!s){if(t)if(be(t))for(const i of t.split(";")){const l=i.slice(0,i.indexOf(":")).trim();o[l]==null&&Po(n,l,"")}else for(const i in t)o[i]==null&&Po(n,i,"");for(const i in o)i==="display"&&(r=!0),Po(n,i,o[i])}else if(s){if(t!==o){const i=n[Ul];i&&(o+=";"+i),n.cssText=o,r=Wl.test(o)}}else t&&e.removeAttribute("style");Ts in e&&(e[Ts]=r?n.display:"",e[Nl]&&(n.display="none"))}const Ss=/\s*!important$/;function Po(e,t,o){if(F(o))o.forEach(n=>Po(e,t,n));else if(o==null&&(o=""),t.startsWith("--"))e.setProperty(t,o);else{const n=Ml(e,t);Ss.test(o)?e.setProperty(Wt(n),o.replace(Ss,""),"important"):e[n]=o}}const Ps=["Webkit","Moz","ms"],rn={};function Ml(e,t){const o=rn[t];if(o)return o;let n=qe(t);if(n!=="filter"&&n in e)return rn[t]=n;n=Mo(n);for(let s=0;s<Ps.length;s++){const r=Ps[s]+n;if(r in e)return rn[t]=r}return t}const xs="http://www.w3.org/1999/xlink";function Es(e,t,o,n,s,r=Fi(t)){n&&t.startsWith("xlink:")?o==null?e.removeAttributeNS(xs,t.slice(6,t.length)):e.setAttributeNS(xs,t,o):o==null||r&&!rr(o)?e.removeAttribute(t):e.setAttribute(t,r?"":wt(o)?String(o):o)}function Hl(e,t,o,n){if(t==="innerHTML"||t==="textContent"){if(o==null)return;e[t]=o;return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const i=s==="OPTION"?e.getAttribute("value")||"":e.value,l=o==null?"":String(o);(i!==l||!("_value"in e))&&(e.value=l),o==null&&e.removeAttribute(t),e._value=o;return}let r=!1;if(o===""||o==null){const i=typeof e[t];i==="boolean"?o=rr(o):o==null&&i==="string"?(o="",r=!0):i==="number"&&(o=0,r=!0)}try{e[t]=o}catch{}r&&e.removeAttribute(t)}function Ol(e,t,o,n){e.addEventListener(t,o,n)}function Fl(e,t,o,n){e.removeEventListener(t,o,n)}const Ds=Symbol("_vei");function Vl(e,t,o,n,s=null){const r=e[Ds]||(e[Ds]={}),i=r[t];if(n&&i)i.value=n;else{const[l,a]=Bl(t);if(n){const f=r[t]=$l(n,s);Ol(e,l,f,a)}else i&&(Fl(e,l,i,a),r[t]=void 0)}}const Ls=/(?:Once|Passive|Capture)$/;function Bl(e){let t;if(Ls.test(e)){t={};let n;for(;n=e.match(Ls);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Wt(e.slice(2)),t]}let an=0;const Gl=Promise.resolve(),jl=()=>an||(Gl.then(()=>an=0),an=Date.now());function $l(e,t){const o=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=o.attached)return;Be(Kl(n,o.value),t,5,[n])};return o.value=e,o.attached=jl(),o}function Kl(e,t){if(F(t)){const o=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{o.call(e),e._stopped=!0},t.map(n=>s=>!s._stopped&&n&&n(s))}else return t}const ks=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,ql=(e,t,o,n,s,r)=>{const i=s==="svg";t==="class"?kl(e,n,i):t==="style"?Rl(e,o,n):Uo(t)?Pn(t)||Vl(e,t,o,n,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):zl(e,t,n,i))?(Hl(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Es(e,t,n,i,r,t!=="value")):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),Es(e,t,n,i))};function zl(e,t,o,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&ks(t)&&G(o));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ks(t)&&be(o)?!1:t in e}const Jl=Ae({patchProp:ql},Sl);let Ns;function Ql(){return Ns||(Ns=za(Jl))}const Zl=(...e)=>{const t=Ql().createApp(...e),{mount:o}=t;return t.mount=n=>{const s=Xl(n);if(!s)return;const r=t._component;!G(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const i=o(s,!1,Yl(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),i},t};function Yl(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Xl(e){return be(e)?document.querySelector(e):e}var ec=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const tc=Symbol();var Us;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Us||(Us={}));function oc(){const e=Vi(!0),t=e.run(()=>xe({}));let o=[],n=[];const s=Ir({install(r){s._a=r,r.provide(tc,s),r.config.globalProperties.$pinia=s,n.forEach(i=>o.push(i)),n=[]},use(r){return!this._a&&!ec?n.push(r):o.push(r),this},_p:o,_a:null,_e:e,_s:new Map,state:t});return s}/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ot=typeof document<"u";function nc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const re=Object.assign;function ln(e,t){const o={};for(const n in t){const s=t[n];o[n]=ze(s)?s.map(e):e(s)}return o}const oo=()=>{},ze=Array.isArray,pi=/#/g,sc=/&/g,rc=/\//g,ic=/=/g,ac=/\?/g,hi=/\+/g,lc=/%5B/g,cc=/%5D/g,mi=/%5E/g,uc=/%60/g,gi=/%7B/g,dc=/%7C/g,bi=/%7D/g,fc=/%20/g;function jn(e){return encodeURI(""+e).replace(dc,"|").replace(lc,"[").replace(cc,"]")}function pc(e){return jn(e).replace(gi,"{").replace(bi,"}").replace(mi,"^")}function In(e){return jn(e).replace(hi,"%2B").replace(fc,"+").replace(pi,"%23").replace(sc,"%26").replace(uc,"`").replace(gi,"{").replace(bi,"}").replace(mi,"^")}function hc(e){return In(e).replace(ic,"%3D")}function mc(e){return jn(e).replace(pi,"%23").replace(ac,"%3F")}function gc(e){return e==null?"":mc(e).replace(rc,"%2F")}function uo(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const bc=/\/$/,vc=e=>e.replace(bc,"");function cn(e,t,o="/"){let n,s={},r="",i="";const l=t.indexOf("#");let a=t.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(n=t.slice(0,a),r=t.slice(a+1,l>-1?l:t.length),s=e(r)),l>-1&&(n=n||t.slice(0,l),i=t.slice(l,t.length)),n=Ac(n??t,o),{fullPath:n+(r&&"?")+r+i,path:n,query:s,hash:uo(i)}}function yc(e,t){const o=t.query?e(t.query):"";return t.path+(o&&"?")+o+(t.hash||"")}function Ws(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function _c(e,t,o){const n=t.matched.length-1,s=o.matched.length-1;return n>-1&&n===s&&$t(t.matched[n],o.matched[s])&&vi(t.params,o.params)&&e(t.query)===e(o.query)&&t.hash===o.hash}function $t(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function vi(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const o in e)if(!wc(e[o],t[o]))return!1;return!0}function wc(e,t){return ze(e)?Rs(e,t):ze(t)?Rs(t,e):e===t}function Rs(e,t){return ze(t)?e.length===t.length&&e.every((o,n)=>o===t[n]):e.length===1&&e[0]===t}function Ac(e,t){if(e.startsWith("/"))return e;if(!e)return t;const o=t.split("/"),n=e.split("/"),s=n[n.length-1];(s===".."||s===".")&&n.push("");let r=o.length-1,i,l;for(i=0;i<n.length;i++)if(l=n[i],l!==".")if(l==="..")r>1&&r--;else break;return o.slice(0,r).join("/")+"/"+n.slice(i).join("/")}const ft={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var fo;(function(e){e.pop="pop",e.push="push"})(fo||(fo={}));var no;(function(e){e.back="back",e.forward="forward",e.unknown=""})(no||(no={}));function Ic(e){if(!e)if(Ot){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),vc(e)}const Cc=/^[^#]+#/;function Tc(e,t){return e.replace(Cc,"#")+t}function Sc(e,t){const o=document.documentElement.getBoundingClientRect(),n=e.getBoundingClientRect();return{behavior:t.behavior,left:n.left-o.left-(t.left||0),top:n.top-o.top-(t.top||0)}}const Jo=()=>({left:window.scrollX,top:window.scrollY});function Pc(e){let t;if("el"in e){const o=e.el,n=typeof o=="string"&&o.startsWith("#"),s=typeof o=="string"?n?document.getElementById(o.slice(1)):document.querySelector(o):o;if(!s)return;t=Sc(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Ms(e,t){return(history.state?history.state.position-t:-1)+e}const Cn=new Map;function xc(e,t){Cn.set(e,t)}function Ec(e){const t=Cn.get(e);return Cn.delete(e),t}let Dc=()=>location.protocol+"//"+location.host;function yi(e,t){const{pathname:o,search:n,hash:s}=t,r=e.indexOf("#");if(r>-1){let l=s.includes(e.slice(r))?e.slice(r).length:1,a=s.slice(l);return a[0]!=="/"&&(a="/"+a),Ws(a,"")}return Ws(o,e)+n+s}function Lc(e,t,o,n){let s=[],r=[],i=null;const l=({state:h})=>{const g=yi(e,location),L=o.value,x=t.value;let V=0;if(h){if(o.value=g,t.value=h,i&&i===L){i=null;return}V=x?h.position-x.position:0}else n(g);s.forEach(H=>{H(o.value,L,{delta:V,type:fo.pop,direction:V?V>0?no.forward:no.back:no.unknown})})};function a(){i=o.value}function f(h){s.push(h);const g=()=>{const L=s.indexOf(h);L>-1&&s.splice(L,1)};return r.push(g),g}function d(){const{history:h}=window;h.state&&h.replaceState(re({},h.state,{scroll:Jo()}),"")}function p(){for(const h of r)h();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:a,listen:f,destroy:p}}function Hs(e,t,o,n=!1,s=!1){return{back:e,current:t,forward:o,replaced:n,position:window.history.length,scroll:s?Jo():null}}function kc(e){const{history:t,location:o}=window,n={value:yi(e,o)},s={value:t.state};s.value||r(n.value,{back:null,current:n.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(a,f,d){const p=e.indexOf("#"),h=p>-1?(o.host&&document.querySelector("base")?e:e.slice(p))+a:Dc()+e+a;try{t[d?"replaceState":"pushState"](f,"",h),s.value=f}catch(g){console.error(g),o[d?"replace":"assign"](h)}}function i(a,f){const d=re({},t.state,Hs(s.value.back,a,s.value.forward,!0),f,{position:s.value.position});r(a,d,!0),n.value=a}function l(a,f){const d=re({},s.value,t.state,{forward:a,scroll:Jo()});r(d.current,d,!0);const p=re({},Hs(n.value,a,null),{position:d.position+1},f);r(a,p,!1),n.value=a}return{location:n,state:s,push:l,replace:i}}function Nc(e){e=Ic(e);const t=kc(e),o=Lc(e,t.state,t.location,t.replace);function n(r,i=!0){i||o.pauseListeners(),history.go(r)}const s=re({location:"",base:e,go:n,createHref:Tc.bind(null,e)},t,o);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Uc(e){return typeof e=="string"||e&&typeof e=="object"}function _i(e){return typeof e=="string"||typeof e=="symbol"}const wi=Symbol("");var Os;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Os||(Os={}));function Kt(e,t){return re(new Error,{type:e,[wi]:!0},t)}function ot(e,t){return e instanceof Error&&wi in e&&(t==null||!!(e.type&t))}const Fs="[^/]+?",Wc={sensitive:!1,strict:!1,start:!0,end:!0},Rc=/[.+*?^${}()[\]/\\]/g;function Mc(e,t){const o=re({},Wc,t),n=[];let s=o.start?"^":"";const r=[];for(const f of e){const d=f.length?[]:[90];o.strict&&!f.length&&(s+="/");for(let p=0;p<f.length;p++){const h=f[p];let g=40+(o.sensitive?.25:0);if(h.type===0)p||(s+="/"),s+=h.value.replace(Rc,"\\$&"),g+=40;else if(h.type===1){const{value:L,repeatable:x,optional:V,regexp:H}=h;r.push({name:L,repeatable:x,optional:V});const W=H||Fs;if(W!==Fs){g+=10;try{new RegExp(`(${W})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${L}" (${W}): `+z.message)}}let k=x?`((?:${W})(?:/(?:${W}))*)`:`(${W})`;p||(k=V&&f.length<2?`(?:/${k})`:"/"+k),V&&(k+="?"),s+=k,g+=20,V&&(g+=-8),x&&(g+=-20),W===".*"&&(g+=-50)}d.push(g)}n.push(d)}if(o.strict&&o.end){const f=n.length-1;n[f][n[f].length-1]+=.7000000000000001}o.strict||(s+="/?"),o.end?s+="$":o.strict&&(s+="(?:/|$)");const i=new RegExp(s,o.sensitive?"":"i");function l(f){const d=f.match(i),p={};if(!d)return null;for(let h=1;h<d.length;h++){const g=d[h]||"",L=r[h-1];p[L.name]=g&&L.repeatable?g.split("/"):g}return p}function a(f){let d="",p=!1;for(const h of e){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const g of h)if(g.type===0)d+=g.value;else if(g.type===1){const{value:L,repeatable:x,optional:V}=g,H=L in f?f[L]:"";if(ze(H)&&!x)throw new Error(`Provided param "${L}" is an array but it is not repeatable (* or + modifiers)`);const W=ze(H)?H.join("/"):H;if(!W)if(V)h.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${L}"`);d+=W}}return d||"/"}return{re:i,score:n,keys:r,parse:l,stringify:a}}function Hc(e,t){let o=0;for(;o<e.length&&o<t.length;){const n=t[o]-e[o];if(n)return n;o++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Ai(e,t){let o=0;const n=e.score,s=t.score;for(;o<n.length&&o<s.length;){const r=Hc(n[o],s[o]);if(r)return r;o++}if(Math.abs(s.length-n.length)===1){if(Vs(n))return 1;if(Vs(s))return-1}return s.length-n.length}function Vs(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Oc={type:0,value:""},Fc=/[a-zA-Z0-9_]/;function Vc(e){if(!e)return[[]];if(e==="/")return[[Oc]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${o})/"${f}": ${g}`)}let o=0,n=o;const s=[];let r;function i(){r&&s.push(r),r=[]}let l=0,a,f="",d="";function p(){f&&(o===0?r.push({type:0,value:f}):o===1||o===2||o===3?(r.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:f,regexp:d,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),f="")}function h(){f+=a}for(;l<e.length;){if(a=e[l++],a==="\\"&&o!==2){n=o,o=4;continue}switch(o){case 0:a==="/"?(f&&p(),i()):a===":"?(p(),o=1):h();break;case 4:h(),o=n;break;case 1:a==="("?o=2:Fc.test(a)?h():(p(),o=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+a:o=3:d+=a;break;case 3:p(),o=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,d="";break;default:t("Unknown state");break}}return o===2&&t(`Unfinished custom RegExp for param "${f}"`),p(),i(),s}function Bc(e,t,o){const n=Mc(Vc(e.path),o),s=re(n,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Gc(e,t){const o=[],n=new Map;t=js({strict:!1,end:!0,sensitive:!1},t);function s(p){return n.get(p)}function r(p,h,g){const L=!g,x=jc(p);x.aliasOf=g&&g.record;const V=js(t,p),H=[x];if("alias"in p){const z=typeof p.alias=="string"?[p.alias]:p.alias;for(const le of z)H.push(re({},x,{components:g?g.record.components:x.components,path:le,aliasOf:g?g.record:x}))}let W,k;for(const z of H){const{path:le}=z;if(h&&le[0]!=="/"){const O=h.record.path,ce=O[O.length-1]==="/"?"":"/";z.path=h.record.path+(le&&ce+le)}if(W=Bc(z,h,V),g?g.alias.push(W):(k=k||W,k!==W&&k.alias.push(W),L&&p.name&&!Gs(W)&&i(p.name)),Ii(W)&&a(W),x.children){const O=x.children;for(let ce=0;ce<O.length;ce++)r(O[ce],W,g&&g.children[ce])}g=g||W}return k?()=>{i(k)}:oo}function i(p){if(_i(p)){const h=n.get(p);h&&(n.delete(p),o.splice(o.indexOf(h),1),h.children.forEach(i),h.alias.forEach(i))}else{const h=o.indexOf(p);h>-1&&(o.splice(h,1),p.record.name&&n.delete(p.record.name),p.children.forEach(i),p.alias.forEach(i))}}function l(){return o}function a(p){const h=qc(p,o);o.splice(h,0,p),p.record.name&&!Gs(p)&&n.set(p.record.name,p)}function f(p,h){let g,L={},x,V;if("name"in p&&p.name){if(g=n.get(p.name),!g)throw Kt(1,{location:p});V=g.record.name,L=re(Bs(h.params,g.keys.filter(k=>!k.optional).concat(g.parent?g.parent.keys.filter(k=>k.optional):[]).map(k=>k.name)),p.params&&Bs(p.params,g.keys.map(k=>k.name))),x=g.stringify(L)}else if(p.path!=null)x=p.path,g=o.find(k=>k.re.test(x)),g&&(L=g.parse(x),V=g.record.name);else{if(g=h.name?n.get(h.name):o.find(k=>k.re.test(h.path)),!g)throw Kt(1,{location:p,currentLocation:h});V=g.record.name,L=re({},h.params,p.params),x=g.stringify(L)}const H=[];let W=g;for(;W;)H.unshift(W.record),W=W.parent;return{name:V,path:x,params:L,matched:H,meta:Kc(H)}}e.forEach(p=>r(p));function d(){o.length=0,n.clear()}return{addRoute:r,resolve:f,removeRoute:i,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function Bs(e,t){const o={};for(const n of t)n in e&&(o[n]=e[n]);return o}function jc(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:$c(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function $c(e){const t={},o=e.props||!1;if("component"in e)t.default=o;else for(const n in e.components)t[n]=typeof o=="object"?o[n]:o;return t}function Gs(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Kc(e){return e.reduce((t,o)=>re(t,o.meta),{})}function js(e,t){const o={};for(const n in e)o[n]=n in t?t[n]:e[n];return o}function qc(e,t){let o=0,n=t.length;for(;o!==n;){const r=o+n>>1;Ai(e,t[r])<0?n=r:o=r+1}const s=zc(e);return s&&(n=t.lastIndexOf(s,n-1)),n}function zc(e){let t=e;for(;t=t.parent;)if(Ii(t)&&Ai(e,t)===0)return t}function Ii({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Jc(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<n.length;++s){const r=n[s].replace(hi," "),i=r.indexOf("="),l=uo(i<0?r:r.slice(0,i)),a=i<0?null:uo(r.slice(i+1));if(l in t){let f=t[l];ze(f)||(f=t[l]=[f]),f.push(a)}else t[l]=a}return t}function $s(e){let t="";for(let o in e){const n=e[o];if(o=hc(o),n==null){n!==void 0&&(t+=(t.length?"&":"")+o);continue}(ze(n)?n.map(r=>r&&In(r)):[n&&In(n)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+o,r!=null&&(t+="="+r))})}return t}function Qc(e){const t={};for(const o in e){const n=e[o];n!==void 0&&(t[o]=ze(n)?n.map(s=>s==null?null:""+s):n==null?n:""+n)}return t}const Zc=Symbol(""),Ks=Symbol(""),$n=Symbol(""),Ci=Symbol(""),Tn=Symbol("");function Jt(){let e=[];function t(n){return e.push(n),()=>{const s=e.indexOf(n);s>-1&&e.splice(s,1)}}function o(){e=[]}return{add:t,list:()=>e.slice(),reset:o}}function gt(e,t,o,n,s,r=i=>i()){const i=n&&(n.enterCallbacks[s]=n.enterCallbacks[s]||[]);return()=>new Promise((l,a)=>{const f=h=>{h===!1?a(Kt(4,{from:o,to:t})):h instanceof Error?a(h):Uc(h)?a(Kt(2,{from:t,to:h})):(i&&n.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),l())},d=r(()=>e.call(n&&n.instances[s],t,o,f));let p=Promise.resolve(d);e.length<3&&(p=p.then(f)),p.catch(h=>a(h))})}function un(e,t,o,n,s=r=>r()){const r=[];for(const i of e)for(const l in i.components){let a=i.components[l];if(!(t!=="beforeRouteEnter"&&!i.instances[l]))if(Yc(a)){const d=(a.__vccOpts||a)[t];d&&r.push(gt(d,o,n,i,l,s))}else{let f=a();r.push(()=>f.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${i.path}"`));const p=nc(d)?d.default:d;i.components[l]=p;const g=(p.__vccOpts||p)[t];return g&&gt(g,o,n,i,l,s)()}))}}return r}function Yc(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function qs(e){const t=rt($n),o=rt(Ci),n=Ke(()=>{const a=fe(e.to);return t.resolve(a)}),s=Ke(()=>{const{matched:a}=n.value,{length:f}=a,d=a[f-1],p=o.matched;if(!d||!p.length)return-1;const h=p.findIndex($t.bind(null,d));if(h>-1)return h;const g=zs(a[f-2]);return f>1&&zs(d)===g&&p[p.length-1].path!==g?p.findIndex($t.bind(null,a[f-2])):h}),r=Ke(()=>s.value>-1&&ou(o.params,n.value.params)),i=Ke(()=>s.value>-1&&s.value===o.matched.length-1&&vi(o.params,n.value.params));function l(a={}){return tu(a)?t[fe(e.replace)?"replace":"push"](fe(e.to)).catch(oo):Promise.resolve()}return{route:n,href:Ke(()=>n.value.href),isActive:r,isExactActive:i,navigate:l}}const Xc=Mr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:qs,setup(e,{slots:t}){const o=Oo(qs(e)),{options:n}=rt($n),s=Ke(()=>({[Js(e.activeClass,n.linkActiveClass,"router-link-active")]:o.isActive,[Js(e.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:o.isExactActive}));return()=>{const r=t.default&&t.default(o);return e.custom?r:Fe("a",{"aria-current":o.isExactActive?e.ariaCurrentValue:null,href:o.href,onClick:o.navigate,class:s.value},r)}}}),eu=Xc;function tu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function ou(e,t){for(const o in t){const n=t[o],s=e[o];if(typeof n=="string"){if(n!==s)return!1}else if(!ze(s)||s.length!==n.length||n.some((r,i)=>r!==s[i]))return!1}return!0}function zs(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Js=(e,t,o)=>e??t??o,nu=Mr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:o}){const n=rt(Tn),s=Ke(()=>e.route||n.value),r=rt(Ks,0),i=Ke(()=>{let f=fe(r);const{matched:d}=s.value;let p;for(;(p=d[f])&&!p.components;)f++;return f}),l=Ke(()=>s.value.matched[i.value]);Io(Ks,Ke(()=>i.value+1)),Io(Zc,l),Io(Tn,s);const a=xe();return Co(()=>[a.value,l.value,e.name],([f,d,p],[h,g,L])=>{d&&(d.instances[p]=f,g&&g!==d&&f&&f===h&&(d.leaveGuards.size||(d.leaveGuards=g.leaveGuards),d.updateGuards.size||(d.updateGuards=g.updateGuards))),f&&d&&(!g||!$t(d,g)||!h)&&(d.enterCallbacks[p]||[]).forEach(x=>x(f))},{flush:"post"}),()=>{const f=s.value,d=e.name,p=l.value,h=p&&p.components[d];if(!h)return Qs(o.default,{Component:h,route:f});const g=p.props[d],L=g?g===!0?f.params:typeof g=="function"?g(f):g:null,V=Fe(h,re({},L,t,{onVnodeUnmounted:H=>{H.component.isUnmounted&&(p.instances[d]=null)},ref:a}));return Qs(o.default,{Component:V,route:f})||V}}});function Qs(e,t){if(!e)return null;const o=e(t);return o.length===1?o[0]:o}const Ti=nu;function su(e){const t=Gc(e.routes,e),o=e.parseQuery||Jc,n=e.stringifyQuery||$s,s=e.history,r=Jt(),i=Jt(),l=Jt(),a=ua(ft);let f=ft;Ot&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=ln.bind(null,y=>""+y),p=ln.bind(null,gc),h=ln.bind(null,uo);function g(y,E){let S,U;return _i(y)?(S=t.getRecordMatcher(y),U=E):U=y,t.addRoute(U,S)}function L(y){const E=t.getRecordMatcher(y);E&&t.removeRoute(E)}function x(){return t.getRoutes().map(y=>y.record)}function V(y){return!!t.getRecordMatcher(y)}function H(y,E){if(E=re({},E||a.value),typeof y=="string"){const u=cn(o,y,E.path),m=t.resolve({path:u.path},E),_=s.createHref(u.fullPath);return re(u,m,{params:h(m.params),hash:uo(u.hash),redirectedFrom:void 0,href:_})}let S;if(y.path!=null)S=re({},y,{path:cn(o,y.path,E.path).path});else{const u=re({},y.params);for(const m in u)u[m]==null&&delete u[m];S=re({},y,{params:p(u)}),E.params=p(E.params)}const U=t.resolve(S,E),se=y.hash||"";U.params=d(h(U.params));const he=yc(n,re({},y,{hash:pc(se),path:U.path})),c=s.createHref(he);return re({fullPath:he,hash:se,query:n===$s?Qc(y.query):y.query||{}},U,{redirectedFrom:void 0,href:c})}function W(y){return typeof y=="string"?cn(o,y,a.value.path):re({},y)}function k(y,E){if(f!==y)return Kt(8,{from:E,to:y})}function z(y){return ce(y)}function le(y){return z(re(W(y),{replace:!0}))}function O(y){const E=y.matched[y.matched.length-1];if(E&&E.redirect){const{redirect:S}=E;let U=typeof S=="function"?S(y):S;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=W(U):{path:U},U.params={}),re({query:y.query,hash:y.hash,params:U.path!=null?{}:y.params},U)}}function ce(y,E){const S=f=H(y),U=a.value,se=y.state,he=y.force,c=y.replace===!0,u=O(S);if(u)return ce(re(W(u),{state:typeof u=="object"?re({},se,u.state):se,force:he,replace:c}),E||S);const m=S;m.redirectedFrom=E;let _;return!he&&_c(n,U,S)&&(_=Kt(16,{to:m,from:U}),Je(U,U,!0,!1)),(_?Promise.resolve(_):X(m,U)).catch(v=>ot(v)?ot(v,2)?v:lt(v):oe(v,m,U)).then(v=>{if(v){if(ot(v,2))return ce(re({replace:c},W(v.to),{state:typeof v.to=="object"?re({},se,v.to.state):se,force:he}),E||m)}else v=N(m,U,!0,c,se);return ue(m,U,v),v})}function ye(y,E){const S=k(y,E);return S?Promise.reject(S):Promise.resolve()}function j(y){const E=Mt.values().next().value;return E&&typeof E.runWithContext=="function"?E.runWithContext(y):y()}function X(y,E){let S;const[U,se,he]=ru(y,E);S=un(U.reverse(),"beforeRouteLeave",y,E);for(const u of U)u.leaveGuards.forEach(m=>{S.push(gt(m,y,E))});const c=ye.bind(null,y,E);return S.push(c),He(S).then(()=>{S=[];for(const u of r.list())S.push(gt(u,y,E));return S.push(c),He(S)}).then(()=>{S=un(se,"beforeRouteUpdate",y,E);for(const u of se)u.updateGuards.forEach(m=>{S.push(gt(m,y,E))});return S.push(c),He(S)}).then(()=>{S=[];for(const u of he)if(u.beforeEnter)if(ze(u.beforeEnter))for(const m of u.beforeEnter)S.push(gt(m,y,E));else S.push(gt(u.beforeEnter,y,E));return S.push(c),He(S)}).then(()=>(y.matched.forEach(u=>u.enterCallbacks={}),S=un(he,"beforeRouteEnter",y,E,j),S.push(c),He(S))).then(()=>{S=[];for(const u of i.list())S.push(gt(u,y,E));return S.push(c),He(S)}).catch(u=>ot(u,8)?u:Promise.reject(u))}function ue(y,E,S){l.list().forEach(U=>j(()=>U(y,E,S)))}function N(y,E,S,U,se){const he=k(y,E);if(he)return he;const c=E===ft,u=Ot?history.state:{};S&&(U||c?s.replace(y.fullPath,re({scroll:c&&u&&u.scroll},se)):s.push(y.fullPath,se)),a.value=y,Je(y,E,S,c),lt()}let te;function _e(){te||(te=s.listen((y,E,S)=>{if(!ho.listening)return;const U=H(y),se=O(U);if(se){ce(re(se,{replace:!0}),U).catch(oo);return}f=U;const he=a.value;Ot&&xc(Ms(he.fullPath,S.delta),Jo()),X(U,he).catch(c=>ot(c,12)?c:ot(c,2)?(ce(c.to,U).then(u=>{ot(u,20)&&!S.delta&&S.type===fo.pop&&s.go(-1,!1)}).catch(oo),Promise.reject()):(S.delta&&s.go(-S.delta,!1),oe(c,U,he))).then(c=>{c=c||N(U,he,!1),c&&(S.delta&&!ot(c,8)?s.go(-S.delta,!1):S.type===fo.pop&&ot(c,20)&&s.go(-1,!1)),ue(U,he,c)}).catch(oo)}))}let Ge=Jt(),ge=Jt(),ae;function oe(y,E,S){lt(y);const U=ge.list();return U.length?U.forEach(se=>se(y,E,S)):console.error(y),Promise.reject(y)}function tt(){return ae&&a.value!==ft?Promise.resolve():new Promise((y,E)=>{Ge.add([y,E])})}function lt(y){return ae||(ae=!y,_e(),Ge.list().forEach(([E,S])=>y?S(y):E()),Ge.reset()),y}function Je(y,E,S,U){const{scrollBehavior:se}=e;if(!Ot||!se)return Promise.resolve();const he=!S&&Ec(Ms(y.fullPath,0))||(U||!S)&&history.state&&history.state.scroll||null;return Er().then(()=>se(y,E,he)).then(c=>c&&Pc(c)).catch(c=>oe(c,y,E))}const Ee=y=>s.go(y);let Rt;const Mt=new Set,ho={currentRoute:a,listening:!0,addRoute:g,removeRoute:L,clearRoutes:t.clearRoutes,hasRoute:V,getRoutes:x,resolve:H,options:e,push:z,replace:le,go:Ee,back:()=>Ee(-1),forward:()=>Ee(1),beforeEach:r.add,beforeResolve:i.add,afterEach:l.add,onError:ge.add,isReady:tt,install(y){const E=this;y.component("RouterLink",eu),y.component("RouterView",Ti),y.config.globalProperties.$router=E,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>fe(a)}),Ot&&!Rt&&a.value===ft&&(Rt=!0,z(s.location).catch(se=>{}));const S={};for(const se in ft)Object.defineProperty(S,se,{get:()=>a.value[se],enumerable:!0});y.provide($n,E),y.provide(Ci,_r(S)),y.provide(Tn,a);const U=y.unmount;Mt.add(y),y.unmount=function(){Mt.delete(y),Mt.size<1&&(f=ft,te&&te(),te=null,a.value=ft,Rt=!1,ae=!1),U()}}};function He(y){return y.reduce((E,S)=>E.then(()=>j(S)),Promise.resolve())}return ho}function ru(e,t){const o=[],n=[],s=[],r=Math.max(t.matched.length,e.matched.length);for(let i=0;i<r;i++){const l=t.matched[i];l&&(e.matched.find(f=>$t(f,l))?n.push(l):o.push(l));const a=e.matched[i];a&&(t.matched.find(f=>$t(f,a))||s.push(a))}return[o,n,s]}const Ie=(e,t)=>{const o=e.__vccOpts||e;for(const[n,s]of t)o[n]=s;return o},iu={__name:"App",setup(e){return(t,o)=>($(),Ko(fe(Ti)))}},au=Ie(iu,[["__scopeId","data-v-0b57781d"]]),lu={class:"app-header"},cu={class:"container"},uu={class:"app-header-nav",style:{"list-style":"none"}},du={__name:"LayoutHeader",setup(e){return(t,o)=>{const n=Do("RouterLink");return $(),Q("header",lu,[b("div",cu,[b("ul",uu,[b("li",null,[P(n,{to:"/"},{default:ie(()=>[J("WebAPI")]),_:1})]),b("li",null,[P(n,{to:"/kaiWebapi2"},{default:ie(()=>[J("WebAPI2")]),_:1})]),b("li",null,[P(n,{to:"/vue3"},{default:ie(()=>[J("Vue3")]),_:1})]),b("li",null,[P(n,{to:"/download"},{default:ie(()=>[J("下載")]),_:1})]),b("li",null,[P(n,{to:"/others"},{default:ie(()=>[J("其他")]),_:1})]),b("li",null,[P(n,{to:"/dotnet7_vue3"},{default:ie(()=>[J("Dotnet7_vue3")]),_:1})]),b("li",null,[P(n,{to:"/vscode_function"},{default:ie(()=>[J("VS Code小功能")]),_:1})]),b("li",null,[P(n,{to:"/video"},{default:ie(()=>[J("Video")]),_:1})]),b("li",null,[P(n,{to:"/es6"},{default:ie(()=>[J("ES6")]),_:1})]),b("li",null,[P(n,{to:"/Naive_ui"},{default:ie(()=>[J("Naive-ui")]),_:1})]),b("li",null,[P(n,{to:"/dotnetapi_angular"},{default:ie(()=>[J("DotnetAPI_Angular")]),_:1})])])])])}}},fu=Ie(du,[["__scopeId","data-v-20ceea15"]]),pu=b("hr",null,null,-1),hu={__name:"index",setup(e){return(t,o)=>{const n=Do("RouterView");return $(),Q(q,null,[P(fu),pu,P(n)],64)}}},mu="/vue-my-note/assets/uparrow-CelNzM_b.png",gu={name:"scroll-top",data(){return{scrollTop:0,time:0,dParams:20,scrollState:0}},computed:{showTop:function(){return this.scrollTop>200}},mounted(){window.addEventListener("scroll",this.getScrollTop)},methods:{toTop(e){if(this.scrollState)return;this.scrollState=1,e.preventDefault(),document.documentElement.scrollTop||document.body.scrollTop;let t=this;this.time=setInterval(function(){t.gotoTop(t.scrollTop-t.dParams)},30)},gotoTop(e){this.dParams+=20,e=e>0?e:0,document.documentElement.scrollTop=document.body.scrollTop=window.pageYOffset=e,this.scrollTop<10&&(clearInterval(this.time),this.dParams=20,this.scrollState=0)},getScrollTop(){this.scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop}}},bu=e=>(Re("data-v-77d80545"),e=e(),Me(),e),vu=bu(()=>b("img",{src:mu},null,-1)),yu=[vu];function _u(e,t,o,n,s,r){return $(),Q("div",{class:"scrollTop",onClick:t[0]||(t[0]=(...i)=>r.toTop&&r.toTop(...i))},yu)}const Z=Ie(gu,[["render",_u],["__scopeId","data-v-77d80545"]]),wu=e=>(Re("data-v-b6c9cecb"),e=e(),Me(),e),Au=wu(()=>b("div",null,"我是WebAPI頁面",-1)),Iu=`
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
              // [TotoNameAttribute] // Attribute可以省略，拿掉
              [TotoName]
              public string Name {get;set;}
          
            //....
            }
          
          <a href="https://www.youtube.com/watch?v=fethjeEzMU4&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=46" target="_blank">
          46.【8.模型資料驗證】ASP.NET Core Web API 入門教學(8_2) - 自訂類別模型資料驗證標籤和傳值</a>
              //新增一個類別檔，ValidationAttributes/StartEndAttribute.cs
            public class StartEndAttribute: ValidationAttribute
            {
              protected override ValidationResult IsValid(object value, ValidationContext validationContext)
              {
                var st = (TodoListPostDto)value;
          
                if(st.StartTime >= st.EndTime)
                {
                  // 開始時間，大於結東時間，就回傳訊息
                  return new ValidationResult("開始時間不可以大於結束時間", new string[] {"time"}); // time是回傳錯誤欄位
                }
                return ValidationResult.Success;
              }
            }
            
            // 想要傳值，做驗證
            //新增一個類別檔，ValidationAttributes/TestAttribute.cs
            public class TestAttribute: ValidationAttribute
            {
              private string _tvalue;
              public string Tvalue = "de1"; // 預設值
              // 建立一個建構子，簡單傳一個string
              public TestAttribute(string tvalue = "de") // 預設值
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
            // [Test("123")] // 丟值進去
            [Test(Tvalue = "321")] // 當想要傳值，就可以在這裡傳值，不然沒有傳，是預設值
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
            // public class TodoListPostDto: IValidatableObject // 這個實作這個介面
            // 要實作介面
          
            // 驗證邏輯，不用寫成標籤，直接寫在Dto類別裡面, 也可以同時驗證多個邏輯，回傳
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
            把PUT及POST共同的部份，寫成抽象化類別，再去繼承(抽象化類別，只能做繼承使用，不能new, 不能被創建出來)
            新增Abstracts\\TodoListEditDtoAbstract.cs
            把TodoListPostDto 通通剪下，貼上

            當傳進來TodoListPostDto的時候，自動會到TodoListEditDtoAbstract: IValidatableObject
            來做驗證(直接會到下面程式做驗證)
            public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)

          <a href="https://www.youtube.com/watch?v=DQxGDFZn_6Y&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=49" target="_blank">
          49.【9.使用DI依賴注入功能】ASP.NET Core Web API 入門教學(9_1) - 基本DI依賴注入用法_GET</a>
            主要目的，可以把程式拆分出去
            controller主要寫控制邏輯，商業邏輯就要拆分出去
            新增一個資料夾 Services\\TodoListService
          
            把原本在TodoController裡面Get的code，搬到TodoListService
            在programs.cs 加上
            ☆builder.Services.AddScoped<TodoListService>();  // 注入
          
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
  `,Cu={__name:"index",setup(e){return Z.scrollToTop=!0,(t,o)=>($(),Q(q,null,[Au,b("div",null,[b("div",{innerHTML:Iu})]),P(Z)],64))}},Tu=Ie(Cu,[["__scopeId","data-v-b6c9cecb"]]),Su=`
    <div id="Vite_to_github" style="display:flex; justify-content: center; background-color: #282923; color:#c1cccc; font-size: 14px;">
      <pre>
//===============================================================================================//
using System.ComponentModel.DataAnnotations;
using WebAPI.Dtos;
using WebAPI.Models;

namespace WebAPI.Abstracts
{
    public abstract class TodoListEditDtoAbstract : IValidatableObject
    {
        // 驗證錯誤訊息
        //"errors": {
        //     "Name": [
        //         "The Name field is required.",
        //         "The Name field is not a valid e-mail address."
        //         "名字請輸入電子信箱",
        //         "The field Name must be a string with a maximum length of 1.",
        //         "The field Name must match the regular expression '[a-z]'."
        //     ],
        //     "Orders": [
        //         "The field Orders must be between 2 and 3."
        //     ]
        // },

        //public Guid TodoId { get; set; }
        [Required]
        //[TodoName]
        //[EmailAddress(ErrorMessage = "名字請輸入電子信箱")]
        //[StringLength(1)]
        //[RegularExpression("[a-z]")]
        public string Name { get; set; }
        //public DateTime InsertTime { get; set; }
        //public DateTime UpdateTime { get; set; }
        public bool Enable { get; set; }
        [Range(2, 9)]
        public int Orders { get; set; }

        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }

        //public Guid InsertEmployeeId { get; set; }
        //public Guid UpdateEmployeeId { get; set; }

        //public string InsertEmployeeName { get; set; }
        //public string UpdateEmployeeName { get; set; }
        public ICollection<UploadFilePostDto> UploadFiles { get; set; }

        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            WebContext _todoContext = (WebContext)validationContext.GetService(typeof(WebContext));

            var findName = from a in _todoContext.TodoList
                           where a.Name == Name
                           select a;

            // 更新的時候，要排除自己，二次過濾(因為put會有問題)
            //var dto = validationContext.ObjectInstance;
            //if (dto.GetType() == typeof(TodoListPutDto)) //TodoListPutDto 再做二次過濾
            if (this.GetType() == typeof(TodoListPutDto)) //TodoListPutDto 再做二次過濾
            {
                var dtoUpdate = (TodoListPutDto)this;
                findName = findName.Where(a => a.TodoId != dtoUpdate.TodoId); // 把自己排除
            }

            //47.【8.模型資料驗證】ASP.NET Core Web API 入門教學(8_3) - 類別內自訂屬性資料驗證
            if (findName.FirstOrDefault() != null)
            {
                yield return new ValidationResult("已存在相同的代辦事項", new string[] { "Name" });
                // yield 主要是可以回傳多個return
            }

            if (StartTime >= EndTime)
            {
                yield return new ValidationResult("開始時間不可以大於結束時間", new string[] { "Time" });
            }
        }
    }
}

      
    </pre>
  </div>
`,Pu={__name:"TodoListEditDtoAbstract",setup(e){return Z.scrollToTop=!0,(t,o)=>($(),Q(q,null,[b("div",{innerHTML:Su}),P(Z)],64))}},xu=`
    <div id="Vite_to_github" style="display:flex; justify-content: center; background-color: #282923; color:#c1cccc; font-size: 14px;">
      <pre>
    //===============================================================================================//
    using Microsoft.AspNetCore.Mvc;
    using WebAPI.Services;

    // For more information on enabling Web API for empty projects, 
    //visit https://go.microsoft.com/fwlink/?LinkID=397860

    namespace WebAPI.Controllers
    {
        [Route("api/[controller]")]
        [ApiController]
        public class AsyncController : ControllerBase
        {
            private readonly AsyncService _asyncService;
            public AsyncController(AsyncService asyncService)
            {
                _asyncService = asyncService;
            }
            // GET: api/<AsyncController>
            [HttpGet]
            public async Task<int> Get()
            {
                //Console.Write("AsyncController");
                return await _asyncService.主作業();
                //return 1;
            }


        }
    }


      
    </pre>
  </div>
`,Eu={__name:"AsyncController",setup(e){return Z.scrollToTop=!0,(t,o)=>($(),Q(q,null,[b("div",{innerHTML:xu}),P(Z)],64))}},Du=`
    <div id="Vite_to_github" style="display:flex; justify-content: center; background-color: #282923; color:#c1cccc; font-size: 14px;">
      <pre>
    //===============================================================================================//
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public AuthController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        /// <summary>
        /// 通過賬號+密碼獲取Token
        /// </summary>
        /// <param ></param>
        /// <param ></param>
        /// <returns>Token</returns>
        [AllowAnonymous]
        [HttpGet]
        public IActionResult Get(string userName, string pwd)
        {
            if (!string.IsNullOrEmpty(userName))
            {
                var claims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Sub, userName),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()) // JWT ID
            };

                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Key"]));
                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken(
                    //頒發者
                    issuer: _configuration["JWT:Issuer"],
                    //接收者
                    audience: _configuration["JWT:Audience"],
                    //過期時間（可自行設定，注意和上面的claims內部Exp參數保持一致）
                    expires: DateTime.Now.AddMinutes(15),
                    //簽名證書
                    signingCredentials: creds,
                    //自定義參數
                    claims: claims
                    );
                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token)
                });
            }
            else
            {
                return BadRequest(new { message = "帳號或密碼失敗" });
            }
        }
    }
}



      
    </pre>
  </div>
`,Lu={__name:"AuthController",setup(e){return Z.scrollToTop=!0,(t,o)=>($(),Q(q,null,[b("div",{innerHTML:Du}),P(Z)],64))}},ku=e=>(Re("data-v-0cf0ef1a"),e=e(),Me(),e),Nu=ku(()=>b("div",null,"這是WebAPI2",-1)),Uu={id:"Vite_to_github",class:"content"},Wu={style:{width:"15%","background-color":"white"}},Ru={style:{width:"80%"}},Mu={key:0},Hu={key:0},Ou={key:0},Fu={__name:"index",setup(e){xe(!1);let t=xe(!1),o=xe(!1);xe(!1);const n=xe(!0),s=()=>{n.value=!n.value};return Z.scrollToTop=!0,(r,i)=>($(),Q(q,null,[Nu,b("div",Uu,[b("div",Wu,[J(et(n.value)+" ",1),b("button",{onClick:s,class:so({active:n.value})},">Abstract\\TodoListEditDtoAbstract.cs",2),b("button",{onClick:s,class:so({active:n.value})},"Controller\\AsyncController.cs",2),b("button",{onClick:i[0]||(i[0]=l=>ve(o)?o.value=!fe(o):o=!fe(o))},"Controller\\AuthController.cs")]),b("div",Ru,[b("p",null,[P(it,null,{default:ie(()=>[n.value?($(),Q("div",Mu,[P(Pu)])):Nt("",!0)]),_:1})]),b("p",null,[P(it,null,{default:ie(()=>[fe(t)?($(),Q("div",Hu,[P(Eu)])):Nt("",!0)]),_:1})]),b("p",null,[P(it,null,{default:ie(()=>[fe(o)?($(),Q("div",Ou,[P(Lu)])):Nt("",!0)]),_:1})])])]),P(Z)],64))}},Vu=Ie(Fu,[["__scopeId","data-v-0cf0ef1a"]]),Bu=b("div",null,"我是RabbitVue3頁面",-1),Gu=`
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
        npm init vue@latest
        Project name: vue3-rabbit
        Add Vue Router for single Page Application development? Yes
        Add Pinia for state management? Yes
        Add ESLint for code quality? Yes
        
        code .
        cd vue-rabblit
        npm install
        npm run dev

        src 目錄調整
        ----------------------------
        src底下新增資料夾
        apis          -- api接口文件夾
        composables   -- 組合函數文件夾
        directives    -- 全局指令文件夾
        styles        -- 全局樣式文件夾
        utils         -- 工具函數文件夾

        git 管理項目
        基於create-vue 創建出來的項目，默認沒有初始化git倉庫，需要我們手動初始化

        執行命令並完成首次提交
        1.git init
        2.git add .
        3.git commit -m "init"

        //================== Day2-06-項目起步-别名路徑聯想設置
        什麼是別名路徑聯想提示
        在編寫代碼的過程中，一旦輸入 @/, VSCode會立刻聯想出src下的所有子目錄和文件，統一文件路徑訪問，
        不容易出錯

        如何進行配置
        1.在項目的根目錄下新增jsconfig.json文件
        2.添加json格式的配置項，如下：
        {
          "compilerOptions":{
            "baseUrl":"./",
            "paths": {
              "@/*":[
                "src/*"  ==> 輸入@自動聯想src目錄
              ]
            }
          }
        }
          
        // 真正會配置的是在vite.config.js
          resolve: {
            //實際的路徑轉換 @ -> src
            alias: {
              '@': fileURLToPath(new URL('./src', import.meta.url))
            }
          },

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
        Nav區域
        Header區域
            二級路由出口區域
        Footer區域

        Layout/components/
            LayoutHeader.vue (複製code)
            LayoutFooter.vue (複製code)
            LayoutNav.vue    (複製code)
        
        然後在index.vue 引入
        script setup>
          import LayoutNav from './components/LayoutNav.vue'
          import LayoutHeader from './components/LayoutHeader.vue'
          import LayoutFooter from './components/LayoutFooter.vue'
          import LayoutFixed from './components/LayoutFixed.vue'

          // 觸發獲取導航列表的action
          import {useCategoryStore} from '@/stores/categoryStore'
          import {onMounted} from 'vue'

          const categoryStore = useCategoryStore()

          // 觸發getCategory，才會有state的資料
          onMounted(() => categoryStore.getCategory())
        /script>

        template>
            <-LayoutFixed/>
            <-LayoutNav />
            <-LayoutHeader />
            <-!-- 添加key 破壞複用機制 強制銷毀重建 -->
            <-!-- <RouterView :key="$route.fullPath"/> -->
            <-RouterView/>
            <-LayoutFooter />
        /template>
       

        //================== Day2-14-Layout-字體圖標引入

        //https://www.iconfont.cn/
        index.html
            <-!DOCTYPE html>
            <-html lang="en">

            <-head>
              <-meta charset="UTF-8">
              <-link rel="icon" href="/favicon.ico">
              <-meta name="viewport" content="width=device-width, initial-scale=1.0">
              <-title>Vite App</title>
              <-link rel="stylesheet" href="//at.alicdn.com/t/font_2143783_iq6z4ey5vu.css">
            <-/head>

            body>
              <-div id="app">/div>
              <-script type="module" src="/src/main.js">/script>
            /body>

            /html>

        //================== Day2-15-Layout-一級導航渲染
        功能描述
        使用後端接口渲染一級路由導航

        實現步驟
        1.根據接口文檔封裝接口函數
        2.發送請求獲取數據列表
        3.v-for渲染頁面

        在apis新增一個模塊，layout.js

        import httpInstance from "@/utils/http"
        function getCategoryAPI(){
          return httpInstance({
            url:'/home/category/head'
          })
        }

        在Layout/components/LayoutHeader.vue

        import {getCategoryAPI} from '@/apis/layout'
        
        const categoryList = ref([])
        const getCategory = async() => {
          const res = await getCategoryAPI()
          console.log(res)
          categoryList.value = res.result
        }
        onMounted(()=>{
          getCategory()
        })


        //================== Day2-16-Layout-吸頂導航交互實現
        吸頂交互
        要求：瀏覽器在上下滾動的過程中，如果距離頂部的滾動距離大於78px，吸頂導航顯示，小於78隱藏
        
        準備吸頂導航組件 -> 獲取滾動距離 -> 以滾動距離做判斷條件，控制組件盒子展示隱藏
        在Layout/components/LayoutFixed.vue

        安裝 VueUse: npm i @vueuse/core
            useScroll
            imoprt { useScroll } from '@vueuse/core'

            const el = ref<HTMLElement | null>(null)
            const { x, y, isScrolling, arrivedState, directions } = useScroll(el)

            template>
              div ref="el"></div>
            /template>
        
        // 示例
        //vueUse
        import { useScroll } from '@vueuse/core'
        const { y } = useScroll(window)

        template>
          div class="app-header-sticky" :class="{ show: y > 78 }">

        //================== Day2-17-Layout-Pinia優化重覆請求
        為什麼要優化?
        結論：兩個導航鞏的列表是完全一致的，但是要發送兩次網路請求，存在浪費。
        通過Pinia集中管理數據，再把數據給組件使用

        Pinia：定義 state, action

        新增一個store, category.js

        import { ref } from 'vue'
        import { defineStore } from 'pinia'
        import { getCategoryAPI } from '@/apis/layout'

        export const useCategoryStore = defineStore('category', () => {
            // 導航列表的數據管理
            // state 導航列表數據
            const categoryList = ref([])

            // action 獲取導航數據的方法
            const getCategory = async () => {
                const res = await getCategoryAPI()
                categoryList.value = res.result
            }
            
            return {
                categoryList,
                getCategory
            }
        })



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
          //================== Day7-07-拓展課-SKU組件-功能拆解
              1.初始化規格渲染
              2.點擊規格更新選中狀態
              3.點擊規格更新禁用狀態
              4.產出選擇的SKU數據

                //src/SKU/Sku.vue
                  script setup>
                    import { onMounted, ref } from 'vue'
                    import axios from 'axios'
                    // 商品數據
                    const goods = ref({})
                    const getGoods = async () => {
                      // 1135076  初始化就有無庫存的規格
                      // 1369155859933827074 更新之後有無庫存項（藍色-20cm-中國）
                      const res = await axios.get('http://pcapi-xiaotuxian-front-devtest.itheima.net/goods?id=1369155859933827074')
                      goods.value = res.data.result
                    }
                    onMounted(() => getGoods())

                  /script>
                  template>
                      div class="goods-sku">
                        dl v-for="item in goods.specs" :key="item.id">
                          dt>{{ item.name }}</dt>
                          dd>
                            template v-for="val in item.values" :key="val.name">
                              !-- 圖片類型規格 -->
                              img v-if="val.picture" :src="val.picture" :title="val.name">
                              !-- 文字類型規格 -->
                              span v-else>{{ val.name }}</span>
                            /template>
                          /dd>
                        /dl>
                      /div>
                    /template>

                    style scoped lang="scss">
                    @mixin sku-state-mixin {
                      border: 1px solid #e4e4e4;
                      margin-right: 10px;
                      cursor: pointer;

                      &.selected {
                        border-color: #27ba9b;
                      }

                      &.disabled {
                        opacity: 0.6;
                        border-style: dashed;
                        cursor: not-allowed;
                      }
                    }

                    .goods-sku {
                      padding-left: 10px;
                      padding-top: 20px;

                      dl {
                        display: flex;
                        padding-bottom: 20px;
                        align-items: center;

                        dt {
                          width: 50px;
                          color: #999;
                        }

                        dd {
                          flex: 1;
                          color: #666;

                          >img {
                            width: 50px;
                            height: 50px;
                            margin-bottom: 4px;
                            @include sku-state-mixin;
                          }

                          >span {
                            display: inline-block;
                            height: 30px;
                            line-height: 28px;
                            padding: 0 20px;
                            margin-bottom: 4px;
                            @include sku-state-mixin;
                          }
                        }
                      }
                    }
                  /style>

          //================== Day7-08-拓展課-SKU組件-點擊規格更新選中狀態

## 2. 選中與取消選中實現
-> 基本思路：
-> 1. 每一個規格按钮都擁有自己的选選中狀態數據-selected，true為選中，false為取消選中
-> 2. 配合動態class，把選中狀態selected作為判斷條件，true讓active類名顯示，false讓active類名不顯示
-> 3. 點擊的是未選中，把同一個規格的其他取消選中，當前點擊項選中；點擊的是已選中，直接取消


          script setup>
            import { onMounted, ref } from 'vue'
            import axios from 'axios'
            // 商品数据
            const goods = ref({})
            const getGoods = async () => {
              // 1135076  初始化就有无库存的规格
              // 1369155859933827074 更新之后有无库存项（蓝色-20cm-中国）
              const res = await axios.get('http://pcapi-xiaotuxian-front-devtest.itheima.net/goods?id=1369155859933827074')
              goods.value = res.data.result
            }
            onMounted(() => getGoods())

            // 選中與取消選中實現
            const changeSelectedStatus = (item, val) => {
              // 點擊的是未選中，把同一個規格的其他取消選中，當前點擊項選中，點擊的是已選中，直接取消
              // item: 同一排的對象
              // val: 當前點擊項
              if (val.selected) {
                val.selected = false // 取消激活
              } else {
                // 同排取消
                item.values.forEach(valItem => valItem.selected = false)
                // 當前選中
                val.selected = true
              }
            }

            /script>

            template>
              div class="goods-sku">
                dl v-for="item in goods.specs" :key="item.id">
                  dt>{{ item.name }}</dt>
                  dd>
                    template v-for="val in item.values" :key="val.name">
                      !-- 圖片類型規格 -->
                      img :class="{selected: val.selected}" @click="changeSelectedStatus(item, val)" 
                        v-if="val.picture" :src="val.picture" :title="val.name">
                      !-- 文字類型規格 -->
                      span :class="{selected: val.selected}" 
                        v-else @click="changeSelectedStatus(item, val)">{{ val.name }}</span>
                    /template>
                  /dd>
                /dl>
              /div>
            /template>

            style scoped lang="scss">
            @mixin sku-state-mixin {
              border: 1px solid #e4e4e4;
              margin-right: 10px;
              cursor: pointer;

              &.selected {
                border-color: #27ba9b;
              }

              &.disabled {
                opacity: 0.6;
                border-style: dashed;
                cursor: not-allowed;
              }
            }

            .goods-sku {
              padding-left: 10px;
              padding-top: 20px;

              dl {
                display: flex;
                padding-bottom: 20px;
                align-items: center;

                dt {
                  width: 50px;
                  color: #999;
                }

                dd {
                  flex: 1;
                  color: #666;

                  >img {
                    width: 50px;
                    height: 50px;
                    margin-bottom: 4px;
                    @include sku-state-mixin;
                  }

                  >span {
                    display: inline-block;
                    height: 30px;
                    line-height: 28px;
                    padding: 0 20px;
                    margin-bottom: 4px;
                    @include sku-state-mixin;
                  }
                }
              }
            }
            </style>
          //================== Day7-09-拓展課-SKU組件-獲取有效路徑字典
            點擊規格更新禁用動態 - 生成有效路徑字典(1)
            核心原理：當前的規格SKU, 或者組合起來的規格SKU，在Sku數組中，對應項的
            庫存為零時，當前規保會被禁用，生成路徑字典是為了協助和簡化這個匹配過程

            生成有效路徑字典(2)
              實現步驟：
              1.根據庫存字段，得到有效的SKU數組
              2.根據有效的SKU數組，使用powerSet算法，得到所有子集
              3.根據子集生成路徑字典對象

          //================== Day7-10-拓展課-SKU組件-初始化時更新禁用狀態
            點擊規格更新禁用狀態 - 初始化規格禁用
              思路：遍歷每一個規格對象，使用name用段作為key，去路徑字典pathMap中，
              做匹配，匹配不上則禁用

              怎麼做到顯示上的禁用呢？
              1.通過增加disabled字段，disabled為false，匹配不上路徑字段，disabled為true
              2.配合動態類名控制禁用類名


          //================== Day7-11-拓展課-SKU組件-點擊時組合更新禁用狀態
            點擊規格更新禁用狀態 - 點擊時組合禁用更新
              思路：(點擊規格時)
              1.按照順序得到規格選中項的數組 ['藍色', '20cm', undefined]
              2.遍歷每一個規格
                2.1 把name字段的值，填充到對應的位置
                2.2 過濾掉undefined項，使用join方法, 形成一個有效的key
                2.3 使用key去pathMap中進行匹配, 匹配不上, 則當前項禁用    

          //================== Day7-12-拓展課-SKU組件-產出有效的SKU對象信息
            產出有效的SKU的信息
            什麼是有效的SKU? 三個都選中

            如何判斷當前用戶已經選擇了所有有效的規格?
            已選擇項數組['藍色', '20cm', undefined]中找不到undefined，那麼用戶已經
            選擇了所有的有效規格，此時可以產出數據

            如何獲取當前的SKU信息對象?
            把已選擇項數組拼接為路徑字的key，去路徑字典pathMap中找即可

            思考：
              嘗試改造SKU組件
              1.把異步數據內容，由父組件獲取，並且通過組件通信的方式傳給SKU組件
              2.當用戶選擇有效規格之後，把SKU對象信息，通過組件通信的方式拋給父組件

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
`,ju={__name:"index",setup(e){return Z.scrollToTop=!0,(t,o)=>($(),Q(q,null,[Bu,b("div",{innerHTML:Gu}),P(Z)],64))}},$u={},Ku=qo('<div data-v-ff3ccd06>我是Download頁面</div><div id="Vue3" class="content" data-v-ff3ccd06><div class="box" data-v-ff3ccd06><div style="padding-top:20px;" data-v-ff3ccd06>【Vue3】</div><div data-v-ff3ccd06><a href="https://www.youtube.com/watch?v=LlYhPO8Ti2U" target="_blank" data-v-ff3ccd06> 1.NET7 Web API | SQL Database | VueJS(3.0) - Composition API | CRUD| Full Video<span class="pdf" data-v-ff3ccd06>YouTube</span></a><p data-v-ff3ccd06>.解決CORS問題</p></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=19m0QpipH0fPS51aztlgZ0gFxwWkSpqo_" data-v-ff3ccd06> 1.dotnet7_vue3<span class="pdf" data-v-ff3ccd06>download&gt;</span></a></div><div data-v-ff3ccd06><a href="https://www.youtube.com/watch?v=2FoD_8dMGyU&amp;list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG" target="_blank" data-v-ff3ccd06> 2.【黑馬程序員】前端Vue3小兔鮮實戰項目<span class="pdf" data-v-ff3ccd06>YouTube</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=10LPanB6adG6BLF0cKcM3H-VCSvUWwf8A" data-v-ff3ccd06> 3.vue-rabbit_my 小兔鮮<span class="pdf" data-v-ff3ccd06>download</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=1AXgm42kcojPX2g7EfrSmHyb-N1BJAAMi" data-v-ff3ccd06> 4.vue-rabbit_sku 小兔鮮<span class="pdf" data-v-ff3ccd06>download</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=18N6U0JeeUsS6EhGGz2jvh3aZK41L-uBc" data-v-ff3ccd06> 5.vue3-basic-project-my(mock)<span class="pdf" data-v-ff3ccd06>download</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=1Xe_GxmzXJVSIxMnqw3cm15YkLLQc4tWD" data-v-ff3ccd06> 6.vue3-basic-project-my(有驗證名字不能重覆update)<span class="pdf" data-v-ff3ccd06>download</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=1551IhmQAwld3cmTH60XHFYvEbvCj2Hfo" data-v-ff3ccd06> 7.台灣濕地學會<span class="pdf" data-v-ff3ccd06>download</span></a></div><div style="padding-top:20px;" data-v-ff3ccd06>【WebAPI】</div><div data-v-ff3ccd06><a href="https://blog.talllkai.com/ASPNETCore" target="_blank" data-v-ff3ccd06> 1.完整且輕鬆學習ASP.NET Core Web API<span class="pdf" data-v-ff3ccd06>Web</span></a></div><div data-v-ff3ccd06><a href="https://www.youtube.com/watch?v=dXUfZuf1Wp4&amp;list=PLneJIGUTIItuqdxuDBEKCrvXCtCdUf_Xm" target="_blank" data-v-ff3ccd06> 2.ASP.NET Core Web API 入門教學<span class="pdf" data-v-ff3ccd06>YouTube</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=1Mi3nQijxvyz6TmA7NWzkudmxeJha7W-e" data-v-ff3ccd06> 3.DataBase_First_凱哥<span class="pdf" data-v-ff3ccd06>download</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=1ZvJ5hwHCPzPRMsv_w3sWJOxKYI88h8xd" data-v-ff3ccd06> 4.BookMark<span class="pdf" data-v-ff3ccd06>download</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=1Oiyo9Pgg-qCY6mkY9L0WDVmAc3VQYeeP" data-v-ff3ccd06> 5.無蝦米download<span class="pdf" data-v-ff3ccd06>download</span></a></div></div></div>',2);function qu(e,t){return Ku}const zu=Ie($u,[["render",qu],["__scopeId","data-v-ff3ccd06"]]),Ju=`
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
`,Si={__name:"_4_deployVite",setup(e){return Z.scrollToTop=!0,(t,o)=>($(),Q(q,null,[b("div",{innerHTML:Ju}),P(Z)],64))}},Qu=`
    <div id="Vite_to_github" style="display:flex; justify-content: center; background-color: #282923; color:#c1cccc; font-size: 14px;">
      <pre>
//===============================================================================================//
  當使用component :is="...">來在多個組件間作切換時，被切換掉的組件會被卸載。如果想讓組件一直
    存活，需要使用<KeepAlive>組件。

  傳給:is的值，可以是以下幾種：
      。被注冊的組件名
      。導入的組件對象
  如果使用選項式API, :is的值可以是字符屬
  下面請看我用組合式API實現一個小例子：

  <"script setup>
   import HelloWorld from '../components/HelloWorld.vue';
   import HelloVue from '../components/HelloVue.vue';
   imoport { ref } from 'vue'
   let curComponent = ref(true)
   const change = () => {
     curComponent.value = !curComponent.value
   }
  <"/script>

  <"template>
    <"main>
      <"button @click="change">切換組件<"/button>
      <"-- KeepAlive>-->
        <"component :is="curComponent? HelloWorld:HelloVue"><"/component>
      <"-- /KeepAlive>-->
    <"/main>
  <"/template>   
  
  <"-- HelloWorld.vue -->
  <"script>
  export default {
    unmounted(){
      console.log("HelloWorld Unmounted")
    }
  }
  <"/script>
  <"template>
    h1>HelloVue.vue</h1>
  <"/template>

  如果不使用<"KeepAlive>，每次切換組件，都將卸載之前的組件。
    </pre>
  </div>
`,Zu={__name:"_10_vue3_is",setup(e){return Z.scrollToTop=!0,(t,o)=>($(),Q(q,null,[b("div",{innerHTML:Qu}),P(Z)],64))}},Yu=`
    <div id="Vite_to_github" style="display:flex; justify-content: center; background-color: #282923; color:#c1cccc; font-size: 14px;">
      <pre>
//===============================================================================================//
  import HelloWorld from './components/HelloWorld.vue'
  import { h, ref } from 'vue'
  const msg = ref('1.Hello Vue3 + Vite')  

  const comp = h(
    'div',
    {style:{color:'red'}},
    [h('span','Hello World')],
    [h('p','這是一個標籤')]
  )


  const msg = ref('Hello Vue3 + Vite')
  const comp2= h(
    'div',
    {style:{color:'red'}},
    msg.value
  )
  // const comp2 = h(
  //   'div',
  //   {style:{color:'red'}},
  //   msg.value
  // )

  setTimeout(()=>{
    msg.value = '3.111'
  }, 2000)

  const Comp3 = (props) =>h(
    'div',
    {style:{color:'red'}},
    //msg.value
    props.count
  )

  const Comp4 = ((props, {slots}) => {
    const a = ref('4.aaa')
   return h(
      'div',
      {
        style:{color:'red'}, 
        onClick(){ console.log('click')},
        onMousedown(){ console.log('mousedown')}
      },
      //msg.value
      [slots?.header?.(a.value),
        '4.container',slots?.default?.()
      ]
    )
  })

  const Comp5 = ((props,{slots}) => {
    return h(
      HelloWorld, 
      {
        msg2:'App傳遞的msg2',
        onFoo(val){
          console.log('響應的事件foo',val)
        }
      }, 
      {
        default:slots.default,
        footer:() => 
          h(HelloWorld, null, {
            default: ()=> h('div', '5.嵌套的默認插槽'),
            footer: ({msg3}) => h('div', '5.嵌套的footer'+msg3)
          })
      })
  })

 
  <"template>
    <"component :is="comp"><"/component>
    <"!-- <"component :is="comp3"><"/component> -->
    <"Comp3 :count="3.1"><"div>3.2222<"/div><"/Comp3>
    <"Comp4 :count='4.1'>
      <"div>4.2222<"/div>
      <"template #header='a'>
        <"div>4.header {{ a }}<"/div> 
      <"/template>
    <"/Comp4>
    <"Comp5>
      <"div>5.App傳遞的默認插槽<"/div>
    <"/Comp5>
  <"/template>


================================================================
HellowWorld.vue

<"script setup>
// const msg = 'Hellow World Slot'
defineProps(['msg2'])
const emits = defineEmits(['foo'])

setTimeout(()=>{
  emits('foo','onFoo')
},2000)

<"/script>

<"template>
  <"div>
    <"slot>5.HelloWorld.vue</slot>
    {{ msg2 }}
    <"slot><"/slot>
    <"!-- <slot name="footer" :msg="msg">footer</slot>  -->
    <"slot name="footer" msg3=" + msg3 footer props">footer</slot>
  <"/div>
<"/template>





    </pre>
  </div>
`,Xu={__name:"_11_vue3_is",setup(e){return Z.scrollToTop=!0,(t,o)=>($(),Q(q,null,[b("div",{innerHTML:Yu}),P(Z)],64))}},Zs={__name:"HelloWorld",props:["msg2"],emits:["foo"],setup(e,{emit:t}){const o=t;return setTimeout(()=>{o("foo","onFoo")},2e3),(n,s)=>($(),Q("div",null,[en(n.$slots,"default",{},()=>[J("5.HelloWorld.vue")]),J(" "+et(e.msg2)+" ",1),en(n.$slots,"default"),en(n.$slots,"footer",{msg3:" + msg3 footer props"},()=>[J("footer")])]))}},Ne=e=>(Re("data-v-3a0fa83b"),e=e(),Me(),e),ed=Ne(()=>b("div",null,"這是其他頁",-1)),td=Ne(()=>b("div",null,"3.2222",-1)),od=Ne(()=>b("div",null,"4.2222",-1)),nd=Ne(()=>b("div",null,"5.App傳遞的默認插槽",-1)),sd={id:"Vite_to_github",class:"content"},rd=Ne(()=>b("div",null,[J("1.Vue3 CRUD + bootstrap "),b("a",{href:"https://www.youtube.com/watch?v=PrKh6GemOyg",target:"_blank"}," https://www.youtube.com/watch?v=PrKh6GemOyg ")],-1)),id=Ne(()=>b("div",null,[J("2.Vue3 學習筆記 "),b("a",{href:"https://hackmd.io/@Lin-Jay/S1xju_nKO",target:"_blank"}," https://hackmd.io/@Lin-Jay/S1xju_nKO ")],-1)),ad=Ne(()=>b("div",null,[J("3.Build app using Vue JS, .NET Core Web API and Microsoft SQL Server(create Azure) "),b("a",{href:"https://www.youtube.com/watch?v=TMmhECU3rHs",target:"_blank"}," https://www.youtube.com/watch?v=TMmhECU3rHs ")],-1)),ld=Ne(()=>b("a",{href:"https://www.youtube.com/watch?v=yo2bMGnIKE8",target:"_blank"}," https://www.youtube.com/watch?v=yo2bMGnIKE8 ",-1)),cd={key:0},ud=qo('<div data-v-3a0fa83b>5.先學 axios 基礎與封裝管理 API <a href="https://ithelp.ithome.com.tw/articles/10304656" target="_blank" data-v-3a0fa83b> https://ithelp.ithome.com.tw/articles/10304656 </a></div><div data-v-3a0fa83b>6.[C#][ASP.NET] Web API 開發心得 (7) - 使用 Token 進行 API 授權驗證 <a href="https://ithelp.ithome.com.tw/articles/10199102" target="_blank" data-v-3a0fa83b> https://ithelp.ithome.com.tw/articles/10199102 </a></div><div data-v-3a0fa83b>7.Poy Chang Trial and Error <a href="https://blog.poychang.net/categories/" target="_blank" data-v-3a0fa83b> https://blog.poychang.net/categories/ </a></div><div data-v-3a0fa83b>8.阿里巴巴向量圖標庫: iconfont <a href="https://www.iconfont.cn/" target="_blank" data-v-3a0fa83b> https://www.iconfont.cn/ </a></div><div data-v-3a0fa83b>9.VueUse 中文文檔 <a href="https://vueuse.pages.dev/" target="_blank" data-v-3a0fa83b> https://vueuse.pages.dev/ </a></div><div data-v-3a0fa83b>9.vue3 is我意想不到的用法 <a href="https://segmentfault.com/a/1190000044532342" target="_blank" data-v-3a0fa83b> https://segmentfault.com/a/1190000044532342 </a></div>',6),dd=Ne(()=>b("a",{href:"https://blog.csdn.net/kuang_nu/article/details/128834690",target:"_blank"}," https://blog.csdn.net/kuang_nu/article/details/128834690 ",-1)),fd={key:0},pd=Ne(()=>b("a",{href:"https://www.bilibili.com/video/BV166421Z7nU/",target:"_blank"}," https://www.bilibili.com/video/BV166421Z7nU/ ",-1)),hd={key:0},md=Ne(()=>b("div",null,[J("12.Master xUnit Like A Pro in Under 10 Minutes! "),b("a",{href:"https://www.youtube.com/watch?v=rohq-Wqj0yI",target:"_blank"}," https://www.youtube.com/watch?v=rohq-Wqj0yI ")],-1)),gd=Ne(()=>b("div",null,[J("13.Native UI - 表單 "),b("a",{href:"https://www.naiveui.com/zh-CN/os-theme/components/form#inline.vue",target:"_blank"}," https://www.naiveui.com/zh-CN/os-theme/components/form#inline.vue ")],-1)),bd=Ne(()=>b("div",null,[J("14.Vue3 如何用 defineModel 實作 props/ emit 的父子元件傳值，讓傳值變得更方便簡單 "),b("a",{href:"https://muki.tw/vmodel-definemodel-props-emit/",target:"_blank"}," https://muki.tw/vmodel-definemodel-props-emit/ ")],-1)),vd=Ne(()=>b("div",null,[J("15.Vue3 獲取子組件dom "),b("a",{href:"https://wenku.csdn.net/answer/6j4iqoam25?ydreferer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8%3D",target:"_blank"}," https://wenku.csdn.net/answer/6j4iqoam25?ydreferer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8%3D ")],-1)),yd={__name:"index",setup(e){let t=xe(!1),o=xe(!1),n=xe(!1);const s=xe("1.Hello Vue3 + Vite"),r=Fe("div",{style:{color:"red"}},[Fe("span","1.Hello World")],[Fe("p","1.這是一個標籤")]);setTimeout(()=>{s.value="3.111"},2e3);const i=f=>Fe("div",{style:{color:"red"}},f.count),l=(f,{slots:d})=>{var h,g;const p=xe("4.aaa");return Fe("div",{style:{color:"red"},onClick(){console.log("click")},onMousedown(){console.log("mousedown")}},[(h=d==null?void 0:d.header)==null?void 0:h.call(d,p.value),"4.container",(g=d==null?void 0:d.default)==null?void 0:g.call(d)])},a=(f,{slots:d})=>Fe(Zs,{msg2:"App傳遞的msg2",onFoo(p){console.log("響應的事件foo",p)}},{default:d.default,footer:()=>Fe(Zs,null,{default:()=>Fe("div","5.嵌套的默認插槽"),footer:({msg3:p})=>Fe("div","5.嵌套的footer"+p)})});return Z.scrollToTop=!0,(f,d)=>($(),Q(q,null,[ed,($(),Ko(La(fe(r)))),P(i,{count:3.1},{default:ie(()=>[td]),_:1}),P(l,{count:4.1},{header:ie(p=>[b("div",null,"4.header "+et(p),1)]),default:ie(()=>[od]),_:1}),P(a,null,{default:ie(()=>[nd]),_:1}),b("div",sd,[rd,id,ad,b("div",null,[J("4.How to Deploy Your Vite App to Github Pages "),ld,b("button",{onClick:d[0]||(d[0]=p=>ve(t)?t.value=!fe(t):t=!fe(t))},"Toggle"),P(it,null,{default:ie(()=>[fe(t)?($(),Q("div",cd,[P(Si)])):Nt("",!0)]),_:1})]),ud,b("div",null,[J("10.Vue3 動態組件 標籤和:is 的用法 "),dd,b("button",{onClick:d[1]||(d[1]=p=>ve(o)?o.value=!fe(o):o=!fe(o))},"Toggle"),P(it,null,{default:ie(()=>[fe(o)?($(),Q("div",fd,[P(Zu)])):Nt("",!0)]),_:1})]),b("div",null,[J("11.Vue3 h函數的使用(必看) "),pd,b("button",{onClick:d[2]||(d[2]=p=>ve(n)?n.value=!fe(n):n=!fe(n))},"Toggle"),P(it,null,{default:ie(()=>[fe(n)?($(),Q("div",hd,[P(Xu)])):Nt("",!0)]),_:1})]),md,gd,bd,vd]),P(Z)],64))}},_d=Ie(yd,[["__scopeId","data-v-3a0fa83b"]]),Pi=e=>(Re("data-v-c0da6ecf"),e=e(),Me(),e),wd=Pi(()=>b("div",null,[b("h2",null,"Dotnet7_vue3"),b("a",{href:"https://www.youtube.com/watch?v=LlYhPO8Ti2U",target:"_blank"}," https://www.youtube.com/watch?v=LlYhPO8Ti2U "),b("div",null,".NET7 Web API | SQL Database | VueJS(3.0) - Composition API | CRUD")],-1)),Ad={class:"container"},Id={class:"app-header-nav",style:{"list-style":"none"}},Cd=Pi(()=>b("div",null,null,-1)),Td={__name:"index",setup(e){return Z.scrollToTop=!0,(t,o)=>{const n=Do("RouterLink"),s=Do("RouterView");return $(),Q(q,null,[wd,b("div",null,[b("div",Ad,[b("ul",Id,[b("li",null,[P(n,{to:"/_beach_info"},{default:ie(()=>[J("_Beach_Info.vue")]),_:1})]),b("li",null,[P(n,{to:"/addbeach"},{default:ie(()=>[J("AddBeach.vue")]),_:1})]),b("li",null,[P(n,{to:"/beachList"},{default:ie(()=>[J("BeachList.vue")]),_:1})]),b("li",null,[P(n,{to:"/editbeach"},{default:ie(()=>[J("EditBeach.vue")]),_:1})]),b("li",null,[P(n,{to:"/routerbeach"},{default:ie(()=>[J("router_Beach.vue")]),_:1})]),b("li",null,[P(n,{to:"/confirmDeletePopup"},{default:ie(()=>[J("ConfirmDeletePopup.vue")]),_:1})])])]),P(s),Cd]),P(Z)],64)}}},Sd=Ie(Td,[["__scopeId","data-v-c0da6ecf"]]),Pd=e=>(Re("data-v-faca44a6"),e=e(),Me(),e),xd=Pd(()=>b("div",null,"這是_Beach_Info",-1)),Ed=`
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

    在專案新增資料夾 Data/Entities
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
`,Dd={__name:"_Beach_Info",setup(e){return(t,o)=>($(),Q(q,null,[xd,b("div",{class:"content"},[b("pre",null,"      "+et(Ed)+`
    `)])],64))}},Ys=Ie(Dd,[["__scopeId","data-v-faca44a6"]]),Ld=e=>(Re("data-v-315d8245"),e=e(),Me(),e),kd=Ld(()=>b("div",null,"這是AddBeach",-1)),Nd=`
  <"script setup
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

  <"/script>
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

`,Ud={__name:"AddBeach",setup(e){return(t,o)=>($(),Q(q,null,[kd,b("div",{class:"content"},[b("pre",null,"      "+et(Nd)+`
    `)])],64))}},Wd=Ie(Ud,[["__scopeId","data-v-315d8245"]]),Rd=e=>(Re("data-v-21c2ba9b"),e=e(),Me(),e),Md=Rd(()=>b("div",null,"這是BeachList",-1)),Hd=`
    <"script setup>
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

    <"/script>
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

`,Od={__name:"BeachList",setup(e){return(t,o)=>($(),Q(q,null,[Md,b("div",{class:"content"},[b("pre",null,"      "+et(Hd)+`
    `)])],64))}},Fd=Ie(Od,[["__scopeId","data-v-21c2ba9b"]]),Vd=e=>(Re("data-v-3763e4f1"),e=e(),Me(),e),Bd=Vd(()=>b("div",null,"這是EditBeach",-1)),Gd=`
    <"script setup>
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

    <"/script>
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

`,jd={__name:"EditBeach",setup(e){return(t,o)=>($(),Q(q,null,[Bd,b("div",{class:"content"},[b("pre",null,"      "+et(Gd)+`
    `)])],64))}},$d=Ie(jd,[["__scopeId","data-v-3763e4f1"]]),Kd=e=>(Re("data-v-f0f2e55e"),e=e(),Me(),e),qd=Kd(()=>b("div",null,"這是_router_Beach",-1)),zd=`
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


`,Jd={__name:"router_Beach",setup(e){return(t,o)=>($(),Q(q,null,[qd,b("div",{class:"content"},[b("pre",null,"      "+et(zd)+`
    `)])],64))}},Qd=Ie(Jd,[["__scopeId","data-v-f0f2e55e"]]),Zd=e=>(Re("data-v-69fb1a2b"),e=e(),Me(),e),Yd=Zd(()=>b("div",null,"這是ConfirmDeletePopup",-1)),Xd=`
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


`,ef={__name:"ConfirmDeletePopup",setup(e){return(t,o)=>($(),Q(q,null,[Yd,b("div",{class:"content"},[b("pre",null,`      這放在components\\
      由BeachList 呼叫
      `+et(Xd)+`
    `)])],64))}},tf=Ie(ef,[["__scopeId","data-v-69fb1a2b"]]),of=`
    <div id="Vite_to_github" style="display:flex; justify-content: center; background-color: #282923; color:#c1cccc; font-size: 14px;">
      <pre>
//===============================================================================================//
    vs code 快捷鍵

    ctrl + shift + 左(右)   ： 反白整個字
    ctrl + d		          :  選取相同的字
    alt + 上(下)                :  整行移動
    alt + shift + 上(下)    ： 複製一行

    fn + alt + f12            ： 尋找變數之定義
    fn + shift + f12         ： 跳出的參考頁中，會把所有使用到的變數位置列出，並可以直接移到該位置。

    Ctrl + F2 同時選取同名的字串
    Ctrl + D  依序選取同名的字串
    Alt + CLICK 一次編輯多個位置


    官方快速鍵總表
    Visual Studio Code shortcuts for Windows
    https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf

    Visual Studio Code shortcuts for MacOS
    https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf


    /*代碼字串*/
    Alt + ↑/↓ 移動整行
    Ctrl + F2 同時選取同名的字串
    Ctrl + D  依序選取同名的字串
    Alt + CLICK 一次編輯多個位置
    Alt + SHIFT 按住滑鼠上/下拖曳 一次編輯多行
    Alt + Shift + f 自動整理程式碼
    Ctrl+]/[ 行縮進
    Ctrl + Shift + ]/[ 折疊區塊
    Ctrl + K Ctrl + ]/[ 折疊子區塊
    Ctrl + K Ctrl + 0 折疊所有區塊
    Ctrl + K Ctrl + J 展開所有區塊
    Home/End 移動到行首/尾
    Ctrl + Home/End 移動到頁首/尾
    /*變數*/
    Alt + F12 尋找變數之定義
    F12 跳到定義處
    Shift + F12 所有使用到的變數列表
    /*編輯器與視窗*/
    Ctrl + 數字鍵 分割編輯視窗，最多3個
    Ctrl + W 關閉視窗或編輯頁
    Ctrl + Tab 往下一個編輯頁
    Ctrl + Shift + Tab 往前一個編輯頁
    Ctrl + B 側邊欄顯示/隱藏
    F11 全螢幕
    /*終端機*/
    Ctrl + ' 開啟終端機
    Ctrl + Shift + ' 建立一個新的終端機分頁






    </pre>
  </div>
`,nf={__name:"_2_vscode",setup(e){return Z.scrollToTop=!0,(t,o)=>($(),Q(q,null,[b("div",{innerHTML:of}),P(Z)],64))}},Kn=e=>(Re("data-v-7775a5f3"),e=e(),Me(),e),sf=Kn(()=>b("div",null,"這是VS Code 功能頁",-1)),rf={id:"Vite_to_github",class:"content"},af=Kn(()=>b("div",null,[J("1.vS Code文件標簽欄多行顯示 "),b("a",{href:"https://blog.csdn.net/mj475002864/article/details/115456004",target:"_blank"}," https://blog.csdn.net/mj475002864/article/details/115456004 "),b("p",null,"ctrl + shift + p => 查詢 Open Workspace Settings => Wrap Tabs 打勾 ")],-1)),lf={key:0},cf=Kn(()=>b("div",null,[J("3.vs code 開發Extension "),b("p",null,"TypeScript Vue Plugin(Volar)"),b("p",null,"Vue Language Features"),b("p",null,"Vue - Official")],-1)),uf={__name:"index",setup(e){let t=xe(!1);return Z.scrollToTop=!0,(o,n)=>($(),Q(q,null,[sf,b("div",rf,[af,b("div",null,[J("2.vs code 快捷鍵 "),b("button",{onClick:n[0]||(n[0]=s=>ve(t)?t.value=!fe(t):t=!fe(t))},"Toggle"),P(it,null,{default:ie(()=>[fe(t)?($(),Q("div",lf,[P(nf)])):Nt("",!0)]),_:1})]),cf]),P(Z)],64))}},df=Ie(uf,[["__scopeId","data-v-7775a5f3"]]),ff=qo('<div data-v-bb9159e2>vue3+Naive UI</div><div id="Vite_to_github" class="content" data-v-bb9159e2><div data-v-bb9159e2>1.ue3+Naive UI數據表格基本使用方式 <a href="https://blog.csdn.net/weixin_54570626/article/details/129407702" target="_blank" data-v-bb9159e2> https://blog.csdn.net/weixin_54570626/article/details/129407702 </a></div><div data-v-bb9159e2>2.naive ui 數據表格操作加入兩個按鈕解決辦法 <a href="https://blog.csdn.net/uglyduckling0412/article/details/131438996" target="_blank" data-v-bb9159e2> https://blog.csdn.net/uglyduckling0412/article/details/131438996 </a></div><div data-v-bb9159e2>3.Naive UI之Data Table <a href="https://blog.csdn.net/aliceyang2012/article/details/127801611" target="_blank" data-v-bb9159e2> https://blog.csdn.net/aliceyang2012/article/details/127801611 </a></div><div data-v-bb9159e2>4.vue3結合naiveui的表單規則寫法（回調） <a href="https://www.cnblogs.com/lingern/p/16190795.html" target="_blank" data-v-bb9159e2> https://www.cnblogs.com/lingern/p/16190795.html </a></div></div>',2),pf={__name:"index",setup(e){return xe(!1),Z.scrollToTop=!0,(t,o)=>($(),Q(q,null,[ff,P(Z)],64))}},hf=Ie(pf,[["__scopeId","data-v-bb9159e2"]]),mf=qo('<div data-v-97fd3d78>這是影音頁</div><div id="Vite_to_github" class="content" data-v-97fd3d78><div data-v-97fd3d78>1.Vue3 CRUD + bootstrap <a href="https://www.youtube.com/watch?v=PrKh6GemOyg" target="_blank" data-v-97fd3d78> https://www.youtube.com/watch?v=PrKh6GemOyg </a></div><div data-v-97fd3d78>2.後台課程管理系統-Vue3版 <a href="https://www.youtube.com/watch?v=yZMTHoGSuVQ&amp;list=PL_vrngOaamYsIovhZ3Cd9M2vPhm3yRTnG" target="_blank" data-v-97fd3d78> https://www.youtube.com/watch?v=yZMTHoGSuVQ&amp;list=PL_vrngOaamYsIovhZ3Cd9M2vPhm3yRTnG </a></div><div data-v-97fd3d78>3.2024年不看后悔的Vue3+.NET7+WebAPI从零手写后台管理系统 <a href="https://www.bilibili.com/video/BV1Km411o7ip?p=1&amp;vd_source=1a5937a80fc962029ba6a7b9ee9a1654" target="_blank" data-v-97fd3d78> https://www.bilibili.com/video/BV1Km411o7ip?p=1&amp;vd_source=1a5937a80fc962029ba6a7b9ee9a1654 </a><a href="https://search.bilibili.com/all?vt=75651059&amp;keyword=2024%E5%B9%B4%E4%B8%8D%E7%9C%8B%E5%90%8E%E6%82%94%E7%9A%84Vue3%2B.NET7%2BWebAPI&amp;from_source=webtop_search&amp;spm_id_from=333.1007&amp;search_source=5" target="_blank" data-v-97fd3d78> https://search.bilibili.com/all?vt=75651059&amp;keyword=2024%E5%B9%B4%E4%B8%8D%E7%9C%8B%E5%90%8E%E6%82%94%E7%9A%84Vue3%2B.NET7%2BWebAPI&amp;from_source=webtop_search&amp;spm_id_from=333.1007&amp;search_source=5 </a></div><div data-v-97fd3d78>4.2023全新C#完全零基础入门教程（附源码） <a href="https://www.bilibili.com/read/cv25507935/" target="_blank" data-v-97fd3d78> https://www.bilibili.com/read/cv25507935/ </a></div></div>',2),gf={__name:"index",setup(e){return xe(!1),Z.scrollToTop=!0,(t,o)=>($(),Q(q,null,[mf,P(Z)],64))}},bf=Ie(gf,[["__scopeId","data-v-97fd3d78"]]),vf=b("div",null,"【尚硅谷】ES6教程——涵盖ES6-ES11",-1),yf=`
  <div id="Vue3-rabbit" style="display:flex; justify-content: center; background-color: #282923; color:#c1cccc; font-size: 14px;">
    <pre>
//===============================================================================================//
      <a href="https://www.youtube.com/playlist?list=PLmOn9nNkQxJFlj86lvBSpC2UsNw-pdmdq" target="_blank">
        【尚硅谷】ES6教程——涵盖ES6-ES11
      </a>

      //================== 18 尚硅谷 ES6 迭代器介绍
      for(let v in xiyou){  // for in 保存的是鍵名
        console.log(v)
      } 
      for(let v of xiyou){  // for in 保存的是鍵值
        console.log(v)
      } 

      // 48.Function Factories (JavaScript全攻略)
      function maeGreeting(language){
        return function(firstname, lastname){
          if(language === 'en'){
            console.log('Hello ' + firstname + ' ' + lastname);
          }
          if(language === 'es'){
            console.log('Hola ' + firstname + ' ' + lastname);
          }
        }
      }
      var greetEnglish = makeGreeting('en');
      var greetSpanish = makeGreeting('es');

      greetEnglish('John', 'Doe');
      greetSpanish('John', 'Doe');
 
    </pre>
  </div>
`,_f={__name:"index",setup(e){return Z.scrollToTop=!0,(t,o)=>($(),Q(q,null,[vf,b("div",{innerHTML:yf}),P(Z)],64))}},wf=e=>(Re("data-v-578d3ec3"),e=e(),Me(),e),Af=wf(()=>b("div",null,"我是DotnetAPI_Angular頁面",-1)),If=`
    <div id="content" style="display:flex; justify-content: center; background-color: #282923; color:#c1cccc; font-size: 14px;">
    <pre>


      5.Introduction
        Learning Goals
        Implement the basic API functionality and have an introductory understanding of:
          1.Using the dotnet CLI
          2.API Controllers and Endpoints
          3.ENtity Framework
          4.The API Project structure
          5.Configuration and Environment variables
          6.Source control
      
      6.Creating the .Net API Project using the dotnet CLI
        mkdir DatingApp
        cd DatingApp
        dotnet --info  ==> 列出安裝的sdk
        dotnet -h
        dotnet new -h
        dotnet new list
        dotnet new sln ==> 建立Solution File (1)
        dotnet new webapi -controllers -n API ==> 建立ASP.NET Core Web API (2)
        ls
          -----------------
          API DatingApp.sln
        dotnet sln -h
        dotnet sln add API ==> API/API.csproj added to the solution (3)
        dotnet sln list 
          Project(s)
          -----------------
          API/API.csproj
        code . => 打開vs code

      7.Setting up VS code to work with C#
        ctrl + shift + p => reload window
        Extensions:
          c#  (4)
          C# Dev Kit
          .NET Install Tool
          Material Icon Theme
          NuGet Gallery (pcislo)
          SQLite

          Ctrl + p => 尋找檔案
          File -> Auto Save V

      8.Getting to know the API project files
        Cd API
        dotnet run

        http://localhost:5025 => 打開沒有畫面，因為是webapi設定
        launthSettings.json => 設定只留下 profiles-> http
          移掉launchUrl, launchBrower: false
          applicationUrl: "http://localhost:5000; https://localhost:5001"
        => dotnet dev-certs https --trust (https問題)

        Program.cs 主要入口點
          裡面可以設定middle ware: 如jwt...
            先移除 AddEndpointApiExplore, AddSwaggerGen
            swagger, useHttpsRedirection, UseAuthorization

        API.csproj  ==> <Nullable>enable</Nullable>

        appsettings.Development.json => 
          "Microsoft.AspNetCore": "Warning" => "Information"

        donet watch run 

      9.Creating our first Entity
        (5) 在API底下，建立一個folder(Entities) 要儲存類或對象的地方
          -> 資料夾 按右鍵 new C#(class) AppUser.cs
            prop (快速洟立屬性)
            public int Id {get; set;}
            public required string UserName {get; set;} // required可以移除警告
            //public string UserName {get; set;} == null // 給預設值

            <Nullable>enable</Nullable> => 可以當作檢查欄位值是否為null

        ---隱藏obj bin資料夾
          setttings(搜尋exclude) Files: Exclude 
              AddPattern **/bin  **/obj
      
      10.Introduction to Entity Framework
          What is it? 
          An Object Relation Mapper(ORM)
          Trnaslates our code into SQL commands that update our tables in the database

          AppUser --- Entity Framework  --- Id UserName
                        DbContext           1   Bob
                                            2   Tom
                                            3   Sam
          DbContext.Users
          .Add(       ----->   Sqlite Provide  ---> INSERT INTO Users
          new User{Id = 4, Name = John}             (Id, Name) VALUES(4, John)
          )

          Sqlite 跨平台，可以在任何系統上工作

          Entity Framework Features
          .Querying 
          .Chnage Tracking
          .Saving
          .Concurrency
          .Transactions
          .Caching
          .Build-in conventions
          .Configurations
          .Migrations

      11.Adding Entity Framework to our project
        install NuGet Gallery(pcislo)
        (x)ctrl+shift+p  -> nuget 打開
        在terminal旁邊，有個NUGET
        尋找EntityframeworkCore.Design 8.0.4
            EntityframeworkCore.Sqlite 8.0.4

        查看API.csproj

      12.Adding a DbContext class
        在API/ 建立新資料夾 Data
        右鍵 建立  DataContext.cs
        namespace API.Data;
        public class DataContext(DbContextOptions options) : DbContext(options)
        {
          //在DataContext上方，選擇燈泡 Generate constructor 'DataContext(options)'
          //public DataContext(DbContextOptions options) :

          public DbSet<AppUser> User { get; set;}
        }
        
        在Programs.cs
        builder.Services.AddControllers();
        加上builder.Services.AddDbContext<DataContext>(opt => 
        {
          opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
        })
        
      13.Creating the Connection string
        在appsettings.Development.json
          "ConnectionStrings": {
            "MyWorldDbConnection": "Server=127.0.0.1;Database=Web;User ID=Web;Password=123456;TrustServerCertificate=true"
          },

          "ConnectionStrings": {
            "DefaultConnection": "Data Source=dating.db"
          },
        
        //Migration
        google 搜尋 nuget.org ->  deotnet-ef 安裝
        -> dotnet tool install --global dotnet-ef --version 7.0.5 
        dotnet tool list -g (查看dotnet-ef 版本)
        dotnet tool -h
        
        dotnet ef migration add InitialCreate -o Data/Migrations 指定路徑
        會產生三個檔案，有up, down
        如果有錯，是看出來的，要使用dotnet build才看得出來，哪裡的code有錯

      14.Creating the database using Entity Framework Code Firt...
        dotnet ef database update (建立資料庫)
        
        dotnet ef database -h (查看指令)

        extension: 安裝SQLite or DbBeaver
        (查看資料庫)ctrl + shift + p => SQLite:OpenDatabase => 選擇 API/dating.db
          或是 在左邊視窗，下面=> SQLITE EXPLORER
          建立資料，在Users右鍵，NewQuery[Insert] => 
          INSERT INTO Users (Id, Name) VALUES (1, 'Bob')
          INSERT INTO Users (Id, Name) VALUES (2, 'Tom')
          INSERT INTO Users (Id, Name) VALUES (3, 'Jane')
            選取 -> 右鍵 -> Run Selected Query

      15.Adding a new API Controller
        建立UsersController.cs
          加上
        [ApiController]
        [Route("api/[controller]")]  // /api/users
        public class UsersController(DataContext context) : ControllerBase
        {
          // private readonly DataContext _context;
          // public UsersController(DataContext context)
          // {
          //   _context = context;
          // }
          [HttpGet]
          public ActionResult<IEnumerable<AppUser>> GetUsers()
          {
            var users = context.Users.ToList();
            
            // return Ok(users);
            return users;
          }

          [HttpGet("{id:int}")] // /api/users/id
          public ActionResult<AppUser> GetUsers()
          {
            var user = context.Users.Find(id);

            if(user == null) return NotFound();

            return user;
          }

        }
        // 測試：https://localhost:5001/api/users
        // postman

      16.Making our code Asynchronous
          [HttpGet]
          public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
          {
            var users = await context.Users.ToListAsync();

            return users;
          }

          [HttpGet("{id:int}")] // /api/users/id
          public async Task<ActionResult<AppUser>> GetUsers()
          {
            var user = await context.Users.FindAsync(id);

            if(user == null) return NotFound();

            return user;
          }
          
          // 自動排版 Shift + Alt + F
          // 如果遇到 ssl問題，POSTMAN => setting -> SSL Certification OFF(關掉)
      
      17.Saving our code into Source control
          安裝 git
          在github 上Create a new repository
          初始化 git init
          dotnet new list => 裡面有dotnet gitignore 文件
          dotnet new gitignore 產生ignore文件
            appsettings.json 不想送到Github=> 在左邊Git項目，
               找到檔案，右鍵 add to gitignore
          dotnet new globaljson => 它告訴我們，將使用哪個SDK版本
            dating.db 也會發送到github，通常不會這麼做
            

            在左邊Git項目，按 + (等同於git add .)
            打上Message, Commit (等同於git commit -m "End of section 2")
            git branch -M main
            git remote add origin git@github.com:gh242/deploying-vite-project-example.git
            git push -u origin main

            加上Develop的token
            連上github.com, 在右上頭像 -> Settings -> 最下面 Developer settings
            Personal access tokens -> Tokens(classic) -> 右上 Generate new token
      
      第3節 Building a walking skeletion Part2 - Angular
                      
        19.Angular
            Introduction

            Learning goals
              complete the walking sskeleton and have an introductory understanding of:
                1.Using the Angular CLI
                2.How to create a new Angular app
                3.The Angular project files
                4.The Angular bootstrap precess
                5.Using the Angular HTTP Client Service
                6.Running an Angular app over HTTPS
                7.How to add packages using NPM
      
      20.Create the Angular
         install the Angular CLI

         npm install -g @angular/cli@17 (安裝)
         ng version 
         ng new client ==> 建立 Angular 專案

         安裝 ng-gallery

      21.Running the angular project and reviewing the bootstrap of the app
        cd client
        ng serve (啟動)
        檔案介紹：
            app.component.ts
            src/index.html

      22.Adding VS Code extensions to work with Angular
            settings -> brackets -> always

      24.Adding CORS support in the API
        在API/Program.cs
        builder.Service.AddCors();
        app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().
            WithOrigins("http://localhost:4200", "https://localhost:4200")
          )
            
      

      第4節 Authentication basics
      29.Introduction
        Learning Goals
        Implement basic authentication in our app and have an understanding of :
        1.How to store passwords in the Database
        2.Using inheritance in C# - DRY
        3.Using the C# debugger
        4.Using Data Transfer Objects(DTOs)
        5.Validation
        6.JSON Web Tokens(JWTs)
        7.Using services in C#
        8.Middleware
        9.Extension methods - DRY

        Where do I start?
        Requirements
        Users should be able to log in
        Users should be able to register
        Users should be able to view other users
        Users should be able to privately message other users

      30.Safe storage of passwords
        Option1 - Storing in clear text
        Option2 - Hasing the password
        Option3 - Hashing and salting the password

        FAQs
        Why don't you use ASP.NET Identity?
        Why are you storing the Password Salt in the DB? Isn't this less secure?
        Don't worry! Later no we will refactor to the wildly used and "battle 
        hardened" ASP.NET Core identity.
        
      31.Updating the user entity
          AppUser.cs
          --------------------------------------------------------
            public class AppUser
            {
              public int Id { get; set; }
              public requried string UserName { get; set; }
              public required byte[] PasswordHas { get; set; }
              public requried byte[] PasswordSalt { get; set; }
            }
          
          API> dotnet ef migrations add UserEntityUpdated
             > dotnet ef database update (更新資料庫欄位)
      
      32.Creating a base API controller
        在controllers => 右鍵 => new C# > BaseApiController.cs
            建立BaseApi 可以少寫code
        
            namespace API.Controllers;

            [ApiController]
            [Route("api/[controller]")]
            public class BaseApiController : ControllerBase
            {
            }

            AppUser.cs
            就可以改繼承, 底下就可以去掉 
            //[ApiController]
            //[Route("api/[controller]")]
            public class UsersController(DataContext context) : BaseApiController
            {
            }

            在postman import : StudentAssets/DatingApp.postman_collection.json

      33.Creating an Account Controller with a register endpoint
            new一個新的controller 
            Account.cs
             --------------------------------------------------------
            namespace API.Controllers;
            
             public class AccountController(DataContext context) : BaseApiController
             {
                [HttpPost("register")] // account/register
                public async Task<ActionResult<AppUser>> Register(string username, string password)
                {
                  using var hmac = new HMACSHA512(); // using 一旦這個類超出了作用域，它不再被使用了，dispose就會被調用

                  var user = new AppUser
                  {
                    UserName = username,
                    PasswordHash = hmac.ComputeHash(Ecoding.UTF8.GetBytes(password)),
                    PasswordSalt = hmac.key
                  };

                  contexxt.Users.Add(user);
                  await context.SaveChangeAsync();
                }
             }

        // dotnet watch         
        // 使用POSTMAN 測試
      
      34. Using DTOs
        建立新資料夾 DTOs
        RegisterDto.cs
        //---------------------          
        public class RegisterDto
        {
          [Required]
          [MaxLength(100)]
          public required string Username { get; set; }

          [Required]
          public required string Password { get; set; }
        }

        AppUser.cs
        //---------------------  
          public class AccountController(DataContext context) : BaseApiController
          {
            [HttpPost("register")] // account/register
            public async Task<ActionResult<AppUser>> Register(RegisterDto registerDto)
            {
              if(await UserExists(registerDto.Username)) return BadRequest("Username is taken");

              using var hmac = new HMACSHA512(); // using 一旦這個類超出了作用域，它不再被使用了，dispose就會被調用

              var user = new AppUser
              {
                UserName = registerDto.Username.ToLower(),
                PasswordHash = hmac.ComputeHash(Ecoding.UTF8.GetBytes(registerDto.Password)),
                PasswordSalt = hmac.key
              };

              contexxt.Users.Add(user);
              await context.SaveChangeAsync();
            }
          }
          
          private async Task<bool> UserExists(string username)
          {
            return await context.Users.AnyAsync(x => x.UserName.ToLower() == username); // Bob != bob
          }

          // dotnet watch         
          // 使用POSTMAN 測試
      

      35.Using the debugger (產生debug檔)
        => 左邊選項 有bug的按鈕 => create a launch.json file
          (檔案會產生在 .vscode底下)

          "version": "0.2.0",
          "configurations": [
            {
              "name": "C#: API Debug",
              "type": "dotnet",
              "request": "launch",
              "webRoot": "$-{workspaceFolder}/API.csproj"
            },
            {
              "name": ".NET Core Attach",
              "type": "coreclr",      
              "request": "attach"       
            }
          ]

        
      36.Adding a login endpoint
        客戶端不會與API服務器保持對話
        在API服務器返回的內容和客戶端，擁有的內容之間，沒有狀態記憶
        它是無狀態的
        API的任務是，接收請求，執行請求所需的任何邏輯，並返回響應

        建立LoginDtos.cs
        namespace API.DTOs
        public class LoginDto
        {
            public required string Username { get; set; }
            public required string Password { get; set; }
        }

        在Account.cs
        新增
        [HttpPost("login")]
        public async Task<ActionResult<AppUser>> Login(LoginDto loginDto)
        {
          var user = await context.Users.SingleorDefaultAsync(
            x => x.UserName == loginDto.Username.ToLower());

          if(user == null) return Unauthorized("Invalid username");

          using var hmac = new HMACSHA512(user.PasswordSalt);

          var computedHash = hmac.ComputeHash(Encoding.UTF8.GetByes(loginDto.Password));

          for(int i = 0; i < computedHash.Length; i++)
          {
            if(computedHash[i] != user.PasswordHash[i])
             return Unauthorized("Invalid password");
          }

          return user;
        }
        
        // 使用postnam 驗證 Login as bob, 輸入正確"username"="jim",
            "password"="password" 返回200 ok
      

      37.JSON web tokens(JWT)
        TOKEN AUTHENTICATION
        Industry Standard for tokens(RFC 7519)
        Self-contained and can contain:
        .Credentials
        .Claims
        .Other information

        JWT Structure => Header, Payload, Verify Siginature

        Benefits of JWT
        No session to manage - JWTs are self contained tokens
        Portable - A single token can be used with multiple backedns
        No Cookies required - mobile friendly
        Performance - Once a token is issued, there is no need to make a database
          request to verify a users authentication

      38.Adding a token service
        建立一個新資料夾 API/Interfaces
        新增ITokenService.cs 的interface
        public interface ITokenService
        {
          string CreateToken(AppUser user);
        }

        建立一個新資料夾 API/Services
        新增TokenService.cs 的class
        public class TokenService : ITokenService
        {
          public string CreateToken(AppUser user)
          {
            throw new NotImplementedException();
          }
        }

        Program.cs
        //------------------------
        在builder.Services.AddCors(); 底下
        builder.Services.AddScoped<ITokenService, ITokenService>();
        
      39.Adding the create token logic
        Inject
        在TokenService.cs
        public class TokenService(IConfiguration config) : ITokenService
        {
          public string CreateToken(AppUser user)
          {
            var tokenKey = config["TokenKey"] ?? throw new Exception
            ("Cannot access tokenKey from appsettings");
            if(tokenKey.Length < 64) throw new Exception
            ("Your tokenKey needs to be longer")
            //SymmetricSecuritEkey 可以加密及解密
            var key = new SymmetricSecuritKey(Ecoding.UTF8.GetBytes(tokenkey));

            var claims = new List<Claim>  // 聲明
            {
              new Claim(ClaimTypes.NameIdentifier, user.UserName)
            };
            
            // 用什麼算法來加密這個特定的密鑰
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
            
            // 描述我們要返回的令牌
            var tokenDescriptor = new SecuritDescriptor
            {
              Subject = new ClaimsIdentity(claims),
              Expires = DateTime.UtcNow.AddDays(7), // 到期時間
              SigningCredentials = creds
            };

            //令牌處理程序，保存為新的JWT安裝令牌處理程序
            var tokenHandler = new JwtSecurityTokenHandler();
            var toekn = tokenHandler.CreateToken(tokenDescriptor); 
            // 創建令牌，傳入令牌描述符，包括我們的聲明

            return tokenHandler.WriteToken(toekn); // 寫令牌並分發令牌
          }
        }

        安裝
        ctrl + shift + p => nuget: open Nuget Gallery
        打上System.identityModel.Tokens.Jwt
        安裝 在api.csproj 

        在密碼學中，有兩種密鑰，有一個對稱密鑰，用於加密數據的密鑰，與用於
        解密數據的密鑰相同。
        另一種密鑰，是非對稱的，當你的服務器需要加密的東西，而客戶端還需要
        解密的東西。
          
      40.Creating a User DTO and returning the token
        好了，現在我們有了token邏輯，這樣我們就可以在用戶登入或注冊時，
        返回這個token。

        在token服務內部，我們有一個配方entry(入口)，需要去配置
        在setting.Development.json
        加上"TokenKey":"Super secret unguessable keyx3", // (at least 64 characters)

        回到AccountController.cs
        我們還需要新增一個DTO
        DTOs/UserDto.cs
        //------------------
        public class UserDto
        {
          public required string UserName { get; set; }
          public required string Token { get; set; }
        }


        回到AccountController.cs
        public class AccountController(DataContext context, ITokenService tokenService) : BaseApiController
        {
          ...
          //return user;
          return new UserDto
          {
            Username = user.UserName,
            Token = tokenService.CreateToken(user) // 上面的回傳要改成UserDto
          }
        }


        // 相同的，在Login那段，也要改成回傳return UserDto


      41.Adding the authentication middleware
        
      42.Adding extension methods
      43.Secton 4 Summary

      第5節：Client login and register       
      44.Introduction
      45.Create a nav bar
      46.Introduction to Angular template forms
      47.Introduction to Angular services
      48.Injecting sercies into components
      49.Using conditionals to show and remove content
      40.

      第6節：Routing in Angular
      第7節：Error handling
      第8節：Extending the API
      第9節：Building the user interface
      第10節：Updating resources
      第11節：Adding photo upload functionality
      第12節：Reactive forms
      第13節：Paging, sorting and filtering
      第14節：Adding the likes feature
      第15節：Adding the Messaging feature
      第16節：Identity and role management
      第17節：SignalR
      第18節：Unit of work and finishing touches
      第19節：Publising
    </pre>
  </div>
  `,Cf={__name:"index",setup(e){return Z.scrollToTop=!0,(t,o)=>($(),Q(q,null,[Af,b("div",null,[b("div",{innerHTML:If})]),P(Z)],64))}},Tf=Ie(Cf,[["__scopeId","data-v-578d3ec3"]]),Sf=su({history:Nc("/vue-my-note/"),routes:[{path:"/",component:hu,children:[{path:"",component:Tu},{path:"/kaiWebapi2",component:Vu},{path:"/vue3",component:ju},{path:"/download",component:zu},{path:"/others",component:_d,children:[{path:"/_4_deployVite",component:Si}]},{path:"/dotnet7_vue3",component:Sd,children:[{path:"",component:Ys},{path:"/_beach_info",component:Ys},{path:"/addbeach",component:Wd},{path:"/beachList",component:Fd},{path:"/editbeach",component:$d},{path:"/routerbeach",component:Qd},{path:"/confirmDeletePopup",component:tf}]},{path:"/vscode_function",component:df},{path:"/Naive_ui",component:hf},{path:"/video",component:bf},{path:"/es6",component:_f},{path:"/dotnetapi_angular",component:Tf}]}]}),qn=Zl(au);qn.use(oc());qn.use(Sf);qn.mount("#app");
