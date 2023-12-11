function wx(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var bx=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ao(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var sh={exports:{}},ia={},ah={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lo=Symbol.for("react.element"),Sx=Symbol.for("react.portal"),kx=Symbol.for("react.fragment"),Cx=Symbol.for("react.strict_mode"),jx=Symbol.for("react.profiler"),Ex=Symbol.for("react.provider"),Ox=Symbol.for("react.context"),_x=Symbol.for("react.forward_ref"),Px=Symbol.for("react.suspense"),Tx=Symbol.for("react.memo"),Mx=Symbol.for("react.lazy"),Cd=Symbol.iterator;function Rx(e){return e===null||typeof e!="object"?null:(e=Cd&&e[Cd]||e["@@iterator"],typeof e=="function"?e:null)}var lh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},uh=Object.assign,ch={};function ei(e,t,n){this.props=e,this.context=t,this.refs=ch,this.updater=n||lh}ei.prototype.isReactComponent={};ei.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ei.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function dh(){}dh.prototype=ei.prototype;function Ju(e,t,n){this.props=e,this.context=t,this.refs=ch,this.updater=n||lh}var Zu=Ju.prototype=new dh;Zu.constructor=Ju;uh(Zu,ei.prototype);Zu.isPureReactComponent=!0;var jd=Array.isArray,fh=Object.prototype.hasOwnProperty,ec={current:null},ph={key:!0,ref:!0,__self:!0,__source:!0};function hh(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)fh.call(t,r)&&!ph.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:lo,type:e,key:o,ref:s,props:i,_owner:ec.current}}function Ix(e,t){return{$$typeof:lo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function tc(e){return typeof e=="object"&&e!==null&&e.$$typeof===lo}function Dx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ed=/\/+/g;function Ba(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Dx(""+e.key):t.toString(36)}function qo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case lo:case Sx:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Ba(s,0):r,jd(i)?(n="",e!=null&&(n=e.replace(Ed,"$&/")+"/"),qo(i,t,n,"",function(u){return u})):i!=null&&(tc(i)&&(i=Ix(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Ed,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",jd(e))for(var l=0;l<e.length;l++){o=e[l];var a=r+Ba(o,l);s+=qo(o,t,n,a,i)}else if(a=Rx(e),typeof a=="function")for(e=a.call(e),l=0;!(o=e.next()).done;)o=o.value,a=r+Ba(o,l++),s+=qo(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function bo(e,t,n){if(e==null)return e;var r=[],i=0;return qo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Lx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var lt={current:null},Jo={transition:null},Ax={ReactCurrentDispatcher:lt,ReactCurrentBatchConfig:Jo,ReactCurrentOwner:ec};ue.Children={map:bo,forEach:function(e,t,n){bo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return bo(e,function(){t++}),t},toArray:function(e){return bo(e,function(t){return t})||[]},only:function(e){if(!tc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ue.Component=ei;ue.Fragment=kx;ue.Profiler=jx;ue.PureComponent=Ju;ue.StrictMode=Cx;ue.Suspense=Px;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ax;ue.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=uh({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=ec.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)fh.call(t,a)&&!ph.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:lo,type:e.type,key:i,ref:o,props:r,_owner:s}};ue.createContext=function(e){return e={$$typeof:Ox,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ex,_context:e},e.Consumer=e};ue.createElement=hh;ue.createFactory=function(e){var t=hh.bind(null,e);return t.type=e,t};ue.createRef=function(){return{current:null}};ue.forwardRef=function(e){return{$$typeof:_x,render:e}};ue.isValidElement=tc;ue.lazy=function(e){return{$$typeof:Mx,_payload:{_status:-1,_result:e},_init:Lx}};ue.memo=function(e,t){return{$$typeof:Tx,type:e,compare:t===void 0?null:t}};ue.startTransition=function(e){var t=Jo.transition;Jo.transition={};try{e()}finally{Jo.transition=t}};ue.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ue.useCallback=function(e,t){return lt.current.useCallback(e,t)};ue.useContext=function(e){return lt.current.useContext(e)};ue.useDebugValue=function(){};ue.useDeferredValue=function(e){return lt.current.useDeferredValue(e)};ue.useEffect=function(e,t){return lt.current.useEffect(e,t)};ue.useId=function(){return lt.current.useId()};ue.useImperativeHandle=function(e,t,n){return lt.current.useImperativeHandle(e,t,n)};ue.useInsertionEffect=function(e,t){return lt.current.useInsertionEffect(e,t)};ue.useLayoutEffect=function(e,t){return lt.current.useLayoutEffect(e,t)};ue.useMemo=function(e,t){return lt.current.useMemo(e,t)};ue.useReducer=function(e,t,n){return lt.current.useReducer(e,t,n)};ue.useRef=function(e){return lt.current.useRef(e)};ue.useState=function(e){return lt.current.useState(e)};ue.useSyncExternalStore=function(e,t,n){return lt.current.useSyncExternalStore(e,t,n)};ue.useTransition=function(){return lt.current.useTransition()};ue.version="18.2.0";ah.exports=ue;var M=ah.exports;const Ce=ao(M),Od=wx({__proto__:null,default:Ce},[M]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fx=M,zx=Symbol.for("react.element"),Vx=Symbol.for("react.fragment"),Nx=Object.prototype.hasOwnProperty,$x=Fx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ux={key:!0,ref:!0,__self:!0,__source:!0};function mh(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Nx.call(t,r)&&!Ux.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:zx,type:e,key:o,ref:s,props:i,_owner:$x.current}}ia.Fragment=Vx;ia.jsx=mh;ia.jsxs=mh;sh.exports=ia;var c=sh.exports,Bl={},gh={exports:{}},Ct={},vh={exports:{}},xh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,Q){var Y=z.length;z.push(Q);e:for(;0<Y;){var ce=Y-1>>>1,ne=z[ce];if(0<i(ne,Q))z[ce]=Q,z[Y]=ne,Y=ce;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Q=z[0],Y=z.pop();if(Y!==Q){z[0]=Y;e:for(var ce=0,ne=z.length,Ee=ne>>>1;ce<Ee;){var we=2*(ce+1)-1,$e=z[we],he=we+1,be=z[he];if(0>i($e,Y))he<ne&&0>i(be,$e)?(z[ce]=be,z[he]=Y,ce=he):(z[ce]=$e,z[we]=Y,ce=we);else if(he<ne&&0>i(be,Y))z[ce]=be,z[he]=Y,ce=he;else break e}}return Q}function i(z,Q){var Y=z.sortIndex-Q.sortIndex;return Y!==0?Y:z.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var a=[],u=[],d=1,f=null,m=3,y=!1,g=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(z){for(var Q=n(u);Q!==null;){if(Q.callback===null)r(u);else if(Q.startTime<=z)r(u),Q.sortIndex=Q.expirationTime,t(a,Q);else break;Q=n(u)}}function b(z){if(v=!1,x(z),!g)if(n(a)!==null)g=!0,ee(k);else{var Q=n(u);Q!==null&&ve(b,Q.startTime-z)}}function k(z,Q){g=!1,v&&(v=!1,p(P),P=-1),y=!0;var Y=m;try{for(x(Q),f=n(a);f!==null&&(!(f.expirationTime>Q)||z&&!B());){var ce=f.callback;if(typeof ce=="function"){f.callback=null,m=f.priorityLevel;var ne=ce(f.expirationTime<=Q);Q=e.unstable_now(),typeof ne=="function"?f.callback=ne:f===n(a)&&r(a),x(Q)}else r(a);f=n(a)}if(f!==null)var Ee=!0;else{var we=n(u);we!==null&&ve(b,we.startTime-Q),Ee=!1}return Ee}finally{f=null,m=Y,y=!1}}var _=!1,E=null,P=-1,T=5,I=-1;function B(){return!(e.unstable_now()-I<T)}function A(){if(E!==null){var z=e.unstable_now();I=z;var Q=!0;try{Q=E(!0,z)}finally{Q?D():(_=!1,E=null)}}else _=!1}var D;if(typeof h=="function")D=function(){h(A)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,Z=X.port2;X.port1.onmessage=A,D=function(){Z.postMessage(null)}}else D=function(){w(A,0)};function ee(z){E=z,_||(_=!0,D())}function ve(z,Q){P=w(function(){z(e.unstable_now())},Q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){g||y||(g=!0,ee(k))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(z){switch(m){case 1:case 2:case 3:var Q=3;break;default:Q=m}var Y=m;m=Q;try{return z()}finally{m=Y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,Q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Y=m;m=z;try{return Q()}finally{m=Y}},e.unstable_scheduleCallback=function(z,Q,Y){var ce=e.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ce+Y:ce):Y=ce,z){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=Y+ne,z={id:d++,callback:Q,priorityLevel:z,startTime:Y,expirationTime:ne,sortIndex:-1},Y>ce?(z.sortIndex=Y,t(u,z),n(a)===null&&z===n(u)&&(v?(p(P),P=-1):v=!0,ve(b,Y-ce))):(z.sortIndex=ne,t(a,z),g||y||(g=!0,ee(k))),z},e.unstable_shouldYield=B,e.unstable_wrapCallback=function(z){var Q=m;return function(){var Y=m;m=Q;try{return z.apply(this,arguments)}finally{m=Y}}}})(xh);vh.exports=xh;var Bx=vh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yh=M,St=Bx;function L(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wh=new Set,Vi={};function gr(e,t){Wr(e,t),Wr(e+"Capture",t)}function Wr(e,t){for(Vi[e]=t,e=0;e<t.length;e++)wh.add(t[e])}var xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hl=Object.prototype.hasOwnProperty,Hx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_d={},Pd={};function Wx(e){return Hl.call(Pd,e)?!0:Hl.call(_d,e)?!1:Hx.test(e)?Pd[e]=!0:(_d[e]=!0,!1)}function Qx(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Yx(e,t,n,r){if(t===null||typeof t>"u"||Qx(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ut(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Je[e]=new ut(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Je[t]=new ut(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Je[e]=new ut(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Je[e]=new ut(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Je[e]=new ut(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Je[e]=new ut(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Je[e]=new ut(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Je[e]=new ut(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Je[e]=new ut(e,5,!1,e.toLowerCase(),null,!1,!1)});var nc=/[\-:]([a-z])/g;function rc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(nc,rc);Je[t]=new ut(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(nc,rc);Je[t]=new ut(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(nc,rc);Je[t]=new ut(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Je[e]=new ut(e,1,!1,e.toLowerCase(),null,!1,!1)});Je.xlinkHref=new ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Je[e]=new ut(e,1,!1,e.toLowerCase(),null,!0,!0)});function ic(e,t,n,r){var i=Je.hasOwnProperty(t)?Je[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Yx(t,n,i,r)&&(n=null),r||i===null?Wx(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Sn=yh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,So=Symbol.for("react.element"),jr=Symbol.for("react.portal"),Er=Symbol.for("react.fragment"),oc=Symbol.for("react.strict_mode"),Wl=Symbol.for("react.profiler"),bh=Symbol.for("react.provider"),Sh=Symbol.for("react.context"),sc=Symbol.for("react.forward_ref"),Ql=Symbol.for("react.suspense"),Yl=Symbol.for("react.suspense_list"),ac=Symbol.for("react.memo"),Dn=Symbol.for("react.lazy"),kh=Symbol.for("react.offscreen"),Td=Symbol.iterator;function oi(e){return e===null||typeof e!="object"?null:(e=Td&&e[Td]||e["@@iterator"],typeof e=="function"?e:null)}var Re=Object.assign,Ha;function Si(e){if(Ha===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ha=t&&t[1]||""}return`
`+Ha+e}var Wa=!1;function Qa(e,t){if(!e||Wa)return"";Wa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var a=`
`+i[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=l);break}}}finally{Wa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Si(e):""}function Kx(e){switch(e.tag){case 5:return Si(e.type);case 16:return Si("Lazy");case 13:return Si("Suspense");case 19:return Si("SuspenseList");case 0:case 2:case 15:return e=Qa(e.type,!1),e;case 11:return e=Qa(e.type.render,!1),e;case 1:return e=Qa(e.type,!0),e;default:return""}}function Kl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Er:return"Fragment";case jr:return"Portal";case Wl:return"Profiler";case oc:return"StrictMode";case Ql:return"Suspense";case Yl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Sh:return(e.displayName||"Context")+".Consumer";case bh:return(e._context.displayName||"Context")+".Provider";case sc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ac:return t=e.displayName||null,t!==null?t:Kl(e.type)||"Memo";case Dn:t=e._payload,e=e._init;try{return Kl(e(t))}catch{}}return null}function Gx(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Kl(t);case 8:return t===oc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Xn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ch(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Xx(e){var t=Ch(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ko(e){e._valueTracker||(e._valueTracker=Xx(e))}function jh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ch(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ws(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Gl(e,t){var n=t.checked;return Re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Md(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Xn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Eh(e,t){t=t.checked,t!=null&&ic(e,"checked",t,!1)}function Xl(e,t){Eh(e,t);var n=Xn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ql(e,t.type,n):t.hasOwnProperty("defaultValue")&&ql(e,t.type,Xn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Rd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ql(e,t,n){(t!=="number"||ws(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ki=Array.isArray;function zr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Xn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Jl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(L(91));return Re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Id(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(L(92));if(ki(n)){if(1<n.length)throw Error(L(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Xn(n)}}function Oh(e,t){var n=Xn(t.value),r=Xn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Dd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function _h(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?_h(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Co,Ph=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Co=Co||document.createElement("div"),Co.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Co.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ni(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _i={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qx=["Webkit","ms","Moz","O"];Object.keys(_i).forEach(function(e){qx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_i[t]=_i[e]})});function Th(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_i.hasOwnProperty(e)&&_i[e]?(""+t).trim():t+"px"}function Mh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Th(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Jx=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function eu(e,t){if(t){if(Jx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(L(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(L(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(L(61))}if(t.style!=null&&typeof t.style!="object")throw Error(L(62))}}function tu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nu=null;function lc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ru=null,Vr=null,Nr=null;function Ld(e){if(e=fo(e)){if(typeof ru!="function")throw Error(L(280));var t=e.stateNode;t&&(t=ua(t),ru(e.stateNode,e.type,t))}}function Rh(e){Vr?Nr?Nr.push(e):Nr=[e]:Vr=e}function Ih(){if(Vr){var e=Vr,t=Nr;if(Nr=Vr=null,Ld(e),t)for(e=0;e<t.length;e++)Ld(t[e])}}function Dh(e,t){return e(t)}function Lh(){}var Ya=!1;function Ah(e,t,n){if(Ya)return e(t,n);Ya=!0;try{return Dh(e,t,n)}finally{Ya=!1,(Vr!==null||Nr!==null)&&(Lh(),Ih())}}function $i(e,t){var n=e.stateNode;if(n===null)return null;var r=ua(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(L(231,t,typeof n));return n}var iu=!1;if(xn)try{var si={};Object.defineProperty(si,"passive",{get:function(){iu=!0}}),window.addEventListener("test",si,si),window.removeEventListener("test",si,si)}catch{iu=!1}function Zx(e,t,n,r,i,o,s,l,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Pi=!1,bs=null,Ss=!1,ou=null,e0={onError:function(e){Pi=!0,bs=e}};function t0(e,t,n,r,i,o,s,l,a){Pi=!1,bs=null,Zx.apply(e0,arguments)}function n0(e,t,n,r,i,o,s,l,a){if(t0.apply(this,arguments),Pi){if(Pi){var u=bs;Pi=!1,bs=null}else throw Error(L(198));Ss||(Ss=!0,ou=u)}}function vr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Fh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ad(e){if(vr(e)!==e)throw Error(L(188))}function r0(e){var t=e.alternate;if(!t){if(t=vr(e),t===null)throw Error(L(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ad(i),e;if(o===r)return Ad(i),t;o=o.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?e:t}function zh(e){return e=r0(e),e!==null?Vh(e):null}function Vh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Vh(e);if(t!==null)return t;e=e.sibling}return null}var Nh=St.unstable_scheduleCallback,Fd=St.unstable_cancelCallback,i0=St.unstable_shouldYield,o0=St.unstable_requestPaint,Ae=St.unstable_now,s0=St.unstable_getCurrentPriorityLevel,uc=St.unstable_ImmediatePriority,$h=St.unstable_UserBlockingPriority,ks=St.unstable_NormalPriority,a0=St.unstable_LowPriority,Uh=St.unstable_IdlePriority,oa=null,nn=null;function l0(e){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(oa,e,void 0,(e.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:d0,u0=Math.log,c0=Math.LN2;function d0(e){return e>>>=0,e===0?32:31-(u0(e)/c0|0)|0}var jo=64,Eo=4194304;function Ci(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Cs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=Ci(l):(o&=s,o!==0&&(r=Ci(o)))}else s=n&~i,s!==0?r=Ci(s):o!==0&&(r=Ci(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ut(t),i=1<<n,r|=e[n],t&=~i;return r}function f0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function p0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Ut(o),l=1<<s,a=i[s];a===-1?(!(l&n)||l&r)&&(i[s]=f0(l,t)):a<=t&&(e.expiredLanes|=l),o&=~l}}function su(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bh(){var e=jo;return jo<<=1,!(jo&4194240)&&(jo=64),e}function Ka(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function uo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ut(t),e[t]=n}function h0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ut(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function cc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ut(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var xe=0;function Hh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Wh,dc,Qh,Yh,Kh,au=!1,Oo=[],Un=null,Bn=null,Hn=null,Ui=new Map,Bi=new Map,An=[],m0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zd(e,t){switch(e){case"focusin":case"focusout":Un=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":Hn=null;break;case"pointerover":case"pointerout":Ui.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bi.delete(t.pointerId)}}function ai(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=fo(t),t!==null&&dc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function g0(e,t,n,r,i){switch(t){case"focusin":return Un=ai(Un,e,t,n,r,i),!0;case"dragenter":return Bn=ai(Bn,e,t,n,r,i),!0;case"mouseover":return Hn=ai(Hn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ui.set(o,ai(Ui.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Bi.set(o,ai(Bi.get(o)||null,e,t,n,r,i)),!0}return!1}function Gh(e){var t=ir(e.target);if(t!==null){var n=vr(t);if(n!==null){if(t=n.tag,t===13){if(t=Fh(n),t!==null){e.blockedOn=t,Kh(e.priority,function(){Qh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=lu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);nu=r,n.target.dispatchEvent(r),nu=null}else return t=fo(n),t!==null&&dc(t),e.blockedOn=n,!1;t.shift()}return!0}function Vd(e,t,n){Zo(e)&&n.delete(t)}function v0(){au=!1,Un!==null&&Zo(Un)&&(Un=null),Bn!==null&&Zo(Bn)&&(Bn=null),Hn!==null&&Zo(Hn)&&(Hn=null),Ui.forEach(Vd),Bi.forEach(Vd)}function li(e,t){e.blockedOn===t&&(e.blockedOn=null,au||(au=!0,St.unstable_scheduleCallback(St.unstable_NormalPriority,v0)))}function Hi(e){function t(i){return li(i,e)}if(0<Oo.length){li(Oo[0],e);for(var n=1;n<Oo.length;n++){var r=Oo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Un!==null&&li(Un,e),Bn!==null&&li(Bn,e),Hn!==null&&li(Hn,e),Ui.forEach(t),Bi.forEach(t),n=0;n<An.length;n++)r=An[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<An.length&&(n=An[0],n.blockedOn===null);)Gh(n),n.blockedOn===null&&An.shift()}var $r=Sn.ReactCurrentBatchConfig,js=!0;function x0(e,t,n,r){var i=xe,o=$r.transition;$r.transition=null;try{xe=1,fc(e,t,n,r)}finally{xe=i,$r.transition=o}}function y0(e,t,n,r){var i=xe,o=$r.transition;$r.transition=null;try{xe=4,fc(e,t,n,r)}finally{xe=i,$r.transition=o}}function fc(e,t,n,r){if(js){var i=lu(e,t,n,r);if(i===null)il(e,t,r,Es,n),zd(e,r);else if(g0(i,e,t,n,r))r.stopPropagation();else if(zd(e,r),t&4&&-1<m0.indexOf(e)){for(;i!==null;){var o=fo(i);if(o!==null&&Wh(o),o=lu(e,t,n,r),o===null&&il(e,t,r,Es,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else il(e,t,r,null,n)}}var Es=null;function lu(e,t,n,r){if(Es=null,e=lc(r),e=ir(e),e!==null)if(t=vr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Fh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Es=e,null}function Xh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(s0()){case uc:return 1;case $h:return 4;case ks:case a0:return 16;case Uh:return 536870912;default:return 16}default:return 16}}var zn=null,pc=null,es=null;function qh(){if(es)return es;var e,t=pc,n=t.length,r,i="value"in zn?zn.value:zn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return es=i.slice(e,1<r?1-r:void 0)}function ts(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _o(){return!0}function Nd(){return!1}function jt(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?_o:Nd,this.isPropagationStopped=Nd,this}return Re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_o)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_o)},persist:function(){},isPersistent:_o}),t}var ti={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hc=jt(ti),co=Re({},ti,{view:0,detail:0}),w0=jt(co),Ga,Xa,ui,sa=Re({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ui&&(ui&&e.type==="mousemove"?(Ga=e.screenX-ui.screenX,Xa=e.screenY-ui.screenY):Xa=Ga=0,ui=e),Ga)},movementY:function(e){return"movementY"in e?e.movementY:Xa}}),$d=jt(sa),b0=Re({},sa,{dataTransfer:0}),S0=jt(b0),k0=Re({},co,{relatedTarget:0}),qa=jt(k0),C0=Re({},ti,{animationName:0,elapsedTime:0,pseudoElement:0}),j0=jt(C0),E0=Re({},ti,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),O0=jt(E0),_0=Re({},ti,{data:0}),Ud=jt(_0),P0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},T0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},M0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function R0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=M0[e])?!!t[e]:!1}function mc(){return R0}var I0=Re({},co,{key:function(e){if(e.key){var t=P0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ts(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?T0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mc,charCode:function(e){return e.type==="keypress"?ts(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ts(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),D0=jt(I0),L0=Re({},sa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bd=jt(L0),A0=Re({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mc}),F0=jt(A0),z0=Re({},ti,{propertyName:0,elapsedTime:0,pseudoElement:0}),V0=jt(z0),N0=Re({},sa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$0=jt(N0),U0=[9,13,27,32],gc=xn&&"CompositionEvent"in window,Ti=null;xn&&"documentMode"in document&&(Ti=document.documentMode);var B0=xn&&"TextEvent"in window&&!Ti,Jh=xn&&(!gc||Ti&&8<Ti&&11>=Ti),Hd=" ",Wd=!1;function Zh(e,t){switch(e){case"keyup":return U0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function em(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Or=!1;function H0(e,t){switch(e){case"compositionend":return em(t);case"keypress":return t.which!==32?null:(Wd=!0,Hd);case"textInput":return e=t.data,e===Hd&&Wd?null:e;default:return null}}function W0(e,t){if(Or)return e==="compositionend"||!gc&&Zh(e,t)?(e=qh(),es=pc=zn=null,Or=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Jh&&t.locale!=="ko"?null:t.data;default:return null}}var Q0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Q0[e.type]:t==="textarea"}function tm(e,t,n,r){Rh(r),t=Os(t,"onChange"),0<t.length&&(n=new hc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Mi=null,Wi=null;function Y0(e){fm(e,0)}function aa(e){var t=Tr(e);if(jh(t))return e}function K0(e,t){if(e==="change")return t}var nm=!1;if(xn){var Ja;if(xn){var Za="oninput"in document;if(!Za){var Yd=document.createElement("div");Yd.setAttribute("oninput","return;"),Za=typeof Yd.oninput=="function"}Ja=Za}else Ja=!1;nm=Ja&&(!document.documentMode||9<document.documentMode)}function Kd(){Mi&&(Mi.detachEvent("onpropertychange",rm),Wi=Mi=null)}function rm(e){if(e.propertyName==="value"&&aa(Wi)){var t=[];tm(t,Wi,e,lc(e)),Ah(Y0,t)}}function G0(e,t,n){e==="focusin"?(Kd(),Mi=t,Wi=n,Mi.attachEvent("onpropertychange",rm)):e==="focusout"&&Kd()}function X0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return aa(Wi)}function q0(e,t){if(e==="click")return aa(t)}function J0(e,t){if(e==="input"||e==="change")return aa(t)}function Z0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Wt=typeof Object.is=="function"?Object.is:Z0;function Qi(e,t){if(Wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Hl.call(t,i)||!Wt(e[i],t[i]))return!1}return!0}function Gd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xd(e,t){var n=Gd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gd(n)}}function im(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?im(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function om(){for(var e=window,t=ws();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ws(e.document)}return t}function vc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ey(e){var t=om(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&im(n.ownerDocument.documentElement,n)){if(r!==null&&vc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Xd(n,o);var s=Xd(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ty=xn&&"documentMode"in document&&11>=document.documentMode,_r=null,uu=null,Ri=null,cu=!1;function qd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cu||_r==null||_r!==ws(r)||(r=_r,"selectionStart"in r&&vc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ri&&Qi(Ri,r)||(Ri=r,r=Os(uu,"onSelect"),0<r.length&&(t=new hc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=_r)))}function Po(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Pr={animationend:Po("Animation","AnimationEnd"),animationiteration:Po("Animation","AnimationIteration"),animationstart:Po("Animation","AnimationStart"),transitionend:Po("Transition","TransitionEnd")},el={},sm={};xn&&(sm=document.createElement("div").style,"AnimationEvent"in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),"TransitionEvent"in window||delete Pr.transitionend.transition);function la(e){if(el[e])return el[e];if(!Pr[e])return e;var t=Pr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in sm)return el[e]=t[n];return e}var am=la("animationend"),lm=la("animationiteration"),um=la("animationstart"),cm=la("transitionend"),dm=new Map,Jd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jn(e,t){dm.set(e,t),gr(t,[e])}for(var tl=0;tl<Jd.length;tl++){var nl=Jd[tl],ny=nl.toLowerCase(),ry=nl[0].toUpperCase()+nl.slice(1);Jn(ny,"on"+ry)}Jn(am,"onAnimationEnd");Jn(lm,"onAnimationIteration");Jn(um,"onAnimationStart");Jn("dblclick","onDoubleClick");Jn("focusin","onFocus");Jn("focusout","onBlur");Jn(cm,"onTransitionEnd");Wr("onMouseEnter",["mouseout","mouseover"]);Wr("onMouseLeave",["mouseout","mouseover"]);Wr("onPointerEnter",["pointerout","pointerover"]);Wr("onPointerLeave",["pointerout","pointerover"]);gr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gr("onBeforeInput",["compositionend","keypress","textInput","paste"]);gr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ji="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iy=new Set("cancel close invalid load scroll toggle".split(" ").concat(ji));function Zd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,n0(r,t,void 0,e),e.currentTarget=null}function fm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==o&&i.isPropagationStopped())break e;Zd(i,l,u),o=a}else for(s=0;s<r.length;s++){if(l=r[s],a=l.instance,u=l.currentTarget,l=l.listener,a!==o&&i.isPropagationStopped())break e;Zd(i,l,u),o=a}}}if(Ss)throw e=ou,Ss=!1,ou=null,e}function Oe(e,t){var n=t[mu];n===void 0&&(n=t[mu]=new Set);var r=e+"__bubble";n.has(r)||(pm(t,e,2,!1),n.add(r))}function rl(e,t,n){var r=0;t&&(r|=4),pm(n,e,r,t)}var To="_reactListening"+Math.random().toString(36).slice(2);function Yi(e){if(!e[To]){e[To]=!0,wh.forEach(function(n){n!=="selectionchange"&&(iy.has(n)||rl(n,!1,e),rl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[To]||(t[To]=!0,rl("selectionchange",!1,t))}}function pm(e,t,n,r){switch(Xh(t)){case 1:var i=x0;break;case 4:i=y0;break;default:i=fc}n=i.bind(null,t,n,e),i=void 0,!iu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function il(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;s=s.return}for(;l!==null;){if(s=ir(l),s===null)return;if(a=s.tag,a===5||a===6){r=o=s;continue e}l=l.parentNode}}r=r.return}Ah(function(){var u=o,d=lc(n),f=[];e:{var m=dm.get(e);if(m!==void 0){var y=hc,g=e;switch(e){case"keypress":if(ts(n)===0)break e;case"keydown":case"keyup":y=D0;break;case"focusin":g="focus",y=qa;break;case"focusout":g="blur",y=qa;break;case"beforeblur":case"afterblur":y=qa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=$d;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=S0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=F0;break;case am:case lm:case um:y=j0;break;case cm:y=V0;break;case"scroll":y=w0;break;case"wheel":y=$0;break;case"copy":case"cut":case"paste":y=O0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Bd}var v=(t&4)!==0,w=!v&&e==="scroll",p=v?m!==null?m+"Capture":null:m;v=[];for(var h=u,x;h!==null;){x=h;var b=x.stateNode;if(x.tag===5&&b!==null&&(x=b,p!==null&&(b=$i(h,p),b!=null&&v.push(Ki(h,b,x)))),w)break;h=h.return}0<v.length&&(m=new y(m,g,null,n,d),f.push({event:m,listeners:v}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&n!==nu&&(g=n.relatedTarget||n.fromElement)&&(ir(g)||g[yn]))break e;if((y||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,y?(g=n.relatedTarget||n.toElement,y=u,g=g?ir(g):null,g!==null&&(w=vr(g),g!==w||g.tag!==5&&g.tag!==6)&&(g=null)):(y=null,g=u),y!==g)){if(v=$d,b="onMouseLeave",p="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(v=Bd,b="onPointerLeave",p="onPointerEnter",h="pointer"),w=y==null?m:Tr(y),x=g==null?m:Tr(g),m=new v(b,h+"leave",y,n,d),m.target=w,m.relatedTarget=x,b=null,ir(d)===u&&(v=new v(p,h+"enter",g,n,d),v.target=x,v.relatedTarget=w,b=v),w=b,y&&g)t:{for(v=y,p=g,h=0,x=v;x;x=yr(x))h++;for(x=0,b=p;b;b=yr(b))x++;for(;0<h-x;)v=yr(v),h--;for(;0<x-h;)p=yr(p),x--;for(;h--;){if(v===p||p!==null&&v===p.alternate)break t;v=yr(v),p=yr(p)}v=null}else v=null;y!==null&&ef(f,m,y,v,!1),g!==null&&w!==null&&ef(f,w,g,v,!0)}}e:{if(m=u?Tr(u):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var k=K0;else if(Qd(m))if(nm)k=J0;else{k=X0;var _=G0}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(k=q0);if(k&&(k=k(e,u))){tm(f,k,n,d);break e}_&&_(e,m,u),e==="focusout"&&(_=m._wrapperState)&&_.controlled&&m.type==="number"&&ql(m,"number",m.value)}switch(_=u?Tr(u):window,e){case"focusin":(Qd(_)||_.contentEditable==="true")&&(_r=_,uu=u,Ri=null);break;case"focusout":Ri=uu=_r=null;break;case"mousedown":cu=!0;break;case"contextmenu":case"mouseup":case"dragend":cu=!1,qd(f,n,d);break;case"selectionchange":if(ty)break;case"keydown":case"keyup":qd(f,n,d)}var E;if(gc)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Or?Zh(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Jh&&n.locale!=="ko"&&(Or||P!=="onCompositionStart"?P==="onCompositionEnd"&&Or&&(E=qh()):(zn=d,pc="value"in zn?zn.value:zn.textContent,Or=!0)),_=Os(u,P),0<_.length&&(P=new Ud(P,e,null,n,d),f.push({event:P,listeners:_}),E?P.data=E:(E=em(n),E!==null&&(P.data=E)))),(E=B0?H0(e,n):W0(e,n))&&(u=Os(u,"onBeforeInput"),0<u.length&&(d=new Ud("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=E))}fm(f,t)})}function Ki(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Os(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=$i(e,n),o!=null&&r.unshift(Ki(e,o,i)),o=$i(e,t),o!=null&&r.push(Ki(e,o,i))),e=e.return}return r}function yr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ef(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=$i(n,o),a!=null&&s.unshift(Ki(n,a,l))):i||(a=$i(n,o),a!=null&&s.push(Ki(n,a,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var oy=/\r\n?/g,sy=/\u0000|\uFFFD/g;function tf(e){return(typeof e=="string"?e:""+e).replace(oy,`
`).replace(sy,"")}function Mo(e,t,n){if(t=tf(t),tf(e)!==t&&n)throw Error(L(425))}function _s(){}var du=null,fu=null;function pu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var hu=typeof setTimeout=="function"?setTimeout:void 0,ay=typeof clearTimeout=="function"?clearTimeout:void 0,nf=typeof Promise=="function"?Promise:void 0,ly=typeof queueMicrotask=="function"?queueMicrotask:typeof nf<"u"?function(e){return nf.resolve(null).then(e).catch(uy)}:hu;function uy(e){setTimeout(function(){throw e})}function ol(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Hi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Hi(t)}function Wn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function rf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ni=Math.random().toString(36).slice(2),Jt="__reactFiber$"+ni,Gi="__reactProps$"+ni,yn="__reactContainer$"+ni,mu="__reactEvents$"+ni,cy="__reactListeners$"+ni,dy="__reactHandles$"+ni;function ir(e){var t=e[Jt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yn]||n[Jt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=rf(e);e!==null;){if(n=e[Jt])return n;e=rf(e)}return t}e=n,n=e.parentNode}return null}function fo(e){return e=e[Jt]||e[yn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Tr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(L(33))}function ua(e){return e[Gi]||null}var gu=[],Mr=-1;function Zn(e){return{current:e}}function _e(e){0>Mr||(e.current=gu[Mr],gu[Mr]=null,Mr--)}function je(e,t){Mr++,gu[Mr]=e.current,e.current=t}var qn={},it=Zn(qn),pt=Zn(!1),cr=qn;function Qr(e,t){var n=e.type.contextTypes;if(!n)return qn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ht(e){return e=e.childContextTypes,e!=null}function Ps(){_e(pt),_e(it)}function of(e,t,n){if(it.current!==qn)throw Error(L(168));je(it,t),je(pt,n)}function hm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(L(108,Gx(e)||"Unknown",i));return Re({},n,r)}function Ts(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qn,cr=it.current,je(it,e),je(pt,pt.current),!0}function sf(e,t,n){var r=e.stateNode;if(!r)throw Error(L(169));n?(e=hm(e,t,cr),r.__reactInternalMemoizedMergedChildContext=e,_e(pt),_e(it),je(it,e)):_e(pt),je(pt,n)}var cn=null,ca=!1,sl=!1;function mm(e){cn===null?cn=[e]:cn.push(e)}function fy(e){ca=!0,mm(e)}function er(){if(!sl&&cn!==null){sl=!0;var e=0,t=xe;try{var n=cn;for(xe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}cn=null,ca=!1}catch(i){throw cn!==null&&(cn=cn.slice(e+1)),Nh(uc,er),i}finally{xe=t,sl=!1}}return null}var Rr=[],Ir=0,Ms=null,Rs=0,_t=[],Pt=0,dr=null,fn=1,pn="";function nr(e,t){Rr[Ir++]=Rs,Rr[Ir++]=Ms,Ms=e,Rs=t}function gm(e,t,n){_t[Pt++]=fn,_t[Pt++]=pn,_t[Pt++]=dr,dr=e;var r=fn;e=pn;var i=32-Ut(r)-1;r&=~(1<<i),n+=1;var o=32-Ut(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,fn=1<<32-Ut(t)+i|n<<i|r,pn=o+e}else fn=1<<o|n<<i|r,pn=e}function xc(e){e.return!==null&&(nr(e,1),gm(e,1,0))}function yc(e){for(;e===Ms;)Ms=Rr[--Ir],Rr[Ir]=null,Rs=Rr[--Ir],Rr[Ir]=null;for(;e===dr;)dr=_t[--Pt],_t[Pt]=null,pn=_t[--Pt],_t[Pt]=null,fn=_t[--Pt],_t[Pt]=null}var wt=null,yt=null,Pe=!1,Nt=null;function vm(e,t){var n=Tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function af(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,wt=e,yt=Wn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,wt=e,yt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=dr!==null?{id:fn,overflow:pn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,wt=e,yt=null,!0):!1;default:return!1}}function vu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function xu(e){if(Pe){var t=yt;if(t){var n=t;if(!af(e,t)){if(vu(e))throw Error(L(418));t=Wn(n.nextSibling);var r=wt;t&&af(e,t)?vm(r,n):(e.flags=e.flags&-4097|2,Pe=!1,wt=e)}}else{if(vu(e))throw Error(L(418));e.flags=e.flags&-4097|2,Pe=!1,wt=e}}}function lf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;wt=e}function Ro(e){if(e!==wt)return!1;if(!Pe)return lf(e),Pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!pu(e.type,e.memoizedProps)),t&&(t=yt)){if(vu(e))throw xm(),Error(L(418));for(;t;)vm(e,t),t=Wn(t.nextSibling)}if(lf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){yt=Wn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}yt=null}}else yt=wt?Wn(e.stateNode.nextSibling):null;return!0}function xm(){for(var e=yt;e;)e=Wn(e.nextSibling)}function Yr(){yt=wt=null,Pe=!1}function wc(e){Nt===null?Nt=[e]:Nt.push(e)}var py=Sn.ReactCurrentBatchConfig;function At(e,t){if(e&&e.defaultProps){t=Re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Is=Zn(null),Ds=null,Dr=null,bc=null;function Sc(){bc=Dr=Ds=null}function kc(e){var t=Is.current;_e(Is),e._currentValue=t}function yu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ur(e,t){Ds=e,bc=Dr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ft=!0),e.firstContext=null)}function It(e){var t=e._currentValue;if(bc!==e)if(e={context:e,memoizedValue:t,next:null},Dr===null){if(Ds===null)throw Error(L(308));Dr=e,Ds.dependencies={lanes:0,firstContext:e}}else Dr=Dr.next=e;return t}var or=null;function Cc(e){or===null?or=[e]:or.push(e)}function ym(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Cc(t)):(n.next=i.next,i.next=n),t.interleaved=n,wn(e,r)}function wn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ln=!1;function jc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Qn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,pe&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,wn(e,n)}return i=r.interleaved,i===null?(t.next=t,Cc(r)):(t.next=i.next,i.next=t),r.interleaved=t,wn(e,n)}function ns(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cc(e,n)}}function uf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ls(e,t,n,r){var i=e.updateQueue;Ln=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,s===null?o=u:s.next=u,s=a;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==s&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(o!==null){var f=i.baseState;s=0,d=u=a=null,l=o;do{var m=l.lane,y=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,v=l;switch(m=t,y=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){f=g.call(y,f,m);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,m=typeof g=="function"?g.call(y,f,m):g,m==null)break e;f=Re({},f,m);break e;case 2:Ln=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else y={eventTime:y,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=y,a=f):d=d.next=y,s|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(a=f),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);pr|=s,e.lanes=s,e.memoizedState=f}}function cf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var bm=new yh.Component().refs;function wu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var da={isMounted:function(e){return(e=e._reactInternals)?vr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=at(),i=Kn(e),o=mn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Qn(e,o,i),t!==null&&(Bt(t,e,i,r),ns(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=at(),i=Kn(e),o=mn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Qn(e,o,i),t!==null&&(Bt(t,e,i,r),ns(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=at(),r=Kn(e),i=mn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Qn(e,i,r),t!==null&&(Bt(t,e,r,n),ns(t,e,r))}};function df(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Qi(n,r)||!Qi(i,o):!0}function Sm(e,t,n){var r=!1,i=qn,o=t.contextType;return typeof o=="object"&&o!==null?o=It(o):(i=ht(t)?cr:it.current,r=t.contextTypes,o=(r=r!=null)?Qr(e,i):qn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=da,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ff(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&da.enqueueReplaceState(t,t.state,null)}function bu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=bm,jc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=It(o):(o=ht(t)?cr:it.current,i.context=Qr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(wu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&da.enqueueReplaceState(i,i.state,null),Ls(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ci(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;l===bm&&(l=i.refs={}),s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,e))}return e}function Io(e,t){throw e=Object.prototype.toString.call(t),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function pf(e){var t=e._init;return t(e._payload)}function km(e){function t(p,h){if(e){var x=p.deletions;x===null?(p.deletions=[h],p.flags|=16):x.push(h)}}function n(p,h){if(!e)return null;for(;h!==null;)t(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=Gn(p,h),p.index=0,p.sibling=null,p}function o(p,h,x){return p.index=x,e?(x=p.alternate,x!==null?(x=x.index,x<h?(p.flags|=2,h):x):(p.flags|=2,h)):(p.flags|=1048576,h)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,h,x,b){return h===null||h.tag!==6?(h=pl(x,p.mode,b),h.return=p,h):(h=i(h,x),h.return=p,h)}function a(p,h,x,b){var k=x.type;return k===Er?d(p,h,x.props.children,b,x.key):h!==null&&(h.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Dn&&pf(k)===h.type)?(b=i(h,x.props),b.ref=ci(p,h,x),b.return=p,b):(b=ls(x.type,x.key,x.props,null,p.mode,b),b.ref=ci(p,h,x),b.return=p,b)}function u(p,h,x,b){return h===null||h.tag!==4||h.stateNode.containerInfo!==x.containerInfo||h.stateNode.implementation!==x.implementation?(h=hl(x,p.mode,b),h.return=p,h):(h=i(h,x.children||[]),h.return=p,h)}function d(p,h,x,b,k){return h===null||h.tag!==7?(h=ur(x,p.mode,b,k),h.return=p,h):(h=i(h,x),h.return=p,h)}function f(p,h,x){if(typeof h=="string"&&h!==""||typeof h=="number")return h=pl(""+h,p.mode,x),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case So:return x=ls(h.type,h.key,h.props,null,p.mode,x),x.ref=ci(p,null,h),x.return=p,x;case jr:return h=hl(h,p.mode,x),h.return=p,h;case Dn:var b=h._init;return f(p,b(h._payload),x)}if(ki(h)||oi(h))return h=ur(h,p.mode,x,null),h.return=p,h;Io(p,h)}return null}function m(p,h,x,b){var k=h!==null?h.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return k!==null?null:l(p,h,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case So:return x.key===k?a(p,h,x,b):null;case jr:return x.key===k?u(p,h,x,b):null;case Dn:return k=x._init,m(p,h,k(x._payload),b)}if(ki(x)||oi(x))return k!==null?null:d(p,h,x,b,null);Io(p,x)}return null}function y(p,h,x,b,k){if(typeof b=="string"&&b!==""||typeof b=="number")return p=p.get(x)||null,l(h,p,""+b,k);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case So:return p=p.get(b.key===null?x:b.key)||null,a(h,p,b,k);case jr:return p=p.get(b.key===null?x:b.key)||null,u(h,p,b,k);case Dn:var _=b._init;return y(p,h,x,_(b._payload),k)}if(ki(b)||oi(b))return p=p.get(x)||null,d(h,p,b,k,null);Io(h,b)}return null}function g(p,h,x,b){for(var k=null,_=null,E=h,P=h=0,T=null;E!==null&&P<x.length;P++){E.index>P?(T=E,E=null):T=E.sibling;var I=m(p,E,x[P],b);if(I===null){E===null&&(E=T);break}e&&E&&I.alternate===null&&t(p,E),h=o(I,h,P),_===null?k=I:_.sibling=I,_=I,E=T}if(P===x.length)return n(p,E),Pe&&nr(p,P),k;if(E===null){for(;P<x.length;P++)E=f(p,x[P],b),E!==null&&(h=o(E,h,P),_===null?k=E:_.sibling=E,_=E);return Pe&&nr(p,P),k}for(E=r(p,E);P<x.length;P++)T=y(E,p,P,x[P],b),T!==null&&(e&&T.alternate!==null&&E.delete(T.key===null?P:T.key),h=o(T,h,P),_===null?k=T:_.sibling=T,_=T);return e&&E.forEach(function(B){return t(p,B)}),Pe&&nr(p,P),k}function v(p,h,x,b){var k=oi(x);if(typeof k!="function")throw Error(L(150));if(x=k.call(x),x==null)throw Error(L(151));for(var _=k=null,E=h,P=h=0,T=null,I=x.next();E!==null&&!I.done;P++,I=x.next()){E.index>P?(T=E,E=null):T=E.sibling;var B=m(p,E,I.value,b);if(B===null){E===null&&(E=T);break}e&&E&&B.alternate===null&&t(p,E),h=o(B,h,P),_===null?k=B:_.sibling=B,_=B,E=T}if(I.done)return n(p,E),Pe&&nr(p,P),k;if(E===null){for(;!I.done;P++,I=x.next())I=f(p,I.value,b),I!==null&&(h=o(I,h,P),_===null?k=I:_.sibling=I,_=I);return Pe&&nr(p,P),k}for(E=r(p,E);!I.done;P++,I=x.next())I=y(E,p,P,I.value,b),I!==null&&(e&&I.alternate!==null&&E.delete(I.key===null?P:I.key),h=o(I,h,P),_===null?k=I:_.sibling=I,_=I);return e&&E.forEach(function(A){return t(p,A)}),Pe&&nr(p,P),k}function w(p,h,x,b){if(typeof x=="object"&&x!==null&&x.type===Er&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case So:e:{for(var k=x.key,_=h;_!==null;){if(_.key===k){if(k=x.type,k===Er){if(_.tag===7){n(p,_.sibling),h=i(_,x.props.children),h.return=p,p=h;break e}}else if(_.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Dn&&pf(k)===_.type){n(p,_.sibling),h=i(_,x.props),h.ref=ci(p,_,x),h.return=p,p=h;break e}n(p,_);break}else t(p,_);_=_.sibling}x.type===Er?(h=ur(x.props.children,p.mode,b,x.key),h.return=p,p=h):(b=ls(x.type,x.key,x.props,null,p.mode,b),b.ref=ci(p,h,x),b.return=p,p=b)}return s(p);case jr:e:{for(_=x.key;h!==null;){if(h.key===_)if(h.tag===4&&h.stateNode.containerInfo===x.containerInfo&&h.stateNode.implementation===x.implementation){n(p,h.sibling),h=i(h,x.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else t(p,h);h=h.sibling}h=hl(x,p.mode,b),h.return=p,p=h}return s(p);case Dn:return _=x._init,w(p,h,_(x._payload),b)}if(ki(x))return g(p,h,x,b);if(oi(x))return v(p,h,x,b);Io(p,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,x),h.return=p,p=h):(n(p,h),h=pl(x,p.mode,b),h.return=p,p=h),s(p)):n(p,h)}return w}var Kr=km(!0),Cm=km(!1),po={},rn=Zn(po),Xi=Zn(po),qi=Zn(po);function sr(e){if(e===po)throw Error(L(174));return e}function Ec(e,t){switch(je(qi,t),je(Xi,e),je(rn,po),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Zl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Zl(t,e)}_e(rn),je(rn,t)}function Gr(){_e(rn),_e(Xi),_e(qi)}function jm(e){sr(qi.current);var t=sr(rn.current),n=Zl(t,e.type);t!==n&&(je(Xi,e),je(rn,n))}function Oc(e){Xi.current===e&&(_e(rn),_e(Xi))}var Te=Zn(0);function As(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var al=[];function _c(){for(var e=0;e<al.length;e++)al[e]._workInProgressVersionPrimary=null;al.length=0}var rs=Sn.ReactCurrentDispatcher,ll=Sn.ReactCurrentBatchConfig,fr=0,Me=null,Ue=null,We=null,Fs=!1,Ii=!1,Ji=0,hy=0;function et(){throw Error(L(321))}function Pc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Wt(e[n],t[n]))return!1;return!0}function Tc(e,t,n,r,i,o){if(fr=o,Me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,rs.current=e===null||e.memoizedState===null?xy:yy,e=n(r,i),Ii){o=0;do{if(Ii=!1,Ji=0,25<=o)throw Error(L(301));o+=1,We=Ue=null,t.updateQueue=null,rs.current=wy,e=n(r,i)}while(Ii)}if(rs.current=zs,t=Ue!==null&&Ue.next!==null,fr=0,We=Ue=Me=null,Fs=!1,t)throw Error(L(300));return e}function Mc(){var e=Ji!==0;return Ji=0,e}function Gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Me.memoizedState=We=e:We=We.next=e,We}function Dt(){if(Ue===null){var e=Me.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var t=We===null?Me.memoizedState:We.next;if(t!==null)We=t,Ue=e;else{if(e===null)throw Error(L(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},We===null?Me.memoizedState=We=e:We=We.next=e}return We}function Zi(e,t){return typeof t=="function"?t(e):t}function ul(e){var t=Dt(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=Ue,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,a=null,u=o;do{var d=u.lane;if((fr&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=f,s=r):a=a.next=f,Me.lanes|=d,pr|=d}u=u.next}while(u!==null&&u!==o);a===null?s=r:a.next=l,Wt(r,t.memoizedState)||(ft=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Me.lanes|=o,pr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function cl(e){var t=Dt(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Wt(o,t.memoizedState)||(ft=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Em(){}function Om(e,t){var n=Me,r=Dt(),i=t(),o=!Wt(r.memoizedState,i);if(o&&(r.memoizedState=i,ft=!0),r=r.queue,Rc(Tm.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,eo(9,Pm.bind(null,n,r,i,t),void 0,null),Qe===null)throw Error(L(349));fr&30||_m(n,t,i)}return i}function _m(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Me.updateQueue,t===null?(t={lastEffect:null,stores:null},Me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Pm(e,t,n,r){t.value=n,t.getSnapshot=r,Mm(t)&&Rm(e)}function Tm(e,t,n){return n(function(){Mm(t)&&Rm(e)})}function Mm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Wt(e,n)}catch{return!0}}function Rm(e){var t=wn(e,1);t!==null&&Bt(t,e,1,-1)}function hf(e){var t=Gt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:e},t.queue=e,e=e.dispatch=vy.bind(null,Me,e),[t.memoizedState,e]}function eo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Me.updateQueue,t===null?(t={lastEffect:null,stores:null},Me.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Im(){return Dt().memoizedState}function is(e,t,n,r){var i=Gt();Me.flags|=e,i.memoizedState=eo(1|t,n,void 0,r===void 0?null:r)}function fa(e,t,n,r){var i=Dt();r=r===void 0?null:r;var o=void 0;if(Ue!==null){var s=Ue.memoizedState;if(o=s.destroy,r!==null&&Pc(r,s.deps)){i.memoizedState=eo(t,n,o,r);return}}Me.flags|=e,i.memoizedState=eo(1|t,n,o,r)}function mf(e,t){return is(8390656,8,e,t)}function Rc(e,t){return fa(2048,8,e,t)}function Dm(e,t){return fa(4,2,e,t)}function Lm(e,t){return fa(4,4,e,t)}function Am(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Fm(e,t,n){return n=n!=null?n.concat([e]):null,fa(4,4,Am.bind(null,t,e),n)}function Ic(){}function zm(e,t){var n=Dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Pc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Vm(e,t){var n=Dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Pc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Nm(e,t,n){return fr&21?(Wt(n,t)||(n=Bh(),Me.lanes|=n,pr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ft=!0),e.memoizedState=n)}function my(e,t){var n=xe;xe=n!==0&&4>n?n:4,e(!0);var r=ll.transition;ll.transition={};try{e(!1),t()}finally{xe=n,ll.transition=r}}function $m(){return Dt().memoizedState}function gy(e,t,n){var r=Kn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Um(e))Bm(t,n);else if(n=ym(e,t,n,r),n!==null){var i=at();Bt(n,e,r,i),Hm(n,t,r)}}function vy(e,t,n){var r=Kn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Um(e))Bm(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,Wt(l,s)){var a=t.interleaved;a===null?(i.next=i,Cc(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=ym(e,t,i,r),n!==null&&(i=at(),Bt(n,e,r,i),Hm(n,t,r))}}function Um(e){var t=e.alternate;return e===Me||t!==null&&t===Me}function Bm(e,t){Ii=Fs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cc(e,n)}}var zs={readContext:It,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},xy={readContext:It,useCallback:function(e,t){return Gt().memoizedState=[e,t===void 0?null:t],e},useContext:It,useEffect:mf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,is(4194308,4,Am.bind(null,t,e),n)},useLayoutEffect:function(e,t){return is(4194308,4,e,t)},useInsertionEffect:function(e,t){return is(4,2,e,t)},useMemo:function(e,t){var n=Gt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Gt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=gy.bind(null,Me,e),[r.memoizedState,e]},useRef:function(e){var t=Gt();return e={current:e},t.memoizedState=e},useState:hf,useDebugValue:Ic,useDeferredValue:function(e){return Gt().memoizedState=e},useTransition:function(){var e=hf(!1),t=e[0];return e=my.bind(null,e[1]),Gt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Me,i=Gt();if(Pe){if(n===void 0)throw Error(L(407));n=n()}else{if(n=t(),Qe===null)throw Error(L(349));fr&30||_m(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,mf(Tm.bind(null,r,o,e),[e]),r.flags|=2048,eo(9,Pm.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Gt(),t=Qe.identifierPrefix;if(Pe){var n=pn,r=fn;n=(r&~(1<<32-Ut(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ji++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=hy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},yy={readContext:It,useCallback:zm,useContext:It,useEffect:Rc,useImperativeHandle:Fm,useInsertionEffect:Dm,useLayoutEffect:Lm,useMemo:Vm,useReducer:ul,useRef:Im,useState:function(){return ul(Zi)},useDebugValue:Ic,useDeferredValue:function(e){var t=Dt();return Nm(t,Ue.memoizedState,e)},useTransition:function(){var e=ul(Zi)[0],t=Dt().memoizedState;return[e,t]},useMutableSource:Em,useSyncExternalStore:Om,useId:$m,unstable_isNewReconciler:!1},wy={readContext:It,useCallback:zm,useContext:It,useEffect:Rc,useImperativeHandle:Fm,useInsertionEffect:Dm,useLayoutEffect:Lm,useMemo:Vm,useReducer:cl,useRef:Im,useState:function(){return cl(Zi)},useDebugValue:Ic,useDeferredValue:function(e){var t=Dt();return Ue===null?t.memoizedState=e:Nm(t,Ue.memoizedState,e)},useTransition:function(){var e=cl(Zi)[0],t=Dt().memoizedState;return[e,t]},useMutableSource:Em,useSyncExternalStore:Om,useId:$m,unstable_isNewReconciler:!1};function Xr(e,t){try{var n="",r=t;do n+=Kx(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function dl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Su(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var by=typeof WeakMap=="function"?WeakMap:Map;function Wm(e,t,n){n=mn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ns||(Ns=!0,Ru=r),Su(e,t)},n}function Qm(e,t,n){n=mn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Su(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Su(e,t),typeof r!="function"&&(Yn===null?Yn=new Set([this]):Yn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function gf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new by;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ly.bind(null,e,t,n),t.then(e,e))}function vf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function xf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=mn(-1,1),t.tag=2,Qn(n,t,1))),n.lanes|=1),e)}var Sy=Sn.ReactCurrentOwner,ft=!1;function ot(e,t,n,r){t.child=e===null?Cm(t,null,n,r):Kr(t,e.child,n,r)}function yf(e,t,n,r,i){n=n.render;var o=t.ref;return Ur(t,i),r=Tc(e,t,n,r,o,i),n=Mc(),e!==null&&!ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,bn(e,t,i)):(Pe&&n&&xc(t),t.flags|=1,ot(e,t,r,i),t.child)}function wf(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!$c(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Ym(e,t,o,r,i)):(e=ls(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Qi,n(s,r)&&e.ref===t.ref)return bn(e,t,i)}return t.flags|=1,e=Gn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Ym(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Qi(o,r)&&e.ref===t.ref)if(ft=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ft=!0);else return t.lanes=e.lanes,bn(e,t,i)}return ku(e,t,n,r,i)}function Km(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(Ar,xt),xt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,je(Ar,xt),xt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,je(Ar,xt),xt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,je(Ar,xt),xt|=r;return ot(e,t,i,n),t.child}function Gm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ku(e,t,n,r,i){var o=ht(n)?cr:it.current;return o=Qr(t,o),Ur(t,i),n=Tc(e,t,n,r,o,i),r=Mc(),e!==null&&!ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,bn(e,t,i)):(Pe&&r&&xc(t),t.flags|=1,ot(e,t,n,i),t.child)}function bf(e,t,n,r,i){if(ht(n)){var o=!0;Ts(t)}else o=!1;if(Ur(t,i),t.stateNode===null)os(e,t),Sm(t,n,r),bu(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var a=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=It(u):(u=ht(n)?cr:it.current,u=Qr(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||a!==u)&&ff(t,s,r,u),Ln=!1;var m=t.memoizedState;s.state=m,Ls(t,r,s,i),a=t.memoizedState,l!==r||m!==a||pt.current||Ln?(typeof d=="function"&&(wu(t,n,d,r),a=t.memoizedState),(l=Ln||df(t,n,l,r,m,a,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),s.props=r,s.state=a,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,wm(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:At(t.type,l),s.props=u,f=t.pendingProps,m=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=It(a):(a=ht(n)?cr:it.current,a=Qr(t,a));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==f||m!==a)&&ff(t,s,r,a),Ln=!1,m=t.memoizedState,s.state=m,Ls(t,r,s,i);var g=t.memoizedState;l!==f||m!==g||pt.current||Ln?(typeof y=="function"&&(wu(t,n,y,r),g=t.memoizedState),(u=Ln||df(t,n,u,r,m,g,a)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,g,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,g,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),s.props=r,s.state=g,s.context=a,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Cu(e,t,n,r,o,i)}function Cu(e,t,n,r,i,o){Gm(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&sf(t,n,!1),bn(e,t,o);r=t.stateNode,Sy.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Kr(t,e.child,null,o),t.child=Kr(t,null,l,o)):ot(e,t,l,o),t.memoizedState=r.state,i&&sf(t,n,!0),t.child}function Xm(e){var t=e.stateNode;t.pendingContext?of(e,t.pendingContext,t.pendingContext!==t.context):t.context&&of(e,t.context,!1),Ec(e,t.containerInfo)}function Sf(e,t,n,r,i){return Yr(),wc(i),t.flags|=256,ot(e,t,n,r),t.child}var ju={dehydrated:null,treeContext:null,retryLane:0};function Eu(e){return{baseLanes:e,cachePool:null,transitions:null}}function qm(e,t,n){var r=t.pendingProps,i=Te.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),je(Te,i&1),e===null)return xu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=ma(s,r,0,null),e=ur(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Eu(n),t.memoizedState=ju,e):Dc(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return ky(e,t,s,r,l,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Gn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Gn(l,o):(o=ur(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Eu(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=ju,r}return o=e.child,e=o.sibling,r=Gn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Dc(e,t){return t=ma({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Do(e,t,n,r){return r!==null&&wc(r),Kr(t,e.child,null,n),e=Dc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ky(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=dl(Error(L(422))),Do(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ma({mode:"visible",children:r.children},i,0,null),o=ur(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Kr(t,e.child,null,s),t.child.memoizedState=Eu(s),t.memoizedState=ju,o);if(!(t.mode&1))return Do(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(L(419)),r=dl(o,r,void 0),Do(e,t,s,r)}if(l=(s&e.childLanes)!==0,ft||l){if(r=Qe,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,wn(e,i),Bt(r,e,i,-1))}return Nc(),r=dl(Error(L(421))),Do(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Ay.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,yt=Wn(i.nextSibling),wt=t,Pe=!0,Nt=null,e!==null&&(_t[Pt++]=fn,_t[Pt++]=pn,_t[Pt++]=dr,fn=e.id,pn=e.overflow,dr=t),t=Dc(t,r.children),t.flags|=4096,t)}function kf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),yu(e.return,t,n)}function fl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Jm(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ot(e,t,r.children,n),r=Te.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kf(e,n,t);else if(e.tag===19)kf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(je(Te,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&As(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),fl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&As(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}fl(t,!0,n,null,o);break;case"together":fl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function os(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function bn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(L(153));if(t.child!==null){for(e=t.child,n=Gn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Gn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Cy(e,t,n){switch(t.tag){case 3:Xm(t),Yr();break;case 5:jm(t);break;case 1:ht(t.type)&&Ts(t);break;case 4:Ec(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;je(Is,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(je(Te,Te.current&1),t.flags|=128,null):n&t.child.childLanes?qm(e,t,n):(je(Te,Te.current&1),e=bn(e,t,n),e!==null?e.sibling:null);je(Te,Te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Jm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),je(Te,Te.current),r)break;return null;case 22:case 23:return t.lanes=0,Km(e,t,n)}return bn(e,t,n)}var Zm,Ou,eg,tg;Zm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ou=function(){};eg=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,sr(rn.current);var o=null;switch(n){case"input":i=Gl(e,i),r=Gl(e,r),o=[];break;case"select":i=Re({},i,{value:void 0}),r=Re({},r,{value:void 0}),o=[];break;case"textarea":i=Jl(e,i),r=Jl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=_s)}eu(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Vi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(o||(o=[]),o.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(o=o||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Vi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&Oe("scroll",e),o||l===a||(o=[])):(o=o||[]).push(u,a))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};tg=function(e,t,n,r){n!==r&&(t.flags|=4)};function di(e,t){if(!Pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function jy(e,t,n){var r=t.pendingProps;switch(yc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(t),null;case 1:return ht(t.type)&&Ps(),tt(t),null;case 3:return r=t.stateNode,Gr(),_e(pt),_e(it),_c(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ro(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Nt!==null&&(Lu(Nt),Nt=null))),Ou(e,t),tt(t),null;case 5:Oc(t);var i=sr(qi.current);if(n=t.type,e!==null&&t.stateNode!=null)eg(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(L(166));return tt(t),null}if(e=sr(rn.current),Ro(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Jt]=t,r[Gi]=o,e=(t.mode&1)!==0,n){case"dialog":Oe("cancel",r),Oe("close",r);break;case"iframe":case"object":case"embed":Oe("load",r);break;case"video":case"audio":for(i=0;i<ji.length;i++)Oe(ji[i],r);break;case"source":Oe("error",r);break;case"img":case"image":case"link":Oe("error",r),Oe("load",r);break;case"details":Oe("toggle",r);break;case"input":Md(r,o),Oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Oe("invalid",r);break;case"textarea":Id(r,o),Oe("invalid",r)}eu(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Mo(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Mo(r.textContent,l,e),i=["children",""+l]):Vi.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&Oe("scroll",r)}switch(n){case"input":ko(r),Rd(r,o,!0);break;case"textarea":ko(r),Dd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=_s)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=_h(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Jt]=t,e[Gi]=r,Zm(e,t,!1,!1),t.stateNode=e;e:{switch(s=tu(n,r),n){case"dialog":Oe("cancel",e),Oe("close",e),i=r;break;case"iframe":case"object":case"embed":Oe("load",e),i=r;break;case"video":case"audio":for(i=0;i<ji.length;i++)Oe(ji[i],e);i=r;break;case"source":Oe("error",e),i=r;break;case"img":case"image":case"link":Oe("error",e),Oe("load",e),i=r;break;case"details":Oe("toggle",e),i=r;break;case"input":Md(e,r),i=Gl(e,r),Oe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Re({},r,{value:void 0}),Oe("invalid",e);break;case"textarea":Id(e,r),i=Jl(e,r),Oe("invalid",e);break;default:i=r}eu(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="style"?Mh(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Ph(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Ni(e,a):typeof a=="number"&&Ni(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Vi.hasOwnProperty(o)?a!=null&&o==="onScroll"&&Oe("scroll",e):a!=null&&ic(e,o,a,s))}switch(n){case"input":ko(e),Rd(e,r,!1);break;case"textarea":ko(e),Dd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Xn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?zr(e,!!r.multiple,o,!1):r.defaultValue!=null&&zr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=_s)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return tt(t),null;case 6:if(e&&t.stateNode!=null)tg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(L(166));if(n=sr(qi.current),sr(rn.current),Ro(t)){if(r=t.stateNode,n=t.memoizedProps,r[Jt]=t,(o=r.nodeValue!==n)&&(e=wt,e!==null))switch(e.tag){case 3:Mo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Jt]=t,t.stateNode=r}return tt(t),null;case 13:if(_e(Te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Pe&&yt!==null&&t.mode&1&&!(t.flags&128))xm(),Yr(),t.flags|=98560,o=!1;else if(o=Ro(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(L(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(L(317));o[Jt]=t}else Yr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;tt(t),o=!1}else Nt!==null&&(Lu(Nt),Nt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Te.current&1?Be===0&&(Be=3):Nc())),t.updateQueue!==null&&(t.flags|=4),tt(t),null);case 4:return Gr(),Ou(e,t),e===null&&Yi(t.stateNode.containerInfo),tt(t),null;case 10:return kc(t.type._context),tt(t),null;case 17:return ht(t.type)&&Ps(),tt(t),null;case 19:if(_e(Te),o=t.memoizedState,o===null)return tt(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)di(o,!1);else{if(Be!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=As(e),s!==null){for(t.flags|=128,di(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return je(Te,Te.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ae()>qr&&(t.flags|=128,r=!0,di(o,!1),t.lanes=4194304)}else{if(!r)if(e=As(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),di(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Pe)return tt(t),null}else 2*Ae()-o.renderingStartTime>qr&&n!==1073741824&&(t.flags|=128,r=!0,di(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ae(),t.sibling=null,n=Te.current,je(Te,r?n&1|2:n&1),t):(tt(t),null);case 22:case 23:return Vc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xt&1073741824&&(tt(t),t.subtreeFlags&6&&(t.flags|=8192)):tt(t),null;case 24:return null;case 25:return null}throw Error(L(156,t.tag))}function Ey(e,t){switch(yc(t),t.tag){case 1:return ht(t.type)&&Ps(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gr(),_e(pt),_e(it),_c(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Oc(t),null;case 13:if(_e(Te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(L(340));Yr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _e(Te),null;case 4:return Gr(),null;case 10:return kc(t.type._context),null;case 22:case 23:return Vc(),null;case 24:return null;default:return null}}var Lo=!1,rt=!1,Oy=typeof WeakSet=="function"?WeakSet:Set,W=null;function Lr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ie(e,t,r)}else n.current=null}function _u(e,t,n){try{n()}catch(r){Ie(e,t,r)}}var Cf=!1;function _y(e,t){if(du=js,e=om(),vc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,a=-1,u=0,d=0,f=e,m=null;t:for(;;){for(var y;f!==n||i!==0&&f.nodeType!==3||(l=s+i),f!==o||r!==0&&f.nodeType!==3||(a=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(y=f.firstChild)!==null;)m=f,f=y;for(;;){if(f===e)break t;if(m===n&&++u===i&&(l=s),m===o&&++d===r&&(a=s),(y=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=y}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(fu={focusedElem:e,selectionRange:n},js=!1,W=t;W!==null;)if(t=W,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,w=g.memoizedState,p=t.stateNode,h=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:At(t.type,v),w);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(b){Ie(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return g=Cf,Cf=!1,g}function Di(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&_u(t,n,o)}i=i.next}while(i!==r)}}function pa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Pu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ng(e){var t=e.alternate;t!==null&&(e.alternate=null,ng(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Jt],delete t[Gi],delete t[mu],delete t[cy],delete t[dy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function rg(e){return e.tag===5||e.tag===3||e.tag===4}function jf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||rg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Tu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=_s));else if(r!==4&&(e=e.child,e!==null))for(Tu(e,t,n),e=e.sibling;e!==null;)Tu(e,t,n),e=e.sibling}function Mu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Mu(e,t,n),e=e.sibling;e!==null;)Mu(e,t,n),e=e.sibling}var Ge=null,zt=!1;function Cn(e,t,n){for(n=n.child;n!==null;)ig(e,t,n),n=n.sibling}function ig(e,t,n){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(oa,n)}catch{}switch(n.tag){case 5:rt||Lr(n,t);case 6:var r=Ge,i=zt;Ge=null,Cn(e,t,n),Ge=r,zt=i,Ge!==null&&(zt?(e=Ge,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ge.removeChild(n.stateNode));break;case 18:Ge!==null&&(zt?(e=Ge,n=n.stateNode,e.nodeType===8?ol(e.parentNode,n):e.nodeType===1&&ol(e,n),Hi(e)):ol(Ge,n.stateNode));break;case 4:r=Ge,i=zt,Ge=n.stateNode.containerInfo,zt=!0,Cn(e,t,n),Ge=r,zt=i;break;case 0:case 11:case 14:case 15:if(!rt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&_u(n,t,s),i=i.next}while(i!==r)}Cn(e,t,n);break;case 1:if(!rt&&(Lr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ie(n,t,l)}Cn(e,t,n);break;case 21:Cn(e,t,n);break;case 22:n.mode&1?(rt=(r=rt)||n.memoizedState!==null,Cn(e,t,n),rt=r):Cn(e,t,n);break;default:Cn(e,t,n)}}function Ef(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Oy),t.forEach(function(r){var i=Fy.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:Ge=l.stateNode,zt=!1;break e;case 3:Ge=l.stateNode.containerInfo,zt=!0;break e;case 4:Ge=l.stateNode.containerInfo,zt=!0;break e}l=l.return}if(Ge===null)throw Error(L(160));ig(o,s,i),Ge=null,zt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){Ie(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)og(t,e),t=t.sibling}function og(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Lt(t,e),Qt(e),r&4){try{Di(3,e,e.return),pa(3,e)}catch(v){Ie(e,e.return,v)}try{Di(5,e,e.return)}catch(v){Ie(e,e.return,v)}}break;case 1:Lt(t,e),Qt(e),r&512&&n!==null&&Lr(n,n.return);break;case 5:if(Lt(t,e),Qt(e),r&512&&n!==null&&Lr(n,n.return),e.flags&32){var i=e.stateNode;try{Ni(i,"")}catch(v){Ie(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Eh(i,o),tu(l,s);var u=tu(l,o);for(s=0;s<a.length;s+=2){var d=a[s],f=a[s+1];d==="style"?Mh(i,f):d==="dangerouslySetInnerHTML"?Ph(i,f):d==="children"?Ni(i,f):ic(i,d,f,u)}switch(l){case"input":Xl(i,o);break;case"textarea":Oh(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?zr(i,!!o.multiple,y,!1):m!==!!o.multiple&&(o.defaultValue!=null?zr(i,!!o.multiple,o.defaultValue,!0):zr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Gi]=o}catch(v){Ie(e,e.return,v)}}break;case 6:if(Lt(t,e),Qt(e),r&4){if(e.stateNode===null)throw Error(L(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){Ie(e,e.return,v)}}break;case 3:if(Lt(t,e),Qt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Hi(t.containerInfo)}catch(v){Ie(e,e.return,v)}break;case 4:Lt(t,e),Qt(e);break;case 13:Lt(t,e),Qt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Fc=Ae())),r&4&&Ef(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(rt=(u=rt)||d,Lt(t,e),rt=u):Lt(t,e),Qt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(W=e,d=e.child;d!==null;){for(f=W=d;W!==null;){switch(m=W,y=m.child,m.tag){case 0:case 11:case 14:case 15:Di(4,m,m.return);break;case 1:Lr(m,m.return);var g=m.stateNode;if(typeof g.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(v){Ie(r,n,v)}}break;case 5:Lr(m,m.return);break;case 22:if(m.memoizedState!==null){_f(f);continue}}y!==null?(y.return=m,W=y):_f(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,a=f.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Th("display",s))}catch(v){Ie(e,e.return,v)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(v){Ie(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Lt(t,e),Qt(e),r&4&&Ef(e);break;case 21:break;default:Lt(t,e),Qt(e)}}function Qt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(rg(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ni(i,""),r.flags&=-33);var o=jf(e);Mu(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=jf(e);Tu(e,l,s);break;default:throw Error(L(161))}}catch(a){Ie(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Py(e,t,n){W=e,sg(e)}function sg(e,t,n){for(var r=(e.mode&1)!==0;W!==null;){var i=W,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Lo;if(!s){var l=i.alternate,a=l!==null&&l.memoizedState!==null||rt;l=Lo;var u=rt;if(Lo=s,(rt=a)&&!u)for(W=i;W!==null;)s=W,a=s.child,s.tag===22&&s.memoizedState!==null?Pf(i):a!==null?(a.return=s,W=a):Pf(i);for(;o!==null;)W=o,sg(o),o=o.sibling;W=i,Lo=l,rt=u}Of(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,W=o):Of(e)}}function Of(e){for(;W!==null;){var t=W;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:rt||pa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!rt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:At(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&cf(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}cf(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Hi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}rt||t.flags&512&&Pu(t)}catch(m){Ie(t,t.return,m)}}if(t===e){W=null;break}if(n=t.sibling,n!==null){n.return=t.return,W=n;break}W=t.return}}function _f(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var n=t.sibling;if(n!==null){n.return=t.return,W=n;break}W=t.return}}function Pf(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{pa(4,t)}catch(a){Ie(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){Ie(t,i,a)}}var o=t.return;try{Pu(t)}catch(a){Ie(t,o,a)}break;case 5:var s=t.return;try{Pu(t)}catch(a){Ie(t,s,a)}}}catch(a){Ie(t,t.return,a)}if(t===e){W=null;break}var l=t.sibling;if(l!==null){l.return=t.return,W=l;break}W=t.return}}var Ty=Math.ceil,Vs=Sn.ReactCurrentDispatcher,Lc=Sn.ReactCurrentOwner,Mt=Sn.ReactCurrentBatchConfig,pe=0,Qe=null,Ve=null,qe=0,xt=0,Ar=Zn(0),Be=0,to=null,pr=0,ha=0,Ac=0,Li=null,dt=null,Fc=0,qr=1/0,un=null,Ns=!1,Ru=null,Yn=null,Ao=!1,Vn=null,$s=0,Ai=0,Iu=null,ss=-1,as=0;function at(){return pe&6?Ae():ss!==-1?ss:ss=Ae()}function Kn(e){return e.mode&1?pe&2&&qe!==0?qe&-qe:py.transition!==null?(as===0&&(as=Bh()),as):(e=xe,e!==0||(e=window.event,e=e===void 0?16:Xh(e.type)),e):1}function Bt(e,t,n,r){if(50<Ai)throw Ai=0,Iu=null,Error(L(185));uo(e,n,r),(!(pe&2)||e!==Qe)&&(e===Qe&&(!(pe&2)&&(ha|=n),Be===4&&Fn(e,qe)),mt(e,r),n===1&&pe===0&&!(t.mode&1)&&(qr=Ae()+500,ca&&er()))}function mt(e,t){var n=e.callbackNode;p0(e,t);var r=Cs(e,e===Qe?qe:0);if(r===0)n!==null&&Fd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Fd(n),t===1)e.tag===0?fy(Tf.bind(null,e)):mm(Tf.bind(null,e)),ly(function(){!(pe&6)&&er()}),n=null;else{switch(Hh(r)){case 1:n=uc;break;case 4:n=$h;break;case 16:n=ks;break;case 536870912:n=Uh;break;default:n=ks}n=hg(n,ag.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ag(e,t){if(ss=-1,as=0,pe&6)throw Error(L(327));var n=e.callbackNode;if(Br()&&e.callbackNode!==n)return null;var r=Cs(e,e===Qe?qe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Us(e,r);else{t=r;var i=pe;pe|=2;var o=ug();(Qe!==e||qe!==t)&&(un=null,qr=Ae()+500,lr(e,t));do try{Iy();break}catch(l){lg(e,l)}while(!0);Sc(),Vs.current=o,pe=i,Ve!==null?t=0:(Qe=null,qe=0,t=Be)}if(t!==0){if(t===2&&(i=su(e),i!==0&&(r=i,t=Du(e,i))),t===1)throw n=to,lr(e,0),Fn(e,r),mt(e,Ae()),n;if(t===6)Fn(e,r);else{if(i=e.current.alternate,!(r&30)&&!My(i)&&(t=Us(e,r),t===2&&(o=su(e),o!==0&&(r=o,t=Du(e,o))),t===1))throw n=to,lr(e,0),Fn(e,r),mt(e,Ae()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(L(345));case 2:rr(e,dt,un);break;case 3:if(Fn(e,r),(r&130023424)===r&&(t=Fc+500-Ae(),10<t)){if(Cs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){at(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=hu(rr.bind(null,e,dt,un),t);break}rr(e,dt,un);break;case 4:if(Fn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Ut(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ty(r/1960))-r,10<r){e.timeoutHandle=hu(rr.bind(null,e,dt,un),r);break}rr(e,dt,un);break;case 5:rr(e,dt,un);break;default:throw Error(L(329))}}}return mt(e,Ae()),e.callbackNode===n?ag.bind(null,e):null}function Du(e,t){var n=Li;return e.current.memoizedState.isDehydrated&&(lr(e,t).flags|=256),e=Us(e,t),e!==2&&(t=dt,dt=n,t!==null&&Lu(t)),e}function Lu(e){dt===null?dt=e:dt.push.apply(dt,e)}function My(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Wt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Fn(e,t){for(t&=~Ac,t&=~ha,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ut(t),r=1<<n;e[n]=-1,t&=~r}}function Tf(e){if(pe&6)throw Error(L(327));Br();var t=Cs(e,0);if(!(t&1))return mt(e,Ae()),null;var n=Us(e,t);if(e.tag!==0&&n===2){var r=su(e);r!==0&&(t=r,n=Du(e,r))}if(n===1)throw n=to,lr(e,0),Fn(e,t),mt(e,Ae()),n;if(n===6)throw Error(L(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,rr(e,dt,un),mt(e,Ae()),null}function zc(e,t){var n=pe;pe|=1;try{return e(t)}finally{pe=n,pe===0&&(qr=Ae()+500,ca&&er())}}function hr(e){Vn!==null&&Vn.tag===0&&!(pe&6)&&Br();var t=pe;pe|=1;var n=Mt.transition,r=xe;try{if(Mt.transition=null,xe=1,e)return e()}finally{xe=r,Mt.transition=n,pe=t,!(pe&6)&&er()}}function Vc(){xt=Ar.current,_e(Ar)}function lr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ay(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(yc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ps();break;case 3:Gr(),_e(pt),_e(it),_c();break;case 5:Oc(r);break;case 4:Gr();break;case 13:_e(Te);break;case 19:_e(Te);break;case 10:kc(r.type._context);break;case 22:case 23:Vc()}n=n.return}if(Qe=e,Ve=e=Gn(e.current,null),qe=xt=t,Be=0,to=null,Ac=ha=pr=0,dt=Li=null,or!==null){for(t=0;t<or.length;t++)if(n=or[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}or=null}return e}function lg(e,t){do{var n=Ve;try{if(Sc(),rs.current=zs,Fs){for(var r=Me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Fs=!1}if(fr=0,We=Ue=Me=null,Ii=!1,Ji=0,Lc.current=null,n===null||n.return===null){Be=1,to=t,Ve=null;break}e:{var o=e,s=n.return,l=n,a=t;if(t=qe,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=vf(s);if(y!==null){y.flags&=-257,xf(y,s,l,o,t),y.mode&1&&gf(o,u,t),t=y,a=u;var g=t.updateQueue;if(g===null){var v=new Set;v.add(a),t.updateQueue=v}else g.add(a);break e}else{if(!(t&1)){gf(o,u,t),Nc();break e}a=Error(L(426))}}else if(Pe&&l.mode&1){var w=vf(s);if(w!==null){!(w.flags&65536)&&(w.flags|=256),xf(w,s,l,o,t),wc(Xr(a,l));break e}}o=a=Xr(a,l),Be!==4&&(Be=2),Li===null?Li=[o]:Li.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Wm(o,a,t);uf(o,p);break e;case 1:l=a;var h=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Yn===null||!Yn.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var b=Qm(o,l,t);uf(o,b);break e}}o=o.return}while(o!==null)}dg(n)}catch(k){t=k,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(!0)}function ug(){var e=Vs.current;return Vs.current=zs,e===null?zs:e}function Nc(){(Be===0||Be===3||Be===2)&&(Be=4),Qe===null||!(pr&268435455)&&!(ha&268435455)||Fn(Qe,qe)}function Us(e,t){var n=pe;pe|=2;var r=ug();(Qe!==e||qe!==t)&&(un=null,lr(e,t));do try{Ry();break}catch(i){lg(e,i)}while(!0);if(Sc(),pe=n,Vs.current=r,Ve!==null)throw Error(L(261));return Qe=null,qe=0,Be}function Ry(){for(;Ve!==null;)cg(Ve)}function Iy(){for(;Ve!==null&&!i0();)cg(Ve)}function cg(e){var t=pg(e.alternate,e,xt);e.memoizedProps=e.pendingProps,t===null?dg(e):Ve=t,Lc.current=null}function dg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ey(n,t),n!==null){n.flags&=32767,Ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Be=6,Ve=null;return}}else if(n=jy(n,t,xt),n!==null){Ve=n;return}if(t=t.sibling,t!==null){Ve=t;return}Ve=t=e}while(t!==null);Be===0&&(Be=5)}function rr(e,t,n){var r=xe,i=Mt.transition;try{Mt.transition=null,xe=1,Dy(e,t,n,r)}finally{Mt.transition=i,xe=r}return null}function Dy(e,t,n,r){do Br();while(Vn!==null);if(pe&6)throw Error(L(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(L(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(h0(e,o),e===Qe&&(Ve=Qe=null,qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ao||(Ao=!0,hg(ks,function(){return Br(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Mt.transition,Mt.transition=null;var s=xe;xe=1;var l=pe;pe|=4,Lc.current=null,_y(e,n),og(n,e),ey(fu),js=!!du,fu=du=null,e.current=n,Py(n),o0(),pe=l,xe=s,Mt.transition=o}else e.current=n;if(Ao&&(Ao=!1,Vn=e,$s=i),o=e.pendingLanes,o===0&&(Yn=null),l0(n.stateNode),mt(e,Ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ns)throw Ns=!1,e=Ru,Ru=null,e;return $s&1&&e.tag!==0&&Br(),o=e.pendingLanes,o&1?e===Iu?Ai++:(Ai=0,Iu=e):Ai=0,er(),null}function Br(){if(Vn!==null){var e=Hh($s),t=Mt.transition,n=xe;try{if(Mt.transition=null,xe=16>e?16:e,Vn===null)var r=!1;else{if(e=Vn,Vn=null,$s=0,pe&6)throw Error(L(331));var i=pe;for(pe|=4,W=e.current;W!==null;){var o=W,s=o.child;if(W.flags&16){var l=o.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(W=u;W!==null;){var d=W;switch(d.tag){case 0:case 11:case 15:Di(8,d,o)}var f=d.child;if(f!==null)f.return=d,W=f;else for(;W!==null;){d=W;var m=d.sibling,y=d.return;if(ng(d),d===u){W=null;break}if(m!==null){m.return=y,W=m;break}W=y}}}var g=o.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}W=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,W=s;else e:for(;W!==null;){if(o=W,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Di(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,W=p;break e}W=o.return}}var h=e.current;for(W=h;W!==null;){s=W;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,W=x;else e:for(s=h;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:pa(9,l)}}catch(k){Ie(l,l.return,k)}if(l===s){W=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,W=b;break e}W=l.return}}if(pe=i,er(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(oa,e)}catch{}r=!0}return r}finally{xe=n,Mt.transition=t}}return!1}function Mf(e,t,n){t=Xr(n,t),t=Wm(e,t,1),e=Qn(e,t,1),t=at(),e!==null&&(uo(e,1,t),mt(e,t))}function Ie(e,t,n){if(e.tag===3)Mf(e,e,n);else for(;t!==null;){if(t.tag===3){Mf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yn===null||!Yn.has(r))){e=Xr(n,e),e=Qm(t,e,1),t=Qn(t,e,1),e=at(),t!==null&&(uo(t,1,e),mt(t,e));break}}t=t.return}}function Ly(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=at(),e.pingedLanes|=e.suspendedLanes&n,Qe===e&&(qe&n)===n&&(Be===4||Be===3&&(qe&130023424)===qe&&500>Ae()-Fc?lr(e,0):Ac|=n),mt(e,t)}function fg(e,t){t===0&&(e.mode&1?(t=Eo,Eo<<=1,!(Eo&130023424)&&(Eo=4194304)):t=1);var n=at();e=wn(e,t),e!==null&&(uo(e,t,n),mt(e,n))}function Ay(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),fg(e,n)}function Fy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(t),fg(e,n)}var pg;pg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||pt.current)ft=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ft=!1,Cy(e,t,n);ft=!!(e.flags&131072)}else ft=!1,Pe&&t.flags&1048576&&gm(t,Rs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;os(e,t),e=t.pendingProps;var i=Qr(t,it.current);Ur(t,n),i=Tc(null,t,r,e,i,n);var o=Mc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ht(r)?(o=!0,Ts(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,jc(t),i.updater=da,t.stateNode=i,i._reactInternals=t,bu(t,r,e,n),t=Cu(null,t,r,!0,o,n)):(t.tag=0,Pe&&o&&xc(t),ot(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(os(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Vy(r),e=At(r,e),i){case 0:t=ku(null,t,r,e,n);break e;case 1:t=bf(null,t,r,e,n);break e;case 11:t=yf(null,t,r,e,n);break e;case 14:t=wf(null,t,r,At(r.type,e),n);break e}throw Error(L(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:At(r,i),ku(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:At(r,i),bf(e,t,r,i,n);case 3:e:{if(Xm(t),e===null)throw Error(L(387));r=t.pendingProps,o=t.memoizedState,i=o.element,wm(e,t),Ls(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Xr(Error(L(423)),t),t=Sf(e,t,r,n,i);break e}else if(r!==i){i=Xr(Error(L(424)),t),t=Sf(e,t,r,n,i);break e}else for(yt=Wn(t.stateNode.containerInfo.firstChild),wt=t,Pe=!0,Nt=null,n=Cm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yr(),r===i){t=bn(e,t,n);break e}ot(e,t,r,n)}t=t.child}return t;case 5:return jm(t),e===null&&xu(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,pu(r,i)?s=null:o!==null&&pu(r,o)&&(t.flags|=32),Gm(e,t),ot(e,t,s,n),t.child;case 6:return e===null&&xu(t),null;case 13:return qm(e,t,n);case 4:return Ec(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Kr(t,null,r,n):ot(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:At(r,i),yf(e,t,r,i,n);case 7:return ot(e,t,t.pendingProps,n),t.child;case 8:return ot(e,t,t.pendingProps.children,n),t.child;case 12:return ot(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,je(Is,r._currentValue),r._currentValue=s,o!==null)if(Wt(o.value,s)){if(o.children===i.children&&!pt.current){t=bn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=mn(-1,n&-n),a.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),yu(o.return,n,t),l.lanes|=n;break}a=a.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(L(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),yu(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ot(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ur(t,n),i=It(i),r=r(i),t.flags|=1,ot(e,t,r,n),t.child;case 14:return r=t.type,i=At(r,t.pendingProps),i=At(r.type,i),wf(e,t,r,i,n);case 15:return Ym(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:At(r,i),os(e,t),t.tag=1,ht(r)?(e=!0,Ts(t)):e=!1,Ur(t,n),Sm(t,r,i),bu(t,r,i,n),Cu(null,t,r,!0,e,n);case 19:return Jm(e,t,n);case 22:return Km(e,t,n)}throw Error(L(156,t.tag))};function hg(e,t){return Nh(e,t)}function zy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,n,r){return new zy(e,t,n,r)}function $c(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vy(e){if(typeof e=="function")return $c(e)?1:0;if(e!=null){if(e=e.$$typeof,e===sc)return 11;if(e===ac)return 14}return 2}function Gn(e,t){var n=e.alternate;return n===null?(n=Tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ls(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")$c(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Er:return ur(n.children,i,o,t);case oc:s=8,i|=8;break;case Wl:return e=Tt(12,n,t,i|2),e.elementType=Wl,e.lanes=o,e;case Ql:return e=Tt(13,n,t,i),e.elementType=Ql,e.lanes=o,e;case Yl:return e=Tt(19,n,t,i),e.elementType=Yl,e.lanes=o,e;case kh:return ma(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case bh:s=10;break e;case Sh:s=9;break e;case sc:s=11;break e;case ac:s=14;break e;case Dn:s=16,r=null;break e}throw Error(L(130,e==null?e:typeof e,""))}return t=Tt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function ur(e,t,n,r){return e=Tt(7,e,r,t),e.lanes=n,e}function ma(e,t,n,r){return e=Tt(22,e,r,t),e.elementType=kh,e.lanes=n,e.stateNode={isHidden:!1},e}function pl(e,t,n){return e=Tt(6,e,null,t),e.lanes=n,e}function hl(e,t,n){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ny(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ka(0),this.expirationTimes=Ka(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ka(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Uc(e,t,n,r,i,o,s,l,a){return e=new Ny(e,t,n,l,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Tt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jc(o),e}function $y(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:jr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function mg(e){if(!e)return qn;e=e._reactInternals;e:{if(vr(e)!==e||e.tag!==1)throw Error(L(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ht(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(L(171))}if(e.tag===1){var n=e.type;if(ht(n))return hm(e,n,t)}return t}function gg(e,t,n,r,i,o,s,l,a){return e=Uc(n,r,!0,e,i,o,s,l,a),e.context=mg(null),n=e.current,r=at(),i=Kn(n),o=mn(r,i),o.callback=t??null,Qn(n,o,i),e.current.lanes=i,uo(e,i,r),mt(e,r),e}function ga(e,t,n,r){var i=t.current,o=at(),s=Kn(i);return n=mg(n),t.context===null?t.context=n:t.pendingContext=n,t=mn(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Qn(i,t,s),e!==null&&(Bt(e,i,s,o),ns(e,i,s)),s}function Bs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Rf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Bc(e,t){Rf(e,t),(e=e.alternate)&&Rf(e,t)}function Uy(){return null}var vg=typeof reportError=="function"?reportError:function(e){console.error(e)};function Hc(e){this._internalRoot=e}va.prototype.render=Hc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(L(409));ga(e,t,null,null)};va.prototype.unmount=Hc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;hr(function(){ga(null,e,null,null)}),t[yn]=null}};function va(e){this._internalRoot=e}va.prototype.unstable_scheduleHydration=function(e){if(e){var t=Yh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<An.length&&t!==0&&t<An[n].priority;n++);An.splice(n,0,e),n===0&&Gh(e)}};function Wc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function If(){}function By(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Bs(s);o.call(u)}}var s=gg(t,r,e,0,null,!1,!1,"",If);return e._reactRootContainer=s,e[yn]=s.current,Yi(e.nodeType===8?e.parentNode:e),hr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Bs(a);l.call(u)}}var a=Uc(e,0,!1,null,null,!1,!1,"",If);return e._reactRootContainer=a,e[yn]=a.current,Yi(e.nodeType===8?e.parentNode:e),hr(function(){ga(t,a,n,r)}),a}function ya(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var a=Bs(s);l.call(a)}}ga(t,s,e,i)}else s=By(n,t,e,i,r);return Bs(s)}Wh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ci(t.pendingLanes);n!==0&&(cc(t,n|1),mt(t,Ae()),!(pe&6)&&(qr=Ae()+500,er()))}break;case 13:hr(function(){var r=wn(e,1);if(r!==null){var i=at();Bt(r,e,1,i)}}),Bc(e,1)}};dc=function(e){if(e.tag===13){var t=wn(e,134217728);if(t!==null){var n=at();Bt(t,e,134217728,n)}Bc(e,134217728)}};Qh=function(e){if(e.tag===13){var t=Kn(e),n=wn(e,t);if(n!==null){var r=at();Bt(n,e,t,r)}Bc(e,t)}};Yh=function(){return xe};Kh=function(e,t){var n=xe;try{return xe=e,t()}finally{xe=n}};ru=function(e,t,n){switch(t){case"input":if(Xl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ua(r);if(!i)throw Error(L(90));jh(r),Xl(r,i)}}}break;case"textarea":Oh(e,n);break;case"select":t=n.value,t!=null&&zr(e,!!n.multiple,t,!1)}};Dh=zc;Lh=hr;var Hy={usingClientEntryPoint:!1,Events:[fo,Tr,ua,Rh,Ih,zc]},fi={findFiberByHostInstance:ir,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Wy={bundleType:fi.bundleType,version:fi.version,rendererPackageName:fi.rendererPackageName,rendererConfig:fi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zh(e),e===null?null:e.stateNode},findFiberByHostInstance:fi.findFiberByHostInstance||Uy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fo.isDisabled&&Fo.supportsFiber)try{oa=Fo.inject(Wy),nn=Fo}catch{}}Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hy;Ct.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wc(t))throw Error(L(200));return $y(e,t,null,n)};Ct.createRoot=function(e,t){if(!Wc(e))throw Error(L(299));var n=!1,r="",i=vg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Uc(e,1,!1,null,null,n,!1,r,i),e[yn]=t.current,Yi(e.nodeType===8?e.parentNode:e),new Hc(t)};Ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=zh(t),e=e===null?null:e.stateNode,e};Ct.flushSync=function(e){return hr(e)};Ct.hydrate=function(e,t,n){if(!xa(t))throw Error(L(200));return ya(null,e,t,!0,n)};Ct.hydrateRoot=function(e,t,n){if(!Wc(e))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=vg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=gg(t,null,e,1,n??null,i,!1,o,s),e[yn]=t.current,Yi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new va(t)};Ct.render=function(e,t,n){if(!xa(t))throw Error(L(200));return ya(null,e,t,!1,n)};Ct.unmountComponentAtNode=function(e){if(!xa(e))throw Error(L(40));return e._reactRootContainer?(hr(function(){ya(null,null,e,!1,function(){e._reactRootContainer=null,e[yn]=null})}),!0):!1};Ct.unstable_batchedUpdates=zc;Ct.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!xa(n))throw Error(L(200));if(e==null||e._reactInternals===void 0)throw Error(L(38));return ya(e,t,n,!1,r)};Ct.version="18.2.0-next-9e3b772b8-20220608";function xg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xg)}catch(e){console.error(e)}}xg(),gh.exports=Ct;var ho=gh.exports;const Qy=ao(ho);var Df=ho;Bl.createRoot=Df.createRoot,Bl.hydrateRoot=Df.hydrateRoot;var yg={exports:{}};(function(e,t){(function(r,i){e.exports=i(M)})(bx,n=>(()=>{var r={"./node_modules/css-mediaquery/index.js":(l,a)=>{a.match=g,a.parse=v;var u=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,d=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,f=/^(?:(min|max)-)?(.+)/,m=/(em|rem|px|cm|mm|in|pt|pc)?$/,y=/(dpi|dpcm|dppx)?$/;function g(x,b){return v(x).some(function(k){var _=k.inverse,E=k.type==="all"||b.type===k.type;if(E&&_||!(E||_))return!1;var P=k.expressions.every(function(T){var I=T.feature,B=T.modifier,A=T.value,D=b[I];if(!D)return!1;switch(I){case"orientation":case"scan":return D.toLowerCase()===A.toLowerCase();case"width":case"height":case"device-width":case"device-height":A=h(A),D=h(D);break;case"resolution":A=p(A),D=p(D);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":A=w(A),D=w(D);break;case"grid":case"color":case"color-index":case"monochrome":A=parseInt(A,10)||1,D=parseInt(D,10)||0;break}switch(B){case"min":return D>=A;case"max":return D<=A;default:return D===A}});return P&&!_||!P&&_})}function v(x){return x.split(",").map(function(b){b=b.trim();var k=b.match(u),_=k[1],E=k[2],P=k[3]||"",T={};return T.inverse=!!_&&_.toLowerCase()==="not",T.type=E?E.toLowerCase():"all",P=P.match(/\([^\)]+\)/g)||[],T.expressions=P.map(function(I){var B=I.match(d),A=B[1].toLowerCase().match(f);return{modifier:A[1],feature:A[2],value:B[2]}}),T})}function w(x){var b=Number(x),k;return b||(k=x.match(/^(\d+)\s*\/\s*(\d+)$/),b=k[1]/k[2]),b}function p(x){var b=parseFloat(x),k=String(x).match(y)[1];switch(k){case"dpcm":return b/2.54;case"dppx":return b*96;default:return b}}function h(x){var b=parseFloat(x),k=String(x).match(m)[1];switch(k){case"em":return b*16;case"rem":return b*16;case"cm":return b*96/2.54;case"mm":return b*96/2.54/10;case"in":return b*96;case"pt":return b*72;case"pc":return b*72/12;default:return b}}},"./node_modules/hyphenate-style-name/index.js":(l,a,u)=>{u.r(a),u.d(a,{default:()=>v});var d=/[A-Z]/g,f=/^ms-/,m={};function y(w){return"-"+w.toLowerCase()}function g(w){if(m.hasOwnProperty(w))return m[w];var p=w.replace(d,y);return m[w]=f.test(p)?"-"+p:p}const v=g},"./node_modules/matchmediaquery/index.js":(l,a,u)=>{var d=u("./node_modules/css-mediaquery/index.js").match,f=typeof window<"u"?window.matchMedia:null;function m(g,v,w){var p=this;if(f&&!w){var h=f.call(window,g);this.matches=h.matches,this.media=h.media,h.addListener(k)}else this.matches=d(g,v),this.media=g;this.addListener=x,this.removeListener=b,this.dispose=_;function x(E){h&&h.addListener(E)}function b(E){h&&h.removeListener(E)}function k(E){p.matches=E.matches,p.media=E.media}function _(){h&&h.removeListener(k)}}function y(g,v,w){return new m(g,v,w)}l.exports=y},"./node_modules/object-assign/index.js":l=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var a=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;function f(y){if(y==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(y)}function m(){try{if(!Object.assign)return!1;var y=new String("abc");if(y[5]="de",Object.getOwnPropertyNames(y)[0]==="5")return!1;for(var g={},v=0;v<10;v++)g["_"+String.fromCharCode(v)]=v;var w=Object.getOwnPropertyNames(g).map(function(h){return g[h]});if(w.join("")!=="0123456789")return!1;var p={};return"abcdefghijklmnopqrst".split("").forEach(function(h){p[h]=h}),Object.keys(Object.assign({},p)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}l.exports=m()?Object.assign:function(y,g){for(var v,w=f(y),p,h=1;h<arguments.length;h++){v=Object(arguments[h]);for(var x in v)u.call(v,x)&&(w[x]=v[x]);if(a){p=a(v);for(var b=0;b<p.length;b++)d.call(v,p[b])&&(w[p[b]]=v[p[b]])}}return w}},"./node_modules/prop-types/checkPropTypes.js":(l,a,u)=>{var d=function(){};{var f=u("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),m={},y=u("./node_modules/prop-types/lib/has.js");d=function(v){var w="Warning: "+v;typeof console<"u"&&console.error(w);try{throw new Error(w)}catch{}}}function g(v,w,p,h,x){for(var b in v)if(y(v,b)){var k;try{if(typeof v[b]!="function"){var _=Error((h||"React class")+": "+p+" type `"+b+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof v[b]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw _.name="Invariant Violation",_}k=v[b](w,b,h,p,null,f)}catch(P){k=P}if(k&&!(k instanceof Error)&&d((h||"React class")+": type specification of "+p+" `"+b+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof k+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),k instanceof Error&&!(k.message in m)){m[k.message]=!0;var E=x?x():"";d("Failed "+p+" type: "+k.message+(E??""))}}}g.resetWarningCache=function(){m={}},l.exports=g},"./node_modules/prop-types/factoryWithTypeCheckers.js":(l,a,u)=>{var d=u("./node_modules/react-is/index.js"),f=u("./node_modules/object-assign/index.js"),m=u("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),y=u("./node_modules/prop-types/lib/has.js"),g=u("./node_modules/prop-types/checkPropTypes.js"),v=function(){};v=function(p){var h="Warning: "+p;typeof console<"u"&&console.error(h);try{throw new Error(h)}catch{}};function w(){return null}l.exports=function(p,h){var x=typeof Symbol=="function"&&Symbol.iterator,b="@@iterator";function k(F){var H=F&&(x&&F[x]||F[b]);if(typeof H=="function")return H}var _="<<anonymous>>",E={array:B("array"),bigint:B("bigint"),bool:B("boolean"),func:B("function"),number:B("number"),object:B("object"),string:B("string"),symbol:B("symbol"),any:A(),arrayOf:D,element:X(),elementType:Z(),instanceOf:ee,node:Y(),objectOf:z,oneOf:ve,oneOfType:Q,shape:ne,exact:Ee};function P(F,H){return F===H?F!==0||1/F===1/H:F!==F&&H!==H}function T(F,H){this.message=F,this.data=H&&typeof H=="object"?H:{},this.stack=""}T.prototype=Error.prototype;function I(F){var H={},ie=0;function oe(ae,se,le,fe,S,O,j){if(fe=fe||_,O=O||le,j!==m){if(h){var $=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw $.name="Invariant Violation",$}else if(typeof console<"u"){var N=fe+":"+le;!H[N]&&ie<3&&(v("You are manually calling a React.PropTypes validation function for the `"+O+"` prop on `"+fe+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),H[N]=!0,ie++)}}return se[le]==null?ae?se[le]===null?new T("The "+S+" `"+O+"` is marked as required "+("in `"+fe+"`, but its value is `null`.")):new T("The "+S+" `"+O+"` is marked as required in "+("`"+fe+"`, but its value is `undefined`.")):null:F(se,le,fe,S,O)}var te=oe.bind(null,!1);return te.isRequired=oe.bind(null,!0),te}function B(F){function H(ie,oe,te,ae,se,le){var fe=ie[oe],S=he(fe);if(S!==F){var O=be(fe);return new T("Invalid "+ae+" `"+se+"` of type "+("`"+O+"` supplied to `"+te+"`, expected ")+("`"+F+"`."),{expectedType:F})}return null}return I(H)}function A(){return I(w)}function D(F){function H(ie,oe,te,ae,se){if(typeof F!="function")return new T("Property `"+se+"` of component `"+te+"` has invalid PropType notation inside arrayOf.");var le=ie[oe];if(!Array.isArray(le)){var fe=he(le);return new T("Invalid "+ae+" `"+se+"` of type "+("`"+fe+"` supplied to `"+te+"`, expected an array."))}for(var S=0;S<le.length;S++){var O=F(le,S,te,ae,se+"["+S+"]",m);if(O instanceof Error)return O}return null}return I(H)}function X(){function F(H,ie,oe,te,ae){var se=H[ie];if(!p(se)){var le=he(se);return new T("Invalid "+te+" `"+ae+"` of type "+("`"+le+"` supplied to `"+oe+"`, expected a single ReactElement."))}return null}return I(F)}function Z(){function F(H,ie,oe,te,ae){var se=H[ie];if(!d.isValidElementType(se)){var le=he(se);return new T("Invalid "+te+" `"+ae+"` of type "+("`"+le+"` supplied to `"+oe+"`, expected a single ReactElement type."))}return null}return I(F)}function ee(F){function H(ie,oe,te,ae,se){if(!(ie[oe]instanceof F)){var le=F.name||_,fe=vt(ie[oe]);return new T("Invalid "+ae+" `"+se+"` of type "+("`"+fe+"` supplied to `"+te+"`, expected ")+("instance of `"+le+"`."))}return null}return I(H)}function ve(F){if(!Array.isArray(F))return arguments.length>1?v("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):v("Invalid argument supplied to oneOf, expected an array."),w;function H(ie,oe,te,ae,se){for(var le=ie[oe],fe=0;fe<F.length;fe++)if(P(le,F[fe]))return null;var S=JSON.stringify(F,function(j,$){var N=be($);return N==="symbol"?String($):$});return new T("Invalid "+ae+" `"+se+"` of value `"+String(le)+"` "+("supplied to `"+te+"`, expected one of "+S+"."))}return I(H)}function z(F){function H(ie,oe,te,ae,se){if(typeof F!="function")return new T("Property `"+se+"` of component `"+te+"` has invalid PropType notation inside objectOf.");var le=ie[oe],fe=he(le);if(fe!=="object")return new T("Invalid "+ae+" `"+se+"` of type "+("`"+fe+"` supplied to `"+te+"`, expected an object."));for(var S in le)if(y(le,S)){var O=F(le,S,te,ae,se+"."+S,m);if(O instanceof Error)return O}return null}return I(H)}function Q(F){if(!Array.isArray(F))return v("Invalid argument supplied to oneOfType, expected an instance of array."),w;for(var H=0;H<F.length;H++){var ie=F[H];if(typeof ie!="function")return v("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+Ze(ie)+" at index "+H+"."),w}function oe(te,ae,se,le,fe){for(var S=[],O=0;O<F.length;O++){var j=F[O],$=j(te,ae,se,le,fe,m);if($==null)return null;$.data&&y($.data,"expectedType")&&S.push($.data.expectedType)}var N=S.length>0?", expected one of type ["+S.join(", ")+"]":"";return new T("Invalid "+le+" `"+fe+"` supplied to "+("`"+se+"`"+N+"."))}return I(oe)}function Y(){function F(H,ie,oe,te,ae){return we(H[ie])?null:new T("Invalid "+te+" `"+ae+"` supplied to "+("`"+oe+"`, expected a ReactNode."))}return I(F)}function ce(F,H,ie,oe,te){return new T((F||"React class")+": "+H+" type `"+ie+"."+oe+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+te+"`.")}function ne(F){function H(ie,oe,te,ae,se){var le=ie[oe],fe=he(le);if(fe!=="object")return new T("Invalid "+ae+" `"+se+"` of type `"+fe+"` "+("supplied to `"+te+"`, expected `object`."));for(var S in F){var O=F[S];if(typeof O!="function")return ce(te,ae,se,S,be(O));var j=O(le,S,te,ae,se+"."+S,m);if(j)return j}return null}return I(H)}function Ee(F){function H(ie,oe,te,ae,se){var le=ie[oe],fe=he(le);if(fe!=="object")return new T("Invalid "+ae+" `"+se+"` of type `"+fe+"` "+("supplied to `"+te+"`, expected `object`."));var S=f({},ie[oe],F);for(var O in S){var j=F[O];if(y(F,O)&&typeof j!="function")return ce(te,ae,se,O,be(j));if(!j)return new T("Invalid "+ae+" `"+se+"` key `"+O+"` supplied to `"+te+"`.\nBad object: "+JSON.stringify(ie[oe],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(F),null,"  "));var $=j(le,O,te,ae,se+"."+O,m);if($)return $}return null}return I(H)}function we(F){switch(typeof F){case"number":case"string":case"undefined":return!0;case"boolean":return!F;case"object":if(Array.isArray(F))return F.every(we);if(F===null||p(F))return!0;var H=k(F);if(H){var ie=H.call(F),oe;if(H!==F.entries){for(;!(oe=ie.next()).done;)if(!we(oe.value))return!1}else for(;!(oe=ie.next()).done;){var te=oe.value;if(te&&!we(te[1]))return!1}}else return!1;return!0;default:return!1}}function $e(F,H){return F==="symbol"?!0:H?H["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&H instanceof Symbol:!1}function he(F){var H=typeof F;return Array.isArray(F)?"array":F instanceof RegExp?"object":$e(H,F)?"symbol":H}function be(F){if(typeof F>"u"||F===null)return""+F;var H=he(F);if(H==="object"){if(F instanceof Date)return"date";if(F instanceof RegExp)return"regexp"}return H}function Ze(F){var H=be(F);switch(H){case"array":case"object":return"an "+H;case"boolean":case"date":case"regexp":return"a "+H;default:return H}}function vt(F){return!F.constructor||!F.constructor.name?_:F.constructor.name}return E.checkPropTypes=g,E.resetWarningCache=g.resetWarningCache,E.PropTypes=E,E}},"./node_modules/prop-types/index.js":(l,a,u)=>{{var d=u("./node_modules/react-is/index.js"),f=!0;l.exports=u("./node_modules/prop-types/factoryWithTypeCheckers.js")(d.isElement,f)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":l=>{var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";l.exports=a},"./node_modules/prop-types/lib/has.js":l=>{l.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(l,a)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var u=typeof Symbol=="function"&&Symbol.for,d=u?Symbol.for("react.element"):60103,f=u?Symbol.for("react.portal"):60106,m=u?Symbol.for("react.fragment"):60107,y=u?Symbol.for("react.strict_mode"):60108,g=u?Symbol.for("react.profiler"):60114,v=u?Symbol.for("react.provider"):60109,w=u?Symbol.for("react.context"):60110,p=u?Symbol.for("react.async_mode"):60111,h=u?Symbol.for("react.concurrent_mode"):60111,x=u?Symbol.for("react.forward_ref"):60112,b=u?Symbol.for("react.suspense"):60113,k=u?Symbol.for("react.suspense_list"):60120,_=u?Symbol.for("react.memo"):60115,E=u?Symbol.for("react.lazy"):60116,P=u?Symbol.for("react.block"):60121,T=u?Symbol.for("react.fundamental"):60117,I=u?Symbol.for("react.responder"):60118,B=u?Symbol.for("react.scope"):60119;function A(j){return typeof j=="string"||typeof j=="function"||j===m||j===h||j===g||j===y||j===b||j===k||typeof j=="object"&&j!==null&&(j.$$typeof===E||j.$$typeof===_||j.$$typeof===v||j.$$typeof===w||j.$$typeof===x||j.$$typeof===T||j.$$typeof===I||j.$$typeof===B||j.$$typeof===P)}function D(j){if(typeof j=="object"&&j!==null){var $=j.$$typeof;switch($){case d:var N=j.type;switch(N){case p:case h:case m:case g:case y:case b:return N;default:var V=N&&N.$$typeof;switch(V){case w:case x:case E:case _:case v:return V;default:return $}}case f:return $}}}var X=p,Z=h,ee=w,ve=v,z=d,Q=x,Y=m,ce=E,ne=_,Ee=f,we=g,$e=y,he=b,be=!1;function Ze(j){return be||(be=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),vt(j)||D(j)===p}function vt(j){return D(j)===h}function F(j){return D(j)===w}function H(j){return D(j)===v}function ie(j){return typeof j=="object"&&j!==null&&j.$$typeof===d}function oe(j){return D(j)===x}function te(j){return D(j)===m}function ae(j){return D(j)===E}function se(j){return D(j)===_}function le(j){return D(j)===f}function fe(j){return D(j)===g}function S(j){return D(j)===y}function O(j){return D(j)===b}a.AsyncMode=X,a.ConcurrentMode=Z,a.ContextConsumer=ee,a.ContextProvider=ve,a.Element=z,a.ForwardRef=Q,a.Fragment=Y,a.Lazy=ce,a.Memo=ne,a.Portal=Ee,a.Profiler=we,a.StrictMode=$e,a.Suspense=he,a.isAsyncMode=Ze,a.isConcurrentMode=vt,a.isContextConsumer=F,a.isContextProvider=H,a.isElement=ie,a.isForwardRef=oe,a.isFragment=te,a.isLazy=ae,a.isMemo=se,a.isPortal=le,a.isProfiler=fe,a.isStrictMode=S,a.isSuspense=O,a.isValidElementType=A,a.typeOf=D})()},"./node_modules/react-is/index.js":(l,a,u)=>{l.exports=u("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(l,a,u)=>{u.r(a),u.d(a,{shallowEqualArrays:()=>f,shallowEqualObjects:()=>d});function d(m,y){if(m===y)return!0;if(!m||!y)return!1;var g=Object.keys(m),v=Object.keys(y),w=g.length;if(v.length!==w)return!1;for(var p=0;p<w;p++){var h=g[p];if(m[h]!==y[h]||!Object.prototype.hasOwnProperty.call(y,h))return!1}return!0}function f(m,y){if(m===y)return!0;if(!m||!y)return!1;var g=m.length;if(y.length!==g)return!1;for(var v=0;v<g;v++)if(m[v]!==y[v])return!1;return!0}},"./src/Component.ts":function(l,a,u){var d=this&&this.__rest||function(g,v){var w={};for(var p in g)Object.prototype.hasOwnProperty.call(g,p)&&v.indexOf(p)<0&&(w[p]=g[p]);if(g!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,p=Object.getOwnPropertySymbols(g);h<p.length;h++)v.indexOf(p[h])<0&&Object.prototype.propertyIsEnumerable.call(g,p[h])&&(w[p[h]]=g[p[h]]);return w},f=this&&this.__importDefault||function(g){return g&&g.__esModule?g:{default:g}};Object.defineProperty(a,"__esModule",{value:!0});var m=f(u("./src/useMediaQuery.ts")),y=function(g){var v=g.children,w=g.device,p=g.onChange,h=d(g,["children","device","onChange"]),x=(0,m.default)(h,w,p);return typeof v=="function"?v(x):x?v:null};a.default=y},"./src/Context.ts":(l,a,u)=>{Object.defineProperty(a,"__esModule",{value:!0});var d=u("react"),f=(0,d.createContext)(void 0);a.default=f},"./src/index.ts":function(l,a,u){var d=this&&this.__importDefault||function(v){return v&&v.__esModule?v:{default:v}};Object.defineProperty(a,"__esModule",{value:!0}),a.Context=a.toQuery=a.useMediaQuery=a.default=void 0;var f=d(u("./src/useMediaQuery.ts"));a.useMediaQuery=f.default;var m=d(u("./src/Component.ts"));a.default=m.default;var y=d(u("./src/toQuery.ts"));a.toQuery=y.default;var g=d(u("./src/Context.ts"));a.Context=g.default},"./src/mediaQuery.ts":function(l,a,u){var d=this&&this.__assign||function(){return d=Object.assign||function(b){for(var k,_=1,E=arguments.length;_<E;_++){k=arguments[_];for(var P in k)Object.prototype.hasOwnProperty.call(k,P)&&(b[P]=k[P])}return b},d.apply(this,arguments)},f=this&&this.__rest||function(b,k){var _={};for(var E in b)Object.prototype.hasOwnProperty.call(b,E)&&k.indexOf(E)<0&&(_[E]=b[E]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var P=0,E=Object.getOwnPropertySymbols(b);P<E.length;P++)k.indexOf(E[P])<0&&Object.prototype.propertyIsEnumerable.call(b,E[P])&&(_[E[P]]=b[E[P]]);return _},m=this&&this.__importDefault||function(b){return b&&b.__esModule?b:{default:b}};Object.defineProperty(a,"__esModule",{value:!0});var y=m(u("./node_modules/prop-types/index.js")),g=y.default.oneOfType([y.default.string,y.default.number]),v={all:y.default.bool,grid:y.default.bool,aural:y.default.bool,braille:y.default.bool,handheld:y.default.bool,print:y.default.bool,projection:y.default.bool,screen:y.default.bool,tty:y.default.bool,tv:y.default.bool,embossed:y.default.bool},w={orientation:y.default.oneOf(["portrait","landscape"]),scan:y.default.oneOf(["progressive","interlace"]),aspectRatio:y.default.string,deviceAspectRatio:y.default.string,height:g,deviceHeight:g,width:g,deviceWidth:g,color:y.default.bool,colorIndex:y.default.bool,monochrome:y.default.bool,resolution:g,type:Object.keys(v)};w.type;var p=f(w,["type"]),h=d({minAspectRatio:y.default.string,maxAspectRatio:y.default.string,minDeviceAspectRatio:y.default.string,maxDeviceAspectRatio:y.default.string,minHeight:g,maxHeight:g,minDeviceHeight:g,maxDeviceHeight:g,minWidth:g,maxWidth:g,minDeviceWidth:g,maxDeviceWidth:g,minColor:y.default.number,maxColor:y.default.number,minColorIndex:y.default.number,maxColorIndex:y.default.number,minMonochrome:y.default.number,maxMonochrome:y.default.number,minResolution:g,maxResolution:g},p),x=d(d({},v),h);a.default={all:x,types:v,matchers:w,features:h}},"./src/toQuery.ts":function(l,a,u){var d=this&&this.__importDefault||function(p){return p&&p.__esModule?p:{default:p}};Object.defineProperty(a,"__esModule",{value:!0});var f=d(u("./node_modules/hyphenate-style-name/index.js")),m=d(u("./src/mediaQuery.ts")),y=function(p){return"not ".concat(p)},g=function(p,h){var x=(0,f.default)(p);return typeof h=="number"&&(h="".concat(h,"px")),h===!0?x:h===!1?y(x):"(".concat(x,": ").concat(h,")")},v=function(p){return p.join(" and ")},w=function(p){var h=[];return Object.keys(m.default.all).forEach(function(x){var b=p[x];b!=null&&h.push(g(x,b))}),v(h)};a.default=w},"./src/useMediaQuery.ts":function(l,a,u){var d=this&&this.__importDefault||function(T){return T&&T.__esModule?T:{default:T}};Object.defineProperty(a,"__esModule",{value:!0});var f=u("react"),m=d(u("./node_modules/matchmediaquery/index.js")),y=d(u("./node_modules/hyphenate-style-name/index.js")),g=u("./node_modules/shallow-equal/dist/index.esm.js"),v=d(u("./src/toQuery.ts")),w=d(u("./src/Context.ts")),p=function(T){return T.query||(0,v.default)(T)},h=function(T){if(T){var I=Object.keys(T);return I.reduce(function(B,A){return B[(0,y.default)(A)]=T[A],B},{})}},x=function(){var T=(0,f.useRef)(!1);return(0,f.useEffect)(function(){T.current=!0},[]),T.current},b=function(T){var I=(0,f.useContext)(w.default),B=function(){return h(T)||h(I)},A=(0,f.useState)(B),D=A[0],X=A[1];return(0,f.useEffect)(function(){var Z=B();(0,g.shallowEqualObjects)(D,Z)||X(Z)},[T,I]),D},k=function(T){var I=function(){return p(T)},B=(0,f.useState)(I),A=B[0],D=B[1];return(0,f.useEffect)(function(){var X=I();A!==X&&D(X)},[T]),A},_=function(T,I){var B=function(){return(0,m.default)(T,I||{},!!I)},A=(0,f.useState)(B),D=A[0],X=A[1],Z=x();return(0,f.useEffect)(function(){if(Z){var ee=B();return X(ee),function(){ee&&ee.dispose()}}},[T,I]),D},E=function(T){var I=(0,f.useState)(T.matches),B=I[0],A=I[1];return(0,f.useEffect)(function(){var D=function(X){A(X.matches)};return T.addListener(D),A(T.matches),function(){T.removeListener(D)}},[T]),B},P=function(T,I,B){var A=b(I),D=k(T);if(!D)throw new Error("Invalid or missing MediaQuery!");var X=_(D,A),Z=E(X),ee=x();return(0,f.useEffect)(function(){ee&&B&&B(Z)},[Z]),(0,f.useEffect)(function(){return function(){X&&X.dispose()}},[]),Z};a.default=P},react:l=>{l.exports=n}},i={};function o(l){var a=i[l];if(a!==void 0)return a.exports;var u=i[l]={exports:{}};return r[l].call(u.exports,u,u.exports,o),u.exports}o.d=(l,a)=>{for(var u in a)o.o(a,u)&&!o.o(l,u)&&Object.defineProperty(l,u,{enumerable:!0,get:a[u]})},o.o=(l,a)=>Object.prototype.hasOwnProperty.call(l,a),o.r=l=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})};var s=o("./src/index.ts");return s})())})(yg);var hn=yg.exports;const Nn=ao(hn),Yy="/healthy-management-project/assets/olga_picture1x-6T0pnRyH.webp",Ky="/healthy-management-project/assets/olga_picture2x-4JmA7wGC.webp",Gy="/healthy-management-project/assets/olga_picture1x-ohcXIDw6.jpg",Xy="/healthy-management-project/assets/mob_olga_picture1x-PQXysebb.jpg",qy="/healthy-management-project/assets/mob_olga_picture1x-1fPtYEvT.webp",Jy="/healthy-management-project/assets/mob_olga_picture2x-VJcRD770.webp",Zy="/healthy-management-project/assets/olga_picture@1x-V6xBvkB4.jpg",e1="/healthy-management-project/assets/olga_picture@1x-UUwfpH5W.webp",t1="/healthy-management-project/assets/olga_picture@2x-MWfGyCra.webp",n1="/healthy-management-project/assets/olga_picture@1x-rIS7rOGv.jpg",r1="/healthy-management-project/assets/olga_picture@1x-aIsvHdrL.webp",i1="/healthy-management-project/assets/olga_picture@2x-3sK8O0o2.webp",re="/healthy-management-project/assets/sprite-gBYbMuxV.svg";function q(){return q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q.apply(this,arguments)}function wg(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var o1=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,s1=wg(function(e){return o1.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function a1(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function l1(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var u1=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(l1(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=a1(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),nt="-ms-",Hs="-moz-",me="-webkit-",bg="comm",Qc="rule",Yc="decl",c1="@import",Sg="@keyframes",d1="@layer",f1=Math.abs,wa=String.fromCharCode,p1=Object.assign;function h1(e,t){return Xe(e,0)^45?(((t<<2^Xe(e,0))<<2^Xe(e,1))<<2^Xe(e,2))<<2^Xe(e,3):0}function kg(e){return e.trim()}function m1(e,t){return(e=t.exec(e))?e[0]:e}function ge(e,t,n){return e.replace(t,n)}function Au(e,t){return e.indexOf(t)}function Xe(e,t){return e.charCodeAt(t)|0}function no(e,t,n){return e.slice(t,n)}function Xt(e){return e.length}function Kc(e){return e.length}function zo(e,t){return t.push(e),e}function g1(e,t){return e.map(t).join("")}var ba=1,Jr=1,Cg=0,gt=0,ze=0,ri="";function Sa(e,t,n,r,i,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:ba,column:Jr,length:s,return:""}}function pi(e,t){return p1(Sa("",null,null,"",null,null,0),e,{length:-e.length},t)}function v1(){return ze}function x1(){return ze=gt>0?Xe(ri,--gt):0,Jr--,ze===10&&(Jr=1,ba--),ze}function bt(){return ze=gt<Cg?Xe(ri,gt++):0,Jr++,ze===10&&(Jr=1,ba++),ze}function on(){return Xe(ri,gt)}function us(){return gt}function mo(e,t){return no(ri,e,t)}function ro(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function jg(e){return ba=Jr=1,Cg=Xt(ri=e),gt=0,[]}function Eg(e){return ri="",e}function cs(e){return kg(mo(gt-1,Fu(e===91?e+2:e===40?e+1:e)))}function y1(e){for(;(ze=on())&&ze<33;)bt();return ro(e)>2||ro(ze)>3?"":" "}function w1(e,t){for(;--t&&bt()&&!(ze<48||ze>102||ze>57&&ze<65||ze>70&&ze<97););return mo(e,us()+(t<6&&on()==32&&bt()==32))}function Fu(e){for(;bt();)switch(ze){case e:return gt;case 34:case 39:e!==34&&e!==39&&Fu(ze);break;case 40:e===41&&Fu(e);break;case 92:bt();break}return gt}function b1(e,t){for(;bt()&&e+ze!==57;)if(e+ze===84&&on()===47)break;return"/*"+mo(t,gt-1)+"*"+wa(e===47?e:bt())}function S1(e){for(;!ro(on());)bt();return mo(e,gt)}function k1(e){return Eg(ds("",null,null,null,[""],e=jg(e),0,[0],e))}function ds(e,t,n,r,i,o,s,l,a){for(var u=0,d=0,f=s,m=0,y=0,g=0,v=1,w=1,p=1,h=0,x="",b=i,k=o,_=r,E=x;w;)switch(g=h,h=bt()){case 40:if(g!=108&&Xe(E,f-1)==58){Au(E+=ge(cs(h),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:E+=cs(h);break;case 9:case 10:case 13:case 32:E+=y1(g);break;case 92:E+=w1(us()-1,7);continue;case 47:switch(on()){case 42:case 47:zo(C1(b1(bt(),us()),t,n),a);break;default:E+="/"}break;case 123*v:l[u++]=Xt(E)*p;case 125*v:case 59:case 0:switch(h){case 0:case 125:w=0;case 59+d:p==-1&&(E=ge(E,/\f/g,"")),y>0&&Xt(E)-f&&zo(y>32?Af(E+";",r,n,f-1):Af(ge(E," ","")+";",r,n,f-2),a);break;case 59:E+=";";default:if(zo(_=Lf(E,t,n,u,d,i,l,x,b=[],k=[],f),o),h===123)if(d===0)ds(E,t,_,_,b,o,f,l,k);else switch(m===99&&Xe(E,3)===110?100:m){case 100:case 108:case 109:case 115:ds(e,_,_,r&&zo(Lf(e,_,_,0,0,i,l,x,i,b=[],f),k),i,k,f,l,r?b:k);break;default:ds(E,_,_,_,[""],k,0,l,k)}}u=d=y=0,v=p=1,x=E="",f=s;break;case 58:f=1+Xt(E),y=g;default:if(v<1){if(h==123)--v;else if(h==125&&v++==0&&x1()==125)continue}switch(E+=wa(h),h*v){case 38:p=d>0?1:(E+="\f",-1);break;case 44:l[u++]=(Xt(E)-1)*p,p=1;break;case 64:on()===45&&(E+=cs(bt())),m=on(),d=f=Xt(x=E+=S1(us())),h++;break;case 45:g===45&&Xt(E)==2&&(v=0)}}return o}function Lf(e,t,n,r,i,o,s,l,a,u,d){for(var f=i-1,m=i===0?o:[""],y=Kc(m),g=0,v=0,w=0;g<r;++g)for(var p=0,h=no(e,f+1,f=f1(v=s[g])),x=e;p<y;++p)(x=kg(v>0?m[p]+" "+h:ge(h,/&\f/g,m[p])))&&(a[w++]=x);return Sa(e,t,n,i===0?Qc:l,a,u,d)}function C1(e,t,n){return Sa(e,t,n,bg,wa(v1()),no(e,2,-2),0)}function Af(e,t,n,r){return Sa(e,t,n,Yc,no(e,0,r),no(e,r+1,-1),r)}function Hr(e,t){for(var n="",r=Kc(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function j1(e,t,n,r){switch(e.type){case d1:if(e.children.length)break;case c1:case Yc:return e.return=e.return||e.value;case bg:return"";case Sg:return e.return=e.value+"{"+Hr(e.children,r)+"}";case Qc:e.value=e.props.join(",")}return Xt(n=Hr(e.children,r))?e.return=e.value+"{"+n+"}":""}function E1(e){var t=Kc(e);return function(n,r,i,o){for(var s="",l=0;l<t;l++)s+=e[l](n,r,i,o)||"";return s}}function O1(e){return function(t){t.root||(t=t.return)&&e(t)}}var _1=function(t,n,r){for(var i=0,o=0;i=o,o=on(),i===38&&o===12&&(n[r]=1),!ro(o);)bt();return mo(t,gt)},P1=function(t,n){var r=-1,i=44;do switch(ro(i)){case 0:i===38&&on()===12&&(n[r]=1),t[r]+=_1(gt-1,n,r);break;case 2:t[r]+=cs(i);break;case 4:if(i===44){t[++r]=on()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=wa(i)}while(i=bt());return t},T1=function(t,n){return Eg(P1(jg(t),n))},Ff=new WeakMap,M1=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Ff.get(r))&&!i){Ff.set(t,!0);for(var o=[],s=T1(n,o),l=r.props,a=0,u=0;a<s.length;a++)for(var d=0;d<l.length;d++,u++)t.props[u]=o[a]?s[a].replace(/&\f/g,l[d]):l[d]+" "+s[a]}}},R1=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Og(e,t){switch(h1(e,t)){case 5103:return me+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return me+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return me+e+Hs+e+nt+e+e;case 6828:case 4268:return me+e+nt+e+e;case 6165:return me+e+nt+"flex-"+e+e;case 5187:return me+e+ge(e,/(\w+).+(:[^]+)/,me+"box-$1$2"+nt+"flex-$1$2")+e;case 5443:return me+e+nt+"flex-item-"+ge(e,/flex-|-self/,"")+e;case 4675:return me+e+nt+"flex-line-pack"+ge(e,/align-content|flex-|-self/,"")+e;case 5548:return me+e+nt+ge(e,"shrink","negative")+e;case 5292:return me+e+nt+ge(e,"basis","preferred-size")+e;case 6060:return me+"box-"+ge(e,"-grow","")+me+e+nt+ge(e,"grow","positive")+e;case 4554:return me+ge(e,/([^-])(transform)/g,"$1"+me+"$2")+e;case 6187:return ge(ge(ge(e,/(zoom-|grab)/,me+"$1"),/(image-set)/,me+"$1"),e,"")+e;case 5495:case 3959:return ge(e,/(image-set\([^]*)/,me+"$1$`$1");case 4968:return ge(ge(e,/(.+:)(flex-)?(.*)/,me+"box-pack:$3"+nt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+me+e+e;case 4095:case 3583:case 4068:case 2532:return ge(e,/(.+)-inline(.+)/,me+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xt(e)-1-t>6)switch(Xe(e,t+1)){case 109:if(Xe(e,t+4)!==45)break;case 102:return ge(e,/(.+:)(.+)-([^]+)/,"$1"+me+"$2-$3$1"+Hs+(Xe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Au(e,"stretch")?Og(ge(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Xe(e,t+1)!==115)break;case 6444:switch(Xe(e,Xt(e)-3-(~Au(e,"!important")&&10))){case 107:return ge(e,":",":"+me)+e;case 101:return ge(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+me+(Xe(e,14)===45?"inline-":"")+"box$3$1"+me+"$2$3$1"+nt+"$2box$3")+e}break;case 5936:switch(Xe(e,t+11)){case 114:return me+e+nt+ge(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return me+e+nt+ge(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return me+e+nt+ge(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return me+e+nt+e+e}return e}var I1=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Yc:t.return=Og(t.value,t.length);break;case Sg:return Hr([pi(t,{value:ge(t.value,"@","@"+me)})],i);case Qc:if(t.length)return g1(t.props,function(o){switch(m1(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Hr([pi(t,{props:[ge(o,/:(read-\w+)/,":"+Hs+"$1")]})],i);case"::placeholder":return Hr([pi(t,{props:[ge(o,/:(plac\w+)/,":"+me+"input-$1")]}),pi(t,{props:[ge(o,/:(plac\w+)/,":"+Hs+"$1")]}),pi(t,{props:[ge(o,/:(plac\w+)/,nt+"input-$1")]})],i)}return""})}},D1=[I1],L1=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var w=v.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=t.stylisPlugins||D1,o={},s,l=[];s=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var w=v.getAttribute("data-emotion").split(" "),p=1;p<w.length;p++)o[w[p]]=!0;l.push(v)});var a,u=[M1,R1];{var d,f=[j1,O1(function(v){d.insert(v)})],m=E1(u.concat(i,f)),y=function(w){return Hr(k1(w),m)};a=function(w,p,h,x){d=h,y(w?w+"{"+p.styles+"}":p.styles),x&&(g.inserted[p.name]=!0)}}var g={key:n,sheet:new u1({key:n,container:s,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:a};return g.sheet.hydrate(l),g},_g={exports:{}},ye={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ye=typeof Symbol=="function"&&Symbol.for,Gc=Ye?Symbol.for("react.element"):60103,Xc=Ye?Symbol.for("react.portal"):60106,ka=Ye?Symbol.for("react.fragment"):60107,Ca=Ye?Symbol.for("react.strict_mode"):60108,ja=Ye?Symbol.for("react.profiler"):60114,Ea=Ye?Symbol.for("react.provider"):60109,Oa=Ye?Symbol.for("react.context"):60110,qc=Ye?Symbol.for("react.async_mode"):60111,_a=Ye?Symbol.for("react.concurrent_mode"):60111,Pa=Ye?Symbol.for("react.forward_ref"):60112,Ta=Ye?Symbol.for("react.suspense"):60113,A1=Ye?Symbol.for("react.suspense_list"):60120,Ma=Ye?Symbol.for("react.memo"):60115,Ra=Ye?Symbol.for("react.lazy"):60116,F1=Ye?Symbol.for("react.block"):60121,z1=Ye?Symbol.for("react.fundamental"):60117,V1=Ye?Symbol.for("react.responder"):60118,N1=Ye?Symbol.for("react.scope"):60119;function Et(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Gc:switch(e=e.type,e){case qc:case _a:case ka:case ja:case Ca:case Ta:return e;default:switch(e=e&&e.$$typeof,e){case Oa:case Pa:case Ra:case Ma:case Ea:return e;default:return t}}case Xc:return t}}}function Pg(e){return Et(e)===_a}ye.AsyncMode=qc;ye.ConcurrentMode=_a;ye.ContextConsumer=Oa;ye.ContextProvider=Ea;ye.Element=Gc;ye.ForwardRef=Pa;ye.Fragment=ka;ye.Lazy=Ra;ye.Memo=Ma;ye.Portal=Xc;ye.Profiler=ja;ye.StrictMode=Ca;ye.Suspense=Ta;ye.isAsyncMode=function(e){return Pg(e)||Et(e)===qc};ye.isConcurrentMode=Pg;ye.isContextConsumer=function(e){return Et(e)===Oa};ye.isContextProvider=function(e){return Et(e)===Ea};ye.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gc};ye.isForwardRef=function(e){return Et(e)===Pa};ye.isFragment=function(e){return Et(e)===ka};ye.isLazy=function(e){return Et(e)===Ra};ye.isMemo=function(e){return Et(e)===Ma};ye.isPortal=function(e){return Et(e)===Xc};ye.isProfiler=function(e){return Et(e)===ja};ye.isStrictMode=function(e){return Et(e)===Ca};ye.isSuspense=function(e){return Et(e)===Ta};ye.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ka||e===_a||e===ja||e===Ca||e===Ta||e===A1||typeof e=="object"&&e!==null&&(e.$$typeof===Ra||e.$$typeof===Ma||e.$$typeof===Ea||e.$$typeof===Oa||e.$$typeof===Pa||e.$$typeof===z1||e.$$typeof===V1||e.$$typeof===N1||e.$$typeof===F1)};ye.typeOf=Et;_g.exports=ye;var $1=_g.exports,Tg=$1,U1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},B1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Mg={};Mg[Tg.ForwardRef]=U1;Mg[Tg.Memo]=B1;var H1=!0;function Rg(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Jc=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||H1===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},Ig=function(t,n,r){Jc(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function W1(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Q1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Y1=/[A-Z]|^ms/g,K1=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Dg=function(t){return t.charCodeAt(1)===45},zf=function(t){return t!=null&&typeof t!="boolean"},ml=wg(function(e){return Dg(e)?e:e.replace(Y1,"-$&").toLowerCase()}),Vf=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(K1,function(r,i,o){return qt={name:i,styles:o,next:qt},i})}return Q1[t]!==1&&!Dg(t)&&typeof n=="number"&&n!==0?n+"px":n};function io(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return qt={name:n.name,styles:n.styles,next:qt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)qt={name:r.name,styles:r.styles,next:qt},r=r.next;var i=n.styles+";";return i}return G1(e,t,n)}case"function":{if(e!==void 0){var o=qt,s=n(e);return qt=o,io(e,t,s)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function G1(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=io(e,t,n[i])+";";else for(var o in n){var s=n[o];if(typeof s!="object")t!=null&&t[s]!==void 0?r+=o+"{"+t[s]+"}":zf(s)&&(r+=ml(o)+":"+Vf(o,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(t==null||t[s[0]]===void 0))for(var l=0;l<s.length;l++)zf(s[l])&&(r+=ml(o)+":"+Vf(o,s[l])+";");else{var a=io(e,t,s);switch(o){case"animation":case"animationName":{r+=ml(o)+":"+a+";";break}default:r+=o+"{"+a+"}"}}}return r}var Nf=/label:\s*([^\s;\n{]+)\s*(;|$)/g,qt,Zc=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";qt=void 0;var s=t[0];s==null||s.raw===void 0?(i=!1,o+=io(r,n,s)):o+=s[0];for(var l=1;l<t.length;l++)o+=io(r,n,t[l]),i&&(o+=s[l]);Nf.lastIndex=0;for(var a="",u;(u=Nf.exec(o))!==null;)a+="-"+u[1];var d=W1(o)+a;return{name:d,styles:o,next:qt}},X1=function(t){return t()},q1=Od.useInsertionEffect?Od.useInsertionEffect:!1,Lg=q1||X1,ed={}.hasOwnProperty,Ag=M.createContext(typeof HTMLElement<"u"?L1({key:"css"}):null);Ag.Provider;var Fg=function(t){return M.forwardRef(function(n,r){var i=M.useContext(Ag);return t(n,i,r)})},zg=M.createContext({}),zu="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",J1=function(t,n){var r={};for(var i in n)ed.call(n,i)&&(r[i]=n[i]);return r[zu]=t,r},Z1=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Jc(n,r,i),Lg(function(){return Ig(n,r,i)}),null},ew=Fg(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[zu],o=[r],s="";typeof e.className=="string"?s=Rg(t.registered,o,e.className):e.className!=null&&(s=e.className+" ");var l=Zc(o,void 0,M.useContext(zg));s+=t.key+"-"+l.name;var a={};for(var u in e)ed.call(e,u)&&u!=="css"&&u!==zu&&(a[u]=e[u]);return a.ref=n,a.className=s,M.createElement(M.Fragment,null,M.createElement(Z1,{cache:t,serialized:l,isStringTag:typeof i=="string"}),M.createElement(i,a))}),tw=ew,K=function(t,n){var r=arguments;if(n==null||!ed.call(n,"css"))return M.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=tw,o[1]=J1(t,n);for(var s=2;s<i;s++)o[s]=r[s];return M.createElement.apply(null,o)};function td(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Zc(t)}var nw=function(){var t=td.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},rw=s1,iw=function(t){return t!=="theme"},$f=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?rw:iw},Uf=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(s){return t.__emotion_forwardProp(s)&&o(s)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},ow=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Jc(n,r,i),Lg(function(){return Ig(n,r,i)}),null},sw=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,s;n!==void 0&&(o=n.label,s=n.target);var l=Uf(t,n,r),a=l||$f(i),u=!a("as");return function(){var d=arguments,f=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&f.push("label:"+o+";"),d[0]==null||d[0].raw===void 0)f.push.apply(f,d);else{f.push(d[0][0]);for(var m=d.length,y=1;y<m;y++)f.push(d[y],d[0][y])}var g=Fg(function(v,w,p){var h=u&&v.as||i,x="",b=[],k=v;if(v.theme==null){k={};for(var _ in v)k[_]=v[_];k.theme=M.useContext(zg)}typeof v.className=="string"?x=Rg(w.registered,b,v.className):v.className!=null&&(x=v.className+" ");var E=Zc(f.concat(b),w.registered,k);x+=w.key+"-"+E.name,s!==void 0&&(x+=" "+s);var P=u&&l===void 0?$f(h):a,T={};for(var I in v)u&&I==="as"||P(I)&&(T[I]=v[I]);return T.className=x,T.ref=p,M.createElement(M.Fragment,null,M.createElement(ow,{cache:w,serialized:E,isStringTag:typeof h=="string"}),M.createElement(h,T))});return g.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",g.defaultProps=t.defaultProps,g.__emotion_real=g,g.__emotion_base=i,g.__emotion_styles=f,g.__emotion_forwardProp=l,Object.defineProperty(g,"toString",{value:function(){return"."+s}}),g.withComponent=function(v,w){return e(v,q({},n,w,{shouldForwardProp:Uf(g,w,!0)})).apply(void 0,f)},g}},aw=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],C=sw.bind();aw.forEach(function(e){C[e]=C(e)});const lw=C.section`
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
`,uw=C.h2`
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
`,cw=C.div`
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
`,Vo=C.img`
  border-radius: 18px;
`,dw=C.div`
  max-width: 327px;
  // width: calc((100% - 24px) / 2);
  padding: 40px;
  border-radius: 16px;
  background: var(--background-white, #fcfcfc);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);

  @media screen and (min-width: 768px) {
    // width: calc((100% - 24px) / 2);
    min-width: 688px;
    padding: 73px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 628px;
    padding: 40px;
  }
  @media screen and (min-width: 1920px) {
    min-width: 828px;
    padding: 80px;
  }
`,fw=C.h3`
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
`,pw=C.p`
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
`,hw=C.ul`
  padding-left: 23px;
`,tr=C.li`
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
`,mw=C.ul`
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
`,gl=C.a`
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
`,vl=C.svg`
  margin-left: 10px;
`,gw=C.div`
  // width: calc((100% - 24px) / 2);
  max-width: 327px;
  border-radius: 16px;

  @media screen and (min-width: 768px) {
    // width: calc((100% - 24px) / 2);
    min-width: 688px;
    border-radius: 16px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 628px;
  }
  @media screen and (min-width: 1920px) {
    min-width: 828px;
  }
`,vw=()=>c.jsx(lw,{className:"container",children:c.jsxs("div",{children:[c.jsx(uw,{children:"Про мене"}),c.jsxs(cw,{children:[c.jsxs(gw,{children:[c.jsx(Nn,{maxWidth:767,children:c.jsx(Vo,{srcSet:`${Jy} 2x, ${qy} 1x`,sizes:"(max-width: 767px) 100vw",src:Xy,alt:"Ольга Поліщук"})}),c.jsx(Nn,{minWidth:768,maxWidth:1439,children:c.jsx(Vo,{srcSet:`${t1} 2x, ${e1} 1x`,type:"image/webp",sizes:"(min-width: 768px) 100vw (max-width: 1439px) 100vw",src:Zy,alt:"Ольга Поліщук"})}),c.jsx(Nn,{minWidth:1440,maxWidth:1919,children:c.jsx(Vo,{srcSet:`${i1} 2x, ${r1} 1x`,type:"image/webp",sizes:"(min-width: 1440px) 100vw (max-width: 1919px) 100vw",src:`${n1}`,alt:"Ольга Поліщук"})}),c.jsx(Nn,{minWidth:1920,children:c.jsx(Vo,{srcSet:`${Ky} 2x, ${Yy} 1x`,type:"image/webp",sizes:"(min-width: 1920px) 100vw",src:Gy,alt:"Ольга Поліщук"})})]}),c.jsxs(dw,{children:[c.jsx(fw,{children:"Ольга Поліщук"}),c.jsx(pw,{children:"CEO and Founder студії стратегічного розвитку"}),c.jsxs(hw,{children:[c.jsx(tr,{children:"MBA Healthcare management"}),c.jsx(tr,{children:"Викладачка медичного маркетингу Бізнес-школа УКУ (LvBS)"}),c.jsx(tr,{children:`Експертка в "Центр Розвитку Громадського Здоров'я УКУ"`}),c.jsx(tr,{children:"Бізнес-консультантка, стратег з медичного маркетингу"}),c.jsx(tr,{children:'Керівниця проєкту "Стетоскоп" - телеграм канал про медичний менеджмент та маркетингу'}),c.jsx(tr,{children:"Більше 18 років досвіду в маркетингу та комунікаціях, з них більше 10 років досвіду в медичному та фармацевтичному бізнесі на керівних посадах"}),c.jsx(tr,{children:"Використання принципів доказової медицини"})]}),c.jsxs(mw,{children:[c.jsx("li",{children:c.jsxs(gl,{href:"https://www.instagram.com/olga_healthm/",target:"_blank",rel:"noopener noreferrer",children:["Instagram",c.jsx(vl,{width:"24",height:"24",children:c.jsx("use",{href:`${re}#icon-arrow-up-right`})})]})}),c.jsx("li",{children:c.jsxs(gl,{href:"https://www.facebook.com/olga.polishchuk.14",target:"_blank",rel:"noopener noreferrer",children:["Facebook",c.jsx(vl,{width:"24",height:"24",children:c.jsx("use",{href:`${re}#icon-arrow-up-right`})})]})}),c.jsx("li",{children:c.jsxs(gl,{href:"https://www.linkedin.com/in/olga-polishchuk-83362140/",target:"_blank",rel:"noopener noreferrer",children:["LinkedIn",c.jsx(vl,{width:"24",height:"24",children:c.jsx("use",{href:`${re}#icon-arrow-up-right`})})]})})]})]})]})]})}),xw=C.section`
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
`,yw=C.h2`
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
`,ww=C.div`
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
`,bw=C.p`
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
`,Sw=C.p`
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
`,Bf=C.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 16px;
`,kw=C.div`
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
`,Cw=C.h4`
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
`,jw=C.div`
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
`,Ew=C.h4`
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
`,Ow=C.p`
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
`,_w=C.svg`
  fill: var(--primary-bluedark);
  border-radius: 100px;
  background: rgba(27, 54, 65, 0.2);
  width: 32px;
  height: 32px;
  padding: 3px;
`,Pw=C.svg`
  fill: var(--background-white);
  border-radius: 100px;
  background: rgba(244, 244, 246, 0.2);
  width: 32px;
  height: 32px;
  padding: 3px;
`,Tw=()=>c.jsx(xw,{id:"aboutUs",className:"container",children:c.jsxs("div",{children:[c.jsx(yw,{children:"Про студію"}),c.jsxs(ww,{children:[c.jsx("div",{children:c.jsx(bw,{children:"Студія стратегічного розвитку медичних брендів «Healthy management» надає послуги медичного менеджменту, медичного маркетингу, консалтингу бізнес-процесів та створення стратегій здоров’я для підприємств та бізнесу. Ми співпрацюємо з медичними закладами, лікарями, власниками, керівниками та створюємо спільні стратегії та дії для ефективного просування та розвитку проєктів, використовуючи комплексний підхід"})}),c.jsxs(jw,{children:[c.jsxs(Bf,{children:[c.jsx(Pw,{children:c.jsx("use",{href:`${re}#icon-star`})}),c.jsx(Ew,{children:"Наша місія"})]}),c.jsx(Ow,{children:"Будуємо ефективні стратегії по управлінню здоров’ям та створюємо продуктивні дії для популяризації здорового менеджменту"})]}),c.jsxs(kw,{children:[c.jsxs(Bf,{children:[c.jsx(_w,{children:c.jsx("use",{href:`${re}#icon-star`})}),c.jsx(Cw,{children:"Наші цінності"})]}),c.jsx(Sw,{children:"Повага, довіра, партнерство та експертність. Будуємо нову культуру управління здоровим менеджментом у медичній галузі"})]})]})]})}),Mw=C.section`
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,Rw=C.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
  width: 100%;
  border-radius: 16px;
  padding: 24px;
  background-color: var(--background-bluedark);

  @media screen and (min-width: 768px) {
    gap: 16px;
    padding: 40px;
  }

  @media screen and (min-width: 1440px) {
    gap: 24px;
  }

  @media screen and (min-width: 1920px) {
    gap: 40px;
    padding: 80px;
  }
`,Iw=C.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.33;
  color: var(--system-default-10);

  & span {
    color: var(--primary-yellow);
  }

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1.25;
  }

  @media screen and (min-width: 1440px) {
    font-size: 36px;
    line-height: 1.33;
  }

  @media screen and (min-width: 1920px) {
    font-size: 48px;
    line-height: 1.17;
  }
`,Dw=C.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  align-self: stretch;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    padding: 24px 0px;
    gap: 24px;
  }
`,Lw=C.li`
  display: flex;
  padding: 16px;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.47;
  border-radius: 16px;
  border: 1px solid var(--background-whitegrey);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  color: var(--system-default-10);

  @media screen and (min-width: 768px) {
    padding: 24px;
    font-size: 18px;
    line-height: 1.33;
  }

  @media screen and (min-width: 1440px) {
    flex: 1 0 0;
    line-height: 1.22;
  }

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    line-height: 1.4;
  }
`,Aw=[{id:1,tool:"Матриця стейкхолдерів"},{id:2,tool:"SWOT аналіз"},{id:3,tool:"Bussines model canvas"},{id:4,tool:"Value proposition canvas"},{id:5,tool:"Customer journey map"}],Fw=()=>c.jsx(Mw,{className:"container",children:c.jsxs(Rw,{children:[c.jsxs(Iw,{children:["Бізнес ",c.jsx("span",{children:"інструменти"}),", які використувуємо в партнерстві"]}),c.jsx(Dw,{children:Aw.map(e=>c.jsx(Lw,{children:e.tool},e.id))})]})});var Vg={exports:{}},zw="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Vw=zw,Nw=Vw;function Ng(){}function $g(){}$g.resetWarningCache=Ng;var $w=function(){function e(r,i,o,s,l,a){if(a!==Nw){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:$g,resetWarningCache:Ng};return n.PropTypes=n,n};Vg.exports=$w();var Uw=Vg.exports;const oo=ao(Uw),fs="/healthy-management-project/assets/icon-footer-MBx-ujYN.svg",Bw=C.div`
  /* padding: 40px 0; */
  background-color: var(--background-bluedark);

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }

  @media screen and (min-width: 1920px) {
  }
`,Hw=C.div`
  display: flex;
  padding: 40px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  background: var(--background-bluedark);

  @media screen and (min-width: 768px) {
    padding: 32px 40px;
    flex-direction: row;
    align-content: center;
    gap: 16px 80px;
    align-self: stretch;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1440px) {
    padding: 32px 80px;
    flex-direction: row;
    align-content: center;
    gap: 24px 56px;
  }

  @media screen and (min-width: 1920px) {
    padding: 40px 120px;
    justify-content: space-between;
  }
`,Hf=C.a`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  cursor: pointer;
  border-bottom: 1px solid rgba(244, 244, 246, 0.4);
  color: var(--system-default-10);

  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 1.47;
  }

  @media screen and (min-width: 1440px) {
    line-height: 1.2;
  }

  @media screen and (min-width: 1920px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,Wf=C.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  align-self: stretch;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 40px;
  }

  /* @media screen and (min-width: 1440px) {
  } */

  /* @media screen and (min-width: 1920px) {
  } */
`,Yt=C.a`
  display: flex;
  padding: 8px 0px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  position: relative;
  color: var(--system-default-10);

  &::before {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 1px;
    opacity: 0;
    background-color: var(--system-default-10);
  }

  &:hover::before {
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 1.47;
  }

  @media screen and (min-width: 1440px) {
    line-height: 1.2;
  }

  @media screen and (min-width: 1920px) {
    font-size: 16px;
    line-height: 1.5;

    &::before {
      bottom: -8px;
    }
  }
`,Ww=C.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  align-self: stretch;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 40px;
  }

  /* @media screen and (min-width: 1440px) {
  } */

  @media screen and (min-width: 1920px) {
  }
`,Qw=C.div`
  display: flex;
  align-items: flex-end;
  gap: 16px;

  /* @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  } */

  /* @media screen and (min-width: 1920px) {
  } */
`,Yw=C.a`
  padding: 8px;

  & svg {
    display: flex;

    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: var(--background-white);
    opacity: 0.8;
  }

  /* @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }

  @media screen and (min-width: 1920px) {
  } */
`,Kw=C.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }

  /* @media screen and (min-width: 1440px) {
  } */

  @media screen and (min-width: 1920px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }
`,Qf=C.a`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  color: var(--typography-white);

  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 1.2;
  }

  /* @media screen and (min-width: 1440px) {
  } */

  @media screen and (min-width: 1920px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,Gw=C.div`
  display: flex;
  padding: 16px 24px;

  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--system-default-20);
  background: var(--background-bluedark);
`,Xw=C.p`
  width: 327px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  text-transform: uppercase;
  text-align: center;
  color: var(--system-default-10);

  @media screen and (min-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    line-height: 1.67;
  }

  /* @media screen and (min-width: 1920px) {
  } */
`,qw=C.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 1100;
`,Jw=C.div`
  padding: 80px;
  position: fixed;
  width: 1360px;
  border-radius: 24px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 10000;
`,Zw=C.div`
  height: 32px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`,eb=C.svg`
  width: 24px;
  cursor: pointer;
`,tb=C.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: var(--typography-bluedark);
`,nb=C.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`,jn=C.li`
  width: 282px;
  padding: 24px;
  gap: 16px;

  border-radius: 16px;
  background: var(--background-bluedark);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
`,En=C.h3`
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
`,On=C.p`
  display: flex;
  justify-content: center;

  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: var(--typography-white);
`,_n=C.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,Pn=C.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Tn=C.div`
  border-radius: 8px;
  overflow: hidden;
`,Mn=C.img`
  border-radius: 8px;

  &:hover {
    transform: scale(1.1);
    border-radius: 8px;
  }
`,Yf="/healthy-management-project/assets/Jilia_Kopytko-mYhzlt_-.webp",rb="/healthy-management-project/assets/Jilia_Kopytko@2x-gruKrAtD.jpg",Kf="/healthy-management-project/assets/Yelyzaveta_Domanska-Ru7up7Pj.webp",ib="/healthy-management-project/assets/Yelyzaveta_Domanska@2x-BYkqrL88.jpg",Gf="/healthy-management-project/assets/Oleksandr_Natalukha-YKEBbXyu.webp",ob="/healthy-management-project/assets/Oleksandr_Natalukha@2x-5OsrctvL.jpg",Xf="/healthy-management-project/assets/Valentyn_Havrylenko-ouVcypag.webp",sb="/healthy-management-project/assets/Valentyn_Havrylenko@2x-xBjJM6nL.jpg",qf="/healthy-management-project/assets/Olha_Abent-lPe8g7w1.webp",ab="/healthy-management-project/assets/Olha_Abent@2x-fGgXmj71.jpg",Jf="/healthy-management-project/assets/Viktoriia_Moryc-tWw5-4of.webp",lb="/healthy-management-project/assets/Viktoriia_Moryc@2x-AxiRex6x.jpg",Zf="/healthy-management-project/assets/Vyacheslav_Pavlyuk-py_hj3lz.webp",ub="/healthy-management-project/assets/Vyacheslav_Pavlyuk@2x-2qCtSSAb.jpg",ep="/healthy-management-project/assets/Yaroslav_Li-nn0P6bIv.webp",cb="/healthy-management-project/assets/Yaroslav_Li@2x-xfuqLdiI.jpg",Vu=({handleClose:e,isModalOpen:t})=>{const n=i=>{i.target===i.currentTarget&&e()};M.useEffect(()=>{const i=document.body,o=()=>{t?i.classList.add("body-no-scroll"):i.classList.remove("body-no-scroll")},s=l=>{l.code==="Escape"&&t&&e()};return o(),window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[e,t]);const r=document.getElementById("modal");return t?Qy.createPortal(c.jsx(qw,{onClick:n,children:c.jsxs(Jw,{isModalOpen:t,children:[c.jsxs(Zw,{children:[c.jsx(tb,{children:"Команда, яка створила сторінку"}),c.jsx(eb,{onClick:e,children:c.jsx("use",{href:`${re}#icon-close`})})]}),c.jsxs(nb,{children:[c.jsx(jn,{children:c.jsxs(_n,{children:[c.jsx(Tn,{children:c.jsx(Mn,{src:Jf,srcSet:`${Jf} 1x, ${lb} 2x`,alt:"Вікторія Мориц"})}),c.jsxs(Pn,{children:[c.jsx(En,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/viktoriia-moryc-61610962/",target:"_blank",rel:"noopener noreferrer",children:["Вікторія Мориц",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${re}#icon-linkedin`})})]})}),c.jsx(On,{children:"Project Manager"})]})]})}),c.jsx(jn,{children:c.jsxs(_n,{children:[c.jsx(Tn,{children:c.jsx(Mn,{src:Yf,srcSet:`${Yf} 1x, ${rb} 2x`,alt:"Юлія Копитко"})}),c.jsxs(Pn,{children:[c.jsx(En,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/juliakopytko/",target:"_blank",rel:"noopener noreferrer",children:["Юлія Копитко",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${re}#icon-linkedin`})})]})}),c.jsx(On,{children:"UX/UI Designer"})]})]})}),c.jsx(jn,{children:c.jsxs(_n,{children:[c.jsx(Tn,{children:c.jsx(Mn,{src:ep,srcSet:`${ep} 1x, ${cb} 2x`,alt:"Ярослав Лі"})}),c.jsxs(Pn,{children:[c.jsx(En,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/yaroslav-lee-b7070b294",target:"_blank",rel:"noopener noreferrer",children:["Ярослав Лі",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${re}#icon-linkedin`})})]})}),c.jsx(On,{children:"Frontend Developer"})]})]})}),c.jsx(jn,{children:c.jsxs(_n,{children:[c.jsx(Tn,{children:c.jsx(Mn,{src:Kf,srcSet:`${Kf} 1x, ${ib} 2x`,alt:"Єлизавета Доманська"})}),c.jsxs(Pn,{children:[c.jsx(En,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/yelyzaveta-domanska-2185a5292/",target:"_blank",rel:"noopener noreferrer",children:["Єлизавета Доманська",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${re}#icon-linkedin`})})]})}),c.jsx(On,{children:"Frontend Developer"})]})]})}),c.jsx(jn,{children:c.jsxs(_n,{children:[c.jsx(Tn,{children:c.jsx(Mn,{src:Gf,srcSet:`${Gf} 1x, ${ob} 2x`,alt:"Олександр Наталуха"})}),c.jsxs(Pn,{children:[c.jsx(En,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/oleksandr-natalukha",target:"_blank",rel:"noopener noreferrer",children:["Олександр Наталуха",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${re}#icon-linkedin`})})]})}),c.jsx(On,{children:"Frontend Developer"})]})]})}),c.jsx(jn,{children:c.jsxs(_n,{children:[c.jsx(Tn,{children:c.jsx(Mn,{src:Xf,srcSet:`${Xf} 1x, ${sb} 2x`,alt:"Валентин Гавриленко"})}),c.jsxs(Pn,{children:[c.jsx(En,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/valentyn-havrylenko/",target:"_blank",rel:"noopener noreferrer",children:["Валентин Гавриленко",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${re}#icon-linkedin`})})]})}),c.jsx(On,{children:"Frontend Developer"})]})]})}),c.jsx(jn,{children:c.jsxs(_n,{children:[c.jsx(Tn,{children:c.jsx(Mn,{src:Zf,srcSet:`${Zf} 1x, ${ub} 2x`,alt:"В´ячеслав Павлюк"})}),c.jsxs(Pn,{children:[c.jsx(En,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/vyacheslav-pavlyuk/",target:"_blank",rel:"noopener noreferrer",children:["В'ячеслав Павлюк",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${re}#icon-linkedin`})})]})}),c.jsx(On,{children:"Fullstack Developer"})]})]})}),c.jsx(jn,{children:c.jsxs(_n,{children:[c.jsx(Tn,{children:c.jsx(Mn,{src:qf,srcSet:`${qf} 1x, ${ab} 2x`,alt:"Ольга Абент"})}),c.jsxs(Pn,{children:[c.jsx(En,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/abentolga/",target:"_blank",rel:"noopener noreferrer",children:["Ольга Абент",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${re}#icon-linkedin`})})]})}),c.jsx(On,{children:"QA Engineer"})]})]})})]})]})}),r):null};Vu.propTypes={handleClose:oo.func.isRequired,isModalOpen:oo.bool.isRequired};function db(e,t){if(t===e)return!1;const n=Object.values(t),r=Object.values(e);if(n.length!==r.length||n.some((o,s)=>o!==r[s]))return!0;const i=Object.keys(e);return Object.keys(t).some((o,s)=>o!==i[s])}function fb(e,t){return e.matches[t]=!1,e.mediaQueries[t]={},e}function Ug(e){const t=Object.keys(e);return typeof window>"u"?t.reduce(fb,{mediaQueries:{},matches:{}}):t.reduce((n,r)=>{const i=window.matchMedia(e[r]);return n.mediaQueries[r]=i,n.matches[r]=i.matches,n},{mediaQueries:{},matches:{}})}function pb(e,t){function n(r,i){return r[i]=e.mediaQueries[i].matches,r}switch(t.type){case"updateMatches":return{matches:Object.keys(e.mediaQueries).reduce(n,{}),mediaQueries:e.mediaQueries};case"setQueries":return Ug(t.queries)}}function hb(e){const t=M.useRef(e),[n,r]=M.useReducer(pb,e,Ug);M.useEffect(()=>{db(e,t.current)&&(r({type:"setQueries",queries:e}),t.current=e)},[e]);function i(){return r({type:"updateMatches"})}function o(a){const u=i;return typeof a.addListener<"u"?a.addListener(u):a.addEventListener("change",u),u}M.useEffect(()=>{const a=Object.values(n.mediaQueries),u=a.map(o);function d(f,m){typeof f.addListener<"u"?f.removeListener(u[m]):f.removeEventListener("change",u[m])}return()=>{a.forEach(d)}},[n.mediaQueries]);const{matches:s}=n,l=M.useMemo(()=>Object.values(s),[s]);return{matches:s,matchesAny:l.some(Boolean),matchesAll:l.length>0&&l.every(Boolean)}}function nd(e){return hb(mb(e)).matchesAll}const xl={};function mb(e){return xl[e]===void 0&&(xl[e]={default:e}),xl[e]}const Bg=({handleSetActiveLink:e})=>{const[t,n]=M.useState(!1),r=nd("(min-width: 1440px) and (max-width: 1919px)"),i=()=>{n(!0)},o=()=>{n(!1)};return c.jsxs(Bw,{id:"footer",children:[c.jsxs(Hw,{className:"container",children:[c.jsx("svg",{width:"227",height:"40",children:c.jsx("use",{href:`${fs}#logo-white`})}),r?c.jsxs(c.Fragment,{children:[c.jsxs(Wf,{children:[c.jsx(Yt,{href:"#home",onClick:s=>e("home",s),children:"Головна"}),c.jsx(Yt,{href:"#aboutUs",onClick:s=>e("aboutUs",s),children:"Про нас"}),c.jsx(Yt,{href:"#services",onClick:s=>e("services",s),children:"Послуги"}),c.jsx(Yt,{href:"#mentoring",onClick:s=>e("mentoring",s),children:"Менторство"}),c.jsx(Yt,{href:"#projects",onClick:s=>e("projects",s),children:"Проєкти"})]}),c.jsx(Hf,{onClick:i,children:"created by GoIT students"}),c.jsx(Vu,{handleClose:o,isModalOpen:t})]}):c.jsxs(c.Fragment,{children:[c.jsx(Hf,{onClick:i,children:"created by GoIT students"}),c.jsx(Vu,{handleClose:o,isModalOpen:t}),c.jsxs(Wf,{children:[c.jsx(Yt,{href:"#home",onClick:s=>e("home",s),children:"Головна"}),c.jsx(Yt,{href:"#aboutUs",onClick:s=>e("aboutUs",s),children:"Про нас"}),c.jsx(Yt,{href:"#services",onClick:s=>e("services",s),children:"Послуги"}),c.jsx(Yt,{href:"#mentoring",onClick:s=>e("mentoring",s),children:"Менторство"}),c.jsx(Yt,{href:"#projects",onClick:s=>e("projects",s),children:"Проєкти"})]})]}),c.jsxs(Ww,{children:[c.jsxs(Qw,{children:[c.jsx(Yw,{href:"https://www.facebook.com/profile.php?id=61551346490841",target:"_blank",rel:"noopener noreferrer",children:c.jsx("svg",{width:"32",height:"32",children:c.jsx("use",{href:`${fs}#facebook`})})}),c.jsx("a",{href:"https://www.instagram.com/healthymanagement_ua/",target:"_blank",rel:"noopener noreferrer",children:c.jsx("svg",{width:"40",height:"40",children:c.jsx("use",{href:`${fs}#instagram`})})})]}),c.jsxs(Kw,{children:[c.jsx(Qf,{href:"mailto:healthy.managements@gmail.com",children:"healthy.managements@gmail.com"}),c.jsx(Qf,{href:"tel:+380673160556",children:"+380 673 160 556"})]})]})]}),c.jsx(Gw,{children:c.jsx(Xw,{children:"© 2023 healthy management. All rights reserved"})})]})};Bg.propTypes={handleSetActiveLink:oo.func.isRequired};const Fi="/healthy-management-project/assets/symbol-defs--0zN9DRa.svg",gb=C.header`
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
`,vb=C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,xb=C.nav`
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 40px;
    align-items: center;
  }

  @media screen and (min-width: 1920px) {
  }
`,hi=C.a`
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
`,yb=C.a`
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
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    background: var(--background-white, #fcfcfc);
    box-shadow: 0px 0px 16px 0px rgba(27, 54, 65, 0.16);
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
`,tp=C.svg`
  stroke: black;
  width: 40px;
  height: 40px;

  @media screen and (min-width: 768px) {
    width: 70px;
  }
`,np=C.button`
  border: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  font-family: inherit;
  font-size: 100%;
  cursor: pointer;
  background: none;
`,wb=C.div`
  position: fixed;
  z-index: 1200;
  top: 0;
  left: 0;
  width: 100%;
`,bb=C.div`
  display: flex;
  width: 100%;
  padding-top: 32px;
  padding-bottom: 32px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--system-default-20, #dedede);
  background: var(--system-default-10, #f8f8f8);
`,Sb=C.a`
  color: var(--typography-bluedark, #062136);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  display: flex;
  width: 156px;
  height: 56px;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: 1px solid var(--background-bluedark, #062136);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);

  &:hover,
  &:focus {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    background: var(--background-white, #fcfcfc);
    box-shadow: 0px 0px 16px 0px rgba(27, 54, 65, 0.16);
  }

  @media screen and (min-width: 768px) {
    width: 161px;
    font-size: 15px;
    font-weight: 500;
    line-height: 22px;
  }
`,kb=C.svg`
  stroke: var(--primary-black);
`,Cb=C.nav`
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  width: 100%;
  height: 812px;
  gap: 40px;
  flex-direction: column;
  align-items: center;
  background: var(--background-whitegrey);
  transition: background 0.5s ease, color 0.5s ease;

  &:hover,
  &:focus {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    background: var(--background-white);
    box-shadow: 0px 0px 16px 0px rgba(27, 54, 65, 0.16);
  }
`,mi=C.a`
  position: relative;
  color: var(--typography-bluedark);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;

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

  @media screen and (min-width: 768px) {
  }
`,jb=C.button`
  border: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  font-family: inherit;
  font-size: 100%;
  cursor: pointer;
  background: none;
`,Eb=document.getElementById("modalMobail"),Hg=({onClose:e,handleSetActiveLink:t})=>ho.createPortal(c.jsx(wb,{children:c.jsxs("div",{className:"container",children:[c.jsxs(bb,{children:[c.jsx("a",{href:"#home",children:c.jsx("svg",{width:"40",height:"40",children:c.jsx("use",{href:`${Fi}#icon-g10`})})}),c.jsx(Sb,{href:"#contact",children:"Контакт"}),c.jsx(jb,{type:"button",onClick:()=>e(),children:c.jsx(kb,{width:"40",height:"40",children:c.jsx("use",{href:`${Fi}#icon-close`})})})]}),c.jsxs(Cb,{children:[c.jsx(mi,{href:"#home",onClick:n=>{e(),t("home",n)},children:"Головна"}),c.jsx(mi,{href:"#aboutUs",onClick:n=>{e(),t("aboutUs",n)},children:"Про нас"}),c.jsx(mi,{href:"#services",onClick:n=>{e(),t("services",n)},children:"Послуги"}),c.jsx(mi,{href:"#mentoring",onClick:n=>{e(),t("mentoring",n)},children:"Менторство"}),c.jsx(mi,{href:"#projects",onClick:n=>{e(),t("projects",n)},children:"Проєкти"})]})]})}),Eb);Hg.propTypes={onClose:oo.func.isRequired};const Wg=({handleSetActiveLink:e})=>{const[t,n]=M.useState("home"),[r,i]=M.useState(!1),o=hn.useMediaQuery({query:"(max-width: 767px)"}),s=hn.useMediaQuery({query:"(min-width: 768px) and (max-width: 1439px)"}),l=hn.useMediaQuery({query:"(max-width: 1439px)"}),a=hn.useMediaQuery({query:"(min-width: 1440px)"}),u=()=>{i(!r)};return M.useEffect(()=>{const d=()=>{const m=["home","aboutUs","services","mentoring","projects","contact"].find(y=>{const g=document.getElementById(y);if(g){const v=g.getBoundingClientRect();return v.top<=120&&v.bottom>=120}return g});m&&n(m)};return window.addEventListener("scroll",d),()=>{window.removeEventListener("scroll",d)}},[]),c.jsxs(gb,{children:[c.jsx("div",{className:"container",children:c.jsxs(vb,{children:[l&&c.jsx("a",{href:"#home",children:c.jsx("svg",{width:"40",height:"40",children:c.jsx("use",{href:`${Fi}#icon-g10`})})}),a&&c.jsx("a",{href:"#home",children:c.jsx("svg",{width:"227",height:"40",children:c.jsx("use",{href:`${re}#logo-black`})})}),a&&c.jsxs(xb,{children:[c.jsx(hi,{href:"#home",className:t==="home"?"active":"",onClick:d=>e("home",d),children:"Головна"}),c.jsx(hi,{href:"#aboutUs",className:t==="aboutUs"?"active":"",onClick:d=>e("aboutUs",d),children:"Про нас"}),c.jsx(hi,{href:"#services",className:t==="services"?"active":"",onClick:d=>e("services",d),children:"Послуги"}),c.jsx(hi,{href:"#mentoring",className:t==="mentoring"?"active":"",onClick:d=>e("mentoring",d),children:"Менторство"}),c.jsx(hi,{href:"#projects",className:t==="projects"?"active":"",onClick:d=>e("projects",d),children:"Проєкти"})]}),c.jsx(yb,{href:"#contact",className:t==="contact"?"active":"",onClick:d=>e("contact",d),children:"Контакт"}),o&&c.jsx(np,{type:"button",onClick:()=>u(),children:c.jsx(tp,{children:c.jsx("use",{href:`${Fi}#icon-menuburger`})})}),s&&c.jsx(np,{type:"button",onClick:()=>u(),children:c.jsx(tp,{children:c.jsx("use",{href:`${Fi}#icon-menuburgerhorizontaltablet`})})})]})}),l&&r&&c.jsx(Hg,{onClose:u,handleSetActiveLink:e})]})};Wg.propTypes={handleSetActiveLink:oo.func.isRequired};const Ob="/healthy-management-project/assets/hero1x-6AVSlzud.webp",_b="/healthy-management-project/assets/hero@2x-N6Dvbfg6.jpg",Pb="/healthy-management-project/assets/hero1x-d4IOBsel.jpg",Tb="/healthy-management-project/assets/hero@2x-qDoBpvI0.jpg",Mb="/healthy-management-project/assets/hero@1x-gjNVfS_G.jpg",Rb="/healthy-management-project/assets/hero@2x-xeAfw2Nx.jpg",Ib="/healthy-management-project/assets/hero@1x-T7izVw7M.jpg",Db="/healthy-management-project/assets/hero@2x-MzaNEgZc.jpg",Lb=C.section`
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${Pb});
  background-size: cover;
  margin-top: 120px;
  padding-top: 40px;
  padding-bottom: 40px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${Tb});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${Mb});
    margin-top: 120px;
    padding-top: 234px;
    padding-bottom: 234px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${Rb});
    }
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${Ib});
    margin-top: 120px;
    padding-top: 236px;
    padding-bottom: 236px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${Db});
    }
  }

  @media screen and (min-width: 1920px) {
    background-image: url(${Ob});

    margin-top: 120px;
    padding-top: 296px;
    padding-bottom: 296px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${_b});
    }
  }
`,Ab=C.h1`
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
`,Fb=C.h3`
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
`,zb=C.ul`
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
`,yl=C.li`
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
`,Vb=C.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,Nb=C.a`
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
`,$b=C.a`
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
`,Ub=()=>c.jsx(Lb,{id:"home",children:c.jsxs("div",{className:"container",children:[c.jsx(Ab,{children:"Бізнес-партнер з розвитку та комунікацій здорового менеджменту"}),c.jsx(Fb,{children:"Будуємо ефективні стратегії здорового менеджменту для медичних брендів:"}),c.jsxs(zb,{children:[c.jsx(yl,{children:"медичний менеджмент і маркетинг,"}),c.jsx(yl,{children:"програми управління здоров'ям для підприємств та бізнесу,"}),c.jsx(yl,{children:"менторство"})]}),c.jsxs(Vb,{children:[c.jsx(Nb,{href:"#contact",children:"Консультація"}),c.jsx($b,{href:"#services",children:"Послуги"})]})]})}),Bb=C.section`
  padding-top: 24px;
  padding-bottom: 24px;

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,Hb=C.div`
  border-radius: 16px;
  padding: 24px;
  background: var(--background-bluedark);

  @media screen and (min-width: 1920px) {
    max-width: 100%;
    padding: 80px;
  }
`,Wb=C.h2`
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
`,Qb=C.ul`
  display: flex;
  padding: 0;
  flex-wrap: wrap;
  gap: 24px;
`,No=C.li`
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
`,$o=C.svg`
  width: 80px;
  height: 80px;
`,Uo=C.div`
  display: flex;
  flex-direction: column;
`,Bo=C.h3`
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
`,Ho=C.p`
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
`,Yb=()=>c.jsx(Bb,{className:"container",children:c.jsxs(Hb,{children:[c.jsx(Wb,{children:"Чому обирають нас"}),c.jsxs(Qb,{children:[c.jsxs(No,{children:[c.jsx($o,{children:c.jsx("use",{href:`${re}#hands-shake`})}),c.jsxs(Uo,{children:[c.jsx(Bo,{children:"Надійне партнерство та менторство"}),c.jsx(Ho,{children:"Ми налаштовані на довгострокове партнерство і дбаємо про комфортні та чесні комунікації"})]})]}),c.jsxs(No,{children:[c.jsx($o,{children:c.jsx("use",{href:`${re}#setting`})}),c.jsxs(Uo,{children:[c.jsx(Bo,{children:"Індивідуальний підхід"}),c.jsx(Ho,{children:"Кожен бізнес і послуга мають свої особливості. Ми занурюємося у ваш бізнес і пропонуємо індивідуальні стратегії, які допоможуть вам досягти успіху"})]})]}),c.jsxs(No,{children:[c.jsx($o,{children:c.jsx("use",{href:`${re}#icon-lamp`})}),c.jsxs(Uo,{children:[c.jsx(Bo,{children:"Експертні послуги"}),c.jsx(Ho,{children:"Ми опираємося на передовий досвід і використовуємо як класичні, так і сучасні підходи для досягнення поставленого результату"})]})]}),c.jsxs(No,{children:[c.jsx($o,{children:c.jsx("use",{href:`${re}#icon-puzzle`})}),c.jsxs(Uo,{children:[c.jsx(Bo,{children:"Комплексні рішення"}),c.jsx(Ho,{children:"Наша експертиза дозволяє пропонувати комплексні рішення для ефективної співпраці"})]})]})]})]})}),rp="/healthy-management-project/assets/pic_mentorstvo1x-R5bIGNq0.webp",Kb="/healthy-management-project/assets/pic_mentorstvo2x-k6d-_Us1.jpg",ip="/healthy-management-project/assets/mob_mentor1x-_de1iGBc.webp",Gb="/healthy-management-project/assets/mob_mentor@2x-oAKhVwNJ.jpg",Xb=C.section`
  padding-top: 80px;
  padding-bottom: 80px;
`,qb=C.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 1920px) {
    gap: 40px;
    margin-bottom: 40px;
    flex-direction: row;
  }
`,Jb=C.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 1920px) {
    max-width: 828px;
    align-items: flex-start;
  }
`,Zb=C.div`
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
`,eS=C.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: var(--typography-black);

  @media screen and (min-width: 1920px) {
    font-size: 48px;
    line-height: 56px;
    margin-bottom: 40px;
  }
`,tS=C.h3`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: var(--typography-bluedark);

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: 32px;
  }
`,op=C.h3`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: var(--typography-white);

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: 32px;
  }
`,nS=C.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 320px;

  @media screen and (min-width: 1920px) {
    margin-bottom: 80px;
  }
`,sp=C.p`
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
`,rS=C.a`
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
`,iS=C.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 1920px) {
    gap: 40px;
    flex-direction: row;
  }
`,oS=C.div`
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
`,sS=C.ul`
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
`,ap=C.ul`
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
`,wr=C.li`
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
`,br=C.li`
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
`,aS=()=>c.jsxs(Xb,{id:"mentoring",className:"container",children:[c.jsxs(qb,{children:[c.jsxs("div",{children:[c.jsx(Nn,{minWidth:1920,children:c.jsx("img",{srcSet:`${rp} 1920w, ${Kb} 2x`,sizes:"(min-width: 1920px) 1920px",src:rp,alt:"Ольга Поліщук - ваш ментор в медичній галузі"})}),c.jsx(Nn,{minWidth:300,maxWidth:1919,children:c.jsx("img",{srcSet:`${ip} 375w, ${Gb} 2x`,sizes:"(min-width: 375px) 375px",src:ip,alt:"Ольга Поліщук - ваш ментор в медичній галузі"})})]}),c.jsxs(Jb,{children:[c.jsx(eS,{children:"Менторство"}),c.jsxs(nS,{children:[c.jsxs(sp,{children:[c.jsx("b",{children:"Менторство в медичній галузі"})," - почути іншу думку, підтвердити власні гіпотези, зрозуміти вектор розвитку, отримати підтримку та пораду з питань менеджменту і медичного маркетингу"]}),c.jsxs(sp,{children:[c.jsx("b",{children:"Менторство"})," - це про взаємодію та чесну комунікацію, про спільні цінності та готовність до росту, про надійне партнерство та довіру"]})]}),c.jsx(rS,{href:"#contact",children:"Дізнатися вартість"})]})]}),c.jsx("div",{children:c.jsxs(iS,{children:[c.jsxs(Zb,{children:[c.jsx(tS,{children:"Про що це?"}),c.jsxs(sS,{children:[c.jsx(wr,{children:c.jsx("p",{children:"Про прагнення почути чесну іншу думку/та або підтвердити власні гіпотези для власника/керівника"})}),c.jsx(wr,{children:c.jsx("p",{children:"Про бізнес-процеси та їх ефективність"})}),c.jsx(wr,{children:c.jsx("p",{children:"Про вектори розвитку бізнесу або проєкту"})}),c.jsx(wr,{children:c.jsx("p",{children:"Про практичний інструментарій для впровадження змін"})}),c.jsx(wr,{children:c.jsx("p",{children:"Про маркетинг, сервіс та комунікації в медичних бізнесах"})}),c.jsx(wr,{children:c.jsx("p",{children:"Про здоров'я працівників та стратегії підвищенння ефективності бізнесу"})})]})]}),c.jsxs(oS,{children:[c.jsx(op,{children:"Для кого"}),c.jsxs(ap,{children:[c.jsx(br,{children:c.jsx("p",{children:"Лідерам, які прагнуть змін"})}),c.jsx(br,{children:c.jsx("p",{children:"Власникам, які хочуть отримати незалежку експертну думку"})}),c.jsx(br,{children:c.jsx("p",{children:"Керівникам та маркетологам, яким потрібна підтримка"})}),c.jsx(br,{children:c.jsx("p",{children:"Лікарям, яким важливо отримати пораду"})})]}),c.jsx(op,{children:"Формат"}),c.jsxs(ap,{children:[c.jsx(br,{children:c.jsx("p",{children:"Індивідуальна ментор-сесія (від 1 години)"})}),c.jsx(br,{children:c.jsx("p",{children:"Персональний супровід на декілька місяців"})})]})]})]})})]}),Qg=C.section`
  padding-top: 24px;
  padding-bottom: 24px;

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,Yg=C.div`
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  background: var(--background-white);

  @media screen and (min-width: 1920px) {
    padding: 80px;
  }
`,lS=C.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  @media screen and (min-width: 1290px) {
    flex-direction: row;
    justify-content: space-between;
  }
`,Wo=C.div`
  position: relative;

  @media screen and (min-width: 1920px) {
    min-width: 370px;
  }
`,Kg=C.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1290px) {
    gap: 40px;
    margin-bottom: 40px;
    flex-direction: row;
  }
`,Gg=C.div`
  min-width: 280px;
  gap: 16px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1920px) {
    min-width: 740px;
  }
`,Xg=C.div`
  @media screen and (min-width: 1920px) {
    padding: 24px;
  }
`,Qo=C.p`
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
`,qg=C.h2`
  color: var(--typography-black);
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;

  @media screen and (min-width: 1920px) {
    font-size: 48px;
    line-height: 56px;
  }
`,Jg=C.h3`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 24px;
  color: var(--typography-bluedark);

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    margin-bottom: 16px;
  }
`,Zg=C.p`
  font-size: 16px;
  line-height: 24px;
  color: var(--typography-bluedark);

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.4;
  }
`,ev=C.p`
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
`,tv=C.a`
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
`,nv=C.p`
  font-size: 18px;
  line-height: 1.3;
  font-weight: 600;
  margin-bottom: 16px;

  color: var(--typography-bluedark);

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    margin-bottom: 24px;
  }
`,rv=C.ul`
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
`,Vt=C.li`
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
`,Rn=C.svg`
  width: 266px;
  height: 56px;

  @media screen and (min-width: 1920px) {
    width: 370px;
    height: 80px;
  }
`,uS=()=>{const e=nd("(max-width: 768px)");return c.jsx(Qg,{className:"container",children:c.jsxs(Yg,{children:[c.jsxs(Kg,{children:[c.jsxs(Gg,{children:[c.jsx(qg,{children:"Індивідуальна ментор сесія"}),c.jsx(Zg,{children:"Вирішення вашого індивідуального запиту"}),c.jsx(ev,{children:"від 1 години"}),c.jsx(tv,{href:"#contact",children:"Замовити послугу"})]}),c.jsxs(Xg,{children:[c.jsx(Jg,{children:"Питання, з якими можете звернутися"}),c.jsxs(rv,{children:[c.jsx(Vt,{children:"Незалежна думка щодо маркетингу та розвитку"}),c.jsx(Vt,{children:"Порада по створенню відділу маркетингу або оцінка існуючої структури"}),c.jsx(Vt,{children:"Питання по роботі з підрядниками"}),c.jsx(Vt,{children:"Порада щодо оптимізації бізнес-процесів"}),c.jsx(Vt,{children:"Як вірно оцінити ефективність маркетингових дій"}),c.jsx(Vt,{children:"Які інструменти комунікацій використовувати"}),c.jsxs(Vt,{children:["Особисте питання по менеджменту та розвитку з питань управління"," ","здоров'ям"]})]})]})]}),c.jsx(nv,{children:"Шлях проведення менторської сесії"}),c.jsxs(lS,{children:[c.jsxs(Wo,{children:[e?c.jsx(Rn,{children:c.jsx("use",{href:`${re}#icon-rectangle-mob`})}):c.jsx(Rn,{children:c.jsx("use",{href:`${re}#icon-rectangle`})}),c.jsx(Qo,{children:"Заповнення брифу"})]}),c.jsxs(Wo,{children:[e?c.jsx(Rn,{children:c.jsx("use",{href:`${re}#icon-rectangle-mob`})}):c.jsx(Rn,{children:c.jsx("use",{href:`${re}#icon-rectangle`})}),c.jsx(Qo,{children:"Діагностика ситуації"})]}),c.jsxs(Wo,{children:[e?c.jsx(Rn,{children:c.jsx("use",{href:`${re}#icon-rectangle-mob`})}):c.jsx(Rn,{children:c.jsx("use",{href:`${re}#icon-rectangle`})}),c.jsx(Qo,{children:"Проведення сесії"})]}),c.jsxs(Wo,{children:[e?c.jsx(Rn,{children:c.jsx("use",{href:`${re}#icon-rectangle-mob`})}):c.jsx(Rn,{children:c.jsx("use",{href:`${re}#icon-rectangle`})}),c.jsx(Qo,{children:"Рекомендації"})]})]})]})})},cS=C.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  @media screen and (min-width: 1920px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 24px;
  }
`,Kt=C.svg`
  width: 260px;
  height: 60px;

  @media screen and (min-width: 1920px) {
    width: 285px;
    height: 80px;
  }
`,gi=C.div`
  position: relative;
  height: 60px;

  @media screen and (min-width: 1920px) {
    min-width: 285px;
  }
`;C.div`
  min-width: 740px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;const vi=C.p`
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
`,dS=()=>{const e=nd("(max-width: 768px)");return c.jsx(Qg,{className:"container",children:c.jsxs(Yg,{children:[c.jsxs(Kg,{children:[c.jsxs(Gg,{children:[c.jsx(qg,{children:"Персональний супровід"}),c.jsx(Zg,{children:"Пропрацьовуємо ваші запити та досягаємо посавлених цілей"}),c.jsx(ev,{children:"від 2 місяців тісної взаємодії"}),c.jsx(tv,{href:"#contact",children:"Замовити послугу"})]}),c.jsxs(Xg,{children:[c.jsx(Jg,{children:"Питання, з якими можете звернутися"}),c.jsxs(rv,{children:[c.jsx(Vt,{children:"Зануритись в бізнес-процеси та зрозуміти, де є точки зростання"}),c.jsx(Vt,{children:"Зрозуміти що таке маркетинг та як він працює у вашому бізнесі"}),c.jsx(Vt,{children:"Супровід розробки та впровадження стратегій"}),c.jsx(Vt,{children:"Особисті питання по медичному менеджменту, маркетингу та розвитку, управління здоров'ям"})]})]})]}),c.jsx(nv,{children:"Шлях проведення менторського супроводу"}),c.jsxs(cS,{children:[c.jsxs(gi,{children:[e?c.jsx(Kt,{children:c.jsx("use",{href:`${re}#icon-rectangle-mob`})}):c.jsx(Kt,{children:c.jsx("use",{href:`${re}#icon-rectangle2`})}),c.jsx(vi,{children:"Заповнення брифу"})]}),c.jsxs(gi,{children:[e?c.jsx(Kt,{children:c.jsx("use",{href:`${re}#icon-rectangle-mob`})}):c.jsx(Kt,{children:c.jsx("use",{href:`${re}#icon-rectangle2`})}),c.jsx(vi,{children:"Діагностика ситуації"})]}),c.jsxs(gi,{children:[e?c.jsx(Kt,{children:c.jsx("use",{href:`${re}#icon-rectangle-mob`})}):c.jsx(Kt,{children:c.jsx("use",{href:`${re}#icon-rectangle2`})}),c.jsx(vi,{children:"Визначення зон росту"})]}),c.jsxs(gi,{children:[e?c.jsx(Kt,{children:c.jsx("use",{href:`${re}#icon-rectangle-mob`})}):c.jsx(Kt,{children:c.jsx("use",{href:`${re}#icon-rectangle2`})}),c.jsx(vi,{children:"Менторинг"})]}),c.jsxs(gi,{children:[e?c.jsx(Kt,{children:c.jsx("use",{href:`${re}#icon-rectangle-mob`})}):c.jsx(Kt,{children:c.jsx("use",{href:`${re}#icon-rectangle2`})}),c.jsx(vi,{children:"Рекомендації"})]})]})]})})},Ia=()=>{const e=hn.useMediaQuery({maxWidth:767}),t=hn.useMediaQuery({minWidth:768,maxWidth:1439}),n=hn.useMediaQuery({minWidth:1440,maxWidth:1919}),r=hn.useMediaQuery({minWidth:1920});return e&&"mobile"||t&&"tablet"||n&&"desktop"||r&&"largeDesktop"},fS="/healthy-management-project/assets/denta_derm1x-JWCICTe_.webp",pS="/healthy-management-project/assets/medialt1x-5LMkh0v8.webp",hS="/healthy-management-project/assets/cures1x--AoJBOWJ.webp",mS="/healthy-management-project/assets/clinic1x-YgK5Wnno.webp",gS="/healthy-management-project/assets/kmklam1x-FlPeEOTs.webp",vS="/healthy-management-project/assets/symmetrica1x-hhcOddzB.webp",wl=[{image:fS,category:"DentaDerm",title:"Діагностика бізнес-процесів, маркетингу, сервісу, розробка стратегії розвитку, менторство",about:["Діагностика бізнес-процесів та маркетингу","Стратегія розвитку","Підбір команди маркетингу","Менторство"],details:[{title:"Завдання:",about:["Розробка стратегії розвитку","Розробка нового сайту клініки","Пошук команди маркетингу"],comment:"Дії в результаті розробки стратегії розвитку передбачали роботу над проєктом в новому позиціонуванні,  пошук зовнішньої та внутрішньої команди для реалізації нового сайту, ведення соцмереж"},{title:"В результаті роботи над проєктом:",about:["Розроблені вектори розвитку","Розроблений та впроваджений новий сайт","Підібрана команда маркетингового супроводу"],comment:"В результаті співпраці партнер отримав комплексне бачення просування, сформована команда маркетингу"}]},{image:pS,category:"Medialt",title:"Діагностика бізнес-процесів, маркетингу, сервісу, розробка стратегії розвитку, менторство",about:["Аудит ринку та конкурентів","Аудит маркетингу та сервісу","Розробка стратегії розвитку"],details:[{title:"Завдання:",about:["Розробка стратегії розвитку"]},{title:"Робота над задачою була розділена на два етапи:",about:["Аналіз конкурентів, ринку, виявлення зовнішніх можливостей та загроз","Аналіз сервісу медичного центру, аналіз роботи контакт центру, маркетингу, наявної бази пацієнтів та внутрішніх бізнес-процесів"]},{title:"В результаті комплексного аудиту підготували стратегію розвитку, яка передбачала рекомендації щодо:",about:["Управління маркетингом","Оптимізації роботи сервісу","Можливості МІС","Етапи розвитку напрямків та клініки вцілому"],comment:"В результаті співпраці - за 5 місяців ріст обороту в два рази"}]},{image:hS,category:"Cures",title:"Автоматизація комунікації з пацієнтами",about:["Створення та запуск 20 чат-ботів для клінік","Проведення консультацій та аудитів комунікацій клінік з пацієнтами","Розробка персональних протоколів спілкування з пацієнтами"],details:[{title:"Завдання:",about:["Автоматизація комунікації з пацієнтами"]},{title:"В результаті роботи над проєктом:",about:["Розвиток проєкту по створенню чат-ботів для медичних центрів","Розробка протоколів супроводу та опитувальників для клінік","Проведення зустрічей та комунікацій з клініками","Розробка алгоритмів та запуск чат-ботів"],comment:"В результаті співпраці над проєктом запуск 20 чат-ботів для медичних центрів"}]},{image:mS,category:"Клініка ім. ак. Юрія Спіженка",title:"Менторство, діагностика бізнес-процесів, маркетингу та сервісу, розробка стратегії розвитку",about:["Діагностика бізнес-процесів","Аудит маркетингу та сервісу","Розробка стратегії розвитку та маркетингу","Розробка та впровадження комунікаційної стратегії","Ведення маркетингових активностей "],details:[{title:"Завдання:",about:["Рестарт клініки у воєний час"]},{title:"Робота над задачею була розділена на три етапи:",about:["Діагностика конкурентів, ринку, виявлення зовнішніх можливостей та загроз","Діагностика сервісу медичного центру, аналіз роботи контакт центру, маркетингу, наявної бази пацієнтів та внутрішніх бізнес-процесів","Розробка та впровадження стратегії маркетингу, комунікації та сервісу, супровід рекламних кампаній, оптимізація бізнес-процесів"],comment:"В результаті співпраці над проєктом: збільшення доходу клініки, вихід на довоєний об’єм"}]},{image:gS,category:"KMKlab",title:"Діагностика маркетингу, сервісу, бізнес-процесів",about:["Аудит маркетингу та інструментів комунікацій","Аудит сервісу","Розробка рекомендацій щодо розвитку"],details:[{title:"Завдання:",about:["Аудит поточної маркетингової стратегії","Аудит сервісу","Формування рекомендацій по розвитку"]},{title:"Робота над задачою була розділена на два етапи:",about:["Відвідування всіх відділень лабораторій з метою формування рекомендацій по кожній локації","Аналіз поточної ситуації маркетингу та комунікацій, ведення соціальних мереж"],comment:"В результаті співпраці проаналізовано роботу відділу маркетингу та підрядників та надані рекомендації щодо структури відділу, сформовані подальші  кроки  маркетингової  та сервісної стратегії"}]},{image:vS,category:"Symmetrica",title:"Менторство, діагностика маркетингу, сервісу, бізнес-процесів",about:["Аудит маркетингу та сервісу","Розробка рекомендацій щодо розвитку","Оптимізація бізнес-процесів"],details:[{title:"Завдання:",about:["Діагностика поточної маркетингової діяльності та комунікацій","Аудит сервісу","Аудит роботи підрядників","Формування рекомендацій по розвитку"]},{title:"В результаті роботи над проєктом:",about:["Проведений поточний аудит шляху пацієнта, виявлені точки зростання сервісу","Проаналізовано роботу відділу маркетингу і підрядників та надані рекомендації щодо структури відділу","Надані рекомендації щодо формування подальших кроків маркетингової  та сервісної стратегії","Сформовані конверсійні показники та вектори руху","Надана менторська підтримка"]}]}],xS=C.section`
  padding-top: 40px;
  padding-bottom: 40px;
  @media screen and (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,yS=C.h2`
  font-size: 48px;
  font-weight: 600;
  line-height: calc(56 / 48);

  margin-bottom: 40px;
`,wS=C.ul`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
  }
`,bS=C.span`
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
`,SS=C.svg`
  fill: currentColor;
  stroke: currentColor;

  width: 24px;
  height: 24px;
`,kS=C.li`
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
`,CS=C.div`
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
`,jS=C.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,ES=C.h4`
  font-size: ${e=>e.forDetail?"18px":"16px"};
  font-weight: 600;
  line-height: calc(${e=>e.forDetail?24/18:24/16});

  @media screen and (min-width: 768px) {
    font-size: ${e=>e.forDetail?"24px":"20px"};
    line-height: calc(${e=>e.forDetail?32/24:28/20});
  }
`,OS=C.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,_S=C.li`
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
`,PS=C.p`
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
`,TS=C.svg`
  fill: currentColor;
  stroke: currentColor;
`,rd=({title:e,about:t,comment:n,additionalComment:r=!1})=>c.jsxs(jS,{children:[c.jsx(ES,{forDetail:r,children:e}),c.jsx(OS,{children:t==null?void 0:t.map(i=>c.jsxs(_S,{children:[c.jsx(TS,{children:c.jsx("use",{href:re+"#icon-done"})}),i]},i))}),n&&c.jsx(PS,{additionalComment:r,children:n})]}),MS=C.div`
  padding: 24px;
  display: flex;
  gap: 24px;
  flex-direction: column;

  color: var(--background-whitegrey, #f4f4f6);
  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`,RS=C.h3`
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
`,IS=C.svg`
  fill: currentColor;
  stroke: currentColor;

  width: 24px;
  height: 24px;

  position: absolute;
  right: 28px;
  top: 28px;
`,DS=({dataList:{details:e,category:t}})=>{const n=Ia();return c.jsxs(MS,{children:[c.jsxs("div",{children:[c.jsx(RS,{symbols:t.length,children:t}),n==="mobile"&&c.jsx(IS,{children:c.jsx("use",{href:re+"#icon-close"})})]}),e.map((r,i)=>c.jsx(rd,{title:r.title,about:r.about,comment:r.comment,additionalComment:i===0},r.title))]})},LS=C.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  color: var(--typography-bluedark, #1b3641);
`,AS=C.h3`
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
`,FS=C.img`
  height: 279px;
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    height: 300px;
  }
`,zS=C.span`
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  text-align: center;
`,VS=({dataList:e,onClick:t})=>{const n=Ia(),{category:r,title:i,about:o=[],image:s}=e;return c.jsxs(LS,{onClick:t,children:[c.jsx(FS,{src:s,alt:i}),c.jsx("div",{children:c.jsx(AS,{symbols:r.length,children:r})}),c.jsx(rd,{title:i,about:o}),n==="mobile"&&c.jsx(zS,{children:"Детальніше"})]})},NS=({item:e})=>{const[t,n]=M.useState(!1),r=Ia(),i=()=>{r==="mobile"&&n(o=>!o)};return c.jsxs(kS,{children:[c.jsx(VS,{dataList:e,onClick:i}),c.jsx(CS,{isVisible:t,onClick:i,image:e.image,className:!t&&r==="mobile"?"visually-hidden":"",children:c.jsx(DS,{dataList:e})})]})},$S=()=>{const e=Ia(),[t,n]=M.useState(e==="mobile"?[...wl.slice(0,3)]:[...wl]),r=()=>{t.length>4?n(i=>i.slice(0,3)):n([...wl])};return c.jsxs(xS,{id:"projects",className:"container",style:{paddingTop:"80px",paddingBottom:"80px"},children:[c.jsx(yS,{children:"Проєкти"}),c.jsx(wS,{children:t.map(i=>c.jsx(NS,{item:i},i.category))}),e==="mobile"&&c.jsxs(bS,{onClick:r,children:[t.length>3?"Менше проєктів":"Більше проєктів",c.jsx(SS,{children:c.jsx("use",{href:re+`${t.length>3?"#icon-arrowup":"#icon-arrowdown"}`})})]})]})},US=C.section`
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
`,BS=C.div`
  padding: 24px;
  border-radius: 16px;
  background: var(--background-white);

  @media screen and (min-width: 1920px) {
    padding: 80px;
    max-width: 828px;
    box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  }
`,HS=C.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;

  @media screen and (min-width: 1920px) {
    gap: 40px;
    margin-bottom: 40px;
  }
`,WS=C.h2`
  color: var(--typography-bluedark);
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;

  @media screen and (min-width: 1920px) {
    font-size: 48px;
    line-height: 56px;
  }
`,QS=C.h2`
  color: var(--typography-bluedark);
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    line-height: 28px;
  }
`,YS=C.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 1920px) {
    gap: 24px;
  }
`,bl=C.li`
  display: flex;
  align-items: center;
  gap: 16px;
  border-radius: 16px;
  background: var(--background-whitegrey);
  padding: 16px;
`,Sl=C.svg`
  width: 24px;
  height: 24px;
  fill: var(--background-white);
  stroke-width: 4px;
`,kl=C.p`
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
`,KS=C.img`
  width: 100%;
  height: 327px;
  border-radius: 16px;

  @media screen and (min-width: 1920px) {
    width: 828px;
    height: 664px;
  }
`,GS="/healthy-management-project/assets/olga_with_book1x-kIN8FAVO.webp",XS="/healthy-management-project/assets/olga_with_book1x-KTuULWu1.jpg",qS="/healthy-management-project/assets/olga_with_book2x-lES61yI6.jpg",JS=()=>c.jsxs(US,{className:"container",children:[c.jsxs(BS,{children:[c.jsxs(HS,{children:[c.jsx(WS,{children:"Принципи роботи"}),c.jsx(QS,{children:"Наші принципи роботи полягають у співдії з ціннісними брендами та командами, які готові до чесної співпраці, щоб сприяти досягненню поставлених цілей. Готові ділитися власним досвідом та створювати стратегії здорового менеджменту та розвитку, маркетингу та сервісу"})]}),c.jsxs(YS,{children:[c.jsxs(bl,{children:[c.jsx(Sl,{children:c.jsx("use",{href:`${re}#icon-done-yellow`})}),c.jsx(kl,{children:"Більше 18 років досвіду в маркетингу та комунікаціях"})]}),c.jsxs(bl,{children:[c.jsx(Sl,{children:c.jsx("use",{href:`${re}#icon-done-yellow`})}),c.jsx(kl,{children:"Глибоке розуміння бізнес-процесів медичних закладів"})]}),c.jsxs(bl,{children:[c.jsx(Sl,{children:c.jsx("use",{href:`${re}#icon-done-yellow`})}),c.jsx(kl,{children:"Використання принципів доказової медицини"})]})]})]}),c.jsxs("picture",{children:[c.jsx("source",{srcSet:`${qS} 2x, ${XS} 1x`,media:"(min-width: 1920px)"}),c.jsx(KS,{src:GS,alt:"Ольга Поліщук"})]})]}),ZS=C.button`
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
`,e2=()=>{const[e,t]=M.useState(!1);M.useEffect(()=>{const r=()=>{const i=window.scrollY,o=document.getElementById("footer"),s=window.innerHeight+window.scrollY-o.offsetTop,l=Math.max(80,s);t(i>480||s>80),document.documentElement.style.setProperty("--scroll-to-top-bottom",`${l}px`)};return window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}},[]);const n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return c.jsx(c.Fragment,{children:e&&c.jsx("section",{className:"container",children:c.jsx(ZS,{onClick:n,children:c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${re}#icon-arrowup`})})})})})};function iv(e,t){return function(){return e.apply(t,arguments)}}const{toString:t2}=Object.prototype,{getPrototypeOf:id}=Object,Da=(e=>t=>{const n=t2.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),sn=e=>(e=e.toLowerCase(),t=>Da(t)===e),La=e=>t=>typeof t===e,{isArray:ii}=Array,so=La("undefined");function n2(e){return e!==null&&!so(e)&&e.constructor!==null&&!so(e.constructor)&&Rt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ov=sn("ArrayBuffer");function r2(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ov(e.buffer),t}const i2=La("string"),Rt=La("function"),sv=La("number"),Aa=e=>e!==null&&typeof e=="object",o2=e=>e===!0||e===!1,ps=e=>{if(Da(e)!=="object")return!1;const t=id(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},s2=sn("Date"),a2=sn("File"),l2=sn("Blob"),u2=sn("FileList"),c2=e=>Aa(e)&&Rt(e.pipe),d2=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Rt(e.append)&&((t=Da(e))==="formdata"||t==="object"&&Rt(e.toString)&&e.toString()==="[object FormData]"))},f2=sn("URLSearchParams"),p2=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function go(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),ii(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let l;for(r=0;r<s;r++)l=o[r],t.call(null,e[l],l,e)}}function av(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const lv=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,uv=e=>!so(e)&&e!==lv;function Nu(){const{caseless:e}=uv(this)&&this||{},t={},n=(r,i)=>{const o=e&&av(t,i)||i;ps(t[o])&&ps(r)?t[o]=Nu(t[o],r):ps(r)?t[o]=Nu({},r):ii(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&go(arguments[r],n);return t}const h2=(e,t,n,{allOwnKeys:r}={})=>(go(t,(i,o)=>{n&&Rt(i)?e[o]=iv(i,n):e[o]=i},{allOwnKeys:r}),e),m2=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),g2=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},v2=(e,t,n,r)=>{let i,o,s;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!r||r(s,e,t))&&!l[s]&&(t[s]=e[s],l[s]=!0);e=n!==!1&&id(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},x2=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},y2=e=>{if(!e)return null;if(ii(e))return e;let t=e.length;if(!sv(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},w2=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&id(Uint8Array)),b2=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},S2=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},k2=sn("HTMLFormElement"),C2=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),lp=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),j2=sn("RegExp"),cv=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};go(n,(i,o)=>{let s;(s=t(i,o,e))!==!1&&(r[o]=s||i)}),Object.defineProperties(e,r)},E2=e=>{cv(e,(t,n)=>{if(Rt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Rt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},O2=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return ii(e)?r(e):r(String(e).split(t)),n},_2=()=>{},P2=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Cl="abcdefghijklmnopqrstuvwxyz",up="0123456789",dv={DIGIT:up,ALPHA:Cl,ALPHA_DIGIT:Cl+Cl.toUpperCase()+up},T2=(e=16,t=dv.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function M2(e){return!!(e&&Rt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const R2=e=>{const t=new Array(10),n=(r,i)=>{if(Aa(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=ii(r)?[]:{};return go(r,(s,l)=>{const a=n(s,i+1);!so(a)&&(o[l]=a)}),t[i]=void 0,o}}return r};return n(e,0)},I2=sn("AsyncFunction"),D2=e=>e&&(Aa(e)||Rt(e))&&Rt(e.then)&&Rt(e.catch),R={isArray:ii,isArrayBuffer:ov,isBuffer:n2,isFormData:d2,isArrayBufferView:r2,isString:i2,isNumber:sv,isBoolean:o2,isObject:Aa,isPlainObject:ps,isUndefined:so,isDate:s2,isFile:a2,isBlob:l2,isRegExp:j2,isFunction:Rt,isStream:c2,isURLSearchParams:f2,isTypedArray:w2,isFileList:u2,forEach:go,merge:Nu,extend:h2,trim:p2,stripBOM:m2,inherits:g2,toFlatObject:v2,kindOf:Da,kindOfTest:sn,endsWith:x2,toArray:y2,forEachEntry:b2,matchAll:S2,isHTMLForm:k2,hasOwnProperty:lp,hasOwnProp:lp,reduceDescriptors:cv,freezeMethods:E2,toObjectSet:O2,toCamelCase:C2,noop:_2,toFiniteNumber:P2,findKey:av,global:lv,isContextDefined:uv,ALPHABET:dv,generateString:T2,isSpecCompliantForm:M2,toJSONObject:R2,isAsyncFn:I2,isThenable:D2};function de(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}R.inherits(de,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:R.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const fv=de.prototype,pv={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{pv[e]={value:e}});Object.defineProperties(de,pv);Object.defineProperty(fv,"isAxiosError",{value:!0});de.from=(e,t,n,r,i,o)=>{const s=Object.create(fv);return R.toFlatObject(e,s,function(a){return a!==Error.prototype},l=>l!=="isAxiosError"),de.call(s,e.message,t,n,r,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};const L2=null;function $u(e){return R.isPlainObject(e)||R.isArray(e)}function hv(e){return R.endsWith(e,"[]")?e.slice(0,-2):e}function cp(e,t,n){return e?e.concat(t).map(function(i,o){return i=hv(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function A2(e){return R.isArray(e)&&!e.some($u)}const F2=R.toFlatObject(R,{},null,function(t){return/^is[A-Z]/.test(t)});function Fa(e,t,n){if(!R.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=R.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,w){return!R.isUndefined(w[v])});const r=n.metaTokens,i=n.visitor||d,o=n.dots,s=n.indexes,a=(n.Blob||typeof Blob<"u"&&Blob)&&R.isSpecCompliantForm(t);if(!R.isFunction(i))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(R.isDate(g))return g.toISOString();if(!a&&R.isBlob(g))throw new de("Blob is not supported. Use a Buffer instead.");return R.isArrayBuffer(g)||R.isTypedArray(g)?a&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function d(g,v,w){let p=g;if(g&&!w&&typeof g=="object"){if(R.endsWith(v,"{}"))v=r?v:v.slice(0,-2),g=JSON.stringify(g);else if(R.isArray(g)&&A2(g)||(R.isFileList(g)||R.endsWith(v,"[]"))&&(p=R.toArray(g)))return v=hv(v),p.forEach(function(x,b){!(R.isUndefined(x)||x===null)&&t.append(s===!0?cp([v],b,o):s===null?v:v+"[]",u(x))}),!1}return $u(g)?!0:(t.append(cp(w,v,o),u(g)),!1)}const f=[],m=Object.assign(F2,{defaultVisitor:d,convertValue:u,isVisitable:$u});function y(g,v){if(!R.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+v.join("."));f.push(g),R.forEach(g,function(p,h){(!(R.isUndefined(p)||p===null)&&i.call(t,p,R.isString(h)?h.trim():h,v,m))===!0&&y(p,v?v.concat(h):[h])}),f.pop()}}if(!R.isObject(e))throw new TypeError("data must be an object");return y(e),t}function dp(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function od(e,t){this._pairs=[],e&&Fa(e,this,t)}const mv=od.prototype;mv.append=function(t,n){this._pairs.push([t,n])};mv.toString=function(t){const n=t?function(r){return t.call(this,r,dp)}:dp;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function z2(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function gv(e,t,n){if(!t)return e;const r=n&&n.encode||z2,i=n&&n.serialize;let o;if(i?o=i(t,n):o=R.isURLSearchParams(t)?t.toString():new od(t,n).toString(r),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class V2{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){R.forEach(this.handlers,function(r){r!==null&&t(r)})}}const fp=V2,vv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},N2=typeof URLSearchParams<"u"?URLSearchParams:od,$2=typeof FormData<"u"?FormData:null,U2=typeof Blob<"u"?Blob:null,B2={isBrowser:!0,classes:{URLSearchParams:N2,FormData:$2,Blob:U2},protocols:["http","https","file","blob","url","data"]},xv=typeof window<"u"&&typeof document<"u",H2=(e=>xv&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),W2=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Q2=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:xv,hasStandardBrowserEnv:H2,hasStandardBrowserWebWorkerEnv:W2},Symbol.toStringTag,{value:"Module"})),en={...Q2,...B2};function Y2(e,t){return Fa(e,new en.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return en.isNode&&R.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function K2(e){return R.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function G2(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function yv(e){function t(n,r,i,o){let s=n[o++];const l=Number.isFinite(+s),a=o>=n.length;return s=!s&&R.isArray(i)?i.length:s,a?(R.hasOwnProp(i,s)?i[s]=[i[s],r]:i[s]=r,!l):((!i[s]||!R.isObject(i[s]))&&(i[s]=[]),t(n,r,i[s],o)&&R.isArray(i[s])&&(i[s]=G2(i[s])),!l)}if(R.isFormData(e)&&R.isFunction(e.entries)){const n={};return R.forEachEntry(e,(r,i)=>{t(K2(r),i,n,0)}),n}return null}function X2(e,t,n){if(R.isString(e))try{return(t||JSON.parse)(e),R.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const sd={transitional:vv,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=R.isObject(t);if(o&&R.isHTMLForm(t)&&(t=new FormData(t)),R.isFormData(t))return i&&i?JSON.stringify(yv(t)):t;if(R.isArrayBuffer(t)||R.isBuffer(t)||R.isStream(t)||R.isFile(t)||R.isBlob(t))return t;if(R.isArrayBufferView(t))return t.buffer;if(R.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Y2(t,this.formSerializer).toString();if((l=R.isFileList(t))||r.indexOf("multipart/form-data")>-1){const a=this.env&&this.env.FormData;return Fa(l?{"files[]":t}:t,a&&new a,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),X2(t)):t}],transformResponse:[function(t){const n=this.transitional||sd.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&R.isString(t)&&(r&&!this.responseType||i)){const s=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(l){if(s)throw l.name==="SyntaxError"?de.from(l,de.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:en.classes.FormData,Blob:en.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};R.forEach(["delete","get","head","post","put","patch"],e=>{sd.headers[e]={}});const ad=sd,q2=R.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),J2=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),n=s.substring(0,i).trim().toLowerCase(),r=s.substring(i+1).trim(),!(!n||t[n]&&q2[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},pp=Symbol("internals");function xi(e){return e&&String(e).trim().toLowerCase()}function hs(e){return e===!1||e==null?e:R.isArray(e)?e.map(hs):String(e)}function Z2(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const ek=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function jl(e,t,n,r,i){if(R.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!R.isString(t)){if(R.isString(r))return t.indexOf(r)!==-1;if(R.isRegExp(r))return r.test(t)}}function tk(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function nk(e,t){const n=R.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,s){return this[r].call(this,t,i,o,s)},configurable:!0})})}class za{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(l,a,u){const d=xi(a);if(!d)throw new Error("header name must be a non-empty string");const f=R.findKey(i,d);(!f||i[f]===void 0||u===!0||u===void 0&&i[f]!==!1)&&(i[f||a]=hs(l))}const s=(l,a)=>R.forEach(l,(u,d)=>o(u,d,a));return R.isPlainObject(t)||t instanceof this.constructor?s(t,n):R.isString(t)&&(t=t.trim())&&!ek(t)?s(J2(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=xi(t),t){const r=R.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return Z2(i);if(R.isFunction(n))return n.call(this,i,r);if(R.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=xi(t),t){const r=R.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||jl(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(s){if(s=xi(s),s){const l=R.findKey(r,s);l&&(!n||jl(r,r[l],l,n))&&(delete r[l],i=!0)}}return R.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||jl(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return R.forEach(this,(i,o)=>{const s=R.findKey(r,o);if(s){n[s]=hs(i),delete n[o];return}const l=t?tk(o):String(o).trim();l!==o&&delete n[o],n[l]=hs(i),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return R.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&R.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[pp]=this[pp]={accessors:{}}).accessors,i=this.prototype;function o(s){const l=xi(s);r[l]||(nk(i,s),r[l]=!0)}return R.isArray(t)?t.forEach(o):o(t),this}}za.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);R.reduceDescriptors(za.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});R.freezeMethods(za);const gn=za;function El(e,t){const n=this||ad,r=t||n,i=gn.from(r.headers);let o=r.data;return R.forEach(e,function(l){o=l.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function wv(e){return!!(e&&e.__CANCEL__)}function vo(e,t,n){de.call(this,e??"canceled",de.ERR_CANCELED,t,n),this.name="CanceledError"}R.inherits(vo,de,{__CANCEL__:!0});function rk(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new de("Request failed with status code "+n.status,[de.ERR_BAD_REQUEST,de.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const ik=en.hasStandardBrowserEnv?{write(e,t,n,r,i,o){const s=[e+"="+encodeURIComponent(t)];R.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),R.isString(r)&&s.push("path="+r),R.isString(i)&&s.push("domain="+i),o===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function ok(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function sk(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function bv(e,t){return e&&!ok(t)?sk(e,t):t}const ak=en.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let s=o;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(s){const l=R.isString(s)?i(s):s;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function lk(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function uk(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,s;return t=t!==void 0?t:1e3,function(a){const u=Date.now(),d=r[o];s||(s=u),n[i]=a,r[i]=u;let f=o,m=0;for(;f!==i;)m+=n[f++],f=f%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-s<t)return;const y=d&&u-d;return y?Math.round(m*1e3/y):void 0}}function hp(e,t){let n=0;const r=uk(50,250);return i=>{const o=i.loaded,s=i.lengthComputable?i.total:void 0,l=o-n,a=r(l),u=o<=s;n=o;const d={loaded:o,total:s,progress:s?o/s:void 0,bytes:l,rate:a||void 0,estimated:a&&s&&u?(s-o)/a:void 0,event:i};d[t?"download":"upload"]=!0,e(d)}}const ck=typeof XMLHttpRequest<"u",dk=ck&&function(e){return new Promise(function(n,r){let i=e.data;const o=gn.from(e.headers).normalize();let{responseType:s,withXSRFToken:l}=e,a;function u(){e.cancelToken&&e.cancelToken.unsubscribe(a),e.signal&&e.signal.removeEventListener("abort",a)}let d;if(R.isFormData(i)){if(en.hasStandardBrowserEnv||en.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((d=o.getContentType())!==!1){const[v,...w]=d?d.split(";").map(p=>p.trim()).filter(Boolean):[];o.setContentType([v||"multipart/form-data",...w].join("; "))}}let f=new XMLHttpRequest;if(e.auth){const v=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(v+":"+w))}const m=bv(e.baseURL,e.url);f.open(e.method.toUpperCase(),gv(m,e.params,e.paramsSerializer),!0),f.timeout=e.timeout;function y(){if(!f)return;const v=gn.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),p={data:!s||s==="text"||s==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:v,config:e,request:f};rk(function(x){n(x),u()},function(x){r(x),u()},p),f=null}if("onloadend"in f?f.onloadend=y:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(y)},f.onabort=function(){f&&(r(new de("Request aborted",de.ECONNABORTED,e,f)),f=null)},f.onerror=function(){r(new de("Network Error",de.ERR_NETWORK,e,f)),f=null},f.ontimeout=function(){let w=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const p=e.transitional||vv;e.timeoutErrorMessage&&(w=e.timeoutErrorMessage),r(new de(w,p.clarifyTimeoutError?de.ETIMEDOUT:de.ECONNABORTED,e,f)),f=null},en.hasStandardBrowserEnv&&(l&&R.isFunction(l)&&(l=l(e)),l||l!==!1&&ak(m))){const v=e.xsrfHeaderName&&e.xsrfCookieName&&ik.read(e.xsrfCookieName);v&&o.set(e.xsrfHeaderName,v)}i===void 0&&o.setContentType(null),"setRequestHeader"in f&&R.forEach(o.toJSON(),function(w,p){f.setRequestHeader(p,w)}),R.isUndefined(e.withCredentials)||(f.withCredentials=!!e.withCredentials),s&&s!=="json"&&(f.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&f.addEventListener("progress",hp(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",hp(e.onUploadProgress)),(e.cancelToken||e.signal)&&(a=v=>{f&&(r(!v||v.type?new vo(null,e,f):v),f.abort(),f=null)},e.cancelToken&&e.cancelToken.subscribe(a),e.signal&&(e.signal.aborted?a():e.signal.addEventListener("abort",a)));const g=lk(m);if(g&&en.protocols.indexOf(g)===-1){r(new de("Unsupported protocol "+g+":",de.ERR_BAD_REQUEST,e));return}f.send(i||null)})},Uu={http:L2,xhr:dk};R.forEach(Uu,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const mp=e=>`- ${e}`,fk=e=>R.isFunction(e)||e===null||e===!1,Sv={getAdapter:e=>{e=R.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let o=0;o<t;o++){n=e[o];let s;if(r=n,!fk(n)&&(r=Uu[(s=String(n)).toLowerCase()],r===void 0))throw new de(`Unknown adapter '${s}'`);if(r)break;i[s||"#"+o]=r}if(!r){const o=Object.entries(i).map(([l,a])=>`adapter ${l} `+(a===!1?"is not supported by the environment":"is not available in the build"));let s=t?o.length>1?`since :
`+o.map(mp).join(`
`):" "+mp(o[0]):"as no adapter specified";throw new de("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:Uu};function Ol(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new vo(null,e)}function gp(e){return Ol(e),e.headers=gn.from(e.headers),e.data=El.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Sv.getAdapter(e.adapter||ad.adapter)(e).then(function(r){return Ol(e),r.data=El.call(e,e.transformResponse,r),r.headers=gn.from(r.headers),r},function(r){return wv(r)||(Ol(e),r&&r.response&&(r.response.data=El.call(e,e.transformResponse,r.response),r.response.headers=gn.from(r.response.headers))),Promise.reject(r)})}const vp=e=>e instanceof gn?e.toJSON():e;function Zr(e,t){t=t||{};const n={};function r(u,d,f){return R.isPlainObject(u)&&R.isPlainObject(d)?R.merge.call({caseless:f},u,d):R.isPlainObject(d)?R.merge({},d):R.isArray(d)?d.slice():d}function i(u,d,f){if(R.isUndefined(d)){if(!R.isUndefined(u))return r(void 0,u,f)}else return r(u,d,f)}function o(u,d){if(!R.isUndefined(d))return r(void 0,d)}function s(u,d){if(R.isUndefined(d)){if(!R.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function l(u,d,f){if(f in t)return r(u,d);if(f in e)return r(void 0,u)}const a={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l,headers:(u,d)=>i(vp(u),vp(d),!0)};return R.forEach(Object.keys(Object.assign({},e,t)),function(d){const f=a[d]||i,m=f(e[d],t[d],d);R.isUndefined(m)&&f!==l||(n[d]=m)}),n}const kv="1.6.2",ld={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ld[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const xp={};ld.transitional=function(t,n,r){function i(o,s){return"[Axios v"+kv+"] Transitional option '"+o+"'"+s+(r?". "+r:"")}return(o,s,l)=>{if(t===!1)throw new de(i(s," has been removed"+(n?" in "+n:"")),de.ERR_DEPRECATED);return n&&!xp[s]&&(xp[s]=!0,console.warn(i(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,s,l):!0}};function pk(e,t,n){if(typeof e!="object")throw new de("options must be an object",de.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],s=t[o];if(s){const l=e[o],a=l===void 0||s(l,o,e);if(a!==!0)throw new de("option "+o+" must be "+a,de.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new de("Unknown option "+o,de.ERR_BAD_OPTION)}}const Bu={assertOptions:pk,validators:ld},In=Bu.validators;class Ws{constructor(t){this.defaults=t,this.interceptors={request:new fp,response:new fp}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Zr(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&Bu.assertOptions(r,{silentJSONParsing:In.transitional(In.boolean),forcedJSONParsing:In.transitional(In.boolean),clarifyTimeoutError:In.transitional(In.boolean)},!1),i!=null&&(R.isFunction(i)?n.paramsSerializer={serialize:i}:Bu.assertOptions(i,{encode:In.function,serialize:In.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=o&&R.merge(o.common,o[n.method]);o&&R.forEach(["delete","get","head","post","put","patch","common"],g=>{delete o[g]}),n.headers=gn.concat(s,o);const l=[];let a=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(a=a&&v.synchronous,l.unshift(v.fulfilled,v.rejected))});const u=[];this.interceptors.response.forEach(function(v){u.push(v.fulfilled,v.rejected)});let d,f=0,m;if(!a){const g=[gp.bind(this),void 0];for(g.unshift.apply(g,l),g.push.apply(g,u),m=g.length,d=Promise.resolve(n);f<m;)d=d.then(g[f++],g[f++]);return d}m=l.length;let y=n;for(f=0;f<m;){const g=l[f++],v=l[f++];try{y=g(y)}catch(w){v.call(this,w);break}}try{d=gp.call(this,y)}catch(g){return Promise.reject(g)}for(f=0,m=u.length;f<m;)d=d.then(u[f++],u[f++]);return d}getUri(t){t=Zr(this.defaults,t);const n=bv(t.baseURL,t.url);return gv(n,t.params,t.paramsSerializer)}}R.forEach(["delete","get","head","options"],function(t){Ws.prototype[t]=function(n,r){return this.request(Zr(r||{},{method:t,url:n,data:(r||{}).data}))}});R.forEach(["post","put","patch"],function(t){function n(r){return function(o,s,l){return this.request(Zr(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}Ws.prototype[t]=n(),Ws.prototype[t+"Form"]=n(!0)});const ms=Ws;class ud{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(l=>{r.subscribe(l),o=l}).then(i);return s.cancel=function(){r.unsubscribe(o)},s},t(function(o,s,l){r.reason||(r.reason=new vo(o,s,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ud(function(i){t=i}),cancel:t}}}const hk=ud;function mk(e){return function(n){return e.apply(null,n)}}function gk(e){return R.isObject(e)&&e.isAxiosError===!0}const Hu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Hu).forEach(([e,t])=>{Hu[t]=e});const vk=Hu;function Cv(e){const t=new ms(e),n=iv(ms.prototype.request,t);return R.extend(n,ms.prototype,t,{allOwnKeys:!0}),R.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return Cv(Zr(e,i))},n}const Ne=Cv(ad);Ne.Axios=ms;Ne.CanceledError=vo;Ne.CancelToken=hk;Ne.isCancel=wv;Ne.VERSION=kv;Ne.toFormData=Fa;Ne.AxiosError=de;Ne.Cancel=Ne.CanceledError;Ne.all=function(t){return Promise.all(t)};Ne.spread=mk;Ne.isAxiosError=gk;Ne.mergeConfig=Zr;Ne.AxiosHeaders=gn;Ne.formToJSON=e=>yv(R.isHTMLForm(e)?new FormData(e):e);Ne.getAdapter=Sv.getAdapter;Ne.HttpStatusCode=vk;Ne.default=Ne;const xk=Ne;function mr(e){"@babel/helpers - typeof";return mr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mr(e)}function yk(e,t){if(mr(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(mr(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function jv(e){var t=yk(e,"string");return mr(t)==="symbol"?t:String(t)}function Ei(e,t,n){return t=jv(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function yp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yp(Object(n),!0).forEach(function(r){Ei(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function wk(e){if(Array.isArray(e))return e}function bk(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,s,l=[],a=!0,u=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);a=!0);}catch(d){u=!0,i=d}finally{try{if(!a&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(u)throw i}}return l}}function Wu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ev(e,t){if(e){if(typeof e=="string")return Wu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Wu(e,t)}}function Sk(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vn(e,t){return wk(e)||bk(e,t)||Ev(e,t)||Sk()}function kk(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function kn(e,t){if(e==null)return{};var n=kk(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var Ck=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function jk(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,o=e.defaultValue,s=o===void 0?null:o,l=e.inputValue,a=e.menuIsOpen,u=e.onChange,d=e.onInputChange,f=e.onMenuClose,m=e.onMenuOpen,y=e.value,g=kn(e,Ck),v=M.useState(l!==void 0?l:n),w=vn(v,2),p=w[0],h=w[1],x=M.useState(a!==void 0?a:i),b=vn(x,2),k=b[0],_=b[1],E=M.useState(y!==void 0?y:s),P=vn(E,2),T=P[0],I=P[1],B=M.useCallback(function(z,Q){typeof u=="function"&&u(z,Q),I(z)},[u]),A=M.useCallback(function(z,Q){var Y;typeof d=="function"&&(Y=d(z,Q)),h(Y!==void 0?Y:z)},[d]),D=M.useCallback(function(){typeof m=="function"&&m(),_(!0)},[m]),X=M.useCallback(function(){typeof f=="function"&&f(),_(!1)},[f]),Z=l!==void 0?l:p,ee=a!==void 0?a:k,ve=y!==void 0?y:T;return G(G({},g),{},{inputValue:Z,menuIsOpen:ee,onChange:B,onInputChange:A,onMenuClose:X,onMenuOpen:D,value:ve})}function Ek(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function wp(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,jv(r.key),r)}}function Ok(e,t,n){return t&&wp(e.prototype,t),n&&wp(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Qu(e,t){return Qu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Qu(e,t)}function _k(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Qu(e,t)}function Qs(e){return Qs=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Qs(e)}function Pk(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Tk(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Mk(e,t){if(t&&(mr(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Tk(e)}function Rk(e){var t=Pk();return function(){var r=Qs(e),i;if(t){var o=Qs(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Mk(this,i)}}function Ik(e){if(Array.isArray(e))return Wu(e)}function Dk(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Lk(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cd(e){return Ik(e)||Dk(e)||Ev(e)||Lk()}function Ak(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const Fk=Math.min,zk=Math.max,Ys=Math.round,Yo=Math.floor,Ks=e=>({x:e,y:e});function Vk(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Ov(e){return Pv(e)?(e.nodeName||"").toLowerCase():"#document"}function Ht(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function _v(e){var t;return(t=(Pv(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Pv(e){return e instanceof Node||e instanceof Ht(e).Node}function Yu(e){return e instanceof Element||e instanceof Ht(e).Element}function dd(e){return e instanceof HTMLElement||e instanceof Ht(e).HTMLElement}function bp(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Ht(e).ShadowRoot}function Tv(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=fd(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(i)}function Nk(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function $k(e){return["html","body","#document"].includes(Ov(e))}function fd(e){return Ht(e).getComputedStyle(e)}function Uk(e){if(Ov(e)==="html")return e;const t=e.assignedSlot||e.parentNode||bp(e)&&e.host||_v(e);return bp(t)?t.host:t}function Mv(e){const t=Uk(e);return $k(t)?e.ownerDocument?e.ownerDocument.body:e.body:dd(t)&&Tv(t)?t:Mv(t)}function Gs(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=Mv(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),s=Ht(i);return o?t.concat(s,s.visualViewport||[],Tv(i)?i:[],s.frameElement&&n?Gs(s.frameElement):[]):t.concat(i,Gs(i,[],n))}function Bk(e){const t=fd(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=dd(e),o=i?e.offsetWidth:n,s=i?e.offsetHeight:r,l=Ys(n)!==o||Ys(r)!==s;return l&&(n=o,r=s),{width:n,height:r,$:l}}function pd(e){return Yu(e)?e:e.contextElement}function _l(e){const t=pd(e);if(!dd(t))return Ks(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=Bk(t);let s=(o?Ys(n.width):n.width)/r,l=(o?Ys(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const Hk=Ks(0);function Wk(e){const t=Ht(e);return!Nk()||!t.visualViewport?Hk:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Qk(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Ht(e)?!1:t}function Sp(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=pd(e);let s=Ks(1);t&&(r?Yu(r)&&(s=_l(r)):s=_l(e));const l=Qk(o,n,r)?Wk(o):Ks(0);let a=(i.left+l.x)/s.x,u=(i.top+l.y)/s.y,d=i.width/s.x,f=i.height/s.y;if(o){const m=Ht(o),y=r&&Yu(r)?Ht(r):r;let g=m.frameElement;for(;g&&r&&y!==m;){const v=_l(g),w=g.getBoundingClientRect(),p=fd(g),h=w.left+(g.clientLeft+parseFloat(p.paddingLeft))*v.x,x=w.top+(g.clientTop+parseFloat(p.paddingTop))*v.y;a*=v.x,u*=v.y,d*=v.x,f*=v.y,a+=h,u+=x,g=Ht(g).frameElement}}return Vk({width:d,height:f,x:a,y:u})}function Yk(e,t){let n=null,r;const i=_v(e);function o(){clearTimeout(r),n&&n.disconnect(),n=null}function s(l,a){l===void 0&&(l=!1),a===void 0&&(a=1),o();const{left:u,top:d,width:f,height:m}=e.getBoundingClientRect();if(l||t(),!f||!m)return;const y=Yo(d),g=Yo(i.clientWidth-(u+f)),v=Yo(i.clientHeight-(d+m)),w=Yo(u),h={rootMargin:-y+"px "+-g+"px "+-v+"px "+-w+"px",threshold:zk(0,Fk(1,a))||1};let x=!0;function b(k){const _=k[0].intersectionRatio;if(_!==a){if(!x)return s();_?s(!1,_):r=setTimeout(()=>{s(!1,1e-7)},100)}x=!1}try{n=new IntersectionObserver(b,{...h,root:i.ownerDocument})}catch{n=new IntersectionObserver(b,h)}n.observe(e)}return s(!0),o}function Kk(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=r,u=pd(e),d=i||o?[...u?Gs(u):[],...Gs(t)]:[];d.forEach(p=>{i&&p.addEventListener("scroll",n,{passive:!0}),o&&p.addEventListener("resize",n)});const f=u&&l?Yk(u,n):null;let m=-1,y=null;s&&(y=new ResizeObserver(p=>{let[h]=p;h&&h.target===u&&y&&(y.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{y&&y.observe(t)})),n()}),u&&!a&&y.observe(u),y.observe(t));let g,v=a?Sp(e):null;a&&w();function w(){const p=Sp(e);v&&(p.x!==v.x||p.y!==v.y||p.width!==v.width||p.height!==v.height)&&n(),v=p,g=requestAnimationFrame(w)}return n(),()=>{d.forEach(p=>{i&&p.removeEventListener("scroll",n),o&&p.removeEventListener("resize",n)}),f&&f(),y&&y.disconnect(),y=null,a&&cancelAnimationFrame(g)}}var Ku=M.useLayoutEffect,Gk=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Xs=function(){};function Xk(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function qk(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=[].concat(r);if(t&&e)for(var s in t)t.hasOwnProperty(s)&&t[s]&&o.push("".concat(Xk(e,s)));return o.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var kp=function(t){return s4(t)?t.filter(Boolean):mr(t)==="object"&&t!==null?[t]:[]},Rv=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=kn(t,Gk);return G({},n)},Le=function(t,n,r){var i=t.cx,o=t.getStyles,s=t.getClassNames,l=t.className;return{css:o(n,t),className:i(r??{},s(n,t),l)}};function Va(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function Jk(e){return Va(e)?window.innerHeight:e.clientHeight}function Iv(e){return Va(e)?window.pageYOffset:e.scrollTop}function qs(e,t){if(Va(e)){window.scrollTo(0,t);return}e.scrollTop=t}function Zk(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function e4(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function Ko(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Xs,i=Iv(e),o=t-i,s=10,l=0;function a(){l+=s;var u=e4(l,i,o,n);qs(e,u),l<n?window.requestAnimationFrame(a):r(e)}a()}function Cp(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?qs(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&qs(e,Math.max(t.offsetTop-i,0))}function t4(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function jp(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function n4(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var Dv=!1,r4={get passive(){return Dv=!0}},Go=typeof window<"u"?window:{};Go.addEventListener&&Go.removeEventListener&&(Go.addEventListener("p",Xs,r4),Go.removeEventListener("p",Xs,!1));var i4=Dv;function o4(e){return e!=null}function s4(e){return Array.isArray(e)}function Xo(e,t,n){return e?t:n}var a4=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=Object.entries(t).filter(function(s){var l=vn(s,1),a=l[0];return!r.includes(a)});return o.reduce(function(s,l){var a=vn(l,2),u=a[0],d=a[1];return s[u]=d,s},{})},l4=["children","innerProps"],u4=["children","innerProps"];function c4(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,o=e.shouldScroll,s=e.isFixedPosition,l=e.controlHeight,a=Zk(n),u={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return u;var d=a.getBoundingClientRect(),f=d.height,m=n.getBoundingClientRect(),y=m.bottom,g=m.height,v=m.top,w=n.offsetParent.getBoundingClientRect(),p=w.top,h=s?window.innerHeight:Jk(a),x=Iv(a),b=parseInt(getComputedStyle(n).marginBottom,10),k=parseInt(getComputedStyle(n).marginTop,10),_=p-k,E=h-v,P=_+x,T=f-x-v,I=y-h+x+b,B=x+v-k,A=160;switch(i){case"auto":case"bottom":if(E>=g)return{placement:"bottom",maxHeight:t};if(T>=g&&!s)return o&&Ko(a,I,A),{placement:"bottom",maxHeight:t};if(!s&&T>=r||s&&E>=r){o&&Ko(a,I,A);var D=s?E-b:T-b;return{placement:"bottom",maxHeight:D}}if(i==="auto"||s){var X=t,Z=s?_:P;return Z>=r&&(X=Math.min(Z-b-l,t)),{placement:"top",maxHeight:X}}if(i==="bottom")return o&&qs(a,I),{placement:"bottom",maxHeight:t};break;case"top":if(_>=g)return{placement:"top",maxHeight:t};if(P>=g&&!s)return o&&Ko(a,B,A),{placement:"top",maxHeight:t};if(!s&&P>=r||s&&_>=r){var ee=t;return(!s&&P>=r||s&&_>=r)&&(ee=s?_-k:P-k),o&&Ko(a,B,A),{placement:"top",maxHeight:ee}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return u}function d4(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var Lv=function(t){return t==="auto"?"bottom":t},f4=function(t,n){var r,i=t.placement,o=t.theme,s=o.borderRadius,l=o.spacing,a=o.colors;return G((r={label:"menu"},Ei(r,d4(i),"100%"),Ei(r,"position","absolute"),Ei(r,"width","100%"),Ei(r,"zIndex",1),r),n?{}:{backgroundColor:a.neutral0,borderRadius:s,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},Av=M.createContext(null),p4=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,o=t.menuPlacement,s=t.menuPosition,l=t.menuShouldScrollIntoView,a=t.theme,u=M.useContext(Av)||{},d=u.setPortalPlacement,f=M.useRef(null),m=M.useState(i),y=vn(m,2),g=y[0],v=y[1],w=M.useState(null),p=vn(w,2),h=p[0],x=p[1],b=a.spacing.controlHeight;return Ku(function(){var k=f.current;if(k){var _=s==="fixed",E=l&&!_,P=c4({maxHeight:i,menuEl:k,minHeight:r,placement:o,shouldScroll:E,isFixedPosition:_,controlHeight:b});v(P.maxHeight),x(P.placement),d==null||d(P.placement)}},[i,o,s,l,r,d,b]),n({ref:f,placerProps:G(G({},t),{},{placement:h||Lv(o),maxHeight:g})})},h4=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return K("div",q({},Le(t,"menu",{menu:!0}),{ref:r},i),n)},m4=h4,g4=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return G({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},v4=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,o=t.isMulti;return K("div",q({},Le(t,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:i},r),n)},Fv=function(t,n){var r=t.theme,i=r.spacing.baseUnit,o=r.colors;return G({textAlign:"center"},n?{}:{color:o.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},x4=Fv,y4=Fv,w4=function(t){var n=t.children,r=n===void 0?"No options":n,i=t.innerProps,o=kn(t,l4);return K("div",q({},Le(G(G({},o),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},b4=function(t){var n=t.children,r=n===void 0?"Loading...":n,i=t.innerProps,o=kn(t,u4);return K("div",q({},Le(G(G({},o),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},S4=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},k4=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,o=t.innerProps,s=t.menuPlacement,l=t.menuPosition,a=M.useRef(null),u=M.useRef(null),d=M.useState(Lv(s)),f=vn(d,2),m=f[0],y=f[1],g=M.useMemo(function(){return{setPortalPlacement:y}},[]),v=M.useState(null),w=vn(v,2),p=w[0],h=w[1],x=M.useCallback(function(){if(i){var E=t4(i),P=l==="fixed"?0:window.pageYOffset,T=E[m]+P;(T!==(p==null?void 0:p.offset)||E.left!==(p==null?void 0:p.rect.left)||E.width!==(p==null?void 0:p.rect.width))&&h({offset:T,rect:E})}},[i,l,m,p==null?void 0:p.offset,p==null?void 0:p.rect.left,p==null?void 0:p.rect.width]);Ku(function(){x()},[x]);var b=M.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),i&&a.current&&(u.current=Kk(i,a.current,x,{elementResize:"ResizeObserver"in window}))},[i,x]);Ku(function(){b()},[b]);var k=M.useCallback(function(E){a.current=E,b()},[b]);if(!n&&l!=="fixed"||!p)return null;var _=K("div",q({ref:k},Le(G(G({},t),{},{offset:p.offset,position:l,rect:p.rect}),"menuPortal",{"menu-portal":!0}),o),r);return K(Av.Provider,{value:g},n?ho.createPortal(_,n):_)},C4=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},j4=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,o=t.isRtl;return K("div",q({},Le(t,"container",{"--is-disabled":i,"--is-rtl":o}),r),n)},E4=function(t,n){var r=t.theme.spacing,i=t.isMulti,o=t.hasValue,s=t.selectProps.controlShouldRenderValue;return G({alignItems:"center",display:i&&o&&s?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},O4=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,o=t.hasValue;return K("div",q({},Le(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":o}),r),n)},_4=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},P4=function(t){var n=t.children,r=t.innerProps;return K("div",q({},Le(t,"indicatorsContainer",{indicators:!0}),r),n)},Ep,T4=["size"],M4=["innerProps","isRtl","size"],R4={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},zv=function(t){var n=t.size,r=kn(t,T4);return K("svg",q({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:R4},r))},hd=function(t){return K(zv,q({size:20},t),K("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Vv=function(t){return K(zv,q({size:20},t),K("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Nv=function(t,n){var r=t.isFocused,i=t.theme,o=i.spacing.baseUnit,s=i.colors;return G({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?s.neutral60:s.neutral20,padding:o*2,":hover":{color:r?s.neutral80:s.neutral40}})},I4=Nv,D4=function(t){var n=t.children,r=t.innerProps;return K("div",q({},Le(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||K(Vv,null))},L4=Nv,A4=function(t){var n=t.children,r=t.innerProps;return K("div",q({},Le(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||K(hd,null))},F4=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing.baseUnit,s=i.colors;return G({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?s.neutral10:s.neutral20,marginBottom:o*2,marginTop:o*2})},z4=function(t){var n=t.innerProps;return K("span",q({},n,Le(t,"indicatorSeparator",{"indicator-separator":!0})))},V4=nw(Ep||(Ep=Ak([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),N4=function(t,n){var r=t.isFocused,i=t.size,o=t.theme,s=o.colors,l=o.spacing.baseUnit;return G({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?s.neutral60:s.neutral20,padding:l*2})},Pl=function(t){var n=t.delay,r=t.offset;return K("span",{css:td({animation:"".concat(V4," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},$4=function(t){var n=t.innerProps,r=t.isRtl,i=t.size,o=i===void 0?4:i,s=kn(t,M4);return K("div",q({},Le(G(G({},s),{},{innerProps:n,isRtl:r,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),K(Pl,{delay:0,offset:r}),K(Pl,{delay:160,offset:!0}),K(Pl,{delay:320,offset:!r}))},U4=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.theme,s=o.colors,l=o.borderRadius,a=o.spacing;return G({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:a.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?s.neutral5:s.neutral0,borderColor:r?s.neutral10:i?s.primary:s.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(s.primary):void 0,"&:hover":{borderColor:i?s.primary:s.neutral30}})},B4=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.innerRef,s=t.innerProps,l=t.menuIsOpen;return K("div",q({ref:o},Le(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":l}),s,{"aria-disabled":r||void 0}),n)},H4=B4,W4=["data"],Q4=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},Y4=function(t){var n=t.children,r=t.cx,i=t.getStyles,o=t.getClassNames,s=t.Heading,l=t.headingProps,a=t.innerProps,u=t.label,d=t.theme,f=t.selectProps;return K("div",q({},Le(t,"group",{group:!0}),a),K(s,q({},l,{selectProps:f,theme:d,getStyles:i,getClassNames:o,cx:r}),u),K("div",null,n))},K4=function(t,n){var r=t.theme,i=r.colors,o=r.spacing;return G({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},G4=function(t){var n=Rv(t);n.data;var r=kn(n,W4);return K("div",q({},Le(t,"groupHeading",{"group-heading":!0}),r))},X4=Y4,q4=["innerRef","isDisabled","isHidden","inputClassName"],J4=function(t,n){var r=t.isDisabled,i=t.value,o=t.theme,s=o.spacing,l=o.colors;return G(G({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},Z4),n?{}:{margin:s.baseUnit/2,paddingBottom:s.baseUnit/2,paddingTop:s.baseUnit/2,color:l.neutral80})},$v={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},Z4={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":G({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},$v)},eC=function(t){return G({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},$v)},tC=function(t){var n=t.cx,r=t.value,i=Rv(t),o=i.innerRef,s=i.isDisabled,l=i.isHidden,a=i.inputClassName,u=kn(i,q4);return K("div",q({},Le(t,"input",{"input-container":!0}),{"data-value":r||""}),K("input",q({className:n({input:!0},a),ref:o,style:eC(l),disabled:s},u)))},nC=tC,rC=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,s=r.colors;return G({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:s.neutral10,borderRadius:o/2,margin:i.baseUnit/2})},iC=function(t,n){var r=t.theme,i=r.borderRadius,o=r.colors,s=t.cropWithEllipsis;return G({overflow:"hidden",textOverflow:s||s===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},oC=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,s=r.colors,l=t.isFocused;return G({alignItems:"center",display:"flex"},n?{}:{borderRadius:o/2,backgroundColor:l?s.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:s.dangerLight,color:s.danger}})},Uv=function(t){var n=t.children,r=t.innerProps;return K("div",r,n)},sC=Uv,aC=Uv;function lC(e){var t=e.children,n=e.innerProps;return K("div",q({role:"button"},n),t||K(hd,{size:14}))}var uC=function(t){var n=t.children,r=t.components,i=t.data,o=t.innerProps,s=t.isDisabled,l=t.removeProps,a=t.selectProps,u=r.Container,d=r.Label,f=r.Remove;return K(u,{data:i,innerProps:G(G({},Le(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":s})),o),selectProps:a},K(d,{data:i,innerProps:G({},Le(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:a},n),K(f,{data:i,innerProps:G(G({},Le(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},l),selectProps:a}))},cC=uC,dC=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.isSelected,s=t.theme,l=s.spacing,a=s.colors;return G({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:o?a.primary:i?a.primary25:"transparent",color:r?a.neutral20:o?a.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?a.primary:a.primary50}})},fC=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.isSelected,s=t.innerRef,l=t.innerProps;return K("div",q({},Le(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":o}),{ref:s,"aria-disabled":r},l),n)},pC=fC,hC=function(t,n){var r=t.theme,i=r.spacing,o=r.colors;return G({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:o.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},mC=function(t){var n=t.children,r=t.innerProps;return K("div",q({},Le(t,"placeholder",{placeholder:!0}),r),n)},gC=mC,vC=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing,s=i.colors;return G({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?s.neutral40:s.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},xC=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return K("div",q({},Le(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},yC=xC,wC={ClearIndicator:A4,Control:H4,DropdownIndicator:D4,DownChevron:Vv,CrossIcon:hd,Group:X4,GroupHeading:G4,IndicatorsContainer:P4,IndicatorSeparator:z4,Input:nC,LoadingIndicator:$4,Menu:m4,MenuList:v4,MenuPortal:k4,LoadingMessage:b4,NoOptionsMessage:w4,MultiValue:cC,MultiValueContainer:sC,MultiValueLabel:aC,MultiValueRemove:lC,Option:pC,Placeholder:gC,SelectContainer:j4,SingleValue:yC,ValueContainer:O4},bC=function(t){return G(G({},wC),t.components)},Op=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function SC(e,t){return!!(e===t||Op(e)&&Op(t))}function kC(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!SC(e[n],t[n]))return!1;return!0}function CC(e,t){t===void 0&&(t=kC);var n=null;function r(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var s=e.apply(this,i);return n={lastResult:s,lastArgs:i,lastThis:this},s}return r.clear=function(){n=null},r}var jC={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},EC=function(t){return K("span",q({css:jC},t))},_p=EC,OC={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.tabSelectsValue,o=t.context,s=t.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return s?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,o=t.labels,s=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return s?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,o=t.label,s=o===void 0?"":o,l=t.selectValue,a=t.isDisabled,u=t.isSelected,d=t.isAppleDevice,f=function(v,w){return v&&v.length?"".concat(v.indexOf(w)+1," of ").concat(v.length):""};if(n==="value"&&l)return"value ".concat(s," focused, ").concat(f(l,r),".");if(n==="menu"&&d){var m=a?" disabled":"",y="".concat(u?" selected":"").concat(m);return"".concat(s).concat(y,", ").concat(f(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},_C=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,o=t.focusableOptions,s=t.isFocused,l=t.selectValue,a=t.selectProps,u=t.id,d=t.isAppleDevice,f=a.ariaLiveMessages,m=a.getOptionLabel,y=a.inputValue,g=a.isMulti,v=a.isOptionDisabled,w=a.isSearchable,p=a.menuIsOpen,h=a.options,x=a.screenReaderStatus,b=a.tabSelectsValue,k=a.isLoading,_=a["aria-label"],E=a["aria-live"],P=M.useMemo(function(){return G(G({},OC),f||{})},[f]),T=M.useMemo(function(){var Z="";if(n&&P.onChange){var ee=n.option,ve=n.options,z=n.removedValue,Q=n.removedValues,Y=n.value,ce=function(Ze){return Array.isArray(Ze)?null:Ze},ne=z||ee||ce(Y),Ee=ne?m(ne):"",we=ve||Q||void 0,$e=we?we.map(m):[],he=G({isDisabled:ne&&v(ne,l),label:Ee,labels:$e},n);Z=P.onChange(he)}return Z},[n,P,v,l,m]),I=M.useMemo(function(){var Z="",ee=r||i,ve=!!(r&&l&&l.includes(r));if(ee&&P.onFocus){var z={focused:ee,label:m(ee),isDisabled:v(ee,l),isSelected:ve,options:o,context:ee===r?"menu":"value",selectValue:l,isAppleDevice:d};Z=P.onFocus(z)}return Z},[r,i,m,v,P,o,l,d]),B=M.useMemo(function(){var Z="";if(p&&h.length&&!k&&P.onFilter){var ee=x({count:o.length});Z=P.onFilter({inputValue:y,resultsMessage:ee})}return Z},[o,y,p,P,h,x,k]),A=(n==null?void 0:n.action)==="initial-input-focus",D=M.useMemo(function(){var Z="";if(P.guidance){var ee=i?"value":p?"menu":"input";Z=P.guidance({"aria-label":_,context:ee,isDisabled:r&&v(r,l),isMulti:g,isSearchable:w,tabSelectsValue:b,isInitialFocus:A})}return Z},[_,r,i,g,v,w,p,P,l,b,A]),X=K(M.Fragment,null,K("span",{id:"aria-selection"},T),K("span",{id:"aria-focused"},I),K("span",{id:"aria-results"},B),K("span",{id:"aria-guidance"},D));return K(M.Fragment,null,K(_p,{id:u},A&&X),K(_p,{"aria-live":E,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},s&&!A&&X))},PC=_C,Gu=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],TC=new RegExp("["+Gu.map(function(e){return e.letters}).join("")+"]","g"),Bv={};for(var Tl=0;Tl<Gu.length;Tl++)for(var Ml=Gu[Tl],Rl=0;Rl<Ml.letters.length;Rl++)Bv[Ml.letters[Rl]]=Ml.base;var Hv=function(t){return t.replace(TC,function(n){return Bv[n]})},MC=CC(Hv),Pp=function(t){return t.replace(/^\s+|\s+$/g,"")},RC=function(t){return"".concat(t.label," ").concat(t.value)},IC=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=G({ignoreCase:!0,ignoreAccents:!0,stringify:RC,trim:!0,matchFrom:"any"},t),o=i.ignoreCase,s=i.ignoreAccents,l=i.stringify,a=i.trim,u=i.matchFrom,d=a?Pp(r):r,f=a?Pp(l(n)):l(n);return o&&(d=d.toLowerCase(),f=f.toLowerCase()),s&&(d=MC(d),f=Hv(f)),u==="start"?f.substr(0,d.length)===d:f.indexOf(d)>-1}},DC=["innerRef"];function LC(e){var t=e.innerRef,n=kn(e,DC),r=a4(n,"onExited","in","enter","exit","appear");return K("input",q({ref:t},r,{css:td({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var AC=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function FC(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,o=e.onTopLeave,s=M.useRef(!1),l=M.useRef(!1),a=M.useRef(0),u=M.useRef(null),d=M.useCallback(function(w,p){if(u.current!==null){var h=u.current,x=h.scrollTop,b=h.scrollHeight,k=h.clientHeight,_=u.current,E=p>0,P=b-k-x,T=!1;P>p&&s.current&&(r&&r(w),s.current=!1),E&&l.current&&(o&&o(w),l.current=!1),E&&p>P?(n&&!s.current&&n(w),_.scrollTop=b,T=!0,s.current=!0):!E&&-p>x&&(i&&!l.current&&i(w),_.scrollTop=0,T=!0,l.current=!0),T&&AC(w)}},[n,r,i,o]),f=M.useCallback(function(w){d(w,w.deltaY)},[d]),m=M.useCallback(function(w){a.current=w.changedTouches[0].clientY},[]),y=M.useCallback(function(w){var p=a.current-w.changedTouches[0].clientY;d(w,p)},[d]),g=M.useCallback(function(w){if(w){var p=i4?{passive:!1}:!1;w.addEventListener("wheel",f,p),w.addEventListener("touchstart",m,p),w.addEventListener("touchmove",y,p)}},[y,m,f]),v=M.useCallback(function(w){w&&(w.removeEventListener("wheel",f,!1),w.removeEventListener("touchstart",m,!1),w.removeEventListener("touchmove",y,!1))},[y,m,f]);return M.useEffect(function(){if(t){var w=u.current;return g(w),function(){v(w)}}},[t,g,v]),function(w){u.current=w}}var Tp=["boxSizing","height","overflow","paddingRight","position"],Mp={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Rp(e){e.preventDefault()}function Ip(e){e.stopPropagation()}function Dp(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function Lp(){return"ontouchstart"in window||navigator.maxTouchPoints}var Ap=!!(typeof window<"u"&&window.document&&window.document.createElement),yi=0,Sr={capture:!1,passive:!1};function zC(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=M.useRef({}),o=M.useRef(null),s=M.useCallback(function(a){if(Ap){var u=document.body,d=u&&u.style;if(r&&Tp.forEach(function(g){var v=d&&d[g];i.current[g]=v}),r&&yi<1){var f=parseInt(i.current.paddingRight,10)||0,m=document.body?document.body.clientWidth:0,y=window.innerWidth-m+f||0;Object.keys(Mp).forEach(function(g){var v=Mp[g];d&&(d[g]=v)}),d&&(d.paddingRight="".concat(y,"px"))}u&&Lp()&&(u.addEventListener("touchmove",Rp,Sr),a&&(a.addEventListener("touchstart",Dp,Sr),a.addEventListener("touchmove",Ip,Sr))),yi+=1}},[r]),l=M.useCallback(function(a){if(Ap){var u=document.body,d=u&&u.style;yi=Math.max(yi-1,0),r&&yi<1&&Tp.forEach(function(f){var m=i.current[f];d&&(d[f]=m)}),u&&Lp()&&(u.removeEventListener("touchmove",Rp,Sr),a&&(a.removeEventListener("touchstart",Dp,Sr),a.removeEventListener("touchmove",Ip,Sr)))}},[r]);return M.useEffect(function(){if(t){var a=o.current;return s(a),function(){l(a)}}},[t,s,l]),function(a){o.current=a}}var VC=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},NC={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function $C(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,o=e.onBottomArrive,s=e.onBottomLeave,l=e.onTopArrive,a=e.onTopLeave,u=FC({isEnabled:i,onBottomArrive:o,onBottomLeave:s,onTopArrive:l,onTopLeave:a}),d=zC({isEnabled:n}),f=function(y){u(y),d(y)};return K(M.Fragment,null,n&&K("div",{onClick:VC,css:NC}),t(f))}var UC={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},BC=function(t){var n=t.name,r=t.onFocus;return K("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:UC,value:"",onChange:function(){}})},HC=BC;function md(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function WC(){return md(/^iPhone/i)}function Wv(){return md(/^Mac/i)}function QC(){return md(/^iPad/i)||Wv()&&navigator.maxTouchPoints>1}function YC(){return WC()||QC()}function KC(){return Wv()||YC()}var GC=function(t){return t.label},XC=function(t){return t.label},qC=function(t){return t.value},JC=function(t){return!!t.isDisabled},ZC={clearIndicator:L4,container:C4,control:U4,dropdownIndicator:I4,group:Q4,groupHeading:K4,indicatorsContainer:_4,indicatorSeparator:F4,input:J4,loadingIndicator:N4,loadingMessage:y4,menu:f4,menuList:g4,menuPortal:S4,multiValue:rC,multiValueLabel:iC,multiValueRemove:oC,noOptionsMessage:x4,option:dC,placeholder:hC,singleValue:vC,valueContainer:E4},ej={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},tj=4,Qv=4,nj=38,rj=Qv*2,ij={baseUnit:Qv,controlHeight:nj,menuGutter:rj},Il={borderRadius:tj,colors:ej,spacing:ij},oj={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:jp(),captureMenuScroll:!jp(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:IC(),formatGroupLabel:GC,getOptionLabel:XC,getOptionValue:qC,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:JC,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!n4(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function Fp(e,t,n,r){var i=Gv(e,t,n),o=Xv(e,t,n),s=Kv(e,t),l=Js(e,t);return{type:"option",data:t,isDisabled:i,isSelected:o,label:s,value:l,index:r}}function gs(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(s,l){return Fp(e,s,t,l)}).filter(function(s){return Vp(e,s)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var o=Fp(e,n,t,r);return Vp(e,o)?o:void 0}).filter(o4)}function Yv(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,cd(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function zp(e,t){return e.reduce(function(n,r){return r.type==="group"?n.push.apply(n,cd(r.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),n},[])}function sj(e,t){return Yv(gs(e,t))}function Vp(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,o=t.isSelected,s=t.label,l=t.value;return(!Jv(e)||!o)&&qv(e,{label:s,value:l,data:i},r)}function aj(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var o=t.indexOf(n);if(o>-1)return n;if(i<t.length)return t[i]}return null}function lj(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var Dl=function(t,n){var r,i=(r=t.find(function(o){return o.data===n}))===null||r===void 0?void 0:r.id;return i||null},Kv=function(t,n){return t.getOptionLabel(n)},Js=function(t,n){return t.getOptionValue(n)};function Gv(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function Xv(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=Js(e,t);return n.some(function(i){return Js(e,i)===r})}function qv(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var Jv=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},uj=1,Zv=function(e){_k(n,e);var t=Rk(n);function n(r){var i;if(Ek(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.isAppleDevice=KC(),i.controlRef=null,i.getControlRef=function(a){i.controlRef=a},i.focusedOptionRef=null,i.getFocusedOptionRef=function(a){i.focusedOptionRef=a},i.menuListRef=null,i.getMenuListRef=function(a){i.menuListRef=a},i.inputRef=null,i.getInputRef=function(a){i.inputRef=a},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(a,u){var d=i.props,f=d.onChange,m=d.name;u.name=m,i.ariaOnChange(a,u),f(a,u)},i.setValue=function(a,u,d){var f=i.props,m=f.closeMenuOnSelect,y=f.isMulti,g=f.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:g}),m&&(i.setState({inputIsHiddenAfterUpdate:!y}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(a,{action:u,option:d})},i.selectOption=function(a){var u=i.props,d=u.blurInputOnSelect,f=u.isMulti,m=u.name,y=i.state.selectValue,g=f&&i.isOptionSelected(a,y),v=i.isOptionDisabled(a,y);if(g){var w=i.getOptionValue(a);i.setValue(y.filter(function(p){return i.getOptionValue(p)!==w}),"deselect-option",a)}else if(!v)f?i.setValue([].concat(cd(y),[a]),"select-option",a):i.setValue(a,"select-option");else{i.ariaOnChange(a,{action:"select-option",option:a,name:m});return}d&&i.blurInput()},i.removeValue=function(a){var u=i.props.isMulti,d=i.state.selectValue,f=i.getOptionValue(a),m=d.filter(function(g){return i.getOptionValue(g)!==f}),y=Xo(u,m,m[0]||null);i.onChange(y,{action:"remove-value",removedValue:a}),i.focusInput()},i.clearValue=function(){var a=i.state.selectValue;i.onChange(Xo(i.props.isMulti,[],null),{action:"clear",removedValues:a})},i.popValue=function(){var a=i.props.isMulti,u=i.state.selectValue,d=u[u.length-1],f=u.slice(0,u.length-1),m=Xo(a,f,f[0]||null);i.onChange(m,{action:"pop-value",removedValue:d})},i.getFocusedOptionId=function(a){return Dl(i.state.focusableOptionsWithIds,a)},i.getFocusableOptionsWithIds=function(){return zp(gs(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var a=arguments.length,u=new Array(a),d=0;d<a;d++)u[d]=arguments[d];return qk.apply(void 0,[i.props.classNamePrefix].concat(u))},i.getOptionLabel=function(a){return Kv(i.props,a)},i.getOptionValue=function(a){return Js(i.props,a)},i.getStyles=function(a,u){var d=i.props.unstyled,f=ZC[a](u,d);f.boxSizing="border-box";var m=i.props.styles[a];return m?m(f,u):f},i.getClassNames=function(a,u){var d,f;return(d=(f=i.props.classNames)[a])===null||d===void 0?void 0:d.call(f,u)},i.getElementId=function(a){return"".concat(i.state.instancePrefix,"-").concat(a)},i.getComponents=function(){return bC(i.props)},i.buildCategorizedOptions=function(){return gs(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return Yv(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(a,u){i.setState({ariaSelection:G({value:a},u)})},i.onMenuMouseDown=function(a){a.button===0&&(a.stopPropagation(),a.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(a){i.blockOptionHover=!1},i.onControlMouseDown=function(a){if(!a.defaultPrevented){var u=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?a.target.tagName!=="INPUT"&&a.target.tagName!=="TEXTAREA"&&i.onMenuClose():u&&i.openMenu("first"):(u&&(i.openAfterFocus=!0),i.focusInput()),a.target.tagName!=="INPUT"&&a.target.tagName!=="TEXTAREA"&&a.preventDefault()}},i.onDropdownIndicatorMouseDown=function(a){if(!(a&&a.type==="mousedown"&&a.button!==0)&&!i.props.isDisabled){var u=i.props,d=u.isMulti,f=u.menuIsOpen;i.focusInput(),f?(i.setState({inputIsHiddenAfterUpdate:!d}),i.onMenuClose()):i.openMenu("first"),a.preventDefault()}},i.onClearIndicatorMouseDown=function(a){a&&a.type==="mousedown"&&a.button!==0||(i.clearValue(),a.preventDefault(),i.openAfterFocus=!1,a.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(a){typeof i.props.closeMenuOnScroll=="boolean"?a.target instanceof HTMLElement&&Va(a.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(a)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(a){var u=a.touches,d=u&&u.item(0);d&&(i.initialTouchX=d.clientX,i.initialTouchY=d.clientY,i.userIsDragging=!1)},i.onTouchMove=function(a){var u=a.touches,d=u&&u.item(0);if(d){var f=Math.abs(d.clientX-i.initialTouchX),m=Math.abs(d.clientY-i.initialTouchY),y=5;i.userIsDragging=f>y||m>y}},i.onTouchEnd=function(a){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(a.target)&&i.menuListRef&&!i.menuListRef.contains(a.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(a){i.userIsDragging||i.onControlMouseDown(a)},i.onClearIndicatorTouchEnd=function(a){i.userIsDragging||i.onClearIndicatorMouseDown(a)},i.onDropdownIndicatorTouchEnd=function(a){i.userIsDragging||i.onDropdownIndicatorMouseDown(a)},i.handleInputChange=function(a){var u=i.props.inputValue,d=a.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(d,{action:"input-change",prevInputValue:u}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(a){i.props.onFocus&&i.props.onFocus(a),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(a){var u=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(a),i.onInputChange("",{action:"input-blur",prevInputValue:u}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(a){if(!(i.blockOptionHover||i.state.focusedOption===a)){var u=i.getFocusableOptions(),d=u.indexOf(a);i.setState({focusedOption:a,focusedOptionId:d>-1?i.getFocusedOptionId(a):null})}},i.shouldHideSelectedOptions=function(){return Jv(i.props)},i.onValueInputFocus=function(a){a.preventDefault(),a.stopPropagation(),i.focus()},i.onKeyDown=function(a){var u=i.props,d=u.isMulti,f=u.backspaceRemovesValue,m=u.escapeClearsValue,y=u.inputValue,g=u.isClearable,v=u.isDisabled,w=u.menuIsOpen,p=u.onKeyDown,h=u.tabSelectsValue,x=u.openMenuOnFocus,b=i.state,k=b.focusedOption,_=b.focusedValue,E=b.selectValue;if(!v&&!(typeof p=="function"&&(p(a),a.defaultPrevented))){switch(i.blockOptionHover=!0,a.key){case"ArrowLeft":if(!d||y)return;i.focusValue("previous");break;case"ArrowRight":if(!d||y)return;i.focusValue("next");break;case"Delete":case"Backspace":if(y)return;if(_)i.removeValue(_);else{if(!f)return;d?i.popValue():g&&i.clearValue()}break;case"Tab":if(i.isComposing||a.shiftKey||!w||!h||!k||x&&i.isOptionSelected(k,E))return;i.selectOption(k);break;case"Enter":if(a.keyCode===229)break;if(w){if(!k||i.isComposing)return;i.selectOption(k);break}return;case"Escape":w?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:y}),i.onMenuClose()):g&&m&&i.clearValue();break;case" ":if(y)return;if(!w){i.openMenu("first");break}if(!k)return;i.selectOption(k);break;case"ArrowUp":w?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":w?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!w)return;i.focusOption("pageup");break;case"PageDown":if(!w)return;i.focusOption("pagedown");break;case"Home":if(!w)return;i.focusOption("first");break;case"End":if(!w)return;i.focusOption("last");break;default:return}a.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++uj),i.state.selectValue=kp(r.value),r.menuIsOpen&&i.state.selectValue.length){var o=i.getFocusableOptionsWithIds(),s=i.buildFocusableOptions(),l=s.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=o,i.state.focusedOption=s[l],i.state.focusedOptionId=Dl(o,s[l])}return i}return Ok(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Cp(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(i){var o=this.props,s=o.isDisabled,l=o.menuIsOpen,a=this.state.isFocused;(a&&!s&&i.isDisabled||a&&l&&!i.menuIsOpen)&&this.focusInput(),a&&s&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!a&&!s&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Cp(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,o){this.props.onInputChange(i,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var o=this,s=this.state,l=s.selectValue,a=s.isFocused,u=this.buildFocusableOptions(),d=i==="first"?0:u.length-1;if(!this.props.isMulti){var f=u.indexOf(l[0]);f>-1&&(d=f)}this.scrollToFocusedOptionOnUpdate=!(a&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[d],focusedOptionId:this.getFocusedOptionId(u[d])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(i){var o=this.state,s=o.selectValue,l=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var a=s.indexOf(l);l||(a=-1);var u=s.length-1,d=-1;if(s.length){switch(i){case"previous":a===0?d=0:a===-1?d=u:d=a-1;break;case"next":a>-1&&a<u&&(d=a+1);break}this.setState({inputIsHidden:d!==-1,focusedValue:s[d]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,s=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var a=0,u=l.indexOf(s);s||(u=-1),i==="up"?a=u>0?u-1:l.length-1:i==="down"?a=(u+1)%l.length:i==="pageup"?(a=u-o,a<0&&(a=0)):i==="pagedown"?(a=u+o,a>l.length-1&&(a=l.length-1)):i==="last"&&(a=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[a],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[a])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Il):G(G({},Il),this.props.theme):Il}},{key:"getCommonProps",value:function(){var i=this.clearValue,o=this.cx,s=this.getStyles,l=this.getClassNames,a=this.getValue,u=this.selectOption,d=this.setValue,f=this.props,m=f.isMulti,y=f.isRtl,g=f.options,v=this.hasValue();return{clearValue:i,cx:o,getStyles:s,getClassNames:l,getValue:a,hasValue:v,isMulti:m,isRtl:y,options:g,selectOption:u,selectProps:f,setValue:d,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,o=i.isClearable,s=i.isMulti;return o===void 0?s:o}},{key:"isOptionDisabled",value:function(i,o){return Gv(this.props,i,o)}},{key:"isOptionSelected",value:function(i,o){return Xv(this.props,i,o)}},{key:"filterOption",value:function(i,o){return qv(this.props,i,o)}},{key:"formatOptionLabel",value:function(i,o){if(typeof this.props.formatOptionLabel=="function"){var s=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(i,{context:o,inputValue:s,selectValue:l})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,o=i.isDisabled,s=i.isSearchable,l=i.inputId,a=i.inputValue,u=i.tabIndex,d=i.form,f=i.menuIsOpen,m=i.required,y=this.getComponents(),g=y.Input,v=this.state,w=v.inputIsHidden,p=v.ariaSelection,h=this.commonProps,x=l||this.getElementId("input"),b=G(G(G({"aria-autocomplete":"list","aria-expanded":f,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":m,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},f&&{"aria-controls":this.getElementId("listbox")}),!s&&{"aria-readonly":!0}),this.hasValue()?(p==null?void 0:p.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return s?M.createElement(g,q({},h,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:x,innerRef:this.getInputRef,isDisabled:o,isHidden:w,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:d,type:"text",value:a},b)):M.createElement(LC,q({id:x,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Xs,onFocus:this.onInputFocus,disabled:o,tabIndex:u,inputMode:"none",form:d,value:""},b))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,o=this.getComponents(),s=o.MultiValue,l=o.MultiValueContainer,a=o.MultiValueLabel,u=o.MultiValueRemove,d=o.SingleValue,f=o.Placeholder,m=this.commonProps,y=this.props,g=y.controlShouldRenderValue,v=y.isDisabled,w=y.isMulti,p=y.inputValue,h=y.placeholder,x=this.state,b=x.selectValue,k=x.focusedValue,_=x.isFocused;if(!this.hasValue()||!g)return p?null:M.createElement(f,q({},m,{key:"placeholder",isDisabled:v,isFocused:_,innerProps:{id:this.getElementId("placeholder")}}),h);if(w)return b.map(function(P,T){var I=P===k,B="".concat(i.getOptionLabel(P),"-").concat(i.getOptionValue(P));return M.createElement(s,q({},m,{components:{Container:l,Label:a,Remove:u},isFocused:I,isDisabled:v,key:B,index:T,removeProps:{onClick:function(){return i.removeValue(P)},onTouchEnd:function(){return i.removeValue(P)},onMouseDown:function(D){D.preventDefault()}},data:P}),i.formatOptionLabel(P,"value"))});if(p)return null;var E=b[0];return M.createElement(d,q({},m,{data:E,isDisabled:v}),this.formatOptionLabel(E,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),o=i.ClearIndicator,s=this.commonProps,l=this.props,a=l.isDisabled,u=l.isLoading,d=this.state.isFocused;if(!this.isClearable()||!o||a||!this.hasValue()||u)return null;var f={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return M.createElement(o,q({},s,{innerProps:f,isFocused:d}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),o=i.LoadingIndicator,s=this.commonProps,l=this.props,a=l.isDisabled,u=l.isLoading,d=this.state.isFocused;if(!o||!u)return null;var f={"aria-hidden":"true"};return M.createElement(o,q({},s,{innerProps:f,isDisabled:a,isFocused:d}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator,s=i.IndicatorSeparator;if(!o||!s)return null;var l=this.commonProps,a=this.props.isDisabled,u=this.state.isFocused;return M.createElement(s,q({},l,{isDisabled:a,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator;if(!o)return null;var s=this.commonProps,l=this.props.isDisabled,a=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return M.createElement(o,q({},s,{innerProps:u,isDisabled:l,isFocused:a}))}},{key:"renderMenu",value:function(){var i=this,o=this.getComponents(),s=o.Group,l=o.GroupHeading,a=o.Menu,u=o.MenuList,d=o.MenuPortal,f=o.LoadingMessage,m=o.NoOptionsMessage,y=o.Option,g=this.commonProps,v=this.state.focusedOption,w=this.props,p=w.captureMenuScroll,h=w.inputValue,x=w.isLoading,b=w.loadingMessage,k=w.minMenuHeight,_=w.maxMenuHeight,E=w.menuIsOpen,P=w.menuPlacement,T=w.menuPosition,I=w.menuPortalTarget,B=w.menuShouldBlockScroll,A=w.menuShouldScrollIntoView,D=w.noOptionsMessage,X=w.onMenuScrollToTop,Z=w.onMenuScrollToBottom;if(!E)return null;var ee=function(Ee,we){var $e=Ee.type,he=Ee.data,be=Ee.isDisabled,Ze=Ee.isSelected,vt=Ee.label,F=Ee.value,H=v===he,ie=be?void 0:function(){return i.onOptionHover(he)},oe=be?void 0:function(){return i.selectOption(he)},te="".concat(i.getElementId("option"),"-").concat(we),ae={id:te,onClick:oe,onMouseMove:ie,onMouseOver:ie,tabIndex:-1,role:"option","aria-selected":i.isAppleDevice?void 0:Ze};return M.createElement(y,q({},g,{innerProps:ae,data:he,isDisabled:be,isSelected:Ze,key:te,label:vt,type:$e,value:F,isFocused:H,innerRef:H?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(Ee.data,"menu"))},ve;if(this.hasOptions())ve=this.getCategorizedOptions().map(function(ne){if(ne.type==="group"){var Ee=ne.data,we=ne.options,$e=ne.index,he="".concat(i.getElementId("group"),"-").concat($e),be="".concat(he,"-heading");return M.createElement(s,q({},g,{key:he,data:Ee,options:we,Heading:l,headingProps:{id:be,data:ne.data},label:i.formatGroupLabel(ne.data)}),ne.options.map(function(Ze){return ee(Ze,"".concat($e,"-").concat(Ze.index))}))}else if(ne.type==="option")return ee(ne,"".concat(ne.index))});else if(x){var z=b({inputValue:h});if(z===null)return null;ve=M.createElement(f,g,z)}else{var Q=D({inputValue:h});if(Q===null)return null;ve=M.createElement(m,g,Q)}var Y={minMenuHeight:k,maxMenuHeight:_,menuPlacement:P,menuPosition:T,menuShouldScrollIntoView:A},ce=M.createElement(p4,q({},g,Y),function(ne){var Ee=ne.ref,we=ne.placerProps,$e=we.placement,he=we.maxHeight;return M.createElement(a,q({},g,Y,{innerRef:Ee,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:x,placement:$e}),M.createElement($C,{captureEnabled:p,onTopArrive:X,onBottomArrive:Z,lockEnabled:B},function(be){return M.createElement(u,q({},g,{innerRef:function(vt){i.getMenuListRef(vt),be(vt)},innerProps:{role:"listbox","aria-multiselectable":g.isMulti,id:i.getElementId("listbox")},isLoading:x,maxHeight:he,focusedOption:v}),ve)}))});return I||T==="fixed"?M.createElement(d,q({},g,{appendTo:I,controlElement:this.controlRef,menuPlacement:P,menuPosition:T}),ce):ce}},{key:"renderFormField",value:function(){var i=this,o=this.props,s=o.delimiter,l=o.isDisabled,a=o.isMulti,u=o.name,d=o.required,f=this.state.selectValue;if(d&&!this.hasValue()&&!l)return M.createElement(HC,{name:u,onFocus:this.onValueInputFocus});if(!(!u||l))if(a)if(s){var m=f.map(function(v){return i.getOptionValue(v)}).join(s);return M.createElement("input",{name:u,type:"hidden",value:m})}else{var y=f.length>0?f.map(function(v,w){return M.createElement("input",{key:"i-".concat(w),name:u,type:"hidden",value:i.getOptionValue(v)})}):M.createElement("input",{name:u,type:"hidden",value:""});return M.createElement("div",null,y)}else{var g=f[0]?this.getOptionValue(f[0]):"";return M.createElement("input",{name:u,type:"hidden",value:g})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,o=this.state,s=o.ariaSelection,l=o.focusedOption,a=o.focusedValue,u=o.isFocused,d=o.selectValue,f=this.getFocusableOptions();return M.createElement(PC,q({},i,{id:this.getElementId("live-region"),ariaSelection:s,focusedOption:l,focusedValue:a,isFocused:u,selectValue:d,focusableOptions:f,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),o=i.Control,s=i.IndicatorsContainer,l=i.SelectContainer,a=i.ValueContainer,u=this.props,d=u.className,f=u.id,m=u.isDisabled,y=u.menuIsOpen,g=this.state.isFocused,v=this.commonProps=this.getCommonProps();return M.createElement(l,q({},v,{className:d,innerProps:{id:f,onKeyDown:this.onKeyDown},isDisabled:m,isFocused:g}),this.renderLiveRegion(),M.createElement(o,q({},v,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:m,isFocused:g,menuIsOpen:y}),M.createElement(a,q({},v,{isDisabled:m}),this.renderPlaceholderOrValue(),this.renderInput()),M.createElement(s,q({},v,{isDisabled:m}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,o){var s=o.prevProps,l=o.clearFocusValueOnUpdate,a=o.inputIsHiddenAfterUpdate,u=o.ariaSelection,d=o.isFocused,f=o.prevWasFocused,m=o.instancePrefix,y=i.options,g=i.value,v=i.menuIsOpen,w=i.inputValue,p=i.isMulti,h=kp(g),x={};if(s&&(g!==s.value||y!==s.options||v!==s.menuIsOpen||w!==s.inputValue)){var b=v?sj(i,h):[],k=v?zp(gs(i,h),"".concat(m,"-option")):[],_=l?aj(o,h):null,E=lj(o,b),P=Dl(k,E);x={selectValue:h,focusedOption:E,focusedOptionId:P,focusableOptionsWithIds:k,focusedValue:_,clearFocusValueOnUpdate:!1}}var T=a!=null&&i!==s?{inputIsHidden:a,inputIsHiddenAfterUpdate:void 0}:{},I=u,B=d&&f;return d&&!B&&(I={value:Xo(p,h,h[0]||null),options:h,action:"initial-input-focus"},B=!f),(u==null?void 0:u.action)==="initial-input-focus"&&(I=null),G(G(G({},x),T),{},{prevProps:i,ariaSelection:I,prevWasFocused:B})}}]),n}(M.Component);Zv.defaultProps=oj;var cj=M.forwardRef(function(e,t){var n=jk(e);return M.createElement(Zv,q({ref:t},n))}),dj=cj;const fj=(e,t)=>{const[n,r]=M.useState(()=>{try{const o=window.localStorage.getItem(e);return o?JSON.parse(o):t}catch(o){return console.error("Error loading data from localStorage:",o),t}});return[n,o=>{try{const s=o instanceof Function?o(n):o;r(s),window.localStorage.setItem(e,JSON.stringify(s))}catch(s){console.error("Error storing data to localStorage:",s)}}]},Np=[{value:"",label:"Оберіть послугу"},{value:"Менторство та консультації",label:"Менторство та консультації"},{value:"Діагностика",label:"Діагностика"},{value:"Стратегії",label:"Стратегії"},{value:"Навчання",label:"Навчання"},{value:"Інше",label:"Інше"}],$p="/healthy-management-project/assets/computer1x-nLk1eyXX.webp",pj="/healthy-management-project/assets/computer@2x-oGWk-qXD.webp",Up="/healthy-management-project/assets/mob_computer1x-gdjE7oao.webp",hj="/healthy-management-project/assets/mob_computer@2x-JptvcU_h.webp",ln=()=>c.jsx("svg",{width:"8",height:"8",children:c.jsx("use",{href:`${fs}#star`})});var ex={exports:{}};function mj(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Ll=mj(M),gj=ho;function vj(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var i=n[r],o=Object.getOwnPropertyDescriptor(t,i);o&&o.configurable&&e[i]===void 0&&Object.defineProperty(e,i,o)}return e}function Xu(){return(Xu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function xj(e,t){e.prototype=Object.create(t.prototype),vj(e.prototype.constructor=e,t)}function yj(e,t){if(e==null)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(i[n]=e[n]);return i}function kr(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var wj=function(e,t,n,r,i,o,s,l){if(!e){var a;if(t===void 0)a=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,o,s,l],d=0;(a=new Error(t.replace(/%s/g,function(){return u[d++]}))).name="Invariant Violation"}throw a.framesToPop=1,a}},Bp=wj;function Hp(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var r=e.createTextRange();r.collapse(!0),r.moveStart("character",t),r.moveEnd("character",n-t),r.select()}}function bj(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===e&&(t=-r.moveStart("character",-e.value.length),n=-r.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}var Sj={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},kj="_";function Wp(e,t,n){var r="",i="",o=null,s=[];if(t===void 0&&(t=kj),n==null&&(n=Sj),!e||typeof e!="string")return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return e.split("").forEach(function(a){l=!l&&a==="\\"||(l||!n[a]?(s.push(r.length),r.length===s.length-1&&(i+=a)):o=r.length+1,r+=a,!1)}),{maskChar:t,formatChars:n,prefix:i,mask:r,lastEditablePosition:o,permanents:s}}function kt(e,t){return e.permanents.indexOf(t)!==-1}function Na(e,t,n){var r=e.mask,i=e.formatChars;if(!n)return!1;if(kt(e,t))return r[t]===n;var o=i[r[t]];return new RegExp(o).test(n)}function Qp(e,t){return t.split("").every(function(n,r){return kt(e,r)||!Na(e,r,n)})}function Oi(e,t){var n=e.maskChar,r=e.prefix;if(!n){for(;t.length>r.length&&kt(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var i=r.length,o=t.length;o>=r.length;o--){var s=t[o];if(!kt(e,o)&&Na(e,o,s)){i=o+1;break}}return i}function tx(e,t){return Oi(e,t)===e.mask.length}function dn(e,t){var n=e.maskChar,r=e.mask,i=e.prefix;if(!n){for((t=qu(e,"",t,0)).length<i.length&&(t=i);t.length<r.length&&kt(e,t.length);)t+=r[t.length];return t}if(t)return qu(e,dn(e,""),t,0);for(var o=0;o<r.length;o++)kt(e,o)?t+=r[o]:t+=n;return t}function Cj(e,t,n,r){var i=n+r,o=e.maskChar,s=e.mask,l=e.prefix,a=t.split("");if(o)return a.map(function(d,f){return f<n||i<=f?d:kt(e,f)?s[f]:o}).join("");for(var u=i;u<a.length;u++)kt(e,u)&&(a[u]="");return n=Math.max(l.length,n),a.splice(n,i-n),t=a.join(""),dn(e,t)}function qu(e,t,n,r){var i=e.mask,o=e.maskChar,s=e.prefix,l=n.split(""),a=tx(e,t);return!o&&r>t.length&&(t+=i.slice(t.length,r)),l.every(function(u){for(;y=u,kt(e,m=r)&&y!==i[m];){if(r>=t.length&&(t+=i[r]),d=u,f=r,o&&kt(e,f)&&d===o)return!0;if(++r>=i.length)return!1}var d,f,m,y;return!Na(e,r,u)&&u!==o||(r<t.length?t=o||a||r<s.length?t.slice(0,r)+u+t.slice(r+1):(t=t.slice(0,r)+u+t.slice(r),dn(e,t)):o||(t+=u),++r<i.length)}),t}function jj(e,t,n,r){var i=e.mask,o=e.maskChar,s=n.split(""),l=r;return s.every(function(a){for(;d=a,kt(e,u=r)&&d!==i[u];)if(++r>=i.length)return!1;var u,d;return(Na(e,r,a)||a===o)&&r++,r<i.length}),r-l}function Ej(e,t){for(var n=t;0<=n;--n)if(!kt(e,n))return n;return null}function zi(e,t){for(var n=e.mask,r=t;r<n.length;++r)if(!kt(e,r))return r;return null}function Al(e){return e||e===0?e+"":""}function Oj(e,t,n,r,i){var o=e.mask,s=e.prefix,l=e.lastEditablePosition,a=t,u="",d=0,f=0,m=Math.min(i.start,n.start);return n.end>i.start?f=(d=jj(e,r,u=a.slice(i.start,n.end),m))?i.length:0:a.length<r.length&&(f=r.length-a.length),a=r,f&&(f===1&&!i.length&&(m=i.start===n.start?zi(e,n.start):Ej(e,n.start)),a=Cj(e,a,m,f)),a=qu(e,a,u,m),(m+=d)>=o.length?m=o.length:m<s.length&&!d?m=s.length:m>=s.length&&m<l&&d&&(m=zi(e,m)),u||(u=null),{value:a=dn(e,a),enteredString:u,selection:{start:m,end:m}}}function _j(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}function ct(e){return typeof e=="function"}function Pj(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function nx(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function Yp(e){return(nx()?Pj():function(){return setTimeout(e,1e3/60)})(e)}function Fl(e){(nx()||clearTimeout)(e)}var Tj=function(e){function t(r){var i=e.call(this,r)||this;i.focused=!1,i.mounted=!1,i.previousSelection=null,i.selectionDeferId=null,i.saveSelectionLoopDeferId=null,i.saveSelectionLoop=function(){i.previousSelection=i.getSelection(),i.saveSelectionLoopDeferId=Yp(i.saveSelectionLoop)},i.runSaveSelectionLoop=function(){i.saveSelectionLoopDeferId===null&&i.saveSelectionLoop()},i.stopSaveSelectionLoop=function(){i.saveSelectionLoopDeferId!==null&&(Fl(i.saveSelectionLoopDeferId),i.saveSelectionLoopDeferId=null,i.previousSelection=null)},i.getInputDOMNode=function(){if(!i.mounted)return null;var g=gj.findDOMNode(kr(kr(i))),v=typeof window<"u"&&g instanceof window.Element;if(g&&!v)return null;if(g.nodeName!=="INPUT"&&(g=g.querySelector("input")),!g)throw new Error("react-input-mask: inputComponent doesn't contain input node");return g},i.getInputValue=function(){var g=i.getInputDOMNode();return g?g.value:null},i.setInputValue=function(g){var v=i.getInputDOMNode();v&&(i.value=g,v.value=g)},i.setCursorToEnd=function(){var g=Oi(i.maskOptions,i.value),v=zi(i.maskOptions,g);v!==null&&i.setCursorPosition(v)},i.setSelection=function(g,v,w){w===void 0&&(w={});var p=i.getInputDOMNode(),h=i.isFocused();p&&h&&(w.deferred||Hp(p,g,v),i.selectionDeferId!==null&&Fl(i.selectionDeferId),i.selectionDeferId=Yp(function(){i.selectionDeferId=null,Hp(p,g,v)}),i.previousSelection={start:g,end:v,length:Math.abs(v-g)})},i.getSelection=function(){return bj(i.getInputDOMNode())},i.getCursorPosition=function(){return i.getSelection().start},i.setCursorPosition=function(g){i.setSelection(g,g)},i.isFocused=function(){return i.focused},i.getBeforeMaskedValueChangeConfig=function(){var g=i.maskOptions,v=g.mask,w=g.maskChar,p=g.permanents,h=g.formatChars;return{mask:v,maskChar:w,permanents:p,alwaysShowMask:!!i.props.alwaysShowMask,formatChars:h}},i.isInputAutofilled=function(g,v,w,p){var h=i.getInputDOMNode();try{if(h.matches(":-webkit-autofill"))return!0}catch{}return!i.focused||p.end<w.length&&v.end===g.length},i.onChange=function(g){var v=kr(kr(i)).beforePasteState,w=kr(kr(i)).previousSelection,p=i.props.beforeMaskedValueChange,h=i.getInputValue(),x=i.value,b=i.getSelection();i.isInputAutofilled(h,b,x,w)&&(x=dn(i.maskOptions,""),w={start:0,end:0,length:0}),v&&(w=v.selection,x=v.value,b={start:w.start+h.length,end:w.start+h.length,length:0},h=x.slice(0,w.start)+h+x.slice(w.end),i.beforePasteState=null);var k=Oj(i.maskOptions,h,b,x,w),_=k.enteredString,E=k.selection,P=k.value;if(ct(p)){var T=p({value:P,selection:E},{value:x,selection:w},_,i.getBeforeMaskedValueChangeConfig());P=T.value,E=T.selection}i.setInputValue(P),ct(i.props.onChange)&&i.props.onChange(g),i.isWindowsPhoneBrowser?i.setSelection(E.start,E.end,{deferred:!0}):i.setSelection(E.start,E.end)},i.onFocus=function(g){var v=i.props.beforeMaskedValueChange,w=i.maskOptions,p=w.mask,h=w.prefix;if(i.focused=!0,i.mounted=!0,p){if(i.value)Oi(i.maskOptions,i.value)<i.maskOptions.mask.length&&i.setCursorToEnd();else{var x=dn(i.maskOptions,h),b=dn(i.maskOptions,x),k=Oi(i.maskOptions,b),_=zi(i.maskOptions,k),E={start:_,end:_};if(ct(v)){var P=v({value:b,selection:E},{value:i.value,selection:null},null,i.getBeforeMaskedValueChangeConfig());b=P.value,E=P.selection}var T=b!==i.getInputValue();T&&i.setInputValue(b),T&&ct(i.props.onChange)&&i.props.onChange(g),i.setSelection(E.start,E.end)}i.runSaveSelectionLoop()}ct(i.props.onFocus)&&i.props.onFocus(g)},i.onBlur=function(g){var v=i.props.beforeMaskedValueChange,w=i.maskOptions.mask;if(i.stopSaveSelectionLoop(),i.focused=!1,w&&!i.props.alwaysShowMask&&Qp(i.maskOptions,i.value)){var p="";ct(v)&&(p=v({value:p,selection:null},{value:i.value,selection:i.previousSelection},null,i.getBeforeMaskedValueChangeConfig()).value);var h=p!==i.getInputValue();h&&i.setInputValue(p),h&&ct(i.props.onChange)&&i.props.onChange(g)}ct(i.props.onBlur)&&i.props.onBlur(g)},i.onMouseDown=function(g){if(!i.focused&&document.addEventListener){i.mouseDownX=g.clientX,i.mouseDownY=g.clientY,i.mouseDownTime=new Date().getTime();var v=function w(p){if(document.removeEventListener("mouseup",w),i.focused){var h=Math.abs(p.clientX-i.mouseDownX),x=Math.abs(p.clientY-i.mouseDownY),b=Math.max(h,x),k=new Date().getTime()-i.mouseDownTime;(b<=10&&k<=200||b<=5&&k<=300)&&i.setCursorToEnd()}};document.addEventListener("mouseup",v)}ct(i.props.onMouseDown)&&i.props.onMouseDown(g)},i.onPaste=function(g){ct(i.props.onPaste)&&i.props.onPaste(g),g.defaultPrevented||(i.beforePasteState={value:i.getInputValue(),selection:i.getSelection()},i.setInputValue(""))},i.handleRef=function(g){i.props.children==null&&ct(i.props.inputRef)&&i.props.inputRef(g)};var o=r.mask,s=r.maskChar,l=r.formatChars,a=r.alwaysShowMask,u=r.beforeMaskedValueChange,d=r.defaultValue,f=r.value;i.maskOptions=Wp(o,s,l),d==null&&(d=""),f==null&&(f=d);var m=Al(f);if(i.maskOptions.mask&&(a||m)&&(m=dn(i.maskOptions,m),ct(u))){var y=r.value;r.value==null&&(y=d),m=u({value:m,selection:null},{value:y=Al(y),selection:null},null,i.getBeforeMaskedValueChangeConfig()).value}return i.value=m,i}xj(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=_j(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var r=this.previousSelection,i=this.props,o=i.beforeMaskedValueChange,s=i.alwaysShowMask,l=i.mask,a=i.maskChar,u=i.formatChars,d=this.maskOptions,f=s||this.isFocused(),m=this.props.value!=null,y=m?Al(this.props.value):this.value,g=r?r.start:null;if(this.maskOptions=Wp(l,a,u),this.maskOptions.mask){!d.mask&&this.isFocused()&&this.runSaveSelectionLoop();var v=this.maskOptions.mask&&this.maskOptions.mask!==d.mask;if(d.mask||m||(y=this.getInputValue()),(v||this.maskOptions.mask&&(y||f))&&(y=dn(this.maskOptions,y)),v){var w=Oi(this.maskOptions,y);(g===null||w<g)&&(g=tx(this.maskOptions,y)?w:zi(this.maskOptions,w))}!this.maskOptions.mask||!Qp(this.maskOptions,y)||f||m&&this.props.value||(y="");var p={start:g,end:g};if(ct(o)){var h=o({value:y,selection:p},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());y=h.value,p=h.selection}this.value=y;var x=this.getInputValue()!==this.value;x?(this.setInputValue(this.value),this.forceUpdate()):v&&this.forceUpdate();var b=!1;p.start!=null&&p.end!=null&&(b=!r||r.start!==p.start||r.end!==p.end),(b||x)&&this.setSelection(p.start,p.end)}else d.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&Fl(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var r,i=this.props,o=(i.mask,i.alwaysShowMask,i.maskChar,i.formatChars,i.inputRef,i.beforeMaskedValueChange,i.children),s=yj(i,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(o){ct(o)||Bp(!1);var l=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],a=Xu({},s);l.forEach(function(d){return delete a[d]}),r=o(a),l.filter(function(d){return r.props[d]!=null&&r.props[d]!==s[d]}).length&&Bp(!1)}else r=Ll.createElement("input",Xu({ref:this.handleRef},s));var u={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(s.disabled||s.readOnly||(u.onChange=this.onChange,u.onPaste=this.onPaste,u.onMouseDown=this.onMouseDown),s.value!=null&&(u.value=this.value)),r=Ll.cloneElement(r,u)},t}(Ll.Component),Mj=Tj;ex.exports=Mj;var Rj=ex.exports;const Ij=ao(Rj),Dj=C.div`
  padding: 80px 0;
`,Lj=C.h2`
  margin-bottom: 40px;
  font-size: 48px;
  font-weight: 600;
  line-height: 1.17;
  color: var(--typography-black);
`,Aj=C.div`
  display: flex;
  gap: 24px;
  width: 100%;
  max-height: 860px;
`,Kp=C.img`
  width: 100%;
  height: 100%;
`,Fj=C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  flex: 1 0 0;
  max-width: 828px;
  padding: 80px;
  border-radius: 16px;
  background-color: var(--background-white);
`,zj=C.h3`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.33;
  color: var(--primary-bluedark);
`,Vj=C.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
`,Gp=C.label`
  display: flex;
  height: 104px;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  color: var(--primary-bluedark);
`,Nj=C.label`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  gap: 4px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  color: var(--primary-bluedark);
`,$j=C(ln)`
  vertical-align: super;
`,Xp=C.input`
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
`,Uj=C.div`
  display: flex;
  gap: 8px;
`,qp=C.label`
  display: flex;
  height: 104px;
  width: 100%;
  max-width: 330px;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  color: var(--primary-bluedark);
`,Bj=C(Ij)`
  display: flex;
  width: 100%;
  max-width: 330px;
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
`,Hj=C.textarea`
  width: 100%;
  display: flex;
  height: 168px;
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
`,wi=C.p`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  color: var(--secondary-red);
`,Wj=C.button`
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
`;var xo=e=>e.type==="checkbox",Fr=e=>e instanceof Date,st=e=>e==null;const rx=e=>typeof e=="object";var He=e=>!st(e)&&!Array.isArray(e)&&rx(e)&&!Fr(e),ix=e=>He(e)&&e.target?xo(e.target)?e.target.checked:e.target.value:e,Qj=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,ox=(e,t)=>e.has(Qj(t)),Yj=e=>{const t=e.constructor&&e.constructor.prototype;return He(t)&&t.hasOwnProperty("isPrototypeOf")},gd=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Ft(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(gd&&(e instanceof Blob||e instanceof FileList))&&(n||He(e)))if(t=n?[]:{},!n&&!Yj(e))t=e;else for(const r in e)e.hasOwnProperty(r)&&(t[r]=Ft(e[r]));else return e;return t}var yo=e=>Array.isArray(e)?e.filter(Boolean):[],De=e=>e===void 0,U=(e,t,n)=>{if(!t||!He(e))return n;const r=yo(t.split(/[,[\].]+?/)).reduce((i,o)=>st(i)?i:i[o],e);return De(r)||r===e?De(e[t])?n:e[t]:r},Zt=e=>typeof e=="boolean";const Zs={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},$t={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},an={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Kj=Ce.createContext(null),vd=()=>Ce.useContext(Kj);var sx=(e,t,n,r=!0)=>{const i={defaultValues:t._defaultValues};for(const o in e)Object.defineProperty(i,o,{get:()=>{const s=o;return t._proxyFormState[s]!==$t.all&&(t._proxyFormState[s]=!r||$t.all),n&&(n[s]=!0),e[s]}});return i},Ot=e=>He(e)&&!Object.keys(e).length,ax=(e,t,n,r)=>{n(e);const{name:i,...o}=e;return Ot(o)||Object.keys(o).length>=Object.keys(t).length||Object.keys(o).find(s=>t[s]===(!r||$t.all))},vs=e=>Array.isArray(e)?e:[e],lx=(e,t,n)=>!e||!t||e===t||vs(e).some(r=>r&&(n?r===t:r.startsWith(t)||t.startsWith(r)));function xd(e){const t=Ce.useRef(e);t.current=e,Ce.useEffect(()=>{const n=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}function Gj(e){const t=vd(),{control:n=t.control,disabled:r,name:i,exact:o}=e||{},[s,l]=Ce.useState(n._formState),a=Ce.useRef(!0),u=Ce.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),d=Ce.useRef(i);return d.current=i,xd({disabled:r,next:f=>a.current&&lx(d.current,f.name,o)&&ax(f,u.current,n._updateFormState)&&l({...n._formState,...f}),subject:n._subjects.state}),Ce.useEffect(()=>(a.current=!0,u.current.isValid&&n._updateValid(!0),()=>{a.current=!1}),[n]),sx(s,n,u.current,!1)}var tn=e=>typeof e=="string",ux=(e,t,n,r,i)=>tn(e)?(r&&t.watch.add(e),U(n,e,i)):Array.isArray(e)?e.map(o=>(r&&t.watch.add(o),U(n,o))):(r&&(t.watchAll=!0),n);function Xj(e){const t=vd(),{control:n=t.control,name:r,defaultValue:i,disabled:o,exact:s}=e||{},l=Ce.useRef(r);l.current=r,xd({disabled:o,subject:n._subjects.values,next:d=>{lx(l.current,d.name,s)&&u(Ft(ux(l.current,n._names,d.values||n._formValues,!1,i)))}});const[a,u]=Ce.useState(n._getWatch(r,i));return Ce.useEffect(()=>n._removeUnmounted()),a}var yd=e=>/^\w*$/.test(e),cx=e=>yo(e.replace(/["|']|\]/g,"").split(/\.|\[/));function ke(e,t,n){let r=-1;const i=yd(t)?[t]:cx(t),o=i.length,s=o-1;for(;++r<o;){const l=i[r];let a=n;if(r!==s){const u=e[l];a=He(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}e[l]=a,e=e[l]}return e}function qj(e){const t=vd(),{name:n,disabled:r,control:i=t.control,shouldUnregister:o}=e,s=ox(i._names.array,n),l=Xj({control:i,name:n,defaultValue:U(i._formValues,n,U(i._defaultValues,n,e.defaultValue)),exact:!0}),a=Gj({control:i,name:n}),u=Ce.useRef(i.register(n,{...e.rules,value:l}));return u.current=i.register(n,e.rules),Ce.useEffect(()=>{const d=i._options.shouldUnregister||o,f=(m,y)=>{const g=U(i._fields,m);g&&(g._f.mount=y)};if(f(n,!0),d){const m=Ft(U(i._options.defaultValues,n));ke(i._defaultValues,n,m),De(U(i._formValues,n))&&ke(i._formValues,n,m)}return()=>{(s?d&&!i._state.action:d)?i.unregister(n):f(n,!1)}},[n,i,s,o]),Ce.useEffect(()=>{U(i._fields,n)&&i._updateDisabledField({disabled:r,fields:i._fields,name:n,value:U(i._fields,n)._f.value})},[r,n,i]),{field:{name:n,value:l,...Zt(r)||Zt(a.disabled)?{disabled:a.disabled||r}:{},onChange:Ce.useCallback(d=>u.current.onChange({target:{value:ix(d),name:n},type:Zs.CHANGE}),[n]),onBlur:Ce.useCallback(()=>u.current.onBlur({target:{value:U(i._formValues,n),name:n},type:Zs.BLUR}),[n,i]),ref:d=>{const f=U(i._fields,n);f&&d&&(f._f.ref={focus:()=>d.focus(),select:()=>d.select(),setCustomValidity:m=>d.setCustomValidity(m),reportValidity:()=>d.reportValidity()})}},formState:a,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!U(a.errors,n)},isDirty:{enumerable:!0,get:()=>!!U(a.dirtyFields,n)},isTouched:{enumerable:!0,get:()=>!!U(a.touchedFields,n)},error:{enumerable:!0,get:()=>U(a.errors,n)}})}}const Jj=e=>e.render(qj(e));var Zj=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{},Jp=e=>({isOnSubmit:!e||e===$t.onSubmit,isOnBlur:e===$t.onBlur,isOnChange:e===$t.onChange,isOnAll:e===$t.all,isOnTouch:e===$t.onTouched}),Zp=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const xs=(e,t,n,r)=>{for(const i of n||Object.keys(e)){const o=U(e,i);if(o){const{_f:s,...l}=o;if(s){if(s.refs&&s.refs[0]&&t(s.refs[0],i)&&!r)break;if(s.ref&&t(s.ref,s.name)&&!r)break}else He(l)&&xs(l,t)}}};var eE=(e,t,n)=>{const r=yo(U(e,n));return ke(r,"root",t[n]),ke(e,n,r),e},wd=e=>e.type==="file",$n=e=>typeof e=="function",ea=e=>{if(!gd)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},ys=e=>tn(e),bd=e=>e.type==="radio",ta=e=>e instanceof RegExp;const eh={value:!1,isValid:!1},th={value:!0,isValid:!0};var dx=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!De(e[0].attributes.value)?De(e[0].value)||e[0].value===""?th:{value:e[0].value,isValid:!0}:th:eh}return eh};const nh={isValid:!1,value:null};var fx=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,nh):nh;function rh(e,t,n="validate"){if(ys(e)||Array.isArray(e)&&e.every(ys)||Zt(e)&&!e)return{type:n,message:ys(e)?e:"",ref:t}}var Cr=e=>He(e)&&!ta(e)?e:{value:e,message:""},ih=async(e,t,n,r,i)=>{const{ref:o,refs:s,required:l,maxLength:a,minLength:u,min:d,max:f,pattern:m,validate:y,name:g,valueAsNumber:v,mount:w,disabled:p}=e._f,h=U(t,g);if(!w||p)return{};const x=s?s[0]:o,b=A=>{r&&x.reportValidity&&(x.setCustomValidity(Zt(A)?"":A||""),x.reportValidity())},k={},_=bd(o),E=xo(o),P=_||E,T=(v||wd(o))&&De(o.value)&&De(h)||ea(o)&&o.value===""||h===""||Array.isArray(h)&&!h.length,I=Zj.bind(null,g,n,k),B=(A,D,X,Z=an.maxLength,ee=an.minLength)=>{const ve=A?D:X;k[g]={type:A?Z:ee,message:ve,ref:o,...I(A?Z:ee,ve)}};if(i?!Array.isArray(h)||!h.length:l&&(!P&&(T||st(h))||Zt(h)&&!h||E&&!dx(s).isValid||_&&!fx(s).isValid)){const{value:A,message:D}=ys(l)?{value:!!l,message:l}:Cr(l);if(A&&(k[g]={type:an.required,message:D,ref:x,...I(an.required,D)},!n))return b(D),k}if(!T&&(!st(d)||!st(f))){let A,D;const X=Cr(f),Z=Cr(d);if(!st(h)&&!isNaN(h)){const ee=o.valueAsNumber||h&&+h;st(X.value)||(A=ee>X.value),st(Z.value)||(D=ee<Z.value)}else{const ee=o.valueAsDate||new Date(h),ve=Y=>new Date(new Date().toDateString()+" "+Y),z=o.type=="time",Q=o.type=="week";tn(X.value)&&h&&(A=z?ve(h)>ve(X.value):Q?h>X.value:ee>new Date(X.value)),tn(Z.value)&&h&&(D=z?ve(h)<ve(Z.value):Q?h<Z.value:ee<new Date(Z.value))}if((A||D)&&(B(!!A,X.message,Z.message,an.max,an.min),!n))return b(k[g].message),k}if((a||u)&&!T&&(tn(h)||i&&Array.isArray(h))){const A=Cr(a),D=Cr(u),X=!st(A.value)&&h.length>+A.value,Z=!st(D.value)&&h.length<+D.value;if((X||Z)&&(B(X,A.message,D.message),!n))return b(k[g].message),k}if(m&&!T&&tn(h)){const{value:A,message:D}=Cr(m);if(ta(A)&&!h.match(A)&&(k[g]={type:an.pattern,message:D,ref:o,...I(an.pattern,D)},!n))return b(D),k}if(y){if($n(y)){const A=await y(h,t),D=rh(A,x);if(D&&(k[g]={...D,...I(an.validate,D.message)},!n))return b(D.message),k}else if(He(y)){let A={};for(const D in y){if(!Ot(A)&&!n)break;const X=rh(await y[D](h,t),x,D);X&&(A={...X,...I(D,X.message)},b(X.message),n&&(k[g]=A))}if(!Ot(A)&&(k[g]={ref:x,...A},!n))return k}}return b(!0),k};function tE(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=De(e)?r++:e[t[r++]];return e}function nE(e){for(const t in e)if(e.hasOwnProperty(t)&&!De(e[t]))return!1;return!0}function Ke(e,t){const n=Array.isArray(t)?t:yd(t)?[t]:cx(t),r=n.length===1?e:tE(e,n),i=n.length-1,o=n[i];return r&&delete r[o],i!==0&&(He(r)&&Ot(r)||Array.isArray(r)&&nE(r))&&Ke(e,n.slice(0,-1)),e}function zl(){let e=[];return{get observers(){return e},next:i=>{for(const o of e)o.next&&o.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(o=>o!==i)}}),unsubscribe:()=>{e=[]}}}var na=e=>st(e)||!rx(e);function ar(e,t){if(na(e)||na(t))return e===t;if(Fr(e)&&Fr(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n){const o=e[i];if(!r.includes(i))return!1;if(i!=="ref"){const s=t[i];if(Fr(o)&&Fr(s)||He(o)&&He(s)||Array.isArray(o)&&Array.isArray(s)?!ar(o,s):o!==s)return!1}}return!0}var px=e=>e.type==="select-multiple",rE=e=>bd(e)||xo(e),Vl=e=>ea(e)&&e.isConnected,hx=e=>{for(const t in e)if($n(e[t]))return!0;return!1};function ra(e,t={}){const n=Array.isArray(e);if(He(e)||n)for(const r in e)Array.isArray(e[r])||He(e[r])&&!hx(e[r])?(t[r]=Array.isArray(e[r])?[]:{},ra(e[r],t[r])):st(e[r])||(t[r]=!0);return t}function mx(e,t,n){const r=Array.isArray(e);if(He(e)||r)for(const i in e)Array.isArray(e[i])||He(e[i])&&!hx(e[i])?De(t)||na(n[i])?n[i]=Array.isArray(e[i])?ra(e[i],[]):{...ra(e[i])}:mx(e[i],st(t)?{}:t[i],n[i]):n[i]=!ar(e[i],t[i]);return n}var Nl=(e,t)=>mx(e,t,ra(t)),gx=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>De(e)?e:t?e===""?NaN:e&&+e:n&&tn(e)?new Date(e):r?r(e):e;function $l(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return wd(t)?t.files:bd(t)?fx(e.refs).value:px(t)?[...t.selectedOptions].map(({value:n})=>n):xo(t)?dx(e.refs).value:gx(De(t.value)?e.ref.value:t.value,e)}var iE=(e,t,n,r)=>{const i={};for(const o of e){const s=U(t,o);s&&ke(i,o,s._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},bi=e=>De(e)?e:ta(e)?e.source:He(e)?ta(e.value)?e.value.source:e.value:e,oE=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function oh(e,t,n){const r=U(e,n);if(r||yd(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const o=i.join("."),s=U(t,o),l=U(e,o);if(s&&!Array.isArray(s)&&n!==o)return{name:n};if(l&&l.type)return{name:o,error:l};i.pop()}return{name:n}}var sE=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:(n?r.isOnChange:i.isOnChange)?e:!0,aE=(e,t)=>!yo(U(e,t)).length&&Ke(e,t);const lE={mode:$t.onSubmit,reValidateMode:$t.onChange,shouldFocusError:!0};function uE(e={},t){let n={...lE,...e},r={submitCount:0,isDirty:!1,isLoading:$n(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{},disabled:!1},i={},o=He(n.defaultValues)||He(n.values)?Ft(n.defaultValues||n.values)||{}:{},s=n.shouldUnregister?{}:Ft(o),l={action:!1,mount:!1,watch:!1},a={mount:new Set,unMount:new Set,array:new Set,watch:new Set},u,d=0;const f={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},m={values:zl(),array:zl(),state:zl()},y=e.resetOptions&&e.resetOptions.keepDirtyValues,g=Jp(n.mode),v=Jp(n.reValidateMode),w=n.criteriaMode===$t.all,p=S=>O=>{clearTimeout(d),d=setTimeout(S,O)},h=async S=>{if(f.isValid||S){const O=n.resolver?Ot((await T()).errors):await B(i,!0);O!==r.isValid&&m.state.next({isValid:O})}},x=S=>f.isValidating&&m.state.next({isValidating:S}),b=(S,O=[],j,$,N=!0,V=!0)=>{if($&&j){if(l.action=!0,V&&Array.isArray(U(i,S))){const J=j(U(i,S),$.argA,$.argB);N&&ke(i,S,J)}if(V&&Array.isArray(U(r.errors,S))){const J=j(U(r.errors,S),$.argA,$.argB);N&&ke(r.errors,S,J),aE(r.errors,S)}if(f.touchedFields&&V&&Array.isArray(U(r.touchedFields,S))){const J=j(U(r.touchedFields,S),$.argA,$.argB);N&&ke(r.touchedFields,S,J)}f.dirtyFields&&(r.dirtyFields=Nl(o,s)),m.state.next({name:S,isDirty:D(S,O),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else ke(s,S,O)},k=(S,O)=>{ke(r.errors,S,O),m.state.next({errors:r.errors})},_=(S,O,j,$)=>{const N=U(i,S);if(N){const V=U(s,S,De(j)?U(o,S):j);De(V)||$&&$.defaultChecked||O?ke(s,S,O?V:$l(N._f)):ee(S,V),l.mount&&h()}},E=(S,O,j,$,N)=>{let V=!1,J=!1;const Se={name:S};if(!j||$){f.isDirty&&(J=r.isDirty,r.isDirty=Se.isDirty=D(),V=J!==Se.isDirty);const Fe=ar(U(o,S),O);J=U(r.dirtyFields,S),Fe?Ke(r.dirtyFields,S):ke(r.dirtyFields,S,!0),Se.dirtyFields=r.dirtyFields,V=V||f.dirtyFields&&J!==!Fe}if(j){const Fe=U(r.touchedFields,S);Fe||(ke(r.touchedFields,S,j),Se.touchedFields=r.touchedFields,V=V||f.touchedFields&&Fe!==j)}return V&&N&&m.state.next(Se),V?Se:{}},P=(S,O,j,$)=>{const N=U(r.errors,S),V=f.isValid&&Zt(O)&&r.isValid!==O;if(e.delayError&&j?(u=p(()=>k(S,j)),u(e.delayError)):(clearTimeout(d),u=null,j?ke(r.errors,S,j):Ke(r.errors,S)),(j?!ar(N,j):N)||!Ot($)||V){const J={...$,...V&&Zt(O)?{isValid:O}:{},errors:r.errors,name:S};r={...r,...J},m.state.next(J)}x(!1)},T=async S=>n.resolver(s,n.context,iE(S||a.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),I=async S=>{const{errors:O}=await T(S);if(S)for(const j of S){const $=U(O,j);$?ke(r.errors,j,$):Ke(r.errors,j)}else r.errors=O;return O},B=async(S,O,j={valid:!0})=>{for(const $ in S){const N=S[$];if(N){const{_f:V,...J}=N;if(V){const Se=a.array.has(V.name),Fe=await ih(N,s,w,n.shouldUseNativeValidation&&!O,Se);if(Fe[V.name]&&(j.valid=!1,O))break;!O&&(U(Fe,V.name)?Se?eE(r.errors,Fe,V.name):ke(r.errors,V.name,Fe[V.name]):Ke(r.errors,V.name))}J&&await B(J,O,j)}}return j.valid},A=()=>{for(const S of a.unMount){const O=U(i,S);O&&(O._f.refs?O._f.refs.every(j=>!Vl(j)):!Vl(O._f.ref))&&be(S)}a.unMount=new Set},D=(S,O)=>(S&&O&&ke(s,S,O),!ar(ne(),o)),X=(S,O,j)=>ux(S,a,{...l.mount?s:De(O)?o:tn(S)?{[S]:O}:O},j,O),Z=S=>yo(U(l.mount?s:o,S,e.shouldUnregister?U(o,S,[]):[])),ee=(S,O,j={})=>{const $=U(i,S);let N=O;if($){const V=$._f;V&&(!V.disabled&&ke(s,S,gx(O,V)),N=ea(V.ref)&&st(O)?"":O,px(V.ref)?[...V.ref.options].forEach(J=>J.selected=N.includes(J.value)):V.refs?xo(V.ref)?V.refs.length>1?V.refs.forEach(J=>(!J.defaultChecked||!J.disabled)&&(J.checked=Array.isArray(N)?!!N.find(Se=>Se===J.value):N===J.value)):V.refs[0]&&(V.refs[0].checked=!!N):V.refs.forEach(J=>J.checked=J.value===N):wd(V.ref)?V.ref.value="":(V.ref.value=N,V.ref.type||m.values.next({name:S,values:{...s}})))}(j.shouldDirty||j.shouldTouch)&&E(S,N,j.shouldTouch,j.shouldDirty,!0),j.shouldValidate&&ce(S)},ve=(S,O,j)=>{for(const $ in O){const N=O[$],V=`${S}.${$}`,J=U(i,V);(a.array.has(S)||!na(N)||J&&!J._f)&&!Fr(N)?ve(V,N,j):ee(V,N,j)}},z=(S,O,j={})=>{const $=U(i,S),N=a.array.has(S),V=Ft(O);ke(s,S,V),N?(m.array.next({name:S,values:{...s}}),(f.isDirty||f.dirtyFields)&&j.shouldDirty&&m.state.next({name:S,dirtyFields:Nl(o,s),isDirty:D(S,V)})):$&&!$._f&&!st(V)?ve(S,V,j):ee(S,V,j),Zp(S,a)&&m.state.next({...r}),m.values.next({name:S,values:{...s}}),!l.mount&&t()},Q=async S=>{const O=S.target;let j=O.name,$=!0;const N=U(i,j),V=()=>O.type?$l(N._f):ix(S),J=Se=>{$=Number.isNaN(Se)||Se===U(s,j,Se)};if(N){let Se,Fe;const wo=V(),xr=S.type===Zs.BLUR||S.type===Zs.FOCUS_OUT,vx=!oE(N._f)&&!n.resolver&&!U(r.errors,j)&&!N._f.deps||sE(xr,U(r.touchedFields,j),r.isSubmitted,v,g),$a=Zp(j,a,xr);ke(s,j,wo),xr?(N._f.onBlur&&N._f.onBlur(S),u&&u(0)):N._f.onChange&&N._f.onChange(S);const Ua=E(j,wo,xr,!1),xx=!Ot(Ua)||$a;if(!xr&&m.values.next({name:j,type:S.type,values:{...s}}),vx)return f.isValid&&h(),xx&&m.state.next({name:j,...$a?{}:Ua});if(!xr&&$a&&m.state.next({...r}),x(!0),n.resolver){const{errors:Sd}=await T([j]);if(J(wo),$){const yx=oh(r.errors,i,j),kd=oh(Sd,i,yx.name||j);Se=kd.error,j=kd.name,Fe=Ot(Sd)}}else Se=(await ih(N,s,w,n.shouldUseNativeValidation))[j],J(wo),$&&(Se?Fe=!1:f.isValid&&(Fe=await B(i,!0)));$&&(N._f.deps&&ce(N._f.deps),P(j,Fe,Se,Ua))}},Y=(S,O)=>{if(U(r.errors,O)&&S.focus)return S.focus(),1},ce=async(S,O={})=>{let j,$;const N=vs(S);if(x(!0),n.resolver){const V=await I(De(S)?S:N);j=Ot(V),$=S?!N.some(J=>U(V,J)):j}else S?($=(await Promise.all(N.map(async V=>{const J=U(i,V);return await B(J&&J._f?{[V]:J}:J)}))).every(Boolean),!(!$&&!r.isValid)&&h()):$=j=await B(i);return m.state.next({...!tn(S)||f.isValid&&j!==r.isValid?{}:{name:S},...n.resolver||!S?{isValid:j}:{},errors:r.errors,isValidating:!1}),O.shouldFocus&&!$&&xs(i,Y,S?N:a.mount),$},ne=S=>{const O={...o,...l.mount?s:{}};return De(S)?O:tn(S)?U(O,S):S.map(j=>U(O,j))},Ee=(S,O)=>({invalid:!!U((O||r).errors,S),isDirty:!!U((O||r).dirtyFields,S),isTouched:!!U((O||r).touchedFields,S),error:U((O||r).errors,S)}),we=S=>{S&&vs(S).forEach(O=>Ke(r.errors,O)),m.state.next({errors:S?r.errors:{}})},$e=(S,O,j)=>{const $=(U(i,S,{_f:{}})._f||{}).ref;ke(r.errors,S,{...O,ref:$}),m.state.next({name:S,errors:r.errors,isValid:!1}),j&&j.shouldFocus&&$&&$.focus&&$.focus()},he=(S,O)=>$n(S)?m.values.subscribe({next:j=>S(X(void 0,O),j)}):X(S,O,!0),be=(S,O={})=>{for(const j of S?vs(S):a.mount)a.mount.delete(j),a.array.delete(j),O.keepValue||(Ke(i,j),Ke(s,j)),!O.keepError&&Ke(r.errors,j),!O.keepDirty&&Ke(r.dirtyFields,j),!O.keepTouched&&Ke(r.touchedFields,j),!n.shouldUnregister&&!O.keepDefaultValue&&Ke(o,j);m.values.next({values:{...s}}),m.state.next({...r,...O.keepDirty?{isDirty:D()}:{}}),!O.keepIsValid&&h()},Ze=({disabled:S,name:O,field:j,fields:$,value:N})=>{if(Zt(S)){const V=S?void 0:De(N)?$l(j?j._f:U($,O)._f):N;ke(s,O,V),E(O,V,!1,!1,!0)}},vt=(S,O={})=>{let j=U(i,S);const $=Zt(O.disabled);return ke(i,S,{...j||{},_f:{...j&&j._f?j._f:{ref:{name:S}},name:S,mount:!0,...O}}),a.mount.add(S),j?Ze({field:j,disabled:O.disabled,name:S}):_(S,!0,O.value),{...$?{disabled:O.disabled}:{},...n.progressive?{required:!!O.required,min:bi(O.min),max:bi(O.max),minLength:bi(O.minLength),maxLength:bi(O.maxLength),pattern:bi(O.pattern)}:{},name:S,onChange:Q,onBlur:Q,ref:N=>{if(N){vt(S,O),j=U(i,S);const V=De(N.value)&&N.querySelectorAll&&N.querySelectorAll("input,select,textarea")[0]||N,J=rE(V),Se=j._f.refs||[];if(J?Se.find(Fe=>Fe===V):V===j._f.ref)return;ke(i,S,{_f:{...j._f,...J?{refs:[...Se.filter(Vl),V,...Array.isArray(U(o,S))?[{}]:[]],ref:{type:V.type,name:S}}:{ref:V}}}),_(S,!1,void 0,V)}else j=U(i,S,{}),j._f&&(j._f.mount=!1),(n.shouldUnregister||O.shouldUnregister)&&!(ox(a.array,S)&&l.action)&&a.unMount.add(S)}}},F=()=>n.shouldFocusError&&xs(i,Y,a.mount),H=S=>{Zt(S)&&(m.state.next({disabled:S}),xs(i,O=>{O.disabled=S},0,!1))},ie=(S,O)=>async j=>{j&&(j.preventDefault&&j.preventDefault(),j.persist&&j.persist());let $=Ft(s);if(m.state.next({isSubmitting:!0}),n.resolver){const{errors:N,values:V}=await T();r.errors=N,$=V}else await B(i);Ke(r.errors,"root"),Ot(r.errors)?(m.state.next({errors:{}}),await S($,j)):(O&&await O({...r.errors},j),F(),setTimeout(F)),m.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Ot(r.errors),submitCount:r.submitCount+1,errors:r.errors})},oe=(S,O={})=>{U(i,S)&&(De(O.defaultValue)?z(S,U(o,S)):(z(S,O.defaultValue),ke(o,S,O.defaultValue)),O.keepTouched||Ke(r.touchedFields,S),O.keepDirty||(Ke(r.dirtyFields,S),r.isDirty=O.defaultValue?D(S,U(o,S)):D()),O.keepError||(Ke(r.errors,S),f.isValid&&h()),m.state.next({...r}))},te=(S,O={})=>{const j=S?Ft(S):o,$=Ft(j),N=S&&!Ot(S)?$:o;if(O.keepDefaultValues||(o=j),!O.keepValues){if(O.keepDirtyValues||y)for(const V of a.mount)U(r.dirtyFields,V)?ke(N,V,U(s,V)):z(V,U(N,V));else{if(gd&&De(S))for(const V of a.mount){const J=U(i,V);if(J&&J._f){const Se=Array.isArray(J._f.refs)?J._f.refs[0]:J._f.ref;if(ea(Se)){const Fe=Se.closest("form");if(Fe){Fe.reset();break}}}}i={}}s=e.shouldUnregister?O.keepDefaultValues?Ft(o):{}:Ft(N),m.array.next({values:{...N}}),m.values.next({values:{...N}})}a={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!l.mount&&t(),l.mount=!f.isValid||!!O.keepIsValid,l.watch=!!e.shouldUnregister,m.state.next({submitCount:O.keepSubmitCount?r.submitCount:0,isDirty:O.keepDirty?r.isDirty:!!(O.keepDefaultValues&&!ar(S,o)),isSubmitted:O.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:O.keepDirtyValues?r.dirtyFields:O.keepDefaultValues&&S?Nl(o,S):{},touchedFields:O.keepTouched?r.touchedFields:{},errors:O.keepErrors?r.errors:{},isSubmitSuccessful:O.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},ae=(S,O)=>te($n(S)?S(s):S,O);return{control:{register:vt,unregister:be,getFieldState:Ee,handleSubmit:ie,setError:$e,_executeSchema:T,_getWatch:X,_getDirty:D,_updateValid:h,_removeUnmounted:A,_updateFieldArray:b,_updateDisabledField:Ze,_getFieldArray:Z,_reset:te,_resetDefaultValues:()=>$n(n.defaultValues)&&n.defaultValues().then(S=>{ae(S,n.resetOptions),m.state.next({isLoading:!1})}),_updateFormState:S=>{r={...r,...S}},_disableForm:H,_subjects:m,_proxyFormState:f,get _fields(){return i},get _formValues(){return s},get _state(){return l},set _state(S){l=S},get _defaultValues(){return o},get _names(){return a},set _names(S){a=S},get _formState(){return r},set _formState(S){r=S},get _options(){return n},set _options(S){n={...n,...S}}},trigger:ce,register:vt,handleSubmit:ie,watch:he,setValue:z,getValues:ne,reset:ae,resetField:oe,clearErrors:we,unregister:be,setError:$e,setFocus:(S,O={})=>{const j=U(i,S),$=j&&j._f;if($){const N=$.refs?$.refs[0]:$.ref;N.focus&&(N.focus(),O.shouldSelect&&N.select())}},getFieldState:Ee}}function cE(e={}){const t=Ce.useRef(),n=Ce.useRef(),[r,i]=Ce.useState({isDirty:!1,isValidating:!1,isLoading:$n(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},disabled:!1,defaultValues:$n(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...uE(e,()=>i(s=>({...s}))),formState:r});const o=t.current.control;return o._options=e,xd({subject:o._subjects.state,next:s=>{ax(s,o._proxyFormState,o._updateFormState,!0)&&i({...o._formState})}}),Ce.useEffect(()=>o._disableForm(e.disabled),[o,e.disabled]),Ce.useEffect(()=>{if(o._proxyFormState.isDirty){const s=o._getDirty();s!==r.isDirty&&o._subjects.state.next({isDirty:s})}},[o,r.isDirty]),Ce.useEffect(()=>{e.values&&!ar(e.values,n.current)?(o._reset(e.values,o._options.resetOptions),n.current=e.values):o._resetDefaultValues()},[e.values,o]),Ce.useEffect(()=>{o._state.mount||(o._updateValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next({...o._formState})),o._removeUnmounted()}),t.current.formState=sx(r,o),t.current}const dE={control:(e,t)=>{const n=t.selectProps.errors;return{...e,display:"flex",width:"668px",height:"56px",marginTop:"8px",padding:"0px 16px",alignItems:"center",flexShrink:"0",alignSelf:"stretch",borderRadius:"16px",outline:"none",border:`1px solid ${n?"var(--secondary-red)":"transparent"}`,backgroundColor:"var(--background-white)",boxShadow:"0px 0px 8px 0px rgba(27, 54, 65, 0.08)","&:hover":{boxShadow:"0px 0px 16px 0px rgba(27, 54, 65, 0.16)"},"&:focus":{outline:"none",border:"1px solid var(--typography-grey)",background:"var(--background-white)",boxShadow:"0px 0px 8px 0px rgba(27, 54, 65, 0.08)"}}},dropdownIndicator:e=>({...e,color:"#062136"}),indicatorSeparator:()=>({color:"red"}),option:e=>({...e,display:"flex",alignItems:"flex-start",fontWeight:"400",backgroundColor:"var(--background-white)",color:"#1B3641","&:hover":{backgroundColor:"rgba(27, 54, 65, 0.2)",borderRadius:"16px",fontWeight:"600"}}),menu:e=>({...e,height:"auto",marginTop:"0",border:"none",borderRadius:"16px",boxShadow:"0px 0px 8px 0px rgba(27, 54, 65, 0.08)",color:"var(--primary-bluedark)",backgroundColor:"var(--background-white)"}),singleValue:e=>({...e,fontSize:"16px",fontWeight:"400",color:"var(--primary-bluedark)"})},fE=()=>{const[e,t]=fj("key",{name:"",email:"",phone:"",service:"",comment:""}),{name:n,email:r,phone:i,service:o,comment:s}=e,l=Np.find(p=>p.value===o),{register:a,handleSubmit:u,control:d,setValue:f,formState:{errors:m},reset:y}=cE({mode:"all",shouldFocusError:!1,defaultValues:{}});M.useEffect(()=>{const p=JSON.stringify(e);localStorage.setItem("key",p)},[e]);const g=p=>{f("service",(p==null?void 0:p.value)||""),t({...e,service:(p==null?void 0:p.value)||""})},v=p=>{t({...e,[p.target.name]:p.target.value})},w=async p=>{try{const h={...p,phone:p.phone.replace(/\D/g,"").slice(2)};await xk.post("https://healthy-management.onrender.com/api/senddata",h),console.log(h),t({name:"",email:"",phone:"",service:"",comment:""}),y(),alert("Заявка відправлена!")}catch{alert("Помилка при відправці заявки")}};return c.jsx("section",{className:"container",id:"contact",children:c.jsxs(Dj,{children:[c.jsx(Lj,{children:"Контакт"}),c.jsxs(Aj,{children:[c.jsxs("div",{children:[c.jsx(Nn,{minWidth:1920,children:c.jsx(Kp,{srcSet:`${pj} 2x, ${$p} 1x`,sizes:"(min-width: 1920px) 100vw",src:$p,alt:"notebook",loading:"lazy"})}),c.jsx(Nn,{minWidth:300,maxWidth:1919,children:c.jsx(Kp,{srcSet:`${Up} 375w, ${hj} 2x`,sizes:"(min-width: 375px) 375px",src:Up,alt:"notebook"})})]}),c.jsxs(Fj,{children:[c.jsx(zj,{children:"Залишайте контактні дані і ми з вами зв'яжемось"}),c.jsxs(Vj,{onSubmit:u(w),children:[c.jsxs(Gp,{children:["Ім’я",c.jsx($j,{}),c.jsx(Xp,{type:"text",placeholder:"Введіть своє ім’я",...a("name",{required:"Це поле обов'язкове для заповнення",pattern:{value:/^(?:[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,32}(?:\s+[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,32})?|[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,64})$/,message:"Поле повинно містити одне або два слова"}}),value:n,onChange:v,errors:m.name}),m.name&&c.jsxs(wi,{children:[c.jsx(ln,{}),m.name.message]})]}),c.jsxs(Uj,{children:[c.jsxs(qp,{children:["Емейл",c.jsx(ln,{}),c.jsx(Xp,{type:"email",placeholder:"Введіть емейл",...a("email",{required:"Це поле обов'язкове для заповнення",pattern:{value:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,message:"Введіть коректний емейл"}}),value:r,onChange:v,errors:m.email}),m.email&&c.jsxs(wi,{children:[c.jsx(ln,{}),m.email.message]})]}),c.jsxs(qp,{children:["Номер телефону",c.jsx(ln,{}),c.jsx(Bj,{type:"tel",mask:"+38(099)999-99-99",placeholder:"Введіть номер телефону",...a("phone",{required:"Це поле обов'язкове для заповнення",pattern:{value:/^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/,message:"Введіть коректний номер телефона"}}),value:i,onChange:v,errors:m.phone}),m.phone&&c.jsxs(wi,{children:[c.jsx(ln,{}),m.phone.message]})]})]}),c.jsxs(Gp,{children:["Послуга",c.jsx(ln,{}),c.jsx(Jj,{name:"service",control:d,shouldUnregister:!1,render:({field:p})=>c.jsx(dj,{...a("service",{required:"Оберіть послугу"}),placeholder:"Оберіть послугу",...p,options:Np,styles:dE,errors:m.service,onChange:g,value:l})}),m.service&&c.jsxs(wi,{children:[c.jsx(ln,{}),m.service.message]})]}),c.jsxs(Nj,{children:["Повідомлення",c.jsx(Hj,{name:"comment",placeholder:"Введіть ваше повідомлення",...a("comment",{pattern:{value:/^.{0,500}$/,message:"Максимальна довжина повідомлення 500 символів"}}),value:s,onChange:v,errors:m.comment}),m.comment&&c.jsxs(wi,{children:[c.jsx(ln,{}),m.comment.message]})]}),c.jsx(Wj,{type:"submit",children:"Надіслати"})]})]})]})]})})},pE=C.section`
  padding-top: 80px;
  padding-bottom: 80px;
`,hE=C.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  height: 884px;
  background: var(--background-bluedark);
  border-radius: 16px;
  padding: 80px;
`,mE=C.h2`
  font-size: 48px;
  font-weight: 600;
  line-height: 56px;
  color: var(--typography-white);
`,gE=C.p`
  color: var(--typography-white);
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  width: 828px;
`,vE=C.span`
  color: var(--primary-yellow);
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
`,xE=C.ul`
  display: flex;
  gap: 24px;
`,yE=C.li`
  position: relative;
  width: calc((100% - (24px * 3)) / 4);
  background: var(--background-white);
  padding: 40px;
  border-radius: 16px;
`,wE=C.div`
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 16px;
  padding: 16px;
  background: var(--primary-yellow);
  left: 258px;
  top: -24px;
`,bE=C.a`
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
`,SE="/healthy-management-project/assets/icon-WQbGU7FW.svg",kE="/healthy-management-project/assets/icon-2-FNpGPcjZ.svg",CE="/healthy-management-project/assets/icon-3-GZg06_37.svg",jE="/healthy-management-project/assets/icon-4-9BBn0thK.svg",Ul=[{title:"Менторство та консультації",about:["Для власників та менеджерів з питань менеджменту та розвитку, медичного маркетингу та комунікацій, з питань програм управління здоров'ям","Стейхолдерам та парнерам з питань медичного менеджменту та маркетингу"],path:SE},{title:"Діагностика",about:["Аудит бізнес-процесів","Аудит маркетингу та сервісу","Аудит системи комунікацій та Сustomer Journey Map"],path:kE},{title:"Стратегії",about:["Проведення стратегічних сесій","Розробка стратегії розвитку та маркетингу ","Розробка стратегій внутрішніх комунікацій","Розробка стратегій управління здоров'ям"],path:CE},{title:"Навчання",about:["Медичний маркетинг","Комунікації та сервіс"],path:jE}],EE=()=>c.jsx(pE,{className:"container",id:"services",children:c.jsxs(hE,{children:[c.jsx(mE,{children:"Послуги"}),c.jsxs(gE,{children:["Будуємо ефективні ",c.jsx(vE,{children:"стратегії здорового менеджменту"})," для бізнесів. Розвивайте свій бізнес за допомогою ефективних стратегій здорового менеджменту."]}),c.jsx(xE,{children:Ul==null?void 0:Ul.map(e=>c.jsxs(yE,{children:[c.jsx(rd,{title:e.title,about:e.about,additionalComment:!0}),c.jsx(wE,{children:c.jsx("img",{src:e.path,alt:""})})]},e.title))}),c.jsx(bE,{href:"#contact",children:"Замовити консультацію"})]})});function OE(){const e=(t,n)=>{n.preventDefault();const r=document.getElementById(t);if(r){const i=r.getBoundingClientRect(),o=window.pageYOffset||document.documentElement.scrollTop;let s;const l=window.innerWidth;l<=768&&(s=i.top+o-80),(l>768||l<=1440)&&(s=i.top+o-80),l>1440||l<=1920?s=i.top+o-80:s=i.top+o-60,window.scrollTo({top:s,behavior:"smooth"}),setTimeout(()=>{n.target.blur()},1e3)}};return c.jsxs(c.Fragment,{children:[c.jsx(Wg,{handleSetActiveLink:e}),c.jsxs("main",{children:[c.jsx(Ub,{}),c.jsx(Tw,{}),c.jsx(vw,{}),c.jsx(Yb,{}),c.jsx(JS,{}),c.jsx(EE,{}),c.jsx(aS,{}),c.jsx(uS,{}),c.jsx(dS,{}),c.jsx($S,{}),c.jsx(Fw,{}),c.jsx(fE,{})]}),c.jsx(Bg,{handleSetActiveLink:e}),c.jsx(e2,{})]})}Bl.createRoot(document.getElementById("root")).render(c.jsx(Ce.StrictMode,{children:c.jsx(OE,{})}));
