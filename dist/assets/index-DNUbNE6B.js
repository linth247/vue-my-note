(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Zn(e,t){const n=new Set(e.split(","));return o=>n.has(o)}const Y={},gt=[],ve=()=>{},Or=()=>!1,dn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Yn=e=>e.startsWith("onUpdate:"),ae=Object.assign,Xn=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Hr=Object.prototype.hasOwnProperty,K=(e,t)=>Hr.call(e,t),M=Array.isArray,Wt=e=>pn(e)==="[object Map]",Mr=e=>pn(e)==="[object Set]",U=e=>typeof e=="function",re=e=>typeof e=="string",Pt=e=>typeof e=="symbol",ee=e=>e!==null&&typeof e=="object",_s=e=>(ee(e)||U(e))&&U(e.then)&&U(e.catch),Ur=Object.prototype.toString,pn=e=>Ur.call(e),kr=e=>pn(e).slice(8,-1),Fr=e=>pn(e)==="[object Object]",eo=e=>re(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Rt=Zn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),hn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Gr=/-(\w)/g,Se=hn(e=>e.replace(Gr,(t,n)=>n?n.toUpperCase():"")),Kr=/\B([A-Z])/g,at=hn(e=>e.replace(Kr,"-$1").toLowerCase()),mn=hn(e=>e.charAt(0).toUpperCase()+e.slice(1)),An=hn(e=>e?`on${mn(e)}`:""),Be=(e,t)=>!Object.is(e,t),Sn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},vs=(e,t,n,o=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:o,value:n})},jr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ao;const ws=()=>Ao||(Ao=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function to(e){if(M(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],s=re(o)?$r(o):to(o);if(s)for(const r in s)t[r]=s[r]}return t}else if(re(e)||ee(e))return e}const Vr=/;(?![^(]*\))/g,qr=/:([^]+)/,zr=/\/\*[^]*?\*\//g;function $r(e){const t={};return e.replace(zr,"").split(Vr).forEach(n=>{if(n){const o=n.split(qr);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function no(e){let t="";if(re(e))t=e;else if(M(e))for(let n=0;n<e.length;n++){const o=no(e[n]);o&&(t+=o+" ")}else if(ee(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Qr="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jr=Zn(Qr);function Is(e){return!!e||e===""}/**
* @vue/reactivity v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ie;class Ps{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ie,!t&&Ie&&(this.index=(Ie.scopes||(Ie.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ie;try{return Ie=this,t()}finally{Ie=n}}}on(){Ie=this}off(){Ie=this.parent}stop(t){if(this._active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Br(e){return new Ps(e)}function Zr(e,t=Ie){t&&t.active&&t.effects.push(e)}function Yr(){return Ie}let rt;class oo{constructor(t,n,o,s){this.fn=t,this.trigger=n,this.scheduler=o,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Zr(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Ze();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(Xr(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Ye()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=Qe,n=rt;try{return Qe=!0,rt=this,this._runnings++,So(this),this.fn()}finally{Eo(this),this._runnings--,rt=n,Qe=t}}stop(){this.active&&(So(this),Eo(this),this.onStop&&this.onStop(),this.active=!1)}}function Xr(e){return e.value}function So(e){e._trackId++,e._depsLength=0}function Eo(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)Ts(e.deps[t],e);e.deps.length=e._depsLength}}function Ts(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let Qe=!0,Hn=0;const As=[];function Ze(){As.push(Qe),Qe=!1}function Ye(){const e=As.pop();Qe=e===void 0?!0:e}function so(){Hn++}function ro(){for(Hn--;!Hn&&Mn.length;)Mn.shift()()}function Ss(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const o=e.deps[e._depsLength];o!==t?(o&&Ts(o,e),e.deps[e._depsLength++]=t):e._depsLength++}}const Mn=[];function Es(e,t,n){so();for(const o of e.keys()){let s;o._dirtyLevel<t&&(s??(s=e.get(o)===o._trackId))&&(o._shouldSchedule||(o._shouldSchedule=o._dirtyLevel===0),o._dirtyLevel=t),o._shouldSchedule&&(s??(s=e.get(o)===o._trackId))&&(o.trigger(),(!o._runnings||o.allowRecurse)&&o._dirtyLevel!==2&&(o._shouldSchedule=!1,o.scheduler&&Mn.push(o.scheduler)))}ro()}const Cs=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},Un=new WeakMap,it=Symbol(""),kn=Symbol("");function pe(e,t,n){if(Qe&&rt){let o=Un.get(e);o||Un.set(e,o=new Map);let s=o.get(n);s||o.set(n,s=Cs(()=>o.delete(n))),Ss(rt,s)}}function Ue(e,t,n,o,s,r){const i=Un.get(e);if(!i)return;let a=[];if(t==="clear")a=[...i.values()];else if(n==="length"&&M(e)){const c=Number(o);i.forEach((f,d)=>{(d==="length"||!Pt(d)&&d>=c)&&a.push(f)})}else switch(n!==void 0&&a.push(i.get(n)),t){case"add":M(e)?eo(n)&&a.push(i.get("length")):(a.push(i.get(it)),Wt(e)&&a.push(i.get(kn)));break;case"delete":M(e)||(a.push(i.get(it)),Wt(e)&&a.push(i.get(kn)));break;case"set":Wt(e)&&a.push(i.get(it));break}so();for(const c of a)c&&Es(c,4);ro()}const ei=Zn("__proto__,__v_isRef,__isVue"),xs=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Pt)),Co=ti();function ti(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const o=z(this);for(let r=0,i=this.length;r<i;r++)pe(o,"get",r+"");const s=o[t](...n);return s===-1||s===!1?o[t](...n.map(z)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ze(),so();const o=z(this)[t].apply(this,n);return ro(),Ye(),o}}),e}function ni(e){Pt(e)||(e=String(e));const t=z(this);return pe(t,"has",e),t.hasOwnProperty(e)}class Ds{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,o){const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return o===(s?r?mi:Ns:r?Rs:Ws).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(o)?t:void 0;const i=M(t);if(!s){if(i&&K(Co,n))return Reflect.get(Co,n,o);if(n==="hasOwnProperty")return ni}const a=Reflect.get(t,n,o);return(Pt(n)?xs.has(n):ei(n))||(s||pe(t,"get",n),r)?a:he(a)?i&&eo(n)?a:a.value:ee(a)?s?Hs(a):bn(a):a}}class Ls extends Ds{constructor(t=!1){super(!1,t)}set(t,n,o,s){let r=t[n];if(!this._isShallow){const c=ct(r);if(!_t(o)&&!ct(o)&&(r=z(r),o=z(o)),!M(t)&&he(r)&&!he(o))return c?!1:(r.value=o,!0)}const i=M(t)&&eo(n)?Number(n)<t.length:K(t,n),a=Reflect.set(t,n,o,s);return t===z(s)&&(i?Be(o,r)&&Ue(t,"set",n,o):Ue(t,"add",n,o)),a}deleteProperty(t,n){const o=K(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&o&&Ue(t,"delete",n,void 0),s}has(t,n){const o=Reflect.has(t,n);return(!Pt(n)||!xs.has(n))&&pe(t,"has",n),o}ownKeys(t){return pe(t,"iterate",M(t)?"length":it),Reflect.ownKeys(t)}}class oi extends Ds{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const si=new Ls,ri=new oi,ii=new Ls(!0);const io=e=>e,gn=e=>Reflect.getPrototypeOf(e);function Jt(e,t,n=!1,o=!1){e=e.__v_raw;const s=z(e),r=z(t);n||(Be(t,r)&&pe(s,"get",t),pe(s,"get",r));const{has:i}=gn(s),a=o?io:n?ao:kt;if(i.call(s,t))return a(e.get(t));if(i.call(s,r))return a(e.get(r));e!==s&&e.get(t)}function Bt(e,t=!1){const n=this.__v_raw,o=z(n),s=z(e);return t||(Be(e,s)&&pe(o,"has",e),pe(o,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function Zt(e,t=!1){return e=e.__v_raw,!t&&pe(z(e),"iterate",it),Reflect.get(e,"size",e)}function xo(e,t=!1){!t&&!_t(e)&&!ct(e)&&(e=z(e));const n=z(this);return gn(n).has.call(n,e)||(n.add(e),Ue(n,"add",e,e)),this}function Do(e,t,n=!1){!n&&!_t(t)&&!ct(t)&&(t=z(t));const o=z(this),{has:s,get:r}=gn(o);let i=s.call(o,e);i||(e=z(e),i=s.call(o,e));const a=r.call(o,e);return o.set(e,t),i?Be(t,a)&&Ue(o,"set",e,t):Ue(o,"add",e,t),this}function Lo(e){const t=z(this),{has:n,get:o}=gn(t);let s=n.call(t,e);s||(e=z(e),s=n.call(t,e)),o&&o.call(t,e);const r=t.delete(e);return s&&Ue(t,"delete",e,void 0),r}function Wo(){const e=z(this),t=e.size!==0,n=e.clear();return t&&Ue(e,"clear",void 0,void 0),n}function Yt(e,t){return function(o,s){const r=this,i=r.__v_raw,a=z(i),c=t?io:e?ao:kt;return!e&&pe(a,"iterate",it),i.forEach((f,d)=>o.call(s,c(f),c(d),r))}}function Xt(e,t,n){return function(...o){const s=this.__v_raw,r=z(s),i=Wt(r),a=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,f=s[e](...o),d=n?io:t?ao:kt;return!t&&pe(r,"iterate",c?kn:it),{next(){const{value:p,done:m}=f.next();return m?{value:p,done:m}:{value:a?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function je(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function li(){const e={get(r){return Jt(this,r)},get size(){return Zt(this)},has:Bt,add:xo,set:Do,delete:Lo,clear:Wo,forEach:Yt(!1,!1)},t={get(r){return Jt(this,r,!1,!0)},get size(){return Zt(this)},has:Bt,add(r){return xo.call(this,r,!0)},set(r,i){return Do.call(this,r,i,!0)},delete:Lo,clear:Wo,forEach:Yt(!1,!0)},n={get(r){return Jt(this,r,!0)},get size(){return Zt(this,!0)},has(r){return Bt.call(this,r,!0)},add:je("add"),set:je("set"),delete:je("delete"),clear:je("clear"),forEach:Yt(!0,!1)},o={get(r){return Jt(this,r,!0,!0)},get size(){return Zt(this,!0)},has(r){return Bt.call(this,r,!0)},add:je("add"),set:je("set"),delete:je("delete"),clear:je("clear"),forEach:Yt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=Xt(r,!1,!1),n[r]=Xt(r,!0,!1),t[r]=Xt(r,!1,!0),o[r]=Xt(r,!0,!0)}),[e,n,t,o]}const[ci,ai,ui,fi]=li();function lo(e,t){const n=t?e?fi:ui:e?ai:ci;return(o,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?o:Reflect.get(K(n,s)&&s in o?n:o,s,r)}const di={get:lo(!1,!1)},pi={get:lo(!1,!0)},hi={get:lo(!0,!1)};const Ws=new WeakMap,Rs=new WeakMap,Ns=new WeakMap,mi=new WeakMap;function gi(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bi(e){return e.__v_skip||!Object.isExtensible(e)?0:gi(kr(e))}function bn(e){return ct(e)?e:co(e,!1,si,di,Ws)}function Os(e){return co(e,!1,ii,pi,Rs)}function Hs(e){return co(e,!0,ri,hi,Ns)}function co(e,t,n,o,s){if(!ee(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=s.get(e);if(r)return r;const i=bi(e);if(i===0)return e;const a=new Proxy(e,i===2?o:n);return s.set(e,a),a}function Nt(e){return ct(e)?Nt(e.__v_raw):!!(e&&e.__v_isReactive)}function ct(e){return!!(e&&e.__v_isReadonly)}function _t(e){return!!(e&&e.__v_isShallow)}function Ms(e){return e?!!e.__v_raw:!1}function z(e){const t=e&&e.__v_raw;return t?z(t):e}function Us(e){return Object.isExtensible(e)&&vs(e,"__v_skip",!0),e}const kt=e=>ee(e)?bn(e):e,ao=e=>ee(e)?Hs(e):e;class ks{constructor(t,n,o,s){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new oo(()=>t(this._value),()=>tn(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=o}get value(){const t=z(this);return(!t._cacheable||t.effect.dirty)&&Be(t._value,t._value=t.effect.run())&&tn(t,4),Fs(t),t.effect._dirtyLevel>=2&&tn(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function yi(e,t,n=!1){let o,s;const r=U(e);return r?(o=e,s=ve):(o=e.get,s=e.set),new ks(o,s,r||!s,n)}function Fs(e){var t;Qe&&rt&&(e=z(e),Ss(rt,(t=e.dep)!=null?t:e.dep=Cs(()=>e.dep=void 0,e instanceof ks?e:void 0)))}function tn(e,t=4,n,o){e=z(e);const s=e.dep;s&&Es(s,t)}function he(e){return!!(e&&e.__v_isRef===!0)}function Gs(e){return Ks(e,!1)}function _i(e){return Ks(e,!0)}function Ks(e,t){return he(e)?e:new vi(e,t)}class vi{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:z(t),this._value=n?t:kt(t)}get value(){return Fs(this),this._value}set value(t){const n=this.__v_isShallow||_t(t)||ct(t);t=n?t:z(t),Be(t,this._rawValue)&&(this._rawValue,this._rawValue=t,this._value=n?t:kt(t),tn(this,4))}}function lt(e){return he(e)?e.value:e}const wi={get:(e,t,n)=>lt(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const s=e[t];return he(s)&&!he(n)?(s.value=n,!0):Reflect.set(e,t,n,o)}};function js(e){return Nt(e)?e:new Proxy(e,wi)}/**
* @vue/runtime-core v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Je(e,t,n,o){try{return o?e(...o):e()}catch(s){yn(s,t,n)}}function Ae(e,t,n,o){if(U(e)){const s=Je(e,t,n,o);return s&&_s(s)&&s.catch(r=>{yn(r,t,n)}),s}if(M(e)){const s=[];for(let r=0;r<e.length;r++)s.push(Ae(e[r],t,n,o));return s}}function yn(e,t,n,o=!0){const s=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const f=r.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](e,i,a)===!1)return}r=r.parent}const c=t.appContext.config.errorHandler;if(c){Ze(),Je(c,null,10,[e,i,a]),Ye();return}}Ii(e,n,s,o)}function Ii(e,t,n,o=!0){console.error(e)}let Ft=!1,Fn=!1;const le=[];let Ne=0;const bt=[];let qe=null,ot=0;const Vs=Promise.resolve();let uo=null;function qs(e){const t=uo||Vs;return e?t.then(this?e.bind(this):e):t}function Pi(e){let t=Ne+1,n=le.length;for(;t<n;){const o=t+n>>>1,s=le[o],r=Gt(s);r<e||r===e&&s.pre?t=o+1:n=o}return t}function fo(e){(!le.length||!le.includes(e,Ft&&e.allowRecurse?Ne+1:Ne))&&(e.id==null?le.push(e):le.splice(Pi(e.id),0,e),zs())}function zs(){!Ft&&!Fn&&(Fn=!0,uo=Vs.then(Qs))}function Ti(e){const t=le.indexOf(e);t>Ne&&le.splice(t,1)}function Ai(e){M(e)?bt.push(...e):(!qe||!qe.includes(e,e.allowRecurse?ot+1:ot))&&bt.push(e),zs()}function Ro(e,t,n=Ft?Ne+1:0){for(;n<le.length;n++){const o=le[n];if(o&&o.pre){if(e&&o.id!==e.uid)continue;le.splice(n,1),n--,o()}}}function $s(e){if(bt.length){const t=[...new Set(bt)].sort((n,o)=>Gt(n)-Gt(o));if(bt.length=0,qe){qe.push(...t);return}for(qe=t,ot=0;ot<qe.length;ot++){const n=qe[ot];n.active!==!1&&n()}qe=null,ot=0}}const Gt=e=>e.id==null?1/0:e.id,Si=(e,t)=>{const n=Gt(e)-Gt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Qs(e){Fn=!1,Ft=!0,le.sort(Si);try{for(Ne=0;Ne<le.length;Ne++){const t=le[Ne];t&&t.active!==!1&&Je(t,t.i,t.i?15:14)}}finally{Ne=0,le.length=0,$s(),Ft=!1,uo=null,(le.length||bt.length)&&Qs()}}let Te=null,_n=null;function cn(e){const t=Te;return Te=e,_n=e&&e.type.__scopeId||null,t}function po(e){_n=e}function ho(){_n=null}function xt(e,t=Te,n){if(!t||e._n)return e;const o=(...s)=>{o._d&&Ko(-1);const r=cn(t);let i;try{i=e(...s)}finally{cn(r),o._d&&Ko(1)}return i};return o._n=!0,o._c=!0,o._d=!0,o}function tt(e,t,n,o){const s=e.dirs,r=t&&t.dirs;for(let i=0;i<s.length;i++){const a=s[i];r&&(a.oldValue=r[i].value);let c=a.dir[o];c&&(Ze(),Ae(c,n,8,[e.el,a,e,t]),Ye())}}function Js(e,t){e.shapeFlag&6&&e.component?Js(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function Bs(e,t){return U(e)?ae({name:e.name},t,{setup:e}):e}const nn=e=>!!e.type.__asyncLoader,Zs=e=>e.type.__isKeepAlive;function Ei(e,t){Ys(e,"a",t)}function Ci(e,t){Ys(e,"da",t)}function Ys(e,t,n=ce){const o=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(vn(t,o,n),n){let s=n.parent;for(;s&&s.parent;)Zs(s.parent.vnode)&&xi(o,t,n,s),s=s.parent}}function xi(e,t,n,o){const s=vn(t,e,o,!0);Xs(()=>{Xn(o[t],s)},n)}function vn(e,t,n=ce,o=!1){if(n){const s=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...i)=>{Ze();const a=zt(n),c=Ae(t,n,e,i);return a(),Ye(),c});return o?s.unshift(r):s.push(r),r}}const Fe=e=>(t,n=ce)=>{(!Pn||e==="sp")&&vn(e,(...o)=>t(...o),n)},Di=Fe("bm"),Li=Fe("m"),Wi=Fe("bu"),Ri=Fe("u"),Ni=Fe("bum"),Xs=Fe("um"),Oi=Fe("sp"),Hi=Fe("rtg"),Mi=Fe("rtc");function Ui(e,t=ce){vn("ec",e,t)}const ki="components";function er(e,t){return Gi(ki,e,!0,t)||e}const Fi=Symbol.for("v-ndc");function Gi(e,t,n=!0,o=!1){const s=Te||ce;if(s){const r=s.type;{const a=Ll(r,!1);if(a&&(a===t||a===Se(t)||a===mn(Se(t))))return r}const i=No(s[e]||r[e],t)||No(s.appContext[e],t);return!i&&o?r:i}}function No(e,t){return e&&(e[t]||e[Se(t)]||e[mn(Se(t))])}const Gn=e=>e?_r(e)?yo(e):Gn(e.parent):null,Ot=ae(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Gn(e.parent),$root:e=>Gn(e.root),$emit:e=>e.emit,$options:e=>mo(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,fo(e.update)}),$nextTick:e=>e.n||(e.n=qs.bind(e.proxy)),$watch:e=>ul.bind(e)}),En=(e,t)=>e!==Y&&!e.__isScriptSetup&&K(e,t),Ki={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:o,data:s,props:r,accessCache:i,type:a,appContext:c}=e;let f;if(t[0]!=="$"){const g=i[t];if(g!==void 0)switch(g){case 1:return o[t];case 2:return s[t];case 4:return n[t];case 3:return r[t]}else{if(En(o,t))return i[t]=1,o[t];if(s!==Y&&K(s,t))return i[t]=2,s[t];if((f=e.propsOptions[0])&&K(f,t))return i[t]=3,r[t];if(n!==Y&&K(n,t))return i[t]=4,n[t];Kn&&(i[t]=0)}}const d=Ot[t];let p,m;if(d)return t==="$attrs"&&pe(e.attrs,"get",""),d(e);if((p=a.__cssModules)&&(p=p[t]))return p;if(n!==Y&&K(n,t))return i[t]=4,n[t];if(m=c.config.globalProperties,K(m,t))return m[t]},set({_:e},t,n){const{data:o,setupState:s,ctx:r}=e;return En(s,t)?(s[t]=n,!0):o!==Y&&K(o,t)?(o[t]=n,!0):K(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:s,propsOptions:r}},i){let a;return!!n[i]||e!==Y&&K(e,i)||En(t,i)||(a=r[0])&&K(a,i)||K(o,i)||K(Ot,i)||K(s.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:K(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Oo(e){return M(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Kn=!0;function ji(e){const t=mo(e),n=e.proxy,o=e.ctx;Kn=!1,t.beforeCreate&&Ho(t.beforeCreate,e,"bc");const{data:s,computed:r,methods:i,watch:a,provide:c,inject:f,created:d,beforeMount:p,mounted:m,beforeUpdate:g,updated:W,activated:C,deactivated:k,beforeDestroy:O,beforeUnmount:N,destroyed:x,unmounted:j,render:te,renderTracked:F,renderTriggered:X,errorCaptured:ye,serverPrefetch:Xe,expose:Ce,inheritAttrs:Ge,components:et,directives:xe,filters:At}=t;if(f&&Vi(f,o,null),i)for(const J in i){const V=i[J];U(V)&&(o[J]=V.bind(n))}if(s){const J=s.call(n,n);ee(J)&&(e.data=bn(J))}if(Kn=!0,r)for(const J in r){const V=r[J],Oe=U(V)?V.bind(n,n):U(V.get)?V.get.bind(n,n):ve,Ke=!U(V)&&U(V.set)?V.set.bind(n):ve,De=Pe({get:Oe,set:Ke});Object.defineProperty(o,J,{enumerable:!0,configurable:!0,get:()=>De.value,set:fe=>De.value=fe})}if(a)for(const J in a)tr(a[J],o,n,J);if(c){const J=U(c)?c.call(n):c;Reflect.ownKeys(J).forEach(V=>{on(V,J[V])})}d&&Ho(d,e,"c");function oe(J,V){M(V)?V.forEach(Oe=>J(Oe.bind(n))):V&&J(V.bind(n))}if(oe(Di,p),oe(Li,m),oe(Wi,g),oe(Ri,W),oe(Ei,C),oe(Ci,k),oe(Ui,ye),oe(Mi,F),oe(Hi,X),oe(Ni,N),oe(Xs,j),oe(Oi,Xe),M(Ce))if(Ce.length){const J=e.exposed||(e.exposed={});Ce.forEach(V=>{Object.defineProperty(J,V,{get:()=>n[V],set:Oe=>n[V]=Oe})})}else e.exposed||(e.exposed={});te&&e.render===ve&&(e.render=te),Ge!=null&&(e.inheritAttrs=Ge),et&&(e.components=et),xe&&(e.directives=xe)}function Vi(e,t,n=ve){M(e)&&(e=jn(e));for(const o in e){const s=e[o];let r;ee(s)?"default"in s?r=ke(s.from||o,s.default,!0):r=ke(s.from||o):r=ke(s),he(r)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>r.value,set:i=>r.value=i}):t[o]=r}}function Ho(e,t,n){Ae(M(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function tr(e,t,n,o){const s=o.includes(".")?mr(n,o):()=>n[o];if(re(e)){const r=t[e];U(r)&&sn(s,r)}else if(U(e))sn(s,e.bind(n));else if(ee(e))if(M(e))e.forEach(r=>tr(r,t,n,o));else{const r=U(e.handler)?e.handler.bind(n):t[e.handler];U(r)&&sn(s,r,e)}}function mo(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:i}}=e.appContext,a=r.get(t);let c;return a?c=a:!s.length&&!n&&!o?c=t:(c={},s.length&&s.forEach(f=>an(c,f,i,!0)),an(c,t,i)),ee(t)&&r.set(t,c),c}function an(e,t,n,o=!1){const{mixins:s,extends:r}=t;r&&an(e,r,n,!0),s&&s.forEach(i=>an(e,i,n,!0));for(const i in t)if(!(o&&i==="expose")){const a=qi[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const qi={data:Mo,props:Uo,emits:Uo,methods:Dt,computed:Dt,beforeCreate:ue,created:ue,beforeMount:ue,mounted:ue,beforeUpdate:ue,updated:ue,beforeDestroy:ue,beforeUnmount:ue,destroyed:ue,unmounted:ue,activated:ue,deactivated:ue,errorCaptured:ue,serverPrefetch:ue,components:Dt,directives:Dt,watch:$i,provide:Mo,inject:zi};function Mo(e,t){return t?e?function(){return ae(U(e)?e.call(this,this):e,U(t)?t.call(this,this):t)}:t:e}function zi(e,t){return Dt(jn(e),jn(t))}function jn(e){if(M(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ue(e,t){return e?[...new Set([].concat(e,t))]:t}function Dt(e,t){return e?ae(Object.create(null),e,t):t}function Uo(e,t){return e?M(e)&&M(t)?[...new Set([...e,...t])]:ae(Object.create(null),Oo(e),Oo(t??{})):t}function $i(e,t){if(!e)return t;if(!t)return e;const n=ae(Object.create(null),e);for(const o in t)n[o]=ue(e[o],t[o]);return n}function nr(){return{app:null,config:{isNativeTag:Or,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qi=0;function Ji(e,t){return function(o,s=null){U(o)||(o=ae({},o)),s!=null&&!ee(s)&&(s=null);const r=nr(),i=new WeakSet;let a=!1;const c=r.app={_uid:Qi++,_component:o,_props:s,_container:null,_context:r,_instance:null,version:Rl,get config(){return r.config},set config(f){},use(f,...d){return i.has(f)||(f&&U(f.install)?(i.add(f),f.install(c,...d)):U(f)&&(i.add(f),f(c,...d))),c},mixin(f){return r.mixins.includes(f)||r.mixins.push(f),c},component(f,d){return d?(r.components[f]=d,c):r.components[f]},directive(f,d){return d?(r.directives[f]=d,c):r.directives[f]},mount(f,d,p){if(!a){const m=ne(o,s);return m.appContext=r,p===!0?p="svg":p===!1&&(p=void 0),d&&t?t(m,f):e(m,f,p),a=!0,c._container=f,f.__vue_app__=c,yo(m.component)}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(f,d){return r.provides[f]=d,c},runWithContext(f){const d=yt;yt=c;try{return f()}finally{yt=d}}};return c}}let yt=null;function on(e,t){if(ce){let n=ce.provides;const o=ce.parent&&ce.parent.provides;o===n&&(n=ce.provides=Object.create(o)),n[e]=t}}function ke(e,t,n=!1){const o=ce||Te;if(o||yt){const s=yt?yt._context.provides:o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&U(t)?t.call(o&&o.proxy):t}}const or={},sr=()=>Object.create(or),rr=e=>Object.getPrototypeOf(e)===or;function Bi(e,t,n,o=!1){const s={},r=sr();e.propsDefaults=Object.create(null),ir(e,t,s,r);for(const i in e.propsOptions[0])i in s||(s[i]=void 0);n?e.props=o?s:Os(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function Zi(e,t,n,o){const{props:s,attrs:r,vnode:{patchFlag:i}}=e,a=z(s),[c]=e.propsOptions;let f=!1;if((o||i>0)&&!(i&16)){if(i&8){const d=e.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(wn(e.emitsOptions,m))continue;const g=t[m];if(c)if(K(r,m))g!==r[m]&&(r[m]=g,f=!0);else{const W=Se(m);s[W]=Vn(c,a,W,g,e,!1)}else g!==r[m]&&(r[m]=g,f=!0)}}}else{ir(e,t,s,r)&&(f=!0);let d;for(const p in a)(!t||!K(t,p)&&((d=at(p))===p||!K(t,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Vn(c,a,p,void 0,e,!0)):delete s[p]);if(r!==a)for(const p in r)(!t||!K(t,p))&&(delete r[p],f=!0)}f&&Ue(e.attrs,"set","")}function ir(e,t,n,o){const[s,r]=e.propsOptions;let i=!1,a;if(t)for(let c in t){if(Rt(c))continue;const f=t[c];let d;s&&K(s,d=Se(c))?!r||!r.includes(d)?n[d]=f:(a||(a={}))[d]=f:wn(e.emitsOptions,c)||(!(c in o)||f!==o[c])&&(o[c]=f,i=!0)}if(r){const c=z(n),f=a||Y;for(let d=0;d<r.length;d++){const p=r[d];n[p]=Vn(s,c,p,f[p],e,!K(f,p))}}return i}function Vn(e,t,n,o,s,r){const i=e[n];if(i!=null){const a=K(i,"default");if(a&&o===void 0){const c=i.default;if(i.type!==Function&&!i.skipFactory&&U(c)){const{propsDefaults:f}=s;if(n in f)o=f[n];else{const d=zt(s);o=f[n]=c.call(null,t),d()}}else o=c}i[0]&&(r&&!a?o=!1:i[1]&&(o===""||o===at(n))&&(o=!0))}return o}const Yi=new WeakMap;function lr(e,t,n=!1){const o=n?Yi:t.propsCache,s=o.get(e);if(s)return s;const r=e.props,i={},a=[];let c=!1;if(!U(e)){const d=p=>{c=!0;const[m,g]=lr(p,t,!0);ae(i,m),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!r&&!c)return ee(e)&&o.set(e,gt),gt;if(M(r))for(let d=0;d<r.length;d++){const p=Se(r[d]);ko(p)&&(i[p]=Y)}else if(r)for(const d in r){const p=Se(d);if(ko(p)){const m=r[d],g=i[p]=M(m)||U(m)?{type:m}:ae({},m),W=g.type;let C=!1,k=!0;if(M(W))for(let O=0;O<W.length;++O){const N=W[O],x=U(N)&&N.name;if(x==="Boolean"){C=!0;break}else x==="String"&&(k=!1)}else C=U(W)&&W.name==="Boolean";g[0]=C,g[1]=k,(C||K(g,"default"))&&a.push(p)}}const f=[i,a];return ee(e)&&o.set(e,f),f}function ko(e){return e[0]!=="$"&&!Rt(e)}const cr=e=>e[0]==="_"||e==="$stable",go=e=>M(e)?e.map(Re):[Re(e)],Xi=(e,t,n)=>{if(t._n)return t;const o=xt((...s)=>go(t(...s)),n);return o._c=!1,o},ar=(e,t,n)=>{const o=e._ctx;for(const s in e){if(cr(s))continue;const r=e[s];if(U(r))t[s]=Xi(s,r,o);else if(r!=null){const i=go(r);t[s]=()=>i}}},ur=(e,t)=>{const n=go(t);e.slots.default=()=>n},fr=(e,t,n)=>{for(const o in t)(n||o!=="_")&&(e[o]=t[o])},el=(e,t,n)=>{const o=e.slots=sr();if(e.vnode.shapeFlag&32){const s=t._;s?(fr(o,t,n),n&&vs(o,"_",s,!0)):ar(t,o)}else t&&ur(e,t)},tl=(e,t,n)=>{const{vnode:o,slots:s}=e;let r=!0,i=Y;if(o.shapeFlag&32){const a=t._;a?n&&a===1?r=!1:fr(s,t,n):(r=!t.$stable,ar(t,s)),i=t}else t&&(ur(e,t),i={default:1});if(r)for(const a in s)!cr(a)&&i[a]==null&&delete s[a]};function qn(e,t,n,o,s=!1){if(M(e)){e.forEach((m,g)=>qn(m,t&&(M(t)?t[g]:t),n,o,s));return}if(nn(o)&&!s)return;const r=o.shapeFlag&4?yo(o.component):o.el,i=s?null:r,{i:a,r:c}=e,f=t&&t.r,d=a.refs===Y?a.refs={}:a.refs,p=a.setupState;if(f!=null&&f!==c&&(re(f)?(d[f]=null,K(p,f)&&(p[f]=null)):he(f)&&(f.value=null)),U(c))Je(c,a,12,[i,d]);else{const m=re(c),g=he(c);if(m||g){const W=()=>{if(e.f){const C=m?K(p,c)?p[c]:d[c]:c.value;s?M(C)&&Xn(C,r):M(C)?C.includes(r)||C.push(r):m?(d[c]=[r],K(p,c)&&(p[c]=d[c])):(c.value=[r],e.k&&(d[e.k]=c.value))}else m?(d[c]=i,K(p,c)&&(p[c]=i)):g&&(c.value=i,e.k&&(d[e.k]=i))};i?(W.id=-1,de(W,n)):W()}}}const nl=Symbol("_vte"),ol=e=>e.__isTeleport,de=yl;function sl(e){return rl(e)}function rl(e,t){const n=ws();n.__VUE__=!0;const{insert:o,remove:s,patchProp:r,createElement:i,createText:a,createComment:c,setText:f,setElementText:d,parentNode:p,nextSibling:m,setScopeId:g=ve,insertStaticContent:W}=e,C=(l,u,h,_=null,b=null,w=null,T=void 0,I=null,P=!!u.dynamicChildren)=>{if(l===u)return;l&&!Et(l,u)&&(_=y(l),fe(l,b,w,!0),l=null),u.patchFlag===-2&&(P=!1,u.dynamicChildren=null);const{type:v,ref:E,shapeFlag:R}=u;switch(v){case In:k(l,u,h,_);break;case Kt:O(l,u,h,_);break;case Dn:l==null&&N(u,h,_,T);break;case ge:et(l,u,h,_,b,w,T,I,P);break;default:R&1?te(l,u,h,_,b,w,T,I,P):R&6?xe(l,u,h,_,b,w,T,I,P):(R&64||R&128)&&v.process(l,u,h,_,b,w,T,I,P,D)}E!=null&&b&&qn(E,l&&l.ref,w,u||l,!u)},k=(l,u,h,_)=>{if(l==null)o(u.el=a(u.children),h,_);else{const b=u.el=l.el;u.children!==l.children&&f(b,u.children)}},O=(l,u,h,_)=>{l==null?o(u.el=c(u.children||""),h,_):u.el=l.el},N=(l,u,h,_)=>{[l.el,l.anchor]=W(l.children,u,h,_,l.el,l.anchor)},x=({el:l,anchor:u},h,_)=>{let b;for(;l&&l!==u;)b=m(l),o(l,h,_),l=b;o(u,h,_)},j=({el:l,anchor:u})=>{let h;for(;l&&l!==u;)h=m(l),s(l),l=h;s(u)},te=(l,u,h,_,b,w,T,I,P)=>{u.type==="svg"?T="svg":u.type==="math"&&(T="mathml"),l==null?F(u,h,_,b,w,T,I,P):Xe(l,u,b,w,T,I,P)},F=(l,u,h,_,b,w,T,I)=>{let P,v;const{props:E,shapeFlag:R,transition:L,dirs:H}=l;if(P=l.el=i(l.type,w,E&&E.is,E),R&8?d(P,l.children):R&16&&ye(l.children,P,null,_,b,Cn(l,w),T,I),H&&tt(l,null,_,"created"),X(P,l,l.scopeId,T,_),E){for(const B in E)B!=="value"&&!Rt(B)&&r(P,B,null,E[B],w,_);"value"in E&&r(P,"value",null,E.value,w),(v=E.onVnodeBeforeMount)&&We(v,_,l)}H&&tt(l,null,_,"beforeMount");const G=il(b,L);G&&L.beforeEnter(P),o(P,u,h),((v=E&&E.onVnodeMounted)||G||H)&&de(()=>{v&&We(v,_,l),G&&L.enter(P),H&&tt(l,null,_,"mounted")},b)},X=(l,u,h,_,b)=>{if(h&&g(l,h),_)for(let w=0;w<_.length;w++)g(l,_[w]);if(b){let w=b.subTree;if(u===w){const T=b.vnode;X(l,T,T.scopeId,T.slotScopeIds,b.parent)}}},ye=(l,u,h,_,b,w,T,I,P=0)=>{for(let v=P;v<l.length;v++){const E=l[v]=I?ze(l[v]):Re(l[v]);C(null,E,u,h,_,b,w,T,I)}},Xe=(l,u,h,_,b,w,T)=>{const I=u.el=l.el;let{patchFlag:P,dynamicChildren:v,dirs:E}=u;P|=l.patchFlag&16;const R=l.props||Y,L=u.props||Y;let H;if(h&&nt(h,!1),(H=L.onVnodeBeforeUpdate)&&We(H,h,u,l),E&&tt(u,l,h,"beforeUpdate"),h&&nt(h,!0),(R.innerHTML&&L.innerHTML==null||R.textContent&&L.textContent==null)&&d(I,""),v?Ce(l.dynamicChildren,v,I,h,_,Cn(u,b),w):T||V(l,u,I,null,h,_,Cn(u,b),w,!1),P>0){if(P&16)Ge(I,R,L,h,b);else if(P&2&&R.class!==L.class&&r(I,"class",null,L.class,b),P&4&&r(I,"style",R.style,L.style,b),P&8){const G=u.dynamicProps;for(let B=0;B<G.length;B++){const q=G[B],se=R[q],we=L[q];(we!==se||q==="value")&&r(I,q,se,we,b,h)}}P&1&&l.children!==u.children&&d(I,u.children)}else!T&&v==null&&Ge(I,R,L,h,b);((H=L.onVnodeUpdated)||E)&&de(()=>{H&&We(H,h,u,l),E&&tt(u,l,h,"updated")},_)},Ce=(l,u,h,_,b,w,T)=>{for(let I=0;I<u.length;I++){const P=l[I],v=u[I],E=P.el&&(P.type===ge||!Et(P,v)||P.shapeFlag&70)?p(P.el):h;C(P,v,E,null,_,b,w,T,!0)}},Ge=(l,u,h,_,b)=>{if(u!==h){if(u!==Y)for(const w in u)!Rt(w)&&!(w in h)&&r(l,w,u[w],null,b,_);for(const w in h){if(Rt(w))continue;const T=h[w],I=u[w];T!==I&&w!=="value"&&r(l,w,I,T,b,_)}"value"in h&&r(l,"value",u.value,h.value,b)}},et=(l,u,h,_,b,w,T,I,P)=>{const v=u.el=l?l.el:a(""),E=u.anchor=l?l.anchor:a("");let{patchFlag:R,dynamicChildren:L,slotScopeIds:H}=u;H&&(I=I?I.concat(H):H),l==null?(o(v,h,_),o(E,h,_),ye(u.children||[],h,E,b,w,T,I,P)):R>0&&R&64&&L&&l.dynamicChildren?(Ce(l.dynamicChildren,L,h,b,w,T,I),(u.key!=null||b&&u===b.subTree)&&dr(l,u,!0)):V(l,u,h,E,b,w,T,I,P)},xe=(l,u,h,_,b,w,T,I,P)=>{u.slotScopeIds=I,l==null?u.shapeFlag&512?b.ctx.activate(u,h,_,T,P):At(u,h,_,b,w,T,P):ft(l,u,P)},At=(l,u,h,_,b,w,T)=>{const I=l.component=Sl(l,_,b);if(Zs(l)&&(I.ctx.renderer=D),El(I,!1,T),I.asyncDep){if(b&&b.registerDep(I,oe,T),!l.el){const P=I.subTree=ne(Kt);O(null,P,u,h)}}else oe(I,l,u,h,b,w,T)},ft=(l,u,h)=>{const _=u.component=l.component;if(ml(l,u,h))if(_.asyncDep&&!_.asyncResolved){J(_,u,h);return}else _.next=u,Ti(_.update),_.effect.dirty=!0,_.update();else u.el=l.el,_.vnode=u},oe=(l,u,h,_,b,w,T)=>{const I=()=>{if(l.isMounted){let{next:E,bu:R,u:L,parent:H,vnode:G}=l;{const ht=pr(l);if(ht){E&&(E.el=G.el,J(l,E,T)),ht.asyncDep.then(()=>{l.isUnmounted||I()});return}}let B=E,q;nt(l,!1),E?(E.el=G.el,J(l,E,T)):E=G,R&&Sn(R),(q=E.props&&E.props.onVnodeBeforeUpdate)&&We(q,H,E,G),nt(l,!0);const se=xn(l),we=l.subTree;l.subTree=se,C(we,se,p(we.el),y(we),l,b,w),E.el=se.el,B===null&&gl(l,se.el),L&&de(L,b),(q=E.props&&E.props.onVnodeUpdated)&&de(()=>We(q,H,E,G),b)}else{let E;const{el:R,props:L}=u,{bm:H,m:G,parent:B}=l,q=nn(u);if(nt(l,!1),H&&Sn(H),!q&&(E=L&&L.onVnodeBeforeMount)&&We(E,B,u),nt(l,!0),R&&Z){const se=()=>{l.subTree=xn(l),Z(R,l.subTree,l,b,null)};q?u.type.__asyncLoader().then(()=>!l.isUnmounted&&se()):se()}else{const se=l.subTree=xn(l);C(null,se,h,_,l,b,w),u.el=se.el}if(G&&de(G,b),!q&&(E=L&&L.onVnodeMounted)){const se=u;de(()=>We(E,B,se),b)}(u.shapeFlag&256||B&&nn(B.vnode)&&B.vnode.shapeFlag&256)&&l.a&&de(l.a,b),l.isMounted=!0,u=h=_=null}},P=l.effect=new oo(I,ve,()=>fo(v),l.scope),v=l.update=()=>{P.dirty&&P.run()};v.i=l,v.id=l.uid,nt(l,!0),v()},J=(l,u,h)=>{u.component=l;const _=l.vnode.props;l.vnode=u,l.next=null,Zi(l,u.props,_,h),tl(l,u.children,h),Ze(),Ro(l),Ye()},V=(l,u,h,_,b,w,T,I,P=!1)=>{const v=l&&l.children,E=l?l.shapeFlag:0,R=u.children,{patchFlag:L,shapeFlag:H}=u;if(L>0){if(L&128){Ke(v,R,h,_,b,w,T,I,P);return}else if(L&256){Oe(v,R,h,_,b,w,T,I,P);return}}H&8?(E&16&&_e(v,b,w),R!==v&&d(h,R)):E&16?H&16?Ke(v,R,h,_,b,w,T,I,P):_e(v,b,w,!0):(E&8&&d(h,""),H&16&&ye(R,h,_,b,w,T,I,P))},Oe=(l,u,h,_,b,w,T,I,P)=>{l=l||gt,u=u||gt;const v=l.length,E=u.length,R=Math.min(v,E);let L;for(L=0;L<R;L++){const H=u[L]=P?ze(u[L]):Re(u[L]);C(l[L],H,h,null,b,w,T,I,P)}v>E?_e(l,b,w,!0,!1,R):ye(u,h,_,b,w,T,I,P,R)},Ke=(l,u,h,_,b,w,T,I,P)=>{let v=0;const E=u.length;let R=l.length-1,L=E-1;for(;v<=R&&v<=L;){const H=l[v],G=u[v]=P?ze(u[v]):Re(u[v]);if(Et(H,G))C(H,G,h,null,b,w,T,I,P);else break;v++}for(;v<=R&&v<=L;){const H=l[R],G=u[L]=P?ze(u[L]):Re(u[L]);if(Et(H,G))C(H,G,h,null,b,w,T,I,P);else break;R--,L--}if(v>R){if(v<=L){const H=L+1,G=H<E?u[H].el:_;for(;v<=L;)C(null,u[v]=P?ze(u[v]):Re(u[v]),h,G,b,w,T,I,P),v++}}else if(v>L)for(;v<=R;)fe(l[v],b,w,!0),v++;else{const H=v,G=v,B=new Map;for(v=G;v<=L;v++){const me=u[v]=P?ze(u[v]):Re(u[v]);me.key!=null&&B.set(me.key,v)}let q,se=0;const we=L-G+1;let ht=!1,Io=0;const St=new Array(we);for(v=0;v<we;v++)St[v]=0;for(v=H;v<=R;v++){const me=l[v];if(se>=we){fe(me,b,w,!0);continue}let Le;if(me.key!=null)Le=B.get(me.key);else for(q=G;q<=L;q++)if(St[q-G]===0&&Et(me,u[q])){Le=q;break}Le===void 0?fe(me,b,w,!0):(St[Le-G]=v+1,Le>=Io?Io=Le:ht=!0,C(me,u[Le],h,null,b,w,T,I,P),se++)}const Po=ht?ll(St):gt;for(q=Po.length-1,v=we-1;v>=0;v--){const me=G+v,Le=u[me],To=me+1<E?u[me+1].el:_;St[v]===0?C(null,Le,h,To,b,w,T,I,P):ht&&(q<0||v!==Po[q]?De(Le,h,To,2):q--)}}},De=(l,u,h,_,b=null)=>{const{el:w,type:T,transition:I,children:P,shapeFlag:v}=l;if(v&6){De(l.component.subTree,u,h,_);return}if(v&128){l.suspense.move(u,h,_);return}if(v&64){T.move(l,u,h,D);return}if(T===ge){o(w,u,h);for(let R=0;R<P.length;R++)De(P[R],u,h,_);o(l.anchor,u,h);return}if(T===Dn){x(l,u,h);return}if(_!==2&&v&1&&I)if(_===0)I.beforeEnter(w),o(w,u,h),de(()=>I.enter(w),b);else{const{leave:R,delayLeave:L,afterLeave:H}=I,G=()=>o(w,u,h),B=()=>{R(w,()=>{G(),H&&H()})};L?L(w,G,B):B()}else o(w,u,h)},fe=(l,u,h,_=!1,b=!1)=>{const{type:w,props:T,ref:I,children:P,dynamicChildren:v,shapeFlag:E,patchFlag:R,dirs:L,cacheIndex:H}=l;if(R===-2&&(b=!1),I!=null&&qn(I,null,h,l,!0),H!=null&&(u.renderCache[H]=void 0),E&256){u.ctx.deactivate(l);return}const G=E&1&&L,B=!nn(l);let q;if(B&&(q=T&&T.onVnodeBeforeUnmount)&&We(q,u,l),E&6)Qt(l.component,h,_);else{if(E&128){l.suspense.unmount(h,_);return}G&&tt(l,null,u,"beforeUnmount"),E&64?l.type.remove(l,u,h,D,_):v&&!v.hasOnce&&(w!==ge||R>0&&R&64)?_e(v,u,h,!1,!0):(w===ge&&R&384||!b&&E&16)&&_e(P,u,h),_&&dt(l)}(B&&(q=T&&T.onVnodeUnmounted)||G)&&de(()=>{q&&We(q,u,l),G&&tt(l,null,u,"unmounted")},h)},dt=l=>{const{type:u,el:h,anchor:_,transition:b}=l;if(u===ge){pt(h,_);return}if(u===Dn){j(l);return}const w=()=>{s(h),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(l.shapeFlag&1&&b&&!b.persisted){const{leave:T,delayLeave:I}=b,P=()=>T(h,w);I?I(l.el,w,P):P()}else w()},pt=(l,u)=>{let h;for(;l!==u;)h=m(l),s(l),l=h;s(u)},Qt=(l,u,h)=>{const{bum:_,scope:b,update:w,subTree:T,um:I,m:P,a:v}=l;Fo(P),Fo(v),_&&Sn(_),b.stop(),w&&(w.active=!1,fe(T,l,u,h)),I&&de(I,u),de(()=>{l.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},_e=(l,u,h,_=!1,b=!1,w=0)=>{for(let T=w;T<l.length;T++)fe(l[T],u,h,_,b)},y=l=>{if(l.shapeFlag&6)return y(l.component.subTree);if(l.shapeFlag&128)return l.suspense.next();const u=m(l.anchor||l.el),h=u&&u[nl];return h?m(h):u};let S=!1;const A=(l,u,h)=>{l==null?u._vnode&&fe(u._vnode,null,null,!0):C(u._vnode||null,l,u,null,null,null,h),u._vnode=l,S||(S=!0,Ro(),$s(),S=!1)},D={p:C,um:fe,m:De,r:dt,mt:At,mc:ye,pc:V,pbc:Ce,n:y,o:e};let $,Z;return{render:A,hydrate:$,createApp:Ji(A,$)}}function Cn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function nt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function il(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function dr(e,t,n=!1){const o=e.children,s=t.children;if(M(o)&&M(s))for(let r=0;r<o.length;r++){const i=o[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ze(s[r]),a.el=i.el),!n&&a.patchFlag!==-2&&dr(i,a)),a.type===In&&(a.el=i.el)}}function ll(e){const t=e.slice(),n=[0];let o,s,r,i,a;const c=e.length;for(o=0;o<c;o++){const f=e[o];if(f!==0){if(s=n[n.length-1],e[s]<f){t[o]=s,n.push(o);continue}for(r=0,i=n.length-1;r<i;)a=r+i>>1,e[n[a]]<f?r=a+1:i=a;f<e[n[r]]&&(r>0&&(t[o]=n[r-1]),n[r]=o)}}for(r=n.length,i=n[r-1];r-- >0;)n[r]=i,i=t[i];return n}function pr(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:pr(t)}function Fo(e){if(e)for(let t=0;t<e.length;t++)e[t].active=!1}const cl=Symbol.for("v-scx"),al=()=>ke(cl),en={};function sn(e,t,n){return hr(e,t,n)}function hr(e,t,{immediate:n,deep:o,flush:s,once:r,onTrack:i,onTrigger:a}=Y){if(t&&r){const F=t;t=(...X)=>{F(...X),te()}}const c=ce,f=F=>o===!0?F:st(F,o===!1?1:void 0);let d,p=!1,m=!1;if(he(e)?(d=()=>e.value,p=_t(e)):Nt(e)?(d=()=>f(e),p=!0):M(e)?(m=!0,p=e.some(F=>Nt(F)||_t(F)),d=()=>e.map(F=>{if(he(F))return F.value;if(Nt(F))return f(F);if(U(F))return Je(F,c,2)})):U(e)?t?d=()=>Je(e,c,2):d=()=>(g&&g(),Ae(e,c,3,[W])):d=ve,t&&o){const F=d;d=()=>st(F())}let g,W=F=>{g=x.onStop=()=>{Je(F,c,4),g=x.onStop=void 0}},C;if(Pn)if(W=ve,t?n&&Ae(t,c,3,[d(),m?[]:void 0,W]):d(),s==="sync"){const F=al();C=F.__watcherHandles||(F.__watcherHandles=[])}else return ve;let k=m?new Array(e.length).fill(en):en;const O=()=>{if(!(!x.active||!x.dirty))if(t){const F=x.run();(o||p||(m?F.some((X,ye)=>Be(X,k[ye])):Be(F,k)))&&(g&&g(),Ae(t,c,3,[F,k===en?void 0:m&&k[0]===en?[]:k,W]),k=F)}else x.run()};O.allowRecurse=!!t;let N;s==="sync"?N=O:s==="post"?N=()=>de(O,c&&c.suspense):(O.pre=!0,c&&(O.id=c.uid),N=()=>fo(O));const x=new oo(d,ve,N),j=Yr(),te=()=>{x.stop(),j&&Xn(j.effects,x)};return t?n?O():k=x.run():s==="post"?de(x.run.bind(x),c&&c.suspense):x.run(),C&&C.push(te),te}function ul(e,t,n){const o=this.proxy,s=re(e)?e.includes(".")?mr(o,e):()=>o[e]:e.bind(o,o);let r;U(t)?r=t:(r=t.handler,n=t);const i=zt(this),a=hr(s,r.bind(o),n);return i(),a}function mr(e,t){const n=t.split(".");return()=>{let o=e;for(let s=0;s<n.length&&o;s++)o=o[n[s]];return o}}function st(e,t=1/0,n){if(t<=0||!ee(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,he(e))st(e.value,t,n);else if(M(e))for(let o=0;o<e.length;o++)st(e[o],t,n);else if(Mr(e)||Wt(e))e.forEach(o=>{st(o,t,n)});else if(Fr(e)){for(const o in e)st(e[o],t,n);for(const o of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,o)&&st(e[o],t,n)}return e}const fl=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Se(t)}Modifiers`]||e[`${at(t)}Modifiers`];function dl(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||Y;let s=n;const r=t.startsWith("update:"),i=r&&fl(o,t.slice(7));i&&(i.trim&&(s=n.map(d=>re(d)?d.trim():d)),i.number&&(s=n.map(jr)));let a,c=o[a=An(t)]||o[a=An(Se(t))];!c&&r&&(c=o[a=An(at(t))]),c&&Ae(c,e,6,s);const f=o[a+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Ae(f,e,6,s)}}function gr(e,t,n=!1){const o=t.emitsCache,s=o.get(e);if(s!==void 0)return s;const r=e.emits;let i={},a=!1;if(!U(e)){const c=f=>{const d=gr(f,t,!0);d&&(a=!0,ae(i,d))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!a?(ee(e)&&o.set(e,null),null):(M(r)?r.forEach(c=>i[c]=null):ae(i,r),ee(e)&&o.set(e,i),i)}function wn(e,t){return!e||!dn(t)?!1:(t=t.slice(2).replace(/Once$/,""),K(e,t[0].toLowerCase()+t.slice(1))||K(e,at(t))||K(e,t))}function xn(e){const{type:t,vnode:n,proxy:o,withProxy:s,propsOptions:[r],slots:i,attrs:a,emit:c,render:f,renderCache:d,props:p,data:m,setupState:g,ctx:W,inheritAttrs:C}=e,k=cn(e);let O,N;try{if(n.shapeFlag&4){const j=s||o,te=j;O=Re(f.call(te,j,d,p,g,m,W)),N=a}else{const j=t;O=Re(j.length>1?j(p,{attrs:a,slots:i,emit:c}):j(p,null)),N=t.props?a:pl(a)}}catch(j){Ht.length=0,yn(j,e,1),O=ne(Kt)}let x=O;if(N&&C!==!1){const j=Object.keys(N),{shapeFlag:te}=x;j.length&&te&7&&(r&&j.some(Yn)&&(N=hl(N,r)),x=vt(x,N,!1,!0))}return n.dirs&&(x=vt(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&(x.transition=n.transition),O=x,cn(k),O}const pl=e=>{let t;for(const n in e)(n==="class"||n==="style"||dn(n))&&((t||(t={}))[n]=e[n]);return t},hl=(e,t)=>{const n={};for(const o in e)(!Yn(o)||!(o.slice(9)in t))&&(n[o]=e[o]);return n};function ml(e,t,n){const{props:o,children:s,component:r}=e,{props:i,children:a,patchFlag:c}=t,f=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return o?Go(o,i,f):!!i;if(c&8){const d=t.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(i[m]!==o[m]&&!wn(f,m))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:o===i?!1:o?i?Go(o,i,f):!0:!!i;return!1}function Go(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let s=0;s<o.length;s++){const r=o[s];if(t[r]!==e[r]&&!wn(n,r))return!0}return!1}function gl({vnode:e,parent:t},n){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.el=e.el),o===e)(e=t.vnode).el=n,t=t.parent;else break}}const bl=e=>e.__isSuspense;function yl(e,t){t&&t.pendingBranch?M(e)?t.effects.push(...e):t.effects.push(e):Ai(e)}const ge=Symbol.for("v-fgt"),In=Symbol.for("v-txt"),Kt=Symbol.for("v-cmt"),Dn=Symbol.for("v-stc"),Ht=[];let be=null;function ut(e=!1){Ht.push(be=e?null:[])}function _l(){Ht.pop(),be=Ht[Ht.length-1]||null}let jt=1;function Ko(e){jt+=e,e<0&&be&&(be.hasOnce=!0)}function br(e){return e.dynamicChildren=jt>0?be||gt:null,_l(),jt>0&&be&&be.push(e),e}function Tt(e,t,n,o,s,r){return br(ie(e,t,n,o,s,r,!0))}function vl(e,t,n,o,s){return br(ne(e,t,n,o,s,!0))}function zn(e){return e?e.__v_isVNode===!0:!1}function Et(e,t){return e.type===t.type&&e.key===t.key}const yr=({key:e})=>e??null,rn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?re(e)||he(e)||U(e)?{i:Te,r:e,k:t,f:!!n}:e:null);function ie(e,t=null,n=null,o=0,s=null,r=e===ge?0:1,i=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&yr(t),ref:t&&rn(t),scopeId:_n,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:o,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Te};return a?(bo(c,n),r&128&&e.normalize(c)):n&&(c.shapeFlag|=re(n)?8:16),jt>0&&!i&&be&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&be.push(c),c}const ne=wl;function wl(e,t=null,n=null,o=0,s=null,r=!1){if((!e||e===Fi)&&(e=Kt),zn(e)){const a=vt(e,t,!0);return n&&bo(a,n),jt>0&&!r&&be&&(a.shapeFlag&6?be[be.indexOf(e)]=a:be.push(a)),a.patchFlag=-2,a}if(Wl(e)&&(e=e.__vccOpts),t){t=Il(t);let{class:a,style:c}=t;a&&!re(a)&&(t.class=no(a)),ee(c)&&(Ms(c)&&!M(c)&&(c=ae({},c)),t.style=to(c))}const i=re(e)?1:bl(e)?128:ol(e)?64:ee(e)?4:U(e)?2:0;return ie(e,t,n,o,s,i,r,!0)}function Il(e){return e?Ms(e)||rr(e)?ae({},e):e:null}function vt(e,t,n=!1,o=!1){const{props:s,ref:r,patchFlag:i,children:a,transition:c}=e,f=t?Pl(s||{},t):s,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&yr(f),ref:t&&t.ref?n&&r?M(r)?r.concat(rn(t)):[r,rn(t)]:rn(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ge?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&vt(e.ssContent),ssFallback:e.ssFallback&&vt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&o&&Js(d,c.clone(d)),d}function Lt(e=" ",t=0){return ne(In,null,e,t)}function Re(e){return e==null||typeof e=="boolean"?ne(Kt):M(e)?ne(ge,null,e.slice()):typeof e=="object"?ze(e):ne(In,null,String(e))}function ze(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:vt(e)}function bo(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(M(t))n=16;else if(typeof t=="object")if(o&65){const s=t.default;s&&(s._c&&(s._d=!1),bo(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!rr(t)?t._ctx=Te:s===3&&Te&&(Te.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else U(t)?(t={default:t,_ctx:Te},n=32):(t=String(t),o&64?(n=16,t=[Lt(t)]):n=8);e.children=t,e.shapeFlag|=n}function Pl(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const s in o)if(s==="class")t.class!==o.class&&(t.class=no([t.class,o.class]));else if(s==="style")t.style=to([t.style,o.style]);else if(dn(s)){const r=t[s],i=o[s];i&&r!==i&&!(M(r)&&r.includes(i))&&(t[s]=r?[].concat(r,i):i)}else s!==""&&(t[s]=o[s])}return t}function We(e,t,n,o=null){Ae(e,t,7,[n,o])}const Tl=nr();let Al=0;function Sl(e,t,n){const o=e.type,s=(t?t.appContext:e.appContext)||Tl,r={uid:Al++,vnode:e,type:o,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ps(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lr(o,s),emitsOptions:gr(o,s),emit:null,emitted:null,propsDefaults:Y,inheritAttrs:o.inheritAttrs,ctx:Y,data:Y,props:Y,attrs:Y,slots:Y,refs:Y,setupState:Y,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=dl.bind(null,r),e.ce&&e.ce(r),r}let ce=null,un,$n;{const e=ws(),t=(n,o)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(o),r=>{s.length>1?s.forEach(i=>i(r)):s[0](r)}};un=t("__VUE_INSTANCE_SETTERS__",n=>ce=n),$n=t("__VUE_SSR_SETTERS__",n=>Pn=n)}const zt=e=>{const t=ce;return un(e),e.scope.on(),()=>{e.scope.off(),un(t)}},jo=()=>{ce&&ce.scope.off(),un(null)};function _r(e){return e.vnode.shapeFlag&4}let Pn=!1;function El(e,t=!1,n=!1){t&&$n(t);const{props:o,children:s}=e.vnode,r=_r(e);Bi(e,o,r,t),el(e,s,n);const i=r?Cl(e,t):void 0;return t&&$n(!1),i}function Cl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ki);const{setup:o}=n;if(o){const s=e.setupContext=o.length>1?Dl(e):null,r=zt(e);Ze();const i=Je(o,e,0,[e.props,s]);if(Ye(),r(),_s(i)){if(i.then(jo,jo),t)return i.then(a=>{Vo(e,a,t)}).catch(a=>{yn(a,e,0)});e.asyncDep=i}else Vo(e,i,t)}else vr(e,t)}function Vo(e,t,n){U(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ee(t)&&(e.setupState=js(t)),vr(e,n)}let qo;function vr(e,t,n){const o=e.type;if(!e.render){if(!t&&qo&&!o.render){const s=o.template||mo(e).template;if(s){const{isCustomElement:r,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:c}=o,f=ae(ae({isCustomElement:r,delimiters:a},i),c);o.render=qo(s,f)}}e.render=o.render||ve}{const s=zt(e);Ze();try{ji(e)}finally{Ye(),s()}}}const xl={get(e,t){return pe(e,"get",""),e[t]}};function Dl(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,xl),slots:e.slots,emit:e.emit,expose:t}}function yo(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(js(Us(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ot)return Ot[n](e)},has(t,n){return n in t||n in Ot}})):e.proxy}function Ll(e,t=!0){return U(e)?e.displayName||e.name:e.name||t&&e.__name}function Wl(e){return U(e)&&"__vccOpts"in e}const Pe=(e,t)=>yi(e,t,Pn);function wr(e,t,n){const o=arguments.length;return o===2?ee(t)&&!M(t)?zn(t)?ne(e,null,[t]):ne(e,t):ne(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&zn(n)&&(n=[n]),ne(e,t,n))}const Rl="3.4.38";/**
* @vue/runtime-dom v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Nl="http://www.w3.org/2000/svg",Ol="http://www.w3.org/1998/Math/MathML",Me=typeof document<"u"?document:null,zo=Me&&Me.createElement("template"),Hl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const s=t==="svg"?Me.createElementNS(Nl,e):t==="mathml"?Me.createElementNS(Ol,e):n?Me.createElement(e,{is:n}):Me.createElement(e);return e==="select"&&o&&o.multiple!=null&&s.setAttribute("multiple",o.multiple),s},createText:e=>Me.createTextNode(e),createComment:e=>Me.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Me.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,o,s,r){const i=n?n.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{zo.innerHTML=o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e;const a=zo.content;if(o==="svg"||o==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ml=Symbol("_vtc");function Ul(e,t,n){const o=e[Ml];o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const $o=Symbol("_vod"),kl=Symbol("_vsh"),Fl=Symbol(""),Gl=/(^|;)\s*display\s*:/;function Kl(e,t,n){const o=e.style,s=re(n);let r=!1;if(n&&!s){if(t)if(re(t))for(const i of t.split(";")){const a=i.slice(0,i.indexOf(":")).trim();n[a]==null&&ln(o,a,"")}else for(const i in t)n[i]==null&&ln(o,i,"");for(const i in n)i==="display"&&(r=!0),ln(o,i,n[i])}else if(s){if(t!==n){const i=o[Fl];i&&(n+=";"+i),o.cssText=n,r=Gl.test(n)}}else t&&e.removeAttribute("style");$o in e&&(e[$o]=r?o.display:"",e[kl]&&(o.display="none"))}const Qo=/\s*!important$/;function ln(e,t,n){if(M(n))n.forEach(o=>ln(e,t,o));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const o=jl(e,t);Qo.test(n)?e.setProperty(at(o),n.replace(Qo,""),"important"):e[o]=n}}const Jo=["Webkit","Moz","ms"],Ln={};function jl(e,t){const n=Ln[t];if(n)return n;let o=Se(t);if(o!=="filter"&&o in e)return Ln[t]=o;o=mn(o);for(let s=0;s<Jo.length;s++){const r=Jo[s]+o;if(r in e)return Ln[t]=r}return t}const Bo="http://www.w3.org/1999/xlink";function Zo(e,t,n,o,s,r=Jr(t)){o&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Bo,t.slice(6,t.length)):e.setAttributeNS(Bo,t,n):n==null||r&&!Is(n)?e.removeAttribute(t):e.setAttribute(t,r?"":Pt(n)?String(n):n)}function Vl(e,t,n,o){if(t==="innerHTML"||t==="textContent"){if(n==null)return;e[t]=n;return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const i=s==="OPTION"?e.getAttribute("value")||"":e.value,a=n==null?"":String(n);(i!==a||!("_value"in e))&&(e.value=a),n==null&&e.removeAttribute(t),e._value=n;return}let r=!1;if(n===""||n==null){const i=typeof e[t];i==="boolean"?n=Is(n):n==null&&i==="string"?(n="",r=!0):i==="number"&&(n=0,r=!0)}try{e[t]=n}catch{}r&&e.removeAttribute(t)}function ql(e,t,n,o){e.addEventListener(t,n,o)}function zl(e,t,n,o){e.removeEventListener(t,n,o)}const Yo=Symbol("_vei");function $l(e,t,n,o,s=null){const r=e[Yo]||(e[Yo]={}),i=r[t];if(o&&i)i.value=o;else{const[a,c]=Ql(t);if(o){const f=r[t]=Zl(o,s);ql(e,a,f,c)}else i&&(zl(e,a,i,c),r[t]=void 0)}}const Xo=/(?:Once|Passive|Capture)$/;function Ql(e){let t;if(Xo.test(e)){t={};let o;for(;o=e.match(Xo);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):at(e.slice(2)),t]}let Wn=0;const Jl=Promise.resolve(),Bl=()=>Wn||(Jl.then(()=>Wn=0),Wn=Date.now());function Zl(e,t){const n=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=n.attached)return;Ae(Yl(o,n.value),t,5,[o])};return n.value=e,n.attached=Bl(),n}function Yl(e,t){if(M(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(o=>s=>!s._stopped&&o&&o(s))}else return t}const es=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Xl=(e,t,n,o,s,r)=>{const i=s==="svg";t==="class"?Ul(e,o,i):t==="style"?Kl(e,n,o):dn(t)?Yn(t)||$l(e,t,n,o,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ec(e,t,o,i))?(Vl(e,t,o),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Zo(e,t,o,i,r,t!=="value")):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),Zo(e,t,o,i))};function ec(e,t,n,o){if(o)return!!(t==="innerHTML"||t==="textContent"||t in e&&es(t)&&U(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return es(t)&&re(n)?!1:t in e}const tc=ae({patchProp:Xl},Hl);let ts;function nc(){return ts||(ts=sl(tc))}const oc=(...e)=>{const t=nc().createApp(...e),{mount:n}=t;return t.mount=o=>{const s=rc(o);if(!s)return;const r=t._component;!U(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const i=n(s,!1,sc(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),i},t};function sc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function rc(e){return re(e)?document.querySelector(e):e}var ic=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const lc=Symbol();var ns;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(ns||(ns={}));function cc(){const e=Br(!0),t=e.run(()=>Gs({}));let n=[],o=[];const s=Us({install(r){s._a=r,r.provide(lc,s),r.config.globalProperties.$pinia=s,o.forEach(i=>n.push(i)),o=[]},use(r){return!this._a&&!ic?o.push(r):n.push(r),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const mt=typeof document<"u";function ac(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Q=Object.assign;function Rn(e,t){const n={};for(const o in t){const s=t[o];n[o]=Ee(s)?s.map(e):e(s)}return n}const Mt=()=>{},Ee=Array.isArray,Ir=/#/g,uc=/&/g,fc=/\//g,dc=/=/g,pc=/\?/g,Pr=/\+/g,hc=/%5B/g,mc=/%5D/g,Tr=/%5E/g,gc=/%60/g,Ar=/%7B/g,bc=/%7C/g,Sr=/%7D/g,yc=/%20/g;function _o(e){return encodeURI(""+e).replace(bc,"|").replace(hc,"[").replace(mc,"]")}function _c(e){return _o(e).replace(Ar,"{").replace(Sr,"}").replace(Tr,"^")}function Qn(e){return _o(e).replace(Pr,"%2B").replace(yc,"+").replace(Ir,"%23").replace(uc,"%26").replace(gc,"`").replace(Ar,"{").replace(Sr,"}").replace(Tr,"^")}function vc(e){return Qn(e).replace(dc,"%3D")}function wc(e){return _o(e).replace(Ir,"%23").replace(pc,"%3F")}function Ic(e){return e==null?"":wc(e).replace(fc,"%2F")}function Vt(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Pc=/\/$/,Tc=e=>e.replace(Pc,"");function Nn(e,t,n="/"){let o,s={},r="",i="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(o=t.slice(0,c),r=t.slice(c+1,a>-1?a:t.length),s=e(r)),a>-1&&(o=o||t.slice(0,a),i=t.slice(a,t.length)),o=Cc(o??t,n),{fullPath:o+(r&&"?")+r+i,path:o,query:s,hash:Vt(i)}}function Ac(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function os(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Sc(e,t,n){const o=t.matched.length-1,s=n.matched.length-1;return o>-1&&o===s&&wt(t.matched[o],n.matched[s])&&Er(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function wt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Er(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Ec(e[n],t[n]))return!1;return!0}function Ec(e,t){return Ee(e)?ss(e,t):Ee(t)?ss(t,e):e===t}function ss(e,t){return Ee(t)?e.length===t.length&&e.every((n,o)=>n===t[o]):e.length===1&&e[0]===t}function Cc(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),o=e.split("/"),s=o[o.length-1];(s===".."||s===".")&&o.push("");let r=n.length-1,i,a;for(i=0;i<o.length;i++)if(a=o[i],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+o.slice(i).join("/")}const Ve={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var qt;(function(e){e.pop="pop",e.push="push"})(qt||(qt={}));var Ut;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Ut||(Ut={}));function xc(e){if(!e)if(mt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Tc(e)}const Dc=/^[^#]+#/;function Lc(e,t){return e.replace(Dc,"#")+t}function Wc(e,t){const n=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:t.behavior,left:o.left-n.left-(t.left||0),top:o.top-n.top-(t.top||0)}}const Tn=()=>({left:window.scrollX,top:window.scrollY});function Rc(e){let t;if("el"in e){const n=e.el,o=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?o?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Wc(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function rs(e,t){return(history.state?history.state.position-t:-1)+e}const Jn=new Map;function Nc(e,t){Jn.set(e,t)}function Oc(e){const t=Jn.get(e);return Jn.delete(e),t}let Hc=()=>location.protocol+"//"+location.host;function Cr(e,t){const{pathname:n,search:o,hash:s}=t,r=e.indexOf("#");if(r>-1){let a=s.includes(e.slice(r))?e.slice(r).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),os(c,"")}return os(n,e)+o+s}function Mc(e,t,n,o){let s=[],r=[],i=null;const a=({state:m})=>{const g=Cr(e,location),W=n.value,C=t.value;let k=0;if(m){if(n.value=g,t.value=m,i&&i===W){i=null;return}k=C?m.position-C.position:0}else o(g);s.forEach(O=>{O(n.value,W,{delta:k,type:qt.pop,direction:k?k>0?Ut.forward:Ut.back:Ut.unknown})})};function c(){i=n.value}function f(m){s.push(m);const g=()=>{const W=s.indexOf(m);W>-1&&s.splice(W,1)};return r.push(g),g}function d(){const{history:m}=window;m.state&&m.replaceState(Q({},m.state,{scroll:Tn()}),"")}function p(){for(const m of r)m();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:f,destroy:p}}function is(e,t,n,o=!1,s=!1){return{back:e,current:t,forward:n,replaced:o,position:window.history.length,scroll:s?Tn():null}}function Uc(e){const{history:t,location:n}=window,o={value:Cr(e,n)},s={value:t.state};s.value||r(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(c,f,d){const p=e.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+c:Hc()+e+c;try{t[d?"replaceState":"pushState"](f,"",m),s.value=f}catch(g){console.error(g),n[d?"replace":"assign"](m)}}function i(c,f){const d=Q({},t.state,is(s.value.back,c,s.value.forward,!0),f,{position:s.value.position});r(c,d,!0),o.value=c}function a(c,f){const d=Q({},s.value,t.state,{forward:c,scroll:Tn()});r(d.current,d,!0);const p=Q({},is(o.value,c,null),{position:d.position+1},f);r(c,p,!1),o.value=c}return{location:o,state:s,push:a,replace:i}}function kc(e){e=xc(e);const t=Uc(e),n=Mc(e,t.state,t.location,t.replace);function o(r,i=!0){i||n.pauseListeners(),history.go(r)}const s=Q({location:"",base:e,go:o,createHref:Lc.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Fc(e){return typeof e=="string"||e&&typeof e=="object"}function xr(e){return typeof e=="string"||typeof e=="symbol"}const Dr=Symbol("");var ls;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ls||(ls={}));function It(e,t){return Q(new Error,{type:e,[Dr]:!0},t)}function He(e,t){return e instanceof Error&&Dr in e&&(t==null||!!(e.type&t))}const cs="[^/]+?",Gc={sensitive:!1,strict:!1,start:!0,end:!0},Kc=/[.+*?^${}()[\]/\\]/g;function jc(e,t){const n=Q({},Gc,t),o=[];let s=n.start?"^":"";const r=[];for(const f of e){const d=f.length?[]:[90];n.strict&&!f.length&&(s+="/");for(let p=0;p<f.length;p++){const m=f[p];let g=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(Kc,"\\$&"),g+=40;else if(m.type===1){const{value:W,repeatable:C,optional:k,regexp:O}=m;r.push({name:W,repeatable:C,optional:k});const N=O||cs;if(N!==cs){g+=10;try{new RegExp(`(${N})`)}catch(j){throw new Error(`Invalid custom RegExp for param "${W}" (${N}): `+j.message)}}let x=C?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;p||(x=k&&f.length<2?`(?:/${x})`:"/"+x),k&&(x+="?"),s+=x,g+=20,k&&(g+=-8),C&&(g+=-20),N===".*"&&(g+=-50)}d.push(g)}o.push(d)}if(n.strict&&n.end){const f=o.length-1;o[f][o[f].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const i=new RegExp(s,n.sensitive?"":"i");function a(f){const d=f.match(i),p={};if(!d)return null;for(let m=1;m<d.length;m++){const g=d[m]||"",W=r[m-1];p[W.name]=g&&W.repeatable?g.split("/"):g}return p}function c(f){let d="",p=!1;for(const m of e){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const g of m)if(g.type===0)d+=g.value;else if(g.type===1){const{value:W,repeatable:C,optional:k}=g,O=W in f?f[W]:"";if(Ee(O)&&!C)throw new Error(`Provided param "${W}" is an array but it is not repeatable (* or + modifiers)`);const N=Ee(O)?O.join("/"):O;if(!N)if(k)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${W}"`);d+=N}}return d||"/"}return{re:i,score:o,keys:r,parse:a,stringify:c}}function Vc(e,t){let n=0;for(;n<e.length&&n<t.length;){const o=t[n]-e[n];if(o)return o;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Lr(e,t){let n=0;const o=e.score,s=t.score;for(;n<o.length&&n<s.length;){const r=Vc(o[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-o.length)===1){if(as(o))return 1;if(as(s))return-1}return s.length-o.length}function as(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const qc={type:0,value:""},zc=/[a-zA-Z0-9_]/;function $c(e){if(!e)return[[]];if(e==="/")return[[qc]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${f}": ${g}`)}let n=0,o=n;const s=[];let r;function i(){r&&s.push(r),r=[]}let a=0,c,f="",d="";function p(){f&&(n===0?r.push({type:0,value:f}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:f,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),f="")}function m(){f+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){o=n,n=4;continue}switch(n){case 0:c==="/"?(f&&p(),i()):c===":"?(p(),n=1):m();break;case 4:m(),n=o;break;case 1:c==="("?n=2:zc.test(c)?m():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,d="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),p(),i(),s}function Qc(e,t,n){const o=jc($c(e.path),n),s=Q(o,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Jc(e,t){const n=[],o=new Map;t=ds({strict:!1,end:!0,sensitive:!1},t);function s(p){return o.get(p)}function r(p,m,g){const W=!g,C=Bc(p);C.aliasOf=g&&g.record;const k=ds(t,p),O=[C];if("alias"in p){const j=typeof p.alias=="string"?[p.alias]:p.alias;for(const te of j)O.push(Q({},C,{components:g?g.record.components:C.components,path:te,aliasOf:g?g.record:C}))}let N,x;for(const j of O){const{path:te}=j;if(m&&te[0]!=="/"){const F=m.record.path,X=F[F.length-1]==="/"?"":"/";j.path=m.record.path+(te&&X+te)}if(N=Qc(j,m,k),g?g.alias.push(N):(x=x||N,x!==N&&x.alias.push(N),W&&p.name&&!fs(N)&&i(p.name)),Wr(N)&&c(N),C.children){const F=C.children;for(let X=0;X<F.length;X++)r(F[X],N,g&&g.children[X])}g=g||N}return x?()=>{i(x)}:Mt}function i(p){if(xr(p)){const m=o.get(p);m&&(o.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(i),m.alias.forEach(i))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&o.delete(p.record.name),p.children.forEach(i),p.alias.forEach(i))}}function a(){return n}function c(p){const m=Xc(p,n);n.splice(m,0,p),p.record.name&&!fs(p)&&o.set(p.record.name,p)}function f(p,m){let g,W={},C,k;if("name"in p&&p.name){if(g=o.get(p.name),!g)throw It(1,{location:p});k=g.record.name,W=Q(us(m.params,g.keys.filter(x=>!x.optional).concat(g.parent?g.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),p.params&&us(p.params,g.keys.map(x=>x.name))),C=g.stringify(W)}else if(p.path!=null)C=p.path,g=n.find(x=>x.re.test(C)),g&&(W=g.parse(C),k=g.record.name);else{if(g=m.name?o.get(m.name):n.find(x=>x.re.test(m.path)),!g)throw It(1,{location:p,currentLocation:m});k=g.record.name,W=Q({},m.params,p.params),C=g.stringify(W)}const O=[];let N=g;for(;N;)O.unshift(N.record),N=N.parent;return{name:k,path:C,params:W,matched:O,meta:Yc(O)}}e.forEach(p=>r(p));function d(){n.length=0,o.clear()}return{addRoute:r,resolve:f,removeRoute:i,clearRoutes:d,getRoutes:a,getRecordMatcher:s}}function us(e,t){const n={};for(const o of t)o in e&&(n[o]=e[o]);return n}function Bc(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Zc(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Zc(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const o in e.components)t[o]=typeof n=="object"?n[o]:n;return t}function fs(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Yc(e){return e.reduce((t,n)=>Q(t,n.meta),{})}function ds(e,t){const n={};for(const o in e)n[o]=o in t?t[o]:e[o];return n}function Xc(e,t){let n=0,o=t.length;for(;n!==o;){const r=n+o>>1;Lr(e,t[r])<0?o=r:n=r+1}const s=ea(e);return s&&(o=t.lastIndexOf(s,o-1)),o}function ea(e){let t=e;for(;t=t.parent;)if(Wr(t)&&Lr(e,t)===0)return t}function Wr({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function ta(e){const t={};if(e===""||e==="?")return t;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<o.length;++s){const r=o[s].replace(Pr," "),i=r.indexOf("="),a=Vt(i<0?r:r.slice(0,i)),c=i<0?null:Vt(r.slice(i+1));if(a in t){let f=t[a];Ee(f)||(f=t[a]=[f]),f.push(c)}else t[a]=c}return t}function ps(e){let t="";for(let n in e){const o=e[n];if(n=vc(n),o==null){o!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ee(o)?o.map(r=>r&&Qn(r)):[o&&Qn(o)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function na(e){const t={};for(const n in e){const o=e[n];o!==void 0&&(t[n]=Ee(o)?o.map(s=>s==null?null:""+s):o==null?o:""+o)}return t}const oa=Symbol(""),hs=Symbol(""),vo=Symbol(""),Rr=Symbol(""),Bn=Symbol("");function Ct(){let e=[];function t(o){return e.push(o),()=>{const s=e.indexOf(o);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function $e(e,t,n,o,s,r=i=>i()){const i=o&&(o.enterCallbacks[s]=o.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const f=m=>{m===!1?c(It(4,{from:n,to:t})):m instanceof Error?c(m):Fc(m)?c(It(2,{from:t,to:m})):(i&&o.enterCallbacks[s]===i&&typeof m=="function"&&i.push(m),a())},d=r(()=>e.call(o&&o.instances[s],t,n,f));let p=Promise.resolve(d);e.length<3&&(p=p.then(f)),p.catch(m=>c(m))})}function On(e,t,n,o,s=r=>r()){const r=[];for(const i of e)for(const a in i.components){let c=i.components[a];if(!(t!=="beforeRouteEnter"&&!i.instances[a]))if(sa(c)){const d=(c.__vccOpts||c)[t];d&&r.push($e(d,n,o,i,a,s))}else{let f=c();r.push(()=>f.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${i.path}"`));const p=ac(d)?d.default:d;i.components[a]=p;const g=(p.__vccOpts||p)[t];return g&&$e(g,n,o,i,a,s)()}))}}return r}function sa(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function ms(e){const t=ke(vo),n=ke(Rr),o=Pe(()=>{const c=lt(e.to);return t.resolve(c)}),s=Pe(()=>{const{matched:c}=o.value,{length:f}=c,d=c[f-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(wt.bind(null,d));if(m>-1)return m;const g=gs(c[f-2]);return f>1&&gs(d)===g&&p[p.length-1].path!==g?p.findIndex(wt.bind(null,c[f-2])):m}),r=Pe(()=>s.value>-1&&ca(n.params,o.value.params)),i=Pe(()=>s.value>-1&&s.value===n.matched.length-1&&Er(n.params,o.value.params));function a(c={}){return la(c)?t[lt(e.replace)?"replace":"push"](lt(e.to)).catch(Mt):Promise.resolve()}return{route:o,href:Pe(()=>o.value.href),isActive:r,isExactActive:i,navigate:a}}const ra=Bs({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ms,setup(e,{slots:t}){const n=bn(ms(e)),{options:o}=ke(vo),s=Pe(()=>({[bs(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[bs(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&t.default(n);return e.custom?r:wr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),ia=ra;function la(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function ca(e,t){for(const n in t){const o=t[n],s=e[n];if(typeof o=="string"){if(o!==s)return!1}else if(!Ee(s)||s.length!==o.length||o.some((r,i)=>r!==s[i]))return!1}return!0}function gs(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const bs=(e,t,n)=>e??t??n,aa=Bs({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const o=ke(Bn),s=Pe(()=>e.route||o.value),r=ke(hs,0),i=Pe(()=>{let f=lt(r);const{matched:d}=s.value;let p;for(;(p=d[f])&&!p.components;)f++;return f}),a=Pe(()=>s.value.matched[i.value]);on(hs,Pe(()=>i.value+1)),on(oa,a),on(Bn,s);const c=Gs();return sn(()=>[c.value,a.value,e.name],([f,d,p],[m,g,W])=>{d&&(d.instances[p]=f,g&&g!==d&&f&&f===m&&(d.leaveGuards.size||(d.leaveGuards=g.leaveGuards),d.updateGuards.size||(d.updateGuards=g.updateGuards))),f&&d&&(!g||!wt(d,g)||!m)&&(d.enterCallbacks[p]||[]).forEach(C=>C(f))},{flush:"post"}),()=>{const f=s.value,d=e.name,p=a.value,m=p&&p.components[d];if(!m)return ys(n.default,{Component:m,route:f});const g=p.props[d],W=g?g===!0?f.params:typeof g=="function"?g(f):g:null,k=wr(m,Q({},W,t,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return ys(n.default,{Component:k,route:f})||k}}});function ys(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Nr=aa;function ua(e){const t=Jc(e.routes,e),n=e.parseQuery||ta,o=e.stringifyQuery||ps,s=e.history,r=Ct(),i=Ct(),a=Ct(),c=_i(Ve);let f=Ve;mt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Rn.bind(null,y=>""+y),p=Rn.bind(null,Ic),m=Rn.bind(null,Vt);function g(y,S){let A,D;return xr(y)?(A=t.getRecordMatcher(y),D=S):D=y,t.addRoute(D,A)}function W(y){const S=t.getRecordMatcher(y);S&&t.removeRoute(S)}function C(){return t.getRoutes().map(y=>y.record)}function k(y){return!!t.getRecordMatcher(y)}function O(y,S){if(S=Q({},S||c.value),typeof y=="string"){const u=Nn(n,y,S.path),h=t.resolve({path:u.path},S),_=s.createHref(u.fullPath);return Q(u,h,{params:m(h.params),hash:Vt(u.hash),redirectedFrom:void 0,href:_})}let A;if(y.path!=null)A=Q({},y,{path:Nn(n,y.path,S.path).path});else{const u=Q({},y.params);for(const h in u)u[h]==null&&delete u[h];A=Q({},y,{params:p(u)}),S.params=p(S.params)}const D=t.resolve(A,S),$=y.hash||"";D.params=d(m(D.params));const Z=Ac(o,Q({},y,{hash:_c($),path:D.path})),l=s.createHref(Z);return Q({fullPath:Z,hash:$,query:o===ps?na(y.query):y.query||{}},D,{redirectedFrom:void 0,href:l})}function N(y){return typeof y=="string"?Nn(n,y,c.value.path):Q({},y)}function x(y,S){if(f!==y)return It(8,{from:S,to:y})}function j(y){return X(y)}function te(y){return j(Q(N(y),{replace:!0}))}function F(y){const S=y.matched[y.matched.length-1];if(S&&S.redirect){const{redirect:A}=S;let D=typeof A=="function"?A(y):A;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=N(D):{path:D},D.params={}),Q({query:y.query,hash:y.hash,params:D.path!=null?{}:y.params},D)}}function X(y,S){const A=f=O(y),D=c.value,$=y.state,Z=y.force,l=y.replace===!0,u=F(A);if(u)return X(Q(N(u),{state:typeof u=="object"?Q({},$,u.state):$,force:Z,replace:l}),S||A);const h=A;h.redirectedFrom=S;let _;return!Z&&Sc(o,D,A)&&(_=It(16,{to:h,from:D}),De(D,D,!0,!1)),(_?Promise.resolve(_):Ce(h,D)).catch(b=>He(b)?He(b,2)?b:Ke(b):V(b,h,D)).then(b=>{if(b){if(He(b,2))return X(Q({replace:l},N(b.to),{state:typeof b.to=="object"?Q({},$,b.to.state):$,force:Z}),S||h)}else b=et(h,D,!0,l,$);return Ge(h,D,b),b})}function ye(y,S){const A=x(y,S);return A?Promise.reject(A):Promise.resolve()}function Xe(y){const S=pt.values().next().value;return S&&typeof S.runWithContext=="function"?S.runWithContext(y):y()}function Ce(y,S){let A;const[D,$,Z]=fa(y,S);A=On(D.reverse(),"beforeRouteLeave",y,S);for(const u of D)u.leaveGuards.forEach(h=>{A.push($e(h,y,S))});const l=ye.bind(null,y,S);return A.push(l),_e(A).then(()=>{A=[];for(const u of r.list())A.push($e(u,y,S));return A.push(l),_e(A)}).then(()=>{A=On($,"beforeRouteUpdate",y,S);for(const u of $)u.updateGuards.forEach(h=>{A.push($e(h,y,S))});return A.push(l),_e(A)}).then(()=>{A=[];for(const u of Z)if(u.beforeEnter)if(Ee(u.beforeEnter))for(const h of u.beforeEnter)A.push($e(h,y,S));else A.push($e(u.beforeEnter,y,S));return A.push(l),_e(A)}).then(()=>(y.matched.forEach(u=>u.enterCallbacks={}),A=On(Z,"beforeRouteEnter",y,S,Xe),A.push(l),_e(A))).then(()=>{A=[];for(const u of i.list())A.push($e(u,y,S));return A.push(l),_e(A)}).catch(u=>He(u,8)?u:Promise.reject(u))}function Ge(y,S,A){a.list().forEach(D=>Xe(()=>D(y,S,A)))}function et(y,S,A,D,$){const Z=x(y,S);if(Z)return Z;const l=S===Ve,u=mt?history.state:{};A&&(D||l?s.replace(y.fullPath,Q({scroll:l&&u&&u.scroll},$)):s.push(y.fullPath,$)),c.value=y,De(y,S,A,l),Ke()}let xe;function At(){xe||(xe=s.listen((y,S,A)=>{if(!Qt.listening)return;const D=O(y),$=F(D);if($){X(Q($,{replace:!0}),D).catch(Mt);return}f=D;const Z=c.value;mt&&Nc(rs(Z.fullPath,A.delta),Tn()),Ce(D,Z).catch(l=>He(l,12)?l:He(l,2)?(X(l.to,D).then(u=>{He(u,20)&&!A.delta&&A.type===qt.pop&&s.go(-1,!1)}).catch(Mt),Promise.reject()):(A.delta&&s.go(-A.delta,!1),V(l,D,Z))).then(l=>{l=l||et(D,Z,!1),l&&(A.delta&&!He(l,8)?s.go(-A.delta,!1):A.type===qt.pop&&He(l,20)&&s.go(-1,!1)),Ge(D,Z,l)}).catch(Mt)}))}let ft=Ct(),oe=Ct(),J;function V(y,S,A){Ke(y);const D=oe.list();return D.length?D.forEach($=>$(y,S,A)):console.error(y),Promise.reject(y)}function Oe(){return J&&c.value!==Ve?Promise.resolve():new Promise((y,S)=>{ft.add([y,S])})}function Ke(y){return J||(J=!y,At(),ft.list().forEach(([S,A])=>y?A(y):S()),ft.reset()),y}function De(y,S,A,D){const{scrollBehavior:$}=e;if(!mt||!$)return Promise.resolve();const Z=!A&&Oc(rs(y.fullPath,0))||(D||!A)&&history.state&&history.state.scroll||null;return qs().then(()=>$(y,S,Z)).then(l=>l&&Rc(l)).catch(l=>V(l,y,S))}const fe=y=>s.go(y);let dt;const pt=new Set,Qt={currentRoute:c,listening:!0,addRoute:g,removeRoute:W,clearRoutes:t.clearRoutes,hasRoute:k,getRoutes:C,resolve:O,options:e,push:j,replace:te,go:fe,back:()=>fe(-1),forward:()=>fe(1),beforeEach:r.add,beforeResolve:i.add,afterEach:a.add,onError:oe.add,isReady:Oe,install(y){const S=this;y.component("RouterLink",ia),y.component("RouterView",Nr),y.config.globalProperties.$router=S,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>lt(c)}),mt&&!dt&&c.value===Ve&&(dt=!0,j(s.location).catch($=>{}));const A={};for(const $ in Ve)Object.defineProperty(A,$,{get:()=>c.value[$],enumerable:!0});y.provide(vo,S),y.provide(Rr,Os(A)),y.provide(Bn,c);const D=y.unmount;pt.add(y),y.unmount=function(){pt.delete(y),pt.size<1&&(f=Ve,xe&&xe(),xe=null,c.value=Ve,dt=!1,J=!1),D()}}};function _e(y){return y.reduce((S,A)=>S.then(()=>Xe(A)),Promise.resolve())}return Qt}function fa(e,t){const n=[],o=[],s=[],r=Math.max(t.matched.length,e.matched.length);for(let i=0;i<r;i++){const a=t.matched[i];a&&(e.matched.find(f=>wt(f,a))?o.push(a):n.push(a));const c=e.matched[i];c&&(t.matched.find(f=>wt(f,c))||s.push(c))}return[n,o,s]}const $t=(e,t)=>{const n=e.__vccOpts||e;for(const[o,s]of t)n[o]=s;return n},da={__name:"App",setup(e){return(t,n)=>(ut(),vl(lt(Nr)))}},pa=$t(da,[["__scopeId","data-v-0b57781d"]]),ha={class:"app-header"},ma={class:"container"},ga={class:"app-header-nav"},ba={class:"home"},ya={__name:"LayoutHeader",setup(e){return(t,n)=>{const o=er("RouterLink");return ut(),Tt("header",ha,[ie("div",ma,[ie("ul",ga,[ie("li",ba,[ne(o,{to:"/"},{default:xt(()=>[Lt("首頁")]),_:1})]),ie("li",null,[ne(o,{to:"/"},{default:xt(()=>[Lt("WebAPI")]),_:1})]),ie("li",null,[ne(o,{to:"/vue3"},{default:xt(()=>[Lt("Vue3")]),_:1})]),ie("li",null,[ne(o,{to:"/download"},{default:xt(()=>[Lt("下載")]),_:1})])])])])}}},_a=$t(ya,[["__scopeId","data-v-8750dd39"]]),va={__name:"index",setup(e){return(t,n)=>{const o=er("RouterView");return ut(),Tt(ge,null,[ne(_a),ne(o)],64)}}},wa="/vue-my-note/assets/uparrow-CelNzM_b.png",Ia={name:"scroll-top",data(){return{scrollTop:0,time:0,dParams:20,scrollState:0}},computed:{showTop:function(){return this.scrollTop>200}},mounted(){window.addEventListener("scroll",this.getScrollTop)},methods:{toTop(e){if(this.scrollState)return;this.scrollState=1,e.preventDefault(),document.documentElement.scrollTop||document.body.scrollTop;let t=this;this.time=setInterval(function(){t.gotoTop(t.scrollTop-t.dParams)},30)},gotoTop(e){this.dParams+=20,e=e>0?e:0,document.documentElement.scrollTop=document.body.scrollTop=window.pageYOffset=e,this.scrollTop<10&&(clearInterval(this.time),this.dParams=20,this.scrollState=0)},getScrollTop(){this.scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop}}},Pa=e=>(po("data-v-77d80545"),e=e(),ho(),e),Ta=Pa(()=>ie("img",{src:wa},null,-1)),Aa=[Ta];function Sa(e,t,n,o,s,r){return ut(),Tt("div",{class:"scrollTop",onClick:t[0]||(t[0]=(...i)=>r.toTop&&r.toTop(...i))},Aa)}const fn=$t(Ia,[["render",Sa],["__scopeId","data-v-77d80545"]]),Ea=e=>(po("data-v-862214ea"),e=e(),ho(),e),Ca=Ea(()=>ie("div",null,"我是WebAPI頁面",-1)),xa=`
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
  `,Da={__name:"index",setup(e){return fn.scrollToTop=!0,(t,n)=>(ut(),Tt(ge,null,[Ca,ie("div",null,[ie("div",{innerHTML:xa})]),ne(fn)],64))}},La=$t(Da,[["__scopeId","data-v-862214ea"]]),Wa=ie("div",null,"我是RabbitVue3頁面",-1),Ra=`
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
`,Na={__name:"index",setup(e){return fn.scrollToTop=!0,(t,n)=>(ut(),Tt(ge,null,[Wa,ie("div",{innerHTML:Ra}),ne(fn)],64))}},Oa=e=>(po("data-v-d7f0861c"),e=e(),ho(),e),Ha=Oa(()=>ie("div",null,"我是Download頁面",-1)),Ma=`
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
`,Ua={__name:"index",setup(e){return(t,n)=>(ut(),Tt(ge,null,[Ha,ie("div",{innerHTML:Ma})],64))}},ka=$t(Ua,[["__scopeId","data-v-d7f0861c"]]),Fa=ua({history:kc("/vue-my-note/"),routes:[{path:"/",component:va,children:[{path:"",component:La},{path:"/vue3",component:Na},{path:"/download",component:ka}]}]}),wo=oc(pa);wo.use(cc());wo.use(Fa);wo.mount("#app");
