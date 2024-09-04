(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function _o(e,t){const n=new Set(e.split(","));return o=>n.has(o)}const ce={},Mt=[],Ne=()=>{},wi=()=>!1,xn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),yo=e=>e.startsWith("onUpdate:"),be=Object.assign,wo=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ii=Object.prototype.hasOwnProperty,q=(e,t)=>Ii.call(e,t),H=Array.isArray,Ot=e=>En(e)==="[object Map]",qs=e=>En(e)==="[object Set]",G=e=>typeof e=="function",pe=e=>typeof e=="string",gt=e=>typeof e=="symbol",ae=e=>e!==null&&typeof e=="object",zs=e=>(ae(e)||G(e))&&G(e.then)&&G(e.catch),Js=Object.prototype.toString,En=e=>Js.call(e),Ai=e=>En(e).slice(8,-1),Qs=e=>En(e)==="[object Object]",Io=e=>pe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,zt=_o(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Dn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Pi=/-(\w)/g,Ge=Dn(e=>e.replace(Pi,(t,n)=>n?n.toUpperCase():"")),Ti=/\B([A-Z])/g,Lt=Dn(e=>e.replace(Ti,"-$1").toLowerCase()),Ln=Dn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Vn=Dn(e=>e?`on${Ln(e)}`:""),ht=(e,t)=>!Object.is(e,t),Kn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Zs=(e,t,n,o=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:o,value:n})},Si=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Ci=e=>{const t=pe(e)?Number(e):NaN;return isNaN(t)?e:t};let $o;const Ys=()=>$o||($o=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ao(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],s=pe(o)?Li(o):Ao(o);if(s)for(const r in s)t[r]=s[r]}return t}else if(pe(e)||ae(e))return e}const xi=/;(?![^(]*\))/g,Ei=/:([^]+)/,Di=/\/\*[^]*?\*\//g;function Li(e){const t={};return e.replace(Di,"").split(xi).forEach(n=>{if(n){const o=n.split(Ei);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function Po(e){let t="";if(pe(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const o=Po(e[n]);o&&(t+=o+" ")}else if(ae(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ri="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ni=_o(Ri);function Xs(e){return!!e||e===""}const er=e=>!!(e&&e.__v_isRef===!0),Rt=e=>pe(e)?e:e==null?"":H(e)||ae(e)&&(e.toString===Js||!G(e.toString))?er(e)?Rt(e.value):JSON.stringify(e,tr,2):String(e),tr=(e,t)=>er(t)?tr(e,t.value):Ot(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,s],r)=>(n[jn(o,r)+" =>"]=s,n),{})}:qs(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>jn(n))}:gt(t)?jn(t):ae(t)&&!H(t)&&!Qs(t)?String(t):t,jn=(e,t="")=>{var n;return gt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Be;class nr{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Be,!t&&Be&&(this.index=(Be.scopes||(Be.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Be;try{return Be=this,t()}finally{Be=n}}}on(){Be=this}off(){Be=this.parent}stop(t){if(this._active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Wi(e){return new nr(e)}function ki(e,t=Be){t&&t.active&&t.effects.push(e)}function Ui(){return Be}let Ct;class To{constructor(t,n,o,s){this.fn=t,this.trigger=n,this.scheduler=o,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,ki(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,bt();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(Mi(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),vt()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=ft,n=Ct;try{return ft=!0,Ct=this,this._runnings++,qo(this),this.fn()}finally{zo(this),this._runnings--,Ct=n,ft=t}}stop(){this.active&&(qo(this),zo(this),this.onStop&&this.onStop(),this.active=!1)}}function Mi(e){return e.value}function qo(e){e._trackId++,e._depsLength=0}function zo(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)or(e.deps[t],e);e.deps.length=e._depsLength}}function or(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let ft=!0,no=0;const sr=[];function bt(){sr.push(ft),ft=!1}function vt(){const e=sr.pop();ft=e===void 0?!0:e}function So(){no++}function Co(){for(no--;!no&&oo.length;)oo.shift()()}function rr(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const o=e.deps[e._depsLength];o!==t?(o&&or(o,e),e.deps[e._depsLength++]=t):e._depsLength++}}const oo=[];function ir(e,t,n){So();for(const o of e.keys()){let s;o._dirtyLevel<t&&(s??(s=e.get(o)===o._trackId))&&(o._shouldSchedule||(o._shouldSchedule=o._dirtyLevel===0),o._dirtyLevel=t),o._shouldSchedule&&(s??(s=e.get(o)===o._trackId))&&(o.trigger(),(!o._runnings||o.allowRecurse)&&o._dirtyLevel!==2&&(o._shouldSchedule=!1,o.scheduler&&oo.push(o.scheduler)))}Co()}const ar=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},so=new WeakMap,xt=Symbol(""),ro=Symbol("");function Ce(e,t,n){if(ft&&Ct){let o=so.get(e);o||so.set(e,o=new Map);let s=o.get(n);s||o.set(n,s=ar(()=>o.delete(n))),rr(Ct,s)}}function et(e,t,n,o,s,r){const i=so.get(e);if(!i)return;let c=[];if(t==="clear")c=[...i.values()];else if(n==="length"&&H(e)){const a=Number(o);i.forEach((d,f)=>{(f==="length"||!gt(f)&&f>=a)&&c.push(d)})}else switch(n!==void 0&&c.push(i.get(n)),t){case"add":H(e)?Io(n)&&c.push(i.get("length")):(c.push(i.get(xt)),Ot(e)&&c.push(i.get(ro)));break;case"delete":H(e)||(c.push(i.get(xt)),Ot(e)&&c.push(i.get(ro)));break;case"set":Ot(e)&&c.push(i.get(xt));break}So();for(const a of c)a&&ir(a,4);Co()}const Oi=_o("__proto__,__v_isRef,__isVue"),lr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(gt)),Jo=Hi();function Hi(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const o=J(this);for(let r=0,i=this.length;r<i;r++)Ce(o,"get",r+"");const s=o[t](...n);return s===-1||s===!1?o[t](...n.map(J)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){bt(),So();const o=J(this)[t].apply(this,n);return Co(),vt(),o}}),e}function Bi(e){gt(e)||(e=String(e));const t=J(this);return Ce(t,"has",e),t.hasOwnProperty(e)}class cr{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,o){const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return o===(s?r?Xi:pr:r?fr:dr).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(o)?t:void 0;const i=H(t);if(!s){if(i&&q(Jo,n))return Reflect.get(Jo,n,o);if(n==="hasOwnProperty")return Bi}const c=Reflect.get(t,n,o);return(gt(n)?lr.has(n):Oi(n))||(s||Ce(t,"get",n),r)?c:Pe(c)?i&&Io(n)?c:c.value:ae(c)?s?mr(c):Nn(c):c}}class ur extends cr{constructor(t=!1){super(!1,t)}set(t,n,o,s){let r=t[n];if(!this._isShallow){const a=Et(r);if(!Ft(o)&&!Et(o)&&(r=J(r),o=J(o)),!H(t)&&Pe(r)&&!Pe(o))return a?!1:(r.value=o,!0)}const i=H(t)&&Io(n)?Number(n)<t.length:q(t,n),c=Reflect.set(t,n,o,s);return t===J(s)&&(i?ht(o,r)&&et(t,"set",n,o):et(t,"add",n,o)),c}deleteProperty(t,n){const o=q(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&o&&et(t,"delete",n,void 0),s}has(t,n){const o=Reflect.has(t,n);return(!gt(n)||!lr.has(n))&&Ce(t,"has",n),o}ownKeys(t){return Ce(t,"iterate",H(t)?"length":xt),Reflect.ownKeys(t)}}class Fi extends cr{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Gi=new ur,Vi=new Fi,Ki=new ur(!0);const xo=e=>e,Rn=e=>Reflect.getPrototypeOf(e);function un(e,t,n=!1,o=!1){e=e.__v_raw;const s=J(e),r=J(t);n||(ht(t,r)&&Ce(s,"get",t),Ce(s,"get",r));const{has:i}=Rn(s),c=o?xo:n?Lo:en;if(i.call(s,t))return c(e.get(t));if(i.call(s,r))return c(e.get(r));e!==s&&e.get(t)}function dn(e,t=!1){const n=this.__v_raw,o=J(n),s=J(e);return t||(ht(e,s)&&Ce(o,"has",e),Ce(o,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function fn(e,t=!1){return e=e.__v_raw,!t&&Ce(J(e),"iterate",xt),Reflect.get(e,"size",e)}function Qo(e,t=!1){!t&&!Ft(e)&&!Et(e)&&(e=J(e));const n=J(this);return Rn(n).has.call(n,e)||(n.add(e),et(n,"add",e,e)),this}function Zo(e,t,n=!1){!n&&!Ft(t)&&!Et(t)&&(t=J(t));const o=J(this),{has:s,get:r}=Rn(o);let i=s.call(o,e);i||(e=J(e),i=s.call(o,e));const c=r.call(o,e);return o.set(e,t),i?ht(t,c)&&et(o,"set",e,t):et(o,"add",e,t),this}function Yo(e){const t=J(this),{has:n,get:o}=Rn(t);let s=n.call(t,e);s||(e=J(e),s=n.call(t,e)),o&&o.call(t,e);const r=t.delete(e);return s&&et(t,"delete",e,void 0),r}function Xo(){const e=J(this),t=e.size!==0,n=e.clear();return t&&et(e,"clear",void 0,void 0),n}function pn(e,t){return function(o,s){const r=this,i=r.__v_raw,c=J(i),a=t?xo:e?Lo:en;return!e&&Ce(c,"iterate",xt),i.forEach((d,f)=>o.call(s,a(d),a(f),r))}}function hn(e,t,n){return function(...o){const s=this.__v_raw,r=J(s),i=Ot(r),c=e==="entries"||e===Symbol.iterator&&i,a=e==="keys"&&i,d=s[e](...o),f=n?xo:t?Lo:en;return!t&&Ce(r,"iterate",a?ro:xt),{next(){const{value:p,done:h}=d.next();return h?{value:p,done:h}:{value:c?[f(p[0]),f(p[1])]:f(p),done:h}},[Symbol.iterator](){return this}}}}function st(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function ji(){const e={get(r){return un(this,r)},get size(){return fn(this)},has:dn,add:Qo,set:Zo,delete:Yo,clear:Xo,forEach:pn(!1,!1)},t={get(r){return un(this,r,!1,!0)},get size(){return fn(this)},has:dn,add(r){return Qo.call(this,r,!0)},set(r,i){return Zo.call(this,r,i,!0)},delete:Yo,clear:Xo,forEach:pn(!1,!0)},n={get(r){return un(this,r,!0)},get size(){return fn(this,!0)},has(r){return dn.call(this,r,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:pn(!0,!1)},o={get(r){return un(this,r,!0,!0)},get size(){return fn(this,!0)},has(r){return dn.call(this,r,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:pn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=hn(r,!1,!1),n[r]=hn(r,!0,!1),t[r]=hn(r,!1,!0),o[r]=hn(r,!0,!0)}),[e,n,t,o]}const[$i,qi,zi,Ji]=ji();function Eo(e,t){const n=t?e?Ji:zi:e?qi:$i;return(o,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?o:Reflect.get(q(n,s)&&s in o?n:o,s,r)}const Qi={get:Eo(!1,!1)},Zi={get:Eo(!1,!0)},Yi={get:Eo(!0,!1)};const dr=new WeakMap,fr=new WeakMap,pr=new WeakMap,Xi=new WeakMap;function ea(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ta(e){return e.__v_skip||!Object.isExtensible(e)?0:ea(Ai(e))}function Nn(e){return Et(e)?e:Do(e,!1,Gi,Qi,dr)}function hr(e){return Do(e,!1,Ki,Zi,fr)}function mr(e){return Do(e,!0,Vi,Yi,pr)}function Do(e,t,n,o,s){if(!ae(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=s.get(e);if(r)return r;const i=ta(e);if(i===0)return e;const c=new Proxy(e,i===2?o:n);return s.set(e,c),c}function Jt(e){return Et(e)?Jt(e.__v_raw):!!(e&&e.__v_isReactive)}function Et(e){return!!(e&&e.__v_isReadonly)}function Ft(e){return!!(e&&e.__v_isShallow)}function gr(e){return e?!!e.__v_raw:!1}function J(e){const t=e&&e.__v_raw;return t?J(t):e}function br(e){return Object.isExtensible(e)&&Zs(e,"__v_skip",!0),e}const en=e=>ae(e)?Nn(e):e,Lo=e=>ae(e)?mr(e):e;class vr{constructor(t,n,o,s){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new To(()=>t(this._value),()=>bn(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=o}get value(){const t=J(this);return(!t._cacheable||t.effect.dirty)&&ht(t._value,t._value=t.effect.run())&&bn(t,4),_r(t),t.effect._dirtyLevel>=2&&bn(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function na(e,t,n=!1){let o,s;const r=G(e);return r?(o=e,s=Ne):(o=e.get,s=e.set),new vr(o,s,r||!s,n)}function _r(e){var t;ft&&Ct&&(e=J(e),rr(Ct,(t=e.dep)!=null?t:e.dep=ar(()=>e.dep=void 0,e instanceof vr?e:void 0)))}function bn(e,t=4,n,o){e=J(e);const s=e.dep;s&&ir(s,t)}function Pe(e){return!!(e&&e.__v_isRef===!0)}function Wn(e){return yr(e,!1)}function oa(e){return yr(e,!0)}function yr(e,t){return Pe(e)?e:new sa(e,t)}class sa{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:J(t),this._value=n?t:en(t)}get value(){return _r(this),this._value}set value(t){const n=this.__v_isShallow||Ft(t)||Et(t);t=n?t:J(t),ht(t,this._rawValue)&&(this._rawValue,this._rawValue=t,this._value=n?t:en(t),bn(this,4))}}function Je(e){return Pe(e)?e.value:e}const ra={get:(e,t,n)=>Je(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const s=e[t];return Pe(s)&&!Pe(n)?(s.value=n,!0):Reflect.set(e,t,n,o)}};function wr(e){return Jt(e)?e:new Proxy(e,ra)}/**
* @vue/runtime-core v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function pt(e,t,n,o){try{return o?e(...o):e()}catch(s){kn(s,t,n)}}function ke(e,t,n,o){if(G(e)){const s=pt(e,t,n,o);return s&&zs(s)&&s.catch(r=>{kn(r,t,n)}),s}if(H(e)){const s=[];for(let r=0;r<e.length;r++)s.push(ke(e[r],t,n,o));return s}}function kn(e,t,n,o=!0){const s=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const d=r.ec;if(d){for(let f=0;f<d.length;f++)if(d[f](e,i,c)===!1)return}r=r.parent}const a=t.appContext.config.errorHandler;if(a){bt(),pt(a,null,10,[e,i,c]),vt();return}}ia(e,n,s,o)}function ia(e,t,n,o=!0){console.error(e)}let tn=!1,io=!1;const we=[];let ze=0;const Ht=[];let lt=null,Pt=0;const Ir=Promise.resolve();let Ro=null;function Ar(e){const t=Ro||Ir;return e?t.then(this?e.bind(this):e):t}function aa(e){let t=ze+1,n=we.length;for(;t<n;){const o=t+n>>>1,s=we[o],r=nn(s);r<e||r===e&&s.pre?t=o+1:n=o}return t}function No(e){(!we.length||!we.includes(e,tn&&e.allowRecurse?ze+1:ze))&&(e.id==null?we.push(e):we.splice(aa(e.id),0,e),Pr())}function Pr(){!tn&&!io&&(io=!0,Ro=Ir.then(Sr))}function la(e){const t=we.indexOf(e);t>ze&&we.splice(t,1)}function ca(e){H(e)?Ht.push(...e):(!lt||!lt.includes(e,e.allowRecurse?Pt+1:Pt))&&Ht.push(e),Pr()}function es(e,t,n=tn?ze+1:0){for(;n<we.length;n++){const o=we[n];if(o&&o.pre){if(e&&o.id!==e.uid)continue;we.splice(n,1),n--,o()}}}function Tr(e){if(Ht.length){const t=[...new Set(Ht)].sort((n,o)=>nn(n)-nn(o));if(Ht.length=0,lt){lt.push(...t);return}for(lt=t,Pt=0;Pt<lt.length;Pt++){const n=lt[Pt];n.active!==!1&&n()}lt=null,Pt=0}}const nn=e=>e.id==null?1/0:e.id,ua=(e,t)=>{const n=nn(e)-nn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Sr(e){io=!1,tn=!0,we.sort(ua);try{for(ze=0;ze<we.length;ze++){const t=we[ze];t&&t.active!==!1&&pt(t,t.i,t.i?15:14)}}finally{ze=0,we.length=0,Tr(),tn=!1,Ro=null,(we.length||Ht.length)&&Sr()}}let We=null,Un=null;function Pn(e){const t=We;return We=e,Un=e&&e.type.__scopeId||null,t}function Ue(e){Un=e}function Me(){Un=null}function ye(e,t=We,n){if(!t||e._n)return e;const o=(...s)=>{o._d&&us(-1);const r=Pn(t);let i;try{i=e(...s)}finally{Pn(r),o._d&&us(1)}return i};return o._n=!0,o._c=!0,o._d=!0,o}function yt(e,t,n,o){const s=e.dirs,r=t&&t.dirs;for(let i=0;i<s.length;i++){const c=s[i];r&&(c.oldValue=r[i].value);let a=c.dir[o];a&&(bt(),ke(a,n,8,[e.el,c,e,t]),vt())}}const ct=Symbol("_leaveCb"),mn=Symbol("_enterCb");function da(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Nr(()=>{e.isMounted=!0}),Wr(()=>{e.isUnmounting=!0}),e}const Re=[Function,Array],Cr={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Re,onEnter:Re,onAfterEnter:Re,onEnterCancelled:Re,onBeforeLeave:Re,onLeave:Re,onAfterLeave:Re,onLeaveCancelled:Re,onBeforeAppear:Re,onAppear:Re,onAfterAppear:Re,onAppearCancelled:Re},xr=e=>{const t=e.subTree;return t.component?xr(t.component):t},fa={name:"BaseTransition",props:Cr,setup(e,{slots:t}){const n=fl(),o=da();return()=>{const s=t.default&&Dr(t.default(),!0);if(!s||!s.length)return;let r=s[0];if(s.length>1){for(const h of s)if(h.type!==Ee){r=h;break}}const i=J(e),{mode:c}=i;if(o.isLeaving)return $n(r);const a=ts(r);if(!a)return $n(r);let d=ao(a,i,o,n,h=>d=h);Tn(a,d);const f=n.subTree,p=f&&ts(f);if(p&&p.type!==Ee&&!St(a,p)&&xr(n).type!==Ee){const h=ao(p,i,o,n);if(Tn(p,h),c==="out-in"&&a.type!==Ee)return o.isLeaving=!0,h.afterLeave=()=>{o.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},$n(r);c==="in-out"&&a.type!==Ee&&(h.delayLeave=(g,D,C)=>{const B=Er(o,p);B[String(p.key)]=p,g[ct]=()=>{D(),g[ct]=void 0,delete d.delayedLeave},d.delayedLeave=C})}return r}}},pa=fa;function Er(e,t){const{leavingVNodes:n}=e;let o=n.get(t.type);return o||(o=Object.create(null),n.set(t.type,o)),o}function ao(e,t,n,o,s){const{appear:r,mode:i,persisted:c=!1,onBeforeEnter:a,onEnter:d,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:h,onLeave:g,onAfterLeave:D,onLeaveCancelled:C,onBeforeAppear:B,onAppear:M,onAfterAppear:W,onAppearCancelled:L}=t,$=String(e.key),ne=Er(n,e),O=(K,z)=>{K&&ke(K,o,9,z)},oe=(K,z)=>{const se=z[1];O(K,z),H(K)?K.every(R=>R.length<=1)&&se():K.length<=1&&se()},he={mode:i,persisted:c,beforeEnter(K){let z=a;if(!n.isMounted)if(r)z=B||a;else return;K[ct]&&K[ct](!0);const se=ne[$];se&&St(e,se)&&se.el[ct]&&se.el[ct](),O(z,[K])},enter(K){let z=d,se=f,R=p;if(!n.isMounted)if(r)z=M||d,se=W||f,R=L||p;else return;let Q=!1;const me=K[mn]=Oe=>{Q||(Q=!0,Oe?O(R,[K]):O(se,[K]),he.delayedLeave&&he.delayedLeave(),K[mn]=void 0)};z?oe(z,[K,me]):me()},leave(K,z){const se=String(e.key);if(K[mn]&&K[mn](!0),n.isUnmounting)return z();O(h,[K]);let R=!1;const Q=K[ct]=me=>{R||(R=!0,z(),me?O(C,[K]):O(D,[K]),K[ct]=void 0,ne[se]===e&&delete ne[se])};ne[se]=e,g?oe(g,[K,Q]):Q()},clone(K){const z=ao(K,t,n,o,s);return s&&s(z),z}};return he}function $n(e){if(Mn(e))return e=mt(e),e.children=null,e}function ts(e){if(!Mn(e))return e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&G(n.default))return n.default()}}function Tn(e,t){e.shapeFlag&6&&e.component?Tn(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Dr(e,t=!1,n){let o=[],s=0;for(let r=0;r<e.length;r++){let i=e[r];const c=n==null?i.key:String(n)+String(i.key!=null?i.key:r);i.type===ie?(i.patchFlag&128&&s++,o=o.concat(Dr(i.children,t,c))):(t||i.type!==Ee)&&o.push(c!=null?mt(i,{key:c}):i)}if(s>1)for(let r=0;r<o.length;r++)o[r].patchFlag=-2;return o}/*! #__NO_SIDE_EFFECTS__ */function Lr(e,t){return G(e)?be({name:e.name},t,{setup:e}):e}const vn=e=>!!e.type.__asyncLoader,Mn=e=>e.type.__isKeepAlive;function ha(e,t){Rr(e,"a",t)}function ma(e,t){Rr(e,"da",t)}function Rr(e,t,n=_e){const o=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(On(t,o,n),n){let s=n.parent;for(;s&&s.parent;)Mn(s.parent.vnode)&&ga(o,t,n,s),s=s.parent}}function ga(e,t,n,o){const s=On(t,e,o,!0);kr(()=>{wo(o[t],s)},n)}function On(e,t,n=_e,o=!1){if(n){const s=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...i)=>{bt();const c=ln(n),a=ke(t,n,e,i);return c(),vt(),a});return o?s.unshift(r):s.push(r),r}}const nt=e=>(t,n=_e)=>{(!Fn||e==="sp")&&On(e,(...o)=>t(...o),n)},ba=nt("bm"),Nr=nt("m"),va=nt("bu"),_a=nt("u"),Wr=nt("bum"),kr=nt("um"),ya=nt("sp"),wa=nt("rtg"),Ia=nt("rtc");function Aa(e,t=_e){On("ec",e,t)}const Pa="components";function Dt(e,t){return Sa(Pa,e,!0,t)||e}const Ta=Symbol.for("v-ndc");function Sa(e,t,n=!0,o=!1){const s=We||_e;if(s){const r=s.type;{const c=bl(r,!1);if(c&&(c===t||c===Ge(t)||c===Ln(Ge(t))))return r}const i=ns(s[e]||r[e],t)||ns(s.appContext[e],t);return!i&&o?r:i}}function ns(e,t){return e&&(e[t]||e[Ge(t)]||e[Ln(Ge(t))])}const lo=e=>e?ni(e)?Mo(e):lo(e.parent):null,Qt=be(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>lo(e.parent),$root:e=>lo(e.root),$emit:e=>e.emit,$options:e=>Wo(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,No(e.update)}),$nextTick:e=>e.n||(e.n=Ar.bind(e.proxy)),$watch:e=>Ja.bind(e)}),qn=(e,t)=>e!==ce&&!e.__isScriptSetup&&q(e,t),Ca={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:o,data:s,props:r,accessCache:i,type:c,appContext:a}=e;let d;if(t[0]!=="$"){const g=i[t];if(g!==void 0)switch(g){case 1:return o[t];case 2:return s[t];case 4:return n[t];case 3:return r[t]}else{if(qn(o,t))return i[t]=1,o[t];if(s!==ce&&q(s,t))return i[t]=2,s[t];if((d=e.propsOptions[0])&&q(d,t))return i[t]=3,r[t];if(n!==ce&&q(n,t))return i[t]=4,n[t];co&&(i[t]=0)}}const f=Qt[t];let p,h;if(f)return t==="$attrs"&&Ce(e.attrs,"get",""),f(e);if((p=c.__cssModules)&&(p=p[t]))return p;if(n!==ce&&q(n,t))return i[t]=4,n[t];if(h=a.config.globalProperties,q(h,t))return h[t]},set({_:e},t,n){const{data:o,setupState:s,ctx:r}=e;return qn(s,t)?(s[t]=n,!0):o!==ce&&q(o,t)?(o[t]=n,!0):q(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:s,propsOptions:r}},i){let c;return!!n[i]||e!==ce&&q(e,i)||qn(t,i)||(c=r[0])&&q(c,i)||q(o,i)||q(Qt,i)||q(s.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:q(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function os(e){return H(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let co=!0;function xa(e){const t=Wo(e),n=e.proxy,o=e.ctx;co=!1,t.beforeCreate&&ss(t.beforeCreate,e,"bc");const{data:s,computed:r,methods:i,watch:c,provide:a,inject:d,created:f,beforeMount:p,mounted:h,beforeUpdate:g,updated:D,activated:C,deactivated:B,beforeDestroy:M,beforeUnmount:W,destroyed:L,unmounted:$,render:ne,renderTracked:O,renderTriggered:oe,errorCaptured:he,serverPrefetch:K,expose:z,inheritAttrs:se,components:R,directives:Q,filters:me}=t;if(d&&Ea(d,o,null),i)for(const te in i){const Z=i[te];G(Z)&&(o[te]=Z.bind(n))}if(s){const te=s.call(n,n);ae(te)&&(e.data=Nn(te))}if(co=!0,r)for(const te in r){const Z=r[te],Ze=G(Z)?Z.bind(n,n):G(Z.get)?Z.get.bind(n,n):Ne,ot=!G(Z)&&G(Z.set)?Z.set.bind(n):Ne,Ke=Fe({get:Ze,set:ot});Object.defineProperty(o,te,{enumerable:!0,configurable:!0,get:()=>Ke.value,set:Te=>Ke.value=Te})}if(c)for(const te in c)Ur(c[te],o,n,te);if(a){const te=G(a)?a.call(n):a;Reflect.ownKeys(te).forEach(Z=>{_n(Z,te[Z])})}f&&ss(f,e,"c");function de(te,Z){H(Z)?Z.forEach(Ze=>te(Ze.bind(n))):Z&&te(Z.bind(n))}if(de(ba,p),de(Nr,h),de(va,g),de(_a,D),de(ha,C),de(ma,B),de(Aa,he),de(Ia,O),de(wa,oe),de(Wr,W),de(kr,$),de(ya,K),H(z))if(z.length){const te=e.exposed||(e.exposed={});z.forEach(Z=>{Object.defineProperty(te,Z,{get:()=>n[Z],set:Ze=>n[Z]=Ze})})}else e.exposed||(e.exposed={});ne&&e.render===Ne&&(e.render=ne),se!=null&&(e.inheritAttrs=se),R&&(e.components=R),Q&&(e.directives=Q)}function Ea(e,t,n=Ne){H(e)&&(e=uo(e));for(const o in e){const s=e[o];let r;ae(s)?"default"in s?r=tt(s.from||o,s.default,!0):r=tt(s.from||o):r=tt(s),Pe(r)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>r.value,set:i=>r.value=i}):t[o]=r}}function ss(e,t,n){ke(H(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ur(e,t,n,o){const s=o.includes(".")?Qr(n,o):()=>n[o];if(pe(e)){const r=t[e];G(r)&&yn(s,r)}else if(G(e))yn(s,e.bind(n));else if(ae(e))if(H(e))e.forEach(r=>Ur(r,t,n,o));else{const r=G(e.handler)?e.handler.bind(n):t[e.handler];G(r)&&yn(s,r,e)}}function Wo(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:i}}=e.appContext,c=r.get(t);let a;return c?a=c:!s.length&&!n&&!o?a=t:(a={},s.length&&s.forEach(d=>Sn(a,d,i,!0)),Sn(a,t,i)),ae(t)&&r.set(t,a),a}function Sn(e,t,n,o=!1){const{mixins:s,extends:r}=t;r&&Sn(e,r,n,!0),s&&s.forEach(i=>Sn(e,i,n,!0));for(const i in t)if(!(o&&i==="expose")){const c=Da[i]||n&&n[i];e[i]=c?c(e[i],t[i]):t[i]}return e}const Da={data:rs,props:is,emits:is,methods:qt,computed:qt,beforeCreate:Ae,created:Ae,beforeMount:Ae,mounted:Ae,beforeUpdate:Ae,updated:Ae,beforeDestroy:Ae,beforeUnmount:Ae,destroyed:Ae,unmounted:Ae,activated:Ae,deactivated:Ae,errorCaptured:Ae,serverPrefetch:Ae,components:qt,directives:qt,watch:Ra,provide:rs,inject:La};function rs(e,t){return t?e?function(){return be(G(e)?e.call(this,this):e,G(t)?t.call(this,this):t)}:t:e}function La(e,t){return qt(uo(e),uo(t))}function uo(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ae(e,t){return e?[...new Set([].concat(e,t))]:t}function qt(e,t){return e?be(Object.create(null),e,t):t}function is(e,t){return e?H(e)&&H(t)?[...new Set([...e,...t])]:be(Object.create(null),os(e),os(t??{})):t}function Ra(e,t){if(!e)return t;if(!t)return e;const n=be(Object.create(null),e);for(const o in t)n[o]=Ae(e[o],t[o]);return n}function Mr(){return{app:null,config:{isNativeTag:wi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Na=0;function Wa(e,t){return function(o,s=null){G(o)||(o=be({},o)),s!=null&&!ae(s)&&(s=null);const r=Mr(),i=new WeakSet;let c=!1;const a=r.app={_uid:Na++,_component:o,_props:s,_container:null,_context:r,_instance:null,version:_l,get config(){return r.config},set config(d){},use(d,...f){return i.has(d)||(d&&G(d.install)?(i.add(d),d.install(a,...f)):G(d)&&(i.add(d),d(a,...f))),a},mixin(d){return r.mixins.includes(d)||r.mixins.push(d),a},component(d,f){return f?(r.components[d]=f,a):r.components[d]},directive(d,f){return f?(r.directives[d]=f,a):r.directives[d]},mount(d,f,p){if(!c){const h=V(o,s);return h.appContext=r,p===!0?p="svg":p===!1&&(p=void 0),f&&t?t(h,d):e(h,d,p),c=!0,a._container=d,d.__vue_app__=a,Mo(h.component)}},unmount(){c&&(e(null,a._container),delete a._container.__vue_app__)},provide(d,f){return r.provides[d]=f,a},runWithContext(d){const f=Bt;Bt=a;try{return d()}finally{Bt=f}}};return a}}let Bt=null;function _n(e,t){if(_e){let n=_e.provides;const o=_e.parent&&_e.parent.provides;o===n&&(n=_e.provides=Object.create(o)),n[e]=t}}function tt(e,t,n=!1){const o=_e||We;if(o||Bt){const s=Bt?Bt._context.provides:o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&G(t)?t.call(o&&o.proxy):t}}const Or={},Hr=()=>Object.create(Or),Br=e=>Object.getPrototypeOf(e)===Or;function ka(e,t,n,o=!1){const s={},r=Hr();e.propsDefaults=Object.create(null),Fr(e,t,s,r);for(const i in e.propsOptions[0])i in s||(s[i]=void 0);n?e.props=o?s:hr(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function Ua(e,t,n,o){const{props:s,attrs:r,vnode:{patchFlag:i}}=e,c=J(s),[a]=e.propsOptions;let d=!1;if((o||i>0)&&!(i&16)){if(i&8){const f=e.vnode.dynamicProps;for(let p=0;p<f.length;p++){let h=f[p];if(Hn(e.emitsOptions,h))continue;const g=t[h];if(a)if(q(r,h))g!==r[h]&&(r[h]=g,d=!0);else{const D=Ge(h);s[D]=fo(a,c,D,g,e,!1)}else g!==r[h]&&(r[h]=g,d=!0)}}}else{Fr(e,t,s,r)&&(d=!0);let f;for(const p in c)(!t||!q(t,p)&&((f=Lt(p))===p||!q(t,f)))&&(a?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=fo(a,c,p,void 0,e,!0)):delete s[p]);if(r!==c)for(const p in r)(!t||!q(t,p))&&(delete r[p],d=!0)}d&&et(e.attrs,"set","")}function Fr(e,t,n,o){const[s,r]=e.propsOptions;let i=!1,c;if(t)for(let a in t){if(zt(a))continue;const d=t[a];let f;s&&q(s,f=Ge(a))?!r||!r.includes(f)?n[f]=d:(c||(c={}))[f]=d:Hn(e.emitsOptions,a)||(!(a in o)||d!==o[a])&&(o[a]=d,i=!0)}if(r){const a=J(n),d=c||ce;for(let f=0;f<r.length;f++){const p=r[f];n[p]=fo(s,a,p,d[p],e,!q(d,p))}}return i}function fo(e,t,n,o,s,r){const i=e[n];if(i!=null){const c=q(i,"default");if(c&&o===void 0){const a=i.default;if(i.type!==Function&&!i.skipFactory&&G(a)){const{propsDefaults:d}=s;if(n in d)o=d[n];else{const f=ln(s);o=d[n]=a.call(null,t),f()}}else o=a}i[0]&&(r&&!c?o=!1:i[1]&&(o===""||o===Lt(n))&&(o=!0))}return o}const Ma=new WeakMap;function Gr(e,t,n=!1){const o=n?Ma:t.propsCache,s=o.get(e);if(s)return s;const r=e.props,i={},c=[];let a=!1;if(!G(e)){const f=p=>{a=!0;const[h,g]=Gr(p,t,!0);be(i,h),g&&c.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!r&&!a)return ae(e)&&o.set(e,Mt),Mt;if(H(r))for(let f=0;f<r.length;f++){const p=Ge(r[f]);as(p)&&(i[p]=ce)}else if(r)for(const f in r){const p=Ge(f);if(as(p)){const h=r[f],g=i[p]=H(h)||G(h)?{type:h}:be({},h),D=g.type;let C=!1,B=!0;if(H(D))for(let M=0;M<D.length;++M){const W=D[M],L=G(W)&&W.name;if(L==="Boolean"){C=!0;break}else L==="String"&&(B=!1)}else C=G(D)&&D.name==="Boolean";g[0]=C,g[1]=B,(C||q(g,"default"))&&c.push(p)}}const d=[i,c];return ae(e)&&o.set(e,d),d}function as(e){return e[0]!=="$"&&!zt(e)}const Vr=e=>e[0]==="_"||e==="$stable",ko=e=>H(e)?e.map(qe):[qe(e)],Oa=(e,t,n)=>{if(t._n)return t;const o=ye((...s)=>ko(t(...s)),n);return o._c=!1,o},Kr=(e,t,n)=>{const o=e._ctx;for(const s in e){if(Vr(s))continue;const r=e[s];if(G(r))t[s]=Oa(s,r,o);else if(r!=null){const i=ko(r);t[s]=()=>i}}},jr=(e,t)=>{const n=ko(t);e.slots.default=()=>n},$r=(e,t,n)=>{for(const o in t)(n||o!=="_")&&(e[o]=t[o])},Ha=(e,t,n)=>{const o=e.slots=Hr();if(e.vnode.shapeFlag&32){const s=t._;s?($r(o,t,n),n&&Zs(o,"_",s,!0)):Kr(t,o)}else t&&jr(e,t)},Ba=(e,t,n)=>{const{vnode:o,slots:s}=e;let r=!0,i=ce;if(o.shapeFlag&32){const c=t._;c?n&&c===1?r=!1:$r(s,t,n):(r=!t.$stable,Kr(t,s)),i=t}else t&&(jr(e,t),i={default:1});if(r)for(const c in s)!Vr(c)&&i[c]==null&&delete s[c]};function po(e,t,n,o,s=!1){if(H(e)){e.forEach((h,g)=>po(h,t&&(H(t)?t[g]:t),n,o,s));return}if(vn(o)&&!s)return;const r=o.shapeFlag&4?Mo(o.component):o.el,i=s?null:r,{i:c,r:a}=e,d=t&&t.r,f=c.refs===ce?c.refs={}:c.refs,p=c.setupState;if(d!=null&&d!==a&&(pe(d)?(f[d]=null,q(p,d)&&(p[d]=null)):Pe(d)&&(d.value=null)),G(a))pt(a,c,12,[i,f]);else{const h=pe(a),g=Pe(a);if(h||g){const D=()=>{if(e.f){const C=h?q(p,a)?p[a]:f[a]:a.value;s?H(C)&&wo(C,r):H(C)?C.includes(r)||C.push(r):h?(f[a]=[r],q(p,a)&&(p[a]=f[a])):(a.value=[r],e.k&&(f[e.k]=a.value))}else h?(f[a]=i,q(p,a)&&(p[a]=i)):g&&(a.value=i,e.k&&(f[e.k]=i))};i?(D.id=-1,Se(D,n)):D()}}}const Fa=Symbol("_vte"),Ga=e=>e.__isTeleport,Se=ol;function Va(e){return Ka(e)}function Ka(e,t){const n=Ys();n.__VUE__=!0;const{insert:o,remove:s,patchProp:r,createElement:i,createText:c,createComment:a,setText:d,setElementText:f,parentNode:p,nextSibling:h,setScopeId:g=Ne,insertStaticContent:D}=e,C=(l,u,m,_=null,b=null,w=null,T=void 0,I=null,A=!!u.dynamicChildren)=>{if(l===u)return;l&&!St(l,u)&&(_=v(l),Te(l,b,w,!0),l=null),u.patchFlag===-2&&(A=!1,u.dynamicChildren=null);const{type:y,ref:E,shapeFlag:U}=u;switch(y){case Bn:B(l,u,m,_);break;case Ee:M(l,u,m,_);break;case wn:l==null&&W(u,m,_,T);break;case ie:R(l,u,m,_,b,w,T,I,A);break;default:U&1?ne(l,u,m,_,b,w,T,I,A):U&6?Q(l,u,m,_,b,w,T,I,A):(U&64||U&128)&&y.process(l,u,m,_,b,w,T,I,A,N)}E!=null&&b&&po(E,l&&l.ref,w,u||l,!u)},B=(l,u,m,_)=>{if(l==null)o(u.el=c(u.children),m,_);else{const b=u.el=l.el;u.children!==l.children&&d(b,u.children)}},M=(l,u,m,_)=>{l==null?o(u.el=a(u.children||""),m,_):u.el=l.el},W=(l,u,m,_)=>{[l.el,l.anchor]=D(l.children,u,m,_,l.el,l.anchor)},L=({el:l,anchor:u},m,_)=>{let b;for(;l&&l!==u;)b=h(l),o(l,m,_),l=b;o(u,m,_)},$=({el:l,anchor:u})=>{let m;for(;l&&l!==u;)m=h(l),s(l),l=m;s(u)},ne=(l,u,m,_,b,w,T,I,A)=>{u.type==="svg"?T="svg":u.type==="math"&&(T="mathml"),l==null?O(u,m,_,b,w,T,I,A):K(l,u,b,w,T,I,A)},O=(l,u,m,_,b,w,T,I)=>{let A,y;const{props:E,shapeFlag:U,transition:k,dirs:F}=l;if(A=l.el=i(l.type,w,E&&E.is,E),U&8?f(A,l.children):U&16&&he(l.children,A,null,_,b,zn(l,w),T,I),F&&yt(l,null,_,"created"),oe(A,l,l.scopeId,T,_),E){for(const re in E)re!=="value"&&!zt(re)&&r(A,re,null,E[re],w,_);"value"in E&&r(A,"value",null,E.value,w),(y=E.onVnodeBeforeMount)&&$e(y,_,l)}F&&yt(l,null,_,"beforeMount");const j=ja(b,k);j&&k.beforeEnter(A),o(A,u,m),((y=E&&E.onVnodeMounted)||j||F)&&Se(()=>{y&&$e(y,_,l),j&&k.enter(A),F&&yt(l,null,_,"mounted")},b)},oe=(l,u,m,_,b)=>{if(m&&g(l,m),_)for(let w=0;w<_.length;w++)g(l,_[w]);if(b){let w=b.subTree;if(u===w){const T=b.vnode;oe(l,T,T.scopeId,T.slotScopeIds,b.parent)}}},he=(l,u,m,_,b,w,T,I,A=0)=>{for(let y=A;y<l.length;y++){const E=l[y]=I?ut(l[y]):qe(l[y]);C(null,E,u,m,_,b,w,T,I)}},K=(l,u,m,_,b,w,T)=>{const I=u.el=l.el;let{patchFlag:A,dynamicChildren:y,dirs:E}=u;A|=l.patchFlag&16;const U=l.props||ce,k=u.props||ce;let F;if(m&&wt(m,!1),(F=k.onVnodeBeforeUpdate)&&$e(F,m,u,l),E&&yt(u,l,m,"beforeUpdate"),m&&wt(m,!0),(U.innerHTML&&k.innerHTML==null||U.textContent&&k.textContent==null)&&f(I,""),y?z(l.dynamicChildren,y,I,m,_,zn(u,b),w):T||Z(l,u,I,null,m,_,zn(u,b),w,!1),A>0){if(A&16)se(I,U,k,m,b);else if(A&2&&U.class!==k.class&&r(I,"class",null,k.class,b),A&4&&r(I,"style",U.style,k.style,b),A&8){const j=u.dynamicProps;for(let re=0;re<j.length;re++){const Y=j[re],ge=U[Y],He=k[Y];(He!==ge||Y==="value")&&r(I,Y,ge,He,b,m)}}A&1&&l.children!==u.children&&f(I,u.children)}else!T&&y==null&&se(I,U,k,m,b);((F=k.onVnodeUpdated)||E)&&Se(()=>{F&&$e(F,m,u,l),E&&yt(u,l,m,"updated")},_)},z=(l,u,m,_,b,w,T)=>{for(let I=0;I<u.length;I++){const A=l[I],y=u[I],E=A.el&&(A.type===ie||!St(A,y)||A.shapeFlag&70)?p(A.el):m;C(A,y,E,null,_,b,w,T,!0)}},se=(l,u,m,_,b)=>{if(u!==m){if(u!==ce)for(const w in u)!zt(w)&&!(w in m)&&r(l,w,u[w],null,b,_);for(const w in m){if(zt(w))continue;const T=m[w],I=u[w];T!==I&&w!=="value"&&r(l,w,I,T,b,_)}"value"in m&&r(l,"value",u.value,m.value,b)}},R=(l,u,m,_,b,w,T,I,A)=>{const y=u.el=l?l.el:c(""),E=u.anchor=l?l.anchor:c("");let{patchFlag:U,dynamicChildren:k,slotScopeIds:F}=u;F&&(I=I?I.concat(F):F),l==null?(o(y,m,_),o(E,m,_),he(u.children||[],m,E,b,w,T,I,A)):U>0&&U&64&&k&&l.dynamicChildren?(z(l.dynamicChildren,k,m,b,w,T,I),(u.key!=null||b&&u===b.subTree)&&qr(l,u,!0)):Z(l,u,m,E,b,w,T,I,A)},Q=(l,u,m,_,b,w,T,I,A)=>{u.slotScopeIds=I,l==null?u.shapeFlag&512?b.ctx.activate(u,m,_,T,A):me(u,m,_,b,w,T,A):Oe(l,u,A)},me=(l,u,m,_,b,w,T)=>{const I=l.component=dl(l,_,b);if(Mn(l)&&(I.ctx.renderer=N),pl(I,!1,T),I.asyncDep){if(b&&b.registerDep(I,de,T),!l.el){const A=I.subTree=V(Ee);M(null,A,u,m)}}else de(I,l,u,m,b,w,T)},Oe=(l,u,m)=>{const _=u.component=l.component;if(el(l,u,m))if(_.asyncDep&&!_.asyncResolved){te(_,u,m);return}else _.next=u,la(_.update),_.effect.dirty=!0,_.update();else u.el=l.el,_.vnode=u},de=(l,u,m,_,b,w,T)=>{const I=()=>{if(l.isMounted){let{next:E,bu:U,u:k,parent:F,vnode:j}=l;{const kt=zr(l);if(kt){E&&(E.el=j.el,te(l,E,T)),kt.asyncDep.then(()=>{l.isUnmounted||I()});return}}let re=E,Y;wt(l,!1),E?(E.el=j.el,te(l,E,T)):E=j,U&&Kn(U),(Y=E.props&&E.props.onVnodeBeforeUpdate)&&$e(Y,F,E,j),wt(l,!0);const ge=Jn(l),He=l.subTree;l.subTree=ge,C(He,ge,p(He.el),v(He),l,b,w),E.el=ge.el,re===null&&tl(l,ge.el),k&&Se(k,b),(Y=E.props&&E.props.onVnodeUpdated)&&Se(()=>$e(Y,F,E,j),b)}else{let E;const{el:U,props:k}=u,{bm:F,m:j,parent:re}=l,Y=vn(u);if(wt(l,!1),F&&Kn(F),!Y&&(E=k&&k.onVnodeBeforeMount)&&$e(E,re,u),wt(l,!0),U&&le){const ge=()=>{l.subTree=Jn(l),le(U,l.subTree,l,b,null)};Y?u.type.__asyncLoader().then(()=>!l.isUnmounted&&ge()):ge()}else{const ge=l.subTree=Jn(l);C(null,ge,m,_,l,b,w),u.el=ge.el}if(j&&Se(j,b),!Y&&(E=k&&k.onVnodeMounted)){const ge=u;Se(()=>$e(E,re,ge),b)}(u.shapeFlag&256||re&&vn(re.vnode)&&re.vnode.shapeFlag&256)&&l.a&&Se(l.a,b),l.isMounted=!0,u=m=_=null}},A=l.effect=new To(I,Ne,()=>No(y),l.scope),y=l.update=()=>{A.dirty&&A.run()};y.i=l,y.id=l.uid,wt(l,!0),y()},te=(l,u,m)=>{u.component=l;const _=l.vnode.props;l.vnode=u,l.next=null,Ua(l,u.props,_,m),Ba(l,u.children,m),bt(),es(l),vt()},Z=(l,u,m,_,b,w,T,I,A=!1)=>{const y=l&&l.children,E=l?l.shapeFlag:0,U=u.children,{patchFlag:k,shapeFlag:F}=u;if(k>0){if(k&128){ot(y,U,m,_,b,w,T,I,A);return}else if(k&256){Ze(y,U,m,_,b,w,T,I,A);return}}F&8?(E&16&&Le(y,b,w),U!==y&&f(m,U)):E&16?F&16?ot(y,U,m,_,b,w,T,I,A):Le(y,b,w,!0):(E&8&&f(m,""),F&16&&he(U,m,_,b,w,T,I,A))},Ze=(l,u,m,_,b,w,T,I,A)=>{l=l||Mt,u=u||Mt;const y=l.length,E=u.length,U=Math.min(y,E);let k;for(k=0;k<U;k++){const F=u[k]=A?ut(u[k]):qe(u[k]);C(l[k],F,m,null,b,w,T,I,A)}y>E?Le(l,b,w,!0,!1,U):he(u,m,_,b,w,T,I,A,U)},ot=(l,u,m,_,b,w,T,I,A)=>{let y=0;const E=u.length;let U=l.length-1,k=E-1;for(;y<=U&&y<=k;){const F=l[y],j=u[y]=A?ut(u[y]):qe(u[y]);if(St(F,j))C(F,j,m,null,b,w,T,I,A);else break;y++}for(;y<=U&&y<=k;){const F=l[U],j=u[k]=A?ut(u[k]):qe(u[k]);if(St(F,j))C(F,j,m,null,b,w,T,I,A);else break;U--,k--}if(y>U){if(y<=k){const F=k+1,j=F<E?u[F].el:_;for(;y<=k;)C(null,u[y]=A?ut(u[y]):qe(u[y]),m,j,b,w,T,I,A),y++}}else if(y>k)for(;y<=U;)Te(l[y],b,w,!0),y++;else{const F=y,j=y,re=new Map;for(y=j;y<=k;y++){const xe=u[y]=A?ut(u[y]):qe(u[y]);xe.key!=null&&re.set(xe.key,y)}let Y,ge=0;const He=k-j+1;let kt=!1,Vo=0;const Kt=new Array(He);for(y=0;y<He;y++)Kt[y]=0;for(y=F;y<=U;y++){const xe=l[y];if(ge>=He){Te(xe,b,w,!0);continue}let je;if(xe.key!=null)je=re.get(xe.key);else for(Y=j;Y<=k;Y++)if(Kt[Y-j]===0&&St(xe,u[Y])){je=Y;break}je===void 0?Te(xe,b,w,!0):(Kt[je-j]=y+1,je>=Vo?Vo=je:kt=!0,C(xe,u[je],m,null,b,w,T,I,A),ge++)}const Ko=kt?$a(Kt):Mt;for(Y=Ko.length-1,y=He-1;y>=0;y--){const xe=j+y,je=u[xe],jo=xe+1<E?u[xe+1].el:_;Kt[y]===0?C(null,je,m,jo,b,w,T,I,A):kt&&(Y<0||y!==Ko[Y]?Ke(je,m,jo,2):Y--)}}},Ke=(l,u,m,_,b=null)=>{const{el:w,type:T,transition:I,children:A,shapeFlag:y}=l;if(y&6){Ke(l.component.subTree,u,m,_);return}if(y&128){l.suspense.move(u,m,_);return}if(y&64){T.move(l,u,m,N);return}if(T===ie){o(w,u,m);for(let U=0;U<A.length;U++)Ke(A[U],u,m,_);o(l.anchor,u,m);return}if(T===wn){L(l,u,m);return}if(_!==2&&y&1&&I)if(_===0)I.beforeEnter(w),o(w,u,m),Se(()=>I.enter(w),b);else{const{leave:U,delayLeave:k,afterLeave:F}=I,j=()=>o(w,u,m),re=()=>{U(w,()=>{j(),F&&F()})};k?k(w,j,re):re()}else o(w,u,m)},Te=(l,u,m,_=!1,b=!1)=>{const{type:w,props:T,ref:I,children:A,dynamicChildren:y,shapeFlag:E,patchFlag:U,dirs:k,cacheIndex:F}=l;if(U===-2&&(b=!1),I!=null&&po(I,null,m,l,!0),F!=null&&(u.renderCache[F]=void 0),E&256){u.ctx.deactivate(l);return}const j=E&1&&k,re=!vn(l);let Y;if(re&&(Y=T&&T.onVnodeBeforeUnmount)&&$e(Y,u,l),E&6)cn(l.component,m,_);else{if(E&128){l.suspense.unmount(m,_);return}j&&yt(l,null,u,"beforeUnmount"),E&64?l.type.remove(l,u,m,N,_):y&&!y.hasOnce&&(w!==ie||U>0&&U&64)?Le(y,u,m,!1,!0):(w===ie&&U&384||!b&&E&16)&&Le(A,u,m),_&&Nt(l)}(re&&(Y=T&&T.onVnodeUnmounted)||j)&&Se(()=>{Y&&$e(Y,u,l),j&&yt(l,null,u,"unmounted")},m)},Nt=l=>{const{type:u,el:m,anchor:_,transition:b}=l;if(u===ie){Wt(m,_);return}if(u===wn){$(l);return}const w=()=>{s(m),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(l.shapeFlag&1&&b&&!b.persisted){const{leave:T,delayLeave:I}=b,A=()=>T(m,w);I?I(l.el,w,A):A()}else w()},Wt=(l,u)=>{let m;for(;l!==u;)m=h(l),s(l),l=m;s(u)},cn=(l,u,m)=>{const{bum:_,scope:b,update:w,subTree:T,um:I,m:A,a:y}=l;ls(A),ls(y),_&&Kn(_),b.stop(),w&&(w.active=!1,Te(T,l,u,m)),I&&Se(I,u),Se(()=>{l.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Le=(l,u,m,_=!1,b=!1,w=0)=>{for(let T=w;T<l.length;T++)Te(l[T],u,m,_,b)},v=l=>{if(l.shapeFlag&6)return v(l.component.subTree);if(l.shapeFlag&128)return l.suspense.next();const u=h(l.anchor||l.el),m=u&&u[Fa];return m?h(m):u};let x=!1;const S=(l,u,m)=>{l==null?u._vnode&&Te(u._vnode,null,null,!0):C(u._vnode||null,l,u,null,null,null,m),u._vnode=l,x||(x=!0,es(),Tr(),x=!1)},N={p:C,um:Te,m:Ke,r:Nt,mt:me,mc:he,pc:Z,pbc:z,n:v,o:e};let X,le;return{render:S,hydrate:X,createApp:Wa(S,X)}}function zn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function wt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ja(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function qr(e,t,n=!1){const o=e.children,s=t.children;if(H(o)&&H(s))for(let r=0;r<o.length;r++){const i=o[r];let c=s[r];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[r]=ut(s[r]),c.el=i.el),!n&&c.patchFlag!==-2&&qr(i,c)),c.type===Bn&&(c.el=i.el)}}function $a(e){const t=e.slice(),n=[0];let o,s,r,i,c;const a=e.length;for(o=0;o<a;o++){const d=e[o];if(d!==0){if(s=n[n.length-1],e[s]<d){t[o]=s,n.push(o);continue}for(r=0,i=n.length-1;r<i;)c=r+i>>1,e[n[c]]<d?r=c+1:i=c;d<e[n[r]]&&(r>0&&(t[o]=n[r-1]),n[r]=o)}}for(r=n.length,i=n[r-1];r-- >0;)n[r]=i,i=t[i];return n}function zr(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:zr(t)}function ls(e){if(e)for(let t=0;t<e.length;t++)e[t].active=!1}const qa=Symbol.for("v-scx"),za=()=>tt(qa),gn={};function yn(e,t,n){return Jr(e,t,n)}function Jr(e,t,{immediate:n,deep:o,flush:s,once:r,onTrack:i,onTrigger:c}=ce){if(t&&r){const O=t;t=(...oe)=>{O(...oe),ne()}}const a=_e,d=O=>o===!0?O:Tt(O,o===!1?1:void 0);let f,p=!1,h=!1;if(Pe(e)?(f=()=>e.value,p=Ft(e)):Jt(e)?(f=()=>d(e),p=!0):H(e)?(h=!0,p=e.some(O=>Jt(O)||Ft(O)),f=()=>e.map(O=>{if(Pe(O))return O.value;if(Jt(O))return d(O);if(G(O))return pt(O,a,2)})):G(e)?t?f=()=>pt(e,a,2):f=()=>(g&&g(),ke(e,a,3,[D])):f=Ne,t&&o){const O=f;f=()=>Tt(O())}let g,D=O=>{g=L.onStop=()=>{pt(O,a,4),g=L.onStop=void 0}},C;if(Fn)if(D=Ne,t?n&&ke(t,a,3,[f(),h?[]:void 0,D]):f(),s==="sync"){const O=za();C=O.__watcherHandles||(O.__watcherHandles=[])}else return Ne;let B=h?new Array(e.length).fill(gn):gn;const M=()=>{if(!(!L.active||!L.dirty))if(t){const O=L.run();(o||p||(h?O.some((oe,he)=>ht(oe,B[he])):ht(O,B)))&&(g&&g(),ke(t,a,3,[O,B===gn?void 0:h&&B[0]===gn?[]:B,D]),B=O)}else L.run()};M.allowRecurse=!!t;let W;s==="sync"?W=M:s==="post"?W=()=>Se(M,a&&a.suspense):(M.pre=!0,a&&(M.id=a.uid),W=()=>No(M));const L=new To(f,Ne,W),$=Ui(),ne=()=>{L.stop(),$&&wo($.effects,L)};return t?n?M():B=L.run():s==="post"?Se(L.run.bind(L),a&&a.suspense):L.run(),C&&C.push(ne),ne}function Ja(e,t,n){const o=this.proxy,s=pe(e)?e.includes(".")?Qr(o,e):()=>o[e]:e.bind(o,o);let r;G(t)?r=t:(r=t.handler,n=t);const i=ln(this),c=Jr(s,r.bind(o),n);return i(),c}function Qr(e,t){const n=t.split(".");return()=>{let o=e;for(let s=0;s<n.length&&o;s++)o=o[n[s]];return o}}function Tt(e,t=1/0,n){if(t<=0||!ae(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Pe(e))Tt(e.value,t,n);else if(H(e))for(let o=0;o<e.length;o++)Tt(e[o],t,n);else if(qs(e)||Ot(e))e.forEach(o=>{Tt(o,t,n)});else if(Qs(e)){for(const o in e)Tt(e[o],t,n);for(const o of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,o)&&Tt(e[o],t,n)}return e}const Qa=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ge(t)}Modifiers`]||e[`${Lt(t)}Modifiers`];function Za(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||ce;let s=n;const r=t.startsWith("update:"),i=r&&Qa(o,t.slice(7));i&&(i.trim&&(s=n.map(f=>pe(f)?f.trim():f)),i.number&&(s=n.map(Si)));let c,a=o[c=Vn(t)]||o[c=Vn(Ge(t))];!a&&r&&(a=o[c=Vn(Lt(t))]),a&&ke(a,e,6,s);const d=o[c+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,ke(d,e,6,s)}}function Zr(e,t,n=!1){const o=t.emitsCache,s=o.get(e);if(s!==void 0)return s;const r=e.emits;let i={},c=!1;if(!G(e)){const a=d=>{const f=Zr(d,t,!0);f&&(c=!0,be(i,f))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!r&&!c?(ae(e)&&o.set(e,null),null):(H(r)?r.forEach(a=>i[a]=null):be(i,r),ae(e)&&o.set(e,i),i)}function Hn(e,t){return!e||!xn(t)?!1:(t=t.slice(2).replace(/Once$/,""),q(e,t[0].toLowerCase()+t.slice(1))||q(e,Lt(t))||q(e,t))}function Jn(e){const{type:t,vnode:n,proxy:o,withProxy:s,propsOptions:[r],slots:i,attrs:c,emit:a,render:d,renderCache:f,props:p,data:h,setupState:g,ctx:D,inheritAttrs:C}=e,B=Pn(e);let M,W;try{if(n.shapeFlag&4){const $=s||o,ne=$;M=qe(d.call(ne,$,f,p,g,h,D)),W=c}else{const $=t;M=qe($.length>1?$(p,{attrs:c,slots:i,emit:a}):$(p,null)),W=t.props?c:Ya(c)}}catch($){Zt.length=0,kn($,e,1),M=V(Ee)}let L=M;if(W&&C!==!1){const $=Object.keys(W),{shapeFlag:ne}=L;$.length&&ne&7&&(r&&$.some(yo)&&(W=Xa(W,r)),L=mt(L,W,!1,!0))}return n.dirs&&(L=mt(L,null,!1,!0),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),M=L,Pn(B),M}const Ya=e=>{let t;for(const n in e)(n==="class"||n==="style"||xn(n))&&((t||(t={}))[n]=e[n]);return t},Xa=(e,t)=>{const n={};for(const o in e)(!yo(o)||!(o.slice(9)in t))&&(n[o]=e[o]);return n};function el(e,t,n){const{props:o,children:s,component:r}=e,{props:i,children:c,patchFlag:a}=t,d=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return o?cs(o,i,d):!!i;if(a&8){const f=t.dynamicProps;for(let p=0;p<f.length;p++){const h=f[p];if(i[h]!==o[h]&&!Hn(d,h))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:o===i?!1:o?i?cs(o,i,d):!0:!!i;return!1}function cs(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let s=0;s<o.length;s++){const r=o[s];if(t[r]!==e[r]&&!Hn(n,r))return!0}return!1}function tl({vnode:e,parent:t},n){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.el=e.el),o===e)(e=t.vnode).el=n,t=t.parent;else break}}const nl=e=>e.__isSuspense;function ol(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):ca(e)}const ie=Symbol.for("v-fgt"),Bn=Symbol.for("v-txt"),Ee=Symbol.for("v-cmt"),wn=Symbol.for("v-stc"),Zt=[];let De=null;function fe(e=!1){Zt.push(De=e?null:[])}function sl(){Zt.pop(),De=Zt[Zt.length-1]||null}let on=1;function us(e){on+=e,e<0&&De&&(De.hasOnce=!0)}function Yr(e){return e.dynamicChildren=on>0?De||Mt:null,sl(),on>0&&De&&De.push(e),e}function ve(e,t,n,o,s,r){return Yr(P(e,t,n,o,s,r,!0))}function Xr(e,t,n,o,s){return Yr(V(e,t,n,o,s,!0))}function ho(e){return e?e.__v_isVNode===!0:!1}function St(e,t){return e.type===t.type&&e.key===t.key}const ei=({key:e})=>e??null,In=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?pe(e)||Pe(e)||G(e)?{i:We,r:e,k:t,f:!!n}:e:null);function P(e,t=null,n=null,o=0,s=null,r=e===ie?0:1,i=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ei(t),ref:t&&In(t),scopeId:Un,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:o,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:We};return c?(Uo(a,n),r&128&&e.normalize(a)):n&&(a.shapeFlag|=pe(n)?8:16),on>0&&!i&&De&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&De.push(a),a}const V=rl;function rl(e,t=null,n=null,o=0,s=null,r=!1){if((!e||e===Ta)&&(e=Ee),ho(e)){const c=mt(e,t,!0);return n&&Uo(c,n),on>0&&!r&&De&&(c.shapeFlag&6?De[De.indexOf(e)]=c:De.push(c)),c.patchFlag=-2,c}if(vl(e)&&(e=e.__vccOpts),t){t=il(t);let{class:c,style:a}=t;c&&!pe(c)&&(t.class=Po(c)),ae(a)&&(gr(a)&&!H(a)&&(a=be({},a)),t.style=Ao(a))}const i=pe(e)?1:nl(e)?128:Ga(e)?64:ae(e)?4:G(e)?2:0;return P(e,t,n,o,s,i,r,!0)}function il(e){return e?gr(e)||Br(e)?be({},e):e:null}function mt(e,t,n=!1,o=!1){const{props:s,ref:r,patchFlag:i,children:c,transition:a}=e,d=t?ll(s||{},t):s,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&ei(d),ref:t&&t.ref?n&&r?H(r)?r.concat(In(t)):[r,In(t)]:In(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ie?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&mt(e.ssContent),ssFallback:e.ssFallback&&mt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&o&&Tn(f,a.clone(f)),f}function ue(e=" ",t=0){return V(Bn,null,e,t)}function ti(e,t){const n=V(wn,null,e);return n.staticCount=t,n}function al(e="",t=!1){return t?(fe(),Xr(Ee,null,e)):V(Ee,null,e)}function qe(e){return e==null||typeof e=="boolean"?V(Ee):H(e)?V(ie,null,e.slice()):typeof e=="object"?ut(e):V(Bn,null,String(e))}function ut(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:mt(e)}function Uo(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(o&65){const s=t.default;s&&(s._c&&(s._d=!1),Uo(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Br(t)?t._ctx=We:s===3&&We&&(We.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else G(t)?(t={default:t,_ctx:We},n=32):(t=String(t),o&64?(n=16,t=[ue(t)]):n=8);e.children=t,e.shapeFlag|=n}function ll(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const s in o)if(s==="class")t.class!==o.class&&(t.class=Po([t.class,o.class]));else if(s==="style")t.style=Ao([t.style,o.style]);else if(xn(s)){const r=t[s],i=o[s];i&&r!==i&&!(H(r)&&r.includes(i))&&(t[s]=r?[].concat(r,i):i)}else s!==""&&(t[s]=o[s])}return t}function $e(e,t,n,o=null){ke(e,t,7,[n,o])}const cl=Mr();let ul=0;function dl(e,t,n){const o=e.type,s=(t?t.appContext:e.appContext)||cl,r={uid:ul++,vnode:e,type:o,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new nr(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gr(o,s),emitsOptions:Zr(o,s),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:o.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Za.bind(null,r),e.ce&&e.ce(r),r}let _e=null;const fl=()=>_e||We;let Cn,mo;{const e=Ys(),t=(n,o)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(o),r=>{s.length>1?s.forEach(i=>i(r)):s[0](r)}};Cn=t("__VUE_INSTANCE_SETTERS__",n=>_e=n),mo=t("__VUE_SSR_SETTERS__",n=>Fn=n)}const ln=e=>{const t=_e;return Cn(e),e.scope.on(),()=>{e.scope.off(),Cn(t)}},ds=()=>{_e&&_e.scope.off(),Cn(null)};function ni(e){return e.vnode.shapeFlag&4}let Fn=!1;function pl(e,t=!1,n=!1){t&&mo(t);const{props:o,children:s}=e.vnode,r=ni(e);ka(e,o,r,t),Ha(e,s,n);const i=r?hl(e,t):void 0;return t&&mo(!1),i}function hl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ca);const{setup:o}=n;if(o){const s=e.setupContext=o.length>1?gl(e):null,r=ln(e);bt();const i=pt(o,e,0,[e.props,s]);if(vt(),r(),zs(i)){if(i.then(ds,ds),t)return i.then(c=>{fs(e,c,t)}).catch(c=>{kn(c,e,0)});e.asyncDep=i}else fs(e,i,t)}else oi(e,t)}function fs(e,t,n){G(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ae(t)&&(e.setupState=wr(t)),oi(e,n)}let ps;function oi(e,t,n){const o=e.type;if(!e.render){if(!t&&ps&&!o.render){const s=o.template||Wo(e).template;if(s){const{isCustomElement:r,compilerOptions:i}=e.appContext.config,{delimiters:c,compilerOptions:a}=o,d=be(be({isCustomElement:r,delimiters:c},i),a);o.render=ps(s,d)}}e.render=o.render||Ne}{const s=ln(e);bt();try{xa(e)}finally{vt(),s()}}}const ml={get(e,t){return Ce(e,"get",""),e[t]}};function gl(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,ml),slots:e.slots,emit:e.emit,expose:t}}function Mo(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(wr(br(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Qt)return Qt[n](e)},has(t,n){return n in t||n in Qt}})):e.proxy}function bl(e,t=!0){return G(e)?e.displayName||e.name:e.name||t&&e.__name}function vl(e){return G(e)&&"__vccOpts"in e}const Fe=(e,t)=>na(e,t,Fn);function Oo(e,t,n){const o=arguments.length;return o===2?ae(t)&&!H(t)?ho(t)?V(e,null,[t]):V(e,t):V(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&ho(n)&&(n=[n]),V(e,t,n))}const _l="3.4.38";/**
* @vue/runtime-dom v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const yl="http://www.w3.org/2000/svg",wl="http://www.w3.org/1998/Math/MathML",Xe=typeof document<"u"?document:null,hs=Xe&&Xe.createElement("template"),Il={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const s=t==="svg"?Xe.createElementNS(yl,e):t==="mathml"?Xe.createElementNS(wl,e):n?Xe.createElement(e,{is:n}):Xe.createElement(e);return e==="select"&&o&&o.multiple!=null&&s.setAttribute("multiple",o.multiple),s},createText:e=>Xe.createTextNode(e),createComment:e=>Xe.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Xe.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,o,s,r){const i=n?n.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{hs.innerHTML=o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e;const c=hs.content;if(o==="svg"||o==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}t.insertBefore(c,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},rt="transition",jt="animation",sn=Symbol("_vtc"),Ho=(e,{slots:t})=>Oo(pa,Al(e),t);Ho.displayName="Transition";const si={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ho.props=be({},Cr,si);const It=(e,t=[])=>{H(e)?e.forEach(n=>n(...t)):e&&e(...t)},ms=e=>e?H(e)?e.some(t=>t.length>1):e.length>1:!1;function Al(e){const t={};for(const R in e)R in si||(t[R]=e[R]);if(e.css===!1)return t;const{name:n="v",type:o,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:a=r,appearActiveClass:d=i,appearToClass:f=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,D=Pl(s),C=D&&D[0],B=D&&D[1],{onBeforeEnter:M,onEnter:W,onEnterCancelled:L,onLeave:$,onLeaveCancelled:ne,onBeforeAppear:O=M,onAppear:oe=W,onAppearCancelled:he=L}=t,K=(R,Q,me)=>{At(R,Q?f:c),At(R,Q?d:i),me&&me()},z=(R,Q)=>{R._isLeaving=!1,At(R,p),At(R,g),At(R,h),Q&&Q()},se=R=>(Q,me)=>{const Oe=R?oe:W,de=()=>K(Q,R,me);It(Oe,[Q,de]),gs(()=>{At(Q,R?a:r),it(Q,R?f:c),ms(Oe)||bs(Q,o,C,de)})};return be(t,{onBeforeEnter(R){It(M,[R]),it(R,r),it(R,i)},onBeforeAppear(R){It(O,[R]),it(R,a),it(R,d)},onEnter:se(!1),onAppear:se(!0),onLeave(R,Q){R._isLeaving=!0;const me=()=>z(R,Q);it(R,p),it(R,h),Cl(),gs(()=>{R._isLeaving&&(At(R,p),it(R,g),ms($)||bs(R,o,B,me))}),It($,[R,me])},onEnterCancelled(R){K(R,!1),It(L,[R])},onAppearCancelled(R){K(R,!0),It(he,[R])},onLeaveCancelled(R){z(R),It(ne,[R])}})}function Pl(e){if(e==null)return null;if(ae(e))return[Qn(e.enter),Qn(e.leave)];{const t=Qn(e);return[t,t]}}function Qn(e){return Ci(e)}function it(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[sn]||(e[sn]=new Set)).add(t)}function At(e,t){t.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const n=e[sn];n&&(n.delete(t),n.size||(e[sn]=void 0))}function gs(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Tl=0;function bs(e,t,n,o){const s=e._endId=++Tl,r=()=>{s===e._endId&&o()};if(n)return setTimeout(r,n);const{type:i,timeout:c,propCount:a}=Sl(e,t);if(!i)return o();const d=i+"end";let f=0;const p=()=>{e.removeEventListener(d,h),r()},h=g=>{g.target===e&&++f>=a&&p()};setTimeout(()=>{f<a&&p()},c+1),e.addEventListener(d,h)}function Sl(e,t){const n=window.getComputedStyle(e),o=D=>(n[D]||"").split(", "),s=o(`${rt}Delay`),r=o(`${rt}Duration`),i=vs(s,r),c=o(`${jt}Delay`),a=o(`${jt}Duration`),d=vs(c,a);let f=null,p=0,h=0;t===rt?i>0&&(f=rt,p=i,h=r.length):t===jt?d>0&&(f=jt,p=d,h=a.length):(p=Math.max(i,d),f=p>0?i>d?rt:jt:null,h=f?f===rt?r.length:a.length:0);const g=f===rt&&/\b(transform|all)(,|$)/.test(o(`${rt}Property`).toString());return{type:f,timeout:p,propCount:h,hasTransform:g}}function vs(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,o)=>_s(n)+_s(e[o])))}function _s(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Cl(){return document.body.offsetHeight}function xl(e,t,n){const o=e[sn];o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const ys=Symbol("_vod"),El=Symbol("_vsh"),Dl=Symbol(""),Ll=/(^|;)\s*display\s*:/;function Rl(e,t,n){const o=e.style,s=pe(n);let r=!1;if(n&&!s){if(t)if(pe(t))for(const i of t.split(";")){const c=i.slice(0,i.indexOf(":")).trim();n[c]==null&&An(o,c,"")}else for(const i in t)n[i]==null&&An(o,i,"");for(const i in n)i==="display"&&(r=!0),An(o,i,n[i])}else if(s){if(t!==n){const i=o[Dl];i&&(n+=";"+i),o.cssText=n,r=Ll.test(n)}}else t&&e.removeAttribute("style");ys in e&&(e[ys]=r?o.display:"",e[El]&&(o.display="none"))}const ws=/\s*!important$/;function An(e,t,n){if(H(n))n.forEach(o=>An(e,t,o));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const o=Nl(e,t);ws.test(n)?e.setProperty(Lt(o),n.replace(ws,""),"important"):e[o]=n}}const Is=["Webkit","Moz","ms"],Zn={};function Nl(e,t){const n=Zn[t];if(n)return n;let o=Ge(t);if(o!=="filter"&&o in e)return Zn[t]=o;o=Ln(o);for(let s=0;s<Is.length;s++){const r=Is[s]+o;if(r in e)return Zn[t]=r}return t}const As="http://www.w3.org/1999/xlink";function Ps(e,t,n,o,s,r=Ni(t)){o&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(As,t.slice(6,t.length)):e.setAttributeNS(As,t,n):n==null||r&&!Xs(n)?e.removeAttribute(t):e.setAttribute(t,r?"":gt(n)?String(n):n)}function Wl(e,t,n,o){if(t==="innerHTML"||t==="textContent"){if(n==null)return;e[t]=n;return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const i=s==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?"":String(n);(i!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let r=!1;if(n===""||n==null){const i=typeof e[t];i==="boolean"?n=Xs(n):n==null&&i==="string"?(n="",r=!0):i==="number"&&(n=0,r=!0)}try{e[t]=n}catch{}r&&e.removeAttribute(t)}function kl(e,t,n,o){e.addEventListener(t,n,o)}function Ul(e,t,n,o){e.removeEventListener(t,n,o)}const Ts=Symbol("_vei");function Ml(e,t,n,o,s=null){const r=e[Ts]||(e[Ts]={}),i=r[t];if(o&&i)i.value=o;else{const[c,a]=Ol(t);if(o){const d=r[t]=Fl(o,s);kl(e,c,d,a)}else i&&(Ul(e,c,i,a),r[t]=void 0)}}const Ss=/(?:Once|Passive|Capture)$/;function Ol(e){let t;if(Ss.test(e)){t={};let o;for(;o=e.match(Ss);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Lt(e.slice(2)),t]}let Yn=0;const Hl=Promise.resolve(),Bl=()=>Yn||(Hl.then(()=>Yn=0),Yn=Date.now());function Fl(e,t){const n=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=n.attached)return;ke(Gl(o,n.value),t,5,[o])};return n.value=e,n.attached=Bl(),n}function Gl(e,t){if(H(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(o=>s=>!s._stopped&&o&&o(s))}else return t}const Cs=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Vl=(e,t,n,o,s,r)=>{const i=s==="svg";t==="class"?xl(e,o,i):t==="style"?Rl(e,n,o):xn(t)?yo(t)||Ml(e,t,n,o,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Kl(e,t,o,i))?(Wl(e,t,o),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Ps(e,t,o,i,r,t!=="value")):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),Ps(e,t,o,i))};function Kl(e,t,n,o){if(o)return!!(t==="innerHTML"||t==="textContent"||t in e&&Cs(t)&&G(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Cs(t)&&pe(n)?!1:t in e}const jl=be({patchProp:Vl},Il);let xs;function $l(){return xs||(xs=Va(jl))}const ql=(...e)=>{const t=$l().createApp(...e),{mount:n}=t;return t.mount=o=>{const s=Jl(o);if(!s)return;const r=t._component;!G(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const i=n(s,!1,zl(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),i},t};function zl(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Jl(e){return pe(e)?document.querySelector(e):e}var Ql=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const Zl=Symbol();var Es;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Es||(Es={}));function Yl(){const e=Wi(!0),t=e.run(()=>Wn({}));let n=[],o=[];const s=br({install(r){s._a=r,r.provide(Zl,s),r.config.globalProperties.$pinia=s,o.forEach(i=>n.push(i)),o=[]},use(r){return!this._a&&!Ql?o.push(r):n.push(r),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ut=typeof document<"u";function Xl(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ee=Object.assign;function Xn(e,t){const n={};for(const o in t){const s=t[o];n[o]=Ve(s)?s.map(e):e(s)}return n}const Yt=()=>{},Ve=Array.isArray,ri=/#/g,ec=/&/g,tc=/\//g,nc=/=/g,oc=/\?/g,ii=/\+/g,sc=/%5B/g,rc=/%5D/g,ai=/%5E/g,ic=/%60/g,li=/%7B/g,ac=/%7C/g,ci=/%7D/g,lc=/%20/g;function Bo(e){return encodeURI(""+e).replace(ac,"|").replace(sc,"[").replace(rc,"]")}function cc(e){return Bo(e).replace(li,"{").replace(ci,"}").replace(ai,"^")}function go(e){return Bo(e).replace(ii,"%2B").replace(lc,"+").replace(ri,"%23").replace(ec,"%26").replace(ic,"`").replace(li,"{").replace(ci,"}").replace(ai,"^")}function uc(e){return go(e).replace(nc,"%3D")}function dc(e){return Bo(e).replace(ri,"%23").replace(oc,"%3F")}function fc(e){return e==null?"":dc(e).replace(tc,"%2F")}function rn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const pc=/\/$/,hc=e=>e.replace(pc,"");function eo(e,t,n="/"){let o,s={},r="",i="";const c=t.indexOf("#");let a=t.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(o=t.slice(0,a),r=t.slice(a+1,c>-1?c:t.length),s=e(r)),c>-1&&(o=o||t.slice(0,c),i=t.slice(c,t.length)),o=vc(o??t,n),{fullPath:o+(r&&"?")+r+i,path:o,query:s,hash:rn(i)}}function mc(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ds(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function gc(e,t,n){const o=t.matched.length-1,s=n.matched.length-1;return o>-1&&o===s&&Gt(t.matched[o],n.matched[s])&&ui(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Gt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ui(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!bc(e[n],t[n]))return!1;return!0}function bc(e,t){return Ve(e)?Ls(e,t):Ve(t)?Ls(t,e):e===t}function Ls(e,t){return Ve(t)?e.length===t.length&&e.every((n,o)=>n===t[o]):e.length===1&&e[0]===t}function vc(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),o=e.split("/"),s=o[o.length-1];(s===".."||s===".")&&o.push("");let r=n.length-1,i,c;for(i=0;i<o.length;i++)if(c=o[i],c!==".")if(c==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+o.slice(i).join("/")}const at={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var an;(function(e){e.pop="pop",e.push="push"})(an||(an={}));var Xt;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Xt||(Xt={}));function _c(e){if(!e)if(Ut){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),hc(e)}const yc=/^[^#]+#/;function wc(e,t){return e.replace(yc,"#")+t}function Ic(e,t){const n=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:t.behavior,left:o.left-n.left-(t.left||0),top:o.top-n.top-(t.top||0)}}const Gn=()=>({left:window.scrollX,top:window.scrollY});function Ac(e){let t;if("el"in e){const n=e.el,o=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?o?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Ic(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Rs(e,t){return(history.state?history.state.position-t:-1)+e}const bo=new Map;function Pc(e,t){bo.set(e,t)}function Tc(e){const t=bo.get(e);return bo.delete(e),t}let Sc=()=>location.protocol+"//"+location.host;function di(e,t){const{pathname:n,search:o,hash:s}=t,r=e.indexOf("#");if(r>-1){let c=s.includes(e.slice(r))?e.slice(r).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),Ds(a,"")}return Ds(n,e)+o+s}function Cc(e,t,n,o){let s=[],r=[],i=null;const c=({state:h})=>{const g=di(e,location),D=n.value,C=t.value;let B=0;if(h){if(n.value=g,t.value=h,i&&i===D){i=null;return}B=C?h.position-C.position:0}else o(g);s.forEach(M=>{M(n.value,D,{delta:B,type:an.pop,direction:B?B>0?Xt.forward:Xt.back:Xt.unknown})})};function a(){i=n.value}function d(h){s.push(h);const g=()=>{const D=s.indexOf(h);D>-1&&s.splice(D,1)};return r.push(g),g}function f(){const{history:h}=window;h.state&&h.replaceState(ee({},h.state,{scroll:Gn()}),"")}function p(){for(const h of r)h();r=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:a,listen:d,destroy:p}}function Ns(e,t,n,o=!1,s=!1){return{back:e,current:t,forward:n,replaced:o,position:window.history.length,scroll:s?Gn():null}}function xc(e){const{history:t,location:n}=window,o={value:di(e,n)},s={value:t.state};s.value||r(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(a,d,f){const p=e.indexOf("#"),h=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+a:Sc()+e+a;try{t[f?"replaceState":"pushState"](d,"",h),s.value=d}catch(g){console.error(g),n[f?"replace":"assign"](h)}}function i(a,d){const f=ee({},t.state,Ns(s.value.back,a,s.value.forward,!0),d,{position:s.value.position});r(a,f,!0),o.value=a}function c(a,d){const f=ee({},s.value,t.state,{forward:a,scroll:Gn()});r(f.current,f,!0);const p=ee({},Ns(o.value,a,null),{position:f.position+1},d);r(a,p,!1),o.value=a}return{location:o,state:s,push:c,replace:i}}function Ec(e){e=_c(e);const t=xc(e),n=Cc(e,t.state,t.location,t.replace);function o(r,i=!0){i||n.pauseListeners(),history.go(r)}const s=ee({location:"",base:e,go:o,createHref:wc.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Dc(e){return typeof e=="string"||e&&typeof e=="object"}function fi(e){return typeof e=="string"||typeof e=="symbol"}const pi=Symbol("");var Ws;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ws||(Ws={}));function Vt(e,t){return ee(new Error,{type:e,[pi]:!0},t)}function Ye(e,t){return e instanceof Error&&pi in e&&(t==null||!!(e.type&t))}const ks="[^/]+?",Lc={sensitive:!1,strict:!1,start:!0,end:!0},Rc=/[.+*?^${}()[\]/\\]/g;function Nc(e,t){const n=ee({},Lc,t),o=[];let s=n.start?"^":"";const r=[];for(const d of e){const f=d.length?[]:[90];n.strict&&!d.length&&(s+="/");for(let p=0;p<d.length;p++){const h=d[p];let g=40+(n.sensitive?.25:0);if(h.type===0)p||(s+="/"),s+=h.value.replace(Rc,"\\$&"),g+=40;else if(h.type===1){const{value:D,repeatable:C,optional:B,regexp:M}=h;r.push({name:D,repeatable:C,optional:B});const W=M||ks;if(W!==ks){g+=10;try{new RegExp(`(${W})`)}catch($){throw new Error(`Invalid custom RegExp for param "${D}" (${W}): `+$.message)}}let L=C?`((?:${W})(?:/(?:${W}))*)`:`(${W})`;p||(L=B&&d.length<2?`(?:/${L})`:"/"+L),B&&(L+="?"),s+=L,g+=20,B&&(g+=-8),C&&(g+=-20),W===".*"&&(g+=-50)}f.push(g)}o.push(f)}if(n.strict&&n.end){const d=o.length-1;o[d][o[d].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const i=new RegExp(s,n.sensitive?"":"i");function c(d){const f=d.match(i),p={};if(!f)return null;for(let h=1;h<f.length;h++){const g=f[h]||"",D=r[h-1];p[D.name]=g&&D.repeatable?g.split("/"):g}return p}function a(d){let f="",p=!1;for(const h of e){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const g of h)if(g.type===0)f+=g.value;else if(g.type===1){const{value:D,repeatable:C,optional:B}=g,M=D in d?d[D]:"";if(Ve(M)&&!C)throw new Error(`Provided param "${D}" is an array but it is not repeatable (* or + modifiers)`);const W=Ve(M)?M.join("/"):M;if(!W)if(B)h.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${D}"`);f+=W}}return f||"/"}return{re:i,score:o,keys:r,parse:c,stringify:a}}function Wc(e,t){let n=0;for(;n<e.length&&n<t.length;){const o=t[n]-e[n];if(o)return o;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function hi(e,t){let n=0;const o=e.score,s=t.score;for(;n<o.length&&n<s.length;){const r=Wc(o[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-o.length)===1){if(Us(o))return 1;if(Us(s))return-1}return s.length-o.length}function Us(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const kc={type:0,value:""},Uc=/[a-zA-Z0-9_]/;function Mc(e){if(!e)return[[]];if(e==="/")return[[kc]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${d}": ${g}`)}let n=0,o=n;const s=[];let r;function i(){r&&s.push(r),r=[]}let c=0,a,d="",f="";function p(){d&&(n===0?r.push({type:0,value:d}):n===1||n===2||n===3?(r.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:d,regexp:f,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),d="")}function h(){d+=a}for(;c<e.length;){if(a=e[c++],a==="\\"&&n!==2){o=n,n=4;continue}switch(n){case 0:a==="/"?(d&&p(),i()):a===":"?(p(),n=1):h();break;case 4:h(),n=o;break;case 1:a==="("?n=2:Uc.test(a)?h():(p(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+a:n=3:f+=a;break;case 3:p(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${d}"`),p(),i(),s}function Oc(e,t,n){const o=Nc(Mc(e.path),n),s=ee(o,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Hc(e,t){const n=[],o=new Map;t=Hs({strict:!1,end:!0,sensitive:!1},t);function s(p){return o.get(p)}function r(p,h,g){const D=!g,C=Bc(p);C.aliasOf=g&&g.record;const B=Hs(t,p),M=[C];if("alias"in p){const $=typeof p.alias=="string"?[p.alias]:p.alias;for(const ne of $)M.push(ee({},C,{components:g?g.record.components:C.components,path:ne,aliasOf:g?g.record:C}))}let W,L;for(const $ of M){const{path:ne}=$;if(h&&ne[0]!=="/"){const O=h.record.path,oe=O[O.length-1]==="/"?"":"/";$.path=h.record.path+(ne&&oe+ne)}if(W=Oc($,h,B),g?g.alias.push(W):(L=L||W,L!==W&&L.alias.push(W),D&&p.name&&!Os(W)&&i(p.name)),mi(W)&&a(W),C.children){const O=C.children;for(let oe=0;oe<O.length;oe++)r(O[oe],W,g&&g.children[oe])}g=g||W}return L?()=>{i(L)}:Yt}function i(p){if(fi(p)){const h=o.get(p);h&&(o.delete(p),n.splice(n.indexOf(h),1),h.children.forEach(i),h.alias.forEach(i))}else{const h=n.indexOf(p);h>-1&&(n.splice(h,1),p.record.name&&o.delete(p.record.name),p.children.forEach(i),p.alias.forEach(i))}}function c(){return n}function a(p){const h=Vc(p,n);n.splice(h,0,p),p.record.name&&!Os(p)&&o.set(p.record.name,p)}function d(p,h){let g,D={},C,B;if("name"in p&&p.name){if(g=o.get(p.name),!g)throw Vt(1,{location:p});B=g.record.name,D=ee(Ms(h.params,g.keys.filter(L=>!L.optional).concat(g.parent?g.parent.keys.filter(L=>L.optional):[]).map(L=>L.name)),p.params&&Ms(p.params,g.keys.map(L=>L.name))),C=g.stringify(D)}else if(p.path!=null)C=p.path,g=n.find(L=>L.re.test(C)),g&&(D=g.parse(C),B=g.record.name);else{if(g=h.name?o.get(h.name):n.find(L=>L.re.test(h.path)),!g)throw Vt(1,{location:p,currentLocation:h});B=g.record.name,D=ee({},h.params,p.params),C=g.stringify(D)}const M=[];let W=g;for(;W;)M.unshift(W.record),W=W.parent;return{name:B,path:C,params:D,matched:M,meta:Gc(M)}}e.forEach(p=>r(p));function f(){n.length=0,o.clear()}return{addRoute:r,resolve:d,removeRoute:i,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function Ms(e,t){const n={};for(const o of t)o in e&&(n[o]=e[o]);return n}function Bc(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Fc(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Fc(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const o in e.components)t[o]=typeof n=="object"?n[o]:n;return t}function Os(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Gc(e){return e.reduce((t,n)=>ee(t,n.meta),{})}function Hs(e,t){const n={};for(const o in e)n[o]=o in t?t[o]:e[o];return n}function Vc(e,t){let n=0,o=t.length;for(;n!==o;){const r=n+o>>1;hi(e,t[r])<0?o=r:n=r+1}const s=Kc(e);return s&&(o=t.lastIndexOf(s,o-1)),o}function Kc(e){let t=e;for(;t=t.parent;)if(mi(t)&&hi(e,t)===0)return t}function mi({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function jc(e){const t={};if(e===""||e==="?")return t;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<o.length;++s){const r=o[s].replace(ii," "),i=r.indexOf("="),c=rn(i<0?r:r.slice(0,i)),a=i<0?null:rn(r.slice(i+1));if(c in t){let d=t[c];Ve(d)||(d=t[c]=[d]),d.push(a)}else t[c]=a}return t}function Bs(e){let t="";for(let n in e){const o=e[n];if(n=uc(n),o==null){o!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ve(o)?o.map(r=>r&&go(r)):[o&&go(o)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function $c(e){const t={};for(const n in e){const o=e[n];o!==void 0&&(t[n]=Ve(o)?o.map(s=>s==null?null:""+s):o==null?o:""+o)}return t}const qc=Symbol(""),Fs=Symbol(""),Fo=Symbol(""),gi=Symbol(""),vo=Symbol("");function $t(){let e=[];function t(o){return e.push(o),()=>{const s=e.indexOf(o);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function dt(e,t,n,o,s,r=i=>i()){const i=o&&(o.enterCallbacks[s]=o.enterCallbacks[s]||[]);return()=>new Promise((c,a)=>{const d=h=>{h===!1?a(Vt(4,{from:n,to:t})):h instanceof Error?a(h):Dc(h)?a(Vt(2,{from:t,to:h})):(i&&o.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),c())},f=r(()=>e.call(o&&o.instances[s],t,n,d));let p=Promise.resolve(f);e.length<3&&(p=p.then(d)),p.catch(h=>a(h))})}function to(e,t,n,o,s=r=>r()){const r=[];for(const i of e)for(const c in i.components){let a=i.components[c];if(!(t!=="beforeRouteEnter"&&!i.instances[c]))if(zc(a)){const f=(a.__vccOpts||a)[t];f&&r.push(dt(f,n,o,i,c,s))}else{let d=a();r.push(()=>d.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${i.path}"`));const p=Xl(f)?f.default:f;i.components[c]=p;const g=(p.__vccOpts||p)[t];return g&&dt(g,n,o,i,c,s)()}))}}return r}function zc(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Gs(e){const t=tt(Fo),n=tt(gi),o=Fe(()=>{const a=Je(e.to);return t.resolve(a)}),s=Fe(()=>{const{matched:a}=o.value,{length:d}=a,f=a[d-1],p=n.matched;if(!f||!p.length)return-1;const h=p.findIndex(Gt.bind(null,f));if(h>-1)return h;const g=Vs(a[d-2]);return d>1&&Vs(f)===g&&p[p.length-1].path!==g?p.findIndex(Gt.bind(null,a[d-2])):h}),r=Fe(()=>s.value>-1&&Yc(n.params,o.value.params)),i=Fe(()=>s.value>-1&&s.value===n.matched.length-1&&ui(n.params,o.value.params));function c(a={}){return Zc(a)?t[Je(e.replace)?"replace":"push"](Je(e.to)).catch(Yt):Promise.resolve()}return{route:o,href:Fe(()=>o.value.href),isActive:r,isExactActive:i,navigate:c}}const Jc=Lr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Gs,setup(e,{slots:t}){const n=Nn(Gs(e)),{options:o}=tt(Fo),s=Fe(()=>({[Ks(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[Ks(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&t.default(n);return e.custom?r:Oo("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),Qc=Jc;function Zc(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Yc(e,t){for(const n in t){const o=t[n],s=e[n];if(typeof o=="string"){if(o!==s)return!1}else if(!Ve(s)||s.length!==o.length||o.some((r,i)=>r!==s[i]))return!1}return!0}function Vs(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ks=(e,t,n)=>e??t??n,Xc=Lr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const o=tt(vo),s=Fe(()=>e.route||o.value),r=tt(Fs,0),i=Fe(()=>{let d=Je(r);const{matched:f}=s.value;let p;for(;(p=f[d])&&!p.components;)d++;return d}),c=Fe(()=>s.value.matched[i.value]);_n(Fs,Fe(()=>i.value+1)),_n(qc,c),_n(vo,s);const a=Wn();return yn(()=>[a.value,c.value,e.name],([d,f,p],[h,g,D])=>{f&&(f.instances[p]=d,g&&g!==f&&d&&d===h&&(f.leaveGuards.size||(f.leaveGuards=g.leaveGuards),f.updateGuards.size||(f.updateGuards=g.updateGuards))),d&&f&&(!g||!Gt(f,g)||!h)&&(f.enterCallbacks[p]||[]).forEach(C=>C(d))},{flush:"post"}),()=>{const d=s.value,f=e.name,p=c.value,h=p&&p.components[f];if(!h)return js(n.default,{Component:h,route:d});const g=p.props[f],D=g?g===!0?d.params:typeof g=="function"?g(d):g:null,B=Oo(h,ee({},D,t,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(p.instances[f]=null)},ref:a}));return js(n.default,{Component:B,route:d})||B}}});function js(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const bi=Xc;function eu(e){const t=Hc(e.routes,e),n=e.parseQuery||jc,o=e.stringifyQuery||Bs,s=e.history,r=$t(),i=$t(),c=$t(),a=oa(at);let d=at;Ut&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Xn.bind(null,v=>""+v),p=Xn.bind(null,fc),h=Xn.bind(null,rn);function g(v,x){let S,N;return fi(v)?(S=t.getRecordMatcher(v),N=x):N=v,t.addRoute(N,S)}function D(v){const x=t.getRecordMatcher(v);x&&t.removeRoute(x)}function C(){return t.getRoutes().map(v=>v.record)}function B(v){return!!t.getRecordMatcher(v)}function M(v,x){if(x=ee({},x||a.value),typeof v=="string"){const u=eo(n,v,x.path),m=t.resolve({path:u.path},x),_=s.createHref(u.fullPath);return ee(u,m,{params:h(m.params),hash:rn(u.hash),redirectedFrom:void 0,href:_})}let S;if(v.path!=null)S=ee({},v,{path:eo(n,v.path,x.path).path});else{const u=ee({},v.params);for(const m in u)u[m]==null&&delete u[m];S=ee({},v,{params:p(u)}),x.params=p(x.params)}const N=t.resolve(S,x),X=v.hash||"";N.params=f(h(N.params));const le=mc(o,ee({},v,{hash:cc(X),path:N.path})),l=s.createHref(le);return ee({fullPath:le,hash:X,query:o===Bs?$c(v.query):v.query||{}},N,{redirectedFrom:void 0,href:l})}function W(v){return typeof v=="string"?eo(n,v,a.value.path):ee({},v)}function L(v,x){if(d!==v)return Vt(8,{from:x,to:v})}function $(v){return oe(v)}function ne(v){return $(ee(W(v),{replace:!0}))}function O(v){const x=v.matched[v.matched.length-1];if(x&&x.redirect){const{redirect:S}=x;let N=typeof S=="function"?S(v):S;return typeof N=="string"&&(N=N.includes("?")||N.includes("#")?N=W(N):{path:N},N.params={}),ee({query:v.query,hash:v.hash,params:N.path!=null?{}:v.params},N)}}function oe(v,x){const S=d=M(v),N=a.value,X=v.state,le=v.force,l=v.replace===!0,u=O(S);if(u)return oe(ee(W(u),{state:typeof u=="object"?ee({},X,u.state):X,force:le,replace:l}),x||S);const m=S;m.redirectedFrom=x;let _;return!le&&gc(o,N,S)&&(_=Vt(16,{to:m,from:N}),Ke(N,N,!0,!1)),(_?Promise.resolve(_):z(m,N)).catch(b=>Ye(b)?Ye(b,2)?b:ot(b):Z(b,m,N)).then(b=>{if(b){if(Ye(b,2))return oe(ee({replace:l},W(b.to),{state:typeof b.to=="object"?ee({},X,b.to.state):X,force:le}),x||m)}else b=R(m,N,!0,l,X);return se(m,N,b),b})}function he(v,x){const S=L(v,x);return S?Promise.reject(S):Promise.resolve()}function K(v){const x=Wt.values().next().value;return x&&typeof x.runWithContext=="function"?x.runWithContext(v):v()}function z(v,x){let S;const[N,X,le]=tu(v,x);S=to(N.reverse(),"beforeRouteLeave",v,x);for(const u of N)u.leaveGuards.forEach(m=>{S.push(dt(m,v,x))});const l=he.bind(null,v,x);return S.push(l),Le(S).then(()=>{S=[];for(const u of r.list())S.push(dt(u,v,x));return S.push(l),Le(S)}).then(()=>{S=to(X,"beforeRouteUpdate",v,x);for(const u of X)u.updateGuards.forEach(m=>{S.push(dt(m,v,x))});return S.push(l),Le(S)}).then(()=>{S=[];for(const u of le)if(u.beforeEnter)if(Ve(u.beforeEnter))for(const m of u.beforeEnter)S.push(dt(m,v,x));else S.push(dt(u.beforeEnter,v,x));return S.push(l),Le(S)}).then(()=>(v.matched.forEach(u=>u.enterCallbacks={}),S=to(le,"beforeRouteEnter",v,x,K),S.push(l),Le(S))).then(()=>{S=[];for(const u of i.list())S.push(dt(u,v,x));return S.push(l),Le(S)}).catch(u=>Ye(u,8)?u:Promise.reject(u))}function se(v,x,S){c.list().forEach(N=>K(()=>N(v,x,S)))}function R(v,x,S,N,X){const le=L(v,x);if(le)return le;const l=x===at,u=Ut?history.state:{};S&&(N||l?s.replace(v.fullPath,ee({scroll:l&&u&&u.scroll},X)):s.push(v.fullPath,X)),a.value=v,Ke(v,x,S,l),ot()}let Q;function me(){Q||(Q=s.listen((v,x,S)=>{if(!cn.listening)return;const N=M(v),X=O(N);if(X){oe(ee(X,{replace:!0}),N).catch(Yt);return}d=N;const le=a.value;Ut&&Pc(Rs(le.fullPath,S.delta),Gn()),z(N,le).catch(l=>Ye(l,12)?l:Ye(l,2)?(oe(l.to,N).then(u=>{Ye(u,20)&&!S.delta&&S.type===an.pop&&s.go(-1,!1)}).catch(Yt),Promise.reject()):(S.delta&&s.go(-S.delta,!1),Z(l,N,le))).then(l=>{l=l||R(N,le,!1),l&&(S.delta&&!Ye(l,8)?s.go(-S.delta,!1):S.type===an.pop&&Ye(l,20)&&s.go(-1,!1)),se(N,le,l)}).catch(Yt)}))}let Oe=$t(),de=$t(),te;function Z(v,x,S){ot(v);const N=de.list();return N.length?N.forEach(X=>X(v,x,S)):console.error(v),Promise.reject(v)}function Ze(){return te&&a.value!==at?Promise.resolve():new Promise((v,x)=>{Oe.add([v,x])})}function ot(v){return te||(te=!v,me(),Oe.list().forEach(([x,S])=>v?S(v):x()),Oe.reset()),v}function Ke(v,x,S,N){const{scrollBehavior:X}=e;if(!Ut||!X)return Promise.resolve();const le=!S&&Tc(Rs(v.fullPath,0))||(N||!S)&&history.state&&history.state.scroll||null;return Ar().then(()=>X(v,x,le)).then(l=>l&&Ac(l)).catch(l=>Z(l,v,x))}const Te=v=>s.go(v);let Nt;const Wt=new Set,cn={currentRoute:a,listening:!0,addRoute:g,removeRoute:D,clearRoutes:t.clearRoutes,hasRoute:B,getRoutes:C,resolve:M,options:e,push:$,replace:ne,go:Te,back:()=>Te(-1),forward:()=>Te(1),beforeEach:r.add,beforeResolve:i.add,afterEach:c.add,onError:de.add,isReady:Ze,install(v){const x=this;v.component("RouterLink",Qc),v.component("RouterView",bi),v.config.globalProperties.$router=x,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Je(a)}),Ut&&!Nt&&a.value===at&&(Nt=!0,$(s.location).catch(X=>{}));const S={};for(const X in at)Object.defineProperty(S,X,{get:()=>a.value[X],enumerable:!0});v.provide(Fo,x),v.provide(gi,hr(S)),v.provide(vo,a);const N=v.unmount;Wt.add(v),v.unmount=function(){Wt.delete(v),Wt.size<1&&(d=at,Q&&Q(),Q=null,a.value=at,Nt=!1,te=!1),N()}}};function Le(v){return v.reduce((x,S)=>x.then(()=>K(S)),Promise.resolve())}return cn}function tu(e,t){const n=[],o=[],s=[],r=Math.max(t.matched.length,e.matched.length);for(let i=0;i<r;i++){const c=t.matched[i];c&&(e.matched.find(d=>Gt(d,c))?o.push(c):n.push(c));const a=e.matched[i];a&&(t.matched.find(d=>Gt(d,a))||s.push(a))}return[n,o,s]}const Ie=(e,t)=>{const n=e.__vccOpts||e;for(const[o,s]of t)n[o]=s;return n},nu={__name:"App",setup(e){return(t,n)=>(fe(),Xr(Je(bi)))}},ou=Ie(nu,[["__scopeId","data-v-0b57781d"]]),su={class:"app-header"},ru={class:"container"},iu={class:"app-header-nav",style:{"list-style":"none"}},au={__name:"LayoutHeader",setup(e){return(t,n)=>{const o=Dt("RouterLink");return fe(),ve("header",su,[P("div",ru,[P("ul",iu,[P("li",null,[V(o,{to:"/"},{default:ye(()=>[ue("WebAPI")]),_:1})]),P("li",null,[V(o,{to:"/vue3"},{default:ye(()=>[ue("Vue3")]),_:1})]),P("li",null,[V(o,{to:"/download"},{default:ye(()=>[ue("下載")]),_:1})]),P("li",null,[V(o,{to:"/others"},{default:ye(()=>[ue("其他")]),_:1})]),P("li",null,[V(o,{to:"/dotnet7_vue3"},{default:ye(()=>[ue("Dotnet7_vue3")]),_:1})]),P("li",null,[V(o,{to:"/vscode_function"},{default:ye(()=>[ue("VS Code小功能")]),_:1})]),P("li",null,[V(o,{to:"/video"},{default:ye(()=>[ue("Video")]),_:1})]),P("li",null,[V(o,{to:"/dotnetapi_angular"},{default:ye(()=>[ue("DotnetAPI_Angular")]),_:1})])])])])}}},lu=Ie(au,[["__scopeId","data-v-179b1728"]]),cu=P("hr",null,null,-1),uu={__name:"index",setup(e){return(t,n)=>{const o=Dt("RouterView");return fe(),ve(ie,null,[V(lu),cu,V(o)],64)}}},du="/vue-my-note/assets/uparrow-CelNzM_b.png",fu={name:"scroll-top",data(){return{scrollTop:0,time:0,dParams:20,scrollState:0}},computed:{showTop:function(){return this.scrollTop>200}},mounted(){window.addEventListener("scroll",this.getScrollTop)},methods:{toTop(e){if(this.scrollState)return;this.scrollState=1,e.preventDefault(),document.documentElement.scrollTop||document.body.scrollTop;let t=this;this.time=setInterval(function(){t.gotoTop(t.scrollTop-t.dParams)},30)},gotoTop(e){this.dParams+=20,e=e>0?e:0,document.documentElement.scrollTop=document.body.scrollTop=window.pageYOffset=e,this.scrollTop<10&&(clearInterval(this.time),this.dParams=20,this.scrollState=0)},getScrollTop(){this.scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop}}},pu=e=>(Ue("data-v-77d80545"),e=e(),Me(),e),hu=pu(()=>P("img",{src:du},null,-1)),mu=[hu];function gu(e,t,n,o,s,r){return fe(),ve("div",{class:"scrollTop",onClick:t[0]||(t[0]=(...i)=>r.toTop&&r.toTop(...i))},mu)}const Qe=Ie(fu,[["render",gu],["__scopeId","data-v-77d80545"]]),bu=e=>(Ue("data-v-e16ba16f"),e=e(),Me(),e),vu=bu(()=>P("div",null,"我是WebAPI頁面",-1)),_u=`
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
  `,yu={__name:"index",setup(e){return Qe.scrollToTop=!0,(t,n)=>(fe(),ve(ie,null,[vu,P("div",null,[P("div",{innerHTML:_u})]),V(Qe)],64))}},wu=Ie(yu,[["__scopeId","data-v-e16ba16f"]]),Iu=P("div",null,"我是RabbitVue3頁面",-1),Au=`
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
`,Pu={__name:"index",setup(e){return Qe.scrollToTop=!0,(t,n)=>(fe(),ve(ie,null,[Iu,P("div",{innerHTML:Au}),V(Qe)],64))}},Tu={},Su=ti('<div data-v-7d886014>我是Download頁面</div><div id="Vue3" class="content" data-v-7d886014><div class="box" data-v-7d886014> //-----------Vue3 <div data-v-7d886014><a href="https://www.youtube.com/watch?v=LlYhPO8Ti2U" target="_blank" data-v-7d886014> 1.NET7 Web API | SQL Database | VueJS(3.0) - Composition API | CRUD| Full Video<span class="pdf" data-v-7d886014>YouTube</span></a><p data-v-7d886014>.解決CORS問題</p></div><div data-v-7d886014><a download href="https://drive.google.com/uc?export=download&amp;id=19m0QpipH0fPS51aztlgZ0gFxwWkSpqo_" data-v-7d886014> 1.dotnet7_vue3<span class="pdf" data-v-7d886014>download&gt;</span></a></div><div data-v-7d886014><a href="https://www.youtube.com/watch?v=2FoD_8dMGyU&amp;list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG" target="_blank" data-v-7d886014> 2.【黑馬程序員】前端Vue3小兔鮮實戰項目<span class="pdf" data-v-7d886014>YouTube</span></a></div><div data-v-7d886014><a download href="https://drive.google.com/uc?export=download&amp;id=10LPanB6adG6BLF0cKcM3H-VCSvUWwf8A" data-v-7d886014> 3.vue-rabbit_my 小兔鮮<span class="pdf" data-v-7d886014>download</span></a></div><div data-v-7d886014><a download href="https://drive.google.com/uc?export=download&amp;id=18N6U0JeeUsS6EhGGz2jvh3aZK41L-uBc" data-v-7d886014> 4.vue3-basic-project-my(mock)<span class="pdf" data-v-7d886014>download</span></a></div><div data-v-7d886014><a download href="https://drive.google.com/uc?export=download&amp;id=1Xe_GxmzXJVSIxMnqw3cm15YkLLQc4tWD" data-v-7d886014> 5.vue3-basic-project-my(有驗證名字不能重覆update)<span class="pdf" data-v-7d886014>download</span></a></div> //-----------WEBAPI <div data-v-7d886014><a href="https://blog.talllkai.com/ASPNETCore" target="_blank" data-v-7d886014> 1.完整且輕鬆學習ASP.NET Core Web API<span class="pdf" data-v-7d886014>Web</span></a></div><div data-v-7d886014><a href="https://www.youtube.com/watch?v=dXUfZuf1Wp4&amp;list=PLneJIGUTIItuqdxuDBEKCrvXCtCdUf_Xm" target="_blank" data-v-7d886014> 2.ASP.NET Core Web API 入門教學<span class="pdf" data-v-7d886014>YouTube</span></a></div><div data-v-7d886014><a download href="https://drive.google.com/uc?export=download&amp;id=1Mi3nQijxvyz6TmA7NWzkudmxeJha7W-e" data-v-7d886014> 3.DataBase_First_凱哥<span class="pdf" data-v-7d886014>download</span></a></div><div data-v-7d886014><a download href="https://drive.google.com/uc?export=download&amp;id=1ZvJ5hwHCPzPRMsv_w3sWJOxKYI88h8xd" data-v-7d886014> 4.BookMark<span class="pdf" data-v-7d886014>download</span></a></div></div></div>',2);function Cu(e,t){return Su}const xu=Ie(Tu,[["render",Cu],["__scopeId","data-v-7d886014"]]),Eu=`
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
`,vi={__name:"_4_deployVite",setup(e){return Qe.scrollToTop=!0,(t,n)=>(fe(),ve(ie,null,[P("div",{innerHTML:Eu}),V(Qe)],64))}},_t=e=>(Ue("data-v-4e138573"),e=e(),Me(),e),Du=_t(()=>P("div",null,"這是其他頁",-1)),Lu={id:"Vite_to_github",class:"content"},Ru=_t(()=>P("div",null,[ue("1.Vue3 CRUD + bootstrap "),P("a",{href:"https://www.youtube.com/watch?v=PrKh6GemOyg",target:"_blank"}," https://www.youtube.com/watch?v=PrKh6GemOyg ")],-1)),Nu=_t(()=>P("div",null,[ue("2.Vue3 學習筆記 "),P("a",{href:"https://hackmd.io/@Lin-Jay/S1xju_nKO",target:"_blank"}," https://hackmd.io/@Lin-Jay/S1xju_nKO ")],-1)),Wu=_t(()=>P("div",null,[ue("3.Build app using Vue JS, .NET Core Web API and Microsoft SQL Server(create Azure) "),P("a",{href:"https://www.youtube.com/watch?v=TMmhECU3rHs",target:"_blank"}," https://www.youtube.com/watch?v=TMmhECU3rHs ")],-1)),ku=_t(()=>P("a",{href:"https://www.youtube.com/watch?v=yo2bMGnIKE8",target:"_blank"}," https://www.youtube.com/watch?v=yo2bMGnIKE8 ",-1)),Uu={key:0},Mu=_t(()=>P("div",null,[ue("5.先學 axios 基礎與封裝管理 API "),P("a",{href:"https://ithelp.ithome.com.tw/articles/10304656",target:"_blank"}," https://ithelp.ithome.com.tw/articles/10304656 ")],-1)),Ou=_t(()=>P("div",null,[ue("6.[C#][ASP.NET] Web API 開發心得 (7) - 使用 Token 進行 API 授權驗證 "),P("a",{href:"https://ithelp.ithome.com.tw/articles/10199102",target:"_blank"}," https://ithelp.ithome.com.tw/articles/10199102 ")],-1)),Hu=_t(()=>P("div",null,[ue("7.Poy Chang Trial and Error "),P("a",{href:"https://blog.poychang.net/categories/",target:"_blank"}," https://blog.poychang.net/categories/ ")],-1)),Bu={__name:"index",setup(e){let t=Wn(!1);return(n,o)=>{const s=Dt("toTop");return fe(),ve(ie,null,[Du,P("div",Lu,[Ru,Nu,Wu,P("div",null,[ue("4.How to Deploy Your Vite App to Github Pages "),ku,P("button",{onClick:o[0]||(o[0]=r=>Pe(t)?t.value=!Je(t):t=!Je(t))},"Toggle"),V(Ho,null,{default:ye(()=>[Je(t)?(fe(),ve("div",Uu,[V(vi)])):al("",!0)]),_:1})]),Mu,Ou,Hu]),V(s)],64)}}},Fu=Ie(Bu,[["__scopeId","data-v-4e138573"]]),_i=e=>(Ue("data-v-c5b6fb41"),e=e(),Me(),e),Gu=_i(()=>P("div",null,[P("h2",null,"Dotnet7_vue3"),P("div",null,".NET7 Web API | SQL Database | VueJS(3.0) - Composition API | CRUD")],-1)),Vu={class:"container"},Ku={class:"app-header-nav",style:{"list-style":"none"}},ju=_i(()=>P("div",null,null,-1)),$u={__name:"index",setup(e){return Qe.scrollToTop=!0,(t,n)=>{const o=Dt("RouterLink"),s=Dt("RouterView");return fe(),ve(ie,null,[Gu,P("div",null,[P("div",Vu,[P("ul",Ku,[P("li",null,[V(o,{to:"/_beach_info"},{default:ye(()=>[ue("_Beach_Info.vue")]),_:1})]),P("li",null,[V(o,{to:"/editbeach"},{default:ye(()=>[ue("AddBeach.vue")]),_:1})]),P("li",null,[V(o,{to:"/beachList"},{default:ye(()=>[ue("BeachList.vue")]),_:1})]),P("li",null,[V(o,{to:"/editbeach"},{default:ye(()=>[ue("EditBeach.vue")]),_:1})]),P("li",null,[V(o,{to:"/routerbeach"},{default:ye(()=>[ue("router_Beach.vue")]),_:1})]),P("li",null,[V(o,{to:"/confirmDeletePopup"},{default:ye(()=>[ue("ConfirmDeletePopup.vue")]),_:1})])])]),V(s),ju]),V(Qe)],64)}}},qu=Ie($u,[["__scopeId","data-v-c5b6fb41"]]),zu=e=>(Ue("data-v-090910d0"),e=e(),Me(),e),Ju=zu(()=>P("div",null,"這是_Beach_Info",-1)),Qu=`
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
`,Zu={__name:"_Beach_Info",setup(e){return(t,n)=>(fe(),ve(ie,null,[Ju,P("div",{class:"content"},[P("pre",null,"      "+Rt(Qu)+`
    `)])],64))}},$s=Ie(Zu,[["__scopeId","data-v-090910d0"]]),Yu=e=>(Ue("data-v-56326e1c"),e=e(),Me(),e),Xu=Yu(()=>P("div",null,"這是AddBeach",-1)),ed=`
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

`,td={__name:"AddBeach",setup(e){return(t,n)=>(fe(),ve(ie,null,[Xu,P("div",{class:"content"},[P("pre",null,"      "+Rt(ed)+`
    `)])],64))}},nd=Ie(td,[["__scopeId","data-v-56326e1c"]]),od=e=>(Ue("data-v-a17ba2a6"),e=e(),Me(),e),sd=od(()=>P("div",null,"這是BeachList",-1)),rd=`
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

`,id={__name:"BeachList",setup(e){return(t,n)=>(fe(),ve(ie,null,[sd,P("div",{class:"content"},[P("pre",null,"      "+Rt(rd)+`
    `)])],64))}},ad=Ie(id,[["__scopeId","data-v-a17ba2a6"]]),ld=e=>(Ue("data-v-2a59f778"),e=e(),Me(),e),cd=ld(()=>P("div",null,"這是EditBeach",-1)),ud=`
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

`,dd={__name:"EditBeach",setup(e){return(t,n)=>(fe(),ve(ie,null,[cd,P("div",{class:"content"},[P("pre",null,"      "+Rt(ud)+`
    `)])],64))}},fd=Ie(dd,[["__scopeId","data-v-2a59f778"]]),pd=e=>(Ue("data-v-f0f2e55e"),e=e(),Me(),e),hd=pd(()=>P("div",null,"這是_router_Beach",-1)),md=`
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


`,gd={__name:"router_Beach",setup(e){return(t,n)=>(fe(),ve(ie,null,[hd,P("div",{class:"content"},[P("pre",null,"      "+Rt(md)+`
    `)])],64))}},bd=Ie(gd,[["__scopeId","data-v-f0f2e55e"]]),vd=e=>(Ue("data-v-69fb1a2b"),e=e(),Me(),e),_d=vd(()=>P("div",null,"這是ConfirmDeletePopup",-1)),yd=`
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


`,wd={__name:"ConfirmDeletePopup",setup(e){return(t,n)=>(fe(),ve(ie,null,[_d,P("div",{class:"content"},[P("pre",null,`      這放在components\\
      由BeachList 呼叫
      `+Rt(yd)+`
    `)])],64))}},Id=Ie(wd,[["__scopeId","data-v-69fb1a2b"]]),yi=e=>(Ue("data-v-e2fffa5f"),e=e(),Me(),e),Ad=yi(()=>P("div",null,"這是VS Code 功能頁",-1)),Pd=yi(()=>P("div",{id:"Vite_to_github",class:"content"},[P("div",null,[ue("1.vS Code文件標簽欄多行顯示 "),P("a",{href:"https://blog.csdn.net/mj475002864/article/details/115456004",target:"_blank"}," https://blog.csdn.net/mj475002864/article/details/115456004 "),P("p",null,"ctrl + shift + p => 查詢 Open Workspace Settings => Wrap Tabs 打勾 ")])],-1)),Td={__name:"index",setup(e){return(t,n)=>{const o=Dt("toTop");return fe(),ve(ie,null,[Ad,Pd,V(o)],64)}}},Sd=Ie(Td,[["__scopeId","data-v-e2fffa5f"]]),Cd=ti('<div data-v-13d3349d>這是影音頁</div><div id="Vite_to_github" class="content" data-v-13d3349d><div data-v-13d3349d>1.Vue3 CRUD + bootstrap <a href="https://www.youtube.com/watch?v=PrKh6GemOyg" target="_blank" data-v-13d3349d> https://www.youtube.com/watch?v=PrKh6GemOyg </a></div><div data-v-13d3349d>2.後台課程管理系統-Vue3版 <a href="https://www.youtube.com/watch?v=yZMTHoGSuVQ&amp;list=PL_vrngOaamYsIovhZ3Cd9M2vPhm3yRTnG" target="_blank" data-v-13d3349d> https://www.youtube.com/watch?v=yZMTHoGSuVQ&amp;list=PL_vrngOaamYsIovhZ3Cd9M2vPhm3yRTnG </a></div><div data-v-13d3349d>3.2024年不看后悔的Vue3+.NET7+WebAPI从零手写后台管理系统 <a href="https://www.bilibili.com/video/BV1Km411o7ip?p=1&amp;vd_source=1a5937a80fc962029ba6a7b9ee9a1654" target="_blank" data-v-13d3349d> https://www.bilibili.com/video/BV1Km411o7ip?p=1&amp;vd_source=1a5937a80fc962029ba6a7b9ee9a1654 </a><a href="https://search.bilibili.com/all?vt=75651059&amp;keyword=2024%E5%B9%B4%E4%B8%8D%E7%9C%8B%E5%90%8E%E6%82%94%E7%9A%84Vue3%2B.NET7%2BWebAPI&amp;from_source=webtop_search&amp;spm_id_from=333.1007&amp;search_source=5" target="_blank" data-v-13d3349d> https://search.bilibili.com/all?vt=75651059&amp;keyword=2024%E5%B9%B4%E4%B8%8D%E7%9C%8B%E5%90%8E%E6%82%94%E7%9A%84Vue3%2B.NET7%2BWebAPI&amp;from_source=webtop_search&amp;spm_id_from=333.1007&amp;search_source=5 </a></div><div data-v-13d3349d>4.2023全新C#完全零基础入门教程（附源码） <a href="https://www.bilibili.com/read/cv25507935/" target="_blank" data-v-13d3349d> https://www.bilibili.com/read/cv25507935/ </a></div></div>',2),xd={__name:"index",setup(e){return Wn(!1),(t,n)=>{const o=Dt("toTop");return fe(),ve(ie,null,[Cd,V(o)],64)}}},Ed=Ie(xd,[["__scopeId","data-v-13d3349d"]]),Dd=e=>(Ue("data-v-a22ef927"),e=e(),Me(),e),Ld=Dd(()=>P("div",null,"我是DotnetAPI_Angular頁面",-1)),Rd=`
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
            

    </pre>
  </div>
  `,Nd={__name:"index",setup(e){return Qe.scrollToTop=!0,(t,n)=>(fe(),ve(ie,null,[Ld,P("div",null,[P("div",{innerHTML:Rd})]),V(Qe)],64))}},Wd=Ie(Nd,[["__scopeId","data-v-a22ef927"]]),kd=eu({history:Ec("/vue-my-note/"),routes:[{path:"/",component:uu,children:[{path:"",component:wu},{path:"/vue3",component:Pu},{path:"/download",component:xu},{path:"/others",component:Fu,children:[{path:"/_4_deployVite",component:vi}]},{path:"/dotnet7_vue3",component:qu,children:[{path:"",component:$s},{path:"/_beach_info",component:$s},{path:"/addbeach",component:nd},{path:"/beachList",component:ad},{path:"/editbeach",component:fd},{path:"/routerbeach",component:bd},{path:"/confirmDeletePopup",component:Id}]},{path:"/vscode_function",component:Sd},{path:"/video",component:Ed},{path:"/dotnetapi_angular",component:Wd}]}]}),Go=ql(ou);Go.use(Yl());Go.use(kd);Go.mount("#app");
