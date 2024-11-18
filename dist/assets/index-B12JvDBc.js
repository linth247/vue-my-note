var Aa=Object.defineProperty;var Ca=(e,t,o)=>t in e?Aa(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var vt=(e,t,o)=>Ca(e,typeof t!="symbol"?t+"":t,o);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Xn(e,t){const o=new Set(e.split(","));return r=>o.has(r)}const ve={},Yt=[],qe=()=>{},Ta=()=>!1,tn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),er=e=>e.startsWith("onUpdate:"),Pe=Object.assign,tr=(e,t)=>{const o=e.indexOf(t);o>-1&&e.splice(o,1)},Sa=Object.prototype.hasOwnProperty,re=(e,t)=>Sa.call(e,t),V=Array.isArray,Xt=e=>on(e)==="[object Map]",zs=e=>on(e)==="[object Set]",z=e=>typeof e=="function",_e=e=>typeof e=="string",Dt=e=>typeof e=="symbol",be=e=>e!==null&&typeof e=="object",Ks=e=>(be(e)||z(e))&&z(e.then)&&z(e.catch),Js=Object.prototype.toString,on=e=>Js.call(e),Ia=e=>on(e).slice(8,-1),qs=e=>on(e)==="[object Object]",or=e=>_e(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,fo=Xn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),nn=e=>{const t=Object.create(null);return o=>t[o]||(t[o]=e(o))},xa=/-(\w)/g,tt=nn(e=>e.replace(xa,(t,o)=>o?o.toUpperCase():"")),Pa=/\B([A-Z])/g,jt=nn(e=>e.replace(Pa,"-$1").toLowerCase()),rn=nn(e=>e.charAt(0).toUpperCase()+e.slice(1)),yn=nn(e=>e?`on${rn(e)}`:""),Et=(e,t)=>!Object.is(e,t),Fo=(e,...t)=>{for(let o=0;o<e.length;o++)e[o](...t)},Qs=(e,t,o,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:o})},Un=e=>{const t=parseFloat(e);return isNaN(t)?e:t},ka=e=>{const t=_e(e)?Number(e):NaN;return isNaN(t)?e:t};let Lr;const Zs=()=>Lr||(Lr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Vt(e){if(V(e)){const t={};for(let o=0;o<e.length;o++){const r=e[o],s=_e(r)?Ma(r):Vt(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(_e(e)||be(e))return e}const Ea=/;(?![^(]*\))/g,La=/:([^]+)/,Da=/\/\*[^]*?\*\//g;function Ma(e){const t={};return e.replace(Da,"").split(Ea).forEach(o=>{if(o){const r=o.split(La);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function nr(e){let t="";if(_e(e))t=e;else if(V(e))for(let o=0;o<e.length;o++){const r=nr(e[o]);r&&(t+=r+" ")}else if(be(e))for(const o in e)e[o]&&(t+=o+" ");return t.trim()}const Na="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ua=Xn(Na);function Ys(e){return!!e||e===""}const Xs=e=>!!(e&&e.__v_isRef===!0),Qe=e=>_e(e)?e:e==null?"":V(e)||be(e)&&(e.toString===Js||!z(e.toString))?Xs(e)?Qe(e.value):JSON.stringify(e,ei,2):String(e),ei=(e,t)=>Xs(t)?ei(e,t.value):Xt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((o,[r,s],i)=>(o[wn(r,i)+" =>"]=s,o),{})}:zs(t)?{[`Set(${t.size})`]:[...t.values()].map(o=>wn(o))}:Dt(t)?wn(t):be(t)&&!V(t)&&!qs(t)?String(t):t,wn=(e,t="")=>{var o;return Dt(e)?`Symbol(${(o=e.description)!=null?o:t})`:e};/**
* @vue/reactivity v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let et;class ti{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=et,!t&&et&&(this.index=(et.scopes||(et.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const o=et;try{return et=this,t()}finally{et=o}}}on(){et=this}off(){et=this.parent}stop(t){if(this._active){let o,r;for(o=0,r=this.effects.length;o<r;o++)this.effects[o].stop();for(o=0,r=this.cleanups.length;o<r;o++)this.cleanups[o]();if(this.scopes)for(o=0,r=this.scopes.length;o<r;o++)this.scopes[o].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Ra(e){return new ti(e)}function Wa(e,t=et){t&&t.active&&t.effects.push(e)}function $a(){return et}let Ft;class rr{constructor(t,o,r,s){this.fn=t,this.trigger=o,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Wa(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Mt();for(let t=0;t<this._depsLength;t++){const o=this.deps[t];if(o.computed&&(Ha(o.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Nt()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=Pt,o=Ft;try{return Pt=!0,Ft=this,this._runnings++,Dr(this),this.fn()}finally{Mr(this),this._runnings--,Ft=o,Pt=t}}stop(){this.active&&(Dr(this),Mr(this),this.onStop&&this.onStop(),this.active=!1)}}function Ha(e){return e.value}function Dr(e){e._trackId++,e._depsLength=0}function Mr(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)oi(e.deps[t],e);e.deps.length=e._depsLength}}function oi(e,t){const o=e.get(t);o!==void 0&&t._trackId!==o&&(e.delete(t),e.size===0&&e.cleanup())}let Pt=!0,Rn=0;const ni=[];function Mt(){ni.push(Pt),Pt=!1}function Nt(){const e=ni.pop();Pt=e===void 0?!0:e}function sr(){Rn++}function ir(){for(Rn--;!Rn&&Wn.length;)Wn.shift()()}function ri(e,t,o){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&oi(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const Wn=[];function si(e,t,o){sr();for(const r of e.keys()){let s;r._dirtyLevel<t&&(s??(s=e.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=t),r._shouldSchedule&&(s??(s=e.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Wn.push(r.scheduler)))}ir()}const ii=(e,t)=>{const o=new Map;return o.cleanup=e,o.computed=t,o},$n=new WeakMap,Bt=Symbol(""),Hn=Symbol("");function We(e,t,o){if(Pt&&Ft){let r=$n.get(e);r||$n.set(e,r=new Map);let s=r.get(o);s||r.set(o,s=ii(()=>r.delete(o))),ri(Ft,s)}}function ft(e,t,o,r,s,i){const a=$n.get(e);if(!a)return;let l=[];if(t==="clear")l=[...a.values()];else if(o==="length"&&V(e)){const c=Number(r);a.forEach((d,p)=>{(p==="length"||!Dt(p)&&p>=c)&&l.push(d)})}else switch(o!==void 0&&l.push(a.get(o)),t){case"add":V(e)?or(o)&&l.push(a.get("length")):(l.push(a.get(Bt)),Xt(e)&&l.push(a.get(Hn)));break;case"delete":V(e)||(l.push(a.get(Bt)),Xt(e)&&l.push(a.get(Hn)));break;case"set":Xt(e)&&l.push(a.get(Bt));break}sr();for(const c of l)c&&si(c,4);ir()}const Oa=Xn("__proto__,__v_isRef,__isVue"),ai=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Dt)),Nr=Fa();function Fa(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...o){const r=ae(this);for(let i=0,a=this.length;i<a;i++)We(r,"get",i+"");const s=r[t](...o);return s===-1||s===!1?r[t](...o.map(ae)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...o){Mt(),sr();const r=ae(this)[t].apply(this,o);return ir(),Nt(),r}}),e}function Ba(e){Dt(e)||(e=String(e));const t=ae(this);return We(t,"has",e),t.hasOwnProperty(e)}class li{constructor(t=!1,o=!1){this._isReadonly=t,this._isShallow=o}get(t,o,r){const s=this._isReadonly,i=this._isShallow;if(o==="__v_isReactive")return!s;if(o==="__v_isReadonly")return s;if(o==="__v_isShallow")return i;if(o==="__v_raw")return r===(s?i?tl:pi:i?di:ui).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const a=V(t);if(!s){if(a&&re(Nr,o))return Reflect.get(Nr,o,r);if(o==="hasOwnProperty")return Ba}const l=Reflect.get(t,o,r);return(Dt(o)?ai.has(o):Oa(o))||(s||We(t,"get",o),i)?l:we(l)?a&&or(o)?l:l.value:be(l)?s?gi(l):ko(l):l}}class ci extends li{constructor(t=!1){super(!1,t)}set(t,o,r,s){let i=t[o];if(!this._isShallow){const c=Gt(i);if(!no(r)&&!Gt(r)&&(i=ae(i),r=ae(r)),!V(t)&&we(i)&&!we(r))return c?!1:(i.value=r,!0)}const a=V(t)&&or(o)?Number(o)<t.length:re(t,o),l=Reflect.set(t,o,r,s);return t===ae(s)&&(a?Et(r,i)&&ft(t,"set",o,r):ft(t,"add",o,r)),l}deleteProperty(t,o){const r=re(t,o);t[o];const s=Reflect.deleteProperty(t,o);return s&&r&&ft(t,"delete",o,void 0),s}has(t,o){const r=Reflect.has(t,o);return(!Dt(o)||!ai.has(o))&&We(t,"has",o),r}ownKeys(t){return We(t,"iterate",V(t)?"length":Bt),Reflect.ownKeys(t)}}class Va extends li{constructor(t=!1){super(!0,t)}set(t,o){return!0}deleteProperty(t,o){return!0}}const Ga=new ci,ja=new Va,za=new ci(!0);const ar=e=>e,sn=e=>Reflect.getPrototypeOf(e);function Do(e,t,o=!1,r=!1){e=e.__v_raw;const s=ae(e),i=ae(t);o||(Et(t,i)&&We(s,"get",t),We(s,"get",i));const{has:a}=sn(s),l=r?ar:o?ur:_o;if(a.call(s,t))return l(e.get(t));if(a.call(s,i))return l(e.get(i));e!==s&&e.get(t)}function Mo(e,t=!1){const o=this.__v_raw,r=ae(o),s=ae(e);return t||(Et(e,s)&&We(r,"has",e),We(r,"has",s)),e===s?o.has(e):o.has(e)||o.has(s)}function No(e,t=!1){return e=e.__v_raw,!t&&We(ae(e),"iterate",Bt),Reflect.get(e,"size",e)}function Ur(e,t=!1){!t&&!no(e)&&!Gt(e)&&(e=ae(e));const o=ae(this);return sn(o).has.call(o,e)||(o.add(e),ft(o,"add",e,e)),this}function Rr(e,t,o=!1){!o&&!no(t)&&!Gt(t)&&(t=ae(t));const r=ae(this),{has:s,get:i}=sn(r);let a=s.call(r,e);a||(e=ae(e),a=s.call(r,e));const l=i.call(r,e);return r.set(e,t),a?Et(t,l)&&ft(r,"set",e,t):ft(r,"add",e,t),this}function Wr(e){const t=ae(this),{has:o,get:r}=sn(t);let s=o.call(t,e);s||(e=ae(e),s=o.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&ft(t,"delete",e,void 0),i}function $r(){const e=ae(this),t=e.size!==0,o=e.clear();return t&&ft(e,"clear",void 0,void 0),o}function Uo(e,t){return function(r,s){const i=this,a=i.__v_raw,l=ae(a),c=t?ar:e?ur:_o;return!e&&We(l,"iterate",Bt),a.forEach((d,p)=>r.call(s,c(d),c(p),i))}}function Ro(e,t,o){return function(...r){const s=this.__v_raw,i=ae(s),a=Xt(i),l=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,d=s[e](...r),p=o?ar:t?ur:_o;return!t&&We(i,"iterate",c?Hn:Bt),{next(){const{value:f,done:h}=d.next();return h?{value:f,done:h}:{value:l?[p(f[0]),p(f[1])]:p(f),done:h}},[Symbol.iterator](){return this}}}}function yt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Ka(){const e={get(i){return Do(this,i)},get size(){return No(this)},has:Mo,add:Ur,set:Rr,delete:Wr,clear:$r,forEach:Uo(!1,!1)},t={get(i){return Do(this,i,!1,!0)},get size(){return No(this)},has:Mo,add(i){return Ur.call(this,i,!0)},set(i,a){return Rr.call(this,i,a,!0)},delete:Wr,clear:$r,forEach:Uo(!1,!0)},o={get(i){return Do(this,i,!0)},get size(){return No(this,!0)},has(i){return Mo.call(this,i,!0)},add:yt("add"),set:yt("set"),delete:yt("delete"),clear:yt("clear"),forEach:Uo(!0,!1)},r={get(i){return Do(this,i,!0,!0)},get size(){return No(this,!0)},has(i){return Mo.call(this,i,!0)},add:yt("add"),set:yt("set"),delete:yt("delete"),clear:yt("clear"),forEach:Uo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Ro(i,!1,!1),o[i]=Ro(i,!0,!1),t[i]=Ro(i,!1,!0),r[i]=Ro(i,!0,!0)}),[e,o,t,r]}const[Ja,qa,Qa,Za]=Ka();function lr(e,t){const o=t?e?Za:Qa:e?qa:Ja;return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(re(o,s)&&s in r?o:r,s,i)}const Ya={get:lr(!1,!1)},Xa={get:lr(!1,!0)},el={get:lr(!0,!1)};const ui=new WeakMap,di=new WeakMap,pi=new WeakMap,tl=new WeakMap;function ol(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nl(e){return e.__v_skip||!Object.isExtensible(e)?0:ol(Ia(e))}function ko(e){return Gt(e)?e:cr(e,!1,Ga,Ya,ui)}function fi(e){return cr(e,!1,za,Xa,di)}function gi(e){return cr(e,!0,ja,el,pi)}function cr(e,t,o,r,s){if(!be(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const a=nl(e);if(a===0)return e;const l=new Proxy(e,a===2?r:o);return s.set(e,l),l}function go(e){return Gt(e)?go(e.__v_raw):!!(e&&e.__v_isReactive)}function Gt(e){return!!(e&&e.__v_isReadonly)}function no(e){return!!(e&&e.__v_isShallow)}function hi(e){return e?!!e.__v_raw:!1}function ae(e){const t=e&&e.__v_raw;return t?ae(t):e}function mi(e){return Object.isExtensible(e)&&Qs(e,"__v_skip",!0),e}const _o=e=>be(e)?ko(e):e,ur=e=>be(e)?gi(e):e;class bi{constructor(t,o,r,s){this.getter=t,this._setter=o,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new rr(()=>t(this._value),()=>Bo(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=ae(this);return(!t._cacheable||t.effect.dirty)&&Et(t._value,t._value=t.effect.run())&&Bo(t,4),vi(t),t.effect._dirtyLevel>=2&&Bo(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function rl(e,t,o=!1){let r,s;const i=z(e);return i?(r=e,s=qe):(r=e.get,s=e.set),new bi(r,s,i||!s,o)}function vi(e){var t;Pt&&Ft&&(e=ae(e),ri(Ft,(t=e.dep)!=null?t:e.dep=ii(()=>e.dep=void 0,e instanceof bi?e:void 0)))}function Bo(e,t=4,o,r){e=ae(e);const s=e.dep;s&&si(s,t)}function we(e){return!!(e&&e.__v_isRef===!0)}function j(e){return yi(e,!1)}function sl(e){return yi(e,!0)}function yi(e,t){return we(e)?e:new il(e,t)}class il{constructor(t,o){this.__v_isShallow=o,this.dep=void 0,this.__v_isRef=!0,this._rawValue=o?t:ae(t),this._value=o?t:_o(t)}get value(){return vi(this),this._value}set value(t){const o=this.__v_isShallow||no(t)||Gt(t);t=o?t:ae(t),Et(t,this._rawValue)&&(this._rawValue,this._rawValue=t,this._value=o?t:_o(t),Bo(this,4))}}function oe(e){return we(e)?e.value:e}const al={get:(e,t,o)=>oe(Reflect.get(e,t,o)),set:(e,t,o,r)=>{const s=e[t];return we(s)&&!we(o)?(s.value=o,!0):Reflect.set(e,t,o,r)}};function wi(e){return go(e)?e:new Proxy(e,al)}/**
* @vue/runtime-core v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function kt(e,t,o,r){try{return r?e(...r):e()}catch(s){an(s,t,o)}}function Ze(e,t,o,r){if(z(e)){const s=kt(e,t,o,r);return s&&Ks(s)&&s.catch(i=>{an(i,t,o)}),s}if(V(e)){const s=[];for(let i=0;i<e.length;i++)s.push(Ze(e[i],t,o,r));return s}}function an(e,t,o,r=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const a=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${o}`;for(;i;){const d=i.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](e,a,l)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){Mt(),kt(c,null,10,[e,a,l]),Nt();return}}ll(e,o,s,r)}function ll(e,t,o,r=!0){console.error(e)}let Ao=!1,On=!1;const Le=[];let ct=0;const eo=[];let Ct=null,Ht=0;const _i=Promise.resolve();let dr=null;function zt(e){const t=dr||_i;return e?t.then(this?e.bind(this):e):t}function cl(e){let t=ct+1,o=Le.length;for(;t<o;){const r=t+o>>>1,s=Le[r],i=Co(s);i<e||i===e&&s.pre?t=r+1:o=r}return t}function pr(e){(!Le.length||!Le.includes(e,Ao&&e.allowRecurse?ct+1:ct))&&(e.id==null?Le.push(e):Le.splice(cl(e.id),0,e),Ai())}function Ai(){!Ao&&!On&&(On=!0,dr=_i.then(Ti))}function ul(e){const t=Le.indexOf(e);t>ct&&Le.splice(t,1)}function dl(e){V(e)?eo.push(...e):(!Ct||!Ct.includes(e,e.allowRecurse?Ht+1:Ht))&&eo.push(e),Ai()}function Hr(e,t,o=Ao?ct+1:0){for(;o<Le.length;o++){const r=Le[o];if(r&&r.pre){if(e&&r.id!==e.uid)continue;Le.splice(o,1),o--,r()}}}function Ci(e){if(eo.length){const t=[...new Set(eo)].sort((o,r)=>Co(o)-Co(r));if(eo.length=0,Ct){Ct.push(...t);return}for(Ct=t,Ht=0;Ht<Ct.length;Ht++){const o=Ct[Ht];o.active!==!1&&o()}Ct=null,Ht=0}}const Co=e=>e.id==null?1/0:e.id,pl=(e,t)=>{const o=Co(e)-Co(t);if(o===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return o};function Ti(e){On=!1,Ao=!0,Le.sort(pl);try{for(ct=0;ct<Le.length;ct++){const t=Le[ct];t&&t.active!==!1&&kt(t,t.i,t.i?15:14)}}finally{ct=0,Le.length=0,Ci(),Ao=!1,dr=null,(Le.length||eo.length)&&Ti()}}let xe=null,ln=null;function Ko(e){const t=xe;return xe=e,ln=e&&e.type.__scopeId||null,t}function $e(e){ln=e}function He(){ln=null}function ne(e,t=xe,o){if(!t||e._n)return e;const r=(...s)=>{r._d&&Zr(-1);const i=Ko(t);let a;try{a=e(...s)}finally{Ko(i),r._d&&Zr(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Ge(e,t){if(xe===null)return e;const o=hn(xe),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,a,l,c=ve]=t[s];i&&(z(i)&&(i={mounted:i,updated:i}),i.deep&&xt(a),r.push({dir:i,instance:o,value:a,oldValue:void 0,arg:l,modifiers:c}))}return e}function Ut(e,t,o,r){const s=e.dirs,i=t&&t.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(Mt(),Ze(c,o,8,[e.el,l,e,t]),Nt())}}const Tt=Symbol("_leaveCb"),Wo=Symbol("_enterCb");function fl(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return io(()=>{e.isMounted=!0}),Ei(()=>{e.isUnmounting=!0}),e}const Ve=[Function,Array],Si={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ve,onEnter:Ve,onAfterEnter:Ve,onEnterCancelled:Ve,onBeforeLeave:Ve,onLeave:Ve,onAfterLeave:Ve,onLeaveCancelled:Ve,onBeforeAppear:Ve,onAppear:Ve,onAfterAppear:Ve,onAppearCancelled:Ve},Ii=e=>{const t=e.subTree;return t.component?Ii(t.component):t},gl={name:"BaseTransition",props:Si,setup(e,{slots:t}){const o=gc(),r=fl();return()=>{const s=t.default&&Pi(t.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const h of s)if(h.type!==Re){i=h;break}}const a=ae(e),{mode:l}=a;if(r.isLeaving)return _n(i);const c=Or(i);if(!c)return _n(i);let d=Fn(c,a,r,o,h=>d=h);Jo(c,d);const p=o.subTree,f=p&&Or(p);if(f&&f.type!==Re&&!Ot(c,f)&&Ii(o).type!==Re){const h=Fn(f,a,r,o);if(Jo(f,h),l==="out-in"&&c.type!==Re)return r.isLeaving=!0,h.afterLeave=()=>{r.isLeaving=!1,o.update.active!==!1&&(o.effect.dirty=!0,o.update())},_n(i);l==="in-out"&&c.type!==Re&&(h.delayLeave=(m,S,I)=>{const F=xi(r,f);F[String(f.key)]=f,m[Tt]=()=>{S(),m[Tt]=void 0,delete d.delayedLeave},d.delayedLeave=I})}return i}}},hl=gl;function xi(e,t){const{leavingVNodes:o}=e;let r=o.get(t.type);return r||(r=Object.create(null),o.set(t.type,r)),r}function Fn(e,t,o,r,s){const{appear:i,mode:a,persisted:l=!1,onBeforeEnter:c,onEnter:d,onAfterEnter:p,onEnterCancelled:f,onBeforeLeave:h,onLeave:m,onAfterLeave:S,onLeaveCancelled:I,onBeforeAppear:F,onAppear:R,onAfterAppear:D,onAppearCancelled:U}=t,Y=String(e.key),se=xi(o,e),$=(G,te)=>{G&&Ze(G,r,9,te)},X=(G,te)=>{const ie=te[1];$(G,te),V(G)?G.every(W=>W.length<=1)&&ie():G.length<=1&&ie()},he={mode:a,persisted:l,beforeEnter(G){let te=c;if(!o.isMounted)if(i)te=F||c;else return;G[Tt]&&G[Tt](!0);const ie=se[Y];ie&&Ot(e,ie)&&ie.el[Tt]&&ie.el[Tt](),$(te,[G])},enter(G){let te=d,ie=p,W=f;if(!o.isMounted)if(i)te=R||d,ie=D||p,W=U||f;else return;let le=!1;const Se=G[Wo]=Ye=>{le||(le=!0,Ye?$(W,[G]):$(ie,[G]),he.delayedLeave&&he.delayedLeave(),G[Wo]=void 0)};te?X(te,[G,Se]):Se()},leave(G,te){const ie=String(e.key);if(G[Wo]&&G[Wo](!0),o.isUnmounting)return te();$(h,[G]);let W=!1;const le=G[Tt]=Se=>{W||(W=!0,te(),Se?$(I,[G]):$(S,[G]),G[Tt]=void 0,se[ie]===e&&delete se[ie])};se[ie]=e,m?X(m,[G,le]):le()},clone(G){const te=Fn(G,t,o,r,s);return s&&s(te),te}};return he}function _n(e){if(cn(e))return e=Lt(e),e.children=null,e}function Or(e){if(!cn(e))return e;const{shapeFlag:t,children:o}=e;if(o){if(t&16)return o[0];if(t&32&&z(o.default))return o.default()}}function Jo(e,t){e.shapeFlag&6&&e.component?Jo(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Pi(e,t=!1,o){let r=[],s=0;for(let i=0;i<e.length;i++){let a=e[i];const l=o==null?a.key:String(o)+String(a.key!=null?a.key:i);a.type===J?(a.patchFlag&128&&s++,r=r.concat(Pi(a.children,t,l))):(t||a.type!==Re)&&r.push(l!=null?Lt(a,{key:l}):a)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function nt(e,t){return z(e)?Pe({name:e.name},t,{setup:e}):e}const ho=e=>!!e.type.__asyncLoader,cn=e=>e.type.__isKeepAlive;function ml(e,t){ki(e,"a",t)}function bl(e,t){ki(e,"da",t)}function ki(e,t,o=ke){const r=e.__wdc||(e.__wdc=()=>{let s=o;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(un(t,r,o),o){let s=o.parent;for(;s&&s.parent;)cn(s.parent.vnode)&&vl(r,t,o,s),s=s.parent}}function vl(e,t,o,r){const s=un(t,e,r,!0);Li(()=>{tr(r[t],s)},o)}function un(e,t,o=ke,r=!1){if(o){const s=o[e]||(o[e]=[]),i=t.__weh||(t.__weh=(...a)=>{Mt();const l=Eo(o),c=Ze(t,o,e,a);return l(),Nt(),c});return r?s.unshift(i):s.push(i),i}}const ht=e=>(t,o=ke)=>{(!gn||e==="sp")&&un(e,(...r)=>t(...r),o)},yl=ht("bm"),io=ht("m"),wl=ht("bu"),_l=ht("u"),Ei=ht("bum"),Li=ht("um"),Al=ht("sp"),Cl=ht("rtg"),Tl=ht("rtc");function Sl(e,t=ke){un("ec",e,t)}const fr="components";function ze(e,t){return Mi(fr,e,!0,t)||e}const Di=Symbol.for("v-ndc");function Il(e){return _e(e)?Mi(fr,e,!1)||e:e||Di}function Mi(e,t,o=!0,r=!1){const s=xe||ke;if(s){const i=s.type;if(e===fr){const l=yc(i,!1);if(l&&(l===t||l===tt(t)||l===rn(tt(t))))return i}const a=Fr(s[e]||i[e],t)||Fr(s.appContext[e],t);return!a&&r?i:a}}function Fr(e,t){return e&&(e[t]||e[tt(t)]||e[rn(tt(t))])}function xl(e,t,o,r){let s;const i=o;if(V(e)||_e(e)){s=new Array(e.length);for(let a=0,l=e.length;a<l;a++)s[a]=t(e[a],a,void 0,i)}else if(typeof e=="number"){s=new Array(e);for(let a=0;a<e;a++)s[a]=t(a+1,a,void 0,i)}else if(be(e))if(e[Symbol.iterator])s=Array.from(e,(a,l)=>t(a,l,void 0,i));else{const a=Object.keys(e);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const d=a[l];s[l]=t(e[d],d,l,i)}}else s=[];return s}function An(e,t,o={},r,s){if(xe.isCE||xe.parent&&ho(xe.parent)&&xe.parent.isCE)return t!=="default"&&(o.name=t),y("slot",o,r&&r());let i=e[t];i&&i._c&&(i._d=!1),L();const a=i&&Ni(i(o)),l=fe(J,{key:(o.key||a&&a.key||`_${t}`)+(!a&&r?"_fb":"")},a||(r?r():[]),a&&e._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function Ni(e){return e.some(t=>Qo(t)?!(t.type===Re||t.type===J&&!Ni(t.children)):!0)?e:null}const Bn=e=>e?ta(e)?hn(e):Bn(e.parent):null,mo=Pe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Bn(e.parent),$root:e=>Bn(e.root),$emit:e=>e.emit,$options:e=>gr(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,pr(e.update)}),$nextTick:e=>e.n||(e.n=zt.bind(e.proxy)),$watch:e=>Yl.bind(e)}),Cn=(e,t)=>e!==ve&&!e.__isScriptSetup&&re(e,t),Pl={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:o,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=e;let d;if(t[0]!=="$"){const m=a[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return s[t];case 4:return o[t];case 3:return i[t]}else{if(Cn(r,t))return a[t]=1,r[t];if(s!==ve&&re(s,t))return a[t]=2,s[t];if((d=e.propsOptions[0])&&re(d,t))return a[t]=3,i[t];if(o!==ve&&re(o,t))return a[t]=4,o[t];Vn&&(a[t]=0)}}const p=mo[t];let f,h;if(p)return t==="$attrs"&&We(e.attrs,"get",""),p(e);if((f=l.__cssModules)&&(f=f[t]))return f;if(o!==ve&&re(o,t))return a[t]=4,o[t];if(h=c.config.globalProperties,re(h,t))return h[t]},set({_:e},t,o){const{data:r,setupState:s,ctx:i}=e;return Cn(s,t)?(s[t]=o,!0):r!==ve&&re(r,t)?(r[t]=o,!0):re(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=o,!0)},has({_:{data:e,setupState:t,accessCache:o,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!o[a]||e!==ve&&re(e,a)||Cn(t,a)||(l=i[0])&&re(l,a)||re(r,a)||re(mo,a)||re(s.config.globalProperties,a)},defineProperty(e,t,o){return o.get!=null?e._.accessCache[t]=0:re(o,"value")&&this.set(e,t,o.value,null),Reflect.defineProperty(e,t,o)}};function Br(e){return V(e)?e.reduce((t,o)=>(t[o]=null,t),{}):e}let Vn=!0;function kl(e){const t=gr(e),o=e.proxy,r=e.ctx;Vn=!1,t.beforeCreate&&Vr(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:d,created:p,beforeMount:f,mounted:h,beforeUpdate:m,updated:S,activated:I,deactivated:F,beforeDestroy:R,beforeUnmount:D,destroyed:U,unmounted:Y,render:se,renderTracked:$,renderTriggered:X,errorCaptured:he,serverPrefetch:G,expose:te,inheritAttrs:ie,components:W,directives:le,filters:Se}=t;if(d&&El(d,r,null),a)for(const ge in a){const ce=a[ge];z(ce)&&(r[ge]=ce.bind(o))}if(s){const ge=s.call(o,o);be(ge)&&(e.data=ko(ge))}if(Vn=!0,i)for(const ge in i){const ce=i[ge],ut=z(ce)?ce.bind(o,o):z(ce.get)?ce.get.bind(o,o):qe,bt=!z(ce)&&z(ce.set)?ce.set.bind(o):qe,rt=Te({get:ut,set:bt});Object.defineProperty(r,ge,{enumerable:!0,configurable:!0,get:()=>rt.value,set:Ne=>rt.value=Ne})}if(l)for(const ge in l)Ui(l[ge],r,o,ge);if(c){const ge=z(c)?c.call(o):c;Reflect.ownKeys(ge).forEach(ce=>{Vo(ce,ge[ce])})}p&&Vr(p,e,"c");function Ae(ge,ce){V(ce)?ce.forEach(ut=>ge(ut.bind(o))):ce&&ge(ce.bind(o))}if(Ae(yl,f),Ae(io,h),Ae(wl,m),Ae(_l,S),Ae(ml,I),Ae(bl,F),Ae(Sl,he),Ae(Tl,$),Ae(Cl,X),Ae(Ei,D),Ae(Li,Y),Ae(Al,G),V(te))if(te.length){const ge=e.exposed||(e.exposed={});te.forEach(ce=>{Object.defineProperty(ge,ce,{get:()=>o[ce],set:ut=>o[ce]=ut})})}else e.exposed||(e.exposed={});se&&e.render===qe&&(e.render=se),ie!=null&&(e.inheritAttrs=ie),W&&(e.components=W),le&&(e.directives=le)}function El(e,t,o=qe){V(e)&&(e=Gn(e));for(const r in e){const s=e[r];let i;be(s)?"default"in s?i=gt(s.from||r,s.default,!0):i=gt(s.from||r):i=gt(s),we(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[r]=i}}function Vr(e,t,o){Ze(V(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,o)}function Ui(e,t,o,r){const s=r.includes(".")?Zi(o,r):()=>o[r];if(_e(e)){const i=t[e];z(i)&&Me(s,i)}else if(z(e))Me(s,e.bind(o));else if(be(e))if(V(e))e.forEach(i=>Ui(i,t,o,r));else{const i=z(e.handler)?e.handler.bind(o):t[e.handler];z(i)&&Me(s,i,e)}}function gr(e){const t=e.type,{mixins:o,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,l=i.get(t);let c;return l?c=l:!s.length&&!o&&!r?c=t:(c={},s.length&&s.forEach(d=>qo(c,d,a,!0)),qo(c,t,a)),be(t)&&i.set(t,c),c}function qo(e,t,o,r=!1){const{mixins:s,extends:i}=t;i&&qo(e,i,o,!0),s&&s.forEach(a=>qo(e,a,o,!0));for(const a in t)if(!(r&&a==="expose")){const l=Ll[a]||o&&o[a];e[a]=l?l(e[a],t[a]):t[a]}return e}const Ll={data:Gr,props:jr,emits:jr,methods:po,computed:po,beforeCreate:De,created:De,beforeMount:De,mounted:De,beforeUpdate:De,updated:De,beforeDestroy:De,beforeUnmount:De,destroyed:De,unmounted:De,activated:De,deactivated:De,errorCaptured:De,serverPrefetch:De,components:po,directives:po,watch:Ml,provide:Gr,inject:Dl};function Gr(e,t){return t?e?function(){return Pe(z(e)?e.call(this,this):e,z(t)?t.call(this,this):t)}:t:e}function Dl(e,t){return po(Gn(e),Gn(t))}function Gn(e){if(V(e)){const t={};for(let o=0;o<e.length;o++)t[e[o]]=e[o];return t}return e}function De(e,t){return e?[...new Set([].concat(e,t))]:t}function po(e,t){return e?Pe(Object.create(null),e,t):t}function jr(e,t){return e?V(e)&&V(t)?[...new Set([...e,...t])]:Pe(Object.create(null),Br(e),Br(t??{})):t}function Ml(e,t){if(!e)return t;if(!t)return e;const o=Pe(Object.create(null),e);for(const r in t)o[r]=De(e[r],t[r]);return o}function Ri(){return{app:null,config:{isNativeTag:Ta,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nl=0;function Ul(e,t){return function(r,s=null){z(r)||(r=Pe({},r)),s!=null&&!be(s)&&(s=null);const i=Ri(),a=new WeakSet;let l=!1;const c=i.app={_uid:Nl++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:_c,get config(){return i.config},set config(d){},use(d,...p){return a.has(d)||(d&&z(d.install)?(a.add(d),d.install(c,...p)):z(d)&&(a.add(d),d(c,...p))),c},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),c},component(d,p){return p?(i.components[d]=p,c):i.components[d]},directive(d,p){return p?(i.directives[d]=p,c):i.directives[d]},mount(d,p,f){if(!l){const h=y(r,s);return h.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),p&&t?t(h,d):e(h,d,f),l=!0,c._container=d,d.__vue_app__=c,hn(h.component)}},unmount(){l&&(e(null,c._container),delete c._container.__vue_app__)},provide(d,p){return i.provides[d]=p,c},runWithContext(d){const p=to;to=c;try{return d()}finally{to=p}}};return c}}let to=null;function Vo(e,t){if(ke){let o=ke.provides;const r=ke.parent&&ke.parent.provides;r===o&&(o=ke.provides=Object.create(r)),o[e]=t}}function gt(e,t,o=!1){const r=ke||xe;if(r||to){const s=to?to._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return o&&z(t)?t.call(r&&r.proxy):t}}const Wi={},$i=()=>Object.create(Wi),Hi=e=>Object.getPrototypeOf(e)===Wi;function Rl(e,t,o,r=!1){const s={},i=$i();e.propsDefaults=Object.create(null),Oi(e,t,s,i);for(const a in e.propsOptions[0])a in s||(s[a]=void 0);o?e.props=r?s:fi(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function Wl(e,t,o,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=e,l=ae(s),[c]=e.propsOptions;let d=!1;if((r||a>0)&&!(a&16)){if(a&8){const p=e.vnode.dynamicProps;for(let f=0;f<p.length;f++){let h=p[f];if(dn(e.emitsOptions,h))continue;const m=t[h];if(c)if(re(i,h))m!==i[h]&&(i[h]=m,d=!0);else{const S=tt(h);s[S]=jn(c,l,S,m,e,!1)}else m!==i[h]&&(i[h]=m,d=!0)}}}else{Oi(e,t,s,i)&&(d=!0);let p;for(const f in l)(!t||!re(t,f)&&((p=jt(f))===f||!re(t,p)))&&(c?o&&(o[f]!==void 0||o[p]!==void 0)&&(s[f]=jn(c,l,f,void 0,e,!0)):delete s[f]);if(i!==l)for(const f in i)(!t||!re(t,f))&&(delete i[f],d=!0)}d&&ft(e.attrs,"set","")}function Oi(e,t,o,r){const[s,i]=e.propsOptions;let a=!1,l;if(t)for(let c in t){if(fo(c))continue;const d=t[c];let p;s&&re(s,p=tt(c))?!i||!i.includes(p)?o[p]=d:(l||(l={}))[p]=d:dn(e.emitsOptions,c)||(!(c in r)||d!==r[c])&&(r[c]=d,a=!0)}if(i){const c=ae(o),d=l||ve;for(let p=0;p<i.length;p++){const f=i[p];o[f]=jn(s,c,f,d[f],e,!re(d,f))}}return a}function jn(e,t,o,r,s,i){const a=e[o];if(a!=null){const l=re(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&z(c)){const{propsDefaults:d}=s;if(o in d)r=d[o];else{const p=Eo(s);r=d[o]=c.call(null,t),p()}}else r=c}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===jt(o))&&(r=!0))}return r}const $l=new WeakMap;function Fi(e,t,o=!1){const r=o?$l:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,a={},l=[];let c=!1;if(!z(e)){const p=f=>{c=!0;const[h,m]=Fi(f,t,!0);Pe(a,h),m&&l.push(...m)};!o&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!i&&!c)return be(e)&&r.set(e,Yt),Yt;if(V(i))for(let p=0;p<i.length;p++){const f=tt(i[p]);zr(f)&&(a[f]=ve)}else if(i)for(const p in i){const f=tt(p);if(zr(f)){const h=i[p],m=a[f]=V(h)||z(h)?{type:h}:Pe({},h),S=m.type;let I=!1,F=!0;if(V(S))for(let R=0;R<S.length;++R){const D=S[R],U=z(D)&&D.name;if(U==="Boolean"){I=!0;break}else U==="String"&&(F=!1)}else I=z(S)&&S.name==="Boolean";m[0]=I,m[1]=F,(I||re(m,"default"))&&l.push(f)}}const d=[a,l];return be(e)&&r.set(e,d),d}function zr(e){return e[0]!=="$"&&!fo(e)}const Bi=e=>e[0]==="_"||e==="$stable",hr=e=>V(e)?e.map(lt):[lt(e)],Hl=(e,t,o)=>{if(t._n)return t;const r=ne((...s)=>hr(t(...s)),o);return r._c=!1,r},Vi=(e,t,o)=>{const r=e._ctx;for(const s in e){if(Bi(s))continue;const i=e[s];if(z(i))t[s]=Hl(s,i,r);else if(i!=null){const a=hr(i);t[s]=()=>a}}},Gi=(e,t)=>{const o=hr(t);e.slots.default=()=>o},ji=(e,t,o)=>{for(const r in t)(o||r!=="_")&&(e[r]=t[r])},Ol=(e,t,o)=>{const r=e.slots=$i();if(e.vnode.shapeFlag&32){const s=t._;s?(ji(r,t,o),o&&Qs(r,"_",s,!0)):Vi(t,r)}else t&&Gi(e,t)},Fl=(e,t,o)=>{const{vnode:r,slots:s}=e;let i=!0,a=ve;if(r.shapeFlag&32){const l=t._;l?o&&l===1?i=!1:ji(s,t,o):(i=!t.$stable,Vi(t,s)),a=t}else t&&(Gi(e,t),a={default:1});if(i)for(const l in s)!Bi(l)&&a[l]==null&&delete s[l]};function zn(e,t,o,r,s=!1){if(V(e)){e.forEach((h,m)=>zn(h,t&&(V(t)?t[m]:t),o,r,s));return}if(ho(r)&&!s)return;const i=r.shapeFlag&4?hn(r.component):r.el,a=s?null:i,{i:l,r:c}=e,d=t&&t.r,p=l.refs===ve?l.refs={}:l.refs,f=l.setupState;if(d!=null&&d!==c&&(_e(d)?(p[d]=null,re(f,d)&&(f[d]=null)):we(d)&&(d.value=null)),z(c))kt(c,l,12,[a,p]);else{const h=_e(c),m=we(c);if(h||m){const S=()=>{if(e.f){const I=h?re(f,c)?f[c]:p[c]:c.value;s?V(I)&&tr(I,i):V(I)?I.includes(i)||I.push(i):h?(p[c]=[i],re(f,c)&&(f[c]=p[c])):(c.value=[i],e.k&&(p[e.k]=c.value))}else h?(p[c]=a,re(f,c)&&(f[c]=a)):m&&(c.value=a,e.k&&(p[e.k]=a))};a?(S.id=-1,Ue(S,o)):S()}}}const zi=Symbol("_vte"),Bl=e=>e.__isTeleport,bo=e=>e&&(e.disabled||e.disabled===""),Kr=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Jr=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Kn=(e,t)=>{const o=e&&e.to;return _e(o)?t?t(o):null:o},Vl={name:"Teleport",__isTeleport:!0,process(e,t,o,r,s,i,a,l,c,d){const{mc:p,pc:f,pbc:h,o:{insert:m,querySelector:S,createText:I,createComment:F}}=d,R=bo(t.props);let{shapeFlag:D,children:U,dynamicChildren:Y}=t;if(e==null){const se=t.el=I(""),$=t.anchor=I("");m(se,o,r),m($,o,r);const X=t.target=Kn(t.props,S),he=Ji(X,t,I,m);X&&(a==="svg"||Kr(X)?a="svg":(a==="mathml"||Jr(X))&&(a="mathml"));const G=(te,ie)=>{D&16&&p(U,te,ie,s,i,a,l,c)};R?G(o,$):X&&G(X,he)}else{t.el=e.el,t.targetStart=e.targetStart;const se=t.anchor=e.anchor,$=t.target=e.target,X=t.targetAnchor=e.targetAnchor,he=bo(e.props),G=he?o:$,te=he?se:X;if(a==="svg"||Kr($)?a="svg":(a==="mathml"||Jr($))&&(a="mathml"),Y?(h(e.dynamicChildren,Y,G,s,i,a,l),mr(e,t,!0)):c||f(e,t,G,te,s,i,a,l,!1),R)he?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):$o(t,o,se,d,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const ie=t.target=Kn(t.props,S);ie&&$o(t,ie,null,d,0)}else he&&$o(t,$,X,d,1)}Ki(t)},remove(e,t,o,{um:r,o:{remove:s}},i){const{shapeFlag:a,children:l,anchor:c,targetStart:d,targetAnchor:p,target:f,props:h}=e;if(f&&(s(d),s(p)),i&&s(c),a&16){const m=i||!bo(h);for(let S=0;S<l.length;S++){const I=l[S];r(I,t,o,m,!!I.dynamicChildren)}}},move:$o,hydrate:Gl};function $o(e,t,o,{o:{insert:r},m:s},i=2){i===0&&r(e.targetAnchor,t,o);const{el:a,anchor:l,shapeFlag:c,children:d,props:p}=e,f=i===2;if(f&&r(a,t,o),(!f||bo(p))&&c&16)for(let h=0;h<d.length;h++)s(d[h],t,o,2);f&&r(l,t,o)}function Gl(e,t,o,r,s,i,{o:{nextSibling:a,parentNode:l,querySelector:c,insert:d,createText:p}},f){const h=t.target=Kn(t.props,c);if(h){const m=h._lpa||h.firstChild;if(t.shapeFlag&16)if(bo(t.props))t.anchor=f(a(e),t,l(e),o,r,s,i),t.targetStart=m,t.targetAnchor=m&&a(m);else{t.anchor=a(e);let S=m;for(;S;){if(S&&S.nodeType===8){if(S.data==="teleport start anchor")t.targetStart=S;else if(S.data==="teleport anchor"){t.targetAnchor=S,h._lpa=t.targetAnchor&&a(t.targetAnchor);break}}S=a(S)}t.targetAnchor||Ji(h,t,p,d),f(m&&a(m),t,h,o,r,s,i)}Ki(t)}return t.anchor&&a(t.anchor)}const jl=Vl;function Ki(e){const t=e.ctx;if(t&&t.ut){let o=e.children[0].el;for(;o&&o!==e.targetAnchor;)o.nodeType===1&&o.setAttribute("data-v-owner",t.uid),o=o.nextSibling;t.ut()}}function Ji(e,t,o,r){const s=t.targetStart=o(""),i=t.targetAnchor=o("");return s[zi]=i,e&&(r(s,e),r(i,e)),i}const Ue=ic;function zl(e){return Kl(e)}function Kl(e,t){const o=Zs();o.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:d,setElementText:p,parentNode:f,nextSibling:h,setScopeId:m=qe,insertStaticContent:S}=e,I=(u,g,b,A=null,w=null,T=null,k=void 0,x=null,P=!!g.dynamicChildren)=>{if(u===g)return;u&&!Ot(u,g)&&(A=_(u),Ne(u,w,T,!0),u=null),g.patchFlag===-2&&(P=!1,g.dynamicChildren=null);const{type:C,ref:N,shapeFlag:B}=g;switch(C){case pn:F(u,g,b,A);break;case Re:R(u,g,b,A);break;case Go:u==null&&D(g,b,A,k);break;case J:W(u,g,b,A,w,T,k,x,P);break;default:B&1?se(u,g,b,A,w,T,k,x,P):B&6?le(u,g,b,A,w,T,k,x,P):(B&64||B&128)&&C.process(u,g,b,A,w,T,k,x,P,H)}N!=null&&w&&zn(N,u&&u.ref,T,g||u,!g)},F=(u,g,b,A)=>{if(u==null)r(g.el=l(g.children),b,A);else{const w=g.el=u.el;g.children!==u.children&&d(w,g.children)}},R=(u,g,b,A)=>{u==null?r(g.el=c(g.children||""),b,A):g.el=u.el},D=(u,g,b,A)=>{[u.el,u.anchor]=S(u.children,g,b,A,u.el,u.anchor)},U=({el:u,anchor:g},b,A)=>{let w;for(;u&&u!==g;)w=h(u),r(u,b,A),u=w;r(g,b,A)},Y=({el:u,anchor:g})=>{let b;for(;u&&u!==g;)b=h(u),s(u),u=b;s(g)},se=(u,g,b,A,w,T,k,x,P)=>{g.type==="svg"?k="svg":g.type==="math"&&(k="mathml"),u==null?$(g,b,A,w,T,k,x,P):G(u,g,w,T,k,x,P)},$=(u,g,b,A,w,T,k,x)=>{let P,C;const{props:N,shapeFlag:B,transition:O,dirs:K}=u;if(P=u.el=a(u.type,T,N&&N.is,N),B&8?p(P,u.children):B&16&&he(u.children,P,null,A,w,Tn(u,T),k,x),K&&Ut(u,null,A,"created"),X(P,u,u.scopeId,k,A),N){for(const me in N)me!=="value"&&!fo(me)&&i(P,me,null,N[me],T,A);"value"in N&&i(P,"value",null,N.value,T),(C=N.onVnodeBeforeMount)&&it(C,A,u)}K&&Ut(u,null,A,"beforeMount");const ee=Jl(w,O);ee&&O.beforeEnter(P),r(P,g,b),((C=N&&N.onVnodeMounted)||ee||K)&&Ue(()=>{C&&it(C,A,u),ee&&O.enter(P),K&&Ut(u,null,A,"mounted")},w)},X=(u,g,b,A,w)=>{if(b&&m(u,b),A)for(let T=0;T<A.length;T++)m(u,A[T]);if(w){let T=w.subTree;if(g===T){const k=w.vnode;X(u,k,k.scopeId,k.slotScopeIds,w.parent)}}},he=(u,g,b,A,w,T,k,x,P=0)=>{for(let C=P;C<u.length;C++){const N=u[C]=x?St(u[C]):lt(u[C]);I(null,N,g,b,A,w,T,k,x)}},G=(u,g,b,A,w,T,k)=>{const x=g.el=u.el;let{patchFlag:P,dynamicChildren:C,dirs:N}=g;P|=u.patchFlag&16;const B=u.props||ve,O=g.props||ve;let K;if(b&&Rt(b,!1),(K=O.onVnodeBeforeUpdate)&&it(K,b,g,u),N&&Ut(g,u,b,"beforeUpdate"),b&&Rt(b,!0),(B.innerHTML&&O.innerHTML==null||B.textContent&&O.textContent==null)&&p(x,""),C?te(u.dynamicChildren,C,x,b,A,Tn(g,w),T):k||ce(u,g,x,null,b,A,Tn(g,w),T,!1),P>0){if(P&16)ie(x,B,O,b,w);else if(P&2&&B.class!==O.class&&i(x,"class",null,O.class,w),P&4&&i(x,"style",B.style,O.style,w),P&8){const ee=g.dynamicProps;for(let me=0;me<ee.length;me++){const ue=ee[me],Ie=B[ue],Xe=O[ue];(Xe!==Ie||ue==="value")&&i(x,ue,Ie,Xe,w,b)}}P&1&&u.children!==g.children&&p(x,g.children)}else!k&&C==null&&ie(x,B,O,b,w);((K=O.onVnodeUpdated)||N)&&Ue(()=>{K&&it(K,b,g,u),N&&Ut(g,u,b,"updated")},A)},te=(u,g,b,A,w,T,k)=>{for(let x=0;x<g.length;x++){const P=u[x],C=g[x],N=P.el&&(P.type===J||!Ot(P,C)||P.shapeFlag&70)?f(P.el):b;I(P,C,N,null,A,w,T,k,!0)}},ie=(u,g,b,A,w)=>{if(g!==b){if(g!==ve)for(const T in g)!fo(T)&&!(T in b)&&i(u,T,g[T],null,w,A);for(const T in b){if(fo(T))continue;const k=b[T],x=g[T];k!==x&&T!=="value"&&i(u,T,x,k,w,A)}"value"in b&&i(u,"value",g.value,b.value,w)}},W=(u,g,b,A,w,T,k,x,P)=>{const C=g.el=u?u.el:l(""),N=g.anchor=u?u.anchor:l("");let{patchFlag:B,dynamicChildren:O,slotScopeIds:K}=g;K&&(x=x?x.concat(K):K),u==null?(r(C,b,A),r(N,b,A),he(g.children||[],b,N,w,T,k,x,P)):B>0&&B&64&&O&&u.dynamicChildren?(te(u.dynamicChildren,O,b,w,T,k,x),(g.key!=null||w&&g===w.subTree)&&mr(u,g,!0)):ce(u,g,b,N,w,T,k,x,P)},le=(u,g,b,A,w,T,k,x,P)=>{g.slotScopeIds=x,u==null?g.shapeFlag&512?w.ctx.activate(g,b,A,k,P):Se(g,b,A,w,T,k,P):Ye(u,g,P)},Se=(u,g,b,A,w,T,k)=>{const x=u.component=fc(u,A,w);if(cn(u)&&(x.ctx.renderer=H),hc(x,!1,k),x.asyncDep){if(w&&w.registerDep(x,Ae,k),!u.el){const P=x.subTree=y(Re);R(null,P,g,b)}}else Ae(x,u,g,b,w,T,k)},Ye=(u,g,b)=>{const A=g.component=u.component;if(nc(u,g,b))if(A.asyncDep&&!A.asyncResolved){ge(A,g,b);return}else A.next=g,ul(A.update),A.effect.dirty=!0,A.update();else g.el=u.el,A.vnode=g},Ae=(u,g,b,A,w,T,k)=>{const x=()=>{if(u.isMounted){let{next:N,bu:B,u:O,parent:K,vnode:ee}=u;{const qt=qi(u);if(qt){N&&(N.el=ee.el,ge(u,N,k)),qt.asyncDep.then(()=>{u.isUnmounted||x()});return}}let me=N,ue;Rt(u,!1),N?(N.el=ee.el,ge(u,N,k)):N=ee,B&&Fo(B),(ue=N.props&&N.props.onVnodeBeforeUpdate)&&it(ue,K,N,ee),Rt(u,!0);const Ie=Sn(u),Xe=u.subTree;u.subTree=Ie,I(Xe,Ie,f(Xe.el),_(Xe),u,w,T),N.el=Ie.el,me===null&&rc(u,Ie.el),O&&Ue(O,w),(ue=N.props&&N.props.onVnodeUpdated)&&Ue(()=>it(ue,K,N,ee),w)}else{let N;const{el:B,props:O}=g,{bm:K,m:ee,parent:me}=u,ue=ho(g);if(Rt(u,!1),K&&Fo(K),!ue&&(N=O&&O.onVnodeBeforeMount)&&it(N,me,g),Rt(u,!0),B&&ye){const Ie=()=>{u.subTree=Sn(u),ye(B,u.subTree,u,w,null)};ue?g.type.__asyncLoader().then(()=>!u.isUnmounted&&Ie()):Ie()}else{const Ie=u.subTree=Sn(u);I(null,Ie,b,A,u,w,T),g.el=Ie.el}if(ee&&Ue(ee,w),!ue&&(N=O&&O.onVnodeMounted)){const Ie=g;Ue(()=>it(N,me,Ie),w)}(g.shapeFlag&256||me&&ho(me.vnode)&&me.vnode.shapeFlag&256)&&u.a&&Ue(u.a,w),u.isMounted=!0,g=b=A=null}},P=u.effect=new rr(x,qe,()=>pr(C),u.scope),C=u.update=()=>{P.dirty&&P.run()};C.i=u,C.id=u.uid,Rt(u,!0),C()},ge=(u,g,b)=>{g.component=u;const A=u.vnode.props;u.vnode=g,u.next=null,Wl(u,g.props,A,b),Fl(u,g.children,b),Mt(),Hr(u),Nt()},ce=(u,g,b,A,w,T,k,x,P=!1)=>{const C=u&&u.children,N=u?u.shapeFlag:0,B=g.children,{patchFlag:O,shapeFlag:K}=g;if(O>0){if(O&128){bt(C,B,b,A,w,T,k,x,P);return}else if(O&256){ut(C,B,b,A,w,T,k,x,P);return}}K&8?(N&16&&Be(C,w,T),B!==C&&p(b,B)):N&16?K&16?bt(C,B,b,A,w,T,k,x,P):Be(C,w,T,!0):(N&8&&p(b,""),K&16&&he(B,b,A,w,T,k,x,P))},ut=(u,g,b,A,w,T,k,x,P)=>{u=u||Yt,g=g||Yt;const C=u.length,N=g.length,B=Math.min(C,N);let O;for(O=0;O<B;O++){const K=g[O]=P?St(g[O]):lt(g[O]);I(u[O],K,b,null,w,T,k,x,P)}C>N?Be(u,w,T,!0,!1,B):he(g,b,A,w,T,k,x,P,B)},bt=(u,g,b,A,w,T,k,x,P)=>{let C=0;const N=g.length;let B=u.length-1,O=N-1;for(;C<=B&&C<=O;){const K=u[C],ee=g[C]=P?St(g[C]):lt(g[C]);if(Ot(K,ee))I(K,ee,b,null,w,T,k,x,P);else break;C++}for(;C<=B&&C<=O;){const K=u[B],ee=g[O]=P?St(g[O]):lt(g[O]);if(Ot(K,ee))I(K,ee,b,null,w,T,k,x,P);else break;B--,O--}if(C>B){if(C<=O){const K=O+1,ee=K<N?g[K].el:A;for(;C<=O;)I(null,g[C]=P?St(g[C]):lt(g[C]),b,ee,w,T,k,x,P),C++}}else if(C>O)for(;C<=B;)Ne(u[C],w,T,!0),C++;else{const K=C,ee=C,me=new Map;for(C=ee;C<=O;C++){const Oe=g[C]=P?St(g[C]):lt(g[C]);Oe.key!=null&&me.set(Oe.key,C)}let ue,Ie=0;const Xe=O-ee+1;let qt=!1,Pr=0;const ao=new Array(Xe);for(C=0;C<Xe;C++)ao[C]=0;for(C=K;C<=B;C++){const Oe=u[C];if(Ie>=Xe){Ne(Oe,w,T,!0);continue}let st;if(Oe.key!=null)st=me.get(Oe.key);else for(ue=ee;ue<=O;ue++)if(ao[ue-ee]===0&&Ot(Oe,g[ue])){st=ue;break}st===void 0?Ne(Oe,w,T,!0):(ao[st-ee]=C+1,st>=Pr?Pr=st:qt=!0,I(Oe,g[st],b,null,w,T,k,x,P),Ie++)}const kr=qt?ql(ao):Yt;for(ue=kr.length-1,C=Xe-1;C>=0;C--){const Oe=ee+C,st=g[Oe],Er=Oe+1<N?g[Oe+1].el:A;ao[C]===0?I(null,st,b,Er,w,T,k,x,P):qt&&(ue<0||C!==kr[ue]?rt(st,b,Er,2):ue--)}}},rt=(u,g,b,A,w=null)=>{const{el:T,type:k,transition:x,children:P,shapeFlag:C}=u;if(C&6){rt(u.component.subTree,g,b,A);return}if(C&128){u.suspense.move(g,b,A);return}if(C&64){k.move(u,g,b,H);return}if(k===J){r(T,g,b);for(let B=0;B<P.length;B++)rt(P[B],g,b,A);r(u.anchor,g,b);return}if(k===Go){U(u,g,b);return}if(A!==2&&C&1&&x)if(A===0)x.beforeEnter(T),r(T,g,b),Ue(()=>x.enter(T),w);else{const{leave:B,delayLeave:O,afterLeave:K}=x,ee=()=>r(T,g,b),me=()=>{B(T,()=>{ee(),K&&K()})};O?O(T,ee,me):me()}else r(T,g,b)},Ne=(u,g,b,A=!1,w=!1)=>{const{type:T,props:k,ref:x,children:P,dynamicChildren:C,shapeFlag:N,patchFlag:B,dirs:O,cacheIndex:K}=u;if(B===-2&&(w=!1),x!=null&&zn(x,null,b,u,!0),K!=null&&(g.renderCache[K]=void 0),N&256){g.ctx.deactivate(u);return}const ee=N&1&&O,me=!ho(u);let ue;if(me&&(ue=k&&k.onVnodeBeforeUnmount)&&it(ue,g,u),N&6)Lo(u.component,b,A);else{if(N&128){u.suspense.unmount(b,A);return}ee&&Ut(u,null,g,"beforeUnmount"),N&64?u.type.remove(u,g,b,H,A):C&&!C.hasOnce&&(T!==J||B>0&&B&64)?Be(C,g,b,!1,!0):(T===J&&B&384||!w&&N&16)&&Be(P,g,b),A&&Kt(u)}(me&&(ue=k&&k.onVnodeUnmounted)||ee)&&Ue(()=>{ue&&it(ue,g,u),ee&&Ut(u,null,g,"unmounted")},b)},Kt=u=>{const{type:g,el:b,anchor:A,transition:w}=u;if(g===J){Jt(b,A);return}if(g===Go){Y(u);return}const T=()=>{s(b),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(u.shapeFlag&1&&w&&!w.persisted){const{leave:k,delayLeave:x}=w,P=()=>k(b,T);x?x(u.el,T,P):P()}else T()},Jt=(u,g)=>{let b;for(;u!==g;)b=h(u),s(u),u=b;s(g)},Lo=(u,g,b)=>{const{bum:A,scope:w,update:T,subTree:k,um:x,m:P,a:C}=u;qr(P),qr(C),A&&Fo(A),w.stop(),T&&(T.active=!1,Ne(k,u,g,b)),x&&Ue(x,g),Ue(()=>{u.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},Be=(u,g,b,A=!1,w=!1,T=0)=>{for(let k=T;k<u.length;k++)Ne(u[k],g,b,A,w)},_=u=>{if(u.shapeFlag&6)return _(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const g=h(u.anchor||u.el),b=g&&g[zi];return b?h(b):g};let M=!1;const E=(u,g,b)=>{u==null?g._vnode&&Ne(g._vnode,null,null,!0):I(g._vnode||null,u,g,null,null,null,b),g._vnode=u,M||(M=!0,Hr(),Ci(),M=!1)},H={p:I,um:Ne,m:rt,r:Kt,mt:Se,mc:he,pc:ce,pbc:te,n:_,o:e};let de,ye;return{render:E,hydrate:de,createApp:Ul(E,de)}}function Tn({type:e,props:t},o){return o==="svg"&&e==="foreignObject"||o==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:o}function Rt({effect:e,update:t},o){e.allowRecurse=t.allowRecurse=o}function Jl(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function mr(e,t,o=!1){const r=e.children,s=t.children;if(V(r)&&V(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=St(s[i]),l.el=a.el),!o&&l.patchFlag!==-2&&mr(a,l)),l.type===pn&&(l.el=a.el)}}function ql(e){const t=e.slice(),o=[0];let r,s,i,a,l;const c=e.length;for(r=0;r<c;r++){const d=e[r];if(d!==0){if(s=o[o.length-1],e[s]<d){t[r]=s,o.push(r);continue}for(i=0,a=o.length-1;i<a;)l=i+a>>1,e[o[l]]<d?i=l+1:a=l;d<e[o[i]]&&(i>0&&(t[r]=o[i-1]),o[i]=r)}}for(i=o.length,a=o[i-1];i-- >0;)o[i]=a,a=t[a];return o}function qi(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:qi(t)}function qr(e){if(e)for(let t=0;t<e.length;t++)e[t].active=!1}const Ql=Symbol.for("v-scx"),Zl=()=>gt(Ql),Ho={};function Me(e,t,o){return Qi(e,t,o)}function Qi(e,t,{immediate:o,deep:r,flush:s,once:i,onTrack:a,onTrigger:l}=ve){if(t&&i){const $=t;t=(...X)=>{$(...X),se()}}const c=ke,d=$=>r===!0?$:xt($,r===!1?1:void 0);let p,f=!1,h=!1;if(we(e)?(p=()=>e.value,f=no(e)):go(e)?(p=()=>d(e),f=!0):V(e)?(h=!0,f=e.some($=>go($)||no($)),p=()=>e.map($=>{if(we($))return $.value;if(go($))return d($);if(z($))return kt($,c,2)})):z(e)?t?p=()=>kt(e,c,2):p=()=>(m&&m(),Ze(e,c,3,[S])):p=qe,t&&r){const $=p;p=()=>xt($())}let m,S=$=>{m=U.onStop=()=>{kt($,c,4),m=U.onStop=void 0}},I;if(gn)if(S=qe,t?o&&Ze(t,c,3,[p(),h?[]:void 0,S]):p(),s==="sync"){const $=Zl();I=$.__watcherHandles||($.__watcherHandles=[])}else return qe;let F=h?new Array(e.length).fill(Ho):Ho;const R=()=>{if(!(!U.active||!U.dirty))if(t){const $=U.run();(r||f||(h?$.some((X,he)=>Et(X,F[he])):Et($,F)))&&(m&&m(),Ze(t,c,3,[$,F===Ho?void 0:h&&F[0]===Ho?[]:F,S]),F=$)}else U.run()};R.allowRecurse=!!t;let D;s==="sync"?D=R:s==="post"?D=()=>Ue(R,c&&c.suspense):(R.pre=!0,c&&(R.id=c.uid),D=()=>pr(R));const U=new rr(p,qe,D),Y=$a(),se=()=>{U.stop(),Y&&tr(Y.effects,U)};return t?o?R():F=U.run():s==="post"?Ue(U.run.bind(U),c&&c.suspense):U.run(),I&&I.push(se),se}function Yl(e,t,o){const r=this.proxy,s=_e(e)?e.includes(".")?Zi(r,e):()=>r[e]:e.bind(r,r);let i;z(t)?i=t:(i=t.handler,o=t);const a=Eo(this),l=Qi(s,i.bind(r),o);return a(),l}function Zi(e,t){const o=t.split(".");return()=>{let r=e;for(let s=0;s<o.length&&r;s++)r=r[o[s]];return r}}function xt(e,t=1/0,o){if(t<=0||!be(e)||e.__v_skip||(o=o||new Set,o.has(e)))return e;if(o.add(e),t--,we(e))xt(e.value,t,o);else if(V(e))for(let r=0;r<e.length;r++)xt(e[r],t,o);else if(zs(e)||Xt(e))e.forEach(r=>{xt(r,t,o)});else if(qs(e)){for(const r in e)xt(e[r],t,o);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&xt(e[r],t,o)}return e}const Xl=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${tt(t)}Modifiers`]||e[`${jt(t)}Modifiers`];function ec(e,t,...o){if(e.isUnmounted)return;const r=e.vnode.props||ve;let s=o;const i=t.startsWith("update:"),a=i&&Xl(r,t.slice(7));a&&(a.trim&&(s=o.map(p=>_e(p)?p.trim():p)),a.number&&(s=o.map(Un)));let l,c=r[l=yn(t)]||r[l=yn(tt(t))];!c&&i&&(c=r[l=yn(jt(t))]),c&&Ze(c,e,6,s);const d=r[l+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Ze(d,e,6,s)}}function Yi(e,t,o=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let a={},l=!1;if(!z(e)){const c=d=>{const p=Yi(d,t,!0);p&&(l=!0,Pe(a,p))};!o&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!l?(be(e)&&r.set(e,null),null):(V(i)?i.forEach(c=>a[c]=null):Pe(a,i),be(e)&&r.set(e,a),a)}function dn(e,t){return!e||!tn(t)?!1:(t=t.slice(2).replace(/Once$/,""),re(e,t[0].toLowerCase()+t.slice(1))||re(e,jt(t))||re(e,t))}function Sn(e){const{type:t,vnode:o,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:d,renderCache:p,props:f,data:h,setupState:m,ctx:S,inheritAttrs:I}=e,F=Ko(e);let R,D;try{if(o.shapeFlag&4){const Y=s||r,se=Y;R=lt(d.call(se,Y,p,f,m,h,S)),D=l}else{const Y=t;R=lt(Y.length>1?Y(f,{attrs:l,slots:a,emit:c}):Y(f,null)),D=t.props?l:tc(l)}}catch(Y){vo.length=0,an(Y,e,1),R=y(Re)}let U=R;if(D&&I!==!1){const Y=Object.keys(D),{shapeFlag:se}=U;Y.length&&se&7&&(i&&Y.some(er)&&(D=oc(D,i)),U=Lt(U,D,!1,!0))}return o.dirs&&(U=Lt(U,null,!1,!0),U.dirs=U.dirs?U.dirs.concat(o.dirs):o.dirs),o.transition&&(U.transition=o.transition),R=U,Ko(F),R}const tc=e=>{let t;for(const o in e)(o==="class"||o==="style"||tn(o))&&((t||(t={}))[o]=e[o]);return t},oc=(e,t)=>{const o={};for(const r in e)(!er(r)||!(r.slice(9)in t))&&(o[r]=e[r]);return o};function nc(e,t,o){const{props:r,children:s,component:i}=e,{props:a,children:l,patchFlag:c}=t,d=i.emitsOptions;if(t.dirs||t.transition)return!0;if(o&&c>=0){if(c&1024)return!0;if(c&16)return r?Qr(r,a,d):!!a;if(c&8){const p=t.dynamicProps;for(let f=0;f<p.length;f++){const h=p[f];if(a[h]!==r[h]&&!dn(d,h))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?Qr(r,a,d):!0:!!a;return!1}function Qr(e,t,o){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!dn(o,i))return!0}return!1}function rc({vnode:e,parent:t},o){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=o,t=t.parent;else break}}const sc=e=>e.__isSuspense;function ic(e,t){t&&t.pendingBranch?V(e)?t.effects.push(...e):t.effects.push(e):dl(e)}const J=Symbol.for("v-fgt"),pn=Symbol.for("v-txt"),Re=Symbol.for("v-cmt"),Go=Symbol.for("v-stc"),vo=[];let Fe=null;function L(e=!1){vo.push(Fe=e?null:[])}function ac(){vo.pop(),Fe=vo[vo.length-1]||null}let To=1;function Zr(e){To+=e,e<0&&Fe&&(Fe.hasOnce=!0)}function Xi(e){return e.dynamicChildren=To>0?Fe||Yt:null,ac(),To>0&&Fe&&Fe.push(e),e}function Z(e,t,o,r,s,i){return Xi(v(e,t,o,r,s,i,!0))}function fe(e,t,o,r,s){return Xi(y(e,t,o,r,s,!0))}function Qo(e){return e?e.__v_isVNode===!0:!1}function Ot(e,t){return e.type===t.type&&e.key===t.key}const ea=({key:e})=>e??null,jo=({ref:e,ref_key:t,ref_for:o})=>(typeof e=="number"&&(e=""+e),e!=null?_e(e)||we(e)||z(e)?{i:xe,r:e,k:t,f:!!o}:e:null);function v(e,t=null,o=null,r=0,s=null,i=e===J?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ea(t),ref:t&&jo(t),scopeId:ln,slotScopeIds:null,children:o,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:xe};return l?(br(c,o),i&128&&e.normalize(c)):o&&(c.shapeFlag|=_e(o)?8:16),To>0&&!a&&Fe&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Fe.push(c),c}const y=lc;function lc(e,t=null,o=null,r=0,s=null,i=!1){if((!e||e===Di)&&(e=Re),Qo(e)){const l=Lt(e,t,!0);return o&&br(l,o),To>0&&!i&&Fe&&(l.shapeFlag&6?Fe[Fe.indexOf(e)]=l:Fe.push(l)),l.patchFlag=-2,l}if(wc(e)&&(e=e.__vccOpts),t){t=cc(t);let{class:l,style:c}=t;l&&!_e(l)&&(t.class=nr(l)),be(c)&&(hi(c)&&!V(c)&&(c=Pe({},c)),t.style=Vt(c))}const a=_e(e)?1:sc(e)?128:Bl(e)?64:be(e)?4:z(e)?2:0;return v(e,t,o,r,s,a,i,!0)}function cc(e){return e?hi(e)||Hi(e)?Pe({},e):e:null}function Lt(e,t,o=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=e,d=t?uc(s||{},t):s,p={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&ea(d),ref:t&&t.ref?o&&i?V(i)?i.concat(jo(t)):[i,jo(t)]:jo(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==J?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Lt(e.ssContent),ssFallback:e.ssFallback&&Lt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&Jo(p,c.clone(p)),p}function Q(e=" ",t=0){return y(pn,null,e,t)}function fn(e,t){const o=y(Go,null,e);return o.staticCount=t,o}function Ke(e="",t=!1){return t?(L(),fe(Re,null,e)):y(Re,null,e)}function lt(e){return e==null||typeof e=="boolean"?y(Re):V(e)?y(J,null,e.slice()):typeof e=="object"?St(e):y(pn,null,String(e))}function St(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Lt(e)}function br(e,t){let o=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(V(t))o=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),br(e,s()),s._c&&(s._d=!0));return}else{o=32;const s=t._;!s&&!Hi(t)?t._ctx=xe:s===3&&xe&&(xe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else z(t)?(t={default:t,_ctx:xe},o=32):(t=String(t),r&64?(o=16,t=[Q(t)]):o=8);e.children=t,e.shapeFlag|=o}function uc(...e){const t={};for(let o=0;o<e.length;o++){const r=e[o];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=nr([t.class,r.class]));else if(s==="style")t.style=Vt([t.style,r.style]);else if(tn(s)){const i=t[s],a=r[s];a&&i!==a&&!(V(i)&&i.includes(a))&&(t[s]=i?[].concat(i,a):a)}else s!==""&&(t[s]=r[s])}return t}function it(e,t,o,r=null){Ze(e,t,7,[o,r])}const dc=Ri();let pc=0;function fc(e,t,o){const r=e.type,s=(t?t.appContext:e.appContext)||dc,i={uid:pc++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new ti(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fi(r,s),emitsOptions:Yi(r,s),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:r.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,suspense:o,suspenseId:o?o.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=ec.bind(null,i),e.ce&&e.ce(i),i}let ke=null;const gc=()=>ke||xe;let Zo,Jn;{const e=Zs(),t=(o,r)=>{let s;return(s=e[o])||(s=e[o]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Zo=t("__VUE_INSTANCE_SETTERS__",o=>ke=o),Jn=t("__VUE_SSR_SETTERS__",o=>gn=o)}const Eo=e=>{const t=ke;return Zo(e),e.scope.on(),()=>{e.scope.off(),Zo(t)}},Yr=()=>{ke&&ke.scope.off(),Zo(null)};function ta(e){return e.vnode.shapeFlag&4}let gn=!1;function hc(e,t=!1,o=!1){t&&Jn(t);const{props:r,children:s}=e.vnode,i=ta(e);Rl(e,r,i,t),Ol(e,s,o);const a=i?mc(e,t):void 0;return t&&Jn(!1),a}function mc(e,t){const o=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Pl);const{setup:r}=o;if(r){const s=e.setupContext=r.length>1?vc(e):null,i=Eo(e);Mt();const a=kt(r,e,0,[e.props,s]);if(Nt(),i(),Ks(a)){if(a.then(Yr,Yr),t)return a.then(l=>{Xr(e,l,t)}).catch(l=>{an(l,e,0)});e.asyncDep=a}else Xr(e,a,t)}else oa(e,t)}function Xr(e,t,o){z(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:be(t)&&(e.setupState=wi(t)),oa(e,o)}let es;function oa(e,t,o){const r=e.type;if(!e.render){if(!t&&es&&!r.render){const s=r.template||gr(e).template;if(s){const{isCustomElement:i,compilerOptions:a}=e.appContext.config,{delimiters:l,compilerOptions:c}=r,d=Pe(Pe({isCustomElement:i,delimiters:l},a),c);r.render=es(s,d)}}e.render=r.render||qe}{const s=Eo(e);Mt();try{kl(e)}finally{Nt(),s()}}}const bc={get(e,t){return We(e,"get",""),e[t]}};function vc(e){const t=o=>{e.exposed=o||{}};return{attrs:new Proxy(e.attrs,bc),slots:e.slots,emit:e.emit,expose:t}}function hn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(wi(mi(e.exposed)),{get(t,o){if(o in t)return t[o];if(o in mo)return mo[o](e)},has(t,o){return o in t||o in mo}})):e.proxy}function yc(e,t=!0){return z(e)?e.displayName||e.name:e.name||t&&e.__name}function wc(e){return z(e)&&"__vccOpts"in e}const Te=(e,t)=>rl(e,t,gn);function je(e,t,o){const r=arguments.length;return r===2?be(t)&&!V(t)?Qo(t)?y(e,null,[t]):y(e,t):y(e,null,t):(r>3?o=Array.prototype.slice.call(arguments,2):r===3&&Qo(o)&&(o=[o]),y(e,t,o))}const _c="3.4.38";/**
* @vue/runtime-dom v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Ac="http://www.w3.org/2000/svg",Cc="http://www.w3.org/1998/Math/MathML",pt=typeof document<"u"?document:null,ts=pt&&pt.createElement("template"),Tc={insert:(e,t,o)=>{t.insertBefore(e,o||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,o,r)=>{const s=t==="svg"?pt.createElementNS(Ac,e):t==="mathml"?pt.createElementNS(Cc,e):o?pt.createElement(e,{is:o}):pt.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>pt.createTextNode(e),createComment:e=>pt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>pt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,o,r,s,i){const a=o?o.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),o),!(s===i||!(s=s.nextSibling)););else{ts.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const l=ts.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,o)}return[a?a.nextSibling:t.firstChild,o?o.previousSibling:t.lastChild]}},wt="transition",lo="animation",So=Symbol("_vtc"),Je=(e,{slots:t})=>je(hl,Sc(e),t);Je.displayName="Transition";const na={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Je.props=Pe({},Si,na);const Wt=(e,t=[])=>{V(e)?e.forEach(o=>o(...t)):e&&e(...t)},os=e=>e?V(e)?e.some(t=>t.length>1):e.length>1:!1;function Sc(e){const t={};for(const W in e)W in na||(t[W]=e[W]);if(e.css===!1)return t;const{name:o="v",type:r,duration:s,enterFromClass:i=`${o}-enter-from`,enterActiveClass:a=`${o}-enter-active`,enterToClass:l=`${o}-enter-to`,appearFromClass:c=i,appearActiveClass:d=a,appearToClass:p=l,leaveFromClass:f=`${o}-leave-from`,leaveActiveClass:h=`${o}-leave-active`,leaveToClass:m=`${o}-leave-to`}=e,S=Ic(s),I=S&&S[0],F=S&&S[1],{onBeforeEnter:R,onEnter:D,onEnterCancelled:U,onLeave:Y,onLeaveCancelled:se,onBeforeAppear:$=R,onAppear:X=D,onAppearCancelled:he=U}=t,G=(W,le,Se)=>{$t(W,le?p:l),$t(W,le?d:a),Se&&Se()},te=(W,le)=>{W._isLeaving=!1,$t(W,f),$t(W,m),$t(W,h),le&&le()},ie=W=>(le,Se)=>{const Ye=W?X:D,Ae=()=>G(le,W,Se);Wt(Ye,[le,Ae]),ns(()=>{$t(le,W?c:i),_t(le,W?p:l),os(Ye)||rs(le,r,I,Ae)})};return Pe(t,{onBeforeEnter(W){Wt(R,[W]),_t(W,i),_t(W,a)},onBeforeAppear(W){Wt($,[W]),_t(W,c),_t(W,d)},onEnter:ie(!1),onAppear:ie(!0),onLeave(W,le){W._isLeaving=!0;const Se=()=>te(W,le);_t(W,f),_t(W,h),kc(),ns(()=>{W._isLeaving&&($t(W,f),_t(W,m),os(Y)||rs(W,r,F,Se))}),Wt(Y,[W,Se])},onEnterCancelled(W){G(W,!1),Wt(U,[W])},onAppearCancelled(W){G(W,!0),Wt(he,[W])},onLeaveCancelled(W){te(W),Wt(se,[W])}})}function Ic(e){if(e==null)return null;if(be(e))return[In(e.enter),In(e.leave)];{const t=In(e);return[t,t]}}function In(e){return ka(e)}function _t(e,t){t.split(/\s+/).forEach(o=>o&&e.classList.add(o)),(e[So]||(e[So]=new Set)).add(t)}function $t(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const o=e[So];o&&(o.delete(t),o.size||(e[So]=void 0))}function ns(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let xc=0;function rs(e,t,o,r){const s=e._endId=++xc,i=()=>{s===e._endId&&r()};if(o)return setTimeout(i,o);const{type:a,timeout:l,propCount:c}=Pc(e,t);if(!a)return r();const d=a+"end";let p=0;const f=()=>{e.removeEventListener(d,h),i()},h=m=>{m.target===e&&++p>=c&&f()};setTimeout(()=>{p<c&&f()},l+1),e.addEventListener(d,h)}function Pc(e,t){const o=window.getComputedStyle(e),r=S=>(o[S]||"").split(", "),s=r(`${wt}Delay`),i=r(`${wt}Duration`),a=ss(s,i),l=r(`${lo}Delay`),c=r(`${lo}Duration`),d=ss(l,c);let p=null,f=0,h=0;t===wt?a>0&&(p=wt,f=a,h=i.length):t===lo?d>0&&(p=lo,f=d,h=c.length):(f=Math.max(a,d),p=f>0?a>d?wt:lo:null,h=p?p===wt?i.length:c.length:0);const m=p===wt&&/\b(transform|all)(,|$)/.test(r(`${wt}Property`).toString());return{type:p,timeout:f,propCount:h,hasTransform:m}}function ss(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((o,r)=>is(o)+is(e[r])))}function is(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function kc(){return document.body.offsetHeight}function Ec(e,t,o){const r=e[So];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):o?e.setAttribute("class",t):e.className=t}const Yo=Symbol("_vod"),ra=Symbol("_vsh"),as={beforeMount(e,{value:t},{transition:o}){e[Yo]=e.style.display==="none"?"":e.style.display,o&&t?o.beforeEnter(e):co(e,t)},mounted(e,{value:t},{transition:o}){o&&t&&o.enter(e)},updated(e,{value:t,oldValue:o},{transition:r}){!t!=!o&&(r?t?(r.beforeEnter(e),co(e,!0),r.enter(e)):r.leave(e,()=>{co(e,!1)}):co(e,t))},beforeUnmount(e,{value:t}){co(e,t)}};function co(e,t){e.style.display=t?e[Yo]:"none",e[ra]=!t}const Lc=Symbol(""),Dc=/(^|;)\s*display\s*:/;function Mc(e,t,o){const r=e.style,s=_e(o);let i=!1;if(o&&!s){if(t)if(_e(t))for(const a of t.split(";")){const l=a.slice(0,a.indexOf(":")).trim();o[l]==null&&zo(r,l,"")}else for(const a in t)o[a]==null&&zo(r,a,"");for(const a in o)a==="display"&&(i=!0),zo(r,a,o[a])}else if(s){if(t!==o){const a=r[Lc];a&&(o+=";"+a),r.cssText=o,i=Dc.test(o)}}else t&&e.removeAttribute("style");Yo in e&&(e[Yo]=i?r.display:"",e[ra]&&(r.display="none"))}const ls=/\s*!important$/;function zo(e,t,o){if(V(o))o.forEach(r=>zo(e,t,r));else if(o==null&&(o=""),t.startsWith("--"))e.setProperty(t,o);else{const r=Nc(e,t);ls.test(o)?e.setProperty(jt(r),o.replace(ls,""),"important"):e[r]=o}}const cs=["Webkit","Moz","ms"],xn={};function Nc(e,t){const o=xn[t];if(o)return o;let r=tt(t);if(r!=="filter"&&r in e)return xn[t]=r;r=rn(r);for(let s=0;s<cs.length;s++){const i=cs[s]+r;if(i in e)return xn[t]=i}return t}const us="http://www.w3.org/1999/xlink";function ds(e,t,o,r,s,i=Ua(t)){r&&t.startsWith("xlink:")?o==null?e.removeAttributeNS(us,t.slice(6,t.length)):e.setAttributeNS(us,t,o):o==null||i&&!Ys(o)?e.removeAttribute(t):e.setAttribute(t,i?"":Dt(o)?String(o):o)}function Uc(e,t,o,r){if(t==="innerHTML"||t==="textContent"){if(o==null)return;e[t]=o;return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?e.getAttribute("value")||"":e.value,l=o==null?"":String(o);(a!==l||!("_value"in e))&&(e.value=l),o==null&&e.removeAttribute(t),e._value=o;return}let i=!1;if(o===""||o==null){const a=typeof e[t];a==="boolean"?o=Ys(o):o==null&&a==="string"?(o="",i=!0):a==="number"&&(o=0,i=!0)}try{e[t]=o}catch{}i&&e.removeAttribute(t)}function Qt(e,t,o,r){e.addEventListener(t,o,r)}function Rc(e,t,o,r){e.removeEventListener(t,o,r)}const ps=Symbol("_vei");function Wc(e,t,o,r,s=null){const i=e[ps]||(e[ps]={}),a=i[t];if(r&&a)a.value=r;else{const[l,c]=$c(t);if(r){const d=i[t]=Fc(r,s);Qt(e,l,d,c)}else a&&(Rc(e,l,a,c),i[t]=void 0)}}const fs=/(?:Once|Passive|Capture)$/;function $c(e){let t;if(fs.test(e)){t={};let r;for(;r=e.match(fs);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):jt(e.slice(2)),t]}let Pn=0;const Hc=Promise.resolve(),Oc=()=>Pn||(Hc.then(()=>Pn=0),Pn=Date.now());function Fc(e,t){const o=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=o.attached)return;Ze(Bc(r,o.value),t,5,[r])};return o.value=e,o.attached=Oc(),o}function Bc(e,t){if(V(t)){const o=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{o.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const gs=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Vc=(e,t,o,r,s,i)=>{const a=s==="svg";t==="class"?Ec(e,r,a):t==="style"?Mc(e,o,r):tn(t)?er(t)||Wc(e,t,o,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Gc(e,t,r,a))?(Uc(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ds(e,t,r,a,i,t!=="value")):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),ds(e,t,r,a))};function Gc(e,t,o,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&gs(t)&&z(o));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return gs(t)&&_e(o)?!1:t in e}const hs=e=>{const t=e.props["onUpdate:modelValue"]||!1;return V(t)?o=>Fo(t,o):t};function jc(e){e.target.composing=!0}function ms(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const kn=Symbol("_assign"),at={created(e,{modifiers:{lazy:t,trim:o,number:r}},s){e[kn]=hs(s);const i=r||s.props&&s.props.type==="number";Qt(e,t?"change":"input",a=>{if(a.target.composing)return;let l=e.value;o&&(l=l.trim()),i&&(l=Un(l)),e[kn](l)}),o&&Qt(e,"change",()=>{e.value=e.value.trim()}),t||(Qt(e,"compositionstart",jc),Qt(e,"compositionend",ms),Qt(e,"change",ms))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:o,modifiers:{lazy:r,trim:s,number:i}},a){if(e[kn]=hs(a),e.composing)return;const l=(i||e.type==="number")&&!/^0\d/.test(e.value)?Un(e.value):e.value,c=t??"";l!==c&&(document.activeElement===e&&e.type!=="range"&&(r&&t===o||s&&e.value.trim()===c)||(e.value=c))}},zc=["ctrl","shift","alt","meta"],Kc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>zc.some(o=>e[`${o}Key`]&&!t.includes(o))},Xo=(e,t)=>{const o=e._withMods||(e._withMods={}),r=t.join(".");return o[r]||(o[r]=(s,...i)=>{for(let a=0;a<t.length;a++){const l=Kc[t[a]];if(l&&l(s,t))return}return e(s,...i)})},Jc=Pe({patchProp:Vc},Tc);let bs;function sa(){return bs||(bs=zl(Jc))}const qc=(...e)=>{sa().render(...e)},Qc=(...e)=>{const t=sa().createApp(...e),{mount:o}=t;return t.mount=r=>{const s=Yc(r);if(!s)return;const i=t._component;!z(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const a=o(s,!1,Zc(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t};function Zc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Yc(e){return _e(e)?document.querySelector(e):e}let En=!1;function Ln(e,t,o){e&&t&&o&&(e==null||e.addEventListener(t,o,!1))}function vs(e,t,o){e&&t&&o&&(e==null||e.removeEventListener(t,o,!1))}function Io(e,t){const o=function(s){var i;(i=t.drag)==null||i.call(t,s)},r=function(s){var i;vs(globalThis.document,"mousemove",o),vs(globalThis.document,"mouseup",r),globalThis.document.onselectstart=null,globalThis.document.ondragstart=null,En=!1,(i=t.end)==null||i.call(t,s)};Ln(e,"mousedown",function(s){var i;En||(globalThis.document.onselectstart=()=>!1,globalThis.document.ondragstart=()=>!1,Ln(globalThis.document,"mousemove",o),Ln(globalThis.document,"mouseup",r),En=!0,(i=t.start)==null||i.call(t,s))})}var vr=nt({name:"ColorPanel",props:{value:{type:Object,required:!0},height:{type:Number,default:150},width:{type:Number,default:210}},emits:["update:value"],setup(e){const t=j(null),o=j(0),r=j(0),s=Te(()=>`hsl(${e.value.get("h")}, 100%, 50%)`);function i(){const l=e.value.get("s"),c=e.value.get("v"),{clientWidth:d,clientHeight:p}=t.value;o.value=l*d/100,r.value=(100-c)*p/100}function a(l){let c=t.value.getBoundingClientRect(),d=l.clientX-c.left,p=l.clientY-c.top;d=Math.max(0,d),d=Math.min(d,c.width),p=Math.max(0,p),p=Math.min(p,c.height),o.value=d,r.value=r,e.value.set("s",d/c.width*100),e.value.set("v",100-p/c.height*100)}return Me([()=>e.value.get("h"),()=>e.value.get("v")],()=>i()),io(()=>{zt(()=>{Io(t.value,{drag:l=>{a(l)},end:l=>{a(l)}}),i()})}),{colorPanelRef:t,background:s,onMousedown:a,left:o,top:r}}});const Xc=y("div",{class:"color-panel-white"},null,-1),eu=y("div",{class:"color-panel-black"},null,-1),tu=y("div",null,null,-1);function ou(e,t,o,r,s,i){return L(),fe("div",{class:"color-panel",ref:"colorPanelRef",style:{backgroundColor:e.background,width:`${e.width}px`,height:`${e.height}px`},onMousedown:t[1]||(t[1]=(...a)=>e.onMousedown(...a))},[Xc,eu,y("div",{style:{left:`${e.left}px`,top:`${e.top}px`},class:"color-slider"},[tu],4)],36)}function mt(e,t){t===void 0&&(t={});var o=t.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",o==="top"&&r.firstChild?r.insertBefore(s,r.firstChild):r.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}var nu=`
.color-panel {\r
  position: relative;\r
  box-sizing: border-box;
}
.color-panel-white,\r
.color-panel-black {\r
  position: absolute;\r
  box-sizing: border-box;\r
  top: 0;\r
  left: 0;\r
  right: 0;\r
  bottom: 0;
}
.color-panel-white {\r
  background: linear-gradient(to right, #fff, rgba(255, 255, 255, 0));
}
.color-panel-black {\r
  background: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
}
.color-panel .color-slider {\r
  position: absolute;\r
  cursor: pointer;
}
.color-panel .color-slider > div {\r
  width: 6px;\r
  height: 6px;\r
  border-radius: 50%;\r
  box-shadow: 0 0 0 1.5px #fff, inset 0 0 1px 1px #0000004d, 0 0 1px 2px #0006;\r
  transform: translate(-3px, -3px);
}\r
`;mt(nu);vr.render=ou;vr.__file="src/component/ColorPanel.vue";var yr=nt({name:"ColorStraw",emits:["updateColor"],setup(e,{emit:t}){return{onEyeDropper:r=>{r.stopPropagation(),new EyeDropper().open().then(i=>{t("updateColor",i.sRGBHex)}).catch(i=>{console.error(i)})}}}});const ru=y("svg",{viewBox:"0 0 1024 1024",width:"16",height:"16"},[y("path",{d:"M861.098667 439.424c-0.426667 0.426667-2.346667-0.768-4.266667-2.688l-267.52-267.562667c-1.962667-1.92-3.157333-3.84-2.730667-4.266666l60.288-60.245334c0.426667-0.426667 2.346667 0.768 4.266667 2.688l267.52 267.52c1.92 1.92 3.114667 3.84 2.688 4.266667l-60.245333 60.288z m131.925333-283.690667L868.992 31.701333C837.76 0.426667 792.746667-7.168 759.04 10.154667a77.653333 77.653333 0 0 0-19.541333 14.208l-36.992 36.949333c-2.645333 2.688-5.077333 5.546667-7.253334 8.448 0.426667 0.597333 0.938667 1.194667 1.536 1.792l256.512 256.512a17.578667 17.578667 0 0 0 1.664 1.450667c2.944-2.218667 5.802667-4.608 8.448-7.253334l36.992-36.992c5.845333-5.888 10.538667-12.458667 14.208-19.584 17.28-33.706667 9.642667-78.72-21.589333-109.952zM380.885333 917.930667c-1.664 6.016 433.749333-430.08 433.749334-430.08 3.072-3.114667 5.248-5.973333 4.864-6.357334L762.88 424.874667c-0.426667-0.426667-3.242667 1.792-6.314667 4.864L329.642667 857.258667c-0.170667 0.170667-9.728 5.717333-9.898667 5.888 0 0-164.309333 47.786667-168.448 48-3.413333 0.256-20.906667-19.541333-20.906667-19.541334s-16.384-14.506667-16.384-18.048c0-3.541333 52.224-179.413333 52.224-179.413333l424.874667-427.52c3.072-3.072 5.290667-5.888 4.906667-6.272l-52.949334-52.906667c-0.384-0.426667-3.2 1.792-6.272 4.864L104.32 644.778667c-0.426667 0.426667-6.016 6.144-6.698667 8.362666l-90.88 306.688a41.130667 41.130667 0 0 0 55.808 57.301334c0.682667 0.128 2.090667 0 3.626667-0.469334 0 0 293.930667-86.144 298.624-89.941333l16.085333-8.789333z m332.288-542.549334l-70.442666-70.485333c-0.512-0.469333-3.413333 1.578667-6.4 4.608l-427.093334 427.093333a21.674667 21.674667 0 0 0-4.565333 5.802667l57.770667 12.970667a9.557333 9.557333 0 0 1 6.058666 8.021333l7.68 49.834667a26.709333 26.709333 0 0 0 5.376-4.394667L708.565333 381.866667c3.072-3.072 5.12-5.973333 4.608-6.442667z","p-id":"4133"})],-1);function su(e,t,o,r,s,i){return L(),fe("div",{class:"color-straw",onClick:t[1]||(t[1]=(...a)=>e.onEyeDropper(...a))},[ru])}var iu=`
.color-straw {
  width: 20px;
  height: 32px;
  padding: 0 3px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  fill: #9099a4;
  cursor: pointer;
  transition: all 0.3s;
}
.color-picker-light .color-straw {
  fill: #555555;
}
.color-straw:hover,
.color-straw:active {
  fill: #1593ff;
}
`;mt(iu);yr.render=su;yr.__file="src/component/ColorStraw.vue";const au=12;var wr=nt({name:"ColorHue",props:{value:{type:Object,required:!0},width:{type:Number,required:!0}},setup(e){const t=j(null),o=j(null),r=j(null),s=j(0),i=j(0);function a(c){const d=t.value.getBoundingClientRect();let p=c.clientX-d.left;p=Math.min(p,d.width-r.value.offsetWidth/2),p=Math.max(r.value.offsetWidth/2,p);const f=Math.round((p-r.value.offsetWidth/2)/(d.width-r.value.offsetWidth)*360);e.value.set("h",f)}function l(){const c=e.value.get("h");t.value||(i.value=0),i.value=Math.round(c*(t.value.offsetWidth-r.value.offsetWidth/2)/360)}return Me(()=>e.value.get("h"),()=>l()),io(()=>{zt(()=>{const c={drag:d=>{a(d)},end:d=>{a(d)}};Io(o.value,c),Io(r.value,c),l()})}),{hueRef:t,barRef:o,thumbRef:r,onMousedown:a,left:i,top:s,height:au}}});function lu(e,t,o,r,s,i){return L(),fe("div",{ref:"hueRef",style:{width:`${e.width}px`,height:`${e.height}px`,padding:`0 ${e.height/2}px`},class:"color-hue"},[y("div",{ref:"barRef",style:{height:`${e.height}px`}},null,4),y("div",{ref:"thumbRef",style:{width:`${e.height}px`,height:`${e.height}px`,top:`${e.top}px`,left:`${e.left}px`},onMousedown:t[1]||(t[1]=Xo((...a)=>e.onMousedown(...a),["prevent","stop"]))},null,36)],4)}var cu=`
.color-hue {\r
  position: relative;\r
  margin-bottom: 3px;\r
  box-sizing: border-box;\r
  background-color: red;
}
.color-hue > div:first-child {\r
  position: relative;\r
  background: linear-gradient(\r
    to right,\r
    #f00 0%,\r
    #ff0 17%,\r
    #0f0 33%,\r
    #0ff 50%,\r
    #00f 67%,\r
    #f0f 83%,\r
    #f00 100%\r
  );\r
  width: 100%;
}
.color-hue > div:last-child {\r
  position: absolute;\r
  border-radius: 50%;\r
  background-color: #fff;\r
  box-shadow: 0 0 1px 1px #fff inset, 0 1px 0 rgba(0, 0, 0, 0.5);\r
  cursor: pointer;
}
.color-picker-light .color-hue > div:last-child {\r
  background-color: #ddd;\r
  box-shadow: 0 0 1px 1px #ddd inset, 0 1px 0 rgba(0, 0, 0, 0.5);
}\r
`;mt(cu);wr.render=lu;wr.__file="src/component/ColorHue.vue";const uu=12;var _r=nt({name:"ColorAlpha",props:{value:{type:Object,required:!0},width:{type:Number,default:100}},setup(e){const t=j(null),o=j(null),r=j(null),s=j(0),i=j(0),a=Te(()=>{if(e.value&&e.value.v){const{r:d,g:p,b:f}=e.value.rgba;return`linear-gradient(to right, rgba(${d}, ${p}, ${f}, 0) 0%, rgba(${d}, ${p}, ${f}, 1) 100%)`}return null});function l(){const d=e.value.get("a");if(!t.value)return i.value=0,0;i.value=Math.round(d*(t.value.offsetWidth-r.value.offsetWidth/2)/100)}Me(()=>e.value.get("a"),()=>l());function c(d){const p=t.value.getBoundingClientRect();let f=d.clientX-p.left;f=Math.max(r.value.offsetWidth/2,f),f=Math.min(f,p.width-r.value.offsetWidth/2),e.value.set("a",Math.round((f-r.value.offsetWidth/2)/(p.width-r.value.offsetWidth)*100))}return io(()=>{zt(()=>{const d={drag:p=>{c(p)},end:p=>{c(p)}};Io(o.value,d),Io(r.value,d),l()})}),{alphaRef:t,barRef:o,thumbRef:r,height:uu,onMousedown:c,top:s,left:i,background:a}}});function du(e,t,o,r,s,i){return L(),fe("div",{ref:"alphaRef",class:"color-alpha",style:{width:`${e.width}px`,height:`${e.height}px`}},[y("div",{ref:"barRef",style:{height:`${e.height}px`,background:e.background}},null,4),y("div",{ref:"thumbRef",style:{width:`${e.height}px`,height:`${e.height}px`,top:`${e.top}px`,left:`${e.left}px`}},null,4)],4)}var pu=`
.color-alpha {\r
  position: relative;\r
  margin-top: 3px;\r
  box-sizing: border-box;\r
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);
}
.color-alpha > div:first-child {\r
  position: relative;\r
  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, white 100%);\r
  width: 100%;
}
.color-alpha > div:last-child {\r
  position: absolute;\r
  border-radius: 50%;\r
  background-color: #fff;\r
  box-shadow: 0 0 1px 1px rgb(255, 255, 255) inset, 0 1px 0 rgba(0, 0, 0, 0.5);\r
  cursor: pointer;
}
.color-picker-light .color-alpha > div:last-child {\r
  background-color: #ddd;\r
  box-shadow: 0 0 1px 1px #ddd inset, 0 1px 0 rgba(0, 0, 0, 0.5);
}\r
`;mt(pu);_r.render=du;_r.__file="src/component/ColorAlpha.vue";class ia{constructor(t){vt(this,"_h",0);vt(this,"_s",100);vt(this,"_v",100);vt(this,"_a",100);vt(this,"_f","hex");vt(this,"v","#fff");vt(this,"s",!1);t&&(this._f=Cs(Ts(t)),this.format(t))}format(t,o){if(!t)this._h=0,this._s=100,this._v=100,this.update();else{const r=(s,i,a)=>{this._h=Math.max(0,Math.min(360,s)),this._s=Math.max(0,Math.min(100,i)),this._v=Math.max(0,Math.min(100,a)),this.update()};switch(Cs(Ts(t))){case"hex":this._hex(t,r);break;case"rgb":this._rgba(t,r);break;case"hsl":this._hsla(t,r);break;default:throw Error(`非法颜色值--->${t}`)}}}_hsla(t,o){if(t=ys(t,/hsla|hsl|\(|\)/gm),t.length===4?this._a=Math.floor(parseFloat(t[3])*100):t.length===3&&(this._a=100),t.length>=3){const{h:r,s,v:i}=fu(t[0],t[1],t[2]);o(r,s,i)}}_rgba(t,o){if(t=ys(t,/rgba|rgb|\(|\)/gm),t.length===4?this._a=Math.floor(parseFloat(t[3])*100):t.length===3&&(this._a=100),t.length>=3){const{h:r,s,v:i}=_s(t[0],t[1],t[2]);o(r,s,i)}}_hex(t,o){t=t.replace("#","").trim();let{r,g:s,b:i}=gu(t);t.length===8?this._a=Math.floor(parseInt(t.substring(6),16)/255*100):(t.length===3||t.length===6)&&(this._a=100);const{h:a,s:l,v:c}=_s(r,s,i);o(a,l,c)}set(t,o){this[`_${t}`]=o,this.update()}get(t){return this[`_${t}`]}update(){const{_h:t,_s:o,_v:r,_a:s,_f:i}=this;switch(i){case"rgb":{const{r:a,g:l,b:c}=Oo(t,o,r);this.v=s===100?`rgb(${a}, ${l}, ${c})`:`rgba(${a}, ${l}, ${c}, ${s/100})`;break}case"hsl":{const a=ws(t,o/100,r/100);this.v=s===100?`hsl(${Math.round(t)}, ${Math.round(a[0]*100)}%, ${Math.round(a[1]*100)}%)`:`hsla(${Math.round(t)}, ${Math.round(a[0]*100)}%, ${Math.round(a[1]*100)}%, ${s/100})`;break}default:{const a=As(Oo(t,o,r)),l=Math.round(this._a/100*255);this.v=s===100?a:`${a}${l<=16?"0":""}${l.toString(16)}`;break}}}get hsla(){const{_h:t,_s:o,_v:r,_a:s}=this,i=ws(t,o/100,r/100);return{h:Math.round(t),s:Math.round(i[0]*100),l:Math.round(i[1]*100),a:s/100}}get rgba(){const{_h:t,_s:o,_v:r,_a:s}=this,{r:i,g:a,b:l}=Oo(t,o,r);return{r:i,g:a,b:l,a:s/100}}get hex(){const{_h:t,_s:o,_v:r,_a:s}=this,i=As(Oo(t,o,r)),a=Math.round(this._a/100*255);return s===100?i:`${i}${a<=16?"0":""}${a.toString(16)}`}}function ys(e,t){return e.replace(t,"").split(/\s|,/g).filter(o=>o!=="").map((o,r)=>r>2?parseFloat(o):parseInt(o,10))}const ws=function(e,t,o){return[t*o/((e=(2-t)*o)<1?e:2-e)||0,e/2]};function fu(e,t,o){t=t/100,o=o/100;let r=t;const s=Math.max(o,.01);o*=2,t*=o<=1?o:2-o,r*=s<=1?s:2-s;const i=(o+t)/2,a=t===0?2*r/(s+r):2*t/(o+t);return{h:e,s:a*100,v:i*100}}function Oo(e,t,o){e=oo(e,360)*6,t=oo(t,100),o=oo(o,100);const r=Math.floor(e),s=e-r,i=o*(1-t),a=o*(1-s*t),l=o*(1-(1-s)*t),c=r%6,d=[o,a,i,i,l,o][c],p=[l,o,o,a,i,i][c],f=[i,i,l,o,o,a][c];return{r:Math.round(d*255),g:Math.round(p*255),b:Math.round(f*255)}}function _s(e,t,o){e=oo(e,255),t=oo(t,255),o=oo(o,255);const r=Math.max(e,t,o);let s,i;const a=r-Math.min(e,t,o);if(a===0)s=i=0;else{i=a/r;const l=function(c){return(r-c)/6/a+1/2};switch(r){case e:{s=l(o)-l(t);break}case t:{s=1/3+l(e)-l(o);break}case o:{s=2/3+l(t)-l(e);break}}s<0?s+=1:s>1&&(s-=1)}return{h:s*360,s:i*100,v:r*100}}function oo(e,t){return e=typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1?"100%":e,e=Math.min(t,Math.max(0,parseFloat(`${e}`))),e=typeof n=="string"&&n.indexOf("%")!==-1?parseInt(`${e*t}`,10)/100:e,Math.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function gu(e){if(!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(e))throw Error(`非法颜色值--->${e}`);let t,o,r;return e.length===3?(t=parseInt(e[0]+e[0],16),o=parseInt(e[1]+e[1],16),r=parseInt(e[2]+e[2],16)):(e.length===6||e.length===8)&&(t=parseInt(e.substring(0,2),16),o=parseInt(e.substring(2,4),16),r=parseInt(e.substring(4,6),16)),{r:t,g:o,b:r}}function As({r:e,g:t,b:o}){function r(s){return("0"+parseInt(s).toString(16)).slice(-2)}return isNaN(e)||isNaN(t)||isNaN(o)?"":`#${r(e)}${r(t)}${r(o)}`.toUpperCase()}function Cs(e){if(/^#/.test(e))return"hex";if(/^rgb\(/.test(e)||/^rgba\(/.test(e))return"rgb";if(/^hsl\(/.test(e)||/^hsla\(/.test(e))return"hsl";throw Error(`错误的颜色参数--->${e}`)}function Ts(e){const t={red:"rgba(255, 0, 0, 1)",green:"rgba(0, 128, 0, 1)",blue:"rgba(0, 0, 255, 1)",magenta:"rgba(255, 0, 255, 1)",yellow:"rgba(255, 255, 0, 1)",chocolate:"rgba(210, 105, 30, 1)",black:"rgba(0, 0, 0, 1)",aquamarine:"rgba(127, 255, 212, 1)",lime:"rgba(0, 255, 0, 1)",fuchsia:"rgba(255, 0, 255, 1)",brass:"rgba(176, 160, 0, 1)",azure:"rgba(240, 255, 255, 1)",brown:"rgba(255, 127, 80, 1)",bronze:"rgba(254, 208, 160, 1)",deeppink:"rgba(255, 20, 147, 1)",aliceblue:"rgba(240, 248, 255, 1)",gray:"rgba(128, 128, 128, 1)",copper:"rgba(192, 0, 224, 1)",coral:"rgba(255, 127, 80, 1)",feldspar:"rgba(254, 208, 160, 1)",orange:"rgba(255, 165, 0, 1)",orchid:"rgba(255, 165, 0, 1)",pink:"rgba(255, 165, 0, 1)",plum:"rgba(221, 160, 221, 1)",quartz:"rgba(0, 160, 0, 1)",purple:"rgba(128, 0, 128, 1)",aliceblue:"rgba(240, 248, 255, 1)",antiquewith:"rgba(160, 0, 0, 1)",blanchedalmond:"rgba(255, 235, 205, 1)",blueviolet:"rgba(138, 43, 226, 1)",beige:"rgba(245, 245, 220, 1)",burlywood:"rgba(222, 184, 135, 1)",bisque:"rgba(255, 228, 196, 1)",cadetblue:"rgba(95, 158, 160, 1)",pink:"rgba(255, 192, 203, 1)",saddlebrown:"rgba(139, 69, 19, 1)",royalblue:"rgba(65, 105, 225, 1)",rosybrown:"rgba(188, 143, 143, 1)",purple:"rgba(128, 0, 128, 1)",orengered:"rgba(14, 14, 237, 1)",olivedrab:"rgba(107, 142, 35, 1)",powderblue:"rgba(176, 224, 230, 1)",peachpuff:"rgba(255, 218, 185, 1)",papayawhip:"rgba(255, 239, 213, 1)",paleturquoise:"rgba(175, 238, 238, 1)",palevioletred:"rgba(219, 112, 147, 1)",palegreen:"rgba(152, 251, 152, 1)",navyblue:"rgba(160, 176, 224, 1)",navajowhite:"rgba(255, 222, 173, 1)",palegodenrod:"rgba(160, 13, 0, 1)",violetred:"rgba(0, 224, 237, 1)",yellowgreen:"rgba(154, 205, 50, 1)",tomato:"rgba(255, 99, 71, 1)",turquoise:"rgba(64, 224, 208, 1)",thistle:"rgba(216, 191, 216, 1)",springgreen:"rgba(0, 255, 127, 1)",steelblue:"rgba(70, 130, 180, 1)",salmon:"rgba(250, 128, 114, 1)",scarlet:"rgba(202, 14, 0, 1)",sienna:"rgba(160, 82, 45, 1)",silver:"rgba(192, 192, 192, 1)",tan:"rgba(210, 180, 140, 1)",thistle:"rgba(216, 191, 216, 1)",turquoise:"rgba(64, 224, 208, 1)",violet:"rgba(238, 130, 238, 1)",snow:"rgba(255, 250, 250, 1)",salmon:"rgba(250, 128, 114, 1)",scarlet:"rgba(202, 14, 0, 1)",sienna:"rgba(160, 82, 45, 1)",silver:"rgba(192, 192, 192, 1)",thistle:"rgba(216, 191, 216, 1)",turquoise:"rgba(64, 224, 208, 1)",violet:"rgba(238, 130, 238, 1)",chartreuse:"rgba(127, 255, 0, 1)",firebrick:"rgba(178, 34, 34, 1)",gold:"rgba(255, 215, 0, 1)",khaki:"rgba(240, 230, 140, 1)",mediumslateblue:"rgba(123, 104, 238, 1)",mediumvioletred:"rgba(199, 21, 133, 1)",oldlace:"rgba(253, 245, 230, 1)",maroom:"rgba(10, 0, 0, 1)",goldenrod:"rgba(218, 165, 32, 1)",wheat:"rgba(245, 222, 179, 1)",whitesmoke:"rgba(245, 245, 245, 1)",orange:"rgba(255, 165, 0, 1)",moccasin:"rgba(255, 228, 181, 1)",mistyrose:"rgba(255, 228, 225, 1)",mintcream:"rgba(245, 255, 250, 1)",midnightblue:"rgba(25, 25, 112, 1)",dimgray:"rgba(105, 105, 105, 1)",darksalmon:"rgba(233, 150, 122, 1)",slategray:"rgba(112, 128, 144, 1)",skyblue:"rgba(135, 206, 235, 1)",sienna:"rgba(160, 82, 45, 1)",seashell:"rgba(255, 245, 238, 1)",salmon:"rgba(250, 128, 114, 1)",seagreen:"rgba(46, 139, 87, 1)",sandybrown:"rgba(244, 164, 96, 1)",firebrick:"rgba(178, 34, 34, 1)",gold:"rgba(255, 215, 0, 1)",khaki:"rgba(240, 230, 140, 1)",maroom:"rgba(10, 0, 0, 1)",goldenrod:"rgba(218, 165, 32, 1)",wheat:"rgba(245, 222, 179, 1)",whitesmoke:"rgba(245, 245, 245, 1)",mediumturquoise:"rgba(72, 209, 204, 1)",navy:"rgba(0, 0, 128, 1)",mediumspringgreen:"rgba(0, 250, 154, 1)",mediumseagreen:"rgba(60, 179, 113, 1)",mediumpurpul:"rgba(237, 0, 0, 1)",peru:"rgba(205, 133, 63, 1)",mediumorchid:"rgba(186, 85, 211, 1)",mediumblue:"rgba(0, 0, 205, 1)",mediumaquamarine:"rgba(102, 205, 170, 1)",maroon:"rgba(128, 0, 0, 1)",limegreen:"rgba(50, 205, 50, 1)",lightyellow:"rgba(255, 255, 224, 1)",lightsteelblue:"rgba(176, 196, 222, 1)",magenta:"rgba(255, 0, 255, 1)",lightslateblue:"rgba(0, 0, 176, 1)",lightslategray:"rgba(119, 136, 153, 1)",lightskyblue:"rgba(135, 206, 250, 1)",inen:"rgba(0, 224, 0, 1)",lightseagreen:"rgba(32, 178, 170, 1)",lightsalmon:"rgba(255, 160, 122, 1)",lightpink:"rgba(255, 182, 193, 1)",plum:"rgba(221, 160, 221, 1)",lightgray:"rgba(0, 0, 160, 1)",lightgreen:"rgba(144, 238, 144, 1)",lightgodenrodyellow:"rgba(0, 222, 224, 1)",indianred:"rgba(205, 92, 92, 1)",lavender:"rgba(230, 230, 250, 1)",lightblue:"rgba(173, 216, 230, 1)",lavenderblush:"rgba(255, 240, 245, 1)",lightcoral:"rgba(240, 128, 128, 1)",lightcyan:"rgba(224, 255, 255, 1)",lightgodenrod:"rgba(0, 222, 208, 1)",hotpink:"rgba(255, 105, 180, 1)",greenyellow:"rgba(173, 255, 47, 1)",lemonchiffon:"rgba(255, 250, 205, 1)",lawngreen:"rgba(124, 252, 0, 1)",khaki:"rgba(240, 230, 140, 1)",deepskyblue:"rgba(0, 191, 255, 1)",honeydew:"rgba(240, 255, 240, 1)",golenrod:"rgba(0, 224, 13, 1)",forestgreen:"rgba(34, 139, 34, 1)",gostwhite:"rgba(0, 0, 14, 1)",greenyellow:"rgba(173, 255, 47, 1)",gainsboro:"rgba(220, 220, 220, 1)",firebrick:"rgba(178, 34, 34, 1)",dodgerblue:"rgba(30, 144, 255, 1)",darkturquoise:"rgba(0, 206, 209, 1)",darkslateblue:"rgba(72, 61, 139, 1)",darkslategray:"rgba(47, 79, 79, 1)",darkseagreen:"rgba(143, 188, 143, 1)",darkred:"rgba(139, 0, 0, 1)",darkorchid:"rgba(153, 50, 204, 1)",darkorenge:"rgba(218, 0, 14, 1)",darkslateblue:"rgba(72, 61, 139, 1)",darkviolet:"rgba(148, 0, 211, 1)",floralwhite:"rgba(255, 250, 240, 1)",cyan:"rgba(0, 255, 255, 1)","bisque darkgray":"rgba(255, 228, 196, 1)",cornsilk:"rgba(255, 248, 220, 1)",darkolivegreen:"rgba(255, 248, 220, 1)",darkgoldenrod:"rgba(184, 134, 11, 1)",darkblue:"rgba(0, 0, 139, 1)",darkcyan:"rgba(0, 139, 139, 1)",darkgreen:"rgba(0, 100, 0, 1)",darkhaki:"rgba(218, 0, 0, 1)",ivory:"rgba(255, 255, 240, 1)",darkmagenta:"rgba(139, 0, 139, 1)",darkgray:"rgba(169, 169, 169, 1)",cornfloewrblue:"rgba(192, 0, 176, 1)",cornfloewrblue:"rgba(192, 0, 176, 1)",darkviolet:"rgba(148, 0, 211, 1)",floralwhite:"rgba(255, 250, 240, 1)",darkslategray:"rgba(47, 79, 79, 1)",darkseagreen:"rgba(143, 188, 143, 1)",darkred:"rgba(139, 0, 0, 1)",darkorchid:"rgba(153, 50, 204, 1)",darkorenge:"rgba(218, 0, 14, 1)",darkslateblue:"rgba(72, 61, 139, 1)"};return t[e]&&(e=t[e]),e}const hu=18;var Ar=nt({name:"ColorList",props:{value:{type:Object,required:!0},colors:{type:Array,required:!0}},setup(e){const t=Te(()=>e.colors.map(r=>{const s=new ia(r);return s.s=s.hex===e.value.hex,s}));function o(r){e.value.format(e.colors[r])}return{rgbaColors:t,height:hu,handleSelect:o}}});const mu={class:"color-list"};function bu(e,t,o,r,s,i){return L(),fe("div",mu,[(L(!0),fe(J,null,xl(e.rgbaColors,(a,l)=>(L(),fe("div",{class:"color",style:{width:`${e.height}px`,height:`${e.height}px`},key:l,onClick:c=>e.handleSelect(l)},[y("div",{class:{"is-selected":a.s,"is-alpha":a._a<100}},[y("div",{style:{width:`${e.height}px`,height:`${e.height}px`,backgroundColor:a.v}},null,4)],2)],12,["onClick"]))),128))])}var vu=`
.color-list {\r
  margin: 9px 0;\r
  padding: 0 9px;\r
  display: flex;\r
  overflow: hidden;\r
  flex-wrap: wrap;\r
  justify-content: space-around;
}
.color-list .color {\r
  padding: 5px;\r
  border-radius: 10px;\r
  cursor: pointer;
}
.color-list .color:hover {\r
  transform: scale(1.2);
}
.color-list .color .is-alpha {\r
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);
}
.color-list .color .is-selected {\r
  box-shadow: 0 0 3px 2px #409eff;
}\r
`;mt(vu);Ar.render=bu;Ar.__file="src/component/ColorList.vue";const Ss=["hex","rgb","hsl"];var Cr=nt({name:"ColorValue",props:{value:{type:Object,required:!0},width:{type:Number,default:230}},setup(e){const t=Te(()=>e.value.get("f")),o=j(Ss.indexOf(t.value)),r=Te(()=>e.width-21),s=Te(()=>(t.value==="hex"?r.value-15:r.value/4)-15),i=j(e.value.hex),a=j(e.value.rgba),l=j(e.value.hsla);function c(){o.value=(o.value+1)%3,e.value.set("f",Ss[o.value])}function d(){/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(i.value.replace("#","").trim())&&e.value.format(i.value)}function p(){const h=a.value,m=h.r===""||h.g===""||h.b===""||h.a==="",S=!isNaN(h.r)&&!isNaN(h.g)&&!isNaN(h.b)&&!isNaN(h.a);if(m||!S)return;let I=Math.max(parseInt(h.r),0);I=Math.min(I,255);let F=Math.max(parseInt(h.g),0);F=Math.min(F,255);let R=Math.max(parseInt(h.b),0);R=Math.min(R,255);let D=Math.max(parseFloat(h.a),0);D=Math.min(D,1),e.value.format(`rgba(${I},${F},${R},${D})`)}function f(){const h=l.value,m=h.h===""||h.s===""||h.l===""||h.a==="",S=!isNaN(h.h)&&!isNaN(h.s)&&!isNaN(h.l)&&!isNaN(h.a);if(m||!S)return;let I=Math.max(parseInt(h.h),0);I=Math.min(I,360);let F=Math.max(parseInt(h.s),0);F=Math.min(F,100);let R=Math.max(parseInt(h.l),0);R=Math.min(R,100);let D=Math.max(parseFloat(h.a),0);D=Math.min(D,1),e.value.format(`hsla(${I},${F},${R},${D})`)}return Me(()=>e.value.v,()=>{t.value==="hex"&&(i.value=e.value.hex),t.value==="rgb"&&(a.value=e.value.rgba),t.value==="hsl"&&(l.value=e.value.hsla)}),{format:t,valueWidth:r,inputWidth:s,hexValue:i,onHexInput:d,rgbaValue:a,onRgbaInput:p,hslaValue:l,onHslaInput:f,onClick:c}}});const yu={class:"color-value"},wu={key:0},_u={key:1},Au={key:2},Cu={key:3},Tu=y("span",null,"十六进制",-1),Su={key:4},Iu=y("span",null,"A",-1),xu=y("path",{d:"M718.73545078 589.39849389H305.26454922c-20.36802471 0-32.58883953 13.23921607-22.40482717 23.42322842 15.27601854 16.29441978 197.56983966 206.73545078 206.73545077 215.90106188 11.20241359 12.22081482 35.64404324 10.18401235 45.8280556 0C542.55203706 821.59397555 729.93786436 624.02413589 741.14027795 612.82172231c10.18401235-11.20241359-3.05520371-22.40482718-22.40482718-23.42322842zM305.26454922 434.60150611h413.47090156c19.34962348 0 32.58883953-12.22081482 22.40482717-23.42322842-11.20241359-11.20241359-198.5882409-208.77225325-206.73545077-216.91946312-9.16561112-10.18401235-33.60724077-11.20241359-45.8280556 0C480.42956171 204.44282693 298.13574057 394.88385793 282.85972205 411.17827769c-10.18401235 10.18401235 2.03680247 23.42322842 22.40482718 23.42322842z"},null,-1);function Pu(e,t,o,r,s,i){return L(),fe("div",yu,[y("div",{style:{width:`${e.valueWidth}px`}},[e.format==="hex"?(L(),fe("div",wu,[Ge(y("input",{type:"text",style:{width:`${e.inputWidth}px`},onInput:t[1]||(t[1]=(...a)=>e.onHexInput(...a)),"onUpdate:modelValue":t[2]||(t[2]=a=>e.hexValue=a)},null,36),[[at,e.hexValue]])])):e.format==="rgb"?(L(),fe("div",_u,[Ge(y("input",{type:"text",style:{width:`${e.inputWidth}px`},onInput:t[3]||(t[3]=(...a)=>e.onRgbaInput(...a)),"onUpdate:modelValue":t[4]||(t[4]=a=>e.rgbaValue.r=a)},null,36),[[at,e.rgbaValue.r]]),Ge(y("input",{type:"text",style:{width:`${e.inputWidth}px`},onInput:t[5]||(t[5]=(...a)=>e.onRgbaInput(...a)),"onUpdate:modelValue":t[6]||(t[6]=a=>e.rgbaValue.g=a)},null,36),[[at,e.rgbaValue.g]]),Ge(y("input",{type:"text",style:{width:`${e.inputWidth}px`},onInput:t[7]||(t[7]=(...a)=>e.onRgbaInput(...a)),"onUpdate:modelValue":t[8]||(t[8]=a=>e.rgbaValue.b=a)},null,36),[[at,e.rgbaValue.b]]),Ge(y("input",{type:"text",style:{width:`${e.inputWidth}px`},onInput:t[9]||(t[9]=(...a)=>e.onRgbaInput(...a)),"onUpdate:modelValue":t[10]||(t[10]=a=>e.rgbaValue.a=a)},null,36),[[at,e.rgbaValue.a]])])):(L(),fe("div",Au,[Ge(y("input",{type:"text",style:{width:`${e.inputWidth}px`},onInput:t[11]||(t[11]=(...a)=>e.onHslaInput(...a)),"onUpdate:modelValue":t[12]||(t[12]=a=>e.hslaValue.h=a)},null,36),[[at,e.hslaValue.h]]),Ge(y("input",{type:"text",style:{width:`${e.inputWidth}px`},onInput:t[13]||(t[13]=(...a)=>e.onHslaInput(...a)),"onUpdate:modelValue":t[14]||(t[14]=a=>e.hslaValue.s=a)},null,36),[[at,e.hslaValue.s]]),Ge(y("input",{type:"text",style:{width:`${e.inputWidth}px`},onInput:t[15]||(t[15]=(...a)=>e.onHslaInput(...a)),"onUpdate:modelValue":t[16]||(t[16]=a=>e.hslaValue.l=a)},null,36),[[at,e.hslaValue.l]]),Ge(y("input",{type:"text",style:{width:`${e.inputWidth}px`},onInput:t[17]||(t[17]=(...a)=>e.onHslaInput(...a)),"onUpdate:modelValue":t[18]||(t[18]=a=>e.hslaValue.a=a)},null,36),[[at,e.hslaValue.a]])])),e.format==="hex"?(L(),fe("div",Cu,[Tu])):(L(),fe("div",Su,[y("span",null,Qe(e.format==="rgb"?"R":"H"),1),y("span",null,Qe(e.format==="rgb"?"G":"S %"),1),y("span",null,Qe(e.format==="rgb"?"B":"L %"),1),Iu]))],4),(L(),fe("svg",{class:"icon",viewBox:"0 0 1024 1024",onClick:t[19]||(t[19]=Xo((...a)=>e.onClick(...a),["stop"]))},[xu]))])}var ku=`
.color-value {\r
  padding: 3px 0;\r
  display: flex;
}
.color-value > div > div:first-child,\r
.color-value > div > div:last-child {\r
  display: flex;\r
  justify-content: space-around;
}
.color-value > div input {\r
  font-size: 12px;\r
  height: 15px;\r
  line-height: 15px;\r
  text-align: center;
}
.color-value > div > div:last-child > span {\r
  margin-top: 3px;\r
  font-size: 12px;\r
  color: #fff;
}
.color-value .icon {\r
  margin-top: -2px;\r
  fill: #eee;\r
  width: 21px;\r
  height: 21px;\r
  cursor: pointer;
}
.color-value .icon:hover {\r
  fill: #1593ff;
}
.color-value > div input:focus {\r
  outline: none;
}
.color-picker-light .color-value .icon {\r
  fill: #555;
}
.color-picker-light .color-value > div > div:last-child > span {\r
  color: #555;
}\r
`;mt(ku);Cr.render=Pu;Cr.__file="src/component/ColorValue.vue";var Tr=nt({name:"ColorPreview",props:{value:{type:Object,required:!0}},setup(e){const t=j(!1),o=j(!1),r=Te(()=>`rgba(${e.value.rgba.r},${e.value.rgba.g},${e.value.rgba.b},${e.value.rgba.a})`);function s(){t.value=!0}function i(){t.value=!1,o.value=!1}function a(){t.value=!1,navigator.clipboard.writeText(e.value.v).then(()=>{o.value=!0}).catch(c=>{console.error(c)})}function l(){}return{onMouseenter:s,onMouseleave:i,onMouseup:a,success:o,copy:t,background:r,onCopy:l}}});const Eu={width:"25",height:"25",viewBox:"0 0 1024 1024"},Lu=y("path",{fill:"#f8f8f8",d:"M679.827 780.524h-402.786v-469.916h402.786v469.916zM646.261 344.173h-335.655v402.786h335.655v-402.786zM411.304 243.476h-33.564v67.131h33.564v-67.131zM579.131 444.869h-201.394v33.564h201.394v-33.564zM579.131 545.564h-201.394v33.564h201.394v-33.564zM579.131 646.261h-201.394v33.564h201.394v-33.564zM746.959 243.476h-335.655v33.564h335.655v-33.564zM746.959 277.041h-33.564v402.786h33.564v-402.786zM713.394 646.261h-33.564v33.564h33.564v-33.564z"},null,-1),Du={width:"20",height:"20",viewBox:"0 0 1024 1024"},Mu=y("path",{fill:"#f8f8f8",d:"M870.4 332.8l-89.6-89.6L416 601.6 243.2 435.2l-89.6 89.6 262.4 256z"},null,-1);function Nu(e,t,o,r,s,i){return L(),fe("div",{class:"color-preview",onMouseenter:t[1]||(t[1]=(...a)=>e.onMouseenter(...a)),onMouseleave:t[2]||(t[2]=(...a)=>e.onMouseleave(...a)),onMouseup:t[3]||(t[3]=(...a)=>e.onMouseup(...a))},[y("div",{style:{background:e.background}},[Ge((L(),fe("svg",Eu,[Lu],512)),[[as,e.copy]]),Ge((L(),fe("svg",Du,[Mu],512)),[[as,e.success]])],4)],32)}var Uu=`
.color-preview {
  width: 32px;
  height: 32px;
  margin-right: 9px;
  border-radius: 50%;
  box-sizing: border-box;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);
  cursor: pointer;
}
.color-preview:hover {
  background: transparent;
}
.color-preview > div {
  position: relative;
  display: flex;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);
}
.color-preview > div:hover {
  background: rgba(0, 0, 0, 0.3) !important;
}
`;mt(Uu);Tr.render=Nu;Tr.__file="src/component/ColorPreview.vue";const Is=globalThis.document.documentElement.clientWidth,Ru=globalThis.document.documentElement.clientHeight;var mn=nt({name:"ColorPicker",components:{ColorPanel:vr,ColorStraw:yr,ColorPreview:Tr,ColorHue:wr,ColorAlpha:_r,ColorValue:Cr,ColorList:Ar},props:{value:{type:[String,null],default:"#fff"},zIndex:{type:Number,default:2},position:{type:Object,required:!0},theme:{type:String,default:"dark"},height:{type:Number,default:150},width:{type:Number,default:233},colors:{type:Array,default:["#ff4500","#ff8c00","#ffd700","#90ee9003","#00ced1","#1e90ff","#c71585","#ff4500ad","#ff7800","#fad400","#90f09080","#00babd","#1f93ffba","#c7158575"]},btn:{type:Boolean,default:!1},change:{type:Function},confirm:{type:Function},clear:{type:Function}},emits:["update:value","confirm","clear"],setup(e,{emit:t}){const o=j(!1);window.EyeDropper&&(o.value=!0);const r=j(null),s=j({left:e.position.x||0,top:e.position.y||0}),i=ko(new ia(e.value));Me(()=>e.value,p=>{p&&p!==i.v&&i.format(p)});const a=Te(()=>e.width-(o.value?63:40));Me(()=>i.v,()=>{t("update:value",i.v),e.change&&e.change(i.v)});function l(){t("confirm"),e.confirm&&e.confirm(i.v)}function c(){t("clear"),e.clear&&e.clear()}return io(()=>{zt(()=>{const p=r.value.offsetWidth,f=r.value.offsetHeight;s.value.left+p>Is&&(s.value.left=Is-p),s.value.top+f>Ru&&(s.value.top=s.value.top-f)})}),{colorRef:r,style:s,color:i,hueWidth:a,isEyeDropper:o,clear:c,confirm:l,updateColorStraw:p=>{i.format(p,i._f)}}}});const Wu={class:"color-tool"},$u={key:0,class:"color-btns"},Hu=y("span",null,"Clear",-1),Ou=y("span",null,"OK",-1);function Fu(e,t,o,r,s,i){const a=ze("ColorPanel"),l=ze("ColorStraw"),c=ze("ColorPreview"),d=ze("ColorHue"),p=ze("ColorAlpha"),f=ze("ColorValue"),h=ze("ColorList");return L(),fe("div",{ref:"colorRef",class:["color-picker",`color-picker-${e.theme}`],style:{width:`${e.width}px`,zIndex:e.zIndex,top:`${e.style.top}px`,left:`${e.style.left}px`},onClick:t[9]||(t[9]=Xo(()=>{},["stop"])),onContextmenu:t[10]||(t[10]=Xo(()=>{},["prevent","stop"]))},[y(a,{value:e.color,"onUpdate:value":t[1]||(t[1]=m=>e.color=m),height:e.height,width:e.width},null,8,["value","height","width"]),y("div",Wu,[e.isEyeDropper?(L(),fe(l,{key:0,onUpdateColor:e.updateColorStraw},null,8,["onUpdateColor"])):Ke("v-if",!0),y(c,{value:e.color,"onUpdate:value":t[2]||(t[2]=m=>e.color=m)},null,8,["value"]),y("div",null,[y(d,{width:e.hueWidth,value:e.color,"onUpdate:value":t[3]||(t[3]=m=>e.color=m)},null,8,["width","value"]),y(p,{width:e.hueWidth,value:e.color,"onUpdate:value":t[4]||(t[4]=m=>e.color=m)},null,8,["width","value"])])]),y(f,{value:e.color,"onUpdate:value":t[5]||(t[5]=m=>e.color=m),width:e.width},null,8,["value","width"]),y(h,{colors:e.colors,value:e.color,"onUpdate:value":t[6]||(t[6]=m=>e.color=m)},null,8,["colors","value"]),e.btn?(L(),fe("div",$u,[y("button",{class:"color-btn",onClick:t[7]||(t[7]=(...m)=>e.clear(...m))},[Hu]),y("button",{class:"color-btn",onClick:t[8]||(t[8]=(...m)=>e.confirm(...m))},[Ou])])):Ke("v-if",!0)],38)}var Bu=`
.color-picker {
  position: fixed;
  border-radius: 5px;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.16);
  user-select: none;
  padding: 9px;
}
.color-tool {
  height: 50px;
  display: flex;
  align-items: center;
}
.color-picker-dark {
  background: #2e333a;
}
.color-picker-light {
  background: #f9f9f9;
  box-shadow: 1px #f9f9f9;
}
.color-btns {
  display: flex;
  justify-content: space-around;
}
.color-btn {
  display: inline-block;
  line-height: 1;
  cursor: pointer;
  border: 1px solid #dcdfe6;
  transition: 0.1s;
  border-color: transparent;
  color: #409eff;
  background: transparent;
  font-size: 12px;
}
`;mt(Bu);mn.render=Fu;mn.__file="src/component/ColorPicker.vue";var en=nt({name:"V3ColorPicker",components:{ColorPicker:mn},props:{value:{type:[String,null],default:"#fff"},zIndex:{type:Number,default:2},theme:{type:String,default:"dark"},height:{type:Number,default:150},width:{type:Number,default:233},colors:{type:Array,default:["#ff4500","#ff8c00","#ffd700","#90ee9003","#00ced1","#1e90ff","#c71585","#ff4500ad","#ff7800","#fad400","#90f09080","#00babd","#1f93ffba","#c7158575"]},size:{type:String},btn:{type:Boolean,default:!1}},emits:["update:value","change"],setup(e,{emit:t}){const o=j(null),r=j({x:0,y:0}),s=j(!1),i=j(e.value);Me(i,f=>{s.value=!1,!e.btn&&t("update:value",f),t("change",f)}),Me(()=>e.value,f=>{(f!==null||!e.btn)&&(s.value=!1,i.value=e.value),f===null&&(s.value=!0)});const a=j(!1);function l(f){a.value=!1,zt(()=>{r.value={x:f.clientX,y:f.clientY},a.value=!0})}function c(f){o.value!==f.target&&(a.value=!1)}function d(){t("update:value",i.value),t("change",i.value),a.value=!1}function p(){t("update:value",null),t("change",null),s.value=!0,a.value=!1}return Me(a,f=>{f?(globalThis.document.addEventListener("click",c),globalThis.document.addEventListener("contextmenu",c)):(globalThis.document.removeEventListener("click",c),globalThis.document.removeEventListener("contextmenu",c))}),{onClick:l,position:r,open:a,color:i,confirm:d,clear:p,isClear:s,colorRef:o}}});const Vu={class:"c-p-t"},Gu={class:"c-p-c"},ju={class:"c-p-i"},zu={key:0,class:"icon",viewBox:"0 0 1024 1024"},Ku=y("path",{d:"M511.711 671.589l-270.188-270.23c-0.287-0.264-0.573-0.531-0.851-0.809-10.935-10.935-10.935-28.663 0-39.598 10.935-10.935 28.663-10.935 39.598 0 0.278 0.278 0.545 0.564 0.809 0.851l0.021-0.021 230.691 230.69 231.94-231.94c10.935-10.935 28.663-10.935 39.598 0s10.935 28.663 0 39.598l-271.617 271.459z"},null,-1),Ju={key:1,class:"icon",viewBox:"0 0 1024 1024"},qu=y("path",{d:"M704.28672 309.20704l28.95872 28.9792L334.6432 736.78848l-28.95872-28.9792z",fill:"#999"},null,-1),Qu=y("path",{d:"M341.03296 315.5968l398.60224 398.60224-28.95872 28.95872-398.60224-398.60224z",fill:"#999"},null,-1);function Zu(e,t,o,r,s,i){const a=ze("ColorPicker");return L(),fe(J,null,[y("div",{ref:"colorRef",class:["v3-c-p",e.size?`v3-c-p-${e.size}`:null],onClick:t[1]||(t[1]=(...l)=>e.onClick(...l))},[y("div",Vu,[y("span",Gu,[y("span",{class:"c-p-c-i",style:{backgroundColor:e.isClear?"transparent":e.color}},null,4)]),y("span",ju,[e.isClear?(L(),fe("svg",Ju,[qu,Qu])):(L(),fe("svg",zu,[Ku]))])])],2),(L(),fe(jl,{to:"body"},[y(Je,{name:"color-fade"},{default:ne(()=>[e.open?(L(),fe(a,{key:0,value:e.color,"onUpdate:value":t[2]||(t[2]=l=>e.color=l),zIndex:e.zIndex,position:e.position,theme:e.theme,width:e.width,height:e.height,colors:e.colors,btn:e.btn,onConfirm:e.confirm,onClear:e.clear},null,8,["value","zIndex","position","theme","width","height","colors","btn","onConfirm","onClear"])):Ke("v-if",!0)]),_:1})]))],64)}var Yu=`
.v3-c-p {\r
  display: inline-block;\r
  position: relative;\r
  height: 40px;\r
  line-height: normal;\r
  cursor: pointer;
}
.v3-c-p-medium {\r
  height: 35px;
}
.v3-c-p.v3-c-p-medium .c-p-t {\r
  height: 35px;\r
  width: 35px;\r
  pointer-events: none;
}
.v3-c-p.v3-c-p-small {\r
  height: 30px;
}
.v3-c-p.v3-c-p-small .c-p-t {\r
  height: 30px;\r
  width: 30px;\r
  pointer-events: none;
}
.v3-c-p.v3-c-p-mini {\r
  height: 26px;
}
.v3-c-p.v3-c-p-mini .c-p-t {\r
  height: 26px;\r
  width: 26px;\r
  pointer-events: none;
}
.v3-c-p .c-p-t {\r
  display: inline-block;\r
  box-sizing: border-box;\r
  height: 40px;\r
  width: 40px;\r
  padding: 5px;\r
  border: 1px solid #e6e6e6;\r
  border-radius: 5px;\r
  font-size: 0;\r
  position: relative;\r
  cursor: pointer;\r
  pointer-events: none;
}
.v3-c-p .c-p-c {\r
  position: relative;\r
  display: block;\r
  box-sizing: border-box;\r
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);\r
  border: 1px solid #909399;\r
  border-radius: 3px;\r
  width: 100%;\r
  height: 100%;\r
  text-align: center;\r
  pointer-events: none;
}
.v3-c-p .c-p-c-i {\r
  position: absolute;\r
  left: 0;\r
  top: 0;\r
  right: 0;\r
  bottom: 0;\r
  pointer-events: none;
}
.v3-c-p .c-p-i {\r
  display: inline-block;\r
  position: absolute;\r
  width: 100%;\r
  top: 50%;\r
  left: 50%;\r
  transform: translate(-50%, -50%);\r
  text-align: center;\r
  pointer-events: none;
}
.c-p-i .icon {\r
  fill: #fff;\r
  width: 22px;\r
  height: 22px;
}
.color-fade-enter-active,\r
.color-fade-leave-active {\r
  transition: opacity 0.15s ease-in-out;
}
.color-fade-enter-from,\r
.color-fade-leave-to {\r
  opacity: 0;
}\r
`;mt(Yu);en.render=Zu;en.__file="src/V3ColorPicker.vue";function qn(e,t){const o=e||{},r=o.change&&typeof o.change=="function"?o.change:c=>{},s={position:{x:t.clientX,y:t.clientY},...o,value:o.value||"#fff",confirm:c=>{r(c),e.color=c,l()},clear:()=>{r(null),e.color=null,l()}},i=document.createElement("div"),a=y(mn,s);qc(a,i),i.firstElementChild&&document.body.appendChild(i.firstElementChild),Me(e,c=>{c.value&&(a.component.props.value=c.value)}),o.change||Me(a.component.ctx.color,c=>{e.value=c.v});function l(){a&&a.el&&document.body.removeChild(a.el),globalThis.document.removeEventListener("click",l),globalThis.document.removeEventListener("contextmenu",l)}return setTimeout(()=>{globalThis.document.addEventListener("click",l),globalThis.document.addEventListener("contextmenu",l)},0),{close:l}}const Xu={mounted(e,{value:t,instance:o}){e.addEventListener("click",qn.bind(o,t))},unmounted(e){e.removeEventListener("click",qn)}},ed=function(e){e.component(en.name,en),e.directive("color",Xu),e.config.globalProperties.colorEvent=(t,o)=>qn(o,t)};function td(e){e.use(ed)}var od=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const nd=Symbol();var xs;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(xs||(xs={}));function rd(){const e=Ra(!0),t=e.run(()=>j({}));let o=[],r=[];const s=mi({install(i){s._a=i,i.provide(nd,s),i.config.globalProperties.$pinia=s,r.forEach(a=>o.push(a)),r=[]},use(i){return!this._a&&!od?r.push(i):o.push(i),this},_p:o,_a:null,_e:e,_s:new Map,state:t});return s}/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Zt=typeof document<"u";function sd(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const pe=Object.assign;function Dn(e,t){const o={};for(const r in t){const s=t[r];o[r]=ot(s)?s.map(e):e(s)}return o}const yo=()=>{},ot=Array.isArray,aa=/#/g,id=/&/g,ad=/\//g,ld=/=/g,cd=/\?/g,la=/\+/g,ud=/%5B/g,dd=/%5D/g,ca=/%5E/g,pd=/%60/g,ua=/%7B/g,fd=/%7C/g,da=/%7D/g,gd=/%20/g;function Sr(e){return encodeURI(""+e).replace(fd,"|").replace(ud,"[").replace(dd,"]")}function hd(e){return Sr(e).replace(ua,"{").replace(da,"}").replace(ca,"^")}function Qn(e){return Sr(e).replace(la,"%2B").replace(gd,"+").replace(aa,"%23").replace(id,"%26").replace(pd,"`").replace(ua,"{").replace(da,"}").replace(ca,"^")}function md(e){return Qn(e).replace(ld,"%3D")}function bd(e){return Sr(e).replace(aa,"%23").replace(cd,"%3F")}function vd(e){return e==null?"":bd(e).replace(ad,"%2F")}function xo(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const yd=/\/$/,wd=e=>e.replace(yd,"");function Mn(e,t,o="/"){let r,s={},i="",a="";const l=t.indexOf("#");let c=t.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,l>-1?l:t.length),s=e(i)),l>-1&&(r=r||t.slice(0,l),a=t.slice(l,t.length)),r=Td(r??t,o),{fullPath:r+(i&&"?")+i+a,path:r,query:s,hash:xo(a)}}function _d(e,t){const o=t.query?e(t.query):"";return t.path+(o&&"?")+o+(t.hash||"")}function Ps(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Ad(e,t,o){const r=t.matched.length-1,s=o.matched.length-1;return r>-1&&r===s&&ro(t.matched[r],o.matched[s])&&pa(t.params,o.params)&&e(t.query)===e(o.query)&&t.hash===o.hash}function ro(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function pa(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const o in e)if(!Cd(e[o],t[o]))return!1;return!0}function Cd(e,t){return ot(e)?ks(e,t):ot(t)?ks(t,e):e===t}function ks(e,t){return ot(t)?e.length===t.length&&e.every((o,r)=>o===t[r]):e.length===1&&e[0]===t}function Td(e,t){if(e.startsWith("/"))return e;if(!e)return t;const o=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=o.length-1,a,l;for(a=0;a<r.length;a++)if(l=r[a],l!==".")if(l==="..")i>1&&i--;else break;return o.slice(0,i).join("/")+"/"+r.slice(a).join("/")}const At={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Po;(function(e){e.pop="pop",e.push="push"})(Po||(Po={}));var wo;(function(e){e.back="back",e.forward="forward",e.unknown=""})(wo||(wo={}));function Sd(e){if(!e)if(Zt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),wd(e)}const Id=/^[^#]+#/;function xd(e,t){return e.replace(Id,"#")+t}function Pd(e,t){const o=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-o.left-(t.left||0),top:r.top-o.top-(t.top||0)}}const bn=()=>({left:window.scrollX,top:window.scrollY});function kd(e){let t;if("el"in e){const o=e.el,r=typeof o=="string"&&o.startsWith("#"),s=typeof o=="string"?r?document.getElementById(o.slice(1)):document.querySelector(o):o;if(!s)return;t=Pd(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Es(e,t){return(history.state?history.state.position-t:-1)+e}const Zn=new Map;function Ed(e,t){Zn.set(e,t)}function Ld(e){const t=Zn.get(e);return Zn.delete(e),t}let Dd=()=>location.protocol+"//"+location.host;function fa(e,t){const{pathname:o,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let l=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Ps(c,"")}return Ps(o,e)+r+s}function Md(e,t,o,r){let s=[],i=[],a=null;const l=({state:h})=>{const m=fa(e,location),S=o.value,I=t.value;let F=0;if(h){if(o.value=m,t.value=h,a&&a===S){a=null;return}F=I?h.position-I.position:0}else r(m);s.forEach(R=>{R(o.value,S,{delta:F,type:Po.pop,direction:F?F>0?wo.forward:wo.back:wo.unknown})})};function c(){a=o.value}function d(h){s.push(h);const m=()=>{const S=s.indexOf(h);S>-1&&s.splice(S,1)};return i.push(m),m}function p(){const{history:h}=window;h.state&&h.replaceState(pe({},h.state,{scroll:bn()}),"")}function f(){for(const h of i)h();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",p,{passive:!0}),{pauseListeners:c,listen:d,destroy:f}}function Ls(e,t,o,r=!1,s=!1){return{back:e,current:t,forward:o,replaced:r,position:window.history.length,scroll:s?bn():null}}function Nd(e){const{history:t,location:o}=window,r={value:fa(e,o)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,d,p){const f=e.indexOf("#"),h=f>-1?(o.host&&document.querySelector("base")?e:e.slice(f))+c:Dd()+e+c;try{t[p?"replaceState":"pushState"](d,"",h),s.value=d}catch(m){console.error(m),o[p?"replace":"assign"](h)}}function a(c,d){const p=pe({},t.state,Ls(s.value.back,c,s.value.forward,!0),d,{position:s.value.position});i(c,p,!0),r.value=c}function l(c,d){const p=pe({},s.value,t.state,{forward:c,scroll:bn()});i(p.current,p,!0);const f=pe({},Ls(r.value,c,null),{position:p.position+1},d);i(c,f,!1),r.value=c}return{location:r,state:s,push:l,replace:a}}function Ud(e){e=Sd(e);const t=Nd(e),o=Md(e,t.state,t.location,t.replace);function r(i,a=!0){a||o.pauseListeners(),history.go(i)}const s=pe({location:"",base:e,go:r,createHref:xd.bind(null,e)},t,o);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Rd(e){return typeof e=="string"||e&&typeof e=="object"}function ga(e){return typeof e=="string"||typeof e=="symbol"}const ha=Symbol("");var Ds;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ds||(Ds={}));function so(e,t){return pe(new Error,{type:e,[ha]:!0},t)}function dt(e,t){return e instanceof Error&&ha in e&&(t==null||!!(e.type&t))}const Ms="[^/]+?",Wd={sensitive:!1,strict:!1,start:!0,end:!0},$d=/[.+*?^${}()[\]/\\]/g;function Hd(e,t){const o=pe({},Wd,t),r=[];let s=o.start?"^":"";const i=[];for(const d of e){const p=d.length?[]:[90];o.strict&&!d.length&&(s+="/");for(let f=0;f<d.length;f++){const h=d[f];let m=40+(o.sensitive?.25:0);if(h.type===0)f||(s+="/"),s+=h.value.replace($d,"\\$&"),m+=40;else if(h.type===1){const{value:S,repeatable:I,optional:F,regexp:R}=h;i.push({name:S,repeatable:I,optional:F});const D=R||Ms;if(D!==Ms){m+=10;try{new RegExp(`(${D})`)}catch(Y){throw new Error(`Invalid custom RegExp for param "${S}" (${D}): `+Y.message)}}let U=I?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;f||(U=F&&d.length<2?`(?:/${U})`:"/"+U),F&&(U+="?"),s+=U,m+=20,F&&(m+=-8),I&&(m+=-20),D===".*"&&(m+=-50)}p.push(m)}r.push(p)}if(o.strict&&o.end){const d=r.length-1;r[d][r[d].length-1]+=.7000000000000001}o.strict||(s+="/?"),o.end?s+="$":o.strict&&(s+="(?:/|$)");const a=new RegExp(s,o.sensitive?"":"i");function l(d){const p=d.match(a),f={};if(!p)return null;for(let h=1;h<p.length;h++){const m=p[h]||"",S=i[h-1];f[S.name]=m&&S.repeatable?m.split("/"):m}return f}function c(d){let p="",f=!1;for(const h of e){(!f||!p.endsWith("/"))&&(p+="/"),f=!1;for(const m of h)if(m.type===0)p+=m.value;else if(m.type===1){const{value:S,repeatable:I,optional:F}=m,R=S in d?d[S]:"";if(ot(R)&&!I)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const D=ot(R)?R.join("/"):R;if(!D)if(F)h.length<2&&(p.endsWith("/")?p=p.slice(0,-1):f=!0);else throw new Error(`Missing required param "${S}"`);p+=D}}return p||"/"}return{re:a,score:r,keys:i,parse:l,stringify:c}}function Od(e,t){let o=0;for(;o<e.length&&o<t.length;){const r=t[o]-e[o];if(r)return r;o++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function ma(e,t){let o=0;const r=e.score,s=t.score;for(;o<r.length&&o<s.length;){const i=Od(r[o],s[o]);if(i)return i;o++}if(Math.abs(s.length-r.length)===1){if(Ns(r))return 1;if(Ns(s))return-1}return s.length-r.length}function Ns(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Fd={type:0,value:""},Bd=/[a-zA-Z0-9_]/;function Vd(e){if(!e)return[[]];if(e==="/")return[[Fd]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${o})/"${d}": ${m}`)}let o=0,r=o;const s=[];let i;function a(){i&&s.push(i),i=[]}let l=0,c,d="",p="";function f(){d&&(o===0?i.push({type:0,value:d}):o===1||o===2||o===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:d,regexp:p,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),d="")}function h(){d+=c}for(;l<e.length;){if(c=e[l++],c==="\\"&&o!==2){r=o,o=4;continue}switch(o){case 0:c==="/"?(d&&f(),a()):c===":"?(f(),o=1):h();break;case 4:h(),o=r;break;case 1:c==="("?o=2:Bd.test(c)?h():(f(),o=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+c:o=3:p+=c;break;case 3:f(),o=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,p="";break;default:t("Unknown state");break}}return o===2&&t(`Unfinished custom RegExp for param "${d}"`),f(),a(),s}function Gd(e,t,o){const r=Hd(Vd(e.path),o),s=pe(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function jd(e,t){const o=[],r=new Map;t=Ws({strict:!1,end:!0,sensitive:!1},t);function s(f){return r.get(f)}function i(f,h,m){const S=!m,I=zd(f);I.aliasOf=m&&m.record;const F=Ws(t,f),R=[I];if("alias"in f){const Y=typeof f.alias=="string"?[f.alias]:f.alias;for(const se of Y)R.push(pe({},I,{components:m?m.record.components:I.components,path:se,aliasOf:m?m.record:I}))}let D,U;for(const Y of R){const{path:se}=Y;if(h&&se[0]!=="/"){const $=h.record.path,X=$[$.length-1]==="/"?"":"/";Y.path=h.record.path+(se&&X+se)}if(D=Gd(Y,h,F),m?m.alias.push(D):(U=U||D,U!==D&&U.alias.push(D),S&&f.name&&!Rs(D)&&a(f.name)),ba(D)&&c(D),I.children){const $=I.children;for(let X=0;X<$.length;X++)i($[X],D,m&&m.children[X])}m=m||D}return U?()=>{a(U)}:yo}function a(f){if(ga(f)){const h=r.get(f);h&&(r.delete(f),o.splice(o.indexOf(h),1),h.children.forEach(a),h.alias.forEach(a))}else{const h=o.indexOf(f);h>-1&&(o.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(a),f.alias.forEach(a))}}function l(){return o}function c(f){const h=qd(f,o);o.splice(h,0,f),f.record.name&&!Rs(f)&&r.set(f.record.name,f)}function d(f,h){let m,S={},I,F;if("name"in f&&f.name){if(m=r.get(f.name),!m)throw so(1,{location:f});F=m.record.name,S=pe(Us(h.params,m.keys.filter(U=>!U.optional).concat(m.parent?m.parent.keys.filter(U=>U.optional):[]).map(U=>U.name)),f.params&&Us(f.params,m.keys.map(U=>U.name))),I=m.stringify(S)}else if(f.path!=null)I=f.path,m=o.find(U=>U.re.test(I)),m&&(S=m.parse(I),F=m.record.name);else{if(m=h.name?r.get(h.name):o.find(U=>U.re.test(h.path)),!m)throw so(1,{location:f,currentLocation:h});F=m.record.name,S=pe({},h.params,f.params),I=m.stringify(S)}const R=[];let D=m;for(;D;)R.unshift(D.record),D=D.parent;return{name:F,path:I,params:S,matched:R,meta:Jd(R)}}e.forEach(f=>i(f));function p(){o.length=0,r.clear()}return{addRoute:i,resolve:d,removeRoute:a,clearRoutes:p,getRoutes:l,getRecordMatcher:s}}function Us(e,t){const o={};for(const r of t)r in e&&(o[r]=e[r]);return o}function zd(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Kd(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Kd(e){const t={},o=e.props||!1;if("component"in e)t.default=o;else for(const r in e.components)t[r]=typeof o=="object"?o[r]:o;return t}function Rs(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Jd(e){return e.reduce((t,o)=>pe(t,o.meta),{})}function Ws(e,t){const o={};for(const r in e)o[r]=r in t?t[r]:e[r];return o}function qd(e,t){let o=0,r=t.length;for(;o!==r;){const i=o+r>>1;ma(e,t[i])<0?r=i:o=i+1}const s=Qd(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function Qd(e){let t=e;for(;t=t.parent;)if(ba(t)&&ma(e,t)===0)return t}function ba({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Zd(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(la," "),a=i.indexOf("="),l=xo(a<0?i:i.slice(0,a)),c=a<0?null:xo(i.slice(a+1));if(l in t){let d=t[l];ot(d)||(d=t[l]=[d]),d.push(c)}else t[l]=c}return t}function $s(e){let t="";for(let o in e){const r=e[o];if(o=md(o),r==null){r!==void 0&&(t+=(t.length?"&":"")+o);continue}(ot(r)?r.map(i=>i&&Qn(i)):[r&&Qn(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+o,i!=null&&(t+="="+i))})}return t}function Yd(e){const t={};for(const o in e){const r=e[o];r!==void 0&&(t[o]=ot(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const Xd=Symbol(""),Hs=Symbol(""),Ir=Symbol(""),va=Symbol(""),Yn=Symbol("");function uo(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function o(){e=[]}return{add:t,list:()=>e.slice(),reset:o}}function It(e,t,o,r,s,i=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const d=h=>{h===!1?c(so(4,{from:o,to:t})):h instanceof Error?c(h):Rd(h)?c(so(2,{from:t,to:h})):(a&&r.enterCallbacks[s]===a&&typeof h=="function"&&a.push(h),l())},p=i(()=>e.call(r&&r.instances[s],t,o,d));let f=Promise.resolve(p);e.length<3&&(f=f.then(d)),f.catch(h=>c(h))})}function Nn(e,t,o,r,s=i=>i()){const i=[];for(const a of e)for(const l in a.components){let c=a.components[l];if(!(t!=="beforeRouteEnter"&&!a.instances[l]))if(ep(c)){const p=(c.__vccOpts||c)[t];p&&i.push(It(p,o,r,a,l,s))}else{let d=c();i.push(()=>d.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${a.path}"`));const f=sd(p)?p.default:p;a.components[l]=f;const m=(f.__vccOpts||f)[t];return m&&It(m,o,r,a,l,s)()}))}}return i}function ep(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Os(e){const t=gt(Ir),o=gt(va),r=Te(()=>{const c=oe(e.to);return t.resolve(c)}),s=Te(()=>{const{matched:c}=r.value,{length:d}=c,p=c[d-1],f=o.matched;if(!p||!f.length)return-1;const h=f.findIndex(ro.bind(null,p));if(h>-1)return h;const m=Fs(c[d-2]);return d>1&&Fs(p)===m&&f[f.length-1].path!==m?f.findIndex(ro.bind(null,c[d-2])):h}),i=Te(()=>s.value>-1&&rp(o.params,r.value.params)),a=Te(()=>s.value>-1&&s.value===o.matched.length-1&&pa(o.params,r.value.params));function l(c={}){return np(c)?t[oe(e.replace)?"replace":"push"](oe(e.to)).catch(yo):Promise.resolve()}return{route:r,href:Te(()=>r.value.href),isActive:i,isExactActive:a,navigate:l}}const tp=nt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Os,setup(e,{slots:t}){const o=ko(Os(e)),{options:r}=gt(Ir),s=Te(()=>({[Bs(e.activeClass,r.linkActiveClass,"router-link-active")]:o.isActive,[Bs(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:o.isExactActive}));return()=>{const i=t.default&&t.default(o);return e.custom?i:je("a",{"aria-current":o.isExactActive?e.ariaCurrentValue:null,href:o.href,onClick:o.navigate,class:s.value},i)}}}),op=tp;function np(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function rp(e,t){for(const o in t){const r=t[o],s=e[o];if(typeof r=="string"){if(r!==s)return!1}else if(!ot(s)||s.length!==r.length||r.some((i,a)=>i!==s[a]))return!1}return!0}function Fs(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Bs=(e,t,o)=>e??t??o,sp=nt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:o}){const r=gt(Yn),s=Te(()=>e.route||r.value),i=gt(Hs,0),a=Te(()=>{let d=oe(i);const{matched:p}=s.value;let f;for(;(f=p[d])&&!f.components;)d++;return d}),l=Te(()=>s.value.matched[a.value]);Vo(Hs,Te(()=>a.value+1)),Vo(Xd,l),Vo(Yn,s);const c=j();return Me(()=>[c.value,l.value,e.name],([d,p,f],[h,m,S])=>{p&&(p.instances[f]=d,m&&m!==p&&d&&d===h&&(p.leaveGuards.size||(p.leaveGuards=m.leaveGuards),p.updateGuards.size||(p.updateGuards=m.updateGuards))),d&&p&&(!m||!ro(p,m)||!h)&&(p.enterCallbacks[f]||[]).forEach(I=>I(d))},{flush:"post"}),()=>{const d=s.value,p=e.name,f=l.value,h=f&&f.components[p];if(!h)return Vs(o.default,{Component:h,route:d});const m=f.props[p],S=m?m===!0?d.params:typeof m=="function"?m(d):m:null,F=je(h,pe({},S,t,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(f.instances[p]=null)},ref:c}));return Vs(o.default,{Component:F,route:d})||F}}});function Vs(e,t){if(!e)return null;const o=e(t);return o.length===1?o[0]:o}const ya=sp;function ip(e){const t=jd(e.routes,e),o=e.parseQuery||Zd,r=e.stringifyQuery||$s,s=e.history,i=uo(),a=uo(),l=uo(),c=sl(At);let d=At;Zt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=Dn.bind(null,_=>""+_),f=Dn.bind(null,vd),h=Dn.bind(null,xo);function m(_,M){let E,H;return ga(_)?(E=t.getRecordMatcher(_),H=M):H=_,t.addRoute(H,E)}function S(_){const M=t.getRecordMatcher(_);M&&t.removeRoute(M)}function I(){return t.getRoutes().map(_=>_.record)}function F(_){return!!t.getRecordMatcher(_)}function R(_,M){if(M=pe({},M||c.value),typeof _=="string"){const g=Mn(o,_,M.path),b=t.resolve({path:g.path},M),A=s.createHref(g.fullPath);return pe(g,b,{params:h(b.params),hash:xo(g.hash),redirectedFrom:void 0,href:A})}let E;if(_.path!=null)E=pe({},_,{path:Mn(o,_.path,M.path).path});else{const g=pe({},_.params);for(const b in g)g[b]==null&&delete g[b];E=pe({},_,{params:f(g)}),M.params=f(M.params)}const H=t.resolve(E,M),de=_.hash||"";H.params=p(h(H.params));const ye=_d(r,pe({},_,{hash:hd(de),path:H.path})),u=s.createHref(ye);return pe({fullPath:ye,hash:de,query:r===$s?Yd(_.query):_.query||{}},H,{redirectedFrom:void 0,href:u})}function D(_){return typeof _=="string"?Mn(o,_,c.value.path):pe({},_)}function U(_,M){if(d!==_)return so(8,{from:M,to:_})}function Y(_){return X(_)}function se(_){return Y(pe(D(_),{replace:!0}))}function $(_){const M=_.matched[_.matched.length-1];if(M&&M.redirect){const{redirect:E}=M;let H=typeof E=="function"?E(_):E;return typeof H=="string"&&(H=H.includes("?")||H.includes("#")?H=D(H):{path:H},H.params={}),pe({query:_.query,hash:_.hash,params:H.path!=null?{}:_.params},H)}}function X(_,M){const E=d=R(_),H=c.value,de=_.state,ye=_.force,u=_.replace===!0,g=$(E);if(g)return X(pe(D(g),{state:typeof g=="object"?pe({},de,g.state):de,force:ye,replace:u}),M||E);const b=E;b.redirectedFrom=M;let A;return!ye&&Ad(r,H,E)&&(A=so(16,{to:b,from:H}),rt(H,H,!0,!1)),(A?Promise.resolve(A):te(b,H)).catch(w=>dt(w)?dt(w,2)?w:bt(w):ce(w,b,H)).then(w=>{if(w){if(dt(w,2))return X(pe({replace:u},D(w.to),{state:typeof w.to=="object"?pe({},de,w.to.state):de,force:ye}),M||b)}else w=W(b,H,!0,u,de);return ie(b,H,w),w})}function he(_,M){const E=U(_,M);return E?Promise.reject(E):Promise.resolve()}function G(_){const M=Jt.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(_):_()}function te(_,M){let E;const[H,de,ye]=ap(_,M);E=Nn(H.reverse(),"beforeRouteLeave",_,M);for(const g of H)g.leaveGuards.forEach(b=>{E.push(It(b,_,M))});const u=he.bind(null,_,M);return E.push(u),Be(E).then(()=>{E=[];for(const g of i.list())E.push(It(g,_,M));return E.push(u),Be(E)}).then(()=>{E=Nn(de,"beforeRouteUpdate",_,M);for(const g of de)g.updateGuards.forEach(b=>{E.push(It(b,_,M))});return E.push(u),Be(E)}).then(()=>{E=[];for(const g of ye)if(g.beforeEnter)if(ot(g.beforeEnter))for(const b of g.beforeEnter)E.push(It(b,_,M));else E.push(It(g.beforeEnter,_,M));return E.push(u),Be(E)}).then(()=>(_.matched.forEach(g=>g.enterCallbacks={}),E=Nn(ye,"beforeRouteEnter",_,M,G),E.push(u),Be(E))).then(()=>{E=[];for(const g of a.list())E.push(It(g,_,M));return E.push(u),Be(E)}).catch(g=>dt(g,8)?g:Promise.reject(g))}function ie(_,M,E){l.list().forEach(H=>G(()=>H(_,M,E)))}function W(_,M,E,H,de){const ye=U(_,M);if(ye)return ye;const u=M===At,g=Zt?history.state:{};E&&(H||u?s.replace(_.fullPath,pe({scroll:u&&g&&g.scroll},de)):s.push(_.fullPath,de)),c.value=_,rt(_,M,E,u),bt()}let le;function Se(){le||(le=s.listen((_,M,E)=>{if(!Lo.listening)return;const H=R(_),de=$(H);if(de){X(pe(de,{replace:!0}),H).catch(yo);return}d=H;const ye=c.value;Zt&&Ed(Es(ye.fullPath,E.delta),bn()),te(H,ye).catch(u=>dt(u,12)?u:dt(u,2)?(X(u.to,H).then(g=>{dt(g,20)&&!E.delta&&E.type===Po.pop&&s.go(-1,!1)}).catch(yo),Promise.reject()):(E.delta&&s.go(-E.delta,!1),ce(u,H,ye))).then(u=>{u=u||W(H,ye,!1),u&&(E.delta&&!dt(u,8)?s.go(-E.delta,!1):E.type===Po.pop&&dt(u,20)&&s.go(-1,!1)),ie(H,ye,u)}).catch(yo)}))}let Ye=uo(),Ae=uo(),ge;function ce(_,M,E){bt(_);const H=Ae.list();return H.length?H.forEach(de=>de(_,M,E)):console.error(_),Promise.reject(_)}function ut(){return ge&&c.value!==At?Promise.resolve():new Promise((_,M)=>{Ye.add([_,M])})}function bt(_){return ge||(ge=!_,Se(),Ye.list().forEach(([M,E])=>_?E(_):M()),Ye.reset()),_}function rt(_,M,E,H){const{scrollBehavior:de}=e;if(!Zt||!de)return Promise.resolve();const ye=!E&&Ld(Es(_.fullPath,0))||(H||!E)&&history.state&&history.state.scroll||null;return zt().then(()=>de(_,M,ye)).then(u=>u&&kd(u)).catch(u=>ce(u,_,M))}const Ne=_=>s.go(_);let Kt;const Jt=new Set,Lo={currentRoute:c,listening:!0,addRoute:m,removeRoute:S,clearRoutes:t.clearRoutes,hasRoute:F,getRoutes:I,resolve:R,options:e,push:Y,replace:se,go:Ne,back:()=>Ne(-1),forward:()=>Ne(1),beforeEach:i.add,beforeResolve:a.add,afterEach:l.add,onError:Ae.add,isReady:ut,install(_){const M=this;_.component("RouterLink",op),_.component("RouterView",ya),_.config.globalProperties.$router=M,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>oe(c)}),Zt&&!Kt&&c.value===At&&(Kt=!0,Y(s.location).catch(de=>{}));const E={};for(const de in At)Object.defineProperty(E,de,{get:()=>c.value[de],enumerable:!0});_.provide(Ir,M),_.provide(va,fi(E)),_.provide(Yn,c);const H=_.unmount;Jt.add(_),_.unmount=function(){Jt.delete(_),Jt.size<1&&(d=At,le&&le(),le=null,c.value=At,Kt=!1,ge=!1),H()}}};function Be(_){return _.reduce((M,E)=>M.then(()=>G(E)),Promise.resolve())}return Lo}function ap(e,t){const o=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let a=0;a<i;a++){const l=t.matched[a];l&&(e.matched.find(d=>ro(d,l))?r.push(l):o.push(l));const c=e.matched[a];c&&(t.matched.find(d=>ro(d,c))||s.push(c))}return[o,r,s]}const Ce=(e,t)=>{const o=e.__vccOpts||e;for(const[r,s]of t)o[r]=s;return o},lp={__name:"App",setup(e){return(t,o)=>(L(),fe(oe(ya)))}},cp=Ce(lp,[["__scopeId","data-v-1bdfff53"]]),up={class:"app-header"},dp={class:"container"},pp={class:"app-header-nav",style:{"list-style":"none"}},fp={__name:"LayoutHeader",setup(e){return(t,o)=>{const r=ze("RouterLink");return L(),Z("header",up,[v("div",dp,[v("ul",pp,[v("li",null,[y(r,{to:"/"},{default:ne(()=>[Q("WebAPI")]),_:1})]),v("li",null,[y(r,{to:"/kaiWebapi2"},{default:ne(()=>[Q("WebAPI2")]),_:1})]),v("li",null,[y(r,{to:"/vue3"},{default:ne(()=>[Q("Vue3")]),_:1})]),v("li",null,[y(r,{to:"/download"},{default:ne(()=>[Q("下載")]),_:1})]),v("li",null,[y(r,{to:"/others"},{default:ne(()=>[Q("其他")]),_:1})]),v("li",null,[y(r,{to:"/dotnet7_vue3"},{default:ne(()=>[Q("Dotnet7_vue3")]),_:1})]),v("li",null,[y(r,{to:"/vscode_function"},{default:ne(()=>[Q("VS Code小功能")]),_:1})]),v("li",null,[y(r,{to:"/video"},{default:ne(()=>[Q("Video")]),_:1})]),v("li",null,[y(r,{to:"/es6"},{default:ne(()=>[Q("ES6")]),_:1})]),v("li",null,[y(r,{to:"/Naive_ui"},{default:ne(()=>[Q("Naive-ui")]),_:1})]),v("li",null,[y(r,{to:"/dotnetapi_angular"},{default:ne(()=>[Q("DotnetAPI_Angular")]),_:1})]),v("li",null,[y(r,{to:"/AI"},{default:ne(()=>[Q("AI")]),_:1})]),v("li",null,[y(r,{to:"/Vue3+.NET7"},{default:ne(()=>[Q("Vue3+.NET7")]),_:1})])])])])}}},gp=Ce(fp,[["__scopeId","data-v-9495ea86"]]),hp=v("hr",null,null,-1),mp={__name:"index",setup(e){return(t,o)=>{const r=ze("RouterView");return L(),Z(J,null,[y(gp),hp,y(r)],64)}}},bp="/vue-my-note/assets/uparrow-CelNzM_b.png",vp={name:"scroll-top",data(){return{scrollTop:0,time:0,dParams:20,scrollState:0}},computed:{showTop:function(){return this.scrollTop>200}},mounted(){window.addEventListener("scroll",this.getScrollTop)},methods:{toTop(e){if(this.scrollState)return;this.scrollState=1,e.preventDefault(),document.documentElement.scrollTop||document.body.scrollTop;let t=this;this.time=setInterval(function(){t.gotoTop(t.scrollTop-t.dParams)},30)},gotoTop(e){this.dParams+=20,e=e>0?e:0,document.documentElement.scrollTop=document.body.scrollTop=window.pageYOffset=e,this.scrollTop<10&&(clearInterval(this.time),this.dParams=20,this.scrollState=0)},getScrollTop(){this.scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop}}},yp=e=>($e("data-v-77d80545"),e=e(),He(),e),wp=yp(()=>v("img",{src:bp},null,-1)),_p=[wp];function Ap(e,t,o,r,s,i){return L(),Z("div",{class:"scrollTop",onClick:t[0]||(t[0]=(...a)=>i.toTop&&i.toTop(...a))},_p)}const q=Ce(vp,[["render",Ap],["__scopeId","data-v-77d80545"]]),Cp=e=>($e("data-v-17862d76"),e=e(),He(),e),Tp=Cp(()=>v("div",null,"我是WebAPI頁面",-1)),Sp=`
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
  `,Ip={__name:"index",setup(e){return q.scrollToTop=!0,(t,o)=>(L(),Z(J,null,[Tp,v("div",null,[v("div",{innerHTML:Sp})]),y(q)],64))}},xp=Ce(Ip,[["__scopeId","data-v-17862d76"]]),Pp=`
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
`,kp={__name:"TodoListEditDtoAbstract",setup(e){return q.scrollToTop=!0,(t,o)=>(L(),Z(J,null,[v("div",{innerHTML:Pp}),y(q)],64))}},Ep=`
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
`,Lp={__name:"AsyncController",setup(e){return q.scrollToTop=!0,(t,o)=>(L(),Z(J,null,[v("div",{innerHTML:Ep}),y(q)],64))}},Dp=`
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
`,Mp={__name:"AuthController",setup(e){return q.scrollToTop=!0,(t,o)=>(L(),Z(J,null,[v("div",{innerHTML:Dp}),y(q)],64))}},Np={id:"Vite_to_github",class:"content"},Up={class:"title"},Rp={key:0},Wp={class:"title"},$p={key:0},Hp={class:"title"},Op={key:0},Fp={__name:"index",setup(e){let t=j(!1),o=j(!1),r=j(!1);return q.scrollToTop=!0,(s,i)=>(L(),Z(J,null,[v("div",Np,[v("div",Up,[Q("1.DeployVite "),v("button",{onClick:i[0]||(i[0]=a=>we(t)?t.value=!oe(t):t=!oe(t))},"Toggle"),y(Je,null,{default:ne(()=>[oe(t)?(L(),Z("div",Rp,[y(kp)])):Ke("",!0)]),_:1})]),v("div",Wp,[Q("2.AsyncController "),v("button",{onClick:i[1]||(i[1]=a=>we(o)?o.value=!oe(o):o=!oe(o))},"Toggle"),y(Je,null,{default:ne(()=>[oe(o)?(L(),Z("div",$p,[y(Lp)])):Ke("",!0)]),_:1})]),v("div",Hp,[Q("3.AsyncController "),v("button",{onClick:i[2]||(i[2]=a=>we(r)?r.value=!oe(r):r=!oe(r))},"Toggle"),y(Je,null,{default:ne(()=>[oe(r)?(L(),Z("div",Op,[y(Mp)])):Ke("",!0)]),_:1})])]),y(q)],64))}},Bp=Ce(Fp,[["__scopeId","data-v-b5f5b106"]]),Vp=v("div",null,"我是RabbitVue3頁面",-1),Gp=`
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
`,jp={__name:"index",setup(e){return q.scrollToTop=!0,(t,o)=>(L(),Z(J,null,[Vp,v("div",{innerHTML:Gp}),y(q)],64))}},zp={},Kp=fn('<div data-v-ff3ccd06>我是Download頁面</div><div id="Vue3" class="content" data-v-ff3ccd06><div class="box" data-v-ff3ccd06><div style="padding-top:20px;" data-v-ff3ccd06>【Vue3】</div><div data-v-ff3ccd06><a href="https://www.youtube.com/watch?v=LlYhPO8Ti2U" target="_blank" data-v-ff3ccd06> 1.NET7 Web API | SQL Database | VueJS(3.0) - Composition API | CRUD| Full Video<span class="pdf" data-v-ff3ccd06>YouTube</span></a><p data-v-ff3ccd06>.解決CORS問題</p></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=19m0QpipH0fPS51aztlgZ0gFxwWkSpqo_" data-v-ff3ccd06> 1.dotnet7_vue3<span class="pdf" data-v-ff3ccd06>download&gt;</span></a></div><div data-v-ff3ccd06><a href="https://www.youtube.com/watch?v=2FoD_8dMGyU&amp;list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG" target="_blank" data-v-ff3ccd06> 2.【黑馬程序員】前端Vue3小兔鮮實戰項目<span class="pdf" data-v-ff3ccd06>YouTube</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=10LPanB6adG6BLF0cKcM3H-VCSvUWwf8A" data-v-ff3ccd06> 3.vue-rabbit_my 小兔鮮<span class="pdf" data-v-ff3ccd06>download</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=1AXgm42kcojPX2g7EfrSmHyb-N1BJAAMi" data-v-ff3ccd06> 4.vue-rabbit_sku 小兔鮮<span class="pdf" data-v-ff3ccd06>download</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=18N6U0JeeUsS6EhGGz2jvh3aZK41L-uBc" data-v-ff3ccd06> 5.vue3-basic-project-my(mock)<span class="pdf" data-v-ff3ccd06>download</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=1Xe_GxmzXJVSIxMnqw3cm15YkLLQc4tWD" data-v-ff3ccd06> 6.vue3-basic-project-my(有驗證名字不能重覆update)<span class="pdf" data-v-ff3ccd06>download</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=1551IhmQAwld3cmTH60XHFYvEbvCj2Hfo" data-v-ff3ccd06> 7.台灣濕地學會<span class="pdf" data-v-ff3ccd06>download</span></a></div><div style="padding-top:20px;" data-v-ff3ccd06>【WebAPI】</div><div data-v-ff3ccd06><a href="https://blog.talllkai.com/ASPNETCore" target="_blank" data-v-ff3ccd06> 1.完整且輕鬆學習ASP.NET Core Web API<span class="pdf" data-v-ff3ccd06>Web</span></a></div><div data-v-ff3ccd06><a href="https://www.youtube.com/watch?v=dXUfZuf1Wp4&amp;list=PLneJIGUTIItuqdxuDBEKCrvXCtCdUf_Xm" target="_blank" data-v-ff3ccd06> 2.ASP.NET Core Web API 入門教學<span class="pdf" data-v-ff3ccd06>YouTube</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=1Mi3nQijxvyz6TmA7NWzkudmxeJha7W-e" data-v-ff3ccd06> 3.DataBase_First_凱哥<span class="pdf" data-v-ff3ccd06>download</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=1ZvJ5hwHCPzPRMsv_w3sWJOxKYI88h8xd" data-v-ff3ccd06> 4.BookMark<span class="pdf" data-v-ff3ccd06>download</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=1Oiyo9Pgg-qCY6mkY9L0WDVmAc3VQYeeP" data-v-ff3ccd06> 5.無蝦米download<span class="pdf" data-v-ff3ccd06>download</span></a></div></div></div>',2);function Jp(e,t){return Kp}const qp=Ce(zp,[["render",Jp],["__scopeId","data-v-ff3ccd06"]]),Qp=`
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
`,wa={__name:"_4_deployVite",setup(e){return q.scrollToTop=!0,(t,o)=>(L(),Z(J,null,[v("div",{innerHTML:Qp}),y(q)],64))}},Zp=`
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
`,Yp={__name:"_10_vue3_is",setup(e){return q.scrollToTop=!0,(t,o)=>(L(),Z(J,null,[v("div",{innerHTML:Zp}),y(q)],64))}},Xp=`
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
`,ef={__name:"_11_vue3_is",setup(e){return q.scrollToTop=!0,(t,o)=>(L(),Z(J,null,[v("div",{innerHTML:Xp}),y(q)],64))}},tf=`
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
`,of={__name:"_16_Quartz",setup(e){return q.scrollToTop=!0,(t,o)=>(L(),Z(J,null,[v("div",{innerHTML:tf}),y(q)],64))}},nf=`
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
`,rf={__name:"_17_Cors",setup(e){return q.scrollToTop=!0,(t,o)=>(L(),Z(J,null,[v("div",{innerHTML:nf}),y(q)],64))}},Gs={__name:"HelloWorld",props:["msg2"],emits:["foo"],setup(e,{emit:t}){const o=t;return setTimeout(()=>{o("foo","onFoo")},2e3),(r,s)=>(L(),Z("div",null,[An(r.$slots,"default",{},()=>[Q("5.HelloWorld.vue")]),Q(" "+Qe(e.msg2)+" ",1),An(r.$slots,"default"),An(r.$slots,"footer",{msg3:" + msg3 footer props"},()=>[Q("footer")])]))}},Ee=e=>($e("data-v-fb538a84"),e=e(),He(),e),sf=Ee(()=>v("div",null,"這是其他頁",-1)),af=Ee(()=>v("div",null,"3.2222",-1)),lf=Ee(()=>v("div",null,"4.2222",-1)),cf=Ee(()=>v("div",null,"5.App傳遞的默認插槽",-1)),uf={id:"Vite_to_github",class:"content"},df=Ee(()=>v("div",null,[Q("1.Vue3 CRUD + bootstrap "),v("a",{href:"https://www.youtube.com/watch?v=PrKh6GemOyg",target:"_blank"}," https://www.youtube.com/watch?v=PrKh6GemOyg ")],-1)),pf=Ee(()=>v("div",null,[Q("2.Vue3 學習筆記 "),v("a",{href:"https://hackmd.io/@Lin-Jay/S1xju_nKO",target:"_blank"}," https://hackmd.io/@Lin-Jay/S1xju_nKO ")],-1)),ff=Ee(()=>v("div",null,[Q("3.Build app using Vue JS, .NET Core Web API and Microsoft SQL Server(create Azure) "),v("a",{href:"https://www.youtube.com/watch?v=TMmhECU3rHs",target:"_blank"}," https://www.youtube.com/watch?v=TMmhECU3rHs ")],-1)),gf=Ee(()=>v("a",{href:"https://www.youtube.com/watch?v=yo2bMGnIKE8",target:"_blank"}," https://www.youtube.com/watch?v=yo2bMGnIKE8 ",-1)),hf={key:0},mf=fn('<div data-v-fb538a84>5.先學 axios 基礎與封裝管理 API <a href="https://ithelp.ithome.com.tw/articles/10304656" target="_blank" data-v-fb538a84> https://ithelp.ithome.com.tw/articles/10304656 </a></div><div data-v-fb538a84>6.[C#][ASP.NET] Web API 開發心得 (7) - 使用 Token 進行 API 授權驗證 <a href="https://ithelp.ithome.com.tw/articles/10199102" target="_blank" data-v-fb538a84> https://ithelp.ithome.com.tw/articles/10199102 </a></div><div data-v-fb538a84>7.Poy Chang Trial and Error <a href="https://blog.poychang.net/categories/" target="_blank" data-v-fb538a84> https://blog.poychang.net/categories/ </a></div><div data-v-fb538a84>8.阿里巴巴向量圖標庫: iconfont <a href="https://www.iconfont.cn/" target="_blank" data-v-fb538a84> https://www.iconfont.cn/ </a></div><div data-v-fb538a84>9.VueUse 中文文檔 <a href="https://vueuse.pages.dev/" target="_blank" data-v-fb538a84> https://vueuse.pages.dev/ </a></div><div data-v-fb538a84>9.vue3 is我意想不到的用法 <a href="https://segmentfault.com/a/1190000044532342" target="_blank" data-v-fb538a84> https://segmentfault.com/a/1190000044532342 </a></div>',6),bf=Ee(()=>v("a",{href:"https://blog.csdn.net/kuang_nu/article/details/128834690",target:"_blank"}," https://blog.csdn.net/kuang_nu/article/details/128834690 ",-1)),vf={key:0},yf=Ee(()=>v("a",{href:"https://www.bilibili.com/video/BV166421Z7nU/",target:"_blank"}," https://www.bilibili.com/video/BV166421Z7nU/ ",-1)),wf={key:0},_f=Ee(()=>v("div",null,[Q("12.Master xUnit Like A Pro in Under 10 Minutes! "),v("a",{href:"https://www.youtube.com/watch?v=rohq-Wqj0yI",target:"_blank"}," https://www.youtube.com/watch?v=rohq-Wqj0yI ")],-1)),Af=Ee(()=>v("div",null,[Q("13.Native UI - 表單 "),v("a",{href:"https://www.naiveui.com/zh-CN/os-theme/components/form#inline.vue",target:"_blank"}," https://www.naiveui.com/zh-CN/os-theme/components/form#inline.vue ")],-1)),Cf=Ee(()=>v("div",null,[Q("14.Vue3 如何用 defineModel 實作 props/ emit 的父子元件傳值，讓傳值變得更方便簡單 "),v("a",{href:"https://muki.tw/vmodel-definemodel-props-emit/",target:"_blank"}," https://muki.tw/vmodel-definemodel-props-emit/ ")],-1)),Tf=Ee(()=>v("div",null,[Q("15.Vue3 獲取子組件dom "),v("a",{href:"https://wenku.csdn.net/answer/6j4iqoam25?ydreferer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8%3D",target:"_blank"}," https://wenku.csdn.net/answer/6j4iqoam25?ydreferer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8%3D ")],-1)),Sf=Ee(()=>v("a",{href:"https://www.bilibili.com/video/BV1G94y1b7JH/?vd_source=1a5937a80fc962029ba6a7b9ee9a1654",target:"_blank"}," https://www.bilibili.com/video/BV1G94y1b7JH/?vd_source=1a5937a80fc962029ba6a7b9ee9a1654 ",-1)),If=Ee(()=>v("a",{href:"https://www.youtube.com/watch?v=iD3jrj3RBuc&t=118s",target:"_blank"}," Scheduling Background Tasks In .NET With Quartz-https://www.youtube.com/watch?v=iD3jrj3RBuc&t=118s ",-1)),xf={key:0},Pf=Ee(()=>v("a",{href:"https://ithelp.ithome.com.tw/articles/10245157",target:"_blank"}," https://ithelp.ithome.com.tw/articles/10245157 ",-1)),kf={key:0},Ef={__name:"index",setup(e){let t=j(!1),o=j(!1),r=j(!1),s=j(!1),i=j(!1);const a=j("1.Hello Vue3 + Vite"),l=je("div",{style:{color:"red"}},[je("span","1.Hello World")],[je("p","1.這是一個標籤")]);setTimeout(()=>{a.value="3.111"},2e3);const c=f=>je("div",{style:{color:"red"}},f.count),d=(f,{slots:h})=>{var S,I;const m=j("4.aaa");return je("div",{style:{color:"red"},onClick(){console.log("click")},onMousedown(){console.log("mousedown")}},[(S=h==null?void 0:h.header)==null?void 0:S.call(h,m.value),"4.container",(I=h==null?void 0:h.default)==null?void 0:I.call(h)])},p=(f,{slots:h})=>je(Gs,{msg2:"App傳遞的msg2",onFoo(m){console.log("響應的事件foo",m)}},{default:h.default,footer:()=>je(Gs,null,{default:()=>je("div","5.嵌套的默認插槽"),footer:({msg3:m})=>je("div","5.嵌套的footer"+m)})});return q.scrollToTop=!0,(f,h)=>(L(),Z(J,null,[sf,(L(),fe(Il(oe(l)))),y(c,{count:3.1},{default:ne(()=>[af]),_:1}),y(d,{count:4.1},{header:ne(m=>[v("div",null,"4.header "+Qe(m),1)]),default:ne(()=>[lf]),_:1}),y(p,null,{default:ne(()=>[cf]),_:1}),v("div",uf,[df,pf,ff,v("div",null,[Q("4.How to Deploy Your Vite App to Github Pages "),gf,v("button",{onClick:h[0]||(h[0]=m=>we(t)?t.value=!oe(t):t=!oe(t))},"Toggle"),y(Je,null,{default:ne(()=>[oe(t)?(L(),Z("div",hf,[y(wa)])):Ke("",!0)]),_:1})]),mf,v("div",null,[Q("10.Vue3 動態組件 標籤和:is 的用法 "),bf,v("button",{onClick:h[1]||(h[1]=m=>we(o)?o.value=!oe(o):o=!oe(o))},"Toggle"),y(Je,null,{default:ne(()=>[oe(o)?(L(),Z("div",vf,[y(Yp)])):Ke("",!0)]),_:1})]),v("div",null,[Q("11.Vue3 h函數的使用(必看) "),yf,v("button",{onClick:h[2]||(h[2]=m=>we(r)?r.value=!oe(r):r=!oe(r))},"Toggle"),y(Je,null,{default:ne(()=>[oe(r)?(L(),Z("div",wf,[y(ef)])):Ke("",!0)]),_:1})]),_f,Af,Cf,Tf,v("div",null,[Q("16.Quartz與Cron表達式管理後台任務執行 "),Sf,If,v("button",{onClick:h[3]||(h[3]=m=>we(s)?s.value=!oe(s):s=!oe(s))},"Toggle"),y(Je,null,{default:ne(()=>[oe(s)?(L(),Z("div",xf,[y(of)])):Ke("",!0)]),_:1})]),v("div",null,[Q("17.CORS 跨來源資源共用 - 我與 ASP.NET Core 3 的 30天 "),Pf,v("button",{onClick:h[4]||(h[4]=m=>we(i)?i.value=!oe(i):i=!oe(i))},"Toggle"),y(Je,null,{default:ne(()=>[oe(i)?(L(),Z("div",kf,[y(rf)])):Ke("",!0)]),_:1})])]),y(q)],64))}},Lf=Ce(Ef,[["__scopeId","data-v-fb538a84"]]),_a=e=>($e("data-v-c0da6ecf"),e=e(),He(),e),Df=_a(()=>v("div",null,[v("h2",null,"Dotnet7_vue3"),v("a",{href:"https://www.youtube.com/watch?v=LlYhPO8Ti2U",target:"_blank"}," https://www.youtube.com/watch?v=LlYhPO8Ti2U "),v("div",null,".NET7 Web API | SQL Database | VueJS(3.0) - Composition API | CRUD")],-1)),Mf={class:"container"},Nf={class:"app-header-nav",style:{"list-style":"none"}},Uf=_a(()=>v("div",null,null,-1)),Rf={__name:"index",setup(e){return q.scrollToTop=!0,(t,o)=>{const r=ze("RouterLink"),s=ze("RouterView");return L(),Z(J,null,[Df,v("div",null,[v("div",Mf,[v("ul",Nf,[v("li",null,[y(r,{to:"/_beach_info"},{default:ne(()=>[Q("_Beach_Info.vue")]),_:1})]),v("li",null,[y(r,{to:"/addbeach"},{default:ne(()=>[Q("AddBeach.vue")]),_:1})]),v("li",null,[y(r,{to:"/beachList"},{default:ne(()=>[Q("BeachList.vue")]),_:1})]),v("li",null,[y(r,{to:"/editbeach"},{default:ne(()=>[Q("EditBeach.vue")]),_:1})]),v("li",null,[y(r,{to:"/routerbeach"},{default:ne(()=>[Q("router_Beach.vue")]),_:1})]),v("li",null,[y(r,{to:"/confirmDeletePopup"},{default:ne(()=>[Q("ConfirmDeletePopup.vue")]),_:1})])])]),y(s),Uf]),y(q)],64)}}},Wf=Ce(Rf,[["__scopeId","data-v-c0da6ecf"]]),$f=e=>($e("data-v-faca44a6"),e=e(),He(),e),Hf=$f(()=>v("div",null,"這是_Beach_Info",-1)),Of=`
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
`,Ff={__name:"_Beach_Info",setup(e){return(t,o)=>(L(),Z(J,null,[Hf,v("div",{class:"content"},[v("pre",null,"      "+Qe(Of)+`
    `)])],64))}},js=Ce(Ff,[["__scopeId","data-v-faca44a6"]]),Bf=e=>($e("data-v-315d8245"),e=e(),He(),e),Vf=Bf(()=>v("div",null,"這是AddBeach",-1)),Gf=`
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

`,jf={__name:"AddBeach",setup(e){return(t,o)=>(L(),Z(J,null,[Vf,v("div",{class:"content"},[v("pre",null,"      "+Qe(Gf)+`
    `)])],64))}},zf=Ce(jf,[["__scopeId","data-v-315d8245"]]),Kf=e=>($e("data-v-21c2ba9b"),e=e(),He(),e),Jf=Kf(()=>v("div",null,"這是BeachList",-1)),qf=`
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

`,Qf={__name:"BeachList",setup(e){return(t,o)=>(L(),Z(J,null,[Jf,v("div",{class:"content"},[v("pre",null,"      "+Qe(qf)+`
    `)])],64))}},Zf=Ce(Qf,[["__scopeId","data-v-21c2ba9b"]]),Yf=e=>($e("data-v-3763e4f1"),e=e(),He(),e),Xf=Yf(()=>v("div",null,"這是EditBeach",-1)),eg=`
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

`,tg={__name:"EditBeach",setup(e){return(t,o)=>(L(),Z(J,null,[Xf,v("div",{class:"content"},[v("pre",null,"      "+Qe(eg)+`
    `)])],64))}},og=Ce(tg,[["__scopeId","data-v-3763e4f1"]]),ng=e=>($e("data-v-f0f2e55e"),e=e(),He(),e),rg=ng(()=>v("div",null,"這是_router_Beach",-1)),sg=`
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


`,ig={__name:"router_Beach",setup(e){return(t,o)=>(L(),Z(J,null,[rg,v("div",{class:"content"},[v("pre",null,"      "+Qe(sg)+`
    `)])],64))}},ag=Ce(ig,[["__scopeId","data-v-f0f2e55e"]]),lg=e=>($e("data-v-69fb1a2b"),e=e(),He(),e),cg=lg(()=>v("div",null,"這是ConfirmDeletePopup",-1)),ug=`
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


`,dg={__name:"ConfirmDeletePopup",setup(e){return(t,o)=>(L(),Z(J,null,[cg,v("div",{class:"content"},[v("pre",null,`      這放在components\\
      由BeachList 呼叫
      `+Qe(ug)+`
    `)])],64))}},pg=Ce(dg,[["__scopeId","data-v-69fb1a2b"]]),fg=`
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
`,gg={__name:"_2_vscode",setup(e){return q.scrollToTop=!0,(t,o)=>(L(),Z(J,null,[v("div",{innerHTML:fg}),y(q)],64))}},xr=e=>($e("data-v-7775a5f3"),e=e(),He(),e),hg=xr(()=>v("div",null,"這是VS Code 功能頁",-1)),mg={id:"Vite_to_github",class:"content"},bg=xr(()=>v("div",null,[Q("1.vS Code文件標簽欄多行顯示 "),v("a",{href:"https://blog.csdn.net/mj475002864/article/details/115456004",target:"_blank"}," https://blog.csdn.net/mj475002864/article/details/115456004 "),v("p",null,"ctrl + shift + p => 查詢 Open Workspace Settings => Wrap Tabs 打勾 ")],-1)),vg={key:0},yg=xr(()=>v("div",null,[Q("3.vs code 開發Extension "),v("p",null,"TypeScript Vue Plugin(Volar)"),v("p",null,"Vue Language Features"),v("p",null,"Vue - Official")],-1)),wg={__name:"index",setup(e){let t=j(!1);return q.scrollToTop=!0,(o,r)=>(L(),Z(J,null,[hg,v("div",mg,[bg,v("div",null,[Q("2.vs code 快捷鍵 "),v("button",{onClick:r[0]||(r[0]=s=>we(t)?t.value=!oe(t):t=!oe(t))},"Toggle"),y(Je,null,{default:ne(()=>[oe(t)?(L(),Z("div",vg,[y(gg)])):Ke("",!0)]),_:1})]),yg]),y(q)],64))}},_g=Ce(wg,[["__scopeId","data-v-7775a5f3"]]),Ag=fn('<div data-v-bb9159e2>vue3+Naive UI</div><div id="Vite_to_github" class="content" data-v-bb9159e2><div data-v-bb9159e2>1.ue3+Naive UI數據表格基本使用方式 <a href="https://blog.csdn.net/weixin_54570626/article/details/129407702" target="_blank" data-v-bb9159e2> https://blog.csdn.net/weixin_54570626/article/details/129407702 </a></div><div data-v-bb9159e2>2.naive ui 數據表格操作加入兩個按鈕解決辦法 <a href="https://blog.csdn.net/uglyduckling0412/article/details/131438996" target="_blank" data-v-bb9159e2> https://blog.csdn.net/uglyduckling0412/article/details/131438996 </a></div><div data-v-bb9159e2>3.Naive UI之Data Table <a href="https://blog.csdn.net/aliceyang2012/article/details/127801611" target="_blank" data-v-bb9159e2> https://blog.csdn.net/aliceyang2012/article/details/127801611 </a></div><div data-v-bb9159e2>4.vue3結合naiveui的表單規則寫法（回調） <a href="https://www.cnblogs.com/lingern/p/16190795.html" target="_blank" data-v-bb9159e2> https://www.cnblogs.com/lingern/p/16190795.html </a></div></div>',2),Cg={__name:"index",setup(e){return j(!1),q.scrollToTop=!0,(t,o)=>(L(),Z(J,null,[Ag,y(q)],64))}},Tg=Ce(Cg,[["__scopeId","data-v-bb9159e2"]]),Sg=fn('<div data-v-97fd3d78>這是影音頁</div><div id="Vite_to_github" class="content" data-v-97fd3d78><div data-v-97fd3d78>1.Vue3 CRUD + bootstrap <a href="https://www.youtube.com/watch?v=PrKh6GemOyg" target="_blank" data-v-97fd3d78> https://www.youtube.com/watch?v=PrKh6GemOyg </a></div><div data-v-97fd3d78>2.後台課程管理系統-Vue3版 <a href="https://www.youtube.com/watch?v=yZMTHoGSuVQ&amp;list=PL_vrngOaamYsIovhZ3Cd9M2vPhm3yRTnG" target="_blank" data-v-97fd3d78> https://www.youtube.com/watch?v=yZMTHoGSuVQ&amp;list=PL_vrngOaamYsIovhZ3Cd9M2vPhm3yRTnG </a></div><div data-v-97fd3d78>3.2024年不看后悔的Vue3+.NET7+WebAPI从零手写后台管理系统 <a href="https://www.bilibili.com/video/BV1Km411o7ip?p=1&amp;vd_source=1a5937a80fc962029ba6a7b9ee9a1654" target="_blank" data-v-97fd3d78> https://www.bilibili.com/video/BV1Km411o7ip?p=1&amp;vd_source=1a5937a80fc962029ba6a7b9ee9a1654 </a><a href="https://search.bilibili.com/all?vt=75651059&amp;keyword=2024%E5%B9%B4%E4%B8%8D%E7%9C%8B%E5%90%8E%E6%82%94%E7%9A%84Vue3%2B.NET7%2BWebAPI&amp;from_source=webtop_search&amp;spm_id_from=333.1007&amp;search_source=5" target="_blank" data-v-97fd3d78> https://search.bilibili.com/all?vt=75651059&amp;keyword=2024%E5%B9%B4%E4%B8%8D%E7%9C%8B%E5%90%8E%E6%82%94%E7%9A%84Vue3%2B.NET7%2BWebAPI&amp;from_source=webtop_search&amp;spm_id_from=333.1007&amp;search_source=5 </a></div><div data-v-97fd3d78>4.2023全新C#完全零基础入门教程（附源码） <a href="https://www.bilibili.com/read/cv25507935/" target="_blank" data-v-97fd3d78> https://www.bilibili.com/read/cv25507935/ </a></div></div>',2),Ig={__name:"index",setup(e){return j(!1),q.scrollToTop=!0,(t,o)=>(L(),Z(J,null,[Sg,y(q)],64))}},xg=Ce(Ig,[["__scopeId","data-v-97fd3d78"]]),Pg=v("div",null,"【尚硅谷】ES6教程——涵盖ES6-ES11",-1),kg=`
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
`,Eg={__name:"index",setup(e){return q.scrollToTop=!0,(t,o)=>(L(),Z(J,null,[Pg,v("div",{innerHTML:kg}),y(q)],64))}},Lg=e=>($e("data-v-578d3ec3"),e=e(),He(),e),Dg=Lg(()=>v("div",null,"我是DotnetAPI_Angular頁面",-1)),Mg=`
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
  `,Ng={__name:"index",setup(e){return q.scrollToTop=!0,(t,o)=>(L(),Z(J,null,[Dg,v("div",null,[v("div",{innerHTML:Mg})]),y(q)],64))}},Ug=Ce(Ng,[["__scopeId","data-v-578d3ec3"]]),Rg=e=>($e("data-v-e8717692"),e=e(),He(),e),Wg=Rg(()=>v("div",null,"WITS Collge 成就AI⼈才職涯",-1)),$g=`
  <div id="Vue3-rabbit" style="display:flex; justify-content: center; background-color: #282923; font-size: 14px;">
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
`,Hg={__name:"index",setup(e){q.scrollToTop=!0;const t=j({value:"rgba(193,204,204)",btn:!0,theme:"light"});return(o,r)=>(L(),Z(J,null,[v("div",null,[v("div",{class:"demo",onClick:r[0]||(r[0]=s=>o.colorEvent(s,t.value)),style:Vt({backgroundColor:t.value.value})},null,4)]),Wg,v("div",{innerHTML:$g,style:Vt({color:t.value.value})},null,4),y(q)],64))}},Og=Ce(Hg,[["__scopeId","data-v-e8717692"]]),Fg=e=>($e("data-v-eee40638"),e=e(),He(),e),Bg=Fg(()=>v("div",null,"Vue3+.NET7最新框架实战，手写电商管理后台 | 2023全新录制，前后分离架构(C#/.NET6/.NET Core)B1106",-1)),Vg=`
  <div id="Vue3-rabbit" style="display:flex; justify-content: center; background-color: #282923; font-size: 14px;">
    <pre>
	//===============================================================================================//
	<a href="https://www.bilibili.com/video/BV16s4y1m7bd?vd_source=1a5937a80fc962029ba6a7b9ee9a1654&spm_id_from=333.788.videopod.episodes&p=25" target="_blank">
	https://www.bilibili.com/video/BV16s4y1m7bd?vd_source=1a5937a80fc962029ba6a7b9....
	</a>

	1.從零開始新建一個webapi項目，通過swagger查看
	2.配置Log4Net實現日誌紀錄，輸出文本日誌到bin目錄
		a.引入dll程序包 (log4Net, Microsoft.Extensions.Logging.Log4Net.AspNetCore)

		log4net
		Nuget安裝
		Log4Net
		Microsoft.Extensions.Logging.Log4Net.AspNetCore

	b.添加配置文件到項目log4et Config 

	新增資料夾CfgFile
	新增檔案log4net.Config

	<"?xml version="1.0" encoding="utf-8" ?>
	<"log4net>
	<"!-- Define some outpu appenders -->
	<"appender name="DefaultAppender" type="log4net.Appender.RollingFileAppender">
		<"!--<"file value="LogFiles/Root1/"/><"!–存放log路徑–>-->
		<"file value="log4log.txt" />

		<"!-- 追加日誌內容 -->
		<"appendToFile value="true"/>
		
		<"!-- 防止多線程時不能寫Log，官方說線程非安全 -->
		<"lockingModel type="log4net.Appender.FileAppender+MinimalLock" />
		
		<"!-- 可以為:Once|Size|Date|Composite -->
		<"!-- Composite為Size和Date的組合 -->
		<"rollingStyle Composite="Date"/>
		
		<"!-- 當備份文件時，為文件名加的後綴 -->
		<"datePattern value="yyyyMMdd.TXT" />
		<"!--<datePattern value="yyyy-MM-dd.log"/><!–log檔的命名–>-->
		
		<"!-- 日誌最大個數，都是最新的 -->
		<"!-- rollingStyle節點為Size時，只能有value個日誌 -->
		<"!-- rollingStyle節點為Composite時，每天有value個日誌 -->
		<"maxSizeRollBackups value="20" />

		<"!-- 可用的單位:KB|MB|GB -->
		<"maximumFileSize value="3MB" />
		
		<"!-- 置為true，當前最新日誌文件名永遠file節中的名字 -->
		<"staticLogFileName value="true"/>
		
		<"filter type="log4net.Filter.LevelRangeFilter">
			<"param name="LevelMin" value="All" />	
			<"param name="LevelMax" value="FATAL" />	
		<"/filter>

		<"layout type="log4net.Layout.PatternLayout">
			<"!--<"!–內容格式–>-->
			<"conversionPattern value="%date [%thread] %-5level  %logger - %message%newline" />
		<"/layout>
	<"/appender>
	<"appender name="WebAppender" type="log4net.Appender.RollingFileAppender">
		<"!--<!-– 存放log路徑 -–>-->
		<"file value="LogFiles/Web1/"/>
		<"staticLogFileName value="false"/>
		<"appendToFile value="true"/>
		<"rollingStyle value="Composite"/>
		<"maxSizeRollBackups value="-1" />
		<"maximumFileSize value="5KB" />
		<"!--<!–-log檔的命名–>-->
		<"datePattern value="yyyy-MM-dd.log"/>
		<"layout type="log4net.Layout.PatternLayout">
			<"conversionPattern value="%-5p %date{yyyy/MM/dd HH:mm:ss} %-20c{1} %-20M %m%n" />
		<"/layout>
	<"/appender>
	<"root>
		<"level value="ALL"/>
		<"appender-ref ref="DefaultAppender"/>
	<"/root>
		<"logger name="Web">
			<"level value="INFO" />
			<"appender-ref ref="WebAppender"/>
		<"/logger>
	<"/log4net>

	檔案生成路徑：C:/codes/WebAPI/ZhaoxiPotal/WepAPI/WepAPI/bin/Debug/net8.0/log4/log.txt
	//===============================================================================================//

	c.全局配置
		Program.cs加上
		builder.Services.AddSwaggerGen();

		//日誌
		builder.Logging.AddLog4Net("CfgFile/log4net.Config");

	d.構造函數注入日誌服務

	新增UserController.cs
		[Route("[controller]/[Action]")]
		[ApiController]
		public class UserController : ControllerBase
		{
			private readonly ILogger<UserController> _logger;
			public UserController(ILogger<UserController> logger)
			{
				_logger = logger;
			}

			[HttpGet]
			public string Get()
			{
				_logger.LogInformation("這是一個Get請求！");
				return "這是一個Get請求。";
			}
	}

	2024-11-16 20:58:11,007 [1] INFO   Microsoft.Hosting.Lifetime - Now listening on: https://localhost:7079
	2024-11-16 20:58:11,019 [1] INFO   Microsoft.Hosting.Lifetime - Now listening on: http://localhost:5259
	2024-11-16 20:58:11,089 [1] INFO   Microsoft.Hosting.Lifetime - Application started. Press Ctrl+C to shut down.
	2024-11-16 20:58:11,094 [1] INFO   Microsoft.Hosting.Lifetime - Hosting environment: Development
	2024-11-16 20:58:11,098 [1] INFO   Microsoft.Hosting.Lifetime - Content root path: C:/codes/WebAPI/ZhaoxiPotal/WepAPI/WepAPI
	2024-11-16 20:59:01,143 [16] INFO   WepAPI.Controllers.UserController - 這是一個Get請求！



	//===========================================================================================
	3.登入/注冊功能分析，表設計
		登入：QQ、密碼、驗証碼
		注冊：暱稱、QQ、手機、性別、密碼、再次校驗密碼、驗証碼
		設計數據庫：User表


	新建資料表User
	參考Users資料表.sql
	CREATE TABLE [dbo].[Users](
		[Id] [int] NOT NULL,
		[Name] [nvarchar](50) NOT NULL,
		[QQ] [nvarchar](max) NULL,
		[Mobile] [nvarchar](max) NULL,
		[PassWord] [nvarchar](max) NULL,
		[NickName] [nvarchar](20) NULL,
		[RegDate] [datetime2](7) NULL,
		[LoginNum] [int] NULL,
		[LastLoginTime] [datetime2](7) NULL,
		[UserType] [tinyint] NULL,
		[UserSex] [nvarchar](max) NULL,
		[Status] [tinyint] NULL,
		[CreateTime] [datetime2](7) NULL,
		[CreateId] [int] NULL,
		[LastModifyTime] [datetime2](7) NULL,
		[LastModifiedId] [int] NULL,
		CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
	(
  	Id Asc
	)WITH ...
	) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

	//=======================================================================
	4.webapi對接數據庫，實現登入和注冊API接口(使用SqlSugar訪問數據庫)
	a.sql sugar的介紹與使用，訪問數據庫實現登入接口
	b.Automapper的作用和使用
		作用：實體類到dto的映射
		引入程序包：AutuMapper、AutoMapper.Extensions.Microsoft.DependencyInjection
		添加配置類：AutoMapperConfigs，管理映射關係
		//注入配置Automapper映射
		builder.Services.AddAutoMapper(typeof(AutoMapperConfigs));
	c.註冊的接口實現
					
	//=======================================================================
	5.驗證碼功能
	 為什麼要有驗證碼？一定程度上防止機器登錄，爬蟲讀取數據，惡意註冊等。
	 後端實現
	 前端刷新

	//=======================================================================
	6.前端Code展示，開發流程講解
	項目的搭建：
	   1.安裝Node.js，官網安裝最新穩定版即可(https://nodejs.org/en)
		 2.安裝vue腳手架，npm install -g @vue/cli
		 3.通過腳手架創建項目 vue create zhaoxiUI / npm create vite@latest /npm init vue@latest(小兔鮮用的)
		 4.安裝TypeScript vue add typescript
		 5.安裝SCSS npm install sass-loader --save、npm install node-sass --save
		 6.安裝element plus : npm install element-plus --save
		 7.安裝route：npm install vue-route@next --save

		 項目結構講解：
		 node_modules 模塊包
		 public 公共資源
		 src 項目目錄
		 assets 靜態資源
		 components 組件
		 App.vue 根組件
		 main.ts 根函數入口，全局配置生效的地方
		 package.json項目配置文件，項目的版本，模塊的版本等信息

		 結合輪播圖、組件的注冊和使用
		 結合菜單控件，路由的配置和使用

	7.帳號密碼註冊+驗證碼實現登入
	   前後端聯調，打通登錄註冊

	8.綁定JSON數據
	   通過axios讀取json腳本數據，並渲染到頁面

		 npm install axios --save
		 import asiox form "axios"

	9.後端接口權限驗證分析，與JWT實現認證和授權
			
	  JWT, 基於token的鑑權機制
		 不需要到服務端保存用戶的認證信息或者會話信息。
		 流程：
			 1.用戶使用用戶名密碼來請求服務器
			 2.服務器進行驗證用戶的信息
			 3.服務器通過驗證發送給用戶一個token
			 4.客戶端存儲token，並在每次請求時，附送上這個token，附帶在http請求的header裡
			 5.服務端驗證token值, 並返回數據


	10.新建API接口驗證權限，前端獲取token，請求時攜帶
	10.JWT實現認證和授權
	
		引入Microsoft.AspNetCore.Authentication.JwtBear
		搭建認證授權服務

		在ZhanxiPotal.WebAPI
		新增資料夾 Uility
		新增3個檔案
		CustomJWTService.cs
		ICustomJWTService.cs
		JWTTokenOptions.cs

		CustomJWTService.cs
		-------------------------------------------
		using Microsoft.Extensions.Options;
		using Microsoft.IdentityModel.Tokens;
		using System.IdentityModel.Tokens.Jwt;
		using System.Security.Claims;
		using System.Text;
		using ZhaoxiPotal.Model.Entities;

		namespace ZhaoxiPotal.WepAPI.Utility
		{
			public class CustomJWTService : ICustomJWTService
			{
				#region Option注入
				private readonly JWTTokenOptions _JWTTokenOptions;
				public CustomJWTService(IOptionsMonitor<JWTTokenOptions> jwtTokenOptions)
				{
					_JWTTokenOptions = jwtTokenOptions.CurrentValue;
				}

				/// <summary>
				/// 獲取token
				/// </summary>
				/// <param name="users"></param>
				/// <returns></returns>
				/// <exception cref="NotImplementedException"></exception>
				public string GetToken(Users users)
				{
					#region 有效載荷，大家可以自己寫，愛寫多少寫多少，盡量避免敏感信息
					var claims = new[]
					{
						new Claim("Id", users.Id.ToString()),
						new Claim("QQ", users.QQ),
						new Claim("Name", users.Name),
						new Claim("UserType", users.UserType.ToString()),
						new Claim("Mobile", users.Mobile.ToString()),
					};

						//需要加密：需要加密key
						//Nuget引入：Microsoft.IdentityModel.Tokens
						SymmetricSecurityKey key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_JWTTokenOptions.SecurityKey));

						SigningCredentials creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

						//Nuget引入：System.IdentityModel.Token.Jwt
						JwtSecurityToken token = new JwtSecurityToken(
							issuer: _JWTTokenOptions.Issuer,
							audience: _JWTTokenOptions.Audience,
							claims: claims,
							expires: DateTime.Now.AddMinutes(10), //5分鐘有效期
							signingCredentials: creds
						);

						string returnToken = new JwtSecurityTokenHandler().WriteToken(token);
						return returnToken;
						#endregion

					}
				}
		}

		ICustomJWTService.cs
		-----------------------------------------------
		using ZhaoxiPotal.Model.Entities;

		namespace ZhaoxiPotal.WepAPI.Utility
		{
				public interface ICustomJWTService
				{
						//獲取token
						string GetToken(Users users);
				}
		}

		JWTTokenOptions.cs
		-------------------------------------------
		namespace ZhaoxiPotal.WepAPI.Utility
		{
				public class JWTTokenOptions
				{
						public string Audience { set; get; }
						public string SecurityKey { set; get; }
						//public SigningCredentials Credentials {  set; get; }
						public string Issuer { set; get; }
				}
		}

		Program.cs
		//注冊JWT  (在日誌上面)
		builder.Services.Configure<JWTTokenOptions>(builder.Configuration.GetSection("JWTTokenOptions"));
		builder.Services.AddTransient<ICustomJWTService, CustomJWTService>();

		#region jwt校驗
		{
			//第二步，增加鑑權邏輯
			JWTTokenOptions tokenOptions = new JWTTokenOptions();
			builder.Configuration.Bind("JWTTokenOptions", tokenOptions);
			builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)//Scheme
					.AddJwtBearer(options => //這裡是配置的鑑權的邏輯
        	{
            options.TokenValidationParameters = new TokenValidationParameters
            {
                //JWT有一些默認的屬性，就是給鑑權時就可以篩選了
                ValidateIssuer = true, //是否驗證Issuer
                ValidateAudience = true, //是否驗證Audience
                ValidateLifetime = true, //是否驗證失效時間
                ValidateIssuerSigningKey = true, // 是否驗證SecurityKey
                ValidAudience = tokenOptions.Audience, //
                ValidIssuer = tokenOptions.Issuer, // Issuer, 這兩項和前面簽發jwt的設置一致
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(tokenOptions.SecurityKey))//拿到SecurityKey
            };
        });
			}
	//添加跨域策略
	builder.Services.AddCors(options =>
	{
		options.AddPolicy("CorsPolicy", opt=>opt.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod().WithExposedHeaders("X-Pagination"));
	});

	app.UseAuthorization();
	app.UseAuthentication();

	//使用跨域策略
	app.UseCors("CorsPolicy");
	app.MapControllers();
	
	配置	appsettings.json
	--------------------------------------
	"AllowedHosts": "*",
	"JWTTokenOpitons": {
	"Audience": "http://localhost:5088",
	"Issuer": "http://localhost:5088",
	"SecurityKey": "thisisaseritykeythisisaseritykeythisisaseritykeythisisaseritykeythisisaseritykeythisisaseritykeythisisaseritykey"
	}


	
	11.登入接口中，接入JWT，返回Token
	12.新建API接口，標記需要授權
	13.前端獲取token，請求時攜帶，請求資源
			//在header裡攜帶token訪問後端接口
			axios.defaults.headers.common["Authorization"] = "Bearer "+ sessionStorage["token"];
  14.權限測試，更換登入帳號驗證權限

	15.發布和部署


		
    1.ZhaoxiPotal.Common 專案
      Db 資料夾
        DbContext.cs

        using SqlSugar;
        using System;
        using System.Collections.Generic;
        using System.Linq;
        using System.Text;
        using System.Threading.Tasks;

        namespace ZhaoxiPotal.Common.Db
        {
            /// <"summary>
            /// 數據庫連接對象
            /// <"/summary>
            public class DbContext
            {
              public static SqlSugarClient db = new SqlSugarClient(new ConnectionConfig()
              {
                public static SqlSugarClient db = new SqlSugarClient(new ConnectionConfig()
                {
                 ConnectionString = "Data Source=127.0.0.1;Initial Catalog=Web;
                  User ID=Web;Password=123456;MultipleActiveresultSets=True;encrypt=true;
                  trustservercertificate=true", // 連接字符串
                  DbType = DbType.SqlServer, // 數據庫類型
                  IsAutoCloseConnection = true, // 不設成true要手動close
              });
           }
         }

 //---------------------
MemoryHelper.cs
using Microsoft.Extensions.Caching.Memory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ZhaoxiPotal.Common
{
    public class MemoryHelper
    {
        private static IMemoryCache _memoryCache = null;

        static MemoryHelper()
        {
            if(_memoryCache == null)
            {
                _memoryCache = new MemoryCache(new MemoryCacheOptions());
            }
        }

        public static void SetMemory(string key, object value, int expireMins)
        {
            _memoryCache.Set(key, value, TimeSpan.FromMinutes(expireMins));
        }

        public static object GetMemory(string key)
        {
            return _memoryCache.Get(key);
        }
    }
}
//-----------
Tools.cs
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.Security.Policy;

namespace ZhaoxiPotal.Common
{
    public class Tools
    {
        /// <summary>
        /// 生成驗證碼的字符串
        /// </summary>
        /// <returns></returns>
        public static string CreateValidateString()
        {
            //準備一組供驗證碼展示的數據
            string chars = "abcdefghijklmnopqrstuvwxyz";
            Random r = new(DateTime.Now.Millisecond);
            string validateString = "";
            int length = 4;
            for(int i = 0; i < length; i++)
            {
                validateString += chars[r.Next(chars.Length)];
            }
            return validateString;
        }

        public static Byte[] CreateValidateCodeBuffer(string validateCode)
        {
            //bmp -> 位圖
            //1. 創建畫布，設置畫布的長寬
            using Bitmap bitmap = new(200, 60);

            //2. 創建畫筆，告訴畫筆在哪個畫布上畫畫
            Graphics graphics = Graphics.FromImage(bitmap);
            graphics.Clear(Color.White); // 用白色覆蓋畫布，並清除畫上所有的內容

            //回家作業
            //設置字體的參數(設置字體的名稱，大小，粗細以及斜體)
            Font font = new("Consolas", 12, FontStyle.Bold | FontStyle.Italic);
            //通過graphics.MeasureString方法計算字符串的長度
            var size = graphics.MeasureString(validateCode, font);
            //通過長生成新的畫布
            //1.98 Convert.ToInt32(1.98) = 1
            //向上取整：天花板函數；向下取整：地板函數
            using Bitmap bitmapText = new(Convert.ToInt32(Math.Ceiling(size.Width)), Convert.ToInt32(Math.Ceiling(size.Height)));
            //將文字寫入，生成圖片
            Graphics graphicsText = Graphics.FromImage(bitmapText);

            //將圖片縮放放到原畫布上

            //3. 配置畫圖參數
            //3.1 設置顏色刷范圍參數
            Rectangle rf = new(0, 0, bitmap.Width, bitmap.Height);
            //3.2 設置免子的顏色(設置為漸變)
            LinearGradientBrush brush = new(rf, Color.Red, Color.DarkBlue, 1.2f, true);
            //LinearGradientBrush brush = new(rf, Color.Orange, Color.DarkBlue, 0.2f, true);

            //4. 將字符串繪制到場景中
            graphicsText.DrawString(validateCode, font, brush, 0, 0);

            graphics.DrawImage(bitmapText, 10, 10, 190, 50);
            //graphics.DrawImage(bitmapText, 0, 0, 190, 50);
            //5. 將圖片放到緩沖區中
            //5.1 創建一個定於保存圖片的緩沖器
            MemoryStream memoryStream = new();
            //5.2 把圖片保存到緩沖區
            bitmap.Save(memoryStream, ImageFormat.Jpeg);

            //6. 這個時候圖片已經在緩沖區了，bitmap對象自然沒有用了，卸磨殺驢之
            // bitmap.Dispose()
            return memoryStream.ToArray();
        }

    }
}

//============================
ZhaoxiPotal.Model專案
Entities資料夾

Users.cs
using SqlSugar;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ZhaoxiPotal.Model.Entities
{
    public class Users
    {
        [SugarColumn(IsPrimaryKey = true, IsIdentity = true)]
        public Guid Id { get; set; }
        //public int UserId { get; set; }
        public string QQ { get; set; }
        public string Mobile { get; set; }
        public string PassWord { get; set; }
        public string Name { get; set; }
        public string NickName { get; set; }
        public DateTime RegDate { get; set; }
        public int LoginNum { get; set; }
        public DateTime? LastLoginTime { get; set; }
        public byte UserType { get; set; }
        public string UserSex { get; set; }
        public byte Status { get; set; }
        public DateTime CreateTime { get; set; }
        public int CreatorId { get; set; }
        public DateTime? LastModifyTime { get; set; }
        public int? LastModifierId { get; set; }
    }
}
//------------
Enum 資料夾

EnumUserType.cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ZhaoxiPotal.Model.Enum
{
    public enum EnumUserType
    {
        普通用戶 = 1,
        VIP用戶 = 2
    }
}

//-----------------
Courses.cs

namespace ZhaoxiPotal.Model
{
    public class Courses
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Path { get; set; }
        public string ValidCode { get; set; }
        public string Content { get; set; }
    }
}


//=====================
ZhaoxiPotal.Service 專案

Config資料夾
AutoMapperConfigs.cs
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ZhaoxiPotal.Model.Entities;
using ZhaoxiPotal.Service.User.Dto;

namespace ZhaoxiPotal.Service.Config
{
    /// <summary>
    /// 管理映射關系
    /// </summary>
    public class AutoMapperConfigs : Profile
    {
        public AutoMapperConfigs()
        {
            CreateMap<"Users, UserDto>();
            CreateMap<"UserDto, Users>();
            CreateMap<"InputUserDto, Users>();
        }
    }
}

//------
User資料夾
  Dto 資料夾
	  InputUserDto.cs

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ZhaoxiPotal.Service.User.Dto
{
    public class InputUserDto
    {
        public string QQ { get; set; }
        public string Mobile {  get; set; }
        public string PassWord {  get; set; }
        public string Name {  get; set; }
        public string UserSex {  get; set; }
        public string ValidateKey {  get; set; }
        public string ValidateCode {  get; set; }

    }
}

LoginDto.cs

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ZhaoxiPotal.Service.User.Dto
{
    public class LoginDto
    {
        public string QQ { get; set; }
        public string PassWord { get; set; }
    }
}

UserDto.cs

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ZhaoxiPotal.Service.User.Dto
{
    public class UserDto
    {
        public string QQ {  get; set; }
        public string Mobile { get; set; }
        public string NickName {  get; set; }
        public DateTime RegDate { get; set; }
        public DateTime? LastLoginTime { get; set; }
        public byte UserType { get; set; }
        public string UserSex {  get; set; }
        public byte Status {  get; set; }
        public DateTime? CreateTime { get; set; }
    }
}

//-------------
IUserService.cs

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ZhaoxiPotal.Model;
using ZhaoxiPotal.Model.Entities;
using ZhaoxiPotal.Service.User.Dto;

namespace ZhaoxiPotal.Service.User
{
    public interface IUserService
    {
        /// <summary>
        /// 登入
        /// </summary>
        /// <param name="login"></param>
        /// <returns></returns>
        Task<Users> CheckLogin(LoginDto login);

        //註冊

        UserDto AddUser(InputUserDto input);

        /// <summary>
        /// 獲取VIP課程
        /// </summary>
        /// <returns></returns>
        List<Courses> GetCourses();
         
    }
}

UserService.cs
using AutoMapper;
using SqlSugar;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ZhaoxiPotal.Common.Db;
using ZhaoxiPotal.Model;
using ZhaoxiPotal.Model.Entities;
using ZhaoxiPotal.Service.User.Dto;

namespace ZhaoxiPotal.Service.User
{
    
    public class UserService : IUserService
    {
        private readonly IMapper _mapper;
        public UserService(IMapper mapper)
        {
            _mapper = mapper;
        }
        /// <summary>
        /// 登入
        /// </summary>
        /// <param name="login"></param>
        /// <returns></returns>
        public async Task<Users> CheckLogin(LoginDto login)
        {
            return await DbContext.db.Queryable<Users>().FirstAsync(m => m.QQ.Equals(login.QQ) 
							&& m.PassWord.Equals(login.PassWord));
        }

        /// <summary>
        /// 註冊
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        /// <exception cref="Exception"></exception>
        public UserDto AddUser(InputUserDto input)
        {
            Users user = TransInputDto(input);
            if (!DbContext.db.Queryable<Users>().Any(m => m.QQ.Equals(input.QQ) 
							|| m.Mobile.Equals(input.Mobile)))
            {
                DbContext.db.Insertable(user).ExecuteCommand();
                return _mapper.Map<UserDto>(user);
            }
            else throw new Exception("QQ 或者 手機號已存在");
        }
        //public UserDto GetUserDto(int userId)
        //{
        //    var user = DbContext.db.Queryable<Users>().First(p => p.UserId == userId);
        //    var userDto = _mapper.Map<UserDto>(user); 
        //    return userDto;
        //}

        private Users TransInputDto(InputUserDto input)
        {
            var user = _mapper.Map<Users>(input);
            var date = DateTime.Now;
            //user.Id = Guid.NewGuid();
            user.RegDate = date;
            user.CreateTime = date;
            user.LastModifyTime = date;
            user.LoginNum = 0;
            user.UserType = 1;
            user.Status = 1;
            user.CreatorId = 1;
            user.LastModifierId = 1;
            return user;
        }

        public List<Courses> GetCourses()
        {
            List<Courses> res = new List<Courses> ();
            res.Add(new Courses() { Id = 1, Name = "20210327Course001Redis-1", 
						Path = "https://pan.baidu.com/s/12312", ValidCode = "123456", Content = "1" });
            res.Add(new Courses() { Id = 2, Name = "20210327Course001Redis-1", 
						Path = "https://pan.baidu.com/s/12312", ValidCode = "123456", Content = "1" });
            res.Add(new Courses() { Id = 3, Name = "20210327Course001Redis-1", 
						Path = "https://pan.baidu.com/s/12312", ValidCode = "123456", Content = "1" });
            res.Add(new Courses() { Id = 4, Name = "20210327Course001Redis-1", 
						Path = "https://pan.baidu.com/s/12312", ValidCode = "123456", Content = "1" });
            res.Add(new Courses() { Id = 5, Name = "20210327Course001Redis-1", 
						Path = "https://pan.baidu.com/s/12312", ValidCode = "123456", Content = "1" });
            res.Add(new Courses() { Id = 6, Name = "20210327Course001Redis-1", 
						Path = "https://pan.baidu.com/s/12312", ValidCode = "123456", Content = "1" });
            return res;
        }
    }
}





    </pre>
  </div>
`,Gg={__name:"index",setup(e){q.scrollToTop=!0;const t=j("#c1cccc"),o=j({value:"rgba(193,204,204)",btn:!0,theme:"light"});return(r,s)=>(L(),Z(J,null,[v("div",null,[v("div",{class:"demo",onClick:s[0]||(s[0]=i=>r.colorEvent(i,o.value)),style:Vt({backgroundColor:o.value.value})},null,4)]),Bg,Ge(v("input",{"onUpdate:modelValue":s[1]||(s[1]=i=>t.value=i)},null,512),[[at,t.value]]),v("div",{innerHTML:Vg,style:Vt({color:o.value.value})},null,4),y(q)],64))}},jg=Ce(Gg,[["__scopeId","data-v-eee40638"]]),zg=ip({history:Ud("/vue-my-note/"),routes:[{path:"/",component:mp,children:[{path:"",component:xp},{path:"/kaiWebapi2",component:Bp},{path:"/vue3",component:jp},{path:"/download",component:qp},{path:"/others",component:Lf,children:[{path:"/_4_deployVite",component:wa}]},{path:"/dotnet7_vue3",component:Wf,children:[{path:"",component:js},{path:"/_beach_info",component:js},{path:"/addbeach",component:zf},{path:"/beachList",component:Zf},{path:"/editbeach",component:og},{path:"/routerbeach",component:ag},{path:"/confirmDeletePopup",component:pg}]},{path:"/vscode_function",component:_g},{path:"/Naive_ui",component:Tg},{path:"/video",component:xg},{path:"/es6",component:Eg},{path:"/dotnetapi_angular",component:Ug},{path:"/ai",component:Og},{path:"/Vue3+.NET7",component:jg}]}]}),vn=Qc(cp);vn.use(td);vn.use(rd());vn.use(zg);vn.mount("#app");
