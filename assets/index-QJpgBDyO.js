function qv(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Dp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function eo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Fp={exports:{}},Js={},Np={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var to=Symbol.for("react.element"),Jv=Symbol.for("react.portal"),Zv=Symbol.for("react.fragment"),e0=Symbol.for("react.strict_mode"),t0=Symbol.for("react.profiler"),n0=Symbol.for("react.provider"),r0=Symbol.for("react.context"),i0=Symbol.for("react.forward_ref"),o0=Symbol.for("react.suspense"),s0=Symbol.for("react.memo"),a0=Symbol.for("react.lazy"),fd=Symbol.iterator;function l0(e){return e===null||typeof e!="object"?null:(e=fd&&e[fd]||e["@@iterator"],typeof e=="function"?e:null)}var Vp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zp=Object.assign,$p={};function Xr(e,t,n){this.props=e,this.context=t,this.refs=$p,this.updater=n||Vp}Xr.prototype.isReactComponent={};Xr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Xr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Up(){}Up.prototype=Xr.prototype;function $u(e,t,n){this.props=e,this.context=t,this.refs=$p,this.updater=n||Vp}var Uu=$u.prototype=new Up;Uu.constructor=$u;zp(Uu,Xr.prototype);Uu.isPureReactComponent=!0;var pd=Array.isArray,Bp=Object.prototype.hasOwnProperty,Bu={current:null},Hp={key:!0,ref:!0,__self:!0,__source:!0};function Wp(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Bp.call(t,r)&&!Hp.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:to,type:e,key:o,ref:s,props:i,_owner:Bu.current}}function u0(e,t){return{$$typeof:to,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Hu(e){return typeof e=="object"&&e!==null&&e.$$typeof===to}function c0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var hd=/\/+/g;function Fa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?c0(""+e.key):t.toString(36)}function Ho(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case to:case Jv:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Fa(s,0):r,pd(i)?(n="",e!=null&&(n=e.replace(hd,"$&/")+"/"),Ho(i,t,n,"",function(u){return u})):i!=null&&(Hu(i)&&(i=u0(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(hd,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",pd(e))for(var l=0;l<e.length;l++){o=e[l];var a=r+Fa(o,l);s+=Ho(o,t,n,a,i)}else if(a=l0(e),typeof a=="function")for(e=a.call(e),l=0;!(o=e.next()).done;)o=o.value,a=r+Fa(o,l++),s+=Ho(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function po(e,t,n){if(e==null)return e;var r=[],i=0;return Ho(e,r,"","",function(o){return t.call(n,o,i++)}),r}function d0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ut={current:null},Wo={transition:null},f0={ReactCurrentDispatcher:ut,ReactCurrentBatchConfig:Wo,ReactCurrentOwner:Bu};he.Children={map:po,forEach:function(e,t,n){po(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return po(e,function(){t++}),t},toArray:function(e){return po(e,function(t){return t})||[]},only:function(e){if(!Hu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};he.Component=Xr;he.Fragment=Zv;he.Profiler=t0;he.PureComponent=$u;he.StrictMode=e0;he.Suspense=o0;he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=f0;he.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=zp({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Bu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)Bp.call(t,a)&&!Hp.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:to,type:e.type,key:i,ref:o,props:r,_owner:s}};he.createContext=function(e){return e={$$typeof:r0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:n0,_context:e},e.Consumer=e};he.createElement=Wp;he.createFactory=function(e){var t=Wp.bind(null,e);return t.type=e,t};he.createRef=function(){return{current:null}};he.forwardRef=function(e){return{$$typeof:i0,render:e}};he.isValidElement=Hu;he.lazy=function(e){return{$$typeof:a0,_payload:{_status:-1,_result:e},_init:d0}};he.memo=function(e,t){return{$$typeof:s0,type:e,compare:t===void 0?null:t}};he.startTransition=function(e){var t=Wo.transition;Wo.transition={};try{e()}finally{Wo.transition=t}};he.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};he.useCallback=function(e,t){return ut.current.useCallback(e,t)};he.useContext=function(e){return ut.current.useContext(e)};he.useDebugValue=function(){};he.useDeferredValue=function(e){return ut.current.useDeferredValue(e)};he.useEffect=function(e,t){return ut.current.useEffect(e,t)};he.useId=function(){return ut.current.useId()};he.useImperativeHandle=function(e,t,n){return ut.current.useImperativeHandle(e,t,n)};he.useInsertionEffect=function(e,t){return ut.current.useInsertionEffect(e,t)};he.useLayoutEffect=function(e,t){return ut.current.useLayoutEffect(e,t)};he.useMemo=function(e,t){return ut.current.useMemo(e,t)};he.useReducer=function(e,t,n){return ut.current.useReducer(e,t,n)};he.useRef=function(e){return ut.current.useRef(e)};he.useState=function(e){return ut.current.useState(e)};he.useSyncExternalStore=function(e,t,n){return ut.current.useSyncExternalStore(e,t,n)};he.useTransition=function(){return ut.current.useTransition()};he.version="18.2.0";Np.exports=he;var I=Np.exports;const je=eo(I),md=qv({__proto__:null,default:je},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p0=I,h0=Symbol.for("react.element"),m0=Symbol.for("react.fragment"),g0=Object.prototype.hasOwnProperty,v0=p0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y0={key:!0,ref:!0,__self:!0,__source:!0};function Qp(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)g0.call(t,r)&&!y0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:h0,type:e,key:o,ref:s,props:i,_owner:v0.current}}Js.Fragment=m0;Js.jsx=Qp;Js.jsxs=Qp;Fp.exports=Js;var c=Fp.exports,Al={},Yp={exports:{}},St={},Kp={exports:{}},Gp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,H){var W=A.length;A.push(H);e:for(;0<W;){var J=W-1>>>1,K=A[J];if(0<i(K,H))A[J]=H,A[W]=K,W=J;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var H=A[0],W=A.pop();if(W!==H){A[0]=W;e:for(var J=0,K=A.length,me=K>>>1;J<me;){var fe=2*(J+1)-1,be=A[fe],de=fe+1,ge=A[de];if(0>i(be,W))de<K&&0>i(ge,be)?(A[J]=ge,A[de]=W,J=de):(A[J]=be,A[fe]=W,J=fe);else if(de<K&&0>i(ge,W))A[J]=ge,A[de]=W,J=de;else break e}}return H}function i(A,H){var W=A.sortIndex-H.sortIndex;return W!==0?W:A.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var a=[],u=[],f=1,d=null,m=3,y=!1,v=!1,g=!1,w=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(A){for(var H=n(u);H!==null;){if(H.callback===null)r(u);else if(H.startTime<=A)r(u),H.sortIndex=H.expirationTime,t(a,H);else break;H=n(u)}}function b(A){if(g=!1,x(A),!v)if(n(a)!==null)v=!0,Y(C);else{var H=n(u);H!==null&&pe(b,H.startTime-A)}}function C(A,H){v=!1,g&&(g=!1,h(j),j=-1),y=!0;var W=m;try{for(x(H),d=n(a);d!==null&&(!(d.expirationTime>H)||A&&!D());){var J=d.callback;if(typeof J=="function"){d.callback=null,m=d.priorityLevel;var K=J(d.expirationTime<=H);H=e.unstable_now(),typeof K=="function"?d.callback=K:d===n(a)&&r(a),x(H)}else r(a);d=n(a)}if(d!==null)var me=!0;else{var fe=n(u);fe!==null&&pe(b,fe.startTime-H),me=!1}return me}finally{d=null,m=W,y=!1}}var E=!1,k=null,j=-1,T=5,M=-1;function D(){return!(e.unstable_now()-M<T)}function R(){if(k!==null){var A=e.unstable_now();M=A;var H=!0;try{H=k(!0,A)}finally{H?F():(E=!1,k=null)}}else E=!1}var F;if(typeof p=="function")F=function(){p(R)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,q=G.port2;G.port1.onmessage=R,F=function(){q.postMessage(null)}}else F=function(){w(R,0)};function Y(A){k=A,E||(E=!0,F())}function pe(A,H){j=w(function(){A(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,Y(C))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(A){switch(m){case 1:case 2:case 3:var H=3;break;default:H=m}var W=m;m=H;try{return A()}finally{m=W}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,H){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var W=m;m=A;try{return H()}finally{m=W}},e.unstable_scheduleCallback=function(A,H,W){var J=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?J+W:J):W=J,A){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=W+K,A={id:f++,callback:H,priorityLevel:A,startTime:W,expirationTime:K,sortIndex:-1},W>J?(A.sortIndex=W,t(u,A),n(a)===null&&A===n(u)&&(g?(h(j),j=-1):g=!0,pe(b,W-J))):(A.sortIndex=K,t(a,A),v||y||(v=!0,Y(C))),A},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(A){var H=m;return function(){var W=m;m=H;try{return A.apply(this,arguments)}finally{m=W}}}})(Gp);Kp.exports=Gp;var x0=Kp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp=I,bt=x0;function V(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qp=new Set,Ri={};function pr(e,t){$r(e,t),$r(e+"Capture",t)}function $r(e,t){for(Ri[e]=t,e=0;e<t.length;e++)qp.add(t[e])}var hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Dl=Object.prototype.hasOwnProperty,w0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gd={},vd={};function b0(e){return Dl.call(vd,e)?!0:Dl.call(gd,e)?!1:w0.test(e)?vd[e]=!0:(gd[e]=!0,!1)}function S0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function k0(e,t,n,r){if(t===null||typeof t>"u"||S0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ct(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){et[e]=new ct(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];et[t]=new ct(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){et[e]=new ct(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){et[e]=new ct(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){et[e]=new ct(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){et[e]=new ct(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){et[e]=new ct(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){et[e]=new ct(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){et[e]=new ct(e,5,!1,e.toLowerCase(),null,!1,!1)});var Wu=/[\-:]([a-z])/g;function Qu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Wu,Qu);et[t]=new ct(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Wu,Qu);et[t]=new ct(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Wu,Qu);et[t]=new ct(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){et[e]=new ct(e,1,!1,e.toLowerCase(),null,!1,!1)});et.xlinkHref=new ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){et[e]=new ct(e,1,!1,e.toLowerCase(),null,!0,!0)});function Yu(e,t,n,r){var i=et.hasOwnProperty(t)?et[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(k0(t,n,i,r)&&(n=null),r||i===null?b0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var yn=Xp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ho=Symbol.for("react.element"),br=Symbol.for("react.portal"),Sr=Symbol.for("react.fragment"),Ku=Symbol.for("react.strict_mode"),Fl=Symbol.for("react.profiler"),Jp=Symbol.for("react.provider"),Zp=Symbol.for("react.context"),Gu=Symbol.for("react.forward_ref"),Nl=Symbol.for("react.suspense"),Vl=Symbol.for("react.suspense_list"),Xu=Symbol.for("react.memo"),Tn=Symbol.for("react.lazy"),eh=Symbol.for("react.offscreen"),yd=Symbol.iterator;function ti(e){return e===null||typeof e!="object"?null:(e=yd&&e[yd]||e["@@iterator"],typeof e=="function"?e:null)}var Le=Object.assign,Na;function yi(e){if(Na===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Na=t&&t[1]||""}return`
`+Na+e}var Va=!1;function za(e,t){if(!e||Va)return"";Va=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var a=`
`+i[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=l);break}}}finally{Va=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?yi(e):""}function C0(e){switch(e.tag){case 5:return yi(e.type);case 16:return yi("Lazy");case 13:return yi("Suspense");case 19:return yi("SuspenseList");case 0:case 2:case 15:return e=za(e.type,!1),e;case 11:return e=za(e.type.render,!1),e;case 1:return e=za(e.type,!0),e;default:return""}}function zl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Sr:return"Fragment";case br:return"Portal";case Fl:return"Profiler";case Ku:return"StrictMode";case Nl:return"Suspense";case Vl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Zp:return(e.displayName||"Context")+".Consumer";case Jp:return(e._context.displayName||"Context")+".Provider";case Gu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xu:return t=e.displayName||null,t!==null?t:zl(e.type)||"Memo";case Tn:t=e._payload,e=e._init;try{return zl(e(t))}catch{}}return null}function E0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zl(t);case 8:return t===Ku?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Qn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function th(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function j0(e){var t=th(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function mo(e){e._valueTracker||(e._valueTracker=j0(e))}function nh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=th(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ps(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function $l(e,t){var n=t.checked;return Le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function xd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Qn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function rh(e,t){t=t.checked,t!=null&&Yu(e,"checked",t,!1)}function Ul(e,t){rh(e,t);var n=Qn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Bl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Bl(e,t.type,Qn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function wd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Bl(e,t,n){(t!=="number"||ps(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var xi=Array.isArray;function Lr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Qn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Hl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(V(91));return Le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function bd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(V(92));if(xi(n)){if(1<n.length)throw Error(V(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Qn(n)}}function ih(e,t){var n=Qn(t.value),r=Qn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Sd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function oh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?oh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var go,sh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(go=go||document.createElement("div"),go.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=go.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ii(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ki={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},O0=["Webkit","ms","Moz","O"];Object.keys(ki).forEach(function(e){O0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ki[t]=ki[e]})});function ah(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ki.hasOwnProperty(e)&&ki[e]?(""+t).trim():t+"px"}function lh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ah(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var _0=Le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ql(e,t){if(t){if(_0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(V(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(V(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(V(61))}if(t.style!=null&&typeof t.style!="object")throw Error(V(62))}}function Yl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kl=null;function qu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gl=null,Ar=null,Dr=null;function kd(e){if(e=io(e)){if(typeof Gl!="function")throw Error(V(280));var t=e.stateNode;t&&(t=ra(t),Gl(e.stateNode,e.type,t))}}function uh(e){Ar?Dr?Dr.push(e):Dr=[e]:Ar=e}function ch(){if(Ar){var e=Ar,t=Dr;if(Dr=Ar=null,kd(e),t)for(e=0;e<t.length;e++)kd(t[e])}}function dh(e,t){return e(t)}function fh(){}var $a=!1;function ph(e,t,n){if($a)return e(t,n);$a=!0;try{return dh(e,t,n)}finally{$a=!1,(Ar!==null||Dr!==null)&&(fh(),ch())}}function Li(e,t){var n=e.stateNode;if(n===null)return null;var r=ra(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(V(231,t,typeof n));return n}var Xl=!1;if(hn)try{var ni={};Object.defineProperty(ni,"passive",{get:function(){Xl=!0}}),window.addEventListener("test",ni,ni),window.removeEventListener("test",ni,ni)}catch{Xl=!1}function P0(e,t,n,r,i,o,s,l,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Ci=!1,hs=null,ms=!1,ql=null,T0={onError:function(e){Ci=!0,hs=e}};function M0(e,t,n,r,i,o,s,l,a){Ci=!1,hs=null,P0.apply(T0,arguments)}function R0(e,t,n,r,i,o,s,l,a){if(M0.apply(this,arguments),Ci){if(Ci){var u=hs;Ci=!1,hs=null}else throw Error(V(198));ms||(ms=!0,ql=u)}}function hr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function hh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Cd(e){if(hr(e)!==e)throw Error(V(188))}function I0(e){var t=e.alternate;if(!t){if(t=hr(e),t===null)throw Error(V(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Cd(i),e;if(o===r)return Cd(i),t;o=o.sibling}throw Error(V(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(V(189))}}if(n.alternate!==r)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?e:t}function mh(e){return e=I0(e),e!==null?gh(e):null}function gh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=gh(e);if(t!==null)return t;e=e.sibling}return null}var vh=bt.unstable_scheduleCallback,Ed=bt.unstable_cancelCallback,L0=bt.unstable_shouldYield,A0=bt.unstable_requestPaint,Ve=bt.unstable_now,D0=bt.unstable_getCurrentPriorityLevel,Ju=bt.unstable_ImmediatePriority,yh=bt.unstable_UserBlockingPriority,gs=bt.unstable_NormalPriority,F0=bt.unstable_LowPriority,xh=bt.unstable_IdlePriority,Zs=null,en=null;function N0(e){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Zs,e,void 0,(e.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:$0,V0=Math.log,z0=Math.LN2;function $0(e){return e>>>=0,e===0?32:31-(V0(e)/z0|0)|0}var vo=64,yo=4194304;function wi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=wi(l):(o&=s,o!==0&&(r=wi(o)))}else s=n&~i,s!==0?r=wi(s):o!==0&&(r=wi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-$t(t),i=1<<n,r|=e[n],t&=~i;return r}function U0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function B0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-$t(o),l=1<<s,a=i[s];a===-1?(!(l&n)||l&r)&&(i[s]=U0(l,t)):a<=t&&(e.expiredLanes|=l),o&=~l}}function Jl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function wh(){var e=vo;return vo<<=1,!(vo&4194240)&&(vo=64),e}function Ua(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function no(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-$t(t),e[t]=n}function H0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-$t(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Zu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-$t(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Se=0;function bh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Sh,ec,kh,Ch,Eh,Zl=!1,xo=[],Nn=null,Vn=null,zn=null,Ai=new Map,Di=new Map,Rn=[],W0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jd(e,t){switch(e){case"focusin":case"focusout":Nn=null;break;case"dragenter":case"dragleave":Vn=null;break;case"mouseover":case"mouseout":zn=null;break;case"pointerover":case"pointerout":Ai.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Di.delete(t.pointerId)}}function ri(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=io(t),t!==null&&ec(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Q0(e,t,n,r,i){switch(t){case"focusin":return Nn=ri(Nn,e,t,n,r,i),!0;case"dragenter":return Vn=ri(Vn,e,t,n,r,i),!0;case"mouseover":return zn=ri(zn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ai.set(o,ri(Ai.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Di.set(o,ri(Di.get(o)||null,e,t,n,r,i)),!0}return!1}function jh(e){var t=er(e.target);if(t!==null){var n=hr(t);if(n!==null){if(t=n.tag,t===13){if(t=hh(n),t!==null){e.blockedOn=t,Eh(e.priority,function(){kh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=eu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Kl=r,n.target.dispatchEvent(r),Kl=null}else return t=io(n),t!==null&&ec(t),e.blockedOn=n,!1;t.shift()}return!0}function Od(e,t,n){Qo(e)&&n.delete(t)}function Y0(){Zl=!1,Nn!==null&&Qo(Nn)&&(Nn=null),Vn!==null&&Qo(Vn)&&(Vn=null),zn!==null&&Qo(zn)&&(zn=null),Ai.forEach(Od),Di.forEach(Od)}function ii(e,t){e.blockedOn===t&&(e.blockedOn=null,Zl||(Zl=!0,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,Y0)))}function Fi(e){function t(i){return ii(i,e)}if(0<xo.length){ii(xo[0],e);for(var n=1;n<xo.length;n++){var r=xo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Nn!==null&&ii(Nn,e),Vn!==null&&ii(Vn,e),zn!==null&&ii(zn,e),Ai.forEach(t),Di.forEach(t),n=0;n<Rn.length;n++)r=Rn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Rn.length&&(n=Rn[0],n.blockedOn===null);)jh(n),n.blockedOn===null&&Rn.shift()}var Fr=yn.ReactCurrentBatchConfig,ys=!0;function K0(e,t,n,r){var i=Se,o=Fr.transition;Fr.transition=null;try{Se=1,tc(e,t,n,r)}finally{Se=i,Fr.transition=o}}function G0(e,t,n,r){var i=Se,o=Fr.transition;Fr.transition=null;try{Se=4,tc(e,t,n,r)}finally{Se=i,Fr.transition=o}}function tc(e,t,n,r){if(ys){var i=eu(e,t,n,r);if(i===null)Ja(e,t,r,xs,n),jd(e,r);else if(Q0(i,e,t,n,r))r.stopPropagation();else if(jd(e,r),t&4&&-1<W0.indexOf(e)){for(;i!==null;){var o=io(i);if(o!==null&&Sh(o),o=eu(e,t,n,r),o===null&&Ja(e,t,r,xs,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ja(e,t,r,null,n)}}var xs=null;function eu(e,t,n,r){if(xs=null,e=qu(r),e=er(e),e!==null)if(t=hr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=hh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return xs=e,null}function Oh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(D0()){case Ju:return 1;case yh:return 4;case gs:case F0:return 16;case xh:return 536870912;default:return 16}default:return 16}}var Ln=null,nc=null,Yo=null;function _h(){if(Yo)return Yo;var e,t=nc,n=t.length,r,i="value"in Ln?Ln.value:Ln.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Yo=i.slice(e,1<r?1-r:void 0)}function Ko(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wo(){return!0}function _d(){return!1}function kt(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?wo:_d,this.isPropagationStopped=_d,this}return Le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wo)},persist:function(){},isPersistent:wo}),t}var qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rc=kt(qr),ro=Le({},qr,{view:0,detail:0}),X0=kt(ro),Ba,Ha,oi,ea=Le({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ic,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==oi&&(oi&&e.type==="mousemove"?(Ba=e.screenX-oi.screenX,Ha=e.screenY-oi.screenY):Ha=Ba=0,oi=e),Ba)},movementY:function(e){return"movementY"in e?e.movementY:Ha}}),Pd=kt(ea),q0=Le({},ea,{dataTransfer:0}),J0=kt(q0),Z0=Le({},ro,{relatedTarget:0}),Wa=kt(Z0),ey=Le({},qr,{animationName:0,elapsedTime:0,pseudoElement:0}),ty=kt(ey),ny=Le({},qr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ry=kt(ny),iy=Le({},qr,{data:0}),Td=kt(iy),oy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ay={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ly(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ay[e])?!!t[e]:!1}function ic(){return ly}var uy=Le({},ro,{key:function(e){if(e.key){var t=oy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ko(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ic,charCode:function(e){return e.type==="keypress"?Ko(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ko(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cy=kt(uy),dy=Le({},ea,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Md=kt(dy),fy=Le({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ic}),py=kt(fy),hy=Le({},qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),my=kt(hy),gy=Le({},ea,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vy=kt(gy),yy=[9,13,27,32],oc=hn&&"CompositionEvent"in window,Ei=null;hn&&"documentMode"in document&&(Ei=document.documentMode);var xy=hn&&"TextEvent"in window&&!Ei,Ph=hn&&(!oc||Ei&&8<Ei&&11>=Ei),Rd=" ",Id=!1;function Th(e,t){switch(e){case"keyup":return yy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kr=!1;function wy(e,t){switch(e){case"compositionend":return Mh(t);case"keypress":return t.which!==32?null:(Id=!0,Rd);case"textInput":return e=t.data,e===Rd&&Id?null:e;default:return null}}function by(e,t){if(kr)return e==="compositionend"||!oc&&Th(e,t)?(e=_h(),Yo=nc=Ln=null,kr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ph&&t.locale!=="ko"?null:t.data;default:return null}}var Sy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ld(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sy[e.type]:t==="textarea"}function Rh(e,t,n,r){uh(r),t=ws(t,"onChange"),0<t.length&&(n=new rc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ji=null,Ni=null;function ky(e){Bh(e,0)}function ta(e){var t=jr(e);if(nh(t))return e}function Cy(e,t){if(e==="change")return t}var Ih=!1;if(hn){var Qa;if(hn){var Ya="oninput"in document;if(!Ya){var Ad=document.createElement("div");Ad.setAttribute("oninput","return;"),Ya=typeof Ad.oninput=="function"}Qa=Ya}else Qa=!1;Ih=Qa&&(!document.documentMode||9<document.documentMode)}function Dd(){ji&&(ji.detachEvent("onpropertychange",Lh),Ni=ji=null)}function Lh(e){if(e.propertyName==="value"&&ta(Ni)){var t=[];Rh(t,Ni,e,qu(e)),ph(ky,t)}}function Ey(e,t,n){e==="focusin"?(Dd(),ji=t,Ni=n,ji.attachEvent("onpropertychange",Lh)):e==="focusout"&&Dd()}function jy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ta(Ni)}function Oy(e,t){if(e==="click")return ta(t)}function _y(e,t){if(e==="input"||e==="change")return ta(t)}function Py(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ht=typeof Object.is=="function"?Object.is:Py;function Vi(e,t){if(Ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Dl.call(t,i)||!Ht(e[i],t[i]))return!1}return!0}function Fd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nd(e,t){var n=Fd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fd(n)}}function Ah(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ah(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Dh(){for(var e=window,t=ps();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ps(e.document)}return t}function sc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ty(e){var t=Dh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ah(n.ownerDocument.documentElement,n)){if(r!==null&&sc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Nd(n,o);var s=Nd(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var My=hn&&"documentMode"in document&&11>=document.documentMode,Cr=null,tu=null,Oi=null,nu=!1;function Vd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nu||Cr==null||Cr!==ps(r)||(r=Cr,"selectionStart"in r&&sc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Oi&&Vi(Oi,r)||(Oi=r,r=ws(tu,"onSelect"),0<r.length&&(t=new rc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Cr)))}function bo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Er={animationend:bo("Animation","AnimationEnd"),animationiteration:bo("Animation","AnimationIteration"),animationstart:bo("Animation","AnimationStart"),transitionend:bo("Transition","TransitionEnd")},Ka={},Fh={};hn&&(Fh=document.createElement("div").style,"AnimationEvent"in window||(delete Er.animationend.animation,delete Er.animationiteration.animation,delete Er.animationstart.animation),"TransitionEvent"in window||delete Er.transitionend.transition);function na(e){if(Ka[e])return Ka[e];if(!Er[e])return e;var t=Er[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Fh)return Ka[e]=t[n];return e}var Nh=na("animationend"),Vh=na("animationiteration"),zh=na("animationstart"),$h=na("transitionend"),Uh=new Map,zd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kn(e,t){Uh.set(e,t),pr(t,[e])}for(var Ga=0;Ga<zd.length;Ga++){var Xa=zd[Ga],Ry=Xa.toLowerCase(),Iy=Xa[0].toUpperCase()+Xa.slice(1);Kn(Ry,"on"+Iy)}Kn(Nh,"onAnimationEnd");Kn(Vh,"onAnimationIteration");Kn(zh,"onAnimationStart");Kn("dblclick","onDoubleClick");Kn("focusin","onFocus");Kn("focusout","onBlur");Kn($h,"onTransitionEnd");$r("onMouseEnter",["mouseout","mouseover"]);$r("onMouseLeave",["mouseout","mouseover"]);$r("onPointerEnter",["pointerout","pointerover"]);$r("onPointerLeave",["pointerout","pointerover"]);pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ly=new Set("cancel close invalid load scroll toggle".split(" ").concat(bi));function $d(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,R0(r,t,void 0,e),e.currentTarget=null}function Bh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==o&&i.isPropagationStopped())break e;$d(i,l,u),o=a}else for(s=0;s<r.length;s++){if(l=r[s],a=l.instance,u=l.currentTarget,l=l.listener,a!==o&&i.isPropagationStopped())break e;$d(i,l,u),o=a}}}if(ms)throw e=ql,ms=!1,ql=null,e}function _e(e,t){var n=t[au];n===void 0&&(n=t[au]=new Set);var r=e+"__bubble";n.has(r)||(Hh(t,e,2,!1),n.add(r))}function qa(e,t,n){var r=0;t&&(r|=4),Hh(n,e,r,t)}var So="_reactListening"+Math.random().toString(36).slice(2);function zi(e){if(!e[So]){e[So]=!0,qp.forEach(function(n){n!=="selectionchange"&&(Ly.has(n)||qa(n,!1,e),qa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[So]||(t[So]=!0,qa("selectionchange",!1,t))}}function Hh(e,t,n,r){switch(Oh(t)){case 1:var i=K0;break;case 4:i=G0;break;default:i=tc}n=i.bind(null,t,n,e),i=void 0,!Xl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ja(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;s=s.return}for(;l!==null;){if(s=er(l),s===null)return;if(a=s.tag,a===5||a===6){r=o=s;continue e}l=l.parentNode}}r=r.return}ph(function(){var u=o,f=qu(n),d=[];e:{var m=Uh.get(e);if(m!==void 0){var y=rc,v=e;switch(e){case"keypress":if(Ko(n)===0)break e;case"keydown":case"keyup":y=cy;break;case"focusin":v="focus",y=Wa;break;case"focusout":v="blur",y=Wa;break;case"beforeblur":case"afterblur":y=Wa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Pd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=J0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=py;break;case Nh:case Vh:case zh:y=ty;break;case $h:y=my;break;case"scroll":y=X0;break;case"wheel":y=vy;break;case"copy":case"cut":case"paste":y=ry;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Md}var g=(t&4)!==0,w=!g&&e==="scroll",h=g?m!==null?m+"Capture":null:m;g=[];for(var p=u,x;p!==null;){x=p;var b=x.stateNode;if(x.tag===5&&b!==null&&(x=b,h!==null&&(b=Li(p,h),b!=null&&g.push($i(p,b,x)))),w)break;p=p.return}0<g.length&&(m=new y(m,v,null,n,f),d.push({event:m,listeners:g}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&n!==Kl&&(v=n.relatedTarget||n.fromElement)&&(er(v)||v[mn]))break e;if((y||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?er(v):null,v!==null&&(w=hr(v),v!==w||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(g=Pd,b="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(g=Md,b="onPointerLeave",h="onPointerEnter",p="pointer"),w=y==null?m:jr(y),x=v==null?m:jr(v),m=new g(b,p+"leave",y,n,f),m.target=w,m.relatedTarget=x,b=null,er(f)===u&&(g=new g(h,p+"enter",v,n,f),g.target=x,g.relatedTarget=w,b=g),w=b,y&&v)t:{for(g=y,h=v,p=0,x=g;x;x=gr(x))p++;for(x=0,b=h;b;b=gr(b))x++;for(;0<p-x;)g=gr(g),p--;for(;0<x-p;)h=gr(h),x--;for(;p--;){if(g===h||h!==null&&g===h.alternate)break t;g=gr(g),h=gr(h)}g=null}else g=null;y!==null&&Ud(d,m,y,g,!1),v!==null&&w!==null&&Ud(d,w,v,g,!0)}}e:{if(m=u?jr(u):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var C=Cy;else if(Ld(m))if(Ih)C=_y;else{C=jy;var E=Ey}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(C=Oy);if(C&&(C=C(e,u))){Rh(d,C,n,f);break e}E&&E(e,m,u),e==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&Bl(m,"number",m.value)}switch(E=u?jr(u):window,e){case"focusin":(Ld(E)||E.contentEditable==="true")&&(Cr=E,tu=u,Oi=null);break;case"focusout":Oi=tu=Cr=null;break;case"mousedown":nu=!0;break;case"contextmenu":case"mouseup":case"dragend":nu=!1,Vd(d,n,f);break;case"selectionchange":if(My)break;case"keydown":case"keyup":Vd(d,n,f)}var k;if(oc)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else kr?Th(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(Ph&&n.locale!=="ko"&&(kr||j!=="onCompositionStart"?j==="onCompositionEnd"&&kr&&(k=_h()):(Ln=f,nc="value"in Ln?Ln.value:Ln.textContent,kr=!0)),E=ws(u,j),0<E.length&&(j=new Td(j,e,null,n,f),d.push({event:j,listeners:E}),k?j.data=k:(k=Mh(n),k!==null&&(j.data=k)))),(k=xy?wy(e,n):by(e,n))&&(u=ws(u,"onBeforeInput"),0<u.length&&(f=new Td("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=k))}Bh(d,t)})}function $i(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ws(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Li(e,n),o!=null&&r.unshift($i(e,o,i)),o=Li(e,t),o!=null&&r.push($i(e,o,i))),e=e.return}return r}function gr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ud(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Li(n,o),a!=null&&s.unshift($i(n,a,l))):i||(a=Li(n,o),a!=null&&s.push($i(n,a,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Ay=/\r\n?/g,Dy=/\u0000|\uFFFD/g;function Bd(e){return(typeof e=="string"?e:""+e).replace(Ay,`
`).replace(Dy,"")}function ko(e,t,n){if(t=Bd(t),Bd(e)!==t&&n)throw Error(V(425))}function bs(){}var ru=null,iu=null;function ou(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var su=typeof setTimeout=="function"?setTimeout:void 0,Fy=typeof clearTimeout=="function"?clearTimeout:void 0,Hd=typeof Promise=="function"?Promise:void 0,Ny=typeof queueMicrotask=="function"?queueMicrotask:typeof Hd<"u"?function(e){return Hd.resolve(null).then(e).catch(Vy)}:su;function Vy(e){setTimeout(function(){throw e})}function Za(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Fi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Fi(t)}function $n(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Wd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Jr=Math.random().toString(36).slice(2),Xt="__reactFiber$"+Jr,Ui="__reactProps$"+Jr,mn="__reactContainer$"+Jr,au="__reactEvents$"+Jr,zy="__reactListeners$"+Jr,$y="__reactHandles$"+Jr;function er(e){var t=e[Xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mn]||n[Xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Wd(e);e!==null;){if(n=e[Xt])return n;e=Wd(e)}return t}e=n,n=e.parentNode}return null}function io(e){return e=e[Xt]||e[mn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function jr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(V(33))}function ra(e){return e[Ui]||null}var lu=[],Or=-1;function Gn(e){return{current:e}}function Pe(e){0>Or||(e.current=lu[Or],lu[Or]=null,Or--)}function Oe(e,t){Or++,lu[Or]=e.current,e.current=t}var Yn={},ot=Gn(Yn),pt=Gn(!1),ar=Yn;function Ur(e,t){var n=e.type.contextTypes;if(!n)return Yn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ht(e){return e=e.childContextTypes,e!=null}function Ss(){Pe(pt),Pe(ot)}function Qd(e,t,n){if(ot.current!==Yn)throw Error(V(168));Oe(ot,t),Oe(pt,n)}function Wh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(V(108,E0(e)||"Unknown",i));return Le({},n,r)}function ks(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Yn,ar=ot.current,Oe(ot,e),Oe(pt,pt.current),!0}function Yd(e,t,n){var r=e.stateNode;if(!r)throw Error(V(169));n?(e=Wh(e,t,ar),r.__reactInternalMemoizedMergedChildContext=e,Pe(pt),Pe(ot),Oe(ot,e)):Pe(pt),Oe(pt,n)}var ln=null,ia=!1,el=!1;function Qh(e){ln===null?ln=[e]:ln.push(e)}function Uy(e){ia=!0,Qh(e)}function Xn(){if(!el&&ln!==null){el=!0;var e=0,t=Se;try{var n=ln;for(Se=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ln=null,ia=!1}catch(i){throw ln!==null&&(ln=ln.slice(e+1)),vh(Ju,Xn),i}finally{Se=t,el=!1}}return null}var _r=[],Pr=0,Cs=null,Es=0,jt=[],Ot=0,lr=null,un=1,cn="";function Jn(e,t){_r[Pr++]=Es,_r[Pr++]=Cs,Cs=e,Es=t}function Yh(e,t,n){jt[Ot++]=un,jt[Ot++]=cn,jt[Ot++]=lr,lr=e;var r=un;e=cn;var i=32-$t(r)-1;r&=~(1<<i),n+=1;var o=32-$t(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,un=1<<32-$t(t)+i|n<<i|r,cn=o+e}else un=1<<o|n<<i|r,cn=e}function ac(e){e.return!==null&&(Jn(e,1),Yh(e,1,0))}function lc(e){for(;e===Cs;)Cs=_r[--Pr],_r[Pr]=null,Es=_r[--Pr],_r[Pr]=null;for(;e===lr;)lr=jt[--Ot],jt[Ot]=null,cn=jt[--Ot],jt[Ot]=null,un=jt[--Ot],jt[Ot]=null}var xt=null,yt=null,Me=!1,Vt=null;function Kh(e,t){var n=_t(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Kd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xt=e,yt=$n(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xt=e,yt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=lr!==null?{id:un,overflow:cn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=_t(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xt=e,yt=null,!0):!1;default:return!1}}function uu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function cu(e){if(Me){var t=yt;if(t){var n=t;if(!Kd(e,t)){if(uu(e))throw Error(V(418));t=$n(n.nextSibling);var r=xt;t&&Kd(e,t)?Kh(r,n):(e.flags=e.flags&-4097|2,Me=!1,xt=e)}}else{if(uu(e))throw Error(V(418));e.flags=e.flags&-4097|2,Me=!1,xt=e}}}function Gd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xt=e}function Co(e){if(e!==xt)return!1;if(!Me)return Gd(e),Me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ou(e.type,e.memoizedProps)),t&&(t=yt)){if(uu(e))throw Gh(),Error(V(418));for(;t;)Kh(e,t),t=$n(t.nextSibling)}if(Gd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){yt=$n(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}yt=null}}else yt=xt?$n(e.stateNode.nextSibling):null;return!0}function Gh(){for(var e=yt;e;)e=$n(e.nextSibling)}function Br(){yt=xt=null,Me=!1}function uc(e){Vt===null?Vt=[e]:Vt.push(e)}var By=yn.ReactCurrentBatchConfig;function At(e,t){if(e&&e.defaultProps){t=Le({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var js=Gn(null),Os=null,Tr=null,cc=null;function dc(){cc=Tr=Os=null}function fc(e){var t=js.current;Pe(js),e._currentValue=t}function du(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Nr(e,t){Os=e,cc=Tr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ft=!0),e.firstContext=null)}function Mt(e){var t=e._currentValue;if(cc!==e)if(e={context:e,memoizedValue:t,next:null},Tr===null){if(Os===null)throw Error(V(308));Tr=e,Os.dependencies={lanes:0,firstContext:e}}else Tr=Tr.next=e;return t}var tr=null;function pc(e){tr===null?tr=[e]:tr.push(e)}function Xh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,pc(t)):(n.next=i.next,i.next=n),t.interleaved=n,gn(e,r)}function gn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Mn=!1;function hc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function dn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Un(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ye&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,gn(e,n)}return i=r.interleaved,i===null?(t.next=t,pc(r)):(t.next=i.next,i.next=t),r.interleaved=t,gn(e,n)}function Go(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zu(e,n)}}function Xd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function _s(e,t,n,r){var i=e.updateQueue;Mn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,s===null?o=u:s.next=u,s=a;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==s&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=a))}if(o!==null){var d=i.baseState;s=0,f=u=a=null,l=o;do{var m=l.lane,y=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,g=l;switch(m=t,y=n,g.tag){case 1:if(v=g.payload,typeof v=="function"){d=v.call(y,d,m);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=g.payload,m=typeof v=="function"?v.call(y,d,m):v,m==null)break e;d=Le({},d,m);break e;case 2:Mn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else y={eventTime:y,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=y,a=d):f=f.next=y,s|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(a=d),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);cr|=s,e.lanes=s,e.memoizedState=d}}function qd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(V(191,i));i.call(r)}}}var Jh=new Xp.Component().refs;function fu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Le({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var oa={isMounted:function(e){return(e=e._reactInternals)?hr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=lt(),i=Hn(e),o=dn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Un(e,o,i),t!==null&&(Ut(t,e,i,r),Go(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=lt(),i=Hn(e),o=dn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Un(e,o,i),t!==null&&(Ut(t,e,i,r),Go(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=lt(),r=Hn(e),i=dn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Un(e,i,r),t!==null&&(Ut(t,e,r,n),Go(t,e,r))}};function Jd(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Vi(n,r)||!Vi(i,o):!0}function Zh(e,t,n){var r=!1,i=Yn,o=t.contextType;return typeof o=="object"&&o!==null?o=Mt(o):(i=ht(t)?ar:ot.current,r=t.contextTypes,o=(r=r!=null)?Ur(e,i):Yn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=oa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Zd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&oa.enqueueReplaceState(t,t.state,null)}function pu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Jh,hc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Mt(o):(o=ht(t)?ar:ot.current,i.context=Ur(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(fu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&oa.enqueueReplaceState(i,i.state,null),_s(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function si(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(V(309));var r=n.stateNode}if(!r)throw Error(V(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;l===Jh&&(l=i.refs={}),s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(V(284));if(!n._owner)throw Error(V(290,e))}return e}function Eo(e,t){throw e=Object.prototype.toString.call(t),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ef(e){var t=e._init;return t(e._payload)}function em(e){function t(h,p){if(e){var x=h.deletions;x===null?(h.deletions=[p],h.flags|=16):x.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function i(h,p){return h=Wn(h,p),h.index=0,h.sibling=null,h}function o(h,p,x){return h.index=x,e?(x=h.alternate,x!==null?(x=x.index,x<p?(h.flags|=2,p):x):(h.flags|=2,p)):(h.flags|=1048576,p)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,p,x,b){return p===null||p.tag!==6?(p=al(x,h.mode,b),p.return=h,p):(p=i(p,x),p.return=h,p)}function a(h,p,x,b){var C=x.type;return C===Sr?f(h,p,x.props.children,b,x.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Tn&&ef(C)===p.type)?(b=i(p,x.props),b.ref=si(h,p,x),b.return=h,b):(b=ts(x.type,x.key,x.props,null,h.mode,b),b.ref=si(h,p,x),b.return=h,b)}function u(h,p,x,b){return p===null||p.tag!==4||p.stateNode.containerInfo!==x.containerInfo||p.stateNode.implementation!==x.implementation?(p=ll(x,h.mode,b),p.return=h,p):(p=i(p,x.children||[]),p.return=h,p)}function f(h,p,x,b,C){return p===null||p.tag!==7?(p=sr(x,h.mode,b,C),p.return=h,p):(p=i(p,x),p.return=h,p)}function d(h,p,x){if(typeof p=="string"&&p!==""||typeof p=="number")return p=al(""+p,h.mode,x),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ho:return x=ts(p.type,p.key,p.props,null,h.mode,x),x.ref=si(h,null,p),x.return=h,x;case br:return p=ll(p,h.mode,x),p.return=h,p;case Tn:var b=p._init;return d(h,b(p._payload),x)}if(xi(p)||ti(p))return p=sr(p,h.mode,x,null),p.return=h,p;Eo(h,p)}return null}function m(h,p,x,b){var C=p!==null?p.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:l(h,p,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ho:return x.key===C?a(h,p,x,b):null;case br:return x.key===C?u(h,p,x,b):null;case Tn:return C=x._init,m(h,p,C(x._payload),b)}if(xi(x)||ti(x))return C!==null?null:f(h,p,x,b,null);Eo(h,x)}return null}function y(h,p,x,b,C){if(typeof b=="string"&&b!==""||typeof b=="number")return h=h.get(x)||null,l(p,h,""+b,C);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ho:return h=h.get(b.key===null?x:b.key)||null,a(p,h,b,C);case br:return h=h.get(b.key===null?x:b.key)||null,u(p,h,b,C);case Tn:var E=b._init;return y(h,p,x,E(b._payload),C)}if(xi(b)||ti(b))return h=h.get(x)||null,f(p,h,b,C,null);Eo(p,b)}return null}function v(h,p,x,b){for(var C=null,E=null,k=p,j=p=0,T=null;k!==null&&j<x.length;j++){k.index>j?(T=k,k=null):T=k.sibling;var M=m(h,k,x[j],b);if(M===null){k===null&&(k=T);break}e&&k&&M.alternate===null&&t(h,k),p=o(M,p,j),E===null?C=M:E.sibling=M,E=M,k=T}if(j===x.length)return n(h,k),Me&&Jn(h,j),C;if(k===null){for(;j<x.length;j++)k=d(h,x[j],b),k!==null&&(p=o(k,p,j),E===null?C=k:E.sibling=k,E=k);return Me&&Jn(h,j),C}for(k=r(h,k);j<x.length;j++)T=y(k,h,j,x[j],b),T!==null&&(e&&T.alternate!==null&&k.delete(T.key===null?j:T.key),p=o(T,p,j),E===null?C=T:E.sibling=T,E=T);return e&&k.forEach(function(D){return t(h,D)}),Me&&Jn(h,j),C}function g(h,p,x,b){var C=ti(x);if(typeof C!="function")throw Error(V(150));if(x=C.call(x),x==null)throw Error(V(151));for(var E=C=null,k=p,j=p=0,T=null,M=x.next();k!==null&&!M.done;j++,M=x.next()){k.index>j?(T=k,k=null):T=k.sibling;var D=m(h,k,M.value,b);if(D===null){k===null&&(k=T);break}e&&k&&D.alternate===null&&t(h,k),p=o(D,p,j),E===null?C=D:E.sibling=D,E=D,k=T}if(M.done)return n(h,k),Me&&Jn(h,j),C;if(k===null){for(;!M.done;j++,M=x.next())M=d(h,M.value,b),M!==null&&(p=o(M,p,j),E===null?C=M:E.sibling=M,E=M);return Me&&Jn(h,j),C}for(k=r(h,k);!M.done;j++,M=x.next())M=y(k,h,j,M.value,b),M!==null&&(e&&M.alternate!==null&&k.delete(M.key===null?j:M.key),p=o(M,p,j),E===null?C=M:E.sibling=M,E=M);return e&&k.forEach(function(R){return t(h,R)}),Me&&Jn(h,j),C}function w(h,p,x,b){if(typeof x=="object"&&x!==null&&x.type===Sr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ho:e:{for(var C=x.key,E=p;E!==null;){if(E.key===C){if(C=x.type,C===Sr){if(E.tag===7){n(h,E.sibling),p=i(E,x.props.children),p.return=h,h=p;break e}}else if(E.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Tn&&ef(C)===E.type){n(h,E.sibling),p=i(E,x.props),p.ref=si(h,E,x),p.return=h,h=p;break e}n(h,E);break}else t(h,E);E=E.sibling}x.type===Sr?(p=sr(x.props.children,h.mode,b,x.key),p.return=h,h=p):(b=ts(x.type,x.key,x.props,null,h.mode,b),b.ref=si(h,p,x),b.return=h,h=b)}return s(h);case br:e:{for(E=x.key;p!==null;){if(p.key===E)if(p.tag===4&&p.stateNode.containerInfo===x.containerInfo&&p.stateNode.implementation===x.implementation){n(h,p.sibling),p=i(p,x.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=ll(x,h.mode,b),p.return=h,h=p}return s(h);case Tn:return E=x._init,w(h,p,E(x._payload),b)}if(xi(x))return v(h,p,x,b);if(ti(x))return g(h,p,x,b);Eo(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,p!==null&&p.tag===6?(n(h,p.sibling),p=i(p,x),p.return=h,h=p):(n(h,p),p=al(x,h.mode,b),p.return=h,h=p),s(h)):n(h,p)}return w}var Hr=em(!0),tm=em(!1),oo={},tn=Gn(oo),Bi=Gn(oo),Hi=Gn(oo);function nr(e){if(e===oo)throw Error(V(174));return e}function mc(e,t){switch(Oe(Hi,t),Oe(Bi,e),Oe(tn,oo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Wl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Wl(t,e)}Pe(tn),Oe(tn,t)}function Wr(){Pe(tn),Pe(Bi),Pe(Hi)}function nm(e){nr(Hi.current);var t=nr(tn.current),n=Wl(t,e.type);t!==n&&(Oe(Bi,e),Oe(tn,n))}function gc(e){Bi.current===e&&(Pe(tn),Pe(Bi))}var Re=Gn(0);function Ps(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var tl=[];function vc(){for(var e=0;e<tl.length;e++)tl[e]._workInProgressVersionPrimary=null;tl.length=0}var Xo=yn.ReactCurrentDispatcher,nl=yn.ReactCurrentBatchConfig,ur=0,Ie=null,He=null,Ye=null,Ts=!1,_i=!1,Wi=0,Hy=0;function tt(){throw Error(V(321))}function yc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ht(e[n],t[n]))return!1;return!0}function xc(e,t,n,r,i,o){if(ur=o,Ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xo.current=e===null||e.memoizedState===null?Ky:Gy,e=n(r,i),_i){o=0;do{if(_i=!1,Wi=0,25<=o)throw Error(V(301));o+=1,Ye=He=null,t.updateQueue=null,Xo.current=Xy,e=n(r,i)}while(_i)}if(Xo.current=Ms,t=He!==null&&He.next!==null,ur=0,Ye=He=Ie=null,Ts=!1,t)throw Error(V(300));return e}function wc(){var e=Wi!==0;return Wi=0,e}function Yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?Ie.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function Rt(){if(He===null){var e=Ie.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var t=Ye===null?Ie.memoizedState:Ye.next;if(t!==null)Ye=t,He=e;else{if(e===null)throw Error(V(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Ye===null?Ie.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function Qi(e,t){return typeof t=="function"?t(e):t}function rl(e){var t=Rt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=He,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,a=null,u=o;do{var f=u.lane;if((ur&f)===f)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,s=r):a=a.next=d,Ie.lanes|=f,cr|=f}u=u.next}while(u!==null&&u!==o);a===null?s=r:a.next=l,Ht(r,t.memoizedState)||(ft=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ie.lanes|=o,cr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function il(e){var t=Rt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Ht(o,t.memoizedState)||(ft=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function rm(){}function im(e,t){var n=Ie,r=Rt(),i=t(),o=!Ht(r.memoizedState,i);if(o&&(r.memoizedState=i,ft=!0),r=r.queue,bc(am.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ye!==null&&Ye.memoizedState.tag&1){if(n.flags|=2048,Yi(9,sm.bind(null,n,r,i,t),void 0,null),Ke===null)throw Error(V(349));ur&30||om(n,t,i)}return i}function om(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function sm(e,t,n,r){t.value=n,t.getSnapshot=r,lm(t)&&um(e)}function am(e,t,n){return n(function(){lm(t)&&um(e)})}function lm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ht(e,n)}catch{return!0}}function um(e){var t=gn(e,1);t!==null&&Ut(t,e,1,-1)}function tf(e){var t=Yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:e},t.queue=e,e=e.dispatch=Yy.bind(null,Ie,e),[t.memoizedState,e]}function Yi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function cm(){return Rt().memoizedState}function qo(e,t,n,r){var i=Yt();Ie.flags|=e,i.memoizedState=Yi(1|t,n,void 0,r===void 0?null:r)}function sa(e,t,n,r){var i=Rt();r=r===void 0?null:r;var o=void 0;if(He!==null){var s=He.memoizedState;if(o=s.destroy,r!==null&&yc(r,s.deps)){i.memoizedState=Yi(t,n,o,r);return}}Ie.flags|=e,i.memoizedState=Yi(1|t,n,o,r)}function nf(e,t){return qo(8390656,8,e,t)}function bc(e,t){return sa(2048,8,e,t)}function dm(e,t){return sa(4,2,e,t)}function fm(e,t){return sa(4,4,e,t)}function pm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hm(e,t,n){return n=n!=null?n.concat([e]):null,sa(4,4,pm.bind(null,t,e),n)}function Sc(){}function mm(e,t){var n=Rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function gm(e,t){var n=Rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function vm(e,t,n){return ur&21?(Ht(n,t)||(n=wh(),Ie.lanes|=n,cr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ft=!0),e.memoizedState=n)}function Wy(e,t){var n=Se;Se=n!==0&&4>n?n:4,e(!0);var r=nl.transition;nl.transition={};try{e(!1),t()}finally{Se=n,nl.transition=r}}function ym(){return Rt().memoizedState}function Qy(e,t,n){var r=Hn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},xm(e))wm(t,n);else if(n=Xh(e,t,n,r),n!==null){var i=lt();Ut(n,e,r,i),bm(n,t,r)}}function Yy(e,t,n){var r=Hn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(xm(e))wm(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,Ht(l,s)){var a=t.interleaved;a===null?(i.next=i,pc(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=Xh(e,t,i,r),n!==null&&(i=lt(),Ut(n,e,r,i),bm(n,t,r))}}function xm(e){var t=e.alternate;return e===Ie||t!==null&&t===Ie}function wm(e,t){_i=Ts=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function bm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zu(e,n)}}var Ms={readContext:Mt,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},Ky={readContext:Mt,useCallback:function(e,t){return Yt().memoizedState=[e,t===void 0?null:t],e},useContext:Mt,useEffect:nf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,qo(4194308,4,pm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return qo(4194308,4,e,t)},useInsertionEffect:function(e,t){return qo(4,2,e,t)},useMemo:function(e,t){var n=Yt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Yt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Qy.bind(null,Ie,e),[r.memoizedState,e]},useRef:function(e){var t=Yt();return e={current:e},t.memoizedState=e},useState:tf,useDebugValue:Sc,useDeferredValue:function(e){return Yt().memoizedState=e},useTransition:function(){var e=tf(!1),t=e[0];return e=Wy.bind(null,e[1]),Yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ie,i=Yt();if(Me){if(n===void 0)throw Error(V(407));n=n()}else{if(n=t(),Ke===null)throw Error(V(349));ur&30||om(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,nf(am.bind(null,r,o,e),[e]),r.flags|=2048,Yi(9,sm.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Yt(),t=Ke.identifierPrefix;if(Me){var n=cn,r=un;n=(r&~(1<<32-$t(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Wi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Hy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Gy={readContext:Mt,useCallback:mm,useContext:Mt,useEffect:bc,useImperativeHandle:hm,useInsertionEffect:dm,useLayoutEffect:fm,useMemo:gm,useReducer:rl,useRef:cm,useState:function(){return rl(Qi)},useDebugValue:Sc,useDeferredValue:function(e){var t=Rt();return vm(t,He.memoizedState,e)},useTransition:function(){var e=rl(Qi)[0],t=Rt().memoizedState;return[e,t]},useMutableSource:rm,useSyncExternalStore:im,useId:ym,unstable_isNewReconciler:!1},Xy={readContext:Mt,useCallback:mm,useContext:Mt,useEffect:bc,useImperativeHandle:hm,useInsertionEffect:dm,useLayoutEffect:fm,useMemo:gm,useReducer:il,useRef:cm,useState:function(){return il(Qi)},useDebugValue:Sc,useDeferredValue:function(e){var t=Rt();return He===null?t.memoizedState=e:vm(t,He.memoizedState,e)},useTransition:function(){var e=il(Qi)[0],t=Rt().memoizedState;return[e,t]},useMutableSource:rm,useSyncExternalStore:im,useId:ym,unstable_isNewReconciler:!1};function Qr(e,t){try{var n="",r=t;do n+=C0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ol(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function hu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var qy=typeof WeakMap=="function"?WeakMap:Map;function Sm(e,t,n){n=dn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Is||(Is=!0,Cu=r),hu(e,t)},n}function km(e,t,n){n=dn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){hu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){hu(e,t),typeof r!="function"&&(Bn===null?Bn=new Set([this]):Bn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function rf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new qy;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=dx.bind(null,e,t,n),t.then(e,e))}function of(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function sf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=dn(-1,1),t.tag=2,Un(n,t,1))),n.lanes|=1),e)}var Jy=yn.ReactCurrentOwner,ft=!1;function st(e,t,n,r){t.child=e===null?tm(t,null,n,r):Hr(t,e.child,n,r)}function af(e,t,n,r,i){n=n.render;var o=t.ref;return Nr(t,i),r=xc(e,t,n,r,o,i),n=wc(),e!==null&&!ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,vn(e,t,i)):(Me&&n&&ac(t),t.flags|=1,st(e,t,r,i),t.child)}function lf(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Tc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Cm(e,t,o,r,i)):(e=ts(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Vi,n(s,r)&&e.ref===t.ref)return vn(e,t,i)}return t.flags|=1,e=Wn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Cm(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Vi(o,r)&&e.ref===t.ref)if(ft=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ft=!0);else return t.lanes=e.lanes,vn(e,t,i)}return mu(e,t,n,r,i)}function Em(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Oe(Rr,vt),vt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Oe(Rr,vt),vt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Oe(Rr,vt),vt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Oe(Rr,vt),vt|=r;return st(e,t,i,n),t.child}function jm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function mu(e,t,n,r,i){var o=ht(n)?ar:ot.current;return o=Ur(t,o),Nr(t,i),n=xc(e,t,n,r,o,i),r=wc(),e!==null&&!ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,vn(e,t,i)):(Me&&r&&ac(t),t.flags|=1,st(e,t,n,i),t.child)}function uf(e,t,n,r,i){if(ht(n)){var o=!0;ks(t)}else o=!1;if(Nr(t,i),t.stateNode===null)Jo(e,t),Zh(t,n,r),pu(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var a=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Mt(u):(u=ht(n)?ar:ot.current,u=Ur(t,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Zd(t,s,r,u),Mn=!1;var m=t.memoizedState;s.state=m,_s(t,r,s,i),a=t.memoizedState,l!==r||m!==a||pt.current||Mn?(typeof f=="function"&&(fu(t,n,f,r),a=t.memoizedState),(l=Mn||Jd(t,n,l,r,m,a,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),s.props=r,s.state=a,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,qh(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:At(t.type,l),s.props=u,d=t.pendingProps,m=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=Mt(a):(a=ht(n)?ar:ot.current,a=Ur(t,a));var y=n.getDerivedStateFromProps;(f=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==d||m!==a)&&Zd(t,s,r,a),Mn=!1,m=t.memoizedState,s.state=m,_s(t,r,s,i);var v=t.memoizedState;l!==d||m!==v||pt.current||Mn?(typeof y=="function"&&(fu(t,n,y,r),v=t.memoizedState),(u=Mn||Jd(t,n,u,r,m,v,a)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=a,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return gu(e,t,n,r,o,i)}function gu(e,t,n,r,i,o){jm(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Yd(t,n,!1),vn(e,t,o);r=t.stateNode,Jy.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Hr(t,e.child,null,o),t.child=Hr(t,null,l,o)):st(e,t,l,o),t.memoizedState=r.state,i&&Yd(t,n,!0),t.child}function Om(e){var t=e.stateNode;t.pendingContext?Qd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Qd(e,t.context,!1),mc(e,t.containerInfo)}function cf(e,t,n,r,i){return Br(),uc(i),t.flags|=256,st(e,t,n,r),t.child}var vu={dehydrated:null,treeContext:null,retryLane:0};function yu(e){return{baseLanes:e,cachePool:null,transitions:null}}function _m(e,t,n){var r=t.pendingProps,i=Re.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Oe(Re,i&1),e===null)return cu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=ua(s,r,0,null),e=sr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=yu(n),t.memoizedState=vu,e):kc(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Zy(e,t,s,r,l,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Wn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Wn(l,o):(o=sr(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?yu(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=vu,r}return o=e.child,e=o.sibling,r=Wn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function kc(e,t){return t=ua({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function jo(e,t,n,r){return r!==null&&uc(r),Hr(t,e.child,null,n),e=kc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Zy(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=ol(Error(V(422))),jo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ua({mode:"visible",children:r.children},i,0,null),o=sr(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Hr(t,e.child,null,s),t.child.memoizedState=yu(s),t.memoizedState=vu,o);if(!(t.mode&1))return jo(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(V(419)),r=ol(o,r,void 0),jo(e,t,s,r)}if(l=(s&e.childLanes)!==0,ft||l){if(r=Ke,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,gn(e,i),Ut(r,e,i,-1))}return Pc(),r=ol(Error(V(421))),jo(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=fx.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,yt=$n(i.nextSibling),xt=t,Me=!0,Vt=null,e!==null&&(jt[Ot++]=un,jt[Ot++]=cn,jt[Ot++]=lr,un=e.id,cn=e.overflow,lr=t),t=kc(t,r.children),t.flags|=4096,t)}function df(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),du(e.return,t,n)}function sl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Pm(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(st(e,t,r.children,n),r=Re.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&df(e,n,t);else if(e.tag===19)df(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Oe(Re,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ps(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),sl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ps(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}sl(t,!0,n,null,o);break;case"together":sl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Jo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function vn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),cr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(V(153));if(t.child!==null){for(e=t.child,n=Wn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ex(e,t,n){switch(t.tag){case 3:Om(t),Br();break;case 5:nm(t);break;case 1:ht(t.type)&&ks(t);break;case 4:mc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Oe(js,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Oe(Re,Re.current&1),t.flags|=128,null):n&t.child.childLanes?_m(e,t,n):(Oe(Re,Re.current&1),e=vn(e,t,n),e!==null?e.sibling:null);Oe(Re,Re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Pm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Oe(Re,Re.current),r)break;return null;case 22:case 23:return t.lanes=0,Em(e,t,n)}return vn(e,t,n)}var Tm,xu,Mm,Rm;Tm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xu=function(){};Mm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,nr(tn.current);var o=null;switch(n){case"input":i=$l(e,i),r=$l(e,r),o=[];break;case"select":i=Le({},i,{value:void 0}),r=Le({},r,{value:void 0}),o=[];break;case"textarea":i=Hl(e,i),r=Hl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=bs)}Ql(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ri.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(o||(o=[]),o.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(o=o||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ri.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&_e("scroll",e),o||l===a||(o=[])):(o=o||[]).push(u,a))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Rm=function(e,t,n,r){n!==r&&(t.flags|=4)};function ai(e,t){if(!Me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function nt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function tx(e,t,n){var r=t.pendingProps;switch(lc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(t),null;case 1:return ht(t.type)&&Ss(),nt(t),null;case 3:return r=t.stateNode,Wr(),Pe(pt),Pe(ot),vc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Co(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Vt!==null&&(Ou(Vt),Vt=null))),xu(e,t),nt(t),null;case 5:gc(t);var i=nr(Hi.current);if(n=t.type,e!==null&&t.stateNode!=null)Mm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(V(166));return nt(t),null}if(e=nr(tn.current),Co(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Xt]=t,r[Ui]=o,e=(t.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<bi.length;i++)_e(bi[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":xd(r,o),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},_e("invalid",r);break;case"textarea":bd(r,o),_e("invalid",r)}Ql(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&ko(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&ko(r.textContent,l,e),i=["children",""+l]):Ri.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&_e("scroll",r)}switch(n){case"input":mo(r),wd(r,o,!0);break;case"textarea":mo(r),Sd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=bs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=oh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Xt]=t,e[Ui]=r,Tm(e,t,!1,!1),t.stateNode=e;e:{switch(s=Yl(n,r),n){case"dialog":_e("cancel",e),_e("close",e),i=r;break;case"iframe":case"object":case"embed":_e("load",e),i=r;break;case"video":case"audio":for(i=0;i<bi.length;i++)_e(bi[i],e);i=r;break;case"source":_e("error",e),i=r;break;case"img":case"image":case"link":_e("error",e),_e("load",e),i=r;break;case"details":_e("toggle",e),i=r;break;case"input":xd(e,r),i=$l(e,r),_e("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Le({},r,{value:void 0}),_e("invalid",e);break;case"textarea":bd(e,r),i=Hl(e,r),_e("invalid",e);break;default:i=r}Ql(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="style"?lh(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&sh(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Ii(e,a):typeof a=="number"&&Ii(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ri.hasOwnProperty(o)?a!=null&&o==="onScroll"&&_e("scroll",e):a!=null&&Yu(e,o,a,s))}switch(n){case"input":mo(e),wd(e,r,!1);break;case"textarea":mo(e),Sd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Qn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Lr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Lr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=bs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return nt(t),null;case 6:if(e&&t.stateNode!=null)Rm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(V(166));if(n=nr(Hi.current),nr(tn.current),Co(t)){if(r=t.stateNode,n=t.memoizedProps,r[Xt]=t,(o=r.nodeValue!==n)&&(e=xt,e!==null))switch(e.tag){case 3:ko(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ko(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xt]=t,t.stateNode=r}return nt(t),null;case 13:if(Pe(Re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Me&&yt!==null&&t.mode&1&&!(t.flags&128))Gh(),Br(),t.flags|=98560,o=!1;else if(o=Co(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(V(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(V(317));o[Xt]=t}else Br(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;nt(t),o=!1}else Vt!==null&&(Ou(Vt),Vt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Re.current&1?We===0&&(We=3):Pc())),t.updateQueue!==null&&(t.flags|=4),nt(t),null);case 4:return Wr(),xu(e,t),e===null&&zi(t.stateNode.containerInfo),nt(t),null;case 10:return fc(t.type._context),nt(t),null;case 17:return ht(t.type)&&Ss(),nt(t),null;case 19:if(Pe(Re),o=t.memoizedState,o===null)return nt(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)ai(o,!1);else{if(We!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ps(e),s!==null){for(t.flags|=128,ai(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Oe(Re,Re.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ve()>Yr&&(t.flags|=128,r=!0,ai(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ps(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ai(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Me)return nt(t),null}else 2*Ve()-o.renderingStartTime>Yr&&n!==1073741824&&(t.flags|=128,r=!0,ai(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ve(),t.sibling=null,n=Re.current,Oe(Re,r?n&1|2:n&1),t):(nt(t),null);case 22:case 23:return _c(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?vt&1073741824&&(nt(t),t.subtreeFlags&6&&(t.flags|=8192)):nt(t),null;case 24:return null;case 25:return null}throw Error(V(156,t.tag))}function nx(e,t){switch(lc(t),t.tag){case 1:return ht(t.type)&&Ss(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wr(),Pe(pt),Pe(ot),vc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return gc(t),null;case 13:if(Pe(Re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(V(340));Br()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Pe(Re),null;case 4:return Wr(),null;case 10:return fc(t.type._context),null;case 22:case 23:return _c(),null;case 24:return null;default:return null}}var Oo=!1,it=!1,rx=typeof WeakSet=="function"?WeakSet:Set,X=null;function Mr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){De(e,t,r)}else n.current=null}function wu(e,t,n){try{n()}catch(r){De(e,t,r)}}var ff=!1;function ix(e,t){if(ru=ys,e=Dh(),sc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,a=-1,u=0,f=0,d=e,m=null;t:for(;;){for(var y;d!==n||i!==0&&d.nodeType!==3||(l=s+i),d!==o||r!==0&&d.nodeType!==3||(a=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(y=d.firstChild)!==null;)m=d,d=y;for(;;){if(d===e)break t;if(m===n&&++u===i&&(l=s),m===o&&++f===r&&(a=s),(y=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=y}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(iu={focusedElem:e,selectionRange:n},ys=!1,X=t;X!==null;)if(t=X,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,X=e;else for(;X!==null;){t=X;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var g=v.memoizedProps,w=v.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?g:At(t.type,g),w);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(b){De(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,X=e;break}X=t.return}return v=ff,ff=!1,v}function Pi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&wu(t,n,o)}i=i.next}while(i!==r)}}function aa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function bu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Im(e){var t=e.alternate;t!==null&&(e.alternate=null,Im(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Xt],delete t[Ui],delete t[au],delete t[zy],delete t[$y])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Lm(e){return e.tag===5||e.tag===3||e.tag===4}function pf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Lm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Su(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=bs));else if(r!==4&&(e=e.child,e!==null))for(Su(e,t,n),e=e.sibling;e!==null;)Su(e,t,n),e=e.sibling}function ku(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ku(e,t,n),e=e.sibling;e!==null;)ku(e,t,n),e=e.sibling}var qe=null,Ft=!1;function wn(e,t,n){for(n=n.child;n!==null;)Am(e,t,n),n=n.sibling}function Am(e,t,n){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Zs,n)}catch{}switch(n.tag){case 5:it||Mr(n,t);case 6:var r=qe,i=Ft;qe=null,wn(e,t,n),qe=r,Ft=i,qe!==null&&(Ft?(e=qe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&(Ft?(e=qe,n=n.stateNode,e.nodeType===8?Za(e.parentNode,n):e.nodeType===1&&Za(e,n),Fi(e)):Za(qe,n.stateNode));break;case 4:r=qe,i=Ft,qe=n.stateNode.containerInfo,Ft=!0,wn(e,t,n),qe=r,Ft=i;break;case 0:case 11:case 14:case 15:if(!it&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&wu(n,t,s),i=i.next}while(i!==r)}wn(e,t,n);break;case 1:if(!it&&(Mr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){De(n,t,l)}wn(e,t,n);break;case 21:wn(e,t,n);break;case 22:n.mode&1?(it=(r=it)||n.memoizedState!==null,wn(e,t,n),it=r):wn(e,t,n);break;default:wn(e,t,n)}}function hf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new rx),t.forEach(function(r){var i=px.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function It(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:qe=l.stateNode,Ft=!1;break e;case 3:qe=l.stateNode.containerInfo,Ft=!0;break e;case 4:qe=l.stateNode.containerInfo,Ft=!0;break e}l=l.return}if(qe===null)throw Error(V(160));Am(o,s,i),qe=null,Ft=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){De(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Dm(t,e),t=t.sibling}function Dm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(It(t,e),Wt(e),r&4){try{Pi(3,e,e.return),aa(3,e)}catch(g){De(e,e.return,g)}try{Pi(5,e,e.return)}catch(g){De(e,e.return,g)}}break;case 1:It(t,e),Wt(e),r&512&&n!==null&&Mr(n,n.return);break;case 5:if(It(t,e),Wt(e),r&512&&n!==null&&Mr(n,n.return),e.flags&32){var i=e.stateNode;try{Ii(i,"")}catch(g){De(e,e.return,g)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&rh(i,o),Yl(l,s);var u=Yl(l,o);for(s=0;s<a.length;s+=2){var f=a[s],d=a[s+1];f==="style"?lh(i,d):f==="dangerouslySetInnerHTML"?sh(i,d):f==="children"?Ii(i,d):Yu(i,f,d,u)}switch(l){case"input":Ul(i,o);break;case"textarea":ih(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Lr(i,!!o.multiple,y,!1):m!==!!o.multiple&&(o.defaultValue!=null?Lr(i,!!o.multiple,o.defaultValue,!0):Lr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ui]=o}catch(g){De(e,e.return,g)}}break;case 6:if(It(t,e),Wt(e),r&4){if(e.stateNode===null)throw Error(V(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(g){De(e,e.return,g)}}break;case 3:if(It(t,e),Wt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fi(t.containerInfo)}catch(g){De(e,e.return,g)}break;case 4:It(t,e),Wt(e);break;case 13:It(t,e),Wt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(jc=Ve())),r&4&&hf(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(it=(u=it)||f,It(t,e),it=u):It(t,e),Wt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(X=e,f=e.child;f!==null;){for(d=X=f;X!==null;){switch(m=X,y=m.child,m.tag){case 0:case 11:case 14:case 15:Pi(4,m,m.return);break;case 1:Mr(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(g){De(r,n,g)}}break;case 5:Mr(m,m.return);break;case 22:if(m.memoizedState!==null){gf(d);continue}}y!==null?(y.return=m,X=y):gf(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=d.stateNode,a=d.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=ah("display",s))}catch(g){De(e,e.return,g)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(g){De(e,e.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:It(t,e),Wt(e),r&4&&hf(e);break;case 21:break;default:It(t,e),Wt(e)}}function Wt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Lm(n)){var r=n;break e}n=n.return}throw Error(V(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ii(i,""),r.flags&=-33);var o=pf(e);ku(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=pf(e);Su(e,l,s);break;default:throw Error(V(161))}}catch(a){De(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ox(e,t,n){X=e,Fm(e)}function Fm(e,t,n){for(var r=(e.mode&1)!==0;X!==null;){var i=X,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Oo;if(!s){var l=i.alternate,a=l!==null&&l.memoizedState!==null||it;l=Oo;var u=it;if(Oo=s,(it=a)&&!u)for(X=i;X!==null;)s=X,a=s.child,s.tag===22&&s.memoizedState!==null?vf(i):a!==null?(a.return=s,X=a):vf(i);for(;o!==null;)X=o,Fm(o),o=o.sibling;X=i,Oo=l,it=u}mf(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,X=o):mf(e)}}function mf(e){for(;X!==null;){var t=X;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:it||aa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!it)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:At(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&qd(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}qd(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Fi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}it||t.flags&512&&bu(t)}catch(m){De(t,t.return,m)}}if(t===e){X=null;break}if(n=t.sibling,n!==null){n.return=t.return,X=n;break}X=t.return}}function gf(e){for(;X!==null;){var t=X;if(t===e){X=null;break}var n=t.sibling;if(n!==null){n.return=t.return,X=n;break}X=t.return}}function vf(e){for(;X!==null;){var t=X;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{aa(4,t)}catch(a){De(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){De(t,i,a)}}var o=t.return;try{bu(t)}catch(a){De(t,o,a)}break;case 5:var s=t.return;try{bu(t)}catch(a){De(t,s,a)}}}catch(a){De(t,t.return,a)}if(t===e){X=null;break}var l=t.sibling;if(l!==null){l.return=t.return,X=l;break}X=t.return}}var sx=Math.ceil,Rs=yn.ReactCurrentDispatcher,Cc=yn.ReactCurrentOwner,Pt=yn.ReactCurrentBatchConfig,ye=0,Ke=null,Ue=null,Ze=0,vt=0,Rr=Gn(0),We=0,Ki=null,cr=0,la=0,Ec=0,Ti=null,dt=null,jc=0,Yr=1/0,an=null,Is=!1,Cu=null,Bn=null,_o=!1,An=null,Ls=0,Mi=0,Eu=null,Zo=-1,es=0;function lt(){return ye&6?Ve():Zo!==-1?Zo:Zo=Ve()}function Hn(e){return e.mode&1?ye&2&&Ze!==0?Ze&-Ze:By.transition!==null?(es===0&&(es=wh()),es):(e=Se,e!==0||(e=window.event,e=e===void 0?16:Oh(e.type)),e):1}function Ut(e,t,n,r){if(50<Mi)throw Mi=0,Eu=null,Error(V(185));no(e,n,r),(!(ye&2)||e!==Ke)&&(e===Ke&&(!(ye&2)&&(la|=n),We===4&&In(e,Ze)),mt(e,r),n===1&&ye===0&&!(t.mode&1)&&(Yr=Ve()+500,ia&&Xn()))}function mt(e,t){var n=e.callbackNode;B0(e,t);var r=vs(e,e===Ke?Ze:0);if(r===0)n!==null&&Ed(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ed(n),t===1)e.tag===0?Uy(yf.bind(null,e)):Qh(yf.bind(null,e)),Ny(function(){!(ye&6)&&Xn()}),n=null;else{switch(bh(r)){case 1:n=Ju;break;case 4:n=yh;break;case 16:n=gs;break;case 536870912:n=xh;break;default:n=gs}n=Wm(n,Nm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Nm(e,t){if(Zo=-1,es=0,ye&6)throw Error(V(327));var n=e.callbackNode;if(Vr()&&e.callbackNode!==n)return null;var r=vs(e,e===Ke?Ze:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=As(e,r);else{t=r;var i=ye;ye|=2;var o=zm();(Ke!==e||Ze!==t)&&(an=null,Yr=Ve()+500,or(e,t));do try{ux();break}catch(l){Vm(e,l)}while(!0);dc(),Rs.current=o,ye=i,Ue!==null?t=0:(Ke=null,Ze=0,t=We)}if(t!==0){if(t===2&&(i=Jl(e),i!==0&&(r=i,t=ju(e,i))),t===1)throw n=Ki,or(e,0),In(e,r),mt(e,Ve()),n;if(t===6)In(e,r);else{if(i=e.current.alternate,!(r&30)&&!ax(i)&&(t=As(e,r),t===2&&(o=Jl(e),o!==0&&(r=o,t=ju(e,o))),t===1))throw n=Ki,or(e,0),In(e,r),mt(e,Ve()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(V(345));case 2:Zn(e,dt,an);break;case 3:if(In(e,r),(r&130023424)===r&&(t=jc+500-Ve(),10<t)){if(vs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){lt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=su(Zn.bind(null,e,dt,an),t);break}Zn(e,dt,an);break;case 4:if(In(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-$t(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sx(r/1960))-r,10<r){e.timeoutHandle=su(Zn.bind(null,e,dt,an),r);break}Zn(e,dt,an);break;case 5:Zn(e,dt,an);break;default:throw Error(V(329))}}}return mt(e,Ve()),e.callbackNode===n?Nm.bind(null,e):null}function ju(e,t){var n=Ti;return e.current.memoizedState.isDehydrated&&(or(e,t).flags|=256),e=As(e,t),e!==2&&(t=dt,dt=n,t!==null&&Ou(t)),e}function Ou(e){dt===null?dt=e:dt.push.apply(dt,e)}function ax(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ht(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function In(e,t){for(t&=~Ec,t&=~la,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-$t(t),r=1<<n;e[n]=-1,t&=~r}}function yf(e){if(ye&6)throw Error(V(327));Vr();var t=vs(e,0);if(!(t&1))return mt(e,Ve()),null;var n=As(e,t);if(e.tag!==0&&n===2){var r=Jl(e);r!==0&&(t=r,n=ju(e,r))}if(n===1)throw n=Ki,or(e,0),In(e,t),mt(e,Ve()),n;if(n===6)throw Error(V(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Zn(e,dt,an),mt(e,Ve()),null}function Oc(e,t){var n=ye;ye|=1;try{return e(t)}finally{ye=n,ye===0&&(Yr=Ve()+500,ia&&Xn())}}function dr(e){An!==null&&An.tag===0&&!(ye&6)&&Vr();var t=ye;ye|=1;var n=Pt.transition,r=Se;try{if(Pt.transition=null,Se=1,e)return e()}finally{Se=r,Pt.transition=n,ye=t,!(ye&6)&&Xn()}}function _c(){vt=Rr.current,Pe(Rr)}function or(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Fy(n)),Ue!==null)for(n=Ue.return;n!==null;){var r=n;switch(lc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ss();break;case 3:Wr(),Pe(pt),Pe(ot),vc();break;case 5:gc(r);break;case 4:Wr();break;case 13:Pe(Re);break;case 19:Pe(Re);break;case 10:fc(r.type._context);break;case 22:case 23:_c()}n=n.return}if(Ke=e,Ue=e=Wn(e.current,null),Ze=vt=t,We=0,Ki=null,Ec=la=cr=0,dt=Ti=null,tr!==null){for(t=0;t<tr.length;t++)if(n=tr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}tr=null}return e}function Vm(e,t){do{var n=Ue;try{if(dc(),Xo.current=Ms,Ts){for(var r=Ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ts=!1}if(ur=0,Ye=He=Ie=null,_i=!1,Wi=0,Cc.current=null,n===null||n.return===null){We=1,Ki=t,Ue=null;break}e:{var o=e,s=n.return,l=n,a=t;if(t=Ze,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,f=l,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=of(s);if(y!==null){y.flags&=-257,sf(y,s,l,o,t),y.mode&1&&rf(o,u,t),t=y,a=u;var v=t.updateQueue;if(v===null){var g=new Set;g.add(a),t.updateQueue=g}else v.add(a);break e}else{if(!(t&1)){rf(o,u,t),Pc();break e}a=Error(V(426))}}else if(Me&&l.mode&1){var w=of(s);if(w!==null){!(w.flags&65536)&&(w.flags|=256),sf(w,s,l,o,t),uc(Qr(a,l));break e}}o=a=Qr(a,l),We!==4&&(We=2),Ti===null?Ti=[o]:Ti.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=Sm(o,a,t);Xd(o,h);break e;case 1:l=a;var p=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Bn===null||!Bn.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var b=km(o,l,t);Xd(o,b);break e}}o=o.return}while(o!==null)}Um(n)}catch(C){t=C,Ue===n&&n!==null&&(Ue=n=n.return);continue}break}while(!0)}function zm(){var e=Rs.current;return Rs.current=Ms,e===null?Ms:e}function Pc(){(We===0||We===3||We===2)&&(We=4),Ke===null||!(cr&268435455)&&!(la&268435455)||In(Ke,Ze)}function As(e,t){var n=ye;ye|=2;var r=zm();(Ke!==e||Ze!==t)&&(an=null,or(e,t));do try{lx();break}catch(i){Vm(e,i)}while(!0);if(dc(),ye=n,Rs.current=r,Ue!==null)throw Error(V(261));return Ke=null,Ze=0,We}function lx(){for(;Ue!==null;)$m(Ue)}function ux(){for(;Ue!==null&&!L0();)$m(Ue)}function $m(e){var t=Hm(e.alternate,e,vt);e.memoizedProps=e.pendingProps,t===null?Um(e):Ue=t,Cc.current=null}function Um(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=nx(n,t),n!==null){n.flags&=32767,Ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{We=6,Ue=null;return}}else if(n=tx(n,t,vt),n!==null){Ue=n;return}if(t=t.sibling,t!==null){Ue=t;return}Ue=t=e}while(t!==null);We===0&&(We=5)}function Zn(e,t,n){var r=Se,i=Pt.transition;try{Pt.transition=null,Se=1,cx(e,t,n,r)}finally{Pt.transition=i,Se=r}return null}function cx(e,t,n,r){do Vr();while(An!==null);if(ye&6)throw Error(V(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(V(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(H0(e,o),e===Ke&&(Ue=Ke=null,Ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_o||(_o=!0,Wm(gs,function(){return Vr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Pt.transition,Pt.transition=null;var s=Se;Se=1;var l=ye;ye|=4,Cc.current=null,ix(e,n),Dm(n,e),Ty(iu),ys=!!ru,iu=ru=null,e.current=n,ox(n),A0(),ye=l,Se=s,Pt.transition=o}else e.current=n;if(_o&&(_o=!1,An=e,Ls=i),o=e.pendingLanes,o===0&&(Bn=null),N0(n.stateNode),mt(e,Ve()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Is)throw Is=!1,e=Cu,Cu=null,e;return Ls&1&&e.tag!==0&&Vr(),o=e.pendingLanes,o&1?e===Eu?Mi++:(Mi=0,Eu=e):Mi=0,Xn(),null}function Vr(){if(An!==null){var e=bh(Ls),t=Pt.transition,n=Se;try{if(Pt.transition=null,Se=16>e?16:e,An===null)var r=!1;else{if(e=An,An=null,Ls=0,ye&6)throw Error(V(331));var i=ye;for(ye|=4,X=e.current;X!==null;){var o=X,s=o.child;if(X.flags&16){var l=o.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(X=u;X!==null;){var f=X;switch(f.tag){case 0:case 11:case 15:Pi(8,f,o)}var d=f.child;if(d!==null)d.return=f,X=d;else for(;X!==null;){f=X;var m=f.sibling,y=f.return;if(Im(f),f===u){X=null;break}if(m!==null){m.return=y,X=m;break}X=y}}}var v=o.alternate;if(v!==null){var g=v.child;if(g!==null){v.child=null;do{var w=g.sibling;g.sibling=null,g=w}while(g!==null)}}X=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,X=s;else e:for(;X!==null;){if(o=X,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Pi(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,X=h;break e}X=o.return}}var p=e.current;for(X=p;X!==null;){s=X;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,X=x;else e:for(s=p;X!==null;){if(l=X,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:aa(9,l)}}catch(C){De(l,l.return,C)}if(l===s){X=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,X=b;break e}X=l.return}}if(ye=i,Xn(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Zs,e)}catch{}r=!0}return r}finally{Se=n,Pt.transition=t}}return!1}function xf(e,t,n){t=Qr(n,t),t=Sm(e,t,1),e=Un(e,t,1),t=lt(),e!==null&&(no(e,1,t),mt(e,t))}function De(e,t,n){if(e.tag===3)xf(e,e,n);else for(;t!==null;){if(t.tag===3){xf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Bn===null||!Bn.has(r))){e=Qr(n,e),e=km(t,e,1),t=Un(t,e,1),e=lt(),t!==null&&(no(t,1,e),mt(t,e));break}}t=t.return}}function dx(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=lt(),e.pingedLanes|=e.suspendedLanes&n,Ke===e&&(Ze&n)===n&&(We===4||We===3&&(Ze&130023424)===Ze&&500>Ve()-jc?or(e,0):Ec|=n),mt(e,t)}function Bm(e,t){t===0&&(e.mode&1?(t=yo,yo<<=1,!(yo&130023424)&&(yo=4194304)):t=1);var n=lt();e=gn(e,t),e!==null&&(no(e,t,n),mt(e,n))}function fx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Bm(e,n)}function px(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(t),Bm(e,n)}var Hm;Hm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||pt.current)ft=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ft=!1,ex(e,t,n);ft=!!(e.flags&131072)}else ft=!1,Me&&t.flags&1048576&&Yh(t,Es,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Jo(e,t),e=t.pendingProps;var i=Ur(t,ot.current);Nr(t,n),i=xc(null,t,r,e,i,n);var o=wc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ht(r)?(o=!0,ks(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hc(t),i.updater=oa,t.stateNode=i,i._reactInternals=t,pu(t,r,e,n),t=gu(null,t,r,!0,o,n)):(t.tag=0,Me&&o&&ac(t),st(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Jo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=mx(r),e=At(r,e),i){case 0:t=mu(null,t,r,e,n);break e;case 1:t=uf(null,t,r,e,n);break e;case 11:t=af(null,t,r,e,n);break e;case 14:t=lf(null,t,r,At(r.type,e),n);break e}throw Error(V(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:At(r,i),mu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:At(r,i),uf(e,t,r,i,n);case 3:e:{if(Om(t),e===null)throw Error(V(387));r=t.pendingProps,o=t.memoizedState,i=o.element,qh(e,t),_s(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Qr(Error(V(423)),t),t=cf(e,t,r,n,i);break e}else if(r!==i){i=Qr(Error(V(424)),t),t=cf(e,t,r,n,i);break e}else for(yt=$n(t.stateNode.containerInfo.firstChild),xt=t,Me=!0,Vt=null,n=tm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Br(),r===i){t=vn(e,t,n);break e}st(e,t,r,n)}t=t.child}return t;case 5:return nm(t),e===null&&cu(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,ou(r,i)?s=null:o!==null&&ou(r,o)&&(t.flags|=32),jm(e,t),st(e,t,s,n),t.child;case 6:return e===null&&cu(t),null;case 13:return _m(e,t,n);case 4:return mc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Hr(t,null,r,n):st(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:At(r,i),af(e,t,r,i,n);case 7:return st(e,t,t.pendingProps,n),t.child;case 8:return st(e,t,t.pendingProps.children,n),t.child;case 12:return st(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,Oe(js,r._currentValue),r._currentValue=s,o!==null)if(Ht(o.value,s)){if(o.children===i.children&&!pt.current){t=vn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=dn(-1,n&-n),a.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?a.next=a:(a.next=f.next,f.next=a),u.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),du(o.return,n,t),l.lanes|=n;break}a=a.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(V(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),du(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}st(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Nr(t,n),i=Mt(i),r=r(i),t.flags|=1,st(e,t,r,n),t.child;case 14:return r=t.type,i=At(r,t.pendingProps),i=At(r.type,i),lf(e,t,r,i,n);case 15:return Cm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:At(r,i),Jo(e,t),t.tag=1,ht(r)?(e=!0,ks(t)):e=!1,Nr(t,n),Zh(t,r,i),pu(t,r,i,n),gu(null,t,r,!0,e,n);case 19:return Pm(e,t,n);case 22:return Em(e,t,n)}throw Error(V(156,t.tag))};function Wm(e,t){return vh(e,t)}function hx(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _t(e,t,n,r){return new hx(e,t,n,r)}function Tc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mx(e){if(typeof e=="function")return Tc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Gu)return 11;if(e===Xu)return 14}return 2}function Wn(e,t){var n=e.alternate;return n===null?(n=_t(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ts(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Tc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Sr:return sr(n.children,i,o,t);case Ku:s=8,i|=8;break;case Fl:return e=_t(12,n,t,i|2),e.elementType=Fl,e.lanes=o,e;case Nl:return e=_t(13,n,t,i),e.elementType=Nl,e.lanes=o,e;case Vl:return e=_t(19,n,t,i),e.elementType=Vl,e.lanes=o,e;case eh:return ua(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Jp:s=10;break e;case Zp:s=9;break e;case Gu:s=11;break e;case Xu:s=14;break e;case Tn:s=16,r=null;break e}throw Error(V(130,e==null?e:typeof e,""))}return t=_t(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function sr(e,t,n,r){return e=_t(7,e,r,t),e.lanes=n,e}function ua(e,t,n,r){return e=_t(22,e,r,t),e.elementType=eh,e.lanes=n,e.stateNode={isHidden:!1},e}function al(e,t,n){return e=_t(6,e,null,t),e.lanes=n,e}function ll(e,t,n){return t=_t(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function gx(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ua(0),this.expirationTimes=Ua(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ua(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Mc(e,t,n,r,i,o,s,l,a){return e=new gx(e,t,n,l,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=_t(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hc(o),e}function vx(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:br,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Qm(e){if(!e)return Yn;e=e._reactInternals;e:{if(hr(e)!==e||e.tag!==1)throw Error(V(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ht(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(V(171))}if(e.tag===1){var n=e.type;if(ht(n))return Wh(e,n,t)}return t}function Ym(e,t,n,r,i,o,s,l,a){return e=Mc(n,r,!0,e,i,o,s,l,a),e.context=Qm(null),n=e.current,r=lt(),i=Hn(n),o=dn(r,i),o.callback=t??null,Un(n,o,i),e.current.lanes=i,no(e,i,r),mt(e,r),e}function ca(e,t,n,r){var i=t.current,o=lt(),s=Hn(i);return n=Qm(n),t.context===null?t.context=n:t.pendingContext=n,t=dn(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Un(i,t,s),e!==null&&(Ut(e,i,s,o),Go(e,i,s)),s}function Ds(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Rc(e,t){wf(e,t),(e=e.alternate)&&wf(e,t)}function yx(){return null}var Km=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ic(e){this._internalRoot=e}da.prototype.render=Ic.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(V(409));ca(e,t,null,null)};da.prototype.unmount=Ic.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dr(function(){ca(null,e,null,null)}),t[mn]=null}};function da(e){this._internalRoot=e}da.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ch();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rn.length&&t!==0&&t<Rn[n].priority;n++);Rn.splice(n,0,e),n===0&&jh(e)}};function Lc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function bf(){}function xx(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Ds(s);o.call(u)}}var s=Ym(t,r,e,0,null,!1,!1,"",bf);return e._reactRootContainer=s,e[mn]=s.current,zi(e.nodeType===8?e.parentNode:e),dr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Ds(a);l.call(u)}}var a=Mc(e,0,!1,null,null,!1,!1,"",bf);return e._reactRootContainer=a,e[mn]=a.current,zi(e.nodeType===8?e.parentNode:e),dr(function(){ca(t,a,n,r)}),a}function pa(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var a=Ds(s);l.call(a)}}ca(t,s,e,i)}else s=xx(n,t,e,i,r);return Ds(s)}Sh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=wi(t.pendingLanes);n!==0&&(Zu(t,n|1),mt(t,Ve()),!(ye&6)&&(Yr=Ve()+500,Xn()))}break;case 13:dr(function(){var r=gn(e,1);if(r!==null){var i=lt();Ut(r,e,1,i)}}),Rc(e,1)}};ec=function(e){if(e.tag===13){var t=gn(e,134217728);if(t!==null){var n=lt();Ut(t,e,134217728,n)}Rc(e,134217728)}};kh=function(e){if(e.tag===13){var t=Hn(e),n=gn(e,t);if(n!==null){var r=lt();Ut(n,e,t,r)}Rc(e,t)}};Ch=function(){return Se};Eh=function(e,t){var n=Se;try{return Se=e,t()}finally{Se=n}};Gl=function(e,t,n){switch(t){case"input":if(Ul(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ra(r);if(!i)throw Error(V(90));nh(r),Ul(r,i)}}}break;case"textarea":ih(e,n);break;case"select":t=n.value,t!=null&&Lr(e,!!n.multiple,t,!1)}};dh=Oc;fh=dr;var wx={usingClientEntryPoint:!1,Events:[io,jr,ra,uh,ch,Oc]},li={findFiberByHostInstance:er,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},bx={bundleType:li.bundleType,version:li.version,rendererPackageName:li.rendererPackageName,rendererConfig:li.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=mh(e),e===null?null:e.stateNode},findFiberByHostInstance:li.findFiberByHostInstance||yx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Po=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Po.isDisabled&&Po.supportsFiber)try{Zs=Po.inject(bx),en=Po}catch{}}St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wx;St.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lc(t))throw Error(V(200));return vx(e,t,null,n)};St.createRoot=function(e,t){if(!Lc(e))throw Error(V(299));var n=!1,r="",i=Km;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Mc(e,1,!1,null,null,n,!1,r,i),e[mn]=t.current,zi(e.nodeType===8?e.parentNode:e),new Ic(t)};St.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(V(188)):(e=Object.keys(e).join(","),Error(V(268,e)));return e=mh(t),e=e===null?null:e.stateNode,e};St.flushSync=function(e){return dr(e)};St.hydrate=function(e,t,n){if(!fa(t))throw Error(V(200));return pa(null,e,t,!0,n)};St.hydrateRoot=function(e,t,n){if(!Lc(e))throw Error(V(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Km;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Ym(t,null,e,1,n??null,i,!1,o,s),e[mn]=t.current,zi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new da(t)};St.render=function(e,t,n){if(!fa(t))throw Error(V(200));return pa(null,e,t,!1,n)};St.unmountComponentAtNode=function(e){if(!fa(e))throw Error(V(40));return e._reactRootContainer?(dr(function(){pa(null,null,e,!1,function(){e._reactRootContainer=null,e[mn]=null})}),!0):!1};St.unstable_batchedUpdates=Oc;St.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!fa(n))throw Error(V(200));if(e==null||e._reactInternals===void 0)throw Error(V(38));return pa(e,t,n,!1,r)};St.version="18.2.0-next-9e3b772b8-20220608";function Gm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gm)}catch(e){console.error(e)}}Gm(),Yp.exports=St;var ha=Yp.exports;const Sx=eo(ha);var Sf=ha;Al.createRoot=Sf.createRoot,Al.hydrateRoot=Sf.hydrateRoot;var Xm={exports:{}};(function(e,t){(function(r,i){e.exports=i(I)})(Dp,n=>(()=>{var r={"./node_modules/css-mediaquery/index.js":(l,a)=>{a.match=v,a.parse=g;var u=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,f=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,d=/^(?:(min|max)-)?(.+)/,m=/(em|rem|px|cm|mm|in|pt|pc)?$/,y=/(dpi|dpcm|dppx)?$/;function v(x,b){return g(x).some(function(C){var E=C.inverse,k=C.type==="all"||b.type===C.type;if(k&&E||!(k||E))return!1;var j=C.expressions.every(function(T){var M=T.feature,D=T.modifier,R=T.value,F=b[M];if(!F)return!1;switch(M){case"orientation":case"scan":return F.toLowerCase()===R.toLowerCase();case"width":case"height":case"device-width":case"device-height":R=p(R),F=p(F);break;case"resolution":R=h(R),F=h(F);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":R=w(R),F=w(F);break;case"grid":case"color":case"color-index":case"monochrome":R=parseInt(R,10)||1,F=parseInt(F,10)||0;break}switch(D){case"min":return F>=R;case"max":return F<=R;default:return F===R}});return j&&!E||!j&&E})}function g(x){return x.split(",").map(function(b){b=b.trim();var C=b.match(u),E=C[1],k=C[2],j=C[3]||"",T={};return T.inverse=!!E&&E.toLowerCase()==="not",T.type=k?k.toLowerCase():"all",j=j.match(/\([^\)]+\)/g)||[],T.expressions=j.map(function(M){var D=M.match(f),R=D[1].toLowerCase().match(d);return{modifier:R[1],feature:R[2],value:D[2]}}),T})}function w(x){var b=Number(x),C;return b||(C=x.match(/^(\d+)\s*\/\s*(\d+)$/),b=C[1]/C[2]),b}function h(x){var b=parseFloat(x),C=String(x).match(y)[1];switch(C){case"dpcm":return b/2.54;case"dppx":return b*96;default:return b}}function p(x){var b=parseFloat(x),C=String(x).match(m)[1];switch(C){case"em":return b*16;case"rem":return b*16;case"cm":return b*96/2.54;case"mm":return b*96/2.54/10;case"in":return b*96;case"pt":return b*72;case"pc":return b*72/12;default:return b}}},"./node_modules/hyphenate-style-name/index.js":(l,a,u)=>{u.r(a),u.d(a,{default:()=>g});var f=/[A-Z]/g,d=/^ms-/,m={};function y(w){return"-"+w.toLowerCase()}function v(w){if(m.hasOwnProperty(w))return m[w];var h=w.replace(f,y);return m[w]=d.test(h)?"-"+h:h}const g=v},"./node_modules/matchmediaquery/index.js":(l,a,u)=>{var f=u("./node_modules/css-mediaquery/index.js").match,d=typeof window<"u"?window.matchMedia:null;function m(v,g,w){var h=this;if(d&&!w){var p=d.call(window,v);this.matches=p.matches,this.media=p.media,p.addListener(C)}else this.matches=f(v,g),this.media=v;this.addListener=x,this.removeListener=b,this.dispose=E;function x(k){p&&p.addListener(k)}function b(k){p&&p.removeListener(k)}function C(k){h.matches=k.matches,h.media=k.media}function E(){p&&p.removeListener(C)}}function y(v,g,w){return new m(v,g,w)}l.exports=y},"./node_modules/object-assign/index.js":l=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var a=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;function d(y){if(y==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(y)}function m(){try{if(!Object.assign)return!1;var y=new String("abc");if(y[5]="de",Object.getOwnPropertyNames(y)[0]==="5")return!1;for(var v={},g=0;g<10;g++)v["_"+String.fromCharCode(g)]=g;var w=Object.getOwnPropertyNames(v).map(function(p){return v[p]});if(w.join("")!=="0123456789")return!1;var h={};return"abcdefghijklmnopqrst".split("").forEach(function(p){h[p]=p}),Object.keys(Object.assign({},h)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}l.exports=m()?Object.assign:function(y,v){for(var g,w=d(y),h,p=1;p<arguments.length;p++){g=Object(arguments[p]);for(var x in g)u.call(g,x)&&(w[x]=g[x]);if(a){h=a(g);for(var b=0;b<h.length;b++)f.call(g,h[b])&&(w[h[b]]=g[h[b]])}}return w}},"./node_modules/prop-types/checkPropTypes.js":(l,a,u)=>{var f=function(){};{var d=u("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),m={},y=u("./node_modules/prop-types/lib/has.js");f=function(g){var w="Warning: "+g;typeof console<"u"&&console.error(w);try{throw new Error(w)}catch{}}}function v(g,w,h,p,x){for(var b in g)if(y(g,b)){var C;try{if(typeof g[b]!="function"){var E=Error((p||"React class")+": "+h+" type `"+b+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof g[b]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw E.name="Invariant Violation",E}C=g[b](w,b,p,h,null,d)}catch(j){C=j}if(C&&!(C instanceof Error)&&f((p||"React class")+": type specification of "+h+" `"+b+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof C+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),C instanceof Error&&!(C.message in m)){m[C.message]=!0;var k=x?x():"";f("Failed "+h+" type: "+C.message+(k??""))}}}v.resetWarningCache=function(){m={}},l.exports=v},"./node_modules/prop-types/factoryWithTypeCheckers.js":(l,a,u)=>{var f=u("./node_modules/react-is/index.js"),d=u("./node_modules/object-assign/index.js"),m=u("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),y=u("./node_modules/prop-types/lib/has.js"),v=u("./node_modules/prop-types/checkPropTypes.js"),g=function(){};g=function(h){var p="Warning: "+h;typeof console<"u"&&console.error(p);try{throw new Error(p)}catch{}};function w(){return null}l.exports=function(h,p){var x=typeof Symbol=="function"&&Symbol.iterator,b="@@iterator";function C(N){var B=N&&(x&&N[x]||N[b]);if(typeof B=="function")return B}var E="<<anonymous>>",k={array:D("array"),bigint:D("bigint"),bool:D("boolean"),func:D("function"),number:D("number"),object:D("object"),string:D("string"),symbol:D("symbol"),any:R(),arrayOf:F,element:G(),elementType:q(),instanceOf:Y,node:W(),objectOf:A,oneOf:pe,oneOfType:H,shape:K,exact:me};function j(N,B){return N===B?N!==0||1/N===1/B:N!==N&&B!==B}function T(N,B){this.message=N,this.data=B&&typeof B=="object"?B:{},this.stack=""}T.prototype=Error.prototype;function M(N){var B={},se=0;function te(ne,ee,le,ue,S,P,O){if(ue=ue||E,P=P||le,O!==m){if(p){var U=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw U.name="Invariant Violation",U}else if(typeof console<"u"){var $=ue+":"+le;!B[$]&&se<3&&(g("You are manually calling a React.PropTypes validation function for the `"+P+"` prop on `"+ue+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),B[$]=!0,se++)}}return ee[le]==null?ne?ee[le]===null?new T("The "+S+" `"+P+"` is marked as required "+("in `"+ue+"`, but its value is `null`.")):new T("The "+S+" `"+P+"` is marked as required in "+("`"+ue+"`, but its value is `undefined`.")):null:N(ee,le,ue,S,P)}var Z=te.bind(null,!1);return Z.isRequired=te.bind(null,!0),Z}function D(N){function B(se,te,Z,ne,ee,le){var ue=se[te],S=de(ue);if(S!==N){var P=ge(ue);return new T("Invalid "+ne+" `"+ee+"` of type "+("`"+P+"` supplied to `"+Z+"`, expected ")+("`"+N+"`."),{expectedType:N})}return null}return M(B)}function R(){return M(w)}function F(N){function B(se,te,Z,ne,ee){if(typeof N!="function")return new T("Property `"+ee+"` of component `"+Z+"` has invalid PropType notation inside arrayOf.");var le=se[te];if(!Array.isArray(le)){var ue=de(le);return new T("Invalid "+ne+" `"+ee+"` of type "+("`"+ue+"` supplied to `"+Z+"`, expected an array."))}for(var S=0;S<le.length;S++){var P=N(le,S,Z,ne,ee+"["+S+"]",m);if(P instanceof Error)return P}return null}return M(B)}function G(){function N(B,se,te,Z,ne){var ee=B[se];if(!h(ee)){var le=de(ee);return new T("Invalid "+Z+" `"+ne+"` of type "+("`"+le+"` supplied to `"+te+"`, expected a single ReactElement."))}return null}return M(N)}function q(){function N(B,se,te,Z,ne){var ee=B[se];if(!f.isValidElementType(ee)){var le=de(ee);return new T("Invalid "+Z+" `"+ne+"` of type "+("`"+le+"` supplied to `"+te+"`, expected a single ReactElement type."))}return null}return M(N)}function Y(N){function B(se,te,Z,ne,ee){if(!(se[te]instanceof N)){var le=N.name||E,ue=Ae(se[te]);return new T("Invalid "+ne+" `"+ee+"` of type "+("`"+ue+"` supplied to `"+Z+"`, expected ")+("instance of `"+le+"`."))}return null}return M(B)}function pe(N){if(!Array.isArray(N))return arguments.length>1?g("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):g("Invalid argument supplied to oneOf, expected an array."),w;function B(se,te,Z,ne,ee){for(var le=se[te],ue=0;ue<N.length;ue++)if(j(le,N[ue]))return null;var S=JSON.stringify(N,function(O,U){var $=ge(U);return $==="symbol"?String(U):U});return new T("Invalid "+ne+" `"+ee+"` of value `"+String(le)+"` "+("supplied to `"+Z+"`, expected one of "+S+"."))}return M(B)}function A(N){function B(se,te,Z,ne,ee){if(typeof N!="function")return new T("Property `"+ee+"` of component `"+Z+"` has invalid PropType notation inside objectOf.");var le=se[te],ue=de(le);if(ue!=="object")return new T("Invalid "+ne+" `"+ee+"` of type "+("`"+ue+"` supplied to `"+Z+"`, expected an object."));for(var S in le)if(y(le,S)){var P=N(le,S,Z,ne,ee+"."+S,m);if(P instanceof Error)return P}return null}return M(B)}function H(N){if(!Array.isArray(N))return g("Invalid argument supplied to oneOfType, expected an instance of array."),w;for(var B=0;B<N.length;B++){var se=N[B];if(typeof se!="function")return g("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+Te(se)+" at index "+B+"."),w}function te(Z,ne,ee,le,ue){for(var S=[],P=0;P<N.length;P++){var O=N[P],U=O(Z,ne,ee,le,ue,m);if(U==null)return null;U.data&&y(U.data,"expectedType")&&S.push(U.data.expectedType)}var $=S.length>0?", expected one of type ["+S.join(", ")+"]":"";return new T("Invalid "+le+" `"+ue+"` supplied to "+("`"+ee+"`"+$+"."))}return M(te)}function W(){function N(B,se,te,Z,ne){return fe(B[se])?null:new T("Invalid "+Z+" `"+ne+"` supplied to "+("`"+te+"`, expected a ReactNode."))}return M(N)}function J(N,B,se,te,Z){return new T((N||"React class")+": "+B+" type `"+se+"."+te+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+Z+"`.")}function K(N){function B(se,te,Z,ne,ee){var le=se[te],ue=de(le);if(ue!=="object")return new T("Invalid "+ne+" `"+ee+"` of type `"+ue+"` "+("supplied to `"+Z+"`, expected `object`."));for(var S in N){var P=N[S];if(typeof P!="function")return J(Z,ne,ee,S,ge(P));var O=P(le,S,Z,ne,ee+"."+S,m);if(O)return O}return null}return M(B)}function me(N){function B(se,te,Z,ne,ee){var le=se[te],ue=de(le);if(ue!=="object")return new T("Invalid "+ne+" `"+ee+"` of type `"+ue+"` "+("supplied to `"+Z+"`, expected `object`."));var S=d({},se[te],N);for(var P in S){var O=N[P];if(y(N,P)&&typeof O!="function")return J(Z,ne,ee,P,ge(O));if(!O)return new T("Invalid "+ne+" `"+ee+"` key `"+P+"` supplied to `"+Z+"`.\nBad object: "+JSON.stringify(se[te],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(N),null,"  "));var U=O(le,P,Z,ne,ee+"."+P,m);if(U)return U}return null}return M(B)}function fe(N){switch(typeof N){case"number":case"string":case"undefined":return!0;case"boolean":return!N;case"object":if(Array.isArray(N))return N.every(fe);if(N===null||h(N))return!0;var B=C(N);if(B){var se=B.call(N),te;if(B!==N.entries){for(;!(te=se.next()).done;)if(!fe(te.value))return!1}else for(;!(te=se.next()).done;){var Z=te.value;if(Z&&!fe(Z[1]))return!1}}else return!1;return!0;default:return!1}}function be(N,B){return N==="symbol"?!0:B?B["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&B instanceof Symbol:!1}function de(N){var B=typeof N;return Array.isArray(N)?"array":N instanceof RegExp?"object":be(B,N)?"symbol":B}function ge(N){if(typeof N>"u"||N===null)return""+N;var B=de(N);if(B==="object"){if(N instanceof Date)return"date";if(N instanceof RegExp)return"regexp"}return B}function Te(N){var B=ge(N);switch(B){case"array":case"object":return"an "+B;case"boolean":case"date":case"regexp":return"a "+B;default:return B}}function Ae(N){return!N.constructor||!N.constructor.name?E:N.constructor.name}return k.checkPropTypes=v,k.resetWarningCache=v.resetWarningCache,k.PropTypes=k,k}},"./node_modules/prop-types/index.js":(l,a,u)=>{{var f=u("./node_modules/react-is/index.js"),d=!0;l.exports=u("./node_modules/prop-types/factoryWithTypeCheckers.js")(f.isElement,d)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":l=>{var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";l.exports=a},"./node_modules/prop-types/lib/has.js":l=>{l.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(l,a)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var u=typeof Symbol=="function"&&Symbol.for,f=u?Symbol.for("react.element"):60103,d=u?Symbol.for("react.portal"):60106,m=u?Symbol.for("react.fragment"):60107,y=u?Symbol.for("react.strict_mode"):60108,v=u?Symbol.for("react.profiler"):60114,g=u?Symbol.for("react.provider"):60109,w=u?Symbol.for("react.context"):60110,h=u?Symbol.for("react.async_mode"):60111,p=u?Symbol.for("react.concurrent_mode"):60111,x=u?Symbol.for("react.forward_ref"):60112,b=u?Symbol.for("react.suspense"):60113,C=u?Symbol.for("react.suspense_list"):60120,E=u?Symbol.for("react.memo"):60115,k=u?Symbol.for("react.lazy"):60116,j=u?Symbol.for("react.block"):60121,T=u?Symbol.for("react.fundamental"):60117,M=u?Symbol.for("react.responder"):60118,D=u?Symbol.for("react.scope"):60119;function R(O){return typeof O=="string"||typeof O=="function"||O===m||O===p||O===v||O===y||O===b||O===C||typeof O=="object"&&O!==null&&(O.$$typeof===k||O.$$typeof===E||O.$$typeof===g||O.$$typeof===w||O.$$typeof===x||O.$$typeof===T||O.$$typeof===M||O.$$typeof===D||O.$$typeof===j)}function F(O){if(typeof O=="object"&&O!==null){var U=O.$$typeof;switch(U){case f:var $=O.type;switch($){case h:case p:case m:case v:case y:case b:return $;default:var z=$&&$.$$typeof;switch(z){case w:case x:case k:case E:case g:return z;default:return U}}case d:return U}}}var G=h,q=p,Y=w,pe=g,A=f,H=x,W=m,J=k,K=E,me=d,fe=v,be=y,de=b,ge=!1;function Te(O){return ge||(ge=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),Ae(O)||F(O)===h}function Ae(O){return F(O)===p}function N(O){return F(O)===w}function B(O){return F(O)===g}function se(O){return typeof O=="object"&&O!==null&&O.$$typeof===f}function te(O){return F(O)===x}function Z(O){return F(O)===m}function ne(O){return F(O)===k}function ee(O){return F(O)===E}function le(O){return F(O)===d}function ue(O){return F(O)===v}function S(O){return F(O)===y}function P(O){return F(O)===b}a.AsyncMode=G,a.ConcurrentMode=q,a.ContextConsumer=Y,a.ContextProvider=pe,a.Element=A,a.ForwardRef=H,a.Fragment=W,a.Lazy=J,a.Memo=K,a.Portal=me,a.Profiler=fe,a.StrictMode=be,a.Suspense=de,a.isAsyncMode=Te,a.isConcurrentMode=Ae,a.isContextConsumer=N,a.isContextProvider=B,a.isElement=se,a.isForwardRef=te,a.isFragment=Z,a.isLazy=ne,a.isMemo=ee,a.isPortal=le,a.isProfiler=ue,a.isStrictMode=S,a.isSuspense=P,a.isValidElementType=R,a.typeOf=F})()},"./node_modules/react-is/index.js":(l,a,u)=>{l.exports=u("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(l,a,u)=>{u.r(a),u.d(a,{shallowEqualArrays:()=>d,shallowEqualObjects:()=>f});function f(m,y){if(m===y)return!0;if(!m||!y)return!1;var v=Object.keys(m),g=Object.keys(y),w=v.length;if(g.length!==w)return!1;for(var h=0;h<w;h++){var p=v[h];if(m[p]!==y[p]||!Object.prototype.hasOwnProperty.call(y,p))return!1}return!0}function d(m,y){if(m===y)return!0;if(!m||!y)return!1;var v=m.length;if(y.length!==v)return!1;for(var g=0;g<v;g++)if(m[g]!==y[g])return!1;return!0}},"./src/Component.ts":function(l,a,u){var f=this&&this.__rest||function(v,g){var w={};for(var h in v)Object.prototype.hasOwnProperty.call(v,h)&&g.indexOf(h)<0&&(w[h]=v[h]);if(v!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,h=Object.getOwnPropertySymbols(v);p<h.length;p++)g.indexOf(h[p])<0&&Object.prototype.propertyIsEnumerable.call(v,h[p])&&(w[h[p]]=v[h[p]]);return w},d=this&&this.__importDefault||function(v){return v&&v.__esModule?v:{default:v}};Object.defineProperty(a,"__esModule",{value:!0});var m=d(u("./src/useMediaQuery.ts")),y=function(v){var g=v.children,w=v.device,h=v.onChange,p=f(v,["children","device","onChange"]),x=(0,m.default)(p,w,h);return typeof g=="function"?g(x):x?g:null};a.default=y},"./src/Context.ts":(l,a,u)=>{Object.defineProperty(a,"__esModule",{value:!0});var f=u("react"),d=(0,f.createContext)(void 0);a.default=d},"./src/index.ts":function(l,a,u){var f=this&&this.__importDefault||function(g){return g&&g.__esModule?g:{default:g}};Object.defineProperty(a,"__esModule",{value:!0}),a.Context=a.toQuery=a.useMediaQuery=a.default=void 0;var d=f(u("./src/useMediaQuery.ts"));a.useMediaQuery=d.default;var m=f(u("./src/Component.ts"));a.default=m.default;var y=f(u("./src/toQuery.ts"));a.toQuery=y.default;var v=f(u("./src/Context.ts"));a.Context=v.default},"./src/mediaQuery.ts":function(l,a,u){var f=this&&this.__assign||function(){return f=Object.assign||function(b){for(var C,E=1,k=arguments.length;E<k;E++){C=arguments[E];for(var j in C)Object.prototype.hasOwnProperty.call(C,j)&&(b[j]=C[j])}return b},f.apply(this,arguments)},d=this&&this.__rest||function(b,C){var E={};for(var k in b)Object.prototype.hasOwnProperty.call(b,k)&&C.indexOf(k)<0&&(E[k]=b[k]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var j=0,k=Object.getOwnPropertySymbols(b);j<k.length;j++)C.indexOf(k[j])<0&&Object.prototype.propertyIsEnumerable.call(b,k[j])&&(E[k[j]]=b[k[j]]);return E},m=this&&this.__importDefault||function(b){return b&&b.__esModule?b:{default:b}};Object.defineProperty(a,"__esModule",{value:!0});var y=m(u("./node_modules/prop-types/index.js")),v=y.default.oneOfType([y.default.string,y.default.number]),g={all:y.default.bool,grid:y.default.bool,aural:y.default.bool,braille:y.default.bool,handheld:y.default.bool,print:y.default.bool,projection:y.default.bool,screen:y.default.bool,tty:y.default.bool,tv:y.default.bool,embossed:y.default.bool},w={orientation:y.default.oneOf(["portrait","landscape"]),scan:y.default.oneOf(["progressive","interlace"]),aspectRatio:y.default.string,deviceAspectRatio:y.default.string,height:v,deviceHeight:v,width:v,deviceWidth:v,color:y.default.bool,colorIndex:y.default.bool,monochrome:y.default.bool,resolution:v,type:Object.keys(g)};w.type;var h=d(w,["type"]),p=f({minAspectRatio:y.default.string,maxAspectRatio:y.default.string,minDeviceAspectRatio:y.default.string,maxDeviceAspectRatio:y.default.string,minHeight:v,maxHeight:v,minDeviceHeight:v,maxDeviceHeight:v,minWidth:v,maxWidth:v,minDeviceWidth:v,maxDeviceWidth:v,minColor:y.default.number,maxColor:y.default.number,minColorIndex:y.default.number,maxColorIndex:y.default.number,minMonochrome:y.default.number,maxMonochrome:y.default.number,minResolution:v,maxResolution:v},h),x=f(f({},g),p);a.default={all:x,types:g,matchers:w,features:p}},"./src/toQuery.ts":function(l,a,u){var f=this&&this.__importDefault||function(h){return h&&h.__esModule?h:{default:h}};Object.defineProperty(a,"__esModule",{value:!0});var d=f(u("./node_modules/hyphenate-style-name/index.js")),m=f(u("./src/mediaQuery.ts")),y=function(h){return"not ".concat(h)},v=function(h,p){var x=(0,d.default)(h);return typeof p=="number"&&(p="".concat(p,"px")),p===!0?x:p===!1?y(x):"(".concat(x,": ").concat(p,")")},g=function(h){return h.join(" and ")},w=function(h){var p=[];return Object.keys(m.default.all).forEach(function(x){var b=h[x];b!=null&&p.push(v(x,b))}),g(p)};a.default=w},"./src/useMediaQuery.ts":function(l,a,u){var f=this&&this.__importDefault||function(T){return T&&T.__esModule?T:{default:T}};Object.defineProperty(a,"__esModule",{value:!0});var d=u("react"),m=f(u("./node_modules/matchmediaquery/index.js")),y=f(u("./node_modules/hyphenate-style-name/index.js")),v=u("./node_modules/shallow-equal/dist/index.esm.js"),g=f(u("./src/toQuery.ts")),w=f(u("./src/Context.ts")),h=function(T){return T.query||(0,g.default)(T)},p=function(T){if(T){var M=Object.keys(T);return M.reduce(function(D,R){return D[(0,y.default)(R)]=T[R],D},{})}},x=function(){var T=(0,d.useRef)(!1);return(0,d.useEffect)(function(){T.current=!0},[]),T.current},b=function(T){var M=(0,d.useContext)(w.default),D=function(){return p(T)||p(M)},R=(0,d.useState)(D),F=R[0],G=R[1];return(0,d.useEffect)(function(){var q=D();(0,v.shallowEqualObjects)(F,q)||G(q)},[T,M]),F},C=function(T){var M=function(){return h(T)},D=(0,d.useState)(M),R=D[0],F=D[1];return(0,d.useEffect)(function(){var G=M();R!==G&&F(G)},[T]),R},E=function(T,M){var D=function(){return(0,m.default)(T,M||{},!!M)},R=(0,d.useState)(D),F=R[0],G=R[1],q=x();return(0,d.useEffect)(function(){if(q){var Y=D();return G(Y),function(){Y&&Y.dispose()}}},[T,M]),F},k=function(T){var M=(0,d.useState)(T.matches),D=M[0],R=M[1];return(0,d.useEffect)(function(){var F=function(G){R(G.matches)};return T.addListener(F),R(T.matches),function(){T.removeListener(F)}},[T]),D},j=function(T,M,D){var R=b(M),F=C(T);if(!F)throw new Error("Invalid or missing MediaQuery!");var G=E(F,R),q=k(G),Y=x();return(0,d.useEffect)(function(){Y&&D&&D(q)},[q]),(0,d.useEffect)(function(){return function(){G&&G.dispose()}},[]),q};a.default=j},react:l=>{l.exports=n}},i={};function o(l){var a=i[l];if(a!==void 0)return a.exports;var u=i[l]={exports:{}};return r[l].call(u.exports,u,u.exports,o),u.exports}o.d=(l,a)=>{for(var u in a)o.o(a,u)&&!o.o(l,u)&&Object.defineProperty(l,u,{enumerable:!0,get:a[u]})},o.o=(l,a)=>Object.prototype.hasOwnProperty.call(l,a),o.r=l=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})};var s=o("./src/index.ts");return s})())})(Xm);var rr=Xm.exports;const Dn=eo(rr),kx="/healthy-management-project/assets/olga_picture1x-48yp0Cvc.webp",Cx="/healthy-management-project/assets/olga_picture@2x-dFelWgxd.jpg",Ex="/healthy-management-project/assets/olga_picture1x-ohcXIDw6.jpg",jx="/healthy-management-project/assets/mob_olga_picture@2x-jz3O2U-O.jpg",Ox="/healthy-management-project/assets/mob_olga_picture1x-PQXysebb.jpg",_x="/healthy-management-project/assets/mob_olga_picture1x-YL2VUwPK.webp",Px="/healthy-management-project/assets/olga_picture@1x-V6xBvkB4.jpg",Tx="/healthy-management-project/assets/olga_picture@2x-Cv13xsQp.jpg",Mx="/healthy-management-project/assets/olga_picture@1x-UUwfpH5W.webp",Rx="/healthy-management-project/assets/olga_picture@1x-rIS7rOGv.jpg",Ix="/healthy-management-project/assets/olga_picture@2x-WgpWzRXV.jpg",Lx="/healthy-management-project/assets/olga_picture@1x-aIsvHdrL.webp",ce="/healthy-management-project/assets/sprite-gBYbMuxV.svg";function oe(){return oe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oe.apply(this,arguments)}function qm(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Ax=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Dx=qm(function(e){return Ax.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function Fx(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Nx(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Vx=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Nx(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=Fx(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),rt="-ms-",Fs="-moz-",xe="-webkit-",Jm="comm",Ac="rule",Dc="decl",zx="@import",Zm="@keyframes",$x="@layer",Ux=Math.abs,ma=String.fromCharCode,Bx=Object.assign;function Hx(e,t){return Je(e,0)^45?(((t<<2^Je(e,0))<<2^Je(e,1))<<2^Je(e,2))<<2^Je(e,3):0}function eg(e){return e.trim()}function Wx(e,t){return(e=t.exec(e))?e[0]:e}function we(e,t,n){return e.replace(t,n)}function _u(e,t){return e.indexOf(t)}function Je(e,t){return e.charCodeAt(t)|0}function Gi(e,t,n){return e.slice(t,n)}function Kt(e){return e.length}function Fc(e){return e.length}function To(e,t){return t.push(e),e}function Qx(e,t){return e.map(t).join("")}var ga=1,Kr=1,tg=0,gt=0,$e=0,Zr="";function va(e,t,n,r,i,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:ga,column:Kr,length:s,return:""}}function ui(e,t){return Bx(va("",null,null,"",null,null,0),e,{length:-e.length},t)}function Yx(){return $e}function Kx(){return $e=gt>0?Je(Zr,--gt):0,Kr--,$e===10&&(Kr=1,ga--),$e}function wt(){return $e=gt<tg?Je(Zr,gt++):0,Kr++,$e===10&&(Kr=1,ga++),$e}function nn(){return Je(Zr,gt)}function ns(){return gt}function so(e,t){return Gi(Zr,e,t)}function Xi(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ng(e){return ga=Kr=1,tg=Kt(Zr=e),gt=0,[]}function rg(e){return Zr="",e}function rs(e){return eg(so(gt-1,Pu(e===91?e+2:e===40?e+1:e)))}function Gx(e){for(;($e=nn())&&$e<33;)wt();return Xi(e)>2||Xi($e)>3?"":" "}function Xx(e,t){for(;--t&&wt()&&!($e<48||$e>102||$e>57&&$e<65||$e>70&&$e<97););return so(e,ns()+(t<6&&nn()==32&&wt()==32))}function Pu(e){for(;wt();)switch($e){case e:return gt;case 34:case 39:e!==34&&e!==39&&Pu($e);break;case 40:e===41&&Pu(e);break;case 92:wt();break}return gt}function qx(e,t){for(;wt()&&e+$e!==57;)if(e+$e===84&&nn()===47)break;return"/*"+so(t,gt-1)+"*"+ma(e===47?e:wt())}function Jx(e){for(;!Xi(nn());)wt();return so(e,gt)}function Zx(e){return rg(is("",null,null,null,[""],e=ng(e),0,[0],e))}function is(e,t,n,r,i,o,s,l,a){for(var u=0,f=0,d=s,m=0,y=0,v=0,g=1,w=1,h=1,p=0,x="",b=i,C=o,E=r,k=x;w;)switch(v=p,p=wt()){case 40:if(v!=108&&Je(k,d-1)==58){_u(k+=we(rs(p),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:k+=rs(p);break;case 9:case 10:case 13:case 32:k+=Gx(v);break;case 92:k+=Xx(ns()-1,7);continue;case 47:switch(nn()){case 42:case 47:To(e1(qx(wt(),ns()),t,n),a);break;default:k+="/"}break;case 123*g:l[u++]=Kt(k)*h;case 125*g:case 59:case 0:switch(p){case 0:case 125:w=0;case 59+f:h==-1&&(k=we(k,/\f/g,"")),y>0&&Kt(k)-d&&To(y>32?Cf(k+";",r,n,d-1):Cf(we(k," ","")+";",r,n,d-2),a);break;case 59:k+=";";default:if(To(E=kf(k,t,n,u,f,i,l,x,b=[],C=[],d),o),p===123)if(f===0)is(k,t,E,E,b,o,d,l,C);else switch(m===99&&Je(k,3)===110?100:m){case 100:case 108:case 109:case 115:is(e,E,E,r&&To(kf(e,E,E,0,0,i,l,x,i,b=[],d),C),i,C,d,l,r?b:C);break;default:is(k,E,E,E,[""],C,0,l,C)}}u=f=y=0,g=h=1,x=k="",d=s;break;case 58:d=1+Kt(k),y=v;default:if(g<1){if(p==123)--g;else if(p==125&&g++==0&&Kx()==125)continue}switch(k+=ma(p),p*g){case 38:h=f>0?1:(k+="\f",-1);break;case 44:l[u++]=(Kt(k)-1)*h,h=1;break;case 64:nn()===45&&(k+=rs(wt())),m=nn(),f=d=Kt(x=k+=Jx(ns())),p++;break;case 45:v===45&&Kt(k)==2&&(g=0)}}return o}function kf(e,t,n,r,i,o,s,l,a,u,f){for(var d=i-1,m=i===0?o:[""],y=Fc(m),v=0,g=0,w=0;v<r;++v)for(var h=0,p=Gi(e,d+1,d=Ux(g=s[v])),x=e;h<y;++h)(x=eg(g>0?m[h]+" "+p:we(p,/&\f/g,m[h])))&&(a[w++]=x);return va(e,t,n,i===0?Ac:l,a,u,f)}function e1(e,t,n){return va(e,t,n,Jm,ma(Yx()),Gi(e,2,-2),0)}function Cf(e,t,n,r){return va(e,t,n,Dc,Gi(e,0,r),Gi(e,r+1,-1),r)}function zr(e,t){for(var n="",r=Fc(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function t1(e,t,n,r){switch(e.type){case $x:if(e.children.length)break;case zx:case Dc:return e.return=e.return||e.value;case Jm:return"";case Zm:return e.return=e.value+"{"+zr(e.children,r)+"}";case Ac:e.value=e.props.join(",")}return Kt(n=zr(e.children,r))?e.return=e.value+"{"+n+"}":""}function n1(e){var t=Fc(e);return function(n,r,i,o){for(var s="",l=0;l<t;l++)s+=e[l](n,r,i,o)||"";return s}}function r1(e){return function(t){t.root||(t=t.return)&&e(t)}}var i1=function(t,n,r){for(var i=0,o=0;i=o,o=nn(),i===38&&o===12&&(n[r]=1),!Xi(o);)wt();return so(t,gt)},o1=function(t,n){var r=-1,i=44;do switch(Xi(i)){case 0:i===38&&nn()===12&&(n[r]=1),t[r]+=i1(gt-1,n,r);break;case 2:t[r]+=rs(i);break;case 4:if(i===44){t[++r]=nn()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=ma(i)}while(i=wt());return t},s1=function(t,n){return rg(o1(ng(t),n))},Ef=new WeakMap,a1=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Ef.get(r))&&!i){Ef.set(t,!0);for(var o=[],s=s1(n,o),l=r.props,a=0,u=0;a<s.length;a++)for(var f=0;f<l.length;f++,u++)t.props[u]=o[a]?s[a].replace(/&\f/g,l[f]):l[f]+" "+s[a]}}},l1=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function ig(e,t){switch(Hx(e,t)){case 5103:return xe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return xe+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return xe+e+Fs+e+rt+e+e;case 6828:case 4268:return xe+e+rt+e+e;case 6165:return xe+e+rt+"flex-"+e+e;case 5187:return xe+e+we(e,/(\w+).+(:[^]+)/,xe+"box-$1$2"+rt+"flex-$1$2")+e;case 5443:return xe+e+rt+"flex-item-"+we(e,/flex-|-self/,"")+e;case 4675:return xe+e+rt+"flex-line-pack"+we(e,/align-content|flex-|-self/,"")+e;case 5548:return xe+e+rt+we(e,"shrink","negative")+e;case 5292:return xe+e+rt+we(e,"basis","preferred-size")+e;case 6060:return xe+"box-"+we(e,"-grow","")+xe+e+rt+we(e,"grow","positive")+e;case 4554:return xe+we(e,/([^-])(transform)/g,"$1"+xe+"$2")+e;case 6187:return we(we(we(e,/(zoom-|grab)/,xe+"$1"),/(image-set)/,xe+"$1"),e,"")+e;case 5495:case 3959:return we(e,/(image-set\([^]*)/,xe+"$1$`$1");case 4968:return we(we(e,/(.+:)(flex-)?(.*)/,xe+"box-pack:$3"+rt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+xe+e+e;case 4095:case 3583:case 4068:case 2532:return we(e,/(.+)-inline(.+)/,xe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Kt(e)-1-t>6)switch(Je(e,t+1)){case 109:if(Je(e,t+4)!==45)break;case 102:return we(e,/(.+:)(.+)-([^]+)/,"$1"+xe+"$2-$3$1"+Fs+(Je(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~_u(e,"stretch")?ig(we(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Je(e,t+1)!==115)break;case 6444:switch(Je(e,Kt(e)-3-(~_u(e,"!important")&&10))){case 107:return we(e,":",":"+xe)+e;case 101:return we(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+xe+(Je(e,14)===45?"inline-":"")+"box$3$1"+xe+"$2$3$1"+rt+"$2box$3")+e}break;case 5936:switch(Je(e,t+11)){case 114:return xe+e+rt+we(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return xe+e+rt+we(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return xe+e+rt+we(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return xe+e+rt+e+e}return e}var u1=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Dc:t.return=ig(t.value,t.length);break;case Zm:return zr([ui(t,{value:we(t.value,"@","@"+xe)})],i);case Ac:if(t.length)return Qx(t.props,function(o){switch(Wx(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return zr([ui(t,{props:[we(o,/:(read-\w+)/,":"+Fs+"$1")]})],i);case"::placeholder":return zr([ui(t,{props:[we(o,/:(plac\w+)/,":"+xe+"input-$1")]}),ui(t,{props:[we(o,/:(plac\w+)/,":"+Fs+"$1")]}),ui(t,{props:[we(o,/:(plac\w+)/,rt+"input-$1")]})],i)}return""})}},c1=[u1],d1=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(g){var w=g.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(g),g.setAttribute("data-s",""))})}var i=t.stylisPlugins||c1,o={},s,l=[];s=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(g){for(var w=g.getAttribute("data-emotion").split(" "),h=1;h<w.length;h++)o[w[h]]=!0;l.push(g)});var a,u=[a1,l1];{var f,d=[t1,r1(function(g){f.insert(g)})],m=n1(u.concat(i,d)),y=function(w){return zr(Zx(w),m)};a=function(w,h,p,x){f=p,y(w?w+"{"+h.styles+"}":h.styles),x&&(v.inserted[h.name]=!0)}}var v={key:n,sheet:new Vx({key:n,container:s,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:a};return v.sheet.hydrate(l),v},og={exports:{}},ke={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ge=typeof Symbol=="function"&&Symbol.for,Nc=Ge?Symbol.for("react.element"):60103,Vc=Ge?Symbol.for("react.portal"):60106,ya=Ge?Symbol.for("react.fragment"):60107,xa=Ge?Symbol.for("react.strict_mode"):60108,wa=Ge?Symbol.for("react.profiler"):60114,ba=Ge?Symbol.for("react.provider"):60109,Sa=Ge?Symbol.for("react.context"):60110,zc=Ge?Symbol.for("react.async_mode"):60111,ka=Ge?Symbol.for("react.concurrent_mode"):60111,Ca=Ge?Symbol.for("react.forward_ref"):60112,Ea=Ge?Symbol.for("react.suspense"):60113,f1=Ge?Symbol.for("react.suspense_list"):60120,ja=Ge?Symbol.for("react.memo"):60115,Oa=Ge?Symbol.for("react.lazy"):60116,p1=Ge?Symbol.for("react.block"):60121,h1=Ge?Symbol.for("react.fundamental"):60117,m1=Ge?Symbol.for("react.responder"):60118,g1=Ge?Symbol.for("react.scope"):60119;function Ct(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Nc:switch(e=e.type,e){case zc:case ka:case ya:case wa:case xa:case Ea:return e;default:switch(e=e&&e.$$typeof,e){case Sa:case Ca:case Oa:case ja:case ba:return e;default:return t}}case Vc:return t}}}function sg(e){return Ct(e)===ka}ke.AsyncMode=zc;ke.ConcurrentMode=ka;ke.ContextConsumer=Sa;ke.ContextProvider=ba;ke.Element=Nc;ke.ForwardRef=Ca;ke.Fragment=ya;ke.Lazy=Oa;ke.Memo=ja;ke.Portal=Vc;ke.Profiler=wa;ke.StrictMode=xa;ke.Suspense=Ea;ke.isAsyncMode=function(e){return sg(e)||Ct(e)===zc};ke.isConcurrentMode=sg;ke.isContextConsumer=function(e){return Ct(e)===Sa};ke.isContextProvider=function(e){return Ct(e)===ba};ke.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Nc};ke.isForwardRef=function(e){return Ct(e)===Ca};ke.isFragment=function(e){return Ct(e)===ya};ke.isLazy=function(e){return Ct(e)===Oa};ke.isMemo=function(e){return Ct(e)===ja};ke.isPortal=function(e){return Ct(e)===Vc};ke.isProfiler=function(e){return Ct(e)===wa};ke.isStrictMode=function(e){return Ct(e)===xa};ke.isSuspense=function(e){return Ct(e)===Ea};ke.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ya||e===ka||e===wa||e===xa||e===Ea||e===f1||typeof e=="object"&&e!==null&&(e.$$typeof===Oa||e.$$typeof===ja||e.$$typeof===ba||e.$$typeof===Sa||e.$$typeof===Ca||e.$$typeof===h1||e.$$typeof===m1||e.$$typeof===g1||e.$$typeof===p1)};ke.typeOf=Ct;og.exports=ke;var v1=og.exports,ag=v1,y1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},x1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},lg={};lg[ag.ForwardRef]=y1;lg[ag.Memo]=x1;var w1=!0;function ug(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var $c=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||w1===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},cg=function(t,n,r){$c(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function b1(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var S1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},k1=/[A-Z]|^ms/g,C1=/_EMO_([^_]+?)_([^]*?)_EMO_/g,dg=function(t){return t.charCodeAt(1)===45},jf=function(t){return t!=null&&typeof t!="boolean"},ul=qm(function(e){return dg(e)?e:e.replace(k1,"-$&").toLowerCase()}),Of=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(C1,function(r,i,o){return Gt={name:i,styles:o,next:Gt},i})}return S1[t]!==1&&!dg(t)&&typeof n=="number"&&n!==0?n+"px":n};function qi(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Gt={name:n.name,styles:n.styles,next:Gt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Gt={name:r.name,styles:r.styles,next:Gt},r=r.next;var i=n.styles+";";return i}return E1(e,t,n)}case"function":{if(e!==void 0){var o=Gt,s=n(e);return Gt=o,qi(e,t,s)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function E1(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=qi(e,t,n[i])+";";else for(var o in n){var s=n[o];if(typeof s!="object")t!=null&&t[s]!==void 0?r+=o+"{"+t[s]+"}":jf(s)&&(r+=ul(o)+":"+Of(o,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(t==null||t[s[0]]===void 0))for(var l=0;l<s.length;l++)jf(s[l])&&(r+=ul(o)+":"+Of(o,s[l])+";");else{var a=qi(e,t,s);switch(o){case"animation":case"animationName":{r+=ul(o)+":"+a+";";break}default:r+=o+"{"+a+"}"}}}return r}var _f=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Gt,Uc=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";Gt=void 0;var s=t[0];s==null||s.raw===void 0?(i=!1,o+=qi(r,n,s)):o+=s[0];for(var l=1;l<t.length;l++)o+=qi(r,n,t[l]),i&&(o+=s[l]);_f.lastIndex=0;for(var a="",u;(u=_f.exec(o))!==null;)a+="-"+u[1];var f=b1(o)+a;return{name:f,styles:o,next:Gt}},j1=function(t){return t()},O1=md.useInsertionEffect?md.useInsertionEffect:!1,fg=O1||j1,Bc={}.hasOwnProperty,pg=I.createContext(typeof HTMLElement<"u"?d1({key:"css"}):null);pg.Provider;var hg=function(t){return I.forwardRef(function(n,r){var i=I.useContext(pg);return t(n,i,r)})},mg=I.createContext({}),Tu="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",_1=function(t,n){var r={};for(var i in n)Bc.call(n,i)&&(r[i]=n[i]);return r[Tu]=t,r},P1=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return $c(n,r,i),fg(function(){return cg(n,r,i)}),null},T1=hg(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Tu],o=[r],s="";typeof e.className=="string"?s=ug(t.registered,o,e.className):e.className!=null&&(s=e.className+" ");var l=Uc(o,void 0,I.useContext(mg));s+=t.key+"-"+l.name;var a={};for(var u in e)Bc.call(e,u)&&u!=="css"&&u!==Tu&&(a[u]=e[u]);return a.ref=n,a.className=s,I.createElement(I.Fragment,null,I.createElement(P1,{cache:t,serialized:l,isStringTag:typeof i=="string"}),I.createElement(i,a))}),M1=T1,re=function(t,n){var r=arguments;if(n==null||!Bc.call(n,"css"))return I.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=M1,o[1]=_1(t,n);for(var s=2;s<i;s++)o[s]=r[s];return I.createElement.apply(null,o)};function Hc(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Uc(t)}var R1=function(){var t=Hc.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},I1=Dx,L1=function(t){return t!=="theme"},Pf=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?I1:L1},Tf=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(s){return t.__emotion_forwardProp(s)&&o(s)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},A1=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return $c(n,r,i),fg(function(){return cg(n,r,i)}),null},D1=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,s;n!==void 0&&(o=n.label,s=n.target);var l=Tf(t,n,r),a=l||Pf(i),u=!a("as");return function(){var f=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&d.push("label:"+o+";"),f[0]==null||f[0].raw===void 0)d.push.apply(d,f);else{d.push(f[0][0]);for(var m=f.length,y=1;y<m;y++)d.push(f[y],f[0][y])}var v=hg(function(g,w,h){var p=u&&g.as||i,x="",b=[],C=g;if(g.theme==null){C={};for(var E in g)C[E]=g[E];C.theme=I.useContext(mg)}typeof g.className=="string"?x=ug(w.registered,b,g.className):g.className!=null&&(x=g.className+" ");var k=Uc(d.concat(b),w.registered,C);x+=w.key+"-"+k.name,s!==void 0&&(x+=" "+s);var j=u&&l===void 0?Pf(p):a,T={};for(var M in g)u&&M==="as"||j(M)&&(T[M]=g[M]);return T.className=x,T.ref=h,I.createElement(I.Fragment,null,I.createElement(A1,{cache:w,serialized:k,isStringTag:typeof p=="string"}),I.createElement(p,T))});return v.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",v.defaultProps=t.defaultProps,v.__emotion_real=v,v.__emotion_base=i,v.__emotion_styles=d,v.__emotion_forwardProp=l,Object.defineProperty(v,"toString",{value:function(){return"."+s}}),v.withComponent=function(g,w){return e(g,oe({},n,w,{shouldForwardProp:Tf(v,w,!0)})).apply(void 0,d)},v}},F1=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],_=D1.bind();F1.forEach(function(e){_[e]=_(e)});const N1=_.section`
  // max-width: 375px;
  // margin-left: auto;
  // margin-right: auto;
  // padding: 24px;

  @media screen and (min-width: 768px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,V1=_.h2`
  margin-bottom: 24px;
  color: var(--primary-bluedark);
  font-family: Montserrat;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
    font-size: 36px;

    line-height: 48px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 16px;
  }
  @media screen and (min-width: 1920px) {
    margin-bottom: 40px;
    font-size: 48px;
    line-height: 56px;
  }
`,z1=_.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
  }
  @media screen and (min-width: 1920px) {
  //   justify-content: space-between;
  // }
`,Mo=_.img`
  border-radius: 16px;
`,$1=_.div`
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
  }

  @media screen and (min-width: 1440px) {
    min-width: 628px;
    padding: 40px;
  }
  @media screen and (min-width: 1920px) {
    min-width: 628px;
    padding: 80px;
  }
`,U1=_.h3`
  color: var(--primary-bluedark);
  font-family: Montserrat;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    line-height: 48px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 36px;
  }
  @media screen and (min-width: 1920px) {
    color: var(--typography-black);
    font-family: Montserrat;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: 56px;
    margin-bottom: 16px;
  }
`,B1=_.p`
  color: var(--primary-bluedark);
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1440px) {
    line-height: 24px;
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1920px) {
    color: var(--primary-bluedark);
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
    margin-bottom: 40px;
  }
`,H1=_.ul`
  padding-left: 23px;
`,qn=_.li`
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
    font-size: 15px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
    line-height: 18px;
  }

  @media screen and (min-width: 1920px) {
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
`,W1=_.ul`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-top: 16px;

    flex-direction: row;
    // gap: 60px;

    align-items: baseline;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 24px;
  }
  @media screen and (min-width: 1920px) {
    margin-top: 42px;
    display: flex;
    flex-direction: row;
    gap: 60px;
    justify-content: space-between;
    align-items: baseline;
  }
`,cl=_.a`
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

  @media screen and (min-width: 1400px) {
    font-size: 18px;

    line-height: 22px;
  }
  @media screen and (min-width: 1920px) {
  }
`,dl=_.svg`
  margin-left: 10px;
`,Q1=_.div`
  // width: calc((100% - 24px) / 2);
  max-width: 327px;
  border-radius: 16px;

  @media screen and (min-width: 768px) {
    // width: calc((100% - 24px) / 2);
    max-width: 688px;
    border-radius: 16px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 628px;
  }
  @media screen and (min-width: 1920px) {
    max-width: 828px;
  }
`,Y1=()=>c.jsx(N1,{className:"container",children:c.jsxs("div",{children:[c.jsx(V1,{children:"Про мене"}),c.jsxs(z1,{children:[c.jsxs(Q1,{children:[c.jsx(Dn,{maxWidth:767,children:c.jsx(Mo,{srcSet:`${jx} 2x, ${Ox} 1x`,sizes:"(max-width: 767px) 100vw",src:_x,alt:"Ольга Поліщук"})}),c.jsx(Dn,{minWidth:768,maxWidth:1439,children:c.jsx(Mo,{srcSet:`${Tx} 2x, ${Px} 1x`,sizes:"(min-width: 768px) 100vw (max-width: 1439px) 100vw",src:Mx,alt:"Ольга Поліщук"})}),c.jsx(Dn,{minWidth:1440,maxWidth:1919,children:c.jsx(Mo,{srcSet:`${Ix} 2x, ${Rx} 1x`,sizes:"(min-width: 1440px) 100vw (max-width: 1919px) 100vw",src:Lx,alt:"Ольга Поліщук"})}),c.jsx(Dn,{minWidth:1920,children:c.jsx(Mo,{srcSet:`${Cx} 2x, ${Ex} 1x`,sizes:"(min-width: 1920px) 100vw",src:kx,alt:"Ольга Поліщук"})})]}),c.jsxs($1,{children:[c.jsx(U1,{children:"Ольга Поліщук"}),c.jsx(B1,{children:"CEO and Founder студії стратегічного розвитку"}),c.jsxs(H1,{children:[c.jsx(qn,{children:"MBA Healthcare management"}),c.jsx(qn,{children:"Викладачка медичного маркетингу Бізнес-школа УКУ (LvBS)"}),c.jsx(qn,{children:`Експертка в "Центр Розвитку Громадського Здоров'я УКУ"`}),c.jsx(qn,{children:"Бізнес-консультантка, стратег з медичного маркетингу"}),c.jsx(qn,{children:'Керівниця проєкту "Стетоскоп" - телеграм канал про медичний менеджмент та маркетингу'}),c.jsx(qn,{children:"Більше 18 років досвіду в маркетингу та комунікаціях, з них більше 10 років досвіду в медичному та фармацевтичному бізнесі на керівних посадах"}),c.jsx(qn,{children:"Використання принципів доказової медицини"})]}),c.jsxs(W1,{children:[c.jsx("li",{children:c.jsxs(cl,{href:"https://www.instagram.com/olga_healthm/",target:"_blank",rel:"noopener noreferrer",children:["Instagram",c.jsx(dl,{width:"24",height:"24",children:c.jsx("use",{href:`${ce}#icon-arrow-up-right`})})]})}),c.jsx("li",{children:c.jsxs(cl,{href:"https://www.facebook.com/olga.polishchuk.14",target:"_blank",rel:"noopener noreferrer",children:["Facebook",c.jsx(dl,{width:"24",height:"24",children:c.jsx("use",{href:`${ce}#icon-arrow-up-right`})})]})}),c.jsx("li",{children:c.jsxs(cl,{href:"https://www.linkedin.com/in/olga-polishchuk-83362140/",target:"_blank",rel:"noopener noreferrer",children:["LinkedIn",c.jsx(dl,{width:"24",height:"24",children:c.jsx("use",{href:`${ce}#icon-arrow-up-right`})})]})})]})]})]})]})}),K1=_.section`
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,G1=_.h2`
  color: var(--typography-bluedark);
  font-family: Montserrat;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    font-weight: 600;
    line-height: 48px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 36px;
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 48px;
    line-height: 56px;
    margin-bottom: 40px;
  }
`,X1=_.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;

    flex-wrap: wrap;
    // margin-bottom: 40px;
  }

  @media screen and (min-width: 1440px) {
    flex-wrap: nowrap;
    gap: 24px;
  }
  @media screen and (min-width: 1920px) {
    flex-direction: row;
  }
`,q1=_.p`
  color: var(--primary-bluedark);

  /* mobile/h4-medium */
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  max-width: 327px;

  @media screen and (min-width: 768px) {
    // width: 100%;
    font-size: 18px;
    line-height: 28px;
    max-width: 688px;
  }

  @media screen and (min-width: 1440px) {
    line-height: 22px;
    max-width: 628px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    line-height: 28px;
    max-width: 828px;
  }
`,J1=_.p`
  color: var(--typography-bluedark);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 15px;
    line-height: 18px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 16px;
    line-height: 24px;
  }
`,Mf=_.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 16px;
`,Z1=_.div`
  max-width: 327px;
  padding: 24px;
  border-radius: 16px;
  background: var(--background-white);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);

  @media screen and (min-width: 768px) {
    max-width: 332px;
    padding: 40px;
  }

  @media screen and (min-width: 1440px) {
    padding: 24px;
    max-width: 302px;
  }

  @media screen and (min-width: 1920px) {
    max-width: 398px;
    padding: 40px;
  }
`,ew=_.h4`
  color: var(--primary-bluedark);
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 32px;
  }

  @media screen and (min-width: 1440px) {
    line-height: 24px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: 32px;
  }
`,tw=_.div`
  max-width: 327px;
  padding: 24px;
  border-radius: 16px;
  background: var(--background-bluedark);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);

  @media screen and (min-width: 768px) {
    max-width: 332px;
    padding: 40px;
  }

  @media screen and (min-width: 1440px) {
    padding: 24px;
    max-width: 302px;
  }

  @media screen and (min-width: 1920px) {
    max-width: 398px;
    padding: 40px;
  }
`,nw=_.h4`
  color: var(--system-default-10);
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1440px) {
    line-height: 24px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: 32px;
  }
`,rw=_.p`
  color: var(--system-default-10);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
    line-height: 18px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 16px;
    line-height: 24px;
  }
`,iw=_.svg`
  fill: var(--primary-bluedark, #1b3641);
  border-radius: 100px;
  background: rgba(27, 54, 65, 0.2);
  width: 32px;
  height: 32px;
`,ow=_.svg`
  fill: var(--background-white, #fcfcfc);
  border-radius: 100px;
  background: rgba(244, 244, 246, 0.2);
  width: 32px;
  height: 32px;
`,sw=()=>c.jsx(K1,{id:"aboutUs",className:"container",children:c.jsxs("div",{children:[c.jsx(G1,{children:"Про студію"}),c.jsxs(X1,{children:[c.jsx("div",{children:c.jsx(q1,{children:"Студія стратегічного розвитку медичних брендів «Healthy management» надає послуги медичного менеджменту, медичного маркетингу, консалтингу бізнес-процесів та створення стратегій здоров’я для підприємств та бізнесу. Ми співпрацюємо з медичними закладами, лікарями, власниками, керівниками та створюємо спільні стратегії та дії для ефективного просування та розвитку проєктів, використовуючи комплексний підхід"})}),c.jsxs(tw,{children:[c.jsxs(Mf,{children:[c.jsx(ow,{children:c.jsx("use",{href:`${ce}#icon-star`})}),c.jsx(nw,{children:"Наша місія"})]}),c.jsx(rw,{children:"Будуємо ефективні стратегії по управлінню здоров’ям та створюємо продуктивні дії для популяризації здорового менеджменту"})]}),c.jsxs(Z1,{children:[c.jsxs(Mf,{children:[c.jsx(iw,{children:c.jsx("use",{href:`${ce}#icon-star`})}),c.jsx(ew,{children:"Наші цінності"})]}),c.jsx(J1,{children:"Повага, довіра, партнерство та експертність. Будуємо нову культуру управління здоровим менеджментом у медичній галузі"})]})]})]})}),aw=_.section`
  padding-top: 80px;
  padding-bottom: 80px;
`,lw=_.div`
  width: 100%;
  border-radius: 16px;
  padding: 80px;
  background-color: var(--background-bluedark);
`,uw=_.h2`
  margin-bottom: 40px;
  font-size: 48px;
  font-weight: 600;
  line-height: 1.17;
  color: var(--system-default-10);

  & span {
    color: var(--primary-yellow);
  }
`,cw=_.ul`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding: 24px 0;
`,dw=_.li`
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
`,fw=[{id:1,tool:"Матриця стейкхолдерів"},{id:2,tool:"SWOT аналіз"},{id:3,tool:"Bussines model canvas"},{id:4,tool:"Value proposition canvas"},{id:5,tool:"Customer journey map"}],pw=()=>c.jsx(aw,{className:"container",children:c.jsxs(lw,{children:[c.jsxs(uw,{children:["Бізнес ",c.jsx("span",{children:"інструменти"}),", які використувуємо в партнерстві"]}),c.jsx(cw,{children:fw.map(e=>c.jsx(dw,{children:e.tool},e.id))})]})});var gg={exports:{}},hw="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",mw=hw,gw=mw;function vg(){}function yg(){}yg.resetWarningCache=vg;var vw=function(){function e(r,i,o,s,l,a){if(a!==gw){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:yg,resetWarningCache:vg};return n.PropTypes=n,n};gg.exports=vw();var yw=gg.exports;const Ji=eo(yw),os="/healthy-management-project/assets/icon-footer-MBx-ujYN.svg",xw=_.div`
  padding: 40px 0 0 0;
  background-color: var(--background-bluedark);
`,ww=_.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`,bw=_.a`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  cursor: pointer;
  border-bottom: 1px solid rgba(244, 244, 246, 0.4);
  color: var(--system-default-10);
`,Sw=_.div`
  display: flex;
  align-items: center;
  gap: 40px;
`,ci=_.a`
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
`,kw=_.div`
  display: flex;
  gap: 40px;
`,Cw=_.div`
  display: flex;
  gap: 16px;
  align-items: center;
`,Ew=_.a`
  padding: 8px;

  & svg {
    border-radius: 10px;
    background-color: var(--background-white);
    opacity: 0.8;
  }
`,jw=_.div`
  display: flex;
  flex-direction: column;
`,Rf=_.a`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: var(--system-default-10);
`,Ow=_.p`
  padding: 16px 0;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.67;
  text-transform: uppercase;
  border-top: 1px solid var(--system-default-20);
  color: var(--system-default-10);
`,_w=_.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 1100;
`,Pw=_.div`
  padding: 80px;
  position: fixed;
  width: 1360px;
  border-radius: 24px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 10000;
`,Tw=_.div`
  height: 32px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`,Mw=_.svg`
  width: 24px;
  cursor: pointer;
`,Rw=_.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: var(--typography-bluedark);
`,Iw=_.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`,bn=_.li`
  width: 282px;
  padding: 24px;
  gap: 16px;

  border-radius: 16px;
  background: var(--background-bluedark);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
`,Sn=_.h3`
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
`,kn=_.p`
  display: flex;
  justify-content: center;

  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: var(--typography-white);
`,Cn=_.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,En=_.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,jn=_.div`
  border-radius: 8px;
  overflow: hidden;
`,On=_.img`
  border-radius: 8px;

  &:hover {
    transform: scale(1.1);
    border-radius: 8px;
  }
`,If="/healthy-management-project/assets/Jilia_Kopytko-mYhzlt_-.webp",Lw="/healthy-management-project/assets/Jilia_Kopytko@2x-gruKrAtD.jpg",Lf="/healthy-management-project/assets/Yelyzaveta_Domanska-Ru7up7Pj.webp",Aw="/healthy-management-project/assets/Yelyzaveta_Domanska@2x-BYkqrL88.jpg",Af="/healthy-management-project/assets/Oleksandr_Natalukha-YKEBbXyu.webp",Dw="/healthy-management-project/assets/Oleksandr_Natalukha@2x-5OsrctvL.jpg",Df="/healthy-management-project/assets/Valentyn_Havrylenko-ouVcypag.webp",Fw="/healthy-management-project/assets/Valentyn_Havrylenko@2x-xBjJM6nL.jpg",Ff="/healthy-management-project/assets/Olha_Abent-lPe8g7w1.webp",Nw="/healthy-management-project/assets/Olha_Abent@2x-fGgXmj71.jpg",Nf="/healthy-management-project/assets/Viktoriia_Moryc-tWw5-4of.webp",Vw="/healthy-management-project/assets/Viktoriia_Moryc@2x-AxiRex6x.jpg",Vf="/healthy-management-project/assets/Vyacheslav_Pavlyuk-py_hj3lz.webp",zw="/healthy-management-project/assets/Vyacheslav_Pavlyuk@2x-2qCtSSAb.jpg",zf="/healthy-management-project/assets/Yaroslav_Li-nn0P6bIv.webp",$w="/healthy-management-project/assets/Yaroslav_Li@2x-xfuqLdiI.jpg",xg=({handleClose:e,isModalOpen:t})=>{const n=i=>{i.target===i.currentTarget&&e()};I.useEffect(()=>{const i=document.body,o=()=>{t?i.classList.add("body-no-scroll"):i.classList.remove("body-no-scroll")},s=l=>{l.code==="Escape"&&t&&e()};return o(),window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[e,t]);const r=document.getElementById("modal");return t?Sx.createPortal(c.jsx(_w,{onClick:n,children:c.jsxs(Pw,{isModalOpen:t,children:[c.jsxs(Tw,{children:[c.jsx(Rw,{children:"Команда, яка створила сторінку"}),c.jsx(Mw,{onClick:e,children:c.jsx("use",{href:`${ce}#icon-close`})})]}),c.jsxs(Iw,{children:[c.jsx(bn,{children:c.jsxs(Cn,{children:[c.jsx(jn,{children:c.jsx(On,{src:Nf,srcSet:`${Nf} 1x, ${Vw} 2x`,alt:"Вікторія Мориц"})}),c.jsxs(En,{children:[c.jsx(Sn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/viktoriia-moryc-61610962/",target:"_blank",rel:"noopener noreferrer",children:["Вікторія Мориц",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${ce}#icon-linkedin`})})]})}),c.jsx(kn,{children:"Project Manager"})]})]})}),c.jsx(bn,{children:c.jsxs(Cn,{children:[c.jsx(jn,{children:c.jsx(On,{src:If,srcSet:`${If} 1x, ${Lw} 2x`,alt:"Юлія Копитко"})}),c.jsxs(En,{children:[c.jsx(Sn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/juliakopytko/",target:"_blank",rel:"noopener noreferrer",children:["Юлія Копитко",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${ce}#icon-linkedin`})})]})}),c.jsx(kn,{children:"UX/UI Designer"})]})]})}),c.jsx(bn,{children:c.jsxs(Cn,{children:[c.jsx(jn,{children:c.jsx(On,{src:zf,srcSet:`${zf} 1x, ${$w} 2x`,alt:"Ярослав Лі"})}),c.jsxs(En,{children:[c.jsx(Sn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/yaroslav-lee-b7070b294",target:"_blank",rel:"noopener noreferrer",children:["Ярослав Лі",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${ce}#icon-linkedin`})})]})}),c.jsx(kn,{children:"Frontend Developer"})]})]})}),c.jsx(bn,{children:c.jsxs(Cn,{children:[c.jsx(jn,{children:c.jsx(On,{src:Lf,srcSet:`${Lf} 1x, ${Aw} 2x`,alt:"Єлизавета Доманська"})}),c.jsxs(En,{children:[c.jsx(Sn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/yelyzaveta-domanska-2185a5292/",target:"_blank",rel:"noopener noreferrer",children:["Єлизавета Доманська",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${ce}#icon-linkedin`})})]})}),c.jsx(kn,{children:"Frontend Developer"})]})]})}),c.jsx(bn,{children:c.jsxs(Cn,{children:[c.jsx(jn,{children:c.jsx(On,{src:Af,srcSet:`${Af} 1x, ${Dw} 2x`,alt:"Олександр Наталуха"})}),c.jsxs(En,{children:[c.jsx(Sn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/oleksandr-natalukha",target:"_blank",rel:"noopener noreferrer",children:["Олександр Наталуха",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${ce}#icon-linkedin`})})]})}),c.jsx(kn,{children:"Frontend Developer"})]})]})}),c.jsx(bn,{children:c.jsxs(Cn,{children:[c.jsx(jn,{children:c.jsx(On,{src:Df,srcSet:`${Df} 1x, ${Fw} 2x`,alt:"Валентин Гавриленко"})}),c.jsxs(En,{children:[c.jsx(Sn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/valentyn-havrylenko/",target:"_blank",rel:"noopener noreferrer",children:["Валентин Гавриленко",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${ce}#icon-linkedin`})})]})}),c.jsx(kn,{children:"Frontend Developer"})]})]})}),c.jsx(bn,{children:c.jsxs(Cn,{children:[c.jsx(jn,{children:c.jsx(On,{src:Vf,srcSet:`${Vf} 1x, ${zw} 2x`,alt:"В´ячеслав Павлюк"})}),c.jsxs(En,{children:[c.jsx(Sn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/vyacheslav-pavlyuk/",target:"_blank",rel:"noopener noreferrer",children:["В'ячеслав Павлюк",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${ce}#icon-linkedin`})})]})}),c.jsx(kn,{children:"Fullstack Developer"})]})]})}),c.jsx(bn,{children:c.jsxs(Cn,{children:[c.jsx(jn,{children:c.jsx(On,{src:Ff,srcSet:`${Ff} 1x, ${Nw} 2x`,alt:"Ольга Абент"})}),c.jsxs(En,{children:[c.jsx(Sn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/abentolga/",target:"_blank",rel:"noopener noreferrer",children:["Ольга Абент",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${ce}#icon-linkedin`})})]})}),c.jsx(kn,{children:"QA Engineer"})]})]})})]})]})}),r):null};xg.propTypes={handleClose:Ji.func.isRequired,isModalOpen:Ji.bool.isRequired};const wg=({handleSetActiveLink:e})=>{const[t,n]=I.useState(!1),r=()=>{n(!0)},i=()=>{n(!1)};return c.jsxs(xw,{id:"footer",children:[c.jsxs(ww,{className:"container",children:[c.jsx("svg",{width:"227",height:"40",children:c.jsx("use",{href:`${os}#logo-white`})}),c.jsx(bw,{onClick:r,children:"created by GoIT students"}),c.jsx(xg,{handleClose:i,isModalOpen:t}),c.jsxs(Sw,{children:[c.jsx(ci,{href:"#home",onClick:o=>e("home",o),children:"Головна"}),c.jsx(ci,{href:"#aboutUs",onClick:o=>e("aboutUs",o),children:"Про нас"}),c.jsx(ci,{href:"#services",onClick:o=>e("services",o),children:"Послуги"}),c.jsx(ci,{href:"#mentoring",onClick:o=>e("mentoring",o),children:"Менторство"}),c.jsx(ci,{href:"#projects",onClick:o=>e("projects",o),children:"Проєкти"})]}),c.jsxs(kw,{children:[c.jsxs(Cw,{children:[c.jsx(Ew,{href:"https://www.facebook.com/profile.php?id=61551346490841",target:"_blank",rel:"noopener noreferrer",children:c.jsx("svg",{width:"32",height:"32",children:c.jsx("use",{href:`${os}#facebook`})})}),c.jsx("a",{href:"https://www.instagram.com/healthymanagement_ua/",target:"_blank",rel:"noopener noreferrer",children:c.jsx("svg",{width:"40",height:"40",children:c.jsx("use",{href:`${os}#instagram`})})})]}),c.jsxs(jw,{children:[c.jsx(Rf,{href:"mailto:managementhealthy@gmail.com",children:"managementhealthy@gmail.com"}),c.jsx(Rf,{href:"tel:+380673160556",children:"+380 673 160 556"})]})]})]}),c.jsx(Ow,{children:"© 2023 healthy managment. All rights reserved"})]})};wg.propTypes={handleSetActiveLink:Ji.func.isRequired};const Ns="/healthy-management-project/assets/symbol-defs-t7xx9-KA.svg",Uw=_.header`
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
  }

  @media screen and (min-width: 1440px) {
  }

  @media screen and (min-width: 1920px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`,Bw=_.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Hw=_.nav`
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 40px;
    align-items: center;
  }

  @media screen and (min-width: 1920px) {
  }
`,di=_.a`
  @media screen and (min-width: 1440px) {
    position: relative;
    color: var(--typography-bluedark);
    font-family: Montserrat;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;

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
  }

  @media screen and (min-width: 1920px) {
    font-size: 16px;
    line-height: 24px;
  }
`,Ww=_.a`
  display: flex;
  min-width: 156px;
  height: 56px;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
  background: var(--background-white);
  border-radius: 16px;
  border: 1px solid var(--primary-bluedark, #1b3641);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  color: var(--typography-bluedark);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  transition: background 0.5s ease, color 0.5s ease;

  &:hover,
  &:focus {
    &:hover,
    &:focus {
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      background: var(--background-white, #fcfcfc);
      box-shadow: 0px 0px 16px 0px rgba(27, 54, 65, 0.16);
    }
  }

  @media screen and (min-width: 768px) {
    min-width: 161px;
    height: 56px;
    background: var(--background-white);
    color: var(--typography-bluedark);
    font-size: 15px;
    line-height: 22px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 193px;
    line-height: 18px;
  }

  @media screen and (min-width: 1920px) {
    min-width: 260px;
    font-size: 16px;
    line-height: 24px;
    transition: background 0.5s ease, color 0.5s ease;
  }
`,Qw=_.svg`
  stroke: black;
  width: 40px;
  height: 40px;
`,Yw=_.button`
  border: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  font-family: inherit;
  font-size: 100%;
  cursor: pointer;
  background: none;
`,Kw="_mabileMenuContainer_ixg73_1",Gw="_divMobileMenu_ixg73_9",Xw="_logoMenu_ixg73_20",qw="_contactMenu_ixg73_24",Jw="_svgMenu_ixg73_46",Zw="_nav_ixg73_50",eb="_navMenuMobile_ixg73_75",tb="_buttonMenuMobile_ixg73_84",Lt={mabileMenuContainer:Kw,divMobileMenu:Gw,logoMenu:Xw,contactMenu:qw,svgMenu:Jw,nav:Zw,navMenuMobile:eb,buttonMenuMobile:tb},nb=document.getElementById("modalMobail"),bg=({onClose:e,handleSetActiveLink:t})=>ha.createPortal(c.jsx("div",{className:Lt.mabileMenuContainer,children:c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:Lt.divMobileMenu,children:[c.jsx("a",{href:"#home",children:c.jsx("svg",{width:"40",height:"40",children:c.jsx("use",{href:`${Ns}#icon-g10`})})}),c.jsx("a",{className:Lt.contactMenu,href:"#contact",children:"Контакт"}),c.jsx("button",{className:Lt.buttonMenuMobile,type:"button",onClick:()=>e(),children:c.jsx("svg",{className:Lt.svgMenu,width:"40",height:"40",children:c.jsx("use",{href:`${Ns}#icon-close`})})})]}),c.jsxs("nav",{className:Lt.nav,children:[c.jsx("a",{className:Lt.navMenuMobile,href:"#home",onClick:n=>{e(),t("home",n)},children:"Головна"}),c.jsx("a",{className:Lt.navMenuMobile,href:"#aboutUs",onClick:n=>{e(),t("aboutUs",n)},children:"Про нас"}),c.jsx("a",{className:Lt.navMenuMobile,href:"#services",onClick:n=>{e(),t("services",n)},children:"Послуги"}),c.jsx("a",{className:Lt.navMenuMobile,href:"#mentoring",onClick:n=>{e(),t("mentoring",n)},children:"Менторство"}),c.jsx("a",{className:Lt.navMenuMobile,href:"#projects",onClick:n=>{e(),t("projects",n)},children:"Проєкти"})]})]})}),nb);bg.propTypes={onClose:Ji.func.isRequired};const Sg=({handleSetActiveLink:e})=>{const[t,n]=I.useState("home"),[r,i]=I.useState(!1),o=rr.useMediaQuery({query:"(max-width: 1439px)"}),s=rr.useMediaQuery({query:"(min-width: 1440px)"}),l=()=>{i(!r)};return I.useEffect(()=>{const a=()=>{const f=["home","aboutUs","services","mentoring","projects","contact"].find(d=>{const m=document.getElementById(d);if(m){const y=m.getBoundingClientRect();return y.top<=120&&y.bottom>=120}return m});f&&n(f)};return window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}},[]),c.jsxs(Uw,{children:[c.jsx("div",{className:"container",children:c.jsxs(Bw,{children:[o&&c.jsx("a",{href:"#home",children:c.jsx("svg",{width:"40",height:"40",children:c.jsx("use",{href:`${Ns}#icon-g10`})})}),s&&c.jsx("a",{href:"#home",children:c.jsx("svg",{width:"227",height:"40",children:c.jsx("use",{href:`${ce}#logo-black`})})}),s&&c.jsxs(Hw,{children:[c.jsx(di,{href:"#home",className:t==="home"?"active":"",onClick:a=>e("home",a),children:"Головна"}),c.jsx(di,{href:"#aboutUs",className:t==="aboutUs"?"active":"",onClick:a=>e("aboutUs",a),children:"Про нас"}),c.jsx(di,{href:"#services",className:t==="services"?"active":"",onClick:a=>e("services",a),children:"Послуги"}),c.jsx(di,{href:"#mentoring",className:t==="mentoring"?"active":"",onClick:a=>e("mentoring",a),children:"Менторство"}),c.jsx(di,{href:"#projects",className:t==="projects"?"active":"",onClick:a=>e("projects",a),children:"Проєкти"})]}),c.jsx(Ww,{href:"#contact",className:t==="contact"?"active":"",onClick:a=>e("contact",a),children:"Контакт"}),o&&c.jsx(Yw,{type:"button",onClick:()=>l(),children:c.jsx(Qw,{children:c.jsx("use",{href:`${Ns}#icon-menuburger`})})})]})}),o&&r&&c.jsx(bg,{onClose:l,handleSetActiveLink:e})]})};Sg.propTypes={handleSetActiveLink:Ji.func.isRequired};const rb="/healthy-management-project/assets/hero1x-6AVSlzud.webp",ib="/healthy-management-project/assets/hero1x-d4IOBsel.jpg",ob="/healthy-management-project/assets/hero@1x-gjNVfS_G.jpg",sb="/healthy-management-project/assets/hero@1x-T7izVw7M.jpg",ab=_.section`
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${ib});
  background-size: cover;
  margin-top: 120px;
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    background-image: url(${ob});
    margin-top: 120px;
    padding-top: 234px;
    padding-bottom: 234px;
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${sb});
    margin-top: 120px;
    padding-top: 236px;
    padding-bottom: 236px;
  }

  @media screen and (min-width: 1920px) {
    background-image: url(${rb});

    margin-top: 120px;
    padding-top: 296px;
    padding-bottom: 296px;
  }
`,lb=_.h1`
  max-width: 289px;
  color: var(--system-default-10);
  font-family: Montserrat;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    max-width: 620px;
    font-size: 40px;
    font-weight: 600;
    line-height: 56px;
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 754px;
    font-size: 48px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 56px;
    line-height: 64px;
    max-width: 828px;
  }
`,ub=_.h3`
  color: var(--system-default-10);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 28px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: 32px;
    max-width: 828px;
  }
`,cb=_.ul`
  margin-left: 20px;
  margin-top: 24px;
  margin-bottom: 48px;

  @media screen and (min-width: 768px) {
    margin-left: 30px;
    margin-top: 18px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1440px) {
  }

  @media screen and (min-width: 1920px) {
    margin-left: 38px;
    margin-top: 24px;
  }
`,fl=_.li`
  color: var(--system-default-10);
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
    font-size: 20px;
    line-height: 28px;
  }
  @media screen and (min-width: 1440px) {
  }

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: 32px;
  }
`,db=_.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,fb=_.a`
  display: flex;
  width: 100%;
  height: 56px;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  color: var(--typography-bluedark, #062136);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  border-radius: 16px;
  background: var(--primary-yellow);
  box-shadow: 0px 0px 8px 0px rgba(248, 248, 248, 0.08);
  transition: background 0.5s ease, color 0.5s ease;

  &:hover,
  &:focus {
    box-shadow: 0px 0px 16px 0px rgba(248, 248, 248, 0.16);
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  }

  @media screen and (min-width: 768px) {
    min-width: 260px;
    font-size: 15px;
    line-height: 24px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 193px;
    line-height: 18px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 16px;
    line-height: 24px;
  }
`,pb=_.a`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 56px;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
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
    box-shadow: 0px 0px 16px 0px rgba(248, 248, 248, 0.16);
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  }

  @media screen and (min-width: 768px) {
    min-width: 260px;
    height: 56px;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    transition: background 0.5s ease, color 0.5s ease;
  }

  @media screen and (min-width: 1440px) {
    max-width: 193px;
    line-height: 18px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 16px;
    line-height: 24px;
  }
`,hb=()=>c.jsx(ab,{id:"home",children:c.jsxs("div",{className:"container",children:[c.jsx(lb,{children:"Бізнес-партнер з розвитку та комунікацій здорового менеджменту"}),c.jsx(ub,{children:"Будуємо ефективні стратегії здорового менеджменту для медичних брендів:"}),c.jsxs(cb,{children:[c.jsx(fl,{children:"медичний менеджмент і маркетинг,"}),c.jsx(fl,{children:"програми управління здоров'ям для підприємств та бізнесу,"}),c.jsx(fl,{children:"менторство"})]}),c.jsxs(db,{children:[c.jsx(fb,{href:"#contact",children:"Консультація"}),c.jsx(pb,{href:"#services",children:"Послуги"})]})]})}),mb=_.section`
  padding-top: 24px;
  padding-bottom: 24px;

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,gb=_.div`
  border-radius: 16px;
  padding: 24px;
  background: var(--background-bluedark);

  @media screen and (min-width: 1920px) {
    max-width: 100%;
    padding: 80px;
  }
`,vb=_.h2`
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
`,yb=_.ul`
  display: flex;
  padding: 0;
  flex-wrap: wrap;
  gap: 24px;
`,Ro=_.li`
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
`,Io=_.svg`
  width: 80px;
  height: 80px;
`,Lo=_.div`
  display: flex;
  flex-direction: column;
`,Ao=_.h3`
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
`,Do=_.p`
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
`,xb=()=>c.jsx(mb,{className:"container",children:c.jsxs(gb,{children:[c.jsx(vb,{children:"Чому обирають нас"}),c.jsxs(yb,{children:[c.jsxs(Ro,{children:[c.jsx(Io,{children:c.jsx("use",{href:`${ce}#hands-shake`})}),c.jsxs(Lo,{children:[c.jsx(Ao,{children:"Надійне партнерство та менторство"}),c.jsx(Do,{children:"Ми налаштовані на довгострокове партнерство і дбаємо про комфортні та чесні комунікації"})]})]}),c.jsxs(Ro,{children:[c.jsx(Io,{children:c.jsx("use",{href:`${ce}#setting`})}),c.jsxs(Lo,{children:[c.jsx(Ao,{children:"Індивідуальний підхід"}),c.jsx(Do,{children:"Кожен бізнес і послуга мають свої особливості. Ми занурюємося у ваш бізнес і пропонуємо індивідуальні стратегії, які допоможуть вам досягти успіху"})]})]}),c.jsxs(Ro,{children:[c.jsx(Io,{children:c.jsx("use",{href:`${ce}#icon-lamp`})}),c.jsxs(Lo,{children:[c.jsx(Ao,{children:"Експертні послуги"}),c.jsx(Do,{children:"Ми опираємося на передовий досвід і використовуємо як класичні, так і сучасні підходи для досягнення поставленого результату"})]})]}),c.jsxs(Ro,{children:[c.jsx(Io,{children:c.jsx("use",{href:`${ce}#icon-puzzle`})}),c.jsxs(Lo,{children:[c.jsx(Ao,{children:"Комплексні рішення"}),c.jsx(Do,{children:"Наша експертиза дозволяє пропонувати комплексні рішення для ефективної співпраці"})]})]})]})]})}),$f="/healthy-management-project/assets/pic_mentorstvo1x-R5bIGNq0.webp",wb="/healthy-management-project/assets/pic_mentorstvo2x-k6d-_Us1.jpg",Uf="/healthy-management-project/assets/mob_mentor1x-_de1iGBc.webp",bb="/healthy-management-project/assets/mob_mentor@2x-oAKhVwNJ.jpg",Sb=_.section`
  padding-top: 80px;
  padding-bottom: 80px;
`,kb=_.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 1920px) {
    gap: 40px;
    margin-bottom: 40px;
    flex-direction: row;
  }
`,Cb=_.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 1920px) {
    max-width: 828px;
    align-items: flex-start;
  }
`,Eb=_.div`
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
`,jb=_.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: var(--typography-black);

  @media screen and (min-width: 1920px) {
    font-size: 48px;
    line-height: 56px;
    margin-bottom: 40px;
  }
`,Ob=_.h3`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: var(--typography-bluedark);

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: 32px;
  }
`,Bf=_.h3`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: var(--typography-white);

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: 32px;
  }
`,_b=_.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 320px;

  @media screen and (min-width: 1920px) {
    margin-bottom: 80px;
  }
`,Hf=_.p`
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
`,Pb=_.a`
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
`,Tb=_.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 1920px) {
    gap: 40px;
    flex-direction: row;
  }
`,Mb=_.div`
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
`,Rb=_.ul`
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
`,Wf=_.ul`
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
`,vr=_.li`
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
`,yr=_.li`
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
`,Ib=()=>c.jsxs(Sb,{id:"mentoring",className:"container",children:[c.jsxs(kb,{children:[c.jsxs("div",{children:[c.jsx(Dn,{minWidth:1920,children:c.jsx("img",{srcSet:`${$f} 1920w, ${wb} 2x`,sizes:"(min-width: 1920px) 1920px",src:$f,alt:"Ольга Поліщук - ваш ментор в медичній галузі"})}),c.jsx(Dn,{minWidth:300,maxWidth:1919,children:c.jsx("img",{srcSet:`${Uf} 375w, ${bb} 2x`,sizes:"(min-width: 375px) 375px",src:Uf,alt:"Ольга Поліщук - ваш ментор в медичній галузі"})})]}),c.jsxs(Cb,{children:[c.jsx(jb,{children:"Менторство"}),c.jsxs(_b,{children:[c.jsxs(Hf,{children:[c.jsx("b",{children:"Менторство в медичній галузі"})," - почути іншу думку, підтвердити власні гіпотези, зрозуміти вектор розвитку, отримати підтримку та пораду з питань менеджменту і медичного маркетингу"]}),c.jsxs(Hf,{children:[c.jsx("b",{children:"Менторство"})," - це про взаємодію та чесну комунікацію, про спільні цінності та готовність до росту, про надійне партнерство та довіру"]})]}),c.jsx(Pb,{href:"#contact",children:"Дізнатися вартість"})]})]}),c.jsx("div",{children:c.jsxs(Tb,{children:[c.jsxs(Eb,{children:[c.jsx(Ob,{children:"Про що це?"}),c.jsxs(Rb,{children:[c.jsx(vr,{children:c.jsx("p",{children:"Про прагнення почути чесну іншу думку/та або підтвердити власні гіпотези для власника/керівника"})}),c.jsx(vr,{children:c.jsx("p",{children:"Про бізнес-процеси та їх ефективність"})}),c.jsx(vr,{children:c.jsx("p",{children:"Про вектори розвитку бізнесу або проєкту"})}),c.jsx(vr,{children:c.jsx("p",{children:"Про практичний інструментарій для впровадження змін"})}),c.jsx(vr,{children:c.jsx("p",{children:"Про маркетинг, сервіс та комунікації в медичних бізнесах"})}),c.jsx(vr,{children:c.jsx("p",{children:"Про здоров'я працівників та стратегії підвищенння ефективності бізнесу"})})]})]}),c.jsxs(Mb,{children:[c.jsx(Bf,{children:"Для кого"}),c.jsxs(Wf,{children:[c.jsx(yr,{children:c.jsx("p",{children:"Лідерам, які прагнуть змін"})}),c.jsx(yr,{children:c.jsx("p",{children:"Власникам, які хочуть отримати незалежку експертну думку"})}),c.jsx(yr,{children:c.jsx("p",{children:"Керівникам та маркетологам, яким потрібна підтримка"})}),c.jsx(yr,{children:c.jsx("p",{children:"Лікарям, яким важливо отримати пораду"})})]}),c.jsx(Bf,{children:"Формат"}),c.jsxs(Wf,{children:[c.jsx(yr,{children:c.jsx("p",{children:"Індивідуальна ментор-сесія (від 1 години)"})}),c.jsx(yr,{children:c.jsx("p",{children:"Персональний супровід на декілька місяців"})})]})]})]})})]}),kg=_.section`
  padding-top: 24px;
  padding-bottom: 24px;

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,Cg=_.div`
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  background: var(--background-white);

  @media screen and (min-width: 1920px) {
    padding: 80px;
  }
`,Lb=_.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  @media screen and (min-width: 1290px) {
    flex-direction: row;
    justify-content: space-between;
  }
`,Fo=_.div`
  position: relative;

  @media screen and (min-width: 1920px) {
    min-width: 370px;
  }
`,Eg=_.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1290px) {
    gap: 40px;
    margin-bottom: 40px;
    flex-direction: row;
  }
`,jg=_.div`
  min-width: 280px;
  gap: 16px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1920px) {
    min-width: 740px;
  }
`,Og=_.div`
  @media screen and (min-width: 1920px) {
    padding: 24px;
  }
`,No=_.p`
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
`,_g=_.h2`
  color: var(--typography-black);
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;

  @media screen and (min-width: 1920px) {
    font-size: 48px;
    line-height: 56px;
  }
`,Pg=_.h3`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 24px;
  color: var(--typography-bluedark);

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    margin-bottom: 16px;
  }
`,Tg=_.p`
  font-size: 16px;
  line-height: 24px;
  color: var(--typography-bluedark);

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.4;
  }
`,Mg=_.p`
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
`,Rg=_.a`
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
`,Ig=_.p`
  font-size: 18px;
  line-height: 1.3;
  font-weight: 600;
  margin-bottom: 16px;

  color: var(--typography-bluedark);

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    margin-bottom: 24px;
  }
`,Lg=_.ul`
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
`,Nt=_.li`
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
`,_n=_.svg`
  width: 266px;
  height: 56px;

  @media screen and (min-width: 1920px) {
    width: 370px;
    height: 80px;
  }
`;function Ab(e,t){if(t===e)return!1;const n=Object.values(t),r=Object.values(e);if(n.length!==r.length||n.some((o,s)=>o!==r[s]))return!0;const i=Object.keys(e);return Object.keys(t).some((o,s)=>o!==i[s])}function Db(e,t){return e.matches[t]=!1,e.mediaQueries[t]={},e}function Ag(e){const t=Object.keys(e);return typeof window>"u"?t.reduce(Db,{mediaQueries:{},matches:{}}):t.reduce((n,r)=>{const i=window.matchMedia(e[r]);return n.mediaQueries[r]=i,n.matches[r]=i.matches,n},{mediaQueries:{},matches:{}})}function Fb(e,t){function n(r,i){return r[i]=e.mediaQueries[i].matches,r}switch(t.type){case"updateMatches":return{matches:Object.keys(e.mediaQueries).reduce(n,{}),mediaQueries:e.mediaQueries};case"setQueries":return Ag(t.queries)}}function Nb(e){const t=I.useRef(e),[n,r]=I.useReducer(Fb,e,Ag);I.useEffect(()=>{Ab(e,t.current)&&(r({type:"setQueries",queries:e}),t.current=e)},[e]);function i(){return r({type:"updateMatches"})}function o(a){const u=i;return typeof a.addListener<"u"?a.addListener(u):a.addEventListener("change",u),u}I.useEffect(()=>{const a=Object.values(n.mediaQueries),u=a.map(o);function f(d,m){typeof d.addListener<"u"?d.removeListener(u[m]):d.removeEventListener("change",u[m])}return()=>{a.forEach(f)}},[n.mediaQueries]);const{matches:s}=n,l=I.useMemo(()=>Object.values(s),[s]);return{matches:s,matchesAny:l.some(Boolean),matchesAll:l.length>0&&l.every(Boolean)}}function Dg(e){return Nb(Vb(e)).matchesAll}const pl={};function Vb(e){return pl[e]===void 0&&(pl[e]={default:e}),pl[e]}const zb=()=>{const e=Dg("(max-width: 768px)");return c.jsx(kg,{className:"container",children:c.jsxs(Cg,{children:[c.jsxs(Eg,{children:[c.jsxs(jg,{children:[c.jsx(_g,{children:"Індивідуальна ментор сесія"}),c.jsx(Tg,{children:"Вирішення вашого індивідуального запиту"}),c.jsx(Mg,{children:"від 1 години"}),c.jsx(Rg,{href:"#contact",children:"Замовити послугу"})]}),c.jsxs(Og,{children:[c.jsx(Pg,{children:"Питання, з якими можете звернутися"}),c.jsxs(Lg,{children:[c.jsx(Nt,{children:"Незалежна думка щодо маркетингу та розвитку"}),c.jsx(Nt,{children:"Порада по створенню відділу маркетингу або оцінка існуючої структури"}),c.jsx(Nt,{children:"Питання по роботі з підрядниками"}),c.jsx(Nt,{children:"Порада щодо оптимізації бізнес-процесів"}),c.jsx(Nt,{children:"Як вірно оцінити ефективність маркетингових дій"}),c.jsx(Nt,{children:"Які інструменти комунікацій використовувати"}),c.jsxs(Nt,{children:["Особисте питання по менеджменту та розвитку з питань управління"," ","здоров'ям"]})]})]})]}),c.jsx(Ig,{children:"Шлях проведення менторської сесії"}),c.jsxs(Lb,{children:[c.jsxs(Fo,{children:[e?c.jsx(_n,{children:c.jsx("use",{href:`${ce}#icon-rectangle-mob`})}):c.jsx(_n,{children:c.jsx("use",{href:`${ce}#icon-rectangle`})}),c.jsx(No,{children:"Заповнення брифу"})]}),c.jsxs(Fo,{children:[e?c.jsx(_n,{children:c.jsx("use",{href:`${ce}#icon-rectangle-mob`})}):c.jsx(_n,{children:c.jsx("use",{href:`${ce}#icon-rectangle`})}),c.jsx(No,{children:"Діагностика ситуації"})]}),c.jsxs(Fo,{children:[e?c.jsx(_n,{children:c.jsx("use",{href:`${ce}#icon-rectangle-mob`})}):c.jsx(_n,{children:c.jsx("use",{href:`${ce}#icon-rectangle`})}),c.jsx(No,{children:"Проведення сесії"})]}),c.jsxs(Fo,{children:[e?c.jsx(_n,{children:c.jsx("use",{href:`${ce}#icon-rectangle-mob`})}):c.jsx(_n,{children:c.jsx("use",{href:`${ce}#icon-rectangle`})}),c.jsx(No,{children:"Рекомендації"})]})]})]})})},$b=_.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  @media screen and (min-width: 1920px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 24px;
  }
`,Qt=_.svg`
  width: 260px;
  height: 60px;

  @media screen and (min-width: 1920px) {
    width: 285px;
    height: 80px;
  }
`,fi=_.div`
  position: relative;
  height: 60px;

  @media screen and (min-width: 1920px) {
    min-width: 285px;
  }
`;_.div`
  min-width: 740px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;const pi=_.p`
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
`,Ub=()=>{const e=Dg("(max-width: 768px)");return c.jsx(kg,{className:"container",children:c.jsxs(Cg,{children:[c.jsxs(Eg,{children:[c.jsxs(jg,{children:[c.jsx(_g,{children:"Персональний супровід"}),c.jsx(Tg,{children:"Пропрацьовуємо ваші запити та досягаємо посавлених цілей"}),c.jsx(Mg,{children:"від 2 місяців тісної взаємодії"}),c.jsx(Rg,{href:"#contact",children:"Замовити послугу"})]}),c.jsxs(Og,{children:[c.jsx(Pg,{children:"Питання, з якими можете звернутися"}),c.jsxs(Lg,{children:[c.jsx(Nt,{children:"Зануритись в бізнес-процеси та зрозуміти, де є точки зростання"}),c.jsx(Nt,{children:"Зрозуміти що таке маркетинг та як він працює у вашому бізнесі"}),c.jsx(Nt,{children:"Супровід розробки та впровадження стратегій"}),c.jsx(Nt,{children:"Особисті питання по медичному менеджменту, маркетингу та розвитку, управління здоров'ям"})]})]})]}),c.jsx(Ig,{children:"Шлях проведення менторського супроводу"}),c.jsxs($b,{children:[c.jsxs(fi,{children:[e?c.jsx(Qt,{children:c.jsx("use",{href:`${ce}#icon-rectangle-mob`})}):c.jsx(Qt,{children:c.jsx("use",{href:`${ce}#icon-rectangle2`})}),c.jsx(pi,{children:"Заповнення брифу"})]}),c.jsxs(fi,{children:[e?c.jsx(Qt,{children:c.jsx("use",{href:`${ce}#icon-rectangle-mob`})}):c.jsx(Qt,{children:c.jsx("use",{href:`${ce}#icon-rectangle2`})}),c.jsx(pi,{children:"Діагностика ситуації"})]}),c.jsxs(fi,{children:[e?c.jsx(Qt,{children:c.jsx("use",{href:`${ce}#icon-rectangle-mob`})}):c.jsx(Qt,{children:c.jsx("use",{href:`${ce}#icon-rectangle2`})}),c.jsx(pi,{children:"Визначення зон росту"})]}),c.jsxs(fi,{children:[e?c.jsx(Qt,{children:c.jsx("use",{href:`${ce}#icon-rectangle-mob`})}):c.jsx(Qt,{children:c.jsx("use",{href:`${ce}#icon-rectangle2`})}),c.jsx(pi,{children:"Менторинг"})]}),c.jsxs(fi,{children:[e?c.jsx(Qt,{children:c.jsx("use",{href:`${ce}#icon-rectangle-mob`})}):c.jsx(Qt,{children:c.jsx("use",{href:`${ce}#icon-rectangle2`})}),c.jsx(pi,{children:"Рекомендації"})]})]})]})})},_a=()=>{const e=rr.useMediaQuery({maxWidth:767}),t=rr.useMediaQuery({minWidth:768,maxWidth:1439}),n=rr.useMediaQuery({minWidth:1440,maxWidth:1919}),r=rr.useMediaQuery({minWidth:1920});return e&&"mobile"||t&&"tablet"||n&&"desktop"||r&&"largeDesktop"},Bb="/healthy-management-project/assets/denta_derm1x-JWCICTe_.webp",Hb="/healthy-management-project/assets/medialt1x-5LMkh0v8.webp",Wb="/healthy-management-project/assets/cures1x--AoJBOWJ.webp",Qb="/healthy-management-project/assets/clinic1x-YgK5Wnno.webp",Yb="/healthy-management-project/assets/kmklam1x-FlPeEOTs.webp",Kb="/healthy-management-project/assets/symmetrica1x-hhcOddzB.webp",hl=[{image:Bb,category:"DentaDerm",title:"Діагностика бізнес-процесів, маркетингу, сервісу, розробка стратегії розвитку, менторство",about:["Діагностика бізнес-процесів та маркетингу","Стратегія розвитку","Підбір команди маркетингу","Менторство"],details:[{title:"Завдання:",about:["Розробка стратегії розвитку","Розробка нового сайту клініки","Пошук команди маркетингу"],comment:"Дії в результаті розробки стратегії розвитку передбачали роботу над проєктом в новому позиціонуванні,  пошук зовнішньої та внутрішньої команди для реалізації нового сайту, ведення соцмереж"},{title:"В результаті роботи над проєктом:",about:["Розроблені вектори розвитку","Розроблений та впроваджений новий сайт","Підібрана команда маркетингового супроводу"],comment:"В результаті співпраці партнер отримав комплексне бачення просування, сформована команда маркетингу"}]},{image:Hb,category:"Medialt",title:"Діагностика бізнес-процесів, маркетингу, сервісу, розробка стратегії розвитку, менторство",about:["Аудит ринку та конкурентів","Аудит маркетингу та сервісу","Розробка стратегії розвитку"],details:[{title:"Завдання:",about:["Розробка стратегії розвитку"]},{title:"Робота над задачою була розділена на два етапи:",about:["Аналіз конкурентів, ринку, виявлення зовнішніх можливостей та загроз","Аналіз сервісу медичного центру, аналіз роботи контакт центру, маркетингу, наявної бази пацієнтів та внутрішніх бізнес-процесів"]},{title:"В результаті комплексного аудиту підготували стратегію розвитку, яка передбачала рекомендації щодо:",about:["Управління маркетингом","Оптимізації роботи сервісу","Можливості МІС","Етапи розвитку напрямків та клініки вцілому"],comment:"В результаті співпраці - за 5 місяців ріст обороту в два рази"}]},{image:Wb,category:"Cures",title:"Автоматизація комунікації з пацієнтами",about:["Створення та запуск 20 чат-ботів для клінік","Проведення консультацій та аудитів комунікацій клінік з пацієнтами","Розробка персональних протоколів спілкування з пацієнтами"],details:[{title:"Завдання:",about:["Автоматизація комунікації з пацієнтами"]},{title:"В результаті роботи над проєктом:",about:["Розвиток проєкту по створенню чат-ботів для медичних центрів","Розробка протоколів супроводу та опитувальників для клінік","Проведення зустрічей та комунікацій з клініками","Розробка алгоритмів та запуск чат-ботів"],comment:"В результаті співпраці над проєктом запуск 20 чат-ботів для медичних центрів"}]},{image:Qb,category:"Клініка ім. ак. Юрія Спіженка",title:"Менторство, діагностика бізнес-процесів, маркетингу та сервісу, розробка стратегії розвитку",about:["Діагностика бізнес-процесів","Аудит маркетингу та сервісу","Розробка стратегії розвитку та маркетингу","Розробка та впровадження комунікаційної стратегії","Ведення маркетингових активностей "],details:[{title:"Завдання:",about:["Рестарт клініки у воєний час"]},{title:"Робота над задачею була розділена на три етапи:",about:["Діагностика конкурентів, ринку, виявлення зовнішніх можливостей та загроз","Діагностика сервісу медичного центру, аналіз роботи контакт центру, маркетингу, наявної бази пацієнтів та внутрішніх бізнес-процесів","Розробка та впровадження стратегії маркетингу, комунікації та сервісу, супровід рекламних кампаній, оптимізація бізнес-процесів"],comment:"В результаті співпраці над проєктом: збільшення доходу клініки, вихід на довоєний об’єм"}]},{image:Yb,category:"KMKlab",title:"Діагностика маркетингу, сервісу, бізнес-процесів",about:["Аудит маркетингу та інструментів комунікацій","Аудит сервісу","Розробка рекомендацій щодо розвитку"],details:[{title:"Завдання:",about:["Аудит поточної маркетингової стратегії","Аудит сервісу","Формування рекомендацій по розвитку"]},{title:"Робота над задачою була розділена на два етапи:",about:["Відвідування всіх відділень лабораторій з метою формування рекомендацій по кожній локації","Аналіз поточної ситуації маркетингу та комунікацій, ведення соціальних мереж"],comment:"В результаті співпраці проаналізовано роботу відділу маркетингу та підрядників та надані рекомендації щодо структури відділу, сформовані подальші  кроки  маркетингової  та сервісної стратегії"}]},{image:Kb,category:"Symmetrica",title:"Менторство, діагностика маркетингу, сервісу, бізнес-процесів",about:["Аудит маркетингу та сервісу","Розробка рекомендацій щодо розвитку","Оптимізація бізнес-процесів"],details:[{title:"Завдання:",about:["Діагностика поточної маркетингової діяльності та комунікацій","Аудит сервісу","Аудит роботи підрядників","Формування рекомендацій по розвитку"]},{title:"В результаті роботи над проєктом:",about:["Проведений поточний аудит шляху пацієнта, виявлені точки зростання сервісу","Проаналізовано роботу відділу маркетингу і підрядників та надані рекомендації щодо структури відділу","Надані рекомендації щодо формування подальших кроків маркетингової  та сервісної стратегії","Сформовані конверсійні показники та вектори руху","Надана менторська підтримка"]}]}],Gb=_.section`
  padding-top: 40px;
  padding-bottom: 40px;
  @media screen and (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,Xb=_.h2`
  font-size: 48px;
  font-weight: 600;
  line-height: calc(56 / 48);

  margin-bottom: 40px;
`,qb=_.ul`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
  }
`,Jb=_.span`
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
`,Zb=_.svg`
  fill: currentColor;
  stroke: currentColor;

  width: 24px;
  height: 24px;
`,eS=_.li`
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
`,tS=_.div`
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
`,nS=_.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,rS=_.h4`
  font-size: ${e=>e.forDetail?"18px":"16px"};
  font-weight: 600;
  line-height: calc(${e=>e.forDetail?24/18:24/16});

  @media screen and (min-width: 768px) {
    font-size: ${e=>e.forDetail?"24px":"20px"};
    line-height: calc(${e=>e.forDetail?32/24:28/20});
  }
`,iS=_.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,oS=_.li`
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
`,sS=_.p`
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
`,aS=_.svg`
  fill: currentColor;
  stroke: currentColor;
`,Wc=({title:e,about:t,comment:n,additionalComment:r=!1})=>c.jsxs(nS,{children:[c.jsx(rS,{forDetail:r,children:e}),c.jsx(iS,{children:t==null?void 0:t.map(i=>c.jsxs(oS,{children:[c.jsx(aS,{children:c.jsx("use",{href:ce+"#icon-done"})}),i]},i))}),n&&c.jsx(sS,{additionalComment:r,children:n})]}),lS=_.div`
  padding: 24px;
  display: flex;
  gap: 24px;
  flex-direction: column;

  color: var(--background-whitegrey, #f4f4f6);
  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`,uS=_.h3`
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
`,cS=_.svg`
  fill: currentColor;
  stroke: currentColor;

  width: 24px;
  height: 24px;

  position: absolute;
  right: 28px;
  top: 28px;
`,dS=({dataList:{details:e,category:t}})=>{const n=_a();return c.jsxs(lS,{children:[c.jsxs("div",{children:[c.jsx(uS,{symbols:t.length,children:t}),n==="mobile"&&c.jsx(cS,{children:c.jsx("use",{href:ce+"#icon-close"})})]}),e.map((r,i)=>c.jsx(Wc,{title:r.title,about:r.about,comment:r.comment,additionalComment:i===0},r.title))]})},fS=_.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  color: var(--typography-bluedark, #1b3641);
`,pS=_.h3`
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
`,hS=_.img`
  height: 279px;
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    height: 300px;
  }
`,mS=_.span`
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  text-align: center;
`,gS=({dataList:e,onClick:t})=>{const n=_a(),{category:r,title:i,about:o=[],image:s}=e;return c.jsxs(fS,{onClick:t,children:[c.jsx(hS,{src:s,alt:i}),c.jsx("div",{children:c.jsx(pS,{symbols:r.length,children:r})}),c.jsx(Wc,{title:i,about:o}),n==="mobile"&&c.jsx(mS,{children:"Детальніше"})]})},vS=({item:e})=>{const[t,n]=I.useState(!1),r=_a(),i=()=>{r==="mobile"&&n(o=>!o)};return c.jsxs(eS,{children:[c.jsx(gS,{dataList:e,onClick:i}),c.jsx(tS,{isVisible:t,onClick:i,image:e.image,className:!t&&r==="mobile"?"visually-hidden":"",children:c.jsx(dS,{dataList:e})})]})},yS=()=>{const e=_a(),[t,n]=I.useState(e==="mobile"?[...hl.slice(0,3)]:[...hl]),r=()=>{t.length>4?n(i=>i.slice(0,3)):n([...hl])};return c.jsxs(Gb,{id:"projects",className:"container",style:{paddingTop:"80px",paddingBottom:"80px"},children:[c.jsx(Xb,{children:"Проєкти"}),c.jsx(qb,{children:t.map(i=>c.jsx(vS,{item:i},i.category))}),e==="mobile"&&c.jsxs(Jb,{onClick:r,children:[t.length>3?"Менше проєктів":"Більше проєктів",c.jsx(Zb,{children:c.jsx("use",{href:ce+`${t.length>3?"#icon-arrowup":"#icon-arrowdown"}`})})]})]})},xS=_.section`
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
`,wS=_.div`
  padding: 24px;
  border-radius: 16px;
  background: var(--background-white);

  @media screen and (min-width: 1920px) {
    padding: 80px;
    max-width: 828px;
    box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  }
`,bS=_.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;

  @media screen and (min-width: 1920px) {
    gap: 40px;
    margin-bottom: 40px;
  }
`,SS=_.h2`
  color: var(--typography-bluedark);
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;

  @media screen and (min-width: 1920px) {
    font-size: 48px;
    line-height: 56px;
  }
`,kS=_.h2`
  color: var(--typography-bluedark);
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    line-height: 28px;
  }
`,CS=_.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 1920px) {
    gap: 24px;
  }
`,ml=_.li`
  display: flex;
  align-items: center;
  gap: 16px;
  border-radius: 16px;
  background: var(--background-whitegrey);
  padding: 16px;
`,gl=_.svg`
  width: 24px;
  height: 24px;
  fill: var(--background-white);
  stroke-width: 4px;
`,vl=_.p`
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
`,ES=_.img`
  width: 100%;
  height: 327px;
  border-radius: 16px;

  @media screen and (min-width: 1920px) {
    width: 828px;
    height: 664px;
  }
`,jS="/healthy-management-project/assets/olga_with_book1x-kIN8FAVO.webp",OS="/healthy-management-project/assets/olga_with_book1x-KTuULWu1.jpg",_S="/healthy-management-project/assets/olga_with_book2x-lES61yI6.jpg",PS=()=>c.jsxs(xS,{className:"container",children:[c.jsxs(wS,{children:[c.jsxs(bS,{children:[c.jsx(SS,{children:"Принципи роботи"}),c.jsx(kS,{children:"Наші принципи роботи полягають у співдії з ціннісними брендами та командами, які готові до чесної співпраці, щоб сприяти досягненню поставлених цілей. Готові ділитися власним досвідом та створювати стратегії здорового менеджменту та розвитку, маркетингу та сервісу"})]}),c.jsxs(CS,{children:[c.jsxs(ml,{children:[c.jsx(gl,{children:c.jsx("use",{href:`${ce}#icon-done-yellow`})}),c.jsx(vl,{children:"Більше 18 років досвіду в маркетингу та комунікаціях"})]}),c.jsxs(ml,{children:[c.jsx(gl,{children:c.jsx("use",{href:`${ce}#icon-done-yellow`})}),c.jsx(vl,{children:"Глибоке розуміння бізнес-процесів медичних закладів"})]}),c.jsxs(ml,{children:[c.jsx(gl,{children:c.jsx("use",{href:`${ce}#icon-done-yellow`})}),c.jsx(vl,{children:"Використання принципів доказової медицини"})]})]})]}),c.jsxs("picture",{children:[c.jsx("source",{srcSet:`${_S} 2x, ${OS} 1x`,media:"(min-width: 1920px)"}),c.jsx(ES,{src:jS,alt:"Ольга Поліщук"})]})]}),TS=_.button`
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
`,MS=()=>{const[e,t]=I.useState(!1);I.useEffect(()=>{const r=()=>{const i=window.scrollY,o=document.getElementById("footer"),s=window.innerHeight+window.scrollY-o.offsetTop,l=Math.max(80,s);t(i>480||s>80),document.documentElement.style.setProperty("--scroll-to-top-bottom",`${l}px`)};return window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}},[]);const n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return c.jsx(c.Fragment,{children:e&&c.jsx("section",{className:"container",children:c.jsx(TS,{onClick:n,children:c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${ce}#icon-arrowup`})})})})})};function Fg(e,t){return function(){return e.apply(t,arguments)}}const{toString:RS}=Object.prototype,{getPrototypeOf:Qc}=Object,Pa=(e=>t=>{const n=RS.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),rn=e=>(e=e.toLowerCase(),t=>Pa(t)===e),Ta=e=>t=>typeof t===e,{isArray:ei}=Array,Zi=Ta("undefined");function IS(e){return e!==null&&!Zi(e)&&e.constructor!==null&&!Zi(e.constructor)&&Tt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ng=rn("ArrayBuffer");function LS(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ng(e.buffer),t}const AS=Ta("string"),Tt=Ta("function"),Vg=Ta("number"),Ma=e=>e!==null&&typeof e=="object",DS=e=>e===!0||e===!1,ss=e=>{if(Pa(e)!=="object")return!1;const t=Qc(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},FS=rn("Date"),NS=rn("File"),VS=rn("Blob"),zS=rn("FileList"),$S=e=>Ma(e)&&Tt(e.pipe),US=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Tt(e.append)&&((t=Pa(e))==="formdata"||t==="object"&&Tt(e.toString)&&e.toString()==="[object FormData]"))},BS=rn("URLSearchParams"),HS=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ao(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),ei(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let l;for(r=0;r<s;r++)l=o[r],t.call(null,e[l],l,e)}}function zg(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const $g=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Ug=e=>!Zi(e)&&e!==$g;function Mu(){const{caseless:e}=Ug(this)&&this||{},t={},n=(r,i)=>{const o=e&&zg(t,i)||i;ss(t[o])&&ss(r)?t[o]=Mu(t[o],r):ss(r)?t[o]=Mu({},r):ei(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&ao(arguments[r],n);return t}const WS=(e,t,n,{allOwnKeys:r}={})=>(ao(t,(i,o)=>{n&&Tt(i)?e[o]=Fg(i,n):e[o]=i},{allOwnKeys:r}),e),QS=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),YS=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},KS=(e,t,n,r)=>{let i,o,s;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!r||r(s,e,t))&&!l[s]&&(t[s]=e[s],l[s]=!0);e=n!==!1&&Qc(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},GS=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},XS=e=>{if(!e)return null;if(ei(e))return e;let t=e.length;if(!Vg(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},qS=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Qc(Uint8Array)),JS=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},ZS=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},e2=rn("HTMLFormElement"),t2=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Qf=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),n2=rn("RegExp"),Bg=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};ao(n,(i,o)=>{let s;(s=t(i,o,e))!==!1&&(r[o]=s||i)}),Object.defineProperties(e,r)},r2=e=>{Bg(e,(t,n)=>{if(Tt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Tt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},i2=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return ei(e)?r(e):r(String(e).split(t)),n},o2=()=>{},s2=(e,t)=>(e=+e,Number.isFinite(e)?e:t),yl="abcdefghijklmnopqrstuvwxyz",Yf="0123456789",Hg={DIGIT:Yf,ALPHA:yl,ALPHA_DIGIT:yl+yl.toUpperCase()+Yf},a2=(e=16,t=Hg.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function l2(e){return!!(e&&Tt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const u2=e=>{const t=new Array(10),n=(r,i)=>{if(Ma(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=ei(r)?[]:{};return ao(r,(s,l)=>{const a=n(s,i+1);!Zi(a)&&(o[l]=a)}),t[i]=void 0,o}}return r};return n(e,0)},c2=rn("AsyncFunction"),d2=e=>e&&(Ma(e)||Tt(e))&&Tt(e.then)&&Tt(e.catch),L={isArray:ei,isArrayBuffer:Ng,isBuffer:IS,isFormData:US,isArrayBufferView:LS,isString:AS,isNumber:Vg,isBoolean:DS,isObject:Ma,isPlainObject:ss,isUndefined:Zi,isDate:FS,isFile:NS,isBlob:VS,isRegExp:n2,isFunction:Tt,isStream:$S,isURLSearchParams:BS,isTypedArray:qS,isFileList:zS,forEach:ao,merge:Mu,extend:WS,trim:HS,stripBOM:QS,inherits:YS,toFlatObject:KS,kindOf:Pa,kindOfTest:rn,endsWith:GS,toArray:XS,forEachEntry:JS,matchAll:ZS,isHTMLForm:e2,hasOwnProperty:Qf,hasOwnProp:Qf,reduceDescriptors:Bg,freezeMethods:r2,toObjectSet:i2,toCamelCase:t2,noop:o2,toFiniteNumber:s2,findKey:zg,global:$g,isContextDefined:Ug,ALPHABET:Hg,generateString:a2,isSpecCompliantForm:l2,toJSONObject:u2,isAsyncFn:c2,isThenable:d2};function ve(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}L.inherits(ve,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:L.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Wg=ve.prototype,Qg={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Qg[e]={value:e}});Object.defineProperties(ve,Qg);Object.defineProperty(Wg,"isAxiosError",{value:!0});ve.from=(e,t,n,r,i,o)=>{const s=Object.create(Wg);return L.toFlatObject(e,s,function(a){return a!==Error.prototype},l=>l!=="isAxiosError"),ve.call(s,e.message,t,n,r,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};const f2=null;function Ru(e){return L.isPlainObject(e)||L.isArray(e)}function Yg(e){return L.endsWith(e,"[]")?e.slice(0,-2):e}function Kf(e,t,n){return e?e.concat(t).map(function(i,o){return i=Yg(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function p2(e){return L.isArray(e)&&!e.some(Ru)}const h2=L.toFlatObject(L,{},null,function(t){return/^is[A-Z]/.test(t)});function Ra(e,t,n){if(!L.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=L.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(g,w){return!L.isUndefined(w[g])});const r=n.metaTokens,i=n.visitor||f,o=n.dots,s=n.indexes,a=(n.Blob||typeof Blob<"u"&&Blob)&&L.isSpecCompliantForm(t);if(!L.isFunction(i))throw new TypeError("visitor must be a function");function u(v){if(v===null)return"";if(L.isDate(v))return v.toISOString();if(!a&&L.isBlob(v))throw new ve("Blob is not supported. Use a Buffer instead.");return L.isArrayBuffer(v)||L.isTypedArray(v)?a&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function f(v,g,w){let h=v;if(v&&!w&&typeof v=="object"){if(L.endsWith(g,"{}"))g=r?g:g.slice(0,-2),v=JSON.stringify(v);else if(L.isArray(v)&&p2(v)||(L.isFileList(v)||L.endsWith(g,"[]"))&&(h=L.toArray(v)))return g=Yg(g),h.forEach(function(x,b){!(L.isUndefined(x)||x===null)&&t.append(s===!0?Kf([g],b,o):s===null?g:g+"[]",u(x))}),!1}return Ru(v)?!0:(t.append(Kf(w,g,o),u(v)),!1)}const d=[],m=Object.assign(h2,{defaultVisitor:f,convertValue:u,isVisitable:Ru});function y(v,g){if(!L.isUndefined(v)){if(d.indexOf(v)!==-1)throw Error("Circular reference detected in "+g.join("."));d.push(v),L.forEach(v,function(h,p){(!(L.isUndefined(h)||h===null)&&i.call(t,h,L.isString(p)?p.trim():p,g,m))===!0&&y(h,g?g.concat(p):[p])}),d.pop()}}if(!L.isObject(e))throw new TypeError("data must be an object");return y(e),t}function Gf(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Yc(e,t){this._pairs=[],e&&Ra(e,this,t)}const Kg=Yc.prototype;Kg.append=function(t,n){this._pairs.push([t,n])};Kg.toString=function(t){const n=t?function(r){return t.call(this,r,Gf)}:Gf;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function m2(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Gg(e,t,n){if(!t)return e;const r=n&&n.encode||m2,i=n&&n.serialize;let o;if(i?o=i(t,n):o=L.isURLSearchParams(t)?t.toString():new Yc(t,n).toString(r),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class g2{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){L.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Xf=g2,Xg={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},v2=typeof URLSearchParams<"u"?URLSearchParams:Yc,y2=typeof FormData<"u"?FormData:null,x2=typeof Blob<"u"?Blob:null,w2={isBrowser:!0,classes:{URLSearchParams:v2,FormData:y2,Blob:x2},protocols:["http","https","file","blob","url","data"]},qg=typeof window<"u"&&typeof document<"u",b2=(e=>qg&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),S2=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",k2=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:qg,hasStandardBrowserEnv:b2,hasStandardBrowserWebWorkerEnv:S2},Symbol.toStringTag,{value:"Module"})),Jt={...k2,...w2};function C2(e,t){return Ra(e,new Jt.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return Jt.isNode&&L.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function E2(e){return L.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function j2(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function Jg(e){function t(n,r,i,o){let s=n[o++];const l=Number.isFinite(+s),a=o>=n.length;return s=!s&&L.isArray(i)?i.length:s,a?(L.hasOwnProp(i,s)?i[s]=[i[s],r]:i[s]=r,!l):((!i[s]||!L.isObject(i[s]))&&(i[s]=[]),t(n,r,i[s],o)&&L.isArray(i[s])&&(i[s]=j2(i[s])),!l)}if(L.isFormData(e)&&L.isFunction(e.entries)){const n={};return L.forEachEntry(e,(r,i)=>{t(E2(r),i,n,0)}),n}return null}function O2(e,t,n){if(L.isString(e))try{return(t||JSON.parse)(e),L.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Kc={transitional:Xg,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=L.isObject(t);if(o&&L.isHTMLForm(t)&&(t=new FormData(t)),L.isFormData(t))return i&&i?JSON.stringify(Jg(t)):t;if(L.isArrayBuffer(t)||L.isBuffer(t)||L.isStream(t)||L.isFile(t)||L.isBlob(t))return t;if(L.isArrayBufferView(t))return t.buffer;if(L.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return C2(t,this.formSerializer).toString();if((l=L.isFileList(t))||r.indexOf("multipart/form-data")>-1){const a=this.env&&this.env.FormData;return Ra(l?{"files[]":t}:t,a&&new a,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),O2(t)):t}],transformResponse:[function(t){const n=this.transitional||Kc.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&L.isString(t)&&(r&&!this.responseType||i)){const s=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(l){if(s)throw l.name==="SyntaxError"?ve.from(l,ve.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Jt.classes.FormData,Blob:Jt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};L.forEach(["delete","get","head","post","put","patch"],e=>{Kc.headers[e]={}});const Gc=Kc,_2=L.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),P2=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),n=s.substring(0,i).trim().toLowerCase(),r=s.substring(i+1).trim(),!(!n||t[n]&&_2[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},qf=Symbol("internals");function hi(e){return e&&String(e).trim().toLowerCase()}function as(e){return e===!1||e==null?e:L.isArray(e)?e.map(as):String(e)}function T2(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const M2=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function xl(e,t,n,r,i){if(L.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!L.isString(t)){if(L.isString(r))return t.indexOf(r)!==-1;if(L.isRegExp(r))return r.test(t)}}function R2(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function I2(e,t){const n=L.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,s){return this[r].call(this,t,i,o,s)},configurable:!0})})}class Ia{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(l,a,u){const f=hi(a);if(!f)throw new Error("header name must be a non-empty string");const d=L.findKey(i,f);(!d||i[d]===void 0||u===!0||u===void 0&&i[d]!==!1)&&(i[d||a]=as(l))}const s=(l,a)=>L.forEach(l,(u,f)=>o(u,f,a));return L.isPlainObject(t)||t instanceof this.constructor?s(t,n):L.isString(t)&&(t=t.trim())&&!M2(t)?s(P2(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=hi(t),t){const r=L.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return T2(i);if(L.isFunction(n))return n.call(this,i,r);if(L.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=hi(t),t){const r=L.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||xl(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(s){if(s=hi(s),s){const l=L.findKey(r,s);l&&(!n||xl(r,r[l],l,n))&&(delete r[l],i=!0)}}return L.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||xl(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return L.forEach(this,(i,o)=>{const s=L.findKey(r,o);if(s){n[s]=as(i),delete n[o];return}const l=t?R2(o):String(o).trim();l!==o&&delete n[o],n[l]=as(i),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return L.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&L.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[qf]=this[qf]={accessors:{}}).accessors,i=this.prototype;function o(s){const l=hi(s);r[l]||(I2(i,s),r[l]=!0)}return L.isArray(t)?t.forEach(o):o(t),this}}Ia.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);L.reduceDescriptors(Ia.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});L.freezeMethods(Ia);const fn=Ia;function wl(e,t){const n=this||Gc,r=t||n,i=fn.from(r.headers);let o=r.data;return L.forEach(e,function(l){o=l.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function Zg(e){return!!(e&&e.__CANCEL__)}function lo(e,t,n){ve.call(this,e??"canceled",ve.ERR_CANCELED,t,n),this.name="CanceledError"}L.inherits(lo,ve,{__CANCEL__:!0});function L2(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new ve("Request failed with status code "+n.status,[ve.ERR_BAD_REQUEST,ve.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const A2=Jt.hasStandardBrowserEnv?{write(e,t,n,r,i,o){const s=[e+"="+encodeURIComponent(t)];L.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),L.isString(r)&&s.push("path="+r),L.isString(i)&&s.push("domain="+i),o===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function D2(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function F2(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function ev(e,t){return e&&!D2(t)?F2(e,t):t}const N2=Jt.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let s=o;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(s){const l=L.isString(s)?i(s):s;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function V2(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function z2(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,s;return t=t!==void 0?t:1e3,function(a){const u=Date.now(),f=r[o];s||(s=u),n[i]=a,r[i]=u;let d=o,m=0;for(;d!==i;)m+=n[d++],d=d%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-s<t)return;const y=f&&u-f;return y?Math.round(m*1e3/y):void 0}}function Jf(e,t){let n=0;const r=z2(50,250);return i=>{const o=i.loaded,s=i.lengthComputable?i.total:void 0,l=o-n,a=r(l),u=o<=s;n=o;const f={loaded:o,total:s,progress:s?o/s:void 0,bytes:l,rate:a||void 0,estimated:a&&s&&u?(s-o)/a:void 0,event:i};f[t?"download":"upload"]=!0,e(f)}}const $2=typeof XMLHttpRequest<"u",U2=$2&&function(e){return new Promise(function(n,r){let i=e.data;const o=fn.from(e.headers).normalize();let{responseType:s,withXSRFToken:l}=e,a;function u(){e.cancelToken&&e.cancelToken.unsubscribe(a),e.signal&&e.signal.removeEventListener("abort",a)}let f;if(L.isFormData(i)){if(Jt.hasStandardBrowserEnv||Jt.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((f=o.getContentType())!==!1){const[g,...w]=f?f.split(";").map(h=>h.trim()).filter(Boolean):[];o.setContentType([g||"multipart/form-data",...w].join("; "))}}let d=new XMLHttpRequest;if(e.auth){const g=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(g+":"+w))}const m=ev(e.baseURL,e.url);d.open(e.method.toUpperCase(),Gg(m,e.params,e.paramsSerializer),!0),d.timeout=e.timeout;function y(){if(!d)return;const g=fn.from("getAllResponseHeaders"in d&&d.getAllResponseHeaders()),h={data:!s||s==="text"||s==="json"?d.responseText:d.response,status:d.status,statusText:d.statusText,headers:g,config:e,request:d};L2(function(x){n(x),u()},function(x){r(x),u()},h),d=null}if("onloadend"in d?d.onloadend=y:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(y)},d.onabort=function(){d&&(r(new ve("Request aborted",ve.ECONNABORTED,e,d)),d=null)},d.onerror=function(){r(new ve("Network Error",ve.ERR_NETWORK,e,d)),d=null},d.ontimeout=function(){let w=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||Xg;e.timeoutErrorMessage&&(w=e.timeoutErrorMessage),r(new ve(w,h.clarifyTimeoutError?ve.ETIMEDOUT:ve.ECONNABORTED,e,d)),d=null},Jt.hasStandardBrowserEnv&&(l&&L.isFunction(l)&&(l=l(e)),l||l!==!1&&N2(m))){const g=e.xsrfHeaderName&&e.xsrfCookieName&&A2.read(e.xsrfCookieName);g&&o.set(e.xsrfHeaderName,g)}i===void 0&&o.setContentType(null),"setRequestHeader"in d&&L.forEach(o.toJSON(),function(w,h){d.setRequestHeader(h,w)}),L.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),s&&s!=="json"&&(d.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&d.addEventListener("progress",Jf(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",Jf(e.onUploadProgress)),(e.cancelToken||e.signal)&&(a=g=>{d&&(r(!g||g.type?new lo(null,e,d):g),d.abort(),d=null)},e.cancelToken&&e.cancelToken.subscribe(a),e.signal&&(e.signal.aborted?a():e.signal.addEventListener("abort",a)));const v=V2(m);if(v&&Jt.protocols.indexOf(v)===-1){r(new ve("Unsupported protocol "+v+":",ve.ERR_BAD_REQUEST,e));return}d.send(i||null)})},Iu={http:f2,xhr:U2};L.forEach(Iu,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Zf=e=>`- ${e}`,B2=e=>L.isFunction(e)||e===null||e===!1,tv={getAdapter:e=>{e=L.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let o=0;o<t;o++){n=e[o];let s;if(r=n,!B2(n)&&(r=Iu[(s=String(n)).toLowerCase()],r===void 0))throw new ve(`Unknown adapter '${s}'`);if(r)break;i[s||"#"+o]=r}if(!r){const o=Object.entries(i).map(([l,a])=>`adapter ${l} `+(a===!1?"is not supported by the environment":"is not available in the build"));let s=t?o.length>1?`since :
`+o.map(Zf).join(`
`):" "+Zf(o[0]):"as no adapter specified";throw new ve("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:Iu};function bl(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new lo(null,e)}function ep(e){return bl(e),e.headers=fn.from(e.headers),e.data=wl.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),tv.getAdapter(e.adapter||Gc.adapter)(e).then(function(r){return bl(e),r.data=wl.call(e,e.transformResponse,r),r.headers=fn.from(r.headers),r},function(r){return Zg(r)||(bl(e),r&&r.response&&(r.response.data=wl.call(e,e.transformResponse,r.response),r.response.headers=fn.from(r.response.headers))),Promise.reject(r)})}const tp=e=>e instanceof fn?e.toJSON():e;function Gr(e,t){t=t||{};const n={};function r(u,f,d){return L.isPlainObject(u)&&L.isPlainObject(f)?L.merge.call({caseless:d},u,f):L.isPlainObject(f)?L.merge({},f):L.isArray(f)?f.slice():f}function i(u,f,d){if(L.isUndefined(f)){if(!L.isUndefined(u))return r(void 0,u,d)}else return r(u,f,d)}function o(u,f){if(!L.isUndefined(f))return r(void 0,f)}function s(u,f){if(L.isUndefined(f)){if(!L.isUndefined(u))return r(void 0,u)}else return r(void 0,f)}function l(u,f,d){if(d in t)return r(u,f);if(d in e)return r(void 0,u)}const a={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l,headers:(u,f)=>i(tp(u),tp(f),!0)};return L.forEach(Object.keys(Object.assign({},e,t)),function(f){const d=a[f]||i,m=d(e[f],t[f],f);L.isUndefined(m)&&d!==l||(n[f]=m)}),n}const nv="1.6.2",Xc={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Xc[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const np={};Xc.transitional=function(t,n,r){function i(o,s){return"[Axios v"+nv+"] Transitional option '"+o+"'"+s+(r?". "+r:"")}return(o,s,l)=>{if(t===!1)throw new ve(i(s," has been removed"+(n?" in "+n:"")),ve.ERR_DEPRECATED);return n&&!np[s]&&(np[s]=!0,console.warn(i(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,s,l):!0}};function H2(e,t,n){if(typeof e!="object")throw new ve("options must be an object",ve.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],s=t[o];if(s){const l=e[o],a=l===void 0||s(l,o,e);if(a!==!0)throw new ve("option "+o+" must be "+a,ve.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ve("Unknown option "+o,ve.ERR_BAD_OPTION)}}const Lu={assertOptions:H2,validators:Xc},Pn=Lu.validators;class Vs{constructor(t){this.defaults=t,this.interceptors={request:new Xf,response:new Xf}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Gr(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&Lu.assertOptions(r,{silentJSONParsing:Pn.transitional(Pn.boolean),forcedJSONParsing:Pn.transitional(Pn.boolean),clarifyTimeoutError:Pn.transitional(Pn.boolean)},!1),i!=null&&(L.isFunction(i)?n.paramsSerializer={serialize:i}:Lu.assertOptions(i,{encode:Pn.function,serialize:Pn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=o&&L.merge(o.common,o[n.method]);o&&L.forEach(["delete","get","head","post","put","patch","common"],v=>{delete o[v]}),n.headers=fn.concat(s,o);const l=[];let a=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(n)===!1||(a=a&&g.synchronous,l.unshift(g.fulfilled,g.rejected))});const u=[];this.interceptors.response.forEach(function(g){u.push(g.fulfilled,g.rejected)});let f,d=0,m;if(!a){const v=[ep.bind(this),void 0];for(v.unshift.apply(v,l),v.push.apply(v,u),m=v.length,f=Promise.resolve(n);d<m;)f=f.then(v[d++],v[d++]);return f}m=l.length;let y=n;for(d=0;d<m;){const v=l[d++],g=l[d++];try{y=v(y)}catch(w){g.call(this,w);break}}try{f=ep.call(this,y)}catch(v){return Promise.reject(v)}for(d=0,m=u.length;d<m;)f=f.then(u[d++],u[d++]);return f}getUri(t){t=Gr(this.defaults,t);const n=ev(t.baseURL,t.url);return Gg(n,t.params,t.paramsSerializer)}}L.forEach(["delete","get","head","options"],function(t){Vs.prototype[t]=function(n,r){return this.request(Gr(r||{},{method:t,url:n,data:(r||{}).data}))}});L.forEach(["post","put","patch"],function(t){function n(r){return function(o,s,l){return this.request(Gr(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}Vs.prototype[t]=n(),Vs.prototype[t+"Form"]=n(!0)});const ls=Vs;class qc{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(l=>{r.subscribe(l),o=l}).then(i);return s.cancel=function(){r.unsubscribe(o)},s},t(function(o,s,l){r.reason||(r.reason=new lo(o,s,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new qc(function(i){t=i}),cancel:t}}}const W2=qc;function Q2(e){return function(n){return e.apply(null,n)}}function Y2(e){return L.isObject(e)&&e.isAxiosError===!0}const Au={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Au).forEach(([e,t])=>{Au[t]=e});const K2=Au;function rv(e){const t=new ls(e),n=Fg(ls.prototype.request,t);return L.extend(n,ls.prototype,t,{allOwnKeys:!0}),L.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return rv(Gr(e,i))},n}const Be=rv(Gc);Be.Axios=ls;Be.CanceledError=lo;Be.CancelToken=W2;Be.isCancel=Zg;Be.VERSION=nv;Be.toFormData=Ra;Be.AxiosError=ve;Be.Cancel=Be.CanceledError;Be.all=function(t){return Promise.all(t)};Be.spread=Q2;Be.isAxiosError=Y2;Be.mergeConfig=Gr;Be.AxiosHeaders=fn;Be.formToJSON=e=>Jg(L.isHTMLForm(e)?new FormData(e):e);Be.getAdapter=tv.getAdapter;Be.HttpStatusCode=K2;Be.default=Be;const G2=Be;function fr(e){"@babel/helpers - typeof";return fr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fr(e)}function X2(e,t){if(fr(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(fr(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function iv(e){var t=X2(e,"string");return fr(t)==="symbol"?t:String(t)}function Si(e,t,n){return t=iv(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function rp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ie(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?rp(Object(n),!0).forEach(function(r){Si(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function q2(e){if(Array.isArray(e))return e}function J2(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,s,l=[],a=!0,u=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);a=!0);}catch(f){u=!0,i=f}finally{try{if(!a&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(u)throw i}}return l}}function Du(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ov(e,t){if(e){if(typeof e=="string")return Du(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Du(e,t)}}function Z2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pn(e,t){return q2(e)||J2(e,t)||ov(e,t)||Z2()}function ek(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function xn(e,t){if(e==null)return{};var n=ek(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var tk=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function nk(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,o=e.defaultValue,s=o===void 0?null:o,l=e.inputValue,a=e.menuIsOpen,u=e.onChange,f=e.onInputChange,d=e.onMenuClose,m=e.onMenuOpen,y=e.value,v=xn(e,tk),g=I.useState(l!==void 0?l:n),w=pn(g,2),h=w[0],p=w[1],x=I.useState(a!==void 0?a:i),b=pn(x,2),C=b[0],E=b[1],k=I.useState(y!==void 0?y:s),j=pn(k,2),T=j[0],M=j[1],D=I.useCallback(function(A,H){typeof u=="function"&&u(A,H),M(A)},[u]),R=I.useCallback(function(A,H){var W;typeof f=="function"&&(W=f(A,H)),p(W!==void 0?W:A)},[f]),F=I.useCallback(function(){typeof m=="function"&&m(),E(!0)},[m]),G=I.useCallback(function(){typeof d=="function"&&d(),E(!1)},[d]),q=l!==void 0?l:h,Y=a!==void 0?a:C,pe=y!==void 0?y:T;return ie(ie({},v),{},{inputValue:q,menuIsOpen:Y,onChange:D,onInputChange:R,onMenuClose:G,onMenuOpen:F,value:pe})}function rk(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ip(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,iv(r.key),r)}}function ik(e,t,n){return t&&ip(e.prototype,t),n&&ip(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Fu(e,t){return Fu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Fu(e,t)}function ok(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Fu(e,t)}function zs(e){return zs=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},zs(e)}function sk(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ak(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function lk(e,t){if(t&&(fr(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ak(e)}function uk(e){var t=sk();return function(){var r=zs(e),i;if(t){var o=zs(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return lk(this,i)}}function ck(e){if(Array.isArray(e))return Du(e)}function dk(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function fk(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jc(e){return ck(e)||dk(e)||ov(e)||fk()}function pk(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const hk=Math.min,mk=Math.max,$s=Math.round,Vo=Math.floor,Us=e=>({x:e,y:e});function gk(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function sv(e){return lv(e)?(e.nodeName||"").toLowerCase():"#document"}function Bt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function av(e){var t;return(t=(lv(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function lv(e){return e instanceof Node||e instanceof Bt(e).Node}function Nu(e){return e instanceof Element||e instanceof Bt(e).Element}function Zc(e){return e instanceof HTMLElement||e instanceof Bt(e).HTMLElement}function op(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Bt(e).ShadowRoot}function uv(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=ed(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(i)}function vk(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function yk(e){return["html","body","#document"].includes(sv(e))}function ed(e){return Bt(e).getComputedStyle(e)}function xk(e){if(sv(e)==="html")return e;const t=e.assignedSlot||e.parentNode||op(e)&&e.host||av(e);return op(t)?t.host:t}function cv(e){const t=xk(e);return yk(t)?e.ownerDocument?e.ownerDocument.body:e.body:Zc(t)&&uv(t)?t:cv(t)}function Bs(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=cv(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),s=Bt(i);return o?t.concat(s,s.visualViewport||[],uv(i)?i:[],s.frameElement&&n?Bs(s.frameElement):[]):t.concat(i,Bs(i,[],n))}function wk(e){const t=ed(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=Zc(e),o=i?e.offsetWidth:n,s=i?e.offsetHeight:r,l=$s(n)!==o||$s(r)!==s;return l&&(n=o,r=s),{width:n,height:r,$:l}}function td(e){return Nu(e)?e:e.contextElement}function Sl(e){const t=td(e);if(!Zc(t))return Us(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=wk(t);let s=(o?$s(n.width):n.width)/r,l=(o?$s(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const bk=Us(0);function Sk(e){const t=Bt(e);return!vk()||!t.visualViewport?bk:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function kk(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Bt(e)?!1:t}function sp(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=td(e);let s=Us(1);t&&(r?Nu(r)&&(s=Sl(r)):s=Sl(e));const l=kk(o,n,r)?Sk(o):Us(0);let a=(i.left+l.x)/s.x,u=(i.top+l.y)/s.y,f=i.width/s.x,d=i.height/s.y;if(o){const m=Bt(o),y=r&&Nu(r)?Bt(r):r;let v=m.frameElement;for(;v&&r&&y!==m;){const g=Sl(v),w=v.getBoundingClientRect(),h=ed(v),p=w.left+(v.clientLeft+parseFloat(h.paddingLeft))*g.x,x=w.top+(v.clientTop+parseFloat(h.paddingTop))*g.y;a*=g.x,u*=g.y,f*=g.x,d*=g.y,a+=p,u+=x,v=Bt(v).frameElement}}return gk({width:f,height:d,x:a,y:u})}function Ck(e,t){let n=null,r;const i=av(e);function o(){clearTimeout(r),n&&n.disconnect(),n=null}function s(l,a){l===void 0&&(l=!1),a===void 0&&(a=1),o();const{left:u,top:f,width:d,height:m}=e.getBoundingClientRect();if(l||t(),!d||!m)return;const y=Vo(f),v=Vo(i.clientWidth-(u+d)),g=Vo(i.clientHeight-(f+m)),w=Vo(u),p={rootMargin:-y+"px "+-v+"px "+-g+"px "+-w+"px",threshold:mk(0,hk(1,a))||1};let x=!0;function b(C){const E=C[0].intersectionRatio;if(E!==a){if(!x)return s();E?s(!1,E):r=setTimeout(()=>{s(!1,1e-7)},100)}x=!1}try{n=new IntersectionObserver(b,{...p,root:i.ownerDocument})}catch{n=new IntersectionObserver(b,p)}n.observe(e)}return s(!0),o}function Ek(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=r,u=td(e),f=i||o?[...u?Bs(u):[],...Bs(t)]:[];f.forEach(h=>{i&&h.addEventListener("scroll",n,{passive:!0}),o&&h.addEventListener("resize",n)});const d=u&&l?Ck(u,n):null;let m=-1,y=null;s&&(y=new ResizeObserver(h=>{let[p]=h;p&&p.target===u&&y&&(y.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{y&&y.observe(t)})),n()}),u&&!a&&y.observe(u),y.observe(t));let v,g=a?sp(e):null;a&&w();function w(){const h=sp(e);g&&(h.x!==g.x||h.y!==g.y||h.width!==g.width||h.height!==g.height)&&n(),g=h,v=requestAnimationFrame(w)}return n(),()=>{f.forEach(h=>{i&&h.removeEventListener("scroll",n),o&&h.removeEventListener("resize",n)}),d&&d(),y&&y.disconnect(),y=null,a&&cancelAnimationFrame(v)}}var Vu=I.useLayoutEffect,jk=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Hs=function(){};function Ok(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function _k(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=[].concat(r);if(t&&e)for(var s in t)t.hasOwnProperty(s)&&t[s]&&o.push("".concat(Ok(e,s)));return o.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var ap=function(t){return Fk(t)?t.filter(Boolean):fr(t)==="object"&&t!==null?[t]:[]},dv=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=xn(t,jk);return ie({},n)},Ne=function(t,n,r){var i=t.cx,o=t.getStyles,s=t.getClassNames,l=t.className;return{css:o(n,t),className:i(r??{},s(n,t),l)}};function La(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function Pk(e){return La(e)?window.innerHeight:e.clientHeight}function fv(e){return La(e)?window.pageYOffset:e.scrollTop}function Ws(e,t){if(La(e)){window.scrollTo(0,t);return}e.scrollTop=t}function Tk(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function Mk(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function zo(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Hs,i=fv(e),o=t-i,s=10,l=0;function a(){l+=s;var u=Mk(l,i,o,n);Ws(e,u),l<n?window.requestAnimationFrame(a):r(e)}a()}function lp(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?Ws(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&Ws(e,Math.max(t.offsetTop-i,0))}function Rk(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function up(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function Ik(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var pv=!1,Lk={get passive(){return pv=!0}},$o=typeof window<"u"?window:{};$o.addEventListener&&$o.removeEventListener&&($o.addEventListener("p",Hs,Lk),$o.removeEventListener("p",Hs,!1));var Ak=pv;function Dk(e){return e!=null}function Fk(e){return Array.isArray(e)}function Uo(e,t,n){return e?t:n}var Nk=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=Object.entries(t).filter(function(s){var l=pn(s,1),a=l[0];return!r.includes(a)});return o.reduce(function(s,l){var a=pn(l,2),u=a[0],f=a[1];return s[u]=f,s},{})},Vk=["children","innerProps"],zk=["children","innerProps"];function $k(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,o=e.shouldScroll,s=e.isFixedPosition,l=e.controlHeight,a=Tk(n),u={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return u;var f=a.getBoundingClientRect(),d=f.height,m=n.getBoundingClientRect(),y=m.bottom,v=m.height,g=m.top,w=n.offsetParent.getBoundingClientRect(),h=w.top,p=s?window.innerHeight:Pk(a),x=fv(a),b=parseInt(getComputedStyle(n).marginBottom,10),C=parseInt(getComputedStyle(n).marginTop,10),E=h-C,k=p-g,j=E+x,T=d-x-g,M=y-p+x+b,D=x+g-C,R=160;switch(i){case"auto":case"bottom":if(k>=v)return{placement:"bottom",maxHeight:t};if(T>=v&&!s)return o&&zo(a,M,R),{placement:"bottom",maxHeight:t};if(!s&&T>=r||s&&k>=r){o&&zo(a,M,R);var F=s?k-b:T-b;return{placement:"bottom",maxHeight:F}}if(i==="auto"||s){var G=t,q=s?E:j;return q>=r&&(G=Math.min(q-b-l,t)),{placement:"top",maxHeight:G}}if(i==="bottom")return o&&Ws(a,M),{placement:"bottom",maxHeight:t};break;case"top":if(E>=v)return{placement:"top",maxHeight:t};if(j>=v&&!s)return o&&zo(a,D,R),{placement:"top",maxHeight:t};if(!s&&j>=r||s&&E>=r){var Y=t;return(!s&&j>=r||s&&E>=r)&&(Y=s?E-C:j-C),o&&zo(a,D,R),{placement:"top",maxHeight:Y}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return u}function Uk(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var hv=function(t){return t==="auto"?"bottom":t},Bk=function(t,n){var r,i=t.placement,o=t.theme,s=o.borderRadius,l=o.spacing,a=o.colors;return ie((r={label:"menu"},Si(r,Uk(i),"100%"),Si(r,"position","absolute"),Si(r,"width","100%"),Si(r,"zIndex",1),r),n?{}:{backgroundColor:a.neutral0,borderRadius:s,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},mv=I.createContext(null),Hk=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,o=t.menuPlacement,s=t.menuPosition,l=t.menuShouldScrollIntoView,a=t.theme,u=I.useContext(mv)||{},f=u.setPortalPlacement,d=I.useRef(null),m=I.useState(i),y=pn(m,2),v=y[0],g=y[1],w=I.useState(null),h=pn(w,2),p=h[0],x=h[1],b=a.spacing.controlHeight;return Vu(function(){var C=d.current;if(C){var E=s==="fixed",k=l&&!E,j=$k({maxHeight:i,menuEl:C,minHeight:r,placement:o,shouldScroll:k,isFixedPosition:E,controlHeight:b});g(j.maxHeight),x(j.placement),f==null||f(j.placement)}},[i,o,s,l,r,f,b]),n({ref:d,placerProps:ie(ie({},t),{},{placement:p||hv(o),maxHeight:v})})},Wk=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return re("div",oe({},Ne(t,"menu",{menu:!0}),{ref:r},i),n)},Qk=Wk,Yk=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return ie({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},Kk=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,o=t.isMulti;return re("div",oe({},Ne(t,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:i},r),n)},gv=function(t,n){var r=t.theme,i=r.spacing.baseUnit,o=r.colors;return ie({textAlign:"center"},n?{}:{color:o.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},Gk=gv,Xk=gv,qk=function(t){var n=t.children,r=n===void 0?"No options":n,i=t.innerProps,o=xn(t,Vk);return re("div",oe({},Ne(ie(ie({},o),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},Jk=function(t){var n=t.children,r=n===void 0?"Loading...":n,i=t.innerProps,o=xn(t,zk);return re("div",oe({},Ne(ie(ie({},o),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},Zk=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},eC=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,o=t.innerProps,s=t.menuPlacement,l=t.menuPosition,a=I.useRef(null),u=I.useRef(null),f=I.useState(hv(s)),d=pn(f,2),m=d[0],y=d[1],v=I.useMemo(function(){return{setPortalPlacement:y}},[]),g=I.useState(null),w=pn(g,2),h=w[0],p=w[1],x=I.useCallback(function(){if(i){var k=Rk(i),j=l==="fixed"?0:window.pageYOffset,T=k[m]+j;(T!==(h==null?void 0:h.offset)||k.left!==(h==null?void 0:h.rect.left)||k.width!==(h==null?void 0:h.rect.width))&&p({offset:T,rect:k})}},[i,l,m,h==null?void 0:h.offset,h==null?void 0:h.rect.left,h==null?void 0:h.rect.width]);Vu(function(){x()},[x]);var b=I.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),i&&a.current&&(u.current=Ek(i,a.current,x,{elementResize:"ResizeObserver"in window}))},[i,x]);Vu(function(){b()},[b]);var C=I.useCallback(function(k){a.current=k,b()},[b]);if(!n&&l!=="fixed"||!h)return null;var E=re("div",oe({ref:C},Ne(ie(ie({},t),{},{offset:h.offset,position:l,rect:h.rect}),"menuPortal",{"menu-portal":!0}),o),r);return re(mv.Provider,{value:v},n?ha.createPortal(E,n):E)},tC=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},nC=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,o=t.isRtl;return re("div",oe({},Ne(t,"container",{"--is-disabled":i,"--is-rtl":o}),r),n)},rC=function(t,n){var r=t.theme.spacing,i=t.isMulti,o=t.hasValue,s=t.selectProps.controlShouldRenderValue;return ie({alignItems:"center",display:i&&o&&s?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},iC=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,o=t.hasValue;return re("div",oe({},Ne(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":o}),r),n)},oC=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},sC=function(t){var n=t.children,r=t.innerProps;return re("div",oe({},Ne(t,"indicatorsContainer",{indicators:!0}),r),n)},cp,aC=["size"],lC=["innerProps","isRtl","size"],uC={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},vv=function(t){var n=t.size,r=xn(t,aC);return re("svg",oe({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:uC},r))},nd=function(t){return re(vv,oe({size:20},t),re("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},yv=function(t){return re(vv,oe({size:20},t),re("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},xv=function(t,n){var r=t.isFocused,i=t.theme,o=i.spacing.baseUnit,s=i.colors;return ie({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?s.neutral60:s.neutral20,padding:o*2,":hover":{color:r?s.neutral80:s.neutral40}})},cC=xv,dC=function(t){var n=t.children,r=t.innerProps;return re("div",oe({},Ne(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||re(yv,null))},fC=xv,pC=function(t){var n=t.children,r=t.innerProps;return re("div",oe({},Ne(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||re(nd,null))},hC=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing.baseUnit,s=i.colors;return ie({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?s.neutral10:s.neutral20,marginBottom:o*2,marginTop:o*2})},mC=function(t){var n=t.innerProps;return re("span",oe({},n,Ne(t,"indicatorSeparator",{"indicator-separator":!0})))},gC=R1(cp||(cp=pk([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),vC=function(t,n){var r=t.isFocused,i=t.size,o=t.theme,s=o.colors,l=o.spacing.baseUnit;return ie({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?s.neutral60:s.neutral20,padding:l*2})},kl=function(t){var n=t.delay,r=t.offset;return re("span",{css:Hc({animation:"".concat(gC," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},yC=function(t){var n=t.innerProps,r=t.isRtl,i=t.size,o=i===void 0?4:i,s=xn(t,lC);return re("div",oe({},Ne(ie(ie({},s),{},{innerProps:n,isRtl:r,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),re(kl,{delay:0,offset:r}),re(kl,{delay:160,offset:!0}),re(kl,{delay:320,offset:!r}))},xC=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.theme,s=o.colors,l=o.borderRadius,a=o.spacing;return ie({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:a.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?s.neutral5:s.neutral0,borderColor:r?s.neutral10:i?s.primary:s.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(s.primary):void 0,"&:hover":{borderColor:i?s.primary:s.neutral30}})},wC=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.innerRef,s=t.innerProps,l=t.menuIsOpen;return re("div",oe({ref:o},Ne(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":l}),s,{"aria-disabled":r||void 0}),n)},bC=wC,SC=["data"],kC=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},CC=function(t){var n=t.children,r=t.cx,i=t.getStyles,o=t.getClassNames,s=t.Heading,l=t.headingProps,a=t.innerProps,u=t.label,f=t.theme,d=t.selectProps;return re("div",oe({},Ne(t,"group",{group:!0}),a),re(s,oe({},l,{selectProps:d,theme:f,getStyles:i,getClassNames:o,cx:r}),u),re("div",null,n))},EC=function(t,n){var r=t.theme,i=r.colors,o=r.spacing;return ie({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},jC=function(t){var n=dv(t);n.data;var r=xn(n,SC);return re("div",oe({},Ne(t,"groupHeading",{"group-heading":!0}),r))},OC=CC,_C=["innerRef","isDisabled","isHidden","inputClassName"],PC=function(t,n){var r=t.isDisabled,i=t.value,o=t.theme,s=o.spacing,l=o.colors;return ie(ie({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},TC),n?{}:{margin:s.baseUnit/2,paddingBottom:s.baseUnit/2,paddingTop:s.baseUnit/2,color:l.neutral80})},wv={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},TC={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":ie({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},wv)},MC=function(t){return ie({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},wv)},RC=function(t){var n=t.cx,r=t.value,i=dv(t),o=i.innerRef,s=i.isDisabled,l=i.isHidden,a=i.inputClassName,u=xn(i,_C);return re("div",oe({},Ne(t,"input",{"input-container":!0}),{"data-value":r||""}),re("input",oe({className:n({input:!0},a),ref:o,style:MC(l),disabled:s},u)))},IC=RC,LC=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,s=r.colors;return ie({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:s.neutral10,borderRadius:o/2,margin:i.baseUnit/2})},AC=function(t,n){var r=t.theme,i=r.borderRadius,o=r.colors,s=t.cropWithEllipsis;return ie({overflow:"hidden",textOverflow:s||s===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},DC=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,s=r.colors,l=t.isFocused;return ie({alignItems:"center",display:"flex"},n?{}:{borderRadius:o/2,backgroundColor:l?s.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:s.dangerLight,color:s.danger}})},bv=function(t){var n=t.children,r=t.innerProps;return re("div",r,n)},FC=bv,NC=bv;function VC(e){var t=e.children,n=e.innerProps;return re("div",oe({role:"button"},n),t||re(nd,{size:14}))}var zC=function(t){var n=t.children,r=t.components,i=t.data,o=t.innerProps,s=t.isDisabled,l=t.removeProps,a=t.selectProps,u=r.Container,f=r.Label,d=r.Remove;return re(u,{data:i,innerProps:ie(ie({},Ne(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":s})),o),selectProps:a},re(f,{data:i,innerProps:ie({},Ne(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:a},n),re(d,{data:i,innerProps:ie(ie({},Ne(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},l),selectProps:a}))},$C=zC,UC=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.isSelected,s=t.theme,l=s.spacing,a=s.colors;return ie({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:o?a.primary:i?a.primary25:"transparent",color:r?a.neutral20:o?a.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?a.primary:a.primary50}})},BC=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.isSelected,s=t.innerRef,l=t.innerProps;return re("div",oe({},Ne(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":o}),{ref:s,"aria-disabled":r},l),n)},HC=BC,WC=function(t,n){var r=t.theme,i=r.spacing,o=r.colors;return ie({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:o.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},QC=function(t){var n=t.children,r=t.innerProps;return re("div",oe({},Ne(t,"placeholder",{placeholder:!0}),r),n)},YC=QC,KC=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing,s=i.colors;return ie({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?s.neutral40:s.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},GC=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return re("div",oe({},Ne(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},XC=GC,qC={ClearIndicator:pC,Control:bC,DropdownIndicator:dC,DownChevron:yv,CrossIcon:nd,Group:OC,GroupHeading:jC,IndicatorsContainer:sC,IndicatorSeparator:mC,Input:IC,LoadingIndicator:yC,Menu:Qk,MenuList:Kk,MenuPortal:eC,LoadingMessage:Jk,NoOptionsMessage:qk,MultiValue:$C,MultiValueContainer:FC,MultiValueLabel:NC,MultiValueRemove:VC,Option:HC,Placeholder:YC,SelectContainer:nC,SingleValue:XC,ValueContainer:iC},JC=function(t){return ie(ie({},qC),t.components)},dp=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function ZC(e,t){return!!(e===t||dp(e)&&dp(t))}function eE(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!ZC(e[n],t[n]))return!1;return!0}function tE(e,t){t===void 0&&(t=eE);var n=null;function r(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var s=e.apply(this,i);return n={lastResult:s,lastArgs:i,lastThis:this},s}return r.clear=function(){n=null},r}var nE={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},rE=function(t){return re("span",oe({css:nE},t))},fp=rE,iE={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.tabSelectsValue,o=t.context,s=t.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return s?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,o=t.labels,s=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return s?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,o=t.label,s=o===void 0?"":o,l=t.selectValue,a=t.isDisabled,u=t.isSelected,f=t.isAppleDevice,d=function(g,w){return g&&g.length?"".concat(g.indexOf(w)+1," of ").concat(g.length):""};if(n==="value"&&l)return"value ".concat(s," focused, ").concat(d(l,r),".");if(n==="menu"&&f){var m=a?" disabled":"",y="".concat(u?" selected":"").concat(m);return"".concat(s).concat(y,", ").concat(d(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},oE=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,o=t.focusableOptions,s=t.isFocused,l=t.selectValue,a=t.selectProps,u=t.id,f=t.isAppleDevice,d=a.ariaLiveMessages,m=a.getOptionLabel,y=a.inputValue,v=a.isMulti,g=a.isOptionDisabled,w=a.isSearchable,h=a.menuIsOpen,p=a.options,x=a.screenReaderStatus,b=a.tabSelectsValue,C=a.isLoading,E=a["aria-label"],k=a["aria-live"],j=I.useMemo(function(){return ie(ie({},iE),d||{})},[d]),T=I.useMemo(function(){var q="";if(n&&j.onChange){var Y=n.option,pe=n.options,A=n.removedValue,H=n.removedValues,W=n.value,J=function(Te){return Array.isArray(Te)?null:Te},K=A||Y||J(W),me=K?m(K):"",fe=pe||H||void 0,be=fe?fe.map(m):[],de=ie({isDisabled:K&&g(K,l),label:me,labels:be},n);q=j.onChange(de)}return q},[n,j,g,l,m]),M=I.useMemo(function(){var q="",Y=r||i,pe=!!(r&&l&&l.includes(r));if(Y&&j.onFocus){var A={focused:Y,label:m(Y),isDisabled:g(Y,l),isSelected:pe,options:o,context:Y===r?"menu":"value",selectValue:l,isAppleDevice:f};q=j.onFocus(A)}return q},[r,i,m,g,j,o,l,f]),D=I.useMemo(function(){var q="";if(h&&p.length&&!C&&j.onFilter){var Y=x({count:o.length});q=j.onFilter({inputValue:y,resultsMessage:Y})}return q},[o,y,h,j,p,x,C]),R=(n==null?void 0:n.action)==="initial-input-focus",F=I.useMemo(function(){var q="";if(j.guidance){var Y=i?"value":h?"menu":"input";q=j.guidance({"aria-label":E,context:Y,isDisabled:r&&g(r,l),isMulti:v,isSearchable:w,tabSelectsValue:b,isInitialFocus:R})}return q},[E,r,i,v,g,w,h,j,l,b,R]),G=re(I.Fragment,null,re("span",{id:"aria-selection"},T),re("span",{id:"aria-focused"},M),re("span",{id:"aria-results"},D),re("span",{id:"aria-guidance"},F));return re(I.Fragment,null,re(fp,{id:u},R&&G),re(fp,{"aria-live":k,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},s&&!R&&G))},sE=oE,zu=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],aE=new RegExp("["+zu.map(function(e){return e.letters}).join("")+"]","g"),Sv={};for(var Cl=0;Cl<zu.length;Cl++)for(var El=zu[Cl],jl=0;jl<El.letters.length;jl++)Sv[El.letters[jl]]=El.base;var kv=function(t){return t.replace(aE,function(n){return Sv[n]})},lE=tE(kv),pp=function(t){return t.replace(/^\s+|\s+$/g,"")},uE=function(t){return"".concat(t.label," ").concat(t.value)},cE=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=ie({ignoreCase:!0,ignoreAccents:!0,stringify:uE,trim:!0,matchFrom:"any"},t),o=i.ignoreCase,s=i.ignoreAccents,l=i.stringify,a=i.trim,u=i.matchFrom,f=a?pp(r):r,d=a?pp(l(n)):l(n);return o&&(f=f.toLowerCase(),d=d.toLowerCase()),s&&(f=lE(f),d=kv(d)),u==="start"?d.substr(0,f.length)===f:d.indexOf(f)>-1}},dE=["innerRef"];function fE(e){var t=e.innerRef,n=xn(e,dE),r=Nk(n,"onExited","in","enter","exit","appear");return re("input",oe({ref:t},r,{css:Hc({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var pE=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function hE(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,o=e.onTopLeave,s=I.useRef(!1),l=I.useRef(!1),a=I.useRef(0),u=I.useRef(null),f=I.useCallback(function(w,h){if(u.current!==null){var p=u.current,x=p.scrollTop,b=p.scrollHeight,C=p.clientHeight,E=u.current,k=h>0,j=b-C-x,T=!1;j>h&&s.current&&(r&&r(w),s.current=!1),k&&l.current&&(o&&o(w),l.current=!1),k&&h>j?(n&&!s.current&&n(w),E.scrollTop=b,T=!0,s.current=!0):!k&&-h>x&&(i&&!l.current&&i(w),E.scrollTop=0,T=!0,l.current=!0),T&&pE(w)}},[n,r,i,o]),d=I.useCallback(function(w){f(w,w.deltaY)},[f]),m=I.useCallback(function(w){a.current=w.changedTouches[0].clientY},[]),y=I.useCallback(function(w){var h=a.current-w.changedTouches[0].clientY;f(w,h)},[f]),v=I.useCallback(function(w){if(w){var h=Ak?{passive:!1}:!1;w.addEventListener("wheel",d,h),w.addEventListener("touchstart",m,h),w.addEventListener("touchmove",y,h)}},[y,m,d]),g=I.useCallback(function(w){w&&(w.removeEventListener("wheel",d,!1),w.removeEventListener("touchstart",m,!1),w.removeEventListener("touchmove",y,!1))},[y,m,d]);return I.useEffect(function(){if(t){var w=u.current;return v(w),function(){g(w)}}},[t,v,g]),function(w){u.current=w}}var hp=["boxSizing","height","overflow","paddingRight","position"],mp={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function gp(e){e.preventDefault()}function vp(e){e.stopPropagation()}function yp(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function xp(){return"ontouchstart"in window||navigator.maxTouchPoints}var wp=!!(typeof window<"u"&&window.document&&window.document.createElement),mi=0,xr={capture:!1,passive:!1};function mE(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=I.useRef({}),o=I.useRef(null),s=I.useCallback(function(a){if(wp){var u=document.body,f=u&&u.style;if(r&&hp.forEach(function(v){var g=f&&f[v];i.current[v]=g}),r&&mi<1){var d=parseInt(i.current.paddingRight,10)||0,m=document.body?document.body.clientWidth:0,y=window.innerWidth-m+d||0;Object.keys(mp).forEach(function(v){var g=mp[v];f&&(f[v]=g)}),f&&(f.paddingRight="".concat(y,"px"))}u&&xp()&&(u.addEventListener("touchmove",gp,xr),a&&(a.addEventListener("touchstart",yp,xr),a.addEventListener("touchmove",vp,xr))),mi+=1}},[r]),l=I.useCallback(function(a){if(wp){var u=document.body,f=u&&u.style;mi=Math.max(mi-1,0),r&&mi<1&&hp.forEach(function(d){var m=i.current[d];f&&(f[d]=m)}),u&&xp()&&(u.removeEventListener("touchmove",gp,xr),a&&(a.removeEventListener("touchstart",yp,xr),a.removeEventListener("touchmove",vp,xr)))}},[r]);return I.useEffect(function(){if(t){var a=o.current;return s(a),function(){l(a)}}},[t,s,l]),function(a){o.current=a}}var gE=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},vE={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function yE(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,o=e.onBottomArrive,s=e.onBottomLeave,l=e.onTopArrive,a=e.onTopLeave,u=hE({isEnabled:i,onBottomArrive:o,onBottomLeave:s,onTopArrive:l,onTopLeave:a}),f=mE({isEnabled:n}),d=function(y){u(y),f(y)};return re(I.Fragment,null,n&&re("div",{onClick:gE,css:vE}),t(d))}var xE={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},wE=function(t){var n=t.name,r=t.onFocus;return re("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:xE,value:"",onChange:function(){}})},bE=wE;function rd(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function SE(){return rd(/^iPhone/i)}function Cv(){return rd(/^Mac/i)}function kE(){return rd(/^iPad/i)||Cv()&&navigator.maxTouchPoints>1}function CE(){return SE()||kE()}function EE(){return Cv()||CE()}var jE=function(t){return t.label},OE=function(t){return t.label},_E=function(t){return t.value},PE=function(t){return!!t.isDisabled},TE={clearIndicator:fC,container:tC,control:xC,dropdownIndicator:cC,group:kC,groupHeading:EC,indicatorsContainer:oC,indicatorSeparator:hC,input:PC,loadingIndicator:vC,loadingMessage:Xk,menu:Bk,menuList:Yk,menuPortal:Zk,multiValue:LC,multiValueLabel:AC,multiValueRemove:DC,noOptionsMessage:Gk,option:UC,placeholder:WC,singleValue:KC,valueContainer:rC},ME={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},RE=4,Ev=4,IE=38,LE=Ev*2,AE={baseUnit:Ev,controlHeight:IE,menuGutter:LE},Ol={borderRadius:RE,colors:ME,spacing:AE},DE={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:up(),captureMenuScroll:!up(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:cE(),formatGroupLabel:jE,getOptionLabel:OE,getOptionValue:_E,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:PE,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!Ik(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function bp(e,t,n,r){var i=_v(e,t,n),o=Pv(e,t,n),s=Ov(e,t),l=Qs(e,t);return{type:"option",data:t,isDisabled:i,isSelected:o,label:s,value:l,index:r}}function us(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(s,l){return bp(e,s,t,l)}).filter(function(s){return kp(e,s)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var o=bp(e,n,t,r);return kp(e,o)?o:void 0}).filter(Dk)}function jv(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,Jc(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function Sp(e,t){return e.reduce(function(n,r){return r.type==="group"?n.push.apply(n,Jc(r.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),n},[])}function FE(e,t){return jv(us(e,t))}function kp(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,o=t.isSelected,s=t.label,l=t.value;return(!Mv(e)||!o)&&Tv(e,{label:s,value:l,data:i},r)}function NE(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var o=t.indexOf(n);if(o>-1)return n;if(i<t.length)return t[i]}return null}function VE(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var _l=function(t,n){var r,i=(r=t.find(function(o){return o.data===n}))===null||r===void 0?void 0:r.id;return i||null},Ov=function(t,n){return t.getOptionLabel(n)},Qs=function(t,n){return t.getOptionValue(n)};function _v(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function Pv(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=Qs(e,t);return n.some(function(i){return Qs(e,i)===r})}function Tv(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var Mv=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},zE=1,Rv=function(e){ok(n,e);var t=uk(n);function n(r){var i;if(rk(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.isAppleDevice=EE(),i.controlRef=null,i.getControlRef=function(a){i.controlRef=a},i.focusedOptionRef=null,i.getFocusedOptionRef=function(a){i.focusedOptionRef=a},i.menuListRef=null,i.getMenuListRef=function(a){i.menuListRef=a},i.inputRef=null,i.getInputRef=function(a){i.inputRef=a},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(a,u){var f=i.props,d=f.onChange,m=f.name;u.name=m,i.ariaOnChange(a,u),d(a,u)},i.setValue=function(a,u,f){var d=i.props,m=d.closeMenuOnSelect,y=d.isMulti,v=d.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:v}),m&&(i.setState({inputIsHiddenAfterUpdate:!y}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(a,{action:u,option:f})},i.selectOption=function(a){var u=i.props,f=u.blurInputOnSelect,d=u.isMulti,m=u.name,y=i.state.selectValue,v=d&&i.isOptionSelected(a,y),g=i.isOptionDisabled(a,y);if(v){var w=i.getOptionValue(a);i.setValue(y.filter(function(h){return i.getOptionValue(h)!==w}),"deselect-option",a)}else if(!g)d?i.setValue([].concat(Jc(y),[a]),"select-option",a):i.setValue(a,"select-option");else{i.ariaOnChange(a,{action:"select-option",option:a,name:m});return}f&&i.blurInput()},i.removeValue=function(a){var u=i.props.isMulti,f=i.state.selectValue,d=i.getOptionValue(a),m=f.filter(function(v){return i.getOptionValue(v)!==d}),y=Uo(u,m,m[0]||null);i.onChange(y,{action:"remove-value",removedValue:a}),i.focusInput()},i.clearValue=function(){var a=i.state.selectValue;i.onChange(Uo(i.props.isMulti,[],null),{action:"clear",removedValues:a})},i.popValue=function(){var a=i.props.isMulti,u=i.state.selectValue,f=u[u.length-1],d=u.slice(0,u.length-1),m=Uo(a,d,d[0]||null);i.onChange(m,{action:"pop-value",removedValue:f})},i.getFocusedOptionId=function(a){return _l(i.state.focusableOptionsWithIds,a)},i.getFocusableOptionsWithIds=function(){return Sp(us(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var a=arguments.length,u=new Array(a),f=0;f<a;f++)u[f]=arguments[f];return _k.apply(void 0,[i.props.classNamePrefix].concat(u))},i.getOptionLabel=function(a){return Ov(i.props,a)},i.getOptionValue=function(a){return Qs(i.props,a)},i.getStyles=function(a,u){var f=i.props.unstyled,d=TE[a](u,f);d.boxSizing="border-box";var m=i.props.styles[a];return m?m(d,u):d},i.getClassNames=function(a,u){var f,d;return(f=(d=i.props.classNames)[a])===null||f===void 0?void 0:f.call(d,u)},i.getElementId=function(a){return"".concat(i.state.instancePrefix,"-").concat(a)},i.getComponents=function(){return JC(i.props)},i.buildCategorizedOptions=function(){return us(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return jv(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(a,u){i.setState({ariaSelection:ie({value:a},u)})},i.onMenuMouseDown=function(a){a.button===0&&(a.stopPropagation(),a.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(a){i.blockOptionHover=!1},i.onControlMouseDown=function(a){if(!a.defaultPrevented){var u=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?a.target.tagName!=="INPUT"&&a.target.tagName!=="TEXTAREA"&&i.onMenuClose():u&&i.openMenu("first"):(u&&(i.openAfterFocus=!0),i.focusInput()),a.target.tagName!=="INPUT"&&a.target.tagName!=="TEXTAREA"&&a.preventDefault()}},i.onDropdownIndicatorMouseDown=function(a){if(!(a&&a.type==="mousedown"&&a.button!==0)&&!i.props.isDisabled){var u=i.props,f=u.isMulti,d=u.menuIsOpen;i.focusInput(),d?(i.setState({inputIsHiddenAfterUpdate:!f}),i.onMenuClose()):i.openMenu("first"),a.preventDefault()}},i.onClearIndicatorMouseDown=function(a){a&&a.type==="mousedown"&&a.button!==0||(i.clearValue(),a.preventDefault(),i.openAfterFocus=!1,a.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(a){typeof i.props.closeMenuOnScroll=="boolean"?a.target instanceof HTMLElement&&La(a.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(a)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(a){var u=a.touches,f=u&&u.item(0);f&&(i.initialTouchX=f.clientX,i.initialTouchY=f.clientY,i.userIsDragging=!1)},i.onTouchMove=function(a){var u=a.touches,f=u&&u.item(0);if(f){var d=Math.abs(f.clientX-i.initialTouchX),m=Math.abs(f.clientY-i.initialTouchY),y=5;i.userIsDragging=d>y||m>y}},i.onTouchEnd=function(a){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(a.target)&&i.menuListRef&&!i.menuListRef.contains(a.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(a){i.userIsDragging||i.onControlMouseDown(a)},i.onClearIndicatorTouchEnd=function(a){i.userIsDragging||i.onClearIndicatorMouseDown(a)},i.onDropdownIndicatorTouchEnd=function(a){i.userIsDragging||i.onDropdownIndicatorMouseDown(a)},i.handleInputChange=function(a){var u=i.props.inputValue,f=a.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(f,{action:"input-change",prevInputValue:u}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(a){i.props.onFocus&&i.props.onFocus(a),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(a){var u=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(a),i.onInputChange("",{action:"input-blur",prevInputValue:u}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(a){if(!(i.blockOptionHover||i.state.focusedOption===a)){var u=i.getFocusableOptions(),f=u.indexOf(a);i.setState({focusedOption:a,focusedOptionId:f>-1?i.getFocusedOptionId(a):null})}},i.shouldHideSelectedOptions=function(){return Mv(i.props)},i.onValueInputFocus=function(a){a.preventDefault(),a.stopPropagation(),i.focus()},i.onKeyDown=function(a){var u=i.props,f=u.isMulti,d=u.backspaceRemovesValue,m=u.escapeClearsValue,y=u.inputValue,v=u.isClearable,g=u.isDisabled,w=u.menuIsOpen,h=u.onKeyDown,p=u.tabSelectsValue,x=u.openMenuOnFocus,b=i.state,C=b.focusedOption,E=b.focusedValue,k=b.selectValue;if(!g&&!(typeof h=="function"&&(h(a),a.defaultPrevented))){switch(i.blockOptionHover=!0,a.key){case"ArrowLeft":if(!f||y)return;i.focusValue("previous");break;case"ArrowRight":if(!f||y)return;i.focusValue("next");break;case"Delete":case"Backspace":if(y)return;if(E)i.removeValue(E);else{if(!d)return;f?i.popValue():v&&i.clearValue()}break;case"Tab":if(i.isComposing||a.shiftKey||!w||!p||!C||x&&i.isOptionSelected(C,k))return;i.selectOption(C);break;case"Enter":if(a.keyCode===229)break;if(w){if(!C||i.isComposing)return;i.selectOption(C);break}return;case"Escape":w?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:y}),i.onMenuClose()):v&&m&&i.clearValue();break;case" ":if(y)return;if(!w){i.openMenu("first");break}if(!C)return;i.selectOption(C);break;case"ArrowUp":w?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":w?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!w)return;i.focusOption("pageup");break;case"PageDown":if(!w)return;i.focusOption("pagedown");break;case"Home":if(!w)return;i.focusOption("first");break;case"End":if(!w)return;i.focusOption("last");break;default:return}a.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++zE),i.state.selectValue=ap(r.value),r.menuIsOpen&&i.state.selectValue.length){var o=i.getFocusableOptionsWithIds(),s=i.buildFocusableOptions(),l=s.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=o,i.state.focusedOption=s[l],i.state.focusedOptionId=_l(o,s[l])}return i}return ik(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&lp(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(i){var o=this.props,s=o.isDisabled,l=o.menuIsOpen,a=this.state.isFocused;(a&&!s&&i.isDisabled||a&&l&&!i.menuIsOpen)&&this.focusInput(),a&&s&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!a&&!s&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(lp(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,o){this.props.onInputChange(i,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var o=this,s=this.state,l=s.selectValue,a=s.isFocused,u=this.buildFocusableOptions(),f=i==="first"?0:u.length-1;if(!this.props.isMulti){var d=u.indexOf(l[0]);d>-1&&(f=d)}this.scrollToFocusedOptionOnUpdate=!(a&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[f],focusedOptionId:this.getFocusedOptionId(u[f])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(i){var o=this.state,s=o.selectValue,l=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var a=s.indexOf(l);l||(a=-1);var u=s.length-1,f=-1;if(s.length){switch(i){case"previous":a===0?f=0:a===-1?f=u:f=a-1;break;case"next":a>-1&&a<u&&(f=a+1);break}this.setState({inputIsHidden:f!==-1,focusedValue:s[f]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,s=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var a=0,u=l.indexOf(s);s||(u=-1),i==="up"?a=u>0?u-1:l.length-1:i==="down"?a=(u+1)%l.length:i==="pageup"?(a=u-o,a<0&&(a=0)):i==="pagedown"?(a=u+o,a>l.length-1&&(a=l.length-1)):i==="last"&&(a=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[a],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[a])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Ol):ie(ie({},Ol),this.props.theme):Ol}},{key:"getCommonProps",value:function(){var i=this.clearValue,o=this.cx,s=this.getStyles,l=this.getClassNames,a=this.getValue,u=this.selectOption,f=this.setValue,d=this.props,m=d.isMulti,y=d.isRtl,v=d.options,g=this.hasValue();return{clearValue:i,cx:o,getStyles:s,getClassNames:l,getValue:a,hasValue:g,isMulti:m,isRtl:y,options:v,selectOption:u,selectProps:d,setValue:f,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,o=i.isClearable,s=i.isMulti;return o===void 0?s:o}},{key:"isOptionDisabled",value:function(i,o){return _v(this.props,i,o)}},{key:"isOptionSelected",value:function(i,o){return Pv(this.props,i,o)}},{key:"filterOption",value:function(i,o){return Tv(this.props,i,o)}},{key:"formatOptionLabel",value:function(i,o){if(typeof this.props.formatOptionLabel=="function"){var s=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(i,{context:o,inputValue:s,selectValue:l})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,o=i.isDisabled,s=i.isSearchable,l=i.inputId,a=i.inputValue,u=i.tabIndex,f=i.form,d=i.menuIsOpen,m=i.required,y=this.getComponents(),v=y.Input,g=this.state,w=g.inputIsHidden,h=g.ariaSelection,p=this.commonProps,x=l||this.getElementId("input"),b=ie(ie(ie({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":m,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!s&&{"aria-readonly":!0}),this.hasValue()?(h==null?void 0:h.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return s?I.createElement(v,oe({},p,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:x,innerRef:this.getInputRef,isDisabled:o,isHidden:w,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:f,type:"text",value:a},b)):I.createElement(fE,oe({id:x,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Hs,onFocus:this.onInputFocus,disabled:o,tabIndex:u,inputMode:"none",form:f,value:""},b))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,o=this.getComponents(),s=o.MultiValue,l=o.MultiValueContainer,a=o.MultiValueLabel,u=o.MultiValueRemove,f=o.SingleValue,d=o.Placeholder,m=this.commonProps,y=this.props,v=y.controlShouldRenderValue,g=y.isDisabled,w=y.isMulti,h=y.inputValue,p=y.placeholder,x=this.state,b=x.selectValue,C=x.focusedValue,E=x.isFocused;if(!this.hasValue()||!v)return h?null:I.createElement(d,oe({},m,{key:"placeholder",isDisabled:g,isFocused:E,innerProps:{id:this.getElementId("placeholder")}}),p);if(w)return b.map(function(j,T){var M=j===C,D="".concat(i.getOptionLabel(j),"-").concat(i.getOptionValue(j));return I.createElement(s,oe({},m,{components:{Container:l,Label:a,Remove:u},isFocused:M,isDisabled:g,key:D,index:T,removeProps:{onClick:function(){return i.removeValue(j)},onTouchEnd:function(){return i.removeValue(j)},onMouseDown:function(F){F.preventDefault()}},data:j}),i.formatOptionLabel(j,"value"))});if(h)return null;var k=b[0];return I.createElement(f,oe({},m,{data:k,isDisabled:g}),this.formatOptionLabel(k,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),o=i.ClearIndicator,s=this.commonProps,l=this.props,a=l.isDisabled,u=l.isLoading,f=this.state.isFocused;if(!this.isClearable()||!o||a||!this.hasValue()||u)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return I.createElement(o,oe({},s,{innerProps:d,isFocused:f}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),o=i.LoadingIndicator,s=this.commonProps,l=this.props,a=l.isDisabled,u=l.isLoading,f=this.state.isFocused;if(!o||!u)return null;var d={"aria-hidden":"true"};return I.createElement(o,oe({},s,{innerProps:d,isDisabled:a,isFocused:f}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator,s=i.IndicatorSeparator;if(!o||!s)return null;var l=this.commonProps,a=this.props.isDisabled,u=this.state.isFocused;return I.createElement(s,oe({},l,{isDisabled:a,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator;if(!o)return null;var s=this.commonProps,l=this.props.isDisabled,a=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return I.createElement(o,oe({},s,{innerProps:u,isDisabled:l,isFocused:a}))}},{key:"renderMenu",value:function(){var i=this,o=this.getComponents(),s=o.Group,l=o.GroupHeading,a=o.Menu,u=o.MenuList,f=o.MenuPortal,d=o.LoadingMessage,m=o.NoOptionsMessage,y=o.Option,v=this.commonProps,g=this.state.focusedOption,w=this.props,h=w.captureMenuScroll,p=w.inputValue,x=w.isLoading,b=w.loadingMessage,C=w.minMenuHeight,E=w.maxMenuHeight,k=w.menuIsOpen,j=w.menuPlacement,T=w.menuPosition,M=w.menuPortalTarget,D=w.menuShouldBlockScroll,R=w.menuShouldScrollIntoView,F=w.noOptionsMessage,G=w.onMenuScrollToTop,q=w.onMenuScrollToBottom;if(!k)return null;var Y=function(me,fe){var be=me.type,de=me.data,ge=me.isDisabled,Te=me.isSelected,Ae=me.label,N=me.value,B=g===de,se=ge?void 0:function(){return i.onOptionHover(de)},te=ge?void 0:function(){return i.selectOption(de)},Z="".concat(i.getElementId("option"),"-").concat(fe),ne={id:Z,onClick:te,onMouseMove:se,onMouseOver:se,tabIndex:-1,role:"option","aria-selected":i.isAppleDevice?void 0:Te};return I.createElement(y,oe({},v,{innerProps:ne,data:de,isDisabled:ge,isSelected:Te,key:Z,label:Ae,type:be,value:N,isFocused:B,innerRef:B?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(me.data,"menu"))},pe;if(this.hasOptions())pe=this.getCategorizedOptions().map(function(K){if(K.type==="group"){var me=K.data,fe=K.options,be=K.index,de="".concat(i.getElementId("group"),"-").concat(be),ge="".concat(de,"-heading");return I.createElement(s,oe({},v,{key:de,data:me,options:fe,Heading:l,headingProps:{id:ge,data:K.data},label:i.formatGroupLabel(K.data)}),K.options.map(function(Te){return Y(Te,"".concat(be,"-").concat(Te.index))}))}else if(K.type==="option")return Y(K,"".concat(K.index))});else if(x){var A=b({inputValue:p});if(A===null)return null;pe=I.createElement(d,v,A)}else{var H=F({inputValue:p});if(H===null)return null;pe=I.createElement(m,v,H)}var W={minMenuHeight:C,maxMenuHeight:E,menuPlacement:j,menuPosition:T,menuShouldScrollIntoView:R},J=I.createElement(Hk,oe({},v,W),function(K){var me=K.ref,fe=K.placerProps,be=fe.placement,de=fe.maxHeight;return I.createElement(a,oe({},v,W,{innerRef:me,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:x,placement:be}),I.createElement(yE,{captureEnabled:h,onTopArrive:G,onBottomArrive:q,lockEnabled:D},function(ge){return I.createElement(u,oe({},v,{innerRef:function(Ae){i.getMenuListRef(Ae),ge(Ae)},innerProps:{role:"listbox","aria-multiselectable":v.isMulti,id:i.getElementId("listbox")},isLoading:x,maxHeight:de,focusedOption:g}),pe)}))});return M||T==="fixed"?I.createElement(f,oe({},v,{appendTo:M,controlElement:this.controlRef,menuPlacement:j,menuPosition:T}),J):J}},{key:"renderFormField",value:function(){var i=this,o=this.props,s=o.delimiter,l=o.isDisabled,a=o.isMulti,u=o.name,f=o.required,d=this.state.selectValue;if(f&&!this.hasValue()&&!l)return I.createElement(bE,{name:u,onFocus:this.onValueInputFocus});if(!(!u||l))if(a)if(s){var m=d.map(function(g){return i.getOptionValue(g)}).join(s);return I.createElement("input",{name:u,type:"hidden",value:m})}else{var y=d.length>0?d.map(function(g,w){return I.createElement("input",{key:"i-".concat(w),name:u,type:"hidden",value:i.getOptionValue(g)})}):I.createElement("input",{name:u,type:"hidden",value:""});return I.createElement("div",null,y)}else{var v=d[0]?this.getOptionValue(d[0]):"";return I.createElement("input",{name:u,type:"hidden",value:v})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,o=this.state,s=o.ariaSelection,l=o.focusedOption,a=o.focusedValue,u=o.isFocused,f=o.selectValue,d=this.getFocusableOptions();return I.createElement(sE,oe({},i,{id:this.getElementId("live-region"),ariaSelection:s,focusedOption:l,focusedValue:a,isFocused:u,selectValue:f,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),o=i.Control,s=i.IndicatorsContainer,l=i.SelectContainer,a=i.ValueContainer,u=this.props,f=u.className,d=u.id,m=u.isDisabled,y=u.menuIsOpen,v=this.state.isFocused,g=this.commonProps=this.getCommonProps();return I.createElement(l,oe({},g,{className:f,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:m,isFocused:v}),this.renderLiveRegion(),I.createElement(o,oe({},g,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:m,isFocused:v,menuIsOpen:y}),I.createElement(a,oe({},g,{isDisabled:m}),this.renderPlaceholderOrValue(),this.renderInput()),I.createElement(s,oe({},g,{isDisabled:m}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,o){var s=o.prevProps,l=o.clearFocusValueOnUpdate,a=o.inputIsHiddenAfterUpdate,u=o.ariaSelection,f=o.isFocused,d=o.prevWasFocused,m=o.instancePrefix,y=i.options,v=i.value,g=i.menuIsOpen,w=i.inputValue,h=i.isMulti,p=ap(v),x={};if(s&&(v!==s.value||y!==s.options||g!==s.menuIsOpen||w!==s.inputValue)){var b=g?FE(i,p):[],C=g?Sp(us(i,p),"".concat(m,"-option")):[],E=l?NE(o,p):null,k=VE(o,b),j=_l(C,k);x={selectValue:p,focusedOption:k,focusedOptionId:j,focusableOptionsWithIds:C,focusedValue:E,clearFocusValueOnUpdate:!1}}var T=a!=null&&i!==s?{inputIsHidden:a,inputIsHiddenAfterUpdate:void 0}:{},M=u,D=f&&d;return f&&!D&&(M={value:Uo(h,p,p[0]||null),options:p,action:"initial-input-focus"},D=!d),(u==null?void 0:u.action)==="initial-input-focus"&&(M=null),ie(ie(ie({},x),T),{},{prevProps:i,ariaSelection:M,prevWasFocused:D})}}]),n}(I.Component);Rv.defaultProps=DE;var $E=I.forwardRef(function(e,t){var n=nk(e);return I.createElement(Rv,oe({ref:t},n))}),UE=$E;const BE=(e,t)=>{const[n,r]=I.useState(()=>{try{const o=window.localStorage.getItem(e);return o?JSON.parse(o):t}catch(o){return console.error("Error loading data from localStorage:",o),t}});return[n,o=>{try{const s=o instanceof Function?o(n):o;r(s),window.localStorage.setItem(e,JSON.stringify(s))}catch(s){console.error("Error storing data to localStorage:",s)}}]},Cp=[{value:"",label:"Оберіть послугу"},{value:"Менторство та консультації",label:"Менторство та консультації"},{value:"Діагностика",label:"Діагностика"},{value:"Стратегії",label:"Стратегії"},{value:"Навчання",label:"Навчання"},{value:"Інше",label:"Інше"}],Ep="/healthy-management-project/assets/computer1x-bHdljI7O.webp",HE="/healthy-management-project/assets/computer@2x-PvRGcLkF.webp",jp="/healthy-management-project/assets/mob_computer1x-gdjE7oao.webp",WE="/healthy-management-project/assets/mob_computer@2x-JptvcU_h.webp";var Iv={exports:{}};(function(e,t){(function(n,r){e.exports=r(I)})(Dp,function(n){return function(r){function i(s){if(o[s])return o[s].exports;var l=o[s]={exports:{},id:s,loaded:!1};return r[s].call(l.exports,l,l.exports,i),l.loaded=!0,l.exports}var o={};return i.m=r,i.c=o,i.p="",i(0)}([function(r,i,o){function s(E){return E&&E.__esModule?E:{default:E}}function l(E,k){var j={};for(var T in E)k.indexOf(T)>=0||Object.prototype.hasOwnProperty.call(E,T)&&(j[T]=E[T]);return j}function a(E,k){if(!(E instanceof k))throw new TypeError("Cannot call a class as a function")}function u(E,k){if(!E)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!k||typeof k!="object"&&typeof k!="function"?E:k}function f(E,k){if(typeof k!="function"&&k!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof k);E.prototype=Object.create(k&&k.prototype,{constructor:{value:E,enumerable:!1,writable:!0,configurable:!0}}),k&&(Object.setPrototypeOf?Object.setPrototypeOf(E,k):E.__proto__=k)}Object.defineProperty(i,"__esModule",{value:!0}),i.conformToMask=void 0;var d=Object.assign||function(E){for(var k=1;k<arguments.length;k++){var j=arguments[k];for(var T in j)Object.prototype.hasOwnProperty.call(j,T)&&(E[T]=j[T])}return E},m=function(){function E(k,j){for(var T=0;T<j.length;T++){var M=j[T];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(k,M.key,M)}}return function(k,j,T){return j&&E(k.prototype,j),T&&E(k,T),k}}(),y=o(3);Object.defineProperty(i,"conformToMask",{enumerable:!0,get:function(){return s(y).default}});var v=o(11),g=s(v),w=o(9),h=s(w),p=o(5),x=s(p),b=o(2),C=function(E){function k(){var j;a(this,k);for(var T=arguments.length,M=Array(T),D=0;D<T;D++)M[D]=arguments[D];var R=u(this,(j=k.__proto__||Object.getPrototypeOf(k)).call.apply(j,[this].concat(M)));return R.setRef=R.setRef.bind(R),R.onBlur=R.onBlur.bind(R),R.onChange=R.onChange.bind(R),R}return f(k,E),m(k,[{key:"setRef",value:function(j){this.inputElement=j}},{key:"initTextMask",value:function(){var j=this.props,T=this.props.value;this.textMaskInputElement=(0,x.default)(d({inputElement:this.inputElement},j)),this.textMaskInputElement.update(T)}},{key:"componentDidMount",value:function(){this.initTextMask()}},{key:"componentDidUpdate",value:function(j){var T=this.props,M=T.value,D=T.pipe,R=T.mask,F=T.guide,G=T.placeholderChar,q=T.showMask,Y={guide:F,placeholderChar:G,showMask:q},pe=typeof D=="function"&&typeof j.pipe=="function"?D.toString()!==j.pipe.toString():(0,b.isNil)(D)&&!(0,b.isNil)(j.pipe)||!(0,b.isNil)(D)&&(0,b.isNil)(j.pipe),A=R.toString()!==j.mask.toString(),H=Object.keys(Y).some(function(J){return Y[J]!==j[J]})||A||pe,W=M!==this.inputElement.value;(W||H)&&this.initTextMask()}},{key:"render",value:function(){var T=this.props,M=T.render,D=l(T,["render"]);return delete D.mask,delete D.guide,delete D.pipe,delete D.placeholderChar,delete D.keepCharPositions,delete D.value,delete D.onBlur,delete D.onChange,delete D.showMask,M(this.setRef,d({onBlur:this.onBlur,onChange:this.onChange,defaultValue:this.props.value},D))}},{key:"onChange",value:function(j){this.textMaskInputElement.update(),typeof this.props.onChange=="function"&&this.props.onChange(j)}},{key:"onBlur",value:function(j){typeof this.props.onBlur=="function"&&this.props.onBlur(j)}}]),k}(g.default.PureComponent);i.default=C,C.propTypes={mask:h.default.oneOfType([h.default.array,h.default.func,h.default.bool,h.default.shape({mask:h.default.oneOfType([h.default.array,h.default.func]),pipe:h.default.func})]).isRequired,guide:h.default.bool,value:h.default.oneOfType([h.default.string,h.default.number]),pipe:h.default.func,placeholderChar:h.default.string,keepCharPositions:h.default.bool,showMask:h.default.bool},C.defaultProps={render:function(E,k){return g.default.createElement("input",d({ref:E},k))}}},function(r,i){Object.defineProperty(i,"__esModule",{value:!0}),i.placeholderChar="_",i.strFunction="function"},function(r,i,o){function s(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:y,w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:m.placeholderChar;if(!l(g))throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");if(g.indexOf(w)!==-1)throw new Error(`Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.

`+("The placeholder character that was received is: "+JSON.stringify(w)+`

`)+("The mask that was received is: "+JSON.stringify(g)));return g.map(function(h){return h instanceof RegExp?w:h}).join("")}function l(g){return Array.isArray&&Array.isArray(g)||g instanceof Array}function a(g){return typeof g=="string"||g instanceof String}function u(g){return typeof g=="number"&&g.length===void 0&&!isNaN(g)}function f(g){return typeof g>"u"||g===null}function d(g){for(var w=[],h=void 0;h=g.indexOf(v),h!==-1;)w.push(h),g.splice(h,1);return{maskWithoutCaretTraps:g,indexes:w}}Object.defineProperty(i,"__esModule",{value:!0}),i.convertMaskToPlaceholder=s,i.isArray=l,i.isString=a,i.isNumber=u,i.isNil=f,i.processCaretTraps=d;var m=o(1),y=[],v="[]"},function(r,i,o){function s(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:d,y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:f,v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!(0,a.isArray)(y)){if((typeof y>"u"?"undefined":l(y))!==u.strFunction)throw new Error("Text-mask:conformToMask; The mask property must be an array.");y=y(m,v),y=(0,a.processCaretTraps)(y).maskWithoutCaretTraps}var g=v.guide,w=g===void 0||g,h=v.previousConformedValue,p=h===void 0?d:h,x=v.placeholderChar,b=x===void 0?u.placeholderChar:x,C=v.placeholder,E=C===void 0?(0,a.convertMaskToPlaceholder)(y,b):C,k=v.currentCaretPosition,j=v.keepCharPositions,T=w===!1&&p!==void 0,M=m.length,D=p.length,R=E.length,F=y.length,G=M-D,q=G>0,Y=k+(q?-G:0),pe=Y+Math.abs(G);if(j===!0&&!q){for(var A=d,H=Y;H<pe;H++)E[H]===b&&(A+=b);m=m.slice(0,Y)+A+m.slice(Y,M)}for(var W=m.split(d).map(function(le,ue){return{char:le,isNew:ue>=Y&&ue<pe}}),J=M-1;J>=0;J--){var K=W[J].char;if(K!==b){var me=J>=Y&&D===F;K===E[me?J-G:J]&&W.splice(J,1)}}var fe=d,be=!1;e:for(var de=0;de<R;de++){var ge=E[de];if(ge===b){if(W.length>0)for(;W.length>0;){var Te=W.shift(),Ae=Te.char,N=Te.isNew;if(Ae===b&&T!==!0){fe+=b;continue e}if(y[de].test(Ae)){if(j===!0&&N!==!1&&p!==d&&w!==!1&&q){for(var B=W.length,se=null,te=0;te<B;te++){var Z=W[te];if(Z.char!==b&&Z.isNew===!1)break;if(Z.char===b){se=te;break}}se!==null?(fe+=Ae,W.splice(se,1)):de--}else fe+=Ae;continue e}be=!0}T===!1&&(fe+=E.substr(de,R));break}fe+=ge}if(T&&q===!1){for(var ne=null,ee=0;ee<fe.length;ee++)E[ee]===b&&(ne=ee);fe=ne!==null?fe.substr(0,ne+1):d}return{conformedValue:fe,meta:{someCharsRejected:be}}}Object.defineProperty(i,"__esModule",{value:!0});var l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m};i.default=s;var a=o(2),u=o(1),f=[],d=""},function(r,i){function o(a){var u=a.previousConformedValue,f=u===void 0?l:u,d=a.previousPlaceholder,m=d===void 0?l:d,y=a.currentCaretPosition,v=y===void 0?0:y,g=a.conformedValue,w=a.rawValue,h=a.placeholderChar,p=a.placeholder,x=a.indexesOfPipedChars,b=x===void 0?s:x,C=a.caretTrapIndexes,E=C===void 0?s:C;if(v===0||!w.length)return 0;var k=w.length,j=f.length,T=p.length,M=g.length,D=k-j,R=D>0,F=j===0,G=D>1&&!R&&!F;if(G)return v;var q=R&&(f===g||g===p),Y=0,pe=void 0,A=void 0;if(q)Y=v-D;else{var H=g.toLowerCase(),W=w.toLowerCase(),J=W.substr(0,v).split(l),K=J.filter(function(S){return H.indexOf(S)!==-1});A=K[K.length-1];var me=m.substr(0,K.length).split(l).filter(function(S){return S!==h}).length,fe=p.substr(0,K.length).split(l).filter(function(S){return S!==h}).length,be=fe!==me,de=m[K.length-1]!==void 0&&p[K.length-2]!==void 0&&m[K.length-1]!==h&&m[K.length-1]!==p[K.length-1]&&m[K.length-1]===p[K.length-2];!R&&(be||de)&&me>0&&p.indexOf(A)>-1&&w[v]!==void 0&&(pe=!0,A=w[v]);for(var ge=b.map(function(S){return H[S]}),Te=ge.filter(function(S){return S===A}).length,Ae=K.filter(function(S){return S===A}).length,N=p.substr(0,p.indexOf(h)).split(l).filter(function(S,P){return S===A&&w[P]!==S}).length,B=N+Ae+Te+(pe?1:0),se=0,te=0;te<M;te++){var Z=H[te];if(Y=te+1,Z===A&&se++,se>=B)break}}if(R){for(var ne=Y,ee=Y;ee<=T;ee++)if(p[ee]===h&&(ne=ee),p[ee]===h||E.indexOf(ee)!==-1||ee===T)return ne}else if(pe){for(var le=Y-1;le>=0;le--)if(g[le]===A||E.indexOf(le)!==-1||le===0)return le}else for(var ue=Y;ue>=0;ue--)if(p[ue-1]===h||E.indexOf(ue)!==-1||ue===0)return ue}Object.defineProperty(i,"__esModule",{value:!0}),i.default=o;var s=[],l=""},function(r,i,o){function s(k){return k&&k.__esModule?k:{default:k}}function l(k){var j={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:j,update:function(T){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:k,D=M.inputElement,R=M.mask,F=M.guide,G=M.pipe,q=M.placeholderChar,Y=q===void 0?h.placeholderChar:q,pe=M.keepCharPositions,A=pe!==void 0&&pe,H=M.showMask,W=H!==void 0&&H;if(typeof T>"u"&&(T=D.value),T!==j.previousConformedValue){(typeof R>"u"?"undefined":d(R))===b&&R.pipe!==void 0&&R.mask!==void 0&&(G=R.pipe,R=R.mask);var J=void 0,K=void 0;if(R instanceof Array&&(J=(0,w.convertMaskToPlaceholder)(R,Y)),R!==!1){var me=u(T),fe=D.selectionEnd,be=j.previousConformedValue,de=j.previousPlaceholder,ge=void 0;if((typeof R>"u"?"undefined":d(R))===h.strFunction){if(K=R(me,{currentCaretPosition:fe,previousConformedValue:be,placeholderChar:Y}),K===!1)return;var Te=(0,w.processCaretTraps)(K),Ae=Te.maskWithoutCaretTraps,N=Te.indexes;K=Ae,ge=N,J=(0,w.convertMaskToPlaceholder)(K,Y)}else K=R;var B={previousConformedValue:be,guide:F,placeholderChar:Y,pipe:G,placeholder:J,currentCaretPosition:fe,keepCharPositions:A},se=(0,g.default)(me,K,B),te=se.conformedValue,Z=(typeof G>"u"?"undefined":d(G))===h.strFunction,ne={};Z&&(ne=G(te,f({rawValue:me},B)),ne===!1?ne={value:be,rejected:!0}:(0,w.isString)(ne)&&(ne={value:ne}));var ee=Z?ne.value:te,le=(0,y.default)({previousConformedValue:be,previousPlaceholder:de,conformedValue:ee,placeholder:J,rawValue:me,currentCaretPosition:fe,placeholderChar:Y,indexesOfPipedChars:ne.indexesOfPipedChars,caretTrapIndexes:ge}),ue=ee===J&&le===0,S=W?J:p,P=ue?S:ee;j.previousConformedValue=P,j.previousPlaceholder=J,D.value!==P&&(D.value=P,a(D,le))}}}}}function a(k,j){document.activeElement===k&&(C?E(function(){return k.setSelectionRange(j,j,x)},0):k.setSelectionRange(j,j,x))}function u(k){if((0,w.isString)(k))return k;if((0,w.isNumber)(k))return String(k);if(k==null)return p;throw new Error(`The 'value' provided to Text Mask needs to be a string or a number. The value received was:

 `+JSON.stringify(k))}Object.defineProperty(i,"__esModule",{value:!0});var f=Object.assign||function(k){for(var j=1;j<arguments.length;j++){var T=arguments[j];for(var M in T)Object.prototype.hasOwnProperty.call(T,M)&&(k[M]=T[M])}return k},d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(k){return typeof k}:function(k){return k&&typeof Symbol=="function"&&k.constructor===Symbol&&k!==Symbol.prototype?"symbol":typeof k};i.default=l;var m=o(4),y=s(m),v=o(3),g=s(v),w=o(2),h=o(1),p="",x="none",b="object",C=typeof navigator<"u"&&/Android/i.test(navigator.userAgent),E=typeof requestAnimationFrame<"u"?requestAnimationFrame:setTimeout},function(r,i){function o(l){return function(){return l}}var s=function(){};s.thatReturns=o,s.thatReturnsFalse=o(!1),s.thatReturnsTrue=o(!0),s.thatReturnsNull=o(null),s.thatReturnsThis=function(){return this},s.thatReturnsArgument=function(l){return l},r.exports=s},function(r,i,o){function s(l,a,u,f,d,m,y,v){if(!l){var g;if(a===void 0)g=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var w=[u,f,d,m,y,v],h=0;g=new Error(a.replace(/%s/g,function(){return w[h++]})),g.name="Invariant Violation"}throw g.framesToPop=1,g}}r.exports=s},function(r,i,o){var s=o(6),l=o(7),a=o(10);r.exports=function(){function u(m,y,v,g,w,h){h!==a&&l(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function f(){return u}u.isRequired=u;var d={array:u,bool:u,func:u,number:u,object:u,string:u,symbol:u,any:u,arrayOf:f,element:u,instanceOf:f,node:u,objectOf:f,oneOf:f,oneOfType:f,shape:f,exact:f};return d.checkPropTypes=s,d.PropTypes=d,d}},function(r,i,o){r.exports=o(8)()},function(r,i){var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";r.exports=o},function(r,i){r.exports=n}])})})(Iv);var QE=Iv.exports;const YE=eo(QE),sn=()=>c.jsx("svg",{width:"8",height:"8",children:c.jsx("use",{href:`${os}#star`})}),KE=_.div`
  padding: 80px 0;
`,GE=_.h2`
  margin-bottom: 40px;
  font-size: 48px;
  font-weight: 600;
  line-height: 1.17;
  color: var(--typography-black);
`,XE=_.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 24px;
`,Op=_.img`
  width: 100%;
  height: 100%;
`,qE=_.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  flex: 1 0 0;
  max-width: 828px;
  padding: 80px;
  border-radius: 16px;
  background-color: var(--background-white);
`,JE=_.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.33;
  color: var(--primary-bluedark);
`,ZE=_.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
`,Bo=_.label`
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
`,ej=_.label`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  color: var(--primary-bluedark);
`,tj=_(sn)`
  vertical-align: super;
`,Pl=_.input`
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
`,nj=_.textarea`
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
`,gi=_.p`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  color: var(--secondary-red);
`,rj=_.button`
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
`;var uo=e=>e.type==="checkbox",Ir=e=>e instanceof Date,at=e=>e==null;const Lv=e=>typeof e=="object";var Qe=e=>!at(e)&&!Array.isArray(e)&&Lv(e)&&!Ir(e),Av=e=>Qe(e)&&e.target?uo(e.target)?e.target.checked:e.target.value:e,ij=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Dv=(e,t)=>e.has(ij(t)),oj=e=>{const t=e.constructor&&e.constructor.prototype;return Qe(t)&&t.hasOwnProperty("isPrototypeOf")},id=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Dt(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(id&&(e instanceof Blob||e instanceof FileList))&&(n||Qe(e)))if(t=n?[]:{},!n&&!oj(e))t=e;else for(const r in e)e.hasOwnProperty(r)&&(t[r]=Dt(e[r]));else return e;return t}var co=e=>Array.isArray(e)?e.filter(Boolean):[],Fe=e=>e===void 0,Q=(e,t,n)=>{if(!t||!Qe(e))return n;const r=co(t.split(/[,[\].]+?/)).reduce((i,o)=>at(i)?i:i[o],e);return Fe(r)||r===e?Fe(e[t])?n:e[t]:r},qt=e=>typeof e=="boolean";const Ys={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},zt={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},on={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},sj=je.createContext(null),od=()=>je.useContext(sj);var Fv=(e,t,n,r=!0)=>{const i={defaultValues:t._defaultValues};for(const o in e)Object.defineProperty(i,o,{get:()=>{const s=o;return t._proxyFormState[s]!==zt.all&&(t._proxyFormState[s]=!r||zt.all),n&&(n[s]=!0),e[s]}});return i},Et=e=>Qe(e)&&!Object.keys(e).length,Nv=(e,t,n,r)=>{n(e);const{name:i,...o}=e;return Et(o)||Object.keys(o).length>=Object.keys(t).length||Object.keys(o).find(s=>t[s]===(!r||zt.all))},cs=e=>Array.isArray(e)?e:[e],Vv=(e,t,n)=>!e||!t||e===t||cs(e).some(r=>r&&(n?r===t:r.startsWith(t)||t.startsWith(r)));function sd(e){const t=je.useRef(e);t.current=e,je.useEffect(()=>{const n=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}function aj(e){const t=od(),{control:n=t.control,disabled:r,name:i,exact:o}=e||{},[s,l]=je.useState(n._formState),a=je.useRef(!0),u=je.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),f=je.useRef(i);return f.current=i,sd({disabled:r,next:d=>a.current&&Vv(f.current,d.name,o)&&Nv(d,u.current,n._updateFormState)&&l({...n._formState,...d}),subject:n._subjects.state}),je.useEffect(()=>(a.current=!0,u.current.isValid&&n._updateValid(!0),()=>{a.current=!1}),[n]),Fv(s,n,u.current,!1)}var Zt=e=>typeof e=="string",zv=(e,t,n,r,i)=>Zt(e)?(r&&t.watch.add(e),Q(n,e,i)):Array.isArray(e)?e.map(o=>(r&&t.watch.add(o),Q(n,o))):(r&&(t.watchAll=!0),n);function lj(e){const t=od(),{control:n=t.control,name:r,defaultValue:i,disabled:o,exact:s}=e||{},l=je.useRef(r);l.current=r,sd({disabled:o,subject:n._subjects.values,next:f=>{Vv(l.current,f.name,s)&&u(Dt(zv(l.current,n._names,f.values||n._formValues,!1,i)))}});const[a,u]=je.useState(n._getWatch(r,i));return je.useEffect(()=>n._removeUnmounted()),a}var ad=e=>/^\w*$/.test(e),$v=e=>co(e.replace(/["|']|\]/g,"").split(/\.|\[/));function Ee(e,t,n){let r=-1;const i=ad(t)?[t]:$v(t),o=i.length,s=o-1;for(;++r<o;){const l=i[r];let a=n;if(r!==s){const u=e[l];a=Qe(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}e[l]=a,e=e[l]}return e}function uj(e){const t=od(),{name:n,disabled:r,control:i=t.control,shouldUnregister:o}=e,s=Dv(i._names.array,n),l=lj({control:i,name:n,defaultValue:Q(i._formValues,n,Q(i._defaultValues,n,e.defaultValue)),exact:!0}),a=aj({control:i,name:n}),u=je.useRef(i.register(n,{...e.rules,value:l}));return u.current=i.register(n,e.rules),je.useEffect(()=>{const f=i._options.shouldUnregister||o,d=(m,y)=>{const v=Q(i._fields,m);v&&(v._f.mount=y)};if(d(n,!0),f){const m=Dt(Q(i._options.defaultValues,n));Ee(i._defaultValues,n,m),Fe(Q(i._formValues,n))&&Ee(i._formValues,n,m)}return()=>{(s?f&&!i._state.action:f)?i.unregister(n):d(n,!1)}},[n,i,s,o]),je.useEffect(()=>{Q(i._fields,n)&&i._updateDisabledField({disabled:r,fields:i._fields,name:n,value:Q(i._fields,n)._f.value})},[r,n,i]),{field:{name:n,value:l,...qt(r)||qt(a.disabled)?{disabled:a.disabled||r}:{},onChange:je.useCallback(f=>u.current.onChange({target:{value:Av(f),name:n},type:Ys.CHANGE}),[n]),onBlur:je.useCallback(()=>u.current.onBlur({target:{value:Q(i._formValues,n),name:n},type:Ys.BLUR}),[n,i]),ref:f=>{const d=Q(i._fields,n);d&&f&&(d._f.ref={focus:()=>f.focus(),select:()=>f.select(),setCustomValidity:m=>f.setCustomValidity(m),reportValidity:()=>f.reportValidity()})}},formState:a,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!Q(a.errors,n)},isDirty:{enumerable:!0,get:()=>!!Q(a.dirtyFields,n)},isTouched:{enumerable:!0,get:()=>!!Q(a.touchedFields,n)},error:{enumerable:!0,get:()=>Q(a.errors,n)}})}}const cj=e=>e.render(uj(e));var dj=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{},_p=e=>({isOnSubmit:!e||e===zt.onSubmit,isOnBlur:e===zt.onBlur,isOnChange:e===zt.onChange,isOnAll:e===zt.all,isOnTouch:e===zt.onTouched}),Pp=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const ds=(e,t,n,r)=>{for(const i of n||Object.keys(e)){const o=Q(e,i);if(o){const{_f:s,...l}=o;if(s){if(s.refs&&s.refs[0]&&t(s.refs[0],i)&&!r)break;if(s.ref&&t(s.ref,s.name)&&!r)break}else Qe(l)&&ds(l,t)}}};var fj=(e,t,n)=>{const r=co(Q(e,n));return Ee(r,"root",t[n]),Ee(e,n,r),e},ld=e=>e.type==="file",Fn=e=>typeof e=="function",Ks=e=>{if(!id)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},fs=e=>Zt(e),ud=e=>e.type==="radio",Gs=e=>e instanceof RegExp;const Tp={value:!1,isValid:!1},Mp={value:!0,isValid:!0};var Uv=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Fe(e[0].attributes.value)?Fe(e[0].value)||e[0].value===""?Mp:{value:e[0].value,isValid:!0}:Mp:Tp}return Tp};const Rp={isValid:!1,value:null};var Bv=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,Rp):Rp;function Ip(e,t,n="validate"){if(fs(e)||Array.isArray(e)&&e.every(fs)||qt(e)&&!e)return{type:n,message:fs(e)?e:"",ref:t}}var wr=e=>Qe(e)&&!Gs(e)?e:{value:e,message:""},Lp=async(e,t,n,r,i)=>{const{ref:o,refs:s,required:l,maxLength:a,minLength:u,min:f,max:d,pattern:m,validate:y,name:v,valueAsNumber:g,mount:w,disabled:h}=e._f,p=Q(t,v);if(!w||h)return{};const x=s?s[0]:o,b=R=>{r&&x.reportValidity&&(x.setCustomValidity(qt(R)?"":R||""),x.reportValidity())},C={},E=ud(o),k=uo(o),j=E||k,T=(g||ld(o))&&Fe(o.value)&&Fe(p)||Ks(o)&&o.value===""||p===""||Array.isArray(p)&&!p.length,M=dj.bind(null,v,n,C),D=(R,F,G,q=on.maxLength,Y=on.minLength)=>{const pe=R?F:G;C[v]={type:R?q:Y,message:pe,ref:o,...M(R?q:Y,pe)}};if(i?!Array.isArray(p)||!p.length:l&&(!j&&(T||at(p))||qt(p)&&!p||k&&!Uv(s).isValid||E&&!Bv(s).isValid)){const{value:R,message:F}=fs(l)?{value:!!l,message:l}:wr(l);if(R&&(C[v]={type:on.required,message:F,ref:x,...M(on.required,F)},!n))return b(F),C}if(!T&&(!at(f)||!at(d))){let R,F;const G=wr(d),q=wr(f);if(!at(p)&&!isNaN(p)){const Y=o.valueAsNumber||p&&+p;at(G.value)||(R=Y>G.value),at(q.value)||(F=Y<q.value)}else{const Y=o.valueAsDate||new Date(p),pe=W=>new Date(new Date().toDateString()+" "+W),A=o.type=="time",H=o.type=="week";Zt(G.value)&&p&&(R=A?pe(p)>pe(G.value):H?p>G.value:Y>new Date(G.value)),Zt(q.value)&&p&&(F=A?pe(p)<pe(q.value):H?p<q.value:Y<new Date(q.value))}if((R||F)&&(D(!!R,G.message,q.message,on.max,on.min),!n))return b(C[v].message),C}if((a||u)&&!T&&(Zt(p)||i&&Array.isArray(p))){const R=wr(a),F=wr(u),G=!at(R.value)&&p.length>+R.value,q=!at(F.value)&&p.length<+F.value;if((G||q)&&(D(G,R.message,F.message),!n))return b(C[v].message),C}if(m&&!T&&Zt(p)){const{value:R,message:F}=wr(m);if(Gs(R)&&!p.match(R)&&(C[v]={type:on.pattern,message:F,ref:o,...M(on.pattern,F)},!n))return b(F),C}if(y){if(Fn(y)){const R=await y(p,t),F=Ip(R,x);if(F&&(C[v]={...F,...M(on.validate,F.message)},!n))return b(F.message),C}else if(Qe(y)){let R={};for(const F in y){if(!Et(R)&&!n)break;const G=Ip(await y[F](p,t),x,F);G&&(R={...G,...M(F,G.message)},b(G.message),n&&(C[v]=R))}if(!Et(R)&&(C[v]={ref:x,...R},!n))return C}}return b(!0),C};function pj(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=Fe(e)?r++:e[t[r++]];return e}function hj(e){for(const t in e)if(e.hasOwnProperty(t)&&!Fe(e[t]))return!1;return!0}function Xe(e,t){const n=Array.isArray(t)?t:ad(t)?[t]:$v(t),r=n.length===1?e:pj(e,n),i=n.length-1,o=n[i];return r&&delete r[o],i!==0&&(Qe(r)&&Et(r)||Array.isArray(r)&&hj(r))&&Xe(e,n.slice(0,-1)),e}function Tl(){let e=[];return{get observers(){return e},next:i=>{for(const o of e)o.next&&o.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(o=>o!==i)}}),unsubscribe:()=>{e=[]}}}var Xs=e=>at(e)||!Lv(e);function ir(e,t){if(Xs(e)||Xs(t))return e===t;if(Ir(e)&&Ir(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n){const o=e[i];if(!r.includes(i))return!1;if(i!=="ref"){const s=t[i];if(Ir(o)&&Ir(s)||Qe(o)&&Qe(s)||Array.isArray(o)&&Array.isArray(s)?!ir(o,s):o!==s)return!1}}return!0}var Hv=e=>e.type==="select-multiple",mj=e=>ud(e)||uo(e),Ml=e=>Ks(e)&&e.isConnected,Wv=e=>{for(const t in e)if(Fn(e[t]))return!0;return!1};function qs(e,t={}){const n=Array.isArray(e);if(Qe(e)||n)for(const r in e)Array.isArray(e[r])||Qe(e[r])&&!Wv(e[r])?(t[r]=Array.isArray(e[r])?[]:{},qs(e[r],t[r])):at(e[r])||(t[r]=!0);return t}function Qv(e,t,n){const r=Array.isArray(e);if(Qe(e)||r)for(const i in e)Array.isArray(e[i])||Qe(e[i])&&!Wv(e[i])?Fe(t)||Xs(n[i])?n[i]=Array.isArray(e[i])?qs(e[i],[]):{...qs(e[i])}:Qv(e[i],at(t)?{}:t[i],n[i]):n[i]=!ir(e[i],t[i]);return n}var Rl=(e,t)=>Qv(e,t,qs(t)),Yv=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>Fe(e)?e:t?e===""?NaN:e&&+e:n&&Zt(e)?new Date(e):r?r(e):e;function Il(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return ld(t)?t.files:ud(t)?Bv(e.refs).value:Hv(t)?[...t.selectedOptions].map(({value:n})=>n):uo(t)?Uv(e.refs).value:Yv(Fe(t.value)?e.ref.value:t.value,e)}var gj=(e,t,n,r)=>{const i={};for(const o of e){const s=Q(t,o);s&&Ee(i,o,s._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},vi=e=>Fe(e)?e:Gs(e)?e.source:Qe(e)?Gs(e.value)?e.value.source:e.value:e,vj=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Ap(e,t,n){const r=Q(e,n);if(r||ad(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const o=i.join("."),s=Q(t,o),l=Q(e,o);if(s&&!Array.isArray(s)&&n!==o)return{name:n};if(l&&l.type)return{name:o,error:l};i.pop()}return{name:n}}var yj=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:(n?r.isOnChange:i.isOnChange)?e:!0,xj=(e,t)=>!co(Q(e,t)).length&&Xe(e,t);const wj={mode:zt.onSubmit,reValidateMode:zt.onChange,shouldFocusError:!0};function bj(e={},t){let n={...wj,...e},r={submitCount:0,isDirty:!1,isLoading:Fn(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{},disabled:!1},i={},o=Qe(n.defaultValues)||Qe(n.values)?Dt(n.defaultValues||n.values)||{}:{},s=n.shouldUnregister?{}:Dt(o),l={action:!1,mount:!1,watch:!1},a={mount:new Set,unMount:new Set,array:new Set,watch:new Set},u,f=0;const d={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},m={values:Tl(),array:Tl(),state:Tl()},y=e.resetOptions&&e.resetOptions.keepDirtyValues,v=_p(n.mode),g=_p(n.reValidateMode),w=n.criteriaMode===zt.all,h=S=>P=>{clearTimeout(f),f=setTimeout(S,P)},p=async S=>{if(d.isValid||S){const P=n.resolver?Et((await T()).errors):await D(i,!0);P!==r.isValid&&m.state.next({isValid:P})}},x=S=>d.isValidating&&m.state.next({isValidating:S}),b=(S,P=[],O,U,$=!0,z=!0)=>{if(U&&O){if(l.action=!0,z&&Array.isArray(Q(i,S))){const ae=O(Q(i,S),U.argA,U.argB);$&&Ee(i,S,ae)}if(z&&Array.isArray(Q(r.errors,S))){const ae=O(Q(r.errors,S),U.argA,U.argB);$&&Ee(r.errors,S,ae),xj(r.errors,S)}if(d.touchedFields&&z&&Array.isArray(Q(r.touchedFields,S))){const ae=O(Q(r.touchedFields,S),U.argA,U.argB);$&&Ee(r.touchedFields,S,ae)}d.dirtyFields&&(r.dirtyFields=Rl(o,s)),m.state.next({name:S,isDirty:F(S,P),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else Ee(s,S,P)},C=(S,P)=>{Ee(r.errors,S,P),m.state.next({errors:r.errors})},E=(S,P,O,U)=>{const $=Q(i,S);if($){const z=Q(s,S,Fe(O)?Q(o,S):O);Fe(z)||U&&U.defaultChecked||P?Ee(s,S,P?z:Il($._f)):Y(S,z),l.mount&&p()}},k=(S,P,O,U,$)=>{let z=!1,ae=!1;const Ce={name:S};if(!O||U){d.isDirty&&(ae=r.isDirty,r.isDirty=Ce.isDirty=F(),z=ae!==Ce.isDirty);const ze=ir(Q(o,S),P);ae=Q(r.dirtyFields,S),ze?Xe(r.dirtyFields,S):Ee(r.dirtyFields,S,!0),Ce.dirtyFields=r.dirtyFields,z=z||d.dirtyFields&&ae!==!ze}if(O){const ze=Q(r.touchedFields,S);ze||(Ee(r.touchedFields,S,O),Ce.touchedFields=r.touchedFields,z=z||d.touchedFields&&ze!==O)}return z&&$&&m.state.next(Ce),z?Ce:{}},j=(S,P,O,U)=>{const $=Q(r.errors,S),z=d.isValid&&qt(P)&&r.isValid!==P;if(e.delayError&&O?(u=h(()=>C(S,O)),u(e.delayError)):(clearTimeout(f),u=null,O?Ee(r.errors,S,O):Xe(r.errors,S)),(O?!ir($,O):$)||!Et(U)||z){const ae={...U,...z&&qt(P)?{isValid:P}:{},errors:r.errors,name:S};r={...r,...ae},m.state.next(ae)}x(!1)},T=async S=>n.resolver(s,n.context,gj(S||a.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),M=async S=>{const{errors:P}=await T(S);if(S)for(const O of S){const U=Q(P,O);U?Ee(r.errors,O,U):Xe(r.errors,O)}else r.errors=P;return P},D=async(S,P,O={valid:!0})=>{for(const U in S){const $=S[U];if($){const{_f:z,...ae}=$;if(z){const Ce=a.array.has(z.name),ze=await Lp($,s,w,n.shouldUseNativeValidation&&!P,Ce);if(ze[z.name]&&(O.valid=!1,P))break;!P&&(Q(ze,z.name)?Ce?fj(r.errors,ze,z.name):Ee(r.errors,z.name,ze[z.name]):Xe(r.errors,z.name))}ae&&await D(ae,P,O)}}return O.valid},R=()=>{for(const S of a.unMount){const P=Q(i,S);P&&(P._f.refs?P._f.refs.every(O=>!Ml(O)):!Ml(P._f.ref))&&ge(S)}a.unMount=new Set},F=(S,P)=>(S&&P&&Ee(s,S,P),!ir(K(),o)),G=(S,P,O)=>zv(S,a,{...l.mount?s:Fe(P)?o:Zt(S)?{[S]:P}:P},O,P),q=S=>co(Q(l.mount?s:o,S,e.shouldUnregister?Q(o,S,[]):[])),Y=(S,P,O={})=>{const U=Q(i,S);let $=P;if(U){const z=U._f;z&&(!z.disabled&&Ee(s,S,Yv(P,z)),$=Ks(z.ref)&&at(P)?"":P,Hv(z.ref)?[...z.ref.options].forEach(ae=>ae.selected=$.includes(ae.value)):z.refs?uo(z.ref)?z.refs.length>1?z.refs.forEach(ae=>(!ae.defaultChecked||!ae.disabled)&&(ae.checked=Array.isArray($)?!!$.find(Ce=>Ce===ae.value):$===ae.value)):z.refs[0]&&(z.refs[0].checked=!!$):z.refs.forEach(ae=>ae.checked=ae.value===$):ld(z.ref)?z.ref.value="":(z.ref.value=$,z.ref.type||m.values.next({name:S,values:{...s}})))}(O.shouldDirty||O.shouldTouch)&&k(S,$,O.shouldTouch,O.shouldDirty,!0),O.shouldValidate&&J(S)},pe=(S,P,O)=>{for(const U in P){const $=P[U],z=`${S}.${U}`,ae=Q(i,z);(a.array.has(S)||!Xs($)||ae&&!ae._f)&&!Ir($)?pe(z,$,O):Y(z,$,O)}},A=(S,P,O={})=>{const U=Q(i,S),$=a.array.has(S),z=Dt(P);Ee(s,S,z),$?(m.array.next({name:S,values:{...s}}),(d.isDirty||d.dirtyFields)&&O.shouldDirty&&m.state.next({name:S,dirtyFields:Rl(o,s),isDirty:F(S,z)})):U&&!U._f&&!at(z)?pe(S,z,O):Y(S,z,O),Pp(S,a)&&m.state.next({...r}),m.values.next({name:S,values:{...s}}),!l.mount&&t()},H=async S=>{const P=S.target;let O=P.name,U=!0;const $=Q(i,O),z=()=>P.type?Il($._f):Av(S),ae=Ce=>{U=Number.isNaN(Ce)||Ce===Q(s,O,Ce)};if($){let Ce,ze;const fo=z(),mr=S.type===Ys.BLUR||S.type===Ys.FOCUS_OUT,Kv=!vj($._f)&&!n.resolver&&!Q(r.errors,O)&&!$._f.deps||yj(mr,Q(r.touchedFields,O),r.isSubmitted,g,v),Aa=Pp(O,a,mr);Ee(s,O,fo),mr?($._f.onBlur&&$._f.onBlur(S),u&&u(0)):$._f.onChange&&$._f.onChange(S);const Da=k(O,fo,mr,!1),Gv=!Et(Da)||Aa;if(!mr&&m.values.next({name:O,type:S.type,values:{...s}}),Kv)return d.isValid&&p(),Gv&&m.state.next({name:O,...Aa?{}:Da});if(!mr&&Aa&&m.state.next({...r}),x(!0),n.resolver){const{errors:cd}=await T([O]);if(ae(fo),U){const Xv=Ap(r.errors,i,O),dd=Ap(cd,i,Xv.name||O);Ce=dd.error,O=dd.name,ze=Et(cd)}}else Ce=(await Lp($,s,w,n.shouldUseNativeValidation))[O],ae(fo),U&&(Ce?ze=!1:d.isValid&&(ze=await D(i,!0)));U&&($._f.deps&&J($._f.deps),j(O,ze,Ce,Da))}},W=(S,P)=>{if(Q(r.errors,P)&&S.focus)return S.focus(),1},J=async(S,P={})=>{let O,U;const $=cs(S);if(x(!0),n.resolver){const z=await M(Fe(S)?S:$);O=Et(z),U=S?!$.some(ae=>Q(z,ae)):O}else S?(U=(await Promise.all($.map(async z=>{const ae=Q(i,z);return await D(ae&&ae._f?{[z]:ae}:ae)}))).every(Boolean),!(!U&&!r.isValid)&&p()):U=O=await D(i);return m.state.next({...!Zt(S)||d.isValid&&O!==r.isValid?{}:{name:S},...n.resolver||!S?{isValid:O}:{},errors:r.errors,isValidating:!1}),P.shouldFocus&&!U&&ds(i,W,S?$:a.mount),U},K=S=>{const P={...o,...l.mount?s:{}};return Fe(S)?P:Zt(S)?Q(P,S):S.map(O=>Q(P,O))},me=(S,P)=>({invalid:!!Q((P||r).errors,S),isDirty:!!Q((P||r).dirtyFields,S),isTouched:!!Q((P||r).touchedFields,S),error:Q((P||r).errors,S)}),fe=S=>{S&&cs(S).forEach(P=>Xe(r.errors,P)),m.state.next({errors:S?r.errors:{}})},be=(S,P,O)=>{const U=(Q(i,S,{_f:{}})._f||{}).ref;Ee(r.errors,S,{...P,ref:U}),m.state.next({name:S,errors:r.errors,isValid:!1}),O&&O.shouldFocus&&U&&U.focus&&U.focus()},de=(S,P)=>Fn(S)?m.values.subscribe({next:O=>S(G(void 0,P),O)}):G(S,P,!0),ge=(S,P={})=>{for(const O of S?cs(S):a.mount)a.mount.delete(O),a.array.delete(O),P.keepValue||(Xe(i,O),Xe(s,O)),!P.keepError&&Xe(r.errors,O),!P.keepDirty&&Xe(r.dirtyFields,O),!P.keepTouched&&Xe(r.touchedFields,O),!n.shouldUnregister&&!P.keepDefaultValue&&Xe(o,O);m.values.next({values:{...s}}),m.state.next({...r,...P.keepDirty?{isDirty:F()}:{}}),!P.keepIsValid&&p()},Te=({disabled:S,name:P,field:O,fields:U,value:$})=>{if(qt(S)){const z=S?void 0:Fe($)?Il(O?O._f:Q(U,P)._f):$;Ee(s,P,z),k(P,z,!1,!1,!0)}},Ae=(S,P={})=>{let O=Q(i,S);const U=qt(P.disabled);return Ee(i,S,{...O||{},_f:{...O&&O._f?O._f:{ref:{name:S}},name:S,mount:!0,...P}}),a.mount.add(S),O?Te({field:O,disabled:P.disabled,name:S}):E(S,!0,P.value),{...U?{disabled:P.disabled}:{},...n.progressive?{required:!!P.required,min:vi(P.min),max:vi(P.max),minLength:vi(P.minLength),maxLength:vi(P.maxLength),pattern:vi(P.pattern)}:{},name:S,onChange:H,onBlur:H,ref:$=>{if($){Ae(S,P),O=Q(i,S);const z=Fe($.value)&&$.querySelectorAll&&$.querySelectorAll("input,select,textarea")[0]||$,ae=mj(z),Ce=O._f.refs||[];if(ae?Ce.find(ze=>ze===z):z===O._f.ref)return;Ee(i,S,{_f:{...O._f,...ae?{refs:[...Ce.filter(Ml),z,...Array.isArray(Q(o,S))?[{}]:[]],ref:{type:z.type,name:S}}:{ref:z}}}),E(S,!1,void 0,z)}else O=Q(i,S,{}),O._f&&(O._f.mount=!1),(n.shouldUnregister||P.shouldUnregister)&&!(Dv(a.array,S)&&l.action)&&a.unMount.add(S)}}},N=()=>n.shouldFocusError&&ds(i,W,a.mount),B=S=>{qt(S)&&(m.state.next({disabled:S}),ds(i,P=>{P.disabled=S},0,!1))},se=(S,P)=>async O=>{O&&(O.preventDefault&&O.preventDefault(),O.persist&&O.persist());let U=Dt(s);if(m.state.next({isSubmitting:!0}),n.resolver){const{errors:$,values:z}=await T();r.errors=$,U=z}else await D(i);Xe(r.errors,"root"),Et(r.errors)?(m.state.next({errors:{}}),await S(U,O)):(P&&await P({...r.errors},O),N(),setTimeout(N)),m.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Et(r.errors),submitCount:r.submitCount+1,errors:r.errors})},te=(S,P={})=>{Q(i,S)&&(Fe(P.defaultValue)?A(S,Q(o,S)):(A(S,P.defaultValue),Ee(o,S,P.defaultValue)),P.keepTouched||Xe(r.touchedFields,S),P.keepDirty||(Xe(r.dirtyFields,S),r.isDirty=P.defaultValue?F(S,Q(o,S)):F()),P.keepError||(Xe(r.errors,S),d.isValid&&p()),m.state.next({...r}))},Z=(S,P={})=>{const O=S?Dt(S):o,U=Dt(O),$=S&&!Et(S)?U:o;if(P.keepDefaultValues||(o=O),!P.keepValues){if(P.keepDirtyValues||y)for(const z of a.mount)Q(r.dirtyFields,z)?Ee($,z,Q(s,z)):A(z,Q($,z));else{if(id&&Fe(S))for(const z of a.mount){const ae=Q(i,z);if(ae&&ae._f){const Ce=Array.isArray(ae._f.refs)?ae._f.refs[0]:ae._f.ref;if(Ks(Ce)){const ze=Ce.closest("form");if(ze){ze.reset();break}}}}i={}}s=e.shouldUnregister?P.keepDefaultValues?Dt(o):{}:Dt($),m.array.next({values:{...$}}),m.values.next({values:{...$}})}a={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!l.mount&&t(),l.mount=!d.isValid||!!P.keepIsValid,l.watch=!!e.shouldUnregister,m.state.next({submitCount:P.keepSubmitCount?r.submitCount:0,isDirty:P.keepDirty?r.isDirty:!!(P.keepDefaultValues&&!ir(S,o)),isSubmitted:P.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:P.keepDirtyValues?r.dirtyFields:P.keepDefaultValues&&S?Rl(o,S):{},touchedFields:P.keepTouched?r.touchedFields:{},errors:P.keepErrors?r.errors:{},isSubmitSuccessful:P.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},ne=(S,P)=>Z(Fn(S)?S(s):S,P);return{control:{register:Ae,unregister:ge,getFieldState:me,handleSubmit:se,setError:be,_executeSchema:T,_getWatch:G,_getDirty:F,_updateValid:p,_removeUnmounted:R,_updateFieldArray:b,_updateDisabledField:Te,_getFieldArray:q,_reset:Z,_resetDefaultValues:()=>Fn(n.defaultValues)&&n.defaultValues().then(S=>{ne(S,n.resetOptions),m.state.next({isLoading:!1})}),_updateFormState:S=>{r={...r,...S}},_disableForm:B,_subjects:m,_proxyFormState:d,get _fields(){return i},get _formValues(){return s},get _state(){return l},set _state(S){l=S},get _defaultValues(){return o},get _names(){return a},set _names(S){a=S},get _formState(){return r},set _formState(S){r=S},get _options(){return n},set _options(S){n={...n,...S}}},trigger:J,register:Ae,handleSubmit:se,watch:de,setValue:A,getValues:K,reset:ne,resetField:te,clearErrors:fe,unregister:ge,setError:be,setFocus:(S,P={})=>{const O=Q(i,S),U=O&&O._f;if(U){const $=U.refs?U.refs[0]:U.ref;$.focus&&($.focus(),P.shouldSelect&&$.select())}},getFieldState:me}}function Sj(e={}){const t=je.useRef(),n=je.useRef(),[r,i]=je.useState({isDirty:!1,isValidating:!1,isLoading:Fn(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},disabled:!1,defaultValues:Fn(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...bj(e,()=>i(s=>({...s}))),formState:r});const o=t.current.control;return o._options=e,sd({subject:o._subjects.state,next:s=>{Nv(s,o._proxyFormState,o._updateFormState,!0)&&i({...o._formState})}}),je.useEffect(()=>o._disableForm(e.disabled),[o,e.disabled]),je.useEffect(()=>{if(o._proxyFormState.isDirty){const s=o._getDirty();s!==r.isDirty&&o._subjects.state.next({isDirty:s})}},[o,r.isDirty]),je.useEffect(()=>{e.values&&!ir(e.values,n.current)?(o._reset(e.values,o._options.resetOptions),n.current=e.values):o._resetDefaultValues()},[e.values,o]),je.useEffect(()=>{o._state.mount||(o._updateValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next({...o._formState})),o._removeUnmounted()}),t.current.formState=Fv(r,o),t.current}const kj={control:(e,t)=>{const n=t.selectProps.errors;return{...e,display:"flex",width:"668px",height:"56px",marginTop:"8px",padding:"0px 16px",alignItems:"center",flexShrink:"0",alignSelf:"stretch",borderRadius:"16px",outline:"none",border:`1px solid ${n?"var(--secondary-red)":"transparent"}`,backgroundColor:"var(--background-white)",boxShadow:"0px 0px 8px 0px rgba(27, 54, 65, 0.08)","&:hover":{boxShadow:"0px 0px 16px 0px rgba(27, 54, 65, 0.16)"},"&:focus":{outline:"none",border:"1px solid var(--typography-grey)",background:"var(--background-white)",boxShadow:"0px 0px 8px 0px rgba(27, 54, 65, 0.08)"}}},dropdownIndicator:e=>({...e,color:"#062136"}),indicatorSeparator:()=>({color:"red"}),option:e=>({...e,display:"flex",alignItems:"flex-start",fontWeight:"400",backgroundColor:"var(--background-white)",color:"#1B3641","&:hover":{backgroundColor:"rgba(27, 54, 65, 0.2)",borderRadius:"16px",fontWeight:"600"}}),menu:e=>({...e,height:"auto",marginTop:"0",border:"none",borderRadius:"16px",boxShadow:"0px 0px 8px 0px rgba(27, 54, 65, 0.08)",color:"var(--primary-bluedark)",backgroundColor:"var(--background-white)"}),singleValue:e=>({...e,fontSize:"16px",fontWeight:"400",color:"var(--primary-bluedark)"})},Cj=()=>{const e=["+","3","8","(",/[0-9]/,/[0-9]/,/[0-9]/,")",/[0-9]/,/[0-9]/,/[0-9]/,"-",/[0-9]/,/[0-9]/,"-",/[0-9]/,/[0-9]/],[t,n]=BE("key",{name:"",email:"",phone:"",service:"",comment:""}),{name:r,email:i,phone:o,service:s,comment:l}=t,a=Cp.find(p=>p.value===s),{register:u,handleSubmit:f,control:d,setValue:m,formState:{errors:y},reset:v}=Sj({mode:"all",shouldFocusError:!1,defaultValues:{}});I.useEffect(()=>{const p=JSON.stringify(t);localStorage.setItem("key",p)},[t]);const g=p=>{m("service",(p==null?void 0:p.value)||""),n({...t,service:(p==null?void 0:p.value)||""})},w=p=>{n({...t,[p.target.name]:p.target.value})},h=async p=>{try{const x={...p,phone:p.phone.replace(/\D/g,"").slice(2)};await G2.post("https://healthy-management.onrender.com/api/senddata",x),console.log(x),n({name:"",email:"",phone:"",service:"",comment:""}),v(),alert("Заявка відправлена!")}catch{alert("Помилка при відправці заявки")}};return c.jsx("section",{className:"container",id:"contact",children:c.jsxs(KE,{children:[c.jsx(GE,{children:"Контакт"}),c.jsxs(XE,{children:[c.jsxs("div",{children:[c.jsx(Dn,{minWidth:1920,children:c.jsx(Op,{srcSet:`${Ep} 1920w, ${HE} 2x`,sizes:"(min-width: 1920px) 1920px",src:Ep,alt:"notebook"})}),c.jsx(Dn,{minWidth:300,maxWidth:1919,children:c.jsx(Op,{srcSet:`${jp} 375w, ${WE} 2x`,sizes:"(min-width: 375px) 375px",src:jp,alt:"notebook"})})]}),c.jsxs(qE,{children:[c.jsx(JE,{children:"Залишайте ваші контактні дані і ми з вами зв'яжемось"}),c.jsxs(ZE,{onSubmit:f(h),children:[c.jsxs(Bo,{children:["Ім’я",c.jsx(tj,{}),c.jsx(Pl,{type:"text",placeholder:"Введіть своє ім’я",...u("name",{required:"Це поле обов'язкове для заповнення",pattern:{value:/^(?:[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,32}(?:\s+[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,32})?|[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,64})$/,message:"поле повинно містити одне або два слова"}}),value:r,onChange:w,errors:y.name}),y.name&&c.jsxs(gi,{children:[c.jsx(sn,{}),y.name.message]})]}),c.jsxs(Bo,{children:["Емейл",c.jsx(sn,{}),c.jsx(Pl,{type:"email",placeholder:"Введіть емейл",...u("email",{required:"Це поле обов'язкове для заповнення",pattern:{value:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,message:"Введіть коректний емейл"}}),value:i,onChange:w,errors:y.email}),y.email&&c.jsxs(gi,{children:[c.jsx(sn,{}),y.email.message]})]}),c.jsxs(Bo,{children:["Номер телефону",c.jsx(sn,{}),c.jsx(Pl,{type:"tel",mask:e,placeholder:"Введіть номер телефону",...u("phone",{required:"Це поле обов'язкове для заповнення",pattern:{value:/^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/,message:"Введіть коректний номер телефона"}}),value:o,onChange:w,errors:y.phone,render:({ref:p,...x})=>c.jsx(YE,{...x,ref:b=>{p(b)}})}),y.phone&&c.jsxs(gi,{children:[c.jsx(sn,{}),y.phone.message]})]}),c.jsxs(Bo,{children:["Послуга",c.jsx(sn,{}),c.jsx(cj,{name:"service",control:d,shouldUnregister:!1,render:({field:p})=>c.jsx(UE,{...u("service",{required:"Оберіть послугу"}),placeholder:"Оберіть послугу",...p,options:Cp,styles:kj,errors:y.service,onChange:g,value:a})}),y.service&&c.jsxs(gi,{children:[c.jsx(sn,{}),y.service.message]})]}),c.jsxs(ej,{children:["Повідомлення",c.jsx(nj,{name:"comment",placeholder:"Введіть ваше повідомлення",...u("comment",{pattern:{value:/^.{0,500}$/,message:"Максимальна довжина повідомлення 500 символів"}}),value:l,onChange:w,errors:y.comment}),y.comment&&c.jsxs(gi,{children:[c.jsx(sn,{}),y.comment.message]})]}),c.jsx(rj,{type:"submit",children:"Надіслати"})]})]})]})]})})},Ej=_.section`
  padding-top: 80px;
  padding-bottom: 80px;
`,jj=_.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  height: 884px;
  background: var(--background-bluedark);
  border-radius: 16px;
  padding: 80px;
`,Oj=_.h2`
  font-size: 48px;
  font-weight: 600;
  line-height: 56px;
  color: var(--typography-white);
`,_j=_.p`
  color: var(--typography-white);
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  width: 828px;
`,Pj=_.span`
  color: var(--primary-yellow);
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
`,Tj=_.ul`
  display: flex;
  gap: 24px;
`,Mj=_.li`
  position: relative;
  width: calc((100% - (24px * 3)) / 4);
  background: var(--background-white);
  padding: 40px;
  border-radius: 16px;
`,Rj=_.div`
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 16px;
  padding: 16px;
  background: var(--primary-yellow);
  left: 258px;
  top: -24px;
`,Ij=_.a`
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

  &:hover {
    box-shadow: 0px 0px 16px 0px rgba(248, 248, 248, 0.16);
    font-weight: 600;
  }

  &:focus {
    box-shadow: 0px 0px 16px 0px rgba(248, 248, 248, 0.16);
    font-weight: 600;
  }
`,Lj="/healthy-management-project/assets/icon-WQbGU7FW.svg",Aj="/healthy-management-project/assets/icon-2-FNpGPcjZ.svg",Dj="/healthy-management-project/assets/icon-3-GZg06_37.svg",Fj="/healthy-management-project/assets/icon-4-9BBn0thK.svg",Ll=[{title:"Менторство та консультації",about:["Для власників та менеджерів з питань менеджменту та розвитку, медичного маркетингу та комунікацій, з питань програм управління здоров'ям","Стейхолдерам та парнерам з питань медичного менеджменту та маркетингу"],path:Lj},{title:"Діагностика",about:["Аудит бізнес-процесів","Аудит маркетингу та сервісу","Аудит системи комунікацій та Сustomer Journey Map"],path:Aj},{title:"Стратегії",about:["Проведення стратегічних сесій","Розробка стратегії розвитку та маркетингу ","Розробка стратегій внутрішніх комунікацій","Розробка стратегій управління здоров'ям"],path:Dj},{title:"Навчання",about:["Медичний маркетинг","Комунікації та сервіс"],path:Fj}],Nj=()=>c.jsx(Ej,{className:"container",id:"services",children:c.jsxs(jj,{children:[c.jsx(Oj,{children:"Послуги"}),c.jsxs(_j,{children:["Будуємо ефективні ",c.jsx(Pj,{children:"стратегії здорового менеджменту"})," для бізнесів. Розвивайте свій бізнес за допомогою ефективних стратегій здорового менеджменту."]}),c.jsx(Tj,{children:Ll==null?void 0:Ll.map(e=>c.jsxs(Mj,{children:[c.jsx(Wc,{title:e.title,about:e.about,additionalComment:!0}),c.jsx(Rj,{children:c.jsx("img",{src:e.path,alt:""})})]},e.title))}),c.jsx(Ij,{href:"#contact",children:"Замовити консультацію"})]})});function Vj(){const e=(t,n)=>{n.preventDefault();const r=document.getElementById(t);if(r){const i=r.getBoundingClientRect(),o=window.pageYOffset||document.documentElement.scrollTop;let s;const l=window.innerWidth;l<=768&&(s=i.top+o-80),(l>768||l<=1440)&&(s=i.top+o-80),l>1440||l<=1920?s=i.top+o-80:s=i.top+o-60,window.scrollTo({top:s,behavior:"smooth"}),setTimeout(()=>{n.target.blur()},1e3)}};return c.jsxs(c.Fragment,{children:[c.jsx(Sg,{handleSetActiveLink:e}),c.jsxs("main",{children:[c.jsx(hb,{}),c.jsx(sw,{}),c.jsx(Y1,{}),c.jsx(xb,{}),c.jsx(PS,{}),c.jsx(Nj,{}),c.jsx(Ib,{}),c.jsx(zb,{}),c.jsx(Ub,{}),c.jsx(yS,{}),c.jsx(pw,{}),c.jsx(Cj,{})]}),c.jsx(wg,{handleSetActiveLink:e}),c.jsx(MS,{})]})}Al.createRoot(document.getElementById("root")).render(c.jsx(je.StrictMode,{children:c.jsx(Vj,{})}));
