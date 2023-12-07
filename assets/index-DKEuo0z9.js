function py(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var hy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function oo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qp={exports:{}},oa={},Jp={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var so=Symbol.for("react.element"),my=Symbol.for("react.portal"),gy=Symbol.for("react.fragment"),vy=Symbol.for("react.strict_mode"),yy=Symbol.for("react.profiler"),xy=Symbol.for("react.provider"),wy=Symbol.for("react.context"),Sy=Symbol.for("react.forward_ref"),by=Symbol.for("react.suspense"),ky=Symbol.for("react.memo"),Cy=Symbol.for("react.lazy"),kd=Symbol.iterator;function Ey(e){return e===null||typeof e!="object"?null:(e=kd&&e[kd]||e["@@iterator"],typeof e=="function"?e:null)}var Zp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},eh=Object.assign,th={};function Zr(e,t,n){this.props=e,this.context=t,this.refs=th,this.updater=n||Zp}Zr.prototype.isReactComponent={};Zr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Zr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function nh(){}nh.prototype=Zr.prototype;function Ju(e,t,n){this.props=e,this.context=t,this.refs=th,this.updater=n||Zp}var Zu=Ju.prototype=new nh;Zu.constructor=Ju;eh(Zu,Zr.prototype);Zu.isPureReactComponent=!0;var Cd=Array.isArray,rh=Object.prototype.hasOwnProperty,ec={current:null},ih={key:!0,ref:!0,__self:!0,__source:!0};function oh(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)rh.call(t,r)&&!ih.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:so,type:e,key:o,ref:s,props:i,_owner:ec.current}}function jy(e,t){return{$$typeof:so,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function tc(e){return typeof e=="object"&&e!==null&&e.$$typeof===so}function Oy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ed=/\/+/g;function Ha(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Oy(""+e.key):t.toString(36)}function Xo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case so:case my:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Ha(s,0):r,Cd(i)?(n="",e!=null&&(n=e.replace(Ed,"$&/")+"/"),Xo(i,t,n,"",function(u){return u})):i!=null&&(tc(i)&&(i=jy(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Ed,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Cd(e))for(var l=0;l<e.length;l++){o=e[l];var a=r+Ha(o,l);s+=Xo(o,t,n,a,i)}else if(a=Ey(e),typeof a=="function")for(e=a.call(e),l=0;!(o=e.next()).done;)o=o.value,a=r+Ha(o,l++),s+=Xo(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function xo(e,t,n){if(e==null)return e;var r=[],i=0;return Xo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function _y(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var lt={current:null},qo={transition:null},Py={ReactCurrentDispatcher:lt,ReactCurrentBatchConfig:qo,ReactCurrentOwner:ec};ue.Children={map:xo,forEach:function(e,t,n){xo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return xo(e,function(){t++}),t},toArray:function(e){return xo(e,function(t){return t})||[]},only:function(e){if(!tc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ue.Component=Zr;ue.Fragment=gy;ue.Profiler=yy;ue.PureComponent=Ju;ue.StrictMode=vy;ue.Suspense=by;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Py;ue.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=eh({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=ec.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)rh.call(t,a)&&!ih.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:so,type:e.type,key:i,ref:o,props:r,_owner:s}};ue.createContext=function(e){return e={$$typeof:wy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:xy,_context:e},e.Consumer=e};ue.createElement=oh;ue.createFactory=function(e){var t=oh.bind(null,e);return t.type=e,t};ue.createRef=function(){return{current:null}};ue.forwardRef=function(e){return{$$typeof:Sy,render:e}};ue.isValidElement=tc;ue.lazy=function(e){return{$$typeof:Cy,_payload:{_status:-1,_result:e},_init:_y}};ue.memo=function(e,t){return{$$typeof:ky,type:e,compare:t===void 0?null:t}};ue.startTransition=function(e){var t=qo.transition;qo.transition={};try{e()}finally{qo.transition=t}};ue.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ue.useCallback=function(e,t){return lt.current.useCallback(e,t)};ue.useContext=function(e){return lt.current.useContext(e)};ue.useDebugValue=function(){};ue.useDeferredValue=function(e){return lt.current.useDeferredValue(e)};ue.useEffect=function(e,t){return lt.current.useEffect(e,t)};ue.useId=function(){return lt.current.useId()};ue.useImperativeHandle=function(e,t,n){return lt.current.useImperativeHandle(e,t,n)};ue.useInsertionEffect=function(e,t){return lt.current.useInsertionEffect(e,t)};ue.useLayoutEffect=function(e,t){return lt.current.useLayoutEffect(e,t)};ue.useMemo=function(e,t){return lt.current.useMemo(e,t)};ue.useReducer=function(e,t,n){return lt.current.useReducer(e,t,n)};ue.useRef=function(e){return lt.current.useRef(e)};ue.useState=function(e){return lt.current.useState(e)};ue.useSyncExternalStore=function(e,t,n){return lt.current.useSyncExternalStore(e,t,n)};ue.useTransition=function(){return lt.current.useTransition()};ue.version="18.2.0";Jp.exports=ue;var M=Jp.exports;const Ce=oo(M),jd=py({__proto__:null,default:Ce},[M]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ty=M,My=Symbol.for("react.element"),Ry=Symbol.for("react.fragment"),Iy=Object.prototype.hasOwnProperty,Ly=Ty.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dy={key:!0,ref:!0,__self:!0,__source:!0};function sh(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Iy.call(t,r)&&!Dy.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:My,type:e,key:o,ref:s,props:i,_owner:Ly.current}}oa.Fragment=Ry;oa.jsx=sh;oa.jsxs=sh;qp.exports=oa;var c=qp.exports,Hl={},ah={exports:{}},Ct={},lh={exports:{}},uh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(V,Q){var Y=V.length;V.push(Q);e:for(;0<Y;){var ce=Y-1>>>1,ne=V[ce];if(0<i(ne,Q))V[ce]=Q,V[Y]=ne,Y=ce;else break e}}function n(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var Q=V[0],Y=V.pop();if(Y!==Q){V[0]=Y;e:for(var ce=0,ne=V.length,je=ne>>>1;ce<je;){var we=2*(ce+1)-1,$e=V[we],he=we+1,Se=V[he];if(0>i($e,Y))he<ne&&0>i(Se,$e)?(V[ce]=Se,V[he]=Y,ce=he):(V[ce]=$e,V[we]=Y,ce=we);else if(he<ne&&0>i(Se,Y))V[ce]=Se,V[he]=Y,ce=he;else break e}}return Q}function i(V,Q){var Y=V.sortIndex-Q.sortIndex;return Y!==0?Y:V.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var a=[],u=[],f=1,d=null,g=3,x=!1,m=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(V){for(var Q=n(u);Q!==null;){if(Q.callback===null)r(u);else if(Q.startTime<=V)r(u),Q.sortIndex=Q.expirationTime,t(a,Q);else break;Q=n(u)}}function S(V){if(v=!1,y(V),!m)if(n(a)!==null)m=!0,ee(k);else{var Q=n(u);Q!==null&&ve(S,Q.startTime-V)}}function k(V,Q){m=!1,v&&(v=!1,p(P),P=-1),x=!0;var Y=g;try{for(y(Q),d=n(a);d!==null&&(!(d.expirationTime>Q)||V&&!B());){var ce=d.callback;if(typeof ce=="function"){d.callback=null,g=d.priorityLevel;var ne=ce(d.expirationTime<=Q);Q=e.unstable_now(),typeof ne=="function"?d.callback=ne:d===n(a)&&r(a),y(Q)}else r(a);d=n(a)}if(d!==null)var je=!0;else{var we=n(u);we!==null&&ve(S,we.startTime-Q),je=!1}return je}finally{d=null,g=Y,x=!1}}var _=!1,E=null,P=-1,T=5,I=-1;function B(){return!(e.unstable_now()-I<T)}function A(){if(E!==null){var V=e.unstable_now();I=V;var Q=!0;try{Q=E(!0,V)}finally{Q?L():(_=!1,E=null)}}else _=!1}var L;if(typeof h=="function")L=function(){h(A)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,Z=X.port2;X.port1.onmessage=A,L=function(){Z.postMessage(null)}}else L=function(){w(A,0)};function ee(V){E=V,_||(_=!0,L())}function ve(V,Q){P=w(function(){V(e.unstable_now())},Q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(V){V.callback=null},e.unstable_continueExecution=function(){m||x||(m=!0,ee(k))},e.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<V?Math.floor(1e3/V):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(V){switch(g){case 1:case 2:case 3:var Q=3;break;default:Q=g}var Y=g;g=Q;try{return V()}finally{g=Y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(V,Q){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var Y=g;g=V;try{return Q()}finally{g=Y}},e.unstable_scheduleCallback=function(V,Q,Y){var ce=e.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ce+Y:ce):Y=ce,V){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=Y+ne,V={id:f++,callback:Q,priorityLevel:V,startTime:Y,expirationTime:ne,sortIndex:-1},Y>ce?(V.sortIndex=Y,t(u,V),n(a)===null&&V===n(u)&&(v?(p(P),P=-1):v=!0,ve(S,Y-ce))):(V.sortIndex=ne,t(a,V),m||x||(m=!0,ee(k))),V},e.unstable_shouldYield=B,e.unstable_wrapCallback=function(V){var Q=g;return function(){var Y=g;g=Q;try{return V.apply(this,arguments)}finally{g=Y}}}})(uh);lh.exports=uh;var Ay=lh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ch=M,bt=Ay;function D(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dh=new Set,Fi={};function mr(e,t){Hr(e,t),Hr(e+"Capture",t)}function Hr(e,t){for(Fi[e]=t,e=0;e<t.length;e++)dh.add(t[e])}var vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wl=Object.prototype.hasOwnProperty,Fy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Od={},_d={};function Vy(e){return Wl.call(_d,e)?!0:Wl.call(Od,e)?!1:Fy.test(e)?_d[e]=!0:(Od[e]=!0,!1)}function Ny(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function zy(e,t,n,r){if(t===null||typeof t>"u"||Ny(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ut(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Je[e]=new ut(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Je[t]=new ut(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Je[e]=new ut(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Je[e]=new ut(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Je[e]=new ut(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Je[e]=new ut(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Je[e]=new ut(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Je[e]=new ut(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Je[e]=new ut(e,5,!1,e.toLowerCase(),null,!1,!1)});var nc=/[\-:]([a-z])/g;function rc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(nc,rc);Je[t]=new ut(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(nc,rc);Je[t]=new ut(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(nc,rc);Je[t]=new ut(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Je[e]=new ut(e,1,!1,e.toLowerCase(),null,!1,!1)});Je.xlinkHref=new ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Je[e]=new ut(e,1,!1,e.toLowerCase(),null,!0,!0)});function ic(e,t,n,r){var i=Je.hasOwnProperty(t)?Je[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(zy(t,n,i,r)&&(n=null),r||i===null?Vy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Sn=ch.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wo=Symbol.for("react.element"),Cr=Symbol.for("react.portal"),Er=Symbol.for("react.fragment"),oc=Symbol.for("react.strict_mode"),Ql=Symbol.for("react.profiler"),fh=Symbol.for("react.provider"),ph=Symbol.for("react.context"),sc=Symbol.for("react.forward_ref"),Yl=Symbol.for("react.suspense"),Kl=Symbol.for("react.suspense_list"),ac=Symbol.for("react.memo"),In=Symbol.for("react.lazy"),hh=Symbol.for("react.offscreen"),Pd=Symbol.iterator;function ii(e){return e===null||typeof e!="object"?null:(e=Pd&&e[Pd]||e["@@iterator"],typeof e=="function"?e:null)}var Re=Object.assign,Wa;function Si(e){if(Wa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Wa=t&&t[1]||""}return`
`+Wa+e}var Qa=!1;function Ya(e,t){if(!e||Qa)return"";Qa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var a=`
`+i[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=l);break}}}finally{Qa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Si(e):""}function $y(e){switch(e.tag){case 5:return Si(e.type);case 16:return Si("Lazy");case 13:return Si("Suspense");case 19:return Si("SuspenseList");case 0:case 2:case 15:return e=Ya(e.type,!1),e;case 11:return e=Ya(e.type.render,!1),e;case 1:return e=Ya(e.type,!0),e;default:return""}}function Gl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Er:return"Fragment";case Cr:return"Portal";case Ql:return"Profiler";case oc:return"StrictMode";case Yl:return"Suspense";case Kl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ph:return(e.displayName||"Context")+".Consumer";case fh:return(e._context.displayName||"Context")+".Provider";case sc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ac:return t=e.displayName||null,t!==null?t:Gl(e.type)||"Memo";case In:t=e._payload,e=e._init;try{return Gl(e(t))}catch{}}return null}function Uy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gl(t);case 8:return t===oc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Kn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function By(e){var t=mh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function So(e){e._valueTracker||(e._valueTracker=By(e))}function gh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=mh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function xs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xl(e,t){var n=t.checked;return Re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Td(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Kn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function vh(e,t){t=t.checked,t!=null&&ic(e,"checked",t,!1)}function ql(e,t){vh(e,t);var n=Kn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Jl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Jl(e,t.type,Kn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Md(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Jl(e,t,n){(t!=="number"||xs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var bi=Array.isArray;function Fr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Kn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Zl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(D(91));return Re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Rd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(D(92));if(bi(n)){if(1<n.length)throw Error(D(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Kn(n)}}function yh(e,t){var n=Kn(t.value),r=Kn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Id(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function xh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function eu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?xh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var bo,wh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(bo=bo||document.createElement("div"),bo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=bo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Oi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hy=["Webkit","ms","Moz","O"];Object.keys(Oi).forEach(function(e){Hy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Oi[t]=Oi[e]})});function Sh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Oi.hasOwnProperty(e)&&Oi[e]?(""+t).trim():t+"px"}function bh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Sh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Wy=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tu(e,t){if(t){if(Wy[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(D(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(D(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(D(61))}if(t.style!=null&&typeof t.style!="object")throw Error(D(62))}}function nu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ru=null;function lc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var iu=null,Vr=null,Nr=null;function Ld(e){if(e=uo(e)){if(typeof iu!="function")throw Error(D(280));var t=e.stateNode;t&&(t=ca(t),iu(e.stateNode,e.type,t))}}function kh(e){Vr?Nr?Nr.push(e):Nr=[e]:Vr=e}function Ch(){if(Vr){var e=Vr,t=Nr;if(Nr=Vr=null,Ld(e),t)for(e=0;e<t.length;e++)Ld(t[e])}}function Eh(e,t){return e(t)}function jh(){}var Ka=!1;function Oh(e,t,n){if(Ka)return e(t,n);Ka=!0;try{return Eh(e,t,n)}finally{Ka=!1,(Vr!==null||Nr!==null)&&(jh(),Ch())}}function Ni(e,t){var n=e.stateNode;if(n===null)return null;var r=ca(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(D(231,t,typeof n));return n}var ou=!1;if(vn)try{var oi={};Object.defineProperty(oi,"passive",{get:function(){ou=!0}}),window.addEventListener("test",oi,oi),window.removeEventListener("test",oi,oi)}catch{ou=!1}function Qy(e,t,n,r,i,o,s,l,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var _i=!1,ws=null,Ss=!1,su=null,Yy={onError:function(e){_i=!0,ws=e}};function Ky(e,t,n,r,i,o,s,l,a){_i=!1,ws=null,Qy.apply(Yy,arguments)}function Gy(e,t,n,r,i,o,s,l,a){if(Ky.apply(this,arguments),_i){if(_i){var u=ws;_i=!1,ws=null}else throw Error(D(198));Ss||(Ss=!0,su=u)}}function gr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Dd(e){if(gr(e)!==e)throw Error(D(188))}function Xy(e){var t=e.alternate;if(!t){if(t=gr(e),t===null)throw Error(D(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Dd(i),e;if(o===r)return Dd(i),t;o=o.sibling}throw Error(D(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?e:t}function Ph(e){return e=Xy(e),e!==null?Th(e):null}function Th(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Th(e);if(t!==null)return t;e=e.sibling}return null}var Mh=bt.unstable_scheduleCallback,Ad=bt.unstable_cancelCallback,qy=bt.unstable_shouldYield,Jy=bt.unstable_requestPaint,Ae=bt.unstable_now,Zy=bt.unstable_getCurrentPriorityLevel,uc=bt.unstable_ImmediatePriority,Rh=bt.unstable_UserBlockingPriority,bs=bt.unstable_NormalPriority,e0=bt.unstable_LowPriority,Ih=bt.unstable_IdlePriority,sa=null,nn=null;function t0(e){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(sa,e,void 0,(e.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:i0,n0=Math.log,r0=Math.LN2;function i0(e){return e>>>=0,e===0?32:31-(n0(e)/r0|0)|0}var ko=64,Co=4194304;function ki(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ks(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=ki(l):(o&=s,o!==0&&(r=ki(o)))}else s=n&~i,s!==0?r=ki(s):o!==0&&(r=ki(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Bt(t),i=1<<n,r|=e[n],t&=~i;return r}function o0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function s0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Bt(o),l=1<<s,a=i[s];a===-1?(!(l&n)||l&r)&&(i[s]=o0(l,t)):a<=t&&(e.expiredLanes|=l),o&=~l}}function au(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Lh(){var e=ko;return ko<<=1,!(ko&4194240)&&(ko=64),e}function Ga(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ao(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Bt(t),e[t]=n}function a0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Bt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function cc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Bt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ye=0;function Dh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ah,dc,Fh,Vh,Nh,lu=!1,Eo=[],zn=null,$n=null,Un=null,zi=new Map,$i=new Map,Dn=[],l0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fd(e,t){switch(e){case"focusin":case"focusout":zn=null;break;case"dragenter":case"dragleave":$n=null;break;case"mouseover":case"mouseout":Un=null;break;case"pointerover":case"pointerout":zi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$i.delete(t.pointerId)}}function si(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=uo(t),t!==null&&dc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function u0(e,t,n,r,i){switch(t){case"focusin":return zn=si(zn,e,t,n,r,i),!0;case"dragenter":return $n=si($n,e,t,n,r,i),!0;case"mouseover":return Un=si(Un,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return zi.set(o,si(zi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,$i.set(o,si($i.get(o)||null,e,t,n,r,i)),!0}return!1}function zh(e){var t=nr(e.target);if(t!==null){var n=gr(t);if(n!==null){if(t=n.tag,t===13){if(t=_h(n),t!==null){e.blockedOn=t,Nh(e.priority,function(){Fh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Jo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=uu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ru=r,n.target.dispatchEvent(r),ru=null}else return t=uo(n),t!==null&&dc(t),e.blockedOn=n,!1;t.shift()}return!0}function Vd(e,t,n){Jo(e)&&n.delete(t)}function c0(){lu=!1,zn!==null&&Jo(zn)&&(zn=null),$n!==null&&Jo($n)&&($n=null),Un!==null&&Jo(Un)&&(Un=null),zi.forEach(Vd),$i.forEach(Vd)}function ai(e,t){e.blockedOn===t&&(e.blockedOn=null,lu||(lu=!0,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,c0)))}function Ui(e){function t(i){return ai(i,e)}if(0<Eo.length){ai(Eo[0],e);for(var n=1;n<Eo.length;n++){var r=Eo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(zn!==null&&ai(zn,e),$n!==null&&ai($n,e),Un!==null&&ai(Un,e),zi.forEach(t),$i.forEach(t),n=0;n<Dn.length;n++)r=Dn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Dn.length&&(n=Dn[0],n.blockedOn===null);)zh(n),n.blockedOn===null&&Dn.shift()}var zr=Sn.ReactCurrentBatchConfig,Cs=!0;function d0(e,t,n,r){var i=ye,o=zr.transition;zr.transition=null;try{ye=1,fc(e,t,n,r)}finally{ye=i,zr.transition=o}}function f0(e,t,n,r){var i=ye,o=zr.transition;zr.transition=null;try{ye=4,fc(e,t,n,r)}finally{ye=i,zr.transition=o}}function fc(e,t,n,r){if(Cs){var i=uu(e,t,n,r);if(i===null)ol(e,t,r,Es,n),Fd(e,r);else if(u0(i,e,t,n,r))r.stopPropagation();else if(Fd(e,r),t&4&&-1<l0.indexOf(e)){for(;i!==null;){var o=uo(i);if(o!==null&&Ah(o),o=uu(e,t,n,r),o===null&&ol(e,t,r,Es,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ol(e,t,r,null,n)}}var Es=null;function uu(e,t,n,r){if(Es=null,e=lc(r),e=nr(e),e!==null)if(t=gr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_h(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Es=e,null}function $h(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zy()){case uc:return 1;case Rh:return 4;case bs:case e0:return 16;case Ih:return 536870912;default:return 16}default:return 16}}var Fn=null,pc=null,Zo=null;function Uh(){if(Zo)return Zo;var e,t=pc,n=t.length,r,i="value"in Fn?Fn.value:Fn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Zo=i.slice(e,1<r?1-r:void 0)}function es(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function jo(){return!0}function Nd(){return!1}function Et(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?jo:Nd,this.isPropagationStopped=Nd,this}return Re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=jo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=jo)},persist:function(){},isPersistent:jo}),t}var ei={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hc=Et(ei),lo=Re({},ei,{view:0,detail:0}),p0=Et(lo),Xa,qa,li,aa=Re({},lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==li&&(li&&e.type==="mousemove"?(Xa=e.screenX-li.screenX,qa=e.screenY-li.screenY):qa=Xa=0,li=e),Xa)},movementY:function(e){return"movementY"in e?e.movementY:qa}}),zd=Et(aa),h0=Re({},aa,{dataTransfer:0}),m0=Et(h0),g0=Re({},lo,{relatedTarget:0}),Ja=Et(g0),v0=Re({},ei,{animationName:0,elapsedTime:0,pseudoElement:0}),y0=Et(v0),x0=Re({},ei,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),w0=Et(x0),S0=Re({},ei,{data:0}),$d=Et(S0),b0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},k0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},C0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function E0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=C0[e])?!!t[e]:!1}function mc(){return E0}var j0=Re({},lo,{key:function(e){if(e.key){var t=b0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=es(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?k0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mc,charCode:function(e){return e.type==="keypress"?es(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?es(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),O0=Et(j0),_0=Re({},aa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ud=Et(_0),P0=Re({},lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mc}),T0=Et(P0),M0=Re({},ei,{propertyName:0,elapsedTime:0,pseudoElement:0}),R0=Et(M0),I0=Re({},aa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),L0=Et(I0),D0=[9,13,27,32],gc=vn&&"CompositionEvent"in window,Pi=null;vn&&"documentMode"in document&&(Pi=document.documentMode);var A0=vn&&"TextEvent"in window&&!Pi,Bh=vn&&(!gc||Pi&&8<Pi&&11>=Pi),Bd=" ",Hd=!1;function Hh(e,t){switch(e){case"keyup":return D0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jr=!1;function F0(e,t){switch(e){case"compositionend":return Wh(t);case"keypress":return t.which!==32?null:(Hd=!0,Bd);case"textInput":return e=t.data,e===Bd&&Hd?null:e;default:return null}}function V0(e,t){if(jr)return e==="compositionend"||!gc&&Hh(e,t)?(e=Uh(),Zo=pc=Fn=null,jr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Bh&&t.locale!=="ko"?null:t.data;default:return null}}var N0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!N0[e.type]:t==="textarea"}function Qh(e,t,n,r){kh(r),t=js(t,"onChange"),0<t.length&&(n=new hc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ti=null,Bi=null;function z0(e){rm(e,0)}function la(e){var t=Pr(e);if(gh(t))return e}function $0(e,t){if(e==="change")return t}var Yh=!1;if(vn){var Za;if(vn){var el="oninput"in document;if(!el){var Qd=document.createElement("div");Qd.setAttribute("oninput","return;"),el=typeof Qd.oninput=="function"}Za=el}else Za=!1;Yh=Za&&(!document.documentMode||9<document.documentMode)}function Yd(){Ti&&(Ti.detachEvent("onpropertychange",Kh),Bi=Ti=null)}function Kh(e){if(e.propertyName==="value"&&la(Bi)){var t=[];Qh(t,Bi,e,lc(e)),Oh(z0,t)}}function U0(e,t,n){e==="focusin"?(Yd(),Ti=t,Bi=n,Ti.attachEvent("onpropertychange",Kh)):e==="focusout"&&Yd()}function B0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return la(Bi)}function H0(e,t){if(e==="click")return la(t)}function W0(e,t){if(e==="input"||e==="change")return la(t)}function Q0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Qt=typeof Object.is=="function"?Object.is:Q0;function Hi(e,t){if(Qt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Wl.call(t,i)||!Qt(e[i],t[i]))return!1}return!0}function Kd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gd(e,t){var n=Kd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Kd(n)}}function Gh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xh(){for(var e=window,t=xs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xs(e.document)}return t}function vc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Y0(e){var t=Xh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Gh(n.ownerDocument.documentElement,n)){if(r!==null&&vc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Gd(n,o);var s=Gd(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var K0=vn&&"documentMode"in document&&11>=document.documentMode,Or=null,cu=null,Mi=null,du=!1;function Xd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;du||Or==null||Or!==xs(r)||(r=Or,"selectionStart"in r&&vc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mi&&Hi(Mi,r)||(Mi=r,r=js(cu,"onSelect"),0<r.length&&(t=new hc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Or)))}function Oo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var _r={animationend:Oo("Animation","AnimationEnd"),animationiteration:Oo("Animation","AnimationIteration"),animationstart:Oo("Animation","AnimationStart"),transitionend:Oo("Transition","TransitionEnd")},tl={},qh={};vn&&(qh=document.createElement("div").style,"AnimationEvent"in window||(delete _r.animationend.animation,delete _r.animationiteration.animation,delete _r.animationstart.animation),"TransitionEvent"in window||delete _r.transitionend.transition);function ua(e){if(tl[e])return tl[e];if(!_r[e])return e;var t=_r[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qh)return tl[e]=t[n];return e}var Jh=ua("animationend"),Zh=ua("animationiteration"),em=ua("animationstart"),tm=ua("transitionend"),nm=new Map,qd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xn(e,t){nm.set(e,t),mr(t,[e])}for(var nl=0;nl<qd.length;nl++){var rl=qd[nl],G0=rl.toLowerCase(),X0=rl[0].toUpperCase()+rl.slice(1);Xn(G0,"on"+X0)}Xn(Jh,"onAnimationEnd");Xn(Zh,"onAnimationIteration");Xn(em,"onAnimationStart");Xn("dblclick","onDoubleClick");Xn("focusin","onFocus");Xn("focusout","onBlur");Xn(tm,"onTransitionEnd");Hr("onMouseEnter",["mouseout","mouseover"]);Hr("onMouseLeave",["mouseout","mouseover"]);Hr("onPointerEnter",["pointerout","pointerover"]);Hr("onPointerLeave",["pointerout","pointerover"]);mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),q0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ci));function Jd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Gy(r,t,void 0,e),e.currentTarget=null}function rm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==o&&i.isPropagationStopped())break e;Jd(i,l,u),o=a}else for(s=0;s<r.length;s++){if(l=r[s],a=l.instance,u=l.currentTarget,l=l.listener,a!==o&&i.isPropagationStopped())break e;Jd(i,l,u),o=a}}}if(Ss)throw e=su,Ss=!1,su=null,e}function Oe(e,t){var n=t[gu];n===void 0&&(n=t[gu]=new Set);var r=e+"__bubble";n.has(r)||(im(t,e,2,!1),n.add(r))}function il(e,t,n){var r=0;t&&(r|=4),im(n,e,r,t)}var _o="_reactListening"+Math.random().toString(36).slice(2);function Wi(e){if(!e[_o]){e[_o]=!0,dh.forEach(function(n){n!=="selectionchange"&&(q0.has(n)||il(n,!1,e),il(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_o]||(t[_o]=!0,il("selectionchange",!1,t))}}function im(e,t,n,r){switch($h(t)){case 1:var i=d0;break;case 4:i=f0;break;default:i=fc}n=i.bind(null,t,n,e),i=void 0,!ou||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ol(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;s=s.return}for(;l!==null;){if(s=nr(l),s===null)return;if(a=s.tag,a===5||a===6){r=o=s;continue e}l=l.parentNode}}r=r.return}Oh(function(){var u=o,f=lc(n),d=[];e:{var g=nm.get(e);if(g!==void 0){var x=hc,m=e;switch(e){case"keypress":if(es(n)===0)break e;case"keydown":case"keyup":x=O0;break;case"focusin":m="focus",x=Ja;break;case"focusout":m="blur",x=Ja;break;case"beforeblur":case"afterblur":x=Ja;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=zd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=m0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=T0;break;case Jh:case Zh:case em:x=y0;break;case tm:x=R0;break;case"scroll":x=p0;break;case"wheel":x=L0;break;case"copy":case"cut":case"paste":x=w0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Ud}var v=(t&4)!==0,w=!v&&e==="scroll",p=v?g!==null?g+"Capture":null:g;v=[];for(var h=u,y;h!==null;){y=h;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,p!==null&&(S=Ni(h,p),S!=null&&v.push(Qi(h,S,y)))),w)break;h=h.return}0<v.length&&(g=new x(g,m,null,n,f),d.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&n!==ru&&(m=n.relatedTarget||n.fromElement)&&(nr(m)||m[yn]))break e;if((x||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,x?(m=n.relatedTarget||n.toElement,x=u,m=m?nr(m):null,m!==null&&(w=gr(m),m!==w||m.tag!==5&&m.tag!==6)&&(m=null)):(x=null,m=u),x!==m)){if(v=zd,S="onMouseLeave",p="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(v=Ud,S="onPointerLeave",p="onPointerEnter",h="pointer"),w=x==null?g:Pr(x),y=m==null?g:Pr(m),g=new v(S,h+"leave",x,n,f),g.target=w,g.relatedTarget=y,S=null,nr(f)===u&&(v=new v(p,h+"enter",m,n,f),v.target=y,v.relatedTarget=w,S=v),w=S,x&&m)t:{for(v=x,p=m,h=0,y=v;y;y=yr(y))h++;for(y=0,S=p;S;S=yr(S))y++;for(;0<h-y;)v=yr(v),h--;for(;0<y-h;)p=yr(p),y--;for(;h--;){if(v===p||p!==null&&v===p.alternate)break t;v=yr(v),p=yr(p)}v=null}else v=null;x!==null&&Zd(d,g,x,v,!1),m!==null&&w!==null&&Zd(d,w,m,v,!0)}}e:{if(g=u?Pr(u):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var k=$0;else if(Wd(g))if(Yh)k=W0;else{k=B0;var _=U0}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=H0);if(k&&(k=k(e,u))){Qh(d,k,n,f);break e}_&&_(e,g,u),e==="focusout"&&(_=g._wrapperState)&&_.controlled&&g.type==="number"&&Jl(g,"number",g.value)}switch(_=u?Pr(u):window,e){case"focusin":(Wd(_)||_.contentEditable==="true")&&(Or=_,cu=u,Mi=null);break;case"focusout":Mi=cu=Or=null;break;case"mousedown":du=!0;break;case"contextmenu":case"mouseup":case"dragend":du=!1,Xd(d,n,f);break;case"selectionchange":if(K0)break;case"keydown":case"keyup":Xd(d,n,f)}var E;if(gc)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else jr?Hh(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Bh&&n.locale!=="ko"&&(jr||P!=="onCompositionStart"?P==="onCompositionEnd"&&jr&&(E=Uh()):(Fn=f,pc="value"in Fn?Fn.value:Fn.textContent,jr=!0)),_=js(u,P),0<_.length&&(P=new $d(P,e,null,n,f),d.push({event:P,listeners:_}),E?P.data=E:(E=Wh(n),E!==null&&(P.data=E)))),(E=A0?F0(e,n):V0(e,n))&&(u=js(u,"onBeforeInput"),0<u.length&&(f=new $d("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=E))}rm(d,t)})}function Qi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function js(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ni(e,n),o!=null&&r.unshift(Qi(e,o,i)),o=Ni(e,t),o!=null&&r.push(Qi(e,o,i))),e=e.return}return r}function yr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Zd(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Ni(n,o),a!=null&&s.unshift(Qi(n,a,l))):i||(a=Ni(n,o),a!=null&&s.push(Qi(n,a,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var J0=/\r\n?/g,Z0=/\u0000|\uFFFD/g;function ef(e){return(typeof e=="string"?e:""+e).replace(J0,`
`).replace(Z0,"")}function Po(e,t,n){if(t=ef(t),ef(e)!==t&&n)throw Error(D(425))}function Os(){}var fu=null,pu=null;function hu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mu=typeof setTimeout=="function"?setTimeout:void 0,ex=typeof clearTimeout=="function"?clearTimeout:void 0,tf=typeof Promise=="function"?Promise:void 0,tx=typeof queueMicrotask=="function"?queueMicrotask:typeof tf<"u"?function(e){return tf.resolve(null).then(e).catch(nx)}:mu;function nx(e){setTimeout(function(){throw e})}function sl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ui(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ui(t)}function Bn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function nf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ti=Math.random().toString(36).slice(2),Jt="__reactFiber$"+ti,Yi="__reactProps$"+ti,yn="__reactContainer$"+ti,gu="__reactEvents$"+ti,rx="__reactListeners$"+ti,ix="__reactHandles$"+ti;function nr(e){var t=e[Jt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yn]||n[Jt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=nf(e);e!==null;){if(n=e[Jt])return n;e=nf(e)}return t}e=n,n=e.parentNode}return null}function uo(e){return e=e[Jt]||e[yn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Pr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(D(33))}function ca(e){return e[Yi]||null}var vu=[],Tr=-1;function qn(e){return{current:e}}function _e(e){0>Tr||(e.current=vu[Tr],vu[Tr]=null,Tr--)}function Ee(e,t){Tr++,vu[Tr]=e.current,e.current=t}var Gn={},it=qn(Gn),pt=qn(!1),ur=Gn;function Wr(e,t){var n=e.type.contextTypes;if(!n)return Gn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ht(e){return e=e.childContextTypes,e!=null}function _s(){_e(pt),_e(it)}function rf(e,t,n){if(it.current!==Gn)throw Error(D(168));Ee(it,t),Ee(pt,n)}function om(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(D(108,Uy(e)||"Unknown",i));return Re({},n,r)}function Ps(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gn,ur=it.current,Ee(it,e),Ee(pt,pt.current),!0}function of(e,t,n){var r=e.stateNode;if(!r)throw Error(D(169));n?(e=om(e,t,ur),r.__reactInternalMemoizedMergedChildContext=e,_e(pt),_e(it),Ee(it,e)):_e(pt),Ee(pt,n)}var cn=null,da=!1,al=!1;function sm(e){cn===null?cn=[e]:cn.push(e)}function ox(e){da=!0,sm(e)}function Jn(){if(!al&&cn!==null){al=!0;var e=0,t=ye;try{var n=cn;for(ye=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}cn=null,da=!1}catch(i){throw cn!==null&&(cn=cn.slice(e+1)),Mh(uc,Jn),i}finally{ye=t,al=!1}}return null}var Mr=[],Rr=0,Ts=null,Ms=0,_t=[],Pt=0,cr=null,fn=1,pn="";function er(e,t){Mr[Rr++]=Ms,Mr[Rr++]=Ts,Ts=e,Ms=t}function am(e,t,n){_t[Pt++]=fn,_t[Pt++]=pn,_t[Pt++]=cr,cr=e;var r=fn;e=pn;var i=32-Bt(r)-1;r&=~(1<<i),n+=1;var o=32-Bt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,fn=1<<32-Bt(t)+i|n<<i|r,pn=o+e}else fn=1<<o|n<<i|r,pn=e}function yc(e){e.return!==null&&(er(e,1),am(e,1,0))}function xc(e){for(;e===Ts;)Ts=Mr[--Rr],Mr[Rr]=null,Ms=Mr[--Rr],Mr[Rr]=null;for(;e===cr;)cr=_t[--Pt],_t[Pt]=null,pn=_t[--Pt],_t[Pt]=null,fn=_t[--Pt],_t[Pt]=null}var wt=null,xt=null,Pe=!1,$t=null;function lm(e,t){var n=Tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function sf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,wt=e,xt=Bn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,wt=e,xt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=cr!==null?{id:fn,overflow:pn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,wt=e,xt=null,!0):!1;default:return!1}}function yu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function xu(e){if(Pe){var t=xt;if(t){var n=t;if(!sf(e,t)){if(yu(e))throw Error(D(418));t=Bn(n.nextSibling);var r=wt;t&&sf(e,t)?lm(r,n):(e.flags=e.flags&-4097|2,Pe=!1,wt=e)}}else{if(yu(e))throw Error(D(418));e.flags=e.flags&-4097|2,Pe=!1,wt=e}}}function af(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;wt=e}function To(e){if(e!==wt)return!1;if(!Pe)return af(e),Pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hu(e.type,e.memoizedProps)),t&&(t=xt)){if(yu(e))throw um(),Error(D(418));for(;t;)lm(e,t),t=Bn(t.nextSibling)}if(af(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(D(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){xt=Bn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}xt=null}}else xt=wt?Bn(e.stateNode.nextSibling):null;return!0}function um(){for(var e=xt;e;)e=Bn(e.nextSibling)}function Qr(){xt=wt=null,Pe=!1}function wc(e){$t===null?$t=[e]:$t.push(e)}var sx=Sn.ReactCurrentBatchConfig;function Ft(e,t){if(e&&e.defaultProps){t=Re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Rs=qn(null),Is=null,Ir=null,Sc=null;function bc(){Sc=Ir=Is=null}function kc(e){var t=Rs.current;_e(Rs),e._currentValue=t}function wu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function $r(e,t){Is=e,Sc=Ir=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ft=!0),e.firstContext=null)}function It(e){var t=e._currentValue;if(Sc!==e)if(e={context:e,memoizedValue:t,next:null},Ir===null){if(Is===null)throw Error(D(308));Ir=e,Is.dependencies={lanes:0,firstContext:e}}else Ir=Ir.next=e;return t}var rr=null;function Cc(e){rr===null?rr=[e]:rr.push(e)}function cm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Cc(t)):(n.next=i.next,i.next=n),t.interleaved=n,xn(e,r)}function xn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ln=!1;function Ec(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function hn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Hn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,pe&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,xn(e,n)}return i=r.interleaved,i===null?(t.next=t,Cc(r)):(t.next=i.next,i.next=t),r.interleaved=t,xn(e,n)}function ts(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cc(e,n)}}function lf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ls(e,t,n,r){var i=e.updateQueue;Ln=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,s===null?o=u:s.next=u,s=a;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==s&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=a))}if(o!==null){var d=i.baseState;s=0,f=u=a=null,l=o;do{var g=l.lane,x=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,v=l;switch(g=t,x=n,v.tag){case 1:if(m=v.payload,typeof m=="function"){d=m.call(x,d,g);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=v.payload,g=typeof m=="function"?m.call(x,d,g):m,g==null)break e;d=Re({},d,g);break e;case 2:Ln=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else x={eventTime:x,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=x,a=d):f=f.next=x,s|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(a=d),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);fr|=s,e.lanes=s,e.memoizedState=d}}function uf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var fm=new ch.Component().refs;function Su(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fa={isMounted:function(e){return(e=e._reactInternals)?gr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=at(),i=Qn(e),o=hn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Hn(e,o,i),t!==null&&(Ht(t,e,i,r),ts(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=at(),i=Qn(e),o=hn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Hn(e,o,i),t!==null&&(Ht(t,e,i,r),ts(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=at(),r=Qn(e),i=hn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Hn(e,i,r),t!==null&&(Ht(t,e,r,n),ts(t,e,r))}};function cf(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Hi(n,r)||!Hi(i,o):!0}function pm(e,t,n){var r=!1,i=Gn,o=t.contextType;return typeof o=="object"&&o!==null?o=It(o):(i=ht(t)?ur:it.current,r=t.contextTypes,o=(r=r!=null)?Wr(e,i):Gn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=fa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function df(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fa.enqueueReplaceState(t,t.state,null)}function bu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=fm,Ec(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=It(o):(o=ht(t)?ur:it.current,i.context=Wr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Su(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&fa.enqueueReplaceState(i,i.state,null),Ls(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ui(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;l===fm&&(l=i.refs={}),s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,e))}return e}function Mo(e,t){throw e=Object.prototype.toString.call(t),Error(D(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ff(e){var t=e._init;return t(e._payload)}function hm(e){function t(p,h){if(e){var y=p.deletions;y===null?(p.deletions=[h],p.flags|=16):y.push(h)}}function n(p,h){if(!e)return null;for(;h!==null;)t(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=Yn(p,h),p.index=0,p.sibling=null,p}function o(p,h,y){return p.index=y,e?(y=p.alternate,y!==null?(y=y.index,y<h?(p.flags|=2,h):y):(p.flags|=2,h)):(p.flags|=1048576,h)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,h,y,S){return h===null||h.tag!==6?(h=hl(y,p.mode,S),h.return=p,h):(h=i(h,y),h.return=p,h)}function a(p,h,y,S){var k=y.type;return k===Er?f(p,h,y.props.children,S,y.key):h!==null&&(h.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===In&&ff(k)===h.type)?(S=i(h,y.props),S.ref=ui(p,h,y),S.return=p,S):(S=as(y.type,y.key,y.props,null,p.mode,S),S.ref=ui(p,h,y),S.return=p,S)}function u(p,h,y,S){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=ml(y,p.mode,S),h.return=p,h):(h=i(h,y.children||[]),h.return=p,h)}function f(p,h,y,S,k){return h===null||h.tag!==7?(h=lr(y,p.mode,S,k),h.return=p,h):(h=i(h,y),h.return=p,h)}function d(p,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return h=hl(""+h,p.mode,y),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case wo:return y=as(h.type,h.key,h.props,null,p.mode,y),y.ref=ui(p,null,h),y.return=p,y;case Cr:return h=ml(h,p.mode,y),h.return=p,h;case In:var S=h._init;return d(p,S(h._payload),y)}if(bi(h)||ii(h))return h=lr(h,p.mode,y,null),h.return=p,h;Mo(p,h)}return null}function g(p,h,y,S){var k=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return k!==null?null:l(p,h,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case wo:return y.key===k?a(p,h,y,S):null;case Cr:return y.key===k?u(p,h,y,S):null;case In:return k=y._init,g(p,h,k(y._payload),S)}if(bi(y)||ii(y))return k!==null?null:f(p,h,y,S,null);Mo(p,y)}return null}function x(p,h,y,S,k){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(y)||null,l(h,p,""+S,k);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case wo:return p=p.get(S.key===null?y:S.key)||null,a(h,p,S,k);case Cr:return p=p.get(S.key===null?y:S.key)||null,u(h,p,S,k);case In:var _=S._init;return x(p,h,y,_(S._payload),k)}if(bi(S)||ii(S))return p=p.get(y)||null,f(h,p,S,k,null);Mo(h,S)}return null}function m(p,h,y,S){for(var k=null,_=null,E=h,P=h=0,T=null;E!==null&&P<y.length;P++){E.index>P?(T=E,E=null):T=E.sibling;var I=g(p,E,y[P],S);if(I===null){E===null&&(E=T);break}e&&E&&I.alternate===null&&t(p,E),h=o(I,h,P),_===null?k=I:_.sibling=I,_=I,E=T}if(P===y.length)return n(p,E),Pe&&er(p,P),k;if(E===null){for(;P<y.length;P++)E=d(p,y[P],S),E!==null&&(h=o(E,h,P),_===null?k=E:_.sibling=E,_=E);return Pe&&er(p,P),k}for(E=r(p,E);P<y.length;P++)T=x(E,p,P,y[P],S),T!==null&&(e&&T.alternate!==null&&E.delete(T.key===null?P:T.key),h=o(T,h,P),_===null?k=T:_.sibling=T,_=T);return e&&E.forEach(function(B){return t(p,B)}),Pe&&er(p,P),k}function v(p,h,y,S){var k=ii(y);if(typeof k!="function")throw Error(D(150));if(y=k.call(y),y==null)throw Error(D(151));for(var _=k=null,E=h,P=h=0,T=null,I=y.next();E!==null&&!I.done;P++,I=y.next()){E.index>P?(T=E,E=null):T=E.sibling;var B=g(p,E,I.value,S);if(B===null){E===null&&(E=T);break}e&&E&&B.alternate===null&&t(p,E),h=o(B,h,P),_===null?k=B:_.sibling=B,_=B,E=T}if(I.done)return n(p,E),Pe&&er(p,P),k;if(E===null){for(;!I.done;P++,I=y.next())I=d(p,I.value,S),I!==null&&(h=o(I,h,P),_===null?k=I:_.sibling=I,_=I);return Pe&&er(p,P),k}for(E=r(p,E);!I.done;P++,I=y.next())I=x(E,p,P,I.value,S),I!==null&&(e&&I.alternate!==null&&E.delete(I.key===null?P:I.key),h=o(I,h,P),_===null?k=I:_.sibling=I,_=I);return e&&E.forEach(function(A){return t(p,A)}),Pe&&er(p,P),k}function w(p,h,y,S){if(typeof y=="object"&&y!==null&&y.type===Er&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case wo:e:{for(var k=y.key,_=h;_!==null;){if(_.key===k){if(k=y.type,k===Er){if(_.tag===7){n(p,_.sibling),h=i(_,y.props.children),h.return=p,p=h;break e}}else if(_.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===In&&ff(k)===_.type){n(p,_.sibling),h=i(_,y.props),h.ref=ui(p,_,y),h.return=p,p=h;break e}n(p,_);break}else t(p,_);_=_.sibling}y.type===Er?(h=lr(y.props.children,p.mode,S,y.key),h.return=p,p=h):(S=as(y.type,y.key,y.props,null,p.mode,S),S.ref=ui(p,h,y),S.return=p,p=S)}return s(p);case Cr:e:{for(_=y.key;h!==null;){if(h.key===_)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){n(p,h.sibling),h=i(h,y.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else t(p,h);h=h.sibling}h=ml(y,p.mode,S),h.return=p,p=h}return s(p);case In:return _=y._init,w(p,h,_(y._payload),S)}if(bi(y))return m(p,h,y,S);if(ii(y))return v(p,h,y,S);Mo(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,y),h.return=p,p=h):(n(p,h),h=hl(y,p.mode,S),h.return=p,p=h),s(p)):n(p,h)}return w}var Yr=hm(!0),mm=hm(!1),co={},rn=qn(co),Ki=qn(co),Gi=qn(co);function ir(e){if(e===co)throw Error(D(174));return e}function jc(e,t){switch(Ee(Gi,t),Ee(Ki,e),Ee(rn,co),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:eu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=eu(t,e)}_e(rn),Ee(rn,t)}function Kr(){_e(rn),_e(Ki),_e(Gi)}function gm(e){ir(Gi.current);var t=ir(rn.current),n=eu(t,e.type);t!==n&&(Ee(Ki,e),Ee(rn,n))}function Oc(e){Ki.current===e&&(_e(rn),_e(Ki))}var Te=qn(0);function Ds(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ll=[];function _c(){for(var e=0;e<ll.length;e++)ll[e]._workInProgressVersionPrimary=null;ll.length=0}var ns=Sn.ReactCurrentDispatcher,ul=Sn.ReactCurrentBatchConfig,dr=0,Me=null,Ue=null,We=null,As=!1,Ri=!1,Xi=0,ax=0;function et(){throw Error(D(321))}function Pc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Qt(e[n],t[n]))return!1;return!0}function Tc(e,t,n,r,i,o){if(dr=o,Me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ns.current=e===null||e.memoizedState===null?dx:fx,e=n(r,i),Ri){o=0;do{if(Ri=!1,Xi=0,25<=o)throw Error(D(301));o+=1,We=Ue=null,t.updateQueue=null,ns.current=px,e=n(r,i)}while(Ri)}if(ns.current=Fs,t=Ue!==null&&Ue.next!==null,dr=0,We=Ue=Me=null,As=!1,t)throw Error(D(300));return e}function Mc(){var e=Xi!==0;return Xi=0,e}function Gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Me.memoizedState=We=e:We=We.next=e,We}function Lt(){if(Ue===null){var e=Me.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var t=We===null?Me.memoizedState:We.next;if(t!==null)We=t,Ue=e;else{if(e===null)throw Error(D(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},We===null?Me.memoizedState=We=e:We=We.next=e}return We}function qi(e,t){return typeof t=="function"?t(e):t}function cl(e){var t=Lt(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=Ue,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,a=null,u=o;do{var f=u.lane;if((dr&f)===f)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,s=r):a=a.next=d,Me.lanes|=f,fr|=f}u=u.next}while(u!==null&&u!==o);a===null?s=r:a.next=l,Qt(r,t.memoizedState)||(ft=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Me.lanes|=o,fr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function dl(e){var t=Lt(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Qt(o,t.memoizedState)||(ft=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function vm(){}function ym(e,t){var n=Me,r=Lt(),i=t(),o=!Qt(r.memoizedState,i);if(o&&(r.memoizedState=i,ft=!0),r=r.queue,Rc(Sm.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,Ji(9,wm.bind(null,n,r,i,t),void 0,null),Qe===null)throw Error(D(349));dr&30||xm(n,t,i)}return i}function xm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Me.updateQueue,t===null?(t={lastEffect:null,stores:null},Me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function wm(e,t,n,r){t.value=n,t.getSnapshot=r,bm(t)&&km(e)}function Sm(e,t,n){return n(function(){bm(t)&&km(e)})}function bm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Qt(e,n)}catch{return!0}}function km(e){var t=xn(e,1);t!==null&&Ht(t,e,1,-1)}function pf(e){var t=Gt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:e},t.queue=e,e=e.dispatch=cx.bind(null,Me,e),[t.memoizedState,e]}function Ji(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Me.updateQueue,t===null?(t={lastEffect:null,stores:null},Me.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Cm(){return Lt().memoizedState}function rs(e,t,n,r){var i=Gt();Me.flags|=e,i.memoizedState=Ji(1|t,n,void 0,r===void 0?null:r)}function pa(e,t,n,r){var i=Lt();r=r===void 0?null:r;var o=void 0;if(Ue!==null){var s=Ue.memoizedState;if(o=s.destroy,r!==null&&Pc(r,s.deps)){i.memoizedState=Ji(t,n,o,r);return}}Me.flags|=e,i.memoizedState=Ji(1|t,n,o,r)}function hf(e,t){return rs(8390656,8,e,t)}function Rc(e,t){return pa(2048,8,e,t)}function Em(e,t){return pa(4,2,e,t)}function jm(e,t){return pa(4,4,e,t)}function Om(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _m(e,t,n){return n=n!=null?n.concat([e]):null,pa(4,4,Om.bind(null,t,e),n)}function Ic(){}function Pm(e,t){var n=Lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Pc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Tm(e,t){var n=Lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Pc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Mm(e,t,n){return dr&21?(Qt(n,t)||(n=Lh(),Me.lanes|=n,fr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ft=!0),e.memoizedState=n)}function lx(e,t){var n=ye;ye=n!==0&&4>n?n:4,e(!0);var r=ul.transition;ul.transition={};try{e(!1),t()}finally{ye=n,ul.transition=r}}function Rm(){return Lt().memoizedState}function ux(e,t,n){var r=Qn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Im(e))Lm(t,n);else if(n=cm(e,t,n,r),n!==null){var i=at();Ht(n,e,r,i),Dm(n,t,r)}}function cx(e,t,n){var r=Qn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Im(e))Lm(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,Qt(l,s)){var a=t.interleaved;a===null?(i.next=i,Cc(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=cm(e,t,i,r),n!==null&&(i=at(),Ht(n,e,r,i),Dm(n,t,r))}}function Im(e){var t=e.alternate;return e===Me||t!==null&&t===Me}function Lm(e,t){Ri=As=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Dm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cc(e,n)}}var Fs={readContext:It,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},dx={readContext:It,useCallback:function(e,t){return Gt().memoizedState=[e,t===void 0?null:t],e},useContext:It,useEffect:hf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,rs(4194308,4,Om.bind(null,t,e),n)},useLayoutEffect:function(e,t){return rs(4194308,4,e,t)},useInsertionEffect:function(e,t){return rs(4,2,e,t)},useMemo:function(e,t){var n=Gt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Gt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ux.bind(null,Me,e),[r.memoizedState,e]},useRef:function(e){var t=Gt();return e={current:e},t.memoizedState=e},useState:pf,useDebugValue:Ic,useDeferredValue:function(e){return Gt().memoizedState=e},useTransition:function(){var e=pf(!1),t=e[0];return e=lx.bind(null,e[1]),Gt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Me,i=Gt();if(Pe){if(n===void 0)throw Error(D(407));n=n()}else{if(n=t(),Qe===null)throw Error(D(349));dr&30||xm(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,hf(Sm.bind(null,r,o,e),[e]),r.flags|=2048,Ji(9,wm.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Gt(),t=Qe.identifierPrefix;if(Pe){var n=pn,r=fn;n=(r&~(1<<32-Bt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Xi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ax++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},fx={readContext:It,useCallback:Pm,useContext:It,useEffect:Rc,useImperativeHandle:_m,useInsertionEffect:Em,useLayoutEffect:jm,useMemo:Tm,useReducer:cl,useRef:Cm,useState:function(){return cl(qi)},useDebugValue:Ic,useDeferredValue:function(e){var t=Lt();return Mm(t,Ue.memoizedState,e)},useTransition:function(){var e=cl(qi)[0],t=Lt().memoizedState;return[e,t]},useMutableSource:vm,useSyncExternalStore:ym,useId:Rm,unstable_isNewReconciler:!1},px={readContext:It,useCallback:Pm,useContext:It,useEffect:Rc,useImperativeHandle:_m,useInsertionEffect:Em,useLayoutEffect:jm,useMemo:Tm,useReducer:dl,useRef:Cm,useState:function(){return dl(qi)},useDebugValue:Ic,useDeferredValue:function(e){var t=Lt();return Ue===null?t.memoizedState=e:Mm(t,Ue.memoizedState,e)},useTransition:function(){var e=dl(qi)[0],t=Lt().memoizedState;return[e,t]},useMutableSource:vm,useSyncExternalStore:ym,useId:Rm,unstable_isNewReconciler:!1};function Gr(e,t){try{var n="",r=t;do n+=$y(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function fl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ku(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var hx=typeof WeakMap=="function"?WeakMap:Map;function Am(e,t,n){n=hn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ns||(Ns=!0,Iu=r),ku(e,t)},n}function Fm(e,t,n){n=hn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ku(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ku(e,t),typeof r!="function"&&(Wn===null?Wn=new Set([this]):Wn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function mf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new hx;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=_x.bind(null,e,t,n),t.then(e,e))}function gf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function vf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=hn(-1,1),t.tag=2,Hn(n,t,1))),n.lanes|=1),e)}var mx=Sn.ReactCurrentOwner,ft=!1;function ot(e,t,n,r){t.child=e===null?mm(t,null,n,r):Yr(t,e.child,n,r)}function yf(e,t,n,r,i){n=n.render;var o=t.ref;return $r(t,i),r=Tc(e,t,n,r,o,i),n=Mc(),e!==null&&!ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,wn(e,t,i)):(Pe&&n&&yc(t),t.flags|=1,ot(e,t,r,i),t.child)}function xf(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!$c(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Vm(e,t,o,r,i)):(e=as(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Hi,n(s,r)&&e.ref===t.ref)return wn(e,t,i)}return t.flags|=1,e=Yn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Vm(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Hi(o,r)&&e.ref===t.ref)if(ft=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ft=!0);else return t.lanes=e.lanes,wn(e,t,i)}return Cu(e,t,n,r,i)}function Nm(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(Dr,yt),yt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ee(Dr,yt),yt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Ee(Dr,yt),yt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ee(Dr,yt),yt|=r;return ot(e,t,i,n),t.child}function zm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Cu(e,t,n,r,i){var o=ht(n)?ur:it.current;return o=Wr(t,o),$r(t,i),n=Tc(e,t,n,r,o,i),r=Mc(),e!==null&&!ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,wn(e,t,i)):(Pe&&r&&yc(t),t.flags|=1,ot(e,t,n,i),t.child)}function wf(e,t,n,r,i){if(ht(n)){var o=!0;Ps(t)}else o=!1;if($r(t,i),t.stateNode===null)is(e,t),pm(t,n,r),bu(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var a=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=It(u):(u=ht(n)?ur:it.current,u=Wr(t,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||a!==u)&&df(t,s,r,u),Ln=!1;var g=t.memoizedState;s.state=g,Ls(t,r,s,i),a=t.memoizedState,l!==r||g!==a||pt.current||Ln?(typeof f=="function"&&(Su(t,n,f,r),a=t.memoizedState),(l=Ln||cf(t,n,l,r,g,a,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),s.props=r,s.state=a,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,dm(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Ft(t.type,l),s.props=u,d=t.pendingProps,g=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=It(a):(a=ht(n)?ur:it.current,a=Wr(t,a));var x=n.getDerivedStateFromProps;(f=typeof x=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==d||g!==a)&&df(t,s,r,a),Ln=!1,g=t.memoizedState,s.state=g,Ls(t,r,s,i);var m=t.memoizedState;l!==d||g!==m||pt.current||Ln?(typeof x=="function"&&(Su(t,n,x,r),m=t.memoizedState),(u=Ln||cf(t,n,u,r,g,m,a)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,m,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,m,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),s.props=r,s.state=m,s.context=a,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Eu(e,t,n,r,o,i)}function Eu(e,t,n,r,i,o){zm(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&of(t,n,!1),wn(e,t,o);r=t.stateNode,mx.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Yr(t,e.child,null,o),t.child=Yr(t,null,l,o)):ot(e,t,l,o),t.memoizedState=r.state,i&&of(t,n,!0),t.child}function $m(e){var t=e.stateNode;t.pendingContext?rf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&rf(e,t.context,!1),jc(e,t.containerInfo)}function Sf(e,t,n,r,i){return Qr(),wc(i),t.flags|=256,ot(e,t,n,r),t.child}var ju={dehydrated:null,treeContext:null,retryLane:0};function Ou(e){return{baseLanes:e,cachePool:null,transitions:null}}function Um(e,t,n){var r=t.pendingProps,i=Te.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ee(Te,i&1),e===null)return xu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=ga(s,r,0,null),e=lr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ou(n),t.memoizedState=ju,e):Lc(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return gx(e,t,s,r,l,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Yn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Yn(l,o):(o=lr(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Ou(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=ju,r}return o=e.child,e=o.sibling,r=Yn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Lc(e,t){return t=ga({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ro(e,t,n,r){return r!==null&&wc(r),Yr(t,e.child,null,n),e=Lc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gx(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=fl(Error(D(422))),Ro(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ga({mode:"visible",children:r.children},i,0,null),o=lr(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Yr(t,e.child,null,s),t.child.memoizedState=Ou(s),t.memoizedState=ju,o);if(!(t.mode&1))return Ro(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(D(419)),r=fl(o,r,void 0),Ro(e,t,s,r)}if(l=(s&e.childLanes)!==0,ft||l){if(r=Qe,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,xn(e,i),Ht(r,e,i,-1))}return zc(),r=fl(Error(D(421))),Ro(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Px.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,xt=Bn(i.nextSibling),wt=t,Pe=!0,$t=null,e!==null&&(_t[Pt++]=fn,_t[Pt++]=pn,_t[Pt++]=cr,fn=e.id,pn=e.overflow,cr=t),t=Lc(t,r.children),t.flags|=4096,t)}function bf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),wu(e.return,t,n)}function pl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Bm(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ot(e,t,r.children,n),r=Te.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bf(e,n,t);else if(e.tag===19)bf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ee(Te,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ds(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),pl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ds(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}pl(t,!0,n,null,o);break;case"together":pl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function is(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function wn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(D(153));if(t.child!==null){for(e=t.child,n=Yn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function vx(e,t,n){switch(t.tag){case 3:$m(t),Qr();break;case 5:gm(t);break;case 1:ht(t.type)&&Ps(t);break;case 4:jc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ee(Rs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ee(Te,Te.current&1),t.flags|=128,null):n&t.child.childLanes?Um(e,t,n):(Ee(Te,Te.current&1),e=wn(e,t,n),e!==null?e.sibling:null);Ee(Te,Te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Bm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ee(Te,Te.current),r)break;return null;case 22:case 23:return t.lanes=0,Nm(e,t,n)}return wn(e,t,n)}var Hm,_u,Wm,Qm;Hm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_u=function(){};Wm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ir(rn.current);var o=null;switch(n){case"input":i=Xl(e,i),r=Xl(e,r),o=[];break;case"select":i=Re({},i,{value:void 0}),r=Re({},r,{value:void 0}),o=[];break;case"textarea":i=Zl(e,i),r=Zl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Os)}tu(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Fi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(o||(o=[]),o.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(o=o||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Fi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&Oe("scroll",e),o||l===a||(o=[])):(o=o||[]).push(u,a))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Qm=function(e,t,n,r){n!==r&&(t.flags|=4)};function ci(e,t){if(!Pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function yx(e,t,n){var r=t.pendingProps;switch(xc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(t),null;case 1:return ht(t.type)&&_s(),tt(t),null;case 3:return r=t.stateNode,Kr(),_e(pt),_e(it),_c(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(To(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,$t!==null&&(Au($t),$t=null))),_u(e,t),tt(t),null;case 5:Oc(t);var i=ir(Gi.current);if(n=t.type,e!==null&&t.stateNode!=null)Wm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(D(166));return tt(t),null}if(e=ir(rn.current),To(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Jt]=t,r[Yi]=o,e=(t.mode&1)!==0,n){case"dialog":Oe("cancel",r),Oe("close",r);break;case"iframe":case"object":case"embed":Oe("load",r);break;case"video":case"audio":for(i=0;i<Ci.length;i++)Oe(Ci[i],r);break;case"source":Oe("error",r);break;case"img":case"image":case"link":Oe("error",r),Oe("load",r);break;case"details":Oe("toggle",r);break;case"input":Td(r,o),Oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Oe("invalid",r);break;case"textarea":Rd(r,o),Oe("invalid",r)}tu(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Po(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Po(r.textContent,l,e),i=["children",""+l]):Fi.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&Oe("scroll",r)}switch(n){case"input":So(r),Md(r,o,!0);break;case"textarea":So(r),Id(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Os)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Jt]=t,e[Yi]=r,Hm(e,t,!1,!1),t.stateNode=e;e:{switch(s=nu(n,r),n){case"dialog":Oe("cancel",e),Oe("close",e),i=r;break;case"iframe":case"object":case"embed":Oe("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ci.length;i++)Oe(Ci[i],e);i=r;break;case"source":Oe("error",e),i=r;break;case"img":case"image":case"link":Oe("error",e),Oe("load",e),i=r;break;case"details":Oe("toggle",e),i=r;break;case"input":Td(e,r),i=Xl(e,r),Oe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Re({},r,{value:void 0}),Oe("invalid",e);break;case"textarea":Rd(e,r),i=Zl(e,r),Oe("invalid",e);break;default:i=r}tu(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="style"?bh(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&wh(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Vi(e,a):typeof a=="number"&&Vi(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Fi.hasOwnProperty(o)?a!=null&&o==="onScroll"&&Oe("scroll",e):a!=null&&ic(e,o,a,s))}switch(n){case"input":So(e),Md(e,r,!1);break;case"textarea":So(e),Id(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Kn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Fr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Fr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Os)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return tt(t),null;case 6:if(e&&t.stateNode!=null)Qm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(D(166));if(n=ir(Gi.current),ir(rn.current),To(t)){if(r=t.stateNode,n=t.memoizedProps,r[Jt]=t,(o=r.nodeValue!==n)&&(e=wt,e!==null))switch(e.tag){case 3:Po(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Po(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Jt]=t,t.stateNode=r}return tt(t),null;case 13:if(_e(Te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Pe&&xt!==null&&t.mode&1&&!(t.flags&128))um(),Qr(),t.flags|=98560,o=!1;else if(o=To(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(D(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(D(317));o[Jt]=t}else Qr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;tt(t),o=!1}else $t!==null&&(Au($t),$t=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Te.current&1?Be===0&&(Be=3):zc())),t.updateQueue!==null&&(t.flags|=4),tt(t),null);case 4:return Kr(),_u(e,t),e===null&&Wi(t.stateNode.containerInfo),tt(t),null;case 10:return kc(t.type._context),tt(t),null;case 17:return ht(t.type)&&_s(),tt(t),null;case 19:if(_e(Te),o=t.memoizedState,o===null)return tt(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)ci(o,!1);else{if(Be!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ds(e),s!==null){for(t.flags|=128,ci(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ee(Te,Te.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ae()>Xr&&(t.flags|=128,r=!0,ci(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ds(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ci(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Pe)return tt(t),null}else 2*Ae()-o.renderingStartTime>Xr&&n!==1073741824&&(t.flags|=128,r=!0,ci(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ae(),t.sibling=null,n=Te.current,Ee(Te,r?n&1|2:n&1),t):(tt(t),null);case 22:case 23:return Nc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?yt&1073741824&&(tt(t),t.subtreeFlags&6&&(t.flags|=8192)):tt(t),null;case 24:return null;case 25:return null}throw Error(D(156,t.tag))}function xx(e,t){switch(xc(t),t.tag){case 1:return ht(t.type)&&_s(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Kr(),_e(pt),_e(it),_c(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Oc(t),null;case 13:if(_e(Te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(D(340));Qr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _e(Te),null;case 4:return Kr(),null;case 10:return kc(t.type._context),null;case 22:case 23:return Nc(),null;case 24:return null;default:return null}}var Io=!1,rt=!1,wx=typeof WeakSet=="function"?WeakSet:Set,W=null;function Lr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ie(e,t,r)}else n.current=null}function Pu(e,t,n){try{n()}catch(r){Ie(e,t,r)}}var kf=!1;function Sx(e,t){if(fu=Cs,e=Xh(),vc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,a=-1,u=0,f=0,d=e,g=null;t:for(;;){for(var x;d!==n||i!==0&&d.nodeType!==3||(l=s+i),d!==o||r!==0&&d.nodeType!==3||(a=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(x=d.firstChild)!==null;)g=d,d=x;for(;;){if(d===e)break t;if(g===n&&++u===i&&(l=s),g===o&&++f===r&&(a=s),(x=d.nextSibling)!==null)break;d=g,g=d.parentNode}d=x}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(pu={focusedElem:e,selectionRange:n},Cs=!1,W=t;W!==null;)if(t=W,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var v=m.memoizedProps,w=m.memoizedState,p=t.stateNode,h=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:Ft(t.type,v),w);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(S){Ie(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return m=kf,kf=!1,m}function Ii(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Pu(t,n,o)}i=i.next}while(i!==r)}}function ha(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Tu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ym(e){var t=e.alternate;t!==null&&(e.alternate=null,Ym(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Jt],delete t[Yi],delete t[gu],delete t[rx],delete t[ix])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Km(e){return e.tag===5||e.tag===3||e.tag===4}function Cf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Km(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Os));else if(r!==4&&(e=e.child,e!==null))for(Mu(e,t,n),e=e.sibling;e!==null;)Mu(e,t,n),e=e.sibling}function Ru(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ru(e,t,n),e=e.sibling;e!==null;)Ru(e,t,n),e=e.sibling}var Ge=null,Nt=!1;function kn(e,t,n){for(n=n.child;n!==null;)Gm(e,t,n),n=n.sibling}function Gm(e,t,n){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(sa,n)}catch{}switch(n.tag){case 5:rt||Lr(n,t);case 6:var r=Ge,i=Nt;Ge=null,kn(e,t,n),Ge=r,Nt=i,Ge!==null&&(Nt?(e=Ge,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ge.removeChild(n.stateNode));break;case 18:Ge!==null&&(Nt?(e=Ge,n=n.stateNode,e.nodeType===8?sl(e.parentNode,n):e.nodeType===1&&sl(e,n),Ui(e)):sl(Ge,n.stateNode));break;case 4:r=Ge,i=Nt,Ge=n.stateNode.containerInfo,Nt=!0,kn(e,t,n),Ge=r,Nt=i;break;case 0:case 11:case 14:case 15:if(!rt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Pu(n,t,s),i=i.next}while(i!==r)}kn(e,t,n);break;case 1:if(!rt&&(Lr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ie(n,t,l)}kn(e,t,n);break;case 21:kn(e,t,n);break;case 22:n.mode&1?(rt=(r=rt)||n.memoizedState!==null,kn(e,t,n),rt=r):kn(e,t,n);break;default:kn(e,t,n)}}function Ef(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new wx),t.forEach(function(r){var i=Tx.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Dt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:Ge=l.stateNode,Nt=!1;break e;case 3:Ge=l.stateNode.containerInfo,Nt=!0;break e;case 4:Ge=l.stateNode.containerInfo,Nt=!0;break e}l=l.return}if(Ge===null)throw Error(D(160));Gm(o,s,i),Ge=null,Nt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){Ie(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Xm(t,e),t=t.sibling}function Xm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Dt(t,e),Yt(e),r&4){try{Ii(3,e,e.return),ha(3,e)}catch(v){Ie(e,e.return,v)}try{Ii(5,e,e.return)}catch(v){Ie(e,e.return,v)}}break;case 1:Dt(t,e),Yt(e),r&512&&n!==null&&Lr(n,n.return);break;case 5:if(Dt(t,e),Yt(e),r&512&&n!==null&&Lr(n,n.return),e.flags&32){var i=e.stateNode;try{Vi(i,"")}catch(v){Ie(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&vh(i,o),nu(l,s);var u=nu(l,o);for(s=0;s<a.length;s+=2){var f=a[s],d=a[s+1];f==="style"?bh(i,d):f==="dangerouslySetInnerHTML"?wh(i,d):f==="children"?Vi(i,d):ic(i,f,d,u)}switch(l){case"input":ql(i,o);break;case"textarea":yh(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?Fr(i,!!o.multiple,x,!1):g!==!!o.multiple&&(o.defaultValue!=null?Fr(i,!!o.multiple,o.defaultValue,!0):Fr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Yi]=o}catch(v){Ie(e,e.return,v)}}break;case 6:if(Dt(t,e),Yt(e),r&4){if(e.stateNode===null)throw Error(D(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){Ie(e,e.return,v)}}break;case 3:if(Dt(t,e),Yt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ui(t.containerInfo)}catch(v){Ie(e,e.return,v)}break;case 4:Dt(t,e),Yt(e);break;case 13:Dt(t,e),Yt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Fc=Ae())),r&4&&Ef(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(rt=(u=rt)||f,Dt(t,e),rt=u):Dt(t,e),Yt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(W=e,f=e.child;f!==null;){for(d=W=f;W!==null;){switch(g=W,x=g.child,g.tag){case 0:case 11:case 14:case 15:Ii(4,g,g.return);break;case 1:Lr(g,g.return);var m=g.stateNode;if(typeof m.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(v){Ie(r,n,v)}}break;case 5:Lr(g,g.return);break;case 22:if(g.memoizedState!==null){Of(d);continue}}x!==null?(x.return=g,W=x):Of(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=d.stateNode,a=d.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Sh("display",s))}catch(v){Ie(e,e.return,v)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){Ie(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Dt(t,e),Yt(e),r&4&&Ef(e);break;case 21:break;default:Dt(t,e),Yt(e)}}function Yt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Km(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Vi(i,""),r.flags&=-33);var o=Cf(e);Ru(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=Cf(e);Mu(e,l,s);break;default:throw Error(D(161))}}catch(a){Ie(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bx(e,t,n){W=e,qm(e)}function qm(e,t,n){for(var r=(e.mode&1)!==0;W!==null;){var i=W,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Io;if(!s){var l=i.alternate,a=l!==null&&l.memoizedState!==null||rt;l=Io;var u=rt;if(Io=s,(rt=a)&&!u)for(W=i;W!==null;)s=W,a=s.child,s.tag===22&&s.memoizedState!==null?_f(i):a!==null?(a.return=s,W=a):_f(i);for(;o!==null;)W=o,qm(o),o=o.sibling;W=i,Io=l,rt=u}jf(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,W=o):jf(e)}}function jf(e){for(;W!==null;){var t=W;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:rt||ha(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!rt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ft(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&uf(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}uf(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Ui(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}rt||t.flags&512&&Tu(t)}catch(g){Ie(t,t.return,g)}}if(t===e){W=null;break}if(n=t.sibling,n!==null){n.return=t.return,W=n;break}W=t.return}}function Of(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var n=t.sibling;if(n!==null){n.return=t.return,W=n;break}W=t.return}}function _f(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ha(4,t)}catch(a){Ie(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){Ie(t,i,a)}}var o=t.return;try{Tu(t)}catch(a){Ie(t,o,a)}break;case 5:var s=t.return;try{Tu(t)}catch(a){Ie(t,s,a)}}}catch(a){Ie(t,t.return,a)}if(t===e){W=null;break}var l=t.sibling;if(l!==null){l.return=t.return,W=l;break}W=t.return}}var kx=Math.ceil,Vs=Sn.ReactCurrentDispatcher,Dc=Sn.ReactCurrentOwner,Mt=Sn.ReactCurrentBatchConfig,pe=0,Qe=null,Ne=null,qe=0,yt=0,Dr=qn(0),Be=0,Zi=null,fr=0,ma=0,Ac=0,Li=null,dt=null,Fc=0,Xr=1/0,un=null,Ns=!1,Iu=null,Wn=null,Lo=!1,Vn=null,zs=0,Di=0,Lu=null,os=-1,ss=0;function at(){return pe&6?Ae():os!==-1?os:os=Ae()}function Qn(e){return e.mode&1?pe&2&&qe!==0?qe&-qe:sx.transition!==null?(ss===0&&(ss=Lh()),ss):(e=ye,e!==0||(e=window.event,e=e===void 0?16:$h(e.type)),e):1}function Ht(e,t,n,r){if(50<Di)throw Di=0,Lu=null,Error(D(185));ao(e,n,r),(!(pe&2)||e!==Qe)&&(e===Qe&&(!(pe&2)&&(ma|=n),Be===4&&An(e,qe)),mt(e,r),n===1&&pe===0&&!(t.mode&1)&&(Xr=Ae()+500,da&&Jn()))}function mt(e,t){var n=e.callbackNode;s0(e,t);var r=ks(e,e===Qe?qe:0);if(r===0)n!==null&&Ad(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ad(n),t===1)e.tag===0?ox(Pf.bind(null,e)):sm(Pf.bind(null,e)),tx(function(){!(pe&6)&&Jn()}),n=null;else{switch(Dh(r)){case 1:n=uc;break;case 4:n=Rh;break;case 16:n=bs;break;case 536870912:n=Ih;break;default:n=bs}n=og(n,Jm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Jm(e,t){if(os=-1,ss=0,pe&6)throw Error(D(327));var n=e.callbackNode;if(Ur()&&e.callbackNode!==n)return null;var r=ks(e,e===Qe?qe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=$s(e,r);else{t=r;var i=pe;pe|=2;var o=eg();(Qe!==e||qe!==t)&&(un=null,Xr=Ae()+500,ar(e,t));do try{jx();break}catch(l){Zm(e,l)}while(!0);bc(),Vs.current=o,pe=i,Ne!==null?t=0:(Qe=null,qe=0,t=Be)}if(t!==0){if(t===2&&(i=au(e),i!==0&&(r=i,t=Du(e,i))),t===1)throw n=Zi,ar(e,0),An(e,r),mt(e,Ae()),n;if(t===6)An(e,r);else{if(i=e.current.alternate,!(r&30)&&!Cx(i)&&(t=$s(e,r),t===2&&(o=au(e),o!==0&&(r=o,t=Du(e,o))),t===1))throw n=Zi,ar(e,0),An(e,r),mt(e,Ae()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(D(345));case 2:tr(e,dt,un);break;case 3:if(An(e,r),(r&130023424)===r&&(t=Fc+500-Ae(),10<t)){if(ks(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){at(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=mu(tr.bind(null,e,dt,un),t);break}tr(e,dt,un);break;case 4:if(An(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Bt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*kx(r/1960))-r,10<r){e.timeoutHandle=mu(tr.bind(null,e,dt,un),r);break}tr(e,dt,un);break;case 5:tr(e,dt,un);break;default:throw Error(D(329))}}}return mt(e,Ae()),e.callbackNode===n?Jm.bind(null,e):null}function Du(e,t){var n=Li;return e.current.memoizedState.isDehydrated&&(ar(e,t).flags|=256),e=$s(e,t),e!==2&&(t=dt,dt=n,t!==null&&Au(t)),e}function Au(e){dt===null?dt=e:dt.push.apply(dt,e)}function Cx(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Qt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function An(e,t){for(t&=~Ac,t&=~ma,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Bt(t),r=1<<n;e[n]=-1,t&=~r}}function Pf(e){if(pe&6)throw Error(D(327));Ur();var t=ks(e,0);if(!(t&1))return mt(e,Ae()),null;var n=$s(e,t);if(e.tag!==0&&n===2){var r=au(e);r!==0&&(t=r,n=Du(e,r))}if(n===1)throw n=Zi,ar(e,0),An(e,t),mt(e,Ae()),n;if(n===6)throw Error(D(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,tr(e,dt,un),mt(e,Ae()),null}function Vc(e,t){var n=pe;pe|=1;try{return e(t)}finally{pe=n,pe===0&&(Xr=Ae()+500,da&&Jn())}}function pr(e){Vn!==null&&Vn.tag===0&&!(pe&6)&&Ur();var t=pe;pe|=1;var n=Mt.transition,r=ye;try{if(Mt.transition=null,ye=1,e)return e()}finally{ye=r,Mt.transition=n,pe=t,!(pe&6)&&Jn()}}function Nc(){yt=Dr.current,_e(Dr)}function ar(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ex(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(xc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&_s();break;case 3:Kr(),_e(pt),_e(it),_c();break;case 5:Oc(r);break;case 4:Kr();break;case 13:_e(Te);break;case 19:_e(Te);break;case 10:kc(r.type._context);break;case 22:case 23:Nc()}n=n.return}if(Qe=e,Ne=e=Yn(e.current,null),qe=yt=t,Be=0,Zi=null,Ac=ma=fr=0,dt=Li=null,rr!==null){for(t=0;t<rr.length;t++)if(n=rr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}rr=null}return e}function Zm(e,t){do{var n=Ne;try{if(bc(),ns.current=Fs,As){for(var r=Me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}As=!1}if(dr=0,We=Ue=Me=null,Ri=!1,Xi=0,Dc.current=null,n===null||n.return===null){Be=1,Zi=t,Ne=null;break}e:{var o=e,s=n.return,l=n,a=t;if(t=qe,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,f=l,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var x=gf(s);if(x!==null){x.flags&=-257,vf(x,s,l,o,t),x.mode&1&&mf(o,u,t),t=x,a=u;var m=t.updateQueue;if(m===null){var v=new Set;v.add(a),t.updateQueue=v}else m.add(a);break e}else{if(!(t&1)){mf(o,u,t),zc();break e}a=Error(D(426))}}else if(Pe&&l.mode&1){var w=gf(s);if(w!==null){!(w.flags&65536)&&(w.flags|=256),vf(w,s,l,o,t),wc(Gr(a,l));break e}}o=a=Gr(a,l),Be!==4&&(Be=2),Li===null?Li=[o]:Li.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Am(o,a,t);lf(o,p);break e;case 1:l=a;var h=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Wn===null||!Wn.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=Fm(o,l,t);lf(o,S);break e}}o=o.return}while(o!==null)}ng(n)}catch(k){t=k,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(!0)}function eg(){var e=Vs.current;return Vs.current=Fs,e===null?Fs:e}function zc(){(Be===0||Be===3||Be===2)&&(Be=4),Qe===null||!(fr&268435455)&&!(ma&268435455)||An(Qe,qe)}function $s(e,t){var n=pe;pe|=2;var r=eg();(Qe!==e||qe!==t)&&(un=null,ar(e,t));do try{Ex();break}catch(i){Zm(e,i)}while(!0);if(bc(),pe=n,Vs.current=r,Ne!==null)throw Error(D(261));return Qe=null,qe=0,Be}function Ex(){for(;Ne!==null;)tg(Ne)}function jx(){for(;Ne!==null&&!qy();)tg(Ne)}function tg(e){var t=ig(e.alternate,e,yt);e.memoizedProps=e.pendingProps,t===null?ng(e):Ne=t,Dc.current=null}function ng(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=xx(n,t),n!==null){n.flags&=32767,Ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Be=6,Ne=null;return}}else if(n=yx(n,t,yt),n!==null){Ne=n;return}if(t=t.sibling,t!==null){Ne=t;return}Ne=t=e}while(t!==null);Be===0&&(Be=5)}function tr(e,t,n){var r=ye,i=Mt.transition;try{Mt.transition=null,ye=1,Ox(e,t,n,r)}finally{Mt.transition=i,ye=r}return null}function Ox(e,t,n,r){do Ur();while(Vn!==null);if(pe&6)throw Error(D(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(D(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(a0(e,o),e===Qe&&(Ne=Qe=null,qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Lo||(Lo=!0,og(bs,function(){return Ur(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Mt.transition,Mt.transition=null;var s=ye;ye=1;var l=pe;pe|=4,Dc.current=null,Sx(e,n),Xm(n,e),Y0(pu),Cs=!!fu,pu=fu=null,e.current=n,bx(n),Jy(),pe=l,ye=s,Mt.transition=o}else e.current=n;if(Lo&&(Lo=!1,Vn=e,zs=i),o=e.pendingLanes,o===0&&(Wn=null),t0(n.stateNode),mt(e,Ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ns)throw Ns=!1,e=Iu,Iu=null,e;return zs&1&&e.tag!==0&&Ur(),o=e.pendingLanes,o&1?e===Lu?Di++:(Di=0,Lu=e):Di=0,Jn(),null}function Ur(){if(Vn!==null){var e=Dh(zs),t=Mt.transition,n=ye;try{if(Mt.transition=null,ye=16>e?16:e,Vn===null)var r=!1;else{if(e=Vn,Vn=null,zs=0,pe&6)throw Error(D(331));var i=pe;for(pe|=4,W=e.current;W!==null;){var o=W,s=o.child;if(W.flags&16){var l=o.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(W=u;W!==null;){var f=W;switch(f.tag){case 0:case 11:case 15:Ii(8,f,o)}var d=f.child;if(d!==null)d.return=f,W=d;else for(;W!==null;){f=W;var g=f.sibling,x=f.return;if(Ym(f),f===u){W=null;break}if(g!==null){g.return=x,W=g;break}W=x}}}var m=o.alternate;if(m!==null){var v=m.child;if(v!==null){m.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}W=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,W=s;else e:for(;W!==null;){if(o=W,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ii(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,W=p;break e}W=o.return}}var h=e.current;for(W=h;W!==null;){s=W;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,W=y;else e:for(s=h;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ha(9,l)}}catch(k){Ie(l,l.return,k)}if(l===s){W=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,W=S;break e}W=l.return}}if(pe=i,Jn(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(sa,e)}catch{}r=!0}return r}finally{ye=n,Mt.transition=t}}return!1}function Tf(e,t,n){t=Gr(n,t),t=Am(e,t,1),e=Hn(e,t,1),t=at(),e!==null&&(ao(e,1,t),mt(e,t))}function Ie(e,t,n){if(e.tag===3)Tf(e,e,n);else for(;t!==null;){if(t.tag===3){Tf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wn===null||!Wn.has(r))){e=Gr(n,e),e=Fm(t,e,1),t=Hn(t,e,1),e=at(),t!==null&&(ao(t,1,e),mt(t,e));break}}t=t.return}}function _x(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=at(),e.pingedLanes|=e.suspendedLanes&n,Qe===e&&(qe&n)===n&&(Be===4||Be===3&&(qe&130023424)===qe&&500>Ae()-Fc?ar(e,0):Ac|=n),mt(e,t)}function rg(e,t){t===0&&(e.mode&1?(t=Co,Co<<=1,!(Co&130023424)&&(Co=4194304)):t=1);var n=at();e=xn(e,t),e!==null&&(ao(e,t,n),mt(e,n))}function Px(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),rg(e,n)}function Tx(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(t),rg(e,n)}var ig;ig=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||pt.current)ft=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ft=!1,vx(e,t,n);ft=!!(e.flags&131072)}else ft=!1,Pe&&t.flags&1048576&&am(t,Ms,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;is(e,t),e=t.pendingProps;var i=Wr(t,it.current);$r(t,n),i=Tc(null,t,r,e,i,n);var o=Mc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ht(r)?(o=!0,Ps(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ec(t),i.updater=fa,t.stateNode=i,i._reactInternals=t,bu(t,r,e,n),t=Eu(null,t,r,!0,o,n)):(t.tag=0,Pe&&o&&yc(t),ot(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(is(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Rx(r),e=Ft(r,e),i){case 0:t=Cu(null,t,r,e,n);break e;case 1:t=wf(null,t,r,e,n);break e;case 11:t=yf(null,t,r,e,n);break e;case 14:t=xf(null,t,r,Ft(r.type,e),n);break e}throw Error(D(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ft(r,i),Cu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ft(r,i),wf(e,t,r,i,n);case 3:e:{if($m(t),e===null)throw Error(D(387));r=t.pendingProps,o=t.memoizedState,i=o.element,dm(e,t),Ls(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Gr(Error(D(423)),t),t=Sf(e,t,r,n,i);break e}else if(r!==i){i=Gr(Error(D(424)),t),t=Sf(e,t,r,n,i);break e}else for(xt=Bn(t.stateNode.containerInfo.firstChild),wt=t,Pe=!0,$t=null,n=mm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qr(),r===i){t=wn(e,t,n);break e}ot(e,t,r,n)}t=t.child}return t;case 5:return gm(t),e===null&&xu(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,hu(r,i)?s=null:o!==null&&hu(r,o)&&(t.flags|=32),zm(e,t),ot(e,t,s,n),t.child;case 6:return e===null&&xu(t),null;case 13:return Um(e,t,n);case 4:return jc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Yr(t,null,r,n):ot(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ft(r,i),yf(e,t,r,i,n);case 7:return ot(e,t,t.pendingProps,n),t.child;case 8:return ot(e,t,t.pendingProps.children,n),t.child;case 12:return ot(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,Ee(Rs,r._currentValue),r._currentValue=s,o!==null)if(Qt(o.value,s)){if(o.children===i.children&&!pt.current){t=wn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=hn(-1,n&-n),a.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?a.next=a:(a.next=f.next,f.next=a),u.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),wu(o.return,n,t),l.lanes|=n;break}a=a.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(D(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),wu(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ot(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,$r(t,n),i=It(i),r=r(i),t.flags|=1,ot(e,t,r,n),t.child;case 14:return r=t.type,i=Ft(r,t.pendingProps),i=Ft(r.type,i),xf(e,t,r,i,n);case 15:return Vm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ft(r,i),is(e,t),t.tag=1,ht(r)?(e=!0,Ps(t)):e=!1,$r(t,n),pm(t,r,i),bu(t,r,i,n),Eu(null,t,r,!0,e,n);case 19:return Bm(e,t,n);case 22:return Nm(e,t,n)}throw Error(D(156,t.tag))};function og(e,t){return Mh(e,t)}function Mx(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,n,r){return new Mx(e,t,n,r)}function $c(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Rx(e){if(typeof e=="function")return $c(e)?1:0;if(e!=null){if(e=e.$$typeof,e===sc)return 11;if(e===ac)return 14}return 2}function Yn(e,t){var n=e.alternate;return n===null?(n=Tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function as(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")$c(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Er:return lr(n.children,i,o,t);case oc:s=8,i|=8;break;case Ql:return e=Tt(12,n,t,i|2),e.elementType=Ql,e.lanes=o,e;case Yl:return e=Tt(13,n,t,i),e.elementType=Yl,e.lanes=o,e;case Kl:return e=Tt(19,n,t,i),e.elementType=Kl,e.lanes=o,e;case hh:return ga(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fh:s=10;break e;case ph:s=9;break e;case sc:s=11;break e;case ac:s=14;break e;case In:s=16,r=null;break e}throw Error(D(130,e==null?e:typeof e,""))}return t=Tt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function lr(e,t,n,r){return e=Tt(7,e,r,t),e.lanes=n,e}function ga(e,t,n,r){return e=Tt(22,e,r,t),e.elementType=hh,e.lanes=n,e.stateNode={isHidden:!1},e}function hl(e,t,n){return e=Tt(6,e,null,t),e.lanes=n,e}function ml(e,t,n){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ix(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ga(0),this.expirationTimes=Ga(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ga(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Uc(e,t,n,r,i,o,s,l,a){return e=new Ix(e,t,n,l,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Tt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ec(o),e}function Lx(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function sg(e){if(!e)return Gn;e=e._reactInternals;e:{if(gr(e)!==e||e.tag!==1)throw Error(D(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ht(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(D(171))}if(e.tag===1){var n=e.type;if(ht(n))return om(e,n,t)}return t}function ag(e,t,n,r,i,o,s,l,a){return e=Uc(n,r,!0,e,i,o,s,l,a),e.context=sg(null),n=e.current,r=at(),i=Qn(n),o=hn(r,i),o.callback=t??null,Hn(n,o,i),e.current.lanes=i,ao(e,i,r),mt(e,r),e}function va(e,t,n,r){var i=t.current,o=at(),s=Qn(i);return n=sg(n),t.context===null?t.context=n:t.pendingContext=n,t=hn(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Hn(i,t,s),e!==null&&(Ht(e,i,s,o),ts(e,i,s)),s}function Us(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Mf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Bc(e,t){Mf(e,t),(e=e.alternate)&&Mf(e,t)}function Dx(){return null}var lg=typeof reportError=="function"?reportError:function(e){console.error(e)};function Hc(e){this._internalRoot=e}ya.prototype.render=Hc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(D(409));va(e,t,null,null)};ya.prototype.unmount=Hc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pr(function(){va(null,e,null,null)}),t[yn]=null}};function ya(e){this._internalRoot=e}ya.prototype.unstable_scheduleHydration=function(e){if(e){var t=Vh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Dn.length&&t!==0&&t<Dn[n].priority;n++);Dn.splice(n,0,e),n===0&&zh(e)}};function Wc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Rf(){}function Ax(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Us(s);o.call(u)}}var s=ag(t,r,e,0,null,!1,!1,"",Rf);return e._reactRootContainer=s,e[yn]=s.current,Wi(e.nodeType===8?e.parentNode:e),pr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Us(a);l.call(u)}}var a=Uc(e,0,!1,null,null,!1,!1,"",Rf);return e._reactRootContainer=a,e[yn]=a.current,Wi(e.nodeType===8?e.parentNode:e),pr(function(){va(t,a,n,r)}),a}function wa(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var a=Us(s);l.call(a)}}va(t,s,e,i)}else s=Ax(n,t,e,i,r);return Us(s)}Ah=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ki(t.pendingLanes);n!==0&&(cc(t,n|1),mt(t,Ae()),!(pe&6)&&(Xr=Ae()+500,Jn()))}break;case 13:pr(function(){var r=xn(e,1);if(r!==null){var i=at();Ht(r,e,1,i)}}),Bc(e,1)}};dc=function(e){if(e.tag===13){var t=xn(e,134217728);if(t!==null){var n=at();Ht(t,e,134217728,n)}Bc(e,134217728)}};Fh=function(e){if(e.tag===13){var t=Qn(e),n=xn(e,t);if(n!==null){var r=at();Ht(n,e,t,r)}Bc(e,t)}};Vh=function(){return ye};Nh=function(e,t){var n=ye;try{return ye=e,t()}finally{ye=n}};iu=function(e,t,n){switch(t){case"input":if(ql(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ca(r);if(!i)throw Error(D(90));gh(r),ql(r,i)}}}break;case"textarea":yh(e,n);break;case"select":t=n.value,t!=null&&Fr(e,!!n.multiple,t,!1)}};Eh=Vc;jh=pr;var Fx={usingClientEntryPoint:!1,Events:[uo,Pr,ca,kh,Ch,Vc]},di={findFiberByHostInstance:nr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Vx={bundleType:di.bundleType,version:di.version,rendererPackageName:di.rendererPackageName,rendererConfig:di.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ph(e),e===null?null:e.stateNode},findFiberByHostInstance:di.findFiberByHostInstance||Dx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Do=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Do.isDisabled&&Do.supportsFiber)try{sa=Do.inject(Vx),nn=Do}catch{}}Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fx;Ct.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wc(t))throw Error(D(200));return Lx(e,t,null,n)};Ct.createRoot=function(e,t){if(!Wc(e))throw Error(D(299));var n=!1,r="",i=lg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Uc(e,1,!1,null,null,n,!1,r,i),e[yn]=t.current,Wi(e.nodeType===8?e.parentNode:e),new Hc(t)};Ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(D(188)):(e=Object.keys(e).join(","),Error(D(268,e)));return e=Ph(t),e=e===null?null:e.stateNode,e};Ct.flushSync=function(e){return pr(e)};Ct.hydrate=function(e,t,n){if(!xa(t))throw Error(D(200));return wa(null,e,t,!0,n)};Ct.hydrateRoot=function(e,t,n){if(!Wc(e))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=lg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=ag(t,null,e,1,n??null,i,!1,o,s),e[yn]=t.current,Wi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ya(t)};Ct.render=function(e,t,n){if(!xa(t))throw Error(D(200));return wa(null,e,t,!1,n)};Ct.unmountComponentAtNode=function(e){if(!xa(e))throw Error(D(40));return e._reactRootContainer?(pr(function(){wa(null,null,e,!1,function(){e._reactRootContainer=null,e[yn]=null})}),!0):!1};Ct.unstable_batchedUpdates=Vc;Ct.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!xa(n))throw Error(D(200));if(e==null||e._reactInternals===void 0)throw Error(D(38));return wa(e,t,n,!1,r)};Ct.version="18.2.0-next-9e3b772b8-20220608";function ug(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ug)}catch(e){console.error(e)}}ug(),ah.exports=Ct;var fo=ah.exports;const Nx=oo(fo);var If=fo;Hl.createRoot=If.createRoot,Hl.hydrateRoot=If.hydrateRoot;var cg={exports:{}};(function(e,t){(function(r,i){e.exports=i(M)})(hy,n=>(()=>{var r={"./node_modules/css-mediaquery/index.js":(l,a)=>{a.match=m,a.parse=v;var u=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,f=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,d=/^(?:(min|max)-)?(.+)/,g=/(em|rem|px|cm|mm|in|pt|pc)?$/,x=/(dpi|dpcm|dppx)?$/;function m(y,S){return v(y).some(function(k){var _=k.inverse,E=k.type==="all"||S.type===k.type;if(E&&_||!(E||_))return!1;var P=k.expressions.every(function(T){var I=T.feature,B=T.modifier,A=T.value,L=S[I];if(!L)return!1;switch(I){case"orientation":case"scan":return L.toLowerCase()===A.toLowerCase();case"width":case"height":case"device-width":case"device-height":A=h(A),L=h(L);break;case"resolution":A=p(A),L=p(L);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":A=w(A),L=w(L);break;case"grid":case"color":case"color-index":case"monochrome":A=parseInt(A,10)||1,L=parseInt(L,10)||0;break}switch(B){case"min":return L>=A;case"max":return L<=A;default:return L===A}});return P&&!_||!P&&_})}function v(y){return y.split(",").map(function(S){S=S.trim();var k=S.match(u),_=k[1],E=k[2],P=k[3]||"",T={};return T.inverse=!!_&&_.toLowerCase()==="not",T.type=E?E.toLowerCase():"all",P=P.match(/\([^\)]+\)/g)||[],T.expressions=P.map(function(I){var B=I.match(f),A=B[1].toLowerCase().match(d);return{modifier:A[1],feature:A[2],value:B[2]}}),T})}function w(y){var S=Number(y),k;return S||(k=y.match(/^(\d+)\s*\/\s*(\d+)$/),S=k[1]/k[2]),S}function p(y){var S=parseFloat(y),k=String(y).match(x)[1];switch(k){case"dpcm":return S/2.54;case"dppx":return S*96;default:return S}}function h(y){var S=parseFloat(y),k=String(y).match(g)[1];switch(k){case"em":return S*16;case"rem":return S*16;case"cm":return S*96/2.54;case"mm":return S*96/2.54/10;case"in":return S*96;case"pt":return S*72;case"pc":return S*72/12;default:return S}}},"./node_modules/hyphenate-style-name/index.js":(l,a,u)=>{u.r(a),u.d(a,{default:()=>v});var f=/[A-Z]/g,d=/^ms-/,g={};function x(w){return"-"+w.toLowerCase()}function m(w){if(g.hasOwnProperty(w))return g[w];var p=w.replace(f,x);return g[w]=d.test(p)?"-"+p:p}const v=m},"./node_modules/matchmediaquery/index.js":(l,a,u)=>{var f=u("./node_modules/css-mediaquery/index.js").match,d=typeof window<"u"?window.matchMedia:null;function g(m,v,w){var p=this;if(d&&!w){var h=d.call(window,m);this.matches=h.matches,this.media=h.media,h.addListener(k)}else this.matches=f(m,v),this.media=m;this.addListener=y,this.removeListener=S,this.dispose=_;function y(E){h&&h.addListener(E)}function S(E){h&&h.removeListener(E)}function k(E){p.matches=E.matches,p.media=E.media}function _(){h&&h.removeListener(k)}}function x(m,v,w){return new g(m,v,w)}l.exports=x},"./node_modules/object-assign/index.js":l=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var a=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;function d(x){if(x==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(x)}function g(){try{if(!Object.assign)return!1;var x=new String("abc");if(x[5]="de",Object.getOwnPropertyNames(x)[0]==="5")return!1;for(var m={},v=0;v<10;v++)m["_"+String.fromCharCode(v)]=v;var w=Object.getOwnPropertyNames(m).map(function(h){return m[h]});if(w.join("")!=="0123456789")return!1;var p={};return"abcdefghijklmnopqrst".split("").forEach(function(h){p[h]=h}),Object.keys(Object.assign({},p)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}l.exports=g()?Object.assign:function(x,m){for(var v,w=d(x),p,h=1;h<arguments.length;h++){v=Object(arguments[h]);for(var y in v)u.call(v,y)&&(w[y]=v[y]);if(a){p=a(v);for(var S=0;S<p.length;S++)f.call(v,p[S])&&(w[p[S]]=v[p[S]])}}return w}},"./node_modules/prop-types/checkPropTypes.js":(l,a,u)=>{var f=function(){};{var d=u("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),g={},x=u("./node_modules/prop-types/lib/has.js");f=function(v){var w="Warning: "+v;typeof console<"u"&&console.error(w);try{throw new Error(w)}catch{}}}function m(v,w,p,h,y){for(var S in v)if(x(v,S)){var k;try{if(typeof v[S]!="function"){var _=Error((h||"React class")+": "+p+" type `"+S+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof v[S]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw _.name="Invariant Violation",_}k=v[S](w,S,h,p,null,d)}catch(P){k=P}if(k&&!(k instanceof Error)&&f((h||"React class")+": type specification of "+p+" `"+S+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof k+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),k instanceof Error&&!(k.message in g)){g[k.message]=!0;var E=y?y():"";f("Failed "+p+" type: "+k.message+(E??""))}}}m.resetWarningCache=function(){g={}},l.exports=m},"./node_modules/prop-types/factoryWithTypeCheckers.js":(l,a,u)=>{var f=u("./node_modules/react-is/index.js"),d=u("./node_modules/object-assign/index.js"),g=u("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),x=u("./node_modules/prop-types/lib/has.js"),m=u("./node_modules/prop-types/checkPropTypes.js"),v=function(){};v=function(p){var h="Warning: "+p;typeof console<"u"&&console.error(h);try{throw new Error(h)}catch{}};function w(){return null}l.exports=function(p,h){var y=typeof Symbol=="function"&&Symbol.iterator,S="@@iterator";function k(F){var H=F&&(y&&F[y]||F[S]);if(typeof H=="function")return H}var _="<<anonymous>>",E={array:B("array"),bigint:B("bigint"),bool:B("boolean"),func:B("function"),number:B("number"),object:B("object"),string:B("string"),symbol:B("symbol"),any:A(),arrayOf:L,element:X(),elementType:Z(),instanceOf:ee,node:Y(),objectOf:V,oneOf:ve,oneOfType:Q,shape:ne,exact:je};function P(F,H){return F===H?F!==0||1/F===1/H:F!==F&&H!==H}function T(F,H){this.message=F,this.data=H&&typeof H=="object"?H:{},this.stack=""}T.prototype=Error.prototype;function I(F){var H={},ie=0;function oe(ae,se,le,fe,b,O,C){if(fe=fe||_,O=O||le,C!==g){if(h){var $=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw $.name="Invariant Violation",$}else if(typeof console<"u"){var z=fe+":"+le;!H[z]&&ie<3&&(v("You are manually calling a React.PropTypes validation function for the `"+O+"` prop on `"+fe+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),H[z]=!0,ie++)}}return se[le]==null?ae?se[le]===null?new T("The "+b+" `"+O+"` is marked as required "+("in `"+fe+"`, but its value is `null`.")):new T("The "+b+" `"+O+"` is marked as required in "+("`"+fe+"`, but its value is `undefined`.")):null:F(se,le,fe,b,O)}var te=oe.bind(null,!1);return te.isRequired=oe.bind(null,!0),te}function B(F){function H(ie,oe,te,ae,se,le){var fe=ie[oe],b=he(fe);if(b!==F){var O=Se(fe);return new T("Invalid "+ae+" `"+se+"` of type "+("`"+O+"` supplied to `"+te+"`, expected ")+("`"+F+"`."),{expectedType:F})}return null}return I(H)}function A(){return I(w)}function L(F){function H(ie,oe,te,ae,se){if(typeof F!="function")return new T("Property `"+se+"` of component `"+te+"` has invalid PropType notation inside arrayOf.");var le=ie[oe];if(!Array.isArray(le)){var fe=he(le);return new T("Invalid "+ae+" `"+se+"` of type "+("`"+fe+"` supplied to `"+te+"`, expected an array."))}for(var b=0;b<le.length;b++){var O=F(le,b,te,ae,se+"["+b+"]",g);if(O instanceof Error)return O}return null}return I(H)}function X(){function F(H,ie,oe,te,ae){var se=H[ie];if(!p(se)){var le=he(se);return new T("Invalid "+te+" `"+ae+"` of type "+("`"+le+"` supplied to `"+oe+"`, expected a single ReactElement."))}return null}return I(F)}function Z(){function F(H,ie,oe,te,ae){var se=H[ie];if(!f.isValidElementType(se)){var le=he(se);return new T("Invalid "+te+" `"+ae+"` of type "+("`"+le+"` supplied to `"+oe+"`, expected a single ReactElement type."))}return null}return I(F)}function ee(F){function H(ie,oe,te,ae,se){if(!(ie[oe]instanceof F)){var le=F.name||_,fe=vt(ie[oe]);return new T("Invalid "+ae+" `"+se+"` of type "+("`"+fe+"` supplied to `"+te+"`, expected ")+("instance of `"+le+"`."))}return null}return I(H)}function ve(F){if(!Array.isArray(F))return arguments.length>1?v("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):v("Invalid argument supplied to oneOf, expected an array."),w;function H(ie,oe,te,ae,se){for(var le=ie[oe],fe=0;fe<F.length;fe++)if(P(le,F[fe]))return null;var b=JSON.stringify(F,function(C,$){var z=Se($);return z==="symbol"?String($):$});return new T("Invalid "+ae+" `"+se+"` of value `"+String(le)+"` "+("supplied to `"+te+"`, expected one of "+b+"."))}return I(H)}function V(F){function H(ie,oe,te,ae,se){if(typeof F!="function")return new T("Property `"+se+"` of component `"+te+"` has invalid PropType notation inside objectOf.");var le=ie[oe],fe=he(le);if(fe!=="object")return new T("Invalid "+ae+" `"+se+"` of type "+("`"+fe+"` supplied to `"+te+"`, expected an object."));for(var b in le)if(x(le,b)){var O=F(le,b,te,ae,se+"."+b,g);if(O instanceof Error)return O}return null}return I(H)}function Q(F){if(!Array.isArray(F))return v("Invalid argument supplied to oneOfType, expected an instance of array."),w;for(var H=0;H<F.length;H++){var ie=F[H];if(typeof ie!="function")return v("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+Ze(ie)+" at index "+H+"."),w}function oe(te,ae,se,le,fe){for(var b=[],O=0;O<F.length;O++){var C=F[O],$=C(te,ae,se,le,fe,g);if($==null)return null;$.data&&x($.data,"expectedType")&&b.push($.data.expectedType)}var z=b.length>0?", expected one of type ["+b.join(", ")+"]":"";return new T("Invalid "+le+" `"+fe+"` supplied to "+("`"+se+"`"+z+"."))}return I(oe)}function Y(){function F(H,ie,oe,te,ae){return we(H[ie])?null:new T("Invalid "+te+" `"+ae+"` supplied to "+("`"+oe+"`, expected a ReactNode."))}return I(F)}function ce(F,H,ie,oe,te){return new T((F||"React class")+": "+H+" type `"+ie+"."+oe+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+te+"`.")}function ne(F){function H(ie,oe,te,ae,se){var le=ie[oe],fe=he(le);if(fe!=="object")return new T("Invalid "+ae+" `"+se+"` of type `"+fe+"` "+("supplied to `"+te+"`, expected `object`."));for(var b in F){var O=F[b];if(typeof O!="function")return ce(te,ae,se,b,Se(O));var C=O(le,b,te,ae,se+"."+b,g);if(C)return C}return null}return I(H)}function je(F){function H(ie,oe,te,ae,se){var le=ie[oe],fe=he(le);if(fe!=="object")return new T("Invalid "+ae+" `"+se+"` of type `"+fe+"` "+("supplied to `"+te+"`, expected `object`."));var b=d({},ie[oe],F);for(var O in b){var C=F[O];if(x(F,O)&&typeof C!="function")return ce(te,ae,se,O,Se(C));if(!C)return new T("Invalid "+ae+" `"+se+"` key `"+O+"` supplied to `"+te+"`.\nBad object: "+JSON.stringify(ie[oe],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(F),null,"  "));var $=C(le,O,te,ae,se+"."+O,g);if($)return $}return null}return I(H)}function we(F){switch(typeof F){case"number":case"string":case"undefined":return!0;case"boolean":return!F;case"object":if(Array.isArray(F))return F.every(we);if(F===null||p(F))return!0;var H=k(F);if(H){var ie=H.call(F),oe;if(H!==F.entries){for(;!(oe=ie.next()).done;)if(!we(oe.value))return!1}else for(;!(oe=ie.next()).done;){var te=oe.value;if(te&&!we(te[1]))return!1}}else return!1;return!0;default:return!1}}function $e(F,H){return F==="symbol"?!0:H?H["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&H instanceof Symbol:!1}function he(F){var H=typeof F;return Array.isArray(F)?"array":F instanceof RegExp?"object":$e(H,F)?"symbol":H}function Se(F){if(typeof F>"u"||F===null)return""+F;var H=he(F);if(H==="object"){if(F instanceof Date)return"date";if(F instanceof RegExp)return"regexp"}return H}function Ze(F){var H=Se(F);switch(H){case"array":case"object":return"an "+H;case"boolean":case"date":case"regexp":return"a "+H;default:return H}}function vt(F){return!F.constructor||!F.constructor.name?_:F.constructor.name}return E.checkPropTypes=m,E.resetWarningCache=m.resetWarningCache,E.PropTypes=E,E}},"./node_modules/prop-types/index.js":(l,a,u)=>{{var f=u("./node_modules/react-is/index.js"),d=!0;l.exports=u("./node_modules/prop-types/factoryWithTypeCheckers.js")(f.isElement,d)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":l=>{var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";l.exports=a},"./node_modules/prop-types/lib/has.js":l=>{l.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(l,a)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var u=typeof Symbol=="function"&&Symbol.for,f=u?Symbol.for("react.element"):60103,d=u?Symbol.for("react.portal"):60106,g=u?Symbol.for("react.fragment"):60107,x=u?Symbol.for("react.strict_mode"):60108,m=u?Symbol.for("react.profiler"):60114,v=u?Symbol.for("react.provider"):60109,w=u?Symbol.for("react.context"):60110,p=u?Symbol.for("react.async_mode"):60111,h=u?Symbol.for("react.concurrent_mode"):60111,y=u?Symbol.for("react.forward_ref"):60112,S=u?Symbol.for("react.suspense"):60113,k=u?Symbol.for("react.suspense_list"):60120,_=u?Symbol.for("react.memo"):60115,E=u?Symbol.for("react.lazy"):60116,P=u?Symbol.for("react.block"):60121,T=u?Symbol.for("react.fundamental"):60117,I=u?Symbol.for("react.responder"):60118,B=u?Symbol.for("react.scope"):60119;function A(C){return typeof C=="string"||typeof C=="function"||C===g||C===h||C===m||C===x||C===S||C===k||typeof C=="object"&&C!==null&&(C.$$typeof===E||C.$$typeof===_||C.$$typeof===v||C.$$typeof===w||C.$$typeof===y||C.$$typeof===T||C.$$typeof===I||C.$$typeof===B||C.$$typeof===P)}function L(C){if(typeof C=="object"&&C!==null){var $=C.$$typeof;switch($){case f:var z=C.type;switch(z){case p:case h:case g:case m:case x:case S:return z;default:var N=z&&z.$$typeof;switch(N){case w:case y:case E:case _:case v:return N;default:return $}}case d:return $}}}var X=p,Z=h,ee=w,ve=v,V=f,Q=y,Y=g,ce=E,ne=_,je=d,we=m,$e=x,he=S,Se=!1;function Ze(C){return Se||(Se=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),vt(C)||L(C)===p}function vt(C){return L(C)===h}function F(C){return L(C)===w}function H(C){return L(C)===v}function ie(C){return typeof C=="object"&&C!==null&&C.$$typeof===f}function oe(C){return L(C)===y}function te(C){return L(C)===g}function ae(C){return L(C)===E}function se(C){return L(C)===_}function le(C){return L(C)===d}function fe(C){return L(C)===m}function b(C){return L(C)===x}function O(C){return L(C)===S}a.AsyncMode=X,a.ConcurrentMode=Z,a.ContextConsumer=ee,a.ContextProvider=ve,a.Element=V,a.ForwardRef=Q,a.Fragment=Y,a.Lazy=ce,a.Memo=ne,a.Portal=je,a.Profiler=we,a.StrictMode=$e,a.Suspense=he,a.isAsyncMode=Ze,a.isConcurrentMode=vt,a.isContextConsumer=F,a.isContextProvider=H,a.isElement=ie,a.isForwardRef=oe,a.isFragment=te,a.isLazy=ae,a.isMemo=se,a.isPortal=le,a.isProfiler=fe,a.isStrictMode=b,a.isSuspense=O,a.isValidElementType=A,a.typeOf=L})()},"./node_modules/react-is/index.js":(l,a,u)=>{l.exports=u("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(l,a,u)=>{u.r(a),u.d(a,{shallowEqualArrays:()=>d,shallowEqualObjects:()=>f});function f(g,x){if(g===x)return!0;if(!g||!x)return!1;var m=Object.keys(g),v=Object.keys(x),w=m.length;if(v.length!==w)return!1;for(var p=0;p<w;p++){var h=m[p];if(g[h]!==x[h]||!Object.prototype.hasOwnProperty.call(x,h))return!1}return!0}function d(g,x){if(g===x)return!0;if(!g||!x)return!1;var m=g.length;if(x.length!==m)return!1;for(var v=0;v<m;v++)if(g[v]!==x[v])return!1;return!0}},"./src/Component.ts":function(l,a,u){var f=this&&this.__rest||function(m,v){var w={};for(var p in m)Object.prototype.hasOwnProperty.call(m,p)&&v.indexOf(p)<0&&(w[p]=m[p]);if(m!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,p=Object.getOwnPropertySymbols(m);h<p.length;h++)v.indexOf(p[h])<0&&Object.prototype.propertyIsEnumerable.call(m,p[h])&&(w[p[h]]=m[p[h]]);return w},d=this&&this.__importDefault||function(m){return m&&m.__esModule?m:{default:m}};Object.defineProperty(a,"__esModule",{value:!0});var g=d(u("./src/useMediaQuery.ts")),x=function(m){var v=m.children,w=m.device,p=m.onChange,h=f(m,["children","device","onChange"]),y=(0,g.default)(h,w,p);return typeof v=="function"?v(y):y?v:null};a.default=x},"./src/Context.ts":(l,a,u)=>{Object.defineProperty(a,"__esModule",{value:!0});var f=u("react"),d=(0,f.createContext)(void 0);a.default=d},"./src/index.ts":function(l,a,u){var f=this&&this.__importDefault||function(v){return v&&v.__esModule?v:{default:v}};Object.defineProperty(a,"__esModule",{value:!0}),a.Context=a.toQuery=a.useMediaQuery=a.default=void 0;var d=f(u("./src/useMediaQuery.ts"));a.useMediaQuery=d.default;var g=f(u("./src/Component.ts"));a.default=g.default;var x=f(u("./src/toQuery.ts"));a.toQuery=x.default;var m=f(u("./src/Context.ts"));a.Context=m.default},"./src/mediaQuery.ts":function(l,a,u){var f=this&&this.__assign||function(){return f=Object.assign||function(S){for(var k,_=1,E=arguments.length;_<E;_++){k=arguments[_];for(var P in k)Object.prototype.hasOwnProperty.call(k,P)&&(S[P]=k[P])}return S},f.apply(this,arguments)},d=this&&this.__rest||function(S,k){var _={};for(var E in S)Object.prototype.hasOwnProperty.call(S,E)&&k.indexOf(E)<0&&(_[E]=S[E]);if(S!=null&&typeof Object.getOwnPropertySymbols=="function")for(var P=0,E=Object.getOwnPropertySymbols(S);P<E.length;P++)k.indexOf(E[P])<0&&Object.prototype.propertyIsEnumerable.call(S,E[P])&&(_[E[P]]=S[E[P]]);return _},g=this&&this.__importDefault||function(S){return S&&S.__esModule?S:{default:S}};Object.defineProperty(a,"__esModule",{value:!0});var x=g(u("./node_modules/prop-types/index.js")),m=x.default.oneOfType([x.default.string,x.default.number]),v={all:x.default.bool,grid:x.default.bool,aural:x.default.bool,braille:x.default.bool,handheld:x.default.bool,print:x.default.bool,projection:x.default.bool,screen:x.default.bool,tty:x.default.bool,tv:x.default.bool,embossed:x.default.bool},w={orientation:x.default.oneOf(["portrait","landscape"]),scan:x.default.oneOf(["progressive","interlace"]),aspectRatio:x.default.string,deviceAspectRatio:x.default.string,height:m,deviceHeight:m,width:m,deviceWidth:m,color:x.default.bool,colorIndex:x.default.bool,monochrome:x.default.bool,resolution:m,type:Object.keys(v)};w.type;var p=d(w,["type"]),h=f({minAspectRatio:x.default.string,maxAspectRatio:x.default.string,minDeviceAspectRatio:x.default.string,maxDeviceAspectRatio:x.default.string,minHeight:m,maxHeight:m,minDeviceHeight:m,maxDeviceHeight:m,minWidth:m,maxWidth:m,minDeviceWidth:m,maxDeviceWidth:m,minColor:x.default.number,maxColor:x.default.number,minColorIndex:x.default.number,maxColorIndex:x.default.number,minMonochrome:x.default.number,maxMonochrome:x.default.number,minResolution:m,maxResolution:m},p),y=f(f({},v),h);a.default={all:y,types:v,matchers:w,features:h}},"./src/toQuery.ts":function(l,a,u){var f=this&&this.__importDefault||function(p){return p&&p.__esModule?p:{default:p}};Object.defineProperty(a,"__esModule",{value:!0});var d=f(u("./node_modules/hyphenate-style-name/index.js")),g=f(u("./src/mediaQuery.ts")),x=function(p){return"not ".concat(p)},m=function(p,h){var y=(0,d.default)(p);return typeof h=="number"&&(h="".concat(h,"px")),h===!0?y:h===!1?x(y):"(".concat(y,": ").concat(h,")")},v=function(p){return p.join(" and ")},w=function(p){var h=[];return Object.keys(g.default.all).forEach(function(y){var S=p[y];S!=null&&h.push(m(y,S))}),v(h)};a.default=w},"./src/useMediaQuery.ts":function(l,a,u){var f=this&&this.__importDefault||function(T){return T&&T.__esModule?T:{default:T}};Object.defineProperty(a,"__esModule",{value:!0});var d=u("react"),g=f(u("./node_modules/matchmediaquery/index.js")),x=f(u("./node_modules/hyphenate-style-name/index.js")),m=u("./node_modules/shallow-equal/dist/index.esm.js"),v=f(u("./src/toQuery.ts")),w=f(u("./src/Context.ts")),p=function(T){return T.query||(0,v.default)(T)},h=function(T){if(T){var I=Object.keys(T);return I.reduce(function(B,A){return B[(0,x.default)(A)]=T[A],B},{})}},y=function(){var T=(0,d.useRef)(!1);return(0,d.useEffect)(function(){T.current=!0},[]),T.current},S=function(T){var I=(0,d.useContext)(w.default),B=function(){return h(T)||h(I)},A=(0,d.useState)(B),L=A[0],X=A[1];return(0,d.useEffect)(function(){var Z=B();(0,m.shallowEqualObjects)(L,Z)||X(Z)},[T,I]),L},k=function(T){var I=function(){return p(T)},B=(0,d.useState)(I),A=B[0],L=B[1];return(0,d.useEffect)(function(){var X=I();A!==X&&L(X)},[T]),A},_=function(T,I){var B=function(){return(0,g.default)(T,I||{},!!I)},A=(0,d.useState)(B),L=A[0],X=A[1],Z=y();return(0,d.useEffect)(function(){if(Z){var ee=B();return X(ee),function(){ee&&ee.dispose()}}},[T,I]),L},E=function(T){var I=(0,d.useState)(T.matches),B=I[0],A=I[1];return(0,d.useEffect)(function(){var L=function(X){A(X.matches)};return T.addListener(L),A(T.matches),function(){T.removeListener(L)}},[T]),B},P=function(T,I,B){var A=S(I),L=k(T);if(!L)throw new Error("Invalid or missing MediaQuery!");var X=_(L,A),Z=E(X),ee=y();return(0,d.useEffect)(function(){ee&&B&&B(Z)},[Z]),(0,d.useEffect)(function(){return function(){X&&X.dispose()}},[]),Z};a.default=P},react:l=>{l.exports=n}},i={};function o(l){var a=i[l];if(a!==void 0)return a.exports;var u=i[l]={exports:{}};return r[l].call(u.exports,u,u.exports,o),u.exports}o.d=(l,a)=>{for(var u in a)o.o(a,u)&&!o.o(l,u)&&Object.defineProperty(l,u,{enumerable:!0,get:a[u]})},o.o=(l,a)=>Object.prototype.hasOwnProperty.call(l,a),o.r=l=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})};var s=o("./src/index.ts");return s})())})(cg);var or=cg.exports;const Bs=oo(or),zx="/healthy-management-project/assets/olga_picture1x-48yp0Cvc.webp",$x="/healthy-management-project/assets/olga_picture@2x-dFelWgxd.jpg",Ux="/healthy-management-project/assets/olga_picture1x-ohcXIDw6.jpg",Bx="/healthy-management-project/assets/mob_olga_picture@2x-jz3O2U-O.jpg",Hx="/healthy-management-project/assets/mob_olga_picture1x-PQXysebb.jpg",Wx="/healthy-management-project/assets/mob_olga_picture1x-YL2VUwPK.webp",re="/healthy-management-project/assets/sprite-gBYbMuxV.svg";function q(){return q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q.apply(this,arguments)}function dg(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Qx=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Yx=dg(function(e){return Qx.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function Kx(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Gx(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Xx=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Gx(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=Kx(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),nt="-ms-",Hs="-moz-",me="-webkit-",fg="comm",Qc="rule",Yc="decl",qx="@import",pg="@keyframes",Jx="@layer",Zx=Math.abs,Sa=String.fromCharCode,e1=Object.assign;function t1(e,t){return Xe(e,0)^45?(((t<<2^Xe(e,0))<<2^Xe(e,1))<<2^Xe(e,2))<<2^Xe(e,3):0}function hg(e){return e.trim()}function n1(e,t){return(e=t.exec(e))?e[0]:e}function ge(e,t,n){return e.replace(t,n)}function Fu(e,t){return e.indexOf(t)}function Xe(e,t){return e.charCodeAt(t)|0}function eo(e,t,n){return e.slice(t,n)}function Xt(e){return e.length}function Kc(e){return e.length}function Ao(e,t){return t.push(e),e}function r1(e,t){return e.map(t).join("")}var ba=1,qr=1,mg=0,gt=0,Ve=0,ni="";function ka(e,t,n,r,i,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:ba,column:qr,length:s,return:""}}function fi(e,t){return e1(ka("",null,null,"",null,null,0),e,{length:-e.length},t)}function i1(){return Ve}function o1(){return Ve=gt>0?Xe(ni,--gt):0,qr--,Ve===10&&(qr=1,ba--),Ve}function St(){return Ve=gt<mg?Xe(ni,gt++):0,qr++,Ve===10&&(qr=1,ba++),Ve}function on(){return Xe(ni,gt)}function ls(){return gt}function po(e,t){return eo(ni,e,t)}function to(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function gg(e){return ba=qr=1,mg=Xt(ni=e),gt=0,[]}function vg(e){return ni="",e}function us(e){return hg(po(gt-1,Vu(e===91?e+2:e===40?e+1:e)))}function s1(e){for(;(Ve=on())&&Ve<33;)St();return to(e)>2||to(Ve)>3?"":" "}function a1(e,t){for(;--t&&St()&&!(Ve<48||Ve>102||Ve>57&&Ve<65||Ve>70&&Ve<97););return po(e,ls()+(t<6&&on()==32&&St()==32))}function Vu(e){for(;St();)switch(Ve){case e:return gt;case 34:case 39:e!==34&&e!==39&&Vu(Ve);break;case 40:e===41&&Vu(e);break;case 92:St();break}return gt}function l1(e,t){for(;St()&&e+Ve!==57;)if(e+Ve===84&&on()===47)break;return"/*"+po(t,gt-1)+"*"+Sa(e===47?e:St())}function u1(e){for(;!to(on());)St();return po(e,gt)}function c1(e){return vg(cs("",null,null,null,[""],e=gg(e),0,[0],e))}function cs(e,t,n,r,i,o,s,l,a){for(var u=0,f=0,d=s,g=0,x=0,m=0,v=1,w=1,p=1,h=0,y="",S=i,k=o,_=r,E=y;w;)switch(m=h,h=St()){case 40:if(m!=108&&Xe(E,d-1)==58){Fu(E+=ge(us(h),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:E+=us(h);break;case 9:case 10:case 13:case 32:E+=s1(m);break;case 92:E+=a1(ls()-1,7);continue;case 47:switch(on()){case 42:case 47:Ao(d1(l1(St(),ls()),t,n),a);break;default:E+="/"}break;case 123*v:l[u++]=Xt(E)*p;case 125*v:case 59:case 0:switch(h){case 0:case 125:w=0;case 59+f:p==-1&&(E=ge(E,/\f/g,"")),x>0&&Xt(E)-d&&Ao(x>32?Df(E+";",r,n,d-1):Df(ge(E," ","")+";",r,n,d-2),a);break;case 59:E+=";";default:if(Ao(_=Lf(E,t,n,u,f,i,l,y,S=[],k=[],d),o),h===123)if(f===0)cs(E,t,_,_,S,o,d,l,k);else switch(g===99&&Xe(E,3)===110?100:g){case 100:case 108:case 109:case 115:cs(e,_,_,r&&Ao(Lf(e,_,_,0,0,i,l,y,i,S=[],d),k),i,k,d,l,r?S:k);break;default:cs(E,_,_,_,[""],k,0,l,k)}}u=f=x=0,v=p=1,y=E="",d=s;break;case 58:d=1+Xt(E),x=m;default:if(v<1){if(h==123)--v;else if(h==125&&v++==0&&o1()==125)continue}switch(E+=Sa(h),h*v){case 38:p=f>0?1:(E+="\f",-1);break;case 44:l[u++]=(Xt(E)-1)*p,p=1;break;case 64:on()===45&&(E+=us(St())),g=on(),f=d=Xt(y=E+=u1(ls())),h++;break;case 45:m===45&&Xt(E)==2&&(v=0)}}return o}function Lf(e,t,n,r,i,o,s,l,a,u,f){for(var d=i-1,g=i===0?o:[""],x=Kc(g),m=0,v=0,w=0;m<r;++m)for(var p=0,h=eo(e,d+1,d=Zx(v=s[m])),y=e;p<x;++p)(y=hg(v>0?g[p]+" "+h:ge(h,/&\f/g,g[p])))&&(a[w++]=y);return ka(e,t,n,i===0?Qc:l,a,u,f)}function d1(e,t,n){return ka(e,t,n,fg,Sa(i1()),eo(e,2,-2),0)}function Df(e,t,n,r){return ka(e,t,n,Yc,eo(e,0,r),eo(e,r+1,-1),r)}function Br(e,t){for(var n="",r=Kc(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function f1(e,t,n,r){switch(e.type){case Jx:if(e.children.length)break;case qx:case Yc:return e.return=e.return||e.value;case fg:return"";case pg:return e.return=e.value+"{"+Br(e.children,r)+"}";case Qc:e.value=e.props.join(",")}return Xt(n=Br(e.children,r))?e.return=e.value+"{"+n+"}":""}function p1(e){var t=Kc(e);return function(n,r,i,o){for(var s="",l=0;l<t;l++)s+=e[l](n,r,i,o)||"";return s}}function h1(e){return function(t){t.root||(t=t.return)&&e(t)}}var m1=function(t,n,r){for(var i=0,o=0;i=o,o=on(),i===38&&o===12&&(n[r]=1),!to(o);)St();return po(t,gt)},g1=function(t,n){var r=-1,i=44;do switch(to(i)){case 0:i===38&&on()===12&&(n[r]=1),t[r]+=m1(gt-1,n,r);break;case 2:t[r]+=us(i);break;case 4:if(i===44){t[++r]=on()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Sa(i)}while(i=St());return t},v1=function(t,n){return vg(g1(gg(t),n))},Af=new WeakMap,y1=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Af.get(r))&&!i){Af.set(t,!0);for(var o=[],s=v1(n,o),l=r.props,a=0,u=0;a<s.length;a++)for(var f=0;f<l.length;f++,u++)t.props[u]=o[a]?s[a].replace(/&\f/g,l[f]):l[f]+" "+s[a]}}},x1=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function yg(e,t){switch(t1(e,t)){case 5103:return me+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return me+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return me+e+Hs+e+nt+e+e;case 6828:case 4268:return me+e+nt+e+e;case 6165:return me+e+nt+"flex-"+e+e;case 5187:return me+e+ge(e,/(\w+).+(:[^]+)/,me+"box-$1$2"+nt+"flex-$1$2")+e;case 5443:return me+e+nt+"flex-item-"+ge(e,/flex-|-self/,"")+e;case 4675:return me+e+nt+"flex-line-pack"+ge(e,/align-content|flex-|-self/,"")+e;case 5548:return me+e+nt+ge(e,"shrink","negative")+e;case 5292:return me+e+nt+ge(e,"basis","preferred-size")+e;case 6060:return me+"box-"+ge(e,"-grow","")+me+e+nt+ge(e,"grow","positive")+e;case 4554:return me+ge(e,/([^-])(transform)/g,"$1"+me+"$2")+e;case 6187:return ge(ge(ge(e,/(zoom-|grab)/,me+"$1"),/(image-set)/,me+"$1"),e,"")+e;case 5495:case 3959:return ge(e,/(image-set\([^]*)/,me+"$1$`$1");case 4968:return ge(ge(e,/(.+:)(flex-)?(.*)/,me+"box-pack:$3"+nt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+me+e+e;case 4095:case 3583:case 4068:case 2532:return ge(e,/(.+)-inline(.+)/,me+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xt(e)-1-t>6)switch(Xe(e,t+1)){case 109:if(Xe(e,t+4)!==45)break;case 102:return ge(e,/(.+:)(.+)-([^]+)/,"$1"+me+"$2-$3$1"+Hs+(Xe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Fu(e,"stretch")?yg(ge(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Xe(e,t+1)!==115)break;case 6444:switch(Xe(e,Xt(e)-3-(~Fu(e,"!important")&&10))){case 107:return ge(e,":",":"+me)+e;case 101:return ge(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+me+(Xe(e,14)===45?"inline-":"")+"box$3$1"+me+"$2$3$1"+nt+"$2box$3")+e}break;case 5936:switch(Xe(e,t+11)){case 114:return me+e+nt+ge(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return me+e+nt+ge(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return me+e+nt+ge(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return me+e+nt+e+e}return e}var w1=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Yc:t.return=yg(t.value,t.length);break;case pg:return Br([fi(t,{value:ge(t.value,"@","@"+me)})],i);case Qc:if(t.length)return r1(t.props,function(o){switch(n1(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Br([fi(t,{props:[ge(o,/:(read-\w+)/,":"+Hs+"$1")]})],i);case"::placeholder":return Br([fi(t,{props:[ge(o,/:(plac\w+)/,":"+me+"input-$1")]}),fi(t,{props:[ge(o,/:(plac\w+)/,":"+Hs+"$1")]}),fi(t,{props:[ge(o,/:(plac\w+)/,nt+"input-$1")]})],i)}return""})}},S1=[w1],b1=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var w=v.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=t.stylisPlugins||S1,o={},s,l=[];s=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var w=v.getAttribute("data-emotion").split(" "),p=1;p<w.length;p++)o[w[p]]=!0;l.push(v)});var a,u=[y1,x1];{var f,d=[f1,h1(function(v){f.insert(v)})],g=p1(u.concat(i,d)),x=function(w){return Br(c1(w),g)};a=function(w,p,h,y){f=h,x(w?w+"{"+p.styles+"}":p.styles),y&&(m.inserted[p.name]=!0)}}var m={key:n,sheet:new Xx({key:n,container:s,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:a};return m.sheet.hydrate(l),m},xg={exports:{}},xe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ye=typeof Symbol=="function"&&Symbol.for,Gc=Ye?Symbol.for("react.element"):60103,Xc=Ye?Symbol.for("react.portal"):60106,Ca=Ye?Symbol.for("react.fragment"):60107,Ea=Ye?Symbol.for("react.strict_mode"):60108,ja=Ye?Symbol.for("react.profiler"):60114,Oa=Ye?Symbol.for("react.provider"):60109,_a=Ye?Symbol.for("react.context"):60110,qc=Ye?Symbol.for("react.async_mode"):60111,Pa=Ye?Symbol.for("react.concurrent_mode"):60111,Ta=Ye?Symbol.for("react.forward_ref"):60112,Ma=Ye?Symbol.for("react.suspense"):60113,k1=Ye?Symbol.for("react.suspense_list"):60120,Ra=Ye?Symbol.for("react.memo"):60115,Ia=Ye?Symbol.for("react.lazy"):60116,C1=Ye?Symbol.for("react.block"):60121,E1=Ye?Symbol.for("react.fundamental"):60117,j1=Ye?Symbol.for("react.responder"):60118,O1=Ye?Symbol.for("react.scope"):60119;function jt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Gc:switch(e=e.type,e){case qc:case Pa:case Ca:case ja:case Ea:case Ma:return e;default:switch(e=e&&e.$$typeof,e){case _a:case Ta:case Ia:case Ra:case Oa:return e;default:return t}}case Xc:return t}}}function wg(e){return jt(e)===Pa}xe.AsyncMode=qc;xe.ConcurrentMode=Pa;xe.ContextConsumer=_a;xe.ContextProvider=Oa;xe.Element=Gc;xe.ForwardRef=Ta;xe.Fragment=Ca;xe.Lazy=Ia;xe.Memo=Ra;xe.Portal=Xc;xe.Profiler=ja;xe.StrictMode=Ea;xe.Suspense=Ma;xe.isAsyncMode=function(e){return wg(e)||jt(e)===qc};xe.isConcurrentMode=wg;xe.isContextConsumer=function(e){return jt(e)===_a};xe.isContextProvider=function(e){return jt(e)===Oa};xe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gc};xe.isForwardRef=function(e){return jt(e)===Ta};xe.isFragment=function(e){return jt(e)===Ca};xe.isLazy=function(e){return jt(e)===Ia};xe.isMemo=function(e){return jt(e)===Ra};xe.isPortal=function(e){return jt(e)===Xc};xe.isProfiler=function(e){return jt(e)===ja};xe.isStrictMode=function(e){return jt(e)===Ea};xe.isSuspense=function(e){return jt(e)===Ma};xe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ca||e===Pa||e===ja||e===Ea||e===Ma||e===k1||typeof e=="object"&&e!==null&&(e.$$typeof===Ia||e.$$typeof===Ra||e.$$typeof===Oa||e.$$typeof===_a||e.$$typeof===Ta||e.$$typeof===E1||e.$$typeof===j1||e.$$typeof===O1||e.$$typeof===C1)};xe.typeOf=jt;xg.exports=xe;var _1=xg.exports,Sg=_1,P1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},T1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},bg={};bg[Sg.ForwardRef]=P1;bg[Sg.Memo]=T1;var M1=!0;function kg(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Jc=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||M1===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},Cg=function(t,n,r){Jc(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function R1(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var I1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},L1=/[A-Z]|^ms/g,D1=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Eg=function(t){return t.charCodeAt(1)===45},Ff=function(t){return t!=null&&typeof t!="boolean"},gl=dg(function(e){return Eg(e)?e:e.replace(L1,"-$&").toLowerCase()}),Vf=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(D1,function(r,i,o){return qt={name:i,styles:o,next:qt},i})}return I1[t]!==1&&!Eg(t)&&typeof n=="number"&&n!==0?n+"px":n};function no(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return qt={name:n.name,styles:n.styles,next:qt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)qt={name:r.name,styles:r.styles,next:qt},r=r.next;var i=n.styles+";";return i}return A1(e,t,n)}case"function":{if(e!==void 0){var o=qt,s=n(e);return qt=o,no(e,t,s)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function A1(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=no(e,t,n[i])+";";else for(var o in n){var s=n[o];if(typeof s!="object")t!=null&&t[s]!==void 0?r+=o+"{"+t[s]+"}":Ff(s)&&(r+=gl(o)+":"+Vf(o,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(t==null||t[s[0]]===void 0))for(var l=0;l<s.length;l++)Ff(s[l])&&(r+=gl(o)+":"+Vf(o,s[l])+";");else{var a=no(e,t,s);switch(o){case"animation":case"animationName":{r+=gl(o)+":"+a+";";break}default:r+=o+"{"+a+"}"}}}return r}var Nf=/label:\s*([^\s;\n{]+)\s*(;|$)/g,qt,Zc=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";qt=void 0;var s=t[0];s==null||s.raw===void 0?(i=!1,o+=no(r,n,s)):o+=s[0];for(var l=1;l<t.length;l++)o+=no(r,n,t[l]),i&&(o+=s[l]);Nf.lastIndex=0;for(var a="",u;(u=Nf.exec(o))!==null;)a+="-"+u[1];var f=R1(o)+a;return{name:f,styles:o,next:qt}},F1=function(t){return t()},V1=jd.useInsertionEffect?jd.useInsertionEffect:!1,jg=V1||F1,ed={}.hasOwnProperty,Og=M.createContext(typeof HTMLElement<"u"?b1({key:"css"}):null);Og.Provider;var _g=function(t){return M.forwardRef(function(n,r){var i=M.useContext(Og);return t(n,i,r)})},Pg=M.createContext({}),Nu="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",N1=function(t,n){var r={};for(var i in n)ed.call(n,i)&&(r[i]=n[i]);return r[Nu]=t,r},z1=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Jc(n,r,i),jg(function(){return Cg(n,r,i)}),null},$1=_g(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Nu],o=[r],s="";typeof e.className=="string"?s=kg(t.registered,o,e.className):e.className!=null&&(s=e.className+" ");var l=Zc(o,void 0,M.useContext(Pg));s+=t.key+"-"+l.name;var a={};for(var u in e)ed.call(e,u)&&u!=="css"&&u!==Nu&&(a[u]=e[u]);return a.ref=n,a.className=s,M.createElement(M.Fragment,null,M.createElement(z1,{cache:t,serialized:l,isStringTag:typeof i=="string"}),M.createElement(i,a))}),U1=$1,K=function(t,n){var r=arguments;if(n==null||!ed.call(n,"css"))return M.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=U1,o[1]=N1(t,n);for(var s=2;s<i;s++)o[s]=r[s];return M.createElement.apply(null,o)};function td(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Zc(t)}var B1=function(){var t=td.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},H1=Yx,W1=function(t){return t!=="theme"},zf=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?H1:W1},$f=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(s){return t.__emotion_forwardProp(s)&&o(s)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},Q1=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Jc(n,r,i),jg(function(){return Cg(n,r,i)}),null},Y1=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,s;n!==void 0&&(o=n.label,s=n.target);var l=$f(t,n,r),a=l||zf(i),u=!a("as");return function(){var f=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&d.push("label:"+o+";"),f[0]==null||f[0].raw===void 0)d.push.apply(d,f);else{d.push(f[0][0]);for(var g=f.length,x=1;x<g;x++)d.push(f[x],f[0][x])}var m=_g(function(v,w,p){var h=u&&v.as||i,y="",S=[],k=v;if(v.theme==null){k={};for(var _ in v)k[_]=v[_];k.theme=M.useContext(Pg)}typeof v.className=="string"?y=kg(w.registered,S,v.className):v.className!=null&&(y=v.className+" ");var E=Zc(d.concat(S),w.registered,k);y+=w.key+"-"+E.name,s!==void 0&&(y+=" "+s);var P=u&&l===void 0?zf(h):a,T={};for(var I in v)u&&I==="as"||P(I)&&(T[I]=v[I]);return T.className=y,T.ref=p,M.createElement(M.Fragment,null,M.createElement(Q1,{cache:w,serialized:E,isStringTag:typeof h=="string"}),M.createElement(h,T))});return m.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",m.defaultProps=t.defaultProps,m.__emotion_real=m,m.__emotion_base=i,m.__emotion_styles=d,m.__emotion_forwardProp=l,Object.defineProperty(m,"toString",{value:function(){return"."+s}}),m.withComponent=function(v,w){return e(v,q({},n,w,{shouldForwardProp:$f(m,w,!0)})).apply(void 0,d)},m}},K1=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],j=Y1.bind();K1.forEach(function(e){j[e]=j(e)});const G1=j.section`
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
`,X1=j.h2`
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
`,q1=j.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 24px;
  }
`,J1=j.div`
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
`,Z1=j.h3`
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
`,ew=j.p`
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
`,Zn=j.li`
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
`,tw=j.ul`
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
`,vl=j.a`
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
`,yl=j.svg`
  margin-left: 10px;
`,nw=j.div`
  // width: calc((100% - 24px) / 2);
  max-width: 327px;
  border-radius: 16px;

  @media screen and (min-width: 768px) {
    // width: calc((100% - 24px) / 2);
    max-width: 828px;
    border-radius: 16px;
  }
`,rw=()=>c.jsx(G1,{className:"container",children:c.jsxs("div",{children:[c.jsx(X1,{children:"Про мене"}),c.jsxs(q1,{children:[c.jsxs(nw,{children:[c.jsx(Bs,{maxWidth:767,children:c.jsx("img",{srcSet:`${Bx} 2x, ${Hx} 1x`,sizes:"(max-width: 767px) 100vw",src:Wx,alt:"Ольга Поліщук"})}),c.jsx(Bs,{minWidth:768,children:c.jsx("img",{srcSet:`${$x} 2x, ${Ux} 1x`,sizes:"(min-width: 768px) 100vw",src:zx,alt:"Ольга Поліщук"})})]}),c.jsxs(J1,{children:[c.jsx(Z1,{children:"Ольга Поліщук"}),c.jsx(ew,{children:"CEO and Founder студії стратегічного розвитку"}),c.jsxs("ul",{children:[c.jsx(Zn,{children:"MBA Healthcare management"}),c.jsx(Zn,{children:"Викладачка медичного маркетингу Бізнес-школа УКУ (LvBS)"}),c.jsx(Zn,{children:`Експертка в "Центр Розвитку Громадського Здоров'я УКУ"`}),c.jsx(Zn,{children:"Бізнес-консультантка, стратег з медичного маркетингу"}),c.jsx(Zn,{children:'Керівниця проєкту "Стетоскоп" - телеграм канал про медичний менеджмент та маркетингу'}),c.jsx(Zn,{children:"Більше 18 років досвіду в маркетингу та комунікаціях, з них більше 10 років досвіду в медичному та фармацевтичному бізнесі на керівних посадах"}),c.jsx(Zn,{children:"Використання принципів доказової медицини"})]}),c.jsxs(tw,{children:[c.jsx("li",{children:c.jsxs(vl,{href:"https://www.linkedin.com/in/olga-polishchuk-83362140/",target:"_blank",rel:"noopener noreferrer",children:["LinkedIn",c.jsx(yl,{width:"24",height:"24",children:c.jsx("use",{href:`${re}#icon-arrow-up-right`})})]})}),c.jsx("li",{children:c.jsxs(vl,{href:"https://www.facebook.com/olga.polishchuk.14",target:"_blank",rel:"noopener noreferrer",children:["Facebook",c.jsx(yl,{width:"24",height:"24",children:c.jsx("use",{href:`${re}#icon-arrow-up-right`})})]})}),c.jsx("li",{children:c.jsxs(vl,{href:"https://www.instagram.com/olga_healthm/",target:"_blank",rel:"noopener noreferrer",children:["Instagram",c.jsx(yl,{width:"24",height:"24",children:c.jsx("use",{href:`${re}#icon-arrow-up-right`})})]})})]})]})]})]})}),iw=j.section`
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
`,ow=j.h2`
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
`,sw=j.div`
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
`,aw=j.p`
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
`,lw=j.p`
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
`,Uf=j.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 16px;
`,uw=j.div`
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
`,cw=j.h4`
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
`,dw=j.div`
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
`,fw=j.h4`
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
`,pw=j.p`
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
`,hw=j.svg`
  fill: var(--primary-bluedark, #1b3641);
  border-radius: 100px;
  background: rgba(27, 54, 65, 0.2);
  width: 32px;
  height: 32px;
`,mw=j.svg`
  fill: var(--background-white, #fcfcfc);
  border-radius: 100px;
  background: rgba(244, 244, 246, 0.2);
  width: 32px;
  height: 32px;
`,gw=()=>c.jsx(iw,{id:"aboutUs",className:"container",children:c.jsxs("div",{children:[c.jsx(ow,{children:"Про студію"}),c.jsxs(sw,{children:[c.jsx("div",{children:c.jsx(aw,{children:"Студія стратегічного розвитку медичних брендів «Healthy management» надає послуги медичного менеджменту, медичного маркетингу, консалтингу бізнес-процесів та створення стратегій здоров’я для підприємств та бізнесу. Ми співпрацюємо з медичними закладами, лікарями, власниками, керівниками та створюємо спільні стратегії та дії для ефективного просування та розвитку проєктів, використовуючи комплексний підхід"})}),c.jsxs(dw,{children:[c.jsxs(Uf,{children:[c.jsx(mw,{children:c.jsx("use",{href:`${re}#icon-star`})}),c.jsx(fw,{children:"Наша місія"})]}),c.jsx(pw,{children:"Будуємо ефективні стратегії по управлінню здоров’ям та створюємо продуктивні дії для популяризації здорового менеджменту"})]}),c.jsxs(uw,{children:[c.jsxs(Uf,{children:[c.jsx(hw,{children:c.jsx("use",{href:`${re}#icon-star`})}),c.jsx(cw,{children:"Наші цінності"})]}),c.jsx(lw,{children:"Повага, довіра, партнерство та експертність. Будуємо нову культуру управління здоровим менеджментом у медичній галузі"})]})]})]})}),vw=j.section`
  padding-top: 80px;
  padding-bottom: 80px;
`,yw=j.div`
  width: 100%;
  border-radius: 16px;
  padding: 80px;
  background-color: var(--background-bluedark);
`,xw=j.h2`
  margin-bottom: 40px;
  font-size: 48px;
  font-weight: 600;
  line-height: 1.17;
  color: var(--system-default-10);

  & span {
    color: var(--primary-yellow);
  }
`,ww=j.ul`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding: 24px 0;
`,Sw=j.li`
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
`,bw=[{id:1,tool:"Матриця стейкхолдерів"},{id:2,tool:"SWOT аналіз"},{id:3,tool:"Bussines model canvas"},{id:4,tool:"Value proposition canvas"},{id:5,tool:"Customer journey map"}],kw=()=>c.jsx(vw,{className:"container",children:c.jsxs(yw,{children:[c.jsxs(xw,{children:["Бізнес ",c.jsx("span",{children:"інструменти"}),", які використувуємо в партнерстві"]}),c.jsx(ww,{children:bw.map(e=>c.jsx(Sw,{children:e.tool},e.id))})]})});var Tg={exports:{}},Cw="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ew=Cw,jw=Ew;function Mg(){}function Rg(){}Rg.resetWarningCache=Mg;var Ow=function(){function e(r,i,o,s,l,a){if(a!==jw){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Rg,resetWarningCache:Mg};return n.PropTypes=n,n};Tg.exports=Ow();var _w=Tg.exports;const ro=oo(_w),ds="/healthy-management-project/assets/icon-footer-MBx-ujYN.svg",Pw=j.div`
  padding: 40px 0 0 0;
  background-color: var(--background-bluedark);
`,Tw=j.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`,Mw=j.a`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  cursor: pointer;
  border-bottom: 1px solid rgba(244, 244, 246, 0.4);
  color: var(--system-default-10);
`,Rw=j.div`
  display: flex;
  align-items: center;
  gap: 40px;
`,pi=j.a`
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
`,Iw=j.div`
  display: flex;
  gap: 40px;
`,Lw=j.div`
  display: flex;
  gap: 16px;
  align-items: center;
`,Dw=j.a`
  padding: 8px;

  & svg {
    border-radius: 10px;
    background-color: var(--background-white);
    opacity: 0.8;
  }
`,Aw=j.div`
  display: flex;
  flex-direction: column;
`,Bf=j.a`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: var(--system-default-10);
`,Fw=j.p`
  padding: 16px 0;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.67;
  text-transform: uppercase;
  border-top: 1px solid var(--system-default-20);
  color: var(--system-default-10);
`,Vw=j.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 1100;
`,Nw=j.div`
  padding: 80px;
  position: fixed;
  width: 1360px;
  border-radius: 24px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 10000;
`,zw=j.div`
  height: 32px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`,$w=j.svg`
  width: 24px;
  cursor: pointer;
`,Uw=j.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: var(--typography-bluedark);
`,Bw=j.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`,Cn=j.li`
  width: 282px;
  padding: 24px;
  gap: 16px;

  border-radius: 16px;
  background: var(--background-bluedark);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
`,En=j.h3`
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
`,jn=j.p`
  display: flex;
  justify-content: center;

  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: var(--typography-white);
`,On=j.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,_n=j.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Pn=j.div`
  border-radius: 8px;
  overflow: hidden;
`,Tn=j.img`
  border-radius: 8px;

  &:hover {
    transform: scale(1.1);
    border-radius: 8px;
  }
`,Hf="/healthy-management-project/assets/Jilia_Kopytko-mYhzlt_-.webp",Hw="/healthy-management-project/assets/Jilia_Kopytko@2x-gruKrAtD.jpg",Wf="/healthy-management-project/assets/Yelyzaveta_Domanska-Ru7up7Pj.webp",Ww="/healthy-management-project/assets/Yelyzaveta_Domanska@2x-BYkqrL88.jpg",Qf="/healthy-management-project/assets/Oleksandr_Natalukha-YKEBbXyu.webp",Qw="/healthy-management-project/assets/Oleksandr_Natalukha@2x-5OsrctvL.jpg",Yf="/healthy-management-project/assets/Valentyn_Havrylenko-ouVcypag.webp",Yw="/healthy-management-project/assets/Valentyn_Havrylenko@2x-xBjJM6nL.jpg",Kf="/healthy-management-project/assets/Olha_Abent-lPe8g7w1.webp",Kw="/healthy-management-project/assets/Olha_Abent@2x-fGgXmj71.jpg",Gf="/healthy-management-project/assets/Viktoriia_Moryc-tWw5-4of.webp",Gw="/healthy-management-project/assets/Viktoriia_Moryc@2x-AxiRex6x.jpg",Xf="/healthy-management-project/assets/Vyacheslav_Pavlyuk-py_hj3lz.webp",Xw="/healthy-management-project/assets/Vyacheslav_Pavlyuk@2x-2qCtSSAb.jpg",qf="/healthy-management-project/assets/Yaroslav_Li-nn0P6bIv.webp",qw="/healthy-management-project/assets/Yaroslav_Li@2x-xfuqLdiI.jpg",Ig=({handleClose:e,isModalOpen:t})=>{const n=i=>{i.target===i.currentTarget&&e()};M.useEffect(()=>{const i=document.body,o=()=>{t?i.classList.add("body-no-scroll"):i.classList.remove("body-no-scroll")},s=l=>{l.code==="Escape"&&t&&e()};return o(),window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[e,t]);const r=document.getElementById("modal");return t?Nx.createPortal(c.jsx(Vw,{onClick:n,children:c.jsxs(Nw,{isModalOpen:t,children:[c.jsxs(zw,{children:[c.jsx(Uw,{children:"Команда, яка створила сторінку"}),c.jsx($w,{onClick:e,children:c.jsx("use",{href:`${re}#icon-close`})})]}),c.jsxs(Bw,{children:[c.jsx(Cn,{children:c.jsxs(On,{children:[c.jsx(Pn,{children:c.jsx(Tn,{src:Gf,srcSet:`${Gf} 1x, ${Gw} 2x`,alt:"Вікторія Мориц"})}),c.jsxs(_n,{children:[c.jsx(En,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/viktoriia-moryc-61610962/",target:"_blank",rel:"noopener noreferrer",children:["Вікторія Мориц",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${re}#icon-linkedin`})})]})}),c.jsx(jn,{children:"Project Manager"})]})]})}),c.jsx(Cn,{children:c.jsxs(On,{children:[c.jsx(Pn,{children:c.jsx(Tn,{src:Hf,srcSet:`${Hf} 1x, ${Hw} 2x`,alt:"Юлія Копитко"})}),c.jsxs(_n,{children:[c.jsx(En,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/juliakopytko/",target:"_blank",rel:"noopener noreferrer",children:["Юлія Копитко",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${re}#icon-linkedin`})})]})}),c.jsx(jn,{children:"UX/UI Designer"})]})]})}),c.jsx(Cn,{children:c.jsxs(On,{children:[c.jsx(Pn,{children:c.jsx(Tn,{src:qf,srcSet:`${qf} 1x, ${qw} 2x`,alt:"Ярослав Лі"})}),c.jsxs(_n,{children:[c.jsx(En,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/yaroslav-lee-b7070b294",target:"_blank",rel:"noopener noreferrer",children:["Ярослав Лі",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${re}#icon-linkedin`})})]})}),c.jsx(jn,{children:"Frontend Developer"})]})]})}),c.jsx(Cn,{children:c.jsxs(On,{children:[c.jsx(Pn,{children:c.jsx(Tn,{src:Wf,srcSet:`${Wf} 1x, ${Ww} 2x`,alt:"Єлизавета Доманська"})}),c.jsxs(_n,{children:[c.jsx(En,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/yelyzaveta-domanska-2185a5292/",target:"_blank",rel:"noopener noreferrer",children:["Єлизавета Доманська",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${re}#icon-linkedin`})})]})}),c.jsx(jn,{children:"Frontend Developer"})]})]})}),c.jsx(Cn,{children:c.jsxs(On,{children:[c.jsx(Pn,{children:c.jsx(Tn,{src:Qf,srcSet:`${Qf} 1x, ${Qw} 2x`,alt:"Олександр Наталуха"})}),c.jsxs(_n,{children:[c.jsx(En,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/oleksandr-natalukha",target:"_blank",rel:"noopener noreferrer",children:["Олександр Наталуха",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${re}#icon-linkedin`})})]})}),c.jsx(jn,{children:"Frontend Developer"})]})]})}),c.jsx(Cn,{children:c.jsxs(On,{children:[c.jsx(Pn,{children:c.jsx(Tn,{src:Yf,srcSet:`${Yf} 1x, ${Yw} 2x`,alt:"Валентин Гавриленко"})}),c.jsxs(_n,{children:[c.jsx(En,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/valentyn-havrylenko/",target:"_blank",rel:"noopener noreferrer",children:["Валентин Гавриленко",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${re}#icon-linkedin`})})]})}),c.jsx(jn,{children:"Frontend Developer"})]})]})}),c.jsx(Cn,{children:c.jsxs(On,{children:[c.jsx(Pn,{children:c.jsx(Tn,{src:Xf,srcSet:`${Xf} 1x, ${Xw} 2x`,alt:"В´ячеслав Павлюк"})}),c.jsxs(_n,{children:[c.jsx(En,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/vyacheslav-pavlyuk/",target:"_blank",rel:"noopener noreferrer",children:["В'ячеслав Павлюк",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${re}#icon-linkedin`})})]})}),c.jsx(jn,{children:"Fullstack Developer"})]})]})}),c.jsx(Cn,{children:c.jsxs(On,{children:[c.jsx(Pn,{children:c.jsx(Tn,{src:Kf,srcSet:`${Kf} 1x, ${Kw} 2x`,alt:"Ольга Абент"})}),c.jsxs(_n,{children:[c.jsx(En,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/abentolga/",target:"_blank",rel:"noopener noreferrer",children:["Ольга Абент",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${re}#icon-linkedin`})})]})}),c.jsx(jn,{children:"QA Engineer"})]})]})})]})]})}),r):null};Ig.propTypes={handleClose:ro.func.isRequired,isModalOpen:ro.bool.isRequired};const Lg=({handleSetActiveLink:e})=>{const[t,n]=M.useState(!1),r=()=>{n(!0)},i=()=>{n(!1)};return c.jsxs(Pw,{id:"footer",children:[c.jsxs(Tw,{className:"container",children:[c.jsx("svg",{width:"227",height:"40",children:c.jsx("use",{href:`${ds}#logo-white`})}),c.jsx(Mw,{onClick:r,children:"created by GoIT students"}),c.jsx(Ig,{handleClose:i,isModalOpen:t}),c.jsxs(Rw,{children:[c.jsx(pi,{href:"#home",onClick:o=>e("home",o),children:"Головна"}),c.jsx(pi,{href:"#aboutUs",onClick:o=>e("aboutUs",o),children:"Про нас"}),c.jsx(pi,{href:"#services",onClick:o=>e("services",o),children:"Послуги"}),c.jsx(pi,{href:"#mentoring",onClick:o=>e("mentoring",o),children:"Менторство"}),c.jsx(pi,{href:"#projects",onClick:o=>e("projects",o),children:"Проєкти"})]}),c.jsxs(Iw,{children:[c.jsxs(Lw,{children:[c.jsx(Dw,{href:"https://www.facebook.com/profile.php?id=61551346490841",target:"_blank",rel:"noopener noreferrer",children:c.jsx("svg",{width:"32",height:"32",children:c.jsx("use",{href:`${ds}#facebook`})})}),c.jsx("a",{href:"https://www.instagram.com/healthymanagement_ua/",target:"_blank",rel:"noopener noreferrer",children:c.jsx("svg",{width:"40",height:"40",children:c.jsx("use",{href:`${ds}#instagram`})})})]}),c.jsxs(Aw,{children:[c.jsx(Bf,{href:"mailto:managementhealthy@gmail.com",children:"managementhealthy@gmail.com"}),c.jsx(Bf,{href:"tel:+380673160556",children:"+380 673 160 556"})]})]})]}),c.jsx(Fw,{children:"© 2023 healthy managment. All rights reserved"})]})};Lg.propTypes={handleSetActiveLink:ro.func.isRequired};const Ws="/healthy-management-project/assets/symbol-defs-t7xx9-KA.svg",Jw=j.header`
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
`,Zw=j.div`
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
`,eS=j.nav`
  display: flex;
  gap: 40px;
  align-items: center;
`,hi=j.a`
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
`,tS=j.a`
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
`,nS=j.svg`
  stroke: black;
  width: 40px;
  height: 40px;
`,rS=j.button`
  border: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  font-family: inherit;
  font-size: 100%;
  cursor: pointer;
  background: none;
`,iS="_mabileMenuContainer_15uw8_1",oS="_divMobileMenu_15uw8_13",sS="_logoMenu_15uw8_24",aS="_contactMenu_15uw8_28",lS="_svgMenu_15uw8_51",uS="_nav_15uw8_55",cS="_navMenuMobile_15uw8_66",dS="_buttonMenuMobile_15uw8_75",At={mabileMenuContainer:iS,divMobileMenu:oS,logoMenu:sS,contactMenu:aS,svgMenu:lS,nav:uS,navMenuMobile:cS,buttonMenuMobile:dS},fS=document.getElementById("modalMobail"),Dg=({onClose:e,handleSetActiveLink:t})=>fo.createPortal(c.jsx("div",{className:At.mabileMenuContainer,children:c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:At.divMobileMenu,children:[c.jsx("a",{href:"#home",children:c.jsx("svg",{width:"40",height:"40",children:c.jsx("use",{href:`${Ws}#icon-g10`})})}),c.jsx("a",{className:At.contactMenu,href:"#contact",children:"Контакт"}),c.jsx("button",{className:At.buttonMenuMobile,type:"button",onClick:()=>e(),children:c.jsx("svg",{className:At.svgMenu,width:"40",height:"40",children:c.jsx("use",{href:`${Ws}#icon-close`})})})]}),c.jsxs("nav",{className:At.nav,children:[c.jsx("a",{className:At.navMenuMobile,href:"#home",onClick:n=>{e(),t("home",n)},children:"Головна"}),c.jsx("a",{className:At.navMenuMobile,href:"#aboutUs",onClick:n=>{e(),t("aboutUs",n)},children:"Про нас"}),c.jsx("a",{className:At.navMenuMobile,href:"#services",onClick:n=>{e(),t("services",n)},children:"Послуги"}),c.jsx("a",{className:At.navMenuMobile,href:"#mentoring",onClick:n=>{e(),t("mentoring",n)},children:"Менторство"}),c.jsx("a",{className:At.navMenuMobile,href:"#projects",onClick:n=>{e(),t("projects",n)},children:"Проєкти"})]})]})}),fS);Dg.propTypes={onClose:ro.func.isRequired};const Ag=({handleSetActiveLink:e})=>{const[t,n]=M.useState("home"),[r,i]=M.useState(!1),o=or.useMediaQuery({query:"(max-width: 767px)"}),s=or.useMediaQuery({query:"(min-width: 768px)"}),l=()=>{i(!r)};return M.useEffect(()=>{const a=()=>{const f=["home","aboutUs","services","mentoring","projects","contact"].find(d=>{const g=document.getElementById(d);if(g){const x=g.getBoundingClientRect();return x.top<=120&&x.bottom>=120}return g});f&&n(f)};return window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}},[]),c.jsxs(Jw,{children:[c.jsx("div",{className:"container",children:c.jsxs(Zw,{children:[o&&c.jsx("a",{href:"#home",children:c.jsx("svg",{width:"40",height:"40",children:c.jsx("use",{href:`${Ws}#icon-g10`})})}),s&&c.jsx("a",{href:"#home",children:c.jsx("svg",{width:"227",height:"40",children:c.jsx("use",{href:`${re}#logo-black`})})}),s&&c.jsxs(eS,{children:[c.jsx(hi,{href:"#home",className:t==="home"?"active":"",onClick:a=>e("home",a),children:"Головна"}),c.jsx(hi,{href:"#aboutUs",className:t==="aboutUs"?"active":"",onClick:a=>e("aboutUs",a),children:"Про нас"}),c.jsx(hi,{href:"#services",className:t==="services"?"active":"",onClick:a=>e("services",a),children:"Послуги"}),c.jsx(hi,{href:"#mentoring",className:t==="mentoring"?"active":"",onClick:a=>e("mentoring",a),children:"Менторство"}),c.jsx(hi,{href:"#projects",className:t==="projects"?"active":"",onClick:a=>e("projects",a),children:"Проєкти"})]}),c.jsx(tS,{href:"#contact",className:t==="contact"?"active":"",onClick:a=>e("contact",a),children:"Контакт"}),o&&c.jsx(rS,{type:"button",onClick:()=>l(),children:c.jsx(nS,{children:c.jsx("use",{href:`${Ws}#icon-menuburger`})})})]})}),o&&r&&c.jsx(Dg,{onClose:l,handleSetActiveLink:e})]})};Ag.propTypes={handleSetActiveLink:ro.func.isRequired};const pS="/healthy-management-project/assets/hero1x-6AVSlzud.webp",hS="/healthy-management-project/assets/hero1x-d4IOBsel.jpg",mS=j.section`
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${hS});
  background-size: cover;
  margin-top: 130px;
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${pS});
    background-size: cover;
    margin-top: 120px;
    padding-top: 296px;
    padding-bottom: 296px;
  }
`,gS=j.h1`
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
`,vS=j.h3`
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
`,yS=j.ul`
  margin-left: 20px;
  margin-top: 24px;
  margin-bottom: 48px;

  @media screen and (min-width: 768px) {
    margin-left: 38px;
    margin-top: 24px;
    margin-bottom: 40px;
  }
`,xl=j.li`
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
`,xS=j.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 24px;
  }
`,Jf=j.a`
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
`,wS=()=>c.jsx(mS,{id:"home",children:c.jsxs("div",{className:"container",children:[c.jsx(gS,{children:"Бізнес-партнер з розвитку та комунікацій здорового менеджменту"}),c.jsx(vS,{children:"Будуємо ефективні стратегії здорового менеджменту для медичних брендів:"}),c.jsxs(yS,{children:[c.jsx(xl,{children:"медичний менеджмент і маркетинг,"}),c.jsx(xl,{children:"програми управління здоров'ям для підприємств та бізнесу,"}),c.jsx(xl,{children:"менторство"})]}),c.jsxs(xS,{children:[c.jsx(Jf,{href:"#contact",children:"Консультація"}),c.jsx(Jf,{href:"#services",children:"Послуги"})]})]})}),SS=j.section`
  padding-top: 24px;
  padding-bottom: 24px;

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,bS=j.div`
  border-radius: 16px;
  padding: 24px;
  background: var(--background-bluedark);

  @media screen and (min-width: 1920px) {
    max-width: 100%;
    padding: 80px;
  }
`,kS=j.h2`
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
`,CS=j.ul`
  display: flex;
  padding: 0;
  flex-wrap: wrap;
  gap: 24px;
`,Fo=j.li`
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
`,Vo=j.svg`
  width: 80px;
  height: 80px;
`,No=j.div`
  display: flex;
  flex-direction: column;
`,zo=j.h3`
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
`,$o=j.p`
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
`,ES=()=>c.jsx(SS,{className:"container",children:c.jsxs(bS,{children:[c.jsx(kS,{children:"Чому обирають нас"}),c.jsxs(CS,{children:[c.jsxs(Fo,{children:[c.jsx(Vo,{children:c.jsx("use",{href:`${re}#hands-shake`})}),c.jsxs(No,{children:[c.jsx(zo,{children:"Надійне партнерство та менторство"}),c.jsx($o,{children:"Ми налаштовані на довгострокове партнерство і дбаємо про комфортні та чесні комунікації"})]})]}),c.jsxs(Fo,{children:[c.jsx(Vo,{children:c.jsx("use",{href:`${re}#setting`})}),c.jsxs(No,{children:[c.jsx(zo,{children:"Індивідуальний підхід"}),c.jsx($o,{children:"Кожен бізнес і послуга мають свої особливості. Ми занурюємося у ваш бізнес і пропонуємо індивідуальні стратегії, які допоможуть вам досягти успіху"})]})]}),c.jsxs(Fo,{children:[c.jsx(Vo,{children:c.jsx("use",{href:`${re}#icon-lamp`})}),c.jsxs(No,{children:[c.jsx(zo,{children:"Експертні послуги"}),c.jsx($o,{children:"Ми опираємося на передовий досвід і використовуємо як класичні, так і сучасні підходи для досягнення поставленого результату"})]})]}),c.jsxs(Fo,{children:[c.jsx(Vo,{children:c.jsx("use",{href:`${re}#icon-puzzle`})}),c.jsxs(No,{children:[c.jsx(zo,{children:"Комплексні рішення"}),c.jsx($o,{children:"Наша експертиза дозволяє пропонувати комплексні рішення для ефективної співпраці"})]})]})]})]})}),Zf="/healthy-management-project/assets/pic_mentorstvo1x-R5bIGNq0.webp",jS="/healthy-management-project/assets/pic_mentorstvo2x-k6d-_Us1.jpg",ep="/healthy-management-project/assets/mob_mentor1x-_de1iGBc.webp",OS="/healthy-management-project/assets/mob_mentor@2x-oAKhVwNJ.jpg",_S=j.section`
  padding-top: 80px;
  padding-bottom: 80px;
`,PS=j.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 1920px) {
    gap: 40px;
    margin-bottom: 40px;
    flex-direction: row;
  }
`,TS=j.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 1920px) {
    max-width: 828px;
    align-items: flex-start;
  }
`,MS=j.div`
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
`,RS=j.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: var(--typography-black);

  @media screen and (min-width: 1920px) {
    font-size: 48px;
    line-height: 56px;
    margin-bottom: 40px;
  }
`,IS=j.h3`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: var(--typography-bluedark);

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: 32px;
  }
`,tp=j.h3`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: var(--typography-white);

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: 32px;
  }
`,LS=j.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 320px;

  @media screen and (min-width: 1920px) {
    margin-bottom: 80px;
  }
`,np=j.p`
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
`,DS=j.a`
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
`,AS=j.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 1920px) {
    gap: 40px;
    flex-direction: row;
  }
`,FS=j.div`
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
`,VS=j.ul`
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
`,rp=j.ul`
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
`,xr=j.li`
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
`,wr=j.li`
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
`,NS=()=>c.jsxs(_S,{id:"mentoring",className:"container",children:[c.jsxs(PS,{children:[c.jsxs("div",{children:[c.jsx(Bs,{minWidth:1920,children:c.jsx("img",{srcSet:`${Zf} 1920w, ${jS} 2x`,sizes:"(min-width: 1920px) 1920px",src:Zf,alt:"Ольга Поліщук - ваш ментор в медичній галузі"})}),c.jsx(Bs,{minWidth:300,maxWidth:1919,children:c.jsx("img",{srcSet:`${ep} 375w, ${OS} 2x`,sizes:"(min-width: 375px) 375px",src:ep,alt:"Ольга Поліщук - ваш ментор в медичній галузі"})})]}),c.jsxs(TS,{children:[c.jsx(RS,{children:"Менторство"}),c.jsxs(LS,{children:[c.jsxs(np,{children:[c.jsx("b",{children:"Менторство в медичній галузі"})," - почути іншу думку, підтвердити власні гіпотези, зрозуміти вектор розвитку, отримати підтримку та пораду з питань менеджменту і медичного маркетингу"]}),c.jsxs(np,{children:[c.jsx("b",{children:"Менторство"})," - це про взаємодію та чесну комунікацію, про спільні цінності та готовність до росту, про надійне партнерство та довіру"]})]}),c.jsx(DS,{href:"#contact",children:"Дізнатися вартість"})]})]}),c.jsx("div",{children:c.jsxs(AS,{children:[c.jsxs(MS,{children:[c.jsx(IS,{children:"Про що це?"}),c.jsxs(VS,{children:[c.jsx(xr,{children:c.jsx("p",{children:"Про прагнення почути чесну іншу думку/та або підтвердити власні гіпотези для власника/керівника"})}),c.jsx(xr,{children:c.jsx("p",{children:"Про бізнес-процеси та їх ефективність"})}),c.jsx(xr,{children:c.jsx("p",{children:"Про вектори розвитку бізнесу або проєкту"})}),c.jsx(xr,{children:c.jsx("p",{children:"Про практичний інструментарій для впровадження змін"})}),c.jsx(xr,{children:c.jsx("p",{children:"Про маркетинг, сервіс та комунікації в медичних бізнесах"})}),c.jsx(xr,{children:c.jsx("p",{children:"Про здоров'я працівників та стратегії підвищенння ефективності бізнесу"})})]})]}),c.jsxs(FS,{children:[c.jsx(tp,{children:"Для кого"}),c.jsxs(rp,{children:[c.jsx(wr,{children:c.jsx("p",{children:"Лідерам, які прагнуть змін"})}),c.jsx(wr,{children:c.jsx("p",{children:"Власникам, які хочуть отримати незалежку експертну думку"})}),c.jsx(wr,{children:c.jsx("p",{children:"Керівникам та маркетологам, яким потрібна підтримка"})}),c.jsx(wr,{children:c.jsx("p",{children:"Лікарям, яким важливо отримати пораду"})})]}),c.jsx(tp,{children:"Формат"}),c.jsxs(rp,{children:[c.jsx(wr,{children:c.jsx("p",{children:"Індивідуальна ментор-сесія (від 1 години)"})}),c.jsx(wr,{children:c.jsx("p",{children:"Персональний супровід на декілька місяців"})})]})]})]})})]}),Fg=j.section`
  padding-top: 24px;
  padding-bottom: 24px;

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,Vg=j.div`
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  background: var(--background-white);

  @media screen and (min-width: 1920px) {
    padding: 80px;
  }
`,zS=j.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  @media screen and (min-width: 1290px) {
    flex-direction: row;
    justify-content: space-between;
  }
`,Uo=j.div`
  position: relative;

  @media screen and (min-width: 1920px) {
    min-width: 370px;
  }
`,Ng=j.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1290px) {
    gap: 40px;
    margin-bottom: 40px;
    flex-direction: row;
  }
`,zg=j.div`
  min-width: 280px;
  gap: 16px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1920px) {
    min-width: 740px;
  }
`,$g=j.div`
  @media screen and (min-width: 1920px) {
    padding: 24px;
  }
`,Bo=j.p`
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
`,Ug=j.h2`
  color: var(--typography-black);
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;

  @media screen and (min-width: 1920px) {
    font-size: 48px;
    line-height: 56px;
  }
`,Bg=j.h3`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 24px;
  color: var(--typography-bluedark);

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    margin-bottom: 16px;
  }
`,Hg=j.p`
  font-size: 16px;
  line-height: 24px;
  color: var(--typography-bluedark);

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.4;
  }
`,Wg=j.p`
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
`,Qg=j.a`
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
`,Yg=j.p`
  font-size: 18px;
  line-height: 1.3;
  font-weight: 600;
  margin-bottom: 16px;

  color: var(--typography-bluedark);

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    margin-bottom: 24px;
  }
`,Kg=j.ul`
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
`,zt=j.li`
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
`,Mn=j.svg`
  width: 266px;
  height: 56px;

  @media screen and (min-width: 1920px) {
    width: 370px;
    height: 80px;
  }
`;function $S(e,t){if(t===e)return!1;const n=Object.values(t),r=Object.values(e);if(n.length!==r.length||n.some((o,s)=>o!==r[s]))return!0;const i=Object.keys(e);return Object.keys(t).some((o,s)=>o!==i[s])}function US(e,t){return e.matches[t]=!1,e.mediaQueries[t]={},e}function Gg(e){const t=Object.keys(e);return typeof window>"u"?t.reduce(US,{mediaQueries:{},matches:{}}):t.reduce((n,r)=>{const i=window.matchMedia(e[r]);return n.mediaQueries[r]=i,n.matches[r]=i.matches,n},{mediaQueries:{},matches:{}})}function BS(e,t){function n(r,i){return r[i]=e.mediaQueries[i].matches,r}switch(t.type){case"updateMatches":return{matches:Object.keys(e.mediaQueries).reduce(n,{}),mediaQueries:e.mediaQueries};case"setQueries":return Gg(t.queries)}}function HS(e){const t=M.useRef(e),[n,r]=M.useReducer(BS,e,Gg);M.useEffect(()=>{$S(e,t.current)&&(r({type:"setQueries",queries:e}),t.current=e)},[e]);function i(){return r({type:"updateMatches"})}function o(a){const u=i;return typeof a.addListener<"u"?a.addListener(u):a.addEventListener("change",u),u}M.useEffect(()=>{const a=Object.values(n.mediaQueries),u=a.map(o);function f(d,g){typeof d.addListener<"u"?d.removeListener(u[g]):d.removeEventListener("change",u[g])}return()=>{a.forEach(f)}},[n.mediaQueries]);const{matches:s}=n,l=M.useMemo(()=>Object.values(s),[s]);return{matches:s,matchesAny:l.some(Boolean),matchesAll:l.length>0&&l.every(Boolean)}}function Xg(e){return HS(WS(e)).matchesAll}const wl={};function WS(e){return wl[e]===void 0&&(wl[e]={default:e}),wl[e]}const QS=()=>{const e=Xg("(max-width: 768px)");return c.jsx(Fg,{className:"container",children:c.jsxs(Vg,{children:[c.jsxs(Ng,{children:[c.jsxs(zg,{children:[c.jsx(Ug,{children:"Індивідуальна ментор сесія"}),c.jsx(Hg,{children:"Вирішення вашого індивідуального запиту"}),c.jsx(Wg,{children:"від 1 години"}),c.jsx(Qg,{href:"#contact",children:"Замовити послугу"})]}),c.jsxs($g,{children:[c.jsx(Bg,{children:"Питання, з якими можете звернутися"}),c.jsxs(Kg,{children:[c.jsx(zt,{children:"Незалежна думка щодо маркетингу та розвитку"}),c.jsx(zt,{children:"Порада по створенню відділу маркетингу або оцінка існуючої структури"}),c.jsx(zt,{children:"Питання по роботі з підрядниками"}),c.jsx(zt,{children:"Порада щодо оптимізації бізнес-процесів"}),c.jsx(zt,{children:"Як вірно оцінити ефективність маркетингових дій"}),c.jsx(zt,{children:"Які інструменти комунікацій використовувати"}),c.jsxs(zt,{children:["Особисте питання по менеджменту та розвитку з питань управління"," ","здоров'ям"]})]})]})]}),c.jsx(Yg,{children:"Шлях проведення менторської сесії"}),c.jsxs(zS,{children:[c.jsxs(Uo,{children:[e?c.jsx(Mn,{children:c.jsx("use",{href:`${re}#icon-rectangle-mob`})}):c.jsx(Mn,{children:c.jsx("use",{href:`${re}#icon-rectangle`})}),c.jsx(Bo,{children:"Заповнення брифу"})]}),c.jsxs(Uo,{children:[e?c.jsx(Mn,{children:c.jsx("use",{href:`${re}#icon-rectangle-mob`})}):c.jsx(Mn,{children:c.jsx("use",{href:`${re}#icon-rectangle`})}),c.jsx(Bo,{children:"Діагностика ситуації"})]}),c.jsxs(Uo,{children:[e?c.jsx(Mn,{children:c.jsx("use",{href:`${re}#icon-rectangle-mob`})}):c.jsx(Mn,{children:c.jsx("use",{href:`${re}#icon-rectangle`})}),c.jsx(Bo,{children:"Проведення сесії"})]}),c.jsxs(Uo,{children:[e?c.jsx(Mn,{children:c.jsx("use",{href:`${re}#icon-rectangle-mob`})}):c.jsx(Mn,{children:c.jsx("use",{href:`${re}#icon-rectangle`})}),c.jsx(Bo,{children:"Рекомендації"})]})]})]})})},YS=j.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  @media screen and (min-width: 1920px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 24px;
  }
`,Kt=j.svg`
  width: 260px;
  height: 60px;

  @media screen and (min-width: 1920px) {
    width: 285px;
    height: 80px;
  }
`,mi=j.div`
  position: relative;
  height: 60px;

  @media screen and (min-width: 1920px) {
    min-width: 285px;
  }
`;j.div`
  min-width: 740px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;const gi=j.p`
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
`,KS=()=>{const e=Xg("(max-width: 768px)");return c.jsx(Fg,{className:"container",children:c.jsxs(Vg,{children:[c.jsxs(Ng,{children:[c.jsxs(zg,{children:[c.jsx(Ug,{children:"Персональний супровід"}),c.jsx(Hg,{children:"Пропрацьовуємо ваші запити та досягаємо посавлених цілей"}),c.jsx(Wg,{children:"від 2 місяців тісної взаємодії"}),c.jsx(Qg,{href:"#contact",children:"Замовити послугу"})]}),c.jsxs($g,{children:[c.jsx(Bg,{children:"Питання, з якими можете звернутися"}),c.jsxs(Kg,{children:[c.jsx(zt,{children:"Зануритись в бізнес-процеси та зрозуміти, де є точки зростання"}),c.jsx(zt,{children:"Зрозуміти що таке маркетинг та як він працює у вашому бізнесі"}),c.jsx(zt,{children:"Супровід розробки та впровадження стратегій"}),c.jsx(zt,{children:"Особисті питання по медичному менеджменту, маркетингу та розвитку, управління здоров'ям"})]})]})]}),c.jsx(Yg,{children:"Шлях проведення менторського супроводу"}),c.jsxs(YS,{children:[c.jsxs(mi,{children:[e?c.jsx(Kt,{children:c.jsx("use",{href:`${re}#icon-rectangle-mob`})}):c.jsx(Kt,{children:c.jsx("use",{href:`${re}#icon-rectangle2`})}),c.jsx(gi,{children:"Заповнення брифу"})]}),c.jsxs(mi,{children:[e?c.jsx(Kt,{children:c.jsx("use",{href:`${re}#icon-rectangle-mob`})}):c.jsx(Kt,{children:c.jsx("use",{href:`${re}#icon-rectangle2`})}),c.jsx(gi,{children:"Діагностика ситуації"})]}),c.jsxs(mi,{children:[e?c.jsx(Kt,{children:c.jsx("use",{href:`${re}#icon-rectangle-mob`})}):c.jsx(Kt,{children:c.jsx("use",{href:`${re}#icon-rectangle2`})}),c.jsx(gi,{children:"Визначення зон росту"})]}),c.jsxs(mi,{children:[e?c.jsx(Kt,{children:c.jsx("use",{href:`${re}#icon-rectangle-mob`})}):c.jsx(Kt,{children:c.jsx("use",{href:`${re}#icon-rectangle2`})}),c.jsx(gi,{children:"Менторинг"})]}),c.jsxs(mi,{children:[e?c.jsx(Kt,{children:c.jsx("use",{href:`${re}#icon-rectangle-mob`})}):c.jsx(Kt,{children:c.jsx("use",{href:`${re}#icon-rectangle2`})}),c.jsx(gi,{children:"Рекомендації"})]})]})]})})},La=()=>{const e=or.useMediaQuery({maxWidth:767}),t=or.useMediaQuery({minWidth:768,maxWidth:1439}),n=or.useMediaQuery({minWidth:1440,maxWidth:1919}),r=or.useMediaQuery({minWidth:1920});return e&&"mobile"||t&&"tablet"||n&&"desktop"||r&&"largeDesktop"},GS="/healthy-management-project/assets/denta_derm1x-JWCICTe_.webp",XS="/healthy-management-project/assets/medialt1x-5LMkh0v8.webp",qS="/healthy-management-project/assets/cures1x--AoJBOWJ.webp",JS="/healthy-management-project/assets/clinic1x-YgK5Wnno.webp",ZS="/healthy-management-project/assets/kmklam1x-FlPeEOTs.webp",eb="/healthy-management-project/assets/symmetrica1x-hhcOddzB.webp",Sl=[{image:GS,category:"DentaDerm",title:"Діагностика бізнес-процесів, маркетингу, сервісу, розробка стратегії розвитку, менторство",about:["Діагностика бізнес-процесів та маркетингу","Стратегія розвитку","Підбір команди маркетингу","Менторство"],details:[{title:"Завдання:",about:["Розробка стратегії розвитку","Розробка нового сайту клініки","Пошук команди маркетингу"],comment:"Дії в результаті розробки стратегії розвитку передбачали роботу над проєктом в новому позиціонуванні,  пошук зовнішньої та внутрішньої команди для реалізації нового сайту, ведення соцмереж"},{title:"В результаті роботи над проєктом:",about:["Розроблені вектори розвитку","Розроблений та впроваджений новий сайт","Підібрана команда маркетингового супроводу"],comment:"В результаті співпраці партнер отримав комплексне бачення просування, сформована команда маркетингу"}]},{image:XS,category:"Medialt",title:"Діагностика бізнес-процесів, маркетингу, сервісу, розробка стратегії розвитку, менторство",about:["Аудит ринку та конкурентів","Аудит маркетингу та сервісу","Розробка стратегії розвитку"],details:[{title:"Завдання:",about:["Розробка стратегії розвитку"]},{title:"Робота над задачою була розділена на два етапи:",about:["Аналіз конкурентів, ринку, виявлення зовнішніх можливостей та загроз","Аналіз сервісу медичного центру, аналіз роботи контакт центру, маркетингу, наявної бази пацієнтів та внутрішніх бізнес-процесів"]},{title:"В результаті комплексного аудиту підготували стратегію розвитку, яка передбачала рекомендації щодо:",about:["Управління маркетингом","Оптимізації роботи сервісу","Можливості МІС","Етапи розвитку напрямків та клініки вцілому"],comment:"В результаті співпраці - за 5 місяців ріст обороту в два рази"}]},{image:qS,category:"Cures",title:"Автоматизація комунікації з пацієнтами",about:["Створення та запуск 20 чат-ботів для клінік","Проведення консультацій та аудитів комунікацій клінік з пацієнтами","Розробка персональних протоколів спілкування з пацієнтами"],details:[{title:"Завдання:",about:["Автоматизація комунікації з пацієнтами"]},{title:"В результаті роботи над проєктом:",about:["Розвиток проєкту по створенню чат-ботів для медичних центрів","Розробка протоколів супроводу та опитувальників для клінік","Проведення зустрічей та комунікацій з клініками","Розробка алгоритмів та запуск чат-ботів"],comment:"В результаті співпраці над проєктом запуск 20 чат-ботів для медичних центрів"}]},{image:JS,category:"Клініка ім. ак. Юрія Спіженка",title:"Менторство, діагностика бізнес-процесів, маркетингу та сервісу, розробка стратегії розвитку",about:["Діагностика бізнес-процесів","Аудит маркетингу та сервісу","Розробка стратегії розвитку та маркетингу","Розробка та впровадження комунікаційної стратегії","Ведення маркетингових активностей "],details:[{title:"Завдання:",about:["Рестарт клініки у воєний час"]},{title:"Робота над задачею була розділена на три етапи:",about:["Діагностика конкурентів, ринку, виявлення зовнішніх можливостей та загроз","Діагностика сервісу медичного центру, аналіз роботи контакт центру, маркетингу, наявної бази пацієнтів та внутрішніх бізнес-процесів","Розробка та впровадження стратегії маркетингу, комунікації та сервісу, супровід рекламних кампаній, оптимізація бізнес-процесів"],comment:"В результаті співпраці над проєктом: збільшення доходу клініки, вихід на довоєний об’єм"}]},{image:ZS,category:"KMKlab",title:"Діагностика маркетингу, сервісу, бізнес-процесів",about:["Аудит маркетингу та інструментів комунікацій","Аудит сервісу","Розробка рекомендацій щодо розвитку"],details:[{title:"Завдання:",about:["Аудит поточної маркетингової стратегії","Аудит сервісу","Формування рекомендацій по розвитку"]},{title:"Робота над задачою була розділена на два етапи:",about:["Відвідування всіх відділень лабораторій з метою формування рекомендацій по кожній локації","Аналіз поточної ситуації маркетингу та комунікацій, ведення соціальних мереж"],comment:"В результаті співпраці проаналізовано роботу відділу маркетингу та підрядників та надані рекомендації щодо структури відділу, сформовані подальші  кроки  маркетингової  та сервісної стратегії"}]},{image:eb,category:"Symmetrica",title:"Менторство, діагностика маркетингу, сервісу, бізнес-процесів",about:["Аудит маркетингу та сервісу","Розробка рекомендацій щодо розвитку","Оптимізація бізнес-процесів"],details:[{title:"Завдання:",about:["Діагностика поточної маркетингової діяльності та комунікацій","Аудит сервісу","Аудит роботи підрядників","Формування рекомендацій по розвитку"]},{title:"В результаті роботи над проєктом:",about:["Проведений поточний аудит шляху пацієнта, виявлені точки зростання сервісу","Проаналізовано роботу відділу маркетингу і підрядників та надані рекомендації щодо структури відділу","Надані рекомендації щодо формування подальших кроків маркетингової  та сервісної стратегії","Сформовані конверсійні показники та вектори руху","Надана менторська підтримка"]}]}],tb=j.section`
  padding-top: 40px;
  padding-bottom: 40px;
  @media screen and (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,nb=j.h2`
  font-size: 48px;
  font-weight: 600;
  line-height: calc(56 / 48);

  margin-bottom: 40px;
`,rb=j.ul`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
  }
`,ib=j.span`
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
`,ob=j.svg`
  fill: currentColor;
  stroke: currentColor;

  width: 24px;
  height: 24px;
`,sb=j.li`
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
`,ab=j.div`
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
`,lb=j.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,ub=j.h4`
  font-size: ${e=>e.forDetail?"18px":"16px"};
  font-weight: 600;
  line-height: calc(${e=>e.forDetail?24/18:24/16});

  @media screen and (min-width: 768px) {
    font-size: ${e=>e.forDetail?"24px":"20px"};
    line-height: calc(${e=>e.forDetail?32/24:28/20});
  }
`,cb=j.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,db=j.li`
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
`,fb=j.p`
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
`,pb=j.svg`
  fill: currentColor;
  stroke: currentColor;
`,nd=({title:e,about:t,comment:n,additionalComment:r=!1})=>c.jsxs(lb,{children:[c.jsx(ub,{forDetail:r,children:e}),c.jsx(cb,{children:t==null?void 0:t.map(i=>c.jsxs(db,{children:[c.jsx(pb,{children:c.jsx("use",{href:re+"#icon-done"})}),i]},i))}),n&&c.jsx(fb,{additionalComment:r,children:n})]}),hb=j.div`
  padding: 24px;
  display: flex;
  gap: 24px;
  flex-direction: column;

  color: var(--background-whitegrey, #f4f4f6);
  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`,mb=j.h3`
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
`,gb=j.svg`
  fill: currentColor;
  stroke: currentColor;

  width: 24px;
  height: 24px;

  position: absolute;
  right: 28px;
  top: 28px;
`,vb=({dataList:{details:e,category:t}})=>{const n=La();return c.jsxs(hb,{children:[c.jsxs("div",{children:[c.jsx(mb,{symbols:t.length,children:t}),n==="mobile"&&c.jsx(gb,{children:c.jsx("use",{href:re+"#icon-close"})})]}),e.map((r,i)=>c.jsx(nd,{title:r.title,about:r.about,comment:r.comment,additionalComment:i===0},r.title))]})},yb=j.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  color: var(--typography-bluedark, #1b3641);
`,xb=j.h3`
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
`,wb=j.img`
  height: 279px;
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    height: 300px;
  }
`,Sb=j.span`
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  text-align: center;
`,bb=({dataList:e,onClick:t})=>{const n=La(),{category:r,title:i,about:o=[],image:s}=e;return c.jsxs(yb,{onClick:t,children:[c.jsx(wb,{src:s,alt:i}),c.jsx("div",{children:c.jsx(xb,{symbols:r.length,children:r})}),c.jsx(nd,{title:i,about:o}),n==="mobile"&&c.jsx(Sb,{children:"Детальніше"})]})},kb=({item:e})=>{const[t,n]=M.useState(!1),r=La(),i=()=>{r==="mobile"&&n(o=>!o)};return c.jsxs(sb,{children:[c.jsx(bb,{dataList:e,onClick:i}),c.jsx(ab,{isVisible:t,onClick:i,image:e.image,className:!t&&r==="mobile"?"visually-hidden":"",children:c.jsx(vb,{dataList:e})})]})},Cb=()=>{const e=La(),[t,n]=M.useState(e==="mobile"?[...Sl.slice(0,3)]:[...Sl]),r=()=>{t.length>4?n(i=>i.slice(0,3)):n([...Sl])};return c.jsxs(tb,{id:"projects",className:"container",style:{paddingTop:"80px",paddingBottom:"80px"},children:[c.jsx(nb,{children:"Проєкти"}),c.jsx(rb,{children:t.map(i=>c.jsx(kb,{item:i},i.category))}),e==="mobile"&&c.jsxs(ib,{onClick:r,children:[t.length>3?"Менше проєктів":"Більше проєктів",c.jsx(ob,{children:c.jsx("use",{href:re+`${t.length>3?"#icon-arrowup":"#icon-arrowdown"}`})})]})]})},Eb=j.section`
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
`,jb=j.div`
  padding: 24px;
  border-radius: 16px;
  background: var(--background-white);

  @media screen and (min-width: 1920px) {
    padding: 80px;
    max-width: 828px;
    box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  }
`,Ob=j.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;

  @media screen and (min-width: 1920px) {
    gap: 40px;
    margin-bottom: 40px;
  }
`,_b=j.h2`
  color: var(--typography-bluedark);
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;

  @media screen and (min-width: 1920px) {
    font-size: 48px;
    line-height: 56px;
  }
`,Pb=j.h2`
  color: var(--typography-bluedark);
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    line-height: 28px;
  }
`,Tb=j.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 1920px) {
    gap: 24px;
  }
`,bl=j.li`
  display: flex;
  align-items: center;
  gap: 16px;
  border-radius: 16px;
  background: var(--background-whitegrey);
  padding: 16px;
`,kl=j.svg`
  width: 24px;
  height: 24px;
  fill: var(--background-white);
  stroke-width: 4px;
`,Cl=j.p`
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
`,Mb=j.img`
  width: 100%;
  height: 327px;
  border-radius: 16px;

  @media screen and (min-width: 1920px) {
    width: 828px;
    height: 664px;
  }
`,Rb="/healthy-management-project/assets/olga_with_book1x-kIN8FAVO.webp",Ib="/healthy-management-project/assets/olga_with_book1x-KTuULWu1.jpg",Lb="/healthy-management-project/assets/olga_with_book2x-lES61yI6.jpg",Db=()=>c.jsxs(Eb,{className:"container",children:[c.jsxs(jb,{children:[c.jsxs(Ob,{children:[c.jsx(_b,{children:"Принципи роботи"}),c.jsx(Pb,{children:"Наші принципи роботи полягають у співдії з ціннісними брендами та командами, які готові до чесної співпраці, щоб сприяти досягненню поставлених цілей. Готові ділитися власним досвідом та створювати стратегії здорового менеджменту та розвитку, маркетингу та сервісу"})]}),c.jsxs(Tb,{children:[c.jsxs(bl,{children:[c.jsx(kl,{children:c.jsx("use",{href:`${re}#icon-done-yellow`})}),c.jsx(Cl,{children:"Більше 18 років досвіду в маркетингу та комунікаціях"})]}),c.jsxs(bl,{children:[c.jsx(kl,{children:c.jsx("use",{href:`${re}#icon-done-yellow`})}),c.jsx(Cl,{children:"Глибоке розуміння бізнес-процесів медичних закладів"})]}),c.jsxs(bl,{children:[c.jsx(kl,{children:c.jsx("use",{href:`${re}#icon-done-yellow`})}),c.jsx(Cl,{children:"Використання принципів доказової медицини"})]})]})]}),c.jsxs("picture",{children:[c.jsx("source",{srcSet:`${Lb} 2x, ${Ib} 1x`,media:"(min-width: 1920px)"}),c.jsx(Mb,{src:Rb,alt:"Ольга Поліщук"})]})]}),Ab=j.button`
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
`,Fb=()=>{const[e,t]=M.useState(!1);M.useEffect(()=>{const r=()=>{const i=window.scrollY,o=document.getElementById("footer"),s=window.innerHeight+window.scrollY-o.offsetTop,l=Math.max(80,s);t(i>480||s>80),document.documentElement.style.setProperty("--scroll-to-top-bottom",`${l}px`)};return window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}},[]);const n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return c.jsx(c.Fragment,{children:e&&c.jsx("section",{className:"container",children:c.jsx(Ab,{onClick:n,children:c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${re}#icon-arrowup`})})})})})};function qg(e,t){return function(){return e.apply(t,arguments)}}const{toString:Vb}=Object.prototype,{getPrototypeOf:rd}=Object,Da=(e=>t=>{const n=Vb.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),sn=e=>(e=e.toLowerCase(),t=>Da(t)===e),Aa=e=>t=>typeof t===e,{isArray:ri}=Array,io=Aa("undefined");function Nb(e){return e!==null&&!io(e)&&e.constructor!==null&&!io(e.constructor)&&Rt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Jg=sn("ArrayBuffer");function zb(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Jg(e.buffer),t}const $b=Aa("string"),Rt=Aa("function"),Zg=Aa("number"),Fa=e=>e!==null&&typeof e=="object",Ub=e=>e===!0||e===!1,fs=e=>{if(Da(e)!=="object")return!1;const t=rd(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Bb=sn("Date"),Hb=sn("File"),Wb=sn("Blob"),Qb=sn("FileList"),Yb=e=>Fa(e)&&Rt(e.pipe),Kb=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Rt(e.append)&&((t=Da(e))==="formdata"||t==="object"&&Rt(e.toString)&&e.toString()==="[object FormData]"))},Gb=sn("URLSearchParams"),Xb=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ho(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),ri(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let l;for(r=0;r<s;r++)l=o[r],t.call(null,e[l],l,e)}}function ev(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const tv=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,nv=e=>!io(e)&&e!==tv;function zu(){const{caseless:e}=nv(this)&&this||{},t={},n=(r,i)=>{const o=e&&ev(t,i)||i;fs(t[o])&&fs(r)?t[o]=zu(t[o],r):fs(r)?t[o]=zu({},r):ri(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&ho(arguments[r],n);return t}const qb=(e,t,n,{allOwnKeys:r}={})=>(ho(t,(i,o)=>{n&&Rt(i)?e[o]=qg(i,n):e[o]=i},{allOwnKeys:r}),e),Jb=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Zb=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},e2=(e,t,n,r)=>{let i,o,s;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!r||r(s,e,t))&&!l[s]&&(t[s]=e[s],l[s]=!0);e=n!==!1&&rd(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},t2=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},n2=e=>{if(!e)return null;if(ri(e))return e;let t=e.length;if(!Zg(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},r2=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&rd(Uint8Array)),i2=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},o2=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},s2=sn("HTMLFormElement"),a2=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),ip=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),l2=sn("RegExp"),rv=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};ho(n,(i,o)=>{let s;(s=t(i,o,e))!==!1&&(r[o]=s||i)}),Object.defineProperties(e,r)},u2=e=>{rv(e,(t,n)=>{if(Rt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Rt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},c2=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return ri(e)?r(e):r(String(e).split(t)),n},d2=()=>{},f2=(e,t)=>(e=+e,Number.isFinite(e)?e:t),El="abcdefghijklmnopqrstuvwxyz",op="0123456789",iv={DIGIT:op,ALPHA:El,ALPHA_DIGIT:El+El.toUpperCase()+op},p2=(e=16,t=iv.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function h2(e){return!!(e&&Rt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const m2=e=>{const t=new Array(10),n=(r,i)=>{if(Fa(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=ri(r)?[]:{};return ho(r,(s,l)=>{const a=n(s,i+1);!io(a)&&(o[l]=a)}),t[i]=void 0,o}}return r};return n(e,0)},g2=sn("AsyncFunction"),v2=e=>e&&(Fa(e)||Rt(e))&&Rt(e.then)&&Rt(e.catch),R={isArray:ri,isArrayBuffer:Jg,isBuffer:Nb,isFormData:Kb,isArrayBufferView:zb,isString:$b,isNumber:Zg,isBoolean:Ub,isObject:Fa,isPlainObject:fs,isUndefined:io,isDate:Bb,isFile:Hb,isBlob:Wb,isRegExp:l2,isFunction:Rt,isStream:Yb,isURLSearchParams:Gb,isTypedArray:r2,isFileList:Qb,forEach:ho,merge:zu,extend:qb,trim:Xb,stripBOM:Jb,inherits:Zb,toFlatObject:e2,kindOf:Da,kindOfTest:sn,endsWith:t2,toArray:n2,forEachEntry:i2,matchAll:o2,isHTMLForm:s2,hasOwnProperty:ip,hasOwnProp:ip,reduceDescriptors:rv,freezeMethods:u2,toObjectSet:c2,toCamelCase:a2,noop:d2,toFiniteNumber:f2,findKey:ev,global:tv,isContextDefined:nv,ALPHABET:iv,generateString:p2,isSpecCompliantForm:h2,toJSONObject:m2,isAsyncFn:g2,isThenable:v2};function de(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}R.inherits(de,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:R.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ov=de.prototype,sv={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{sv[e]={value:e}});Object.defineProperties(de,sv);Object.defineProperty(ov,"isAxiosError",{value:!0});de.from=(e,t,n,r,i,o)=>{const s=Object.create(ov);return R.toFlatObject(e,s,function(a){return a!==Error.prototype},l=>l!=="isAxiosError"),de.call(s,e.message,t,n,r,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};const y2=null;function $u(e){return R.isPlainObject(e)||R.isArray(e)}function av(e){return R.endsWith(e,"[]")?e.slice(0,-2):e}function sp(e,t,n){return e?e.concat(t).map(function(i,o){return i=av(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function x2(e){return R.isArray(e)&&!e.some($u)}const w2=R.toFlatObject(R,{},null,function(t){return/^is[A-Z]/.test(t)});function Va(e,t,n){if(!R.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=R.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,w){return!R.isUndefined(w[v])});const r=n.metaTokens,i=n.visitor||f,o=n.dots,s=n.indexes,a=(n.Blob||typeof Blob<"u"&&Blob)&&R.isSpecCompliantForm(t);if(!R.isFunction(i))throw new TypeError("visitor must be a function");function u(m){if(m===null)return"";if(R.isDate(m))return m.toISOString();if(!a&&R.isBlob(m))throw new de("Blob is not supported. Use a Buffer instead.");return R.isArrayBuffer(m)||R.isTypedArray(m)?a&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function f(m,v,w){let p=m;if(m&&!w&&typeof m=="object"){if(R.endsWith(v,"{}"))v=r?v:v.slice(0,-2),m=JSON.stringify(m);else if(R.isArray(m)&&x2(m)||(R.isFileList(m)||R.endsWith(v,"[]"))&&(p=R.toArray(m)))return v=av(v),p.forEach(function(y,S){!(R.isUndefined(y)||y===null)&&t.append(s===!0?sp([v],S,o):s===null?v:v+"[]",u(y))}),!1}return $u(m)?!0:(t.append(sp(w,v,o),u(m)),!1)}const d=[],g=Object.assign(w2,{defaultVisitor:f,convertValue:u,isVisitable:$u});function x(m,v){if(!R.isUndefined(m)){if(d.indexOf(m)!==-1)throw Error("Circular reference detected in "+v.join("."));d.push(m),R.forEach(m,function(p,h){(!(R.isUndefined(p)||p===null)&&i.call(t,p,R.isString(h)?h.trim():h,v,g))===!0&&x(p,v?v.concat(h):[h])}),d.pop()}}if(!R.isObject(e))throw new TypeError("data must be an object");return x(e),t}function ap(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function id(e,t){this._pairs=[],e&&Va(e,this,t)}const lv=id.prototype;lv.append=function(t,n){this._pairs.push([t,n])};lv.toString=function(t){const n=t?function(r){return t.call(this,r,ap)}:ap;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function S2(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function uv(e,t,n){if(!t)return e;const r=n&&n.encode||S2,i=n&&n.serialize;let o;if(i?o=i(t,n):o=R.isURLSearchParams(t)?t.toString():new id(t,n).toString(r),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class b2{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){R.forEach(this.handlers,function(r){r!==null&&t(r)})}}const lp=b2,cv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},k2=typeof URLSearchParams<"u"?URLSearchParams:id,C2=typeof FormData<"u"?FormData:null,E2=typeof Blob<"u"?Blob:null,j2={isBrowser:!0,classes:{URLSearchParams:k2,FormData:C2,Blob:E2},protocols:["http","https","file","blob","url","data"]},dv=typeof window<"u"&&typeof document<"u",O2=(e=>dv&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),_2=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",P2=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:dv,hasStandardBrowserEnv:O2,hasStandardBrowserWebWorkerEnv:_2},Symbol.toStringTag,{value:"Module"})),en={...P2,...j2};function T2(e,t){return Va(e,new en.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return en.isNode&&R.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function M2(e){return R.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function R2(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function fv(e){function t(n,r,i,o){let s=n[o++];const l=Number.isFinite(+s),a=o>=n.length;return s=!s&&R.isArray(i)?i.length:s,a?(R.hasOwnProp(i,s)?i[s]=[i[s],r]:i[s]=r,!l):((!i[s]||!R.isObject(i[s]))&&(i[s]=[]),t(n,r,i[s],o)&&R.isArray(i[s])&&(i[s]=R2(i[s])),!l)}if(R.isFormData(e)&&R.isFunction(e.entries)){const n={};return R.forEachEntry(e,(r,i)=>{t(M2(r),i,n,0)}),n}return null}function I2(e,t,n){if(R.isString(e))try{return(t||JSON.parse)(e),R.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const od={transitional:cv,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=R.isObject(t);if(o&&R.isHTMLForm(t)&&(t=new FormData(t)),R.isFormData(t))return i&&i?JSON.stringify(fv(t)):t;if(R.isArrayBuffer(t)||R.isBuffer(t)||R.isStream(t)||R.isFile(t)||R.isBlob(t))return t;if(R.isArrayBufferView(t))return t.buffer;if(R.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return T2(t,this.formSerializer).toString();if((l=R.isFileList(t))||r.indexOf("multipart/form-data")>-1){const a=this.env&&this.env.FormData;return Va(l?{"files[]":t}:t,a&&new a,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),I2(t)):t}],transformResponse:[function(t){const n=this.transitional||od.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&R.isString(t)&&(r&&!this.responseType||i)){const s=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(l){if(s)throw l.name==="SyntaxError"?de.from(l,de.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:en.classes.FormData,Blob:en.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};R.forEach(["delete","get","head","post","put","patch"],e=>{od.headers[e]={}});const sd=od,L2=R.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),D2=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),n=s.substring(0,i).trim().toLowerCase(),r=s.substring(i+1).trim(),!(!n||t[n]&&L2[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},up=Symbol("internals");function vi(e){return e&&String(e).trim().toLowerCase()}function ps(e){return e===!1||e==null?e:R.isArray(e)?e.map(ps):String(e)}function A2(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const F2=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function jl(e,t,n,r,i){if(R.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!R.isString(t)){if(R.isString(r))return t.indexOf(r)!==-1;if(R.isRegExp(r))return r.test(t)}}function V2(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function N2(e,t){const n=R.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,s){return this[r].call(this,t,i,o,s)},configurable:!0})})}class Na{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(l,a,u){const f=vi(a);if(!f)throw new Error("header name must be a non-empty string");const d=R.findKey(i,f);(!d||i[d]===void 0||u===!0||u===void 0&&i[d]!==!1)&&(i[d||a]=ps(l))}const s=(l,a)=>R.forEach(l,(u,f)=>o(u,f,a));return R.isPlainObject(t)||t instanceof this.constructor?s(t,n):R.isString(t)&&(t=t.trim())&&!F2(t)?s(D2(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=vi(t),t){const r=R.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return A2(i);if(R.isFunction(n))return n.call(this,i,r);if(R.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=vi(t),t){const r=R.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||jl(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(s){if(s=vi(s),s){const l=R.findKey(r,s);l&&(!n||jl(r,r[l],l,n))&&(delete r[l],i=!0)}}return R.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||jl(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return R.forEach(this,(i,o)=>{const s=R.findKey(r,o);if(s){n[s]=ps(i),delete n[o];return}const l=t?V2(o):String(o).trim();l!==o&&delete n[o],n[l]=ps(i),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return R.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&R.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[up]=this[up]={accessors:{}}).accessors,i=this.prototype;function o(s){const l=vi(s);r[l]||(N2(i,s),r[l]=!0)}return R.isArray(t)?t.forEach(o):o(t),this}}Na.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);R.reduceDescriptors(Na.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});R.freezeMethods(Na);const mn=Na;function Ol(e,t){const n=this||sd,r=t||n,i=mn.from(r.headers);let o=r.data;return R.forEach(e,function(l){o=l.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function pv(e){return!!(e&&e.__CANCEL__)}function mo(e,t,n){de.call(this,e??"canceled",de.ERR_CANCELED,t,n),this.name="CanceledError"}R.inherits(mo,de,{__CANCEL__:!0});function z2(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new de("Request failed with status code "+n.status,[de.ERR_BAD_REQUEST,de.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const $2=en.hasStandardBrowserEnv?{write(e,t,n,r,i,o){const s=[e+"="+encodeURIComponent(t)];R.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),R.isString(r)&&s.push("path="+r),R.isString(i)&&s.push("domain="+i),o===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function U2(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function B2(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function hv(e,t){return e&&!U2(t)?B2(e,t):t}const H2=en.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let s=o;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(s){const l=R.isString(s)?i(s):s;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function W2(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Q2(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,s;return t=t!==void 0?t:1e3,function(a){const u=Date.now(),f=r[o];s||(s=u),n[i]=a,r[i]=u;let d=o,g=0;for(;d!==i;)g+=n[d++],d=d%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-s<t)return;const x=f&&u-f;return x?Math.round(g*1e3/x):void 0}}function cp(e,t){let n=0;const r=Q2(50,250);return i=>{const o=i.loaded,s=i.lengthComputable?i.total:void 0,l=o-n,a=r(l),u=o<=s;n=o;const f={loaded:o,total:s,progress:s?o/s:void 0,bytes:l,rate:a||void 0,estimated:a&&s&&u?(s-o)/a:void 0,event:i};f[t?"download":"upload"]=!0,e(f)}}const Y2=typeof XMLHttpRequest<"u",K2=Y2&&function(e){return new Promise(function(n,r){let i=e.data;const o=mn.from(e.headers).normalize();let{responseType:s,withXSRFToken:l}=e,a;function u(){e.cancelToken&&e.cancelToken.unsubscribe(a),e.signal&&e.signal.removeEventListener("abort",a)}let f;if(R.isFormData(i)){if(en.hasStandardBrowserEnv||en.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((f=o.getContentType())!==!1){const[v,...w]=f?f.split(";").map(p=>p.trim()).filter(Boolean):[];o.setContentType([v||"multipart/form-data",...w].join("; "))}}let d=new XMLHttpRequest;if(e.auth){const v=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(v+":"+w))}const g=hv(e.baseURL,e.url);d.open(e.method.toUpperCase(),uv(g,e.params,e.paramsSerializer),!0),d.timeout=e.timeout;function x(){if(!d)return;const v=mn.from("getAllResponseHeaders"in d&&d.getAllResponseHeaders()),p={data:!s||s==="text"||s==="json"?d.responseText:d.response,status:d.status,statusText:d.statusText,headers:v,config:e,request:d};z2(function(y){n(y),u()},function(y){r(y),u()},p),d=null}if("onloadend"in d?d.onloadend=x:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(x)},d.onabort=function(){d&&(r(new de("Request aborted",de.ECONNABORTED,e,d)),d=null)},d.onerror=function(){r(new de("Network Error",de.ERR_NETWORK,e,d)),d=null},d.ontimeout=function(){let w=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const p=e.transitional||cv;e.timeoutErrorMessage&&(w=e.timeoutErrorMessage),r(new de(w,p.clarifyTimeoutError?de.ETIMEDOUT:de.ECONNABORTED,e,d)),d=null},en.hasStandardBrowserEnv&&(l&&R.isFunction(l)&&(l=l(e)),l||l!==!1&&H2(g))){const v=e.xsrfHeaderName&&e.xsrfCookieName&&$2.read(e.xsrfCookieName);v&&o.set(e.xsrfHeaderName,v)}i===void 0&&o.setContentType(null),"setRequestHeader"in d&&R.forEach(o.toJSON(),function(w,p){d.setRequestHeader(p,w)}),R.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),s&&s!=="json"&&(d.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&d.addEventListener("progress",cp(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",cp(e.onUploadProgress)),(e.cancelToken||e.signal)&&(a=v=>{d&&(r(!v||v.type?new mo(null,e,d):v),d.abort(),d=null)},e.cancelToken&&e.cancelToken.subscribe(a),e.signal&&(e.signal.aborted?a():e.signal.addEventListener("abort",a)));const m=W2(g);if(m&&en.protocols.indexOf(m)===-1){r(new de("Unsupported protocol "+m+":",de.ERR_BAD_REQUEST,e));return}d.send(i||null)})},Uu={http:y2,xhr:K2};R.forEach(Uu,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const dp=e=>`- ${e}`,G2=e=>R.isFunction(e)||e===null||e===!1,mv={getAdapter:e=>{e=R.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let o=0;o<t;o++){n=e[o];let s;if(r=n,!G2(n)&&(r=Uu[(s=String(n)).toLowerCase()],r===void 0))throw new de(`Unknown adapter '${s}'`);if(r)break;i[s||"#"+o]=r}if(!r){const o=Object.entries(i).map(([l,a])=>`adapter ${l} `+(a===!1?"is not supported by the environment":"is not available in the build"));let s=t?o.length>1?`since :
`+o.map(dp).join(`
`):" "+dp(o[0]):"as no adapter specified";throw new de("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:Uu};function _l(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new mo(null,e)}function fp(e){return _l(e),e.headers=mn.from(e.headers),e.data=Ol.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),mv.getAdapter(e.adapter||sd.adapter)(e).then(function(r){return _l(e),r.data=Ol.call(e,e.transformResponse,r),r.headers=mn.from(r.headers),r},function(r){return pv(r)||(_l(e),r&&r.response&&(r.response.data=Ol.call(e,e.transformResponse,r.response),r.response.headers=mn.from(r.response.headers))),Promise.reject(r)})}const pp=e=>e instanceof mn?e.toJSON():e;function Jr(e,t){t=t||{};const n={};function r(u,f,d){return R.isPlainObject(u)&&R.isPlainObject(f)?R.merge.call({caseless:d},u,f):R.isPlainObject(f)?R.merge({},f):R.isArray(f)?f.slice():f}function i(u,f,d){if(R.isUndefined(f)){if(!R.isUndefined(u))return r(void 0,u,d)}else return r(u,f,d)}function o(u,f){if(!R.isUndefined(f))return r(void 0,f)}function s(u,f){if(R.isUndefined(f)){if(!R.isUndefined(u))return r(void 0,u)}else return r(void 0,f)}function l(u,f,d){if(d in t)return r(u,f);if(d in e)return r(void 0,u)}const a={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l,headers:(u,f)=>i(pp(u),pp(f),!0)};return R.forEach(Object.keys(Object.assign({},e,t)),function(f){const d=a[f]||i,g=d(e[f],t[f],f);R.isUndefined(g)&&d!==l||(n[f]=g)}),n}const gv="1.6.2",ad={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ad[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const hp={};ad.transitional=function(t,n,r){function i(o,s){return"[Axios v"+gv+"] Transitional option '"+o+"'"+s+(r?". "+r:"")}return(o,s,l)=>{if(t===!1)throw new de(i(s," has been removed"+(n?" in "+n:"")),de.ERR_DEPRECATED);return n&&!hp[s]&&(hp[s]=!0,console.warn(i(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,s,l):!0}};function X2(e,t,n){if(typeof e!="object")throw new de("options must be an object",de.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],s=t[o];if(s){const l=e[o],a=l===void 0||s(l,o,e);if(a!==!0)throw new de("option "+o+" must be "+a,de.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new de("Unknown option "+o,de.ERR_BAD_OPTION)}}const Bu={assertOptions:X2,validators:ad},Rn=Bu.validators;class Qs{constructor(t){this.defaults=t,this.interceptors={request:new lp,response:new lp}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Jr(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&Bu.assertOptions(r,{silentJSONParsing:Rn.transitional(Rn.boolean),forcedJSONParsing:Rn.transitional(Rn.boolean),clarifyTimeoutError:Rn.transitional(Rn.boolean)},!1),i!=null&&(R.isFunction(i)?n.paramsSerializer={serialize:i}:Bu.assertOptions(i,{encode:Rn.function,serialize:Rn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=o&&R.merge(o.common,o[n.method]);o&&R.forEach(["delete","get","head","post","put","patch","common"],m=>{delete o[m]}),n.headers=mn.concat(s,o);const l=[];let a=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(a=a&&v.synchronous,l.unshift(v.fulfilled,v.rejected))});const u=[];this.interceptors.response.forEach(function(v){u.push(v.fulfilled,v.rejected)});let f,d=0,g;if(!a){const m=[fp.bind(this),void 0];for(m.unshift.apply(m,l),m.push.apply(m,u),g=m.length,f=Promise.resolve(n);d<g;)f=f.then(m[d++],m[d++]);return f}g=l.length;let x=n;for(d=0;d<g;){const m=l[d++],v=l[d++];try{x=m(x)}catch(w){v.call(this,w);break}}try{f=fp.call(this,x)}catch(m){return Promise.reject(m)}for(d=0,g=u.length;d<g;)f=f.then(u[d++],u[d++]);return f}getUri(t){t=Jr(this.defaults,t);const n=hv(t.baseURL,t.url);return uv(n,t.params,t.paramsSerializer)}}R.forEach(["delete","get","head","options"],function(t){Qs.prototype[t]=function(n,r){return this.request(Jr(r||{},{method:t,url:n,data:(r||{}).data}))}});R.forEach(["post","put","patch"],function(t){function n(r){return function(o,s,l){return this.request(Jr(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}Qs.prototype[t]=n(),Qs.prototype[t+"Form"]=n(!0)});const hs=Qs;class ld{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(l=>{r.subscribe(l),o=l}).then(i);return s.cancel=function(){r.unsubscribe(o)},s},t(function(o,s,l){r.reason||(r.reason=new mo(o,s,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ld(function(i){t=i}),cancel:t}}}const q2=ld;function J2(e){return function(n){return e.apply(null,n)}}function Z2(e){return R.isObject(e)&&e.isAxiosError===!0}const Hu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Hu).forEach(([e,t])=>{Hu[t]=e});const ek=Hu;function vv(e){const t=new hs(e),n=qg(hs.prototype.request,t);return R.extend(n,hs.prototype,t,{allOwnKeys:!0}),R.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return vv(Jr(e,i))},n}const ze=vv(sd);ze.Axios=hs;ze.CanceledError=mo;ze.CancelToken=q2;ze.isCancel=pv;ze.VERSION=gv;ze.toFormData=Va;ze.AxiosError=de;ze.Cancel=ze.CanceledError;ze.all=function(t){return Promise.all(t)};ze.spread=J2;ze.isAxiosError=Z2;ze.mergeConfig=Jr;ze.AxiosHeaders=mn;ze.formToJSON=e=>fv(R.isHTMLForm(e)?new FormData(e):e);ze.getAdapter=mv.getAdapter;ze.HttpStatusCode=ek;ze.default=ze;const tk=ze;function hr(e){"@babel/helpers - typeof";return hr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hr(e)}function nk(e,t){if(hr(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(hr(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function yv(e){var t=nk(e,"string");return hr(t)==="symbol"?t:String(t)}function Ei(e,t,n){return t=yv(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function mp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?mp(Object(n),!0).forEach(function(r){Ei(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):mp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function rk(e){if(Array.isArray(e))return e}function ik(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,s,l=[],a=!0,u=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);a=!0);}catch(f){u=!0,i=f}finally{try{if(!a&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(u)throw i}}return l}}function Wu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function xv(e,t){if(e){if(typeof e=="string")return Wu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Wu(e,t)}}function ok(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gn(e,t){return rk(e)||ik(e,t)||xv(e,t)||ok()}function sk(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function bn(e,t){if(e==null)return{};var n=sk(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var ak=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function lk(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,o=e.defaultValue,s=o===void 0?null:o,l=e.inputValue,a=e.menuIsOpen,u=e.onChange,f=e.onInputChange,d=e.onMenuClose,g=e.onMenuOpen,x=e.value,m=bn(e,ak),v=M.useState(l!==void 0?l:n),w=gn(v,2),p=w[0],h=w[1],y=M.useState(a!==void 0?a:i),S=gn(y,2),k=S[0],_=S[1],E=M.useState(x!==void 0?x:s),P=gn(E,2),T=P[0],I=P[1],B=M.useCallback(function(V,Q){typeof u=="function"&&u(V,Q),I(V)},[u]),A=M.useCallback(function(V,Q){var Y;typeof f=="function"&&(Y=f(V,Q)),h(Y!==void 0?Y:V)},[f]),L=M.useCallback(function(){typeof g=="function"&&g(),_(!0)},[g]),X=M.useCallback(function(){typeof d=="function"&&d(),_(!1)},[d]),Z=l!==void 0?l:p,ee=a!==void 0?a:k,ve=x!==void 0?x:T;return G(G({},m),{},{inputValue:Z,menuIsOpen:ee,onChange:B,onInputChange:A,onMenuClose:X,onMenuOpen:L,value:ve})}function uk(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function gp(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,yv(r.key),r)}}function ck(e,t,n){return t&&gp(e.prototype,t),n&&gp(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Qu(e,t){return Qu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Qu(e,t)}function dk(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Qu(e,t)}function Ys(e){return Ys=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Ys(e)}function fk(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function pk(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function hk(e,t){if(t&&(hr(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return pk(e)}function mk(e){var t=fk();return function(){var r=Ys(e),i;if(t){var o=Ys(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return hk(this,i)}}function gk(e){if(Array.isArray(e))return Wu(e)}function vk(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function yk(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ud(e){return gk(e)||vk(e)||xv(e)||yk()}function xk(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const wk=Math.min,Sk=Math.max,Ks=Math.round,Ho=Math.floor,Gs=e=>({x:e,y:e});function bk(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function wv(e){return bv(e)?(e.nodeName||"").toLowerCase():"#document"}function Wt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Sv(e){var t;return(t=(bv(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function bv(e){return e instanceof Node||e instanceof Wt(e).Node}function Yu(e){return e instanceof Element||e instanceof Wt(e).Element}function cd(e){return e instanceof HTMLElement||e instanceof Wt(e).HTMLElement}function vp(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Wt(e).ShadowRoot}function kv(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=dd(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(i)}function kk(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ck(e){return["html","body","#document"].includes(wv(e))}function dd(e){return Wt(e).getComputedStyle(e)}function Ek(e){if(wv(e)==="html")return e;const t=e.assignedSlot||e.parentNode||vp(e)&&e.host||Sv(e);return vp(t)?t.host:t}function Cv(e){const t=Ek(e);return Ck(t)?e.ownerDocument?e.ownerDocument.body:e.body:cd(t)&&kv(t)?t:Cv(t)}function Xs(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=Cv(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),s=Wt(i);return o?t.concat(s,s.visualViewport||[],kv(i)?i:[],s.frameElement&&n?Xs(s.frameElement):[]):t.concat(i,Xs(i,[],n))}function jk(e){const t=dd(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=cd(e),o=i?e.offsetWidth:n,s=i?e.offsetHeight:r,l=Ks(n)!==o||Ks(r)!==s;return l&&(n=o,r=s),{width:n,height:r,$:l}}function fd(e){return Yu(e)?e:e.contextElement}function Pl(e){const t=fd(e);if(!cd(t))return Gs(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=jk(t);let s=(o?Ks(n.width):n.width)/r,l=(o?Ks(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const Ok=Gs(0);function _k(e){const t=Wt(e);return!kk()||!t.visualViewport?Ok:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Pk(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Wt(e)?!1:t}function yp(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=fd(e);let s=Gs(1);t&&(r?Yu(r)&&(s=Pl(r)):s=Pl(e));const l=Pk(o,n,r)?_k(o):Gs(0);let a=(i.left+l.x)/s.x,u=(i.top+l.y)/s.y,f=i.width/s.x,d=i.height/s.y;if(o){const g=Wt(o),x=r&&Yu(r)?Wt(r):r;let m=g.frameElement;for(;m&&r&&x!==g;){const v=Pl(m),w=m.getBoundingClientRect(),p=dd(m),h=w.left+(m.clientLeft+parseFloat(p.paddingLeft))*v.x,y=w.top+(m.clientTop+parseFloat(p.paddingTop))*v.y;a*=v.x,u*=v.y,f*=v.x,d*=v.y,a+=h,u+=y,m=Wt(m).frameElement}}return bk({width:f,height:d,x:a,y:u})}function Tk(e,t){let n=null,r;const i=Sv(e);function o(){clearTimeout(r),n&&n.disconnect(),n=null}function s(l,a){l===void 0&&(l=!1),a===void 0&&(a=1),o();const{left:u,top:f,width:d,height:g}=e.getBoundingClientRect();if(l||t(),!d||!g)return;const x=Ho(f),m=Ho(i.clientWidth-(u+d)),v=Ho(i.clientHeight-(f+g)),w=Ho(u),h={rootMargin:-x+"px "+-m+"px "+-v+"px "+-w+"px",threshold:Sk(0,wk(1,a))||1};let y=!0;function S(k){const _=k[0].intersectionRatio;if(_!==a){if(!y)return s();_?s(!1,_):r=setTimeout(()=>{s(!1,1e-7)},100)}y=!1}try{n=new IntersectionObserver(S,{...h,root:i.ownerDocument})}catch{n=new IntersectionObserver(S,h)}n.observe(e)}return s(!0),o}function Mk(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=r,u=fd(e),f=i||o?[...u?Xs(u):[],...Xs(t)]:[];f.forEach(p=>{i&&p.addEventListener("scroll",n,{passive:!0}),o&&p.addEventListener("resize",n)});const d=u&&l?Tk(u,n):null;let g=-1,x=null;s&&(x=new ResizeObserver(p=>{let[h]=p;h&&h.target===u&&x&&(x.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{x&&x.observe(t)})),n()}),u&&!a&&x.observe(u),x.observe(t));let m,v=a?yp(e):null;a&&w();function w(){const p=yp(e);v&&(p.x!==v.x||p.y!==v.y||p.width!==v.width||p.height!==v.height)&&n(),v=p,m=requestAnimationFrame(w)}return n(),()=>{f.forEach(p=>{i&&p.removeEventListener("scroll",n),o&&p.removeEventListener("resize",n)}),d&&d(),x&&x.disconnect(),x=null,a&&cancelAnimationFrame(m)}}var Ku=M.useLayoutEffect,Rk=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],qs=function(){};function Ik(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function Lk(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=[].concat(r);if(t&&e)for(var s in t)t.hasOwnProperty(s)&&t[s]&&o.push("".concat(Ik(e,s)));return o.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var xp=function(t){return Bk(t)?t.filter(Boolean):hr(t)==="object"&&t!==null?[t]:[]},Ev=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=bn(t,Rk);return G({},n)},De=function(t,n,r){var i=t.cx,o=t.getStyles,s=t.getClassNames,l=t.className;return{css:o(n,t),className:i(r??{},s(n,t),l)}};function za(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function Dk(e){return za(e)?window.innerHeight:e.clientHeight}function jv(e){return za(e)?window.pageYOffset:e.scrollTop}function Js(e,t){if(za(e)){window.scrollTo(0,t);return}e.scrollTop=t}function Ak(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function Fk(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function Wo(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:qs,i=jv(e),o=t-i,s=10,l=0;function a(){l+=s;var u=Fk(l,i,o,n);Js(e,u),l<n?window.requestAnimationFrame(a):r(e)}a()}function wp(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?Js(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&Js(e,Math.max(t.offsetTop-i,0))}function Vk(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function Sp(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function Nk(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var Ov=!1,zk={get passive(){return Ov=!0}},Qo=typeof window<"u"?window:{};Qo.addEventListener&&Qo.removeEventListener&&(Qo.addEventListener("p",qs,zk),Qo.removeEventListener("p",qs,!1));var $k=Ov;function Uk(e){return e!=null}function Bk(e){return Array.isArray(e)}function Yo(e,t,n){return e?t:n}var Hk=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=Object.entries(t).filter(function(s){var l=gn(s,1),a=l[0];return!r.includes(a)});return o.reduce(function(s,l){var a=gn(l,2),u=a[0],f=a[1];return s[u]=f,s},{})},Wk=["children","innerProps"],Qk=["children","innerProps"];function Yk(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,o=e.shouldScroll,s=e.isFixedPosition,l=e.controlHeight,a=Ak(n),u={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return u;var f=a.getBoundingClientRect(),d=f.height,g=n.getBoundingClientRect(),x=g.bottom,m=g.height,v=g.top,w=n.offsetParent.getBoundingClientRect(),p=w.top,h=s?window.innerHeight:Dk(a),y=jv(a),S=parseInt(getComputedStyle(n).marginBottom,10),k=parseInt(getComputedStyle(n).marginTop,10),_=p-k,E=h-v,P=_+y,T=d-y-v,I=x-h+y+S,B=y+v-k,A=160;switch(i){case"auto":case"bottom":if(E>=m)return{placement:"bottom",maxHeight:t};if(T>=m&&!s)return o&&Wo(a,I,A),{placement:"bottom",maxHeight:t};if(!s&&T>=r||s&&E>=r){o&&Wo(a,I,A);var L=s?E-S:T-S;return{placement:"bottom",maxHeight:L}}if(i==="auto"||s){var X=t,Z=s?_:P;return Z>=r&&(X=Math.min(Z-S-l,t)),{placement:"top",maxHeight:X}}if(i==="bottom")return o&&Js(a,I),{placement:"bottom",maxHeight:t};break;case"top":if(_>=m)return{placement:"top",maxHeight:t};if(P>=m&&!s)return o&&Wo(a,B,A),{placement:"top",maxHeight:t};if(!s&&P>=r||s&&_>=r){var ee=t;return(!s&&P>=r||s&&_>=r)&&(ee=s?_-k:P-k),o&&Wo(a,B,A),{placement:"top",maxHeight:ee}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return u}function Kk(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var _v=function(t){return t==="auto"?"bottom":t},Gk=function(t,n){var r,i=t.placement,o=t.theme,s=o.borderRadius,l=o.spacing,a=o.colors;return G((r={label:"menu"},Ei(r,Kk(i),"100%"),Ei(r,"position","absolute"),Ei(r,"width","100%"),Ei(r,"zIndex",1),r),n?{}:{backgroundColor:a.neutral0,borderRadius:s,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},Pv=M.createContext(null),Xk=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,o=t.menuPlacement,s=t.menuPosition,l=t.menuShouldScrollIntoView,a=t.theme,u=M.useContext(Pv)||{},f=u.setPortalPlacement,d=M.useRef(null),g=M.useState(i),x=gn(g,2),m=x[0],v=x[1],w=M.useState(null),p=gn(w,2),h=p[0],y=p[1],S=a.spacing.controlHeight;return Ku(function(){var k=d.current;if(k){var _=s==="fixed",E=l&&!_,P=Yk({maxHeight:i,menuEl:k,minHeight:r,placement:o,shouldScroll:E,isFixedPosition:_,controlHeight:S});v(P.maxHeight),y(P.placement),f==null||f(P.placement)}},[i,o,s,l,r,f,S]),n({ref:d,placerProps:G(G({},t),{},{placement:h||_v(o),maxHeight:m})})},qk=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return K("div",q({},De(t,"menu",{menu:!0}),{ref:r},i),n)},Jk=qk,Zk=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return G({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},eC=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,o=t.isMulti;return K("div",q({},De(t,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:i},r),n)},Tv=function(t,n){var r=t.theme,i=r.spacing.baseUnit,o=r.colors;return G({textAlign:"center"},n?{}:{color:o.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},tC=Tv,nC=Tv,rC=function(t){var n=t.children,r=n===void 0?"No options":n,i=t.innerProps,o=bn(t,Wk);return K("div",q({},De(G(G({},o),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},iC=function(t){var n=t.children,r=n===void 0?"Loading...":n,i=t.innerProps,o=bn(t,Qk);return K("div",q({},De(G(G({},o),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},oC=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},sC=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,o=t.innerProps,s=t.menuPlacement,l=t.menuPosition,a=M.useRef(null),u=M.useRef(null),f=M.useState(_v(s)),d=gn(f,2),g=d[0],x=d[1],m=M.useMemo(function(){return{setPortalPlacement:x}},[]),v=M.useState(null),w=gn(v,2),p=w[0],h=w[1],y=M.useCallback(function(){if(i){var E=Vk(i),P=l==="fixed"?0:window.pageYOffset,T=E[g]+P;(T!==(p==null?void 0:p.offset)||E.left!==(p==null?void 0:p.rect.left)||E.width!==(p==null?void 0:p.rect.width))&&h({offset:T,rect:E})}},[i,l,g,p==null?void 0:p.offset,p==null?void 0:p.rect.left,p==null?void 0:p.rect.width]);Ku(function(){y()},[y]);var S=M.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),i&&a.current&&(u.current=Mk(i,a.current,y,{elementResize:"ResizeObserver"in window}))},[i,y]);Ku(function(){S()},[S]);var k=M.useCallback(function(E){a.current=E,S()},[S]);if(!n&&l!=="fixed"||!p)return null;var _=K("div",q({ref:k},De(G(G({},t),{},{offset:p.offset,position:l,rect:p.rect}),"menuPortal",{"menu-portal":!0}),o),r);return K(Pv.Provider,{value:m},n?fo.createPortal(_,n):_)},aC=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},lC=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,o=t.isRtl;return K("div",q({},De(t,"container",{"--is-disabled":i,"--is-rtl":o}),r),n)},uC=function(t,n){var r=t.theme.spacing,i=t.isMulti,o=t.hasValue,s=t.selectProps.controlShouldRenderValue;return G({alignItems:"center",display:i&&o&&s?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},cC=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,o=t.hasValue;return K("div",q({},De(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":o}),r),n)},dC=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},fC=function(t){var n=t.children,r=t.innerProps;return K("div",q({},De(t,"indicatorsContainer",{indicators:!0}),r),n)},bp,pC=["size"],hC=["innerProps","isRtl","size"],mC={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Mv=function(t){var n=t.size,r=bn(t,pC);return K("svg",q({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:mC},r))},pd=function(t){return K(Mv,q({size:20},t),K("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Rv=function(t){return K(Mv,q({size:20},t),K("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Iv=function(t,n){var r=t.isFocused,i=t.theme,o=i.spacing.baseUnit,s=i.colors;return G({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?s.neutral60:s.neutral20,padding:o*2,":hover":{color:r?s.neutral80:s.neutral40}})},gC=Iv,vC=function(t){var n=t.children,r=t.innerProps;return K("div",q({},De(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||K(Rv,null))},yC=Iv,xC=function(t){var n=t.children,r=t.innerProps;return K("div",q({},De(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||K(pd,null))},wC=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing.baseUnit,s=i.colors;return G({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?s.neutral10:s.neutral20,marginBottom:o*2,marginTop:o*2})},SC=function(t){var n=t.innerProps;return K("span",q({},n,De(t,"indicatorSeparator",{"indicator-separator":!0})))},bC=B1(bp||(bp=xk([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),kC=function(t,n){var r=t.isFocused,i=t.size,o=t.theme,s=o.colors,l=o.spacing.baseUnit;return G({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?s.neutral60:s.neutral20,padding:l*2})},Tl=function(t){var n=t.delay,r=t.offset;return K("span",{css:td({animation:"".concat(bC," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},CC=function(t){var n=t.innerProps,r=t.isRtl,i=t.size,o=i===void 0?4:i,s=bn(t,hC);return K("div",q({},De(G(G({},s),{},{innerProps:n,isRtl:r,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),K(Tl,{delay:0,offset:r}),K(Tl,{delay:160,offset:!0}),K(Tl,{delay:320,offset:!r}))},EC=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.theme,s=o.colors,l=o.borderRadius,a=o.spacing;return G({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:a.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?s.neutral5:s.neutral0,borderColor:r?s.neutral10:i?s.primary:s.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(s.primary):void 0,"&:hover":{borderColor:i?s.primary:s.neutral30}})},jC=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.innerRef,s=t.innerProps,l=t.menuIsOpen;return K("div",q({ref:o},De(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":l}),s,{"aria-disabled":r||void 0}),n)},OC=jC,_C=["data"],PC=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},TC=function(t){var n=t.children,r=t.cx,i=t.getStyles,o=t.getClassNames,s=t.Heading,l=t.headingProps,a=t.innerProps,u=t.label,f=t.theme,d=t.selectProps;return K("div",q({},De(t,"group",{group:!0}),a),K(s,q({},l,{selectProps:d,theme:f,getStyles:i,getClassNames:o,cx:r}),u),K("div",null,n))},MC=function(t,n){var r=t.theme,i=r.colors,o=r.spacing;return G({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},RC=function(t){var n=Ev(t);n.data;var r=bn(n,_C);return K("div",q({},De(t,"groupHeading",{"group-heading":!0}),r))},IC=TC,LC=["innerRef","isDisabled","isHidden","inputClassName"],DC=function(t,n){var r=t.isDisabled,i=t.value,o=t.theme,s=o.spacing,l=o.colors;return G(G({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},AC),n?{}:{margin:s.baseUnit/2,paddingBottom:s.baseUnit/2,paddingTop:s.baseUnit/2,color:l.neutral80})},Lv={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},AC={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":G({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Lv)},FC=function(t){return G({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},Lv)},VC=function(t){var n=t.cx,r=t.value,i=Ev(t),o=i.innerRef,s=i.isDisabled,l=i.isHidden,a=i.inputClassName,u=bn(i,LC);return K("div",q({},De(t,"input",{"input-container":!0}),{"data-value":r||""}),K("input",q({className:n({input:!0},a),ref:o,style:FC(l),disabled:s},u)))},NC=VC,zC=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,s=r.colors;return G({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:s.neutral10,borderRadius:o/2,margin:i.baseUnit/2})},$C=function(t,n){var r=t.theme,i=r.borderRadius,o=r.colors,s=t.cropWithEllipsis;return G({overflow:"hidden",textOverflow:s||s===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},UC=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,s=r.colors,l=t.isFocused;return G({alignItems:"center",display:"flex"},n?{}:{borderRadius:o/2,backgroundColor:l?s.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:s.dangerLight,color:s.danger}})},Dv=function(t){var n=t.children,r=t.innerProps;return K("div",r,n)},BC=Dv,HC=Dv;function WC(e){var t=e.children,n=e.innerProps;return K("div",q({role:"button"},n),t||K(pd,{size:14}))}var QC=function(t){var n=t.children,r=t.components,i=t.data,o=t.innerProps,s=t.isDisabled,l=t.removeProps,a=t.selectProps,u=r.Container,f=r.Label,d=r.Remove;return K(u,{data:i,innerProps:G(G({},De(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":s})),o),selectProps:a},K(f,{data:i,innerProps:G({},De(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:a},n),K(d,{data:i,innerProps:G(G({},De(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},l),selectProps:a}))},YC=QC,KC=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.isSelected,s=t.theme,l=s.spacing,a=s.colors;return G({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:o?a.primary:i?a.primary25:"transparent",color:r?a.neutral20:o?a.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?a.primary:a.primary50}})},GC=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.isSelected,s=t.innerRef,l=t.innerProps;return K("div",q({},De(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":o}),{ref:s,"aria-disabled":r},l),n)},XC=GC,qC=function(t,n){var r=t.theme,i=r.spacing,o=r.colors;return G({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:o.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},JC=function(t){var n=t.children,r=t.innerProps;return K("div",q({},De(t,"placeholder",{placeholder:!0}),r),n)},ZC=JC,eE=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing,s=i.colors;return G({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?s.neutral40:s.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},tE=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return K("div",q({},De(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},nE=tE,rE={ClearIndicator:xC,Control:OC,DropdownIndicator:vC,DownChevron:Rv,CrossIcon:pd,Group:IC,GroupHeading:RC,IndicatorsContainer:fC,IndicatorSeparator:SC,Input:NC,LoadingIndicator:CC,Menu:Jk,MenuList:eC,MenuPortal:sC,LoadingMessage:iC,NoOptionsMessage:rC,MultiValue:YC,MultiValueContainer:BC,MultiValueLabel:HC,MultiValueRemove:WC,Option:XC,Placeholder:ZC,SelectContainer:lC,SingleValue:nE,ValueContainer:cC},iE=function(t){return G(G({},rE),t.components)},kp=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function oE(e,t){return!!(e===t||kp(e)&&kp(t))}function sE(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!oE(e[n],t[n]))return!1;return!0}function aE(e,t){t===void 0&&(t=sE);var n=null;function r(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var s=e.apply(this,i);return n={lastResult:s,lastArgs:i,lastThis:this},s}return r.clear=function(){n=null},r}var lE={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},uE=function(t){return K("span",q({css:lE},t))},Cp=uE,cE={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.tabSelectsValue,o=t.context,s=t.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return s?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,o=t.labels,s=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return s?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,o=t.label,s=o===void 0?"":o,l=t.selectValue,a=t.isDisabled,u=t.isSelected,f=t.isAppleDevice,d=function(v,w){return v&&v.length?"".concat(v.indexOf(w)+1," of ").concat(v.length):""};if(n==="value"&&l)return"value ".concat(s," focused, ").concat(d(l,r),".");if(n==="menu"&&f){var g=a?" disabled":"",x="".concat(u?" selected":"").concat(g);return"".concat(s).concat(x,", ").concat(d(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},dE=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,o=t.focusableOptions,s=t.isFocused,l=t.selectValue,a=t.selectProps,u=t.id,f=t.isAppleDevice,d=a.ariaLiveMessages,g=a.getOptionLabel,x=a.inputValue,m=a.isMulti,v=a.isOptionDisabled,w=a.isSearchable,p=a.menuIsOpen,h=a.options,y=a.screenReaderStatus,S=a.tabSelectsValue,k=a.isLoading,_=a["aria-label"],E=a["aria-live"],P=M.useMemo(function(){return G(G({},cE),d||{})},[d]),T=M.useMemo(function(){var Z="";if(n&&P.onChange){var ee=n.option,ve=n.options,V=n.removedValue,Q=n.removedValues,Y=n.value,ce=function(Ze){return Array.isArray(Ze)?null:Ze},ne=V||ee||ce(Y),je=ne?g(ne):"",we=ve||Q||void 0,$e=we?we.map(g):[],he=G({isDisabled:ne&&v(ne,l),label:je,labels:$e},n);Z=P.onChange(he)}return Z},[n,P,v,l,g]),I=M.useMemo(function(){var Z="",ee=r||i,ve=!!(r&&l&&l.includes(r));if(ee&&P.onFocus){var V={focused:ee,label:g(ee),isDisabled:v(ee,l),isSelected:ve,options:o,context:ee===r?"menu":"value",selectValue:l,isAppleDevice:f};Z=P.onFocus(V)}return Z},[r,i,g,v,P,o,l,f]),B=M.useMemo(function(){var Z="";if(p&&h.length&&!k&&P.onFilter){var ee=y({count:o.length});Z=P.onFilter({inputValue:x,resultsMessage:ee})}return Z},[o,x,p,P,h,y,k]),A=(n==null?void 0:n.action)==="initial-input-focus",L=M.useMemo(function(){var Z="";if(P.guidance){var ee=i?"value":p?"menu":"input";Z=P.guidance({"aria-label":_,context:ee,isDisabled:r&&v(r,l),isMulti:m,isSearchable:w,tabSelectsValue:S,isInitialFocus:A})}return Z},[_,r,i,m,v,w,p,P,l,S,A]),X=K(M.Fragment,null,K("span",{id:"aria-selection"},T),K("span",{id:"aria-focused"},I),K("span",{id:"aria-results"},B),K("span",{id:"aria-guidance"},L));return K(M.Fragment,null,K(Cp,{id:u},A&&X),K(Cp,{"aria-live":E,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},s&&!A&&X))},fE=dE,Gu=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],pE=new RegExp("["+Gu.map(function(e){return e.letters}).join("")+"]","g"),Av={};for(var Ml=0;Ml<Gu.length;Ml++)for(var Rl=Gu[Ml],Il=0;Il<Rl.letters.length;Il++)Av[Rl.letters[Il]]=Rl.base;var Fv=function(t){return t.replace(pE,function(n){return Av[n]})},hE=aE(Fv),Ep=function(t){return t.replace(/^\s+|\s+$/g,"")},mE=function(t){return"".concat(t.label," ").concat(t.value)},gE=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=G({ignoreCase:!0,ignoreAccents:!0,stringify:mE,trim:!0,matchFrom:"any"},t),o=i.ignoreCase,s=i.ignoreAccents,l=i.stringify,a=i.trim,u=i.matchFrom,f=a?Ep(r):r,d=a?Ep(l(n)):l(n);return o&&(f=f.toLowerCase(),d=d.toLowerCase()),s&&(f=hE(f),d=Fv(d)),u==="start"?d.substr(0,f.length)===f:d.indexOf(f)>-1}},vE=["innerRef"];function yE(e){var t=e.innerRef,n=bn(e,vE),r=Hk(n,"onExited","in","enter","exit","appear");return K("input",q({ref:t},r,{css:td({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var xE=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function wE(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,o=e.onTopLeave,s=M.useRef(!1),l=M.useRef(!1),a=M.useRef(0),u=M.useRef(null),f=M.useCallback(function(w,p){if(u.current!==null){var h=u.current,y=h.scrollTop,S=h.scrollHeight,k=h.clientHeight,_=u.current,E=p>0,P=S-k-y,T=!1;P>p&&s.current&&(r&&r(w),s.current=!1),E&&l.current&&(o&&o(w),l.current=!1),E&&p>P?(n&&!s.current&&n(w),_.scrollTop=S,T=!0,s.current=!0):!E&&-p>y&&(i&&!l.current&&i(w),_.scrollTop=0,T=!0,l.current=!0),T&&xE(w)}},[n,r,i,o]),d=M.useCallback(function(w){f(w,w.deltaY)},[f]),g=M.useCallback(function(w){a.current=w.changedTouches[0].clientY},[]),x=M.useCallback(function(w){var p=a.current-w.changedTouches[0].clientY;f(w,p)},[f]),m=M.useCallback(function(w){if(w){var p=$k?{passive:!1}:!1;w.addEventListener("wheel",d,p),w.addEventListener("touchstart",g,p),w.addEventListener("touchmove",x,p)}},[x,g,d]),v=M.useCallback(function(w){w&&(w.removeEventListener("wheel",d,!1),w.removeEventListener("touchstart",g,!1),w.removeEventListener("touchmove",x,!1))},[x,g,d]);return M.useEffect(function(){if(t){var w=u.current;return m(w),function(){v(w)}}},[t,m,v]),function(w){u.current=w}}var jp=["boxSizing","height","overflow","paddingRight","position"],Op={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function _p(e){e.preventDefault()}function Pp(e){e.stopPropagation()}function Tp(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function Mp(){return"ontouchstart"in window||navigator.maxTouchPoints}var Rp=!!(typeof window<"u"&&window.document&&window.document.createElement),yi=0,Sr={capture:!1,passive:!1};function SE(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=M.useRef({}),o=M.useRef(null),s=M.useCallback(function(a){if(Rp){var u=document.body,f=u&&u.style;if(r&&jp.forEach(function(m){var v=f&&f[m];i.current[m]=v}),r&&yi<1){var d=parseInt(i.current.paddingRight,10)||0,g=document.body?document.body.clientWidth:0,x=window.innerWidth-g+d||0;Object.keys(Op).forEach(function(m){var v=Op[m];f&&(f[m]=v)}),f&&(f.paddingRight="".concat(x,"px"))}u&&Mp()&&(u.addEventListener("touchmove",_p,Sr),a&&(a.addEventListener("touchstart",Tp,Sr),a.addEventListener("touchmove",Pp,Sr))),yi+=1}},[r]),l=M.useCallback(function(a){if(Rp){var u=document.body,f=u&&u.style;yi=Math.max(yi-1,0),r&&yi<1&&jp.forEach(function(d){var g=i.current[d];f&&(f[d]=g)}),u&&Mp()&&(u.removeEventListener("touchmove",_p,Sr),a&&(a.removeEventListener("touchstart",Tp,Sr),a.removeEventListener("touchmove",Pp,Sr)))}},[r]);return M.useEffect(function(){if(t){var a=o.current;return s(a),function(){l(a)}}},[t,s,l]),function(a){o.current=a}}var bE=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},kE={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function CE(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,o=e.onBottomArrive,s=e.onBottomLeave,l=e.onTopArrive,a=e.onTopLeave,u=wE({isEnabled:i,onBottomArrive:o,onBottomLeave:s,onTopArrive:l,onTopLeave:a}),f=SE({isEnabled:n}),d=function(x){u(x),f(x)};return K(M.Fragment,null,n&&K("div",{onClick:bE,css:kE}),t(d))}var EE={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},jE=function(t){var n=t.name,r=t.onFocus;return K("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:EE,value:"",onChange:function(){}})},OE=jE;function hd(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function _E(){return hd(/^iPhone/i)}function Vv(){return hd(/^Mac/i)}function PE(){return hd(/^iPad/i)||Vv()&&navigator.maxTouchPoints>1}function TE(){return _E()||PE()}function ME(){return Vv()||TE()}var RE=function(t){return t.label},IE=function(t){return t.label},LE=function(t){return t.value},DE=function(t){return!!t.isDisabled},AE={clearIndicator:yC,container:aC,control:EC,dropdownIndicator:gC,group:PC,groupHeading:MC,indicatorsContainer:dC,indicatorSeparator:wC,input:DC,loadingIndicator:kC,loadingMessage:nC,menu:Gk,menuList:Zk,menuPortal:oC,multiValue:zC,multiValueLabel:$C,multiValueRemove:UC,noOptionsMessage:tC,option:KC,placeholder:qC,singleValue:eE,valueContainer:uC},FE={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},VE=4,Nv=4,NE=38,zE=Nv*2,$E={baseUnit:Nv,controlHeight:NE,menuGutter:zE},Ll={borderRadius:VE,colors:FE,spacing:$E},UE={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Sp(),captureMenuScroll:!Sp(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:gE(),formatGroupLabel:RE,getOptionLabel:IE,getOptionValue:LE,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:DE,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!Nk(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function Ip(e,t,n,r){var i=Uv(e,t,n),o=Bv(e,t,n),s=$v(e,t),l=Zs(e,t);return{type:"option",data:t,isDisabled:i,isSelected:o,label:s,value:l,index:r}}function ms(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(s,l){return Ip(e,s,t,l)}).filter(function(s){return Dp(e,s)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var o=Ip(e,n,t,r);return Dp(e,o)?o:void 0}).filter(Uk)}function zv(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,ud(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function Lp(e,t){return e.reduce(function(n,r){return r.type==="group"?n.push.apply(n,ud(r.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),n},[])}function BE(e,t){return zv(ms(e,t))}function Dp(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,o=t.isSelected,s=t.label,l=t.value;return(!Wv(e)||!o)&&Hv(e,{label:s,value:l,data:i},r)}function HE(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var o=t.indexOf(n);if(o>-1)return n;if(i<t.length)return t[i]}return null}function WE(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var Dl=function(t,n){var r,i=(r=t.find(function(o){return o.data===n}))===null||r===void 0?void 0:r.id;return i||null},$v=function(t,n){return t.getOptionLabel(n)},Zs=function(t,n){return t.getOptionValue(n)};function Uv(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function Bv(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=Zs(e,t);return n.some(function(i){return Zs(e,i)===r})}function Hv(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var Wv=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},QE=1,Qv=function(e){dk(n,e);var t=mk(n);function n(r){var i;if(uk(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.isAppleDevice=ME(),i.controlRef=null,i.getControlRef=function(a){i.controlRef=a},i.focusedOptionRef=null,i.getFocusedOptionRef=function(a){i.focusedOptionRef=a},i.menuListRef=null,i.getMenuListRef=function(a){i.menuListRef=a},i.inputRef=null,i.getInputRef=function(a){i.inputRef=a},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(a,u){var f=i.props,d=f.onChange,g=f.name;u.name=g,i.ariaOnChange(a,u),d(a,u)},i.setValue=function(a,u,f){var d=i.props,g=d.closeMenuOnSelect,x=d.isMulti,m=d.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:m}),g&&(i.setState({inputIsHiddenAfterUpdate:!x}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(a,{action:u,option:f})},i.selectOption=function(a){var u=i.props,f=u.blurInputOnSelect,d=u.isMulti,g=u.name,x=i.state.selectValue,m=d&&i.isOptionSelected(a,x),v=i.isOptionDisabled(a,x);if(m){var w=i.getOptionValue(a);i.setValue(x.filter(function(p){return i.getOptionValue(p)!==w}),"deselect-option",a)}else if(!v)d?i.setValue([].concat(ud(x),[a]),"select-option",a):i.setValue(a,"select-option");else{i.ariaOnChange(a,{action:"select-option",option:a,name:g});return}f&&i.blurInput()},i.removeValue=function(a){var u=i.props.isMulti,f=i.state.selectValue,d=i.getOptionValue(a),g=f.filter(function(m){return i.getOptionValue(m)!==d}),x=Yo(u,g,g[0]||null);i.onChange(x,{action:"remove-value",removedValue:a}),i.focusInput()},i.clearValue=function(){var a=i.state.selectValue;i.onChange(Yo(i.props.isMulti,[],null),{action:"clear",removedValues:a})},i.popValue=function(){var a=i.props.isMulti,u=i.state.selectValue,f=u[u.length-1],d=u.slice(0,u.length-1),g=Yo(a,d,d[0]||null);i.onChange(g,{action:"pop-value",removedValue:f})},i.getFocusedOptionId=function(a){return Dl(i.state.focusableOptionsWithIds,a)},i.getFocusableOptionsWithIds=function(){return Lp(ms(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var a=arguments.length,u=new Array(a),f=0;f<a;f++)u[f]=arguments[f];return Lk.apply(void 0,[i.props.classNamePrefix].concat(u))},i.getOptionLabel=function(a){return $v(i.props,a)},i.getOptionValue=function(a){return Zs(i.props,a)},i.getStyles=function(a,u){var f=i.props.unstyled,d=AE[a](u,f);d.boxSizing="border-box";var g=i.props.styles[a];return g?g(d,u):d},i.getClassNames=function(a,u){var f,d;return(f=(d=i.props.classNames)[a])===null||f===void 0?void 0:f.call(d,u)},i.getElementId=function(a){return"".concat(i.state.instancePrefix,"-").concat(a)},i.getComponents=function(){return iE(i.props)},i.buildCategorizedOptions=function(){return ms(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return zv(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(a,u){i.setState({ariaSelection:G({value:a},u)})},i.onMenuMouseDown=function(a){a.button===0&&(a.stopPropagation(),a.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(a){i.blockOptionHover=!1},i.onControlMouseDown=function(a){if(!a.defaultPrevented){var u=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?a.target.tagName!=="INPUT"&&a.target.tagName!=="TEXTAREA"&&i.onMenuClose():u&&i.openMenu("first"):(u&&(i.openAfterFocus=!0),i.focusInput()),a.target.tagName!=="INPUT"&&a.target.tagName!=="TEXTAREA"&&a.preventDefault()}},i.onDropdownIndicatorMouseDown=function(a){if(!(a&&a.type==="mousedown"&&a.button!==0)&&!i.props.isDisabled){var u=i.props,f=u.isMulti,d=u.menuIsOpen;i.focusInput(),d?(i.setState({inputIsHiddenAfterUpdate:!f}),i.onMenuClose()):i.openMenu("first"),a.preventDefault()}},i.onClearIndicatorMouseDown=function(a){a&&a.type==="mousedown"&&a.button!==0||(i.clearValue(),a.preventDefault(),i.openAfterFocus=!1,a.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(a){typeof i.props.closeMenuOnScroll=="boolean"?a.target instanceof HTMLElement&&za(a.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(a)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(a){var u=a.touches,f=u&&u.item(0);f&&(i.initialTouchX=f.clientX,i.initialTouchY=f.clientY,i.userIsDragging=!1)},i.onTouchMove=function(a){var u=a.touches,f=u&&u.item(0);if(f){var d=Math.abs(f.clientX-i.initialTouchX),g=Math.abs(f.clientY-i.initialTouchY),x=5;i.userIsDragging=d>x||g>x}},i.onTouchEnd=function(a){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(a.target)&&i.menuListRef&&!i.menuListRef.contains(a.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(a){i.userIsDragging||i.onControlMouseDown(a)},i.onClearIndicatorTouchEnd=function(a){i.userIsDragging||i.onClearIndicatorMouseDown(a)},i.onDropdownIndicatorTouchEnd=function(a){i.userIsDragging||i.onDropdownIndicatorMouseDown(a)},i.handleInputChange=function(a){var u=i.props.inputValue,f=a.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(f,{action:"input-change",prevInputValue:u}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(a){i.props.onFocus&&i.props.onFocus(a),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(a){var u=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(a),i.onInputChange("",{action:"input-blur",prevInputValue:u}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(a){if(!(i.blockOptionHover||i.state.focusedOption===a)){var u=i.getFocusableOptions(),f=u.indexOf(a);i.setState({focusedOption:a,focusedOptionId:f>-1?i.getFocusedOptionId(a):null})}},i.shouldHideSelectedOptions=function(){return Wv(i.props)},i.onValueInputFocus=function(a){a.preventDefault(),a.stopPropagation(),i.focus()},i.onKeyDown=function(a){var u=i.props,f=u.isMulti,d=u.backspaceRemovesValue,g=u.escapeClearsValue,x=u.inputValue,m=u.isClearable,v=u.isDisabled,w=u.menuIsOpen,p=u.onKeyDown,h=u.tabSelectsValue,y=u.openMenuOnFocus,S=i.state,k=S.focusedOption,_=S.focusedValue,E=S.selectValue;if(!v&&!(typeof p=="function"&&(p(a),a.defaultPrevented))){switch(i.blockOptionHover=!0,a.key){case"ArrowLeft":if(!f||x)return;i.focusValue("previous");break;case"ArrowRight":if(!f||x)return;i.focusValue("next");break;case"Delete":case"Backspace":if(x)return;if(_)i.removeValue(_);else{if(!d)return;f?i.popValue():m&&i.clearValue()}break;case"Tab":if(i.isComposing||a.shiftKey||!w||!h||!k||y&&i.isOptionSelected(k,E))return;i.selectOption(k);break;case"Enter":if(a.keyCode===229)break;if(w){if(!k||i.isComposing)return;i.selectOption(k);break}return;case"Escape":w?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:x}),i.onMenuClose()):m&&g&&i.clearValue();break;case" ":if(x)return;if(!w){i.openMenu("first");break}if(!k)return;i.selectOption(k);break;case"ArrowUp":w?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":w?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!w)return;i.focusOption("pageup");break;case"PageDown":if(!w)return;i.focusOption("pagedown");break;case"Home":if(!w)return;i.focusOption("first");break;case"End":if(!w)return;i.focusOption("last");break;default:return}a.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++QE),i.state.selectValue=xp(r.value),r.menuIsOpen&&i.state.selectValue.length){var o=i.getFocusableOptionsWithIds(),s=i.buildFocusableOptions(),l=s.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=o,i.state.focusedOption=s[l],i.state.focusedOptionId=Dl(o,s[l])}return i}return ck(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&wp(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(i){var o=this.props,s=o.isDisabled,l=o.menuIsOpen,a=this.state.isFocused;(a&&!s&&i.isDisabled||a&&l&&!i.menuIsOpen)&&this.focusInput(),a&&s&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!a&&!s&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(wp(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,o){this.props.onInputChange(i,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var o=this,s=this.state,l=s.selectValue,a=s.isFocused,u=this.buildFocusableOptions(),f=i==="first"?0:u.length-1;if(!this.props.isMulti){var d=u.indexOf(l[0]);d>-1&&(f=d)}this.scrollToFocusedOptionOnUpdate=!(a&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[f],focusedOptionId:this.getFocusedOptionId(u[f])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(i){var o=this.state,s=o.selectValue,l=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var a=s.indexOf(l);l||(a=-1);var u=s.length-1,f=-1;if(s.length){switch(i){case"previous":a===0?f=0:a===-1?f=u:f=a-1;break;case"next":a>-1&&a<u&&(f=a+1);break}this.setState({inputIsHidden:f!==-1,focusedValue:s[f]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,s=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var a=0,u=l.indexOf(s);s||(u=-1),i==="up"?a=u>0?u-1:l.length-1:i==="down"?a=(u+1)%l.length:i==="pageup"?(a=u-o,a<0&&(a=0)):i==="pagedown"?(a=u+o,a>l.length-1&&(a=l.length-1)):i==="last"&&(a=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[a],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[a])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Ll):G(G({},Ll),this.props.theme):Ll}},{key:"getCommonProps",value:function(){var i=this.clearValue,o=this.cx,s=this.getStyles,l=this.getClassNames,a=this.getValue,u=this.selectOption,f=this.setValue,d=this.props,g=d.isMulti,x=d.isRtl,m=d.options,v=this.hasValue();return{clearValue:i,cx:o,getStyles:s,getClassNames:l,getValue:a,hasValue:v,isMulti:g,isRtl:x,options:m,selectOption:u,selectProps:d,setValue:f,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,o=i.isClearable,s=i.isMulti;return o===void 0?s:o}},{key:"isOptionDisabled",value:function(i,o){return Uv(this.props,i,o)}},{key:"isOptionSelected",value:function(i,o){return Bv(this.props,i,o)}},{key:"filterOption",value:function(i,o){return Hv(this.props,i,o)}},{key:"formatOptionLabel",value:function(i,o){if(typeof this.props.formatOptionLabel=="function"){var s=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(i,{context:o,inputValue:s,selectValue:l})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,o=i.isDisabled,s=i.isSearchable,l=i.inputId,a=i.inputValue,u=i.tabIndex,f=i.form,d=i.menuIsOpen,g=i.required,x=this.getComponents(),m=x.Input,v=this.state,w=v.inputIsHidden,p=v.ariaSelection,h=this.commonProps,y=l||this.getElementId("input"),S=G(G(G({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":g,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!s&&{"aria-readonly":!0}),this.hasValue()?(p==null?void 0:p.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return s?M.createElement(m,q({},h,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:y,innerRef:this.getInputRef,isDisabled:o,isHidden:w,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:f,type:"text",value:a},S)):M.createElement(yE,q({id:y,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:qs,onFocus:this.onInputFocus,disabled:o,tabIndex:u,inputMode:"none",form:f,value:""},S))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,o=this.getComponents(),s=o.MultiValue,l=o.MultiValueContainer,a=o.MultiValueLabel,u=o.MultiValueRemove,f=o.SingleValue,d=o.Placeholder,g=this.commonProps,x=this.props,m=x.controlShouldRenderValue,v=x.isDisabled,w=x.isMulti,p=x.inputValue,h=x.placeholder,y=this.state,S=y.selectValue,k=y.focusedValue,_=y.isFocused;if(!this.hasValue()||!m)return p?null:M.createElement(d,q({},g,{key:"placeholder",isDisabled:v,isFocused:_,innerProps:{id:this.getElementId("placeholder")}}),h);if(w)return S.map(function(P,T){var I=P===k,B="".concat(i.getOptionLabel(P),"-").concat(i.getOptionValue(P));return M.createElement(s,q({},g,{components:{Container:l,Label:a,Remove:u},isFocused:I,isDisabled:v,key:B,index:T,removeProps:{onClick:function(){return i.removeValue(P)},onTouchEnd:function(){return i.removeValue(P)},onMouseDown:function(L){L.preventDefault()}},data:P}),i.formatOptionLabel(P,"value"))});if(p)return null;var E=S[0];return M.createElement(f,q({},g,{data:E,isDisabled:v}),this.formatOptionLabel(E,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),o=i.ClearIndicator,s=this.commonProps,l=this.props,a=l.isDisabled,u=l.isLoading,f=this.state.isFocused;if(!this.isClearable()||!o||a||!this.hasValue()||u)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return M.createElement(o,q({},s,{innerProps:d,isFocused:f}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),o=i.LoadingIndicator,s=this.commonProps,l=this.props,a=l.isDisabled,u=l.isLoading,f=this.state.isFocused;if(!o||!u)return null;var d={"aria-hidden":"true"};return M.createElement(o,q({},s,{innerProps:d,isDisabled:a,isFocused:f}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator,s=i.IndicatorSeparator;if(!o||!s)return null;var l=this.commonProps,a=this.props.isDisabled,u=this.state.isFocused;return M.createElement(s,q({},l,{isDisabled:a,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator;if(!o)return null;var s=this.commonProps,l=this.props.isDisabled,a=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return M.createElement(o,q({},s,{innerProps:u,isDisabled:l,isFocused:a}))}},{key:"renderMenu",value:function(){var i=this,o=this.getComponents(),s=o.Group,l=o.GroupHeading,a=o.Menu,u=o.MenuList,f=o.MenuPortal,d=o.LoadingMessage,g=o.NoOptionsMessage,x=o.Option,m=this.commonProps,v=this.state.focusedOption,w=this.props,p=w.captureMenuScroll,h=w.inputValue,y=w.isLoading,S=w.loadingMessage,k=w.minMenuHeight,_=w.maxMenuHeight,E=w.menuIsOpen,P=w.menuPlacement,T=w.menuPosition,I=w.menuPortalTarget,B=w.menuShouldBlockScroll,A=w.menuShouldScrollIntoView,L=w.noOptionsMessage,X=w.onMenuScrollToTop,Z=w.onMenuScrollToBottom;if(!E)return null;var ee=function(je,we){var $e=je.type,he=je.data,Se=je.isDisabled,Ze=je.isSelected,vt=je.label,F=je.value,H=v===he,ie=Se?void 0:function(){return i.onOptionHover(he)},oe=Se?void 0:function(){return i.selectOption(he)},te="".concat(i.getElementId("option"),"-").concat(we),ae={id:te,onClick:oe,onMouseMove:ie,onMouseOver:ie,tabIndex:-1,role:"option","aria-selected":i.isAppleDevice?void 0:Ze};return M.createElement(x,q({},m,{innerProps:ae,data:he,isDisabled:Se,isSelected:Ze,key:te,label:vt,type:$e,value:F,isFocused:H,innerRef:H?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(je.data,"menu"))},ve;if(this.hasOptions())ve=this.getCategorizedOptions().map(function(ne){if(ne.type==="group"){var je=ne.data,we=ne.options,$e=ne.index,he="".concat(i.getElementId("group"),"-").concat($e),Se="".concat(he,"-heading");return M.createElement(s,q({},m,{key:he,data:je,options:we,Heading:l,headingProps:{id:Se,data:ne.data},label:i.formatGroupLabel(ne.data)}),ne.options.map(function(Ze){return ee(Ze,"".concat($e,"-").concat(Ze.index))}))}else if(ne.type==="option")return ee(ne,"".concat(ne.index))});else if(y){var V=S({inputValue:h});if(V===null)return null;ve=M.createElement(d,m,V)}else{var Q=L({inputValue:h});if(Q===null)return null;ve=M.createElement(g,m,Q)}var Y={minMenuHeight:k,maxMenuHeight:_,menuPlacement:P,menuPosition:T,menuShouldScrollIntoView:A},ce=M.createElement(Xk,q({},m,Y),function(ne){var je=ne.ref,we=ne.placerProps,$e=we.placement,he=we.maxHeight;return M.createElement(a,q({},m,Y,{innerRef:je,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:y,placement:$e}),M.createElement(CE,{captureEnabled:p,onTopArrive:X,onBottomArrive:Z,lockEnabled:B},function(Se){return M.createElement(u,q({},m,{innerRef:function(vt){i.getMenuListRef(vt),Se(vt)},innerProps:{role:"listbox","aria-multiselectable":m.isMulti,id:i.getElementId("listbox")},isLoading:y,maxHeight:he,focusedOption:v}),ve)}))});return I||T==="fixed"?M.createElement(f,q({},m,{appendTo:I,controlElement:this.controlRef,menuPlacement:P,menuPosition:T}),ce):ce}},{key:"renderFormField",value:function(){var i=this,o=this.props,s=o.delimiter,l=o.isDisabled,a=o.isMulti,u=o.name,f=o.required,d=this.state.selectValue;if(f&&!this.hasValue()&&!l)return M.createElement(OE,{name:u,onFocus:this.onValueInputFocus});if(!(!u||l))if(a)if(s){var g=d.map(function(v){return i.getOptionValue(v)}).join(s);return M.createElement("input",{name:u,type:"hidden",value:g})}else{var x=d.length>0?d.map(function(v,w){return M.createElement("input",{key:"i-".concat(w),name:u,type:"hidden",value:i.getOptionValue(v)})}):M.createElement("input",{name:u,type:"hidden",value:""});return M.createElement("div",null,x)}else{var m=d[0]?this.getOptionValue(d[0]):"";return M.createElement("input",{name:u,type:"hidden",value:m})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,o=this.state,s=o.ariaSelection,l=o.focusedOption,a=o.focusedValue,u=o.isFocused,f=o.selectValue,d=this.getFocusableOptions();return M.createElement(fE,q({},i,{id:this.getElementId("live-region"),ariaSelection:s,focusedOption:l,focusedValue:a,isFocused:u,selectValue:f,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),o=i.Control,s=i.IndicatorsContainer,l=i.SelectContainer,a=i.ValueContainer,u=this.props,f=u.className,d=u.id,g=u.isDisabled,x=u.menuIsOpen,m=this.state.isFocused,v=this.commonProps=this.getCommonProps();return M.createElement(l,q({},v,{className:f,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:g,isFocused:m}),this.renderLiveRegion(),M.createElement(o,q({},v,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:g,isFocused:m,menuIsOpen:x}),M.createElement(a,q({},v,{isDisabled:g}),this.renderPlaceholderOrValue(),this.renderInput()),M.createElement(s,q({},v,{isDisabled:g}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,o){var s=o.prevProps,l=o.clearFocusValueOnUpdate,a=o.inputIsHiddenAfterUpdate,u=o.ariaSelection,f=o.isFocused,d=o.prevWasFocused,g=o.instancePrefix,x=i.options,m=i.value,v=i.menuIsOpen,w=i.inputValue,p=i.isMulti,h=xp(m),y={};if(s&&(m!==s.value||x!==s.options||v!==s.menuIsOpen||w!==s.inputValue)){var S=v?BE(i,h):[],k=v?Lp(ms(i,h),"".concat(g,"-option")):[],_=l?HE(o,h):null,E=WE(o,S),P=Dl(k,E);y={selectValue:h,focusedOption:E,focusedOptionId:P,focusableOptionsWithIds:k,focusedValue:_,clearFocusValueOnUpdate:!1}}var T=a!=null&&i!==s?{inputIsHidden:a,inputIsHiddenAfterUpdate:void 0}:{},I=u,B=f&&d;return f&&!B&&(I={value:Yo(p,h,h[0]||null),options:h,action:"initial-input-focus"},B=!d),(u==null?void 0:u.action)==="initial-input-focus"&&(I=null),G(G(G({},y),T),{},{prevProps:i,ariaSelection:I,prevWasFocused:B})}}]),n}(M.Component);Qv.defaultProps=UE;var YE=M.forwardRef(function(e,t){var n=lk(e);return M.createElement(Qv,q({ref:t},n))}),KE=YE;const GE=(e,t)=>{const[n,r]=M.useState(()=>{try{const o=window.localStorage.getItem(e);return o?JSON.parse(o):t}catch(o){return console.error("Error loading data from localStorage:",o),t}});return[n,o=>{try{const s=o instanceof Function?o(n):o;r(s),window.localStorage.setItem(e,JSON.stringify(s))}catch(s){console.error("Error storing data to localStorage:",s)}}]},Ap="/healthy-management-project/assets/computer1x-bHdljI7O.webp",XE="/healthy-management-project/assets/computer@2x-PvRGcLkF.webp",ln=()=>c.jsx("svg",{width:"8",height:"8",children:c.jsx("use",{href:`${ds}#star`})});var Yv={exports:{}};function qE(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Al=qE(M),JE=fo;function ZE(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var i=n[r],o=Object.getOwnPropertyDescriptor(t,i);o&&o.configurable&&e[i]===void 0&&Object.defineProperty(e,i,o)}return e}function Xu(){return(Xu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ej(e,t){e.prototype=Object.create(t.prototype),ZE(e.prototype.constructor=e,t)}function tj(e,t){if(e==null)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(i[n]=e[n]);return i}function br(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var nj=function(e,t,n,r,i,o,s,l){if(!e){var a;if(t===void 0)a=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,o,s,l],f=0;(a=new Error(t.replace(/%s/g,function(){return u[f++]}))).name="Invariant Violation"}throw a.framesToPop=1,a}},Fp=nj;function Vp(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var r=e.createTextRange();r.collapse(!0),r.moveStart("character",t),r.moveEnd("character",n-t),r.select()}}function rj(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===e&&(t=-r.moveStart("character",-e.value.length),n=-r.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}var ij={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},oj="_";function Np(e,t,n){var r="",i="",o=null,s=[];if(t===void 0&&(t=oj),n==null&&(n=ij),!e||typeof e!="string")return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return e.split("").forEach(function(a){l=!l&&a==="\\"||(l||!n[a]?(s.push(r.length),r.length===s.length-1&&(i+=a)):o=r.length+1,r+=a,!1)}),{maskChar:t,formatChars:n,prefix:i,mask:r,lastEditablePosition:o,permanents:s}}function kt(e,t){return e.permanents.indexOf(t)!==-1}function $a(e,t,n){var r=e.mask,i=e.formatChars;if(!n)return!1;if(kt(e,t))return r[t]===n;var o=i[r[t]];return new RegExp(o).test(n)}function zp(e,t){return t.split("").every(function(n,r){return kt(e,r)||!$a(e,r,n)})}function ji(e,t){var n=e.maskChar,r=e.prefix;if(!n){for(;t.length>r.length&&kt(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var i=r.length,o=t.length;o>=r.length;o--){var s=t[o];if(!kt(e,o)&&$a(e,o,s)){i=o+1;break}}return i}function Kv(e,t){return ji(e,t)===e.mask.length}function dn(e,t){var n=e.maskChar,r=e.mask,i=e.prefix;if(!n){for((t=qu(e,"",t,0)).length<i.length&&(t=i);t.length<r.length&&kt(e,t.length);)t+=r[t.length];return t}if(t)return qu(e,dn(e,""),t,0);for(var o=0;o<r.length;o++)kt(e,o)?t+=r[o]:t+=n;return t}function sj(e,t,n,r){var i=n+r,o=e.maskChar,s=e.mask,l=e.prefix,a=t.split("");if(o)return a.map(function(f,d){return d<n||i<=d?f:kt(e,d)?s[d]:o}).join("");for(var u=i;u<a.length;u++)kt(e,u)&&(a[u]="");return n=Math.max(l.length,n),a.splice(n,i-n),t=a.join(""),dn(e,t)}function qu(e,t,n,r){var i=e.mask,o=e.maskChar,s=e.prefix,l=n.split(""),a=Kv(e,t);return!o&&r>t.length&&(t+=i.slice(t.length,r)),l.every(function(u){for(;x=u,kt(e,g=r)&&x!==i[g];){if(r>=t.length&&(t+=i[r]),f=u,d=r,o&&kt(e,d)&&f===o)return!0;if(++r>=i.length)return!1}var f,d,g,x;return!$a(e,r,u)&&u!==o||(r<t.length?t=o||a||r<s.length?t.slice(0,r)+u+t.slice(r+1):(t=t.slice(0,r)+u+t.slice(r),dn(e,t)):o||(t+=u),++r<i.length)}),t}function aj(e,t,n,r){var i=e.mask,o=e.maskChar,s=n.split(""),l=r;return s.every(function(a){for(;f=a,kt(e,u=r)&&f!==i[u];)if(++r>=i.length)return!1;var u,f;return($a(e,r,a)||a===o)&&r++,r<i.length}),r-l}function lj(e,t){for(var n=t;0<=n;--n)if(!kt(e,n))return n;return null}function Ai(e,t){for(var n=e.mask,r=t;r<n.length;++r)if(!kt(e,r))return r;return null}function Fl(e){return e||e===0?e+"":""}function uj(e,t,n,r,i){var o=e.mask,s=e.prefix,l=e.lastEditablePosition,a=t,u="",f=0,d=0,g=Math.min(i.start,n.start);return n.end>i.start?d=(f=aj(e,r,u=a.slice(i.start,n.end),g))?i.length:0:a.length<r.length&&(d=r.length-a.length),a=r,d&&(d===1&&!i.length&&(g=i.start===n.start?Ai(e,n.start):lj(e,n.start)),a=sj(e,a,g,d)),a=qu(e,a,u,g),(g+=f)>=o.length?g=o.length:g<s.length&&!f?g=s.length:g>=s.length&&g<l&&f&&(g=Ai(e,g)),u||(u=null),{value:a=dn(e,a),enteredString:u,selection:{start:g,end:g}}}function cj(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}function ct(e){return typeof e=="function"}function dj(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function Gv(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function $p(e){return(Gv()?dj():function(){return setTimeout(e,1e3/60)})(e)}function Vl(e){(Gv()||clearTimeout)(e)}var fj=function(e){function t(r){var i=e.call(this,r)||this;i.focused=!1,i.mounted=!1,i.previousSelection=null,i.selectionDeferId=null,i.saveSelectionLoopDeferId=null,i.saveSelectionLoop=function(){i.previousSelection=i.getSelection(),i.saveSelectionLoopDeferId=$p(i.saveSelectionLoop)},i.runSaveSelectionLoop=function(){i.saveSelectionLoopDeferId===null&&i.saveSelectionLoop()},i.stopSaveSelectionLoop=function(){i.saveSelectionLoopDeferId!==null&&(Vl(i.saveSelectionLoopDeferId),i.saveSelectionLoopDeferId=null,i.previousSelection=null)},i.getInputDOMNode=function(){if(!i.mounted)return null;var m=JE.findDOMNode(br(br(i))),v=typeof window<"u"&&m instanceof window.Element;if(m&&!v)return null;if(m.nodeName!=="INPUT"&&(m=m.querySelector("input")),!m)throw new Error("react-input-mask: inputComponent doesn't contain input node");return m},i.getInputValue=function(){var m=i.getInputDOMNode();return m?m.value:null},i.setInputValue=function(m){var v=i.getInputDOMNode();v&&(i.value=m,v.value=m)},i.setCursorToEnd=function(){var m=ji(i.maskOptions,i.value),v=Ai(i.maskOptions,m);v!==null&&i.setCursorPosition(v)},i.setSelection=function(m,v,w){w===void 0&&(w={});var p=i.getInputDOMNode(),h=i.isFocused();p&&h&&(w.deferred||Vp(p,m,v),i.selectionDeferId!==null&&Vl(i.selectionDeferId),i.selectionDeferId=$p(function(){i.selectionDeferId=null,Vp(p,m,v)}),i.previousSelection={start:m,end:v,length:Math.abs(v-m)})},i.getSelection=function(){return rj(i.getInputDOMNode())},i.getCursorPosition=function(){return i.getSelection().start},i.setCursorPosition=function(m){i.setSelection(m,m)},i.isFocused=function(){return i.focused},i.getBeforeMaskedValueChangeConfig=function(){var m=i.maskOptions,v=m.mask,w=m.maskChar,p=m.permanents,h=m.formatChars;return{mask:v,maskChar:w,permanents:p,alwaysShowMask:!!i.props.alwaysShowMask,formatChars:h}},i.isInputAutofilled=function(m,v,w,p){var h=i.getInputDOMNode();try{if(h.matches(":-webkit-autofill"))return!0}catch{}return!i.focused||p.end<w.length&&v.end===m.length},i.onChange=function(m){var v=br(br(i)).beforePasteState,w=br(br(i)).previousSelection,p=i.props.beforeMaskedValueChange,h=i.getInputValue(),y=i.value,S=i.getSelection();i.isInputAutofilled(h,S,y,w)&&(y=dn(i.maskOptions,""),w={start:0,end:0,length:0}),v&&(w=v.selection,y=v.value,S={start:w.start+h.length,end:w.start+h.length,length:0},h=y.slice(0,w.start)+h+y.slice(w.end),i.beforePasteState=null);var k=uj(i.maskOptions,h,S,y,w),_=k.enteredString,E=k.selection,P=k.value;if(ct(p)){var T=p({value:P,selection:E},{value:y,selection:w},_,i.getBeforeMaskedValueChangeConfig());P=T.value,E=T.selection}i.setInputValue(P),ct(i.props.onChange)&&i.props.onChange(m),i.isWindowsPhoneBrowser?i.setSelection(E.start,E.end,{deferred:!0}):i.setSelection(E.start,E.end)},i.onFocus=function(m){var v=i.props.beforeMaskedValueChange,w=i.maskOptions,p=w.mask,h=w.prefix;if(i.focused=!0,i.mounted=!0,p){if(i.value)ji(i.maskOptions,i.value)<i.maskOptions.mask.length&&i.setCursorToEnd();else{var y=dn(i.maskOptions,h),S=dn(i.maskOptions,y),k=ji(i.maskOptions,S),_=Ai(i.maskOptions,k),E={start:_,end:_};if(ct(v)){var P=v({value:S,selection:E},{value:i.value,selection:null},null,i.getBeforeMaskedValueChangeConfig());S=P.value,E=P.selection}var T=S!==i.getInputValue();T&&i.setInputValue(S),T&&ct(i.props.onChange)&&i.props.onChange(m),i.setSelection(E.start,E.end)}i.runSaveSelectionLoop()}ct(i.props.onFocus)&&i.props.onFocus(m)},i.onBlur=function(m){var v=i.props.beforeMaskedValueChange,w=i.maskOptions.mask;if(i.stopSaveSelectionLoop(),i.focused=!1,w&&!i.props.alwaysShowMask&&zp(i.maskOptions,i.value)){var p="";ct(v)&&(p=v({value:p,selection:null},{value:i.value,selection:i.previousSelection},null,i.getBeforeMaskedValueChangeConfig()).value);var h=p!==i.getInputValue();h&&i.setInputValue(p),h&&ct(i.props.onChange)&&i.props.onChange(m)}ct(i.props.onBlur)&&i.props.onBlur(m)},i.onMouseDown=function(m){if(!i.focused&&document.addEventListener){i.mouseDownX=m.clientX,i.mouseDownY=m.clientY,i.mouseDownTime=new Date().getTime();var v=function w(p){if(document.removeEventListener("mouseup",w),i.focused){var h=Math.abs(p.clientX-i.mouseDownX),y=Math.abs(p.clientY-i.mouseDownY),S=Math.max(h,y),k=new Date().getTime()-i.mouseDownTime;(S<=10&&k<=200||S<=5&&k<=300)&&i.setCursorToEnd()}};document.addEventListener("mouseup",v)}ct(i.props.onMouseDown)&&i.props.onMouseDown(m)},i.onPaste=function(m){ct(i.props.onPaste)&&i.props.onPaste(m),m.defaultPrevented||(i.beforePasteState={value:i.getInputValue(),selection:i.getSelection()},i.setInputValue(""))},i.handleRef=function(m){i.props.children==null&&ct(i.props.inputRef)&&i.props.inputRef(m)};var o=r.mask,s=r.maskChar,l=r.formatChars,a=r.alwaysShowMask,u=r.beforeMaskedValueChange,f=r.defaultValue,d=r.value;i.maskOptions=Np(o,s,l),f==null&&(f=""),d==null&&(d=f);var g=Fl(d);if(i.maskOptions.mask&&(a||g)&&(g=dn(i.maskOptions,g),ct(u))){var x=r.value;r.value==null&&(x=f),g=u({value:g,selection:null},{value:x=Fl(x),selection:null},null,i.getBeforeMaskedValueChangeConfig()).value}return i.value=g,i}ej(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=cj(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var r=this.previousSelection,i=this.props,o=i.beforeMaskedValueChange,s=i.alwaysShowMask,l=i.mask,a=i.maskChar,u=i.formatChars,f=this.maskOptions,d=s||this.isFocused(),g=this.props.value!=null,x=g?Fl(this.props.value):this.value,m=r?r.start:null;if(this.maskOptions=Np(l,a,u),this.maskOptions.mask){!f.mask&&this.isFocused()&&this.runSaveSelectionLoop();var v=this.maskOptions.mask&&this.maskOptions.mask!==f.mask;if(f.mask||g||(x=this.getInputValue()),(v||this.maskOptions.mask&&(x||d))&&(x=dn(this.maskOptions,x)),v){var w=ji(this.maskOptions,x);(m===null||w<m)&&(m=Kv(this.maskOptions,x)?w:Ai(this.maskOptions,w))}!this.maskOptions.mask||!zp(this.maskOptions,x)||d||g&&this.props.value||(x="");var p={start:m,end:m};if(ct(o)){var h=o({value:x,selection:p},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());x=h.value,p=h.selection}this.value=x;var y=this.getInputValue()!==this.value;y?(this.setInputValue(this.value),this.forceUpdate()):v&&this.forceUpdate();var S=!1;p.start!=null&&p.end!=null&&(S=!r||r.start!==p.start||r.end!==p.end),(S||y)&&this.setSelection(p.start,p.end)}else f.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&Vl(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var r,i=this.props,o=(i.mask,i.alwaysShowMask,i.maskChar,i.formatChars,i.inputRef,i.beforeMaskedValueChange,i.children),s=tj(i,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(o){ct(o)||Fp(!1);var l=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],a=Xu({},s);l.forEach(function(f){return delete a[f]}),r=o(a),l.filter(function(f){return r.props[f]!=null&&r.props[f]!==s[f]}).length&&Fp(!1)}else r=Al.createElement("input",Xu({ref:this.handleRef},s));var u={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(s.disabled||s.readOnly||(u.onChange=this.onChange,u.onPaste=this.onPaste,u.onMouseDown=this.onMouseDown),s.value!=null&&(u.value=this.value)),r=Al.cloneElement(r,u)},t}(Al.Component),pj=fj;Yv.exports=pj;var hj=Yv.exports;const mj=oo(hj),gj=j.div`
  padding: 80px 0;
`,vj=j.h2`
  margin-bottom: 40px;
  font-size: 48px;
  font-weight: 600;
  line-height: 1.17;
  color: var(--typography-black);
`,yj=j.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 24px;
`,xj=j.img`
  max-width: 828px;
  height: 100%;
`,wj=j.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  flex: 1 0 0;
  max-width: 828px;
  padding: 80px;
  border-radius: 16px;
  background-color: var(--background-white);
`,Sj=j.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.33;
  color: var(--primary-bluedark);
`,bj=j.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
`,Ko=j.label`
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
`,kj=j.label`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  color: var(--primary-bluedark);
`,Cj=j(ln)`
  vertical-align: super;
`,Up=j.input`
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
`,Ej=j(mj)`
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
`,jj=j.textarea`
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
`,xi=j.p`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  color: var(--secondary-red);
`,Oj=j.button`
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
`;var go=e=>e.type==="checkbox",Ar=e=>e instanceof Date,st=e=>e==null;const Xv=e=>typeof e=="object";var He=e=>!st(e)&&!Array.isArray(e)&&Xv(e)&&!Ar(e),qv=e=>He(e)&&e.target?go(e.target)?e.target.checked:e.target.value:e,_j=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Jv=(e,t)=>e.has(_j(t)),Pj=e=>{const t=e.constructor&&e.constructor.prototype;return He(t)&&t.hasOwnProperty("isPrototypeOf")},md=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Vt(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(md&&(e instanceof Blob||e instanceof FileList))&&(n||He(e)))if(t=n?[]:{},!n&&!Pj(e))t=e;else for(const r in e)e.hasOwnProperty(r)&&(t[r]=Vt(e[r]));else return e;return t}var vo=e=>Array.isArray(e)?e.filter(Boolean):[],Le=e=>e===void 0,U=(e,t,n)=>{if(!t||!He(e))return n;const r=vo(t.split(/[,[\].]+?/)).reduce((i,o)=>st(i)?i:i[o],e);return Le(r)||r===e?Le(e[t])?n:e[t]:r},Zt=e=>typeof e=="boolean";const ea={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Ut={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},an={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Tj=Ce.createContext(null),gd=()=>Ce.useContext(Tj);var Zv=(e,t,n,r=!0)=>{const i={defaultValues:t._defaultValues};for(const o in e)Object.defineProperty(i,o,{get:()=>{const s=o;return t._proxyFormState[s]!==Ut.all&&(t._proxyFormState[s]=!r||Ut.all),n&&(n[s]=!0),e[s]}});return i},Ot=e=>He(e)&&!Object.keys(e).length,ey=(e,t,n,r)=>{n(e);const{name:i,...o}=e;return Ot(o)||Object.keys(o).length>=Object.keys(t).length||Object.keys(o).find(s=>t[s]===(!r||Ut.all))},gs=e=>Array.isArray(e)?e:[e],ty=(e,t,n)=>!e||!t||e===t||gs(e).some(r=>r&&(n?r===t:r.startsWith(t)||t.startsWith(r)));function vd(e){const t=Ce.useRef(e);t.current=e,Ce.useEffect(()=>{const n=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}function Mj(e){const t=gd(),{control:n=t.control,disabled:r,name:i,exact:o}=e||{},[s,l]=Ce.useState(n._formState),a=Ce.useRef(!0),u=Ce.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),f=Ce.useRef(i);return f.current=i,vd({disabled:r,next:d=>a.current&&ty(f.current,d.name,o)&&ey(d,u.current,n._updateFormState)&&l({...n._formState,...d}),subject:n._subjects.state}),Ce.useEffect(()=>(a.current=!0,u.current.isValid&&n._updateValid(!0),()=>{a.current=!1}),[n]),Zv(s,n,u.current,!1)}var tn=e=>typeof e=="string",ny=(e,t,n,r,i)=>tn(e)?(r&&t.watch.add(e),U(n,e,i)):Array.isArray(e)?e.map(o=>(r&&t.watch.add(o),U(n,o))):(r&&(t.watchAll=!0),n);function Rj(e){const t=gd(),{control:n=t.control,name:r,defaultValue:i,disabled:o,exact:s}=e||{},l=Ce.useRef(r);l.current=r,vd({disabled:o,subject:n._subjects.values,next:f=>{ty(l.current,f.name,s)&&u(Vt(ny(l.current,n._names,f.values||n._formValues,!1,i)))}});const[a,u]=Ce.useState(n._getWatch(r,i));return Ce.useEffect(()=>n._removeUnmounted()),a}var yd=e=>/^\w*$/.test(e),ry=e=>vo(e.replace(/["|']|\]/g,"").split(/\.|\[/));function ke(e,t,n){let r=-1;const i=yd(t)?[t]:ry(t),o=i.length,s=o-1;for(;++r<o;){const l=i[r];let a=n;if(r!==s){const u=e[l];a=He(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}e[l]=a,e=e[l]}return e}function Ij(e){const t=gd(),{name:n,disabled:r,control:i=t.control,shouldUnregister:o}=e,s=Jv(i._names.array,n),l=Rj({control:i,name:n,defaultValue:U(i._formValues,n,U(i._defaultValues,n,e.defaultValue)),exact:!0}),a=Mj({control:i,name:n}),u=Ce.useRef(i.register(n,{...e.rules,value:l}));return u.current=i.register(n,e.rules),Ce.useEffect(()=>{const f=i._options.shouldUnregister||o,d=(g,x)=>{const m=U(i._fields,g);m&&(m._f.mount=x)};if(d(n,!0),f){const g=Vt(U(i._options.defaultValues,n));ke(i._defaultValues,n,g),Le(U(i._formValues,n))&&ke(i._formValues,n,g)}return()=>{(s?f&&!i._state.action:f)?i.unregister(n):d(n,!1)}},[n,i,s,o]),Ce.useEffect(()=>{U(i._fields,n)&&i._updateDisabledField({disabled:r,fields:i._fields,name:n,value:U(i._fields,n)._f.value})},[r,n,i]),{field:{name:n,value:l,...Zt(r)||Zt(a.disabled)?{disabled:a.disabled||r}:{},onChange:Ce.useCallback(f=>u.current.onChange({target:{value:qv(f),name:n},type:ea.CHANGE}),[n]),onBlur:Ce.useCallback(()=>u.current.onBlur({target:{value:U(i._formValues,n),name:n},type:ea.BLUR}),[n,i]),ref:f=>{const d=U(i._fields,n);d&&f&&(d._f.ref={focus:()=>f.focus(),select:()=>f.select(),setCustomValidity:g=>f.setCustomValidity(g),reportValidity:()=>f.reportValidity()})}},formState:a,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!U(a.errors,n)},isDirty:{enumerable:!0,get:()=>!!U(a.dirtyFields,n)},isTouched:{enumerable:!0,get:()=>!!U(a.touchedFields,n)},error:{enumerable:!0,get:()=>U(a.errors,n)}})}}const Lj=e=>e.render(Ij(e));var Dj=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{},Bp=e=>({isOnSubmit:!e||e===Ut.onSubmit,isOnBlur:e===Ut.onBlur,isOnChange:e===Ut.onChange,isOnAll:e===Ut.all,isOnTouch:e===Ut.onTouched}),Hp=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const vs=(e,t,n,r)=>{for(const i of n||Object.keys(e)){const o=U(e,i);if(o){const{_f:s,...l}=o;if(s){if(s.refs&&s.refs[0]&&t(s.refs[0],i)&&!r)break;if(s.ref&&t(s.ref,s.name)&&!r)break}else He(l)&&vs(l,t)}}};var Aj=(e,t,n)=>{const r=vo(U(e,n));return ke(r,"root",t[n]),ke(e,n,r),e},xd=e=>e.type==="file",Nn=e=>typeof e=="function",ta=e=>{if(!md)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},ys=e=>tn(e),wd=e=>e.type==="radio",na=e=>e instanceof RegExp;const Wp={value:!1,isValid:!1},Qp={value:!0,isValid:!0};var iy=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Le(e[0].attributes.value)?Le(e[0].value)||e[0].value===""?Qp:{value:e[0].value,isValid:!0}:Qp:Wp}return Wp};const Yp={isValid:!1,value:null};var oy=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,Yp):Yp;function Kp(e,t,n="validate"){if(ys(e)||Array.isArray(e)&&e.every(ys)||Zt(e)&&!e)return{type:n,message:ys(e)?e:"",ref:t}}var kr=e=>He(e)&&!na(e)?e:{value:e,message:""},Gp=async(e,t,n,r,i)=>{const{ref:o,refs:s,required:l,maxLength:a,minLength:u,min:f,max:d,pattern:g,validate:x,name:m,valueAsNumber:v,mount:w,disabled:p}=e._f,h=U(t,m);if(!w||p)return{};const y=s?s[0]:o,S=A=>{r&&y.reportValidity&&(y.setCustomValidity(Zt(A)?"":A||""),y.reportValidity())},k={},_=wd(o),E=go(o),P=_||E,T=(v||xd(o))&&Le(o.value)&&Le(h)||ta(o)&&o.value===""||h===""||Array.isArray(h)&&!h.length,I=Dj.bind(null,m,n,k),B=(A,L,X,Z=an.maxLength,ee=an.minLength)=>{const ve=A?L:X;k[m]={type:A?Z:ee,message:ve,ref:o,...I(A?Z:ee,ve)}};if(i?!Array.isArray(h)||!h.length:l&&(!P&&(T||st(h))||Zt(h)&&!h||E&&!iy(s).isValid||_&&!oy(s).isValid)){const{value:A,message:L}=ys(l)?{value:!!l,message:l}:kr(l);if(A&&(k[m]={type:an.required,message:L,ref:y,...I(an.required,L)},!n))return S(L),k}if(!T&&(!st(f)||!st(d))){let A,L;const X=kr(d),Z=kr(f);if(!st(h)&&!isNaN(h)){const ee=o.valueAsNumber||h&&+h;st(X.value)||(A=ee>X.value),st(Z.value)||(L=ee<Z.value)}else{const ee=o.valueAsDate||new Date(h),ve=Y=>new Date(new Date().toDateString()+" "+Y),V=o.type=="time",Q=o.type=="week";tn(X.value)&&h&&(A=V?ve(h)>ve(X.value):Q?h>X.value:ee>new Date(X.value)),tn(Z.value)&&h&&(L=V?ve(h)<ve(Z.value):Q?h<Z.value:ee<new Date(Z.value))}if((A||L)&&(B(!!A,X.message,Z.message,an.max,an.min),!n))return S(k[m].message),k}if((a||u)&&!T&&(tn(h)||i&&Array.isArray(h))){const A=kr(a),L=kr(u),X=!st(A.value)&&h.length>+A.value,Z=!st(L.value)&&h.length<+L.value;if((X||Z)&&(B(X,A.message,L.message),!n))return S(k[m].message),k}if(g&&!T&&tn(h)){const{value:A,message:L}=kr(g);if(na(A)&&!h.match(A)&&(k[m]={type:an.pattern,message:L,ref:o,...I(an.pattern,L)},!n))return S(L),k}if(x){if(Nn(x)){const A=await x(h,t),L=Kp(A,y);if(L&&(k[m]={...L,...I(an.validate,L.message)},!n))return S(L.message),k}else if(He(x)){let A={};for(const L in x){if(!Ot(A)&&!n)break;const X=Kp(await x[L](h,t),y,L);X&&(A={...X,...I(L,X.message)},S(X.message),n&&(k[m]=A))}if(!Ot(A)&&(k[m]={ref:y,...A},!n))return k}}return S(!0),k};function Fj(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=Le(e)?r++:e[t[r++]];return e}function Vj(e){for(const t in e)if(e.hasOwnProperty(t)&&!Le(e[t]))return!1;return!0}function Ke(e,t){const n=Array.isArray(t)?t:yd(t)?[t]:ry(t),r=n.length===1?e:Fj(e,n),i=n.length-1,o=n[i];return r&&delete r[o],i!==0&&(He(r)&&Ot(r)||Array.isArray(r)&&Vj(r))&&Ke(e,n.slice(0,-1)),e}function Nl(){let e=[];return{get observers(){return e},next:i=>{for(const o of e)o.next&&o.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(o=>o!==i)}}),unsubscribe:()=>{e=[]}}}var ra=e=>st(e)||!Xv(e);function sr(e,t){if(ra(e)||ra(t))return e===t;if(Ar(e)&&Ar(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n){const o=e[i];if(!r.includes(i))return!1;if(i!=="ref"){const s=t[i];if(Ar(o)&&Ar(s)||He(o)&&He(s)||Array.isArray(o)&&Array.isArray(s)?!sr(o,s):o!==s)return!1}}return!0}var sy=e=>e.type==="select-multiple",Nj=e=>wd(e)||go(e),zl=e=>ta(e)&&e.isConnected,ay=e=>{for(const t in e)if(Nn(e[t]))return!0;return!1};function ia(e,t={}){const n=Array.isArray(e);if(He(e)||n)for(const r in e)Array.isArray(e[r])||He(e[r])&&!ay(e[r])?(t[r]=Array.isArray(e[r])?[]:{},ia(e[r],t[r])):st(e[r])||(t[r]=!0);return t}function ly(e,t,n){const r=Array.isArray(e);if(He(e)||r)for(const i in e)Array.isArray(e[i])||He(e[i])&&!ay(e[i])?Le(t)||ra(n[i])?n[i]=Array.isArray(e[i])?ia(e[i],[]):{...ia(e[i])}:ly(e[i],st(t)?{}:t[i],n[i]):n[i]=!sr(e[i],t[i]);return n}var $l=(e,t)=>ly(e,t,ia(t)),uy=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>Le(e)?e:t?e===""?NaN:e&&+e:n&&tn(e)?new Date(e):r?r(e):e;function Ul(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return xd(t)?t.files:wd(t)?oy(e.refs).value:sy(t)?[...t.selectedOptions].map(({value:n})=>n):go(t)?iy(e.refs).value:uy(Le(t.value)?e.ref.value:t.value,e)}var zj=(e,t,n,r)=>{const i={};for(const o of e){const s=U(t,o);s&&ke(i,o,s._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},wi=e=>Le(e)?e:na(e)?e.source:He(e)?na(e.value)?e.value.source:e.value:e,$j=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Xp(e,t,n){const r=U(e,n);if(r||yd(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const o=i.join("."),s=U(t,o),l=U(e,o);if(s&&!Array.isArray(s)&&n!==o)return{name:n};if(l&&l.type)return{name:o,error:l};i.pop()}return{name:n}}var Uj=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:(n?r.isOnChange:i.isOnChange)?e:!0,Bj=(e,t)=>!vo(U(e,t)).length&&Ke(e,t);const Hj={mode:Ut.onSubmit,reValidateMode:Ut.onChange,shouldFocusError:!0};function Wj(e={},t){let n={...Hj,...e},r={submitCount:0,isDirty:!1,isLoading:Nn(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{},disabled:!1},i={},o=He(n.defaultValues)||He(n.values)?Vt(n.defaultValues||n.values)||{}:{},s=n.shouldUnregister?{}:Vt(o),l={action:!1,mount:!1,watch:!1},a={mount:new Set,unMount:new Set,array:new Set,watch:new Set},u,f=0;const d={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},g={values:Nl(),array:Nl(),state:Nl()},x=e.resetOptions&&e.resetOptions.keepDirtyValues,m=Bp(n.mode),v=Bp(n.reValidateMode),w=n.criteriaMode===Ut.all,p=b=>O=>{clearTimeout(f),f=setTimeout(b,O)},h=async b=>{if(d.isValid||b){const O=n.resolver?Ot((await T()).errors):await B(i,!0);O!==r.isValid&&g.state.next({isValid:O})}},y=b=>d.isValidating&&g.state.next({isValidating:b}),S=(b,O=[],C,$,z=!0,N=!0)=>{if($&&C){if(l.action=!0,N&&Array.isArray(U(i,b))){const J=C(U(i,b),$.argA,$.argB);z&&ke(i,b,J)}if(N&&Array.isArray(U(r.errors,b))){const J=C(U(r.errors,b),$.argA,$.argB);z&&ke(r.errors,b,J),Bj(r.errors,b)}if(d.touchedFields&&N&&Array.isArray(U(r.touchedFields,b))){const J=C(U(r.touchedFields,b),$.argA,$.argB);z&&ke(r.touchedFields,b,J)}d.dirtyFields&&(r.dirtyFields=$l(o,s)),g.state.next({name:b,isDirty:L(b,O),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else ke(s,b,O)},k=(b,O)=>{ke(r.errors,b,O),g.state.next({errors:r.errors})},_=(b,O,C,$)=>{const z=U(i,b);if(z){const N=U(s,b,Le(C)?U(o,b):C);Le(N)||$&&$.defaultChecked||O?ke(s,b,O?N:Ul(z._f)):ee(b,N),l.mount&&h()}},E=(b,O,C,$,z)=>{let N=!1,J=!1;const be={name:b};if(!C||$){d.isDirty&&(J=r.isDirty,r.isDirty=be.isDirty=L(),N=J!==be.isDirty);const Fe=sr(U(o,b),O);J=U(r.dirtyFields,b),Fe?Ke(r.dirtyFields,b):ke(r.dirtyFields,b,!0),be.dirtyFields=r.dirtyFields,N=N||d.dirtyFields&&J!==!Fe}if(C){const Fe=U(r.touchedFields,b);Fe||(ke(r.touchedFields,b,C),be.touchedFields=r.touchedFields,N=N||d.touchedFields&&Fe!==C)}return N&&z&&g.state.next(be),N?be:{}},P=(b,O,C,$)=>{const z=U(r.errors,b),N=d.isValid&&Zt(O)&&r.isValid!==O;if(e.delayError&&C?(u=p(()=>k(b,C)),u(e.delayError)):(clearTimeout(f),u=null,C?ke(r.errors,b,C):Ke(r.errors,b)),(C?!sr(z,C):z)||!Ot($)||N){const J={...$,...N&&Zt(O)?{isValid:O}:{},errors:r.errors,name:b};r={...r,...J},g.state.next(J)}y(!1)},T=async b=>n.resolver(s,n.context,zj(b||a.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),I=async b=>{const{errors:O}=await T(b);if(b)for(const C of b){const $=U(O,C);$?ke(r.errors,C,$):Ke(r.errors,C)}else r.errors=O;return O},B=async(b,O,C={valid:!0})=>{for(const $ in b){const z=b[$];if(z){const{_f:N,...J}=z;if(N){const be=a.array.has(N.name),Fe=await Gp(z,s,w,n.shouldUseNativeValidation&&!O,be);if(Fe[N.name]&&(C.valid=!1,O))break;!O&&(U(Fe,N.name)?be?Aj(r.errors,Fe,N.name):ke(r.errors,N.name,Fe[N.name]):Ke(r.errors,N.name))}J&&await B(J,O,C)}}return C.valid},A=()=>{for(const b of a.unMount){const O=U(i,b);O&&(O._f.refs?O._f.refs.every(C=>!zl(C)):!zl(O._f.ref))&&Se(b)}a.unMount=new Set},L=(b,O)=>(b&&O&&ke(s,b,O),!sr(ne(),o)),X=(b,O,C)=>ny(b,a,{...l.mount?s:Le(O)?o:tn(b)?{[b]:O}:O},C,O),Z=b=>vo(U(l.mount?s:o,b,e.shouldUnregister?U(o,b,[]):[])),ee=(b,O,C={})=>{const $=U(i,b);let z=O;if($){const N=$._f;N&&(!N.disabled&&ke(s,b,uy(O,N)),z=ta(N.ref)&&st(O)?"":O,sy(N.ref)?[...N.ref.options].forEach(J=>J.selected=z.includes(J.value)):N.refs?go(N.ref)?N.refs.length>1?N.refs.forEach(J=>(!J.defaultChecked||!J.disabled)&&(J.checked=Array.isArray(z)?!!z.find(be=>be===J.value):z===J.value)):N.refs[0]&&(N.refs[0].checked=!!z):N.refs.forEach(J=>J.checked=J.value===z):xd(N.ref)?N.ref.value="":(N.ref.value=z,N.ref.type||g.values.next({name:b,values:{...s}})))}(C.shouldDirty||C.shouldTouch)&&E(b,z,C.shouldTouch,C.shouldDirty,!0),C.shouldValidate&&ce(b)},ve=(b,O,C)=>{for(const $ in O){const z=O[$],N=`${b}.${$}`,J=U(i,N);(a.array.has(b)||!ra(z)||J&&!J._f)&&!Ar(z)?ve(N,z,C):ee(N,z,C)}},V=(b,O,C={})=>{const $=U(i,b),z=a.array.has(b),N=Vt(O);ke(s,b,N),z?(g.array.next({name:b,values:{...s}}),(d.isDirty||d.dirtyFields)&&C.shouldDirty&&g.state.next({name:b,dirtyFields:$l(o,s),isDirty:L(b,N)})):$&&!$._f&&!st(N)?ve(b,N,C):ee(b,N,C),Hp(b,a)&&g.state.next({...r}),g.values.next({name:b,values:{...s}}),!l.mount&&t()},Q=async b=>{const O=b.target;let C=O.name,$=!0;const z=U(i,C),N=()=>O.type?Ul(z._f):qv(b),J=be=>{$=Number.isNaN(be)||be===U(s,C,be)};if(z){let be,Fe;const yo=N(),vr=b.type===ea.BLUR||b.type===ea.FOCUS_OUT,cy=!$j(z._f)&&!n.resolver&&!U(r.errors,C)&&!z._f.deps||Uj(vr,U(r.touchedFields,C),r.isSubmitted,v,m),Ua=Hp(C,a,vr);ke(s,C,yo),vr?(z._f.onBlur&&z._f.onBlur(b),u&&u(0)):z._f.onChange&&z._f.onChange(b);const Ba=E(C,yo,vr,!1),dy=!Ot(Ba)||Ua;if(!vr&&g.values.next({name:C,type:b.type,values:{...s}}),cy)return d.isValid&&h(),dy&&g.state.next({name:C,...Ua?{}:Ba});if(!vr&&Ua&&g.state.next({...r}),y(!0),n.resolver){const{errors:Sd}=await T([C]);if(J(yo),$){const fy=Xp(r.errors,i,C),bd=Xp(Sd,i,fy.name||C);be=bd.error,C=bd.name,Fe=Ot(Sd)}}else be=(await Gp(z,s,w,n.shouldUseNativeValidation))[C],J(yo),$&&(be?Fe=!1:d.isValid&&(Fe=await B(i,!0)));$&&(z._f.deps&&ce(z._f.deps),P(C,Fe,be,Ba))}},Y=(b,O)=>{if(U(r.errors,O)&&b.focus)return b.focus(),1},ce=async(b,O={})=>{let C,$;const z=gs(b);if(y(!0),n.resolver){const N=await I(Le(b)?b:z);C=Ot(N),$=b?!z.some(J=>U(N,J)):C}else b?($=(await Promise.all(z.map(async N=>{const J=U(i,N);return await B(J&&J._f?{[N]:J}:J)}))).every(Boolean),!(!$&&!r.isValid)&&h()):$=C=await B(i);return g.state.next({...!tn(b)||d.isValid&&C!==r.isValid?{}:{name:b},...n.resolver||!b?{isValid:C}:{},errors:r.errors,isValidating:!1}),O.shouldFocus&&!$&&vs(i,Y,b?z:a.mount),$},ne=b=>{const O={...o,...l.mount?s:{}};return Le(b)?O:tn(b)?U(O,b):b.map(C=>U(O,C))},je=(b,O)=>({invalid:!!U((O||r).errors,b),isDirty:!!U((O||r).dirtyFields,b),isTouched:!!U((O||r).touchedFields,b),error:U((O||r).errors,b)}),we=b=>{b&&gs(b).forEach(O=>Ke(r.errors,O)),g.state.next({errors:b?r.errors:{}})},$e=(b,O,C)=>{const $=(U(i,b,{_f:{}})._f||{}).ref;ke(r.errors,b,{...O,ref:$}),g.state.next({name:b,errors:r.errors,isValid:!1}),C&&C.shouldFocus&&$&&$.focus&&$.focus()},he=(b,O)=>Nn(b)?g.values.subscribe({next:C=>b(X(void 0,O),C)}):X(b,O,!0),Se=(b,O={})=>{for(const C of b?gs(b):a.mount)a.mount.delete(C),a.array.delete(C),O.keepValue||(Ke(i,C),Ke(s,C)),!O.keepError&&Ke(r.errors,C),!O.keepDirty&&Ke(r.dirtyFields,C),!O.keepTouched&&Ke(r.touchedFields,C),!n.shouldUnregister&&!O.keepDefaultValue&&Ke(o,C);g.values.next({values:{...s}}),g.state.next({...r,...O.keepDirty?{isDirty:L()}:{}}),!O.keepIsValid&&h()},Ze=({disabled:b,name:O,field:C,fields:$,value:z})=>{if(Zt(b)){const N=b?void 0:Le(z)?Ul(C?C._f:U($,O)._f):z;ke(s,O,N),E(O,N,!1,!1,!0)}},vt=(b,O={})=>{let C=U(i,b);const $=Zt(O.disabled);return ke(i,b,{...C||{},_f:{...C&&C._f?C._f:{ref:{name:b}},name:b,mount:!0,...O}}),a.mount.add(b),C?Ze({field:C,disabled:O.disabled,name:b}):_(b,!0,O.value),{...$?{disabled:O.disabled}:{},...n.progressive?{required:!!O.required,min:wi(O.min),max:wi(O.max),minLength:wi(O.minLength),maxLength:wi(O.maxLength),pattern:wi(O.pattern)}:{},name:b,onChange:Q,onBlur:Q,ref:z=>{if(z){vt(b,O),C=U(i,b);const N=Le(z.value)&&z.querySelectorAll&&z.querySelectorAll("input,select,textarea")[0]||z,J=Nj(N),be=C._f.refs||[];if(J?be.find(Fe=>Fe===N):N===C._f.ref)return;ke(i,b,{_f:{...C._f,...J?{refs:[...be.filter(zl),N,...Array.isArray(U(o,b))?[{}]:[]],ref:{type:N.type,name:b}}:{ref:N}}}),_(b,!1,void 0,N)}else C=U(i,b,{}),C._f&&(C._f.mount=!1),(n.shouldUnregister||O.shouldUnregister)&&!(Jv(a.array,b)&&l.action)&&a.unMount.add(b)}}},F=()=>n.shouldFocusError&&vs(i,Y,a.mount),H=b=>{Zt(b)&&(g.state.next({disabled:b}),vs(i,O=>{O.disabled=b},0,!1))},ie=(b,O)=>async C=>{C&&(C.preventDefault&&C.preventDefault(),C.persist&&C.persist());let $=Vt(s);if(g.state.next({isSubmitting:!0}),n.resolver){const{errors:z,values:N}=await T();r.errors=z,$=N}else await B(i);Ke(r.errors,"root"),Ot(r.errors)?(g.state.next({errors:{}}),await b($,C)):(O&&await O({...r.errors},C),F(),setTimeout(F)),g.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Ot(r.errors),submitCount:r.submitCount+1,errors:r.errors})},oe=(b,O={})=>{U(i,b)&&(Le(O.defaultValue)?V(b,U(o,b)):(V(b,O.defaultValue),ke(o,b,O.defaultValue)),O.keepTouched||Ke(r.touchedFields,b),O.keepDirty||(Ke(r.dirtyFields,b),r.isDirty=O.defaultValue?L(b,U(o,b)):L()),O.keepError||(Ke(r.errors,b),d.isValid&&h()),g.state.next({...r}))},te=(b,O={})=>{const C=b?Vt(b):o,$=Vt(C),z=b&&!Ot(b)?$:o;if(O.keepDefaultValues||(o=C),!O.keepValues){if(O.keepDirtyValues||x)for(const N of a.mount)U(r.dirtyFields,N)?ke(z,N,U(s,N)):V(N,U(z,N));else{if(md&&Le(b))for(const N of a.mount){const J=U(i,N);if(J&&J._f){const be=Array.isArray(J._f.refs)?J._f.refs[0]:J._f.ref;if(ta(be)){const Fe=be.closest("form");if(Fe){Fe.reset();break}}}}i={}}s=e.shouldUnregister?O.keepDefaultValues?Vt(o):{}:Vt(z),g.array.next({values:{...z}}),g.values.next({values:{...z}})}a={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!l.mount&&t(),l.mount=!d.isValid||!!O.keepIsValid,l.watch=!!e.shouldUnregister,g.state.next({submitCount:O.keepSubmitCount?r.submitCount:0,isDirty:O.keepDirty?r.isDirty:!!(O.keepDefaultValues&&!sr(b,o)),isSubmitted:O.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:O.keepDirtyValues?r.dirtyFields:O.keepDefaultValues&&b?$l(o,b):{},touchedFields:O.keepTouched?r.touchedFields:{},errors:O.keepErrors?r.errors:{},isSubmitSuccessful:O.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},ae=(b,O)=>te(Nn(b)?b(s):b,O);return{control:{register:vt,unregister:Se,getFieldState:je,handleSubmit:ie,setError:$e,_executeSchema:T,_getWatch:X,_getDirty:L,_updateValid:h,_removeUnmounted:A,_updateFieldArray:S,_updateDisabledField:Ze,_getFieldArray:Z,_reset:te,_resetDefaultValues:()=>Nn(n.defaultValues)&&n.defaultValues().then(b=>{ae(b,n.resetOptions),g.state.next({isLoading:!1})}),_updateFormState:b=>{r={...r,...b}},_disableForm:H,_subjects:g,_proxyFormState:d,get _fields(){return i},get _formValues(){return s},get _state(){return l},set _state(b){l=b},get _defaultValues(){return o},get _names(){return a},set _names(b){a=b},get _formState(){return r},set _formState(b){r=b},get _options(){return n},set _options(b){n={...n,...b}}},trigger:ce,register:vt,handleSubmit:ie,watch:he,setValue:V,getValues:ne,reset:ae,resetField:oe,clearErrors:we,unregister:Se,setError:$e,setFocus:(b,O={})=>{const C=U(i,b),$=C&&C._f;if($){const z=$.refs?$.refs[0]:$.ref;z.focus&&(z.focus(),O.shouldSelect&&z.select())}},getFieldState:je}}function Qj(e={}){const t=Ce.useRef(),n=Ce.useRef(),[r,i]=Ce.useState({isDirty:!1,isValidating:!1,isLoading:Nn(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},disabled:!1,defaultValues:Nn(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...Wj(e,()=>i(s=>({...s}))),formState:r});const o=t.current.control;return o._options=e,vd({subject:o._subjects.state,next:s=>{ey(s,o._proxyFormState,o._updateFormState,!0)&&i({...o._formState})}}),Ce.useEffect(()=>o._disableForm(e.disabled),[o,e.disabled]),Ce.useEffect(()=>{if(o._proxyFormState.isDirty){const s=o._getDirty();s!==r.isDirty&&o._subjects.state.next({isDirty:s})}},[o,r.isDirty]),Ce.useEffect(()=>{e.values&&!sr(e.values,n.current)?(o._reset(e.values,o._options.resetOptions),n.current=e.values):o._resetDefaultValues()},[e.values,o]),Ce.useEffect(()=>{o._state.mount||(o._updateValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next({...o._formState})),o._removeUnmounted()}),t.current.formState=Zv(r,o),t.current}const Yj={control:(e,t)=>{const n=t.selectProps.errors;return{...e,display:"flex",width:"668px",height:"56px",marginTop:"8px",padding:"0px 16px",alignItems:"center",flexShrink:"0",alignSelf:"stretch",borderRadius:"16px",outline:"none",border:`1px solid ${n?"var(--secondary-red)":"transparent"}`,backgroundColor:"var(--background-white)",boxShadow:"0px 0px 8px 0px rgba(27, 54, 65, 0.08)","&:hover":{boxShadow:"0px 0px 16px 0px rgba(27, 54, 65, 0.16)"},"&:focus":{outline:"none",border:"1px solid var(--typography-grey)",background:"var(--background-white)",boxShadow:"0px 0px 8px 0px rgba(27, 54, 65, 0.08)"}}},dropdownIndicator:e=>({...e,color:"#062136"}),indicatorSeparator:()=>({color:"red"}),option:e=>({...e,display:"flex",alignItems:"flex-start",fontWeight:"400",backgroundColor:"var(--background-white)",color:"#1B3641","&:hover":{backgroundColor:"rgba(27, 54, 65, 0.2)",borderRadius:"16px",fontWeight:"600"}}),menu:e=>({...e,height:"auto",marginTop:"0",border:"none",borderRadius:"16px",boxShadow:"0px 0px 8px 0px rgba(27, 54, 65, 0.08)",color:"var(--primary-bluedark)",backgroundColor:"var(--background-white)"}),singleValue:e=>({...e,fontSize:"16px",fontWeight:"400",color:"var(--primary-bluedark)"})},Kj=()=>{const[e,t]=GE("key",{name:"",email:"",phone:"",service:"",comment:""}),{name:n,email:r,phone:i,service:o,comment:s}=e,{register:l,handleSubmit:a,control:u,setValue:f,formState:{errors:d},reset:g}=Qj({mode:"all",shouldFocusError:!1,defaultValues:{}});M.useEffect(()=>{const p=JSON.stringify(e);localStorage.setItem("key",p)},[e]);const x=p=>{f("service",(p==null?void 0:p.value)||""),t({...e,service:(p==null?void 0:p.value)||""})},m=p=>{t({...e,[p.target.name]:p.target.value})},v=async p=>{try{await tk.post("https://healthy-management.onrender.com/api/senddata",p),console.log(p),t({name:"",email:"",phone:"",service:"",comment:""}),g(),alert("Заявка відправлена!")}catch{alert("Помилка при відправці заявки")}},w=[{value:"Менторство та консультації",label:"Менторство та консультації"},{value:"Діагностика",label:"Діагностика"},{value:"Стратегії",label:"Стратегії"},{value:"Навчання",label:"Навчання"},{value:"Інше",label:"Інше"}];return c.jsx("section",{className:"container",id:"contact",children:c.jsxs(gj,{children:[c.jsx(vj,{children:"Контакт"}),c.jsxs(yj,{children:[c.jsxs("picture",{children:[c.jsx("source",{media:"(min-width: 1920px)",srcSet:`${Ap} 1x, ${XE} 2x`}),c.jsx(xj,{src:Ap})]}),c.jsxs(wj,{children:[c.jsx(Sj,{children:"Залишайте ваші контактні дані і ми з вами зв'яжемось"}),c.jsxs(bj,{onSubmit:a(v),children:[c.jsxs(Ko,{children:["Ім’я",c.jsx(Cj,{}),c.jsx(Up,{type:"text",placeholder:"Введіть своє ім’я",...l("name",{required:"Це поле обов'язкове для заповнення",pattern:{value:/^(?:[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,32}(?:\s+[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,32})?|[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,64})$/,message:"поле повинно містити одне або два слова"}}),value:n,onChange:m,errors:d.name}),d.name&&c.jsxs(xi,{children:[c.jsx(ln,{}),d.name.message]})]}),c.jsxs(Ko,{children:["Емейл",c.jsx(ln,{}),c.jsx(Up,{type:"email",placeholder:"Введіть емейл",...l("email",{required:"Це поле обов'язкове для заповнення",pattern:{value:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,message:"Введіть коректний емейл"}}),value:r,onChange:m,errors:d.email}),d.email&&c.jsxs(xi,{children:[c.jsx(ln,{}),d.email.message]})]}),c.jsxs(Ko,{children:["Номер телефону",c.jsx(ln,{}),c.jsx(Ej,{mask:"+38(099)999-99-99",type:"tel",placeholder:"Введіть номер телефону",...l("phone",{required:"Це поле обов'язкове для заповнення",pattern:{value:/^0\d{9}$/,message:"Введіть коректний номер телефона"}}),value:i,onChange:m,errors:d.phone}),d.phone&&c.jsxs(xi,{children:[c.jsx(ln,{}),d.phone.message]})]}),c.jsxs(Ko,{children:["Послуга",c.jsx(ln,{}),c.jsx(Lj,{name:"service",control:u,shouldUnregister:!1,render:({field:p})=>c.jsx(KE,{...l("service",{required:"Оберіть послугу"}),placeholder:"Оберіть послугу",...p,options:w,styles:Yj,errors:d.service,onChange:x,value:w.find(h=>h.value===e.service)}),value:o}),d.service&&c.jsxs(xi,{children:[c.jsx(ln,{}),d.service.message]})]}),c.jsxs(kj,{children:["Повідомлення",c.jsx(jj,{name:"comment",placeholder:"Введіть ваше повідомлення",...l("comment",{pattern:{value:/^.{0,500}$/,message:"Максимальна довжина повідомлення 500 символів"}}),value:s,onChange:m,errors:d.comment}),d.comment&&c.jsxs(xi,{children:[c.jsx(ln,{}),d.comment.message]})]}),c.jsx(Oj,{type:"submit",children:"Надіслати"})]})]})]})]})})},Gj=j.section`
  padding-top: 80px;
  padding-bottom: 80px;
`,Xj=j.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  height: 884px;
  background: var(--background-bluedark);
  border-radius: 16px;
  padding: 80px;
`,qj=j.h2`
  font-size: 48px;
  font-weight: 600;
  line-height: 56px;
  color: var(--typography-white);
`,Jj=j.p`
  color: var(--typography-white);
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  width: 828px;
`,Zj=j.span`
  color: var(--primary-yellow);
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
`,eO=j.ul`
  display: flex;
  gap: 24px;
`,tO=j.li`
  width: calc((100% - (24px * 3)) / 4);
  background: var(--background-white);
  padding: 40px;
  border-radius: 16px;
`,nO=j.a`
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
`,Go="/healthy-management-project/assets/icon-2-FNpGPcjZ.svg",Bl=[{title:"Менторство та консультації",about:["Для власників та менеджерів з питань менеджменту та розвитку, медичного маркетингу та комунікацій, з питань програм управління здоров'ям","Стейхолдерам та парнерам з питань медичного менеджменту та маркетингу"],path:Go},{title:"Діагностика",about:["Аудит бізнес-процесів","Аудит маркетингу та сервісу","Аудит системи комунікацій та Сustomer Journey Map"],path:Go},{title:"Стратегії",about:["Проведення стратегічних сесій","Розробка стратегії розвитку та маркетингу ","Розробка стратегій внутрішніх комунікацій","Розробка стратегій управління здоров'ям"],path:Go},{title:"Навчання",about:["Медичний маркетинг","Комунікації та сервіс"],path:Go}],rO=()=>c.jsx(Gj,{className:"container",id:"services",children:c.jsxs(Xj,{children:[c.jsx(qj,{children:"Послуги"}),c.jsxs(Jj,{children:["Будуємо ефективні ",c.jsx(Zj,{children:"стратегії здорового менеджменту"})," для бізнесів. Розвивайте свій бізнес за допомогою ефективних стратегій здорового менеджменту."]}),c.jsx(eO,{children:Bl==null?void 0:Bl.map(e=>c.jsx(tO,{children:c.jsx(nd,{title:e.title,about:e.about,additionalComment:!0})},e.title))}),c.jsx(nO,{href:"#contact",children:"Замовити консультацію"})]})});function iO(){const e=(t,n)=>{n.preventDefault();const r=document.getElementById(t);if(r){const i=r.getBoundingClientRect(),o=window.pageYOffset||document.documentElement.scrollTop;let s;window.innerWidth<=768?s=i.top+o-80:s=i.top+o-60,window.scrollTo({top:s,behavior:"smooth"}),setTimeout(()=>{n.target.blur()},1e3)}};return c.jsxs(c.Fragment,{children:[c.jsx(Ag,{handleSetActiveLink:e}),c.jsxs("main",{children:[c.jsx(wS,{}),c.jsx(gw,{}),c.jsx(rw,{}),c.jsx(ES,{}),c.jsx(Db,{}),c.jsx(rO,{}),c.jsx(NS,{}),c.jsx(QS,{}),c.jsx(KS,{}),c.jsx(Cb,{}),c.jsx(kw,{}),c.jsx(Kj,{})]}),c.jsx(Lg,{handleSetActiveLink:e}),c.jsx(Fb,{})]})}Hl.createRoot(document.getElementById("root")).render(c.jsx(Ce.StrictMode,{children:c.jsx(iO,{})}));
