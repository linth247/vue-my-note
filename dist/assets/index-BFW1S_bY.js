(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function yo(e,t){const n=new Set(e.split(","));return o=>n.has(o)}const ce={},Wt=[],Ue=()=>{},wi=()=>!1,xn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),_o=e=>e.startsWith("onUpdate:"),be=Object.assign,wo=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ai=Object.prototype.hasOwnProperty,q=(e,t)=>Ai.call(e,t),H=Array.isArray,Mt=e=>En(e)==="[object Map]",zs=e=>En(e)==="[object Set]",V=e=>typeof e=="function",pe=e=>typeof e=="string",gt=e=>typeof e=="symbol",ae=e=>e!==null&&typeof e=="object",Js=e=>(ae(e)||V(e))&&V(e.then)&&V(e.catch),Qs=Object.prototype.toString,En=e=>Qs.call(e),Ii=e=>En(e).slice(8,-1),Zs=e=>En(e)==="[object Object]",Ao=e=>pe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,qt=yo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Dn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Si=/-(\w)/g,Ve=Dn(e=>e.replace(Si,(t,n)=>n?n.toUpperCase():"")),Ti=/\B([A-Z])/g,Dt=Dn(e=>e.replace(Ti,"-$1").toLowerCase()),Ln=Dn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Gn=Dn(e=>e?`on${Ln(e)}`:""),ht=(e,t)=>!Object.is(e,t),jn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Ys=(e,t,n,o=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:o,value:n})},Pi=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Ci=e=>{const t=pe(e)?Number(e):NaN;return isNaN(t)?e:t};let qo;const Xs=()=>qo||(qo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Io(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],s=pe(o)?Li(o):Io(o);if(s)for(const r in s)t[r]=s[r]}return t}else if(pe(e)||ae(e))return e}const xi=/;(?![^(]*\))/g,Ei=/:([^]+)/,Di=/\/\*[^]*?\*\//g;function Li(e){const t={};return e.replace(Di,"").split(xi).forEach(n=>{if(n){const o=n.split(Ei);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function So(e){let t="";if(pe(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const o=So(e[n]);o&&(t+=o+" ")}else if(ae(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ki="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ui=yo(ki);function er(e){return!!e||e===""}const tr=e=>!!(e&&e.__v_isRef===!0),Lt=e=>pe(e)?e:e==null?"":H(e)||ae(e)&&(e.toString===Qs||!V(e.toString))?tr(e)?Lt(e.value):JSON.stringify(e,nr,2):String(e),nr=(e,t)=>tr(t)?nr(e,t.value):Mt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,s],r)=>(n[Kn(o,r)+" =>"]=s,n),{})}:zs(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Kn(n))}:gt(t)?Kn(t):ae(t)&&!H(t)&&!Zs(t)?String(t):t,Kn=(e,t="")=>{var n;return gt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Be;class or{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Be,!t&&Be&&(this.index=(Be.scopes||(Be.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Be;try{return Be=this,t()}finally{Be=n}}}on(){Be=this}off(){Be=this.parent}stop(t){if(this._active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Ri(e){return new or(e)}function Ni(e,t=Be){t&&t.active&&t.effects.push(e)}function Wi(){return Be}let Pt;class To{constructor(t,n,o,s){this.fn=t,this.trigger=n,this.scheduler=o,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Ni(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,bt();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(Mi(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),vt()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=ft,n=Pt;try{return ft=!0,Pt=this,this._runnings++,zo(this),this.fn()}finally{Jo(this),this._runnings--,Pt=n,ft=t}}stop(){this.active&&(zo(this),Jo(this),this.onStop&&this.onStop(),this.active=!1)}}function Mi(e){return e.value}function zo(e){e._trackId++,e._depsLength=0}function Jo(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)sr(e.deps[t],e);e.deps.length=e._depsLength}}function sr(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let ft=!0,no=0;const rr=[];function bt(){rr.push(ft),ft=!1}function vt(){const e=rr.pop();ft=e===void 0?!0:e}function Po(){no++}function Co(){for(no--;!no&&oo.length;)oo.shift()()}function ir(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const o=e.deps[e._depsLength];o!==t?(o&&sr(o,e),e.deps[e._depsLength++]=t):e._depsLength++}}const oo=[];function ar(e,t,n){Po();for(const o of e.keys()){let s;o._dirtyLevel<t&&(s??(s=e.get(o)===o._trackId))&&(o._shouldSchedule||(o._shouldSchedule=o._dirtyLevel===0),o._dirtyLevel=t),o._shouldSchedule&&(s??(s=e.get(o)===o._trackId))&&(o.trigger(),(!o._runnings||o.allowRecurse)&&o._dirtyLevel!==2&&(o._shouldSchedule=!1,o.scheduler&&oo.push(o.scheduler)))}Co()}const lr=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},so=new WeakMap,Ct=Symbol(""),ro=Symbol("");function Ce(e,t,n){if(ft&&Pt){let o=so.get(e);o||so.set(e,o=new Map);let s=o.get(n);s||o.set(n,s=lr(()=>o.delete(n))),ir(Pt,s)}}function et(e,t,n,o,s,r){const i=so.get(e);if(!i)return;let c=[];if(t==="clear")c=[...i.values()];else if(n==="length"&&H(e)){const a=Number(o);i.forEach((d,f)=>{(f==="length"||!gt(f)&&f>=a)&&c.push(d)})}else switch(n!==void 0&&c.push(i.get(n)),t){case"add":H(e)?Ao(n)&&c.push(i.get("length")):(c.push(i.get(Ct)),Mt(e)&&c.push(i.get(ro)));break;case"delete":H(e)||(c.push(i.get(Ct)),Mt(e)&&c.push(i.get(ro)));break;case"set":Mt(e)&&c.push(i.get(Ct));break}Po();for(const a of c)a&&ar(a,4);Co()}const Oi=yo("__proto__,__v_isRef,__isVue"),cr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(gt)),Qo=Hi();function Hi(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const o=J(this);for(let r=0,i=this.length;r<i;r++)Ce(o,"get",r+"");const s=o[t](...n);return s===-1||s===!1?o[t](...n.map(J)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){bt(),Po();const o=J(this)[t].apply(this,n);return Co(),vt(),o}}),e}function Bi(e){gt(e)||(e=String(e));const t=J(this);return Ce(t,"has",e),t.hasOwnProperty(e)}class ur{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,o){const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return o===(s?r?Xi:hr:r?pr:fr).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(o)?t:void 0;const i=H(t);if(!s){if(i&&q(Qo,n))return Reflect.get(Qo,n,o);if(n==="hasOwnProperty")return Bi}const c=Reflect.get(t,n,o);return(gt(n)?cr.has(n):Oi(n))||(s||Ce(t,"get",n),r)?c:Se(c)?i&&Ao(n)?c:c.value:ae(c)?s?gr(c):Un(c):c}}class dr extends ur{constructor(t=!1){super(!1,t)}set(t,n,o,s){let r=t[n];if(!this._isShallow){const a=xt(r);if(!Bt(o)&&!xt(o)&&(r=J(r),o=J(o)),!H(t)&&Se(r)&&!Se(o))return a?!1:(r.value=o,!0)}const i=H(t)&&Ao(n)?Number(n)<t.length:q(t,n),c=Reflect.set(t,n,o,s);return t===J(s)&&(i?ht(o,r)&&et(t,"set",n,o):et(t,"add",n,o)),c}deleteProperty(t,n){const o=q(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&o&&et(t,"delete",n,void 0),s}has(t,n){const o=Reflect.has(t,n);return(!gt(n)||!cr.has(n))&&Ce(t,"has",n),o}ownKeys(t){return Ce(t,"iterate",H(t)?"length":Ct),Reflect.ownKeys(t)}}class Fi extends ur{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Vi=new dr,Gi=new Fi,ji=new dr(!0);const xo=e=>e,kn=e=>Reflect.getPrototypeOf(e);function un(e,t,n=!1,o=!1){e=e.__v_raw;const s=J(e),r=J(t);n||(ht(t,r)&&Ce(s,"get",t),Ce(s,"get",r));const{has:i}=kn(s),c=o?xo:n?Lo:Xt;if(i.call(s,t))return c(e.get(t));if(i.call(s,r))return c(e.get(r));e!==s&&e.get(t)}function dn(e,t=!1){const n=this.__v_raw,o=J(n),s=J(e);return t||(ht(e,s)&&Ce(o,"has",e),Ce(o,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function fn(e,t=!1){return e=e.__v_raw,!t&&Ce(J(e),"iterate",Ct),Reflect.get(e,"size",e)}function Zo(e,t=!1){!t&&!Bt(e)&&!xt(e)&&(e=J(e));const n=J(this);return kn(n).has.call(n,e)||(n.add(e),et(n,"add",e,e)),this}function Yo(e,t,n=!1){!n&&!Bt(t)&&!xt(t)&&(t=J(t));const o=J(this),{has:s,get:r}=kn(o);let i=s.call(o,e);i||(e=J(e),i=s.call(o,e));const c=r.call(o,e);return o.set(e,t),i?ht(t,c)&&et(o,"set",e,t):et(o,"add",e,t),this}function Xo(e){const t=J(this),{has:n,get:o}=kn(t);let s=n.call(t,e);s||(e=J(e),s=n.call(t,e)),o&&o.call(t,e);const r=t.delete(e);return s&&et(t,"delete",e,void 0),r}function es(){const e=J(this),t=e.size!==0,n=e.clear();return t&&et(e,"clear",void 0,void 0),n}function pn(e,t){return function(o,s){const r=this,i=r.__v_raw,c=J(i),a=t?xo:e?Lo:Xt;return!e&&Ce(c,"iterate",Ct),i.forEach((d,f)=>o.call(s,a(d),a(f),r))}}function hn(e,t,n){return function(...o){const s=this.__v_raw,r=J(s),i=Mt(r),c=e==="entries"||e===Symbol.iterator&&i,a=e==="keys"&&i,d=s[e](...o),f=n?xo:t?Lo:Xt;return!t&&Ce(r,"iterate",a?ro:Ct),{next(){const{value:p,done:h}=d.next();return h?{value:p,done:h}:{value:c?[f(p[0]),f(p[1])]:f(p),done:h}},[Symbol.iterator](){return this}}}}function st(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Ki(){const e={get(r){return un(this,r)},get size(){return fn(this)},has:dn,add:Zo,set:Yo,delete:Xo,clear:es,forEach:pn(!1,!1)},t={get(r){return un(this,r,!1,!0)},get size(){return fn(this)},has:dn,add(r){return Zo.call(this,r,!0)},set(r,i){return Yo.call(this,r,i,!0)},delete:Xo,clear:es,forEach:pn(!1,!0)},n={get(r){return un(this,r,!0)},get size(){return fn(this,!0)},has(r){return dn.call(this,r,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:pn(!0,!1)},o={get(r){return un(this,r,!0,!0)},get size(){return fn(this,!0)},has(r){return dn.call(this,r,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:pn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=hn(r,!1,!1),n[r]=hn(r,!0,!1),t[r]=hn(r,!1,!0),o[r]=hn(r,!0,!0)}),[e,n,t,o]}const[$i,qi,zi,Ji]=Ki();function Eo(e,t){const n=t?e?Ji:zi:e?qi:$i;return(o,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?o:Reflect.get(q(n,s)&&s in o?n:o,s,r)}const Qi={get:Eo(!1,!1)},Zi={get:Eo(!1,!0)},Yi={get:Eo(!0,!1)};const fr=new WeakMap,pr=new WeakMap,hr=new WeakMap,Xi=new WeakMap;function ea(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ta(e){return e.__v_skip||!Object.isExtensible(e)?0:ea(Ii(e))}function Un(e){return xt(e)?e:Do(e,!1,Vi,Qi,fr)}function mr(e){return Do(e,!1,ji,Zi,pr)}function gr(e){return Do(e,!0,Gi,Yi,hr)}function Do(e,t,n,o,s){if(!ae(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=s.get(e);if(r)return r;const i=ta(e);if(i===0)return e;const c=new Proxy(e,i===2?o:n);return s.set(e,c),c}function zt(e){return xt(e)?zt(e.__v_raw):!!(e&&e.__v_isReactive)}function xt(e){return!!(e&&e.__v_isReadonly)}function Bt(e){return!!(e&&e.__v_isShallow)}function br(e){return e?!!e.__v_raw:!1}function J(e){const t=e&&e.__v_raw;return t?J(t):e}function vr(e){return Object.isExtensible(e)&&Ys(e,"__v_skip",!0),e}const Xt=e=>ae(e)?Un(e):e,Lo=e=>ae(e)?gr(e):e;class yr{constructor(t,n,o,s){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new To(()=>t(this._value),()=>bn(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=o}get value(){const t=J(this);return(!t._cacheable||t.effect.dirty)&&ht(t._value,t._value=t.effect.run())&&bn(t,4),_r(t),t.effect._dirtyLevel>=2&&bn(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function na(e,t,n=!1){let o,s;const r=V(e);return r?(o=e,s=Ue):(o=e.get,s=e.set),new yr(o,s,r||!s,n)}function _r(e){var t;ft&&Pt&&(e=J(e),ir(Pt,(t=e.dep)!=null?t:e.dep=lr(()=>e.dep=void 0,e instanceof yr?e:void 0)))}function bn(e,t=4,n,o){e=J(e);const s=e.dep;s&&ar(s,t)}function Se(e){return!!(e&&e.__v_isRef===!0)}function Rn(e){return wr(e,!1)}function oa(e){return wr(e,!0)}function wr(e,t){return Se(e)?e:new sa(e,t)}class sa{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:J(t),this._value=n?t:Xt(t)}get value(){return _r(this),this._value}set value(t){const n=this.__v_isShallow||Bt(t)||xt(t);t=n?t:J(t),ht(t,this._rawValue)&&(this._rawValue,this._rawValue=t,this._value=n?t:Xt(t),bn(this,4))}}function Je(e){return Se(e)?e.value:e}const ra={get:(e,t,n)=>Je(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const s=e[t];return Se(s)&&!Se(n)?(s.value=n,!0):Reflect.set(e,t,n,o)}};function Ar(e){return zt(e)?e:new Proxy(e,ra)}/**
* @vue/runtime-core v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function pt(e,t,n,o){try{return o?e(...o):e()}catch(s){Nn(s,t,n)}}function Ne(e,t,n,o){if(V(e)){const s=pt(e,t,n,o);return s&&Js(s)&&s.catch(r=>{Nn(r,t,n)}),s}if(H(e)){const s=[];for(let r=0;r<e.length;r++)s.push(Ne(e[r],t,n,o));return s}}function Nn(e,t,n,o=!0){const s=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const d=r.ec;if(d){for(let f=0;f<d.length;f++)if(d[f](e,i,c)===!1)return}r=r.parent}const a=t.appContext.config.errorHandler;if(a){bt(),pt(a,null,10,[e,i,c]),vt();return}}ia(e,n,s,o)}function ia(e,t,n,o=!0){console.error(e)}let en=!1,io=!1;const we=[];let ze=0;const Ot=[];let lt=null,It=0;const Ir=Promise.resolve();let ko=null;function Sr(e){const t=ko||Ir;return e?t.then(this?e.bind(this):e):t}function aa(e){let t=ze+1,n=we.length;for(;t<n;){const o=t+n>>>1,s=we[o],r=tn(s);r<e||r===e&&s.pre?t=o+1:n=o}return t}function Uo(e){(!we.length||!we.includes(e,en&&e.allowRecurse?ze+1:ze))&&(e.id==null?we.push(e):we.splice(aa(e.id),0,e),Tr())}function Tr(){!en&&!io&&(io=!0,ko=Ir.then(Cr))}function la(e){const t=we.indexOf(e);t>ze&&we.splice(t,1)}function ca(e){H(e)?Ot.push(...e):(!lt||!lt.includes(e,e.allowRecurse?It+1:It))&&Ot.push(e),Tr()}function ts(e,t,n=en?ze+1:0){for(;n<we.length;n++){const o=we[n];if(o&&o.pre){if(e&&o.id!==e.uid)continue;we.splice(n,1),n--,o()}}}function Pr(e){if(Ot.length){const t=[...new Set(Ot)].sort((n,o)=>tn(n)-tn(o));if(Ot.length=0,lt){lt.push(...t);return}for(lt=t,It=0;It<lt.length;It++){const n=lt[It];n.active!==!1&&n()}lt=null,It=0}}const tn=e=>e.id==null?1/0:e.id,ua=(e,t)=>{const n=tn(e)-tn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Cr(e){io=!1,en=!0,we.sort(ua);try{for(ze=0;ze<we.length;ze++){const t=we[ze];t&&t.active!==!1&&pt(t,t.i,t.i?15:14)}}finally{ze=0,we.length=0,Pr(),en=!1,ko=null,(we.length||Ot.length)&&Cr()}}let Re=null,Wn=null;function Sn(e){const t=Re;return Re=e,Wn=e&&e.type.__scopeId||null,t}function We(e){Wn=e}function Me(){Wn=null}function _e(e,t=Re,n){if(!t||e._n)return e;const o=(...s)=>{o._d&&ds(-1);const r=Sn(t);let i;try{i=e(...s)}finally{Sn(r),o._d&&ds(1)}return i};return o._n=!0,o._c=!0,o._d=!0,o}function yt(e,t,n,o){const s=e.dirs,r=t&&t.dirs;for(let i=0;i<s.length;i++){const c=s[i];r&&(c.oldValue=r[i].value);let a=c.dir[o];a&&(bt(),Ne(a,n,8,[e.el,c,e,t]),vt())}}const ct=Symbol("_leaveCb"),mn=Symbol("_enterCb");function da(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Rr(()=>{e.isMounted=!0}),Nr(()=>{e.isUnmounting=!0}),e}const ke=[Function,Array],xr={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ke,onEnter:ke,onAfterEnter:ke,onEnterCancelled:ke,onBeforeLeave:ke,onLeave:ke,onAfterLeave:ke,onLeaveCancelled:ke,onBeforeAppear:ke,onAppear:ke,onAfterAppear:ke,onAppearCancelled:ke},Er=e=>{const t=e.subTree;return t.component?Er(t.component):t},fa={name:"BaseTransition",props:xr,setup(e,{slots:t}){const n=fl(),o=da();return()=>{const s=t.default&&Lr(t.default(),!0);if(!s||!s.length)return;let r=s[0];if(s.length>1){for(const h of s)if(h.type!==Ee){r=h;break}}const i=J(e),{mode:c}=i;if(o.isLeaving)return $n(r);const a=ns(r);if(!a)return $n(r);let d=ao(a,i,o,n,h=>d=h);Tn(a,d);const f=n.subTree,p=f&&ns(f);if(p&&p.type!==Ee&&!Tt(a,p)&&Er(n).type!==Ee){const h=ao(p,i,o,n);if(Tn(p,h),c==="out-in"&&a.type!==Ee)return o.isLeaving=!0,h.afterLeave=()=>{o.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},$n(r);c==="in-out"&&a.type!==Ee&&(h.delayLeave=(g,D,C)=>{const B=Dr(o,p);B[String(p.key)]=p,g[ct]=()=>{D(),g[ct]=void 0,delete d.delayedLeave},d.delayedLeave=C})}return r}}},pa=fa;function Dr(e,t){const{leavingVNodes:n}=e;let o=n.get(t.type);return o||(o=Object.create(null),n.set(t.type,o)),o}function ao(e,t,n,o,s){const{appear:r,mode:i,persisted:c=!1,onBeforeEnter:a,onEnter:d,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:h,onLeave:g,onAfterLeave:D,onLeaveCancelled:C,onBeforeAppear:B,onAppear:M,onAfterAppear:R,onAppearCancelled:L}=t,$=String(e.key),ne=Dr(n,e),O=(j,z)=>{j&&Ne(j,o,9,z)},oe=(j,z)=>{const se=z[1];O(j,z),H(j)?j.every(k=>k.length<=1)&&se():j.length<=1&&se()},he={mode:i,persisted:c,beforeEnter(j){let z=a;if(!n.isMounted)if(r)z=B||a;else return;j[ct]&&j[ct](!0);const se=ne[$];se&&Tt(e,se)&&se.el[ct]&&se.el[ct](),O(z,[j])},enter(j){let z=d,se=f,k=p;if(!n.isMounted)if(r)z=M||d,se=R||f,k=L||p;else return;let Q=!1;const me=j[mn]=Oe=>{Q||(Q=!0,Oe?O(k,[j]):O(se,[j]),he.delayedLeave&&he.delayedLeave(),j[mn]=void 0)};z?oe(z,[j,me]):me()},leave(j,z){const se=String(e.key);if(j[mn]&&j[mn](!0),n.isUnmounting)return z();O(h,[j]);let k=!1;const Q=j[ct]=me=>{k||(k=!0,z(),me?O(C,[j]):O(D,[j]),j[ct]=void 0,ne[se]===e&&delete ne[se])};ne[se]=e,g?oe(g,[j,Q]):Q()},clone(j){const z=ao(j,t,n,o,s);return s&&s(z),z}};return he}function $n(e){if(Mn(e))return e=mt(e),e.children=null,e}function ns(e){if(!Mn(e))return e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&V(n.default))return n.default()}}function Tn(e,t){e.shapeFlag&6&&e.component?Tn(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Lr(e,t=!1,n){let o=[],s=0;for(let r=0;r<e.length;r++){let i=e[r];const c=n==null?i.key:String(n)+String(i.key!=null?i.key:r);i.type===ie?(i.patchFlag&128&&s++,o=o.concat(Lr(i.children,t,c))):(t||i.type!==Ee)&&o.push(c!=null?mt(i,{key:c}):i)}if(s>1)for(let r=0;r<o.length;r++)o[r].patchFlag=-2;return o}/*! #__NO_SIDE_EFFECTS__ */function kr(e,t){return V(e)?be({name:e.name},t,{setup:e}):e}const vn=e=>!!e.type.__asyncLoader,Mn=e=>e.type.__isKeepAlive;function ha(e,t){Ur(e,"a",t)}function ma(e,t){Ur(e,"da",t)}function Ur(e,t,n=ye){const o=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(On(t,o,n),n){let s=n.parent;for(;s&&s.parent;)Mn(s.parent.vnode)&&ga(o,t,n,s),s=s.parent}}function ga(e,t,n,o){const s=On(t,e,o,!0);Wr(()=>{wo(o[t],s)},n)}function On(e,t,n=ye,o=!1){if(n){const s=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...i)=>{bt();const c=an(n),a=Ne(t,n,e,i);return c(),vt(),a});return o?s.unshift(r):s.push(r),r}}const nt=e=>(t,n=ye)=>{(!Fn||e==="sp")&&On(e,(...o)=>t(...o),n)},ba=nt("bm"),Rr=nt("m"),va=nt("bu"),ya=nt("u"),Nr=nt("bum"),Wr=nt("um"),_a=nt("sp"),wa=nt("rtg"),Aa=nt("rtc");function Ia(e,t=ye){On("ec",e,t)}const Sa="components";function Et(e,t){return Pa(Sa,e,!0,t)||e}const Ta=Symbol.for("v-ndc");function Pa(e,t,n=!0,o=!1){const s=Re||ye;if(s){const r=s.type;{const c=bl(r,!1);if(c&&(c===t||c===Ve(t)||c===Ln(Ve(t))))return r}const i=os(s[e]||r[e],t)||os(s.appContext[e],t);return!i&&o?r:i}}function os(e,t){return e&&(e[t]||e[Ve(t)]||e[Ln(Ve(t))])}const lo=e=>e?ni(e)?Oo(e):lo(e.parent):null,Jt=be(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>lo(e.parent),$root:e=>lo(e.root),$emit:e=>e.emit,$options:e=>Ro(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,Uo(e.update)}),$nextTick:e=>e.n||(e.n=Sr.bind(e.proxy)),$watch:e=>Ja.bind(e)}),qn=(e,t)=>e!==ce&&!e.__isScriptSetup&&q(e,t),Ca={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:o,data:s,props:r,accessCache:i,type:c,appContext:a}=e;let d;if(t[0]!=="$"){const g=i[t];if(g!==void 0)switch(g){case 1:return o[t];case 2:return s[t];case 4:return n[t];case 3:return r[t]}else{if(qn(o,t))return i[t]=1,o[t];if(s!==ce&&q(s,t))return i[t]=2,s[t];if((d=e.propsOptions[0])&&q(d,t))return i[t]=3,r[t];if(n!==ce&&q(n,t))return i[t]=4,n[t];co&&(i[t]=0)}}const f=Jt[t];let p,h;if(f)return t==="$attrs"&&Ce(e.attrs,"get",""),f(e);if((p=c.__cssModules)&&(p=p[t]))return p;if(n!==ce&&q(n,t))return i[t]=4,n[t];if(h=a.config.globalProperties,q(h,t))return h[t]},set({_:e},t,n){const{data:o,setupState:s,ctx:r}=e;return qn(s,t)?(s[t]=n,!0):o!==ce&&q(o,t)?(o[t]=n,!0):q(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:s,propsOptions:r}},i){let c;return!!n[i]||e!==ce&&q(e,i)||qn(t,i)||(c=r[0])&&q(c,i)||q(o,i)||q(Jt,i)||q(s.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:q(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ss(e){return H(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let co=!0;function xa(e){const t=Ro(e),n=e.proxy,o=e.ctx;co=!1,t.beforeCreate&&rs(t.beforeCreate,e,"bc");const{data:s,computed:r,methods:i,watch:c,provide:a,inject:d,created:f,beforeMount:p,mounted:h,beforeUpdate:g,updated:D,activated:C,deactivated:B,beforeDestroy:M,beforeUnmount:R,destroyed:L,unmounted:$,render:ne,renderTracked:O,renderTriggered:oe,errorCaptured:he,serverPrefetch:j,expose:z,inheritAttrs:se,components:k,directives:Q,filters:me}=t;if(d&&Ea(d,o,null),i)for(const te in i){const Z=i[te];V(Z)&&(o[te]=Z.bind(n))}if(s){const te=s.call(n,n);ae(te)&&(e.data=Un(te))}if(co=!0,r)for(const te in r){const Z=r[te],Ze=V(Z)?Z.bind(n,n):V(Z.get)?Z.get.bind(n,n):Ue,ot=!V(Z)&&V(Z.set)?Z.set.bind(n):Ue,je=Fe({get:Ze,set:ot});Object.defineProperty(o,te,{enumerable:!0,configurable:!0,get:()=>je.value,set:Te=>je.value=Te})}if(c)for(const te in c)Mr(c[te],o,n,te);if(a){const te=V(a)?a.call(n):a;Reflect.ownKeys(te).forEach(Z=>{yn(Z,te[Z])})}f&&rs(f,e,"c");function ue(te,Z){H(Z)?Z.forEach(Ze=>te(Ze.bind(n))):Z&&te(Z.bind(n))}if(ue(ba,p),ue(Rr,h),ue(va,g),ue(ya,D),ue(ha,C),ue(ma,B),ue(Ia,he),ue(Aa,O),ue(wa,oe),ue(Nr,R),ue(Wr,$),ue(_a,j),H(z))if(z.length){const te=e.exposed||(e.exposed={});z.forEach(Z=>{Object.defineProperty(te,Z,{get:()=>n[Z],set:Ze=>n[Z]=Ze})})}else e.exposed||(e.exposed={});ne&&e.render===Ue&&(e.render=ne),se!=null&&(e.inheritAttrs=se),k&&(e.components=k),Q&&(e.directives=Q)}function Ea(e,t,n=Ue){H(e)&&(e=uo(e));for(const o in e){const s=e[o];let r;ae(s)?"default"in s?r=tt(s.from||o,s.default,!0):r=tt(s.from||o):r=tt(s),Se(r)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>r.value,set:i=>r.value=i}):t[o]=r}}function rs(e,t,n){Ne(H(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function Mr(e,t,n,o){const s=o.includes(".")?Zr(n,o):()=>n[o];if(pe(e)){const r=t[e];V(r)&&_n(s,r)}else if(V(e))_n(s,e.bind(n));else if(ae(e))if(H(e))e.forEach(r=>Mr(r,t,n,o));else{const r=V(e.handler)?e.handler.bind(n):t[e.handler];V(r)&&_n(s,r,e)}}function Ro(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:i}}=e.appContext,c=r.get(t);let a;return c?a=c:!s.length&&!n&&!o?a=t:(a={},s.length&&s.forEach(d=>Pn(a,d,i,!0)),Pn(a,t,i)),ae(t)&&r.set(t,a),a}function Pn(e,t,n,o=!1){const{mixins:s,extends:r}=t;r&&Pn(e,r,n,!0),s&&s.forEach(i=>Pn(e,i,n,!0));for(const i in t)if(!(o&&i==="expose")){const c=Da[i]||n&&n[i];e[i]=c?c(e[i],t[i]):t[i]}return e}const Da={data:is,props:as,emits:as,methods:$t,computed:$t,beforeCreate:Ie,created:Ie,beforeMount:Ie,mounted:Ie,beforeUpdate:Ie,updated:Ie,beforeDestroy:Ie,beforeUnmount:Ie,destroyed:Ie,unmounted:Ie,activated:Ie,deactivated:Ie,errorCaptured:Ie,serverPrefetch:Ie,components:$t,directives:$t,watch:ka,provide:is,inject:La};function is(e,t){return t?e?function(){return be(V(e)?e.call(this,this):e,V(t)?t.call(this,this):t)}:t:e}function La(e,t){return $t(uo(e),uo(t))}function uo(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ie(e,t){return e?[...new Set([].concat(e,t))]:t}function $t(e,t){return e?be(Object.create(null),e,t):t}function as(e,t){return e?H(e)&&H(t)?[...new Set([...e,...t])]:be(Object.create(null),ss(e),ss(t??{})):t}function ka(e,t){if(!e)return t;if(!t)return e;const n=be(Object.create(null),e);for(const o in t)n[o]=Ie(e[o],t[o]);return n}function Or(){return{app:null,config:{isNativeTag:wi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ua=0;function Ra(e,t){return function(o,s=null){V(o)||(o=be({},o)),s!=null&&!ae(s)&&(s=null);const r=Or(),i=new WeakSet;let c=!1;const a=r.app={_uid:Ua++,_component:o,_props:s,_container:null,_context:r,_instance:null,version:yl,get config(){return r.config},set config(d){},use(d,...f){return i.has(d)||(d&&V(d.install)?(i.add(d),d.install(a,...f)):V(d)&&(i.add(d),d(a,...f))),a},mixin(d){return r.mixins.includes(d)||r.mixins.push(d),a},component(d,f){return f?(r.components[d]=f,a):r.components[d]},directive(d,f){return f?(r.directives[d]=f,a):r.directives[d]},mount(d,f,p){if(!c){const h=G(o,s);return h.appContext=r,p===!0?p="svg":p===!1&&(p=void 0),f&&t?t(h,d):e(h,d,p),c=!0,a._container=d,d.__vue_app__=a,Oo(h.component)}},unmount(){c&&(e(null,a._container),delete a._container.__vue_app__)},provide(d,f){return r.provides[d]=f,a},runWithContext(d){const f=Ht;Ht=a;try{return d()}finally{Ht=f}}};return a}}let Ht=null;function yn(e,t){if(ye){let n=ye.provides;const o=ye.parent&&ye.parent.provides;o===n&&(n=ye.provides=Object.create(o)),n[e]=t}}function tt(e,t,n=!1){const o=ye||Re;if(o||Ht){const s=Ht?Ht._context.provides:o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&V(t)?t.call(o&&o.proxy):t}}const Hr={},Br=()=>Object.create(Hr),Fr=e=>Object.getPrototypeOf(e)===Hr;function Na(e,t,n,o=!1){const s={},r=Br();e.propsDefaults=Object.create(null),Vr(e,t,s,r);for(const i in e.propsOptions[0])i in s||(s[i]=void 0);n?e.props=o?s:mr(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function Wa(e,t,n,o){const{props:s,attrs:r,vnode:{patchFlag:i}}=e,c=J(s),[a]=e.propsOptions;let d=!1;if((o||i>0)&&!(i&16)){if(i&8){const f=e.vnode.dynamicProps;for(let p=0;p<f.length;p++){let h=f[p];if(Hn(e.emitsOptions,h))continue;const g=t[h];if(a)if(q(r,h))g!==r[h]&&(r[h]=g,d=!0);else{const D=Ve(h);s[D]=fo(a,c,D,g,e,!1)}else g!==r[h]&&(r[h]=g,d=!0)}}}else{Vr(e,t,s,r)&&(d=!0);let f;for(const p in c)(!t||!q(t,p)&&((f=Dt(p))===p||!q(t,f)))&&(a?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=fo(a,c,p,void 0,e,!0)):delete s[p]);if(r!==c)for(const p in r)(!t||!q(t,p))&&(delete r[p],d=!0)}d&&et(e.attrs,"set","")}function Vr(e,t,n,o){const[s,r]=e.propsOptions;let i=!1,c;if(t)for(let a in t){if(qt(a))continue;const d=t[a];let f;s&&q(s,f=Ve(a))?!r||!r.includes(f)?n[f]=d:(c||(c={}))[f]=d:Hn(e.emitsOptions,a)||(!(a in o)||d!==o[a])&&(o[a]=d,i=!0)}if(r){const a=J(n),d=c||ce;for(let f=0;f<r.length;f++){const p=r[f];n[p]=fo(s,a,p,d[p],e,!q(d,p))}}return i}function fo(e,t,n,o,s,r){const i=e[n];if(i!=null){const c=q(i,"default");if(c&&o===void 0){const a=i.default;if(i.type!==Function&&!i.skipFactory&&V(a)){const{propsDefaults:d}=s;if(n in d)o=d[n];else{const f=an(s);o=d[n]=a.call(null,t),f()}}else o=a}i[0]&&(r&&!c?o=!1:i[1]&&(o===""||o===Dt(n))&&(o=!0))}return o}const Ma=new WeakMap;function Gr(e,t,n=!1){const o=n?Ma:t.propsCache,s=o.get(e);if(s)return s;const r=e.props,i={},c=[];let a=!1;if(!V(e)){const f=p=>{a=!0;const[h,g]=Gr(p,t,!0);be(i,h),g&&c.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!r&&!a)return ae(e)&&o.set(e,Wt),Wt;if(H(r))for(let f=0;f<r.length;f++){const p=Ve(r[f]);ls(p)&&(i[p]=ce)}else if(r)for(const f in r){const p=Ve(f);if(ls(p)){const h=r[f],g=i[p]=H(h)||V(h)?{type:h}:be({},h),D=g.type;let C=!1,B=!0;if(H(D))for(let M=0;M<D.length;++M){const R=D[M],L=V(R)&&R.name;if(L==="Boolean"){C=!0;break}else L==="String"&&(B=!1)}else C=V(D)&&D.name==="Boolean";g[0]=C,g[1]=B,(C||q(g,"default"))&&c.push(p)}}const d=[i,c];return ae(e)&&o.set(e,d),d}function ls(e){return e[0]!=="$"&&!qt(e)}const jr=e=>e[0]==="_"||e==="$stable",No=e=>H(e)?e.map(qe):[qe(e)],Oa=(e,t,n)=>{if(t._n)return t;const o=_e((...s)=>No(t(...s)),n);return o._c=!1,o},Kr=(e,t,n)=>{const o=e._ctx;for(const s in e){if(jr(s))continue;const r=e[s];if(V(r))t[s]=Oa(s,r,o);else if(r!=null){const i=No(r);t[s]=()=>i}}},$r=(e,t)=>{const n=No(t);e.slots.default=()=>n},qr=(e,t,n)=>{for(const o in t)(n||o!=="_")&&(e[o]=t[o])},Ha=(e,t,n)=>{const o=e.slots=Br();if(e.vnode.shapeFlag&32){const s=t._;s?(qr(o,t,n),n&&Ys(o,"_",s,!0)):Kr(t,o)}else t&&$r(e,t)},Ba=(e,t,n)=>{const{vnode:o,slots:s}=e;let r=!0,i=ce;if(o.shapeFlag&32){const c=t._;c?n&&c===1?r=!1:qr(s,t,n):(r=!t.$stable,Kr(t,s)),i=t}else t&&($r(e,t),i={default:1});if(r)for(const c in s)!jr(c)&&i[c]==null&&delete s[c]};function po(e,t,n,o,s=!1){if(H(e)){e.forEach((h,g)=>po(h,t&&(H(t)?t[g]:t),n,o,s));return}if(vn(o)&&!s)return;const r=o.shapeFlag&4?Oo(o.component):o.el,i=s?null:r,{i:c,r:a}=e,d=t&&t.r,f=c.refs===ce?c.refs={}:c.refs,p=c.setupState;if(d!=null&&d!==a&&(pe(d)?(f[d]=null,q(p,d)&&(p[d]=null)):Se(d)&&(d.value=null)),V(a))pt(a,c,12,[i,f]);else{const h=pe(a),g=Se(a);if(h||g){const D=()=>{if(e.f){const C=h?q(p,a)?p[a]:f[a]:a.value;s?H(C)&&wo(C,r):H(C)?C.includes(r)||C.push(r):h?(f[a]=[r],q(p,a)&&(p[a]=f[a])):(a.value=[r],e.k&&(f[e.k]=a.value))}else h?(f[a]=i,q(p,a)&&(p[a]=i)):g&&(a.value=i,e.k&&(f[e.k]=i))};i?(D.id=-1,Pe(D,n)):D()}}}const Fa=Symbol("_vte"),Va=e=>e.__isTeleport,Pe=ol;function Ga(e){return ja(e)}function ja(e,t){const n=Xs();n.__VUE__=!0;const{insert:o,remove:s,patchProp:r,createElement:i,createText:c,createComment:a,setText:d,setElementText:f,parentNode:p,nextSibling:h,setScopeId:g=Ue,insertStaticContent:D}=e,C=(l,u,m,y=null,b=null,w=null,S=void 0,A=null,I=!!u.dynamicChildren)=>{if(l===u)return;l&&!Tt(l,u)&&(y=v(l),Te(l,b,w,!0),l=null),u.patchFlag===-2&&(I=!1,u.dynamicChildren=null);const{type:_,ref:E,shapeFlag:W}=u;switch(_){case Bn:B(l,u,m,y);break;case Ee:M(l,u,m,y);break;case wn:l==null&&R(u,m,y,S);break;case ie:k(l,u,m,y,b,w,S,A,I);break;default:W&1?ne(l,u,m,y,b,w,S,A,I):W&6?Q(l,u,m,y,b,w,S,A,I):(W&64||W&128)&&_.process(l,u,m,y,b,w,S,A,I,U)}E!=null&&b&&po(E,l&&l.ref,w,u||l,!u)},B=(l,u,m,y)=>{if(l==null)o(u.el=c(u.children),m,y);else{const b=u.el=l.el;u.children!==l.children&&d(b,u.children)}},M=(l,u,m,y)=>{l==null?o(u.el=a(u.children||""),m,y):u.el=l.el},R=(l,u,m,y)=>{[l.el,l.anchor]=D(l.children,u,m,y,l.el,l.anchor)},L=({el:l,anchor:u},m,y)=>{let b;for(;l&&l!==u;)b=h(l),o(l,m,y),l=b;o(u,m,y)},$=({el:l,anchor:u})=>{let m;for(;l&&l!==u;)m=h(l),s(l),l=m;s(u)},ne=(l,u,m,y,b,w,S,A,I)=>{u.type==="svg"?S="svg":u.type==="math"&&(S="mathml"),l==null?O(u,m,y,b,w,S,A,I):j(l,u,b,w,S,A,I)},O=(l,u,m,y,b,w,S,A)=>{let I,_;const{props:E,shapeFlag:W,transition:N,dirs:F}=l;if(I=l.el=i(l.type,w,E&&E.is,E),W&8?f(I,l.children):W&16&&he(l.children,I,null,y,b,zn(l,w),S,A),F&&yt(l,null,y,"created"),oe(I,l,l.scopeId,S,y),E){for(const re in E)re!=="value"&&!qt(re)&&r(I,re,null,E[re],w,y);"value"in E&&r(I,"value",null,E.value,w),(_=E.onVnodeBeforeMount)&&$e(_,y,l)}F&&yt(l,null,y,"beforeMount");const K=Ka(b,N);K&&N.beforeEnter(I),o(I,u,m),((_=E&&E.onVnodeMounted)||K||F)&&Pe(()=>{_&&$e(_,y,l),K&&N.enter(I),F&&yt(l,null,y,"mounted")},b)},oe=(l,u,m,y,b)=>{if(m&&g(l,m),y)for(let w=0;w<y.length;w++)g(l,y[w]);if(b){let w=b.subTree;if(u===w){const S=b.vnode;oe(l,S,S.scopeId,S.slotScopeIds,b.parent)}}},he=(l,u,m,y,b,w,S,A,I=0)=>{for(let _=I;_<l.length;_++){const E=l[_]=A?ut(l[_]):qe(l[_]);C(null,E,u,m,y,b,w,S,A)}},j=(l,u,m,y,b,w,S)=>{const A=u.el=l.el;let{patchFlag:I,dynamicChildren:_,dirs:E}=u;I|=l.patchFlag&16;const W=l.props||ce,N=u.props||ce;let F;if(m&&_t(m,!1),(F=N.onVnodeBeforeUpdate)&&$e(F,m,u,l),E&&yt(u,l,m,"beforeUpdate"),m&&_t(m,!0),(W.innerHTML&&N.innerHTML==null||W.textContent&&N.textContent==null)&&f(A,""),_?z(l.dynamicChildren,_,A,m,y,zn(u,b),w):S||Z(l,u,A,null,m,y,zn(u,b),w,!1),I>0){if(I&16)se(A,W,N,m,b);else if(I&2&&W.class!==N.class&&r(A,"class",null,N.class,b),I&4&&r(A,"style",W.style,N.style,b),I&8){const K=u.dynamicProps;for(let re=0;re<K.length;re++){const Y=K[re],ge=W[Y],He=N[Y];(He!==ge||Y==="value")&&r(A,Y,ge,He,b,m)}}I&1&&l.children!==u.children&&f(A,u.children)}else!S&&_==null&&se(A,W,N,m,b);((F=N.onVnodeUpdated)||E)&&Pe(()=>{F&&$e(F,m,u,l),E&&yt(u,l,m,"updated")},y)},z=(l,u,m,y,b,w,S)=>{for(let A=0;A<u.length;A++){const I=l[A],_=u[A],E=I.el&&(I.type===ie||!Tt(I,_)||I.shapeFlag&70)?p(I.el):m;C(I,_,E,null,y,b,w,S,!0)}},se=(l,u,m,y,b)=>{if(u!==m){if(u!==ce)for(const w in u)!qt(w)&&!(w in m)&&r(l,w,u[w],null,b,y);for(const w in m){if(qt(w))continue;const S=m[w],A=u[w];S!==A&&w!=="value"&&r(l,w,A,S,b,y)}"value"in m&&r(l,"value",u.value,m.value,b)}},k=(l,u,m,y,b,w,S,A,I)=>{const _=u.el=l?l.el:c(""),E=u.anchor=l?l.anchor:c("");let{patchFlag:W,dynamicChildren:N,slotScopeIds:F}=u;F&&(A=A?A.concat(F):F),l==null?(o(_,m,y),o(E,m,y),he(u.children||[],m,E,b,w,S,A,I)):W>0&&W&64&&N&&l.dynamicChildren?(z(l.dynamicChildren,N,m,b,w,S,A),(u.key!=null||b&&u===b.subTree)&&zr(l,u,!0)):Z(l,u,m,E,b,w,S,A,I)},Q=(l,u,m,y,b,w,S,A,I)=>{u.slotScopeIds=A,l==null?u.shapeFlag&512?b.ctx.activate(u,m,y,S,I):me(u,m,y,b,w,S,I):Oe(l,u,I)},me=(l,u,m,y,b,w,S)=>{const A=l.component=dl(l,y,b);if(Mn(l)&&(A.ctx.renderer=U),pl(A,!1,S),A.asyncDep){if(b&&b.registerDep(A,ue,S),!l.el){const I=A.subTree=G(Ee);M(null,I,u,m)}}else ue(A,l,u,m,b,w,S)},Oe=(l,u,m)=>{const y=u.component=l.component;if(el(l,u,m))if(y.asyncDep&&!y.asyncResolved){te(y,u,m);return}else y.next=u,la(y.update),y.effect.dirty=!0,y.update();else u.el=l.el,y.vnode=u},ue=(l,u,m,y,b,w,S)=>{const A=()=>{if(l.isMounted){let{next:E,bu:W,u:N,parent:F,vnode:K}=l;{const Rt=Jr(l);if(Rt){E&&(E.el=K.el,te(l,E,S)),Rt.asyncDep.then(()=>{l.isUnmounted||A()});return}}let re=E,Y;_t(l,!1),E?(E.el=K.el,te(l,E,S)):E=K,W&&jn(W),(Y=E.props&&E.props.onVnodeBeforeUpdate)&&$e(Y,F,E,K),_t(l,!0);const ge=Jn(l),He=l.subTree;l.subTree=ge,C(He,ge,p(He.el),v(He),l,b,w),E.el=ge.el,re===null&&tl(l,ge.el),N&&Pe(N,b),(Y=E.props&&E.props.onVnodeUpdated)&&Pe(()=>$e(Y,F,E,K),b)}else{let E;const{el:W,props:N}=u,{bm:F,m:K,parent:re}=l,Y=vn(u);if(_t(l,!1),F&&jn(F),!Y&&(E=N&&N.onVnodeBeforeMount)&&$e(E,re,u),_t(l,!0),W&&le){const ge=()=>{l.subTree=Jn(l),le(W,l.subTree,l,b,null)};Y?u.type.__asyncLoader().then(()=>!l.isUnmounted&&ge()):ge()}else{const ge=l.subTree=Jn(l);C(null,ge,m,y,l,b,w),u.el=ge.el}if(K&&Pe(K,b),!Y&&(E=N&&N.onVnodeMounted)){const ge=u;Pe(()=>$e(E,re,ge),b)}(u.shapeFlag&256||re&&vn(re.vnode)&&re.vnode.shapeFlag&256)&&l.a&&Pe(l.a,b),l.isMounted=!0,u=m=y=null}},I=l.effect=new To(A,Ue,()=>Uo(_),l.scope),_=l.update=()=>{I.dirty&&I.run()};_.i=l,_.id=l.uid,_t(l,!0),_()},te=(l,u,m)=>{u.component=l;const y=l.vnode.props;l.vnode=u,l.next=null,Wa(l,u.props,y,m),Ba(l,u.children,m),bt(),ts(l),vt()},Z=(l,u,m,y,b,w,S,A,I=!1)=>{const _=l&&l.children,E=l?l.shapeFlag:0,W=u.children,{patchFlag:N,shapeFlag:F}=u;if(N>0){if(N&128){ot(_,W,m,y,b,w,S,A,I);return}else if(N&256){Ze(_,W,m,y,b,w,S,A,I);return}}F&8?(E&16&&Le(_,b,w),W!==_&&f(m,W)):E&16?F&16?ot(_,W,m,y,b,w,S,A,I):Le(_,b,w,!0):(E&8&&f(m,""),F&16&&he(W,m,y,b,w,S,A,I))},Ze=(l,u,m,y,b,w,S,A,I)=>{l=l||Wt,u=u||Wt;const _=l.length,E=u.length,W=Math.min(_,E);let N;for(N=0;N<W;N++){const F=u[N]=I?ut(u[N]):qe(u[N]);C(l[N],F,m,null,b,w,S,A,I)}_>E?Le(l,b,w,!0,!1,W):he(u,m,y,b,w,S,A,I,W)},ot=(l,u,m,y,b,w,S,A,I)=>{let _=0;const E=u.length;let W=l.length-1,N=E-1;for(;_<=W&&_<=N;){const F=l[_],K=u[_]=I?ut(u[_]):qe(u[_]);if(Tt(F,K))C(F,K,m,null,b,w,S,A,I);else break;_++}for(;_<=W&&_<=N;){const F=l[W],K=u[N]=I?ut(u[N]):qe(u[N]);if(Tt(F,K))C(F,K,m,null,b,w,S,A,I);else break;W--,N--}if(_>W){if(_<=N){const F=N+1,K=F<E?u[F].el:y;for(;_<=N;)C(null,u[_]=I?ut(u[_]):qe(u[_]),m,K,b,w,S,A,I),_++}}else if(_>N)for(;_<=W;)Te(l[_],b,w,!0),_++;else{const F=_,K=_,re=new Map;for(_=K;_<=N;_++){const xe=u[_]=I?ut(u[_]):qe(u[_]);xe.key!=null&&re.set(xe.key,_)}let Y,ge=0;const He=N-K+1;let Rt=!1,jo=0;const Gt=new Array(He);for(_=0;_<He;_++)Gt[_]=0;for(_=F;_<=W;_++){const xe=l[_];if(ge>=He){Te(xe,b,w,!0);continue}let Ke;if(xe.key!=null)Ke=re.get(xe.key);else for(Y=K;Y<=N;Y++)if(Gt[Y-K]===0&&Tt(xe,u[Y])){Ke=Y;break}Ke===void 0?Te(xe,b,w,!0):(Gt[Ke-K]=_+1,Ke>=jo?jo=Ke:Rt=!0,C(xe,u[Ke],m,null,b,w,S,A,I),ge++)}const Ko=Rt?$a(Gt):Wt;for(Y=Ko.length-1,_=He-1;_>=0;_--){const xe=K+_,Ke=u[xe],$o=xe+1<E?u[xe+1].el:y;Gt[_]===0?C(null,Ke,m,$o,b,w,S,A,I):Rt&&(Y<0||_!==Ko[Y]?je(Ke,m,$o,2):Y--)}}},je=(l,u,m,y,b=null)=>{const{el:w,type:S,transition:A,children:I,shapeFlag:_}=l;if(_&6){je(l.component.subTree,u,m,y);return}if(_&128){l.suspense.move(u,m,y);return}if(_&64){S.move(l,u,m,U);return}if(S===ie){o(w,u,m);for(let W=0;W<I.length;W++)je(I[W],u,m,y);o(l.anchor,u,m);return}if(S===wn){L(l,u,m);return}if(y!==2&&_&1&&A)if(y===0)A.beforeEnter(w),o(w,u,m),Pe(()=>A.enter(w),b);else{const{leave:W,delayLeave:N,afterLeave:F}=A,K=()=>o(w,u,m),re=()=>{W(w,()=>{K(),F&&F()})};N?N(w,K,re):re()}else o(w,u,m)},Te=(l,u,m,y=!1,b=!1)=>{const{type:w,props:S,ref:A,children:I,dynamicChildren:_,shapeFlag:E,patchFlag:W,dirs:N,cacheIndex:F}=l;if(W===-2&&(b=!1),A!=null&&po(A,null,m,l,!0),F!=null&&(u.renderCache[F]=void 0),E&256){u.ctx.deactivate(l);return}const K=E&1&&N,re=!vn(l);let Y;if(re&&(Y=S&&S.onVnodeBeforeUnmount)&&$e(Y,u,l),E&6)cn(l.component,m,y);else{if(E&128){l.suspense.unmount(m,y);return}K&&yt(l,null,u,"beforeUnmount"),E&64?l.type.remove(l,u,m,U,y):_&&!_.hasOnce&&(w!==ie||W>0&&W&64)?Le(_,u,m,!1,!0):(w===ie&&W&384||!b&&E&16)&&Le(I,u,m),y&&kt(l)}(re&&(Y=S&&S.onVnodeUnmounted)||K)&&Pe(()=>{Y&&$e(Y,u,l),K&&yt(l,null,u,"unmounted")},m)},kt=l=>{const{type:u,el:m,anchor:y,transition:b}=l;if(u===ie){Ut(m,y);return}if(u===wn){$(l);return}const w=()=>{s(m),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(l.shapeFlag&1&&b&&!b.persisted){const{leave:S,delayLeave:A}=b,I=()=>S(m,w);A?A(l.el,w,I):I()}else w()},Ut=(l,u)=>{let m;for(;l!==u;)m=h(l),s(l),l=m;s(u)},cn=(l,u,m)=>{const{bum:y,scope:b,update:w,subTree:S,um:A,m:I,a:_}=l;cs(I),cs(_),y&&jn(y),b.stop(),w&&(w.active=!1,Te(S,l,u,m)),A&&Pe(A,u),Pe(()=>{l.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Le=(l,u,m,y=!1,b=!1,w=0)=>{for(let S=w;S<l.length;S++)Te(l[S],u,m,y,b)},v=l=>{if(l.shapeFlag&6)return v(l.component.subTree);if(l.shapeFlag&128)return l.suspense.next();const u=h(l.anchor||l.el),m=u&&u[Fa];return m?h(m):u};let x=!1;const T=(l,u,m)=>{l==null?u._vnode&&Te(u._vnode,null,null,!0):C(u._vnode||null,l,u,null,null,null,m),u._vnode=l,x||(x=!0,ts(),Pr(),x=!1)},U={p:C,um:Te,m:je,r:kt,mt:me,mc:he,pc:Z,pbc:z,n:v,o:e};let X,le;return{render:T,hydrate:X,createApp:Ra(T,X)}}function zn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function _t({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ka(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function zr(e,t,n=!1){const o=e.children,s=t.children;if(H(o)&&H(s))for(let r=0;r<o.length;r++){const i=o[r];let c=s[r];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[r]=ut(s[r]),c.el=i.el),!n&&c.patchFlag!==-2&&zr(i,c)),c.type===Bn&&(c.el=i.el)}}function $a(e){const t=e.slice(),n=[0];let o,s,r,i,c;const a=e.length;for(o=0;o<a;o++){const d=e[o];if(d!==0){if(s=n[n.length-1],e[s]<d){t[o]=s,n.push(o);continue}for(r=0,i=n.length-1;r<i;)c=r+i>>1,e[n[c]]<d?r=c+1:i=c;d<e[n[r]]&&(r>0&&(t[o]=n[r-1]),n[r]=o)}}for(r=n.length,i=n[r-1];r-- >0;)n[r]=i,i=t[i];return n}function Jr(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Jr(t)}function cs(e){if(e)for(let t=0;t<e.length;t++)e[t].active=!1}const qa=Symbol.for("v-scx"),za=()=>tt(qa),gn={};function _n(e,t,n){return Qr(e,t,n)}function Qr(e,t,{immediate:n,deep:o,flush:s,once:r,onTrack:i,onTrigger:c}=ce){if(t&&r){const O=t;t=(...oe)=>{O(...oe),ne()}}const a=ye,d=O=>o===!0?O:St(O,o===!1?1:void 0);let f,p=!1,h=!1;if(Se(e)?(f=()=>e.value,p=Bt(e)):zt(e)?(f=()=>d(e),p=!0):H(e)?(h=!0,p=e.some(O=>zt(O)||Bt(O)),f=()=>e.map(O=>{if(Se(O))return O.value;if(zt(O))return d(O);if(V(O))return pt(O,a,2)})):V(e)?t?f=()=>pt(e,a,2):f=()=>(g&&g(),Ne(e,a,3,[D])):f=Ue,t&&o){const O=f;f=()=>St(O())}let g,D=O=>{g=L.onStop=()=>{pt(O,a,4),g=L.onStop=void 0}},C;if(Fn)if(D=Ue,t?n&&Ne(t,a,3,[f(),h?[]:void 0,D]):f(),s==="sync"){const O=za();C=O.__watcherHandles||(O.__watcherHandles=[])}else return Ue;let B=h?new Array(e.length).fill(gn):gn;const M=()=>{if(!(!L.active||!L.dirty))if(t){const O=L.run();(o||p||(h?O.some((oe,he)=>ht(oe,B[he])):ht(O,B)))&&(g&&g(),Ne(t,a,3,[O,B===gn?void 0:h&&B[0]===gn?[]:B,D]),B=O)}else L.run()};M.allowRecurse=!!t;let R;s==="sync"?R=M:s==="post"?R=()=>Pe(M,a&&a.suspense):(M.pre=!0,a&&(M.id=a.uid),R=()=>Uo(M));const L=new To(f,Ue,R),$=Wi(),ne=()=>{L.stop(),$&&wo($.effects,L)};return t?n?M():B=L.run():s==="post"?Pe(L.run.bind(L),a&&a.suspense):L.run(),C&&C.push(ne),ne}function Ja(e,t,n){const o=this.proxy,s=pe(e)?e.includes(".")?Zr(o,e):()=>o[e]:e.bind(o,o);let r;V(t)?r=t:(r=t.handler,n=t);const i=an(this),c=Qr(s,r.bind(o),n);return i(),c}function Zr(e,t){const n=t.split(".");return()=>{let o=e;for(let s=0;s<n.length&&o;s++)o=o[n[s]];return o}}function St(e,t=1/0,n){if(t<=0||!ae(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Se(e))St(e.value,t,n);else if(H(e))for(let o=0;o<e.length;o++)St(e[o],t,n);else if(zs(e)||Mt(e))e.forEach(o=>{St(o,t,n)});else if(Zs(e)){for(const o in e)St(e[o],t,n);for(const o of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,o)&&St(e[o],t,n)}return e}const Qa=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ve(t)}Modifiers`]||e[`${Dt(t)}Modifiers`];function Za(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||ce;let s=n;const r=t.startsWith("update:"),i=r&&Qa(o,t.slice(7));i&&(i.trim&&(s=n.map(f=>pe(f)?f.trim():f)),i.number&&(s=n.map(Pi)));let c,a=o[c=Gn(t)]||o[c=Gn(Ve(t))];!a&&r&&(a=o[c=Gn(Dt(t))]),a&&Ne(a,e,6,s);const d=o[c+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,Ne(d,e,6,s)}}function Yr(e,t,n=!1){const o=t.emitsCache,s=o.get(e);if(s!==void 0)return s;const r=e.emits;let i={},c=!1;if(!V(e)){const a=d=>{const f=Yr(d,t,!0);f&&(c=!0,be(i,f))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!r&&!c?(ae(e)&&o.set(e,null),null):(H(r)?r.forEach(a=>i[a]=null):be(i,r),ae(e)&&o.set(e,i),i)}function Hn(e,t){return!e||!xn(t)?!1:(t=t.slice(2).replace(/Once$/,""),q(e,t[0].toLowerCase()+t.slice(1))||q(e,Dt(t))||q(e,t))}function Jn(e){const{type:t,vnode:n,proxy:o,withProxy:s,propsOptions:[r],slots:i,attrs:c,emit:a,render:d,renderCache:f,props:p,data:h,setupState:g,ctx:D,inheritAttrs:C}=e,B=Sn(e);let M,R;try{if(n.shapeFlag&4){const $=s||o,ne=$;M=qe(d.call(ne,$,f,p,g,h,D)),R=c}else{const $=t;M=qe($.length>1?$(p,{attrs:c,slots:i,emit:a}):$(p,null)),R=t.props?c:Ya(c)}}catch($){Qt.length=0,Nn($,e,1),M=G(Ee)}let L=M;if(R&&C!==!1){const $=Object.keys(R),{shapeFlag:ne}=L;$.length&&ne&7&&(r&&$.some(_o)&&(R=Xa(R,r)),L=mt(L,R,!1,!0))}return n.dirs&&(L=mt(L,null,!1,!0),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),M=L,Sn(B),M}const Ya=e=>{let t;for(const n in e)(n==="class"||n==="style"||xn(n))&&((t||(t={}))[n]=e[n]);return t},Xa=(e,t)=>{const n={};for(const o in e)(!_o(o)||!(o.slice(9)in t))&&(n[o]=e[o]);return n};function el(e,t,n){const{props:o,children:s,component:r}=e,{props:i,children:c,patchFlag:a}=t,d=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return o?us(o,i,d):!!i;if(a&8){const f=t.dynamicProps;for(let p=0;p<f.length;p++){const h=f[p];if(i[h]!==o[h]&&!Hn(d,h))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:o===i?!1:o?i?us(o,i,d):!0:!!i;return!1}function us(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let s=0;s<o.length;s++){const r=o[s];if(t[r]!==e[r]&&!Hn(n,r))return!0}return!1}function tl({vnode:e,parent:t},n){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.el=e.el),o===e)(e=t.vnode).el=n,t=t.parent;else break}}const nl=e=>e.__isSuspense;function ol(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):ca(e)}const ie=Symbol.for("v-fgt"),Bn=Symbol.for("v-txt"),Ee=Symbol.for("v-cmt"),wn=Symbol.for("v-stc"),Qt=[];let De=null;function fe(e=!1){Qt.push(De=e?null:[])}function sl(){Qt.pop(),De=Qt[Qt.length-1]||null}let nn=1;function ds(e){nn+=e,e<0&&De&&(De.hasOnce=!0)}function Xr(e){return e.dynamicChildren=nn>0?De||Wt:null,sl(),nn>0&&De&&De.push(e),e}function ve(e,t,n,o,s,r){return Xr(P(e,t,n,o,s,r,!0))}function ei(e,t,n,o,s){return Xr(G(e,t,n,o,s,!0))}function ho(e){return e?e.__v_isVNode===!0:!1}function Tt(e,t){return e.type===t.type&&e.key===t.key}const ti=({key:e})=>e??null,An=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?pe(e)||Se(e)||V(e)?{i:Re,r:e,k:t,f:!!n}:e:null);function P(e,t=null,n=null,o=0,s=null,r=e===ie?0:1,i=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ti(t),ref:t&&An(t),scopeId:Wn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:o,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Re};return c?(Mo(a,n),r&128&&e.normalize(a)):n&&(a.shapeFlag|=pe(n)?8:16),nn>0&&!i&&De&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&De.push(a),a}const G=rl;function rl(e,t=null,n=null,o=0,s=null,r=!1){if((!e||e===Ta)&&(e=Ee),ho(e)){const c=mt(e,t,!0);return n&&Mo(c,n),nn>0&&!r&&De&&(c.shapeFlag&6?De[De.indexOf(e)]=c:De.push(c)),c.patchFlag=-2,c}if(vl(e)&&(e=e.__vccOpts),t){t=il(t);let{class:c,style:a}=t;c&&!pe(c)&&(t.class=So(c)),ae(a)&&(br(a)&&!H(a)&&(a=be({},a)),t.style=Io(a))}const i=pe(e)?1:nl(e)?128:Va(e)?64:ae(e)?4:V(e)?2:0;return P(e,t,n,o,s,i,r,!0)}function il(e){return e?br(e)||Fr(e)?be({},e):e:null}function mt(e,t,n=!1,o=!1){const{props:s,ref:r,patchFlag:i,children:c,transition:a}=e,d=t?ll(s||{},t):s,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&ti(d),ref:t&&t.ref?n&&r?H(r)?r.concat(An(t)):[r,An(t)]:An(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ie?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&mt(e.ssContent),ssFallback:e.ssFallback&&mt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&o&&Tn(f,a.clone(f)),f}function de(e=" ",t=0){return G(Bn,null,e,t)}function Wo(e,t){const n=G(wn,null,e);return n.staticCount=t,n}function al(e="",t=!1){return t?(fe(),ei(Ee,null,e)):G(Ee,null,e)}function qe(e){return e==null||typeof e=="boolean"?G(Ee):H(e)?G(ie,null,e.slice()):typeof e=="object"?ut(e):G(Bn,null,String(e))}function ut(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:mt(e)}function Mo(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(o&65){const s=t.default;s&&(s._c&&(s._d=!1),Mo(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Fr(t)?t._ctx=Re:s===3&&Re&&(Re.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else V(t)?(t={default:t,_ctx:Re},n=32):(t=String(t),o&64?(n=16,t=[de(t)]):n=8);e.children=t,e.shapeFlag|=n}function ll(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const s in o)if(s==="class")t.class!==o.class&&(t.class=So([t.class,o.class]));else if(s==="style")t.style=Io([t.style,o.style]);else if(xn(s)){const r=t[s],i=o[s];i&&r!==i&&!(H(r)&&r.includes(i))&&(t[s]=r?[].concat(r,i):i)}else s!==""&&(t[s]=o[s])}return t}function $e(e,t,n,o=null){Ne(e,t,7,[n,o])}const cl=Or();let ul=0;function dl(e,t,n){const o=e.type,s=(t?t.appContext:e.appContext)||cl,r={uid:ul++,vnode:e,type:o,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new or(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gr(o,s),emitsOptions:Yr(o,s),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:o.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Za.bind(null,r),e.ce&&e.ce(r),r}let ye=null;const fl=()=>ye||Re;let Cn,mo;{const e=Xs(),t=(n,o)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(o),r=>{s.length>1?s.forEach(i=>i(r)):s[0](r)}};Cn=t("__VUE_INSTANCE_SETTERS__",n=>ye=n),mo=t("__VUE_SSR_SETTERS__",n=>Fn=n)}const an=e=>{const t=ye;return Cn(e),e.scope.on(),()=>{e.scope.off(),Cn(t)}},fs=()=>{ye&&ye.scope.off(),Cn(null)};function ni(e){return e.vnode.shapeFlag&4}let Fn=!1;function pl(e,t=!1,n=!1){t&&mo(t);const{props:o,children:s}=e.vnode,r=ni(e);Na(e,o,r,t),Ha(e,s,n);const i=r?hl(e,t):void 0;return t&&mo(!1),i}function hl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ca);const{setup:o}=n;if(o){const s=e.setupContext=o.length>1?gl(e):null,r=an(e);bt();const i=pt(o,e,0,[e.props,s]);if(vt(),r(),Js(i)){if(i.then(fs,fs),t)return i.then(c=>{ps(e,c,t)}).catch(c=>{Nn(c,e,0)});e.asyncDep=i}else ps(e,i,t)}else oi(e,t)}function ps(e,t,n){V(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ae(t)&&(e.setupState=Ar(t)),oi(e,n)}let hs;function oi(e,t,n){const o=e.type;if(!e.render){if(!t&&hs&&!o.render){const s=o.template||Ro(e).template;if(s){const{isCustomElement:r,compilerOptions:i}=e.appContext.config,{delimiters:c,compilerOptions:a}=o,d=be(be({isCustomElement:r,delimiters:c},i),a);o.render=hs(s,d)}}e.render=o.render||Ue}{const s=an(e);bt();try{xa(e)}finally{vt(),s()}}}const ml={get(e,t){return Ce(e,"get",""),e[t]}};function gl(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,ml),slots:e.slots,emit:e.emit,expose:t}}function Oo(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Ar(vr(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Jt)return Jt[n](e)},has(t,n){return n in t||n in Jt}})):e.proxy}function bl(e,t=!0){return V(e)?e.displayName||e.name:e.name||t&&e.__name}function vl(e){return V(e)&&"__vccOpts"in e}const Fe=(e,t)=>na(e,t,Fn);function Ho(e,t,n){const o=arguments.length;return o===2?ae(t)&&!H(t)?ho(t)?G(e,null,[t]):G(e,t):G(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&ho(n)&&(n=[n]),G(e,t,n))}const yl="3.4.38";/**
* @vue/runtime-dom v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const _l="http://www.w3.org/2000/svg",wl="http://www.w3.org/1998/Math/MathML",Xe=typeof document<"u"?document:null,ms=Xe&&Xe.createElement("template"),Al={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const s=t==="svg"?Xe.createElementNS(_l,e):t==="mathml"?Xe.createElementNS(wl,e):n?Xe.createElement(e,{is:n}):Xe.createElement(e);return e==="select"&&o&&o.multiple!=null&&s.setAttribute("multiple",o.multiple),s},createText:e=>Xe.createTextNode(e),createComment:e=>Xe.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Xe.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,o,s,r){const i=n?n.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{ms.innerHTML=o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e;const c=ms.content;if(o==="svg"||o==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}t.insertBefore(c,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},rt="transition",jt="animation",on=Symbol("_vtc"),Bo=(e,{slots:t})=>Ho(pa,Il(e),t);Bo.displayName="Transition";const si={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Bo.props=be({},xr,si);const wt=(e,t=[])=>{H(e)?e.forEach(n=>n(...t)):e&&e(...t)},gs=e=>e?H(e)?e.some(t=>t.length>1):e.length>1:!1;function Il(e){const t={};for(const k in e)k in si||(t[k]=e[k]);if(e.css===!1)return t;const{name:n="v",type:o,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:a=r,appearActiveClass:d=i,appearToClass:f=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,D=Sl(s),C=D&&D[0],B=D&&D[1],{onBeforeEnter:M,onEnter:R,onEnterCancelled:L,onLeave:$,onLeaveCancelled:ne,onBeforeAppear:O=M,onAppear:oe=R,onAppearCancelled:he=L}=t,j=(k,Q,me)=>{At(k,Q?f:c),At(k,Q?d:i),me&&me()},z=(k,Q)=>{k._isLeaving=!1,At(k,p),At(k,g),At(k,h),Q&&Q()},se=k=>(Q,me)=>{const Oe=k?oe:R,ue=()=>j(Q,k,me);wt(Oe,[Q,ue]),bs(()=>{At(Q,k?a:r),it(Q,k?f:c),gs(Oe)||vs(Q,o,C,ue)})};return be(t,{onBeforeEnter(k){wt(M,[k]),it(k,r),it(k,i)},onBeforeAppear(k){wt(O,[k]),it(k,a),it(k,d)},onEnter:se(!1),onAppear:se(!0),onLeave(k,Q){k._isLeaving=!0;const me=()=>z(k,Q);it(k,p),it(k,h),Cl(),bs(()=>{k._isLeaving&&(At(k,p),it(k,g),gs($)||vs(k,o,B,me))}),wt($,[k,me])},onEnterCancelled(k){j(k,!1),wt(L,[k])},onAppearCancelled(k){j(k,!0),wt(he,[k])},onLeaveCancelled(k){z(k),wt(ne,[k])}})}function Sl(e){if(e==null)return null;if(ae(e))return[Qn(e.enter),Qn(e.leave)];{const t=Qn(e);return[t,t]}}function Qn(e){return Ci(e)}function it(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[on]||(e[on]=new Set)).add(t)}function At(e,t){t.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const n=e[on];n&&(n.delete(t),n.size||(e[on]=void 0))}function bs(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Tl=0;function vs(e,t,n,o){const s=e._endId=++Tl,r=()=>{s===e._endId&&o()};if(n)return setTimeout(r,n);const{type:i,timeout:c,propCount:a}=Pl(e,t);if(!i)return o();const d=i+"end";let f=0;const p=()=>{e.removeEventListener(d,h),r()},h=g=>{g.target===e&&++f>=a&&p()};setTimeout(()=>{f<a&&p()},c+1),e.addEventListener(d,h)}function Pl(e,t){const n=window.getComputedStyle(e),o=D=>(n[D]||"").split(", "),s=o(`${rt}Delay`),r=o(`${rt}Duration`),i=ys(s,r),c=o(`${jt}Delay`),a=o(`${jt}Duration`),d=ys(c,a);let f=null,p=0,h=0;t===rt?i>0&&(f=rt,p=i,h=r.length):t===jt?d>0&&(f=jt,p=d,h=a.length):(p=Math.max(i,d),f=p>0?i>d?rt:jt:null,h=f?f===rt?r.length:a.length:0);const g=f===rt&&/\b(transform|all)(,|$)/.test(o(`${rt}Property`).toString());return{type:f,timeout:p,propCount:h,hasTransform:g}}function ys(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,o)=>_s(n)+_s(e[o])))}function _s(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Cl(){return document.body.offsetHeight}function xl(e,t,n){const o=e[on];o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const ws=Symbol("_vod"),El=Symbol("_vsh"),Dl=Symbol(""),Ll=/(^|;)\s*display\s*:/;function kl(e,t,n){const o=e.style,s=pe(n);let r=!1;if(n&&!s){if(t)if(pe(t))for(const i of t.split(";")){const c=i.slice(0,i.indexOf(":")).trim();n[c]==null&&In(o,c,"")}else for(const i in t)n[i]==null&&In(o,i,"");for(const i in n)i==="display"&&(r=!0),In(o,i,n[i])}else if(s){if(t!==n){const i=o[Dl];i&&(n+=";"+i),o.cssText=n,r=Ll.test(n)}}else t&&e.removeAttribute("style");ws in e&&(e[ws]=r?o.display:"",e[El]&&(o.display="none"))}const As=/\s*!important$/;function In(e,t,n){if(H(n))n.forEach(o=>In(e,t,o));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const o=Ul(e,t);As.test(n)?e.setProperty(Dt(o),n.replace(As,""),"important"):e[o]=n}}const Is=["Webkit","Moz","ms"],Zn={};function Ul(e,t){const n=Zn[t];if(n)return n;let o=Ve(t);if(o!=="filter"&&o in e)return Zn[t]=o;o=Ln(o);for(let s=0;s<Is.length;s++){const r=Is[s]+o;if(r in e)return Zn[t]=r}return t}const Ss="http://www.w3.org/1999/xlink";function Ts(e,t,n,o,s,r=Ui(t)){o&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Ss,t.slice(6,t.length)):e.setAttributeNS(Ss,t,n):n==null||r&&!er(n)?e.removeAttribute(t):e.setAttribute(t,r?"":gt(n)?String(n):n)}function Rl(e,t,n,o){if(t==="innerHTML"||t==="textContent"){if(n==null)return;e[t]=n;return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const i=s==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?"":String(n);(i!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let r=!1;if(n===""||n==null){const i=typeof e[t];i==="boolean"?n=er(n):n==null&&i==="string"?(n="",r=!0):i==="number"&&(n=0,r=!0)}try{e[t]=n}catch{}r&&e.removeAttribute(t)}function Nl(e,t,n,o){e.addEventListener(t,n,o)}function Wl(e,t,n,o){e.removeEventListener(t,n,o)}const Ps=Symbol("_vei");function Ml(e,t,n,o,s=null){const r=e[Ps]||(e[Ps]={}),i=r[t];if(o&&i)i.value=o;else{const[c,a]=Ol(t);if(o){const d=r[t]=Fl(o,s);Nl(e,c,d,a)}else i&&(Wl(e,c,i,a),r[t]=void 0)}}const Cs=/(?:Once|Passive|Capture)$/;function Ol(e){let t;if(Cs.test(e)){t={};let o;for(;o=e.match(Cs);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Dt(e.slice(2)),t]}let Yn=0;const Hl=Promise.resolve(),Bl=()=>Yn||(Hl.then(()=>Yn=0),Yn=Date.now());function Fl(e,t){const n=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=n.attached)return;Ne(Vl(o,n.value),t,5,[o])};return n.value=e,n.attached=Bl(),n}function Vl(e,t){if(H(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(o=>s=>!s._stopped&&o&&o(s))}else return t}const xs=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Gl=(e,t,n,o,s,r)=>{const i=s==="svg";t==="class"?xl(e,o,i):t==="style"?kl(e,n,o):xn(t)?_o(t)||Ml(e,t,n,o,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):jl(e,t,o,i))?(Rl(e,t,o),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Ts(e,t,o,i,r,t!=="value")):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),Ts(e,t,o,i))};function jl(e,t,n,o){if(o)return!!(t==="innerHTML"||t==="textContent"||t in e&&xs(t)&&V(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return xs(t)&&pe(n)?!1:t in e}const Kl=be({patchProp:Gl},Al);let Es;function $l(){return Es||(Es=Ga(Kl))}const ql=(...e)=>{const t=$l().createApp(...e),{mount:n}=t;return t.mount=o=>{const s=Jl(o);if(!s)return;const r=t._component;!V(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const i=n(s,!1,zl(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),i},t};function zl(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Jl(e){return pe(e)?document.querySelector(e):e}var Ql=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const Zl=Symbol();var Ds;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Ds||(Ds={}));function Yl(){const e=Ri(!0),t=e.run(()=>Rn({}));let n=[],o=[];const s=vr({install(r){s._a=r,r.provide(Zl,s),r.config.globalProperties.$pinia=s,o.forEach(i=>n.push(i)),o=[]},use(r){return!this._a&&!Ql?o.push(r):n.push(r),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Nt=typeof document<"u";function Xl(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ee=Object.assign;function Xn(e,t){const n={};for(const o in t){const s=t[o];n[o]=Ge(s)?s.map(e):e(s)}return n}const Zt=()=>{},Ge=Array.isArray,ri=/#/g,ec=/&/g,tc=/\//g,nc=/=/g,oc=/\?/g,ii=/\+/g,sc=/%5B/g,rc=/%5D/g,ai=/%5E/g,ic=/%60/g,li=/%7B/g,ac=/%7C/g,ci=/%7D/g,lc=/%20/g;function Fo(e){return encodeURI(""+e).replace(ac,"|").replace(sc,"[").replace(rc,"]")}function cc(e){return Fo(e).replace(li,"{").replace(ci,"}").replace(ai,"^")}function go(e){return Fo(e).replace(ii,"%2B").replace(lc,"+").replace(ri,"%23").replace(ec,"%26").replace(ic,"`").replace(li,"{").replace(ci,"}").replace(ai,"^")}function uc(e){return go(e).replace(nc,"%3D")}function dc(e){return Fo(e).replace(ri,"%23").replace(oc,"%3F")}function fc(e){return e==null?"":dc(e).replace(tc,"%2F")}function sn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const pc=/\/$/,hc=e=>e.replace(pc,"");function eo(e,t,n="/"){let o,s={},r="",i="";const c=t.indexOf("#");let a=t.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(o=t.slice(0,a),r=t.slice(a+1,c>-1?c:t.length),s=e(r)),c>-1&&(o=o||t.slice(0,c),i=t.slice(c,t.length)),o=vc(o??t,n),{fullPath:o+(r&&"?")+r+i,path:o,query:s,hash:sn(i)}}function mc(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ls(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function gc(e,t,n){const o=t.matched.length-1,s=n.matched.length-1;return o>-1&&o===s&&Ft(t.matched[o],n.matched[s])&&ui(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Ft(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ui(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!bc(e[n],t[n]))return!1;return!0}function bc(e,t){return Ge(e)?ks(e,t):Ge(t)?ks(t,e):e===t}function ks(e,t){return Ge(t)?e.length===t.length&&e.every((n,o)=>n===t[o]):e.length===1&&e[0]===t}function vc(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),o=e.split("/"),s=o[o.length-1];(s===".."||s===".")&&o.push("");let r=n.length-1,i,c;for(i=0;i<o.length;i++)if(c=o[i],c!==".")if(c==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+o.slice(i).join("/")}const at={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var rn;(function(e){e.pop="pop",e.push="push"})(rn||(rn={}));var Yt;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Yt||(Yt={}));function yc(e){if(!e)if(Nt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),hc(e)}const _c=/^[^#]+#/;function wc(e,t){return e.replace(_c,"#")+t}function Ac(e,t){const n=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:t.behavior,left:o.left-n.left-(t.left||0),top:o.top-n.top-(t.top||0)}}const Vn=()=>({left:window.scrollX,top:window.scrollY});function Ic(e){let t;if("el"in e){const n=e.el,o=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?o?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Ac(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Us(e,t){return(history.state?history.state.position-t:-1)+e}const bo=new Map;function Sc(e,t){bo.set(e,t)}function Tc(e){const t=bo.get(e);return bo.delete(e),t}let Pc=()=>location.protocol+"//"+location.host;function di(e,t){const{pathname:n,search:o,hash:s}=t,r=e.indexOf("#");if(r>-1){let c=s.includes(e.slice(r))?e.slice(r).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),Ls(a,"")}return Ls(n,e)+o+s}function Cc(e,t,n,o){let s=[],r=[],i=null;const c=({state:h})=>{const g=di(e,location),D=n.value,C=t.value;let B=0;if(h){if(n.value=g,t.value=h,i&&i===D){i=null;return}B=C?h.position-C.position:0}else o(g);s.forEach(M=>{M(n.value,D,{delta:B,type:rn.pop,direction:B?B>0?Yt.forward:Yt.back:Yt.unknown})})};function a(){i=n.value}function d(h){s.push(h);const g=()=>{const D=s.indexOf(h);D>-1&&s.splice(D,1)};return r.push(g),g}function f(){const{history:h}=window;h.state&&h.replaceState(ee({},h.state,{scroll:Vn()}),"")}function p(){for(const h of r)h();r=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:a,listen:d,destroy:p}}function Rs(e,t,n,o=!1,s=!1){return{back:e,current:t,forward:n,replaced:o,position:window.history.length,scroll:s?Vn():null}}function xc(e){const{history:t,location:n}=window,o={value:di(e,n)},s={value:t.state};s.value||r(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(a,d,f){const p=e.indexOf("#"),h=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+a:Pc()+e+a;try{t[f?"replaceState":"pushState"](d,"",h),s.value=d}catch(g){console.error(g),n[f?"replace":"assign"](h)}}function i(a,d){const f=ee({},t.state,Rs(s.value.back,a,s.value.forward,!0),d,{position:s.value.position});r(a,f,!0),o.value=a}function c(a,d){const f=ee({},s.value,t.state,{forward:a,scroll:Vn()});r(f.current,f,!0);const p=ee({},Rs(o.value,a,null),{position:f.position+1},d);r(a,p,!1),o.value=a}return{location:o,state:s,push:c,replace:i}}function Ec(e){e=yc(e);const t=xc(e),n=Cc(e,t.state,t.location,t.replace);function o(r,i=!0){i||n.pauseListeners(),history.go(r)}const s=ee({location:"",base:e,go:o,createHref:wc.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Dc(e){return typeof e=="string"||e&&typeof e=="object"}function fi(e){return typeof e=="string"||typeof e=="symbol"}const pi=Symbol("");var Ns;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ns||(Ns={}));function Vt(e,t){return ee(new Error,{type:e,[pi]:!0},t)}function Ye(e,t){return e instanceof Error&&pi in e&&(t==null||!!(e.type&t))}const Ws="[^/]+?",Lc={sensitive:!1,strict:!1,start:!0,end:!0},kc=/[.+*?^${}()[\]/\\]/g;function Uc(e,t){const n=ee({},Lc,t),o=[];let s=n.start?"^":"";const r=[];for(const d of e){const f=d.length?[]:[90];n.strict&&!d.length&&(s+="/");for(let p=0;p<d.length;p++){const h=d[p];let g=40+(n.sensitive?.25:0);if(h.type===0)p||(s+="/"),s+=h.value.replace(kc,"\\$&"),g+=40;else if(h.type===1){const{value:D,repeatable:C,optional:B,regexp:M}=h;r.push({name:D,repeatable:C,optional:B});const R=M||Ws;if(R!==Ws){g+=10;try{new RegExp(`(${R})`)}catch($){throw new Error(`Invalid custom RegExp for param "${D}" (${R}): `+$.message)}}let L=C?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;p||(L=B&&d.length<2?`(?:/${L})`:"/"+L),B&&(L+="?"),s+=L,g+=20,B&&(g+=-8),C&&(g+=-20),R===".*"&&(g+=-50)}f.push(g)}o.push(f)}if(n.strict&&n.end){const d=o.length-1;o[d][o[d].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const i=new RegExp(s,n.sensitive?"":"i");function c(d){const f=d.match(i),p={};if(!f)return null;for(let h=1;h<f.length;h++){const g=f[h]||"",D=r[h-1];p[D.name]=g&&D.repeatable?g.split("/"):g}return p}function a(d){let f="",p=!1;for(const h of e){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const g of h)if(g.type===0)f+=g.value;else if(g.type===1){const{value:D,repeatable:C,optional:B}=g,M=D in d?d[D]:"";if(Ge(M)&&!C)throw new Error(`Provided param "${D}" is an array but it is not repeatable (* or + modifiers)`);const R=Ge(M)?M.join("/"):M;if(!R)if(B)h.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${D}"`);f+=R}}return f||"/"}return{re:i,score:o,keys:r,parse:c,stringify:a}}function Rc(e,t){let n=0;for(;n<e.length&&n<t.length;){const o=t[n]-e[n];if(o)return o;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function hi(e,t){let n=0;const o=e.score,s=t.score;for(;n<o.length&&n<s.length;){const r=Rc(o[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-o.length)===1){if(Ms(o))return 1;if(Ms(s))return-1}return s.length-o.length}function Ms(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Nc={type:0,value:""},Wc=/[a-zA-Z0-9_]/;function Mc(e){if(!e)return[[]];if(e==="/")return[[Nc]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${d}": ${g}`)}let n=0,o=n;const s=[];let r;function i(){r&&s.push(r),r=[]}let c=0,a,d="",f="";function p(){d&&(n===0?r.push({type:0,value:d}):n===1||n===2||n===3?(r.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:d,regexp:f,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),d="")}function h(){d+=a}for(;c<e.length;){if(a=e[c++],a==="\\"&&n!==2){o=n,n=4;continue}switch(n){case 0:a==="/"?(d&&p(),i()):a===":"?(p(),n=1):h();break;case 4:h(),n=o;break;case 1:a==="("?n=2:Wc.test(a)?h():(p(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+a:n=3:f+=a;break;case 3:p(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${d}"`),p(),i(),s}function Oc(e,t,n){const o=Uc(Mc(e.path),n),s=ee(o,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Hc(e,t){const n=[],o=new Map;t=Bs({strict:!1,end:!0,sensitive:!1},t);function s(p){return o.get(p)}function r(p,h,g){const D=!g,C=Bc(p);C.aliasOf=g&&g.record;const B=Bs(t,p),M=[C];if("alias"in p){const $=typeof p.alias=="string"?[p.alias]:p.alias;for(const ne of $)M.push(ee({},C,{components:g?g.record.components:C.components,path:ne,aliasOf:g?g.record:C}))}let R,L;for(const $ of M){const{path:ne}=$;if(h&&ne[0]!=="/"){const O=h.record.path,oe=O[O.length-1]==="/"?"":"/";$.path=h.record.path+(ne&&oe+ne)}if(R=Oc($,h,B),g?g.alias.push(R):(L=L||R,L!==R&&L.alias.push(R),D&&p.name&&!Hs(R)&&i(p.name)),mi(R)&&a(R),C.children){const O=C.children;for(let oe=0;oe<O.length;oe++)r(O[oe],R,g&&g.children[oe])}g=g||R}return L?()=>{i(L)}:Zt}function i(p){if(fi(p)){const h=o.get(p);h&&(o.delete(p),n.splice(n.indexOf(h),1),h.children.forEach(i),h.alias.forEach(i))}else{const h=n.indexOf(p);h>-1&&(n.splice(h,1),p.record.name&&o.delete(p.record.name),p.children.forEach(i),p.alias.forEach(i))}}function c(){return n}function a(p){const h=Gc(p,n);n.splice(h,0,p),p.record.name&&!Hs(p)&&o.set(p.record.name,p)}function d(p,h){let g,D={},C,B;if("name"in p&&p.name){if(g=o.get(p.name),!g)throw Vt(1,{location:p});B=g.record.name,D=ee(Os(h.params,g.keys.filter(L=>!L.optional).concat(g.parent?g.parent.keys.filter(L=>L.optional):[]).map(L=>L.name)),p.params&&Os(p.params,g.keys.map(L=>L.name))),C=g.stringify(D)}else if(p.path!=null)C=p.path,g=n.find(L=>L.re.test(C)),g&&(D=g.parse(C),B=g.record.name);else{if(g=h.name?o.get(h.name):n.find(L=>L.re.test(h.path)),!g)throw Vt(1,{location:p,currentLocation:h});B=g.record.name,D=ee({},h.params,p.params),C=g.stringify(D)}const M=[];let R=g;for(;R;)M.unshift(R.record),R=R.parent;return{name:B,path:C,params:D,matched:M,meta:Vc(M)}}e.forEach(p=>r(p));function f(){n.length=0,o.clear()}return{addRoute:r,resolve:d,removeRoute:i,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function Os(e,t){const n={};for(const o of t)o in e&&(n[o]=e[o]);return n}function Bc(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Fc(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Fc(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const o in e.components)t[o]=typeof n=="object"?n[o]:n;return t}function Hs(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Vc(e){return e.reduce((t,n)=>ee(t,n.meta),{})}function Bs(e,t){const n={};for(const o in e)n[o]=o in t?t[o]:e[o];return n}function Gc(e,t){let n=0,o=t.length;for(;n!==o;){const r=n+o>>1;hi(e,t[r])<0?o=r:n=r+1}const s=jc(e);return s&&(o=t.lastIndexOf(s,o-1)),o}function jc(e){let t=e;for(;t=t.parent;)if(mi(t)&&hi(e,t)===0)return t}function mi({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Kc(e){const t={};if(e===""||e==="?")return t;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<o.length;++s){const r=o[s].replace(ii," "),i=r.indexOf("="),c=sn(i<0?r:r.slice(0,i)),a=i<0?null:sn(r.slice(i+1));if(c in t){let d=t[c];Ge(d)||(d=t[c]=[d]),d.push(a)}else t[c]=a}return t}function Fs(e){let t="";for(let n in e){const o=e[n];if(n=uc(n),o==null){o!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ge(o)?o.map(r=>r&&go(r)):[o&&go(o)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function $c(e){const t={};for(const n in e){const o=e[n];o!==void 0&&(t[n]=Ge(o)?o.map(s=>s==null?null:""+s):o==null?o:""+o)}return t}const qc=Symbol(""),Vs=Symbol(""),Vo=Symbol(""),gi=Symbol(""),vo=Symbol("");function Kt(){let e=[];function t(o){return e.push(o),()=>{const s=e.indexOf(o);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function dt(e,t,n,o,s,r=i=>i()){const i=o&&(o.enterCallbacks[s]=o.enterCallbacks[s]||[]);return()=>new Promise((c,a)=>{const d=h=>{h===!1?a(Vt(4,{from:n,to:t})):h instanceof Error?a(h):Dc(h)?a(Vt(2,{from:t,to:h})):(i&&o.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),c())},f=r(()=>e.call(o&&o.instances[s],t,n,d));let p=Promise.resolve(f);e.length<3&&(p=p.then(d)),p.catch(h=>a(h))})}function to(e,t,n,o,s=r=>r()){const r=[];for(const i of e)for(const c in i.components){let a=i.components[c];if(!(t!=="beforeRouteEnter"&&!i.instances[c]))if(zc(a)){const f=(a.__vccOpts||a)[t];f&&r.push(dt(f,n,o,i,c,s))}else{let d=a();r.push(()=>d.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${i.path}"`));const p=Xl(f)?f.default:f;i.components[c]=p;const g=(p.__vccOpts||p)[t];return g&&dt(g,n,o,i,c,s)()}))}}return r}function zc(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Gs(e){const t=tt(Vo),n=tt(gi),o=Fe(()=>{const a=Je(e.to);return t.resolve(a)}),s=Fe(()=>{const{matched:a}=o.value,{length:d}=a,f=a[d-1],p=n.matched;if(!f||!p.length)return-1;const h=p.findIndex(Ft.bind(null,f));if(h>-1)return h;const g=js(a[d-2]);return d>1&&js(f)===g&&p[p.length-1].path!==g?p.findIndex(Ft.bind(null,a[d-2])):h}),r=Fe(()=>s.value>-1&&Yc(n.params,o.value.params)),i=Fe(()=>s.value>-1&&s.value===n.matched.length-1&&ui(n.params,o.value.params));function c(a={}){return Zc(a)?t[Je(e.replace)?"replace":"push"](Je(e.to)).catch(Zt):Promise.resolve()}return{route:o,href:Fe(()=>o.value.href),isActive:r,isExactActive:i,navigate:c}}const Jc=kr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Gs,setup(e,{slots:t}){const n=Un(Gs(e)),{options:o}=tt(Vo),s=Fe(()=>({[Ks(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[Ks(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&t.default(n);return e.custom?r:Ho("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),Qc=Jc;function Zc(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Yc(e,t){for(const n in t){const o=t[n],s=e[n];if(typeof o=="string"){if(o!==s)return!1}else if(!Ge(s)||s.length!==o.length||o.some((r,i)=>r!==s[i]))return!1}return!0}function js(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ks=(e,t,n)=>e??t??n,Xc=kr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const o=tt(vo),s=Fe(()=>e.route||o.value),r=tt(Vs,0),i=Fe(()=>{let d=Je(r);const{matched:f}=s.value;let p;for(;(p=f[d])&&!p.components;)d++;return d}),c=Fe(()=>s.value.matched[i.value]);yn(Vs,Fe(()=>i.value+1)),yn(qc,c),yn(vo,s);const a=Rn();return _n(()=>[a.value,c.value,e.name],([d,f,p],[h,g,D])=>{f&&(f.instances[p]=d,g&&g!==f&&d&&d===h&&(f.leaveGuards.size||(f.leaveGuards=g.leaveGuards),f.updateGuards.size||(f.updateGuards=g.updateGuards))),d&&f&&(!g||!Ft(f,g)||!h)&&(f.enterCallbacks[p]||[]).forEach(C=>C(d))},{flush:"post"}),()=>{const d=s.value,f=e.name,p=c.value,h=p&&p.components[f];if(!h)return $s(n.default,{Component:h,route:d});const g=p.props[f],D=g?g===!0?d.params:typeof g=="function"?g(d):g:null,B=Ho(h,ee({},D,t,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(p.instances[f]=null)},ref:a}));return $s(n.default,{Component:B,route:d})||B}}});function $s(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const bi=Xc;function eu(e){const t=Hc(e.routes,e),n=e.parseQuery||Kc,o=e.stringifyQuery||Fs,s=e.history,r=Kt(),i=Kt(),c=Kt(),a=oa(at);let d=at;Nt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Xn.bind(null,v=>""+v),p=Xn.bind(null,fc),h=Xn.bind(null,sn);function g(v,x){let T,U;return fi(v)?(T=t.getRecordMatcher(v),U=x):U=v,t.addRoute(U,T)}function D(v){const x=t.getRecordMatcher(v);x&&t.removeRoute(x)}function C(){return t.getRoutes().map(v=>v.record)}function B(v){return!!t.getRecordMatcher(v)}function M(v,x){if(x=ee({},x||a.value),typeof v=="string"){const u=eo(n,v,x.path),m=t.resolve({path:u.path},x),y=s.createHref(u.fullPath);return ee(u,m,{params:h(m.params),hash:sn(u.hash),redirectedFrom:void 0,href:y})}let T;if(v.path!=null)T=ee({},v,{path:eo(n,v.path,x.path).path});else{const u=ee({},v.params);for(const m in u)u[m]==null&&delete u[m];T=ee({},v,{params:p(u)}),x.params=p(x.params)}const U=t.resolve(T,x),X=v.hash||"";U.params=f(h(U.params));const le=mc(o,ee({},v,{hash:cc(X),path:U.path})),l=s.createHref(le);return ee({fullPath:le,hash:X,query:o===Fs?$c(v.query):v.query||{}},U,{redirectedFrom:void 0,href:l})}function R(v){return typeof v=="string"?eo(n,v,a.value.path):ee({},v)}function L(v,x){if(d!==v)return Vt(8,{from:x,to:v})}function $(v){return oe(v)}function ne(v){return $(ee(R(v),{replace:!0}))}function O(v){const x=v.matched[v.matched.length-1];if(x&&x.redirect){const{redirect:T}=x;let U=typeof T=="function"?T(v):T;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=R(U):{path:U},U.params={}),ee({query:v.query,hash:v.hash,params:U.path!=null?{}:v.params},U)}}function oe(v,x){const T=d=M(v),U=a.value,X=v.state,le=v.force,l=v.replace===!0,u=O(T);if(u)return oe(ee(R(u),{state:typeof u=="object"?ee({},X,u.state):X,force:le,replace:l}),x||T);const m=T;m.redirectedFrom=x;let y;return!le&&gc(o,U,T)&&(y=Vt(16,{to:m,from:U}),je(U,U,!0,!1)),(y?Promise.resolve(y):z(m,U)).catch(b=>Ye(b)?Ye(b,2)?b:ot(b):Z(b,m,U)).then(b=>{if(b){if(Ye(b,2))return oe(ee({replace:l},R(b.to),{state:typeof b.to=="object"?ee({},X,b.to.state):X,force:le}),x||m)}else b=k(m,U,!0,l,X);return se(m,U,b),b})}function he(v,x){const T=L(v,x);return T?Promise.reject(T):Promise.resolve()}function j(v){const x=Ut.values().next().value;return x&&typeof x.runWithContext=="function"?x.runWithContext(v):v()}function z(v,x){let T;const[U,X,le]=tu(v,x);T=to(U.reverse(),"beforeRouteLeave",v,x);for(const u of U)u.leaveGuards.forEach(m=>{T.push(dt(m,v,x))});const l=he.bind(null,v,x);return T.push(l),Le(T).then(()=>{T=[];for(const u of r.list())T.push(dt(u,v,x));return T.push(l),Le(T)}).then(()=>{T=to(X,"beforeRouteUpdate",v,x);for(const u of X)u.updateGuards.forEach(m=>{T.push(dt(m,v,x))});return T.push(l),Le(T)}).then(()=>{T=[];for(const u of le)if(u.beforeEnter)if(Ge(u.beforeEnter))for(const m of u.beforeEnter)T.push(dt(m,v,x));else T.push(dt(u.beforeEnter,v,x));return T.push(l),Le(T)}).then(()=>(v.matched.forEach(u=>u.enterCallbacks={}),T=to(le,"beforeRouteEnter",v,x,j),T.push(l),Le(T))).then(()=>{T=[];for(const u of i.list())T.push(dt(u,v,x));return T.push(l),Le(T)}).catch(u=>Ye(u,8)?u:Promise.reject(u))}function se(v,x,T){c.list().forEach(U=>j(()=>U(v,x,T)))}function k(v,x,T,U,X){const le=L(v,x);if(le)return le;const l=x===at,u=Nt?history.state:{};T&&(U||l?s.replace(v.fullPath,ee({scroll:l&&u&&u.scroll},X)):s.push(v.fullPath,X)),a.value=v,je(v,x,T,l),ot()}let Q;function me(){Q||(Q=s.listen((v,x,T)=>{if(!cn.listening)return;const U=M(v),X=O(U);if(X){oe(ee(X,{replace:!0}),U).catch(Zt);return}d=U;const le=a.value;Nt&&Sc(Us(le.fullPath,T.delta),Vn()),z(U,le).catch(l=>Ye(l,12)?l:Ye(l,2)?(oe(l.to,U).then(u=>{Ye(u,20)&&!T.delta&&T.type===rn.pop&&s.go(-1,!1)}).catch(Zt),Promise.reject()):(T.delta&&s.go(-T.delta,!1),Z(l,U,le))).then(l=>{l=l||k(U,le,!1),l&&(T.delta&&!Ye(l,8)?s.go(-T.delta,!1):T.type===rn.pop&&Ye(l,20)&&s.go(-1,!1)),se(U,le,l)}).catch(Zt)}))}let Oe=Kt(),ue=Kt(),te;function Z(v,x,T){ot(v);const U=ue.list();return U.length?U.forEach(X=>X(v,x,T)):console.error(v),Promise.reject(v)}function Ze(){return te&&a.value!==at?Promise.resolve():new Promise((v,x)=>{Oe.add([v,x])})}function ot(v){return te||(te=!v,me(),Oe.list().forEach(([x,T])=>v?T(v):x()),Oe.reset()),v}function je(v,x,T,U){const{scrollBehavior:X}=e;if(!Nt||!X)return Promise.resolve();const le=!T&&Tc(Us(v.fullPath,0))||(U||!T)&&history.state&&history.state.scroll||null;return Sr().then(()=>X(v,x,le)).then(l=>l&&Ic(l)).catch(l=>Z(l,v,x))}const Te=v=>s.go(v);let kt;const Ut=new Set,cn={currentRoute:a,listening:!0,addRoute:g,removeRoute:D,clearRoutes:t.clearRoutes,hasRoute:B,getRoutes:C,resolve:M,options:e,push:$,replace:ne,go:Te,back:()=>Te(-1),forward:()=>Te(1),beforeEach:r.add,beforeResolve:i.add,afterEach:c.add,onError:ue.add,isReady:Ze,install(v){const x=this;v.component("RouterLink",Qc),v.component("RouterView",bi),v.config.globalProperties.$router=x,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Je(a)}),Nt&&!kt&&a.value===at&&(kt=!0,$(s.location).catch(X=>{}));const T={};for(const X in at)Object.defineProperty(T,X,{get:()=>a.value[X],enumerable:!0});v.provide(Vo,x),v.provide(gi,mr(T)),v.provide(vo,a);const U=v.unmount;Ut.add(v),v.unmount=function(){Ut.delete(v),Ut.size<1&&(d=at,Q&&Q(),Q=null,a.value=at,kt=!1,te=!1),U()}}};function Le(v){return v.reduce((x,T)=>x.then(()=>j(T)),Promise.resolve())}return cn}function tu(e,t){const n=[],o=[],s=[],r=Math.max(t.matched.length,e.matched.length);for(let i=0;i<r;i++){const c=t.matched[i];c&&(e.matched.find(d=>Ft(d,c))?o.push(c):n.push(c));const a=e.matched[i];a&&(t.matched.find(d=>Ft(d,a))||s.push(a))}return[n,o,s]}const Ae=(e,t)=>{const n=e.__vccOpts||e;for(const[o,s]of t)n[o]=s;return n},nu={__name:"App",setup(e){return(t,n)=>(fe(),ei(Je(bi)))}},ou=Ae(nu,[["__scopeId","data-v-0b57781d"]]),su={class:"app-header"},ru={class:"container"},iu={class:"app-header-nav",style:{"list-style":"none"}},au={__name:"LayoutHeader",setup(e){return(t,n)=>{const o=Et("RouterLink");return fe(),ve("header",su,[P("div",ru,[P("ul",iu,[P("li",null,[G(o,{to:"/"},{default:_e(()=>[de("WebAPI")]),_:1})]),P("li",null,[G(o,{to:"/vue3"},{default:_e(()=>[de("Vue3")]),_:1})]),P("li",null,[G(o,{to:"/download"},{default:_e(()=>[de("下載")]),_:1})]),P("li",null,[G(o,{to:"/others"},{default:_e(()=>[de("其他")]),_:1})]),P("li",null,[G(o,{to:"/dotnet7_vue3"},{default:_e(()=>[de("Dotnet7_vue3")]),_:1})]),P("li",null,[G(o,{to:"/vscode_function"},{default:_e(()=>[de("VS Code小功能")]),_:1})]),P("li",null,[G(o,{to:"/video"},{default:_e(()=>[de("Video")]),_:1})]),P("li",null,[G(o,{to:"/dotnetapi_angular"},{default:_e(()=>[de("DotnetAPI_Angular")]),_:1})])])])])}}},lu=Ae(au,[["__scopeId","data-v-179b1728"]]),cu=P("hr",null,null,-1),uu={__name:"index",setup(e){return(t,n)=>{const o=Et("RouterView");return fe(),ve(ie,null,[G(lu),cu,G(o)],64)}}},du="/vue-my-note/assets/uparrow-CelNzM_b.png",fu={name:"scroll-top",data(){return{scrollTop:0,time:0,dParams:20,scrollState:0}},computed:{showTop:function(){return this.scrollTop>200}},mounted(){window.addEventListener("scroll",this.getScrollTop)},methods:{toTop(e){if(this.scrollState)return;this.scrollState=1,e.preventDefault(),document.documentElement.scrollTop||document.body.scrollTop;let t=this;this.time=setInterval(function(){t.gotoTop(t.scrollTop-t.dParams)},30)},gotoTop(e){this.dParams+=20,e=e>0?e:0,document.documentElement.scrollTop=document.body.scrollTop=window.pageYOffset=e,this.scrollTop<10&&(clearInterval(this.time),this.dParams=20,this.scrollState=0)},getScrollTop(){this.scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop}}},pu=e=>(We("data-v-77d80545"),e=e(),Me(),e),hu=pu(()=>P("img",{src:du},null,-1)),mu=[hu];function gu(e,t,n,o,s,r){return fe(),ve("div",{class:"scrollTop",onClick:t[0]||(t[0]=(...i)=>r.toTop&&r.toTop(...i))},mu)}const Qe=Ae(fu,[["render",gu],["__scopeId","data-v-77d80545"]]),bu=e=>(We("data-v-b6c9cecb"),e=e(),Me(),e),vu=bu(()=>P("div",null,"我是WebAPI頁面",-1)),yu=`
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
  `,_u={__name:"index",setup(e){return Qe.scrollToTop=!0,(t,n)=>(fe(),ve(ie,null,[vu,P("div",null,[P("div",{innerHTML:yu})]),G(Qe)],64))}},wu=Ae(_u,[["__scopeId","data-v-b6c9cecb"]]),Au=P("div",null,"我是RabbitVue3頁面",-1),Iu=`
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
`,Su={__name:"index",setup(e){return Qe.scrollToTop=!0,(t,n)=>(fe(),ve(ie,null,[Au,P("div",{innerHTML:Iu}),G(Qe)],64))}},Tu={},Pu=Wo('<div data-v-ff3ccd06>我是Download頁面</div><div id="Vue3" class="content" data-v-ff3ccd06><div class="box" data-v-ff3ccd06><div style="padding-top:20px;" data-v-ff3ccd06>【Vue3】</div><div data-v-ff3ccd06><a href="https://www.youtube.com/watch?v=LlYhPO8Ti2U" target="_blank" data-v-ff3ccd06> 1.NET7 Web API | SQL Database | VueJS(3.0) - Composition API | CRUD| Full Video<span class="pdf" data-v-ff3ccd06>YouTube</span></a><p data-v-ff3ccd06>.解決CORS問題</p></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=19m0QpipH0fPS51aztlgZ0gFxwWkSpqo_" data-v-ff3ccd06> 1.dotnet7_vue3<span class="pdf" data-v-ff3ccd06>download&gt;</span></a></div><div data-v-ff3ccd06><a href="https://www.youtube.com/watch?v=2FoD_8dMGyU&amp;list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG" target="_blank" data-v-ff3ccd06> 2.【黑馬程序員】前端Vue3小兔鮮實戰項目<span class="pdf" data-v-ff3ccd06>YouTube</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=10LPanB6adG6BLF0cKcM3H-VCSvUWwf8A" data-v-ff3ccd06> 3.vue-rabbit_my 小兔鮮<span class="pdf" data-v-ff3ccd06>download</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=1AXgm42kcojPX2g7EfrSmHyb-N1BJAAMi" data-v-ff3ccd06> 4.vue-rabbit_sku 小兔鮮<span class="pdf" data-v-ff3ccd06>download</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=18N6U0JeeUsS6EhGGz2jvh3aZK41L-uBc" data-v-ff3ccd06> 5.vue3-basic-project-my(mock)<span class="pdf" data-v-ff3ccd06>download</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=1Xe_GxmzXJVSIxMnqw3cm15YkLLQc4tWD" data-v-ff3ccd06> 6.vue3-basic-project-my(有驗證名字不能重覆update)<span class="pdf" data-v-ff3ccd06>download</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=1551IhmQAwld3cmTH60XHFYvEbvCj2Hfo" data-v-ff3ccd06> 7.台灣濕地學會<span class="pdf" data-v-ff3ccd06>download</span></a></div><div style="padding-top:20px;" data-v-ff3ccd06>【WebAPI】</div><div data-v-ff3ccd06><a href="https://blog.talllkai.com/ASPNETCore" target="_blank" data-v-ff3ccd06> 1.完整且輕鬆學習ASP.NET Core Web API<span class="pdf" data-v-ff3ccd06>Web</span></a></div><div data-v-ff3ccd06><a href="https://www.youtube.com/watch?v=dXUfZuf1Wp4&amp;list=PLneJIGUTIItuqdxuDBEKCrvXCtCdUf_Xm" target="_blank" data-v-ff3ccd06> 2.ASP.NET Core Web API 入門教學<span class="pdf" data-v-ff3ccd06>YouTube</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=1Mi3nQijxvyz6TmA7NWzkudmxeJha7W-e" data-v-ff3ccd06> 3.DataBase_First_凱哥<span class="pdf" data-v-ff3ccd06>download</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=1ZvJ5hwHCPzPRMsv_w3sWJOxKYI88h8xd" data-v-ff3ccd06> 4.BookMark<span class="pdf" data-v-ff3ccd06>download</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=1Oiyo9Pgg-qCY6mkY9L0WDVmAc3VQYeeP" data-v-ff3ccd06> 5.無蝦米download<span class="pdf" data-v-ff3ccd06>download</span></a></div></div></div>',2);function Cu(e,t){return Pu}const xu=Ae(Tu,[["render",Cu],["__scopeId","data-v-ff3ccd06"]]),Eu=`
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
`,vi={__name:"_4_deployVite",setup(e){return Qe.scrollToTop=!0,(t,n)=>(fe(),ve(ie,null,[P("div",{innerHTML:Eu}),G(Qe)],64))}},ln=e=>(We("data-v-dc51a64c"),e=e(),Me(),e),Du=ln(()=>P("div",null,"這是其他頁",-1)),Lu={id:"Vite_to_github",class:"content"},ku=ln(()=>P("div",null,[de("1.Vue3 CRUD + bootstrap "),P("a",{href:"https://www.youtube.com/watch?v=PrKh6GemOyg",target:"_blank"}," https://www.youtube.com/watch?v=PrKh6GemOyg ")],-1)),Uu=ln(()=>P("div",null,[de("2.Vue3 學習筆記 "),P("a",{href:"https://hackmd.io/@Lin-Jay/S1xju_nKO",target:"_blank"}," https://hackmd.io/@Lin-Jay/S1xju_nKO ")],-1)),Ru=ln(()=>P("div",null,[de("3.Build app using Vue JS, .NET Core Web API and Microsoft SQL Server(create Azure) "),P("a",{href:"https://www.youtube.com/watch?v=TMmhECU3rHs",target:"_blank"}," https://www.youtube.com/watch?v=TMmhECU3rHs ")],-1)),Nu=ln(()=>P("a",{href:"https://www.youtube.com/watch?v=yo2bMGnIKE8",target:"_blank"}," https://www.youtube.com/watch?v=yo2bMGnIKE8 ",-1)),Wu={key:0},Mu=Wo('<div data-v-dc51a64c>5.先學 axios 基礎與封裝管理 API <a href="https://ithelp.ithome.com.tw/articles/10304656" target="_blank" data-v-dc51a64c> https://ithelp.ithome.com.tw/articles/10304656 </a></div><div data-v-dc51a64c>6.[C#][ASP.NET] Web API 開發心得 (7) - 使用 Token 進行 API 授權驗證 <a href="https://ithelp.ithome.com.tw/articles/10199102" target="_blank" data-v-dc51a64c> https://ithelp.ithome.com.tw/articles/10199102 </a></div><div data-v-dc51a64c>7.Poy Chang Trial and Error <a href="https://blog.poychang.net/categories/" target="_blank" data-v-dc51a64c> https://blog.poychang.net/categories/ </a></div><div data-v-dc51a64c>8.阿里巴巴向量圖標庫: iconfont <a href="https://www.iconfont.cn/" target="_blank" data-v-dc51a64c> https://www.iconfont.cn/ </a></div><div data-v-dc51a64c>9.VueUse 中文文檔 <a href="https://vueuse.pages.dev/" target="_blank" data-v-dc51a64c> https://vueuse.pages.dev/ </a></div>',5),Ou={__name:"index",setup(e){let t=Rn(!1);return(n,o)=>{const s=Et("toTop");return fe(),ve(ie,null,[Du,P("div",Lu,[ku,Uu,Ru,P("div",null,[de("4.How to Deploy Your Vite App to Github Pages "),Nu,P("button",{onClick:o[0]||(o[0]=r=>Se(t)?t.value=!Je(t):t=!Je(t))},"Toggle"),G(Bo,null,{default:_e(()=>[Je(t)?(fe(),ve("div",Wu,[G(vi)])):al("",!0)]),_:1})]),Mu]),G(s)],64)}}},Hu=Ae(Ou,[["__scopeId","data-v-dc51a64c"]]),yi=e=>(We("data-v-c5b6fb41"),e=e(),Me(),e),Bu=yi(()=>P("div",null,[P("h2",null,"Dotnet7_vue3"),P("div",null,".NET7 Web API | SQL Database | VueJS(3.0) - Composition API | CRUD")],-1)),Fu={class:"container"},Vu={class:"app-header-nav",style:{"list-style":"none"}},Gu=yi(()=>P("div",null,null,-1)),ju={__name:"index",setup(e){return Qe.scrollToTop=!0,(t,n)=>{const o=Et("RouterLink"),s=Et("RouterView");return fe(),ve(ie,null,[Bu,P("div",null,[P("div",Fu,[P("ul",Vu,[P("li",null,[G(o,{to:"/_beach_info"},{default:_e(()=>[de("_Beach_Info.vue")]),_:1})]),P("li",null,[G(o,{to:"/editbeach"},{default:_e(()=>[de("AddBeach.vue")]),_:1})]),P("li",null,[G(o,{to:"/beachList"},{default:_e(()=>[de("BeachList.vue")]),_:1})]),P("li",null,[G(o,{to:"/editbeach"},{default:_e(()=>[de("EditBeach.vue")]),_:1})]),P("li",null,[G(o,{to:"/routerbeach"},{default:_e(()=>[de("router_Beach.vue")]),_:1})]),P("li",null,[G(o,{to:"/confirmDeletePopup"},{default:_e(()=>[de("ConfirmDeletePopup.vue")]),_:1})])])]),G(s),Gu]),G(Qe)],64)}}},Ku=Ae(ju,[["__scopeId","data-v-c5b6fb41"]]),$u=e=>(We("data-v-090910d0"),e=e(),Me(),e),qu=$u(()=>P("div",null,"這是_Beach_Info",-1)),zu=`
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
`,Ju={__name:"_Beach_Info",setup(e){return(t,n)=>(fe(),ve(ie,null,[qu,P("div",{class:"content"},[P("pre",null,"      "+Lt(zu)+`
    `)])],64))}},qs=Ae(Ju,[["__scopeId","data-v-090910d0"]]),Qu=e=>(We("data-v-56326e1c"),e=e(),Me(),e),Zu=Qu(()=>P("div",null,"這是AddBeach",-1)),Yu=`
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

`,Xu={__name:"AddBeach",setup(e){return(t,n)=>(fe(),ve(ie,null,[Zu,P("div",{class:"content"},[P("pre",null,"      "+Lt(Yu)+`
    `)])],64))}},ed=Ae(Xu,[["__scopeId","data-v-56326e1c"]]),td=e=>(We("data-v-a17ba2a6"),e=e(),Me(),e),nd=td(()=>P("div",null,"這是BeachList",-1)),od=`
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

`,sd={__name:"BeachList",setup(e){return(t,n)=>(fe(),ve(ie,null,[nd,P("div",{class:"content"},[P("pre",null,"      "+Lt(od)+`
    `)])],64))}},rd=Ae(sd,[["__scopeId","data-v-a17ba2a6"]]),id=e=>(We("data-v-2a59f778"),e=e(),Me(),e),ad=id(()=>P("div",null,"這是EditBeach",-1)),ld=`
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

`,cd={__name:"EditBeach",setup(e){return(t,n)=>(fe(),ve(ie,null,[ad,P("div",{class:"content"},[P("pre",null,"      "+Lt(ld)+`
    `)])],64))}},ud=Ae(cd,[["__scopeId","data-v-2a59f778"]]),dd=e=>(We("data-v-f0f2e55e"),e=e(),Me(),e),fd=dd(()=>P("div",null,"這是_router_Beach",-1)),pd=`
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


`,hd={__name:"router_Beach",setup(e){return(t,n)=>(fe(),ve(ie,null,[fd,P("div",{class:"content"},[P("pre",null,"      "+Lt(pd)+`
    `)])],64))}},md=Ae(hd,[["__scopeId","data-v-f0f2e55e"]]),gd=e=>(We("data-v-69fb1a2b"),e=e(),Me(),e),bd=gd(()=>P("div",null,"這是ConfirmDeletePopup",-1)),vd=`
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


`,yd={__name:"ConfirmDeletePopup",setup(e){return(t,n)=>(fe(),ve(ie,null,[bd,P("div",{class:"content"},[P("pre",null,`      這放在components\\
      由BeachList 呼叫
      `+Lt(vd)+`
    `)])],64))}},_d=Ae(yd,[["__scopeId","data-v-69fb1a2b"]]),_i=e=>(We("data-v-e2fffa5f"),e=e(),Me(),e),wd=_i(()=>P("div",null,"這是VS Code 功能頁",-1)),Ad=_i(()=>P("div",{id:"Vite_to_github",class:"content"},[P("div",null,[de("1.vS Code文件標簽欄多行顯示 "),P("a",{href:"https://blog.csdn.net/mj475002864/article/details/115456004",target:"_blank"}," https://blog.csdn.net/mj475002864/article/details/115456004 "),P("p",null,"ctrl + shift + p => 查詢 Open Workspace Settings => Wrap Tabs 打勾 ")])],-1)),Id={__name:"index",setup(e){return(t,n)=>{const o=Et("toTop");return fe(),ve(ie,null,[wd,Ad,G(o)],64)}}},Sd=Ae(Id,[["__scopeId","data-v-e2fffa5f"]]),Td=Wo('<div data-v-13d3349d>這是影音頁</div><div id="Vite_to_github" class="content" data-v-13d3349d><div data-v-13d3349d>1.Vue3 CRUD + bootstrap <a href="https://www.youtube.com/watch?v=PrKh6GemOyg" target="_blank" data-v-13d3349d> https://www.youtube.com/watch?v=PrKh6GemOyg </a></div><div data-v-13d3349d>2.後台課程管理系統-Vue3版 <a href="https://www.youtube.com/watch?v=yZMTHoGSuVQ&amp;list=PL_vrngOaamYsIovhZ3Cd9M2vPhm3yRTnG" target="_blank" data-v-13d3349d> https://www.youtube.com/watch?v=yZMTHoGSuVQ&amp;list=PL_vrngOaamYsIovhZ3Cd9M2vPhm3yRTnG </a></div><div data-v-13d3349d>3.2024年不看后悔的Vue3+.NET7+WebAPI从零手写后台管理系统 <a href="https://www.bilibili.com/video/BV1Km411o7ip?p=1&amp;vd_source=1a5937a80fc962029ba6a7b9ee9a1654" target="_blank" data-v-13d3349d> https://www.bilibili.com/video/BV1Km411o7ip?p=1&amp;vd_source=1a5937a80fc962029ba6a7b9ee9a1654 </a><a href="https://search.bilibili.com/all?vt=75651059&amp;keyword=2024%E5%B9%B4%E4%B8%8D%E7%9C%8B%E5%90%8E%E6%82%94%E7%9A%84Vue3%2B.NET7%2BWebAPI&amp;from_source=webtop_search&amp;spm_id_from=333.1007&amp;search_source=5" target="_blank" data-v-13d3349d> https://search.bilibili.com/all?vt=75651059&amp;keyword=2024%E5%B9%B4%E4%B8%8D%E7%9C%8B%E5%90%8E%E6%82%94%E7%9A%84Vue3%2B.NET7%2BWebAPI&amp;from_source=webtop_search&amp;spm_id_from=333.1007&amp;search_source=5 </a></div><div data-v-13d3349d>4.2023全新C#完全零基础入门教程（附源码） <a href="https://www.bilibili.com/read/cv25507935/" target="_blank" data-v-13d3349d> https://www.bilibili.com/read/cv25507935/ </a></div></div>',2),Pd={__name:"index",setup(e){return Rn(!1),(t,n)=>{const o=Et("toTop");return fe(),ve(ie,null,[Td,G(o)],64)}}},Cd=Ae(Pd,[["__scopeId","data-v-13d3349d"]]),xd=e=>(We("data-v-578d3ec3"),e=e(),Me(),e),Ed=xd(()=>P("div",null,"我是DotnetAPI_Angular頁面",-1)),Dd=`
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
  `,Ld={__name:"index",setup(e){return Qe.scrollToTop=!0,(t,n)=>(fe(),ve(ie,null,[Ed,P("div",null,[P("div",{innerHTML:Dd})]),G(Qe)],64))}},kd=Ae(Ld,[["__scopeId","data-v-578d3ec3"]]),Ud=eu({history:Ec("/vue-my-note/"),routes:[{path:"/",component:uu,children:[{path:"",component:wu},{path:"/vue3",component:Su},{path:"/download",component:xu},{path:"/others",component:Hu,children:[{path:"/_4_deployVite",component:vi}]},{path:"/dotnet7_vue3",component:Ku,children:[{path:"",component:qs},{path:"/_beach_info",component:qs},{path:"/addbeach",component:ed},{path:"/beachList",component:rd},{path:"/editbeach",component:ud},{path:"/routerbeach",component:md},{path:"/confirmDeletePopup",component:_d}]},{path:"/vscode_function",component:Sd},{path:"/video",component:Cd},{path:"/dotnetapi_angular",component:kd}]}]}),Go=ql(ou);Go.use(Yl());Go.use(Ud);Go.mount("#app");
