var wW=Object.defineProperty;var SW=(l,Z,c)=>Z in l?wW(l,Z,{enumerable:!0,configurable:!0,writable:!0,value:c}):l[Z]=c;var nZ=(l,Z,c)=>SW(l,typeof Z!="symbol"?Z+"":Z,c);(function(){const Z=document.createElement("link").relList;if(Z&&Z.supports&&Z.supports("modulepreload"))return;for(const b of document.querySelectorAll('link[rel="modulepreload"]'))d(b);new MutationObserver(b=>{for(const m of b)if(m.type==="childList")for(const W of m.addedNodes)W.tagName==="LINK"&&W.rel==="modulepreload"&&d(W)}).observe(document,{childList:!0,subtree:!0});function c(b){const m={};return b.integrity&&(m.integrity=b.integrity),b.referrerPolicy&&(m.referrerPolicy=b.referrerPolicy),b.crossOrigin==="use-credentials"?m.credentials="include":b.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function d(b){if(b.ep)return;b.ep=!0;const m=c(b);fetch(b.href,m)}})();/**
* @vue/shared v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function lb(l,Z){const c=new Set(l.split(","));return d=>c.has(d)}const Il={},$Z=[],bZ=()=>{},xW=()=>!1,cd=l=>l.charCodeAt(0)===111&&l.charCodeAt(1)===110&&(l.charCodeAt(2)>122||l.charCodeAt(2)<97),Zb=l=>l.startsWith("onUpdate:"),Cl=Object.assign,cb=(l,Z)=>{const c=l.indexOf(Z);c>-1&&l.splice(c,1)},DW=Object.prototype.hasOwnProperty,tl=(l,Z)=>DW.call(l,Z),v=Array.isArray,lc=l=>dd(l)==="[object Map]",_m=l=>dd(l)==="[object Set]",_=l=>typeof l=="function",el=l=>typeof l=="string",kZ=l=>typeof l=="symbol",pl=l=>l!==null&&typeof l=="object",qm=l=>(pl(l)||_(l))&&_(l.then)&&_(l.catch),$m=Object.prototype.toString,dd=l=>$m.call(l),JW=l=>dd(l).slice(8,-1),l0=l=>dd(l)==="[object Object]",db=l=>el(l)&&l!=="NaN"&&l[0]!=="-"&&""+parseInt(l,10)===l,Yc=lb(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),bd=l=>{const Z=Object.create(null);return c=>Z[c]||(Z[c]=l(c))},jW=/-(\w)/g,uZ=bd(l=>l.replace(jW,(Z,c)=>c?c.toUpperCase():"")),UW=/\B([A-Z])/g,BZ=bd(l=>l.replace(UW,"-$1").toLowerCase()),md=bd(l=>l.charAt(0).toUpperCase()+l.slice(1)),Ld=bd(l=>l?`on${md(l)}`:""),jZ=(l,Z)=>!Object.is(l,Z),Ec=(l,...Z)=>{for(let c=0;c<l.length;c++)l[c](...Z)},Z0=(l,Z,c,d=!1)=>{Object.defineProperty(l,Z,{configurable:!0,enumerable:!1,writable:d,value:c})},kd=l=>{const Z=parseFloat(l);return isNaN(Z)?l:Z},kW=l=>{const Z=el(l)?Number(l):NaN;return isNaN(Z)?l:Z};let jb;const c0=()=>jb||(jb=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Pl(l){if(v(l)){const Z={};for(let c=0;c<l.length;c++){const d=l[c],b=el(d)?gW(d):Pl(d);if(b)for(const m in b)Z[m]=b[m]}return Z}else if(el(l)||pl(l))return l}const CW=/;(?![^(]*\))/g,FW=/:([^]+)/,OW=/\/\*[^]*?\*\//g;function gW(l){const Z={};return l.replace(OW,"").split(CW).forEach(c=>{if(c){const d=c.split(FW);d.length>1&&(Z[d[0].trim()]=d[1].trim())}}),Z}function bb(l){let Z="";if(el(l))Z=l;else if(v(l))for(let c=0;c<l.length;c++){const d=bb(l[c]);d&&(Z+=d+" ")}else if(pl(l))for(const c in l)l[c]&&(Z+=c+" ");return Z.trim()}const KW="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",EW=lb(KW);function d0(l){return!!l||l===""}const b0=l=>!!(l&&l.__v_isRef===!0),fl=l=>el(l)?l:l==null?"":v(l)||pl(l)&&(l.toString===$m||!_(l.toString))?b0(l)?fl(l.value):JSON.stringify(l,m0,2):String(l),m0=(l,Z)=>b0(Z)?m0(l,Z.value):lc(Z)?{[`Map(${Z.size})`]:[...Z.entries()].reduce((c,[d,b],m)=>(c[nd(d,m)+" =>"]=b,c),{})}:_m(Z)?{[`Set(${Z.size})`]:[...Z.values()].map(c=>nd(c))}:kZ(Z)?nd(Z):pl(Z)&&!v(Z)&&!l0(Z)?String(Z):Z,nd=(l,Z="")=>{var c;return kZ(l)?`Symbol(${(c=l.description)!=null?c:Z})`:l};/**
* @vue/reactivity v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let tZ;class W0{constructor(Z=!1){this.detached=Z,this._active=!0,this.effects=[],this.cleanups=[],this.parent=tZ,!Z&&tZ&&(this.index=(tZ.scopes||(tZ.scopes=[])).push(this)-1)}get active(){return this._active}run(Z){if(this._active){const c=tZ;try{return tZ=this,Z()}finally{tZ=c}}}on(){tZ=this}off(){tZ=this.parent}stop(Z){if(this._active){let c,d;for(c=0,d=this.effects.length;c<d;c++)this.effects[c].stop();for(c=0,d=this.cleanups.length;c<d;c++)this.cleanups[c]();if(this.scopes)for(c=0,d=this.scopes.length;c<d;c++)this.scopes[c].stop(!0);if(!this.detached&&this.parent&&!Z){const b=this.parent.scopes.pop();b&&b!==this&&(this.parent.scopes[this.index]=b,b.index=this.index)}this.parent=void 0,this._active=!1}}}function QW(l){return new W0(l)}function HW(l,Z=tZ){Z&&Z.active&&Z.effects.push(l)}function PW(){return tZ}let PZ;class mb{constructor(Z,c,d,b){this.fn=Z,this.trigger=c,this.scheduler=d,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,HW(this,b)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,CZ();for(let Z=0;Z<this._depsLength;Z++){const c=this.deps[Z];if(c.computed&&(vW(c.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),FZ()}return this._dirtyLevel>=4}set dirty(Z){this._dirtyLevel=Z?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let Z=DZ,c=PZ;try{return DZ=!0,PZ=this,this._runnings++,Ub(this),this.fn()}finally{kb(this),this._runnings--,PZ=c,DZ=Z}}stop(){this.active&&(Ub(this),kb(this),this.onStop&&this.onStop(),this.active=!1)}}function vW(l){return l.value}function Ub(l){l._trackId++,l._depsLength=0}function kb(l){if(l.deps.length>l._depsLength){for(let Z=l._depsLength;Z<l.deps.length;Z++)G0(l.deps[Z],l);l.deps.length=l._depsLength}}function G0(l,Z){const c=l.get(Z);c!==void 0&&Z._trackId!==c&&(l.delete(Z),l.size===0&&l.cleanup())}let DZ=!0,Cd=0;const s0=[];function CZ(){s0.push(DZ),DZ=!1}function FZ(){const l=s0.pop();DZ=l===void 0?!0:l}function Wb(){Cd++}function Gb(){for(Cd--;!Cd&&Fd.length;)Fd.shift()()}function t0(l,Z,c){if(Z.get(l)!==l._trackId){Z.set(l,l._trackId);const d=l.deps[l._depsLength];d!==Z?(d&&G0(d,l),l.deps[l._depsLength++]=Z):l._depsLength++}}const Fd=[];function u0(l,Z,c){Wb();for(const d of l.keys()){let b;d._dirtyLevel<Z&&(b??(b=l.get(d)===d._trackId))&&(d._shouldSchedule||(d._shouldSchedule=d._dirtyLevel===0),d._dirtyLevel=Z),d._shouldSchedule&&(b??(b=l.get(d)===d._trackId))&&(d.trigger(),(!d._runnings||d.allowRecurse)&&d._dirtyLevel!==2&&(d._shouldSchedule=!1,d.scheduler&&Fd.push(d.scheduler)))}Gb()}const N0=(l,Z)=>{const c=new Map;return c.cleanup=l,c.computed=Z,c},Od=new WeakMap,vZ=Symbol(""),gd=Symbol("");function _l(l,Z,c){if(DZ&&PZ){let d=Od.get(l);d||Od.set(l,d=new Map);let b=d.get(c);b||d.set(c,b=N0(()=>d.delete(c))),t0(PZ,b)}}function aZ(l,Z,c,d,b,m){const W=Od.get(l);if(!W)return;let G=[];if(Z==="clear")G=[...W.values()];else if(c==="length"&&v(l)){const s=Number(d);W.forEach((u,t)=>{(t==="length"||!kZ(t)&&t>=s)&&G.push(u)})}else switch(c!==void 0&&G.push(W.get(c)),Z){case"add":v(l)?db(c)&&G.push(W.get("length")):(G.push(W.get(vZ)),lc(l)&&G.push(W.get(gd)));break;case"delete":v(l)||(G.push(W.get(vZ)),lc(l)&&G.push(W.get(gd)));break;case"set":lc(l)&&G.push(W.get(vZ));break}Wb();for(const s of G)s&&u0(s,4);Gb()}const rW=lb("__proto__,__v_isRef,__isVue"),i0=new Set(Object.getOwnPropertyNames(Symbol).filter(l=>l!=="arguments"&&l!=="caller").map(l=>Symbol[l]).filter(kZ)),Cb=BW();function BW(){const l={};return["includes","indexOf","lastIndexOf"].forEach(Z=>{l[Z]=function(...c){const d=il(this);for(let m=0,W=this.length;m<W;m++)_l(d,"get",m+"");const b=d[Z](...c);return b===-1||b===!1?d[Z](...c.map(il)):b}}),["push","pop","shift","unshift","splice"].forEach(Z=>{l[Z]=function(...c){CZ(),Wb();const d=il(this)[Z].apply(this,c);return Gb(),FZ(),d}}),l}function AW(l){kZ(l)||(l=String(l));const Z=il(this);return _l(Z,"has",l),Z.hasOwnProperty(l)}class M0{constructor(Z=!1,c=!1){this._isReadonly=Z,this._isShallow=c}get(Z,c,d){const b=this._isReadonly,m=this._isShallow;if(c==="__v_isReactive")return!b;if(c==="__v_isReadonly")return b;if(c==="__v_isShallow")return m;if(c==="__v_raw")return d===(b?m?sG:y0:m?h0:X0).get(Z)||Object.getPrototypeOf(Z)===Object.getPrototypeOf(d)?Z:void 0;const W=v(Z);if(!b){if(W&&tl(Cb,c))return Reflect.get(Cb,c,d);if(c==="hasOwnProperty")return AW}const G=Reflect.get(Z,c,d);return(kZ(c)?i0.has(c):rW(c))||(b||_l(Z,"get",c),m)?G:ol(G)?W&&db(c)?G:G.value:pl(G)?b?T0(G):Sc(G):G}}class Y0 extends M0{constructor(Z=!1){super(!1,Z)}set(Z,c,d,b){let m=Z[c];if(!this._isShallow){const s=rZ(m);if(!mc(d)&&!rZ(d)&&(m=il(m),d=il(d)),!v(Z)&&ol(m)&&!ol(d))return s?!1:(m.value=d,!0)}const W=v(Z)&&db(c)?Number(c)<Z.length:tl(Z,c),G=Reflect.set(Z,c,d,b);return Z===il(b)&&(W?jZ(d,m)&&aZ(Z,"set",c,d):aZ(Z,"add",c,d)),G}deleteProperty(Z,c){const d=tl(Z,c);Z[c];const b=Reflect.deleteProperty(Z,c);return b&&d&&aZ(Z,"delete",c,void 0),b}has(Z,c){const d=Reflect.has(Z,c);return(!kZ(c)||!i0.has(c))&&_l(Z,"has",c),d}ownKeys(Z){return _l(Z,"iterate",v(Z)?"length":vZ),Reflect.ownKeys(Z)}}class fW extends M0{constructor(Z=!1){super(!0,Z)}set(Z,c){return!0}deleteProperty(Z,c){return!0}}const _W=new Y0,qW=new fW,$W=new Y0(!0);const sb=l=>l,Wd=l=>Reflect.getPrototypeOf(l);function Jc(l,Z,c=!1,d=!1){l=l.__v_raw;const b=il(l),m=il(Z);c||(jZ(Z,m)&&_l(b,"get",Z),_l(b,"get",m));const{has:W}=Wd(b),G=d?sb:c?Nb:nc;if(W.call(b,Z))return G(l.get(Z));if(W.call(b,m))return G(l.get(m));l!==b&&l.get(Z)}function jc(l,Z=!1){const c=this.__v_raw,d=il(c),b=il(l);return Z||(jZ(l,b)&&_l(d,"has",l),_l(d,"has",b)),l===b?c.has(l):c.has(l)||c.has(b)}function Uc(l,Z=!1){return l=l.__v_raw,!Z&&_l(il(l),"iterate",vZ),Reflect.get(l,"size",l)}function Fb(l,Z=!1){!Z&&!mc(l)&&!rZ(l)&&(l=il(l));const c=il(this);return Wd(c).has.call(c,l)||(c.add(l),aZ(c,"add",l,l)),this}function Ob(l,Z,c=!1){!c&&!mc(Z)&&!rZ(Z)&&(Z=il(Z));const d=il(this),{has:b,get:m}=Wd(d);let W=b.call(d,l);W||(l=il(l),W=b.call(d,l));const G=m.call(d,l);return d.set(l,Z),W?jZ(Z,G)&&aZ(d,"set",l,Z):aZ(d,"add",l,Z),this}function gb(l){const Z=il(this),{has:c,get:d}=Wd(Z);let b=c.call(Z,l);b||(l=il(l),b=c.call(Z,l)),d&&d.call(Z,l);const m=Z.delete(l);return b&&aZ(Z,"delete",l,void 0),m}function Kb(){const l=il(this),Z=l.size!==0,c=l.clear();return Z&&aZ(l,"clear",void 0,void 0),c}function kc(l,Z){return function(d,b){const m=this,W=m.__v_raw,G=il(W),s=Z?sb:l?Nb:nc;return!l&&_l(G,"iterate",vZ),W.forEach((u,t)=>d.call(b,s(u),s(t),m))}}function Cc(l,Z,c){return function(...d){const b=this.__v_raw,m=il(b),W=lc(m),G=l==="entries"||l===Symbol.iterator&&W,s=l==="keys"&&W,u=b[l](...d),t=c?sb:Z?Nb:nc;return!Z&&_l(m,"iterate",s?gd:vZ),{next(){const{value:i,done:M}=u.next();return M?{value:i,done:M}:{value:G?[t(i[0]),t(i[1])]:t(i),done:M}},[Symbol.iterator](){return this}}}}function pZ(l){return function(...Z){return l==="delete"?!1:l==="clear"?void 0:this}}function lG(){const l={get(m){return Jc(this,m)},get size(){return Uc(this)},has:jc,add:Fb,set:Ob,delete:gb,clear:Kb,forEach:kc(!1,!1)},Z={get(m){return Jc(this,m,!1,!0)},get size(){return Uc(this)},has:jc,add(m){return Fb.call(this,m,!0)},set(m,W){return Ob.call(this,m,W,!0)},delete:gb,clear:Kb,forEach:kc(!1,!0)},c={get(m){return Jc(this,m,!0)},get size(){return Uc(this,!0)},has(m){return jc.call(this,m,!0)},add:pZ("add"),set:pZ("set"),delete:pZ("delete"),clear:pZ("clear"),forEach:kc(!0,!1)},d={get(m){return Jc(this,m,!0,!0)},get size(){return Uc(this,!0)},has(m){return jc.call(this,m,!0)},add:pZ("add"),set:pZ("set"),delete:pZ("delete"),clear:pZ("clear"),forEach:kc(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(m=>{l[m]=Cc(m,!1,!1),c[m]=Cc(m,!0,!1),Z[m]=Cc(m,!1,!0),d[m]=Cc(m,!0,!0)}),[l,c,Z,d]}const[ZG,cG,dG,bG]=lG();function tb(l,Z){const c=Z?l?bG:dG:l?cG:ZG;return(d,b,m)=>b==="__v_isReactive"?!l:b==="__v_isReadonly"?l:b==="__v_raw"?d:Reflect.get(tl(c,b)&&b in d?c:d,b,m)}const mG={get:tb(!1,!1)},WG={get:tb(!1,!0)},GG={get:tb(!0,!1)};const X0=new WeakMap,h0=new WeakMap,y0=new WeakMap,sG=new WeakMap;function tG(l){switch(l){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function uG(l){return l.__v_skip||!Object.isExtensible(l)?0:tG(JW(l))}function Sc(l){return rZ(l)?l:ub(l,!1,_W,mG,X0)}function a0(l){return ub(l,!1,$W,WG,h0)}function T0(l){return ub(l,!0,qW,GG,y0)}function ub(l,Z,c,d,b){if(!pl(l)||l.__v_raw&&!(Z&&l.__v_isReactive))return l;const m=b.get(l);if(m)return m;const W=uG(l);if(W===0)return l;const G=new Proxy(l,W===2?d:c);return b.set(l,G),G}function Xc(l){return rZ(l)?Xc(l.__v_raw):!!(l&&l.__v_isReactive)}function rZ(l){return!!(l&&l.__v_isReadonly)}function mc(l){return!!(l&&l.__v_isShallow)}function V0(l){return l?!!l.__v_raw:!1}function il(l){const Z=l&&l.__v_raw;return Z?il(Z):l}function L0(l){return Object.isExtensible(l)&&Z0(l,"__v_skip",!0),l}const nc=l=>pl(l)?Sc(l):l,Nb=l=>pl(l)?T0(l):l;class n0{constructor(Z,c,d,b){this.getter=Z,this._setter=c,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new mb(()=>Z(this._value),()=>Qc(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!b,this.__v_isReadonly=d}get value(){const Z=il(this);return(!Z._cacheable||Z.effect.dirty)&&jZ(Z._value,Z._value=Z.effect.run())&&Qc(Z,4),p0(Z),Z.effect._dirtyLevel>=2&&Qc(Z,2),Z._value}set value(Z){this._setter(Z)}get _dirty(){return this.effect.dirty}set _dirty(Z){this.effect.dirty=Z}}function NG(l,Z,c=!1){let d,b;const m=_(l);return m?(d=l,b=bZ):(d=l.get,b=l.set),new n0(d,b,m||!b,c)}function p0(l){var Z;DZ&&PZ&&(l=il(l),t0(PZ,(Z=l.dep)!=null?Z:l.dep=N0(()=>l.dep=void 0,l instanceof n0?l:void 0)))}function Qc(l,Z=4,c,d){l=il(l);const b=l.dep;b&&u0(b,Z)}function ol(l){return!!(l&&l.__v_isRef===!0)}function D(l){return I0(l,!1)}function iG(l){return I0(l,!0)}function I0(l,Z){return ol(l)?l:new MG(l,Z)}class MG{constructor(Z,c){this.__v_isShallow=c,this.dep=void 0,this.__v_isRef=!0,this._rawValue=c?Z:il(Z),this._value=c?Z:nc(Z)}get value(){return p0(this),this._value}set value(Z){const c=this.__v_isShallow||mc(Z)||rZ(Z);Z=c?Z:il(Z),jZ(Z,this._rawValue)&&(this._rawValue,this._rawValue=Z,this._value=c?Z:nc(Z),Qc(this,4))}}function ll(l){return ol(l)?l.value:l}const YG={get:(l,Z,c)=>ll(Reflect.get(l,Z,c)),set:(l,Z,c,d)=>{const b=l[Z];return ol(b)&&!ol(c)?(b.value=c,!0):Reflect.set(l,Z,c,d)}};function z0(l){return Xc(l)?l:new Proxy(l,YG)}/**
* @vue/runtime-core v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function JZ(l,Z,c,d){try{return d?l(...d):l()}catch(b){Gd(b,Z,c)}}function mZ(l,Z,c,d){if(_(l)){const b=JZ(l,Z,c,d);return b&&qm(b)&&b.catch(m=>{Gd(m,Z,c)}),b}if(v(l)){const b=[];for(let m=0;m<l.length;m++)b.push(mZ(l[m],Z,c,d));return b}}function Gd(l,Z,c,d=!0){const b=Z?Z.vnode:null;if(Z){let m=Z.parent;const W=Z.proxy,G=`https://vuejs.org/error-reference/#runtime-${c}`;for(;m;){const u=m.ec;if(u){for(let t=0;t<u.length;t++)if(u[t](l,W,G)===!1)return}m=m.parent}const s=Z.appContext.config.errorHandler;if(s){CZ(),JZ(s,null,10,[l,W,G]),FZ();return}}XG(l,c,b,d)}function XG(l,Z,c,d=!0){console.error(l)}let pc=!1,Kd=!1;const El=[];let XZ=0;const Zc=[];let eZ=null,QZ=0;const o0=Promise.resolve();let ib=null;function AZ(l){const Z=ib||o0;return l?Z.then(this?l.bind(this):l):Z}function hG(l){let Z=XZ+1,c=El.length;for(;Z<c;){const d=Z+c>>>1,b=El[d],m=Ic(b);m<l||m===l&&b.pre?Z=d+1:c=d}return Z}function Mb(l){(!El.length||!El.includes(l,pc&&l.allowRecurse?XZ+1:XZ))&&(l.id==null?El.push(l):El.splice(hG(l.id),0,l),e0())}function e0(){!pc&&!Kd&&(Kd=!0,ib=o0.then(w0))}function yG(l){const Z=El.indexOf(l);Z>XZ&&El.splice(Z,1)}function aG(l){v(l)?Zc.push(...l):(!eZ||!eZ.includes(l,l.allowRecurse?QZ+1:QZ))&&Zc.push(l),e0()}function Eb(l,Z,c=pc?XZ+1:0){for(;c<El.length;c++){const d=El[c];if(d&&d.pre){if(l&&d.id!==l.uid)continue;El.splice(c,1),c--,d()}}}function R0(l){if(Zc.length){const Z=[...new Set(Zc)].sort((c,d)=>Ic(c)-Ic(d));if(Zc.length=0,eZ){eZ.push(...Z);return}for(eZ=Z,QZ=0;QZ<eZ.length;QZ++){const c=eZ[QZ];c.active!==!1&&c()}eZ=null,QZ=0}}const Ic=l=>l.id==null?1/0:l.id,TG=(l,Z)=>{const c=Ic(l)-Ic(Z);if(c===0){if(l.pre&&!Z.pre)return-1;if(Z.pre&&!l.pre)return 1}return c};function w0(l){Kd=!1,pc=!0,El.sort(TG);try{for(XZ=0;XZ<El.length;XZ++){const Z=El[XZ];Z&&Z.active!==!1&&JZ(Z,Z.i,Z.i?15:14)}}finally{XZ=0,El.length=0,R0(),pc=!1,ib=null,(El.length||Zc.length)&&w0()}}let kl=null,sd=null;function Bc(l){const Z=kl;return kl=l,sd=l&&l.type.__scopeId||null,Z}function xl(l){sd=l}function Dl(){sd=null}function cl(l,Z=kl,c){if(!Z||l._n)return l;const d=(...b)=>{d._d&&lm(-1);const m=Bc(Z);let W;try{W=l(...b)}finally{Bc(m),d._d&&lm(1)}return W};return d._n=!0,d._c=!0,d._d=!0,d}function Ul(l,Z){if(kl===null)return l;const c=Xd(kl),d=l.dirs||(l.dirs=[]);for(let b=0;b<Z.length;b++){let[m,W,G,s=Il]=Z[b];m&&(_(m)&&(m={mounted:m,updated:m}),m.deep&&xZ(W),d.push({dir:m,instance:c,value:W,oldValue:void 0,arg:G,modifiers:s}))}return l}function OZ(l,Z,c,d){const b=l.dirs,m=Z&&Z.dirs;for(let W=0;W<b.length;W++){const G=b[W];m&&(G.oldValue=m[W].value);let s=G.dir[d];s&&(CZ(),mZ(s,c,8,[l.el,G,l,Z]),FZ())}}const RZ=Symbol("_leaveCb"),Fc=Symbol("_enterCb");function VG(){const l={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return sc(()=>{l.isMounted=!0}),k0(()=>{l.isUnmounting=!0}),l}const ZZ=[Function,Array],S0={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ZZ,onEnter:ZZ,onAfterEnter:ZZ,onEnterCancelled:ZZ,onBeforeLeave:ZZ,onLeave:ZZ,onAfterLeave:ZZ,onLeaveCancelled:ZZ,onBeforeAppear:ZZ,onAppear:ZZ,onAfterAppear:ZZ,onAppearCancelled:ZZ},x0=l=>{const Z=l.subTree;return Z.component?x0(Z.component):Z},LG={name:"BaseTransition",props:S0,setup(l,{slots:Z}){const c=WW(),d=VG();return()=>{const b=Z.default&&J0(Z.default(),!0);if(!b||!b.length)return;let m=b[0];if(b.length>1){for(const M of b)if(M.type!==Al){m=M;break}}const W=il(l),{mode:G}=W;if(d.isLeaving)return pd(m);const s=Qb(m);if(!s)return pd(m);let u=Ed(s,W,d,c,M=>u=M);Ac(s,u);const t=c.subTree,i=t&&Qb(t);if(i&&i.type!==Al&&!HZ(s,i)&&x0(c).type!==Al){const M=Ed(i,W,d,c);if(Ac(i,M),G==="out-in"&&s.type!==Al)return d.isLeaving=!0,M.afterLeave=()=>{d.isLeaving=!1,c.update.active!==!1&&(c.effect.dirty=!0,c.update())},pd(m);G==="in-out"&&s.type!==Al&&(M.delayLeave=(X,p,o)=>{const F=D0(d,i);F[String(i.key)]=i,X[RZ]=()=>{p(),X[RZ]=void 0,delete u.delayedLeave},u.delayedLeave=o})}return m}}},nG=LG;function D0(l,Z){const{leavingVNodes:c}=l;let d=c.get(Z.type);return d||(d=Object.create(null),c.set(Z.type,d)),d}function Ed(l,Z,c,d,b){const{appear:m,mode:W,persisted:G=!1,onBeforeEnter:s,onEnter:u,onAfterEnter:t,onEnterCancelled:i,onBeforeLeave:M,onLeave:X,onAfterLeave:p,onLeaveCancelled:o,onBeforeAppear:F,onAppear:j,onAfterAppear:k,onAppearCancelled:U}=Z,$=String(l.key),dl=D0(c,l),g=(P,bl)=>{P&&mZ(P,d,9,bl)},Zl=(P,bl)=>{const Gl=bl[1];g(P,bl),v(P)?P.every(O=>O.length<=1)&&Gl():P.length<=1&&Gl()},Yl={mode:W,persisted:G,beforeEnter(P){let bl=s;if(!c.isMounted)if(m)bl=F||s;else return;P[RZ]&&P[RZ](!0);const Gl=dl[$];Gl&&HZ(l,Gl)&&Gl.el[RZ]&&Gl.el[RZ](),g(bl,[P])},enter(P){let bl=u,Gl=t,O=i;if(!c.isMounted)if(m)bl=j||u,Gl=k||t,O=U||i;else return;let sl=!1;const Rl=P[Fc]=gl=>{sl||(sl=!0,gl?g(O,[P]):g(Gl,[P]),Yl.delayedLeave&&Yl.delayedLeave(),P[Fc]=void 0)};bl?Zl(bl,[P,Rl]):Rl()},leave(P,bl){const Gl=String(l.key);if(P[Fc]&&P[Fc](!0),c.isUnmounting)return bl();g(M,[P]);let O=!1;const sl=P[RZ]=Rl=>{O||(O=!0,bl(),Rl?g(o,[P]):g(p,[P]),P[RZ]=void 0,dl[Gl]===l&&delete dl[Gl])};dl[Gl]=l,X?Zl(X,[P,sl]):sl()},clone(P){const bl=Ed(P,Z,c,d,b);return b&&b(bl),bl}};return Yl}function pd(l){if(td(l))return l=UZ(l),l.children=null,l}function Qb(l){if(!td(l))return l;const{shapeFlag:Z,children:c}=l;if(c){if(Z&16)return c[0];if(Z&32&&_(c.default))return c.default()}}function Ac(l,Z){l.shapeFlag&6&&l.component?Ac(l.component.subTree,Z):l.shapeFlag&128?(l.ssContent.transition=Z.clone(l.ssContent),l.ssFallback.transition=Z.clone(l.ssFallback)):l.transition=Z}function J0(l,Z=!1,c){let d=[],b=0;for(let m=0;m<l.length;m++){let W=l[m];const G=c==null?W.key:String(c)+String(W.key!=null?W.key:m);W.type===A?(W.patchFlag&128&&b++,d=d.concat(J0(W.children,Z,G))):(Z||W.type!==Al)&&d.push(G!=null?UZ(W,{key:G}):W)}if(b>1)for(let m=0;m<d.length;m++)d[m].patchFlag=-2;return d}/*! #__NO_SIDE_EFFECTS__ */function WZ(l,Z){return _(l)?Cl({name:l.name},Z,{setup:l}):l}const hc=l=>!!l.type.__asyncLoader,td=l=>l.type.__isKeepAlive;function pG(l,Z){j0(l,"a",Z)}function IG(l,Z){j0(l,"da",Z)}function j0(l,Z,c=Fl){const d=l.__wdc||(l.__wdc=()=>{let b=c;for(;b;){if(b.isDeactivated)return;b=b.parent}return l()});if(ud(Z,d,c),c){let b=c.parent;for(;b&&b.parent;)td(b.parent.vnode)&&zG(d,Z,c,b),b=b.parent}}function zG(l,Z,c,d){const b=ud(Z,l,d,!0);Yb(()=>{cb(d[Z],b)},c)}function ud(l,Z,c=Fl,d=!1){if(c){const b=c[l]||(c[l]=[]),m=Z.__weh||(Z.__weh=(...W)=>{CZ();const G=Dc(c),s=mZ(Z,c,l,W);return G(),FZ(),s});return d?b.unshift(m):b.push(m),m}}const VZ=l=>(Z,c=Fl)=>{(!Yd||l==="sp")&&ud(l,(...d)=>Z(...d),c)},U0=VZ("bm"),sc=VZ("m"),oG=VZ("bu"),eG=VZ("u"),k0=VZ("bum"),Yb=VZ("um"),RG=VZ("sp"),wG=VZ("rtg"),SG=VZ("rtc");function xG(l,Z=Fl){ud("ec",l,Z)}const Xb="components";function Bl(l,Z){return F0(Xb,l,!0,Z)||l}const C0=Symbol.for("v-ndc");function DG(l){return el(l)?F0(Xb,l,!1)||l:l||C0}function F0(l,Z,c=!0,d=!1){const b=kl||Fl;if(b){const m=b.type;if(l===Xb){const G=Is(m,!1);if(G&&(G===Z||G===uZ(Z)||G===md(uZ(Z))))return m}const W=Hb(b[l]||m[l],Z)||Hb(b.appContext[l],Z);return!W&&d?m:W}}function Hb(l,Z){return l&&(l[Z]||l[uZ(Z)]||l[md(uZ(Z))])}function O0(l,Z,c,d){let b;const m=c;if(v(l)||el(l)){b=new Array(l.length);for(let W=0,G=l.length;W<G;W++)b[W]=Z(l[W],W,void 0,m)}else if(typeof l=="number"){b=new Array(l);for(let W=0;W<l;W++)b[W]=Z(W+1,W,void 0,m)}else if(pl(l))if(l[Symbol.iterator])b=Array.from(l,(W,G)=>Z(W,G,void 0,m));else{const W=Object.keys(l);b=new Array(W.length);for(let G=0,s=W.length;G<s;G++){const u=W[G];b[G]=Z(l[u],u,G,m)}}else b=[];return b}function cc(l,Z,c={},d,b){if(kl.isCE||kl.parent&&hc(kl.parent)&&kl.parent.isCE)return Z!=="default"&&(c.name=Z),y("slot",c,d&&d());let m=l[Z];m&&m._c&&(m._d=!1),e();const W=m&&g0(m(c)),G=yl(A,{key:(c.key||W&&W.key||`_${Z}`)+(!W&&d?"_fb":"")},W||(d?d():[]),W&&l._===1?64:-2);return G.scopeId&&(G.slotScopeIds=[G.scopeId+"-s"]),m&&m._c&&(m._d=!0),G}function g0(l){return l.some(Z=>_c(Z)?!(Z.type===Al||Z.type===A&&!g0(Z.children)):!0)?l:null}const Qd=l=>l?GW(l)?Xd(l):Qd(l.parent):null,yc=Cl(Object.create(null),{$:l=>l,$el:l=>l.vnode.el,$data:l=>l.data,$props:l=>l.props,$attrs:l=>l.attrs,$slots:l=>l.slots,$refs:l=>l.refs,$parent:l=>Qd(l.parent),$root:l=>Qd(l.root),$emit:l=>l.emit,$options:l=>hb(l),$forceUpdate:l=>l.f||(l.f=()=>{l.effect.dirty=!0,Mb(l.update)}),$nextTick:l=>l.n||(l.n=AZ.bind(l.proxy)),$watch:l=>ms.bind(l)}),Id=(l,Z)=>l!==Il&&!l.__isScriptSetup&&tl(l,Z),JG={get({_:l},Z){if(Z==="__v_skip")return!0;const{ctx:c,setupState:d,data:b,props:m,accessCache:W,type:G,appContext:s}=l;let u;if(Z[0]!=="$"){const X=W[Z];if(X!==void 0)switch(X){case 1:return d[Z];case 2:return b[Z];case 4:return c[Z];case 3:return m[Z]}else{if(Id(d,Z))return W[Z]=1,d[Z];if(b!==Il&&tl(b,Z))return W[Z]=2,b[Z];if((u=l.propsOptions[0])&&tl(u,Z))return W[Z]=3,m[Z];if(c!==Il&&tl(c,Z))return W[Z]=4,c[Z];Hd&&(W[Z]=0)}}const t=yc[Z];let i,M;if(t)return Z==="$attrs"&&_l(l.attrs,"get",""),t(l);if((i=G.__cssModules)&&(i=i[Z]))return i;if(c!==Il&&tl(c,Z))return W[Z]=4,c[Z];if(M=s.config.globalProperties,tl(M,Z))return M[Z]},set({_:l},Z,c){const{data:d,setupState:b,ctx:m}=l;return Id(b,Z)?(b[Z]=c,!0):d!==Il&&tl(d,Z)?(d[Z]=c,!0):tl(l.props,Z)||Z[0]==="$"&&Z.slice(1)in l?!1:(m[Z]=c,!0)},has({_:{data:l,setupState:Z,accessCache:c,ctx:d,appContext:b,propsOptions:m}},W){let G;return!!c[W]||l!==Il&&tl(l,W)||Id(Z,W)||(G=m[0])&&tl(G,W)||tl(d,W)||tl(yc,W)||tl(b.config.globalProperties,W)},defineProperty(l,Z,c){return c.get!=null?l._.accessCache[Z]=0:tl(c,"value")&&this.set(l,Z,c.value,null),Reflect.defineProperty(l,Z,c)}};function jG(){return UG().slots}function UG(){const l=WW();return l.setupContext||(l.setupContext=tW(l))}function Pb(l){return v(l)?l.reduce((Z,c)=>(Z[c]=null,Z),{}):l}let Hd=!0;function kG(l){const Z=hb(l),c=l.proxy,d=l.ctx;Hd=!1,Z.beforeCreate&&vb(Z.beforeCreate,l,"bc");const{data:b,computed:m,methods:W,watch:G,provide:s,inject:u,created:t,beforeMount:i,mounted:M,beforeUpdate:X,updated:p,activated:o,deactivated:F,beforeDestroy:j,beforeUnmount:k,destroyed:U,unmounted:$,render:dl,renderTracked:g,renderTriggered:Zl,errorCaptured:Yl,serverPrefetch:P,expose:bl,inheritAttrs:Gl,components:O,directives:sl,filters:Rl}=Z;if(u&&CG(u,d,null),W)for(const ul in W){const Nl=W[ul];_(Nl)&&(d[ul]=Nl.bind(c))}if(b){const ul=b.call(c,c);pl(ul)&&(l.data=Sc(ul))}if(Hd=!0,m)for(const ul in m){const Nl=m[ul],GZ=_(Nl)?Nl.bind(c,c):_(Nl.get)?Nl.get.bind(c,c):bZ,ql=!_(Nl)&&_(Nl.set)?Nl.set.bind(c):bZ,f=Sl({get:GZ,set:ql});Object.defineProperty(d,ul,{enumerable:!0,configurable:!0,get:()=>f.value,set:Wl=>f.value=Wl})}if(G)for(const ul in G)K0(G[ul],d,c,ul);if(s){const ul=_(s)?s.call(c):s;Reflect.ownKeys(ul).forEach(Nl=>{Hc(Nl,ul[Nl])})}t&&vb(t,l,"c");function Vl(ul,Nl){v(Nl)?Nl.forEach(GZ=>ul(GZ.bind(c))):Nl&&ul(Nl.bind(c))}if(Vl(U0,i),Vl(sc,M),Vl(oG,X),Vl(eG,p),Vl(pG,o),Vl(IG,F),Vl(xG,Yl),Vl(SG,g),Vl(wG,Zl),Vl(k0,k),Vl(Yb,$),Vl(RG,P),v(bl))if(bl.length){const ul=l.exposed||(l.exposed={});bl.forEach(Nl=>{Object.defineProperty(ul,Nl,{get:()=>c[Nl],set:GZ=>c[Nl]=GZ})})}else l.exposed||(l.exposed={});dl&&l.render===bZ&&(l.render=dl),Gl!=null&&(l.inheritAttrs=Gl),O&&(l.components=O),sl&&(l.directives=sl)}function CG(l,Z,c=bZ){v(l)&&(l=Pd(l));for(const d in l){const b=l[d];let m;pl(b)?"default"in b?m=TZ(b.from||d,b.default,!0):m=TZ(b.from||d):m=TZ(b),ol(m)?Object.defineProperty(Z,d,{enumerable:!0,configurable:!0,get:()=>m.value,set:W=>m.value=W}):Z[d]=m}}function vb(l,Z,c){mZ(v(l)?l.map(d=>d.bind(Z.proxy)):l.bind(Z.proxy),Z,c)}function K0(l,Z,c,d){const b=d.includes(".")?cW(c,d):()=>c[d];if(el(l)){const m=Z[l];_(m)&&Jl(b,m)}else if(_(l))Jl(b,l.bind(c));else if(pl(l))if(v(l))l.forEach(m=>K0(m,Z,c,d));else{const m=_(l.handler)?l.handler.bind(c):Z[l.handler];_(m)&&Jl(b,m,l)}}function hb(l){const Z=l.type,{mixins:c,extends:d}=Z,{mixins:b,optionsCache:m,config:{optionMergeStrategies:W}}=l.appContext,G=m.get(Z);let s;return G?s=G:!b.length&&!c&&!d?s=Z:(s={},b.length&&b.forEach(u=>fc(s,u,W,!0)),fc(s,Z,W)),pl(Z)&&m.set(Z,s),s}function fc(l,Z,c,d=!1){const{mixins:b,extends:m}=Z;m&&fc(l,m,c,!0),b&&b.forEach(W=>fc(l,W,c,!0));for(const W in Z)if(!(d&&W==="expose")){const G=FG[W]||c&&c[W];l[W]=G?G(l[W],Z[W]):Z[W]}return l}const FG={data:rb,props:Bb,emits:Bb,methods:Mc,computed:Mc,beforeCreate:Hl,created:Hl,beforeMount:Hl,mounted:Hl,beforeUpdate:Hl,updated:Hl,beforeDestroy:Hl,beforeUnmount:Hl,destroyed:Hl,unmounted:Hl,activated:Hl,deactivated:Hl,errorCaptured:Hl,serverPrefetch:Hl,components:Mc,directives:Mc,watch:gG,provide:rb,inject:OG};function rb(l,Z){return Z?l?function(){return Cl(_(l)?l.call(this,this):l,_(Z)?Z.call(this,this):Z)}:Z:l}function OG(l,Z){return Mc(Pd(l),Pd(Z))}function Pd(l){if(v(l)){const Z={};for(let c=0;c<l.length;c++)Z[l[c]]=l[c];return Z}return l}function Hl(l,Z){return l?[...new Set([].concat(l,Z))]:Z}function Mc(l,Z){return l?Cl(Object.create(null),l,Z):Z}function Bb(l,Z){return l?v(l)&&v(Z)?[...new Set([...l,...Z])]:Cl(Object.create(null),Pb(l),Pb(Z??{})):Z}function gG(l,Z){if(!l)return Z;if(!Z)return l;const c=Cl(Object.create(null),l);for(const d in Z)c[d]=Hl(l[d],Z[d]);return c}function E0(){return{app:null,config:{isNativeTag:xW,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let KG=0;function EG(l,Z){return function(d,b=null){_(d)||(d=Cl({},d)),b!=null&&!pl(b)&&(b=null);const m=E0(),W=new WeakSet;let G=!1;const s=m.app={_uid:KG++,_component:d,_props:b,_container:null,_context:m,_instance:null,version:os,get config(){return m.config},set config(u){},use(u,...t){return W.has(u)||(u&&_(u.install)?(W.add(u),u.install(s,...t)):_(u)&&(W.add(u),u(s,...t))),s},mixin(u){return m.mixins.includes(u)||m.mixins.push(u),s},component(u,t){return t?(m.components[u]=t,s):m.components[u]},directive(u,t){return t?(m.directives[u]=t,s):m.directives[u]},mount(u,t,i){if(!G){const M=y(d,b);return M.appContext=m,i===!0?i="svg":i===!1&&(i=void 0),t&&Z?Z(M,u):l(M,u,i),G=!0,s._container=u,u.__vue_app__=s,Xd(M.component)}},unmount(){G&&(l(null,s._container),delete s._container.__vue_app__)},provide(u,t){return m.provides[u]=t,s},runWithContext(u){const t=dc;dc=s;try{return u()}finally{dc=t}}};return s}}let dc=null;function Hc(l,Z){if(Fl){let c=Fl.provides;const d=Fl.parent&&Fl.parent.provides;d===c&&(c=Fl.provides=Object.create(d)),c[l]=Z}}function TZ(l,Z,c=!1){const d=Fl||kl;if(d||dc){const b=dc?dc._context.provides:d?d.parent==null?d.vnode.appContext&&d.vnode.appContext.provides:d.parent.provides:void 0;if(b&&l in b)return b[l];if(arguments.length>1)return c&&_(Z)?Z.call(d&&d.proxy):Z}}const Q0={},H0=()=>Object.create(Q0),P0=l=>Object.getPrototypeOf(l)===Q0;function QG(l,Z,c,d=!1){const b={},m=H0();l.propsDefaults=Object.create(null),v0(l,Z,b,m);for(const W in l.propsOptions[0])W in b||(b[W]=void 0);c?l.props=d?b:a0(b):l.type.props?l.props=b:l.props=m,l.attrs=m}function HG(l,Z,c,d){const{props:b,attrs:m,vnode:{patchFlag:W}}=l,G=il(b),[s]=l.propsOptions;let u=!1;if((d||W>0)&&!(W&16)){if(W&8){const t=l.vnode.dynamicProps;for(let i=0;i<t.length;i++){let M=t[i];if(id(l.emitsOptions,M))continue;const X=Z[M];if(s)if(tl(m,M))X!==m[M]&&(m[M]=X,u=!0);else{const p=uZ(M);b[p]=vd(s,G,p,X,l,!1)}else X!==m[M]&&(m[M]=X,u=!0)}}}else{v0(l,Z,b,m)&&(u=!0);let t;for(const i in G)(!Z||!tl(Z,i)&&((t=BZ(i))===i||!tl(Z,t)))&&(s?c&&(c[i]!==void 0||c[t]!==void 0)&&(b[i]=vd(s,G,i,void 0,l,!0)):delete b[i]);if(m!==G)for(const i in m)(!Z||!tl(Z,i))&&(delete m[i],u=!0)}u&&aZ(l.attrs,"set","")}function v0(l,Z,c,d){const[b,m]=l.propsOptions;let W=!1,G;if(Z)for(let s in Z){if(Yc(s))continue;const u=Z[s];let t;b&&tl(b,t=uZ(s))?!m||!m.includes(t)?c[t]=u:(G||(G={}))[t]=u:id(l.emitsOptions,s)||(!(s in d)||u!==d[s])&&(d[s]=u,W=!0)}if(m){const s=il(c),u=G||Il;for(let t=0;t<m.length;t++){const i=m[t];c[i]=vd(b,s,i,u[i],l,!tl(u,i))}}return W}function vd(l,Z,c,d,b,m){const W=l[c];if(W!=null){const G=tl(W,"default");if(G&&d===void 0){const s=W.default;if(W.type!==Function&&!W.skipFactory&&_(s)){const{propsDefaults:u}=b;if(c in u)d=u[c];else{const t=Dc(b);d=u[c]=s.call(null,Z),t()}}else d=s}W[0]&&(m&&!G?d=!1:W[1]&&(d===""||d===BZ(c))&&(d=!0))}return d}const PG=new WeakMap;function r0(l,Z,c=!1){const d=c?PG:Z.propsCache,b=d.get(l);if(b)return b;const m=l.props,W={},G=[];let s=!1;if(!_(l)){const t=i=>{s=!0;const[M,X]=r0(i,Z,!0);Cl(W,M),X&&G.push(...X)};!c&&Z.mixins.length&&Z.mixins.forEach(t),l.extends&&t(l.extends),l.mixins&&l.mixins.forEach(t)}if(!m&&!s)return pl(l)&&d.set(l,$Z),$Z;if(v(m))for(let t=0;t<m.length;t++){const i=uZ(m[t]);Ab(i)&&(W[i]=Il)}else if(m)for(const t in m){const i=uZ(t);if(Ab(i)){const M=m[t],X=W[i]=v(M)||_(M)?{type:M}:Cl({},M),p=X.type;let o=!1,F=!0;if(v(p))for(let j=0;j<p.length;++j){const k=p[j],U=_(k)&&k.name;if(U==="Boolean"){o=!0;break}else U==="String"&&(F=!1)}else o=_(p)&&p.name==="Boolean";X[0]=o,X[1]=F,(o||tl(X,"default"))&&G.push(i)}}const u=[W,G];return pl(l)&&d.set(l,u),u}function Ab(l){return l[0]!=="$"&&!Yc(l)}const B0=l=>l[0]==="_"||l==="$stable",yb=l=>v(l)?l.map(YZ):[YZ(l)],vG=(l,Z,c)=>{if(Z._n)return Z;const d=cl((...b)=>yb(Z(...b)),c);return d._c=!1,d},A0=(l,Z,c)=>{const d=l._ctx;for(const b in l){if(B0(b))continue;const m=l[b];if(_(m))Z[b]=vG(b,m,d);else if(m!=null){const W=yb(m);Z[b]=()=>W}}},f0=(l,Z)=>{const c=yb(Z);l.slots.default=()=>c},_0=(l,Z,c)=>{for(const d in Z)(c||d!=="_")&&(l[d]=Z[d])},rG=(l,Z,c)=>{const d=l.slots=H0();if(l.vnode.shapeFlag&32){const b=Z._;b?(_0(d,Z,c),c&&Z0(d,"_",b,!0)):A0(Z,d)}else Z&&f0(l,Z)},BG=(l,Z,c)=>{const{vnode:d,slots:b}=l;let m=!0,W=Il;if(d.shapeFlag&32){const G=Z._;G?c&&G===1?m=!1:_0(b,Z,c):(m=!Z.$stable,A0(Z,b)),W=Z}else Z&&(f0(l,Z),W={default:1});if(m)for(const G in b)!B0(G)&&W[G]==null&&delete b[G]};function rd(l,Z,c,d,b=!1){if(v(l)){l.forEach((M,X)=>rd(M,Z&&(v(Z)?Z[X]:Z),c,d,b));return}if(hc(d)&&!b)return;const m=d.shapeFlag&4?Xd(d.component):d.el,W=b?null:m,{i:G,r:s}=l,u=Z&&Z.r,t=G.refs===Il?G.refs={}:G.refs,i=G.setupState;if(u!=null&&u!==s&&(el(u)?(t[u]=null,tl(i,u)&&(i[u]=null)):ol(u)&&(u.value=null)),_(s))JZ(s,G,12,[W,t]);else{const M=el(s),X=ol(s);if(M||X){const p=()=>{if(l.f){const o=M?tl(i,s)?i[s]:t[s]:s.value;b?v(o)&&cb(o,m):v(o)?o.includes(m)||o.push(m):M?(t[s]=[m],tl(i,s)&&(i[s]=t[s])):(s.value=[m],l.k&&(t[l.k]=s.value))}else M?(t[s]=W,tl(i,s)&&(i[s]=W)):X&&(s.value=W,l.k&&(t[l.k]=W))};W?(p.id=-1,rl(p,c)):p()}}}const q0=Symbol("_vte"),AG=l=>l.__isTeleport,ac=l=>l&&(l.disabled||l.disabled===""),fb=l=>typeof SVGElement<"u"&&l instanceof SVGElement,_b=l=>typeof MathMLElement=="function"&&l instanceof MathMLElement,Bd=(l,Z)=>{const c=l&&l.to;return el(c)?Z?Z(c):null:c},fG={name:"Teleport",__isTeleport:!0,process(l,Z,c,d,b,m,W,G,s,u){const{mc:t,pc:i,pbc:M,o:{insert:X,querySelector:p,createText:o,createComment:F}}=u,j=ac(Z.props);let{shapeFlag:k,children:U,dynamicChildren:$}=Z;if(l==null){const dl=Z.el=o(""),g=Z.anchor=o("");X(dl,c,d),X(g,c,d);const Zl=Z.target=Bd(Z.props,p),Yl=lW(Zl,Z,o,X);Zl&&(W==="svg"||fb(Zl)?W="svg":(W==="mathml"||_b(Zl))&&(W="mathml"));const P=(bl,Gl)=>{k&16&&t(U,bl,Gl,b,m,W,G,s)};j?P(c,g):Zl&&P(Zl,Yl)}else{Z.el=l.el,Z.targetStart=l.targetStart;const dl=Z.anchor=l.anchor,g=Z.target=l.target,Zl=Z.targetAnchor=l.targetAnchor,Yl=ac(l.props),P=Yl?c:g,bl=Yl?dl:Zl;if(W==="svg"||fb(g)?W="svg":(W==="mathml"||_b(g))&&(W="mathml"),$?(M(l.dynamicChildren,$,P,b,m,W,G),ab(l,Z,!0)):s||i(l,Z,P,bl,b,m,W,G,!1),j)Yl?Z.props&&l.props&&Z.props.to!==l.props.to&&(Z.props.to=l.props.to):Oc(Z,c,dl,u,1);else if((Z.props&&Z.props.to)!==(l.props&&l.props.to)){const Gl=Z.target=Bd(Z.props,p);Gl&&Oc(Z,Gl,null,u,0)}else Yl&&Oc(Z,g,Zl,u,1)}$0(Z)},remove(l,Z,c,{um:d,o:{remove:b}},m){const{shapeFlag:W,children:G,anchor:s,targetStart:u,targetAnchor:t,target:i,props:M}=l;if(i&&(b(u),b(t)),m&&b(s),W&16){const X=m||!ac(M);for(let p=0;p<G.length;p++){const o=G[p];d(o,Z,c,X,!!o.dynamicChildren)}}},move:Oc,hydrate:_G};function Oc(l,Z,c,{o:{insert:d},m:b},m=2){m===0&&d(l.targetAnchor,Z,c);const{el:W,anchor:G,shapeFlag:s,children:u,props:t}=l,i=m===2;if(i&&d(W,Z,c),(!i||ac(t))&&s&16)for(let M=0;M<u.length;M++)b(u[M],Z,c,2);i&&d(G,Z,c)}function _G(l,Z,c,d,b,m,{o:{nextSibling:W,parentNode:G,querySelector:s,insert:u,createText:t}},i){const M=Z.target=Bd(Z.props,s);if(M){const X=M._lpa||M.firstChild;if(Z.shapeFlag&16)if(ac(Z.props))Z.anchor=i(W(l),Z,G(l),c,d,b,m),Z.targetStart=X,Z.targetAnchor=X&&W(X);else{Z.anchor=W(l);let p=X;for(;p;){if(p&&p.nodeType===8){if(p.data==="teleport start anchor")Z.targetStart=p;else if(p.data==="teleport anchor"){Z.targetAnchor=p,M._lpa=Z.targetAnchor&&W(Z.targetAnchor);break}}p=W(p)}Z.targetAnchor||lW(M,Z,t,u),i(X&&W(X),Z,M,c,d,b,m)}$0(Z)}return Z.anchor&&W(Z.anchor)}const qG=fG;function $0(l){const Z=l.ctx;if(Z&&Z.ut){let c=l.children[0].el;for(;c&&c!==l.targetAnchor;)c.nodeType===1&&c.setAttribute("data-v-owner",Z.uid),c=c.nextSibling;Z.ut()}}function lW(l,Z,c,d){const b=Z.targetStart=c(""),m=Z.targetAnchor=c("");return b[q0]=m,l&&(d(b,l),d(m,l)),m}const rl=Ms;function $G(l){return ls(l)}function ls(l,Z){const c=c0();c.__VUE__=!0;const{insert:d,remove:b,patchProp:m,createElement:W,createText:G,createComment:s,setText:u,setElementText:t,parentNode:i,nextSibling:M,setScopeId:X=bZ,insertStaticContent:p}=l,o=(N,Y,a,L=null,V=null,z=null,x=void 0,R=null,w=!!Y.dynamicChildren)=>{if(N===Y)return;N&&!HZ(N,Y)&&(L=T(N),Wl(N,V,z,!0),N=null),Y.patchFlag===-2&&(w=!1,Y.dynamicChildren=null);const{type:I,ref:C,shapeFlag:H}=Y;switch(I){case Md:F(N,Y,a,L);break;case Al:j(N,Y,a,L);break;case Pc:N==null&&k(Y,a,L,x);break;case A:O(N,Y,a,L,V,z,x,R,w);break;default:H&1?dl(N,Y,a,L,V,z,x,R,w):H&6?sl(N,Y,a,L,V,z,x,R,w):(H&64||H&128)&&I.process(N,Y,a,L,V,z,x,R,w,K)}C!=null&&V&&rd(C,N&&N.ref,z,Y||N,!Y)},F=(N,Y,a,L)=>{if(N==null)d(Y.el=G(Y.children),a,L);else{const V=Y.el=N.el;Y.children!==N.children&&u(V,Y.children)}},j=(N,Y,a,L)=>{N==null?d(Y.el=s(Y.children||""),a,L):Y.el=N.el},k=(N,Y,a,L)=>{[N.el,N.anchor]=p(N.children,Y,a,L,N.el,N.anchor)},U=({el:N,anchor:Y},a,L)=>{let V;for(;N&&N!==Y;)V=M(N),d(N,a,L),N=V;d(Y,a,L)},$=({el:N,anchor:Y})=>{let a;for(;N&&N!==Y;)a=M(N),b(N),N=a;b(Y)},dl=(N,Y,a,L,V,z,x,R,w)=>{Y.type==="svg"?x="svg":Y.type==="math"&&(x="mathml"),N==null?g(Y,a,L,V,z,x,R,w):P(N,Y,V,z,x,R,w)},g=(N,Y,a,L,V,z,x,R)=>{let w,I;const{props:C,shapeFlag:H,transition:E,dirs:q}=N;if(w=N.el=W(N.type,z,C&&C.is,C),H&8?t(w,N.children):H&16&&Yl(N.children,w,null,L,V,zd(N,z),x,R),q&&OZ(N,null,L,"created"),Zl(w,N,N.scopeId,x,L),C){for(const nl in C)nl!=="value"&&!Yc(nl)&&m(w,nl,null,C[nl],z,L);"value"in C&&m(w,"value",null,C.value,z),(I=C.onVnodeBeforeMount)&&MZ(I,L,N)}q&&OZ(N,null,L,"beforeMount");const ml=Zs(V,E);ml&&E.beforeEnter(w),d(w,Y,a),((I=C&&C.onVnodeMounted)||ml||q)&&rl(()=>{I&&MZ(I,L,N),ml&&E.enter(w),q&&OZ(N,null,L,"mounted")},V)},Zl=(N,Y,a,L,V)=>{if(a&&X(N,a),L)for(let z=0;z<L.length;z++)X(N,L[z]);if(V){let z=V.subTree;if(Y===z){const x=V.vnode;Zl(N,x,x.scopeId,x.slotScopeIds,V.parent)}}},Yl=(N,Y,a,L,V,z,x,R,w=0)=>{for(let I=w;I<N.length;I++){const C=N[I]=R?wZ(N[I]):YZ(N[I]);o(null,C,Y,a,L,V,z,x,R)}},P=(N,Y,a,L,V,z,x)=>{const R=Y.el=N.el;let{patchFlag:w,dynamicChildren:I,dirs:C}=Y;w|=N.patchFlag&16;const H=N.props||Il,E=Y.props||Il;let q;if(a&&gZ(a,!1),(q=E.onVnodeBeforeUpdate)&&MZ(q,a,Y,N),C&&OZ(Y,N,a,"beforeUpdate"),a&&gZ(a,!0),(H.innerHTML&&E.innerHTML==null||H.textContent&&E.textContent==null)&&t(R,""),I?bl(N.dynamicChildren,I,R,a,L,zd(Y,V),z):x||Nl(N,Y,R,null,a,L,zd(Y,V),z,!1),w>0){if(w&16)Gl(R,H,E,a,V);else if(w&2&&H.class!==E.class&&m(R,"class",null,E.class,V),w&4&&m(R,"style",H.style,E.style,V),w&8){const ml=Y.dynamicProps;for(let nl=0;nl<ml.length;nl++){const Ml=ml[nl],jl=H[Ml],sZ=E[Ml];(sZ!==jl||Ml==="value")&&m(R,Ml,jl,sZ,V,a)}}w&1&&N.children!==Y.children&&t(R,Y.children)}else!x&&I==null&&Gl(R,H,E,a,V);((q=E.onVnodeUpdated)||C)&&rl(()=>{q&&MZ(q,a,Y,N),C&&OZ(Y,N,a,"updated")},L)},bl=(N,Y,a,L,V,z,x)=>{for(let R=0;R<Y.length;R++){const w=N[R],I=Y[R],C=w.el&&(w.type===A||!HZ(w,I)||w.shapeFlag&70)?i(w.el):a;o(w,I,C,null,L,V,z,x,!0)}},Gl=(N,Y,a,L,V)=>{if(Y!==a){if(Y!==Il)for(const z in Y)!Yc(z)&&!(z in a)&&m(N,z,Y[z],null,V,L);for(const z in a){if(Yc(z))continue;const x=a[z],R=Y[z];x!==R&&z!=="value"&&m(N,z,R,x,V,L)}"value"in a&&m(N,"value",Y.value,a.value,V)}},O=(N,Y,a,L,V,z,x,R,w)=>{const I=Y.el=N?N.el:G(""),C=Y.anchor=N?N.anchor:G("");let{patchFlag:H,dynamicChildren:E,slotScopeIds:q}=Y;q&&(R=R?R.concat(q):q),N==null?(d(I,a,L),d(C,a,L),Yl(Y.children||[],a,C,V,z,x,R,w)):H>0&&H&64&&E&&N.dynamicChildren?(bl(N.dynamicChildren,E,a,V,z,x,R),(Y.key!=null||V&&Y===V.subTree)&&ab(N,Y,!0)):Nl(N,Y,a,C,V,z,x,R,w)},sl=(N,Y,a,L,V,z,x,R,w)=>{Y.slotScopeIds=R,N==null?Y.shapeFlag&512?V.ctx.activate(Y,a,L,x,w):Rl(Y,a,L,V,z,x,w):gl(N,Y,w)},Rl=(N,Y,a,L,V,z,x)=>{const R=N.component=Vs(N,L,V);if(td(N)&&(R.ctx.renderer=K),Ls(R,!1,x),R.asyncDep){if(V&&V.registerDep(R,Vl,x),!N.el){const w=R.subTree=y(Al);j(null,w,Y,a)}}else Vl(R,N,Y,a,V,z,x)},gl=(N,Y,a)=>{const L=Y.component=N.component;if(us(N,Y,a))if(L.asyncDep&&!L.asyncResolved){ul(L,Y,a);return}else L.next=Y,yG(L.update),L.effect.dirty=!0,L.update();else Y.el=N.el,L.vnode=Y},Vl=(N,Y,a,L,V,z,x)=>{const R=()=>{if(N.isMounted){let{next:C,bu:H,u:E,parent:q,vnode:ml}=N;{const fZ=ZW(N);if(fZ){C&&(C.el=ml.el,ul(N,C,x)),fZ.asyncDep.then(()=>{N.isUnmounted||R()});return}}let nl=C,Ml;gZ(N,!1),C?(C.el=ml.el,ul(N,C,x)):C=ml,H&&Ec(H),(Ml=C.props&&C.props.onVnodeBeforeUpdate)&&MZ(Ml,q,C,ml),gZ(N,!0);const jl=od(N),sZ=N.subTree;N.subTree=jl,o(sZ,jl,i(sZ.el),T(sZ),N,V,z),C.el=jl.el,nl===null&&Ns(N,jl.el),E&&rl(E,V),(Ml=C.props&&C.props.onVnodeUpdated)&&rl(()=>MZ(Ml,q,C,ml),V)}else{let C;const{el:H,props:E}=Y,{bm:q,m:ml,parent:nl}=N,Ml=hc(Y);if(gZ(N,!1),q&&Ec(q),!Ml&&(C=E&&E.onVnodeBeforeMount)&&MZ(C,nl,Y),gZ(N,!0),H&&zl){const jl=()=>{N.subTree=od(N),zl(H,N.subTree,N,V,null)};Ml?Y.type.__asyncLoader().then(()=>!N.isUnmounted&&jl()):jl()}else{const jl=N.subTree=od(N);o(null,jl,a,L,N,V,z),Y.el=jl.el}if(ml&&rl(ml,V),!Ml&&(C=E&&E.onVnodeMounted)){const jl=Y;rl(()=>MZ(C,nl,jl),V)}(Y.shapeFlag&256||nl&&hc(nl.vnode)&&nl.vnode.shapeFlag&256)&&N.a&&rl(N.a,V),N.isMounted=!0,Y=a=L=null}},w=N.effect=new mb(R,bZ,()=>Mb(I),N.scope),I=N.update=()=>{w.dirty&&w.run()};I.i=N,I.id=N.uid,gZ(N,!0),I()},ul=(N,Y,a)=>{Y.component=N;const L=N.vnode.props;N.vnode=Y,N.next=null,HG(N,Y.props,L,a),BG(N,Y.children,a),CZ(),Eb(N),FZ()},Nl=(N,Y,a,L,V,z,x,R,w=!1)=>{const I=N&&N.children,C=N?N.shapeFlag:0,H=Y.children,{patchFlag:E,shapeFlag:q}=Y;if(E>0){if(E&128){ql(I,H,a,L,V,z,x,R,w);return}else if(E&256){GZ(I,H,a,L,V,z,x,R,w);return}}q&8?(C&16&&wl(I,V,z),H!==I&&t(a,H)):C&16?q&16?ql(I,H,a,L,V,z,x,R,w):wl(I,V,z,!0):(C&8&&t(a,""),q&16&&Yl(H,a,L,V,z,x,R,w))},GZ=(N,Y,a,L,V,z,x,R,w)=>{N=N||$Z,Y=Y||$Z;const I=N.length,C=Y.length,H=Math.min(I,C);let E;for(E=0;E<H;E++){const q=Y[E]=w?wZ(Y[E]):YZ(Y[E]);o(N[E],q,a,null,V,z,x,R,w)}I>C?wl(N,V,z,!0,!1,H):Yl(Y,a,L,V,z,x,R,w,H)},ql=(N,Y,a,L,V,z,x,R,w)=>{let I=0;const C=Y.length;let H=N.length-1,E=C-1;for(;I<=H&&I<=E;){const q=N[I],ml=Y[I]=w?wZ(Y[I]):YZ(Y[I]);if(HZ(q,ml))o(q,ml,a,null,V,z,x,R,w);else break;I++}for(;I<=H&&I<=E;){const q=N[H],ml=Y[E]=w?wZ(Y[E]):YZ(Y[E]);if(HZ(q,ml))o(q,ml,a,null,V,z,x,R,w);else break;H--,E--}if(I>H){if(I<=E){const q=E+1,ml=q<C?Y[q].el:L;for(;I<=E;)o(null,Y[I]=w?wZ(Y[I]):YZ(Y[I]),a,ml,V,z,x,R,w),I++}}else if(I>E)for(;I<=H;)Wl(N[I],V,z,!0),I++;else{const q=I,ml=I,nl=new Map;for(I=ml;I<=E;I++){const $l=Y[I]=w?wZ(Y[I]):YZ(Y[I]);$l.key!=null&&nl.set($l.key,I)}let Ml,jl=0;const sZ=E-ml+1;let fZ=!1,xb=0;const tc=new Array(sZ);for(I=0;I<sZ;I++)tc[I]=0;for(I=q;I<=H;I++){const $l=N[I];if(jl>=sZ){Wl($l,V,z,!0);continue}let iZ;if($l.key!=null)iZ=nl.get($l.key);else for(Ml=ml;Ml<=E;Ml++)if(tc[Ml-ml]===0&&HZ($l,Y[Ml])){iZ=Ml;break}iZ===void 0?Wl($l,V,z,!0):(tc[iZ-ml]=I+1,iZ>=xb?xb=iZ:fZ=!0,o($l,Y[iZ],a,null,V,z,x,R,w),jl++)}const Db=fZ?cs(tc):$Z;for(Ml=Db.length-1,I=sZ-1;I>=0;I--){const $l=ml+I,iZ=Y[$l],Jb=$l+1<C?Y[$l+1].el:L;tc[I]===0?o(null,iZ,a,Jb,V,z,x,R,w):fZ&&(Ml<0||I!==Db[Ml]?f(iZ,a,Jb,2):Ml--)}}},f=(N,Y,a,L,V=null)=>{const{el:z,type:x,transition:R,children:w,shapeFlag:I}=N;if(I&6){f(N.component.subTree,Y,a,L);return}if(I&128){N.suspense.move(Y,a,L);return}if(I&64){x.move(N,Y,a,K);return}if(x===A){d(z,Y,a);for(let H=0;H<w.length;H++)f(w[H],Y,a,L);d(N.anchor,Y,a);return}if(x===Pc){U(N,Y,a);return}if(L!==2&&I&1&&R)if(L===0)R.beforeEnter(z),d(z,Y,a),rl(()=>R.enter(z),V);else{const{leave:H,delayLeave:E,afterLeave:q}=R,ml=()=>d(z,Y,a),nl=()=>{H(z,()=>{ml(),q&&q()})};E?E(z,ml,nl):nl()}else d(z,Y,a)},Wl=(N,Y,a,L=!1,V=!1)=>{const{type:z,props:x,ref:R,children:w,dynamicChildren:I,shapeFlag:C,patchFlag:H,dirs:E,cacheIndex:q}=N;if(H===-2&&(V=!1),R!=null&&rd(R,null,a,N,!0),q!=null&&(Y.renderCache[q]=void 0),C&256){Y.ctx.deactivate(N);return}const ml=C&1&&E,nl=!hc(N);let Ml;if(nl&&(Ml=x&&x.onVnodeBeforeUnmount)&&MZ(Ml,Y,N),C&6)Ql(N.component,a,L);else{if(C&128){N.suspense.unmount(a,L);return}ml&&OZ(N,null,Y,"beforeUnmount"),C&64?N.type.remove(N,Y,a,K,L):I&&!I.hasOnce&&(z!==A||H>0&&H&64)?wl(I,Y,a,!1,!0):(z===A&&H&384||!V&&C&16)&&wl(w,Y,a),L&&Ll(N)}(nl&&(Ml=x&&x.onVnodeUnmounted)||ml)&&rl(()=>{Ml&&MZ(Ml,Y,N),ml&&OZ(N,null,Y,"unmounted")},a)},Ll=N=>{const{type:Y,el:a,anchor:L,transition:V}=N;if(Y===A){al(a,L);return}if(Y===Pc){$(N);return}const z=()=>{b(a),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(N.shapeFlag&1&&V&&!V.persisted){const{leave:x,delayLeave:R}=V,w=()=>x(a,z);R?R(N.el,z,w):w()}else z()},al=(N,Y)=>{let a;for(;N!==Y;)a=M(N),b(N),N=a;b(Y)},Ql=(N,Y,a)=>{const{bum:L,scope:V,update:z,subTree:x,um:R,m:w,a:I}=N;qb(w),qb(I),L&&Ec(L),V.stop(),z&&(z.active=!1,Wl(x,N,Y,a)),R&&rl(R,Y),rl(()=>{N.isUnmounted=!0},Y),Y&&Y.pendingBranch&&!Y.isUnmounted&&N.asyncDep&&!N.asyncResolved&&N.suspenseId===Y.pendingId&&(Y.deps--,Y.deps===0&&Y.resolve())},wl=(N,Y,a,L=!1,V=!1,z=0)=>{for(let x=z;x<N.length;x++)Wl(N[x],Y,a,L,V)},T=N=>{if(N.shapeFlag&6)return T(N.component.subTree);if(N.shapeFlag&128)return N.suspense.next();const Y=M(N.anchor||N.el),a=Y&&Y[q0];return a?M(a):Y};let S=!1;const J=(N,Y,a)=>{N==null?Y._vnode&&Wl(Y._vnode,null,null,!0):o(Y._vnode||null,N,Y,null,null,null,a),Y._vnode=N,S||(S=!0,Eb(),R0(),S=!1)},K={p:o,um:Wl,m:f,r:Ll,mt:Rl,mc:Yl,pc:Nl,pbc:bl,n:T,o:l};let Xl,zl;return{render:J,hydrate:Xl,createApp:EG(J,Xl)}}function zd({type:l,props:Z},c){return c==="svg"&&l==="foreignObject"||c==="mathml"&&l==="annotation-xml"&&Z&&Z.encoding&&Z.encoding.includes("html")?void 0:c}function gZ({effect:l,update:Z},c){l.allowRecurse=Z.allowRecurse=c}function Zs(l,Z){return(!l||l&&!l.pendingBranch)&&Z&&!Z.persisted}function ab(l,Z,c=!1){const d=l.children,b=Z.children;if(v(d)&&v(b))for(let m=0;m<d.length;m++){const W=d[m];let G=b[m];G.shapeFlag&1&&!G.dynamicChildren&&((G.patchFlag<=0||G.patchFlag===32)&&(G=b[m]=wZ(b[m]),G.el=W.el),!c&&G.patchFlag!==-2&&ab(W,G)),G.type===Md&&(G.el=W.el)}}function cs(l){const Z=l.slice(),c=[0];let d,b,m,W,G;const s=l.length;for(d=0;d<s;d++){const u=l[d];if(u!==0){if(b=c[c.length-1],l[b]<u){Z[d]=b,c.push(d);continue}for(m=0,W=c.length-1;m<W;)G=m+W>>1,l[c[G]]<u?m=G+1:W=G;u<l[c[m]]&&(m>0&&(Z[d]=c[m-1]),c[m]=d)}}for(m=c.length,W=c[m-1];m-- >0;)c[m]=W,W=Z[W];return c}function ZW(l){const Z=l.subTree.component;if(Z)return Z.asyncDep&&!Z.asyncResolved?Z:ZW(Z)}function qb(l){if(l)for(let Z=0;Z<l.length;Z++)l[Z].active=!1}const ds=Symbol.for("v-scx"),bs=()=>TZ(ds);function Nd(l,Z){return Tb(l,null,Z)}const gc={};function Jl(l,Z,c){return Tb(l,Z,c)}function Tb(l,Z,{immediate:c,deep:d,flush:b,once:m,onTrack:W,onTrigger:G}=Il){if(Z&&m){const g=Z;Z=(...Zl)=>{g(...Zl),dl()}}const s=Fl,u=g=>d===!0?g:xZ(g,d===!1?1:void 0);let t,i=!1,M=!1;if(ol(l)?(t=()=>l.value,i=mc(l)):Xc(l)?(t=()=>u(l),i=!0):v(l)?(M=!0,i=l.some(g=>Xc(g)||mc(g)),t=()=>l.map(g=>{if(ol(g))return g.value;if(Xc(g))return u(g);if(_(g))return JZ(g,s,2)})):_(l)?Z?t=()=>JZ(l,s,2):t=()=>(X&&X(),mZ(l,s,3,[p])):t=bZ,Z&&d){const g=t;t=()=>xZ(g())}let X,p=g=>{X=U.onStop=()=>{JZ(g,s,4),X=U.onStop=void 0}},o;if(Yd)if(p=bZ,Z?c&&mZ(Z,s,3,[t(),M?[]:void 0,p]):t(),b==="sync"){const g=bs();o=g.__watcherHandles||(g.__watcherHandles=[])}else return bZ;let F=M?new Array(l.length).fill(gc):gc;const j=()=>{if(!(!U.active||!U.dirty))if(Z){const g=U.run();(d||i||(M?g.some((Zl,Yl)=>jZ(Zl,F[Yl])):jZ(g,F)))&&(X&&X(),mZ(Z,s,3,[g,F===gc?void 0:M&&F[0]===gc?[]:F,p]),F=g)}else U.run()};j.allowRecurse=!!Z;let k;b==="sync"?k=j:b==="post"?k=()=>rl(j,s&&s.suspense):(j.pre=!0,s&&(j.id=s.uid),k=()=>Mb(j));const U=new mb(t,bZ,k),$=PW(),dl=()=>{U.stop(),$&&cb($.effects,U)};return Z?c?j():F=U.run():b==="post"?rl(U.run.bind(U),s&&s.suspense):U.run(),o&&o.push(dl),dl}function ms(l,Z,c){const d=this.proxy,b=el(l)?l.includes(".")?cW(d,l):()=>d[l]:l.bind(d,d);let m;_(Z)?m=Z:(m=Z.handler,c=Z);const W=Dc(this),G=Tb(b,m.bind(d),c);return W(),G}function cW(l,Z){const c=Z.split(".");return()=>{let d=l;for(let b=0;b<c.length&&d;b++)d=d[c[b]];return d}}function xZ(l,Z=1/0,c){if(Z<=0||!pl(l)||l.__v_skip||(c=c||new Set,c.has(l)))return l;if(c.add(l),Z--,ol(l))xZ(l.value,Z,c);else if(v(l))for(let d=0;d<l.length;d++)xZ(l[d],Z,c);else if(_m(l)||lc(l))l.forEach(d=>{xZ(d,Z,c)});else if(l0(l)){for(const d in l)xZ(l[d],Z,c);for(const d of Object.getOwnPropertySymbols(l))Object.prototype.propertyIsEnumerable.call(l,d)&&xZ(l[d],Z,c)}return l}const Ws=(l,Z)=>Z==="modelValue"||Z==="model-value"?l.modelModifiers:l[`${Z}Modifiers`]||l[`${uZ(Z)}Modifiers`]||l[`${BZ(Z)}Modifiers`];function Gs(l,Z,...c){if(l.isUnmounted)return;const d=l.vnode.props||Il;let b=c;const m=Z.startsWith("update:"),W=m&&Ws(d,Z.slice(7));W&&(W.trim&&(b=c.map(t=>el(t)?t.trim():t)),W.number&&(b=c.map(kd)));let G,s=d[G=Ld(Z)]||d[G=Ld(uZ(Z))];!s&&m&&(s=d[G=Ld(BZ(Z))]),s&&mZ(s,l,6,b);const u=d[G+"Once"];if(u){if(!l.emitted)l.emitted={};else if(l.emitted[G])return;l.emitted[G]=!0,mZ(u,l,6,b)}}function dW(l,Z,c=!1){const d=Z.emitsCache,b=d.get(l);if(b!==void 0)return b;const m=l.emits;let W={},G=!1;if(!_(l)){const s=u=>{const t=dW(u,Z,!0);t&&(G=!0,Cl(W,t))};!c&&Z.mixins.length&&Z.mixins.forEach(s),l.extends&&s(l.extends),l.mixins&&l.mixins.forEach(s)}return!m&&!G?(pl(l)&&d.set(l,null),null):(v(m)?m.forEach(s=>W[s]=null):Cl(W,m),pl(l)&&d.set(l,W),W)}function id(l,Z){return!l||!cd(Z)?!1:(Z=Z.slice(2).replace(/Once$/,""),tl(l,Z[0].toLowerCase()+Z.slice(1))||tl(l,BZ(Z))||tl(l,Z))}function od(l){const{type:Z,vnode:c,proxy:d,withProxy:b,propsOptions:[m],slots:W,attrs:G,emit:s,render:u,renderCache:t,props:i,data:M,setupState:X,ctx:p,inheritAttrs:o}=l,F=Bc(l);let j,k;try{if(c.shapeFlag&4){const $=b||d,dl=$;j=YZ(u.call(dl,$,t,i,X,M,p)),k=G}else{const $=Z;j=YZ($.length>1?$(i,{attrs:G,slots:W,emit:s}):$(i,null)),k=Z.props?G:ss(G)}}catch($){Tc.length=0,Gd($,l,1),j=y(Al)}let U=j;if(k&&o!==!1){const $=Object.keys(k),{shapeFlag:dl}=U;$.length&&dl&7&&(m&&$.some(Zb)&&(k=ts(k,m)),U=UZ(U,k,!1,!0))}return c.dirs&&(U=UZ(U,null,!1,!0),U.dirs=U.dirs?U.dirs.concat(c.dirs):c.dirs),c.transition&&(U.transition=c.transition),j=U,Bc(F),j}const ss=l=>{let Z;for(const c in l)(c==="class"||c==="style"||cd(c))&&((Z||(Z={}))[c]=l[c]);return Z},ts=(l,Z)=>{const c={};for(const d in l)(!Zb(d)||!(d.slice(9)in Z))&&(c[d]=l[d]);return c};function us(l,Z,c){const{props:d,children:b,component:m}=l,{props:W,children:G,patchFlag:s}=Z,u=m.emitsOptions;if(Z.dirs||Z.transition)return!0;if(c&&s>=0){if(s&1024)return!0;if(s&16)return d?$b(d,W,u):!!W;if(s&8){const t=Z.dynamicProps;for(let i=0;i<t.length;i++){const M=t[i];if(W[M]!==d[M]&&!id(u,M))return!0}}}else return(b||G)&&(!G||!G.$stable)?!0:d===W?!1:d?W?$b(d,W,u):!0:!!W;return!1}function $b(l,Z,c){const d=Object.keys(Z);if(d.length!==Object.keys(l).length)return!0;for(let b=0;b<d.length;b++){const m=d[b];if(Z[m]!==l[m]&&!id(c,m))return!0}return!1}function Ns({vnode:l,parent:Z},c){for(;Z;){const d=Z.subTree;if(d.suspense&&d.suspense.activeBranch===l&&(d.el=l.el),d===l)(l=Z.vnode).el=c,Z=Z.parent;else break}}const is=l=>l.__isSuspense;function Ms(l,Z){Z&&Z.pendingBranch?v(l)?Z.effects.push(...l):Z.effects.push(l):aG(l)}const A=Symbol.for("v-fgt"),Md=Symbol.for("v-txt"),Al=Symbol.for("v-cmt"),Pc=Symbol.for("v-stc"),Tc=[];let lZ=null;function e(l=!1){Tc.push(lZ=l?null:[])}function Ys(){Tc.pop(),lZ=Tc[Tc.length-1]||null}let zc=1;function lm(l){zc+=l,l<0&&lZ&&(lZ.hasOnce=!0)}function bW(l){return l.dynamicChildren=zc>0?lZ||$Z:null,Ys(),zc>0&&lZ&&lZ.push(l),l}function Q(l,Z,c,d,b,m){return bW(h(l,Z,c,d,b,m,!0))}function yl(l,Z,c,d,b){return bW(y(l,Z,c,d,b,!0))}function _c(l){return l?l.__v_isVNode===!0:!1}function HZ(l,Z){return l.type===Z.type&&l.key===Z.key}const mW=({key:l})=>l??null,vc=({ref:l,ref_key:Z,ref_for:c})=>(typeof l=="number"&&(l=""+l),l!=null?el(l)||ol(l)||_(l)?{i:kl,r:l,k:Z,f:!!c}:l:null);function h(l,Z=null,c=null,d=0,b=null,m=l===A?0:1,W=!1,G=!1){const s={__v_isVNode:!0,__v_skip:!0,type:l,props:Z,key:Z&&mW(Z),ref:Z&&vc(Z),scopeId:sd,slotScopeIds:null,children:c,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:m,patchFlag:d,dynamicProps:b,dynamicChildren:null,appContext:null,ctx:kl};return G?(Vb(s,c),m&128&&l.normalize(s)):c&&(s.shapeFlag|=el(c)?8:16),zc>0&&!W&&lZ&&(s.patchFlag>0||m&6)&&s.patchFlag!==32&&lZ.push(s),s}const y=Xs;function Xs(l,Z=null,c=null,d=0,b=null,m=!1){if((!l||l===C0)&&(l=Al),_c(l)){const G=UZ(l,Z,!0);return c&&Vb(G,c),zc>0&&!m&&lZ&&(G.shapeFlag&6?lZ[lZ.indexOf(l)]=G:lZ.push(G)),G.patchFlag=-2,G}if(zs(l)&&(l=l.__vccOpts),Z){Z=hs(Z);let{class:G,style:s}=Z;G&&!el(G)&&(Z.class=bb(G)),pl(s)&&(V0(s)&&!v(s)&&(s=Cl({},s)),Z.style=Pl(s))}const W=el(l)?1:is(l)?128:AG(l)?64:pl(l)?4:_(l)?2:0;return h(l,Z,c,d,b,W,m,!0)}function hs(l){return l?V0(l)||P0(l)?Cl({},l):l:null}function UZ(l,Z,c=!1,d=!1){const{props:b,ref:m,patchFlag:W,children:G,transition:s}=l,u=Z?ys(b||{},Z):b,t={__v_isVNode:!0,__v_skip:!0,type:l.type,props:u,key:u&&mW(u),ref:Z&&Z.ref?c&&m?v(m)?m.concat(vc(Z)):[m,vc(Z)]:vc(Z):m,scopeId:l.scopeId,slotScopeIds:l.slotScopeIds,children:G,target:l.target,targetStart:l.targetStart,targetAnchor:l.targetAnchor,staticCount:l.staticCount,shapeFlag:l.shapeFlag,patchFlag:Z&&l.type!==A?W===-1?16:W|16:W,dynamicProps:l.dynamicProps,dynamicChildren:l.dynamicChildren,appContext:l.appContext,dirs:l.dirs,transition:s,component:l.component,suspense:l.suspense,ssContent:l.ssContent&&UZ(l.ssContent),ssFallback:l.ssFallback&&UZ(l.ssFallback),el:l.el,anchor:l.anchor,ctx:l.ctx,ce:l.ce};return s&&d&&Ac(t,s.clone(t)),t}function r(l=" ",Z=0){return y(Md,null,l,Z)}function xc(l,Z){const c=y(Pc,null,l);return c.staticCount=Z,c}function vl(l="",Z=!1){return Z?(e(),yl(Al,null,l)):y(Al,null,l)}function YZ(l){return l==null||typeof l=="boolean"?y(Al):v(l)?y(A,null,l.slice()):typeof l=="object"?wZ(l):y(Md,null,String(l))}function wZ(l){return l.el===null&&l.patchFlag!==-1||l.memo?l:UZ(l)}function Vb(l,Z){let c=0;const{shapeFlag:d}=l;if(Z==null)Z=null;else if(v(Z))c=16;else if(typeof Z=="object")if(d&65){const b=Z.default;b&&(b._c&&(b._d=!1),Vb(l,b()),b._c&&(b._d=!0));return}else{c=32;const b=Z._;!b&&!P0(Z)?Z._ctx=kl:b===3&&kl&&(kl.slots._===1?Z._=1:(Z._=2,l.patchFlag|=1024))}else _(Z)?(Z={default:Z,_ctx:kl},c=32):(Z=String(Z),d&64?(c=16,Z=[r(Z)]):c=8);l.children=Z,l.shapeFlag|=c}function ys(...l){const Z={};for(let c=0;c<l.length;c++){const d=l[c];for(const b in d)if(b==="class")Z.class!==d.class&&(Z.class=bb([Z.class,d.class]));else if(b==="style")Z.style=Pl([Z.style,d.style]);else if(cd(b)){const m=Z[b],W=d[b];W&&m!==W&&!(v(m)&&m.includes(W))&&(Z[b]=m?[].concat(m,W):W)}else b!==""&&(Z[b]=d[b])}return Z}function MZ(l,Z,c,d=null){mZ(l,Z,7,[c,d])}const as=E0();let Ts=0;function Vs(l,Z,c){const d=l.type,b=(Z?Z.appContext:l.appContext)||as,m={uid:Ts++,vnode:l,type:d,parent:Z,appContext:b,root:null,next:null,subTree:null,effect:null,update:null,scope:new W0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:Z?Z.provides:Object.create(b.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:r0(d,b),emitsOptions:dW(d,b),emit:null,emitted:null,propsDefaults:Il,inheritAttrs:d.inheritAttrs,ctx:Il,data:Il,props:Il,attrs:Il,slots:Il,refs:Il,setupState:Il,setupContext:null,suspense:c,suspenseId:c?c.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return m.ctx={_:m},m.root=Z?Z.root:m,m.emit=Gs.bind(null,m),l.ce&&l.ce(m),m}let Fl=null;const WW=()=>Fl||kl;let qc,Ad;{const l=c0(),Z=(c,d)=>{let b;return(b=l[c])||(b=l[c]=[]),b.push(d),m=>{b.length>1?b.forEach(W=>W(m)):b[0](m)}};qc=Z("__VUE_INSTANCE_SETTERS__",c=>Fl=c),Ad=Z("__VUE_SSR_SETTERS__",c=>Yd=c)}const Dc=l=>{const Z=Fl;return qc(l),l.scope.on(),()=>{l.scope.off(),qc(Z)}},Zm=()=>{Fl&&Fl.scope.off(),qc(null)};function GW(l){return l.vnode.shapeFlag&4}let Yd=!1;function Ls(l,Z=!1,c=!1){Z&&Ad(Z);const{props:d,children:b}=l.vnode,m=GW(l);QG(l,d,m,Z),rG(l,b,c);const W=m?ns(l,Z):void 0;return Z&&Ad(!1),W}function ns(l,Z){const c=l.type;l.accessCache=Object.create(null),l.proxy=new Proxy(l.ctx,JG);const{setup:d}=c;if(d){const b=l.setupContext=d.length>1?tW(l):null,m=Dc(l);CZ();const W=JZ(d,l,0,[l.props,b]);if(FZ(),m(),qm(W)){if(W.then(Zm,Zm),Z)return W.then(G=>{cm(l,G,Z)}).catch(G=>{Gd(G,l,0)});l.asyncDep=W}else cm(l,W,Z)}else sW(l,Z)}function cm(l,Z,c){_(Z)?l.type.__ssrInlineRender?l.ssrRender=Z:l.render=Z:pl(Z)&&(l.setupState=z0(Z)),sW(l,c)}let dm;function sW(l,Z,c){const d=l.type;if(!l.render){if(!Z&&dm&&!d.render){const b=d.template||hb(l).template;if(b){const{isCustomElement:m,compilerOptions:W}=l.appContext.config,{delimiters:G,compilerOptions:s}=d,u=Cl(Cl({isCustomElement:m,delimiters:G},W),s);d.render=dm(b,u)}}l.render=d.render||bZ}{const b=Dc(l);CZ();try{kG(l)}finally{FZ(),b()}}}const ps={get(l,Z){return _l(l,"get",""),l[Z]}};function tW(l){const Z=c=>{l.exposed=c||{}};return{attrs:new Proxy(l.attrs,ps),slots:l.slots,emit:l.emit,expose:Z}}function Xd(l){return l.exposed?l.exposeProxy||(l.exposeProxy=new Proxy(z0(L0(l.exposed)),{get(Z,c){if(c in Z)return Z[c];if(c in yc)return yc[c](l)},has(Z,c){return c in Z||c in yc}})):l.proxy}function Is(l,Z=!0){return _(l)?l.displayName||l.name:l.name||Z&&l.__name}function zs(l){return _(l)&&"__vccOpts"in l}const Sl=(l,Z)=>NG(l,Z,Yd);function cZ(l,Z,c){const d=arguments.length;return d===2?pl(Z)&&!v(Z)?_c(Z)?y(l,null,[Z]):y(l,Z):y(l,null,Z):(d>3?c=Array.prototype.slice.call(arguments,2):d===3&&_c(c)&&(c=[c]),y(l,Z,c))}const os="3.4.38";/**
* @vue/runtime-dom v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const es="http://www.w3.org/2000/svg",Rs="http://www.w3.org/1998/Math/MathML",yZ=typeof document<"u"?document:null,bm=yZ&&yZ.createElement("template"),ws={insert:(l,Z,c)=>{Z.insertBefore(l,c||null)},remove:l=>{const Z=l.parentNode;Z&&Z.removeChild(l)},createElement:(l,Z,c,d)=>{const b=Z==="svg"?yZ.createElementNS(es,l):Z==="mathml"?yZ.createElementNS(Rs,l):c?yZ.createElement(l,{is:c}):yZ.createElement(l);return l==="select"&&d&&d.multiple!=null&&b.setAttribute("multiple",d.multiple),b},createText:l=>yZ.createTextNode(l),createComment:l=>yZ.createComment(l),setText:(l,Z)=>{l.nodeValue=Z},setElementText:(l,Z)=>{l.textContent=Z},parentNode:l=>l.parentNode,nextSibling:l=>l.nextSibling,querySelector:l=>yZ.querySelector(l),setScopeId(l,Z){l.setAttribute(Z,"")},insertStaticContent(l,Z,c,d,b,m){const W=c?c.previousSibling:Z.lastChild;if(b&&(b===m||b.nextSibling))for(;Z.insertBefore(b.cloneNode(!0),c),!(b===m||!(b=b.nextSibling)););else{bm.innerHTML=d==="svg"?`<svg>${l}</svg>`:d==="mathml"?`<math>${l}</math>`:l;const G=bm.content;if(d==="svg"||d==="mathml"){const s=G.firstChild;for(;s.firstChild;)G.appendChild(s.firstChild);G.removeChild(s)}Z.insertBefore(G,c)}return[W?W.nextSibling:Z.firstChild,c?c.previousSibling:Z.lastChild]}},IZ="transition",uc="animation",oc=Symbol("_vtc"),dZ=(l,{slots:Z})=>cZ(nG,Ss(l),Z);dZ.displayName="Transition";const uW={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};dZ.props=Cl({},S0,uW);const KZ=(l,Z=[])=>{v(l)?l.forEach(c=>c(...Z)):l&&l(...Z)},mm=l=>l?v(l)?l.some(Z=>Z.length>1):l.length>1:!1;function Ss(l){const Z={};for(const O in l)O in uW||(Z[O]=l[O]);if(l.css===!1)return Z;const{name:c="v",type:d,duration:b,enterFromClass:m=`${c}-enter-from`,enterActiveClass:W=`${c}-enter-active`,enterToClass:G=`${c}-enter-to`,appearFromClass:s=m,appearActiveClass:u=W,appearToClass:t=G,leaveFromClass:i=`${c}-leave-from`,leaveActiveClass:M=`${c}-leave-active`,leaveToClass:X=`${c}-leave-to`}=l,p=xs(b),o=p&&p[0],F=p&&p[1],{onBeforeEnter:j,onEnter:k,onEnterCancelled:U,onLeave:$,onLeaveCancelled:dl,onBeforeAppear:g=j,onAppear:Zl=k,onAppearCancelled:Yl=U}=Z,P=(O,sl,Rl)=>{EZ(O,sl?t:G),EZ(O,sl?u:W),Rl&&Rl()},bl=(O,sl)=>{O._isLeaving=!1,EZ(O,i),EZ(O,X),EZ(O,M),sl&&sl()},Gl=O=>(sl,Rl)=>{const gl=O?Zl:k,Vl=()=>P(sl,O,Rl);KZ(gl,[sl,Vl]),Wm(()=>{EZ(sl,O?s:m),zZ(sl,O?t:G),mm(gl)||Gm(sl,d,o,Vl)})};return Cl(Z,{onBeforeEnter(O){KZ(j,[O]),zZ(O,m),zZ(O,W)},onBeforeAppear(O){KZ(g,[O]),zZ(O,s),zZ(O,u)},onEnter:Gl(!1),onAppear:Gl(!0),onLeave(O,sl){O._isLeaving=!0;const Rl=()=>bl(O,sl);zZ(O,i),zZ(O,M),js(),Wm(()=>{O._isLeaving&&(EZ(O,i),zZ(O,X),mm($)||Gm(O,d,F,Rl))}),KZ($,[O,Rl])},onEnterCancelled(O){P(O,!1),KZ(U,[O])},onAppearCancelled(O){P(O,!0),KZ(Yl,[O])},onLeaveCancelled(O){bl(O),KZ(dl,[O])}})}function xs(l){if(l==null)return null;if(pl(l))return[ed(l.enter),ed(l.leave)];{const Z=ed(l);return[Z,Z]}}function ed(l){return kW(l)}function zZ(l,Z){Z.split(/\s+/).forEach(c=>c&&l.classList.add(c)),(l[oc]||(l[oc]=new Set)).add(Z)}function EZ(l,Z){Z.split(/\s+/).forEach(d=>d&&l.classList.remove(d));const c=l[oc];c&&(c.delete(Z),c.size||(l[oc]=void 0))}function Wm(l){requestAnimationFrame(()=>{requestAnimationFrame(l)})}let Ds=0;function Gm(l,Z,c,d){const b=l._endId=++Ds,m=()=>{b===l._endId&&d()};if(c)return setTimeout(m,c);const{type:W,timeout:G,propCount:s}=Js(l,Z);if(!W)return d();const u=W+"end";let t=0;const i=()=>{l.removeEventListener(u,M),m()},M=X=>{X.target===l&&++t>=s&&i()};setTimeout(()=>{t<s&&i()},G+1),l.addEventListener(u,M)}function Js(l,Z){const c=window.getComputedStyle(l),d=p=>(c[p]||"").split(", "),b=d(`${IZ}Delay`),m=d(`${IZ}Duration`),W=sm(b,m),G=d(`${uc}Delay`),s=d(`${uc}Duration`),u=sm(G,s);let t=null,i=0,M=0;Z===IZ?W>0&&(t=IZ,i=W,M=m.length):Z===uc?u>0&&(t=uc,i=u,M=s.length):(i=Math.max(W,u),t=i>0?W>u?IZ:uc:null,M=t?t===IZ?m.length:s.length:0);const X=t===IZ&&/\b(transform|all)(,|$)/.test(d(`${IZ}Property`).toString());return{type:t,timeout:i,propCount:M,hasTransform:X}}function sm(l,Z){for(;l.length<Z.length;)l=l.concat(l);return Math.max(...Z.map((c,d)=>tm(c)+tm(l[d])))}function tm(l){return l==="auto"?0:Number(l.slice(0,-1).replace(",","."))*1e3}function js(){return document.body.offsetHeight}function Us(l,Z,c){const d=l[oc];d&&(Z=(Z?[Z,...d]:[...d]).join(" ")),Z==null?l.removeAttribute("class"):c?l.setAttribute("class",Z):l.className=Z}const $c=Symbol("_vod"),NW=Symbol("_vsh"),um={beforeMount(l,{value:Z},{transition:c}){l[$c]=l.style.display==="none"?"":l.style.display,c&&Z?c.beforeEnter(l):Nc(l,Z)},mounted(l,{value:Z},{transition:c}){c&&Z&&c.enter(l)},updated(l,{value:Z,oldValue:c},{transition:d}){!Z!=!c&&(d?Z?(d.beforeEnter(l),Nc(l,!0),d.enter(l)):d.leave(l,()=>{Nc(l,!1)}):Nc(l,Z))},beforeUnmount(l,{value:Z}){Nc(l,Z)}};function Nc(l,Z){l.style.display=Z?l[$c]:"none",l[NW]=!Z}const ks=Symbol(""),Cs=/(^|;)\s*display\s*:/;function Fs(l,Z,c){const d=l.style,b=el(c);let m=!1;if(c&&!b){if(Z)if(el(Z))for(const W of Z.split(";")){const G=W.slice(0,W.indexOf(":")).trim();c[G]==null&&rc(d,G,"")}else for(const W in Z)c[W]==null&&rc(d,W,"");for(const W in c)W==="display"&&(m=!0),rc(d,W,c[W])}else if(b){if(Z!==c){const W=d[ks];W&&(c+=";"+W),d.cssText=c,m=Cs.test(c)}}else Z&&l.removeAttribute("style");$c in l&&(l[$c]=m?d.display:"",l[NW]&&(d.display="none"))}const Nm=/\s*!important$/;function rc(l,Z,c){if(v(c))c.forEach(d=>rc(l,Z,d));else if(c==null&&(c=""),Z.startsWith("--"))l.setProperty(Z,c);else{const d=Os(l,Z);Nm.test(c)?l.setProperty(BZ(d),c.replace(Nm,""),"important"):l[d]=c}}const im=["Webkit","Moz","ms"],Rd={};function Os(l,Z){const c=Rd[Z];if(c)return c;let d=uZ(Z);if(d!=="filter"&&d in l)return Rd[Z]=d;d=md(d);for(let b=0;b<im.length;b++){const m=im[b]+d;if(m in l)return Rd[Z]=m}return Z}const Mm="http://www.w3.org/1999/xlink";function Ym(l,Z,c,d,b,m=EW(Z)){d&&Z.startsWith("xlink:")?c==null?l.removeAttributeNS(Mm,Z.slice(6,Z.length)):l.setAttributeNS(Mm,Z,c):c==null||m&&!d0(c)?l.removeAttribute(Z):l.setAttribute(Z,m?"":kZ(c)?String(c):c)}function gs(l,Z,c,d){if(Z==="innerHTML"||Z==="textContent"){if(c==null)return;l[Z]=c;return}const b=l.tagName;if(Z==="value"&&b!=="PROGRESS"&&!b.includes("-")){const W=b==="OPTION"?l.getAttribute("value")||"":l.value,G=c==null?"":String(c);(W!==G||!("_value"in l))&&(l.value=G),c==null&&l.removeAttribute(Z),l._value=c;return}let m=!1;if(c===""||c==null){const W=typeof l[Z];W==="boolean"?c=d0(c):c==null&&W==="string"?(c="",m=!0):W==="number"&&(c=0,m=!0)}try{l[Z]=c}catch{}m&&l.removeAttribute(Z)}function _Z(l,Z,c,d){l.addEventListener(Z,c,d)}function Ks(l,Z,c,d){l.removeEventListener(Z,c,d)}const Xm=Symbol("_vei");function Es(l,Z,c,d,b=null){const m=l[Xm]||(l[Xm]={}),W=m[Z];if(d&&W)W.value=d;else{const[G,s]=Qs(Z);if(d){const u=m[Z]=vs(d,b);_Z(l,G,u,s)}else W&&(Ks(l,G,W,s),m[Z]=void 0)}}const hm=/(?:Once|Passive|Capture)$/;function Qs(l){let Z;if(hm.test(l)){Z={};let d;for(;d=l.match(hm);)l=l.slice(0,l.length-d[0].length),Z[d[0].toLowerCase()]=!0}return[l[2]===":"?l.slice(3):BZ(l.slice(2)),Z]}let wd=0;const Hs=Promise.resolve(),Ps=()=>wd||(Hs.then(()=>wd=0),wd=Date.now());function vs(l,Z){const c=d=>{if(!d._vts)d._vts=Date.now();else if(d._vts<=c.attached)return;mZ(rs(d,c.value),Z,5,[d])};return c.value=l,c.attached=Ps(),c}function rs(l,Z){if(v(Z)){const c=l.stopImmediatePropagation;return l.stopImmediatePropagation=()=>{c.call(l),l._stopped=!0},Z.map(d=>b=>!b._stopped&&d&&d(b))}else return Z}const ym=l=>l.charCodeAt(0)===111&&l.charCodeAt(1)===110&&l.charCodeAt(2)>96&&l.charCodeAt(2)<123,Bs=(l,Z,c,d,b,m)=>{const W=b==="svg";Z==="class"?Us(l,d,W):Z==="style"?Fs(l,c,d):cd(Z)?Zb(Z)||Es(l,Z,c,d,m):(Z[0]==="."?(Z=Z.slice(1),!0):Z[0]==="^"?(Z=Z.slice(1),!1):As(l,Z,d,W))?(gs(l,Z,d),!l.tagName.includes("-")&&(Z==="value"||Z==="checked"||Z==="selected")&&Ym(l,Z,d,W,m,Z!=="value")):(Z==="true-value"?l._trueValue=d:Z==="false-value"&&(l._falseValue=d),Ym(l,Z,d,W))};function As(l,Z,c,d){if(d)return!!(Z==="innerHTML"||Z==="textContent"||Z in l&&ym(Z)&&_(c));if(Z==="spellcheck"||Z==="draggable"||Z==="translate"||Z==="form"||Z==="list"&&l.tagName==="INPUT"||Z==="type"&&l.tagName==="TEXTAREA")return!1;if(Z==="width"||Z==="height"){const b=l.tagName;if(b==="IMG"||b==="VIDEO"||b==="CANVAS"||b==="SOURCE")return!1}return ym(Z)&&el(c)?!1:Z in l}const am=l=>{const Z=l.props["onUpdate:modelValue"]||!1;return v(Z)?c=>Ec(Z,c):Z};function fs(l){l.target.composing=!0}function Tm(l){const Z=l.target;Z.composing&&(Z.composing=!1,Z.dispatchEvent(new Event("input")))}const Sd=Symbol("_assign"),Kl={created(l,{modifiers:{lazy:Z,trim:c,number:d}},b){l[Sd]=am(b);const m=d||b.props&&b.props.type==="number";_Z(l,Z?"change":"input",W=>{if(W.target.composing)return;let G=l.value;c&&(G=G.trim()),m&&(G=kd(G)),l[Sd](G)}),c&&_Z(l,"change",()=>{l.value=l.value.trim()}),Z||(_Z(l,"compositionstart",fs),_Z(l,"compositionend",Tm),_Z(l,"change",Tm))},mounted(l,{value:Z}){l.value=Z??""},beforeUpdate(l,{value:Z,oldValue:c,modifiers:{lazy:d,trim:b,number:m}},W){if(l[Sd]=am(W),l.composing)return;const G=(m||l.type==="number")&&!/^0\d/.test(l.value)?kd(l.value):l.value,s=Z??"";G!==s&&(document.activeElement===l&&l.type!=="range"&&(d&&Z===c||b&&l.value.trim()===s)||(l.value=s))}},_s=["ctrl","shift","alt","meta"],qs={stop:l=>l.stopPropagation(),prevent:l=>l.preventDefault(),self:l=>l.target!==l.currentTarget,ctrl:l=>!l.ctrlKey,shift:l=>!l.shiftKey,alt:l=>!l.altKey,meta:l=>!l.metaKey,left:l=>"button"in l&&l.button!==0,middle:l=>"button"in l&&l.button!==1,right:l=>"button"in l&&l.button!==2,exact:(l,Z)=>_s.some(c=>l[`${c}Key`]&&!Z.includes(c))},ld=(l,Z)=>{const c=l._withMods||(l._withMods={}),d=Z.join(".");return c[d]||(c[d]=(b,...m)=>{for(let W=0;W<Z.length;W++){const G=qs[Z[W]];if(G&&G(b,Z))return}return l(b,...m)})},$s=Cl({patchProp:Bs},ws);let Vm;function iW(){return Vm||(Vm=$G($s))}const l2=(...l)=>{iW().render(...l)},Z2=(...l)=>{const Z=iW().createApp(...l),{mount:c}=Z;return Z.mount=d=>{const b=d2(d);if(!b)return;const m=Z._component;!_(m)&&!m.render&&!m.template&&(m.template=b.innerHTML),b.innerHTML="";const W=c(b,!1,c2(b));return b instanceof Element&&(b.removeAttribute("v-cloak"),b.setAttribute("data-v-app","")),W},Z};function c2(l){if(l instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&l instanceof MathMLElement)return"mathml"}function d2(l){return el(l)?document.querySelector(l):l}let xd=!1;function Dd(l,Z,c){l&&Z&&c&&(l==null||l.addEventListener(Z,c,!1))}function Lm(l,Z,c){l&&Z&&c&&(l==null||l.removeEventListener(Z,c,!1))}function ec(l,Z){const c=function(b){var m;(m=Z.drag)==null||m.call(Z,b)},d=function(b){var m;Lm(globalThis.document,"mousemove",c),Lm(globalThis.document,"mouseup",d),globalThis.document.onselectstart=null,globalThis.document.ondragstart=null,xd=!1,(m=Z.end)==null||m.call(Z,b)};Dd(l,"mousedown",function(b){var m;xd||(globalThis.document.onselectstart=()=>!1,globalThis.document.ondragstart=()=>!1,Dd(globalThis.document,"mousemove",c),Dd(globalThis.document,"mouseup",d),xd=!0,(m=Z.start)==null||m.call(Z,b))})}var Lb=WZ({name:"ColorPanel",props:{value:{type:Object,required:!0},height:{type:Number,default:150},width:{type:Number,default:210}},emits:["update:value"],setup(l){const Z=D(null),c=D(0),d=D(0),b=Sl(()=>`hsl(${l.value.get("h")}, 100%, 50%)`);function m(){const G=l.value.get("s"),s=l.value.get("v"),{clientWidth:u,clientHeight:t}=Z.value;c.value=G*u/100,d.value=(100-s)*t/100}function W(G){let s=Z.value.getBoundingClientRect(),u=G.clientX-s.left,t=G.clientY-s.top;u=Math.max(0,u),u=Math.min(u,s.width),t=Math.max(0,t),t=Math.min(t,s.height),c.value=u,d.value=d,l.value.set("s",u/s.width*100),l.value.set("v",100-t/s.height*100)}return Jl([()=>l.value.get("h"),()=>l.value.get("v")],()=>m()),sc(()=>{AZ(()=>{ec(Z.value,{drag:G=>{W(G)},end:G=>{W(G)}}),m()})}),{colorPanelRef:Z,background:b,onMousedown:W,left:c,top:d}}});const b2=y("div",{class:"color-panel-white"},null,-1),m2=y("div",{class:"color-panel-black"},null,-1),W2=y("div",null,null,-1);function G2(l,Z,c,d,b,m){return e(),yl("div",{class:"color-panel",ref:"colorPanelRef",style:{backgroundColor:l.background,width:`${l.width}px`,height:`${l.height}px`},onMousedown:Z[1]||(Z[1]=(...W)=>l.onMousedown(...W))},[b2,m2,y("div",{style:{left:`${l.left}px`,top:`${l.top}px`},class:"color-slider"},[W2],4)],36)}function LZ(l,Z){Z===void 0&&(Z={});var c=Z.insertAt;if(!(!l||typeof document>"u")){var d=document.head||document.getElementsByTagName("head")[0],b=document.createElement("style");b.type="text/css",c==="top"&&d.firstChild?d.insertBefore(b,d.firstChild):d.appendChild(b),b.styleSheet?b.styleSheet.cssText=l:b.appendChild(document.createTextNode(l))}}var s2=`
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
`;LZ(s2);Lb.render=G2;Lb.__file="src/component/ColorPanel.vue";var nb=WZ({name:"ColorStraw",emits:["updateColor"],setup(l,{emit:Z}){return{onEyeDropper:d=>{d.stopPropagation(),new EyeDropper().open().then(m=>{Z("updateColor",m.sRGBHex)}).catch(m=>{console.error(m)})}}}});const t2=y("svg",{viewBox:"0 0 1024 1024",width:"16",height:"16"},[y("path",{d:"M861.098667 439.424c-0.426667 0.426667-2.346667-0.768-4.266667-2.688l-267.52-267.562667c-1.962667-1.92-3.157333-3.84-2.730667-4.266666l60.288-60.245334c0.426667-0.426667 2.346667 0.768 4.266667 2.688l267.52 267.52c1.92 1.92 3.114667 3.84 2.688 4.266667l-60.245333 60.288z m131.925333-283.690667L868.992 31.701333C837.76 0.426667 792.746667-7.168 759.04 10.154667a77.653333 77.653333 0 0 0-19.541333 14.208l-36.992 36.949333c-2.645333 2.688-5.077333 5.546667-7.253334 8.448 0.426667 0.597333 0.938667 1.194667 1.536 1.792l256.512 256.512a17.578667 17.578667 0 0 0 1.664 1.450667c2.944-2.218667 5.802667-4.608 8.448-7.253334l36.992-36.992c5.845333-5.888 10.538667-12.458667 14.208-19.584 17.28-33.706667 9.642667-78.72-21.589333-109.952zM380.885333 917.930667c-1.664 6.016 433.749333-430.08 433.749334-430.08 3.072-3.114667 5.248-5.973333 4.864-6.357334L762.88 424.874667c-0.426667-0.426667-3.242667 1.792-6.314667 4.864L329.642667 857.258667c-0.170667 0.170667-9.728 5.717333-9.898667 5.888 0 0-164.309333 47.786667-168.448 48-3.413333 0.256-20.906667-19.541333-20.906667-19.541334s-16.384-14.506667-16.384-18.048c0-3.541333 52.224-179.413333 52.224-179.413333l424.874667-427.52c3.072-3.072 5.290667-5.888 4.906667-6.272l-52.949334-52.906667c-0.384-0.426667-3.2 1.792-6.272 4.864L104.32 644.778667c-0.426667 0.426667-6.016 6.144-6.698667 8.362666l-90.88 306.688a41.130667 41.130667 0 0 0 55.808 57.301334c0.682667 0.128 2.090667 0 3.626667-0.469334 0 0 293.930667-86.144 298.624-89.941333l16.085333-8.789333z m332.288-542.549334l-70.442666-70.485333c-0.512-0.469333-3.413333 1.578667-6.4 4.608l-427.093334 427.093333a21.674667 21.674667 0 0 0-4.565333 5.802667l57.770667 12.970667a9.557333 9.557333 0 0 1 6.058666 8.021333l7.68 49.834667a26.709333 26.709333 0 0 0 5.376-4.394667L708.565333 381.866667c3.072-3.072 5.12-5.973333 4.608-6.442667z","p-id":"4133"})],-1);function u2(l,Z,c,d,b,m){return e(),yl("div",{class:"color-straw",onClick:Z[1]||(Z[1]=(...W)=>l.onEyeDropper(...W))},[t2])}var N2=`
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
`;LZ(N2);nb.render=u2;nb.__file="src/component/ColorStraw.vue";const i2=12;var pb=WZ({name:"ColorHue",props:{value:{type:Object,required:!0},width:{type:Number,required:!0}},setup(l){const Z=D(null),c=D(null),d=D(null),b=D(0),m=D(0);function W(s){const u=Z.value.getBoundingClientRect();let t=s.clientX-u.left;t=Math.min(t,u.width-d.value.offsetWidth/2),t=Math.max(d.value.offsetWidth/2,t);const i=Math.round((t-d.value.offsetWidth/2)/(u.width-d.value.offsetWidth)*360);l.value.set("h",i)}function G(){const s=l.value.get("h");Z.value||(m.value=0),m.value=Math.round(s*(Z.value.offsetWidth-d.value.offsetWidth/2)/360)}return Jl(()=>l.value.get("h"),()=>G()),sc(()=>{AZ(()=>{const s={drag:u=>{W(u)},end:u=>{W(u)}};ec(c.value,s),ec(d.value,s),G()})}),{hueRef:Z,barRef:c,thumbRef:d,onMousedown:W,left:m,top:b,height:i2}}});function M2(l,Z,c,d,b,m){return e(),yl("div",{ref:"hueRef",style:{width:`${l.width}px`,height:`${l.height}px`,padding:`0 ${l.height/2}px`},class:"color-hue"},[y("div",{ref:"barRef",style:{height:`${l.height}px`}},null,4),y("div",{ref:"thumbRef",style:{width:`${l.height}px`,height:`${l.height}px`,top:`${l.top}px`,left:`${l.left}px`},onMousedown:Z[1]||(Z[1]=ld((...W)=>l.onMousedown(...W),["prevent","stop"]))},null,36)],4)}var Y2=`
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
`;LZ(Y2);pb.render=M2;pb.__file="src/component/ColorHue.vue";const X2=12;var Ib=WZ({name:"ColorAlpha",props:{value:{type:Object,required:!0},width:{type:Number,default:100}},setup(l){const Z=D(null),c=D(null),d=D(null),b=D(0),m=D(0),W=Sl(()=>{if(l.value&&l.value.v){const{r:u,g:t,b:i}=l.value.rgba;return`linear-gradient(to right, rgba(${u}, ${t}, ${i}, 0) 0%, rgba(${u}, ${t}, ${i}, 1) 100%)`}return null});function G(){const u=l.value.get("a");if(!Z.value)return m.value=0,0;m.value=Math.round(u*(Z.value.offsetWidth-d.value.offsetWidth/2)/100)}Jl(()=>l.value.get("a"),()=>G());function s(u){const t=Z.value.getBoundingClientRect();let i=u.clientX-t.left;i=Math.max(d.value.offsetWidth/2,i),i=Math.min(i,t.width-d.value.offsetWidth/2),l.value.set("a",Math.round((i-d.value.offsetWidth/2)/(t.width-d.value.offsetWidth)*100))}return sc(()=>{AZ(()=>{const u={drag:t=>{s(t)},end:t=>{s(t)}};ec(c.value,u),ec(d.value,u),G()})}),{alphaRef:Z,barRef:c,thumbRef:d,height:X2,onMousedown:s,top:b,left:m,background:W}}});function h2(l,Z,c,d,b,m){return e(),yl("div",{ref:"alphaRef",class:"color-alpha",style:{width:`${l.width}px`,height:`${l.height}px`}},[y("div",{ref:"barRef",style:{height:`${l.height}px`,background:l.background}},null,4),y("div",{ref:"thumbRef",style:{width:`${l.height}px`,height:`${l.height}px`,top:`${l.top}px`,left:`${l.left}px`}},null,4)],4)}var y2=`
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
`;LZ(y2);Ib.render=h2;Ib.__file="src/component/ColorAlpha.vue";class MW{constructor(Z){nZ(this,"_h",0);nZ(this,"_s",100);nZ(this,"_v",100);nZ(this,"_a",100);nZ(this,"_f","hex");nZ(this,"v","#fff");nZ(this,"s",!1);Z&&(this._f=om(em(Z)),this.format(Z))}format(Z,c){if(!Z)this._h=0,this._s=100,this._v=100,this.update();else{const d=(b,m,W)=>{this._h=Math.max(0,Math.min(360,b)),this._s=Math.max(0,Math.min(100,m)),this._v=Math.max(0,Math.min(100,W)),this.update()};switch(om(em(Z))){case"hex":this._hex(Z,d);break;case"rgb":this._rgba(Z,d);break;case"hsl":this._hsla(Z,d);break;default:throw Error(`非法颜色值--->${Z}`)}}}_hsla(Z,c){if(Z=nm(Z,/hsla|hsl|\(|\)/gm),Z.length===4?this._a=Math.floor(parseFloat(Z[3])*100):Z.length===3&&(this._a=100),Z.length>=3){const{h:d,s:b,v:m}=a2(Z[0],Z[1],Z[2]);c(d,b,m)}}_rgba(Z,c){if(Z=nm(Z,/rgba|rgb|\(|\)/gm),Z.length===4?this._a=Math.floor(parseFloat(Z[3])*100):Z.length===3&&(this._a=100),Z.length>=3){const{h:d,s:b,v:m}=Im(Z[0],Z[1],Z[2]);c(d,b,m)}}_hex(Z,c){Z=Z.replace("#","").trim();let{r:d,g:b,b:m}=T2(Z);Z.length===8?this._a=Math.floor(parseInt(Z.substring(6),16)/255*100):(Z.length===3||Z.length===6)&&(this._a=100);const{h:W,s:G,v:s}=Im(d,b,m);c(W,G,s)}set(Z,c){this[`_${Z}`]=c,this.update()}get(Z){return this[`_${Z}`]}update(){const{_h:Z,_s:c,_v:d,_a:b,_f:m}=this;switch(m){case"rgb":{const{r:W,g:G,b:s}=Kc(Z,c,d);this.v=b===100?`rgb(${W}, ${G}, ${s})`:`rgba(${W}, ${G}, ${s}, ${b/100})`;break}case"hsl":{const W=pm(Z,c/100,d/100);this.v=b===100?`hsl(${Math.round(Z)}, ${Math.round(W[0]*100)}%, ${Math.round(W[1]*100)}%)`:`hsla(${Math.round(Z)}, ${Math.round(W[0]*100)}%, ${Math.round(W[1]*100)}%, ${b/100})`;break}default:{const W=zm(Kc(Z,c,d)),G=Math.round(this._a/100*255);this.v=b===100?W:`${W}${G<=16?"0":""}${G.toString(16)}`;break}}}get hsla(){const{_h:Z,_s:c,_v:d,_a:b}=this,m=pm(Z,c/100,d/100);return{h:Math.round(Z),s:Math.round(m[0]*100),l:Math.round(m[1]*100),a:b/100}}get rgba(){const{_h:Z,_s:c,_v:d,_a:b}=this,{r:m,g:W,b:G}=Kc(Z,c,d);return{r:m,g:W,b:G,a:b/100}}get hex(){const{_h:Z,_s:c,_v:d,_a:b}=this,m=zm(Kc(Z,c,d)),W=Math.round(this._a/100*255);return b===100?m:`${m}${W<=16?"0":""}${W.toString(16)}`}}function nm(l,Z){return l.replace(Z,"").split(/\s|,/g).filter(c=>c!=="").map((c,d)=>d>2?parseFloat(c):parseInt(c,10))}const pm=function(l,Z,c){return[Z*c/((l=(2-Z)*c)<1?l:2-l)||0,l/2]};function a2(l,Z,c){Z=Z/100,c=c/100;let d=Z;const b=Math.max(c,.01);c*=2,Z*=c<=1?c:2-c,d*=b<=1?b:2-b;const m=(c+Z)/2,W=Z===0?2*d/(b+d):2*Z/(c+Z);return{h:l,s:W*100,v:m*100}}function Kc(l,Z,c){l=bc(l,360)*6,Z=bc(Z,100),c=bc(c,100);const d=Math.floor(l),b=l-d,m=c*(1-Z),W=c*(1-b*Z),G=c*(1-(1-b)*Z),s=d%6,u=[c,W,m,m,G,c][s],t=[G,c,c,W,m,m][s],i=[m,m,G,c,c,W][s];return{r:Math.round(u*255),g:Math.round(t*255),b:Math.round(i*255)}}function Im(l,Z,c){l=bc(l,255),Z=bc(Z,255),c=bc(c,255);const d=Math.max(l,Z,c);let b,m;const W=d-Math.min(l,Z,c);if(W===0)b=m=0;else{m=W/d;const G=function(s){return(d-s)/6/W+1/2};switch(d){case l:{b=G(c)-G(Z);break}case Z:{b=1/3+G(l)-G(c);break}case c:{b=2/3+G(Z)-G(l);break}}b<0?b+=1:b>1&&(b-=1)}return{h:b*360,s:m*100,v:d*100}}function bc(l,Z){return l=typeof l=="string"&&l.indexOf(".")!==-1&&parseFloat(l)===1?"100%":l,l=Math.min(Z,Math.max(0,parseFloat(`${l}`))),l=typeof n=="string"&&n.indexOf("%")!==-1?parseInt(`${l*Z}`,10)/100:l,Math.abs(l-Z)<1e-6?1:l%Z/parseFloat(Z)}function T2(l){if(!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(l))throw Error(`非法颜色值--->${l}`);let Z,c,d;return l.length===3?(Z=parseInt(l[0]+l[0],16),c=parseInt(l[1]+l[1],16),d=parseInt(l[2]+l[2],16)):(l.length===6||l.length===8)&&(Z=parseInt(l.substring(0,2),16),c=parseInt(l.substring(2,4),16),d=parseInt(l.substring(4,6),16)),{r:Z,g:c,b:d}}function zm({r:l,g:Z,b:c}){function d(b){return("0"+parseInt(b).toString(16)).slice(-2)}return isNaN(l)||isNaN(Z)||isNaN(c)?"":`#${d(l)}${d(Z)}${d(c)}`.toUpperCase()}function om(l){if(/^#/.test(l))return"hex";if(/^rgb\(/.test(l)||/^rgba\(/.test(l))return"rgb";if(/^hsl\(/.test(l)||/^hsla\(/.test(l))return"hsl";throw Error(`错误的颜色参数--->${l}`)}function em(l){const Z={red:"rgba(255, 0, 0, 1)",green:"rgba(0, 128, 0, 1)",blue:"rgba(0, 0, 255, 1)",magenta:"rgba(255, 0, 255, 1)",yellow:"rgba(255, 255, 0, 1)",chocolate:"rgba(210, 105, 30, 1)",black:"rgba(0, 0, 0, 1)",aquamarine:"rgba(127, 255, 212, 1)",lime:"rgba(0, 255, 0, 1)",fuchsia:"rgba(255, 0, 255, 1)",brass:"rgba(176, 160, 0, 1)",azure:"rgba(240, 255, 255, 1)",brown:"rgba(255, 127, 80, 1)",bronze:"rgba(254, 208, 160, 1)",deeppink:"rgba(255, 20, 147, 1)",aliceblue:"rgba(240, 248, 255, 1)",gray:"rgba(128, 128, 128, 1)",copper:"rgba(192, 0, 224, 1)",coral:"rgba(255, 127, 80, 1)",feldspar:"rgba(254, 208, 160, 1)",orange:"rgba(255, 165, 0, 1)",orchid:"rgba(255, 165, 0, 1)",pink:"rgba(255, 165, 0, 1)",plum:"rgba(221, 160, 221, 1)",quartz:"rgba(0, 160, 0, 1)",purple:"rgba(128, 0, 128, 1)",aliceblue:"rgba(240, 248, 255, 1)",antiquewith:"rgba(160, 0, 0, 1)",blanchedalmond:"rgba(255, 235, 205, 1)",blueviolet:"rgba(138, 43, 226, 1)",beige:"rgba(245, 245, 220, 1)",burlywood:"rgba(222, 184, 135, 1)",bisque:"rgba(255, 228, 196, 1)",cadetblue:"rgba(95, 158, 160, 1)",pink:"rgba(255, 192, 203, 1)",saddlebrown:"rgba(139, 69, 19, 1)",royalblue:"rgba(65, 105, 225, 1)",rosybrown:"rgba(188, 143, 143, 1)",purple:"rgba(128, 0, 128, 1)",orengered:"rgba(14, 14, 237, 1)",olivedrab:"rgba(107, 142, 35, 1)",powderblue:"rgba(176, 224, 230, 1)",peachpuff:"rgba(255, 218, 185, 1)",papayawhip:"rgba(255, 239, 213, 1)",paleturquoise:"rgba(175, 238, 238, 1)",palevioletred:"rgba(219, 112, 147, 1)",palegreen:"rgba(152, 251, 152, 1)",navyblue:"rgba(160, 176, 224, 1)",navajowhite:"rgba(255, 222, 173, 1)",palegodenrod:"rgba(160, 13, 0, 1)",violetred:"rgba(0, 224, 237, 1)",yellowgreen:"rgba(154, 205, 50, 1)",tomato:"rgba(255, 99, 71, 1)",turquoise:"rgba(64, 224, 208, 1)",thistle:"rgba(216, 191, 216, 1)",springgreen:"rgba(0, 255, 127, 1)",steelblue:"rgba(70, 130, 180, 1)",salmon:"rgba(250, 128, 114, 1)",scarlet:"rgba(202, 14, 0, 1)",sienna:"rgba(160, 82, 45, 1)",silver:"rgba(192, 192, 192, 1)",tan:"rgba(210, 180, 140, 1)",thistle:"rgba(216, 191, 216, 1)",turquoise:"rgba(64, 224, 208, 1)",violet:"rgba(238, 130, 238, 1)",snow:"rgba(255, 250, 250, 1)",salmon:"rgba(250, 128, 114, 1)",scarlet:"rgba(202, 14, 0, 1)",sienna:"rgba(160, 82, 45, 1)",silver:"rgba(192, 192, 192, 1)",thistle:"rgba(216, 191, 216, 1)",turquoise:"rgba(64, 224, 208, 1)",violet:"rgba(238, 130, 238, 1)",chartreuse:"rgba(127, 255, 0, 1)",firebrick:"rgba(178, 34, 34, 1)",gold:"rgba(255, 215, 0, 1)",khaki:"rgba(240, 230, 140, 1)",mediumslateblue:"rgba(123, 104, 238, 1)",mediumvioletred:"rgba(199, 21, 133, 1)",oldlace:"rgba(253, 245, 230, 1)",maroom:"rgba(10, 0, 0, 1)",goldenrod:"rgba(218, 165, 32, 1)",wheat:"rgba(245, 222, 179, 1)",whitesmoke:"rgba(245, 245, 245, 1)",orange:"rgba(255, 165, 0, 1)",moccasin:"rgba(255, 228, 181, 1)",mistyrose:"rgba(255, 228, 225, 1)",mintcream:"rgba(245, 255, 250, 1)",midnightblue:"rgba(25, 25, 112, 1)",dimgray:"rgba(105, 105, 105, 1)",darksalmon:"rgba(233, 150, 122, 1)",slategray:"rgba(112, 128, 144, 1)",skyblue:"rgba(135, 206, 235, 1)",sienna:"rgba(160, 82, 45, 1)",seashell:"rgba(255, 245, 238, 1)",salmon:"rgba(250, 128, 114, 1)",seagreen:"rgba(46, 139, 87, 1)",sandybrown:"rgba(244, 164, 96, 1)",firebrick:"rgba(178, 34, 34, 1)",gold:"rgba(255, 215, 0, 1)",khaki:"rgba(240, 230, 140, 1)",maroom:"rgba(10, 0, 0, 1)",goldenrod:"rgba(218, 165, 32, 1)",wheat:"rgba(245, 222, 179, 1)",whitesmoke:"rgba(245, 245, 245, 1)",mediumturquoise:"rgba(72, 209, 204, 1)",navy:"rgba(0, 0, 128, 1)",mediumspringgreen:"rgba(0, 250, 154, 1)",mediumseagreen:"rgba(60, 179, 113, 1)",mediumpurpul:"rgba(237, 0, 0, 1)",peru:"rgba(205, 133, 63, 1)",mediumorchid:"rgba(186, 85, 211, 1)",mediumblue:"rgba(0, 0, 205, 1)",mediumaquamarine:"rgba(102, 205, 170, 1)",maroon:"rgba(128, 0, 0, 1)",limegreen:"rgba(50, 205, 50, 1)",lightyellow:"rgba(255, 255, 224, 1)",lightsteelblue:"rgba(176, 196, 222, 1)",magenta:"rgba(255, 0, 255, 1)",lightslateblue:"rgba(0, 0, 176, 1)",lightslategray:"rgba(119, 136, 153, 1)",lightskyblue:"rgba(135, 206, 250, 1)",inen:"rgba(0, 224, 0, 1)",lightseagreen:"rgba(32, 178, 170, 1)",lightsalmon:"rgba(255, 160, 122, 1)",lightpink:"rgba(255, 182, 193, 1)",plum:"rgba(221, 160, 221, 1)",lightgray:"rgba(0, 0, 160, 1)",lightgreen:"rgba(144, 238, 144, 1)",lightgodenrodyellow:"rgba(0, 222, 224, 1)",indianred:"rgba(205, 92, 92, 1)",lavender:"rgba(230, 230, 250, 1)",lightblue:"rgba(173, 216, 230, 1)",lavenderblush:"rgba(255, 240, 245, 1)",lightcoral:"rgba(240, 128, 128, 1)",lightcyan:"rgba(224, 255, 255, 1)",lightgodenrod:"rgba(0, 222, 208, 1)",hotpink:"rgba(255, 105, 180, 1)",greenyellow:"rgba(173, 255, 47, 1)",lemonchiffon:"rgba(255, 250, 205, 1)",lawngreen:"rgba(124, 252, 0, 1)",khaki:"rgba(240, 230, 140, 1)",deepskyblue:"rgba(0, 191, 255, 1)",honeydew:"rgba(240, 255, 240, 1)",golenrod:"rgba(0, 224, 13, 1)",forestgreen:"rgba(34, 139, 34, 1)",gostwhite:"rgba(0, 0, 14, 1)",greenyellow:"rgba(173, 255, 47, 1)",gainsboro:"rgba(220, 220, 220, 1)",firebrick:"rgba(178, 34, 34, 1)",dodgerblue:"rgba(30, 144, 255, 1)",darkturquoise:"rgba(0, 206, 209, 1)",darkslateblue:"rgba(72, 61, 139, 1)",darkslategray:"rgba(47, 79, 79, 1)",darkseagreen:"rgba(143, 188, 143, 1)",darkred:"rgba(139, 0, 0, 1)",darkorchid:"rgba(153, 50, 204, 1)",darkorenge:"rgba(218, 0, 14, 1)",darkslateblue:"rgba(72, 61, 139, 1)",darkviolet:"rgba(148, 0, 211, 1)",floralwhite:"rgba(255, 250, 240, 1)",cyan:"rgba(0, 255, 255, 1)","bisque darkgray":"rgba(255, 228, 196, 1)",cornsilk:"rgba(255, 248, 220, 1)",darkolivegreen:"rgba(255, 248, 220, 1)",darkgoldenrod:"rgba(184, 134, 11, 1)",darkblue:"rgba(0, 0, 139, 1)",darkcyan:"rgba(0, 139, 139, 1)",darkgreen:"rgba(0, 100, 0, 1)",darkhaki:"rgba(218, 0, 0, 1)",ivory:"rgba(255, 255, 240, 1)",darkmagenta:"rgba(139, 0, 139, 1)",darkgray:"rgba(169, 169, 169, 1)",cornfloewrblue:"rgba(192, 0, 176, 1)",cornfloewrblue:"rgba(192, 0, 176, 1)",darkviolet:"rgba(148, 0, 211, 1)",floralwhite:"rgba(255, 250, 240, 1)",darkslategray:"rgba(47, 79, 79, 1)",darkseagreen:"rgba(143, 188, 143, 1)",darkred:"rgba(139, 0, 0, 1)",darkorchid:"rgba(153, 50, 204, 1)",darkorenge:"rgba(218, 0, 14, 1)",darkslateblue:"rgba(72, 61, 139, 1)"};return Z[l]&&(l=Z[l]),l}const V2=18;var zb=WZ({name:"ColorList",props:{value:{type:Object,required:!0},colors:{type:Array,required:!0}},setup(l){const Z=Sl(()=>l.colors.map(d=>{const b=new MW(d);return b.s=b.hex===l.value.hex,b}));function c(d){l.value.format(l.colors[d])}return{rgbaColors:Z,height:V2,handleSelect:c}}});const L2={class:"color-list"};function n2(l,Z,c,d,b,m){return e(),yl("div",L2,[(e(!0),yl(A,null,O0(l.rgbaColors,(W,G)=>(e(),yl("div",{class:"color",style:{width:`${l.height}px`,height:`${l.height}px`},key:G,onClick:s=>l.handleSelect(G)},[y("div",{class:{"is-selected":W.s,"is-alpha":W._a<100}},[y("div",{style:{width:`${l.height}px`,height:`${l.height}px`,backgroundColor:W.v}},null,4)],2)],12,["onClick"]))),128))])}var p2=`
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
`;LZ(p2);zb.render=n2;zb.__file="src/component/ColorList.vue";const Rm=["hex","rgb","hsl"];var ob=WZ({name:"ColorValue",props:{value:{type:Object,required:!0},width:{type:Number,default:230}},setup(l){const Z=Sl(()=>l.value.get("f")),c=D(Rm.indexOf(Z.value)),d=Sl(()=>l.width-21),b=Sl(()=>(Z.value==="hex"?d.value-15:d.value/4)-15),m=D(l.value.hex),W=D(l.value.rgba),G=D(l.value.hsla);function s(){c.value=(c.value+1)%3,l.value.set("f",Rm[c.value])}function u(){/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(m.value.replace("#","").trim())&&l.value.format(m.value)}function t(){const M=W.value,X=M.r===""||M.g===""||M.b===""||M.a==="",p=!isNaN(M.r)&&!isNaN(M.g)&&!isNaN(M.b)&&!isNaN(M.a);if(X||!p)return;let o=Math.max(parseInt(M.r),0);o=Math.min(o,255);let F=Math.max(parseInt(M.g),0);F=Math.min(F,255);let j=Math.max(parseInt(M.b),0);j=Math.min(j,255);let k=Math.max(parseFloat(M.a),0);k=Math.min(k,1),l.value.format(`rgba(${o},${F},${j},${k})`)}function i(){const M=G.value,X=M.h===""||M.s===""||M.l===""||M.a==="",p=!isNaN(M.h)&&!isNaN(M.s)&&!isNaN(M.l)&&!isNaN(M.a);if(X||!p)return;let o=Math.max(parseInt(M.h),0);o=Math.min(o,360);let F=Math.max(parseInt(M.s),0);F=Math.min(F,100);let j=Math.max(parseInt(M.l),0);j=Math.min(j,100);let k=Math.max(parseFloat(M.a),0);k=Math.min(k,1),l.value.format(`hsla(${o},${F},${j},${k})`)}return Jl(()=>l.value.v,()=>{Z.value==="hex"&&(m.value=l.value.hex),Z.value==="rgb"&&(W.value=l.value.rgba),Z.value==="hsl"&&(G.value=l.value.hsla)}),{format:Z,valueWidth:d,inputWidth:b,hexValue:m,onHexInput:u,rgbaValue:W,onRgbaInput:t,hslaValue:G,onHslaInput:i,onClick:s}}});const I2={class:"color-value"},z2={key:0},o2={key:1},e2={key:2},R2={key:3},w2=y("span",null,"十六进制",-1),S2={key:4},x2=y("span",null,"A",-1),D2=y("path",{d:"M718.73545078 589.39849389H305.26454922c-20.36802471 0-32.58883953 13.23921607-22.40482717 23.42322842 15.27601854 16.29441978 197.56983966 206.73545078 206.73545077 215.90106188 11.20241359 12.22081482 35.64404324 10.18401235 45.8280556 0C542.55203706 821.59397555 729.93786436 624.02413589 741.14027795 612.82172231c10.18401235-11.20241359-3.05520371-22.40482718-22.40482718-23.42322842zM305.26454922 434.60150611h413.47090156c19.34962348 0 32.58883953-12.22081482 22.40482717-23.42322842-11.20241359-11.20241359-198.5882409-208.77225325-206.73545077-216.91946312-9.16561112-10.18401235-33.60724077-11.20241359-45.8280556 0C480.42956171 204.44282693 298.13574057 394.88385793 282.85972205 411.17827769c-10.18401235 10.18401235 2.03680247 23.42322842 22.40482718 23.42322842z"},null,-1);function J2(l,Z,c,d,b,m){return e(),yl("div",I2,[y("div",{style:{width:`${l.valueWidth}px`}},[l.format==="hex"?(e(),yl("div",z2,[Ul(y("input",{type:"text",style:{width:`${l.inputWidth}px`},onInput:Z[1]||(Z[1]=(...W)=>l.onHexInput(...W)),"onUpdate:modelValue":Z[2]||(Z[2]=W=>l.hexValue=W)},null,36),[[Kl,l.hexValue]])])):l.format==="rgb"?(e(),yl("div",o2,[Ul(y("input",{type:"text",style:{width:`${l.inputWidth}px`},onInput:Z[3]||(Z[3]=(...W)=>l.onRgbaInput(...W)),"onUpdate:modelValue":Z[4]||(Z[4]=W=>l.rgbaValue.r=W)},null,36),[[Kl,l.rgbaValue.r]]),Ul(y("input",{type:"text",style:{width:`${l.inputWidth}px`},onInput:Z[5]||(Z[5]=(...W)=>l.onRgbaInput(...W)),"onUpdate:modelValue":Z[6]||(Z[6]=W=>l.rgbaValue.g=W)},null,36),[[Kl,l.rgbaValue.g]]),Ul(y("input",{type:"text",style:{width:`${l.inputWidth}px`},onInput:Z[7]||(Z[7]=(...W)=>l.onRgbaInput(...W)),"onUpdate:modelValue":Z[8]||(Z[8]=W=>l.rgbaValue.b=W)},null,36),[[Kl,l.rgbaValue.b]]),Ul(y("input",{type:"text",style:{width:`${l.inputWidth}px`},onInput:Z[9]||(Z[9]=(...W)=>l.onRgbaInput(...W)),"onUpdate:modelValue":Z[10]||(Z[10]=W=>l.rgbaValue.a=W)},null,36),[[Kl,l.rgbaValue.a]])])):(e(),yl("div",e2,[Ul(y("input",{type:"text",style:{width:`${l.inputWidth}px`},onInput:Z[11]||(Z[11]=(...W)=>l.onHslaInput(...W)),"onUpdate:modelValue":Z[12]||(Z[12]=W=>l.hslaValue.h=W)},null,36),[[Kl,l.hslaValue.h]]),Ul(y("input",{type:"text",style:{width:`${l.inputWidth}px`},onInput:Z[13]||(Z[13]=(...W)=>l.onHslaInput(...W)),"onUpdate:modelValue":Z[14]||(Z[14]=W=>l.hslaValue.s=W)},null,36),[[Kl,l.hslaValue.s]]),Ul(y("input",{type:"text",style:{width:`${l.inputWidth}px`},onInput:Z[15]||(Z[15]=(...W)=>l.onHslaInput(...W)),"onUpdate:modelValue":Z[16]||(Z[16]=W=>l.hslaValue.l=W)},null,36),[[Kl,l.hslaValue.l]]),Ul(y("input",{type:"text",style:{width:`${l.inputWidth}px`},onInput:Z[17]||(Z[17]=(...W)=>l.onHslaInput(...W)),"onUpdate:modelValue":Z[18]||(Z[18]=W=>l.hslaValue.a=W)},null,36),[[Kl,l.hslaValue.a]])])),l.format==="hex"?(e(),yl("div",R2,[w2])):(e(),yl("div",S2,[y("span",null,fl(l.format==="rgb"?"R":"H"),1),y("span",null,fl(l.format==="rgb"?"G":"S %"),1),y("span",null,fl(l.format==="rgb"?"B":"L %"),1),x2]))],4),(e(),yl("svg",{class:"icon",viewBox:"0 0 1024 1024",onClick:Z[19]||(Z[19]=ld((...W)=>l.onClick(...W),["stop"]))},[D2]))])}var j2=`
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
`;LZ(j2);ob.render=J2;ob.__file="src/component/ColorValue.vue";var eb=WZ({name:"ColorPreview",props:{value:{type:Object,required:!0}},setup(l){const Z=D(!1),c=D(!1),d=Sl(()=>`rgba(${l.value.rgba.r},${l.value.rgba.g},${l.value.rgba.b},${l.value.rgba.a})`);function b(){Z.value=!0}function m(){Z.value=!1,c.value=!1}function W(){Z.value=!1,navigator.clipboard.writeText(l.value.v).then(()=>{c.value=!0}).catch(s=>{console.error(s)})}function G(){}return{onMouseenter:b,onMouseleave:m,onMouseup:W,success:c,copy:Z,background:d,onCopy:G}}});const U2={width:"25",height:"25",viewBox:"0 0 1024 1024"},k2=y("path",{fill:"#f8f8f8",d:"M679.827 780.524h-402.786v-469.916h402.786v469.916zM646.261 344.173h-335.655v402.786h335.655v-402.786zM411.304 243.476h-33.564v67.131h33.564v-67.131zM579.131 444.869h-201.394v33.564h201.394v-33.564zM579.131 545.564h-201.394v33.564h201.394v-33.564zM579.131 646.261h-201.394v33.564h201.394v-33.564zM746.959 243.476h-335.655v33.564h335.655v-33.564zM746.959 277.041h-33.564v402.786h33.564v-402.786zM713.394 646.261h-33.564v33.564h33.564v-33.564z"},null,-1),C2={width:"20",height:"20",viewBox:"0 0 1024 1024"},F2=y("path",{fill:"#f8f8f8",d:"M870.4 332.8l-89.6-89.6L416 601.6 243.2 435.2l-89.6 89.6 262.4 256z"},null,-1);function O2(l,Z,c,d,b,m){return e(),yl("div",{class:"color-preview",onMouseenter:Z[1]||(Z[1]=(...W)=>l.onMouseenter(...W)),onMouseleave:Z[2]||(Z[2]=(...W)=>l.onMouseleave(...W)),onMouseup:Z[3]||(Z[3]=(...W)=>l.onMouseup(...W))},[y("div",{style:{background:l.background}},[Ul((e(),yl("svg",U2,[k2],512)),[[um,l.copy]]),Ul((e(),yl("svg",C2,[F2],512)),[[um,l.success]])],4)],32)}var g2=`
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
`;LZ(g2);eb.render=O2;eb.__file="src/component/ColorPreview.vue";const wm=globalThis.document.documentElement.clientWidth,K2=globalThis.document.documentElement.clientHeight;var hd=WZ({name:"ColorPicker",components:{ColorPanel:Lb,ColorStraw:nb,ColorPreview:eb,ColorHue:pb,ColorAlpha:Ib,ColorValue:ob,ColorList:zb},props:{value:{type:[String,null],default:"#fff"},zIndex:{type:Number,default:2},position:{type:Object,required:!0},theme:{type:String,default:"dark"},height:{type:Number,default:150},width:{type:Number,default:233},colors:{type:Array,default:["#ff4500","#ff8c00","#ffd700","#90ee9003","#00ced1","#1e90ff","#c71585","#ff4500ad","#ff7800","#fad400","#90f09080","#00babd","#1f93ffba","#c7158575"]},btn:{type:Boolean,default:!1},change:{type:Function},confirm:{type:Function},clear:{type:Function}},emits:["update:value","confirm","clear"],setup(l,{emit:Z}){const c=D(!1);window.EyeDropper&&(c.value=!0);const d=D(null),b=D({left:l.position.x||0,top:l.position.y||0}),m=Sc(new MW(l.value));Jl(()=>l.value,t=>{t&&t!==m.v&&m.format(t)});const W=Sl(()=>l.width-(c.value?63:40));Jl(()=>m.v,()=>{Z("update:value",m.v),l.change&&l.change(m.v)});function G(){Z("confirm"),l.confirm&&l.confirm(m.v)}function s(){Z("clear"),l.clear&&l.clear()}return sc(()=>{AZ(()=>{const t=d.value.offsetWidth,i=d.value.offsetHeight;b.value.left+t>wm&&(b.value.left=wm-t),b.value.top+i>K2&&(b.value.top=b.value.top-i)})}),{colorRef:d,style:b,color:m,hueWidth:W,isEyeDropper:c,clear:s,confirm:G,updateColorStraw:t=>{m.format(t,m._f)}}}});const E2={class:"color-tool"},Q2={key:0,class:"color-btns"},H2=y("span",null,"Clear",-1),P2=y("span",null,"OK",-1);function v2(l,Z,c,d,b,m){const W=Bl("ColorPanel"),G=Bl("ColorStraw"),s=Bl("ColorPreview"),u=Bl("ColorHue"),t=Bl("ColorAlpha"),i=Bl("ColorValue"),M=Bl("ColorList");return e(),yl("div",{ref:"colorRef",class:["color-picker",`color-picker-${l.theme}`],style:{width:`${l.width}px`,zIndex:l.zIndex,top:`${l.style.top}px`,left:`${l.style.left}px`},onClick:Z[9]||(Z[9]=ld(()=>{},["stop"])),onContextmenu:Z[10]||(Z[10]=ld(()=>{},["prevent","stop"]))},[y(W,{value:l.color,"onUpdate:value":Z[1]||(Z[1]=X=>l.color=X),height:l.height,width:l.width},null,8,["value","height","width"]),y("div",E2,[l.isEyeDropper?(e(),yl(G,{key:0,onUpdateColor:l.updateColorStraw},null,8,["onUpdateColor"])):vl("v-if",!0),y(s,{value:l.color,"onUpdate:value":Z[2]||(Z[2]=X=>l.color=X)},null,8,["value"]),y("div",null,[y(u,{width:l.hueWidth,value:l.color,"onUpdate:value":Z[3]||(Z[3]=X=>l.color=X)},null,8,["width","value"]),y(t,{width:l.hueWidth,value:l.color,"onUpdate:value":Z[4]||(Z[4]=X=>l.color=X)},null,8,["width","value"])])]),y(i,{value:l.color,"onUpdate:value":Z[5]||(Z[5]=X=>l.color=X),width:l.width},null,8,["value","width"]),y(M,{colors:l.colors,value:l.color,"onUpdate:value":Z[6]||(Z[6]=X=>l.color=X)},null,8,["colors","value"]),l.btn?(e(),yl("div",Q2,[y("button",{class:"color-btn",onClick:Z[7]||(Z[7]=(...X)=>l.clear(...X))},[H2]),y("button",{class:"color-btn",onClick:Z[8]||(Z[8]=(...X)=>l.confirm(...X))},[P2])])):vl("v-if",!0)],38)}var r2=`
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
`;LZ(r2);hd.render=v2;hd.__file="src/component/ColorPicker.vue";var Zd=WZ({name:"V3ColorPicker",components:{ColorPicker:hd},props:{value:{type:[String,null],default:"#fff"},zIndex:{type:Number,default:2},theme:{type:String,default:"dark"},height:{type:Number,default:150},width:{type:Number,default:233},colors:{type:Array,default:["#ff4500","#ff8c00","#ffd700","#90ee9003","#00ced1","#1e90ff","#c71585","#ff4500ad","#ff7800","#fad400","#90f09080","#00babd","#1f93ffba","#c7158575"]},size:{type:String},btn:{type:Boolean,default:!1}},emits:["update:value","change"],setup(l,{emit:Z}){const c=D(null),d=D({x:0,y:0}),b=D(!1),m=D(l.value);Jl(m,i=>{b.value=!1,!l.btn&&Z("update:value",i),Z("change",i)}),Jl(()=>l.value,i=>{(i!==null||!l.btn)&&(b.value=!1,m.value=l.value),i===null&&(b.value=!0)});const W=D(!1);function G(i){W.value=!1,AZ(()=>{d.value={x:i.clientX,y:i.clientY},W.value=!0})}function s(i){c.value!==i.target&&(W.value=!1)}function u(){Z("update:value",m.value),Z("change",m.value),W.value=!1}function t(){Z("update:value",null),Z("change",null),b.value=!0,W.value=!1}return Jl(W,i=>{i?(globalThis.document.addEventListener("click",s),globalThis.document.addEventListener("contextmenu",s)):(globalThis.document.removeEventListener("click",s),globalThis.document.removeEventListener("contextmenu",s))}),{onClick:G,position:d,open:W,color:m,confirm:u,clear:t,isClear:b,colorRef:c}}});const B2={class:"c-p-t"},A2={class:"c-p-c"},f2={class:"c-p-i"},_2={key:0,class:"icon",viewBox:"0 0 1024 1024"},q2=y("path",{d:"M511.711 671.589l-270.188-270.23c-0.287-0.264-0.573-0.531-0.851-0.809-10.935-10.935-10.935-28.663 0-39.598 10.935-10.935 28.663-10.935 39.598 0 0.278 0.278 0.545 0.564 0.809 0.851l0.021-0.021 230.691 230.69 231.94-231.94c10.935-10.935 28.663-10.935 39.598 0s10.935 28.663 0 39.598l-271.617 271.459z"},null,-1),$2={key:1,class:"icon",viewBox:"0 0 1024 1024"},lt=y("path",{d:"M704.28672 309.20704l28.95872 28.9792L334.6432 736.78848l-28.95872-28.9792z",fill:"#999"},null,-1),Zt=y("path",{d:"M341.03296 315.5968l398.60224 398.60224-28.95872 28.95872-398.60224-398.60224z",fill:"#999"},null,-1);function ct(l,Z,c,d,b,m){const W=Bl("ColorPicker");return e(),yl(A,null,[y("div",{ref:"colorRef",class:["v3-c-p",l.size?`v3-c-p-${l.size}`:null],onClick:Z[1]||(Z[1]=(...G)=>l.onClick(...G))},[y("div",B2,[y("span",A2,[y("span",{class:"c-p-c-i",style:{backgroundColor:l.isClear?"transparent":l.color}},null,4)]),y("span",f2,[l.isClear?(e(),yl("svg",$2,[lt,Zt])):(e(),yl("svg",_2,[q2]))])])],2),(e(),yl(qG,{to:"body"},[y(dZ,{name:"color-fade"},{default:cl(()=>[l.open?(e(),yl(W,{key:0,value:l.color,"onUpdate:value":Z[2]||(Z[2]=G=>l.color=G),zIndex:l.zIndex,position:l.position,theme:l.theme,width:l.width,height:l.height,colors:l.colors,btn:l.btn,onConfirm:l.confirm,onClear:l.clear},null,8,["value","zIndex","position","theme","width","height","colors","btn","onConfirm","onClear"])):vl("v-if",!0)]),_:1})]))],64)}var dt=`
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
`;LZ(dt);Zd.render=ct;Zd.__file="src/V3ColorPicker.vue";function fd(l,Z){const c=l||{},d=c.change&&typeof c.change=="function"?c.change:s=>{},b={position:{x:Z.clientX,y:Z.clientY},...c,value:c.value||"#fff",confirm:s=>{d(s),l.color=s,G()},clear:()=>{d(null),l.color=null,G()}},m=document.createElement("div"),W=y(hd,b);l2(W,m),m.firstElementChild&&document.body.appendChild(m.firstElementChild),Jl(l,s=>{s.value&&(W.component.props.value=s.value)}),c.change||Jl(W.component.ctx.color,s=>{l.value=s.v});function G(){W&&W.el&&document.body.removeChild(W.el),globalThis.document.removeEventListener("click",G),globalThis.document.removeEventListener("contextmenu",G)}return setTimeout(()=>{globalThis.document.addEventListener("click",G),globalThis.document.addEventListener("contextmenu",G)},0),{close:G}}const bt={mounted(l,{value:Z,instance:c}){l.addEventListener("click",fd.bind(c,Z))},unmounted(l){l.removeEventListener("click",fd)}},mt=function(l){l.component(Zd.name,Zd),l.directive("color",bt),l.config.globalProperties.colorEvent=(Z,c)=>fd(c,Z)};function Wt(l){l.use(mt)}var Gt=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const st=Symbol();var Sm;(function(l){l.direct="direct",l.patchObject="patch object",l.patchFunction="patch function"})(Sm||(Sm={}));function tt(){const l=QW(!0),Z=l.run(()=>D({}));let c=[],d=[];const b=L0({install(m){b._a=m,m.provide(st,b),m.config.globalProperties.$pinia=b,d.forEach(W=>c.push(W)),d=[]},use(m){return!this._a&&!Gt?d.push(m):c.push(m),this},_p:c,_a:null,_e:l,_s:new Map,state:Z});return b}/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const qZ=typeof document<"u";function ut(l){return l.__esModule||l[Symbol.toStringTag]==="Module"}const hl=Object.assign;function Jd(l,Z){const c={};for(const d in Z){const b=Z[d];c[d]=NZ(b)?b.map(l):l(b)}return c}const Vc=()=>{},NZ=Array.isArray,YW=/#/g,Nt=/&/g,it=/\//g,Mt=/=/g,Yt=/\?/g,XW=/\+/g,Xt=/%5B/g,ht=/%5D/g,hW=/%5E/g,yt=/%60/g,yW=/%7B/g,at=/%7C/g,aW=/%7D/g,Tt=/%20/g;function Rb(l){return encodeURI(""+l).replace(at,"|").replace(Xt,"[").replace(ht,"]")}function Vt(l){return Rb(l).replace(yW,"{").replace(aW,"}").replace(hW,"^")}function _d(l){return Rb(l).replace(XW,"%2B").replace(Tt,"+").replace(YW,"%23").replace(Nt,"%26").replace(yt,"`").replace(yW,"{").replace(aW,"}").replace(hW,"^")}function Lt(l){return _d(l).replace(Mt,"%3D")}function nt(l){return Rb(l).replace(YW,"%23").replace(Yt,"%3F")}function pt(l){return l==null?"":nt(l).replace(it,"%2F")}function Rc(l){try{return decodeURIComponent(""+l)}catch{}return""+l}const It=/\/$/,zt=l=>l.replace(It,"");function jd(l,Z,c="/"){let d,b={},m="",W="";const G=Z.indexOf("#");let s=Z.indexOf("?");return G<s&&G>=0&&(s=-1),s>-1&&(d=Z.slice(0,s),m=Z.slice(s+1,G>-1?G:Z.length),b=l(m)),G>-1&&(d=d||Z.slice(0,G),W=Z.slice(G,Z.length)),d=wt(d??Z,c),{fullPath:d+(m&&"?")+m+W,path:d,query:b,hash:Rc(W)}}function ot(l,Z){const c=Z.query?l(Z.query):"";return Z.path+(c&&"?")+c+(Z.hash||"")}function xm(l,Z){return!Z||!l.toLowerCase().startsWith(Z.toLowerCase())?l:l.slice(Z.length)||"/"}function et(l,Z,c){const d=Z.matched.length-1,b=c.matched.length-1;return d>-1&&d===b&&Wc(Z.matched[d],c.matched[b])&&TW(Z.params,c.params)&&l(Z.query)===l(c.query)&&Z.hash===c.hash}function Wc(l,Z){return(l.aliasOf||l)===(Z.aliasOf||Z)}function TW(l,Z){if(Object.keys(l).length!==Object.keys(Z).length)return!1;for(const c in l)if(!Rt(l[c],Z[c]))return!1;return!0}function Rt(l,Z){return NZ(l)?Dm(l,Z):NZ(Z)?Dm(Z,l):l===Z}function Dm(l,Z){return NZ(Z)?l.length===Z.length&&l.every((c,d)=>c===Z[d]):l.length===1&&l[0]===Z}function wt(l,Z){if(l.startsWith("/"))return l;if(!l)return Z;const c=Z.split("/"),d=l.split("/"),b=d[d.length-1];(b===".."||b===".")&&d.push("");let m=c.length-1,W,G;for(W=0;W<d.length;W++)if(G=d[W],G!==".")if(G==="..")m>1&&m--;else break;return c.slice(0,m).join("/")+"/"+d.slice(W).join("/")}const oZ={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var wc;(function(l){l.pop="pop",l.push="push"})(wc||(wc={}));var Lc;(function(l){l.back="back",l.forward="forward",l.unknown=""})(Lc||(Lc={}));function St(l){if(!l)if(qZ){const Z=document.querySelector("base");l=Z&&Z.getAttribute("href")||"/",l=l.replace(/^\w+:\/\/[^\/]+/,"")}else l="/";return l[0]!=="/"&&l[0]!=="#"&&(l="/"+l),zt(l)}const xt=/^[^#]+#/;function Dt(l,Z){return l.replace(xt,"#")+Z}function Jt(l,Z){const c=document.documentElement.getBoundingClientRect(),d=l.getBoundingClientRect();return{behavior:Z.behavior,left:d.left-c.left-(Z.left||0),top:d.top-c.top-(Z.top||0)}}const yd=()=>({left:window.scrollX,top:window.scrollY});function jt(l){let Z;if("el"in l){const c=l.el,d=typeof c=="string"&&c.startsWith("#"),b=typeof c=="string"?d?document.getElementById(c.slice(1)):document.querySelector(c):c;if(!b)return;Z=Jt(b,l)}else Z=l;"scrollBehavior"in document.documentElement.style?window.scrollTo(Z):window.scrollTo(Z.left!=null?Z.left:window.scrollX,Z.top!=null?Z.top:window.scrollY)}function Jm(l,Z){return(history.state?history.state.position-Z:-1)+l}const qd=new Map;function Ut(l,Z){qd.set(l,Z)}function kt(l){const Z=qd.get(l);return qd.delete(l),Z}let Ct=()=>location.protocol+"//"+location.host;function VW(l,Z){const{pathname:c,search:d,hash:b}=Z,m=l.indexOf("#");if(m>-1){let G=b.includes(l.slice(m))?l.slice(m).length:1,s=b.slice(G);return s[0]!=="/"&&(s="/"+s),xm(s,"")}return xm(c,l)+d+b}function Ft(l,Z,c,d){let b=[],m=[],W=null;const G=({state:M})=>{const X=VW(l,location),p=c.value,o=Z.value;let F=0;if(M){if(c.value=X,Z.value=M,W&&W===p){W=null;return}F=o?M.position-o.position:0}else d(X);b.forEach(j=>{j(c.value,p,{delta:F,type:wc.pop,direction:F?F>0?Lc.forward:Lc.back:Lc.unknown})})};function s(){W=c.value}function u(M){b.push(M);const X=()=>{const p=b.indexOf(M);p>-1&&b.splice(p,1)};return m.push(X),X}function t(){const{history:M}=window;M.state&&M.replaceState(hl({},M.state,{scroll:yd()}),"")}function i(){for(const M of m)M();m=[],window.removeEventListener("popstate",G),window.removeEventListener("beforeunload",t)}return window.addEventListener("popstate",G),window.addEventListener("beforeunload",t,{passive:!0}),{pauseListeners:s,listen:u,destroy:i}}function jm(l,Z,c,d=!1,b=!1){return{back:l,current:Z,forward:c,replaced:d,position:window.history.length,scroll:b?yd():null}}function Ot(l){const{history:Z,location:c}=window,d={value:VW(l,c)},b={value:Z.state};b.value||m(d.value,{back:null,current:d.value,forward:null,position:Z.length-1,replaced:!0,scroll:null},!0);function m(s,u,t){const i=l.indexOf("#"),M=i>-1?(c.host&&document.querySelector("base")?l:l.slice(i))+s:Ct()+l+s;try{Z[t?"replaceState":"pushState"](u,"",M),b.value=u}catch(X){console.error(X),c[t?"replace":"assign"](M)}}function W(s,u){const t=hl({},Z.state,jm(b.value.back,s,b.value.forward,!0),u,{position:b.value.position});m(s,t,!0),d.value=s}function G(s,u){const t=hl({},b.value,Z.state,{forward:s,scroll:yd()});m(t.current,t,!0);const i=hl({},jm(d.value,s,null),{position:t.position+1},u);m(s,i,!1),d.value=s}return{location:d,state:b,push:G,replace:W}}function gt(l){l=St(l);const Z=Ot(l),c=Ft(l,Z.state,Z.location,Z.replace);function d(m,W=!0){W||c.pauseListeners(),history.go(m)}const b=hl({location:"",base:l,go:d,createHref:Dt.bind(null,l)},Z,c);return Object.defineProperty(b,"location",{enumerable:!0,get:()=>Z.location.value}),Object.defineProperty(b,"state",{enumerable:!0,get:()=>Z.state.value}),b}function Kt(l){return typeof l=="string"||l&&typeof l=="object"}function LW(l){return typeof l=="string"||typeof l=="symbol"}const nW=Symbol("");var Um;(function(l){l[l.aborted=4]="aborted",l[l.cancelled=8]="cancelled",l[l.duplicated=16]="duplicated"})(Um||(Um={}));function Gc(l,Z){return hl(new Error,{type:l,[nW]:!0},Z)}function hZ(l,Z){return l instanceof Error&&nW in l&&(Z==null||!!(l.type&Z))}const km="[^/]+?",Et={sensitive:!1,strict:!1,start:!0,end:!0},Qt=/[.+*?^${}()[\]/\\]/g;function Ht(l,Z){const c=hl({},Et,Z),d=[];let b=c.start?"^":"";const m=[];for(const u of l){const t=u.length?[]:[90];c.strict&&!u.length&&(b+="/");for(let i=0;i<u.length;i++){const M=u[i];let X=40+(c.sensitive?.25:0);if(M.type===0)i||(b+="/"),b+=M.value.replace(Qt,"\\$&"),X+=40;else if(M.type===1){const{value:p,repeatable:o,optional:F,regexp:j}=M;m.push({name:p,repeatable:o,optional:F});const k=j||km;if(k!==km){X+=10;try{new RegExp(`(${k})`)}catch($){throw new Error(`Invalid custom RegExp for param "${p}" (${k}): `+$.message)}}let U=o?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;i||(U=F&&u.length<2?`(?:/${U})`:"/"+U),F&&(U+="?"),b+=U,X+=20,F&&(X+=-8),o&&(X+=-20),k===".*"&&(X+=-50)}t.push(X)}d.push(t)}if(c.strict&&c.end){const u=d.length-1;d[u][d[u].length-1]+=.7000000000000001}c.strict||(b+="/?"),c.end?b+="$":c.strict&&(b+="(?:/|$)");const W=new RegExp(b,c.sensitive?"":"i");function G(u){const t=u.match(W),i={};if(!t)return null;for(let M=1;M<t.length;M++){const X=t[M]||"",p=m[M-1];i[p.name]=X&&p.repeatable?X.split("/"):X}return i}function s(u){let t="",i=!1;for(const M of l){(!i||!t.endsWith("/"))&&(t+="/"),i=!1;for(const X of M)if(X.type===0)t+=X.value;else if(X.type===1){const{value:p,repeatable:o,optional:F}=X,j=p in u?u[p]:"";if(NZ(j)&&!o)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const k=NZ(j)?j.join("/"):j;if(!k)if(F)M.length<2&&(t.endsWith("/")?t=t.slice(0,-1):i=!0);else throw new Error(`Missing required param "${p}"`);t+=k}}return t||"/"}return{re:W,score:d,keys:m,parse:G,stringify:s}}function Pt(l,Z){let c=0;for(;c<l.length&&c<Z.length;){const d=Z[c]-l[c];if(d)return d;c++}return l.length<Z.length?l.length===1&&l[0]===80?-1:1:l.length>Z.length?Z.length===1&&Z[0]===80?1:-1:0}function pW(l,Z){let c=0;const d=l.score,b=Z.score;for(;c<d.length&&c<b.length;){const m=Pt(d[c],b[c]);if(m)return m;c++}if(Math.abs(b.length-d.length)===1){if(Cm(d))return 1;if(Cm(b))return-1}return b.length-d.length}function Cm(l){const Z=l[l.length-1];return l.length>0&&Z[Z.length-1]<0}const vt={type:0,value:""},rt=/[a-zA-Z0-9_]/;function Bt(l){if(!l)return[[]];if(l==="/")return[[vt]];if(!l.startsWith("/"))throw new Error(`Invalid path "${l}"`);function Z(X){throw new Error(`ERR (${c})/"${u}": ${X}`)}let c=0,d=c;const b=[];let m;function W(){m&&b.push(m),m=[]}let G=0,s,u="",t="";function i(){u&&(c===0?m.push({type:0,value:u}):c===1||c===2||c===3?(m.length>1&&(s==="*"||s==="+")&&Z(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),m.push({type:1,value:u,regexp:t,repeatable:s==="*"||s==="+",optional:s==="*"||s==="?"})):Z("Invalid state to consume buffer"),u="")}function M(){u+=s}for(;G<l.length;){if(s=l[G++],s==="\\"&&c!==2){d=c,c=4;continue}switch(c){case 0:s==="/"?(u&&i(),W()):s===":"?(i(),c=1):M();break;case 4:M(),c=d;break;case 1:s==="("?c=2:rt.test(s)?M():(i(),c=0,s!=="*"&&s!=="?"&&s!=="+"&&G--);break;case 2:s===")"?t[t.length-1]=="\\"?t=t.slice(0,-1)+s:c=3:t+=s;break;case 3:i(),c=0,s!=="*"&&s!=="?"&&s!=="+"&&G--,t="";break;default:Z("Unknown state");break}}return c===2&&Z(`Unfinished custom RegExp for param "${u}"`),i(),W(),b}function At(l,Z,c){const d=Ht(Bt(l.path),c),b=hl(d,{record:l,parent:Z,children:[],alias:[]});return Z&&!b.record.aliasOf==!Z.record.aliasOf&&Z.children.push(b),b}function ft(l,Z){const c=[],d=new Map;Z=gm({strict:!1,end:!0,sensitive:!1},Z);function b(i){return d.get(i)}function m(i,M,X){const p=!X,o=_t(i);o.aliasOf=X&&X.record;const F=gm(Z,i),j=[o];if("alias"in i){const $=typeof i.alias=="string"?[i.alias]:i.alias;for(const dl of $)j.push(hl({},o,{components:X?X.record.components:o.components,path:dl,aliasOf:X?X.record:o}))}let k,U;for(const $ of j){const{path:dl}=$;if(M&&dl[0]!=="/"){const g=M.record.path,Zl=g[g.length-1]==="/"?"":"/";$.path=M.record.path+(dl&&Zl+dl)}if(k=At($,M,F),X?X.alias.push(k):(U=U||k,U!==k&&U.alias.push(k),p&&i.name&&!Om(k)&&W(i.name)),IW(k)&&s(k),o.children){const g=o.children;for(let Zl=0;Zl<g.length;Zl++)m(g[Zl],k,X&&X.children[Zl])}X=X||k}return U?()=>{W(U)}:Vc}function W(i){if(LW(i)){const M=d.get(i);M&&(d.delete(i),c.splice(c.indexOf(M),1),M.children.forEach(W),M.alias.forEach(W))}else{const M=c.indexOf(i);M>-1&&(c.splice(M,1),i.record.name&&d.delete(i.record.name),i.children.forEach(W),i.alias.forEach(W))}}function G(){return c}function s(i){const M=lu(i,c);c.splice(M,0,i),i.record.name&&!Om(i)&&d.set(i.record.name,i)}function u(i,M){let X,p={},o,F;if("name"in i&&i.name){if(X=d.get(i.name),!X)throw Gc(1,{location:i});F=X.record.name,p=hl(Fm(M.params,X.keys.filter(U=>!U.optional).concat(X.parent?X.parent.keys.filter(U=>U.optional):[]).map(U=>U.name)),i.params&&Fm(i.params,X.keys.map(U=>U.name))),o=X.stringify(p)}else if(i.path!=null)o=i.path,X=c.find(U=>U.re.test(o)),X&&(p=X.parse(o),F=X.record.name);else{if(X=M.name?d.get(M.name):c.find(U=>U.re.test(M.path)),!X)throw Gc(1,{location:i,currentLocation:M});F=X.record.name,p=hl({},M.params,i.params),o=X.stringify(p)}const j=[];let k=X;for(;k;)j.unshift(k.record),k=k.parent;return{name:F,path:o,params:p,matched:j,meta:$t(j)}}l.forEach(i=>m(i));function t(){c.length=0,d.clear()}return{addRoute:m,resolve:u,removeRoute:W,clearRoutes:t,getRoutes:G,getRecordMatcher:b}}function Fm(l,Z){const c={};for(const d of Z)d in l&&(c[d]=l[d]);return c}function _t(l){return{path:l.path,redirect:l.redirect,name:l.name,meta:l.meta||{},aliasOf:void 0,beforeEnter:l.beforeEnter,props:qt(l),children:l.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in l?l.components||null:l.component&&{default:l.component}}}function qt(l){const Z={},c=l.props||!1;if("component"in l)Z.default=c;else for(const d in l.components)Z[d]=typeof c=="object"?c[d]:c;return Z}function Om(l){for(;l;){if(l.record.aliasOf)return!0;l=l.parent}return!1}function $t(l){return l.reduce((Z,c)=>hl(Z,c.meta),{})}function gm(l,Z){const c={};for(const d in l)c[d]=d in Z?Z[d]:l[d];return c}function lu(l,Z){let c=0,d=Z.length;for(;c!==d;){const m=c+d>>1;pW(l,Z[m])<0?d=m:c=m+1}const b=Zu(l);return b&&(d=Z.lastIndexOf(b,d-1)),d}function Zu(l){let Z=l;for(;Z=Z.parent;)if(IW(Z)&&pW(l,Z)===0)return Z}function IW({record:l}){return!!(l.name||l.components&&Object.keys(l.components).length||l.redirect)}function cu(l){const Z={};if(l===""||l==="?")return Z;const d=(l[0]==="?"?l.slice(1):l).split("&");for(let b=0;b<d.length;++b){const m=d[b].replace(XW," "),W=m.indexOf("="),G=Rc(W<0?m:m.slice(0,W)),s=W<0?null:Rc(m.slice(W+1));if(G in Z){let u=Z[G];NZ(u)||(u=Z[G]=[u]),u.push(s)}else Z[G]=s}return Z}function Km(l){let Z="";for(let c in l){const d=l[c];if(c=Lt(c),d==null){d!==void 0&&(Z+=(Z.length?"&":"")+c);continue}(NZ(d)?d.map(m=>m&&_d(m)):[d&&_d(d)]).forEach(m=>{m!==void 0&&(Z+=(Z.length?"&":"")+c,m!=null&&(Z+="="+m))})}return Z}function du(l){const Z={};for(const c in l){const d=l[c];d!==void 0&&(Z[c]=NZ(d)?d.map(b=>b==null?null:""+b):d==null?d:""+d)}return Z}const bu=Symbol(""),Em=Symbol(""),wb=Symbol(""),zW=Symbol(""),$d=Symbol("");function ic(){let l=[];function Z(d){return l.push(d),()=>{const b=l.indexOf(d);b>-1&&l.splice(b,1)}}function c(){l=[]}return{add:Z,list:()=>l.slice(),reset:c}}function SZ(l,Z,c,d,b,m=W=>W()){const W=d&&(d.enterCallbacks[b]=d.enterCallbacks[b]||[]);return()=>new Promise((G,s)=>{const u=M=>{M===!1?s(Gc(4,{from:c,to:Z})):M instanceof Error?s(M):Kt(M)?s(Gc(2,{from:Z,to:M})):(W&&d.enterCallbacks[b]===W&&typeof M=="function"&&W.push(M),G())},t=m(()=>l.call(d&&d.instances[b],Z,c,u));let i=Promise.resolve(t);l.length<3&&(i=i.then(u)),i.catch(M=>s(M))})}function Ud(l,Z,c,d,b=m=>m()){const m=[];for(const W of l)for(const G in W.components){let s=W.components[G];if(!(Z!=="beforeRouteEnter"&&!W.instances[G]))if(mu(s)){const t=(s.__vccOpts||s)[Z];t&&m.push(SZ(t,c,d,W,G,b))}else{let u=s();m.push(()=>u.then(t=>{if(!t)return Promise.reject(new Error(`Couldn't resolve component "${G}" at "${W.path}"`));const i=ut(t)?t.default:t;W.components[G]=i;const X=(i.__vccOpts||i)[Z];return X&&SZ(X,c,d,W,G,b)()}))}}return m}function mu(l){return typeof l=="object"||"displayName"in l||"props"in l||"__vccOpts"in l}function Qm(l){const Z=TZ(wb),c=TZ(zW),d=Sl(()=>{const s=ll(l.to);return Z.resolve(s)}),b=Sl(()=>{const{matched:s}=d.value,{length:u}=s,t=s[u-1],i=c.matched;if(!t||!i.length)return-1;const M=i.findIndex(Wc.bind(null,t));if(M>-1)return M;const X=Hm(s[u-2]);return u>1&&Hm(t)===X&&i[i.length-1].path!==X?i.findIndex(Wc.bind(null,s[u-2])):M}),m=Sl(()=>b.value>-1&&tu(c.params,d.value.params)),W=Sl(()=>b.value>-1&&b.value===c.matched.length-1&&TW(c.params,d.value.params));function G(s={}){return su(s)?Z[ll(l.replace)?"replace":"push"](ll(l.to)).catch(Vc):Promise.resolve()}return{route:d,href:Sl(()=>d.value.href),isActive:m,isExactActive:W,navigate:G}}const Wu=WZ({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Qm,setup(l,{slots:Z}){const c=Sc(Qm(l)),{options:d}=TZ(wb),b=Sl(()=>({[Pm(l.activeClass,d.linkActiveClass,"router-link-active")]:c.isActive,[Pm(l.exactActiveClass,d.linkExactActiveClass,"router-link-exact-active")]:c.isExactActive}));return()=>{const m=Z.default&&Z.default(c);return l.custom?m:cZ("a",{"aria-current":c.isExactActive?l.ariaCurrentValue:null,href:c.href,onClick:c.navigate,class:b.value},m)}}}),Gu=Wu;function su(l){if(!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)&&!l.defaultPrevented&&!(l.button!==void 0&&l.button!==0)){if(l.currentTarget&&l.currentTarget.getAttribute){const Z=l.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(Z))return}return l.preventDefault&&l.preventDefault(),!0}}function tu(l,Z){for(const c in Z){const d=Z[c],b=l[c];if(typeof d=="string"){if(d!==b)return!1}else if(!NZ(b)||b.length!==d.length||d.some((m,W)=>m!==b[W]))return!1}return!0}function Hm(l){return l?l.aliasOf?l.aliasOf.path:l.path:""}const Pm=(l,Z,c)=>l??Z??c,uu=WZ({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(l,{attrs:Z,slots:c}){const d=TZ($d),b=Sl(()=>l.route||d.value),m=TZ(Em,0),W=Sl(()=>{let u=ll(m);const{matched:t}=b.value;let i;for(;(i=t[u])&&!i.components;)u++;return u}),G=Sl(()=>b.value.matched[W.value]);Hc(Em,Sl(()=>W.value+1)),Hc(bu,G),Hc($d,b);const s=D();return Jl(()=>[s.value,G.value,l.name],([u,t,i],[M,X,p])=>{t&&(t.instances[i]=u,X&&X!==t&&u&&u===M&&(t.leaveGuards.size||(t.leaveGuards=X.leaveGuards),t.updateGuards.size||(t.updateGuards=X.updateGuards))),u&&t&&(!X||!Wc(t,X)||!M)&&(t.enterCallbacks[i]||[]).forEach(o=>o(u))},{flush:"post"}),()=>{const u=b.value,t=l.name,i=G.value,M=i&&i.components[t];if(!M)return vm(c.default,{Component:M,route:u});const X=i.props[t],p=X?X===!0?u.params:typeof X=="function"?X(u):X:null,F=cZ(M,hl({},p,Z,{onVnodeUnmounted:j=>{j.component.isUnmounted&&(i.instances[t]=null)},ref:s}));return vm(c.default,{Component:F,route:u})||F}}});function vm(l,Z){if(!l)return null;const c=l(Z);return c.length===1?c[0]:c}const oW=uu;function Nu(l){const Z=ft(l.routes,l),c=l.parseQuery||cu,d=l.stringifyQuery||Km,b=l.history,m=ic(),W=ic(),G=ic(),s=iG(oZ);let u=oZ;qZ&&l.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const t=Jd.bind(null,T=>""+T),i=Jd.bind(null,pt),M=Jd.bind(null,Rc);function X(T,S){let J,K;return LW(T)?(J=Z.getRecordMatcher(T),K=S):K=T,Z.addRoute(K,J)}function p(T){const S=Z.getRecordMatcher(T);S&&Z.removeRoute(S)}function o(){return Z.getRoutes().map(T=>T.record)}function F(T){return!!Z.getRecordMatcher(T)}function j(T,S){if(S=hl({},S||s.value),typeof T=="string"){const Y=jd(c,T,S.path),a=Z.resolve({path:Y.path},S),L=b.createHref(Y.fullPath);return hl(Y,a,{params:M(a.params),hash:Rc(Y.hash),redirectedFrom:void 0,href:L})}let J;if(T.path!=null)J=hl({},T,{path:jd(c,T.path,S.path).path});else{const Y=hl({},T.params);for(const a in Y)Y[a]==null&&delete Y[a];J=hl({},T,{params:i(Y)}),S.params=i(S.params)}const K=Z.resolve(J,S),Xl=T.hash||"";K.params=t(M(K.params));const zl=ot(d,hl({},T,{hash:Vt(Xl),path:K.path})),N=b.createHref(zl);return hl({fullPath:zl,hash:Xl,query:d===Km?du(T.query):T.query||{}},K,{redirectedFrom:void 0,href:N})}function k(T){return typeof T=="string"?jd(c,T,s.value.path):hl({},T)}function U(T,S){if(u!==T)return Gc(8,{from:S,to:T})}function $(T){return Zl(T)}function dl(T){return $(hl(k(T),{replace:!0}))}function g(T){const S=T.matched[T.matched.length-1];if(S&&S.redirect){const{redirect:J}=S;let K=typeof J=="function"?J(T):J;return typeof K=="string"&&(K=K.includes("?")||K.includes("#")?K=k(K):{path:K},K.params={}),hl({query:T.query,hash:T.hash,params:K.path!=null?{}:T.params},K)}}function Zl(T,S){const J=u=j(T),K=s.value,Xl=T.state,zl=T.force,N=T.replace===!0,Y=g(J);if(Y)return Zl(hl(k(Y),{state:typeof Y=="object"?hl({},Xl,Y.state):Xl,force:zl,replace:N}),S||J);const a=J;a.redirectedFrom=S;let L;return!zl&&et(d,K,J)&&(L=Gc(16,{to:a,from:K}),f(K,K,!0,!1)),(L?Promise.resolve(L):bl(a,K)).catch(V=>hZ(V)?hZ(V,2)?V:ql(V):Nl(V,a,K)).then(V=>{if(V){if(hZ(V,2))return Zl(hl({replace:N},k(V.to),{state:typeof V.to=="object"?hl({},Xl,V.to.state):Xl,force:zl}),S||a)}else V=O(a,K,!0,N,Xl);return Gl(a,K,V),V})}function Yl(T,S){const J=U(T,S);return J?Promise.reject(J):Promise.resolve()}function P(T){const S=al.values().next().value;return S&&typeof S.runWithContext=="function"?S.runWithContext(T):T()}function bl(T,S){let J;const[K,Xl,zl]=iu(T,S);J=Ud(K.reverse(),"beforeRouteLeave",T,S);for(const Y of K)Y.leaveGuards.forEach(a=>{J.push(SZ(a,T,S))});const N=Yl.bind(null,T,S);return J.push(N),wl(J).then(()=>{J=[];for(const Y of m.list())J.push(SZ(Y,T,S));return J.push(N),wl(J)}).then(()=>{J=Ud(Xl,"beforeRouteUpdate",T,S);for(const Y of Xl)Y.updateGuards.forEach(a=>{J.push(SZ(a,T,S))});return J.push(N),wl(J)}).then(()=>{J=[];for(const Y of zl)if(Y.beforeEnter)if(NZ(Y.beforeEnter))for(const a of Y.beforeEnter)J.push(SZ(a,T,S));else J.push(SZ(Y.beforeEnter,T,S));return J.push(N),wl(J)}).then(()=>(T.matched.forEach(Y=>Y.enterCallbacks={}),J=Ud(zl,"beforeRouteEnter",T,S,P),J.push(N),wl(J))).then(()=>{J=[];for(const Y of W.list())J.push(SZ(Y,T,S));return J.push(N),wl(J)}).catch(Y=>hZ(Y,8)?Y:Promise.reject(Y))}function Gl(T,S,J){G.list().forEach(K=>P(()=>K(T,S,J)))}function O(T,S,J,K,Xl){const zl=U(T,S);if(zl)return zl;const N=S===oZ,Y=qZ?history.state:{};J&&(K||N?b.replace(T.fullPath,hl({scroll:N&&Y&&Y.scroll},Xl)):b.push(T.fullPath,Xl)),s.value=T,f(T,S,J,N),ql()}let sl;function Rl(){sl||(sl=b.listen((T,S,J)=>{if(!Ql.listening)return;const K=j(T),Xl=g(K);if(Xl){Zl(hl(Xl,{replace:!0}),K).catch(Vc);return}u=K;const zl=s.value;qZ&&Ut(Jm(zl.fullPath,J.delta),yd()),bl(K,zl).catch(N=>hZ(N,12)?N:hZ(N,2)?(Zl(N.to,K).then(Y=>{hZ(Y,20)&&!J.delta&&J.type===wc.pop&&b.go(-1,!1)}).catch(Vc),Promise.reject()):(J.delta&&b.go(-J.delta,!1),Nl(N,K,zl))).then(N=>{N=N||O(K,zl,!1),N&&(J.delta&&!hZ(N,8)?b.go(-J.delta,!1):J.type===wc.pop&&hZ(N,20)&&b.go(-1,!1)),Gl(K,zl,N)}).catch(Vc)}))}let gl=ic(),Vl=ic(),ul;function Nl(T,S,J){ql(T);const K=Vl.list();return K.length?K.forEach(Xl=>Xl(T,S,J)):console.error(T),Promise.reject(T)}function GZ(){return ul&&s.value!==oZ?Promise.resolve():new Promise((T,S)=>{gl.add([T,S])})}function ql(T){return ul||(ul=!T,Rl(),gl.list().forEach(([S,J])=>T?J(T):S()),gl.reset()),T}function f(T,S,J,K){const{scrollBehavior:Xl}=l;if(!qZ||!Xl)return Promise.resolve();const zl=!J&&kt(Jm(T.fullPath,0))||(K||!J)&&history.state&&history.state.scroll||null;return AZ().then(()=>Xl(T,S,zl)).then(N=>N&&jt(N)).catch(N=>Nl(N,T,S))}const Wl=T=>b.go(T);let Ll;const al=new Set,Ql={currentRoute:s,listening:!0,addRoute:X,removeRoute:p,clearRoutes:Z.clearRoutes,hasRoute:F,getRoutes:o,resolve:j,options:l,push:$,replace:dl,go:Wl,back:()=>Wl(-1),forward:()=>Wl(1),beforeEach:m.add,beforeResolve:W.add,afterEach:G.add,onError:Vl.add,isReady:GZ,install(T){const S=this;T.component("RouterLink",Gu),T.component("RouterView",oW),T.config.globalProperties.$router=S,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>ll(s)}),qZ&&!Ll&&s.value===oZ&&(Ll=!0,$(b.location).catch(Xl=>{}));const J={};for(const Xl in oZ)Object.defineProperty(J,Xl,{get:()=>s.value[Xl],enumerable:!0});T.provide(wb,S),T.provide(zW,a0(J)),T.provide($d,s);const K=T.unmount;al.add(T),T.unmount=function(){al.delete(T),al.size<1&&(u=oZ,sl&&sl(),sl=null,s.value=oZ,Ll=!1,ul=!1),K()}}};function wl(T){return T.reduce((S,J)=>S.then(()=>P(J)),Promise.resolve())}return Ql}function iu(l,Z){const c=[],d=[],b=[],m=Math.max(Z.matched.length,l.matched.length);for(let W=0;W<m;W++){const G=Z.matched[W];G&&(l.matched.find(u=>Wc(u,G))?d.push(G):c.push(G));const s=l.matched[W];s&&(Z.matched.find(u=>Wc(u,s))||b.push(s))}return[c,d,b]}const Tl=(l,Z)=>{const c=l.__vccOpts||l;for(const[d,b]of Z)c[d]=b;return c},Mu={__name:"App",setup(l){return(Z,c)=>(e(),yl(ll(oW)))}},Yu=Tl(Mu,[["__scopeId","data-v-1bdfff53"]]),Xu={class:"app-header"},hu={class:"container"},yu={class:"app-header-nav",style:{"list-style":"none"}},au={__name:"LayoutHeader",setup(l){return(Z,c)=>{const d=Bl("RouterLink");return e(),Q("header",Xu,[h("div",hu,[h("ul",yu,[h("li",null,[y(d,{to:"/"},{default:cl(()=>[r("WebAPI")]),_:1})]),h("li",null,[y(d,{to:"/kaiWebapi2"},{default:cl(()=>[r("WebAPI2")]),_:1})]),h("li",null,[y(d,{to:"/vue3"},{default:cl(()=>[r("Vue3")]),_:1})]),h("li",null,[y(d,{to:"/download"},{default:cl(()=>[r("下載")]),_:1})]),h("li",null,[y(d,{to:"/others"},{default:cl(()=>[r("其他")]),_:1})]),h("li",null,[y(d,{to:"/dotnet7_vue3"},{default:cl(()=>[r("Dotnet7_vue3")]),_:1})]),h("li",null,[y(d,{to:"/vscode_function"},{default:cl(()=>[r("VS Code小功能")]),_:1})]),h("li",null,[y(d,{to:"/video"},{default:cl(()=>[r("Video")]),_:1})]),h("li",null,[y(d,{to:"/es6"},{default:cl(()=>[r("ES6")]),_:1})]),h("li",null,[y(d,{to:"/Naive_ui"},{default:cl(()=>[r("Naive-ui")]),_:1})]),h("li",null,[y(d,{to:"/dotnetapi_angular"},{default:cl(()=>[r("DotnetAPI_Angular")]),_:1})]),h("li",null,[y(d,{to:"/AI"},{default:cl(()=>[r("AI")]),_:1})]),h("li",null,[y(d,{to:"/Vue3+.NET7"},{default:cl(()=>[r("Vue3+.NET7")]),_:1})]),h("li",null,[y(d,{to:"/pdf_vue3"},{default:cl(()=>[r("pdf_vue3")]),_:1})]),h("li",null,[y(d,{to:"/vuejs_auth"},{default:cl(()=>[r("vuejs_auth")]),_:1})]),h("li",null,[y(d,{to:"/vuejs_auth2"},{default:cl(()=>[r("vuejs_auth2")]),_:1})])])])])}}},Tu=Tl(au,[["__scopeId","data-v-bf073a88"]]),Vu=h("hr",null,null,-1),Lu={__name:"index",setup(l){return(Z,c)=>{const d=Bl("RouterView");return e(),Q(A,null,[y(Tu),Vu,y(d)],64)}}},nu="/vue-my-note/assets/uparrow-CelNzM_b.png",pu={name:"scroll-top",data(){return{scrollTop:0,time:0,dParams:20,scrollState:0}},computed:{showTop:function(){return this.scrollTop>200}},mounted(){window.addEventListener("scroll",this.getScrollTop)},methods:{toTop(l){if(this.scrollState)return;this.scrollState=1,l.preventDefault(),document.documentElement.scrollTop||document.body.scrollTop;let Z=this;this.time=setInterval(function(){Z.gotoTop(Z.scrollTop-Z.dParams)},30)},gotoTop(l){this.dParams+=20,l=l>0?l:0,document.documentElement.scrollTop=document.body.scrollTop=window.pageYOffset=l,this.scrollTop<10&&(clearInterval(this.time),this.dParams=20,this.scrollState=0)},getScrollTop(){this.scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop}}},Iu=l=>(xl("data-v-77d80545"),l=l(),Dl(),l),zu=Iu(()=>h("img",{src:nu},null,-1)),ou=[zu];function eu(l,Z,c,d,b,m){return e(),Q("div",{class:"scrollTop",onClick:Z[0]||(Z[0]=(...W)=>m.toTop&&m.toTop(...W))},ou)}const B=Tl(pu,[["render",eu],["__scopeId","data-v-77d80545"]]),Ru=l=>(xl("data-v-17862d76"),l=l(),Dl(),l),wu=Ru(()=>h("div",null,"我是WebAPI頁面",-1)),Su=`
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
  `,xu={__name:"index",setup(l){return B.scrollToTop=!0,(Z,c)=>(e(),Q(A,null,[wu,h("div",null,[h("div",{innerHTML:Su})]),y(B)],64))}},Du=Tl(xu,[["__scopeId","data-v-17862d76"]]),Ju=`
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
`,ju={__name:"TodoListEditDtoAbstract",setup(l){return B.scrollToTop=!0,(Z,c)=>(e(),Q(A,null,[h("div",{innerHTML:Ju}),y(B)],64))}},Uu=`
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
`,ku={__name:"AsyncController",setup(l){return B.scrollToTop=!0,(Z,c)=>(e(),Q(A,null,[h("div",{innerHTML:Uu}),y(B)],64))}},Cu=`
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
`,Fu={__name:"AuthController",setup(l){return B.scrollToTop=!0,(Z,c)=>(e(),Q(A,null,[h("div",{innerHTML:Cu}),y(B)],64))}},Ou={id:"Vite_to_github",class:"content"},gu={class:"title"},Ku={key:0},Eu={class:"title"},Qu={key:0},Hu={class:"title"},Pu={key:0},vu={__name:"index",setup(l){let Z=D(!1),c=D(!1),d=D(!1);return B.scrollToTop=!0,(b,m)=>(e(),Q(A,null,[h("div",Ou,[h("div",gu,[r("1.DeployVite "),h("button",{onClick:m[0]||(m[0]=W=>ol(Z)?Z.value=!ll(Z):Z=!ll(Z))},"Toggle"),y(dZ,null,{default:cl(()=>[ll(Z)?(e(),Q("div",Ku,[y(ju)])):vl("",!0)]),_:1})]),h("div",Eu,[r("2.AsyncController "),h("button",{onClick:m[1]||(m[1]=W=>ol(c)?c.value=!ll(c):c=!ll(c))},"Toggle"),y(dZ,null,{default:cl(()=>[ll(c)?(e(),Q("div",Qu,[y(ku)])):vl("",!0)]),_:1})]),h("div",Hu,[r("3.AsyncController "),h("button",{onClick:m[2]||(m[2]=W=>ol(d)?d.value=!ll(d):d=!ll(d))},"Toggle"),y(dZ,null,{default:cl(()=>[ll(d)?(e(),Q("div",Pu,[y(Fu)])):vl("",!0)]),_:1})])]),y(B)],64))}},ru=Tl(vu,[["__scopeId","data-v-b5f5b106"]]),Bu=h("div",null,"我是RabbitVue3頁面",-1),Au=`
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
`,fu={__name:"index",setup(l){return B.scrollToTop=!0,(Z,c)=>(e(),Q(A,null,[Bu,h("div",{innerHTML:Au}),y(B)],64))}},_u={},qu=xc('<div data-v-ff3ccd06>我是Download頁面</div><div id="Vue3" class="content" data-v-ff3ccd06><div class="box" data-v-ff3ccd06><div style="padding-top:20px;" data-v-ff3ccd06>【Vue3】</div><div data-v-ff3ccd06><a href="https://www.youtube.com/watch?v=LlYhPO8Ti2U" target="_blank" data-v-ff3ccd06> 1.NET7 Web API | SQL Database | VueJS(3.0) - Composition API | CRUD| Full Video<span class="pdf" data-v-ff3ccd06>YouTube</span></a><p data-v-ff3ccd06>.解決CORS問題</p></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=19m0QpipH0fPS51aztlgZ0gFxwWkSpqo_" data-v-ff3ccd06> 1.dotnet7_vue3<span class="pdf" data-v-ff3ccd06>download&gt;</span></a></div><div data-v-ff3ccd06><a href="https://www.youtube.com/watch?v=2FoD_8dMGyU&amp;list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG" target="_blank" data-v-ff3ccd06> 2.【黑馬程序員】前端Vue3小兔鮮實戰項目<span class="pdf" data-v-ff3ccd06>YouTube</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=10LPanB6adG6BLF0cKcM3H-VCSvUWwf8A" data-v-ff3ccd06> 3.vue-rabbit_my 小兔鮮<span class="pdf" data-v-ff3ccd06>download</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=1AXgm42kcojPX2g7EfrSmHyb-N1BJAAMi" data-v-ff3ccd06> 4.vue-rabbit_sku 小兔鮮<span class="pdf" data-v-ff3ccd06>download</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=18N6U0JeeUsS6EhGGz2jvh3aZK41L-uBc" data-v-ff3ccd06> 5.vue3-basic-project-my(mock)<span class="pdf" data-v-ff3ccd06>download</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=1Xe_GxmzXJVSIxMnqw3cm15YkLLQc4tWD" data-v-ff3ccd06> 6.vue3-basic-project-my(有驗證名字不能重覆update)<span class="pdf" data-v-ff3ccd06>download</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=1551IhmQAwld3cmTH60XHFYvEbvCj2Hfo" data-v-ff3ccd06> 7.台灣濕地學會<span class="pdf" data-v-ff3ccd06>download</span></a></div><div style="padding-top:20px;" data-v-ff3ccd06>【WebAPI】</div><div data-v-ff3ccd06><a href="https://blog.talllkai.com/ASPNETCore" target="_blank" data-v-ff3ccd06> 1.完整且輕鬆學習ASP.NET Core Web API<span class="pdf" data-v-ff3ccd06>Web</span></a></div><div data-v-ff3ccd06><a href="https://www.youtube.com/watch?v=dXUfZuf1Wp4&amp;list=PLneJIGUTIItuqdxuDBEKCrvXCtCdUf_Xm" target="_blank" data-v-ff3ccd06> 2.ASP.NET Core Web API 入門教學<span class="pdf" data-v-ff3ccd06>YouTube</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=1Mi3nQijxvyz6TmA7NWzkudmxeJha7W-e" data-v-ff3ccd06> 3.DataBase_First_凱哥<span class="pdf" data-v-ff3ccd06>download</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=1ZvJ5hwHCPzPRMsv_w3sWJOxKYI88h8xd" data-v-ff3ccd06> 4.BookMark<span class="pdf" data-v-ff3ccd06>download</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=1Oiyo9Pgg-qCY6mkY9L0WDVmAc3VQYeeP" data-v-ff3ccd06> 5.無蝦米download<span class="pdf" data-v-ff3ccd06>download</span></a></div></div></div>',2);function $u(l,Z){return qu}const lN=Tl(_u,[["render",$u],["__scopeId","data-v-ff3ccd06"]]),ZN=`
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
`,eW={__name:"_4_deployVite",setup(l){return B.scrollToTop=!0,(Z,c)=>(e(),Q(A,null,[h("div",{innerHTML:ZN}),y(B)],64))}},cN=`
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
`,dN={__name:"_10_vue3_is",setup(l){return B.scrollToTop=!0,(Z,c)=>(e(),Q(A,null,[h("div",{innerHTML:cN}),y(B)],64))}},bN=`
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
`,mN={__name:"_11_vue3_is",setup(l){return B.scrollToTop=!0,(Z,c)=>(e(),Q(A,null,[h("div",{innerHTML:bN}),y(B)],64))}},WN=`
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
`,GN={__name:"_16_Quartz",setup(l){return B.scrollToTop=!0,(Z,c)=>(e(),Q(A,null,[h("div",{innerHTML:WN}),y(B)],64))}},sN=`
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
`,tN={__name:"_17_Cors",setup(l){return B.scrollToTop=!0,(Z,c)=>(e(),Q(A,null,[h("div",{innerHTML:sN}),y(B)],64))}},rm={__name:"HelloWorld",props:["msg2"],emits:["foo"],setup(l,{emit:Z}){const c=Z;return setTimeout(()=>{c("foo","onFoo")},2e3),(d,b)=>(e(),Q("div",null,[cc(d.$slots,"default",{},()=>[r("5.HelloWorld.vue")]),r(" "+fl(l.msg2)+" ",1),cc(d.$slots,"default"),cc(d.$slots,"footer",{msg3:" + msg3 footer props"},()=>[r("footer")])]))}},Ol=l=>(xl("data-v-fb538a84"),l=l(),Dl(),l),uN=Ol(()=>h("div",null,"這是其他頁",-1)),NN=Ol(()=>h("div",null,"3.2222",-1)),iN=Ol(()=>h("div",null,"4.2222",-1)),MN=Ol(()=>h("div",null,"5.App傳遞的默認插槽",-1)),YN={id:"Vite_to_github",class:"content"},XN=Ol(()=>h("div",null,[r("1.Vue3 CRUD + bootstrap "),h("a",{href:"https://www.youtube.com/watch?v=PrKh6GemOyg",target:"_blank"}," https://www.youtube.com/watch?v=PrKh6GemOyg ")],-1)),hN=Ol(()=>h("div",null,[r("2.Vue3 學習筆記 "),h("a",{href:"https://hackmd.io/@Lin-Jay/S1xju_nKO",target:"_blank"}," https://hackmd.io/@Lin-Jay/S1xju_nKO ")],-1)),yN=Ol(()=>h("div",null,[r("3.Build app using Vue JS, .NET Core Web API and Microsoft SQL Server(create Azure) "),h("a",{href:"https://www.youtube.com/watch?v=TMmhECU3rHs",target:"_blank"}," https://www.youtube.com/watch?v=TMmhECU3rHs ")],-1)),aN=Ol(()=>h("a",{href:"https://www.youtube.com/watch?v=yo2bMGnIKE8",target:"_blank"}," https://www.youtube.com/watch?v=yo2bMGnIKE8 ",-1)),TN={key:0},VN=xc('<div data-v-fb538a84>5.先學 axios 基礎與封裝管理 API <a href="https://ithelp.ithome.com.tw/articles/10304656" target="_blank" data-v-fb538a84> https://ithelp.ithome.com.tw/articles/10304656 </a></div><div data-v-fb538a84>6.[C#][ASP.NET] Web API 開發心得 (7) - 使用 Token 進行 API 授權驗證 <a href="https://ithelp.ithome.com.tw/articles/10199102" target="_blank" data-v-fb538a84> https://ithelp.ithome.com.tw/articles/10199102 </a></div><div data-v-fb538a84>7.Poy Chang Trial and Error <a href="https://blog.poychang.net/categories/" target="_blank" data-v-fb538a84> https://blog.poychang.net/categories/ </a></div><div data-v-fb538a84>8.阿里巴巴向量圖標庫: iconfont <a href="https://www.iconfont.cn/" target="_blank" data-v-fb538a84> https://www.iconfont.cn/ </a></div><div data-v-fb538a84>9.VueUse 中文文檔 <a href="https://vueuse.pages.dev/" target="_blank" data-v-fb538a84> https://vueuse.pages.dev/ </a></div><div data-v-fb538a84>9.vue3 is我意想不到的用法 <a href="https://segmentfault.com/a/1190000044532342" target="_blank" data-v-fb538a84> https://segmentfault.com/a/1190000044532342 </a></div>',6),LN=Ol(()=>h("a",{href:"https://blog.csdn.net/kuang_nu/article/details/128834690",target:"_blank"}," https://blog.csdn.net/kuang_nu/article/details/128834690 ",-1)),nN={key:0},pN=Ol(()=>h("a",{href:"https://www.bilibili.com/video/BV166421Z7nU/",target:"_blank"}," https://www.bilibili.com/video/BV166421Z7nU/ ",-1)),IN={key:0},zN=Ol(()=>h("div",null,[r("12.Master xUnit Like A Pro in Under 10 Minutes! "),h("a",{href:"https://www.youtube.com/watch?v=rohq-Wqj0yI",target:"_blank"}," https://www.youtube.com/watch?v=rohq-Wqj0yI ")],-1)),oN=Ol(()=>h("div",null,[r("13.Native UI - 表單 "),h("a",{href:"https://www.naiveui.com/zh-CN/os-theme/components/form#inline.vue",target:"_blank"}," https://www.naiveui.com/zh-CN/os-theme/components/form#inline.vue ")],-1)),eN=Ol(()=>h("div",null,[r("14.Vue3 如何用 defineModel 實作 props/ emit 的父子元件傳值，讓傳值變得更方便簡單 "),h("a",{href:"https://muki.tw/vmodel-definemodel-props-emit/",target:"_blank"}," https://muki.tw/vmodel-definemodel-props-emit/ ")],-1)),RN=Ol(()=>h("div",null,[r("15.Vue3 獲取子組件dom "),h("a",{href:"https://wenku.csdn.net/answer/6j4iqoam25?ydreferer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8%3D",target:"_blank"}," https://wenku.csdn.net/answer/6j4iqoam25?ydreferer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8%3D ")],-1)),wN=Ol(()=>h("a",{href:"https://www.bilibili.com/video/BV1G94y1b7JH/?vd_source=1a5937a80fc962029ba6a7b9ee9a1654",target:"_blank"}," https://www.bilibili.com/video/BV1G94y1b7JH/?vd_source=1a5937a80fc962029ba6a7b9ee9a1654 ",-1)),SN=Ol(()=>h("a",{href:"https://www.youtube.com/watch?v=iD3jrj3RBuc&t=118s",target:"_blank"}," Scheduling Background Tasks In .NET With Quartz-https://www.youtube.com/watch?v=iD3jrj3RBuc&t=118s ",-1)),xN={key:0},DN=Ol(()=>h("a",{href:"https://ithelp.ithome.com.tw/articles/10245157",target:"_blank"}," https://ithelp.ithome.com.tw/articles/10245157 ",-1)),JN={key:0},jN={__name:"index",setup(l){let Z=D(!1),c=D(!1),d=D(!1),b=D(!1),m=D(!1);const W=D("1.Hello Vue3 + Vite"),G=cZ("div",{style:{color:"red"}},[cZ("span","1.Hello World")],[cZ("p","1.這是一個標籤")]);setTimeout(()=>{W.value="3.111"},2e3);const s=i=>cZ("div",{style:{color:"red"}},i.count),u=(i,{slots:M})=>{var p,o;const X=D("4.aaa");return cZ("div",{style:{color:"red"},onClick(){console.log("click")},onMousedown(){console.log("mousedown")}},[(p=M==null?void 0:M.header)==null?void 0:p.call(M,X.value),"4.container",(o=M==null?void 0:M.default)==null?void 0:o.call(M)])},t=(i,{slots:M})=>cZ(rm,{msg2:"App傳遞的msg2",onFoo(X){console.log("響應的事件foo",X)}},{default:M.default,footer:()=>cZ(rm,null,{default:()=>cZ("div","5.嵌套的默認插槽"),footer:({msg3:X})=>cZ("div","5.嵌套的footer"+X)})});return B.scrollToTop=!0,(i,M)=>(e(),Q(A,null,[uN,(e(),yl(DG(ll(G)))),y(s,{count:3.1},{default:cl(()=>[NN]),_:1}),y(u,{count:4.1},{header:cl(X=>[h("div",null,"4.header "+fl(X),1)]),default:cl(()=>[iN]),_:1}),y(t,null,{default:cl(()=>[MN]),_:1}),h("div",YN,[XN,hN,yN,h("div",null,[r("4.How to Deploy Your Vite App to Github Pages "),aN,h("button",{onClick:M[0]||(M[0]=X=>ol(Z)?Z.value=!ll(Z):Z=!ll(Z))},"Toggle"),y(dZ,null,{default:cl(()=>[ll(Z)?(e(),Q("div",TN,[y(eW)])):vl("",!0)]),_:1})]),VN,h("div",null,[r("10.Vue3 動態組件 標籤和:is 的用法 "),LN,h("button",{onClick:M[1]||(M[1]=X=>ol(c)?c.value=!ll(c):c=!ll(c))},"Toggle"),y(dZ,null,{default:cl(()=>[ll(c)?(e(),Q("div",nN,[y(dN)])):vl("",!0)]),_:1})]),h("div",null,[r("11.Vue3 h函數的使用(必看) "),pN,h("button",{onClick:M[2]||(M[2]=X=>ol(d)?d.value=!ll(d):d=!ll(d))},"Toggle"),y(dZ,null,{default:cl(()=>[ll(d)?(e(),Q("div",IN,[y(mN)])):vl("",!0)]),_:1})]),zN,oN,eN,RN,h("div",null,[r("16.Quartz與Cron表達式管理後台任務執行 "),wN,SN,h("button",{onClick:M[3]||(M[3]=X=>ol(b)?b.value=!ll(b):b=!ll(b))},"Toggle"),y(dZ,null,{default:cl(()=>[ll(b)?(e(),Q("div",xN,[y(GN)])):vl("",!0)]),_:1})]),h("div",null,[r("17.CORS 跨來源資源共用 - 我與 ASP.NET Core 3 的 30天 "),DN,h("button",{onClick:M[4]||(M[4]=X=>ol(m)?m.value=!ll(m):m=!ll(m))},"Toggle"),y(dZ,null,{default:cl(()=>[ll(m)?(e(),Q("div",JN,[y(tN)])):vl("",!0)]),_:1})])]),y(B)],64))}},UN=Tl(jN,[["__scopeId","data-v-fb538a84"]]),RW=l=>(xl("data-v-c0da6ecf"),l=l(),Dl(),l),kN=RW(()=>h("div",null,[h("h2",null,"Dotnet7_vue3"),h("a",{href:"https://www.youtube.com/watch?v=LlYhPO8Ti2U",target:"_blank"}," https://www.youtube.com/watch?v=LlYhPO8Ti2U "),h("div",null,".NET7 Web API | SQL Database | VueJS(3.0) - Composition API | CRUD")],-1)),CN={class:"container"},FN={class:"app-header-nav",style:{"list-style":"none"}},ON=RW(()=>h("div",null,null,-1)),gN={__name:"index",setup(l){return B.scrollToTop=!0,(Z,c)=>{const d=Bl("RouterLink"),b=Bl("RouterView");return e(),Q(A,null,[kN,h("div",null,[h("div",CN,[h("ul",FN,[h("li",null,[y(d,{to:"/_beach_info"},{default:cl(()=>[r("_Beach_Info.vue")]),_:1})]),h("li",null,[y(d,{to:"/addbeach"},{default:cl(()=>[r("AddBeach.vue")]),_:1})]),h("li",null,[y(d,{to:"/beachList"},{default:cl(()=>[r("BeachList.vue")]),_:1})]),h("li",null,[y(d,{to:"/editbeach"},{default:cl(()=>[r("EditBeach.vue")]),_:1})]),h("li",null,[y(d,{to:"/routerbeach"},{default:cl(()=>[r("router_Beach.vue")]),_:1})]),h("li",null,[y(d,{to:"/confirmDeletePopup"},{default:cl(()=>[r("ConfirmDeletePopup.vue")]),_:1})])])]),y(b),ON]),y(B)],64)}}},KN=Tl(gN,[["__scopeId","data-v-c0da6ecf"]]),EN=l=>(xl("data-v-faca44a6"),l=l(),Dl(),l),QN=EN(()=>h("div",null,"這是_Beach_Info",-1)),HN=`
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
`,PN={__name:"_Beach_Info",setup(l){return(Z,c)=>(e(),Q(A,null,[QN,h("div",{class:"content"},[h("pre",null,"      "+fl(HN)+`
    `)])],64))}},Bm=Tl(PN,[["__scopeId","data-v-faca44a6"]]),vN=l=>(xl("data-v-315d8245"),l=l(),Dl(),l),rN=vN(()=>h("div",null,"這是AddBeach",-1)),BN=`
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

`,AN={__name:"AddBeach",setup(l){return(Z,c)=>(e(),Q(A,null,[rN,h("div",{class:"content"},[h("pre",null,"      "+fl(BN)+`
    `)])],64))}},fN=Tl(AN,[["__scopeId","data-v-315d8245"]]),_N=l=>(xl("data-v-21c2ba9b"),l=l(),Dl(),l),qN=_N(()=>h("div",null,"這是BeachList",-1)),$N=`
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

`,li={__name:"BeachList",setup(l){return(Z,c)=>(e(),Q(A,null,[qN,h("div",{class:"content"},[h("pre",null,"      "+fl($N)+`
    `)])],64))}},Zi=Tl(li,[["__scopeId","data-v-21c2ba9b"]]),ci=l=>(xl("data-v-3763e4f1"),l=l(),Dl(),l),di=ci(()=>h("div",null,"這是EditBeach",-1)),bi=`
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

`,mi={__name:"EditBeach",setup(l){return(Z,c)=>(e(),Q(A,null,[di,h("div",{class:"content"},[h("pre",null,"      "+fl(bi)+`
    `)])],64))}},Wi=Tl(mi,[["__scopeId","data-v-3763e4f1"]]),Gi=l=>(xl("data-v-f0f2e55e"),l=l(),Dl(),l),si=Gi(()=>h("div",null,"這是_router_Beach",-1)),ti=`
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


`,ui={__name:"router_Beach",setup(l){return(Z,c)=>(e(),Q(A,null,[si,h("div",{class:"content"},[h("pre",null,"      "+fl(ti)+`
    `)])],64))}},Ni=Tl(ui,[["__scopeId","data-v-f0f2e55e"]]),ii=l=>(xl("data-v-69fb1a2b"),l=l(),Dl(),l),Mi=ii(()=>h("div",null,"這是ConfirmDeletePopup",-1)),Yi=`
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


`,Xi={__name:"ConfirmDeletePopup",setup(l){return(Z,c)=>(e(),Q(A,null,[Mi,h("div",{class:"content"},[h("pre",null,`      這放在components\\
      由BeachList 呼叫
      `+fl(Yi)+`
    `)])],64))}},hi=Tl(Xi,[["__scopeId","data-v-69fb1a2b"]]),yi=`
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
`,ai={__name:"_2_vscode",setup(l){return B.scrollToTop=!0,(Z,c)=>(e(),Q(A,null,[h("div",{innerHTML:yi}),y(B)],64))}},Sb=l=>(xl("data-v-7775a5f3"),l=l(),Dl(),l),Ti=Sb(()=>h("div",null,"這是VS Code 功能頁",-1)),Vi={id:"Vite_to_github",class:"content"},Li=Sb(()=>h("div",null,[r("1.vS Code文件標簽欄多行顯示 "),h("a",{href:"https://blog.csdn.net/mj475002864/article/details/115456004",target:"_blank"}," https://blog.csdn.net/mj475002864/article/details/115456004 "),h("p",null,"ctrl + shift + p => 查詢 Open Workspace Settings => Wrap Tabs 打勾 ")],-1)),ni={key:0},pi=Sb(()=>h("div",null,[r("3.vs code 開發Extension "),h("p",null,"TypeScript Vue Plugin(Volar)"),h("p",null,"Vue Language Features"),h("p",null,"Vue - Official")],-1)),Ii={__name:"index",setup(l){let Z=D(!1);return B.scrollToTop=!0,(c,d)=>(e(),Q(A,null,[Ti,h("div",Vi,[Li,h("div",null,[r("2.vs code 快捷鍵 "),h("button",{onClick:d[0]||(d[0]=b=>ol(Z)?Z.value=!ll(Z):Z=!ll(Z))},"Toggle"),y(dZ,null,{default:cl(()=>[ll(Z)?(e(),Q("div",ni,[y(ai)])):vl("",!0)]),_:1})]),pi]),y(B)],64))}},zi=Tl(Ii,[["__scopeId","data-v-7775a5f3"]]),oi=xc('<div data-v-bb9159e2>vue3+Naive UI</div><div id="Vite_to_github" class="content" data-v-bb9159e2><div data-v-bb9159e2>1.ue3+Naive UI數據表格基本使用方式 <a href="https://blog.csdn.net/weixin_54570626/article/details/129407702" target="_blank" data-v-bb9159e2> https://blog.csdn.net/weixin_54570626/article/details/129407702 </a></div><div data-v-bb9159e2>2.naive ui 數據表格操作加入兩個按鈕解決辦法 <a href="https://blog.csdn.net/uglyduckling0412/article/details/131438996" target="_blank" data-v-bb9159e2> https://blog.csdn.net/uglyduckling0412/article/details/131438996 </a></div><div data-v-bb9159e2>3.Naive UI之Data Table <a href="https://blog.csdn.net/aliceyang2012/article/details/127801611" target="_blank" data-v-bb9159e2> https://blog.csdn.net/aliceyang2012/article/details/127801611 </a></div><div data-v-bb9159e2>4.vue3結合naiveui的表單規則寫法（回調） <a href="https://www.cnblogs.com/lingern/p/16190795.html" target="_blank" data-v-bb9159e2> https://www.cnblogs.com/lingern/p/16190795.html </a></div></div>',2),ei={__name:"index",setup(l){return D(!1),B.scrollToTop=!0,(Z,c)=>(e(),Q(A,null,[oi,y(B)],64))}},Ri=Tl(ei,[["__scopeId","data-v-bb9159e2"]]),wi=xc('<div data-v-97fd3d78>這是影音頁</div><div id="Vite_to_github" class="content" data-v-97fd3d78><div data-v-97fd3d78>1.Vue3 CRUD + bootstrap <a href="https://www.youtube.com/watch?v=PrKh6GemOyg" target="_blank" data-v-97fd3d78> https://www.youtube.com/watch?v=PrKh6GemOyg </a></div><div data-v-97fd3d78>2.後台課程管理系統-Vue3版 <a href="https://www.youtube.com/watch?v=yZMTHoGSuVQ&amp;list=PL_vrngOaamYsIovhZ3Cd9M2vPhm3yRTnG" target="_blank" data-v-97fd3d78> https://www.youtube.com/watch?v=yZMTHoGSuVQ&amp;list=PL_vrngOaamYsIovhZ3Cd9M2vPhm3yRTnG </a></div><div data-v-97fd3d78>3.2024年不看后悔的Vue3+.NET7+WebAPI从零手写后台管理系统 <a href="https://www.bilibili.com/video/BV1Km411o7ip?p=1&amp;vd_source=1a5937a80fc962029ba6a7b9ee9a1654" target="_blank" data-v-97fd3d78> https://www.bilibili.com/video/BV1Km411o7ip?p=1&amp;vd_source=1a5937a80fc962029ba6a7b9ee9a1654 </a><a href="https://search.bilibili.com/all?vt=75651059&amp;keyword=2024%E5%B9%B4%E4%B8%8D%E7%9C%8B%E5%90%8E%E6%82%94%E7%9A%84Vue3%2B.NET7%2BWebAPI&amp;from_source=webtop_search&amp;spm_id_from=333.1007&amp;search_source=5" target="_blank" data-v-97fd3d78> https://search.bilibili.com/all?vt=75651059&amp;keyword=2024%E5%B9%B4%E4%B8%8D%E7%9C%8B%E5%90%8E%E6%82%94%E7%9A%84Vue3%2B.NET7%2BWebAPI&amp;from_source=webtop_search&amp;spm_id_from=333.1007&amp;search_source=5 </a></div><div data-v-97fd3d78>4.2023全新C#完全零基础入门教程（附源码） <a href="https://www.bilibili.com/read/cv25507935/" target="_blank" data-v-97fd3d78> https://www.bilibili.com/read/cv25507935/ </a></div></div>',2),Si={__name:"index",setup(l){return D(!1),B.scrollToTop=!0,(Z,c)=>(e(),Q(A,null,[wi,y(B)],64))}},xi=Tl(Si,[["__scopeId","data-v-97fd3d78"]]),Di=h("div",null,"【尚硅谷】ES6教程——涵盖ES6-ES11",-1),Ji=`
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
`,ji={__name:"index",setup(l){return B.scrollToTop=!0,(Z,c)=>(e(),Q(A,null,[Di,h("div",{innerHTML:Ji}),y(B)],64))}},Ui=l=>(xl("data-v-578d3ec3"),l=l(),Dl(),l),ki=Ui(()=>h("div",null,"我是DotnetAPI_Angular頁面",-1)),Ci=`
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
  `,Fi={__name:"index",setup(l){return B.scrollToTop=!0,(Z,c)=>(e(),Q(A,null,[ki,h("div",null,[h("div",{innerHTML:Ci})]),y(B)],64))}},Oi=Tl(Fi,[["__scopeId","data-v-578d3ec3"]]),gi=l=>(xl("data-v-137366f4"),l=l(),Dl(),l),Ki=gi(()=>h("div",null,"WITS Collge 成就AI⼈才職涯",-1)),Ei=`
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
`,Qi={__name:"index",setup(l){B.scrollToTop=!0;const Z=D({value:"rgba(193,204,204)",btn:!0,theme:"light"});return(c,d)=>(e(),Q(A,null,[h("div",null,[h("div",{class:"demo",onClick:d[0]||(d[0]=b=>c.colorEvent(b,Z.value)),style:Pl({backgroundColor:Z.value.value})},null,4)]),Ki,Ul(h("input",{"onUpdate:modelValue":d[1]||(d[1]=b=>Z.value.value=b)},null,512),[[Kl,Z.value.value]]),h("div",{innerHTML:Ei,style:Pl({color:Z.value.value})},null,4),y(B)],64))}},Hi=Tl(Qi,[["__scopeId","data-v-137366f4"]]),Pi=l=>(xl("data-v-42b1b9e1"),l=l(),Dl(),l),vi=Pi(()=>h("div",null,"Vue3+.NET7最新框架实战，手写电商管理后台 | 2023全新录制，前后分离架构(C#/.NET6/.NET Core)B1106",-1)),ri=`
  <div id="Vue3-rabbit" style="display:flex; justify-content: center; background-color: #282923; font-size: 14px;">
    <pre>
	//===============================================================================================//
	<a href="https://www.bilibili.com/video/BV16s4y1m7bd?vd_source=1a5937a80fc962029ba6a7b9ee9a1654&spm_id_from=333.788.videopod.episodes&p=25" target="_blank">https://www.bilibili.com/video/BV16s4y1m7bd?vd_source=1a5937a80fc962029ba6a7b9....</a>
	<a href="https://www.bilibili.com/video/BV1KZ421a7gV?spm_id_from=333.788.videopod.episodes&vd_source=1a5937a80fc962029ba6a7b9ee9a1654&p=22" target="_blank">
	https://www.bilibili.com/video/BV1KZ421a7gV?spm_id_from=333.788.videopod.episod2....</a>

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
		 import axios form "axios"

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
  <div id="Vue3-rabbit" style="display:flex; justify-content: center; background-color: #282923; font-size: 14px;">
    <pre>
     ZhaoxiPotal.Common
     
     Db/DBContext.cs
     =============================================================
     namespace ZhaoxiPotal.Common.Db
     {
         /// <summary>
         /// 數據庫連接對象
         /// </summary>
         public class DbContext
         {
             public static SqlSugarClient db = new SqlSugarClient(new ConnectionConfig()
             {
                 ConnectionString = "Data Source=127.0.0.1;Initial Catalog=Web;User ID=Web;Password=123456;
                 MultipleActiveresultSets=True;encrypt=true;trustservercertificate=true", // 連接字符串
                 DbType = DbType.SqlServer, // 數據庫類型
                 IsAutoCloseConnection = true, // 不設成true要手動close
             });
             }
         }
         
     MemoryHelper.cs
     =============================================================
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
     
     
     Tool.cs
     =============================================================
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
                 using Bitmap bitmapText = new(Convert.ToInt32(Math.Ceiling(size.Width)), 
                   Convert.ToInt32(Math.Ceiling(size.Height)));
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
     
     ZhaoxiPotal.Model
     Entities/Users.cs
     =============================================================
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
     
     Enum/EnumUserType.cs
     =============================================================
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
     
     
     Courses.cs
     =============================================================
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
     
     
     ZhaoxiPotal.Service
     
     Config/AutoMapperConfigs.cs
     =============================================================
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
                 CreateMap<Users, UserDto>();
                 CreateMap<UserDto, Users>();
                 CreateMap<InputUserDto, Users>();
             }
         }
     }
     
     User/Dto/InputUserDto.cs
     =============================================================
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
     
     User/Dto/LoginDto.cs
     =============================================================
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
     
     User/Dto/UserDto.cs
     =============================================================
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
     
     
     IUserService.cs
     =============================================================
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
     =============================================================
     
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
                 return await DbContext.db.Queryable<Users>().FirstAsync(m => m.QQ.Equals(login.QQ) && m.PassWord.Equals(login.PassWord));
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
                 if (!DbContext.db.Queryable<Users>().Any(m => m.QQ.Equals(input.QQ) || m.Mobile.Equals(input.Mobile)))
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
                 res.Add(new Courses() { Id = 1, Name = "20210327Course001Redis-1", Path = "https://pan.baidu.com/s/12312", ValidCode = "123456", Content = "1" });
                 res.Add(new Courses() { Id = 2, Name = "20210327Course001Redis-1", Path = "https://pan.baidu.com/s/12312", ValidCode = "123456", Content = "1" });
                 res.Add(new Courses() { Id = 3, Name = "20210327Course001Redis-1", Path = "https://pan.baidu.com/s/12312", ValidCode = "123456", Content = "1" });
                 res.Add(new Courses() { Id = 4, Name = "20210327Course001Redis-1", Path = "https://pan.baidu.com/s/12312", ValidCode = "123456", Content = "1" });
                 res.Add(new Courses() { Id = 5, Name = "20210327Course001Redis-1", Path = "https://pan.baidu.com/s/12312", ValidCode = "123456", Content = "1" });
                 res.Add(new Courses() { Id = 6, Name = "20210327Course001Redis-1", Path = "https://pan.baidu.com/s/12312", ValidCode = "123456", Content = "1" });
                 return res;
             }
         }
     }


     ZhaoxiPotal.WepAPI

     Propertis/launchSettings.json
     =============================================================

     {
       "$schema": "http://json.schemastore.org/launchsettings.json",
       "iisSettings": {
         "windowsAuthentication": false,
         "anonymousAuthentication": true,
         "iisExpress": {
           "applicationUrl": "http://localhost:24519",
           "sslPort": 44368
         }
       },
       "profiles": {
         "http": {
           "commandName": "Project",
           "dotnetRunMessages": true,
           "launchBrowser": true,
           "launchUrl": "swagger",
           "applicationUrl": "http://localhost:5088",
           "environmentVariables": {
             "ASPNETCORE_ENVIRONMENT": "Development"
           }
         },
         "https": {
           "commandName": "Project",
           "dotnetRunMessages": true,
           "launchBrowser": true,
           "launchUrl": "swagger",
           "applicationUrl": "https://localhost:7079;http://localhost:5259",
           "environmentVariables": {
             "ASPNETCORE_ENVIRONMENT": "Development"
           }
         },
         "IIS Express": {
           "commandName": "IISExpress",
           "launchBrowser": true,
           "launchUrl": "swagger",
           "environmentVariables": {
             "ASPNETCORE_ENVIRONMENT": "Development"
           }
         }
       }
     }

     CfgFile/log4net.Config
     =============================================================
     <"?xml version="1.0" encoding="utf-8" ?>
     <"log4net>
     	<"!-- Define some outpu appenders -->
     	<"appender name="DefaultAppender" type="log4net.Appender.RollingFileAppender">
     		<"!--file value="LogFiles/Root1/"/>存放log路徑–-->
     		<"file value="log4/log.txt" />
     
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
     			<"!--內容格式-->
     			<"conversionPattern value="%date [%thread] %-5level  %logger - %message%newline" />
     		<"/layout>
     	<"/appender>
     	<"appender name="WebAppender" type="log4net.Appender.RollingFileAppender">
     		<"!-- 存放log路徑 -->
     		<"file value="LogFiles/Web1/"/>
     		<"staticLogFileName value="false"/>
     		<"appendToFile value="true"/>
     		<"rollingStyle value="Composite"/>
     		<"maxSizeRollBackups value="-1" />
     		<"maximumFileSize value="5KB" />
     		<"!--–log檔的命名–-->
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

     Controller/LoginController.cs
     =============================================================
     using Microsoft.AspNetCore.Http;
     using Microsoft.AspNetCore.Mvc;
     using ZhaoxiPotal.Common;
     using ZhaoxiPotal.Service.User;
     using ZhaoxiPotal.Service.User.Dto;
     using ZhaoxiPotal.WepAPI.Utility;
     
     namespace ZhaoxiPotal.WepAPI.Controllers
     {
         [Route("[controller]/[Action]")]
         [ApiController]
         public class LoginController : ControllerBase
         {
             private readonly IUserService _userService;
             private readonly ICustomJWTService _iJWTService;
     
             public LoginController(IUserService userService, ICustomJWTService iJWTService)
             {
                 _userService = userService;
                 _iJWTService = iJWTService;
             }
     
             // 驗證碼
             [HttpGet]
             public IActionResult GetValidateCodeImages(string t)
             {
                 System.Console.WriteLine(t);
                 var validateCodeString = Tools.CreateValidateString();
                 //將驗證碼記入緩存中
                 MemoryHelper.SetMemory(t, validateCodeString, 1);
     
                 //接收圖片返回的二進制流
                 byte[] buffer = Tools.CreateValidateCodeBuffer(validateCodeString);
                 return File(buffer, @"image/jpeg");
             }
     
     
             //登入
             [HttpGet("{qq}/{pwd}/{validateKey}/{validateCode}")]
             public string CheckLogin(string qq, string pwd, string validateKey, string validateCode)
             {
                 var currCode = MemoryHelper.GetMemory(validateKey);
                 if (currCode == null)
                 {
                     return "";
                 }
                 if (currCode.ToString() == validateCode)
                 {
                     LoginDto loginDto = new LoginDto();
                     loginDto.QQ = qq;
                     loginDto.PassWord = pwd;
                     var user = _userService.CheckLogin(loginDto).Result;
                     if (user != null)
                     {
                         return _iJWTService.GetToken(user);
                         //return "";
                     }
                     else
                     {
                         return "";
                     }
     
                 }
                 else return "";
             }
         }
     }

     Controller/UserController.cs
     =============================================================
     using Microsoft.AspNetCore.Authorization;
     using Microsoft.AspNetCore.Http;
     using Microsoft.AspNetCore.Mvc;
     using System.Runtime.CompilerServices;
     using ZhaoxiPotal.Model;
     using ZhaoxiPotal.Model.Enum;
     using ZhaoxiPotal.Service.User;
     using ZhaoxiPotal.Service.User.Dto;
     
     namespace WepAPI.Controllers
     {
         [Route("[controller]/[Action]")]
         [ApiController]
         public class UserController : ControllerBase
         {
             private readonly ILogger<UserController> _logger;
             public IUserService _userService;
             public UserController(ILogger<UserController> logger, IUserService userService)
             {
                 _logger = logger;
                 _userService = userService;
             }
     
             [HttpGet]
             public string Get()
             {
                 _logger.LogInformation("這是一個Get請求！");
                 return "這是一個Get請求。";
             }
     
     
             //用戶註冊
             [HttpPost]
             public ActionResult<UserDto> RegistUser([FromBody] InputUserDto input)
             {
                 try
                 {
                     var res = _userService.AddUser(input);
                     return res;
                 }
                 catch (Exception ex)
                 {
                     JsonResult result = new JsonResult(ex)
                     {
                         StatusCode = 201,
                     };
                     return result;
                 }
             }
     
     
             // Aop面向切面編程
             // 面向切面編程的最主要的使用場景，就是將業務分離，保證方法中業的純潔性
             [HttpGet]
             [Authorize]  // 這是一個特性
             public List<Courses> GetCourses()
             {
                 _logger.LogInformation("進入GetCourses請求...");
                 int userType = Convert.ToInt32(HttpContext.User.Claims.ToList()[3].Value); // UserType
                 if(userType == (int)EnumUserType.VIP用戶)
                 {
                     return _userService.GetCourses();
                 }
                 return new List<Courses>();
             }
         }
     }
     
     Utility/ICustomJWTService.cs
     =============================================================
     using ZhaoxiPotal.Model.Entities;
     
     namespace ZhaoxiPotal.WepAPI.Utility
     {
         public interface ICustomJWTService
         {
             //獲取token
             string GetToken(Users users);
         }
     }

     Utility/CustomJWTService.cs
     =============================================================
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
             #endregion
     
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
                     new Claim("nickName", users.NickName),
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

     Utility/JWTTokenOptions.cs
     =============================================================
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



    </pre>
  </div>
`,uY={__name:"index",setup(l){B.scrollToTop=!0;const Z=D("#c1cccc"),c=D({value:"rgba(193,204,204)",btn:!0,theme:"light"});return(d,b)=>(e(),Q(A,null,[h("div",null,[h("div",{class:"demo",onClick:b[0]||(b[0]=m=>d.colorEvent(m,c.value)),style:Pl({backgroundColor:c.value.value})},null,4)]),sY,Ul(h("input",{"onUpdate:modelValue":b[1]||(b[1]=m=>Z.value=m)},null,512),[[Kl,Z.value]]),h("div",{innerHTML:tY,style:Pl({color:c.value.value})},null,4),y(B)],64))}},NY=Tl(uY,[["__scopeId","data-v-65e2dc93"]]),iY=Nu({history:gt("/vue-my-note/"),routes:[{path:"/",component:Lu,children:[{path:"",component:Du},{path:"/kaiWebapi2",component:ru},{path:"/vue3",component:fu},{path:"/download",component:lN},{path:"/others",component:UN,children:[{path:"/_4_deployVite",component:eW}]},{path:"/dotnet7_vue3",component:KN,children:[{path:"",component:Bm},{path:"/_beach_info",component:Bm},{path:"/addbeach",component:fN},{path:"/beachList",component:Zi},{path:"/editbeach",component:Wi},{path:"/routerbeach",component:Ni},{path:"/confirmDeletePopup",component:hi}]},{path:"/vscode_function",component:zi},{path:"/Naive_ui",component:Ri},{path:"/video",component:xi},{path:"/es6",component:ji},{path:"/dotnetapi_angular",component:Oi},{path:"/ai",component:Hi},{path:"/Vue3+.NET7",component:Ai},{path:"/pdf_vue3",component:WM,children:[{path:"",component:fm},{path:"/1-vue3",component:fm},{path:"/2-net7",component:eM},{path:"/3-run",component:JM},{path:"/4-js",component:OM}]},{path:"/vuejs_auth",component:WY},{path:"/vuejs_auth2",component:NY}]}]}),Vd=Z2(Yu);Vd.use(Wt);Vd.use(tt());Vd.use(iY);Vd.mount("#app");