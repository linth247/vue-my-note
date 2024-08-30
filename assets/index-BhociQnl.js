(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();/**
* @vue/shared v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Bn(e,t){const n=new Set(e.split(","));return s=>n.has(s)}const Y={},mt=[],ve=()=>{},Nr=()=>!1,un=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Zn=e=>e.startsWith("onUpdate:"),ce=Object.assign,Yn=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Or=Object.prototype.hasOwnProperty,K=(e,t)=>Or.call(e,t),M=Array.isArray,Lt=e=>fn(e)==="[object Map]",Hr=e=>fn(e)==="[object Set]",U=e=>typeof e=="function",re=e=>typeof e=="string",It=e=>typeof e=="symbol",ee=e=>e!==null&&typeof e=="object",go=e=>(ee(e)||U(e))&&U(e.then)&&U(e.catch),Mr=Object.prototype.toString,fn=e=>Mr.call(e),Ur=e=>fn(e).slice(8,-1),kr=e=>fn(e)==="[object Object]",Xn=e=>re(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Wt=Bn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),dn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Fr=/-(\w)/g,Se=dn(e=>e.replace(Fr,(t,n)=>n?n.toUpperCase():"")),Gr=/\B([A-Z])/g,at=dn(e=>e.replace(Gr,"-$1").toLowerCase()),pn=dn(e=>e.charAt(0).toUpperCase()+e.slice(1)),An=dn(e=>e?`on${pn(e)}`:""),Be=(e,t)=>!Object.is(e,t),Tn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},bo=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},Kr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ws;const yo=()=>ws||(ws=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function es(e){if(M(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],o=re(s)?zr(s):es(s);if(o)for(const r in o)t[r]=o[r]}return t}else if(re(e)||ee(e))return e}const jr=/;(?![^(]*\))/g,Vr=/:([^]+)/,qr=/\/\*[^]*?\*\//g;function zr(e){const t={};return e.replace(qr,"").split(jr).forEach(n=>{if(n){const s=n.split(Vr);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function ts(e){let t="";if(re(e))t=e;else if(M(e))for(let n=0;n<e.length;n++){const s=ts(e[n]);s&&(t+=s+" ")}else if(ee(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Qr="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jr=Bn(Qr);function _o(e){return!!e||e===""}/**
* @vue/reactivity v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ie;class vo{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ie,!t&&Ie&&(this.index=(Ie.scopes||(Ie.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ie;try{return Ie=this,t()}finally{Ie=n}}}on(){Ie=this}off(){Ie=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function $r(e){return new vo(e)}function Br(e,t=Ie){t&&t.active&&t.effects.push(e)}function Zr(){return Ie}let rt;class ns{constructor(t,n,s,o){this.fn=t,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Br(this,o)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Ze();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(Yr(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Ye()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=Je,n=rt;try{return Je=!0,rt=this,this._runnings++,Is(this),this.fn()}finally{Ps(this),this._runnings--,rt=n,Je=t}}stop(){this.active&&(Is(this),Ps(this),this.onStop&&this.onStop(),this.active=!1)}}function Yr(e){return e.value}function Is(e){e._trackId++,e._depsLength=0}function Ps(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)wo(e.deps[t],e);e.deps.length=e._depsLength}}function wo(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let Je=!0,On=0;const Io=[];function Ze(){Io.push(Je),Je=!1}function Ye(){const e=Io.pop();Je=e===void 0?!0:e}function ss(){On++}function os(){for(On--;!On&&Hn.length;)Hn.shift()()}function Po(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const s=e.deps[e._depsLength];s!==t?(s&&wo(s,e),e.deps[e._depsLength++]=t):e._depsLength++}}const Hn=[];function Ao(e,t,n){ss();for(const s of e.keys()){let o;s._dirtyLevel<t&&(o??(o=e.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=t),s._shouldSchedule&&(o??(o=e.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&Hn.push(s.scheduler)))}os()}const To=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},Mn=new WeakMap,it=Symbol(""),Un=Symbol("");function pe(e,t,n){if(Je&&rt){let s=Mn.get(e);s||Mn.set(e,s=new Map);let o=s.get(n);o||s.set(n,o=To(()=>s.delete(n))),Po(rt,o)}}function Ue(e,t,n,s,o,r){const i=Mn.get(e);if(!i)return;let a=[];if(t==="clear")a=[...i.values()];else if(n==="length"&&M(e)){const c=Number(s);i.forEach((f,d)=>{(d==="length"||!It(d)&&d>=c)&&a.push(f)})}else switch(n!==void 0&&a.push(i.get(n)),t){case"add":M(e)?Xn(n)&&a.push(i.get("length")):(a.push(i.get(it)),Lt(e)&&a.push(i.get(Un)));break;case"delete":M(e)||(a.push(i.get(it)),Lt(e)&&a.push(i.get(Un)));break;case"set":Lt(e)&&a.push(i.get(it));break}ss();for(const c of a)c&&Ao(c,4);os()}const Xr=Bn("__proto__,__v_isRef,__isVue"),So=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(It)),As=ei();function ei(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=z(this);for(let r=0,i=this.length;r<i;r++)pe(s,"get",r+"");const o=s[t](...n);return o===-1||o===!1?s[t](...n.map(z)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ze(),ss();const s=z(this)[t].apply(this,n);return os(),Ye(),s}}),e}function ti(e){It(e)||(e=String(e));const t=z(this);return pe(t,"has",e),t.hasOwnProperty(e)}class Eo{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){const o=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(o?r?hi:Lo:r?Do:xo).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const i=M(t);if(!o){if(i&&K(As,n))return Reflect.get(As,n,s);if(n==="hasOwnProperty")return ti}const a=Reflect.get(t,n,s);return(It(n)?So.has(n):Xr(n))||(o||pe(t,"get",n),r)?a:he(a)?i&&Xn(n)?a:a.value:ee(a)?o?Ro(a):mn(a):a}}class Co extends Eo{constructor(t=!1){super(!1,t)}set(t,n,s,o){let r=t[n];if(!this._isShallow){const c=ct(r);if(!yt(s)&&!ct(s)&&(r=z(r),s=z(s)),!M(t)&&he(r)&&!he(s))return c?!1:(r.value=s,!0)}const i=M(t)&&Xn(n)?Number(n)<t.length:K(t,n),a=Reflect.set(t,n,s,o);return t===z(o)&&(i?Be(s,r)&&Ue(t,"set",n,s):Ue(t,"add",n,s)),a}deleteProperty(t,n){const s=K(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&s&&Ue(t,"delete",n,void 0),o}has(t,n){const s=Reflect.has(t,n);return(!It(n)||!So.has(n))&&pe(t,"has",n),s}ownKeys(t){return pe(t,"iterate",M(t)?"length":it),Reflect.ownKeys(t)}}class ni extends Eo{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const si=new Co,oi=new ni,ri=new Co(!0);const rs=e=>e,hn=e=>Reflect.getPrototypeOf(e);function Jt(e,t,n=!1,s=!1){e=e.__v_raw;const o=z(e),r=z(t);n||(Be(t,r)&&pe(o,"get",t),pe(o,"get",r));const{has:i}=hn(o),a=s?rs:n?cs:Ut;if(i.call(o,t))return a(e.get(t));if(i.call(o,r))return a(e.get(r));e!==o&&e.get(t)}function $t(e,t=!1){const n=this.__v_raw,s=z(n),o=z(e);return t||(Be(e,o)&&pe(s,"has",e),pe(s,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function Bt(e,t=!1){return e=e.__v_raw,!t&&pe(z(e),"iterate",it),Reflect.get(e,"size",e)}function Ts(e,t=!1){!t&&!yt(e)&&!ct(e)&&(e=z(e));const n=z(this);return hn(n).has.call(n,e)||(n.add(e),Ue(n,"add",e,e)),this}function Ss(e,t,n=!1){!n&&!yt(t)&&!ct(t)&&(t=z(t));const s=z(this),{has:o,get:r}=hn(s);let i=o.call(s,e);i||(e=z(e),i=o.call(s,e));const a=r.call(s,e);return s.set(e,t),i?Be(t,a)&&Ue(s,"set",e,t):Ue(s,"add",e,t),this}function Es(e){const t=z(this),{has:n,get:s}=hn(t);let o=n.call(t,e);o||(e=z(e),o=n.call(t,e)),s&&s.call(t,e);const r=t.delete(e);return o&&Ue(t,"delete",e,void 0),r}function Cs(){const e=z(this),t=e.size!==0,n=e.clear();return t&&Ue(e,"clear",void 0,void 0),n}function Zt(e,t){return function(s,o){const r=this,i=r.__v_raw,a=z(i),c=t?rs:e?cs:Ut;return!e&&pe(a,"iterate",it),i.forEach((f,d)=>s.call(o,c(f),c(d),r))}}function Yt(e,t,n){return function(...s){const o=this.__v_raw,r=z(o),i=Lt(r),a=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,f=o[e](...s),d=n?rs:t?cs:Ut;return!t&&pe(r,"iterate",c?Un:it),{next(){const{value:p,done:m}=f.next();return m?{value:p,done:m}:{value:a?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function je(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function ii(){const e={get(r){return Jt(this,r)},get size(){return Bt(this)},has:$t,add:Ts,set:Ss,delete:Es,clear:Cs,forEach:Zt(!1,!1)},t={get(r){return Jt(this,r,!1,!0)},get size(){return Bt(this)},has:$t,add(r){return Ts.call(this,r,!0)},set(r,i){return Ss.call(this,r,i,!0)},delete:Es,clear:Cs,forEach:Zt(!1,!0)},n={get(r){return Jt(this,r,!0)},get size(){return Bt(this,!0)},has(r){return $t.call(this,r,!0)},add:je("add"),set:je("set"),delete:je("delete"),clear:je("clear"),forEach:Zt(!0,!1)},s={get(r){return Jt(this,r,!0,!0)},get size(){return Bt(this,!0)},has(r){return $t.call(this,r,!0)},add:je("add"),set:je("set"),delete:je("delete"),clear:je("clear"),forEach:Zt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=Yt(r,!1,!1),n[r]=Yt(r,!0,!1),t[r]=Yt(r,!1,!0),s[r]=Yt(r,!0,!0)}),[e,n,t,s]}const[li,ci,ai,ui]=ii();function is(e,t){const n=t?e?ui:ai:e?ci:li;return(s,o,r)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?s:Reflect.get(K(n,o)&&o in s?n:s,o,r)}const fi={get:is(!1,!1)},di={get:is(!1,!0)},pi={get:is(!0,!1)};const xo=new WeakMap,Do=new WeakMap,Lo=new WeakMap,hi=new WeakMap;function mi(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gi(e){return e.__v_skip||!Object.isExtensible(e)?0:mi(Ur(e))}function mn(e){return ct(e)?e:ls(e,!1,si,fi,xo)}function Wo(e){return ls(e,!1,ri,di,Do)}function Ro(e){return ls(e,!0,oi,pi,Lo)}function ls(e,t,n,s,o){if(!ee(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=o.get(e);if(r)return r;const i=gi(e);if(i===0)return e;const a=new Proxy(e,i===2?s:n);return o.set(e,a),a}function Rt(e){return ct(e)?Rt(e.__v_raw):!!(e&&e.__v_isReactive)}function ct(e){return!!(e&&e.__v_isReadonly)}function yt(e){return!!(e&&e.__v_isShallow)}function No(e){return e?!!e.__v_raw:!1}function z(e){const t=e&&e.__v_raw;return t?z(t):e}function Oo(e){return Object.isExtensible(e)&&bo(e,"__v_skip",!0),e}const Ut=e=>ee(e)?mn(e):e,cs=e=>ee(e)?Ro(e):e;class Ho{constructor(t,n,s,o){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ns(()=>t(this._value),()=>en(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=s}get value(){const t=z(this);return(!t._cacheable||t.effect.dirty)&&Be(t._value,t._value=t.effect.run())&&en(t,4),Mo(t),t.effect._dirtyLevel>=2&&en(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function bi(e,t,n=!1){let s,o;const r=U(e);return r?(s=e,o=ve):(s=e.get,o=e.set),new Ho(s,o,r||!o,n)}function Mo(e){var t;Je&&rt&&(e=z(e),Po(rt,(t=e.dep)!=null?t:e.dep=To(()=>e.dep=void 0,e instanceof Ho?e:void 0)))}function en(e,t=4,n,s){e=z(e);const o=e.dep;o&&Ao(o,t)}function he(e){return!!(e&&e.__v_isRef===!0)}function Uo(e){return ko(e,!1)}function yi(e){return ko(e,!0)}function ko(e,t){return he(e)?e:new _i(e,t)}class _i{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:z(t),this._value=n?t:Ut(t)}get value(){return Mo(this),this._value}set value(t){const n=this.__v_isShallow||yt(t)||ct(t);t=n?t:z(t),Be(t,this._rawValue)&&(this._rawValue,this._rawValue=t,this._value=n?t:Ut(t),en(this,4))}}function lt(e){return he(e)?e.value:e}const vi={get:(e,t,n)=>lt(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const o=e[t];return he(o)&&!he(n)?(o.value=n,!0):Reflect.set(e,t,n,s)}};function Fo(e){return Rt(e)?e:new Proxy(e,vi)}/**
* @vue/runtime-core v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function $e(e,t,n,s){try{return s?e(...s):e()}catch(o){gn(o,t,n)}}function Te(e,t,n,s){if(U(e)){const o=$e(e,t,n,s);return o&&go(o)&&o.catch(r=>{gn(r,t,n)}),o}if(M(e)){const o=[];for(let r=0;r<e.length;r++)o.push(Te(e[r],t,n,s));return o}}function gn(e,t,n,s=!0){const o=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const f=r.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](e,i,a)===!1)return}r=r.parent}const c=t.appContext.config.errorHandler;if(c){Ze(),$e(c,null,10,[e,i,a]),Ye();return}}wi(e,n,o,s)}function wi(e,t,n,s=!0){console.error(e)}let kt=!1,kn=!1;const ie=[];let Ne=0;const gt=[];let qe=null,st=0;const Go=Promise.resolve();let as=null;function Ko(e){const t=as||Go;return e?t.then(this?e.bind(this):e):t}function Ii(e){let t=Ne+1,n=ie.length;for(;t<n;){const s=t+n>>>1,o=ie[s],r=Ft(o);r<e||r===e&&o.pre?t=s+1:n=s}return t}function us(e){(!ie.length||!ie.includes(e,kt&&e.allowRecurse?Ne+1:Ne))&&(e.id==null?ie.push(e):ie.splice(Ii(e.id),0,e),jo())}function jo(){!kt&&!kn&&(kn=!0,as=Go.then(qo))}function Pi(e){const t=ie.indexOf(e);t>Ne&&ie.splice(t,1)}function Ai(e){M(e)?gt.push(...e):(!qe||!qe.includes(e,e.allowRecurse?st+1:st))&&gt.push(e),jo()}function xs(e,t,n=kt?Ne+1:0){for(;n<ie.length;n++){const s=ie[n];if(s&&s.pre){if(e&&s.id!==e.uid)continue;ie.splice(n,1),n--,s()}}}function Vo(e){if(gt.length){const t=[...new Set(gt)].sort((n,s)=>Ft(n)-Ft(s));if(gt.length=0,qe){qe.push(...t);return}for(qe=t,st=0;st<qe.length;st++){const n=qe[st];n.active!==!1&&n()}qe=null,st=0}}const Ft=e=>e.id==null?1/0:e.id,Ti=(e,t)=>{const n=Ft(e)-Ft(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function qo(e){kn=!1,kt=!0,ie.sort(Ti);try{for(Ne=0;Ne<ie.length;Ne++){const t=ie[Ne];t&&t.active!==!1&&$e(t,t.i,t.i?15:14)}}finally{Ne=0,ie.length=0,Vo(),kt=!1,as=null,(ie.length||gt.length)&&qo()}}let Ae=null,bn=null;function ln(e){const t=Ae;return Ae=e,bn=e&&e.type.__scopeId||null,t}function zo(e){bn=e}function Qo(){bn=null}function Ct(e,t=Ae,n){if(!t||e._n)return e;const s=(...o)=>{s._d&&Us(-1);const r=ln(t);let i;try{i=e(...o)}finally{ln(r),s._d&&Us(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function tt(e,t,n,s){const o=e.dirs,r=t&&t.dirs;for(let i=0;i<o.length;i++){const a=o[i];r&&(a.oldValue=r[i].value);let c=a.dir[s];c&&(Ze(),Te(c,n,8,[e.el,a,e,t]),Ye())}}function Jo(e,t){e.shapeFlag&6&&e.component?Jo(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function $o(e,t){return U(e)?ce({name:e.name},t,{setup:e}):e}const tn=e=>!!e.type.__asyncLoader,Bo=e=>e.type.__isKeepAlive;function Si(e,t){Zo(e,"a",t)}function Ei(e,t){Zo(e,"da",t)}function Zo(e,t,n=le){const s=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(yn(t,s,n),n){let o=n.parent;for(;o&&o.parent;)Bo(o.parent.vnode)&&Ci(s,t,n,o),o=o.parent}}function Ci(e,t,n,s){const o=yn(t,e,s,!0);Yo(()=>{Yn(s[t],o)},n)}function yn(e,t,n=le,s=!1){if(n){const o=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...i)=>{Ze();const a=zt(n),c=Te(t,n,e,i);return a(),Ye(),c});return s?o.unshift(r):o.push(r),r}}const Fe=e=>(t,n=le)=>{(!wn||e==="sp")&&yn(e,(...s)=>t(...s),n)},xi=Fe("bm"),Di=Fe("m"),Li=Fe("bu"),Wi=Fe("u"),Ri=Fe("bum"),Yo=Fe("um"),Ni=Fe("sp"),Oi=Fe("rtg"),Hi=Fe("rtc");function Mi(e,t=le){yn("ec",e,t)}const Ui="components";function Xo(e,t){return Fi(Ui,e,!0,t)||e}const ki=Symbol.for("v-ndc");function Fi(e,t,n=!0,s=!1){const o=Ae||le;if(o){const r=o.type;{const a=Dl(r,!1);if(a&&(a===t||a===Se(t)||a===pn(Se(t))))return r}const i=Ds(o[e]||r[e],t)||Ds(o.appContext[e],t);return!i&&s?r:i}}function Ds(e,t){return e&&(e[t]||e[Se(t)]||e[pn(Se(t))])}const Fn=e=>e?yr(e)?hs(e):Fn(e.parent):null,Nt=ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Fn(e.parent),$root:e=>Fn(e.root),$emit:e=>e.emit,$options:e=>fs(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,us(e.update)}),$nextTick:e=>e.n||(e.n=Ko.bind(e.proxy)),$watch:e=>al.bind(e)}),Sn=(e,t)=>e!==Y&&!e.__isScriptSetup&&K(e,t),Gi={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:o,props:r,accessCache:i,type:a,appContext:c}=e;let f;if(t[0]!=="$"){const g=i[t];if(g!==void 0)switch(g){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return r[t]}else{if(Sn(s,t))return i[t]=1,s[t];if(o!==Y&&K(o,t))return i[t]=2,o[t];if((f=e.propsOptions[0])&&K(f,t))return i[t]=3,r[t];if(n!==Y&&K(n,t))return i[t]=4,n[t];Gn&&(i[t]=0)}}const d=Nt[t];let p,m;if(d)return t==="$attrs"&&pe(e.attrs,"get",""),d(e);if((p=a.__cssModules)&&(p=p[t]))return p;if(n!==Y&&K(n,t))return i[t]=4,n[t];if(m=c.config.globalProperties,K(m,t))return m[t]},set({_:e},t,n){const{data:s,setupState:o,ctx:r}=e;return Sn(o,t)?(o[t]=n,!0):s!==Y&&K(s,t)?(s[t]=n,!0):K(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:o,propsOptions:r}},i){let a;return!!n[i]||e!==Y&&K(e,i)||Sn(t,i)||(a=r[0])&&K(a,i)||K(s,i)||K(Nt,i)||K(o.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:K(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ls(e){return M(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Gn=!0;function Ki(e){const t=fs(e),n=e.proxy,s=e.ctx;Gn=!1,t.beforeCreate&&Ws(t.beforeCreate,e,"bc");const{data:o,computed:r,methods:i,watch:a,provide:c,inject:f,created:d,beforeMount:p,mounted:m,beforeUpdate:g,updated:W,activated:C,deactivated:k,beforeDestroy:O,beforeUnmount:N,destroyed:x,unmounted:j,render:te,renderTracked:F,renderTriggered:X,errorCaptured:ye,serverPrefetch:Xe,expose:Ce,inheritAttrs:Ge,components:et,directives:xe,filters:At}=t;if(f&&ji(f,s,null),i)for(const $ in i){const V=i[$];U(V)&&(s[$]=V.bind(n))}if(o){const $=o.call(n,n);ee($)&&(e.data=mn($))}if(Gn=!0,r)for(const $ in r){const V=r[$],Oe=U(V)?V.bind(n,n):U(V.get)?V.get.bind(n,n):ve,Ke=!U(V)&&U(V.set)?V.set.bind(n):ve,De=Pe({get:Oe,set:Ke});Object.defineProperty(s,$,{enumerable:!0,configurable:!0,get:()=>De.value,set:fe=>De.value=fe})}if(a)for(const $ in a)er(a[$],s,n,$);if(c){const $=U(c)?c.call(n):c;Reflect.ownKeys($).forEach(V=>{nn(V,$[V])})}d&&Ws(d,e,"c");function ne($,V){M(V)?V.forEach(Oe=>$(Oe.bind(n))):V&&$(V.bind(n))}if(ne(xi,p),ne(Di,m),ne(Li,g),ne(Wi,W),ne(Si,C),ne(Ei,k),ne(Mi,ye),ne(Hi,F),ne(Oi,X),ne(Ri,N),ne(Yo,j),ne(Ni,Xe),M(Ce))if(Ce.length){const $=e.exposed||(e.exposed={});Ce.forEach(V=>{Object.defineProperty($,V,{get:()=>n[V],set:Oe=>n[V]=Oe})})}else e.exposed||(e.exposed={});te&&e.render===ve&&(e.render=te),Ge!=null&&(e.inheritAttrs=Ge),et&&(e.components=et),xe&&(e.directives=xe)}function ji(e,t,n=ve){M(e)&&(e=Kn(e));for(const s in e){const o=e[s];let r;ee(o)?"default"in o?r=ke(o.from||s,o.default,!0):r=ke(o.from||s):r=ke(o),he(r)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:i=>r.value=i}):t[s]=r}}function Ws(e,t,n){Te(M(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function er(e,t,n,s){const o=s.includes(".")?hr(n,s):()=>n[s];if(re(e)){const r=t[e];U(r)&&sn(o,r)}else if(U(e))sn(o,e.bind(n));else if(ee(e))if(M(e))e.forEach(r=>er(r,t,n,s));else{const r=U(e.handler)?e.handler.bind(n):t[e.handler];U(r)&&sn(o,r,e)}}function fs(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:o,optionsCache:r,config:{optionMergeStrategies:i}}=e.appContext,a=r.get(t);let c;return a?c=a:!o.length&&!n&&!s?c=t:(c={},o.length&&o.forEach(f=>cn(c,f,i,!0)),cn(c,t,i)),ee(t)&&r.set(t,c),c}function cn(e,t,n,s=!1){const{mixins:o,extends:r}=t;r&&cn(e,r,n,!0),o&&o.forEach(i=>cn(e,i,n,!0));for(const i in t)if(!(s&&i==="expose")){const a=Vi[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const Vi={data:Rs,props:Ns,emits:Ns,methods:xt,computed:xt,beforeCreate:ae,created:ae,beforeMount:ae,mounted:ae,beforeUpdate:ae,updated:ae,beforeDestroy:ae,beforeUnmount:ae,destroyed:ae,unmounted:ae,activated:ae,deactivated:ae,errorCaptured:ae,serverPrefetch:ae,components:xt,directives:xt,watch:zi,provide:Rs,inject:qi};function Rs(e,t){return t?e?function(){return ce(U(e)?e.call(this,this):e,U(t)?t.call(this,this):t)}:t:e}function qi(e,t){return xt(Kn(e),Kn(t))}function Kn(e){if(M(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ae(e,t){return e?[...new Set([].concat(e,t))]:t}function xt(e,t){return e?ce(Object.create(null),e,t):t}function Ns(e,t){return e?M(e)&&M(t)?[...new Set([...e,...t])]:ce(Object.create(null),Ls(e),Ls(t??{})):t}function zi(e,t){if(!e)return t;if(!t)return e;const n=ce(Object.create(null),e);for(const s in t)n[s]=ae(e[s],t[s]);return n}function tr(){return{app:null,config:{isNativeTag:Nr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qi=0;function Ji(e,t){return function(s,o=null){U(s)||(s=ce({},s)),o!=null&&!ee(o)&&(o=null);const r=tr(),i=new WeakSet;let a=!1;const c=r.app={_uid:Qi++,_component:s,_props:o,_container:null,_context:r,_instance:null,version:Wl,get config(){return r.config},set config(f){},use(f,...d){return i.has(f)||(f&&U(f.install)?(i.add(f),f.install(c,...d)):U(f)&&(i.add(f),f(c,...d))),c},mixin(f){return r.mixins.includes(f)||r.mixins.push(f),c},component(f,d){return d?(r.components[f]=d,c):r.components[f]},directive(f,d){return d?(r.directives[f]=d,c):r.directives[f]},mount(f,d,p){if(!a){const m=oe(s,o);return m.appContext=r,p===!0?p="svg":p===!1&&(p=void 0),d&&t?t(m,f):e(m,f,p),a=!0,c._container=f,f.__vue_app__=c,hs(m.component)}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(f,d){return r.provides[f]=d,c},runWithContext(f){const d=bt;bt=c;try{return f()}finally{bt=d}}};return c}}let bt=null;function nn(e,t){if(le){let n=le.provides;const s=le.parent&&le.parent.provides;s===n&&(n=le.provides=Object.create(s)),n[e]=t}}function ke(e,t,n=!1){const s=le||Ae;if(s||bt){const o=bt?bt._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&U(t)?t.call(s&&s.proxy):t}}const nr={},sr=()=>Object.create(nr),or=e=>Object.getPrototypeOf(e)===nr;function $i(e,t,n,s=!1){const o={},r=sr();e.propsDefaults=Object.create(null),rr(e,t,o,r);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=s?o:Wo(o):e.type.props?e.props=o:e.props=r,e.attrs=r}function Bi(e,t,n,s){const{props:o,attrs:r,vnode:{patchFlag:i}}=e,a=z(o),[c]=e.propsOptions;let f=!1;if((s||i>0)&&!(i&16)){if(i&8){const d=e.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(_n(e.emitsOptions,m))continue;const g=t[m];if(c)if(K(r,m))g!==r[m]&&(r[m]=g,f=!0);else{const W=Se(m);o[W]=jn(c,a,W,g,e,!1)}else g!==r[m]&&(r[m]=g,f=!0)}}}else{rr(e,t,o,r)&&(f=!0);let d;for(const p in a)(!t||!K(t,p)&&((d=at(p))===p||!K(t,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(o[p]=jn(c,a,p,void 0,e,!0)):delete o[p]);if(r!==a)for(const p in r)(!t||!K(t,p))&&(delete r[p],f=!0)}f&&Ue(e.attrs,"set","")}function rr(e,t,n,s){const[o,r]=e.propsOptions;let i=!1,a;if(t)for(let c in t){if(Wt(c))continue;const f=t[c];let d;o&&K(o,d=Se(c))?!r||!r.includes(d)?n[d]=f:(a||(a={}))[d]=f:_n(e.emitsOptions,c)||(!(c in s)||f!==s[c])&&(s[c]=f,i=!0)}if(r){const c=z(n),f=a||Y;for(let d=0;d<r.length;d++){const p=r[d];n[p]=jn(o,c,p,f[p],e,!K(f,p))}}return i}function jn(e,t,n,s,o,r){const i=e[n];if(i!=null){const a=K(i,"default");if(a&&s===void 0){const c=i.default;if(i.type!==Function&&!i.skipFactory&&U(c)){const{propsDefaults:f}=o;if(n in f)s=f[n];else{const d=zt(o);s=f[n]=c.call(null,t),d()}}else s=c}i[0]&&(r&&!a?s=!1:i[1]&&(s===""||s===at(n))&&(s=!0))}return s}const Zi=new WeakMap;function ir(e,t,n=!1){const s=n?Zi:t.propsCache,o=s.get(e);if(o)return o;const r=e.props,i={},a=[];let c=!1;if(!U(e)){const d=p=>{c=!0;const[m,g]=ir(p,t,!0);ce(i,m),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!r&&!c)return ee(e)&&s.set(e,mt),mt;if(M(r))for(let d=0;d<r.length;d++){const p=Se(r[d]);Os(p)&&(i[p]=Y)}else if(r)for(const d in r){const p=Se(d);if(Os(p)){const m=r[d],g=i[p]=M(m)||U(m)?{type:m}:ce({},m),W=g.type;let C=!1,k=!0;if(M(W))for(let O=0;O<W.length;++O){const N=W[O],x=U(N)&&N.name;if(x==="Boolean"){C=!0;break}else x==="String"&&(k=!1)}else C=U(W)&&W.name==="Boolean";g[0]=C,g[1]=k,(C||K(g,"default"))&&a.push(p)}}const f=[i,a];return ee(e)&&s.set(e,f),f}function Os(e){return e[0]!=="$"&&!Wt(e)}const lr=e=>e[0]==="_"||e==="$stable",ds=e=>M(e)?e.map(Re):[Re(e)],Yi=(e,t,n)=>{if(t._n)return t;const s=Ct((...o)=>ds(t(...o)),n);return s._c=!1,s},cr=(e,t,n)=>{const s=e._ctx;for(const o in e){if(lr(o))continue;const r=e[o];if(U(r))t[o]=Yi(o,r,s);else if(r!=null){const i=ds(r);t[o]=()=>i}}},ar=(e,t)=>{const n=ds(t);e.slots.default=()=>n},ur=(e,t,n)=>{for(const s in t)(n||s!=="_")&&(e[s]=t[s])},Xi=(e,t,n)=>{const s=e.slots=sr();if(e.vnode.shapeFlag&32){const o=t._;o?(ur(s,t,n),n&&bo(s,"_",o,!0)):cr(t,s)}else t&&ar(e,t)},el=(e,t,n)=>{const{vnode:s,slots:o}=e;let r=!0,i=Y;if(s.shapeFlag&32){const a=t._;a?n&&a===1?r=!1:ur(o,t,n):(r=!t.$stable,cr(t,o)),i=t}else t&&(ar(e,t),i={default:1});if(r)for(const a in o)!lr(a)&&i[a]==null&&delete o[a]};function Vn(e,t,n,s,o=!1){if(M(e)){e.forEach((m,g)=>Vn(m,t&&(M(t)?t[g]:t),n,s,o));return}if(tn(s)&&!o)return;const r=s.shapeFlag&4?hs(s.component):s.el,i=o?null:r,{i:a,r:c}=e,f=t&&t.r,d=a.refs===Y?a.refs={}:a.refs,p=a.setupState;if(f!=null&&f!==c&&(re(f)?(d[f]=null,K(p,f)&&(p[f]=null)):he(f)&&(f.value=null)),U(c))$e(c,a,12,[i,d]);else{const m=re(c),g=he(c);if(m||g){const W=()=>{if(e.f){const C=m?K(p,c)?p[c]:d[c]:c.value;o?M(C)&&Yn(C,r):M(C)?C.includes(r)||C.push(r):m?(d[c]=[r],K(p,c)&&(p[c]=d[c])):(c.value=[r],e.k&&(d[e.k]=c.value))}else m?(d[c]=i,K(p,c)&&(p[c]=i)):g&&(c.value=i,e.k&&(d[e.k]=i))};i?(W.id=-1,de(W,n)):W()}}}const tl=Symbol("_vte"),nl=e=>e.__isTeleport,de=bl;function sl(e){return ol(e)}function ol(e,t){const n=yo();n.__VUE__=!0;const{insert:s,remove:o,patchProp:r,createElement:i,createText:a,createComment:c,setText:f,setElementText:d,parentNode:p,nextSibling:m,setScopeId:g=ve,insertStaticContent:W}=e,C=(l,u,h,_=null,b=null,w=null,A=void 0,I=null,P=!!u.dynamicChildren)=>{if(l===u)return;l&&!St(l,u)&&(_=y(l),fe(l,b,w,!0),l=null),u.patchFlag===-2&&(P=!1,u.dynamicChildren=null);const{type:v,ref:E,shapeFlag:R}=u;switch(v){case vn:k(l,u,h,_);break;case Gt:O(l,u,h,_);break;case xn:l==null&&N(u,h,_,A);break;case ge:et(l,u,h,_,b,w,A,I,P);break;default:R&1?te(l,u,h,_,b,w,A,I,P):R&6?xe(l,u,h,_,b,w,A,I,P):(R&64||R&128)&&v.process(l,u,h,_,b,w,A,I,P,D)}E!=null&&b&&Vn(E,l&&l.ref,w,u||l,!u)},k=(l,u,h,_)=>{if(l==null)s(u.el=a(u.children),h,_);else{const b=u.el=l.el;u.children!==l.children&&f(b,u.children)}},O=(l,u,h,_)=>{l==null?s(u.el=c(u.children||""),h,_):u.el=l.el},N=(l,u,h,_)=>{[l.el,l.anchor]=W(l.children,u,h,_,l.el,l.anchor)},x=({el:l,anchor:u},h,_)=>{let b;for(;l&&l!==u;)b=m(l),s(l,h,_),l=b;s(u,h,_)},j=({el:l,anchor:u})=>{let h;for(;l&&l!==u;)h=m(l),o(l),l=h;o(u)},te=(l,u,h,_,b,w,A,I,P)=>{u.type==="svg"?A="svg":u.type==="math"&&(A="mathml"),l==null?F(u,h,_,b,w,A,I,P):Xe(l,u,b,w,A,I,P)},F=(l,u,h,_,b,w,A,I)=>{let P,v;const{props:E,shapeFlag:R,transition:L,dirs:H}=l;if(P=l.el=i(l.type,w,E&&E.is,E),R&8?d(P,l.children):R&16&&ye(l.children,P,null,_,b,En(l,w),A,I),H&&tt(l,null,_,"created"),X(P,l,l.scopeId,A,_),E){for(const B in E)B!=="value"&&!Wt(B)&&r(P,B,null,E[B],w,_);"value"in E&&r(P,"value",null,E.value,w),(v=E.onVnodeBeforeMount)&&We(v,_,l)}H&&tt(l,null,_,"beforeMount");const G=rl(b,L);G&&L.beforeEnter(P),s(P,u,h),((v=E&&E.onVnodeMounted)||G||H)&&de(()=>{v&&We(v,_,l),G&&L.enter(P),H&&tt(l,null,_,"mounted")},b)},X=(l,u,h,_,b)=>{if(h&&g(l,h),_)for(let w=0;w<_.length;w++)g(l,_[w]);if(b){let w=b.subTree;if(u===w){const A=b.vnode;X(l,A,A.scopeId,A.slotScopeIds,b.parent)}}},ye=(l,u,h,_,b,w,A,I,P=0)=>{for(let v=P;v<l.length;v++){const E=l[v]=I?ze(l[v]):Re(l[v]);C(null,E,u,h,_,b,w,A,I)}},Xe=(l,u,h,_,b,w,A)=>{const I=u.el=l.el;let{patchFlag:P,dynamicChildren:v,dirs:E}=u;P|=l.patchFlag&16;const R=l.props||Y,L=u.props||Y;let H;if(h&&nt(h,!1),(H=L.onVnodeBeforeUpdate)&&We(H,h,u,l),E&&tt(u,l,h,"beforeUpdate"),h&&nt(h,!0),(R.innerHTML&&L.innerHTML==null||R.textContent&&L.textContent==null)&&d(I,""),v?Ce(l.dynamicChildren,v,I,h,_,En(u,b),w):A||V(l,u,I,null,h,_,En(u,b),w,!1),P>0){if(P&16)Ge(I,R,L,h,b);else if(P&2&&R.class!==L.class&&r(I,"class",null,L.class,b),P&4&&r(I,"style",R.style,L.style,b),P&8){const G=u.dynamicProps;for(let B=0;B<G.length;B++){const q=G[B],se=R[q],we=L[q];(we!==se||q==="value")&&r(I,q,se,we,b,h)}}P&1&&l.children!==u.children&&d(I,u.children)}else!A&&v==null&&Ge(I,R,L,h,b);((H=L.onVnodeUpdated)||E)&&de(()=>{H&&We(H,h,u,l),E&&tt(u,l,h,"updated")},_)},Ce=(l,u,h,_,b,w,A)=>{for(let I=0;I<u.length;I++){const P=l[I],v=u[I],E=P.el&&(P.type===ge||!St(P,v)||P.shapeFlag&70)?p(P.el):h;C(P,v,E,null,_,b,w,A,!0)}},Ge=(l,u,h,_,b)=>{if(u!==h){if(u!==Y)for(const w in u)!Wt(w)&&!(w in h)&&r(l,w,u[w],null,b,_);for(const w in h){if(Wt(w))continue;const A=h[w],I=u[w];A!==I&&w!=="value"&&r(l,w,I,A,b,_)}"value"in h&&r(l,"value",u.value,h.value,b)}},et=(l,u,h,_,b,w,A,I,P)=>{const v=u.el=l?l.el:a(""),E=u.anchor=l?l.anchor:a("");let{patchFlag:R,dynamicChildren:L,slotScopeIds:H}=u;H&&(I=I?I.concat(H):H),l==null?(s(v,h,_),s(E,h,_),ye(u.children||[],h,E,b,w,A,I,P)):R>0&&R&64&&L&&l.dynamicChildren?(Ce(l.dynamicChildren,L,h,b,w,A,I),(u.key!=null||b&&u===b.subTree)&&fr(l,u,!0)):V(l,u,h,E,b,w,A,I,P)},xe=(l,u,h,_,b,w,A,I,P)=>{u.slotScopeIds=I,l==null?u.shapeFlag&512?b.ctx.activate(u,h,_,A,P):At(u,h,_,b,w,A,P):ut(l,u,P)},At=(l,u,h,_,b,w,A)=>{const I=l.component=Tl(l,_,b);if(Bo(l)&&(I.ctx.renderer=D),Sl(I,!1,A),I.asyncDep){if(b&&b.registerDep(I,ne,A),!l.el){const P=I.subTree=oe(Gt);O(null,P,u,h)}}else ne(I,l,u,h,b,w,A)},ut=(l,u,h)=>{const _=u.component=l.component;if(hl(l,u,h))if(_.asyncDep&&!_.asyncResolved){$(_,u,h);return}else _.next=u,Pi(_.update),_.effect.dirty=!0,_.update();else u.el=l.el,_.vnode=u},ne=(l,u,h,_,b,w,A)=>{const I=()=>{if(l.isMounted){let{next:E,bu:R,u:L,parent:H,vnode:G}=l;{const pt=dr(l);if(pt){E&&(E.el=G.el,$(l,E,A)),pt.asyncDep.then(()=>{l.isUnmounted||I()});return}}let B=E,q;nt(l,!1),E?(E.el=G.el,$(l,E,A)):E=G,R&&Tn(R),(q=E.props&&E.props.onVnodeBeforeUpdate)&&We(q,H,E,G),nt(l,!0);const se=Cn(l),we=l.subTree;l.subTree=se,C(we,se,p(we.el),y(we),l,b,w),E.el=se.el,B===null&&ml(l,se.el),L&&de(L,b),(q=E.props&&E.props.onVnodeUpdated)&&de(()=>We(q,H,E,G),b)}else{let E;const{el:R,props:L}=u,{bm:H,m:G,parent:B}=l,q=tn(u);if(nt(l,!1),H&&Tn(H),!q&&(E=L&&L.onVnodeBeforeMount)&&We(E,B,u),nt(l,!0),R&&Z){const se=()=>{l.subTree=Cn(l),Z(R,l.subTree,l,b,null)};q?u.type.__asyncLoader().then(()=>!l.isUnmounted&&se()):se()}else{const se=l.subTree=Cn(l);C(null,se,h,_,l,b,w),u.el=se.el}if(G&&de(G,b),!q&&(E=L&&L.onVnodeMounted)){const se=u;de(()=>We(E,B,se),b)}(u.shapeFlag&256||B&&tn(B.vnode)&&B.vnode.shapeFlag&256)&&l.a&&de(l.a,b),l.isMounted=!0,u=h=_=null}},P=l.effect=new ns(I,ve,()=>us(v),l.scope),v=l.update=()=>{P.dirty&&P.run()};v.i=l,v.id=l.uid,nt(l,!0),v()},$=(l,u,h)=>{u.component=l;const _=l.vnode.props;l.vnode=u,l.next=null,Bi(l,u.props,_,h),el(l,u.children,h),Ze(),xs(l),Ye()},V=(l,u,h,_,b,w,A,I,P=!1)=>{const v=l&&l.children,E=l?l.shapeFlag:0,R=u.children,{patchFlag:L,shapeFlag:H}=u;if(L>0){if(L&128){Ke(v,R,h,_,b,w,A,I,P);return}else if(L&256){Oe(v,R,h,_,b,w,A,I,P);return}}H&8?(E&16&&_e(v,b,w),R!==v&&d(h,R)):E&16?H&16?Ke(v,R,h,_,b,w,A,I,P):_e(v,b,w,!0):(E&8&&d(h,""),H&16&&ye(R,h,_,b,w,A,I,P))},Oe=(l,u,h,_,b,w,A,I,P)=>{l=l||mt,u=u||mt;const v=l.length,E=u.length,R=Math.min(v,E);let L;for(L=0;L<R;L++){const H=u[L]=P?ze(u[L]):Re(u[L]);C(l[L],H,h,null,b,w,A,I,P)}v>E?_e(l,b,w,!0,!1,R):ye(u,h,_,b,w,A,I,P,R)},Ke=(l,u,h,_,b,w,A,I,P)=>{let v=0;const E=u.length;let R=l.length-1,L=E-1;for(;v<=R&&v<=L;){const H=l[v],G=u[v]=P?ze(u[v]):Re(u[v]);if(St(H,G))C(H,G,h,null,b,w,A,I,P);else break;v++}for(;v<=R&&v<=L;){const H=l[R],G=u[L]=P?ze(u[L]):Re(u[L]);if(St(H,G))C(H,G,h,null,b,w,A,I,P);else break;R--,L--}if(v>R){if(v<=L){const H=L+1,G=H<E?u[H].el:_;for(;v<=L;)C(null,u[v]=P?ze(u[v]):Re(u[v]),h,G,b,w,A,I,P),v++}}else if(v>L)for(;v<=R;)fe(l[v],b,w,!0),v++;else{const H=v,G=v,B=new Map;for(v=G;v<=L;v++){const me=u[v]=P?ze(u[v]):Re(u[v]);me.key!=null&&B.set(me.key,v)}let q,se=0;const we=L-G+1;let pt=!1,ys=0;const Tt=new Array(we);for(v=0;v<we;v++)Tt[v]=0;for(v=H;v<=R;v++){const me=l[v];if(se>=we){fe(me,b,w,!0);continue}let Le;if(me.key!=null)Le=B.get(me.key);else for(q=G;q<=L;q++)if(Tt[q-G]===0&&St(me,u[q])){Le=q;break}Le===void 0?fe(me,b,w,!0):(Tt[Le-G]=v+1,Le>=ys?ys=Le:pt=!0,C(me,u[Le],h,null,b,w,A,I,P),se++)}const _s=pt?il(Tt):mt;for(q=_s.length-1,v=we-1;v>=0;v--){const me=G+v,Le=u[me],vs=me+1<E?u[me+1].el:_;Tt[v]===0?C(null,Le,h,vs,b,w,A,I,P):pt&&(q<0||v!==_s[q]?De(Le,h,vs,2):q--)}}},De=(l,u,h,_,b=null)=>{const{el:w,type:A,transition:I,children:P,shapeFlag:v}=l;if(v&6){De(l.component.subTree,u,h,_);return}if(v&128){l.suspense.move(u,h,_);return}if(v&64){A.move(l,u,h,D);return}if(A===ge){s(w,u,h);for(let R=0;R<P.length;R++)De(P[R],u,h,_);s(l.anchor,u,h);return}if(A===xn){x(l,u,h);return}if(_!==2&&v&1&&I)if(_===0)I.beforeEnter(w),s(w,u,h),de(()=>I.enter(w),b);else{const{leave:R,delayLeave:L,afterLeave:H}=I,G=()=>s(w,u,h),B=()=>{R(w,()=>{G(),H&&H()})};L?L(w,G,B):B()}else s(w,u,h)},fe=(l,u,h,_=!1,b=!1)=>{const{type:w,props:A,ref:I,children:P,dynamicChildren:v,shapeFlag:E,patchFlag:R,dirs:L,cacheIndex:H}=l;if(R===-2&&(b=!1),I!=null&&Vn(I,null,h,l,!0),H!=null&&(u.renderCache[H]=void 0),E&256){u.ctx.deactivate(l);return}const G=E&1&&L,B=!tn(l);let q;if(B&&(q=A&&A.onVnodeBeforeUnmount)&&We(q,u,l),E&6)Qt(l.component,h,_);else{if(E&128){l.suspense.unmount(h,_);return}G&&tt(l,null,u,"beforeUnmount"),E&64?l.type.remove(l,u,h,D,_):v&&!v.hasOnce&&(w!==ge||R>0&&R&64)?_e(v,u,h,!1,!0):(w===ge&&R&384||!b&&E&16)&&_e(P,u,h),_&&ft(l)}(B&&(q=A&&A.onVnodeUnmounted)||G)&&de(()=>{q&&We(q,u,l),G&&tt(l,null,u,"unmounted")},h)},ft=l=>{const{type:u,el:h,anchor:_,transition:b}=l;if(u===ge){dt(h,_);return}if(u===xn){j(l);return}const w=()=>{o(h),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(l.shapeFlag&1&&b&&!b.persisted){const{leave:A,delayLeave:I}=b,P=()=>A(h,w);I?I(l.el,w,P):P()}else w()},dt=(l,u)=>{let h;for(;l!==u;)h=m(l),o(l),l=h;o(u)},Qt=(l,u,h)=>{const{bum:_,scope:b,update:w,subTree:A,um:I,m:P,a:v}=l;Hs(P),Hs(v),_&&Tn(_),b.stop(),w&&(w.active=!1,fe(A,l,u,h)),I&&de(I,u),de(()=>{l.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},_e=(l,u,h,_=!1,b=!1,w=0)=>{for(let A=w;A<l.length;A++)fe(l[A],u,h,_,b)},y=l=>{if(l.shapeFlag&6)return y(l.component.subTree);if(l.shapeFlag&128)return l.suspense.next();const u=m(l.anchor||l.el),h=u&&u[tl];return h?m(h):u};let S=!1;const T=(l,u,h)=>{l==null?u._vnode&&fe(u._vnode,null,null,!0):C(u._vnode||null,l,u,null,null,null,h),u._vnode=l,S||(S=!0,xs(),Vo(),S=!1)},D={p:C,um:fe,m:De,r:ft,mt:At,mc:ye,pc:V,pbc:Ce,n:y,o:e};let Q,Z;return{render:T,hydrate:Q,createApp:Ji(T,Q)}}function En({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function nt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function rl(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function fr(e,t,n=!1){const s=e.children,o=t.children;if(M(s)&&M(o))for(let r=0;r<s.length;r++){const i=s[r];let a=o[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[r]=ze(o[r]),a.el=i.el),!n&&a.patchFlag!==-2&&fr(i,a)),a.type===vn&&(a.el=i.el)}}function il(e){const t=e.slice(),n=[0];let s,o,r,i,a;const c=e.length;for(s=0;s<c;s++){const f=e[s];if(f!==0){if(o=n[n.length-1],e[o]<f){t[s]=o,n.push(s);continue}for(r=0,i=n.length-1;r<i;)a=r+i>>1,e[n[a]]<f?r=a+1:i=a;f<e[n[r]]&&(r>0&&(t[s]=n[r-1]),n[r]=s)}}for(r=n.length,i=n[r-1];r-- >0;)n[r]=i,i=t[i];return n}function dr(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:dr(t)}function Hs(e){if(e)for(let t=0;t<e.length;t++)e[t].active=!1}const ll=Symbol.for("v-scx"),cl=()=>ke(ll),Xt={};function sn(e,t,n){return pr(e,t,n)}function pr(e,t,{immediate:n,deep:s,flush:o,once:r,onTrack:i,onTrigger:a}=Y){if(t&&r){const F=t;t=(...X)=>{F(...X),te()}}const c=le,f=F=>s===!0?F:ot(F,s===!1?1:void 0);let d,p=!1,m=!1;if(he(e)?(d=()=>e.value,p=yt(e)):Rt(e)?(d=()=>f(e),p=!0):M(e)?(m=!0,p=e.some(F=>Rt(F)||yt(F)),d=()=>e.map(F=>{if(he(F))return F.value;if(Rt(F))return f(F);if(U(F))return $e(F,c,2)})):U(e)?t?d=()=>$e(e,c,2):d=()=>(g&&g(),Te(e,c,3,[W])):d=ve,t&&s){const F=d;d=()=>ot(F())}let g,W=F=>{g=x.onStop=()=>{$e(F,c,4),g=x.onStop=void 0}},C;if(wn)if(W=ve,t?n&&Te(t,c,3,[d(),m?[]:void 0,W]):d(),o==="sync"){const F=cl();C=F.__watcherHandles||(F.__watcherHandles=[])}else return ve;let k=m?new Array(e.length).fill(Xt):Xt;const O=()=>{if(!(!x.active||!x.dirty))if(t){const F=x.run();(s||p||(m?F.some((X,ye)=>Be(X,k[ye])):Be(F,k)))&&(g&&g(),Te(t,c,3,[F,k===Xt?void 0:m&&k[0]===Xt?[]:k,W]),k=F)}else x.run()};O.allowRecurse=!!t;let N;o==="sync"?N=O:o==="post"?N=()=>de(O,c&&c.suspense):(O.pre=!0,c&&(O.id=c.uid),N=()=>us(O));const x=new ns(d,ve,N),j=Zr(),te=()=>{x.stop(),j&&Yn(j.effects,x)};return t?n?O():k=x.run():o==="post"?de(x.run.bind(x),c&&c.suspense):x.run(),C&&C.push(te),te}function al(e,t,n){const s=this.proxy,o=re(e)?e.includes(".")?hr(s,e):()=>s[e]:e.bind(s,s);let r;U(t)?r=t:(r=t.handler,n=t);const i=zt(this),a=pr(o,r.bind(s),n);return i(),a}function hr(e,t){const n=t.split(".");return()=>{let s=e;for(let o=0;o<n.length&&s;o++)s=s[n[o]];return s}}function ot(e,t=1/0,n){if(t<=0||!ee(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,he(e))ot(e.value,t,n);else if(M(e))for(let s=0;s<e.length;s++)ot(e[s],t,n);else if(Hr(e)||Lt(e))e.forEach(s=>{ot(s,t,n)});else if(kr(e)){for(const s in e)ot(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&ot(e[s],t,n)}return e}const ul=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Se(t)}Modifiers`]||e[`${at(t)}Modifiers`];function fl(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||Y;let o=n;const r=t.startsWith("update:"),i=r&&ul(s,t.slice(7));i&&(i.trim&&(o=n.map(d=>re(d)?d.trim():d)),i.number&&(o=n.map(Kr)));let a,c=s[a=An(t)]||s[a=An(Se(t))];!c&&r&&(c=s[a=An(at(t))]),c&&Te(c,e,6,o);const f=s[a+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Te(f,e,6,o)}}function mr(e,t,n=!1){const s=t.emitsCache,o=s.get(e);if(o!==void 0)return o;const r=e.emits;let i={},a=!1;if(!U(e)){const c=f=>{const d=mr(f,t,!0);d&&(a=!0,ce(i,d))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!a?(ee(e)&&s.set(e,null),null):(M(r)?r.forEach(c=>i[c]=null):ce(i,r),ee(e)&&s.set(e,i),i)}function _n(e,t){return!e||!un(t)?!1:(t=t.slice(2).replace(/Once$/,""),K(e,t[0].toLowerCase()+t.slice(1))||K(e,at(t))||K(e,t))}function Cn(e){const{type:t,vnode:n,proxy:s,withProxy:o,propsOptions:[r],slots:i,attrs:a,emit:c,render:f,renderCache:d,props:p,data:m,setupState:g,ctx:W,inheritAttrs:C}=e,k=ln(e);let O,N;try{if(n.shapeFlag&4){const j=o||s,te=j;O=Re(f.call(te,j,d,p,g,m,W)),N=a}else{const j=t;O=Re(j.length>1?j(p,{attrs:a,slots:i,emit:c}):j(p,null)),N=t.props?a:dl(a)}}catch(j){Ot.length=0,gn(j,e,1),O=oe(Gt)}let x=O;if(N&&C!==!1){const j=Object.keys(N),{shapeFlag:te}=x;j.length&&te&7&&(r&&j.some(Zn)&&(N=pl(N,r)),x=_t(x,N,!1,!0))}return n.dirs&&(x=_t(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&(x.transition=n.transition),O=x,ln(k),O}const dl=e=>{let t;for(const n in e)(n==="class"||n==="style"||un(n))&&((t||(t={}))[n]=e[n]);return t},pl=(e,t)=>{const n={};for(const s in e)(!Zn(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function hl(e,t,n){const{props:s,children:o,component:r}=e,{props:i,children:a,patchFlag:c}=t,f=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Ms(s,i,f):!!i;if(c&8){const d=t.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(i[m]!==s[m]&&!_n(f,m))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:s===i?!1:s?i?Ms(s,i,f):!0:!!i;return!1}function Ms(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let o=0;o<s.length;o++){const r=s[o];if(t[r]!==e[r]&&!_n(n,r))return!0}return!1}function ml({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const gl=e=>e.__isSuspense;function bl(e,t){t&&t.pendingBranch?M(e)?t.effects.push(...e):t.effects.push(e):Ai(e)}const ge=Symbol.for("v-fgt"),vn=Symbol.for("v-txt"),Gt=Symbol.for("v-cmt"),xn=Symbol.for("v-stc"),Ot=[];let be=null;function Pt(e=!1){Ot.push(be=e?null:[])}function yl(){Ot.pop(),be=Ot[Ot.length-1]||null}let Kt=1;function Us(e){Kt+=e,e<0&&be&&(be.hasOnce=!0)}function gr(e){return e.dynamicChildren=Kt>0?be||mt:null,yl(),Kt>0&&be&&be.push(e),e}function qt(e,t,n,s,o,r){return gr(ue(e,t,n,s,o,r,!0))}function _l(e,t,n,s,o){return gr(oe(e,t,n,s,o,!0))}function qn(e){return e?e.__v_isVNode===!0:!1}function St(e,t){return e.type===t.type&&e.key===t.key}const br=({key:e})=>e??null,on=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?re(e)||he(e)||U(e)?{i:Ae,r:e,k:t,f:!!n}:e:null);function ue(e,t=null,n=null,s=0,o=null,r=e===ge?0:1,i=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&br(t),ref:t&&on(t),scopeId:bn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Ae};return a?(ps(c,n),r&128&&e.normalize(c)):n&&(c.shapeFlag|=re(n)?8:16),Kt>0&&!i&&be&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&be.push(c),c}const oe=vl;function vl(e,t=null,n=null,s=0,o=null,r=!1){if((!e||e===ki)&&(e=Gt),qn(e)){const a=_t(e,t,!0);return n&&ps(a,n),Kt>0&&!r&&be&&(a.shapeFlag&6?be[be.indexOf(e)]=a:be.push(a)),a.patchFlag=-2,a}if(Ll(e)&&(e=e.__vccOpts),t){t=wl(t);let{class:a,style:c}=t;a&&!re(a)&&(t.class=ts(a)),ee(c)&&(No(c)&&!M(c)&&(c=ce({},c)),t.style=es(c))}const i=re(e)?1:gl(e)?128:nl(e)?64:ee(e)?4:U(e)?2:0;return ue(e,t,n,s,o,i,r,!0)}function wl(e){return e?No(e)||or(e)?ce({},e):e:null}function _t(e,t,n=!1,s=!1){const{props:o,ref:r,patchFlag:i,children:a,transition:c}=e,f=t?Il(o||{},t):o,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&br(f),ref:t&&t.ref?n&&r?M(r)?r.concat(on(t)):[r,on(t)]:on(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ge?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&_t(e.ssContent),ssFallback:e.ssFallback&&_t(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&s&&Jo(d,c.clone(d)),d}function Dt(e=" ",t=0){return oe(vn,null,e,t)}function Re(e){return e==null||typeof e=="boolean"?oe(Gt):M(e)?oe(ge,null,e.slice()):typeof e=="object"?ze(e):oe(vn,null,String(e))}function ze(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:_t(e)}function ps(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(M(t))n=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),ps(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!or(t)?t._ctx=Ae:o===3&&Ae&&(Ae.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else U(t)?(t={default:t,_ctx:Ae},n=32):(t=String(t),s&64?(n=16,t=[Dt(t)]):n=8);e.children=t,e.shapeFlag|=n}function Il(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=ts([t.class,s.class]));else if(o==="style")t.style=es([t.style,s.style]);else if(un(o)){const r=t[o],i=s[o];i&&r!==i&&!(M(r)&&r.includes(i))&&(t[o]=r?[].concat(r,i):i)}else o!==""&&(t[o]=s[o])}return t}function We(e,t,n,s=null){Te(e,t,7,[n,s])}const Pl=tr();let Al=0;function Tl(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||Pl,r={uid:Al++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new vo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ir(s,o),emitsOptions:mr(s,o),emit:null,emitted:null,propsDefaults:Y,inheritAttrs:s.inheritAttrs,ctx:Y,data:Y,props:Y,attrs:Y,slots:Y,refs:Y,setupState:Y,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=fl.bind(null,r),e.ce&&e.ce(r),r}let le=null,an,zn;{const e=yo(),t=(n,s)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(s),r=>{o.length>1?o.forEach(i=>i(r)):o[0](r)}};an=t("__VUE_INSTANCE_SETTERS__",n=>le=n),zn=t("__VUE_SSR_SETTERS__",n=>wn=n)}const zt=e=>{const t=le;return an(e),e.scope.on(),()=>{e.scope.off(),an(t)}},ks=()=>{le&&le.scope.off(),an(null)};function yr(e){return e.vnode.shapeFlag&4}let wn=!1;function Sl(e,t=!1,n=!1){t&&zn(t);const{props:s,children:o}=e.vnode,r=yr(e);$i(e,s,r,t),Xi(e,o,n);const i=r?El(e,t):void 0;return t&&zn(!1),i}function El(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Gi);const{setup:s}=n;if(s){const o=e.setupContext=s.length>1?xl(e):null,r=zt(e);Ze();const i=$e(s,e,0,[e.props,o]);if(Ye(),r(),go(i)){if(i.then(ks,ks),t)return i.then(a=>{Fs(e,a,t)}).catch(a=>{gn(a,e,0)});e.asyncDep=i}else Fs(e,i,t)}else _r(e,t)}function Fs(e,t,n){U(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ee(t)&&(e.setupState=Fo(t)),_r(e,n)}let Gs;function _r(e,t,n){const s=e.type;if(!e.render){if(!t&&Gs&&!s.render){const o=s.template||fs(e).template;if(o){const{isCustomElement:r,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:c}=s,f=ce(ce({isCustomElement:r,delimiters:a},i),c);s.render=Gs(o,f)}}e.render=s.render||ve}{const o=zt(e);Ze();try{Ki(e)}finally{Ye(),o()}}}const Cl={get(e,t){return pe(e,"get",""),e[t]}};function xl(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Cl),slots:e.slots,emit:e.emit,expose:t}}function hs(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Fo(Oo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Nt)return Nt[n](e)},has(t,n){return n in t||n in Nt}})):e.proxy}function Dl(e,t=!0){return U(e)?e.displayName||e.name:e.name||t&&e.__name}function Ll(e){return U(e)&&"__vccOpts"in e}const Pe=(e,t)=>bi(e,t,wn);function vr(e,t,n){const s=arguments.length;return s===2?ee(t)&&!M(t)?qn(t)?oe(e,null,[t]):oe(e,t):oe(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&qn(n)&&(n=[n]),oe(e,t,n))}const Wl="3.4.38";/**
* @vue/runtime-dom v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Rl="http://www.w3.org/2000/svg",Nl="http://www.w3.org/1998/Math/MathML",Me=typeof document<"u"?document:null,Ks=Me&&Me.createElement("template"),Ol={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t==="svg"?Me.createElementNS(Rl,e):t==="mathml"?Me.createElementNS(Nl,e):n?Me.createElement(e,{is:n}):Me.createElement(e);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>Me.createTextNode(e),createComment:e=>Me.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Me.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,o,r){const i=n?n.previousSibling:t.lastChild;if(o&&(o===r||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===r||!(o=o.nextSibling)););else{Ks.innerHTML=s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e;const a=Ks.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Hl=Symbol("_vtc");function Ml(e,t,n){const s=e[Hl];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const js=Symbol("_vod"),Ul=Symbol("_vsh"),kl=Symbol(""),Fl=/(^|;)\s*display\s*:/;function Gl(e,t,n){const s=e.style,o=re(n);let r=!1;if(n&&!o){if(t)if(re(t))for(const i of t.split(";")){const a=i.slice(0,i.indexOf(":")).trim();n[a]==null&&rn(s,a,"")}else for(const i in t)n[i]==null&&rn(s,i,"");for(const i in n)i==="display"&&(r=!0),rn(s,i,n[i])}else if(o){if(t!==n){const i=s[kl];i&&(n+=";"+i),s.cssText=n,r=Fl.test(n)}}else t&&e.removeAttribute("style");js in e&&(e[js]=r?s.display:"",e[Ul]&&(s.display="none"))}const Vs=/\s*!important$/;function rn(e,t,n){if(M(n))n.forEach(s=>rn(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Kl(e,t);Vs.test(n)?e.setProperty(at(s),n.replace(Vs,""),"important"):e[s]=n}}const qs=["Webkit","Moz","ms"],Dn={};function Kl(e,t){const n=Dn[t];if(n)return n;let s=Se(t);if(s!=="filter"&&s in e)return Dn[t]=s;s=pn(s);for(let o=0;o<qs.length;o++){const r=qs[o]+s;if(r in e)return Dn[t]=r}return t}const zs="http://www.w3.org/1999/xlink";function Qs(e,t,n,s,o,r=Jr(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(zs,t.slice(6,t.length)):e.setAttributeNS(zs,t,n):n==null||r&&!_o(n)?e.removeAttribute(t):e.setAttribute(t,r?"":It(n)?String(n):n)}function jl(e,t,n,s){if(t==="innerHTML"||t==="textContent"){if(n==null)return;e[t]=n;return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const i=o==="OPTION"?e.getAttribute("value")||"":e.value,a=n==null?"":String(n);(i!==a||!("_value"in e))&&(e.value=a),n==null&&e.removeAttribute(t),e._value=n;return}let r=!1;if(n===""||n==null){const i=typeof e[t];i==="boolean"?n=_o(n):n==null&&i==="string"?(n="",r=!0):i==="number"&&(n=0,r=!0)}try{e[t]=n}catch{}r&&e.removeAttribute(t)}function Vl(e,t,n,s){e.addEventListener(t,n,s)}function ql(e,t,n,s){e.removeEventListener(t,n,s)}const Js=Symbol("_vei");function zl(e,t,n,s,o=null){const r=e[Js]||(e[Js]={}),i=r[t];if(s&&i)i.value=s;else{const[a,c]=Ql(t);if(s){const f=r[t]=Bl(s,o);Vl(e,a,f,c)}else i&&(ql(e,a,i,c),r[t]=void 0)}}const $s=/(?:Once|Passive|Capture)$/;function Ql(e){let t;if($s.test(e)){t={};let s;for(;s=e.match($s);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):at(e.slice(2)),t]}let Ln=0;const Jl=Promise.resolve(),$l=()=>Ln||(Jl.then(()=>Ln=0),Ln=Date.now());function Bl(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Te(Zl(s,n.value),t,5,[s])};return n.value=e,n.attached=$l(),n}function Zl(e,t){if(M(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const Bs=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Yl=(e,t,n,s,o,r)=>{const i=o==="svg";t==="class"?Ml(e,s,i):t==="style"?Gl(e,n,s):un(t)?Zn(t)||zl(e,t,n,s,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Xl(e,t,s,i))?(jl(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Qs(e,t,s,i,r,t!=="value")):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Qs(e,t,s,i))};function Xl(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Bs(t)&&U(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return Bs(t)&&re(n)?!1:t in e}const ec=ce({patchProp:Yl},Ol);let Zs;function tc(){return Zs||(Zs=sl(ec))}const nc=(...e)=>{const t=tc().createApp(...e),{mount:n}=t;return t.mount=s=>{const o=oc(s);if(!o)return;const r=t._component;!U(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.innerHTML="";const i=n(o,!1,sc(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t};function sc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function oc(e){return re(e)?document.querySelector(e):e}var rc=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const ic=Symbol();var Ys;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Ys||(Ys={}));function lc(){const e=$r(!0),t=e.run(()=>Uo({}));let n=[],s=[];const o=Oo({install(r){o._a=r,r.provide(ic,o),r.config.globalProperties.$pinia=o,s.forEach(i=>n.push(i)),s=[]},use(r){return!this._a&&!rc?s.push(r):n.push(r),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return o}/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ht=typeof document<"u";function cc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const J=Object.assign;function Wn(e,t){const n={};for(const s in t){const o=t[s];n[s]=Ee(o)?o.map(e):e(o)}return n}const Ht=()=>{},Ee=Array.isArray,wr=/#/g,ac=/&/g,uc=/\//g,fc=/=/g,dc=/\?/g,Ir=/\+/g,pc=/%5B/g,hc=/%5D/g,Pr=/%5E/g,mc=/%60/g,Ar=/%7B/g,gc=/%7C/g,Tr=/%7D/g,bc=/%20/g;function ms(e){return encodeURI(""+e).replace(gc,"|").replace(pc,"[").replace(hc,"]")}function yc(e){return ms(e).replace(Ar,"{").replace(Tr,"}").replace(Pr,"^")}function Qn(e){return ms(e).replace(Ir,"%2B").replace(bc,"+").replace(wr,"%23").replace(ac,"%26").replace(mc,"`").replace(Ar,"{").replace(Tr,"}").replace(Pr,"^")}function _c(e){return Qn(e).replace(fc,"%3D")}function vc(e){return ms(e).replace(wr,"%23").replace(dc,"%3F")}function wc(e){return e==null?"":vc(e).replace(uc,"%2F")}function jt(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Ic=/\/$/,Pc=e=>e.replace(Ic,"");function Rn(e,t,n="/"){let s,o={},r="",i="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=t.slice(0,c),r=t.slice(c+1,a>-1?a:t.length),o=e(r)),a>-1&&(s=s||t.slice(0,a),i=t.slice(a,t.length)),s=Ec(s??t,n),{fullPath:s+(r&&"?")+r+i,path:s,query:o,hash:jt(i)}}function Ac(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Xs(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Tc(e,t,n){const s=t.matched.length-1,o=n.matched.length-1;return s>-1&&s===o&&vt(t.matched[s],n.matched[o])&&Sr(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function vt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Sr(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Sc(e[n],t[n]))return!1;return!0}function Sc(e,t){return Ee(e)?eo(e,t):Ee(t)?eo(t,e):e===t}function eo(e,t){return Ee(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function Ec(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),o=s[s.length-1];(o===".."||o===".")&&s.push("");let r=n.length-1,i,a;for(i=0;i<s.length;i++)if(a=s[i],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i).join("/")}const Ve={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Vt;(function(e){e.pop="pop",e.push="push"})(Vt||(Vt={}));var Mt;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Mt||(Mt={}));function Cc(e){if(!e)if(ht){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Pc(e)}const xc=/^[^#]+#/;function Dc(e,t){return e.replace(xc,"#")+t}function Lc(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const In=()=>({left:window.scrollX,top:window.scrollY});function Wc(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=Lc(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function to(e,t){return(history.state?history.state.position-t:-1)+e}const Jn=new Map;function Rc(e,t){Jn.set(e,t)}function Nc(e){const t=Jn.get(e);return Jn.delete(e),t}let Oc=()=>location.protocol+"//"+location.host;function Er(e,t){const{pathname:n,search:s,hash:o}=t,r=e.indexOf("#");if(r>-1){let a=o.includes(e.slice(r))?e.slice(r).length:1,c=o.slice(a);return c[0]!=="/"&&(c="/"+c),Xs(c,"")}return Xs(n,e)+s+o}function Hc(e,t,n,s){let o=[],r=[],i=null;const a=({state:m})=>{const g=Er(e,location),W=n.value,C=t.value;let k=0;if(m){if(n.value=g,t.value=m,i&&i===W){i=null;return}k=C?m.position-C.position:0}else s(g);o.forEach(O=>{O(n.value,W,{delta:k,type:Vt.pop,direction:k?k>0?Mt.forward:Mt.back:Mt.unknown})})};function c(){i=n.value}function f(m){o.push(m);const g=()=>{const W=o.indexOf(m);W>-1&&o.splice(W,1)};return r.push(g),g}function d(){const{history:m}=window;m.state&&m.replaceState(J({},m.state,{scroll:In()}),"")}function p(){for(const m of r)m();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:f,destroy:p}}function no(e,t,n,s=!1,o=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:o?In():null}}function Mc(e){const{history:t,location:n}=window,s={value:Er(e,n)},o={value:t.state};o.value||r(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(c,f,d){const p=e.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+c:Oc()+e+c;try{t[d?"replaceState":"pushState"](f,"",m),o.value=f}catch(g){console.error(g),n[d?"replace":"assign"](m)}}function i(c,f){const d=J({},t.state,no(o.value.back,c,o.value.forward,!0),f,{position:o.value.position});r(c,d,!0),s.value=c}function a(c,f){const d=J({},o.value,t.state,{forward:c,scroll:In()});r(d.current,d,!0);const p=J({},no(s.value,c,null),{position:d.position+1},f);r(c,p,!1),s.value=c}return{location:s,state:o,push:a,replace:i}}function Uc(e){e=Cc(e);const t=Mc(e),n=Hc(e,t.state,t.location,t.replace);function s(r,i=!0){i||n.pauseListeners(),history.go(r)}const o=J({location:"",base:e,go:s,createHref:Dc.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function kc(e){return typeof e=="string"||e&&typeof e=="object"}function Cr(e){return typeof e=="string"||typeof e=="symbol"}const xr=Symbol("");var so;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(so||(so={}));function wt(e,t){return J(new Error,{type:e,[xr]:!0},t)}function He(e,t){return e instanceof Error&&xr in e&&(t==null||!!(e.type&t))}const oo="[^/]+?",Fc={sensitive:!1,strict:!1,start:!0,end:!0},Gc=/[.+*?^${}()[\]/\\]/g;function Kc(e,t){const n=J({},Fc,t),s=[];let o=n.start?"^":"";const r=[];for(const f of e){const d=f.length?[]:[90];n.strict&&!f.length&&(o+="/");for(let p=0;p<f.length;p++){const m=f[p];let g=40+(n.sensitive?.25:0);if(m.type===0)p||(o+="/"),o+=m.value.replace(Gc,"\\$&"),g+=40;else if(m.type===1){const{value:W,repeatable:C,optional:k,regexp:O}=m;r.push({name:W,repeatable:C,optional:k});const N=O||oo;if(N!==oo){g+=10;try{new RegExp(`(${N})`)}catch(j){throw new Error(`Invalid custom RegExp for param "${W}" (${N}): `+j.message)}}let x=C?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;p||(x=k&&f.length<2?`(?:/${x})`:"/"+x),k&&(x+="?"),o+=x,g+=20,k&&(g+=-8),C&&(g+=-20),N===".*"&&(g+=-50)}d.push(g)}s.push(d)}if(n.strict&&n.end){const f=s.length-1;s[f][s[f].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const i=new RegExp(o,n.sensitive?"":"i");function a(f){const d=f.match(i),p={};if(!d)return null;for(let m=1;m<d.length;m++){const g=d[m]||"",W=r[m-1];p[W.name]=g&&W.repeatable?g.split("/"):g}return p}function c(f){let d="",p=!1;for(const m of e){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const g of m)if(g.type===0)d+=g.value;else if(g.type===1){const{value:W,repeatable:C,optional:k}=g,O=W in f?f[W]:"";if(Ee(O)&&!C)throw new Error(`Provided param "${W}" is an array but it is not repeatable (* or + modifiers)`);const N=Ee(O)?O.join("/"):O;if(!N)if(k)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${W}"`);d+=N}}return d||"/"}return{re:i,score:s,keys:r,parse:a,stringify:c}}function jc(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Dr(e,t){let n=0;const s=e.score,o=t.score;for(;n<s.length&&n<o.length;){const r=jc(s[n],o[n]);if(r)return r;n++}if(Math.abs(o.length-s.length)===1){if(ro(s))return 1;if(ro(o))return-1}return o.length-s.length}function ro(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Vc={type:0,value:""},qc=/[a-zA-Z0-9_]/;function zc(e){if(!e)return[[]];if(e==="/")return[[Vc]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${f}": ${g}`)}let n=0,s=n;const o=[];let r;function i(){r&&o.push(r),r=[]}let a=0,c,f="",d="";function p(){f&&(n===0?r.push({type:0,value:f}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:f,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),f="")}function m(){f+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(f&&p(),i()):c===":"?(p(),n=1):m();break;case 4:m(),n=s;break;case 1:c==="("?n=2:qc.test(c)?m():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,d="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),p(),i(),o}function Qc(e,t,n){const s=Kc(zc(e.path),n),o=J(s,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function Jc(e,t){const n=[],s=new Map;t=co({strict:!1,end:!0,sensitive:!1},t);function o(p){return s.get(p)}function r(p,m,g){const W=!g,C=$c(p);C.aliasOf=g&&g.record;const k=co(t,p),O=[C];if("alias"in p){const j=typeof p.alias=="string"?[p.alias]:p.alias;for(const te of j)O.push(J({},C,{components:g?g.record.components:C.components,path:te,aliasOf:g?g.record:C}))}let N,x;for(const j of O){const{path:te}=j;if(m&&te[0]!=="/"){const F=m.record.path,X=F[F.length-1]==="/"?"":"/";j.path=m.record.path+(te&&X+te)}if(N=Qc(j,m,k),g?g.alias.push(N):(x=x||N,x!==N&&x.alias.push(N),W&&p.name&&!lo(N)&&i(p.name)),Lr(N)&&c(N),C.children){const F=C.children;for(let X=0;X<F.length;X++)r(F[X],N,g&&g.children[X])}g=g||N}return x?()=>{i(x)}:Ht}function i(p){if(Cr(p)){const m=s.get(p);m&&(s.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(i),m.alias.forEach(i))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&s.delete(p.record.name),p.children.forEach(i),p.alias.forEach(i))}}function a(){return n}function c(p){const m=Yc(p,n);n.splice(m,0,p),p.record.name&&!lo(p)&&s.set(p.record.name,p)}function f(p,m){let g,W={},C,k;if("name"in p&&p.name){if(g=s.get(p.name),!g)throw wt(1,{location:p});k=g.record.name,W=J(io(m.params,g.keys.filter(x=>!x.optional).concat(g.parent?g.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),p.params&&io(p.params,g.keys.map(x=>x.name))),C=g.stringify(W)}else if(p.path!=null)C=p.path,g=n.find(x=>x.re.test(C)),g&&(W=g.parse(C),k=g.record.name);else{if(g=m.name?s.get(m.name):n.find(x=>x.re.test(m.path)),!g)throw wt(1,{location:p,currentLocation:m});k=g.record.name,W=J({},m.params,p.params),C=g.stringify(W)}const O=[];let N=g;for(;N;)O.unshift(N.record),N=N.parent;return{name:k,path:C,params:W,matched:O,meta:Zc(O)}}e.forEach(p=>r(p));function d(){n.length=0,s.clear()}return{addRoute:r,resolve:f,removeRoute:i,clearRoutes:d,getRoutes:a,getRecordMatcher:o}}function io(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function $c(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Bc(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Bc(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function lo(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Zc(e){return e.reduce((t,n)=>J(t,n.meta),{})}function co(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function Yc(e,t){let n=0,s=t.length;for(;n!==s;){const r=n+s>>1;Dr(e,t[r])<0?s=r:n=r+1}const o=Xc(e);return o&&(s=t.lastIndexOf(o,s-1)),s}function Xc(e){let t=e;for(;t=t.parent;)if(Lr(t)&&Dr(e,t)===0)return t}function Lr({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function ea(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<s.length;++o){const r=s[o].replace(Ir," "),i=r.indexOf("="),a=jt(i<0?r:r.slice(0,i)),c=i<0?null:jt(r.slice(i+1));if(a in t){let f=t[a];Ee(f)||(f=t[a]=[f]),f.push(c)}else t[a]=c}return t}function ao(e){let t="";for(let n in e){const s=e[n];if(n=_c(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ee(s)?s.map(r=>r&&Qn(r)):[s&&Qn(s)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function ta(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=Ee(s)?s.map(o=>o==null?null:""+o):s==null?s:""+s)}return t}const na=Symbol(""),uo=Symbol(""),gs=Symbol(""),Wr=Symbol(""),$n=Symbol("");function Et(){let e=[];function t(s){return e.push(s),()=>{const o=e.indexOf(s);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Qe(e,t,n,s,o,r=i=>i()){const i=s&&(s.enterCallbacks[o]=s.enterCallbacks[o]||[]);return()=>new Promise((a,c)=>{const f=m=>{m===!1?c(wt(4,{from:n,to:t})):m instanceof Error?c(m):kc(m)?c(wt(2,{from:t,to:m})):(i&&s.enterCallbacks[o]===i&&typeof m=="function"&&i.push(m),a())},d=r(()=>e.call(s&&s.instances[o],t,n,f));let p=Promise.resolve(d);e.length<3&&(p=p.then(f)),p.catch(m=>c(m))})}function Nn(e,t,n,s,o=r=>r()){const r=[];for(const i of e)for(const a in i.components){let c=i.components[a];if(!(t!=="beforeRouteEnter"&&!i.instances[a]))if(sa(c)){const d=(c.__vccOpts||c)[t];d&&r.push(Qe(d,n,s,i,a,o))}else{let f=c();r.push(()=>f.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${i.path}"`));const p=cc(d)?d.default:d;i.components[a]=p;const g=(p.__vccOpts||p)[t];return g&&Qe(g,n,s,i,a,o)()}))}}return r}function sa(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function fo(e){const t=ke(gs),n=ke(Wr),s=Pe(()=>{const c=lt(e.to);return t.resolve(c)}),o=Pe(()=>{const{matched:c}=s.value,{length:f}=c,d=c[f-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(vt.bind(null,d));if(m>-1)return m;const g=po(c[f-2]);return f>1&&po(d)===g&&p[p.length-1].path!==g?p.findIndex(vt.bind(null,c[f-2])):m}),r=Pe(()=>o.value>-1&&la(n.params,s.value.params)),i=Pe(()=>o.value>-1&&o.value===n.matched.length-1&&Sr(n.params,s.value.params));function a(c={}){return ia(c)?t[lt(e.replace)?"replace":"push"](lt(e.to)).catch(Ht):Promise.resolve()}return{route:s,href:Pe(()=>s.value.href),isActive:r,isExactActive:i,navigate:a}}const oa=$o({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:fo,setup(e,{slots:t}){const n=mn(fo(e)),{options:s}=ke(gs),o=Pe(()=>({[ho(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[ho(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&t.default(n);return e.custom?r:vr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},r)}}}),ra=oa;function ia(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function la(e,t){for(const n in t){const s=t[n],o=e[n];if(typeof s=="string"){if(s!==o)return!1}else if(!Ee(o)||o.length!==s.length||s.some((r,i)=>r!==o[i]))return!1}return!0}function po(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ho=(e,t,n)=>e??t??n,ca=$o({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=ke($n),o=Pe(()=>e.route||s.value),r=ke(uo,0),i=Pe(()=>{let f=lt(r);const{matched:d}=o.value;let p;for(;(p=d[f])&&!p.components;)f++;return f}),a=Pe(()=>o.value.matched[i.value]);nn(uo,Pe(()=>i.value+1)),nn(na,a),nn($n,o);const c=Uo();return sn(()=>[c.value,a.value,e.name],([f,d,p],[m,g,W])=>{d&&(d.instances[p]=f,g&&g!==d&&f&&f===m&&(d.leaveGuards.size||(d.leaveGuards=g.leaveGuards),d.updateGuards.size||(d.updateGuards=g.updateGuards))),f&&d&&(!g||!vt(d,g)||!m)&&(d.enterCallbacks[p]||[]).forEach(C=>C(f))},{flush:"post"}),()=>{const f=o.value,d=e.name,p=a.value,m=p&&p.components[d];if(!m)return mo(n.default,{Component:m,route:f});const g=p.props[d],W=g?g===!0?f.params:typeof g=="function"?g(f):g:null,k=vr(m,J({},W,t,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return mo(n.default,{Component:k,route:f})||k}}});function mo(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Rr=ca;function aa(e){const t=Jc(e.routes,e),n=e.parseQuery||ea,s=e.stringifyQuery||ao,o=e.history,r=Et(),i=Et(),a=Et(),c=yi(Ve);let f=Ve;ht&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Wn.bind(null,y=>""+y),p=Wn.bind(null,wc),m=Wn.bind(null,jt);function g(y,S){let T,D;return Cr(y)?(T=t.getRecordMatcher(y),D=S):D=y,t.addRoute(D,T)}function W(y){const S=t.getRecordMatcher(y);S&&t.removeRoute(S)}function C(){return t.getRoutes().map(y=>y.record)}function k(y){return!!t.getRecordMatcher(y)}function O(y,S){if(S=J({},S||c.value),typeof y=="string"){const u=Rn(n,y,S.path),h=t.resolve({path:u.path},S),_=o.createHref(u.fullPath);return J(u,h,{params:m(h.params),hash:jt(u.hash),redirectedFrom:void 0,href:_})}let T;if(y.path!=null)T=J({},y,{path:Rn(n,y.path,S.path).path});else{const u=J({},y.params);for(const h in u)u[h]==null&&delete u[h];T=J({},y,{params:p(u)}),S.params=p(S.params)}const D=t.resolve(T,S),Q=y.hash||"";D.params=d(m(D.params));const Z=Ac(s,J({},y,{hash:yc(Q),path:D.path})),l=o.createHref(Z);return J({fullPath:Z,hash:Q,query:s===ao?ta(y.query):y.query||{}},D,{redirectedFrom:void 0,href:l})}function N(y){return typeof y=="string"?Rn(n,y,c.value.path):J({},y)}function x(y,S){if(f!==y)return wt(8,{from:S,to:y})}function j(y){return X(y)}function te(y){return j(J(N(y),{replace:!0}))}function F(y){const S=y.matched[y.matched.length-1];if(S&&S.redirect){const{redirect:T}=S;let D=typeof T=="function"?T(y):T;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=N(D):{path:D},D.params={}),J({query:y.query,hash:y.hash,params:D.path!=null?{}:y.params},D)}}function X(y,S){const T=f=O(y),D=c.value,Q=y.state,Z=y.force,l=y.replace===!0,u=F(T);if(u)return X(J(N(u),{state:typeof u=="object"?J({},Q,u.state):Q,force:Z,replace:l}),S||T);const h=T;h.redirectedFrom=S;let _;return!Z&&Tc(s,D,T)&&(_=wt(16,{to:h,from:D}),De(D,D,!0,!1)),(_?Promise.resolve(_):Ce(h,D)).catch(b=>He(b)?He(b,2)?b:Ke(b):V(b,h,D)).then(b=>{if(b){if(He(b,2))return X(J({replace:l},N(b.to),{state:typeof b.to=="object"?J({},Q,b.to.state):Q,force:Z}),S||h)}else b=et(h,D,!0,l,Q);return Ge(h,D,b),b})}function ye(y,S){const T=x(y,S);return T?Promise.reject(T):Promise.resolve()}function Xe(y){const S=dt.values().next().value;return S&&typeof S.runWithContext=="function"?S.runWithContext(y):y()}function Ce(y,S){let T;const[D,Q,Z]=ua(y,S);T=Nn(D.reverse(),"beforeRouteLeave",y,S);for(const u of D)u.leaveGuards.forEach(h=>{T.push(Qe(h,y,S))});const l=ye.bind(null,y,S);return T.push(l),_e(T).then(()=>{T=[];for(const u of r.list())T.push(Qe(u,y,S));return T.push(l),_e(T)}).then(()=>{T=Nn(Q,"beforeRouteUpdate",y,S);for(const u of Q)u.updateGuards.forEach(h=>{T.push(Qe(h,y,S))});return T.push(l),_e(T)}).then(()=>{T=[];for(const u of Z)if(u.beforeEnter)if(Ee(u.beforeEnter))for(const h of u.beforeEnter)T.push(Qe(h,y,S));else T.push(Qe(u.beforeEnter,y,S));return T.push(l),_e(T)}).then(()=>(y.matched.forEach(u=>u.enterCallbacks={}),T=Nn(Z,"beforeRouteEnter",y,S,Xe),T.push(l),_e(T))).then(()=>{T=[];for(const u of i.list())T.push(Qe(u,y,S));return T.push(l),_e(T)}).catch(u=>He(u,8)?u:Promise.reject(u))}function Ge(y,S,T){a.list().forEach(D=>Xe(()=>D(y,S,T)))}function et(y,S,T,D,Q){const Z=x(y,S);if(Z)return Z;const l=S===Ve,u=ht?history.state:{};T&&(D||l?o.replace(y.fullPath,J({scroll:l&&u&&u.scroll},Q)):o.push(y.fullPath,Q)),c.value=y,De(y,S,T,l),Ke()}let xe;function At(){xe||(xe=o.listen((y,S,T)=>{if(!Qt.listening)return;const D=O(y),Q=F(D);if(Q){X(J(Q,{replace:!0}),D).catch(Ht);return}f=D;const Z=c.value;ht&&Rc(to(Z.fullPath,T.delta),In()),Ce(D,Z).catch(l=>He(l,12)?l:He(l,2)?(X(l.to,D).then(u=>{He(u,20)&&!T.delta&&T.type===Vt.pop&&o.go(-1,!1)}).catch(Ht),Promise.reject()):(T.delta&&o.go(-T.delta,!1),V(l,D,Z))).then(l=>{l=l||et(D,Z,!1),l&&(T.delta&&!He(l,8)?o.go(-T.delta,!1):T.type===Vt.pop&&He(l,20)&&o.go(-1,!1)),Ge(D,Z,l)}).catch(Ht)}))}let ut=Et(),ne=Et(),$;function V(y,S,T){Ke(y);const D=ne.list();return D.length?D.forEach(Q=>Q(y,S,T)):console.error(y),Promise.reject(y)}function Oe(){return $&&c.value!==Ve?Promise.resolve():new Promise((y,S)=>{ut.add([y,S])})}function Ke(y){return $||($=!y,At(),ut.list().forEach(([S,T])=>y?T(y):S()),ut.reset()),y}function De(y,S,T,D){const{scrollBehavior:Q}=e;if(!ht||!Q)return Promise.resolve();const Z=!T&&Nc(to(y.fullPath,0))||(D||!T)&&history.state&&history.state.scroll||null;return Ko().then(()=>Q(y,S,Z)).then(l=>l&&Wc(l)).catch(l=>V(l,y,S))}const fe=y=>o.go(y);let ft;const dt=new Set,Qt={currentRoute:c,listening:!0,addRoute:g,removeRoute:W,clearRoutes:t.clearRoutes,hasRoute:k,getRoutes:C,resolve:O,options:e,push:j,replace:te,go:fe,back:()=>fe(-1),forward:()=>fe(1),beforeEach:r.add,beforeResolve:i.add,afterEach:a.add,onError:ne.add,isReady:Oe,install(y){const S=this;y.component("RouterLink",ra),y.component("RouterView",Rr),y.config.globalProperties.$router=S,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>lt(c)}),ht&&!ft&&c.value===Ve&&(ft=!0,j(o.location).catch(Q=>{}));const T={};for(const Q in Ve)Object.defineProperty(T,Q,{get:()=>c.value[Q],enumerable:!0});y.provide(gs,S),y.provide(Wr,Wo(T)),y.provide($n,c);const D=y.unmount;dt.add(y),y.unmount=function(){dt.delete(y),dt.size<1&&(f=Ve,xe&&xe(),xe=null,c.value=Ve,ft=!1,$=!1),D()}}};function _e(y){return y.reduce((S,T)=>S.then(()=>Xe(T)),Promise.resolve())}return Qt}function ua(e,t){const n=[],s=[],o=[],r=Math.max(t.matched.length,e.matched.length);for(let i=0;i<r;i++){const a=t.matched[i];a&&(e.matched.find(f=>vt(f,a))?s.push(a):n.push(a));const c=e.matched[i];c&&(t.matched.find(f=>vt(f,c))||o.push(c))}return[n,s,o]}const Pn=(e,t)=>{const n=e.__vccOpts||e;for(const[s,o]of t)n[s]=o;return n},fa={__name:"App",setup(e){return(t,n)=>(Pt(),_l(lt(Rr)))}},da=Pn(fa,[["__scopeId","data-v-0b57781d"]]),pa={class:"app-header"},ha={class:"container"},ma={class:"app-header-nav"},ga={class:"home"},ba={__name:"LayoutHeader",setup(e){return(t,n)=>{const s=Xo("RouterLink");return Pt(),qt("header",pa,[ue("div",ha,[ue("ul",ma,[ue("li",ga,[oe(s,{to:"/"},{default:Ct(()=>[Dt("首頁")]),_:1})]),ue("li",null,[oe(s,{to:"/"},{default:Ct(()=>[Dt("WebAPI")]),_:1})]),ue("li",null,[oe(s,{to:"/vue3"},{default:Ct(()=>[Dt("Vue3")]),_:1})]),ue("li",null,[oe(s,{to:"/download"},{default:Ct(()=>[Dt("下載")]),_:1})])])])])}}},ya=Pn(ba,[["__scopeId","data-v-8750dd39"]]),_a={__name:"index",setup(e){return(t,n)=>{const s=Xo("RouterView");return Pt(),qt(ge,null,[oe(ya),oe(s)],64)}}},va=e=>(zo("data-v-233cabaf"),e=e(),Qo(),e),wa=va(()=>ue("div",null,"我是WebAPI頁面",-1)),Ia=`
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
            新增AbstractsTodoListEditDtoAbstract.cs
            把TodoListPostDto 通通剪下，貼上
          <a href="https://www.youtube.com/watch?v=DQxGDFZn_6Y&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=49" target="_blank">
          49.【9.使用DI依賴注入功能】ASP.NET Core Web API 入門教學(9_1) - 基本DI依賴注入用法_GET</a>
            主要目的，可以把程式拆分出去
            controller主要寫控制邏輯，商業邏輯就要拆分出去
            新增一個資料夾 ServicesTodoListService
          
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
  `,Pa={__name:"index",setup(e){return(t,n)=>(Pt(),qt(ge,null,[wa,ue("div",null,[ue("div",{innerHTML:Ia})])],64))}},Aa=Pn(Pa,[["__scopeId","data-v-233cabaf"]]),Ta=ue("div",null,"我是RabbitVue3頁面",-1),Sa=`
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
`,Ea={__name:"index",setup(e){return(t,n)=>(Pt(),qt(ge,null,[Ta,ue("div",{innerHTML:Sa})],64))}},Ca=e=>(zo("data-v-d7f0861c"),e=e(),Qo(),e),xa=Ca(()=>ue("div",null,"我是Download頁面",-1)),Da=`
  <div id="Vue3" style="display:flex; justify-content: center; background-color: #282923; color:#c1cccc; font-size: 14px;">
    <pre>

       //-----------Vue3
        <a
        download href="https://drive.google.com/uc?export=download&id=19m0QpipH0fPS51aztlgZ0gFxwWkSpqo_">
        1.dotnet7_vue3<span class="pdf">download></span></a>
        <a href="https://www.youtube.com/watch?v=2FoD_8dMGyU&list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG" target="_blank">
        2.【黑馬程序員】前端Vue3小兔鮮實戰項目<span class="pdf">YouTube</span></a>
        <a
        download href="https://drive.google.com/uc?export=download&id=10LPanB6adG6BLF0cKcM3H-VCSvUWwf8A">
        3.vue-rabbit_my 小兔鮮<span class="pdf">download</span></a>
        <a
        download href="https://drive.google.com/uc?export=download&id=18N6U0JeeUsS6EhGGz2jvh3aZK41L-uBc">
        4.vue3-basic-project-my(mock)<span class="pdf">download</span></a>
        <a
        download href="https://drive.google.com/uc?export=download&id=1Xe_GxmzXJVSIxMnqw3cm15YkLLQc4tWD">
        5.vue3-basic-project-my(有驗證名字不能重覆update)<span class="pdf">download</span></a>
        
        //-----------WEBAPI
        <a href="https://blog.talllkai.com/ASPNETCore" target="_blank">
        1.完整且輕鬆學習ASP.NET Core Web API<span class="pdf">Web</span></a>
        <a href="https://www.youtube.com/watch?v=dXUfZuf1Wp4&list=PLneJIGUTIItuqdxuDBEKCrvXCtCdUf_Xm" target="_blank">
        2.ASP.NET Core Web API 入門教學<span class="pdf">YouTube</span></a>
        <a
        download href="https://drive.google.com/uc?export=download&id=1Mi3nQijxvyz6TmA7NWzkudmxeJha7W-e">
        3.DataBase_First_凱哥<span class="pdf">download</span></a>
        
     </pre>
  </div>
`,La={__name:"index",setup(e){return(t,n)=>(Pt(),qt(ge,null,[xa,ue("div",{innerHTML:Da})],64))}},Wa=Pn(La,[["__scopeId","data-v-d7f0861c"]]),Ra=aa({history:Uc("/vue-my-note/"),routes:[{path:"/",component:_a,children:[{path:"",component:Aa},{path:"/vue3",component:Ea},{path:"/download",component:Wa}]}]}),bs=nc(da);bs.use(lc());bs.use(Ra);bs.mount("#app");
