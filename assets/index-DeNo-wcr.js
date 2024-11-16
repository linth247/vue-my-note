(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();/**
* @vue/shared v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Sn(e,t){const o=new Set(e.split(","));return n=>o.has(n)}const me={},Ft=[],Oe=()=>{},Pi=()=>!1,No=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Tn=e=>e.startsWith("onUpdate:"),Ae=Object.assign,xn=(e,t)=>{const o=e.indexOf(t);o>-1&&e.splice(o,1)},Ei=Object.prototype.hasOwnProperty,X=(e,t)=>Ei.call(e,t),F=Array.isArray,Bt=e=>Ro(e)==="[object Map]",Xs=e=>Ro(e)==="[object Set]",G=e=>typeof e=="function",ve=e=>typeof e=="string",At=e=>typeof e=="symbol",fe=e=>e!==null&&typeof e=="object",er=e=>(fe(e)||G(e))&&G(e.then)&&G(e.catch),tr=Object.prototype.toString,Ro=e=>tr.call(e),Di=e=>Ro(e).slice(8,-1),or=e=>Ro(e)==="[object Object]",Pn=e=>ve(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Zt=Sn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Uo=e=>{const t=Object.create(null);return o=>t[o]||(t[o]=e(o))},Li=/-(\w)/g,Je=Uo(e=>e.replace(Li,(t,o)=>o?o.toUpperCase():"")),ki=/\B([A-Z])/g,Ut=Uo(e=>e.replace(ki,"-$1").toLowerCase()),Wo=Uo(e=>e.charAt(0).toUpperCase()+e.slice(1)),qo=Uo(e=>e?`on${Wo(e)}`:""),_t=(e,t)=>!Object.is(e,t),Qo=(e,...t)=>{for(let o=0;o<e.length;o++)e[o](...t)},nr=(e,t,o,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:o})},Ni=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Ri=e=>{const t=ve(e)?Number(e):NaN;return isNaN(t)?e:t};let Zn;const sr=()=>Zn||(Zn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function En(e){if(F(e)){const t={};for(let o=0;o<e.length;o++){const n=e[o],s=ve(n)?Hi(n):En(n);if(s)for(const r in s)t[r]=s[r]}return t}else if(ve(e)||fe(e))return e}const Ui=/;(?![^(]*\))/g,Wi=/:([^]+)/,Mi=/\/\*[^]*?\*\//g;function Hi(e){const t={};return e.replace(Mi,"").split(Ui).forEach(o=>{if(o){const n=o.split(Wi);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Dn(e){let t="";if(ve(e))t=e;else if(F(e))for(let o=0;o<e.length;o++){const n=Dn(e[o]);n&&(t+=n+" ")}else if(fe(e))for(const o in e)e[o]&&(t+=o+" ");return t.trim()}const Oi="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fi=Sn(Oi);function rr(e){return!!e||e===""}const ir=e=>!!(e&&e.__v_isRef===!0),at=e=>ve(e)?e:e==null?"":F(e)||fe(e)&&(e.toString===tr||!G(e.toString))?ir(e)?at(e.value):JSON.stringify(e,ar,2):String(e),ar=(e,t)=>ir(t)?ar(e,t.value):Bt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((o,[n,s],r)=>(o[Zo(n,r)+" =>"]=s,o),{})}:Xs(t)?{[`Set(${t.size})`]:[...t.values()].map(o=>Zo(o))}:At(t)?Zo(t):fe(t)&&!F(t)&&!or(t)?String(t):t,Zo=(e,t="")=>{var o;return At(e)?`Symbol(${(o=e.description)!=null?o:t})`:e};/**
* @vue/reactivity v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ke;class lr{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ke,!t&&Ke&&(this.index=(Ke.scopes||(Ke.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const o=Ke;try{return Ke=this,t()}finally{Ke=o}}}on(){Ke=this}off(){Ke=this.parent}stop(t){if(this._active){let o,n;for(o=0,n=this.effects.length;o<n;o++)this.effects[o].stop();for(o=0,n=this.cleanups.length;o<n;o++)this.cleanups[o]();if(this.scopes)for(o=0,n=this.scopes.length;o<n;o++)this.scopes[o].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Bi(e){return new lr(e)}function ji(e,t=Ke){t&&t.active&&t.effects.push(e)}function Vi(){return Ke}let kt;class Ln{constructor(t,o,n,s){this.fn=t,this.trigger=o,this.scheduler=n,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,ji(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,It();for(let t=0;t<this._depsLength;t++){const o=this.deps[t];if(o.computed&&(Gi(o.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Ct()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=vt,o=kt;try{return vt=!0,kt=this,this._runnings++,Yn(this),this.fn()}finally{Xn(this),this._runnings--,kt=o,vt=t}}stop(){this.active&&(Yn(this),Xn(this),this.onStop&&this.onStop(),this.active=!1)}}function Gi(e){return e.value}function Yn(e){e._trackId++,e._depsLength=0}function Xn(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)cr(e.deps[t],e);e.deps.length=e._depsLength}}function cr(e,t){const o=e.get(t);o!==void 0&&t._trackId!==o&&(e.delete(t),e.size===0&&e.cleanup())}let vt=!0,un=0;const ur=[];function It(){ur.push(vt),vt=!1}function Ct(){const e=ur.pop();vt=e===void 0?!0:e}function kn(){un++}function Nn(){for(un--;!un&&dn.length;)dn.shift()()}function dr(e,t,o){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const n=e.deps[e._depsLength];n!==t?(n&&cr(n,e),e.deps[e._depsLength++]=t):e._depsLength++}}const dn=[];function pr(e,t,o){kn();for(const n of e.keys()){let s;n._dirtyLevel<t&&(s??(s=e.get(n)===n._trackId))&&(n._shouldSchedule||(n._shouldSchedule=n._dirtyLevel===0),n._dirtyLevel=t),n._shouldSchedule&&(s??(s=e.get(n)===n._trackId))&&(n.trigger(),(!n._runnings||n.allowRecurse)&&n._dirtyLevel!==2&&(n._shouldSchedule=!1,n.scheduler&&dn.push(n.scheduler)))}Nn()}const fr=(e,t)=>{const o=new Map;return o.cleanup=e,o.computed=t,o},pn=new WeakMap,Nt=Symbol(""),fn=Symbol("");function Ne(e,t,o){if(vt&&kt){let n=pn.get(e);n||pn.set(e,n=new Map);let s=n.get(o);s||n.set(o,s=fr(()=>n.delete(o))),dr(kt,s)}}function rt(e,t,o,n,s,r){const i=pn.get(e);if(!i)return;let c=[];if(t==="clear")c=[...i.values()];else if(o==="length"&&F(e)){const a=Number(n);i.forEach((d,p)=>{(p==="length"||!At(p)&&p>=a)&&c.push(d)})}else switch(o!==void 0&&c.push(i.get(o)),t){case"add":F(e)?Pn(o)&&c.push(i.get("length")):(c.push(i.get(Nt)),Bt(e)&&c.push(i.get(fn)));break;case"delete":F(e)||(c.push(i.get(Nt)),Bt(e)&&c.push(i.get(fn)));break;case"set":Bt(e)&&c.push(i.get(Nt));break}kn();for(const a of c)a&&pr(a,4);Nn()}const Ki=Sn("__proto__,__v_isRef,__isVue"),hr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(At)),es=$i();function $i(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...o){const n=oe(this);for(let r=0,i=this.length;r<i;r++)Ne(n,"get",r+"");const s=n[t](...o);return s===-1||s===!1?n[t](...o.map(oe)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...o){It(),kn();const n=oe(this)[t].apply(this,o);return Nn(),Ct(),n}}),e}function zi(e){At(e)||(e=String(e));const t=oe(this);return Ne(t,"has",e),t.hasOwnProperty(e)}class mr{constructor(t=!1,o=!1){this._isReadonly=t,this._isShallow=o}get(t,o,n){const s=this._isReadonly,r=this._isShallow;if(o==="__v_isReactive")return!s;if(o==="__v_isReadonly")return s;if(o==="__v_isShallow")return r;if(o==="__v_raw")return n===(s?r?ia:yr:r?vr:br).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const i=F(t);if(!s){if(i&&X(es,o))return Reflect.get(es,o,n);if(o==="hasOwnProperty")return zi}const c=Reflect.get(t,o,n);return(At(o)?hr.has(o):Ki(o))||(s||Ne(t,"get",o),r)?c:ge(c)?i&&Pn(o)?c:c.value:fe(c)?s?wr(c):Ho(c):c}}class gr extends mr{constructor(t=!1){super(!1,t)}set(t,o,n,s){let r=t[o];if(!this._isShallow){const a=Rt(r);if(!Gt(n)&&!Rt(n)&&(r=oe(r),n=oe(n)),!F(t)&&ge(r)&&!ge(n))return a?!1:(r.value=n,!0)}const i=F(t)&&Pn(o)?Number(o)<t.length:X(t,o),c=Reflect.set(t,o,n,s);return t===oe(s)&&(i?_t(n,r)&&rt(t,"set",o,n):rt(t,"add",o,n)),c}deleteProperty(t,o){const n=X(t,o);t[o];const s=Reflect.deleteProperty(t,o);return s&&n&&rt(t,"delete",o,void 0),s}has(t,o){const n=Reflect.has(t,o);return(!At(o)||!hr.has(o))&&Ne(t,"has",o),n}ownKeys(t){return Ne(t,"iterate",F(t)?"length":Nt),Reflect.ownKeys(t)}}class Ji extends mr{constructor(t=!1){super(!0,t)}set(t,o){return!0}deleteProperty(t,o){return!0}}const qi=new gr,Qi=new Ji,Zi=new gr(!0);const Rn=e=>e,Mo=e=>Reflect.getPrototypeOf(e);function ho(e,t,o=!1,n=!1){e=e.__v_raw;const s=oe(e),r=oe(t);o||(_t(t,r)&&Ne(s,"get",t),Ne(s,"get",r));const{has:i}=Mo(s),c=n?Rn:o?Mn:so;if(i.call(s,t))return c(e.get(t));if(i.call(s,r))return c(e.get(r));e!==s&&e.get(t)}function mo(e,t=!1){const o=this.__v_raw,n=oe(o),s=oe(e);return t||(_t(e,s)&&Ne(n,"has",e),Ne(n,"has",s)),e===s?o.has(e):o.has(e)||o.has(s)}function go(e,t=!1){return e=e.__v_raw,!t&&Ne(oe(e),"iterate",Nt),Reflect.get(e,"size",e)}function ts(e,t=!1){!t&&!Gt(e)&&!Rt(e)&&(e=oe(e));const o=oe(this);return Mo(o).has.call(o,e)||(o.add(e),rt(o,"add",e,e)),this}function os(e,t,o=!1){!o&&!Gt(t)&&!Rt(t)&&(t=oe(t));const n=oe(this),{has:s,get:r}=Mo(n);let i=s.call(n,e);i||(e=oe(e),i=s.call(n,e));const c=r.call(n,e);return n.set(e,t),i?_t(t,c)&&rt(n,"set",e,t):rt(n,"add",e,t),this}function ns(e){const t=oe(this),{has:o,get:n}=Mo(t);let s=o.call(t,e);s||(e=oe(e),s=o.call(t,e)),n&&n.call(t,e);const r=t.delete(e);return s&&rt(t,"delete",e,void 0),r}function ss(){const e=oe(this),t=e.size!==0,o=e.clear();return t&&rt(e,"clear",void 0,void 0),o}function bo(e,t){return function(n,s){const r=this,i=r.__v_raw,c=oe(i),a=t?Rn:e?Mn:so;return!e&&Ne(c,"iterate",Nt),i.forEach((d,p)=>n.call(s,a(d),a(p),r))}}function vo(e,t,o){return function(...n){const s=this.__v_raw,r=oe(s),i=Bt(r),c=e==="entries"||e===Symbol.iterator&&i,a=e==="keys"&&i,d=s[e](...n),p=o?Rn:t?Mn:so;return!t&&Ne(r,"iterate",a?fn:Nt),{next(){const{value:f,done:h}=d.next();return h?{value:f,done:h}:{value:c?[p(f[0]),p(f[1])]:p(f),done:h}},[Symbol.iterator](){return this}}}}function ut(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Yi(){const e={get(r){return ho(this,r)},get size(){return go(this)},has:mo,add:ts,set:os,delete:ns,clear:ss,forEach:bo(!1,!1)},t={get(r){return ho(this,r,!1,!0)},get size(){return go(this)},has:mo,add(r){return ts.call(this,r,!0)},set(r,i){return os.call(this,r,i,!0)},delete:ns,clear:ss,forEach:bo(!1,!0)},o={get(r){return ho(this,r,!0)},get size(){return go(this,!0)},has(r){return mo.call(this,r,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:bo(!0,!1)},n={get(r){return ho(this,r,!0,!0)},get size(){return go(this,!0)},has(r){return mo.call(this,r,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:bo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=vo(r,!1,!1),o[r]=vo(r,!0,!1),t[r]=vo(r,!1,!0),n[r]=vo(r,!0,!0)}),[e,o,t,n]}const[Xi,ea,ta,oa]=Yi();function Un(e,t){const o=t?e?oa:ta:e?ea:Xi;return(n,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?n:Reflect.get(X(o,s)&&s in n?o:n,s,r)}const na={get:Un(!1,!1)},sa={get:Un(!1,!0)},ra={get:Un(!0,!1)};const br=new WeakMap,vr=new WeakMap,yr=new WeakMap,ia=new WeakMap;function aa(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function la(e){return e.__v_skip||!Object.isExtensible(e)?0:aa(Di(e))}function Ho(e){return Rt(e)?e:Wn(e,!1,qi,na,br)}function _r(e){return Wn(e,!1,Zi,sa,vr)}function wr(e){return Wn(e,!0,Qi,ra,yr)}function Wn(e,t,o,n,s){if(!fe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=s.get(e);if(r)return r;const i=la(e);if(i===0)return e;const c=new Proxy(e,i===2?n:o);return s.set(e,c),c}function Yt(e){return Rt(e)?Yt(e.__v_raw):!!(e&&e.__v_isReactive)}function Rt(e){return!!(e&&e.__v_isReadonly)}function Gt(e){return!!(e&&e.__v_isShallow)}function Ar(e){return e?!!e.__v_raw:!1}function oe(e){const t=e&&e.__v_raw;return t?oe(t):e}function Ir(e){return Object.isExtensible(e)&&nr(e,"__v_skip",!0),e}const so=e=>fe(e)?Ho(e):e,Mn=e=>fe(e)?wr(e):e;class Cr{constructor(t,o,n,s){this.getter=t,this._setter=o,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Ln(()=>t(this._value),()=>wo(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=n}get value(){const t=oe(this);return(!t._cacheable||t.effect.dirty)&&_t(t._value,t._value=t.effect.run())&&wo(t,4),Sr(t),t.effect._dirtyLevel>=2&&wo(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function ca(e,t,o=!1){let n,s;const r=G(e);return r?(n=e,s=Oe):(n=e.get,s=e.set),new Cr(n,s,r||!s,o)}function Sr(e){var t;vt&&kt&&(e=oe(e),dr(kt,(t=e.dep)!=null?t:e.dep=fr(()=>e.dep=void 0,e instanceof Cr?e:void 0)))}function wo(e,t=4,o,n){e=oe(e);const s=e.dep;s&&pr(s,t)}function ge(e){return!!(e&&e.__v_isRef===!0)}function Ee(e){return Tr(e,!1)}function ua(e){return Tr(e,!0)}function Tr(e,t){return ge(e)?e:new da(e,t)}class da{constructor(t,o){this.__v_isShallow=o,this.dep=void 0,this.__v_isRef=!0,this._rawValue=o?t:oe(t),this._value=o?t:so(t)}get value(){return Sr(this),this._value}set value(t){const o=this.__v_isShallow||Gt(t)||Rt(t);t=o?t:oe(t),_t(t,this._rawValue)&&(this._rawValue,this._rawValue=t,this._value=o?t:so(t),wo(this,4))}}function Y(e){return ge(e)?e.value:e}const pa={get:(e,t,o)=>Y(Reflect.get(e,t,o)),set:(e,t,o,n)=>{const s=e[t];return ge(s)&&!ge(o)?(s.value=o,!0):Reflect.set(e,t,o,n)}};function xr(e){return Yt(e)?e:new Proxy(e,pa)}/**
* @vue/runtime-core v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function yt(e,t,o,n){try{return n?e(...n):e()}catch(s){Oo(s,t,o)}}function Fe(e,t,o,n){if(G(e)){const s=yt(e,t,o,n);return s&&er(s)&&s.catch(r=>{Oo(r,t,o)}),s}if(F(e)){const s=[];for(let r=0;r<e.length;r++)s.push(Fe(e[r],t,o,n));return s}}function Oo(e,t,o,n=!0){const s=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${o}`;for(;r;){const d=r.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](e,i,c)===!1)return}r=r.parent}const a=t.appContext.config.errorHandler;if(a){It(),yt(a,null,10,[e,i,c]),Ct();return}}fa(e,o,s,n)}function fa(e,t,o,n=!0){console.error(e)}let ro=!1,hn=!1;const Te=[];let et=0;const jt=[];let ht=null,Et=0;const Pr=Promise.resolve();let Hn=null;function Er(e){const t=Hn||Pr;return e?t.then(this?e.bind(this):e):t}function ha(e){let t=et+1,o=Te.length;for(;t<o;){const n=t+o>>>1,s=Te[n],r=io(s);r<e||r===e&&s.pre?t=n+1:o=n}return t}function On(e){(!Te.length||!Te.includes(e,ro&&e.allowRecurse?et+1:et))&&(e.id==null?Te.push(e):Te.splice(ha(e.id),0,e),Dr())}function Dr(){!ro&&!hn&&(hn=!0,Hn=Pr.then(kr))}function ma(e){const t=Te.indexOf(e);t>et&&Te.splice(t,1)}function ga(e){F(e)?jt.push(...e):(!ht||!ht.includes(e,e.allowRecurse?Et+1:Et))&&jt.push(e),Dr()}function rs(e,t,o=ro?et+1:0){for(;o<Te.length;o++){const n=Te[o];if(n&&n.pre){if(e&&n.id!==e.uid)continue;Te.splice(o,1),o--,n()}}}function Lr(e){if(jt.length){const t=[...new Set(jt)].sort((o,n)=>io(o)-io(n));if(jt.length=0,ht){ht.push(...t);return}for(ht=t,Et=0;Et<ht.length;Et++){const o=ht[Et];o.active!==!1&&o()}ht=null,Et=0}}const io=e=>e.id==null?1/0:e.id,ba=(e,t)=>{const o=io(e)-io(t);if(o===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return o};function kr(e){hn=!1,ro=!0,Te.sort(ba);try{for(et=0;et<Te.length;et++){const t=Te[et];t&&t.active!==!1&&yt(t,t.i,t.i?15:14)}}finally{et=0,Te.length=0,Lr(),ro=!1,Hn=null,(Te.length||jt.length)&&kr()}}let xe=null,Fo=null;function xo(e){const t=xe;return xe=e,Fo=e&&e.type.__scopeId||null,t}function Be(e){Fo=e}function je(){Fo=null}function ee(e,t=xe,o){if(!t||e._n)return e;const n=(...s)=>{n._d&&ms(-1);const r=xo(t);let i;try{i=e(...s)}finally{xo(r),n._d&&ms(1)}return i};return n._n=!0,n._c=!0,n._d=!0,n}function St(e,t,o,n){const s=e.dirs,r=t&&t.dirs;for(let i=0;i<s.length;i++){const c=s[i];r&&(c.oldValue=r[i].value);let a=c.dir[n];a&&(It(),Fe(a,o,8,[e.el,c,e,t]),Ct())}}const mt=Symbol("_leaveCb"),yo=Symbol("_enterCb");function va(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Or(()=>{e.isMounted=!0}),Fr(()=>{e.isUnmounting=!0}),e}const Me=[Function,Array],Nr={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Me,onEnter:Me,onAfterEnter:Me,onEnterCancelled:Me,onBeforeLeave:Me,onLeave:Me,onAfterLeave:Me,onLeaveCancelled:Me,onBeforeAppear:Me,onAppear:Me,onAfterAppear:Me,onAppearCancelled:Me},Rr=e=>{const t=e.subTree;return t.component?Rr(t.component):t},ya={name:"BaseTransition",props:Nr,setup(e,{slots:t}){const o=gl(),n=va();return()=>{const s=t.default&&Wr(t.default(),!0);if(!s||!s.length)return;let r=s[0];if(s.length>1){for(const h of s)if(h.type!==ke){r=h;break}}const i=oe(e),{mode:c}=i;if(n.isLeaving)return Yo(r);const a=is(r);if(!a)return Yo(r);let d=mn(a,i,n,o,h=>d=h);Po(a,d);const p=o.subTree,f=p&&is(p);if(f&&f.type!==ke&&!Lt(a,f)&&Rr(o).type!==ke){const h=mn(f,i,n,o);if(Po(f,h),c==="out-in"&&a.type!==ke)return n.isLeaving=!0,h.afterLeave=()=>{n.isLeaving=!1,o.update.active!==!1&&(o.effect.dirty=!0,o.update())},Yo(r);c==="in-out"&&a.type!==ke&&(h.delayLeave=(g,E,P)=>{const B=Ur(n,f);B[String(f.key)]=f,g[mt]=()=>{E(),g[mt]=void 0,delete d.delayedLeave},d.delayedLeave=P})}return r}}},_a=ya;function Ur(e,t){const{leavingVNodes:o}=e;let n=o.get(t.type);return n||(n=Object.create(null),o.set(t.type,n)),n}function mn(e,t,o,n,s){const{appear:r,mode:i,persisted:c=!1,onBeforeEnter:a,onEnter:d,onAfterEnter:p,onEnterCancelled:f,onBeforeLeave:h,onLeave:g,onAfterLeave:E,onLeaveCancelled:P,onBeforeAppear:B,onAppear:H,onAfterAppear:U,onAppearCancelled:k}=t,Z=String(e.key),ce=Ur(o,e),O=(K,te)=>{K&&Fe(K,n,9,te)},ue=(K,te)=>{const de=te[1];O(K,te),F(K)?K.every(N=>N.length<=1)&&de():K.length<=1&&de()},ye={mode:i,persisted:c,beforeEnter(K){let te=a;if(!o.isMounted)if(r)te=B||a;else return;K[mt]&&K[mt](!0);const de=ce[Z];de&&Lt(e,de)&&de.el[mt]&&de.el[mt](),O(te,[K])},enter(K){let te=d,de=p,N=f;if(!o.isMounted)if(r)te=H||d,de=U||p,N=k||f;else return;let ne=!1;const _e=K[yo]=Ve=>{ne||(ne=!0,Ve?O(N,[K]):O(de,[K]),ye.delayedLeave&&ye.delayedLeave(),K[yo]=void 0)};te?ue(te,[K,_e]):_e()},leave(K,te){const de=String(e.key);if(K[yo]&&K[yo](!0),o.isUnmounting)return te();O(h,[K]);let N=!1;const ne=K[mt]=_e=>{N||(N=!0,te(),_e?O(P,[K]):O(E,[K]),K[mt]=void 0,ce[de]===e&&delete ce[de])};ce[de]=e,g?ue(g,[K,ne]):ne()},clone(K){const te=mn(K,t,o,n,s);return s&&s(te),te}};return ye}function Yo(e){if(Bo(e))return e=wt(e),e.children=null,e}function is(e){if(!Bo(e))return e;const{shapeFlag:t,children:o}=e;if(o){if(t&16)return o[0];if(t&32&&G(o.default))return o.default()}}function Po(e,t){e.shapeFlag&6&&e.component?Po(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Wr(e,t=!1,o){let n=[],s=0;for(let r=0;r<e.length;r++){let i=e[r];const c=o==null?i.key:String(o)+String(i.key!=null?i.key:r);i.type===J?(i.patchFlag&128&&s++,n=n.concat(Wr(i.children,t,c))):(t||i.type!==ke)&&n.push(c!=null?wt(i,{key:c}):i)}if(s>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}/*! #__NO_SIDE_EFFECTS__ */function Mr(e,t){return G(e)?Ae({name:e.name},t,{setup:e}):e}const Xt=e=>!!e.type.__asyncLoader,Bo=e=>e.type.__isKeepAlive;function wa(e,t){Hr(e,"a",t)}function Aa(e,t){Hr(e,"da",t)}function Hr(e,t,o=Ce){const n=e.__wdc||(e.__wdc=()=>{let s=o;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(jo(t,n,o),o){let s=o.parent;for(;s&&s.parent;)Bo(s.parent.vnode)&&Ia(n,t,o,s),s=s.parent}}function Ia(e,t,o,n){const s=jo(t,e,n,!0);Br(()=>{xn(n[t],s)},o)}function jo(e,t,o=Ce,n=!1){if(o){const s=o[e]||(o[e]=[]),r=t.__weh||(t.__weh=(...i)=>{It();const c=po(o),a=Fe(t,o,e,i);return c(),Ct(),a});return n?s.unshift(r):s.push(r),r}}const lt=e=>(t,o=Ce)=>{(!zo||e==="sp")&&jo(e,(...n)=>t(...n),o)},Ca=lt("bm"),Or=lt("m"),Sa=lt("bu"),Ta=lt("u"),Fr=lt("bum"),Br=lt("um"),xa=lt("sp"),Pa=lt("rtg"),Ea=lt("rtc");function Da(e,t=Ce){jo("ec",e,t)}const jr="components";function Eo(e,t){return Gr(jr,e,!0,t)||e}const Vr=Symbol.for("v-ndc");function La(e){return ve(e)?Gr(jr,e,!1)||e:e||Vr}function Gr(e,t,o=!0,n=!1){const s=xe||Ce;if(s){const r=s.type;{const c=wl(r,!1);if(c&&(c===t||c===Je(t)||c===Wo(Je(t))))return r}const i=as(s[e]||r[e],t)||as(s.appContext[e],t);return!i&&n?r:i}}function as(e,t){return e&&(e[t]||e[Je(t)]||e[Wo(Je(t))])}function Xo(e,t,o={},n,s){if(xe.isCE||xe.parent&&Xt(xe.parent)&&xe.parent.isCE)return t!=="default"&&(o.name=t),S("slot",o,n&&n());let r=e[t];r&&r._c&&(r._d=!1),V();const i=r&&Kr(r(o)),c=Ko(J,{key:(o.key||i&&i.key||`_${t}`)+(!i&&n?"_fb":"")},i||(n?n():[]),i&&e._===1?64:-2);return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),r&&r._c&&(r._d=!0),c}function Kr(e){return e.some(t=>Lo(t)?!(t.type===ke||t.type===J&&!Kr(t.children)):!0)?e:null}const gn=e=>e?ui(e)?Vn(e):gn(e.parent):null,eo=Ae(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>gn(e.parent),$root:e=>gn(e.root),$emit:e=>e.emit,$options:e=>Fn(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,On(e.update)}),$nextTick:e=>e.n||(e.n=Er.bind(e.proxy)),$watch:e=>el.bind(e)}),en=(e,t)=>e!==me&&!e.__isScriptSetup&&X(e,t),ka={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:o,setupState:n,data:s,props:r,accessCache:i,type:c,appContext:a}=e;let d;if(t[0]!=="$"){const g=i[t];if(g!==void 0)switch(g){case 1:return n[t];case 2:return s[t];case 4:return o[t];case 3:return r[t]}else{if(en(n,t))return i[t]=1,n[t];if(s!==me&&X(s,t))return i[t]=2,s[t];if((d=e.propsOptions[0])&&X(d,t))return i[t]=3,r[t];if(o!==me&&X(o,t))return i[t]=4,o[t];bn&&(i[t]=0)}}const p=eo[t];let f,h;if(p)return t==="$attrs"&&Ne(e.attrs,"get",""),p(e);if((f=c.__cssModules)&&(f=f[t]))return f;if(o!==me&&X(o,t))return i[t]=4,o[t];if(h=a.config.globalProperties,X(h,t))return h[t]},set({_:e},t,o){const{data:n,setupState:s,ctx:r}=e;return en(s,t)?(s[t]=o,!0):n!==me&&X(n,t)?(n[t]=o,!0):X(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=o,!0)},has({_:{data:e,setupState:t,accessCache:o,ctx:n,appContext:s,propsOptions:r}},i){let c;return!!o[i]||e!==me&&X(e,i)||en(t,i)||(c=r[0])&&X(c,i)||X(n,i)||X(eo,i)||X(s.config.globalProperties,i)},defineProperty(e,t,o){return o.get!=null?e._.accessCache[t]=0:X(o,"value")&&this.set(e,t,o.value,null),Reflect.defineProperty(e,t,o)}};function ls(e){return F(e)?e.reduce((t,o)=>(t[o]=null,t),{}):e}let bn=!0;function Na(e){const t=Fn(e),o=e.proxy,n=e.ctx;bn=!1,t.beforeCreate&&cs(t.beforeCreate,e,"bc");const{data:s,computed:r,methods:i,watch:c,provide:a,inject:d,created:p,beforeMount:f,mounted:h,beforeUpdate:g,updated:E,activated:P,deactivated:B,beforeDestroy:H,beforeUnmount:U,destroyed:k,unmounted:Z,render:ce,renderTracked:O,renderTriggered:ue,errorCaptured:ye,serverPrefetch:K,expose:te,inheritAttrs:de,components:N,directives:ne,filters:_e}=t;if(d&&Ra(d,n,null),i)for(const le in i){const se=i[le];G(se)&&(n[le]=se.bind(o))}if(s){const le=s.call(o,o);fe(le)&&(e.data=Ho(le))}if(bn=!0,r)for(const le in r){const se=r[le],tt=G(se)?se.bind(o,o):G(se.get)?se.get.bind(o,o):Oe,ct=!G(se)&&G(se.set)?se.set.bind(o):Oe,Qe=$e({get:tt,set:ct});Object.defineProperty(n,le,{enumerable:!0,configurable:!0,get:()=>Qe.value,set:De=>Qe.value=De})}if(c)for(const le in c)$r(c[le],n,o,le);if(a){const le=G(a)?a.call(o):a;Reflect.ownKeys(le).forEach(se=>{Ao(se,le[se])})}p&&cs(p,e,"c");function be(le,se){F(se)?se.forEach(tt=>le(tt.bind(o))):se&&le(se.bind(o))}if(be(Ca,f),be(Or,h),be(Sa,g),be(Ta,E),be(wa,P),be(Aa,B),be(Da,ye),be(Ea,O),be(Pa,ue),be(Fr,U),be(Br,Z),be(xa,K),F(te))if(te.length){const le=e.exposed||(e.exposed={});te.forEach(se=>{Object.defineProperty(le,se,{get:()=>o[se],set:tt=>o[se]=tt})})}else e.exposed||(e.exposed={});ce&&e.render===Oe&&(e.render=ce),de!=null&&(e.inheritAttrs=de),N&&(e.components=N),ne&&(e.directives=ne)}function Ra(e,t,o=Oe){F(e)&&(e=vn(e));for(const n in e){const s=e[n];let r;fe(s)?"default"in s?r=it(s.from||n,s.default,!0):r=it(s.from||n):r=it(s),ge(r)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:i=>r.value=i}):t[n]=r}}function cs(e,t,o){Fe(F(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,o)}function $r(e,t,o,n){const s=n.includes(".")?ii(o,n):()=>o[n];if(ve(e)){const r=t[e];G(r)&&Io(s,r)}else if(G(e))Io(s,e.bind(o));else if(fe(e))if(F(e))e.forEach(r=>$r(r,t,o,n));else{const r=G(e.handler)?e.handler.bind(o):t[e.handler];G(r)&&Io(s,r,e)}}function Fn(e){const t=e.type,{mixins:o,extends:n}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:i}}=e.appContext,c=r.get(t);let a;return c?a=c:!s.length&&!o&&!n?a=t:(a={},s.length&&s.forEach(d=>Do(a,d,i,!0)),Do(a,t,i)),fe(t)&&r.set(t,a),a}function Do(e,t,o,n=!1){const{mixins:s,extends:r}=t;r&&Do(e,r,o,!0),s&&s.forEach(i=>Do(e,i,o,!0));for(const i in t)if(!(n&&i==="expose")){const c=Ua[i]||o&&o[i];e[i]=c?c(e[i],t[i]):t[i]}return e}const Ua={data:us,props:ds,emits:ds,methods:Qt,computed:Qt,beforeCreate:Pe,created:Pe,beforeMount:Pe,mounted:Pe,beforeUpdate:Pe,updated:Pe,beforeDestroy:Pe,beforeUnmount:Pe,destroyed:Pe,unmounted:Pe,activated:Pe,deactivated:Pe,errorCaptured:Pe,serverPrefetch:Pe,components:Qt,directives:Qt,watch:Ma,provide:us,inject:Wa};function us(e,t){return t?e?function(){return Ae(G(e)?e.call(this,this):e,G(t)?t.call(this,this):t)}:t:e}function Wa(e,t){return Qt(vn(e),vn(t))}function vn(e){if(F(e)){const t={};for(let o=0;o<e.length;o++)t[e[o]]=e[o];return t}return e}function Pe(e,t){return e?[...new Set([].concat(e,t))]:t}function Qt(e,t){return e?Ae(Object.create(null),e,t):t}function ds(e,t){return e?F(e)&&F(t)?[...new Set([...e,...t])]:Ae(Object.create(null),ls(e),ls(t??{})):t}function Ma(e,t){if(!e)return t;if(!t)return e;const o=Ae(Object.create(null),e);for(const n in t)o[n]=Pe(e[n],t[n]);return o}function zr(){return{app:null,config:{isNativeTag:Pi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ha=0;function Oa(e,t){return function(n,s=null){G(n)||(n=Ae({},n)),s!=null&&!fe(s)&&(s=null);const r=zr(),i=new WeakSet;let c=!1;const a=r.app={_uid:Ha++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:Il,get config(){return r.config},set config(d){},use(d,...p){return i.has(d)||(d&&G(d.install)?(i.add(d),d.install(a,...p)):G(d)&&(i.add(d),d(a,...p))),a},mixin(d){return r.mixins.includes(d)||r.mixins.push(d),a},component(d,p){return p?(r.components[d]=p,a):r.components[d]},directive(d,p){return p?(r.directives[d]=p,a):r.directives[d]},mount(d,p,f){if(!c){const h=S(n,s);return h.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),p&&t?t(h,d):e(h,d,f),c=!0,a._container=d,d.__vue_app__=a,Vn(h.component)}},unmount(){c&&(e(null,a._container),delete a._container.__vue_app__)},provide(d,p){return r.provides[d]=p,a},runWithContext(d){const p=Vt;Vt=a;try{return d()}finally{Vt=p}}};return a}}let Vt=null;function Ao(e,t){if(Ce){let o=Ce.provides;const n=Ce.parent&&Ce.parent.provides;n===o&&(o=Ce.provides=Object.create(n)),o[e]=t}}function it(e,t,o=!1){const n=Ce||xe;if(n||Vt){const s=Vt?Vt._context.provides:n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return o&&G(t)?t.call(n&&n.proxy):t}}const Jr={},qr=()=>Object.create(Jr),Qr=e=>Object.getPrototypeOf(e)===Jr;function Fa(e,t,o,n=!1){const s={},r=qr();e.propsDefaults=Object.create(null),Zr(e,t,s,r);for(const i in e.propsOptions[0])i in s||(s[i]=void 0);o?e.props=n?s:_r(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function Ba(e,t,o,n){const{props:s,attrs:r,vnode:{patchFlag:i}}=e,c=oe(s),[a]=e.propsOptions;let d=!1;if((n||i>0)&&!(i&16)){if(i&8){const p=e.vnode.dynamicProps;for(let f=0;f<p.length;f++){let h=p[f];if(Vo(e.emitsOptions,h))continue;const g=t[h];if(a)if(X(r,h))g!==r[h]&&(r[h]=g,d=!0);else{const E=Je(h);s[E]=yn(a,c,E,g,e,!1)}else g!==r[h]&&(r[h]=g,d=!0)}}}else{Zr(e,t,s,r)&&(d=!0);let p;for(const f in c)(!t||!X(t,f)&&((p=Ut(f))===f||!X(t,p)))&&(a?o&&(o[f]!==void 0||o[p]!==void 0)&&(s[f]=yn(a,c,f,void 0,e,!0)):delete s[f]);if(r!==c)for(const f in r)(!t||!X(t,f))&&(delete r[f],d=!0)}d&&rt(e.attrs,"set","")}function Zr(e,t,o,n){const[s,r]=e.propsOptions;let i=!1,c;if(t)for(let a in t){if(Zt(a))continue;const d=t[a];let p;s&&X(s,p=Je(a))?!r||!r.includes(p)?o[p]=d:(c||(c={}))[p]=d:Vo(e.emitsOptions,a)||(!(a in n)||d!==n[a])&&(n[a]=d,i=!0)}if(r){const a=oe(o),d=c||me;for(let p=0;p<r.length;p++){const f=r[p];o[f]=yn(s,a,f,d[f],e,!X(d,f))}}return i}function yn(e,t,o,n,s,r){const i=e[o];if(i!=null){const c=X(i,"default");if(c&&n===void 0){const a=i.default;if(i.type!==Function&&!i.skipFactory&&G(a)){const{propsDefaults:d}=s;if(o in d)n=d[o];else{const p=po(s);n=d[o]=a.call(null,t),p()}}else n=a}i[0]&&(r&&!c?n=!1:i[1]&&(n===""||n===Ut(o))&&(n=!0))}return n}const ja=new WeakMap;function Yr(e,t,o=!1){const n=o?ja:t.propsCache,s=n.get(e);if(s)return s;const r=e.props,i={},c=[];let a=!1;if(!G(e)){const p=f=>{a=!0;const[h,g]=Yr(f,t,!0);Ae(i,h),g&&c.push(...g)};!o&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!r&&!a)return fe(e)&&n.set(e,Ft),Ft;if(F(r))for(let p=0;p<r.length;p++){const f=Je(r[p]);ps(f)&&(i[f]=me)}else if(r)for(const p in r){const f=Je(p);if(ps(f)){const h=r[p],g=i[f]=F(h)||G(h)?{type:h}:Ae({},h),E=g.type;let P=!1,B=!0;if(F(E))for(let H=0;H<E.length;++H){const U=E[H],k=G(U)&&U.name;if(k==="Boolean"){P=!0;break}else k==="String"&&(B=!1)}else P=G(E)&&E.name==="Boolean";g[0]=P,g[1]=B,(P||X(g,"default"))&&c.push(f)}}const d=[i,c];return fe(e)&&n.set(e,d),d}function ps(e){return e[0]!=="$"&&!Zt(e)}const Xr=e=>e[0]==="_"||e==="$stable",Bn=e=>F(e)?e.map(Xe):[Xe(e)],Va=(e,t,o)=>{if(t._n)return t;const n=ee((...s)=>Bn(t(...s)),o);return n._c=!1,n},ei=(e,t,o)=>{const n=e._ctx;for(const s in e){if(Xr(s))continue;const r=e[s];if(G(r))t[s]=Va(s,r,n);else if(r!=null){const i=Bn(r);t[s]=()=>i}}},ti=(e,t)=>{const o=Bn(t);e.slots.default=()=>o},oi=(e,t,o)=>{for(const n in t)(o||n!=="_")&&(e[n]=t[n])},Ga=(e,t,o)=>{const n=e.slots=qr();if(e.vnode.shapeFlag&32){const s=t._;s?(oi(n,t,o),o&&nr(n,"_",s,!0)):ei(t,n)}else t&&ti(e,t)},Ka=(e,t,o)=>{const{vnode:n,slots:s}=e;let r=!0,i=me;if(n.shapeFlag&32){const c=t._;c?o&&c===1?r=!1:oi(s,t,o):(r=!t.$stable,ei(t,s)),i=t}else t&&(ti(e,t),i={default:1});if(r)for(const c in s)!Xr(c)&&i[c]==null&&delete s[c]};function _n(e,t,o,n,s=!1){if(F(e)){e.forEach((h,g)=>_n(h,t&&(F(t)?t[g]:t),o,n,s));return}if(Xt(n)&&!s)return;const r=n.shapeFlag&4?Vn(n.component):n.el,i=s?null:r,{i:c,r:a}=e,d=t&&t.r,p=c.refs===me?c.refs={}:c.refs,f=c.setupState;if(d!=null&&d!==a&&(ve(d)?(p[d]=null,X(f,d)&&(f[d]=null)):ge(d)&&(d.value=null)),G(a))yt(a,c,12,[i,p]);else{const h=ve(a),g=ge(a);if(h||g){const E=()=>{if(e.f){const P=h?X(f,a)?f[a]:p[a]:a.value;s?F(P)&&xn(P,r):F(P)?P.includes(r)||P.push(r):h?(p[a]=[r],X(f,a)&&(f[a]=p[a])):(a.value=[r],e.k&&(p[e.k]=a.value))}else h?(p[a]=i,X(f,a)&&(f[a]=i)):g&&(a.value=i,e.k&&(p[e.k]=i))};i?(E.id=-1,Le(E,o)):E()}}}const $a=Symbol("_vte"),za=e=>e.__isTeleport,Le=ll;function Ja(e){return qa(e)}function qa(e,t){const o=sr();o.__VUE__=!0;const{insert:n,remove:s,patchProp:r,createElement:i,createText:c,createComment:a,setText:d,setElementText:p,parentNode:f,nextSibling:h,setScopeId:g=Oe,insertStaticContent:E}=e,P=(l,u,m,_=null,v=null,A=null,T=void 0,I=null,C=!!u.dynamicChildren)=>{if(l===u)return;l&&!Lt(l,u)&&(_=y(l),De(l,v,A,!0),l=null),u.patchFlag===-2&&(C=!1,u.dynamicChildren=null);const{type:w,ref:L,shapeFlag:M}=u;switch(w){case Go:B(l,u,m,_);break;case ke:H(l,u,m,_);break;case Co:l==null&&U(u,m,_,T);break;case J:N(l,u,m,_,v,A,T,I,C);break;default:M&1?ce(l,u,m,_,v,A,T,I,C):M&6?ne(l,u,m,_,v,A,T,I,C):(M&64||M&128)&&w.process(l,u,m,_,v,A,T,I,C,R)}L!=null&&v&&_n(L,l&&l.ref,A,u||l,!u)},B=(l,u,m,_)=>{if(l==null)n(u.el=c(u.children),m,_);else{const v=u.el=l.el;u.children!==l.children&&d(v,u.children)}},H=(l,u,m,_)=>{l==null?n(u.el=a(u.children||""),m,_):u.el=l.el},U=(l,u,m,_)=>{[l.el,l.anchor]=E(l.children,u,m,_,l.el,l.anchor)},k=({el:l,anchor:u},m,_)=>{let v;for(;l&&l!==u;)v=h(l),n(l,m,_),l=v;n(u,m,_)},Z=({el:l,anchor:u})=>{let m;for(;l&&l!==u;)m=h(l),s(l),l=m;s(u)},ce=(l,u,m,_,v,A,T,I,C)=>{u.type==="svg"?T="svg":u.type==="math"&&(T="mathml"),l==null?O(u,m,_,v,A,T,I,C):K(l,u,v,A,T,I,C)},O=(l,u,m,_,v,A,T,I)=>{let C,w;const{props:L,shapeFlag:M,transition:W,dirs:j}=l;if(C=l.el=i(l.type,A,L&&L.is,L),M&8?p(C,l.children):M&16&&ye(l.children,C,null,_,v,tn(l,A),T,I),j&&St(l,null,_,"created"),ue(C,l,l.scopeId,T,_),L){for(const pe in L)pe!=="value"&&!Zt(pe)&&r(C,pe,null,L[pe],A,_);"value"in L&&r(C,"value",null,L.value,A),(w=L.onVnodeBeforeMount)&&Ye(w,_,l)}j&&St(l,null,_,"beforeMount");const Q=Qa(v,W);Q&&W.beforeEnter(C),n(C,u,m),((w=L&&L.onVnodeMounted)||Q||j)&&Le(()=>{w&&Ye(w,_,l),Q&&W.enter(C),j&&St(l,null,_,"mounted")},v)},ue=(l,u,m,_,v)=>{if(m&&g(l,m),_)for(let A=0;A<_.length;A++)g(l,_[A]);if(v){let A=v.subTree;if(u===A){const T=v.vnode;ue(l,T,T.scopeId,T.slotScopeIds,v.parent)}}},ye=(l,u,m,_,v,A,T,I,C=0)=>{for(let w=C;w<l.length;w++){const L=l[w]=I?gt(l[w]):Xe(l[w]);P(null,L,u,m,_,v,A,T,I)}},K=(l,u,m,_,v,A,T)=>{const I=u.el=l.el;let{patchFlag:C,dynamicChildren:w,dirs:L}=u;C|=l.patchFlag&16;const M=l.props||me,W=u.props||me;let j;if(m&&Tt(m,!1),(j=W.onVnodeBeforeUpdate)&&Ye(j,m,u,l),L&&St(u,l,m,"beforeUpdate"),m&&Tt(m,!0),(M.innerHTML&&W.innerHTML==null||M.textContent&&W.textContent==null)&&p(I,""),w?te(l.dynamicChildren,w,I,m,_,tn(u,v),A):T||se(l,u,I,null,m,_,tn(u,v),A,!1),C>0){if(C&16)de(I,M,W,m,v);else if(C&2&&M.class!==W.class&&r(I,"class",null,W.class,v),C&4&&r(I,"style",M.style,W.style,v),C&8){const Q=u.dynamicProps;for(let pe=0;pe<Q.length;pe++){const re=Q[pe],we=M[re],Ge=W[re];(Ge!==we||re==="value")&&r(I,re,we,Ge,v,m)}}C&1&&l.children!==u.children&&p(I,u.children)}else!T&&w==null&&de(I,M,W,m,v);((j=W.onVnodeUpdated)||L)&&Le(()=>{j&&Ye(j,m,u,l),L&&St(u,l,m,"updated")},_)},te=(l,u,m,_,v,A,T)=>{for(let I=0;I<u.length;I++){const C=l[I],w=u[I],L=C.el&&(C.type===J||!Lt(C,w)||C.shapeFlag&70)?f(C.el):m;P(C,w,L,null,_,v,A,T,!0)}},de=(l,u,m,_,v)=>{if(u!==m){if(u!==me)for(const A in u)!Zt(A)&&!(A in m)&&r(l,A,u[A],null,v,_);for(const A in m){if(Zt(A))continue;const T=m[A],I=u[A];T!==I&&A!=="value"&&r(l,A,I,T,v,_)}"value"in m&&r(l,"value",u.value,m.value,v)}},N=(l,u,m,_,v,A,T,I,C)=>{const w=u.el=l?l.el:c(""),L=u.anchor=l?l.anchor:c("");let{patchFlag:M,dynamicChildren:W,slotScopeIds:j}=u;j&&(I=I?I.concat(j):j),l==null?(n(w,m,_),n(L,m,_),ye(u.children||[],m,L,v,A,T,I,C)):M>0&&M&64&&W&&l.dynamicChildren?(te(l.dynamicChildren,W,m,v,A,T,I),(u.key!=null||v&&u===v.subTree)&&ni(l,u,!0)):se(l,u,m,L,v,A,T,I,C)},ne=(l,u,m,_,v,A,T,I,C)=>{u.slotScopeIds=I,l==null?u.shapeFlag&512?v.ctx.activate(u,m,_,T,C):_e(u,m,_,v,A,T,C):Ve(l,u,C)},_e=(l,u,m,_,v,A,T)=>{const I=l.component=ml(l,_,v);if(Bo(l)&&(I.ctx.renderer=R),bl(I,!1,T),I.asyncDep){if(v&&v.registerDep(I,be,T),!l.el){const C=I.subTree=S(ke);H(null,C,u,m)}}else be(I,l,u,m,v,A,T)},Ve=(l,u,m)=>{const _=u.component=l.component;if(rl(l,u,m))if(_.asyncDep&&!_.asyncResolved){le(_,u,m);return}else _.next=u,ma(_.update),_.effect.dirty=!0,_.update();else u.el=l.el,_.vnode=u},be=(l,u,m,_,v,A,T)=>{const I=()=>{if(l.isMounted){let{next:L,bu:M,u:W,parent:j,vnode:Q}=l;{const Ht=si(l);if(Ht){L&&(L.el=Q.el,le(l,L,T)),Ht.asyncDep.then(()=>{l.isUnmounted||I()});return}}let pe=L,re;Tt(l,!1),L?(L.el=Q.el,le(l,L,T)):L=Q,M&&Qo(M),(re=L.props&&L.props.onVnodeBeforeUpdate)&&Ye(re,j,L,Q),Tt(l,!0);const we=on(l),Ge=l.subTree;l.subTree=we,P(Ge,we,f(Ge.el),y(Ge),l,v,A),L.el=we.el,pe===null&&il(l,we.el),W&&Le(W,v),(re=L.props&&L.props.onVnodeUpdated)&&Le(()=>Ye(re,j,L,Q),v)}else{let L;const{el:M,props:W}=u,{bm:j,m:Q,parent:pe}=l,re=Xt(u);if(Tt(l,!1),j&&Qo(j),!re&&(L=W&&W.onVnodeBeforeMount)&&Ye(L,pe,u),Tt(l,!0),M&&he){const we=()=>{l.subTree=on(l),he(M,l.subTree,l,v,null)};re?u.type.__asyncLoader().then(()=>!l.isUnmounted&&we()):we()}else{const we=l.subTree=on(l);P(null,we,m,_,l,v,A),u.el=we.el}if(Q&&Le(Q,v),!re&&(L=W&&W.onVnodeMounted)){const we=u;Le(()=>Ye(L,pe,we),v)}(u.shapeFlag&256||pe&&Xt(pe.vnode)&&pe.vnode.shapeFlag&256)&&l.a&&Le(l.a,v),l.isMounted=!0,u=m=_=null}},C=l.effect=new Ln(I,Oe,()=>On(w),l.scope),w=l.update=()=>{C.dirty&&C.run()};w.i=l,w.id=l.uid,Tt(l,!0),w()},le=(l,u,m)=>{u.component=l;const _=l.vnode.props;l.vnode=u,l.next=null,Ba(l,u.props,_,m),Ka(l,u.children,m),It(),rs(l),Ct()},se=(l,u,m,_,v,A,T,I,C=!1)=>{const w=l&&l.children,L=l?l.shapeFlag:0,M=u.children,{patchFlag:W,shapeFlag:j}=u;if(W>0){if(W&128){ct(w,M,m,_,v,A,T,I,C);return}else if(W&256){tt(w,M,m,_,v,A,T,I,C);return}}j&8?(L&16&&We(w,v,A),M!==w&&p(m,M)):L&16?j&16?ct(w,M,m,_,v,A,T,I,C):We(w,v,A,!0):(L&8&&p(m,""),j&16&&ye(M,m,_,v,A,T,I,C))},tt=(l,u,m,_,v,A,T,I,C)=>{l=l||Ft,u=u||Ft;const w=l.length,L=u.length,M=Math.min(w,L);let W;for(W=0;W<M;W++){const j=u[W]=C?gt(u[W]):Xe(u[W]);P(l[W],j,m,null,v,A,T,I,C)}w>L?We(l,v,A,!0,!1,M):ye(u,m,_,v,A,T,I,C,M)},ct=(l,u,m,_,v,A,T,I,C)=>{let w=0;const L=u.length;let M=l.length-1,W=L-1;for(;w<=M&&w<=W;){const j=l[w],Q=u[w]=C?gt(u[w]):Xe(u[w]);if(Lt(j,Q))P(j,Q,m,null,v,A,T,I,C);else break;w++}for(;w<=M&&w<=W;){const j=l[M],Q=u[W]=C?gt(u[W]):Xe(u[W]);if(Lt(j,Q))P(j,Q,m,null,v,A,T,I,C);else break;M--,W--}if(w>M){if(w<=W){const j=W+1,Q=j<L?u[j].el:_;for(;w<=W;)P(null,u[w]=C?gt(u[w]):Xe(u[w]),m,Q,v,A,T,I,C),w++}}else if(w>W)for(;w<=M;)De(l[w],v,A,!0),w++;else{const j=w,Q=w,pe=new Map;for(w=Q;w<=W;w++){const Re=u[w]=C?gt(u[w]):Xe(u[w]);Re.key!=null&&pe.set(Re.key,w)}let re,we=0;const Ge=W-Q+1;let Ht=!1,Jn=0;const zt=new Array(Ge);for(w=0;w<Ge;w++)zt[w]=0;for(w=j;w<=M;w++){const Re=l[w];if(we>=Ge){De(Re,v,A,!0);continue}let Ze;if(Re.key!=null)Ze=pe.get(Re.key);else for(re=Q;re<=W;re++)if(zt[re-Q]===0&&Lt(Re,u[re])){Ze=re;break}Ze===void 0?De(Re,v,A,!0):(zt[Ze-Q]=w+1,Ze>=Jn?Jn=Ze:Ht=!0,P(Re,u[Ze],m,null,v,A,T,I,C),we++)}const qn=Ht?Za(zt):Ft;for(re=qn.length-1,w=Ge-1;w>=0;w--){const Re=Q+w,Ze=u[Re],Qn=Re+1<L?u[Re+1].el:_;zt[w]===0?P(null,Ze,m,Qn,v,A,T,I,C):Ht&&(re<0||w!==qn[re]?Qe(Ze,m,Qn,2):re--)}}},Qe=(l,u,m,_,v=null)=>{const{el:A,type:T,transition:I,children:C,shapeFlag:w}=l;if(w&6){Qe(l.component.subTree,u,m,_);return}if(w&128){l.suspense.move(u,m,_);return}if(w&64){T.move(l,u,m,R);return}if(T===J){n(A,u,m);for(let M=0;M<C.length;M++)Qe(C[M],u,m,_);n(l.anchor,u,m);return}if(T===Co){k(l,u,m);return}if(_!==2&&w&1&&I)if(_===0)I.beforeEnter(A),n(A,u,m),Le(()=>I.enter(A),v);else{const{leave:M,delayLeave:W,afterLeave:j}=I,Q=()=>n(A,u,m),pe=()=>{M(A,()=>{Q(),j&&j()})};W?W(A,Q,pe):pe()}else n(A,u,m)},De=(l,u,m,_=!1,v=!1)=>{const{type:A,props:T,ref:I,children:C,dynamicChildren:w,shapeFlag:L,patchFlag:M,dirs:W,cacheIndex:j}=l;if(M===-2&&(v=!1),I!=null&&_n(I,null,m,l,!0),j!=null&&(u.renderCache[j]=void 0),L&256){u.ctx.deactivate(l);return}const Q=L&1&&W,pe=!Xt(l);let re;if(pe&&(re=T&&T.onVnodeBeforeUnmount)&&Ye(re,u,l),L&6)fo(l.component,m,_);else{if(L&128){l.suspense.unmount(m,_);return}Q&&St(l,null,u,"beforeUnmount"),L&64?l.type.remove(l,u,m,R,_):w&&!w.hasOnce&&(A!==J||M>0&&M&64)?We(w,u,m,!1,!0):(A===J&&M&384||!v&&L&16)&&We(C,u,m),_&&Wt(l)}(pe&&(re=T&&T.onVnodeUnmounted)||Q)&&Le(()=>{re&&Ye(re,u,l),Q&&St(l,null,u,"unmounted")},m)},Wt=l=>{const{type:u,el:m,anchor:_,transition:v}=l;if(u===J){Mt(m,_);return}if(u===Co){Z(l);return}const A=()=>{s(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(l.shapeFlag&1&&v&&!v.persisted){const{leave:T,delayLeave:I}=v,C=()=>T(m,A);I?I(l.el,A,C):C()}else A()},Mt=(l,u)=>{let m;for(;l!==u;)m=h(l),s(l),l=m;s(u)},fo=(l,u,m)=>{const{bum:_,scope:v,update:A,subTree:T,um:I,m:C,a:w}=l;fs(C),fs(w),_&&Qo(_),v.stop(),A&&(A.active=!1,De(T,l,u,m)),I&&Le(I,u),Le(()=>{l.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},We=(l,u,m,_=!1,v=!1,A=0)=>{for(let T=A;T<l.length;T++)De(l[T],u,m,_,v)},y=l=>{if(l.shapeFlag&6)return y(l.component.subTree);if(l.shapeFlag&128)return l.suspense.next();const u=h(l.anchor||l.el),m=u&&u[$a];return m?h(m):u};let D=!1;const x=(l,u,m)=>{l==null?u._vnode&&De(u._vnode,null,null,!0):P(u._vnode||null,l,u,null,null,null,m),u._vnode=l,D||(D=!0,rs(),Lr(),D=!1)},R={p:P,um:De,m:Qe,r:Wt,mt:_e,mc:ye,pc:se,pbc:te,n:y,o:e};let ie,he;return{render:x,hydrate:ie,createApp:Oa(x,ie)}}function tn({type:e,props:t},o){return o==="svg"&&e==="foreignObject"||o==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:o}function Tt({effect:e,update:t},o){e.allowRecurse=t.allowRecurse=o}function Qa(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ni(e,t,o=!1){const n=e.children,s=t.children;if(F(n)&&F(s))for(let r=0;r<n.length;r++){const i=n[r];let c=s[r];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[r]=gt(s[r]),c.el=i.el),!o&&c.patchFlag!==-2&&ni(i,c)),c.type===Go&&(c.el=i.el)}}function Za(e){const t=e.slice(),o=[0];let n,s,r,i,c;const a=e.length;for(n=0;n<a;n++){const d=e[n];if(d!==0){if(s=o[o.length-1],e[s]<d){t[n]=s,o.push(n);continue}for(r=0,i=o.length-1;r<i;)c=r+i>>1,e[o[c]]<d?r=c+1:i=c;d<e[o[r]]&&(r>0&&(t[n]=o[r-1]),o[r]=n)}}for(r=o.length,i=o[r-1];r-- >0;)o[r]=i,i=t[i];return o}function si(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:si(t)}function fs(e){if(e)for(let t=0;t<e.length;t++)e[t].active=!1}const Ya=Symbol.for("v-scx"),Xa=()=>it(Ya),_o={};function Io(e,t,o){return ri(e,t,o)}function ri(e,t,{immediate:o,deep:n,flush:s,once:r,onTrack:i,onTrigger:c}=me){if(t&&r){const O=t;t=(...ue)=>{O(...ue),ce()}}const a=Ce,d=O=>n===!0?O:Dt(O,n===!1?1:void 0);let p,f=!1,h=!1;if(ge(e)?(p=()=>e.value,f=Gt(e)):Yt(e)?(p=()=>d(e),f=!0):F(e)?(h=!0,f=e.some(O=>Yt(O)||Gt(O)),p=()=>e.map(O=>{if(ge(O))return O.value;if(Yt(O))return d(O);if(G(O))return yt(O,a,2)})):G(e)?t?p=()=>yt(e,a,2):p=()=>(g&&g(),Fe(e,a,3,[E])):p=Oe,t&&n){const O=p;p=()=>Dt(O())}let g,E=O=>{g=k.onStop=()=>{yt(O,a,4),g=k.onStop=void 0}},P;if(zo)if(E=Oe,t?o&&Fe(t,a,3,[p(),h?[]:void 0,E]):p(),s==="sync"){const O=Xa();P=O.__watcherHandles||(O.__watcherHandles=[])}else return Oe;let B=h?new Array(e.length).fill(_o):_o;const H=()=>{if(!(!k.active||!k.dirty))if(t){const O=k.run();(n||f||(h?O.some((ue,ye)=>_t(ue,B[ye])):_t(O,B)))&&(g&&g(),Fe(t,a,3,[O,B===_o?void 0:h&&B[0]===_o?[]:B,E]),B=O)}else k.run()};H.allowRecurse=!!t;let U;s==="sync"?U=H:s==="post"?U=()=>Le(H,a&&a.suspense):(H.pre=!0,a&&(H.id=a.uid),U=()=>On(H));const k=new Ln(p,Oe,U),Z=Vi(),ce=()=>{k.stop(),Z&&xn(Z.effects,k)};return t?o?H():B=k.run():s==="post"?Le(k.run.bind(k),a&&a.suspense):k.run(),P&&P.push(ce),ce}function el(e,t,o){const n=this.proxy,s=ve(e)?e.includes(".")?ii(n,e):()=>n[e]:e.bind(n,n);let r;G(t)?r=t:(r=t.handler,o=t);const i=po(this),c=ri(s,r.bind(n),o);return i(),c}function ii(e,t){const o=t.split(".");return()=>{let n=e;for(let s=0;s<o.length&&n;s++)n=n[o[s]];return n}}function Dt(e,t=1/0,o){if(t<=0||!fe(e)||e.__v_skip||(o=o||new Set,o.has(e)))return e;if(o.add(e),t--,ge(e))Dt(e.value,t,o);else if(F(e))for(let n=0;n<e.length;n++)Dt(e[n],t,o);else if(Xs(e)||Bt(e))e.forEach(n=>{Dt(n,t,o)});else if(or(e)){for(const n in e)Dt(e[n],t,o);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&Dt(e[n],t,o)}return e}const tl=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Je(t)}Modifiers`]||e[`${Ut(t)}Modifiers`];function ol(e,t,...o){if(e.isUnmounted)return;const n=e.vnode.props||me;let s=o;const r=t.startsWith("update:"),i=r&&tl(n,t.slice(7));i&&(i.trim&&(s=o.map(p=>ve(p)?p.trim():p)),i.number&&(s=o.map(Ni)));let c,a=n[c=qo(t)]||n[c=qo(Je(t))];!a&&r&&(a=n[c=qo(Ut(t))]),a&&Fe(a,e,6,s);const d=n[c+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,Fe(d,e,6,s)}}function ai(e,t,o=!1){const n=t.emitsCache,s=n.get(e);if(s!==void 0)return s;const r=e.emits;let i={},c=!1;if(!G(e)){const a=d=>{const p=ai(d,t,!0);p&&(c=!0,Ae(i,p))};!o&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!r&&!c?(fe(e)&&n.set(e,null),null):(F(r)?r.forEach(a=>i[a]=null):Ae(i,r),fe(e)&&n.set(e,i),i)}function Vo(e,t){return!e||!No(t)?!1:(t=t.slice(2).replace(/Once$/,""),X(e,t[0].toLowerCase()+t.slice(1))||X(e,Ut(t))||X(e,t))}function on(e){const{type:t,vnode:o,proxy:n,withProxy:s,propsOptions:[r],slots:i,attrs:c,emit:a,render:d,renderCache:p,props:f,data:h,setupState:g,ctx:E,inheritAttrs:P}=e,B=xo(e);let H,U;try{if(o.shapeFlag&4){const Z=s||n,ce=Z;H=Xe(d.call(ce,Z,p,f,g,h,E)),U=c}else{const Z=t;H=Xe(Z.length>1?Z(f,{attrs:c,slots:i,emit:a}):Z(f,null)),U=t.props?c:nl(c)}}catch(Z){to.length=0,Oo(Z,e,1),H=S(ke)}let k=H;if(U&&P!==!1){const Z=Object.keys(U),{shapeFlag:ce}=k;Z.length&&ce&7&&(r&&Z.some(Tn)&&(U=sl(U,r)),k=wt(k,U,!1,!0))}return o.dirs&&(k=wt(k,null,!1,!0),k.dirs=k.dirs?k.dirs.concat(o.dirs):o.dirs),o.transition&&(k.transition=o.transition),H=k,xo(B),H}const nl=e=>{let t;for(const o in e)(o==="class"||o==="style"||No(o))&&((t||(t={}))[o]=e[o]);return t},sl=(e,t)=>{const o={};for(const n in e)(!Tn(n)||!(n.slice(9)in t))&&(o[n]=e[n]);return o};function rl(e,t,o){const{props:n,children:s,component:r}=e,{props:i,children:c,patchFlag:a}=t,d=r.emitsOptions;if(t.dirs||t.transition)return!0;if(o&&a>=0){if(a&1024)return!0;if(a&16)return n?hs(n,i,d):!!i;if(a&8){const p=t.dynamicProps;for(let f=0;f<p.length;f++){const h=p[f];if(i[h]!==n[h]&&!Vo(d,h))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:n===i?!1:n?i?hs(n,i,d):!0:!!i;return!1}function hs(e,t,o){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let s=0;s<n.length;s++){const r=n[s];if(t[r]!==e[r]&&!Vo(o,r))return!0}return!1}function il({vnode:e,parent:t},o){for(;t;){const n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.el=e.el),n===e)(e=t.vnode).el=o,t=t.parent;else break}}const al=e=>e.__isSuspense;function ll(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):ga(e)}const J=Symbol.for("v-fgt"),Go=Symbol.for("v-txt"),ke=Symbol.for("v-cmt"),Co=Symbol.for("v-stc"),to=[];let Ue=null;function V(e=!1){to.push(Ue=e?null:[])}function cl(){to.pop(),Ue=to[to.length-1]||null}let ao=1;function ms(e){ao+=e,e<0&&Ue&&(Ue.hasOnce=!0)}function li(e){return e.dynamicChildren=ao>0?Ue||Ft:null,cl(),ao>0&&Ue&&Ue.push(e),e}function q(e,t,o,n,s,r){return li(b(e,t,o,n,s,r,!0))}function Ko(e,t,o,n,s){return li(S(e,t,o,n,s,!0))}function Lo(e){return e?e.__v_isVNode===!0:!1}function Lt(e,t){return e.type===t.type&&e.key===t.key}const ci=({key:e})=>e??null,So=({ref:e,ref_key:t,ref_for:o})=>(typeof e=="number"&&(e=""+e),e!=null?ve(e)||ge(e)||G(e)?{i:xe,r:e,k:t,f:!!o}:e:null);function b(e,t=null,o=null,n=0,s=null,r=e===J?0:1,i=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ci(t),ref:t&&So(t),scopeId:Fo,slotScopeIds:null,children:o,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:xe};return c?(jn(a,o),r&128&&e.normalize(a)):o&&(a.shapeFlag|=ve(o)?8:16),ao>0&&!i&&Ue&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Ue.push(a),a}const S=ul;function ul(e,t=null,o=null,n=0,s=null,r=!1){if((!e||e===Vr)&&(e=ke),Lo(e)){const c=wt(e,t,!0);return o&&jn(c,o),ao>0&&!r&&Ue&&(c.shapeFlag&6?Ue[Ue.indexOf(e)]=c:Ue.push(c)),c.patchFlag=-2,c}if(Al(e)&&(e=e.__vccOpts),t){t=dl(t);let{class:c,style:a}=t;c&&!ve(c)&&(t.class=Dn(c)),fe(a)&&(Ar(a)&&!F(a)&&(a=Ae({},a)),t.style=En(a))}const i=ve(e)?1:al(e)?128:za(e)?64:fe(e)?4:G(e)?2:0;return b(e,t,o,n,s,i,r,!0)}function dl(e){return e?Ar(e)||Qr(e)?Ae({},e):e:null}function wt(e,t,o=!1,n=!1){const{props:s,ref:r,patchFlag:i,children:c,transition:a}=e,d=t?pl(s||{},t):s,p={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&ci(d),ref:t&&t.ref?o&&r?F(r)?r.concat(So(t)):[r,So(t)]:So(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==J?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&wt(e.ssContent),ssFallback:e.ssFallback&&wt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&n&&Po(p,a.clone(p)),p}function $(e=" ",t=0){return S(Go,null,e,t)}function $o(e,t){const o=S(Co,null,e);return o.staticCount=t,o}function st(e="",t=!1){return t?(V(),Ko(ke,null,e)):S(ke,null,e)}function Xe(e){return e==null||typeof e=="boolean"?S(ke):F(e)?S(J,null,e.slice()):typeof e=="object"?gt(e):S(Go,null,String(e))}function gt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:wt(e)}function jn(e,t){let o=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(F(t))o=16;else if(typeof t=="object")if(n&65){const s=t.default;s&&(s._c&&(s._d=!1),jn(e,s()),s._c&&(s._d=!0));return}else{o=32;const s=t._;!s&&!Qr(t)?t._ctx=xe:s===3&&xe&&(xe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else G(t)?(t={default:t,_ctx:xe},o=32):(t=String(t),n&64?(o=16,t=[$(t)]):o=8);e.children=t,e.shapeFlag|=o}function pl(...e){const t={};for(let o=0;o<e.length;o++){const n=e[o];for(const s in n)if(s==="class")t.class!==n.class&&(t.class=Dn([t.class,n.class]));else if(s==="style")t.style=En([t.style,n.style]);else if(No(s)){const r=t[s],i=n[s];i&&r!==i&&!(F(r)&&r.includes(i))&&(t[s]=r?[].concat(r,i):i)}else s!==""&&(t[s]=n[s])}return t}function Ye(e,t,o,n=null){Fe(e,t,7,[o,n])}const fl=zr();let hl=0;function ml(e,t,o){const n=e.type,s=(t?t.appContext:e.appContext)||fl,r={uid:hl++,vnode:e,type:n,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new lr(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yr(n,s),emitsOptions:ai(n,s),emit:null,emitted:null,propsDefaults:me,inheritAttrs:n.inheritAttrs,ctx:me,data:me,props:me,attrs:me,slots:me,refs:me,setupState:me,setupContext:null,suspense:o,suspenseId:o?o.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=ol.bind(null,r),e.ce&&e.ce(r),r}let Ce=null;const gl=()=>Ce||xe;let ko,wn;{const e=sr(),t=(o,n)=>{let s;return(s=e[o])||(s=e[o]=[]),s.push(n),r=>{s.length>1?s.forEach(i=>i(r)):s[0](r)}};ko=t("__VUE_INSTANCE_SETTERS__",o=>Ce=o),wn=t("__VUE_SSR_SETTERS__",o=>zo=o)}const po=e=>{const t=Ce;return ko(e),e.scope.on(),()=>{e.scope.off(),ko(t)}},gs=()=>{Ce&&Ce.scope.off(),ko(null)};function ui(e){return e.vnode.shapeFlag&4}let zo=!1;function bl(e,t=!1,o=!1){t&&wn(t);const{props:n,children:s}=e.vnode,r=ui(e);Fa(e,n,r,t),Ga(e,s,o);const i=r?vl(e,t):void 0;return t&&wn(!1),i}function vl(e,t){const o=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,ka);const{setup:n}=o;if(n){const s=e.setupContext=n.length>1?_l(e):null,r=po(e);It();const i=yt(n,e,0,[e.props,s]);if(Ct(),r(),er(i)){if(i.then(gs,gs),t)return i.then(c=>{bs(e,c,t)}).catch(c=>{Oo(c,e,0)});e.asyncDep=i}else bs(e,i,t)}else di(e,t)}function bs(e,t,o){G(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:fe(t)&&(e.setupState=xr(t)),di(e,o)}let vs;function di(e,t,o){const n=e.type;if(!e.render){if(!t&&vs&&!n.render){const s=n.template||Fn(e).template;if(s){const{isCustomElement:r,compilerOptions:i}=e.appContext.config,{delimiters:c,compilerOptions:a}=n,d=Ae(Ae({isCustomElement:r,delimiters:c},i),a);n.render=vs(s,d)}}e.render=n.render||Oe}{const s=po(e);It();try{Na(e)}finally{Ct(),s()}}}const yl={get(e,t){return Ne(e,"get",""),e[t]}};function _l(e){const t=o=>{e.exposed=o||{}};return{attrs:new Proxy(e.attrs,yl),slots:e.slots,emit:e.emit,expose:t}}function Vn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(xr(Ir(e.exposed)),{get(t,o){if(o in t)return t[o];if(o in eo)return eo[o](e)},has(t,o){return o in t||o in eo}})):e.proxy}function wl(e,t=!0){return G(e)?e.displayName||e.name:e.name||t&&e.__name}function Al(e){return G(e)&&"__vccOpts"in e}const $e=(e,t)=>ca(e,t,zo);function He(e,t,o){const n=arguments.length;return n===2?fe(t)&&!F(t)?Lo(t)?S(e,null,[t]):S(e,t):S(e,null,t):(n>3?o=Array.prototype.slice.call(arguments,2):n===3&&Lo(o)&&(o=[o]),S(e,t,o))}const Il="3.4.38";/**
* @vue/runtime-dom v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Cl="http://www.w3.org/2000/svg",Sl="http://www.w3.org/1998/Math/MathML",nt=typeof document<"u"?document:null,ys=nt&&nt.createElement("template"),Tl={insert:(e,t,o)=>{t.insertBefore(e,o||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,o,n)=>{const s=t==="svg"?nt.createElementNS(Cl,e):t==="mathml"?nt.createElementNS(Sl,e):o?nt.createElement(e,{is:o}):nt.createElement(e);return e==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:e=>nt.createTextNode(e),createComment:e=>nt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>nt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,o,n,s,r){const i=o?o.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),o),!(s===r||!(s=s.nextSibling)););else{ys.innerHTML=n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e;const c=ys.content;if(n==="svg"||n==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}t.insertBefore(c,o)}return[i?i.nextSibling:t.firstChild,o?o.previousSibling:t.lastChild]}},dt="transition",Jt="animation",lo=Symbol("_vtc"),ze=(e,{slots:t})=>He(_a,xl(e),t);ze.displayName="Transition";const pi={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ze.props=Ae({},Nr,pi);const xt=(e,t=[])=>{F(e)?e.forEach(o=>o(...t)):e&&e(...t)},_s=e=>e?F(e)?e.some(t=>t.length>1):e.length>1:!1;function xl(e){const t={};for(const N in e)N in pi||(t[N]=e[N]);if(e.css===!1)return t;const{name:o="v",type:n,duration:s,enterFromClass:r=`${o}-enter-from`,enterActiveClass:i=`${o}-enter-active`,enterToClass:c=`${o}-enter-to`,appearFromClass:a=r,appearActiveClass:d=i,appearToClass:p=c,leaveFromClass:f=`${o}-leave-from`,leaveActiveClass:h=`${o}-leave-active`,leaveToClass:g=`${o}-leave-to`}=e,E=Pl(s),P=E&&E[0],B=E&&E[1],{onBeforeEnter:H,onEnter:U,onEnterCancelled:k,onLeave:Z,onLeaveCancelled:ce,onBeforeAppear:O=H,onAppear:ue=U,onAppearCancelled:ye=k}=t,K=(N,ne,_e)=>{Pt(N,ne?p:c),Pt(N,ne?d:i),_e&&_e()},te=(N,ne)=>{N._isLeaving=!1,Pt(N,f),Pt(N,g),Pt(N,h),ne&&ne()},de=N=>(ne,_e)=>{const Ve=N?ue:U,be=()=>K(ne,N,_e);xt(Ve,[ne,be]),ws(()=>{Pt(ne,N?a:r),pt(ne,N?p:c),_s(Ve)||As(ne,n,P,be)})};return Ae(t,{onBeforeEnter(N){xt(H,[N]),pt(N,r),pt(N,i)},onBeforeAppear(N){xt(O,[N]),pt(N,a),pt(N,d)},onEnter:de(!1),onAppear:de(!0),onLeave(N,ne){N._isLeaving=!0;const _e=()=>te(N,ne);pt(N,f),pt(N,h),Ll(),ws(()=>{N._isLeaving&&(Pt(N,f),pt(N,g),_s(Z)||As(N,n,B,_e))}),xt(Z,[N,_e])},onEnterCancelled(N){K(N,!1),xt(k,[N])},onAppearCancelled(N){K(N,!0),xt(ye,[N])},onLeaveCancelled(N){te(N),xt(ce,[N])}})}function Pl(e){if(e==null)return null;if(fe(e))return[nn(e.enter),nn(e.leave)];{const t=nn(e);return[t,t]}}function nn(e){return Ri(e)}function pt(e,t){t.split(/\s+/).forEach(o=>o&&e.classList.add(o)),(e[lo]||(e[lo]=new Set)).add(t)}function Pt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.remove(n));const o=e[lo];o&&(o.delete(t),o.size||(e[lo]=void 0))}function ws(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let El=0;function As(e,t,o,n){const s=e._endId=++El,r=()=>{s===e._endId&&n()};if(o)return setTimeout(r,o);const{type:i,timeout:c,propCount:a}=Dl(e,t);if(!i)return n();const d=i+"end";let p=0;const f=()=>{e.removeEventListener(d,h),r()},h=g=>{g.target===e&&++p>=a&&f()};setTimeout(()=>{p<a&&f()},c+1),e.addEventListener(d,h)}function Dl(e,t){const o=window.getComputedStyle(e),n=E=>(o[E]||"").split(", "),s=n(`${dt}Delay`),r=n(`${dt}Duration`),i=Is(s,r),c=n(`${Jt}Delay`),a=n(`${Jt}Duration`),d=Is(c,a);let p=null,f=0,h=0;t===dt?i>0&&(p=dt,f=i,h=r.length):t===Jt?d>0&&(p=Jt,f=d,h=a.length):(f=Math.max(i,d),p=f>0?i>d?dt:Jt:null,h=p?p===dt?r.length:a.length:0);const g=p===dt&&/\b(transform|all)(,|$)/.test(n(`${dt}Property`).toString());return{type:p,timeout:f,propCount:h,hasTransform:g}}function Is(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((o,n)=>Cs(o)+Cs(e[n])))}function Cs(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Ll(){return document.body.offsetHeight}function kl(e,t,o){const n=e[lo];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):o?e.setAttribute("class",t):e.className=t}const Ss=Symbol("_vod"),Nl=Symbol("_vsh"),Rl=Symbol(""),Ul=/(^|;)\s*display\s*:/;function Wl(e,t,o){const n=e.style,s=ve(o);let r=!1;if(o&&!s){if(t)if(ve(t))for(const i of t.split(";")){const c=i.slice(0,i.indexOf(":")).trim();o[c]==null&&To(n,c,"")}else for(const i in t)o[i]==null&&To(n,i,"");for(const i in o)i==="display"&&(r=!0),To(n,i,o[i])}else if(s){if(t!==o){const i=n[Rl];i&&(o+=";"+i),n.cssText=o,r=Ul.test(o)}}else t&&e.removeAttribute("style");Ss in e&&(e[Ss]=r?n.display:"",e[Nl]&&(n.display="none"))}const Ts=/\s*!important$/;function To(e,t,o){if(F(o))o.forEach(n=>To(e,t,n));else if(o==null&&(o=""),t.startsWith("--"))e.setProperty(t,o);else{const n=Ml(e,t);Ts.test(o)?e.setProperty(Ut(n),o.replace(Ts,""),"important"):e[n]=o}}const xs=["Webkit","Moz","ms"],sn={};function Ml(e,t){const o=sn[t];if(o)return o;let n=Je(t);if(n!=="filter"&&n in e)return sn[t]=n;n=Wo(n);for(let s=0;s<xs.length;s++){const r=xs[s]+n;if(r in e)return sn[t]=r}return t}const Ps="http://www.w3.org/1999/xlink";function Es(e,t,o,n,s,r=Fi(t)){n&&t.startsWith("xlink:")?o==null?e.removeAttributeNS(Ps,t.slice(6,t.length)):e.setAttributeNS(Ps,t,o):o==null||r&&!rr(o)?e.removeAttribute(t):e.setAttribute(t,r?"":At(o)?String(o):o)}function Hl(e,t,o,n){if(t==="innerHTML"||t==="textContent"){if(o==null)return;e[t]=o;return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const i=s==="OPTION"?e.getAttribute("value")||"":e.value,c=o==null?"":String(o);(i!==c||!("_value"in e))&&(e.value=c),o==null&&e.removeAttribute(t),e._value=o;return}let r=!1;if(o===""||o==null){const i=typeof e[t];i==="boolean"?o=rr(o):o==null&&i==="string"?(o="",r=!0):i==="number"&&(o=0,r=!0)}try{e[t]=o}catch{}r&&e.removeAttribute(t)}function Ol(e,t,o,n){e.addEventListener(t,o,n)}function Fl(e,t,o,n){e.removeEventListener(t,o,n)}const Ds=Symbol("_vei");function Bl(e,t,o,n,s=null){const r=e[Ds]||(e[Ds]={}),i=r[t];if(n&&i)i.value=n;else{const[c,a]=jl(t);if(n){const d=r[t]=Kl(n,s);Ol(e,c,d,a)}else i&&(Fl(e,c,i,a),r[t]=void 0)}}const Ls=/(?:Once|Passive|Capture)$/;function jl(e){let t;if(Ls.test(e)){t={};let n;for(;n=e.match(Ls);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ut(e.slice(2)),t]}let rn=0;const Vl=Promise.resolve(),Gl=()=>rn||(Vl.then(()=>rn=0),rn=Date.now());function Kl(e,t){const o=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=o.attached)return;Fe($l(n,o.value),t,5,[n])};return o.value=e,o.attached=Gl(),o}function $l(e,t){if(F(t)){const o=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{o.call(e),e._stopped=!0},t.map(n=>s=>!s._stopped&&n&&n(s))}else return t}const ks=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,zl=(e,t,o,n,s,r)=>{const i=s==="svg";t==="class"?kl(e,n,i):t==="style"?Wl(e,o,n):No(t)?Tn(t)||Bl(e,t,o,n,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Jl(e,t,n,i))?(Hl(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Es(e,t,n,i,r,t!=="value")):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),Es(e,t,n,i))};function Jl(e,t,o,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&ks(t)&&G(o));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ks(t)&&ve(o)?!1:t in e}const ql=Ae({patchProp:zl},Tl);let Ns;function Ql(){return Ns||(Ns=Ja(ql))}const Zl=(...e)=>{const t=Ql().createApp(...e),{mount:o}=t;return t.mount=n=>{const s=Xl(n);if(!s)return;const r=t._component;!G(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const i=o(s,!1,Yl(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),i},t};function Yl(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Xl(e){return ve(e)?document.querySelector(e):e}var ec=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const tc=Symbol();var Rs;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Rs||(Rs={}));function oc(){const e=Bi(!0),t=e.run(()=>Ee({}));let o=[],n=[];const s=Ir({install(r){s._a=r,r.provide(tc,s),r.config.globalProperties.$pinia=s,n.forEach(i=>o.push(i)),n=[]},use(r){return!this._a&&!ec?n.push(r):o.push(r),this},_p:o,_a:null,_e:e,_s:new Map,state:t});return s}/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ot=typeof document<"u";function nc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ae=Object.assign;function an(e,t){const o={};for(const n in t){const s=t[n];o[n]=qe(s)?s.map(e):e(s)}return o}const oo=()=>{},qe=Array.isArray,fi=/#/g,sc=/&/g,rc=/\//g,ic=/=/g,ac=/\?/g,hi=/\+/g,lc=/%5B/g,cc=/%5D/g,mi=/%5E/g,uc=/%60/g,gi=/%7B/g,dc=/%7C/g,bi=/%7D/g,pc=/%20/g;function Gn(e){return encodeURI(""+e).replace(dc,"|").replace(lc,"[").replace(cc,"]")}function fc(e){return Gn(e).replace(gi,"{").replace(bi,"}").replace(mi,"^")}function An(e){return Gn(e).replace(hi,"%2B").replace(pc,"+").replace(fi,"%23").replace(sc,"%26").replace(uc,"`").replace(gi,"{").replace(bi,"}").replace(mi,"^")}function hc(e){return An(e).replace(ic,"%3D")}function mc(e){return Gn(e).replace(fi,"%23").replace(ac,"%3F")}function gc(e){return e==null?"":mc(e).replace(rc,"%2F")}function co(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const bc=/\/$/,vc=e=>e.replace(bc,"");function ln(e,t,o="/"){let n,s={},r="",i="";const c=t.indexOf("#");let a=t.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(n=t.slice(0,a),r=t.slice(a+1,c>-1?c:t.length),s=e(r)),c>-1&&(n=n||t.slice(0,c),i=t.slice(c,t.length)),n=Ac(n??t,o),{fullPath:n+(r&&"?")+r+i,path:n,query:s,hash:co(i)}}function yc(e,t){const o=t.query?e(t.query):"";return t.path+(o&&"?")+o+(t.hash||"")}function Us(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function _c(e,t,o){const n=t.matched.length-1,s=o.matched.length-1;return n>-1&&n===s&&Kt(t.matched[n],o.matched[s])&&vi(t.params,o.params)&&e(t.query)===e(o.query)&&t.hash===o.hash}function Kt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function vi(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const o in e)if(!wc(e[o],t[o]))return!1;return!0}function wc(e,t){return qe(e)?Ws(e,t):qe(t)?Ws(t,e):e===t}function Ws(e,t){return qe(t)?e.length===t.length&&e.every((o,n)=>o===t[n]):e.length===1&&e[0]===t}function Ac(e,t){if(e.startsWith("/"))return e;if(!e)return t;const o=t.split("/"),n=e.split("/"),s=n[n.length-1];(s===".."||s===".")&&n.push("");let r=o.length-1,i,c;for(i=0;i<n.length;i++)if(c=n[i],c!==".")if(c==="..")r>1&&r--;else break;return o.slice(0,r).join("/")+"/"+n.slice(i).join("/")}const ft={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var uo;(function(e){e.pop="pop",e.push="push"})(uo||(uo={}));var no;(function(e){e.back="back",e.forward="forward",e.unknown=""})(no||(no={}));function Ic(e){if(!e)if(Ot){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),vc(e)}const Cc=/^[^#]+#/;function Sc(e,t){return e.replace(Cc,"#")+t}function Tc(e,t){const o=document.documentElement.getBoundingClientRect(),n=e.getBoundingClientRect();return{behavior:t.behavior,left:n.left-o.left-(t.left||0),top:n.top-o.top-(t.top||0)}}const Jo=()=>({left:window.scrollX,top:window.scrollY});function xc(e){let t;if("el"in e){const o=e.el,n=typeof o=="string"&&o.startsWith("#"),s=typeof o=="string"?n?document.getElementById(o.slice(1)):document.querySelector(o):o;if(!s)return;t=Tc(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Ms(e,t){return(history.state?history.state.position-t:-1)+e}const In=new Map;function Pc(e,t){In.set(e,t)}function Ec(e){const t=In.get(e);return In.delete(e),t}let Dc=()=>location.protocol+"//"+location.host;function yi(e,t){const{pathname:o,search:n,hash:s}=t,r=e.indexOf("#");if(r>-1){let c=s.includes(e.slice(r))?e.slice(r).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),Us(a,"")}return Us(o,e)+n+s}function Lc(e,t,o,n){let s=[],r=[],i=null;const c=({state:h})=>{const g=yi(e,location),E=o.value,P=t.value;let B=0;if(h){if(o.value=g,t.value=h,i&&i===E){i=null;return}B=P?h.position-P.position:0}else n(g);s.forEach(H=>{H(o.value,E,{delta:B,type:uo.pop,direction:B?B>0?no.forward:no.back:no.unknown})})};function a(){i=o.value}function d(h){s.push(h);const g=()=>{const E=s.indexOf(h);E>-1&&s.splice(E,1)};return r.push(g),g}function p(){const{history:h}=window;h.state&&h.replaceState(ae({},h.state,{scroll:Jo()}),"")}function f(){for(const h of r)h();r=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",p,{passive:!0}),{pauseListeners:a,listen:d,destroy:f}}function Hs(e,t,o,n=!1,s=!1){return{back:e,current:t,forward:o,replaced:n,position:window.history.length,scroll:s?Jo():null}}function kc(e){const{history:t,location:o}=window,n={value:yi(e,o)},s={value:t.state};s.value||r(n.value,{back:null,current:n.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(a,d,p){const f=e.indexOf("#"),h=f>-1?(o.host&&document.querySelector("base")?e:e.slice(f))+a:Dc()+e+a;try{t[p?"replaceState":"pushState"](d,"",h),s.value=d}catch(g){console.error(g),o[p?"replace":"assign"](h)}}function i(a,d){const p=ae({},t.state,Hs(s.value.back,a,s.value.forward,!0),d,{position:s.value.position});r(a,p,!0),n.value=a}function c(a,d){const p=ae({},s.value,t.state,{forward:a,scroll:Jo()});r(p.current,p,!0);const f=ae({},Hs(n.value,a,null),{position:p.position+1},d);r(a,f,!1),n.value=a}return{location:n,state:s,push:c,replace:i}}function Nc(e){e=Ic(e);const t=kc(e),o=Lc(e,t.state,t.location,t.replace);function n(r,i=!0){i||o.pauseListeners(),history.go(r)}const s=ae({location:"",base:e,go:n,createHref:Sc.bind(null,e)},t,o);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Rc(e){return typeof e=="string"||e&&typeof e=="object"}function _i(e){return typeof e=="string"||typeof e=="symbol"}const wi=Symbol("");var Os;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Os||(Os={}));function $t(e,t){return ae(new Error,{type:e,[wi]:!0},t)}function ot(e,t){return e instanceof Error&&wi in e&&(t==null||!!(e.type&t))}const Fs="[^/]+?",Uc={sensitive:!1,strict:!1,start:!0,end:!0},Wc=/[.+*?^${}()[\]/\\]/g;function Mc(e,t){const o=ae({},Uc,t),n=[];let s=o.start?"^":"";const r=[];for(const d of e){const p=d.length?[]:[90];o.strict&&!d.length&&(s+="/");for(let f=0;f<d.length;f++){const h=d[f];let g=40+(o.sensitive?.25:0);if(h.type===0)f||(s+="/"),s+=h.value.replace(Wc,"\\$&"),g+=40;else if(h.type===1){const{value:E,repeatable:P,optional:B,regexp:H}=h;r.push({name:E,repeatable:P,optional:B});const U=H||Fs;if(U!==Fs){g+=10;try{new RegExp(`(${U})`)}catch(Z){throw new Error(`Invalid custom RegExp for param "${E}" (${U}): `+Z.message)}}let k=P?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;f||(k=B&&d.length<2?`(?:/${k})`:"/"+k),B&&(k+="?"),s+=k,g+=20,B&&(g+=-8),P&&(g+=-20),U===".*"&&(g+=-50)}p.push(g)}n.push(p)}if(o.strict&&o.end){const d=n.length-1;n[d][n[d].length-1]+=.7000000000000001}o.strict||(s+="/?"),o.end?s+="$":o.strict&&(s+="(?:/|$)");const i=new RegExp(s,o.sensitive?"":"i");function c(d){const p=d.match(i),f={};if(!p)return null;for(let h=1;h<p.length;h++){const g=p[h]||"",E=r[h-1];f[E.name]=g&&E.repeatable?g.split("/"):g}return f}function a(d){let p="",f=!1;for(const h of e){(!f||!p.endsWith("/"))&&(p+="/"),f=!1;for(const g of h)if(g.type===0)p+=g.value;else if(g.type===1){const{value:E,repeatable:P,optional:B}=g,H=E in d?d[E]:"";if(qe(H)&&!P)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const U=qe(H)?H.join("/"):H;if(!U)if(B)h.length<2&&(p.endsWith("/")?p=p.slice(0,-1):f=!0);else throw new Error(`Missing required param "${E}"`);p+=U}}return p||"/"}return{re:i,score:n,keys:r,parse:c,stringify:a}}function Hc(e,t){let o=0;for(;o<e.length&&o<t.length;){const n=t[o]-e[o];if(n)return n;o++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Ai(e,t){let o=0;const n=e.score,s=t.score;for(;o<n.length&&o<s.length;){const r=Hc(n[o],s[o]);if(r)return r;o++}if(Math.abs(s.length-n.length)===1){if(Bs(n))return 1;if(Bs(s))return-1}return s.length-n.length}function Bs(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Oc={type:0,value:""},Fc=/[a-zA-Z0-9_]/;function Bc(e){if(!e)return[[]];if(e==="/")return[[Oc]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${o})/"${d}": ${g}`)}let o=0,n=o;const s=[];let r;function i(){r&&s.push(r),r=[]}let c=0,a,d="",p="";function f(){d&&(o===0?r.push({type:0,value:d}):o===1||o===2||o===3?(r.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:d,regexp:p,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),d="")}function h(){d+=a}for(;c<e.length;){if(a=e[c++],a==="\\"&&o!==2){n=o,o=4;continue}switch(o){case 0:a==="/"?(d&&f(),i()):a===":"?(f(),o=1):h();break;case 4:h(),o=n;break;case 1:a==="("?o=2:Fc.test(a)?h():(f(),o=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+a:o=3:p+=a;break;case 3:f(),o=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,p="";break;default:t("Unknown state");break}}return o===2&&t(`Unfinished custom RegExp for param "${d}"`),f(),i(),s}function jc(e,t,o){const n=Mc(Bc(e.path),o),s=ae(n,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Vc(e,t){const o=[],n=new Map;t=Gs({strict:!1,end:!0,sensitive:!1},t);function s(f){return n.get(f)}function r(f,h,g){const E=!g,P=Gc(f);P.aliasOf=g&&g.record;const B=Gs(t,f),H=[P];if("alias"in f){const Z=typeof f.alias=="string"?[f.alias]:f.alias;for(const ce of Z)H.push(ae({},P,{components:g?g.record.components:P.components,path:ce,aliasOf:g?g.record:P}))}let U,k;for(const Z of H){const{path:ce}=Z;if(h&&ce[0]!=="/"){const O=h.record.path,ue=O[O.length-1]==="/"?"":"/";Z.path=h.record.path+(ce&&ue+ce)}if(U=jc(Z,h,B),g?g.alias.push(U):(k=k||U,k!==U&&k.alias.push(U),E&&f.name&&!Vs(U)&&i(f.name)),Ii(U)&&a(U),P.children){const O=P.children;for(let ue=0;ue<O.length;ue++)r(O[ue],U,g&&g.children[ue])}g=g||U}return k?()=>{i(k)}:oo}function i(f){if(_i(f)){const h=n.get(f);h&&(n.delete(f),o.splice(o.indexOf(h),1),h.children.forEach(i),h.alias.forEach(i))}else{const h=o.indexOf(f);h>-1&&(o.splice(h,1),f.record.name&&n.delete(f.record.name),f.children.forEach(i),f.alias.forEach(i))}}function c(){return o}function a(f){const h=zc(f,o);o.splice(h,0,f),f.record.name&&!Vs(f)&&n.set(f.record.name,f)}function d(f,h){let g,E={},P,B;if("name"in f&&f.name){if(g=n.get(f.name),!g)throw $t(1,{location:f});B=g.record.name,E=ae(js(h.params,g.keys.filter(k=>!k.optional).concat(g.parent?g.parent.keys.filter(k=>k.optional):[]).map(k=>k.name)),f.params&&js(f.params,g.keys.map(k=>k.name))),P=g.stringify(E)}else if(f.path!=null)P=f.path,g=o.find(k=>k.re.test(P)),g&&(E=g.parse(P),B=g.record.name);else{if(g=h.name?n.get(h.name):o.find(k=>k.re.test(h.path)),!g)throw $t(1,{location:f,currentLocation:h});B=g.record.name,E=ae({},h.params,f.params),P=g.stringify(E)}const H=[];let U=g;for(;U;)H.unshift(U.record),U=U.parent;return{name:B,path:P,params:E,matched:H,meta:$c(H)}}e.forEach(f=>r(f));function p(){o.length=0,n.clear()}return{addRoute:r,resolve:d,removeRoute:i,clearRoutes:p,getRoutes:c,getRecordMatcher:s}}function js(e,t){const o={};for(const n of t)n in e&&(o[n]=e[n]);return o}function Gc(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Kc(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Kc(e){const t={},o=e.props||!1;if("component"in e)t.default=o;else for(const n in e.components)t[n]=typeof o=="object"?o[n]:o;return t}function Vs(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function $c(e){return e.reduce((t,o)=>ae(t,o.meta),{})}function Gs(e,t){const o={};for(const n in e)o[n]=n in t?t[n]:e[n];return o}function zc(e,t){let o=0,n=t.length;for(;o!==n;){const r=o+n>>1;Ai(e,t[r])<0?n=r:o=r+1}const s=Jc(e);return s&&(n=t.lastIndexOf(s,n-1)),n}function Jc(e){let t=e;for(;t=t.parent;)if(Ii(t)&&Ai(e,t)===0)return t}function Ii({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function qc(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<n.length;++s){const r=n[s].replace(hi," "),i=r.indexOf("="),c=co(i<0?r:r.slice(0,i)),a=i<0?null:co(r.slice(i+1));if(c in t){let d=t[c];qe(d)||(d=t[c]=[d]),d.push(a)}else t[c]=a}return t}function Ks(e){let t="";for(let o in e){const n=e[o];if(o=hc(o),n==null){n!==void 0&&(t+=(t.length?"&":"")+o);continue}(qe(n)?n.map(r=>r&&An(r)):[n&&An(n)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+o,r!=null&&(t+="="+r))})}return t}function Qc(e){const t={};for(const o in e){const n=e[o];n!==void 0&&(t[o]=qe(n)?n.map(s=>s==null?null:""+s):n==null?n:""+n)}return t}const Zc=Symbol(""),$s=Symbol(""),Kn=Symbol(""),Ci=Symbol(""),Cn=Symbol("");function qt(){let e=[];function t(n){return e.push(n),()=>{const s=e.indexOf(n);s>-1&&e.splice(s,1)}}function o(){e=[]}return{add:t,list:()=>e.slice(),reset:o}}function bt(e,t,o,n,s,r=i=>i()){const i=n&&(n.enterCallbacks[s]=n.enterCallbacks[s]||[]);return()=>new Promise((c,a)=>{const d=h=>{h===!1?a($t(4,{from:o,to:t})):h instanceof Error?a(h):Rc(h)?a($t(2,{from:t,to:h})):(i&&n.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),c())},p=r(()=>e.call(n&&n.instances[s],t,o,d));let f=Promise.resolve(p);e.length<3&&(f=f.then(d)),f.catch(h=>a(h))})}function cn(e,t,o,n,s=r=>r()){const r=[];for(const i of e)for(const c in i.components){let a=i.components[c];if(!(t!=="beforeRouteEnter"&&!i.instances[c]))if(Yc(a)){const p=(a.__vccOpts||a)[t];p&&r.push(bt(p,o,n,i,c,s))}else{let d=a();r.push(()=>d.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${i.path}"`));const f=nc(p)?p.default:p;i.components[c]=f;const g=(f.__vccOpts||f)[t];return g&&bt(g,o,n,i,c,s)()}))}}return r}function Yc(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function zs(e){const t=it(Kn),o=it(Ci),n=$e(()=>{const a=Y(e.to);return t.resolve(a)}),s=$e(()=>{const{matched:a}=n.value,{length:d}=a,p=a[d-1],f=o.matched;if(!p||!f.length)return-1;const h=f.findIndex(Kt.bind(null,p));if(h>-1)return h;const g=Js(a[d-2]);return d>1&&Js(p)===g&&f[f.length-1].path!==g?f.findIndex(Kt.bind(null,a[d-2])):h}),r=$e(()=>s.value>-1&&ou(o.params,n.value.params)),i=$e(()=>s.value>-1&&s.value===o.matched.length-1&&vi(o.params,n.value.params));function c(a={}){return tu(a)?t[Y(e.replace)?"replace":"push"](Y(e.to)).catch(oo):Promise.resolve()}return{route:n,href:$e(()=>n.value.href),isActive:r,isExactActive:i,navigate:c}}const Xc=Mr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:zs,setup(e,{slots:t}){const o=Ho(zs(e)),{options:n}=it(Kn),s=$e(()=>({[qs(e.activeClass,n.linkActiveClass,"router-link-active")]:o.isActive,[qs(e.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:o.isExactActive}));return()=>{const r=t.default&&t.default(o);return e.custom?r:He("a",{"aria-current":o.isExactActive?e.ariaCurrentValue:null,href:o.href,onClick:o.navigate,class:s.value},r)}}}),eu=Xc;function tu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function ou(e,t){for(const o in t){const n=t[o],s=e[o];if(typeof n=="string"){if(n!==s)return!1}else if(!qe(s)||s.length!==n.length||n.some((r,i)=>r!==s[i]))return!1}return!0}function Js(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const qs=(e,t,o)=>e??t??o,nu=Mr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:o}){const n=it(Cn),s=$e(()=>e.route||n.value),r=it($s,0),i=$e(()=>{let d=Y(r);const{matched:p}=s.value;let f;for(;(f=p[d])&&!f.components;)d++;return d}),c=$e(()=>s.value.matched[i.value]);Ao($s,$e(()=>i.value+1)),Ao(Zc,c),Ao(Cn,s);const a=Ee();return Io(()=>[a.value,c.value,e.name],([d,p,f],[h,g,E])=>{p&&(p.instances[f]=d,g&&g!==p&&d&&d===h&&(p.leaveGuards.size||(p.leaveGuards=g.leaveGuards),p.updateGuards.size||(p.updateGuards=g.updateGuards))),d&&p&&(!g||!Kt(p,g)||!h)&&(p.enterCallbacks[f]||[]).forEach(P=>P(d))},{flush:"post"}),()=>{const d=s.value,p=e.name,f=c.value,h=f&&f.components[p];if(!h)return Qs(o.default,{Component:h,route:d});const g=f.props[p],E=g?g===!0?d.params:typeof g=="function"?g(d):g:null,B=He(h,ae({},E,t,{onVnodeUnmounted:H=>{H.component.isUnmounted&&(f.instances[p]=null)},ref:a}));return Qs(o.default,{Component:B,route:d})||B}}});function Qs(e,t){if(!e)return null;const o=e(t);return o.length===1?o[0]:o}const Si=nu;function su(e){const t=Vc(e.routes,e),o=e.parseQuery||qc,n=e.stringifyQuery||Ks,s=e.history,r=qt(),i=qt(),c=qt(),a=ua(ft);let d=ft;Ot&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=an.bind(null,y=>""+y),f=an.bind(null,gc),h=an.bind(null,co);function g(y,D){let x,R;return _i(y)?(x=t.getRecordMatcher(y),R=D):R=y,t.addRoute(R,x)}function E(y){const D=t.getRecordMatcher(y);D&&t.removeRoute(D)}function P(){return t.getRoutes().map(y=>y.record)}function B(y){return!!t.getRecordMatcher(y)}function H(y,D){if(D=ae({},D||a.value),typeof y=="string"){const u=ln(o,y,D.path),m=t.resolve({path:u.path},D),_=s.createHref(u.fullPath);return ae(u,m,{params:h(m.params),hash:co(u.hash),redirectedFrom:void 0,href:_})}let x;if(y.path!=null)x=ae({},y,{path:ln(o,y.path,D.path).path});else{const u=ae({},y.params);for(const m in u)u[m]==null&&delete u[m];x=ae({},y,{params:f(u)}),D.params=f(D.params)}const R=t.resolve(x,D),ie=y.hash||"";R.params=p(h(R.params));const he=yc(n,ae({},y,{hash:fc(ie),path:R.path})),l=s.createHref(he);return ae({fullPath:he,hash:ie,query:n===Ks?Qc(y.query):y.query||{}},R,{redirectedFrom:void 0,href:l})}function U(y){return typeof y=="string"?ln(o,y,a.value.path):ae({},y)}function k(y,D){if(d!==y)return $t(8,{from:D,to:y})}function Z(y){return ue(y)}function ce(y){return Z(ae(U(y),{replace:!0}))}function O(y){const D=y.matched[y.matched.length-1];if(D&&D.redirect){const{redirect:x}=D;let R=typeof x=="function"?x(y):x;return typeof R=="string"&&(R=R.includes("?")||R.includes("#")?R=U(R):{path:R},R.params={}),ae({query:y.query,hash:y.hash,params:R.path!=null?{}:y.params},R)}}function ue(y,D){const x=d=H(y),R=a.value,ie=y.state,he=y.force,l=y.replace===!0,u=O(x);if(u)return ue(ae(U(u),{state:typeof u=="object"?ae({},ie,u.state):ie,force:he,replace:l}),D||x);const m=x;m.redirectedFrom=D;let _;return!he&&_c(n,R,x)&&(_=$t(16,{to:m,from:R}),Qe(R,R,!0,!1)),(_?Promise.resolve(_):te(m,R)).catch(v=>ot(v)?ot(v,2)?v:ct(v):se(v,m,R)).then(v=>{if(v){if(ot(v,2))return ue(ae({replace:l},U(v.to),{state:typeof v.to=="object"?ae({},ie,v.to.state):ie,force:he}),D||m)}else v=N(m,R,!0,l,ie);return de(m,R,v),v})}function ye(y,D){const x=k(y,D);return x?Promise.reject(x):Promise.resolve()}function K(y){const D=Mt.values().next().value;return D&&typeof D.runWithContext=="function"?D.runWithContext(y):y()}function te(y,D){let x;const[R,ie,he]=ru(y,D);x=cn(R.reverse(),"beforeRouteLeave",y,D);for(const u of R)u.leaveGuards.forEach(m=>{x.push(bt(m,y,D))});const l=ye.bind(null,y,D);return x.push(l),We(x).then(()=>{x=[];for(const u of r.list())x.push(bt(u,y,D));return x.push(l),We(x)}).then(()=>{x=cn(ie,"beforeRouteUpdate",y,D);for(const u of ie)u.updateGuards.forEach(m=>{x.push(bt(m,y,D))});return x.push(l),We(x)}).then(()=>{x=[];for(const u of he)if(u.beforeEnter)if(qe(u.beforeEnter))for(const m of u.beforeEnter)x.push(bt(m,y,D));else x.push(bt(u.beforeEnter,y,D));return x.push(l),We(x)}).then(()=>(y.matched.forEach(u=>u.enterCallbacks={}),x=cn(he,"beforeRouteEnter",y,D,K),x.push(l),We(x))).then(()=>{x=[];for(const u of i.list())x.push(bt(u,y,D));return x.push(l),We(x)}).catch(u=>ot(u,8)?u:Promise.reject(u))}function de(y,D,x){c.list().forEach(R=>K(()=>R(y,D,x)))}function N(y,D,x,R,ie){const he=k(y,D);if(he)return he;const l=D===ft,u=Ot?history.state:{};x&&(R||l?s.replace(y.fullPath,ae({scroll:l&&u&&u.scroll},ie)):s.push(y.fullPath,ie)),a.value=y,Qe(y,D,x,l),ct()}let ne;function _e(){ne||(ne=s.listen((y,D,x)=>{if(!fo.listening)return;const R=H(y),ie=O(R);if(ie){ue(ae(ie,{replace:!0}),R).catch(oo);return}d=R;const he=a.value;Ot&&Pc(Ms(he.fullPath,x.delta),Jo()),te(R,he).catch(l=>ot(l,12)?l:ot(l,2)?(ue(l.to,R).then(u=>{ot(u,20)&&!x.delta&&x.type===uo.pop&&s.go(-1,!1)}).catch(oo),Promise.reject()):(x.delta&&s.go(-x.delta,!1),se(l,R,he))).then(l=>{l=l||N(R,he,!1),l&&(x.delta&&!ot(l,8)?s.go(-x.delta,!1):x.type===uo.pop&&ot(l,20)&&s.go(-1,!1)),de(R,he,l)}).catch(oo)}))}let Ve=qt(),be=qt(),le;function se(y,D,x){ct(y);const R=be.list();return R.length?R.forEach(ie=>ie(y,D,x)):console.error(y),Promise.reject(y)}function tt(){return le&&a.value!==ft?Promise.resolve():new Promise((y,D)=>{Ve.add([y,D])})}function ct(y){return le||(le=!y,_e(),Ve.list().forEach(([D,x])=>y?x(y):D()),Ve.reset()),y}function Qe(y,D,x,R){const{scrollBehavior:ie}=e;if(!Ot||!ie)return Promise.resolve();const he=!x&&Ec(Ms(y.fullPath,0))||(R||!x)&&history.state&&history.state.scroll||null;return Er().then(()=>ie(y,D,he)).then(l=>l&&xc(l)).catch(l=>se(l,y,D))}const De=y=>s.go(y);let Wt;const Mt=new Set,fo={currentRoute:a,listening:!0,addRoute:g,removeRoute:E,clearRoutes:t.clearRoutes,hasRoute:B,getRoutes:P,resolve:H,options:e,push:Z,replace:ce,go:De,back:()=>De(-1),forward:()=>De(1),beforeEach:r.add,beforeResolve:i.add,afterEach:c.add,onError:be.add,isReady:tt,install(y){const D=this;y.component("RouterLink",eu),y.component("RouterView",Si),y.config.globalProperties.$router=D,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Y(a)}),Ot&&!Wt&&a.value===ft&&(Wt=!0,Z(s.location).catch(ie=>{}));const x={};for(const ie in ft)Object.defineProperty(x,ie,{get:()=>a.value[ie],enumerable:!0});y.provide(Kn,D),y.provide(Ci,_r(x)),y.provide(Cn,a);const R=y.unmount;Mt.add(y),y.unmount=function(){Mt.delete(y),Mt.size<1&&(d=ft,ne&&ne(),ne=null,a.value=ft,Wt=!1,le=!1),R()}}};function We(y){return y.reduce((D,x)=>D.then(()=>K(x)),Promise.resolve())}return fo}function ru(e,t){const o=[],n=[],s=[],r=Math.max(t.matched.length,e.matched.length);for(let i=0;i<r;i++){const c=t.matched[i];c&&(e.matched.find(d=>Kt(d,c))?n.push(c):o.push(c));const a=e.matched[i];a&&(t.matched.find(d=>Kt(d,a))||s.push(a))}return[o,n,s]}const Ie=(e,t)=>{const o=e.__vccOpts||e;for(const[n,s]of t)o[n]=s;return o},iu={__name:"App",setup(e){return(t,o)=>(V(),Ko(Y(Si)))}},au=Ie(iu,[["__scopeId","data-v-0b57781d"]]),lu={class:"app-header"},cu={class:"container"},uu={class:"app-header-nav",style:{"list-style":"none"}},du={__name:"LayoutHeader",setup(e){return(t,o)=>{const n=Eo("RouterLink");return V(),q("header",lu,[b("div",cu,[b("ul",uu,[b("li",null,[S(n,{to:"/"},{default:ee(()=>[$("WebAPI")]),_:1})]),b("li",null,[S(n,{to:"/kaiWebapi2"},{default:ee(()=>[$("WebAPI2")]),_:1})]),b("li",null,[S(n,{to:"/vue3"},{default:ee(()=>[$("Vue3")]),_:1})]),b("li",null,[S(n,{to:"/download"},{default:ee(()=>[$("下載")]),_:1})]),b("li",null,[S(n,{to:"/others"},{default:ee(()=>[$("其他")]),_:1})]),b("li",null,[S(n,{to:"/dotnet7_vue3"},{default:ee(()=>[$("Dotnet7_vue3")]),_:1})]),b("li",null,[S(n,{to:"/vscode_function"},{default:ee(()=>[$("VS Code小功能")]),_:1})]),b("li",null,[S(n,{to:"/video"},{default:ee(()=>[$("Video")]),_:1})]),b("li",null,[S(n,{to:"/es6"},{default:ee(()=>[$("ES6")]),_:1})]),b("li",null,[S(n,{to:"/Naive_ui"},{default:ee(()=>[$("Naive-ui")]),_:1})]),b("li",null,[S(n,{to:"/dotnetapi_angular"},{default:ee(()=>[$("DotnetAPI_Angular")]),_:1})]),b("li",null,[S(n,{to:"/AI"},{default:ee(()=>[$("AI")]),_:1})])])])])}}},pu=Ie(du,[["__scopeId","data-v-2ea20cef"]]),fu=b("hr",null,null,-1),hu={__name:"index",setup(e){return(t,o)=>{const n=Eo("RouterView");return V(),q(J,null,[S(pu),fu,S(n)],64)}}},mu="/vue-my-note/assets/uparrow-CelNzM_b.png",gu={name:"scroll-top",data(){return{scrollTop:0,time:0,dParams:20,scrollState:0}},computed:{showTop:function(){return this.scrollTop>200}},mounted(){window.addEventListener("scroll",this.getScrollTop)},methods:{toTop(e){if(this.scrollState)return;this.scrollState=1,e.preventDefault(),document.documentElement.scrollTop||document.body.scrollTop;let t=this;this.time=setInterval(function(){t.gotoTop(t.scrollTop-t.dParams)},30)},gotoTop(e){this.dParams+=20,e=e>0?e:0,document.documentElement.scrollTop=document.body.scrollTop=window.pageYOffset=e,this.scrollTop<10&&(clearInterval(this.time),this.dParams=20,this.scrollState=0)},getScrollTop(){this.scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop}}},bu=e=>(Be("data-v-77d80545"),e=e(),je(),e),vu=bu(()=>b("img",{src:mu},null,-1)),yu=[vu];function _u(e,t,o,n,s,r){return V(),q("div",{class:"scrollTop",onClick:t[0]||(t[0]=(...i)=>r.toTop&&r.toTop(...i))},yu)}const z=Ie(gu,[["render",_u],["__scopeId","data-v-77d80545"]]),wu=e=>(Be("data-v-17862d76"),e=e(),je(),e),Au=wu(()=>b("div",null,"我是WebAPI頁面",-1)),Iu=`
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
            
          新增資料夾 Filters

          定義一個回傳的DTO: 
          publc class ReturnJson
          {
            public dynamic Data {get; set;}
            public int HttpCode {get; set;}
            public string ErrorMessage {get; set;}
          }

          新增檔案 -- 簡易型登入認證
          public class TodoAuthorizationFilter: Attribute, IAuthorizationFilter
          {
            public void OnAuthorization(AuthorizationFilterContest context)
            {
              bool tokenFlag = context.HttpContext.Request.Headers.TryGetValue("Authorization", out StringValues outValue);

              var ignore = (from a in context.ActionDescriptor.EndPointMetadata
                          where a.GetType()==typeof(AllowAnonymousAttribute)
                          select a).FirstOrDefault();

              if(ignore == null)
              {
                if(tokenFlag)
                {
                  //jwt 驗證
                  if(outValue != "123")
                  {
                    //這裡Result程式就不會往下走
                    constext.Result = new JsonResult(new ReturnJson()
                    {
                      Data="test1",
                      HttpCode = 401,
                      ErrorMessage = "沒有登入"
                    });
                  }
                }else{
                  constext.Result = new JsonResult(new ReturnJson()
                  {
                    Data="test2",
                    HttpCode = 401,
                    ErrorMessage = "沒有登入"
                  });
                }
              }
            }
          }

          //[TypeFilter(typeof(TodoAuthorization))]
          [TodoAuthorizationFilter]  // 因為繼承了Attribute, 就可以這樣寫
          [HttpGet] 
          // 應該要放在全域的地方

          // 設定檔設定：program.cs
          service.AddMvc(options => {
            //options.Filters.Add(new AuthorizationFilter());
            options.Filters.Add(new TodoAuthorizationFilter());
          });
          // 全部的Api都受到控管
          // Login不能受到控管
          [AllowAnonymous]  // 在login上匿名標籤，就不會受到驗證控管


          //TodoAuthorizationFilter2
          public class TodoAuthorizationFilter2: Attribute, IAuthorizationFilter
          {
           ly TodoContext _todoContet;
            public string Roles = "";
            // public TodoAuthorizationFilter2(TodoContext todoContext)
            // {
            //   _todoContet = todoContext
            // }
            public void OnAuthorization(AuthorizationFilterContest context)
            {
              TodoContext _todoContet = (TodoContext)context.HttpContext.RequestServices.GetService(typeof(TodoContext));

              // 取得資料庫資料 _todoContet
              var role = ()from a in _todoContet.Roles
                          where a.Name == Roles
                          && a.Empployee == 看是誰進來的Id
                          select a).FirstOrDefault();
              if(role == null)
              {
                constext.Result = new JsonResult(new ReturnJson()
                {
                  Data = Roles,
                  HttpCode = 401,
                  ErrorMessage = "沒有登入"
                });
              }
            }
          }

          [TodoAuthorizationFilter2(Roles="aaa")]          
          <a href="https://www.youtube.com/watch?v=XFkR101v3zI&list=PLneJIGUTIItsqHp_8AbKWb7gyWDZ6pQyz&index=68" target="_blank">
          68.【13.Filter】ASP.NET Core Web API 入門教學(13_3) - ResourceFilter之檢查檔案大小及副檔名</a>
          
          檔案的邏輯檢查
          
          public class FileLimitAttribute : Attribute, IResourceFilter
          {
            public long Size = 100000;
            public FileLimitAttribute(long size=1000)
            {
              Size = size;
            }

            public void OnResourceExecuted(ResourceExecutedContext context)
            {
            }
            public void OnResourceExecuting(ResourceExecutedContext context)
            {
              var files = context.HttpContext.Request.Form.Files;
              foreach(var temp in files)
              {
                if(temp.Length > (1024 * 1024 * Size))
                {
                  // 這裡直接回傳
                  constext.Result = new JsonResult(new ReturnJson()
                  {
                    Data = "test1",
                    HttpCode = 400,
                    ErrorMessage = "檔案太大囉"
                  });
                }

                if(Path.GetExtension(temp.FileName)!= ".mp4")
                {
                  // 這裡直接回傳
                  constext.Result = new JsonResult(new ReturnJson()
                  {
                    Data = "test1",
                    HttpCode = 400,
                    ErrorMessage = "只允許上傳mp4"
                  });
                }
              }
            }
          }

          // 上傳檔案的Api
          [HttpPost]
          //[FileLimit(Size = 1)] // 只能傳1mb的檔案
          [FileLimit(1)] // 只能傳1mb的檔案，用建構子的方式傳送
          public void Post([FromForm] IFormFileCollectino file, [FromForm] Guid id)
          {
            string rootRoot = _env.ContentRootPath + @"\\wwwroot\\UploadFiles\\" + id + "\\";

            if(!Directory.Exists(rootRoot))
            {
              Directory.CreateDirectory(rootRoot);
            }
          }


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
  `,Cu={__name:"index",setup(e){return z.scrollToTop=!0,(t,o)=>(V(),q(J,null,[Au,b("div",null,[b("div",{innerHTML:Iu})]),S(z)],64))}},Su=Ie(Cu,[["__scopeId","data-v-17862d76"]]),Tu=`
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
`,xu={__name:"TodoListEditDtoAbstract",setup(e){return z.scrollToTop=!0,(t,o)=>(V(),q(J,null,[b("div",{innerHTML:Tu}),S(z)],64))}},Pu=`
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
`,Eu={__name:"AsyncController",setup(e){return z.scrollToTop=!0,(t,o)=>(V(),q(J,null,[b("div",{innerHTML:Pu}),S(z)],64))}},Du=`
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
`,Lu={__name:"AuthController",setup(e){return z.scrollToTop=!0,(t,o)=>(V(),q(J,null,[b("div",{innerHTML:Du}),S(z)],64))}},ku={id:"Vite_to_github",class:"content"},Nu={class:"title"},Ru={key:0},Uu={class:"title"},Wu={key:0},Mu={class:"title"},Hu={key:0},Ou={__name:"index",setup(e){let t=Ee(!1),o=Ee(!1),n=Ee(!1);return z.scrollToTop=!0,(s,r)=>(V(),q(J,null,[b("div",ku,[b("div",Nu,[$("1.DeployVite "),b("button",{onClick:r[0]||(r[0]=i=>ge(t)?t.value=!Y(t):t=!Y(t))},"Toggle"),S(ze,null,{default:ee(()=>[Y(t)?(V(),q("div",Ru,[S(xu)])):st("",!0)]),_:1})]),b("div",Uu,[$("2.AsyncController "),b("button",{onClick:r[1]||(r[1]=i=>ge(o)?o.value=!Y(o):o=!Y(o))},"Toggle"),S(ze,null,{default:ee(()=>[Y(o)?(V(),q("div",Wu,[S(Eu)])):st("",!0)]),_:1})]),b("div",Mu,[$("3.AsyncController "),b("button",{onClick:r[2]||(r[2]=i=>ge(n)?n.value=!Y(n):n=!Y(n))},"Toggle"),S(ze,null,{default:ee(()=>[Y(n)?(V(),q("div",Hu,[S(Lu)])):st("",!0)]),_:1})])]),S(z)],64))}},Fu=Ie(Ou,[["__scopeId","data-v-b5f5b106"]]),Bu=b("div",null,"我是RabbitVue3頁面",-1),ju=`
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
`,Vu={__name:"index",setup(e){return z.scrollToTop=!0,(t,o)=>(V(),q(J,null,[Bu,b("div",{innerHTML:ju}),S(z)],64))}},Gu={},Ku=$o('<div data-v-ff3ccd06>我是Download頁面</div><div id="Vue3" class="content" data-v-ff3ccd06><div class="box" data-v-ff3ccd06><div style="padding-top:20px;" data-v-ff3ccd06>【Vue3】</div><div data-v-ff3ccd06><a href="https://www.youtube.com/watch?v=LlYhPO8Ti2U" target="_blank" data-v-ff3ccd06> 1.NET7 Web API | SQL Database | VueJS(3.0) - Composition API | CRUD| Full Video<span class="pdf" data-v-ff3ccd06>YouTube</span></a><p data-v-ff3ccd06>.解決CORS問題</p></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=19m0QpipH0fPS51aztlgZ0gFxwWkSpqo_" data-v-ff3ccd06> 1.dotnet7_vue3<span class="pdf" data-v-ff3ccd06>download&gt;</span></a></div><div data-v-ff3ccd06><a href="https://www.youtube.com/watch?v=2FoD_8dMGyU&amp;list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG" target="_blank" data-v-ff3ccd06> 2.【黑馬程序員】前端Vue3小兔鮮實戰項目<span class="pdf" data-v-ff3ccd06>YouTube</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=10LPanB6adG6BLF0cKcM3H-VCSvUWwf8A" data-v-ff3ccd06> 3.vue-rabbit_my 小兔鮮<span class="pdf" data-v-ff3ccd06>download</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=1AXgm42kcojPX2g7EfrSmHyb-N1BJAAMi" data-v-ff3ccd06> 4.vue-rabbit_sku 小兔鮮<span class="pdf" data-v-ff3ccd06>download</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=18N6U0JeeUsS6EhGGz2jvh3aZK41L-uBc" data-v-ff3ccd06> 5.vue3-basic-project-my(mock)<span class="pdf" data-v-ff3ccd06>download</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=1Xe_GxmzXJVSIxMnqw3cm15YkLLQc4tWD" data-v-ff3ccd06> 6.vue3-basic-project-my(有驗證名字不能重覆update)<span class="pdf" data-v-ff3ccd06>download</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=1551IhmQAwld3cmTH60XHFYvEbvCj2Hfo" data-v-ff3ccd06> 7.台灣濕地學會<span class="pdf" data-v-ff3ccd06>download</span></a></div><div style="padding-top:20px;" data-v-ff3ccd06>【WebAPI】</div><div data-v-ff3ccd06><a href="https://blog.talllkai.com/ASPNETCore" target="_blank" data-v-ff3ccd06> 1.完整且輕鬆學習ASP.NET Core Web API<span class="pdf" data-v-ff3ccd06>Web</span></a></div><div data-v-ff3ccd06><a href="https://www.youtube.com/watch?v=dXUfZuf1Wp4&amp;list=PLneJIGUTIItuqdxuDBEKCrvXCtCdUf_Xm" target="_blank" data-v-ff3ccd06> 2.ASP.NET Core Web API 入門教學<span class="pdf" data-v-ff3ccd06>YouTube</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=1Mi3nQijxvyz6TmA7NWzkudmxeJha7W-e" data-v-ff3ccd06> 3.DataBase_First_凱哥<span class="pdf" data-v-ff3ccd06>download</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=1ZvJ5hwHCPzPRMsv_w3sWJOxKYI88h8xd" data-v-ff3ccd06> 4.BookMark<span class="pdf" data-v-ff3ccd06>download</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=1Oiyo9Pgg-qCY6mkY9L0WDVmAc3VQYeeP" data-v-ff3ccd06> 5.無蝦米download<span class="pdf" data-v-ff3ccd06>download</span></a></div></div></div>',2);function $u(e,t){return Ku}const zu=Ie(Gu,[["render",$u],["__scopeId","data-v-ff3ccd06"]]),Ju=`
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
`,Ti={__name:"_4_deployVite",setup(e){return z.scrollToTop=!0,(t,o)=>(V(),q(J,null,[b("div",{innerHTML:Ju}),S(z)],64))}},qu=`
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
`,Qu={__name:"_10_vue3_is",setup(e){return z.scrollToTop=!0,(t,o)=>(V(),q(J,null,[b("div",{innerHTML:qu}),S(z)],64))}},Zu=`
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
`,Yu={__name:"_11_vue3_is",setup(e){return z.scrollToTop=!0,(t,o)=>(V(),q(J,null,[b("div",{innerHTML:Zu}),S(z)],64))}},Xu=`
    <div id="Vite_to_github" style="display:flex; justify-content: center; background-color: #282923; color:#c1cccc; font-size: 14px;">
      <pre>
//===============================================================================================//
Nuget 安裝 Quartz, Quartz.Extensions.Hosting

建立一個類
LoggingJob.cs

using Quartz;

namespace Quartz介紹
{
    [DisallowConcurrentExecution]
    public class LoggingJob : IJob
    {
        public async Task Execute(IJobExecutionContext context)
        {
            Console.WriteLine(DateTime.Now.ToString("mm:ss:ffff"));
            Console.WriteLine("Hello from Quartz.Net!");
            await Task.Delay(1500);
            Console.WriteLine("end");
            //return Task.CompletedTask;
        }
    }
}


Program.cs 加上
// 增加Quartz
builder.Services.AddQuartz(option =>
{
    JobKey jobKey = JobKey.Create(nameof(LoggingJob));
    option.AddJob<LoggingJob>(jobKey).AddTrigger(trigger =>
    {
        //trigger.ForJob(jobKey).WithSimpleSchedule(s =>
        //{
        //    s.WithIntervalInSeconds(1).RepeatForever();
        //    //s.WithInterval(TimeSpan.FromSeconds(1));
        //});
        
        //秒 分 時 日 月 週 [年]
        //trigger.ForJob(jobKey).WithCronSchedule("*/3 * * * * ? */1"); // 每2秒執行一次，默認以1開始
        //trigger.ForJob(jobKey).WithCronSchedule("0/3 * * * * ? */1"); // 每2秒執行一次，以0開始
        //trigger.ForJob(jobKey).WithCronSchedule("10-30/5 * * * * ? */1"); // 10到30秒執行，每5秒鐘執行
        trigger.ForJob(jobKey).WithCronSchedule("* 40,41 * * * ? */1"); // 40到41分鐘執行，每1秒鐘執行
    });
});
builder.Services.AddQuartzHostedService(options =>
{
    options.WaitForJobsToComplete = true;
    options.AwaitApplicationStarted = true;
});


================================================================
方法二：
新增一個類別庫Infrastructure
新增3個檔案
1.DependencyInjection.cs
2.LoggingBackgroundJob.cs
3.LoggingBackgroundJobSetup.cs 
最後在Program.cs加上
using Infrastructure;
// 增加Quartz
builder.Services.AddInfrastructure();

1.DependencyInjection.cs

using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Quartz;

namespace Infrastructure
{
    public static class DependencyInjection
    {
        public static void AddInfrastructure(this IServiceCollection services)
        {
            // 注入依賴關係
            services.AddQuartz(options =>
            {
                options.UseMicrosoftDependencyInjectionJobFactory();

                //.WithCronSchedule("*/1 * * * * *"))
                //var jobKey = JobKey.Create(nameof(LoggingBackgroundJob));
                //options.AddJob<LoggingBackgroundJob>(jobKey)
                //.AddTrigger(trigger =>
                //    trigger
                //        .ForJob(jobKey)
                //        .WithSimpleSchedule(schedule =>
                //            schedule.WithIntervalInSeconds(1).RepeatForever()));
            });
            
            // 注入依賴關係
            services.AddQuartzHostedService(options =>
            {
                options.WaitForJobsToComplete = true;
                options.AwaitApplicationStarted = true;
            });

            services.ConfigureOptions<LoggingBackgroundJobSetup>();
        }
    }
}

2.LoggingBackgroundJob.cs

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Quartz;

namespace Infrastructure
{
    // 添加Job任務
    [DisallowConcurrentExecution]
    public class LoggingBackgroundJob : IJob
    {
        private readonly ILogger<LoggingBackgroundJob> _logger;

        public LoggingBackgroundJob(ILogger<LoggingBackgroundJob> logger)
        {
            _logger = logger;
        }

        public Task Execute(IJobExecutionContext context)
        {
            _logger.LogInformation("{UtcNow}", DateTime.UtcNow);

            return Task.CompletedTask;
        }
    }
}

3.LoggingBackgroundJobSetup.cs 

using Microsoft.Extensions.Options;
using Quartz;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure
{
    public class LoggingBackgroundJobSetup : IConfigureOptions<QuartzOptions>
    {
        public void Configure(QuartzOptions options)
        {
            var jobKey = JobKey.Create(nameof(LoggingBackgroundJob));
            // service中，添加任務
            options.AddJob<LoggingBackgroundJob>(jobBuilder => jobBuilder.WithIdentity(jobKey))
            .AddTrigger(trigger =>
                trigger
                    .ForJob(jobKey)
                    .WithSimpleSchedule(schedule =>
                        schedule.WithIntervalInSeconds(1).RepeatForever()));
        }
    }
}



    </pre>
  </div>
`,ed={__name:"_16_Quartz",setup(e){return z.scrollToTop=!0,(t,o)=>(V(),q(J,null,[b("div",{innerHTML:Xu}),S(z)],64))}},td=`
    <div id="Vite_to_github" style="display:flex; justify-content: center; background-color: #282923; color:#c1cccc; font-size: 14px;">
      <pre>
//===============================================================================================//
在Program.cs
加上

builder.Services.AddCors(c=>c.AddPolicy("any", p=>p.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin()));

app.UseCors();

在Controller裡 加上
[EnableCors("any")]

在html
<"div id="app">
    {{userName}}
    <"button @click="onGetValue">獲取數據<"/button>
<"/div>
<"script>
    const { createApp, ref } = Vue;
    const app = createApp({
        setup(){
            const userName = ref("Ace");
            const onGetValue = () => {
                axios.post("http://localhost:5117/api/Test/Get/666-ace")
                    .then(res=>{
                        userName.value = res.data;
                    })
                return { userName, onGetValue };
            }
        }
    })
<"/script>

    </pre>
  </div>
`,od={__name:"_17_Cors",setup(e){return z.scrollToTop=!0,(t,o)=>(V(),q(J,null,[b("div",{innerHTML:td}),S(z)],64))}},Zs={__name:"HelloWorld",props:["msg2"],emits:["foo"],setup(e,{emit:t}){const o=t;return setTimeout(()=>{o("foo","onFoo")},2e3),(n,s)=>(V(),q("div",null,[Xo(n.$slots,"default",{},()=>[$("5.HelloWorld.vue")]),$(" "+at(e.msg2)+" ",1),Xo(n.$slots,"default"),Xo(n.$slots,"footer",{msg3:" + msg3 footer props"},()=>[$("footer")])]))}},Se=e=>(Be("data-v-fb538a84"),e=e(),je(),e),nd=Se(()=>b("div",null,"這是其他頁",-1)),sd=Se(()=>b("div",null,"3.2222",-1)),rd=Se(()=>b("div",null,"4.2222",-1)),id=Se(()=>b("div",null,"5.App傳遞的默認插槽",-1)),ad={id:"Vite_to_github",class:"content"},ld=Se(()=>b("div",null,[$("1.Vue3 CRUD + bootstrap "),b("a",{href:"https://www.youtube.com/watch?v=PrKh6GemOyg",target:"_blank"}," https://www.youtube.com/watch?v=PrKh6GemOyg ")],-1)),cd=Se(()=>b("div",null,[$("2.Vue3 學習筆記 "),b("a",{href:"https://hackmd.io/@Lin-Jay/S1xju_nKO",target:"_blank"}," https://hackmd.io/@Lin-Jay/S1xju_nKO ")],-1)),ud=Se(()=>b("div",null,[$("3.Build app using Vue JS, .NET Core Web API and Microsoft SQL Server(create Azure) "),b("a",{href:"https://www.youtube.com/watch?v=TMmhECU3rHs",target:"_blank"}," https://www.youtube.com/watch?v=TMmhECU3rHs ")],-1)),dd=Se(()=>b("a",{href:"https://www.youtube.com/watch?v=yo2bMGnIKE8",target:"_blank"}," https://www.youtube.com/watch?v=yo2bMGnIKE8 ",-1)),pd={key:0},fd=$o('<div data-v-fb538a84>5.先學 axios 基礎與封裝管理 API <a href="https://ithelp.ithome.com.tw/articles/10304656" target="_blank" data-v-fb538a84> https://ithelp.ithome.com.tw/articles/10304656 </a></div><div data-v-fb538a84>6.[C#][ASP.NET] Web API 開發心得 (7) - 使用 Token 進行 API 授權驗證 <a href="https://ithelp.ithome.com.tw/articles/10199102" target="_blank" data-v-fb538a84> https://ithelp.ithome.com.tw/articles/10199102 </a></div><div data-v-fb538a84>7.Poy Chang Trial and Error <a href="https://blog.poychang.net/categories/" target="_blank" data-v-fb538a84> https://blog.poychang.net/categories/ </a></div><div data-v-fb538a84>8.阿里巴巴向量圖標庫: iconfont <a href="https://www.iconfont.cn/" target="_blank" data-v-fb538a84> https://www.iconfont.cn/ </a></div><div data-v-fb538a84>9.VueUse 中文文檔 <a href="https://vueuse.pages.dev/" target="_blank" data-v-fb538a84> https://vueuse.pages.dev/ </a></div><div data-v-fb538a84>9.vue3 is我意想不到的用法 <a href="https://segmentfault.com/a/1190000044532342" target="_blank" data-v-fb538a84> https://segmentfault.com/a/1190000044532342 </a></div>',6),hd=Se(()=>b("a",{href:"https://blog.csdn.net/kuang_nu/article/details/128834690",target:"_blank"}," https://blog.csdn.net/kuang_nu/article/details/128834690 ",-1)),md={key:0},gd=Se(()=>b("a",{href:"https://www.bilibili.com/video/BV166421Z7nU/",target:"_blank"}," https://www.bilibili.com/video/BV166421Z7nU/ ",-1)),bd={key:0},vd=Se(()=>b("div",null,[$("12.Master xUnit Like A Pro in Under 10 Minutes! "),b("a",{href:"https://www.youtube.com/watch?v=rohq-Wqj0yI",target:"_blank"}," https://www.youtube.com/watch?v=rohq-Wqj0yI ")],-1)),yd=Se(()=>b("div",null,[$("13.Native UI - 表單 "),b("a",{href:"https://www.naiveui.com/zh-CN/os-theme/components/form#inline.vue",target:"_blank"}," https://www.naiveui.com/zh-CN/os-theme/components/form#inline.vue ")],-1)),_d=Se(()=>b("div",null,[$("14.Vue3 如何用 defineModel 實作 props/ emit 的父子元件傳值，讓傳值變得更方便簡單 "),b("a",{href:"https://muki.tw/vmodel-definemodel-props-emit/",target:"_blank"}," https://muki.tw/vmodel-definemodel-props-emit/ ")],-1)),wd=Se(()=>b("div",null,[$("15.Vue3 獲取子組件dom "),b("a",{href:"https://wenku.csdn.net/answer/6j4iqoam25?ydreferer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8%3D",target:"_blank"}," https://wenku.csdn.net/answer/6j4iqoam25?ydreferer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8%3D ")],-1)),Ad=Se(()=>b("a",{href:"https://www.bilibili.com/video/BV1G94y1b7JH/?vd_source=1a5937a80fc962029ba6a7b9ee9a1654",target:"_blank"}," https://www.bilibili.com/video/BV1G94y1b7JH/?vd_source=1a5937a80fc962029ba6a7b9ee9a1654 ",-1)),Id=Se(()=>b("a",{href:"https://www.youtube.com/watch?v=iD3jrj3RBuc&t=118s",target:"_blank"}," Scheduling Background Tasks In .NET With Quartz-https://www.youtube.com/watch?v=iD3jrj3RBuc&t=118s ",-1)),Cd={key:0},Sd=Se(()=>b("a",{href:"https://ithelp.ithome.com.tw/articles/10245157",target:"_blank"}," https://ithelp.ithome.com.tw/articles/10245157 ",-1)),Td={key:0},xd={__name:"index",setup(e){let t=Ee(!1),o=Ee(!1),n=Ee(!1),s=Ee(!1),r=Ee(!1);const i=Ee("1.Hello Vue3 + Vite"),c=He("div",{style:{color:"red"}},[He("span","1.Hello World")],[He("p","1.這是一個標籤")]);setTimeout(()=>{i.value="3.111"},2e3);const a=f=>He("div",{style:{color:"red"}},f.count),d=(f,{slots:h})=>{var E,P;const g=Ee("4.aaa");return He("div",{style:{color:"red"},onClick(){console.log("click")},onMousedown(){console.log("mousedown")}},[(E=h==null?void 0:h.header)==null?void 0:E.call(h,g.value),"4.container",(P=h==null?void 0:h.default)==null?void 0:P.call(h)])},p=(f,{slots:h})=>He(Zs,{msg2:"App傳遞的msg2",onFoo(g){console.log("響應的事件foo",g)}},{default:h.default,footer:()=>He(Zs,null,{default:()=>He("div","5.嵌套的默認插槽"),footer:({msg3:g})=>He("div","5.嵌套的footer"+g)})});return z.scrollToTop=!0,(f,h)=>(V(),q(J,null,[nd,(V(),Ko(La(Y(c)))),S(a,{count:3.1},{default:ee(()=>[sd]),_:1}),S(d,{count:4.1},{header:ee(g=>[b("div",null,"4.header "+at(g),1)]),default:ee(()=>[rd]),_:1}),S(p,null,{default:ee(()=>[id]),_:1}),b("div",ad,[ld,cd,ud,b("div",null,[$("4.How to Deploy Your Vite App to Github Pages "),dd,b("button",{onClick:h[0]||(h[0]=g=>ge(t)?t.value=!Y(t):t=!Y(t))},"Toggle"),S(ze,null,{default:ee(()=>[Y(t)?(V(),q("div",pd,[S(Ti)])):st("",!0)]),_:1})]),fd,b("div",null,[$("10.Vue3 動態組件 標籤和:is 的用法 "),hd,b("button",{onClick:h[1]||(h[1]=g=>ge(o)?o.value=!Y(o):o=!Y(o))},"Toggle"),S(ze,null,{default:ee(()=>[Y(o)?(V(),q("div",md,[S(Qu)])):st("",!0)]),_:1})]),b("div",null,[$("11.Vue3 h函數的使用(必看) "),gd,b("button",{onClick:h[2]||(h[2]=g=>ge(n)?n.value=!Y(n):n=!Y(n))},"Toggle"),S(ze,null,{default:ee(()=>[Y(n)?(V(),q("div",bd,[S(Yu)])):st("",!0)]),_:1})]),vd,yd,_d,wd,b("div",null,[$("16.Quartz與Cron表達式管理後台任務執行 "),Ad,Id,b("button",{onClick:h[3]||(h[3]=g=>ge(s)?s.value=!Y(s):s=!Y(s))},"Toggle"),S(ze,null,{default:ee(()=>[Y(s)?(V(),q("div",Cd,[S(ed)])):st("",!0)]),_:1})]),b("div",null,[$("17.CORS 跨來源資源共用 - 我與 ASP.NET Core 3 的 30天 "),Sd,b("button",{onClick:h[4]||(h[4]=g=>ge(r)?r.value=!Y(r):r=!Y(r))},"Toggle"),S(ze,null,{default:ee(()=>[Y(r)?(V(),q("div",Td,[S(od)])):st("",!0)]),_:1})])]),S(z)],64))}},Pd=Ie(xd,[["__scopeId","data-v-fb538a84"]]),xi=e=>(Be("data-v-c0da6ecf"),e=e(),je(),e),Ed=xi(()=>b("div",null,[b("h2",null,"Dotnet7_vue3"),b("a",{href:"https://www.youtube.com/watch?v=LlYhPO8Ti2U",target:"_blank"}," https://www.youtube.com/watch?v=LlYhPO8Ti2U "),b("div",null,".NET7 Web API | SQL Database | VueJS(3.0) - Composition API | CRUD")],-1)),Dd={class:"container"},Ld={class:"app-header-nav",style:{"list-style":"none"}},kd=xi(()=>b("div",null,null,-1)),Nd={__name:"index",setup(e){return z.scrollToTop=!0,(t,o)=>{const n=Eo("RouterLink"),s=Eo("RouterView");return V(),q(J,null,[Ed,b("div",null,[b("div",Dd,[b("ul",Ld,[b("li",null,[S(n,{to:"/_beach_info"},{default:ee(()=>[$("_Beach_Info.vue")]),_:1})]),b("li",null,[S(n,{to:"/addbeach"},{default:ee(()=>[$("AddBeach.vue")]),_:1})]),b("li",null,[S(n,{to:"/beachList"},{default:ee(()=>[$("BeachList.vue")]),_:1})]),b("li",null,[S(n,{to:"/editbeach"},{default:ee(()=>[$("EditBeach.vue")]),_:1})]),b("li",null,[S(n,{to:"/routerbeach"},{default:ee(()=>[$("router_Beach.vue")]),_:1})]),b("li",null,[S(n,{to:"/confirmDeletePopup"},{default:ee(()=>[$("ConfirmDeletePopup.vue")]),_:1})])])]),S(s),kd]),S(z)],64)}}},Rd=Ie(Nd,[["__scopeId","data-v-c0da6ecf"]]),Ud=e=>(Be("data-v-faca44a6"),e=e(),je(),e),Wd=Ud(()=>b("div",null,"這是_Beach_Info",-1)),Md=`
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
`,Hd={__name:"_Beach_Info",setup(e){return(t,o)=>(V(),q(J,null,[Wd,b("div",{class:"content"},[b("pre",null,"      "+at(Md)+`
    `)])],64))}},Ys=Ie(Hd,[["__scopeId","data-v-faca44a6"]]),Od=e=>(Be("data-v-315d8245"),e=e(),je(),e),Fd=Od(()=>b("div",null,"這是AddBeach",-1)),Bd=`
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

`,jd={__name:"AddBeach",setup(e){return(t,o)=>(V(),q(J,null,[Fd,b("div",{class:"content"},[b("pre",null,"      "+at(Bd)+`
    `)])],64))}},Vd=Ie(jd,[["__scopeId","data-v-315d8245"]]),Gd=e=>(Be("data-v-21c2ba9b"),e=e(),je(),e),Kd=Gd(()=>b("div",null,"這是BeachList",-1)),$d=`
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

`,zd={__name:"BeachList",setup(e){return(t,o)=>(V(),q(J,null,[Kd,b("div",{class:"content"},[b("pre",null,"      "+at($d)+`
    `)])],64))}},Jd=Ie(zd,[["__scopeId","data-v-21c2ba9b"]]),qd=e=>(Be("data-v-3763e4f1"),e=e(),je(),e),Qd=qd(()=>b("div",null,"這是EditBeach",-1)),Zd=`
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

`,Yd={__name:"EditBeach",setup(e){return(t,o)=>(V(),q(J,null,[Qd,b("div",{class:"content"},[b("pre",null,"      "+at(Zd)+`
    `)])],64))}},Xd=Ie(Yd,[["__scopeId","data-v-3763e4f1"]]),ep=e=>(Be("data-v-f0f2e55e"),e=e(),je(),e),tp=ep(()=>b("div",null,"這是_router_Beach",-1)),op=`
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


`,np={__name:"router_Beach",setup(e){return(t,o)=>(V(),q(J,null,[tp,b("div",{class:"content"},[b("pre",null,"      "+at(op)+`
    `)])],64))}},sp=Ie(np,[["__scopeId","data-v-f0f2e55e"]]),rp=e=>(Be("data-v-69fb1a2b"),e=e(),je(),e),ip=rp(()=>b("div",null,"這是ConfirmDeletePopup",-1)),ap=`
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


`,lp={__name:"ConfirmDeletePopup",setup(e){return(t,o)=>(V(),q(J,null,[ip,b("div",{class:"content"},[b("pre",null,`      這放在components\\
      由BeachList 呼叫
      `+at(ap)+`
    `)])],64))}},cp=Ie(lp,[["__scopeId","data-v-69fb1a2b"]]),up=`
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
`,dp={__name:"_2_vscode",setup(e){return z.scrollToTop=!0,(t,o)=>(V(),q(J,null,[b("div",{innerHTML:up}),S(z)],64))}},$n=e=>(Be("data-v-7775a5f3"),e=e(),je(),e),pp=$n(()=>b("div",null,"這是VS Code 功能頁",-1)),fp={id:"Vite_to_github",class:"content"},hp=$n(()=>b("div",null,[$("1.vS Code文件標簽欄多行顯示 "),b("a",{href:"https://blog.csdn.net/mj475002864/article/details/115456004",target:"_blank"}," https://blog.csdn.net/mj475002864/article/details/115456004 "),b("p",null,"ctrl + shift + p => 查詢 Open Workspace Settings => Wrap Tabs 打勾 ")],-1)),mp={key:0},gp=$n(()=>b("div",null,[$("3.vs code 開發Extension "),b("p",null,"TypeScript Vue Plugin(Volar)"),b("p",null,"Vue Language Features"),b("p",null,"Vue - Official")],-1)),bp={__name:"index",setup(e){let t=Ee(!1);return z.scrollToTop=!0,(o,n)=>(V(),q(J,null,[pp,b("div",fp,[hp,b("div",null,[$("2.vs code 快捷鍵 "),b("button",{onClick:n[0]||(n[0]=s=>ge(t)?t.value=!Y(t):t=!Y(t))},"Toggle"),S(ze,null,{default:ee(()=>[Y(t)?(V(),q("div",mp,[S(dp)])):st("",!0)]),_:1})]),gp]),S(z)],64))}},vp=Ie(bp,[["__scopeId","data-v-7775a5f3"]]),yp=$o('<div data-v-bb9159e2>vue3+Naive UI</div><div id="Vite_to_github" class="content" data-v-bb9159e2><div data-v-bb9159e2>1.ue3+Naive UI數據表格基本使用方式 <a href="https://blog.csdn.net/weixin_54570626/article/details/129407702" target="_blank" data-v-bb9159e2> https://blog.csdn.net/weixin_54570626/article/details/129407702 </a></div><div data-v-bb9159e2>2.naive ui 數據表格操作加入兩個按鈕解決辦法 <a href="https://blog.csdn.net/uglyduckling0412/article/details/131438996" target="_blank" data-v-bb9159e2> https://blog.csdn.net/uglyduckling0412/article/details/131438996 </a></div><div data-v-bb9159e2>3.Naive UI之Data Table <a href="https://blog.csdn.net/aliceyang2012/article/details/127801611" target="_blank" data-v-bb9159e2> https://blog.csdn.net/aliceyang2012/article/details/127801611 </a></div><div data-v-bb9159e2>4.vue3結合naiveui的表單規則寫法（回調） <a href="https://www.cnblogs.com/lingern/p/16190795.html" target="_blank" data-v-bb9159e2> https://www.cnblogs.com/lingern/p/16190795.html </a></div></div>',2),_p={__name:"index",setup(e){return Ee(!1),z.scrollToTop=!0,(t,o)=>(V(),q(J,null,[yp,S(z)],64))}},wp=Ie(_p,[["__scopeId","data-v-bb9159e2"]]),Ap=$o('<div data-v-97fd3d78>這是影音頁</div><div id="Vite_to_github" class="content" data-v-97fd3d78><div data-v-97fd3d78>1.Vue3 CRUD + bootstrap <a href="https://www.youtube.com/watch?v=PrKh6GemOyg" target="_blank" data-v-97fd3d78> https://www.youtube.com/watch?v=PrKh6GemOyg </a></div><div data-v-97fd3d78>2.後台課程管理系統-Vue3版 <a href="https://www.youtube.com/watch?v=yZMTHoGSuVQ&amp;list=PL_vrngOaamYsIovhZ3Cd9M2vPhm3yRTnG" target="_blank" data-v-97fd3d78> https://www.youtube.com/watch?v=yZMTHoGSuVQ&amp;list=PL_vrngOaamYsIovhZ3Cd9M2vPhm3yRTnG </a></div><div data-v-97fd3d78>3.2024年不看后悔的Vue3+.NET7+WebAPI从零手写后台管理系统 <a href="https://www.bilibili.com/video/BV1Km411o7ip?p=1&amp;vd_source=1a5937a80fc962029ba6a7b9ee9a1654" target="_blank" data-v-97fd3d78> https://www.bilibili.com/video/BV1Km411o7ip?p=1&amp;vd_source=1a5937a80fc962029ba6a7b9ee9a1654 </a><a href="https://search.bilibili.com/all?vt=75651059&amp;keyword=2024%E5%B9%B4%E4%B8%8D%E7%9C%8B%E5%90%8E%E6%82%94%E7%9A%84Vue3%2B.NET7%2BWebAPI&amp;from_source=webtop_search&amp;spm_id_from=333.1007&amp;search_source=5" target="_blank" data-v-97fd3d78> https://search.bilibili.com/all?vt=75651059&amp;keyword=2024%E5%B9%B4%E4%B8%8D%E7%9C%8B%E5%90%8E%E6%82%94%E7%9A%84Vue3%2B.NET7%2BWebAPI&amp;from_source=webtop_search&amp;spm_id_from=333.1007&amp;search_source=5 </a></div><div data-v-97fd3d78>4.2023全新C#完全零基础入门教程（附源码） <a href="https://www.bilibili.com/read/cv25507935/" target="_blank" data-v-97fd3d78> https://www.bilibili.com/read/cv25507935/ </a></div></div>',2),Ip={__name:"index",setup(e){return Ee(!1),z.scrollToTop=!0,(t,o)=>(V(),q(J,null,[Ap,S(z)],64))}},Cp=Ie(Ip,[["__scopeId","data-v-97fd3d78"]]),Sp=b("div",null,"【尚硅谷】ES6教程——涵盖ES6-ES11",-1),Tp=`
  <div id="Vue3-rabbit" style="display:flex; justify-content: center; background-color: #282923; color:#c1cccc; font-size: 14px;">
    <pre>
//===============================================================================================//
      <a href="https://www.youtube.com/playlist?list=PLmOn9nNkQxJFlj86lvBSpC2UsNw-pdmdq" target="_blank">
        【尚硅谷】ES6教程——涵盖ES6-ES11
      </a>
      <a href="https://www.youtube.com/watch?v=Em-vw0xLbRg&list=PLmOn9nNkQxJFlj86lvBSpC2UsNw-pdmdq&index=4" target="_blank">
        【尚硅谷】04 ES6 let經典案例實踐
      </a>
      <"div class="container">
        <"div class="page-header">點擊切換顏色<"/div>
        <"div class="item"><"/div>
        <"div class="item"><"/div>
        <"div class="item"><"/div>
      <"/div>
      <"scrip>
        let item = document.getElementByClassName('item');

        for(let i = 0; i < items.length; i++){
          items[i].onclick = function(){
            items[i].style.background = 'pink'
          }
        }
      <"/scipt>

      <a href="https://www.youtube.com/watch?v=1zI1G6edZLI&list=PLmOn9nNkQxJFlj86lvBSpC2UsNw-pdmdq&index=10" target="_blank">
        【尚硅谷】10 ES6 箭頭函數的實踐與應用場景
      </a>
      <"div id="ad"><"/div>
      <"scrip>
        // 需求-1 點擊 div 2s 後顏色變成「粉色」
        // 獲取元素
        let ad = document.getElementById('ad');
        // 綁定事件
        ad.addEventListener("click", function(){
          //保存 this 的值
          // let _this = this;
          setTimeout(() => {
            // 修改背景顏色 this
            this.style.background = 'pink';
          }, 2000);
        })

        // 需求-2 從數組中返回偶數的元素
        const arr = [1,6,9,10,100,25]
        // const result = arr.filter(item => {
        //   if(item % 2 === 0){
        //     return true;
        //   }else{
        //     return false;
        //   }
        // })
        const result = arr.filter(item => item % 2 === 0)
        console.log(result);

        // 箭頭函數適合與 this 無關的回調，定時器，數組的方法回調
        // 箭頭函數不適合 與 this 有關的回調，事件回調，對象的方法

        {
          name: '尚硅谷',
          getName: () => {
            this.name; // 這裡的name是無法取到'尚硅谷'
          }
        }
      <"/scipt>

      <a href="https://www.youtube.com/watch?v=X0jxwLC6dyI&list=PLmOn9nNkQxJFlj86lvBSpC2UsNw-pdmdq&index=11" target="_blank">
        【尚硅谷】11 ES6 函數參數的默認值設置
      </a>
      <"scrip>
        //ES6 允許給函數參數賦值初始值
        //1.形參初始值 具有默認值的參數，一般位置要靠後
        function add(a,b,c=10){
          return a + b + c;
        }
        let restul = add(1,2);
        console.log(result);

        //2. 與解構賦值結合
        function connect({host="127.0.0.1", username, password, port}){
          console.log(host)
          console.log(username)
          console.log(password)
          console.log(port)
        }
        connect({
          host: 'atguigu.com',
          username: 'root',
          password: 'root',
          port: 3306
        })
      <"/scrip>

      <a href="https://www.youtube.com/watch?v=wEEtFdMEih0&list=PLmOn9nNkQxJFlj86lvBSpC2UsNw-pdmdq&index=12" target="_blank">
        【尚硅谷】12 ES6 rest參數
      </a>
      <"scrip>
        // ES6 引入 rest 參數, 用於獲取函數的實參，用來代替 arguments
        // ES6 獲取實參的方式
        // function date(){
        //   console.log(arguments);  // 對象
        // }
        // date('白芷', '阿嬌', '思慧');

        // rest 參數
        function date(...args) {{
          console.log(args); // 數組，可以用filter, some, every, map方法
        }}
        date('白芷', '阿嬌', '思慧');

        // rest 參數必須要放到參數最後
        function fn(a,b,...args){
          console.log(a);
          console.log(b);
          console.log(args); // [3,4,5,6]
        }
        fn(1,2,3,4,5,6);
      <"/scrip>

      <a href="https://www.youtube.com/watch?v=aisJZnNztJU&list=PLmOn9nNkQxJFlj86lvBSpC2UsNw-pdmdq&index=13" target="_blank">
        【尚硅谷】13 ES6 擴展運算符的介紹
      </a>
      // [...] 擴展運算符能將「數組」轉換為逗號分隔的「參數序列」
      // 聲明一個數組
      const tfboys = ['易陽千璽','王源','王俊凱'] // =>'易陽千璽','王源','王俊凱'
      
      //聲明一個函數
      function chunwan(){
        console.log(arguments)
      }
      chunwan(...tfboys); // chunwan('易陽千璽','王源','王俊凱')
      <a href="https://www.youtube.com/watch?v=zp_mKn344Oo&list=PLmOn9nNkQxJFlj86lvBSpC2UsNw-pdmdq&index=14" target="_blank">
        【尚硅谷】14 ES6 擴展運算符的應用
      </a>
      // 1.數組的合併 情聖 誤殺 唐探
      const kuaizi = ['王太利','肖央']
      const fenghuang = ['曾毅','玲花']
      // const zuixuanxianpingguo = kuaizi.concat(fenghuang);
      const zuixuanxianpingguo = [...kuaizi, kuaizi];
                                 //['王太利','肖央','曾毅','玲花']
      console.log(zuixuanxianpingguo);

      // 2.數組的克隆
      const sanzhihua = ['E','G','M'];
      const sanyecao = [...sanzhihua]; // ['E','G','M'] 如果是物件，是淺拷貝
      console.log(sanyecao);

      // 3.將偽數組轉為直正的數組
      const divs = document.querySelectAll('div');
      // console.log(divs);
      const divArr = [...divs];
      console.log(divArr);

      <a href="https://www.youtube.com/watch?v=lwxrvInKas8&list=PLmOn9nNkQxJFlj86lvBSpC2UsNw-pdmdq&index=15" target="_blank">
        【尚硅谷】15 ES6 Symbol的介紹與創建
      </a>
      ES6引入了一種新的原始數據類型Symbol。表示獨一無二的值。它是Javascript語言的第七種
      數據類型，是一種類似於字符中的數據類型。

      Symbol特點
      1.值是唯一的，用來解決命名衝突的問題
      2.值不能與其他數據進行運算
      3.定義的對象屬性不能使用 for...in 循環遍歷，但是可以使用Reflect.ownKeys來獲取對象的所有鍵名

      // 創建Symbol
      let s1 = Symbol();
      console.log(s1, typeof s1);

      let s2 = Symbol('尚硅谷');
      let s3 = Symbol('尚硅谷');
      console.log(s2 === s3); // false

      //Symbol.for 創建
      let s4 = Symbol.for('尚硅谷');
      let s5 = Symbol.for('尚硅谷');
      console.log(s4, typeof s4);
      console.log(s4 === s5); // true

      // 不能與其他數據進行運算
      // let result = s1 + 100;
      // let result = s1 > 100;
      // let result = s1 + s1

      // USONB you are so niubility
      // u undefined
      // s string
      // o object
      // n null number
      // b boolean

      <a href="https://www.youtube.com/watch?v=lwxrvInKas8&list=PLmOn9nNkQxJFlj86lvBSpC2UsNw-pdmdq&index=16" target="_blank">
        【尚硅谷】16 ES6 對象添加Symbol類型的屬性
      </a>
        // 向對象中添加方法 up down
        let game = { name:'俄羅斯方塊' }

        // 聲明一個對象
        let methods = { 
          up: Symbol(),
          down: Symbol()
        }
        
        game[methods.up] = function(){
          console.log("我可以改變形狀");
        }

        game[methods.down] = function(){
          console.log("我可以快速下降");
        }

        console.log(game)

        // 
        let youxi = {
          name:"狼人殺"
          [Symbol('say')]: function(){
            console.log('我可以發言')
          },
          [Symbol('sibao')]: function(){
            console.log('我可以自爆')
          }
        }
        console.log(youxi)

      <a href="https://www.youtube.com/watch?v=KAQNkgFByBU&list=PLmOn9nNkQxJFlj86lvBSpC2UsNw-pdmdq&index=17" target="_blank">
        【尚硅谷】17 ES6 Symbol的内置属性
      </a>
      class Person{
        static [Symbol.hasInstance(param){
          // 可以自行控制類型檢測
          console.log(param)
          console.log("我被用來檢測類型了")
          return false;
        }]
      }
      let o = {};
      console.log(o instanceof Person);

      //
      const arr = [1,2,3]
      const arr2 = [4,5,6]
      arr2[Symbol.isConcatSpreadable] = false; // 表示應對象是否可以展開
      console.log(arr.concat(arr2)); 


      <a href="https://www.youtube.com/watch?v=KAQNkgFByBU&list=PLmOn9nNkQxJFlj86lvBSpC2UsNw-pdmdq&index=18" target="_blank">
        【尚硅谷】18 尚硅谷 ES6 迭代器介绍
      </a>
      1.ES6創造了一種新的遍歷命令for...of循環，Iterator接口主要供for...of消費
      2.原生具備iterator接口的數據(可用for of遍歷)
        a.Array
        b.Arguments
        c.Set
        d.Map
        e.String
        f.TypeArray
        g.NodeList
      3.工作原理
        a.創建一個指針對象，指向當前數據結構的起始位置
        b.第一次調用對象的next方法，指針自動指向數據結構的第一個成員
        c.接下來不斷調用next方法，指針一直往後移動，直接指向最後一個成員
        d.每調用next方法返回一個包含value和done屬性的對象

      const xiyou = ['唐憎','孫悟空','豬八戒','沙憎']

      for(let v in xiyou){  // for in 保存的是鍵名
        console.log(v)
      } 
      for(let v of xiyou){  // for in 保存的是鍵值
        console.log(v)
      } 

      let iterator = xiyou[Symbol.iterator()];
      //調用對象的next方法
      console.log(iterator.next());
      console.log(iterator.next());
      console.log(iterator.next());
      console.log(iterator.next());
      console.log(iterator.next());

      <a href="https://www.youtube.com/watch?v=KAQNkgFByBU&list=PLmOn9nNkQxJFlj86lvBSpC2UsNw-pdmdq&index=18" target="_blank">
        【尚硅谷】19 尚硅谷 ES6 迭代器应用 自定义遍历数据
      </a>
      //迭代器就是要自定義遍歷數據
      // 聲明一個對象
      const banji = {
        name:"終極一班",
        stus:[
          'xiaoming',
          'xiaoning',
          'xiaotian',
          'knight',
        ],
        [Symbol.iterator](){
          //索引變量
          let index = 0;
          let _this = this;
          return {
            next: function(){
              if(index < _this.stus.length){
                const result = {value: _this.stus[index], done: false} // 會瘋狂輸出
                index++;
                return result;
              }else{
                return {value: undefined, done: true}
              }
            }
          };
        }
      }

      // 遍歷這個對象
      for(let v of banji){
        console.log(v);
      }
      
      // banji.stus.forEach()
      <a href="https://www.youtube.com/watch?v=KAQNkgFByBU&list=PLmOn9nNkQxJFlj86lvBSpC2UsNw-pdmdq&index=18" target="_blank">
        【尚硅谷】20 尚硅谷 ES6 生成器函数声明与调用
      </a>
      // 生成器就是一個特殊函數，是ES6提供的一種異步編程解決方案，語法行為與傳統函數完全不同。
      // 異步編程： 純口調函數 node fs ajax mongodb
      // yield：函數代碼的分隔符
      function *gen(){
        console.log("hello generator")
        console.log("111");
        yield '一隻沒有耳朵'
        console.log("222");
        yield '一隻沒有尾巴'
        console.log("333");
        yield '真奇怪'
        console.log("444");
      }
      let iterator = gen();
      // console.log(iterator);
      console.log(ietrator.next()); // 這裡才會執行
      console.log(ietrator.next()); // 這裡才會執行
      console.log(ietrator.next()); // 這裡才會執行
      console.log(ietrator.next()); // 這裡才會執行

      //遍歷
      for(let v of gen()){
        console.log(v)
      }

      <a href="https://www.youtube.com/watch?v=KAQNkgFByBU&list=PLmOn9nNkQxJFlj86lvBSpC2UsNw-pdmdq&index=18" target="_blank">
        【尚硅谷】21 尚硅谷 ES6 生成器函数的参数传递
      </a>

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
      
      // 192. for in loop, for of loop
      let Wilson = {
        name : "Wilson Ren",
        age: 26
      };
      for (let property in Wilson){
        console.log(Wilson[property]);  // Wilson Ren, 26
      }

      let num = [100, 44, 22];
      for(let i in num){
        console.log(num[i]); // 100, 44, 22
      }

      // 物件不能用for of
    </pre>
  </div>
`,xp={__name:"index",setup(e){return z.scrollToTop=!0,(t,o)=>(V(),q(J,null,[Sp,b("div",{innerHTML:Tp}),S(z)],64))}},Pp=e=>(Be("data-v-578d3ec3"),e=e(),je(),e),Ep=Pp(()=>b("div",null,"我是DotnetAPI_Angular頁面",-1)),Dp=`
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
  `,Lp={__name:"index",setup(e){return z.scrollToTop=!0,(t,o)=>(V(),q(J,null,[Ep,b("div",null,[b("div",{innerHTML:Dp})]),S(z)],64))}},kp=Ie(Lp,[["__scopeId","data-v-578d3ec3"]]),Np=b("div",null,"WITS Collge 成就AI⼈才職涯",-1),Rp=`
  <div id="Vue3-rabbit" style="display:flex; justify-content: center; background-color: #282923; color:#c1cccc; font-size: 14px;">
    <pre>
//===============================================================================================//
必修: Prompt Engineering for Developers
Duration: 5 hours
Objective: This course focuses on prompt engineering, teaching participants how to interact with and
leverage ChatGPT for solving real-world problems. Participants will build custom chatbots, develop
summarization tools, and enhance their understanding of LLM-powered APIs.
Key Topics: Prompt design, API interaction, summarization, text transformation, and chatbot
development.
Recommended for: Developers, analysts, and engineers aiming to create AI-powered tools and
improve their prompt engineering skills.
Link to Course: <a href="https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/" target="_blank">
https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/
</a>
lin.thc@gmail.com
YjLQUh5_n38p$b9

必修: Functions, Tools, and Agents using LangChain
Duration: 5 hours
Objective: This course offers hands-on experience with LangChain, focusing on integrating LLMs with
tools and building agents that automate workflows. Learners will explore how to design applications that
use agents to interact with APIs and databases in real-world scenarios.
Key Topics: LangChain framework, LLM agents, workflow automation, and API integration.
Recommended for: Engineers and developers building dynamic AI-powered tools and automating
workflows.Link to Course: <a  target="_blank" href="https://www.deeplearning.ai/short-courses/functions-tools-agents-langchain/">
Functions, Tools, and Agents using LangChain</a>

必修: LangChain for LLM Application Development
Duration: 10 hours
Objective: This course dives deep into LangChain's capabilities for building LLM-powered applications.
Learners will build practical projects, focusing on document retrieval, embeddings, and designing modular
components for AI applications.
Key Topics: Application design with LangChain, document retrieval, embeddings, and modular AI components.
Recommended for: Developers and engineers aiming to create scalable AI-powered applications using LLMs.
Link to Course: <a  target="_blank" href="https://www.deeplearning.ai/short-courses/langchain-for-llm-application-development/">
LangChain for LLM Application Development</a><a  target="_blank" href="https://www.deeplearning.ai/courses/generative-ai-with-llms/">
 (DeepLearning.AI) 
 </a>

選修: AI Python for Beginning
Duration: 10 hours
Objective: This course introduces participants to Python programming essentials through practical, interactive
coding exercises. Learners will write code using Jupyter Notebooks and develop familiarity with common AI-related
programming concepts. The course also covers using chatbots to write and debug code.
Key Topics: Python basics, variables, functions, debugging, building LLM prompts, and working with chatbots for
automation.
Recommended for: Beginners in programming, data analysts, and engineers transitioning into AI roles.
Link to Course: <a  target="_blank" href="https://www.deeplearning.ai/courses/ai-python-for-beginners">
AI Python for Beginners </a><a  target="_blank" href="https://learn.deeplearning.ai/courses/ai-python-for-beginners/lesson/5/running-your-first-program">
(DeepLearning.AI - Learning Platform)</a>

選修: AI for Everyone
Duration: 15 hours
Objective: Provides a hands-on introduction to generative models and LLMs. Full-stack engineers will
learn to incorporate generative AI into their apps through APIs and web integration.
Key Topics: Building applications with GPT models, AI-enhanced workflows, and real-world case studies.
For people who are: Full-stack python engineers, data engineers, data analyst
Course: <a  target="_blank" href="https://www.deeplearning.ai/courses/ai-for-everyone/">
https://www.deeplearning.ai/courses/ai-for-everyone/</a>

選修: Generative AI with LLMs
Duration: 20 hours
Objective: This course explores the practical application of generative AI using large language models
(LLMs). Participants will learn to deploy and fine-tune LLMs for business applications, covering
transformer architecture, optimization techniques, and inference tools.
Key Topics: Generative AI models, transformers, fine-tuning, scaling, and real-world deployment
scenarios.
Recommended for: Engineers and analysts seeking hands-on experience with generative models and AI
deployment strategies.
Link to Course: <a  target="_blank" href="https://www.deeplearning.ai/courses/generative-ai-with-llms">
Generative AI with LLMs (DeepLearning.AI)</a>


AI⼈才培訓線上課專題學規劃
---------------------------------
類別       優先序   主題                                                說明                            Duration
前導技術   選修     AI Python for Beginners                                                             10 hrs
AI基礎知識 選修     AI for Everyone                                                                     15 hrs
           選修    Generative AI for Everyone                         ⽣成式 AI⽂本⽣成和容建             20 hrs
           選修    Generative AI with LLMs                                                             20 hrs

LLM RAG   選修     Building LLM Applications with LangChain           LLMLLaMA、MistralLLM開發          15 hrs
技術      選修      Generative AI with Retrieval-Augmented Generation  檢索增強⽣成(RAG)提⾼型準確性的設計 20 hrs
          必修     Prompt Engineering for Developers                                                    5 hrs
          必修     Functions, Tools, and Agents using LangChain                                         5 hrs
          必修     LangChain for LLM Application Development                                            10 hrs
 
專題實作   必修     基於RAG的對話開發                                   使⽤Chat8855開發式碼(線下環境)     ⼀週
輔助⼯具    選⽤    沈式翻譯(影字翻中) https://immersivetranslate.com/zh-TW



    </pre>
  </div>
`,Up={__name:"index",setup(e){return z.scrollToTop=!0,(t,o)=>(V(),q(J,null,[Np,b("div",{innerHTML:Rp}),S(z)],64))}},Wp=su({history:Nc("/vue-my-note/"),routes:[{path:"/",component:hu,children:[{path:"",component:Su},{path:"/kaiWebapi2",component:Fu},{path:"/vue3",component:Vu},{path:"/download",component:zu},{path:"/others",component:Pd,children:[{path:"/_4_deployVite",component:Ti}]},{path:"/dotnet7_vue3",component:Rd,children:[{path:"",component:Ys},{path:"/_beach_info",component:Ys},{path:"/addbeach",component:Vd},{path:"/beachList",component:Jd},{path:"/editbeach",component:Xd},{path:"/routerbeach",component:sp},{path:"/confirmDeletePopup",component:cp}]},{path:"/vscode_function",component:vp},{path:"/Naive_ui",component:wp},{path:"/video",component:Cp},{path:"/es6",component:xp},{path:"/dotnetapi_angular",component:kp},{path:"/ai",component:Up}]}]}),zn=Zl(au);zn.use(oc());zn.use(Wp);zn.mount("#app");
