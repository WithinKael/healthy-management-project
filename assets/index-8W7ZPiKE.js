function Yv(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Kv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function qs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Lp={exports:{}},Js={},Ap={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zi=Symbol.for("react.element"),Gv=Symbol.for("react.portal"),Xv=Symbol.for("react.fragment"),qv=Symbol.for("react.strict_mode"),Jv=Symbol.for("react.profiler"),Zv=Symbol.for("react.provider"),ey=Symbol.for("react.context"),ty=Symbol.for("react.forward_ref"),ny=Symbol.for("react.suspense"),ry=Symbol.for("react.memo"),iy=Symbol.for("react.lazy"),fd=Symbol.iterator;function oy(e){return e===null||typeof e!="object"?null:(e=fd&&e[fd]||e["@@iterator"],typeof e=="function"?e:null)}var Dp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fp=Object.assign,Np={};function Gr(e,t,n){this.props=e,this.context=t,this.refs=Np,this.updater=n||Dp}Gr.prototype.isReactComponent={};Gr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Gr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Vp(){}Vp.prototype=Gr.prototype;function $u(e,t,n){this.props=e,this.context=t,this.refs=Np,this.updater=n||Dp}var Uu=$u.prototype=new Vp;Uu.constructor=$u;Fp(Uu,Gr.prototype);Uu.isPureReactComponent=!0;var pd=Array.isArray,zp=Object.prototype.hasOwnProperty,Bu={current:null},$p={key:!0,ref:!0,__self:!0,__source:!0};function Up(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)zp.call(t,r)&&!$p.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Zi,type:e,key:o,ref:s,props:i,_owner:Bu.current}}function sy(e,t){return{$$typeof:Zi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Hu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zi}function ay(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var hd=/\/+/g;function Fa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ay(""+e.key):t.toString(36)}function Uo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Zi:case Gv:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Fa(s,0):r,pd(i)?(n="",e!=null&&(n=e.replace(hd,"$&/")+"/"),Uo(i,t,n,"",function(u){return u})):i!=null&&(Hu(i)&&(i=sy(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(hd,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",pd(e))for(var l=0;l<e.length;l++){o=e[l];var a=r+Fa(o,l);s+=Uo(o,t,n,a,i)}else if(a=oy(e),typeof a=="function")for(e=a.call(e),l=0;!(o=e.next()).done;)o=o.value,a=r+Fa(o,l++),s+=Uo(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function co(e,t,n){if(e==null)return e;var r=[],i=0;return Uo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function ly(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var lt={current:null},Bo={transition:null},uy={ReactCurrentDispatcher:lt,ReactCurrentBatchConfig:Bo,ReactCurrentOwner:Bu};ue.Children={map:co,forEach:function(e,t,n){co(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return co(e,function(){t++}),t},toArray:function(e){return co(e,function(t){return t})||[]},only:function(e){if(!Hu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ue.Component=Gr;ue.Fragment=Xv;ue.Profiler=Jv;ue.PureComponent=$u;ue.StrictMode=qv;ue.Suspense=ny;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uy;ue.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Fp({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Bu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)zp.call(t,a)&&!$p.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Zi,type:e.type,key:i,ref:o,props:r,_owner:s}};ue.createContext=function(e){return e={$$typeof:ey,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Zv,_context:e},e.Consumer=e};ue.createElement=Up;ue.createFactory=function(e){var t=Up.bind(null,e);return t.type=e,t};ue.createRef=function(){return{current:null}};ue.forwardRef=function(e){return{$$typeof:ty,render:e}};ue.isValidElement=Hu;ue.lazy=function(e){return{$$typeof:iy,_payload:{_status:-1,_result:e},_init:ly}};ue.memo=function(e,t){return{$$typeof:ry,type:e,compare:t===void 0?null:t}};ue.startTransition=function(e){var t=Bo.transition;Bo.transition={};try{e()}finally{Bo.transition=t}};ue.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ue.useCallback=function(e,t){return lt.current.useCallback(e,t)};ue.useContext=function(e){return lt.current.useContext(e)};ue.useDebugValue=function(){};ue.useDeferredValue=function(e){return lt.current.useDeferredValue(e)};ue.useEffect=function(e,t){return lt.current.useEffect(e,t)};ue.useId=function(){return lt.current.useId()};ue.useImperativeHandle=function(e,t,n){return lt.current.useImperativeHandle(e,t,n)};ue.useInsertionEffect=function(e,t){return lt.current.useInsertionEffect(e,t)};ue.useLayoutEffect=function(e,t){return lt.current.useLayoutEffect(e,t)};ue.useMemo=function(e,t){return lt.current.useMemo(e,t)};ue.useReducer=function(e,t,n){return lt.current.useReducer(e,t,n)};ue.useRef=function(e){return lt.current.useRef(e)};ue.useState=function(e){return lt.current.useState(e)};ue.useSyncExternalStore=function(e,t,n){return lt.current.useSyncExternalStore(e,t,n)};ue.useTransition=function(){return lt.current.useTransition()};ue.version="18.2.0";Ap.exports=ue;var M=Ap.exports;const Ce=qs(M),md=Yv({__proto__:null,default:Ce},[M]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cy=M,dy=Symbol.for("react.element"),fy=Symbol.for("react.fragment"),py=Object.prototype.hasOwnProperty,hy=cy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,my={key:!0,ref:!0,__self:!0,__source:!0};function Bp(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)py.call(t,r)&&!my.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:dy,type:e,key:o,ref:s,props:i,_owner:hy.current}}Js.Fragment=fy;Js.jsx=Bp;Js.jsxs=Bp;Lp.exports=Js;var c=Lp.exports,Al={},Hp={exports:{}},St={},Wp={exports:{}},Qp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,Q){var Y=N.length;N.push(Q);e:for(;0<Y;){var ce=Y-1>>>1,ne=N[ce];if(0<i(ne,Q))N[ce]=Q,N[Y]=ne,Y=ce;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var Q=N[0],Y=N.pop();if(Y!==Q){N[0]=Y;e:for(var ce=0,ne=N.length,je=ne>>>1;ce<je;){var we=2*(ce+1)-1,$e=N[we],he=we+1,be=N[he];if(0>i($e,Y))he<ne&&0>i(be,$e)?(N[ce]=be,N[he]=Y,ce=he):(N[ce]=$e,N[we]=Y,ce=we);else if(he<ne&&0>i(be,Y))N[ce]=be,N[he]=Y,ce=he;else break e}}return Q}function i(N,Q){var Y=N.sortIndex-Q.sortIndex;return Y!==0?Y:N.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var a=[],u=[],f=1,d=null,m=3,x=!1,g=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(N){for(var Q=n(u);Q!==null;){if(Q.callback===null)r(u);else if(Q.startTime<=N)r(u),Q.sortIndex=Q.expirationTime,t(a,Q);else break;Q=n(u)}}function b(N){if(v=!1,y(N),!g)if(n(a)!==null)g=!0,ee(C);else{var Q=n(u);Q!==null&&ve(b,Q.startTime-N)}}function C(N,Q){g=!1,v&&(v=!1,p(P),P=-1),x=!0;var Y=m;try{for(y(Q),d=n(a);d!==null&&(!(d.expirationTime>Q)||N&&!B());){var ce=d.callback;if(typeof ce=="function"){d.callback=null,m=d.priorityLevel;var ne=ce(d.expirationTime<=Q);Q=e.unstable_now(),typeof ne=="function"?d.callback=ne:d===n(a)&&r(a),y(Q)}else r(a);d=n(a)}if(d!==null)var je=!0;else{var we=n(u);we!==null&&ve(b,we.startTime-Q),je=!1}return je}finally{d=null,m=Y,x=!1}}var _=!1,j=null,P=-1,T=5,I=-1;function B(){return!(e.unstable_now()-I<T)}function D(){if(j!==null){var N=e.unstable_now();I=N;var Q=!0;try{Q=j(!0,N)}finally{Q?L():(_=!1,j=null)}}else _=!1}var L;if(typeof h=="function")L=function(){h(D)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,Z=X.port2;X.port1.onmessage=D,L=function(){Z.postMessage(null)}}else L=function(){S(D,0)};function ee(N){j=N,_||(_=!0,L())}function ve(N,Q){P=S(function(){N(e.unstable_now())},Q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){g||x||(g=!0,ee(C))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(N){switch(m){case 1:case 2:case 3:var Q=3;break;default:Q=m}var Y=m;m=Q;try{return N()}finally{m=Y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,Q){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Y=m;m=N;try{return Q()}finally{m=Y}},e.unstable_scheduleCallback=function(N,Q,Y){var ce=e.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ce+Y:ce):Y=ce,N){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=Y+ne,N={id:f++,callback:Q,priorityLevel:N,startTime:Y,expirationTime:ne,sortIndex:-1},Y>ce?(N.sortIndex=Y,t(u,N),n(a)===null&&N===n(u)&&(v?(p(P),P=-1):v=!0,ve(b,Y-ce))):(N.sortIndex=ne,t(a,N),g||x||(g=!0,ee(C))),N},e.unstable_shouldYield=B,e.unstable_wrapCallback=function(N){var Q=m;return function(){var Y=m;m=Q;try{return N.apply(this,arguments)}finally{m=Y}}}})(Qp);Wp.exports=Qp;var gy=Wp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp=M,bt=gy;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Kp=new Set,Mi={};function fr(e,t){zr(e,t),zr(e+"Capture",t)}function zr(e,t){for(Mi[e]=t,e=0;e<t.length;e++)Kp.add(t[e])}var hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Dl=Object.prototype.hasOwnProperty,vy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gd={},vd={};function yy(e){return Dl.call(vd,e)?!0:Dl.call(gd,e)?!1:vy.test(e)?vd[e]=!0:(gd[e]=!0,!1)}function xy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function wy(e,t,n,r){if(t===null||typeof t>"u"||xy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ut(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Je[e]=new ut(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Je[t]=new ut(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Je[e]=new ut(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Je[e]=new ut(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Je[e]=new ut(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Je[e]=new ut(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Je[e]=new ut(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Je[e]=new ut(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Je[e]=new ut(e,5,!1,e.toLowerCase(),null,!1,!1)});var Wu=/[\-:]([a-z])/g;function Qu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Wu,Qu);Je[t]=new ut(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Wu,Qu);Je[t]=new ut(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Wu,Qu);Je[t]=new ut(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Je[e]=new ut(e,1,!1,e.toLowerCase(),null,!1,!1)});Je.xlinkHref=new ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Je[e]=new ut(e,1,!1,e.toLowerCase(),null,!0,!0)});function Yu(e,t,n,r){var i=Je.hasOwnProperty(t)?Je[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(wy(t,n,i,r)&&(n=null),r||i===null?yy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var yn=Yp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fo=Symbol.for("react.element"),wr=Symbol.for("react.portal"),br=Symbol.for("react.fragment"),Ku=Symbol.for("react.strict_mode"),Fl=Symbol.for("react.profiler"),Gp=Symbol.for("react.provider"),Xp=Symbol.for("react.context"),Gu=Symbol.for("react.forward_ref"),Nl=Symbol.for("react.suspense"),Vl=Symbol.for("react.suspense_list"),Xu=Symbol.for("react.memo"),Tn=Symbol.for("react.lazy"),qp=Symbol.for("react.offscreen"),yd=Symbol.iterator;function ei(e){return e===null||typeof e!="object"?null:(e=yd&&e[yd]||e["@@iterator"],typeof e=="function"?e:null)}var Re=Object.assign,Na;function vi(e){if(Na===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Na=t&&t[1]||""}return`
`+Na+e}var Va=!1;function za(e,t){if(!e||Va)return"";Va=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var a=`
`+i[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=l);break}}}finally{Va=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?vi(e):""}function by(e){switch(e.tag){case 5:return vi(e.type);case 16:return vi("Lazy");case 13:return vi("Suspense");case 19:return vi("SuspenseList");case 0:case 2:case 15:return e=za(e.type,!1),e;case 11:return e=za(e.type.render,!1),e;case 1:return e=za(e.type,!0),e;default:return""}}function zl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case br:return"Fragment";case wr:return"Portal";case Fl:return"Profiler";case Ku:return"StrictMode";case Nl:return"Suspense";case Vl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Xp:return(e.displayName||"Context")+".Consumer";case Gp:return(e._context.displayName||"Context")+".Provider";case Gu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xu:return t=e.displayName||null,t!==null?t:zl(e.type)||"Memo";case Tn:t=e._payload,e=e._init;try{return zl(e(t))}catch{}}return null}function Sy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zl(t);case 8:return t===Ku?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Wn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ky(e){var t=Jp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function po(e){e._valueTracker||(e._valueTracker=ky(e))}function Zp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Jp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ds(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function $l(e,t){var n=t.checked;return Re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function xd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Wn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function eh(e,t){t=t.checked,t!=null&&Yu(e,"checked",t,!1)}function Ul(e,t){eh(e,t);var n=Wn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Bl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Bl(e,t.type,Wn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function wd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Bl(e,t,n){(t!=="number"||ds(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var yi=Array.isArray;function Ir(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Wn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Hl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return Re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function bd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(yi(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Wn(n)}}function th(e,t){var n=Wn(t.value),r=Wn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Sd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function nh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?nh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ho,rh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ho=ho||document.createElement("div"),ho.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ho.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ri(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Si={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Cy=["Webkit","ms","Moz","O"];Object.keys(Si).forEach(function(e){Cy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Si[t]=Si[e]})});function ih(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Si.hasOwnProperty(e)&&Si[e]?(""+t).trim():t+"px"}function oh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ih(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Ey=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ql(e,t){if(t){if(Ey[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function Yl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kl=null;function qu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gl=null,Lr=null,Ar=null;function kd(e){if(e=no(e)){if(typeof Gl!="function")throw Error(A(280));var t=e.stateNode;t&&(t=ra(t),Gl(e.stateNode,e.type,t))}}function sh(e){Lr?Ar?Ar.push(e):Ar=[e]:Lr=e}function ah(){if(Lr){var e=Lr,t=Ar;if(Ar=Lr=null,kd(e),t)for(e=0;e<t.length;e++)kd(t[e])}}function lh(e,t){return e(t)}function uh(){}var $a=!1;function ch(e,t,n){if($a)return e(t,n);$a=!0;try{return lh(e,t,n)}finally{$a=!1,(Lr!==null||Ar!==null)&&(uh(),ah())}}function Ii(e,t){var n=e.stateNode;if(n===null)return null;var r=ra(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var Xl=!1;if(hn)try{var ti={};Object.defineProperty(ti,"passive",{get:function(){Xl=!0}}),window.addEventListener("test",ti,ti),window.removeEventListener("test",ti,ti)}catch{Xl=!1}function jy(e,t,n,r,i,o,s,l,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var ki=!1,fs=null,ps=!1,ql=null,Oy={onError:function(e){ki=!0,fs=e}};function _y(e,t,n,r,i,o,s,l,a){ki=!1,fs=null,jy.apply(Oy,arguments)}function Py(e,t,n,r,i,o,s,l,a){if(_y.apply(this,arguments),ki){if(ki){var u=fs;ki=!1,fs=null}else throw Error(A(198));ps||(ps=!0,ql=u)}}function pr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function dh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Cd(e){if(pr(e)!==e)throw Error(A(188))}function Ty(e){var t=e.alternate;if(!t){if(t=pr(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Cd(i),e;if(o===r)return Cd(i),t;o=o.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function fh(e){return e=Ty(e),e!==null?ph(e):null}function ph(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ph(e);if(t!==null)return t;e=e.sibling}return null}var hh=bt.unstable_scheduleCallback,Ed=bt.unstable_cancelCallback,My=bt.unstable_shouldYield,Ry=bt.unstable_requestPaint,De=bt.unstable_now,Iy=bt.unstable_getCurrentPriorityLevel,Ju=bt.unstable_ImmediatePriority,mh=bt.unstable_UserBlockingPriority,hs=bt.unstable_NormalPriority,Ly=bt.unstable_LowPriority,gh=bt.unstable_IdlePriority,Zs=null,en=null;function Ay(e){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Zs,e,void 0,(e.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:Ny,Dy=Math.log,Fy=Math.LN2;function Ny(e){return e>>>=0,e===0?32:31-(Dy(e)/Fy|0)|0}var mo=64,go=4194304;function xi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ms(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=xi(l):(o&=s,o!==0&&(r=xi(o)))}else s=n&~i,s!==0?r=xi(s):o!==0&&(r=xi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-$t(t),i=1<<n,r|=e[n],t&=~i;return r}function Vy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-$t(o),l=1<<s,a=i[s];a===-1?(!(l&n)||l&r)&&(i[s]=Vy(l,t)):a<=t&&(e.expiredLanes|=l),o&=~l}}function Jl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function vh(){var e=mo;return mo<<=1,!(mo&4194240)&&(mo=64),e}function Ua(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function eo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-$t(t),e[t]=n}function $y(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-$t(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Zu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-$t(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ye=0;function yh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var xh,ec,wh,bh,Sh,Zl=!1,vo=[],Fn=null,Nn=null,Vn=null,Li=new Map,Ai=new Map,Rn=[],Uy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jd(e,t){switch(e){case"focusin":case"focusout":Fn=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":Vn=null;break;case"pointerover":case"pointerout":Li.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ai.delete(t.pointerId)}}function ni(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=no(t),t!==null&&ec(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function By(e,t,n,r,i){switch(t){case"focusin":return Fn=ni(Fn,e,t,n,r,i),!0;case"dragenter":return Nn=ni(Nn,e,t,n,r,i),!0;case"mouseover":return Vn=ni(Vn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Li.set(o,ni(Li.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ai.set(o,ni(Ai.get(o)||null,e,t,n,r,i)),!0}return!1}function kh(e){var t=Zn(e.target);if(t!==null){var n=pr(t);if(n!==null){if(t=n.tag,t===13){if(t=dh(n),t!==null){e.blockedOn=t,Sh(e.priority,function(){wh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ho(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=eu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Kl=r,n.target.dispatchEvent(r),Kl=null}else return t=no(n),t!==null&&ec(t),e.blockedOn=n,!1;t.shift()}return!0}function Od(e,t,n){Ho(e)&&n.delete(t)}function Hy(){Zl=!1,Fn!==null&&Ho(Fn)&&(Fn=null),Nn!==null&&Ho(Nn)&&(Nn=null),Vn!==null&&Ho(Vn)&&(Vn=null),Li.forEach(Od),Ai.forEach(Od)}function ri(e,t){e.blockedOn===t&&(e.blockedOn=null,Zl||(Zl=!0,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,Hy)))}function Di(e){function t(i){return ri(i,e)}if(0<vo.length){ri(vo[0],e);for(var n=1;n<vo.length;n++){var r=vo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Fn!==null&&ri(Fn,e),Nn!==null&&ri(Nn,e),Vn!==null&&ri(Vn,e),Li.forEach(t),Ai.forEach(t),n=0;n<Rn.length;n++)r=Rn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Rn.length&&(n=Rn[0],n.blockedOn===null);)kh(n),n.blockedOn===null&&Rn.shift()}var Dr=yn.ReactCurrentBatchConfig,gs=!0;function Wy(e,t,n,r){var i=ye,o=Dr.transition;Dr.transition=null;try{ye=1,tc(e,t,n,r)}finally{ye=i,Dr.transition=o}}function Qy(e,t,n,r){var i=ye,o=Dr.transition;Dr.transition=null;try{ye=4,tc(e,t,n,r)}finally{ye=i,Dr.transition=o}}function tc(e,t,n,r){if(gs){var i=eu(e,t,n,r);if(i===null)Ja(e,t,r,vs,n),jd(e,r);else if(By(i,e,t,n,r))r.stopPropagation();else if(jd(e,r),t&4&&-1<Uy.indexOf(e)){for(;i!==null;){var o=no(i);if(o!==null&&xh(o),o=eu(e,t,n,r),o===null&&Ja(e,t,r,vs,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ja(e,t,r,null,n)}}var vs=null;function eu(e,t,n,r){if(vs=null,e=qu(r),e=Zn(e),e!==null)if(t=pr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=dh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return vs=e,null}function Ch(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Iy()){case Ju:return 1;case mh:return 4;case hs:case Ly:return 16;case gh:return 536870912;default:return 16}default:return 16}}var Ln=null,nc=null,Wo=null;function Eh(){if(Wo)return Wo;var e,t=nc,n=t.length,r,i="value"in Ln?Ln.value:Ln.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Wo=i.slice(e,1<r?1-r:void 0)}function Qo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function yo(){return!0}function _d(){return!1}function kt(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?yo:_d,this.isPropagationStopped=_d,this}return Re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yo)},persist:function(){},isPersistent:yo}),t}var Xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rc=kt(Xr),to=Re({},Xr,{view:0,detail:0}),Yy=kt(to),Ba,Ha,ii,ea=Re({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ic,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ii&&(ii&&e.type==="mousemove"?(Ba=e.screenX-ii.screenX,Ha=e.screenY-ii.screenY):Ha=Ba=0,ii=e),Ba)},movementY:function(e){return"movementY"in e?e.movementY:Ha}}),Pd=kt(ea),Ky=Re({},ea,{dataTransfer:0}),Gy=kt(Ky),Xy=Re({},to,{relatedTarget:0}),Wa=kt(Xy),qy=Re({},Xr,{animationName:0,elapsedTime:0,pseudoElement:0}),Jy=kt(qy),Zy=Re({},Xr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),e0=kt(Zy),t0=Re({},Xr,{data:0}),Td=kt(t0),n0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},r0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},i0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function o0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=i0[e])?!!t[e]:!1}function ic(){return o0}var s0=Re({},to,{key:function(e){if(e.key){var t=n0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?r0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ic,charCode:function(e){return e.type==="keypress"?Qo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),a0=kt(s0),l0=Re({},ea,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Md=kt(l0),u0=Re({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ic}),c0=kt(u0),d0=Re({},Xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),f0=kt(d0),p0=Re({},ea,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),h0=kt(p0),m0=[9,13,27,32],oc=hn&&"CompositionEvent"in window,Ci=null;hn&&"documentMode"in document&&(Ci=document.documentMode);var g0=hn&&"TextEvent"in window&&!Ci,jh=hn&&(!oc||Ci&&8<Ci&&11>=Ci),Rd=" ",Id=!1;function Oh(e,t){switch(e){case"keyup":return m0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _h(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sr=!1;function v0(e,t){switch(e){case"compositionend":return _h(t);case"keypress":return t.which!==32?null:(Id=!0,Rd);case"textInput":return e=t.data,e===Rd&&Id?null:e;default:return null}}function y0(e,t){if(Sr)return e==="compositionend"||!oc&&Oh(e,t)?(e=Eh(),Wo=nc=Ln=null,Sr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return jh&&t.locale!=="ko"?null:t.data;default:return null}}var x0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ld(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!x0[e.type]:t==="textarea"}function Ph(e,t,n,r){sh(r),t=ys(t,"onChange"),0<t.length&&(n=new rc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ei=null,Fi=null;function w0(e){zh(e,0)}function ta(e){var t=Er(e);if(Zp(t))return e}function b0(e,t){if(e==="change")return t}var Th=!1;if(hn){var Qa;if(hn){var Ya="oninput"in document;if(!Ya){var Ad=document.createElement("div");Ad.setAttribute("oninput","return;"),Ya=typeof Ad.oninput=="function"}Qa=Ya}else Qa=!1;Th=Qa&&(!document.documentMode||9<document.documentMode)}function Dd(){Ei&&(Ei.detachEvent("onpropertychange",Mh),Fi=Ei=null)}function Mh(e){if(e.propertyName==="value"&&ta(Fi)){var t=[];Ph(t,Fi,e,qu(e)),ch(w0,t)}}function S0(e,t,n){e==="focusin"?(Dd(),Ei=t,Fi=n,Ei.attachEvent("onpropertychange",Mh)):e==="focusout"&&Dd()}function k0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ta(Fi)}function C0(e,t){if(e==="click")return ta(t)}function E0(e,t){if(e==="input"||e==="change")return ta(t)}function j0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ht=typeof Object.is=="function"?Object.is:j0;function Ni(e,t){if(Ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Dl.call(t,i)||!Ht(e[i],t[i]))return!1}return!0}function Fd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nd(e,t){var n=Fd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fd(n)}}function Rh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Rh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ih(){for(var e=window,t=ds();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ds(e.document)}return t}function sc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function O0(e){var t=Ih(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Rh(n.ownerDocument.documentElement,n)){if(r!==null&&sc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Nd(n,o);var s=Nd(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var _0=hn&&"documentMode"in document&&11>=document.documentMode,kr=null,tu=null,ji=null,nu=!1;function Vd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nu||kr==null||kr!==ds(r)||(r=kr,"selectionStart"in r&&sc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ji&&Ni(ji,r)||(ji=r,r=ys(tu,"onSelect"),0<r.length&&(t=new rc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=kr)))}function xo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Cr={animationend:xo("Animation","AnimationEnd"),animationiteration:xo("Animation","AnimationIteration"),animationstart:xo("Animation","AnimationStart"),transitionend:xo("Transition","TransitionEnd")},Ka={},Lh={};hn&&(Lh=document.createElement("div").style,"AnimationEvent"in window||(delete Cr.animationend.animation,delete Cr.animationiteration.animation,delete Cr.animationstart.animation),"TransitionEvent"in window||delete Cr.transitionend.transition);function na(e){if(Ka[e])return Ka[e];if(!Cr[e])return e;var t=Cr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Lh)return Ka[e]=t[n];return e}var Ah=na("animationend"),Dh=na("animationiteration"),Fh=na("animationstart"),Nh=na("transitionend"),Vh=new Map,zd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yn(e,t){Vh.set(e,t),fr(t,[e])}for(var Ga=0;Ga<zd.length;Ga++){var Xa=zd[Ga],P0=Xa.toLowerCase(),T0=Xa[0].toUpperCase()+Xa.slice(1);Yn(P0,"on"+T0)}Yn(Ah,"onAnimationEnd");Yn(Dh,"onAnimationIteration");Yn(Fh,"onAnimationStart");Yn("dblclick","onDoubleClick");Yn("focusin","onFocus");Yn("focusout","onBlur");Yn(Nh,"onTransitionEnd");zr("onMouseEnter",["mouseout","mouseover"]);zr("onMouseLeave",["mouseout","mouseover"]);zr("onPointerEnter",["pointerout","pointerover"]);zr("onPointerLeave",["pointerout","pointerover"]);fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),M0=new Set("cancel close invalid load scroll toggle".split(" ").concat(wi));function $d(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Py(r,t,void 0,e),e.currentTarget=null}function zh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==o&&i.isPropagationStopped())break e;$d(i,l,u),o=a}else for(s=0;s<r.length;s++){if(l=r[s],a=l.instance,u=l.currentTarget,l=l.listener,a!==o&&i.isPropagationStopped())break e;$d(i,l,u),o=a}}}if(ps)throw e=ql,ps=!1,ql=null,e}function Oe(e,t){var n=t[au];n===void 0&&(n=t[au]=new Set);var r=e+"__bubble";n.has(r)||($h(t,e,2,!1),n.add(r))}function qa(e,t,n){var r=0;t&&(r|=4),$h(n,e,r,t)}var wo="_reactListening"+Math.random().toString(36).slice(2);function Vi(e){if(!e[wo]){e[wo]=!0,Kp.forEach(function(n){n!=="selectionchange"&&(M0.has(n)||qa(n,!1,e),qa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wo]||(t[wo]=!0,qa("selectionchange",!1,t))}}function $h(e,t,n,r){switch(Ch(t)){case 1:var i=Wy;break;case 4:i=Qy;break;default:i=tc}n=i.bind(null,t,n,e),i=void 0,!Xl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ja(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;s=s.return}for(;l!==null;){if(s=Zn(l),s===null)return;if(a=s.tag,a===5||a===6){r=o=s;continue e}l=l.parentNode}}r=r.return}ch(function(){var u=o,f=qu(n),d=[];e:{var m=Vh.get(e);if(m!==void 0){var x=rc,g=e;switch(e){case"keypress":if(Qo(n)===0)break e;case"keydown":case"keyup":x=a0;break;case"focusin":g="focus",x=Wa;break;case"focusout":g="blur",x=Wa;break;case"beforeblur":case"afterblur":x=Wa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Pd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Gy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=c0;break;case Ah:case Dh:case Fh:x=Jy;break;case Nh:x=f0;break;case"scroll":x=Yy;break;case"wheel":x=h0;break;case"copy":case"cut":case"paste":x=e0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Md}var v=(t&4)!==0,S=!v&&e==="scroll",p=v?m!==null?m+"Capture":null:m;v=[];for(var h=u,y;h!==null;){y=h;var b=y.stateNode;if(y.tag===5&&b!==null&&(y=b,p!==null&&(b=Ii(h,p),b!=null&&v.push(zi(h,b,y)))),S)break;h=h.return}0<v.length&&(m=new x(m,g,null,n,f),d.push({event:m,listeners:v}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==Kl&&(g=n.relatedTarget||n.fromElement)&&(Zn(g)||g[mn]))break e;if((x||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,x?(g=n.relatedTarget||n.toElement,x=u,g=g?Zn(g):null,g!==null&&(S=pr(g),g!==S||g.tag!==5&&g.tag!==6)&&(g=null)):(x=null,g=u),x!==g)){if(v=Pd,b="onMouseLeave",p="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(v=Md,b="onPointerLeave",p="onPointerEnter",h="pointer"),S=x==null?m:Er(x),y=g==null?m:Er(g),m=new v(b,h+"leave",x,n,f),m.target=S,m.relatedTarget=y,b=null,Zn(f)===u&&(v=new v(p,h+"enter",g,n,f),v.target=y,v.relatedTarget=S,b=v),S=b,x&&g)t:{for(v=x,p=g,h=0,y=v;y;y=mr(y))h++;for(y=0,b=p;b;b=mr(b))y++;for(;0<h-y;)v=mr(v),h--;for(;0<y-h;)p=mr(p),y--;for(;h--;){if(v===p||p!==null&&v===p.alternate)break t;v=mr(v),p=mr(p)}v=null}else v=null;x!==null&&Ud(d,m,x,v,!1),g!==null&&S!==null&&Ud(d,S,g,v,!0)}}e:{if(m=u?Er(u):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var C=b0;else if(Ld(m))if(Th)C=E0;else{C=k0;var _=S0}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(C=C0);if(C&&(C=C(e,u))){Ph(d,C,n,f);break e}_&&_(e,m,u),e==="focusout"&&(_=m._wrapperState)&&_.controlled&&m.type==="number"&&Bl(m,"number",m.value)}switch(_=u?Er(u):window,e){case"focusin":(Ld(_)||_.contentEditable==="true")&&(kr=_,tu=u,ji=null);break;case"focusout":ji=tu=kr=null;break;case"mousedown":nu=!0;break;case"contextmenu":case"mouseup":case"dragend":nu=!1,Vd(d,n,f);break;case"selectionchange":if(_0)break;case"keydown":case"keyup":Vd(d,n,f)}var j;if(oc)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Sr?Oh(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(jh&&n.locale!=="ko"&&(Sr||P!=="onCompositionStart"?P==="onCompositionEnd"&&Sr&&(j=Eh()):(Ln=f,nc="value"in Ln?Ln.value:Ln.textContent,Sr=!0)),_=ys(u,P),0<_.length&&(P=new Td(P,e,null,n,f),d.push({event:P,listeners:_}),j?P.data=j:(j=_h(n),j!==null&&(P.data=j)))),(j=g0?v0(e,n):y0(e,n))&&(u=ys(u,"onBeforeInput"),0<u.length&&(f=new Td("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=j))}zh(d,t)})}function zi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ys(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ii(e,n),o!=null&&r.unshift(zi(e,o,i)),o=Ii(e,t),o!=null&&r.push(zi(e,o,i))),e=e.return}return r}function mr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ud(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Ii(n,o),a!=null&&s.unshift(zi(n,a,l))):i||(a=Ii(n,o),a!=null&&s.push(zi(n,a,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var R0=/\r\n?/g,I0=/\u0000|\uFFFD/g;function Bd(e){return(typeof e=="string"?e:""+e).replace(R0,`
`).replace(I0,"")}function bo(e,t,n){if(t=Bd(t),Bd(e)!==t&&n)throw Error(A(425))}function xs(){}var ru=null,iu=null;function ou(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var su=typeof setTimeout=="function"?setTimeout:void 0,L0=typeof clearTimeout=="function"?clearTimeout:void 0,Hd=typeof Promise=="function"?Promise:void 0,A0=typeof queueMicrotask=="function"?queueMicrotask:typeof Hd<"u"?function(e){return Hd.resolve(null).then(e).catch(D0)}:su;function D0(e){setTimeout(function(){throw e})}function Za(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Di(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Di(t)}function zn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Wd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var qr=Math.random().toString(36).slice(2),Xt="__reactFiber$"+qr,$i="__reactProps$"+qr,mn="__reactContainer$"+qr,au="__reactEvents$"+qr,F0="__reactListeners$"+qr,N0="__reactHandles$"+qr;function Zn(e){var t=e[Xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mn]||n[Xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Wd(e);e!==null;){if(n=e[Xt])return n;e=Wd(e)}return t}e=n,n=e.parentNode}return null}function no(e){return e=e[Xt]||e[mn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Er(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function ra(e){return e[$i]||null}var lu=[],jr=-1;function Kn(e){return{current:e}}function _e(e){0>jr||(e.current=lu[jr],lu[jr]=null,jr--)}function Ee(e,t){jr++,lu[jr]=e.current,e.current=t}var Qn={},it=Kn(Qn),ft=Kn(!1),sr=Qn;function $r(e,t){var n=e.type.contextTypes;if(!n)return Qn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function pt(e){return e=e.childContextTypes,e!=null}function ws(){_e(ft),_e(it)}function Qd(e,t,n){if(it.current!==Qn)throw Error(A(168));Ee(it,t),Ee(ft,n)}function Uh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(A(108,Sy(e)||"Unknown",i));return Re({},n,r)}function bs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qn,sr=it.current,Ee(it,e),Ee(ft,ft.current),!0}function Yd(e,t,n){var r=e.stateNode;if(!r)throw Error(A(169));n?(e=Uh(e,t,sr),r.__reactInternalMemoizedMergedChildContext=e,_e(ft),_e(it),Ee(it,e)):_e(ft),Ee(ft,n)}var ln=null,ia=!1,el=!1;function Bh(e){ln===null?ln=[e]:ln.push(e)}function V0(e){ia=!0,Bh(e)}function Gn(){if(!el&&ln!==null){el=!0;var e=0,t=ye;try{var n=ln;for(ye=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ln=null,ia=!1}catch(i){throw ln!==null&&(ln=ln.slice(e+1)),hh(Ju,Gn),i}finally{ye=t,el=!1}}return null}var Or=[],_r=0,Ss=null,ks=0,jt=[],Ot=0,ar=null,un=1,cn="";function qn(e,t){Or[_r++]=ks,Or[_r++]=Ss,Ss=e,ks=t}function Hh(e,t,n){jt[Ot++]=un,jt[Ot++]=cn,jt[Ot++]=ar,ar=e;var r=un;e=cn;var i=32-$t(r)-1;r&=~(1<<i),n+=1;var o=32-$t(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,un=1<<32-$t(t)+i|n<<i|r,cn=o+e}else un=1<<o|n<<i|r,cn=e}function ac(e){e.return!==null&&(qn(e,1),Hh(e,1,0))}function lc(e){for(;e===Ss;)Ss=Or[--_r],Or[_r]=null,ks=Or[--_r],Or[_r]=null;for(;e===ar;)ar=jt[--Ot],jt[Ot]=null,cn=jt[--Ot],jt[Ot]=null,un=jt[--Ot],jt[Ot]=null}var xt=null,yt=null,Pe=!1,Vt=null;function Wh(e,t){var n=_t(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Kd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xt=e,yt=zn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xt=e,yt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ar!==null?{id:un,overflow:cn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=_t(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xt=e,yt=null,!0):!1;default:return!1}}function uu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function cu(e){if(Pe){var t=yt;if(t){var n=t;if(!Kd(e,t)){if(uu(e))throw Error(A(418));t=zn(n.nextSibling);var r=xt;t&&Kd(e,t)?Wh(r,n):(e.flags=e.flags&-4097|2,Pe=!1,xt=e)}}else{if(uu(e))throw Error(A(418));e.flags=e.flags&-4097|2,Pe=!1,xt=e}}}function Gd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xt=e}function So(e){if(e!==xt)return!1;if(!Pe)return Gd(e),Pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ou(e.type,e.memoizedProps)),t&&(t=yt)){if(uu(e))throw Qh(),Error(A(418));for(;t;)Wh(e,t),t=zn(t.nextSibling)}if(Gd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){yt=zn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}yt=null}}else yt=xt?zn(e.stateNode.nextSibling):null;return!0}function Qh(){for(var e=yt;e;)e=zn(e.nextSibling)}function Ur(){yt=xt=null,Pe=!1}function uc(e){Vt===null?Vt=[e]:Vt.push(e)}var z0=yn.ReactCurrentBatchConfig;function At(e,t){if(e&&e.defaultProps){t=Re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Cs=Kn(null),Es=null,Pr=null,cc=null;function dc(){cc=Pr=Es=null}function fc(e){var t=Cs.current;_e(Cs),e._currentValue=t}function du(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Fr(e,t){Es=e,cc=Pr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(dt=!0),e.firstContext=null)}function Mt(e){var t=e._currentValue;if(cc!==e)if(e={context:e,memoizedValue:t,next:null},Pr===null){if(Es===null)throw Error(A(308));Pr=e,Es.dependencies={lanes:0,firstContext:e}}else Pr=Pr.next=e;return t}var er=null;function pc(e){er===null?er=[e]:er.push(e)}function Yh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,pc(t)):(n.next=i.next,i.next=n),t.interleaved=n,gn(e,r)}function gn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Mn=!1;function hc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function dn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function $n(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,pe&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,gn(e,n)}return i=r.interleaved,i===null?(t.next=t,pc(r)):(t.next=i.next,i.next=t),r.interleaved=t,gn(e,n)}function Yo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zu(e,n)}}function Xd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function js(e,t,n,r){var i=e.updateQueue;Mn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,s===null?o=u:s.next=u,s=a;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==s&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=a))}if(o!==null){var d=i.baseState;s=0,f=u=a=null,l=o;do{var m=l.lane,x=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,v=l;switch(m=t,x=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){d=g.call(x,d,m);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,m=typeof g=="function"?g.call(x,d,m):g,m==null)break e;d=Re({},d,m);break e;case 2:Mn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else x={eventTime:x,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=x,a=d):f=f.next=x,s|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(a=d),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);ur|=s,e.lanes=s,e.memoizedState=d}}function qd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var Gh=new Yp.Component().refs;function fu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var oa={isMounted:function(e){return(e=e._reactInternals)?pr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=at(),i=Bn(e),o=dn(r,i);o.payload=t,n!=null&&(o.callback=n),t=$n(e,o,i),t!==null&&(Ut(t,e,i,r),Yo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=at(),i=Bn(e),o=dn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=$n(e,o,i),t!==null&&(Ut(t,e,i,r),Yo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=at(),r=Bn(e),i=dn(n,r);i.tag=2,t!=null&&(i.callback=t),t=$n(e,i,r),t!==null&&(Ut(t,e,r,n),Yo(t,e,r))}};function Jd(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Ni(n,r)||!Ni(i,o):!0}function Xh(e,t,n){var r=!1,i=Qn,o=t.contextType;return typeof o=="object"&&o!==null?o=Mt(o):(i=pt(t)?sr:it.current,r=t.contextTypes,o=(r=r!=null)?$r(e,i):Qn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=oa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Zd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&oa.enqueueReplaceState(t,t.state,null)}function pu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Gh,hc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Mt(o):(o=pt(t)?sr:it.current,i.context=$r(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(fu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&oa.enqueueReplaceState(i,i.state,null),js(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function oi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;l===Gh&&(l=i.refs={}),s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function ko(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ef(e){var t=e._init;return t(e._payload)}function qh(e){function t(p,h){if(e){var y=p.deletions;y===null?(p.deletions=[h],p.flags|=16):y.push(h)}}function n(p,h){if(!e)return null;for(;h!==null;)t(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=Hn(p,h),p.index=0,p.sibling=null,p}function o(p,h,y){return p.index=y,e?(y=p.alternate,y!==null?(y=y.index,y<h?(p.flags|=2,h):y):(p.flags|=2,h)):(p.flags|=1048576,h)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,h,y,b){return h===null||h.tag!==6?(h=al(y,p.mode,b),h.return=p,h):(h=i(h,y),h.return=p,h)}function a(p,h,y,b){var C=y.type;return C===br?f(p,h,y.props.children,b,y.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Tn&&ef(C)===h.type)?(b=i(h,y.props),b.ref=oi(p,h,y),b.return=p,b):(b=Zo(y.type,y.key,y.props,null,p.mode,b),b.ref=oi(p,h,y),b.return=p,b)}function u(p,h,y,b){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=ll(y,p.mode,b),h.return=p,h):(h=i(h,y.children||[]),h.return=p,h)}function f(p,h,y,b,C){return h===null||h.tag!==7?(h=or(y,p.mode,b,C),h.return=p,h):(h=i(h,y),h.return=p,h)}function d(p,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return h=al(""+h,p.mode,y),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case fo:return y=Zo(h.type,h.key,h.props,null,p.mode,y),y.ref=oi(p,null,h),y.return=p,y;case wr:return h=ll(h,p.mode,y),h.return=p,h;case Tn:var b=h._init;return d(p,b(h._payload),y)}if(yi(h)||ei(h))return h=or(h,p.mode,y,null),h.return=p,h;ko(p,h)}return null}function m(p,h,y,b){var C=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return C!==null?null:l(p,h,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case fo:return y.key===C?a(p,h,y,b):null;case wr:return y.key===C?u(p,h,y,b):null;case Tn:return C=y._init,m(p,h,C(y._payload),b)}if(yi(y)||ei(y))return C!==null?null:f(p,h,y,b,null);ko(p,y)}return null}function x(p,h,y,b,C){if(typeof b=="string"&&b!==""||typeof b=="number")return p=p.get(y)||null,l(h,p,""+b,C);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case fo:return p=p.get(b.key===null?y:b.key)||null,a(h,p,b,C);case wr:return p=p.get(b.key===null?y:b.key)||null,u(h,p,b,C);case Tn:var _=b._init;return x(p,h,y,_(b._payload),C)}if(yi(b)||ei(b))return p=p.get(y)||null,f(h,p,b,C,null);ko(h,b)}return null}function g(p,h,y,b){for(var C=null,_=null,j=h,P=h=0,T=null;j!==null&&P<y.length;P++){j.index>P?(T=j,j=null):T=j.sibling;var I=m(p,j,y[P],b);if(I===null){j===null&&(j=T);break}e&&j&&I.alternate===null&&t(p,j),h=o(I,h,P),_===null?C=I:_.sibling=I,_=I,j=T}if(P===y.length)return n(p,j),Pe&&qn(p,P),C;if(j===null){for(;P<y.length;P++)j=d(p,y[P],b),j!==null&&(h=o(j,h,P),_===null?C=j:_.sibling=j,_=j);return Pe&&qn(p,P),C}for(j=r(p,j);P<y.length;P++)T=x(j,p,P,y[P],b),T!==null&&(e&&T.alternate!==null&&j.delete(T.key===null?P:T.key),h=o(T,h,P),_===null?C=T:_.sibling=T,_=T);return e&&j.forEach(function(B){return t(p,B)}),Pe&&qn(p,P),C}function v(p,h,y,b){var C=ei(y);if(typeof C!="function")throw Error(A(150));if(y=C.call(y),y==null)throw Error(A(151));for(var _=C=null,j=h,P=h=0,T=null,I=y.next();j!==null&&!I.done;P++,I=y.next()){j.index>P?(T=j,j=null):T=j.sibling;var B=m(p,j,I.value,b);if(B===null){j===null&&(j=T);break}e&&j&&B.alternate===null&&t(p,j),h=o(B,h,P),_===null?C=B:_.sibling=B,_=B,j=T}if(I.done)return n(p,j),Pe&&qn(p,P),C;if(j===null){for(;!I.done;P++,I=y.next())I=d(p,I.value,b),I!==null&&(h=o(I,h,P),_===null?C=I:_.sibling=I,_=I);return Pe&&qn(p,P),C}for(j=r(p,j);!I.done;P++,I=y.next())I=x(j,p,P,I.value,b),I!==null&&(e&&I.alternate!==null&&j.delete(I.key===null?P:I.key),h=o(I,h,P),_===null?C=I:_.sibling=I,_=I);return e&&j.forEach(function(D){return t(p,D)}),Pe&&qn(p,P),C}function S(p,h,y,b){if(typeof y=="object"&&y!==null&&y.type===br&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case fo:e:{for(var C=y.key,_=h;_!==null;){if(_.key===C){if(C=y.type,C===br){if(_.tag===7){n(p,_.sibling),h=i(_,y.props.children),h.return=p,p=h;break e}}else if(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Tn&&ef(C)===_.type){n(p,_.sibling),h=i(_,y.props),h.ref=oi(p,_,y),h.return=p,p=h;break e}n(p,_);break}else t(p,_);_=_.sibling}y.type===br?(h=or(y.props.children,p.mode,b,y.key),h.return=p,p=h):(b=Zo(y.type,y.key,y.props,null,p.mode,b),b.ref=oi(p,h,y),b.return=p,p=b)}return s(p);case wr:e:{for(_=y.key;h!==null;){if(h.key===_)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){n(p,h.sibling),h=i(h,y.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else t(p,h);h=h.sibling}h=ll(y,p.mode,b),h.return=p,p=h}return s(p);case Tn:return _=y._init,S(p,h,_(y._payload),b)}if(yi(y))return g(p,h,y,b);if(ei(y))return v(p,h,y,b);ko(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,y),h.return=p,p=h):(n(p,h),h=al(y,p.mode,b),h.return=p,p=h),s(p)):n(p,h)}return S}var Br=qh(!0),Jh=qh(!1),ro={},tn=Kn(ro),Ui=Kn(ro),Bi=Kn(ro);function tr(e){if(e===ro)throw Error(A(174));return e}function mc(e,t){switch(Ee(Bi,t),Ee(Ui,e),Ee(tn,ro),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Wl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Wl(t,e)}_e(tn),Ee(tn,t)}function Hr(){_e(tn),_e(Ui),_e(Bi)}function Zh(e){tr(Bi.current);var t=tr(tn.current),n=Wl(t,e.type);t!==n&&(Ee(Ui,e),Ee(tn,n))}function gc(e){Ui.current===e&&(_e(tn),_e(Ui))}var Te=Kn(0);function Os(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var tl=[];function vc(){for(var e=0;e<tl.length;e++)tl[e]._workInProgressVersionPrimary=null;tl.length=0}var Ko=yn.ReactCurrentDispatcher,nl=yn.ReactCurrentBatchConfig,lr=0,Me=null,Ue=null,We=null,_s=!1,Oi=!1,Hi=0,$0=0;function et(){throw Error(A(321))}function yc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ht(e[n],t[n]))return!1;return!0}function xc(e,t,n,r,i,o){if(lr=o,Me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ko.current=e===null||e.memoizedState===null?W0:Q0,e=n(r,i),Oi){o=0;do{if(Oi=!1,Hi=0,25<=o)throw Error(A(301));o+=1,We=Ue=null,t.updateQueue=null,Ko.current=Y0,e=n(r,i)}while(Oi)}if(Ko.current=Ps,t=Ue!==null&&Ue.next!==null,lr=0,We=Ue=Me=null,_s=!1,t)throw Error(A(300));return e}function wc(){var e=Hi!==0;return Hi=0,e}function Yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Me.memoizedState=We=e:We=We.next=e,We}function Rt(){if(Ue===null){var e=Me.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var t=We===null?Me.memoizedState:We.next;if(t!==null)We=t,Ue=e;else{if(e===null)throw Error(A(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},We===null?Me.memoizedState=We=e:We=We.next=e}return We}function Wi(e,t){return typeof t=="function"?t(e):t}function rl(e){var t=Rt(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=Ue,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,a=null,u=o;do{var f=u.lane;if((lr&f)===f)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,s=r):a=a.next=d,Me.lanes|=f,ur|=f}u=u.next}while(u!==null&&u!==o);a===null?s=r:a.next=l,Ht(r,t.memoizedState)||(dt=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Me.lanes|=o,ur|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function il(e){var t=Rt(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Ht(o,t.memoizedState)||(dt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function em(){}function tm(e,t){var n=Me,r=Rt(),i=t(),o=!Ht(r.memoizedState,i);if(o&&(r.memoizedState=i,dt=!0),r=r.queue,bc(im.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,Qi(9,rm.bind(null,n,r,i,t),void 0,null),Qe===null)throw Error(A(349));lr&30||nm(n,t,i)}return i}function nm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Me.updateQueue,t===null?(t={lastEffect:null,stores:null},Me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function rm(e,t,n,r){t.value=n,t.getSnapshot=r,om(t)&&sm(e)}function im(e,t,n){return n(function(){om(t)&&sm(e)})}function om(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ht(e,n)}catch{return!0}}function sm(e){var t=gn(e,1);t!==null&&Ut(t,e,1,-1)}function tf(e){var t=Yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:e},t.queue=e,e=e.dispatch=H0.bind(null,Me,e),[t.memoizedState,e]}function Qi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Me.updateQueue,t===null?(t={lastEffect:null,stores:null},Me.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function am(){return Rt().memoizedState}function Go(e,t,n,r){var i=Yt();Me.flags|=e,i.memoizedState=Qi(1|t,n,void 0,r===void 0?null:r)}function sa(e,t,n,r){var i=Rt();r=r===void 0?null:r;var o=void 0;if(Ue!==null){var s=Ue.memoizedState;if(o=s.destroy,r!==null&&yc(r,s.deps)){i.memoizedState=Qi(t,n,o,r);return}}Me.flags|=e,i.memoizedState=Qi(1|t,n,o,r)}function nf(e,t){return Go(8390656,8,e,t)}function bc(e,t){return sa(2048,8,e,t)}function lm(e,t){return sa(4,2,e,t)}function um(e,t){return sa(4,4,e,t)}function cm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function dm(e,t,n){return n=n!=null?n.concat([e]):null,sa(4,4,cm.bind(null,t,e),n)}function Sc(){}function fm(e,t){var n=Rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function pm(e,t){var n=Rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function hm(e,t,n){return lr&21?(Ht(n,t)||(n=vh(),Me.lanes|=n,ur|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,dt=!0),e.memoizedState=n)}function U0(e,t){var n=ye;ye=n!==0&&4>n?n:4,e(!0);var r=nl.transition;nl.transition={};try{e(!1),t()}finally{ye=n,nl.transition=r}}function mm(){return Rt().memoizedState}function B0(e,t,n){var r=Bn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gm(e))vm(t,n);else if(n=Yh(e,t,n,r),n!==null){var i=at();Ut(n,e,r,i),ym(n,t,r)}}function H0(e,t,n){var r=Bn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gm(e))vm(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,Ht(l,s)){var a=t.interleaved;a===null?(i.next=i,pc(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=Yh(e,t,i,r),n!==null&&(i=at(),Ut(n,e,r,i),ym(n,t,r))}}function gm(e){var t=e.alternate;return e===Me||t!==null&&t===Me}function vm(e,t){Oi=_s=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ym(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zu(e,n)}}var Ps={readContext:Mt,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},W0={readContext:Mt,useCallback:function(e,t){return Yt().memoizedState=[e,t===void 0?null:t],e},useContext:Mt,useEffect:nf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Go(4194308,4,cm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Go(4194308,4,e,t)},useInsertionEffect:function(e,t){return Go(4,2,e,t)},useMemo:function(e,t){var n=Yt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Yt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=B0.bind(null,Me,e),[r.memoizedState,e]},useRef:function(e){var t=Yt();return e={current:e},t.memoizedState=e},useState:tf,useDebugValue:Sc,useDeferredValue:function(e){return Yt().memoizedState=e},useTransition:function(){var e=tf(!1),t=e[0];return e=U0.bind(null,e[1]),Yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Me,i=Yt();if(Pe){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),Qe===null)throw Error(A(349));lr&30||nm(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,nf(im.bind(null,r,o,e),[e]),r.flags|=2048,Qi(9,rm.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Yt(),t=Qe.identifierPrefix;if(Pe){var n=cn,r=un;n=(r&~(1<<32-$t(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Hi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=$0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Q0={readContext:Mt,useCallback:fm,useContext:Mt,useEffect:bc,useImperativeHandle:dm,useInsertionEffect:lm,useLayoutEffect:um,useMemo:pm,useReducer:rl,useRef:am,useState:function(){return rl(Wi)},useDebugValue:Sc,useDeferredValue:function(e){var t=Rt();return hm(t,Ue.memoizedState,e)},useTransition:function(){var e=rl(Wi)[0],t=Rt().memoizedState;return[e,t]},useMutableSource:em,useSyncExternalStore:tm,useId:mm,unstable_isNewReconciler:!1},Y0={readContext:Mt,useCallback:fm,useContext:Mt,useEffect:bc,useImperativeHandle:dm,useInsertionEffect:lm,useLayoutEffect:um,useMemo:pm,useReducer:il,useRef:am,useState:function(){return il(Wi)},useDebugValue:Sc,useDeferredValue:function(e){var t=Rt();return Ue===null?t.memoizedState=e:hm(t,Ue.memoizedState,e)},useTransition:function(){var e=il(Wi)[0],t=Rt().memoizedState;return[e,t]},useMutableSource:em,useSyncExternalStore:tm,useId:mm,unstable_isNewReconciler:!1};function Wr(e,t){try{var n="",r=t;do n+=by(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ol(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function hu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var K0=typeof WeakMap=="function"?WeakMap:Map;function xm(e,t,n){n=dn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ms||(Ms=!0,Cu=r),hu(e,t)},n}function wm(e,t,n){n=dn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){hu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){hu(e,t),typeof r!="function"&&(Un===null?Un=new Set([this]):Un.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function rf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new K0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=lx.bind(null,e,t,n),t.then(e,e))}function of(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function sf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=dn(-1,1),t.tag=2,$n(n,t,1))),n.lanes|=1),e)}var G0=yn.ReactCurrentOwner,dt=!1;function ot(e,t,n,r){t.child=e===null?Jh(t,null,n,r):Br(t,e.child,n,r)}function af(e,t,n,r,i){n=n.render;var o=t.ref;return Fr(t,i),r=xc(e,t,n,r,o,i),n=wc(),e!==null&&!dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,vn(e,t,i)):(Pe&&n&&ac(t),t.flags|=1,ot(e,t,r,i),t.child)}function lf(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Tc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,bm(e,t,o,r,i)):(e=Zo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ni,n(s,r)&&e.ref===t.ref)return vn(e,t,i)}return t.flags|=1,e=Hn(o,r),e.ref=t.ref,e.return=t,t.child=e}function bm(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ni(o,r)&&e.ref===t.ref)if(dt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(dt=!0);else return t.lanes=e.lanes,vn(e,t,i)}return mu(e,t,n,r,i)}function Sm(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(Mr,vt),vt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ee(Mr,vt),vt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Ee(Mr,vt),vt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ee(Mr,vt),vt|=r;return ot(e,t,i,n),t.child}function km(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function mu(e,t,n,r,i){var o=pt(n)?sr:it.current;return o=$r(t,o),Fr(t,i),n=xc(e,t,n,r,o,i),r=wc(),e!==null&&!dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,vn(e,t,i)):(Pe&&r&&ac(t),t.flags|=1,ot(e,t,n,i),t.child)}function uf(e,t,n,r,i){if(pt(n)){var o=!0;bs(t)}else o=!1;if(Fr(t,i),t.stateNode===null)Xo(e,t),Xh(t,n,r),pu(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var a=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Mt(u):(u=pt(n)?sr:it.current,u=$r(t,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Zd(t,s,r,u),Mn=!1;var m=t.memoizedState;s.state=m,js(t,r,s,i),a=t.memoizedState,l!==r||m!==a||ft.current||Mn?(typeof f=="function"&&(fu(t,n,f,r),a=t.memoizedState),(l=Mn||Jd(t,n,l,r,m,a,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),s.props=r,s.state=a,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Kh(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:At(t.type,l),s.props=u,d=t.pendingProps,m=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=Mt(a):(a=pt(n)?sr:it.current,a=$r(t,a));var x=n.getDerivedStateFromProps;(f=typeof x=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==d||m!==a)&&Zd(t,s,r,a),Mn=!1,m=t.memoizedState,s.state=m,js(t,r,s,i);var g=t.memoizedState;l!==d||m!==g||ft.current||Mn?(typeof x=="function"&&(fu(t,n,x,r),g=t.memoizedState),(u=Mn||Jd(t,n,u,r,m,g,a)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,g,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,g,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),s.props=r,s.state=g,s.context=a,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return gu(e,t,n,r,o,i)}function gu(e,t,n,r,i,o){km(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Yd(t,n,!1),vn(e,t,o);r=t.stateNode,G0.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Br(t,e.child,null,o),t.child=Br(t,null,l,o)):ot(e,t,l,o),t.memoizedState=r.state,i&&Yd(t,n,!0),t.child}function Cm(e){var t=e.stateNode;t.pendingContext?Qd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Qd(e,t.context,!1),mc(e,t.containerInfo)}function cf(e,t,n,r,i){return Ur(),uc(i),t.flags|=256,ot(e,t,n,r),t.child}var vu={dehydrated:null,treeContext:null,retryLane:0};function yu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Em(e,t,n){var r=t.pendingProps,i=Te.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ee(Te,i&1),e===null)return cu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=ua(s,r,0,null),e=or(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=yu(n),t.memoizedState=vu,e):kc(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return X0(e,t,s,r,l,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Hn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Hn(l,o):(o=or(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?yu(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=vu,r}return o=e.child,e=o.sibling,r=Hn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function kc(e,t){return t=ua({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Co(e,t,n,r){return r!==null&&uc(r),Br(t,e.child,null,n),e=kc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function X0(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=ol(Error(A(422))),Co(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ua({mode:"visible",children:r.children},i,0,null),o=or(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Br(t,e.child,null,s),t.child.memoizedState=yu(s),t.memoizedState=vu,o);if(!(t.mode&1))return Co(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(A(419)),r=ol(o,r,void 0),Co(e,t,s,r)}if(l=(s&e.childLanes)!==0,dt||l){if(r=Qe,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,gn(e,i),Ut(r,e,i,-1))}return Pc(),r=ol(Error(A(421))),Co(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=ux.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,yt=zn(i.nextSibling),xt=t,Pe=!0,Vt=null,e!==null&&(jt[Ot++]=un,jt[Ot++]=cn,jt[Ot++]=ar,un=e.id,cn=e.overflow,ar=t),t=kc(t,r.children),t.flags|=4096,t)}function df(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),du(e.return,t,n)}function sl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function jm(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ot(e,t,r.children,n),r=Te.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&df(e,n,t);else if(e.tag===19)df(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ee(Te,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Os(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),sl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Os(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}sl(t,!0,n,null,o);break;case"together":sl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function vn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ur|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=Hn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Hn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function q0(e,t,n){switch(t.tag){case 3:Cm(t),Ur();break;case 5:Zh(t);break;case 1:pt(t.type)&&bs(t);break;case 4:mc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ee(Cs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ee(Te,Te.current&1),t.flags|=128,null):n&t.child.childLanes?Em(e,t,n):(Ee(Te,Te.current&1),e=vn(e,t,n),e!==null?e.sibling:null);Ee(Te,Te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return jm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ee(Te,Te.current),r)break;return null;case 22:case 23:return t.lanes=0,Sm(e,t,n)}return vn(e,t,n)}var Om,xu,_m,Pm;Om=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xu=function(){};_m=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,tr(tn.current);var o=null;switch(n){case"input":i=$l(e,i),r=$l(e,r),o=[];break;case"select":i=Re({},i,{value:void 0}),r=Re({},r,{value:void 0}),o=[];break;case"textarea":i=Hl(e,i),r=Hl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=xs)}Ql(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Mi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(o||(o=[]),o.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(o=o||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Mi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&Oe("scroll",e),o||l===a||(o=[])):(o=o||[]).push(u,a))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Pm=function(e,t,n,r){n!==r&&(t.flags|=4)};function si(e,t){if(!Pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function J0(e,t,n){var r=t.pendingProps;switch(lc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(t),null;case 1:return pt(t.type)&&ws(),tt(t),null;case 3:return r=t.stateNode,Hr(),_e(ft),_e(it),vc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(So(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Vt!==null&&(Ou(Vt),Vt=null))),xu(e,t),tt(t),null;case 5:gc(t);var i=tr(Bi.current);if(n=t.type,e!==null&&t.stateNode!=null)_m(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(A(166));return tt(t),null}if(e=tr(tn.current),So(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Xt]=t,r[$i]=o,e=(t.mode&1)!==0,n){case"dialog":Oe("cancel",r),Oe("close",r);break;case"iframe":case"object":case"embed":Oe("load",r);break;case"video":case"audio":for(i=0;i<wi.length;i++)Oe(wi[i],r);break;case"source":Oe("error",r);break;case"img":case"image":case"link":Oe("error",r),Oe("load",r);break;case"details":Oe("toggle",r);break;case"input":xd(r,o),Oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Oe("invalid",r);break;case"textarea":bd(r,o),Oe("invalid",r)}Ql(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&bo(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&bo(r.textContent,l,e),i=["children",""+l]):Mi.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&Oe("scroll",r)}switch(n){case"input":po(r),wd(r,o,!0);break;case"textarea":po(r),Sd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=xs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=nh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Xt]=t,e[$i]=r,Om(e,t,!1,!1),t.stateNode=e;e:{switch(s=Yl(n,r),n){case"dialog":Oe("cancel",e),Oe("close",e),i=r;break;case"iframe":case"object":case"embed":Oe("load",e),i=r;break;case"video":case"audio":for(i=0;i<wi.length;i++)Oe(wi[i],e);i=r;break;case"source":Oe("error",e),i=r;break;case"img":case"image":case"link":Oe("error",e),Oe("load",e),i=r;break;case"details":Oe("toggle",e),i=r;break;case"input":xd(e,r),i=$l(e,r),Oe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Re({},r,{value:void 0}),Oe("invalid",e);break;case"textarea":bd(e,r),i=Hl(e,r),Oe("invalid",e);break;default:i=r}Ql(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="style"?oh(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&rh(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Ri(e,a):typeof a=="number"&&Ri(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Mi.hasOwnProperty(o)?a!=null&&o==="onScroll"&&Oe("scroll",e):a!=null&&Yu(e,o,a,s))}switch(n){case"input":po(e),wd(e,r,!1);break;case"textarea":po(e),Sd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Wn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ir(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ir(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=xs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return tt(t),null;case 6:if(e&&t.stateNode!=null)Pm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(A(166));if(n=tr(Bi.current),tr(tn.current),So(t)){if(r=t.stateNode,n=t.memoizedProps,r[Xt]=t,(o=r.nodeValue!==n)&&(e=xt,e!==null))switch(e.tag){case 3:bo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&bo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xt]=t,t.stateNode=r}return tt(t),null;case 13:if(_e(Te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Pe&&yt!==null&&t.mode&1&&!(t.flags&128))Qh(),Ur(),t.flags|=98560,o=!1;else if(o=So(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(A(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(A(317));o[Xt]=t}else Ur(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;tt(t),o=!1}else Vt!==null&&(Ou(Vt),Vt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Te.current&1?Be===0&&(Be=3):Pc())),t.updateQueue!==null&&(t.flags|=4),tt(t),null);case 4:return Hr(),xu(e,t),e===null&&Vi(t.stateNode.containerInfo),tt(t),null;case 10:return fc(t.type._context),tt(t),null;case 17:return pt(t.type)&&ws(),tt(t),null;case 19:if(_e(Te),o=t.memoizedState,o===null)return tt(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)si(o,!1);else{if(Be!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Os(e),s!==null){for(t.flags|=128,si(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ee(Te,Te.current&1|2),t.child}e=e.sibling}o.tail!==null&&De()>Qr&&(t.flags|=128,r=!0,si(o,!1),t.lanes=4194304)}else{if(!r)if(e=Os(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),si(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Pe)return tt(t),null}else 2*De()-o.renderingStartTime>Qr&&n!==1073741824&&(t.flags|=128,r=!0,si(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=De(),t.sibling=null,n=Te.current,Ee(Te,r?n&1|2:n&1),t):(tt(t),null);case 22:case 23:return _c(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?vt&1073741824&&(tt(t),t.subtreeFlags&6&&(t.flags|=8192)):tt(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function Z0(e,t){switch(lc(t),t.tag){case 1:return pt(t.type)&&ws(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Hr(),_e(ft),_e(it),vc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return gc(t),null;case 13:if(_e(Te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));Ur()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _e(Te),null;case 4:return Hr(),null;case 10:return fc(t.type._context),null;case 22:case 23:return _c(),null;case 24:return null;default:return null}}var Eo=!1,rt=!1,ex=typeof WeakSet=="function"?WeakSet:Set,W=null;function Tr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ie(e,t,r)}else n.current=null}function wu(e,t,n){try{n()}catch(r){Ie(e,t,r)}}var ff=!1;function tx(e,t){if(ru=gs,e=Ih(),sc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,a=-1,u=0,f=0,d=e,m=null;t:for(;;){for(var x;d!==n||i!==0&&d.nodeType!==3||(l=s+i),d!==o||r!==0&&d.nodeType!==3||(a=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(x=d.firstChild)!==null;)m=d,d=x;for(;;){if(d===e)break t;if(m===n&&++u===i&&(l=s),m===o&&++f===r&&(a=s),(x=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=x}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(iu={focusedElem:e,selectionRange:n},gs=!1,W=t;W!==null;)if(t=W,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,S=g.memoizedState,p=t.stateNode,h=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:At(t.type,v),S);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(b){Ie(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return g=ff,ff=!1,g}function _i(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&wu(t,n,o)}i=i.next}while(i!==r)}}function aa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function bu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Tm(e){var t=e.alternate;t!==null&&(e.alternate=null,Tm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Xt],delete t[$i],delete t[au],delete t[F0],delete t[N0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Mm(e){return e.tag===5||e.tag===3||e.tag===4}function pf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Mm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Su(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=xs));else if(r!==4&&(e=e.child,e!==null))for(Su(e,t,n),e=e.sibling;e!==null;)Su(e,t,n),e=e.sibling}function ku(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ku(e,t,n),e=e.sibling;e!==null;)ku(e,t,n),e=e.sibling}var Ge=null,Ft=!1;function wn(e,t,n){for(n=n.child;n!==null;)Rm(e,t,n),n=n.sibling}function Rm(e,t,n){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Zs,n)}catch{}switch(n.tag){case 5:rt||Tr(n,t);case 6:var r=Ge,i=Ft;Ge=null,wn(e,t,n),Ge=r,Ft=i,Ge!==null&&(Ft?(e=Ge,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ge.removeChild(n.stateNode));break;case 18:Ge!==null&&(Ft?(e=Ge,n=n.stateNode,e.nodeType===8?Za(e.parentNode,n):e.nodeType===1&&Za(e,n),Di(e)):Za(Ge,n.stateNode));break;case 4:r=Ge,i=Ft,Ge=n.stateNode.containerInfo,Ft=!0,wn(e,t,n),Ge=r,Ft=i;break;case 0:case 11:case 14:case 15:if(!rt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&wu(n,t,s),i=i.next}while(i!==r)}wn(e,t,n);break;case 1:if(!rt&&(Tr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ie(n,t,l)}wn(e,t,n);break;case 21:wn(e,t,n);break;case 22:n.mode&1?(rt=(r=rt)||n.memoizedState!==null,wn(e,t,n),rt=r):wn(e,t,n);break;default:wn(e,t,n)}}function hf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ex),t.forEach(function(r){var i=cx.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function It(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:Ge=l.stateNode,Ft=!1;break e;case 3:Ge=l.stateNode.containerInfo,Ft=!0;break e;case 4:Ge=l.stateNode.containerInfo,Ft=!0;break e}l=l.return}if(Ge===null)throw Error(A(160));Rm(o,s,i),Ge=null,Ft=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){Ie(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Im(t,e),t=t.sibling}function Im(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(It(t,e),Wt(e),r&4){try{_i(3,e,e.return),aa(3,e)}catch(v){Ie(e,e.return,v)}try{_i(5,e,e.return)}catch(v){Ie(e,e.return,v)}}break;case 1:It(t,e),Wt(e),r&512&&n!==null&&Tr(n,n.return);break;case 5:if(It(t,e),Wt(e),r&512&&n!==null&&Tr(n,n.return),e.flags&32){var i=e.stateNode;try{Ri(i,"")}catch(v){Ie(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&eh(i,o),Yl(l,s);var u=Yl(l,o);for(s=0;s<a.length;s+=2){var f=a[s],d=a[s+1];f==="style"?oh(i,d):f==="dangerouslySetInnerHTML"?rh(i,d):f==="children"?Ri(i,d):Yu(i,f,d,u)}switch(l){case"input":Ul(i,o);break;case"textarea":th(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?Ir(i,!!o.multiple,x,!1):m!==!!o.multiple&&(o.defaultValue!=null?Ir(i,!!o.multiple,o.defaultValue,!0):Ir(i,!!o.multiple,o.multiple?[]:"",!1))}i[$i]=o}catch(v){Ie(e,e.return,v)}}break;case 6:if(It(t,e),Wt(e),r&4){if(e.stateNode===null)throw Error(A(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){Ie(e,e.return,v)}}break;case 3:if(It(t,e),Wt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Di(t.containerInfo)}catch(v){Ie(e,e.return,v)}break;case 4:It(t,e),Wt(e);break;case 13:It(t,e),Wt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(jc=De())),r&4&&hf(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(rt=(u=rt)||f,It(t,e),rt=u):It(t,e),Wt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(W=e,f=e.child;f!==null;){for(d=W=f;W!==null;){switch(m=W,x=m.child,m.tag){case 0:case 11:case 14:case 15:_i(4,m,m.return);break;case 1:Tr(m,m.return);var g=m.stateNode;if(typeof g.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(v){Ie(r,n,v)}}break;case 5:Tr(m,m.return);break;case 22:if(m.memoizedState!==null){gf(d);continue}}x!==null?(x.return=m,W=x):gf(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=d.stateNode,a=d.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=ih("display",s))}catch(v){Ie(e,e.return,v)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){Ie(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:It(t,e),Wt(e),r&4&&hf(e);break;case 21:break;default:It(t,e),Wt(e)}}function Wt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Mm(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ri(i,""),r.flags&=-33);var o=pf(e);ku(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=pf(e);Su(e,l,s);break;default:throw Error(A(161))}}catch(a){Ie(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function nx(e,t,n){W=e,Lm(e)}function Lm(e,t,n){for(var r=(e.mode&1)!==0;W!==null;){var i=W,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Eo;if(!s){var l=i.alternate,a=l!==null&&l.memoizedState!==null||rt;l=Eo;var u=rt;if(Eo=s,(rt=a)&&!u)for(W=i;W!==null;)s=W,a=s.child,s.tag===22&&s.memoizedState!==null?vf(i):a!==null?(a.return=s,W=a):vf(i);for(;o!==null;)W=o,Lm(o),o=o.sibling;W=i,Eo=l,rt=u}mf(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,W=o):mf(e)}}function mf(e){for(;W!==null;){var t=W;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:rt||aa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!rt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:At(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&qd(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}qd(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Di(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}rt||t.flags&512&&bu(t)}catch(m){Ie(t,t.return,m)}}if(t===e){W=null;break}if(n=t.sibling,n!==null){n.return=t.return,W=n;break}W=t.return}}function gf(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var n=t.sibling;if(n!==null){n.return=t.return,W=n;break}W=t.return}}function vf(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{aa(4,t)}catch(a){Ie(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){Ie(t,i,a)}}var o=t.return;try{bu(t)}catch(a){Ie(t,o,a)}break;case 5:var s=t.return;try{bu(t)}catch(a){Ie(t,s,a)}}}catch(a){Ie(t,t.return,a)}if(t===e){W=null;break}var l=t.sibling;if(l!==null){l.return=t.return,W=l;break}W=t.return}}var rx=Math.ceil,Ts=yn.ReactCurrentDispatcher,Cc=yn.ReactCurrentOwner,Pt=yn.ReactCurrentBatchConfig,pe=0,Qe=null,Ve=null,qe=0,vt=0,Mr=Kn(0),Be=0,Yi=null,ur=0,la=0,Ec=0,Pi=null,ct=null,jc=0,Qr=1/0,an=null,Ms=!1,Cu=null,Un=null,jo=!1,An=null,Rs=0,Ti=0,Eu=null,qo=-1,Jo=0;function at(){return pe&6?De():qo!==-1?qo:qo=De()}function Bn(e){return e.mode&1?pe&2&&qe!==0?qe&-qe:z0.transition!==null?(Jo===0&&(Jo=vh()),Jo):(e=ye,e!==0||(e=window.event,e=e===void 0?16:Ch(e.type)),e):1}function Ut(e,t,n,r){if(50<Ti)throw Ti=0,Eu=null,Error(A(185));eo(e,n,r),(!(pe&2)||e!==Qe)&&(e===Qe&&(!(pe&2)&&(la|=n),Be===4&&In(e,qe)),ht(e,r),n===1&&pe===0&&!(t.mode&1)&&(Qr=De()+500,ia&&Gn()))}function ht(e,t){var n=e.callbackNode;zy(e,t);var r=ms(e,e===Qe?qe:0);if(r===0)n!==null&&Ed(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ed(n),t===1)e.tag===0?V0(yf.bind(null,e)):Bh(yf.bind(null,e)),A0(function(){!(pe&6)&&Gn()}),n=null;else{switch(yh(r)){case 1:n=Ju;break;case 4:n=mh;break;case 16:n=hs;break;case 536870912:n=gh;break;default:n=hs}n=Um(n,Am.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Am(e,t){if(qo=-1,Jo=0,pe&6)throw Error(A(327));var n=e.callbackNode;if(Nr()&&e.callbackNode!==n)return null;var r=ms(e,e===Qe?qe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Is(e,r);else{t=r;var i=pe;pe|=2;var o=Fm();(Qe!==e||qe!==t)&&(an=null,Qr=De()+500,ir(e,t));do try{sx();break}catch(l){Dm(e,l)}while(!0);dc(),Ts.current=o,pe=i,Ve!==null?t=0:(Qe=null,qe=0,t=Be)}if(t!==0){if(t===2&&(i=Jl(e),i!==0&&(r=i,t=ju(e,i))),t===1)throw n=Yi,ir(e,0),In(e,r),ht(e,De()),n;if(t===6)In(e,r);else{if(i=e.current.alternate,!(r&30)&&!ix(i)&&(t=Is(e,r),t===2&&(o=Jl(e),o!==0&&(r=o,t=ju(e,o))),t===1))throw n=Yi,ir(e,0),In(e,r),ht(e,De()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(A(345));case 2:Jn(e,ct,an);break;case 3:if(In(e,r),(r&130023424)===r&&(t=jc+500-De(),10<t)){if(ms(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){at(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=su(Jn.bind(null,e,ct,an),t);break}Jn(e,ct,an);break;case 4:if(In(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-$t(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*rx(r/1960))-r,10<r){e.timeoutHandle=su(Jn.bind(null,e,ct,an),r);break}Jn(e,ct,an);break;case 5:Jn(e,ct,an);break;default:throw Error(A(329))}}}return ht(e,De()),e.callbackNode===n?Am.bind(null,e):null}function ju(e,t){var n=Pi;return e.current.memoizedState.isDehydrated&&(ir(e,t).flags|=256),e=Is(e,t),e!==2&&(t=ct,ct=n,t!==null&&Ou(t)),e}function Ou(e){ct===null?ct=e:ct.push.apply(ct,e)}function ix(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ht(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function In(e,t){for(t&=~Ec,t&=~la,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-$t(t),r=1<<n;e[n]=-1,t&=~r}}function yf(e){if(pe&6)throw Error(A(327));Nr();var t=ms(e,0);if(!(t&1))return ht(e,De()),null;var n=Is(e,t);if(e.tag!==0&&n===2){var r=Jl(e);r!==0&&(t=r,n=ju(e,r))}if(n===1)throw n=Yi,ir(e,0),In(e,t),ht(e,De()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jn(e,ct,an),ht(e,De()),null}function Oc(e,t){var n=pe;pe|=1;try{return e(t)}finally{pe=n,pe===0&&(Qr=De()+500,ia&&Gn())}}function cr(e){An!==null&&An.tag===0&&!(pe&6)&&Nr();var t=pe;pe|=1;var n=Pt.transition,r=ye;try{if(Pt.transition=null,ye=1,e)return e()}finally{ye=r,Pt.transition=n,pe=t,!(pe&6)&&Gn()}}function _c(){vt=Mr.current,_e(Mr)}function ir(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,L0(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(lc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ws();break;case 3:Hr(),_e(ft),_e(it),vc();break;case 5:gc(r);break;case 4:Hr();break;case 13:_e(Te);break;case 19:_e(Te);break;case 10:fc(r.type._context);break;case 22:case 23:_c()}n=n.return}if(Qe=e,Ve=e=Hn(e.current,null),qe=vt=t,Be=0,Yi=null,Ec=la=ur=0,ct=Pi=null,er!==null){for(t=0;t<er.length;t++)if(n=er[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}er=null}return e}function Dm(e,t){do{var n=Ve;try{if(dc(),Ko.current=Ps,_s){for(var r=Me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}_s=!1}if(lr=0,We=Ue=Me=null,Oi=!1,Hi=0,Cc.current=null,n===null||n.return===null){Be=1,Yi=t,Ve=null;break}e:{var o=e,s=n.return,l=n,a=t;if(t=qe,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,f=l,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var x=of(s);if(x!==null){x.flags&=-257,sf(x,s,l,o,t),x.mode&1&&rf(o,u,t),t=x,a=u;var g=t.updateQueue;if(g===null){var v=new Set;v.add(a),t.updateQueue=v}else g.add(a);break e}else{if(!(t&1)){rf(o,u,t),Pc();break e}a=Error(A(426))}}else if(Pe&&l.mode&1){var S=of(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),sf(S,s,l,o,t),uc(Wr(a,l));break e}}o=a=Wr(a,l),Be!==4&&(Be=2),Pi===null?Pi=[o]:Pi.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=xm(o,a,t);Xd(o,p);break e;case 1:l=a;var h=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Un===null||!Un.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var b=wm(o,l,t);Xd(o,b);break e}}o=o.return}while(o!==null)}Vm(n)}catch(C){t=C,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(!0)}function Fm(){var e=Ts.current;return Ts.current=Ps,e===null?Ps:e}function Pc(){(Be===0||Be===3||Be===2)&&(Be=4),Qe===null||!(ur&268435455)&&!(la&268435455)||In(Qe,qe)}function Is(e,t){var n=pe;pe|=2;var r=Fm();(Qe!==e||qe!==t)&&(an=null,ir(e,t));do try{ox();break}catch(i){Dm(e,i)}while(!0);if(dc(),pe=n,Ts.current=r,Ve!==null)throw Error(A(261));return Qe=null,qe=0,Be}function ox(){for(;Ve!==null;)Nm(Ve)}function sx(){for(;Ve!==null&&!My();)Nm(Ve)}function Nm(e){var t=$m(e.alternate,e,vt);e.memoizedProps=e.pendingProps,t===null?Vm(e):Ve=t,Cc.current=null}function Vm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Z0(n,t),n!==null){n.flags&=32767,Ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Be=6,Ve=null;return}}else if(n=J0(n,t,vt),n!==null){Ve=n;return}if(t=t.sibling,t!==null){Ve=t;return}Ve=t=e}while(t!==null);Be===0&&(Be=5)}function Jn(e,t,n){var r=ye,i=Pt.transition;try{Pt.transition=null,ye=1,ax(e,t,n,r)}finally{Pt.transition=i,ye=r}return null}function ax(e,t,n,r){do Nr();while(An!==null);if(pe&6)throw Error(A(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if($y(e,o),e===Qe&&(Ve=Qe=null,qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||jo||(jo=!0,Um(hs,function(){return Nr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Pt.transition,Pt.transition=null;var s=ye;ye=1;var l=pe;pe|=4,Cc.current=null,tx(e,n),Im(n,e),O0(iu),gs=!!ru,iu=ru=null,e.current=n,nx(n),Ry(),pe=l,ye=s,Pt.transition=o}else e.current=n;if(jo&&(jo=!1,An=e,Rs=i),o=e.pendingLanes,o===0&&(Un=null),Ay(n.stateNode),ht(e,De()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ms)throw Ms=!1,e=Cu,Cu=null,e;return Rs&1&&e.tag!==0&&Nr(),o=e.pendingLanes,o&1?e===Eu?Ti++:(Ti=0,Eu=e):Ti=0,Gn(),null}function Nr(){if(An!==null){var e=yh(Rs),t=Pt.transition,n=ye;try{if(Pt.transition=null,ye=16>e?16:e,An===null)var r=!1;else{if(e=An,An=null,Rs=0,pe&6)throw Error(A(331));var i=pe;for(pe|=4,W=e.current;W!==null;){var o=W,s=o.child;if(W.flags&16){var l=o.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(W=u;W!==null;){var f=W;switch(f.tag){case 0:case 11:case 15:_i(8,f,o)}var d=f.child;if(d!==null)d.return=f,W=d;else for(;W!==null;){f=W;var m=f.sibling,x=f.return;if(Tm(f),f===u){W=null;break}if(m!==null){m.return=x,W=m;break}W=x}}}var g=o.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}W=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,W=s;else e:for(;W!==null;){if(o=W,o.flags&2048)switch(o.tag){case 0:case 11:case 15:_i(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,W=p;break e}W=o.return}}var h=e.current;for(W=h;W!==null;){s=W;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,W=y;else e:for(s=h;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:aa(9,l)}}catch(C){Ie(l,l.return,C)}if(l===s){W=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,W=b;break e}W=l.return}}if(pe=i,Gn(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Zs,e)}catch{}r=!0}return r}finally{ye=n,Pt.transition=t}}return!1}function xf(e,t,n){t=Wr(n,t),t=xm(e,t,1),e=$n(e,t,1),t=at(),e!==null&&(eo(e,1,t),ht(e,t))}function Ie(e,t,n){if(e.tag===3)xf(e,e,n);else for(;t!==null;){if(t.tag===3){xf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Un===null||!Un.has(r))){e=Wr(n,e),e=wm(t,e,1),t=$n(t,e,1),e=at(),t!==null&&(eo(t,1,e),ht(t,e));break}}t=t.return}}function lx(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=at(),e.pingedLanes|=e.suspendedLanes&n,Qe===e&&(qe&n)===n&&(Be===4||Be===3&&(qe&130023424)===qe&&500>De()-jc?ir(e,0):Ec|=n),ht(e,t)}function zm(e,t){t===0&&(e.mode&1?(t=go,go<<=1,!(go&130023424)&&(go=4194304)):t=1);var n=at();e=gn(e,t),e!==null&&(eo(e,t,n),ht(e,n))}function ux(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),zm(e,n)}function cx(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(t),zm(e,n)}var $m;$m=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ft.current)dt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return dt=!1,q0(e,t,n);dt=!!(e.flags&131072)}else dt=!1,Pe&&t.flags&1048576&&Hh(t,ks,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Xo(e,t),e=t.pendingProps;var i=$r(t,it.current);Fr(t,n),i=xc(null,t,r,e,i,n);var o=wc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pt(r)?(o=!0,bs(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hc(t),i.updater=oa,t.stateNode=i,i._reactInternals=t,pu(t,r,e,n),t=gu(null,t,r,!0,o,n)):(t.tag=0,Pe&&o&&ac(t),ot(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Xo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=fx(r),e=At(r,e),i){case 0:t=mu(null,t,r,e,n);break e;case 1:t=uf(null,t,r,e,n);break e;case 11:t=af(null,t,r,e,n);break e;case 14:t=lf(null,t,r,At(r.type,e),n);break e}throw Error(A(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:At(r,i),mu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:At(r,i),uf(e,t,r,i,n);case 3:e:{if(Cm(t),e===null)throw Error(A(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Kh(e,t),js(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Wr(Error(A(423)),t),t=cf(e,t,r,n,i);break e}else if(r!==i){i=Wr(Error(A(424)),t),t=cf(e,t,r,n,i);break e}else for(yt=zn(t.stateNode.containerInfo.firstChild),xt=t,Pe=!0,Vt=null,n=Jh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ur(),r===i){t=vn(e,t,n);break e}ot(e,t,r,n)}t=t.child}return t;case 5:return Zh(t),e===null&&cu(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,ou(r,i)?s=null:o!==null&&ou(r,o)&&(t.flags|=32),km(e,t),ot(e,t,s,n),t.child;case 6:return e===null&&cu(t),null;case 13:return Em(e,t,n);case 4:return mc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Br(t,null,r,n):ot(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:At(r,i),af(e,t,r,i,n);case 7:return ot(e,t,t.pendingProps,n),t.child;case 8:return ot(e,t,t.pendingProps.children,n),t.child;case 12:return ot(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,Ee(Cs,r._currentValue),r._currentValue=s,o!==null)if(Ht(o.value,s)){if(o.children===i.children&&!ft.current){t=vn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=dn(-1,n&-n),a.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?a.next=a:(a.next=f.next,f.next=a),u.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),du(o.return,n,t),l.lanes|=n;break}a=a.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(A(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),du(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ot(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Fr(t,n),i=Mt(i),r=r(i),t.flags|=1,ot(e,t,r,n),t.child;case 14:return r=t.type,i=At(r,t.pendingProps),i=At(r.type,i),lf(e,t,r,i,n);case 15:return bm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:At(r,i),Xo(e,t),t.tag=1,pt(r)?(e=!0,bs(t)):e=!1,Fr(t,n),Xh(t,r,i),pu(t,r,i,n),gu(null,t,r,!0,e,n);case 19:return jm(e,t,n);case 22:return Sm(e,t,n)}throw Error(A(156,t.tag))};function Um(e,t){return hh(e,t)}function dx(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _t(e,t,n,r){return new dx(e,t,n,r)}function Tc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fx(e){if(typeof e=="function")return Tc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Gu)return 11;if(e===Xu)return 14}return 2}function Hn(e,t){var n=e.alternate;return n===null?(n=_t(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Zo(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Tc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case br:return or(n.children,i,o,t);case Ku:s=8,i|=8;break;case Fl:return e=_t(12,n,t,i|2),e.elementType=Fl,e.lanes=o,e;case Nl:return e=_t(13,n,t,i),e.elementType=Nl,e.lanes=o,e;case Vl:return e=_t(19,n,t,i),e.elementType=Vl,e.lanes=o,e;case qp:return ua(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Gp:s=10;break e;case Xp:s=9;break e;case Gu:s=11;break e;case Xu:s=14;break e;case Tn:s=16,r=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=_t(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function or(e,t,n,r){return e=_t(7,e,r,t),e.lanes=n,e}function ua(e,t,n,r){return e=_t(22,e,r,t),e.elementType=qp,e.lanes=n,e.stateNode={isHidden:!1},e}function al(e,t,n){return e=_t(6,e,null,t),e.lanes=n,e}function ll(e,t,n){return t=_t(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function px(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ua(0),this.expirationTimes=Ua(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ua(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Mc(e,t,n,r,i,o,s,l,a){return e=new px(e,t,n,l,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=_t(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hc(o),e}function hx(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Bm(e){if(!e)return Qn;e=e._reactInternals;e:{if(pr(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(pt(n))return Uh(e,n,t)}return t}function Hm(e,t,n,r,i,o,s,l,a){return e=Mc(n,r,!0,e,i,o,s,l,a),e.context=Bm(null),n=e.current,r=at(),i=Bn(n),o=dn(r,i),o.callback=t??null,$n(n,o,i),e.current.lanes=i,eo(e,i,r),ht(e,r),e}function ca(e,t,n,r){var i=t.current,o=at(),s=Bn(i);return n=Bm(n),t.context===null?t.context=n:t.pendingContext=n,t=dn(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=$n(i,t,s),e!==null&&(Ut(e,i,s,o),Yo(e,i,s)),s}function Ls(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Rc(e,t){wf(e,t),(e=e.alternate)&&wf(e,t)}function mx(){return null}var Wm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ic(e){this._internalRoot=e}da.prototype.render=Ic.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));ca(e,t,null,null)};da.prototype.unmount=Ic.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cr(function(){ca(null,e,null,null)}),t[mn]=null}};function da(e){this._internalRoot=e}da.prototype.unstable_scheduleHydration=function(e){if(e){var t=bh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rn.length&&t!==0&&t<Rn[n].priority;n++);Rn.splice(n,0,e),n===0&&kh(e)}};function Lc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function bf(){}function gx(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Ls(s);o.call(u)}}var s=Hm(t,r,e,0,null,!1,!1,"",bf);return e._reactRootContainer=s,e[mn]=s.current,Vi(e.nodeType===8?e.parentNode:e),cr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Ls(a);l.call(u)}}var a=Mc(e,0,!1,null,null,!1,!1,"",bf);return e._reactRootContainer=a,e[mn]=a.current,Vi(e.nodeType===8?e.parentNode:e),cr(function(){ca(t,a,n,r)}),a}function pa(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var a=Ls(s);l.call(a)}}ca(t,s,e,i)}else s=gx(n,t,e,i,r);return Ls(s)}xh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=xi(t.pendingLanes);n!==0&&(Zu(t,n|1),ht(t,De()),!(pe&6)&&(Qr=De()+500,Gn()))}break;case 13:cr(function(){var r=gn(e,1);if(r!==null){var i=at();Ut(r,e,1,i)}}),Rc(e,1)}};ec=function(e){if(e.tag===13){var t=gn(e,134217728);if(t!==null){var n=at();Ut(t,e,134217728,n)}Rc(e,134217728)}};wh=function(e){if(e.tag===13){var t=Bn(e),n=gn(e,t);if(n!==null){var r=at();Ut(n,e,t,r)}Rc(e,t)}};bh=function(){return ye};Sh=function(e,t){var n=ye;try{return ye=e,t()}finally{ye=n}};Gl=function(e,t,n){switch(t){case"input":if(Ul(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ra(r);if(!i)throw Error(A(90));Zp(r),Ul(r,i)}}}break;case"textarea":th(e,n);break;case"select":t=n.value,t!=null&&Ir(e,!!n.multiple,t,!1)}};lh=Oc;uh=cr;var vx={usingClientEntryPoint:!1,Events:[no,Er,ra,sh,ah,Oc]},ai={findFiberByHostInstance:Zn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},yx={bundleType:ai.bundleType,version:ai.version,rendererPackageName:ai.rendererPackageName,rendererConfig:ai.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=fh(e),e===null?null:e.stateNode},findFiberByHostInstance:ai.findFiberByHostInstance||mx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oo.isDisabled&&Oo.supportsFiber)try{Zs=Oo.inject(yx),en=Oo}catch{}}St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vx;St.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lc(t))throw Error(A(200));return hx(e,t,null,n)};St.createRoot=function(e,t){if(!Lc(e))throw Error(A(299));var n=!1,r="",i=Wm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Mc(e,1,!1,null,null,n,!1,r,i),e[mn]=t.current,Vi(e.nodeType===8?e.parentNode:e),new Ic(t)};St.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=fh(t),e=e===null?null:e.stateNode,e};St.flushSync=function(e){return cr(e)};St.hydrate=function(e,t,n){if(!fa(t))throw Error(A(200));return pa(null,e,t,!0,n)};St.hydrateRoot=function(e,t,n){if(!Lc(e))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Wm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Hm(t,null,e,1,n??null,i,!1,o,s),e[mn]=t.current,Vi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new da(t)};St.render=function(e,t,n){if(!fa(t))throw Error(A(200));return pa(null,e,t,!1,n)};St.unmountComponentAtNode=function(e){if(!fa(e))throw Error(A(40));return e._reactRootContainer?(cr(function(){pa(null,null,e,!1,function(){e._reactRootContainer=null,e[mn]=null})}),!0):!1};St.unstable_batchedUpdates=Oc;St.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!fa(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return pa(e,t,n,!1,r)};St.version="18.2.0-next-9e3b772b8-20220608";function Qm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qm)}catch(e){console.error(e)}}Qm(),Hp.exports=St;var ha=Hp.exports;const xx=qs(ha);var Sf=ha;Al.createRoot=Sf.createRoot,Al.hydrateRoot=Sf.hydrateRoot;var Ym={exports:{}};(function(e,t){(function(r,i){e.exports=i(M)})(Kv,n=>(()=>{var r={"./node_modules/css-mediaquery/index.js":(l,a)=>{a.match=g,a.parse=v;var u=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,f=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,d=/^(?:(min|max)-)?(.+)/,m=/(em|rem|px|cm|mm|in|pt|pc)?$/,x=/(dpi|dpcm|dppx)?$/;function g(y,b){return v(y).some(function(C){var _=C.inverse,j=C.type==="all"||b.type===C.type;if(j&&_||!(j||_))return!1;var P=C.expressions.every(function(T){var I=T.feature,B=T.modifier,D=T.value,L=b[I];if(!L)return!1;switch(I){case"orientation":case"scan":return L.toLowerCase()===D.toLowerCase();case"width":case"height":case"device-width":case"device-height":D=h(D),L=h(L);break;case"resolution":D=p(D),L=p(L);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":D=S(D),L=S(L);break;case"grid":case"color":case"color-index":case"monochrome":D=parseInt(D,10)||1,L=parseInt(L,10)||0;break}switch(B){case"min":return L>=D;case"max":return L<=D;default:return L===D}});return P&&!_||!P&&_})}function v(y){return y.split(",").map(function(b){b=b.trim();var C=b.match(u),_=C[1],j=C[2],P=C[3]||"",T={};return T.inverse=!!_&&_.toLowerCase()==="not",T.type=j?j.toLowerCase():"all",P=P.match(/\([^\)]+\)/g)||[],T.expressions=P.map(function(I){var B=I.match(f),D=B[1].toLowerCase().match(d);return{modifier:D[1],feature:D[2],value:B[2]}}),T})}function S(y){var b=Number(y),C;return b||(C=y.match(/^(\d+)\s*\/\s*(\d+)$/),b=C[1]/C[2]),b}function p(y){var b=parseFloat(y),C=String(y).match(x)[1];switch(C){case"dpcm":return b/2.54;case"dppx":return b*96;default:return b}}function h(y){var b=parseFloat(y),C=String(y).match(m)[1];switch(C){case"em":return b*16;case"rem":return b*16;case"cm":return b*96/2.54;case"mm":return b*96/2.54/10;case"in":return b*96;case"pt":return b*72;case"pc":return b*72/12;default:return b}}},"./node_modules/hyphenate-style-name/index.js":(l,a,u)=>{u.r(a),u.d(a,{default:()=>v});var f=/[A-Z]/g,d=/^ms-/,m={};function x(S){return"-"+S.toLowerCase()}function g(S){if(m.hasOwnProperty(S))return m[S];var p=S.replace(f,x);return m[S]=d.test(p)?"-"+p:p}const v=g},"./node_modules/matchmediaquery/index.js":(l,a,u)=>{var f=u("./node_modules/css-mediaquery/index.js").match,d=typeof window<"u"?window.matchMedia:null;function m(g,v,S){var p=this;if(d&&!S){var h=d.call(window,g);this.matches=h.matches,this.media=h.media,h.addListener(C)}else this.matches=f(g,v),this.media=g;this.addListener=y,this.removeListener=b,this.dispose=_;function y(j){h&&h.addListener(j)}function b(j){h&&h.removeListener(j)}function C(j){p.matches=j.matches,p.media=j.media}function _(){h&&h.removeListener(C)}}function x(g,v,S){return new m(g,v,S)}l.exports=x},"./node_modules/object-assign/index.js":l=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var a=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;function d(x){if(x==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(x)}function m(){try{if(!Object.assign)return!1;var x=new String("abc");if(x[5]="de",Object.getOwnPropertyNames(x)[0]==="5")return!1;for(var g={},v=0;v<10;v++)g["_"+String.fromCharCode(v)]=v;var S=Object.getOwnPropertyNames(g).map(function(h){return g[h]});if(S.join("")!=="0123456789")return!1;var p={};return"abcdefghijklmnopqrst".split("").forEach(function(h){p[h]=h}),Object.keys(Object.assign({},p)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}l.exports=m()?Object.assign:function(x,g){for(var v,S=d(x),p,h=1;h<arguments.length;h++){v=Object(arguments[h]);for(var y in v)u.call(v,y)&&(S[y]=v[y]);if(a){p=a(v);for(var b=0;b<p.length;b++)f.call(v,p[b])&&(S[p[b]]=v[p[b]])}}return S}},"./node_modules/prop-types/checkPropTypes.js":(l,a,u)=>{var f=function(){};{var d=u("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),m={},x=u("./node_modules/prop-types/lib/has.js");f=function(v){var S="Warning: "+v;typeof console<"u"&&console.error(S);try{throw new Error(S)}catch{}}}function g(v,S,p,h,y){for(var b in v)if(x(v,b)){var C;try{if(typeof v[b]!="function"){var _=Error((h||"React class")+": "+p+" type `"+b+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof v[b]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw _.name="Invariant Violation",_}C=v[b](S,b,h,p,null,d)}catch(P){C=P}if(C&&!(C instanceof Error)&&f((h||"React class")+": type specification of "+p+" `"+b+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof C+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),C instanceof Error&&!(C.message in m)){m[C.message]=!0;var j=y?y():"";f("Failed "+p+" type: "+C.message+(j??""))}}}g.resetWarningCache=function(){m={}},l.exports=g},"./node_modules/prop-types/factoryWithTypeCheckers.js":(l,a,u)=>{var f=u("./node_modules/react-is/index.js"),d=u("./node_modules/object-assign/index.js"),m=u("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),x=u("./node_modules/prop-types/lib/has.js"),g=u("./node_modules/prop-types/checkPropTypes.js"),v=function(){};v=function(p){var h="Warning: "+p;typeof console<"u"&&console.error(h);try{throw new Error(h)}catch{}};function S(){return null}l.exports=function(p,h){var y=typeof Symbol=="function"&&Symbol.iterator,b="@@iterator";function C(F){var H=F&&(y&&F[y]||F[b]);if(typeof H=="function")return H}var _="<<anonymous>>",j={array:B("array"),bigint:B("bigint"),bool:B("boolean"),func:B("function"),number:B("number"),object:B("object"),string:B("string"),symbol:B("symbol"),any:D(),arrayOf:L,element:X(),elementType:Z(),instanceOf:ee,node:Y(),objectOf:N,oneOf:ve,oneOfType:Q,shape:ne,exact:je};function P(F,H){return F===H?F!==0||1/F===1/H:F!==F&&H!==H}function T(F,H){this.message=F,this.data=H&&typeof H=="object"?H:{},this.stack=""}T.prototype=Error.prototype;function I(F){var H={},ie=0;function oe(ae,se,le,fe,w,O,k){if(fe=fe||_,O=O||le,k!==m){if(h){var $=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw $.name="Invariant Violation",$}else if(typeof console<"u"){var z=fe+":"+le;!H[z]&&ie<3&&(v("You are manually calling a React.PropTypes validation function for the `"+O+"` prop on `"+fe+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),H[z]=!0,ie++)}}return se[le]==null?ae?se[le]===null?new T("The "+w+" `"+O+"` is marked as required "+("in `"+fe+"`, but its value is `null`.")):new T("The "+w+" `"+O+"` is marked as required in "+("`"+fe+"`, but its value is `undefined`.")):null:F(se,le,fe,w,O)}var te=oe.bind(null,!1);return te.isRequired=oe.bind(null,!0),te}function B(F){function H(ie,oe,te,ae,se,le){var fe=ie[oe],w=he(fe);if(w!==F){var O=be(fe);return new T("Invalid "+ae+" `"+se+"` of type "+("`"+O+"` supplied to `"+te+"`, expected ")+("`"+F+"`."),{expectedType:F})}return null}return I(H)}function D(){return I(S)}function L(F){function H(ie,oe,te,ae,se){if(typeof F!="function")return new T("Property `"+se+"` of component `"+te+"` has invalid PropType notation inside arrayOf.");var le=ie[oe];if(!Array.isArray(le)){var fe=he(le);return new T("Invalid "+ae+" `"+se+"` of type "+("`"+fe+"` supplied to `"+te+"`, expected an array."))}for(var w=0;w<le.length;w++){var O=F(le,w,te,ae,se+"["+w+"]",m);if(O instanceof Error)return O}return null}return I(H)}function X(){function F(H,ie,oe,te,ae){var se=H[ie];if(!p(se)){var le=he(se);return new T("Invalid "+te+" `"+ae+"` of type "+("`"+le+"` supplied to `"+oe+"`, expected a single ReactElement."))}return null}return I(F)}function Z(){function F(H,ie,oe,te,ae){var se=H[ie];if(!f.isValidElementType(se)){var le=he(se);return new T("Invalid "+te+" `"+ae+"` of type "+("`"+le+"` supplied to `"+oe+"`, expected a single ReactElement type."))}return null}return I(F)}function ee(F){function H(ie,oe,te,ae,se){if(!(ie[oe]instanceof F)){var le=F.name||_,fe=gt(ie[oe]);return new T("Invalid "+ae+" `"+se+"` of type "+("`"+fe+"` supplied to `"+te+"`, expected ")+("instance of `"+le+"`."))}return null}return I(H)}function ve(F){if(!Array.isArray(F))return arguments.length>1?v("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):v("Invalid argument supplied to oneOf, expected an array."),S;function H(ie,oe,te,ae,se){for(var le=ie[oe],fe=0;fe<F.length;fe++)if(P(le,F[fe]))return null;var w=JSON.stringify(F,function(k,$){var z=be($);return z==="symbol"?String($):$});return new T("Invalid "+ae+" `"+se+"` of value `"+String(le)+"` "+("supplied to `"+te+"`, expected one of "+w+"."))}return I(H)}function N(F){function H(ie,oe,te,ae,se){if(typeof F!="function")return new T("Property `"+se+"` of component `"+te+"` has invalid PropType notation inside objectOf.");var le=ie[oe],fe=he(le);if(fe!=="object")return new T("Invalid "+ae+" `"+se+"` of type "+("`"+fe+"` supplied to `"+te+"`, expected an object."));for(var w in le)if(x(le,w)){var O=F(le,w,te,ae,se+"."+w,m);if(O instanceof Error)return O}return null}return I(H)}function Q(F){if(!Array.isArray(F))return v("Invalid argument supplied to oneOfType, expected an instance of array."),S;for(var H=0;H<F.length;H++){var ie=F[H];if(typeof ie!="function")return v("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+Ze(ie)+" at index "+H+"."),S}function oe(te,ae,se,le,fe){for(var w=[],O=0;O<F.length;O++){var k=F[O],$=k(te,ae,se,le,fe,m);if($==null)return null;$.data&&x($.data,"expectedType")&&w.push($.data.expectedType)}var z=w.length>0?", expected one of type ["+w.join(", ")+"]":"";return new T("Invalid "+le+" `"+fe+"` supplied to "+("`"+se+"`"+z+"."))}return I(oe)}function Y(){function F(H,ie,oe,te,ae){return we(H[ie])?null:new T("Invalid "+te+" `"+ae+"` supplied to "+("`"+oe+"`, expected a ReactNode."))}return I(F)}function ce(F,H,ie,oe,te){return new T((F||"React class")+": "+H+" type `"+ie+"."+oe+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+te+"`.")}function ne(F){function H(ie,oe,te,ae,se){var le=ie[oe],fe=he(le);if(fe!=="object")return new T("Invalid "+ae+" `"+se+"` of type `"+fe+"` "+("supplied to `"+te+"`, expected `object`."));for(var w in F){var O=F[w];if(typeof O!="function")return ce(te,ae,se,w,be(O));var k=O(le,w,te,ae,se+"."+w,m);if(k)return k}return null}return I(H)}function je(F){function H(ie,oe,te,ae,se){var le=ie[oe],fe=he(le);if(fe!=="object")return new T("Invalid "+ae+" `"+se+"` of type `"+fe+"` "+("supplied to `"+te+"`, expected `object`."));var w=d({},ie[oe],F);for(var O in w){var k=F[O];if(x(F,O)&&typeof k!="function")return ce(te,ae,se,O,be(k));if(!k)return new T("Invalid "+ae+" `"+se+"` key `"+O+"` supplied to `"+te+"`.\nBad object: "+JSON.stringify(ie[oe],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(F),null,"  "));var $=k(le,O,te,ae,se+"."+O,m);if($)return $}return null}return I(H)}function we(F){switch(typeof F){case"number":case"string":case"undefined":return!0;case"boolean":return!F;case"object":if(Array.isArray(F))return F.every(we);if(F===null||p(F))return!0;var H=C(F);if(H){var ie=H.call(F),oe;if(H!==F.entries){for(;!(oe=ie.next()).done;)if(!we(oe.value))return!1}else for(;!(oe=ie.next()).done;){var te=oe.value;if(te&&!we(te[1]))return!1}}else return!1;return!0;default:return!1}}function $e(F,H){return F==="symbol"?!0:H?H["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&H instanceof Symbol:!1}function he(F){var H=typeof F;return Array.isArray(F)?"array":F instanceof RegExp?"object":$e(H,F)?"symbol":H}function be(F){if(typeof F>"u"||F===null)return""+F;var H=he(F);if(H==="object"){if(F instanceof Date)return"date";if(F instanceof RegExp)return"regexp"}return H}function Ze(F){var H=be(F);switch(H){case"array":case"object":return"an "+H;case"boolean":case"date":case"regexp":return"a "+H;default:return H}}function gt(F){return!F.constructor||!F.constructor.name?_:F.constructor.name}return j.checkPropTypes=g,j.resetWarningCache=g.resetWarningCache,j.PropTypes=j,j}},"./node_modules/prop-types/index.js":(l,a,u)=>{{var f=u("./node_modules/react-is/index.js"),d=!0;l.exports=u("./node_modules/prop-types/factoryWithTypeCheckers.js")(f.isElement,d)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":l=>{var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";l.exports=a},"./node_modules/prop-types/lib/has.js":l=>{l.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(l,a)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var u=typeof Symbol=="function"&&Symbol.for,f=u?Symbol.for("react.element"):60103,d=u?Symbol.for("react.portal"):60106,m=u?Symbol.for("react.fragment"):60107,x=u?Symbol.for("react.strict_mode"):60108,g=u?Symbol.for("react.profiler"):60114,v=u?Symbol.for("react.provider"):60109,S=u?Symbol.for("react.context"):60110,p=u?Symbol.for("react.async_mode"):60111,h=u?Symbol.for("react.concurrent_mode"):60111,y=u?Symbol.for("react.forward_ref"):60112,b=u?Symbol.for("react.suspense"):60113,C=u?Symbol.for("react.suspense_list"):60120,_=u?Symbol.for("react.memo"):60115,j=u?Symbol.for("react.lazy"):60116,P=u?Symbol.for("react.block"):60121,T=u?Symbol.for("react.fundamental"):60117,I=u?Symbol.for("react.responder"):60118,B=u?Symbol.for("react.scope"):60119;function D(k){return typeof k=="string"||typeof k=="function"||k===m||k===h||k===g||k===x||k===b||k===C||typeof k=="object"&&k!==null&&(k.$$typeof===j||k.$$typeof===_||k.$$typeof===v||k.$$typeof===S||k.$$typeof===y||k.$$typeof===T||k.$$typeof===I||k.$$typeof===B||k.$$typeof===P)}function L(k){if(typeof k=="object"&&k!==null){var $=k.$$typeof;switch($){case f:var z=k.type;switch(z){case p:case h:case m:case g:case x:case b:return z;default:var V=z&&z.$$typeof;switch(V){case S:case y:case j:case _:case v:return V;default:return $}}case d:return $}}}var X=p,Z=h,ee=S,ve=v,N=f,Q=y,Y=m,ce=j,ne=_,je=d,we=g,$e=x,he=b,be=!1;function Ze(k){return be||(be=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),gt(k)||L(k)===p}function gt(k){return L(k)===h}function F(k){return L(k)===S}function H(k){return L(k)===v}function ie(k){return typeof k=="object"&&k!==null&&k.$$typeof===f}function oe(k){return L(k)===y}function te(k){return L(k)===m}function ae(k){return L(k)===j}function se(k){return L(k)===_}function le(k){return L(k)===d}function fe(k){return L(k)===g}function w(k){return L(k)===x}function O(k){return L(k)===b}a.AsyncMode=X,a.ConcurrentMode=Z,a.ContextConsumer=ee,a.ContextProvider=ve,a.Element=N,a.ForwardRef=Q,a.Fragment=Y,a.Lazy=ce,a.Memo=ne,a.Portal=je,a.Profiler=we,a.StrictMode=$e,a.Suspense=he,a.isAsyncMode=Ze,a.isConcurrentMode=gt,a.isContextConsumer=F,a.isContextProvider=H,a.isElement=ie,a.isForwardRef=oe,a.isFragment=te,a.isLazy=ae,a.isMemo=se,a.isPortal=le,a.isProfiler=fe,a.isStrictMode=w,a.isSuspense=O,a.isValidElementType=D,a.typeOf=L})()},"./node_modules/react-is/index.js":(l,a,u)=>{l.exports=u("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(l,a,u)=>{u.r(a),u.d(a,{shallowEqualArrays:()=>d,shallowEqualObjects:()=>f});function f(m,x){if(m===x)return!0;if(!m||!x)return!1;var g=Object.keys(m),v=Object.keys(x),S=g.length;if(v.length!==S)return!1;for(var p=0;p<S;p++){var h=g[p];if(m[h]!==x[h]||!Object.prototype.hasOwnProperty.call(x,h))return!1}return!0}function d(m,x){if(m===x)return!0;if(!m||!x)return!1;var g=m.length;if(x.length!==g)return!1;for(var v=0;v<g;v++)if(m[v]!==x[v])return!1;return!0}},"./src/Component.ts":function(l,a,u){var f=this&&this.__rest||function(g,v){var S={};for(var p in g)Object.prototype.hasOwnProperty.call(g,p)&&v.indexOf(p)<0&&(S[p]=g[p]);if(g!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,p=Object.getOwnPropertySymbols(g);h<p.length;h++)v.indexOf(p[h])<0&&Object.prototype.propertyIsEnumerable.call(g,p[h])&&(S[p[h]]=g[p[h]]);return S},d=this&&this.__importDefault||function(g){return g&&g.__esModule?g:{default:g}};Object.defineProperty(a,"__esModule",{value:!0});var m=d(u("./src/useMediaQuery.ts")),x=function(g){var v=g.children,S=g.device,p=g.onChange,h=f(g,["children","device","onChange"]),y=(0,m.default)(h,S,p);return typeof v=="function"?v(y):y?v:null};a.default=x},"./src/Context.ts":(l,a,u)=>{Object.defineProperty(a,"__esModule",{value:!0});var f=u("react"),d=(0,f.createContext)(void 0);a.default=d},"./src/index.ts":function(l,a,u){var f=this&&this.__importDefault||function(v){return v&&v.__esModule?v:{default:v}};Object.defineProperty(a,"__esModule",{value:!0}),a.Context=a.toQuery=a.useMediaQuery=a.default=void 0;var d=f(u("./src/useMediaQuery.ts"));a.useMediaQuery=d.default;var m=f(u("./src/Component.ts"));a.default=m.default;var x=f(u("./src/toQuery.ts"));a.toQuery=x.default;var g=f(u("./src/Context.ts"));a.Context=g.default},"./src/mediaQuery.ts":function(l,a,u){var f=this&&this.__assign||function(){return f=Object.assign||function(b){for(var C,_=1,j=arguments.length;_<j;_++){C=arguments[_];for(var P in C)Object.prototype.hasOwnProperty.call(C,P)&&(b[P]=C[P])}return b},f.apply(this,arguments)},d=this&&this.__rest||function(b,C){var _={};for(var j in b)Object.prototype.hasOwnProperty.call(b,j)&&C.indexOf(j)<0&&(_[j]=b[j]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var P=0,j=Object.getOwnPropertySymbols(b);P<j.length;P++)C.indexOf(j[P])<0&&Object.prototype.propertyIsEnumerable.call(b,j[P])&&(_[j[P]]=b[j[P]]);return _},m=this&&this.__importDefault||function(b){return b&&b.__esModule?b:{default:b}};Object.defineProperty(a,"__esModule",{value:!0});var x=m(u("./node_modules/prop-types/index.js")),g=x.default.oneOfType([x.default.string,x.default.number]),v={all:x.default.bool,grid:x.default.bool,aural:x.default.bool,braille:x.default.bool,handheld:x.default.bool,print:x.default.bool,projection:x.default.bool,screen:x.default.bool,tty:x.default.bool,tv:x.default.bool,embossed:x.default.bool},S={orientation:x.default.oneOf(["portrait","landscape"]),scan:x.default.oneOf(["progressive","interlace"]),aspectRatio:x.default.string,deviceAspectRatio:x.default.string,height:g,deviceHeight:g,width:g,deviceWidth:g,color:x.default.bool,colorIndex:x.default.bool,monochrome:x.default.bool,resolution:g,type:Object.keys(v)};S.type;var p=d(S,["type"]),h=f({minAspectRatio:x.default.string,maxAspectRatio:x.default.string,minDeviceAspectRatio:x.default.string,maxDeviceAspectRatio:x.default.string,minHeight:g,maxHeight:g,minDeviceHeight:g,maxDeviceHeight:g,minWidth:g,maxWidth:g,minDeviceWidth:g,maxDeviceWidth:g,minColor:x.default.number,maxColor:x.default.number,minColorIndex:x.default.number,maxColorIndex:x.default.number,minMonochrome:x.default.number,maxMonochrome:x.default.number,minResolution:g,maxResolution:g},p),y=f(f({},v),h);a.default={all:y,types:v,matchers:S,features:h}},"./src/toQuery.ts":function(l,a,u){var f=this&&this.__importDefault||function(p){return p&&p.__esModule?p:{default:p}};Object.defineProperty(a,"__esModule",{value:!0});var d=f(u("./node_modules/hyphenate-style-name/index.js")),m=f(u("./src/mediaQuery.ts")),x=function(p){return"not ".concat(p)},g=function(p,h){var y=(0,d.default)(p);return typeof h=="number"&&(h="".concat(h,"px")),h===!0?y:h===!1?x(y):"(".concat(y,": ").concat(h,")")},v=function(p){return p.join(" and ")},S=function(p){var h=[];return Object.keys(m.default.all).forEach(function(y){var b=p[y];b!=null&&h.push(g(y,b))}),v(h)};a.default=S},"./src/useMediaQuery.ts":function(l,a,u){var f=this&&this.__importDefault||function(T){return T&&T.__esModule?T:{default:T}};Object.defineProperty(a,"__esModule",{value:!0});var d=u("react"),m=f(u("./node_modules/matchmediaquery/index.js")),x=f(u("./node_modules/hyphenate-style-name/index.js")),g=u("./node_modules/shallow-equal/dist/index.esm.js"),v=f(u("./src/toQuery.ts")),S=f(u("./src/Context.ts")),p=function(T){return T.query||(0,v.default)(T)},h=function(T){if(T){var I=Object.keys(T);return I.reduce(function(B,D){return B[(0,x.default)(D)]=T[D],B},{})}},y=function(){var T=(0,d.useRef)(!1);return(0,d.useEffect)(function(){T.current=!0},[]),T.current},b=function(T){var I=(0,d.useContext)(S.default),B=function(){return h(T)||h(I)},D=(0,d.useState)(B),L=D[0],X=D[1];return(0,d.useEffect)(function(){var Z=B();(0,g.shallowEqualObjects)(L,Z)||X(Z)},[T,I]),L},C=function(T){var I=function(){return p(T)},B=(0,d.useState)(I),D=B[0],L=B[1];return(0,d.useEffect)(function(){var X=I();D!==X&&L(X)},[T]),D},_=function(T,I){var B=function(){return(0,m.default)(T,I||{},!!I)},D=(0,d.useState)(B),L=D[0],X=D[1],Z=y();return(0,d.useEffect)(function(){if(Z){var ee=B();return X(ee),function(){ee&&ee.dispose()}}},[T,I]),L},j=function(T){var I=(0,d.useState)(T.matches),B=I[0],D=I[1];return(0,d.useEffect)(function(){var L=function(X){D(X.matches)};return T.addListener(L),D(T.matches),function(){T.removeListener(L)}},[T]),B},P=function(T,I,B){var D=b(I),L=C(T);if(!L)throw new Error("Invalid or missing MediaQuery!");var X=_(L,D),Z=j(X),ee=y();return(0,d.useEffect)(function(){ee&&B&&B(Z)},[Z]),(0,d.useEffect)(function(){return function(){X&&X.dispose()}},[]),Z};a.default=P},react:l=>{l.exports=n}},i={};function o(l){var a=i[l];if(a!==void 0)return a.exports;var u=i[l]={exports:{}};return r[l].call(u.exports,u,u.exports,o),u.exports}o.d=(l,a)=>{for(var u in a)o.o(a,u)&&!o.o(l,u)&&Object.defineProperty(l,u,{enumerable:!0,get:a[u]})},o.o=(l,a)=>Object.prototype.hasOwnProperty.call(l,a),o.r=l=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})};var s=o("./src/index.ts");return s})())})(Ym);var nr=Ym.exports;const As=qs(nr),wx="/healthy-management-project/assets/olga_picture1x-48yp0Cvc.webp",bx="/healthy-management-project/assets/olga_picture@2x-dFelWgxd.jpg",Sx="/healthy-management-project/assets/olga_picture1x-ohcXIDw6.jpg",kx="/healthy-management-project/assets/mob_olga_picture@2x-jz3O2U-O.jpg",Cx="/healthy-management-project/assets/mob_olga_picture1x-PQXysebb.jpg",Ex="/healthy-management-project/assets/mob_olga_picture1x-YL2VUwPK.webp",re="/healthy-management-project/assets/sprite-gBYbMuxV.svg";function q(){return q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q.apply(this,arguments)}function Km(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var jx=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Ox=Km(function(e){return jx.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function _x(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Px(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Tx=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Px(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=_x(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),nt="-ms-",Ds="-moz-",me="-webkit-",Gm="comm",Ac="rule",Dc="decl",Mx="@import",Xm="@keyframes",Rx="@layer",Ix=Math.abs,ma=String.fromCharCode,Lx=Object.assign;function Ax(e,t){return Xe(e,0)^45?(((t<<2^Xe(e,0))<<2^Xe(e,1))<<2^Xe(e,2))<<2^Xe(e,3):0}function qm(e){return e.trim()}function Dx(e,t){return(e=t.exec(e))?e[0]:e}function ge(e,t,n){return e.replace(t,n)}function _u(e,t){return e.indexOf(t)}function Xe(e,t){return e.charCodeAt(t)|0}function Ki(e,t,n){return e.slice(t,n)}function Kt(e){return e.length}function Fc(e){return e.length}function _o(e,t){return t.push(e),e}function Fx(e,t){return e.map(t).join("")}var ga=1,Yr=1,Jm=0,mt=0,Ne=0,Jr="";function va(e,t,n,r,i,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:ga,column:Yr,length:s,return:""}}function li(e,t){return Lx(va("",null,null,"",null,null,0),e,{length:-e.length},t)}function Nx(){return Ne}function Vx(){return Ne=mt>0?Xe(Jr,--mt):0,Yr--,Ne===10&&(Yr=1,ga--),Ne}function wt(){return Ne=mt<Jm?Xe(Jr,mt++):0,Yr++,Ne===10&&(Yr=1,ga++),Ne}function nn(){return Xe(Jr,mt)}function es(){return mt}function io(e,t){return Ki(Jr,e,t)}function Gi(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Zm(e){return ga=Yr=1,Jm=Kt(Jr=e),mt=0,[]}function eg(e){return Jr="",e}function ts(e){return qm(io(mt-1,Pu(e===91?e+2:e===40?e+1:e)))}function zx(e){for(;(Ne=nn())&&Ne<33;)wt();return Gi(e)>2||Gi(Ne)>3?"":" "}function $x(e,t){for(;--t&&wt()&&!(Ne<48||Ne>102||Ne>57&&Ne<65||Ne>70&&Ne<97););return io(e,es()+(t<6&&nn()==32&&wt()==32))}function Pu(e){for(;wt();)switch(Ne){case e:return mt;case 34:case 39:e!==34&&e!==39&&Pu(Ne);break;case 40:e===41&&Pu(e);break;case 92:wt();break}return mt}function Ux(e,t){for(;wt()&&e+Ne!==57;)if(e+Ne===84&&nn()===47)break;return"/*"+io(t,mt-1)+"*"+ma(e===47?e:wt())}function Bx(e){for(;!Gi(nn());)wt();return io(e,mt)}function Hx(e){return eg(ns("",null,null,null,[""],e=Zm(e),0,[0],e))}function ns(e,t,n,r,i,o,s,l,a){for(var u=0,f=0,d=s,m=0,x=0,g=0,v=1,S=1,p=1,h=0,y="",b=i,C=o,_=r,j=y;S;)switch(g=h,h=wt()){case 40:if(g!=108&&Xe(j,d-1)==58){_u(j+=ge(ts(h),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:j+=ts(h);break;case 9:case 10:case 13:case 32:j+=zx(g);break;case 92:j+=$x(es()-1,7);continue;case 47:switch(nn()){case 42:case 47:_o(Wx(Ux(wt(),es()),t,n),a);break;default:j+="/"}break;case 123*v:l[u++]=Kt(j)*p;case 125*v:case 59:case 0:switch(h){case 0:case 125:S=0;case 59+f:p==-1&&(j=ge(j,/\f/g,"")),x>0&&Kt(j)-d&&_o(x>32?Cf(j+";",r,n,d-1):Cf(ge(j," ","")+";",r,n,d-2),a);break;case 59:j+=";";default:if(_o(_=kf(j,t,n,u,f,i,l,y,b=[],C=[],d),o),h===123)if(f===0)ns(j,t,_,_,b,o,d,l,C);else switch(m===99&&Xe(j,3)===110?100:m){case 100:case 108:case 109:case 115:ns(e,_,_,r&&_o(kf(e,_,_,0,0,i,l,y,i,b=[],d),C),i,C,d,l,r?b:C);break;default:ns(j,_,_,_,[""],C,0,l,C)}}u=f=x=0,v=p=1,y=j="",d=s;break;case 58:d=1+Kt(j),x=g;default:if(v<1){if(h==123)--v;else if(h==125&&v++==0&&Vx()==125)continue}switch(j+=ma(h),h*v){case 38:p=f>0?1:(j+="\f",-1);break;case 44:l[u++]=(Kt(j)-1)*p,p=1;break;case 64:nn()===45&&(j+=ts(wt())),m=nn(),f=d=Kt(y=j+=Bx(es())),h++;break;case 45:g===45&&Kt(j)==2&&(v=0)}}return o}function kf(e,t,n,r,i,o,s,l,a,u,f){for(var d=i-1,m=i===0?o:[""],x=Fc(m),g=0,v=0,S=0;g<r;++g)for(var p=0,h=Ki(e,d+1,d=Ix(v=s[g])),y=e;p<x;++p)(y=qm(v>0?m[p]+" "+h:ge(h,/&\f/g,m[p])))&&(a[S++]=y);return va(e,t,n,i===0?Ac:l,a,u,f)}function Wx(e,t,n){return va(e,t,n,Gm,ma(Nx()),Ki(e,2,-2),0)}function Cf(e,t,n,r){return va(e,t,n,Dc,Ki(e,0,r),Ki(e,r+1,-1),r)}function Vr(e,t){for(var n="",r=Fc(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function Qx(e,t,n,r){switch(e.type){case Rx:if(e.children.length)break;case Mx:case Dc:return e.return=e.return||e.value;case Gm:return"";case Xm:return e.return=e.value+"{"+Vr(e.children,r)+"}";case Ac:e.value=e.props.join(",")}return Kt(n=Vr(e.children,r))?e.return=e.value+"{"+n+"}":""}function Yx(e){var t=Fc(e);return function(n,r,i,o){for(var s="",l=0;l<t;l++)s+=e[l](n,r,i,o)||"";return s}}function Kx(e){return function(t){t.root||(t=t.return)&&e(t)}}var Gx=function(t,n,r){for(var i=0,o=0;i=o,o=nn(),i===38&&o===12&&(n[r]=1),!Gi(o);)wt();return io(t,mt)},Xx=function(t,n){var r=-1,i=44;do switch(Gi(i)){case 0:i===38&&nn()===12&&(n[r]=1),t[r]+=Gx(mt-1,n,r);break;case 2:t[r]+=ts(i);break;case 4:if(i===44){t[++r]=nn()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=ma(i)}while(i=wt());return t},qx=function(t,n){return eg(Xx(Zm(t),n))},Ef=new WeakMap,Jx=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Ef.get(r))&&!i){Ef.set(t,!0);for(var o=[],s=qx(n,o),l=r.props,a=0,u=0;a<s.length;a++)for(var f=0;f<l.length;f++,u++)t.props[u]=o[a]?s[a].replace(/&\f/g,l[f]):l[f]+" "+s[a]}}},Zx=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function tg(e,t){switch(Ax(e,t)){case 5103:return me+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return me+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return me+e+Ds+e+nt+e+e;case 6828:case 4268:return me+e+nt+e+e;case 6165:return me+e+nt+"flex-"+e+e;case 5187:return me+e+ge(e,/(\w+).+(:[^]+)/,me+"box-$1$2"+nt+"flex-$1$2")+e;case 5443:return me+e+nt+"flex-item-"+ge(e,/flex-|-self/,"")+e;case 4675:return me+e+nt+"flex-line-pack"+ge(e,/align-content|flex-|-self/,"")+e;case 5548:return me+e+nt+ge(e,"shrink","negative")+e;case 5292:return me+e+nt+ge(e,"basis","preferred-size")+e;case 6060:return me+"box-"+ge(e,"-grow","")+me+e+nt+ge(e,"grow","positive")+e;case 4554:return me+ge(e,/([^-])(transform)/g,"$1"+me+"$2")+e;case 6187:return ge(ge(ge(e,/(zoom-|grab)/,me+"$1"),/(image-set)/,me+"$1"),e,"")+e;case 5495:case 3959:return ge(e,/(image-set\([^]*)/,me+"$1$`$1");case 4968:return ge(ge(e,/(.+:)(flex-)?(.*)/,me+"box-pack:$3"+nt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+me+e+e;case 4095:case 3583:case 4068:case 2532:return ge(e,/(.+)-inline(.+)/,me+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Kt(e)-1-t>6)switch(Xe(e,t+1)){case 109:if(Xe(e,t+4)!==45)break;case 102:return ge(e,/(.+:)(.+)-([^]+)/,"$1"+me+"$2-$3$1"+Ds+(Xe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~_u(e,"stretch")?tg(ge(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Xe(e,t+1)!==115)break;case 6444:switch(Xe(e,Kt(e)-3-(~_u(e,"!important")&&10))){case 107:return ge(e,":",":"+me)+e;case 101:return ge(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+me+(Xe(e,14)===45?"inline-":"")+"box$3$1"+me+"$2$3$1"+nt+"$2box$3")+e}break;case 5936:switch(Xe(e,t+11)){case 114:return me+e+nt+ge(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return me+e+nt+ge(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return me+e+nt+ge(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return me+e+nt+e+e}return e}var e1=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Dc:t.return=tg(t.value,t.length);break;case Xm:return Vr([li(t,{value:ge(t.value,"@","@"+me)})],i);case Ac:if(t.length)return Fx(t.props,function(o){switch(Dx(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Vr([li(t,{props:[ge(o,/:(read-\w+)/,":"+Ds+"$1")]})],i);case"::placeholder":return Vr([li(t,{props:[ge(o,/:(plac\w+)/,":"+me+"input-$1")]}),li(t,{props:[ge(o,/:(plac\w+)/,":"+Ds+"$1")]}),li(t,{props:[ge(o,/:(plac\w+)/,nt+"input-$1")]})],i)}return""})}},t1=[e1],n1=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var S=v.getAttribute("data-emotion");S.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=t.stylisPlugins||t1,o={},s,l=[];s=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var S=v.getAttribute("data-emotion").split(" "),p=1;p<S.length;p++)o[S[p]]=!0;l.push(v)});var a,u=[Jx,Zx];{var f,d=[Qx,Kx(function(v){f.insert(v)})],m=Yx(u.concat(i,d)),x=function(S){return Vr(Hx(S),m)};a=function(S,p,h,y){f=h,x(S?S+"{"+p.styles+"}":p.styles),y&&(g.inserted[p.name]=!0)}}var g={key:n,sheet:new Tx({key:n,container:s,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:a};return g.sheet.hydrate(l),g},ng={exports:{}},xe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ye=typeof Symbol=="function"&&Symbol.for,Nc=Ye?Symbol.for("react.element"):60103,Vc=Ye?Symbol.for("react.portal"):60106,ya=Ye?Symbol.for("react.fragment"):60107,xa=Ye?Symbol.for("react.strict_mode"):60108,wa=Ye?Symbol.for("react.profiler"):60114,ba=Ye?Symbol.for("react.provider"):60109,Sa=Ye?Symbol.for("react.context"):60110,zc=Ye?Symbol.for("react.async_mode"):60111,ka=Ye?Symbol.for("react.concurrent_mode"):60111,Ca=Ye?Symbol.for("react.forward_ref"):60112,Ea=Ye?Symbol.for("react.suspense"):60113,r1=Ye?Symbol.for("react.suspense_list"):60120,ja=Ye?Symbol.for("react.memo"):60115,Oa=Ye?Symbol.for("react.lazy"):60116,i1=Ye?Symbol.for("react.block"):60121,o1=Ye?Symbol.for("react.fundamental"):60117,s1=Ye?Symbol.for("react.responder"):60118,a1=Ye?Symbol.for("react.scope"):60119;function Ct(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Nc:switch(e=e.type,e){case zc:case ka:case ya:case wa:case xa:case Ea:return e;default:switch(e=e&&e.$$typeof,e){case Sa:case Ca:case Oa:case ja:case ba:return e;default:return t}}case Vc:return t}}}function rg(e){return Ct(e)===ka}xe.AsyncMode=zc;xe.ConcurrentMode=ka;xe.ContextConsumer=Sa;xe.ContextProvider=ba;xe.Element=Nc;xe.ForwardRef=Ca;xe.Fragment=ya;xe.Lazy=Oa;xe.Memo=ja;xe.Portal=Vc;xe.Profiler=wa;xe.StrictMode=xa;xe.Suspense=Ea;xe.isAsyncMode=function(e){return rg(e)||Ct(e)===zc};xe.isConcurrentMode=rg;xe.isContextConsumer=function(e){return Ct(e)===Sa};xe.isContextProvider=function(e){return Ct(e)===ba};xe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Nc};xe.isForwardRef=function(e){return Ct(e)===Ca};xe.isFragment=function(e){return Ct(e)===ya};xe.isLazy=function(e){return Ct(e)===Oa};xe.isMemo=function(e){return Ct(e)===ja};xe.isPortal=function(e){return Ct(e)===Vc};xe.isProfiler=function(e){return Ct(e)===wa};xe.isStrictMode=function(e){return Ct(e)===xa};xe.isSuspense=function(e){return Ct(e)===Ea};xe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ya||e===ka||e===wa||e===xa||e===Ea||e===r1||typeof e=="object"&&e!==null&&(e.$$typeof===Oa||e.$$typeof===ja||e.$$typeof===ba||e.$$typeof===Sa||e.$$typeof===Ca||e.$$typeof===o1||e.$$typeof===s1||e.$$typeof===a1||e.$$typeof===i1)};xe.typeOf=Ct;ng.exports=xe;var l1=ng.exports,ig=l1,u1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},og={};og[ig.ForwardRef]=u1;og[ig.Memo]=c1;var d1=!0;function sg(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var $c=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||d1===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},ag=function(t,n,r){$c(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function f1(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var p1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},h1=/[A-Z]|^ms/g,m1=/_EMO_([^_]+?)_([^]*?)_EMO_/g,lg=function(t){return t.charCodeAt(1)===45},jf=function(t){return t!=null&&typeof t!="boolean"},ul=Km(function(e){return lg(e)?e:e.replace(h1,"-$&").toLowerCase()}),Of=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(m1,function(r,i,o){return Gt={name:i,styles:o,next:Gt},i})}return p1[t]!==1&&!lg(t)&&typeof n=="number"&&n!==0?n+"px":n};function Xi(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Gt={name:n.name,styles:n.styles,next:Gt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Gt={name:r.name,styles:r.styles,next:Gt},r=r.next;var i=n.styles+";";return i}return g1(e,t,n)}case"function":{if(e!==void 0){var o=Gt,s=n(e);return Gt=o,Xi(e,t,s)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function g1(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Xi(e,t,n[i])+";";else for(var o in n){var s=n[o];if(typeof s!="object")t!=null&&t[s]!==void 0?r+=o+"{"+t[s]+"}":jf(s)&&(r+=ul(o)+":"+Of(o,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(t==null||t[s[0]]===void 0))for(var l=0;l<s.length;l++)jf(s[l])&&(r+=ul(o)+":"+Of(o,s[l])+";");else{var a=Xi(e,t,s);switch(o){case"animation":case"animationName":{r+=ul(o)+":"+a+";";break}default:r+=o+"{"+a+"}"}}}return r}var _f=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Gt,Uc=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";Gt=void 0;var s=t[0];s==null||s.raw===void 0?(i=!1,o+=Xi(r,n,s)):o+=s[0];for(var l=1;l<t.length;l++)o+=Xi(r,n,t[l]),i&&(o+=s[l]);_f.lastIndex=0;for(var a="",u;(u=_f.exec(o))!==null;)a+="-"+u[1];var f=f1(o)+a;return{name:f,styles:o,next:Gt}},v1=function(t){return t()},y1=md.useInsertionEffect?md.useInsertionEffect:!1,ug=y1||v1,Bc={}.hasOwnProperty,cg=M.createContext(typeof HTMLElement<"u"?n1({key:"css"}):null);cg.Provider;var dg=function(t){return M.forwardRef(function(n,r){var i=M.useContext(cg);return t(n,i,r)})},fg=M.createContext({}),Tu="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",x1=function(t,n){var r={};for(var i in n)Bc.call(n,i)&&(r[i]=n[i]);return r[Tu]=t,r},w1=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return $c(n,r,i),ug(function(){return ag(n,r,i)}),null},b1=dg(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Tu],o=[r],s="";typeof e.className=="string"?s=sg(t.registered,o,e.className):e.className!=null&&(s=e.className+" ");var l=Uc(o,void 0,M.useContext(fg));s+=t.key+"-"+l.name;var a={};for(var u in e)Bc.call(e,u)&&u!=="css"&&u!==Tu&&(a[u]=e[u]);return a.ref=n,a.className=s,M.createElement(M.Fragment,null,M.createElement(w1,{cache:t,serialized:l,isStringTag:typeof i=="string"}),M.createElement(i,a))}),S1=b1,K=function(t,n){var r=arguments;if(n==null||!Bc.call(n,"css"))return M.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=S1,o[1]=x1(t,n);for(var s=2;s<i;s++)o[s]=r[s];return M.createElement.apply(null,o)};function Hc(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Uc(t)}var k1=function(){var t=Hc.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},C1=Ox,E1=function(t){return t!=="theme"},Pf=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?C1:E1},Tf=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(s){return t.__emotion_forwardProp(s)&&o(s)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},j1=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return $c(n,r,i),ug(function(){return ag(n,r,i)}),null},O1=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,s;n!==void 0&&(o=n.label,s=n.target);var l=Tf(t,n,r),a=l||Pf(i),u=!a("as");return function(){var f=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&d.push("label:"+o+";"),f[0]==null||f[0].raw===void 0)d.push.apply(d,f);else{d.push(f[0][0]);for(var m=f.length,x=1;x<m;x++)d.push(f[x],f[0][x])}var g=dg(function(v,S,p){var h=u&&v.as||i,y="",b=[],C=v;if(v.theme==null){C={};for(var _ in v)C[_]=v[_];C.theme=M.useContext(fg)}typeof v.className=="string"?y=sg(S.registered,b,v.className):v.className!=null&&(y=v.className+" ");var j=Uc(d.concat(b),S.registered,C);y+=S.key+"-"+j.name,s!==void 0&&(y+=" "+s);var P=u&&l===void 0?Pf(h):a,T={};for(var I in v)u&&I==="as"||P(I)&&(T[I]=v[I]);return T.className=y,T.ref=p,M.createElement(M.Fragment,null,M.createElement(j1,{cache:S,serialized:j,isStringTag:typeof h=="string"}),M.createElement(h,T))});return g.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",g.defaultProps=t.defaultProps,g.__emotion_real=g,g.__emotion_base=i,g.__emotion_styles=d,g.__emotion_forwardProp=l,Object.defineProperty(g,"toString",{value:function(){return"."+s}}),g.withComponent=function(v,S){return e(v,q({},n,S,{shouldForwardProp:Tf(g,S,!0)})).apply(void 0,d)},g}},_1=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],E=O1.bind();_1.forEach(function(e){E[e]=E(e)});const P1=E.section`
  // max-width: 375px;
  // margin-left: auto;
  // margin-right: auto;
  // padding: 24px;

  @media screen and (min-width: 768px) {
    // max-width: 1920px;
    // margin-left: auto;
    // margin-right: auto;
    padding: 80px 120px;
  }
`,T1=E.h2`
  margin-bottom: 24px;
  color: var(--primary-bluedark);
  font-family: Montserrat;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    color: var(--primary-bluedark);
    font-family: Montserrat;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: 56px;
  }
`,M1=E.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 24px;
  }
`,R1=E.div`
  max-width: 327px;
  // width: calc((100% - 24px) / 2);
  padding: 40px;
  border-radius: 16px;
  background: var(--background-white, #fcfcfc);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);

  @media screen and (min-width: 768px) {
    // width: calc((100% - 24px) / 2);
    max-width: 828px;
    padding: 73px;
    border-radius: 16px;
    background: var(--background-white, #fcfcfc);
    box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  }
`,I1=E.h3`
  color: var(--primary-bluedark);
  font-family: Montserrat;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    color: var(--typography-black);
    font-family: Montserrat;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: 56px;
    margin-bottom: 16px;
  }
`,L1=E.p`
  color: var(--primary-bluedark);
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    color: var(--primary-bluedark);
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
    margin-bottom: 40px;
  }
`,Xn=E.li`
  color: var(--primary-bluedark);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;

  &::before {
    content: "\\2022";
    color: var(--primary-bluedark);
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }

  @media screen and (min-width: 768px) {
    color: var(--primary-bluedark);
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;

    &::before {
      content: "\\2022";
      color: var(--primary-bluedark);
      display: inline-block;
      width: 1em;
      margin-left: -1em;
    }
  }
`,A1=E.ul`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-top: 42px;
    display: flex;
    flex-direction: row;
    gap: 60px;
    justify-content: space-between;
    align-items: baseline;
  }
`,cl=E.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary-bluedark);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px; /* 200% */

  &:hover::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -5px;
    height: 2px;
    background-color: var(--primary-bluedark);
  }

  @media screen and (min-width: 768px) {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--primary-bluedark);
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
    text-decoration: none;

    &:hover::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -5px;
      height: 2px;
      background-color: var(--primary-bluedark);
    }
  }
`,dl=E.svg`
  margin-left: 10px;
`,D1=E.div`
  // width: calc((100% - 24px) / 2);
  max-width: 327px;
  border-radius: 16px;

  @media screen and (min-width: 768px) {
    // width: calc((100% - 24px) / 2);
    max-width: 828px;
    border-radius: 16px;
  }
`,F1=()=>c.jsx(P1,{className:"container",children:c.jsxs("div",{children:[c.jsx(T1,{children:"Про мене"}),c.jsxs(M1,{children:[c.jsxs(D1,{children:[c.jsx(As,{maxWidth:767,children:c.jsx("img",{srcSet:`${kx} 2x, ${Cx} 1x`,sizes:"(max-width: 767px) 100vw",src:Ex,alt:"Ольга Поліщук"})}),c.jsx(As,{minWidth:768,children:c.jsx("img",{srcSet:`${bx} 2x, ${Sx} 1x`,sizes:"(min-width: 768px) 100vw",src:wx,alt:"Ольга Поліщук"})})]}),c.jsxs(R1,{children:[c.jsx(I1,{children:"Ольга Поліщук"}),c.jsx(L1,{children:"CEO and Founder студії стратегічного розвитку"}),c.jsxs("ul",{children:[c.jsx(Xn,{children:"MBA Healthcare management"}),c.jsx(Xn,{children:"Викладачка медичного маркетингу Бізнес-школа УКУ (LvBS)"}),c.jsx(Xn,{children:`Експертка в "Центр Розвитку Громадського Здоров'я УКУ"`}),c.jsx(Xn,{children:"Бізнес-консультантка, стратег з медичного маркетингу"}),c.jsx(Xn,{children:'Керівниця проєкту "Стетоскоп" - телеграм канал про медичний менеджмент та маркетингу'}),c.jsx(Xn,{children:"Більше 18 років досвіду в маркетингу та комунікаціях, з них більше 10 років досвіду в медичному та фармацевтичному бізнесі на керівних посадах"}),c.jsx(Xn,{children:"Використання принципів доказової медицини"})]}),c.jsxs(A1,{children:[c.jsx("li",{children:c.jsxs(cl,{href:"https://www.linkedin.com/in/olga-polishchuk-83362140/",target:"_blank",rel:"noopener noreferrer",children:["LinkedIn",c.jsx(dl,{width:"24",height:"24",children:c.jsx("use",{href:`${re}#icon-arrow-up-right`})})]})}),c.jsx("li",{children:c.jsxs(cl,{href:"https://www.facebook.com/olga.polishchuk.14",target:"_blank",rel:"noopener noreferrer",children:["Facebook",c.jsx(dl,{width:"24",height:"24",children:c.jsx("use",{href:`${re}#icon-arrow-up-right`})})]})}),c.jsx("li",{children:c.jsxs(cl,{href:"https://www.instagram.com/olga_healthm/",target:"_blank",rel:"noopener noreferrer",children:["Instagram",c.jsx(dl,{width:"24",height:"24",children:c.jsx("use",{href:`${re}#icon-arrow-up-right`})})]})})]})]})]})]})}),N1=E.section`
  // max-width: 375px;
  // margin-left: auto;
  // margin-right: auto;
  // padding: 40px 24px;
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    // max-width: 1920px;
    // margin-left: auto;
    // margin-right: auto;
    padding: 80px 120px;
  }
`,V1=E.h2`
  color: var(--typography-bluedark, #1b3641);

  /* mobile/h2-semibold */
  font-family: Montserrat;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    color: var(--typography-black, #161717);
    font-family: Montserrat;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: 56px;
    margin-bottom: 40px;
  }
`,z1=E.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 24px;
    align-items: center;
  }
`,$1=E.p`
  color: var(--primary-bluedark);

  /* mobile/h4-medium */
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  max-width: 327px;

  @media screen and (min-width: 768px) {
    color: var(--primary-bluedark);
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    max-width: 828px;
  }
`,U1=E.p`
  color: var(--typography-bluedark);

  /* mobile/h5-medium */
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    color: var(--primary-bluedark);
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
`,Mf=E.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 16px;
`,B1=E.div`
  max-width: 327px;
  padding: 24px;
  border-radius: 16px;
  background: var(--background-white);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);

  @media screen and (min-width: 768px) {
    max-width: 398px;
    padding: 40px;
    border-radius: 16px;
    background: var(--background-white);
    box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  }
`,H1=E.h4`
  color: var(--primary-bluedark);
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;

  @media screen and (min-width: 768px) {
    color: var(--primary-bluedark);
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
  }
`,W1=E.div`
  max-width: 327px;
  padding: 24px;
  border-radius: 16px;
  background: var(--background-bluedark);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);

  @media screen and (min-width: 768px) {
    max-width: 398px;
    padding: 40px;
    border-radius: 16px;
    background: var(--background-bluedark);
    box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  }
`,Q1=E.h4`
  color: var(--system-default-10);
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;

  @media screen and (min-width: 768px) {
    color: var(--system-default-10);
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
  }
`,Y1=E.p`
  color: var(--system-default-10);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    color: var(--system-default-10);
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
`,K1=E.svg`
  fill: var(--primary-bluedark, #1b3641);
  border-radius: 100px;
  background: rgba(27, 54, 65, 0.2);
  width: 32px;
  height: 32px;
`,G1=E.svg`
  fill: var(--background-white, #fcfcfc);
  border-radius: 100px;
  background: rgba(244, 244, 246, 0.2);
  width: 32px;
  height: 32px;
`,X1=()=>c.jsx(N1,{id:"aboutUs",className:"container",children:c.jsxs("div",{children:[c.jsx(V1,{children:"Про студію"}),c.jsxs(z1,{children:[c.jsx("div",{children:c.jsx($1,{children:"Студія стратегічного розвитку медичних брендів «Healthy management» надає послуги медичного менеджменту, медичного маркетингу, консалтингу бізнес-процесів та створення стратегій здоров’я для підприємств та бізнесу. Ми співпрацюємо з медичними закладами, лікарями, власниками, керівниками та створюємо спільні стратегії та дії для ефективного просування та розвитку проєктів, використовуючи комплексний підхід"})}),c.jsxs(W1,{children:[c.jsxs(Mf,{children:[c.jsx(G1,{children:c.jsx("use",{href:`${re}#icon-star`})}),c.jsx(Q1,{children:"Наша місія"})]}),c.jsx(Y1,{children:"Будуємо ефективні стратегії по управлінню здоров’ям та створюємо продуктивні дії для популяризації здорового менеджменту"})]}),c.jsxs(B1,{children:[c.jsxs(Mf,{children:[c.jsx(K1,{children:c.jsx("use",{href:`${re}#icon-star`})}),c.jsx(H1,{children:"Наші цінності"})]}),c.jsx(U1,{children:"Повага, довіра, партнерство та експертність. Будуємо нову культуру управління здоровим менеджментом у медичній галузі"})]})]})]})}),q1=E.section`
  padding-top: 80px;
  padding-bottom: 80px;
`,J1=E.div`
  width: 100%;
  border-radius: 16px;
  padding: 80px;
  background-color: var(--background-bluedark);
`,Z1=E.h2`
  margin-bottom: 40px;
  font-size: 48px;
  font-weight: 600;
  line-height: 1.17;
  color: var(--system-default-10);

  & span {
    color: var(--primary-yellow);
  }
`,ew=E.ul`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding: 24px 0;
`,tw=E.li`
  display: flex;
  align-items: center;
  width: calc((100% - (24px * 4)) / 5);
  padding: 24px;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  border-radius: 16px;
  border: 1px solid var(--background-whitegrey);
  color: var(--system-default-10);
`,nw=[{id:1,tool:"Матриця стейкхолдерів"},{id:2,tool:"SWOT аналіз"},{id:3,tool:"Bussines model canvas"},{id:4,tool:"Value proposition canvas"},{id:5,tool:"Customer journey map"}],rw=()=>c.jsx(q1,{className:"container",children:c.jsxs(J1,{children:[c.jsxs(Z1,{children:["Бізнес ",c.jsx("span",{children:"інструменти"}),", які використувуємо в партнерстві"]}),c.jsx(ew,{children:nw.map(e=>c.jsx(tw,{children:e.tool},e.id))})]})});var pg={exports:{}},iw="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ow=iw,sw=ow;function hg(){}function mg(){}mg.resetWarningCache=hg;var aw=function(){function e(r,i,o,s,l,a){if(a!==sw){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:mg,resetWarningCache:hg};return n.PropTypes=n,n};pg.exports=aw();var lw=pg.exports;const qi=qs(lw),rs="/healthy-management-project/assets/icon-footer-MBx-ujYN.svg",uw=E.div`
  padding: 40px 0 0 0;
  background-color: var(--background-bluedark);
`,cw=E.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`,dw=E.a`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  cursor: pointer;
  border-bottom: 1px solid rgba(244, 244, 246, 0.4);
  color: var(--system-default-10);
`,fw=E.div`
  display: flex;
  align-items: center;
  gap: 40px;
`,ui=E.a`
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  position: relative;
  color: var(--system-default-10);

  &::before {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%;
    height: 1px;
    opacity: 0;
    background-color: var(--system-default-10);
  }

  &:hover::before {
    opacity: 1;
  }
`,pw=E.div`
  display: flex;
  gap: 40px;
`,hw=E.div`
  display: flex;
  gap: 16px;
  align-items: center;
`,mw=E.a`
  padding: 8px;

  & svg {
    border-radius: 10px;
    background-color: var(--background-white);
    opacity: 0.8;
  }
`,gw=E.div`
  display: flex;
  flex-direction: column;
`,Rf=E.a`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: var(--system-default-10);
`,vw=E.p`
  padding: 16px 0;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.67;
  text-transform: uppercase;
  border-top: 1px solid var(--system-default-20);
  color: var(--system-default-10);
`,yw=E.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 1100;
`,xw=E.div`
  padding: 80px;
  position: fixed;
  width: 1360px;
  border-radius: 24px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 10000;
`,ww=E.div`
  height: 32px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`,bw=E.svg`
  width: 24px;
  cursor: pointer;
`,Sw=E.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: var(--typography-bluedark);
`,kw=E.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`,bn=E.li`
  width: 282px;
  padding: 24px;
  gap: 16px;

  border-radius: 16px;
  background: var(--background-bluedark);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
`,Sn=E.h3`
  display: flex;
  justify-content: center;
  gap: 8px;

  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  color: var(--typography-white);

  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`,kn=E.p`
  display: flex;
  justify-content: center;

  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: var(--typography-white);
`,Cn=E.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,En=E.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,jn=E.div`
  border-radius: 8px;
  overflow: hidden;
`,On=E.img`
  border-radius: 8px;

  &:hover {
    transform: scale(1.1);
    border-radius: 8px;
  }
`,If="/healthy-management-project/assets/Jilia_Kopytko-mYhzlt_-.webp",Cw="/healthy-management-project/assets/Jilia_Kopytko@2x-gruKrAtD.jpg",Lf="/healthy-management-project/assets/Yelyzaveta_Domanska-Ru7up7Pj.webp",Ew="/healthy-management-project/assets/Yelyzaveta_Domanska@2x-BYkqrL88.jpg",Af="/healthy-management-project/assets/Oleksandr_Natalukha-YKEBbXyu.webp",jw="/healthy-management-project/assets/Oleksandr_Natalukha@2x-5OsrctvL.jpg",Df="/healthy-management-project/assets/Valentyn_Havrylenko-ouVcypag.webp",Ow="/healthy-management-project/assets/Valentyn_Havrylenko@2x-xBjJM6nL.jpg",Ff="/healthy-management-project/assets/Olha_Abent-lPe8g7w1.webp",_w="/healthy-management-project/assets/Olha_Abent@2x-fGgXmj71.jpg",Nf="/healthy-management-project/assets/Viktoriia_Moryc-tWw5-4of.webp",Pw="/healthy-management-project/assets/Viktoriia_Moryc@2x-AxiRex6x.jpg",Vf="/healthy-management-project/assets/Vyacheslav_Pavlyuk-py_hj3lz.webp",Tw="/healthy-management-project/assets/Vyacheslav_Pavlyuk@2x-2qCtSSAb.jpg",zf="/healthy-management-project/assets/Yaroslav_Li-nn0P6bIv.webp",Mw="/healthy-management-project/assets/Yaroslav_Li@2x-xfuqLdiI.jpg",gg=({handleClose:e,isModalOpen:t})=>{const n=i=>{i.target===i.currentTarget&&e()};M.useEffect(()=>{const i=document.body,o=()=>{t?i.classList.add("body-no-scroll"):i.classList.remove("body-no-scroll")},s=l=>{l.code==="Escape"&&t&&e()};return o(),window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[e,t]);const r=document.getElementById("modal");return t?xx.createPortal(c.jsx(yw,{onClick:n,children:c.jsxs(xw,{isModalOpen:t,children:[c.jsxs(ww,{children:[c.jsx(Sw,{children:"Команда, яка створила сторінку"}),c.jsx(bw,{onClick:e,children:c.jsx("use",{href:`${re}#icon-close`})})]}),c.jsxs(kw,{children:[c.jsx(bn,{children:c.jsxs(Cn,{children:[c.jsx(jn,{children:c.jsx(On,{src:Nf,srcSet:`${Nf} 1x, ${Pw} 2x`,alt:"Вікторія Мориц"})}),c.jsxs(En,{children:[c.jsx(Sn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/viktoriia-moryc-61610962/",target:"_blank",rel:"noopener noreferrer",children:["Вікторія Мориц",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${re}#icon-linkedin`})})]})}),c.jsx(kn,{children:"Project Manager"})]})]})}),c.jsx(bn,{children:c.jsxs(Cn,{children:[c.jsx(jn,{children:c.jsx(On,{src:If,srcSet:`${If} 1x, ${Cw} 2x`,alt:"Юлія Копитко"})}),c.jsxs(En,{children:[c.jsx(Sn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/juliakopytko/",target:"_blank",rel:"noopener noreferrer",children:["Юлія Копитко",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${re}#icon-linkedin`})})]})}),c.jsx(kn,{children:"UX/UI Designer"})]})]})}),c.jsx(bn,{children:c.jsxs(Cn,{children:[c.jsx(jn,{children:c.jsx(On,{src:zf,srcSet:`${zf} 1x, ${Mw} 2x`,alt:"Ярослав Лі"})}),c.jsxs(En,{children:[c.jsx(Sn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/yaroslav-lee-b7070b294",target:"_blank",rel:"noopener noreferrer",children:["Ярослав Лі",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${re}#icon-linkedin`})})]})}),c.jsx(kn,{children:"Frontend Developer"})]})]})}),c.jsx(bn,{children:c.jsxs(Cn,{children:[c.jsx(jn,{children:c.jsx(On,{src:Lf,srcSet:`${Lf} 1x, ${Ew} 2x`,alt:"Єлизавета Доманська"})}),c.jsxs(En,{children:[c.jsx(Sn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/yelyzaveta-domanska-2185a5292/",target:"_blank",rel:"noopener noreferrer",children:["Єлизавета Доманська",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${re}#icon-linkedin`})})]})}),c.jsx(kn,{children:"Frontend Developer"})]})]})}),c.jsx(bn,{children:c.jsxs(Cn,{children:[c.jsx(jn,{children:c.jsx(On,{src:Af,srcSet:`${Af} 1x, ${jw} 2x`,alt:"Олександр Наталуха"})}),c.jsxs(En,{children:[c.jsx(Sn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/oleksandr-natalukha",target:"_blank",rel:"noopener noreferrer",children:["Олександр Наталуха",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${re}#icon-linkedin`})})]})}),c.jsx(kn,{children:"Frontend Developer"})]})]})}),c.jsx(bn,{children:c.jsxs(Cn,{children:[c.jsx(jn,{children:c.jsx(On,{src:Df,srcSet:`${Df} 1x, ${Ow} 2x`,alt:"Валентин Гавриленко"})}),c.jsxs(En,{children:[c.jsx(Sn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/valentyn-havrylenko/",target:"_blank",rel:"noopener noreferrer",children:["Валентин Гавриленко",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${re}#icon-linkedin`})})]})}),c.jsx(kn,{children:"Frontend Developer"})]})]})}),c.jsx(bn,{children:c.jsxs(Cn,{children:[c.jsx(jn,{children:c.jsx(On,{src:Vf,srcSet:`${Vf} 1x, ${Tw} 2x`,alt:"В´ячеслав Павлюк"})}),c.jsxs(En,{children:[c.jsx(Sn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/vyacheslav-pavlyuk/",target:"_blank",rel:"noopener noreferrer",children:["В'ячеслав Павлюк",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${re}#icon-linkedin`})})]})}),c.jsx(kn,{children:"Fullstack Developer"})]})]})}),c.jsx(bn,{children:c.jsxs(Cn,{children:[c.jsx(jn,{children:c.jsx(On,{src:Ff,srcSet:`${Ff} 1x, ${_w} 2x`,alt:"Ольга Абент"})}),c.jsxs(En,{children:[c.jsx(Sn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/abentolga/",target:"_blank",rel:"noopener noreferrer",children:["Ольга Абент",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${re}#icon-linkedin`})})]})}),c.jsx(kn,{children:"QA Engineer"})]})]})})]})]})}),r):null};gg.propTypes={handleClose:qi.func.isRequired,isModalOpen:qi.bool.isRequired};const vg=({handleSetActiveLink:e})=>{const[t,n]=M.useState(!1),r=()=>{n(!0)},i=()=>{n(!1)};return c.jsxs(uw,{id:"footer",children:[c.jsxs(cw,{className:"container",children:[c.jsx("svg",{width:"227",height:"40",children:c.jsx("use",{href:`${rs}#logo-white`})}),c.jsx(dw,{onClick:r,children:"created by GoIT students"}),c.jsx(gg,{handleClose:i,isModalOpen:t}),c.jsxs(fw,{children:[c.jsx(ui,{href:"#home",onClick:o=>e("home",o),children:"Головна"}),c.jsx(ui,{href:"#aboutUs",onClick:o=>e("aboutUs",o),children:"Про нас"}),c.jsx(ui,{href:"#services",onClick:o=>e("services",o),children:"Послуги"}),c.jsx(ui,{href:"#mentoring",onClick:o=>e("mentoring",o),children:"Менторство"}),c.jsx(ui,{href:"#projects",onClick:o=>e("projects",o),children:"Проєкти"})]}),c.jsxs(pw,{children:[c.jsxs(hw,{children:[c.jsx(mw,{href:"https://www.facebook.com/profile.php?id=61551346490841",target:"_blank",rel:"noopener noreferrer",children:c.jsx("svg",{width:"32",height:"32",children:c.jsx("use",{href:`${rs}#facebook`})})}),c.jsx("a",{href:"https://www.instagram.com/healthymanagement_ua/",target:"_blank",rel:"noopener noreferrer",children:c.jsx("svg",{width:"40",height:"40",children:c.jsx("use",{href:`${rs}#instagram`})})})]}),c.jsxs(gw,{children:[c.jsx(Rf,{href:"mailto:managementhealthy@gmail.com",children:"managementhealthy@gmail.com"}),c.jsx(Rf,{href:"tel:+380673160556",children:"+380 673 160 556"})]})]})]}),c.jsx(vw,{children:"© 2023 healthy managment. All rights reserved"})]})};vg.propTypes={handleSetActiveLink:qi.func.isRequired};const Fs="/healthy-management-project/assets/symbol-defs-t7xx9-KA.svg",Rw=E.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding-top: 32px;
  padding-bottom: 32px;
  border-bottom: 1px solid var(--system-default-20, #dedede);
  background-color: var(--system-default-10);

  @media screen and (min-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    padding-top: 40px;
    padding-bottom: 40px;
    border-bottom: 1px solid var(--system-default-20, #dedede);
    background-color: var(--system-default-10);
  }
`,Iw=E.div`
  //   max-width: 1920px;
  //   margin-left: auto;
  //   margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`,Lw=E.nav`
  display: flex;
  gap: 40px;
  align-items: center;
`,ci=E.a`
  position: relative;
  //   text-decoration: none;
  color: var(--typography-bluedark, #1b3641);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  &:hover::after,
  &:focus::after,
  &.active::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -5px;
    height: 2px;
    background-color: var(--typography-bluedark, #1b3641);
  }
`,Aw=E.a`
  display: flex;
  min-width: 156px;
  height: 48px;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
  background: var(--primary-bluedark);
  border-radius: 16px;
  border: 1px solid var(--primary-bluedark, #1b3641);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  color: var(--system-default-10);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  transition: background 0.5s ease, color 0.5s ease;

  &:hover,
  &:focus {
    background: var(--background-white, #fcfcfc);
    box-shadow: 0px 0px 16px 0px rgba(27, 54, 65, 0.16);
  }

  @media screen and (min-width: 768px) {
    display: flex;
    min-width: 260px;
    height: 56px;
    padding: 8px 24px;
    justify-content: center;
    align-items: center;
    background: var(--background-white);
    border-radius: 16px;
    border: 1px solid var(--primary-bluedark, #1b3641);
    box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
    color: var(--typography-bluedark, #1b3641);
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    transition: background 0.5s ease, color 0.5s ease;

    &:hover,
    &:focus {
      background: var(--background-white, #fcfcfc);
      box-shadow: 0px 0px 16px 0px rgba(27, 54, 65, 0.16);
    }
  }
`,Dw=E.svg`
  stroke: black;
  width: 40px;
  height: 40px;
`,Fw=E.button`
  border: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  font-family: inherit;
  font-size: 100%;
  cursor: pointer;
  background: none;
`,Nw="_mabileMenuContainer_15uw8_1",Vw="_divMobileMenu_15uw8_13",zw="_logoMenu_15uw8_24",$w="_contactMenu_15uw8_28",Uw="_svgMenu_15uw8_51",Bw="_nav_15uw8_55",Hw="_navMenuMobile_15uw8_66",Ww="_buttonMenuMobile_15uw8_75",Lt={mabileMenuContainer:Nw,divMobileMenu:Vw,logoMenu:zw,contactMenu:$w,svgMenu:Uw,nav:Bw,navMenuMobile:Hw,buttonMenuMobile:Ww},Qw=document.getElementById("modalMobail"),yg=({onClose:e,handleSetActiveLink:t})=>ha.createPortal(c.jsx("div",{className:Lt.mabileMenuContainer,children:c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:Lt.divMobileMenu,children:[c.jsx("a",{href:"#home",children:c.jsx("svg",{width:"40",height:"40",children:c.jsx("use",{href:`${Fs}#icon-g10`})})}),c.jsx("a",{className:Lt.contactMenu,href:"#contact",children:"Контакт"}),c.jsx("button",{className:Lt.buttonMenuMobile,type:"button",onClick:()=>e(),children:c.jsx("svg",{className:Lt.svgMenu,width:"40",height:"40",children:c.jsx("use",{href:`${Fs}#icon-close`})})})]}),c.jsxs("nav",{className:Lt.nav,children:[c.jsx("a",{className:Lt.navMenuMobile,href:"#home",onClick:n=>{e(),t("home",n)},children:"Головна"}),c.jsx("a",{className:Lt.navMenuMobile,href:"#aboutUs",onClick:n=>{e(),t("aboutUs",n)},children:"Про нас"}),c.jsx("a",{className:Lt.navMenuMobile,href:"#services",onClick:n=>{e(),t("services",n)},children:"Послуги"}),c.jsx("a",{className:Lt.navMenuMobile,href:"#mentoring",onClick:n=>{e(),t("mentoring",n)},children:"Менторство"}),c.jsx("a",{className:Lt.navMenuMobile,href:"#projects",onClick:n=>{e(),t("projects",n)},children:"Проєкти"})]})]})}),Qw);yg.propTypes={onClose:qi.func.isRequired};const xg=({handleSetActiveLink:e})=>{const[t,n]=M.useState("home"),[r,i]=M.useState(!1),o=nr.useMediaQuery({query:"(max-width: 767px)"}),s=nr.useMediaQuery({query:"(min-width: 768px)"}),l=()=>{i(!r)};return M.useEffect(()=>{const a=()=>{const f=["home","aboutUs","services","mentoring","projects","contact"].find(d=>{const m=document.getElementById(d);if(m){const x=m.getBoundingClientRect();return x.top<=120&&x.bottom>=120}return m});f&&n(f)};return window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}},[]),c.jsxs(Rw,{children:[c.jsx("div",{className:"container",children:c.jsxs(Iw,{children:[o&&c.jsx("a",{href:"#home",children:c.jsx("svg",{width:"40",height:"40",children:c.jsx("use",{href:`${Fs}#icon-g10`})})}),s&&c.jsx("a",{href:"#home",children:c.jsx("svg",{width:"227",height:"40",children:c.jsx("use",{href:`${re}#logo-black`})})}),s&&c.jsxs(Lw,{children:[c.jsx(ci,{href:"#home",className:t==="home"?"active":"",onClick:a=>e("home",a),children:"Головна"}),c.jsx(ci,{href:"#aboutUs",className:t==="aboutUs"?"active":"",onClick:a=>e("aboutUs",a),children:"Про нас"}),c.jsx(ci,{href:"#services",className:t==="services"?"active":"",onClick:a=>e("services",a),children:"Послуги"}),c.jsx(ci,{href:"#mentoring",className:t==="mentoring"?"active":"",onClick:a=>e("mentoring",a),children:"Менторство"}),c.jsx(ci,{href:"#projects",className:t==="projects"?"active":"",onClick:a=>e("projects",a),children:"Проєкти"})]}),c.jsx(Aw,{href:"#contact",className:t==="contact"?"active":"",onClick:a=>e("contact",a),children:"Контакт"}),o&&c.jsx(Fw,{type:"button",onClick:()=>l(),children:c.jsx(Dw,{children:c.jsx("use",{href:`${Fs}#icon-menuburger`})})})]})}),o&&r&&c.jsx(yg,{onClose:l,handleSetActiveLink:e})]})};xg.propTypes={handleSetActiveLink:qi.func.isRequired};const Yw="/healthy-management-project/assets/hero1x-6AVSlzud.webp",Kw="/healthy-management-project/assets/hero1x-d4IOBsel.jpg",Gw=E.section`
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${Kw});
  background-size: cover;
  margin-top: 130px;
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${Yw});
    background-size: cover;
    margin-top: 120px;
    padding-top: 296px;
    padding-bottom: 296px;
  }
`,Xw=E.h1`
  color: var(--system-default-10);
  max-width: 289px;

  /* mobile/h1-medium */
  font-family: Montserrat;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    color: var(--system-default-10);
    font-family: Montserrat;
    font-size: 56px;
    font-style: normal;
    font-weight: 600;
    line-height: 64px;
    max-width: 828px;
    margin-bottom: 24px;
  }
`,qw=E.h3`
  color: var(--system-default-10);

  /* mobile/h2-medium */
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */

  @media screen and (min-width: 768px) {
    color: var(--system-default-10);
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
    max-width: 828px;
  }
`,Jw=E.ul`
  margin-left: 20px;
  margin-top: 24px;
  margin-bottom: 48px;

  @media screen and (min-width: 768px) {
    margin-left: 38px;
    margin-top: 24px;
    margin-bottom: 40px;
  }
`,fl=E.li`
  color: var(--system-default-10);

  /* mobile/h2-medium */
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */

  &::before {
    content: "\\2022";
    color: var(--system-default-10);
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }

  @media screen and (min-width: 768px) {
    color: var(--system-default-10);

    /* desktop/h3-medium */
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px; /* 133.333% */

    &::before {
      content: "\\2022";
      color: var(--system-default-10);
      display: inline-block;
      width: 1em;
      margin-left: -1em;
    }
  }
`,Zw=E.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 24px;
  }
`,$f=E.a`
  display: flex;
  flex-direction: row;
  max-width: 327px;
  height: 56px;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 16px;
  border: 1px solid var(--system-default-10);
  box-shadow: 0px 0px 8px 0px rgba(248, 248, 248, 0.08);
  color: var(--system-default-10);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  transition: background 0.5s ease, color 0.5s ease;

  &:hover,
  &:focus {
    background: var(--primary-yellow);
    color: var(--primary-bluedark);
  }

  @media screen and (min-width: 768px) {
    display: flex;
    min-width: 260px;
    height: 56px;
    padding: 8px 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 16px;
    border: 1px solid var(--system-default-10);
    box-shadow: 0px 0px 8px 0px rgba(248, 248, 248, 0.08);
    color: var(--system-default-10);
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    transition: background 0.5s ease, color 0.5s ease;

    &:hover,
    &:focus {
      background: var(--primary-yellow);
      color: var(--primary-bluedark);
    }
  }
`,eb=()=>c.jsx(Gw,{id:"home",children:c.jsxs("div",{className:"container",children:[c.jsx(Xw,{children:"Бізнес-партнер з розвитку та комунікацій здорового менеджменту"}),c.jsx(qw,{children:"Будуємо ефективні стратегії здорового менеджменту для медичних брендів:"}),c.jsxs(Jw,{children:[c.jsx(fl,{children:"медичний менеджмент і маркетинг,"}),c.jsx(fl,{children:"програми управління здоров'ям для підприємств та бізнесу,"}),c.jsx(fl,{children:"менторство"})]}),c.jsxs(Zw,{children:[c.jsx($f,{href:"#contact",children:"Консультація"}),c.jsx($f,{href:"#services",children:"Послуги"})]})]})}),tb=E.section`
  padding-top: 24px;
  padding-bottom: 24px;

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,nb=E.div`
  border-radius: 16px;
  padding: 24px;
  background: var(--background-bluedark);

  @media screen and (min-width: 1920px) {
    max-width: 100%;
    padding: 80px;
  }
`,rb=E.h2`
  color: var(--system-default-10);
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 24px;

  @media screen and (min-width: 1920px) {
    font-size: 48px;
    line-height: 56px;
    margin-bottom: 40px;
  }
`,ib=E.ul`
  display: flex;
  padding: 0;
  flex-wrap: wrap;
  gap: 24px;
`,Po=E.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media screen and (min-width: 1920px) {
    flex-direction: row;
    flex-basis: calc((100% - 24px) / 2);
    padding: 40px;
    gap: 24px;
  }
`,To=E.svg`
  width: 80px;
  height: 80px;
`,Mo=E.div`
  display: flex;
  flex-direction: column;
`,Ro=E.h3`
  width: 100%;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 8px;
  color: var(--system-default-10);

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 16px;
  }
`,Io=E.p`
  color: var(--system-default-10);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  font-style: normal;
  font-family: Montserrat;

  @media screen and (min-width: 1920px) {
    max-width: 542px;
    font-size: 16px;
    line-height: 24px;
  }
`,ob=()=>c.jsx(tb,{className:"container",children:c.jsxs(nb,{children:[c.jsx(rb,{children:"Чому обирають нас"}),c.jsxs(ib,{children:[c.jsxs(Po,{children:[c.jsx(To,{children:c.jsx("use",{href:`${re}#hands-shake`})}),c.jsxs(Mo,{children:[c.jsx(Ro,{children:"Надійне партнерство та менторство"}),c.jsx(Io,{children:"Ми налаштовані на довгострокове партнерство і дбаємо про комфортні та чесні комунікації"})]})]}),c.jsxs(Po,{children:[c.jsx(To,{children:c.jsx("use",{href:`${re}#setting`})}),c.jsxs(Mo,{children:[c.jsx(Ro,{children:"Індивідуальний підхід"}),c.jsx(Io,{children:"Кожен бізнес і послуга мають свої особливості. Ми занурюємося у ваш бізнес і пропонуємо індивідуальні стратегії, які допоможуть вам досягти успіху"})]})]}),c.jsxs(Po,{children:[c.jsx(To,{children:c.jsx("use",{href:`${re}#icon-lamp`})}),c.jsxs(Mo,{children:[c.jsx(Ro,{children:"Експертні послуги"}),c.jsx(Io,{children:"Ми опираємося на передовий досвід і використовуємо як класичні, так і сучасні підходи для досягнення поставленого результату"})]})]}),c.jsxs(Po,{children:[c.jsx(To,{children:c.jsx("use",{href:`${re}#icon-puzzle`})}),c.jsxs(Mo,{children:[c.jsx(Ro,{children:"Комплексні рішення"}),c.jsx(Io,{children:"Наша експертиза дозволяє пропонувати комплексні рішення для ефективної співпраці"})]})]})]})]})}),Uf="/healthy-management-project/assets/pic_mentorstvo1x-R5bIGNq0.webp",sb="/healthy-management-project/assets/pic_mentorstvo2x-k6d-_Us1.jpg",Bf="/healthy-management-project/assets/mob_mentor1x-_de1iGBc.webp",ab="/healthy-management-project/assets/mob_mentor@2x-oAKhVwNJ.jpg",lb=E.section`
  padding-top: 80px;
  padding-bottom: 80px;
`,ub=E.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 1920px) {
    gap: 40px;
    margin-bottom: 40px;
    flex-direction: row;
  }
`,cb=E.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 1920px) {
    max-width: 828px;
    align-items: flex-start;
  }
`,db=E.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 16px;

  border-radius: 16px;
  background: var(--background-white);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);

  @media screen and (min-width: 1920px) {
    gap: 24px;
    max-width: 820px;
    height: 392px;
    padding: 40px;
  }
`,fb=E.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: var(--typography-black);

  @media screen and (min-width: 1920px) {
    font-size: 48px;
    line-height: 56px;
    margin-bottom: 40px;
  }
`,pb=E.h3`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: var(--typography-bluedark);

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: 32px;
  }
`,Hf=E.h3`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: var(--typography-white);

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: 32px;
  }
`,hb=E.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 320px;

  @media screen and (min-width: 1920px) {
    margin-bottom: 80px;
  }
`,Wf=E.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: var(--typography-bluedark);

  &:not(:first-of-type) {
    margin-bottom: 8px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    max-width: 720px;
    line-height: 28px;

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`,mb=E.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  padding: 8px 24px;
  color: var(--typography-bluedark);

  height: 56px;
  border-radius: 16px;
  background-color: transparent;
  border: 1px solid var(--background-bluedark);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);

  @media screen and (min-width: 1920px) {
    font-size: 16px;
    line-height: 24px;

    width: 260px;

    &:hover,
    &focus {
      font-weight: 600;
      background: var(--background-white);
    }
  }
`,gb=E.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 1920px) {
    gap: 40px;
    flex-direction: row;
  }
`,vb=E.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  padding: 24px;
  border-radius: 16px;
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  background-color: var(--background-bluedark);

  @media screen and (min-width: 1920px) {
    padding: 40px;
    gap: 24px;
    flex: 1 0 0;
  }
`,yb=E.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: var(--typography-bluedark);

  @media screen and (min-width: 1920px) {
    font-size: 16px;
    line-height: 24px;
  }
`,Qf=E.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: var(--typography-white);

  @media screen and (min-width: 1920px) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 0px;
  }
`,gr=E.li`
  display: flex;
  gap: 10px;

  &::before {
    content: "\\2022";
    color: var(--primary-bluedark);
    display: inline-block;
    margin-left: 0.5em;
  }

  @media screen and (min-width: 1920px) {
    padding-left: 24px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: 6px;
      top: 50%;
      transform: translateY(-50%);
      width: 3px;
      height: 3px;
      background-color: #1b3641;
      border-radius: 50%;
    }

    &:first-of-type::before {
      top: 26%;
    }
  }
`,vr=E.li`
  display: flex;
  gap: 10px;

  &::before {
    content: "\\2022";
    display: inline-block;
    margin-left: 0.5em;
    color: var(--typography-white);
  }

  @media screen and (min-width: 1920px) {
    padding-left: 24px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: 6px;
      top: 50%;
      transform: translateY(-50%);
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background-color: var(--typography-white);
    }
  }
`,xb=()=>c.jsxs(lb,{id:"mentoring",className:"container",children:[c.jsxs(ub,{children:[c.jsxs("div",{children:[c.jsx(As,{minWidth:1920,children:c.jsx("img",{srcSet:`${Uf} 1920w, ${sb} 2x`,sizes:"(min-width: 1920px) 1920px",src:Uf,alt:"Ольга Поліщук - ваш ментор в медичній галузі"})}),c.jsx(As,{minWidth:300,maxWidth:1919,children:c.jsx("img",{srcSet:`${Bf} 375w, ${ab} 2x`,sizes:"(min-width: 375px) 375px",src:Bf,alt:"Ольга Поліщук - ваш ментор в медичній галузі"})})]}),c.jsxs(cb,{children:[c.jsx(fb,{children:"Менторство"}),c.jsxs(hb,{children:[c.jsxs(Wf,{children:[c.jsx("b",{children:"Менторство в медичній галузі"})," - почути іншу думку, підтвердити власні гіпотези, зрозуміти вектор розвитку, отримати підтримку та пораду з питань менеджменту і медичного маркетингу"]}),c.jsxs(Wf,{children:[c.jsx("b",{children:"Менторство"})," - це про взаємодію та чесну комунікацію, про спільні цінності та готовність до росту, про надійне партнерство та довіру"]})]}),c.jsx(mb,{href:"#contact",children:"Дізнатися вартість"})]})]}),c.jsx("div",{children:c.jsxs(gb,{children:[c.jsxs(db,{children:[c.jsx(pb,{children:"Про що це?"}),c.jsxs(yb,{children:[c.jsx(gr,{children:c.jsx("p",{children:"Про прагнення почути чесну іншу думку/та або підтвердити власні гіпотези для власника/керівника"})}),c.jsx(gr,{children:c.jsx("p",{children:"Про бізнес-процеси та їх ефективність"})}),c.jsx(gr,{children:c.jsx("p",{children:"Про вектори розвитку бізнесу або проєкту"})}),c.jsx(gr,{children:c.jsx("p",{children:"Про практичний інструментарій для впровадження змін"})}),c.jsx(gr,{children:c.jsx("p",{children:"Про маркетинг, сервіс та комунікації в медичних бізнесах"})}),c.jsx(gr,{children:c.jsx("p",{children:"Про здоров'я працівників та стратегії підвищенння ефективності бізнесу"})})]})]}),c.jsxs(vb,{children:[c.jsx(Hf,{children:"Для кого"}),c.jsxs(Qf,{children:[c.jsx(vr,{children:c.jsx("p",{children:"Лідерам, які прагнуть змін"})}),c.jsx(vr,{children:c.jsx("p",{children:"Власникам, які хочуть отримати незалежку експертну думку"})}),c.jsx(vr,{children:c.jsx("p",{children:"Керівникам та маркетологам, яким потрібна підтримка"})}),c.jsx(vr,{children:c.jsx("p",{children:"Лікарям, яким важливо отримати пораду"})})]}),c.jsx(Hf,{children:"Формат"}),c.jsxs(Qf,{children:[c.jsx(vr,{children:c.jsx("p",{children:"Індивідуальна ментор-сесія (від 1 години)"})}),c.jsx(vr,{children:c.jsx("p",{children:"Персональний супровід на декілька місяців"})})]})]})]})})]}),wg=E.section`
  padding-top: 24px;
  padding-bottom: 24px;

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,bg=E.div`
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  background: var(--background-white);

  @media screen and (min-width: 1920px) {
    padding: 80px;
  }
`,wb=E.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  @media screen and (min-width: 1290px) {
    flex-direction: row;
    justify-content: space-between;
  }
`,Lo=E.div`
  position: relative;

  @media screen and (min-width: 1920px) {
    min-width: 370px;
  }
`,Sg=E.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1290px) {
    gap: 40px;
    margin-bottom: 40px;
    flex-direction: row;
  }
`,kg=E.div`
  min-width: 280px;
  gap: 16px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1920px) {
    min-width: 740px;
  }
`,Cg=E.div`
  @media screen and (min-width: 1920px) {
    padding: 24px;
  }
`,Ao=E.p`
  display: flex;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  min-width: 200px;

  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: var(--typography-white);

  @media screen and (min-width: 1920px) {
    justify-content: center;
    width: 100%;
    font-size: 20px;
    line-height: 1.4;
    top: 50%;
    left: 50%;
  }
`,Eg=E.h2`
  color: var(--typography-black);
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;

  @media screen and (min-width: 1920px) {
    font-size: 48px;
    line-height: 56px;
  }
`,jg=E.h3`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 24px;
  color: var(--typography-bluedark);

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    margin-bottom: 16px;
  }
`,Og=E.p`
  font-size: 16px;
  line-height: 24px;
  color: var(--typography-bluedark);

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.4;
  }
`,_g=E.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  width: fit-content;
  margin-bottom: 12px;

  border-radius: 16px;
  padding: 4px 16px;
  color: var(--typography-bluedark);
  background-color: rgba(27, 54, 65, 0.2);

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    font-weight: 500;
    line-height: 1.3;
  }
`,Pg=E.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 24px;
  color: var(--typography-bluedark);

  height: 56px;
  padding: 8px 24px;
  border-radius: 16px;
  background-color: var(--primary-yellow);
  box-shadow: 0px 0px 8px 0px rgba(248, 248, 248, 0.08);

  &:hover,
  &:focus {
    font-weight: 600;
  }

  @media screen and (min-width: 1920px) {
    font-size: 16px;
    line-height: 1.5;
    margin-top: 28px;
    width: 260px;
  }
`,Tg=E.p`
  font-size: 18px;
  line-height: 1.3;
  font-weight: 600;
  margin-bottom: 16px;

  color: var(--typography-bluedark);

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    margin-bottom: 24px;
  }
`,Mg=E.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 24px;
  color: var(--typography-bluedark);

  @media screen and (min-width: 1920px) {
    font-size: 16px;
    line-height: 24px;
  }
`,Nt=E.li`
  padding-left: 22px;

  &::before {
    content: "\\2022";
    color: var(--typography-bluedark, #1b3641);
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }

  @media screen and (min-width: 1920px) {
    position: relative;
    padding-left: 24px;

    &::before {
      content: "";
      position: absolute;
      left: 6px;
      top: 50%;
      transform: translateY(-50%);
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background-color: #1b3641;
    }

    &:last-child::before {
      top: 26%;
    }
  }
`,_n=E.svg`
  width: 266px;
  height: 56px;

  @media screen and (min-width: 1920px) {
    width: 370px;
    height: 80px;
  }
`;function bb(e,t){if(t===e)return!1;const n=Object.values(t),r=Object.values(e);if(n.length!==r.length||n.some((o,s)=>o!==r[s]))return!0;const i=Object.keys(e);return Object.keys(t).some((o,s)=>o!==i[s])}function Sb(e,t){return e.matches[t]=!1,e.mediaQueries[t]={},e}function Rg(e){const t=Object.keys(e);return typeof window>"u"?t.reduce(Sb,{mediaQueries:{},matches:{}}):t.reduce((n,r)=>{const i=window.matchMedia(e[r]);return n.mediaQueries[r]=i,n.matches[r]=i.matches,n},{mediaQueries:{},matches:{}})}function kb(e,t){function n(r,i){return r[i]=e.mediaQueries[i].matches,r}switch(t.type){case"updateMatches":return{matches:Object.keys(e.mediaQueries).reduce(n,{}),mediaQueries:e.mediaQueries};case"setQueries":return Rg(t.queries)}}function Cb(e){const t=M.useRef(e),[n,r]=M.useReducer(kb,e,Rg);M.useEffect(()=>{bb(e,t.current)&&(r({type:"setQueries",queries:e}),t.current=e)},[e]);function i(){return r({type:"updateMatches"})}function o(a){const u=i;return typeof a.addListener<"u"?a.addListener(u):a.addEventListener("change",u),u}M.useEffect(()=>{const a=Object.values(n.mediaQueries),u=a.map(o);function f(d,m){typeof d.addListener<"u"?d.removeListener(u[m]):d.removeEventListener("change",u[m])}return()=>{a.forEach(f)}},[n.mediaQueries]);const{matches:s}=n,l=M.useMemo(()=>Object.values(s),[s]);return{matches:s,matchesAny:l.some(Boolean),matchesAll:l.length>0&&l.every(Boolean)}}function Ig(e){return Cb(Eb(e)).matchesAll}const pl={};function Eb(e){return pl[e]===void 0&&(pl[e]={default:e}),pl[e]}const jb=()=>{const e=Ig("(max-width: 768px)");return c.jsx(wg,{className:"container",children:c.jsxs(bg,{children:[c.jsxs(Sg,{children:[c.jsxs(kg,{children:[c.jsx(Eg,{children:"Індивідуальна ментор сесія"}),c.jsx(Og,{children:"Вирішення вашого індивідуального запиту"}),c.jsx(_g,{children:"від 1 години"}),c.jsx(Pg,{href:"#contact",children:"Замовити послугу"})]}),c.jsxs(Cg,{children:[c.jsx(jg,{children:"Питання, з якими можете звернутися"}),c.jsxs(Mg,{children:[c.jsx(Nt,{children:"Незалежна думка щодо маркетингу та розвитку"}),c.jsx(Nt,{children:"Порада по створенню відділу маркетингу або оцінка існуючої структури"}),c.jsx(Nt,{children:"Питання по роботі з підрядниками"}),c.jsx(Nt,{children:"Порада щодо оптимізації бізнес-процесів"}),c.jsx(Nt,{children:"Як вірно оцінити ефективність маркетингових дій"}),c.jsx(Nt,{children:"Які інструменти комунікацій використовувати"}),c.jsxs(Nt,{children:["Особисте питання по менеджменту та розвитку з питань управління"," ","здоров'ям"]})]})]})]}),c.jsx(Tg,{children:"Шлях проведення менторської сесії"}),c.jsxs(wb,{children:[c.jsxs(Lo,{children:[e?c.jsx(_n,{children:c.jsx("use",{href:`${re}#icon-rectangle-mob`})}):c.jsx(_n,{children:c.jsx("use",{href:`${re}#icon-rectangle`})}),c.jsx(Ao,{children:"Заповнення брифу"})]}),c.jsxs(Lo,{children:[e?c.jsx(_n,{children:c.jsx("use",{href:`${re}#icon-rectangle-mob`})}):c.jsx(_n,{children:c.jsx("use",{href:`${re}#icon-rectangle`})}),c.jsx(Ao,{children:"Діагностика ситуації"})]}),c.jsxs(Lo,{children:[e?c.jsx(_n,{children:c.jsx("use",{href:`${re}#icon-rectangle-mob`})}):c.jsx(_n,{children:c.jsx("use",{href:`${re}#icon-rectangle`})}),c.jsx(Ao,{children:"Проведення сесії"})]}),c.jsxs(Lo,{children:[e?c.jsx(_n,{children:c.jsx("use",{href:`${re}#icon-rectangle-mob`})}):c.jsx(_n,{children:c.jsx("use",{href:`${re}#icon-rectangle`})}),c.jsx(Ao,{children:"Рекомендації"})]})]})]})})},Ob=E.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  @media screen and (min-width: 1920px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 24px;
  }
`,Qt=E.svg`
  width: 260px;
  height: 60px;

  @media screen and (min-width: 1920px) {
    width: 285px;
    height: 80px;
  }
`,di=E.div`
  position: relative;
  height: 60px;

  @media screen and (min-width: 1920px) {
    min-width: 285px;
  }
`;E.div`
  min-width: 740px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;const fi=E.p`
  display: flex;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  min-width: 200px;

  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: var(--typography-white);

  @media screen and (min-width: 1920px) {
    width: 100%;
    justify-content: center;
    top: 70%;
    font-size: 20px;
    line-height: 1.4;
  }
`,_b=()=>{const e=Ig("(max-width: 768px)");return c.jsx(wg,{className:"container",children:c.jsxs(bg,{children:[c.jsxs(Sg,{children:[c.jsxs(kg,{children:[c.jsx(Eg,{children:"Персональний супровід"}),c.jsx(Og,{children:"Пропрацьовуємо ваші запити та досягаємо посавлених цілей"}),c.jsx(_g,{children:"від 2 місяців тісної взаємодії"}),c.jsx(Pg,{href:"#contact",children:"Замовити послугу"})]}),c.jsxs(Cg,{children:[c.jsx(jg,{children:"Питання, з якими можете звернутися"}),c.jsxs(Mg,{children:[c.jsx(Nt,{children:"Зануритись в бізнес-процеси та зрозуміти, де є точки зростання"}),c.jsx(Nt,{children:"Зрозуміти що таке маркетинг та як він працює у вашому бізнесі"}),c.jsx(Nt,{children:"Супровід розробки та впровадження стратегій"}),c.jsx(Nt,{children:"Особисті питання по медичному менеджменту, маркетингу та розвитку, управління здоров'ям"})]})]})]}),c.jsx(Tg,{children:"Шлях проведення менторського супроводу"}),c.jsxs(Ob,{children:[c.jsxs(di,{children:[e?c.jsx(Qt,{children:c.jsx("use",{href:`${re}#icon-rectangle-mob`})}):c.jsx(Qt,{children:c.jsx("use",{href:`${re}#icon-rectangle2`})}),c.jsx(fi,{children:"Заповнення брифу"})]}),c.jsxs(di,{children:[e?c.jsx(Qt,{children:c.jsx("use",{href:`${re}#icon-rectangle-mob`})}):c.jsx(Qt,{children:c.jsx("use",{href:`${re}#icon-rectangle2`})}),c.jsx(fi,{children:"Діагностика ситуації"})]}),c.jsxs(di,{children:[e?c.jsx(Qt,{children:c.jsx("use",{href:`${re}#icon-rectangle-mob`})}):c.jsx(Qt,{children:c.jsx("use",{href:`${re}#icon-rectangle2`})}),c.jsx(fi,{children:"Визначення зон росту"})]}),c.jsxs(di,{children:[e?c.jsx(Qt,{children:c.jsx("use",{href:`${re}#icon-rectangle-mob`})}):c.jsx(Qt,{children:c.jsx("use",{href:`${re}#icon-rectangle2`})}),c.jsx(fi,{children:"Менторинг"})]}),c.jsxs(di,{children:[e?c.jsx(Qt,{children:c.jsx("use",{href:`${re}#icon-rectangle-mob`})}):c.jsx(Qt,{children:c.jsx("use",{href:`${re}#icon-rectangle2`})}),c.jsx(fi,{children:"Рекомендації"})]})]})]})})},_a=()=>{const e=nr.useMediaQuery({maxWidth:767}),t=nr.useMediaQuery({minWidth:768,maxWidth:1439}),n=nr.useMediaQuery({minWidth:1440,maxWidth:1919}),r=nr.useMediaQuery({minWidth:1920});return e&&"mobile"||t&&"tablet"||n&&"desktop"||r&&"largeDesktop"},Pb="/healthy-management-project/assets/denta_derm1x-JWCICTe_.webp",Tb="/healthy-management-project/assets/medialt1x-5LMkh0v8.webp",Mb="/healthy-management-project/assets/cures1x--AoJBOWJ.webp",Rb="/healthy-management-project/assets/clinic1x-YgK5Wnno.webp",Ib="/healthy-management-project/assets/kmklam1x-FlPeEOTs.webp",Lb="/healthy-management-project/assets/symmetrica1x-hhcOddzB.webp",hl=[{image:Pb,category:"DentaDerm",title:"Діагностика бізнес-процесів, маркетингу, сервісу, розробка стратегії розвитку, менторство",about:["Діагностика бізнес-процесів та маркетингу","Стратегія розвитку","Підбір команди маркетингу","Менторство"],details:[{title:"Завдання:",about:["Розробка стратегії розвитку","Розробка нового сайту клініки","Пошук команди маркетингу"],comment:"Дії в результаті розробки стратегії розвитку передбачали роботу над проєктом в новому позиціонуванні,  пошук зовнішньої та внутрішньої команди для реалізації нового сайту, ведення соцмереж"},{title:"В результаті роботи над проєктом:",about:["Розроблені вектори розвитку","Розроблений та впроваджений новий сайт","Підібрана команда маркетингового супроводу"],comment:"В результаті співпраці партнер отримав комплексне бачення просування, сформована команда маркетингу"}]},{image:Tb,category:"Medialt",title:"Діагностика бізнес-процесів, маркетингу, сервісу, розробка стратегії розвитку, менторство",about:["Аудит ринку та конкурентів","Аудит маркетингу та сервісу","Розробка стратегії розвитку"],details:[{title:"Завдання:",about:["Розробка стратегії розвитку"]},{title:"Робота над задачою була розділена на два етапи:",about:["Аналіз конкурентів, ринку, виявлення зовнішніх можливостей та загроз","Аналіз сервісу медичного центру, аналіз роботи контакт центру, маркетингу, наявної бази пацієнтів та внутрішніх бізнес-процесів"]},{title:"В результаті комплексного аудиту підготували стратегію розвитку, яка передбачала рекомендації щодо:",about:["Управління маркетингом","Оптимізації роботи сервісу","Можливості МІС","Етапи розвитку напрямків та клініки вцілому"],comment:"В результаті співпраці - за 5 місяців ріст обороту в два рази"}]},{image:Mb,category:"Cures",title:"Автоматизація комунікації з пацієнтами",about:["Створення та запуск 20 чат-ботів для клінік","Проведення консультацій та аудитів комунікацій клінік з пацієнтами","Розробка персональних протоколів спілкування з пацієнтами"],details:[{title:"Завдання:",about:["Автоматизація комунікації з пацієнтами"]},{title:"В результаті роботи над проєктом:",about:["Розвиток проєкту по створенню чат-ботів для медичних центрів","Розробка протоколів супроводу та опитувальників для клінік","Проведення зустрічей та комунікацій з клініками","Розробка алгоритмів та запуск чат-ботів"],comment:"В результаті співпраці над проєктом запуск 20 чат-ботів для медичних центрів"}]},{image:Rb,category:"Клініка ім. ак. Юрія Спіженка",title:"Менторство, діагностика бізнес-процесів, маркетингу та сервісу, розробка стратегії розвитку",about:["Діагностика бізнес-процесів","Аудит маркетингу та сервісу","Розробка стратегії розвитку та маркетингу","Розробка та впровадження комунікаційної стратегії","Ведення маркетингових активностей "],details:[{title:"Завдання:",about:["Рестарт клініки у воєний час"]},{title:"Робота над задачею була розділена на три етапи:",about:["Діагностика конкурентів, ринку, виявлення зовнішніх можливостей та загроз","Діагностика сервісу медичного центру, аналіз роботи контакт центру, маркетингу, наявної бази пацієнтів та внутрішніх бізнес-процесів","Розробка та впровадження стратегії маркетингу, комунікації та сервісу, супровід рекламних кампаній, оптимізація бізнес-процесів"],comment:"В результаті співпраці над проєктом: збільшення доходу клініки, вихід на довоєний об’єм"}]},{image:Ib,category:"KMKlab",title:"Діагностика маркетингу, сервісу, бізнес-процесів",about:["Аудит маркетингу та інструментів комунікацій","Аудит сервісу","Розробка рекомендацій щодо розвитку"],details:[{title:"Завдання:",about:["Аудит поточної маркетингової стратегії","Аудит сервісу","Формування рекомендацій по розвитку"]},{title:"Робота над задачою була розділена на два етапи:",about:["Відвідування всіх відділень лабораторій з метою формування рекомендацій по кожній локації","Аналіз поточної ситуації маркетингу та комунікацій, ведення соціальних мереж"],comment:"В результаті співпраці проаналізовано роботу відділу маркетингу та підрядників та надані рекомендації щодо структури відділу, сформовані подальші  кроки  маркетингової  та сервісної стратегії"}]},{image:Lb,category:"Symmetrica",title:"Менторство, діагностика маркетингу, сервісу, бізнес-процесів",about:["Аудит маркетингу та сервісу","Розробка рекомендацій щодо розвитку","Оптимізація бізнес-процесів"],details:[{title:"Завдання:",about:["Діагностика поточної маркетингової діяльності та комунікацій","Аудит сервісу","Аудит роботи підрядників","Формування рекомендацій по розвитку"]},{title:"В результаті роботи над проєктом:",about:["Проведений поточний аудит шляху пацієнта, виявлені точки зростання сервісу","Проаналізовано роботу відділу маркетингу і підрядників та надані рекомендації щодо структури відділу","Надані рекомендації щодо формування подальших кроків маркетингової  та сервісної стратегії","Сформовані конверсійні показники та вектори руху","Надана менторська підтримка"]}]}],Ab=E.section`
  padding-top: 40px;
  padding-bottom: 40px;
  @media screen and (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,Db=E.h2`
  font-size: 48px;
  font-weight: 600;
  line-height: calc(56 / 48);

  margin-bottom: 40px;
`,Fb=E.ul`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
  }
`,Nb=E.span`
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  margin-top: 4px;
  padding-top: 20px;

  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: center;
  text-align: center;
`,Vb=E.svg`
  fill: currentColor;
  stroke: currentColor;

  width: 24px;
  height: 24px;
`,zb=E.li`
  width: 100%;
  padding: 24px;
  border-radius: 8px;
  height: 772px;

  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  background-color: var(--background-white);

  overflow: hidden;
  position: relative;
  @media screen and (min-width: 768px) {
    width: calc((100% - (2 * 24px)) / 3);
    padding: 40px;
    border-radius: 16px;
    height: 808px;

    &:hover > div {
      opacity: 1;
    }
  }
`,$b=E.div`
  opacity: ${e=>e.isVisible?1:0};
  height: 100%;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;

  background-repeat: no-repeat;
  background-position: center bottom;
  background-image: linear-gradient(
      0deg,
      rgba(22, 23, 23, 0.5) 0%,
      rgba(22, 23, 23, 0.5) 100%
    ),
    linear-gradient(0deg, rgba(27, 54, 65, 0.8) 0%, rgba(27, 54, 65, 0.8) 100%),
    url(${e=>e.image||""});
  background-size: cover;

  transition: opacity var(--transition-dur-and-func);
`,Ub=E.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Bb=E.h4`
  font-size: ${e=>e.forDetail?"18px":"16px"};
  font-weight: 600;
  line-height: calc(${e=>e.forDetail?24/18:24/16});

  @media screen and (min-width: 768px) {
    font-size: ${e=>e.forDetail?"24px":"20px"};
    line-height: calc(${e=>e.forDetail?32/24:28/20});
  }
`,Hb=E.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Wb=E.li`
  font-size: 14px;
  font-weight: 500;
  line-height: calc(18 / 14);

  display: flex;
  gap: 8px;

  & > svg {
    max-width: 24px;
    height: 24px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,Qb=E.p`
  font-size: ${e=>e.additionalComment?"14px":"16px"};
  font-weight: ${e=>e.additionalComment?500:600};
  line-height: calc(
    ${e=>e.additionalComment?18/14:24/16}
  );
  @media screen and (min-width: 768px) {
    font-size: ${e=>e.additionalComment?"16px":"20px"};
    font-weight: ${e=>e.additionalComment?500:600};
    line-height: calc(
      ${e=>e.additionalComment?24/16:28/20}
    );
  }
`,Yb=E.svg`
  fill: currentColor;
  stroke: currentColor;
`,Wc=({title:e,about:t,comment:n,additionalComment:r=!1})=>c.jsxs(Ub,{children:[c.jsx(Bb,{forDetail:r,children:e}),c.jsx(Hb,{children:t==null?void 0:t.map(i=>c.jsxs(Wb,{children:[c.jsx(Yb,{children:c.jsx("use",{href:re+"#icon-done"})}),i]},i))}),n&&c.jsx(Qb,{additionalComment:r,children:n})]}),Kb=E.div`
  padding: 24px;
  display: flex;
  gap: 24px;
  flex-direction: column;

  color: var(--background-whitegrey, #f4f4f6);
  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`,Gb=E.h3`
  padding: 4px 16px;
  border-radius: 16px;
  background: rgba(244, 244, 246, 0.1);
  font-size: 18px;
  font-weight: 600;
  line-height: calc(24 / 18);
  display: ${e=>e.symbols>20?"block":"inline"};

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: calc(32 / 24);
    display: inline;
  }
`,Xb=E.svg`
  fill: currentColor;
  stroke: currentColor;

  width: 24px;
  height: 24px;

  position: absolute;
  right: 28px;
  top: 28px;
`,qb=({dataList:{details:e,category:t}})=>{const n=_a();return c.jsxs(Kb,{children:[c.jsxs("div",{children:[c.jsx(Gb,{symbols:t.length,children:t}),n==="mobile"&&c.jsx(Xb,{children:c.jsx("use",{href:re+"#icon-close"})})]}),e.map((r,i)=>c.jsx(Wc,{title:r.title,about:r.about,comment:r.comment,additionalComment:i===0},r.title))]})},Jb=E.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  color: var(--typography-bluedark, #1b3641);
`,Zb=E.h3`
  font-size: 18px;
  line-height: calc(24 / 18);
  font-weight: 600;
  display: ${e=>e.symbols>20?"block":"inline"};
  padding: 4px 16px;

  border-radius: 16px;
  background: rgba(27, 54, 65, 0.2);
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: calc(38 / 24);
    display: inline;
  }
`,eS=E.img`
  height: 279px;
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    height: 300px;
  }
`,tS=E.span`
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  text-align: center;
`,nS=({dataList:e,onClick:t})=>{const n=_a(),{category:r,title:i,about:o=[],image:s}=e;return c.jsxs(Jb,{onClick:t,children:[c.jsx(eS,{src:s,alt:i}),c.jsx("div",{children:c.jsx(Zb,{symbols:r.length,children:r})}),c.jsx(Wc,{title:i,about:o}),n==="mobile"&&c.jsx(tS,{children:"Детальніше"})]})},rS=({item:e})=>{const[t,n]=M.useState(!1),r=_a(),i=()=>{r==="mobile"&&n(o=>!o)};return c.jsxs(zb,{children:[c.jsx(nS,{dataList:e,onClick:i}),c.jsx($b,{isVisible:t,onClick:i,image:e.image,className:!t&&r==="mobile"?"visually-hidden":"",children:c.jsx(qb,{dataList:e})})]})},iS=()=>{const e=_a(),[t,n]=M.useState(e==="mobile"?[...hl.slice(0,3)]:[...hl]),r=()=>{t.length>4?n(i=>i.slice(0,3)):n([...hl])};return c.jsxs(Ab,{id:"projects",className:"container",style:{paddingTop:"80px",paddingBottom:"80px"},children:[c.jsx(Db,{children:"Проєкти"}),c.jsx(Fb,{children:t.map(i=>c.jsx(rS,{item:i},i.category))}),e==="mobile"&&c.jsxs(Nb,{onClick:r,children:[t.length>3?"Менше проєктів":"Більше проєктів",c.jsx(Vb,{children:c.jsx("use",{href:re+`${t.length>3?"#icon-arrowup":"#icon-arrowdown"}`})})]})]})},oS=E.section`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  padding-bottom: 24px;
  gap: 24px;

  @media screen and (min-width: 1920px) {
    flex-direction: row;
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,sS=E.div`
  padding: 24px;
  border-radius: 16px;
  background: var(--background-white);

  @media screen and (min-width: 1920px) {
    padding: 80px;
    max-width: 828px;
    box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  }
`,aS=E.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;

  @media screen and (min-width: 1920px) {
    gap: 40px;
    margin-bottom: 40px;
  }
`,lS=E.h2`
  color: var(--typography-bluedark);
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;

  @media screen and (min-width: 1920px) {
    font-size: 48px;
    line-height: 56px;
  }
`,uS=E.h2`
  color: var(--typography-bluedark);
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    line-height: 28px;
  }
`,cS=E.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 1920px) {
    gap: 24px;
  }
`,ml=E.li`
  display: flex;
  align-items: center;
  gap: 16px;
  border-radius: 16px;
  background: var(--background-whitegrey);
  padding: 16px;
`,gl=E.svg`
  width: 24px;
  height: 24px;
  fill: var(--background-white);
  stroke-width: 4px;
`,vl=E.p`
  width: 207px;
  color: var(--typography-bluedark);
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  @media screen and (min-width: 1920px) {
    width: 100%;
    font-size: 20px;
    line-height: 28px;
  }
`,dS=E.img`
  width: 100%;
  height: 327px;
  border-radius: 16px;

  @media screen and (min-width: 1920px) {
    width: 828px;
    height: 664px;
  }
`,fS="/healthy-management-project/assets/olga_with_book1x-kIN8FAVO.webp",pS="/healthy-management-project/assets/olga_with_book1x-KTuULWu1.jpg",hS="/healthy-management-project/assets/olga_with_book2x-lES61yI6.jpg",mS=()=>c.jsxs(oS,{className:"container",children:[c.jsxs(sS,{children:[c.jsxs(aS,{children:[c.jsx(lS,{children:"Принципи роботи"}),c.jsx(uS,{children:"Наші принципи роботи полягають у співдії з ціннісними брендами та командами, які готові до чесної співпраці, щоб сприяти досягненню поставлених цілей. Готові ділитися власним досвідом та створювати стратегії здорового менеджменту та розвитку, маркетингу та сервісу"})]}),c.jsxs(cS,{children:[c.jsxs(ml,{children:[c.jsx(gl,{children:c.jsx("use",{href:`${re}#icon-done-yellow`})}),c.jsx(vl,{children:"Більше 18 років досвіду в маркетингу та комунікаціях"})]}),c.jsxs(ml,{children:[c.jsx(gl,{children:c.jsx("use",{href:`${re}#icon-done-yellow`})}),c.jsx(vl,{children:"Глибоке розуміння бізнес-процесів медичних закладів"})]}),c.jsxs(ml,{children:[c.jsx(gl,{children:c.jsx("use",{href:`${re}#icon-done-yellow`})}),c.jsx(vl,{children:"Використання принципів доказової медицини"})]})]})]}),c.jsxs("picture",{children:[c.jsx("source",{srcSet:`${hS} 2x, ${pS} 1x`,media:"(min-width: 1920px)"}),c.jsx(dS,{src:fS,alt:"Ольга Поліщук"})]})]}),gS=E.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  position: fixed;
  bottom: var(--scroll-to-top-bottom);
  right: 120px;
  padding: 8px;
  background-color: var(--primary-yellow);
  border: none;
  border-radius: 16px;
`,vS=()=>{const[e,t]=M.useState(!1);M.useEffect(()=>{const r=()=>{const i=window.scrollY,o=document.getElementById("footer"),s=window.innerHeight+window.scrollY-o.offsetTop,l=Math.max(80,s);t(i>480||s>80),document.documentElement.style.setProperty("--scroll-to-top-bottom",`${l}px`)};return window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}},[]);const n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return c.jsx(c.Fragment,{children:e&&c.jsx("section",{className:"container",children:c.jsx(gS,{onClick:n,children:c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${re}#icon-arrowup`})})})})})};function Lg(e,t){return function(){return e.apply(t,arguments)}}const{toString:yS}=Object.prototype,{getPrototypeOf:Qc}=Object,Pa=(e=>t=>{const n=yS.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),rn=e=>(e=e.toLowerCase(),t=>Pa(t)===e),Ta=e=>t=>typeof t===e,{isArray:Zr}=Array,Ji=Ta("undefined");function xS(e){return e!==null&&!Ji(e)&&e.constructor!==null&&!Ji(e.constructor)&&Tt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ag=rn("ArrayBuffer");function wS(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ag(e.buffer),t}const bS=Ta("string"),Tt=Ta("function"),Dg=Ta("number"),Ma=e=>e!==null&&typeof e=="object",SS=e=>e===!0||e===!1,is=e=>{if(Pa(e)!=="object")return!1;const t=Qc(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},kS=rn("Date"),CS=rn("File"),ES=rn("Blob"),jS=rn("FileList"),OS=e=>Ma(e)&&Tt(e.pipe),_S=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Tt(e.append)&&((t=Pa(e))==="formdata"||t==="object"&&Tt(e.toString)&&e.toString()==="[object FormData]"))},PS=rn("URLSearchParams"),TS=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function oo(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Zr(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let l;for(r=0;r<s;r++)l=o[r],t.call(null,e[l],l,e)}}function Fg(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const Ng=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Vg=e=>!Ji(e)&&e!==Ng;function Mu(){const{caseless:e}=Vg(this)&&this||{},t={},n=(r,i)=>{const o=e&&Fg(t,i)||i;is(t[o])&&is(r)?t[o]=Mu(t[o],r):is(r)?t[o]=Mu({},r):Zr(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&oo(arguments[r],n);return t}const MS=(e,t,n,{allOwnKeys:r}={})=>(oo(t,(i,o)=>{n&&Tt(i)?e[o]=Lg(i,n):e[o]=i},{allOwnKeys:r}),e),RS=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),IS=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},LS=(e,t,n,r)=>{let i,o,s;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!r||r(s,e,t))&&!l[s]&&(t[s]=e[s],l[s]=!0);e=n!==!1&&Qc(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},AS=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},DS=e=>{if(!e)return null;if(Zr(e))return e;let t=e.length;if(!Dg(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},FS=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Qc(Uint8Array)),NS=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},VS=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},zS=rn("HTMLFormElement"),$S=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Yf=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),US=rn("RegExp"),zg=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};oo(n,(i,o)=>{let s;(s=t(i,o,e))!==!1&&(r[o]=s||i)}),Object.defineProperties(e,r)},BS=e=>{zg(e,(t,n)=>{if(Tt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Tt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},HS=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return Zr(e)?r(e):r(String(e).split(t)),n},WS=()=>{},QS=(e,t)=>(e=+e,Number.isFinite(e)?e:t),yl="abcdefghijklmnopqrstuvwxyz",Kf="0123456789",$g={DIGIT:Kf,ALPHA:yl,ALPHA_DIGIT:yl+yl.toUpperCase()+Kf},YS=(e=16,t=$g.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function KS(e){return!!(e&&Tt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const GS=e=>{const t=new Array(10),n=(r,i)=>{if(Ma(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=Zr(r)?[]:{};return oo(r,(s,l)=>{const a=n(s,i+1);!Ji(a)&&(o[l]=a)}),t[i]=void 0,o}}return r};return n(e,0)},XS=rn("AsyncFunction"),qS=e=>e&&(Ma(e)||Tt(e))&&Tt(e.then)&&Tt(e.catch),R={isArray:Zr,isArrayBuffer:Ag,isBuffer:xS,isFormData:_S,isArrayBufferView:wS,isString:bS,isNumber:Dg,isBoolean:SS,isObject:Ma,isPlainObject:is,isUndefined:Ji,isDate:kS,isFile:CS,isBlob:ES,isRegExp:US,isFunction:Tt,isStream:OS,isURLSearchParams:PS,isTypedArray:FS,isFileList:jS,forEach:oo,merge:Mu,extend:MS,trim:TS,stripBOM:RS,inherits:IS,toFlatObject:LS,kindOf:Pa,kindOfTest:rn,endsWith:AS,toArray:DS,forEachEntry:NS,matchAll:VS,isHTMLForm:zS,hasOwnProperty:Yf,hasOwnProp:Yf,reduceDescriptors:zg,freezeMethods:BS,toObjectSet:HS,toCamelCase:$S,noop:WS,toFiniteNumber:QS,findKey:Fg,global:Ng,isContextDefined:Vg,ALPHABET:$g,generateString:YS,isSpecCompliantForm:KS,toJSONObject:GS,isAsyncFn:XS,isThenable:qS};function de(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}R.inherits(de,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:R.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ug=de.prototype,Bg={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Bg[e]={value:e}});Object.defineProperties(de,Bg);Object.defineProperty(Ug,"isAxiosError",{value:!0});de.from=(e,t,n,r,i,o)=>{const s=Object.create(Ug);return R.toFlatObject(e,s,function(a){return a!==Error.prototype},l=>l!=="isAxiosError"),de.call(s,e.message,t,n,r,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};const JS=null;function Ru(e){return R.isPlainObject(e)||R.isArray(e)}function Hg(e){return R.endsWith(e,"[]")?e.slice(0,-2):e}function Gf(e,t,n){return e?e.concat(t).map(function(i,o){return i=Hg(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function ZS(e){return R.isArray(e)&&!e.some(Ru)}const e2=R.toFlatObject(R,{},null,function(t){return/^is[A-Z]/.test(t)});function Ra(e,t,n){if(!R.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=R.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,S){return!R.isUndefined(S[v])});const r=n.metaTokens,i=n.visitor||f,o=n.dots,s=n.indexes,a=(n.Blob||typeof Blob<"u"&&Blob)&&R.isSpecCompliantForm(t);if(!R.isFunction(i))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(R.isDate(g))return g.toISOString();if(!a&&R.isBlob(g))throw new de("Blob is not supported. Use a Buffer instead.");return R.isArrayBuffer(g)||R.isTypedArray(g)?a&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function f(g,v,S){let p=g;if(g&&!S&&typeof g=="object"){if(R.endsWith(v,"{}"))v=r?v:v.slice(0,-2),g=JSON.stringify(g);else if(R.isArray(g)&&ZS(g)||(R.isFileList(g)||R.endsWith(v,"[]"))&&(p=R.toArray(g)))return v=Hg(v),p.forEach(function(y,b){!(R.isUndefined(y)||y===null)&&t.append(s===!0?Gf([v],b,o):s===null?v:v+"[]",u(y))}),!1}return Ru(g)?!0:(t.append(Gf(S,v,o),u(g)),!1)}const d=[],m=Object.assign(e2,{defaultVisitor:f,convertValue:u,isVisitable:Ru});function x(g,v){if(!R.isUndefined(g)){if(d.indexOf(g)!==-1)throw Error("Circular reference detected in "+v.join("."));d.push(g),R.forEach(g,function(p,h){(!(R.isUndefined(p)||p===null)&&i.call(t,p,R.isString(h)?h.trim():h,v,m))===!0&&x(p,v?v.concat(h):[h])}),d.pop()}}if(!R.isObject(e))throw new TypeError("data must be an object");return x(e),t}function Xf(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Yc(e,t){this._pairs=[],e&&Ra(e,this,t)}const Wg=Yc.prototype;Wg.append=function(t,n){this._pairs.push([t,n])};Wg.toString=function(t){const n=t?function(r){return t.call(this,r,Xf)}:Xf;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function t2(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Qg(e,t,n){if(!t)return e;const r=n&&n.encode||t2,i=n&&n.serialize;let o;if(i?o=i(t,n):o=R.isURLSearchParams(t)?t.toString():new Yc(t,n).toString(r),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class n2{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){R.forEach(this.handlers,function(r){r!==null&&t(r)})}}const qf=n2,Yg={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},r2=typeof URLSearchParams<"u"?URLSearchParams:Yc,i2=typeof FormData<"u"?FormData:null,o2=typeof Blob<"u"?Blob:null,s2={isBrowser:!0,classes:{URLSearchParams:r2,FormData:i2,Blob:o2},protocols:["http","https","file","blob","url","data"]},Kg=typeof window<"u"&&typeof document<"u",a2=(e=>Kg&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),l2=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",u2=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Kg,hasStandardBrowserEnv:a2,hasStandardBrowserWebWorkerEnv:l2},Symbol.toStringTag,{value:"Module"})),Jt={...u2,...s2};function c2(e,t){return Ra(e,new Jt.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return Jt.isNode&&R.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function d2(e){return R.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function f2(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function Gg(e){function t(n,r,i,o){let s=n[o++];const l=Number.isFinite(+s),a=o>=n.length;return s=!s&&R.isArray(i)?i.length:s,a?(R.hasOwnProp(i,s)?i[s]=[i[s],r]:i[s]=r,!l):((!i[s]||!R.isObject(i[s]))&&(i[s]=[]),t(n,r,i[s],o)&&R.isArray(i[s])&&(i[s]=f2(i[s])),!l)}if(R.isFormData(e)&&R.isFunction(e.entries)){const n={};return R.forEachEntry(e,(r,i)=>{t(d2(r),i,n,0)}),n}return null}function p2(e,t,n){if(R.isString(e))try{return(t||JSON.parse)(e),R.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Kc={transitional:Yg,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=R.isObject(t);if(o&&R.isHTMLForm(t)&&(t=new FormData(t)),R.isFormData(t))return i&&i?JSON.stringify(Gg(t)):t;if(R.isArrayBuffer(t)||R.isBuffer(t)||R.isStream(t)||R.isFile(t)||R.isBlob(t))return t;if(R.isArrayBufferView(t))return t.buffer;if(R.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return c2(t,this.formSerializer).toString();if((l=R.isFileList(t))||r.indexOf("multipart/form-data")>-1){const a=this.env&&this.env.FormData;return Ra(l?{"files[]":t}:t,a&&new a,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),p2(t)):t}],transformResponse:[function(t){const n=this.transitional||Kc.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&R.isString(t)&&(r&&!this.responseType||i)){const s=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(l){if(s)throw l.name==="SyntaxError"?de.from(l,de.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Jt.classes.FormData,Blob:Jt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};R.forEach(["delete","get","head","post","put","patch"],e=>{Kc.headers[e]={}});const Gc=Kc,h2=R.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),m2=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),n=s.substring(0,i).trim().toLowerCase(),r=s.substring(i+1).trim(),!(!n||t[n]&&h2[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Jf=Symbol("internals");function pi(e){return e&&String(e).trim().toLowerCase()}function os(e){return e===!1||e==null?e:R.isArray(e)?e.map(os):String(e)}function g2(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const v2=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function xl(e,t,n,r,i){if(R.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!R.isString(t)){if(R.isString(r))return t.indexOf(r)!==-1;if(R.isRegExp(r))return r.test(t)}}function y2(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function x2(e,t){const n=R.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,s){return this[r].call(this,t,i,o,s)},configurable:!0})})}class Ia{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(l,a,u){const f=pi(a);if(!f)throw new Error("header name must be a non-empty string");const d=R.findKey(i,f);(!d||i[d]===void 0||u===!0||u===void 0&&i[d]!==!1)&&(i[d||a]=os(l))}const s=(l,a)=>R.forEach(l,(u,f)=>o(u,f,a));return R.isPlainObject(t)||t instanceof this.constructor?s(t,n):R.isString(t)&&(t=t.trim())&&!v2(t)?s(m2(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=pi(t),t){const r=R.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return g2(i);if(R.isFunction(n))return n.call(this,i,r);if(R.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=pi(t),t){const r=R.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||xl(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(s){if(s=pi(s),s){const l=R.findKey(r,s);l&&(!n||xl(r,r[l],l,n))&&(delete r[l],i=!0)}}return R.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||xl(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return R.forEach(this,(i,o)=>{const s=R.findKey(r,o);if(s){n[s]=os(i),delete n[o];return}const l=t?y2(o):String(o).trim();l!==o&&delete n[o],n[l]=os(i),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return R.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&R.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Jf]=this[Jf]={accessors:{}}).accessors,i=this.prototype;function o(s){const l=pi(s);r[l]||(x2(i,s),r[l]=!0)}return R.isArray(t)?t.forEach(o):o(t),this}}Ia.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);R.reduceDescriptors(Ia.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});R.freezeMethods(Ia);const fn=Ia;function wl(e,t){const n=this||Gc,r=t||n,i=fn.from(r.headers);let o=r.data;return R.forEach(e,function(l){o=l.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function Xg(e){return!!(e&&e.__CANCEL__)}function so(e,t,n){de.call(this,e??"canceled",de.ERR_CANCELED,t,n),this.name="CanceledError"}R.inherits(so,de,{__CANCEL__:!0});function w2(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new de("Request failed with status code "+n.status,[de.ERR_BAD_REQUEST,de.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const b2=Jt.hasStandardBrowserEnv?{write(e,t,n,r,i,o){const s=[e+"="+encodeURIComponent(t)];R.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),R.isString(r)&&s.push("path="+r),R.isString(i)&&s.push("domain="+i),o===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function S2(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function k2(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function qg(e,t){return e&&!S2(t)?k2(e,t):t}const C2=Jt.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let s=o;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(s){const l=R.isString(s)?i(s):s;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function E2(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function j2(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,s;return t=t!==void 0?t:1e3,function(a){const u=Date.now(),f=r[o];s||(s=u),n[i]=a,r[i]=u;let d=o,m=0;for(;d!==i;)m+=n[d++],d=d%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-s<t)return;const x=f&&u-f;return x?Math.round(m*1e3/x):void 0}}function Zf(e,t){let n=0;const r=j2(50,250);return i=>{const o=i.loaded,s=i.lengthComputable?i.total:void 0,l=o-n,a=r(l),u=o<=s;n=o;const f={loaded:o,total:s,progress:s?o/s:void 0,bytes:l,rate:a||void 0,estimated:a&&s&&u?(s-o)/a:void 0,event:i};f[t?"download":"upload"]=!0,e(f)}}const O2=typeof XMLHttpRequest<"u",_2=O2&&function(e){return new Promise(function(n,r){let i=e.data;const o=fn.from(e.headers).normalize();let{responseType:s,withXSRFToken:l}=e,a;function u(){e.cancelToken&&e.cancelToken.unsubscribe(a),e.signal&&e.signal.removeEventListener("abort",a)}let f;if(R.isFormData(i)){if(Jt.hasStandardBrowserEnv||Jt.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((f=o.getContentType())!==!1){const[v,...S]=f?f.split(";").map(p=>p.trim()).filter(Boolean):[];o.setContentType([v||"multipart/form-data",...S].join("; "))}}let d=new XMLHttpRequest;if(e.auth){const v=e.auth.username||"",S=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(v+":"+S))}const m=qg(e.baseURL,e.url);d.open(e.method.toUpperCase(),Qg(m,e.params,e.paramsSerializer),!0),d.timeout=e.timeout;function x(){if(!d)return;const v=fn.from("getAllResponseHeaders"in d&&d.getAllResponseHeaders()),p={data:!s||s==="text"||s==="json"?d.responseText:d.response,status:d.status,statusText:d.statusText,headers:v,config:e,request:d};w2(function(y){n(y),u()},function(y){r(y),u()},p),d=null}if("onloadend"in d?d.onloadend=x:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(x)},d.onabort=function(){d&&(r(new de("Request aborted",de.ECONNABORTED,e,d)),d=null)},d.onerror=function(){r(new de("Network Error",de.ERR_NETWORK,e,d)),d=null},d.ontimeout=function(){let S=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const p=e.transitional||Yg;e.timeoutErrorMessage&&(S=e.timeoutErrorMessage),r(new de(S,p.clarifyTimeoutError?de.ETIMEDOUT:de.ECONNABORTED,e,d)),d=null},Jt.hasStandardBrowserEnv&&(l&&R.isFunction(l)&&(l=l(e)),l||l!==!1&&C2(m))){const v=e.xsrfHeaderName&&e.xsrfCookieName&&b2.read(e.xsrfCookieName);v&&o.set(e.xsrfHeaderName,v)}i===void 0&&o.setContentType(null),"setRequestHeader"in d&&R.forEach(o.toJSON(),function(S,p){d.setRequestHeader(p,S)}),R.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),s&&s!=="json"&&(d.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&d.addEventListener("progress",Zf(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",Zf(e.onUploadProgress)),(e.cancelToken||e.signal)&&(a=v=>{d&&(r(!v||v.type?new so(null,e,d):v),d.abort(),d=null)},e.cancelToken&&e.cancelToken.subscribe(a),e.signal&&(e.signal.aborted?a():e.signal.addEventListener("abort",a)));const g=E2(m);if(g&&Jt.protocols.indexOf(g)===-1){r(new de("Unsupported protocol "+g+":",de.ERR_BAD_REQUEST,e));return}d.send(i||null)})},Iu={http:JS,xhr:_2};R.forEach(Iu,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const ep=e=>`- ${e}`,P2=e=>R.isFunction(e)||e===null||e===!1,Jg={getAdapter:e=>{e=R.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let o=0;o<t;o++){n=e[o];let s;if(r=n,!P2(n)&&(r=Iu[(s=String(n)).toLowerCase()],r===void 0))throw new de(`Unknown adapter '${s}'`);if(r)break;i[s||"#"+o]=r}if(!r){const o=Object.entries(i).map(([l,a])=>`adapter ${l} `+(a===!1?"is not supported by the environment":"is not available in the build"));let s=t?o.length>1?`since :
`+o.map(ep).join(`
`):" "+ep(o[0]):"as no adapter specified";throw new de("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:Iu};function bl(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new so(null,e)}function tp(e){return bl(e),e.headers=fn.from(e.headers),e.data=wl.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Jg.getAdapter(e.adapter||Gc.adapter)(e).then(function(r){return bl(e),r.data=wl.call(e,e.transformResponse,r),r.headers=fn.from(r.headers),r},function(r){return Xg(r)||(bl(e),r&&r.response&&(r.response.data=wl.call(e,e.transformResponse,r.response),r.response.headers=fn.from(r.response.headers))),Promise.reject(r)})}const np=e=>e instanceof fn?e.toJSON():e;function Kr(e,t){t=t||{};const n={};function r(u,f,d){return R.isPlainObject(u)&&R.isPlainObject(f)?R.merge.call({caseless:d},u,f):R.isPlainObject(f)?R.merge({},f):R.isArray(f)?f.slice():f}function i(u,f,d){if(R.isUndefined(f)){if(!R.isUndefined(u))return r(void 0,u,d)}else return r(u,f,d)}function o(u,f){if(!R.isUndefined(f))return r(void 0,f)}function s(u,f){if(R.isUndefined(f)){if(!R.isUndefined(u))return r(void 0,u)}else return r(void 0,f)}function l(u,f,d){if(d in t)return r(u,f);if(d in e)return r(void 0,u)}const a={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l,headers:(u,f)=>i(np(u),np(f),!0)};return R.forEach(Object.keys(Object.assign({},e,t)),function(f){const d=a[f]||i,m=d(e[f],t[f],f);R.isUndefined(m)&&d!==l||(n[f]=m)}),n}const Zg="1.6.2",Xc={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Xc[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const rp={};Xc.transitional=function(t,n,r){function i(o,s){return"[Axios v"+Zg+"] Transitional option '"+o+"'"+s+(r?". "+r:"")}return(o,s,l)=>{if(t===!1)throw new de(i(s," has been removed"+(n?" in "+n:"")),de.ERR_DEPRECATED);return n&&!rp[s]&&(rp[s]=!0,console.warn(i(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,s,l):!0}};function T2(e,t,n){if(typeof e!="object")throw new de("options must be an object",de.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],s=t[o];if(s){const l=e[o],a=l===void 0||s(l,o,e);if(a!==!0)throw new de("option "+o+" must be "+a,de.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new de("Unknown option "+o,de.ERR_BAD_OPTION)}}const Lu={assertOptions:T2,validators:Xc},Pn=Lu.validators;class Ns{constructor(t){this.defaults=t,this.interceptors={request:new qf,response:new qf}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Kr(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&Lu.assertOptions(r,{silentJSONParsing:Pn.transitional(Pn.boolean),forcedJSONParsing:Pn.transitional(Pn.boolean),clarifyTimeoutError:Pn.transitional(Pn.boolean)},!1),i!=null&&(R.isFunction(i)?n.paramsSerializer={serialize:i}:Lu.assertOptions(i,{encode:Pn.function,serialize:Pn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=o&&R.merge(o.common,o[n.method]);o&&R.forEach(["delete","get","head","post","put","patch","common"],g=>{delete o[g]}),n.headers=fn.concat(s,o);const l=[];let a=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(a=a&&v.synchronous,l.unshift(v.fulfilled,v.rejected))});const u=[];this.interceptors.response.forEach(function(v){u.push(v.fulfilled,v.rejected)});let f,d=0,m;if(!a){const g=[tp.bind(this),void 0];for(g.unshift.apply(g,l),g.push.apply(g,u),m=g.length,f=Promise.resolve(n);d<m;)f=f.then(g[d++],g[d++]);return f}m=l.length;let x=n;for(d=0;d<m;){const g=l[d++],v=l[d++];try{x=g(x)}catch(S){v.call(this,S);break}}try{f=tp.call(this,x)}catch(g){return Promise.reject(g)}for(d=0,m=u.length;d<m;)f=f.then(u[d++],u[d++]);return f}getUri(t){t=Kr(this.defaults,t);const n=qg(t.baseURL,t.url);return Qg(n,t.params,t.paramsSerializer)}}R.forEach(["delete","get","head","options"],function(t){Ns.prototype[t]=function(n,r){return this.request(Kr(r||{},{method:t,url:n,data:(r||{}).data}))}});R.forEach(["post","put","patch"],function(t){function n(r){return function(o,s,l){return this.request(Kr(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}Ns.prototype[t]=n(),Ns.prototype[t+"Form"]=n(!0)});const ss=Ns;class qc{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(l=>{r.subscribe(l),o=l}).then(i);return s.cancel=function(){r.unsubscribe(o)},s},t(function(o,s,l){r.reason||(r.reason=new so(o,s,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new qc(function(i){t=i}),cancel:t}}}const M2=qc;function R2(e){return function(n){return e.apply(null,n)}}function I2(e){return R.isObject(e)&&e.isAxiosError===!0}const Au={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Au).forEach(([e,t])=>{Au[t]=e});const L2=Au;function ev(e){const t=new ss(e),n=Lg(ss.prototype.request,t);return R.extend(n,ss.prototype,t,{allOwnKeys:!0}),R.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return ev(Kr(e,i))},n}const ze=ev(Gc);ze.Axios=ss;ze.CanceledError=so;ze.CancelToken=M2;ze.isCancel=Xg;ze.VERSION=Zg;ze.toFormData=Ra;ze.AxiosError=de;ze.Cancel=ze.CanceledError;ze.all=function(t){return Promise.all(t)};ze.spread=R2;ze.isAxiosError=I2;ze.mergeConfig=Kr;ze.AxiosHeaders=fn;ze.formToJSON=e=>Gg(R.isHTMLForm(e)?new FormData(e):e);ze.getAdapter=Jg.getAdapter;ze.HttpStatusCode=L2;ze.default=ze;const A2=ze;function dr(e){"@babel/helpers - typeof";return dr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},dr(e)}function D2(e,t){if(dr(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(dr(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function tv(e){var t=D2(e,"string");return dr(t)==="symbol"?t:String(t)}function bi(e,t,n){return t=tv(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ip(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ip(Object(n),!0).forEach(function(r){bi(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ip(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function F2(e){if(Array.isArray(e))return e}function N2(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,s,l=[],a=!0,u=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);a=!0);}catch(f){u=!0,i=f}finally{try{if(!a&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(u)throw i}}return l}}function Du(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function nv(e,t){if(e){if(typeof e=="string")return Du(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Du(e,t)}}function V2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pn(e,t){return F2(e)||N2(e,t)||nv(e,t)||V2()}function z2(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function xn(e,t){if(e==null)return{};var n=z2(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var $2=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function U2(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,o=e.defaultValue,s=o===void 0?null:o,l=e.inputValue,a=e.menuIsOpen,u=e.onChange,f=e.onInputChange,d=e.onMenuClose,m=e.onMenuOpen,x=e.value,g=xn(e,$2),v=M.useState(l!==void 0?l:n),S=pn(v,2),p=S[0],h=S[1],y=M.useState(a!==void 0?a:i),b=pn(y,2),C=b[0],_=b[1],j=M.useState(x!==void 0?x:s),P=pn(j,2),T=P[0],I=P[1],B=M.useCallback(function(N,Q){typeof u=="function"&&u(N,Q),I(N)},[u]),D=M.useCallback(function(N,Q){var Y;typeof f=="function"&&(Y=f(N,Q)),h(Y!==void 0?Y:N)},[f]),L=M.useCallback(function(){typeof m=="function"&&m(),_(!0)},[m]),X=M.useCallback(function(){typeof d=="function"&&d(),_(!1)},[d]),Z=l!==void 0?l:p,ee=a!==void 0?a:C,ve=x!==void 0?x:T;return G(G({},g),{},{inputValue:Z,menuIsOpen:ee,onChange:B,onInputChange:D,onMenuClose:X,onMenuOpen:L,value:ve})}function B2(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function op(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,tv(r.key),r)}}function H2(e,t,n){return t&&op(e.prototype,t),n&&op(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Fu(e,t){return Fu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Fu(e,t)}function W2(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Fu(e,t)}function Vs(e){return Vs=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Vs(e)}function Q2(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Y2(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function K2(e,t){if(t&&(dr(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Y2(e)}function G2(e){var t=Q2();return function(){var r=Vs(e),i;if(t){var o=Vs(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return K2(this,i)}}function X2(e){if(Array.isArray(e))return Du(e)}function q2(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function J2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jc(e){return X2(e)||q2(e)||nv(e)||J2()}function Z2(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const ek=Math.min,tk=Math.max,zs=Math.round,Do=Math.floor,$s=e=>({x:e,y:e});function nk(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function rv(e){return ov(e)?(e.nodeName||"").toLowerCase():"#document"}function Bt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function iv(e){var t;return(t=(ov(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function ov(e){return e instanceof Node||e instanceof Bt(e).Node}function Nu(e){return e instanceof Element||e instanceof Bt(e).Element}function Zc(e){return e instanceof HTMLElement||e instanceof Bt(e).HTMLElement}function sp(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Bt(e).ShadowRoot}function sv(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=ed(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(i)}function rk(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ik(e){return["html","body","#document"].includes(rv(e))}function ed(e){return Bt(e).getComputedStyle(e)}function ok(e){if(rv(e)==="html")return e;const t=e.assignedSlot||e.parentNode||sp(e)&&e.host||iv(e);return sp(t)?t.host:t}function av(e){const t=ok(e);return ik(t)?e.ownerDocument?e.ownerDocument.body:e.body:Zc(t)&&sv(t)?t:av(t)}function Us(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=av(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),s=Bt(i);return o?t.concat(s,s.visualViewport||[],sv(i)?i:[],s.frameElement&&n?Us(s.frameElement):[]):t.concat(i,Us(i,[],n))}function sk(e){const t=ed(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=Zc(e),o=i?e.offsetWidth:n,s=i?e.offsetHeight:r,l=zs(n)!==o||zs(r)!==s;return l&&(n=o,r=s),{width:n,height:r,$:l}}function td(e){return Nu(e)?e:e.contextElement}function Sl(e){const t=td(e);if(!Zc(t))return $s(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=sk(t);let s=(o?zs(n.width):n.width)/r,l=(o?zs(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const ak=$s(0);function lk(e){const t=Bt(e);return!rk()||!t.visualViewport?ak:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function uk(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Bt(e)?!1:t}function ap(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=td(e);let s=$s(1);t&&(r?Nu(r)&&(s=Sl(r)):s=Sl(e));const l=uk(o,n,r)?lk(o):$s(0);let a=(i.left+l.x)/s.x,u=(i.top+l.y)/s.y,f=i.width/s.x,d=i.height/s.y;if(o){const m=Bt(o),x=r&&Nu(r)?Bt(r):r;let g=m.frameElement;for(;g&&r&&x!==m;){const v=Sl(g),S=g.getBoundingClientRect(),p=ed(g),h=S.left+(g.clientLeft+parseFloat(p.paddingLeft))*v.x,y=S.top+(g.clientTop+parseFloat(p.paddingTop))*v.y;a*=v.x,u*=v.y,f*=v.x,d*=v.y,a+=h,u+=y,g=Bt(g).frameElement}}return nk({width:f,height:d,x:a,y:u})}function ck(e,t){let n=null,r;const i=iv(e);function o(){clearTimeout(r),n&&n.disconnect(),n=null}function s(l,a){l===void 0&&(l=!1),a===void 0&&(a=1),o();const{left:u,top:f,width:d,height:m}=e.getBoundingClientRect();if(l||t(),!d||!m)return;const x=Do(f),g=Do(i.clientWidth-(u+d)),v=Do(i.clientHeight-(f+m)),S=Do(u),h={rootMargin:-x+"px "+-g+"px "+-v+"px "+-S+"px",threshold:tk(0,ek(1,a))||1};let y=!0;function b(C){const _=C[0].intersectionRatio;if(_!==a){if(!y)return s();_?s(!1,_):r=setTimeout(()=>{s(!1,1e-7)},100)}y=!1}try{n=new IntersectionObserver(b,{...h,root:i.ownerDocument})}catch{n=new IntersectionObserver(b,h)}n.observe(e)}return s(!0),o}function dk(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=r,u=td(e),f=i||o?[...u?Us(u):[],...Us(t)]:[];f.forEach(p=>{i&&p.addEventListener("scroll",n,{passive:!0}),o&&p.addEventListener("resize",n)});const d=u&&l?ck(u,n):null;let m=-1,x=null;s&&(x=new ResizeObserver(p=>{let[h]=p;h&&h.target===u&&x&&(x.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{x&&x.observe(t)})),n()}),u&&!a&&x.observe(u),x.observe(t));let g,v=a?ap(e):null;a&&S();function S(){const p=ap(e);v&&(p.x!==v.x||p.y!==v.y||p.width!==v.width||p.height!==v.height)&&n(),v=p,g=requestAnimationFrame(S)}return n(),()=>{f.forEach(p=>{i&&p.removeEventListener("scroll",n),o&&p.removeEventListener("resize",n)}),d&&d(),x&&x.disconnect(),x=null,a&&cancelAnimationFrame(g)}}var Vu=M.useLayoutEffect,fk=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Bs=function(){};function pk(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function hk(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=[].concat(r);if(t&&e)for(var s in t)t.hasOwnProperty(s)&&t[s]&&o.push("".concat(pk(e,s)));return o.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var lp=function(t){return kk(t)?t.filter(Boolean):dr(t)==="object"&&t!==null?[t]:[]},lv=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=xn(t,fk);return G({},n)},Ae=function(t,n,r){var i=t.cx,o=t.getStyles,s=t.getClassNames,l=t.className;return{css:o(n,t),className:i(r??{},s(n,t),l)}};function La(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function mk(e){return La(e)?window.innerHeight:e.clientHeight}function uv(e){return La(e)?window.pageYOffset:e.scrollTop}function Hs(e,t){if(La(e)){window.scrollTo(0,t);return}e.scrollTop=t}function gk(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function vk(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function Fo(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Bs,i=uv(e),o=t-i,s=10,l=0;function a(){l+=s;var u=vk(l,i,o,n);Hs(e,u),l<n?window.requestAnimationFrame(a):r(e)}a()}function up(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?Hs(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&Hs(e,Math.max(t.offsetTop-i,0))}function yk(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function cp(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function xk(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var cv=!1,wk={get passive(){return cv=!0}},No=typeof window<"u"?window:{};No.addEventListener&&No.removeEventListener&&(No.addEventListener("p",Bs,wk),No.removeEventListener("p",Bs,!1));var bk=cv;function Sk(e){return e!=null}function kk(e){return Array.isArray(e)}function Vo(e,t,n){return e?t:n}var Ck=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=Object.entries(t).filter(function(s){var l=pn(s,1),a=l[0];return!r.includes(a)});return o.reduce(function(s,l){var a=pn(l,2),u=a[0],f=a[1];return s[u]=f,s},{})},Ek=["children","innerProps"],jk=["children","innerProps"];function Ok(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,o=e.shouldScroll,s=e.isFixedPosition,l=e.controlHeight,a=gk(n),u={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return u;var f=a.getBoundingClientRect(),d=f.height,m=n.getBoundingClientRect(),x=m.bottom,g=m.height,v=m.top,S=n.offsetParent.getBoundingClientRect(),p=S.top,h=s?window.innerHeight:mk(a),y=uv(a),b=parseInt(getComputedStyle(n).marginBottom,10),C=parseInt(getComputedStyle(n).marginTop,10),_=p-C,j=h-v,P=_+y,T=d-y-v,I=x-h+y+b,B=y+v-C,D=160;switch(i){case"auto":case"bottom":if(j>=g)return{placement:"bottom",maxHeight:t};if(T>=g&&!s)return o&&Fo(a,I,D),{placement:"bottom",maxHeight:t};if(!s&&T>=r||s&&j>=r){o&&Fo(a,I,D);var L=s?j-b:T-b;return{placement:"bottom",maxHeight:L}}if(i==="auto"||s){var X=t,Z=s?_:P;return Z>=r&&(X=Math.min(Z-b-l,t)),{placement:"top",maxHeight:X}}if(i==="bottom")return o&&Hs(a,I),{placement:"bottom",maxHeight:t};break;case"top":if(_>=g)return{placement:"top",maxHeight:t};if(P>=g&&!s)return o&&Fo(a,B,D),{placement:"top",maxHeight:t};if(!s&&P>=r||s&&_>=r){var ee=t;return(!s&&P>=r||s&&_>=r)&&(ee=s?_-C:P-C),o&&Fo(a,B,D),{placement:"top",maxHeight:ee}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return u}function _k(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var dv=function(t){return t==="auto"?"bottom":t},Pk=function(t,n){var r,i=t.placement,o=t.theme,s=o.borderRadius,l=o.spacing,a=o.colors;return G((r={label:"menu"},bi(r,_k(i),"100%"),bi(r,"position","absolute"),bi(r,"width","100%"),bi(r,"zIndex",1),r),n?{}:{backgroundColor:a.neutral0,borderRadius:s,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},fv=M.createContext(null),Tk=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,o=t.menuPlacement,s=t.menuPosition,l=t.menuShouldScrollIntoView,a=t.theme,u=M.useContext(fv)||{},f=u.setPortalPlacement,d=M.useRef(null),m=M.useState(i),x=pn(m,2),g=x[0],v=x[1],S=M.useState(null),p=pn(S,2),h=p[0],y=p[1],b=a.spacing.controlHeight;return Vu(function(){var C=d.current;if(C){var _=s==="fixed",j=l&&!_,P=Ok({maxHeight:i,menuEl:C,minHeight:r,placement:o,shouldScroll:j,isFixedPosition:_,controlHeight:b});v(P.maxHeight),y(P.placement),f==null||f(P.placement)}},[i,o,s,l,r,f,b]),n({ref:d,placerProps:G(G({},t),{},{placement:h||dv(o),maxHeight:g})})},Mk=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return K("div",q({},Ae(t,"menu",{menu:!0}),{ref:r},i),n)},Rk=Mk,Ik=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return G({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},Lk=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,o=t.isMulti;return K("div",q({},Ae(t,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:i},r),n)},pv=function(t,n){var r=t.theme,i=r.spacing.baseUnit,o=r.colors;return G({textAlign:"center"},n?{}:{color:o.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},Ak=pv,Dk=pv,Fk=function(t){var n=t.children,r=n===void 0?"No options":n,i=t.innerProps,o=xn(t,Ek);return K("div",q({},Ae(G(G({},o),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},Nk=function(t){var n=t.children,r=n===void 0?"Loading...":n,i=t.innerProps,o=xn(t,jk);return K("div",q({},Ae(G(G({},o),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},Vk=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},zk=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,o=t.innerProps,s=t.menuPlacement,l=t.menuPosition,a=M.useRef(null),u=M.useRef(null),f=M.useState(dv(s)),d=pn(f,2),m=d[0],x=d[1],g=M.useMemo(function(){return{setPortalPlacement:x}},[]),v=M.useState(null),S=pn(v,2),p=S[0],h=S[1],y=M.useCallback(function(){if(i){var j=yk(i),P=l==="fixed"?0:window.pageYOffset,T=j[m]+P;(T!==(p==null?void 0:p.offset)||j.left!==(p==null?void 0:p.rect.left)||j.width!==(p==null?void 0:p.rect.width))&&h({offset:T,rect:j})}},[i,l,m,p==null?void 0:p.offset,p==null?void 0:p.rect.left,p==null?void 0:p.rect.width]);Vu(function(){y()},[y]);var b=M.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),i&&a.current&&(u.current=dk(i,a.current,y,{elementResize:"ResizeObserver"in window}))},[i,y]);Vu(function(){b()},[b]);var C=M.useCallback(function(j){a.current=j,b()},[b]);if(!n&&l!=="fixed"||!p)return null;var _=K("div",q({ref:C},Ae(G(G({},t),{},{offset:p.offset,position:l,rect:p.rect}),"menuPortal",{"menu-portal":!0}),o),r);return K(fv.Provider,{value:g},n?ha.createPortal(_,n):_)},$k=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},Uk=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,o=t.isRtl;return K("div",q({},Ae(t,"container",{"--is-disabled":i,"--is-rtl":o}),r),n)},Bk=function(t,n){var r=t.theme.spacing,i=t.isMulti,o=t.hasValue,s=t.selectProps.controlShouldRenderValue;return G({alignItems:"center",display:i&&o&&s?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},Hk=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,o=t.hasValue;return K("div",q({},Ae(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":o}),r),n)},Wk=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},Qk=function(t){var n=t.children,r=t.innerProps;return K("div",q({},Ae(t,"indicatorsContainer",{indicators:!0}),r),n)},dp,Yk=["size"],Kk=["innerProps","isRtl","size"],Gk={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},hv=function(t){var n=t.size,r=xn(t,Yk);return K("svg",q({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:Gk},r))},nd=function(t){return K(hv,q({size:20},t),K("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},mv=function(t){return K(hv,q({size:20},t),K("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},gv=function(t,n){var r=t.isFocused,i=t.theme,o=i.spacing.baseUnit,s=i.colors;return G({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?s.neutral60:s.neutral20,padding:o*2,":hover":{color:r?s.neutral80:s.neutral40}})},Xk=gv,qk=function(t){var n=t.children,r=t.innerProps;return K("div",q({},Ae(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||K(mv,null))},Jk=gv,Zk=function(t){var n=t.children,r=t.innerProps;return K("div",q({},Ae(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||K(nd,null))},eC=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing.baseUnit,s=i.colors;return G({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?s.neutral10:s.neutral20,marginBottom:o*2,marginTop:o*2})},tC=function(t){var n=t.innerProps;return K("span",q({},n,Ae(t,"indicatorSeparator",{"indicator-separator":!0})))},nC=k1(dp||(dp=Z2([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),rC=function(t,n){var r=t.isFocused,i=t.size,o=t.theme,s=o.colors,l=o.spacing.baseUnit;return G({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?s.neutral60:s.neutral20,padding:l*2})},kl=function(t){var n=t.delay,r=t.offset;return K("span",{css:Hc({animation:"".concat(nC," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},iC=function(t){var n=t.innerProps,r=t.isRtl,i=t.size,o=i===void 0?4:i,s=xn(t,Kk);return K("div",q({},Ae(G(G({},s),{},{innerProps:n,isRtl:r,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),K(kl,{delay:0,offset:r}),K(kl,{delay:160,offset:!0}),K(kl,{delay:320,offset:!r}))},oC=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.theme,s=o.colors,l=o.borderRadius,a=o.spacing;return G({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:a.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?s.neutral5:s.neutral0,borderColor:r?s.neutral10:i?s.primary:s.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(s.primary):void 0,"&:hover":{borderColor:i?s.primary:s.neutral30}})},sC=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.innerRef,s=t.innerProps,l=t.menuIsOpen;return K("div",q({ref:o},Ae(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":l}),s,{"aria-disabled":r||void 0}),n)},aC=sC,lC=["data"],uC=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},cC=function(t){var n=t.children,r=t.cx,i=t.getStyles,o=t.getClassNames,s=t.Heading,l=t.headingProps,a=t.innerProps,u=t.label,f=t.theme,d=t.selectProps;return K("div",q({},Ae(t,"group",{group:!0}),a),K(s,q({},l,{selectProps:d,theme:f,getStyles:i,getClassNames:o,cx:r}),u),K("div",null,n))},dC=function(t,n){var r=t.theme,i=r.colors,o=r.spacing;return G({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},fC=function(t){var n=lv(t);n.data;var r=xn(n,lC);return K("div",q({},Ae(t,"groupHeading",{"group-heading":!0}),r))},pC=cC,hC=["innerRef","isDisabled","isHidden","inputClassName"],mC=function(t,n){var r=t.isDisabled,i=t.value,o=t.theme,s=o.spacing,l=o.colors;return G(G({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},gC),n?{}:{margin:s.baseUnit/2,paddingBottom:s.baseUnit/2,paddingTop:s.baseUnit/2,color:l.neutral80})},vv={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},gC={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":G({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},vv)},vC=function(t){return G({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},vv)},yC=function(t){var n=t.cx,r=t.value,i=lv(t),o=i.innerRef,s=i.isDisabled,l=i.isHidden,a=i.inputClassName,u=xn(i,hC);return K("div",q({},Ae(t,"input",{"input-container":!0}),{"data-value":r||""}),K("input",q({className:n({input:!0},a),ref:o,style:vC(l),disabled:s},u)))},xC=yC,wC=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,s=r.colors;return G({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:s.neutral10,borderRadius:o/2,margin:i.baseUnit/2})},bC=function(t,n){var r=t.theme,i=r.borderRadius,o=r.colors,s=t.cropWithEllipsis;return G({overflow:"hidden",textOverflow:s||s===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},SC=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,s=r.colors,l=t.isFocused;return G({alignItems:"center",display:"flex"},n?{}:{borderRadius:o/2,backgroundColor:l?s.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:s.dangerLight,color:s.danger}})},yv=function(t){var n=t.children,r=t.innerProps;return K("div",r,n)},kC=yv,CC=yv;function EC(e){var t=e.children,n=e.innerProps;return K("div",q({role:"button"},n),t||K(nd,{size:14}))}var jC=function(t){var n=t.children,r=t.components,i=t.data,o=t.innerProps,s=t.isDisabled,l=t.removeProps,a=t.selectProps,u=r.Container,f=r.Label,d=r.Remove;return K(u,{data:i,innerProps:G(G({},Ae(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":s})),o),selectProps:a},K(f,{data:i,innerProps:G({},Ae(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:a},n),K(d,{data:i,innerProps:G(G({},Ae(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},l),selectProps:a}))},OC=jC,_C=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.isSelected,s=t.theme,l=s.spacing,a=s.colors;return G({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:o?a.primary:i?a.primary25:"transparent",color:r?a.neutral20:o?a.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?a.primary:a.primary50}})},PC=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.isSelected,s=t.innerRef,l=t.innerProps;return K("div",q({},Ae(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":o}),{ref:s,"aria-disabled":r},l),n)},TC=PC,MC=function(t,n){var r=t.theme,i=r.spacing,o=r.colors;return G({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:o.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},RC=function(t){var n=t.children,r=t.innerProps;return K("div",q({},Ae(t,"placeholder",{placeholder:!0}),r),n)},IC=RC,LC=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing,s=i.colors;return G({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?s.neutral40:s.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},AC=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return K("div",q({},Ae(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},DC=AC,FC={ClearIndicator:Zk,Control:aC,DropdownIndicator:qk,DownChevron:mv,CrossIcon:nd,Group:pC,GroupHeading:fC,IndicatorsContainer:Qk,IndicatorSeparator:tC,Input:xC,LoadingIndicator:iC,Menu:Rk,MenuList:Lk,MenuPortal:zk,LoadingMessage:Nk,NoOptionsMessage:Fk,MultiValue:OC,MultiValueContainer:kC,MultiValueLabel:CC,MultiValueRemove:EC,Option:TC,Placeholder:IC,SelectContainer:Uk,SingleValue:DC,ValueContainer:Hk},NC=function(t){return G(G({},FC),t.components)},fp=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function VC(e,t){return!!(e===t||fp(e)&&fp(t))}function zC(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!VC(e[n],t[n]))return!1;return!0}function $C(e,t){t===void 0&&(t=zC);var n=null;function r(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var s=e.apply(this,i);return n={lastResult:s,lastArgs:i,lastThis:this},s}return r.clear=function(){n=null},r}var UC={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},BC=function(t){return K("span",q({css:UC},t))},pp=BC,HC={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.tabSelectsValue,o=t.context,s=t.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return s?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,o=t.labels,s=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return s?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,o=t.label,s=o===void 0?"":o,l=t.selectValue,a=t.isDisabled,u=t.isSelected,f=t.isAppleDevice,d=function(v,S){return v&&v.length?"".concat(v.indexOf(S)+1," of ").concat(v.length):""};if(n==="value"&&l)return"value ".concat(s," focused, ").concat(d(l,r),".");if(n==="menu"&&f){var m=a?" disabled":"",x="".concat(u?" selected":"").concat(m);return"".concat(s).concat(x,", ").concat(d(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},WC=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,o=t.focusableOptions,s=t.isFocused,l=t.selectValue,a=t.selectProps,u=t.id,f=t.isAppleDevice,d=a.ariaLiveMessages,m=a.getOptionLabel,x=a.inputValue,g=a.isMulti,v=a.isOptionDisabled,S=a.isSearchable,p=a.menuIsOpen,h=a.options,y=a.screenReaderStatus,b=a.tabSelectsValue,C=a.isLoading,_=a["aria-label"],j=a["aria-live"],P=M.useMemo(function(){return G(G({},HC),d||{})},[d]),T=M.useMemo(function(){var Z="";if(n&&P.onChange){var ee=n.option,ve=n.options,N=n.removedValue,Q=n.removedValues,Y=n.value,ce=function(Ze){return Array.isArray(Ze)?null:Ze},ne=N||ee||ce(Y),je=ne?m(ne):"",we=ve||Q||void 0,$e=we?we.map(m):[],he=G({isDisabled:ne&&v(ne,l),label:je,labels:$e},n);Z=P.onChange(he)}return Z},[n,P,v,l,m]),I=M.useMemo(function(){var Z="",ee=r||i,ve=!!(r&&l&&l.includes(r));if(ee&&P.onFocus){var N={focused:ee,label:m(ee),isDisabled:v(ee,l),isSelected:ve,options:o,context:ee===r?"menu":"value",selectValue:l,isAppleDevice:f};Z=P.onFocus(N)}return Z},[r,i,m,v,P,o,l,f]),B=M.useMemo(function(){var Z="";if(p&&h.length&&!C&&P.onFilter){var ee=y({count:o.length});Z=P.onFilter({inputValue:x,resultsMessage:ee})}return Z},[o,x,p,P,h,y,C]),D=(n==null?void 0:n.action)==="initial-input-focus",L=M.useMemo(function(){var Z="";if(P.guidance){var ee=i?"value":p?"menu":"input";Z=P.guidance({"aria-label":_,context:ee,isDisabled:r&&v(r,l),isMulti:g,isSearchable:S,tabSelectsValue:b,isInitialFocus:D})}return Z},[_,r,i,g,v,S,p,P,l,b,D]),X=K(M.Fragment,null,K("span",{id:"aria-selection"},T),K("span",{id:"aria-focused"},I),K("span",{id:"aria-results"},B),K("span",{id:"aria-guidance"},L));return K(M.Fragment,null,K(pp,{id:u},D&&X),K(pp,{"aria-live":j,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},s&&!D&&X))},QC=WC,zu=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],YC=new RegExp("["+zu.map(function(e){return e.letters}).join("")+"]","g"),xv={};for(var Cl=0;Cl<zu.length;Cl++)for(var El=zu[Cl],jl=0;jl<El.letters.length;jl++)xv[El.letters[jl]]=El.base;var wv=function(t){return t.replace(YC,function(n){return xv[n]})},KC=$C(wv),hp=function(t){return t.replace(/^\s+|\s+$/g,"")},GC=function(t){return"".concat(t.label," ").concat(t.value)},XC=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=G({ignoreCase:!0,ignoreAccents:!0,stringify:GC,trim:!0,matchFrom:"any"},t),o=i.ignoreCase,s=i.ignoreAccents,l=i.stringify,a=i.trim,u=i.matchFrom,f=a?hp(r):r,d=a?hp(l(n)):l(n);return o&&(f=f.toLowerCase(),d=d.toLowerCase()),s&&(f=KC(f),d=wv(d)),u==="start"?d.substr(0,f.length)===f:d.indexOf(f)>-1}},qC=["innerRef"];function JC(e){var t=e.innerRef,n=xn(e,qC),r=Ck(n,"onExited","in","enter","exit","appear");return K("input",q({ref:t},r,{css:Hc({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var ZC=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function eE(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,o=e.onTopLeave,s=M.useRef(!1),l=M.useRef(!1),a=M.useRef(0),u=M.useRef(null),f=M.useCallback(function(S,p){if(u.current!==null){var h=u.current,y=h.scrollTop,b=h.scrollHeight,C=h.clientHeight,_=u.current,j=p>0,P=b-C-y,T=!1;P>p&&s.current&&(r&&r(S),s.current=!1),j&&l.current&&(o&&o(S),l.current=!1),j&&p>P?(n&&!s.current&&n(S),_.scrollTop=b,T=!0,s.current=!0):!j&&-p>y&&(i&&!l.current&&i(S),_.scrollTop=0,T=!0,l.current=!0),T&&ZC(S)}},[n,r,i,o]),d=M.useCallback(function(S){f(S,S.deltaY)},[f]),m=M.useCallback(function(S){a.current=S.changedTouches[0].clientY},[]),x=M.useCallback(function(S){var p=a.current-S.changedTouches[0].clientY;f(S,p)},[f]),g=M.useCallback(function(S){if(S){var p=bk?{passive:!1}:!1;S.addEventListener("wheel",d,p),S.addEventListener("touchstart",m,p),S.addEventListener("touchmove",x,p)}},[x,m,d]),v=M.useCallback(function(S){S&&(S.removeEventListener("wheel",d,!1),S.removeEventListener("touchstart",m,!1),S.removeEventListener("touchmove",x,!1))},[x,m,d]);return M.useEffect(function(){if(t){var S=u.current;return g(S),function(){v(S)}}},[t,g,v]),function(S){u.current=S}}var mp=["boxSizing","height","overflow","paddingRight","position"],gp={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function vp(e){e.preventDefault()}function yp(e){e.stopPropagation()}function xp(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function wp(){return"ontouchstart"in window||navigator.maxTouchPoints}var bp=!!(typeof window<"u"&&window.document&&window.document.createElement),hi=0,yr={capture:!1,passive:!1};function tE(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=M.useRef({}),o=M.useRef(null),s=M.useCallback(function(a){if(bp){var u=document.body,f=u&&u.style;if(r&&mp.forEach(function(g){var v=f&&f[g];i.current[g]=v}),r&&hi<1){var d=parseInt(i.current.paddingRight,10)||0,m=document.body?document.body.clientWidth:0,x=window.innerWidth-m+d||0;Object.keys(gp).forEach(function(g){var v=gp[g];f&&(f[g]=v)}),f&&(f.paddingRight="".concat(x,"px"))}u&&wp()&&(u.addEventListener("touchmove",vp,yr),a&&(a.addEventListener("touchstart",xp,yr),a.addEventListener("touchmove",yp,yr))),hi+=1}},[r]),l=M.useCallback(function(a){if(bp){var u=document.body,f=u&&u.style;hi=Math.max(hi-1,0),r&&hi<1&&mp.forEach(function(d){var m=i.current[d];f&&(f[d]=m)}),u&&wp()&&(u.removeEventListener("touchmove",vp,yr),a&&(a.removeEventListener("touchstart",xp,yr),a.removeEventListener("touchmove",yp,yr)))}},[r]);return M.useEffect(function(){if(t){var a=o.current;return s(a),function(){l(a)}}},[t,s,l]),function(a){o.current=a}}var nE=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},rE={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function iE(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,o=e.onBottomArrive,s=e.onBottomLeave,l=e.onTopArrive,a=e.onTopLeave,u=eE({isEnabled:i,onBottomArrive:o,onBottomLeave:s,onTopArrive:l,onTopLeave:a}),f=tE({isEnabled:n}),d=function(x){u(x),f(x)};return K(M.Fragment,null,n&&K("div",{onClick:nE,css:rE}),t(d))}var oE={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},sE=function(t){var n=t.name,r=t.onFocus;return K("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:oE,value:"",onChange:function(){}})},aE=sE;function rd(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function lE(){return rd(/^iPhone/i)}function bv(){return rd(/^Mac/i)}function uE(){return rd(/^iPad/i)||bv()&&navigator.maxTouchPoints>1}function cE(){return lE()||uE()}function dE(){return bv()||cE()}var fE=function(t){return t.label},pE=function(t){return t.label},hE=function(t){return t.value},mE=function(t){return!!t.isDisabled},gE={clearIndicator:Jk,container:$k,control:oC,dropdownIndicator:Xk,group:uC,groupHeading:dC,indicatorsContainer:Wk,indicatorSeparator:eC,input:mC,loadingIndicator:rC,loadingMessage:Dk,menu:Pk,menuList:Ik,menuPortal:Vk,multiValue:wC,multiValueLabel:bC,multiValueRemove:SC,noOptionsMessage:Ak,option:_C,placeholder:MC,singleValue:LC,valueContainer:Bk},vE={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},yE=4,Sv=4,xE=38,wE=Sv*2,bE={baseUnit:Sv,controlHeight:xE,menuGutter:wE},Ol={borderRadius:yE,colors:vE,spacing:bE},SE={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:cp(),captureMenuScroll:!cp(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:XC(),formatGroupLabel:fE,getOptionLabel:pE,getOptionValue:hE,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:mE,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!xk(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function Sp(e,t,n,r){var i=Ev(e,t,n),o=jv(e,t,n),s=Cv(e,t),l=Ws(e,t);return{type:"option",data:t,isDisabled:i,isSelected:o,label:s,value:l,index:r}}function as(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(s,l){return Sp(e,s,t,l)}).filter(function(s){return Cp(e,s)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var o=Sp(e,n,t,r);return Cp(e,o)?o:void 0}).filter(Sk)}function kv(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,Jc(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function kp(e,t){return e.reduce(function(n,r){return r.type==="group"?n.push.apply(n,Jc(r.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),n},[])}function kE(e,t){return kv(as(e,t))}function Cp(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,o=t.isSelected,s=t.label,l=t.value;return(!_v(e)||!o)&&Ov(e,{label:s,value:l,data:i},r)}function CE(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var o=t.indexOf(n);if(o>-1)return n;if(i<t.length)return t[i]}return null}function EE(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var _l=function(t,n){var r,i=(r=t.find(function(o){return o.data===n}))===null||r===void 0?void 0:r.id;return i||null},Cv=function(t,n){return t.getOptionLabel(n)},Ws=function(t,n){return t.getOptionValue(n)};function Ev(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function jv(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=Ws(e,t);return n.some(function(i){return Ws(e,i)===r})}function Ov(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var _v=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},jE=1,Pv=function(e){W2(n,e);var t=G2(n);function n(r){var i;if(B2(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.isAppleDevice=dE(),i.controlRef=null,i.getControlRef=function(a){i.controlRef=a},i.focusedOptionRef=null,i.getFocusedOptionRef=function(a){i.focusedOptionRef=a},i.menuListRef=null,i.getMenuListRef=function(a){i.menuListRef=a},i.inputRef=null,i.getInputRef=function(a){i.inputRef=a},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(a,u){var f=i.props,d=f.onChange,m=f.name;u.name=m,i.ariaOnChange(a,u),d(a,u)},i.setValue=function(a,u,f){var d=i.props,m=d.closeMenuOnSelect,x=d.isMulti,g=d.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:g}),m&&(i.setState({inputIsHiddenAfterUpdate:!x}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(a,{action:u,option:f})},i.selectOption=function(a){var u=i.props,f=u.blurInputOnSelect,d=u.isMulti,m=u.name,x=i.state.selectValue,g=d&&i.isOptionSelected(a,x),v=i.isOptionDisabled(a,x);if(g){var S=i.getOptionValue(a);i.setValue(x.filter(function(p){return i.getOptionValue(p)!==S}),"deselect-option",a)}else if(!v)d?i.setValue([].concat(Jc(x),[a]),"select-option",a):i.setValue(a,"select-option");else{i.ariaOnChange(a,{action:"select-option",option:a,name:m});return}f&&i.blurInput()},i.removeValue=function(a){var u=i.props.isMulti,f=i.state.selectValue,d=i.getOptionValue(a),m=f.filter(function(g){return i.getOptionValue(g)!==d}),x=Vo(u,m,m[0]||null);i.onChange(x,{action:"remove-value",removedValue:a}),i.focusInput()},i.clearValue=function(){var a=i.state.selectValue;i.onChange(Vo(i.props.isMulti,[],null),{action:"clear",removedValues:a})},i.popValue=function(){var a=i.props.isMulti,u=i.state.selectValue,f=u[u.length-1],d=u.slice(0,u.length-1),m=Vo(a,d,d[0]||null);i.onChange(m,{action:"pop-value",removedValue:f})},i.getFocusedOptionId=function(a){return _l(i.state.focusableOptionsWithIds,a)},i.getFocusableOptionsWithIds=function(){return kp(as(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var a=arguments.length,u=new Array(a),f=0;f<a;f++)u[f]=arguments[f];return hk.apply(void 0,[i.props.classNamePrefix].concat(u))},i.getOptionLabel=function(a){return Cv(i.props,a)},i.getOptionValue=function(a){return Ws(i.props,a)},i.getStyles=function(a,u){var f=i.props.unstyled,d=gE[a](u,f);d.boxSizing="border-box";var m=i.props.styles[a];return m?m(d,u):d},i.getClassNames=function(a,u){var f,d;return(f=(d=i.props.classNames)[a])===null||f===void 0?void 0:f.call(d,u)},i.getElementId=function(a){return"".concat(i.state.instancePrefix,"-").concat(a)},i.getComponents=function(){return NC(i.props)},i.buildCategorizedOptions=function(){return as(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return kv(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(a,u){i.setState({ariaSelection:G({value:a},u)})},i.onMenuMouseDown=function(a){a.button===0&&(a.stopPropagation(),a.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(a){i.blockOptionHover=!1},i.onControlMouseDown=function(a){if(!a.defaultPrevented){var u=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?a.target.tagName!=="INPUT"&&a.target.tagName!=="TEXTAREA"&&i.onMenuClose():u&&i.openMenu("first"):(u&&(i.openAfterFocus=!0),i.focusInput()),a.target.tagName!=="INPUT"&&a.target.tagName!=="TEXTAREA"&&a.preventDefault()}},i.onDropdownIndicatorMouseDown=function(a){if(!(a&&a.type==="mousedown"&&a.button!==0)&&!i.props.isDisabled){var u=i.props,f=u.isMulti,d=u.menuIsOpen;i.focusInput(),d?(i.setState({inputIsHiddenAfterUpdate:!f}),i.onMenuClose()):i.openMenu("first"),a.preventDefault()}},i.onClearIndicatorMouseDown=function(a){a&&a.type==="mousedown"&&a.button!==0||(i.clearValue(),a.preventDefault(),i.openAfterFocus=!1,a.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(a){typeof i.props.closeMenuOnScroll=="boolean"?a.target instanceof HTMLElement&&La(a.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(a)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(a){var u=a.touches,f=u&&u.item(0);f&&(i.initialTouchX=f.clientX,i.initialTouchY=f.clientY,i.userIsDragging=!1)},i.onTouchMove=function(a){var u=a.touches,f=u&&u.item(0);if(f){var d=Math.abs(f.clientX-i.initialTouchX),m=Math.abs(f.clientY-i.initialTouchY),x=5;i.userIsDragging=d>x||m>x}},i.onTouchEnd=function(a){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(a.target)&&i.menuListRef&&!i.menuListRef.contains(a.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(a){i.userIsDragging||i.onControlMouseDown(a)},i.onClearIndicatorTouchEnd=function(a){i.userIsDragging||i.onClearIndicatorMouseDown(a)},i.onDropdownIndicatorTouchEnd=function(a){i.userIsDragging||i.onDropdownIndicatorMouseDown(a)},i.handleInputChange=function(a){var u=i.props.inputValue,f=a.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(f,{action:"input-change",prevInputValue:u}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(a){i.props.onFocus&&i.props.onFocus(a),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(a){var u=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(a),i.onInputChange("",{action:"input-blur",prevInputValue:u}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(a){if(!(i.blockOptionHover||i.state.focusedOption===a)){var u=i.getFocusableOptions(),f=u.indexOf(a);i.setState({focusedOption:a,focusedOptionId:f>-1?i.getFocusedOptionId(a):null})}},i.shouldHideSelectedOptions=function(){return _v(i.props)},i.onValueInputFocus=function(a){a.preventDefault(),a.stopPropagation(),i.focus()},i.onKeyDown=function(a){var u=i.props,f=u.isMulti,d=u.backspaceRemovesValue,m=u.escapeClearsValue,x=u.inputValue,g=u.isClearable,v=u.isDisabled,S=u.menuIsOpen,p=u.onKeyDown,h=u.tabSelectsValue,y=u.openMenuOnFocus,b=i.state,C=b.focusedOption,_=b.focusedValue,j=b.selectValue;if(!v&&!(typeof p=="function"&&(p(a),a.defaultPrevented))){switch(i.blockOptionHover=!0,a.key){case"ArrowLeft":if(!f||x)return;i.focusValue("previous");break;case"ArrowRight":if(!f||x)return;i.focusValue("next");break;case"Delete":case"Backspace":if(x)return;if(_)i.removeValue(_);else{if(!d)return;f?i.popValue():g&&i.clearValue()}break;case"Tab":if(i.isComposing||a.shiftKey||!S||!h||!C||y&&i.isOptionSelected(C,j))return;i.selectOption(C);break;case"Enter":if(a.keyCode===229)break;if(S){if(!C||i.isComposing)return;i.selectOption(C);break}return;case"Escape":S?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:x}),i.onMenuClose()):g&&m&&i.clearValue();break;case" ":if(x)return;if(!S){i.openMenu("first");break}if(!C)return;i.selectOption(C);break;case"ArrowUp":S?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":S?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!S)return;i.focusOption("pageup");break;case"PageDown":if(!S)return;i.focusOption("pagedown");break;case"Home":if(!S)return;i.focusOption("first");break;case"End":if(!S)return;i.focusOption("last");break;default:return}a.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++jE),i.state.selectValue=lp(r.value),r.menuIsOpen&&i.state.selectValue.length){var o=i.getFocusableOptionsWithIds(),s=i.buildFocusableOptions(),l=s.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=o,i.state.focusedOption=s[l],i.state.focusedOptionId=_l(o,s[l])}return i}return H2(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&up(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(i){var o=this.props,s=o.isDisabled,l=o.menuIsOpen,a=this.state.isFocused;(a&&!s&&i.isDisabled||a&&l&&!i.menuIsOpen)&&this.focusInput(),a&&s&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!a&&!s&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(up(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,o){this.props.onInputChange(i,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var o=this,s=this.state,l=s.selectValue,a=s.isFocused,u=this.buildFocusableOptions(),f=i==="first"?0:u.length-1;if(!this.props.isMulti){var d=u.indexOf(l[0]);d>-1&&(f=d)}this.scrollToFocusedOptionOnUpdate=!(a&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[f],focusedOptionId:this.getFocusedOptionId(u[f])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(i){var o=this.state,s=o.selectValue,l=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var a=s.indexOf(l);l||(a=-1);var u=s.length-1,f=-1;if(s.length){switch(i){case"previous":a===0?f=0:a===-1?f=u:f=a-1;break;case"next":a>-1&&a<u&&(f=a+1);break}this.setState({inputIsHidden:f!==-1,focusedValue:s[f]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,s=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var a=0,u=l.indexOf(s);s||(u=-1),i==="up"?a=u>0?u-1:l.length-1:i==="down"?a=(u+1)%l.length:i==="pageup"?(a=u-o,a<0&&(a=0)):i==="pagedown"?(a=u+o,a>l.length-1&&(a=l.length-1)):i==="last"&&(a=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[a],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[a])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Ol):G(G({},Ol),this.props.theme):Ol}},{key:"getCommonProps",value:function(){var i=this.clearValue,o=this.cx,s=this.getStyles,l=this.getClassNames,a=this.getValue,u=this.selectOption,f=this.setValue,d=this.props,m=d.isMulti,x=d.isRtl,g=d.options,v=this.hasValue();return{clearValue:i,cx:o,getStyles:s,getClassNames:l,getValue:a,hasValue:v,isMulti:m,isRtl:x,options:g,selectOption:u,selectProps:d,setValue:f,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,o=i.isClearable,s=i.isMulti;return o===void 0?s:o}},{key:"isOptionDisabled",value:function(i,o){return Ev(this.props,i,o)}},{key:"isOptionSelected",value:function(i,o){return jv(this.props,i,o)}},{key:"filterOption",value:function(i,o){return Ov(this.props,i,o)}},{key:"formatOptionLabel",value:function(i,o){if(typeof this.props.formatOptionLabel=="function"){var s=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(i,{context:o,inputValue:s,selectValue:l})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,o=i.isDisabled,s=i.isSearchable,l=i.inputId,a=i.inputValue,u=i.tabIndex,f=i.form,d=i.menuIsOpen,m=i.required,x=this.getComponents(),g=x.Input,v=this.state,S=v.inputIsHidden,p=v.ariaSelection,h=this.commonProps,y=l||this.getElementId("input"),b=G(G(G({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":m,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!s&&{"aria-readonly":!0}),this.hasValue()?(p==null?void 0:p.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return s?M.createElement(g,q({},h,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:y,innerRef:this.getInputRef,isDisabled:o,isHidden:S,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:f,type:"text",value:a},b)):M.createElement(JC,q({id:y,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Bs,onFocus:this.onInputFocus,disabled:o,tabIndex:u,inputMode:"none",form:f,value:""},b))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,o=this.getComponents(),s=o.MultiValue,l=o.MultiValueContainer,a=o.MultiValueLabel,u=o.MultiValueRemove,f=o.SingleValue,d=o.Placeholder,m=this.commonProps,x=this.props,g=x.controlShouldRenderValue,v=x.isDisabled,S=x.isMulti,p=x.inputValue,h=x.placeholder,y=this.state,b=y.selectValue,C=y.focusedValue,_=y.isFocused;if(!this.hasValue()||!g)return p?null:M.createElement(d,q({},m,{key:"placeholder",isDisabled:v,isFocused:_,innerProps:{id:this.getElementId("placeholder")}}),h);if(S)return b.map(function(P,T){var I=P===C,B="".concat(i.getOptionLabel(P),"-").concat(i.getOptionValue(P));return M.createElement(s,q({},m,{components:{Container:l,Label:a,Remove:u},isFocused:I,isDisabled:v,key:B,index:T,removeProps:{onClick:function(){return i.removeValue(P)},onTouchEnd:function(){return i.removeValue(P)},onMouseDown:function(L){L.preventDefault()}},data:P}),i.formatOptionLabel(P,"value"))});if(p)return null;var j=b[0];return M.createElement(f,q({},m,{data:j,isDisabled:v}),this.formatOptionLabel(j,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),o=i.ClearIndicator,s=this.commonProps,l=this.props,a=l.isDisabled,u=l.isLoading,f=this.state.isFocused;if(!this.isClearable()||!o||a||!this.hasValue()||u)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return M.createElement(o,q({},s,{innerProps:d,isFocused:f}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),o=i.LoadingIndicator,s=this.commonProps,l=this.props,a=l.isDisabled,u=l.isLoading,f=this.state.isFocused;if(!o||!u)return null;var d={"aria-hidden":"true"};return M.createElement(o,q({},s,{innerProps:d,isDisabled:a,isFocused:f}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator,s=i.IndicatorSeparator;if(!o||!s)return null;var l=this.commonProps,a=this.props.isDisabled,u=this.state.isFocused;return M.createElement(s,q({},l,{isDisabled:a,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator;if(!o)return null;var s=this.commonProps,l=this.props.isDisabled,a=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return M.createElement(o,q({},s,{innerProps:u,isDisabled:l,isFocused:a}))}},{key:"renderMenu",value:function(){var i=this,o=this.getComponents(),s=o.Group,l=o.GroupHeading,a=o.Menu,u=o.MenuList,f=o.MenuPortal,d=o.LoadingMessage,m=o.NoOptionsMessage,x=o.Option,g=this.commonProps,v=this.state.focusedOption,S=this.props,p=S.captureMenuScroll,h=S.inputValue,y=S.isLoading,b=S.loadingMessage,C=S.minMenuHeight,_=S.maxMenuHeight,j=S.menuIsOpen,P=S.menuPlacement,T=S.menuPosition,I=S.menuPortalTarget,B=S.menuShouldBlockScroll,D=S.menuShouldScrollIntoView,L=S.noOptionsMessage,X=S.onMenuScrollToTop,Z=S.onMenuScrollToBottom;if(!j)return null;var ee=function(je,we){var $e=je.type,he=je.data,be=je.isDisabled,Ze=je.isSelected,gt=je.label,F=je.value,H=v===he,ie=be?void 0:function(){return i.onOptionHover(he)},oe=be?void 0:function(){return i.selectOption(he)},te="".concat(i.getElementId("option"),"-").concat(we),ae={id:te,onClick:oe,onMouseMove:ie,onMouseOver:ie,tabIndex:-1,role:"option","aria-selected":i.isAppleDevice?void 0:Ze};return M.createElement(x,q({},g,{innerProps:ae,data:he,isDisabled:be,isSelected:Ze,key:te,label:gt,type:$e,value:F,isFocused:H,innerRef:H?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(je.data,"menu"))},ve;if(this.hasOptions())ve=this.getCategorizedOptions().map(function(ne){if(ne.type==="group"){var je=ne.data,we=ne.options,$e=ne.index,he="".concat(i.getElementId("group"),"-").concat($e),be="".concat(he,"-heading");return M.createElement(s,q({},g,{key:he,data:je,options:we,Heading:l,headingProps:{id:be,data:ne.data},label:i.formatGroupLabel(ne.data)}),ne.options.map(function(Ze){return ee(Ze,"".concat($e,"-").concat(Ze.index))}))}else if(ne.type==="option")return ee(ne,"".concat(ne.index))});else if(y){var N=b({inputValue:h});if(N===null)return null;ve=M.createElement(d,g,N)}else{var Q=L({inputValue:h});if(Q===null)return null;ve=M.createElement(m,g,Q)}var Y={minMenuHeight:C,maxMenuHeight:_,menuPlacement:P,menuPosition:T,menuShouldScrollIntoView:D},ce=M.createElement(Tk,q({},g,Y),function(ne){var je=ne.ref,we=ne.placerProps,$e=we.placement,he=we.maxHeight;return M.createElement(a,q({},g,Y,{innerRef:je,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:y,placement:$e}),M.createElement(iE,{captureEnabled:p,onTopArrive:X,onBottomArrive:Z,lockEnabled:B},function(be){return M.createElement(u,q({},g,{innerRef:function(gt){i.getMenuListRef(gt),be(gt)},innerProps:{role:"listbox","aria-multiselectable":g.isMulti,id:i.getElementId("listbox")},isLoading:y,maxHeight:he,focusedOption:v}),ve)}))});return I||T==="fixed"?M.createElement(f,q({},g,{appendTo:I,controlElement:this.controlRef,menuPlacement:P,menuPosition:T}),ce):ce}},{key:"renderFormField",value:function(){var i=this,o=this.props,s=o.delimiter,l=o.isDisabled,a=o.isMulti,u=o.name,f=o.required,d=this.state.selectValue;if(f&&!this.hasValue()&&!l)return M.createElement(aE,{name:u,onFocus:this.onValueInputFocus});if(!(!u||l))if(a)if(s){var m=d.map(function(v){return i.getOptionValue(v)}).join(s);return M.createElement("input",{name:u,type:"hidden",value:m})}else{var x=d.length>0?d.map(function(v,S){return M.createElement("input",{key:"i-".concat(S),name:u,type:"hidden",value:i.getOptionValue(v)})}):M.createElement("input",{name:u,type:"hidden",value:""});return M.createElement("div",null,x)}else{var g=d[0]?this.getOptionValue(d[0]):"";return M.createElement("input",{name:u,type:"hidden",value:g})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,o=this.state,s=o.ariaSelection,l=o.focusedOption,a=o.focusedValue,u=o.isFocused,f=o.selectValue,d=this.getFocusableOptions();return M.createElement(QC,q({},i,{id:this.getElementId("live-region"),ariaSelection:s,focusedOption:l,focusedValue:a,isFocused:u,selectValue:f,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),o=i.Control,s=i.IndicatorsContainer,l=i.SelectContainer,a=i.ValueContainer,u=this.props,f=u.className,d=u.id,m=u.isDisabled,x=u.menuIsOpen,g=this.state.isFocused,v=this.commonProps=this.getCommonProps();return M.createElement(l,q({},v,{className:f,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:m,isFocused:g}),this.renderLiveRegion(),M.createElement(o,q({},v,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:m,isFocused:g,menuIsOpen:x}),M.createElement(a,q({},v,{isDisabled:m}),this.renderPlaceholderOrValue(),this.renderInput()),M.createElement(s,q({},v,{isDisabled:m}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,o){var s=o.prevProps,l=o.clearFocusValueOnUpdate,a=o.inputIsHiddenAfterUpdate,u=o.ariaSelection,f=o.isFocused,d=o.prevWasFocused,m=o.instancePrefix,x=i.options,g=i.value,v=i.menuIsOpen,S=i.inputValue,p=i.isMulti,h=lp(g),y={};if(s&&(g!==s.value||x!==s.options||v!==s.menuIsOpen||S!==s.inputValue)){var b=v?kE(i,h):[],C=v?kp(as(i,h),"".concat(m,"-option")):[],_=l?CE(o,h):null,j=EE(o,b),P=_l(C,j);y={selectValue:h,focusedOption:j,focusedOptionId:P,focusableOptionsWithIds:C,focusedValue:_,clearFocusValueOnUpdate:!1}}var T=a!=null&&i!==s?{inputIsHidden:a,inputIsHiddenAfterUpdate:void 0}:{},I=u,B=f&&d;return f&&!B&&(I={value:Vo(p,h,h[0]||null),options:h,action:"initial-input-focus"},B=!d),(u==null?void 0:u.action)==="initial-input-focus"&&(I=null),G(G(G({},y),T),{},{prevProps:i,ariaSelection:I,prevWasFocused:B})}}]),n}(M.Component);Pv.defaultProps=SE;var OE=M.forwardRef(function(e,t){var n=U2(e);return M.createElement(Pv,q({ref:t},n))}),_E=OE;const PE=(e,t)=>{const[n,r]=M.useState(()=>{try{const o=window.localStorage.getItem(e);return o?JSON.parse(o):t}catch(o){return console.error("Error loading data from localStorage:",o),t}});return[n,o=>{try{const s=o instanceof Function?o(n):o;r(s),window.localStorage.setItem(e,JSON.stringify(s))}catch(s){console.error("Error storing data to localStorage:",s)}}]},Ep="/healthy-management-project/assets/computer1x-bHdljI7O.webp",TE="/healthy-management-project/assets/computer@2x-PvRGcLkF.webp",sn=()=>c.jsx("svg",{width:"8",height:"8",children:c.jsx("use",{href:`${rs}#star`})}),ME=E.div`
  padding: 80px 0;
`,RE=E.h2`
  margin-bottom: 40px;
  font-size: 48px;
  font-weight: 600;
  line-height: 1.17;
  color: var(--typography-black);
`,IE=E.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 24px;
`,LE=E.img`
  max-width: 828px;
  height: 100%;
`,AE=E.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  flex: 1 0 0;
  max-width: 828px;
  padding: 80px;
  border-radius: 16px;
  background-color: var(--background-white);
`,DE=E.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.33;
  color: var(--primary-bluedark);
`,FE=E.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
`,zo=E.label`
  display: flex;
  height: 112px;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  color: var(--primary-bluedark);
`,NE=E.label`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  color: var(--primary-bluedark);
`,VE=E(sn)`
  vertical-align: super;
`,Pl=E.input`
  display: flex;
  width: 100%;
  height: 56px;
  margin-top: 8px;
  padding: 0px 16px;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  align-self: stretch;
  border-radius: 16px;
  border: none;
  background-color: var(--background-white);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  border: 1px solid
    ${e=>e.errors?"var(--secondary-red)":"none"};

  &:hover {
    box-shadow: 0px 0px 16px 0px rgba(27, 54, 65, 0.16);
  }

  &:focus {
    outline: none;
    border: 1px solid var(--typography-grey);
    background: var(--background-white);
    box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  }

  &::placeholder {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: var(--typography-grey);
  }
`,zE=E.textarea`
  width: 100%;
  display: flex;
  height: 180px;
  padding: 16px;
  align-items: flex-start;

  align-self: stretch;
  border: none;
  border-radius: 16px;
  border: 1px solid
    ${e=>e.errors?"var(--secondary-red)":"none"};
  background: var(--background-white);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);

  &:hover {
    box-shadow: 0px 0px 16px 0px rgba(27, 54, 65, 0.16);
  }

  &:focus {
    outline: none;
    border: 1px solid var(--typography-grey);
    background: var(--background-white);
    box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  }

  &::placeholder {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: var(--typography-grey);
  }
`,mi=E.p`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  color: var(--secondary-red);
`,$E=E.button`
  height: 56px;
  padding: 8px 24px;
  margin-top: 40px;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  border: none;
  box-shadow: 0px 0px 8px 0px rgba(248, 248, 248, 0.08);
  background-color: var(--background-bluedark);
  color: var(--system-default-10);

  &:hover {
    font-weight: 600;
  }
`;var ao=e=>e.type==="checkbox",Rr=e=>e instanceof Date,st=e=>e==null;const Tv=e=>typeof e=="object";var He=e=>!st(e)&&!Array.isArray(e)&&Tv(e)&&!Rr(e),Mv=e=>He(e)&&e.target?ao(e.target)?e.target.checked:e.target.value:e,UE=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Rv=(e,t)=>e.has(UE(t)),BE=e=>{const t=e.constructor&&e.constructor.prototype;return He(t)&&t.hasOwnProperty("isPrototypeOf")},id=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Dt(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(id&&(e instanceof Blob||e instanceof FileList))&&(n||He(e)))if(t=n?[]:{},!n&&!BE(e))t=e;else for(const r in e)e.hasOwnProperty(r)&&(t[r]=Dt(e[r]));else return e;return t}var lo=e=>Array.isArray(e)?e.filter(Boolean):[],Le=e=>e===void 0,U=(e,t,n)=>{if(!t||!He(e))return n;const r=lo(t.split(/[,[\].]+?/)).reduce((i,o)=>st(i)?i:i[o],e);return Le(r)||r===e?Le(e[t])?n:e[t]:r},qt=e=>typeof e=="boolean";const Qs={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},zt={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},on={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},HE=Ce.createContext(null),od=()=>Ce.useContext(HE);var Iv=(e,t,n,r=!0)=>{const i={defaultValues:t._defaultValues};for(const o in e)Object.defineProperty(i,o,{get:()=>{const s=o;return t._proxyFormState[s]!==zt.all&&(t._proxyFormState[s]=!r||zt.all),n&&(n[s]=!0),e[s]}});return i},Et=e=>He(e)&&!Object.keys(e).length,Lv=(e,t,n,r)=>{n(e);const{name:i,...o}=e;return Et(o)||Object.keys(o).length>=Object.keys(t).length||Object.keys(o).find(s=>t[s]===(!r||zt.all))},ls=e=>Array.isArray(e)?e:[e],Av=(e,t,n)=>!e||!t||e===t||ls(e).some(r=>r&&(n?r===t:r.startsWith(t)||t.startsWith(r)));function sd(e){const t=Ce.useRef(e);t.current=e,Ce.useEffect(()=>{const n=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}function WE(e){const t=od(),{control:n=t.control,disabled:r,name:i,exact:o}=e||{},[s,l]=Ce.useState(n._formState),a=Ce.useRef(!0),u=Ce.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),f=Ce.useRef(i);return f.current=i,sd({disabled:r,next:d=>a.current&&Av(f.current,d.name,o)&&Lv(d,u.current,n._updateFormState)&&l({...n._formState,...d}),subject:n._subjects.state}),Ce.useEffect(()=>(a.current=!0,u.current.isValid&&n._updateValid(!0),()=>{a.current=!1}),[n]),Iv(s,n,u.current,!1)}var Zt=e=>typeof e=="string",Dv=(e,t,n,r,i)=>Zt(e)?(r&&t.watch.add(e),U(n,e,i)):Array.isArray(e)?e.map(o=>(r&&t.watch.add(o),U(n,o))):(r&&(t.watchAll=!0),n);function QE(e){const t=od(),{control:n=t.control,name:r,defaultValue:i,disabled:o,exact:s}=e||{},l=Ce.useRef(r);l.current=r,sd({disabled:o,subject:n._subjects.values,next:f=>{Av(l.current,f.name,s)&&u(Dt(Dv(l.current,n._names,f.values||n._formValues,!1,i)))}});const[a,u]=Ce.useState(n._getWatch(r,i));return Ce.useEffect(()=>n._removeUnmounted()),a}var ad=e=>/^\w*$/.test(e),Fv=e=>lo(e.replace(/["|']|\]/g,"").split(/\.|\[/));function ke(e,t,n){let r=-1;const i=ad(t)?[t]:Fv(t),o=i.length,s=o-1;for(;++r<o;){const l=i[r];let a=n;if(r!==s){const u=e[l];a=He(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}e[l]=a,e=e[l]}return e}function YE(e){const t=od(),{name:n,disabled:r,control:i=t.control,shouldUnregister:o}=e,s=Rv(i._names.array,n),l=QE({control:i,name:n,defaultValue:U(i._formValues,n,U(i._defaultValues,n,e.defaultValue)),exact:!0}),a=WE({control:i,name:n}),u=Ce.useRef(i.register(n,{...e.rules,value:l}));return u.current=i.register(n,e.rules),Ce.useEffect(()=>{const f=i._options.shouldUnregister||o,d=(m,x)=>{const g=U(i._fields,m);g&&(g._f.mount=x)};if(d(n,!0),f){const m=Dt(U(i._options.defaultValues,n));ke(i._defaultValues,n,m),Le(U(i._formValues,n))&&ke(i._formValues,n,m)}return()=>{(s?f&&!i._state.action:f)?i.unregister(n):d(n,!1)}},[n,i,s,o]),Ce.useEffect(()=>{U(i._fields,n)&&i._updateDisabledField({disabled:r,fields:i._fields,name:n,value:U(i._fields,n)._f.value})},[r,n,i]),{field:{name:n,value:l,...qt(r)||qt(a.disabled)?{disabled:a.disabled||r}:{},onChange:Ce.useCallback(f=>u.current.onChange({target:{value:Mv(f),name:n},type:Qs.CHANGE}),[n]),onBlur:Ce.useCallback(()=>u.current.onBlur({target:{value:U(i._formValues,n),name:n},type:Qs.BLUR}),[n,i]),ref:f=>{const d=U(i._fields,n);d&&f&&(d._f.ref={focus:()=>f.focus(),select:()=>f.select(),setCustomValidity:m=>f.setCustomValidity(m),reportValidity:()=>f.reportValidity()})}},formState:a,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!U(a.errors,n)},isDirty:{enumerable:!0,get:()=>!!U(a.dirtyFields,n)},isTouched:{enumerable:!0,get:()=>!!U(a.touchedFields,n)},error:{enumerable:!0,get:()=>U(a.errors,n)}})}}const KE=e=>e.render(YE(e));var GE=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{},jp=e=>({isOnSubmit:!e||e===zt.onSubmit,isOnBlur:e===zt.onBlur,isOnChange:e===zt.onChange,isOnAll:e===zt.all,isOnTouch:e===zt.onTouched}),Op=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const us=(e,t,n,r)=>{for(const i of n||Object.keys(e)){const o=U(e,i);if(o){const{_f:s,...l}=o;if(s){if(s.refs&&s.refs[0]&&t(s.refs[0],i)&&!r)break;if(s.ref&&t(s.ref,s.name)&&!r)break}else He(l)&&us(l,t)}}};var XE=(e,t,n)=>{const r=lo(U(e,n));return ke(r,"root",t[n]),ke(e,n,r),e},ld=e=>e.type==="file",Dn=e=>typeof e=="function",Ys=e=>{if(!id)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},cs=e=>Zt(e),ud=e=>e.type==="radio",Ks=e=>e instanceof RegExp;const _p={value:!1,isValid:!1},Pp={value:!0,isValid:!0};var Nv=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Le(e[0].attributes.value)?Le(e[0].value)||e[0].value===""?Pp:{value:e[0].value,isValid:!0}:Pp:_p}return _p};const Tp={isValid:!1,value:null};var Vv=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,Tp):Tp;function Mp(e,t,n="validate"){if(cs(e)||Array.isArray(e)&&e.every(cs)||qt(e)&&!e)return{type:n,message:cs(e)?e:"",ref:t}}var xr=e=>He(e)&&!Ks(e)?e:{value:e,message:""},Rp=async(e,t,n,r,i)=>{const{ref:o,refs:s,required:l,maxLength:a,minLength:u,min:f,max:d,pattern:m,validate:x,name:g,valueAsNumber:v,mount:S,disabled:p}=e._f,h=U(t,g);if(!S||p)return{};const y=s?s[0]:o,b=D=>{r&&y.reportValidity&&(y.setCustomValidity(qt(D)?"":D||""),y.reportValidity())},C={},_=ud(o),j=ao(o),P=_||j,T=(v||ld(o))&&Le(o.value)&&Le(h)||Ys(o)&&o.value===""||h===""||Array.isArray(h)&&!h.length,I=GE.bind(null,g,n,C),B=(D,L,X,Z=on.maxLength,ee=on.minLength)=>{const ve=D?L:X;C[g]={type:D?Z:ee,message:ve,ref:o,...I(D?Z:ee,ve)}};if(i?!Array.isArray(h)||!h.length:l&&(!P&&(T||st(h))||qt(h)&&!h||j&&!Nv(s).isValid||_&&!Vv(s).isValid)){const{value:D,message:L}=cs(l)?{value:!!l,message:l}:xr(l);if(D&&(C[g]={type:on.required,message:L,ref:y,...I(on.required,L)},!n))return b(L),C}if(!T&&(!st(f)||!st(d))){let D,L;const X=xr(d),Z=xr(f);if(!st(h)&&!isNaN(h)){const ee=o.valueAsNumber||h&&+h;st(X.value)||(D=ee>X.value),st(Z.value)||(L=ee<Z.value)}else{const ee=o.valueAsDate||new Date(h),ve=Y=>new Date(new Date().toDateString()+" "+Y),N=o.type=="time",Q=o.type=="week";Zt(X.value)&&h&&(D=N?ve(h)>ve(X.value):Q?h>X.value:ee>new Date(X.value)),Zt(Z.value)&&h&&(L=N?ve(h)<ve(Z.value):Q?h<Z.value:ee<new Date(Z.value))}if((D||L)&&(B(!!D,X.message,Z.message,on.max,on.min),!n))return b(C[g].message),C}if((a||u)&&!T&&(Zt(h)||i&&Array.isArray(h))){const D=xr(a),L=xr(u),X=!st(D.value)&&h.length>+D.value,Z=!st(L.value)&&h.length<+L.value;if((X||Z)&&(B(X,D.message,L.message),!n))return b(C[g].message),C}if(m&&!T&&Zt(h)){const{value:D,message:L}=xr(m);if(Ks(D)&&!h.match(D)&&(C[g]={type:on.pattern,message:L,ref:o,...I(on.pattern,L)},!n))return b(L),C}if(x){if(Dn(x)){const D=await x(h,t),L=Mp(D,y);if(L&&(C[g]={...L,...I(on.validate,L.message)},!n))return b(L.message),C}else if(He(x)){let D={};for(const L in x){if(!Et(D)&&!n)break;const X=Mp(await x[L](h,t),y,L);X&&(D={...X,...I(L,X.message)},b(X.message),n&&(C[g]=D))}if(!Et(D)&&(C[g]={ref:y,...D},!n))return C}}return b(!0),C};function qE(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=Le(e)?r++:e[t[r++]];return e}function JE(e){for(const t in e)if(e.hasOwnProperty(t)&&!Le(e[t]))return!1;return!0}function Ke(e,t){const n=Array.isArray(t)?t:ad(t)?[t]:Fv(t),r=n.length===1?e:qE(e,n),i=n.length-1,o=n[i];return r&&delete r[o],i!==0&&(He(r)&&Et(r)||Array.isArray(r)&&JE(r))&&Ke(e,n.slice(0,-1)),e}function Tl(){let e=[];return{get observers(){return e},next:i=>{for(const o of e)o.next&&o.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(o=>o!==i)}}),unsubscribe:()=>{e=[]}}}var Gs=e=>st(e)||!Tv(e);function rr(e,t){if(Gs(e)||Gs(t))return e===t;if(Rr(e)&&Rr(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n){const o=e[i];if(!r.includes(i))return!1;if(i!=="ref"){const s=t[i];if(Rr(o)&&Rr(s)||He(o)&&He(s)||Array.isArray(o)&&Array.isArray(s)?!rr(o,s):o!==s)return!1}}return!0}var zv=e=>e.type==="select-multiple",ZE=e=>ud(e)||ao(e),Ml=e=>Ys(e)&&e.isConnected,$v=e=>{for(const t in e)if(Dn(e[t]))return!0;return!1};function Xs(e,t={}){const n=Array.isArray(e);if(He(e)||n)for(const r in e)Array.isArray(e[r])||He(e[r])&&!$v(e[r])?(t[r]=Array.isArray(e[r])?[]:{},Xs(e[r],t[r])):st(e[r])||(t[r]=!0);return t}function Uv(e,t,n){const r=Array.isArray(e);if(He(e)||r)for(const i in e)Array.isArray(e[i])||He(e[i])&&!$v(e[i])?Le(t)||Gs(n[i])?n[i]=Array.isArray(e[i])?Xs(e[i],[]):{...Xs(e[i])}:Uv(e[i],st(t)?{}:t[i],n[i]):n[i]=!rr(e[i],t[i]);return n}var Rl=(e,t)=>Uv(e,t,Xs(t)),Bv=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>Le(e)?e:t?e===""?NaN:e&&+e:n&&Zt(e)?new Date(e):r?r(e):e;function Il(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return ld(t)?t.files:ud(t)?Vv(e.refs).value:zv(t)?[...t.selectedOptions].map(({value:n})=>n):ao(t)?Nv(e.refs).value:Bv(Le(t.value)?e.ref.value:t.value,e)}var ej=(e,t,n,r)=>{const i={};for(const o of e){const s=U(t,o);s&&ke(i,o,s._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},gi=e=>Le(e)?e:Ks(e)?e.source:He(e)?Ks(e.value)?e.value.source:e.value:e,tj=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Ip(e,t,n){const r=U(e,n);if(r||ad(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const o=i.join("."),s=U(t,o),l=U(e,o);if(s&&!Array.isArray(s)&&n!==o)return{name:n};if(l&&l.type)return{name:o,error:l};i.pop()}return{name:n}}var nj=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:(n?r.isOnChange:i.isOnChange)?e:!0,rj=(e,t)=>!lo(U(e,t)).length&&Ke(e,t);const ij={mode:zt.onSubmit,reValidateMode:zt.onChange,shouldFocusError:!0};function oj(e={},t){let n={...ij,...e},r={submitCount:0,isDirty:!1,isLoading:Dn(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{},disabled:!1},i={},o=He(n.defaultValues)||He(n.values)?Dt(n.defaultValues||n.values)||{}:{},s=n.shouldUnregister?{}:Dt(o),l={action:!1,mount:!1,watch:!1},a={mount:new Set,unMount:new Set,array:new Set,watch:new Set},u,f=0;const d={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},m={values:Tl(),array:Tl(),state:Tl()},x=e.resetOptions&&e.resetOptions.keepDirtyValues,g=jp(n.mode),v=jp(n.reValidateMode),S=n.criteriaMode===zt.all,p=w=>O=>{clearTimeout(f),f=setTimeout(w,O)},h=async w=>{if(d.isValid||w){const O=n.resolver?Et((await T()).errors):await B(i,!0);O!==r.isValid&&m.state.next({isValid:O})}},y=w=>d.isValidating&&m.state.next({isValidating:w}),b=(w,O=[],k,$,z=!0,V=!0)=>{if($&&k){if(l.action=!0,V&&Array.isArray(U(i,w))){const J=k(U(i,w),$.argA,$.argB);z&&ke(i,w,J)}if(V&&Array.isArray(U(r.errors,w))){const J=k(U(r.errors,w),$.argA,$.argB);z&&ke(r.errors,w,J),rj(r.errors,w)}if(d.touchedFields&&V&&Array.isArray(U(r.touchedFields,w))){const J=k(U(r.touchedFields,w),$.argA,$.argB);z&&ke(r.touchedFields,w,J)}d.dirtyFields&&(r.dirtyFields=Rl(o,s)),m.state.next({name:w,isDirty:L(w,O),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else ke(s,w,O)},C=(w,O)=>{ke(r.errors,w,O),m.state.next({errors:r.errors})},_=(w,O,k,$)=>{const z=U(i,w);if(z){const V=U(s,w,Le(k)?U(o,w):k);Le(V)||$&&$.defaultChecked||O?ke(s,w,O?V:Il(z._f)):ee(w,V),l.mount&&h()}},j=(w,O,k,$,z)=>{let V=!1,J=!1;const Se={name:w};if(!k||$){d.isDirty&&(J=r.isDirty,r.isDirty=Se.isDirty=L(),V=J!==Se.isDirty);const Fe=rr(U(o,w),O);J=U(r.dirtyFields,w),Fe?Ke(r.dirtyFields,w):ke(r.dirtyFields,w,!0),Se.dirtyFields=r.dirtyFields,V=V||d.dirtyFields&&J!==!Fe}if(k){const Fe=U(r.touchedFields,w);Fe||(ke(r.touchedFields,w,k),Se.touchedFields=r.touchedFields,V=V||d.touchedFields&&Fe!==k)}return V&&z&&m.state.next(Se),V?Se:{}},P=(w,O,k,$)=>{const z=U(r.errors,w),V=d.isValid&&qt(O)&&r.isValid!==O;if(e.delayError&&k?(u=p(()=>C(w,k)),u(e.delayError)):(clearTimeout(f),u=null,k?ke(r.errors,w,k):Ke(r.errors,w)),(k?!rr(z,k):z)||!Et($)||V){const J={...$,...V&&qt(O)?{isValid:O}:{},errors:r.errors,name:w};r={...r,...J},m.state.next(J)}y(!1)},T=async w=>n.resolver(s,n.context,ej(w||a.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),I=async w=>{const{errors:O}=await T(w);if(w)for(const k of w){const $=U(O,k);$?ke(r.errors,k,$):Ke(r.errors,k)}else r.errors=O;return O},B=async(w,O,k={valid:!0})=>{for(const $ in w){const z=w[$];if(z){const{_f:V,...J}=z;if(V){const Se=a.array.has(V.name),Fe=await Rp(z,s,S,n.shouldUseNativeValidation&&!O,Se);if(Fe[V.name]&&(k.valid=!1,O))break;!O&&(U(Fe,V.name)?Se?XE(r.errors,Fe,V.name):ke(r.errors,V.name,Fe[V.name]):Ke(r.errors,V.name))}J&&await B(J,O,k)}}return k.valid},D=()=>{for(const w of a.unMount){const O=U(i,w);O&&(O._f.refs?O._f.refs.every(k=>!Ml(k)):!Ml(O._f.ref))&&be(w)}a.unMount=new Set},L=(w,O)=>(w&&O&&ke(s,w,O),!rr(ne(),o)),X=(w,O,k)=>Dv(w,a,{...l.mount?s:Le(O)?o:Zt(w)?{[w]:O}:O},k,O),Z=w=>lo(U(l.mount?s:o,w,e.shouldUnregister?U(o,w,[]):[])),ee=(w,O,k={})=>{const $=U(i,w);let z=O;if($){const V=$._f;V&&(!V.disabled&&ke(s,w,Bv(O,V)),z=Ys(V.ref)&&st(O)?"":O,zv(V.ref)?[...V.ref.options].forEach(J=>J.selected=z.includes(J.value)):V.refs?ao(V.ref)?V.refs.length>1?V.refs.forEach(J=>(!J.defaultChecked||!J.disabled)&&(J.checked=Array.isArray(z)?!!z.find(Se=>Se===J.value):z===J.value)):V.refs[0]&&(V.refs[0].checked=!!z):V.refs.forEach(J=>J.checked=J.value===z):ld(V.ref)?V.ref.value="":(V.ref.value=z,V.ref.type||m.values.next({name:w,values:{...s}})))}(k.shouldDirty||k.shouldTouch)&&j(w,z,k.shouldTouch,k.shouldDirty,!0),k.shouldValidate&&ce(w)},ve=(w,O,k)=>{for(const $ in O){const z=O[$],V=`${w}.${$}`,J=U(i,V);(a.array.has(w)||!Gs(z)||J&&!J._f)&&!Rr(z)?ve(V,z,k):ee(V,z,k)}},N=(w,O,k={})=>{const $=U(i,w),z=a.array.has(w),V=Dt(O);ke(s,w,V),z?(m.array.next({name:w,values:{...s}}),(d.isDirty||d.dirtyFields)&&k.shouldDirty&&m.state.next({name:w,dirtyFields:Rl(o,s),isDirty:L(w,V)})):$&&!$._f&&!st(V)?ve(w,V,k):ee(w,V,k),Op(w,a)&&m.state.next({...r}),m.values.next({name:w,values:{...s}}),!l.mount&&t()},Q=async w=>{const O=w.target;let k=O.name,$=!0;const z=U(i,k),V=()=>O.type?Il(z._f):Mv(w),J=Se=>{$=Number.isNaN(Se)||Se===U(s,k,Se)};if(z){let Se,Fe;const uo=V(),hr=w.type===Qs.BLUR||w.type===Qs.FOCUS_OUT,Hv=!tj(z._f)&&!n.resolver&&!U(r.errors,k)&&!z._f.deps||nj(hr,U(r.touchedFields,k),r.isSubmitted,v,g),Aa=Op(k,a,hr);ke(s,k,uo),hr?(z._f.onBlur&&z._f.onBlur(w),u&&u(0)):z._f.onChange&&z._f.onChange(w);const Da=j(k,uo,hr,!1),Wv=!Et(Da)||Aa;if(!hr&&m.values.next({name:k,type:w.type,values:{...s}}),Hv)return d.isValid&&h(),Wv&&m.state.next({name:k,...Aa?{}:Da});if(!hr&&Aa&&m.state.next({...r}),y(!0),n.resolver){const{errors:cd}=await T([k]);if(J(uo),$){const Qv=Ip(r.errors,i,k),dd=Ip(cd,i,Qv.name||k);Se=dd.error,k=dd.name,Fe=Et(cd)}}else Se=(await Rp(z,s,S,n.shouldUseNativeValidation))[k],J(uo),$&&(Se?Fe=!1:d.isValid&&(Fe=await B(i,!0)));$&&(z._f.deps&&ce(z._f.deps),P(k,Fe,Se,Da))}},Y=(w,O)=>{if(U(r.errors,O)&&w.focus)return w.focus(),1},ce=async(w,O={})=>{let k,$;const z=ls(w);if(y(!0),n.resolver){const V=await I(Le(w)?w:z);k=Et(V),$=w?!z.some(J=>U(V,J)):k}else w?($=(await Promise.all(z.map(async V=>{const J=U(i,V);return await B(J&&J._f?{[V]:J}:J)}))).every(Boolean),!(!$&&!r.isValid)&&h()):$=k=await B(i);return m.state.next({...!Zt(w)||d.isValid&&k!==r.isValid?{}:{name:w},...n.resolver||!w?{isValid:k}:{},errors:r.errors,isValidating:!1}),O.shouldFocus&&!$&&us(i,Y,w?z:a.mount),$},ne=w=>{const O={...o,...l.mount?s:{}};return Le(w)?O:Zt(w)?U(O,w):w.map(k=>U(O,k))},je=(w,O)=>({invalid:!!U((O||r).errors,w),isDirty:!!U((O||r).dirtyFields,w),isTouched:!!U((O||r).touchedFields,w),error:U((O||r).errors,w)}),we=w=>{w&&ls(w).forEach(O=>Ke(r.errors,O)),m.state.next({errors:w?r.errors:{}})},$e=(w,O,k)=>{const $=(U(i,w,{_f:{}})._f||{}).ref;ke(r.errors,w,{...O,ref:$}),m.state.next({name:w,errors:r.errors,isValid:!1}),k&&k.shouldFocus&&$&&$.focus&&$.focus()},he=(w,O)=>Dn(w)?m.values.subscribe({next:k=>w(X(void 0,O),k)}):X(w,O,!0),be=(w,O={})=>{for(const k of w?ls(w):a.mount)a.mount.delete(k),a.array.delete(k),O.keepValue||(Ke(i,k),Ke(s,k)),!O.keepError&&Ke(r.errors,k),!O.keepDirty&&Ke(r.dirtyFields,k),!O.keepTouched&&Ke(r.touchedFields,k),!n.shouldUnregister&&!O.keepDefaultValue&&Ke(o,k);m.values.next({values:{...s}}),m.state.next({...r,...O.keepDirty?{isDirty:L()}:{}}),!O.keepIsValid&&h()},Ze=({disabled:w,name:O,field:k,fields:$,value:z})=>{if(qt(w)){const V=w?void 0:Le(z)?Il(k?k._f:U($,O)._f):z;ke(s,O,V),j(O,V,!1,!1,!0)}},gt=(w,O={})=>{let k=U(i,w);const $=qt(O.disabled);return ke(i,w,{...k||{},_f:{...k&&k._f?k._f:{ref:{name:w}},name:w,mount:!0,...O}}),a.mount.add(w),k?Ze({field:k,disabled:O.disabled,name:w}):_(w,!0,O.value),{...$?{disabled:O.disabled}:{},...n.progressive?{required:!!O.required,min:gi(O.min),max:gi(O.max),minLength:gi(O.minLength),maxLength:gi(O.maxLength),pattern:gi(O.pattern)}:{},name:w,onChange:Q,onBlur:Q,ref:z=>{if(z){gt(w,O),k=U(i,w);const V=Le(z.value)&&z.querySelectorAll&&z.querySelectorAll("input,select,textarea")[0]||z,J=ZE(V),Se=k._f.refs||[];if(J?Se.find(Fe=>Fe===V):V===k._f.ref)return;ke(i,w,{_f:{...k._f,...J?{refs:[...Se.filter(Ml),V,...Array.isArray(U(o,w))?[{}]:[]],ref:{type:V.type,name:w}}:{ref:V}}}),_(w,!1,void 0,V)}else k=U(i,w,{}),k._f&&(k._f.mount=!1),(n.shouldUnregister||O.shouldUnregister)&&!(Rv(a.array,w)&&l.action)&&a.unMount.add(w)}}},F=()=>n.shouldFocusError&&us(i,Y,a.mount),H=w=>{qt(w)&&(m.state.next({disabled:w}),us(i,O=>{O.disabled=w},0,!1))},ie=(w,O)=>async k=>{k&&(k.preventDefault&&k.preventDefault(),k.persist&&k.persist());let $=Dt(s);if(m.state.next({isSubmitting:!0}),n.resolver){const{errors:z,values:V}=await T();r.errors=z,$=V}else await B(i);Ke(r.errors,"root"),Et(r.errors)?(m.state.next({errors:{}}),await w($,k)):(O&&await O({...r.errors},k),F(),setTimeout(F)),m.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Et(r.errors),submitCount:r.submitCount+1,errors:r.errors})},oe=(w,O={})=>{U(i,w)&&(Le(O.defaultValue)?N(w,U(o,w)):(N(w,O.defaultValue),ke(o,w,O.defaultValue)),O.keepTouched||Ke(r.touchedFields,w),O.keepDirty||(Ke(r.dirtyFields,w),r.isDirty=O.defaultValue?L(w,U(o,w)):L()),O.keepError||(Ke(r.errors,w),d.isValid&&h()),m.state.next({...r}))},te=(w,O={})=>{const k=w?Dt(w):o,$=Dt(k),z=w&&!Et(w)?$:o;if(O.keepDefaultValues||(o=k),!O.keepValues){if(O.keepDirtyValues||x)for(const V of a.mount)U(r.dirtyFields,V)?ke(z,V,U(s,V)):N(V,U(z,V));else{if(id&&Le(w))for(const V of a.mount){const J=U(i,V);if(J&&J._f){const Se=Array.isArray(J._f.refs)?J._f.refs[0]:J._f.ref;if(Ys(Se)){const Fe=Se.closest("form");if(Fe){Fe.reset();break}}}}i={}}s=e.shouldUnregister?O.keepDefaultValues?Dt(o):{}:Dt(z),m.array.next({values:{...z}}),m.values.next({values:{...z}})}a={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!l.mount&&t(),l.mount=!d.isValid||!!O.keepIsValid,l.watch=!!e.shouldUnregister,m.state.next({submitCount:O.keepSubmitCount?r.submitCount:0,isDirty:O.keepDirty?r.isDirty:!!(O.keepDefaultValues&&!rr(w,o)),isSubmitted:O.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:O.keepDirtyValues?r.dirtyFields:O.keepDefaultValues&&w?Rl(o,w):{},touchedFields:O.keepTouched?r.touchedFields:{},errors:O.keepErrors?r.errors:{},isSubmitSuccessful:O.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},ae=(w,O)=>te(Dn(w)?w(s):w,O);return{control:{register:gt,unregister:be,getFieldState:je,handleSubmit:ie,setError:$e,_executeSchema:T,_getWatch:X,_getDirty:L,_updateValid:h,_removeUnmounted:D,_updateFieldArray:b,_updateDisabledField:Ze,_getFieldArray:Z,_reset:te,_resetDefaultValues:()=>Dn(n.defaultValues)&&n.defaultValues().then(w=>{ae(w,n.resetOptions),m.state.next({isLoading:!1})}),_updateFormState:w=>{r={...r,...w}},_disableForm:H,_subjects:m,_proxyFormState:d,get _fields(){return i},get _formValues(){return s},get _state(){return l},set _state(w){l=w},get _defaultValues(){return o},get _names(){return a},set _names(w){a=w},get _formState(){return r},set _formState(w){r=w},get _options(){return n},set _options(w){n={...n,...w}}},trigger:ce,register:gt,handleSubmit:ie,watch:he,setValue:N,getValues:ne,reset:ae,resetField:oe,clearErrors:we,unregister:be,setError:$e,setFocus:(w,O={})=>{const k=U(i,w),$=k&&k._f;if($){const z=$.refs?$.refs[0]:$.ref;z.focus&&(z.focus(),O.shouldSelect&&z.select())}},getFieldState:je}}function sj(e={}){const t=Ce.useRef(),n=Ce.useRef(),[r,i]=Ce.useState({isDirty:!1,isValidating:!1,isLoading:Dn(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},disabled:!1,defaultValues:Dn(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...oj(e,()=>i(s=>({...s}))),formState:r});const o=t.current.control;return o._options=e,sd({subject:o._subjects.state,next:s=>{Lv(s,o._proxyFormState,o._updateFormState,!0)&&i({...o._formState})}}),Ce.useEffect(()=>o._disableForm(e.disabled),[o,e.disabled]),Ce.useEffect(()=>{if(o._proxyFormState.isDirty){const s=o._getDirty();s!==r.isDirty&&o._subjects.state.next({isDirty:s})}},[o,r.isDirty]),Ce.useEffect(()=>{e.values&&!rr(e.values,n.current)?(o._reset(e.values,o._options.resetOptions),n.current=e.values):o._resetDefaultValues()},[e.values,o]),Ce.useEffect(()=>{o._state.mount||(o._updateValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next({...o._formState})),o._removeUnmounted()}),t.current.formState=Iv(r,o),t.current}const aj={control:(e,t)=>{const n=t.selectProps.errors;return{...e,display:"flex",width:"668px",height:"56px",marginTop:"8px",padding:"0px 16px",alignItems:"center",flexShrink:"0",alignSelf:"stretch",borderRadius:"16px",outline:"none",border:`1px solid ${n?"var(--secondary-red)":"transparent"}`,backgroundColor:"var(--background-white)",boxShadow:"0px 0px 8px 0px rgba(27, 54, 65, 0.08)","&:hover":{boxShadow:"0px 0px 16px 0px rgba(27, 54, 65, 0.16)"},"&:focus":{outline:"none",border:"1px solid var(--typography-grey)",background:"var(--background-white)",boxShadow:"0px 0px 8px 0px rgba(27, 54, 65, 0.08)"}}},dropdownIndicator:e=>({...e,color:"#062136"}),indicatorSeparator:()=>({color:"red"}),option:e=>({...e,display:"flex",alignItems:"flex-start",fontWeight:"400",backgroundColor:"var(--background-white)",color:"#1B3641","&:hover":{backgroundColor:"rgba(27, 54, 65, 0.2)",borderRadius:"16px",fontWeight:"600"}}),menu:e=>({...e,height:"auto",marginTop:"0",border:"none",borderRadius:"16px",boxShadow:"0px 0px 8px 0px rgba(27, 54, 65, 0.08)",color:"var(--primary-bluedark)",backgroundColor:"var(--background-white)"}),singleValue:e=>({...e,fontSize:"16px",fontWeight:"400",color:"var(--primary-bluedark)"})},lj=()=>{const[e,t]=PE("key",{name:"",email:"",phone:"",service:"",comment:""}),{name:n,email:r,phone:i,service:o,comment:s}=e,{register:l,handleSubmit:a,control:u,setValue:f,formState:{errors:d},reset:m}=sj({mode:"all",shouldFocusError:!1,defaultValues:{}});M.useEffect(()=>{const p=JSON.stringify(e);localStorage.setItem("key",p)},[e]);const x=p=>{f("service",(p==null?void 0:p.value)||""),t({...e,service:(p==null?void 0:p.value)||""})},g=p=>{t({...e,[p.target.name]:p.target.value})},v=async p=>{try{await A2.post("https://healthy-management.onrender.com/api/senddata",p),console.log(p),t({name:"",email:"",phone:"",service:"",comment:""}),m(),alert("Заявка відправлена!")}catch{alert("Помилка при відправці заявки")}},S=[{value:"Менторство та консультації",label:"Менторство та консультації"},{value:"Діагностика",label:"Діагностика"},{value:"Стратегії",label:"Стратегії"},{value:"Навчання",label:"Навчання"},{value:"Інше",label:"Інше"}];return c.jsx("section",{className:"container",id:"contact",children:c.jsxs(ME,{children:[c.jsx(RE,{children:"Контакт"}),c.jsxs(IE,{children:[c.jsxs("picture",{children:[c.jsx("source",{media:"(min-width: 1920px)",srcSet:`${Ep} 1x, ${TE} 2x`}),c.jsx(LE,{src:Ep})]}),c.jsxs(AE,{children:[c.jsx(DE,{children:"Залишайте ваші контактні дані і ми з вами зв'яжемось"}),c.jsxs(FE,{onSubmit:a(v),children:[c.jsxs(zo,{children:["Ім’я",c.jsx(VE,{}),c.jsx(Pl,{type:"text",placeholder:"Введіть своє ім’я",...l("name",{required:"Це поле обов'язкове для заповнення",pattern:{value:/^(?:[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,32}(?:\s+[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,32})?|[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,64})$/,message:"поле повинно містити одне або два слова"}}),value:n,onChange:g,errors:d.name}),d.name&&c.jsxs(mi,{children:[c.jsx(sn,{}),d.name.message]})]}),c.jsxs(zo,{children:["Емейл",c.jsx(sn,{}),c.jsx(Pl,{type:"email",placeholder:"Введіть емейл",...l("email",{required:"Це поле обов'язкове для заповнення",pattern:{value:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,message:"Введіть коректний емейл"}}),value:r,onChange:g,errors:d.email}),d.email&&c.jsxs(mi,{children:[c.jsx(sn,{}),d.email.message]})]}),c.jsxs(zo,{children:["Номер телефону",c.jsx(sn,{}),c.jsx(Pl,{type:"tel",placeholder:"Введіть номер телефону",...l("phone",{required:"Це поле обов'язкове для заповнення",pattern:{value:/^0\d{9}$/,message:"Введіть коректний номер телефона"}}),value:i,onChange:g,errors:d.phone}),d.phone&&c.jsxs(mi,{children:[c.jsx(sn,{}),d.phone.message]})]}),c.jsxs(zo,{children:["Послуга",c.jsx(sn,{}),c.jsx(KE,{name:"service",control:u,shouldUnregister:!1,render:({field:p})=>c.jsx(_E,{...l("service",{required:"Оберіть послугу"}),placeholder:"Оберіть послугу",...p,options:S,styles:aj,errors:d.service,onChange:x,value:S.find(h=>h.value===e.service)}),value:o}),d.service&&c.jsxs(mi,{children:[c.jsx(sn,{}),d.service.message]})]}),c.jsxs(NE,{children:["Повідомлення",c.jsx(zE,{name:"comment",placeholder:"Введіть ваше повідомлення",...l("comment",{pattern:{value:/^.{0,500}$/,message:"Максимальна довжина повідомлення 500 символів"}}),value:s,onChange:g,errors:d.comment}),d.comment&&c.jsxs(mi,{children:[c.jsx(sn,{}),d.comment.message]})]}),c.jsx($E,{type:"submit",children:"Надіслати"})]})]})]})]})})},uj=E.section`
  padding-top: 80px;
  padding-bottom: 80px;
`,cj=E.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  height: 884px;
  background: var(--background-bluedark);
  border-radius: 16px;
  padding: 80px;
`,dj=E.h2`
  font-size: 48px;
  font-weight: 600;
  line-height: 56px;
  color: var(--typography-white);
`,fj=E.p`
  color: var(--typography-white);
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  width: 828px;
`,pj=E.span`
  color: var(--primary-yellow);
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
`,hj=E.ul`
  display: flex;
  gap: 24px;
`,mj=E.li`
  width: calc((100% - (24px * 3)) / 4);
  background: var(--background-white);
  padding: 40px;
  border-radius: 16px;
`,gj=E.a`
  width: 260px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: var(--typography-bluedark);
  background: var(--primary-yellow);
  border-radius: 16px;
  box-shadow: 0px 0px 8px 0px rgba(248, 248, 248, 0.08);
  margin-left: auto;
  margin-right: auto;
`,$o="/healthy-management-project/assets/icon-2-FNpGPcjZ.svg",Ll=[{title:"Менторство та консультації",about:["Для власників та менеджерів з питань менеджменту та розвитку, медичного маркетингу та комунікацій, з питань програм управління здоров'ям","Стейхолдерам та парнерам з питань медичного менеджменту та маркетингу"],path:$o},{title:"Діагностика",about:["Аудит бізнес-процесів","Аудит маркетингу та сервісу","Аудит системи комунікацій та Сustomer Journey Map"],path:$o},{title:"Стратегії",about:["Проведення стратегічних сесій","Розробка стратегії розвитку та маркетингу ","Розробка стратегій внутрішніх комунікацій","Розробка стратегій управління здоров'ям"],path:$o},{title:"Навчання",about:["Медичний маркетинг","Комунікації та сервіс"],path:$o}],vj=()=>c.jsx(uj,{className:"container",id:"services",children:c.jsxs(cj,{children:[c.jsx(dj,{children:"Послуги"}),c.jsxs(fj,{children:["Будуємо ефективні ",c.jsx(pj,{children:"стратегії здорового менеджменту"})," для бізнесів. Розвивайте свій бізнес за допомогою ефективних стратегій здорового менеджменту."]}),c.jsx(hj,{children:Ll==null?void 0:Ll.map(e=>c.jsx(mj,{children:c.jsx(Wc,{title:e.title,about:e.about,additionalComment:!0})},e.title))}),c.jsx(gj,{href:"#contact",children:"Замовити консультацію"})]})});function yj(){const e=(t,n)=>{n.preventDefault();const r=document.getElementById(t);if(r){const i=r.getBoundingClientRect(),o=window.pageYOffset||document.documentElement.scrollTop;let s;window.innerWidth<=768?s=i.top+o-80:s=i.top+o-60,window.scrollTo({top:s,behavior:"smooth"}),setTimeout(()=>{n.target.blur()},1e3)}};return c.jsxs(c.Fragment,{children:[c.jsx(xg,{handleSetActiveLink:e}),c.jsxs("main",{children:[c.jsx(eb,{}),c.jsx(X1,{}),c.jsx(F1,{}),c.jsx(ob,{}),c.jsx(mS,{}),c.jsx(vj,{}),c.jsx(xb,{}),c.jsx(jb,{}),c.jsx(_b,{}),c.jsx(iS,{}),c.jsx(rw,{}),c.jsx(lj,{})]}),c.jsx(vg,{handleSetActiveLink:e}),c.jsx(vS,{})]})}Al.createRoot(document.getElementById("root")).render(c.jsx(Ce.StrictMode,{children:c.jsx(yj,{})}));
