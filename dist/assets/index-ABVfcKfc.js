var S0=Object.defineProperty;var e0=(l,Z,c)=>Z in l?S0(l,Z,{enumerable:!0,configurable:!0,writable:!0,value:c}):l[Z]=c;var pZ=(l,Z,c)=>e0(l,typeof Z!="symbol"?Z+"":Z,c);(function(){const Z=document.createElement("link").relList;if(Z&&Z.supports&&Z.supports("modulepreload"))return;for(const b of document.querySelectorAll('link[rel="modulepreload"]'))d(b);new MutationObserver(b=>{for(const m of b)if(m.type==="childList")for(const W of m.addedNodes)W.tagName==="LINK"&&W.rel==="modulepreload"&&d(W)}).observe(document,{childList:!0,subtree:!0});function c(b){const m={};return b.integrity&&(m.integrity=b.integrity),b.referrerPolicy&&(m.referrerPolicy=b.referrerPolicy),b.crossOrigin==="use-credentials"?m.credentials="include":b.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function d(b){if(b.ep)return;b.ep=!0;const m=c(b);fetch(b.href,m)}})();/**
* @vue/shared v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function qd(l,Z){const c=new Set(l.split(","));return d=>c.has(d)}const nl={},$Z=[],bZ=()=>{},x0=()=>!1,Zd=l=>l.charCodeAt(0)===111&&l.charCodeAt(1)===110&&(l.charCodeAt(2)>122||l.charCodeAt(2)<97),$d=l=>l.startsWith("onUpdate:"),jl=Object.assign,lb=(l,Z)=>{const c=l.indexOf(Z);c>-1&&l.splice(c,1)},D0=Object.prototype.hasOwnProperty,Nl=(l,Z)=>D0.call(l,Z),v=Array.isArray,lc=l=>cd(l)==="[object Map]",_m=l=>cd(l)==="[object Set]",A=l=>typeof l=="function",Rl=l=>typeof l=="string",kZ=l=>typeof l=="symbol",pl=l=>l!==null&&typeof l=="object",qm=l=>(pl(l)||A(l))&&A(l.then)&&A(l.catch),$m=Object.prototype.toString,cd=l=>$m.call(l),J0=l=>cd(l).slice(8,-1),lW=l=>cd(l)==="[object Object]",Zb=l=>Rl(l)&&l!=="NaN"&&l[0]!=="-"&&""+parseInt(l,10)===l,tc=qd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),dd=l=>{const Z=Object.create(null);return c=>Z[c]||(Z[c]=l(c))},j0=/-(\w)/g,MZ=dd(l=>l.replace(j0,(Z,c)=>c?c.toUpperCase():"")),U0=/\B([A-Z])/g,BZ=dd(l=>l.replace(U0,"-$1").toLowerCase()),bd=dd(l=>l.charAt(0).toUpperCase()+l.slice(1)),Td=dd(l=>l?`on${bd(l)}`:""),jZ=(l,Z)=>!Object.is(l,Z),gc=(l,...Z)=>{for(let c=0;c<l.length;c++)l[c](...Z)},ZW=(l,Z,c,d=!1)=>{Object.defineProperty(l,Z,{configurable:!0,enumerable:!1,writable:d,value:c})},jd=l=>{const Z=parseFloat(l);return isNaN(Z)?l:Z},k0=l=>{const Z=Rl(l)?Number(l):NaN;return isNaN(Z)?l:Z};let jb;const cW=()=>jb||(jb=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function $l(l){if(v(l)){const Z={};for(let c=0;c<l.length;c++){const d=l[c],b=Rl(d)?K0(d):$l(d);if(b)for(const m in b)Z[m]=b[m]}return Z}else if(Rl(l)||pl(l))return l}const C0=/;(?![^(]*\))/g,F0=/:([^]+)/,O0=/\/\*[^]*?\*\//g;function K0(l){const Z={};return l.replace(O0,"").split(C0).forEach(c=>{if(c){const d=c.split(F0);d.length>1&&(Z[d[0].trim()]=d[1].trim())}}),Z}function cb(l){let Z="";if(Rl(l))Z=l;else if(v(l))for(let c=0;c<l.length;c++){const d=cb(l[c]);d&&(Z+=d+" ")}else if(pl(l))for(const c in l)l[c]&&(Z+=c+" ");return Z.trim()}const g0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",E0=qd(g0);function dW(l){return!!l||l===""}const bW=l=>!!(l&&l.__v_isRef===!0),Bl=l=>Rl(l)?l:l==null?"":v(l)||pl(l)&&(l.toString===$m||!A(l.toString))?bW(l)?Bl(l.value):JSON.stringify(l,mW,2):String(l),mW=(l,Z)=>bW(Z)?mW(l,Z.value):lc(Z)?{[`Map(${Z.size})`]:[...Z.entries()].reduce((c,[d,b],m)=>(c[ad(d,m)+" =>"]=b,c),{})}:_m(Z)?{[`Set(${Z.size})`]:[...Z.values()].map(c=>ad(c))}:kZ(Z)?ad(Z):pl(Z)&&!v(Z)&&!lW(Z)?String(Z):Z,ad=(l,Z="")=>{var c;return kZ(l)?`Symbol(${(c=l.description)!=null?c:Z})`:l};/**
* @vue/reactivity v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let NZ;class WW{constructor(Z=!1){this.detached=Z,this._active=!0,this.effects=[],this.cleanups=[],this.parent=NZ,!Z&&NZ&&(this.index=(NZ.scopes||(NZ.scopes=[])).push(this)-1)}get active(){return this._active}run(Z){if(this._active){const c=NZ;try{return NZ=this,Z()}finally{NZ=c}}}on(){NZ=this}off(){NZ=this.parent}stop(Z){if(this._active){let c,d;for(c=0,d=this.effects.length;c<d;c++)this.effects[c].stop();for(c=0,d=this.cleanups.length;c<d;c++)this.cleanups[c]();if(this.scopes)for(c=0,d=this.scopes.length;c<d;c++)this.scopes[c].stop(!0);if(!this.detached&&this.parent&&!Z){const b=this.parent.scopes.pop();b&&b!==this&&(this.parent.scopes[this.index]=b,b.index=this.index)}this.parent=void 0,this._active=!1}}}function Q0(l){return new WW(l)}function H0(l,Z=NZ){Z&&Z.active&&Z.effects.push(l)}function P0(){return NZ}let PZ;class db{constructor(Z,c,d,b){this.fn=Z,this.trigger=c,this.scheduler=d,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,H0(this,b)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,CZ();for(let Z=0;Z<this._depsLength;Z++){const c=this.deps[Z];if(c.computed&&(v0(c.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),FZ()}return this._dirtyLevel>=4}set dirty(Z){this._dirtyLevel=Z?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let Z=DZ,c=PZ;try{return DZ=!0,PZ=this,this._runnings++,Ub(this),this.fn()}finally{kb(this),this._runnings--,PZ=c,DZ=Z}}stop(){this.active&&(Ub(this),kb(this),this.onStop&&this.onStop(),this.active=!1)}}function v0(l){return l.value}function Ub(l){l._trackId++,l._depsLength=0}function kb(l){if(l.deps.length>l._depsLength){for(let Z=l._depsLength;Z<l.deps.length;Z++)GW(l.deps[Z],l);l.deps.length=l._depsLength}}function GW(l,Z){const c=l.get(Z);c!==void 0&&Z._trackId!==c&&(l.delete(Z),l.size===0&&l.cleanup())}let DZ=!0,Ud=0;const sW=[];function CZ(){sW.push(DZ),DZ=!1}function FZ(){const l=sW.pop();DZ=l===void 0?!0:l}function bb(){Ud++}function mb(){for(Ud--;!Ud&&kd.length;)kd.shift()()}function NW(l,Z,c){if(Z.get(l)!==l._trackId){Z.set(l,l._trackId);const d=l.deps[l._depsLength];d!==Z?(d&&GW(d,l),l.deps[l._depsLength++]=Z):l._depsLength++}}const kd=[];function MW(l,Z,c){bb();for(const d of l.keys()){let b;d._dirtyLevel<Z&&(b??(b=l.get(d)===d._trackId))&&(d._shouldSchedule||(d._shouldSchedule=d._dirtyLevel===0),d._dirtyLevel=Z),d._shouldSchedule&&(b??(b=l.get(d)===d._trackId))&&(d.trigger(),(!d._runnings||d.allowRecurse)&&d._dirtyLevel!==2&&(d._shouldSchedule=!1,d.scheduler&&kd.push(d.scheduler)))}mb()}const uW=(l,Z)=>{const c=new Map;return c.cleanup=l,c.computed=Z,c},Cd=new WeakMap,vZ=Symbol(""),Fd=Symbol("");function Al(l,Z,c){if(DZ&&PZ){let d=Cd.get(l);d||Cd.set(l,d=new Map);let b=d.get(c);b||d.set(c,b=uW(()=>d.delete(c))),NW(PZ,b)}}function VZ(l,Z,c,d,b,m){const W=Cd.get(l);if(!W)return;let G=[];if(Z==="clear")G=[...W.values()];else if(c==="length"&&v(l)){const s=Number(d);W.forEach((M,N)=>{(N==="length"||!kZ(N)&&N>=s)&&G.push(M)})}else switch(c!==void 0&&G.push(W.get(c)),Z){case"add":v(l)?Zb(c)&&G.push(W.get("length")):(G.push(W.get(vZ)),lc(l)&&G.push(W.get(Fd)));break;case"delete":v(l)||(G.push(W.get(vZ)),lc(l)&&G.push(W.get(Fd)));break;case"set":lc(l)&&G.push(W.get(vZ));break}bb();for(const s of G)s&&MW(s,4);mb()}const r0=qd("__proto__,__v_isRef,__isVue"),YW=new Set(Object.getOwnPropertyNames(Symbol).filter(l=>l!=="arguments"&&l!=="caller").map(l=>Symbol[l]).filter(kZ)),Cb=B0();function B0(){const l={};return["includes","indexOf","lastIndexOf"].forEach(Z=>{l[Z]=function(...c){const d=Yl(this);for(let m=0,W=this.length;m<W;m++)Al(d,"get",m+"");const b=d[Z](...c);return b===-1||b===!1?d[Z](...c.map(Yl)):b}}),["push","pop","shift","unshift","splice"].forEach(Z=>{l[Z]=function(...c){CZ(),bb();const d=Yl(this)[Z].apply(this,c);return mb(),FZ(),d}}),l}function A0(l){kZ(l)||(l=String(l));const Z=Yl(this);return Al(Z,"has",l),Z.hasOwnProperty(l)}class XW{constructor(Z=!1,c=!1){this._isReadonly=Z,this._isShallow=c}get(Z,c,d){const b=this._isReadonly,m=this._isShallow;if(c==="__v_isReactive")return!b;if(c==="__v_isReadonly")return b;if(c==="__v_isShallow")return m;if(c==="__v_raw")return d===(b?m?sG:yW:m?hW:iW).get(Z)||Object.getPrototypeOf(Z)===Object.getPrototypeOf(d)?Z:void 0;const W=v(Z);if(!b){if(W&&Nl(Cb,c))return Reflect.get(Cb,c,d);if(c==="hasOwnProperty")return A0}const G=Reflect.get(Z,c,d);return(kZ(c)?YW.has(c):r0(c))||(b||Al(Z,"get",c),m)?G:ol(G)?W&&Zb(c)?G:G.value:pl(G)?b?TW(G):ec(G):G}}class tW extends XW{constructor(Z=!1){super(!1,Z)}set(Z,c,d,b){let m=Z[c];if(!this._isShallow){const s=rZ(m);if(!mc(d)&&!rZ(d)&&(m=Yl(m),d=Yl(d)),!v(Z)&&ol(m)&&!ol(d))return s?!1:(m.value=d,!0)}const W=v(Z)&&Zb(c)?Number(c)<Z.length:Nl(Z,c),G=Reflect.set(Z,c,d,b);return Z===Yl(b)&&(W?jZ(d,m)&&VZ(Z,"set",c,d):VZ(Z,"add",c,d)),G}deleteProperty(Z,c){const d=Nl(Z,c);Z[c];const b=Reflect.deleteProperty(Z,c);return b&&d&&VZ(Z,"delete",c,void 0),b}has(Z,c){const d=Reflect.has(Z,c);return(!kZ(c)||!YW.has(c))&&Al(Z,"has",c),d}ownKeys(Z){return Al(Z,"iterate",v(Z)?"length":vZ),Reflect.ownKeys(Z)}}class f0 extends XW{constructor(Z=!1){super(!0,Z)}set(Z,c){return!0}deleteProperty(Z,c){return!0}}const _0=new tW,q0=new f0,$0=new tW(!0);const Wb=l=>l,md=l=>Reflect.getPrototypeOf(l);function Dc(l,Z,c=!1,d=!1){l=l.__v_raw;const b=Yl(l),m=Yl(Z);c||(jZ(Z,m)&&Al(b,"get",Z),Al(b,"get",m));const{has:W}=md(b),G=d?Wb:c?Nb:pc;if(W.call(b,Z))return G(l.get(Z));if(W.call(b,m))return G(l.get(m));l!==b&&l.get(Z)}function Jc(l,Z=!1){const c=this.__v_raw,d=Yl(c),b=Yl(l);return Z||(jZ(l,b)&&Al(d,"has",l),Al(d,"has",b)),l===b?c.has(l):c.has(l)||c.has(b)}function jc(l,Z=!1){return l=l.__v_raw,!Z&&Al(Yl(l),"iterate",vZ),Reflect.get(l,"size",l)}function Fb(l,Z=!1){!Z&&!mc(l)&&!rZ(l)&&(l=Yl(l));const c=Yl(this);return md(c).has.call(c,l)||(c.add(l),VZ(c,"add",l,l)),this}function Ob(l,Z,c=!1){!c&&!mc(Z)&&!rZ(Z)&&(Z=Yl(Z));const d=Yl(this),{has:b,get:m}=md(d);let W=b.call(d,l);W||(l=Yl(l),W=b.call(d,l));const G=m.call(d,l);return d.set(l,Z),W?jZ(Z,G)&&VZ(d,"set",l,Z):VZ(d,"add",l,Z),this}function Kb(l){const Z=Yl(this),{has:c,get:d}=md(Z);let b=c.call(Z,l);b||(l=Yl(l),b=c.call(Z,l)),d&&d.call(Z,l);const m=Z.delete(l);return b&&VZ(Z,"delete",l,void 0),m}function gb(){const l=Yl(this),Z=l.size!==0,c=l.clear();return Z&&VZ(l,"clear",void 0,void 0),c}function Uc(l,Z){return function(d,b){const m=this,W=m.__v_raw,G=Yl(W),s=Z?Wb:l?Nb:pc;return!l&&Al(G,"iterate",vZ),W.forEach((M,N)=>d.call(b,s(M),s(N),m))}}function kc(l,Z,c){return function(...d){const b=this.__v_raw,m=Yl(b),W=lc(m),G=l==="entries"||l===Symbol.iterator&&W,s=l==="keys"&&W,M=b[l](...d),N=c?Wb:Z?Nb:pc;return!Z&&Al(m,"iterate",s?Fd:vZ),{next(){const{value:Y,done:X}=M.next();return X?{value:Y,done:X}:{value:G?[N(Y[0]),N(Y[1])]:N(Y),done:X}},[Symbol.iterator](){return this}}}}function nZ(l){return function(...Z){return l==="delete"?!1:l==="clear"?void 0:this}}function lG(){const l={get(m){return Dc(this,m)},get size(){return jc(this)},has:Jc,add:Fb,set:Ob,delete:Kb,clear:gb,forEach:Uc(!1,!1)},Z={get(m){return Dc(this,m,!1,!0)},get size(){return jc(this)},has:Jc,add(m){return Fb.call(this,m,!0)},set(m,W){return Ob.call(this,m,W,!0)},delete:Kb,clear:gb,forEach:Uc(!1,!0)},c={get(m){return Dc(this,m,!0)},get size(){return jc(this,!0)},has(m){return Jc.call(this,m,!0)},add:nZ("add"),set:nZ("set"),delete:nZ("delete"),clear:nZ("clear"),forEach:Uc(!0,!1)},d={get(m){return Dc(this,m,!0,!0)},get size(){return jc(this,!0)},has(m){return Jc.call(this,m,!0)},add:nZ("add"),set:nZ("set"),delete:nZ("delete"),clear:nZ("clear"),forEach:Uc(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(m=>{l[m]=kc(m,!1,!1),c[m]=kc(m,!0,!1),Z[m]=kc(m,!1,!0),d[m]=kc(m,!0,!0)}),[l,c,Z,d]}const[ZG,cG,dG,bG]=lG();function Gb(l,Z){const c=Z?l?bG:dG:l?cG:ZG;return(d,b,m)=>b==="__v_isReactive"?!l:b==="__v_isReadonly"?l:b==="__v_raw"?d:Reflect.get(Nl(c,b)&&b in d?c:d,b,m)}const mG={get:Gb(!1,!1)},WG={get:Gb(!1,!0)},GG={get:Gb(!0,!1)};const iW=new WeakMap,hW=new WeakMap,yW=new WeakMap,sG=new WeakMap;function NG(l){switch(l){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function MG(l){return l.__v_skip||!Object.isExtensible(l)?0:NG(J0(l))}function ec(l){return rZ(l)?l:sb(l,!1,_0,mG,iW)}function VW(l){return sb(l,!1,$0,WG,hW)}function TW(l){return sb(l,!0,q0,GG,yW)}function sb(l,Z,c,d,b){if(!pl(l)||l.__v_raw&&!(Z&&l.__v_isReactive))return l;const m=b.get(l);if(m)return m;const W=MG(l);if(W===0)return l;const G=new Proxy(l,W===2?d:c);return b.set(l,G),G}function ic(l){return rZ(l)?ic(l.__v_raw):!!(l&&l.__v_isReactive)}function rZ(l){return!!(l&&l.__v_isReadonly)}function mc(l){return!!(l&&l.__v_isShallow)}function aW(l){return l?!!l.__v_raw:!1}function Yl(l){const Z=l&&l.__v_raw;return Z?Yl(Z):l}function LW(l){return Object.isExtensible(l)&&ZW(l,"__v_skip",!0),l}const pc=l=>pl(l)?ec(l):l,Nb=l=>pl(l)?TW(l):l;class pW{constructor(Z,c,d,b){this.getter=Z,this._setter=c,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new db(()=>Z(this._value),()=>Ec(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!b,this.__v_isReadonly=d}get value(){const Z=Yl(this);return(!Z._cacheable||Z.effect.dirty)&&jZ(Z._value,Z._value=Z.effect.run())&&Ec(Z,4),nW(Z),Z.effect._dirtyLevel>=2&&Ec(Z,2),Z._value}set value(Z){this._setter(Z)}get _dirty(){return this.effect.dirty}set _dirty(Z){this.effect.dirty=Z}}function uG(l,Z,c=!1){let d,b;const m=A(l);return m?(d=l,b=bZ):(d=l.get,b=l.set),new pW(d,b,m||!b,c)}function nW(l){var Z;DZ&&PZ&&(l=Yl(l),NW(PZ,(Z=l.dep)!=null?Z:l.dep=uW(()=>l.dep=void 0,l instanceof pW?l:void 0)))}function Ec(l,Z=4,c,d){l=Yl(l);const b=l.dep;b&&MW(b,Z)}function ol(l){return!!(l&&l.__v_isRef===!0)}function k(l){return IW(l,!1)}function YG(l){return IW(l,!0)}function IW(l,Z){return ol(l)?l:new XG(l,Z)}class XG{constructor(Z,c){this.__v_isShallow=c,this.dep=void 0,this.__v_isRef=!0,this._rawValue=c?Z:Yl(Z),this._value=c?Z:pc(Z)}get value(){return nW(this),this._value}set value(Z){const c=this.__v_isShallow||mc(Z)||rZ(Z);Z=c?Z:Yl(Z),jZ(Z,this._rawValue)&&(this._rawValue,this._rawValue=Z,this._value=c?Z:pc(Z),Ec(this,4))}}function Zl(l){return ol(l)?l.value:l}const tG={get:(l,Z,c)=>Zl(Reflect.get(l,Z,c)),set:(l,Z,c,d)=>{const b=l[Z];return ol(b)&&!ol(c)?(b.value=c,!0):Reflect.set(l,Z,c,d)}};function zW(l){return ic(l)?l:new Proxy(l,tG)}/**
* @vue/runtime-core v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function JZ(l,Z,c,d){try{return d?l(...d):l()}catch(b){Wd(b,Z,c)}}function mZ(l,Z,c,d){if(A(l)){const b=JZ(l,Z,c,d);return b&&qm(b)&&b.catch(m=>{Wd(m,Z,c)}),b}if(v(l)){const b=[];for(let m=0;m<l.length;m++)b.push(mZ(l[m],Z,c,d));return b}}function Wd(l,Z,c,d=!0){const b=Z?Z.vnode:null;if(Z){let m=Z.parent;const W=Z.proxy,G=`https://vuejs.org/error-reference/#runtime-${c}`;for(;m;){const M=m.ec;if(M){for(let N=0;N<M.length;N++)if(M[N](l,W,G)===!1)return}m=m.parent}const s=Z.appContext.config.errorHandler;if(s){CZ(),JZ(s,null,10,[l,W,G]),FZ();return}}iG(l,c,b,d)}function iG(l,Z,c,d=!0){console.error(l)}let nc=!1,Od=!1;const Kl=[];let iZ=0;const Zc=[];let RZ=null,QZ=0;const oW=Promise.resolve();let Mb=null;function AZ(l){const Z=Mb||oW;return l?Z.then(this?l.bind(this):l):Z}function hG(l){let Z=iZ+1,c=Kl.length;for(;Z<c;){const d=Z+c>>>1,b=Kl[d],m=Ic(b);m<l||m===l&&b.pre?Z=d+1:c=d}return Z}function ub(l){(!Kl.length||!Kl.includes(l,nc&&l.allowRecurse?iZ+1:iZ))&&(l.id==null?Kl.push(l):Kl.splice(hG(l.id),0,l),RW())}function RW(){!nc&&!Od&&(Od=!0,Mb=oW.then(SW))}function yG(l){const Z=Kl.indexOf(l);Z>iZ&&Kl.splice(Z,1)}function VG(l){v(l)?Zc.push(...l):(!RZ||!RZ.includes(l,l.allowRecurse?QZ+1:QZ))&&Zc.push(l),RW()}function Eb(l,Z,c=nc?iZ+1:0){for(;c<Kl.length;c++){const d=Kl[c];if(d&&d.pre){if(l&&d.id!==l.uid)continue;Kl.splice(c,1),c--,d()}}}function wW(l){if(Zc.length){const Z=[...new Set(Zc)].sort((c,d)=>Ic(c)-Ic(d));if(Zc.length=0,RZ){RZ.push(...Z);return}for(RZ=Z,QZ=0;QZ<RZ.length;QZ++){const c=RZ[QZ];c.active!==!1&&c()}RZ=null,QZ=0}}const Ic=l=>l.id==null?1/0:l.id,TG=(l,Z)=>{const c=Ic(l)-Ic(Z);if(c===0){if(l.pre&&!Z.pre)return-1;if(Z.pre&&!l.pre)return 1}return c};function SW(l){Od=!1,nc=!0,Kl.sort(TG);try{for(iZ=0;iZ<Kl.length;iZ++){const Z=Kl[iZ];Z&&Z.active!==!1&&JZ(Z,Z.i,Z.i?15:14)}}finally{iZ=0,Kl.length=0,wW(),nc=!1,Mb=null,(Kl.length||Zc.length)&&SW()}}let Jl=null,Gd=null;function rc(l){const Z=Jl;return Jl=l,Gd=l&&l.type.__scopeId||null,Z}function Ul(l){Gd=l}function kl(){Gd=null}function dl(l,Z=Jl,c){if(!Z||l._n)return l;const d=(...b)=>{d._d&&lm(-1);const m=rc(Z);let W;try{W=l(...b)}finally{rc(m),d._d&&lm(1)}return W};return d._n=!0,d._c=!0,d._d=!0,d}function Ql(l,Z){if(Jl===null)return l;const c=td(Jl),d=l.dirs||(l.dirs=[]);for(let b=0;b<Z.length;b++){let[m,W,G,s=nl]=Z[b];m&&(A(m)&&(m={mounted:m,updated:m}),m.deep&&xZ(W),d.push({dir:m,instance:c,value:W,oldValue:void 0,arg:G,modifiers:s}))}return l}function OZ(l,Z,c,d){const b=l.dirs,m=Z&&Z.dirs;for(let W=0;W<b.length;W++){const G=b[W];m&&(G.oldValue=m[W].value);let s=G.dir[d];s&&(CZ(),mZ(s,c,8,[l.el,G,l,Z]),FZ())}}const wZ=Symbol("_leaveCb"),Cc=Symbol("_enterCb");function aG(){const l={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return sc(()=>{l.isMounted=!0}),kW(()=>{l.isUnmounting=!0}),l}const ZZ=[Function,Array],eW={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ZZ,onEnter:ZZ,onAfterEnter:ZZ,onEnterCancelled:ZZ,onBeforeLeave:ZZ,onLeave:ZZ,onAfterLeave:ZZ,onLeaveCancelled:ZZ,onBeforeAppear:ZZ,onAppear:ZZ,onAfterAppear:ZZ,onAppearCancelled:ZZ},xW=l=>{const Z=l.subTree;return Z.component?xW(Z.component):Z},LG={name:"BaseTransition",props:eW,setup(l,{slots:Z}){const c=W0(),d=aG();return()=>{const b=Z.default&&JW(Z.default(),!0);if(!b||!b.length)return;let m=b[0];if(b.length>1){for(const X of b)if(X.type!==rl){m=X;break}}const W=Yl(l),{mode:G}=W;if(d.isLeaving)return Ld(m);const s=Qb(m);if(!s)return Ld(m);let M=Kd(s,W,d,c,X=>M=X);Bc(s,M);const N=c.subTree,Y=N&&Qb(N);if(Y&&Y.type!==rl&&!HZ(s,Y)&&xW(c).type!==rl){const X=Kd(Y,W,d,c);if(Bc(Y,X),G==="out-in"&&s.type!==rl)return d.isLeaving=!0,X.afterLeave=()=>{d.isLeaving=!1,c.update.active!==!1&&(c.effect.dirty=!0,c.update())},Ld(m);G==="in-out"&&s.type!==rl&&(X.delayLeave=(i,p,o)=>{const F=DW(d,Y);F[String(Y.key)]=Y,i[wZ]=()=>{p(),i[wZ]=void 0,delete M.delayedLeave},M.delayedLeave=o})}return m}}},pG=LG;function DW(l,Z){const{leavingVNodes:c}=l;let d=c.get(Z.type);return d||(d=Object.create(null),c.set(Z.type,d)),d}function Kd(l,Z,c,d,b){const{appear:m,mode:W,persisted:G=!1,onBeforeEnter:s,onEnter:M,onAfterEnter:N,onEnterCancelled:Y,onBeforeLeave:X,onLeave:i,onAfterLeave:p,onLeaveCancelled:o,onBeforeAppear:F,onAppear:J,onAfterAppear:U,onAppearCancelled:j}=Z,$=String(l.key),cl=DW(c,l),K=(P,bl)=>{P&&mZ(P,d,9,bl)},ll=(P,bl)=>{const Gl=bl[1];K(P,bl),v(P)?P.every(O=>O.length<=1)&&Gl():P.length<=1&&Gl()},tl={mode:W,persisted:G,beforeEnter(P){let bl=s;if(!c.isMounted)if(m)bl=F||s;else return;P[wZ]&&P[wZ](!0);const Gl=cl[$];Gl&&HZ(l,Gl)&&Gl.el[wZ]&&Gl.el[wZ](),K(bl,[P])},enter(P){let bl=M,Gl=N,O=Y;if(!c.isMounted)if(m)bl=J||M,Gl=U||N,O=j||Y;else return;let sl=!1;const wl=P[Cc]=Ol=>{sl||(sl=!0,Ol?K(O,[P]):K(Gl,[P]),tl.delayedLeave&&tl.delayedLeave(),P[Cc]=void 0)};bl?ll(bl,[P,wl]):wl()},leave(P,bl){const Gl=String(l.key);if(P[Cc]&&P[Cc](!0),c.isUnmounting)return bl();K(X,[P]);let O=!1;const sl=P[wZ]=wl=>{O||(O=!0,bl(),wl?K(o,[P]):K(p,[P]),P[wZ]=void 0,cl[Gl]===l&&delete cl[Gl])};cl[Gl]=l,i?ll(i,[P,sl]):sl()},clone(P){const bl=Kd(P,Z,c,d,b);return b&&b(bl),bl}};return tl}function Ld(l){if(sd(l))return l=UZ(l),l.children=null,l}function Qb(l){if(!sd(l))return l;const{shapeFlag:Z,children:c}=l;if(c){if(Z&16)return c[0];if(Z&32&&A(c.default))return c.default()}}function Bc(l,Z){l.shapeFlag&6&&l.component?Bc(l.component.subTree,Z):l.shapeFlag&128?(l.ssContent.transition=Z.clone(l.ssContent),l.ssFallback.transition=Z.clone(l.ssFallback)):l.transition=Z}function JW(l,Z=!1,c){let d=[],b=0;for(let m=0;m<l.length;m++){let W=l[m];const G=c==null?W.key:String(c)+String(W.key!=null?W.key:m);W.type===f?(W.patchFlag&128&&b++,d=d.concat(JW(W.children,Z,G))):(Z||W.type!==rl)&&d.push(G!=null?UZ(W,{key:G}):W)}if(b>1)for(let m=0;m<d.length;m++)d[m].patchFlag=-2;return d}/*! #__NO_SIDE_EFFECTS__ */function WZ(l,Z){return A(l)?jl({name:l.name},Z,{setup:l}):l}const hc=l=>!!l.type.__asyncLoader,sd=l=>l.type.__isKeepAlive;function nG(l,Z){jW(l,"a",Z)}function IG(l,Z){jW(l,"da",Z)}function jW(l,Z,c=Cl){const d=l.__wdc||(l.__wdc=()=>{let b=c;for(;b;){if(b.isDeactivated)return;b=b.parent}return l()});if(Nd(Z,d,c),c){let b=c.parent;for(;b&&b.parent;)sd(b.parent.vnode)&&zG(d,Z,c,b),b=b.parent}}function zG(l,Z,c,d){const b=Nd(Z,l,d,!0);Yb(()=>{lb(d[Z],b)},c)}function Nd(l,Z,c=Cl,d=!1){if(c){const b=c[l]||(c[l]=[]),m=Z.__weh||(Z.__weh=(...W)=>{CZ();const G=xc(c),s=mZ(Z,c,l,W);return G(),FZ(),s});return d?b.unshift(m):b.push(m),m}}const aZ=l=>(Z,c=Cl)=>{(!Xd||l==="sp")&&Nd(l,(...d)=>Z(...d),c)},UW=aZ("bm"),sc=aZ("m"),oG=aZ("bu"),RG=aZ("u"),kW=aZ("bum"),Yb=aZ("um"),wG=aZ("sp"),SG=aZ("rtg"),eG=aZ("rtc");function xG(l,Z=Cl){Nd("ec",l,Z)}const Xb="components";function vl(l,Z){return FW(Xb,l,!0,Z)||l}const CW=Symbol.for("v-ndc");function DG(l){return Rl(l)?FW(Xb,l,!1)||l:l||CW}function FW(l,Z,c=!0,d=!1){const b=Jl||Cl;if(b){const m=b.type;if(l===Xb){const G=I2(m,!1);if(G&&(G===Z||G===MZ(Z)||G===bd(MZ(Z))))return m}const W=Hb(b[l]||m[l],Z)||Hb(b.appContext[l],Z);return!W&&d?m:W}}function Hb(l,Z){return l&&(l[Z]||l[MZ(Z)]||l[bd(MZ(Z))])}function OW(l,Z,c,d){let b;const m=c;if(v(l)||Rl(l)){b=new Array(l.length);for(let W=0,G=l.length;W<G;W++)b[W]=Z(l[W],W,void 0,m)}else if(typeof l=="number"){b=new Array(l);for(let W=0;W<l;W++)b[W]=Z(W+1,W,void 0,m)}else if(pl(l))if(l[Symbol.iterator])b=Array.from(l,(W,G)=>Z(W,G,void 0,m));else{const W=Object.keys(l);b=new Array(W.length);for(let G=0,s=W.length;G<s;G++){const M=W[G];b[G]=Z(l[M],M,G,m)}}else b=[];return b}function cc(l,Z,c={},d,b){if(Jl.isCE||Jl.parent&&hc(Jl.parent)&&Jl.parent.isCE)return Z!=="default"&&(c.name=Z),V("slot",c,d&&d());let m=l[Z];m&&m._c&&(m._d=!1),R();const W=m&&KW(m(c)),G=yl(f,{key:(c.key||W&&W.key||`_${Z}`)+(!W&&d?"_fb":"")},W||(d?d():[]),W&&l._===1?64:-2);return G.scopeId&&(G.slotScopeIds=[G.scopeId+"-s"]),m&&m._c&&(m._d=!0),G}function KW(l){return l.some(Z=>fc(Z)?!(Z.type===rl||Z.type===f&&!KW(Z.children)):!0)?l:null}const gd=l=>l?G0(l)?td(l):gd(l.parent):null,yc=jl(Object.create(null),{$:l=>l,$el:l=>l.vnode.el,$data:l=>l.data,$props:l=>l.props,$attrs:l=>l.attrs,$slots:l=>l.slots,$refs:l=>l.refs,$parent:l=>gd(l.parent),$root:l=>gd(l.root),$emit:l=>l.emit,$options:l=>tb(l),$forceUpdate:l=>l.f||(l.f=()=>{l.effect.dirty=!0,ub(l.update)}),$nextTick:l=>l.n||(l.n=AZ.bind(l.proxy)),$watch:l=>m2.bind(l)}),pd=(l,Z)=>l!==nl&&!l.__isScriptSetup&&Nl(l,Z),JG={get({_:l},Z){if(Z==="__v_skip")return!0;const{ctx:c,setupState:d,data:b,props:m,accessCache:W,type:G,appContext:s}=l;let M;if(Z[0]!=="$"){const i=W[Z];if(i!==void 0)switch(i){case 1:return d[Z];case 2:return b[Z];case 4:return c[Z];case 3:return m[Z]}else{if(pd(d,Z))return W[Z]=1,d[Z];if(b!==nl&&Nl(b,Z))return W[Z]=2,b[Z];if((M=l.propsOptions[0])&&Nl(M,Z))return W[Z]=3,m[Z];if(c!==nl&&Nl(c,Z))return W[Z]=4,c[Z];Ed&&(W[Z]=0)}}const N=yc[Z];let Y,X;if(N)return Z==="$attrs"&&Al(l.attrs,"get",""),N(l);if((Y=G.__cssModules)&&(Y=Y[Z]))return Y;if(c!==nl&&Nl(c,Z))return W[Z]=4,c[Z];if(X=s.config.globalProperties,Nl(X,Z))return X[Z]},set({_:l},Z,c){const{data:d,setupState:b,ctx:m}=l;return pd(b,Z)?(b[Z]=c,!0):d!==nl&&Nl(d,Z)?(d[Z]=c,!0):Nl(l.props,Z)||Z[0]==="$"&&Z.slice(1)in l?!1:(m[Z]=c,!0)},has({_:{data:l,setupState:Z,accessCache:c,ctx:d,appContext:b,propsOptions:m}},W){let G;return!!c[W]||l!==nl&&Nl(l,W)||pd(Z,W)||(G=m[0])&&Nl(G,W)||Nl(d,W)||Nl(yc,W)||Nl(b.config.globalProperties,W)},defineProperty(l,Z,c){return c.get!=null?l._.accessCache[Z]=0:Nl(c,"value")&&this.set(l,Z,c.value,null),Reflect.defineProperty(l,Z,c)}};function jG(){return UG().slots}function UG(){const l=W0();return l.setupContext||(l.setupContext=N0(l))}function Pb(l){return v(l)?l.reduce((Z,c)=>(Z[c]=null,Z),{}):l}let Ed=!0;function kG(l){const Z=tb(l),c=l.proxy,d=l.ctx;Ed=!1,Z.beforeCreate&&vb(Z.beforeCreate,l,"bc");const{data:b,computed:m,methods:W,watch:G,provide:s,inject:M,created:N,beforeMount:Y,mounted:X,beforeUpdate:i,updated:p,activated:o,deactivated:F,beforeDestroy:J,beforeUnmount:U,destroyed:j,unmounted:$,render:cl,renderTracked:K,renderTriggered:ll,errorCaptured:tl,serverPrefetch:P,expose:bl,inheritAttrs:Gl,components:O,directives:sl,filters:wl}=Z;if(M&&CG(M,d,null),W)for(const Ml in W){const ul=W[Ml];A(ul)&&(d[Ml]=ul.bind(c))}if(b){const Ml=b.call(c,c);pl(Ml)&&(l.data=ec(Ml))}if(Ed=!0,m)for(const Ml in m){const ul=m[Ml],GZ=A(ul)?ul.bind(c,c):A(ul.get)?ul.get.bind(c,c):bZ,fl=!A(ul)&&A(ul.set)?ul.set.bind(c):bZ,B=el({get:GZ,set:fl});Object.defineProperty(d,Ml,{enumerable:!0,configurable:!0,get:()=>B.value,set:Wl=>B.value=Wl})}if(G)for(const Ml in G)gW(G[Ml],d,c,Ml);if(s){const Ml=A(s)?s.call(c):s;Reflect.ownKeys(Ml).forEach(ul=>{Qc(ul,Ml[ul])})}N&&vb(N,l,"c");function Tl(Ml,ul){v(ul)?ul.forEach(GZ=>Ml(GZ.bind(c))):ul&&Ml(ul.bind(c))}if(Tl(UW,Y),Tl(sc,X),Tl(oG,i),Tl(RG,p),Tl(nG,o),Tl(IG,F),Tl(xG,tl),Tl(eG,K),Tl(SG,ll),Tl(kW,U),Tl(Yb,$),Tl(wG,P),v(bl))if(bl.length){const Ml=l.exposed||(l.exposed={});bl.forEach(ul=>{Object.defineProperty(Ml,ul,{get:()=>c[ul],set:GZ=>c[ul]=GZ})})}else l.exposed||(l.exposed={});cl&&l.render===bZ&&(l.render=cl),Gl!=null&&(l.inheritAttrs=Gl),O&&(l.components=O),sl&&(l.directives=sl)}function CG(l,Z,c=bZ){v(l)&&(l=Qd(l));for(const d in l){const b=l[d];let m;pl(b)?"default"in b?m=TZ(b.from||d,b.default,!0):m=TZ(b.from||d):m=TZ(b),ol(m)?Object.defineProperty(Z,d,{enumerable:!0,configurable:!0,get:()=>m.value,set:W=>m.value=W}):Z[d]=m}}function vb(l,Z,c){mZ(v(l)?l.map(d=>d.bind(Z.proxy)):l.bind(Z.proxy),Z,c)}function gW(l,Z,c,d){const b=d.includes(".")?c0(c,d):()=>c[d];if(Rl(l)){const m=Z[l];A(m)&&xl(b,m)}else if(A(l))xl(b,l.bind(c));else if(pl(l))if(v(l))l.forEach(m=>gW(m,Z,c,d));else{const m=A(l.handler)?l.handler.bind(c):Z[l.handler];A(m)&&xl(b,m,l)}}function tb(l){const Z=l.type,{mixins:c,extends:d}=Z,{mixins:b,optionsCache:m,config:{optionMergeStrategies:W}}=l.appContext,G=m.get(Z);let s;return G?s=G:!b.length&&!c&&!d?s=Z:(s={},b.length&&b.forEach(M=>Ac(s,M,W,!0)),Ac(s,Z,W)),pl(Z)&&m.set(Z,s),s}function Ac(l,Z,c,d=!1){const{mixins:b,extends:m}=Z;m&&Ac(l,m,c,!0),b&&b.forEach(W=>Ac(l,W,c,!0));for(const W in Z)if(!(d&&W==="expose")){const G=FG[W]||c&&c[W];l[W]=G?G(l[W],Z[W]):Z[W]}return l}const FG={data:rb,props:Bb,emits:Bb,methods:Xc,computed:Xc,beforeCreate:El,created:El,beforeMount:El,mounted:El,beforeUpdate:El,updated:El,beforeDestroy:El,beforeUnmount:El,destroyed:El,unmounted:El,activated:El,deactivated:El,errorCaptured:El,serverPrefetch:El,components:Xc,directives:Xc,watch:KG,provide:rb,inject:OG};function rb(l,Z){return Z?l?function(){return jl(A(l)?l.call(this,this):l,A(Z)?Z.call(this,this):Z)}:Z:l}function OG(l,Z){return Xc(Qd(l),Qd(Z))}function Qd(l){if(v(l)){const Z={};for(let c=0;c<l.length;c++)Z[l[c]]=l[c];return Z}return l}function El(l,Z){return l?[...new Set([].concat(l,Z))]:Z}function Xc(l,Z){return l?jl(Object.create(null),l,Z):Z}function Bb(l,Z){return l?v(l)&&v(Z)?[...new Set([...l,...Z])]:jl(Object.create(null),Pb(l),Pb(Z??{})):Z}function KG(l,Z){if(!l)return Z;if(!Z)return l;const c=jl(Object.create(null),l);for(const d in Z)c[d]=El(l[d],Z[d]);return c}function EW(){return{app:null,config:{isNativeTag:x0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let gG=0;function EG(l,Z){return function(d,b=null){A(d)||(d=jl({},d)),b!=null&&!pl(b)&&(b=null);const m=EW(),W=new WeakSet;let G=!1;const s=m.app={_uid:gG++,_component:d,_props:b,_container:null,_context:m,_instance:null,version:o2,get config(){return m.config},set config(M){},use(M,...N){return W.has(M)||(M&&A(M.install)?(W.add(M),M.install(s,...N)):A(M)&&(W.add(M),M(s,...N))),s},mixin(M){return m.mixins.includes(M)||m.mixins.push(M),s},component(M,N){return N?(m.components[M]=N,s):m.components[M]},directive(M,N){return N?(m.directives[M]=N,s):m.directives[M]},mount(M,N,Y){if(!G){const X=V(d,b);return X.appContext=m,Y===!0?Y="svg":Y===!1&&(Y=void 0),N&&Z?Z(X,M):l(X,M,Y),G=!0,s._container=M,M.__vue_app__=s,td(X.component)}},unmount(){G&&(l(null,s._container),delete s._container.__vue_app__)},provide(M,N){return m.provides[M]=N,s},runWithContext(M){const N=dc;dc=s;try{return M()}finally{dc=N}}};return s}}let dc=null;function Qc(l,Z){if(Cl){let c=Cl.provides;const d=Cl.parent&&Cl.parent.provides;d===c&&(c=Cl.provides=Object.create(d)),c[l]=Z}}function TZ(l,Z,c=!1){const d=Cl||Jl;if(d||dc){const b=dc?dc._context.provides:d?d.parent==null?d.vnode.appContext&&d.vnode.appContext.provides:d.parent.provides:void 0;if(b&&l in b)return b[l];if(arguments.length>1)return c&&A(Z)?Z.call(d&&d.proxy):Z}}const QW={},HW=()=>Object.create(QW),PW=l=>Object.getPrototypeOf(l)===QW;function QG(l,Z,c,d=!1){const b={},m=HW();l.propsDefaults=Object.create(null),vW(l,Z,b,m);for(const W in l.propsOptions[0])W in b||(b[W]=void 0);c?l.props=d?b:VW(b):l.type.props?l.props=b:l.props=m,l.attrs=m}function HG(l,Z,c,d){const{props:b,attrs:m,vnode:{patchFlag:W}}=l,G=Yl(b),[s]=l.propsOptions;let M=!1;if((d||W>0)&&!(W&16)){if(W&8){const N=l.vnode.dynamicProps;for(let Y=0;Y<N.length;Y++){let X=N[Y];if(Md(l.emitsOptions,X))continue;const i=Z[X];if(s)if(Nl(m,X))i!==m[X]&&(m[X]=i,M=!0);else{const p=MZ(X);b[p]=Hd(s,G,p,i,l,!1)}else i!==m[X]&&(m[X]=i,M=!0)}}}else{vW(l,Z,b,m)&&(M=!0);let N;for(const Y in G)(!Z||!Nl(Z,Y)&&((N=BZ(Y))===Y||!Nl(Z,N)))&&(s?c&&(c[Y]!==void 0||c[N]!==void 0)&&(b[Y]=Hd(s,G,Y,void 0,l,!0)):delete b[Y]);if(m!==G)for(const Y in m)(!Z||!Nl(Z,Y))&&(delete m[Y],M=!0)}M&&VZ(l.attrs,"set","")}function vW(l,Z,c,d){const[b,m]=l.propsOptions;let W=!1,G;if(Z)for(let s in Z){if(tc(s))continue;const M=Z[s];let N;b&&Nl(b,N=MZ(s))?!m||!m.includes(N)?c[N]=M:(G||(G={}))[N]=M:Md(l.emitsOptions,s)||(!(s in d)||M!==d[s])&&(d[s]=M,W=!0)}if(m){const s=Yl(c),M=G||nl;for(let N=0;N<m.length;N++){const Y=m[N];c[Y]=Hd(b,s,Y,M[Y],l,!Nl(M,Y))}}return W}function Hd(l,Z,c,d,b,m){const W=l[c];if(W!=null){const G=Nl(W,"default");if(G&&d===void 0){const s=W.default;if(W.type!==Function&&!W.skipFactory&&A(s)){const{propsDefaults:M}=b;if(c in M)d=M[c];else{const N=xc(b);d=M[c]=s.call(null,Z),N()}}else d=s}W[0]&&(m&&!G?d=!1:W[1]&&(d===""||d===BZ(c))&&(d=!0))}return d}const PG=new WeakMap;function rW(l,Z,c=!1){const d=c?PG:Z.propsCache,b=d.get(l);if(b)return b;const m=l.props,W={},G=[];let s=!1;if(!A(l)){const N=Y=>{s=!0;const[X,i]=rW(Y,Z,!0);jl(W,X),i&&G.push(...i)};!c&&Z.mixins.length&&Z.mixins.forEach(N),l.extends&&N(l.extends),l.mixins&&l.mixins.forEach(N)}if(!m&&!s)return pl(l)&&d.set(l,$Z),$Z;if(v(m))for(let N=0;N<m.length;N++){const Y=MZ(m[N]);Ab(Y)&&(W[Y]=nl)}else if(m)for(const N in m){const Y=MZ(N);if(Ab(Y)){const X=m[N],i=W[Y]=v(X)||A(X)?{type:X}:jl({},X),p=i.type;let o=!1,F=!0;if(v(p))for(let J=0;J<p.length;++J){const U=p[J],j=A(U)&&U.name;if(j==="Boolean"){o=!0;break}else j==="String"&&(F=!1)}else o=A(p)&&p.name==="Boolean";i[0]=o,i[1]=F,(o||Nl(i,"default"))&&G.push(Y)}}const M=[W,G];return pl(l)&&d.set(l,M),M}function Ab(l){return l[0]!=="$"&&!tc(l)}const BW=l=>l[0]==="_"||l==="$stable",ib=l=>v(l)?l.map(tZ):[tZ(l)],vG=(l,Z,c)=>{if(Z._n)return Z;const d=dl((...b)=>ib(Z(...b)),c);return d._c=!1,d},AW=(l,Z,c)=>{const d=l._ctx;for(const b in l){if(BW(b))continue;const m=l[b];if(A(m))Z[b]=vG(b,m,d);else if(m!=null){const W=ib(m);Z[b]=()=>W}}},fW=(l,Z)=>{const c=ib(Z);l.slots.default=()=>c},_W=(l,Z,c)=>{for(const d in Z)(c||d!=="_")&&(l[d]=Z[d])},rG=(l,Z,c)=>{const d=l.slots=HW();if(l.vnode.shapeFlag&32){const b=Z._;b?(_W(d,Z,c),c&&ZW(d,"_",b,!0)):AW(Z,d)}else Z&&fW(l,Z)},BG=(l,Z,c)=>{const{vnode:d,slots:b}=l;let m=!0,W=nl;if(d.shapeFlag&32){const G=Z._;G?c&&G===1?m=!1:_W(b,Z,c):(m=!Z.$stable,AW(Z,b)),W=Z}else Z&&(fW(l,Z),W={default:1});if(m)for(const G in b)!BW(G)&&W[G]==null&&delete b[G]};function Pd(l,Z,c,d,b=!1){if(v(l)){l.forEach((X,i)=>Pd(X,Z&&(v(Z)?Z[i]:Z),c,d,b));return}if(hc(d)&&!b)return;const m=d.shapeFlag&4?td(d.component):d.el,W=b?null:m,{i:G,r:s}=l,M=Z&&Z.r,N=G.refs===nl?G.refs={}:G.refs,Y=G.setupState;if(M!=null&&M!==s&&(Rl(M)?(N[M]=null,Nl(Y,M)&&(Y[M]=null)):ol(M)&&(M.value=null)),A(s))JZ(s,G,12,[W,N]);else{const X=Rl(s),i=ol(s);if(X||i){const p=()=>{if(l.f){const o=X?Nl(Y,s)?Y[s]:N[s]:s.value;b?v(o)&&lb(o,m):v(o)?o.includes(m)||o.push(m):X?(N[s]=[m],Nl(Y,s)&&(Y[s]=N[s])):(s.value=[m],l.k&&(N[l.k]=s.value))}else X?(N[s]=W,Nl(Y,s)&&(Y[s]=W)):i&&(s.value=W,l.k&&(N[l.k]=W))};W?(p.id=-1,Pl(p,c)):p()}}}const qW=Symbol("_vte"),AG=l=>l.__isTeleport,Vc=l=>l&&(l.disabled||l.disabled===""),fb=l=>typeof SVGElement<"u"&&l instanceof SVGElement,_b=l=>typeof MathMLElement=="function"&&l instanceof MathMLElement,vd=(l,Z)=>{const c=l&&l.to;return Rl(c)?Z?Z(c):null:c},fG={name:"Teleport",__isTeleport:!0,process(l,Z,c,d,b,m,W,G,s,M){const{mc:N,pc:Y,pbc:X,o:{insert:i,querySelector:p,createText:o,createComment:F}}=M,J=Vc(Z.props);let{shapeFlag:U,children:j,dynamicChildren:$}=Z;if(l==null){const cl=Z.el=o(""),K=Z.anchor=o("");i(cl,c,d),i(K,c,d);const ll=Z.target=vd(Z.props,p),tl=l0(ll,Z,o,i);ll&&(W==="svg"||fb(ll)?W="svg":(W==="mathml"||_b(ll))&&(W="mathml"));const P=(bl,Gl)=>{U&16&&N(j,bl,Gl,b,m,W,G,s)};J?P(c,K):ll&&P(ll,tl)}else{Z.el=l.el,Z.targetStart=l.targetStart;const cl=Z.anchor=l.anchor,K=Z.target=l.target,ll=Z.targetAnchor=l.targetAnchor,tl=Vc(l.props),P=tl?c:K,bl=tl?cl:ll;if(W==="svg"||fb(K)?W="svg":(W==="mathml"||_b(K))&&(W="mathml"),$?(X(l.dynamicChildren,$,P,b,m,W,G),hb(l,Z,!0)):s||Y(l,Z,P,bl,b,m,W,G,!1),J)tl?Z.props&&l.props&&Z.props.to!==l.props.to&&(Z.props.to=l.props.to):Fc(Z,c,cl,M,1);else if((Z.props&&Z.props.to)!==(l.props&&l.props.to)){const Gl=Z.target=vd(Z.props,p);Gl&&Fc(Z,Gl,null,M,0)}else tl&&Fc(Z,K,ll,M,1)}$W(Z)},remove(l,Z,c,{um:d,o:{remove:b}},m){const{shapeFlag:W,children:G,anchor:s,targetStart:M,targetAnchor:N,target:Y,props:X}=l;if(Y&&(b(M),b(N)),m&&b(s),W&16){const i=m||!Vc(X);for(let p=0;p<G.length;p++){const o=G[p];d(o,Z,c,i,!!o.dynamicChildren)}}},move:Fc,hydrate:_G};function Fc(l,Z,c,{o:{insert:d},m:b},m=2){m===0&&d(l.targetAnchor,Z,c);const{el:W,anchor:G,shapeFlag:s,children:M,props:N}=l,Y=m===2;if(Y&&d(W,Z,c),(!Y||Vc(N))&&s&16)for(let X=0;X<M.length;X++)b(M[X],Z,c,2);Y&&d(G,Z,c)}function _G(l,Z,c,d,b,m,{o:{nextSibling:W,parentNode:G,querySelector:s,insert:M,createText:N}},Y){const X=Z.target=vd(Z.props,s);if(X){const i=X._lpa||X.firstChild;if(Z.shapeFlag&16)if(Vc(Z.props))Z.anchor=Y(W(l),Z,G(l),c,d,b,m),Z.targetStart=i,Z.targetAnchor=i&&W(i);else{Z.anchor=W(l);let p=i;for(;p;){if(p&&p.nodeType===8){if(p.data==="teleport start anchor")Z.targetStart=p;else if(p.data==="teleport anchor"){Z.targetAnchor=p,X._lpa=Z.targetAnchor&&W(Z.targetAnchor);break}}p=W(p)}Z.targetAnchor||l0(X,Z,N,M),Y(i&&W(i),Z,X,c,d,b,m)}$W(Z)}return Z.anchor&&W(Z.anchor)}const qG=fG;function $W(l){const Z=l.ctx;if(Z&&Z.ut){let c=l.children[0].el;for(;c&&c!==l.targetAnchor;)c.nodeType===1&&c.setAttribute("data-v-owner",Z.uid),c=c.nextSibling;Z.ut()}}function l0(l,Z,c,d){const b=Z.targetStart=c(""),m=Z.targetAnchor=c("");return b[qW]=m,l&&(d(b,l),d(m,l)),m}const Pl=X2;function $G(l){return l2(l)}function l2(l,Z){const c=cW();c.__VUE__=!0;const{insert:d,remove:b,patchProp:m,createElement:W,createText:G,createComment:s,setText:M,setElementText:N,parentNode:Y,nextSibling:X,setScopeId:i=bZ,insertStaticContent:p}=l,o=(u,t,y,L=null,a=null,z=null,x=void 0,w=null,S=!!t.dynamicChildren)=>{if(u===t)return;u&&!HZ(u,t)&&(L=T(u),Wl(u,a,z,!0),u=null),t.patchFlag===-2&&(S=!1,t.dynamicChildren=null);const{type:I,ref:C,shapeFlag:Q}=t;switch(I){case ud:F(u,t,y,L);break;case rl:J(u,t,y,L);break;case Hc:u==null&&U(t,y,L,x);break;case f:O(u,t,y,L,a,z,x,w,S);break;default:Q&1?cl(u,t,y,L,a,z,x,w,S):Q&6?sl(u,t,y,L,a,z,x,w,S):(Q&64||Q&128)&&I.process(u,t,y,L,a,z,x,w,S,g)}C!=null&&a&&Pd(C,u&&u.ref,z,t||u,!t)},F=(u,t,y,L)=>{if(u==null)d(t.el=G(t.children),y,L);else{const a=t.el=u.el;t.children!==u.children&&M(a,t.children)}},J=(u,t,y,L)=>{u==null?d(t.el=s(t.children||""),y,L):t.el=u.el},U=(u,t,y,L)=>{[u.el,u.anchor]=p(u.children,t,y,L,u.el,u.anchor)},j=({el:u,anchor:t},y,L)=>{let a;for(;u&&u!==t;)a=X(u),d(u,y,L),u=a;d(t,y,L)},$=({el:u,anchor:t})=>{let y;for(;u&&u!==t;)y=X(u),b(u),u=y;b(t)},cl=(u,t,y,L,a,z,x,w,S)=>{t.type==="svg"?x="svg":t.type==="math"&&(x="mathml"),u==null?K(t,y,L,a,z,x,w,S):P(u,t,a,z,x,w,S)},K=(u,t,y,L,a,z,x,w)=>{let S,I;const{props:C,shapeFlag:Q,transition:E,dirs:q}=u;if(S=u.el=W(u.type,z,C&&C.is,C),Q&8?N(S,u.children):Q&16&&tl(u.children,S,null,L,a,nd(u,z),x,w),q&&OZ(u,null,L,"created"),ll(S,u,u.scopeId,x,L),C){for(const Ll in C)Ll!=="value"&&!tc(Ll)&&m(S,Ll,null,C[Ll],z,L);"value"in C&&m(S,"value",null,C.value,z),(I=C.onVnodeBeforeMount)&&XZ(I,L,u)}q&&OZ(u,null,L,"beforeMount");const ml=Z2(a,E);ml&&E.beforeEnter(S),d(S,t,y),((I=C&&C.onVnodeMounted)||ml||q)&&Pl(()=>{I&&XZ(I,L,u),ml&&E.enter(S),q&&OZ(u,null,L,"mounted")},a)},ll=(u,t,y,L,a)=>{if(y&&i(u,y),L)for(let z=0;z<L.length;z++)i(u,L[z]);if(a){let z=a.subTree;if(t===z){const x=a.vnode;ll(u,x,x.scopeId,x.slotScopeIds,a.parent)}}},tl=(u,t,y,L,a,z,x,w,S=0)=>{for(let I=S;I<u.length;I++){const C=u[I]=w?SZ(u[I]):tZ(u[I]);o(null,C,t,y,L,a,z,x,w)}},P=(u,t,y,L,a,z,x)=>{const w=t.el=u.el;let{patchFlag:S,dynamicChildren:I,dirs:C}=t;S|=u.patchFlag&16;const Q=u.props||nl,E=t.props||nl;let q;if(y&&KZ(y,!1),(q=E.onVnodeBeforeUpdate)&&XZ(q,y,t,u),C&&OZ(t,u,y,"beforeUpdate"),y&&KZ(y,!0),(Q.innerHTML&&E.innerHTML==null||Q.textContent&&E.textContent==null)&&N(w,""),I?bl(u.dynamicChildren,I,w,y,L,nd(t,a),z):x||ul(u,t,w,null,y,L,nd(t,a),z,!1),S>0){if(S&16)Gl(w,Q,E,y,a);else if(S&2&&Q.class!==E.class&&m(w,"class",null,E.class,a),S&4&&m(w,"style",Q.style,E.style,a),S&8){const ml=t.dynamicProps;for(let Ll=0;Ll<ml.length;Ll++){const Xl=ml[Ll],Dl=Q[Xl],sZ=E[Xl];(sZ!==Dl||Xl==="value")&&m(w,Xl,Dl,sZ,a,y)}}S&1&&u.children!==t.children&&N(w,t.children)}else!x&&I==null&&Gl(w,Q,E,y,a);((q=E.onVnodeUpdated)||C)&&Pl(()=>{q&&XZ(q,y,t,u),C&&OZ(t,u,y,"updated")},L)},bl=(u,t,y,L,a,z,x)=>{for(let w=0;w<t.length;w++){const S=u[w],I=t[w],C=S.el&&(S.type===f||!HZ(S,I)||S.shapeFlag&70)?Y(S.el):y;o(S,I,C,null,L,a,z,x,!0)}},Gl=(u,t,y,L,a)=>{if(t!==y){if(t!==nl)for(const z in t)!tc(z)&&!(z in y)&&m(u,z,t[z],null,a,L);for(const z in y){if(tc(z))continue;const x=y[z],w=t[z];x!==w&&z!=="value"&&m(u,z,w,x,a,L)}"value"in y&&m(u,"value",t.value,y.value,a)}},O=(u,t,y,L,a,z,x,w,S)=>{const I=t.el=u?u.el:G(""),C=t.anchor=u?u.anchor:G("");let{patchFlag:Q,dynamicChildren:E,slotScopeIds:q}=t;q&&(w=w?w.concat(q):q),u==null?(d(I,y,L),d(C,y,L),tl(t.children||[],y,C,a,z,x,w,S)):Q>0&&Q&64&&E&&u.dynamicChildren?(bl(u.dynamicChildren,E,y,a,z,x,w),(t.key!=null||a&&t===a.subTree)&&hb(u,t,!0)):ul(u,t,y,C,a,z,x,w,S)},sl=(u,t,y,L,a,z,x,w,S)=>{t.slotScopeIds=w,u==null?t.shapeFlag&512?a.ctx.activate(t,y,L,x,S):wl(t,y,L,a,z,x,S):Ol(u,t,S)},wl=(u,t,y,L,a,z,x)=>{const w=u.component=a2(u,L,a);if(sd(u)&&(w.ctx.renderer=g),L2(w,!1,x),w.asyncDep){if(a&&a.registerDep(w,Tl,x),!u.el){const S=w.subTree=V(rl);J(null,S,t,y)}}else Tl(w,u,t,y,a,z,x)},Ol=(u,t,y)=>{const L=t.component=u.component;if(M2(u,t,y))if(L.asyncDep&&!L.asyncResolved){Ml(L,t,y);return}else L.next=t,yG(L.update),L.effect.dirty=!0,L.update();else t.el=u.el,L.vnode=t},Tl=(u,t,y,L,a,z,x)=>{const w=()=>{if(u.isMounted){let{next:C,bu:Q,u:E,parent:q,vnode:ml}=u;{const fZ=Z0(u);if(fZ){C&&(C.el=ml.el,Ml(u,C,x)),fZ.asyncDep.then(()=>{u.isUnmounted||w()});return}}let Ll=C,Xl;KZ(u,!1),C?(C.el=ml.el,Ml(u,C,x)):C=ml,Q&&gc(Q),(Xl=C.props&&C.props.onVnodeBeforeUpdate)&&XZ(Xl,q,C,ml),KZ(u,!0);const Dl=Id(u),sZ=u.subTree;u.subTree=Dl,o(sZ,Dl,Y(sZ.el),T(sZ),u,a,z),C.el=Dl.el,Ll===null&&u2(u,Dl.el),E&&Pl(E,a),(Xl=C.props&&C.props.onVnodeUpdated)&&Pl(()=>XZ(Xl,q,C,ml),a)}else{let C;const{el:Q,props:E}=t,{bm:q,m:ml,parent:Ll}=u,Xl=hc(t);if(KZ(u,!1),q&&gc(q),!Xl&&(C=E&&E.onVnodeBeforeMount)&&XZ(C,Ll,t),KZ(u,!0),Q&&zl){const Dl=()=>{u.subTree=Id(u),zl(Q,u.subTree,u,a,null)};Xl?t.type.__asyncLoader().then(()=>!u.isUnmounted&&Dl()):Dl()}else{const Dl=u.subTree=Id(u);o(null,Dl,y,L,u,a,z),t.el=Dl.el}if(ml&&Pl(ml,a),!Xl&&(C=E&&E.onVnodeMounted)){const Dl=t;Pl(()=>XZ(C,Ll,Dl),a)}(t.shapeFlag&256||Ll&&hc(Ll.vnode)&&Ll.vnode.shapeFlag&256)&&u.a&&Pl(u.a,a),u.isMounted=!0,t=y=L=null}},S=u.effect=new db(w,bZ,()=>ub(I),u.scope),I=u.update=()=>{S.dirty&&S.run()};I.i=u,I.id=u.uid,KZ(u,!0),I()},Ml=(u,t,y)=>{t.component=u;const L=u.vnode.props;u.vnode=t,u.next=null,HG(u,t.props,L,y),BG(u,t.children,y),CZ(),Eb(u),FZ()},ul=(u,t,y,L,a,z,x,w,S=!1)=>{const I=u&&u.children,C=u?u.shapeFlag:0,Q=t.children,{patchFlag:E,shapeFlag:q}=t;if(E>0){if(E&128){fl(I,Q,y,L,a,z,x,w,S);return}else if(E&256){GZ(I,Q,y,L,a,z,x,w,S);return}}q&8?(C&16&&Sl(I,a,z),Q!==I&&N(y,Q)):C&16?q&16?fl(I,Q,y,L,a,z,x,w,S):Sl(I,a,z,!0):(C&8&&N(y,""),q&16&&tl(Q,y,L,a,z,x,w,S))},GZ=(u,t,y,L,a,z,x,w,S)=>{u=u||$Z,t=t||$Z;const I=u.length,C=t.length,Q=Math.min(I,C);let E;for(E=0;E<Q;E++){const q=t[E]=S?SZ(t[E]):tZ(t[E]);o(u[E],q,y,null,a,z,x,w,S)}I>C?Sl(u,a,z,!0,!1,Q):tl(t,y,L,a,z,x,w,S,Q)},fl=(u,t,y,L,a,z,x,w,S)=>{let I=0;const C=t.length;let Q=u.length-1,E=C-1;for(;I<=Q&&I<=E;){const q=u[I],ml=t[I]=S?SZ(t[I]):tZ(t[I]);if(HZ(q,ml))o(q,ml,y,null,a,z,x,w,S);else break;I++}for(;I<=Q&&I<=E;){const q=u[Q],ml=t[E]=S?SZ(t[E]):tZ(t[E]);if(HZ(q,ml))o(q,ml,y,null,a,z,x,w,S);else break;Q--,E--}if(I>Q){if(I<=E){const q=E+1,ml=q<C?t[q].el:L;for(;I<=E;)o(null,t[I]=S?SZ(t[I]):tZ(t[I]),y,ml,a,z,x,w,S),I++}}else if(I>E)for(;I<=Q;)Wl(u[I],a,z,!0),I++;else{const q=I,ml=I,Ll=new Map;for(I=ml;I<=E;I++){const _l=t[I]=S?SZ(t[I]):tZ(t[I]);_l.key!=null&&Ll.set(_l.key,I)}let Xl,Dl=0;const sZ=E-ml+1;let fZ=!1,xb=0;const Nc=new Array(sZ);for(I=0;I<sZ;I++)Nc[I]=0;for(I=q;I<=Q;I++){const _l=u[I];if(Dl>=sZ){Wl(_l,a,z,!0);continue}let YZ;if(_l.key!=null)YZ=Ll.get(_l.key);else for(Xl=ml;Xl<=E;Xl++)if(Nc[Xl-ml]===0&&HZ(_l,t[Xl])){YZ=Xl;break}YZ===void 0?Wl(_l,a,z,!0):(Nc[YZ-ml]=I+1,YZ>=xb?xb=YZ:fZ=!0,o(_l,t[YZ],y,null,a,z,x,w,S),Dl++)}const Db=fZ?c2(Nc):$Z;for(Xl=Db.length-1,I=sZ-1;I>=0;I--){const _l=ml+I,YZ=t[_l],Jb=_l+1<C?t[_l+1].el:L;Nc[I]===0?o(null,YZ,y,Jb,a,z,x,w,S):fZ&&(Xl<0||I!==Db[Xl]?B(YZ,y,Jb,2):Xl--)}}},B=(u,t,y,L,a=null)=>{const{el:z,type:x,transition:w,children:S,shapeFlag:I}=u;if(I&6){B(u.component.subTree,t,y,L);return}if(I&128){u.suspense.move(t,y,L);return}if(I&64){x.move(u,t,y,g);return}if(x===f){d(z,t,y);for(let Q=0;Q<S.length;Q++)B(S[Q],t,y,L);d(u.anchor,t,y);return}if(x===Hc){j(u,t,y);return}if(L!==2&&I&1&&w)if(L===0)w.beforeEnter(z),d(z,t,y),Pl(()=>w.enter(z),a);else{const{leave:Q,delayLeave:E,afterLeave:q}=w,ml=()=>d(z,t,y),Ll=()=>{Q(z,()=>{ml(),q&&q()})};E?E(z,ml,Ll):Ll()}else d(z,t,y)},Wl=(u,t,y,L=!1,a=!1)=>{const{type:z,props:x,ref:w,children:S,dynamicChildren:I,shapeFlag:C,patchFlag:Q,dirs:E,cacheIndex:q}=u;if(Q===-2&&(a=!1),w!=null&&Pd(w,null,y,u,!0),q!=null&&(t.renderCache[q]=void 0),C&256){t.ctx.deactivate(u);return}const ml=C&1&&E,Ll=!hc(u);let Xl;if(Ll&&(Xl=x&&x.onVnodeBeforeUnmount)&&XZ(Xl,t,u),C&6)gl(u.component,y,L);else{if(C&128){u.suspense.unmount(y,L);return}ml&&OZ(u,null,t,"beforeUnmount"),C&64?u.type.remove(u,t,y,g,L):I&&!I.hasOnce&&(z!==f||Q>0&&Q&64)?Sl(I,t,y,!1,!0):(z===f&&Q&384||!a&&C&16)&&Sl(S,t,y),L&&al(u)}(Ll&&(Xl=x&&x.onVnodeUnmounted)||ml)&&Pl(()=>{Xl&&XZ(Xl,t,u),ml&&OZ(u,null,t,"unmounted")},y)},al=u=>{const{type:t,el:y,anchor:L,transition:a}=u;if(t===f){Vl(y,L);return}if(t===Hc){$(u);return}const z=()=>{b(y),a&&!a.persisted&&a.afterLeave&&a.afterLeave()};if(u.shapeFlag&1&&a&&!a.persisted){const{leave:x,delayLeave:w}=a,S=()=>x(y,z);w?w(u.el,z,S):S()}else z()},Vl=(u,t)=>{let y;for(;u!==t;)y=X(u),b(u),u=y;b(t)},gl=(u,t,y)=>{const{bum:L,scope:a,update:z,subTree:x,um:w,m:S,a:I}=u;qb(S),qb(I),L&&gc(L),a.stop(),z&&(z.active=!1,Wl(x,u,t,y)),w&&Pl(w,t),Pl(()=>{u.isUnmounted=!0},t),t&&t.pendingBranch&&!t.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===t.pendingId&&(t.deps--,t.deps===0&&t.resolve())},Sl=(u,t,y,L=!1,a=!1,z=0)=>{for(let x=z;x<u.length;x++)Wl(u[x],t,y,L,a)},T=u=>{if(u.shapeFlag&6)return T(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const t=X(u.anchor||u.el),y=t&&t[qW];return y?X(y):t};let e=!1;const D=(u,t,y)=>{u==null?t._vnode&&Wl(t._vnode,null,null,!0):o(t._vnode||null,u,t,null,null,null,y),t._vnode=u,e||(e=!0,Eb(),wW(),e=!1)},g={p:o,um:Wl,m:B,r:al,mt:wl,mc:tl,pc:ul,pbc:bl,n:T,o:l};let il,zl;return{render:D,hydrate:il,createApp:EG(D,il)}}function nd({type:l,props:Z},c){return c==="svg"&&l==="foreignObject"||c==="mathml"&&l==="annotation-xml"&&Z&&Z.encoding&&Z.encoding.includes("html")?void 0:c}function KZ({effect:l,update:Z},c){l.allowRecurse=Z.allowRecurse=c}function Z2(l,Z){return(!l||l&&!l.pendingBranch)&&Z&&!Z.persisted}function hb(l,Z,c=!1){const d=l.children,b=Z.children;if(v(d)&&v(b))for(let m=0;m<d.length;m++){const W=d[m];let G=b[m];G.shapeFlag&1&&!G.dynamicChildren&&((G.patchFlag<=0||G.patchFlag===32)&&(G=b[m]=SZ(b[m]),G.el=W.el),!c&&G.patchFlag!==-2&&hb(W,G)),G.type===ud&&(G.el=W.el)}}function c2(l){const Z=l.slice(),c=[0];let d,b,m,W,G;const s=l.length;for(d=0;d<s;d++){const M=l[d];if(M!==0){if(b=c[c.length-1],l[b]<M){Z[d]=b,c.push(d);continue}for(m=0,W=c.length-1;m<W;)G=m+W>>1,l[c[G]]<M?m=G+1:W=G;M<l[c[m]]&&(m>0&&(Z[d]=c[m-1]),c[m]=d)}}for(m=c.length,W=c[m-1];m-- >0;)c[m]=W,W=Z[W];return c}function Z0(l){const Z=l.subTree.component;if(Z)return Z.asyncDep&&!Z.asyncResolved?Z:Z0(Z)}function qb(l){if(l)for(let Z=0;Z<l.length;Z++)l[Z].active=!1}const d2=Symbol.for("v-scx"),b2=()=>TZ(d2);function yb(l,Z){return Vb(l,null,Z)}const Oc={};function xl(l,Z,c){return Vb(l,Z,c)}function Vb(l,Z,{immediate:c,deep:d,flush:b,once:m,onTrack:W,onTrigger:G}=nl){if(Z&&m){const K=Z;Z=(...ll)=>{K(...ll),cl()}}const s=Cl,M=K=>d===!0?K:xZ(K,d===!1?1:void 0);let N,Y=!1,X=!1;if(ol(l)?(N=()=>l.value,Y=mc(l)):ic(l)?(N=()=>M(l),Y=!0):v(l)?(X=!0,Y=l.some(K=>ic(K)||mc(K)),N=()=>l.map(K=>{if(ol(K))return K.value;if(ic(K))return M(K);if(A(K))return JZ(K,s,2)})):A(l)?Z?N=()=>JZ(l,s,2):N=()=>(i&&i(),mZ(l,s,3,[p])):N=bZ,Z&&d){const K=N;N=()=>xZ(K())}let i,p=K=>{i=j.onStop=()=>{JZ(K,s,4),i=j.onStop=void 0}},o;if(Xd)if(p=bZ,Z?c&&mZ(Z,s,3,[N(),X?[]:void 0,p]):N(),b==="sync"){const K=b2();o=K.__watcherHandles||(K.__watcherHandles=[])}else return bZ;let F=X?new Array(l.length).fill(Oc):Oc;const J=()=>{if(!(!j.active||!j.dirty))if(Z){const K=j.run();(d||Y||(X?K.some((ll,tl)=>jZ(ll,F[tl])):jZ(K,F)))&&(i&&i(),mZ(Z,s,3,[K,F===Oc?void 0:X&&F[0]===Oc?[]:F,p]),F=K)}else j.run()};J.allowRecurse=!!Z;let U;b==="sync"?U=J:b==="post"?U=()=>Pl(J,s&&s.suspense):(J.pre=!0,s&&(J.id=s.uid),U=()=>ub(J));const j=new db(N,bZ,U),$=P0(),cl=()=>{j.stop(),$&&lb($.effects,j)};return Z?c?J():F=j.run():b==="post"?Pl(j.run.bind(j),s&&s.suspense):j.run(),o&&o.push(cl),cl}function m2(l,Z,c){const d=this.proxy,b=Rl(l)?l.includes(".")?c0(d,l):()=>d[l]:l.bind(d,d);let m;A(Z)?m=Z:(m=Z.handler,c=Z);const W=xc(this),G=Vb(b,m.bind(d),c);return W(),G}function c0(l,Z){const c=Z.split(".");return()=>{let d=l;for(let b=0;b<c.length&&d;b++)d=d[c[b]];return d}}function xZ(l,Z=1/0,c){if(Z<=0||!pl(l)||l.__v_skip||(c=c||new Set,c.has(l)))return l;if(c.add(l),Z--,ol(l))xZ(l.value,Z,c);else if(v(l))for(let d=0;d<l.length;d++)xZ(l[d],Z,c);else if(_m(l)||lc(l))l.forEach(d=>{xZ(d,Z,c)});else if(lW(l)){for(const d in l)xZ(l[d],Z,c);for(const d of Object.getOwnPropertySymbols(l))Object.prototype.propertyIsEnumerable.call(l,d)&&xZ(l[d],Z,c)}return l}const W2=(l,Z)=>Z==="modelValue"||Z==="model-value"?l.modelModifiers:l[`${Z}Modifiers`]||l[`${MZ(Z)}Modifiers`]||l[`${BZ(Z)}Modifiers`];function G2(l,Z,...c){if(l.isUnmounted)return;const d=l.vnode.props||nl;let b=c;const m=Z.startsWith("update:"),W=m&&W2(d,Z.slice(7));W&&(W.trim&&(b=c.map(N=>Rl(N)?N.trim():N)),W.number&&(b=c.map(jd)));let G,s=d[G=Td(Z)]||d[G=Td(MZ(Z))];!s&&m&&(s=d[G=Td(BZ(Z))]),s&&mZ(s,l,6,b);const M=d[G+"Once"];if(M){if(!l.emitted)l.emitted={};else if(l.emitted[G])return;l.emitted[G]=!0,mZ(M,l,6,b)}}function d0(l,Z,c=!1){const d=Z.emitsCache,b=d.get(l);if(b!==void 0)return b;const m=l.emits;let W={},G=!1;if(!A(l)){const s=M=>{const N=d0(M,Z,!0);N&&(G=!0,jl(W,N))};!c&&Z.mixins.length&&Z.mixins.forEach(s),l.extends&&s(l.extends),l.mixins&&l.mixins.forEach(s)}return!m&&!G?(pl(l)&&d.set(l,null),null):(v(m)?m.forEach(s=>W[s]=null):jl(W,m),pl(l)&&d.set(l,W),W)}function Md(l,Z){return!l||!Zd(Z)?!1:(Z=Z.slice(2).replace(/Once$/,""),Nl(l,Z[0].toLowerCase()+Z.slice(1))||Nl(l,BZ(Z))||Nl(l,Z))}function Id(l){const{type:Z,vnode:c,proxy:d,withProxy:b,propsOptions:[m],slots:W,attrs:G,emit:s,render:M,renderCache:N,props:Y,data:X,setupState:i,ctx:p,inheritAttrs:o}=l,F=rc(l);let J,U;try{if(c.shapeFlag&4){const $=b||d,cl=$;J=tZ(M.call(cl,$,N,Y,i,X,p)),U=G}else{const $=Z;J=tZ($.length>1?$(Y,{attrs:G,slots:W,emit:s}):$(Y,null)),U=Z.props?G:s2(G)}}catch($){Tc.length=0,Wd($,l,1),J=V(rl)}let j=J;if(U&&o!==!1){const $=Object.keys(U),{shapeFlag:cl}=j;$.length&&cl&7&&(m&&$.some($d)&&(U=N2(U,m)),j=UZ(j,U,!1,!0))}return c.dirs&&(j=UZ(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(c.dirs):c.dirs),c.transition&&(j.transition=c.transition),J=j,rc(F),J}const s2=l=>{let Z;for(const c in l)(c==="class"||c==="style"||Zd(c))&&((Z||(Z={}))[c]=l[c]);return Z},N2=(l,Z)=>{const c={};for(const d in l)(!$d(d)||!(d.slice(9)in Z))&&(c[d]=l[d]);return c};function M2(l,Z,c){const{props:d,children:b,component:m}=l,{props:W,children:G,patchFlag:s}=Z,M=m.emitsOptions;if(Z.dirs||Z.transition)return!0;if(c&&s>=0){if(s&1024)return!0;if(s&16)return d?$b(d,W,M):!!W;if(s&8){const N=Z.dynamicProps;for(let Y=0;Y<N.length;Y++){const X=N[Y];if(W[X]!==d[X]&&!Md(M,X))return!0}}}else return(b||G)&&(!G||!G.$stable)?!0:d===W?!1:d?W?$b(d,W,M):!0:!!W;return!1}function $b(l,Z,c){const d=Object.keys(Z);if(d.length!==Object.keys(l).length)return!0;for(let b=0;b<d.length;b++){const m=d[b];if(Z[m]!==l[m]&&!Md(c,m))return!0}return!1}function u2({vnode:l,parent:Z},c){for(;Z;){const d=Z.subTree;if(d.suspense&&d.suspense.activeBranch===l&&(d.el=l.el),d===l)(l=Z.vnode).el=c,Z=Z.parent;else break}}const Y2=l=>l.__isSuspense;function X2(l,Z){Z&&Z.pendingBranch?v(l)?Z.effects.push(...l):Z.effects.push(l):VG(l)}const f=Symbol.for("v-fgt"),ud=Symbol.for("v-txt"),rl=Symbol.for("v-cmt"),Hc=Symbol.for("v-stc"),Tc=[];let lZ=null;function R(l=!1){Tc.push(lZ=l?null:[])}function t2(){Tc.pop(),lZ=Tc[Tc.length-1]||null}let zc=1;function lm(l){zc+=l,l<0&&lZ&&(lZ.hasOnce=!0)}function b0(l){return l.dynamicChildren=zc>0?lZ||$Z:null,t2(),zc>0&&lZ&&lZ.push(l),l}function H(l,Z,c,d,b,m){return b0(h(l,Z,c,d,b,m,!0))}function yl(l,Z,c,d,b){return b0(V(l,Z,c,d,b,!0))}function fc(l){return l?l.__v_isVNode===!0:!1}function HZ(l,Z){return l.type===Z.type&&l.key===Z.key}const m0=({key:l})=>l??null,Pc=({ref:l,ref_key:Z,ref_for:c})=>(typeof l=="number"&&(l=""+l),l!=null?Rl(l)||ol(l)||A(l)?{i:Jl,r:l,k:Z,f:!!c}:l:null);function h(l,Z=null,c=null,d=0,b=null,m=l===f?0:1,W=!1,G=!1){const s={__v_isVNode:!0,__v_skip:!0,type:l,props:Z,key:Z&&m0(Z),ref:Z&&Pc(Z),scopeId:Gd,slotScopeIds:null,children:c,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:m,patchFlag:d,dynamicProps:b,dynamicChildren:null,appContext:null,ctx:Jl};return G?(Tb(s,c),m&128&&l.normalize(s)):c&&(s.shapeFlag|=Rl(c)?8:16),zc>0&&!W&&lZ&&(s.patchFlag>0||m&6)&&s.patchFlag!==32&&lZ.push(s),s}const V=i2;function i2(l,Z=null,c=null,d=0,b=null,m=!1){if((!l||l===CW)&&(l=rl),fc(l)){const G=UZ(l,Z,!0);return c&&Tb(G,c),zc>0&&!m&&lZ&&(G.shapeFlag&6?lZ[lZ.indexOf(l)]=G:lZ.push(G)),G.patchFlag=-2,G}if(z2(l)&&(l=l.__vccOpts),Z){Z=h2(Z);let{class:G,style:s}=Z;G&&!Rl(G)&&(Z.class=cb(G)),pl(s)&&(aW(s)&&!v(s)&&(s=jl({},s)),Z.style=$l(s))}const W=Rl(l)?1:Y2(l)?128:AG(l)?64:pl(l)?4:A(l)?2:0;return h(l,Z,c,d,b,W,m,!0)}function h2(l){return l?aW(l)||PW(l)?jl({},l):l:null}function UZ(l,Z,c=!1,d=!1){const{props:b,ref:m,patchFlag:W,children:G,transition:s}=l,M=Z?y2(b||{},Z):b,N={__v_isVNode:!0,__v_skip:!0,type:l.type,props:M,key:M&&m0(M),ref:Z&&Z.ref?c&&m?v(m)?m.concat(Pc(Z)):[m,Pc(Z)]:Pc(Z):m,scopeId:l.scopeId,slotScopeIds:l.slotScopeIds,children:G,target:l.target,targetStart:l.targetStart,targetAnchor:l.targetAnchor,staticCount:l.staticCount,shapeFlag:l.shapeFlag,patchFlag:Z&&l.type!==f?W===-1?16:W|16:W,dynamicProps:l.dynamicProps,dynamicChildren:l.dynamicChildren,appContext:l.appContext,dirs:l.dirs,transition:s,component:l.component,suspense:l.suspense,ssContent:l.ssContent&&UZ(l.ssContent),ssFallback:l.ssFallback&&UZ(l.ssFallback),el:l.el,anchor:l.anchor,ctx:l.ctx,ce:l.ce};return s&&d&&Bc(N,s.clone(N)),N}function r(l=" ",Z=0){return V(ud,null,l,Z)}function Yd(l,Z){const c=V(Hc,null,l);return c.staticCount=Z,c}function Hl(l="",Z=!1){return Z?(R(),yl(rl,null,l)):V(rl,null,l)}function tZ(l){return l==null||typeof l=="boolean"?V(rl):v(l)?V(f,null,l.slice()):typeof l=="object"?SZ(l):V(ud,null,String(l))}function SZ(l){return l.el===null&&l.patchFlag!==-1||l.memo?l:UZ(l)}function Tb(l,Z){let c=0;const{shapeFlag:d}=l;if(Z==null)Z=null;else if(v(Z))c=16;else if(typeof Z=="object")if(d&65){const b=Z.default;b&&(b._c&&(b._d=!1),Tb(l,b()),b._c&&(b._d=!0));return}else{c=32;const b=Z._;!b&&!PW(Z)?Z._ctx=Jl:b===3&&Jl&&(Jl.slots._===1?Z._=1:(Z._=2,l.patchFlag|=1024))}else A(Z)?(Z={default:Z,_ctx:Jl},c=32):(Z=String(Z),d&64?(c=16,Z=[r(Z)]):c=8);l.children=Z,l.shapeFlag|=c}function y2(...l){const Z={};for(let c=0;c<l.length;c++){const d=l[c];for(const b in d)if(b==="class")Z.class!==d.class&&(Z.class=cb([Z.class,d.class]));else if(b==="style")Z.style=$l([Z.style,d.style]);else if(Zd(b)){const m=Z[b],W=d[b];W&&m!==W&&!(v(m)&&m.includes(W))&&(Z[b]=m?[].concat(m,W):W)}else b!==""&&(Z[b]=d[b])}return Z}function XZ(l,Z,c,d=null){mZ(l,Z,7,[c,d])}const V2=EW();let T2=0;function a2(l,Z,c){const d=l.type,b=(Z?Z.appContext:l.appContext)||V2,m={uid:T2++,vnode:l,type:d,parent:Z,appContext:b,root:null,next:null,subTree:null,effect:null,update:null,scope:new WW(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:Z?Z.provides:Object.create(b.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:rW(d,b),emitsOptions:d0(d,b),emit:null,emitted:null,propsDefaults:nl,inheritAttrs:d.inheritAttrs,ctx:nl,data:nl,props:nl,attrs:nl,slots:nl,refs:nl,setupState:nl,setupContext:null,suspense:c,suspenseId:c?c.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return m.ctx={_:m},m.root=Z?Z.root:m,m.emit=G2.bind(null,m),l.ce&&l.ce(m),m}let Cl=null;const W0=()=>Cl||Jl;let _c,rd;{const l=cW(),Z=(c,d)=>{let b;return(b=l[c])||(b=l[c]=[]),b.push(d),m=>{b.length>1?b.forEach(W=>W(m)):b[0](m)}};_c=Z("__VUE_INSTANCE_SETTERS__",c=>Cl=c),rd=Z("__VUE_SSR_SETTERS__",c=>Xd=c)}const xc=l=>{const Z=Cl;return _c(l),l.scope.on(),()=>{l.scope.off(),_c(Z)}},Zm=()=>{Cl&&Cl.scope.off(),_c(null)};function G0(l){return l.vnode.shapeFlag&4}let Xd=!1;function L2(l,Z=!1,c=!1){Z&&rd(Z);const{props:d,children:b}=l.vnode,m=G0(l);QG(l,d,m,Z),rG(l,b,c);const W=m?p2(l,Z):void 0;return Z&&rd(!1),W}function p2(l,Z){const c=l.type;l.accessCache=Object.create(null),l.proxy=new Proxy(l.ctx,JG);const{setup:d}=c;if(d){const b=l.setupContext=d.length>1?N0(l):null,m=xc(l);CZ();const W=JZ(d,l,0,[l.props,b]);if(FZ(),m(),qm(W)){if(W.then(Zm,Zm),Z)return W.then(G=>{cm(l,G,Z)}).catch(G=>{Wd(G,l,0)});l.asyncDep=W}else cm(l,W,Z)}else s0(l,Z)}function cm(l,Z,c){A(Z)?l.type.__ssrInlineRender?l.ssrRender=Z:l.render=Z:pl(Z)&&(l.setupState=zW(Z)),s0(l,c)}let dm;function s0(l,Z,c){const d=l.type;if(!l.render){if(!Z&&dm&&!d.render){const b=d.template||tb(l).template;if(b){const{isCustomElement:m,compilerOptions:W}=l.appContext.config,{delimiters:G,compilerOptions:s}=d,M=jl(jl({isCustomElement:m,delimiters:G},W),s);d.render=dm(b,M)}}l.render=d.render||bZ}{const b=xc(l);CZ();try{kG(l)}finally{FZ(),b()}}}const n2={get(l,Z){return Al(l,"get",""),l[Z]}};function N0(l){const Z=c=>{l.exposed=c||{}};return{attrs:new Proxy(l.attrs,n2),slots:l.slots,emit:l.emit,expose:Z}}function td(l){return l.exposed?l.exposeProxy||(l.exposeProxy=new Proxy(zW(LW(l.exposed)),{get(Z,c){if(c in Z)return Z[c];if(c in yc)return yc[c](l)},has(Z,c){return c in Z||c in yc}})):l.proxy}function I2(l,Z=!0){return A(l)?l.displayName||l.name:l.name||Z&&l.__name}function z2(l){return A(l)&&"__vccOpts"in l}const el=(l,Z)=>uG(l,Z,Xd);function cZ(l,Z,c){const d=arguments.length;return d===2?pl(Z)&&!v(Z)?fc(Z)?V(l,null,[Z]):V(l,Z):V(l,null,Z):(d>3?c=Array.prototype.slice.call(arguments,2):d===3&&fc(c)&&(c=[c]),V(l,Z,c))}const o2="3.4.38";/**
* @vue/runtime-dom v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const R2="http://www.w3.org/2000/svg",w2="http://www.w3.org/1998/Math/MathML",yZ=typeof document<"u"?document:null,bm=yZ&&yZ.createElement("template"),S2={insert:(l,Z,c)=>{Z.insertBefore(l,c||null)},remove:l=>{const Z=l.parentNode;Z&&Z.removeChild(l)},createElement:(l,Z,c,d)=>{const b=Z==="svg"?yZ.createElementNS(R2,l):Z==="mathml"?yZ.createElementNS(w2,l):c?yZ.createElement(l,{is:c}):yZ.createElement(l);return l==="select"&&d&&d.multiple!=null&&b.setAttribute("multiple",d.multiple),b},createText:l=>yZ.createTextNode(l),createComment:l=>yZ.createComment(l),setText:(l,Z)=>{l.nodeValue=Z},setElementText:(l,Z)=>{l.textContent=Z},parentNode:l=>l.parentNode,nextSibling:l=>l.nextSibling,querySelector:l=>yZ.querySelector(l),setScopeId(l,Z){l.setAttribute(Z,"")},insertStaticContent(l,Z,c,d,b,m){const W=c?c.previousSibling:Z.lastChild;if(b&&(b===m||b.nextSibling))for(;Z.insertBefore(b.cloneNode(!0),c),!(b===m||!(b=b.nextSibling)););else{bm.innerHTML=d==="svg"?`<svg>${l}</svg>`:d==="mathml"?`<math>${l}</math>`:l;const G=bm.content;if(d==="svg"||d==="mathml"){const s=G.firstChild;for(;s.firstChild;)G.appendChild(s.firstChild);G.removeChild(s)}Z.insertBefore(G,c)}return[W?W.nextSibling:Z.firstChild,c?c.previousSibling:Z.lastChild]}},IZ="transition",Mc="animation",oc=Symbol("_vtc"),dZ=(l,{slots:Z})=>cZ(pG,e2(l),Z);dZ.displayName="Transition";const M0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};dZ.props=jl({},eW,M0);const gZ=(l,Z=[])=>{v(l)?l.forEach(c=>c(...Z)):l&&l(...Z)},mm=l=>l?v(l)?l.some(Z=>Z.length>1):l.length>1:!1;function e2(l){const Z={};for(const O in l)O in M0||(Z[O]=l[O]);if(l.css===!1)return Z;const{name:c="v",type:d,duration:b,enterFromClass:m=`${c}-enter-from`,enterActiveClass:W=`${c}-enter-active`,enterToClass:G=`${c}-enter-to`,appearFromClass:s=m,appearActiveClass:M=W,appearToClass:N=G,leaveFromClass:Y=`${c}-leave-from`,leaveActiveClass:X=`${c}-leave-active`,leaveToClass:i=`${c}-leave-to`}=l,p=x2(b),o=p&&p[0],F=p&&p[1],{onBeforeEnter:J,onEnter:U,onEnterCancelled:j,onLeave:$,onLeaveCancelled:cl,onBeforeAppear:K=J,onAppear:ll=U,onAppearCancelled:tl=j}=Z,P=(O,sl,wl)=>{EZ(O,sl?N:G),EZ(O,sl?M:W),wl&&wl()},bl=(O,sl)=>{O._isLeaving=!1,EZ(O,Y),EZ(O,i),EZ(O,X),sl&&sl()},Gl=O=>(sl,wl)=>{const Ol=O?ll:U,Tl=()=>P(sl,O,wl);gZ(Ol,[sl,Tl]),Wm(()=>{EZ(sl,O?s:m),zZ(sl,O?N:G),mm(Ol)||Gm(sl,d,o,Tl)})};return jl(Z,{onBeforeEnter(O){gZ(J,[O]),zZ(O,m),zZ(O,W)},onBeforeAppear(O){gZ(K,[O]),zZ(O,s),zZ(O,M)},onEnter:Gl(!1),onAppear:Gl(!0),onLeave(O,sl){O._isLeaving=!0;const wl=()=>bl(O,sl);zZ(O,Y),zZ(O,X),j2(),Wm(()=>{O._isLeaving&&(EZ(O,Y),zZ(O,i),mm($)||Gm(O,d,F,wl))}),gZ($,[O,wl])},onEnterCancelled(O){P(O,!1),gZ(j,[O])},onAppearCancelled(O){P(O,!0),gZ(tl,[O])},onLeaveCancelled(O){bl(O),gZ(cl,[O])}})}function x2(l){if(l==null)return null;if(pl(l))return[zd(l.enter),zd(l.leave)];{const Z=zd(l);return[Z,Z]}}function zd(l){return k0(l)}function zZ(l,Z){Z.split(/\s+/).forEach(c=>c&&l.classList.add(c)),(l[oc]||(l[oc]=new Set)).add(Z)}function EZ(l,Z){Z.split(/\s+/).forEach(d=>d&&l.classList.remove(d));const c=l[oc];c&&(c.delete(Z),c.size||(l[oc]=void 0))}function Wm(l){requestAnimationFrame(()=>{requestAnimationFrame(l)})}let D2=0;function Gm(l,Z,c,d){const b=l._endId=++D2,m=()=>{b===l._endId&&d()};if(c)return setTimeout(m,c);const{type:W,timeout:G,propCount:s}=J2(l,Z);if(!W)return d();const M=W+"end";let N=0;const Y=()=>{l.removeEventListener(M,X),m()},X=i=>{i.target===l&&++N>=s&&Y()};setTimeout(()=>{N<s&&Y()},G+1),l.addEventListener(M,X)}function J2(l,Z){const c=window.getComputedStyle(l),d=p=>(c[p]||"").split(", "),b=d(`${IZ}Delay`),m=d(`${IZ}Duration`),W=sm(b,m),G=d(`${Mc}Delay`),s=d(`${Mc}Duration`),M=sm(G,s);let N=null,Y=0,X=0;Z===IZ?W>0&&(N=IZ,Y=W,X=m.length):Z===Mc?M>0&&(N=Mc,Y=M,X=s.length):(Y=Math.max(W,M),N=Y>0?W>M?IZ:Mc:null,X=N?N===IZ?m.length:s.length:0);const i=N===IZ&&/\b(transform|all)(,|$)/.test(d(`${IZ}Property`).toString());return{type:N,timeout:Y,propCount:X,hasTransform:i}}function sm(l,Z){for(;l.length<Z.length;)l=l.concat(l);return Math.max(...Z.map((c,d)=>Nm(c)+Nm(l[d])))}function Nm(l){return l==="auto"?0:Number(l.slice(0,-1).replace(",","."))*1e3}function j2(){return document.body.offsetHeight}function U2(l,Z,c){const d=l[oc];d&&(Z=(Z?[Z,...d]:[...d]).join(" ")),Z==null?l.removeAttribute("class"):c?l.setAttribute("class",Z):l.className=Z}const qc=Symbol("_vod"),u0=Symbol("_vsh"),Mm={beforeMount(l,{value:Z},{transition:c}){l[qc]=l.style.display==="none"?"":l.style.display,c&&Z?c.beforeEnter(l):uc(l,Z)},mounted(l,{value:Z},{transition:c}){c&&Z&&c.enter(l)},updated(l,{value:Z,oldValue:c},{transition:d}){!Z!=!c&&(d?Z?(d.beforeEnter(l),uc(l,!0),d.enter(l)):d.leave(l,()=>{uc(l,!1)}):uc(l,Z))},beforeUnmount(l,{value:Z}){uc(l,Z)}};function uc(l,Z){l.style.display=Z?l[qc]:"none",l[u0]=!Z}const k2=Symbol(""),C2=/(^|;)\s*display\s*:/;function F2(l,Z,c){const d=l.style,b=Rl(c);let m=!1;if(c&&!b){if(Z)if(Rl(Z))for(const W of Z.split(";")){const G=W.slice(0,W.indexOf(":")).trim();c[G]==null&&vc(d,G,"")}else for(const W in Z)c[W]==null&&vc(d,W,"");for(const W in c)W==="display"&&(m=!0),vc(d,W,c[W])}else if(b){if(Z!==c){const W=d[k2];W&&(c+=";"+W),d.cssText=c,m=C2.test(c)}}else Z&&l.removeAttribute("style");qc in l&&(l[qc]=m?d.display:"",l[u0]&&(d.display="none"))}const um=/\s*!important$/;function vc(l,Z,c){if(v(c))c.forEach(d=>vc(l,Z,d));else if(c==null&&(c=""),Z.startsWith("--"))l.setProperty(Z,c);else{const d=O2(l,Z);um.test(c)?l.setProperty(BZ(d),c.replace(um,""),"important"):l[d]=c}}const Ym=["Webkit","Moz","ms"],od={};function O2(l,Z){const c=od[Z];if(c)return c;let d=MZ(Z);if(d!=="filter"&&d in l)return od[Z]=d;d=bd(d);for(let b=0;b<Ym.length;b++){const m=Ym[b]+d;if(m in l)return od[Z]=m}return Z}const Xm="http://www.w3.org/1999/xlink";function tm(l,Z,c,d,b,m=E0(Z)){d&&Z.startsWith("xlink:")?c==null?l.removeAttributeNS(Xm,Z.slice(6,Z.length)):l.setAttributeNS(Xm,Z,c):c==null||m&&!dW(c)?l.removeAttribute(Z):l.setAttribute(Z,m?"":kZ(c)?String(c):c)}function K2(l,Z,c,d){if(Z==="innerHTML"||Z==="textContent"){if(c==null)return;l[Z]=c;return}const b=l.tagName;if(Z==="value"&&b!=="PROGRESS"&&!b.includes("-")){const W=b==="OPTION"?l.getAttribute("value")||"":l.value,G=c==null?"":String(c);(W!==G||!("_value"in l))&&(l.value=G),c==null&&l.removeAttribute(Z),l._value=c;return}let m=!1;if(c===""||c==null){const W=typeof l[Z];W==="boolean"?c=dW(c):c==null&&W==="string"?(c="",m=!0):W==="number"&&(c=0,m=!0)}try{l[Z]=c}catch{}m&&l.removeAttribute(Z)}function _Z(l,Z,c,d){l.addEventListener(Z,c,d)}function g2(l,Z,c,d){l.removeEventListener(Z,c,d)}const im=Symbol("_vei");function E2(l,Z,c,d,b=null){const m=l[im]||(l[im]={}),W=m[Z];if(d&&W)W.value=d;else{const[G,s]=Q2(Z);if(d){const M=m[Z]=v2(d,b);_Z(l,G,M,s)}else W&&(g2(l,G,W,s),m[Z]=void 0)}}const hm=/(?:Once|Passive|Capture)$/;function Q2(l){let Z;if(hm.test(l)){Z={};let d;for(;d=l.match(hm);)l=l.slice(0,l.length-d[0].length),Z[d[0].toLowerCase()]=!0}return[l[2]===":"?l.slice(3):BZ(l.slice(2)),Z]}let Rd=0;const H2=Promise.resolve(),P2=()=>Rd||(H2.then(()=>Rd=0),Rd=Date.now());function v2(l,Z){const c=d=>{if(!d._vts)d._vts=Date.now();else if(d._vts<=c.attached)return;mZ(r2(d,c.value),Z,5,[d])};return c.value=l,c.attached=P2(),c}function r2(l,Z){if(v(Z)){const c=l.stopImmediatePropagation;return l.stopImmediatePropagation=()=>{c.call(l),l._stopped=!0},Z.map(d=>b=>!b._stopped&&d&&d(b))}else return Z}const ym=l=>l.charCodeAt(0)===111&&l.charCodeAt(1)===110&&l.charCodeAt(2)>96&&l.charCodeAt(2)<123,B2=(l,Z,c,d,b,m)=>{const W=b==="svg";Z==="class"?U2(l,d,W):Z==="style"?F2(l,c,d):Zd(Z)?$d(Z)||E2(l,Z,c,d,m):(Z[0]==="."?(Z=Z.slice(1),!0):Z[0]==="^"?(Z=Z.slice(1),!1):A2(l,Z,d,W))?(K2(l,Z,d),!l.tagName.includes("-")&&(Z==="value"||Z==="checked"||Z==="selected")&&tm(l,Z,d,W,m,Z!=="value")):(Z==="true-value"?l._trueValue=d:Z==="false-value"&&(l._falseValue=d),tm(l,Z,d,W))};function A2(l,Z,c,d){if(d)return!!(Z==="innerHTML"||Z==="textContent"||Z in l&&ym(Z)&&A(c));if(Z==="spellcheck"||Z==="draggable"||Z==="translate"||Z==="form"||Z==="list"&&l.tagName==="INPUT"||Z==="type"&&l.tagName==="TEXTAREA")return!1;if(Z==="width"||Z==="height"){const b=l.tagName;if(b==="IMG"||b==="VIDEO"||b==="CANVAS"||b==="SOURCE")return!1}return ym(Z)&&Rl(c)?!1:Z in l}const Vm=l=>{const Z=l.props["onUpdate:modelValue"]||!1;return v(Z)?c=>gc(Z,c):Z};function f2(l){l.target.composing=!0}function Tm(l){const Z=l.target;Z.composing&&(Z.composing=!1,Z.dispatchEvent(new Event("input")))}const wd=Symbol("_assign"),ql={created(l,{modifiers:{lazy:Z,trim:c,number:d}},b){l[wd]=Vm(b);const m=d||b.props&&b.props.type==="number";_Z(l,Z?"change":"input",W=>{if(W.target.composing)return;let G=l.value;c&&(G=G.trim()),m&&(G=jd(G)),l[wd](G)}),c&&_Z(l,"change",()=>{l.value=l.value.trim()}),Z||(_Z(l,"compositionstart",f2),_Z(l,"compositionend",Tm),_Z(l,"change",Tm))},mounted(l,{value:Z}){l.value=Z??""},beforeUpdate(l,{value:Z,oldValue:c,modifiers:{lazy:d,trim:b,number:m}},W){if(l[wd]=Vm(W),l.composing)return;const G=(m||l.type==="number")&&!/^0\d/.test(l.value)?jd(l.value):l.value,s=Z??"";G!==s&&(document.activeElement===l&&l.type!=="range"&&(d&&Z===c||b&&l.value.trim()===s)||(l.value=s))}},_2=["ctrl","shift","alt","meta"],q2={stop:l=>l.stopPropagation(),prevent:l=>l.preventDefault(),self:l=>l.target!==l.currentTarget,ctrl:l=>!l.ctrlKey,shift:l=>!l.shiftKey,alt:l=>!l.altKey,meta:l=>!l.metaKey,left:l=>"button"in l&&l.button!==0,middle:l=>"button"in l&&l.button!==1,right:l=>"button"in l&&l.button!==2,exact:(l,Z)=>_2.some(c=>l[`${c}Key`]&&!Z.includes(c))},$c=(l,Z)=>{const c=l._withMods||(l._withMods={}),d=Z.join(".");return c[d]||(c[d]=(b,...m)=>{for(let W=0;W<Z.length;W++){const G=q2[Z[W]];if(G&&G(b,Z))return}return l(b,...m)})},$2=jl({patchProp:B2},S2);let am;function Y0(){return am||(am=$G($2))}const ls=(...l)=>{Y0().render(...l)},Zs=(...l)=>{const Z=Y0().createApp(...l),{mount:c}=Z;return Z.mount=d=>{const b=ds(d);if(!b)return;const m=Z._component;!A(m)&&!m.render&&!m.template&&(m.template=b.innerHTML),b.innerHTML="";const W=c(b,!1,cs(b));return b instanceof Element&&(b.removeAttribute("v-cloak"),b.setAttribute("data-v-app","")),W},Z};function cs(l){if(l instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&l instanceof MathMLElement)return"mathml"}function ds(l){return Rl(l)?document.querySelector(l):l}let Sd=!1;function ed(l,Z,c){l&&Z&&c&&(l==null||l.addEventListener(Z,c,!1))}function Lm(l,Z,c){l&&Z&&c&&(l==null||l.removeEventListener(Z,c,!1))}function Rc(l,Z){const c=function(b){var m;(m=Z.drag)==null||m.call(Z,b)},d=function(b){var m;Lm(globalThis.document,"mousemove",c),Lm(globalThis.document,"mouseup",d),globalThis.document.onselectstart=null,globalThis.document.ondragstart=null,Sd=!1,(m=Z.end)==null||m.call(Z,b)};ed(l,"mousedown",function(b){var m;Sd||(globalThis.document.onselectstart=()=>!1,globalThis.document.ondragstart=()=>!1,ed(globalThis.document,"mousemove",c),ed(globalThis.document,"mouseup",d),Sd=!0,(m=Z.start)==null||m.call(Z,b))})}var ab=WZ({name:"ColorPanel",props:{value:{type:Object,required:!0},height:{type:Number,default:150},width:{type:Number,default:210}},emits:["update:value"],setup(l){const Z=k(null),c=k(0),d=k(0),b=el(()=>`hsl(${l.value.get("h")}, 100%, 50%)`);function m(){const G=l.value.get("s"),s=l.value.get("v"),{clientWidth:M,clientHeight:N}=Z.value;c.value=G*M/100,d.value=(100-s)*N/100}function W(G){let s=Z.value.getBoundingClientRect(),M=G.clientX-s.left,N=G.clientY-s.top;M=Math.max(0,M),M=Math.min(M,s.width),N=Math.max(0,N),N=Math.min(N,s.height),c.value=M,d.value=d,l.value.set("s",M/s.width*100),l.value.set("v",100-N/s.height*100)}return xl([()=>l.value.get("h"),()=>l.value.get("v")],()=>m()),sc(()=>{AZ(()=>{Rc(Z.value,{drag:G=>{W(G)},end:G=>{W(G)}}),m()})}),{colorPanelRef:Z,background:b,onMousedown:W,left:c,top:d}}});const bs=V("div",{class:"color-panel-white"},null,-1),ms=V("div",{class:"color-panel-black"},null,-1),Ws=V("div",null,null,-1);function Gs(l,Z,c,d,b,m){return R(),yl("div",{class:"color-panel",ref:"colorPanelRef",style:{backgroundColor:l.background,width:`${l.width}px`,height:`${l.height}px`},onMousedown:Z[1]||(Z[1]=(...W)=>l.onMousedown(...W))},[bs,ms,V("div",{style:{left:`${l.left}px`,top:`${l.top}px`},class:"color-slider"},[Ws],4)],36)}function LZ(l,Z){Z===void 0&&(Z={});var c=Z.insertAt;if(!(!l||typeof document>"u")){var d=document.head||document.getElementsByTagName("head")[0],b=document.createElement("style");b.type="text/css",c==="top"&&d.firstChild?d.insertBefore(b,d.firstChild):d.appendChild(b),b.styleSheet?b.styleSheet.cssText=l:b.appendChild(document.createTextNode(l))}}var ss=`
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
`;LZ(ss);ab.render=Gs;ab.__file="src/component/ColorPanel.vue";var Lb=WZ({name:"ColorStraw",emits:["updateColor"],setup(l,{emit:Z}){return{onEyeDropper:d=>{d.stopPropagation(),new EyeDropper().open().then(m=>{Z("updateColor",m.sRGBHex)}).catch(m=>{console.error(m)})}}}});const Ns=V("svg",{viewBox:"0 0 1024 1024",width:"16",height:"16"},[V("path",{d:"M861.098667 439.424c-0.426667 0.426667-2.346667-0.768-4.266667-2.688l-267.52-267.562667c-1.962667-1.92-3.157333-3.84-2.730667-4.266666l60.288-60.245334c0.426667-0.426667 2.346667 0.768 4.266667 2.688l267.52 267.52c1.92 1.92 3.114667 3.84 2.688 4.266667l-60.245333 60.288z m131.925333-283.690667L868.992 31.701333C837.76 0.426667 792.746667-7.168 759.04 10.154667a77.653333 77.653333 0 0 0-19.541333 14.208l-36.992 36.949333c-2.645333 2.688-5.077333 5.546667-7.253334 8.448 0.426667 0.597333 0.938667 1.194667 1.536 1.792l256.512 256.512a17.578667 17.578667 0 0 0 1.664 1.450667c2.944-2.218667 5.802667-4.608 8.448-7.253334l36.992-36.992c5.845333-5.888 10.538667-12.458667 14.208-19.584 17.28-33.706667 9.642667-78.72-21.589333-109.952zM380.885333 917.930667c-1.664 6.016 433.749333-430.08 433.749334-430.08 3.072-3.114667 5.248-5.973333 4.864-6.357334L762.88 424.874667c-0.426667-0.426667-3.242667 1.792-6.314667 4.864L329.642667 857.258667c-0.170667 0.170667-9.728 5.717333-9.898667 5.888 0 0-164.309333 47.786667-168.448 48-3.413333 0.256-20.906667-19.541333-20.906667-19.541334s-16.384-14.506667-16.384-18.048c0-3.541333 52.224-179.413333 52.224-179.413333l424.874667-427.52c3.072-3.072 5.290667-5.888 4.906667-6.272l-52.949334-52.906667c-0.384-0.426667-3.2 1.792-6.272 4.864L104.32 644.778667c-0.426667 0.426667-6.016 6.144-6.698667 8.362666l-90.88 306.688a41.130667 41.130667 0 0 0 55.808 57.301334c0.682667 0.128 2.090667 0 3.626667-0.469334 0 0 293.930667-86.144 298.624-89.941333l16.085333-8.789333z m332.288-542.549334l-70.442666-70.485333c-0.512-0.469333-3.413333 1.578667-6.4 4.608l-427.093334 427.093333a21.674667 21.674667 0 0 0-4.565333 5.802667l57.770667 12.970667a9.557333 9.557333 0 0 1 6.058666 8.021333l7.68 49.834667a26.709333 26.709333 0 0 0 5.376-4.394667L708.565333 381.866667c3.072-3.072 5.12-5.973333 4.608-6.442667z","p-id":"4133"})],-1);function Ms(l,Z,c,d,b,m){return R(),yl("div",{class:"color-straw",onClick:Z[1]||(Z[1]=(...W)=>l.onEyeDropper(...W))},[Ns])}var us=`
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
`;LZ(us);Lb.render=Ms;Lb.__file="src/component/ColorStraw.vue";const Ys=12;var pb=WZ({name:"ColorHue",props:{value:{type:Object,required:!0},width:{type:Number,required:!0}},setup(l){const Z=k(null),c=k(null),d=k(null),b=k(0),m=k(0);function W(s){const M=Z.value.getBoundingClientRect();let N=s.clientX-M.left;N=Math.min(N,M.width-d.value.offsetWidth/2),N=Math.max(d.value.offsetWidth/2,N);const Y=Math.round((N-d.value.offsetWidth/2)/(M.width-d.value.offsetWidth)*360);l.value.set("h",Y)}function G(){const s=l.value.get("h");Z.value||(m.value=0),m.value=Math.round(s*(Z.value.offsetWidth-d.value.offsetWidth/2)/360)}return xl(()=>l.value.get("h"),()=>G()),sc(()=>{AZ(()=>{const s={drag:M=>{W(M)},end:M=>{W(M)}};Rc(c.value,s),Rc(d.value,s),G()})}),{hueRef:Z,barRef:c,thumbRef:d,onMousedown:W,left:m,top:b,height:Ys}}});function Xs(l,Z,c,d,b,m){return R(),yl("div",{ref:"hueRef",style:{width:`${l.width}px`,height:`${l.height}px`,padding:`0 ${l.height/2}px`},class:"color-hue"},[V("div",{ref:"barRef",style:{height:`${l.height}px`}},null,4),V("div",{ref:"thumbRef",style:{width:`${l.height}px`,height:`${l.height}px`,top:`${l.top}px`,left:`${l.left}px`},onMousedown:Z[1]||(Z[1]=$c((...W)=>l.onMousedown(...W),["prevent","stop"]))},null,36)],4)}var ts=`
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
`;LZ(ts);pb.render=Xs;pb.__file="src/component/ColorHue.vue";const is=12;var nb=WZ({name:"ColorAlpha",props:{value:{type:Object,required:!0},width:{type:Number,default:100}},setup(l){const Z=k(null),c=k(null),d=k(null),b=k(0),m=k(0),W=el(()=>{if(l.value&&l.value.v){const{r:M,g:N,b:Y}=l.value.rgba;return`linear-gradient(to right, rgba(${M}, ${N}, ${Y}, 0) 0%, rgba(${M}, ${N}, ${Y}, 1) 100%)`}return null});function G(){const M=l.value.get("a");if(!Z.value)return m.value=0,0;m.value=Math.round(M*(Z.value.offsetWidth-d.value.offsetWidth/2)/100)}xl(()=>l.value.get("a"),()=>G());function s(M){const N=Z.value.getBoundingClientRect();let Y=M.clientX-N.left;Y=Math.max(d.value.offsetWidth/2,Y),Y=Math.min(Y,N.width-d.value.offsetWidth/2),l.value.set("a",Math.round((Y-d.value.offsetWidth/2)/(N.width-d.value.offsetWidth)*100))}return sc(()=>{AZ(()=>{const M={drag:N=>{s(N)},end:N=>{s(N)}};Rc(c.value,M),Rc(d.value,M),G()})}),{alphaRef:Z,barRef:c,thumbRef:d,height:is,onMousedown:s,top:b,left:m,background:W}}});function hs(l,Z,c,d,b,m){return R(),yl("div",{ref:"alphaRef",class:"color-alpha",style:{width:`${l.width}px`,height:`${l.height}px`}},[V("div",{ref:"barRef",style:{height:`${l.height}px`,background:l.background}},null,4),V("div",{ref:"thumbRef",style:{width:`${l.height}px`,height:`${l.height}px`,top:`${l.top}px`,left:`${l.left}px`}},null,4)],4)}var ys=`
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
`;LZ(ys);nb.render=hs;nb.__file="src/component/ColorAlpha.vue";class X0{constructor(Z){pZ(this,"_h",0);pZ(this,"_s",100);pZ(this,"_v",100);pZ(this,"_a",100);pZ(this,"_f","hex");pZ(this,"v","#fff");pZ(this,"s",!1);Z&&(this._f=om(Rm(Z)),this.format(Z))}format(Z,c){if(!Z)this._h=0,this._s=100,this._v=100,this.update();else{const d=(b,m,W)=>{this._h=Math.max(0,Math.min(360,b)),this._s=Math.max(0,Math.min(100,m)),this._v=Math.max(0,Math.min(100,W)),this.update()};switch(om(Rm(Z))){case"hex":this._hex(Z,d);break;case"rgb":this._rgba(Z,d);break;case"hsl":this._hsla(Z,d);break;default:throw Error(`非法颜色值--->${Z}`)}}}_hsla(Z,c){if(Z=pm(Z,/hsla|hsl|\(|\)/gm),Z.length===4?this._a=Math.floor(parseFloat(Z[3])*100):Z.length===3&&(this._a=100),Z.length>=3){const{h:d,s:b,v:m}=Vs(Z[0],Z[1],Z[2]);c(d,b,m)}}_rgba(Z,c){if(Z=pm(Z,/rgba|rgb|\(|\)/gm),Z.length===4?this._a=Math.floor(parseFloat(Z[3])*100):Z.length===3&&(this._a=100),Z.length>=3){const{h:d,s:b,v:m}=Im(Z[0],Z[1],Z[2]);c(d,b,m)}}_hex(Z,c){Z=Z.replace("#","").trim();let{r:d,g:b,b:m}=Ts(Z);Z.length===8?this._a=Math.floor(parseInt(Z.substring(6),16)/255*100):(Z.length===3||Z.length===6)&&(this._a=100);const{h:W,s:G,v:s}=Im(d,b,m);c(W,G,s)}set(Z,c){this[`_${Z}`]=c,this.update()}get(Z){return this[`_${Z}`]}update(){const{_h:Z,_s:c,_v:d,_a:b,_f:m}=this;switch(m){case"rgb":{const{r:W,g:G,b:s}=Kc(Z,c,d);this.v=b===100?`rgb(${W}, ${G}, ${s})`:`rgba(${W}, ${G}, ${s}, ${b/100})`;break}case"hsl":{const W=nm(Z,c/100,d/100);this.v=b===100?`hsl(${Math.round(Z)}, ${Math.round(W[0]*100)}%, ${Math.round(W[1]*100)}%)`:`hsla(${Math.round(Z)}, ${Math.round(W[0]*100)}%, ${Math.round(W[1]*100)}%, ${b/100})`;break}default:{const W=zm(Kc(Z,c,d)),G=Math.round(this._a/100*255);this.v=b===100?W:`${W}${G<=16?"0":""}${G.toString(16)}`;break}}}get hsla(){const{_h:Z,_s:c,_v:d,_a:b}=this,m=nm(Z,c/100,d/100);return{h:Math.round(Z),s:Math.round(m[0]*100),l:Math.round(m[1]*100),a:b/100}}get rgba(){const{_h:Z,_s:c,_v:d,_a:b}=this,{r:m,g:W,b:G}=Kc(Z,c,d);return{r:m,g:W,b:G,a:b/100}}get hex(){const{_h:Z,_s:c,_v:d,_a:b}=this,m=zm(Kc(Z,c,d)),W=Math.round(this._a/100*255);return b===100?m:`${m}${W<=16?"0":""}${W.toString(16)}`}}function pm(l,Z){return l.replace(Z,"").split(/\s|,/g).filter(c=>c!=="").map((c,d)=>d>2?parseFloat(c):parseInt(c,10))}const nm=function(l,Z,c){return[Z*c/((l=(2-Z)*c)<1?l:2-l)||0,l/2]};function Vs(l,Z,c){Z=Z/100,c=c/100;let d=Z;const b=Math.max(c,.01);c*=2,Z*=c<=1?c:2-c,d*=b<=1?b:2-b;const m=(c+Z)/2,W=Z===0?2*d/(b+d):2*Z/(c+Z);return{h:l,s:W*100,v:m*100}}function Kc(l,Z,c){l=bc(l,360)*6,Z=bc(Z,100),c=bc(c,100);const d=Math.floor(l),b=l-d,m=c*(1-Z),W=c*(1-b*Z),G=c*(1-(1-b)*Z),s=d%6,M=[c,W,m,m,G,c][s],N=[G,c,c,W,m,m][s],Y=[m,m,G,c,c,W][s];return{r:Math.round(M*255),g:Math.round(N*255),b:Math.round(Y*255)}}function Im(l,Z,c){l=bc(l,255),Z=bc(Z,255),c=bc(c,255);const d=Math.max(l,Z,c);let b,m;const W=d-Math.min(l,Z,c);if(W===0)b=m=0;else{m=W/d;const G=function(s){return(d-s)/6/W+1/2};switch(d){case l:{b=G(c)-G(Z);break}case Z:{b=1/3+G(l)-G(c);break}case c:{b=2/3+G(Z)-G(l);break}}b<0?b+=1:b>1&&(b-=1)}return{h:b*360,s:m*100,v:d*100}}function bc(l,Z){return l=typeof l=="string"&&l.indexOf(".")!==-1&&parseFloat(l)===1?"100%":l,l=Math.min(Z,Math.max(0,parseFloat(`${l}`))),l=typeof n=="string"&&n.indexOf("%")!==-1?parseInt(`${l*Z}`,10)/100:l,Math.abs(l-Z)<1e-6?1:l%Z/parseFloat(Z)}function Ts(l){if(!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(l))throw Error(`非法颜色值--->${l}`);let Z,c,d;return l.length===3?(Z=parseInt(l[0]+l[0],16),c=parseInt(l[1]+l[1],16),d=parseInt(l[2]+l[2],16)):(l.length===6||l.length===8)&&(Z=parseInt(l.substring(0,2),16),c=parseInt(l.substring(2,4),16),d=parseInt(l.substring(4,6),16)),{r:Z,g:c,b:d}}function zm({r:l,g:Z,b:c}){function d(b){return("0"+parseInt(b).toString(16)).slice(-2)}return isNaN(l)||isNaN(Z)||isNaN(c)?"":`#${d(l)}${d(Z)}${d(c)}`.toUpperCase()}function om(l){if(/^#/.test(l))return"hex";if(/^rgb\(/.test(l)||/^rgba\(/.test(l))return"rgb";if(/^hsl\(/.test(l)||/^hsla\(/.test(l))return"hsl";throw Error(`错误的颜色参数--->${l}`)}function Rm(l){const Z={red:"rgba(255, 0, 0, 1)",green:"rgba(0, 128, 0, 1)",blue:"rgba(0, 0, 255, 1)",magenta:"rgba(255, 0, 255, 1)",yellow:"rgba(255, 255, 0, 1)",chocolate:"rgba(210, 105, 30, 1)",black:"rgba(0, 0, 0, 1)",aquamarine:"rgba(127, 255, 212, 1)",lime:"rgba(0, 255, 0, 1)",fuchsia:"rgba(255, 0, 255, 1)",brass:"rgba(176, 160, 0, 1)",azure:"rgba(240, 255, 255, 1)",brown:"rgba(255, 127, 80, 1)",bronze:"rgba(254, 208, 160, 1)",deeppink:"rgba(255, 20, 147, 1)",aliceblue:"rgba(240, 248, 255, 1)",gray:"rgba(128, 128, 128, 1)",copper:"rgba(192, 0, 224, 1)",coral:"rgba(255, 127, 80, 1)",feldspar:"rgba(254, 208, 160, 1)",orange:"rgba(255, 165, 0, 1)",orchid:"rgba(255, 165, 0, 1)",pink:"rgba(255, 165, 0, 1)",plum:"rgba(221, 160, 221, 1)",quartz:"rgba(0, 160, 0, 1)",purple:"rgba(128, 0, 128, 1)",aliceblue:"rgba(240, 248, 255, 1)",antiquewith:"rgba(160, 0, 0, 1)",blanchedalmond:"rgba(255, 235, 205, 1)",blueviolet:"rgba(138, 43, 226, 1)",beige:"rgba(245, 245, 220, 1)",burlywood:"rgba(222, 184, 135, 1)",bisque:"rgba(255, 228, 196, 1)",cadetblue:"rgba(95, 158, 160, 1)",pink:"rgba(255, 192, 203, 1)",saddlebrown:"rgba(139, 69, 19, 1)",royalblue:"rgba(65, 105, 225, 1)",rosybrown:"rgba(188, 143, 143, 1)",purple:"rgba(128, 0, 128, 1)",orengered:"rgba(14, 14, 237, 1)",olivedrab:"rgba(107, 142, 35, 1)",powderblue:"rgba(176, 224, 230, 1)",peachpuff:"rgba(255, 218, 185, 1)",papayawhip:"rgba(255, 239, 213, 1)",paleturquoise:"rgba(175, 238, 238, 1)",palevioletred:"rgba(219, 112, 147, 1)",palegreen:"rgba(152, 251, 152, 1)",navyblue:"rgba(160, 176, 224, 1)",navajowhite:"rgba(255, 222, 173, 1)",palegodenrod:"rgba(160, 13, 0, 1)",violetred:"rgba(0, 224, 237, 1)",yellowgreen:"rgba(154, 205, 50, 1)",tomato:"rgba(255, 99, 71, 1)",turquoise:"rgba(64, 224, 208, 1)",thistle:"rgba(216, 191, 216, 1)",springgreen:"rgba(0, 255, 127, 1)",steelblue:"rgba(70, 130, 180, 1)",salmon:"rgba(250, 128, 114, 1)",scarlet:"rgba(202, 14, 0, 1)",sienna:"rgba(160, 82, 45, 1)",silver:"rgba(192, 192, 192, 1)",tan:"rgba(210, 180, 140, 1)",thistle:"rgba(216, 191, 216, 1)",turquoise:"rgba(64, 224, 208, 1)",violet:"rgba(238, 130, 238, 1)",snow:"rgba(255, 250, 250, 1)",salmon:"rgba(250, 128, 114, 1)",scarlet:"rgba(202, 14, 0, 1)",sienna:"rgba(160, 82, 45, 1)",silver:"rgba(192, 192, 192, 1)",thistle:"rgba(216, 191, 216, 1)",turquoise:"rgba(64, 224, 208, 1)",violet:"rgba(238, 130, 238, 1)",chartreuse:"rgba(127, 255, 0, 1)",firebrick:"rgba(178, 34, 34, 1)",gold:"rgba(255, 215, 0, 1)",khaki:"rgba(240, 230, 140, 1)",mediumslateblue:"rgba(123, 104, 238, 1)",mediumvioletred:"rgba(199, 21, 133, 1)",oldlace:"rgba(253, 245, 230, 1)",maroom:"rgba(10, 0, 0, 1)",goldenrod:"rgba(218, 165, 32, 1)",wheat:"rgba(245, 222, 179, 1)",whitesmoke:"rgba(245, 245, 245, 1)",orange:"rgba(255, 165, 0, 1)",moccasin:"rgba(255, 228, 181, 1)",mistyrose:"rgba(255, 228, 225, 1)",mintcream:"rgba(245, 255, 250, 1)",midnightblue:"rgba(25, 25, 112, 1)",dimgray:"rgba(105, 105, 105, 1)",darksalmon:"rgba(233, 150, 122, 1)",slategray:"rgba(112, 128, 144, 1)",skyblue:"rgba(135, 206, 235, 1)",sienna:"rgba(160, 82, 45, 1)",seashell:"rgba(255, 245, 238, 1)",salmon:"rgba(250, 128, 114, 1)",seagreen:"rgba(46, 139, 87, 1)",sandybrown:"rgba(244, 164, 96, 1)",firebrick:"rgba(178, 34, 34, 1)",gold:"rgba(255, 215, 0, 1)",khaki:"rgba(240, 230, 140, 1)",maroom:"rgba(10, 0, 0, 1)",goldenrod:"rgba(218, 165, 32, 1)",wheat:"rgba(245, 222, 179, 1)",whitesmoke:"rgba(245, 245, 245, 1)",mediumturquoise:"rgba(72, 209, 204, 1)",navy:"rgba(0, 0, 128, 1)",mediumspringgreen:"rgba(0, 250, 154, 1)",mediumseagreen:"rgba(60, 179, 113, 1)",mediumpurpul:"rgba(237, 0, 0, 1)",peru:"rgba(205, 133, 63, 1)",mediumorchid:"rgba(186, 85, 211, 1)",mediumblue:"rgba(0, 0, 205, 1)",mediumaquamarine:"rgba(102, 205, 170, 1)",maroon:"rgba(128, 0, 0, 1)",limegreen:"rgba(50, 205, 50, 1)",lightyellow:"rgba(255, 255, 224, 1)",lightsteelblue:"rgba(176, 196, 222, 1)",magenta:"rgba(255, 0, 255, 1)",lightslateblue:"rgba(0, 0, 176, 1)",lightslategray:"rgba(119, 136, 153, 1)",lightskyblue:"rgba(135, 206, 250, 1)",inen:"rgba(0, 224, 0, 1)",lightseagreen:"rgba(32, 178, 170, 1)",lightsalmon:"rgba(255, 160, 122, 1)",lightpink:"rgba(255, 182, 193, 1)",plum:"rgba(221, 160, 221, 1)",lightgray:"rgba(0, 0, 160, 1)",lightgreen:"rgba(144, 238, 144, 1)",lightgodenrodyellow:"rgba(0, 222, 224, 1)",indianred:"rgba(205, 92, 92, 1)",lavender:"rgba(230, 230, 250, 1)",lightblue:"rgba(173, 216, 230, 1)",lavenderblush:"rgba(255, 240, 245, 1)",lightcoral:"rgba(240, 128, 128, 1)",lightcyan:"rgba(224, 255, 255, 1)",lightgodenrod:"rgba(0, 222, 208, 1)",hotpink:"rgba(255, 105, 180, 1)",greenyellow:"rgba(173, 255, 47, 1)",lemonchiffon:"rgba(255, 250, 205, 1)",lawngreen:"rgba(124, 252, 0, 1)",khaki:"rgba(240, 230, 140, 1)",deepskyblue:"rgba(0, 191, 255, 1)",honeydew:"rgba(240, 255, 240, 1)",golenrod:"rgba(0, 224, 13, 1)",forestgreen:"rgba(34, 139, 34, 1)",gostwhite:"rgba(0, 0, 14, 1)",greenyellow:"rgba(173, 255, 47, 1)",gainsboro:"rgba(220, 220, 220, 1)",firebrick:"rgba(178, 34, 34, 1)",dodgerblue:"rgba(30, 144, 255, 1)",darkturquoise:"rgba(0, 206, 209, 1)",darkslateblue:"rgba(72, 61, 139, 1)",darkslategray:"rgba(47, 79, 79, 1)",darkseagreen:"rgba(143, 188, 143, 1)",darkred:"rgba(139, 0, 0, 1)",darkorchid:"rgba(153, 50, 204, 1)",darkorenge:"rgba(218, 0, 14, 1)",darkslateblue:"rgba(72, 61, 139, 1)",darkviolet:"rgba(148, 0, 211, 1)",floralwhite:"rgba(255, 250, 240, 1)",cyan:"rgba(0, 255, 255, 1)","bisque darkgray":"rgba(255, 228, 196, 1)",cornsilk:"rgba(255, 248, 220, 1)",darkolivegreen:"rgba(255, 248, 220, 1)",darkgoldenrod:"rgba(184, 134, 11, 1)",darkblue:"rgba(0, 0, 139, 1)",darkcyan:"rgba(0, 139, 139, 1)",darkgreen:"rgba(0, 100, 0, 1)",darkhaki:"rgba(218, 0, 0, 1)",ivory:"rgba(255, 255, 240, 1)",darkmagenta:"rgba(139, 0, 139, 1)",darkgray:"rgba(169, 169, 169, 1)",cornfloewrblue:"rgba(192, 0, 176, 1)",cornfloewrblue:"rgba(192, 0, 176, 1)",darkviolet:"rgba(148, 0, 211, 1)",floralwhite:"rgba(255, 250, 240, 1)",darkslategray:"rgba(47, 79, 79, 1)",darkseagreen:"rgba(143, 188, 143, 1)",darkred:"rgba(139, 0, 0, 1)",darkorchid:"rgba(153, 50, 204, 1)",darkorenge:"rgba(218, 0, 14, 1)",darkslateblue:"rgba(72, 61, 139, 1)"};return Z[l]&&(l=Z[l]),l}const as=18;var Ib=WZ({name:"ColorList",props:{value:{type:Object,required:!0},colors:{type:Array,required:!0}},setup(l){const Z=el(()=>l.colors.map(d=>{const b=new X0(d);return b.s=b.hex===l.value.hex,b}));function c(d){l.value.format(l.colors[d])}return{rgbaColors:Z,height:as,handleSelect:c}}});const Ls={class:"color-list"};function ps(l,Z,c,d,b,m){return R(),yl("div",Ls,[(R(!0),yl(f,null,OW(l.rgbaColors,(W,G)=>(R(),yl("div",{class:"color",style:{width:`${l.height}px`,height:`${l.height}px`},key:G,onClick:s=>l.handleSelect(G)},[V("div",{class:{"is-selected":W.s,"is-alpha":W._a<100}},[V("div",{style:{width:`${l.height}px`,height:`${l.height}px`,backgroundColor:W.v}},null,4)],2)],12,["onClick"]))),128))])}var ns=`
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
`;LZ(ns);Ib.render=ps;Ib.__file="src/component/ColorList.vue";const wm=["hex","rgb","hsl"];var zb=WZ({name:"ColorValue",props:{value:{type:Object,required:!0},width:{type:Number,default:230}},setup(l){const Z=el(()=>l.value.get("f")),c=k(wm.indexOf(Z.value)),d=el(()=>l.width-21),b=el(()=>(Z.value==="hex"?d.value-15:d.value/4)-15),m=k(l.value.hex),W=k(l.value.rgba),G=k(l.value.hsla);function s(){c.value=(c.value+1)%3,l.value.set("f",wm[c.value])}function M(){/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(m.value.replace("#","").trim())&&l.value.format(m.value)}function N(){const X=W.value,i=X.r===""||X.g===""||X.b===""||X.a==="",p=!isNaN(X.r)&&!isNaN(X.g)&&!isNaN(X.b)&&!isNaN(X.a);if(i||!p)return;let o=Math.max(parseInt(X.r),0);o=Math.min(o,255);let F=Math.max(parseInt(X.g),0);F=Math.min(F,255);let J=Math.max(parseInt(X.b),0);J=Math.min(J,255);let U=Math.max(parseFloat(X.a),0);U=Math.min(U,1),l.value.format(`rgba(${o},${F},${J},${U})`)}function Y(){const X=G.value,i=X.h===""||X.s===""||X.l===""||X.a==="",p=!isNaN(X.h)&&!isNaN(X.s)&&!isNaN(X.l)&&!isNaN(X.a);if(i||!p)return;let o=Math.max(parseInt(X.h),0);o=Math.min(o,360);let F=Math.max(parseInt(X.s),0);F=Math.min(F,100);let J=Math.max(parseInt(X.l),0);J=Math.min(J,100);let U=Math.max(parseFloat(X.a),0);U=Math.min(U,1),l.value.format(`hsla(${o},${F},${J},${U})`)}return xl(()=>l.value.v,()=>{Z.value==="hex"&&(m.value=l.value.hex),Z.value==="rgb"&&(W.value=l.value.rgba),Z.value==="hsl"&&(G.value=l.value.hsla)}),{format:Z,valueWidth:d,inputWidth:b,hexValue:m,onHexInput:M,rgbaValue:W,onRgbaInput:N,hslaValue:G,onHslaInput:Y,onClick:s}}});const Is={class:"color-value"},zs={key:0},os={key:1},Rs={key:2},ws={key:3},Ss=V("span",null,"十六进制",-1),es={key:4},xs=V("span",null,"A",-1),Ds=V("path",{d:"M718.73545078 589.39849389H305.26454922c-20.36802471 0-32.58883953 13.23921607-22.40482717 23.42322842 15.27601854 16.29441978 197.56983966 206.73545078 206.73545077 215.90106188 11.20241359 12.22081482 35.64404324 10.18401235 45.8280556 0C542.55203706 821.59397555 729.93786436 624.02413589 741.14027795 612.82172231c10.18401235-11.20241359-3.05520371-22.40482718-22.40482718-23.42322842zM305.26454922 434.60150611h413.47090156c19.34962348 0 32.58883953-12.22081482 22.40482717-23.42322842-11.20241359-11.20241359-198.5882409-208.77225325-206.73545077-216.91946312-9.16561112-10.18401235-33.60724077-11.20241359-45.8280556 0C480.42956171 204.44282693 298.13574057 394.88385793 282.85972205 411.17827769c-10.18401235 10.18401235 2.03680247 23.42322842 22.40482718 23.42322842z"},null,-1);function Js(l,Z,c,d,b,m){return R(),yl("div",Is,[V("div",{style:{width:`${l.valueWidth}px`}},[l.format==="hex"?(R(),yl("div",zs,[Ql(V("input",{type:"text",style:{width:`${l.inputWidth}px`},onInput:Z[1]||(Z[1]=(...W)=>l.onHexInput(...W)),"onUpdate:modelValue":Z[2]||(Z[2]=W=>l.hexValue=W)},null,36),[[ql,l.hexValue]])])):l.format==="rgb"?(R(),yl("div",os,[Ql(V("input",{type:"text",style:{width:`${l.inputWidth}px`},onInput:Z[3]||(Z[3]=(...W)=>l.onRgbaInput(...W)),"onUpdate:modelValue":Z[4]||(Z[4]=W=>l.rgbaValue.r=W)},null,36),[[ql,l.rgbaValue.r]]),Ql(V("input",{type:"text",style:{width:`${l.inputWidth}px`},onInput:Z[5]||(Z[5]=(...W)=>l.onRgbaInput(...W)),"onUpdate:modelValue":Z[6]||(Z[6]=W=>l.rgbaValue.g=W)},null,36),[[ql,l.rgbaValue.g]]),Ql(V("input",{type:"text",style:{width:`${l.inputWidth}px`},onInput:Z[7]||(Z[7]=(...W)=>l.onRgbaInput(...W)),"onUpdate:modelValue":Z[8]||(Z[8]=W=>l.rgbaValue.b=W)},null,36),[[ql,l.rgbaValue.b]]),Ql(V("input",{type:"text",style:{width:`${l.inputWidth}px`},onInput:Z[9]||(Z[9]=(...W)=>l.onRgbaInput(...W)),"onUpdate:modelValue":Z[10]||(Z[10]=W=>l.rgbaValue.a=W)},null,36),[[ql,l.rgbaValue.a]])])):(R(),yl("div",Rs,[Ql(V("input",{type:"text",style:{width:`${l.inputWidth}px`},onInput:Z[11]||(Z[11]=(...W)=>l.onHslaInput(...W)),"onUpdate:modelValue":Z[12]||(Z[12]=W=>l.hslaValue.h=W)},null,36),[[ql,l.hslaValue.h]]),Ql(V("input",{type:"text",style:{width:`${l.inputWidth}px`},onInput:Z[13]||(Z[13]=(...W)=>l.onHslaInput(...W)),"onUpdate:modelValue":Z[14]||(Z[14]=W=>l.hslaValue.s=W)},null,36),[[ql,l.hslaValue.s]]),Ql(V("input",{type:"text",style:{width:`${l.inputWidth}px`},onInput:Z[15]||(Z[15]=(...W)=>l.onHslaInput(...W)),"onUpdate:modelValue":Z[16]||(Z[16]=W=>l.hslaValue.l=W)},null,36),[[ql,l.hslaValue.l]]),Ql(V("input",{type:"text",style:{width:`${l.inputWidth}px`},onInput:Z[17]||(Z[17]=(...W)=>l.onHslaInput(...W)),"onUpdate:modelValue":Z[18]||(Z[18]=W=>l.hslaValue.a=W)},null,36),[[ql,l.hslaValue.a]])])),l.format==="hex"?(R(),yl("div",ws,[Ss])):(R(),yl("div",es,[V("span",null,Bl(l.format==="rgb"?"R":"H"),1),V("span",null,Bl(l.format==="rgb"?"G":"S %"),1),V("span",null,Bl(l.format==="rgb"?"B":"L %"),1),xs]))],4),(R(),yl("svg",{class:"icon",viewBox:"0 0 1024 1024",onClick:Z[19]||(Z[19]=$c((...W)=>l.onClick(...W),["stop"]))},[Ds]))])}var js=`
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
`;LZ(js);zb.render=Js;zb.__file="src/component/ColorValue.vue";var ob=WZ({name:"ColorPreview",props:{value:{type:Object,required:!0}},setup(l){const Z=k(!1),c=k(!1),d=el(()=>`rgba(${l.value.rgba.r},${l.value.rgba.g},${l.value.rgba.b},${l.value.rgba.a})`);function b(){Z.value=!0}function m(){Z.value=!1,c.value=!1}function W(){Z.value=!1,navigator.clipboard.writeText(l.value.v).then(()=>{c.value=!0}).catch(s=>{console.error(s)})}function G(){}return{onMouseenter:b,onMouseleave:m,onMouseup:W,success:c,copy:Z,background:d,onCopy:G}}});const Us={width:"25",height:"25",viewBox:"0 0 1024 1024"},ks=V("path",{fill:"#f8f8f8",d:"M679.827 780.524h-402.786v-469.916h402.786v469.916zM646.261 344.173h-335.655v402.786h335.655v-402.786zM411.304 243.476h-33.564v67.131h33.564v-67.131zM579.131 444.869h-201.394v33.564h201.394v-33.564zM579.131 545.564h-201.394v33.564h201.394v-33.564zM579.131 646.261h-201.394v33.564h201.394v-33.564zM746.959 243.476h-335.655v33.564h335.655v-33.564zM746.959 277.041h-33.564v402.786h33.564v-402.786zM713.394 646.261h-33.564v33.564h33.564v-33.564z"},null,-1),Cs={width:"20",height:"20",viewBox:"0 0 1024 1024"},Fs=V("path",{fill:"#f8f8f8",d:"M870.4 332.8l-89.6-89.6L416 601.6 243.2 435.2l-89.6 89.6 262.4 256z"},null,-1);function Os(l,Z,c,d,b,m){return R(),yl("div",{class:"color-preview",onMouseenter:Z[1]||(Z[1]=(...W)=>l.onMouseenter(...W)),onMouseleave:Z[2]||(Z[2]=(...W)=>l.onMouseleave(...W)),onMouseup:Z[3]||(Z[3]=(...W)=>l.onMouseup(...W))},[V("div",{style:{background:l.background}},[Ql((R(),yl("svg",Us,[ks],512)),[[Mm,l.copy]]),Ql((R(),yl("svg",Cs,[Fs],512)),[[Mm,l.success]])],4)],32)}var Ks=`
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
`;LZ(Ks);ob.render=Os;ob.__file="src/component/ColorPreview.vue";const Sm=globalThis.document.documentElement.clientWidth,gs=globalThis.document.documentElement.clientHeight;var id=WZ({name:"ColorPicker",components:{ColorPanel:ab,ColorStraw:Lb,ColorPreview:ob,ColorHue:pb,ColorAlpha:nb,ColorValue:zb,ColorList:Ib},props:{value:{type:[String,null],default:"#fff"},zIndex:{type:Number,default:2},position:{type:Object,required:!0},theme:{type:String,default:"dark"},height:{type:Number,default:150},width:{type:Number,default:233},colors:{type:Array,default:["#ff4500","#ff8c00","#ffd700","#90ee9003","#00ced1","#1e90ff","#c71585","#ff4500ad","#ff7800","#fad400","#90f09080","#00babd","#1f93ffba","#c7158575"]},btn:{type:Boolean,default:!1},change:{type:Function},confirm:{type:Function},clear:{type:Function}},emits:["update:value","confirm","clear"],setup(l,{emit:Z}){const c=k(!1);window.EyeDropper&&(c.value=!0);const d=k(null),b=k({left:l.position.x||0,top:l.position.y||0}),m=ec(new X0(l.value));xl(()=>l.value,N=>{N&&N!==m.v&&m.format(N)});const W=el(()=>l.width-(c.value?63:40));xl(()=>m.v,()=>{Z("update:value",m.v),l.change&&l.change(m.v)});function G(){Z("confirm"),l.confirm&&l.confirm(m.v)}function s(){Z("clear"),l.clear&&l.clear()}return sc(()=>{AZ(()=>{const N=d.value.offsetWidth,Y=d.value.offsetHeight;b.value.left+N>Sm&&(b.value.left=Sm-N),b.value.top+Y>gs&&(b.value.top=b.value.top-Y)})}),{colorRef:d,style:b,color:m,hueWidth:W,isEyeDropper:c,clear:s,confirm:G,updateColorStraw:N=>{m.format(N,m._f)}}}});const Es={class:"color-tool"},Qs={key:0,class:"color-btns"},Hs=V("span",null,"Clear",-1),Ps=V("span",null,"OK",-1);function vs(l,Z,c,d,b,m){const W=vl("ColorPanel"),G=vl("ColorStraw"),s=vl("ColorPreview"),M=vl("ColorHue"),N=vl("ColorAlpha"),Y=vl("ColorValue"),X=vl("ColorList");return R(),yl("div",{ref:"colorRef",class:["color-picker",`color-picker-${l.theme}`],style:{width:`${l.width}px`,zIndex:l.zIndex,top:`${l.style.top}px`,left:`${l.style.left}px`},onClick:Z[9]||(Z[9]=$c(()=>{},["stop"])),onContextmenu:Z[10]||(Z[10]=$c(()=>{},["prevent","stop"]))},[V(W,{value:l.color,"onUpdate:value":Z[1]||(Z[1]=i=>l.color=i),height:l.height,width:l.width},null,8,["value","height","width"]),V("div",Es,[l.isEyeDropper?(R(),yl(G,{key:0,onUpdateColor:l.updateColorStraw},null,8,["onUpdateColor"])):Hl("v-if",!0),V(s,{value:l.color,"onUpdate:value":Z[2]||(Z[2]=i=>l.color=i)},null,8,["value"]),V("div",null,[V(M,{width:l.hueWidth,value:l.color,"onUpdate:value":Z[3]||(Z[3]=i=>l.color=i)},null,8,["width","value"]),V(N,{width:l.hueWidth,value:l.color,"onUpdate:value":Z[4]||(Z[4]=i=>l.color=i)},null,8,["width","value"])])]),V(Y,{value:l.color,"onUpdate:value":Z[5]||(Z[5]=i=>l.color=i),width:l.width},null,8,["value","width"]),V(X,{colors:l.colors,value:l.color,"onUpdate:value":Z[6]||(Z[6]=i=>l.color=i)},null,8,["colors","value"]),l.btn?(R(),yl("div",Qs,[V("button",{class:"color-btn",onClick:Z[7]||(Z[7]=(...i)=>l.clear(...i))},[Hs]),V("button",{class:"color-btn",onClick:Z[8]||(Z[8]=(...i)=>l.confirm(...i))},[Ps])])):Hl("v-if",!0)],38)}var rs=`
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
`;LZ(rs);id.render=vs;id.__file="src/component/ColorPicker.vue";var ld=WZ({name:"V3ColorPicker",components:{ColorPicker:id},props:{value:{type:[String,null],default:"#fff"},zIndex:{type:Number,default:2},theme:{type:String,default:"dark"},height:{type:Number,default:150},width:{type:Number,default:233},colors:{type:Array,default:["#ff4500","#ff8c00","#ffd700","#90ee9003","#00ced1","#1e90ff","#c71585","#ff4500ad","#ff7800","#fad400","#90f09080","#00babd","#1f93ffba","#c7158575"]},size:{type:String},btn:{type:Boolean,default:!1}},emits:["update:value","change"],setup(l,{emit:Z}){const c=k(null),d=k({x:0,y:0}),b=k(!1),m=k(l.value);xl(m,Y=>{b.value=!1,!l.btn&&Z("update:value",Y),Z("change",Y)}),xl(()=>l.value,Y=>{(Y!==null||!l.btn)&&(b.value=!1,m.value=l.value),Y===null&&(b.value=!0)});const W=k(!1);function G(Y){W.value=!1,AZ(()=>{d.value={x:Y.clientX,y:Y.clientY},W.value=!0})}function s(Y){c.value!==Y.target&&(W.value=!1)}function M(){Z("update:value",m.value),Z("change",m.value),W.value=!1}function N(){Z("update:value",null),Z("change",null),b.value=!0,W.value=!1}return xl(W,Y=>{Y?(globalThis.document.addEventListener("click",s),globalThis.document.addEventListener("contextmenu",s)):(globalThis.document.removeEventListener("click",s),globalThis.document.removeEventListener("contextmenu",s))}),{onClick:G,position:d,open:W,color:m,confirm:M,clear:N,isClear:b,colorRef:c}}});const Bs={class:"c-p-t"},As={class:"c-p-c"},fs={class:"c-p-i"},_s={key:0,class:"icon",viewBox:"0 0 1024 1024"},qs=V("path",{d:"M511.711 671.589l-270.188-270.23c-0.287-0.264-0.573-0.531-0.851-0.809-10.935-10.935-10.935-28.663 0-39.598 10.935-10.935 28.663-10.935 39.598 0 0.278 0.278 0.545 0.564 0.809 0.851l0.021-0.021 230.691 230.69 231.94-231.94c10.935-10.935 28.663-10.935 39.598 0s10.935 28.663 0 39.598l-271.617 271.459z"},null,-1),$s={key:1,class:"icon",viewBox:"0 0 1024 1024"},lN=V("path",{d:"M704.28672 309.20704l28.95872 28.9792L334.6432 736.78848l-28.95872-28.9792z",fill:"#999"},null,-1),ZN=V("path",{d:"M341.03296 315.5968l398.60224 398.60224-28.95872 28.95872-398.60224-398.60224z",fill:"#999"},null,-1);function cN(l,Z,c,d,b,m){const W=vl("ColorPicker");return R(),yl(f,null,[V("div",{ref:"colorRef",class:["v3-c-p",l.size?`v3-c-p-${l.size}`:null],onClick:Z[1]||(Z[1]=(...G)=>l.onClick(...G))},[V("div",Bs,[V("span",As,[V("span",{class:"c-p-c-i",style:{backgroundColor:l.isClear?"transparent":l.color}},null,4)]),V("span",fs,[l.isClear?(R(),yl("svg",$s,[lN,ZN])):(R(),yl("svg",_s,[qs]))])])],2),(R(),yl(qG,{to:"body"},[V(dZ,{name:"color-fade"},{default:dl(()=>[l.open?(R(),yl(W,{key:0,value:l.color,"onUpdate:value":Z[2]||(Z[2]=G=>l.color=G),zIndex:l.zIndex,position:l.position,theme:l.theme,width:l.width,height:l.height,colors:l.colors,btn:l.btn,onConfirm:l.confirm,onClear:l.clear},null,8,["value","zIndex","position","theme","width","height","colors","btn","onConfirm","onClear"])):Hl("v-if",!0)]),_:1})]))],64)}var dN=`
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
`;LZ(dN);ld.render=cN;ld.__file="src/V3ColorPicker.vue";function Bd(l,Z){const c=l||{},d=c.change&&typeof c.change=="function"?c.change:s=>{},b={position:{x:Z.clientX,y:Z.clientY},...c,value:c.value||"#fff",confirm:s=>{d(s),l.color=s,G()},clear:()=>{d(null),l.color=null,G()}},m=document.createElement("div"),W=V(id,b);ls(W,m),m.firstElementChild&&document.body.appendChild(m.firstElementChild),xl(l,s=>{s.value&&(W.component.props.value=s.value)}),c.change||xl(W.component.ctx.color,s=>{l.value=s.v});function G(){W&&W.el&&document.body.removeChild(W.el),globalThis.document.removeEventListener("click",G),globalThis.document.removeEventListener("contextmenu",G)}return setTimeout(()=>{globalThis.document.addEventListener("click",G),globalThis.document.addEventListener("contextmenu",G)},0),{close:G}}const bN={mounted(l,{value:Z,instance:c}){l.addEventListener("click",Bd.bind(c,Z))},unmounted(l){l.removeEventListener("click",Bd)}},mN=function(l){l.component(ld.name,ld),l.directive("color",bN),l.config.globalProperties.colorEvent=(Z,c)=>Bd(c,Z)};function WN(l){l.use(mN)}var GN=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const sN=Symbol();var em;(function(l){l.direct="direct",l.patchObject="patch object",l.patchFunction="patch function"})(em||(em={}));function NN(){const l=Q0(!0),Z=l.run(()=>k({}));let c=[],d=[];const b=LW({install(m){b._a=m,m.provide(sN,b),m.config.globalProperties.$pinia=b,d.forEach(W=>c.push(W)),d=[]},use(m){return!this._a&&!GN?d.push(m):c.push(m),this},_p:c,_a:null,_e:l,_s:new Map,state:Z});return b}/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const qZ=typeof document<"u";function MN(l){return l.__esModule||l[Symbol.toStringTag]==="Module"}const hl=Object.assign;function xd(l,Z){const c={};for(const d in Z){const b=Z[d];c[d]=uZ(b)?b.map(l):l(b)}return c}const ac=()=>{},uZ=Array.isArray,t0=/#/g,uN=/&/g,YN=/\//g,XN=/=/g,tN=/\?/g,i0=/\+/g,iN=/%5B/g,hN=/%5D/g,h0=/%5E/g,yN=/%60/g,y0=/%7B/g,VN=/%7C/g,V0=/%7D/g,TN=/%20/g;function Rb(l){return encodeURI(""+l).replace(VN,"|").replace(iN,"[").replace(hN,"]")}function aN(l){return Rb(l).replace(y0,"{").replace(V0,"}").replace(h0,"^")}function Ad(l){return Rb(l).replace(i0,"%2B").replace(TN,"+").replace(t0,"%23").replace(uN,"%26").replace(yN,"`").replace(y0,"{").replace(V0,"}").replace(h0,"^")}function LN(l){return Ad(l).replace(XN,"%3D")}function pN(l){return Rb(l).replace(t0,"%23").replace(tN,"%3F")}function nN(l){return l==null?"":pN(l).replace(YN,"%2F")}function wc(l){try{return decodeURIComponent(""+l)}catch{}return""+l}const IN=/\/$/,zN=l=>l.replace(IN,"");function Dd(l,Z,c="/"){let d,b={},m="",W="";const G=Z.indexOf("#");let s=Z.indexOf("?");return G<s&&G>=0&&(s=-1),s>-1&&(d=Z.slice(0,s),m=Z.slice(s+1,G>-1?G:Z.length),b=l(m)),G>-1&&(d=d||Z.slice(0,G),W=Z.slice(G,Z.length)),d=SN(d??Z,c),{fullPath:d+(m&&"?")+m+W,path:d,query:b,hash:wc(W)}}function oN(l,Z){const c=Z.query?l(Z.query):"";return Z.path+(c&&"?")+c+(Z.hash||"")}function xm(l,Z){return!Z||!l.toLowerCase().startsWith(Z.toLowerCase())?l:l.slice(Z.length)||"/"}function RN(l,Z,c){const d=Z.matched.length-1,b=c.matched.length-1;return d>-1&&d===b&&Wc(Z.matched[d],c.matched[b])&&T0(Z.params,c.params)&&l(Z.query)===l(c.query)&&Z.hash===c.hash}function Wc(l,Z){return(l.aliasOf||l)===(Z.aliasOf||Z)}function T0(l,Z){if(Object.keys(l).length!==Object.keys(Z).length)return!1;for(const c in l)if(!wN(l[c],Z[c]))return!1;return!0}function wN(l,Z){return uZ(l)?Dm(l,Z):uZ(Z)?Dm(Z,l):l===Z}function Dm(l,Z){return uZ(Z)?l.length===Z.length&&l.every((c,d)=>c===Z[d]):l.length===1&&l[0]===Z}function SN(l,Z){if(l.startsWith("/"))return l;if(!l)return Z;const c=Z.split("/"),d=l.split("/"),b=d[d.length-1];(b===".."||b===".")&&d.push("");let m=c.length-1,W,G;for(W=0;W<d.length;W++)if(G=d[W],G!==".")if(G==="..")m>1&&m--;else break;return c.slice(0,m).join("/")+"/"+d.slice(W).join("/")}const oZ={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Sc;(function(l){l.pop="pop",l.push="push"})(Sc||(Sc={}));var Lc;(function(l){l.back="back",l.forward="forward",l.unknown=""})(Lc||(Lc={}));function eN(l){if(!l)if(qZ){const Z=document.querySelector("base");l=Z&&Z.getAttribute("href")||"/",l=l.replace(/^\w+:\/\/[^\/]+/,"")}else l="/";return l[0]!=="/"&&l[0]!=="#"&&(l="/"+l),zN(l)}const xN=/^[^#]+#/;function DN(l,Z){return l.replace(xN,"#")+Z}function JN(l,Z){const c=document.documentElement.getBoundingClientRect(),d=l.getBoundingClientRect();return{behavior:Z.behavior,left:d.left-c.left-(Z.left||0),top:d.top-c.top-(Z.top||0)}}const hd=()=>({left:window.scrollX,top:window.scrollY});function jN(l){let Z;if("el"in l){const c=l.el,d=typeof c=="string"&&c.startsWith("#"),b=typeof c=="string"?d?document.getElementById(c.slice(1)):document.querySelector(c):c;if(!b)return;Z=JN(b,l)}else Z=l;"scrollBehavior"in document.documentElement.style?window.scrollTo(Z):window.scrollTo(Z.left!=null?Z.left:window.scrollX,Z.top!=null?Z.top:window.scrollY)}function Jm(l,Z){return(history.state?history.state.position-Z:-1)+l}const fd=new Map;function UN(l,Z){fd.set(l,Z)}function kN(l){const Z=fd.get(l);return fd.delete(l),Z}let CN=()=>location.protocol+"//"+location.host;function a0(l,Z){const{pathname:c,search:d,hash:b}=Z,m=l.indexOf("#");if(m>-1){let G=b.includes(l.slice(m))?l.slice(m).length:1,s=b.slice(G);return s[0]!=="/"&&(s="/"+s),xm(s,"")}return xm(c,l)+d+b}function FN(l,Z,c,d){let b=[],m=[],W=null;const G=({state:X})=>{const i=a0(l,location),p=c.value,o=Z.value;let F=0;if(X){if(c.value=i,Z.value=X,W&&W===p){W=null;return}F=o?X.position-o.position:0}else d(i);b.forEach(J=>{J(c.value,p,{delta:F,type:Sc.pop,direction:F?F>0?Lc.forward:Lc.back:Lc.unknown})})};function s(){W=c.value}function M(X){b.push(X);const i=()=>{const p=b.indexOf(X);p>-1&&b.splice(p,1)};return m.push(i),i}function N(){const{history:X}=window;X.state&&X.replaceState(hl({},X.state,{scroll:hd()}),"")}function Y(){for(const X of m)X();m=[],window.removeEventListener("popstate",G),window.removeEventListener("beforeunload",N)}return window.addEventListener("popstate",G),window.addEventListener("beforeunload",N,{passive:!0}),{pauseListeners:s,listen:M,destroy:Y}}function jm(l,Z,c,d=!1,b=!1){return{back:l,current:Z,forward:c,replaced:d,position:window.history.length,scroll:b?hd():null}}function ON(l){const{history:Z,location:c}=window,d={value:a0(l,c)},b={value:Z.state};b.value||m(d.value,{back:null,current:d.value,forward:null,position:Z.length-1,replaced:!0,scroll:null},!0);function m(s,M,N){const Y=l.indexOf("#"),X=Y>-1?(c.host&&document.querySelector("base")?l:l.slice(Y))+s:CN()+l+s;try{Z[N?"replaceState":"pushState"](M,"",X),b.value=M}catch(i){console.error(i),c[N?"replace":"assign"](X)}}function W(s,M){const N=hl({},Z.state,jm(b.value.back,s,b.value.forward,!0),M,{position:b.value.position});m(s,N,!0),d.value=s}function G(s,M){const N=hl({},b.value,Z.state,{forward:s,scroll:hd()});m(N.current,N,!0);const Y=hl({},jm(d.value,s,null),{position:N.position+1},M);m(s,Y,!1),d.value=s}return{location:d,state:b,push:G,replace:W}}function KN(l){l=eN(l);const Z=ON(l),c=FN(l,Z.state,Z.location,Z.replace);function d(m,W=!0){W||c.pauseListeners(),history.go(m)}const b=hl({location:"",base:l,go:d,createHref:DN.bind(null,l)},Z,c);return Object.defineProperty(b,"location",{enumerable:!0,get:()=>Z.location.value}),Object.defineProperty(b,"state",{enumerable:!0,get:()=>Z.state.value}),b}function gN(l){return typeof l=="string"||l&&typeof l=="object"}function L0(l){return typeof l=="string"||typeof l=="symbol"}const p0=Symbol("");var Um;(function(l){l[l.aborted=4]="aborted",l[l.cancelled=8]="cancelled",l[l.duplicated=16]="duplicated"})(Um||(Um={}));function Gc(l,Z){return hl(new Error,{type:l,[p0]:!0},Z)}function hZ(l,Z){return l instanceof Error&&p0 in l&&(Z==null||!!(l.type&Z))}const km="[^/]+?",EN={sensitive:!1,strict:!1,start:!0,end:!0},QN=/[.+*?^${}()[\]/\\]/g;function HN(l,Z){const c=hl({},EN,Z),d=[];let b=c.start?"^":"";const m=[];for(const M of l){const N=M.length?[]:[90];c.strict&&!M.length&&(b+="/");for(let Y=0;Y<M.length;Y++){const X=M[Y];let i=40+(c.sensitive?.25:0);if(X.type===0)Y||(b+="/"),b+=X.value.replace(QN,"\\$&"),i+=40;else if(X.type===1){const{value:p,repeatable:o,optional:F,regexp:J}=X;m.push({name:p,repeatable:o,optional:F});const U=J||km;if(U!==km){i+=10;try{new RegExp(`(${U})`)}catch($){throw new Error(`Invalid custom RegExp for param "${p}" (${U}): `+$.message)}}let j=o?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;Y||(j=F&&M.length<2?`(?:/${j})`:"/"+j),F&&(j+="?"),b+=j,i+=20,F&&(i+=-8),o&&(i+=-20),U===".*"&&(i+=-50)}N.push(i)}d.push(N)}if(c.strict&&c.end){const M=d.length-1;d[M][d[M].length-1]+=.7000000000000001}c.strict||(b+="/?"),c.end?b+="$":c.strict&&(b+="(?:/|$)");const W=new RegExp(b,c.sensitive?"":"i");function G(M){const N=M.match(W),Y={};if(!N)return null;for(let X=1;X<N.length;X++){const i=N[X]||"",p=m[X-1];Y[p.name]=i&&p.repeatable?i.split("/"):i}return Y}function s(M){let N="",Y=!1;for(const X of l){(!Y||!N.endsWith("/"))&&(N+="/"),Y=!1;for(const i of X)if(i.type===0)N+=i.value;else if(i.type===1){const{value:p,repeatable:o,optional:F}=i,J=p in M?M[p]:"";if(uZ(J)&&!o)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const U=uZ(J)?J.join("/"):J;if(!U)if(F)X.length<2&&(N.endsWith("/")?N=N.slice(0,-1):Y=!0);else throw new Error(`Missing required param "${p}"`);N+=U}}return N||"/"}return{re:W,score:d,keys:m,parse:G,stringify:s}}function PN(l,Z){let c=0;for(;c<l.length&&c<Z.length;){const d=Z[c]-l[c];if(d)return d;c++}return l.length<Z.length?l.length===1&&l[0]===80?-1:1:l.length>Z.length?Z.length===1&&Z[0]===80?1:-1:0}function n0(l,Z){let c=0;const d=l.score,b=Z.score;for(;c<d.length&&c<b.length;){const m=PN(d[c],b[c]);if(m)return m;c++}if(Math.abs(b.length-d.length)===1){if(Cm(d))return 1;if(Cm(b))return-1}return b.length-d.length}function Cm(l){const Z=l[l.length-1];return l.length>0&&Z[Z.length-1]<0}const vN={type:0,value:""},rN=/[a-zA-Z0-9_]/;function BN(l){if(!l)return[[]];if(l==="/")return[[vN]];if(!l.startsWith("/"))throw new Error(`Invalid path "${l}"`);function Z(i){throw new Error(`ERR (${c})/"${M}": ${i}`)}let c=0,d=c;const b=[];let m;function W(){m&&b.push(m),m=[]}let G=0,s,M="",N="";function Y(){M&&(c===0?m.push({type:0,value:M}):c===1||c===2||c===3?(m.length>1&&(s==="*"||s==="+")&&Z(`A repeatable param (${M}) must be alone in its segment. eg: '/:ids+.`),m.push({type:1,value:M,regexp:N,repeatable:s==="*"||s==="+",optional:s==="*"||s==="?"})):Z("Invalid state to consume buffer"),M="")}function X(){M+=s}for(;G<l.length;){if(s=l[G++],s==="\\"&&c!==2){d=c,c=4;continue}switch(c){case 0:s==="/"?(M&&Y(),W()):s===":"?(Y(),c=1):X();break;case 4:X(),c=d;break;case 1:s==="("?c=2:rN.test(s)?X():(Y(),c=0,s!=="*"&&s!=="?"&&s!=="+"&&G--);break;case 2:s===")"?N[N.length-1]=="\\"?N=N.slice(0,-1)+s:c=3:N+=s;break;case 3:Y(),c=0,s!=="*"&&s!=="?"&&s!=="+"&&G--,N="";break;default:Z("Unknown state");break}}return c===2&&Z(`Unfinished custom RegExp for param "${M}"`),Y(),W(),b}function AN(l,Z,c){const d=HN(BN(l.path),c),b=hl(d,{record:l,parent:Z,children:[],alias:[]});return Z&&!b.record.aliasOf==!Z.record.aliasOf&&Z.children.push(b),b}function fN(l,Z){const c=[],d=new Map;Z=Km({strict:!1,end:!0,sensitive:!1},Z);function b(Y){return d.get(Y)}function m(Y,X,i){const p=!i,o=_N(Y);o.aliasOf=i&&i.record;const F=Km(Z,Y),J=[o];if("alias"in Y){const $=typeof Y.alias=="string"?[Y.alias]:Y.alias;for(const cl of $)J.push(hl({},o,{components:i?i.record.components:o.components,path:cl,aliasOf:i?i.record:o}))}let U,j;for(const $ of J){const{path:cl}=$;if(X&&cl[0]!=="/"){const K=X.record.path,ll=K[K.length-1]==="/"?"":"/";$.path=X.record.path+(cl&&ll+cl)}if(U=AN($,X,F),i?i.alias.push(U):(j=j||U,j!==U&&j.alias.push(U),p&&Y.name&&!Om(U)&&W(Y.name)),I0(U)&&s(U),o.children){const K=o.children;for(let ll=0;ll<K.length;ll++)m(K[ll],U,i&&i.children[ll])}i=i||U}return j?()=>{W(j)}:ac}function W(Y){if(L0(Y)){const X=d.get(Y);X&&(d.delete(Y),c.splice(c.indexOf(X),1),X.children.forEach(W),X.alias.forEach(W))}else{const X=c.indexOf(Y);X>-1&&(c.splice(X,1),Y.record.name&&d.delete(Y.record.name),Y.children.forEach(W),Y.alias.forEach(W))}}function G(){return c}function s(Y){const X=lM(Y,c);c.splice(X,0,Y),Y.record.name&&!Om(Y)&&d.set(Y.record.name,Y)}function M(Y,X){let i,p={},o,F;if("name"in Y&&Y.name){if(i=d.get(Y.name),!i)throw Gc(1,{location:Y});F=i.record.name,p=hl(Fm(X.params,i.keys.filter(j=>!j.optional).concat(i.parent?i.parent.keys.filter(j=>j.optional):[]).map(j=>j.name)),Y.params&&Fm(Y.params,i.keys.map(j=>j.name))),o=i.stringify(p)}else if(Y.path!=null)o=Y.path,i=c.find(j=>j.re.test(o)),i&&(p=i.parse(o),F=i.record.name);else{if(i=X.name?d.get(X.name):c.find(j=>j.re.test(X.path)),!i)throw Gc(1,{location:Y,currentLocation:X});F=i.record.name,p=hl({},X.params,Y.params),o=i.stringify(p)}const J=[];let U=i;for(;U;)J.unshift(U.record),U=U.parent;return{name:F,path:o,params:p,matched:J,meta:$N(J)}}l.forEach(Y=>m(Y));function N(){c.length=0,d.clear()}return{addRoute:m,resolve:M,removeRoute:W,clearRoutes:N,getRoutes:G,getRecordMatcher:b}}function Fm(l,Z){const c={};for(const d of Z)d in l&&(c[d]=l[d]);return c}function _N(l){return{path:l.path,redirect:l.redirect,name:l.name,meta:l.meta||{},aliasOf:void 0,beforeEnter:l.beforeEnter,props:qN(l),children:l.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in l?l.components||null:l.component&&{default:l.component}}}function qN(l){const Z={},c=l.props||!1;if("component"in l)Z.default=c;else for(const d in l.components)Z[d]=typeof c=="object"?c[d]:c;return Z}function Om(l){for(;l;){if(l.record.aliasOf)return!0;l=l.parent}return!1}function $N(l){return l.reduce((Z,c)=>hl(Z,c.meta),{})}function Km(l,Z){const c={};for(const d in l)c[d]=d in Z?Z[d]:l[d];return c}function lM(l,Z){let c=0,d=Z.length;for(;c!==d;){const m=c+d>>1;n0(l,Z[m])<0?d=m:c=m+1}const b=ZM(l);return b&&(d=Z.lastIndexOf(b,d-1)),d}function ZM(l){let Z=l;for(;Z=Z.parent;)if(I0(Z)&&n0(l,Z)===0)return Z}function I0({record:l}){return!!(l.name||l.components&&Object.keys(l.components).length||l.redirect)}function cM(l){const Z={};if(l===""||l==="?")return Z;const d=(l[0]==="?"?l.slice(1):l).split("&");for(let b=0;b<d.length;++b){const m=d[b].replace(i0," "),W=m.indexOf("="),G=wc(W<0?m:m.slice(0,W)),s=W<0?null:wc(m.slice(W+1));if(G in Z){let M=Z[G];uZ(M)||(M=Z[G]=[M]),M.push(s)}else Z[G]=s}return Z}function gm(l){let Z="";for(let c in l){const d=l[c];if(c=LN(c),d==null){d!==void 0&&(Z+=(Z.length?"&":"")+c);continue}(uZ(d)?d.map(m=>m&&Ad(m)):[d&&Ad(d)]).forEach(m=>{m!==void 0&&(Z+=(Z.length?"&":"")+c,m!=null&&(Z+="="+m))})}return Z}function dM(l){const Z={};for(const c in l){const d=l[c];d!==void 0&&(Z[c]=uZ(d)?d.map(b=>b==null?null:""+b):d==null?d:""+d)}return Z}const bM=Symbol(""),Em=Symbol(""),wb=Symbol(""),z0=Symbol(""),_d=Symbol("");function Yc(){let l=[];function Z(d){return l.push(d),()=>{const b=l.indexOf(d);b>-1&&l.splice(b,1)}}function c(){l=[]}return{add:Z,list:()=>l.slice(),reset:c}}function eZ(l,Z,c,d,b,m=W=>W()){const W=d&&(d.enterCallbacks[b]=d.enterCallbacks[b]||[]);return()=>new Promise((G,s)=>{const M=X=>{X===!1?s(Gc(4,{from:c,to:Z})):X instanceof Error?s(X):gN(X)?s(Gc(2,{from:Z,to:X})):(W&&d.enterCallbacks[b]===W&&typeof X=="function"&&W.push(X),G())},N=m(()=>l.call(d&&d.instances[b],Z,c,M));let Y=Promise.resolve(N);l.length<3&&(Y=Y.then(M)),Y.catch(X=>s(X))})}function Jd(l,Z,c,d,b=m=>m()){const m=[];for(const W of l)for(const G in W.components){let s=W.components[G];if(!(Z!=="beforeRouteEnter"&&!W.instances[G]))if(mM(s)){const N=(s.__vccOpts||s)[Z];N&&m.push(eZ(N,c,d,W,G,b))}else{let M=s();m.push(()=>M.then(N=>{if(!N)return Promise.reject(new Error(`Couldn't resolve component "${G}" at "${W.path}"`));const Y=MN(N)?N.default:N;W.components[G]=Y;const i=(Y.__vccOpts||Y)[Z];return i&&eZ(i,c,d,W,G,b)()}))}}return m}function mM(l){return typeof l=="object"||"displayName"in l||"props"in l||"__vccOpts"in l}function Qm(l){const Z=TZ(wb),c=TZ(z0),d=el(()=>{const s=Zl(l.to);return Z.resolve(s)}),b=el(()=>{const{matched:s}=d.value,{length:M}=s,N=s[M-1],Y=c.matched;if(!N||!Y.length)return-1;const X=Y.findIndex(Wc.bind(null,N));if(X>-1)return X;const i=Hm(s[M-2]);return M>1&&Hm(N)===i&&Y[Y.length-1].path!==i?Y.findIndex(Wc.bind(null,s[M-2])):X}),m=el(()=>b.value>-1&&NM(c.params,d.value.params)),W=el(()=>b.value>-1&&b.value===c.matched.length-1&&T0(c.params,d.value.params));function G(s={}){return sM(s)?Z[Zl(l.replace)?"replace":"push"](Zl(l.to)).catch(ac):Promise.resolve()}return{route:d,href:el(()=>d.value.href),isActive:m,isExactActive:W,navigate:G}}const WM=WZ({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Qm,setup(l,{slots:Z}){const c=ec(Qm(l)),{options:d}=TZ(wb),b=el(()=>({[Pm(l.activeClass,d.linkActiveClass,"router-link-active")]:c.isActive,[Pm(l.exactActiveClass,d.linkExactActiveClass,"router-link-exact-active")]:c.isExactActive}));return()=>{const m=Z.default&&Z.default(c);return l.custom?m:cZ("a",{"aria-current":c.isExactActive?l.ariaCurrentValue:null,href:c.href,onClick:c.navigate,class:b.value},m)}}}),GM=WM;function sM(l){if(!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)&&!l.defaultPrevented&&!(l.button!==void 0&&l.button!==0)){if(l.currentTarget&&l.currentTarget.getAttribute){const Z=l.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(Z))return}return l.preventDefault&&l.preventDefault(),!0}}function NM(l,Z){for(const c in Z){const d=Z[c],b=l[c];if(typeof d=="string"){if(d!==b)return!1}else if(!uZ(b)||b.length!==d.length||d.some((m,W)=>m!==b[W]))return!1}return!0}function Hm(l){return l?l.aliasOf?l.aliasOf.path:l.path:""}const Pm=(l,Z,c)=>l??Z??c,MM=WZ({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(l,{attrs:Z,slots:c}){const d=TZ(_d),b=el(()=>l.route||d.value),m=TZ(Em,0),W=el(()=>{let M=Zl(m);const{matched:N}=b.value;let Y;for(;(Y=N[M])&&!Y.components;)M++;return M}),G=el(()=>b.value.matched[W.value]);Qc(Em,el(()=>W.value+1)),Qc(bM,G),Qc(_d,b);const s=k();return xl(()=>[s.value,G.value,l.name],([M,N,Y],[X,i,p])=>{N&&(N.instances[Y]=M,i&&i!==N&&M&&M===X&&(N.leaveGuards.size||(N.leaveGuards=i.leaveGuards),N.updateGuards.size||(N.updateGuards=i.updateGuards))),M&&N&&(!i||!Wc(N,i)||!X)&&(N.enterCallbacks[Y]||[]).forEach(o=>o(M))},{flush:"post"}),()=>{const M=b.value,N=l.name,Y=G.value,X=Y&&Y.components[N];if(!X)return vm(c.default,{Component:X,route:M});const i=Y.props[N],p=i?i===!0?M.params:typeof i=="function"?i(M):i:null,F=cZ(X,hl({},p,Z,{onVnodeUnmounted:J=>{J.component.isUnmounted&&(Y.instances[N]=null)},ref:s}));return vm(c.default,{Component:F,route:M})||F}}});function vm(l,Z){if(!l)return null;const c=l(Z);return c.length===1?c[0]:c}const o0=MM;function uM(l){const Z=fN(l.routes,l),c=l.parseQuery||cM,d=l.stringifyQuery||gm,b=l.history,m=Yc(),W=Yc(),G=Yc(),s=YG(oZ);let M=oZ;qZ&&l.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const N=xd.bind(null,T=>""+T),Y=xd.bind(null,nN),X=xd.bind(null,wc);function i(T,e){let D,g;return L0(T)?(D=Z.getRecordMatcher(T),g=e):g=T,Z.addRoute(g,D)}function p(T){const e=Z.getRecordMatcher(T);e&&Z.removeRoute(e)}function o(){return Z.getRoutes().map(T=>T.record)}function F(T){return!!Z.getRecordMatcher(T)}function J(T,e){if(e=hl({},e||s.value),typeof T=="string"){const t=Dd(c,T,e.path),y=Z.resolve({path:t.path},e),L=b.createHref(t.fullPath);return hl(t,y,{params:X(y.params),hash:wc(t.hash),redirectedFrom:void 0,href:L})}let D;if(T.path!=null)D=hl({},T,{path:Dd(c,T.path,e.path).path});else{const t=hl({},T.params);for(const y in t)t[y]==null&&delete t[y];D=hl({},T,{params:Y(t)}),e.params=Y(e.params)}const g=Z.resolve(D,e),il=T.hash||"";g.params=N(X(g.params));const zl=oN(d,hl({},T,{hash:aN(il),path:g.path})),u=b.createHref(zl);return hl({fullPath:zl,hash:il,query:d===gm?dM(T.query):T.query||{}},g,{redirectedFrom:void 0,href:u})}function U(T){return typeof T=="string"?Dd(c,T,s.value.path):hl({},T)}function j(T,e){if(M!==T)return Gc(8,{from:e,to:T})}function $(T){return ll(T)}function cl(T){return $(hl(U(T),{replace:!0}))}function K(T){const e=T.matched[T.matched.length-1];if(e&&e.redirect){const{redirect:D}=e;let g=typeof D=="function"?D(T):D;return typeof g=="string"&&(g=g.includes("?")||g.includes("#")?g=U(g):{path:g},g.params={}),hl({query:T.query,hash:T.hash,params:g.path!=null?{}:T.params},g)}}function ll(T,e){const D=M=J(T),g=s.value,il=T.state,zl=T.force,u=T.replace===!0,t=K(D);if(t)return ll(hl(U(t),{state:typeof t=="object"?hl({},il,t.state):il,force:zl,replace:u}),e||D);const y=D;y.redirectedFrom=e;let L;return!zl&&RN(d,g,D)&&(L=Gc(16,{to:y,from:g}),B(g,g,!0,!1)),(L?Promise.resolve(L):bl(y,g)).catch(a=>hZ(a)?hZ(a,2)?a:fl(a):ul(a,y,g)).then(a=>{if(a){if(hZ(a,2))return ll(hl({replace:u},U(a.to),{state:typeof a.to=="object"?hl({},il,a.to.state):il,force:zl}),e||y)}else a=O(y,g,!0,u,il);return Gl(y,g,a),a})}function tl(T,e){const D=j(T,e);return D?Promise.reject(D):Promise.resolve()}function P(T){const e=Vl.values().next().value;return e&&typeof e.runWithContext=="function"?e.runWithContext(T):T()}function bl(T,e){let D;const[g,il,zl]=YM(T,e);D=Jd(g.reverse(),"beforeRouteLeave",T,e);for(const t of g)t.leaveGuards.forEach(y=>{D.push(eZ(y,T,e))});const u=tl.bind(null,T,e);return D.push(u),Sl(D).then(()=>{D=[];for(const t of m.list())D.push(eZ(t,T,e));return D.push(u),Sl(D)}).then(()=>{D=Jd(il,"beforeRouteUpdate",T,e);for(const t of il)t.updateGuards.forEach(y=>{D.push(eZ(y,T,e))});return D.push(u),Sl(D)}).then(()=>{D=[];for(const t of zl)if(t.beforeEnter)if(uZ(t.beforeEnter))for(const y of t.beforeEnter)D.push(eZ(y,T,e));else D.push(eZ(t.beforeEnter,T,e));return D.push(u),Sl(D)}).then(()=>(T.matched.forEach(t=>t.enterCallbacks={}),D=Jd(zl,"beforeRouteEnter",T,e,P),D.push(u),Sl(D))).then(()=>{D=[];for(const t of W.list())D.push(eZ(t,T,e));return D.push(u),Sl(D)}).catch(t=>hZ(t,8)?t:Promise.reject(t))}function Gl(T,e,D){G.list().forEach(g=>P(()=>g(T,e,D)))}function O(T,e,D,g,il){const zl=j(T,e);if(zl)return zl;const u=e===oZ,t=qZ?history.state:{};D&&(g||u?b.replace(T.fullPath,hl({scroll:u&&t&&t.scroll},il)):b.push(T.fullPath,il)),s.value=T,B(T,e,D,u),fl()}let sl;function wl(){sl||(sl=b.listen((T,e,D)=>{if(!gl.listening)return;const g=J(T),il=K(g);if(il){ll(hl(il,{replace:!0}),g).catch(ac);return}M=g;const zl=s.value;qZ&&UN(Jm(zl.fullPath,D.delta),hd()),bl(g,zl).catch(u=>hZ(u,12)?u:hZ(u,2)?(ll(u.to,g).then(t=>{hZ(t,20)&&!D.delta&&D.type===Sc.pop&&b.go(-1,!1)}).catch(ac),Promise.reject()):(D.delta&&b.go(-D.delta,!1),ul(u,g,zl))).then(u=>{u=u||O(g,zl,!1),u&&(D.delta&&!hZ(u,8)?b.go(-D.delta,!1):D.type===Sc.pop&&hZ(u,20)&&b.go(-1,!1)),Gl(g,zl,u)}).catch(ac)}))}let Ol=Yc(),Tl=Yc(),Ml;function ul(T,e,D){fl(T);const g=Tl.list();return g.length?g.forEach(il=>il(T,e,D)):console.error(T),Promise.reject(T)}function GZ(){return Ml&&s.value!==oZ?Promise.resolve():new Promise((T,e)=>{Ol.add([T,e])})}function fl(T){return Ml||(Ml=!T,wl(),Ol.list().forEach(([e,D])=>T?D(T):e()),Ol.reset()),T}function B(T,e,D,g){const{scrollBehavior:il}=l;if(!qZ||!il)return Promise.resolve();const zl=!D&&kN(Jm(T.fullPath,0))||(g||!D)&&history.state&&history.state.scroll||null;return AZ().then(()=>il(T,e,zl)).then(u=>u&&jN(u)).catch(u=>ul(u,T,e))}const Wl=T=>b.go(T);let al;const Vl=new Set,gl={currentRoute:s,listening:!0,addRoute:i,removeRoute:p,clearRoutes:Z.clearRoutes,hasRoute:F,getRoutes:o,resolve:J,options:l,push:$,replace:cl,go:Wl,back:()=>Wl(-1),forward:()=>Wl(1),beforeEach:m.add,beforeResolve:W.add,afterEach:G.add,onError:Tl.add,isReady:GZ,install(T){const e=this;T.component("RouterLink",GM),T.component("RouterView",o0),T.config.globalProperties.$router=e,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>Zl(s)}),qZ&&!al&&s.value===oZ&&(al=!0,$(b.location).catch(il=>{}));const D={};for(const il in oZ)Object.defineProperty(D,il,{get:()=>s.value[il],enumerable:!0});T.provide(wb,e),T.provide(z0,VW(D)),T.provide(_d,s);const g=T.unmount;Vl.add(T),T.unmount=function(){Vl.delete(T),Vl.size<1&&(M=oZ,sl&&sl(),sl=null,s.value=oZ,al=!1,Ml=!1),g()}}};function Sl(T){return T.reduce((e,D)=>e.then(()=>P(D)),Promise.resolve())}return gl}function YM(l,Z){const c=[],d=[],b=[],m=Math.max(Z.matched.length,l.matched.length);for(let W=0;W<m;W++){const G=Z.matched[W];G&&(l.matched.find(M=>Wc(M,G))?d.push(G):c.push(G));const s=l.matched[W];s&&(Z.matched.find(M=>Wc(M,s))||b.push(s))}return[c,d,b]}const Il=(l,Z)=>{const c=l.__vccOpts||l;for(const[d,b]of Z)c[d]=b;return c},XM={__name:"App",setup(l){return(Z,c)=>(R(),yl(Zl(o0)))}},tM=Il(XM,[["__scopeId","data-v-1bdfff53"]]),iM={class:"app-header"},hM={class:"container"},yM={class:"app-header-nav",style:{"list-style":"none"}},VM={__name:"LayoutHeader",setup(l){return(Z,c)=>{const d=vl("RouterLink");return R(),H("header",iM,[h("div",hM,[h("ul",yM,[h("li",null,[V(d,{to:"/"},{default:dl(()=>[r("WebAPI")]),_:1})]),h("li",null,[V(d,{to:"/kaiWebapi2"},{default:dl(()=>[r("WebAPI2")]),_:1})]),h("li",null,[V(d,{to:"/vue3"},{default:dl(()=>[r("Vue3")]),_:1})]),h("li",null,[V(d,{to:"/download"},{default:dl(()=>[r("下載")]),_:1})]),h("li",null,[V(d,{to:"/others"},{default:dl(()=>[r("其他")]),_:1})]),h("li",null,[V(d,{to:"/dotnet7_vue3"},{default:dl(()=>[r("Dotnet7_vue3")]),_:1})]),h("li",null,[V(d,{to:"/vscode_function"},{default:dl(()=>[r("VS Code小功能")]),_:1})]),h("li",null,[V(d,{to:"/video"},{default:dl(()=>[r("Video")]),_:1})]),h("li",null,[V(d,{to:"/es6"},{default:dl(()=>[r("ES6")]),_:1})]),h("li",null,[V(d,{to:"/Naive_ui"},{default:dl(()=>[r("Naive-ui")]),_:1})]),h("li",null,[V(d,{to:"/dotnetapi_angular"},{default:dl(()=>[r("DotnetAPI_Angular")]),_:1})]),h("li",null,[V(d,{to:"/AI"},{default:dl(()=>[r("AI")]),_:1})]),h("li",null,[V(d,{to:"/Vue3+.NET7"},{default:dl(()=>[r("Vue3+.NET7")]),_:1})]),h("li",null,[V(d,{to:"/pdf_vue3"},{default:dl(()=>[r("pdf_vue3")]),_:1})])])])])}}},TM=Il(VM,[["__scopeId","data-v-1da4bbb8"]]),aM=h("hr",null,null,-1),LM={__name:"index",setup(l){return(Z,c)=>{const d=vl("RouterView");return R(),H(f,null,[V(TM),aM,V(d)],64)}}},pM="/vue-my-note/assets/uparrow-CelNzM_b.png",nM={name:"scroll-top",data(){return{scrollTop:0,time:0,dParams:20,scrollState:0}},computed:{showTop:function(){return this.scrollTop>200}},mounted(){window.addEventListener("scroll",this.getScrollTop)},methods:{toTop(l){if(this.scrollState)return;this.scrollState=1,l.preventDefault(),document.documentElement.scrollTop||document.body.scrollTop;let Z=this;this.time=setInterval(function(){Z.gotoTop(Z.scrollTop-Z.dParams)},30)},gotoTop(l){this.dParams+=20,l=l>0?l:0,document.documentElement.scrollTop=document.body.scrollTop=window.pageYOffset=l,this.scrollTop<10&&(clearInterval(this.time),this.dParams=20,this.scrollState=0)},getScrollTop(){this.scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop}}},IM=l=>(Ul("data-v-77d80545"),l=l(),kl(),l),zM=IM(()=>h("img",{src:pM},null,-1)),oM=[zM];function RM(l,Z,c,d,b,m){return R(),H("div",{class:"scrollTop",onClick:Z[0]||(Z[0]=(...W)=>m.toTop&&m.toTop(...W))},oM)}const _=Il(nM,[["render",RM],["__scopeId","data-v-77d80545"]]),wM=l=>(Ul("data-v-17862d76"),l=l(),kl(),l),SM=wM(()=>h("div",null,"我是WebAPI頁面",-1)),eM=`
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
  `,xM={__name:"index",setup(l){return _.scrollToTop=!0,(Z,c)=>(R(),H(f,null,[SM,h("div",null,[h("div",{innerHTML:eM})]),V(_)],64))}},DM=Il(xM,[["__scopeId","data-v-17862d76"]]),JM=`
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
`,jM={__name:"TodoListEditDtoAbstract",setup(l){return _.scrollToTop=!0,(Z,c)=>(R(),H(f,null,[h("div",{innerHTML:JM}),V(_)],64))}},UM=`
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
`,kM={__name:"AsyncController",setup(l){return _.scrollToTop=!0,(Z,c)=>(R(),H(f,null,[h("div",{innerHTML:UM}),V(_)],64))}},CM=`
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
`,FM={__name:"AuthController",setup(l){return _.scrollToTop=!0,(Z,c)=>(R(),H(f,null,[h("div",{innerHTML:CM}),V(_)],64))}},OM={id:"Vite_to_github",class:"content"},KM={class:"title"},gM={key:0},EM={class:"title"},QM={key:0},HM={class:"title"},PM={key:0},vM={__name:"index",setup(l){let Z=k(!1),c=k(!1),d=k(!1);return _.scrollToTop=!0,(b,m)=>(R(),H(f,null,[h("div",OM,[h("div",KM,[r("1.DeployVite "),h("button",{onClick:m[0]||(m[0]=W=>ol(Z)?Z.value=!Zl(Z):Z=!Zl(Z))},"Toggle"),V(dZ,null,{default:dl(()=>[Zl(Z)?(R(),H("div",gM,[V(jM)])):Hl("",!0)]),_:1})]),h("div",EM,[r("2.AsyncController "),h("button",{onClick:m[1]||(m[1]=W=>ol(c)?c.value=!Zl(c):c=!Zl(c))},"Toggle"),V(dZ,null,{default:dl(()=>[Zl(c)?(R(),H("div",QM,[V(kM)])):Hl("",!0)]),_:1})]),h("div",HM,[r("3.AsyncController "),h("button",{onClick:m[2]||(m[2]=W=>ol(d)?d.value=!Zl(d):d=!Zl(d))},"Toggle"),V(dZ,null,{default:dl(()=>[Zl(d)?(R(),H("div",PM,[V(FM)])):Hl("",!0)]),_:1})])]),V(_)],64))}},rM=Il(vM,[["__scopeId","data-v-b5f5b106"]]),BM=h("div",null,"我是RabbitVue3頁面",-1),AM=`
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
`,fM={__name:"index",setup(l){return _.scrollToTop=!0,(Z,c)=>(R(),H(f,null,[BM,h("div",{innerHTML:AM}),V(_)],64))}},_M={},qM=Yd('<div data-v-ff3ccd06>我是Download頁面</div><div id="Vue3" class="content" data-v-ff3ccd06><div class="box" data-v-ff3ccd06><div style="padding-top:20px;" data-v-ff3ccd06>【Vue3】</div><div data-v-ff3ccd06><a href="https://www.youtube.com/watch?v=LlYhPO8Ti2U" target="_blank" data-v-ff3ccd06> 1.NET7 Web API | SQL Database | VueJS(3.0) - Composition API | CRUD| Full Video<span class="pdf" data-v-ff3ccd06>YouTube</span></a><p data-v-ff3ccd06>.解決CORS問題</p></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=19m0QpipH0fPS51aztlgZ0gFxwWkSpqo_" data-v-ff3ccd06> 1.dotnet7_vue3<span class="pdf" data-v-ff3ccd06>download&gt;</span></a></div><div data-v-ff3ccd06><a href="https://www.youtube.com/watch?v=2FoD_8dMGyU&amp;list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG" target="_blank" data-v-ff3ccd06> 2.【黑馬程序員】前端Vue3小兔鮮實戰項目<span class="pdf" data-v-ff3ccd06>YouTube</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=10LPanB6adG6BLF0cKcM3H-VCSvUWwf8A" data-v-ff3ccd06> 3.vue-rabbit_my 小兔鮮<span class="pdf" data-v-ff3ccd06>download</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=1AXgm42kcojPX2g7EfrSmHyb-N1BJAAMi" data-v-ff3ccd06> 4.vue-rabbit_sku 小兔鮮<span class="pdf" data-v-ff3ccd06>download</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=18N6U0JeeUsS6EhGGz2jvh3aZK41L-uBc" data-v-ff3ccd06> 5.vue3-basic-project-my(mock)<span class="pdf" data-v-ff3ccd06>download</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=1Xe_GxmzXJVSIxMnqw3cm15YkLLQc4tWD" data-v-ff3ccd06> 6.vue3-basic-project-my(有驗證名字不能重覆update)<span class="pdf" data-v-ff3ccd06>download</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=1551IhmQAwld3cmTH60XHFYvEbvCj2Hfo" data-v-ff3ccd06> 7.台灣濕地學會<span class="pdf" data-v-ff3ccd06>download</span></a></div><div style="padding-top:20px;" data-v-ff3ccd06>【WebAPI】</div><div data-v-ff3ccd06><a href="https://blog.talllkai.com/ASPNETCore" target="_blank" data-v-ff3ccd06> 1.完整且輕鬆學習ASP.NET Core Web API<span class="pdf" data-v-ff3ccd06>Web</span></a></div><div data-v-ff3ccd06><a href="https://www.youtube.com/watch?v=dXUfZuf1Wp4&amp;list=PLneJIGUTIItuqdxuDBEKCrvXCtCdUf_Xm" target="_blank" data-v-ff3ccd06> 2.ASP.NET Core Web API 入門教學<span class="pdf" data-v-ff3ccd06>YouTube</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=1Mi3nQijxvyz6TmA7NWzkudmxeJha7W-e" data-v-ff3ccd06> 3.DataBase_First_凱哥<span class="pdf" data-v-ff3ccd06>download</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=1ZvJ5hwHCPzPRMsv_w3sWJOxKYI88h8xd" data-v-ff3ccd06> 4.BookMark<span class="pdf" data-v-ff3ccd06>download</span></a></div><div data-v-ff3ccd06><a download href="https://drive.google.com/uc?export=download&amp;id=1Oiyo9Pgg-qCY6mkY9L0WDVmAc3VQYeeP" data-v-ff3ccd06> 5.無蝦米download<span class="pdf" data-v-ff3ccd06>download</span></a></div></div></div>',2);function $M(l,Z){return qM}const lu=Il(_M,[["render",$M],["__scopeId","data-v-ff3ccd06"]]),Zu=`
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
`,R0={__name:"_4_deployVite",setup(l){return _.scrollToTop=!0,(Z,c)=>(R(),H(f,null,[h("div",{innerHTML:Zu}),V(_)],64))}},cu=`
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
`,du={__name:"_10_vue3_is",setup(l){return _.scrollToTop=!0,(Z,c)=>(R(),H(f,null,[h("div",{innerHTML:cu}),V(_)],64))}},bu=`
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
`,mu={__name:"_11_vue3_is",setup(l){return _.scrollToTop=!0,(Z,c)=>(R(),H(f,null,[h("div",{innerHTML:bu}),V(_)],64))}},Wu=`
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
`,Gu={__name:"_16_Quartz",setup(l){return _.scrollToTop=!0,(Z,c)=>(R(),H(f,null,[h("div",{innerHTML:Wu}),V(_)],64))}},su=`
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
`,Nu={__name:"_17_Cors",setup(l){return _.scrollToTop=!0,(Z,c)=>(R(),H(f,null,[h("div",{innerHTML:su}),V(_)],64))}},rm={__name:"HelloWorld",props:["msg2"],emits:["foo"],setup(l,{emit:Z}){const c=Z;return setTimeout(()=>{c("foo","onFoo")},2e3),(d,b)=>(R(),H("div",null,[cc(d.$slots,"default",{},()=>[r("5.HelloWorld.vue")]),r(" "+Bl(l.msg2)+" ",1),cc(d.$slots,"default"),cc(d.$slots,"footer",{msg3:" + msg3 footer props"},()=>[r("footer")])]))}},Fl=l=>(Ul("data-v-fb538a84"),l=l(),kl(),l),Mu=Fl(()=>h("div",null,"這是其他頁",-1)),uu=Fl(()=>h("div",null,"3.2222",-1)),Yu=Fl(()=>h("div",null,"4.2222",-1)),Xu=Fl(()=>h("div",null,"5.App傳遞的默認插槽",-1)),tu={id:"Vite_to_github",class:"content"},iu=Fl(()=>h("div",null,[r("1.Vue3 CRUD + bootstrap "),h("a",{href:"https://www.youtube.com/watch?v=PrKh6GemOyg",target:"_blank"}," https://www.youtube.com/watch?v=PrKh6GemOyg ")],-1)),hu=Fl(()=>h("div",null,[r("2.Vue3 學習筆記 "),h("a",{href:"https://hackmd.io/@Lin-Jay/S1xju_nKO",target:"_blank"}," https://hackmd.io/@Lin-Jay/S1xju_nKO ")],-1)),yu=Fl(()=>h("div",null,[r("3.Build app using Vue JS, .NET Core Web API and Microsoft SQL Server(create Azure) "),h("a",{href:"https://www.youtube.com/watch?v=TMmhECU3rHs",target:"_blank"}," https://www.youtube.com/watch?v=TMmhECU3rHs ")],-1)),Vu=Fl(()=>h("a",{href:"https://www.youtube.com/watch?v=yo2bMGnIKE8",target:"_blank"}," https://www.youtube.com/watch?v=yo2bMGnIKE8 ",-1)),Tu={key:0},au=Yd('<div data-v-fb538a84>5.先學 axios 基礎與封裝管理 API <a href="https://ithelp.ithome.com.tw/articles/10304656" target="_blank" data-v-fb538a84> https://ithelp.ithome.com.tw/articles/10304656 </a></div><div data-v-fb538a84>6.[C#][ASP.NET] Web API 開發心得 (7) - 使用 Token 進行 API 授權驗證 <a href="https://ithelp.ithome.com.tw/articles/10199102" target="_blank" data-v-fb538a84> https://ithelp.ithome.com.tw/articles/10199102 </a></div><div data-v-fb538a84>7.Poy Chang Trial and Error <a href="https://blog.poychang.net/categories/" target="_blank" data-v-fb538a84> https://blog.poychang.net/categories/ </a></div><div data-v-fb538a84>8.阿里巴巴向量圖標庫: iconfont <a href="https://www.iconfont.cn/" target="_blank" data-v-fb538a84> https://www.iconfont.cn/ </a></div><div data-v-fb538a84>9.VueUse 中文文檔 <a href="https://vueuse.pages.dev/" target="_blank" data-v-fb538a84> https://vueuse.pages.dev/ </a></div><div data-v-fb538a84>9.vue3 is我意想不到的用法 <a href="https://segmentfault.com/a/1190000044532342" target="_blank" data-v-fb538a84> https://segmentfault.com/a/1190000044532342 </a></div>',6),Lu=Fl(()=>h("a",{href:"https://blog.csdn.net/kuang_nu/article/details/128834690",target:"_blank"}," https://blog.csdn.net/kuang_nu/article/details/128834690 ",-1)),pu={key:0},nu=Fl(()=>h("a",{href:"https://www.bilibili.com/video/BV166421Z7nU/",target:"_blank"}," https://www.bilibili.com/video/BV166421Z7nU/ ",-1)),Iu={key:0},zu=Fl(()=>h("div",null,[r("12.Master xUnit Like A Pro in Under 10 Minutes! "),h("a",{href:"https://www.youtube.com/watch?v=rohq-Wqj0yI",target:"_blank"}," https://www.youtube.com/watch?v=rohq-Wqj0yI ")],-1)),ou=Fl(()=>h("div",null,[r("13.Native UI - 表單 "),h("a",{href:"https://www.naiveui.com/zh-CN/os-theme/components/form#inline.vue",target:"_blank"}," https://www.naiveui.com/zh-CN/os-theme/components/form#inline.vue ")],-1)),Ru=Fl(()=>h("div",null,[r("14.Vue3 如何用 defineModel 實作 props/ emit 的父子元件傳值，讓傳值變得更方便簡單 "),h("a",{href:"https://muki.tw/vmodel-definemodel-props-emit/",target:"_blank"}," https://muki.tw/vmodel-definemodel-props-emit/ ")],-1)),wu=Fl(()=>h("div",null,[r("15.Vue3 獲取子組件dom "),h("a",{href:"https://wenku.csdn.net/answer/6j4iqoam25?ydreferer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8%3D",target:"_blank"}," https://wenku.csdn.net/answer/6j4iqoam25?ydreferer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8%3D ")],-1)),Su=Fl(()=>h("a",{href:"https://www.bilibili.com/video/BV1G94y1b7JH/?vd_source=1a5937a80fc962029ba6a7b9ee9a1654",target:"_blank"}," https://www.bilibili.com/video/BV1G94y1b7JH/?vd_source=1a5937a80fc962029ba6a7b9ee9a1654 ",-1)),eu=Fl(()=>h("a",{href:"https://www.youtube.com/watch?v=iD3jrj3RBuc&t=118s",target:"_blank"}," Scheduling Background Tasks In .NET With Quartz-https://www.youtube.com/watch?v=iD3jrj3RBuc&t=118s ",-1)),xu={key:0},Du=Fl(()=>h("a",{href:"https://ithelp.ithome.com.tw/articles/10245157",target:"_blank"}," https://ithelp.ithome.com.tw/articles/10245157 ",-1)),Ju={key:0},ju={__name:"index",setup(l){let Z=k(!1),c=k(!1),d=k(!1),b=k(!1),m=k(!1);const W=k("1.Hello Vue3 + Vite"),G=cZ("div",{style:{color:"red"}},[cZ("span","1.Hello World")],[cZ("p","1.這是一個標籤")]);setTimeout(()=>{W.value="3.111"},2e3);const s=Y=>cZ("div",{style:{color:"red"}},Y.count),M=(Y,{slots:X})=>{var p,o;const i=k("4.aaa");return cZ("div",{style:{color:"red"},onClick(){console.log("click")},onMousedown(){console.log("mousedown")}},[(p=X==null?void 0:X.header)==null?void 0:p.call(X,i.value),"4.container",(o=X==null?void 0:X.default)==null?void 0:o.call(X)])},N=(Y,{slots:X})=>cZ(rm,{msg2:"App傳遞的msg2",onFoo(i){console.log("響應的事件foo",i)}},{default:X.default,footer:()=>cZ(rm,null,{default:()=>cZ("div","5.嵌套的默認插槽"),footer:({msg3:i})=>cZ("div","5.嵌套的footer"+i)})});return _.scrollToTop=!0,(Y,X)=>(R(),H(f,null,[Mu,(R(),yl(DG(Zl(G)))),V(s,{count:3.1},{default:dl(()=>[uu]),_:1}),V(M,{count:4.1},{header:dl(i=>[h("div",null,"4.header "+Bl(i),1)]),default:dl(()=>[Yu]),_:1}),V(N,null,{default:dl(()=>[Xu]),_:1}),h("div",tu,[iu,hu,yu,h("div",null,[r("4.How to Deploy Your Vite App to Github Pages "),Vu,h("button",{onClick:X[0]||(X[0]=i=>ol(Z)?Z.value=!Zl(Z):Z=!Zl(Z))},"Toggle"),V(dZ,null,{default:dl(()=>[Zl(Z)?(R(),H("div",Tu,[V(R0)])):Hl("",!0)]),_:1})]),au,h("div",null,[r("10.Vue3 動態組件 標籤和:is 的用法 "),Lu,h("button",{onClick:X[1]||(X[1]=i=>ol(c)?c.value=!Zl(c):c=!Zl(c))},"Toggle"),V(dZ,null,{default:dl(()=>[Zl(c)?(R(),H("div",pu,[V(du)])):Hl("",!0)]),_:1})]),h("div",null,[r("11.Vue3 h函數的使用(必看) "),nu,h("button",{onClick:X[2]||(X[2]=i=>ol(d)?d.value=!Zl(d):d=!Zl(d))},"Toggle"),V(dZ,null,{default:dl(()=>[Zl(d)?(R(),H("div",Iu,[V(mu)])):Hl("",!0)]),_:1})]),zu,ou,Ru,wu,h("div",null,[r("16.Quartz與Cron表達式管理後台任務執行 "),Su,eu,h("button",{onClick:X[3]||(X[3]=i=>ol(b)?b.value=!Zl(b):b=!Zl(b))},"Toggle"),V(dZ,null,{default:dl(()=>[Zl(b)?(R(),H("div",xu,[V(Gu)])):Hl("",!0)]),_:1})]),h("div",null,[r("17.CORS 跨來源資源共用 - 我與 ASP.NET Core 3 的 30天 "),Du,h("button",{onClick:X[4]||(X[4]=i=>ol(m)?m.value=!Zl(m):m=!Zl(m))},"Toggle"),V(dZ,null,{default:dl(()=>[Zl(m)?(R(),H("div",Ju,[V(Nu)])):Hl("",!0)]),_:1})])]),V(_)],64))}},Uu=Il(ju,[["__scopeId","data-v-fb538a84"]]),w0=l=>(Ul("data-v-c0da6ecf"),l=l(),kl(),l),ku=w0(()=>h("div",null,[h("h2",null,"Dotnet7_vue3"),h("a",{href:"https://www.youtube.com/watch?v=LlYhPO8Ti2U",target:"_blank"}," https://www.youtube.com/watch?v=LlYhPO8Ti2U "),h("div",null,".NET7 Web API | SQL Database | VueJS(3.0) - Composition API | CRUD")],-1)),Cu={class:"container"},Fu={class:"app-header-nav",style:{"list-style":"none"}},Ou=w0(()=>h("div",null,null,-1)),Ku={__name:"index",setup(l){return _.scrollToTop=!0,(Z,c)=>{const d=vl("RouterLink"),b=vl("RouterView");return R(),H(f,null,[ku,h("div",null,[h("div",Cu,[h("ul",Fu,[h("li",null,[V(d,{to:"/_beach_info"},{default:dl(()=>[r("_Beach_Info.vue")]),_:1})]),h("li",null,[V(d,{to:"/addbeach"},{default:dl(()=>[r("AddBeach.vue")]),_:1})]),h("li",null,[V(d,{to:"/beachList"},{default:dl(()=>[r("BeachList.vue")]),_:1})]),h("li",null,[V(d,{to:"/editbeach"},{default:dl(()=>[r("EditBeach.vue")]),_:1})]),h("li",null,[V(d,{to:"/routerbeach"},{default:dl(()=>[r("router_Beach.vue")]),_:1})]),h("li",null,[V(d,{to:"/confirmDeletePopup"},{default:dl(()=>[r("ConfirmDeletePopup.vue")]),_:1})])])]),V(b),Ou]),V(_)],64)}}},gu=Il(Ku,[["__scopeId","data-v-c0da6ecf"]]),Eu=l=>(Ul("data-v-faca44a6"),l=l(),kl(),l),Qu=Eu(()=>h("div",null,"這是_Beach_Info",-1)),Hu=`
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
`,Pu={__name:"_Beach_Info",setup(l){return(Z,c)=>(R(),H(f,null,[Qu,h("div",{class:"content"},[h("pre",null,"      "+Bl(Hu)+`
    `)])],64))}},Bm=Il(Pu,[["__scopeId","data-v-faca44a6"]]),vu=l=>(Ul("data-v-315d8245"),l=l(),kl(),l),ru=vu(()=>h("div",null,"這是AddBeach",-1)),Bu=`
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

`,Au={__name:"AddBeach",setup(l){return(Z,c)=>(R(),H(f,null,[ru,h("div",{class:"content"},[h("pre",null,"      "+Bl(Bu)+`
    `)])],64))}},fu=Il(Au,[["__scopeId","data-v-315d8245"]]),_u=l=>(Ul("data-v-21c2ba9b"),l=l(),kl(),l),qu=_u(()=>h("div",null,"這是BeachList",-1)),$u=`
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

`,lY={__name:"BeachList",setup(l){return(Z,c)=>(R(),H(f,null,[qu,h("div",{class:"content"},[h("pre",null,"      "+Bl($u)+`
    `)])],64))}},ZY=Il(lY,[["__scopeId","data-v-21c2ba9b"]]),cY=l=>(Ul("data-v-3763e4f1"),l=l(),kl(),l),dY=cY(()=>h("div",null,"這是EditBeach",-1)),bY=`
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

`,mY={__name:"EditBeach",setup(l){return(Z,c)=>(R(),H(f,null,[dY,h("div",{class:"content"},[h("pre",null,"      "+Bl(bY)+`
    `)])],64))}},WY=Il(mY,[["__scopeId","data-v-3763e4f1"]]),GY=l=>(Ul("data-v-f0f2e55e"),l=l(),kl(),l),sY=GY(()=>h("div",null,"這是_router_Beach",-1)),NY=`
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


`,MY={__name:"router_Beach",setup(l){return(Z,c)=>(R(),H(f,null,[sY,h("div",{class:"content"},[h("pre",null,"      "+Bl(NY)+`
    `)])],64))}},uY=Il(MY,[["__scopeId","data-v-f0f2e55e"]]),YY=l=>(Ul("data-v-69fb1a2b"),l=l(),kl(),l),XY=YY(()=>h("div",null,"這是ConfirmDeletePopup",-1)),tY=`
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


`,iY={__name:"ConfirmDeletePopup",setup(l){return(Z,c)=>(R(),H(f,null,[XY,h("div",{class:"content"},[h("pre",null,`      這放在components\\
      由BeachList 呼叫
      `+Bl(tY)+`
    `)])],64))}},hY=Il(iY,[["__scopeId","data-v-69fb1a2b"]]),yY=`
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
`,VY={__name:"_2_vscode",setup(l){return _.scrollToTop=!0,(Z,c)=>(R(),H(f,null,[h("div",{innerHTML:yY}),V(_)],64))}},Sb=l=>(Ul("data-v-7775a5f3"),l=l(),kl(),l),TY=Sb(()=>h("div",null,"這是VS Code 功能頁",-1)),aY={id:"Vite_to_github",class:"content"},LY=Sb(()=>h("div",null,[r("1.vS Code文件標簽欄多行顯示 "),h("a",{href:"https://blog.csdn.net/mj475002864/article/details/115456004",target:"_blank"}," https://blog.csdn.net/mj475002864/article/details/115456004 "),h("p",null,"ctrl + shift + p => 查詢 Open Workspace Settings => Wrap Tabs 打勾 ")],-1)),pY={key:0},nY=Sb(()=>h("div",null,[r("3.vs code 開發Extension "),h("p",null,"TypeScript Vue Plugin(Volar)"),h("p",null,"Vue Language Features"),h("p",null,"Vue - Official")],-1)),IY={__name:"index",setup(l){let Z=k(!1);return _.scrollToTop=!0,(c,d)=>(R(),H(f,null,[TY,h("div",aY,[LY,h("div",null,[r("2.vs code 快捷鍵 "),h("button",{onClick:d[0]||(d[0]=b=>ol(Z)?Z.value=!Zl(Z):Z=!Zl(Z))},"Toggle"),V(dZ,null,{default:dl(()=>[Zl(Z)?(R(),H("div",pY,[V(VY)])):Hl("",!0)]),_:1})]),nY]),V(_)],64))}},zY=Il(IY,[["__scopeId","data-v-7775a5f3"]]),oY=Yd('<div data-v-bb9159e2>vue3+Naive UI</div><div id="Vite_to_github" class="content" data-v-bb9159e2><div data-v-bb9159e2>1.ue3+Naive UI數據表格基本使用方式 <a href="https://blog.csdn.net/weixin_54570626/article/details/129407702" target="_blank" data-v-bb9159e2> https://blog.csdn.net/weixin_54570626/article/details/129407702 </a></div><div data-v-bb9159e2>2.naive ui 數據表格操作加入兩個按鈕解決辦法 <a href="https://blog.csdn.net/uglyduckling0412/article/details/131438996" target="_blank" data-v-bb9159e2> https://blog.csdn.net/uglyduckling0412/article/details/131438996 </a></div><div data-v-bb9159e2>3.Naive UI之Data Table <a href="https://blog.csdn.net/aliceyang2012/article/details/127801611" target="_blank" data-v-bb9159e2> https://blog.csdn.net/aliceyang2012/article/details/127801611 </a></div><div data-v-bb9159e2>4.vue3結合naiveui的表單規則寫法（回調） <a href="https://www.cnblogs.com/lingern/p/16190795.html" target="_blank" data-v-bb9159e2> https://www.cnblogs.com/lingern/p/16190795.html </a></div></div>',2),RY={__name:"index",setup(l){return k(!1),_.scrollToTop=!0,(Z,c)=>(R(),H(f,null,[oY,V(_)],64))}},wY=Il(RY,[["__scopeId","data-v-bb9159e2"]]),SY=Yd('<div data-v-97fd3d78>這是影音頁</div><div id="Vite_to_github" class="content" data-v-97fd3d78><div data-v-97fd3d78>1.Vue3 CRUD + bootstrap <a href="https://www.youtube.com/watch?v=PrKh6GemOyg" target="_blank" data-v-97fd3d78> https://www.youtube.com/watch?v=PrKh6GemOyg </a></div><div data-v-97fd3d78>2.後台課程管理系統-Vue3版 <a href="https://www.youtube.com/watch?v=yZMTHoGSuVQ&amp;list=PL_vrngOaamYsIovhZ3Cd9M2vPhm3yRTnG" target="_blank" data-v-97fd3d78> https://www.youtube.com/watch?v=yZMTHoGSuVQ&amp;list=PL_vrngOaamYsIovhZ3Cd9M2vPhm3yRTnG </a></div><div data-v-97fd3d78>3.2024年不看后悔的Vue3+.NET7+WebAPI从零手写后台管理系统 <a href="https://www.bilibili.com/video/BV1Km411o7ip?p=1&amp;vd_source=1a5937a80fc962029ba6a7b9ee9a1654" target="_blank" data-v-97fd3d78> https://www.bilibili.com/video/BV1Km411o7ip?p=1&amp;vd_source=1a5937a80fc962029ba6a7b9ee9a1654 </a><a href="https://search.bilibili.com/all?vt=75651059&amp;keyword=2024%E5%B9%B4%E4%B8%8D%E7%9C%8B%E5%90%8E%E6%82%94%E7%9A%84Vue3%2B.NET7%2BWebAPI&amp;from_source=webtop_search&amp;spm_id_from=333.1007&amp;search_source=5" target="_blank" data-v-97fd3d78> https://search.bilibili.com/all?vt=75651059&amp;keyword=2024%E5%B9%B4%E4%B8%8D%E7%9C%8B%E5%90%8E%E6%82%94%E7%9A%84Vue3%2B.NET7%2BWebAPI&amp;from_source=webtop_search&amp;spm_id_from=333.1007&amp;search_source=5 </a></div><div data-v-97fd3d78>4.2023全新C#完全零基础入门教程（附源码） <a href="https://www.bilibili.com/read/cv25507935/" target="_blank" data-v-97fd3d78> https://www.bilibili.com/read/cv25507935/ </a></div></div>',2),eY={__name:"index",setup(l){return k(!1),_.scrollToTop=!0,(Z,c)=>(R(),H(f,null,[SY,V(_)],64))}},xY=Il(eY,[["__scopeId","data-v-97fd3d78"]]),DY=h("div",null,"【尚硅谷】ES6教程——涵盖ES6-ES11",-1),JY=`
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
`,jY={__name:"index",setup(l){return _.scrollToTop=!0,(Z,c)=>(R(),H(f,null,[DY,h("div",{innerHTML:JY}),V(_)],64))}},UY=l=>(Ul("data-v-578d3ec3"),l=l(),kl(),l),kY=UY(()=>h("div",null,"我是DotnetAPI_Angular頁面",-1)),CY=`
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
  `,FY={__name:"index",setup(l){return _.scrollToTop=!0,(Z,c)=>(R(),H(f,null,[kY,h("div",null,[h("div",{innerHTML:CY})]),V(_)],64))}},OY=Il(FY,[["__scopeId","data-v-578d3ec3"]]),KY=l=>(Ul("data-v-e8717692"),l=l(),kl(),l),gY=KY(()=>h("div",null,"WITS Collge 成就AI⼈才職涯",-1)),EY=`
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
`,QY={__name:"index",setup(l){_.scrollToTop=!0;const Z=k({value:"rgba(193,204,204)",btn:!0,theme:"light"});return(c,d)=>(R(),H(f,null,[h("div",null,[h("div",{class:"demo",onClick:d[0]||(d[0]=b=>c.colorEvent(b,Z.value)),style:$l({backgroundColor:Z.value.value})},null,4)]),gY,h("div",{innerHTML:EY,style:$l({color:Z.value.value})},null,4),V(_)],64))}},HY=Il(QY,[["__scopeId","data-v-e8717692"]]),PY=l=>(Ul("data-v-70c23be9"),l=l(),kl(),l),vY=PY(()=>h("div",null,"Vue3+.NET7最新框架实战，手写电商管理后台 | 2023全新录制，前后分离架构(C#/.NET6/.NET Core)B1106",-1)),rY=`
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