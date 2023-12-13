function vx(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var eh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ni(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var th={exports:{}},rs={},nh={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uo=Symbol.for("react.element"),xx=Symbol.for("react.portal"),yx=Symbol.for("react.fragment"),wx=Symbol.for("react.strict_mode"),bx=Symbol.for("react.profiler"),Sx=Symbol.for("react.provider"),kx=Symbol.for("react.context"),jx=Symbol.for("react.forward_ref"),Cx=Symbol.for("react.suspense"),Ex=Symbol.for("react.memo"),_x=Symbol.for("react.lazy"),bd=Symbol.iterator;function Ox(e){return e===null||typeof e!="object"?null:(e=bd&&e[bd]||e["@@iterator"],typeof e=="function"?e:null)}var rh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ih=Object.assign,oh={};function ri(e,t,n){this.props=e,this.context=t,this.refs=oh,this.updater=n||rh}ri.prototype.isReactComponent={};ri.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ri.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ah(){}ah.prototype=ri.prototype;function Xu(e,t,n){this.props=e,this.context=t,this.refs=oh,this.updater=n||rh}var qu=Xu.prototype=new ah;qu.constructor=Xu;ih(qu,ri.prototype);qu.isPureReactComponent=!0;var Sd=Array.isArray,sh=Object.prototype.hasOwnProperty,Ju={current:null},lh={key:!0,ref:!0,__self:!0,__source:!0};function uh(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)sh.call(t,r)&&!lh.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:uo,type:e,key:o,ref:a,props:i,_owner:Ju.current}}function Tx(e,t){return{$$typeof:uo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Zu(e){return typeof e=="object"&&e!==null&&e.$$typeof===uo}function Px(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var kd=/\/+/g;function Us(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Px(""+e.key):t.toString(36)}function qo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case uo:case xx:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Us(a,0):r,Sd(i)?(n="",e!=null&&(n=e.replace(kd,"$&/")+"/"),qo(i,t,n,"",function(u){return u})):i!=null&&(Zu(i)&&(i=Tx(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(kd,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Sd(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+Us(o,l);a+=qo(o,t,n,s,i)}else if(s=Ox(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+Us(o,l++),a+=qo(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function bo(e,t,n){if(e==null)return e;var r=[],i=0;return qo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Mx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var dt={current:null},Jo={transition:null},Rx={ReactCurrentDispatcher:dt,ReactCurrentBatchConfig:Jo,ReactCurrentOwner:Ju};ce.Children={map:bo,forEach:function(e,t,n){bo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return bo(e,function(){t++}),t},toArray:function(e){return bo(e,function(t){return t})||[]},only:function(e){if(!Zu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ce.Component=ri;ce.Fragment=yx;ce.Profiler=bx;ce.PureComponent=Xu;ce.StrictMode=wx;ce.Suspense=Cx;ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rx;ce.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ih({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Ju.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)sh.call(t,s)&&!lh.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:uo,type:e.type,key:i,ref:o,props:r,_owner:a}};ce.createContext=function(e){return e={$$typeof:kx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Sx,_context:e},e.Consumer=e};ce.createElement=uh;ce.createFactory=function(e){var t=uh.bind(null,e);return t.type=e,t};ce.createRef=function(){return{current:null}};ce.forwardRef=function(e){return{$$typeof:jx,render:e}};ce.isValidElement=Zu;ce.lazy=function(e){return{$$typeof:_x,_payload:{_status:-1,_result:e},_init:Mx}};ce.memo=function(e,t){return{$$typeof:Ex,type:e,compare:t===void 0?null:t}};ce.startTransition=function(e){var t=Jo.transition;Jo.transition={};try{e()}finally{Jo.transition=t}};ce.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ce.useCallback=function(e,t){return dt.current.useCallback(e,t)};ce.useContext=function(e){return dt.current.useContext(e)};ce.useDebugValue=function(){};ce.useDeferredValue=function(e){return dt.current.useDeferredValue(e)};ce.useEffect=function(e,t){return dt.current.useEffect(e,t)};ce.useId=function(){return dt.current.useId()};ce.useImperativeHandle=function(e,t,n){return dt.current.useImperativeHandle(e,t,n)};ce.useInsertionEffect=function(e,t){return dt.current.useInsertionEffect(e,t)};ce.useLayoutEffect=function(e,t){return dt.current.useLayoutEffect(e,t)};ce.useMemo=function(e,t){return dt.current.useMemo(e,t)};ce.useReducer=function(e,t,n){return dt.current.useReducer(e,t,n)};ce.useRef=function(e){return dt.current.useRef(e)};ce.useState=function(e){return dt.current.useState(e)};ce.useSyncExternalStore=function(e,t,n){return dt.current.useSyncExternalStore(e,t,n)};ce.useTransition=function(){return dt.current.useTransition()};ce.version="18.2.0";nh.exports=ce;var A=nh.exports;const ke=ni(A),jd=vx({__proto__:null,default:ke},[A]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ix=A,Lx=Symbol.for("react.element"),Ax=Symbol.for("react.fragment"),Dx=Object.prototype.hasOwnProperty,Fx=Ix.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zx={key:!0,ref:!0,__self:!0,__source:!0};function ch(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Dx.call(t,r)&&!zx.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Lx,type:e,key:o,ref:a,props:i,_owner:Fx.current}}rs.Fragment=Ax;rs.jsx=ch;rs.jsxs=ch;th.exports=rs;var c=th.exports,Nl={},dh={exports:{}},Et={},fh={exports:{}},ph={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,K){var G=N.length;N.push(K);e:for(;0<G;){var de=G-1>>>1,ne=N[de];if(0<i(ne,K))N[de]=K,N[G]=ne,G=de;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var K=N[0],G=N.pop();if(G!==K){N[0]=G;e:for(var de=0,ne=N.length,_e=ne>>>1;de<_e;){var Se=2*(de+1)-1,He=N[Se],pe=Se+1,Pe=N[pe];if(0>i(He,G))pe<ne&&0>i(Pe,He)?(N[de]=Pe,N[pe]=G,de=pe):(N[de]=He,N[Se]=G,de=Se);else if(pe<ne&&0>i(Pe,G))N[de]=Pe,N[pe]=G,de=pe;else break e}}return K}function i(N,K){var G=N.sortIndex-K.sortIndex;return G!==0?G:N.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],h=1,p=null,v=3,x=!1,m=!1,y=!1,b=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(N){for(var K=n(u);K!==null;){if(K.callback===null)r(u);else if(K.startTime<=N)r(u),K.sortIndex=K.expirationTime,t(s,K);else break;K=n(u)}}function w(N){if(y=!1,g(N),!m)if(n(s)!==null)m=!0,Z(S);else{var K=n(u);K!==null&&ge(w,K.startTime-N)}}function S(N,K){m=!1,y&&(y=!1,d(j),j=-1),x=!0;var G=v;try{for(g(K),p=n(s);p!==null&&(!(p.expirationTime>K)||N&&!M());){var de=p.callback;if(typeof de=="function"){p.callback=null,v=p.priorityLevel;var ne=de(p.expirationTime<=K);K=e.unstable_now(),typeof ne=="function"?p.callback=ne:p===n(s)&&r(s),g(K)}else r(s);p=n(s)}if(p!==null)var _e=!0;else{var Se=n(u);Se!==null&&ge(w,Se.startTime-K),_e=!1}return _e}finally{p=null,v=G,x=!1}}var T=!1,_=null,j=-1,C=5,P=-1;function M(){return!(e.unstable_now()-P<C)}function I(){if(_!==null){var N=e.unstable_now();P=N;var K=!0;try{K=_(!0,N)}finally{K?L():(T=!1,_=null)}}else T=!1}var L;if(typeof f=="function")L=function(){f(I)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,H=U.port2;U.port1.onmessage=I,L=function(){H.postMessage(null)}}else L=function(){b(I,0)};function Z(N){_=N,T||(T=!0,L())}function ge(N,K){j=b(function(){N(e.unstable_now())},K)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){m||x||(m=!0,Z(S))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(N){switch(v){case 1:case 2:case 3:var K=3;break;default:K=v}var G=v;v=K;try{return N()}finally{v=G}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,K){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var G=v;v=N;try{return K()}finally{v=G}},e.unstable_scheduleCallback=function(N,K,G){var de=e.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?de+G:de):G=de,N){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=G+ne,N={id:h++,callback:K,priorityLevel:N,startTime:G,expirationTime:ne,sortIndex:-1},G>de?(N.sortIndex=G,t(u,N),n(s)===null&&N===n(u)&&(y?(d(j),j=-1):y=!0,ge(w,G-de))):(N.sortIndex=ne,t(s,N),m||x||(m=!0,Z(S))),N},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(N){var K=v;return function(){var G=v;v=K;try{return N.apply(this,arguments)}finally{v=G}}}})(ph);fh.exports=ph;var Nx=fh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hh=A,jt=Nx;function F(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mh=new Set,Ui={};function xr(e,t){Qr(e,t),Qr(e+"Capture",t)}function Qr(e,t){for(Ui[e]=t,e=0;e<t.length;e++)mh.add(t[e])}var Sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vl=Object.prototype.hasOwnProperty,Vx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cd={},Ed={};function $x(e){return Vl.call(Ed,e)?!0:Vl.call(Cd,e)?!1:Vx.test(e)?Ed[e]=!0:(Cd[e]=!0,!1)}function Ux(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Bx(e,t,n,r){if(t===null||typeof t>"u"||Ux(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ft(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){tt[e]=new ft(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];tt[t]=new ft(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){tt[e]=new ft(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){tt[e]=new ft(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){tt[e]=new ft(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){tt[e]=new ft(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){tt[e]=new ft(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){tt[e]=new ft(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){tt[e]=new ft(e,5,!1,e.toLowerCase(),null,!1,!1)});var ec=/[\-:]([a-z])/g;function tc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ec,tc);tt[t]=new ft(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ec,tc);tt[t]=new ft(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ec,tc);tt[t]=new ft(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){tt[e]=new ft(e,1,!1,e.toLowerCase(),null,!1,!1)});tt.xlinkHref=new ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){tt[e]=new ft(e,1,!1,e.toLowerCase(),null,!0,!0)});function nc(e,t,n,r){var i=tt.hasOwnProperty(t)?tt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Bx(t,n,i,r)&&(n=null),r||i===null?$x(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var En=hh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,So=Symbol.for("react.element"),_r=Symbol.for("react.portal"),Or=Symbol.for("react.fragment"),rc=Symbol.for("react.strict_mode"),$l=Symbol.for("react.profiler"),gh=Symbol.for("react.provider"),vh=Symbol.for("react.context"),ic=Symbol.for("react.forward_ref"),Ul=Symbol.for("react.suspense"),Bl=Symbol.for("react.suspense_list"),oc=Symbol.for("react.memo"),Fn=Symbol.for("react.lazy"),xh=Symbol.for("react.offscreen"),_d=Symbol.iterator;function li(e){return e===null||typeof e!="object"?null:(e=_d&&e[_d]||e["@@iterator"],typeof e=="function"?e:null)}var Le=Object.assign,Bs;function ji(e){if(Bs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Bs=t&&t[1]||""}return`
`+Bs+e}var Ws=!1;function Hs(e,t){if(!e||Ws)return"";Ws=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Ws=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ji(e):""}function Wx(e){switch(e.tag){case 5:return ji(e.type);case 16:return ji("Lazy");case 13:return ji("Suspense");case 19:return ji("SuspenseList");case 0:case 2:case 15:return e=Hs(e.type,!1),e;case 11:return e=Hs(e.type.render,!1),e;case 1:return e=Hs(e.type,!0),e;default:return""}}function Wl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Or:return"Fragment";case _r:return"Portal";case $l:return"Profiler";case rc:return"StrictMode";case Ul:return"Suspense";case Bl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case vh:return(e.displayName||"Context")+".Consumer";case gh:return(e._context.displayName||"Context")+".Provider";case ic:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case oc:return t=e.displayName||null,t!==null?t:Wl(e.type)||"Memo";case Fn:t=e._payload,e=e._init;try{return Wl(e(t))}catch{}}return null}function Hx(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wl(t);case 8:return t===rc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Zn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Yx(e){var t=yh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ko(e){e._valueTracker||(e._valueTracker=Yx(e))}function wh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=yh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ya(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Hl(e,t){var n=t.checked;return Le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Od(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Zn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function bh(e,t){t=t.checked,t!=null&&nc(e,"checked",t,!1)}function Yl(e,t){bh(e,t);var n=Zn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ql(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ql(e,t.type,Zn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Td(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ql(e,t,n){(t!=="number"||ya(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ci=Array.isArray;function Vr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Zn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Kl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(F(91));return Le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Pd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(F(92));if(Ci(n)){if(1<n.length)throw Error(F(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Zn(n)}}function Sh(e,t){var n=Zn(t.value),r=Zn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Md(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function kh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?kh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var jo,jh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(jo=jo||document.createElement("div"),jo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=jo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Bi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Pi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qx=["Webkit","ms","Moz","O"];Object.keys(Pi).forEach(function(e){Qx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Pi[t]=Pi[e]})});function Ch(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Pi.hasOwnProperty(e)&&Pi[e]?(""+t).trim():t+"px"}function Eh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ch(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Kx=Le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xl(e,t){if(t){if(Kx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(F(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(F(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(F(61))}if(t.style!=null&&typeof t.style!="object")throw Error(F(62))}}function ql(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jl=null;function ac(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zl=null,$r=null,Ur=null;function Rd(e){if(e=po(e)){if(typeof Zl!="function")throw Error(F(280));var t=e.stateNode;t&&(t=ls(t),Zl(e.stateNode,e.type,t))}}function _h(e){$r?Ur?Ur.push(e):Ur=[e]:$r=e}function Oh(){if($r){var e=$r,t=Ur;if(Ur=$r=null,Rd(e),t)for(e=0;e<t.length;e++)Rd(t[e])}}function Th(e,t){return e(t)}function Ph(){}var Ys=!1;function Mh(e,t,n){if(Ys)return e(t,n);Ys=!0;try{return Th(e,t,n)}finally{Ys=!1,($r!==null||Ur!==null)&&(Ph(),Oh())}}function Wi(e,t){var n=e.stateNode;if(n===null)return null;var r=ls(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(F(231,t,typeof n));return n}var eu=!1;if(Sn)try{var ui={};Object.defineProperty(ui,"passive",{get:function(){eu=!0}}),window.addEventListener("test",ui,ui),window.removeEventListener("test",ui,ui)}catch{eu=!1}function Gx(e,t,n,r,i,o,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var Mi=!1,wa=null,ba=!1,tu=null,Xx={onError:function(e){Mi=!0,wa=e}};function qx(e,t,n,r,i,o,a,l,s){Mi=!1,wa=null,Gx.apply(Xx,arguments)}function Jx(e,t,n,r,i,o,a,l,s){if(qx.apply(this,arguments),Mi){if(Mi){var u=wa;Mi=!1,wa=null}else throw Error(F(198));ba||(ba=!0,tu=u)}}function yr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Rh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Id(e){if(yr(e)!==e)throw Error(F(188))}function Zx(e){var t=e.alternate;if(!t){if(t=yr(e),t===null)throw Error(F(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Id(i),e;if(o===r)return Id(i),t;o=o.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?e:t}function Ih(e){return e=Zx(e),e!==null?Lh(e):null}function Lh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Lh(e);if(t!==null)return t;e=e.sibling}return null}var Ah=jt.unstable_scheduleCallback,Ld=jt.unstable_cancelCallback,e0=jt.unstable_shouldYield,t0=jt.unstable_requestPaint,ze=jt.unstable_now,n0=jt.unstable_getCurrentPriorityLevel,sc=jt.unstable_ImmediatePriority,Dh=jt.unstable_UserBlockingPriority,Sa=jt.unstable_NormalPriority,r0=jt.unstable_LowPriority,Fh=jt.unstable_IdlePriority,is=null,sn=null;function i0(e){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(is,e,void 0,(e.current.flags&128)===128)}catch{}}var Qt=Math.clz32?Math.clz32:s0,o0=Math.log,a0=Math.LN2;function s0(e){return e>>>=0,e===0?32:31-(o0(e)/a0|0)|0}var Co=64,Eo=4194304;function Ei(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ka(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Ei(l):(o&=a,o!==0&&(r=Ei(o)))}else a=n&~i,a!==0?r=Ei(a):o!==0&&(r=Ei(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Qt(t),i=1<<n,r|=e[n],t&=~i;return r}function l0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function u0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Qt(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=l0(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function nu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zh(){var e=Co;return Co<<=1,!(Co&4194240)&&(Co=64),e}function Qs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function co(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Qt(t),e[t]=n}function c0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Qt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function lc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Qt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var we=0;function Nh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Vh,uc,$h,Uh,Bh,ru=!1,_o=[],Hn=null,Yn=null,Qn=null,Hi=new Map,Yi=new Map,Nn=[],d0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ad(e,t){switch(e){case"focusin":case"focusout":Hn=null;break;case"dragenter":case"dragleave":Yn=null;break;case"mouseover":case"mouseout":Qn=null;break;case"pointerover":case"pointerout":Hi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yi.delete(t.pointerId)}}function ci(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=po(t),t!==null&&uc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function f0(e,t,n,r,i){switch(t){case"focusin":return Hn=ci(Hn,e,t,n,r,i),!0;case"dragenter":return Yn=ci(Yn,e,t,n,r,i),!0;case"mouseover":return Qn=ci(Qn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Hi.set(o,ci(Hi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Yi.set(o,ci(Yi.get(o)||null,e,t,n,r,i)),!0}return!1}function Wh(e){var t=ar(e.target);if(t!==null){var n=yr(t);if(n!==null){if(t=n.tag,t===13){if(t=Rh(n),t!==null){e.blockedOn=t,Bh(e.priority,function(){$h(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=iu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Jl=r,n.target.dispatchEvent(r),Jl=null}else return t=po(n),t!==null&&uc(t),e.blockedOn=n,!1;t.shift()}return!0}function Dd(e,t,n){Zo(e)&&n.delete(t)}function p0(){ru=!1,Hn!==null&&Zo(Hn)&&(Hn=null),Yn!==null&&Zo(Yn)&&(Yn=null),Qn!==null&&Zo(Qn)&&(Qn=null),Hi.forEach(Dd),Yi.forEach(Dd)}function di(e,t){e.blockedOn===t&&(e.blockedOn=null,ru||(ru=!0,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,p0)))}function Qi(e){function t(i){return di(i,e)}if(0<_o.length){di(_o[0],e);for(var n=1;n<_o.length;n++){var r=_o[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Hn!==null&&di(Hn,e),Yn!==null&&di(Yn,e),Qn!==null&&di(Qn,e),Hi.forEach(t),Yi.forEach(t),n=0;n<Nn.length;n++)r=Nn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Nn.length&&(n=Nn[0],n.blockedOn===null);)Wh(n),n.blockedOn===null&&Nn.shift()}var Br=En.ReactCurrentBatchConfig,ja=!0;function h0(e,t,n,r){var i=we,o=Br.transition;Br.transition=null;try{we=1,cc(e,t,n,r)}finally{we=i,Br.transition=o}}function m0(e,t,n,r){var i=we,o=Br.transition;Br.transition=null;try{we=4,cc(e,t,n,r)}finally{we=i,Br.transition=o}}function cc(e,t,n,r){if(ja){var i=iu(e,t,n,r);if(i===null)rl(e,t,r,Ca,n),Ad(e,r);else if(f0(i,e,t,n,r))r.stopPropagation();else if(Ad(e,r),t&4&&-1<d0.indexOf(e)){for(;i!==null;){var o=po(i);if(o!==null&&Vh(o),o=iu(e,t,n,r),o===null&&rl(e,t,r,Ca,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else rl(e,t,r,null,n)}}var Ca=null;function iu(e,t,n,r){if(Ca=null,e=ac(r),e=ar(e),e!==null)if(t=yr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Rh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ca=e,null}function Hh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(n0()){case sc:return 1;case Dh:return 4;case Sa:case r0:return 16;case Fh:return 536870912;default:return 16}default:return 16}}var $n=null,dc=null,ea=null;function Yh(){if(ea)return ea;var e,t=dc,n=t.length,r,i="value"in $n?$n.value:$n.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return ea=i.slice(e,1<r?1-r:void 0)}function ta(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Oo(){return!0}function Fd(){return!1}function _t(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Oo:Fd,this.isPropagationStopped=Fd,this}return Le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oo)},persist:function(){},isPersistent:Oo}),t}var ii={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fc=_t(ii),fo=Le({},ii,{view:0,detail:0}),g0=_t(fo),Ks,Gs,fi,os=Le({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fi&&(fi&&e.type==="mousemove"?(Ks=e.screenX-fi.screenX,Gs=e.screenY-fi.screenY):Gs=Ks=0,fi=e),Ks)},movementY:function(e){return"movementY"in e?e.movementY:Gs}}),zd=_t(os),v0=Le({},os,{dataTransfer:0}),x0=_t(v0),y0=Le({},fo,{relatedTarget:0}),Xs=_t(y0),w0=Le({},ii,{animationName:0,elapsedTime:0,pseudoElement:0}),b0=_t(w0),S0=Le({},ii,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),k0=_t(S0),j0=Le({},ii,{data:0}),Nd=_t(j0),C0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},E0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function O0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_0[e])?!!t[e]:!1}function pc(){return O0}var T0=Le({},fo,{key:function(e){if(e.key){var t=C0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ta(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?E0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pc,charCode:function(e){return e.type==="keypress"?ta(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ta(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),P0=_t(T0),M0=Le({},os,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vd=_t(M0),R0=Le({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pc}),I0=_t(R0),L0=Le({},ii,{propertyName:0,elapsedTime:0,pseudoElement:0}),A0=_t(L0),D0=Le({},os,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),F0=_t(D0),z0=[9,13,27,32],hc=Sn&&"CompositionEvent"in window,Ri=null;Sn&&"documentMode"in document&&(Ri=document.documentMode);var N0=Sn&&"TextEvent"in window&&!Ri,Qh=Sn&&(!hc||Ri&&8<Ri&&11>=Ri),$d=" ",Ud=!1;function Kh(e,t){switch(e){case"keyup":return z0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tr=!1;function V0(e,t){switch(e){case"compositionend":return Gh(t);case"keypress":return t.which!==32?null:(Ud=!0,$d);case"textInput":return e=t.data,e===$d&&Ud?null:e;default:return null}}function $0(e,t){if(Tr)return e==="compositionend"||!hc&&Kh(e,t)?(e=Yh(),ea=dc=$n=null,Tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qh&&t.locale!=="ko"?null:t.data;default:return null}}var U0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!U0[e.type]:t==="textarea"}function Xh(e,t,n,r){_h(r),t=Ea(t,"onChange"),0<t.length&&(n=new fc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ii=null,Ki=null;function B0(e){sm(e,0)}function as(e){var t=Rr(e);if(wh(t))return e}function W0(e,t){if(e==="change")return t}var qh=!1;if(Sn){var qs;if(Sn){var Js="oninput"in document;if(!Js){var Wd=document.createElement("div");Wd.setAttribute("oninput","return;"),Js=typeof Wd.oninput=="function"}qs=Js}else qs=!1;qh=qs&&(!document.documentMode||9<document.documentMode)}function Hd(){Ii&&(Ii.detachEvent("onpropertychange",Jh),Ki=Ii=null)}function Jh(e){if(e.propertyName==="value"&&as(Ki)){var t=[];Xh(t,Ki,e,ac(e)),Mh(B0,t)}}function H0(e,t,n){e==="focusin"?(Hd(),Ii=t,Ki=n,Ii.attachEvent("onpropertychange",Jh)):e==="focusout"&&Hd()}function Y0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return as(Ki)}function Q0(e,t){if(e==="click")return as(t)}function K0(e,t){if(e==="input"||e==="change")return as(t)}function G0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xt=typeof Object.is=="function"?Object.is:G0;function Gi(e,t){if(Xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Vl.call(t,i)||!Xt(e[i],t[i]))return!1}return!0}function Yd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qd(e,t){var n=Yd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yd(n)}}function Zh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function em(){for(var e=window,t=ya();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ya(e.document)}return t}function mc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function X0(e){var t=em(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Zh(n.ownerDocument.documentElement,n)){if(r!==null&&mc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Qd(n,o);var a=Qd(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var q0=Sn&&"documentMode"in document&&11>=document.documentMode,Pr=null,ou=null,Li=null,au=!1;function Kd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;au||Pr==null||Pr!==ya(r)||(r=Pr,"selectionStart"in r&&mc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Li&&Gi(Li,r)||(Li=r,r=Ea(ou,"onSelect"),0<r.length&&(t=new fc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Pr)))}function To(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Mr={animationend:To("Animation","AnimationEnd"),animationiteration:To("Animation","AnimationIteration"),animationstart:To("Animation","AnimationStart"),transitionend:To("Transition","TransitionEnd")},Zs={},tm={};Sn&&(tm=document.createElement("div").style,"AnimationEvent"in window||(delete Mr.animationend.animation,delete Mr.animationiteration.animation,delete Mr.animationstart.animation),"TransitionEvent"in window||delete Mr.transitionend.transition);function ss(e){if(Zs[e])return Zs[e];if(!Mr[e])return e;var t=Mr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in tm)return Zs[e]=t[n];return e}var nm=ss("animationend"),rm=ss("animationiteration"),im=ss("animationstart"),om=ss("transitionend"),am=new Map,Gd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(e,t){am.set(e,t),xr(t,[e])}for(var el=0;el<Gd.length;el++){var tl=Gd[el],J0=tl.toLowerCase(),Z0=tl[0].toUpperCase()+tl.slice(1);tr(J0,"on"+Z0)}tr(nm,"onAnimationEnd");tr(rm,"onAnimationIteration");tr(im,"onAnimationStart");tr("dblclick","onDoubleClick");tr("focusin","onFocus");tr("focusout","onBlur");tr(om,"onTransitionEnd");Qr("onMouseEnter",["mouseout","mouseover"]);Qr("onMouseLeave",["mouseout","mouseover"]);Qr("onPointerEnter",["pointerout","pointerover"]);Qr("onPointerLeave",["pointerout","pointerover"]);xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _i="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ey=new Set("cancel close invalid load scroll toggle".split(" ").concat(_i));function Xd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Jx(r,t,void 0,e),e.currentTarget=null}function sm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;Xd(i,l,u),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;Xd(i,l,u),o=s}}}if(ba)throw e=tu,ba=!1,tu=null,e}function Oe(e,t){var n=t[du];n===void 0&&(n=t[du]=new Set);var r=e+"__bubble";n.has(r)||(lm(t,e,2,!1),n.add(r))}function nl(e,t,n){var r=0;t&&(r|=4),lm(n,e,r,t)}var Po="_reactListening"+Math.random().toString(36).slice(2);function Xi(e){if(!e[Po]){e[Po]=!0,mh.forEach(function(n){n!=="selectionchange"&&(ey.has(n)||nl(n,!1,e),nl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Po]||(t[Po]=!0,nl("selectionchange",!1,t))}}function lm(e,t,n,r){switch(Hh(t)){case 1:var i=h0;break;case 4:i=m0;break;default:i=cc}n=i.bind(null,t,n,e),i=void 0,!eu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function rl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=ar(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Mh(function(){var u=o,h=ac(n),p=[];e:{var v=am.get(e);if(v!==void 0){var x=fc,m=e;switch(e){case"keypress":if(ta(n)===0)break e;case"keydown":case"keyup":x=P0;break;case"focusin":m="focus",x=Xs;break;case"focusout":m="blur",x=Xs;break;case"beforeblur":case"afterblur":x=Xs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=zd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=x0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=I0;break;case nm:case rm:case im:x=b0;break;case om:x=A0;break;case"scroll":x=g0;break;case"wheel":x=F0;break;case"copy":case"cut":case"paste":x=k0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Vd}var y=(t&4)!==0,b=!y&&e==="scroll",d=y?v!==null?v+"Capture":null:v;y=[];for(var f=u,g;f!==null;){g=f;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,d!==null&&(w=Wi(f,d),w!=null&&y.push(qi(f,w,g)))),b)break;f=f.return}0<y.length&&(v=new x(v,m,null,n,h),p.push({event:v,listeners:y}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",v&&n!==Jl&&(m=n.relatedTarget||n.fromElement)&&(ar(m)||m[kn]))break e;if((x||v)&&(v=h.window===h?h:(v=h.ownerDocument)?v.defaultView||v.parentWindow:window,x?(m=n.relatedTarget||n.toElement,x=u,m=m?ar(m):null,m!==null&&(b=yr(m),m!==b||m.tag!==5&&m.tag!==6)&&(m=null)):(x=null,m=u),x!==m)){if(y=zd,w="onMouseLeave",d="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(y=Vd,w="onPointerLeave",d="onPointerEnter",f="pointer"),b=x==null?v:Rr(x),g=m==null?v:Rr(m),v=new y(w,f+"leave",x,n,h),v.target=b,v.relatedTarget=g,w=null,ar(h)===u&&(y=new y(d,f+"enter",m,n,h),y.target=g,y.relatedTarget=b,w=y),b=w,x&&m)t:{for(y=x,d=m,f=0,g=y;g;g=br(g))f++;for(g=0,w=d;w;w=br(w))g++;for(;0<f-g;)y=br(y),f--;for(;0<g-f;)d=br(d),g--;for(;f--;){if(y===d||d!==null&&y===d.alternate)break t;y=br(y),d=br(d)}y=null}else y=null;x!==null&&qd(p,v,x,y,!1),m!==null&&b!==null&&qd(p,b,m,y,!0)}}e:{if(v=u?Rr(u):window,x=v.nodeName&&v.nodeName.toLowerCase(),x==="select"||x==="input"&&v.type==="file")var S=W0;else if(Bd(v))if(qh)S=K0;else{S=Y0;var T=H0}else(x=v.nodeName)&&x.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(S=Q0);if(S&&(S=S(e,u))){Xh(p,S,n,h);break e}T&&T(e,v,u),e==="focusout"&&(T=v._wrapperState)&&T.controlled&&v.type==="number"&&Ql(v,"number",v.value)}switch(T=u?Rr(u):window,e){case"focusin":(Bd(T)||T.contentEditable==="true")&&(Pr=T,ou=u,Li=null);break;case"focusout":Li=ou=Pr=null;break;case"mousedown":au=!0;break;case"contextmenu":case"mouseup":case"dragend":au=!1,Kd(p,n,h);break;case"selectionchange":if(q0)break;case"keydown":case"keyup":Kd(p,n,h)}var _;if(hc)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Tr?Kh(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(Qh&&n.locale!=="ko"&&(Tr||j!=="onCompositionStart"?j==="onCompositionEnd"&&Tr&&(_=Yh()):($n=h,dc="value"in $n?$n.value:$n.textContent,Tr=!0)),T=Ea(u,j),0<T.length&&(j=new Nd(j,e,null,n,h),p.push({event:j,listeners:T}),_?j.data=_:(_=Gh(n),_!==null&&(j.data=_)))),(_=N0?V0(e,n):$0(e,n))&&(u=Ea(u,"onBeforeInput"),0<u.length&&(h=new Nd("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:u}),h.data=_))}sm(p,t)})}function qi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ea(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Wi(e,n),o!=null&&r.unshift(qi(e,o,i)),o=Wi(e,t),o!=null&&r.push(qi(e,o,i))),e=e.return}return r}function br(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function qd(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=Wi(n,o),s!=null&&a.unshift(qi(n,s,l))):i||(s=Wi(n,o),s!=null&&a.push(qi(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var ty=/\r\n?/g,ny=/\u0000|\uFFFD/g;function Jd(e){return(typeof e=="string"?e:""+e).replace(ty,`
`).replace(ny,"")}function Mo(e,t,n){if(t=Jd(t),Jd(e)!==t&&n)throw Error(F(425))}function _a(){}var su=null,lu=null;function uu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var cu=typeof setTimeout=="function"?setTimeout:void 0,ry=typeof clearTimeout=="function"?clearTimeout:void 0,Zd=typeof Promise=="function"?Promise:void 0,iy=typeof queueMicrotask=="function"?queueMicrotask:typeof Zd<"u"?function(e){return Zd.resolve(null).then(e).catch(oy)}:cu;function oy(e){setTimeout(function(){throw e})}function il(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Qi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Qi(t)}function Kn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ef(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var oi=Math.random().toString(36).slice(2),rn="__reactFiber$"+oi,Ji="__reactProps$"+oi,kn="__reactContainer$"+oi,du="__reactEvents$"+oi,ay="__reactListeners$"+oi,sy="__reactHandles$"+oi;function ar(e){var t=e[rn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[kn]||n[rn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ef(e);e!==null;){if(n=e[rn])return n;e=ef(e)}return t}e=n,n=e.parentNode}return null}function po(e){return e=e[rn]||e[kn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Rr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(F(33))}function ls(e){return e[Ji]||null}var fu=[],Ir=-1;function nr(e){return{current:e}}function Te(e){0>Ir||(e.current=fu[Ir],fu[Ir]=null,Ir--)}function Ee(e,t){Ir++,fu[Ir]=e.current,e.current=t}var er={},at=nr(er),gt=nr(!1),fr=er;function Kr(e,t){var n=e.type.contextTypes;if(!n)return er;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function vt(e){return e=e.childContextTypes,e!=null}function Oa(){Te(gt),Te(at)}function tf(e,t,n){if(at.current!==er)throw Error(F(168));Ee(at,t),Ee(gt,n)}function um(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(F(108,Hx(e)||"Unknown",i));return Le({},n,r)}function Ta(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||er,fr=at.current,Ee(at,e),Ee(gt,gt.current),!0}function nf(e,t,n){var r=e.stateNode;if(!r)throw Error(F(169));n?(e=um(e,t,fr),r.__reactInternalMemoizedMergedChildContext=e,Te(gt),Te(at),Ee(at,e)):Te(gt),Ee(gt,n)}var mn=null,us=!1,ol=!1;function cm(e){mn===null?mn=[e]:mn.push(e)}function ly(e){us=!0,cm(e)}function rr(){if(!ol&&mn!==null){ol=!0;var e=0,t=we;try{var n=mn;for(we=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}mn=null,us=!1}catch(i){throw mn!==null&&(mn=mn.slice(e+1)),Ah(sc,rr),i}finally{we=t,ol=!1}}return null}var Lr=[],Ar=0,Pa=null,Ma=0,Rt=[],It=0,pr=null,vn=1,xn="";function ir(e,t){Lr[Ar++]=Ma,Lr[Ar++]=Pa,Pa=e,Ma=t}function dm(e,t,n){Rt[It++]=vn,Rt[It++]=xn,Rt[It++]=pr,pr=e;var r=vn;e=xn;var i=32-Qt(r)-1;r&=~(1<<i),n+=1;var o=32-Qt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,vn=1<<32-Qt(t)+i|n<<i|r,xn=o+e}else vn=1<<o|n<<i|r,xn=e}function gc(e){e.return!==null&&(ir(e,1),dm(e,1,0))}function vc(e){for(;e===Pa;)Pa=Lr[--Ar],Lr[Ar]=null,Ma=Lr[--Ar],Lr[Ar]=null;for(;e===pr;)pr=Rt[--It],Rt[It]=null,xn=Rt[--It],Rt[It]=null,vn=Rt[--It],Rt[It]=null}var St=null,bt=null,Me=!1,Ht=null;function fm(e,t){var n=At(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function rf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,St=e,bt=Kn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,St=e,bt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=pr!==null?{id:vn,overflow:xn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=At(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,St=e,bt=null,!0):!1;default:return!1}}function pu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function hu(e){if(Me){var t=bt;if(t){var n=t;if(!rf(e,t)){if(pu(e))throw Error(F(418));t=Kn(n.nextSibling);var r=St;t&&rf(e,t)?fm(r,n):(e.flags=e.flags&-4097|2,Me=!1,St=e)}}else{if(pu(e))throw Error(F(418));e.flags=e.flags&-4097|2,Me=!1,St=e}}}function of(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;St=e}function Ro(e){if(e!==St)return!1;if(!Me)return of(e),Me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!uu(e.type,e.memoizedProps)),t&&(t=bt)){if(pu(e))throw pm(),Error(F(418));for(;t;)fm(e,t),t=Kn(t.nextSibling)}if(of(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(F(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){bt=Kn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}bt=null}}else bt=St?Kn(e.stateNode.nextSibling):null;return!0}function pm(){for(var e=bt;e;)e=Kn(e.nextSibling)}function Gr(){bt=St=null,Me=!1}function xc(e){Ht===null?Ht=[e]:Ht.push(e)}var uy=En.ReactCurrentBatchConfig;function $t(e,t){if(e&&e.defaultProps){t=Le({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ra=nr(null),Ia=null,Dr=null,yc=null;function wc(){yc=Dr=Ia=null}function bc(e){var t=Ra.current;Te(Ra),e._currentValue=t}function mu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Wr(e,t){Ia=e,yc=Dr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(mt=!0),e.firstContext=null)}function zt(e){var t=e._currentValue;if(yc!==e)if(e={context:e,memoizedValue:t,next:null},Dr===null){if(Ia===null)throw Error(F(308));Dr=e,Ia.dependencies={lanes:0,firstContext:e}}else Dr=Dr.next=e;return t}var sr=null;function Sc(e){sr===null?sr=[e]:sr.push(e)}function hm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Sc(t)):(n.next=i.next,i.next=n),t.interleaved=n,jn(e,r)}function jn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var zn=!1;function kc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function yn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Gn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,me&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,jn(e,n)}return i=r.interleaved,i===null?(t.next=t,Sc(r)):(t.next=i.next,i.next=t),r.interleaved=t,jn(e,n)}function na(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lc(e,n)}}function af(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function La(e,t,n,r){var i=e.updateQueue;zn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?o=u:a.next=u,a=s;var h=e.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==a&&(l===null?h.firstBaseUpdate=u:l.next=u,h.lastBaseUpdate=s))}if(o!==null){var p=i.baseState;a=0,h=u=s=null,l=o;do{var v=l.lane,x=l.eventTime;if((r&v)===v){h!==null&&(h=h.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,y=l;switch(v=t,x=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){p=m.call(x,p,v);break e}p=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,v=typeof m=="function"?m.call(x,p,v):m,v==null)break e;p=Le({},p,v);break e;case 2:zn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,v=i.effects,v===null?i.effects=[l]:v.push(l))}else x={eventTime:x,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(u=h=x,s=p):h=h.next=x,a|=v;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;v=l,l=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(!0);if(h===null&&(s=p),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);mr|=a,e.lanes=a,e.memoizedState=p}}function sf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var gm=new hh.Component().refs;function gu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Le({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var cs={isMounted:function(e){return(e=e._reactInternals)?yr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ct(),i=qn(e),o=yn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Gn(e,o,i),t!==null&&(Kt(t,e,i,r),na(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ct(),i=qn(e),o=yn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Gn(e,o,i),t!==null&&(Kt(t,e,i,r),na(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ct(),r=qn(e),i=yn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Gn(e,i,r),t!==null&&(Kt(t,e,r,n),na(t,e,r))}};function lf(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Gi(n,r)||!Gi(i,o):!0}function vm(e,t,n){var r=!1,i=er,o=t.contextType;return typeof o=="object"&&o!==null?o=zt(o):(i=vt(t)?fr:at.current,r=t.contextTypes,o=(r=r!=null)?Kr(e,i):er),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=cs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function uf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&cs.enqueueReplaceState(t,t.state,null)}function vu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=gm,kc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=zt(o):(o=vt(t)?fr:at.current,i.context=Kr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(gu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&cs.enqueueReplaceState(i,i.state,null),La(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function pi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===gm&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,e))}return e}function Io(e,t){throw e=Object.prototype.toString.call(t),Error(F(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function cf(e){var t=e._init;return t(e._payload)}function xm(e){function t(d,f){if(e){var g=d.deletions;g===null?(d.deletions=[f],d.flags|=16):g.push(f)}}function n(d,f){if(!e)return null;for(;f!==null;)t(d,f),f=f.sibling;return null}function r(d,f){for(d=new Map;f!==null;)f.key!==null?d.set(f.key,f):d.set(f.index,f),f=f.sibling;return d}function i(d,f){return d=Jn(d,f),d.index=0,d.sibling=null,d}function o(d,f,g){return d.index=g,e?(g=d.alternate,g!==null?(g=g.index,g<f?(d.flags|=2,f):g):(d.flags|=2,f)):(d.flags|=1048576,f)}function a(d){return e&&d.alternate===null&&(d.flags|=2),d}function l(d,f,g,w){return f===null||f.tag!==6?(f=fl(g,d.mode,w),f.return=d,f):(f=i(f,g),f.return=d,f)}function s(d,f,g,w){var S=g.type;return S===Or?h(d,f,g.props.children,w,g.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Fn&&cf(S)===f.type)?(w=i(f,g.props),w.ref=pi(d,f,g),w.return=d,w):(w=la(g.type,g.key,g.props,null,d.mode,w),w.ref=pi(d,f,g),w.return=d,w)}function u(d,f,g,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=pl(g,d.mode,w),f.return=d,f):(f=i(f,g.children||[]),f.return=d,f)}function h(d,f,g,w,S){return f===null||f.tag!==7?(f=dr(g,d.mode,w,S),f.return=d,f):(f=i(f,g),f.return=d,f)}function p(d,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=fl(""+f,d.mode,g),f.return=d,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case So:return g=la(f.type,f.key,f.props,null,d.mode,g),g.ref=pi(d,null,f),g.return=d,g;case _r:return f=pl(f,d.mode,g),f.return=d,f;case Fn:var w=f._init;return p(d,w(f._payload),g)}if(Ci(f)||li(f))return f=dr(f,d.mode,g,null),f.return=d,f;Io(d,f)}return null}function v(d,f,g,w){var S=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:l(d,f,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case So:return g.key===S?s(d,f,g,w):null;case _r:return g.key===S?u(d,f,g,w):null;case Fn:return S=g._init,v(d,f,S(g._payload),w)}if(Ci(g)||li(g))return S!==null?null:h(d,f,g,w,null);Io(d,g)}return null}function x(d,f,g,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return d=d.get(g)||null,l(f,d,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case So:return d=d.get(w.key===null?g:w.key)||null,s(f,d,w,S);case _r:return d=d.get(w.key===null?g:w.key)||null,u(f,d,w,S);case Fn:var T=w._init;return x(d,f,g,T(w._payload),S)}if(Ci(w)||li(w))return d=d.get(g)||null,h(f,d,w,S,null);Io(f,w)}return null}function m(d,f,g,w){for(var S=null,T=null,_=f,j=f=0,C=null;_!==null&&j<g.length;j++){_.index>j?(C=_,_=null):C=_.sibling;var P=v(d,_,g[j],w);if(P===null){_===null&&(_=C);break}e&&_&&P.alternate===null&&t(d,_),f=o(P,f,j),T===null?S=P:T.sibling=P,T=P,_=C}if(j===g.length)return n(d,_),Me&&ir(d,j),S;if(_===null){for(;j<g.length;j++)_=p(d,g[j],w),_!==null&&(f=o(_,f,j),T===null?S=_:T.sibling=_,T=_);return Me&&ir(d,j),S}for(_=r(d,_);j<g.length;j++)C=x(_,d,j,g[j],w),C!==null&&(e&&C.alternate!==null&&_.delete(C.key===null?j:C.key),f=o(C,f,j),T===null?S=C:T.sibling=C,T=C);return e&&_.forEach(function(M){return t(d,M)}),Me&&ir(d,j),S}function y(d,f,g,w){var S=li(g);if(typeof S!="function")throw Error(F(150));if(g=S.call(g),g==null)throw Error(F(151));for(var T=S=null,_=f,j=f=0,C=null,P=g.next();_!==null&&!P.done;j++,P=g.next()){_.index>j?(C=_,_=null):C=_.sibling;var M=v(d,_,P.value,w);if(M===null){_===null&&(_=C);break}e&&_&&M.alternate===null&&t(d,_),f=o(M,f,j),T===null?S=M:T.sibling=M,T=M,_=C}if(P.done)return n(d,_),Me&&ir(d,j),S;if(_===null){for(;!P.done;j++,P=g.next())P=p(d,P.value,w),P!==null&&(f=o(P,f,j),T===null?S=P:T.sibling=P,T=P);return Me&&ir(d,j),S}for(_=r(d,_);!P.done;j++,P=g.next())P=x(_,d,j,P.value,w),P!==null&&(e&&P.alternate!==null&&_.delete(P.key===null?j:P.key),f=o(P,f,j),T===null?S=P:T.sibling=P,T=P);return e&&_.forEach(function(I){return t(d,I)}),Me&&ir(d,j),S}function b(d,f,g,w){if(typeof g=="object"&&g!==null&&g.type===Or&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case So:e:{for(var S=g.key,T=f;T!==null;){if(T.key===S){if(S=g.type,S===Or){if(T.tag===7){n(d,T.sibling),f=i(T,g.props.children),f.return=d,d=f;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Fn&&cf(S)===T.type){n(d,T.sibling),f=i(T,g.props),f.ref=pi(d,T,g),f.return=d,d=f;break e}n(d,T);break}else t(d,T);T=T.sibling}g.type===Or?(f=dr(g.props.children,d.mode,w,g.key),f.return=d,d=f):(w=la(g.type,g.key,g.props,null,d.mode,w),w.ref=pi(d,f,g),w.return=d,d=w)}return a(d);case _r:e:{for(T=g.key;f!==null;){if(f.key===T)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(d,f.sibling),f=i(f,g.children||[]),f.return=d,d=f;break e}else{n(d,f);break}else t(d,f);f=f.sibling}f=pl(g,d.mode,w),f.return=d,d=f}return a(d);case Fn:return T=g._init,b(d,f,T(g._payload),w)}if(Ci(g))return m(d,f,g,w);if(li(g))return y(d,f,g,w);Io(d,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(d,f.sibling),f=i(f,g),f.return=d,d=f):(n(d,f),f=fl(g,d.mode,w),f.return=d,d=f),a(d)):n(d,f)}return b}var Xr=xm(!0),ym=xm(!1),ho={},ln=nr(ho),Zi=nr(ho),eo=nr(ho);function lr(e){if(e===ho)throw Error(F(174));return e}function jc(e,t){switch(Ee(eo,t),Ee(Zi,e),Ee(ln,ho),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Gl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Gl(t,e)}Te(ln),Ee(ln,t)}function qr(){Te(ln),Te(Zi),Te(eo)}function wm(e){lr(eo.current);var t=lr(ln.current),n=Gl(t,e.type);t!==n&&(Ee(Zi,e),Ee(ln,n))}function Cc(e){Zi.current===e&&(Te(ln),Te(Zi))}var Re=nr(0);function Aa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var al=[];function Ec(){for(var e=0;e<al.length;e++)al[e]._workInProgressVersionPrimary=null;al.length=0}var ra=En.ReactCurrentDispatcher,sl=En.ReactCurrentBatchConfig,hr=0,Ie=null,Ue=null,Qe=null,Da=!1,Ai=!1,to=0,cy=0;function nt(){throw Error(F(321))}function _c(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Xt(e[n],t[n]))return!1;return!0}function Oc(e,t,n,r,i,o){if(hr=o,Ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ra.current=e===null||e.memoizedState===null?hy:my,e=n(r,i),Ai){o=0;do{if(Ai=!1,to=0,25<=o)throw Error(F(301));o+=1,Qe=Ue=null,t.updateQueue=null,ra.current=gy,e=n(r,i)}while(Ai)}if(ra.current=Fa,t=Ue!==null&&Ue.next!==null,hr=0,Qe=Ue=Ie=null,Da=!1,t)throw Error(F(300));return e}function Tc(){var e=to!==0;return to=0,e}function en(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?Ie.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function Nt(){if(Ue===null){var e=Ie.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var t=Qe===null?Ie.memoizedState:Qe.next;if(t!==null)Qe=t,Ue=e;else{if(e===null)throw Error(F(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},Qe===null?Ie.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}function no(e,t){return typeof t=="function"?t(e):t}function ll(e){var t=Nt(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=Ue,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,u=o;do{var h=u.lane;if((hr&h)===h)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=p,a=r):s=s.next=p,Ie.lanes|=h,mr|=h}u=u.next}while(u!==null&&u!==o);s===null?a=r:s.next=l,Xt(r,t.memoizedState)||(mt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ie.lanes|=o,mr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ul(e){var t=Nt(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Xt(o,t.memoizedState)||(mt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function bm(){}function Sm(e,t){var n=Ie,r=Nt(),i=t(),o=!Xt(r.memoizedState,i);if(o&&(r.memoizedState=i,mt=!0),r=r.queue,Pc(Cm.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Qe!==null&&Qe.memoizedState.tag&1){if(n.flags|=2048,ro(9,jm.bind(null,n,r,i,t),void 0,null),Ke===null)throw Error(F(349));hr&30||km(n,t,i)}return i}function km(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function jm(e,t,n,r){t.value=n,t.getSnapshot=r,Em(t)&&_m(e)}function Cm(e,t,n){return n(function(){Em(t)&&_m(e)})}function Em(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Xt(e,n)}catch{return!0}}function _m(e){var t=jn(e,1);t!==null&&Kt(t,e,1,-1)}function df(e){var t=en();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:no,lastRenderedState:e},t.queue=e,e=e.dispatch=py.bind(null,Ie,e),[t.memoizedState,e]}function ro(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Om(){return Nt().memoizedState}function ia(e,t,n,r){var i=en();Ie.flags|=e,i.memoizedState=ro(1|t,n,void 0,r===void 0?null:r)}function ds(e,t,n,r){var i=Nt();r=r===void 0?null:r;var o=void 0;if(Ue!==null){var a=Ue.memoizedState;if(o=a.destroy,r!==null&&_c(r,a.deps)){i.memoizedState=ro(t,n,o,r);return}}Ie.flags|=e,i.memoizedState=ro(1|t,n,o,r)}function ff(e,t){return ia(8390656,8,e,t)}function Pc(e,t){return ds(2048,8,e,t)}function Tm(e,t){return ds(4,2,e,t)}function Pm(e,t){return ds(4,4,e,t)}function Mm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rm(e,t,n){return n=n!=null?n.concat([e]):null,ds(4,4,Mm.bind(null,t,e),n)}function Mc(){}function Im(e,t){var n=Nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_c(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Lm(e,t){var n=Nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_c(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Am(e,t,n){return hr&21?(Xt(n,t)||(n=zh(),Ie.lanes|=n,mr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,mt=!0),e.memoizedState=n)}function dy(e,t){var n=we;we=n!==0&&4>n?n:4,e(!0);var r=sl.transition;sl.transition={};try{e(!1),t()}finally{we=n,sl.transition=r}}function Dm(){return Nt().memoizedState}function fy(e,t,n){var r=qn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Fm(e))zm(t,n);else if(n=hm(e,t,n,r),n!==null){var i=ct();Kt(n,e,r,i),Nm(n,t,r)}}function py(e,t,n){var r=qn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fm(e))zm(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,Xt(l,a)){var s=t.interleaved;s===null?(i.next=i,Sc(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=hm(e,t,i,r),n!==null&&(i=ct(),Kt(n,e,r,i),Nm(n,t,r))}}function Fm(e){var t=e.alternate;return e===Ie||t!==null&&t===Ie}function zm(e,t){Ai=Da=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Nm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lc(e,n)}}var Fa={readContext:zt,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},hy={readContext:zt,useCallback:function(e,t){return en().memoizedState=[e,t===void 0?null:t],e},useContext:zt,useEffect:ff,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ia(4194308,4,Mm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ia(4194308,4,e,t)},useInsertionEffect:function(e,t){return ia(4,2,e,t)},useMemo:function(e,t){var n=en();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=en();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=fy.bind(null,Ie,e),[r.memoizedState,e]},useRef:function(e){var t=en();return e={current:e},t.memoizedState=e},useState:df,useDebugValue:Mc,useDeferredValue:function(e){return en().memoizedState=e},useTransition:function(){var e=df(!1),t=e[0];return e=dy.bind(null,e[1]),en().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ie,i=en();if(Me){if(n===void 0)throw Error(F(407));n=n()}else{if(n=t(),Ke===null)throw Error(F(349));hr&30||km(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,ff(Cm.bind(null,r,o,e),[e]),r.flags|=2048,ro(9,jm.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=en(),t=Ke.identifierPrefix;if(Me){var n=xn,r=vn;n=(r&~(1<<32-Qt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=to++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=cy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},my={readContext:zt,useCallback:Im,useContext:zt,useEffect:Pc,useImperativeHandle:Rm,useInsertionEffect:Tm,useLayoutEffect:Pm,useMemo:Lm,useReducer:ll,useRef:Om,useState:function(){return ll(no)},useDebugValue:Mc,useDeferredValue:function(e){var t=Nt();return Am(t,Ue.memoizedState,e)},useTransition:function(){var e=ll(no)[0],t=Nt().memoizedState;return[e,t]},useMutableSource:bm,useSyncExternalStore:Sm,useId:Dm,unstable_isNewReconciler:!1},gy={readContext:zt,useCallback:Im,useContext:zt,useEffect:Pc,useImperativeHandle:Rm,useInsertionEffect:Tm,useLayoutEffect:Pm,useMemo:Lm,useReducer:ul,useRef:Om,useState:function(){return ul(no)},useDebugValue:Mc,useDeferredValue:function(e){var t=Nt();return Ue===null?t.memoizedState=e:Am(t,Ue.memoizedState,e)},useTransition:function(){var e=ul(no)[0],t=Nt().memoizedState;return[e,t]},useMutableSource:bm,useSyncExternalStore:Sm,useId:Dm,unstable_isNewReconciler:!1};function Jr(e,t){try{var n="",r=t;do n+=Wx(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function cl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function xu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var vy=typeof WeakMap=="function"?WeakMap:Map;function Vm(e,t,n){n=yn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Na||(Na=!0,Ou=r),xu(e,t)},n}function $m(e,t,n){n=yn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){xu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){xu(e,t),typeof r!="function"&&(Xn===null?Xn=new Set([this]):Xn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function pf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new vy;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=My.bind(null,e,t,n),t.then(e,e))}function hf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function mf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=yn(-1,1),t.tag=2,Gn(n,t,1))),n.lanes|=1),e)}var xy=En.ReactCurrentOwner,mt=!1;function lt(e,t,n,r){t.child=e===null?ym(t,null,n,r):Xr(t,e.child,n,r)}function gf(e,t,n,r,i){n=n.render;var o=t.ref;return Wr(t,i),r=Oc(e,t,n,r,o,i),n=Tc(),e!==null&&!mt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Cn(e,t,i)):(Me&&n&&gc(t),t.flags|=1,lt(e,t,r,i),t.child)}function vf(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Nc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Um(e,t,o,r,i)):(e=la(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Gi,n(a,r)&&e.ref===t.ref)return Cn(e,t,i)}return t.flags|=1,e=Jn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Um(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Gi(o,r)&&e.ref===t.ref)if(mt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(mt=!0);else return t.lanes=e.lanes,Cn(e,t,i)}return yu(e,t,n,r,i)}function Bm(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(zr,wt),wt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ee(zr,wt),wt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Ee(zr,wt),wt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ee(zr,wt),wt|=r;return lt(e,t,i,n),t.child}function Wm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function yu(e,t,n,r,i){var o=vt(n)?fr:at.current;return o=Kr(t,o),Wr(t,i),n=Oc(e,t,n,r,o,i),r=Tc(),e!==null&&!mt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Cn(e,t,i)):(Me&&r&&gc(t),t.flags|=1,lt(e,t,n,i),t.child)}function xf(e,t,n,r,i){if(vt(n)){var o=!0;Ta(t)}else o=!1;if(Wr(t,i),t.stateNode===null)oa(e,t),vm(t,n,r),vu(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=zt(u):(u=vt(n)?fr:at.current,u=Kr(t,u));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&uf(t,a,r,u),zn=!1;var v=t.memoizedState;a.state=v,La(t,r,a,i),s=t.memoizedState,l!==r||v!==s||gt.current||zn?(typeof h=="function"&&(gu(t,n,h,r),s=t.memoizedState),(l=zn||lf(t,n,l,r,v,s,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,mm(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:$t(t.type,l),a.props=u,p=t.pendingProps,v=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=zt(s):(s=vt(n)?fr:at.current,s=Kr(t,s));var x=n.getDerivedStateFromProps;(h=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||v!==s)&&uf(t,a,r,s),zn=!1,v=t.memoizedState,a.state=v,La(t,r,a,i);var m=t.memoizedState;l!==p||v!==m||gt.current||zn?(typeof x=="function"&&(gu(t,n,x,r),m=t.memoizedState),(u=zn||lf(t,n,u,r,v,m,s)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,m,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,m,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),a.props=r,a.state=m,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return wu(e,t,n,r,o,i)}function wu(e,t,n,r,i,o){Wm(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&nf(t,n,!1),Cn(e,t,o);r=t.stateNode,xy.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Xr(t,e.child,null,o),t.child=Xr(t,null,l,o)):lt(e,t,l,o),t.memoizedState=r.state,i&&nf(t,n,!0),t.child}function Hm(e){var t=e.stateNode;t.pendingContext?tf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&tf(e,t.context,!1),jc(e,t.containerInfo)}function yf(e,t,n,r,i){return Gr(),xc(i),t.flags|=256,lt(e,t,n,r),t.child}var bu={dehydrated:null,treeContext:null,retryLane:0};function Su(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ym(e,t,n){var r=t.pendingProps,i=Re.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ee(Re,i&1),e===null)return hu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=hs(a,r,0,null),e=dr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Su(n),t.memoizedState=bu,e):Rc(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return yy(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Jn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Jn(l,o):(o=dr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Su(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=bu,r}return o=e.child,e=o.sibling,r=Jn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Rc(e,t){return t=hs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Lo(e,t,n,r){return r!==null&&xc(r),Xr(t,e.child,null,n),e=Rc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yy(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=cl(Error(F(422))),Lo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=hs({mode:"visible",children:r.children},i,0,null),o=dr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Xr(t,e.child,null,a),t.child.memoizedState=Su(a),t.memoizedState=bu,o);if(!(t.mode&1))return Lo(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(F(419)),r=cl(o,r,void 0),Lo(e,t,a,r)}if(l=(a&e.childLanes)!==0,mt||l){if(r=Ke,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,jn(e,i),Kt(r,e,i,-1))}return zc(),r=cl(Error(F(421))),Lo(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Ry.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,bt=Kn(i.nextSibling),St=t,Me=!0,Ht=null,e!==null&&(Rt[It++]=vn,Rt[It++]=xn,Rt[It++]=pr,vn=e.id,xn=e.overflow,pr=t),t=Rc(t,r.children),t.flags|=4096,t)}function wf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),mu(e.return,t,n)}function dl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Qm(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(lt(e,t,r.children,n),r=Re.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wf(e,n,t);else if(e.tag===19)wf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ee(Re,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Aa(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),dl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Aa(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}dl(t,!0,n,null,o);break;case"together":dl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function oa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Cn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),mr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(F(153));if(t.child!==null){for(e=t.child,n=Jn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Jn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function wy(e,t,n){switch(t.tag){case 3:Hm(t),Gr();break;case 5:wm(t);break;case 1:vt(t.type)&&Ta(t);break;case 4:jc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ee(Ra,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ee(Re,Re.current&1),t.flags|=128,null):n&t.child.childLanes?Ym(e,t,n):(Ee(Re,Re.current&1),e=Cn(e,t,n),e!==null?e.sibling:null);Ee(Re,Re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Qm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ee(Re,Re.current),r)break;return null;case 22:case 23:return t.lanes=0,Bm(e,t,n)}return Cn(e,t,n)}var Km,ku,Gm,Xm;Km=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ku=function(){};Gm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,lr(ln.current);var o=null;switch(n){case"input":i=Hl(e,i),r=Hl(e,r),o=[];break;case"select":i=Le({},i,{value:void 0}),r=Le({},r,{value:void 0}),o=[];break;case"textarea":i=Kl(e,i),r=Kl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=_a)}Xl(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ui.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ui.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&Oe("scroll",e),o||l===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Xm=function(e,t,n,r){n!==r&&(t.flags|=4)};function hi(e,t){if(!Me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function rt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function by(e,t,n){var r=t.pendingProps;switch(vc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(t),null;case 1:return vt(t.type)&&Oa(),rt(t),null;case 3:return r=t.stateNode,qr(),Te(gt),Te(at),Ec(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ro(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ht!==null&&(Mu(Ht),Ht=null))),ku(e,t),rt(t),null;case 5:Cc(t);var i=lr(eo.current);if(n=t.type,e!==null&&t.stateNode!=null)Gm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(F(166));return rt(t),null}if(e=lr(ln.current),Ro(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[rn]=t,r[Ji]=o,e=(t.mode&1)!==0,n){case"dialog":Oe("cancel",r),Oe("close",r);break;case"iframe":case"object":case"embed":Oe("load",r);break;case"video":case"audio":for(i=0;i<_i.length;i++)Oe(_i[i],r);break;case"source":Oe("error",r);break;case"img":case"image":case"link":Oe("error",r),Oe("load",r);break;case"details":Oe("toggle",r);break;case"input":Od(r,o),Oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Oe("invalid",r);break;case"textarea":Pd(r,o),Oe("invalid",r)}Xl(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Mo(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Mo(r.textContent,l,e),i=["children",""+l]):Ui.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Oe("scroll",r)}switch(n){case"input":ko(r),Td(r,o,!0);break;case"textarea":ko(r),Md(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=_a)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=kh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[rn]=t,e[Ji]=r,Km(e,t,!1,!1),t.stateNode=e;e:{switch(a=ql(n,r),n){case"dialog":Oe("cancel",e),Oe("close",e),i=r;break;case"iframe":case"object":case"embed":Oe("load",e),i=r;break;case"video":case"audio":for(i=0;i<_i.length;i++)Oe(_i[i],e);i=r;break;case"source":Oe("error",e),i=r;break;case"img":case"image":case"link":Oe("error",e),Oe("load",e),i=r;break;case"details":Oe("toggle",e),i=r;break;case"input":Od(e,r),i=Hl(e,r),Oe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Le({},r,{value:void 0}),Oe("invalid",e);break;case"textarea":Pd(e,r),i=Kl(e,r),Oe("invalid",e);break;default:i=r}Xl(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?Eh(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&jh(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Bi(e,s):typeof s=="number"&&Bi(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ui.hasOwnProperty(o)?s!=null&&o==="onScroll"&&Oe("scroll",e):s!=null&&nc(e,o,s,a))}switch(n){case"input":ko(e),Td(e,r,!1);break;case"textarea":ko(e),Md(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Zn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Vr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Vr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=_a)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return rt(t),null;case 6:if(e&&t.stateNode!=null)Xm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(F(166));if(n=lr(eo.current),lr(ln.current),Ro(t)){if(r=t.stateNode,n=t.memoizedProps,r[rn]=t,(o=r.nodeValue!==n)&&(e=St,e!==null))switch(e.tag){case 3:Mo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rn]=t,t.stateNode=r}return rt(t),null;case 13:if(Te(Re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Me&&bt!==null&&t.mode&1&&!(t.flags&128))pm(),Gr(),t.flags|=98560,o=!1;else if(o=Ro(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(F(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(F(317));o[rn]=t}else Gr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;rt(t),o=!1}else Ht!==null&&(Mu(Ht),Ht=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Re.current&1?Be===0&&(Be=3):zc())),t.updateQueue!==null&&(t.flags|=4),rt(t),null);case 4:return qr(),ku(e,t),e===null&&Xi(t.stateNode.containerInfo),rt(t),null;case 10:return bc(t.type._context),rt(t),null;case 17:return vt(t.type)&&Oa(),rt(t),null;case 19:if(Te(Re),o=t.memoizedState,o===null)return rt(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)hi(o,!1);else{if(Be!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Aa(e),a!==null){for(t.flags|=128,hi(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ee(Re,Re.current&1|2),t.child}e=e.sibling}o.tail!==null&&ze()>Zr&&(t.flags|=128,r=!0,hi(o,!1),t.lanes=4194304)}else{if(!r)if(e=Aa(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),hi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Me)return rt(t),null}else 2*ze()-o.renderingStartTime>Zr&&n!==1073741824&&(t.flags|=128,r=!0,hi(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ze(),t.sibling=null,n=Re.current,Ee(Re,r?n&1|2:n&1),t):(rt(t),null);case 22:case 23:return Fc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?wt&1073741824&&(rt(t),t.subtreeFlags&6&&(t.flags|=8192)):rt(t),null;case 24:return null;case 25:return null}throw Error(F(156,t.tag))}function Sy(e,t){switch(vc(t),t.tag){case 1:return vt(t.type)&&Oa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qr(),Te(gt),Te(at),Ec(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Cc(t),null;case 13:if(Te(Re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(F(340));Gr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Te(Re),null;case 4:return qr(),null;case 10:return bc(t.type._context),null;case 22:case 23:return Fc(),null;case 24:return null;default:return null}}var Ao=!1,ot=!1,ky=typeof WeakSet=="function"?WeakSet:Set,Q=null;function Fr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(e,t,r)}else n.current=null}function ju(e,t,n){try{n()}catch(r){Ae(e,t,r)}}var bf=!1;function jy(e,t){if(su=ja,e=em(),mc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,h=0,p=e,v=null;t:for(;;){for(var x;p!==n||i!==0&&p.nodeType!==3||(l=a+i),p!==o||r!==0&&p.nodeType!==3||(s=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(x=p.firstChild)!==null;)v=p,p=x;for(;;){if(p===e)break t;if(v===n&&++u===i&&(l=a),v===o&&++h===r&&(s=a),(x=p.nextSibling)!==null)break;p=v,v=p.parentNode}p=x}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(lu={focusedElem:e,selectionRange:n},ja=!1,Q=t;Q!==null;)if(t=Q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Q=e;else for(;Q!==null;){t=Q;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,b=m.memoizedState,d=t.stateNode,f=d.getSnapshotBeforeUpdate(t.elementType===t.type?y:$t(t.type,y),b);d.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(w){Ae(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,Q=e;break}Q=t.return}return m=bf,bf=!1,m}function Di(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ju(t,n,o)}i=i.next}while(i!==r)}}function fs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Cu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function qm(e){var t=e.alternate;t!==null&&(e.alternate=null,qm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[rn],delete t[Ji],delete t[du],delete t[ay],delete t[sy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Jm(e){return e.tag===5||e.tag===3||e.tag===4}function Sf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Jm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Eu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=_a));else if(r!==4&&(e=e.child,e!==null))for(Eu(e,t,n),e=e.sibling;e!==null;)Eu(e,t,n),e=e.sibling}function _u(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(_u(e,t,n),e=e.sibling;e!==null;)_u(e,t,n),e=e.sibling}var Je=null,Bt=!1;function On(e,t,n){for(n=n.child;n!==null;)Zm(e,t,n),n=n.sibling}function Zm(e,t,n){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(is,n)}catch{}switch(n.tag){case 5:ot||Fr(n,t);case 6:var r=Je,i=Bt;Je=null,On(e,t,n),Je=r,Bt=i,Je!==null&&(Bt?(e=Je,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Je.removeChild(n.stateNode));break;case 18:Je!==null&&(Bt?(e=Je,n=n.stateNode,e.nodeType===8?il(e.parentNode,n):e.nodeType===1&&il(e,n),Qi(e)):il(Je,n.stateNode));break;case 4:r=Je,i=Bt,Je=n.stateNode.containerInfo,Bt=!0,On(e,t,n),Je=r,Bt=i;break;case 0:case 11:case 14:case 15:if(!ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&ju(n,t,a),i=i.next}while(i!==r)}On(e,t,n);break;case 1:if(!ot&&(Fr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ae(n,t,l)}On(e,t,n);break;case 21:On(e,t,n);break;case 22:n.mode&1?(ot=(r=ot)||n.memoizedState!==null,On(e,t,n),ot=r):On(e,t,n);break;default:On(e,t,n)}}function kf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ky),t.forEach(function(r){var i=Iy.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Vt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Je=l.stateNode,Bt=!1;break e;case 3:Je=l.stateNode.containerInfo,Bt=!0;break e;case 4:Je=l.stateNode.containerInfo,Bt=!0;break e}l=l.return}if(Je===null)throw Error(F(160));Zm(o,a,i),Je=null,Bt=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){Ae(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)eg(t,e),t=t.sibling}function eg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Vt(t,e),Jt(e),r&4){try{Di(3,e,e.return),fs(3,e)}catch(y){Ae(e,e.return,y)}try{Di(5,e,e.return)}catch(y){Ae(e,e.return,y)}}break;case 1:Vt(t,e),Jt(e),r&512&&n!==null&&Fr(n,n.return);break;case 5:if(Vt(t,e),Jt(e),r&512&&n!==null&&Fr(n,n.return),e.flags&32){var i=e.stateNode;try{Bi(i,"")}catch(y){Ae(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&bh(i,o),ql(l,a);var u=ql(l,o);for(a=0;a<s.length;a+=2){var h=s[a],p=s[a+1];h==="style"?Eh(i,p):h==="dangerouslySetInnerHTML"?jh(i,p):h==="children"?Bi(i,p):nc(i,h,p,u)}switch(l){case"input":Yl(i,o);break;case"textarea":Sh(i,o);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?Vr(i,!!o.multiple,x,!1):v!==!!o.multiple&&(o.defaultValue!=null?Vr(i,!!o.multiple,o.defaultValue,!0):Vr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ji]=o}catch(y){Ae(e,e.return,y)}}break;case 6:if(Vt(t,e),Jt(e),r&4){if(e.stateNode===null)throw Error(F(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){Ae(e,e.return,y)}}break;case 3:if(Vt(t,e),Jt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qi(t.containerInfo)}catch(y){Ae(e,e.return,y)}break;case 4:Vt(t,e),Jt(e);break;case 13:Vt(t,e),Jt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ac=ze())),r&4&&kf(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(ot=(u=ot)||h,Vt(t,e),ot=u):Vt(t,e),Jt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(Q=e,h=e.child;h!==null;){for(p=Q=h;Q!==null;){switch(v=Q,x=v.child,v.tag){case 0:case 11:case 14:case 15:Di(4,v,v.return);break;case 1:Fr(v,v.return);var m=v.stateNode;if(typeof m.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(y){Ae(r,n,y)}}break;case 5:Fr(v,v.return);break;case 22:if(v.memoizedState!==null){Cf(p);continue}}x!==null?(x.return=v,Q=x):Cf(p)}h=h.sibling}e:for(h=null,p=e;;){if(p.tag===5){if(h===null){h=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,s=p.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Ch("display",a))}catch(y){Ae(e,e.return,y)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(y){Ae(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Vt(t,e),Jt(e),r&4&&kf(e);break;case 21:break;default:Vt(t,e),Jt(e)}}function Jt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Jm(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Bi(i,""),r.flags&=-33);var o=Sf(e);_u(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Sf(e);Eu(e,l,a);break;default:throw Error(F(161))}}catch(s){Ae(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Cy(e,t,n){Q=e,tg(e)}function tg(e,t,n){for(var r=(e.mode&1)!==0;Q!==null;){var i=Q,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Ao;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||ot;l=Ao;var u=ot;if(Ao=a,(ot=s)&&!u)for(Q=i;Q!==null;)a=Q,s=a.child,a.tag===22&&a.memoizedState!==null?Ef(i):s!==null?(s.return=a,Q=s):Ef(i);for(;o!==null;)Q=o,tg(o),o=o.sibling;Q=i,Ao=l,ot=u}jf(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,Q=o):jf(e)}}function jf(e){for(;Q!==null;){var t=Q;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ot||fs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ot)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:$t(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&sf(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}sf(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Qi(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}ot||t.flags&512&&Cu(t)}catch(v){Ae(t,t.return,v)}}if(t===e){Q=null;break}if(n=t.sibling,n!==null){n.return=t.return,Q=n;break}Q=t.return}}function Cf(e){for(;Q!==null;){var t=Q;if(t===e){Q=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Q=n;break}Q=t.return}}function Ef(e){for(;Q!==null;){var t=Q;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fs(4,t)}catch(s){Ae(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Ae(t,i,s)}}var o=t.return;try{Cu(t)}catch(s){Ae(t,o,s)}break;case 5:var a=t.return;try{Cu(t)}catch(s){Ae(t,a,s)}}}catch(s){Ae(t,t.return,s)}if(t===e){Q=null;break}var l=t.sibling;if(l!==null){l.return=t.return,Q=l;break}Q=t.return}}var Ey=Math.ceil,za=En.ReactCurrentDispatcher,Ic=En.ReactCurrentOwner,Dt=En.ReactCurrentBatchConfig,me=0,Ke=null,Ve=null,et=0,wt=0,zr=nr(0),Be=0,io=null,mr=0,ps=0,Lc=0,Fi=null,ht=null,Ac=0,Zr=1/0,hn=null,Na=!1,Ou=null,Xn=null,Do=!1,Un=null,Va=0,zi=0,Tu=null,aa=-1,sa=0;function ct(){return me&6?ze():aa!==-1?aa:aa=ze()}function qn(e){return e.mode&1?me&2&&et!==0?et&-et:uy.transition!==null?(sa===0&&(sa=zh()),sa):(e=we,e!==0||(e=window.event,e=e===void 0?16:Hh(e.type)),e):1}function Kt(e,t,n,r){if(50<zi)throw zi=0,Tu=null,Error(F(185));co(e,n,r),(!(me&2)||e!==Ke)&&(e===Ke&&(!(me&2)&&(ps|=n),Be===4&&Vn(e,et)),xt(e,r),n===1&&me===0&&!(t.mode&1)&&(Zr=ze()+500,us&&rr()))}function xt(e,t){var n=e.callbackNode;u0(e,t);var r=ka(e,e===Ke?et:0);if(r===0)n!==null&&Ld(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ld(n),t===1)e.tag===0?ly(_f.bind(null,e)):cm(_f.bind(null,e)),iy(function(){!(me&6)&&rr()}),n=null;else{switch(Nh(r)){case 1:n=sc;break;case 4:n=Dh;break;case 16:n=Sa;break;case 536870912:n=Fh;break;default:n=Sa}n=ug(n,ng.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ng(e,t){if(aa=-1,sa=0,me&6)throw Error(F(327));var n=e.callbackNode;if(Hr()&&e.callbackNode!==n)return null;var r=ka(e,e===Ke?et:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=$a(e,r);else{t=r;var i=me;me|=2;var o=ig();(Ke!==e||et!==t)&&(hn=null,Zr=ze()+500,cr(e,t));do try{Ty();break}catch(l){rg(e,l)}while(!0);wc(),za.current=o,me=i,Ve!==null?t=0:(Ke=null,et=0,t=Be)}if(t!==0){if(t===2&&(i=nu(e),i!==0&&(r=i,t=Pu(e,i))),t===1)throw n=io,cr(e,0),Vn(e,r),xt(e,ze()),n;if(t===6)Vn(e,r);else{if(i=e.current.alternate,!(r&30)&&!_y(i)&&(t=$a(e,r),t===2&&(o=nu(e),o!==0&&(r=o,t=Pu(e,o))),t===1))throw n=io,cr(e,0),Vn(e,r),xt(e,ze()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(F(345));case 2:or(e,ht,hn);break;case 3:if(Vn(e,r),(r&130023424)===r&&(t=Ac+500-ze(),10<t)){if(ka(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ct(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=cu(or.bind(null,e,ht,hn),t);break}or(e,ht,hn);break;case 4:if(Vn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Qt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ey(r/1960))-r,10<r){e.timeoutHandle=cu(or.bind(null,e,ht,hn),r);break}or(e,ht,hn);break;case 5:or(e,ht,hn);break;default:throw Error(F(329))}}}return xt(e,ze()),e.callbackNode===n?ng.bind(null,e):null}function Pu(e,t){var n=Fi;return e.current.memoizedState.isDehydrated&&(cr(e,t).flags|=256),e=$a(e,t),e!==2&&(t=ht,ht=n,t!==null&&Mu(t)),e}function Mu(e){ht===null?ht=e:ht.push.apply(ht,e)}function _y(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Xt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Vn(e,t){for(t&=~Lc,t&=~ps,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Qt(t),r=1<<n;e[n]=-1,t&=~r}}function _f(e){if(me&6)throw Error(F(327));Hr();var t=ka(e,0);if(!(t&1))return xt(e,ze()),null;var n=$a(e,t);if(e.tag!==0&&n===2){var r=nu(e);r!==0&&(t=r,n=Pu(e,r))}if(n===1)throw n=io,cr(e,0),Vn(e,t),xt(e,ze()),n;if(n===6)throw Error(F(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,or(e,ht,hn),xt(e,ze()),null}function Dc(e,t){var n=me;me|=1;try{return e(t)}finally{me=n,me===0&&(Zr=ze()+500,us&&rr())}}function gr(e){Un!==null&&Un.tag===0&&!(me&6)&&Hr();var t=me;me|=1;var n=Dt.transition,r=we;try{if(Dt.transition=null,we=1,e)return e()}finally{we=r,Dt.transition=n,me=t,!(me&6)&&rr()}}function Fc(){wt=zr.current,Te(zr)}function cr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ry(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(vc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Oa();break;case 3:qr(),Te(gt),Te(at),Ec();break;case 5:Cc(r);break;case 4:qr();break;case 13:Te(Re);break;case 19:Te(Re);break;case 10:bc(r.type._context);break;case 22:case 23:Fc()}n=n.return}if(Ke=e,Ve=e=Jn(e.current,null),et=wt=t,Be=0,io=null,Lc=ps=mr=0,ht=Fi=null,sr!==null){for(t=0;t<sr.length;t++)if(n=sr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}sr=null}return e}function rg(e,t){do{var n=Ve;try{if(wc(),ra.current=Fa,Da){for(var r=Ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Da=!1}if(hr=0,Qe=Ue=Ie=null,Ai=!1,to=0,Ic.current=null,n===null||n.return===null){Be=1,io=t,Ve=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=et,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,h=l,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var v=h.alternate;v?(h.updateQueue=v.updateQueue,h.memoizedState=v.memoizedState,h.lanes=v.lanes):(h.updateQueue=null,h.memoizedState=null)}var x=hf(a);if(x!==null){x.flags&=-257,mf(x,a,l,o,t),x.mode&1&&pf(o,u,t),t=x,s=u;var m=t.updateQueue;if(m===null){var y=new Set;y.add(s),t.updateQueue=y}else m.add(s);break e}else{if(!(t&1)){pf(o,u,t),zc();break e}s=Error(F(426))}}else if(Me&&l.mode&1){var b=hf(a);if(b!==null){!(b.flags&65536)&&(b.flags|=256),mf(b,a,l,o,t),xc(Jr(s,l));break e}}o=s=Jr(s,l),Be!==4&&(Be=2),Fi===null?Fi=[o]:Fi.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=Vm(o,s,t);af(o,d);break e;case 1:l=s;var f=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Xn===null||!Xn.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=$m(o,l,t);af(o,w);break e}}o=o.return}while(o!==null)}ag(n)}catch(S){t=S,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(!0)}function ig(){var e=za.current;return za.current=Fa,e===null?Fa:e}function zc(){(Be===0||Be===3||Be===2)&&(Be=4),Ke===null||!(mr&268435455)&&!(ps&268435455)||Vn(Ke,et)}function $a(e,t){var n=me;me|=2;var r=ig();(Ke!==e||et!==t)&&(hn=null,cr(e,t));do try{Oy();break}catch(i){rg(e,i)}while(!0);if(wc(),me=n,za.current=r,Ve!==null)throw Error(F(261));return Ke=null,et=0,Be}function Oy(){for(;Ve!==null;)og(Ve)}function Ty(){for(;Ve!==null&&!e0();)og(Ve)}function og(e){var t=lg(e.alternate,e,wt);e.memoizedProps=e.pendingProps,t===null?ag(e):Ve=t,Ic.current=null}function ag(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Sy(n,t),n!==null){n.flags&=32767,Ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Be=6,Ve=null;return}}else if(n=by(n,t,wt),n!==null){Ve=n;return}if(t=t.sibling,t!==null){Ve=t;return}Ve=t=e}while(t!==null);Be===0&&(Be=5)}function or(e,t,n){var r=we,i=Dt.transition;try{Dt.transition=null,we=1,Py(e,t,n,r)}finally{Dt.transition=i,we=r}return null}function Py(e,t,n,r){do Hr();while(Un!==null);if(me&6)throw Error(F(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(F(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(c0(e,o),e===Ke&&(Ve=Ke=null,et=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Do||(Do=!0,ug(Sa,function(){return Hr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Dt.transition,Dt.transition=null;var a=we;we=1;var l=me;me|=4,Ic.current=null,jy(e,n),eg(n,e),X0(lu),ja=!!su,lu=su=null,e.current=n,Cy(n),t0(),me=l,we=a,Dt.transition=o}else e.current=n;if(Do&&(Do=!1,Un=e,Va=i),o=e.pendingLanes,o===0&&(Xn=null),i0(n.stateNode),xt(e,ze()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Na)throw Na=!1,e=Ou,Ou=null,e;return Va&1&&e.tag!==0&&Hr(),o=e.pendingLanes,o&1?e===Tu?zi++:(zi=0,Tu=e):zi=0,rr(),null}function Hr(){if(Un!==null){var e=Nh(Va),t=Dt.transition,n=we;try{if(Dt.transition=null,we=16>e?16:e,Un===null)var r=!1;else{if(e=Un,Un=null,Va=0,me&6)throw Error(F(331));var i=me;for(me|=4,Q=e.current;Q!==null;){var o=Q,a=o.child;if(Q.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(Q=u;Q!==null;){var h=Q;switch(h.tag){case 0:case 11:case 15:Di(8,h,o)}var p=h.child;if(p!==null)p.return=h,Q=p;else for(;Q!==null;){h=Q;var v=h.sibling,x=h.return;if(qm(h),h===u){Q=null;break}if(v!==null){v.return=x,Q=v;break}Q=x}}}var m=o.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var b=y.sibling;y.sibling=null,y=b}while(y!==null)}}Q=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,Q=a;else e:for(;Q!==null;){if(o=Q,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Di(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,Q=d;break e}Q=o.return}}var f=e.current;for(Q=f;Q!==null;){a=Q;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,Q=g;else e:for(a=f;Q!==null;){if(l=Q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:fs(9,l)}}catch(S){Ae(l,l.return,S)}if(l===a){Q=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,Q=w;break e}Q=l.return}}if(me=i,rr(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(is,e)}catch{}r=!0}return r}finally{we=n,Dt.transition=t}}return!1}function Of(e,t,n){t=Jr(n,t),t=Vm(e,t,1),e=Gn(e,t,1),t=ct(),e!==null&&(co(e,1,t),xt(e,t))}function Ae(e,t,n){if(e.tag===3)Of(e,e,n);else for(;t!==null;){if(t.tag===3){Of(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Xn===null||!Xn.has(r))){e=Jr(n,e),e=$m(t,e,1),t=Gn(t,e,1),e=ct(),t!==null&&(co(t,1,e),xt(t,e));break}}t=t.return}}function My(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ct(),e.pingedLanes|=e.suspendedLanes&n,Ke===e&&(et&n)===n&&(Be===4||Be===3&&(et&130023424)===et&&500>ze()-Ac?cr(e,0):Lc|=n),xt(e,t)}function sg(e,t){t===0&&(e.mode&1?(t=Eo,Eo<<=1,!(Eo&130023424)&&(Eo=4194304)):t=1);var n=ct();e=jn(e,t),e!==null&&(co(e,t,n),xt(e,n))}function Ry(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),sg(e,n)}function Iy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(t),sg(e,n)}var lg;lg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||gt.current)mt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return mt=!1,wy(e,t,n);mt=!!(e.flags&131072)}else mt=!1,Me&&t.flags&1048576&&dm(t,Ma,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;oa(e,t),e=t.pendingProps;var i=Kr(t,at.current);Wr(t,n),i=Oc(null,t,r,e,i,n);var o=Tc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,vt(r)?(o=!0,Ta(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,kc(t),i.updater=cs,t.stateNode=i,i._reactInternals=t,vu(t,r,e,n),t=wu(null,t,r,!0,o,n)):(t.tag=0,Me&&o&&gc(t),lt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(oa(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Ay(r),e=$t(r,e),i){case 0:t=yu(null,t,r,e,n);break e;case 1:t=xf(null,t,r,e,n);break e;case 11:t=gf(null,t,r,e,n);break e;case 14:t=vf(null,t,r,$t(r.type,e),n);break e}throw Error(F(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:$t(r,i),yu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:$t(r,i),xf(e,t,r,i,n);case 3:e:{if(Hm(t),e===null)throw Error(F(387));r=t.pendingProps,o=t.memoizedState,i=o.element,mm(e,t),La(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Jr(Error(F(423)),t),t=yf(e,t,r,n,i);break e}else if(r!==i){i=Jr(Error(F(424)),t),t=yf(e,t,r,n,i);break e}else for(bt=Kn(t.stateNode.containerInfo.firstChild),St=t,Me=!0,Ht=null,n=ym(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gr(),r===i){t=Cn(e,t,n);break e}lt(e,t,r,n)}t=t.child}return t;case 5:return wm(t),e===null&&hu(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,uu(r,i)?a=null:o!==null&&uu(r,o)&&(t.flags|=32),Wm(e,t),lt(e,t,a,n),t.child;case 6:return e===null&&hu(t),null;case 13:return Ym(e,t,n);case 4:return jc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Xr(t,null,r,n):lt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:$t(r,i),gf(e,t,r,i,n);case 7:return lt(e,t,t.pendingProps,n),t.child;case 8:return lt(e,t,t.pendingProps.children,n),t.child;case 12:return lt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,Ee(Ra,r._currentValue),r._currentValue=a,o!==null)if(Xt(o.value,a)){if(o.children===i.children&&!gt.current){t=Cn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=yn(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?s.next=s:(s.next=h.next,h.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),mu(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(F(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),mu(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}lt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Wr(t,n),i=zt(i),r=r(i),t.flags|=1,lt(e,t,r,n),t.child;case 14:return r=t.type,i=$t(r,t.pendingProps),i=$t(r.type,i),vf(e,t,r,i,n);case 15:return Um(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:$t(r,i),oa(e,t),t.tag=1,vt(r)?(e=!0,Ta(t)):e=!1,Wr(t,n),vm(t,r,i),vu(t,r,i,n),wu(null,t,r,!0,e,n);case 19:return Qm(e,t,n);case 22:return Bm(e,t,n)}throw Error(F(156,t.tag))};function ug(e,t){return Ah(e,t)}function Ly(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(e,t,n,r){return new Ly(e,t,n,r)}function Nc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ay(e){if(typeof e=="function")return Nc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ic)return 11;if(e===oc)return 14}return 2}function Jn(e,t){var n=e.alternate;return n===null?(n=At(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function la(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Nc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Or:return dr(n.children,i,o,t);case rc:a=8,i|=8;break;case $l:return e=At(12,n,t,i|2),e.elementType=$l,e.lanes=o,e;case Ul:return e=At(13,n,t,i),e.elementType=Ul,e.lanes=o,e;case Bl:return e=At(19,n,t,i),e.elementType=Bl,e.lanes=o,e;case xh:return hs(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gh:a=10;break e;case vh:a=9;break e;case ic:a=11;break e;case oc:a=14;break e;case Fn:a=16,r=null;break e}throw Error(F(130,e==null?e:typeof e,""))}return t=At(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function dr(e,t,n,r){return e=At(7,e,r,t),e.lanes=n,e}function hs(e,t,n,r){return e=At(22,e,r,t),e.elementType=xh,e.lanes=n,e.stateNode={isHidden:!1},e}function fl(e,t,n){return e=At(6,e,null,t),e.lanes=n,e}function pl(e,t,n){return t=At(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Dy(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qs(0),this.expirationTimes=Qs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vc(e,t,n,r,i,o,a,l,s){return e=new Dy(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=At(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kc(o),e}function Fy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_r,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function cg(e){if(!e)return er;e=e._reactInternals;e:{if(yr(e)!==e||e.tag!==1)throw Error(F(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(vt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(F(171))}if(e.tag===1){var n=e.type;if(vt(n))return um(e,n,t)}return t}function dg(e,t,n,r,i,o,a,l,s){return e=Vc(n,r,!0,e,i,o,a,l,s),e.context=cg(null),n=e.current,r=ct(),i=qn(n),o=yn(r,i),o.callback=t??null,Gn(n,o,i),e.current.lanes=i,co(e,i,r),xt(e,r),e}function ms(e,t,n,r){var i=t.current,o=ct(),a=qn(i);return n=cg(n),t.context===null?t.context=n:t.pendingContext=n,t=yn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Gn(i,t,a),e!==null&&(Kt(e,i,a,o),na(e,i,a)),a}function Ua(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Tf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $c(e,t){Tf(e,t),(e=e.alternate)&&Tf(e,t)}function zy(){return null}var fg=typeof reportError=="function"?reportError:function(e){console.error(e)};function Uc(e){this._internalRoot=e}gs.prototype.render=Uc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(F(409));ms(e,t,null,null)};gs.prototype.unmount=Uc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;gr(function(){ms(null,e,null,null)}),t[kn]=null}};function gs(e){this._internalRoot=e}gs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Uh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nn.length&&t!==0&&t<Nn[n].priority;n++);Nn.splice(n,0,e),n===0&&Wh(e)}};function Bc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Pf(){}function Ny(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Ua(a);o.call(u)}}var a=dg(t,r,e,0,null,!1,!1,"",Pf);return e._reactRootContainer=a,e[kn]=a.current,Xi(e.nodeType===8?e.parentNode:e),gr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Ua(s);l.call(u)}}var s=Vc(e,0,!1,null,null,!1,!1,"",Pf);return e._reactRootContainer=s,e[kn]=s.current,Xi(e.nodeType===8?e.parentNode:e),gr(function(){ms(t,s,n,r)}),s}function xs(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=Ua(a);l.call(s)}}ms(t,a,e,i)}else a=Ny(n,t,e,i,r);return Ua(a)}Vh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ei(t.pendingLanes);n!==0&&(lc(t,n|1),xt(t,ze()),!(me&6)&&(Zr=ze()+500,rr()))}break;case 13:gr(function(){var r=jn(e,1);if(r!==null){var i=ct();Kt(r,e,1,i)}}),$c(e,1)}};uc=function(e){if(e.tag===13){var t=jn(e,134217728);if(t!==null){var n=ct();Kt(t,e,134217728,n)}$c(e,134217728)}};$h=function(e){if(e.tag===13){var t=qn(e),n=jn(e,t);if(n!==null){var r=ct();Kt(n,e,t,r)}$c(e,t)}};Uh=function(){return we};Bh=function(e,t){var n=we;try{return we=e,t()}finally{we=n}};Zl=function(e,t,n){switch(t){case"input":if(Yl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ls(r);if(!i)throw Error(F(90));wh(r),Yl(r,i)}}}break;case"textarea":Sh(e,n);break;case"select":t=n.value,t!=null&&Vr(e,!!n.multiple,t,!1)}};Th=Dc;Ph=gr;var Vy={usingClientEntryPoint:!1,Events:[po,Rr,ls,_h,Oh,Dc]},mi={findFiberByHostInstance:ar,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},$y={bundleType:mi.bundleType,version:mi.version,rendererPackageName:mi.rendererPackageName,rendererConfig:mi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:En.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ih(e),e===null?null:e.stateNode},findFiberByHostInstance:mi.findFiberByHostInstance||zy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fo.isDisabled&&Fo.supportsFiber)try{is=Fo.inject($y),sn=Fo}catch{}}Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vy;Et.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bc(t))throw Error(F(200));return Fy(e,t,null,n)};Et.createRoot=function(e,t){if(!Bc(e))throw Error(F(299));var n=!1,r="",i=fg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Vc(e,1,!1,null,null,n,!1,r,i),e[kn]=t.current,Xi(e.nodeType===8?e.parentNode:e),new Uc(t)};Et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(F(188)):(e=Object.keys(e).join(","),Error(F(268,e)));return e=Ih(t),e=e===null?null:e.stateNode,e};Et.flushSync=function(e){return gr(e)};Et.hydrate=function(e,t,n){if(!vs(t))throw Error(F(200));return xs(null,e,t,!0,n)};Et.hydrateRoot=function(e,t,n){if(!Bc(e))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=fg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=dg(t,null,e,1,n??null,i,!1,o,a),e[kn]=t.current,Xi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new gs(t)};Et.render=function(e,t,n){if(!vs(t))throw Error(F(200));return xs(null,e,t,!1,n)};Et.unmountComponentAtNode=function(e){if(!vs(e))throw Error(F(40));return e._reactRootContainer?(gr(function(){xs(null,null,e,!1,function(){e._reactRootContainer=null,e[kn]=null})}),!0):!1};Et.unstable_batchedUpdates=Dc;Et.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!vs(n))throw Error(F(200));if(e==null||e._reactInternals===void 0)throw Error(F(38));return xs(e,t,n,!1,r)};Et.version="18.2.0-next-9e3b772b8-20220608";function pg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pg)}catch(e){console.error(e)}}pg(),dh.exports=Et;var mo=dh.exports;const Uy=ni(mo);var Mf=mo;Nl.createRoot=Mf.createRoot,Nl.hydrateRoot=Mf.hydrateRoot;var hg={exports:{}};(function(e,t){(function(r,i){e.exports=i(A)})(eh,n=>(()=>{var r={"./node_modules/css-mediaquery/index.js":(l,s)=>{s.match=m,s.parse=y;var u=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,h=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,p=/^(?:(min|max)-)?(.+)/,v=/(em|rem|px|cm|mm|in|pt|pc)?$/,x=/(dpi|dpcm|dppx)?$/;function m(g,w){return y(g).some(function(S){var T=S.inverse,_=S.type==="all"||w.type===S.type;if(_&&T||!(_||T))return!1;var j=S.expressions.every(function(C){var P=C.feature,M=C.modifier,I=C.value,L=w[P];if(!L)return!1;switch(P){case"orientation":case"scan":return L.toLowerCase()===I.toLowerCase();case"width":case"height":case"device-width":case"device-height":I=f(I),L=f(L);break;case"resolution":I=d(I),L=d(L);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":I=b(I),L=b(L);break;case"grid":case"color":case"color-index":case"monochrome":I=parseInt(I,10)||1,L=parseInt(L,10)||0;break}switch(M){case"min":return L>=I;case"max":return L<=I;default:return L===I}});return j&&!T||!j&&T})}function y(g){return g.split(",").map(function(w){w=w.trim();var S=w.match(u),T=S[1],_=S[2],j=S[3]||"",C={};return C.inverse=!!T&&T.toLowerCase()==="not",C.type=_?_.toLowerCase():"all",j=j.match(/\([^\)]+\)/g)||[],C.expressions=j.map(function(P){var M=P.match(h),I=M[1].toLowerCase().match(p);return{modifier:I[1],feature:I[2],value:M[2]}}),C})}function b(g){var w=Number(g),S;return w||(S=g.match(/^(\d+)\s*\/\s*(\d+)$/),w=S[1]/S[2]),w}function d(g){var w=parseFloat(g),S=String(g).match(x)[1];switch(S){case"dpcm":return w/2.54;case"dppx":return w*96;default:return w}}function f(g){var w=parseFloat(g),S=String(g).match(v)[1];switch(S){case"em":return w*16;case"rem":return w*16;case"cm":return w*96/2.54;case"mm":return w*96/2.54/10;case"in":return w*96;case"pt":return w*72;case"pc":return w*72/12;default:return w}}},"./node_modules/hyphenate-style-name/index.js":(l,s,u)=>{u.r(s),u.d(s,{default:()=>y});var h=/[A-Z]/g,p=/^ms-/,v={};function x(b){return"-"+b.toLowerCase()}function m(b){if(v.hasOwnProperty(b))return v[b];var d=b.replace(h,x);return v[b]=p.test(d)?"-"+d:d}const y=m},"./node_modules/matchmediaquery/index.js":(l,s,u)=>{var h=u("./node_modules/css-mediaquery/index.js").match,p=typeof window<"u"?window.matchMedia:null;function v(m,y,b){var d=this;if(p&&!b){var f=p.call(window,m);this.matches=f.matches,this.media=f.media,f.addListener(S)}else this.matches=h(m,y),this.media=m;this.addListener=g,this.removeListener=w,this.dispose=T;function g(_){f&&f.addListener(_)}function w(_){f&&f.removeListener(_)}function S(_){d.matches=_.matches,d.media=_.media}function T(){f&&f.removeListener(S)}}function x(m,y,b){return new v(m,y,b)}l.exports=x},"./node_modules/object-assign/index.js":l=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;function p(x){if(x==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(x)}function v(){try{if(!Object.assign)return!1;var x=new String("abc");if(x[5]="de",Object.getOwnPropertyNames(x)[0]==="5")return!1;for(var m={},y=0;y<10;y++)m["_"+String.fromCharCode(y)]=y;var b=Object.getOwnPropertyNames(m).map(function(f){return m[f]});if(b.join("")!=="0123456789")return!1;var d={};return"abcdefghijklmnopqrst".split("").forEach(function(f){d[f]=f}),Object.keys(Object.assign({},d)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}l.exports=v()?Object.assign:function(x,m){for(var y,b=p(x),d,f=1;f<arguments.length;f++){y=Object(arguments[f]);for(var g in y)u.call(y,g)&&(b[g]=y[g]);if(s){d=s(y);for(var w=0;w<d.length;w++)h.call(y,d[w])&&(b[d[w]]=y[d[w]])}}return b}},"./node_modules/prop-types/checkPropTypes.js":(l,s,u)=>{var h=function(){};{var p=u("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),v={},x=u("./node_modules/prop-types/lib/has.js");h=function(y){var b="Warning: "+y;typeof console<"u"&&console.error(b);try{throw new Error(b)}catch{}}}function m(y,b,d,f,g){for(var w in y)if(x(y,w)){var S;try{if(typeof y[w]!="function"){var T=Error((f||"React class")+": "+d+" type `"+w+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof y[w]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw T.name="Invariant Violation",T}S=y[w](b,w,f,d,null,p)}catch(j){S=j}if(S&&!(S instanceof Error)&&h((f||"React class")+": type specification of "+d+" `"+w+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof S+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),S instanceof Error&&!(S.message in v)){v[S.message]=!0;var _=g?g():"";h("Failed "+d+" type: "+S.message+(_??""))}}}m.resetWarningCache=function(){v={}},l.exports=m},"./node_modules/prop-types/factoryWithTypeCheckers.js":(l,s,u)=>{var h=u("./node_modules/react-is/index.js"),p=u("./node_modules/object-assign/index.js"),v=u("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),x=u("./node_modules/prop-types/lib/has.js"),m=u("./node_modules/prop-types/checkPropTypes.js"),y=function(){};y=function(d){var f="Warning: "+d;typeof console<"u"&&console.error(f);try{throw new Error(f)}catch{}};function b(){return null}l.exports=function(d,f){var g=typeof Symbol=="function"&&Symbol.iterator,w="@@iterator";function S(z){var Y=z&&(g&&z[g]||z[w]);if(typeof Y=="function")return Y}var T="<<anonymous>>",_={array:M("array"),bigint:M("bigint"),bool:M("boolean"),func:M("function"),number:M("number"),object:M("object"),string:M("string"),symbol:M("symbol"),any:I(),arrayOf:L,element:U(),elementType:H(),instanceOf:Z,node:G(),objectOf:N,oneOf:ge,oneOfType:K,shape:ne,exact:_e};function j(z,Y){return z===Y?z!==0||1/z===1/Y:z!==z&&Y!==Y}function C(z,Y){this.message=z,this.data=Y&&typeof Y=="object"?Y:{},this.stack=""}C.prototype=Error.prototype;function P(z){var Y={},oe=0;function ie(le,ae,ue,he,ye,k,E){if(he=he||T,k=k||ue,E!==v){if(f){var R=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw R.name="Invariant Violation",R}else if(typeof console<"u"){var B=he+":"+ue;!Y[B]&&oe<3&&(y("You are manually calling a React.PropTypes validation function for the `"+k+"` prop on `"+he+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),Y[B]=!0,oe++)}}return ae[ue]==null?le?ae[ue]===null?new C("The "+ye+" `"+k+"` is marked as required "+("in `"+he+"`, but its value is `null`.")):new C("The "+ye+" `"+k+"` is marked as required in "+("`"+he+"`, but its value is `undefined`.")):null:z(ae,ue,he,ye,k)}var re=ie.bind(null,!1);return re.isRequired=ie.bind(null,!0),re}function M(z){function Y(oe,ie,re,le,ae,ue){var he=oe[ie],ye=pe(he);if(ye!==z){var k=Pe(he);return new C("Invalid "+le+" `"+ae+"` of type "+("`"+k+"` supplied to `"+re+"`, expected ")+("`"+z+"`."),{expectedType:z})}return null}return P(Y)}function I(){return P(b)}function L(z){function Y(oe,ie,re,le,ae){if(typeof z!="function")return new C("Property `"+ae+"` of component `"+re+"` has invalid PropType notation inside arrayOf.");var ue=oe[ie];if(!Array.isArray(ue)){var he=pe(ue);return new C("Invalid "+le+" `"+ae+"` of type "+("`"+he+"` supplied to `"+re+"`, expected an array."))}for(var ye=0;ye<ue.length;ye++){var k=z(ue,ye,re,le,ae+"["+ye+"]",v);if(k instanceof Error)return k}return null}return P(Y)}function U(){function z(Y,oe,ie,re,le){var ae=Y[oe];if(!d(ae)){var ue=pe(ae);return new C("Invalid "+re+" `"+le+"` of type "+("`"+ue+"` supplied to `"+ie+"`, expected a single ReactElement."))}return null}return P(z)}function H(){function z(Y,oe,ie,re,le){var ae=Y[oe];if(!h.isValidElementType(ae)){var ue=pe(ae);return new C("Invalid "+re+" `"+le+"` of type "+("`"+ue+"` supplied to `"+ie+"`, expected a single ReactElement type."))}return null}return P(z)}function Z(z){function Y(oe,ie,re,le,ae){if(!(oe[ie]instanceof z)){var ue=z.name||T,he=Tt(oe[ie]);return new C("Invalid "+le+" `"+ae+"` of type "+("`"+he+"` supplied to `"+re+"`, expected ")+("instance of `"+ue+"`."))}return null}return P(Y)}function ge(z){if(!Array.isArray(z))return arguments.length>1?y("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):y("Invalid argument supplied to oneOf, expected an array."),b;function Y(oe,ie,re,le,ae){for(var ue=oe[ie],he=0;he<z.length;he++)if(j(ue,z[he]))return null;var ye=JSON.stringify(z,function(E,R){var B=Pe(R);return B==="symbol"?String(R):R});return new C("Invalid "+le+" `"+ae+"` of value `"+String(ue)+"` "+("supplied to `"+re+"`, expected one of "+ye+"."))}return P(Y)}function N(z){function Y(oe,ie,re,le,ae){if(typeof z!="function")return new C("Property `"+ae+"` of component `"+re+"` has invalid PropType notation inside objectOf.");var ue=oe[ie],he=pe(ue);if(he!=="object")return new C("Invalid "+le+" `"+ae+"` of type "+("`"+he+"` supplied to `"+re+"`, expected an object."));for(var ye in ue)if(x(ue,ye)){var k=z(ue,ye,re,le,ae+"."+ye,v);if(k instanceof Error)return k}return null}return P(Y)}function K(z){if(!Array.isArray(z))return y("Invalid argument supplied to oneOfType, expected an instance of array."),b;for(var Y=0;Y<z.length;Y++){var oe=z[Y];if(typeof oe!="function")return y("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+Xe(oe)+" at index "+Y+"."),b}function ie(re,le,ae,ue,he){for(var ye=[],k=0;k<z.length;k++){var E=z[k],R=E(re,le,ae,ue,he,v);if(R==null)return null;R.data&&x(R.data,"expectedType")&&ye.push(R.data.expectedType)}var B=ye.length>0?", expected one of type ["+ye.join(", ")+"]":"";return new C("Invalid "+ue+" `"+he+"` supplied to "+("`"+ae+"`"+B+"."))}return P(ie)}function G(){function z(Y,oe,ie,re,le){return Se(Y[oe])?null:new C("Invalid "+re+" `"+le+"` supplied to "+("`"+ie+"`, expected a ReactNode."))}return P(z)}function de(z,Y,oe,ie,re){return new C((z||"React class")+": "+Y+" type `"+oe+"."+ie+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+re+"`.")}function ne(z){function Y(oe,ie,re,le,ae){var ue=oe[ie],he=pe(ue);if(he!=="object")return new C("Invalid "+le+" `"+ae+"` of type `"+he+"` "+("supplied to `"+re+"`, expected `object`."));for(var ye in z){var k=z[ye];if(typeof k!="function")return de(re,le,ae,ye,Pe(k));var E=k(ue,ye,re,le,ae+"."+ye,v);if(E)return E}return null}return P(Y)}function _e(z){function Y(oe,ie,re,le,ae){var ue=oe[ie],he=pe(ue);if(he!=="object")return new C("Invalid "+le+" `"+ae+"` of type `"+he+"` "+("supplied to `"+re+"`, expected `object`."));var ye=p({},oe[ie],z);for(var k in ye){var E=z[k];if(x(z,k)&&typeof E!="function")return de(re,le,ae,k,Pe(E));if(!E)return new C("Invalid "+le+" `"+ae+"` key `"+k+"` supplied to `"+re+"`.\nBad object: "+JSON.stringify(oe[ie],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(z),null,"  "));var R=E(ue,k,re,le,ae+"."+k,v);if(R)return R}return null}return P(Y)}function Se(z){switch(typeof z){case"number":case"string":case"undefined":return!0;case"boolean":return!z;case"object":if(Array.isArray(z))return z.every(Se);if(z===null||d(z))return!0;var Y=S(z);if(Y){var oe=Y.call(z),ie;if(Y!==z.entries){for(;!(ie=oe.next()).done;)if(!Se(ie.value))return!1}else for(;!(ie=oe.next()).done;){var re=ie.value;if(re&&!Se(re[1]))return!1}}else return!1;return!0;default:return!1}}function He(z,Y){return z==="symbol"?!0:Y?Y["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&Y instanceof Symbol:!1}function pe(z){var Y=typeof z;return Array.isArray(z)?"array":z instanceof RegExp?"object":He(Y,z)?"symbol":Y}function Pe(z){if(typeof z>"u"||z===null)return""+z;var Y=pe(z);if(Y==="object"){if(z instanceof Date)return"date";if(z instanceof RegExp)return"regexp"}return Y}function Xe(z){var Y=Pe(z);switch(Y){case"array":case"object":return"an "+Y;case"boolean":case"date":case"regexp":return"a "+Y;default:return Y}}function Tt(z){return!z.constructor||!z.constructor.name?T:z.constructor.name}return _.checkPropTypes=m,_.resetWarningCache=m.resetWarningCache,_.PropTypes=_,_}},"./node_modules/prop-types/index.js":(l,s,u)=>{{var h=u("./node_modules/react-is/index.js"),p=!0;l.exports=u("./node_modules/prop-types/factoryWithTypeCheckers.js")(h.isElement,p)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":l=>{var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";l.exports=s},"./node_modules/prop-types/lib/has.js":l=>{l.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(l,s)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var u=typeof Symbol=="function"&&Symbol.for,h=u?Symbol.for("react.element"):60103,p=u?Symbol.for("react.portal"):60106,v=u?Symbol.for("react.fragment"):60107,x=u?Symbol.for("react.strict_mode"):60108,m=u?Symbol.for("react.profiler"):60114,y=u?Symbol.for("react.provider"):60109,b=u?Symbol.for("react.context"):60110,d=u?Symbol.for("react.async_mode"):60111,f=u?Symbol.for("react.concurrent_mode"):60111,g=u?Symbol.for("react.forward_ref"):60112,w=u?Symbol.for("react.suspense"):60113,S=u?Symbol.for("react.suspense_list"):60120,T=u?Symbol.for("react.memo"):60115,_=u?Symbol.for("react.lazy"):60116,j=u?Symbol.for("react.block"):60121,C=u?Symbol.for("react.fundamental"):60117,P=u?Symbol.for("react.responder"):60118,M=u?Symbol.for("react.scope"):60119;function I(E){return typeof E=="string"||typeof E=="function"||E===v||E===f||E===m||E===x||E===w||E===S||typeof E=="object"&&E!==null&&(E.$$typeof===_||E.$$typeof===T||E.$$typeof===y||E.$$typeof===b||E.$$typeof===g||E.$$typeof===C||E.$$typeof===P||E.$$typeof===M||E.$$typeof===j)}function L(E){if(typeof E=="object"&&E!==null){var R=E.$$typeof;switch(R){case h:var B=E.type;switch(B){case d:case f:case v:case m:case x:case w:return B;default:var $=B&&B.$$typeof;switch($){case b:case g:case _:case T:case y:return $;default:return R}}case p:return R}}}var U=d,H=f,Z=b,ge=y,N=h,K=g,G=v,de=_,ne=T,_e=p,Se=m,He=x,pe=w,Pe=!1;function Xe(E){return Pe||(Pe=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),Tt(E)||L(E)===d}function Tt(E){return L(E)===f}function z(E){return L(E)===b}function Y(E){return L(E)===y}function oe(E){return typeof E=="object"&&E!==null&&E.$$typeof===h}function ie(E){return L(E)===g}function re(E){return L(E)===v}function le(E){return L(E)===_}function ae(E){return L(E)===T}function ue(E){return L(E)===p}function he(E){return L(E)===m}function ye(E){return L(E)===x}function k(E){return L(E)===w}s.AsyncMode=U,s.ConcurrentMode=H,s.ContextConsumer=Z,s.ContextProvider=ge,s.Element=N,s.ForwardRef=K,s.Fragment=G,s.Lazy=de,s.Memo=ne,s.Portal=_e,s.Profiler=Se,s.StrictMode=He,s.Suspense=pe,s.isAsyncMode=Xe,s.isConcurrentMode=Tt,s.isContextConsumer=z,s.isContextProvider=Y,s.isElement=oe,s.isForwardRef=ie,s.isFragment=re,s.isLazy=le,s.isMemo=ae,s.isPortal=ue,s.isProfiler=he,s.isStrictMode=ye,s.isSuspense=k,s.isValidElementType=I,s.typeOf=L})()},"./node_modules/react-is/index.js":(l,s,u)=>{l.exports=u("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(l,s,u)=>{u.r(s),u.d(s,{shallowEqualArrays:()=>p,shallowEqualObjects:()=>h});function h(v,x){if(v===x)return!0;if(!v||!x)return!1;var m=Object.keys(v),y=Object.keys(x),b=m.length;if(y.length!==b)return!1;for(var d=0;d<b;d++){var f=m[d];if(v[f]!==x[f]||!Object.prototype.hasOwnProperty.call(x,f))return!1}return!0}function p(v,x){if(v===x)return!0;if(!v||!x)return!1;var m=v.length;if(x.length!==m)return!1;for(var y=0;y<m;y++)if(v[y]!==x[y])return!1;return!0}},"./src/Component.ts":function(l,s,u){var h=this&&this.__rest||function(m,y){var b={};for(var d in m)Object.prototype.hasOwnProperty.call(m,d)&&y.indexOf(d)<0&&(b[d]=m[d]);if(m!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,d=Object.getOwnPropertySymbols(m);f<d.length;f++)y.indexOf(d[f])<0&&Object.prototype.propertyIsEnumerable.call(m,d[f])&&(b[d[f]]=m[d[f]]);return b},p=this&&this.__importDefault||function(m){return m&&m.__esModule?m:{default:m}};Object.defineProperty(s,"__esModule",{value:!0});var v=p(u("./src/useMediaQuery.ts")),x=function(m){var y=m.children,b=m.device,d=m.onChange,f=h(m,["children","device","onChange"]),g=(0,v.default)(f,b,d);return typeof y=="function"?y(g):g?y:null};s.default=x},"./src/Context.ts":(l,s,u)=>{Object.defineProperty(s,"__esModule",{value:!0});var h=u("react"),p=(0,h.createContext)(void 0);s.default=p},"./src/index.ts":function(l,s,u){var h=this&&this.__importDefault||function(y){return y&&y.__esModule?y:{default:y}};Object.defineProperty(s,"__esModule",{value:!0}),s.Context=s.toQuery=s.useMediaQuery=s.default=void 0;var p=h(u("./src/useMediaQuery.ts"));s.useMediaQuery=p.default;var v=h(u("./src/Component.ts"));s.default=v.default;var x=h(u("./src/toQuery.ts"));s.toQuery=x.default;var m=h(u("./src/Context.ts"));s.Context=m.default},"./src/mediaQuery.ts":function(l,s,u){var h=this&&this.__assign||function(){return h=Object.assign||function(w){for(var S,T=1,_=arguments.length;T<_;T++){S=arguments[T];for(var j in S)Object.prototype.hasOwnProperty.call(S,j)&&(w[j]=S[j])}return w},h.apply(this,arguments)},p=this&&this.__rest||function(w,S){var T={};for(var _ in w)Object.prototype.hasOwnProperty.call(w,_)&&S.indexOf(_)<0&&(T[_]=w[_]);if(w!=null&&typeof Object.getOwnPropertySymbols=="function")for(var j=0,_=Object.getOwnPropertySymbols(w);j<_.length;j++)S.indexOf(_[j])<0&&Object.prototype.propertyIsEnumerable.call(w,_[j])&&(T[_[j]]=w[_[j]]);return T},v=this&&this.__importDefault||function(w){return w&&w.__esModule?w:{default:w}};Object.defineProperty(s,"__esModule",{value:!0});var x=v(u("./node_modules/prop-types/index.js")),m=x.default.oneOfType([x.default.string,x.default.number]),y={all:x.default.bool,grid:x.default.bool,aural:x.default.bool,braille:x.default.bool,handheld:x.default.bool,print:x.default.bool,projection:x.default.bool,screen:x.default.bool,tty:x.default.bool,tv:x.default.bool,embossed:x.default.bool},b={orientation:x.default.oneOf(["portrait","landscape"]),scan:x.default.oneOf(["progressive","interlace"]),aspectRatio:x.default.string,deviceAspectRatio:x.default.string,height:m,deviceHeight:m,width:m,deviceWidth:m,color:x.default.bool,colorIndex:x.default.bool,monochrome:x.default.bool,resolution:m,type:Object.keys(y)};b.type;var d=p(b,["type"]),f=h({minAspectRatio:x.default.string,maxAspectRatio:x.default.string,minDeviceAspectRatio:x.default.string,maxDeviceAspectRatio:x.default.string,minHeight:m,maxHeight:m,minDeviceHeight:m,maxDeviceHeight:m,minWidth:m,maxWidth:m,minDeviceWidth:m,maxDeviceWidth:m,minColor:x.default.number,maxColor:x.default.number,minColorIndex:x.default.number,maxColorIndex:x.default.number,minMonochrome:x.default.number,maxMonochrome:x.default.number,minResolution:m,maxResolution:m},d),g=h(h({},y),f);s.default={all:g,types:y,matchers:b,features:f}},"./src/toQuery.ts":function(l,s,u){var h=this&&this.__importDefault||function(d){return d&&d.__esModule?d:{default:d}};Object.defineProperty(s,"__esModule",{value:!0});var p=h(u("./node_modules/hyphenate-style-name/index.js")),v=h(u("./src/mediaQuery.ts")),x=function(d){return"not ".concat(d)},m=function(d,f){var g=(0,p.default)(d);return typeof f=="number"&&(f="".concat(f,"px")),f===!0?g:f===!1?x(g):"(".concat(g,": ").concat(f,")")},y=function(d){return d.join(" and ")},b=function(d){var f=[];return Object.keys(v.default.all).forEach(function(g){var w=d[g];w!=null&&f.push(m(g,w))}),y(f)};s.default=b},"./src/useMediaQuery.ts":function(l,s,u){var h=this&&this.__importDefault||function(C){return C&&C.__esModule?C:{default:C}};Object.defineProperty(s,"__esModule",{value:!0});var p=u("react"),v=h(u("./node_modules/matchmediaquery/index.js")),x=h(u("./node_modules/hyphenate-style-name/index.js")),m=u("./node_modules/shallow-equal/dist/index.esm.js"),y=h(u("./src/toQuery.ts")),b=h(u("./src/Context.ts")),d=function(C){return C.query||(0,y.default)(C)},f=function(C){if(C){var P=Object.keys(C);return P.reduce(function(M,I){return M[(0,x.default)(I)]=C[I],M},{})}},g=function(){var C=(0,p.useRef)(!1);return(0,p.useEffect)(function(){C.current=!0},[]),C.current},w=function(C){var P=(0,p.useContext)(b.default),M=function(){return f(C)||f(P)},I=(0,p.useState)(M),L=I[0],U=I[1];return(0,p.useEffect)(function(){var H=M();(0,m.shallowEqualObjects)(L,H)||U(H)},[C,P]),L},S=function(C){var P=function(){return d(C)},M=(0,p.useState)(P),I=M[0],L=M[1];return(0,p.useEffect)(function(){var U=P();I!==U&&L(U)},[C]),I},T=function(C,P){var M=function(){return(0,v.default)(C,P||{},!!P)},I=(0,p.useState)(M),L=I[0],U=I[1],H=g();return(0,p.useEffect)(function(){if(H){var Z=M();return U(Z),function(){Z&&Z.dispose()}}},[C,P]),L},_=function(C){var P=(0,p.useState)(C.matches),M=P[0],I=P[1];return(0,p.useEffect)(function(){var L=function(U){I(U.matches)};return C.addListener(L),I(C.matches),function(){C.removeListener(L)}},[C]),M},j=function(C,P,M){var I=w(P),L=S(C);if(!L)throw new Error("Invalid or missing MediaQuery!");var U=T(L,I),H=_(U),Z=g();return(0,p.useEffect)(function(){Z&&M&&M(H)},[H]),(0,p.useEffect)(function(){return function(){U&&U.dispose()}},[]),H};s.default=j},react:l=>{l.exports=n}},i={};function o(l){var s=i[l];if(s!==void 0)return s.exports;var u=i[l]={exports:{}};return r[l].call(u.exports,u,u.exports,o),u.exports}o.d=(l,s)=>{for(var u in s)o.o(s,u)&&!o.o(l,u)&&Object.defineProperty(l,u,{enumerable:!0,get:s[u]})},o.o=(l,s)=>Object.prototype.hasOwnProperty.call(l,s),o.r=l=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})};var a=o("./src/index.ts");return a})())})(hg);var Bn=hg.exports;const se=ni(Bn);function J(){return J=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},J.apply(this,arguments)}function mg(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var By=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Wy=mg(function(e){return By.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function Hy(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Yy(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Qy=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Yy(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=Hy(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),it="-ms-",Ba="-moz-",ve="-webkit-",gg="comm",Wc="rule",Hc="decl",Ky="@import",vg="@keyframes",Gy="@layer",Xy=Math.abs,ys=String.fromCharCode,qy=Object.assign;function Jy(e,t){return Ze(e,0)^45?(((t<<2^Ze(e,0))<<2^Ze(e,1))<<2^Ze(e,2))<<2^Ze(e,3):0}function xg(e){return e.trim()}function Zy(e,t){return(e=t.exec(e))?e[0]:e}function xe(e,t,n){return e.replace(t,n)}function Ru(e,t){return e.indexOf(t)}function Ze(e,t){return e.charCodeAt(t)|0}function oo(e,t,n){return e.slice(t,n)}function tn(e){return e.length}function Yc(e){return e.length}function zo(e,t){return t.push(e),e}function e1(e,t){return e.map(t).join("")}var ws=1,ei=1,yg=0,yt=0,Ne=0,ai="";function bs(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:ws,column:ei,length:a,return:""}}function gi(e,t){return qy(bs("",null,null,"",null,null,0),e,{length:-e.length},t)}function t1(){return Ne}function n1(){return Ne=yt>0?Ze(ai,--yt):0,ei--,Ne===10&&(ei=1,ws--),Ne}function kt(){return Ne=yt<yg?Ze(ai,yt++):0,ei++,Ne===10&&(ei=1,ws++),Ne}function un(){return Ze(ai,yt)}function ua(){return yt}function go(e,t){return oo(ai,e,t)}function ao(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function wg(e){return ws=ei=1,yg=tn(ai=e),yt=0,[]}function bg(e){return ai="",e}function ca(e){return xg(go(yt-1,Iu(e===91?e+2:e===40?e+1:e)))}function r1(e){for(;(Ne=un())&&Ne<33;)kt();return ao(e)>2||ao(Ne)>3?"":" "}function i1(e,t){for(;--t&&kt()&&!(Ne<48||Ne>102||Ne>57&&Ne<65||Ne>70&&Ne<97););return go(e,ua()+(t<6&&un()==32&&kt()==32))}function Iu(e){for(;kt();)switch(Ne){case e:return yt;case 34:case 39:e!==34&&e!==39&&Iu(Ne);break;case 40:e===41&&Iu(e);break;case 92:kt();break}return yt}function o1(e,t){for(;kt()&&e+Ne!==57;)if(e+Ne===84&&un()===47)break;return"/*"+go(t,yt-1)+"*"+ys(e===47?e:kt())}function a1(e){for(;!ao(un());)kt();return go(e,yt)}function s1(e){return bg(da("",null,null,null,[""],e=wg(e),0,[0],e))}function da(e,t,n,r,i,o,a,l,s){for(var u=0,h=0,p=a,v=0,x=0,m=0,y=1,b=1,d=1,f=0,g="",w=i,S=o,T=r,_=g;b;)switch(m=f,f=kt()){case 40:if(m!=108&&Ze(_,p-1)==58){Ru(_+=xe(ca(f),"&","&\f"),"&\f")!=-1&&(d=-1);break}case 34:case 39:case 91:_+=ca(f);break;case 9:case 10:case 13:case 32:_+=r1(m);break;case 92:_+=i1(ua()-1,7);continue;case 47:switch(un()){case 42:case 47:zo(l1(o1(kt(),ua()),t,n),s);break;default:_+="/"}break;case 123*y:l[u++]=tn(_)*d;case 125*y:case 59:case 0:switch(f){case 0:case 125:b=0;case 59+h:d==-1&&(_=xe(_,/\f/g,"")),x>0&&tn(_)-p&&zo(x>32?If(_+";",r,n,p-1):If(xe(_," ","")+";",r,n,p-2),s);break;case 59:_+=";";default:if(zo(T=Rf(_,t,n,u,h,i,l,g,w=[],S=[],p),o),f===123)if(h===0)da(_,t,T,T,w,o,p,l,S);else switch(v===99&&Ze(_,3)===110?100:v){case 100:case 108:case 109:case 115:da(e,T,T,r&&zo(Rf(e,T,T,0,0,i,l,g,i,w=[],p),S),i,S,p,l,r?w:S);break;default:da(_,T,T,T,[""],S,0,l,S)}}u=h=x=0,y=d=1,g=_="",p=a;break;case 58:p=1+tn(_),x=m;default:if(y<1){if(f==123)--y;else if(f==125&&y++==0&&n1()==125)continue}switch(_+=ys(f),f*y){case 38:d=h>0?1:(_+="\f",-1);break;case 44:l[u++]=(tn(_)-1)*d,d=1;break;case 64:un()===45&&(_+=ca(kt())),v=un(),h=p=tn(g=_+=a1(ua())),f++;break;case 45:m===45&&tn(_)==2&&(y=0)}}return o}function Rf(e,t,n,r,i,o,a,l,s,u,h){for(var p=i-1,v=i===0?o:[""],x=Yc(v),m=0,y=0,b=0;m<r;++m)for(var d=0,f=oo(e,p+1,p=Xy(y=a[m])),g=e;d<x;++d)(g=xg(y>0?v[d]+" "+f:xe(f,/&\f/g,v[d])))&&(s[b++]=g);return bs(e,t,n,i===0?Wc:l,s,u,h)}function l1(e,t,n){return bs(e,t,n,gg,ys(t1()),oo(e,2,-2),0)}function If(e,t,n,r){return bs(e,t,n,Hc,oo(e,0,r),oo(e,r+1,-1),r)}function Yr(e,t){for(var n="",r=Yc(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function u1(e,t,n,r){switch(e.type){case Gy:if(e.children.length)break;case Ky:case Hc:return e.return=e.return||e.value;case gg:return"";case vg:return e.return=e.value+"{"+Yr(e.children,r)+"}";case Wc:e.value=e.props.join(",")}return tn(n=Yr(e.children,r))?e.return=e.value+"{"+n+"}":""}function c1(e){var t=Yc(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function d1(e){return function(t){t.root||(t=t.return)&&e(t)}}var f1=function(t,n,r){for(var i=0,o=0;i=o,o=un(),i===38&&o===12&&(n[r]=1),!ao(o);)kt();return go(t,yt)},p1=function(t,n){var r=-1,i=44;do switch(ao(i)){case 0:i===38&&un()===12&&(n[r]=1),t[r]+=f1(yt-1,n,r);break;case 2:t[r]+=ca(i);break;case 4:if(i===44){t[++r]=un()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=ys(i)}while(i=kt());return t},h1=function(t,n){return bg(p1(wg(t),n))},Lf=new WeakMap,m1=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Lf.get(r))&&!i){Lf.set(t,!0);for(var o=[],a=h1(n,o),l=r.props,s=0,u=0;s<a.length;s++)for(var h=0;h<l.length;h++,u++)t.props[u]=o[s]?a[s].replace(/&\f/g,l[h]):l[h]+" "+a[s]}}},g1=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Sg(e,t){switch(Jy(e,t)){case 5103:return ve+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ve+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ve+e+Ba+e+it+e+e;case 6828:case 4268:return ve+e+it+e+e;case 6165:return ve+e+it+"flex-"+e+e;case 5187:return ve+e+xe(e,/(\w+).+(:[^]+)/,ve+"box-$1$2"+it+"flex-$1$2")+e;case 5443:return ve+e+it+"flex-item-"+xe(e,/flex-|-self/,"")+e;case 4675:return ve+e+it+"flex-line-pack"+xe(e,/align-content|flex-|-self/,"")+e;case 5548:return ve+e+it+xe(e,"shrink","negative")+e;case 5292:return ve+e+it+xe(e,"basis","preferred-size")+e;case 6060:return ve+"box-"+xe(e,"-grow","")+ve+e+it+xe(e,"grow","positive")+e;case 4554:return ve+xe(e,/([^-])(transform)/g,"$1"+ve+"$2")+e;case 6187:return xe(xe(xe(e,/(zoom-|grab)/,ve+"$1"),/(image-set)/,ve+"$1"),e,"")+e;case 5495:case 3959:return xe(e,/(image-set\([^]*)/,ve+"$1$`$1");case 4968:return xe(xe(e,/(.+:)(flex-)?(.*)/,ve+"box-pack:$3"+it+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ve+e+e;case 4095:case 3583:case 4068:case 2532:return xe(e,/(.+)-inline(.+)/,ve+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(tn(e)-1-t>6)switch(Ze(e,t+1)){case 109:if(Ze(e,t+4)!==45)break;case 102:return xe(e,/(.+:)(.+)-([^]+)/,"$1"+ve+"$2-$3$1"+Ba+(Ze(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ru(e,"stretch")?Sg(xe(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Ze(e,t+1)!==115)break;case 6444:switch(Ze(e,tn(e)-3-(~Ru(e,"!important")&&10))){case 107:return xe(e,":",":"+ve)+e;case 101:return xe(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ve+(Ze(e,14)===45?"inline-":"")+"box$3$1"+ve+"$2$3$1"+it+"$2box$3")+e}break;case 5936:switch(Ze(e,t+11)){case 114:return ve+e+it+xe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ve+e+it+xe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ve+e+it+xe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ve+e+it+e+e}return e}var v1=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Hc:t.return=Sg(t.value,t.length);break;case vg:return Yr([gi(t,{value:xe(t.value,"@","@"+ve)})],i);case Wc:if(t.length)return e1(t.props,function(o){switch(Zy(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Yr([gi(t,{props:[xe(o,/:(read-\w+)/,":"+Ba+"$1")]})],i);case"::placeholder":return Yr([gi(t,{props:[xe(o,/:(plac\w+)/,":"+ve+"input-$1")]}),gi(t,{props:[xe(o,/:(plac\w+)/,":"+Ba+"$1")]}),gi(t,{props:[xe(o,/:(plac\w+)/,it+"input-$1")]})],i)}return""})}},x1=[v1],y1=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var b=y.getAttribute("data-emotion");b.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var i=t.stylisPlugins||x1,o={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var b=y.getAttribute("data-emotion").split(" "),d=1;d<b.length;d++)o[b[d]]=!0;l.push(y)});var s,u=[m1,g1];{var h,p=[u1,d1(function(y){h.insert(y)})],v=c1(u.concat(i,p)),x=function(b){return Yr(s1(b),v)};s=function(b,d,f,g){h=f,x(b?b+"{"+d.styles+"}":d.styles),g&&(m.inserted[d.name]=!0)}}var m={key:n,sheet:new Qy({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:s};return m.sheet.hydrate(l),m},kg={exports:{}},be={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ge=typeof Symbol=="function"&&Symbol.for,Qc=Ge?Symbol.for("react.element"):60103,Kc=Ge?Symbol.for("react.portal"):60106,Ss=Ge?Symbol.for("react.fragment"):60107,ks=Ge?Symbol.for("react.strict_mode"):60108,js=Ge?Symbol.for("react.profiler"):60114,Cs=Ge?Symbol.for("react.provider"):60109,Es=Ge?Symbol.for("react.context"):60110,Gc=Ge?Symbol.for("react.async_mode"):60111,_s=Ge?Symbol.for("react.concurrent_mode"):60111,Os=Ge?Symbol.for("react.forward_ref"):60112,Ts=Ge?Symbol.for("react.suspense"):60113,w1=Ge?Symbol.for("react.suspense_list"):60120,Ps=Ge?Symbol.for("react.memo"):60115,Ms=Ge?Symbol.for("react.lazy"):60116,b1=Ge?Symbol.for("react.block"):60121,S1=Ge?Symbol.for("react.fundamental"):60117,k1=Ge?Symbol.for("react.responder"):60118,j1=Ge?Symbol.for("react.scope"):60119;function Ot(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Qc:switch(e=e.type,e){case Gc:case _s:case Ss:case js:case ks:case Ts:return e;default:switch(e=e&&e.$$typeof,e){case Es:case Os:case Ms:case Ps:case Cs:return e;default:return t}}case Kc:return t}}}function jg(e){return Ot(e)===_s}be.AsyncMode=Gc;be.ConcurrentMode=_s;be.ContextConsumer=Es;be.ContextProvider=Cs;be.Element=Qc;be.ForwardRef=Os;be.Fragment=Ss;be.Lazy=Ms;be.Memo=Ps;be.Portal=Kc;be.Profiler=js;be.StrictMode=ks;be.Suspense=Ts;be.isAsyncMode=function(e){return jg(e)||Ot(e)===Gc};be.isConcurrentMode=jg;be.isContextConsumer=function(e){return Ot(e)===Es};be.isContextProvider=function(e){return Ot(e)===Cs};be.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qc};be.isForwardRef=function(e){return Ot(e)===Os};be.isFragment=function(e){return Ot(e)===Ss};be.isLazy=function(e){return Ot(e)===Ms};be.isMemo=function(e){return Ot(e)===Ps};be.isPortal=function(e){return Ot(e)===Kc};be.isProfiler=function(e){return Ot(e)===js};be.isStrictMode=function(e){return Ot(e)===ks};be.isSuspense=function(e){return Ot(e)===Ts};be.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ss||e===_s||e===js||e===ks||e===Ts||e===w1||typeof e=="object"&&e!==null&&(e.$$typeof===Ms||e.$$typeof===Ps||e.$$typeof===Cs||e.$$typeof===Es||e.$$typeof===Os||e.$$typeof===S1||e.$$typeof===k1||e.$$typeof===j1||e.$$typeof===b1)};be.typeOf=Ot;kg.exports=be;var C1=kg.exports,Cg=C1,E1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},_1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Eg={};Eg[Cg.ForwardRef]=E1;Eg[Cg.Memo]=_1;var O1=!0;function _g(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Xc=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||O1===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},Og=function(t,n,r){Xc(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function T1(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var P1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},M1=/[A-Z]|^ms/g,R1=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Tg=function(t){return t.charCodeAt(1)===45},Af=function(t){return t!=null&&typeof t!="boolean"},hl=mg(function(e){return Tg(e)?e:e.replace(M1,"-$&").toLowerCase()}),Df=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(R1,function(r,i,o){return nn={name:i,styles:o,next:nn},i})}return P1[t]!==1&&!Tg(t)&&typeof n=="number"&&n!==0?n+"px":n};function so(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return nn={name:n.name,styles:n.styles,next:nn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)nn={name:r.name,styles:r.styles,next:nn},r=r.next;var i=n.styles+";";return i}return I1(e,t,n)}case"function":{if(e!==void 0){var o=nn,a=n(e);return nn=o,so(e,t,a)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function I1(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=so(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":Af(a)&&(r+=hl(o)+":"+Df(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)Af(a[l])&&(r+=hl(o)+":"+Df(o,a[l])+";");else{var s=so(e,t,a);switch(o){case"animation":case"animationName":{r+=hl(o)+":"+s+";";break}default:r+=o+"{"+s+"}"}}}return r}var Ff=/label:\s*([^\s;\n{]+)\s*(;|$)/g,nn,qc=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";nn=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=so(r,n,a)):o+=a[0];for(var l=1;l<t.length;l++)o+=so(r,n,t[l]),i&&(o+=a[l]);Ff.lastIndex=0;for(var s="",u;(u=Ff.exec(o))!==null;)s+="-"+u[1];var h=T1(o)+s;return{name:h,styles:o,next:nn}},L1=function(t){return t()},A1=jd.useInsertionEffect?jd.useInsertionEffect:!1,Pg=A1||L1,Jc={}.hasOwnProperty,Mg=A.createContext(typeof HTMLElement<"u"?y1({key:"css"}):null);Mg.Provider;var Rg=function(t){return A.forwardRef(function(n,r){var i=A.useContext(Mg);return t(n,i,r)})},Ig=A.createContext({}),Lu="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",D1=function(t,n){var r={};for(var i in n)Jc.call(n,i)&&(r[i]=n[i]);return r[Lu]=t,r},F1=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Xc(n,r,i),Pg(function(){return Og(n,r,i)}),null},z1=Rg(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Lu],o=[r],a="";typeof e.className=="string"?a=_g(t.registered,o,e.className):e.className!=null&&(a=e.className+" ");var l=qc(o,void 0,A.useContext(Ig));a+=t.key+"-"+l.name;var s={};for(var u in e)Jc.call(e,u)&&u!=="css"&&u!==Lu&&(s[u]=e[u]);return s.ref=n,s.className=a,A.createElement(A.Fragment,null,A.createElement(F1,{cache:t,serialized:l,isStringTag:typeof i=="string"}),A.createElement(i,s))}),N1=z1,X=function(t,n){var r=arguments;if(n==null||!Jc.call(n,"css"))return A.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=N1,o[1]=D1(t,n);for(var a=2;a<i;a++)o[a]=r[a];return A.createElement.apply(null,o)};function Zc(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return qc(t)}var V1=function(){var t=Zc.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},$1=Wy,U1=function(t){return t!=="theme"},zf=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?$1:U1},Nf=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(a){return t.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},B1=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Xc(n,r,i),Pg(function(){return Og(n,r,i)}),null},W1=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,a;n!==void 0&&(o=n.label,a=n.target);var l=Nf(t,n,r),s=l||zf(i),u=!s("as");return function(){var h=arguments,p=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&p.push("label:"+o+";"),h[0]==null||h[0].raw===void 0)p.push.apply(p,h);else{p.push(h[0][0]);for(var v=h.length,x=1;x<v;x++)p.push(h[x],h[0][x])}var m=Rg(function(y,b,d){var f=u&&y.as||i,g="",w=[],S=y;if(y.theme==null){S={};for(var T in y)S[T]=y[T];S.theme=A.useContext(Ig)}typeof y.className=="string"?g=_g(b.registered,w,y.className):y.className!=null&&(g=y.className+" ");var _=qc(p.concat(w),b.registered,S);g+=b.key+"-"+_.name,a!==void 0&&(g+=" "+a);var j=u&&l===void 0?zf(f):s,C={};for(var P in y)u&&P==="as"||j(P)&&(C[P]=y[P]);return C.className=g,C.ref=d,A.createElement(A.Fragment,null,A.createElement(B1,{cache:b,serialized:_,isStringTag:typeof f=="string"}),A.createElement(f,C))});return m.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",m.defaultProps=t.defaultProps,m.__emotion_real=m,m.__emotion_base=i,m.__emotion_styles=p,m.__emotion_forwardProp=l,Object.defineProperty(m,"toString",{value:function(){return"."+a}}),m.withComponent=function(y,b){return e(y,J({},n,b,{shouldForwardProp:Nf(m,b,!0)})).apply(void 0,p)},m}},H1=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],O=W1.bind();H1.forEach(function(e){O[e]=O(e)});const Y1=O.section`
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
`,Q1=O.h2`
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
`,K1=O.div`
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
`,G1=O.img`
  border-radius: 18px;
`,X1=O.div`
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
`,q1=O.h3`
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
`,J1=O.p`
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
`,Z1=O.ul`
  padding-left: 23px;
`,ew=O.li`
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
`,tw=O.ul`
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
`,nw=O.a`
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
`,rw=O.svg`
  margin-left: 10px;
`,iw=O.div`
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
`,ow="/healthy-management-project/assets/olga_picture1x-6T0pnRyH.webp",aw="/healthy-management-project/assets/olga_picture2x-4JmA7wGC.webp",sw="/healthy-management-project/assets/olga_picture1x-ohcXIDw6.jpg",lw="/healthy-management-project/assets/mob_olga_picture1x-PQXysebb.jpg",uw="/healthy-management-project/assets/mob_olga_picture1x-1fPtYEvT.webp",cw="/healthy-management-project/assets/mob_olga_picture2x-VJcRD770.webp",dw="/healthy-management-project/assets/olga_picture@1x-V6xBvkB4.jpg",fw="/healthy-management-project/assets/olga_picture@1x-UUwfpH5W.webp",pw="/healthy-management-project/assets/olga_picture@2x-MWfGyCra.webp",hw="/healthy-management-project/assets/olga_picture@1x-rIS7rOGv.jpg",mw="/healthy-management-project/assets/olga_picture@1x-aIsvHdrL.webp",gw="/healthy-management-project/assets/olga_picture@2x-3sK8O0o2.webp",vw=[{query:"(max-width: 767px)",imgData:{srcSet:`${cw} 2x, ${uw} 1x`,sizes:"(max-width: 767px) 100vw",src:lw}},{query:"(min-width: 768px) and (max-width: 1439px)",imgData:{srcSet:`${pw} 2x, ${fw} 1x`,type:"image/webp",sizes:"(min-width: 768px) 100vw (max-width: 1439px) 100vw",src:dw}},{query:"(min-width: 1440px) and (max-width: 1919px)",imgData:{srcSet:`${gw} 2x, ${mw} 1x`,type:"image/webp",sizes:"(min-width: 1440px) 100vw (max-width: 1919px) 100vw",src:hw}},{query:"(min-width: 1920px)",imgData:{srcSet:`${aw} 2x, ${ow} 1x`,type:"image/webp",sizes:"(min-width: 1920px) 100vw",src:sw}}],xw=[{name:"Instagram",href:"https://www.instagram.com/olga_healthm/"},{name:"Facebook",href:"https://www.facebook.com/olga.polishchuk.14"},{name:"LinkedIn",href:"https://www.linkedin.com/in/olga-polishchuk-83362140/"}],yw=["MBA Healthcare management","Викладачка медичного маркетингу Бізнес-школа УКУ (LvBS)",`Експертка в "Центр Розвитку Громадського Здоров'я УКУ"`,"Бізнес-консультантка, стратег з медичного маркетингу",'Керівниця проєкту "Стетоскоп" - телеграм канал про медичний менеджмент та маркетингу',"Більше 18 років досвіду в маркетингу та комунікаціях, з них більше 10 років досвіду в медичному та фармацевтичному бізнесі на керівних посадах","Використання принципів доказової медицини"],te="/healthy-management-project/assets/sprite-IHRcLKoZ.svg",ww=()=>c.jsx(rw,{width:"24",height:"24",children:c.jsx("use",{href:`${te}#icon-arrow-up-right`})}),bw=()=>c.jsx(Y1,{className:"container",children:c.jsxs("div",{children:[c.jsx(Q1,{children:"Про мене"}),c.jsxs(K1,{children:[c.jsx(iw,{children:vw.map((e,t)=>c.jsx(se,{query:e.query,children:c.jsx(G1,{alt:"Ольга Поліщук",...e.imgData})},t))}),c.jsxs(X1,{children:[c.jsx(q1,{children:"Ольга Поліщук"}),c.jsx(J1,{children:"CEO and Founder студії стратегічного розвитку"}),c.jsx(Z1,{children:yw.map((e,t)=>c.jsx(ew,{children:e},t))}),c.jsx(tw,{children:xw.map((e,t)=>c.jsx("li",{children:c.jsxs(nw,{href:e.href,target:"_blank",rel:"noopener noreferrer",children:[e.name,c.jsx(ww,{})]})},t))})]})]})]})}),Sw=O.section`
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
`,kw=O.h2`
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
`,jw=O.div`
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
`,Cw=O.p`
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
`,Ew=O.p`
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
`,Vf=O.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 16px;
`,_w=O.div`
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
`,Ow=O.h4`
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
`,Tw=O.div`
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
`,Pw=O.h4`
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
`,Mw=O.p`
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
`,Rw=O.svg`
  border-radius: 100px;
  width: 32px;
  height: 32px;
  padding: 3px;

  fill: ${e=>e.fill||"currentColor"};
  background: ${e=>e.background||"transparent"};
`;var Lg={exports:{}},Iw="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Lw=Iw,Aw=Lw;function Ag(){}function Dg(){}Dg.resetWarningCache=Ag;var Dw=function(){function e(r,i,o,a,l,s){if(s!==Aw){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Dg,resetWarningCache:Ag};return n.PropTypes=n,n};Lg.exports=Dw();var Fw=Lg.exports;const cn=ni(Fw),Au=({fill:e,background:t})=>c.jsx(Rw,{fill:e,background:t,children:c.jsx("use",{href:`${te}#icon-star`})});Au.propTypes={fill:cn.string,background:cn.string};const zw=()=>c.jsx(Sw,{id:"aboutUs",className:"container",children:c.jsxs("div",{children:[c.jsx(kw,{children:"Про студію"}),c.jsxs(jw,{children:[c.jsx("div",{children:c.jsx(Cw,{children:"Студія стратегічного розвитку медичних брендів «Healthy management» надає послуги медичного менеджменту, медичного маркетингу, консалтингу бізнес-процесів та створення стратегій здоров’я для підприємств та бізнесу. Ми співпрацюємо з медичними закладами, лікарями, власниками, керівниками та створюємо спільні стратегії та дії для ефективного просування та розвитку проєктів, використовуючи комплексний підхід"})}),c.jsxs(Tw,{children:[c.jsxs(Vf,{children:[c.jsx(Au,{fill:"var(--background-white)",background:"rgba(244, 244, 246, 0.2)"}),c.jsx(Pw,{children:"Наша місія"})]}),c.jsx(Mw,{children:"Будуємо ефективні стратегії по управлінню здоров’ям та створюємо продуктивні дії для популяризації здорового менеджменту"})]}),c.jsxs(_w,{children:[c.jsxs(Vf,{children:[c.jsx(Au,{fill:"var(--primary-bluedark)",background:"rgba(27, 54, 65, 0.2)"}),c.jsx(Ow,{children:"Наші цінності"})]}),c.jsx(Ew,{children:"Повага, довіра, партнерство та експертність. Будуємо нову культуру управління здоровим менеджментом у медичній галузі"})]})]})]})}),Nw=O.section`
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,Vw=O.div`
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
`,$w=O.h2`
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
`,Uw=O.ul`
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
`,Bw=O.li`
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
`,Ww=[{id:1,tool:"Матриця стейкхолдерів"},{id:2,tool:"SWOT аналіз"},{id:3,tool:"Bussines model canvas"},{id:4,tool:"Value proposition canvas"},{id:5,tool:"Customer journey map"}],Hw=()=>c.jsx(Nw,{className:"container",children:c.jsxs(Vw,{children:[c.jsxs($w,{children:["Бізнес ",c.jsx("span",{children:"інструменти"}),", які використувуємо в партнерстві"]}),c.jsx(Uw,{children:Ww.map(e=>c.jsx(Bw,{children:e.tool},e.id))})]})}),fa="/healthy-management-project/assets/icon-footer-MBx-ujYN.svg",Yw=O.div`
  /* padding: 40px 0; */
  background-color: var(--background-bluedark);

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }

  @media screen and (min-width: 1920px) {
  }
`,Qw=O.div`
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
`,$f=O.a`
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
`,Uf=O.div`
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
`,Zt=O.a`
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
`,Kw=O.div`
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
`,Gw=O.div`
  display: flex;
  align-items: flex-end;
  gap: 16px;

  /* @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  } */

  /* @media screen and (min-width: 1920px) {
  } */
`,Xw=O.a`
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
`,qw=O.div`
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
`,Bf=O.a`
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
`,Jw=O.div`
  display: flex;
  padding: 16px 24px;

  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--system-default-20);
  background: var(--background-bluedark);
`,Zw=O.p`
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
`,eb=O.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 1100;
`,tb=O.div`
  padding: 80px;
  position: fixed;
  width: 1360px;
  border-radius: 24px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 10000;
`,nb=O.div`
  height: 32px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`,rb=O.svg`
  width: 24px;
  cursor: pointer;
`,ib=O.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: var(--typography-bluedark);
`,ob=O.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`,Tn=O.li`
  width: 282px;
  padding: 24px;
  gap: 16px;

  border-radius: 16px;
  background: var(--background-bluedark);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
`,Pn=O.h3`
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
`,Mn=O.p`
  display: flex;
  justify-content: center;

  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: var(--typography-white);
`,Rn=O.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,In=O.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Ln=O.div`
  border-radius: 8px;
  overflow: hidden;
`,An=O.img`
  border-radius: 8px;

  &:hover {
    transform: scale(1.1);
    border-radius: 8px;
  }
`,Wf="/healthy-management-project/assets/Jilia_Kopytko-mYhzlt_-.webp",ab="/healthy-management-project/assets/Jilia_Kopytko@2x-gruKrAtD.jpg",Hf="/healthy-management-project/assets/Yelyzaveta_Domanska-Ru7up7Pj.webp",sb="/healthy-management-project/assets/Yelyzaveta_Domanska@2x-BYkqrL88.jpg",Yf="/healthy-management-project/assets/Oleksandr_Natalukha-YKEBbXyu.webp",lb="/healthy-management-project/assets/Oleksandr_Natalukha@2x-5OsrctvL.jpg",Qf="/healthy-management-project/assets/Valentyn_Havrylenko-ouVcypag.webp",ub="/healthy-management-project/assets/Valentyn_Havrylenko@2x-xBjJM6nL.jpg",Kf="/healthy-management-project/assets/Olha_Abent-lPe8g7w1.webp",cb="/healthy-management-project/assets/Olha_Abent@2x-fGgXmj71.jpg",Gf="/healthy-management-project/assets/Viktoriia_Moryc-tWw5-4of.webp",db="/healthy-management-project/assets/Viktoriia_Moryc@2x-AxiRex6x.jpg",Xf="/healthy-management-project/assets/Vyacheslav_Pavlyuk-py_hj3lz.webp",fb="/healthy-management-project/assets/Vyacheslav_Pavlyuk@2x-2qCtSSAb.jpg",qf="/healthy-management-project/assets/Yaroslav_Li-nn0P6bIv.webp",pb="/healthy-management-project/assets/Yaroslav_Li@2x-xfuqLdiI.jpg",Du=({handleClose:e,isModalOpen:t})=>{const n=i=>{i.target===i.currentTarget&&e()};A.useEffect(()=>{const i=document.body,o=()=>{t?i.classList.add("body-no-scroll"):i.classList.remove("body-no-scroll")},a=l=>{l.code==="Escape"&&t&&e()};return o(),window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}},[e,t]);const r=document.getElementById("modal");return t?Uy.createPortal(c.jsx(eb,{onClick:n,children:c.jsxs(tb,{isModalOpen:t,children:[c.jsxs(nb,{children:[c.jsx(ib,{children:"Команда, яка створила сторінку"}),c.jsx(rb,{onClick:e,children:c.jsx("use",{href:`${te}#icon-close`})})]}),c.jsxs(ob,{children:[c.jsx(Tn,{children:c.jsxs(Rn,{children:[c.jsx(Ln,{children:c.jsx(An,{src:Gf,srcSet:`${Gf} 1x, ${db} 2x`,alt:"Вікторія Мориц"})}),c.jsxs(In,{children:[c.jsx(Pn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/viktoriia-moryc-61610962/",target:"_blank",rel:"noopener noreferrer",children:["Вікторія Мориц",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${te}#icon-linkedin`})})]})}),c.jsx(Mn,{children:"Project Manager"})]})]})}),c.jsx(Tn,{children:c.jsxs(Rn,{children:[c.jsx(Ln,{children:c.jsx(An,{src:Wf,srcSet:`${Wf} 1x, ${ab} 2x`,alt:"Юлія Копитко"})}),c.jsxs(In,{children:[c.jsx(Pn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/juliakopytko/",target:"_blank",rel:"noopener noreferrer",children:["Юлія Копитко",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${te}#icon-linkedin`})})]})}),c.jsx(Mn,{children:"UX/UI Designer"})]})]})}),c.jsx(Tn,{children:c.jsxs(Rn,{children:[c.jsx(Ln,{children:c.jsx(An,{src:qf,srcSet:`${qf} 1x, ${pb} 2x`,alt:"Ярослав Лі"})}),c.jsxs(In,{children:[c.jsx(Pn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/yaroslav-lee-b7070b294",target:"_blank",rel:"noopener noreferrer",children:["Ярослав Лі",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${te}#icon-linkedin`})})]})}),c.jsx(Mn,{children:"Frontend Developer"})]})]})}),c.jsx(Tn,{children:c.jsxs(Rn,{children:[c.jsx(Ln,{children:c.jsx(An,{src:Hf,srcSet:`${Hf} 1x, ${sb} 2x`,alt:"Єлизавета Доманська"})}),c.jsxs(In,{children:[c.jsx(Pn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/yelyzaveta-domanska-2185a5292/",target:"_blank",rel:"noopener noreferrer",children:["Єлизавета Доманська",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${te}#icon-linkedin`})})]})}),c.jsx(Mn,{children:"Frontend Developer"})]})]})}),c.jsx(Tn,{children:c.jsxs(Rn,{children:[c.jsx(Ln,{children:c.jsx(An,{src:Yf,srcSet:`${Yf} 1x, ${lb} 2x`,alt:"Олександр Наталуха"})}),c.jsxs(In,{children:[c.jsx(Pn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/oleksandr-natalukha",target:"_blank",rel:"noopener noreferrer",children:["Олександр Наталуха",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${te}#icon-linkedin`})})]})}),c.jsx(Mn,{children:"Frontend Developer"})]})]})}),c.jsx(Tn,{children:c.jsxs(Rn,{children:[c.jsx(Ln,{children:c.jsx(An,{src:Qf,srcSet:`${Qf} 1x, ${ub} 2x`,alt:"Валентин Гавриленко"})}),c.jsxs(In,{children:[c.jsx(Pn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/valentyn-havrylenko/",target:"_blank",rel:"noopener noreferrer",children:["Валентин Гавриленко",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${te}#icon-linkedin`})})]})}),c.jsx(Mn,{children:"Frontend Developer"})]})]})}),c.jsx(Tn,{children:c.jsxs(Rn,{children:[c.jsx(Ln,{children:c.jsx(An,{src:Xf,srcSet:`${Xf} 1x, ${fb} 2x`,alt:"В´ячеслав Павлюк"})}),c.jsxs(In,{children:[c.jsx(Pn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/vyacheslav-pavlyuk/",target:"_blank",rel:"noopener noreferrer",children:["В'ячеслав Павлюк",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${te}#icon-linkedin`})})]})}),c.jsx(Mn,{children:"Fullstack Developer"})]})]})}),c.jsx(Tn,{children:c.jsxs(Rn,{children:[c.jsx(Ln,{children:c.jsx(An,{src:Kf,srcSet:`${Kf} 1x, ${cb} 2x`,alt:"Ольга Абент"})}),c.jsxs(In,{children:[c.jsx(Pn,{children:c.jsxs("a",{href:"https://www.linkedin.com/in/abentolga/",target:"_blank",rel:"noopener noreferrer",children:["Ольга Абент",c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${te}#icon-linkedin`})})]})}),c.jsx(Mn,{children:"QA Engineer"})]})]})})]})]})}),r):null};Du.propTypes={handleClose:cn.func.isRequired,isModalOpen:cn.bool.isRequired};function hb(e,t){if(t===e)return!1;const n=Object.values(t),r=Object.values(e);if(n.length!==r.length||n.some((o,a)=>o!==r[a]))return!0;const i=Object.keys(e);return Object.keys(t).some((o,a)=>o!==i[a])}function mb(e,t){return e.matches[t]=!1,e.mediaQueries[t]={},e}function Fg(e){const t=Object.keys(e);return typeof window>"u"?t.reduce(mb,{mediaQueries:{},matches:{}}):t.reduce((n,r)=>{const i=window.matchMedia(e[r]);return n.mediaQueries[r]=i,n.matches[r]=i.matches,n},{mediaQueries:{},matches:{}})}function gb(e,t){function n(r,i){return r[i]=e.mediaQueries[i].matches,r}switch(t.type){case"updateMatches":return{matches:Object.keys(e.mediaQueries).reduce(n,{}),mediaQueries:e.mediaQueries};case"setQueries":return Fg(t.queries)}}function vb(e){const t=A.useRef(e),[n,r]=A.useReducer(gb,e,Fg);A.useEffect(()=>{hb(e,t.current)&&(r({type:"setQueries",queries:e}),t.current=e)},[e]);function i(){return r({type:"updateMatches"})}function o(s){const u=i;return typeof s.addListener<"u"?s.addListener(u):s.addEventListener("change",u),u}A.useEffect(()=>{const s=Object.values(n.mediaQueries),u=s.map(o);function h(p,v){typeof p.addListener<"u"?p.removeListener(u[v]):p.removeEventListener("change",u[v])}return()=>{s.forEach(h)}},[n.mediaQueries]);const{matches:a}=n,l=A.useMemo(()=>Object.values(a),[a]);return{matches:a,matchesAny:l.some(Boolean),matchesAll:l.length>0&&l.every(Boolean)}}function xb(e){return vb(yb(e)).matchesAll}const ml={};function yb(e){return ml[e]===void 0&&(ml[e]={default:e}),ml[e]}const zg=({handleSetActiveLink:e})=>{const[t,n]=A.useState(!1),r=xb("(min-width: 1440px) and (max-width: 1919px)"),i=()=>{n(!0)},o=()=>{n(!1)};return c.jsxs(Yw,{id:"footer",children:[c.jsxs(Qw,{className:"container",children:[c.jsx("a",{href:"#home",children:c.jsx("svg",{width:"227",height:"40",children:c.jsx("use",{href:`${fa}#logo-white`})})}),r?c.jsxs(c.Fragment,{children:[c.jsxs(Uf,{children:[c.jsx(Zt,{href:"#home",onClick:a=>e("home",a),children:"Головна"}),c.jsx(Zt,{href:"#aboutUs",onClick:a=>e("aboutUs",a),children:"Про нас"}),c.jsx(Zt,{href:"#services",onClick:a=>e("services",a),children:"Послуги"}),c.jsx(Zt,{href:"#mentoring",onClick:a=>e("mentoring",a),children:"Менторство"}),c.jsx(Zt,{href:"#projects",onClick:a=>e("projects",a),children:"Проєкти"})]}),c.jsx($f,{onClick:i,children:"created by GoIT students"}),c.jsx(Du,{handleClose:o,isModalOpen:t})]}):c.jsxs(c.Fragment,{children:[c.jsx($f,{onClick:i,children:"created by GoIT students"}),c.jsx(Du,{handleClose:o,isModalOpen:t}),c.jsxs(Uf,{children:[c.jsx(Zt,{href:"#home",onClick:a=>e("home",a),children:"Головна"}),c.jsx(Zt,{href:"#aboutUs",onClick:a=>e("aboutUs",a),children:"Про нас"}),c.jsx(Zt,{href:"#services",onClick:a=>e("services",a),children:"Послуги"}),c.jsx(Zt,{href:"#mentoring",onClick:a=>e("mentoring",a),children:"Менторство"}),c.jsx(Zt,{href:"#projects",onClick:a=>e("projects",a),children:"Проєкти"})]})]}),c.jsxs(Kw,{children:[c.jsxs(Gw,{children:[c.jsx(Xw,{href:"https://www.facebook.com/profile.php?id=61551346490841",target:"_blank",rel:"noopener noreferrer",children:c.jsx("svg",{width:"32",height:"32",children:c.jsx("use",{href:`${fa}#facebook`})})}),c.jsx("a",{href:"https://www.instagram.com/healthymanagement_ua/",target:"_blank",rel:"noopener noreferrer",children:c.jsx("svg",{width:"40",height:"40",children:c.jsx("use",{href:`${fa}#instagram`})})})]}),c.jsxs(qw,{children:[c.jsx(Bf,{href:"mailto:healthy.managements@gmail.com",children:"healthy.managements@gmail.com"}),c.jsx(Bf,{href:"tel:+380673160556",children:"+380 673 160 556"})]})]})]}),c.jsx(Jw,{children:c.jsx(Zw,{children:"© 2023 healthy management. All rights reserved"})})]})};zg.propTypes={handleSetActiveLink:cn.func.isRequired};const Ni="/healthy-management-project/assets/symbol-defs--0zN9DRa.svg",wb=O.header`
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
`,bb=O.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Sb=O.nav`
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 40px;
    align-items: center;
  }

  @media screen and (min-width: 1920px) {
  }
`,kb=O.a`
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
`,jb=O.a`
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
`,Cb=O.svg`
  stroke: black;
  width: 40px;
  height: 40px;

  @media screen and (min-width: 768px) {
    width: 70px;
  }
`,Eb=O.button`
  border: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  font-family: inherit;
  font-size: 100%;
  cursor: pointer;
  background: none;
`,_b=O.div`
  position: fixed;
  z-index: 1200;
  top: 0;
  left: 0;
  width: 100%;
`,Ob=O.div`
  display: flex;
  width: 100%;
  padding-top: 32px;
  padding-bottom: 32px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--system-default-20, #dedede);
  background: var(--system-default-10, #f8f8f8);
`,Tb=O.a`
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
`,Pb=O.svg`
  stroke: var(--primary-black);
`,Mb=O.nav`
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
`,vi=O.a`
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
`,Rb=O.button`
  border: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  font-family: inherit;
  font-size: 100%;
  cursor: pointer;
  background: none;
`,Ib=document.getElementById("modalMobail"),Ng=({onClose:e,handleSetActiveLink:t})=>mo.createPortal(c.jsx(_b,{children:c.jsxs("div",{className:"container",children:[c.jsxs(Ob,{children:[c.jsx("a",{href:"#home",children:c.jsx("svg",{width:"40",height:"40",children:c.jsx("use",{href:`${Ni}#icon-g10`})})}),c.jsx(Tb,{href:"#contact",children:"Контакт"}),c.jsx(Rb,{type:"button",onClick:()=>e(),children:c.jsx(Pb,{width:"40",height:"40",children:c.jsx("use",{href:`${Ni}#icon-close`})})})]}),c.jsxs(Mb,{children:[c.jsx(vi,{href:"#home",onClick:n=>{e(),t("home",n)},children:"Головна"}),c.jsx(vi,{href:"#aboutUs",onClick:n=>{e(),t("aboutUs",n)},children:"Про нас"}),c.jsx(vi,{href:"#services",onClick:n=>{e(),t("services",n)},children:"Послуги"}),c.jsx(vi,{href:"#mentoring",onClick:n=>{e(),t("mentoring",n)},children:"Менторство"}),c.jsx(vi,{href:"#projects",onClick:n=>{e(),t("projects",n)},children:"Проєкти"})]})]})}),Ib);Ng.propTypes={onClose:cn.func.isRequired};const Lb=[{id:"home",label:"Головна"},{id:"aboutUs",label:"Про нас"},{id:"services",label:"Послуги"},{id:"mentoring",label:"Менторство"},{id:"projects",label:"Проєкти"}],Vg=({handleSetActiveLink:e})=>{const[t,n]=A.useState("home"),[r,i]=A.useState(!1),o=Bn.useMediaQuery({query:"(min-width: 768px) and (max-width: 1439px)"}),a=Bn.useMediaQuery({query:"(max-width: 1439px)"}),l=Bn.useMediaQuery({query:"(min-width: 1440px)"}),s=()=>i(!r),u=()=>{const p=["home","aboutUs","services","mentoring","projects","contact"].find(v=>{const x=document.getElementById(v);if(x){const m=x.getBoundingClientRect();return m.top<=120&&m.bottom>=120}return x});p&&n(p)};return A.useEffect(()=>(window.addEventListener("scroll",u),()=>window.removeEventListener("scroll",u)),[]),c.jsxs(wb,{children:[c.jsx("div",{className:"container",children:c.jsxs(bb,{children:[(a||l)&&c.jsx("a",{href:"#home",children:c.jsx("svg",{width:l?"227":"40",height:"40",children:c.jsx("use",{href:l?`${te}#logo-black`:`${Ni}#icon-g10`})})}),l&&c.jsx(Sb,{children:Lb.map(h=>c.jsx(kb,{href:`#${h.id}`,className:t===h.id?"active":"",onClick:p=>e(h.id,p),children:h.label},h.id))}),c.jsx(jb,{href:"#contact",className:t==="contact"?"active":"",onClick:h=>e("contact",h),children:"Контакт"}),(a||o)&&c.jsx(Eb,{type:"button",onClick:s,children:c.jsx(Cb,{children:c.jsx("use",{href:o?`${Ni}#icon-menuburgerhorizontaltablet`:`${Ni}#icon-menuburger`})})})]})}),a&&r&&c.jsx(Ng,{onClose:s,handleSetActiveLink:e})]})};Vg.propTypes={handleSetActiveLink:cn.func.isRequired};const Ab="/healthy-management-project/assets/hero1x-6AVSlzud.webp",Db="/healthy-management-project/assets/hero@2x-N6Dvbfg6.jpg",Fb="/healthy-management-project/assets/hero1x-d4IOBsel.jpg",zb="/healthy-management-project/assets/hero@2x-qDoBpvI0.jpg",Nb="/healthy-management-project/assets/hero@1x-gjNVfS_G.jpg",Vb="/healthy-management-project/assets/hero@2x-xeAfw2Nx.jpg",$b="/healthy-management-project/assets/hero@1x-T7izVw7M.jpg",Ub="/healthy-management-project/assets/hero@2x-MzaNEgZc.jpg",Bb=O.section`
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${Fb});
  background-size: cover;
  margin-top: 120px;
  padding-top: 40px;
  padding-bottom: 40px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${zb});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${Nb});
    margin-top: 120px;
    padding-top: 234px;
    padding-bottom: 234px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${Vb});
    }
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${$b});
    margin-top: 120px;
    padding-top: 236px;
    padding-bottom: 236px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${Ub});
    }
  }

  @media screen and (min-width: 1920px) {
    background-image: url(${Ab});

    margin-top: 120px;
    padding-top: 296px;
    padding-bottom: 296px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${Db});
    }
  }
`,Wb=O.h1`
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
`,Hb=O.h3`
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
`,Yb=O.ul`
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
`,Qb=O.li`
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
`,Kb=O.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,$g=O.a`
  display: flex;
  width: 100%;
  height: 56px;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  box-shadow: 0px 0px 8px 0px rgba(248, 248, 248, 0.08);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  transition: background 0.5s ease, color 0.5s ease;

  &:hover,
  &:focus {
    box-shadow: 0px 0px 16px 0px rgba(248, 248, 248, 0.16);
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  }
`,Gb=O($g)`
  color: var(--typography-bluedark, #062136);
  background: var(--primary-yellow);

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
`,Xb=O($g)`
  color: var(--system-default-10);
  border: 1px solid var(--system-default-10);

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
`,qb=["медичний менеджмент і маркетинг,","програми управління здоров'ям для підприємств та бізнесу,","менторство"],Fu=({type:e,children:t,href:n})=>e==="contact"?c.jsx(Gb,{href:n,children:t}):e==="services"?c.jsx(Xb,{href:n,children:t}):null;Fu.propTypes={type:cn.oneOf(["contact","services"]).isRequired,children:cn.node.isRequired,href:cn.string.isRequired};const Jb=()=>c.jsx(Bb,{id:"home",children:c.jsxs("div",{className:"container",children:[c.jsx(Wb,{children:"Бізнес-партнер з розвитку та комунікацій здорового менеджменту"}),c.jsx(Hb,{children:"Будуємо ефективні стратегії здорового менеджменту для медичних брендів:"}),c.jsx(Yb,{children:qb.map((e,t)=>c.jsx(Qb,{children:e},t))}),c.jsxs(Kb,{children:[c.jsx(Fu,{type:"contact",href:"#contact",children:"Консультація"}),c.jsx(Fu,{type:"services",href:"#services",children:"Послуги"})]})]})}),Zb=O.section`
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,e2=O.div`
  border-radius: 16px;
  padding: 24px;
  background: var(--background-bluedark);

  @media screen and (min-width: 1920px) {
    max-width: 100%;
    padding: 80px;
  }
`,t2=O.h2`
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
`,n2=O.ul`
  display: flex;
  padding: 0;
  flex-wrap: wrap;
  gap: 24px;
`,No=O.li`
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
`,Vo=O.svg`
  width: 64px;
  height: 64px;
`,$o=O.div`
  display: flex;
  flex-direction: column;
`,Uo=O.h3`
  width: 100%;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 8px;
  color: var(--system-default-10);

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 16px;
  }
`,Bo=O.p`
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
`,r2=()=>c.jsx(Zb,{className:"container",children:c.jsxs(e2,{children:[c.jsx(t2,{children:"Чому обирають нас"}),c.jsxs(n2,{children:[c.jsxs(No,{children:[c.jsx(Vo,{children:c.jsx("use",{href:`${te}#hands-shake`})}),c.jsxs($o,{children:[c.jsx(Uo,{children:"Надійне партнерство та менторство"}),c.jsx(Bo,{children:"Ми налаштовані на довгострокове партнерство і дбаємо про комфортні та чесні комунікації"})]})]}),c.jsxs(No,{children:[c.jsx(Vo,{children:c.jsx("use",{href:`${te}#setting`})}),c.jsxs($o,{children:[c.jsx(Uo,{children:"Індивідуальний підхід"}),c.jsx(Bo,{children:"Кожен бізнес і послуга мають свої особливості. Ми занурюємося у ваш бізнес і пропонуємо індивідуальні стратегії, які допоможуть вам досягти успіху"})]})]}),c.jsxs(No,{children:[c.jsx(Vo,{children:c.jsx("use",{href:`${te}#icon-lamp`})}),c.jsxs($o,{children:[c.jsx(Uo,{children:"Експертні послуги"}),c.jsx(Bo,{children:"Ми опираємося на передовий досвід і використовуємо як класичні, так і сучасні підходи для досягнення поставленого результату"})]})]}),c.jsxs(No,{children:[c.jsx(Vo,{children:c.jsx("use",{href:`${te}#icon-puzzle`})}),c.jsxs($o,{children:[c.jsx(Uo,{children:"Комплексні рішення"}),c.jsx(Bo,{children:"Наша експертиза дозволяє пропонувати комплексні рішення для ефективної співпраці"})]})]})]})]})}),i2="/healthy-management-project/assets/pic_mentorstvo1x-R5bIGNq0.webp",o2="/healthy-management-project/assets/pic_mentorstvo2x-k6d-_Us1.jpg",a2="/healthy-management-project/assets/pic_mentorstvo1x-DCmM7Ygj.jpg",s2="/healthy-management-project/assets/mob_mentor1x-_de1iGBc.webp",l2="/healthy-management-project/assets/mob_mentor@2x-oAKhVwNJ.jpg",u2="/healthy-management-project/assets/mob_mentor1x-1WPWjsx0.jpg",c2="/healthy-management-project/assets/pic_mentorstvo_768_1x-Px4J1LUl.jpg",d2="/healthy-management-project/assets/pic_mentorstvo_768_1x-gkJzTmk_.webp",f2="/healthy-management-project/assets/pic_mentorstvo_768@2x-S5qjgsHl.webp",p2="/healthy-management-project/assets/pic_mentorstvo_1440_1x-WjllDGeR.webp",h2="/healthy-management-project/assets/pic_mentorstvo_1440@2x-O-l22q9a.webp",m2="/healthy-management-project/assets/pic_mentorstvo_1440_1x-7OpZfadC.jpg",g2=O.section`
  padding: 40px 24px;

  @media screen and (min-width: 768px) {
    padding: 40px;
  }

  @media screen and (min-width: 1440px) {
    padding: 40px 80px;
  }

  @media screen and (min-width: 1920px) {
    padding: 80px 120px;
  }
`,v2=O.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1920px) {
    gap: 24px;
    margin-bottom: 40px;
  }
`,x2=O.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    max-width: 688px;
    gap: 24px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 628px;
  }

  @media screen and (min-width: 1920px) {
    max-width: 828px;
    align-items: flex-start;
  }
`,y2=O.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 16px;

  border-radius: 16px;
  background: var(--background-white);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);

  @media screen and (min-width: 768px) {
    max-width: 332px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 628px;
    height: 292px;
  }

  @media screen and (min-width: 1920px) {
    gap: 24px;
    max-width: 820px;
    height: 392px;
    padding: 40px;
  }
`,w2=O.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: var(--typography-black);

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 36px;
    line-height: 48px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 48px;
    line-height: 56px;
    margin-bottom: 16px;
  }
`,b2=O.h3`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: var(--typography-bluedark);

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 28px;
  }

  @media screen and (min-width: 1440px) {
    line-height: 24px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: 32px;
  }
`,Jf=O.h3`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: var(--typography-white);

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 28px;
  }
  @media screen and (min-width: 1440px) {
    line-height: 24px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: 32px;
  }
`,S2=O.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 320px;

  @media screen and (min-width: 1920px) {
    gap: 20px;
    margin-bottom: 56px;
  }
`,Zf=O.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: var(--typography-bluedark);

  &:not(:first-of-type) {
    margin-bottom: 8px;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1440px) {
    line-height: 22px;

    &:not(:first-of-type) {
      margin-bottom: 0px;
    }
  }

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    max-width: 828px;
    line-height: 28px;
  }
`,k2=O.a`
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

  @media screen and (min-width: 768px) {
    width: 260px;
    margin-bottom: 16px;

    font-size: 15px;
    line-height: 22px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 80px;

    &:hover,
    &focus {
      font-weight: 600;
      background: var(--background-white);
    }
  }
`,j2=O.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  @media screen and (min-width: 1920px) {
    gap: 40px;
  }
`,C2=O.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  padding: 24px;
  border-radius: 16px;
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  background-color: var(--background-bluedark);

  @media screen and (min-width: 768px) {
    height: 462px;
  }

  @media screen and (min-width: 1440px) {
    width: 628px;
    height: 292px;
  }

  @media screen and (min-width: 1920px) {
    height: auto;
    padding: 40px;
    gap: 24px;
    flex: 1 0 0;
  }
`,E2=O.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: var(--typography-bluedark);

  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 22px;
  }

  @media screen and (min-width: 1440px) {
    line-height: 18px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 16px;
    line-height: 24px;
  }
`,ep=O.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: var(--typography-white);

  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 22px;
    margin-bottom: 0px;
  }

  @media screen and (min-width: 1440px) {
    line-height: 18px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 16px;
    line-height: 24px;
  }
`,Sr=O.li`
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
`,kr=O.li`
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
`,_2=()=>c.jsxs(g2,{id:"mentoring",className:"container",children:[c.jsxs(v2,{children:[c.jsxs("div",{children:[c.jsx(se,{minWidth:1920,children:c.jsx("img",{srcSet:`${i2} 1x, ${o2} 2x`,sizes:"(min-width: 1920px) 1920px",src:a2,alt:"Ольга Поліщук - ваш ментор в медичній галузі"})}),c.jsx(se,{minWidth:300,maxWidth:767,children:c.jsx("img",{srcSet:`${s2} 1x, ${l2} 2x`,sizes:"(min-width: 375px) 375px",src:u2,alt:"Ольга Поліщук - ваш ментор в медичній галузі"})}),c.jsx(se,{minWidth:768,maxWidth:1439,children:c.jsx("img",{srcSet:`${d2} 1x, ${f2} 2x`,sizes:"(min-width: 768px) 768px",src:c2,alt:"Ольга Поліщук - ваш ментор в медичній галузі"})}),c.jsx(se,{minWidth:1440,maxWidth:1919,children:c.jsx("img",{srcSet:`${p2} 1x, ${h2} 2x`,sizes:"(min-width: 1440px) 100vw (max-width: 1919px) 100vw",src:m2,alt:"Ольга Поліщук - ваш ментор в медичній галузі"})})]}),c.jsxs(x2,{children:[c.jsx(w2,{children:"Менторство"}),c.jsxs(S2,{children:[c.jsxs(Zf,{children:[c.jsx("b",{children:"Менторство в медичній галузі"})," - почути іншу думку, підтвердити власні гіпотези, зрозуміти вектор розвитку, отримати підтримку та пораду з питань менеджменту і медичного маркетингу"]}),c.jsxs(Zf,{children:[c.jsx("b",{children:"Менторство"})," - це про взаємодію та чесну комунікацію, про спільні цінності та готовність до росту, про надійне партнерство та довіру"]})]}),c.jsx(k2,{href:"#contact",children:"Дізнатися вартість"})]})]}),c.jsx("div",{children:c.jsxs(j2,{children:[c.jsxs(y2,{children:[c.jsx(b2,{children:"Про що це?"}),c.jsxs(E2,{children:[c.jsx(Sr,{children:c.jsx("p",{children:"Про прагнення почути чесну іншу думку/та або підтвердити власні гіпотези для власника/керівника"})}),c.jsx(Sr,{children:c.jsx("p",{children:"Про бізнес-процеси та їх ефективність"})}),c.jsx(Sr,{children:c.jsx("p",{children:"Про вектори розвитку бізнесу або проєкту"})}),c.jsx(Sr,{children:c.jsx("p",{children:"Про практичний інструментарій для впровадження змін"})}),c.jsx(Sr,{children:c.jsx("p",{children:"Про маркетинг, сервіс та комунікації в медичних бізнесах"})}),c.jsx(Sr,{children:c.jsx("p",{children:"Про здоров'я працівників та стратегії підвищенння ефективності бізнесу"})})]})]}),c.jsxs(C2,{children:[c.jsx(Jf,{children:"Для кого"}),c.jsxs(ep,{children:[c.jsx(kr,{children:c.jsx("p",{children:"Лідерам, які прагнуть змін"})}),c.jsx(kr,{children:c.jsx("p",{children:"Власникам, які хочуть отримати незалежку експертну думку"})}),c.jsx(kr,{children:c.jsx("p",{children:"Керівникам та маркетологам, яким потрібна підтримка"})}),c.jsx(kr,{children:c.jsx("p",{children:"Лікарям, яким важливо отримати пораду"})})]}),c.jsx(Jf,{children:"Формат"}),c.jsxs(ep,{children:[c.jsx(kr,{children:c.jsx("p",{children:"Індивідуальна ментор-сесія (від 1 години)"})}),c.jsx(kr,{children:c.jsx("p",{children:"Персональний супровід на декілька місяців"})})]})]})]})})]}),Ug=O.section`
  padding: 40px 24px;

  @media screen and (min-width: 768px) {
    padding: 40px;
  }
  @media screen and (min-width: 1440px) {
    padding: 40px 80px;
  }

  @media screen and (min-width: 1920px) {
    padding: 80px 120px;
  }
`,Bg=O.div`
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  background: var(--background-white);

  @media screen and (min-width: 768px) {
    padding: 40px;
  }

  @media screen and (min-width: 1920px) {
    padding: 80px;
  }
`,O2=O.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 16px;
    column-gap: 24px;
  }

  @media screen and (min-width: 1440px) {
    justify-content: space-between;
  }

  @media screen and (min-width: 1920px) {
    flex-direction: row;
    width: max-content;
  }
`,Wo=O.div`
  position: relative;

  @media screen and (min-width: 1920px) {
    min-width: 370px;
  }
`,Wg=O.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1290px) {
    gap: 40px;
    margin-bottom: 40px;
    flex-direction: row;
  }
`,Hg=O.div`
  min-width: 280px;
  gap: 16px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1920px) {
    min-width: 740px;
  }
`,Yg=O.div`
  @media screen and (min-width: 768px) {
    padding: 24px;
  }
`,Ho=O.p`
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

  @media screen and (min-width: 768px) {
    font-size: 15px;
    left: 42%;
  }

  @media screen and (min-width: 1920px) {
    ustify-content: flex-start;
    width: 100%;
    font-size: 16px;
    line-height: 1.4;
    top: 48%;
    left: 60%;
  }
`,Qg=O.h2`
  color: var(--typography-black);
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 48px;
    line-height: 56px;
  }
`,Kg=O.h3`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 24px;
  color: var(--typography-bluedark);

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.4;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    margin-bottom: 16px;
  }
`,Gg=O.p`
  font-size: 16px;
  line-height: 24px;
  color: var(--typography-bluedark);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    font-weight: 500;
  }

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    line-height: 1.4;
  }
`,Xg=O.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  width: fit-content;
  margin-bottom: 12px;

  border-radius: 16px;
  padding: 4px 16px;
  color: var(--typography-bluedark);
  background: rgba(6, 33, 54, 0.1);

  @media screen and (min-width: 768px) {
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    margin-bottom: 8px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: 1.3;
  }
`,qg=O.a`
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

  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 1.5;
    margin-bottom: 16px;

    width: 260px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 16px;
    margin-top: 28px;
    width: 260px;
  }
`,Jg=O.p`
  font-size: 18px;
  line-height: 1.3;
  font-weight: 600;
  margin-bottom: 16px;

  color: var(--typography-bluedark);

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    margin-bottom: 24px;
  }
`,Zg=O.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 24px;
  color: var(--typography-bluedark);

  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 22px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 16px;
    line-height: 24px;
  }
`,Wt=O.li`
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
`,Pt=O.svg`
  @media screen and (min-width: 330px) {
    width: 260px;
    height: 60px;
  }

  @media screen and (min-width: 768px) {
    width: 292px;
    height: 64px;
  }

  @media screen and (min-width: 1440px) {
    width: 282px;
    height: 72px;
  }

  @media screen and (min-width: 1920px) {
    width: 370px;
    height: 80px;
  }
`,T2=()=>c.jsx(Ug,{className:"container",children:c.jsxs(Bg,{children:[c.jsxs(Wg,{children:[c.jsxs(Hg,{children:[c.jsx(Qg,{children:"Індивідуальна ментор сесія"}),c.jsx(Gg,{children:"Вирішення вашого індивідуального запиту"}),c.jsx(Xg,{children:"від 1 години"}),c.jsx(qg,{href:"#contact",children:"Замовити послугу"})]}),c.jsxs(Yg,{children:[c.jsx(Kg,{children:"Питання, з якими можете звернутися"}),c.jsxs(Zg,{children:[c.jsx(Wt,{children:"Незалежна думка щодо маркетингу та розвитку"}),c.jsx(Wt,{children:"Порада по створенню відділу маркетингу або оцінка існуючої структури"}),c.jsx(Wt,{children:"Питання по роботі з підрядниками"}),c.jsx(Wt,{children:"Порада щодо оптимізації бізнес-процесів"}),c.jsx(Wt,{children:"Як вірно оцінити ефективність маркетингових дій"}),c.jsx(Wt,{children:"Які інструменти комунікацій використовувати"}),c.jsxs(Wt,{children:["Особисте питання по менеджменту та розвитку з питань управління"," ","здоров'ям"]})]})]})]}),c.jsx(Jg,{children:"Шлях проведення менторської сесії"}),c.jsxs(O2,{children:[c.jsxs(Wo,{children:[c.jsx(se,{minWidth:330,maxWidth:767,children:c.jsx(Pt,{children:c.jsx("use",{href:`${te}#icon-rectangle-mob`})})}),c.jsx(se,{minWidth:768,maxWidth:1439,children:c.jsx(Pt,{children:c.jsx("use",{href:`${te}#icon-rectangle-tab`})})}),c.jsx(se,{minWidth:1440,children:c.jsx(Pt,{children:c.jsx("use",{href:`${te}#icon-rectangle`})})}),c.jsx(Ho,{children:"Заповнення брифу"})]}),c.jsxs(Wo,{children:[c.jsx(se,{minWidth:330,maxWidth:767,children:c.jsx(Pt,{children:c.jsx("use",{href:`${te}#icon-rectangle-mob`})})}),c.jsx(se,{minWidth:768,maxWidth:1439,children:c.jsx(Pt,{children:c.jsx("use",{href:`${te}#icon-rectangle-tab`})})}),c.jsx(se,{minWidth:1440,children:c.jsx(Pt,{children:c.jsx("use",{href:`${te}#icon-rectangle`})})}),c.jsx(Ho,{children:"Діагностика ситуації"})]}),c.jsxs(Wo,{children:[c.jsx(se,{minWidth:330,maxWidth:767,children:c.jsx(Pt,{children:c.jsx("use",{href:`${te}#icon-rectangle-mob`})})}),c.jsx(se,{minWidth:768,maxWidth:1439,children:c.jsx(Pt,{children:c.jsx("use",{href:`${te}#icon-rectangle-tab`})})}),c.jsx(se,{minWidth:1440,children:c.jsx(Pt,{children:c.jsx("use",{href:`${te}#icon-rectangle`})})}),c.jsx(Ho,{children:"Проведення сесії"})]}),c.jsxs(Wo,{children:[c.jsx(se,{minWidth:330,maxWidth:767,children:c.jsx(Pt,{children:c.jsx("use",{href:`${te}#icon-rectangle-mob`})})}),c.jsx(se,{minWidth:768,maxWidth:1439,children:c.jsx(Pt,{children:c.jsx("use",{href:`${te}#icon-rectangle-tab`})})}),c.jsx(se,{minWidth:1440,children:c.jsx(Pt,{children:c.jsx("use",{href:`${te}#icon-rectangle`})})}),c.jsx(Ho,{children:"Рекомендації"})]})]})]})}),P2=O.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 24px;
    row-gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    column-gap: 22px;
  }

  @media screen and (min-width: 1920px) {
    width: max-content;
  }
`,st=O.svg`
  @media screen and (min-width: 330px) {
    width: 260px;
    height: 60px;
  }

  @media screen and (min-width: 768px) {
    width: 292px;
    height: 64px;
  }

  @media screen and (min-width: 1440px) {
    width: 222px;
  }

  @media screen and (min-width: 1920px) {
    width: 285px;
    height: 80px;
  }
`,xi=O.div`
  position: relative;
  height: 60px;

  @media screen and (min-width: 1440px) {
    width: 220px;
  }

  @media screen and (min-width: 1920px) {
    min-width: 285px;
  }
`;O.div`
  min-width: 740px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;const yi=O.p`
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

  @media screen and (min-width: 768px) {
    font-size: 15px;
    left: 42%;
  }
  @media screen and (min-width: 1440px) {
    left: 54%;
  }

  @media screen and (min-width: 1920px) {
    display: flex;
    justify-content: flex-start;
    left: 60%;
    width: 100%;
    top: 66%;

    font-size: 16px;
    line-height: 1.4;
  }
`,M2=()=>c.jsx(Ug,{className:"container",children:c.jsxs(Bg,{children:[c.jsxs(Wg,{children:[c.jsxs(Hg,{children:[c.jsx(Qg,{children:"Персональний супровід"}),c.jsx(Gg,{children:"Пропрацьовуємо ваші запити та досягаємо посавлених цілей"}),c.jsx(Xg,{children:"від 2 місяців тісної взаємодії"}),c.jsx(qg,{href:"#contact",children:"Замовити послугу"})]}),c.jsxs(Yg,{children:[c.jsx(Kg,{children:"Питання, з якими можете звернутися"}),c.jsxs(Zg,{children:[c.jsx(Wt,{children:"Зануритись в бізнес-процеси та зрозуміти, де є точки зростання"}),c.jsx(Wt,{children:"Зрозуміти що таке маркетинг та як він працює у вашому бізнесі"}),c.jsx(Wt,{children:"Супровід розробки та впровадження стратегій"}),c.jsx(Wt,{children:"Особисті питання по медичному менеджменту, маркетингу та розвитку, управління здоров'ям"})]})]})]}),c.jsx(Jg,{children:"Шлях проведення менторського супроводу"}),c.jsxs(P2,{children:[c.jsxs(xi,{children:[c.jsx(se,{minWidth:330,maxWidth:767,children:c.jsx(st,{children:c.jsx("use",{href:`${te}#icon-rectangle-mob`})})}),c.jsx(se,{minWidth:768,maxWidth:1439,children:c.jsx(st,{children:c.jsx("use",{href:`${te}#icon-rectangle-tab`})})}),c.jsx(se,{minWidth:1440,children:c.jsx(st,{children:c.jsx("use",{href:`${te}#icon-rectangle2`})})}),c.jsx(yi,{children:"Заповнення брифу"})]}),c.jsxs(xi,{children:[c.jsx(se,{minWidth:330,maxWidth:767,children:c.jsx(st,{children:c.jsx("use",{href:`${te}#icon-rectangle-mob`})})}),c.jsx(se,{minWidth:768,maxWidth:1439,children:c.jsx(st,{children:c.jsx("use",{href:`${te}#icon-rectangle-tab`})})}),c.jsx(se,{minWidth:1440,children:c.jsx(st,{children:c.jsx("use",{href:`${te}#icon-rectangle2`})})}),c.jsx(yi,{children:"Діагностика ситуації"})]}),c.jsxs(xi,{children:[c.jsx(se,{minWidth:330,maxWidth:767,children:c.jsx(st,{children:c.jsx("use",{href:`${te}#icon-rectangle-mob`})})}),c.jsx(se,{minWidth:768,maxWidth:1439,children:c.jsx(st,{children:c.jsx("use",{href:`${te}#icon-rectangle-tab`})})}),c.jsx(se,{minWidth:1440,children:c.jsx(st,{children:c.jsx("use",{href:`${te}#icon-rectangle2`})})}),c.jsx(yi,{children:"Визначення зон росту"})]}),c.jsxs(xi,{children:[c.jsx(se,{minWidth:330,maxWidth:767,children:c.jsx(st,{children:c.jsx("use",{href:`${te}#icon-rectangle-mob`})})}),c.jsx(se,{minWidth:768,maxWidth:1439,children:c.jsx(st,{children:c.jsx("use",{href:`${te}#icon-rectangle-tab`})})}),c.jsx(se,{minWidth:1440,children:c.jsx(st,{children:c.jsx("use",{href:`${te}#icon-rectangle2`})})}),c.jsx(yi,{children:"Менторинг"})]}),c.jsxs(xi,{children:[c.jsx(se,{minWidth:330,maxWidth:767,children:c.jsx(st,{children:c.jsx("use",{href:`${te}#icon-rectangle-mob`})})}),c.jsx(se,{minWidth:768,maxWidth:1439,children:c.jsx(st,{children:c.jsx("use",{href:`${te}#icon-rectangle-tab`})})}),c.jsx(se,{minWidth:1440,children:c.jsx(st,{children:c.jsx("use",{href:`${te}#icon-rectangle2`})})}),c.jsx(yi,{children:"Рекомендації"})]})]})]})}),Rs=()=>{const e=Bn.useMediaQuery({maxWidth:767}),t=Bn.useMediaQuery({minWidth:768,maxWidth:1439}),n=Bn.useMediaQuery({minWidth:1440,maxWidth:1919}),r=Bn.useMediaQuery({minWidth:1920});return e&&"mobile"||t&&"tablet"||n&&"desktop"||r&&"largeDesktop"},R2="/healthy-management-project/assets/denta_derm1x-JWCICTe_.webp",I2="/healthy-management-project/assets/medialt1x-5LMkh0v8.webp",L2="/healthy-management-project/assets/cures1x--AoJBOWJ.webp",A2="/healthy-management-project/assets/clinic1x-YgK5Wnno.webp",D2="/healthy-management-project/assets/kmklam1x-FlPeEOTs.webp",F2="/healthy-management-project/assets/symmetrica1x-hhcOddzB.webp",gl=[{image:R2,category:"DentaDerm",title:"Діагностика бізнес-процесів, маркетингу, сервісу, розробка стратегії розвитку, менторство",about:["Діагностика бізнес-процесів та маркетингу","Стратегія розвитку","Підбір команди маркетингу","Менторство"],details:[{title:"Завдання:",about:["Розробка стратегії розвитку","Розробка нового сайту клініки","Пошук команди маркетингу"],comment:"Дії в результаті розробки стратегії розвитку передбачали роботу над проєктом в новому позиціонуванні,  пошук зовнішньої та внутрішньої команди для реалізації нового сайту, ведення соцмереж"},{title:"В результаті роботи над проєктом:",about:["Розроблені вектори розвитку","Розроблений та впроваджений новий сайт","Підібрана команда маркетингового супроводу"],comment:"В результаті співпраці партнер отримав комплексне бачення просування, сформована команда маркетингу"}]},{image:I2,category:"Medialt",title:"Діагностика бізнес-процесів, маркетингу, сервісу, розробка стратегії розвитку, менторство",about:["Аудит ринку та конкурентів","Аудит маркетингу та сервісу","Розробка стратегії розвитку"],details:[{title:"Завдання:",about:["Розробка стратегії розвитку"]},{title:"Робота над задачою була розділена на два етапи:",about:["Аналіз конкурентів, ринку, виявлення зовнішніх можливостей та загроз","Аналіз сервісу медичного центру, аналіз роботи контакт центру, маркетингу, наявної бази пацієнтів та внутрішніх бізнес-процесів"]},{title:"В результаті комплексного аудиту підготували стратегію розвитку, яка передбачала рекомендації щодо:",about:["Управління маркетингом","Оптимізації роботи сервісу","Можливості МІС","Етапи розвитку напрямків та клініки вцілому"],comment:"В результаті співпраці - за 5 місяців ріст обороту в два рази"}]},{image:L2,category:"Cures",title:"Автоматизація комунікації з пацієнтами",about:["Створення та запуск 20 чат-ботів для клінік","Проведення консультацій та аудитів комунікацій клінік з пацієнтами","Розробка персональних протоколів спілкування з пацієнтами"],details:[{title:"Завдання:",about:["Автоматизація комунікації з пацієнтами"]},{title:"В результаті роботи над проєктом:",about:["Розвиток проєкту по створенню чат-ботів для медичних центрів","Розробка протоколів супроводу та опитувальників для клінік","Проведення зустрічей та комунікацій з клініками","Розробка алгоритмів та запуск чат-ботів"],comment:"В результаті співпраці над проєктом запуск 20 чат-ботів для медичних центрів"}]},{image:A2,category:"Клініка ім. ак. Юрія Спіженка",title:"Менторство, діагностика бізнес-процесів, маркетингу та сервісу, розробка стратегії розвитку",about:["Діагностика бізнес-процесів","Аудит маркетингу та сервісу","Розробка стратегії розвитку та маркетингу","Розробка та впровадження комунікаційної стратегії","Ведення маркетингових активностей "],details:[{title:"Завдання:",about:["Рестарт клініки у воєний час"]},{title:"Робота над задачею була розділена на три етапи:",about:["Діагностика конкурентів, ринку, виявлення зовнішніх можливостей та загроз","Діагностика сервісу медичного центру, аналіз роботи контакт центру, маркетингу, наявної бази пацієнтів та внутрішніх бізнес-процесів","Розробка та впровадження стратегії маркетингу, комунікації та сервісу, супровід рекламних кампаній, оптимізація бізнес-процесів"],comment:"В результаті співпраці над проєктом: збільшення доходу клініки, вихід на довоєний об’єм"}]},{image:D2,category:"KMKlab",title:"Діагностика маркетингу, сервісу, бізнес-процесів",about:["Аудит маркетингу та інструментів комунікацій","Аудит сервісу","Розробка рекомендацій щодо розвитку"],details:[{title:"Завдання:",about:["Аудит поточної маркетингової стратегії","Аудит сервісу","Формування рекомендацій по розвитку"]},{title:"Робота над задачою була розділена на два етапи:",about:["Відвідування всіх відділень лабораторій з метою формування рекомендацій по кожній локації","Аналіз поточної ситуації маркетингу та комунікацій, ведення соціальних мереж"],comment:"В результаті співпраці проаналізовано роботу відділу маркетингу та підрядників та надані рекомендації щодо структури відділу, сформовані подальші  кроки  маркетингової  та сервісної стратегії"}]},{image:F2,category:"Symmetrica",title:"Менторство, діагностика маркетингу, сервісу, бізнес-процесів",about:["Аудит маркетингу та сервісу","Розробка рекомендацій щодо розвитку","Оптимізація бізнес-процесів"],details:[{title:"Завдання:",about:["Діагностика поточної маркетингової діяльності та комунікацій","Аудит сервісу","Аудит роботи підрядників","Формування рекомендацій по розвитку"]},{title:"В результаті роботи над проєктом:",about:["Проведений поточний аудит шляху пацієнта, виявлені точки зростання сервісу","Проаналізовано роботу відділу маркетингу і підрядників та надані рекомендації щодо структури відділу","Надані рекомендації щодо формування подальших кроків маркетингової  та сервісної стратегії","Сформовані конверсійні показники та вектори руху","Надана менторська підтримка"]}]}],z2=O.section`
  padding-top: 40px;
  padding-bottom: 40px;
  @media screen and (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,N2=O.h2`
  font-size: 48px;
  font-weight: 600;
  line-height: calc(56 / 48);

  margin-bottom: 40px;
`,V2=O.ul`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
  }
`,$2=O.span`
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
`,U2=O.svg`
  fill: currentColor;
  stroke: currentColor;

  width: 24px;
  height: 24px;
`,B2=O.li`
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
`,W2=O.div`
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
`,H2=O.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Y2=O.h4`
  font-size: ${e=>e.forDetail?"18px":"16px"};
  font-weight: 600;
  line-height: calc(${e=>e.forDetail?24/18:24/16});

  @media screen and (min-width: 768px) {
    font-size: ${e=>e.forDetail?"24px":"20px"};
    line-height: calc(${e=>e.forDetail?32/24:28/20});
  }
`,Q2=O.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,K2=O.li`
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
`,G2=O.p`
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
`,X2=O.svg`
  fill: currentColor;
  stroke: currentColor;
`,ed=({title:e,about:t,comment:n,additionalComment:r=!1})=>c.jsxs(H2,{children:[c.jsx(Y2,{forDetail:r,children:e}),c.jsx(Q2,{children:t==null?void 0:t.map(i=>c.jsxs(K2,{children:[c.jsx(X2,{children:c.jsx("use",{href:te+"#icon-done"})}),i]},i))}),n&&c.jsx(G2,{additionalComment:r,children:n})]}),q2=O.div`
  padding: 24px;
  display: flex;
  gap: 24px;
  flex-direction: column;

  color: var(--background-whitegrey, #f4f4f6);
  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`,J2=O.h3`
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
`,Z2=O.svg`
  fill: currentColor;
  stroke: currentColor;

  width: 24px;
  height: 24px;

  position: absolute;
  right: 28px;
  top: 28px;
`,eS=({dataList:{details:e,category:t}})=>{const n=Rs();return c.jsxs(q2,{children:[c.jsxs("div",{children:[c.jsx(J2,{symbols:t.length,children:t}),n==="mobile"&&c.jsx(Z2,{children:c.jsx("use",{href:te+"#icon-close"})})]}),e.map((r,i)=>c.jsx(ed,{title:r.title,about:r.about,comment:r.comment,additionalComment:i===0},r.title))]})},tS=O.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  color: var(--typography-bluedark, #1b3641);
`,nS=O.h3`
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
`,rS=O.img`
  height: 279px;
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    height: 300px;
  }
`,iS=O.span`
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  text-align: center;
`,oS=({dataList:e,onClick:t})=>{const n=Rs(),{category:r,title:i,about:o=[],image:a}=e;return c.jsxs(tS,{onClick:t,children:[c.jsx(rS,{src:a,alt:i}),c.jsx("div",{children:c.jsx(nS,{symbols:r.length,children:r})}),c.jsx(ed,{title:i,about:o}),n==="mobile"&&c.jsx(iS,{children:"Детальніше"})]})},aS=({item:e})=>{const[t,n]=A.useState(!1),r=Rs(),i=()=>{r==="mobile"&&n(o=>!o)};return c.jsxs(B2,{children:[c.jsx(oS,{dataList:e,onClick:i}),c.jsx(W2,{isVisible:t,onClick:i,image:e.image,className:!t&&r==="mobile"?"visually-hidden":"",children:c.jsx(eS,{dataList:e})})]})},sS=()=>{const e=Rs(),[t,n]=A.useState(e==="mobile"?[...gl.slice(0,3)]:[...gl]),r=()=>{t.length>4?n(i=>i.slice(0,3)):n([...gl])};return c.jsxs(z2,{id:"projects",className:"container",style:{paddingTop:"80px",paddingBottom:"80px"},children:[c.jsx(N2,{children:"Проєкти"}),c.jsx(V2,{children:t.map(i=>c.jsx(aS,{item:i},i.category))}),e==="mobile"&&c.jsxs($2,{onClick:r,children:[t.length>3?"Менше проєктів":"Більше проєктів",c.jsx(U2,{children:c.jsx("use",{href:te+`${t.length>3?"#icon-arrowup":"#icon-arrowdown"}`})})]})]})},lS=O.section`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 40px;
  gap: 24px;

  @media screen and (min-width: 1920px) {
    flex-direction: row;
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,uS=O.div`
  padding: 24px;
  border-radius: 16px;
  background: var(--background-white);

  @media screen and (min-width: 1920px) {
    padding: 80px;
    max-width: 828px;
    box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  }
`,cS=O.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;

  @media screen and (min-width: 1920px) {
    gap: 40px;
    margin-bottom: 40px;
  }
`,dS=O.h2`
  color: var(--typography-bluedark);
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;

  @media screen and (min-width: 1920px) {
    font-size: 48px;
    line-height: 56px;
  }
`,fS=O.h2`
  color: var(--typography-bluedark);
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    line-height: 28px;
  }
`,pS=O.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 1920px) {
    gap: 24px;
  }
`,vl=O.li`
  display: flex;
  align-items: center;
  gap: 16px;
  border-radius: 16px;
  background: var(--background-whitegrey);
  padding: 16px;
`,xl=O.svg`
  width: 24px;
  height: 24px;
  fill: var(--background-white);
  stroke-width: 4px;
`,yl=O.p`
  color: var(--typography-bluedark);
  width: 207px;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;

  @media screen and (min-width: 1920px) {
    width: 100%;
    font-size: 20px;
    line-height: 28px;
  }
`,hS="/healthy-management-project/assets/mob_olga_with_book1x-el2yagUK.webp",mS="/healthy-management-project/assets/mob_olga_with_book@2x-VYbutQBw.jpg",gS="/healthy-management-project/assets/mob_olga_with_book1x-fAO0seCI.jpg",vS="/healthy-management-project/assets/olga_with_book1x-SrpRZlIL.webp",xS="/healthy-management-project/assets/olga_with_book2x-na-cAYtV.webp",yS="/healthy-management-project/assets/olga_with_book1x-o5i5B_Z7.jpg",wS="/healthy-management-project/assets/olga_with_book_768_1x-q5jz0R6v.webp",bS="/healthy-management-project/assets/olga_with_book_768@2x-aSleAY5U.webp",SS="/healthy-management-project/assets/olga_with_book_768_1x-xn58vLYQ.jpg",kS="/healthy-management-project/assets/olga_with_book_1440_1x-Z35ryV4g.webp",tp="/healthy-management-project/assets/olga_with_book_1440@2x-KX3o3AYH.webp",jS=()=>c.jsxs(lS,{className:"container",children:[c.jsxs(uS,{children:[c.jsxs(cS,{children:[c.jsx(dS,{children:"Принципи роботи"}),c.jsx(fS,{children:"Наші принципи роботи полягають у співдії з ціннісними брендами та командами, які готові до чесної співпраці, щоб сприяти досягненню поставлених цілей. Готові ділитися власним досвідом та створювати стратегії здорового менеджменту та розвитку, маркетингу та сервісу"})]}),c.jsxs(pS,{children:[c.jsxs(vl,{children:[c.jsx(xl,{children:c.jsx("use",{href:`${te}#icon-done-yellow`})}),c.jsx(yl,{children:"Більше 18 років досвіду в маркетингу та комунікаціях"})]}),c.jsxs(vl,{children:[c.jsx(xl,{children:c.jsx("use",{href:`${te}#icon-done-yellow`})}),c.jsx(yl,{children:"Глибоке розуміння бізнес-процесів медичних закладів"})]}),c.jsxs(vl,{children:[c.jsx(xl,{children:c.jsx("use",{href:`${te}#icon-done-yellow`})}),c.jsx(yl,{children:"Використання принципів доказової медицини"})]})]})]}),c.jsx(se,{minWidth:375,maxWidth:767,children:c.jsx("img",{srcSet:`${hS} 1x, ${mS} 2x`,src:gS,alt:"Ольга Поліщук - ваш ментор в медичній галузі",loading:"lazy"})}),c.jsx(se,{minWidth:768,maxWidth:1439,children:c.jsx("img",{srcSet:`${wS} 1x, ${bS} 2x`,src:SS,alt:"Ольга Поліщук - ваш ментор в медичній галузі",loading:"lazy"})}),c.jsx(se,{minWidth:1440,maxWidth:1919,children:c.jsx("img",{srcSet:`${kS} 1x, ${tp} 2x`,src:tp,alt:"Ольга Поліщук - ваш ментор в медичній галузі",loading:"lazy"})}),c.jsx(se,{minWidth:1920,children:c.jsx("img",{srcSet:`${vS} 1x, ${xS} 2x`,src:yS,alt:"Ольга Поліщук - ваш ментор в медичній галузі",loading:"lazy"})})]}),CS=O.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: var(--scroll-to-top-bottom);
  right: 24px;
  padding: 8px;
  background-color: var(--primary-yellow);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  border: none;
  border-radius: 16px;
  z-index: 999;

  &:hover {
    box-shadow: 0px 0px 16px 0px rgba(27, 54, 65, 0.16);
  }

  @media screen and (min-width: 768px) {
    right: 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 48px;
    height: 48px;
    right: 80px;
  }

  @media screen and (min-width: 1920px) {
    width: 56px;
    height: 56px;
    right: 120px;
  }
`,ES=()=>{const[e,t]=A.useState(!1);A.useEffect(()=>{const r=()=>{const i=window.scrollY,o=document.getElementById("footer"),a=window.innerHeight+window.scrollY-o.offsetTop,l=Math.max(80,a);t(i>480||a>80),document.documentElement.style.setProperty("--scroll-to-top-bottom",`${l}px`)};return window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}},[]);const n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return c.jsx(c.Fragment,{children:e&&c.jsx(CS,{onClick:n,children:c.jsx("svg",{width:"24",height:"24",children:c.jsx("use",{href:`${te}#icon-arrowup`})})})})};function ev(e,t){return function(){return e.apply(t,arguments)}}const{toString:_S}=Object.prototype,{getPrototypeOf:td}=Object,Is=(e=>t=>{const n=_S.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),dn=e=>(e=e.toLowerCase(),t=>Is(t)===e),Ls=e=>t=>typeof t===e,{isArray:si}=Array,lo=Ls("undefined");function OS(e){return e!==null&&!lo(e)&&e.constructor!==null&&!lo(e.constructor)&&Ft(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const tv=dn("ArrayBuffer");function TS(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&tv(e.buffer),t}const PS=Ls("string"),Ft=Ls("function"),nv=Ls("number"),As=e=>e!==null&&typeof e=="object",MS=e=>e===!0||e===!1,pa=e=>{if(Is(e)!=="object")return!1;const t=td(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},RS=dn("Date"),IS=dn("File"),LS=dn("Blob"),AS=dn("FileList"),DS=e=>As(e)&&Ft(e.pipe),FS=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Ft(e.append)&&((t=Is(e))==="formdata"||t==="object"&&Ft(e.toString)&&e.toString()==="[object FormData]"))},zS=dn("URLSearchParams"),NS=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function vo(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),si(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),a=o.length;let l;for(r=0;r<a;r++)l=o[r],t.call(null,e[l],l,e)}}function rv(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const iv=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ov=e=>!lo(e)&&e!==iv;function zu(){const{caseless:e}=ov(this)&&this||{},t={},n=(r,i)=>{const o=e&&rv(t,i)||i;pa(t[o])&&pa(r)?t[o]=zu(t[o],r):pa(r)?t[o]=zu({},r):si(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&vo(arguments[r],n);return t}const VS=(e,t,n,{allOwnKeys:r}={})=>(vo(t,(i,o)=>{n&&Ft(i)?e[o]=ev(i,n):e[o]=i},{allOwnKeys:r}),e),$S=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),US=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},BS=(e,t,n,r)=>{let i,o,a;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)a=i[o],(!r||r(a,e,t))&&!l[a]&&(t[a]=e[a],l[a]=!0);e=n!==!1&&td(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},WS=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},HS=e=>{if(!e)return null;if(si(e))return e;let t=e.length;if(!nv(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},YS=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&td(Uint8Array)),QS=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},KS=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},GS=dn("HTMLFormElement"),XS=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),np=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),qS=dn("RegExp"),av=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};vo(n,(i,o)=>{let a;(a=t(i,o,e))!==!1&&(r[o]=a||i)}),Object.defineProperties(e,r)},JS=e=>{av(e,(t,n)=>{if(Ft(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Ft(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},ZS=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return si(e)?r(e):r(String(e).split(t)),n},ek=()=>{},tk=(e,t)=>(e=+e,Number.isFinite(e)?e:t),wl="abcdefghijklmnopqrstuvwxyz",rp="0123456789",sv={DIGIT:rp,ALPHA:wl,ALPHA_DIGIT:wl+wl.toUpperCase()+rp},nk=(e=16,t=sv.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function rk(e){return!!(e&&Ft(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const ik=e=>{const t=new Array(10),n=(r,i)=>{if(As(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=si(r)?[]:{};return vo(r,(a,l)=>{const s=n(a,i+1);!lo(s)&&(o[l]=s)}),t[i]=void 0,o}}return r};return n(e,0)},ok=dn("AsyncFunction"),ak=e=>e&&(As(e)||Ft(e))&&Ft(e.then)&&Ft(e.catch),D={isArray:si,isArrayBuffer:tv,isBuffer:OS,isFormData:FS,isArrayBufferView:TS,isString:PS,isNumber:nv,isBoolean:MS,isObject:As,isPlainObject:pa,isUndefined:lo,isDate:RS,isFile:IS,isBlob:LS,isRegExp:qS,isFunction:Ft,isStream:DS,isURLSearchParams:zS,isTypedArray:YS,isFileList:AS,forEach:vo,merge:zu,extend:VS,trim:NS,stripBOM:$S,inherits:US,toFlatObject:BS,kindOf:Is,kindOfTest:dn,endsWith:WS,toArray:HS,forEachEntry:QS,matchAll:KS,isHTMLForm:GS,hasOwnProperty:np,hasOwnProp:np,reduceDescriptors:av,freezeMethods:JS,toObjectSet:ZS,toCamelCase:XS,noop:ek,toFiniteNumber:tk,findKey:rv,global:iv,isContextDefined:ov,ALPHABET:sv,generateString:nk,isSpecCompliantForm:rk,toJSONObject:ik,isAsyncFn:ok,isThenable:ak};function fe(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}D.inherits(fe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:D.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const lv=fe.prototype,uv={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{uv[e]={value:e}});Object.defineProperties(fe,uv);Object.defineProperty(lv,"isAxiosError",{value:!0});fe.from=(e,t,n,r,i,o)=>{const a=Object.create(lv);return D.toFlatObject(e,a,function(s){return s!==Error.prototype},l=>l!=="isAxiosError"),fe.call(a,e.message,t,n,r,i),a.cause=e,a.name=e.name,o&&Object.assign(a,o),a};const sk=null;function Nu(e){return D.isPlainObject(e)||D.isArray(e)}function cv(e){return D.endsWith(e,"[]")?e.slice(0,-2):e}function ip(e,t,n){return e?e.concat(t).map(function(i,o){return i=cv(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function lk(e){return D.isArray(e)&&!e.some(Nu)}const uk=D.toFlatObject(D,{},null,function(t){return/^is[A-Z]/.test(t)});function Ds(e,t,n){if(!D.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=D.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,b){return!D.isUndefined(b[y])});const r=n.metaTokens,i=n.visitor||h,o=n.dots,a=n.indexes,s=(n.Blob||typeof Blob<"u"&&Blob)&&D.isSpecCompliantForm(t);if(!D.isFunction(i))throw new TypeError("visitor must be a function");function u(m){if(m===null)return"";if(D.isDate(m))return m.toISOString();if(!s&&D.isBlob(m))throw new fe("Blob is not supported. Use a Buffer instead.");return D.isArrayBuffer(m)||D.isTypedArray(m)?s&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function h(m,y,b){let d=m;if(m&&!b&&typeof m=="object"){if(D.endsWith(y,"{}"))y=r?y:y.slice(0,-2),m=JSON.stringify(m);else if(D.isArray(m)&&lk(m)||(D.isFileList(m)||D.endsWith(y,"[]"))&&(d=D.toArray(m)))return y=cv(y),d.forEach(function(g,w){!(D.isUndefined(g)||g===null)&&t.append(a===!0?ip([y],w,o):a===null?y:y+"[]",u(g))}),!1}return Nu(m)?!0:(t.append(ip(b,y,o),u(m)),!1)}const p=[],v=Object.assign(uk,{defaultVisitor:h,convertValue:u,isVisitable:Nu});function x(m,y){if(!D.isUndefined(m)){if(p.indexOf(m)!==-1)throw Error("Circular reference detected in "+y.join("."));p.push(m),D.forEach(m,function(d,f){(!(D.isUndefined(d)||d===null)&&i.call(t,d,D.isString(f)?f.trim():f,y,v))===!0&&x(d,y?y.concat(f):[f])}),p.pop()}}if(!D.isObject(e))throw new TypeError("data must be an object");return x(e),t}function op(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function nd(e,t){this._pairs=[],e&&Ds(e,this,t)}const dv=nd.prototype;dv.append=function(t,n){this._pairs.push([t,n])};dv.toString=function(t){const n=t?function(r){return t.call(this,r,op)}:op;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function ck(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function fv(e,t,n){if(!t)return e;const r=n&&n.encode||ck,i=n&&n.serialize;let o;if(i?o=i(t,n):o=D.isURLSearchParams(t)?t.toString():new nd(t,n).toString(r),o){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class dk{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){D.forEach(this.handlers,function(r){r!==null&&t(r)})}}const ap=dk,pv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},fk=typeof URLSearchParams<"u"?URLSearchParams:nd,pk=typeof FormData<"u"?FormData:null,hk=typeof Blob<"u"?Blob:null,mk={isBrowser:!0,classes:{URLSearchParams:fk,FormData:pk,Blob:hk},protocols:["http","https","file","blob","url","data"]},hv=typeof window<"u"&&typeof document<"u",gk=(e=>hv&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),vk=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",xk=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:hv,hasStandardBrowserEnv:gk,hasStandardBrowserWebWorkerEnv:vk},Symbol.toStringTag,{value:"Module"})),on={...xk,...mk};function yk(e,t){return Ds(e,new on.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return on.isNode&&D.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function wk(e){return D.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function bk(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function mv(e){function t(n,r,i,o){let a=n[o++];const l=Number.isFinite(+a),s=o>=n.length;return a=!a&&D.isArray(i)?i.length:a,s?(D.hasOwnProp(i,a)?i[a]=[i[a],r]:i[a]=r,!l):((!i[a]||!D.isObject(i[a]))&&(i[a]=[]),t(n,r,i[a],o)&&D.isArray(i[a])&&(i[a]=bk(i[a])),!l)}if(D.isFormData(e)&&D.isFunction(e.entries)){const n={};return D.forEachEntry(e,(r,i)=>{t(wk(r),i,n,0)}),n}return null}function Sk(e,t,n){if(D.isString(e))try{return(t||JSON.parse)(e),D.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const rd={transitional:pv,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=D.isObject(t);if(o&&D.isHTMLForm(t)&&(t=new FormData(t)),D.isFormData(t))return i&&i?JSON.stringify(mv(t)):t;if(D.isArrayBuffer(t)||D.isBuffer(t)||D.isStream(t)||D.isFile(t)||D.isBlob(t))return t;if(D.isArrayBufferView(t))return t.buffer;if(D.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return yk(t,this.formSerializer).toString();if((l=D.isFileList(t))||r.indexOf("multipart/form-data")>-1){const s=this.env&&this.env.FormData;return Ds(l?{"files[]":t}:t,s&&new s,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),Sk(t)):t}],transformResponse:[function(t){const n=this.transitional||rd.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&D.isString(t)&&(r&&!this.responseType||i)){const a=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(l){if(a)throw l.name==="SyntaxError"?fe.from(l,fe.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:on.classes.FormData,Blob:on.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};D.forEach(["delete","get","head","post","put","patch"],e=>{rd.headers[e]={}});const id=rd,kk=D.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),jk=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(a){i=a.indexOf(":"),n=a.substring(0,i).trim().toLowerCase(),r=a.substring(i+1).trim(),!(!n||t[n]&&kk[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},sp=Symbol("internals");function wi(e){return e&&String(e).trim().toLowerCase()}function ha(e){return e===!1||e==null?e:D.isArray(e)?e.map(ha):String(e)}function Ck(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Ek=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function bl(e,t,n,r,i){if(D.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!D.isString(t)){if(D.isString(r))return t.indexOf(r)!==-1;if(D.isRegExp(r))return r.test(t)}}function _k(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Ok(e,t){const n=D.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,a){return this[r].call(this,t,i,o,a)},configurable:!0})})}class Fs{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(l,s,u){const h=wi(s);if(!h)throw new Error("header name must be a non-empty string");const p=D.findKey(i,h);(!p||i[p]===void 0||u===!0||u===void 0&&i[p]!==!1)&&(i[p||s]=ha(l))}const a=(l,s)=>D.forEach(l,(u,h)=>o(u,h,s));return D.isPlainObject(t)||t instanceof this.constructor?a(t,n):D.isString(t)&&(t=t.trim())&&!Ek(t)?a(jk(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=wi(t),t){const r=D.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return Ck(i);if(D.isFunction(n))return n.call(this,i,r);if(D.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=wi(t),t){const r=D.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||bl(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(a){if(a=wi(a),a){const l=D.findKey(r,a);l&&(!n||bl(r,r[l],l,n))&&(delete r[l],i=!0)}}return D.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||bl(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return D.forEach(this,(i,o)=>{const a=D.findKey(r,o);if(a){n[a]=ha(i),delete n[o];return}const l=t?_k(o):String(o).trim();l!==o&&delete n[o],n[l]=ha(i),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return D.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&D.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[sp]=this[sp]={accessors:{}}).accessors,i=this.prototype;function o(a){const l=wi(a);r[l]||(Ok(i,a),r[l]=!0)}return D.isArray(t)?t.forEach(o):o(t),this}}Fs.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);D.reduceDescriptors(Fs.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});D.freezeMethods(Fs);const wn=Fs;function Sl(e,t){const n=this||id,r=t||n,i=wn.from(r.headers);let o=r.data;return D.forEach(e,function(l){o=l.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function gv(e){return!!(e&&e.__CANCEL__)}function xo(e,t,n){fe.call(this,e??"canceled",fe.ERR_CANCELED,t,n),this.name="CanceledError"}D.inherits(xo,fe,{__CANCEL__:!0});function Tk(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new fe("Request failed with status code "+n.status,[fe.ERR_BAD_REQUEST,fe.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Pk=on.hasStandardBrowserEnv?{write(e,t,n,r,i,o){const a=[e+"="+encodeURIComponent(t)];D.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),D.isString(r)&&a.push("path="+r),D.isString(i)&&a.push("domain="+i),o===!0&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Mk(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Rk(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function vv(e,t){return e&&!Mk(t)?Rk(e,t):t}const Ik=on.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let a=o;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(a){const l=D.isString(a)?i(a):a;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function Lk(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Ak(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,a;return t=t!==void 0?t:1e3,function(s){const u=Date.now(),h=r[o];a||(a=u),n[i]=s,r[i]=u;let p=o,v=0;for(;p!==i;)v+=n[p++],p=p%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-a<t)return;const x=h&&u-h;return x?Math.round(v*1e3/x):void 0}}function lp(e,t){let n=0;const r=Ak(50,250);return i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,l=o-n,s=r(l),u=o<=a;n=o;const h={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:s||void 0,estimated:s&&a&&u?(a-o)/s:void 0,event:i};h[t?"download":"upload"]=!0,e(h)}}const Dk=typeof XMLHttpRequest<"u",Fk=Dk&&function(e){return new Promise(function(n,r){let i=e.data;const o=wn.from(e.headers).normalize();let{responseType:a,withXSRFToken:l}=e,s;function u(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}let h;if(D.isFormData(i)){if(on.hasStandardBrowserEnv||on.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((h=o.getContentType())!==!1){const[y,...b]=h?h.split(";").map(d=>d.trim()).filter(Boolean):[];o.setContentType([y||"multipart/form-data",...b].join("; "))}}let p=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",b=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(y+":"+b))}const v=vv(e.baseURL,e.url);p.open(e.method.toUpperCase(),fv(v,e.params,e.paramsSerializer),!0),p.timeout=e.timeout;function x(){if(!p)return;const y=wn.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),d={data:!a||a==="text"||a==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:y,config:e,request:p};Tk(function(g){n(g),u()},function(g){r(g),u()},d),p=null}if("onloadend"in p?p.onloadend=x:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.indexOf("file:")===0)||setTimeout(x)},p.onabort=function(){p&&(r(new fe("Request aborted",fe.ECONNABORTED,e,p)),p=null)},p.onerror=function(){r(new fe("Network Error",fe.ERR_NETWORK,e,p)),p=null},p.ontimeout=function(){let b=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const d=e.transitional||pv;e.timeoutErrorMessage&&(b=e.timeoutErrorMessage),r(new fe(b,d.clarifyTimeoutError?fe.ETIMEDOUT:fe.ECONNABORTED,e,p)),p=null},on.hasStandardBrowserEnv&&(l&&D.isFunction(l)&&(l=l(e)),l||l!==!1&&Ik(v))){const y=e.xsrfHeaderName&&e.xsrfCookieName&&Pk.read(e.xsrfCookieName);y&&o.set(e.xsrfHeaderName,y)}i===void 0&&o.setContentType(null),"setRequestHeader"in p&&D.forEach(o.toJSON(),function(b,d){p.setRequestHeader(d,b)}),D.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),a&&a!=="json"&&(p.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&p.addEventListener("progress",lp(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&p.upload&&p.upload.addEventListener("progress",lp(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=y=>{p&&(r(!y||y.type?new xo(null,e,p):y),p.abort(),p=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const m=Lk(v);if(m&&on.protocols.indexOf(m)===-1){r(new fe("Unsupported protocol "+m+":",fe.ERR_BAD_REQUEST,e));return}p.send(i||null)})},Vu={http:sk,xhr:Fk};D.forEach(Vu,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const up=e=>`- ${e}`,zk=e=>D.isFunction(e)||e===null||e===!1,xv={getAdapter:e=>{e=D.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let o=0;o<t;o++){n=e[o];let a;if(r=n,!zk(n)&&(r=Vu[(a=String(n)).toLowerCase()],r===void 0))throw new fe(`Unknown adapter '${a}'`);if(r)break;i[a||"#"+o]=r}if(!r){const o=Object.entries(i).map(([l,s])=>`adapter ${l} `+(s===!1?"is not supported by the environment":"is not available in the build"));let a=t?o.length>1?`since :
`+o.map(up).join(`
`):" "+up(o[0]):"as no adapter specified";throw new fe("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r},adapters:Vu};function kl(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new xo(null,e)}function cp(e){return kl(e),e.headers=wn.from(e.headers),e.data=Sl.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),xv.getAdapter(e.adapter||id.adapter)(e).then(function(r){return kl(e),r.data=Sl.call(e,e.transformResponse,r),r.headers=wn.from(r.headers),r},function(r){return gv(r)||(kl(e),r&&r.response&&(r.response.data=Sl.call(e,e.transformResponse,r.response),r.response.headers=wn.from(r.response.headers))),Promise.reject(r)})}const dp=e=>e instanceof wn?e.toJSON():e;function ti(e,t){t=t||{};const n={};function r(u,h,p){return D.isPlainObject(u)&&D.isPlainObject(h)?D.merge.call({caseless:p},u,h):D.isPlainObject(h)?D.merge({},h):D.isArray(h)?h.slice():h}function i(u,h,p){if(D.isUndefined(h)){if(!D.isUndefined(u))return r(void 0,u,p)}else return r(u,h,p)}function o(u,h){if(!D.isUndefined(h))return r(void 0,h)}function a(u,h){if(D.isUndefined(h)){if(!D.isUndefined(u))return r(void 0,u)}else return r(void 0,h)}function l(u,h,p){if(p in t)return r(u,h);if(p in e)return r(void 0,u)}const s={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l,headers:(u,h)=>i(dp(u),dp(h),!0)};return D.forEach(Object.keys(Object.assign({},e,t)),function(h){const p=s[h]||i,v=p(e[h],t[h],h);D.isUndefined(v)&&p!==l||(n[h]=v)}),n}const yv="1.6.2",od={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{od[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const fp={};od.transitional=function(t,n,r){function i(o,a){return"[Axios v"+yv+"] Transitional option '"+o+"'"+a+(r?". "+r:"")}return(o,a,l)=>{if(t===!1)throw new fe(i(a," has been removed"+(n?" in "+n:"")),fe.ERR_DEPRECATED);return n&&!fp[a]&&(fp[a]=!0,console.warn(i(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,a,l):!0}};function Nk(e,t,n){if(typeof e!="object")throw new fe("options must be an object",fe.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],a=t[o];if(a){const l=e[o],s=l===void 0||a(l,o,e);if(s!==!0)throw new fe("option "+o+" must be "+s,fe.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new fe("Unknown option "+o,fe.ERR_BAD_OPTION)}}const $u={assertOptions:Nk,validators:od},Dn=$u.validators;class Wa{constructor(t){this.defaults=t,this.interceptors={request:new ap,response:new ap}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=ti(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&$u.assertOptions(r,{silentJSONParsing:Dn.transitional(Dn.boolean),forcedJSONParsing:Dn.transitional(Dn.boolean),clarifyTimeoutError:Dn.transitional(Dn.boolean)},!1),i!=null&&(D.isFunction(i)?n.paramsSerializer={serialize:i}:$u.assertOptions(i,{encode:Dn.function,serialize:Dn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=o&&D.merge(o.common,o[n.method]);o&&D.forEach(["delete","get","head","post","put","patch","common"],m=>{delete o[m]}),n.headers=wn.concat(a,o);const l=[];let s=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(s=s&&y.synchronous,l.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let h,p=0,v;if(!s){const m=[cp.bind(this),void 0];for(m.unshift.apply(m,l),m.push.apply(m,u),v=m.length,h=Promise.resolve(n);p<v;)h=h.then(m[p++],m[p++]);return h}v=l.length;let x=n;for(p=0;p<v;){const m=l[p++],y=l[p++];try{x=m(x)}catch(b){y.call(this,b);break}}try{h=cp.call(this,x)}catch(m){return Promise.reject(m)}for(p=0,v=u.length;p<v;)h=h.then(u[p++],u[p++]);return h}getUri(t){t=ti(this.defaults,t);const n=vv(t.baseURL,t.url);return fv(n,t.params,t.paramsSerializer)}}D.forEach(["delete","get","head","options"],function(t){Wa.prototype[t]=function(n,r){return this.request(ti(r||{},{method:t,url:n,data:(r||{}).data}))}});D.forEach(["post","put","patch"],function(t){function n(r){return function(o,a,l){return this.request(ti(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:a}))}}Wa.prototype[t]=n(),Wa.prototype[t+"Form"]=n(!0)});const ma=Wa;class ad{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const a=new Promise(l=>{r.subscribe(l),o=l}).then(i);return a.cancel=function(){r.unsubscribe(o)},a},t(function(o,a,l){r.reason||(r.reason=new xo(o,a,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ad(function(i){t=i}),cancel:t}}}const Vk=ad;function $k(e){return function(n){return e.apply(null,n)}}function Uk(e){return D.isObject(e)&&e.isAxiosError===!0}const Uu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Uu).forEach(([e,t])=>{Uu[t]=e});const Bk=Uu;function wv(e){const t=new ma(e),n=ev(ma.prototype.request,t);return D.extend(n,ma.prototype,t,{allOwnKeys:!0}),D.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return wv(ti(e,i))},n}const $e=wv(id);$e.Axios=ma;$e.CanceledError=xo;$e.CancelToken=Vk;$e.isCancel=gv;$e.VERSION=yv;$e.toFormData=Ds;$e.AxiosError=fe;$e.Cancel=$e.CanceledError;$e.all=function(t){return Promise.all(t)};$e.spread=$k;$e.isAxiosError=Uk;$e.mergeConfig=ti;$e.AxiosHeaders=wn;$e.formToJSON=e=>mv(D.isHTMLForm(e)?new FormData(e):e);$e.getAdapter=xv.getAdapter;$e.HttpStatusCode=Bk;$e.default=$e;const Wk=$e;function vr(e){"@babel/helpers - typeof";return vr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vr(e)}function Hk(e,t){if(vr(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(vr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function bv(e){var t=Hk(e,"string");return vr(t)=="symbol"?t:String(t)}function Oi(e,t,n){return t=bv(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pp(Object(n),!0).forEach(function(r){Oi(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Yk(e){if(Array.isArray(e))return e}function Qk(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,l=[],s=!0,u=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(h){u=!0,i=h}finally{try{if(!s&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return l}}function Bu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Sv(e,t){if(e){if(typeof e=="string")return Bu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Bu(e,t)}}function Kk(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bn(e,t){return Yk(e)||Qk(e,t)||Sv(e,t)||Kk()}function Gk(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function _n(e,t){if(e==null)return{};var n=Gk(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var Xk=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function qk(e){var t=e.defaultInputValue,n=t===void 0?"":t,r=e.defaultMenuIsOpen,i=r===void 0?!1:r,o=e.defaultValue,a=o===void 0?null:o,l=e.inputValue,s=e.menuIsOpen,u=e.onChange,h=e.onInputChange,p=e.onMenuClose,v=e.onMenuOpen,x=e.value,m=_n(e,Xk),y=A.useState(l!==void 0?l:n),b=bn(y,2),d=b[0],f=b[1],g=A.useState(s!==void 0?s:i),w=bn(g,2),S=w[0],T=w[1],_=A.useState(x!==void 0?x:a),j=bn(_,2),C=j[0],P=j[1],M=A.useCallback(function(N,K){typeof u=="function"&&u(N,K),P(N)},[u]),I=A.useCallback(function(N,K){var G;typeof h=="function"&&(G=h(N,K)),f(G!==void 0?G:N)},[h]),L=A.useCallback(function(){typeof v=="function"&&v(),T(!0)},[v]),U=A.useCallback(function(){typeof p=="function"&&p(),T(!1)},[p]),H=l!==void 0?l:d,Z=s!==void 0?s:S,ge=x!==void 0?x:C;return q(q({},m),{},{inputValue:H,menuIsOpen:Z,onChange:M,onInputChange:I,onMenuClose:U,onMenuOpen:L,value:ge})}function Jk(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function hp(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,bv(r.key),r)}}function Zk(e,t,n){return t&&hp(e.prototype,t),n&&hp(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Wu(e,t){return Wu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Wu(e,t)}function e4(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Wu(e,t)}function Ha(e){return Ha=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Ha(e)}function t4(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function n4(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function r4(e,t){if(t&&(vr(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return n4(e)}function i4(e){var t=t4();return function(){var r=Ha(e),i;if(t){var o=Ha(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return r4(this,i)}}function o4(e){if(Array.isArray(e))return Bu(e)}function a4(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function s4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sd(e){return o4(e)||a4(e)||Sv(e)||s4()}function l4(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const u4=Math.min,c4=Math.max,Ya=Math.round,Yo=Math.floor,Qa=e=>({x:e,y:e});function d4(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function kv(e){return Cv(e)?(e.nodeName||"").toLowerCase():"#document"}function Gt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function jv(e){var t;return(t=(Cv(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Cv(e){return e instanceof Node||e instanceof Gt(e).Node}function Hu(e){return e instanceof Element||e instanceof Gt(e).Element}function ld(e){return e instanceof HTMLElement||e instanceof Gt(e).HTMLElement}function mp(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Gt(e).ShadowRoot}function Ev(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=ud(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(i)}function f4(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function p4(e){return["html","body","#document"].includes(kv(e))}function ud(e){return Gt(e).getComputedStyle(e)}function h4(e){if(kv(e)==="html")return e;const t=e.assignedSlot||e.parentNode||mp(e)&&e.host||jv(e);return mp(t)?t.host:t}function _v(e){const t=h4(e);return p4(t)?e.ownerDocument?e.ownerDocument.body:e.body:ld(t)&&Ev(t)?t:_v(t)}function Ka(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=_v(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),a=Gt(i);return o?t.concat(a,a.visualViewport||[],Ev(i)?i:[],a.frameElement&&n?Ka(a.frameElement):[]):t.concat(i,Ka(i,[],n))}function m4(e){const t=ud(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=ld(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:r,l=Ya(n)!==o||Ya(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function cd(e){return Hu(e)?e:e.contextElement}function jl(e){const t=cd(e);if(!ld(t))return Qa(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=m4(t);let a=(o?Ya(n.width):n.width)/r,l=(o?Ya(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const g4=Qa(0);function v4(e){const t=Gt(e);return!f4()||!t.visualViewport?g4:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function x4(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Gt(e)?!1:t}function gp(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=cd(e);let a=Qa(1);t&&(r?Hu(r)&&(a=jl(r)):a=jl(e));const l=x4(o,n,r)?v4(o):Qa(0);let s=(i.left+l.x)/a.x,u=(i.top+l.y)/a.y,h=i.width/a.x,p=i.height/a.y;if(o){const v=Gt(o),x=r&&Hu(r)?Gt(r):r;let m=v.frameElement;for(;m&&r&&x!==v;){const y=jl(m),b=m.getBoundingClientRect(),d=ud(m),f=b.left+(m.clientLeft+parseFloat(d.paddingLeft))*y.x,g=b.top+(m.clientTop+parseFloat(d.paddingTop))*y.y;s*=y.x,u*=y.y,h*=y.x,p*=y.y,s+=f,u+=g,m=Gt(m).frameElement}}return d4({width:h,height:p,x:s,y:u})}function y4(e,t){let n=null,r;const i=jv(e);function o(){clearTimeout(r),n&&n.disconnect(),n=null}function a(l,s){l===void 0&&(l=!1),s===void 0&&(s=1),o();const{left:u,top:h,width:p,height:v}=e.getBoundingClientRect();if(l||t(),!p||!v)return;const x=Yo(h),m=Yo(i.clientWidth-(u+p)),y=Yo(i.clientHeight-(h+v)),b=Yo(u),f={rootMargin:-x+"px "+-m+"px "+-y+"px "+-b+"px",threshold:c4(0,u4(1,s))||1};let g=!0;function w(S){const T=S[0].intersectionRatio;if(T!==s){if(!g)return a();T?a(!1,T):r=setTimeout(()=>{a(!1,1e-7)},100)}g=!1}try{n=new IntersectionObserver(w,{...f,root:i.ownerDocument})}catch{n=new IntersectionObserver(w,f)}n.observe(e)}return a(!0),o}function w4(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:s=!1}=r,u=cd(e),h=i||o?[...u?Ka(u):[],...Ka(t)]:[];h.forEach(d=>{i&&d.addEventListener("scroll",n,{passive:!0}),o&&d.addEventListener("resize",n)});const p=u&&l?y4(u,n):null;let v=-1,x=null;a&&(x=new ResizeObserver(d=>{let[f]=d;f&&f.target===u&&x&&(x.unobserve(t),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{x&&x.observe(t)})),n()}),u&&!s&&x.observe(u),x.observe(t));let m,y=s?gp(e):null;s&&b();function b(){const d=gp(e);y&&(d.x!==y.x||d.y!==y.y||d.width!==y.width||d.height!==y.height)&&n(),y=d,m=requestAnimationFrame(b)}return n(),()=>{h.forEach(d=>{i&&d.removeEventListener("scroll",n),o&&d.removeEventListener("resize",n)}),p&&p(),x&&x.disconnect(),x=null,s&&cancelAnimationFrame(m)}}var Yu=A.useLayoutEffect,b4=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Ga=function(){};function S4(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function k4(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=[].concat(r);if(t&&e)for(var a in t)t.hasOwnProperty(a)&&t[a]&&o.push("".concat(S4(e,a)));return o.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var vp=function(t){return R4(t)?t.filter(Boolean):vr(t)==="object"&&t!==null?[t]:[]},Ov=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var n=_n(t,b4);return q({},n)},Fe=function(t,n,r){var i=t.cx,o=t.getStyles,a=t.getClassNames,l=t.className;return{css:o(n,t),className:i(r??{},a(n,t),l)}};function zs(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function j4(e){return zs(e)?window.innerHeight:e.clientHeight}function Tv(e){return zs(e)?window.pageYOffset:e.scrollTop}function Xa(e,t){if(zs(e)){window.scrollTo(0,t);return}e.scrollTop=t}function C4(e){var t=getComputedStyle(e),n=t.position==="absolute",r=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var i=e;i=i.parentElement;)if(t=getComputedStyle(i),!(n&&t.position==="static")&&r.test(t.overflow+t.overflowY+t.overflowX))return i;return document.documentElement}function E4(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t}function Qo(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Ga,i=Tv(e),o=t-i,a=10,l=0;function s(){l+=a;var u=E4(l,i,o,n);Xa(e,u),l<n?window.requestAnimationFrame(s):r(e)}s()}function xp(e,t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=t.offsetHeight/3;r.bottom+i>n.bottom?Xa(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+i,e.scrollHeight)):r.top-i<n.top&&Xa(e,Math.max(t.offsetTop-i,0))}function _4(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function yp(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function O4(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var Pv=!1,T4={get passive(){return Pv=!0}},Ko=typeof window<"u"?window:{};Ko.addEventListener&&Ko.removeEventListener&&(Ko.addEventListener("p",Ga,T4),Ko.removeEventListener("p",Ga,!1));var P4=Pv;function M4(e){return e!=null}function R4(e){return Array.isArray(e)}function Go(e,t,n){return e?t:n}var I4=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=Object.entries(t).filter(function(a){var l=bn(a,1),s=l[0];return!r.includes(s)});return o.reduce(function(a,l){var s=bn(l,2),u=s[0],h=s[1];return a[u]=h,a},{})},L4=["children","innerProps"],A4=["children","innerProps"];function D4(e){var t=e.maxHeight,n=e.menuEl,r=e.minHeight,i=e.placement,o=e.shouldScroll,a=e.isFixedPosition,l=e.controlHeight,s=C4(n),u={placement:"bottom",maxHeight:t};if(!n||!n.offsetParent)return u;var h=s.getBoundingClientRect(),p=h.height,v=n.getBoundingClientRect(),x=v.bottom,m=v.height,y=v.top,b=n.offsetParent.getBoundingClientRect(),d=b.top,f=a?window.innerHeight:j4(s),g=Tv(s),w=parseInt(getComputedStyle(n).marginBottom,10),S=parseInt(getComputedStyle(n).marginTop,10),T=d-S,_=f-y,j=T+g,C=p-g-y,P=x-f+g+w,M=g+y-S,I=160;switch(i){case"auto":case"bottom":if(_>=m)return{placement:"bottom",maxHeight:t};if(C>=m&&!a)return o&&Qo(s,P,I),{placement:"bottom",maxHeight:t};if(!a&&C>=r||a&&_>=r){o&&Qo(s,P,I);var L=a?_-w:C-w;return{placement:"bottom",maxHeight:L}}if(i==="auto"||a){var U=t,H=a?T:j;return H>=r&&(U=Math.min(H-w-l,t)),{placement:"top",maxHeight:U}}if(i==="bottom")return o&&Xa(s,P),{placement:"bottom",maxHeight:t};break;case"top":if(T>=m)return{placement:"top",maxHeight:t};if(j>=m&&!a)return o&&Qo(s,M,I),{placement:"top",maxHeight:t};if(!a&&j>=r||a&&T>=r){var Z=t;return(!a&&j>=r||a&&T>=r)&&(Z=a?T-S:j-S),o&&Qo(s,M,I),{placement:"top",maxHeight:Z}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return u}function F4(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var Mv=function(t){return t==="auto"?"bottom":t},z4=function(t,n){var r,i=t.placement,o=t.theme,a=o.borderRadius,l=o.spacing,s=o.colors;return q((r={label:"menu"},Oi(r,F4(i),"100%"),Oi(r,"position","absolute"),Oi(r,"width","100%"),Oi(r,"zIndex",1),r),n?{}:{backgroundColor:s.neutral0,borderRadius:a,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},Rv=A.createContext(null),N4=function(t){var n=t.children,r=t.minMenuHeight,i=t.maxMenuHeight,o=t.menuPlacement,a=t.menuPosition,l=t.menuShouldScrollIntoView,s=t.theme,u=A.useContext(Rv)||{},h=u.setPortalPlacement,p=A.useRef(null),v=A.useState(i),x=bn(v,2),m=x[0],y=x[1],b=A.useState(null),d=bn(b,2),f=d[0],g=d[1],w=s.spacing.controlHeight;return Yu(function(){var S=p.current;if(S){var T=a==="fixed",_=l&&!T,j=D4({maxHeight:i,menuEl:S,minHeight:r,placement:o,shouldScroll:_,isFixedPosition:T,controlHeight:w});y(j.maxHeight),g(j.placement),h==null||h(j.placement)}},[i,o,a,l,r,h,w]),n({ref:p,placerProps:q(q({},t),{},{placement:f||Mv(o),maxHeight:m})})},V4=function(t){var n=t.children,r=t.innerRef,i=t.innerProps;return X("div",J({},Fe(t,"menu",{menu:!0}),{ref:r},i),n)},$4=V4,U4=function(t,n){var r=t.maxHeight,i=t.theme.spacing.baseUnit;return q({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},B4=function(t){var n=t.children,r=t.innerProps,i=t.innerRef,o=t.isMulti;return X("div",J({},Fe(t,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:i},r),n)},Iv=function(t,n){var r=t.theme,i=r.spacing.baseUnit,o=r.colors;return q({textAlign:"center"},n?{}:{color:o.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},W4=Iv,H4=Iv,Y4=function(t){var n=t.children,r=n===void 0?"No options":n,i=t.innerProps,o=_n(t,L4);return X("div",J({},Fe(q(q({},o),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},Q4=function(t){var n=t.children,r=n===void 0?"Loading...":n,i=t.innerProps,o=_n(t,A4);return X("div",J({},Fe(q(q({},o),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},K4=function(t){var n=t.rect,r=t.offset,i=t.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},G4=function(t){var n=t.appendTo,r=t.children,i=t.controlElement,o=t.innerProps,a=t.menuPlacement,l=t.menuPosition,s=A.useRef(null),u=A.useRef(null),h=A.useState(Mv(a)),p=bn(h,2),v=p[0],x=p[1],m=A.useMemo(function(){return{setPortalPlacement:x}},[]),y=A.useState(null),b=bn(y,2),d=b[0],f=b[1],g=A.useCallback(function(){if(i){var _=_4(i),j=l==="fixed"?0:window.pageYOffset,C=_[v]+j;(C!==(d==null?void 0:d.offset)||_.left!==(d==null?void 0:d.rect.left)||_.width!==(d==null?void 0:d.rect.width))&&f({offset:C,rect:_})}},[i,l,v,d==null?void 0:d.offset,d==null?void 0:d.rect.left,d==null?void 0:d.rect.width]);Yu(function(){g()},[g]);var w=A.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),i&&s.current&&(u.current=w4(i,s.current,g,{elementResize:"ResizeObserver"in window}))},[i,g]);Yu(function(){w()},[w]);var S=A.useCallback(function(_){s.current=_,w()},[w]);if(!n&&l!=="fixed"||!d)return null;var T=X("div",J({ref:S},Fe(q(q({},t),{},{offset:d.offset,position:l,rect:d.rect}),"menuPortal",{"menu-portal":!0}),o),r);return X(Rv.Provider,{value:m},n?mo.createPortal(T,n):T)},X4=function(t){var n=t.isDisabled,r=t.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},q4=function(t){var n=t.children,r=t.innerProps,i=t.isDisabled,o=t.isRtl;return X("div",J({},Fe(t,"container",{"--is-disabled":i,"--is-rtl":o}),r),n)},J4=function(t,n){var r=t.theme.spacing,i=t.isMulti,o=t.hasValue,a=t.selectProps.controlShouldRenderValue;return q({alignItems:"center",display:i&&o&&a?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},Z4=function(t){var n=t.children,r=t.innerProps,i=t.isMulti,o=t.hasValue;return X("div",J({},Fe(t,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":o}),r),n)},ej=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},tj=function(t){var n=t.children,r=t.innerProps;return X("div",J({},Fe(t,"indicatorsContainer",{indicators:!0}),r),n)},wp,nj=["size"],rj=["innerProps","isRtl","size"],ij={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Lv=function(t){var n=t.size,r=_n(t,nj);return X("svg",J({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:ij},r))},dd=function(t){return X(Lv,J({size:20},t),X("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Av=function(t){return X(Lv,J({size:20},t),X("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Dv=function(t,n){var r=t.isFocused,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return q({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?a.neutral60:a.neutral20,padding:o*2,":hover":{color:r?a.neutral80:a.neutral40}})},oj=Dv,aj=function(t){var n=t.children,r=t.innerProps;return X("div",J({},Fe(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||X(Av,null))},sj=Dv,lj=function(t){var n=t.children,r=t.innerProps;return X("div",J({},Fe(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||X(dd,null))},uj=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing.baseUnit,a=i.colors;return q({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?a.neutral10:a.neutral20,marginBottom:o*2,marginTop:o*2})},cj=function(t){var n=t.innerProps;return X("span",J({},n,Fe(t,"indicatorSeparator",{"indicator-separator":!0})))},dj=V1(wp||(wp=l4([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),fj=function(t,n){var r=t.isFocused,i=t.size,o=t.theme,a=o.colors,l=o.spacing.baseUnit;return q({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?a.neutral60:a.neutral20,padding:l*2})},Cl=function(t){var n=t.delay,r=t.offset;return X("span",{css:Zc({animation:"".concat(dj," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},pj=function(t){var n=t.innerProps,r=t.isRtl,i=t.size,o=i===void 0?4:i,a=_n(t,rj);return X("div",J({},Fe(q(q({},a),{},{innerProps:n,isRtl:r,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),X(Cl,{delay:0,offset:r}),X(Cl,{delay:160,offset:!0}),X(Cl,{delay:320,offset:!r}))},hj=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.theme,a=o.colors,l=o.borderRadius,s=o.spacing;return q({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:s.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?a.neutral5:a.neutral0,borderColor:r?a.neutral10:i?a.primary:a.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(a.primary):void 0,"&:hover":{borderColor:i?a.primary:a.neutral30}})},mj=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.innerRef,a=t.innerProps,l=t.menuIsOpen;return X("div",J({ref:o},Fe(t,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":l}),a,{"aria-disabled":r||void 0}),n)},gj=mj,vj=["data"],xj=function(t,n){var r=t.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},yj=function(t){var n=t.children,r=t.cx,i=t.getStyles,o=t.getClassNames,a=t.Heading,l=t.headingProps,s=t.innerProps,u=t.label,h=t.theme,p=t.selectProps;return X("div",J({},Fe(t,"group",{group:!0}),s),X(a,J({},l,{selectProps:p,theme:h,getStyles:i,getClassNames:o,cx:r}),u),X("div",null,n))},wj=function(t,n){var r=t.theme,i=r.colors,o=r.spacing;return q({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},bj=function(t){var n=Ov(t);n.data;var r=_n(n,vj);return X("div",J({},Fe(t,"groupHeading",{"group-heading":!0}),r))},Sj=yj,kj=["innerRef","isDisabled","isHidden","inputClassName"],jj=function(t,n){var r=t.isDisabled,i=t.value,o=t.theme,a=o.spacing,l=o.colors;return q(q({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},Cj),n?{}:{margin:a.baseUnit/2,paddingBottom:a.baseUnit/2,paddingTop:a.baseUnit/2,color:l.neutral80})},Fv={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},Cj={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":q({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Fv)},Ej=function(t){return q({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},Fv)},_j=function(t){var n=t.cx,r=t.value,i=Ov(t),o=i.innerRef,a=i.isDisabled,l=i.isHidden,s=i.inputClassName,u=_n(i,kj);return X("div",J({},Fe(t,"input",{"input-container":!0}),{"data-value":r||""}),X("input",J({className:n({input:!0},s),ref:o,style:Ej(l),disabled:a},u)))},Oj=_j,Tj=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors;return q({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:a.neutral10,borderRadius:o/2,margin:i.baseUnit/2})},Pj=function(t,n){var r=t.theme,i=r.borderRadius,o=r.colors,a=t.cropWithEllipsis;return q({overflow:"hidden",textOverflow:a||a===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},Mj=function(t,n){var r=t.theme,i=r.spacing,o=r.borderRadius,a=r.colors,l=t.isFocused;return q({alignItems:"center",display:"flex"},n?{}:{borderRadius:o/2,backgroundColor:l?a.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:a.dangerLight,color:a.danger}})},zv=function(t){var n=t.children,r=t.innerProps;return X("div",r,n)},Rj=zv,Ij=zv;function Lj(e){var t=e.children,n=e.innerProps;return X("div",J({role:"button"},n),t||X(dd,{size:14}))}var Aj=function(t){var n=t.children,r=t.components,i=t.data,o=t.innerProps,a=t.isDisabled,l=t.removeProps,s=t.selectProps,u=r.Container,h=r.Label,p=r.Remove;return X(u,{data:i,innerProps:q(q({},Fe(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":a})),o),selectProps:s},X(h,{data:i,innerProps:q({},Fe(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:s},n),X(p,{data:i,innerProps:q(q({},Fe(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},l),selectProps:s}))},Dj=Aj,Fj=function(t,n){var r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.theme,l=a.spacing,s=a.colors;return q({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:o?s.primary:i?s.primary25:"transparent",color:r?s.neutral20:o?s.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?s.primary:s.primary50}})},zj=function(t){var n=t.children,r=t.isDisabled,i=t.isFocused,o=t.isSelected,a=t.innerRef,l=t.innerProps;return X("div",J({},Fe(t,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":o}),{ref:a,"aria-disabled":r},l),n)},Nj=zj,Vj=function(t,n){var r=t.theme,i=r.spacing,o=r.colors;return q({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:o.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},$j=function(t){var n=t.children,r=t.innerProps;return X("div",J({},Fe(t,"placeholder",{placeholder:!0}),r),n)},Uj=$j,Bj=function(t,n){var r=t.isDisabled,i=t.theme,o=i.spacing,a=i.colors;return q({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?a.neutral40:a.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},Wj=function(t){var n=t.children,r=t.isDisabled,i=t.innerProps;return X("div",J({},Fe(t,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},Hj=Wj,Yj={ClearIndicator:lj,Control:gj,DropdownIndicator:aj,DownChevron:Av,CrossIcon:dd,Group:Sj,GroupHeading:bj,IndicatorsContainer:tj,IndicatorSeparator:cj,Input:Oj,LoadingIndicator:pj,Menu:$4,MenuList:B4,MenuPortal:G4,LoadingMessage:Q4,NoOptionsMessage:Y4,MultiValue:Dj,MultiValueContainer:Rj,MultiValueLabel:Ij,MultiValueRemove:Lj,Option:Nj,Placeholder:Uj,SelectContainer:q4,SingleValue:Hj,ValueContainer:Z4},Qj=function(t){return q(q({},Yj),t.components)},bp=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function Kj(e,t){return!!(e===t||bp(e)&&bp(t))}function Gj(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!Kj(e[n],t[n]))return!1;return!0}function Xj(e,t){t===void 0&&(t=Gj);var n=null;function r(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(n&&n.lastThis===this&&t(i,n.lastArgs))return n.lastResult;var a=e.apply(this,i);return n={lastResult:a,lastArgs:i,lastThis:this},a}return r.clear=function(){n=null},r}var qj={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},Jj=function(t){return X("span",J({css:qj},t))},Sp=Jj,Zj={guidance:function(t){var n=t.isSearchable,r=t.isMulti,i=t.tabSelectsValue,o=t.context,a=t.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return a?"".concat(t["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var n=t.action,r=t.label,i=r===void 0?"":r,o=t.labels,a=t.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return a?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(t){var n=t.context,r=t.focused,i=t.options,o=t.label,a=o===void 0?"":o,l=t.selectValue,s=t.isDisabled,u=t.isSelected,h=t.isAppleDevice,p=function(y,b){return y&&y.length?"".concat(y.indexOf(b)+1," of ").concat(y.length):""};if(n==="value"&&l)return"value ".concat(a," focused, ").concat(p(l,r),".");if(n==="menu"&&h){var v=s?" disabled":"",x="".concat(u?" selected":"").concat(v);return"".concat(a).concat(x,", ").concat(p(i,r),".")}return""},onFilter:function(t){var n=t.inputValue,r=t.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},eC=function(t){var n=t.ariaSelection,r=t.focusedOption,i=t.focusedValue,o=t.focusableOptions,a=t.isFocused,l=t.selectValue,s=t.selectProps,u=t.id,h=t.isAppleDevice,p=s.ariaLiveMessages,v=s.getOptionLabel,x=s.inputValue,m=s.isMulti,y=s.isOptionDisabled,b=s.isSearchable,d=s.menuIsOpen,f=s.options,g=s.screenReaderStatus,w=s.tabSelectsValue,S=s.isLoading,T=s["aria-label"],_=s["aria-live"],j=A.useMemo(function(){return q(q({},Zj),p||{})},[p]),C=A.useMemo(function(){var H="";if(n&&j.onChange){var Z=n.option,ge=n.options,N=n.removedValue,K=n.removedValues,G=n.value,de=function(Xe){return Array.isArray(Xe)?null:Xe},ne=N||Z||de(G),_e=ne?v(ne):"",Se=ge||K||void 0,He=Se?Se.map(v):[],pe=q({isDisabled:ne&&y(ne,l),label:_e,labels:He},n);H=j.onChange(pe)}return H},[n,j,y,l,v]),P=A.useMemo(function(){var H="",Z=r||i,ge=!!(r&&l&&l.includes(r));if(Z&&j.onFocus){var N={focused:Z,label:v(Z),isDisabled:y(Z,l),isSelected:ge,options:o,context:Z===r?"menu":"value",selectValue:l,isAppleDevice:h};H=j.onFocus(N)}return H},[r,i,v,y,j,o,l,h]),M=A.useMemo(function(){var H="";if(d&&f.length&&!S&&j.onFilter){var Z=g({count:o.length});H=j.onFilter({inputValue:x,resultsMessage:Z})}return H},[o,x,d,j,f,g,S]),I=(n==null?void 0:n.action)==="initial-input-focus",L=A.useMemo(function(){var H="";if(j.guidance){var Z=i?"value":d?"menu":"input";H=j.guidance({"aria-label":T,context:Z,isDisabled:r&&y(r,l),isMulti:m,isSearchable:b,tabSelectsValue:w,isInitialFocus:I})}return H},[T,r,i,m,y,b,d,j,l,w,I]),U=X(A.Fragment,null,X("span",{id:"aria-selection"},C),X("span",{id:"aria-focused"},P),X("span",{id:"aria-results"},M),X("span",{id:"aria-guidance"},L));return X(A.Fragment,null,X(Sp,{id:u},I&&U),X(Sp,{"aria-live":_,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},a&&!I&&U))},tC=eC,Qu=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],nC=new RegExp("["+Qu.map(function(e){return e.letters}).join("")+"]","g"),Nv={};for(var El=0;El<Qu.length;El++)for(var _l=Qu[El],Ol=0;Ol<_l.letters.length;Ol++)Nv[_l.letters[Ol]]=_l.base;var Vv=function(t){return t.replace(nC,function(n){return Nv[n]})},rC=Xj(Vv),kp=function(t){return t.replace(/^\s+|\s+$/g,"")},iC=function(t){return"".concat(t.label," ").concat(t.value)},oC=function(t){return function(n,r){if(n.data.__isNew__)return!0;var i=q({ignoreCase:!0,ignoreAccents:!0,stringify:iC,trim:!0,matchFrom:"any"},t),o=i.ignoreCase,a=i.ignoreAccents,l=i.stringify,s=i.trim,u=i.matchFrom,h=s?kp(r):r,p=s?kp(l(n)):l(n);return o&&(h=h.toLowerCase(),p=p.toLowerCase()),a&&(h=rC(h),p=Vv(p)),u==="start"?p.substr(0,h.length)===h:p.indexOf(h)>-1}},aC=["innerRef"];function sC(e){var t=e.innerRef,n=_n(e,aC),r=I4(n,"onExited","in","enter","exit","appear");return X("input",J({ref:t},r,{css:Zc({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var lC=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function uC(e){var t=e.isEnabled,n=e.onBottomArrive,r=e.onBottomLeave,i=e.onTopArrive,o=e.onTopLeave,a=A.useRef(!1),l=A.useRef(!1),s=A.useRef(0),u=A.useRef(null),h=A.useCallback(function(b,d){if(u.current!==null){var f=u.current,g=f.scrollTop,w=f.scrollHeight,S=f.clientHeight,T=u.current,_=d>0,j=w-S-g,C=!1;j>d&&a.current&&(r&&r(b),a.current=!1),_&&l.current&&(o&&o(b),l.current=!1),_&&d>j?(n&&!a.current&&n(b),T.scrollTop=w,C=!0,a.current=!0):!_&&-d>g&&(i&&!l.current&&i(b),T.scrollTop=0,C=!0,l.current=!0),C&&lC(b)}},[n,r,i,o]),p=A.useCallback(function(b){h(b,b.deltaY)},[h]),v=A.useCallback(function(b){s.current=b.changedTouches[0].clientY},[]),x=A.useCallback(function(b){var d=s.current-b.changedTouches[0].clientY;h(b,d)},[h]),m=A.useCallback(function(b){if(b){var d=P4?{passive:!1}:!1;b.addEventListener("wheel",p,d),b.addEventListener("touchstart",v,d),b.addEventListener("touchmove",x,d)}},[x,v,p]),y=A.useCallback(function(b){b&&(b.removeEventListener("wheel",p,!1),b.removeEventListener("touchstart",v,!1),b.removeEventListener("touchmove",x,!1))},[x,v,p]);return A.useEffect(function(){if(t){var b=u.current;return m(b),function(){y(b)}}},[t,m,y]),function(b){u.current=b}}var jp=["boxSizing","height","overflow","paddingRight","position"],Cp={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Ep(e){e.preventDefault()}function _p(e){e.stopPropagation()}function Op(){var e=this.scrollTop,t=this.scrollHeight,n=e+this.offsetHeight;e===0?this.scrollTop=1:n===t&&(this.scrollTop=e-1)}function Tp(){return"ontouchstart"in window||navigator.maxTouchPoints}var Pp=!!(typeof window<"u"&&window.document&&window.document.createElement),bi=0,jr={capture:!1,passive:!1};function cC(e){var t=e.isEnabled,n=e.accountForScrollbars,r=n===void 0?!0:n,i=A.useRef({}),o=A.useRef(null),a=A.useCallback(function(s){if(Pp){var u=document.body,h=u&&u.style;if(r&&jp.forEach(function(m){var y=h&&h[m];i.current[m]=y}),r&&bi<1){var p=parseInt(i.current.paddingRight,10)||0,v=document.body?document.body.clientWidth:0,x=window.innerWidth-v+p||0;Object.keys(Cp).forEach(function(m){var y=Cp[m];h&&(h[m]=y)}),h&&(h.paddingRight="".concat(x,"px"))}u&&Tp()&&(u.addEventListener("touchmove",Ep,jr),s&&(s.addEventListener("touchstart",Op,jr),s.addEventListener("touchmove",_p,jr))),bi+=1}},[r]),l=A.useCallback(function(s){if(Pp){var u=document.body,h=u&&u.style;bi=Math.max(bi-1,0),r&&bi<1&&jp.forEach(function(p){var v=i.current[p];h&&(h[p]=v)}),u&&Tp()&&(u.removeEventListener("touchmove",Ep,jr),s&&(s.removeEventListener("touchstart",Op,jr),s.removeEventListener("touchmove",_p,jr)))}},[r]);return A.useEffect(function(){if(t){var s=o.current;return a(s),function(){l(s)}}},[t,a,l]),function(s){o.current=s}}var dC=function(t){var n=t.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},fC={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function pC(e){var t=e.children,n=e.lockEnabled,r=e.captureEnabled,i=r===void 0?!0:r,o=e.onBottomArrive,a=e.onBottomLeave,l=e.onTopArrive,s=e.onTopLeave,u=uC({isEnabled:i,onBottomArrive:o,onBottomLeave:a,onTopArrive:l,onTopLeave:s}),h=cC({isEnabled:n}),p=function(x){u(x),h(x)};return X(A.Fragment,null,n&&X("div",{onClick:dC,css:fC}),t(p))}var hC={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},mC=function(t){var n=t.name,r=t.onFocus;return X("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:hC,value:"",onChange:function(){}})},gC=mC;function fd(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function vC(){return fd(/^iPhone/i)}function $v(){return fd(/^Mac/i)}function xC(){return fd(/^iPad/i)||$v()&&navigator.maxTouchPoints>1}function yC(){return vC()||xC()}function wC(){return $v()||yC()}var bC=function(t){return t.label},SC=function(t){return t.label},kC=function(t){return t.value},jC=function(t){return!!t.isDisabled},CC={clearIndicator:sj,container:X4,control:hj,dropdownIndicator:oj,group:xj,groupHeading:wj,indicatorsContainer:ej,indicatorSeparator:uj,input:jj,loadingIndicator:fj,loadingMessage:H4,menu:z4,menuList:U4,menuPortal:K4,multiValue:Tj,multiValueLabel:Pj,multiValueRemove:Mj,noOptionsMessage:W4,option:Fj,placeholder:Vj,singleValue:Bj,valueContainer:J4},EC={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},_C=4,Uv=4,OC=38,TC=Uv*2,PC={baseUnit:Uv,controlHeight:OC,menuGutter:TC},Tl={borderRadius:_C,colors:EC,spacing:PC},MC={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:yp(),captureMenuScroll:!yp(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:oC(),formatGroupLabel:bC,getOptionLabel:SC,getOptionValue:kC,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:jC,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!O4(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var n=t.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function Mp(e,t,n,r){var i=Hv(e,t,n),o=Yv(e,t,n),a=Wv(e,t),l=qa(e,t);return{type:"option",data:t,isDisabled:i,isSelected:o,label:a,value:l,index:r}}function ga(e,t){return e.options.map(function(n,r){if("options"in n){var i=n.options.map(function(a,l){return Mp(e,a,t,l)}).filter(function(a){return Ip(e,a)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var o=Mp(e,n,t,r);return Ip(e,o)?o:void 0}).filter(M4)}function Bv(e){return e.reduce(function(t,n){return n.type==="group"?t.push.apply(t,sd(n.options.map(function(r){return r.data}))):t.push(n.data),t},[])}function Rp(e,t){return e.reduce(function(n,r){return r.type==="group"?n.push.apply(n,sd(r.options.map(function(i){return{data:i.data,id:"".concat(t,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(t,"-").concat(r.index)}),n},[])}function RC(e,t){return Bv(ga(e,t))}function Ip(e,t){var n=e.inputValue,r=n===void 0?"":n,i=t.data,o=t.isSelected,a=t.label,l=t.value;return(!Kv(e)||!o)&&Qv(e,{label:a,value:l,data:i},r)}function IC(e,t){var n=e.focusedValue,r=e.selectValue,i=r.indexOf(n);if(i>-1){var o=t.indexOf(n);if(o>-1)return n;if(i<t.length)return t[i]}return null}function LC(e,t){var n=e.focusedOption;return n&&t.indexOf(n)>-1?n:t[0]}var Pl=function(t,n){var r,i=(r=t.find(function(o){return o.data===n}))===null||r===void 0?void 0:r.id;return i||null},Wv=function(t,n){return t.getOptionLabel(n)},qa=function(t,n){return t.getOptionValue(n)};function Hv(e,t,n){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,n):!1}function Yv(e,t,n){if(n.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,n);var r=qa(e,t);return n.some(function(i){return qa(e,i)===r})}function Qv(e,t,n){return e.filterOption?e.filterOption(t,n):!0}var Kv=function(t){var n=t.hideSelectedOptions,r=t.isMulti;return n===void 0?r:n},AC=1,Gv=function(e){e4(n,e);var t=i4(n);function n(r){var i;if(Jk(this,n),i=t.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.isAppleDevice=wC(),i.controlRef=null,i.getControlRef=function(s){i.controlRef=s},i.focusedOptionRef=null,i.getFocusedOptionRef=function(s){i.focusedOptionRef=s},i.menuListRef=null,i.getMenuListRef=function(s){i.menuListRef=s},i.inputRef=null,i.getInputRef=function(s){i.inputRef=s},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(s,u){var h=i.props,p=h.onChange,v=h.name;u.name=v,i.ariaOnChange(s,u),p(s,u)},i.setValue=function(s,u,h){var p=i.props,v=p.closeMenuOnSelect,x=p.isMulti,m=p.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:m}),v&&(i.setState({inputIsHiddenAfterUpdate:!x}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(s,{action:u,option:h})},i.selectOption=function(s){var u=i.props,h=u.blurInputOnSelect,p=u.isMulti,v=u.name,x=i.state.selectValue,m=p&&i.isOptionSelected(s,x),y=i.isOptionDisabled(s,x);if(m){var b=i.getOptionValue(s);i.setValue(x.filter(function(d){return i.getOptionValue(d)!==b}),"deselect-option",s)}else if(!y)p?i.setValue([].concat(sd(x),[s]),"select-option",s):i.setValue(s,"select-option");else{i.ariaOnChange(s,{action:"select-option",option:s,name:v});return}h&&i.blurInput()},i.removeValue=function(s){var u=i.props.isMulti,h=i.state.selectValue,p=i.getOptionValue(s),v=h.filter(function(m){return i.getOptionValue(m)!==p}),x=Go(u,v,v[0]||null);i.onChange(x,{action:"remove-value",removedValue:s}),i.focusInput()},i.clearValue=function(){var s=i.state.selectValue;i.onChange(Go(i.props.isMulti,[],null),{action:"clear",removedValues:s})},i.popValue=function(){var s=i.props.isMulti,u=i.state.selectValue,h=u[u.length-1],p=u.slice(0,u.length-1),v=Go(s,p,p[0]||null);i.onChange(v,{action:"pop-value",removedValue:h})},i.getFocusedOptionId=function(s){return Pl(i.state.focusableOptionsWithIds,s)},i.getFocusableOptionsWithIds=function(){return Rp(ga(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var s=arguments.length,u=new Array(s),h=0;h<s;h++)u[h]=arguments[h];return k4.apply(void 0,[i.props.classNamePrefix].concat(u))},i.getOptionLabel=function(s){return Wv(i.props,s)},i.getOptionValue=function(s){return qa(i.props,s)},i.getStyles=function(s,u){var h=i.props.unstyled,p=CC[s](u,h);p.boxSizing="border-box";var v=i.props.styles[s];return v?v(p,u):p},i.getClassNames=function(s,u){var h,p;return(h=(p=i.props.classNames)[s])===null||h===void 0?void 0:h.call(p,u)},i.getElementId=function(s){return"".concat(i.state.instancePrefix,"-").concat(s)},i.getComponents=function(){return Qj(i.props)},i.buildCategorizedOptions=function(){return ga(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return Bv(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(s,u){i.setState({ariaSelection:q({value:s},u)})},i.onMenuMouseDown=function(s){s.button===0&&(s.stopPropagation(),s.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(s){i.blockOptionHover=!1},i.onControlMouseDown=function(s){if(!s.defaultPrevented){var u=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&i.onMenuClose():u&&i.openMenu("first"):(u&&(i.openAfterFocus=!0),i.focusInput()),s.target.tagName!=="INPUT"&&s.target.tagName!=="TEXTAREA"&&s.preventDefault()}},i.onDropdownIndicatorMouseDown=function(s){if(!(s&&s.type==="mousedown"&&s.button!==0)&&!i.props.isDisabled){var u=i.props,h=u.isMulti,p=u.menuIsOpen;i.focusInput(),p?(i.setState({inputIsHiddenAfterUpdate:!h}),i.onMenuClose()):i.openMenu("first"),s.preventDefault()}},i.onClearIndicatorMouseDown=function(s){s&&s.type==="mousedown"&&s.button!==0||(i.clearValue(),s.preventDefault(),i.openAfterFocus=!1,s.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(s){typeof i.props.closeMenuOnScroll=="boolean"?s.target instanceof HTMLElement&&zs(s.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(s)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(s){var u=s.touches,h=u&&u.item(0);h&&(i.initialTouchX=h.clientX,i.initialTouchY=h.clientY,i.userIsDragging=!1)},i.onTouchMove=function(s){var u=s.touches,h=u&&u.item(0);if(h){var p=Math.abs(h.clientX-i.initialTouchX),v=Math.abs(h.clientY-i.initialTouchY),x=5;i.userIsDragging=p>x||v>x}},i.onTouchEnd=function(s){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(s.target)&&i.menuListRef&&!i.menuListRef.contains(s.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(s){i.userIsDragging||i.onControlMouseDown(s)},i.onClearIndicatorTouchEnd=function(s){i.userIsDragging||i.onClearIndicatorMouseDown(s)},i.onDropdownIndicatorTouchEnd=function(s){i.userIsDragging||i.onDropdownIndicatorMouseDown(s)},i.handleInputChange=function(s){var u=i.props.inputValue,h=s.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(h,{action:"input-change",prevInputValue:u}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(s){i.props.onFocus&&i.props.onFocus(s),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(s){var u=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(s),i.onInputChange("",{action:"input-blur",prevInputValue:u}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(s){if(!(i.blockOptionHover||i.state.focusedOption===s)){var u=i.getFocusableOptions(),h=u.indexOf(s);i.setState({focusedOption:s,focusedOptionId:h>-1?i.getFocusedOptionId(s):null})}},i.shouldHideSelectedOptions=function(){return Kv(i.props)},i.onValueInputFocus=function(s){s.preventDefault(),s.stopPropagation(),i.focus()},i.onKeyDown=function(s){var u=i.props,h=u.isMulti,p=u.backspaceRemovesValue,v=u.escapeClearsValue,x=u.inputValue,m=u.isClearable,y=u.isDisabled,b=u.menuIsOpen,d=u.onKeyDown,f=u.tabSelectsValue,g=u.openMenuOnFocus,w=i.state,S=w.focusedOption,T=w.focusedValue,_=w.selectValue;if(!y&&!(typeof d=="function"&&(d(s),s.defaultPrevented))){switch(i.blockOptionHover=!0,s.key){case"ArrowLeft":if(!h||x)return;i.focusValue("previous");break;case"ArrowRight":if(!h||x)return;i.focusValue("next");break;case"Delete":case"Backspace":if(x)return;if(T)i.removeValue(T);else{if(!p)return;h?i.popValue():m&&i.clearValue()}break;case"Tab":if(i.isComposing||s.shiftKey||!b||!f||!S||g&&i.isOptionSelected(S,_))return;i.selectOption(S);break;case"Enter":if(s.keyCode===229)break;if(b){if(!S||i.isComposing)return;i.selectOption(S);break}return;case"Escape":b?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:x}),i.onMenuClose()):m&&v&&i.clearValue();break;case" ":if(x)return;if(!b){i.openMenu("first");break}if(!S)return;i.selectOption(S);break;case"ArrowUp":b?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":b?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!b)return;i.focusOption("pageup");break;case"PageDown":if(!b)return;i.focusOption("pagedown");break;case"Home":if(!b)return;i.focusOption("first");break;case"End":if(!b)return;i.focusOption("last");break;default:return}s.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++AC),i.state.selectValue=vp(r.value),r.menuIsOpen&&i.state.selectValue.length){var o=i.getFocusableOptionsWithIds(),a=i.buildFocusableOptions(),l=a.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=o,i.state.focusedOption=a[l],i.state.focusedOptionId=Pl(o,a[l])}return i}return Zk(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&xp(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(i){var o=this.props,a=o.isDisabled,l=o.menuIsOpen,s=this.state.isFocused;(s&&!a&&i.isDisabled||s&&l&&!i.menuIsOpen)&&this.focusInput(),s&&a&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!s&&!a&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(xp(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,o){this.props.onInputChange(i,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var o=this,a=this.state,l=a.selectValue,s=a.isFocused,u=this.buildFocusableOptions(),h=i==="first"?0:u.length-1;if(!this.props.isMulti){var p=u.indexOf(l[0]);p>-1&&(h=p)}this.scrollToFocusedOptionOnUpdate=!(s&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[h],focusedOptionId:this.getFocusedOptionId(u[h])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(i){var o=this.state,a=o.selectValue,l=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var s=a.indexOf(l);l||(s=-1);var u=a.length-1,h=-1;if(a.length){switch(i){case"previous":s===0?h=0:s===-1?h=u:h=s-1;break;case"next":s>-1&&s<u&&(h=s+1);break}this.setState({inputIsHidden:h!==-1,focusedValue:a[h]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,a=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var s=0,u=l.indexOf(a);a||(u=-1),i==="up"?s=u>0?u-1:l.length-1:i==="down"?s=(u+1)%l.length:i==="pageup"?(s=u-o,s<0&&(s=0)):i==="pagedown"?(s=u+o,s>l.length-1&&(s=l.length-1)):i==="last"&&(s=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[s],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[s])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Tl):q(q({},Tl),this.props.theme):Tl}},{key:"getCommonProps",value:function(){var i=this.clearValue,o=this.cx,a=this.getStyles,l=this.getClassNames,s=this.getValue,u=this.selectOption,h=this.setValue,p=this.props,v=p.isMulti,x=p.isRtl,m=p.options,y=this.hasValue();return{clearValue:i,cx:o,getStyles:a,getClassNames:l,getValue:s,hasValue:y,isMulti:v,isRtl:x,options:m,selectOption:u,selectProps:p,setValue:h,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,o=i.isClearable,a=i.isMulti;return o===void 0?a:o}},{key:"isOptionDisabled",value:function(i,o){return Hv(this.props,i,o)}},{key:"isOptionSelected",value:function(i,o){return Yv(this.props,i,o)}},{key:"filterOption",value:function(i,o){return Qv(this.props,i,o)}},{key:"formatOptionLabel",value:function(i,o){if(typeof this.props.formatOptionLabel=="function"){var a=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(i,{context:o,inputValue:a,selectValue:l})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,o=i.isDisabled,a=i.isSearchable,l=i.inputId,s=i.inputValue,u=i.tabIndex,h=i.form,p=i.menuIsOpen,v=i.required,x=this.getComponents(),m=x.Input,y=this.state,b=y.inputIsHidden,d=y.ariaSelection,f=this.commonProps,g=l||this.getElementId("input"),w=q(q(q({"aria-autocomplete":"list","aria-expanded":p,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":v,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},p&&{"aria-controls":this.getElementId("listbox")}),!a&&{"aria-readonly":!0}),this.hasValue()?(d==null?void 0:d.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return a?A.createElement(m,J({},f,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:g,innerRef:this.getInputRef,isDisabled:o,isHidden:b,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:h,type:"text",value:s},w)):A.createElement(sC,J({id:g,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Ga,onFocus:this.onInputFocus,disabled:o,tabIndex:u,inputMode:"none",form:h,value:""},w))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,o=this.getComponents(),a=o.MultiValue,l=o.MultiValueContainer,s=o.MultiValueLabel,u=o.MultiValueRemove,h=o.SingleValue,p=o.Placeholder,v=this.commonProps,x=this.props,m=x.controlShouldRenderValue,y=x.isDisabled,b=x.isMulti,d=x.inputValue,f=x.placeholder,g=this.state,w=g.selectValue,S=g.focusedValue,T=g.isFocused;if(!this.hasValue()||!m)return d?null:A.createElement(p,J({},v,{key:"placeholder",isDisabled:y,isFocused:T,innerProps:{id:this.getElementId("placeholder")}}),f);if(b)return w.map(function(j,C){var P=j===S,M="".concat(i.getOptionLabel(j),"-").concat(i.getOptionValue(j));return A.createElement(a,J({},v,{components:{Container:l,Label:s,Remove:u},isFocused:P,isDisabled:y,key:M,index:C,removeProps:{onClick:function(){return i.removeValue(j)},onTouchEnd:function(){return i.removeValue(j)},onMouseDown:function(L){L.preventDefault()}},data:j}),i.formatOptionLabel(j,"value"))});if(d)return null;var _=w[0];return A.createElement(h,J({},v,{data:_,isDisabled:y}),this.formatOptionLabel(_,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),o=i.ClearIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,h=this.state.isFocused;if(!this.isClearable()||!o||s||!this.hasValue()||u)return null;var p={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return A.createElement(o,J({},a,{innerProps:p,isFocused:h}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),o=i.LoadingIndicator,a=this.commonProps,l=this.props,s=l.isDisabled,u=l.isLoading,h=this.state.isFocused;if(!o||!u)return null;var p={"aria-hidden":"true"};return A.createElement(o,J({},a,{innerProps:p,isDisabled:s,isFocused:h}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator,a=i.IndicatorSeparator;if(!o||!a)return null;var l=this.commonProps,s=this.props.isDisabled,u=this.state.isFocused;return A.createElement(a,J({},l,{isDisabled:s,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator;if(!o)return null;var a=this.commonProps,l=this.props.isDisabled,s=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return A.createElement(o,J({},a,{innerProps:u,isDisabled:l,isFocused:s}))}},{key:"renderMenu",value:function(){var i=this,o=this.getComponents(),a=o.Group,l=o.GroupHeading,s=o.Menu,u=o.MenuList,h=o.MenuPortal,p=o.LoadingMessage,v=o.NoOptionsMessage,x=o.Option,m=this.commonProps,y=this.state.focusedOption,b=this.props,d=b.captureMenuScroll,f=b.inputValue,g=b.isLoading,w=b.loadingMessage,S=b.minMenuHeight,T=b.maxMenuHeight,_=b.menuIsOpen,j=b.menuPlacement,C=b.menuPosition,P=b.menuPortalTarget,M=b.menuShouldBlockScroll,I=b.menuShouldScrollIntoView,L=b.noOptionsMessage,U=b.onMenuScrollToTop,H=b.onMenuScrollToBottom;if(!_)return null;var Z=function(_e,Se){var He=_e.type,pe=_e.data,Pe=_e.isDisabled,Xe=_e.isSelected,Tt=_e.label,z=_e.value,Y=y===pe,oe=Pe?void 0:function(){return i.onOptionHover(pe)},ie=Pe?void 0:function(){return i.selectOption(pe)},re="".concat(i.getElementId("option"),"-").concat(Se),le={id:re,onClick:ie,onMouseMove:oe,onMouseOver:oe,tabIndex:-1,role:"option","aria-selected":i.isAppleDevice?void 0:Xe};return A.createElement(x,J({},m,{innerProps:le,data:pe,isDisabled:Pe,isSelected:Xe,key:re,label:Tt,type:He,value:z,isFocused:Y,innerRef:Y?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(_e.data,"menu"))},ge;if(this.hasOptions())ge=this.getCategorizedOptions().map(function(ne){if(ne.type==="group"){var _e=ne.data,Se=ne.options,He=ne.index,pe="".concat(i.getElementId("group"),"-").concat(He),Pe="".concat(pe,"-heading");return A.createElement(a,J({},m,{key:pe,data:_e,options:Se,Heading:l,headingProps:{id:Pe,data:ne.data},label:i.formatGroupLabel(ne.data)}),ne.options.map(function(Xe){return Z(Xe,"".concat(He,"-").concat(Xe.index))}))}else if(ne.type==="option")return Z(ne,"".concat(ne.index))});else if(g){var N=w({inputValue:f});if(N===null)return null;ge=A.createElement(p,m,N)}else{var K=L({inputValue:f});if(K===null)return null;ge=A.createElement(v,m,K)}var G={minMenuHeight:S,maxMenuHeight:T,menuPlacement:j,menuPosition:C,menuShouldScrollIntoView:I},de=A.createElement(N4,J({},m,G),function(ne){var _e=ne.ref,Se=ne.placerProps,He=Se.placement,pe=Se.maxHeight;return A.createElement(s,J({},m,G,{innerRef:_e,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:g,placement:He}),A.createElement(pC,{captureEnabled:d,onTopArrive:U,onBottomArrive:H,lockEnabled:M},function(Pe){return A.createElement(u,J({},m,{innerRef:function(Tt){i.getMenuListRef(Tt),Pe(Tt)},innerProps:{role:"listbox","aria-multiselectable":m.isMulti,id:i.getElementId("listbox")},isLoading:g,maxHeight:pe,focusedOption:y}),ge)}))});return P||C==="fixed"?A.createElement(h,J({},m,{appendTo:P,controlElement:this.controlRef,menuPlacement:j,menuPosition:C}),de):de}},{key:"renderFormField",value:function(){var i=this,o=this.props,a=o.delimiter,l=o.isDisabled,s=o.isMulti,u=o.name,h=o.required,p=this.state.selectValue;if(h&&!this.hasValue()&&!l)return A.createElement(gC,{name:u,onFocus:this.onValueInputFocus});if(!(!u||l))if(s)if(a){var v=p.map(function(y){return i.getOptionValue(y)}).join(a);return A.createElement("input",{name:u,type:"hidden",value:v})}else{var x=p.length>0?p.map(function(y,b){return A.createElement("input",{key:"i-".concat(b),name:u,type:"hidden",value:i.getOptionValue(y)})}):A.createElement("input",{name:u,type:"hidden",value:""});return A.createElement("div",null,x)}else{var m=p[0]?this.getOptionValue(p[0]):"";return A.createElement("input",{name:u,type:"hidden",value:m})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,o=this.state,a=o.ariaSelection,l=o.focusedOption,s=o.focusedValue,u=o.isFocused,h=o.selectValue,p=this.getFocusableOptions();return A.createElement(tC,J({},i,{id:this.getElementId("live-region"),ariaSelection:a,focusedOption:l,focusedValue:s,isFocused:u,selectValue:h,focusableOptions:p,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),o=i.Control,a=i.IndicatorsContainer,l=i.SelectContainer,s=i.ValueContainer,u=this.props,h=u.className,p=u.id,v=u.isDisabled,x=u.menuIsOpen,m=this.state.isFocused,y=this.commonProps=this.getCommonProps();return A.createElement(l,J({},y,{className:h,innerProps:{id:p,onKeyDown:this.onKeyDown},isDisabled:v,isFocused:m}),this.renderLiveRegion(),A.createElement(o,J({},y,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:v,isFocused:m,menuIsOpen:x}),A.createElement(s,J({},y,{isDisabled:v}),this.renderPlaceholderOrValue(),this.renderInput()),A.createElement(a,J({},y,{isDisabled:v}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,o){var a=o.prevProps,l=o.clearFocusValueOnUpdate,s=o.inputIsHiddenAfterUpdate,u=o.ariaSelection,h=o.isFocused,p=o.prevWasFocused,v=o.instancePrefix,x=i.options,m=i.value,y=i.menuIsOpen,b=i.inputValue,d=i.isMulti,f=vp(m),g={};if(a&&(m!==a.value||x!==a.options||y!==a.menuIsOpen||b!==a.inputValue)){var w=y?RC(i,f):[],S=y?Rp(ga(i,f),"".concat(v,"-option")):[],T=l?IC(o,f):null,_=LC(o,w),j=Pl(S,_);g={selectValue:f,focusedOption:_,focusedOptionId:j,focusableOptionsWithIds:S,focusedValue:T,clearFocusValueOnUpdate:!1}}var C=s!=null&&i!==a?{inputIsHidden:s,inputIsHiddenAfterUpdate:void 0}:{},P=u,M=h&&p;return h&&!M&&(P={value:Go(d,f,f[0]||null),options:f,action:"initial-input-focus"},M=!p),(u==null?void 0:u.action)==="initial-input-focus"&&(P=null),q(q(q({},g),C),{},{prevProps:i,ariaSelection:P,prevWasFocused:M})}}]),n}(A.Component);Gv.defaultProps=MC;var DC=A.forwardRef(function(e,t){var n=qk(e);return A.createElement(Gv,J({ref:t},n))}),FC=DC,Xv={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(eh,function(){return function(n){function r(o){if(i[o])return i[o].exports;var a=i[o]={i:o,l:!1,exports:{}};return n[o].call(a.exports,a,a.exports,r),a.l=!0,a.exports}var i={};return r.m=n,r.c=i,r.d=function(o,a,l){r.o(o,a)||Object.defineProperty(o,a,{configurable:!1,enumerable:!0,get:l})},r.n=function(o){var a=o&&o.__esModule?function(){return o.default}:function(){return o};return r.d(a,"a",a),a},r.o=function(o,a){return Object.prototype.hasOwnProperty.call(o,a)},r.p="",r(r.s=8)}([function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o="swal-button";r.CLASS_NAMES={MODAL:"swal-modal",OVERLAY:"swal-overlay",SHOW_MODAL:"swal-overlay--show-modal",MODAL_TITLE:"swal-title",MODAL_TEXT:"swal-text",ICON:"swal-icon",ICON_CUSTOM:"swal-icon--custom",CONTENT:"swal-content",FOOTER:"swal-footer",BUTTON_CONTAINER:"swal-button-container",BUTTON:o,CONFIRM_BUTTON:o+"--confirm",CANCEL_BUTTON:o+"--cancel",DANGER_BUTTON:o+"--danger",BUTTON_LOADING:o+"--loading",BUTTON_LOADER:o+"__loader"},r.default=r.CLASS_NAMES},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.getNode=function(o){var a="."+o;return document.querySelector(a)},r.stringToNode=function(o){var a=document.createElement("div");return a.innerHTML=o.trim(),a.firstChild},r.insertAfter=function(o,a){var l=a.nextSibling;a.parentNode.insertBefore(o,l)},r.removeNode=function(o){o.parentElement.removeChild(o)},r.throwErr=function(o){throw o=o.replace(/ +(?= )/g,""),"SweetAlert: "+(o=o.trim())},r.isPlainObject=function(o){if(Object.prototype.toString.call(o)!=="[object Object]")return!1;var a=Object.getPrototypeOf(o);return a===null||a===Object.prototype},r.ordinalSuffixOf=function(o){var a=o%10,l=o%100;return a===1&&l!==11?o+"st":a===2&&l!==12?o+"nd":a===3&&l!==13?o+"rd":o+"th"}},function(n,r,i){function o(v){for(var x in v)r.hasOwnProperty(x)||(r[x]=v[x])}Object.defineProperty(r,"__esModule",{value:!0}),o(i(25));var a=i(26);r.overlayMarkup=a.default,o(i(27)),o(i(28)),o(i(29));var l=i(0),s=l.default.MODAL_TITLE,u=l.default.MODAL_TEXT,h=l.default.ICON,p=l.default.FOOTER;r.iconMarkup=`
  <div class="`+h+'"></div>',r.titleMarkup=`
  <div class="`+s+`"></div>
`,r.textMarkup=`
  <div class="`+u+'"></div>',r.footerMarkup=`
  <div class="`+p+`"></div>
`},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(1);r.CONFIRM_KEY="confirm",r.CANCEL_KEY="cancel";var a={visible:!0,text:null,value:null,className:"",closeModal:!0},l=Object.assign({},a,{visible:!1,text:"Cancel",value:null}),s=Object.assign({},a,{text:"OK",value:!0});r.defaultButtonList={cancel:l,confirm:s};var u=function(x){switch(x){case r.CONFIRM_KEY:return s;case r.CANCEL_KEY:return l;default:var m=x.charAt(0).toUpperCase()+x.slice(1);return Object.assign({},a,{text:m,value:x})}},h=function(x,m){var y=u(x);return m===!0?Object.assign({},y,{visible:!0}):typeof m=="string"?Object.assign({},y,{visible:!0,text:m}):o.isPlainObject(m)?Object.assign({visible:!0},y,m):Object.assign({},y,{visible:!1})},p=function(x){for(var m={},y=0,b=Object.keys(x);y<b.length;y++){var d=b[y],f=x[d],g=h(d,f);m[d]=g}return m.cancel||(m.cancel=l),m},v=function(x){var m={};switch(x.length){case 1:m[r.CANCEL_KEY]=Object.assign({},l,{visible:!1});break;case 2:m[r.CANCEL_KEY]=h(r.CANCEL_KEY,x[0]),m[r.CONFIRM_KEY]=h(r.CONFIRM_KEY,x[1]);break;default:o.throwErr("Invalid number of 'buttons' in array ("+x.length+`).
      If you want more than 2 buttons, you need to use an object!`)}return m};r.getButtonListOpts=function(x){var m=r.defaultButtonList;return typeof x=="string"?m[r.CONFIRM_KEY]=h(r.CONFIRM_KEY,x):Array.isArray(x)?m=v(x):o.isPlainObject(x)?m=p(x):x===!0?m=v([!0,!0]):x===!1?m=v([!1,!1]):x===void 0&&(m=r.defaultButtonList),m}},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(1),a=i(2),l=i(0),s=l.default.MODAL,u=l.default.OVERLAY,h=i(30),p=i(31),v=i(32),x=i(33);r.injectElIntoModal=function(d){var f=o.getNode(s),g=o.stringToNode(d);return f.appendChild(g),g};var m=function(d){d.className=s,d.textContent=""},y=function(d,f){m(d);var g=f.className;g&&d.classList.add(g)};r.initModalContent=function(d){var f=o.getNode(s);y(f,d),h.default(d.icon),p.initTitle(d.title),p.initText(d.text),x.default(d.content),v.default(d.buttons,d.dangerMode)};var b=function(){var d=o.getNode(u),f=o.stringToNode(a.modalMarkup);d.appendChild(f)};r.default=b},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(3),a={isOpen:!1,promise:null,actions:{},timer:null},l=Object.assign({},a);r.resetState=function(){l=Object.assign({},a)},r.setActionValue=function(u){if(typeof u=="string")return s(o.CONFIRM_KEY,u);for(var h in u)s(h,u[h])};var s=function(u,h){l.actions[u]||(l.actions[u]={}),Object.assign(l.actions[u],{value:h})};r.setActionOptionsFor=function(u,h){var p=(h===void 0?{}:h).closeModal,v=p===void 0||p;Object.assign(l.actions[u],{closeModal:v})},r.default=l},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(1),a=i(3),l=i(0),s=l.default.OVERLAY,u=l.default.SHOW_MODAL,h=l.default.BUTTON,p=l.default.BUTTON_LOADING,v=i(5);r.openModal=function(){o.getNode(s).classList.add(u),v.default.isOpen=!0};var x=function(){o.getNode(s).classList.remove(u),v.default.isOpen=!1};r.onAction=function(m){m===void 0&&(m=a.CANCEL_KEY);var y=v.default.actions[m],b=y.value;if(y.closeModal===!1){var d=h+"--"+m;o.getNode(d).classList.add(p)}else x();v.default.promise.resolve(b)},r.getState=function(){var m=Object.assign({},v.default);return delete m.promise,delete m.timer,m},r.stopLoading=function(){for(var m=document.querySelectorAll("."+h),y=0;y<m.length;y++)m[y].classList.remove(p)}},function(n,r){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch{typeof window=="object"&&(i=window)}n.exports=i},function(n,r,i){(function(o){n.exports=o.sweetAlert=i(9)}).call(r,i(7))},function(n,r,i){(function(o){n.exports=o.swal=i(10)}).call(r,i(7))},function(n,r,i){typeof window<"u"&&i(11),i(16);var o=i(23).default;n.exports=o},function(n,r,i){var o=i(12);typeof o=="string"&&(o=[[n.i,o,""]]);var a={insertAt:"top"};a.transform=void 0,i(14)(o,a),o.locals&&(n.exports=o.locals)},function(n,r,i){r=n.exports=i(13)(void 0),r.push([n.i,'.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button:not([disabled]):hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}',""])},function(n,r){function i(a,l){var s=a[1]||"",u=a[3];if(!u)return s;if(l&&typeof btoa=="function"){var h=o(u);return[s].concat(u.sources.map(function(p){return"/*# sourceURL="+u.sourceRoot+p+" */"})).concat([h]).join(`
`)}return[s].join(`
`)}function o(a){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"}n.exports=function(a){var l=[];return l.toString=function(){return this.map(function(s){var u=i(s,a);return s[2]?"@media "+s[2]+"{"+u+"}":u}).join("")},l.i=function(s,u){typeof s=="string"&&(s=[[null,s,""]]);for(var h={},p=0;p<this.length;p++){var v=this[p][0];typeof v=="number"&&(h[v]=!0)}for(p=0;p<s.length;p++){var x=s[p];typeof x[0]=="number"&&h[x[0]]||(u&&!x[2]?x[2]=u:u&&(x[2]="("+x[2]+") and ("+u+")"),l.push(x))}},l}},function(n,r,i){function o(j,C){for(var P=0;P<j.length;P++){var M=j[P],I=b[M.id];if(I){I.refs++;for(var L=0;L<I.parts.length;L++)I.parts[L](M.parts[L]);for(;L<M.parts.length;L++)I.parts.push(v(M.parts[L],C))}else{for(var U=[],L=0;L<M.parts.length;L++)U.push(v(M.parts[L],C));b[M.id]={id:M.id,refs:1,parts:U}}}}function a(j,C){for(var P=[],M={},I=0;I<j.length;I++){var L=j[I],U=C.base?L[0]+C.base:L[0],H=L[1],Z=L[2],ge=L[3],N={css:H,media:Z,sourceMap:ge};M[U]?M[U].parts.push(N):P.push(M[U]={id:U,parts:[N]})}return P}function l(j,C){var P=f(j.insertInto);if(!P)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var M=S[S.length-1];if(j.insertAt==="top")M?M.nextSibling?P.insertBefore(C,M.nextSibling):P.appendChild(C):P.insertBefore(C,P.firstChild),S.push(C);else{if(j.insertAt!=="bottom")throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");P.appendChild(C)}}function s(j){if(j.parentNode===null)return!1;j.parentNode.removeChild(j);var C=S.indexOf(j);C>=0&&S.splice(C,1)}function u(j){var C=document.createElement("style");return j.attrs.type="text/css",p(C,j.attrs),l(j,C),C}function h(j){var C=document.createElement("link");return j.attrs.type="text/css",j.attrs.rel="stylesheet",p(C,j.attrs),l(j,C),C}function p(j,C){Object.keys(C).forEach(function(P){j.setAttribute(P,C[P])})}function v(j,C){var P,M,I,L;if(C.transform&&j.css){if(!(L=C.transform(j.css)))return function(){};j.css=L}if(C.singleton){var U=w++;P=g||(g=u(C)),M=x.bind(null,P,U,!1),I=x.bind(null,P,U,!0)}else j.sourceMap&&typeof URL=="function"&&typeof URL.createObjectURL=="function"&&typeof URL.revokeObjectURL=="function"&&typeof Blob=="function"&&typeof btoa=="function"?(P=h(C),M=y.bind(null,P,C),I=function(){s(P),P.href&&URL.revokeObjectURL(P.href)}):(P=u(C),M=m.bind(null,P),I=function(){s(P)});return M(j),function(H){if(H){if(H.css===j.css&&H.media===j.media&&H.sourceMap===j.sourceMap)return;M(j=H)}else I()}}function x(j,C,P,M){var I=P?"":M.css;if(j.styleSheet)j.styleSheet.cssText=_(C,I);else{var L=document.createTextNode(I),U=j.childNodes;U[C]&&j.removeChild(U[C]),U.length?j.insertBefore(L,U[C]):j.appendChild(L)}}function m(j,C){var P=C.css,M=C.media;if(M&&j.setAttribute("media",M),j.styleSheet)j.styleSheet.cssText=P;else{for(;j.firstChild;)j.removeChild(j.firstChild);j.appendChild(document.createTextNode(P))}}function y(j,C,P){var M=P.css,I=P.sourceMap,L=C.convertToAbsoluteUrls===void 0&&I;(C.convertToAbsoluteUrls||L)&&(M=T(M)),I&&(M+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(I))))+" */");var U=new Blob([M],{type:"text/css"}),H=j.href;j.href=URL.createObjectURL(U),H&&URL.revokeObjectURL(H)}var b={},d=function(j){var C;return function(){return C===void 0&&(C=j.apply(this,arguments)),C}}(function(){return window&&document&&document.all&&!window.atob}),f=function(j){var C={};return function(P){return C[P]===void 0&&(C[P]=j.call(this,P)),C[P]}}(function(j){return document.querySelector(j)}),g=null,w=0,S=[],T=i(15);n.exports=function(j,C){if(typeof DEBUG<"u"&&DEBUG&&typeof document!="object")throw new Error("The style-loader cannot be used in a non-browser environment");C=C||{},C.attrs=typeof C.attrs=="object"?C.attrs:{},C.singleton||(C.singleton=d()),C.insertInto||(C.insertInto="head"),C.insertAt||(C.insertAt="bottom");var P=a(j,C);return o(P,C),function(M){for(var I=[],L=0;L<P.length;L++){var U=P[L],H=b[U.id];H.refs--,I.push(H)}M&&o(a(M,C),C);for(var L=0;L<I.length;L++){var H=I[L];if(H.refs===0){for(var Z=0;Z<H.parts.length;Z++)H.parts[Z]();delete b[H.id]}}}};var _=function(){var j=[];return function(C,P){return j[C]=P,j.filter(Boolean).join(`
`)}}()},function(n,r){n.exports=function(i){var o=typeof window<"u"&&window.location;if(!o)throw new Error("fixUrls requires window.location");if(!i||typeof i!="string")return i;var a=o.protocol+"//"+o.host,l=a+o.pathname.replace(/\/[^\/]*$/,"/");return i.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(s,u){var h=u.trim().replace(/^"(.*)"$/,function(v,x){return x}).replace(/^'(.*)'$/,function(v,x){return x});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(h))return s;var p;return p=h.indexOf("//")===0?h:h.indexOf("/")===0?a+h:l+h.replace(/^\.\//,""),"url("+JSON.stringify(p)+")"})}},function(n,r,i){var o=i(17);typeof window>"u"||window.Promise||(window.Promise=o),i(21),String.prototype.includes||(String.prototype.includes=function(a,l){return typeof l!="number"&&(l=0),!(l+a.length>this.length)&&this.indexOf(a,l)!==-1}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(a,l){if(this==null)throw new TypeError('"this" is null or not defined');var s=Object(this),u=s.length>>>0;if(u===0)return!1;for(var h=0|l,p=Math.max(h>=0?h:u-Math.abs(h),0);p<u;){if(function(v,x){return v===x||typeof v=="number"&&typeof x=="number"&&isNaN(v)&&isNaN(x)}(s[p],a))return!0;p++}return!1}}),typeof window<"u"&&function(a){a.forEach(function(l){l.hasOwnProperty("remove")||Object.defineProperty(l,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})})}([Element.prototype,CharacterData.prototype,DocumentType.prototype])},function(n,r,i){(function(o){(function(a){function l(){}function s(d,f){return function(){d.apply(f,arguments)}}function u(d){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");if(typeof d!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],y(d,this)}function h(d,f){for(;d._state===3;)d=d._value;if(d._state===0)return void d._deferreds.push(f);d._handled=!0,u._immediateFn(function(){var g=d._state===1?f.onFulfilled:f.onRejected;if(g===null)return void(d._state===1?p:v)(f.promise,d._value);var w;try{w=g(d._value)}catch(S){return void v(f.promise,S)}p(f.promise,w)})}function p(d,f){try{if(f===d)throw new TypeError("A promise cannot be resolved with itself.");if(f&&(typeof f=="object"||typeof f=="function")){var g=f.then;if(f instanceof u)return d._state=3,d._value=f,void x(d);if(typeof g=="function")return void y(s(g,f),d)}d._state=1,d._value=f,x(d)}catch(w){v(d,w)}}function v(d,f){d._state=2,d._value=f,x(d)}function x(d){d._state===2&&d._deferreds.length===0&&u._immediateFn(function(){d._handled||u._unhandledRejectionFn(d._value)});for(var f=0,g=d._deferreds.length;f<g;f++)h(d,d._deferreds[f]);d._deferreds=null}function m(d,f,g){this.onFulfilled=typeof d=="function"?d:null,this.onRejected=typeof f=="function"?f:null,this.promise=g}function y(d,f){var g=!1;try{d(function(w){g||(g=!0,p(f,w))},function(w){g||(g=!0,v(f,w))})}catch(w){if(g)return;g=!0,v(f,w)}}var b=setTimeout;u.prototype.catch=function(d){return this.then(null,d)},u.prototype.then=function(d,f){var g=new this.constructor(l);return h(this,new m(d,f,g)),g},u.all=function(d){var f=Array.prototype.slice.call(d);return new u(function(g,w){function S(j,C){try{if(C&&(typeof C=="object"||typeof C=="function")){var P=C.then;if(typeof P=="function")return void P.call(C,function(M){S(j,M)},w)}f[j]=C,--T==0&&g(f)}catch(M){w(M)}}if(f.length===0)return g([]);for(var T=f.length,_=0;_<f.length;_++)S(_,f[_])})},u.resolve=function(d){return d&&typeof d=="object"&&d.constructor===u?d:new u(function(f){f(d)})},u.reject=function(d){return new u(function(f,g){g(d)})},u.race=function(d){return new u(function(f,g){for(var w=0,S=d.length;w<S;w++)d[w].then(f,g)})},u._immediateFn=typeof o=="function"&&function(d){o(d)}||function(d){b(d,0)},u._unhandledRejectionFn=function(d){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",d)},u._setImmediateFn=function(d){u._immediateFn=d},u._setUnhandledRejectionFn=function(d){u._unhandledRejectionFn=d},n!==void 0&&n.exports?n.exports=u:a.Promise||(a.Promise=u)})(this)}).call(r,i(18).setImmediate)},function(n,r,i){function o(l,s){this._id=l,this._clearFn=s}var a=Function.prototype.apply;r.setTimeout=function(){return new o(a.call(setTimeout,window,arguments),clearTimeout)},r.setInterval=function(){return new o(a.call(setInterval,window,arguments),clearInterval)},r.clearTimeout=r.clearInterval=function(l){l&&l.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(window,this._id)},r.enroll=function(l,s){clearTimeout(l._idleTimeoutId),l._idleTimeout=s},r.unenroll=function(l){clearTimeout(l._idleTimeoutId),l._idleTimeout=-1},r._unrefActive=r.active=function(l){clearTimeout(l._idleTimeoutId);var s=l._idleTimeout;s>=0&&(l._idleTimeoutId=setTimeout(function(){l._onTimeout&&l._onTimeout()},s))},i(19),r.setImmediate=setImmediate,r.clearImmediate=clearImmediate},function(n,r,i){(function(o,a){(function(l,s){function u(g){typeof g!="function"&&(g=new Function(""+g));for(var w=new Array(arguments.length-1),S=0;S<w.length;S++)w[S]=arguments[S+1];var T={callback:g,args:w};return y[m]=T,x(m),m++}function h(g){delete y[g]}function p(g){var w=g.callback,S=g.args;switch(S.length){case 0:w();break;case 1:w(S[0]);break;case 2:w(S[0],S[1]);break;case 3:w(S[0],S[1],S[2]);break;default:w.apply(s,S)}}function v(g){if(b)setTimeout(v,0,g);else{var w=y[g];if(w){b=!0;try{p(w)}finally{h(g),b=!1}}}}if(!l.setImmediate){var x,m=1,y={},b=!1,d=l.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(l);f=f&&f.setTimeout?f:l,{}.toString.call(l.process)==="[object process]"?function(){x=function(g){a.nextTick(function(){v(g)})}}():function(){if(l.postMessage&&!l.importScripts){var g=!0,w=l.onmessage;return l.onmessage=function(){g=!1},l.postMessage("","*"),l.onmessage=w,g}}()?function(){var g="setImmediate$"+Math.random()+"$",w=function(S){S.source===l&&typeof S.data=="string"&&S.data.indexOf(g)===0&&v(+S.data.slice(g.length))};l.addEventListener?l.addEventListener("message",w,!1):l.attachEvent("onmessage",w),x=function(S){l.postMessage(g+S,"*")}}():l.MessageChannel?function(){var g=new MessageChannel;g.port1.onmessage=function(w){v(w.data)},x=function(w){g.port2.postMessage(w)}}():d&&"onreadystatechange"in d.createElement("script")?function(){var g=d.documentElement;x=function(w){var S=d.createElement("script");S.onreadystatechange=function(){v(w),S.onreadystatechange=null,g.removeChild(S),S=null},g.appendChild(S)}}():function(){x=function(g){setTimeout(v,0,g)}}(),f.setImmediate=u,f.clearImmediate=h}})(typeof self>"u"?o===void 0?this:o:self)}).call(r,i(7),i(20))},function(n,r){function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(g){if(v===setTimeout)return setTimeout(g,0);if((v===i||!v)&&setTimeout)return v=setTimeout,setTimeout(g,0);try{return v(g,0)}catch{try{return v.call(null,g,0)}catch{return v.call(this,g,0)}}}function l(g){if(x===clearTimeout)return clearTimeout(g);if((x===o||!x)&&clearTimeout)return x=clearTimeout,clearTimeout(g);try{return x(g)}catch{try{return x.call(null,g)}catch{return x.call(this,g)}}}function s(){d&&y&&(d=!1,y.length?b=y.concat(b):f=-1,b.length&&u())}function u(){if(!d){var g=a(s);d=!0;for(var w=b.length;w;){for(y=b,b=[];++f<w;)y&&y[f].run();f=-1,w=b.length}y=null,d=!1,l(g)}}function h(g,w){this.fun=g,this.array=w}function p(){}var v,x,m=n.exports={};(function(){try{v=typeof setTimeout=="function"?setTimeout:i}catch{v=i}try{x=typeof clearTimeout=="function"?clearTimeout:o}catch{x=o}})();var y,b=[],d=!1,f=-1;m.nextTick=function(g){var w=new Array(arguments.length-1);if(arguments.length>1)for(var S=1;S<arguments.length;S++)w[S-1]=arguments[S];b.push(new h(g,w)),b.length!==1||d||a(u)},h.prototype.run=function(){this.fun.apply(null,this.array)},m.title="browser",m.browser=!0,m.env={},m.argv=[],m.version="",m.versions={},m.on=p,m.addListener=p,m.once=p,m.off=p,m.removeListener=p,m.removeAllListeners=p,m.emit=p,m.prependListener=p,m.prependOnceListener=p,m.listeners=function(g){return[]},m.binding=function(g){throw new Error("process.binding is not supported")},m.cwd=function(){return"/"},m.chdir=function(g){throw new Error("process.chdir is not supported")},m.umask=function(){return 0}},function(n,r,i){i(22).polyfill()},function(n,r,i){function o(l,s){if(l==null)throw new TypeError("Cannot convert first argument to object");for(var u=Object(l),h=1;h<arguments.length;h++){var p=arguments[h];if(p!=null)for(var v=Object.keys(Object(p)),x=0,m=v.length;x<m;x++){var y=v[x],b=Object.getOwnPropertyDescriptor(p,y);b!==void 0&&b.enumerable&&(u[y]=p[y])}}return u}function a(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:o})}n.exports={assign:o,polyfill:a}},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(24),a=i(6),l=i(5),s=i(36),u=function(){for(var h=[],p=0;p<arguments.length;p++)h[p]=arguments[p];if(typeof window<"u"){var v=s.getOpts.apply(void 0,h);return new Promise(function(x,m){l.default.promise={resolve:x,reject:m},o.default(v),setTimeout(function(){a.openModal()})})}};u.close=a.onAction,u.getState=a.getState,u.setActionValue=l.setActionValue,u.stopLoading=a.stopLoading,u.setDefaults=s.setDefaults,r.default=u},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(1),a=i(0),l=a.default.MODAL,s=i(4),u=i(34),h=i(35),p=i(1);r.init=function(v){o.getNode(l)||(document.body||p.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"),u.default(),s.default()),s.initModalContent(v),h.default(v)},r.default=r.init},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(0),a=o.default.MODAL;r.modalMarkup=`
  <div class="`+a+'" role="dialog" aria-modal="true"></div>',r.default=r.modalMarkup},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(0),a=o.default.OVERLAY,l=`<div 
    class="`+a+`"
    tabIndex="-1">
  </div>`;r.default=l},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(0),a=o.default.ICON;r.errorIconMarkup=function(){var l=a+"--error",s=l+"__line";return`
    <div class="`+l+`__x-mark">
      <span class="`+s+" "+s+`--left"></span>
      <span class="`+s+" "+s+`--right"></span>
    </div>
  `},r.warningIconMarkup=function(){var l=a+"--warning";return`
    <span class="`+l+`__body">
      <span class="`+l+`__dot"></span>
    </span>
  `},r.successIconMarkup=function(){var l=a+"--success";return`
    <span class="`+l+"__line "+l+`__line--long"></span>
    <span class="`+l+"__line "+l+`__line--tip"></span>

    <div class="`+l+`__ring"></div>
    <div class="`+l+`__hide-corners"></div>
  `}},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(0),a=o.default.CONTENT;r.contentMarkup=`
  <div class="`+a+`">

  </div>
`},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(0),a=o.default.BUTTON_CONTAINER,l=o.default.BUTTON,s=o.default.BUTTON_LOADER;r.buttonMarkup=`
  <div class="`+a+`">

    <button
      class="`+l+`"
    ></button>

    <div class="`+s+`">
      <div></div>
      <div></div>
      <div></div>
    </div>

  </div>
`},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(4),a=i(2),l=i(0),s=l.default.ICON,u=l.default.ICON_CUSTOM,h=["error","warning","success","info"],p={error:a.errorIconMarkup(),warning:a.warningIconMarkup(),success:a.successIconMarkup()},v=function(y,b){var d=s+"--"+y;b.classList.add(d);var f=p[y];f&&(b.innerHTML=f)},x=function(y,b){b.classList.add(u);var d=document.createElement("img");d.src=y,b.appendChild(d)},m=function(y){if(y){var b=o.injectElIntoModal(a.iconMarkup);h.includes(y)?v(y,b):x(y,b)}};r.default=m},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(2),a=i(4),l=function(s){navigator.userAgent.includes("AppleWebKit")&&(s.style.display="none",s.offsetHeight,s.style.display="")};r.initTitle=function(s){if(s){var u=a.injectElIntoModal(o.titleMarkup);u.textContent=s,l(u)}},r.initText=function(s){if(s){var u=document.createDocumentFragment();s.split(`
`).forEach(function(p,v,x){u.appendChild(document.createTextNode(p)),v<x.length-1&&u.appendChild(document.createElement("br"))});var h=a.injectElIntoModal(o.textMarkup);h.appendChild(u),l(h)}}},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(1),a=i(4),l=i(0),s=l.default.BUTTON,u=l.default.DANGER_BUTTON,h=i(3),p=i(2),v=i(6),x=i(5),m=function(b,d,f){var g=d.text,w=d.value,S=d.className,T=d.closeModal,_=o.stringToNode(p.buttonMarkup),j=_.querySelector("."+s),C=s+"--"+b;j.classList.add(C),S&&(Array.isArray(S)?S:S.split(" ")).filter(function(M){return M.length>0}).forEach(function(M){j.classList.add(M)}),f&&b===h.CONFIRM_KEY&&j.classList.add(u),j.textContent=g;var P={};return P[b]=w,x.setActionValue(P),x.setActionOptionsFor(b,{closeModal:T}),j.addEventListener("click",function(){return v.onAction(b)}),_},y=function(b,d){var f=a.injectElIntoModal(p.footerMarkup);for(var g in b){var w=b[g],S=m(g,w,d);w.visible&&f.appendChild(S)}f.children.length===0&&f.remove()};r.default=y},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(3),a=i(4),l=i(2),s=i(5),u=i(6),h=i(0),p=h.default.CONTENT,v=function(y){y.addEventListener("input",function(b){var d=b.target,f=d.value;s.setActionValue(f)}),y.addEventListener("keyup",function(b){if(b.key==="Enter")return u.onAction(o.CONFIRM_KEY)}),setTimeout(function(){y.focus(),s.setActionValue("")},0)},x=function(y,b,d){var f=document.createElement(b),g=p+"__"+b;f.classList.add(g);for(var w in d){var S=d[w];f[w]=S}b==="input"&&v(f),y.appendChild(f)},m=function(y){if(y){var b=a.injectElIntoModal(l.contentMarkup),d=y.element,f=y.attributes;typeof d=="string"?x(b,d,f):b.appendChild(d)}};r.default=m},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(1),a=i(2),l=function(){var s=o.stringToNode(a.overlayMarkup);document.body.appendChild(s)};r.default=l},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(5),a=i(6),l=i(1),s=i(3),u=i(0),h=u.default.MODAL,p=u.default.BUTTON,v=u.default.OVERLAY,x=function(M){M.preventDefault(),f()},m=function(M){M.preventDefault(),g()},y=function(M){if(o.default.isOpen)switch(M.key){case"Escape":return a.onAction(s.CANCEL_KEY)}},b=function(M){if(o.default.isOpen)switch(M.key){case"Tab":return x(M)}},d=function(M){if(o.default.isOpen)return M.key==="Tab"&&M.shiftKey?m(M):void 0},f=function(){var M=l.getNode(p);M&&(M.tabIndex=0,M.focus())},g=function(){var M=l.getNode(h),I=M.querySelectorAll("."+p),L=I.length-1,U=I[L];U&&U.focus()},w=function(M){M[M.length-1].addEventListener("keydown",b)},S=function(M){M[0].addEventListener("keydown",d)},T=function(){var M=l.getNode(h),I=M.querySelectorAll("."+p);I.length&&(w(I),S(I))},_=function(M){if(l.getNode(v)===M.target)return a.onAction(s.CANCEL_KEY)},j=function(M){var I=l.getNode(v);I.removeEventListener("click",_),M&&I.addEventListener("click",_)},C=function(M){o.default.timer&&clearTimeout(o.default.timer),M&&(o.default.timer=window.setTimeout(function(){return a.onAction(s.CANCEL_KEY)},M))},P=function(M){M.closeOnEsc?document.addEventListener("keyup",y):document.removeEventListener("keyup",y),M.dangerMode?f():g(),T(),j(M.closeOnClickOutside),C(M.timer)};r.default=P},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(1),a=i(3),l=i(37),s=i(38),u={title:null,text:null,icon:null,buttons:a.defaultButtonList,content:null,className:null,closeOnClickOutside:!0,closeOnEsc:!0,dangerMode:!1,timer:null},h=Object.assign({},u);r.setDefaults=function(d){h=Object.assign({},u,d)};var p=function(d){var f=d&&d.button,g=d&&d.buttons;return f!==void 0&&g!==void 0&&o.throwErr("Cannot set both 'button' and 'buttons' options!"),f!==void 0?{confirm:f}:g},v=function(d){return o.ordinalSuffixOf(d+1)},x=function(d,f){o.throwErr(v(f)+" argument ('"+d+"') is invalid")},m=function(d,f){var g=d+1,w=f[g];o.isPlainObject(w)||w===void 0||o.throwErr("Expected "+v(g)+" argument ('"+w+"') to be a plain object")},y=function(d,f){var g=d+1,w=f[g];w!==void 0&&o.throwErr("Unexpected "+v(g)+" argument ("+w+")")},b=function(d,f,g,w){var S=typeof f,T=S==="string",_=f instanceof Element;if(T){if(g===0)return{text:f};if(g===1)return{text:f,title:w[0]};if(g===2)return m(g,w),{icon:f};x(f,g)}else{if(_&&g===0)return m(g,w),{content:f};if(o.isPlainObject(f))return y(g,w),f;x(f,g)}};r.getOpts=function(){for(var d=[],f=0;f<arguments.length;f++)d[f]=arguments[f];var g={};d.forEach(function(T,_){var j=b(0,T,_,d);Object.assign(g,j)});var w=p(g);g.buttons=a.getButtonListOpts(w),delete g.button,g.content=l.getContentOpts(g.content);var S=Object.assign({},u,h,g);return Object.keys(S).forEach(function(T){s.DEPRECATED_OPTS[T]&&s.logDeprecation(T)}),S}},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=i(1),a={element:"input",attributes:{placeholder:""}};r.getContentOpts=function(l){var s={};return o.isPlainObject(l)?Object.assign(s,l):l instanceof Element?{element:l}:l==="input"?a:null}},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.logDeprecation=function(o){var a=r.DEPRECATED_OPTS[o],l=a.onlyRename,s=a.replacement,u=a.subOption,h=a.link,p=l?"renamed":"deprecated",v='SweetAlert warning: "'+o+'" option has been '+p+".";s&&(v+=" Please use"+(u?' "'+u+'" in ':" ")+'"'+s+'" instead.');var x="https://sweetalert.js.org";v+=h?" More details: "+x+h:" More details: "+x+"/guides/#upgrading-from-1x",console.warn(v)},r.DEPRECATED_OPTS={type:{replacement:"icon",link:"/docs/#icon"},imageUrl:{replacement:"icon",link:"/docs/#icon"},customClass:{replacement:"className",onlyRename:!0,link:"/docs/#classname"},imageSize:{},showCancelButton:{replacement:"buttons",link:"/docs/#buttons"},showConfirmButton:{replacement:"button",link:"/docs/#button"},confirmButtonText:{replacement:"button",link:"/docs/#button"},confirmButtonColor:{},cancelButtonText:{replacement:"buttons",link:"/docs/#buttons"},closeOnConfirm:{replacement:"button",subOption:"closeModal",link:"/docs/#button"},closeOnCancel:{replacement:"buttons",subOption:"closeModal",link:"/docs/#buttons"},showLoaderOnConfirm:{replacement:"buttons"},animation:{},inputType:{replacement:"content",link:"/docs/#content"},inputValue:{replacement:"content",link:"/docs/#content"},inputPlaceholder:{replacement:"content",link:"/docs/#content"},html:{replacement:"content",link:"/docs/#content"},allowEscapeKey:{replacement:"closeOnEsc",onlyRename:!0,link:"/docs/#closeonesc"},allowClickOutside:{replacement:"closeOnClickOutside",onlyRename:!0,link:"/docs/#closeonclickoutside"}}}])})})(Xv);var zC=Xv.exports;const Lp=ni(zC),NC=(e,t)=>{const[n,r]=A.useState(()=>{try{const o=window.localStorage.getItem(e);return o?JSON.parse(o):t}catch(o){return console.error("Error loading data from localStorage:",o),t}});return[n,o=>{try{const a=o instanceof Function?o(n):o;r(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(a){console.error("Error storing data to localStorage:",a)}}]},Ap=[{value:"",label:"Оберіть послугу"},{value:"Менторство та консультації",label:"Менторство та консультації"},{value:"Діагностика",label:"Діагностика"},{value:"Стратегії",label:"Стратегії"},{value:"Навчання",label:"Навчання"},{value:"Інше",label:"Інше"}],Dp="/healthy-management-project/assets/computer1x-nLk1eyXX.webp",VC="/healthy-management-project/assets/computer@2x-oGWk-qXD.webp",$C="/healthy-management-project/assets/computer_1440_1x-l4N2dq6p.jpg",UC="/healthy-management-project/assets/computer_1440_1x-sUcWDD18.webp",BC="/healthy-management-project/assets/computer_1440@2x-vTT-4SwT.webp",WC="/healthy-management-project/assets/computer_768_1x-Oro_pkzQ.jpg",HC="/healthy-management-project/assets/computer_768_1x-brb-BlfY.webp",YC="/healthy-management-project/assets/computer_768@2x-fbWMIh0a.webp",Fp="/healthy-management-project/assets/mob_computer1x-gdjE7oao.webp",QC="/healthy-management-project/assets/mob_computer@2x-JptvcU_h.webp",pn=()=>c.jsx("svg",{width:"8",height:"8",children:c.jsx("use",{href:`${fa}#star`})});var qv={exports:{}};function KC(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Ml=KC(A),GC=mo;function XC(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var i=n[r],o=Object.getOwnPropertyDescriptor(t,i);o&&o.configurable&&e[i]===void 0&&Object.defineProperty(e,i,o)}return e}function Ku(){return(Ku=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function qC(e,t){e.prototype=Object.create(t.prototype),XC(e.prototype.constructor=e,t)}function JC(e,t){if(e==null)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(i[n]=e[n]);return i}function Cr(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var ZC=function(e,t,n,r,i,o,a,l){if(!e){var s;if(t===void 0)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,o,a,l],h=0;(s=new Error(t.replace(/%s/g,function(){return u[h++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}},zp=ZC;function Np(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var r=e.createTextRange();r.collapse(!0),r.moveStart("character",t),r.moveEnd("character",n-t),r.select()}}function eE(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===e&&(t=-r.moveStart("character",-e.value.length),n=-r.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}var tE={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},nE="_";function Vp(e,t,n){var r="",i="",o=null,a=[];if(t===void 0&&(t=nE),n==null&&(n=tE),!e||typeof e!="string")return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var l=!1;return e.split("").forEach(function(s){l=!l&&s==="\\"||(l||!n[s]?(a.push(r.length),r.length===a.length-1&&(i+=s)):o=r.length+1,r+=s,!1)}),{maskChar:t,formatChars:n,prefix:i,mask:r,lastEditablePosition:o,permanents:a}}function Ct(e,t){return e.permanents.indexOf(t)!==-1}function Ns(e,t,n){var r=e.mask,i=e.formatChars;if(!n)return!1;if(Ct(e,t))return r[t]===n;var o=i[r[t]];return new RegExp(o).test(n)}function $p(e,t){return t.split("").every(function(n,r){return Ct(e,r)||!Ns(e,r,n)})}function Ti(e,t){var n=e.maskChar,r=e.prefix;if(!n){for(;t.length>r.length&&Ct(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var i=r.length,o=t.length;o>=r.length;o--){var a=t[o];if(!Ct(e,o)&&Ns(e,o,a)){i=o+1;break}}return i}function Jv(e,t){return Ti(e,t)===e.mask.length}function gn(e,t){var n=e.maskChar,r=e.mask,i=e.prefix;if(!n){for((t=Gu(e,"",t,0)).length<i.length&&(t=i);t.length<r.length&&Ct(e,t.length);)t+=r[t.length];return t}if(t)return Gu(e,gn(e,""),t,0);for(var o=0;o<r.length;o++)Ct(e,o)?t+=r[o]:t+=n;return t}function rE(e,t,n,r){var i=n+r,o=e.maskChar,a=e.mask,l=e.prefix,s=t.split("");if(o)return s.map(function(h,p){return p<n||i<=p?h:Ct(e,p)?a[p]:o}).join("");for(var u=i;u<s.length;u++)Ct(e,u)&&(s[u]="");return n=Math.max(l.length,n),s.splice(n,i-n),t=s.join(""),gn(e,t)}function Gu(e,t,n,r){var i=e.mask,o=e.maskChar,a=e.prefix,l=n.split(""),s=Jv(e,t);return!o&&r>t.length&&(t+=i.slice(t.length,r)),l.every(function(u){for(;x=u,Ct(e,v=r)&&x!==i[v];){if(r>=t.length&&(t+=i[r]),h=u,p=r,o&&Ct(e,p)&&h===o)return!0;if(++r>=i.length)return!1}var h,p,v,x;return!Ns(e,r,u)&&u!==o||(r<t.length?t=o||s||r<a.length?t.slice(0,r)+u+t.slice(r+1):(t=t.slice(0,r)+u+t.slice(r),gn(e,t)):o||(t+=u),++r<i.length)}),t}function iE(e,t,n,r){var i=e.mask,o=e.maskChar,a=n.split(""),l=r;return a.every(function(s){for(;h=s,Ct(e,u=r)&&h!==i[u];)if(++r>=i.length)return!1;var u,h;return(Ns(e,r,s)||s===o)&&r++,r<i.length}),r-l}function oE(e,t){for(var n=t;0<=n;--n)if(!Ct(e,n))return n;return null}function Vi(e,t){for(var n=e.mask,r=t;r<n.length;++r)if(!Ct(e,r))return r;return null}function Rl(e){return e||e===0?e+"":""}function aE(e,t,n,r,i){var o=e.mask,a=e.prefix,l=e.lastEditablePosition,s=t,u="",h=0,p=0,v=Math.min(i.start,n.start);return n.end>i.start?p=(h=iE(e,r,u=s.slice(i.start,n.end),v))?i.length:0:s.length<r.length&&(p=r.length-s.length),s=r,p&&(p===1&&!i.length&&(v=i.start===n.start?Vi(e,n.start):oE(e,n.start)),s=rE(e,s,v,p)),s=Gu(e,s,u,v),(v+=h)>=o.length?v=o.length:v<a.length&&!h?v=a.length:v>=a.length&&v<l&&h&&(v=Vi(e,v)),u||(u=null),{value:s=gn(e,s),enteredString:u,selection:{start:v,end:v}}}function sE(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}function pt(e){return typeof e=="function"}function lE(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}function Zv(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function Up(e){return(Zv()?lE():function(){return setTimeout(e,1e3/60)})(e)}function Il(e){(Zv()||clearTimeout)(e)}var uE=function(e){function t(r){var i=e.call(this,r)||this;i.focused=!1,i.mounted=!1,i.previousSelection=null,i.selectionDeferId=null,i.saveSelectionLoopDeferId=null,i.saveSelectionLoop=function(){i.previousSelection=i.getSelection(),i.saveSelectionLoopDeferId=Up(i.saveSelectionLoop)},i.runSaveSelectionLoop=function(){i.saveSelectionLoopDeferId===null&&i.saveSelectionLoop()},i.stopSaveSelectionLoop=function(){i.saveSelectionLoopDeferId!==null&&(Il(i.saveSelectionLoopDeferId),i.saveSelectionLoopDeferId=null,i.previousSelection=null)},i.getInputDOMNode=function(){if(!i.mounted)return null;var m=GC.findDOMNode(Cr(Cr(i))),y=typeof window<"u"&&m instanceof window.Element;if(m&&!y)return null;if(m.nodeName!=="INPUT"&&(m=m.querySelector("input")),!m)throw new Error("react-input-mask: inputComponent doesn't contain input node");return m},i.getInputValue=function(){var m=i.getInputDOMNode();return m?m.value:null},i.setInputValue=function(m){var y=i.getInputDOMNode();y&&(i.value=m,y.value=m)},i.setCursorToEnd=function(){var m=Ti(i.maskOptions,i.value),y=Vi(i.maskOptions,m);y!==null&&i.setCursorPosition(y)},i.setSelection=function(m,y,b){b===void 0&&(b={});var d=i.getInputDOMNode(),f=i.isFocused();d&&f&&(b.deferred||Np(d,m,y),i.selectionDeferId!==null&&Il(i.selectionDeferId),i.selectionDeferId=Up(function(){i.selectionDeferId=null,Np(d,m,y)}),i.previousSelection={start:m,end:y,length:Math.abs(y-m)})},i.getSelection=function(){return eE(i.getInputDOMNode())},i.getCursorPosition=function(){return i.getSelection().start},i.setCursorPosition=function(m){i.setSelection(m,m)},i.isFocused=function(){return i.focused},i.getBeforeMaskedValueChangeConfig=function(){var m=i.maskOptions,y=m.mask,b=m.maskChar,d=m.permanents,f=m.formatChars;return{mask:y,maskChar:b,permanents:d,alwaysShowMask:!!i.props.alwaysShowMask,formatChars:f}},i.isInputAutofilled=function(m,y,b,d){var f=i.getInputDOMNode();try{if(f.matches(":-webkit-autofill"))return!0}catch{}return!i.focused||d.end<b.length&&y.end===m.length},i.onChange=function(m){var y=Cr(Cr(i)).beforePasteState,b=Cr(Cr(i)).previousSelection,d=i.props.beforeMaskedValueChange,f=i.getInputValue(),g=i.value,w=i.getSelection();i.isInputAutofilled(f,w,g,b)&&(g=gn(i.maskOptions,""),b={start:0,end:0,length:0}),y&&(b=y.selection,g=y.value,w={start:b.start+f.length,end:b.start+f.length,length:0},f=g.slice(0,b.start)+f+g.slice(b.end),i.beforePasteState=null);var S=aE(i.maskOptions,f,w,g,b),T=S.enteredString,_=S.selection,j=S.value;if(pt(d)){var C=d({value:j,selection:_},{value:g,selection:b},T,i.getBeforeMaskedValueChangeConfig());j=C.value,_=C.selection}i.setInputValue(j),pt(i.props.onChange)&&i.props.onChange(m),i.isWindowsPhoneBrowser?i.setSelection(_.start,_.end,{deferred:!0}):i.setSelection(_.start,_.end)},i.onFocus=function(m){var y=i.props.beforeMaskedValueChange,b=i.maskOptions,d=b.mask,f=b.prefix;if(i.focused=!0,i.mounted=!0,d){if(i.value)Ti(i.maskOptions,i.value)<i.maskOptions.mask.length&&i.setCursorToEnd();else{var g=gn(i.maskOptions,f),w=gn(i.maskOptions,g),S=Ti(i.maskOptions,w),T=Vi(i.maskOptions,S),_={start:T,end:T};if(pt(y)){var j=y({value:w,selection:_},{value:i.value,selection:null},null,i.getBeforeMaskedValueChangeConfig());w=j.value,_=j.selection}var C=w!==i.getInputValue();C&&i.setInputValue(w),C&&pt(i.props.onChange)&&i.props.onChange(m),i.setSelection(_.start,_.end)}i.runSaveSelectionLoop()}pt(i.props.onFocus)&&i.props.onFocus(m)},i.onBlur=function(m){var y=i.props.beforeMaskedValueChange,b=i.maskOptions.mask;if(i.stopSaveSelectionLoop(),i.focused=!1,b&&!i.props.alwaysShowMask&&$p(i.maskOptions,i.value)){var d="";pt(y)&&(d=y({value:d,selection:null},{value:i.value,selection:i.previousSelection},null,i.getBeforeMaskedValueChangeConfig()).value);var f=d!==i.getInputValue();f&&i.setInputValue(d),f&&pt(i.props.onChange)&&i.props.onChange(m)}pt(i.props.onBlur)&&i.props.onBlur(m)},i.onMouseDown=function(m){if(!i.focused&&document.addEventListener){i.mouseDownX=m.clientX,i.mouseDownY=m.clientY,i.mouseDownTime=new Date().getTime();var y=function b(d){if(document.removeEventListener("mouseup",b),i.focused){var f=Math.abs(d.clientX-i.mouseDownX),g=Math.abs(d.clientY-i.mouseDownY),w=Math.max(f,g),S=new Date().getTime()-i.mouseDownTime;(w<=10&&S<=200||w<=5&&S<=300)&&i.setCursorToEnd()}};document.addEventListener("mouseup",y)}pt(i.props.onMouseDown)&&i.props.onMouseDown(m)},i.onPaste=function(m){pt(i.props.onPaste)&&i.props.onPaste(m),m.defaultPrevented||(i.beforePasteState={value:i.getInputValue(),selection:i.getSelection()},i.setInputValue(""))},i.handleRef=function(m){i.props.children==null&&pt(i.props.inputRef)&&i.props.inputRef(m)};var o=r.mask,a=r.maskChar,l=r.formatChars,s=r.alwaysShowMask,u=r.beforeMaskedValueChange,h=r.defaultValue,p=r.value;i.maskOptions=Vp(o,a,l),h==null&&(h=""),p==null&&(p=h);var v=Rl(p);if(i.maskOptions.mask&&(s||v)&&(v=gn(i.maskOptions,v),pt(u))){var x=r.value;r.value==null&&(x=h),v=u({value:v,selection:null},{value:x=Rl(x),selection:null},null,i.getBeforeMaskedValueChangeConfig()).value}return i.value=v,i}qC(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=sE(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var r=this.previousSelection,i=this.props,o=i.beforeMaskedValueChange,a=i.alwaysShowMask,l=i.mask,s=i.maskChar,u=i.formatChars,h=this.maskOptions,p=a||this.isFocused(),v=this.props.value!=null,x=v?Rl(this.props.value):this.value,m=r?r.start:null;if(this.maskOptions=Vp(l,s,u),this.maskOptions.mask){!h.mask&&this.isFocused()&&this.runSaveSelectionLoop();var y=this.maskOptions.mask&&this.maskOptions.mask!==h.mask;if(h.mask||v||(x=this.getInputValue()),(y||this.maskOptions.mask&&(x||p))&&(x=gn(this.maskOptions,x)),y){var b=Ti(this.maskOptions,x);(m===null||b<m)&&(m=Jv(this.maskOptions,x)?b:Vi(this.maskOptions,b))}!this.maskOptions.mask||!$p(this.maskOptions,x)||p||v&&this.props.value||(x="");var d={start:m,end:m};if(pt(o)){var f=o({value:x,selection:d},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());x=f.value,d=f.selection}this.value=x;var g=this.getInputValue()!==this.value;g?(this.setInputValue(this.value),this.forceUpdate()):y&&this.forceUpdate();var w=!1;d.start!=null&&d.end!=null&&(w=!r||r.start!==d.start||r.end!==d.end),(w||g)&&this.setSelection(d.start,d.end)}else h.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,this.selectionDeferId!==null&&Il(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var r,i=this.props,o=(i.mask,i.alwaysShowMask,i.maskChar,i.formatChars,i.inputRef,i.beforeMaskedValueChange,i.children),a=JC(i,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(o){pt(o)||zp(!1);var l=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],s=Ku({},a);l.forEach(function(h){return delete s[h]}),r=o(s),l.filter(function(h){return r.props[h]!=null&&r.props[h]!==a[h]}).length&&zp(!1)}else r=Ml.createElement("input",Ku({ref:this.handleRef},a));var u={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(u.onChange=this.onChange,u.onPaste=this.onPaste,u.onMouseDown=this.onMouseDown),a.value!=null&&(u.value=this.value)),r=Ml.cloneElement(r,u)},t}(Ml.Component),cE=uE;qv.exports=cE;var dE=qv.exports;const fE=ni(dE),pE=O.section`
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,hE=O.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    gap: 24px;
  }

  @media screen and (min-width: 1920px) {
    gap: 40px;
  }
`,mE=O.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.33;
  color: var(--typography-black);

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
`,gE=O.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1920px) {
    width: 100%;
    max-height: 860px;
  }
`,Xo=O.img`
  width: 100%;
  height: 100%;
`,vE=O.div`
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  border-radius: 16px;
  background-color: var(--background-white);

  @media screen and (min-width: 768px) {
    padding: 40px;
    gap: 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 628px;
  }

  @media screen and (min-width: 1920px) {
    gap: 40px;
    flex: 1 0 0;
    max-width: 828px;
    padding: 80px;
  }
`,xE=O.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: var(--primary-bluedark);

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.4;
  }

  @media screen and (min-width: 1440px) {
    line-height: 1.2;
  }

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: 1.33;
  }
`,yE=O.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`,Bp=O.label`
  display: flex;
  height: 100px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  gap: 4px;
  align-self: stretch;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  color: var(--primary-bluedark);

  @media screen and (min-width: 768px) {
    height: 104px;
    gap: 6px 4px;
    font-size: 15px;
    line-height: 1.47;
  }

  @media screen and (min-width: 1440px) {
    gap: 10px 4px;
    line-height: 1.2;
  }

  @media screen and (min-width: 1920px) {
    gap: 4px 4px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
  }
`,wE=O(pn)`
  vertical-align: super;
`,Wp=O.input`
  display: flex;
  width: 100%;
  height: 48px;
  padding: 14px 16px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  align-content: flex-start;
  border-radius: 16px;
  border: none;
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  border: 1px solid
    ${e=>e.errors?"var(--secondary-red)":"none"};
  background-color: var(--background-white);

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
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    flex: 1 0 0;
    color: var(--typography-grey);
  }

  @media screen and (min-width: 768px) {
    height: 56px;
    padding: 0 16px;

    &::placeholder {
      font-size: 15px;
      line-height: 1.47;
    }
  }

  @media screen and (min-width: 1440px) {
    &::placeholder {
      line-height: 1.2;
    }
  }

  @media screen and (min-width: 1920px) {
    height: 56px;

    &::placeholder {
      font-size: 16px;
      line-height: 1.5;
    }
  }
`,bE=O.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`,Hp=O.label`
  display: flex;
  height: 100px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  gap: 4px;
  align-self: stretch;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  color: var(--primary-bluedark);

  @media screen and (min-width: 768px) {
    height: 104px;
    gap: 6px 4px;
    font-size: 15px;
    line-height: 1.47;
  }

  @media screen and (min-width: 1440px) {
    gap: 10px 4px;
    line-height: 1.2;
    width: 100%;
  }

  @media screen and (min-width: 1920px) {
    gap: 4px 4px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
  }
`,SE=O(fE)`
  display: flex;
  padding: 14px 16px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  align-content: flex-start;
  border-radius: 16px;
  border: none;
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  border: 1px solid
    ${e=>e.errors?"var(--secondary-red)":"none"};
  background-color: var(--background-white);

  width: 100%;
  height: 48px;

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
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    flex: 1 0 0;
    color: var(--typography-grey);
  }

  @media screen and (min-width: 768px) {
    height: 56px;
    padding: 0 16px;

    &::placeholder {
      font-size: 15px;
      line-height: 1.47;
    }
  }

  @media screen and (min-width: 1440px) {
    &::placeholder {
      line-height: 1.2;
    }
  }

  @media screen and (min-width: 1920px) {
    height: 56px;

    &::placeholder {
      font-size: 16px;
      line-height: 1.5;
    }
  }
`,kE=O.label`
  display: flex;
  height: 172px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  gap: 4px;
  align-self: stretch;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  color: var(--primary-bluedark);

  @media screen and (min-width: 768px) {
    height: 200px;
    gap: 6px 4px;
    font-size: 15px;
    line-height: 1.47;
  }

  @media screen and (min-width: 1440px) {
    gap: 14px 4px;
    line-height: 1.2;
  }

  @media screen and (min-width: 1920px) {
    height: 196px;
    gap: 4px 4px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
  }
`,jE=O.textarea`
  display: flex;
  padding: 16px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  align-content: flex-start;
  border-radius: 16px;
  overflow: hidden;
  border: none;
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  border: 1px solid
    ${e=>e.errors?"var(--secondary-red)":"none"};
  background-color: var(--background-white);
  width: 100%;
  height: 144px;

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
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    flex: 1 0 0;
    color: var(--typography-grey);
  }
  @media screen and (min-width: 768px) {
    height: 168px;

    &::placeholder {
      font-size: 15px;
      line-height: 1.47;
    }
  }

  @media screen and (min-width: 1440px) {
    &::placeholder {
      line-height: 1.2;
    }
  }

  @media screen and (min-width: 1920px) {
    &::placeholder {
      font-size: 16px;
      line-height: 1.5;
    }
  }
`,Si=O.p`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 10px;
  font-weight: 400;
  line-height: 1.33;
  color: var(--secondary-red);

  @media screen and (min-width: 1440px) {
    font-size: 12px;
  }
`,CE=O.button`
  display: flex;
  height: 56px;
  padding: 8px 24px;
  margin-top: 8px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  border: none;
  box-shadow: 0px 0px 8px 0px rgba(248, 248, 248, 0.08);
  background-color: var(--background-bluedark);
  color: var(--system-default-10);

  &:hover {
    font-weight: 600;
  }

  @media screen and (min-width: 768px) {
    margin-top: 16px;
    font-size: 15px;
    line-height: 1.47;
  }

  @media screen and (min-width: 1440px) {
    line-height: 1.2;
  }

  @media screen and (min-width: 1920px) {
    margin-top: 32px;
    font-size: 16px;
    line-height: 1.5;
  }
`;var yo=e=>e.type==="checkbox",Nr=e=>e instanceof Date,ut=e=>e==null;const ex=e=>typeof e=="object";var We=e=>!ut(e)&&!Array.isArray(e)&&ex(e)&&!Nr(e),tx=e=>We(e)&&e.target?yo(e.target)?e.target.checked:e.target.value:e,EE=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,nx=(e,t)=>e.has(EE(t)),_E=e=>{const t=e.constructor&&e.constructor.prototype;return We(t)&&t.hasOwnProperty("isPrototypeOf")},pd=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Ut(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(pd&&(e instanceof Blob||e instanceof FileList))&&(n||We(e)))if(t=n?[]:{},!n&&!_E(e))t=e;else for(const r in e)e.hasOwnProperty(r)&&(t[r]=Ut(e[r]));else return e;return t}var wo=e=>Array.isArray(e)?e.filter(Boolean):[],De=e=>e===void 0,W=(e,t,n)=>{if(!t||!We(e))return n;const r=wo(t.split(/[,[\].]+?/)).reduce((i,o)=>ut(i)?i:i[o],e);return De(r)||r===e?De(e[t])?n:e[t]:r},Lt=e=>typeof e=="boolean";const Ja={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Yt={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},fn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},OE=ke.createContext(null),hd=()=>ke.useContext(OE);var rx=(e,t,n,r=!0)=>{const i={defaultValues:t._defaultValues};for(const o in e)Object.defineProperty(i,o,{get:()=>{const a=o;return t._proxyFormState[a]!==Yt.all&&(t._proxyFormState[a]=!r||Yt.all),n&&(n[a]=!0),e[a]}});return i},Mt=e=>We(e)&&!Object.keys(e).length,ix=(e,t,n,r)=>{n(e);const{name:i,...o}=e;return Mt(o)||Object.keys(o).length>=Object.keys(t).length||Object.keys(o).find(a=>t[a]===(!r||Yt.all))},va=e=>Array.isArray(e)?e:[e],ox=(e,t,n)=>!e||!t||e===t||va(e).some(r=>r&&(n?r===t:r.startsWith(t)||t.startsWith(r)));function md(e){const t=ke.useRef(e);t.current=e,ke.useEffect(()=>{const n=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}function TE(e){const t=hd(),{control:n=t.control,disabled:r,name:i,exact:o}=e||{},[a,l]=ke.useState(n._formState),s=ke.useRef(!0),u=ke.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),h=ke.useRef(i);return h.current=i,md({disabled:r,next:p=>s.current&&ox(h.current,p.name,o)&&ix(p,u.current,n._updateFormState)&&l({...n._formState,...p}),subject:n._subjects.state}),ke.useEffect(()=>(s.current=!0,u.current.isValid&&n._updateValid(!0),()=>{s.current=!1}),[n]),rx(a,n,u.current,!1)}var an=e=>typeof e=="string",ax=(e,t,n,r,i)=>an(e)?(r&&t.watch.add(e),W(n,e,i)):Array.isArray(e)?e.map(o=>(r&&t.watch.add(o),W(n,o))):(r&&(t.watchAll=!0),n);function PE(e){const t=hd(),{control:n=t.control,name:r,defaultValue:i,disabled:o,exact:a}=e||{},l=ke.useRef(r);l.current=r,md({disabled:o,subject:n._subjects.values,next:h=>{ox(l.current,h.name,a)&&u(Ut(ax(l.current,n._names,h.values||n._formValues,!1,i)))}});const[s,u]=ke.useState(n._getWatch(r,i));return ke.useEffect(()=>n._removeUnmounted()),s}var gd=e=>/^\w*$/.test(e),sx=e=>wo(e.replace(/["|']|\]/g,"").split(/\.|\[/)),Ce=(e,t,n)=>{let r=-1;const i=gd(t)?[t]:sx(t),o=i.length,a=o-1;for(;++r<o;){const l=i[r];let s=n;if(r!==a){const u=e[l];s=We(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}e[l]=s,e=e[l]}return e};function ME(e){const t=hd(),{name:n,disabled:r,control:i=t.control,shouldUnregister:o}=e,a=nx(i._names.array,n),l=PE({control:i,name:n,defaultValue:W(i._formValues,n,W(i._defaultValues,n,e.defaultValue)),exact:!0}),s=TE({control:i,name:n}),u=ke.useRef(i.register(n,{...e.rules,value:l,...Lt(e.disabled)?{disabled:e.disabled}:{}}));return ke.useEffect(()=>{const h=i._options.shouldUnregister||o,p=(v,x)=>{const m=W(i._fields,v);m&&(m._f.mount=x)};if(p(n,!0),h){const v=Ut(W(i._options.defaultValues,n));Ce(i._defaultValues,n,v),De(W(i._formValues,n))&&Ce(i._formValues,n,v)}return()=>{(a?h&&!i._state.action:h)?i.unregister(n):p(n,!1)}},[n,i,a,o]),ke.useEffect(()=>{W(i._fields,n)&&i._updateDisabledField({disabled:r,fields:i._fields,name:n,value:W(i._fields,n)._f.value})},[r,n,i]),{field:{name:n,value:l,...Lt(r)||Lt(s.disabled)?{disabled:s.disabled||r}:{},onChange:ke.useCallback(h=>u.current.onChange({target:{value:tx(h),name:n},type:Ja.CHANGE}),[n]),onBlur:ke.useCallback(()=>u.current.onBlur({target:{value:W(i._formValues,n),name:n},type:Ja.BLUR}),[n,i]),ref:h=>{const p=W(i._fields,n);p&&h&&(p._f.ref={focus:()=>h.focus(),select:()=>h.select(),setCustomValidity:v=>h.setCustomValidity(v),reportValidity:()=>h.reportValidity()})}},formState:s,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!W(s.errors,n)},isDirty:{enumerable:!0,get:()=>!!W(s.dirtyFields,n)},isTouched:{enumerable:!0,get:()=>!!W(s.touchedFields,n)},error:{enumerable:!0,get:()=>W(s.errors,n)}})}}const RE=e=>e.render(ME(e));var IE=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{},Yp=e=>({isOnSubmit:!e||e===Yt.onSubmit,isOnBlur:e===Yt.onBlur,isOnChange:e===Yt.onChange,isOnAll:e===Yt.all,isOnTouch:e===Yt.onTouched}),Qp=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const $i=(e,t,n,r)=>{for(const i of n||Object.keys(e)){const o=W(e,i);if(o){const{_f:a,...l}=o;if(a){if(a.refs&&a.refs[0]&&t(a.refs[0],i)&&!r)break;if(a.ref&&t(a.ref,a.name)&&!r)break;$i(l,t)}else We(l)&&$i(l,t)}}};var LE=(e,t,n)=>{const r=wo(W(e,n));return Ce(r,"root",t[n]),Ce(e,n,r),e},vd=e=>e.type==="file",Wn=e=>typeof e=="function",Za=e=>{if(!pd)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},xa=e=>an(e),xd=e=>e.type==="radio",es=e=>e instanceof RegExp;const Kp={value:!1,isValid:!1},Gp={value:!0,isValid:!0};var lx=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!De(e[0].attributes.value)?De(e[0].value)||e[0].value===""?Gp:{value:e[0].value,isValid:!0}:Gp:Kp}return Kp};const Xp={isValid:!1,value:null};var ux=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,Xp):Xp;function qp(e,t,n="validate"){if(xa(e)||Array.isArray(e)&&e.every(xa)||Lt(e)&&!e)return{type:n,message:xa(e)?e:"",ref:t}}var Er=e=>We(e)&&!es(e)?e:{value:e,message:""},Jp=async(e,t,n,r,i)=>{const{ref:o,refs:a,required:l,maxLength:s,minLength:u,min:h,max:p,pattern:v,validate:x,name:m,valueAsNumber:y,mount:b,disabled:d}=e._f,f=W(t,m);if(!b||d)return{};const g=a?a[0]:o,w=I=>{r&&g.reportValidity&&(g.setCustomValidity(Lt(I)?"":I||""),g.reportValidity())},S={},T=xd(o),_=yo(o),j=T||_,C=(y||vd(o))&&De(o.value)&&De(f)||Za(o)&&o.value===""||f===""||Array.isArray(f)&&!f.length,P=IE.bind(null,m,n,S),M=(I,L,U,H=fn.maxLength,Z=fn.minLength)=>{const ge=I?L:U;S[m]={type:I?H:Z,message:ge,ref:o,...P(I?H:Z,ge)}};if(i?!Array.isArray(f)||!f.length:l&&(!j&&(C||ut(f))||Lt(f)&&!f||_&&!lx(a).isValid||T&&!ux(a).isValid)){const{value:I,message:L}=xa(l)?{value:!!l,message:l}:Er(l);if(I&&(S[m]={type:fn.required,message:L,ref:g,...P(fn.required,L)},!n))return w(L),S}if(!C&&(!ut(h)||!ut(p))){let I,L;const U=Er(p),H=Er(h);if(!ut(f)&&!isNaN(f)){const Z=o.valueAsNumber||f&&+f;ut(U.value)||(I=Z>U.value),ut(H.value)||(L=Z<H.value)}else{const Z=o.valueAsDate||new Date(f),ge=G=>new Date(new Date().toDateString()+" "+G),N=o.type=="time",K=o.type=="week";an(U.value)&&f&&(I=N?ge(f)>ge(U.value):K?f>U.value:Z>new Date(U.value)),an(H.value)&&f&&(L=N?ge(f)<ge(H.value):K?f<H.value:Z<new Date(H.value))}if((I||L)&&(M(!!I,U.message,H.message,fn.max,fn.min),!n))return w(S[m].message),S}if((s||u)&&!C&&(an(f)||i&&Array.isArray(f))){const I=Er(s),L=Er(u),U=!ut(I.value)&&f.length>+I.value,H=!ut(L.value)&&f.length<+L.value;if((U||H)&&(M(U,I.message,L.message),!n))return w(S[m].message),S}if(v&&!C&&an(f)){const{value:I,message:L}=Er(v);if(es(I)&&!f.match(I)&&(S[m]={type:fn.pattern,message:L,ref:o,...P(fn.pattern,L)},!n))return w(L),S}if(x){if(Wn(x)){const I=await x(f,t),L=qp(I,g);if(L&&(S[m]={...L,...P(fn.validate,L.message)},!n))return w(L.message),S}else if(We(x)){let I={};for(const L in x){if(!Mt(I)&&!n)break;const U=qp(await x[L](f,t),g,L);U&&(I={...U,...P(L,U.message)},w(U.message),n&&(S[m]=I))}if(!Mt(I)&&(S[m]={ref:g,...I},!n))return S}}return w(!0),S};function AE(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=De(e)?r++:e[t[r++]];return e}function DE(e){for(const t in e)if(e.hasOwnProperty(t)&&!De(e[t]))return!1;return!0}function qe(e,t){const n=Array.isArray(t)?t:gd(t)?[t]:sx(t),r=n.length===1?e:AE(e,n),i=n.length-1,o=n[i];return r&&delete r[o],i!==0&&(We(r)&&Mt(r)||Array.isArray(r)&&DE(r))&&qe(e,n.slice(0,-1)),e}var Ll=()=>{let e=[];return{get observers(){return e},next:i=>{for(const o of e)o.next&&o.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(o=>o!==i)}}),unsubscribe:()=>{e=[]}}},ts=e=>ut(e)||!ex(e);function ur(e,t){if(ts(e)||ts(t))return e===t;if(Nr(e)&&Nr(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n){const o=e[i];if(!r.includes(i))return!1;if(i!=="ref"){const a=t[i];if(Nr(o)&&Nr(a)||We(o)&&We(a)||Array.isArray(o)&&Array.isArray(a)?!ur(o,a):o!==a)return!1}}return!0}var cx=e=>e.type==="select-multiple",FE=e=>xd(e)||yo(e),Al=e=>Za(e)&&e.isConnected,dx=e=>{for(const t in e)if(Wn(e[t]))return!0;return!1};function ns(e,t={}){const n=Array.isArray(e);if(We(e)||n)for(const r in e)Array.isArray(e[r])||We(e[r])&&!dx(e[r])?(t[r]=Array.isArray(e[r])?[]:{},ns(e[r],t[r])):ut(e[r])||(t[r]=!0);return t}function fx(e,t,n){const r=Array.isArray(e);if(We(e)||r)for(const i in e)Array.isArray(e[i])||We(e[i])&&!dx(e[i])?De(t)||ts(n[i])?n[i]=Array.isArray(e[i])?ns(e[i],[]):{...ns(e[i])}:fx(e[i],ut(t)?{}:t[i],n[i]):n[i]=!ur(e[i],t[i]);return n}var Dl=(e,t)=>fx(e,t,ns(t)),px=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>De(e)?e:t?e===""?NaN:e&&+e:n&&an(e)?new Date(e):r?r(e):e;function Fl(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return vd(t)?t.files:xd(t)?ux(e.refs).value:cx(t)?[...t.selectedOptions].map(({value:n})=>n):yo(t)?lx(e.refs).value:px(De(t.value)?e.ref.value:t.value,e)}var zE=(e,t,n,r)=>{const i={};for(const o of e){const a=W(t,o);a&&Ce(i,o,a._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},ki=e=>De(e)?e:es(e)?e.source:We(e)?es(e.value)?e.value.source:e.value:e,NE=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Zp(e,t,n){const r=W(e,n);if(r||gd(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const o=i.join("."),a=W(t,o),l=W(e,o);if(a&&!Array.isArray(a)&&n!==o)return{name:n};if(l&&l.type)return{name:o,error:l};i.pop()}return{name:n}}var VE=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:(n?r.isOnChange:i.isOnChange)?e:!0,$E=(e,t)=>!wo(W(e,t)).length&&qe(e,t);const UE={mode:Yt.onSubmit,reValidateMode:Yt.onChange,shouldFocusError:!0};function BE(e={},t){let n={...UE,...e},r={submitCount:0,isDirty:!1,isLoading:Wn(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:n.errors||{},disabled:!1},i={},o=We(n.defaultValues)||We(n.values)?Ut(n.defaultValues||n.values)||{}:{},a=n.shouldUnregister?{}:Ut(o),l={action:!1,mount:!1,watch:!1},s={mount:new Set,unMount:new Set,array:new Set,watch:new Set},u,h=0;const p={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},v={values:Ll(),array:Ll(),state:Ll()},x=e.resetOptions&&e.resetOptions.keepDirtyValues,m=Yp(n.mode),y=Yp(n.reValidateMode),b=n.criteriaMode===Yt.all,d=k=>E=>{clearTimeout(h),h=setTimeout(k,E)},f=async k=>{if(p.isValid||k){const E=n.resolver?Mt((await P()).errors):await I(i,!0);E!==r.isValid&&v.state.next({isValid:E})}},g=k=>p.isValidating&&v.state.next({isValidating:k}),w=(k,E=[],R,B,$=!0,V=!0)=>{if(B&&R){if(l.action=!0,V&&Array.isArray(W(i,k))){const ee=R(W(i,k),B.argA,B.argB);$&&Ce(i,k,ee)}if(V&&Array.isArray(W(r.errors,k))){const ee=R(W(r.errors,k),B.argA,B.argB);$&&Ce(r.errors,k,ee),$E(r.errors,k)}if(p.touchedFields&&V&&Array.isArray(W(r.touchedFields,k))){const ee=R(W(r.touchedFields,k),B.argA,B.argB);$&&Ce(r.touchedFields,k,ee)}p.dirtyFields&&(r.dirtyFields=Dl(o,a)),v.state.next({name:k,isDirty:U(k,E),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else Ce(a,k,E)},S=(k,E)=>{Ce(r.errors,k,E),v.state.next({errors:r.errors})},T=k=>{r.errors=k,v.state.next({errors:r.errors,isValid:!1})},_=(k,E,R,B)=>{const $=W(i,k);if($){const V=W(a,k,De(R)?W(o,k):R);De(V)||B&&B.defaultChecked||E?Ce(a,k,E?V:Fl($._f)):ge(k,V),l.mount&&f()}},j=(k,E,R,B,$)=>{let V=!1,ee=!1;const je={name:k},Ye=!!(W(i,k)&&W(i,k)._f.disabled);if(!R||B){p.isDirty&&(ee=r.isDirty,r.isDirty=je.isDirty=U(),V=ee!==je.isDirty);const qt=Ye||ur(W(o,k),E);ee=!!(!Ye&&W(r.dirtyFields,k)),qt||Ye?qe(r.dirtyFields,k):Ce(r.dirtyFields,k,!0),je.dirtyFields=r.dirtyFields,V=V||p.dirtyFields&&ee!==!qt}if(R){const qt=W(r.touchedFields,k);qt||(Ce(r.touchedFields,k,R),je.touchedFields=r.touchedFields,V=V||p.touchedFields&&qt!==R)}return V&&$&&v.state.next(je),V?je:{}},C=(k,E,R,B)=>{const $=W(r.errors,k),V=p.isValid&&Lt(E)&&r.isValid!==E;if(e.delayError&&R?(u=d(()=>S(k,R)),u(e.delayError)):(clearTimeout(h),u=null,R?Ce(r.errors,k,R):qe(r.errors,k)),(R?!ur($,R):$)||!Mt(B)||V){const ee={...B,...V&&Lt(E)?{isValid:E}:{},errors:r.errors,name:k};r={...r,...ee},v.state.next(ee)}g(!1)},P=async k=>n.resolver(a,n.context,zE(k||s.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),M=async k=>{const{errors:E}=await P(k);if(k)for(const R of k){const B=W(E,R);B?Ce(r.errors,R,B):qe(r.errors,R)}else r.errors=E;return E},I=async(k,E,R={valid:!0})=>{for(const B in k){const $=k[B];if($){const{_f:V,...ee}=$;if(V){const je=s.array.has(V.name),Ye=await Jp($,a,b,n.shouldUseNativeValidation&&!E,je);if(Ye[V.name]&&(R.valid=!1,E))break;!E&&(W(Ye,V.name)?je?LE(r.errors,Ye,V.name):Ce(r.errors,V.name,Ye[V.name]):qe(r.errors,V.name))}ee&&await I(ee,E,R)}}return R.valid},L=()=>{for(const k of s.unMount){const E=W(i,k);E&&(E._f.refs?E._f.refs.every(R=>!Al(R)):!Al(E._f.ref))&&Xe(k)}s.unMount=new Set},U=(k,E)=>(k&&E&&Ce(a,k,E),!ur(_e(),o)),H=(k,E,R)=>ax(k,s,{...l.mount?a:De(E)?o:an(k)?{[k]:E}:E},R,E),Z=k=>wo(W(l.mount?a:o,k,e.shouldUnregister?W(o,k,[]):[])),ge=(k,E,R={})=>{const B=W(i,k);let $=E;if(B){const V=B._f;V&&(!V.disabled&&Ce(a,k,px(E,V)),$=Za(V.ref)&&ut(E)?"":E,cx(V.ref)?[...V.ref.options].forEach(ee=>ee.selected=$.includes(ee.value)):V.refs?yo(V.ref)?V.refs.length>1?V.refs.forEach(ee=>(!ee.defaultChecked||!ee.disabled)&&(ee.checked=Array.isArray($)?!!$.find(je=>je===ee.value):$===ee.value)):V.refs[0]&&(V.refs[0].checked=!!$):V.refs.forEach(ee=>ee.checked=ee.value===$):vd(V.ref)?V.ref.value="":(V.ref.value=$,V.ref.type||v.values.next({name:k,values:{...a}})))}(R.shouldDirty||R.shouldTouch)&&j(k,$,R.shouldTouch,R.shouldDirty,!0),R.shouldValidate&&ne(k)},N=(k,E,R)=>{for(const B in E){const $=E[B],V=`${k}.${B}`,ee=W(i,V);(s.array.has(k)||!ts($)||ee&&!ee._f)&&!Nr($)?N(V,$,R):ge(V,$,R)}},K=(k,E,R={})=>{const B=W(i,k),$=s.array.has(k),V=Ut(E);Ce(a,k,V),$?(v.array.next({name:k,values:{...a}}),(p.isDirty||p.dirtyFields)&&R.shouldDirty&&v.state.next({name:k,dirtyFields:Dl(o,a),isDirty:U(k,V)})):B&&!B._f&&!ut(V)?N(k,V,R):ge(k,V,R),Qp(k,s)&&v.state.next({...r}),v.values.next({name:k,values:{...a}}),!l.mount&&t()},G=async k=>{const E=k.target;let R=E.name,B=!0;const $=W(i,R),V=()=>E.type?Fl($._f):tx(k),ee=je=>{B=Number.isNaN(je)||je===W(a,R,je)};if($){let je,Ye;const qt=V(),wr=k.type===Ja.BLUR||k.type===Ja.FOCUS_OUT,hx=!NE($._f)&&!n.resolver&&!W(r.errors,R)&&!$._f.deps||VE(wr,W(r.touchedFields,R),r.isSubmitted,y,m),Vs=Qp(R,s,wr);Ce(a,R,qt),wr?($._f.onBlur&&$._f.onBlur(k),u&&u(0)):$._f.onChange&&$._f.onChange(k);const $s=j(R,qt,wr,!1),mx=!Mt($s)||Vs;if(!wr&&v.values.next({name:R,type:k.type,values:{...a}}),hx)return p.isValid&&f(),mx&&v.state.next({name:R,...Vs?{}:$s});if(!wr&&Vs&&v.state.next({...r}),g(!0),n.resolver){const{errors:yd}=await P([R]);if(ee(qt),B){const gx=Zp(r.errors,i,R),wd=Zp(yd,i,gx.name||R);je=wd.error,R=wd.name,Ye=Mt(yd)}}else je=(await Jp($,a,b,n.shouldUseNativeValidation))[R],ee(qt),B&&(je?Ye=!1:p.isValid&&(Ye=await I(i,!0)));B&&($._f.deps&&ne($._f.deps),C(R,Ye,je,$s))}},de=(k,E)=>{if(W(r.errors,E)&&k.focus)return k.focus(),1},ne=async(k,E={})=>{let R,B;const $=va(k);if(g(!0),n.resolver){const V=await M(De(k)?k:$);R=Mt(V),B=k?!$.some(ee=>W(V,ee)):R}else k?(B=(await Promise.all($.map(async V=>{const ee=W(i,V);return await I(ee&&ee._f?{[V]:ee}:ee)}))).every(Boolean),!(!B&&!r.isValid)&&f()):B=R=await I(i);return v.state.next({...!an(k)||p.isValid&&R!==r.isValid?{}:{name:k},...n.resolver||!k?{isValid:R}:{},errors:r.errors,isValidating:!1}),E.shouldFocus&&!B&&$i(i,de,k?$:s.mount),B},_e=k=>{const E={...o,...l.mount?a:{}};return De(k)?E:an(k)?W(E,k):k.map(R=>W(E,R))},Se=(k,E)=>({invalid:!!W((E||r).errors,k),isDirty:!!W((E||r).dirtyFields,k),isTouched:!!W((E||r).touchedFields,k),error:W((E||r).errors,k)}),He=k=>{k&&va(k).forEach(E=>qe(r.errors,E)),v.state.next({errors:k?r.errors:{}})},pe=(k,E,R)=>{const B=(W(i,k,{_f:{}})._f||{}).ref;Ce(r.errors,k,{...E,ref:B}),v.state.next({name:k,errors:r.errors,isValid:!1}),R&&R.shouldFocus&&B&&B.focus&&B.focus()},Pe=(k,E)=>Wn(k)?v.values.subscribe({next:R=>k(H(void 0,E),R)}):H(k,E,!0),Xe=(k,E={})=>{for(const R of k?va(k):s.mount)s.mount.delete(R),s.array.delete(R),E.keepValue||(qe(i,R),qe(a,R)),!E.keepError&&qe(r.errors,R),!E.keepDirty&&qe(r.dirtyFields,R),!E.keepTouched&&qe(r.touchedFields,R),!n.shouldUnregister&&!E.keepDefaultValue&&qe(o,R);v.values.next({values:{...a}}),v.state.next({...r,...E.keepDirty?{isDirty:U()}:{}}),!E.keepIsValid&&f()},Tt=({disabled:k,name:E,field:R,fields:B,value:$})=>{if(Lt(k)){const V=k?void 0:De($)?Fl(R?R._f:W(B,E)._f):$;Ce(a,E,V),j(E,V,!1,!1,!0)}},z=(k,E={})=>{let R=W(i,k);const B=Lt(E.disabled);return Ce(i,k,{...R||{},_f:{...R&&R._f?R._f:{ref:{name:k}},name:k,mount:!0,...E}}),s.mount.add(k),R?Tt({field:R,disabled:E.disabled,name:k,value:E.value}):_(k,!0,E.value),{...B?{disabled:E.disabled}:{},...n.progressive?{required:!!E.required,min:ki(E.min),max:ki(E.max),minLength:ki(E.minLength),maxLength:ki(E.maxLength),pattern:ki(E.pattern)}:{},name:k,onChange:G,onBlur:G,ref:$=>{if($){z(k,E),R=W(i,k);const V=De($.value)&&$.querySelectorAll&&$.querySelectorAll("input,select,textarea")[0]||$,ee=FE(V),je=R._f.refs||[];if(ee?je.find(Ye=>Ye===V):V===R._f.ref)return;Ce(i,k,{_f:{...R._f,...ee?{refs:[...je.filter(Al),V,...Array.isArray(W(o,k))?[{}]:[]],ref:{type:V.type,name:k}}:{ref:V}}}),_(k,!1,void 0,V)}else R=W(i,k,{}),R._f&&(R._f.mount=!1),(n.shouldUnregister||E.shouldUnregister)&&!(nx(s.array,k)&&l.action)&&s.unMount.add(k)}}},Y=()=>n.shouldFocusError&&$i(i,de,s.mount),oe=k=>{Lt(k)&&(v.state.next({disabled:k}),$i(i,(E,R)=>{let B=k;const $=W(i,R);$&&Lt($._f.disabled)&&(B||(B=$._f.disabled)),E.disabled=B},0,!1))},ie=(k,E)=>async R=>{R&&(R.preventDefault&&R.preventDefault(),R.persist&&R.persist());let B=Ut(a);if(v.state.next({isSubmitting:!0}),n.resolver){const{errors:$,values:V}=await P();r.errors=$,B=V}else await I(i);qe(r.errors,"root"),Mt(r.errors)?(v.state.next({errors:{}}),await k(B,R)):(E&&await E({...r.errors},R),Y(),setTimeout(Y)),v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Mt(r.errors),submitCount:r.submitCount+1,errors:r.errors})},re=(k,E={})=>{W(i,k)&&(De(E.defaultValue)?K(k,W(o,k)):(K(k,E.defaultValue),Ce(o,k,E.defaultValue)),E.keepTouched||qe(r.touchedFields,k),E.keepDirty||(qe(r.dirtyFields,k),r.isDirty=E.defaultValue?U(k,W(o,k)):U()),E.keepError||(qe(r.errors,k),p.isValid&&f()),v.state.next({...r}))},le=(k,E={})=>{const R=k?Ut(k):o,B=Ut(R),$=k&&!Mt(k)?B:o;if(E.keepDefaultValues||(o=R),!E.keepValues){if(E.keepDirtyValues||x)for(const V of s.mount)W(r.dirtyFields,V)?Ce($,V,W(a,V)):K(V,W($,V));else{if(pd&&De(k))for(const V of s.mount){const ee=W(i,V);if(ee&&ee._f){const je=Array.isArray(ee._f.refs)?ee._f.refs[0]:ee._f.ref;if(Za(je)){const Ye=je.closest("form");if(Ye){Ye.reset();break}}}}i={}}a=e.shouldUnregister?E.keepDefaultValues?Ut(o):{}:Ut($),v.array.next({values:{...$}}),v.values.next({values:{...$}})}s={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!l.mount&&t(),l.mount=!p.isValid||!!E.keepIsValid,l.watch=!!e.shouldUnregister,v.state.next({submitCount:E.keepSubmitCount?r.submitCount:0,isDirty:E.keepDirty?r.isDirty:!!(E.keepDefaultValues&&!ur(k,o)),isSubmitted:E.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:E.keepDirtyValues?r.dirtyFields:E.keepDefaultValues&&k?Dl(o,k):{},touchedFields:E.keepTouched?r.touchedFields:{},errors:E.keepErrors?r.errors:{},isSubmitSuccessful:E.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},ae=(k,E)=>le(Wn(k)?k(a):k,E);return{control:{register:z,unregister:Xe,getFieldState:Se,handleSubmit:ie,setError:pe,_executeSchema:P,_getWatch:H,_getDirty:U,_updateValid:f,_removeUnmounted:L,_updateFieldArray:w,_updateDisabledField:Tt,_getFieldArray:Z,_reset:le,_resetDefaultValues:()=>Wn(n.defaultValues)&&n.defaultValues().then(k=>{ae(k,n.resetOptions),v.state.next({isLoading:!1})}),_updateFormState:k=>{r={...r,...k}},_disableForm:oe,_subjects:v,_proxyFormState:p,_setErrors:T,get _fields(){return i},get _formValues(){return a},get _state(){return l},set _state(k){l=k},get _defaultValues(){return o},get _names(){return s},set _names(k){s=k},get _formState(){return r},set _formState(k){r=k},get _options(){return n},set _options(k){n={...n,...k}}},trigger:ne,register:z,handleSubmit:ie,watch:Pe,setValue:K,getValues:_e,reset:ae,resetField:re,clearErrors:He,unregister:Xe,setError:pe,setFocus:(k,E={})=>{const R=W(i,k),B=R&&R._f;if(B){const $=B.refs?B.refs[0]:B.ref;$.focus&&($.focus(),E.shouldSelect&&$.select())}},getFieldState:Se}}function WE(e={}){const t=ke.useRef(),n=ke.useRef(),[r,i]=ke.useState({isDirty:!1,isValidating:!1,isLoading:Wn(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:e.errors||{},disabled:!1,defaultValues:Wn(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...BE(e,()=>i(a=>({...a}))),formState:r});const o=t.current.control;return o._options=e,md({subject:o._subjects.state,next:a=>{ix(a,o._proxyFormState,o._updateFormState,!0)&&i({...o._formState})}}),ke.useEffect(()=>o._disableForm(e.disabled),[o,e.disabled]),ke.useEffect(()=>{if(o._proxyFormState.isDirty){const a=o._getDirty();a!==r.isDirty&&o._subjects.state.next({isDirty:a})}},[o,r.isDirty]),ke.useEffect(()=>{e.values&&!ur(e.values,n.current)?(o._reset(e.values,o._options.resetOptions),n.current=e.values,i(a=>({...a}))):o._resetDefaultValues()},[e.values,o]),ke.useEffect(()=>{e.errors&&o._setErrors(e.errors)},[e.errors,o]),ke.useEffect(()=>{o._state.mount||(o._updateValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next({...o._formState})),o._removeUnmounted()}),t.current.formState=rx(r,o),t.current}const HE={container:e=>({...e,width:"100%"}),control:(e,t)=>{const n=t.selectProps.errors;return{...e,display:"flex",height:"48px",padding:"12px 16px",alignItems:"center",flexShrink:"0",gap:"8px",alignSelf:"stretch",alignContent:"flex-start",borderRadius:"16px",outline:"none",border:`1px solid ${n?"var(--secondary-red)":"transparent"}`,backgroundColor:"var(--background-white)",boxShadow:"0px 0px 8px 0px rgba(27, 54, 65, 0.08)","&:hover":{boxShadow:"0px 0px 16px 0px rgba(27, 54, 65, 0.16)"},"&:focus":{outline:"none",border:"1px solid var(--typography-grey)",background:"var(--background-white)",boxShadow:"0px 0px 8px 0px rgba(27, 54, 65, 0.08)"},"@media screen and (min-width: 768px)":{height:"56px"},"@media screen and (min-width: 1440px)":{padding:"14px 16px"},"@media screen and (min-width: 1920px)":{padding:"12px 16px"}}},dropdownIndicator:e=>({...e,color:"#161717",padding:"0"}),indicatorSeparator:()=>({display:"none"}),option:e=>({...e,display:"flex",alignItems:"flex-start",fontSize:"14px",lineHeight:"1.43",fontWeight:"400",backgroundColor:"var(--background-white)",color:"#1B3641","&:hover":{backgroundColor:"rgba(27, 54, 65, 0.2)",fontWeight:"600"},"@media screen and (min-width: 768px)":{fontSize:"15px",lineHeight:"1.47"},"@media screen and (min-width: 1920px)":{fontSize:"16px",lineHeight:"1.5"}}),menu:e=>({...e,height:"auto",marginTop:"0",border:"none",borderRadius:"16px",boxShadow:"0px 0px 8px 0px rgba(27, 54, 65, 0.08)",color:"var(--primary-bluedark)",backgroundColor:"var(--background-white)"}),singleValue:e=>({...e,fontSize:"14px",fontWeight:"500",lineHeight:"1.43",textAlign:"start",flex:"1 0 0",color:"var(--primary-bluedark)","@media screen and (min-width: 768px)":{fontSize:"15px",lineHeight:"1.47"},"@media screen and (min-width: 1920px)":{fontSize:"16px",lineHeight:"1.5"}}),valueContainer:e=>({...e,padding:"0"})},YE=()=>{const e=A.useRef(),[t,n]=NC("key",{name:"",email:"",phone:"",service:"",comment:""}),{name:r,email:i,phone:o,service:a,comment:l}=t,s=Ap.find(f=>f.value===a),{register:u,handleSubmit:h,control:p,setValue:v,formState:{errors:x},reset:m}=WE({mode:"all",shouldFocusError:!1,defaultValues:{}});A.useEffect(()=>{const f=JSON.stringify(t);localStorage.setItem("key",f)},[t]);const y=f=>{v("service",(f==null?void 0:f.value)||""),n({...t,service:(f==null?void 0:f.value)||""})},b=f=>{n({...t,[f.target.name]:f.target.value})},d=async f=>{try{const g={...f,phone:f.phone.replace(/\D/g,"").slice(2)};await Wk.post("https://healthy-management.onrender.com/api/senddata",g),console.log(g),n({name:"",email:"",phone:"",service:"",comment:""}),m(),Lp("Вітаю!","Ваша заявка успішно відправлена!","success",{buttons:!1,timer:5e3})}catch{Lp("Вибачте!","При відправці заявки сталася помилка, спробуйте ще раз!","error",{buttons:!1,timer:5e3})}};return c.jsx(pE,{className:"container",id:"contact",children:c.jsxs(hE,{children:[c.jsx(mE,{children:"Контакт"}),c.jsxs(gE,{children:[c.jsxs("div",{children:[c.jsx(se,{maxWidth:767,children:c.jsx(Xo,{srcSet:`${QC} 2x, ${Fp} 1x`,sizes:"(max-width: 767px) 100vw",src:Fp,alt:"notebook",loading:"lazy"})}),c.jsx(se,{minWidth:768,maxWidth:1439,children:c.jsx(Xo,{srcSet:`${YC} 2x, ${HC} 1x`,type:"image/webp",sizes:"(min-width: 768px) 100vw (max-width: 1439px) 100vw",src:WC,alt:"notebook",loading:"lazy"})}),c.jsx(se,{minWidth:1440,maxWidth:1919,children:c.jsx(Xo,{srcSet:`${BC} 2x, ${UC} 1x`,type:"image/webp",sizes:"(min-width: 1440px) 100vw (max-width: 1919px) 100vw",src:`${$C}`,alt:"notebook",loading:"lazy"})}),c.jsx(se,{minWidth:1920,children:c.jsx(Xo,{srcSet:`${VC} 2x, ${Dp} 1x`,type:"image/webp",sizes:"(min-width: 1920px) 100vw",src:Dp,alt:"notebook",loading:"lazy"})})]}),c.jsxs(vE,{children:[c.jsx(xE,{children:"Залишайте контактні дані і ми з вами зв'яжемось"}),c.jsxs(yE,{onSubmit:h(d),children:[c.jsxs(Bp,{children:["Ім’я",c.jsx(wE,{}),c.jsx(Wp,{type:"text",placeholder:"Введіть своє ім’я",...u("name",{required:"Це поле обов'язкове для заповнення",pattern:{value:/^(?:[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,32}(?:\s+[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,32})?|[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,64})$/,message:"Поле повинно містити одне або два слова"}}),value:r,onChange:b,errors:x.name}),x.name&&c.jsxs(Si,{children:[c.jsx(pn,{}),x.name.message]})]}),c.jsxs(bE,{children:[c.jsxs(Hp,{children:["Емейл",c.jsx(pn,{}),c.jsx(Wp,{type:"email",placeholder:"Введіть емейл",...u("email",{required:"Це поле обов'язкове для заповнення",pattern:{value:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,message:"Введіть коректний емейл"}}),value:i,onChange:b,errors:x.email}),x.email&&c.jsxs(Si,{children:[c.jsx(pn,{}),x.email.message]})]}),c.jsxs(Hp,{children:["Номер телефону",c.jsx(pn,{}),c.jsx(SE,{ref:e,type:"tel",mask:"+38(099)999-99-99",placeholder:"Введіть номер телефону",...u("phone",{required:"Це поле обов'язкове для заповнення",pattern:{value:/^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/,message:"Введіть коректний номер телефона"}}),value:o,onChange:b,errors:x.phone}),x.phone&&c.jsxs(Si,{children:[c.jsx(pn,{}),x.phone.message]})]})]}),c.jsxs(Bp,{children:["Послуга",c.jsx(pn,{}),c.jsx(RE,{name:"service",control:p,shouldUnregister:!1,render:({field:f})=>c.jsx(FC,{...u("service",{required:"Оберіть послугу"}),placeholder:"Оберіть послугу",...f,options:Ap,styles:HE,errors:x.service,onChange:y,value:s})}),x.service&&c.jsxs(Si,{children:[c.jsx(pn,{}),x.service.message]})]}),c.jsxs(kE,{children:["Повідомлення",c.jsx(jE,{name:"comment",placeholder:"Введіть ваше повідомлення",...u("comment",{pattern:{value:/^.{0,500}$/,message:"Максимальна кількість 500 символів"}}),value:l,onChange:b,errors:x.comment}),x.comment&&c.jsxs(Si,{children:[c.jsx(pn,{}),x.comment.message]})]}),c.jsx(CE,{type:"submit",children:"Надіслати"})]})]})]})]})})},QE=O.section`
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`,KE=O.div`
  display: flex;
  flex-direction: column;
  background: var(--background-bluedark);
  border-radius: 16px;
  padding: 24px;
  width: 100%;
  height: auto;

  @media screen and (min-width: 1920px) {
    gap: 40px;
    padding: 80px;
  }
`,GE=O.h2`
  font-size: 24px;
  line-height: 32px;
  color: var(--typography-white);
  font-weight: 600;
  margin-bottom: 16px;

  @media screen and (min-width: 1920px) {
    font-size: 48px;
    line-height: 56px;
    margin-bottom: 0;
  }
`,XE=O.p`
  color: var(--typography-white);
  font-size: 15px;
  line-height: 22px;
  font-weight: 500;
  margin-bottom: 24px;

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    line-height: 28px;
    width: 828px;
    margin-bottom: 0;
  }
`,qE=O.span`
  color: var(--primary-yellow);
  font-size: 15px;
  line-height: 22px;

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
  }
`,JE=O.ul`
  display: flex;
  gap: 24px;
  flex-direction: column;
  margin-bottom: 24px;

  @media screen and (min-width: 1920px) {
    flex-direction: row;
    margin-bottom: 0;
  }
`,ZE=O.li`
  position: relative;
  background: var(--background-white);
  padding: 24px;
  border-radius: 16px;

  @media screen and (min-width: 1920px) {
    width: calc((100% - (24px * 3)) / 4);
    padding: 40px;
  }
`,e_=O.div`
  position: absolute;
  width: 64px;
  height: 64px;
  border-radius: 16px;
  padding: 16px;
  background: var(--primary-yellow);
  right: 17px;
  top: -15px;

  @media screen and (min-width: 1920px) {
    width: 80px;
    height: 80px;
    left: 258px;
    top: -24px;
  }
`,t_=O.a`
  width: 279px;
  height: 56px;
  color: var(--typography-bluedark);
  background: var(--primary-yellow);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  border: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  border-radius: 16px;
  box-shadow: 0px 0px 8px 0px rgba(248, 248, 248, 0.08);
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 1920px) {
    width: 260px;
    font-size: 16px;
    line-height: 24px;
  }

  &:hover {
    box-shadow: 0px 0px 16px 0px rgba(248, 248, 248, 0.16);
    font-weight: 600;
  }

  &:focus {
    box-shadow: 0px 0px 16px 0px rgba(248, 248, 248, 0.16);
    font-weight: 600;
  }
`,n_="/healthy-management-project/assets/icon-WQbGU7FW.svg",r_="/healthy-management-project/assets/icon-2-FNpGPcjZ.svg",i_="/healthy-management-project/assets/icon-3-GZg06_37.svg",o_="/healthy-management-project/assets/icon-4-9BBn0thK.svg",zl=[{title:"Менторство та консультації",about:["Для власників та менеджерів з питань менеджменту та розвитку, медичного маркетингу та комунікацій, з питань програм управління здоров'ям","Стейхолдерам та парнерам з питань медичного менеджменту та маркетингу"],path:n_},{title:"Діагностика",about:["Аудит бізнес-процесів","Аудит маркетингу та сервісу","Аудит системи комунікацій та Сustomer Journey Map"],path:r_},{title:"Стратегії",about:["Проведення стратегічних сесій","Розробка стратегії розвитку та маркетингу ","Розробка стратегій внутрішніх комунікацій","Розробка стратегій управління здоров'ям"],path:i_},{title:"Навчання",about:["Медичний маркетинг","Комунікації та сервіс"],path:o_}],a_=()=>c.jsx(QE,{className:"container",id:"services",children:c.jsxs(KE,{children:[c.jsx(GE,{children:"Послуги"}),c.jsxs(XE,{children:["Будуємо ефективні ",c.jsx(qE,{children:"стратегії здорового менеджменту"})," для бізнесів. Розвивайте свій бізнес за допомогою ефективних стратегій здорового менеджменту."]}),c.jsx(JE,{children:zl==null?void 0:zl.map(e=>c.jsxs(ZE,{children:[c.jsx(ed,{title:e.title,about:e.about,additionalComment:!0}),c.jsx(e_,{children:c.jsx("img",{src:e.path,alt:e.path})})]},e.title))}),c.jsx(t_,{href:"#contact",children:"Замовити консультацію"})]})});function s_(){const e=(t,n)=>{n.preventDefault();const r=document.getElementById(t);if(r){const i=r.getBoundingClientRect(),o=window.pageYOffset||document.documentElement.scrollTop;let a;const l=window.innerWidth;l<=768&&(a=i.top+o-80),(l>768||l<=1440)&&(a=i.top+o-80),l>1440||l<=1920?a=i.top+o-80:a=i.top+o-60,window.scrollTo({top:a,behavior:"smooth"}),setTimeout(()=>{n.target.blur()},1e3)}};return A.useEffect(()=>{fetch("https://healthy-management.onrender.com/api/wakeup")},[]),c.jsxs(c.Fragment,{children:[c.jsx(Vg,{handleSetActiveLink:e}),c.jsxs("main",{children:[c.jsx(Jb,{}),c.jsx(zw,{}),c.jsx(bw,{}),c.jsx(r2,{}),c.jsx(jS,{}),c.jsx(a_,{}),c.jsx(_2,{}),c.jsx(T2,{}),c.jsx(M2,{}),c.jsx(sS,{}),c.jsx(Hw,{}),c.jsx(YE,{})]}),c.jsx(zg,{handleSetActiveLink:e}),c.jsx(ES,{})]})}Nl.createRoot(document.getElementById("root")).render(c.jsx(ke.StrictMode,{children:c.jsx(s_,{})}));
